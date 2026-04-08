/**
 * web/workspace/service.ts – High-level workspace explorer service.
 *
 * Composes the file service, tree cache, and filesystem watcher into a
 * single service that the workspace HTTP handlers interact with.
 *
 * Consumers: web/handlers/workspace.ts creates and uses a WorkspaceService.
 */
import { markWorkspaceIndexStale, getWorkspaceIndexStatus, refreshWorkspaceIndex } from "../../../workspace-search.js";
import { WorkspaceFileService } from "./file-service.js";
import { getWorkspaceGitBranch } from "./git-branch.js";
import { WorkspaceTreeCache } from "./tree-cache.js";
import { startWorkspaceWatcher } from "./watcher.js";
/** High-level workspace explorer service combining files, tree, and watcher. */
export class WorkspaceService {
    treeCache = new WorkspaceTreeCache();
    fileService = new WorkspaceFileService();
    markIndexStale(paths) {
        const affected = paths.filter((entry) => typeof entry === "string" && entry.trim().length > 0);
        if (affected.length === 0)
            return;
        markWorkspaceIndexStale({ paths: affected });
    }
    getTree(pathParam, depthParam, includeHidden = false) {
        return this.treeCache.getTree(pathParam, depthParam, includeHidden);
    }
    getFile(pathParam, maxParam, mode) {
        return this.fileService.getFile(pathParam, maxParam, mode);
    }
    getRaw(pathParam, download = false) {
        return this.fileService.getRaw(pathParam, download);
    }
    getGitBranch(pathParam) {
        const branch = getWorkspaceGitBranch(pathParam);
        return {
            status: 200,
            body: {
                branch: branch?.branch || null,
                repo_path: branch?.repoPath || null,
            },
        };
    }
    getIndexStatus(scopeParam) {
        return {
            status: 200,
            body: getWorkspaceIndexStatus({ scope: scopeParam ?? undefined }),
        };
    }
    async reindex(scopeParam) {
        const snapshot = await refreshWorkspaceIndex({ scope: scopeParam ?? undefined });
        return {
            status: 200,
            body: snapshot,
        };
    }
    attachFile(pathParam) {
        return this.fileService.attachFile(pathParam);
    }
    async uploadFile(pathParam, file, overwrite = false) {
        const result = await this.fileService.uploadFile(pathParam, file, overwrite);
        if (result.status === 200) {
            const body = result.body;
            this.markIndexStale([body?.path]);
        }
        return result;
    }
    createFile(pathParam, nameParam, content) {
        const result = this.fileService.createFile(pathParam, nameParam, content);
        if (result.status === 200) {
            const body = result.body;
            this.markIndexStale([body?.path]);
        }
        return result;
    }
    renameFile(pathParam, nameParam) {
        const result = this.fileService.renameFile(pathParam, nameParam);
        if (result.status === 200) {
            const body = result.body;
            this.markIndexStale([body?.old_path, body?.path]);
        }
        return result;
    }
    moveEntry(pathParam, targetParam) {
        const result = this.fileService.moveEntry(pathParam, targetParam);
        if (result.status === 200) {
            const body = result.body;
            this.markIndexStale([body?.old_path, body?.path, body?.target]);
        }
        return result;
    }
    updateFile(pathParam, content) {
        const result = this.fileService.updateFile(pathParam, content);
        if (result.status === 200) {
            const body = result.body;
            this.markIndexStale([body?.path]);
        }
        return result;
    }
    deleteFile(pathParam) {
        const result = this.fileService.deleteFile(pathParam);
        if (result.status === 200) {
            const body = result.body;
            this.markIndexStale([body?.path]);
        }
        return result;
    }
    downloadZip(pathParam, includeHidden = false) {
        return this.fileService.downloadZip(pathParam, includeHidden);
    }
    startWatcher(onUpdate, includeHidden) {
        return startWorkspaceWatcher(onUpdate, includeHidden);
    }
}
