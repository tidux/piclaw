var AN=Object.defineProperty;var yN=(_)=>_;function MN(_,$){this[_]=yN.bind(null,$)}var PN=(_,$)=>{for(var N in $)AN(_,N,{get:$[N],enumerable:!0,configurable:!0,set:MN.bind($,N)})};var _6,U1,q$,kN,x4,t2,X$,U$,G$,d6,l6,r6,xN,a8={},t8=[],wN=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,$6=Array.isArray;function K4(_,$){for(var N in $)_[N]=$[N];return _}function a6(_){_&&_.parentNode&&_.parentNode.removeChild(_)}function W$(_,$,N){var j,Y,L,Z={};for(L in $)L=="key"?j=$[L]:L=="ref"?Y=$[L]:Z[L]=$[L];if(arguments.length>2&&(Z.children=arguments.length>3?_6.call(arguments,2):N),typeof _=="function"&&_.defaultProps!=null)for(L in _.defaultProps)Z[L]===void 0&&(Z[L]=_.defaultProps[L]);return s8(_,Z,j,Y,null)}function s8(_,$,N,j,Y){var L={type:_,props:$,key:N,ref:j,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:Y==null?++q$:Y,__i:-1,__u:0};return Y==null&&U1.vnode!=null&&U1.vnode(L),L}function N6(_){return _.children}function o8(_,$){this.props=_,this.context=$}function _8(_,$){if($==null)return _.__?_8(_.__,_.__i+1):null;for(var N;$<_.__k.length;$++)if((N=_.__k[$])!=null&&N.__e!=null)return N.__e;return typeof _.type=="function"?_8(_):null}function CN(_){if(_.__P&&_.__d){var $=_.__v,N=$.__e,j=[],Y=[],L=K4({},$);L.__v=$.__v+1,U1.vnode&&U1.vnode(L),t6(_.__P,L,$,_.__n,_.__P.namespaceURI,32&$.__u?[N]:null,j,N==null?_8($):N,!!(32&$.__u),Y),L.__v=$.__v,L.__.__k[L.__i]=L,H$(j,L,Y),$.__e=$.__=null,L.__e!=N&&O$(L)}}function O$(_){if((_=_.__)!=null&&_.__c!=null)return _.__e=_.__c.base=null,_.__k.some(function($){if($!=null&&$.__e!=null)return _.__e=_.__c.base=$.__e}),O$(_)}function e2(_){(!_.__d&&(_.__d=!0)&&x4.push(_)&&!e8.__r++||t2!=U1.debounceRendering)&&((t2=U1.debounceRendering)||X$)(e8)}function e8(){try{for(var _,$=1;x4.length;)x4.length>$&&x4.sort(U$),_=x4.shift(),$=x4.length,CN(_)}finally{x4.length=e8.__r=0}}function z$(_,$,N,j,Y,L,Z,V,Q,B,U){var X,W,J,E,P,f,D,y=j&&j.__k||t8,C=$.length;for(Q=IN(N,$,y,Q,C),X=0;X<C;X++)(J=N.__k[X])!=null&&(W=J.__i!=-1&&y[J.__i]||a8,J.__i=X,f=t6(_,J,W,Y,L,Z,V,Q,B,U),E=J.__e,J.ref&&W.ref!=J.ref&&(W.ref&&e6(W.ref,null,J),U.push(J.ref,J.__c||E,J)),P==null&&E!=null&&(P=E),(D=!!(4&J.__u))||W.__k===J.__k?Q=F$(J,Q,_,D):typeof J.type=="function"&&f!==void 0?Q=f:E&&(Q=E.nextSibling),J.__u&=-7);return N.__e=P,Q}function IN(_,$,N,j,Y){var L,Z,V,Q,B,U=N.length,X=U,W=0;for(_.__k=Array(Y),L=0;L<Y;L++)(Z=$[L])!=null&&typeof Z!="boolean"&&typeof Z!="function"?(typeof Z=="string"||typeof Z=="number"||typeof Z=="bigint"||Z.constructor==String?Z=_.__k[L]=s8(null,Z,null,null,null):$6(Z)?Z=_.__k[L]=s8(N6,{children:Z},null,null,null):Z.constructor===void 0&&Z.__b>0?Z=_.__k[L]=s8(Z.type,Z.props,Z.key,Z.ref?Z.ref:null,Z.__v):_.__k[L]=Z,Q=L+W,Z.__=_,Z.__b=_.__b+1,V=null,(B=Z.__i=TN(Z,N,Q,X))!=-1&&(X--,(V=N[B])&&(V.__u|=2)),V==null||V.__v==null?(B==-1&&(Y>U?W--:Y<U&&W++),typeof Z.type!="function"&&(Z.__u|=4)):B!=Q&&(B==Q-1?W--:B==Q+1?W++:(B>Q?W--:W++,Z.__u|=4))):_.__k[L]=null;if(X)for(L=0;L<U;L++)(V=N[L])!=null&&(2&V.__u)==0&&(V.__e==j&&(j=_8(V)),J$(V,V));return j}function F$(_,$,N,j){var Y,L;if(typeof _.type=="function"){for(Y=_.__k,L=0;Y&&L<Y.length;L++)Y[L]&&(Y[L].__=_,$=F$(Y[L],$,N,j));return $}_.__e!=$&&(j&&($&&_.type&&!$.parentNode&&($=_8(_)),N.insertBefore(_.__e,$||null)),$=_.__e);do $=$&&$.nextSibling;while($!=null&&$.nodeType==8);return $}function TN(_,$,N,j){var Y,L,Z,V=_.key,Q=_.type,B=$[N],U=B!=null&&(2&B.__u)==0;if(B===null&&V==null||U&&V==B.key&&Q==B.type)return N;if(j>(U?1:0)){for(Y=N-1,L=N+1;Y>=0||L<$.length;)if((B=$[Z=Y>=0?Y--:L++])!=null&&(2&B.__u)==0&&V==B.key&&Q==B.type)return Z}return-1}function _$(_,$,N){$[0]=="-"?_.setProperty($,N==null?"":N):_[$]=N==null?"":typeof N!="number"||wN.test($)?N:N+"px"}function r8(_,$,N,j,Y){var L,Z;_:if($=="style")if(typeof N=="string")_.style.cssText=N;else{if(typeof j=="string"&&(_.style.cssText=j=""),j)for($ in j)N&&$ in N||_$(_.style,$,"");if(N)for($ in N)j&&N[$]==j[$]||_$(_.style,$,N[$])}else if($[0]=="o"&&$[1]=="n")L=$!=($=$.replace(G$,"$1")),Z=$.toLowerCase(),$=Z in _||$=="onFocusOut"||$=="onFocusIn"?Z.slice(2):$.slice(2),_.l||(_.l={}),_.l[$+L]=N,N?j?N.u=j.u:(N.u=d6,_.addEventListener($,L?r6:l6,L)):_.removeEventListener($,L?r6:l6,L);else{if(Y=="http://www.w3.org/2000/svg")$=$.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if($!="width"&&$!="height"&&$!="href"&&$!="list"&&$!="form"&&$!="tabIndex"&&$!="download"&&$!="rowSpan"&&$!="colSpan"&&$!="role"&&$!="popover"&&$ in _)try{_[$]=N==null?"":N;break _}catch(V){}typeof N=="function"||(N==null||N===!1&&$[4]!="-"?_.removeAttribute($):_.setAttribute($,$=="popover"&&N==1?"":N))}}function $$(_){return function($){if(this.l){var N=this.l[$.type+_];if($.t==null)$.t=d6++;else if($.t<N.u)return;return N(U1.event?U1.event($):$)}}}function t6(_,$,N,j,Y,L,Z,V,Q,B){var U,X,W,J,E,P,f,D,y,C,u,A,v,o,n,g=$.type;if($.constructor!==void 0)return null;128&N.__u&&(Q=!!(32&N.__u),L=[V=$.__e=N.__e]),(U=U1.__b)&&U($);_:if(typeof g=="function")try{if(D=$.props,y=g.prototype&&g.prototype.render,C=(U=g.contextType)&&j[U.__c],u=U?C?C.props.value:U.__:j,N.__c?f=(X=$.__c=N.__c).__=X.__E:(y?$.__c=X=new g(D,u):($.__c=X=new o8(D,u),X.constructor=g,X.render=SN),C&&C.sub(X),X.state||(X.state={}),X.__n=j,W=X.__d=!0,X.__h=[],X._sb=[]),y&&X.__s==null&&(X.__s=X.state),y&&g.getDerivedStateFromProps!=null&&(X.__s==X.state&&(X.__s=K4({},X.__s)),K4(X.__s,g.getDerivedStateFromProps(D,X.__s))),J=X.props,E=X.state,X.__v=$,W)y&&g.getDerivedStateFromProps==null&&X.componentWillMount!=null&&X.componentWillMount(),y&&X.componentDidMount!=null&&X.__h.push(X.componentDidMount);else{if(y&&g.getDerivedStateFromProps==null&&D!==J&&X.componentWillReceiveProps!=null&&X.componentWillReceiveProps(D,u),$.__v==N.__v||!X.__e&&X.shouldComponentUpdate!=null&&X.shouldComponentUpdate(D,X.__s,u)===!1){$.__v!=N.__v&&(X.props=D,X.state=X.__s,X.__d=!1),$.__e=N.__e,$.__k=N.__k,$.__k.some(function(T){T&&(T.__=$)}),t8.push.apply(X.__h,X._sb),X._sb=[],X.__h.length&&Z.push(X);break _}X.componentWillUpdate!=null&&X.componentWillUpdate(D,X.__s,u),y&&X.componentDidUpdate!=null&&X.__h.push(function(){X.componentDidUpdate(J,E,P)})}if(X.context=u,X.props=D,X.__P=_,X.__e=!1,A=U1.__r,v=0,y)X.state=X.__s,X.__d=!1,A&&A($),U=X.render(X.props,X.state,X.context),t8.push.apply(X.__h,X._sb),X._sb=[];else do X.__d=!1,A&&A($),U=X.render(X.props,X.state,X.context),X.state=X.__s;while(X.__d&&++v<25);X.state=X.__s,X.getChildContext!=null&&(j=K4(K4({},j),X.getChildContext())),y&&!W&&X.getSnapshotBeforeUpdate!=null&&(P=X.getSnapshotBeforeUpdate(J,E)),o=U!=null&&U.type===N6&&U.key==null?D$(U.props.children):U,V=z$(_,$6(o)?o:[o],$,N,j,Y,L,Z,V,Q,B),X.base=$.__e,$.__u&=-161,X.__h.length&&Z.push(X),f&&(X.__E=X.__=null)}catch(T){if($.__v=null,Q||L!=null)if(T.then){for($.__u|=Q?160:128;V&&V.nodeType==8&&V.nextSibling;)V=V.nextSibling;L[L.indexOf(V)]=null,$.__e=V}else{for(n=L.length;n--;)a6(L[n]);s6($)}else $.__e=N.__e,$.__k=N.__k,T.then||s6($);U1.__e(T,$,N)}else L==null&&$.__v==N.__v?($.__k=N.__k,$.__e=N.__e):V=$.__e=fN(N.__e,$,N,j,Y,L,Z,Q,B);return(U=U1.diffed)&&U($),128&$.__u?void 0:V}function s6(_){_&&(_.__c&&(_.__c.__e=!0),_.__k&&_.__k.some(s6))}function H$(_,$,N){for(var j=0;j<N.length;j++)e6(N[j],N[++j],N[++j]);U1.__c&&U1.__c($,_),_.some(function(Y){try{_=Y.__h,Y.__h=[],_.some(function(L){L.call(Y)})}catch(L){U1.__e(L,Y.__v)}})}function D$(_){return typeof _!="object"||_==null||_.__b>0?_:$6(_)?_.map(D$):K4({},_)}function fN(_,$,N,j,Y,L,Z,V,Q){var B,U,X,W,J,E,P,f=N.props||a8,D=$.props,y=$.type;if(y=="svg"?Y="http://www.w3.org/2000/svg":y=="math"?Y="http://www.w3.org/1998/Math/MathML":Y||(Y="http://www.w3.org/1999/xhtml"),L!=null){for(B=0;B<L.length;B++)if((J=L[B])&&"setAttribute"in J==!!y&&(y?J.localName==y:J.nodeType==3)){_=J,L[B]=null;break}}if(_==null){if(y==null)return document.createTextNode(D);_=document.createElementNS(Y,y,D.is&&D),V&&(U1.__m&&U1.__m($,L),V=!1),L=null}if(y==null)f===D||V&&_.data==D||(_.data=D);else{if(L=L&&_6.call(_.childNodes),!V&&L!=null)for(f={},B=0;B<_.attributes.length;B++)f[(J=_.attributes[B]).name]=J.value;for(B in f)J=f[B],B=="dangerouslySetInnerHTML"?X=J:B=="children"||(B in D)||B=="value"&&("defaultValue"in D)||B=="checked"&&("defaultChecked"in D)||r8(_,B,null,J,Y);for(B in D)J=D[B],B=="children"?W=J:B=="dangerouslySetInnerHTML"?U=J:B=="value"?E=J:B=="checked"?P=J:V&&typeof J!="function"||f[B]===J||r8(_,B,J,f[B],Y);if(U)V||X&&(U.__html==X.__html||U.__html==_.innerHTML)||(_.innerHTML=U.__html),$.__k=[];else if(X&&(_.innerHTML=""),z$($.type=="template"?_.content:_,$6(W)?W:[W],$,N,j,y=="foreignObject"?"http://www.w3.org/1999/xhtml":Y,L,Z,L?L[0]:N.__k&&_8(N,0),V,Q),L!=null)for(B=L.length;B--;)a6(L[B]);V||(B="value",y=="progress"&&E==null?_.removeAttribute("value"):E!=null&&(E!==_[B]||y=="progress"&&!E||y=="option"&&E!=f[B])&&r8(_,B,E,f[B],Y),B="checked",P!=null&&P!=_[B]&&r8(_,B,P,f[B],Y))}return _}function e6(_,$,N){try{if(typeof _=="function"){var j=typeof _.__u=="function";j&&_.__u(),j&&$==null||(_.__u=_($))}else _.current=$}catch(Y){U1.__e(Y,N)}}function J$(_,$,N){var j,Y;if(U1.unmount&&U1.unmount(_),(j=_.ref)&&(j.current&&j.current!=_.__e||e6(j,null,$)),(j=_.__c)!=null){if(j.componentWillUnmount)try{j.componentWillUnmount()}catch(L){U1.__e(L,$)}j.base=j.__P=null}if(j=_.__k)for(Y=0;Y<j.length;Y++)j[Y]&&J$(j[Y],$,N||typeof _.type!="function");N||a6(_.__e),_.__c=_.__=_.__e=void 0}function SN(_,$,N){return this.constructor(_,N)}function E$(_,$,N){var j,Y,L,Z;$==document&&($=document.documentElement),U1.__&&U1.__(_,$),Y=(j=typeof N=="function")?null:N&&N.__k||$.__k,L=[],Z=[],t6($,_=(!j&&N||$).__k=W$(N6,null,[_]),Y||a8,a8,$.namespaceURI,!j&&N?[N]:Y?null:$.firstChild?_6.call($.childNodes):null,L,!j&&N?N:Y?Y.__e:$.firstChild,j,Z),H$(L,_,Z)}_6=t8.slice,U1={__e:function(_,$,N,j){for(var Y,L,Z;$=$.__;)if((Y=$.__c)&&!Y.__)try{if((L=Y.constructor)&&L.getDerivedStateFromError!=null&&(Y.setState(L.getDerivedStateFromError(_)),Z=Y.__d),Y.componentDidCatch!=null&&(Y.componentDidCatch(_,j||{}),Z=Y.__d),Z)return Y.__E=Y}catch(V){_=V}throw _}},q$=0,kN=function(_){return _!=null&&_.constructor===void 0},o8.prototype.setState=function(_,$){var N;N=this.__s!=null&&this.__s!=this.state?this.__s:this.__s=K4({},this.state),typeof _=="function"&&(_=_(K4({},N),this.props)),_&&K4(N,_),_!=null&&this.__v&&($&&this._sb.push($),e2(this))},o8.prototype.forceUpdate=function(_){this.__v&&(this.__e=!0,_&&this.__h.push(_),e2(this))},o8.prototype.render=N6,x4=[],X$=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,U$=function(_,$){return _.__v.__b-$.__v.__b},e8.__r=0,G$=/(PointerCapture)$|Capture$/i,d6=0,l6=$$(!1),r6=$$(!0),xN=0;var D8,x1,n6,N$,J8=0,A$=[],k1=U1,j$=k1.__b,Y$=k1.__r,L$=k1.diffed,Z$=k1.__c,V$=k1.unmount,B$=k1.__;function _5(_,$){k1.__h&&k1.__h(x1,_,J8||$),J8=0;var N=x1.__H||(x1.__H={__:[],__h:[]});return _>=N.__.length&&N.__.push({}),N.__[_]}function p(_){return J8=1,RN(M$,_)}function RN(_,$,N){var j=_5(D8++,2);if(j.t=_,!j.__c&&(j.__=[N?N($):M$(void 0,$),function(V){var Q=j.__N?j.__N[0]:j.__[0],B=j.t(Q,V);Q!==B&&(j.__N=[B,j.__[1]],j.__c.setState({}))}],j.__c=x1,!x1.__f)){var Y=function(V,Q,B){if(!j.__c.__H)return!0;var U=j.__c.__H.__.filter(function(W){return W.__c});if(U.every(function(W){return!W.__N}))return!L||L.call(this,V,Q,B);var X=j.__c.props!==V;return U.some(function(W){if(W.__N){var J=W.__[0];W.__=W.__N,W.__N=void 0,J!==W.__[0]&&(X=!0)}}),L&&L.call(this,V,Q,B)||X};x1.__f=!0;var{shouldComponentUpdate:L,componentWillUpdate:Z}=x1;x1.componentWillUpdate=function(V,Q,B){if(this.__e){var U=L;L=void 0,Y(V,Q,B),L=U}Z&&Z.call(this,V,Q,B)},x1.shouldComponentUpdate=Y}return j.__N||j.__}function c(_,$){var N=_5(D8++,3);!k1.__s&&y$(N.__H,$)&&(N.__=_,N.u=$,x1.__H.__h.push(N))}function x(_){return J8=5,w0(function(){return{current:_}},[])}function w0(_,$){var N=_5(D8++,7);return y$(N.__H,$)&&(N.__=_(),N.__H=$,N.__h=_),N.__}function I(_,$){return J8=8,w0(function(){return _},$)}function uN(){for(var _;_=A$.shift();){var $=_.__H;if(_.__P&&$)try{$.__h.some(d8),$.__h.some(o6),$.__h=[]}catch(N){$.__h=[],k1.__e(N,_.__v)}}}k1.__b=function(_){x1=null,j$&&j$(_)},k1.__=function(_,$){_&&$.__k&&$.__k.__m&&(_.__m=$.__k.__m),B$&&B$(_,$)},k1.__r=function(_){Y$&&Y$(_),D8=0;var $=(x1=_.__c).__H;$&&(n6===x1?($.__h=[],x1.__h=[],$.__.some(function(N){N.__N&&(N.__=N.__N),N.u=N.__N=void 0})):($.__h.some(d8),$.__h.some(o6),$.__h=[],D8=0)),n6=x1},k1.diffed=function(_){L$&&L$(_);var $=_.__c;$&&$.__H&&($.__H.__h.length&&(A$.push($)!==1&&N$===k1.requestAnimationFrame||((N$=k1.requestAnimationFrame)||bN)(uN)),$.__H.__.some(function(N){N.u&&(N.__H=N.u),N.u=void 0})),n6=x1=null},k1.__c=function(_,$){$.some(function(N){try{N.__h.some(d8),N.__h=N.__h.filter(function(j){return!j.__||o6(j)})}catch(j){$.some(function(Y){Y.__h&&(Y.__h=[])}),$=[],k1.__e(j,N.__v)}}),Z$&&Z$(_,$)},k1.unmount=function(_){V$&&V$(_);var $,N=_.__c;N&&N.__H&&(N.__H.__.some(function(j){try{d8(j)}catch(Y){$=Y}}),N.__H=void 0,$&&k1.__e($,N.__v))};var K$=typeof requestAnimationFrame=="function";function bN(_){var $,N=function(){clearTimeout(j),K$&&cancelAnimationFrame($),setTimeout(_)},j=setTimeout(N,35);K$&&($=requestAnimationFrame(N))}function d8(_){var $=x1,N=_.__c;typeof N=="function"&&(_.__c=void 0,N()),x1=$}function o6(_){var $=x1;_.__c=_.__(),x1=$}function y$(_,$){return!_||_.length!==$.length||$.some(function(N,j){return N!==_[j]})}function M$(_,$){return typeof $=="function"?$(_):$}var P$=function(_,$,N,j){var Y;$[0]=0;for(var L=1;L<$.length;L++){var Z=$[L++],V=$[L]?($[0]|=Z?1:2,N[$[L++]]):$[++L];Z===3?j[0]=V:Z===4?j[1]=Object.assign(j[1]||{},V):Z===5?(j[1]=j[1]||{})[$[++L]]=V:Z===6?j[1][$[++L]]+=V+"":Z?(Y=_.apply(V,P$(_,V,N,["",null])),j.push(Y),V[0]?$[0]|=2:($[L-2]=0,$[L]=Y)):j.push(V)}return j},Q$=new Map;function vN(_){var $=Q$.get(this);return $||($=new Map,Q$.set(this,$)),($=P$(this,$.get(_)||($.set(_,$=function(N){for(var j,Y,L=1,Z="",V="",Q=[0],B=function(W){L===1&&(W||(Z=Z.replace(/^\s*\n\s*|\s*\n\s*$/g,"")))?Q.push(0,W,Z):L===3&&(W||Z)?(Q.push(3,W,Z),L=2):L===2&&Z==="..."&&W?Q.push(4,W,0):L===2&&Z&&!W?Q.push(5,0,!0,Z):L>=5&&((Z||!W&&L===5)&&(Q.push(L,0,Z,Y),L=6),W&&(Q.push(L,W,0,Y),L=6)),Z=""},U=0;U<N.length;U++){U&&(L===1&&B(),B(U));for(var X=0;X<N[U].length;X++)j=N[U][X],L===1?j==="<"?(B(),Q=[Q],L=3):Z+=j:L===4?Z==="--"&&j===">"?(L=1,Z=""):Z=j+Z[0]:V?j===V?V="":Z+=j:j==='"'||j==="'"?V=j:j===">"?(B(),L=1):L&&(j==="="?(L=5,Y=Z,Z=""):j==="/"&&(L<5||N[U][X+1]===">")?(B(),L===3&&(Q=Q[0]),L=Q,(Q=Q[0]).push(2,0,L),L=0):j===" "||j==="\t"||j===`
`||j==="\r"?(B(),L=2):Z+=j),L===3&&Z==="!--"&&(L=4,Q=Q[0])}return B(),Q}(_)),$),arguments,[])).length>1?$:$[0]}var O=vN.bind(W$);var Q_={};PN(Q_,{uploadWorkspaceFile:()=>Y6,uploadMedia:()=>B5,updateWorkspaceFile:()=>_j,submitAdaptiveCardAction:()=>K5,streamSidePrompt:()=>aN,steerAgentQueueItem:()=>dN,setWorkspaceVisibility:()=>M8,setAgentThoughtVisibility:()=>X5,sendPeerAgentMessage:()=>lN,sendAgentMessage:()=>c4,searchPosts:()=>N5,restoreChatBranch:()=>nN,respondToAgentRequest:()=>j6,renameWorkspaceFile:()=>F5,renameChatBranch:()=>pN,removeAgentQueueItem:()=>oN,pruneChatBranch:()=>iN,moveWorkspaceEntry:()=>H5,getWorkspaceTree:()=>y8,getWorkspaceRawUrl:()=>L6,getWorkspaceFile:()=>W5,getWorkspaceDownloadUrl:()=>Z6,getWorkspaceBranch:()=>eN,getTimeline:()=>h4,getThumbnailUrl:()=>U5,getThread:()=>j5,getPostsByHashtag:()=>$5,getMediaUrl:()=>P_,getMediaText:()=>G5,getMediaInfo:()=>$8,getMediaBlob:()=>tN,getChatBranches:()=>cN,getAgents:()=>Z5,getAgentThought:()=>q5,getAgentStatus:()=>V5,getAgentQueueState:()=>sN,getAgentModels:()=>A8,getAgentContext:()=>rN,getActiveChatAgents:()=>L5,forkChatBranch:()=>E8,deleteWorkspaceFile:()=>D5,deletePost:()=>Y5,createWorkspaceFile:()=>z5,createReply:()=>hN,createPost:()=>gN,attachWorkspaceFile:()=>O5,addToWhitelist:()=>Q5,SSEClient:()=>V6});async function $1(_,$={}){let N=await fetch(""+_,{...$,headers:{"Content-Type":"application/json",...$.headers}});if(!N.ok){let j=await N.json().catch(()=>({error:"Unknown error"}));throw Error(j.error||`HTTP ${N.status}`)}return N.json()}function k$(_){let $=String(_||"").split(`
`),N="message",j=[];for(let L of $)if(L.startsWith("event:"))N=L.slice(6).trim()||"message";else if(L.startsWith("data:"))j.push(L.slice(5).trim());let Y=j.join(`
`);if(!Y)return null;try{return{event:N,data:JSON.parse(Y)}}catch{return{event:N,data:Y}}}async function mN(_,$){if(!_.body)throw Error("Missing event stream body");let N=_.body.getReader(),j=new TextDecoder,Y="";while(!0){let{value:Z,done:V}=await N.read();if(V)break;Y+=j.decode(Z,{stream:!0});let Q=Y.split(`

`);Y=Q.pop()||"";for(let B of Q){let U=k$(B);if(U)$(U.event,U.data)}}Y+=j.decode();let L=k$(Y);if(L)$(L.event,L.data)}async function h4(_=10,$=null,N=null){let j=`/timeline?limit=${_}`;if($)j+=`&before=${$}`;if(N)j+=`&chat_jid=${encodeURIComponent(N)}`;return $1(j)}async function $5(_,$=50,N=0,j=null){let Y=j?`&chat_jid=${encodeURIComponent(j)}`:"";return $1(`/hashtag/${encodeURIComponent(_)}?limit=${$}&offset=${N}${Y}`)}async function N5(_,$=50,N=0,j=null,Y="current",L=null){let Z=j?`&chat_jid=${encodeURIComponent(j)}`:"",V=Y?`&scope=${encodeURIComponent(Y)}`:"",Q=L?`&root_chat_jid=${encodeURIComponent(L)}`:"";return $1(`/search?q=${encodeURIComponent(_)}&limit=${$}&offset=${N}${Z}${V}${Q}`)}async function j5(_,$=null){let N=$?`?chat_jid=${encodeURIComponent($)}`:"";return $1(`/thread/${_}${N}`)}async function gN(_,$=[],N=null){let j=N?`?chat_jid=${encodeURIComponent(N)}`:"";return $1(`/post${j}`,{method:"POST",body:JSON.stringify({content:_,media_ids:$})})}async function hN(_,$,N=[],j=null){let Y=j?`?chat_jid=${encodeURIComponent(j)}`:"";return $1(`/post/reply${Y}`,{method:"POST",body:JSON.stringify({thread_id:_,content:$,media_ids:N})})}async function Y5(_,$=!1,N=null){let j=N?`&chat_jid=${encodeURIComponent(N)}`:"",Y=`/post/${_}?cascade=${$?"true":"false"}${j}`;return $1(Y,{method:"DELETE"})}async function c4(_,$,N=null,j=[],Y=null,L=null){let Z=L?`?chat_jid=${encodeURIComponent(L)}`:"";return $1(`/agent/${_}/message${Z}`,{method:"POST",body:JSON.stringify({content:$,thread_id:N,media_ids:j,mode:Y})})}async function L5(){return $1("/agent/active-chats")}async function cN(_=null,$={}){let N=new URLSearchParams;if(_)N.set("root_chat_jid",String(_));if($?.includeArchived)N.set("include_archived","1");let j=N.toString()?`?${N.toString()}`:"";return $1(`/agent/branches${j}`)}async function E8(_,$={}){return $1("/agent/branch-fork",{method:"POST",body:JSON.stringify({source_chat_jid:_,...$?.agentName?{agent_name:$.agentName}:{},...$?.displayName?{display_name:$.displayName}:{}})})}async function pN(_,$={}){return $1("/agent/branch-rename",{method:"POST",body:JSON.stringify({chat_jid:_,...$&&Object.prototype.hasOwnProperty.call($,"agentName")?{agent_name:$.agentName}:{},...$&&Object.prototype.hasOwnProperty.call($,"displayName")?{display_name:$.displayName}:{}})})}async function iN(_){return $1("/agent/branch-prune",{method:"POST",body:JSON.stringify({chat_jid:_})})}async function nN(_,$={}){return $1("/agent/branch-restore",{method:"POST",body:JSON.stringify({chat_jid:_,...$&&Object.prototype.hasOwnProperty.call($,"agentName")?{agent_name:$.agentName}:{},...$&&Object.prototype.hasOwnProperty.call($,"displayName")?{display_name:$.displayName}:{}})})}async function lN(_,$,N,j="auto",Y={}){let L={source_chat_jid:_,content:N,mode:j,...Y?.sourceAgentName?{source_agent_name:Y.sourceAgentName}:{},...Y?.targetBy==="agent_name"?{target_agent_name:$}:{target_chat_jid:$}};return $1("/agent/peer-message",{method:"POST",body:JSON.stringify(L)})}async function Z5(){return $1("/agent/roster")}async function V5(_=null){let $=_?`?chat_jid=${encodeURIComponent(_)}`:"";return $1(`/agent/status${$}`)}async function rN(_=null){let $=_?`?chat_jid=${encodeURIComponent(_)}`:"";return $1(`/agent/context${$}`)}async function sN(_=null){let $=_?`?chat_jid=${encodeURIComponent(_)}`:"";return $1(`/agent/queue-state${$}`)}async function oN(_,$=null){let N=await fetch("/agent/queue-remove",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({row_id:_,chat_jid:$||void 0})});if(!N.ok){let j=await N.json().catch(()=>({error:"Failed to remove queued item"}));throw Error(j.error||`HTTP ${N.status}`)}return N.json()}async function dN(_,$=null){let N=await fetch("/agent/queue-steer",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({row_id:_,chat_jid:$||void 0})});if(!N.ok){let j=await N.json().catch(()=>({error:"Failed to steer queued item"}));throw Error(j.error||`HTTP ${N.status}`)}return N.json()}async function A8(_=null){let $=_?`?chat_jid=${encodeURIComponent(_)}`:"";return $1(`/agent/models${$}`)}async function B5(_){let $=new FormData;$.append("file",_);let N=await fetch("/media/upload",{method:"POST",body:$});if(!N.ok){let j=await N.json().catch(()=>({error:"Upload failed"}));throw Error(j.error||`HTTP ${N.status}`)}return N.json()}async function j6(_,$,N=null){let j=await fetch("/agent/respond",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({request_id:_,outcome:$,chat_jid:N||void 0})});if(!j.ok){let Y=await j.json().catch(()=>({error:"Failed to respond"}));throw Error(Y.error||`HTTP ${j.status}`)}return j.json()}async function K5(_){let $=await fetch("/agent/card-action",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(_)});if(!$.ok){let N=await $.json().catch(()=>({error:"Adaptive Card action failed"}));throw Error(N.error||`HTTP ${$.status}`)}return $.json()}async function aN(_,$={}){let N=await fetch("/agent/side-prompt/stream",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({prompt:_,system_prompt:$.systemPrompt||void 0,chat_jid:$.chatJid||void 0}),signal:$.signal});if(!N.ok){let L=await N.json().catch(()=>({error:"Side prompt failed"}));throw Error(L.error||`HTTP ${N.status}`)}let j=null,Y=null;if(await mN(N,(L,Z)=>{if($.onEvent?.(L,Z),L==="side_prompt_thinking_delta")$.onThinkingDelta?.(Z?.delta||"");else if(L==="side_prompt_text_delta")$.onTextDelta?.(Z?.delta||"");else if(L==="side_prompt_done")j=Z;else if(L==="side_prompt_error")Y=Z}),Y){let L=Error(Y?.error||"Side prompt failed");throw L.payload=Y,L}return j}async function Q5(_,$){let N=await fetch("/agent/whitelist",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({pattern:_,description:$})});if(!N.ok){let j=await N.json().catch(()=>({error:"Failed to add to whitelist"}));throw Error(j.error||`HTTP ${N.status}`)}return N.json()}async function q5(_,$="thought"){let N=`/agent/thought?turn_id=${encodeURIComponent(_)}&panel=${encodeURIComponent($)}`;return $1(N)}async function X5(_,$,N){return $1("/agent/thought/visibility",{method:"POST",body:JSON.stringify({turn_id:_,panel:$,expanded:Boolean(N)})})}function P_(_){return`/media/${_}`}function U5(_){return`/media/${_}/thumbnail`}async function $8(_){let $=await fetch(`/media/${_}/info`);if(!$.ok)throw Error("Failed to get media info");return $.json()}async function G5(_){let $=await fetch(`/media/${_}`);if(!$.ok)throw Error("Failed to load media text");return $.text()}async function tN(_){let $=await fetch(`/media/${_}`);if(!$.ok)throw Error("Failed to load media blob");return $.blob()}async function y8(_="",$=2,N=!1){let j=`/workspace/tree?path=${encodeURIComponent(_)}&depth=${$}&show_hidden=${N?"1":"0"}`;return $1(j)}async function eN(_=""){let $=`/workspace/branch?path=${encodeURIComponent(_||"")}`;return $1($)}async function W5(_,$=20000,N=null){let j=N?`&mode=${encodeURIComponent(N)}`:"",Y=`/workspace/file?path=${encodeURIComponent(_)}&max=${$}${j}`;return $1(Y)}async function _j(_,$){return $1("/workspace/file",{method:"PUT",body:JSON.stringify({path:_,content:$})})}async function O5(_){return $1("/workspace/attach",{method:"POST",body:JSON.stringify({path:_})})}async function Y6(_,$="",N={}){let j=new FormData;j.append("file",_);let Y=new URLSearchParams;if($)Y.set("path",$);if(N.overwrite)Y.set("overwrite","1");let L=Y.toString(),Z=L?`/workspace/upload?${L}`:"/workspace/upload",V=await fetch(""+Z,{method:"POST",body:j});if(!V.ok){let Q=await V.json().catch(()=>({error:"Upload failed"})),B=Error(Q.error||`HTTP ${V.status}`);throw B.status=V.status,B.code=Q.code,B}return V.json()}async function z5(_,$,N=""){let j=await fetch("/workspace/file",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({path:_,name:$,content:N})});if(!j.ok){let Y=await j.json().catch(()=>({error:"Create failed"})),L=Error(Y.error||`HTTP ${j.status}`);throw L.status=j.status,L.code=Y.code,L}return j.json()}async function F5(_,$){let N=await fetch("/workspace/rename",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({path:_,name:$})});if(!N.ok){let j=await N.json().catch(()=>({error:"Rename failed"})),Y=Error(j.error||`HTTP ${N.status}`);throw Y.status=N.status,Y.code=j.code,Y}return N.json()}async function H5(_,$){let N=await fetch("/workspace/move",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({path:_,target:$})});if(!N.ok){let j=await N.json().catch(()=>({error:"Move failed"})),Y=Error(j.error||`HTTP ${N.status}`);throw Y.status=N.status,Y.code=j.code,Y}return N.json()}async function D5(_){let $=`/workspace/file?path=${encodeURIComponent(_||"")}`;return $1($,{method:"DELETE"})}async function M8(_,$=!1){return $1("/workspace/visibility",{method:"POST",body:JSON.stringify({visible:Boolean(_),show_hidden:Boolean($)})})}function L6(_){return`/workspace/raw?path=${encodeURIComponent(_)}`}function Z6(_,$=!1){return`/workspace/download?${`path=${encodeURIComponent(_||"")}&show_hidden=${$?"1":"0"}`}`}class V6{constructor(_,$,N={}){this.onEvent=_,this.onStatusChange=$,this.chatJid=typeof N?.chatJid==="string"&&N.chatJid.trim()?N.chatJid.trim():null,this.eventSource=null,this.reconnectTimeout=null,this.reconnectDelay=1000,this.status="disconnected",this.reconnectAttempts=0,this.cooldownUntil=0,this.connecting=!1,this.lastActivityAt=0,this.staleCheckTimer=null,this.staleThresholdMs=70000}markActivity(){this.lastActivityAt=Date.now()}clearStaleMonitor(){if(this.staleCheckTimer)clearInterval(this.staleCheckTimer),this.staleCheckTimer=null}startStaleMonitor(){this.clearStaleMonitor(),this.staleCheckTimer=setInterval(()=>{if(this.status!=="connected")return;if(!this.lastActivityAt)return;if(Date.now()-this.lastActivityAt<=this.staleThresholdMs)return;console.warn("SSE connection went stale; forcing reconnect"),this.forceReconnect()},15000)}forceReconnect(){if(this.connecting=!1,this.eventSource)this.eventSource.close(),this.eventSource=null;this.clearStaleMonitor(),this.status="disconnected",this.onStatusChange("disconnected"),this.reconnectAttempts+=1,this.scheduleReconnect()}connect(){if(this.connecting)return;if(this.eventSource&&this.status==="connected")return;if(this.connecting=!0,this.eventSource)this.eventSource.close();this.clearStaleMonitor();let _=this.chatJid?`?chat_jid=${encodeURIComponent(this.chatJid)}`:"";this.eventSource=new EventSource("/sse/stream"+_);let $=(N)=>{this.eventSource.addEventListener(N,(j)=>{this.markActivity(),this.onEvent(N,JSON.parse(j.data))})};this.eventSource.onopen=()=>{this.connecting=!1,this.reconnectDelay=1000,this.reconnectAttempts=0,this.cooldownUntil=0,this.status="connected",this.markActivity(),this.startStaleMonitor(),this.onStatusChange("connected")},this.eventSource.onerror=()=>{this.connecting=!1,this.clearStaleMonitor(),this.status="disconnected",this.onStatusChange("disconnected"),this.reconnectAttempts+=1,this.scheduleReconnect()},this.eventSource.addEventListener("connected",()=>{this.markActivity(),console.log("SSE connected"),this.onEvent("connected",{})}),this.eventSource.addEventListener("heartbeat",()=>{this.markActivity()}),$("new_post"),$("new_reply"),$("agent_response"),$("interaction_updated"),$("interaction_deleted"),$("agent_status"),$("agent_steer_queued"),$("agent_followup_queued"),$("agent_followup_consumed"),$("agent_followup_removed"),$("workspace_update"),$("agent_draft"),$("agent_draft_delta"),$("agent_thought"),$("agent_thought_delta"),$("model_changed"),$("ui_theme"),["extension_ui_request","extension_ui_timeout","extension_ui_notify","extension_ui_status","extension_ui_working","extension_ui_widget","extension_ui_title","extension_ui_editor_text","extension_ui_error"].forEach($)}scheduleReconnect(){if(this.reconnectTimeout)clearTimeout(this.reconnectTimeout);let _=10,$=60000,N=Date.now();if(this.reconnectAttempts>=_)this.cooldownUntil=Math.max(this.cooldownUntil,N+$),this.reconnectAttempts=0;let j=Math.max(this.cooldownUntil-N,0),Y=Math.max(this.reconnectDelay,j);this.reconnectTimeout=setTimeout(()=>{console.log("Reconnecting SSE..."),this.connect()},Y),this.reconnectDelay=Math.min(this.reconnectDelay*2,30000)}reconnectIfNeeded(){let _=Date.now();if(this.status==="connected"){if(this.lastActivityAt&&_-this.lastActivityAt>this.staleThresholdMs)this.forceReconnect();return}if(this.cooldownUntil&&_<this.cooldownUntil)return;if(this.reconnectTimeout)clearTimeout(this.reconnectTimeout),this.reconnectTimeout=null;this.connect()}disconnect(){if(this.connecting=!1,this.clearStaleMonitor(),this.eventSource)this.eventSource.close(),this.eventSource=null;if(this.reconnectTimeout)clearTimeout(this.reconnectTimeout),this.reconnectTimeout=null}}function B6(_){return String(_||"").toLowerCase().replace(/^@/,"").replace(/\s+/g," ").trim()}function $j(_,$){let N=B6(_),j=B6($);if(!j)return!1;return N.startsWith(j)||N.includes(j)}function J5(_){if(!_)return!1;if(_.isComposing)return!1;if(_.ctrlKey||_.metaKey||_.altKey)return!1;return typeof _.key==="string"&&_.key.length===1&&/\S/.test(_.key)}function E5(_,$,N=Date.now(),j=700){let Y=_&&typeof _==="object"?_:{value:"",updatedAt:0},L=String($||"").trim().toLowerCase();if(!L)return{value:"",updatedAt:N};return{value:!Y.value||!Number.isFinite(Y.updatedAt)||N-Y.updatedAt>j?L:`${Y.value}${L}`,updatedAt:N}}function Nj(_,$){let N=Math.max(0,Number(_)||0);if(N<=0)return[];let Y=((Number.isInteger($)?$:0)%N+N)%N,L=[];for(let Z=0;Z<N;Z+=1)L.push((Y+Z)%N);return L}function jj(_,$,N=0,j=(Y)=>Y){let Y=B6($);if(!Y)return-1;let L=Array.isArray(_)?_:[],Z=Nj(L.length,N),V=L.map((Q)=>B6(j(Q)));for(let Q of Z)if(V[Q].startsWith(Y))return Q;for(let Q of Z)if(V[Q].includes(Y))return Q;return-1}function A5(_,$,N=-1,j=(Y)=>Y){let Y=Array.isArray(_)?_:[];if(N>=0&&N<Y.length){let L=j(Y[N]);if($j(L,$))return N}return jj(Y,$,0,j)}function q_(_){if(typeof window>"u"||!window.localStorage)return null;try{return window.localStorage.getItem(_)}catch{return null}}function Z1(_,$){if(typeof window>"u"||!window.localStorage)return;try{window.localStorage.setItem(_,$)}catch{}}function N8(_,$=!1){let N=q_(_);if(N===null)return $;return N==="true"}function j8(_,$=null){let N=q_(_);if(N===null)return $;let j=parseInt(N,10);return Number.isFinite(j)?j:$}function K6(_){return String(_||"").trim().toLowerCase()}function y5(_){let $=String(_||"").match(/^@([a-zA-Z0-9_-]*)$/);if(!$)return null;return K6($[1]||"")}function x$(_){let $=new Set,N=[];for(let j of Array.isArray(_)?_:[]){let Y=K6(j?.agent_name);if(!Y||$.has(Y))continue;$.add(Y),N.push(j)}return N}function w$(_,$,N={}){let j=y5($);if(j==null)return[];let Y=typeof N?.currentChatJid==="string"?N.currentChatJid:null;return x$(_).filter((L)=>{if(Y&&L?.chat_jid===Y)return!1;return K6(L?.agent_name).startsWith(j)})}function M5(_){let $=K6(_);return $?`@${$} `:""}function C$(_,$={}){let N=typeof $?.currentChatJid==="string"?$.currentChatJid:null,j=Number.isFinite($?.limit)?Math.max(0,$.limit):4;return x$(_).filter((Y)=>!(N&&Y?.chat_jid===N)).slice(0,j)}function I$({footerWidth:_=0,visibleAgentCount:$=0,hasContextIndicator:N=!1}={}){let j=Number(_||0),Y=Math.max(0,Math.min(Number($||0),4));if(!Number.isFinite(j)||j<=0)return!1;if(Y<=0)return!1;let L=460+Y*68+(N?40:0);return j>=L}function T$(_,$,N={}){if(!_||_.isComposing)return!1;if(N?.searchMode)return!1;if(!N?.showSessionSwitcherButton)return!1;if(_.ctrlKey||_.metaKey||_.altKey)return!1;if(_.key!=="@")return!1;return String($||"")===""}function g_({prefix:_="file",label:$,title:N,onRemove:j,onClick:Y,removeTitle:L="Remove",icon:Z="file"}){let V=`${_}-file-pill`,Q=`${_}-file-name`,B=`${_}-file-remove`,U=Z==="message"?O`<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
      </svg>`:O`<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
        <polyline points="14 2 14 8 20 8"/>
      </svg>`;return O`
    <span class=${V} title=${N||$} onClick=${Y}>
      ${U}
      <span class=${Q}>${$}</span>
      ${j&&O`
        <button
          class=${B}
          onClick=${(X)=>{X.preventDefault(),X.stopPropagation(),j()}}
          title=${L}
          type="button"
        >
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M18 6L6 18M6 6l12 12"/>
          </svg>
        </button>
      `}
    </span>
  `}var Yj=[{name:"/model",description:"Select model or list available models"},{name:"/cycle-model",description:"Cycle to the next available model"},{name:"/thinking",description:"Show or set thinking level"},{name:"/cycle-thinking",description:"Cycle thinking level"},{name:"/theme",description:"Set UI theme (no name to show available themes)"},{name:"/tint",description:"Tint default light/dark UI (usage: /tint #hex or /tint off)"},{name:"/btw",description:"Open a side conversation panel without interrupting the main chat"},{name:"/state",description:"Show current session state"},{name:"/stats",description:"Show session token and cost stats"},{name:"/context",description:"Show context window usage"},{name:"/last",description:"Show last assistant response"},{name:"/compact",description:"Manually compact the session"},{name:"/auto-compact",description:"Toggle auto-compaction"},{name:"/auto-retry",description:"Toggle auto-retry"},{name:"/abort",description:"Abort the current response"},{name:"/abort-retry",description:"Abort retry backoff"},{name:"/abort-bash",description:"Abort running bash command"},{name:"/shell",description:"Run a shell command and return output"},{name:"/bash",description:"Run a shell command and add output to context"},{name:"/queue",description:"Queue a follow-up message (one-at-a-time)"},{name:"/queue-all",description:"Queue a follow-up message (batch all)"},{name:"/steer",description:"Steer the current response"},{name:"/steering-mode",description:"Set steering mode (all|one)"},{name:"/followup-mode",description:"Set follow-up mode (all|one)"},{name:"/session-name",description:"Set or show the session name"},{name:"/new-session",description:"Start a new session"},{name:"/switch-session",description:"Switch to a session file"},{name:"/fork",description:"Fork from a previous message"},{name:"/forks",description:"List forkable messages"},{name:"/tree",description:"List the session tree"},{name:"/label",description:"Set or clear a label on a tree entry"},{name:"/labels",description:"List labeled entries"},{name:"/agent-name",description:"Set or show the agent display name"},{name:"/agent-avatar",description:"Set or show the agent avatar URL"},{name:"/user-name",description:"Set or show your display name"},{name:"/user-avatar",description:"Set or show your avatar URL"},{name:"/user-github",description:"Set name/avatar from GitHub profile"},{name:"/export-html",description:"Export session to HTML"},{name:"/passkey",description:"Manage passkeys (enrol/list/delete)"},{name:"/totp",description:"Show a TOTP enrolment QR code"},{name:"/qr",description:"Generate a QR code for text or URL"},{name:"/search",description:"Search notes and skills in the workspace"},{name:"/restart",description:"Restart the agent and stop subprocesses"},{name:"/commands",description:"List available commands"}];function Lj({usage:_,onCompact:$}){let N=Math.min(100,Math.max(0,_.percent||0)),j=_.tokens,Y=_.contextWindow,L="Compact context",V=`${j!=null?`Context: ${f$(j)} / ${f$(Y)} tokens (${N.toFixed(0)}%)`:`Context: ${N.toFixed(0)}%`} — ${"Compact context"}`,Q=9,B=2*Math.PI*9,U=N/100*B,X=N>90?"var(--context-red, #ef4444)":N>75?"var(--context-amber, #f59e0b)":"var(--context-green, #22c55e)";return O`
        <button
            class="compose-context-pie icon-btn"
            type="button"
            title=${V}
            aria-label="Compact context"
            onClick=${(W)=>{W.preventDefault(),W.stopPropagation(),$?.()}}
        >
            <svg width="22" height="22" viewBox="0 0 24 24" aria-hidden="true">
                <circle cx="12" cy="12" r=${9}
                    fill="none"
                    stroke="var(--context-track, rgba(128,128,128,0.2))"
                    stroke-width="2.5" />
                <circle cx="12" cy="12" r=${9}
                    fill="none"
                    stroke=${X}
                    stroke-width="2.5"
                    stroke-dasharray=${`${U} ${B}`}
                    stroke-linecap="round"
                    transform="rotate(-90 12 12)" />
            </svg>
        </button>
    `}function f$(_){if(_==null)return"?";if(_>=1e6)return(_/1e6).toFixed(1)+"M";if(_>=1000)return(_/1000).toFixed(0)+"K";return String(_)}function S$({onPost:_,onFocus:$,searchMode:N,searchScope:j="current",onSearch:Y,onSearchScopeChange:L,onEnterSearch:Z,onExitSearch:V,fileRefs:Q=[],onRemoveFileRef:B,onClearFileRefs:U,messageRefs:X=[],onRemoveMessageRef:W,onClearMessageRefs:J,activeModel:E=null,modelUsage:P=null,thinkingLevel:f=null,supportsThinking:D=!1,contextUsage:y=null,onContextCompact:C,notificationsEnabled:u=!1,notificationPermission:A="default",onToggleNotifications:v,onModelChange:o,onModelStateChange:n,activeEditorPath:g=null,onAttachEditorFile:T,onOpenFilePill:i,followupQueueItems:d=[],onInjectQueuedFollowup:q0,onRemoveQueuedFollowup:l,onSubmitIntercept:$0,onMessageResponse:N0,onPopOutChat:Y0,isAgentActive:L0=!1,activeChatAgents:K0=[],currentChatJid:G0="web:default",connectionStatus:W0="connected",onSetFileRefs:F0,onSetMessageRefs:c0,onSubmitError:M0,onSwitchChat:D0,onRenameSession:p0,isRenameSessionInProgress:i0=!1,onCreateSession:C0,onDeleteSession:Q0,onRestoreSession:P0}){let[J0,Z0]=p(""),[k0,r0]=p(""),[m0,G1]=p([]),[P1,R0]=p(!1),[n0,j1]=p([]),[V1,s0]=p(0),[T1,Y1]=p(!1),[v1,B1]=p([]),[i1,g0]=p(0),[t1,Q1]=p(!1),[W1,H1]=p(!1),[x0,D1]=p(!1),[I0,f0]=p(!1),[a0,l1]=p([]),[m,B0]=p(0),[E0,z0]=p(0),[o0,e1]=p(!1),[n1,p_]=p(0),[w_,__]=p(null),t0=x(null),f1=x(null),r1=x(null),S1=x(null),C_=x(null),I_=x(null),W4=x(null),O4=x(null),$_=x({value:"",updatedAt:0}),i_=x(0),L1=x(!1),_4=200,G_=(G)=>{let w=new Set,S=[];for(let r of G||[]){if(typeof r!=="string")continue;let O0=r.trim();if(!O0||w.has(O0))continue;w.add(O0),S.push(O0)}return S},h0=()=>{let G=q_("piclaw_compose_history");if(!G)return[];try{let w=JSON.parse(G);if(!Array.isArray(w))return[];return G_(w)}catch{return[]}},O1=(G)=>{Z1("piclaw_compose_history",JSON.stringify(G))},u0=x(h0()),R1=x(-1),J1=x(""),$4=J0.trim()||m0.length>0||Q.length>0||X.length>0,z4=typeof window<"u"&&typeof navigator<"u"&&Boolean(navigator.geolocation)&&Boolean(window.isSecureContext),W_=typeof window<"u"&&typeof Notification<"u",f4=typeof window<"u"?Boolean(window.isSecureContext):!1,s4=W_&&f4&&A!=="denied",O_=A==="granted"&&u,X8=O_?"Disable notifications":"Enable notifications",N_=m0.length>0||Q.length>0||X.length>0,j_=W0==="disconnected"?"Reconnecting":String(W0||"Connecting").replace(/[-_]+/g," ").replace(/^./,(G)=>G.toUpperCase()),n_=W0==="disconnected"?"Reconnecting":`Connection: ${j_}`,z_=(Array.isArray(K0)?K0:[]).filter((G)=>!G?.archived_at),m1=C$(z_,{currentChatJid:G0,limit:4}),V_=!N&&I$({footerWidth:n1,visibleAgentCount:m1.length,hasContextIndicator:Boolean(y&&y.percent!=null)}),b0=(()=>{for(let G of Array.isArray(K0)?K0:[]){let w=typeof G?.chat_jid==="string"?G.chat_jid.trim():"";if(w&&w===G0)return G}return null})(),Y_=Boolean(b0&&b0.chat_jid===(b0.root_chat_jid||b0.chat_jid)),F4=w0(()=>{let G=new Set,w=[];for(let S of Array.isArray(K0)?K0:[]){let r=typeof S?.chat_jid==="string"?S.chat_jid.trim():"";if(!r||r===G0||G.has(r))continue;if(!(typeof S?.agent_name==="string"?S.agent_name.trim():""))continue;G.add(r),w.push(S)}return w},[K0,G0]),H4=F4.length>0,T_=H4&&typeof D0==="function",F_=H4&&typeof P0==="function",B_=Boolean(i0||L1.current),E1=!N&&typeof p0==="function"&&!B_,K1=!N&&typeof C0==="function",s1=!N&&typeof Q0==="function"&&!Y_,w1=!N&&(T_||F_||E1||K1||s1),N4=E||"",j4=D&&f?` (${f})`:"",D4=j4.trim()?`${f}`:"",o1=typeof P?.hint_short==="string"?P.hint_short.trim():"",Y4=[D4||null,o1||null].filter(Boolean).join(" • "),S4=[N4?`Current model: ${N4}${j4}`:null,P?.plan?`Plan: ${P.plan}`:null,o1||null,P?.primary?.reset_description||null,P?.secondary?.reset_description||null].filter(Boolean),f_=W1?"Switching model…":S4.join(" • ")||`Current model: ${N4}${j4} (tap to open model picker)`,H_=(G)=>{if(!G||typeof G!=="object")return;let w=G.model??G.current;if(typeof n==="function")n({model:w??null,thinking_level:G.thinking_level??null,supports_thinking:G.supports_thinking,provider_usage:G.provider_usage??null});if(w&&typeof o==="function")o(w)},K_=(G)=>{let w=G||t0.current;if(!w)return;w.style.height="auto",w.style.height=`${w.scrollHeight}px`,w.style.overflowY="hidden"},S_=(G)=>{if(!G)return{content:G,fileRefs:[]};let S=G.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),r=-1;for(let e0=0;e0<S.length;e0+=1)if(S[e0].trim()==="Files:"&&S[e0+1]&&/^\s*-\s+/.test(S[e0+1])){r=e0;break}if(r===-1)return{content:G,fileRefs:[]};let O0=[],v0=r+1;for(;v0<S.length;v0+=1){let e0=S[v0];if(/^\s*-\s+/.test(e0))O0.push(e0.replace(/^\s*-\s+/,"").trim());else if(!e0.trim())break;else break}if(O0.length===0)return{content:G,fileRefs:[]};let X1=S.slice(0,r),l0=S.slice(v0);return{content:[...X1,...l0].join(`
`).replace(/\n{3,}/g,`

`).trim(),fileRefs:O0}},g1=(G)=>{if(!G)return{content:G,messageRefs:[]};let S=G.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),r=-1;for(let e0=0;e0<S.length;e0+=1)if(S[e0].trim()==="Referenced messages:"&&S[e0+1]&&/^\s*-\s+/.test(S[e0+1])){r=e0;break}if(r===-1)return{content:G,messageRefs:[]};let O0=[],v0=r+1;for(;v0<S.length;v0+=1){let e0=S[v0];if(/^\s*-\s+/.test(e0)){let m_=e0.replace(/^\s*-\s+/,"").trim().match(/^message:(\S+)$/i);if(m_)O0.push(m_[1])}else if(!e0.trim())break;else break}if(O0.length===0)return{content:G,messageRefs:[]};let X1=S.slice(0,r),l0=S.slice(v0);return{content:[...X1,...l0].join(`
`).replace(/\n{3,}/g,`

`).trim(),messageRefs:O0}},R4=(G)=>{let w=S_(G||""),S=g1(w.content||"");return{text:S.content||"",fileRefs:w.fileRefs,messageRefs:S.messageRefs}},u4=(G)=>{if(!G.startsWith("/")||G.includes(`
`)){Y1(!1),j1([]);return}let w=G.toLowerCase().split(" ")[0];if(w.length<1){Y1(!1),j1([]);return}let S=Yj.filter((r)=>r.name.startsWith(w)||r.name.replace(/-/g,"").startsWith(w.replace(/-/g,"")));if(S.length>0&&!(S.length===1&&S[0].name===w))Q1(!1),B1([]),j1(S),s0(0),Y1(!0);else Y1(!1),j1([])},J4=(G)=>{let w=J0,S=w.indexOf(" "),r=S>=0?w.slice(S):"",O0=G.name+r;Z0(O0),Y1(!1),j1([]),requestAnimationFrame(()=>{let v0=t0.current;if(!v0)return;let X1=O0.length;v0.selectionStart=X1,v0.selectionEnd=X1,v0.focus()})},l_=(G)=>{if(y5(G)==null){Q1(!1),B1([]);return}let w=w$(z_,G,{currentChatJid:G0});if(w.length>0&&!(w.length===1&&M5(w[0].agent_name).trim().toLowerCase()===String(G||"").trim().toLowerCase()))Y1(!1),j1([]),B1(w),g0(0),Q1(!0);else Q1(!1),B1([])},R_=(G)=>{let w=M5(G?.agent_name);if(!w)return;Z0(w),Q1(!1),B1([]),requestAnimationFrame(()=>{let S=t0.current;if(!S)return;let r=w.length;S.selectionStart=r,S.selectionEnd=r,S.focus()})},L4=()=>{if(N||!T_&&!F_&&!E1&&!K1&&!s1)return!1;return $_.current={value:"",updatedAt:0},D1(!1),Y1(!1),j1([]),Q1(!1),B1([]),f0(!0),!0},u1=(G)=>{if(G?.preventDefault?.(),G?.stopPropagation?.(),N||!T_&&!F_&&!E1&&!K1&&!s1)return;if(I0){$_.current={value:"",updatedAt:0},f0(!1);return}L4()},u_=(G)=>{let w=typeof G==="string"?G.trim():"";if(f0(!1),!w||w===G0){requestAnimationFrame(()=>t0.current?.focus());return}D0?.(w)},b_=async(G)=>{let w=typeof G==="string"?G.trim():"";if(f0(!1),!w||typeof P0!=="function"){requestAnimationFrame(()=>t0.current?.focus());return}try{await P0(w)}catch(S){console.warn("Failed to restore session:",S),requestAnimationFrame(()=>t0.current?.focus())}},r_=(G)=>{let w=typeof G?.chat_jid==="string"?G.chat_jid.trim():"";if(w&&typeof D0==="function"){D0(w);return}R_(G)},E4=(G)=>{let S=(Array.isArray(G)?G:[]).findIndex((r)=>!r?.disabled);return S>=0?S:0},z1=w0(()=>{let G=[];for(let w of F4){let S=Boolean(w?.archived_at),r=typeof w?.agent_name==="string"?w.agent_name.trim():"",O0=typeof w?.chat_jid==="string"?w.chat_jid.trim():"";if(!r||!O0)continue;G.push({type:"session",key:`session:${O0}`,label:`@${r} — ${O0}${w?.is_active?" active":""}${S?" archived":""}`,chat:w,disabled:S?!F_:!T_})}if(K1)G.push({type:"action",key:"action:new",label:"New session",action:"new",disabled:!1});if(E1)G.push({type:"action",key:"action:rename",label:"Rename current session",action:"rename",disabled:B_});if(s1)G.push({type:"action",key:"action:delete",label:"Delete current session",action:"delete",disabled:!1});return G},[F4,F_,T_,K1,E1,s1,B_]),A4=async(G)=>{if(G?.preventDefault)G.preventDefault();if(G?.stopPropagation)G.stopPropagation();if(typeof p0!=="function"||i0||L1.current)return;L1.current=!0,f0(!1);try{await p0()}catch(w){console.warn("Failed to rename session:",w)}finally{L1.current=!1}requestAnimationFrame(()=>t0.current?.focus())},d1=async()=>{if(typeof C0!=="function")return;f0(!1);try{await C0()}catch(G){console.warn("Failed to create session:",G)}requestAnimationFrame(()=>t0.current?.focus())},L_=async()=>{if(typeof Q0!=="function")return;f0(!1);try{await Q0(G0)}catch(G){console.warn("Failed to delete session:",G)}requestAnimationFrame(()=>t0.current?.focus())},D_=(G)=>{if(N)r0(G);else Z0(G),u4(G),l_(G);requestAnimationFrame(()=>K_())},b4=(G)=>{let w=N?k0:J0,S=w&&!w.endsWith(`
`)?`
`:"",r=`${w}${S}${G}`.trimStart();D_(r)},y4=(G)=>{let w=G?.command?.model_label;if(w)return w;let S=G?.command?.message;if(typeof S==="string"){let r=S.match(/•\s+([^\n]+?)\s+\(current\)/);if(r?.[1])return r[1].trim()}return null},Z4=async(G)=>{if(N||W1)return;H1(!0);try{let w=await c4("default",G,null,[],null,G0),S=y4(w);H_({model:S??E??null,thinking_level:w?.command?.thinking_level,supports_thinking:w?.command?.supports_thinking});try{let r=await A8(G0);if(r)H_(r)}catch{}return _?.(),!0}catch(w){return console.error("Failed to switch model:",w),alert("Failed to switch model: "+w.message),!1}finally{H1(!1)}},v4=async()=>{await Z4("/cycle-model")},s_=async(G)=>{if(!G||W1)return;if(await Z4(`/model ${G}`))D1(!1)},m4=(G)=>{if(!G||G.disabled)return;if(G.type==="session"){let w=G.chat;if(w?.archived_at)b_(w.chat_jid);else u_(w.chat_jid);return}if(G.type==="action"){if(G.action==="new"){d1();return}if(G.action==="rename"){A4();return}if(G.action==="delete")L_()}},o4=(G)=>{G.preventDefault(),G.stopPropagation(),$_.current={value:"",updatedAt:0},f0(!1),D1((w)=>!w)},M4=async()=>{if(N)return;C?.(),await v_("/compact",null,{includeMedia:!1,includeFileRefs:!1,includeMessageRefs:!1,clearAfterSubmit:!1,recordHistory:!1})},P4=(G)=>{if(G==="queue"||G==="steer"||G==="auto")return G;return L0?"queue":null},v_=async(G,w,S={})=>{let{includeMedia:r=!0,includeFileRefs:O0=!0,includeMessageRefs:v0=!0,clearAfterSubmit:X1=!0,recordHistory:l0=!0}=S||{},J_=typeof G==="string"?G:G&&typeof G?.target?.value==="string"?G.target.value:J0,e0=typeof J_==="string"?J_:"";if(!e0.trim()&&(r?m0.length===0:!0)&&(O0?Q.length===0:!0)&&(v0?X.length===0:!0))return;Y1(!1),j1([]),Q1(!1),B1([]),f0(!1),__(null);let m_=r?[...m0]:[],o_=O0?[...Q]:[],a4=v0?[...X]:[],E_=e0.trim();if(l0&&E_){let g4=u0.current,h1=G_(g4.filter((B4)=>B4!==E_));if(h1.push(E_),h1.length>200)h1.splice(0,h1.length-200);u0.current=h1,O1(h1),R1.current=-1,J1.current=""}let u6=()=>{if(r)G1([...m_]);if(O0)F0?.(o_);if(v0)c0?.(a4);Z0(E_),requestAnimationFrame(()=>K_())};if(X1)Z0(""),G1([]),U?.(),J?.();(async()=>{try{if(await $0?.({content:E_,submitMode:w,fileRefs:o_,messageRefs:a4,mediaFiles:m_})){_?.();return}let h1=[];for(let F1 of m_){let y1=await B5(F1);h1.push(y1.id)}let B4=o_.length?`Files:
${o_.map((F1)=>`- ${F1}`).join(`
`)}`:"",C1=a4.length?`Referenced messages:
${a4.map((F1)=>`- message:${F1}`).join(`
`)}`:"",b6=h1.length?`Attachments:
${h1.map((F1,y1)=>{let U8=m_[y1]?.name||`attachment-${y1+1}`;return`- attachment:${F1} (${U8})`}).join(`
`)}`:"",t4=[E_,B4,C1,b6].filter(Boolean).join(`

`),k4=await c4("default",t4,null,h1,P4(w),G0);if(N0?.(k4),k4?.command){H_({model:k4.command.model_label??E??null,thinking_level:k4.command.thinking_level,supports_thinking:k4.command.supports_thinking});try{let F1=await A8(G0);if(F1)H_(F1)}catch{}}_?.()}catch(g4){if(X1)u6();let h1=g4?.message||"Failed to send message.";__(h1),M0?.(h1),console.error("Failed to post:",g4)}})()},d4=(G)=>{q0?.(G)},V4=I((G)=>{if(N||!x0&&!I0||G?.isComposing)return!1;let w=()=>{G.preventDefault?.(),G.stopPropagation?.()},S=()=>{$_.current={value:"",updatedAt:0}};if(G.key==="Escape"){if(w(),S(),x0)D1(!1);if(I0)f0(!1);return!0}if(x0){if(G.key==="ArrowDown"){if(w(),S(),a0.length>0)B0((r)=>(r+1)%a0.length);return!0}if(G.key==="ArrowUp"){if(w(),S(),a0.length>0)B0((r)=>(r-1+a0.length)%a0.length);return!0}if((G.key==="Enter"||G.key==="Tab")&&a0.length>0)return w(),S(),s_(a0[Math.max(0,Math.min(m,a0.length-1))]),!0;if(J5(G)&&a0.length>0){w();let r=E5($_.current,G.key);$_.current=r;let O0=A5(a0,r.value,m,(v0)=>v0);if(O0>=0)B0(O0);return!0}}if(I0){if(G.key==="ArrowDown"){if(w(),S(),z1.length>0)z0((r)=>(r+1)%z1.length);return!0}if(G.key==="ArrowUp"){if(w(),S(),z1.length>0)z0((r)=>(r-1+z1.length)%z1.length);return!0}if((G.key==="Enter"||G.key==="Tab")&&z1.length>0)return w(),S(),m4(z1[Math.max(0,Math.min(E0,z1.length-1))]),!0;if(J5(G)&&z1.length>0){w();let r=E5($_.current,G.key);$_.current=r;let O0=A5(z1,r.value,E0,(v0)=>v0.label);if(O0>=0)z0(O0);return!0}}return!1},[N,x0,I0,a0,m,z1,E0,s_]),z=(G)=>{if(G.isComposing)return;if(N&&G.key==="Escape"){G.preventDefault(),r0(""),V?.();return}if(V4(G))return;let w=t0.current?.value??(N?k0:J0);if(T$(G,w,{searchMode:N,showSessionSwitcherButton:w1})){G.preventDefault(),L4();return}if(t1&&v1.length>0){let S=t0.current?.value??(N?k0:J0);if(!String(S||"").match(/^@([a-zA-Z0-9_-]*)$/))Q1(!1),B1([]);else{if(G.key==="ArrowDown"){G.preventDefault(),g0((r)=>(r+1)%v1.length);return}if(G.key==="ArrowUp"){G.preventDefault(),g0((r)=>(r-1+v1.length)%v1.length);return}if(G.key==="Tab"||G.key==="Enter"){G.preventDefault(),R_(v1[i1]);return}if(G.key==="Escape"){G.preventDefault(),Q1(!1),B1([]);return}}}if(T1&&n0.length>0){let S=t0.current?.value??(N?k0:J0);if(!String(S||"").startsWith("/"))Y1(!1),j1([]);else{if(G.key==="ArrowDown"){G.preventDefault(),s0((r)=>(r+1)%n0.length);return}if(G.key==="ArrowUp"){G.preventDefault(),s0((r)=>(r-1+n0.length)%n0.length);return}if(G.key==="Tab"){G.preventDefault(),J4(n0[V1]);return}if(G.key==="Enter"&&!G.shiftKey){if(!w.includes(" ")){G.preventDefault();let O0=n0[V1];Y1(!1),j1([]),v_(O0.name);return}}if(G.key==="Escape"){G.preventDefault(),Y1(!1),j1([]);return}}}if(!N&&(G.key==="ArrowUp"||G.key==="ArrowDown")&&!G.metaKey&&!G.ctrlKey&&!G.altKey&&!G.shiftKey){let S=t0.current;if(!S)return;let r=S.value||"",O0=S.selectionStart===0&&S.selectionEnd===0,v0=S.selectionStart===r.length&&S.selectionEnd===r.length;if(G.key==="ArrowUp"&&O0||G.key==="ArrowDown"&&v0){let X1=u0.current;if(!X1.length)return;G.preventDefault();let l0=R1.current;if(G.key==="ArrowUp"){if(l0===-1)J1.current=r,l0=X1.length-1;else if(l0>0)l0-=1;R1.current=l0,D_(X1[l0]||"")}else{if(l0===-1)return;if(l0<X1.length-1)l0+=1,R1.current=l0,D_(X1[l0]||"");else R1.current=-1,D_(J1.current||""),J1.current=""}requestAnimationFrame(()=>{let J_=t0.current;if(!J_)return;let e0=J_.value.length;J_.selectionStart=e0,J_.selectionEnd=e0});return}}if(G.key==="Enter"&&!G.shiftKey&&(G.ctrlKey||G.metaKey)){if(G.preventDefault(),N){if(w.trim())Y?.(w.trim(),j)}else v_(w,"steer");return}if(G.key==="Enter"&&!G.shiftKey)if(G.preventDefault(),N){if(w.trim())Y?.(w.trim(),j)}else v_(w)},H=(G)=>{let w=Array.from(G||[]).filter((S)=>S instanceof File&&!String(S.name||"").startsWith(".DS_Store"));if(!w.length)return;G1((S)=>[...S,...w]),__(null)},R=(G)=>{H(G.target.files),G.target.value=""},b=(G)=>{if(N)return;G.preventDefault(),G.stopPropagation(),i_.current+=1,R0(!0)},a=(G)=>{if(N)return;if(G.preventDefault(),G.stopPropagation(),i_.current=Math.max(0,i_.current-1),i_.current===0)R0(!1)},V0=(G)=>{if(N)return;if(G.preventDefault(),G.stopPropagation(),G.dataTransfer)G.dataTransfer.dropEffect="copy";R0(!0)},X0=(G)=>{if(N)return;G.preventDefault(),G.stopPropagation(),i_.current=0,R0(!1),H(G.dataTransfer?.files||[])},U0=(G)=>{if(N)return;let w=G.clipboardData?.items;if(!w||!w.length)return;let S=[];for(let r of w){if(r.kind!=="file")continue;let O0=r.getAsFile?.();if(O0)S.push(O0)}if(S.length>0)G.preventDefault(),H(S)},j0=(G)=>{G1((w)=>w.filter((S,r)=>r!==G))},A0=()=>{__(null),G1([]),U?.(),J?.()},q1=()=>{if(!navigator.geolocation){alert("Geolocation is not available in this browser.");return}navigator.geolocation.getCurrentPosition((G)=>{let{latitude:w,longitude:S,accuracy:r}=G.coords,O0=`${w.toFixed(5)}, ${S.toFixed(5)}`,v0=Number.isFinite(r)?` ±${Math.round(r)}m`:"",X1=`https://maps.google.com/?q=${w},${S}`,l0=`Location: ${O0}${v0} ${X1}`;b4(l0)},(G)=>{let w=G?.message||"Unable to retrieve location.";alert(`Location error: ${w}`)},{enableHighAccuracy:!0,timeout:1e4,maximumAge:0})};c(()=>{if(!x0)return;$_.current={value:"",updatedAt:0},e1(!0),A8(G0).then((G)=>{let w=Array.isArray(G?.models)?G.models.filter((S)=>typeof S==="string"&&S.trim().length>0):[];w.sort((S,r)=>S.localeCompare(r,void 0,{sensitivity:"base"})),l1(w),H_(G)}).catch((G)=>{console.warn("Failed to load model list:",G),l1([])}).finally(()=>{e1(!1)})},[x0,E]),c(()=>{if(N)D1(!1),f0(!1),Y1(!1),j1([]),Q1(!1),B1([])},[N]),c(()=>{if(I0&&!w1)f0(!1)},[I0,w1]),c(()=>{if(!x0)return;let G=a0.findIndex((w)=>w===E);B0(G>=0?G:0)},[x0,a0,E]),c(()=>{if(!I0)return;z0(E4(z1)),$_.current={value:"",updatedAt:0}},[I0,G0]),c(()=>{if(!x0)return;let G=(w)=>{let S=S1.current,r=C_.current,O0=w.target;if(S&&S.contains(O0))return;if(r&&r.contains(O0))return;D1(!1)};return document.addEventListener("pointerdown",G),()=>document.removeEventListener("pointerdown",G)},[x0]),c(()=>{if(!I0)return;let G=(w)=>{let S=I_.current,r=W4.current,O0=w.target;if(S&&S.contains(O0))return;if(r&&r.contains(O0))return;f0(!1)};return document.addEventListener("pointerdown",G),()=>document.removeEventListener("pointerdown",G)},[I0]),c(()=>{if(N||!x0&&!I0)return;let G=(w)=>{V4(w)};return document.addEventListener("keydown",G,!0),()=>document.removeEventListener("keydown",G,!0)},[N,x0,I0,V4]),c(()=>{if(!x0)return;let G=S1.current;G?.focus?.(),G?.querySelector?.(".compose-model-popup-item.active")?.scrollIntoView?.({block:"nearest"})},[x0,m,a0]),c(()=>{if(!I0)return;let G=I_.current;G?.focus?.(),G?.querySelector?.(".compose-model-popup-item.active")?.scrollIntoView?.({block:"nearest"})},[I0,E0,z1.length]),c(()=>{let G=()=>{let v0=O4.current?.clientWidth||0;p_((X1)=>X1===v0?X1:v0)};G();let w=O4.current,S=0,r=()=>{if(S)cancelAnimationFrame(S);S=requestAnimationFrame(()=>{S=0,G()})},O0=null;if(w&&typeof ResizeObserver<"u")O0=new ResizeObserver(()=>r()),O0.observe(w);if(typeof window<"u")window.addEventListener("resize",r);return()=>{if(S)cancelAnimationFrame(S);if(O0?.disconnect?.(),typeof window<"u")window.removeEventListener("resize",r)}},[N,E,m1.length,y?.percent]);let A1=(G)=>{let w=G.target.value;if(__(null),I0)f0(!1);K_(G.target),D_(w)};return c(()=>{requestAnimationFrame(()=>K_())},[J0,k0,N]),c(()=>{if(N)return;l_(J0)},[z_,G0,J0,N]),O`
        <div class="compose-box">
            ${!N&&d.length>0&&O`
                <div class="compose-queue-stack">
                    ${d.map((G)=>{let w=typeof G?.content==="string"?G.content:"",S=R4(w);if(!S.text.trim()&&S.fileRefs.length===0&&S.messageRefs.length===0)return null;return O`
                            <div class="compose-queue-stack-item" role="listitem">
                                <div class="compose-queue-stack-content" title=${w}>
                                    ${S.text.trim()&&O`
                                        <div class="compose-queue-stack-text">${S.text}</div>
                                    `}
                                    ${(S.messageRefs.length>0||S.fileRefs.length>0)&&O`
                                        <div class="compose-queue-stack-refs">
                                            ${S.messageRefs.map((r)=>O`
                                                <${g_}
                                                    key=${"queue-msg-"+r}
                                                    prefix="compose"
                                                    label=${"msg:"+r}
                                                    title=${"Message reference: "+r}
                                                    icon="message"
                                                />
                                            `)}
                                            ${S.fileRefs.map((r)=>{let O0=r.split("/").pop()||r;return O`
                                                    <${g_}
                                                        key=${"queue-file-"+r}
                                                        prefix="compose"
                                                        label=${O0}
                                                        title=${r}
                                                        onClick=${()=>i?.(r)}
                                                    />
                                                `})}
                                        </div>
                                    `}
                                </div>
                                <div class="compose-queue-stack-actions" role="group" aria-label="Queued follow-up controls">
                                    <button
                                        class="compose-queue-stack-steer-btn"
                                        type="button"
                                        title="Inject queued follow-up as steer"
                                        aria-label="Inject queued follow-up as steer"
                                        onClick=${()=>d4(G)}
                                    >
                                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                                            <path d="M4 20h12a2 2 0 0 0 2-2V8" />
                                            <polyline points="14 12 18 8 22 12" />
                                        </svg>
                                        <span>Steer</span>
                                    </button>
                                    <button
                                        class="compose-queue-stack-close-btn"
                                        type="button"
                                        title="Cancel queued message"
                                        aria-label="Cancel queued message"
                                        onClick=${()=>l?.(G)}
                                    >
                                        <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                                            <line x1="18" y1="6" x2="6" y2="18" />
                                            <line x1="6" y1="6" x2="18" y2="18" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        `})}
                </div>
            `}
            <div
                class=${`compose-input-wrapper${P1?" drag-active":""}`}
                onDragEnter=${b}
                onDragOver=${V0}
                onDragLeave=${a}
                onDrop=${X0}
            >
                <div class="compose-input-main">
                    ${w_&&!N_&&O`
                        <div class="compose-submit-error compose-submit-error-top" role="status" aria-live="polite">${w_}</div>
                    `}
                    ${N_&&O`
                        <div class="compose-file-refs">
                            ${w_&&O`
                                <div class="compose-submit-error" role="status" aria-live="polite">${w_}</div>
                            `}
                            ${X.map((G)=>{return O`
                                    <${g_}
                                        key=${"msg-"+G}
                                        prefix="compose"
                                        label=${"msg:"+G}
                                        title=${"Message reference: "+G}
                                        removeTitle="Remove reference"
                                        icon="message"
                                        onRemove=${()=>W?.(G)}
                                    />
                                `})}
                            ${Q.map((G)=>{let w=G.split("/").pop()||G;return O`
                                    <${g_}
                                        prefix="compose"
                                        label=${w}
                                        title=${G}
                                        onClick=${()=>i?.(G)}
                                        removeTitle="Remove file"
                                        onRemove=${()=>B?.(G)}
                                    />
                                `})}
                            ${m0.map((G,w)=>{let S=G?.name||`attachment-${w+1}`;return O`
                                    <${g_}
                                        key=${S+w}
                                        prefix="compose"
                                        label=${S}
                                        title=${S}
                                        removeTitle="Remove attachment"
                                        onRemove=${()=>j0(w)}
                                    />
                                `})}
                            <button
                                type="button"
                                class="compose-clear-attachments-btn"
                                onClick=${A0}
                                title="Clear all attachments and references"
                                aria-label="Clear all attachments and references"
                            >
                                Clear all
                            </button>
                        </div>
                    `}
                    ${!N&&typeof Y0==="function"&&O`
                        <button
                            type="button"
                            class="compose-popout-btn"
                            onClick=${()=>Y0?.()}
                            title="Open this chat in a new chat-only window"
                            aria-label="Open this chat in a new chat-only window"
                        >
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <path d="M14 5h5v5" />
                                <path d="M10 14 19 5" />
                                <path d="M19 14v5h-5" />
                                <path d="M5 10V5h5" opacity="0" />
                                <path d="M5 19h5" />
                                <path d="M5 19v-5" />
                            </svg>
                        </button>
                    `}
                    <textarea
                        ref=${t0}
                        placeholder=${N?"Search (Enter to run)...":"Message (Enter to send, Shift+Enter for newline)..."}
                        value=${N?k0:J0}
                        onInput=${A1}
                        onKeyDown=${z}
                        onPaste=${U0}
                        onFocus=${$}
                        onClick=${$}
                        rows="1"
                    />
                    ${t1&&v1.length>0&&O`
                        <div class="slash-autocomplete" ref=${r1}>
                            ${v1.map((G,w)=>O`
                                <div
                                    key=${G.chat_jid||G.agent_name}
                                    class=${`slash-item${w===i1?" active":""}`}
                                    onMouseDown=${(S)=>{S.preventDefault(),R_(G)}}
                                    onMouseEnter=${()=>g0(w)}
                                >
                                    <span class="slash-name">@${G.agent_name}</span>
                                    <span class="slash-desc">${G.chat_jid||"Active agent"}</span>
                                </div>
                            `)}
                        </div>
                    `}
                    ${T1&&n0.length>0&&O`
                        <div class="slash-autocomplete" ref=${f1}>
                            ${n0.map((G,w)=>O`
                                <div
                                    key=${G.name}
                                    class=${`slash-item${w===V1?" active":""}`}
                                    onMouseDown=${(S)=>{S.preventDefault(),J4(G)}}
                                    onMouseEnter=${()=>s0(w)}
                                >
                                    <span class="slash-name">${G.name}</span>
                                    <span class="slash-desc">${G.description}</span>
                                </div>
                            `)}
                        </div>
                    `}
                    ${x0&&!N&&O`
                        <div class="compose-model-popup" ref=${S1} tabIndex="-1" onKeyDown=${V4}>
                            <div class="compose-model-popup-title">Select model</div>
                            <div class="compose-model-popup-menu" role="menu" aria-label="Model picker">
                                ${o0&&O`
                                    <div class="compose-model-popup-empty">Loading models…</div>
                                `}
                                ${!o0&&a0.length===0&&O`
                                    <div class="compose-model-popup-empty">No models available.</div>
                                `}
                                ${!o0&&a0.map((G,w)=>O`
                                    <button
                                        key=${G}
                                        type="button"
                                        role="menuitem"
                                        class=${`compose-model-popup-item${m===w?" active":""}${E===G?" current-model":""}`}
                                        onClick=${()=>{s_(G)}}
                                        disabled=${W1}
                                    >
                                        ${G}
                                    </button>
                                `)}
                            </div>
                            <div class="compose-model-popup-actions">
                                <button
                                    type="button"
                                    class="compose-model-popup-btn"
                                    onClick=${()=>{v4()}}
                                    disabled=${W1}
                                >
                                    Next model
                                </button>
                            </div>
                        </div>
                    `}
                    ${I0&&!N&&O`
                        <div class="compose-model-popup" ref=${I_} tabIndex="-1" onKeyDown=${V4}>
                            <div class="compose-model-popup-title">Manage sessions & agents</div>
                            <div class="compose-model-popup-menu" role="menu" aria-label="Sessions and agents">
                                ${O`
                                    <div class="compose-model-popup-item current" role="note" aria-live="polite">
                                        ${(()=>{let G=typeof b0?.agent_name==="string"&&b0.agent_name.trim()?`@${b0.agent_name.trim()}`:G0,w=typeof b0?.chat_jid==="string"&&b0.chat_jid.trim()?b0.chat_jid.trim():G0;return`${G} — ${w} • current`})()}
                                    </div>
                                `}
                                ${!H4&&O`
                                    <div class="compose-model-popup-empty">No other sessions yet.</div>
                                `}
                                ${H4&&F4.map((G,w)=>{let S=Boolean(G.archived_at),O0=G.chat_jid!==(G.root_chat_jid||G.chat_jid)&&!G.is_active&&!S&&typeof Q0==="function",v0=`@${G.agent_name} — ${G.chat_jid}${G.is_active?" • active":""}${S?" • archived":""}`;return O`
                                        <div key=${G.chat_jid} class=${`compose-model-popup-item-row${S?" archived":""}`}>
                                            <button
                                                type="button"
                                                role="menuitem"
                                                class=${`compose-model-popup-item${S?" archived":""}${E0===w?" active":""}`}
                                                onClick=${()=>{if(S){b_(G.chat_jid);return}u_(G.chat_jid)}}
                                                disabled=${S?!F_:!T_}
                                                title=${S?"Restore this archived branch":"Switch to this session"}
                                            >
                                                ${v0}
                                            </button>
                                            ${O0&&O`
                                                <button
                                                    type="button"
                                                    class="compose-model-popup-item-delete"
                                                    title="Delete this branch"
                                                    aria-label=${`Delete @${G.agent_name}`}
                                                    onClick=${(X1)=>{X1.stopPropagation(),f0(!1),Q0(G.chat_jid)}}
                                                >
                                                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                                                        <line x1="18" y1="6" x2="6" y2="18" />
                                                        <line x1="6" y1="6" x2="18" y2="18" />
                                                    </svg>
                                                </button>
                                            `}
                                        </div>
                                    `})}
                            </div>
                            ${(K1||E1||s1)&&O`
                                <div class="compose-model-popup-actions">
                                    ${K1&&O`
                                        <button
                                            type="button"
                                            class=${`compose-model-popup-btn primary${z1.findIndex((G)=>G.key==="action:new")===E0?" active":""}`}
                                            onClick=${()=>{d1()}}
                                            title="Create a new agent/session branch from this chat"
                                        >
                                            New
                                        </button>
                                    `}
                                    ${E1&&O`
                                        <button
                                            type="button"
                                            class=${`compose-model-popup-btn${z1.findIndex((G)=>G.key==="action:rename")===E0?" active":""}`}
                                            onClick=${(G)=>{A4(G)}}
                                            title="Rename current branch name and agent handle"
                                            disabled=${B_}
                                        >
                                            Rename current…
                                        </button>
                                    `}
                                    ${s1&&O`
                                        <button
                                            type="button"
                                            class=${`compose-model-popup-btn danger${z1.findIndex((G)=>G.key==="action:delete")===E0?" active":""}`}
                                            onClick=${()=>{L_()}}
                                            title="Delete (prune) current agent/session branch"
                                        >
                                            Delete current…
                                        </button>
                                    `}
                                </div>
                            `}
                        </div>
                    `}
                </div>
                <div class="compose-footer" ref=${O4}>
                    ${!N&&E&&O`
                    <div class="compose-meta-row">
                        ${!N&&E&&O`
                            <div class="compose-model-meta">
                                <button
                                    ref=${C_}
                                    type="button"
                                    class="compose-model-hint compose-model-hint-btn"
                                    title=${f_}
                                    aria-label="Open model picker"
                                    onClick=${o4}
                                    disabled=${W1}
                                >
                                    ${W1?"Switching…":N4}
                                </button>
                                <div class="compose-model-meta-subline">
                                    ${!W1&&Y4&&O`
                                        <span class="compose-model-usage-hint" title=${f_}>
                                            ${Y4}
                                        </span>
                                    `}
                                </div>
                            </div>
                        `}
                        ${!N&&y&&y.percent!=null&&O`
                            <${Lj} usage=${y} onCompact=${M4} />
                        `}
                    </div>
                    `}
                    <div class="compose-actions ${N?"search-mode":""}">
                    ${V_&&O`
                        <div class="compose-agent-hints compose-agent-hints-inline" title="Active chat agents you can mention with @name">
                            ${m1.map((G)=>{let w=Boolean(G?.chat_jid&&G.chat_jid===G0);return O`
                                <button
                                    key=${G.chat_jid||G.agent_name}
                                    type="button"
                                    class=${`compose-agent-chip${w?" active":""}`}
                                    onClick=${()=>r_(G)}
                                    title=${`${G.chat_jid||"Active agent"} — switch to @${G.agent_name}`}
                                >
                                    <span class="compose-agent-chip-handle">@${G.agent_name}</span>
                                </button>
                            `})}
                        </div>
                    `}
                    ${w1&&O`
                        ${b0?.agent_name&&O`
                            <span
                                class="compose-current-agent-label active"
                                title=${b0.chat_jid||G0}
                                onClick=${u1}
                            >@${b0.agent_name}</span>
                        `}
                        <button
                            ref=${W4}
                            type="button"
                            class=${`icon-btn compose-mention-btn${I0?" active":""}`}
                            onClick=${u1}
                            title=${I0?"Hide session manager":"Manage Sessions/Agents"}
                            aria-label="Manage Sessions/Agents"
                            aria-expanded=${I0?"true":"false"}
                        >
                            <svg class="compose-mention-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false">
                                <circle cx="12" cy="12" r="4.25" />
                                <path d="M16.25 7.75v5.4a2.1 2.1 0 0 0 4.2 0V12a8.45 8.45 0 1 0-4.2 7.33" />
                            </svg>
                        </button>
                    `}
                    ${N&&O`
                        <label class="compose-search-scope-wrap" title="Search scope">
                            <span class="compose-search-scope-label">Scope</span>
                            <select
                                class="compose-search-scope-select"
                                value=${j}
                                onChange=${(G)=>L?.(G.currentTarget.value)}
                            >
                                <option value="current">Current</option>
                                <option value="root">Branch family</option>
                                <option value="all">All chats</option>
                            </select>
                        </label>
                    `}
                    <button
                        class="icon-btn search-toggle"
                        onClick=${N?V:Z}
                        title=${N?"Close search":"Search"}
                    >
                        ${N?O`
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M18 6L6 18M6 6l12 12"/>
                            </svg>
                        `:O`
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <circle cx="11" cy="11" r="8"/>
                                <path d="M21 21l-4.35-4.35"/>
                            </svg>
                        `}
                    </button>
                    ${z4&&!N&&O`
                        <button
                            class="icon-btn location-btn"
                            onClick=${q1}
                            title="Share location"
                            type="button"
                            disabled=${!1}
                        >
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <circle cx="12" cy="12" r="10" />
                                <path d="M12 2a14 14 0 0 1 0 20a14 14 0 0 1 0-20" />
                                <path d="M2 12h20" />
                            </svg>
                        </button>
                    `}
                    ${s4&&!N&&O`
                        <button
                            class=${`icon-btn notification-btn${O_?" active":""}`}
                            onClick=${v}
                            title=${X8}
                            type="button"
                        >
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M18 8a6 6 0 1 0-12 0c0 7-3 9-3 9h18s-3-2-3-9" />
                                <path d="M13.73 21a2 2 0 0 1-3.46 0" />
                            </svg>
                        </button>
                    `}
                    ${!N&&O`
                        ${g&&T&&O`
                            <button
                                class="icon-btn attach-editor-btn"
                                onClick=${T}
                                title=${`Attach open file: ${g}`}
                                type="button"
                                disabled=${Q.includes(g)}
                            >
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"/><polyline points="13 2 13 9 20 9"/></svg>
                            </button>
                        `}
                        <label class="icon-btn" title="Attach file">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>
                            <input type="file" multiple hidden onChange=${R} />
                        </label>
                    `}
                    ${(W0!=="connected"||!N)&&O`
                        <div class="compose-send-stack">
                            ${W0!=="connected"&&O`
                                <span class="compose-connection-status connection-status ${W0}" title=${n_}>
                                    ${j_}
                                </span>
                            `}
                            ${!N&&O`
                                <button 
                                    class="icon-btn send-btn" 
                                    type="button"
                                    onClick=${()=>{v_()}}
                                    disabled=${!$4}
                                    title="Send (Enter)"
                                >
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/></svg>
                                </button>
                            `}
                        </div>
                    `}
                </div>
            </div>
        </div>
        </div>
    `}var x5="piclaw_theme",q6="piclaw_tint",b$="piclaw_chat_themes",k8={bgPrimary:"#ffffff",bgSecondary:"#f7f9fa",bgHover:"#e8ebed",textPrimary:"#0f1419",textSecondary:"#536471",borderColor:"#eff3f4",accent:"#1d9bf0",accentHover:"#1a8cd8",danger:"#f4212e",success:"#00ba7c"},v$={bgPrimary:"#000000",bgSecondary:"#16181c",bgHover:"#1d1f23",textPrimary:"#e7e9ea",textSecondary:"#71767b",borderColor:"#2f3336",accent:"#1d9bf0",accentHover:"#1a8cd8",danger:"#f4212e",success:"#00ba7c"},R$={default:{label:"Default",mode:"auto",light:k8,dark:v$},tango:{label:"Tango",mode:"light",light:{bgPrimary:"#f6f5f4",bgSecondary:"#efedeb",bgHover:"#e5e3e1",textPrimary:"#2e3436",textSecondary:"#5c6466",borderColor:"#d3d7cf",accent:"#3465a4",accentHover:"#2c5890",danger:"#cc0000",success:"#4e9a06"}},xterm:{label:"XTerm",mode:"dark",dark:{bgPrimary:"#000000",bgSecondary:"#0a0a0a",bgHover:"#121212",textPrimary:"#d0d0d0",textSecondary:"#8a8a8a",borderColor:"#1f1f1f",accent:"#00a2ff",accentHover:"#0086d1",danger:"#ff5f5f",success:"#5fff87"}},monokai:{label:"Monokai",mode:"dark",dark:{bgPrimary:"#272822",bgSecondary:"#2f2f2f",bgHover:"#3a3a3a",textPrimary:"#f8f8f2",textSecondary:"#cfcfc2",borderColor:"#3e3d32",accent:"#f92672",accentHover:"#e81560",danger:"#f92672",success:"#a6e22e"}},"monokai-pro":{label:"Monokai Pro",mode:"dark",dark:{bgPrimary:"#2d2a2e",bgSecondary:"#363237",bgHover:"#403a40",textPrimary:"#fcfcfa",textSecondary:"#c1c0c0",borderColor:"#444046",accent:"#ff6188",accentHover:"#f74f7e",danger:"#ff4f5e",success:"#a9dc76"}},ristretto:{label:"Ristretto",mode:"dark",dark:{bgPrimary:"#2c2525",bgSecondary:"#362d2d",bgHover:"#403535",textPrimary:"#f4f1ef",textSecondary:"#cbbdb8",borderColor:"#4a3c3c",accent:"#ff9f43",accentHover:"#f28a2e",danger:"#ff5f56",success:"#a9dc76"}},dracula:{label:"Dracula",mode:"dark",dark:{bgPrimary:"#282a36",bgSecondary:"#303445",bgHover:"#3a3f52",textPrimary:"#f8f8f2",textSecondary:"#c5c8d6",borderColor:"#44475a",accent:"#bd93f9",accentHover:"#a87ded",danger:"#ff5555",success:"#50fa7b"}},catppuccin:{label:"Catppuccin",mode:"dark",dark:{bgPrimary:"#1e1e2e",bgSecondary:"#24273a",bgHover:"#2c2f41",textPrimary:"#cdd6f4",textSecondary:"#a6adc8",borderColor:"#313244",accent:"#89b4fa",accentHover:"#74a0f5",danger:"#f38ba8",success:"#a6e3a1"}},nord:{label:"Nord",mode:"dark",dark:{bgPrimary:"#2e3440",bgSecondary:"#3b4252",bgHover:"#434c5e",textPrimary:"#eceff4",textSecondary:"#d8dee9",borderColor:"#4c566a",accent:"#88c0d0",accentHover:"#78a9c0",danger:"#bf616a",success:"#a3be8c"}},gruvbox:{label:"Gruvbox",mode:"dark",dark:{bgPrimary:"#282828",bgSecondary:"#32302f",bgHover:"#3c3836",textPrimary:"#ebdbb2",textSecondary:"#bdae93",borderColor:"#3c3836",accent:"#d79921",accentHover:"#c28515",danger:"#fb4934",success:"#b8bb26"}},solarized:{label:"Solarized",mode:"auto",light:{bgPrimary:"#fdf6e3",bgSecondary:"#f5efdc",bgHover:"#eee8d5",textPrimary:"#586e75",textSecondary:"#657b83",borderColor:"#e0d8c6",accent:"#268bd2",accentHover:"#1f78b3",danger:"#dc322f",success:"#859900"},dark:{bgPrimary:"#002b36",bgSecondary:"#073642",bgHover:"#0b3c4a",textPrimary:"#eee8d5",textSecondary:"#93a1a1",borderColor:"#18424a",accent:"#268bd2",accentHover:"#1f78b3",danger:"#dc322f",success:"#859900"}},tokyo:{label:"Tokyo",mode:"dark",dark:{bgPrimary:"#1a1b26",bgSecondary:"#24283b",bgHover:"#2f3549",textPrimary:"#c0caf5",textSecondary:"#9aa5ce",borderColor:"#414868",accent:"#7aa2f7",accentHover:"#6b92e6",danger:"#f7768e",success:"#9ece6a"}},miasma:{label:"Miasma",mode:"dark",dark:{bgPrimary:"#1f1f23",bgSecondary:"#29292f",bgHover:"#33333a",textPrimary:"#e5e5e5",textSecondary:"#b4b4b4",borderColor:"#3d3d45",accent:"#c9739c",accentHover:"#b8618c",danger:"#e06c75",success:"#98c379"}},github:{label:"GitHub",mode:"auto",light:{bgPrimary:"#ffffff",bgSecondary:"#f6f8fa",bgHover:"#eaeef2",textPrimary:"#24292f",textSecondary:"#57606a",borderColor:"#d0d7de",accent:"#0969da",accentHover:"#0550ae",danger:"#cf222e",success:"#1a7f37"},dark:{bgPrimary:"#0d1117",bgSecondary:"#161b22",bgHover:"#21262d",textPrimary:"#c9d1d9",textSecondary:"#8b949e",borderColor:"#30363d",accent:"#2f81f7",accentHover:"#1f6feb",danger:"#f85149",success:"#3fb950"}},gotham:{label:"Gotham",mode:"dark",dark:{bgPrimary:"#0b0f14",bgSecondary:"#111720",bgHover:"#18212b",textPrimary:"#cbd6e2",textSecondary:"#9bb0c3",borderColor:"#1f2a37",accent:"#5ccfe6",accentHover:"#48b8ce",danger:"#d26937",success:"#2aa889"}}},Zj=["--bg-primary","--bg-secondary","--bg-hover","--text-primary","--text-secondary","--border-color","--accent-color","--accent-hover","--accent-contrast-text","--accent-soft","--accent-soft-strong","--danger-color","--success-color","--search-highlight-color"],p4={theme:"default",tint:null},m$="light",P5=!1;function X6(_){let $=String(_||"").trim().toLowerCase();if(!$)return"default";if($==="solarized-dark"||$==="solarized-light")return"solarized";if($==="github-dark"||$==="github-light")return"github";if($==="tokyo-night")return"tokyo";return $}function L8(_){if(!_)return null;let $=String(_).trim();if(!$)return null;let N=$.startsWith("#")?$.slice(1):$;if(!/^[0-9a-fA-F]{3}$/.test(N)&&!/^[0-9a-fA-F]{6}$/.test(N))return null;let j=N.length===3?N.split("").map((L)=>L+L).join(""):N,Y=parseInt(j,16);return{r:Y>>16&255,g:Y>>8&255,b:Y&255,hex:`#${j.toLowerCase()}`}}function Vj(_){if(!_||typeof document>"u")return null;let $=String(_).trim();if(!$)return null;let N=document.createElement("div");if(N.style.color="",N.style.color=$,!N.style.color)return null;let j=N.style.color;try{if(document.body)N.style.display="none",document.body.appendChild(N),j=getComputedStyle(N).color||N.style.color,document.body.removeChild(N)}catch{}let Y=j.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/i);if(!Y)return null;let L=parseInt(Y[1],10),Z=parseInt(Y[2],10),V=parseInt(Y[3],10);if(![L,Z,V].every((B)=>Number.isFinite(B)))return null;let Q=`#${[L,Z,V].map((B)=>B.toString(16).padStart(2,"0")).join("")}`;return{r:L,g:Z,b:V,hex:Q}}function g$(_){return L8(_)||Vj(_)}function P8(_,$,N){let j=Math.round(_.r+($.r-_.r)*N),Y=Math.round(_.g+($.g-_.g)*N),L=Math.round(_.b+($.b-_.b)*N);return`rgb(${j} ${Y} ${L})`}function k5(_,$){return`rgba(${_.r}, ${_.g}, ${_.b}, ${$})`}function Bj(_){let $=_.r/255,N=_.g/255,j=_.b/255,Y=$<=0.03928?$/12.92:Math.pow(($+0.055)/1.055,2.4),L=N<=0.03928?N/12.92:Math.pow((N+0.055)/1.055,2.4),Z=j<=0.03928?j/12.92:Math.pow((j+0.055)/1.055,2.4);return 0.2126*Y+0.7152*L+0.0722*Z}function Kj(_){return Bj(_)>0.4?"#000000":"#ffffff"}function h$(){if(typeof window>"u")return"light";try{return window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}catch{return"light"}}function w5(_){return R$[_]||R$.default}function Qj(_){return _.mode==="auto"?h$():_.mode}function c$(_,$){let N=w5(_);if($==="dark"&&N.dark)return N.dark;if($==="light"&&N.light)return N.light;return N.dark||N.light||k8}function p$(_,$,N){let j=g$($);if(!j)return _;let Y=L8(_.bgPrimary),L=L8(_.bgSecondary),Z=L8(_.bgHover),V=L8(_.borderColor);if(!Y||!L||!Z||!V)return _;let B=L8(N==="dark"?"#ffffff":"#000000");return{..._,bgPrimary:P8(Y,j,0.08),bgSecondary:P8(L,j,0.12),bgHover:P8(Z,j,0.16),borderColor:P8(V,j,0.08),accent:j.hex,accentHover:B?P8(j,B,0.18):j.hex}}function qj(_,$){if(typeof document>"u")return;let N=document.documentElement,j=_.accent,Y=g$(j),L=Y?k5(Y,$==="dark"?0.35:0.2):_.searchHighlight||_.searchHighlightColor,Z=Y?k5(Y,$==="dark"?0.16:0.12):"rgba(29, 155, 240, 0.12)",V=Y?k5(Y,$==="dark"?0.28:0.2):"rgba(29, 155, 240, 0.2)",Q=Y?Kj(Y):$==="dark"?"#000000":"#ffffff",B={"--bg-primary":_.bgPrimary,"--bg-secondary":_.bgSecondary,"--bg-hover":_.bgHover,"--text-primary":_.textPrimary,"--text-secondary":_.textSecondary,"--border-color":_.borderColor,"--accent-color":j,"--accent-hover":_.accentHover||j,"--accent-soft":Z,"--accent-soft-strong":V,"--accent-contrast-text":Q,"--danger-color":_.danger||k8.danger,"--success-color":_.success||k8.success,"--search-highlight-color":L||"rgba(29, 155, 240, 0.2)"};Object.entries(B).forEach(([U,X])=>{if(X)N.style.setProperty(U,X)})}function Xj(){if(typeof document>"u")return;let _=document.documentElement;Zj.forEach(($)=>_.style.removeProperty($))}function Y8(_,$={}){if(typeof document>"u")return null;let N=typeof $.id==="string"&&$.id.trim()?$.id.trim():null,j=N?document.getElementById(N):document.querySelector(`meta[name="${_}"]`);if(!j)j=document.createElement("meta"),document.head.appendChild(j);if(j.setAttribute("name",_),N)j.setAttribute("id",N);return j}function u$(_){let $=X6(p4?.theme||"default"),N=p4?.tint?String(p4.tint).trim():null,j=c$($,_);if($==="default"&&N)j=p$(j,N,_);if(j?.bgPrimary)return j.bgPrimary;return _==="dark"?v$.bgPrimary:k8.bgPrimary}function Uj(_,$){if(typeof document>"u")return;let N=Y8("theme-color",{id:"dynamic-theme-color"});if(N&&_)N.removeAttribute("media"),N.setAttribute("content",_);let j=Y8("theme-color",{id:"theme-color-light"});if(j)j.setAttribute("media","(prefers-color-scheme: light)"),j.setAttribute("content",u$("light"));let Y=Y8("theme-color",{id:"theme-color-dark"});if(Y)Y.setAttribute("media","(prefers-color-scheme: dark)"),Y.setAttribute("content",u$("dark"));let L=Y8("msapplication-TileColor");if(L&&_)L.setAttribute("content",_);let Z=Y8("msapplication-navbutton-color");if(Z&&_)Z.setAttribute("content",_);let V=Y8("apple-mobile-web-app-status-bar-style");if(V)V.setAttribute("content",$==="dark"?"black-translucent":"default")}function Gj(){if(typeof window>"u")return;let _={...p4,mode:m$};window.dispatchEvent(new CustomEvent("piclaw-theme-change",{detail:_}))}function i$(){try{let _=q_(b$);if(!_)return{};let $=JSON.parse(_);return typeof $==="object"&&$!==null?$:{}}catch{return{}}}function Wj(_,$,N){let j=i$();if(!$&&!N)delete j[_];else j[_]={theme:$||"default",tint:N||null};Z1(b$,JSON.stringify(j))}function Oj(_){if(!_)return null;return i$()[_]||null}function n$(){if(typeof window>"u")return"web:default";try{let $=new URL(window.location.href).searchParams.get("chat_jid");return $&&$.trim()?$.trim():"web:default"}catch{return"web:default"}}function C5(_,$={}){if(typeof window>"u"||typeof document>"u")return;let N=X6(_?.theme||"default"),j=_?.tint?String(_.tint).trim():null,Y=w5(N),L=Qj(Y),Z=c$(N,L);p4={theme:N,tint:j},m$=L;let V=document.documentElement;V.dataset.theme=L,V.dataset.colorTheme=N,V.dataset.tint=j?String(j):"",V.style.colorScheme=L;let Q=Z;if(N==="default"&&j)Q=p$(Z,j,L);if(N==="default"&&!j)Xj();else qj(Q,L);if(Uj(Q.bgPrimary,L),Gj(),$.persist!==!1)if(Z1(x5,N),j)Z1(q6,j);else Z1(q6,"")}function Q6(){if(w5(p4.theme).mode!=="auto")return;C5(p4,{persist:!1})}function l$(){if(typeof window>"u")return()=>{};let _=n$(),$=Oj(_),N=$?X6($.theme||"default"):X6(q_(x5)||"default"),j=$?$.tint?String($.tint).trim():null:(()=>{let Y=q_(q6);return Y?Y.trim():null})();if(C5({theme:N,tint:j},{persist:!1}),window.matchMedia&&!P5){let Y=window.matchMedia("(prefers-color-scheme: dark)");if(Y.addEventListener)Y.addEventListener("change",Q6);else if(Y.addListener)Y.addListener(Q6);return P5=!0,()=>{if(Y.removeEventListener)Y.removeEventListener("change",Q6);else if(Y.removeListener)Y.removeListener(Q6);P5=!1}}return()=>{}}function r$(_){if(!_||typeof _!=="object")return;let $=_.chat_jid||_.chatJid||n$(),N=_.theme??_.name??_.colorTheme,j=_.tint??null;if(Wj($,N||"default",j),C5({theme:N||"default",tint:j},{persist:!1}),!$||$==="web:default")Z1(x5,N||"default"),Z1(q6,j||"")}function s$(){if(typeof document>"u")return"light";let _=document.documentElement?.dataset?.theme;if(_==="dark"||_==="light")return _;return h$()}var U6=/#(\w+)/g,zj=new Set(["strong","em","b","i","u","s","br","p","ul","ol","li","blockquote","ruby","rt","rp","span"]),Fj=new Set(["a","abbr","blockquote","br","code","div","em","hr","h1","h2","h3","h4","h5","h6","i","img","kbd","li","mark","ol","p","pre","ruby","rt","rp","s","span","strong","sub","sup","table","tbody","td","th","thead","tr","u","ul","math","semantics","mrow","mi","mn","mo","mtext","mspace","msup","msub","msubsup","mfrac","msqrt","mroot","mtable","mtr","mtd","annotation"]),Hj=new Set(["class","style","title","role","aria-hidden","aria-label","aria-expanded","aria-live","data-mermaid","data-hashtag"]),Dj={a:new Set(["href","target","rel"]),img:new Set(["src","alt","title"])},Jj=new Set(["http:","https:","mailto:",""]);function I5(_){return String(_||"").replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/'/g,"&#39;")}function i4(_,$={}){if(!_)return null;let N=String(_).trim();if(!N)return null;if(N.startsWith("#")||N.startsWith("/"))return N;if(N.startsWith("data:")){if($.allowDataImage&&/^data:image\//i.test(N))return N;return null}if(N.startsWith("blob:"))return N;try{let j=new URL(N,typeof window<"u"?window.location.origin:"http://localhost");if(!Jj.has(j.protocol))return null;return j.href}catch{return null}}function o$(_,$={}){if(!_)return"";let N=new DOMParser().parseFromString(_,"text/html"),j=[],Y=N.createTreeWalker(N.body,NodeFilter.SHOW_ELEMENT),L;while(L=Y.nextNode())j.push(L);for(let Z of j){let V=Z.tagName.toLowerCase();if(!Fj.has(V)){let B=Z.parentNode;if(!B)continue;while(Z.firstChild)B.insertBefore(Z.firstChild,Z);B.removeChild(Z);continue}let Q=Dj[V]||new Set;for(let B of Array.from(Z.attributes)){let U=B.name.toLowerCase(),X=B.value;if(U.startsWith("on")){Z.removeAttribute(B.name);continue}if(U.startsWith("data-")||U.startsWith("aria-"))continue;if(Q.has(U)||Hj.has(U)){if(U==="href"){let W=i4(X);if(!W)Z.removeAttribute(B.name);else if(Z.setAttribute(B.name,W),V==="a"&&!Z.getAttribute("rel"))Z.setAttribute("rel","noopener noreferrer")}else if(U==="src"){let W=V==="img"&&typeof $.rewriteImageSrc==="function"?$.rewriteImageSrc(X):X,J=i4(W,{allowDataImage:V==="img"});if(!J)Z.removeAttribute(B.name);else Z.setAttribute(B.name,J)}continue}Z.removeAttribute(B.name)}}return N.body.innerHTML}function d$(_){if(!_)return _;let $=_.replace(/</g,"&lt;").replace(/>/g,"&gt;");return new DOMParser().parseFromString($,"text/html").documentElement.textContent}function G6(_,$=2){if(!_)return _;let N=_;for(let j=0;j<$;j+=1){let Y=d$(N);if(Y===N)break;N=Y}return N}function Ej(_){if(!_)return{text:"",blocks:[]};let N=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),j=[],Y=[],L=!1,Z=[];for(let V of N){if(!L&&V.trim().match(/^```mermaid\s*$/i)){L=!0,Z=[];continue}if(L&&V.trim().match(/^```\s*$/)){let Q=j.length;j.push(Z.join(`
`)),Y.push(`@@MERMAID_BLOCK_${Q}@@`),L=!1,Z=[];continue}if(L)Z.push(V);else Y.push(V)}if(L)Y.push("```mermaid"),Y.push(...Z);return{text:Y.join(`
`),blocks:j}}function Aj(_){if(!_)return _;return G6(_,5)}function yj(_){let $=new TextEncoder().encode(String(_||"")),N="";for(let j of $)N+=String.fromCharCode(j);return btoa(N)}function Mj(_){let $=atob(String(_||"")),N=new Uint8Array($.length);for(let j=0;j<$.length;j+=1)N[j]=$.charCodeAt(j);return new TextDecoder().decode(N)}function Pj(_,$){if(!_||!$||$.length===0)return _;return _.replace(/@@MERMAID_BLOCK_(\d+)@@/g,(N,j)=>{let Y=Number(j),L=$[Y]??"",Z=Aj(L);return`<div class="mermaid-container" data-mermaid="${yj(Z)}"><div class="mermaid-loading">Loading diagram...</div></div>`})}function a$(_){if(!_)return _;return _.replace(/<code>([\s\S]*?)<\/code>/gi,($,N)=>{if(N.includes(`
`))return`
\`\`\`
${N}
\`\`\`
`;return`\`${N}\``})}var kj={span:new Set(["title","class","lang","dir"])};function xj(_,$){let N=kj[_];if(!N||!$)return"";let j=[],Y=/([a-zA-Z_:][\w:.-]*)(?:\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s"'`=<>]+)))?/g,L;while(L=Y.exec($)){let Z=(L[1]||"").toLowerCase();if(!Z||Z.startsWith("on")||!N.has(Z))continue;let V=L[2]??L[3]??L[4]??"";j.push(` ${Z}="${I5(V)}"`)}return j.join("")}function t$(_){if(!_)return _;return _.replace(/&lt;([\s\S]*?)&gt;/g,($,N)=>{let j=N.trim(),Y=j.startsWith("/"),L=Y?j.slice(1).trim():j,V=L.endsWith("/")?L.slice(0,-1).trim():L,[Q=""]=V.split(/\s+/,1),B=Q.toLowerCase();if(!B||!zj.has(B))return $;if(B==="br")return Y?"":"<br>";if(Y)return`</${B}>`;let U=V.slice(Q.length).trim(),X=xj(B,U);return`<${B}${X}>`})}function e$(_){if(!_)return _;let $=(N)=>N.replace(/&amp;lt;/g,"&lt;").replace(/&amp;gt;/g,"&gt;").replace(/&amp;quot;/g,"&quot;").replace(/&amp;#39;/g,"&#39;").replace(/&amp;amp;/g,"&amp;");return _.replace(/<pre><code>([\s\S]*?)<\/code><\/pre>/g,(N,j)=>`<pre><code>${$(j)}</code></pre>`).replace(/<code>([\s\S]*?)<\/code>/g,(N,j)=>`<code>${$(j)}</code>`)}function _3(_){if(!_)return _;let $=new DOMParser().parseFromString(_,"text/html"),N=$.createTreeWalker($.body,NodeFilter.SHOW_TEXT),j=(L)=>L.replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&quot;/g,'"').replace(/&#39;/g,"'").replace(/&amp;/g,"&"),Y;while(Y=N.nextNode()){if(!Y.nodeValue)continue;let L=j(Y.nodeValue);if(L!==Y.nodeValue)Y.nodeValue=L}return $.body.innerHTML}function wj(_){if(!window.katex)return _;let $=(Z)=>d$(Z).replace(/&gt;/g,">").replace(/&lt;/g,"<").replace(/&amp;/g,"&").replace(/<br\s*\/?\s*>/gi,`
`),N=(Z)=>{let V=[],Q=Z.replace(/<pre\b[^>]*>\s*<code\b[^>]*>[\s\S]*?<\/code>\s*<\/pre>/gi,(B)=>{let U=V.length;return V.push(B),`@@CODE_BLOCK_${U}@@`});return Q=Q.replace(/<code\b[^>]*>[\s\S]*?<\/code>/gi,(B)=>{let U=V.length;return V.push(B),`@@CODE_INLINE_${U}@@`}),{html:Q,blocks:V}},j=(Z,V)=>{if(!V.length)return Z;return Z.replace(/@@CODE_(?:BLOCK|INLINE)_(\d+)@@/g,(Q,B)=>{let U=Number(B);return V[U]??""})},Y=N(_),L=Y.html;return L=L.replace(/(^|\n|<br\s*\/?\s*>|<p>|<\/p>)\s*\$\$([\s\S]+?)\$\$\s*(?=\n|<br\s*\/?\s*>|<\/p>|$)/gi,(Z,V,Q)=>{try{let B=katex.renderToString($(Q.trim()),{displayMode:!0,throwOnError:!1});return`${V}${B}`}catch(B){return`<span class="math-error" title="${I5(B.message)}">${Z}</span>`}}),L=L.replace(/(^|[^\\$])\$(?!\s)([^\n$]+?)\$/g,(Z,V,Q)=>{if(/\s$/.test(Q))return Z;try{let B=katex.renderToString($(Q),{displayMode:!1,throwOnError:!1});return`${V}${B}`}catch(B){return`${V}<span class="math-error" title="${I5(B.message)}">$${Q}$</span>`}}),j(L,Y.blocks)}function Cj(_){if(!_)return _;let $=new DOMParser().parseFromString(_,"text/html"),N=$.createTreeWalker($.body,NodeFilter.SHOW_TEXT),j=[],Y;while(Y=N.nextNode())j.push(Y);for(let L of j){let Z=L.nodeValue;if(!Z)continue;if(U6.lastIndex=0,!U6.test(Z))continue;U6.lastIndex=0;let V=L.parentElement;if(V&&(V.closest("a")||V.closest("code")||V.closest("pre")))continue;let Q=Z.split(U6);if(Q.length<=1)continue;let B=$.createDocumentFragment();Q.forEach((U,X)=>{if(X%2===1){let W=$.createElement("a");W.setAttribute("href","#"),W.className="hashtag",W.setAttribute("data-hashtag",U),W.textContent=`#${U}`,B.appendChild(W)}else B.appendChild($.createTextNode(U))}),L.parentNode?.replaceChild(B,L)}return $.body.innerHTML}function Ij(_){if(!_)return _;let N=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),j=[],Y=!1;for(let L of N){if(!Y&&L.trim().match(/^```(?:math|katex|latex)\s*$/i)){Y=!0,j.push("$$");continue}if(Y&&L.trim().match(/^```\s*$/)){Y=!1,j.push("$$");continue}j.push(L)}return j.join(`
`)}function Tj(_){let $=Ij(_||""),{text:N,blocks:j}=Ej($),Y=G6(N,2),Z=a$(Y).replace(/</g,"&lt;");return{safeHtml:t$(Z),mermaidBlocks:j}}function X_(_,$,N={}){if(!_)return"";let{safeHtml:j,mermaidBlocks:Y}=Tj(_),L=window.marked?marked.parse(j,{headerIds:!1,mangle:!1}):j.replace(/\n/g,"<br>");return L=e$(L),L=_3(L),L=wj(L),L=Cj(L),L=Pj(L,Y),L=o$(L,N),L}function W6(_){if(!_)return"";let $=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`),N=G6($,2),Y=a$(N).replace(/</g,"&lt;").replace(/>/g,"&gt;"),L=t$(Y),Z=window.marked?marked.parse(L):L.replace(/\n/g,"<br>");return Z=e$(Z),Z=_3(Z),Z=o$(Z),Z}function fj(_,$=6){return _.replace(/<polyline\b([^>]*)\bpoints="([^"]+)"([^>]*)\/?\s*>/g,(N,j,Y,L)=>{let Z=Y.trim().split(/\s+/).map((Q)=>{let[B,U]=Q.split(",").map(Number);return{x:B,y:U}});if(Z.length<3)return`<polyline${j}points="${Y}"${L}/>`;let V=[`M ${Z[0].x},${Z[0].y}`];for(let Q=1;Q<Z.length-1;Q++){let B=Z[Q-1],U=Z[Q],X=Z[Q+1],W=U.x-B.x,J=U.y-B.y,E=X.x-U.x,P=X.y-U.y,f=Math.sqrt(W*W+J*J),D=Math.sqrt(E*E+P*P),y=Math.min($,f/2,D/2);if(y<0.5){V.push(`L ${U.x},${U.y}`);continue}let C=U.x-W/f*y,u=U.y-J/f*y,A=U.x+E/D*y,v=U.y+P/D*y,n=W*P-J*E>0?1:0;V.push(`L ${C},${u}`),V.push(`A ${y},${y} 0 0 ${n} ${A},${v}`)}return V.push(`L ${Z[Z.length-1].x},${Z[Z.length-1].y}`),`<path${j}d="${V.join(" ")}"${L}/>`})}async function Q4(_){if(!window.beautifulMermaid)return;let{renderMermaid:$,THEMES:N}=window.beautifulMermaid,Y=s$()==="dark"?N["tokyo-night"]:N["github-light"],L=_.querySelectorAll(".mermaid-container[data-mermaid]");for(let Z of L)try{let V=Z.dataset.mermaid,Q=Mj(V||""),B=G6(Q,2),U=await $(B,{...Y,transparent:!0});U=fj(U),Z.innerHTML=U,Z.removeAttribute("data-mermaid")}catch(V){console.error("Mermaid render error:",V);let Q=document.createElement("pre");Q.className="mermaid-error",Q.textContent=`Diagram error: ${V.message}`,Z.innerHTML="",Z.appendChild(Q),Z.removeAttribute("data-mermaid")}}function $3(_){let $=String(_||"").trim();if(!$.startsWith("/btw"))return null;let N=$.slice(4).trim();if(!N)return{type:"help"};if(N==="clear"||N==="close")return{type:"clear"};return{type:"ask",question:N}}function N3(_){return String(_||"").trim()||"web:default"}function j3(_){if(!_)return!1;let $=String(_.answer||"").trim();return _.status!=="running"&&Boolean($)}function Y3(_){if(!_)return!1;return _.status!=="running"}function L3(_){let $=String(_?.question||"").trim(),N=String(_?.answer||"").trim();if(!$&&!N)return"";return["BTW side conversation",$?`Question: ${$}`:null,N?`Answer:
${N}`:null].filter(Boolean).join(`

`)}function Z3({session:_,onClose:$,onInject:N,onRetry:j}){let Y=x(null),L=x(null),Z=_?.thinking?W6(_.thinking):"",V=_?.answer?X_(_.answer,null,{sanitize:!1}):"";if(c(()=>{if(Y.current&&Z)Q4(Y.current).catch(()=>{})},[Z]),c(()=>{if(L.current&&V)Q4(L.current).catch(()=>{})},[V]),!_)return null;let Q=_.status==="running",B=Boolean(String(_.answer||"").trim()),U=Boolean(String(_.thinking||"").trim()),X=j3(_),W=Y3(_),J=!Q&&B,E=Q?"Thinking…":_.status==="error"?"Error":"Done";return O`
        <section class="btw-panel" aria-label="BTW side conversation">
            <div class="btw-panel-header">
                <div class="btw-panel-title-wrap">
                    <span class="btw-panel-title">Question</span>
                    <span class=${`btw-panel-status btw-panel-status-${_.status||"idle"}`}>${E}</span>
                </div>
                <button class="btw-panel-close" onClick=${()=>$?.()} title="Close BTW" aria-label="Close BTW">
                    <svg viewBox="0 0 16 16" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round">
                        <line x1="4" y1="4" x2="12" y2="12"/>
                        <line x1="12" y1="4" x2="4" y2="12"/>
                    </svg>
                </button>
            </div>

            ${_.question&&O`<div class="btw-block btw-question">${_.question}</div>`}
            ${_.error&&O`<div class="btw-block btw-error">${_.error}</div>`}
            ${U&&O`
                <details class="btw-block btw-thinking" open=${Q?!0:void 0}>
                    <summary>Thinking</summary>
                    <div
                        class="btw-thinking-body post-content"
                        ref=${Y}
                        dangerouslySetInnerHTML=${{__html:Z}}
                    ></div>
                </details>
            `}
            ${X&&O`
                <div class="btw-block btw-answer">
                    <div class="btw-answer-label">Answer</div>
                    <div
                        class="btw-answer-body post-content"
                        ref=${L}
                        dangerouslySetInnerHTML=${{__html:V}}
                    ></div>
                </div>
            `}

            ${W&&O`
                <div class="btw-panel-footer">
                    <div class="btw-panel-footer-left">
                        ${_.question&&O`
                            <button class="btw-btn btw-btn-secondary" onClick=${()=>j?.()}>
                                Retry
                            </button>
                        `}
                    </div>
                    <div class="btw-panel-footer-right">
                        <button class="btw-btn btw-btn-primary" onClick=${()=>N?.()} disabled=${!J}>
                            Inject into chat
                        </button>
                    </div>
                </div>
            `}
        </section>
    `}function Sj(_){let $=_?.artifact||{},N=$.kind||_?.kind||null;if(N!=="html"&&N!=="svg")return null;if(N==="html"){let Y=typeof $.html==="string"?$.html:typeof _?.html==="string"?_.html:"";return Y?{kind:N,html:Y}:null}let j=typeof $.svg==="string"?$.svg:typeof _?.svg==="string"?_.svg:"";return j?{kind:N,svg:j}:null}function Rj(_){let $=_?.artifact&&typeof _.artifact==="object"?_.artifact:{},N=typeof $.svg==="string"?$.svg:typeof _?.svg==="string"?_.svg:"",j=typeof $.html==="string"?$.html:typeof _?.html==="string"?_.html:typeof _?.w==="string"?_.w:typeof _?.content==="string"?_.content:"",L=($.kind||_?.kind||null)==="svg"||N?"svg":"html";if(L==="svg")return N?{kind:L,svg:N}:{kind:L};return j?{kind:L,html:j}:{kind:L}}function w4(_){return typeof _==="number"&&Number.isFinite(_)?_:null}function y0(_){return typeof _==="string"&&_.trim()?_.trim():null}function B3(_,$=!1){let j=(Array.isArray(_)?_:$?["interactive"]:[]).filter((Y)=>typeof Y==="string").map((Y)=>Y.trim().toLowerCase()).filter(Boolean);return Array.from(new Set(j))}var K3="__PICLAW_WIDGET_HOST__:";function V3(_){return JSON.stringify(_).replace(/</g,"\\u003c").replace(/>/g,"\\u003e").replace(/&/g,"\\u0026").replace(/\u2028/g,"\\u2028").replace(/\u2029/g,"\\u2029")}function T5(_,$){if(!_||_.type!=="generated_widget")return null;let N=Sj(_);if(!N)return null;return{title:_.title||_.name||"Generated widget",subtitle:typeof _.subtitle==="string"?_.subtitle:"",description:_.description||_.subtitle||"",originPostId:Number.isFinite($?.id)?$.id:null,originChatJid:typeof $?.chat_jid==="string"?$.chat_jid:null,widgetId:_.widget_id||_.id||null,artifact:N,capabilities:B3(_.capabilities,_.interactive===!0),source:"timeline",status:"final"}}function Q3(_){if(!_||typeof _!=="object")return null;let $=Rj(_),N=y0(_?.widget_id)||y0(_?.widgetId)||y0(_?.tool_call_id)||y0(_?.toolCallId),j=y0(_?.tool_call_id)||y0(_?.toolCallId),Y=y0(_?.turn_id)||y0(_?.turnId),L=y0(_?.title)||y0(_?.name)||"Generated widget",Z=y0(_?.subtitle)||"",V=y0(_?.description)||Z,Q=y0(_?.status),B=Q==="loading"||Q==="streaming"||Q==="final"||Q==="error"?Q:"streaming";return{title:L,subtitle:Z,description:V,originPostId:w4(_?.origin_post_id)??w4(_?.originPostId),originChatJid:y0(_?.origin_chat_jid)||y0(_?.originChatJid)||y0(_?.chat_jid)||null,widgetId:N,artifact:$,capabilities:B3(_?.capabilities,!0),source:"live",status:B,turnId:Y,toolCallId:j,width:w4(_?.width),height:w4(_?.height),error:y0(_?.error)}}function q3(_){return T5(_,null)!==null}function p1(_){let $=y0(_?.toolCallId)||y0(_?.tool_call_id);if($)return $;let N=y0(_?.widgetId)||y0(_?.widget_id);if(N)return N;let j=w4(_?.originPostId)??w4(_?.origin_post_id);if(j!==null)return`post:${j}`;return null}function X3(_){let N=(_?.artifact||{}).kind||_?.kind||null,Y=(Array.isArray(_?.capabilities)?_.capabilities:[]).some((L)=>typeof L==="string"&&L.trim().toLowerCase()==="interactive");return N==="html"&&(_?.source==="live"||Y)}function U3(_){return X3(_)?"allow-downloads allow-scripts":"allow-downloads"}function O6(_){return{title:y0(_?.title)||"Generated widget",widgetId:y0(_?.widgetId)||y0(_?.widget_id),toolCallId:y0(_?.toolCallId)||y0(_?.tool_call_id),turnId:y0(_?.turnId)||y0(_?.turn_id),capabilities:Array.isArray(_?.capabilities)?_.capabilities:[],source:_?.source==="live"?"live":"timeline",status:y0(_?.status)||"final"}}function z6(_){return{...O6(_),subtitle:y0(_?.subtitle)||"",description:y0(_?.description)||"",error:y0(_?.error)||null,width:w4(_?.width),height:w4(_?.height),runtimeState:_?.runtimeState&&typeof _.runtimeState==="object"?_.runtimeState:null}}function F6(_){return`${K3}${JSON.stringify(z6(_))}`}function G3(_){if(typeof _==="string"&&_.trim())return _.trim();if(!_||typeof _!=="object")return null;let $=y0(_.text)||y0(_.content)||y0(_.message)||y0(_.prompt)||y0(_.value);if($)return $;let N=_.data;if(typeof N==="string"&&N.trim())return N.trim();if(N&&typeof N==="object"){let j=y0(N.text)||y0(N.content)||y0(N.message)||y0(N.prompt)||y0(N.value);if(j)return j}return null}function W3(_){if(!_||typeof _!=="object")return!1;return _.close===!0||_.dismiss===!0||_.closeAfterSubmit===!0}function O3(_){let $=y0(_?.status);if($==="loading"||$==="streaming")return"Widget is loading…";if($==="error")return y0(_?.error)||"Widget failed to load.";return"Widget artifact is missing or unsupported."}function uj(_){let $=O6(_);return`<script>
(function () {
  const meta = ${V3($)};
  function post(kind, payload) {
    try {
      window.parent.postMessage({
        __piclawGeneratedWidget: true,
        kind,
        widgetId: meta.widgetId || null,
        toolCallId: meta.toolCallId || null,
        turnId: meta.turnId || null,
        payload: payload || {}
      }, '*');
    } catch {}
  }

  const windowNamePrefix = ${V3(K3)};
  let lastWindowName = null;
  let pendingHostEnvelope = null;
  let pendingHostEnvelopeFrame = 0;
  let lastDispatchedEnvelopeKey = null;

  function getEnvelopeKey(data) {
    try {
      return JSON.stringify([
        data?.type || null,
        data?.widgetId || null,
        data?.toolCallId || null,
        data?.turnId || null,
        data?.payload || null,
      ]);
    } catch {
      return null;
    }
  }

  function flushHostEnvelope() {
    pendingHostEnvelopeFrame = 0;
    const data = pendingHostEnvelope;
    pendingHostEnvelope = null;
    if (!data) return;

    window.piclawWidget.lastHostMessage = data;
    const nextPayload = data.payload || null;
    if (data.type === 'widget.init') {
      const previous = window.piclawWidget.hostState && typeof window.piclawWidget.hostState === 'object'
        ? window.piclawWidget.hostState
        : null;
      if (nextPayload && typeof nextPayload === 'object') {
        window.piclawWidget.hostState = {
          ...(previous || {}),
          ...nextPayload,
          ...(Object.prototype.hasOwnProperty.call(nextPayload, 'runtimeState')
            ? {}
            : { runtimeState: previous?.runtimeState ?? null }),
        };
      } else {
        window.piclawWidget.hostState = previous || null;
      }
    } else if (data.type === 'widget.update' || data.type === 'widget.complete' || data.type === 'widget.error') {
      window.piclawWidget.hostState = nextPayload;
    }

    const effectivePayload = window.piclawWidget.hostState ?? nextPayload ?? null;
    const detail = (effectivePayload === data.payload)
      ? data
      : { ...data, payload: effectivePayload };
    const envelopeKey = getEnvelopeKey(detail);
    if (envelopeKey && envelopeKey === lastDispatchedEnvelopeKey) return;
    lastDispatchedEnvelopeKey = envelopeKey;
    window.dispatchEvent(new CustomEvent('piclaw:widget-message', { detail }));
  }

  function scheduleHostEnvelope(data) {
    if (!data) return;
    pendingHostEnvelope = data;
    if (pendingHostEnvelopeFrame) return;
    const schedule = typeof requestAnimationFrame === 'function'
      ? requestAnimationFrame
      : (cb) => setTimeout(cb, 0);
    pendingHostEnvelopeFrame = schedule(flushHostEnvelope);
  }

  function readWindowNameState() {
    try {
      const raw = window.name || '';
      if (!raw || raw === lastWindowName || !raw.startsWith(windowNamePrefix)) return;
      lastWindowName = raw;
      const payload = JSON.parse(raw.slice(windowNamePrefix.length));
      scheduleHostEnvelope({
        __piclawGeneratedWidgetHost: true,
        type: 'widget.update',
        widgetId: meta.widgetId || null,
        toolCallId: meta.toolCallId || null,
        turnId: meta.turnId || null,
        payload,
      });
    } catch {}
  }

  window.piclawWidget = {
    meta,
    lastHostMessage: null,
    hostState: null,
    ready(payload) { post('widget.ready', payload); },
    close(payload) { post('widget.close', payload); },
    requestRefresh(payload) { post('widget.request_refresh', payload); },
    submit(payload) { post('widget.submit', payload); },
  };

  window.addEventListener('message', function (event) {
    const data = event && event.data;
    if (!data || data.__piclawGeneratedWidgetHost !== true) return;
    if ((data.widgetId || null) !== (meta.widgetId || null)) return;
    scheduleHostEnvelope(data);
  });

  function announceReady() {
    readWindowNameState();
    post('widget.ready', { title: document.title || meta.title || 'Generated widget' });
  }

  setInterval(readWindowNameState, 250);

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', announceReady, { once: true });
  } else {
    announceReady();
  }
})();
</script>`}function z3(_){let $=_?.artifact||{},N=$.kind||_?.kind||null,j=typeof $.html==="string"?$.html:typeof _?.html==="string"?_.html:"",Y=typeof $.svg==="string"?$.svg:typeof _?.svg==="string"?_.svg:"",L=typeof _?.title==="string"&&_.title.trim()?_.title.trim():"Generated widget",Z=N==="svg"?Y:j;if(!Z)return"";let V=X3(_),Q=["default-src 'none'","img-src data: blob: https: http:","style-src 'unsafe-inline'","font-src data: https: http:","media-src data: blob: https: http:","connect-src 'none'","frame-src 'none'",V?"script-src 'unsafe-inline'":"script-src 'none'","object-src 'none'","base-uri 'none'","form-action 'none'"].join("; "),B=N==="svg"?`<div class="widget-svg-shell">${Z}</div>`:Z,U=V?uj(_):"";return`<!doctype html>
<html>
<head>
<meta charset="utf-8" />
<meta http-equiv="Content-Security-Policy" content="${Q}" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<title>${L.replace(/[<&>]/g,"")}</title>
<style>
:root { color-scheme: dark light; }
html, body {
  margin: 0;
  padding: 0;
  min-height: 100%;
  background: #0f1117;
  color: #f5f7fb;
  font-family: Inter, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
}
body {
  box-sizing: border-box;
}
.widget-svg-shell {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 24px;
  box-sizing: border-box;
}
.widget-svg-shell svg {
  max-width: 100%;
  height: auto;
}
</style>
${U}
</head>
<body>${B}</body>
</html>`}function F3({widget:_,onClose:$,onWidgetEvent:N}){let j=x(null),Y=x(!1),L=w0(()=>z3(_),[_?.artifact?.kind,_?.artifact?.html,_?.artifact?.svg,_?.widgetId,_?.toolCallId,_?.turnId,_?.title]);if(c(()=>{if(!_)return;let D=(y)=>{if(y.key==="Escape")$?.()};return document.addEventListener("keydown",D),()=>document.removeEventListener("keydown",D)},[_,$]),c(()=>{Y.current=!1},[L]),c(()=>{if(!_)return;let D=j.current;if(!D)return;let y=(o)=>{let n=F6(_),g=o==="widget.init"?O6(_):z6(_);try{D.name=n}catch{}try{D.contentWindow?.postMessage({__piclawGeneratedWidgetHost:!0,type:o,widgetId:_?.widgetId||null,toolCallId:_?.toolCallId||null,turnId:_?.turnId||null,payload:g},"*")}catch{}},C=()=>{y("widget.init"),y("widget.update")},u=()=>{Y.current=!0,C()};D.addEventListener("load",u);let v=[0,40,120,300,800].map((o)=>setTimeout(C,o));return()=>{D.removeEventListener("load",u),v.forEach((o)=>clearTimeout(o))}},[L,_?.widgetId,_?.toolCallId,_?.turnId]),c(()=>{if(!_)return;let D=j.current;if(!D?.contentWindow)return;let y=F6(_),C=z6(_);try{D.name=y}catch{}try{D.contentWindow.postMessage({__piclawGeneratedWidgetHost:!0,type:"widget.update",widgetId:_?.widgetId||null,toolCallId:_?.toolCallId||null,turnId:_?.turnId||null,payload:C},"*")}catch{}return},[_?.widgetId,_?.toolCallId,_?.turnId,_?.status,_?.subtitle,_?.description,_?.error,_?.width,_?.height,_?.runtimeState]),c(()=>{if(!_)return;let D=(y)=>{let C=y?.data;if(!C||C.__piclawGeneratedWidget!==!0)return;let u=j.current,A=p1(_),v=p1({widgetId:C.widgetId,toolCallId:C.toolCallId});if(v&&A&&v!==A)return;if(!v&&u?.contentWindow&&y.source!==u.contentWindow)return;N?.(C,_)};return window.addEventListener("message",D),()=>window.removeEventListener("message",D)},[_,N]),!_)return null;let V=(_?.artifact||{}).kind||_?.kind||"html",Q=typeof _?.title==="string"&&_.title.trim()?_.title.trim():"Generated widget",B=typeof _?.subtitle==="string"&&_.subtitle.trim()?_.subtitle.trim():"",U=_?.source==="live"?"live":"timeline",X=typeof _?.status==="string"&&_.status.trim()?_.status.trim():"final",W=U==="live"?`Live widget • ${X.toUpperCase()}`:_?.originPostId?`Message #${_.originPostId}`:"Timeline launch",J=typeof _?.description==="string"&&_.description.trim()?_.description.trim():"",E=!L,P=O3(_),f=U3(_);return O`
        <div class="floating-widget-backdrop" onClick=${()=>$?.()}>
            <section
                class="floating-widget-pane"
                aria-label=${Q}
                onClick=${(D)=>D.stopPropagation()}
            >
                <div class="floating-widget-header">
                    <div class="floating-widget-heading">
                        <div class="floating-widget-eyebrow">${W} • ${V.toUpperCase()}</div>
                        <div class="floating-widget-title">${Q}</div>
                        ${(B||J)&&O`
                            <div class="floating-widget-subtitle">${B||J}</div>
                        `}
                    </div>
                    <button
                        class="floating-widget-close"
                        type="button"
                        onClick=${()=>$?.()}
                        title="Close widget"
                        aria-label="Close widget"
                    >
                        Close
                    </button>
                </div>
                <div class="floating-widget-body">
                    ${E?O`<div class="floating-widget-empty">${P}</div>`:O`
                            <iframe
                                ref=${j}
                                class="floating-widget-frame"
                                title=${Q}
                                name=${F6(_)}
                                sandbox=${f}
                                referrerpolicy="no-referrer"
                                srcdoc=${L}
                            ></iframe>
                        `}
                </div>
            </section>
        </div>
    `}var H3="PiClaw";function f5(_,$,N=!1){let j=_||"PiClaw",Y=j.charAt(0).toUpperCase(),L=["#FF6B6B","#4ECDC4","#45B7D1","#FFA07A","#98D8C8","#F7DC6F","#BB8FCE","#85C1E2","#F8B195","#6C5CE7","#00B894","#FDCB6E","#E17055","#74B9FF","#A29BFE","#FD79A8","#00CEC9","#FFEAA7","#DFE6E9","#FF7675","#55EFC4","#81ECEC","#FAB1A0","#74B9FF","#A29BFE","#FD79A8"],Z=Y.charCodeAt(0)%L.length,V=L[Z],Q=j.trim().toLowerCase(),B=typeof $==="string"?$.trim():"",U=B?B:null,X=N||Q==="PiClaw".toLowerCase()||Q==="pi";return{letter:Y,color:V,image:U||(X?"/static/icon-192.png":null)}}function D3(_,$){if(!_)return"PiClaw";let N=$[_]?.name||_;return N?N.charAt(0).toUpperCase()+N.slice(1):"PiClaw"}function J3(_,$){if(!_)return null;let N=$[_]||{};return N.avatar_url||N.avatarUrl||N.avatar||null}function E3(_){if(!_)return null;if(typeof document<"u"){let L=document.documentElement,Z=L?.dataset?.colorTheme||"",V=L?.dataset?.tint||"",Q=getComputedStyle(L).getPropertyValue("--accent-color")?.trim();if(Q&&(V||Z&&Z!=="default"))return Q}let $=["#4ECDC4","#FF6B6B","#45B7D1","#BB8FCE","#FDCB6E","#00B894","#74B9FF","#FD79A8","#81ECEC","#FFA07A"],N=String(_),j=0;for(let L=0;L<N.length;L+=1)j=(j*31+N.charCodeAt(L))%2147483647;let Y=Math.abs(j)%$.length;return $[Y]}function bj(_){if(!_||typeof _!=="object")return null;let $=_.started_at??_.startedAt;if(typeof $!=="string"||!$)return null;let N=Date.parse($);return Number.isFinite(N)?N:null}function x8(_){if(!_||typeof _!=="object")return!1;let $=_.intent_key??_.intentKey;return _.type==="intent"&&$==="compaction"}function A3(_){if(!_||typeof _!=="object")return"";let $=_.title;if(typeof $==="string"&&$.trim())return $.trim();let N=_.status;if(typeof N==="string"&&N.trim())return N.trim();return x8(_)?"Compacting context":"Working..."}function vj(_){let $=Math.max(0,Math.floor(_/1000)),N=$%60,j=Math.floor($/60)%60,Y=Math.floor($/3600);if(Y>0)return`${Y}:${String(j).padStart(2,"0")}:${String(N).padStart(2,"0")}`;return`${j}:${String(N).padStart(2,"0")}`}function y3(_,$=Date.now()){let N=bj(_);if(N===null)return null;return vj(Math.max(0,$-N))}function M3({status:_,draft:$,plan:N,thought:j,pendingRequest:Y,intent:L,turnId:Z,steerQueued:V,onPanelToggle:Q}){let X=(Q0)=>{if(!Q0)return{text:"",totalLines:0,fullText:""};if(typeof Q0==="string"){let k0=Q0,r0=k0?k0.replace(/\r\n/g,`
`).split(`
`).length:0;return{text:k0,totalLines:r0,fullText:k0}}let P0=Q0.text||"",J0=Q0.fullText||Q0.full_text||P0,Z0=Number.isFinite(Q0.totalLines)?Q0.totalLines:J0?J0.replace(/\r\n/g,`
`).split(`
`).length:0;return{text:P0,totalLines:Z0,fullText:J0}},W=160,J=(Q0)=>String(Q0||"").replace(/<\/?internal>/gi,""),E=(Q0)=>{if(!Q0)return 1;return Math.max(1,Math.ceil(Q0.length/160))},P=(Q0,P0,J0)=>{let Z0=(Q0||"").replace(/\r\n/g,`
`).replace(/\r/g,`
`);if(!Z0)return{text:"",omitted:0,totalLines:Number.isFinite(J0)?J0:0,visibleLines:0};let k0=Z0.split(`
`),r0=k0.length>P0?k0.slice(0,P0).join(`
`):Z0,m0=Number.isFinite(J0)?J0:k0.reduce((R0,n0)=>R0+E(n0),0),G1=r0?r0.split(`
`).reduce((R0,n0)=>R0+E(n0),0):0,P1=Math.max(m0-G1,0);return{text:r0,omitted:P1,totalLines:m0,visibleLines:G1}},f=X(N),D=X(j),y=X($),C=Boolean(f.text)||f.totalLines>0,u=Boolean(D.text)||D.totalLines>0,A=Boolean(y.fullText?.trim()||y.text?.trim());if(!_&&!A&&!C&&!u&&!Y&&!L)return null;let[v,o]=p(new Set),[n,g]=p(()=>Date.now()),T=(Q0)=>o((P0)=>{let J0=new Set(P0),Z0=!J0.has(Q0);if(Z0)J0.add(Q0);else J0.delete(Q0);if(typeof Q==="function")Q(Q0,Z0);return J0});c(()=>{o(new Set)},[Z]);let i=x8(_);c(()=>{if(!i)return;g(Date.now());let Q0=setInterval(()=>g(Date.now()),1000);return()=>clearInterval(Q0)},[i,_?.started_at,_?.startedAt]);let d=_?.turn_id||Z,q0=E3(d),l=V?"turn-dot turn-dot-queued":"turn-dot",$0=(Q0)=>Q0,N0=Boolean(_?.last_activity||_?.lastActivity),Y0=(Q0)=>Q0==="warning"?"#f59e0b":Q0==="error"?"var(--danger-color)":Q0==="success"?"var(--success-color)":q0,L0=L?.kind||"info",K0=Y0(L0),G0=Y0(_?.kind||(i?"warning":"info")),W0="",F0=_?.title,c0=_?.status;if(_?.type==="plan")W0=F0?`Planning: ${F0}`:"Planning...";else if(_?.type==="tool_call")W0=F0?`Running: ${F0}`:"Running tool...";else if(_?.type==="tool_status")W0=F0?`${F0}: ${c0||"Working..."}`:c0||"Working...";else if(_?.type==="error")W0=F0||"Agent error";else W0=F0||c0||"Working...";if(N0)W0="Last activity just now";let M0=({panelTitle:Q0,text:P0,fullText:J0,totalLines:Z0,maxLines:k0,titleClass:r0,panelKey:m0})=>{let G1=v.has(m0),P1=J0||P0||"",R0=m0==="thought"||m0==="draft"?J(P1):P1,n0=typeof k0==="number",j1=G1&&n0,V1=n0?P(R0,k0,Z0):{text:R0||"",omitted:0,totalLines:Number.isFinite(Z0)?Z0:0};if(!R0&&!(Number.isFinite(V1.totalLines)&&V1.totalLines>0))return null;let s0=`agent-thinking-body${n0?" agent-thinking-body-collapsible":""}`,T1=n0?`--agent-thinking-collapsed-lines: ${k0};`:"";return O`
            <div
                class="agent-thinking"
                data-expanded=${G1?"true":"false"}
                data-collapsible=${n0?"true":"false"}
                style=${q0?`--turn-color: ${q0};`:""}
            >
                <div class="agent-thinking-title ${r0||""}">
                    ${q0&&O`<span class=${l} aria-hidden="true"></span>`}
                    ${Q0}
                    ${j1&&O`
                        <button
                            class="agent-thinking-close"
                            aria-label=${`Close ${Q0} panel`}
                            onClick=${()=>T(m0)}
                        >
                            ×
                        </button>
                    `}
                </div>
                <div
                    class=${s0}
                    style=${T1}
                    dangerouslySetInnerHTML=${{__html:W6(R0)}}
                />
                ${!G1&&V1.omitted>0&&O`
                    <button class="agent-thinking-truncation" onClick=${()=>T(m0)}>
                        ▸ ${V1.omitted} more lines
                    </button>
                `}
                ${G1&&V1.omitted>0&&O`
                    <button class="agent-thinking-truncation" onClick=${()=>T(m0)}>
                        ▴ show less
                    </button>
                `}
            </div>
        `},D0=Y?.tool_call?.title,p0=D0?`Awaiting approval: ${D0}`:"Awaiting approval",i0=i?y3(_,n):null,C0=(Q0,P0,J0=null)=>{let Z0=A3(Q0);return O`
            <div
                class="agent-thinking agent-thinking-intent"
                aria-live="polite"
                style=${P0?`--turn-color: ${P0};`:""}
                title=${Q0?.detail||""}
            >
                <div class="agent-thinking-title intent">
                    ${P0&&O`<span class=${l} aria-hidden="true"></span>`}
                    <span class="agent-thinking-title-text">${Z0}</span>
                    ${J0&&O`<span class="agent-status-elapsed">${J0}</span>`}
                </div>
                ${Q0.detail&&O`<div class="agent-thinking-body">${Q0.detail}</div>`}
            </div>
        `};return O`
        <div class="agent-status-panel">
            ${L&&C0(L,K0)}
            ${_?.type==="intent"&&C0(_,G0,i0)}
            ${Y&&O`
                <div class="agent-status agent-status-request" aria-live="polite" style=${q0?`--turn-color: ${q0};`:""}>
                    <span class=${l} aria-hidden="true"></span>
                    <div class="agent-status-spinner"></div>
                    <span class="agent-status-text">${p0}</span>
                </div>
            `}
            ${C&&M0({panelTitle:$0("Planning"),text:f.text,fullText:f.fullText,totalLines:f.totalLines,panelKey:"plan"})}
            ${u&&M0({panelTitle:$0("Thoughts"),text:D.text,fullText:D.fullText,totalLines:D.totalLines,maxLines:8,titleClass:"thought",panelKey:"thought"})}
            ${A&&M0({panelTitle:$0("Draft"),text:y.text,fullText:y.fullText,totalLines:y.totalLines,maxLines:8,titleClass:"thought",panelKey:"draft"})}
            ${_&&_?.type!=="intent"&&O`
                <div class=${`agent-status${N0?" agent-status-last-activity":""}${_?.type==="error"?" agent-status-error":""}`} aria-live="polite" style=${q0?`--turn-color: ${q0};`:""}>
                    ${q0&&O`<span class=${l} aria-hidden="true"></span>`}
                    ${_?.type==="error"?O`<span class="agent-status-error-icon" aria-hidden="true">⚠</span>`:!N0&&O`<div class="agent-status-spinner"></div>`}
                    <span class="agent-status-text">${W0}</span>
                </div>
            `}
        </div>
    `}function P3({request:_,onRespond:$}){if(!_)return null;let{request_id:N,tool_call:j,options:Y,chat_jid:L}=_,Z=j?.title||"Agent Request",V=j?.kind||"other",Q=j?.rawInput||{},B=Q.command||Q.commands&&Q.commands[0]||null,U=Q.diff||null,X=Q.fileName||Q.path||null,W=j?.description||Q.description||Q.explanation||null,E=(Array.isArray(j?.locations)?j.locations:[]).map((C)=>C?.path).filter((C)=>Boolean(C)),P=Array.from(new Set([X,...E].filter(Boolean)));console.log("AgentRequestModal:",{request_id:N,tool_call:j,options:Y});let f=async(C)=>{try{await j6(N,C,L||null),$()}catch(u){console.error("Failed to respond to agent request:",u)}},D=async()=>{try{await Q5(Z,`Auto-approved: ${Z}`),await j6(N,"approved",L||null),$()}catch(C){console.error("Failed to add to whitelist:",C)}},y=Y&&Y.length>0;return O`
        <div class="agent-request-modal">
            <div class="agent-request-content">
                <div class="agent-request-header">
                    <div class="agent-request-icon">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                        </svg>
                    </div>
                    <div class="agent-request-title">${Z}</div>
                </div>
                ${(W||B||U||P.length>0)&&O`
                    <div class="agent-request-body">
                        ${W&&O`
                            <div class="agent-request-description">${W}</div>
                        `}
                        ${P.length>0&&O`
                            <div class="agent-request-files">
                                <div class="agent-request-subtitle">Files</div>
                                <ul>
                                    ${P.map((C,u)=>O`<li key=${u}>${C}</li>`)}
                                </ul>
                            </div>
                        `}
                        ${B&&O`
                            <pre class="agent-request-command">${B}</pre>
                        `}
                        ${U&&O`
                            <details class="agent-request-diff">
                                <summary>Proposed diff</summary>
                                <pre>${U}</pre>
                            </details>
                        `}
                    </div>
                `}
                <div class="agent-request-actions">
                    ${y?Y.map((C)=>O`
                            <button 
                                key=${C.optionId||C.id||String(C)}
                                class="agent-request-btn ${C.kind==="allow_once"||C.kind==="allow_always"?"primary":""}"
                                onClick=${()=>f(C.optionId||C.id||C)}
                            >
                                ${C.name||C.label||C.optionId||C.id||String(C)}
                            </button>
                        `):O`
                        <button class="agent-request-btn primary" onClick=${()=>f("approved")}>
                            Allow
                        </button>
                        <button class="agent-request-btn" onClick=${()=>f("denied")}>
                            Deny
                        </button>
                        <button class="agent-request-btn always-allow" onClick=${D}>
                            Always Allow This
                        </button>
                    `}
                </div>
            </div>
        </div>
    `}function k3(_){let $=new Date(_);if(Number.isNaN($.getTime()))return _;let j=new Date-$,Y=j/1000,L=86400000;if(j<L){if(Y<60)return"just now";if(Y<3600)return`${Math.floor(Y/60)}m`;return`${Math.floor(Y/3600)}h`}if(j<5*L){let Q=$.toLocaleDateString(void 0,{weekday:"short"}),B=$.toLocaleTimeString(void 0,{hour:"2-digit",minute:"2-digit"});return`${Q} ${B}`}let Z=$.toLocaleDateString(void 0,{month:"short",day:"numeric"}),V=$.toLocaleTimeString(void 0,{hour:"2-digit",minute:"2-digit"});return`${Z} ${V}`}function w8(_){if(!Number.isFinite(_))return"0";return Math.round(_).toLocaleString()}function k_(_){if(_<1024)return _+" B";if(_<1048576)return(_/1024).toFixed(1)+" KB";return(_/1048576).toFixed(1)+" MB"}function n4(_){let $=new Date(_);if(Number.isNaN($.getTime()))return _;return $.toLocaleString()}var mj=new Set(["application/json","application/xml","text/csv","text/html","text/markdown","text/plain","text/xml"]),gj=new Set(["text/markdown"]),hj=new Set(["application/msword","application/rtf","application/vnd.ms-excel","application/vnd.ms-powerpoint","application/vnd.oasis.opendocument.presentation","application/vnd.oasis.opendocument.spreadsheet","application/vnd.oasis.opendocument.text","application/vnd.openxmlformats-officedocument.presentationml.presentation","application/vnd.openxmlformats-officedocument.spreadsheetml.sheet","application/vnd.openxmlformats-officedocument.wordprocessingml.document"]),cj=new Set(["application/vnd.jgraph.mxfile"]);function C8(_){return typeof _==="string"?_.trim().toLowerCase():""}function pj(_){let $=C8(_);return!!$&&($.endsWith(".drawio")||$.endsWith(".drawio.xml")||$.endsWith(".drawio.svg")||$.endsWith(".drawio.png"))}function ij(_){let $=C8(_);return!!$&&$.endsWith(".pdf")}function nj(_){let $=C8(_);return!!$&&($.endsWith(".docx")||$.endsWith(".doc")||$.endsWith(".odt")||$.endsWith(".rtf")||$.endsWith(".xlsx")||$.endsWith(".xls")||$.endsWith(".ods")||$.endsWith(".pptx")||$.endsWith(".ppt")||$.endsWith(".odp"))}function I8(_,$){let N=C8(_);if(pj($)||cj.has(N))return"drawio";if(ij($)||N==="application/pdf")return"pdf";if(nj($)||hj.has(N))return"office";if(!N)return"unsupported";if(N.startsWith("image/"))return"image";if(mj.has(N)||N.startsWith("text/"))return"text";return"unsupported"}function x3(_){let $=C8(_);return gj.has($)}function w3(_){switch(_){case"image":return"Image preview";case"pdf":return"PDF preview";case"office":return"Office viewer";case"drawio":return"Draw.io preview (read-only)";case"text":return"Text preview";default:return"Preview unavailable"}}function lj(_){let N=String(_||"").trim().match(/^#([0-9a-f]{3}|[0-9a-f]{6})$/i);if(!N)return null;let j=N[1].length===3?N[1].split("").map((Y)=>`${Y}${Y}`).join(""):N[1];return{r:parseInt(j.slice(0,2),16),g:parseInt(j.slice(2,4),16),b:parseInt(j.slice(4,6),16)}}function rj(_){let N=String(_||"").trim().match(/^rgba?\((\d+)[,\s]+(\d+)[,\s]+(\d+)/i);if(!N)return null;let j=Number(N[1]),Y=Number(N[2]),L=Number(N[3]);if(![j,Y,L].every((Z)=>Number.isFinite(Z)))return null;return{r:j,g:Y,b:L}}function C3(_){return lj(_)||rj(_)}function H6(_){let $=(L)=>{let Z=L/255;return Z<=0.03928?Z/12.92:((Z+0.055)/1.055)**2.4},N=$(_.r),j=$(_.g),Y=$(_.b);return 0.2126*N+0.7152*j+0.0722*Y}function sj(_,$){let N=Math.max(H6(_),H6($)),j=Math.min(H6(_),H6($));return(N+0.05)/(j+0.05)}function oj(_,$,N="#ffffff"){let j=C3(_);if(!j)return N;let Y=N,L=-1;for(let Z of $){let V=C3(Z);if(!V)continue;let Q=sj(j,V);if(Q>L)Y=Z,L=Q}return Y}function S5(){let _=getComputedStyle(document.documentElement),$=(E,P)=>{for(let f of E){let D=_.getPropertyValue(f).trim();if(D)return D}return P},N=$(["--text-primary","--color-text"],"#0f1419"),j=$(["--text-secondary","--color-text-muted"],"#536471"),Y=$(["--bg-primary","--color-bg-primary"],"#ffffff"),L=$(["--bg-secondary","--color-bg-secondary"],"#f7f9fa"),Z=$(["--bg-hover","--bg-tertiary","--color-bg-tertiary"],"#e8ebed"),V=$(["--accent-color","--color-accent"],"#1d9bf0"),Q=$(["--success-color","--color-success"],"#00ba7c"),B=$(["--warning-color","--color-warning","--accent-color"],"#f0b429"),U=$(["--danger-color","--color-error"],"#f4212e"),X=$(["--border-color","--color-border"],"#eff3f4"),W=$(["--font-family"],"system-ui, sans-serif"),J=oj(V,[N,Y],N);return{fg:N,fgMuted:j,bgPrimary:Y,bg:L,bgEmphasis:Z,accent:V,good:Q,warning:B,attention:U,border:X,fontFamily:W,buttonTextColor:J}}function I3(){let{fg:_,fgMuted:$,bg:N,bgEmphasis:j,accent:Y,good:L,warning:Z,attention:V,border:Q,fontFamily:B}=S5();return{fontFamily:B,containerStyles:{default:{backgroundColor:N,foregroundColors:{default:{default:_,subtle:$},accent:{default:Y,subtle:Y},good:{default:L,subtle:L},warning:{default:Z,subtle:Z},attention:{default:V,subtle:V}}},emphasis:{backgroundColor:j,foregroundColors:{default:{default:_,subtle:$},accent:{default:Y,subtle:Y},good:{default:L,subtle:L},warning:{default:Z,subtle:Z},attention:{default:V,subtle:V}}}},actions:{actionsOrientation:"horizontal",actionAlignment:"left",buttonSpacing:8,maxActions:5,showCard:{actionMode:"inline"},spacing:"default"},adaptiveCard:{allowCustomStyle:!1},spacing:{small:4,default:8,medium:12,large:16,extraLarge:24,padding:12},separator:{lineThickness:1,lineColor:Q},fontSizes:{small:12,default:14,medium:16,large:18,extraLarge:22},fontWeights:{lighter:300,default:400,bolder:600},imageSizes:{small:40,medium:80,large:120},textBlock:{headingLevel:2}}}var dj=new Set(["1.0","1.1","1.2","1.3","1.4","1.5","1.6"]),T3=!1,D6=null,f3=!1;function R5(_){_.querySelector(".adaptive-card-notice")?.remove()}function aj(_,$,N="error"){R5(_);let j=document.createElement("div");j.className=`adaptive-card-notice adaptive-card-notice-${N}`,j.textContent=$,_.appendChild(j)}function tj(_,$=(N)=>X_(N,null)){let N=typeof _==="string"?_:String(_??"");if(!N.trim())return{outputHtml:"",didProcess:!1};return{outputHtml:$(N),didProcess:!0}}function ej(_=($)=>X_($,null)){return($,N)=>{try{let j=tj($,_);N.outputHtml=j.outputHtml,N.didProcess=j.didProcess}catch(j){console.error("[adaptive-card] Failed to process markdown:",j),N.outputHtml=String($??""),N.didProcess=!1}}}function _Y(_){if(f3||!_?.AdaptiveCard)return;_.AdaptiveCard.onProcessMarkdown=ej(),f3=!0}async function $Y(){if(T3)return;if(D6)return D6;return D6=new Promise((_,$)=>{let N=document.createElement("script");N.src="/static/js/vendor/adaptivecards.min.js",N.onload=()=>{T3=!0,_()},N.onerror=()=>$(Error("Failed to load adaptivecards SDK")),document.head.appendChild(N)}),D6}function NY(){return globalThis.AdaptiveCards}function jY(_){if(!_||typeof _!=="object")return!1;let $=_;return $.type==="adaptive_card"&&typeof $.card_id==="string"&&typeof $.schema_version==="string"&&typeof $.payload==="object"&&$.payload!==null}function YY(_){return dj.has(_)}function b5(_){if(!Array.isArray(_))return[];return _.filter(jY)}function LY(_){let $=(typeof _?.getJsonTypeName==="function"?_.getJsonTypeName():"")||_?.constructor?.name||"Unknown",N=(typeof _?.title==="string"?_.title:"")||"",j=(typeof _?.url==="string"?_.url:"")||void 0,Y=_?.data??void 0;return{type:$,title:N,data:Y,url:j,raw:_}}function u5(_){if(_==null)return"";if(typeof _==="string")return _.trim();if(typeof _==="number")return String(_);if(typeof _==="boolean")return _?"yes":"no";if(Array.isArray(_))return _.map(($)=>u5($)).filter(Boolean).join(", ");if(typeof _==="object")return Object.entries(_).map(([N,j])=>`${N}: ${u5(j)}`).filter((N)=>!N.endsWith(": ")).join(", ");return String(_).trim()}function ZY(_,$,N){if($==null)return $;if(_==="Input.Toggle"){if(typeof $==="boolean"){if($)return N?.valueOn??"true";return N?.valueOff??"false"}return typeof $==="string"?$:String($)}if(_==="Input.ChoiceSet"){if(Array.isArray($))return $.join(",");return typeof $==="string"?$:String($)}if(Array.isArray($))return $.join(", ");if(typeof $==="object")return u5($);return typeof $==="string"?$:String($)}function VY(_,$){if(!_||typeof _!=="object")return _;if(!$||typeof $!=="object"||Array.isArray($))return _;let N=$,j=(Y)=>{if(Array.isArray(Y))return Y.map((V)=>j(V));if(!Y||typeof Y!=="object")return Y;let Z={...Y};if(typeof Z.id==="string"&&Z.id in N&&String(Z.type||"").startsWith("Input."))Z.value=ZY(Z.type,N[Z.id],Z);for(let[V,Q]of Object.entries(Z))if(Array.isArray(Q)||Q&&typeof Q==="object")Z[V]=j(Q);return Z};return j(_)}function BY(_){_.classList.add("adaptive-card-readonly");for(let $ of Array.from(_.querySelectorAll("input, textarea, select, button"))){let N=$;try{N.setAttribute("aria-disabled","true")}catch{}try{N.setAttribute("tabindex","-1")}catch{}if("disabled"in N)try{N.disabled=!0}catch{}if("readOnly"in N)try{N.readOnly=!0}catch{}}}function KY(_){if(typeof _!=="string"||!_.trim())return"";let $=new Date(_);if(Number.isNaN($.getTime()))return"";return new Intl.DateTimeFormat(void 0,{month:"short",day:"numeric",hour:"numeric",minute:"2-digit"}).format($)}function QY(_){if(_.state==="active")return null;let $=_.state==="completed"?"Submitted":_.state==="cancelled"?"Cancelled":"Failed",N=_.last_submission&&typeof _.last_submission==="object"?_.last_submission:null,j=N&&typeof N.title==="string"?N.title.trim():"",Y=KY(_.completed_at||N?.submitted_at),L=[j||null,Y||null].filter(Boolean).join(" · ")||null;return{label:$,detail:L}}async function S3(_,$,N){if(!YY($.schema_version))return console.warn(`[adaptive-card] Unsupported schema version ${$.schema_version} for card ${$.card_id}`),!1;try{await $Y()}catch(j){return console.error("[adaptive-card] Failed to load SDK:",j),!1}try{let j=NY();_Y(j);let Y=new j.AdaptiveCard,L=S5();Y.hostConfig=new j.HostConfig(I3());let Z=$.last_submission&&typeof $.last_submission==="object"?$.last_submission.data:void 0,V=$.state==="active"?$.payload:VY($.payload,Z);Y.parse(V),Y.onExecuteAction=(U)=>{let X=LY(U);if(N?.onAction)R5(_),_.classList.add("adaptive-card-busy"),Promise.resolve(N.onAction(X)).catch((W)=>{console.error("[adaptive-card] Action failed:",W);let J=W instanceof Error?W.message:String(W||"Action failed.");aj(_,J||"Action failed.","error")}).finally(()=>{_.classList.remove("adaptive-card-busy")});else console.log("[adaptive-card] Action executed (not wired yet):",X)};let Q=Y.render();if(!Q)return console.warn(`[adaptive-card] Card ${$.card_id} rendered to null`),!1;_.classList.add("adaptive-card-container"),_.style.setProperty("--adaptive-card-button-text-color",L.buttonTextColor);let B=QY($);if(B){_.classList.add("adaptive-card-finished");let U=document.createElement("div");U.className=`adaptive-card-status adaptive-card-status-${$.state}`;let X=document.createElement("span");if(X.className="adaptive-card-status-label",X.textContent=B.label,U.appendChild(X),B.detail){let W=document.createElement("span");W.className="adaptive-card-status-detail",W.textContent=B.detail,U.appendChild(W)}_.appendChild(U)}if(R5(_),_.appendChild(Q),B)BY(Q);return!0}catch(j){return console.error(`[adaptive-card] Failed to render card ${$.card_id}:`,j),!1}}function T8(_){if(_==null)return"";if(typeof _==="string")return _.trim();if(typeof _==="number")return String(_);if(typeof _==="boolean")return _?"yes":"no";if(Array.isArray(_))return _.map(($)=>T8($)).filter(Boolean).join(", ");if(typeof _==="object")return Object.entries(_).filter(([$])=>!$.startsWith("__")).map(([$,N])=>`${$}: ${T8(N)}`).filter(($)=>!$.endsWith(": ")).join(", ");return String(_).trim()}function R3(_){if(typeof _!=="object"||_==null||Array.isArray(_))return[];return Object.entries(_).filter(([$])=>!$.startsWith("__")).map(([$,N])=>({key:$,value:T8(N)})).filter(($)=>$.value)}function qY(_){if(!_||typeof _!=="object")return!1;let $=_;return $.type==="adaptive_card_submission"&&typeof $.card_id==="string"&&typeof $.source_post_id==="number"&&typeof $.submitted_at==="string"}function v5(_){if(!Array.isArray(_))return[];return _.filter(qY)}function u3(_){let $=String(_.title||_.card_id||"card").trim()||"card",N=_.data;if(N==null)return`Card submission: ${$}`;if(typeof N==="string"||typeof N==="number"||typeof N==="boolean"){let j=T8(N);return j?`Card submission: ${$} — ${j}`:`Card submission: ${$}`}if(typeof N==="object"){let Y=R3(N).map(({key:L,value:Z})=>`${L}: ${Z}`);return Y.length>0?`Card submission: ${$} — ${Y.join(", ")}`:`Card submission: ${$}`}return`Card submission: ${$}`}function b3(_){let $=String(_.title||_.card_id||"Card submission").trim()||"Card submission",N=R3(_.data),j=N.length>0?N.slice(0,2).map(({key:L,value:Z})=>`${L}: ${Z}`).join(", "):T8(_.data)||null,Y=N.length;return{title:$,summary:j,fields:N,fieldCount:Y,submittedAt:_.submitted_at}}function XY(_){let $=_?.metadata?.size;return[{label:"Type",value:_?.content_type||"application/octet-stream"},{label:"Size",value:typeof $==="number"?k_($):null},{label:"Added",value:_?.created_at?n4(_.created_at):null}].filter((j)=>j.value)}function UY(_,$,N){let j=encodeURIComponent($||`attachment-${_}`),Y=encodeURIComponent(String(_));if(N==="pdf")return`/pdf-viewer/?media=${Y}&name=${j}#media=${Y}&name=${j}`;if(N==="office"){let L=P_(_);return`/office-viewer/?url=${encodeURIComponent(L)}&name=${j}`}if(N==="drawio")return`/drawio/edit.html?media=${Y}&name=${j}&readonly=1#media=${Y}&name=${j}&readonly=1`;return null}function v3({mediaId:_,info:$,onClose:N}){let j=$?.filename||`attachment-${_}`,Y=w0(()=>I8($?.content_type,j),[$?.content_type,j]),L=w3(Y),Z=w0(()=>x3($?.content_type),[$?.content_type]),[V,Q]=p(Y==="text"),[B,U]=p(""),[X,W]=p(null),J=x(null),E=w0(()=>XY($),[$]),P=w0(()=>UY(_,j,Y),[_,j,Y]),f=w0(()=>{if(!Z||!B)return"";return X_(B)},[Z,B]);return c(()=>{let D=(y)=>{if(y.key==="Escape")N()};return document.addEventListener("keydown",D),()=>document.removeEventListener("keydown",D)},[N]),c(()=>{if(!J.current||!f)return;Q4(J.current);return},[f]),c(()=>{let D=!1;async function y(){if(Y!=="text"){Q(!1),W(null);return}Q(!0),W(null);try{let C=await G5(_);if(!D)U(C)}catch{if(!D)W("Failed to load text preview.")}finally{if(!D)Q(!1)}}return y(),()=>{D=!0}},[_,Y]),O`
        <div class="image-modal attachment-preview-modal" onClick=${N}>
            <div class="attachment-preview-shell" onClick=${(D)=>{D.stopPropagation()}}>
                <div class="attachment-preview-header">
                    <div class="attachment-preview-heading">
                        <div class="attachment-preview-title">${j}</div>
                        <div class="attachment-preview-subtitle">${L}</div>
                    </div>
                    <div class="attachment-preview-header-actions">
                        ${P&&O`
                            <a
                                href=${P}
                                target="_blank"
                                rel="noopener noreferrer"
                                class="attachment-preview-download"
                                onClick=${(D)=>D.stopPropagation()}
                            >
                                Open in Tab
                            </a>
                        `}
                        <a
                            href=${P_(_)}
                            download=${j}
                            class="attachment-preview-download"
                            onClick=${(D)=>D.stopPropagation()}
                        >
                            Download
                        </a>
                        <button class="attachment-preview-close" type="button" onClick=${N}>Close</button>
                    </div>
                </div>
                <div class="attachment-preview-body">
                    ${V&&O`<div class="attachment-preview-state">Loading preview…</div>`}
                    ${!V&&X&&O`<div class="attachment-preview-state">${X}</div>`}
                    ${!V&&!X&&Y==="image"&&O`
                        <img class="attachment-preview-image" src=${P_(_)} alt=${j} />
                    `}
                    ${!V&&!X&&(Y==="pdf"||Y==="office"||Y==="drawio")&&P&&O`
                        <iframe class="attachment-preview-frame" src=${P} title=${j}></iframe>
                    `}
                    ${!V&&!X&&Y==="drawio"&&O`
                        <div class="attachment-preview-readonly-note">Draw.io preview is read-only. Editing tools are disabled in this preview.</div>
                    `}
                    ${!V&&!X&&Y==="text"&&Z&&O`
                        <div
                            ref=${J}
                            class="attachment-preview-markdown post-content"
                            dangerouslySetInnerHTML=${{__html:f}}
                        />
                    `}
                    ${!V&&!X&&Y==="text"&&!Z&&O`
                        <pre class="attachment-preview-text">${B}</pre>
                    `}
                    ${!V&&!X&&Y==="unsupported"&&O`
                        <div class="attachment-preview-state">
                            Preview is not available for this file type yet. You can still download it directly.
                        </div>
                    `}
                </div>
                <div class="attachment-preview-meta">
                    ${E.map((D)=>O`
                        <div class="attachment-preview-meta-item" key=${D.label}>
                            <span class="attachment-preview-meta-label">${D.label}</span>
                            <span class="attachment-preview-meta-value">${D.value}</span>
                        </div>
                    `)}
                </div>
            </div>
        </div>
    `}function m3({src:_,onClose:$}){return c(()=>{let N=(j)=>{if(j.key==="Escape")$()};return document.addEventListener("keydown",N),()=>document.removeEventListener("keydown",N)},[$]),O`
        <div class="image-modal" onClick=${$}>
            <img src=${_} alt="Full size" />
        </div>
    `}function GY({mediaId:_,onPreview:$}){let[N,j]=p(null);if(c(()=>{$8(_).then(j).catch(()=>{})},[_]),!N)return null;let Y=N.filename||"file",L=N.metadata?.size,Z=L?k_(L):"",Q=I8(N.content_type,N.filename)==="unsupported"?"Details":"Preview";return O`
        <div class="file-attachment" onClick=${(B)=>B.stopPropagation()}>
            <a href=${P_(_)} download=${Y} class="file-attachment-main">
                <svg class="file-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                    <polyline points="14 2 14 8 20 8"/>
                    <line x1="16" y1="13" x2="8" y2="13"/>
                    <line x1="16" y1="17" x2="8" y2="17"/>
                    <polyline points="10 9 9 9 8 9"/>
                </svg>
                <div class="file-info">
                    <span class="file-name">${Y}</span>
                    <span class="file-meta-row">
                        ${Z&&O`<span class="file-size">${Z}</span>`}
                        ${N.content_type&&O`<span class="file-size">${N.content_type}</span>`}
                    </span>
                </div>
                <svg class="download-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                    <polyline points="7 10 12 15 17 10"/>
                    <line x1="12" y1="15" x2="12" y2="3"/>
                </svg>
            </a>
            <button
                class="file-attachment-preview"
                type="button"
                onClick=${(B)=>{B.preventDefault(),B.stopPropagation(),$?.({mediaId:_,info:N})}}
            >
                ${Q}
            </button>
        </div>
    `}function WY({attachment:_,onPreview:$}){let N=Number(_?.id),[j,Y]=p(null);c(()=>{if(!Number.isFinite(N))return;$8(N).then(Y).catch(()=>{});return},[N]);let L=j?.filename||_.label||`attachment-${_.id}`,Z=Number.isFinite(N)?P_(N):null,Q=I8(j?.content_type,j?.filename||_?.label)==="unsupported"?"Details":"Preview";return O`
        <span class="attachment-pill" title=${L}>
            ${Z?O`
                    <a href=${Z} download=${L} class="attachment-pill-main" onClick=${(B)=>B.stopPropagation()}>
                        <${g_}
                            prefix="post"
                            label=${_.label}
                            title=${L}
                        />
                    </a>
                `:O`
                    <${g_}
                        prefix="post"
                        label=${_.label}
                        title=${L}
                    />
                `}
            ${Number.isFinite(N)&&j&&O`
                <button
                    class="attachment-pill-preview"
                    type="button"
                    title=${Q}
                    onClick=${(B)=>{B.preventDefault(),B.stopPropagation(),$?.({mediaId:N,info:j})}}
                >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8S1 12 1 12z"/>
                        <circle cx="12" cy="12" r="3"/>
                    </svg>
                </button>
            `}
        </span>
    `}function J6({annotations:_}){if(!_)return null;let{audience:$,priority:N,lastModified:j}=_,Y=j?n4(j):null;return O`
        <div class="content-annotations">
            ${$&&$.length>0&&O`
                <span class="content-annotation">Audience: ${$.join(", ")}</span>
            `}
            ${typeof N==="number"&&O`
                <span class="content-annotation">Priority: ${N}</span>
            `}
            ${Y&&O`
                <span class="content-annotation">Updated: ${Y}</span>
            `}
        </div>
    `}function OY({block:_}){let $=_.title||_.name||_.uri,N=_.description,j=_.size?k_(_.size):"",Y=_.mime_type||"",L=HY(Y),Z=i4(_.uri);return O`
        <a
            href=${Z||"#"}
            class="resource-link"
            target=${Z?"_blank":void 0}
            rel=${Z?"noopener noreferrer":void 0}
            onClick=${(V)=>V.stopPropagation()}>
            <div class="resource-link-main">
                <div class="resource-link-header">
                    <span class="resource-link-icon-inline">${L}</span>
                    <div class="resource-link-title">${$}</div>
                </div>
                ${N&&O`<div class="resource-link-description">${N}</div>`}
                <div class="resource-link-meta">
                    ${Y&&O`<span>${Y}</span>`}
                    ${j&&O`<span>${j}</span>`}
                </div>
            </div>
            <div class="resource-link-icon">↗</div>
        </a>
    `}function zY({block:_}){let[$,N]=p(!1),j=_.uri||"Embedded resource",Y=_.text||"",L=Boolean(_.data),Z=_.mime_type||"";return O`
        <div class="resource-embed">
            <button class="resource-embed-toggle" onClick=${(V)=>{V.preventDefault(),V.stopPropagation(),N(!$)}}>
                ${$?"▼":"▶"} ${j}
            </button>
            ${$&&O`
                ${Y&&O`<pre class="resource-embed-content">${Y}</pre>`}
                ${L&&O`
                    <div class="resource-embed-blob">
                        <span class="resource-embed-blob-label">Embedded blob</span>
                        ${Z&&O`<span class="resource-embed-blob-meta">${Z}</span>`}
                        <button class="resource-embed-blob-btn" onClick=${(V)=>{V.preventDefault(),V.stopPropagation();let Q=new Blob([Uint8Array.from(atob(_.data),(X)=>X.charCodeAt(0))],{type:Z||"application/octet-stream"}),B=URL.createObjectURL(Q),U=document.createElement("a");U.href=B,U.download=j.split("/").pop()||"resource",U.click(),URL.revokeObjectURL(B)}}>Download</button>
                    </div>
                `}
            `}
        </div>
    `}function FY({block:_,post:$,onOpenWidget:N}){if(!_)return null;let j=T5(_,$),Y=q3(_),L=j?.artifact?.kind||_?.artifact?.kind||_?.kind||null,Z=j?.title||_.title||_.name||"Generated widget",V=j?.description||_.description||_.subtitle||"",Q=_.open_label||"Open widget",B=(U)=>{if(U.preventDefault(),U.stopPropagation(),!j)return;N?.(j)};return O`
        <div class="generated-widget-launch" onClick=${(U)=>U.stopPropagation()}>
            <div class="generated-widget-launch-header">
                <div class="generated-widget-launch-eyebrow">Generated widget${L?` • ${String(L).toUpperCase()}`:""}</div>
                <div class="generated-widget-launch-title">${Z}</div>
            </div>
            ${V&&O`<div class="generated-widget-launch-description">${V}</div>`}
            <div class="generated-widget-launch-actions">
                <button
                    class="generated-widget-launch-btn"
                    type="button"
                    disabled=${!Y}
                    onClick=${B}
                    title=${Y?"Open widget in a floating pane":"Unsupported widget artifact"}
                >
                    ${Q}
                </button>
                <span class="generated-widget-launch-note">
                    ${Y?"Opens in a dismissible floating pane.":"This widget artifact is missing or unsupported."}
                </span>
            </div>
        </div>
    `}function HY(_){if(!_)return"\uD83D\uDCCE";if(_.startsWith("image/"))return"\uD83D\uDDBC️";if(_.startsWith("audio/"))return"\uD83C\uDFB5";if(_.startsWith("video/"))return"\uD83C\uDFAC";if(_.includes("pdf"))return"\uD83D\uDCC4";if(_.includes("zip")||_.includes("gzip"))return"\uD83D\uDDDC️";if(_.startsWith("text/"))return"\uD83D\uDCC4";return"\uD83D\uDCCE"}function DY({preview:_}){let $=i4(_.url),N=i4(_.image,{allowDataImage:!0}),j=N?`background-image: url('${N}')`:"",Y=_.site_name;if(!Y&&$)try{Y=new URL($).hostname}catch{Y=$}return O`
        <a
            href=${$||"#"}
            class="link-preview ${N?"has-image":""}"
            target=${$?"_blank":void 0}
            rel=${$?"noopener noreferrer":void 0}
            onClick=${(L)=>L.stopPropagation()}
            style=${j}>
            <div class="link-preview-overlay">
                <div class="link-preview-site">${Y||""}</div>
                <div class="link-preview-title">${_.title}</div>
                ${_.description&&O`
                    <div class="link-preview-description">${_.description}</div>
                `}
            </div>
        </a>
    `}function JY(_,$){return typeof _==="string"?_:""}var EY=1800,AY=`
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <rect x="9" y="9" width="10" height="10" rx="2"></rect>
        <path d="M7 15H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2v1"></path>
    </svg>`,yY=`
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <path d="M20 6L9 17l-5-5"></path>
    </svg>`,MY=`
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <circle cx="12" cy="12" r="9"></circle>
        <path d="M9 9l6 6M15 9l-6 6"></path>
    </svg>`;async function PY(_){let $=typeof _==="string"?_:"";if(!$)return!1;if(navigator.clipboard?.writeText)try{return await navigator.clipboard.writeText($),!0}catch{}try{let N=document.createElement("textarea");N.value=$,N.setAttribute("readonly",""),N.style.position="fixed",N.style.opacity="0",N.style.pointerEvents="none",document.body.appendChild(N),N.select(),N.setSelectionRange(0,N.value.length);let j=document.execCommand("copy");return document.body.removeChild(N),j}catch{return!1}}function kY(_){if(!_)return()=>{};let $=Array.from(_.querySelectorAll("pre")).filter((L)=>L.querySelector("code"));if($.length===0)return()=>{};let N=new Map,j=[],Y=(L,Z)=>{let V=Z||"idle";if(L.dataset.copyState=V,V==="success")L.innerHTML=yY,L.setAttribute("aria-label","Copied"),L.setAttribute("title","Copied"),L.classList.add("is-success"),L.classList.remove("is-error");else if(V==="error")L.innerHTML=MY,L.setAttribute("aria-label","Copy failed"),L.setAttribute("title","Copy failed"),L.classList.add("is-error"),L.classList.remove("is-success");else L.innerHTML=AY,L.setAttribute("aria-label","Copy code"),L.setAttribute("title","Copy code"),L.classList.remove("is-success","is-error")};return $.forEach((L)=>{let Z=document.createElement("div");Z.className="post-code-block",L.parentNode?.insertBefore(Z,L),Z.appendChild(L);let V=document.createElement("button");V.type="button",V.className="post-code-copy-btn",Y(V,"idle"),Z.appendChild(V);let Q=async(B)=>{B.preventDefault(),B.stopPropagation();let X=L.querySelector("code")?.textContent||"",W=await PY(X);Y(V,W?"success":"error");let J=N.get(V);if(J)clearTimeout(J);let E=setTimeout(()=>{Y(V,"idle"),N.delete(V)},EY);N.set(V,E)};V.addEventListener("click",Q),j.push(()=>{V.removeEventListener("click",Q);let B=N.get(V);if(B)clearTimeout(B);if(Z.parentNode)Z.parentNode.insertBefore(L,Z),Z.remove()})}),()=>{j.forEach((L)=>L())}}function xY(_){if(!_)return{content:_,fileRefs:[]};let N=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),j=-1;for(let B=0;B<N.length;B+=1)if(N[B].trim()==="Files:"&&N[B+1]&&/^\s*-\s+/.test(N[B+1])){j=B;break}if(j===-1)return{content:_,fileRefs:[]};let Y=[],L=j+1;for(;L<N.length;L+=1){let B=N[L];if(/^\s*-\s+/.test(B))Y.push(B.replace(/^\s*-\s+/,"").trim());else if(!B.trim())break;else break}if(Y.length===0)return{content:_,fileRefs:[]};let Z=N.slice(0,j),V=N.slice(L),Q=[...Z,...V].join(`
`);return Q=Q.replace(/\n{3,}/g,`

`).trim(),{content:Q,fileRefs:Y}}function wY(_){if(!_)return{content:_,messageRefs:[]};let N=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),j=-1;for(let B=0;B<N.length;B+=1)if(N[B].trim()==="Referenced messages:"&&N[B+1]&&/^\s*-\s+/.test(N[B+1])){j=B;break}if(j===-1)return{content:_,messageRefs:[]};let Y=[],L=j+1;for(;L<N.length;L+=1){let B=N[L];if(/^\s*-\s+/.test(B)){let X=B.replace(/^\s*-\s+/,"").trim().match(/^message:(\S+)$/i);if(X)Y.push(X[1])}else if(!B.trim())break;else break}if(Y.length===0)return{content:_,messageRefs:[]};let Z=N.slice(0,j),V=N.slice(L),Q=[...Z,...V].join(`
`);return Q=Q.replace(/\n{3,}/g,`

`).trim(),{content:Q,messageRefs:Y}}function CY(_){if(!_)return{content:_,attachments:[]};let N=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),j=-1;for(let B=0;B<N.length;B+=1){let U=N[B].trim();if((U==="Images:"||U==="Attachments:")&&N[B+1]&&/^\s*-\s+/.test(N[B+1])){j=B;break}}if(j===-1)return{content:_,attachments:[]};let Y=[],L=j+1;for(;L<N.length;L+=1){let B=N[L];if(/^\s*-\s+/.test(B)){let U=B.replace(/^\s*-\s+/,"").trim(),X=U.match(/^attachment:([^\s)]+)\s*(?:\((.+)\))?$/i)||U.match(/^attachment:([^\s]+)\s+(.+)$/i);if(X){let W=X[1],J=(X[2]||"").trim()||W;Y.push({id:W,label:J,raw:U})}else Y.push({id:null,label:U,raw:U})}else if(!B.trim())break;else break}if(Y.length===0)return{content:_,attachments:[]};let Z=N.slice(0,j),V=N.slice(L),Q=[...Z,...V].join(`
`);return Q=Q.replace(/\n{3,}/g,`

`).trim(),{content:Q,attachments:Y}}function IY(_){return _.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function TY(_,$){if(!_||!$)return _;let N=String($).trim().split(/\s+/).filter(Boolean);if(N.length===0)return _;let j=N.map(IY).sort((U,X)=>X.length-U.length),Y=new RegExp(`(${j.join("|")})`,"gi"),L=new RegExp(`^(${j.join("|")})$`,"i"),Z=new DOMParser().parseFromString(_,"text/html"),V=Z.createTreeWalker(Z.body,NodeFilter.SHOW_TEXT),Q=[],B;while(B=V.nextNode())Q.push(B);for(let U of Q){let X=U.nodeValue;if(!X||!Y.test(X)){Y.lastIndex=0;continue}Y.lastIndex=0;let W=U.parentElement;if(W&&W.closest("code, pre, script, style"))continue;let J=X.split(Y).filter((P)=>P!=="");if(J.length===0)continue;let E=Z.createDocumentFragment();for(let P of J)if(L.test(P)){let f=Z.createElement("mark");f.className="search-highlight-term",f.textContent=P,E.appendChild(f)}else E.appendChild(Z.createTextNode(P));U.parentNode.replaceChild(E,U)}return Z.body.innerHTML}function g3({post:_,onClick:$,onHashtagClick:N,onMessageRef:j,onScrollToMessage:Y,agentName:L,agentAvatarUrl:Z,userName:V,userAvatarUrl:Q,userAvatarBackground:B,onDelete:U,isThreadReply:X,isThreadPrev:W,isThreadNext:J,isRemoving:E,highlightQuery:P,onFileRef:f,onOpenWidget:D}){let[y,C]=p(null),u=x(null),A=_.data,v=A.type==="agent_response",o=V||"You",n=v?L||H3:o,g=v?f5(L,Z,!0):f5(o,Q),T=typeof B==="string"?B.trim().toLowerCase():"",i=!v&&g.image&&(T==="clear"||T==="transparent"),d=v&&Boolean(g.image),q0=`background-color: ${i||d?"transparent":g.color}`,l=A.content_meta,$0=Boolean(l?.truncated),N0=Boolean(l?.preview),Y0=$0&&!N0,L0=$0?{originalLength:Number.isFinite(l?.original_length)?l.original_length:A.content?A.content.length:0,maxLength:Number.isFinite(l?.max_length)?l.max_length:0}:null,K0=A.content_blocks||[],G0=A.media_ids||[],W0=JY(A.content,A.link_previews),{content:F0,fileRefs:c0}=xY(W0),{content:M0,messageRefs:D0}=wY(F0),{content:p0,attachments:i0}=CY(M0);W0=p0;let C0=b5(K0),Q0=v5(K0),P0=C0.length===1&&typeof C0[0]?.fallback_text==="string"?C0[0].fallback_text.trim():"",J0=Q0.length===1?u3(Q0[0]).trim():"",Z0=Boolean(P0)&&W0?.trim()===P0||Boolean(J0)&&W0?.trim()===J0,k0=Boolean(W0)&&!Y0&&!Z0,r0=typeof P==="string"?P.trim():"",m0=w0(()=>{if(!W0||Z0)return"";let m=X_(W0,N);return r0?TY(m,r0):m},[W0,Z0,r0]),G1=(m,B0)=>{m.stopPropagation(),C(P_(B0))},[P1,R0]=p(null),n0=(m)=>{R0(m)},j1=(m)=>{m.stopPropagation(),U?.(_)},V1=(m,B0)=>{let E0=new Set;if(!m||B0.length===0)return{content:m,usedIds:E0};return{content:m.replace(/attachment:([^\s)"']+)/g,(o0,e1,n1,p_)=>{let w_=e1.replace(/^\/+/,""),t0=B0.find((r1)=>r1.name&&r1.name.toLowerCase()===w_.toLowerCase()&&!E0.has(r1.id))||B0.find((r1)=>!E0.has(r1.id));if(!t0)return o0;if(E0.add(t0.id),p_.slice(Math.max(0,n1-2),n1)==="](")return`/media/${t0.id}`;return t0.name||"attachment"}),usedIds:E0}},s0=[],T1=[],Y1=[],v1=[],B1=[],i1=[],g0=[],t1=0;if(K0.length>0)K0.forEach((m)=>{if(m?.type==="text"&&m.annotations)g0.push(m.annotations);if(m?.type==="generated_widget")i1.push(m);else if(m?.type==="resource_link")v1.push(m);else if(m?.type==="resource")B1.push(m);else if(m?.type==="file"){let B0=G0[t1++];if(B0)T1.push(B0),Y1.push({id:B0,name:m?.name||m?.filename||m?.title})}else if(m?.type==="image"||!m?.type){let B0=G0[t1++];if(B0){let E0=typeof m?.mime_type==="string"?m.mime_type:void 0;s0.push({id:B0,annotations:m?.annotations,mimeType:E0}),Y1.push({id:B0,name:m?.name||m?.filename||m?.title})}}});else if(G0.length>0){let m=i0.length>0;G0.forEach((B0,E0)=>{let z0=i0[E0]||null;if(Y1.push({id:B0,name:z0?.label||null}),m)T1.push(B0);else s0.push({id:B0,annotations:null})})}if(i0.length>0)i0.forEach((m)=>{if(!m?.id)return;let B0=Y1.find((E0)=>String(E0.id)===String(m.id));if(B0&&!B0.name)B0.name=m.label});let{content:Q1,usedIds:W1}=V1(W0,Y1);W0=Q1;let H1=s0.filter(({id:m})=>!W1.has(m)),x0=T1.filter((m)=>!W1.has(m)),D1=i0.length>0?i0.map((m,B0)=>({id:m.id||`attachment-${B0+1}`,label:m.label||`attachment-${B0+1}`})):Y1.map((m,B0)=>({id:m.id,label:m.name||`attachment-${B0+1}`})),I0=w0(()=>b5(K0),[K0]),f0=w0(()=>v5(K0),[K0]),a0=w0(()=>{return I0.map((m)=>`${m.card_id}:${m.state}`).join("|")},[I0]);c(()=>{if(!u.current)return;return Q4(u.current),kY(u.current)},[m0]);let l1=x(null);return c(()=>{if(!l1.current||I0.length===0)return;let m=l1.current;m.innerHTML="";for(let B0 of I0){let E0=document.createElement("div");m.appendChild(E0),S3(E0,B0,{onAction:async(z0)=>{if(z0.type==="Action.OpenUrl"){let o0=i4(z0.url||"");if(!o0)throw Error("Invalid URL");window.open(o0,"_blank","noopener,noreferrer");return}if(z0.type==="Action.Submit"){await K5({post_id:_.id,thread_id:A.thread_id||_.id,chat_jid:_.chat_jid||null,card_id:B0.card_id,action:{type:z0.type,title:z0.title||"",data:z0.data}});return}console.warn("[post] unsupported adaptive card action:",z0.type,z0)}}).catch((z0)=>{console.error("[post] adaptive card render error:",z0),E0.textContent=B0.fallback_text||"Card failed to render."})}},[a0,_.id]),O`
        <div id=${`post-${_.id}`} class="post ${v?"agent-post":""} ${X?"thread-reply":""} ${W?"thread-prev":""} ${J?"thread-next":""} ${E?"removing":""}" onClick=${$}>
            <div class="post-avatar ${v?"agent-avatar":""} ${g.image?"has-image":""}" style=${q0}>
                ${g.image?O`<img src=${g.image} alt=${n} />`:g.letter}
            </div>
            <div class="post-body">
                <button
                    class="post-delete-btn"
                    type="button"
                    title="Delete message"
                    aria-label="Delete message"
                    onClick=${j1}
                >
                    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <path d="M18 6L6 18M6 6l12 12" />
                    </svg>
                </button>
                <div class="post-meta">
                    <span class="post-author">${n}</span>
                    <a class="post-time" href=${`#msg-${_.id}`} onClick=${(m)=>{if(m.preventDefault(),m.stopPropagation(),j)j(_.id)}}>${k3(_.timestamp)}</a>
                </div>
                ${Y0&&L0&&O`
                    <div class="post-content truncated">
                        <div class="truncated-title">Message too large to display.</div>
                        <div class="truncated-meta">
                            Original length: ${w8(L0.originalLength)} chars
                            ${L0.maxLength?O` • Display limit: ${w8(L0.maxLength)} chars`:""}
                        </div>
                    </div>
                `}
                ${N0&&L0&&O`
                    <div class="post-content preview">
                        <div class="truncated-title">Preview truncated.</div>
                        <div class="truncated-meta">
                            Showing first ${w8(L0.maxLength)} of ${w8(L0.originalLength)} chars. Download full text below.
                        </div>
                    </div>
                `}
                ${(c0.length>0||D0.length>0||D1.length>0)&&O`
                    <div class="post-file-refs">
                        ${D0.map((m)=>{let B0=(E0)=>{if(E0.preventDefault(),E0.stopPropagation(),Y)Y(m,_.chat_jid||null);else{let z0=document.getElementById("post-"+m);if(z0)z0.scrollIntoView({behavior:"smooth",block:"center"}),z0.classList.add("post-highlight"),setTimeout(()=>z0.classList.remove("post-highlight"),2000)}};return O`
                                <a href=${`#msg-${m}`} class="post-msg-pill-link" onClick=${B0}>
                                    <${g_}
                                        prefix="post"
                                        label=${"msg:"+m}
                                        title=${"Message "+m}
                                        icon="message"
                                        onClick=${B0}
                                    />
                                </a>
                            `})}
                        ${c0.map((m)=>{let B0=m.split("/").pop()||m;return O`
                                <${g_}
                                    prefix="post"
                                    label=${B0}
                                    title=${m}
                                    onClick=${()=>f?.(m)}
                                />
                            `})}
                        ${D1.map((m)=>O`
                            <${WY}
                                key=${m.id}
                                attachment=${m}
                                onPreview=${n0}
                            />
                        `)}
                    </div>
                `}
                ${k0&&O`
                    <div 
                        ref=${u}
                        class="post-content"
                        dangerouslySetInnerHTML=${{__html:m0}}
                        onClick=${(m)=>{if(m.target.classList.contains("hashtag")){m.preventDefault(),m.stopPropagation();let B0=m.target.dataset.hashtag;if(B0)N?.(B0)}else if(m.target.tagName==="IMG")m.preventDefault(),m.stopPropagation(),C(m.target.src)}}
                    />
                `}
                ${I0.length>0&&O`
                    <div ref=${l1} class="post-adaptive-cards" />
                `}
                ${f0.length>0&&O`
                    <div class="post-adaptive-card-submissions">
                        ${f0.map((m,B0)=>{let E0=b3(m),z0=`${m.card_id}-${B0}`;return O`
                                <div key=${z0} class="adaptive-card-submission-receipt">
                                    <div class="adaptive-card-submission-header">
                                        <span class="adaptive-card-submission-icon" aria-hidden="true">✓</span>
                                        <div class="adaptive-card-submission-title-wrap">
                                            <span class="adaptive-card-submission-title">Submitted</span>
                                            <span class="adaptive-card-submission-title-action">${E0.title}</span>
                                        </div>
                                    </div>
                                    ${E0.fields.length>0&&O`
                                        <div class="adaptive-card-submission-fields">
                                            ${E0.fields.map((o0)=>O`
                                                <span class="adaptive-card-submission-field" title=${`${o0.key}: ${o0.value}`}>
                                                    <span class="adaptive-card-submission-field-key">${o0.key}</span>
                                                    <span class="adaptive-card-submission-field-sep">:</span>
                                                    <span class="adaptive-card-submission-field-value">${o0.value}</span>
                                                </span>
                                            `)}
                                        </div>
                                    `}
                                    <div class="adaptive-card-submission-meta">
                                        Submitted ${n4(E0.submittedAt)}
                                    </div>
                                </div>
                            `})}
                    </div>
                `}
                ${i1.length>0&&O`
                    <div class="generated-widget-launches">
                        ${i1.map((m,B0)=>O`
                            <${FY}
                                key=${m.widget_id||m.id||`${_.id}-widget-${B0}`}
                                block=${m}
                                post=${_}
                                onOpenWidget=${D}
                            />
                        `)}
                    </div>
                `}
                ${g0.length>0&&O`
                    ${g0.map((m,B0)=>O`
                        <${J6} key=${B0} annotations=${m} />
                    `)}
                `}
                ${H1.length>0&&O`
                    <div class="media-preview">
                        ${H1.map(({id:m,mimeType:B0})=>{let z0=typeof B0==="string"&&B0.toLowerCase().startsWith("image/svg")?P_(m):U5(m);return O`
                                <img 
                                    key=${m} 
                                    src=${z0} 
                                    alt="Media" 
                                    loading="lazy"
                                    onClick=${(o0)=>G1(o0,m)}
                                />
                            `})}
                    </div>
                `}
                ${H1.length>0&&O`
                    ${H1.map(({annotations:m},B0)=>O`
                        ${m&&O`<${J6} key=${B0} annotations=${m} />`}
                    `)}
                `}
                ${x0.length>0&&O`
                    <div class="file-attachments">
                        ${x0.map((m)=>O`
                            <${GY} key=${m} mediaId=${m} onPreview=${n0} />
                        `)}
                    </div>
                `}
                ${v1.length>0&&O`
                    <div class="resource-links">
                        ${v1.map((m,B0)=>O`
                            <div key=${B0}>
                                <${OY} block=${m} />
                                <${J6} annotations=${m.annotations} />
                            </div>
                        `)}
                    </div>
                `}
                ${B1.length>0&&O`
                    <div class="resource-embeds">
                        ${B1.map((m,B0)=>O`
                            <div key=${B0}>
                                <${zY} block=${m} />
                                <${J6} annotations=${m.annotations} />
                            </div>
                        `)}
                    </div>
                `}
                ${A.link_previews?.length>0&&O`
                    <div class="link-previews">
                        ${A.link_previews.map((m,B0)=>O`
                            <${DY} key=${B0} preview=${m} />
                        `)}
                    </div>
                `}
            </div>
        </div>
        ${y&&O`<${m3} src=${y} onClose=${()=>C(null)} />`}
        ${P1&&O`
            <${v3}
                mediaId=${P1.mediaId}
                info=${P1.info}
                onClose=${()=>R0(null)}
            />
        `}
    `}function h3({posts:_,hasMore:$,onLoadMore:N,onPostClick:j,onHashtagClick:Y,onMessageRef:L,onScrollToMessage:Z,onFileRef:V,onOpenWidget:Q,emptyMessage:B,timelineRef:U,agents:X,user:W,onDeletePost:J,reverse:E=!0,removingPostIds:P,searchQuery:f}){let[D,y]=p(!1),C=x(null),u=typeof IntersectionObserver<"u",A=I(async()=>{if(!N||!$||D)return;y(!0);try{await N({preserveScroll:!0,preserveMode:"top"})}finally{y(!1)}},[$,D,N]),v=I((l)=>{let{scrollTop:$0,scrollHeight:N0,clientHeight:Y0}=l.target,L0=E?N0-Y0-$0:$0,K0=Math.max(300,Y0);if(L0<K0)A()},[E,A]);c(()=>{if(!u)return;let l=C.current,$0=U?.current;if(!l||!$0)return;let N0=300,Y0=new IntersectionObserver((L0)=>{for(let K0 of L0){if(!K0.isIntersecting)continue;A()}},{root:$0,rootMargin:`${N0}px 0px ${N0}px 0px`,threshold:0});return Y0.observe(l),()=>Y0.disconnect()},[u,$,N,U,A]);let o=x(A);if(o.current=A,c(()=>{if(u)return;if(!U?.current)return;let{scrollTop:l,scrollHeight:$0,clientHeight:N0}=U.current,Y0=E?$0-N0-l:l,L0=Math.max(300,N0);if(Y0<L0)o.current?.()},[u,_,$,E,U]),c(()=>{if(!U?.current)return;if(!$||D)return;let{scrollTop:l,scrollHeight:$0,clientHeight:N0}=U.current,Y0=E?$0-N0-l:l,L0=Math.max(300,N0);if($0<=N0+1||Y0<L0)o.current?.()},[_,$,D,E,U]),!_)return O`<div class="loading"><div class="spinner"></div></div>`;if(_.length===0)return O`
            <div class="timeline" ref=${U}>
                <div class="timeline-content">
                    <div style="padding: var(--spacing-xl); text-align: center; color: var(--text-secondary)">
                        ${B||"No messages yet. Start a conversation!"}
                    </div>
                </div>
            </div>
        `;let n=_.slice().sort((l,$0)=>l.id-$0.id),g=(l)=>{let $0=l?.data?.thread_id;if($0===null||$0===void 0||$0==="")return null;let N0=Number($0);return Number.isFinite(N0)?N0:null},T=new Map;for(let l=0;l<n.length;l+=1){let $0=n[l],N0=Number($0?.id),Y0=g($0);if(Y0!==null){let L0=T.get(Y0)||{anchorIndex:-1,replyIndexes:[]};L0.replyIndexes.push(l),T.set(Y0,L0)}else if(Number.isFinite(N0)){let L0=T.get(N0)||{anchorIndex:-1,replyIndexes:[]};L0.anchorIndex=l,T.set(N0,L0)}}let i=new Map;for(let[l,$0]of T.entries()){let N0=new Set;if($0.anchorIndex>=0)N0.add($0.anchorIndex);for(let Y0 of $0.replyIndexes)N0.add(Y0);i.set(l,Array.from(N0).sort((Y0,L0)=>Y0-L0))}let d=n.map((l,$0)=>{let N0=g(l);if(N0===null)return{hasThreadPrev:!1,hasThreadNext:!1};let Y0=i.get(N0);if(!Y0||Y0.length===0)return{hasThreadPrev:!1,hasThreadNext:!1};let L0=Y0.indexOf($0);if(L0<0)return{hasThreadPrev:!1,hasThreadNext:!1};return{hasThreadPrev:L0>0,hasThreadNext:L0<Y0.length-1}}),q0=O`<div class="timeline-sentinel" ref=${C}></div>`;return O`
        <div class="timeline ${E?"reverse":"normal"}" ref=${U} onScroll=${v}>
            <div class="timeline-content">
                ${E?q0:null}
                ${n.map((l,$0)=>{let N0=Boolean(l.data?.thread_id&&l.data.thread_id!==l.id),Y0=P?.has?.(l.id),L0=d[$0]||{};return O`
                    <${g3}
                        key=${l.id}
                        post=${l}
                        isThreadReply=${N0}
                        isThreadPrev=${L0.hasThreadPrev}
                        isThreadNext=${L0.hasThreadNext}
                        isRemoving=${Y0}
                        highlightQuery=${f}
                        agentName=${D3(l.data?.agent_id,X||{})}
                        agentAvatarUrl=${J3(l.data?.agent_id,X||{})}
                        userName=${W?.name||W?.user_name}
                        userAvatarUrl=${W?.avatar_url||W?.avatarUrl||W?.avatar}
                        userAvatarBackground=${W?.avatar_background||W?.avatarBackground}
                        onClick=${()=>j?.(l)}
                        onHashtagClick=${Y}
                        onMessageRef=${L}
                        onScrollToMessage=${Z}
                        onFileRef=${V}
                        onOpenWidget=${Q}
                        onDelete=${J}
                    />
                `})}
                ${E?null:q0}
            </div>
        </div>
    `}class c3{extensions=new Map;register(_){this.extensions.set(_.id,_)}unregister(_){this.extensions.delete(_)}resolve(_){let $,N=-1/0;for(let j of this.extensions.values()){if(j.placement!=="tabs")continue;if(!j.canHandle)continue;try{let Y=j.canHandle(_);if(Y===!1||Y===0)continue;let L=Y===!0?0:typeof Y==="number"?Y:0;if(L>N)N=L,$=j}catch(Y){console.warn(`[PaneRegistry] canHandle() error for "${j.id}":`,Y)}}return $}list(){return Array.from(this.extensions.values())}getDockPanes(){return Array.from(this.extensions.values()).filter((_)=>_.placement==="dock")}getTabPanes(){return Array.from(this.extensions.values()).filter((_)=>_.placement==="tabs")}get(_){return this.extensions.get(_)}get size(){return this.extensions.size}}var N1=new c3;var E6=null,m5=null;function fY(){try{return`/static/dist/editor.bundle.js${new URL(import.meta.url).search||""}`}catch{return"/static/dist/editor.bundle.js"}}function p3(){if(m5)return Promise.resolve(m5);if(!E6)E6=import(fY()).then((_)=>{return m5=_,_}).catch((_)=>{throw E6=null,_});return E6}class i3{container;context;real=null;disposed=!1;loadingEl;queuedDirtyCb=null;queuedSaveCb=null;queuedCloseCb=null;queuedViewStateCb=null;queuedViewState=null;constructor(_,$){this.container=_,this.context=$,this.loadingEl=document.createElement("div"),this.loadingEl.className="editor-pane",this.loadingEl.innerHTML=`
            <div class="editor-body">
                <div class="editor-status" style="padding: 2em; text-align: center; color: var(--text-secondary);">Loading editor…</div>
            </div>
        `,_.appendChild(this.loadingEl),this.load()}escapeHtml(_){let $=document.createElement("div");return $.textContent=_,$.innerHTML}async load(){try{let _=await p3();if(this.disposed)return;if(this.loadingEl.parentNode)this.loadingEl.remove();if(this.real=new _.StandaloneEditorInstance(this.container,this.context),this.queuedDirtyCb&&this.real.onDirtyChange)this.real.onDirtyChange(this.queuedDirtyCb);if(this.queuedSaveCb&&this.real.onSaveRequest)this.real.onSaveRequest(this.queuedSaveCb);if(this.queuedCloseCb&&this.real.onClose)this.real.onClose(this.queuedCloseCb);if(this.queuedViewStateCb&&typeof this.real.onViewStateChange==="function")this.real.onViewStateChange(this.queuedViewStateCb);if(this.queuedViewState&&typeof this.real.restoreViewState==="function")requestAnimationFrame(()=>this.real?.restoreViewState?.(this.queuedViewState))}catch(_){if(this.disposed)return;console.error("[editor-loader] Failed to load editor bundle:",_),this.loadingEl.querySelector(".editor-status").textContent="Failed to load editor. Check console for details."}}getContent(){return this.real?.getContent()}isDirty(){return this.real?.isDirty()||!1}setContent(_,$){if(this.real?.setContent)this.real.setContent(_,$)}focus(){this.real?.focus()}resize(){this.real?.resize?.()}dispose(){if(this.disposed)return;if(this.disposed=!0,this.real)this.real.dispose(),this.real=null;this.container.innerHTML="",this.queuedDirtyCb=null,this.queuedSaveCb=null,this.queuedCloseCb=null,this.queuedViewStateCb=null}onDirtyChange(_){if(this.queuedDirtyCb=_,this.real?.onDirtyChange)this.real.onDirtyChange(_)}onSaveRequest(_){if(this.queuedSaveCb=_,this.real?.onSaveRequest)this.real.onSaveRequest(_)}onClose(_){if(this.queuedCloseCb=_,this.real?.onClose)this.real.onClose(_)}onViewStateChange(_){this.queuedViewStateCb=_,this.real?.onViewStateChange?.(_)}restoreViewState(_){this.queuedViewState=_,this.real?.restoreViewState?.(_)}getPath(){return this.real?.getPath?.()??this.context.path??""}setPath(_){this.real?.setPath?.(_)}}var g5={id:"editor",label:"Editor",icon:"edit",capabilities:["edit"],placement:"tabs",canHandle(_){if(!_.path)return!1;if(_.mode!=="edit")return!1;return 1},mount(_,$){return new i3(_,$)}};function h5(){p3().catch(()=>{})}var f8="piclaw://terminal";var SY={yellow:"#9a6700",magenta:"#8250df",cyan:"#1b7c83",brightBlack:"#57606a",brightRed:"#cf222e",brightGreen:"#1a7f37",brightYellow:"#bf8700",brightBlue:"#0550ae",brightMagenta:"#6f42c1",brightCyan:"#0a7b83"},RY={yellow:"#d29922",magenta:"#bc8cff",cyan:"#39c5cf",brightBlack:"#8b949e",brightRed:"#ff7b72",brightGreen:"#7ee787",brightYellow:"#e3b341",brightBlue:"#79c0ff",brightMagenta:"#d2a8ff",brightCyan:"#56d4dd"},A6=null,c5=null;function uY(_){if(!_)return!1;return _.startsWith("data:application/wasm")||/(^|\/)ghostty-vt\.wasm(?:[?#].*)?$/.test(_)}async function bY(_){let $=globalThis.fetch?.bind(globalThis);if(!$)return await _();let N=new URL("/static/js/vendor/ghostty-vt.wasm",window.location.origin).href,j=(Y,L)=>{let Z=Y instanceof Request?Y.url:Y instanceof URL?Y.href:String(Y);if(!uY(Z))return $(Y,L);if(Y instanceof Request)return $(new Request(N,Y));return $(N,L)};globalThis.fetch=j;try{return await _()}finally{globalThis.fetch=$}}async function vY(){let $=await import(new URL("/static/js/vendor/ghostty-web.js",window.location.origin).href);if(!A6)A6=bY(()=>Promise.resolve($.init?.())).catch((N)=>{throw A6=null,N});return await A6,$}async function mY(){if(typeof document>"u"||!("fonts"in document)||!document.fonts)return;if(!c5)c5=Promise.allSettled([document.fonts.load('400 13px "FiraCode Nerd Font Mono"'),document.fonts.load('700 13px "FiraCode Nerd Font Mono"'),document.fonts.ready]).then(()=>{return}).catch(()=>{return});await c5}async function gY(){let _=await fetch("/terminal/session",{method:"GET",credentials:"same-origin"}),$=await _.json().catch(()=>({}));if(!_.ok)throw Error($?.error||`HTTP ${_.status}`);return $}function hY(_){return`${window.location.protocol==="https:"?"wss:":"ws:"}//${window.location.host}${_}`}function cY(){if(typeof window>"u"||typeof document>"u")return!1;let{documentElement:_,body:$}=document,N=_?.getAttribute?.("data-theme")?.toLowerCase?.()||"";if(N==="dark")return!0;if(N==="light")return!1;if(_?.classList?.contains("dark")||$?.classList?.contains("dark"))return!0;if(_?.classList?.contains("light")||$?.classList?.contains("light"))return!1;return Boolean(window.matchMedia?.("(prefers-color-scheme: dark)")?.matches)}function q4(_,$=""){if(typeof document>"u")return $;return getComputedStyle(document.documentElement).getPropertyValue(_)?.trim()||$}function pY(_,$){if(!_||!_.startsWith("#"))return _;let N=_.slice(1);if(N.length===3)return`#${N[0]}${N[0]}${N[1]}${N[1]}${N[2]}${N[2]}${$}`;if(N.length===6)return`#${N}${$}`;return _}function n3(){let _=cY(),$=_?RY:SY,N=q4("--bg-primary",_?"#000000":"#ffffff"),j=q4("--text-primary",_?"#e7e9ea":"#0f1419"),Y=q4("--text-secondary",_?"#71767b":"#536471"),L=q4("--accent-color","#1d9bf0"),Z=q4("--danger-color",_?"#ff7b72":"#cf222e"),V=q4("--success-color",_?"#7ee787":"#1a7f37"),Q=q4("--bg-hover",_?"#1d1f23":"#e8ebed"),B=q4("--border-color",_?"#2f3336":"#eff3f4"),U=q4("--accent-soft-strong",pY(L,_?"47":"33"));return{background:N,foreground:j,cursor:L,cursorAccent:N,selectionBackground:U,selectionForeground:j,black:Q,red:Z,green:V,yellow:$.yellow,blue:L,magenta:$.magenta,cyan:$.cyan,white:j,brightBlack:$.brightBlack,brightRed:$.brightRed,brightGreen:$.brightGreen,brightYellow:$.brightYellow,brightBlue:$.brightBlue,brightMagenta:$.brightMagenta,brightCyan:$.brightCyan,brightWhite:B}}class p5{container;disposed=!1;termEl;bodyEl;statusEl;terminal=null;fitAddon=null;socket=null;themeObserver=null;themeChangeListener=null;mediaQuery=null;mediaQueryListener=null;resizeObserver=null;dockResizeListener=null;windowResizeListener=null;resizeFrame=0;lastAppliedThemeSignature=null;lastResizeSignature=null;constructor(_,$){this.container=_,this.termEl=document.createElement("div"),this.termEl.className="terminal-pane-content",this.termEl.setAttribute("tabindex","0"),this.statusEl=document.createElement("span"),this.statusEl.className="terminal-pane-status",this.statusEl.textContent="Loading terminal…",this.bodyEl=document.createElement("div"),this.bodyEl.className="terminal-pane-body",this.bodyEl.innerHTML='<div class="terminal-placeholder">Bootstrapping ghostty-web…</div>',this.termEl.append(this.bodyEl),_.appendChild(this.termEl),this.bootstrapGhostty()}setStatus(_){this.statusEl.textContent=_,this.termEl.dataset.connectionStatus=_,this.termEl.setAttribute("aria-label",`Terminal ${_}`)}getResizeSignature(){try{let _=this.container?.getBoundingClientRect?.(),$=this.bodyEl?.getBoundingClientRect?.(),N=Number.isFinite(_?.width)?_.width:0,j=Number.isFinite(_?.height)?_.height:0,Y=Number.isFinite($?.width)?$.width:0,L=Number.isFinite($?.height)?$.height:0;return`${Math.round(N)}x${Math.round(j)}:${Math.round(Y)}x${Math.round(L)}`}catch{return"0x0:0x0"}}syncHostLayout(){let _=this.bodyEl.querySelector(".terminal-live-host");if(!(_ instanceof HTMLElement))return;let $=_.firstElementChild;if($ instanceof HTMLElement)$.style.width="100%",$.style.height="100%",$.style.maxWidth="100%",$.style.minWidth="0",$.style.display="block";let N=_.querySelector("canvas");if(N instanceof HTMLElement)N.style.display="block",N.style.maxWidth="none"}scheduleResize(){if(this.disposed)return;let _=this.getResizeSignature();if(this.lastResizeSignature===_)return;if(this.resizeFrame)cancelAnimationFrame(this.resizeFrame);this.resizeFrame=requestAnimationFrame(()=>{this.resizeFrame=0,this.lastResizeSignature=this.getResizeSignature(),this.resize()})}async bootstrapGhostty(){try{let _=await vY();if(await mY(),this.disposed)return;this.bodyEl.innerHTML="";let $=document.createElement("div");$.className="terminal-live-host",this.bodyEl.appendChild($);let N=new _.Terminal({cols:120,rows:30,cursorBlink:!0,fontFamily:'FiraCode Nerd Font Mono, ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", monospace',fontSize:13,theme:n3()}),j=null;if(typeof _.FitAddon==="function")j=new _.FitAddon,N.loadAddon?.(j);await N.open($),this.syncHostLayout(),N.loadFonts?.(),j?.observeResize?.(),this.terminal=N,this.fitAddon=j,this.installThemeSync(),this.installResizeSync(),this.scheduleResize(),await this.connectBackend()}catch(_){if(console.error("[terminal-pane] Failed to bootstrap ghostty-web:",_),this.disposed)return;this.bodyEl.innerHTML='<div class="terminal-placeholder">Terminal failed to load. Check vendored assets and backend wiring.</div>',this.setStatus("Load failed")}}applyTheme(){if(!this.terminal)return;let _=n3(),$=JSON.stringify(_),N=this.lastAppliedThemeSignature!==null&&this.lastAppliedThemeSignature!==$;try{this.termEl.style.backgroundColor=_.background,this.bodyEl.style.backgroundColor=_.background;let j=this.bodyEl.querySelector(".terminal-live-host");if(j instanceof HTMLElement)j.style.backgroundColor=_.background,j.style.color=_.foreground;let Y=this.bodyEl.querySelector("canvas");if(Y instanceof HTMLElement)Y.style.backgroundColor=_.background,Y.style.color=_.foreground}catch{}try{if(this.terminal.options)this.terminal.options.theme=_}catch{}try{if(N&&this.terminal.reset)this.terminal.reset()}catch{}try{this.terminal.renderer?.setTheme?.(_),this.terminal.renderer?.clear?.()}catch{}try{this.terminal.loadFonts?.()}catch{}try{this.terminal.renderer?.remeasureFont?.()}catch{}try{if(this.terminal.wasmTerm&&this.terminal.renderer?.render)this.terminal.renderer.render(this.terminal.wasmTerm,!0,this.terminal.viewportY||0,this.terminal),this.terminal.renderer.render(this.terminal.wasmTerm,!1,this.terminal.viewportY||0,this.terminal)}catch{}try{this.resize()}catch{}try{if(N&&this.socket?.readyState===WebSocket.OPEN)this.socket.send(JSON.stringify({type:"input",data:"\f"}))}catch{}try{this.terminal.refresh?.()}catch{}this.lastAppliedThemeSignature=$}installThemeSync(){if(typeof window>"u"||typeof document>"u")return;let _=()=>requestAnimationFrame(()=>this.applyTheme());_();let $=()=>_();window.addEventListener("piclaw-theme-change",$),this.themeChangeListener=$;let N=window.matchMedia?.("(prefers-color-scheme: dark)"),j=()=>_();if(N?.addEventListener)N.addEventListener("change",j);else if(N?.addListener)N.addListener(j);this.mediaQuery=N,this.mediaQueryListener=j;let Y=typeof MutationObserver<"u"?new MutationObserver(()=>_()):null;if(Y?.observe(document.documentElement,{attributes:!0,attributeFilter:["class","data-theme","style"]}),document.body)Y?.observe(document.body,{attributes:!0,attributeFilter:["class","data-theme"]});this.themeObserver=Y}installResizeSync(){if(typeof window>"u")return;let _=()=>this.scheduleResize(),$=()=>this.scheduleResize();if(window.addEventListener("dock-resize",_),window.addEventListener("resize",$),this.dockResizeListener=_,this.windowResizeListener=$,typeof ResizeObserver<"u"){let N=new ResizeObserver(()=>{if(this.disposed)return;this.scheduleResize()});N.observe(this.container),this.resizeObserver=N}}async connectBackend(){let _=this.terminal;if(!_)return;try{let $=await gY();if(this.disposed)return;if(!$?.enabled){_.write?.(`Terminal backend unavailable: ${$?.error||"disabled"}\r
`),this.setStatus("Unavailable");return}let N=new WebSocket(hY($.ws_path||"/terminal/ws"));this.socket=N,this.setStatus("Connecting…"),_.onData?.((j)=>{if(N.readyState===WebSocket.OPEN)N.send(JSON.stringify({type:"input",data:j}))}),_.onResize?.(({cols:j,rows:Y})=>{if(N.readyState===WebSocket.OPEN)N.send(JSON.stringify({type:"resize",cols:j,rows:Y}))}),N.addEventListener("open",()=>{if(this.disposed)return;this.setStatus("Connected"),this.scheduleResize()}),N.addEventListener("message",(j)=>{if(this.disposed)return;let Y=null;try{Y=JSON.parse(String(j.data))}catch{Y={type:"output",data:String(j.data)}}if(Y?.type==="output"&&typeof Y.data==="string"){_.write?.(Y.data);return}if(Y?.type==="exit")_.write?.(`\r
[terminal exited]\r
`),this.setStatus("Exited")}),N.addEventListener("close",()=>{if(this.disposed)return;this.setStatus("Disconnected")}),N.addEventListener("error",()=>{if(this.disposed)return;this.setStatus("Connection error")})}catch($){_.write?.(`Terminal backend unavailable: ${$ instanceof Error?$.message:String($)}\r
`),this.setStatus("Unavailable")}}sendResize(){if(!this.socket||this.socket.readyState!==WebSocket.OPEN||!this.fitAddon?.proposeDimensions)return;let _=this.fitAddon.proposeDimensions();if(!_)return;this.socket.send(JSON.stringify({type:"resize",cols:_.cols,rows:_.rows}))}getContent(){return}isDirty(){return!1}focus(){if(this.terminal?.focus){this.terminal.focus();return}this.termEl?.focus()}resize(){this.syncHostLayout();try{this.terminal?.renderer?.remeasureFont?.()}catch{}try{this.fitAddon?.fit?.()}catch{}try{this.terminal?.refresh?.()}catch{}this.syncHostLayout(),this.sendResize()}dispose(){if(this.disposed)return;this.disposed=!0;try{if(this.resizeFrame)cancelAnimationFrame(this.resizeFrame),this.resizeFrame=0}catch{}try{if(this.themeChangeListener)window.removeEventListener("piclaw-theme-change",this.themeChangeListener)}catch{}try{if(this.mediaQuery&&this.mediaQueryListener){if(this.mediaQuery.removeEventListener)this.mediaQuery.removeEventListener("change",this.mediaQueryListener);else if(this.mediaQuery.removeListener)this.mediaQuery.removeListener(this.mediaQueryListener)}}catch{}try{if(this.dockResizeListener)window.removeEventListener("dock-resize",this.dockResizeListener);if(this.windowResizeListener)window.removeEventListener("resize",this.windowResizeListener)}catch{}try{this.themeObserver?.disconnect?.()}catch{}try{this.resizeObserver?.disconnect?.()}catch{}try{this.socket?.close?.()}catch{}try{this.fitAddon?.dispose?.()}catch{}try{this.terminal?.dispose?.()}catch{}this.termEl?.remove()}}var i5={id:"terminal",label:"Terminal",icon:"terminal",capabilities:["terminal"],placement:"dock",mount(_,$){return new p5(_,$)}},n5={id:"terminal-tab",label:"Terminal",icon:"terminal",capabilities:["terminal"],placement:"tabs",canHandle(_){return _?.path==="piclaw://terminal"?1e4:!1},mount(_,$){return new p5(_,$)}};function X4(_={}){let $=_.window??(typeof window<"u"?window:null),N=_.navigator??(typeof navigator<"u"?navigator:null);if(N&&N.standalone===!0)return!0;if(!$||typeof $.matchMedia!=="function")return!1;return["(display-mode: standalone)","(display-mode: minimal-ui)","(display-mode: fullscreen)"].some((Y)=>{try{return Boolean($.matchMedia(Y)?.matches)}catch{return!1}})}function y6(_={}){let $=_.window??(typeof window<"u"?window:null),N=_.navigator??(typeof navigator<"u"?navigator:null);if(!$&&!N)return!1;let j=String(N?.userAgent||""),Y=Number(N?.maxTouchPoints||0),L=/Android|webOS|iPhone|iPad|iPod|Mobile|Windows Phone/i.test(j),Z=(()=>{if(!$||typeof $.matchMedia!=="function")return!1;try{return Boolean($.matchMedia("(pointer: coarse)")?.matches||$.matchMedia("(any-pointer: coarse)")?.matches)}catch{return!1}})();return Boolean(L||Y>1||Z)}function l3(_,$={}){if(X4($))return null;if(y6($))return{target:"_blank",features:void 0,mode:"tab"};return{target:iY(_),features:"popup=yes,width=900,height=960,resizable=yes,scrollbars=yes",mode:"popup"}}function l5(_,$={}){let N=$.window??(typeof window<"u"?window:null);if(!N||!_)return null;try{return _.features?N.open("about:blank",_.target,_.features):N.open("about:blank",_.target)}catch{return null}}function r5(_,$={}){if(!_||!_.document)return;try{let N=String($.title||"Opening branch…"),j=String($.message||"Preparing a new branch window…");_.document.title=N,_.document.body.innerHTML=`
            <div style="font-family: system-ui, sans-serif; padding: 24px; color: #222;">
                <h1 style="font-size: 18px; margin: 0 0 12px;">${N}</h1>
                <p style="margin: 0; line-height: 1.5;">${j}</p>
            </div>
        `}catch{}}function s5(_,$){if(!_||!$)return;try{if(_.location&&typeof _.location.replace==="function"){_.location.replace(String($));return}_.location=String($)}catch{}}function r3(_){if(!_||typeof _.close!=="function")return;try{_.close()}catch{}}function l4(_,$,N={}){let j=new URL(String(_||"http://localhost/")),Y=String($||"").trim()||"web:default";if(j.searchParams.set("chat_jid",Y),j.searchParams.delete("branch_loader"),j.searchParams.delete("branch_source_chat_jid"),j.searchParams.delete("pane_popout"),j.searchParams.delete("pane_path"),j.searchParams.delete("pane_label"),N.chatOnly!==!1)j.searchParams.set("chat_only","1");return j.toString()}function s3(_,$,N={}){let j=new URL(String(_||"http://localhost/")),Y=String($||"").trim()||"web:default";if(j.searchParams.set("branch_loader","1"),j.searchParams.set("branch_source_chat_jid",Y),j.searchParams.delete("chat_jid"),j.searchParams.delete("pane_popout"),j.searchParams.delete("pane_path"),j.searchParams.delete("pane_label"),N.chatOnly!==!1)j.searchParams.set("chat_only","1");return j.toString()}function o3(_,$,N={}){let j=new URL(String(_||"http://localhost/")),Y=String($||"").trim();if(!Y)return j.toString();if(j.searchParams.set("pane_popout","1"),j.searchParams.set("pane_path",Y),N?.label)j.searchParams.set("pane_label",String(N.label));else j.searchParams.delete("pane_label");if(N?.chatJid)j.searchParams.set("chat_jid",String(N.chatJid));return j.searchParams.delete("chat_only"),j.searchParams.delete("branch_loader"),j.searchParams.delete("branch_source_chat_jid"),j.toString()}function iY(_){return`piclaw-chat-${String(_||"web:default").trim().toLowerCase().replace(/[^a-z0-9_-]+/g,"-")||"default"}`}function nY(_){return`piclaw-pane-${String(_||"pane").trim().toLowerCase().replace(/[^a-z0-9_-]+/g,"-")||"default"}`}function d3(_,$={}){if(X4($))return null;if(y6($))return{target:"_blank",features:void 0,mode:"tab"};return{target:nY(_),features:"popup=yes,width=1200,height=960,resizable=yes,scrollbars=yes",mode:"popup"}}function M6(_){let $=_ instanceof Error?_.message:String(_||"").trim(),N=String($||"").trim();if(!N)return"PiClaw could not open a new branch window.";let j=N.toLowerCase();if(j.includes("no stable turn boundary"))return"This chat is still in flight and does not yet have a stable turn boundary to fork from.";if(j.includes("cannot fork a branch while the source chat is still active"))return"This chat is still active. Please wait for the current turn to settle, then try again.";if(j.includes("cancelled"))return"Branch creation was cancelled before a new chat window could be opened.";if(j.includes("did not return a chat id"))return"PiClaw created no usable branch id for the new window. Please try again.";if(j.includes("failed to fork branch")||j.includes("failed to fork chat branch"))return"PiClaw could not create the new branch. Please try again.";return N}function lY(_){try{return JSON.parse(_)}catch{return null}}function rY(_){if(typeof _==="string")return new TextEncoder().encode(_).byteLength;if(_ instanceof ArrayBuffer)return _.byteLength;if(ArrayBuffer.isView(_))return _.byteLength;if(_ instanceof Blob)return _.size;return 0}function sY(_){if(typeof _==="string")return _.length;if(_ instanceof ArrayBuffer)return _.byteLength;if(_ instanceof Blob)return _.size;return Number(_?.size||0)}class o5{socket=null;disposed=!1;options;bytesIn=0;bytesOut=0;constructor(_){this.options=_}connect(){if(this.disposed)return;try{this.socket?.close?.()}catch{}let _=new WebSocket(this.options.url);_.binaryType=this.options.binaryType||"arraybuffer",_.addEventListener("open",()=>{if(this.disposed||this.socket!==_)return;this.options.onOpen?.()}),_.addEventListener("message",($)=>{if(this.disposed||this.socket!==_)return;let N=sY($.data);if(this.bytesIn+=N,this.emitMetrics(),typeof $.data==="string"){let j=this.options.parseControlMessage||lY;this.options.onMessage?.({kind:"control",raw:$.data,payload:j($.data)});return}this.options.onMessage?.({kind:"binary",data:$.data,size:N})}),_.addEventListener("close",()=>{if(this.socket===_)this.socket=null;if(this.disposed)return;this.options.onClose?.()}),_.addEventListener("error",()=>{if(this.disposed||this.socket!==_)return;this.options.onError?.()}),this.socket=_}send(_){if(this.disposed||!this.socket)return;let $=rY(_);this.bytesOut+=$,this.emitMetrics(),this.socket.send(_)}sendControl(_){this.send(JSON.stringify(_??{}))}getMetrics(){return{bytesIn:this.bytesIn,bytesOut:this.bytesOut}}dispose(){if(this.disposed)return;this.disposed=!0;try{this.socket?.close?.()}catch{}this.socket=null}emitMetrics(){this.options.onMetrics?.(this.getMetrics())}}var S8=()=>{throw Error("Operation requires compiling with --exportRuntime")},oY=typeof BigUint64Array<"u",R8=Symbol();var dY=new TextDecoder("utf-16le",{fatal:!0});Object.hasOwn=Object.hasOwn||function(_,$){return Object.prototype.hasOwnProperty.call(_,$)};function a3(_,$){let N=new Uint32Array(_)[$+-4>>>2]>>>1,j=new Uint16Array(_,$,N);if(N<=192)return String.fromCharCode(...j);try{return dY.decode(j)}catch{let Y="",L=0;while(N-L>1024)Y+=String.fromCharCode(...j.subarray(L,L+=1024));return Y+String.fromCharCode(...j.subarray(L))}}function t3(_){let $={};function N(Y,L){if(!Y)return"<yet unknown>";return a3(Y.buffer,L)}let j=_.env=_.env||{};return j.abort=j.abort||function(L,Z,V,Q){let B=$.memory||j.memory;throw Error(`abort: ${N(B,L)} at ${N(B,Z)}:${V}:${Q}`)},j.trace=j.trace||function(L,Z,...V){let Q=$.memory||j.memory;console.log(`trace: ${N(Q,L)}${Z?" ":""}${V.slice(0,Z).join(", ")}`)},j.seed=j.seed||Date.now,_.Math=_.Math||Math,_.Date=_.Date||Date,$}function e3(_,$){let N=$.exports,j=N.memory,Y=N.table,L=N.__new||S8,Z=N.__pin||S8,V=N.__unpin||S8,Q=N.__collect||S8,B=N.__rtti_base,U=B?(T)=>T[B>>>2]:S8;_.__new=L,_.__pin=Z,_.__unpin=V,_.__collect=Q;function X(T){let i=new Uint32Array(j.buffer);if((T>>>=0)>=U(i))throw Error(`invalid id: ${T}`);return i[(B+4>>>2)+T]}function W(T){let i=X(T);if(!(i&7))throw Error(`not an array: ${T}, flags=${i}`);return i}function J(T){return 31-Math.clz32(T>>>6&31)}function E(T){if(T==null)return 0;let i=T.length,d=L(i<<1,2),q0=new Uint16Array(j.buffer);for(let l=0,$0=d>>>1;l<i;++l)q0[$0+l]=T.charCodeAt(l);return d}_.__newString=E;function P(T){if(T==null)return 0;let i=new Uint8Array(T),d=L(i.length,1);return new Uint8Array(j.buffer).set(i,d),d}_.__newArrayBuffer=P;function f(T){if(!T)return null;let i=j.buffer;if(new Uint32Array(i)[T+-8>>>2]!==2)throw Error(`not a string: ${T}`);return a3(i,T)}_.__getString=f;function D(T,i,d){let q0=j.buffer;if(d)switch(T){case 2:return new Float32Array(q0);case 3:return new Float64Array(q0)}else switch(T){case 0:return new(i?Int8Array:Uint8Array)(q0);case 1:return new(i?Int16Array:Uint16Array)(q0);case 2:return new(i?Int32Array:Uint32Array)(q0);case 3:return new(i?BigInt64Array:BigUint64Array)(q0)}throw Error(`unsupported align: ${T}`)}function y(T,i=0){let d=i,q0=W(T),l=J(q0),$0=typeof d!=="number",N0=$0?d.length:d,Y0=L(N0<<l,q0&4?T:1),L0;if(q0&4)L0=Y0;else{Z(Y0);let K0=L(q0&2?16:12,T);V(Y0);let G0=new Uint32Array(j.buffer);if(G0[K0+0>>>2]=Y0,G0[K0+4>>>2]=Y0,G0[K0+8>>>2]=N0<<l,q0&2)G0[K0+12>>>2]=N0;L0=K0}if($0){let K0=D(l,q0&2048,q0&4096),G0=Y0>>>l;if(q0&16384)for(let W0=0;W0<N0;++W0)K0[G0+W0]=d[W0];else K0.set(d,G0)}return L0}_.__newArray=y;function C(T){let i=new Uint32Array(j.buffer),d=i[T+-8>>>2],q0=W(d),l=J(q0),$0=q0&4?T:i[T+4>>>2],N0=q0&2?i[T+12>>>2]:i[$0+-4>>>2]>>>l;return D(l,q0&2048,q0&4096).subarray($0>>>=l,$0+N0)}_.__getArrayView=C;function u(T){let i=C(T),d=i.length,q0=Array(d);for(let l=0;l<d;l++)q0[l]=i[l];return q0}_.__getArray=u;function A(T){let i=j.buffer,d=new Uint32Array(i)[T+-4>>>2];return i.slice(T,T+d)}_.__getArrayBuffer=A;function v(T){if(!Y)throw Error("Operation requires compiling with --exportTable");let i=new Uint32Array(j.buffer)[T>>>2];return Y.get(i)}_.__getFunction=v;function o(T,i,d){return new T(n(T,i,d))}function n(T,i,d){let q0=j.buffer,l=new Uint32Array(q0);return new T(q0,l[d+4>>>2],l[d+8>>>2]>>>i)}function g(T,i,d){_[`__get${i}`]=o.bind(null,T,d),_[`__get${i}View`]=n.bind(null,T,d)}if([Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array].forEach((T)=>{g(T,T.name,31-Math.clz32(T.BYTES_PER_ELEMENT))}),oY)[BigUint64Array,BigInt64Array].forEach((T)=>{g(T,T.name.slice(3),3)});return _.memory=_.memory||j,_.table=_.table||Y,tY(N,_)}function _7(_){return typeof Response<"u"&&_ instanceof Response}function aY(_){return _ instanceof WebAssembly.Module}async function d5(_,$={}){if(_7(_=await _))return P6(_,$);let N=aY(_)?_:await WebAssembly.compile(_),j=t3($),Y=await WebAssembly.instantiate(N,$),L=e3(j,Y);return{module:N,instance:Y,exports:L}}async function P6(_,$={}){if(!WebAssembly.instantiateStreaming)return d5(_7(_=await _)?_.arrayBuffer():_,$);let N=t3($),j=await WebAssembly.instantiateStreaming(_,$),Y=e3(N,j.instance);return{...j,exports:Y}}function tY(_,$={}){let N=_.__argumentsLength?(j)=>{_.__argumentsLength.value=j}:_.__setArgumentsLength||_.__setargc||(()=>{});for(let j of Object.keys(_)){let Y=_[j],L=j.split("."),Z=$;while(L.length>1){let B=L.shift();if(!Object.hasOwn(Z,B))Z[B]={};Z=Z[B]}let V=L[0],Q=V.indexOf("#");if(Q>=0){let B=V.substring(0,Q),U=Z[B];if(typeof U>"u"||!U.prototype){let X=function(...W){return X.wrap(X.prototype.constructor(0,...W))};if(X.prototype={valueOf(){return this[R8]}},X.wrap=function(W){return Object.create(X.prototype,{[R8]:{value:W,writable:!1}})},U)Object.getOwnPropertyNames(U).forEach((W)=>Object.defineProperty(X,W,Object.getOwnPropertyDescriptor(U,W)));Z[B]=X}if(V=V.substring(Q+1),Z=Z[B].prototype,/^(get|set):/.test(V)){if(!Object.hasOwn(Z,V=V.substring(4))){let X=_[j.replace("set:","get:")],W=_[j.replace("get:","set:")];Object.defineProperty(Z,V,{get(){return X(this[R8])},set(J){W(this[R8],J)},enumerable:!0})}}else if(V==="constructor")(Z[V]=function(...X){return N(X.length),Y(...X)}).original=Y;else(Z[V]=function(...X){return N(X.length),Y(this[R8],...X)}).original=Y}else if(/^(get|set):/.test(V)){if(!Object.hasOwn(Z,V=V.substring(4)))Object.defineProperty(Z,V,{get:_[j.replace("set:","get:")],set:_[j.replace("get:","set:")],enumerable:!0})}else if(typeof Y==="function"&&Y!==N)(Z[V]=(...B)=>{return N(B.length),Y(...B)}).original=Y;else Z[V]=Y}return $}var _L="/static/js/vendor/remote-display-decoder.wasm",k6=null;function $L(_){if(_ instanceof ArrayBuffer)return _;if(_.byteOffset===0&&_.byteLength===_.buffer.byteLength)return _.buffer;return _.slice().buffer}async function $7(){if(k6)return k6;return k6=(async()=>{try{let _=await fetch(_L,{credentials:"same-origin"});if(!_.ok)throw Error(`HTTP ${_.status}`);let N=(typeof P6==="function"?await P6(_,{}):await d5(await _.arrayBuffer(),{})).exports;if(typeof N.decodeRawRectToRgba!=="function")throw Error("decodeRawRectToRgba export is missing.");return(j,Y,L,Z)=>{let V=$L(j),Q=N.__pin(N.__newArrayBuffer(V));try{let B=N.__pin(N.decodeRawRectToRgba(Q,Y,L,Z.bitsPerPixel,Z.bigEndian?1:0,Z.trueColor?1:0,Z.redMax,Z.greenMax,Z.blueMax,Z.redShift,Z.greenShift,Z.blueShift));try{let U=N.__getArrayBuffer(B);return new Uint8ClampedArray(U)}finally{N.__unpin(B)}}finally{N.__unpin(Q);try{N.__collect?.()}catch{}}}}catch(_){return console.warn("[remote-display] Failed to load AssemblyScript decoder, using JS fallback.",_),null}})(),k6}function Z8(_,$,N){return Math.max($,Math.min(N,_))}function x6(_,$,N){let j=new Uint8Array(6),Y=Z8(Math.floor(Number($||0)),0,65535),L=Z8(Math.floor(Number(N||0)),0,65535);return j[0]=5,j[1]=Z8(Math.floor(Number(_||0)),0,255),j[2]=Y>>8&255,j[3]=Y&255,j[4]=L>>8&255,j[5]=L&255,j}function t5(_){switch(Number(_)){case 0:return 1;case 1:return 2;case 2:return 4;default:return 0}}function N7(_,$,N,j,Y){let L=Math.max(1,Math.floor(Number(j||0))),Z=Math.max(1,Math.floor(Number(Y||0))),V=Math.max(1,Number(N?.width||0)),Q=Math.max(1,Number(N?.height||0)),B=(Number(_||0)-Number(N?.left||0))/V,U=(Number($||0)-Number(N?.top||0))/Q;return{x:Z8(Math.floor(B*L),0,Math.max(0,L-1)),y:Z8(Math.floor(U*Z),0,Math.max(0,Z-1))}}function j7(_,$,N,j=0){let Y=Number(_)<0?8:16,L=Z8(Number(j||0)|Y,0,255);return[x6(L,$,N),x6(Number(j||0),$,N)]}function Y7(_,$){let N=new Uint8Array(8),j=Math.max(0,Math.min(4294967295,Number($||0)>>>0));return N[0]=4,N[1]=_?1:0,N[4]=j>>>24&255,N[5]=j>>>16&255,N[6]=j>>>8&255,N[7]=j&255,N}function u8(_){if(typeof _!=="string")return null;return _.length>0?_:null}function L7(_,$,N,j){let Y=Math.max(1,Math.floor(Number(_||0))),L=Math.max(1,Math.floor(Number($||0))),Z=Math.max(1,Math.floor(Number(N||0))),V=Math.max(1,Math.floor(Number(j||0))),Q=Math.min(Y/Z,L/V);if(!Number.isFinite(Q)||Q<=0)return 1;return Math.max(0.01,Q)}var a5={Backspace:65288,Tab:65289,Enter:65293,Escape:65307,Insert:65379,Delete:65535,Home:65360,End:65367,PageUp:65365,PageDown:65366,ArrowLeft:65361,ArrowUp:65362,ArrowRight:65363,ArrowDown:65364,Shift:65505,ShiftLeft:65505,ShiftRight:65506,Control:65507,ControlLeft:65507,ControlRight:65508,Alt:65513,AltLeft:65513,AltRight:65514,Meta:65515,MetaLeft:65515,MetaRight:65516,Super:65515,Super_L:65515,Super_R:65516,CapsLock:65509,NumLock:65407,ScrollLock:65300,Pause:65299,PrintScreen:65377,ContextMenu:65383,Menu:65383," ":32};for(let _=1;_<=12;_+=1)a5[`F${_}`]=65470+(_-1);function e5(_){let $=[_?.key,_?.code];for(let L of $)if(L&&Object.prototype.hasOwnProperty.call(a5,L))return a5[L];let N=String(_?.key||""),j=N?N.codePointAt(0):null,Y=j==null?0:j>65535?2:1;if(j!=null&&N.length===Y){if(j<=255)return j;return(16777216|j)>>>0}return null}var I1=Uint8Array,U_=Uint16Array,B2=Int32Array,w6=new I1([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),C6=new I1([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),Y2=new I1([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),K7=function(_,$){var N=new U_(31);for(var j=0;j<31;++j)N[j]=$+=1<<_[j-1];var Y=new B2(N[30]);for(var j=1;j<30;++j)for(var L=N[j];L<N[j+1];++L)Y[L]=L-N[j]<<5|j;return{b:N,r:Y}},Q7=K7(w6,2),q7=Q7.b,L2=Q7.r;q7[28]=258,L2[258]=28;var X7=K7(C6,0),NL=X7.b,Z7=X7.r,Z2=new U_(32768);for(S0=0;S0<32768;++S0)a_=(S0&43690)>>1|(S0&21845)<<1,a_=(a_&52428)>>2|(a_&13107)<<2,a_=(a_&61680)>>4|(a_&3855)<<4,Z2[S0]=((a_&65280)>>8|(a_&255)<<8)>>1;var a_,S0,t_=function(_,$,N){var j=_.length,Y=0,L=new U_($);for(;Y<j;++Y)if(_[Y])++L[_[Y]-1];var Z=new U_($);for(Y=1;Y<$;++Y)Z[Y]=Z[Y-1]+L[Y-1]<<1;var V;if(N){V=new U_(1<<$);var Q=15-$;for(Y=0;Y<j;++Y)if(_[Y]){var B=Y<<4|_[Y],U=$-_[Y],X=Z[_[Y]-1]++<<U;for(var W=X|(1<<U)-1;X<=W;++X)V[Z2[X]>>Q]=B}}else{V=new U_(j);for(Y=0;Y<j;++Y)if(_[Y])V[Y]=Z2[Z[_[Y]-1]++]>>15-_[Y]}return V},C4=new I1(288);for(S0=0;S0<144;++S0)C4[S0]=8;var S0;for(S0=144;S0<256;++S0)C4[S0]=9;var S0;for(S0=256;S0<280;++S0)C4[S0]=7;var S0;for(S0=280;S0<288;++S0)C4[S0]=8;var S0,g8=new I1(32);for(S0=0;S0<32;++S0)g8[S0]=5;var S0,jL=t_(C4,9,0),YL=t_(C4,9,1),LL=t_(g8,5,0),ZL=t_(g8,5,1),_2=function(_){var $=_[0];for(var N=1;N<_.length;++N)if(_[N]>$)$=_[N];return $},h_=function(_,$,N){var j=$/8|0;return(_[j]|_[j+1]<<8)>>($&7)&N},$2=function(_,$){var N=$/8|0;return(_[N]|_[N+1]<<8|_[N+2]<<16)>>($&7)},K2=function(_){return(_+7)/8|0},m8=function(_,$,N){if($==null||$<0)$=0;if(N==null||N>_.length)N=_.length;return new I1(_.subarray($,N))};var VL=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],Z_=function(_,$,N){var j=Error($||VL[_]);if(j.code=_,Error.captureStackTrace)Error.captureStackTrace(j,Z_);if(!N)throw j;return j},BL=function(_,$,N,j){var Y=_.length,L=j?j.length:0;if(!Y||$.f&&!$.l)return N||new I1(0);var Z=!N,V=Z||$.i!=2,Q=$.i;if(Z)N=new I1(Y*3);var B=function(J0){var Z0=N.length;if(J0>Z0){var k0=new I1(Math.max(Z0*2,J0));k0.set(N),N=k0}},U=$.f||0,X=$.p||0,W=$.b||0,J=$.l,E=$.d,P=$.m,f=$.n,D=Y*8;do{if(!J){U=h_(_,X,1);var y=h_(_,X+1,3);if(X+=3,!y){var C=K2(X)+4,u=_[C-4]|_[C-3]<<8,A=C+u;if(A>Y){if(Q)Z_(0);break}if(V)B(W+u);N.set(_.subarray(C,A),W),$.b=W+=u,$.p=X=A*8,$.f=U;continue}else if(y==1)J=YL,E=ZL,P=9,f=5;else if(y==2){var v=h_(_,X,31)+257,o=h_(_,X+10,15)+4,n=v+h_(_,X+5,31)+1;X+=14;var g=new I1(n),T=new I1(19);for(var i=0;i<o;++i)T[Y2[i]]=h_(_,X+i*3,7);X+=o*3;var d=_2(T),q0=(1<<d)-1,l=t_(T,d,1);for(var i=0;i<n;){var $0=l[h_(_,X,q0)];X+=$0&15;var C=$0>>4;if(C<16)g[i++]=C;else{var N0=0,Y0=0;if(C==16)Y0=3+h_(_,X,3),X+=2,N0=g[i-1];else if(C==17)Y0=3+h_(_,X,7),X+=3;else if(C==18)Y0=11+h_(_,X,127),X+=7;while(Y0--)g[i++]=N0}}var L0=g.subarray(0,v),K0=g.subarray(v);P=_2(L0),f=_2(K0),J=t_(L0,P,1),E=t_(K0,f,1)}else Z_(1);if(X>D){if(Q)Z_(0);break}}if(V)B(W+131072);var G0=(1<<P)-1,W0=(1<<f)-1,F0=X;for(;;F0=X){var N0=J[$2(_,X)&G0],c0=N0>>4;if(X+=N0&15,X>D){if(Q)Z_(0);break}if(!N0)Z_(2);if(c0<256)N[W++]=c0;else if(c0==256){F0=X,J=null;break}else{var M0=c0-254;if(c0>264){var i=c0-257,D0=w6[i];M0=h_(_,X,(1<<D0)-1)+q7[i],X+=D0}var p0=E[$2(_,X)&W0],i0=p0>>4;if(!p0)Z_(3);X+=p0&15;var K0=NL[i0];if(i0>3){var D0=C6[i0];K0+=$2(_,X)&(1<<D0)-1,X+=D0}if(X>D){if(Q)Z_(0);break}if(V)B(W+131072);var C0=W+M0;if(W<K0){var Q0=L-K0,P0=Math.min(K0,C0);if(Q0+W<0)Z_(3);for(;W<P0;++W)N[W]=j[Q0+W]}for(;W<C0;++W)N[W]=N[W-K0]}}if($.l=J,$.p=F0,$.b=W,$.f=U,J)U=1,$.m=P,$.d=E,$.n=f}while(!U);return W!=N.length&&Z?m8(N,0,W):N.subarray(0,W)},U4=function(_,$,N){N<<=$&7;var j=$/8|0;_[j]|=N,_[j+1]|=N>>8},b8=function(_,$,N){N<<=$&7;var j=$/8|0;_[j]|=N,_[j+1]|=N>>8,_[j+2]|=N>>16},N2=function(_,$){var N=[];for(var j=0;j<_.length;++j)if(_[j])N.push({s:j,f:_[j]});var Y=N.length,L=N.slice();if(!Y)return{t:G7,l:0};if(Y==1){var Z=new I1(N[0].s+1);return Z[N[0].s]=1,{t:Z,l:1}}N.sort(function(A,v){return A.f-v.f}),N.push({s:-1,f:25001});var V=N[0],Q=N[1],B=0,U=1,X=2;N[0]={s:-1,f:V.f+Q.f,l:V,r:Q};while(U!=Y-1)V=N[N[B].f<N[X].f?B++:X++],Q=N[B!=U&&N[B].f<N[X].f?B++:X++],N[U++]={s:-1,f:V.f+Q.f,l:V,r:Q};var W=L[0].s;for(var j=1;j<Y;++j)if(L[j].s>W)W=L[j].s;var J=new U_(W+1),E=V2(N[U-1],J,0);if(E>$){var j=0,P=0,f=E-$,D=1<<f;L.sort(function(v,o){return J[o.s]-J[v.s]||v.f-o.f});for(;j<Y;++j){var y=L[j].s;if(J[y]>$)P+=D-(1<<E-J[y]),J[y]=$;else break}P>>=f;while(P>0){var C=L[j].s;if(J[C]<$)P-=1<<$-J[C]++-1;else++j}for(;j>=0&&P;--j){var u=L[j].s;if(J[u]==$)--J[u],++P}E=$}return{t:new I1(J),l:E}},V2=function(_,$,N){return _.s==-1?Math.max(V2(_.l,$,N+1),V2(_.r,$,N+1)):$[_.s]=N},V7=function(_){var $=_.length;while($&&!_[--$]);var N=new U_(++$),j=0,Y=_[0],L=1,Z=function(Q){N[j++]=Q};for(var V=1;V<=$;++V)if(_[V]==Y&&V!=$)++L;else{if(!Y&&L>2){for(;L>138;L-=138)Z(32754);if(L>2)Z(L>10?L-11<<5|28690:L-3<<5|12305),L=0}else if(L>3){Z(Y),--L;for(;L>6;L-=6)Z(8304);if(L>2)Z(L-3<<5|8208),L=0}while(L--)Z(Y);L=1,Y=_[V]}return{c:N.subarray(0,j),n:$}},v8=function(_,$){var N=0;for(var j=0;j<$.length;++j)N+=_[j]*$[j];return N},U7=function(_,$,N){var j=N.length,Y=K2($+2);_[Y]=j&255,_[Y+1]=j>>8,_[Y+2]=_[Y]^255,_[Y+3]=_[Y+1]^255;for(var L=0;L<j;++L)_[Y+L+4]=N[L];return(Y+4+j)*8},B7=function(_,$,N,j,Y,L,Z,V,Q,B,U){U4($,U++,N),++Y[256];var X=N2(Y,15),W=X.t,J=X.l,E=N2(L,15),P=E.t,f=E.l,D=V7(W),y=D.c,C=D.n,u=V7(P),A=u.c,v=u.n,o=new U_(19);for(var n=0;n<y.length;++n)++o[y[n]&31];for(var n=0;n<A.length;++n)++o[A[n]&31];var g=N2(o,7),T=g.t,i=g.l,d=19;for(;d>4&&!T[Y2[d-1]];--d);var q0=B+5<<3,l=v8(Y,C4)+v8(L,g8)+Z,$0=v8(Y,W)+v8(L,P)+Z+14+3*d+v8(o,T)+2*o[16]+3*o[17]+7*o[18];if(Q>=0&&q0<=l&&q0<=$0)return U7($,U,_.subarray(Q,Q+B));var N0,Y0,L0,K0;if(U4($,U,1+($0<l)),U+=2,$0<l){N0=t_(W,J,0),Y0=W,L0=t_(P,f,0),K0=P;var G0=t_(T,i,0);U4($,U,C-257),U4($,U+5,v-1),U4($,U+10,d-4),U+=14;for(var n=0;n<d;++n)U4($,U+3*n,T[Y2[n]]);U+=3*d;var W0=[y,A];for(var F0=0;F0<2;++F0){var c0=W0[F0];for(var n=0;n<c0.length;++n){var M0=c0[n]&31;if(U4($,U,G0[M0]),U+=T[M0],M0>15)U4($,U,c0[n]>>5&127),U+=c0[n]>>12}}}else N0=jL,Y0=C4,L0=LL,K0=g8;for(var n=0;n<V;++n){var D0=j[n];if(D0>255){var M0=D0>>18&31;if(b8($,U,N0[M0+257]),U+=Y0[M0+257],M0>7)U4($,U,D0>>23&31),U+=w6[M0];var p0=D0&31;if(b8($,U,L0[p0]),U+=K0[p0],p0>3)b8($,U,D0>>5&8191),U+=C6[p0]}else b8($,U,N0[D0]),U+=Y0[D0]}return b8($,U,N0[256]),U+Y0[256]},KL=new B2([65540,131080,131088,131104,262176,1048704,1048832,2114560,2117632]),G7=new I1(0),QL=function(_,$,N,j,Y,L){var Z=L.z||_.length,V=new I1(j+Z+5*(1+Math.ceil(Z/7000))+Y),Q=V.subarray(j,V.length-Y),B=L.l,U=(L.r||0)&7;if($){if(U)Q[0]=L.r>>3;var X=KL[$-1],W=X>>13,J=X&8191,E=(1<<N)-1,P=L.p||new U_(32768),f=L.h||new U_(E+1),D=Math.ceil(N/3),y=2*D,C=function(r0){return(_[r0]^_[r0+1]<<D^_[r0+2]<<y)&E},u=new B2(25000),A=new U_(288),v=new U_(32),o=0,n=0,g=L.i||0,T=0,i=L.w||0,d=0;for(;g+2<Z;++g){var q0=C(g),l=g&32767,$0=f[q0];if(P[l]=$0,f[q0]=l,i<=g){var N0=Z-g;if((o>7000||T>24576)&&(N0>423||!B)){U=B7(_,Q,0,u,A,v,n,T,d,g-d,U),T=o=n=0,d=g;for(var Y0=0;Y0<286;++Y0)A[Y0]=0;for(var Y0=0;Y0<30;++Y0)v[Y0]=0}var L0=2,K0=0,G0=J,W0=l-$0&32767;if(N0>2&&q0==C(g-W0)){var F0=Math.min(W,N0)-1,c0=Math.min(32767,g),M0=Math.min(258,N0);while(W0<=c0&&--G0&&l!=$0){if(_[g+L0]==_[g+L0-W0]){var D0=0;for(;D0<M0&&_[g+D0]==_[g+D0-W0];++D0);if(D0>L0){if(L0=D0,K0=W0,D0>F0)break;var p0=Math.min(W0,D0-2),i0=0;for(var Y0=0;Y0<p0;++Y0){var C0=g-W0+Y0&32767,Q0=P[C0],P0=C0-Q0&32767;if(P0>i0)i0=P0,$0=C0}}}l=$0,$0=P[l],W0+=l-$0&32767}}if(K0){u[T++]=268435456|L2[L0]<<18|Z7[K0];var J0=L2[L0]&31,Z0=Z7[K0]&31;n+=w6[J0]+C6[Z0],++A[257+J0],++v[Z0],i=g+L0,++o}else u[T++]=_[g],++A[_[g]]}}for(g=Math.max(g,i);g<Z;++g)u[T++]=_[g],++A[_[g]];if(U=B7(_,Q,B,u,A,v,n,T,d,g-d,U),!B)L.r=U&7|Q[U/8|0]<<3,U-=7,L.h=f,L.p=P,L.i=g,L.w=i}else{for(var g=L.w||0;g<Z+B;g+=65535){var k0=g+65535;if(k0>=Z)Q[U/8|0]=B,k0=Z;U=U7(Q,U+1,_.subarray(g,k0))}L.i=Z}return m8(V,0,j+K2(U)+Y)};var W7=function(){var _=1,$=0;return{p:function(N){var j=_,Y=$,L=N.length|0;for(var Z=0;Z!=L;){var V=Math.min(Z+2655,L);for(;Z<V;++Z)Y+=j+=N[Z];j=(j&65535)+15*(j>>16),Y=(Y&65535)+15*(Y>>16)}_=j,$=Y},d:function(){return _%=65521,$%=65521,(_&255)<<24|(_&65280)<<8|($&255)<<8|$>>8}}},qL=function(_,$,N,j,Y){if(!Y){if(Y={l:1},$.dictionary){var L=$.dictionary.subarray(-32768),Z=new I1(L.length+_.length);Z.set(L),Z.set(_,L.length),_=Z,Y.w=L.length}}return QL(_,$.level==null?6:$.level,$.mem==null?Y.l?Math.ceil(Math.max(8,Math.min(13,Math.log(_.length)))*1.5):20:12+$.mem,N,j,Y)};var O7=function(_,$,N){for(;N;++$)_[$]=N,N>>>=8};var XL=function(_,$){var N=$.level,j=N==0?0:N<6?1:N==9?3:2;if(_[0]=120,_[1]=j<<6|($.dictionary&&32),_[1]|=31-(_[0]<<8|_[1])%31,$.dictionary){var Y=W7();Y.p($.dictionary),O7(_,2,Y.d())}},UL=function(_,$){if((_[0]&15)!=8||_[0]>>4>7||(_[0]<<8|_[1])%31)Z_(6,"invalid zlib data");if((_[1]>>5&1)==+!$)Z_(6,"invalid zlib data: "+(_[1]&32?"need":"unexpected")+" dictionary");return(_[1]>>3&4)+2};var j2=function(){function _($,N){if(typeof $=="function")N=$,$={};this.ondata=N;var j=$&&$.dictionary&&$.dictionary.subarray(-32768);if(this.s={i:0,b:j?j.length:0},this.o=new I1(32768),this.p=new I1(0),j)this.o.set(j)}return _.prototype.e=function($){if(!this.ondata)Z_(5);if(this.d)Z_(4);if(!this.p.length)this.p=$;else if($.length){var N=new I1(this.p.length+$.length);N.set(this.p),N.set($,this.p.length),this.p=N}},_.prototype.c=function($){this.s.i=+(this.d=$||!1);var N=this.s.b,j=BL(this.p,this.s,this.o);this.ondata(m8(j,N,this.s.b),this.d),this.o=m8(j,this.s.b-32768),this.s.b=this.o.length,this.p=m8(this.p,this.s.p/8|0),this.s.p&=7},_.prototype.push=function($,N){this.e($),this.c(N)},_}();function z7(_,$){if(!$)$={};var N=W7();N.p(_);var j=qL(_,$,$.dictionary?6:2,4);return XL(j,$),O7(j,j.length-4,N.d()),j}var F7=function(){function _($,N){j2.call(this,$,N),this.v=$&&$.dictionary?2:1}return _.prototype.push=function($,N){if(j2.prototype.e.call(this,$),this.v){if(this.p.length<6&&!N)return;this.p=this.p.subarray(UL(this.p,this.v-1)),this.v=0}if(N){if(this.p.length<4)Z_(6,"invalid zlib data");this.p=this.p.subarray(0,-4)}j2.prototype.c.call(this,N)},_}();var GL=typeof TextDecoder<"u"&&new TextDecoder,WL=0;try{GL.decode(G7,{stream:!0}),WL=1}catch(_){}var OL=[58,50,42,34,26,18,10,2,60,52,44,36,28,20,12,4,62,54,46,38,30,22,14,6,64,56,48,40,32,24,16,8,57,49,41,33,25,17,9,1,59,51,43,35,27,19,11,3,61,53,45,37,29,21,13,5,63,55,47,39,31,23,15,7],zL=[40,8,48,16,56,24,64,32,39,7,47,15,55,23,63,31,38,6,46,14,54,22,62,30,37,5,45,13,53,21,61,29,36,4,44,12,52,20,60,28,35,3,43,11,51,19,59,27,34,2,42,10,50,18,58,26,33,1,41,9,49,17,57,25],FL=[32,1,2,3,4,5,4,5,6,7,8,9,8,9,10,11,12,13,12,13,14,15,16,17,16,17,18,19,20,21,20,21,22,23,24,25,24,25,26,27,28,29,28,29,30,31,32,1],HL=[16,7,20,21,29,12,28,17,1,15,23,26,5,18,31,10,2,8,24,14,32,27,3,9,19,13,30,6,22,11,4,25],DL=[57,49,41,33,25,17,9,1,58,50,42,34,26,18,10,2,59,51,43,35,27,19,11,3,60,52,44,36,63,55,47,39,31,23,15,7,62,54,46,38,30,22,14,6,61,53,45,37,29,21,13,5,28,20,12,4],JL=[14,17,11,24,1,5,3,28,15,6,21,10,23,19,12,4,26,8,16,7,27,20,13,2,41,52,31,37,47,55,30,40,51,45,33,48,44,49,39,56,34,53,46,42,50,36,29,32],EL=[1,1,2,2,2,2,2,2,1,2,2,2,2,2,2,1],AL=[[[14,4,13,1,2,15,11,8,3,10,6,12,5,9,0,7],[0,15,7,4,14,2,13,1,10,6,12,11,9,5,3,8],[4,1,14,8,13,6,2,11,15,12,9,7,3,10,5,0],[15,12,8,2,4,9,1,7,5,11,3,14,10,0,6,13]],[[15,1,8,14,6,11,3,4,9,7,2,13,12,0,5,10],[3,13,4,7,15,2,8,14,12,0,1,10,6,9,11,5],[0,14,7,11,10,4,13,1,5,8,12,6,9,3,2,15],[13,8,10,1,3,15,4,2,11,6,7,12,0,5,14,9]],[[10,0,9,14,6,3,15,5,1,13,12,7,11,4,2,8],[13,7,0,9,3,4,6,10,2,8,5,14,12,11,15,1],[13,6,4,9,8,15,3,0,11,1,2,12,5,10,14,7],[1,10,13,0,6,9,8,7,4,15,14,3,11,5,2,12]],[[7,13,14,3,0,6,9,10,1,2,8,5,11,12,4,15],[13,8,11,5,6,15,0,3,4,7,2,12,1,10,14,9],[10,6,9,0,12,11,7,13,15,1,3,14,5,2,8,4],[3,15,0,6,10,1,13,8,9,4,5,11,12,7,2,14]],[[2,12,4,1,7,10,11,6,8,5,3,15,13,0,14,9],[14,11,2,12,4,7,13,1,5,0,15,10,3,9,8,6],[4,2,1,11,10,13,7,8,15,9,12,5,6,3,0,14],[11,8,12,7,1,14,2,13,6,15,0,9,10,4,5,3]],[[12,1,10,15,9,2,6,8,0,13,3,4,14,7,5,11],[10,15,4,2,7,12,9,5,6,1,13,14,0,11,3,8],[9,14,15,5,2,8,12,3,7,0,4,10,1,13,11,6],[4,3,2,12,9,5,15,10,11,14,1,7,6,0,8,13]],[[4,11,2,14,15,0,8,13,3,12,9,7,5,10,6,1],[13,0,11,7,4,9,1,10,14,3,5,12,2,15,8,6],[1,4,11,13,12,3,7,14,10,15,6,8,0,5,9,2],[6,11,13,8,1,4,10,7,9,5,0,15,14,2,3,12]],[[13,2,8,4,6,15,11,1,10,9,3,14,5,0,12,7],[1,15,13,8,10,3,7,4,12,5,6,11,0,14,9,2],[7,11,4,1,9,12,14,2,0,6,10,13,15,3,5,8],[2,1,14,7,4,10,8,13,15,12,9,0,3,5,6,11]]],J7=new Uint8Array(256);for(let _=0;_<256;_+=1){let $=0;for(let N=0;N<8;N+=1)$=$<<1|_>>N&1;J7[_]=$}function E7(_){if(_ instanceof Uint8Array)return _;if(_ instanceof ArrayBuffer)return new Uint8Array(_);if(ArrayBuffer.isView(_))return new Uint8Array(_.buffer,_.byteOffset,_.byteLength);return new Uint8Array(0)}function A7(_){let $=0n,N=E7(_);for(let j of N)$=$<<8n|BigInt(j);return $}function yL(_,$){let N=new Uint8Array($),j=BigInt(_);for(let Y=$-1;Y>=0;Y-=1)N[Y]=Number(j&0xffn),j>>=8n;return N}function V8(_,$,N){let j=0n;for(let Y of $){let L=BigInt(_)>>BigInt(N-Y)&1n;j=j<<1n|L}return j}function H7(_,$){let N=28n,j=(1n<<N)-1n,Y=BigInt($%28);return(_<<Y|_>>N-Y)&j}function ML(_){let $=V8(A7(_),DL,64),N=$>>28n&0x0fffffffn,j=$&0x0fffffffn,Y=[];for(let L of EL){N=H7(N,L),j=H7(j,L);let Z=N<<28n|j;Y.push(V8(Z,JL,56))}return Y}function PL(_){let $=0n;for(let N=0;N<8;N+=1){let j=BigInt((7-N)*6),Y=Number(_>>j&0x3fn),L=(Y&32)>>4|Y&1,Z=Y>>1&15;$=$<<4n|BigInt(AL[N][L][Z])}return $}function kL(_,$){let N=V8(_,FL,32)^BigInt($),j=PL(N);return V8(j,HL,32)}function D7(_,$){let N=ML($),j=V8(A7(_),OL,64),Y=j>>32n&0xffffffffn,L=j&0xffffffffn;for(let V of N){let Q=L,B=(Y^kL(L,V))&0xffffffffn;Y=Q,L=B}let Z=L<<32n|Y;return yL(V8(Z,zL,64),8)}function xL(_){let $=String(_??""),N=new Uint8Array(8);for(let j=0;j<8;j+=1){let Y=j<$.length?$.charCodeAt(j)&255:0;N[j]=J7[Y]}return N}function y7(_,$){let N=E7($);if(N.byteLength!==16)throw Error(`Invalid VNC auth challenge length ${N.byteLength}; expected 16 bytes.`);let j=xL(_),Y=new Uint8Array(16);return Y.set(D7(N.slice(0,8),j),0),Y.set(D7(N.slice(8,16),j),8),Y}var c_="vnc";function wL(_){return Number(_)}function CL(_){let $=Array.isArray(_)?_:typeof _==="string"?_.split(",").map((Y)=>Y.trim()).filter((Y)=>Y.length>0):[],N=[],j=new Set;for(let Y of $){let L=wL(Y);if(!Number.isFinite(L))continue;let Z=Number(L);if(!j.has(Z))N.push(Z),j.add(Z)}if(N.length>0)return N;return[16,5,2,1,0,-223]}function Q8(_){if(_ instanceof Uint8Array)return _;if(_ instanceof ArrayBuffer)return new Uint8Array(_);if(ArrayBuffer.isView(_))return new Uint8Array(_.buffer,_.byteOffset,_.byteLength);return new Uint8Array(0)}function IL(_,$){let N=Q8(_),j=Q8($);if(!N.byteLength)return new Uint8Array(j);if(!j.byteLength)return new Uint8Array(N);let Y=new Uint8Array(N.byteLength+j.byteLength);return Y.set(N,0),Y.set(j,N.byteLength),Y}function TL(_){let $=0;for(let Y of _||[])$+=Y?.byteLength||0;let N=new Uint8Array($),j=0;for(let Y of _||[]){let L=Q8(Y);N.set(L,j),j+=L.byteLength}return N}function fL(){return(_)=>{let $=Q8(_);try{let N=[],j=new F7((Y)=>{N.push(new Uint8Array(Y))});if(j.push($,!0),j.err)throw Error(j.msg||"zlib decompression error");return TL(N)}catch(N){try{let j=z7($);return j instanceof Uint8Array?j:new Uint8Array(j)}catch(j){let Y=j instanceof Error?j.message:"unexpected EOF";throw Error(`unexpected EOF: ${Y}`)}}}}function SL(_){return new TextEncoder().encode(String(_||""))}function B8(_){return new TextDecoder().decode(Q8(_))}function RL(_){let $=/^RFB (\d{3})\.(\d{3})\n$/.exec(String(_||""));if(!$)return null;return{major:parseInt($[1],10),minor:parseInt($[2],10),text:$[0]}}function uL(_){if(!_)return`RFB 003.008
`;if(_.major>3||_.minor>=8)return`RFB 003.008
`;if(_.minor>=7)return`RFB 003.007
`;return`RFB 003.003
`}function M7(_,$=0){return{bitsPerPixel:_.getUint8($),depth:_.getUint8($+1),bigEndian:_.getUint8($+2)===1,trueColor:_.getUint8($+3)===1,redMax:_.getUint16($+4,!1),greenMax:_.getUint16($+6,!1),blueMax:_.getUint16($+8,!1),redShift:_.getUint8($+10),greenShift:_.getUint8($+11),blueShift:_.getUint8($+12)}}function bL(_){let $=new ArrayBuffer(20),N=new DataView($);return N.setUint8(0,0),N.setUint8(1,0),N.setUint8(2,0),N.setUint8(3,0),N.setUint8(4,_.bitsPerPixel),N.setUint8(5,_.depth),N.setUint8(6,_.bigEndian?1:0),N.setUint8(7,_.trueColor?1:0),N.setUint16(8,_.redMax,!1),N.setUint16(10,_.greenMax,!1),N.setUint16(12,_.blueMax,!1),N.setUint8(14,_.redShift),N.setUint8(15,_.greenShift),N.setUint8(16,_.blueShift),new Uint8Array($)}function vL(_){let $=Array.isArray(_)?_:[],N=new ArrayBuffer(4+$.length*4),j=new DataView(N);j.setUint8(0,2),j.setUint8(1,0),j.setUint16(2,$.length,!1);let Y=4;for(let L of $)j.setInt32(Y,Number(L||0),!1),Y+=4;return new Uint8Array(N)}function P7(_,$,N,j=0,Y=0){let L=new ArrayBuffer(10),Z=new DataView(L);return Z.setUint8(0,3),Z.setUint8(1,_?1:0),Z.setUint16(2,j,!1),Z.setUint16(4,Y,!1),Z.setUint16(6,Math.max(0,$||0),!1),Z.setUint16(8,Math.max(0,N||0),!1),new Uint8Array(L)}function K8(_,$){let N=Number($||0);if(N<=0)return 0;if(N===255)return _&255;return Math.max(0,Math.min(255,Math.round((_||0)*255/N)))}function x7(_,$,N,j){if(N===1)return _[$];if(N===2)return j?(_[$]<<8|_[$+1])>>>0:(_[$]|_[$+1]<<8)>>>0;if(N===3)return j?(_[$]<<16|_[$+1]<<8|_[$+2])>>>0:(_[$]|_[$+1]<<8|_[$+2]<<16)>>>0;if(N===4)return j?(_[$]<<24>>>0|_[$+1]<<16|_[$+2]<<8|_[$+3])>>>0:(_[$]|_[$+1]<<8|_[$+2]<<16|_[$+3]<<24>>>0)>>>0;return 0}function mL(_,$,N,j){let Y=j||q8,L=Q8(_),Z=Math.max(1,Math.floor(Number(Y.bitsPerPixel||0)/8)),V=Math.max(0,$||0)*Math.max(0,N||0)*Z;if(L.byteLength<V)throw Error(`Incomplete raw rectangle payload: expected ${V} byte(s), got ${L.byteLength}`);if(!Y.trueColor)throw Error("Indexed-colour VNC framebuffers are not supported yet.");let Q=new Uint8ClampedArray(Math.max(0,$||0)*Math.max(0,N||0)*4),B=0,U=0;for(let X=0;X<Math.max(0,$||0)*Math.max(0,N||0);X+=1){let W=x7(L,B,Z,Y.bigEndian),J=K8(W>>>Y.redShift&Y.redMax,Y.redMax),E=K8(W>>>Y.greenShift&Y.greenMax,Y.greenMax),P=K8(W>>>Y.blueShift&Y.blueMax,Y.blueMax);Q[U]=J,Q[U+1]=E,Q[U+2]=P,Q[U+3]=255,B+=Z,U+=4}return Q}function G4(_,$,N){let j=N||q8,Y=Math.max(1,Math.floor(Number(j.bitsPerPixel||0)/8));if(_.byteLength<$+Y)return null;let L=x7(_,$,Y,j.bigEndian);return{rgba:[K8(L>>>j.redShift&j.redMax,j.redMax),K8(L>>>j.greenShift&j.greenMax,j.greenMax),K8(L>>>j.blueShift&j.blueMax,j.blueMax),255],bytesPerPixel:Y}}function I4(_,$,N,j,Y,L,Z){for(let V=0;V<L;V+=1)for(let Q=0;Q<Y;Q+=1){let B=((j+V)*$+(N+Q))*4;_[B]=Z[0],_[B+1]=Z[1],_[B+2]=Z[2],_[B+3]=Z[3]}}function w7(_,$,N,j,Y,L,Z){for(let V=0;V<L;V+=1){let Q=V*Y*4,B=((j+V)*$+N)*4;_.set(Z.subarray(Q,Q+Y*4),B)}}function k7(_,$){let N=$,j=1;while(!0){if(_.byteLength<N+1)return null;let Y=_[N++];if(j+=Y,Y!==255)break}return{consumed:N-$,runLength:j}}function gL(_,$,N,j,Y,L,Z){let V=Y||q8,Q=Math.max(1,Math.floor(Number(V.bitsPerPixel||0)/8));if(_.byteLength<$+4)return null;let B=new DataView(_.buffer,_.byteOffset+$,4).getUint32(0,!1);if(_.byteLength<$+4+B)return null;let U=_.slice($+4,$+4+B),X;try{X=Z(U)}catch{return{consumed:4+B,skipped:!0}}let W=0,J=new Uint8ClampedArray(Math.max(0,N||0)*Math.max(0,j||0)*4);for(let E=0;E<j;E+=64){let P=Math.min(64,j-E);for(let f=0;f<N;f+=64){let D=Math.min(64,N-f);if(X.byteLength<W+1)return null;let y=X[W++],C=y&127,u=(y&128)!==0;if(!u&&C===0){let A=D*P*Q;if(X.byteLength<W+A)return null;let v=L(X.slice(W,W+A),D,P,V);W+=A,w7(J,N,f,E,D,P,v);continue}if(!u&&C===1){let A=G4(X,W,V);if(!A)return null;W+=A.bytesPerPixel,I4(J,N,f,E,D,P,A.rgba);continue}if(!u&&C>1){let A=[];for(let g=0;g<C;g+=1){let T=G4(X,W,V);if(!T)return null;W+=T.bytesPerPixel,A.push(T.rgba)}let v=C<=2?1:C<=4?2:4,o=Math.ceil(D*v/8),n=o*P;if(X.byteLength<W+n)return null;for(let g=0;g<P;g+=1){let T=W+g*o;for(let i=0;i<D;i+=1){let d=i*v,q0=T+(d>>3),l=8-v-(d&7),$0=X[q0]>>l&(1<<v)-1;I4(J,N,f+i,E+g,1,1,A[$0])}}W+=n;continue}if(u&&C===0){let A=0,v=0;while(v<P){let o=G4(X,W,V);if(!o)return null;W+=o.bytesPerPixel;let n=k7(X,W);if(!n)return null;W+=n.consumed;for(let g=0;g<n.runLength;g+=1)if(I4(J,N,f+A,E+v,1,1,o.rgba),A+=1,A>=D){if(A=0,v+=1,v>=P)break}}continue}if(u&&C>0){let A=[];for(let n=0;n<C;n+=1){let g=G4(X,W,V);if(!g)return null;W+=g.bytesPerPixel,A.push(g.rgba)}let v=0,o=0;while(o<P){if(X.byteLength<W+1)return null;let n=X[W++],g=n,T=1;if(n&128){g=n&127;let d=k7(X,W);if(!d)return null;W+=d.consumed,T=d.runLength}let i=A[g];if(!i)return null;for(let d=0;d<T;d+=1)if(I4(J,N,f+v,E+o,1,1,i),v+=1,v>=D){if(v=0,o+=1,o>=P)break}}continue}return null}}return{consumed:4+B,rgba:J}}function hL(_,$,N,j,Y){let L=Y||q8,Z=Math.max(1,Math.floor(Number(L.bitsPerPixel||0)/8));if(_.byteLength<$+4+Z)return null;let Q=new DataView(_.buffer,_.byteOffset+$,_.byteLength-$).getUint32(0,!1),B=$+4,U=G4(_,B,L);if(!U)return null;B+=U.bytesPerPixel;let X=new Uint8ClampedArray(Math.max(0,N||0)*Math.max(0,j||0)*4);I4(X,N,0,0,N,j,U.rgba);for(let W=0;W<Q;W+=1){let J=G4(_,B,L);if(!J)return null;if(B+=J.bytesPerPixel,_.byteLength<B+8)return null;let E=new DataView(_.buffer,_.byteOffset+B,8),P=E.getUint16(0,!1),f=E.getUint16(2,!1),D=E.getUint16(4,!1),y=E.getUint16(6,!1);B+=8,I4(X,N,P,f,D,y,J.rgba)}return{consumed:B-$,rgba:X}}function cL(_,$,N,j,Y,L){let Z=Y||q8,V=Math.max(1,Math.floor(Number(Z.bitsPerPixel||0)/8)),Q=new Uint8ClampedArray(Math.max(0,N||0)*Math.max(0,j||0)*4),B=$,U=[0,0,0,255],X=[255,255,255,255];for(let W=0;W<j;W+=16){let J=Math.min(16,j-W);for(let E=0;E<N;E+=16){let P=Math.min(16,N-E);if(_.byteLength<B+1)return null;let f=_[B++];if(f&1){let D=P*J*V;if(_.byteLength<B+D)return null;let y=L(_.slice(B,B+D),P,J,Z);B+=D,w7(Q,N,E,W,P,J,y);continue}if(f&2){let D=G4(_,B,Z);if(!D)return null;U=D.rgba,B+=D.bytesPerPixel}if(I4(Q,N,E,W,P,J,U),f&4){let D=G4(_,B,Z);if(!D)return null;X=D.rgba,B+=D.bytesPerPixel}if(f&8){if(_.byteLength<B+1)return null;let D=_[B++];for(let y=0;y<D;y+=1){let C=X;if(f&16){let T=G4(_,B,Z);if(!T)return null;C=T.rgba,B+=T.bytesPerPixel}if(_.byteLength<B+2)return null;let u=_[B++],A=_[B++],v=u>>4,o=u&15,n=(A>>4)+1,g=(A&15)+1;I4(Q,N,E+v,W+o,n,g,C)}}}}return{consumed:B-$,rgba:Q}}var q8={bitsPerPixel:32,depth:24,bigEndian:!1,trueColor:!0,redMax:255,greenMax:255,blueMax:255,redShift:16,greenShift:8,blueShift:0};class I6{protocol=c_;constructor(_={}){this.shared=_.shared!==!1,this.decodeRawRect=typeof _.decodeRawRect==="function"?_.decodeRawRect:mL,this.encodings=CL(_.encodings||null),this.state="version",this.buffer=new Uint8Array(0),this.serverVersion=null,this.clientVersionText=null,this.framebufferWidth=0,this.framebufferHeight=0,this.serverName="",this.serverPixelFormat=null,this.clientPixelFormat={...q8},this.password=typeof _.password==="string"&&_.password.length>0?_.password:null,this.inflateZrle=typeof _.inflateZrle==="function"?_.inflateZrle:fL()}receive(_){if(_)this.buffer=IL(this.buffer,_);let $=[],N=[],j=!0;while(j){if(j=!1,this.state==="version"){if(this.buffer.byteLength<12)break;let Y=this.consume(12),L=B8(Y),Z=RL(L);if(!Z)throw Error(`Unsupported RFB version banner: ${L||"<empty>"}`);this.serverVersion=Z,this.clientVersionText=uL(Z),N.push(SL(this.clientVersionText)),$.push({type:"protocol-version",protocol:c_,server:Z.text.trim(),client:this.clientVersionText.trim()}),this.state=Z.minor>=7?"security-types":"security-type-33",j=!0;continue}if(this.state==="security-types"){if(this.buffer.byteLength<1)break;let Y=this.buffer[0];if(Y===0){if(this.buffer.byteLength<5)break;let Q=new DataView(this.buffer.buffer,this.buffer.byteOffset,this.buffer.byteLength).getUint32(1,!1);if(this.buffer.byteLength<5+Q)break;this.consume(1);let B=B8(this.consume(4+Q).slice(4));throw Error(B||"VNC server rejected the connection.")}if(this.buffer.byteLength<1+Y)break;this.consume(1);let L=Array.from(this.consume(Y));$.push({type:"security-types",protocol:c_,types:L});let Z=null;if(L.includes(2)&&this.password!==null)Z=2;else if(L.includes(1))Z=1;else if(L.includes(2))throw Error("VNC password authentication is required. Enter a password and reconnect.");else throw Error(`Unsupported VNC security types: ${L.join(", ")||"none"}. This viewer currently supports only "None" and password-based VNC auth.`);N.push(Uint8Array.of(Z)),$.push({type:"security-selected",protocol:c_,securityType:Z,label:Z===2?"VNC Authentication":"None"}),this.state=Z===2?"security-challenge":"security-result",j=!0;continue}if(this.state==="security-type-33"){if(this.buffer.byteLength<4)break;let L=new DataView(this.buffer.buffer,this.buffer.byteOffset,this.buffer.byteLength).getUint32(0,!1);if(this.consume(4),L===0){if(this.buffer.byteLength<4)break;let V=new DataView(this.buffer.buffer,this.buffer.byteOffset,this.buffer.byteLength).getUint32(0,!1);if(this.buffer.byteLength<4+V)break;let Q=B8(this.consume(4+V).slice(4));throw Error(Q||"VNC server rejected the connection.")}if(L===2){if(this.password===null)throw Error("VNC password authentication is required. Enter a password and reconnect.");$.push({type:"security-selected",protocol:c_,securityType:2,label:"VNC Authentication"}),this.state="security-challenge",j=!0;continue}if(L!==1)throw Error(`Unsupported VNC security type ${L}. This viewer currently supports only "None" and password-based VNC auth.`);$.push({type:"security-selected",protocol:c_,securityType:1,label:"None"}),N.push(Uint8Array.of(this.shared?1:0)),this.state="server-init",j=!0;continue}if(this.state==="security-challenge"){if(this.buffer.byteLength<16)break;if(this.password===null)throw Error("VNC password authentication is required. Enter a password and reconnect.");let Y=this.consume(16);N.push(y7(this.password,Y)),this.state="security-result",j=!0;continue}if(this.state==="security-result"){if(this.buffer.byteLength<4)break;let L=new DataView(this.buffer.buffer,this.buffer.byteOffset,this.buffer.byteLength).getUint32(0,!1);if(this.consume(4),L!==0){if(this.buffer.byteLength>=4){let Z=new DataView(this.buffer.buffer,this.buffer.byteOffset,this.buffer.byteLength).getUint32(0,!1);if(this.buffer.byteLength>=4+Z){let V=B8(this.consume(4+Z).slice(4));throw Error(V||"VNC authentication failed.")}}throw Error("VNC authentication failed.")}$.push({type:"security-result",protocol:c_,ok:!0}),N.push(Uint8Array.of(this.shared?1:0)),this.state="server-init",j=!0;continue}if(this.state==="server-init"){if(this.buffer.byteLength<24)break;let Y=new DataView(this.buffer.buffer,this.buffer.byteOffset,this.buffer.byteLength),L=Y.getUint16(0,!1),Z=Y.getUint16(2,!1),V=M7(Y,4),Q=Y.getUint32(20,!1);if(this.buffer.byteLength<24+Q)break;let B=this.consume(24),U=new DataView(B.buffer,B.byteOffset,B.byteLength);this.framebufferWidth=U.getUint16(0,!1),this.framebufferHeight=U.getUint16(2,!1),this.serverPixelFormat=M7(U,4),this.serverName=B8(this.consume(Q)),this.state="connected",N.push(bL(this.clientPixelFormat)),N.push(vL(this.encodings)),N.push(P7(!1,this.framebufferWidth,this.framebufferHeight)),$.push({type:"display-init",protocol:c_,width:L,height:Z,name:this.serverName,pixelFormat:V}),j=!0;continue}if(this.state==="connected"){if(this.buffer.byteLength<1)break;let Y=this.buffer[0];if(Y===0){if(this.buffer.byteLength<4)break;let Z=new DataView(this.buffer.buffer,this.buffer.byteOffset,this.buffer.byteLength).getUint16(2,!1),V=4,Q=[],B=!1;for(let U=0;U<Z;U+=1){if(this.buffer.byteLength<V+12){B=!0;break}let X=new DataView(this.buffer.buffer,this.buffer.byteOffset+V,12),W=X.getUint16(0,!1),J=X.getUint16(2,!1),E=X.getUint16(4,!1),P=X.getUint16(6,!1),f=X.getInt32(8,!1);if(V+=12,f===0){let D=Math.max(1,Math.floor(Number(this.clientPixelFormat.bitsPerPixel||0)/8)),y=E*P*D;if(this.buffer.byteLength<V+y){B=!0;break}let C=this.buffer.slice(V,V+y);V+=y,Q.push({kind:"rgba",x:W,y:J,width:E,height:P,rgba:this.decodeRawRect(C,E,P,this.clientPixelFormat)});continue}if(f===2){let D=hL(this.buffer,V,E,P,this.clientPixelFormat);if(!D){B=!0;break}V+=D.consumed,Q.push({kind:"rgba",x:W,y:J,width:E,height:P,rgba:D.rgba});continue}if(f===1){if(this.buffer.byteLength<V+4){B=!0;break}let D=new DataView(this.buffer.buffer,this.buffer.byteOffset+V,4),y=D.getUint16(0,!1),C=D.getUint16(2,!1);V+=4,Q.push({kind:"copy",x:W,y:J,width:E,height:P,srcX:y,srcY:C});continue}if(f===16){let D=gL(this.buffer,V,E,P,this.clientPixelFormat,this.decodeRawRect,this.inflateZrle);if(!D){B=!0;break}if(V+=D.consumed,D.skipped)continue;Q.push({kind:"rgba",x:W,y:J,width:E,height:P,rgba:D.rgba});continue}if(f===5){let D=cL(this.buffer,V,E,P,this.clientPixelFormat,this.decodeRawRect);if(!D){B=!0;break}V+=D.consumed,Q.push({kind:"rgba",x:W,y:J,width:E,height:P,rgba:D.rgba});continue}if(f===-223){this.framebufferWidth=E,this.framebufferHeight=P,Q.push({kind:"resize",x:W,y:J,width:E,height:P});continue}throw Error(`Unsupported VNC rectangle encoding ${f}. This viewer currently supports ZRLE, Hextile, RRE, CopyRect, raw rectangles, and DesktopSize only.`)}if(B)break;this.consume(V),$.push({type:"framebuffer-update",protocol:c_,width:this.framebufferWidth,height:this.framebufferHeight,rects:Q}),N.push(P7(!0,this.framebufferWidth,this.framebufferHeight)),j=!0;continue}if(Y===2){this.consume(1),$.push({type:"bell",protocol:c_}),j=!0;continue}if(Y===3){if(this.buffer.byteLength<8)break;let Z=new DataView(this.buffer.buffer,this.buffer.byteOffset,this.buffer.byteLength).getUint32(4,!1);if(this.buffer.byteLength<8+Z)break;this.consume(8);let V=B8(this.consume(Z));$.push({type:"clipboard",protocol:c_,text:V}),j=!0;continue}throw Error(`Unsupported VNC server message type ${Y}.`)}}return{events:$,outgoing:N}}consume(_){let $=this.buffer.slice(0,_);return this.buffer=this.buffer.slice(_),$}}var e_="piclaw://vnc";function pL(_){let $=String(_||"");if($===e_)return null;if(!$.startsWith(`${e_}/`))return null;let N=$.slice(`${e_}/`.length).trim();if(!N)return null;try{return decodeURIComponent(N)}catch{return N}}function r4(_){return String(_||"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}async function iL(_=null){let $=_?`/vnc/session?target=${encodeURIComponent(_)}`:"/vnc/session",N=await fetch($,{credentials:"same-origin"}),j=await N.json().catch(()=>({}));if(!N.ok)throw Error(j?.error||`HTTP ${N.status}`);return j}function nL(_){return`${window.location.protocol==="https:"?"wss:":"ws:"}//${window.location.host}/vnc/ws?target=${encodeURIComponent(_)}`}function lL(_,$){let N=String(_||"").trim(),j=Math.floor(Number($||0));if(!N||!Number.isFinite(j)||j<=0||j>65535)return null;return`${N.includes(":")&&!N.startsWith("[")?`[${N}]`:N}:${j}`}class C7{container;root;statusEl;bodyEl;metricsEl;targetSubtitleEl;socketBoundary=null;protocol=null;disposed=!1;targetId=null;targetLabel=null;bytesIn=0;bytesOut=0;canvas=null;canvasCtx=null;displayPlaceholderEl=null;displayInfoEl=null;displayMetaEl=null;displayStageEl=null;chromeEl=null;sessionShellEl=null;resizeObserver=null;displayScale=null;readOnly=!1;pointerButtonMask=0;pressedKeysyms=new Map;passwordInputEl=null;authPassword=null;directHostInputEl=null;directPortInputEl=null;directPasswordInputEl=null;hasRenderedFrame=!1;frameTimeoutId=null;rawFallbackAttempted=!1;protocolRecovering=!1;constructor(_,$){this.container=_,this.targetId=pL($?.path),this.targetLabel=this.targetId||null,this.root=document.createElement("div"),this.root.className="vnc-pane-shell",this.root.style.cssText="display:flex;flex-direction:column;width:100%;height:100%;background:var(--bg-primary);color:var(--text-primary);",this.targetSubtitleEl=null,this.statusEl=document.createElement("div"),this.statusEl.style.cssText="display:none;",this.statusEl.textContent="",this.bodyEl=document.createElement("div"),this.bodyEl.style.cssText="flex:1;min-height:0;display:flex;align-items:stretch;justify-content:stretch;padding:12px;",this.metricsEl=document.createElement("div"),this.metricsEl.style.cssText="display:none;",this.updateMetrics(),this.root.append(this.statusEl,this.bodyEl),this.container.appendChild(this.root),this.load()}setStatus(_){this.statusEl.textContent=String(_||"")}setSessionChromeVisible(_){if(this.chromeEl)this.chromeEl.style.display=_?"grid":"none";if(this.sessionShellEl?.style)this.sessionShellEl.style.gridTemplateRows=_?"auto minmax(0,1fr)":"1fr";if(this.displayStageEl?.style)this.displayStageEl.style.padding=_?"12px":"0",this.displayStageEl.style.border=_?"1px solid var(--border-color)":"none",this.displayStageEl.style.borderRadius=_?"16px":"0",this.displayStageEl.style.background=_?"#0a0a0a":"#000";if(this.displayPlaceholderEl?.style)this.displayPlaceholderEl.style.display=_?"block":"none"}updateMetrics(){this.metricsEl.textContent=`Transport bytes — in: ${this.bytesIn} / out: ${this.bytesOut}`}applyMetrics(_){this.bytesIn=Number(_?.bytesIn||0),this.bytesOut=Number(_?.bytesOut||0),this.updateMetrics()}openTargetTab(_,$){if(this.targetId=String(_||"").trim()||null,this.targetLabel=String($||_||"").trim()||this.targetId||"VNC",this.targetId)this.renderTargetSession({direct_connect_enabled:!0,target:{id:this.targetId,label:this.targetLabel,read_only:!1,direct_connect:!0}}),this.setStatus("Connecting…"),this.updateDisplayInfo("Connecting…"),this.updateDisplayMeta("connecting");this.load()}requestPanePopout(_,$){this.container.dispatchEvent(new CustomEvent("pane:popout",{bubbles:!0,detail:{path:_,label:$}}))}resetLiveSession(){this.protocol=null;try{this.socketBoundary?.dispose?.()}catch{}this.socketBoundary=null;try{this.resizeObserver?.disconnect?.()}catch{}if(this.resizeObserver=null,this.canvas=null,this.canvasCtx=null,this.displayPlaceholderEl=null,this.displayInfoEl=null,this.displayMetaEl=null,this.displayStageEl=null,this.displayScale=null,this.passwordInputEl=null,this.directHostInputEl=null,this.directPortInputEl=null,this.directPasswordInputEl=null,this.hasRenderedFrame=!1,this.rawFallbackAttempted=!1,this.protocolRecovering=!1,this.frameTimeoutId)clearTimeout(this.frameTimeoutId),this.frameTimeoutId=null;this.pressedKeysyms.clear()}renderTargets(_){this.resetLiveSession();let $=Array.isArray(_?.targets)?_.targets:[],N=Boolean(_?.direct_connect_enabled);this.bodyEl.innerHTML=`
            <div style="width:100%;height:100%;min-height:0;display:grid;align-content:start;justify-items:center;gap:16px;overflow:auto;padding:24px;box-sizing:border-box;">
                ${N?`
                    <div style="width:min(540px,100%);padding:18px 18px 20px;border:1px solid var(--border-color);border-radius:14px;background:var(--bg-secondary);display:grid;gap:14px;box-shadow:0 16px 38px rgba(0,0,0,.22);">
                        <div style="display:grid;gap:6px;">
                            <div style="font-size:18px;font-weight:700;">Connect to VNC</div>
                            <div style="font-size:12px;color:var(--text-secondary);">Enter a server target to start a direct session.</div>
                        </div>
                        <div style="display:grid;gap:10px;align-items:end;">
                            <label style="display:grid;gap:6px;min-width:0;">
                                <span style="font-size:12px;color:var(--text-secondary);">Server</span>
                                <input type="text" data-vnc-direct-host placeholder="server" spellcheck="false" style="width:100%;padding:10px 12px;border:1px solid var(--border-color);border-radius:10px;background:var(--bg-primary);color:inherit;" />
                            </label>
                            <label style="display:grid;gap:6px;min-width:0;">
                                <span style="font-size:12px;color:var(--text-secondary);">Port</span>
                                <input type="number" data-vnc-direct-port min="1" max="65535" step="1" placeholder="5900" style="width:100%;padding:10px 12px;border:1px solid var(--border-color);border-radius:10px;background:var(--bg-primary);color:inherit;" />
                            </label>
                            <label style="display:grid;gap:6px;min-width:0;">
                                <span style="font-size:12px;color:var(--text-secondary);">Password</span>
                                <input type="password" data-vnc-direct-password placeholder="Optional" autocomplete="current-password" style="width:100%;padding:10px 12px;border:1px solid var(--border-color);border-radius:10px;background:var(--bg-primary);color:inherit;" />
                            </label>
                            <button type="button" data-direct-open-tab="1" style="padding:10px 12px;border:1px solid var(--border-color);border-radius:10px;background:var(--bg-primary);cursor:pointer;color:inherit;min-height:40px;font-weight:600;">Connect</button>
                        </div>
                    </div>
                `:""}
                ${$.length?`
                    <div style="width:min(100%,900px);min-height:0;display:grid;gap:12px;grid-template-columns:repeat(auto-fit,minmax(260px,1fr));align-content:start;">
                        ${$.map((Y)=>`
                            <div style="text-align:left;padding:16px;border:1px solid var(--border-color);border-radius:14px;background:var(--bg-secondary);color:inherit;display:flex;flex-direction:column;gap:12px;">
                                <div>
                                    <div style="font-weight:600;margin-bottom:6px;">${r4(Y.label||Y.id)}</div>
                                    <div style="font:12px var(--font-family-mono, monospace);color:var(--text-secondary);">${r4(Y.id)}</div>
                                    <div style="margin-top:8px;font-size:12px;color:var(--text-secondary);">${Y.readOnly?"Read-only target":"Interactive target"}</div>
                                </div>
                                <div style="display:flex;flex-wrap:wrap;gap:8px;">
                                    <button type="button" data-target-open-tab="${r4(Y.id)}" data-target-label="${r4(Y.label||Y.id)}" style="padding:8px 12px;border:1px solid var(--border-color);border-radius:10px;background:var(--bg-primary);cursor:pointer;color:inherit;">Connect</button>
                                </div>
                            </div>
                        `).join("")}
                    </div>
                `:`
                    <div style="min-height:0;display:grid;place-items:center;justify-items:center;">
                        <div style="width:min(100%,540px);text-align:center;padding:28px 24px;border:1px dashed var(--border-color);border-radius:14px;background:var(--bg-secondary);font-size:13px;color:var(--text-secondary);line-height:1.5;">
                            No saved VNC targets yet. Connect directly above.
                        </div>
                    </div>
                `}
            </div>
        `,this.directHostInputEl=this.bodyEl.querySelector("[data-vnc-direct-host]"),this.directPortInputEl=this.bodyEl.querySelector("[data-vnc-direct-port]"),this.directPasswordInputEl=this.bodyEl.querySelector("[data-vnc-direct-password]");let j=()=>{let Y=lL(this.directHostInputEl?.value,this.directPortInputEl?.value);if(!Y)return;this.authPassword=u8(this.directPasswordInputEl?this.directPasswordInputEl.value:this.authPassword),this.openTargetTab(Y,Y)};this.directHostInputEl?.addEventListener("keydown",(Y)=>{if(Y.key!=="Enter")return;Y.preventDefault(),j()}),this.directPortInputEl?.addEventListener("keydown",(Y)=>{if(Y.key!=="Enter")return;Y.preventDefault(),j()}),this.directPasswordInputEl?.addEventListener("keydown",(Y)=>{if(Y.key!=="Enter")return;Y.preventDefault(),j()}),this.bodyEl.querySelector("[data-direct-open-tab]")?.addEventListener("click",()=>j());for(let Y of Array.from(this.bodyEl.querySelectorAll("[data-target-open-tab]")))Y.addEventListener("click",()=>{let L=Y.getAttribute("data-target-open-tab"),Z=Y.getAttribute("data-target-label")||L||"VNC";if(!L)return;this.openTargetTab(L,Z)})}renderTargetSession(_){this.resetLiveSession();let $=_?.target||{},N=$?.label||this.targetId||"VNC target";if(this.targetLabel=N,this.readOnly=Boolean($.read_only),this.pointerButtonMask=0,this.hasRenderedFrame=!1,this.pressedKeysyms.clear(),this.bodyEl.innerHTML=`
            <div data-vnc-session-shell style="width:100%;height:100%;min-height:0;display:grid;grid-template-rows:auto minmax(0,1fr);gap:12px;">
                <div data-vnc-session-chrome style="padding:10px 12px;border:1px solid var(--border-color);border-radius:14px;background:var(--bg-secondary);display:grid;gap:10px;">
                    <div style="display:grid;gap:4px;min-width:0;">
                        <div style="font:12px var(--font-family-mono, monospace);color:var(--text-secondary);white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">${r4($.id||this.targetId||"")} · ${$.read_only?"read-only":"interactive"} · websocket → TCP proxy</div>
                        <div data-display-info style="font-size:13px;color:var(--text-primary);line-height:1.4;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">Negotiating remote display…</div>
                        <div data-display-meta style="font:11px var(--font-family-mono, monospace);color:var(--text-secondary);white-space:nowrap;overflow:hidden;text-overflow:ellipsis;"></div>
                    </div>
                    <div style="display:flex;flex-wrap:wrap;gap:8px;align-items:end;">
                        <label style="display:grid;gap:4px;min-width:160px;flex:1 1 180px;">
                            <span style="font-size:11px;color:var(--text-secondary);">VNC password</span>
                            <input type="password" data-vnc-password placeholder="Optional" autocomplete="current-password" style="width:100%;padding:8px 10px;border:1px solid var(--border-color);border-radius:10px;background:var(--bg-primary);color:inherit;" />
                        </label>
                        <button type="button" data-vnc-reconnect="1" style="padding:8px 12px;border:1px solid var(--border-color);border-radius:10px;background:var(--bg-primary);cursor:pointer;color:inherit;">Reconnect</button>
                        <button type="button" data-open-target-picker="1" style="padding:8px 12px;border:1px solid var(--border-color);border-radius:10px;background:var(--bg-primary);cursor:pointer;color:inherit;">Target</button>
                    </div>
                </div>
                <div data-display-stage style="min-height:0;height:100%;border:1px solid var(--border-color);border-radius:16px;background:#0a0a0a;display:flex;align-items:center;justify-content:center;padding:12px;position:relative;overflow:hidden;">
                    <canvas data-display-canvas tabindex="0" style="display:none;max-width:100%;max-height:100%;width:auto;height:auto;image-rendering:pixelated;box-shadow:0 12px 36px rgba(0,0,0,.35);border-radius:8px;background:#000;"></canvas>
                    <div data-display-placeholder style="max-width:520px;text-align:center;color:#d7d7d7;line-height:1.6;">
                        <div style="font-weight:700;font-size:18px;margin-bottom:8px;">${r4(N)}</div>
                        <div style="font-size:13px;color:#b7b7b7;">Waiting for the VNC/RFB handshake and first framebuffer update…</div>
                    </div>
                </div>
            </div>
        `,this.sessionShellEl=this.bodyEl.querySelector("[data-vnc-session-shell]"),this.chromeEl=this.bodyEl.querySelector("[data-vnc-session-chrome]"),this.displayStageEl=this.bodyEl.querySelector("[data-display-stage]"),this.canvas=this.bodyEl.querySelector("[data-display-canvas]"),this.displayPlaceholderEl=this.bodyEl.querySelector("[data-display-placeholder]"),this.displayInfoEl=this.bodyEl.querySelector("[data-display-info]"),this.displayMetaEl=this.bodyEl.querySelector("[data-display-meta]"),this.canvasCtx=this.canvas?.getContext?.("2d",{alpha:!1})||null,this.canvasCtx)this.canvasCtx.imageSmoothingEnabled=!1;if(this.updateDisplayInfo("Waiting for VNC protocol negotiation…"),this.updateDisplayMeta(),this.setSessionChromeVisible(!0),this.attachDisplayResizeObserver(),this.attachCanvasPointerHandlers(),this.attachCanvasKeyboardHandlers(),this.passwordInputEl=this.bodyEl.querySelector("[data-vnc-password]"),this.passwordInputEl&&this.authPassword!==null)this.passwordInputEl.value=this.authPassword;this.passwordInputEl?.addEventListener("input",()=>{this.authPassword=u8(this.passwordInputEl.value)}),this.passwordInputEl?.addEventListener("keydown",(L)=>{if(L.key!=="Enter")return;L.preventDefault(),this.connectSocket()}),this.bodyEl.querySelector("[data-vnc-reconnect]")?.addEventListener("click",()=>{this.authPassword=u8(this.passwordInputEl?this.passwordInputEl.value:this.authPassword),this.connectSocket()}),this.bodyEl.querySelector("[data-open-target-picker]")?.addEventListener("click",()=>{this.openTargetTab("","VNC")})}updateDisplayInfo(_){if(this.displayInfoEl)this.displayInfoEl.textContent=String(_||"")}updateDisplayMeta(_=""){if(!this.displayMetaEl)return;let $=this.protocol?.state?`state=${this.protocol.state}`:"state=idle",N=this.protocol?.framebufferWidth&&this.protocol?.framebufferHeight?`${this.protocol.framebufferWidth}×${this.protocol.framebufferHeight}`:"pending",j=this.protocol?.serverName?` · name=${this.protocol.serverName}`:"",Y=this.displayScale?` · scale=${Math.round(this.displayScale*100)}%`:"",L=_?` · ${_}`:"";this.displayMetaEl.textContent=`${$} · framebuffer=${N}${j}${Y}${L}`}ensureCanvasSize(_,$,N={}){if(!this.canvas||!this.canvasCtx||!_||!$)return;if(this.canvas.width!==_||this.canvas.height!==$)this.canvas.width=_,this.canvas.height=$;let j=N?.reveal===!0;if(this.canvas.style.display=j||this.hasRenderedFrame?"block":"none",this.canvas.style.aspectRatio=`${_} / ${$}`,this.displayPlaceholderEl)this.displayPlaceholderEl.style.display=j||this.hasRenderedFrame?"none":"";this.updateCanvasScale()}attachDisplayResizeObserver(){if(!this.displayStageEl||typeof ResizeObserver>"u")return;try{this.resizeObserver?.disconnect?.()}catch{}this.resizeObserver=new ResizeObserver(()=>{this.updateCanvasScale()}),this.resizeObserver.observe(this.displayStageEl)}updateCanvasScale(){if(!this.canvas||!this.displayStageEl||!this.canvas.width||!this.canvas.height)return;let _=this.displayStageEl.getBoundingClientRect?.(),$=Math.max(1,Math.floor(_?.width||this.displayStageEl.clientWidth||0)-32),N=Math.max(1,Math.floor(_?.height||this.displayStageEl.clientHeight||0)-32);if(!$||!N)return;let j=L7($,N,this.canvas.width,this.canvas.height);this.displayScale=j,this.canvas.style.width=`${Math.max(1,Math.round(this.canvas.width*j))}px`,this.canvas.style.height=`${Math.max(1,Math.round(this.canvas.height*j))}px`,this.updateDisplayMeta()}getFramebufferPointFromEvent(_){if(!this.canvas||!this.protocol?.framebufferWidth||!this.protocol?.framebufferHeight)return null;let $=this.canvas.getBoundingClientRect?.();if(!$||!$.width||!$.height)return null;return N7(_.clientX,_.clientY,$,this.protocol.framebufferWidth,this.protocol.framebufferHeight)}sendPointerEvent(_,$,N){if(!this.socketBoundary||!this.protocol||this.protocol.state!=="connected")return;this.socketBoundary.send(x6(_,$,N))}attachCanvasPointerHandlers(){if(!this.canvas||this.readOnly)return;this.canvas.style.cursor="crosshair",this.canvas.style.touchAction="none",this.canvas.addEventListener("contextmenu",(_)=>{_.preventDefault()}),this.canvas.addEventListener("pointermove",(_)=>{let $=this.getFramebufferPointFromEvent(_);if(!$)return;this.sendPointerEvent(this.pointerButtonMask,$.x,$.y)}),this.canvas.addEventListener("pointerdown",(_)=>{let $=this.getFramebufferPointFromEvent(_);if(!$)return;_.preventDefault(),this.canvas?.focus?.();try{this.canvas?.setPointerCapture?.(_.pointerId)}catch{}this.pointerButtonMask|=t5(_.button),this.sendPointerEvent(this.pointerButtonMask,$.x,$.y)}),this.canvas.addEventListener("pointerup",(_)=>{let $=this.getFramebufferPointFromEvent(_);if(!$)return;_.preventDefault(),this.pointerButtonMask&=~t5(_.button),this.sendPointerEvent(this.pointerButtonMask,$.x,$.y);try{this.canvas?.releasePointerCapture?.(_.pointerId)}catch{}}),this.canvas.addEventListener("pointercancel",(_)=>{let $=this.getFramebufferPointFromEvent(_)||{x:0,y:0};this.pointerButtonMask=0,this.sendPointerEvent(0,$.x,$.y);try{this.canvas?.releasePointerCapture?.(_.pointerId)}catch{}}),this.canvas.addEventListener("wheel",(_)=>{let $=this.getFramebufferPointFromEvent(_);if(!$)return;_.preventDefault();for(let N of j7(_.deltaY,$.x,$.y,this.pointerButtonMask))this.socketBoundary?.send?.(N)},{passive:!1})}sendKeyEvent(_,$){if(!this.socketBoundary||!this.protocol||this.protocol.state!=="connected")return;this.socketBoundary.send(Y7(_,$))}releasePressedKeys(){for(let _ of this.pressedKeysyms.values())this.sendKeyEvent(!1,_);this.pressedKeysyms.clear()}attachCanvasKeyboardHandlers(){if(!this.canvas||this.readOnly)return;this.canvas.addEventListener("keydown",(_)=>{let $=e5(_);if($==null)return;if(_.repeat&&this.pressedKeysyms.has(_.code||_.key)){_.preventDefault();return}_.preventDefault();let N=_.code||_.key;this.pressedKeysyms.set(N,$),this.sendKeyEvent(!0,$)}),this.canvas.addEventListener("keyup",(_)=>{let $=_.code||_.key,N=this.pressedKeysyms.get($)??e5(_);if(N==null)return;_.preventDefault(),this.pressedKeysyms.delete($),this.sendKeyEvent(!1,N)}),this.canvas.addEventListener("blur",()=>{this.releasePressedKeys()})}drawRgbaRect(_){if(!this.canvasCtx||!this.canvas)return;this.ensureCanvasSize(this.canvas.width||_.width,this.canvas.height||_.height,{reveal:!0});let $=new ImageData(_.rgba,_.width,_.height);this.canvasCtx.putImageData($,_.x,_.y),this.hasRenderedFrame=!0}copyCanvasRect(_){if(!this.canvasCtx||!this.canvas)return;this.ensureCanvasSize(this.canvas.width||_.width,this.canvas.height||_.height,{reveal:!0});let $=this.canvasCtx.getImageData(_.srcX,_.srcY,_.width,_.height);this.canvasCtx.putImageData($,_.x,_.y),this.hasRenderedFrame=!0}scheduleRawFallbackTimeout(){if(this.frameTimeoutId)clearTimeout(this.frameTimeoutId),this.frameTimeoutId=null;if(this.rawFallbackAttempted||this.protocolRecovering)return;this.frameTimeoutId=setTimeout(()=>{if(this.hasRenderedFrame||this.rawFallbackAttempted||this.protocolRecovering)return;if(this.protocol&&this.socketBoundary)this.rawFallbackAttempted=!0,this.protocolRecovering=!0,this.setStatus("No framebuffer update yet; retrying with RAW encoding."),this.updateDisplayInfo("No framebuffer update yet. Retrying with RAW encoding."),this.updateDisplayMeta("reconnect-encoding-fallback"),this.connectWithEncodings("0")},2200)}applyRemoteDisplayEvent(_){if(!_)return;switch(_.type){case"protocol-version":this.setStatus(`Negotiated ${_.protocol.toUpperCase()} ${_.server} → ${_.client}.`),this.updateDisplayInfo(`Negotiated ${_.server} → ${_.client}.`),this.updateDisplayMeta();return;case"security-types":this.setStatus(`Server offered security types: ${_.types.join(", ")||"none"}.`),this.updateDisplayInfo(`Security types: ${_.types.join(", ")||"none"}.`),this.updateDisplayMeta();return;case"security-selected":this.setStatus(`Using ${_.protocol.toUpperCase()} security type ${_.label}.`),this.updateDisplayInfo(`Security: ${_.label}.`),this.updateDisplayMeta();return;case"security-result":this.setStatus("Security negotiation complete. Waiting for server init…"),this.updateDisplayInfo("Security negotiation complete. Waiting for server init…"),this.updateDisplayMeta();return;case"display-init":this.ensureCanvasSize(_.width,_.height),this.setSessionChromeVisible(!1),this.setStatus(`Connected to ${this.targetLabel||this.targetId||"target"} — waiting for first framebuffer update (${_.width}×${_.height}).`),this.updateDisplayInfo(`Connected to ${_.name||this.targetLabel||this.targetId||"remote display"}. Waiting for first framebuffer update…`),this.updateDisplayMeta("awaiting-frame"),this.scheduleRawFallbackTimeout();return;case"framebuffer-update":if(this.frameTimeoutId)clearTimeout(this.frameTimeoutId),this.frameTimeoutId=null;let $=!1;for(let N of _.rects||[]){if(N.kind==="resize"){this.ensureCanvasSize(N.width,N.height);continue}if(N.kind==="copy"){this.ensureCanvasSize(_.width,_.height,{reveal:!0}),this.copyCanvasRect(N),$=!0;continue}if(N.kind==="rgba")this.ensureCanvasSize(_.width,_.height,{reveal:!0}),this.drawRgbaRect(N),$=!0}if($||this.hasRenderedFrame)this.protocolRecovering=!1,this.setStatus(`Rendering live framebuffer — ${_.width}×${_.height}.`),this.updateDisplayInfo(`Framebuffer update applied (${(_.rects||[]).length} rect${(_.rects||[]).length===1?"":"s"}).`),this.updateDisplayMeta();else this.setStatus(`Connected to ${this.targetLabel||this.targetId||"target"} — waiting for painted framebuffer data.`),this.updateDisplayInfo(`Framebuffer update received, but no paintable rects yet (${(_.rects||[]).length} rect${(_.rects||[]).length===1?"":"s"}).`),this.updateDisplayMeta("awaiting-frame"),this.scheduleRawFallbackTimeout();return;case"clipboard":this.setStatus("Remote clipboard updated."),this.updateDisplayInfo(`Clipboard text received (${_.text.length} chars).`),this.updateDisplayMeta();return;case"bell":this.setStatus("Remote display bell received."),this.updateDisplayInfo("Remote display bell received."),this.updateDisplayMeta();return}}async handleSocketMessage(_){if(_?.kind==="control"){let N=_.payload;if(N?.type==="vnc.error"){this.setStatus(`Proxy error: ${N.error||"Unknown error"}`),this.updateDisplayInfo(`Proxy error: ${N.error||"Unknown error"}`),this.updateDisplayMeta("proxy-error");return}if(N?.type==="vnc.connected"){let j=N?.target?.label||this.targetLabel||this.targetId;this.setStatus(`Connected to ${j}. Waiting for VNC/RFB data…`),this.updateDisplayInfo(`Connected to ${j}. Waiting for VNC handshake…`),this.updateDisplayMeta();return}if(N?.type==="pong")return;return}let $=this.protocol||(this.protocol=new I6);try{let N=_.data instanceof Blob?await _.data.arrayBuffer():_.data,j=$.receive(N);for(let Y of j.outgoing||[])this.socketBoundary?.send?.(Y);for(let Y of j.events||[])this.applyRemoteDisplayEvent(Y)}catch(N){let j=N?.message||"Unknown error";if(this.setSessionChromeVisible(!0),this.setStatus(`Display protocol error: ${j}`),this.updateDisplayInfo(`Display protocol error: ${j}`),this.updateDisplayMeta("protocol-error"),this.frameTimeoutId)clearTimeout(this.frameTimeoutId),this.frameTimeoutId=null;if(!this.rawFallbackAttempted&&!this.protocolRecovering&&/unexpected eof|zlib|decompress|protocol|buffer/i.test(j))this.rawFallbackAttempted=!0,this.protocolRecovering=!0,this.connectWithEncodings("0")}}async connectSocket(_=null){if(!this.targetId||this.disposed)return;if(this.protocolRecovering&&_==null)this.protocolRecovering=!1;try{this.socketBoundary?.dispose?.()}catch{}if(_==null)this.rawFallbackAttempted=!1,this.protocolRecovering=!1;let $=_==null?null:String(_).trim(),N=await $7(),j=N?{decodeRawRect:(L,Z,V,Q)=>N(L,Z,V,Q)}:{},Y=u8(this.authPassword);if(Y!==null)j.password=Y;if($)j.encodings=$;this.protocol=new I6(j),this.hasRenderedFrame=!1,this.frameTimeoutId=null,this.socketBoundary=new o5({url:nL(this.targetId),binaryType:"arraybuffer",onOpen:()=>{this.setStatus(`Connected to proxy for ${this.targetId}. Waiting for VNC/RFB data…`),this.updateDisplayInfo("WebSocket proxy connected. Waiting for handshake…"),this.updateDisplayMeta(),this.socketBoundary?.sendControl?.({type:"ping"})},onMetrics:(L)=>{this.applyMetrics(L)},onMessage:(L)=>{this.handleSocketMessage(L)},onClose:()=>{if(this.setSessionChromeVisible(!0),this.frameTimeoutId)clearTimeout(this.frameTimeoutId),this.frameTimeoutId=null;if(this.disposed)return;this.setStatus(this.bytesIn>0?`Proxy closed after receiving ${this.bytesIn} byte(s).`:"Proxy closed."),this.updateDisplayInfo(this.bytesIn>0?"Remote display transport closed after receiving data.":"Remote display transport closed."),this.updateDisplayMeta("closed")},onError:()=>{this.setSessionChromeVisible(!0),this.setStatus("WebSocket proxy connection failed."),this.updateDisplayInfo("WebSocket proxy connection failed."),this.updateDisplayMeta("socket-error")}}),this.socketBoundary.connect()}connectWithEncodings(_){return this.connectSocket(_)}async load(){this.setStatus("");try{let _=await iL(this.targetId);if(!_?.enabled){this.renderTargets(_),this.setStatus("");return}if(!this.targetId){this.renderTargets(_),this.setStatus("");return}this.renderTargetSession(_),await this.connectSocket()}catch(_){this.resetLiveSession(),this.bodyEl.innerHTML=`
                <div style="max-width:620px;text-align:center;padding:28px;border:1px dashed var(--border-color);border-radius:14px;background:var(--bg-secondary);">
                    <div style="font-size:32px;margin-bottom:10px;">⚠️</div>
                    <div style="font-weight:600;margin-bottom:6px;">Failed to load VNC session</div>
                    <div style="color:var(--text-secondary);font-size:13px;line-height:1.5;">${r4(_?.message||"Unknown error")}</div>
                </div>
            `,this.setStatus(`Session load failed: ${_?.message||"Unknown error"}`)}}getContent(){return}isDirty(){return!1}focus(){this.canvas?.focus?.(),this.root?.focus?.()}resize(){this.updateCanvasScale()}dispose(){if(this.disposed)return;this.disposed=!0,this.resetLiveSession(),this.root?.remove?.()}}var Q2={id:"vnc-viewer",label:"VNC",icon:"display",capabilities:["preview"],placement:"tabs",canHandle(_){let $=String(_?.path||"");return $===e_||$.startsWith(`${e_}/`)?9000:!1},mount(_,$){return new C7(_,$)}};function T4(_){return String(_||"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}function rL(_,$){let N=String(_||"").trim();if(!N)return N;if(/^[a-zA-Z][a-zA-Z\d+.-]*:/.test(N)||N.startsWith("#")||N.startsWith("data:")||N.startsWith("blob:"))return N;let j=N.match(/^([^?#]*)(\?[^#]*)?(#.*)?$/),Y=j?.[1]||N,L=j?.[2]||"",Z=j?.[3]||"",V=String($||"").split("/").slice(0,-1).join("/"),B=Y.startsWith("/")?Y:`${V?`${V}/`:""}${Y}`,U=[];for(let W of B.split("/")){if(!W||W===".")continue;if(W===".."){if(U.length>0)U.pop();continue}U.push(W)}let X=U.join("/");return`${L6(X)}${L}${Z}`}function h8(_){return _?.preview||null}function sL(_){let $=String(_||""),N=Math.max($.lastIndexOf("/"),$.lastIndexOf("\\")),j=N>=0?$.slice(N+1):$,Y=j.lastIndexOf(".");if(Y<=0||Y===j.length-1)return"none";return j.slice(Y+1)}function oL(_){if(!_)return"unknown";if(_.kind==="image")return"image";if(_.kind==="text")return _.content_type==="text/markdown"?"markdown":"text";if(_.kind==="binary")return"binary";return String(_.kind||"unknown")}function dL(_,$){let N=$?.path||_?.path||"",j=[];if($?.content_type)j.push(`<span><strong>type:</strong> ${T4($.content_type)}</span>`);if(typeof $?.size==="number")j.push(`<span><strong>size:</strong> ${T4(k_($.size))}</span>`);if($?.mtime)j.push(`<span><strong>modified:</strong> ${T4(n4($.mtime))}</span>`);if(j.push(`<span><strong>kind:</strong> ${T4(oL($))}</span>`),j.push(`<span><strong>extension:</strong> ${T4(sL(N))}</span>`),N)j.push(`<span><strong>path:</strong> ${T4(N)}</span>`);if($?.truncated)j.push("<span><strong>content:</strong> truncated</span>");return`<div class="workspace-preview-meta workspace-preview-meta-inline">${j.join("")}</div>`}function aL(_){let $=h8(_);if(!$)return'<div class="workspace-preview-text">No preview available.</div>';let N=dL(_,$);if($.kind==="image"){let j=$.url||($.path?L6($.path):"");return`${N}
            <div class="workspace-preview-image">
                <img src="${T4(j)}" alt="preview" />
            </div>
        `}if($.kind==="text"){if($.content_type==="text/markdown"){let j=X_($.text||"",null,{rewriteImageSrc:(Y)=>rL(Y,$.path||_?.path)});return`${N}<div class="workspace-preview-text">${j}</div>`}return`${N}<pre class="workspace-preview-text"><code>${T4($.text||"")}</code></pre>`}if($.kind==="binary")return`${N}<div class="workspace-preview-text">Binary file — download to view.</div>`;return`${N}<div class="workspace-preview-text">No preview available.</div>`}class q2{constructor(_,$){this.container=_,this.context=$,this.disposed=!1,this.host=document.createElement("div"),this.host.className="workspace-preview-render-host",this.host.tabIndex=0,this.container.appendChild(this.host),this.render()}render(){if(this.disposed)return;this.host.innerHTML=aL(this.context)}getContent(){let _=h8(this.context);return typeof _?.text==="string"?_.text:void 0}isDirty(){return!1}setContent(_,$){let N=h8(this.context);if(N&&N.kind==="text"){if(N.text=_,$!==void 0)N.mtime=$}if(this.context.content=_,$!==void 0)this.context.mtime=$;this.render()}focus(){this.host?.focus?.()}dispose(){if(this.disposed)return;this.disposed=!0,this.host?.remove(),this.container.innerHTML=""}}var X2={id:"workspace-markdown-preview",label:"Workspace Markdown Preview",icon:"preview",capabilities:["preview","readonly"],placement:"tabs",canHandle(_){let $=h8(_);if(_?.mode!=="view")return!1;if(!$||$.kind!=="text")return!1;return $.content_type==="text/markdown"?20:!1},mount(_,$){return new q2(_,$)}},U2={id:"workspace-preview-default",label:"Workspace Preview",icon:"preview",capabilities:["preview","readonly"],placement:"tabs",canHandle(_){if(_?.mode!=="view")return!1;return h8(_)||_?.path?1:!1},mount(_,$){return new q2(_,$)}};var tL=new Set([".docx",".doc",".odt",".rtf",".xlsx",".xls",".ods",".csv",".pptx",".ppt",".odp"]),eL={".docx":"Word Document",".doc":"Word (Legacy)",".odt":"OpenDocument Text",".rtf":"Rich Text",".xlsx":"Excel Spreadsheet",".xls":"Excel (Legacy)",".ods":"OpenDocument Spreadsheet",".csv":"CSV Data",".pptx":"PowerPoint",".ppt":"PowerPoint (Legacy)",".odp":"OpenDocument Presentation"},_Z={".docx":"\uD83D\uDCDD",".doc":"\uD83D\uDCDD",".odt":"\uD83D\uDCDD",".rtf":"\uD83D\uDCDD",".xlsx":"\uD83D\uDCCA",".xls":"\uD83D\uDCCA",".ods":"\uD83D\uDCCA",".csv":"\uD83D\uDCCA",".pptx":"\uD83D\uDCFD️",".ppt":"\uD83D\uDCFD️",".odp":"\uD83D\uDCFD️"};function T7(_){if(!_)return"";let $=_.lastIndexOf(".");if($<0)return"";return _.slice($).toLowerCase()}function I7(_){return _.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}class f7{container;disposed=!1;constructor(_,$){this.container=_;let N=$.path||"",j=N.split("/").pop()||"document",Y=T7(N),L=_Z[Y]||"\uD83D\uDCC4",Z=eL[Y]||"Office Document",V=document.createElement("div");V.style.cssText="width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:var(--bg-primary,#1a1a1a);",V.innerHTML=`
            <div style="text-align:center;max-width:360px;padding:24px;">
                <div style="font-size:56px;margin-bottom:12px;">${L}</div>
                <div style="font-size:14px;font-weight:600;color:var(--text-primary,#e0e0e0);margin-bottom:4px;word-break:break-word;">${I7(j)}</div>
                <div style="font-size:11px;color:var(--text-secondary,#888);margin-bottom:20px;">${I7(Z)}</div>
                <button id="ov-open-tab" style="padding:8px 20px;background:var(--accent-color,#1d9bf0);color:var(--accent-contrast-text,#fff);
                    border:none;border-radius:5px;font-size:13px;font-weight:500;cursor:pointer;
                    transition:background 0.15s;"
                    onmouseenter="this.style.background='var(--accent-hover,#1a8cd8)'"
                    onmouseleave="this.style.background='var(--accent-color,#1d9bf0)'">
                    Open in Tab
                </button>
            </div>
        `,_.appendChild(V);let Q=V.querySelector("#ov-open-tab");if(Q)Q.addEventListener("click",()=>{let B=new CustomEvent("office-viewer:open-tab",{bubbles:!0,detail:{path:N}});_.dispatchEvent(B)})}getContent(){return}isDirty(){return!1}focus(){}resize(){}dispose(){if(this.disposed)return;this.disposed=!0,this.container.innerHTML=""}}class S7{container;iframe=null;disposed=!1;constructor(_,$){this.container=_;let N=$.path||"",j=N.split("/").pop()||"document",Y=`/workspace/raw?path=${encodeURIComponent(N)}`,L=`/office-viewer/?url=${encodeURIComponent(Y)}&name=${encodeURIComponent(j)}`;this.iframe=document.createElement("iframe"),this.iframe.src=L,this.iframe.style.cssText="width:100%;height:100%;border:none;background:#1e1e1e;",_.appendChild(this.iframe)}getContent(){return}isDirty(){return!1}focus(){this.iframe?.focus()}resize(){}dispose(){if(this.disposed)return;if(this.disposed=!0,this.iframe)this.iframe.src="about:blank",this.iframe=null;this.container.innerHTML=""}}var G2={id:"office-viewer",label:"Office Viewer",icon:"file-text",capabilities:["readonly","preview"],placement:"tabs",canHandle(_){let $=T7(_?.path);if(!$||!tL.has($))return!1;return 50},mount(_,$){if($?.mode==="view")return new f7(_,$);return new S7(_,$)}};var $Z=/\.(csv|tsv)$/i;function R7(_){return _.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}class u7{container;disposed=!1;constructor(_,$){this.container=_;let N=$.path||"",j=N.split("/").pop()||"table.csv",Y=N.toLowerCase().endsWith(".tsv")?"TSV Table":"CSV Table",L=document.createElement("div");L.style.cssText="width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:var(--bg-primary,#1a1a1a);",L.innerHTML=`
            <div style="text-align:center;max-width:360px;padding:24px;">
                <div style="font-size:56px;margin-bottom:12px;">\uD83D\uDCCA</div>
                <div style="font-size:14px;font-weight:600;color:var(--text-primary,#e0e0e0);margin-bottom:4px;word-break:break-word;">${R7(j)}</div>
                <div style="font-size:11px;color:var(--text-secondary,#888);margin-bottom:20px;">${R7(Y)}</div>
                <button id="csv-open-tab" style="padding:8px 20px;background:var(--accent-color,#1d9bf0);color:var(--accent-contrast-text,#fff);
                    border:none;border-radius:5px;font-size:13px;font-weight:500;cursor:pointer;
                    transition:background 0.15s;"
                    onmouseenter="this.style.background='var(--accent-hover,#1a8cd8)'"
                    onmouseleave="this.style.background='var(--accent-color,#1d9bf0)'">
                    Open in Tab
                </button>
            </div>
        `,_.appendChild(L);let Z=L.querySelector("#csv-open-tab");if(Z)Z.addEventListener("click",()=>{let V=new CustomEvent("csv-viewer:open-tab",{bubbles:!0,detail:{path:N}});_.dispatchEvent(V)})}getContent(){return}isDirty(){return!1}focus(){}resize(){}dispose(){if(this.disposed)return;this.disposed=!0,this.container.innerHTML=""}}class b7{container;iframe=null;disposed=!1;constructor(_,$){this.container=_;let N=$.path||"",j=`/csv-viewer/?path=${encodeURIComponent(N)}`;this.iframe=document.createElement("iframe"),this.iframe.src=j,this.iframe.style.cssText="width:100%;height:100%;border:none;background:var(--bg-primary,#000);",_.appendChild(this.iframe)}getContent(){return}isDirty(){return!1}focus(){this.iframe?.focus()}resize(){}dispose(){if(this.disposed)return;if(this.disposed=!0,this.iframe)this.iframe.src="about:blank",this.iframe=null;this.container.innerHTML=""}}var W2={id:"csv-viewer",label:"CSV Viewer",icon:"table",capabilities:["readonly","preview"],placement:"tabs",canHandle(_){let $=_?.path||"";if(!$Z.test($))return!1;return 55},mount(_,$){if($?.mode==="view")return new u7(_,$);return new b7(_,$)}};var NZ=/\.pdf$/i;function jZ(_){return _.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}class v7{container;disposed=!1;constructor(_,$){this.container=_;let N=$.path||"",j=N.split("/").pop()||"document.pdf",Y=document.createElement("div");Y.style.cssText="width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:var(--bg-primary,#1a1a1a);",Y.innerHTML=`
            <div style="text-align:center;max-width:360px;padding:24px;">
                <div style="font-size:56px;margin-bottom:12px;">\uD83D\uDCC4</div>
                <div style="font-size:14px;font-weight:600;color:var(--text-primary,#e0e0e0);margin-bottom:4px;word-break:break-word;">${jZ(j)}</div>
                <div style="font-size:11px;color:var(--text-secondary,#888);margin-bottom:20px;">PDF Document</div>
                <button id="pdf-open-tab" style="padding:8px 20px;background:var(--accent-color,#1d9bf0);color:var(--accent-contrast-text,#fff);
                    border:none;border-radius:5px;font-size:13px;font-weight:500;cursor:pointer;
                    transition:background 0.15s;"
                    onmouseenter="this.style.background='var(--accent-hover,#1a8cd8)'"
                    onmouseleave="this.style.background='var(--accent-color,#1d9bf0)'">
                    Open in Tab
                </button>
            </div>
        `,_.appendChild(Y);let L=Y.querySelector("#pdf-open-tab");if(L)L.addEventListener("click",()=>{let Z=new CustomEvent("pdf-viewer:open-tab",{bubbles:!0,detail:{path:N}});_.dispatchEvent(Z)})}getContent(){return}isDirty(){return!1}focus(){}resize(){}dispose(){if(this.disposed)return;this.disposed=!0,this.container.innerHTML=""}}class m7{container;iframe=null;disposed=!1;constructor(_,$){this.container=_;let N=$.path||"",j=`/pdf-viewer/?path=${encodeURIComponent(N)}`;this.iframe=document.createElement("iframe"),this.iframe.src=j,this.iframe.style.cssText="width:100%;height:100%;border:none;background:#1e1e1e;",_.appendChild(this.iframe)}getContent(){return}isDirty(){return!1}focus(){this.iframe?.focus()}resize(){}dispose(){if(this.disposed)return;if(this.disposed=!0,this.iframe)this.iframe.src="about:blank",this.iframe=null;this.container.innerHTML=""}}var O2={id:"pdf-viewer",label:"PDF Viewer",icon:"file-text",capabilities:["readonly","preview"],placement:"tabs",canHandle(_){let $=_?.path||"";if(!NZ.test($))return!1;return 52},mount(_,$){if($?.mode==="view")return new v7(_,$);return new m7(_,$)}};var YZ=/\.(png|jpe?g|gif|webp|bmp|ico|svg)$/i;function z2(_){return _.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}class g7{container;disposed=!1;constructor(_,$){this.container=_;let N=$.path||"",j=N.split("/").pop()||"image",Y=`/workspace/raw?path=${encodeURIComponent(N)}`,L=document.createElement("div");L.style.cssText="width:100%;height:100%;display:flex;flex-direction:column;background:var(--bg-primary,#1a1a1a);",L.innerHTML=`
            <div style="flex:1;min-height:0;display:flex;align-items:center;justify-content:center;overflow:hidden;padding:16px;">
                <img src="${z2(Y)}" alt="${z2(j)}" style="max-width:100%;max-height:100%;object-fit:contain;border-radius:4px;" />
            </div>
            <div style="display:flex;align-items:center;justify-content:space-between;padding:8px 16px;border-top:1px solid var(--border-color,#333);flex-shrink:0;">
                <div style="font-size:12px;color:var(--text-secondary,#888);overflow:hidden;text-overflow:ellipsis;white-space:nowrap;min-width:0;">${z2(j)}</div>
                <button id="img-open-tab" style="padding:5px 14px;background:var(--accent-color,#1d9bf0);color:var(--accent-contrast-text,#fff);
                    border:none;border-radius:4px;font-size:12px;font-weight:500;cursor:pointer;flex-shrink:0;
                    transition:background 0.15s;"
                    onmouseenter="this.style.background='var(--accent-hover,#1a8cd8)'"
                    onmouseleave="this.style.background='var(--accent-color,#1d9bf0)'">
                    Open in Tab
                </button>
            </div>
        `,_.appendChild(L);let Z=L.querySelector("#img-open-tab");if(Z)Z.addEventListener("click",()=>{let V=new CustomEvent("image-viewer:open-tab",{bubbles:!0,detail:{path:N}});_.dispatchEvent(V)})}getContent(){return}isDirty(){return!1}focus(){}resize(){}dispose(){if(this.disposed)return;this.disposed=!0,this.container.innerHTML=""}}class h7{container;iframe=null;disposed=!1;constructor(_,$){this.container=_;let N=$.path||"",j=`/image-viewer/?path=${encodeURIComponent(N)}`;this.iframe=document.createElement("iframe"),this.iframe.src=j,this.iframe.style.cssText="width:100%;height:100%;border:none;background:var(--bg-primary,#000);",_.appendChild(this.iframe)}getContent(){return}isDirty(){return!1}focus(){this.iframe?.focus()}resize(){}dispose(){if(this.disposed)return;if(this.disposed=!0,this.iframe)this.iframe.src="about:blank",this.iframe=null;this.container.innerHTML=""}}var F2={id:"image-viewer",label:"Image Viewer",icon:"image",capabilities:["readonly","preview"],placement:"tabs",canHandle(_){let $=_?.path||"";if(!YZ.test($))return!1;return 48},mount(_,$){if($?.mode==="view")return new g7(_,$);return new h7(_,$)}};var LZ=/\.(mp4|m4v|mov|webm|ogv)$/i;function ZZ(_){return _.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}class c7{container;disposed=!1;constructor(_,$){this.container=_;let N=$.path||"",j=N.split("/").pop()||"video.mp4",Y=document.createElement("div");Y.style.cssText="width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:var(--bg-primary,#1a1a1a);",Y.innerHTML=`
            <div style="text-align:center;max-width:360px;padding:24px;">
                <div style="font-size:56px;margin-bottom:12px;">\uD83C\uDFAC</div>
                <div style="font-size:14px;font-weight:600;color:var(--text-primary,#e0e0e0);margin-bottom:4px;word-break:break-word;">${ZZ(j)}</div>
                <div style="font-size:11px;color:var(--text-secondary,#888);margin-bottom:20px;">Video File</div>
                <button id="video-open-tab" style="padding:8px 20px;background:var(--accent-color,#1d9bf0);color:var(--accent-contrast-text,#fff);
                    border:none;border-radius:5px;font-size:13px;font-weight:500;cursor:pointer;
                    transition:background 0.15s;"
                    onmouseenter="this.style.background='var(--accent-hover,#1a8cd8)'"
                    onmouseleave="this.style.background='var(--accent-color,#1d9bf0)'">
                    Open in Tab
                </button>
            </div>
        `,_.appendChild(Y);let L=Y.querySelector("#video-open-tab");if(L)L.addEventListener("click",()=>{let Z=new CustomEvent("video-viewer:open-tab",{bubbles:!0,detail:{path:N}});_.dispatchEvent(Z)})}getContent(){return}isDirty(){return!1}focus(){}resize(){}dispose(){if(this.disposed)return;this.disposed=!0,this.container.innerHTML=""}}class p7{container;iframe=null;disposed=!1;constructor(_,$){this.container=_;let N=$.path||"",j=`/video-viewer/?path=${encodeURIComponent(N)}`;this.iframe=document.createElement("iframe"),this.iframe.src=j,this.iframe.style.cssText="width:100%;height:100%;border:none;background:#111;",_.appendChild(this.iframe)}getContent(){return}isDirty(){return!1}focus(){this.iframe?.focus()}resize(){}dispose(){if(this.disposed)return;if(this.disposed=!0,this.iframe)this.iframe.src="about:blank",this.iframe=null;this.container.innerHTML=""}}var H2={id:"video-viewer",label:"Video Viewer",icon:"play-circle",capabilities:["readonly","preview"],placement:"tabs",canHandle(_){let $=_?.path||"";if(!LZ.test($))return!1;return 54},mount(_,$){if($?.mode==="view")return new c7(_,$);return new p7(_,$)}};function VZ(_){if(!_)return!1;let $=_.toLowerCase();return $.endsWith(".drawio")||$.endsWith(".drawio.xml")||$.endsWith(".drawio.svg")||$.endsWith(".drawio.png")}function BZ(_){return _.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}var D2='<mxfile host="app.diagrams.net"><diagram id="page-1" name="Page-1"><mxGraphModel dx="1260" dy="720" grid="1" gridSize="10" guides="1" tooltips="1" connect="1" arrows="1" fold="1" page="1" pageScale="1" pageWidth="850" pageHeight="1100" math="0" shadow="0"><root><mxCell id="0"/><mxCell id="1" parent="0"/></root></mxGraphModel></diagram></mxfile>';function i7(_){let $=String(_||"").trim();return $?$:D2}function KZ(_){let $=String(_||"").toLowerCase();if($.endsWith(".drawio.svg")||$.endsWith(".svg"))return"xmlsvg";if($.endsWith(".drawio.png")||$.endsWith(".png"))return"xmlpng";return"xml"}function QZ(_){let $="",N=32768;for(let j=0;j<_.length;j+=N)$+=String.fromCharCode(..._.subarray(j,j+N));return btoa($)}function qZ(_,$="*"){try{let N=(L)=>{let Z=_.parent||_.opener;if(!Z)return!1;return Z.postMessage(JSON.stringify({event:"workspace-export",...L}),$),!0},j=_.EditorUi;if(j?.prototype&&!j.prototype.__piclawWorkspaceSavePatched){let L=j.prototype.saveData;j.prototype.saveData=function(Z,V,Q,B,U,X){try{if(Z&&Q!=null&&N({filename:Z,format:V,data:Q,mimeType:B,base64Encoded:Boolean(U),defaultMode:X}))return}catch(W){console.warn("[drawio-pane] saveData intercept failed, falling back to native save",W)}return L.apply(this,arguments)},j.prototype.__piclawWorkspaceSavePatched=!0}let Y=_.App;if(Y?.prototype&&!Y.prototype.__piclawExportPatched){let L=Y.prototype.exportFile;Y.prototype.exportFile=function(Z,V,Q,B,U,X){try{if(V&&N({filename:V,data:Z,mimeType:Q,base64Encoded:Boolean(B),mode:U,folderId:X}))return}catch(W){console.warn("[drawio-pane] export intercept failed, falling back to native export",W)}return L.apply(this,arguments)},Y.prototype.__piclawExportPatched=!0}return Boolean(j?.prototype&&j.prototype.__piclawWorkspaceSavePatched||Y?.prototype&&Y.prototype.__piclawExportPatched)}catch{return!1}}async function n7(_,$){let N=new Uint8Array(await _.arrayBuffer());return`data:${_.headers.get("Content-Type")||$};base64,${QZ(N)}`}class l7{container;disposed=!1;constructor(_,$){this.container=_;let N=$.path||"",j=N.split("/").pop()||"diagram.drawio",Y=document.createElement("div");Y.style.cssText="width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:var(--bg-primary,#1a1a1a);",Y.innerHTML=`
            <div style="text-align:center;max-width:360px;padding:24px;">
                <div style="font-size:56px;margin-bottom:12px;">\uD83D\uDCD0</div>
                <div style="font-size:14px;font-weight:600;color:var(--text-primary,#e0e0e0);margin-bottom:4px;word-break:break-word;">${BZ(j)}</div>
                <div style="font-size:11px;color:var(--text-secondary,#888);margin-bottom:20px;">Draw.io Diagram</div>
                <button id="drawio-open-tab" style="padding:8px 20px;background:var(--accent-color,#1d9bf0);color:var(--accent-contrast-text,#fff);
                    border:none;border-radius:5px;font-size:13px;font-weight:500;cursor:pointer;
                    transition:background 0.15s;"
                    onmouseenter="this.style.background='var(--accent-hover,#1a8cd8)'"
                    onmouseleave="this.style.background='var(--accent-color,#1d9bf0)'">
                    Edit in Tab
                </button>
            </div>
        `,_.appendChild(Y);let L=Y.querySelector("#drawio-open-tab");if(L)L.addEventListener("click",()=>{let Z=new CustomEvent("drawio:open-tab",{bubbles:!0,detail:{path:N}});_.dispatchEvent(Z)})}getContent(){return}isDirty(){return!1}focus(){}resize(){}dispose(){if(this.disposed)return;this.disposed=!0,this.container.innerHTML=""}}class r7{container;iframe=null;overlay=null;disposed=!1;filePath;fileName;format;xmlData="";fileLoaded=!1;editorReady=!1;loadSent=!1;saveChain=Promise.resolve();onMessageBound;constructor(_,$){this.container=_,this.filePath=$.path||"",this.fileName=this.filePath.split("/").pop()||"diagram.drawio",this.format=KZ(this.filePath),this.onMessageBound=this.onMessage.bind(this);let N=document.createElement("div");N.style.cssText="position:relative;width:100%;height:100%;background:#1e1e1e;",this.overlay=document.createElement("div"),this.overlay.style.cssText="position:absolute;inset:0;display:flex;align-items:center;justify-content:center;color:#999;font:14px system-ui,sans-serif;z-index:1;pointer-events:none;",this.overlay.textContent="Loading draw.io editor…",N.appendChild(this.overlay);let Y=`/drawio/index.html?embed=1&proto=json&spin=1&modified=0&noSaveBtn=1&noExitBtn=1&saveAndExit=0&libraries=0&ui=dark&dark=${window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?"1":"0"}`;this.iframe=document.createElement("iframe"),this.iframe.src=Y,this.iframe.style.cssText="width:100%;height:100%;border:none;background:#1e1e1e;position:relative;z-index:0;",this.iframe.addEventListener("load",()=>{let L=()=>{if(!this.iframe?.contentWindow||this.disposed)return;if(qZ(this.iframe.contentWindow))return;setTimeout(L,250)};L()}),N.appendChild(this.iframe),_.appendChild(N),window.addEventListener("message",this.onMessageBound),this.loadFile()}async loadFile(){if(!this.filePath){this.xmlData=D2,this.fileLoaded=!0,this.trySendLoad();return}try{let _=await fetch(`/workspace/raw?path=${encodeURIComponent(this.filePath)}`);if(_.ok)if(this.format==="xmlsvg")this.xmlData=await n7(_,"image/svg+xml");else if(this.format==="xmlpng")this.xmlData=await n7(_,"image/png");else this.xmlData=i7(await _.text());else if(_.status===404)this.xmlData=D2;else throw Error(`HTTP ${_.status}`);this.fileLoaded=!0,this.trySendLoad()}catch(_){if(this.overlay)this.overlay.textContent=`Failed to load: ${_ instanceof Error?_.message:String(_)}`}}trySendLoad(){if(this.disposed||this.loadSent||!this.editorReady||!this.fileLoaded||!this.iframe?.contentWindow)return;if(this.loadSent=!0,this.iframe.contentWindow.postMessage(JSON.stringify({action:"load",xml:this.format==="xml"?i7(this.xmlData):this.xmlData,autosave:1,saveAndExit:"0",noSaveBtn:"1",noExitBtn:"1",title:this.fileName}),"*"),this.overlay)this.overlay.style.display="none"}queueSave(_,$){if(!this.filePath)return;this.saveChain=this.saveChain.then(async()=>{let N=await fetch("/drawio/save",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({path:this.filePath,format:_.format||this.format,xml:_.xml,data:_.data,mimeType:_.mimeType,filename:_.filename,base64Encoded:_.base64Encoded})});if(!N.ok)throw Error(`HTTP ${N.status}`);if($&&this.iframe?.contentWindow)this.iframe.contentWindow.postMessage(JSON.stringify({action:"status",message:"Saved",modified:!1}),"*")}).catch((N)=>{if(console.error("[drawio-pane] save failed:",N),this.overlay)this.overlay.style.display="flex",this.overlay.textContent=`Save failed: ${N instanceof Error?N.message:String(N)}`})}onMessage(_){if(this.disposed||_.source!==this.iframe?.contentWindow)return;let $;try{$=typeof _.data==="string"?JSON.parse(_.data):_.data}catch{return}switch($?.event){case"init":this.editorReady=!0,this.trySendLoad();break;case"autosave":if(this.format==="xml"){if(typeof $.xml==="string")this.queueSave({xml:$.xml,format:"xml"},!1)}else if(typeof $.xml==="string")this.xmlData=$.xml;break;case"save":if(this.format==="xml"){if(typeof $.xml==="string")this.queueSave({xml:$.xml,format:"xml"},!0)}else if(typeof $.xml==="string"&&this.iframe?.contentWindow)this.xmlData=$.xml,this.iframe.contentWindow.postMessage(JSON.stringify({action:"export",format:this.format,xml:$.xml,spinKey:"export"}),"*");break;case"export":if(typeof $.data==="string")this.queueSave({data:$.data,format:this.format,xml:typeof $.xml==="string"?$.xml:void 0},!0);break;case"workspace-export":if(typeof $.data==="string")this.queueSave({data:$.data,xml:typeof $.xml==="string"?$.xml:void 0,mimeType:typeof $.mimeType==="string"?$.mimeType:void 0,filename:typeof $.filename==="string"?$.filename:void 0,base64Encoded:Boolean($.base64Encoded),format:this.format},!0);break;case"exit":default:break}}getContent(){return}isDirty(){return!1}focus(){this.iframe?.focus()}resize(){}dispose(){if(this.disposed)return;if(this.disposed=!0,window.removeEventListener("message",this.onMessageBound),this.iframe)this.iframe.src="about:blank",this.iframe=null;this.overlay=null,this.container.innerHTML=""}}var J2={id:"drawio-editor",label:"Draw.io Editor",icon:"git-merge",capabilities:["edit","preview"],placement:"tabs",canHandle(_){if(!VZ(_?.path))return!1;return 60},mount(_,$){if($?.mode==="view")return new l7(_,$);return new r7(_,$)}};class s7{tabs=new Map;activeId=null;mruOrder=[];listeners=new Set;onChange(_){return this.listeners.add(_),()=>this.listeners.delete(_)}notify(){let _=this.getTabs(),$=this.activeId;for(let N of this.listeners)try{N(_,$)}catch{}}open(_,$){let N=this.tabs.get(_);if(!N)N={id:_,label:$||_.split("/").pop()||_,path:_,dirty:!1,pinned:!1},this.tabs.set(_,N);return this.activate(_),N}activate(_){if(!this.tabs.has(_))return;this.activeId=_,this.mruOrder=[_,...this.mruOrder.filter(($)=>$!==_)],this.notify()}close(_){if(!this.tabs.get(_))return!1;if(this.tabs.delete(_),this.mruOrder=this.mruOrder.filter((N)=>N!==_),this.activeId===_)this.activeId=this.mruOrder[0]||null;return this.notify(),!0}closeOthers(_){for(let[$,N]of this.tabs)if($!==_&&!N.pinned)this.tabs.delete($),this.mruOrder=this.mruOrder.filter((j)=>j!==$);if(this.activeId&&!this.tabs.has(this.activeId))this.activeId=_;this.notify()}closeAll(){for(let[_,$]of this.tabs)if(!$.pinned)this.tabs.delete(_),this.mruOrder=this.mruOrder.filter((N)=>N!==_);if(this.activeId&&!this.tabs.has(this.activeId))this.activeId=this.mruOrder[0]||null;this.notify()}setDirty(_,$){let N=this.tabs.get(_);if(!N||N.dirty===$)return;N.dirty=$,this.notify()}togglePin(_){let $=this.tabs.get(_);if(!$)return;$.pinned=!$.pinned,this.notify()}saveViewState(_,$){let N=this.tabs.get(_);if(N)N.viewState=$}getViewState(_){return this.tabs.get(_)?.viewState}rename(_,$,N){let j=this.tabs.get(_);if(!j)return;if(this.tabs.delete(_),j.id=$,j.path=$,j.label=N||$.split("/").pop()||$,this.tabs.set($,j),this.mruOrder=this.mruOrder.map((Y)=>Y===_?$:Y),this.activeId===_)this.activeId=$;this.notify()}getTabs(){return Array.from(this.tabs.values())}getActiveId(){return this.activeId}getActive(){return this.activeId?this.tabs.get(this.activeId)||null:null}get(_){return this.tabs.get(_)}get size(){return this.tabs.size}hasUnsaved(){for(let _ of this.tabs.values())if(_.dirty)return!0;return!1}getDirtyTabs(){return Array.from(this.tabs.values()).filter((_)=>_.dirty)}nextTab(){let _=this.getTabs();if(_.length<=1)return;let $=_.findIndex((j)=>j.id===this.activeId),N=_[($+1)%_.length];this.activate(N.id)}prevTab(){let _=this.getTabs();if(_.length<=1)return;let $=_.findIndex((j)=>j.id===this.activeId),N=_[($-1+_.length)%_.length];this.activate(N.id)}mruSwitch(){if(this.mruOrder.length>1)this.activate(this.mruOrder[1])}}var d0=new s7;var T6="workspaceExplorerScale",XZ=["compact","default","comfortable"],UZ=new Set(XZ),GZ={compact:{indentPx:14},default:{indentPx:16},comfortable:{indentPx:18}};function o7(_,$="default"){if(typeof _!=="string")return $;let N=_.trim().toLowerCase();return UZ.has(N)?N:$}function E2(){if(typeof window>"u")return{width:0,isTouch:!1};let _=Number(window.innerWidth)||0,$=Boolean(window.matchMedia?.("(pointer: coarse)")?.matches),N=Boolean(window.matchMedia?.("(hover: none)")?.matches),j=Number(globalThis.navigator?.maxTouchPoints||0)>0;return{width:_,isTouch:$||j&&N}}function WZ(_={}){let $=Math.max(0,Number(_.width)||0);if(Boolean(_.isTouch))return"comfortable";if($>0&&$<1180)return"comfortable";return"default"}function OZ(_,$={}){if(Boolean($.isTouch)&&_==="compact")return"default";return _}function A2(_={}){let $=WZ(_),N=_.stored?o7(_.stored,$):$;return OZ(N,_)}function d7(_){return GZ[o7(_)]}var zZ=60000,_9=(_)=>{if(!_||!_.name)return!1;if(_.path===".")return!1;return _.name.startsWith(".")};function FZ(_){let $=String(_||"").trim();if(!$||$.endsWith("/"))return!1;return Boolean(N1.resolve({path:$,mode:"edit"}))}function $9(_,$,N,j=0,Y=[]){if(!N&&_9(_))return Y;if(!_)return Y;if(Y.push({node:_,depth:j}),_.type==="dir"&&_.children&&$.has(_.path))for(let L of _.children)$9(L,$,N,j+1,Y);return Y}function a7(_,$,N){if(!_)return"";let j=[],Y=(L)=>{if(!N&&_9(L))return;if(j.push(L.type==="dir"?`d:${L.path}`:`f:${L.path}`),L.children&&$?.has(L.path))for(let Z of L.children)Y(Z)};return Y(_),j.join("|")}function k2(_,$){if(!$)return null;if(!_)return $;if(_.path!==$.path||_.type!==$.type)return $;let N=Array.isArray(_.children)?_.children:null,j=Array.isArray($.children)?$.children:null;if(!j)return _;let Y=N?new Map(N.map((V)=>[V?.path,V])):new Map,L=!N||N.length!==j.length,Z=j.map((V)=>{let Q=k2(Y.get(V.path),V);if(Q!==Y.get(V.path))L=!0;return Q});return L?{...$,children:Z}:_}function M2(_,$,N){if(!_)return _;if(_.path===$)return k2(_,N);if(!Array.isArray(_.children))return _;let j=!1,Y=_.children.map((L)=>{let Z=M2(L,$,N);if(Z!==L)j=!0;return Z});return j?{..._,children:Y}:_}var N9=4,y2=14,HZ=8,DZ=16;function j9(_){if(!_)return 0;if(_.type==="file"){let j=Math.max(0,Number(_.size)||0);return _.__bytes=j,j}let $=Array.isArray(_.children)?_.children:[],N=0;for(let j of $)N+=j9(j);return _.__bytes=N,N}function Y9(_,$=0){let N=Math.max(0,Number(_?.__bytes??_?.size??0)),j={name:_?.name||_?.path||".",path:_?.path||".",size:N,children:[]};if(!_||_.type!=="dir"||$>=N9)return j;let Y=Array.isArray(_.children)?_.children:[],L=[];for(let V of Y){let Q=Math.max(0,Number(V?.__bytes??V?.size??0));if(Q<=0)continue;if(V.type==="dir")L.push({kind:"dir",node:V,size:Q});else L.push({kind:"file",name:V.name,path:V.path,size:Q})}L.sort((V,Q)=>Q.size-V.size);let Z=L;if(L.length>y2){let V=L.slice(0,y2-1),Q=L.slice(y2-1),B=Q.reduce((U,X)=>U+X.size,0);V.push({kind:"other",name:`+${Q.length} more`,path:`${j.path}/[other]`,size:B}),Z=V}return j.children=Z.map((V)=>{if(V.kind==="dir")return Y9(V.node,$+1);return{name:V.name,path:V.path,size:V.size,children:[]}}),j}function t7(){if(typeof window>"u"||typeof document>"u")return!1;let{documentElement:_,body:$}=document,N=_?.getAttribute?.("data-theme")?.toLowerCase?.()||"";if(N==="dark")return!0;if(N==="light")return!1;if(_?.classList?.contains("dark")||$?.classList?.contains("dark"))return!0;if(_?.classList?.contains("light")||$?.classList?.contains("light"))return!1;return Boolean(window.matchMedia?.("(prefers-color-scheme: dark)")?.matches)}function L9(_,$,N){let j=((_+Math.PI/2)*180/Math.PI+360)%360,Y=N?Math.max(30,70-$*10):Math.max(34,66-$*8),L=N?Math.min(70,45+$*5):Math.min(60,42+$*4);return`hsl(${j.toFixed(1)} ${Y}% ${L}%)`}function f6(_,$,N,j){return{x:_+N*Math.cos(j),y:$+N*Math.sin(j)}}function x2(_,$,N,j,Y,L){let Z=Math.PI*2-0.0001,V=L-Y>Z?Y+Z:L,Q=f6(_,$,j,Y),B=f6(_,$,j,V),U=f6(_,$,N,V),X=f6(_,$,N,Y),W=V-Y>Math.PI?1:0;return[`M ${Q.x.toFixed(3)} ${Q.y.toFixed(3)}`,`A ${j} ${j} 0 ${W} 1 ${B.x.toFixed(3)} ${B.y.toFixed(3)}`,`L ${U.x.toFixed(3)} ${U.y.toFixed(3)}`,`A ${N} ${N} 0 ${W} 0 ${X.x.toFixed(3)} ${X.y.toFixed(3)}`,"Z"].join(" ")}var Z9={1:[26,46],2:[48,68],3:[70,90],4:[92,112]};function V9(_,$,N){let j=[],Y=[],L=Math.max(0,Number($)||0),Z=(V,Q,B,U)=>{let X=Array.isArray(V?.children)?V.children:[];if(!X.length)return;let W=Math.max(0,Number(V.size)||0);if(W<=0)return;let J=B-Q,E=Q;X.forEach((P,f)=>{let D=Math.max(0,Number(P.size)||0);if(D<=0)return;let y=D/W,C=E,u=f===X.length-1?B:E+J*y;if(E=u,u-C<0.003)return;let A=Z9[U];if(A){let v=L9(C,U,N);if(j.push({key:P.path,path:P.path,label:P.name,size:D,color:v,depth:U,startAngle:C,endAngle:u,innerRadius:A[0],outerRadius:A[1],d:x2(120,120,A[0],A[1],C,u)}),U===1)Y.push({key:P.path,name:P.name,size:D,pct:L>0?D/L*100:0,color:v})}if(U<N9)Z(P,C,u,U+1)})};return Z(_,-Math.PI/2,Math.PI*3/2,1),{segments:j,legend:Y}}function P2(_,$){if(!_||!$)return null;if(_.path===$)return _;let N=Array.isArray(_.children)?_.children:[];for(let j of N){let Y=P2(j,$);if(Y)return Y}return null}function B9(_,$,N,j){if(!N||N<=0)return{segments:[],legend:[]};let Y=Z9[1];if(!Y)return{segments:[],legend:[]};let L=-Math.PI/2,Z=Math.PI*3/2,V=L9(L,1,j),B=`${$||"."}/[files]`;return{segments:[{key:B,path:B,label:_,size:N,color:V,depth:1,startAngle:L,endAngle:Z,innerRadius:Y[0],outerRadius:Y[1],d:x2(120,120,Y[0],Y[1],L,Z)}],legend:[{key:B,name:_,size:N,pct:100,color:V}]}}function e7(_,$=!1,N=!1){if(!_)return null;let j=j9(_),Y=Y9(_,0),L=Y.size||j,{segments:Z,legend:V}=V9(Y,L,N);if(!Z.length&&L>0){let Q=B9("[files]",Y.path,L,N);Z=Q.segments,V=Q.legend}return{root:Y,totalSize:L,segments:Z,legend:V,truncated:$,isDarkTheme:N}}function JZ({payload:_}){if(!_)return null;let[$,N]=p(null),[j,Y]=p(_?.root?.path||"."),[L,Z]=p(()=>[_?.root?.path||"."]),[V,Q]=p(!1);c(()=>{let T=_?.root?.path||".";Y(T),Z([T]),N(null)},[_?.root?.path,_?.totalSize]),c(()=>{if(!j)return;Q(!0);let T=setTimeout(()=>Q(!1),180);return()=>clearTimeout(T)},[j]);let B=w0(()=>{return P2(_.root,j)||_.root},[_?.root,j]),U=B?.size||_.totalSize||0,{segments:X,legend:W}=w0(()=>{let T=V9(B,U,_.isDarkTheme);if(T.segments.length>0)return T;if(U<=0)return T;let i=B?.children?.length?"Total":"[files]";return B9(i,B?.path||_?.root?.path||".",U,_.isDarkTheme)},[B,U,_.isDarkTheme,_?.root?.path]),[J,E]=p(X),P=x(new Map),f=x(0);c(()=>{let T=P.current,i=new Map(X.map(($0)=>[$0.key,$0])),d=performance.now(),q0=220,l=($0)=>{let N0=Math.min(1,($0-d)/220),Y0=N0*(2-N0),L0=X.map((K0)=>{let W0=T.get(K0.key)||{startAngle:K0.startAngle,endAngle:K0.startAngle,innerRadius:K0.innerRadius,outerRadius:K0.innerRadius},F0=(i0,C0)=>i0+(C0-i0)*Y0,c0=F0(W0.startAngle,K0.startAngle),M0=F0(W0.endAngle,K0.endAngle),D0=F0(W0.innerRadius,K0.innerRadius),p0=F0(W0.outerRadius,K0.outerRadius);return{...K0,d:x2(120,120,D0,p0,c0,M0)}});if(E(L0),N0<1)f.current=requestAnimationFrame(l)};if(f.current)cancelAnimationFrame(f.current);return f.current=requestAnimationFrame(l),P.current=i,()=>{if(f.current)cancelAnimationFrame(f.current)}},[X]);let D=J.length?J:X,y=U>0?k_(U):"0 B",C=B?.name||"",A=(C&&C!=="."?C:"Total")||"Total",v=y,o=L.length>1,n=(T)=>{if(!T?.path)return;let i=P2(_.root,T.path);if(!i||!Array.isArray(i.children)||i.children.length===0)return;Z((d)=>[...d,i.path]),Y(i.path),N(null)},g=()=>{if(!o)return;Z((T)=>{let i=T.slice(0,-1);return Y(i[i.length-1]||_?.root?.path||"."),i}),N(null)};return O`
        <div class="workspace-folder-starburst">
            <svg viewBox="0 0 240 240" class=${`workspace-folder-starburst-svg${V?" is-zooming":""}`} role="img"
                aria-label=${`Folder sizes for ${B?.path||_?.root?.path||"."}`}
                data-segments=${D.length}
                data-base-size=${U}>
                ${D.map((T)=>O`
                    <path
                        key=${T.key}
                        d=${T.d}
                        fill=${T.color}
                        stroke="var(--bg-primary)"
                        stroke-width="1"
                        class=${`workspace-folder-starburst-segment${$?.key===T.key?" is-hovered":""}`}
                        onMouseEnter=${()=>N(T)}
                        onMouseLeave=${()=>N(null)}
                        onTouchStart=${()=>N(T)}
                        onTouchEnd=${()=>N(null)}
                        onClick=${()=>n(T)}
                    >
                        <title>${T.label} — ${k_(T.size)}</title>
                    </path>
                `)}
                <g
                    class=${`workspace-folder-starburst-center-hit${o?" is-drill":""}`}
                    onClick=${g}
                    role="button"
                    aria-label="Zoom out"
                >
                    <circle
                        cx="120"
                        cy="120"
                        r="24"
                        fill="var(--bg-secondary)"
                        stroke="var(--border-color)"
                        stroke-width="1"
                        class="workspace-folder-starburst-center"
                    />
                    <text x="120" y="114" text-anchor="middle" class="workspace-folder-starburst-total-label">${A}</text>
                    <text x="120" y="130" text-anchor="middle" class="workspace-folder-starburst-total-value">${v}</text>
                </g>
            </svg>
            ${W.length>0&&O`
                <div class="workspace-folder-starburst-legend">
                    ${W.slice(0,8).map((T)=>O`
                        <div key=${T.key} class="workspace-folder-starburst-legend-item">
                            <span class="workspace-folder-starburst-swatch" style=${`background:${T.color}`}></span>
                            <span class="workspace-folder-starburst-name" title=${T.name}>${T.name}</span>
                            <span class="workspace-folder-starburst-size">${k_(T.size)}</span>
                            <span class="workspace-folder-starburst-pct">${T.pct.toFixed(1)}%</span>
                        </div>
                    `)}
                </div>
            `}
            ${_.truncated&&O`
                <div class="workspace-folder-starburst-note">Preview is truncated by tree depth/entry limits.</div>
            `}
        </div>
    `}function EZ({mediaId:_}){let[$,N]=p(null);if(c(()=>{if(!_)return;$8(_).then(N).catch(()=>{})},[_]),!$)return null;let j=$.filename||"file",Y=$.metadata?.size?k_($.metadata.size):"";return O`
        <a href=${P_(_)} download=${j} class="file-attachment"
            onClick=${(L)=>L.stopPropagation()}>
            <svg class="file-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                <polyline points="14 2 14 8 20 8"/>
                <line x1="16" y1="13" x2="8" y2="13"/>
                <line x1="16" y1="17" x2="8" y2="17"/>
                <polyline points="10 9 9 9 8 9"/>
            </svg>
            <div class="file-info">
                <span class="file-name">${j}</span>
                ${Y&&O`<span class="file-size">${Y}</span>`}
            </div>
            <svg class="download-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                <polyline points="7 10 12 15 17 10"/>
                <line x1="12" y1="15" x2="12" y2="3"/>
            </svg>
        </a>
    `}function K9({onFileSelect:_,visible:$=!0,active:N=void 0,onOpenEditor:j,onOpenTerminalTab:Y,onOpenVncTab:L,onToggleTerminal:Z,terminalVisible:V=!1}){let[Q,B]=p(null),[U,X]=p(new Set(["."])),[W,J]=p(null),[E,P]=p(null),[f,D]=p(""),[y,C]=p(null),[u,A]=p(null),[v,o]=p(!0),[n,g]=p(!1),[T,i]=p(null),[d,q0]=p(()=>N8("workspaceShowHidden",!1)),[l,$0]=p(!1),[N0,Y0]=p(null),[L0,K0]=p(null),[G0,W0]=p(null),[F0,c0]=p(!1),[M0,D0]=p(null),[p0,i0]=p(()=>t7()),[C0,Q0]=p(()=>A2({stored:q_(T6),...E2()})),[P0,J0]=p(!1),Z0=x(U),k0=x(""),r0=x(null),m0=x(0),G1=x(new Set),P1=x(null),R0=x(new Map),n0=x(_),j1=x(j),V1=x(null),s0=x(null),T1=x(null),Y1=x(null),v1=x(null),B1=x(null),i1=x("."),g0=x(null),t1=x({path:null,dragging:!1,startX:0,startY:0}),Q1=x({path:null,dragging:!1,startX:0,startY:0}),W1=x({path:null,timer:0}),H1=x(!1),x0=x(0),D1=x(new Map),I0=x(null),f0=x(null),a0=x(null),l1=x(null),m=x(null),B0=x(null),E0=x(d),z0=x($),o0=x(N??$),e1=x(0),n1=x(G0),p_=x(l),w_=x(N0),__=x(null),t0=x({x:0,y:0}),f1=x(0),r1=x(null),S1=x(W),C_=x(E),I_=x(null),W4=x(y);n0.current=_,j1.current=j,c(()=>{Z0.current=U},[U]),c(()=>{E0.current=d},[d]),c(()=>{z0.current=$},[$]),c(()=>{o0.current=N??$},[N,$]),c(()=>{n1.current=G0},[G0]),c(()=>{if(typeof window>"u")return;let z=()=>{Q0(A2({stored:q_(T6),...E2()}))};z();let H=()=>z(),R=()=>z(),b=(j0)=>{if(!j0||j0.key===null||j0.key===T6)z()};window.addEventListener("resize",H),window.addEventListener("focus",R),window.addEventListener("storage",b);let a=window.matchMedia?.("(pointer: coarse)"),V0=window.matchMedia?.("(hover: none)"),X0=(j0,A0)=>{if(!j0)return;if(j0.addEventListener)j0.addEventListener("change",A0);else if(j0.addListener)j0.addListener(A0)},U0=(j0,A0)=>{if(!j0)return;if(j0.removeEventListener)j0.removeEventListener("change",A0);else if(j0.removeListener)j0.removeListener(A0)};return X0(a,H),X0(V0,H),()=>{window.removeEventListener("resize",H),window.removeEventListener("focus",R),window.removeEventListener("storage",b),U0(a,H),U0(V0,H)}},[]),c(()=>{let z=(H)=>{let R=H?.detail?.path;if(!R)return;let b=R.split("/"),a=[];for(let V0=1;V0<b.length;V0++)a.push(b.slice(0,V0).join("/"));if(a.length)X((V0)=>{let X0=new Set(V0);X0.add(".");for(let U0 of a)X0.add(U0);return X0});J(R),requestAnimationFrame(()=>{let V0=document.querySelector(`[data-path="${CSS.escape(R)}"]`);if(V0)V0.scrollIntoView({block:"nearest",behavior:"smooth"})})};return window.addEventListener("workspace-reveal-path",z),()=>window.removeEventListener("workspace-reveal-path",z)},[]),c(()=>{p_.current=l},[l]),c(()=>{w_.current=N0},[N0]),c(()=>{S1.current=W},[W]),c(()=>{C_.current=E},[E]),c(()=>{W4.current=y},[y]),c(()=>{if(typeof window>"u"||typeof document>"u")return;let z=()=>i0(t7());z();let H=window.matchMedia?.("(prefers-color-scheme: dark)"),R=()=>z();if(H?.addEventListener)H.addEventListener("change",R);else if(H?.addListener)H.addListener(R);let b=typeof MutationObserver<"u"?new MutationObserver(()=>z()):null;if(b?.observe(document.documentElement,{attributes:!0,attributeFilter:["class","data-theme"]}),document.body)b?.observe(document.body,{attributes:!0,attributeFilter:["class","data-theme"]});return()=>{if(H?.removeEventListener)H.removeEventListener("change",R);else if(H?.removeListener)H.removeListener(R);b?.disconnect()}},[]),c(()=>{if(!E)return;let z=v1.current;if(!z)return;let H=requestAnimationFrame(()=>{try{z.focus(),z.select()}catch{}});return()=>cancelAnimationFrame(H)},[E]),c(()=>{if(!P0)return;let z=(R)=>{let b=R?.target;if(!(b instanceof Element))return;if(m.current?.contains(b))return;if(B0.current?.contains(b))return;J0(!1)},H=(R)=>{if(R?.key==="Escape")J0(!1),B0.current?.focus?.()};return document.addEventListener("mousedown",z),document.addEventListener("touchstart",z,{passive:!0}),document.addEventListener("keydown",H),()=>{document.removeEventListener("mousedown",z),document.removeEventListener("touchstart",z),document.removeEventListener("keydown",H)}},[P0]);let O4=async(z)=>{g(!0),C(null),A(null);try{let H=await W5(z,20000);C(H)}catch(H){C({error:H.message||"Failed to load preview"})}finally{g(!1)}};V1.current=O4;let $_=async()=>{if(!z0.current)return;try{let z=await y8("",1,E0.current),H=a7(z.root,Z0.current,E0.current);if(H===k0.current){o(!1);return}if(k0.current=H,r0.current=z.root,!m0.current)m0.current=requestAnimationFrame(()=>{m0.current=0,B((R)=>k2(R,r0.current)),o(!1)})}catch(z){i(z.message||"Failed to load workspace"),o(!1)}},i_=async(z)=>{if(!z)return;if(G1.current.has(z))return;G1.current.add(z);try{let H=await y8(z,1,E0.current);B((R)=>M2(R,z,H.root))}catch(H){i(H.message||"Failed to load workspace")}finally{G1.current.delete(z)}};s0.current=i_;let L1=I(()=>{let z=W;if(!z)return".";let H=R0.current?.get(z);if(H&&H.type==="dir")return H.path;if(z==="."||!z.includes("/"))return".";let R=z.split("/");return R.pop(),R.join("/")||"."},[W]),_4=I((z)=>{let H=z?.closest?.(".workspace-row");if(!H)return null;let R=H.dataset.path,b=H.dataset.type;if(!R)return null;if(b==="dir")return R;if(R.includes("/")){let a=R.split("/");return a.pop(),a.join("/")||"."}return"."},[]),G_=I((z)=>{return _4(z?.target||null)},[_4]),h0=I((z)=>{n1.current=z,W0(z)},[]),O1=I(()=>{let z=W1.current;if(z?.timer)clearTimeout(z.timer);W1.current={path:null,timer:0}},[]),u0=I((z)=>{if(!z||z==="."){O1();return}let H=R0.current?.get(z);if(!H||H.type!=="dir"){O1();return}if(Z0.current?.has(z)){O1();return}if(W1.current?.path===z)return;O1();let R=setTimeout(()=>{W1.current={path:null,timer:0},s0.current?.(z),X((b)=>{let a=new Set(b);return a.add(z),a})},600);W1.current={path:z,timer:R}},[O1]),R1=I((z,H)=>{if(t0.current={x:z,y:H},f1.current)return;f1.current=requestAnimationFrame(()=>{f1.current=0;let R=__.current;if(!R)return;let b=t0.current;R.style.transform=`translate(${b.x+12}px, ${b.y+12}px)`})},[]),J1=I((z)=>{if(!z)return;let R=(R0.current?.get(z)?.name||z.split("/").pop()||z).trim();if(!R)return;K0({path:z,label:R})},[]),$4=I(()=>{if(K0(null),f1.current)cancelAnimationFrame(f1.current),f1.current=0;if(__.current)__.current.style.transform="translate(-9999px, -9999px)"},[]),z4=I((z)=>{if(!z)return".";let H=R0.current?.get(z);if(H&&H.type==="dir")return H.path;if(z==="."||!z.includes("/"))return".";let R=z.split("/");return R.pop(),R.join("/")||"."},[]),W_=I(()=>{P(null),D("")},[]),f4=I((z)=>{if(!z)return;let R=(R0.current?.get(z)?.name||z.split("/").pop()||z).trim();if(!R||z===".")return;P(z),D(R)},[]),p8=I(async()=>{let z=C_.current;if(!z)return;let H=(f||"").trim();if(!H){W_();return}let R=R0.current?.get(z),b=(R?.name||z.split("/").pop()||z).trim();if(H===b){W_();return}try{let V0=(await F5(z,H))?.path||z,X0=z.includes("/")?z.split("/").slice(0,-1).join("/")||".":".";if(W_(),i(null),window.dispatchEvent(new CustomEvent("workspace-file-renamed",{detail:{oldPath:z,newPath:V0,type:R?.type||"file"}})),R?.type==="dir")X((U0)=>{let j0=new Set;for(let A0 of U0)if(A0===z)j0.add(V0);else if(A0.startsWith(`${z}/`))j0.add(`${V0}${A0.slice(z.length)}`);else j0.add(A0);return j0});if(J(V0),R?.type==="dir")C(null),g(!1),A(null);else V1.current?.(V0);s0.current?.(X0)}catch(a){i(a?.message||"Failed to rename file")}},[W_,f]),s4=I(async(z)=>{let b=z||".";for(let a=0;a<50;a+=1){let X0=`untitled${a===0?"":`-${a}`}.md`;try{let j0=(await z5(b,X0,""))?.path||(b==="."?X0:`${b}/${X0}`);if(b&&b!==".")X((A0)=>new Set([...A0,b]));J(j0),i(null),s0.current?.(b),V1.current?.(j0);return}catch(U0){if(U0?.status===409||U0?.code==="file_exists")continue;i(U0?.message||"Failed to create file");return}}i("Failed to create file (untitled name already in use).")},[]),O_=I((z)=>{if(z?.stopPropagation?.(),F0)return;let H=z4(S1.current);s4(H)},[F0,z4,s4]);c(()=>{if(typeof window>"u")return;let z=(H)=>{let R=H?.detail?.updates||[];if(!Array.isArray(R)||R.length===0)return;B((U0)=>{let j0=U0;for(let A0 of R){if(!A0?.root)continue;if(!j0||A0.path==="."||!A0.path)j0=A0.root;else j0=M2(j0,A0.path,A0.root)}if(j0)k0.current=a7(j0,Z0.current,E0.current);return o(!1),j0});let b=S1.current;if(Boolean(b)&&R.some((U0)=>{let j0=U0?.path||"";if(!j0||j0===".")return!0;return b===j0||b.startsWith(`${j0}/`)||j0.startsWith(`${b}/`)}))D1.current.clear();if(!b||!W4.current)return;let V0=R0.current?.get(b);if(V0&&V0.type==="dir")return;if(R.some((U0)=>{let j0=U0?.path||"";if(!j0||j0===".")return!0;return b===j0||b.startsWith(`${j0}/`)}))V1.current?.(b)};return window.addEventListener("workspace-update",z),()=>window.removeEventListener("workspace-update",z)},[]),P1.current=$_;let X8=x(()=>{if(typeof window>"u")return;let z=window.matchMedia("(min-width: 1024px) and (orientation: landscape)"),H=o0.current??z0.current,R=document.visibilityState!=="hidden"&&(H||z.matches&&z0.current);M8(R,E0.current).catch(()=>{})}).current,N_=x(0),j_=x(()=>{if(N_.current)clearTimeout(N_.current);N_.current=setTimeout(()=>{N_.current=0,X8()},250)}).current;c(()=>{if(z0.current)P1.current?.();j_()},[$,N]),c(()=>{P1.current(),X8();let z=setInterval(()=>P1.current(),zZ),H=j8("previewHeight",null),R=Number.isFinite(H)?Math.min(Math.max(H,80),600):280;if(x0.current=R,T1.current)T1.current.style.setProperty("--preview-height",`${R}px`);let b=window.matchMedia("(min-width: 1024px) and (orientation: landscape)"),a=()=>j_();if(b.addEventListener)b.addEventListener("change",a);else if(b.addListener)b.addListener(a);return document.addEventListener("visibilitychange",a),()=>{if(clearInterval(z),m0.current)cancelAnimationFrame(m0.current),m0.current=0;if(b.removeEventListener)b.removeEventListener("change",a);else if(b.removeListener)b.removeListener(a);if(document.removeEventListener("visibilitychange",a),N_.current)clearTimeout(N_.current),N_.current=0;if(g0.current)clearTimeout(g0.current),g0.current=null;M8(!1,E0.current).catch(()=>{})}},[]);let n_=w0(()=>$9(Q,U,d),[Q,U,d]),z_=w0(()=>new Map(n_.map((z)=>[z.node.path,z.node])),[n_]),m1=w0(()=>d7(C0),[C0]);R0.current=z_;let b0=(W?R0.current.get(W):null)?.type==="dir";c(()=>{if(!W||!b0){D0(null),I0.current=null,f0.current=null;return}let z=W,H=`${d?"hidden":"visible"}:${W}`,R=D1.current,b=R.get(H);if(b?.root){R.delete(H),R.set(H,b);let X0=e7(b.root,Boolean(b.truncated),p0);if(X0)I0.current=X0,f0.current=W,D0({loading:!1,error:null,payload:X0});return}let a=I0.current,V0=f0.current;D0({loading:!0,error:null,payload:V0===W?a:null}),y8(W,HZ,d).then((X0)=>{if(S1.current!==z)return;let U0={root:X0?.root,truncated:Boolean(X0?.truncated)};R.delete(H),R.set(H,U0);while(R.size>DZ){let A0=R.keys().next().value;if(!A0)break;R.delete(A0)}let j0=e7(U0.root,U0.truncated,p0);I0.current=j0,f0.current=W,D0({loading:!1,error:null,payload:j0})}).catch((X0)=>{if(S1.current!==z)return;D0({loading:!1,error:X0?.message||"Failed to load folder size chart",payload:V0===W?a:null})})},[W,b0,d,p0]);let Y_=Boolean(y&&y.kind==="text"&&!b0&&(!y.size||y.size<=262144)),F4=Y_?"Open in editor":y?.size>262144?"File too large to edit":"File is not editable",H4=Boolean(W&&W!=="."),T_=Boolean(W&&!b0),F_=Boolean(W&&!b0),B_=W&&b0?Z6(W,d):null,E1=I(()=>J0(!1),[]),K1=I(async(z)=>{E1();try{await z?.()}catch{}},[E1]);c(()=>{let z=a0.current;if(l1.current)l1.current.dispose(),l1.current=null;if(!z)return;if(z.innerHTML="",!W||b0||!y||y.error)return;let H={path:W,content:typeof y.text==="string"?y.text:void 0,mtime:y.mtime,size:y.size,preview:y,mode:"view"},R=N1.resolve(H)||N1.get("workspace-preview-default");if(!R)return;let b=R.mount(z,H);return l1.current=b,()=>{if(l1.current===b)b.dispose(),l1.current=null;z.innerHTML=""}},[W,b0,y]);let s1=(z)=>{let H=z?.target;if(H instanceof Element)return H;return H?.parentElement||null},w1=(z)=>{return Boolean(z?.closest?.(".workspace-node-icon, .workspace-label-text"))},N4=x((z)=>{let H=s1(z),R=H?.closest?.("[data-path]");if(!R)return;let b=R.dataset.path;if(!b||b===".")return;let a=Boolean(H?.closest?.("button"))||Boolean(H?.closest?.("a"))||Boolean(H?.closest?.("input")),V0=Boolean(H?.closest?.(".workspace-caret"));if(a||V0)return;if(C_.current===b)return;f4(b)}).current,j4=x((z)=>{if(H1.current){H1.current=!1;return}let H=s1(z),R=H?.closest?.("[data-path]");if(Y1.current?.focus?.(),!R)return;let b=R.dataset.path,a=R.dataset.type,V0=Boolean(H?.closest?.(".workspace-caret")),X0=Boolean(H?.closest?.("button"))||Boolean(H?.closest?.("a"))||Boolean(H?.closest?.("input")),U0=S1.current===b,j0=C_.current;if(j0){if(j0===b)return;W_()}let A0=a==="file"&&I_.current===b&&!V0&&!X0;if(a==="dir"){if(I_.current=null,J(b),C(null),A(null),g(!1),!Z0.current.has(b))s0.current?.(b);if(U0&&!V0)return;X((A1)=>{let G=new Set(A1);if(G.has(b))G.delete(b);else G.add(b);return G})}else{I_.current=null,J(b);let q1=R0.current.get(b);if(q1)n0.current?.(q1.path,q1);if(!X0&&!V0&&FZ(b))j1.current?.(b,W4.current);else V1.current?.(b)}}).current,D4=x(()=>{k0.current="",P1.current(),Array.from(Z0.current||[]).filter((H)=>H&&H!==".").forEach((H)=>s0.current?.(H))}).current,o1=x(()=>{I_.current=null,J(null),C(null),A(null),g(!1)}).current,Y4=x(()=>{q0((z)=>{let H=!z;if(typeof window<"u")Z1("workspaceShowHidden",String(H));return E0.current=H,M8(!0,H).catch(()=>{}),k0.current="",P1.current?.(),Array.from(Z0.current||[]).filter((b)=>b&&b!==".").forEach((b)=>s0.current?.(b)),H})}).current,S4=x((z)=>{if(s1(z)?.closest?.("[data-path]"))return;o1()}).current,f_=I(async(z)=>{if(!z)return;let H=z.split("/").pop()||z;if(!window.confirm(`Delete "${H}"? This cannot be undone.`))return;try{await D5(z);let b=z.includes("/")?z.split("/").slice(0,-1).join("/")||".":".";if(S1.current===z)o1();s0.current?.(b),i(null)}catch(b){C((a)=>({...a||{},error:b.message||"Failed to delete file"}))}},[o1]),H_=I((z)=>{let H=Y1.current;if(!H||!z||typeof CSS>"u"||typeof CSS.escape!=="function")return;H.querySelector(`[data-path="${CSS.escape(z)}"]`)?.scrollIntoView?.({block:"nearest"})},[]),K_=I((z)=>{let H=n_;if(!H||H.length===0)return;let R=W?H.findIndex((b)=>b.node.path===W):-1;if(z.key==="ArrowDown"){z.preventDefault();let b=Math.min(R+1,H.length-1),a=H[b];if(!a)return;if(J(a.node.path),a.node.type!=="dir")n0.current?.(a.node.path,a.node),V1.current?.(a.node.path);else C(null),g(!1),A(null);H_(a.node.path);return}if(z.key==="ArrowUp"){z.preventDefault();let b=R<=0?0:R-1,a=H[b];if(!a)return;if(J(a.node.path),a.node.type!=="dir")n0.current?.(a.node.path,a.node),V1.current?.(a.node.path);else C(null),g(!1),A(null);H_(a.node.path);return}if(z.key==="ArrowRight"&&R>=0){let b=H[R];if(b?.node?.type==="dir"&&!U.has(b.node.path))z.preventDefault(),s0.current?.(b.node.path),X((a)=>new Set([...a,b.node.path]));return}if(z.key==="ArrowLeft"&&R>=0){let b=H[R];if(b?.node?.type==="dir"&&U.has(b.node.path))z.preventDefault(),X((a)=>{let V0=new Set(a);return V0.delete(b.node.path),V0});return}if(z.key==="Enter"&&R>=0){z.preventDefault();let b=H[R];if(!b)return;let a=b.node.path;if(b.node.type==="dir"){if(!Z0.current.has(a))s0.current?.(a);X((X0)=>{let U0=new Set(X0);if(U0.has(a))U0.delete(a);else U0.add(a);return U0}),C(null),A(null),g(!1)}else n0.current?.(a,b.node),V1.current?.(a);return}if((z.key==="Delete"||z.key==="Backspace")&&R>=0){let b=H[R];if(!b||b.node.type==="dir")return;z.preventDefault(),f_(b.node.path);return}if(z.key==="Escape")z.preventDefault(),o1()},[o1,f_,U,n_,H_,W]),S_=I((z)=>{let H=s1(z),R=H?.closest?.(".workspace-row");if(!R)return;let b=R.dataset.type,a=R.dataset.path;if(!a||a===".")return;if(C_.current===a)return;let V0=z?.touches?.[0];if(!V0)return;if(t1.current={path:w1(H)?a:null,dragging:!1,startX:V0.clientX,startY:V0.clientY},b!=="file")return;if(g0.current)clearTimeout(g0.current);g0.current=setTimeout(()=>{if(g0.current=null,t1.current?.dragging)return;f_(a)},600)},[f_]),g1=I(()=>{if(g0.current)clearTimeout(g0.current),g0.current=null;let z=t1.current;if(z?.dragging&&z.path){let H=n1.current||L1(),R=r1.current;if(typeof R==="function")R(z.path,H)}t1.current={path:null,dragging:!1,startX:0,startY:0},e1.current=0,$0(!1),Y0(null),h0(null),O1(),$4()},[L1,$4,h0,O1]),R4=I((z)=>{let H=t1.current,R=z?.touches?.[0];if(!R||!H?.path){if(g0.current)clearTimeout(g0.current),g0.current=null;return}let b=Math.abs(R.clientX-H.startX),a=Math.abs(R.clientY-H.startY),V0=b>8||a>8;if(V0&&g0.current)clearTimeout(g0.current),g0.current=null;if(!H.dragging&&V0)H.dragging=!0,$0(!0),Y0("move"),J1(H.path);if(H.dragging){z.preventDefault(),R1(R.clientX,R.clientY);let X0=document.elementFromPoint(R.clientX,R.clientY),U0=_4(X0)||L1();if(n1.current!==U0)h0(U0);u0(U0)}},[_4,L1,J1,R1,h0,u0]),u4=x((z)=>{z.preventDefault();let H=T1.current;if(!H)return;let R=z.clientY,b=x0.current||280,a=z.currentTarget;a.classList.add("dragging"),document.body.style.cursor="row-resize",document.body.style.userSelect="none";let V0=R,X0=(j0)=>{V0=j0.clientY;let A0=H.clientHeight-80,q1=Math.min(Math.max(b-(j0.clientY-R),80),A0);H.style.setProperty("--preview-height",`${q1}px`),x0.current=q1},U0=()=>{let j0=H.clientHeight-80,A0=Math.min(Math.max(b-(V0-R),80),j0);x0.current=A0,a.classList.remove("dragging"),document.body.style.cursor="",document.body.style.userSelect="",Z1("previewHeight",String(Math.round(A0))),document.removeEventListener("mousemove",X0),document.removeEventListener("mouseup",U0)};document.addEventListener("mousemove",X0),document.addEventListener("mouseup",U0)}).current,J4=x((z)=>{z.preventDefault();let H=T1.current;if(!H)return;let R=z.touches[0];if(!R)return;let b=R.clientY,a=x0.current||280,V0=z.currentTarget;V0.classList.add("dragging"),document.body.style.userSelect="none";let X0=(j0)=>{let A0=j0.touches[0];if(!A0)return;j0.preventDefault();let q1=H.clientHeight-80,A1=Math.min(Math.max(a-(A0.clientY-b),80),q1);H.style.setProperty("--preview-height",`${A1}px`),x0.current=A1},U0=()=>{V0.classList.remove("dragging"),document.body.style.userSelect="",Z1("previewHeight",String(Math.round(x0.current||a))),document.removeEventListener("touchmove",X0),document.removeEventListener("touchend",U0),document.removeEventListener("touchcancel",U0)};document.addEventListener("touchmove",X0,{passive:!1}),document.addEventListener("touchend",U0),document.addEventListener("touchcancel",U0)}).current,l_=async()=>{if(!W)return;try{let z=await O5(W);if(z.media_id)A(z.media_id)}catch(z){C((H)=>({...H||{},error:z.message||"Failed to attach"}))}},R_=async()=>{if(!W||b0)return;await f_(W)},L4=(z)=>{return Array.from(z?.dataTransfer?.types||[]).includes("Files")},u1=I((z)=>{if(!L4(z))return;if(z.preventDefault(),e1.current+=1,!p_.current)$0(!0);Y0("upload");let H=G_(z)||L1();h0(H),u0(H)},[L1,G_,h0,u0]),u_=I((z)=>{if(!L4(z))return;if(z.preventDefault(),z.dataTransfer)z.dataTransfer.dropEffect="copy";if(!p_.current)$0(!0);if(w_.current!=="upload")Y0("upload");let H=G_(z)||L1();if(n1.current!==H)h0(H);u0(H)},[L1,G_,h0,u0]),b_=I((z)=>{if(!L4(z))return;if(z.preventDefault(),e1.current=Math.max(0,e1.current-1),e1.current===0)$0(!1),Y0(null),h0(null),O1()},[h0,O1]),r_=I(async(z,H=".")=>{let R=Array.from(z||[]);if(R.length===0)return;let b=H&&H!==""?H:".",a=b!=="."?b:"workspace root";c0(!0);try{let V0=null;for(let X0 of R)try{V0=await Y6(X0,b)}catch(U0){let j0=U0?.status,A0=U0?.code;if(j0===409||A0==="file_exists"){let q1=X0?.name||"file";if(!window.confirm(`"${q1}" already exists in ${a}. Overwrite?`))continue;V0=await Y6(X0,b,{overwrite:!0})}else throw U0}if(V0?.path)I_.current=V0.path,J(V0.path),V1.current?.(V0.path);s0.current?.(b)}catch(V0){i(V0.message||"Failed to upload file")}finally{c0(!1)}},[]),E4=I(async(z,H)=>{if(!z)return;let R=R0.current?.get(z);if(!R)return;let b=H&&H!==""?H:".",a=z.includes("/")?z.split("/").slice(0,-1).join("/")||".":".";if(b===a)return;try{let X0=(await H5(z,b))?.path||z;if(R.type==="dir")X((U0)=>{let j0=new Set;for(let A0 of U0)if(A0===z)j0.add(X0);else if(A0.startsWith(`${z}/`))j0.add(`${X0}${A0.slice(z.length)}`);else j0.add(A0);return j0});if(J(X0),R.type==="dir")C(null),g(!1),A(null);else V1.current?.(X0);s0.current?.(a),s0.current?.(b)}catch(V0){i(V0?.message||"Failed to move entry")}},[]);r1.current=E4;let z1=I(async(z)=>{if(!L4(z))return;z.preventDefault(),e1.current=0,$0(!1),Y0(null),W0(null),O1();let H=Array.from(z?.dataTransfer?.files||[]);if(H.length===0)return;let R=n1.current||G_(z)||L1();await r_(H,R)},[L1,G_,r_]),A4=I((z)=>{if(z?.stopPropagation?.(),F0)return;let H=z?.currentTarget?.dataset?.uploadTarget||".";i1.current=H,B1.current?.click()},[F0]),d1=I(()=>{if(F0)return;let z=S1.current,H=z?R0.current?.get(z):null;i1.current=H?.type==="dir"?H.path:".",B1.current?.click()},[F0]),L_=I(()=>{K1(()=>O_(null))},[K1,O_]),D_=I(()=>{K1(()=>d1())},[K1,d1]),b4=I(()=>{K1(()=>D4())},[K1,D4]),y4=I(()=>{K1(()=>Y4())},[K1,Y4]),Z4=I(()=>{if(!W||!Y_)return;K1(()=>j1.current?.(W,y))},[K1,W,Y_,y]),v4=I(()=>{if(!W||W===".")return;K1(()=>f4(W))},[K1,W,f4]),s_=I(()=>{if(!W||b0)return;K1(()=>R_())},[K1,W,b0,R_]),m4=I(()=>{if(!W||b0)return;K1(()=>l_())},[K1,W,b0,l_]),o4=I(()=>{if(!B_)return;if(E1(),typeof window<"u")window.open(B_,"_blank","noopener")},[E1,B_]),M4=I(()=>{E1(),Y?.()},[E1,Y]),P4=I(()=>{E1(),L?.()},[E1,L]),v_=I(()=>{E1(),Z?.()},[E1,Z]),d4=I((z)=>{if(!z||z.button!==0)return;let H=z.currentTarget;if(!H||!H.dataset)return;let R=H.dataset.path;if(!R||R===".")return;if(C_.current===R)return;let b=s1(z);if(b?.closest?.("button, a, input, .workspace-caret"))return;if(!w1(b))return;z.preventDefault(),Q1.current={path:R,dragging:!1,startX:z.clientX,startY:z.clientY};let a=(X0)=>{let U0=Q1.current;if(!U0?.path)return;let j0=Math.abs(X0.clientX-U0.startX),A0=Math.abs(X0.clientY-U0.startY),q1=j0>4||A0>4;if(!U0.dragging&&q1)U0.dragging=!0,H1.current=!0,$0(!0),Y0("move"),J1(U0.path),R1(X0.clientX,X0.clientY),document.body.style.userSelect="none",document.body.style.cursor="grabbing";if(U0.dragging){X0.preventDefault(),R1(X0.clientX,X0.clientY);let A1=document.elementFromPoint(X0.clientX,X0.clientY),G=_4(A1)||L1();if(n1.current!==G)h0(G);u0(G)}},V0=()=>{document.removeEventListener("mousemove",a),document.removeEventListener("mouseup",V0);let X0=Q1.current;if(X0?.dragging&&X0.path){let U0=n1.current||L1(),j0=r1.current;if(typeof j0==="function")j0(X0.path,U0)}Q1.current={path:null,dragging:!1,startX:0,startY:0},e1.current=0,$0(!1),Y0(null),h0(null),O1(),$4(),document.body.style.userSelect="",document.body.style.cursor="",setTimeout(()=>{H1.current=!1},0)};document.addEventListener("mousemove",a),document.addEventListener("mouseup",V0)},[_4,L1,J1,R1,$4,h0,u0,O1]),V4=I(async(z)=>{let H=Array.from(z?.target?.files||[]);if(H.length===0)return;let R=i1.current||".";if(await r_(H,R),i1.current=".",z?.target)z.target.value=""},[r_]);return O`
        <aside
            class=${`workspace-sidebar${l?" workspace-drop-active":""}`}
            data-workspace-scale=${C0}
            ref=${T1}
            onDragEnter=${u1}
            onDragOver=${u_}
            onDragLeave=${b_}
            onDrop=${z1}
        >
            <input type="file" multiple style="display:none" ref=${B1} onChange=${V4} />
            <div class="workspace-header">
                <div class="workspace-header-left">
                    <div class="workspace-menu-wrap">
                        <button
                            ref=${B0}
                            class=${`workspace-menu-button${P0?" active":""}`}
                            onClick=${(z)=>{z.stopPropagation(),J0((H)=>!H)}}
                            title="Workspace actions"
                            aria-label="Workspace actions"
                            aria-haspopup="menu"
                            aria-expanded=${P0?"true":"false"}
                        >
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                <line x1="4" y1="7" x2="20" y2="7" />
                                <line x1="4" y1="12" x2="20" y2="12" />
                                <line x1="4" y1="17" x2="20" y2="17" />
                            </svg>
                        </button>
                        ${P0&&O`
                            <div class="workspace-menu-dropdown" ref=${m} role="menu" aria-label="Workspace options">
                                <button class="workspace-menu-item" role="menuitem" onClick=${L_} disabled=${F0}>New file</button>
                                <button class="workspace-menu-item" role="menuitem" onClick=${D_} disabled=${F0}>Upload files</button>
                                <button class="workspace-menu-item" role="menuitem" onClick=${b4}>Refresh tree</button>
                                <button class=${`workspace-menu-item${d?" active":""}`} role="menuitem" onClick=${y4}>
                                    ${d?"Hide hidden files":"Show hidden files"}
                                </button>

                                ${W&&O`<div class="workspace-menu-separator"></div>`}
                                ${W&&!b0&&O`
                                    <button class="workspace-menu-item" role="menuitem" onClick=${Z4} disabled=${!Y_}>Open in editor</button>
                                `}
                                ${H4&&O`
                                    <button class="workspace-menu-item" role="menuitem" onClick=${v4}>Rename selected</button>
                                `}
                                ${F_&&O`
                                    <button class="workspace-menu-item" role="menuitem" onClick=${m4}>Download selected file</button>
                                `}
                                ${B_&&O`
                                    <button class="workspace-menu-item" role="menuitem" onClick=${o4}>Download selected folder (zip)</button>
                                `}
                                ${T_&&O`
                                    <button class="workspace-menu-item danger" role="menuitem" onClick=${s_}>Delete selected file</button>
                                `}

                                ${(Y||L||Z)&&O`<div class="workspace-menu-separator"></div>`}
                                ${Y&&O`
                                    <button class="workspace-menu-item" role="menuitem" onClick=${M4}>
                                        Open terminal in tab
                                    </button>
                                `}
                                ${L&&O`
                                    <button class="workspace-menu-item" role="menuitem" onClick=${P4}>
                                        Open VNC in tab
                                    </button>
                                `}
                                ${Z&&O`
                                    <button class="workspace-menu-item" role="menuitem" onClick=${v_}>
                                        ${V?"Hide terminal dock":"Show terminal dock"}
                                    </button>
                                `}
                            </div>
                        `}
                    </div>
                    <span>Workspace</span>
                </div>
                <div class="workspace-header-actions">
                    <button class="workspace-create" onClick=${O_} title="New file" disabled=${F0}>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                            stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                            <line x1="12" y1="5" x2="12" y2="19" />
                            <line x1="5" y1="12" x2="19" y2="12" />
                        </svg>
                    </button>
                    <button class="workspace-refresh" onClick=${D4} title="Refresh">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"
                            stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                            <circle cx="12" cy="12" r="8.5" stroke-dasharray="42 12" stroke-dashoffset="6"
                                transform="rotate(75 12 12)" />
                            <polyline points="21 3 21 9 15 9" />
                        </svg>
                    </button>
                </div>
            </div>
            <div class="workspace-tree" onClick=${S4}>
                ${F0&&O`<div class="workspace-drop-hint">Uploading…</div>`}
                ${v&&O`<div class="workspace-loading">Loading…</div>`}
                ${T&&O`<div class="workspace-error">${T}</div>`}
                ${Q&&O`
                    <div
                        class="workspace-tree-list"
                        ref=${Y1}
                        tabIndex="0"
                        onClick=${j4}
                        onDblClick=${N4}
                        onKeyDown=${K_}
                        onTouchStart=${S_}
                        onTouchEnd=${g1}
                        onTouchMove=${R4}
                        onTouchCancel=${g1}
                    >
                        ${n_.map(({node:z,depth:H})=>{let R=z.type==="dir",b=z.path===W,a=z.path===E,V0=R&&U.has(z.path),X0=G0&&z.path===G0,U0=Array.isArray(z.children)&&z.children.length>0?z.children.length:Number(z.child_count)||0;return O`
                                <div
                                    key=${z.path}
                                    class=${`workspace-row${b?" selected":""}${X0?" drop-target":""}`}
                                    style=${{paddingLeft:`${8+H*m1.indentPx}px`}}
                                    data-path=${z.path}
                                    data-type=${z.type}
                                    onMouseDown=${d4}
                                >
                                    <span class="workspace-caret" aria-hidden="true">
                                        ${R?V0?O`<svg viewBox="0 0 12 12"><polygon points="1,2 11,2 6,11"/></svg>`:O`<svg viewBox="0 0 12 12"><polygon points="2,1 11,6 2,11"/></svg>`:null}
                                    </span>
                                    <svg class=${`workspace-node-icon${R?" folder":""}`}
                                        viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                        stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                        aria-hidden="true">
                                        ${R?O`<path d="M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>`:O`<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/>`}
                                    </svg>
                                    ${a?O`
                                            <input
                                                class="workspace-rename-input"
                                                ref=${v1}
                                                value=${f}
                                                onInput=${(j0)=>D(j0?.target?.value||"")}
                                                onKeyDown=${(j0)=>{if(j0.key==="Enter")j0.preventDefault(),p8();else if(j0.key==="Escape")j0.preventDefault(),W_()}}
                                                onBlur=${W_}
                                                onClick=${(j0)=>j0.stopPropagation()}
                                            />
                                        `:O`<span class="workspace-label"><span class="workspace-label-text">${z.name}</span></span>`}
                                    ${R&&!V0&&U0>0&&O`
                                        <span class="workspace-count">${U0}</span>
                                    `}
                                    ${R&&O`
                                        <button
                                            class="workspace-folder-upload"
                                            data-upload-target=${z.path}
                                            title="Upload files to this folder"
                                            onClick=${A4}
                                            disabled=${F0}
                                        >
                                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                                stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                                                <polyline points="7 8 12 3 17 8"/>
                                                <line x1="12" y1="3" x2="12" y2="15"/>
                                            </svg>
                                        </button>
                                    `}
                                </div>
                            `})}
                    </div>
                `}
            </div>
            ${W&&O`
                <div class="workspace-preview-splitter-h" onMouseDown=${u4} onTouchStart=${J4}></div>
                <div class="workspace-preview">
                    <div class="workspace-preview-header">
                        <span class="workspace-preview-title">${W}</span>
                        <div class="workspace-preview-actions">
                            <button class="workspace-create" onClick=${O_} title="New file" disabled=${F0}>
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                    stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                    <line x1="12" y1="5" x2="12" y2="19" />
                                    <line x1="5" y1="12" x2="19" y2="12" />
                                </svg>
                            </button>
                            ${!b0&&O`
                                <button
                                    class="workspace-download workspace-edit"
                                    onClick=${()=>Y_&&j1.current?.(W,y)}
                                    title=${F4}
                                    disabled=${!Y_}
                                >
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                        stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                        <path d="M12 20h9" />
                                        <path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4Z" />
                                    </svg>
                                </button>
                                <button
                                    class="workspace-download workspace-delete"
                                    onClick=${R_}
                                    title="Delete file"
                                >
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                        stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                        <polyline points="3 6 5 6 21 6" />
                                        <path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                                        <path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6" />
                                        <line x1="10" y1="11" x2="10" y2="17" />
                                        <line x1="14" y1="11" x2="14" y2="17" />
                                    </svg>
                                </button>
                            `}
                            ${b0?O`
                                    <button class="workspace-download" onClick=${d1}
                                        title="Upload files to this folder" disabled=${F0}>
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                            stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                                            <polyline points="7 8 12 3 17 8"/>
                                            <line x1="12" y1="3" x2="12" y2="15"/>
                                        </svg>
                                    </button>
                                    <a class="workspace-download" href=${Z6(W,d)}
                                        title="Download folder as zip" onClick=${(z)=>z.stopPropagation()}>
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                            stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                                            <polyline points="7 10 12 15 17 10"/>
                                            <line x1="12" y1="15" x2="12" y2="3"/>
                                        </svg>
                                    </a>`:O`<button class="workspace-download" onClick=${l_} title="Download">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                        stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                                        <polyline points="7 10 12 15 17 10"/>
                                        <line x1="12" y1="15" x2="12" y2="3"/>
                                    </svg>
                                </button>`}
                        </div>
                    </div>
                    ${n&&O`<div class="workspace-loading">Loading preview…</div>`}
                    ${y?.error&&O`<div class="workspace-error">${y.error}</div>`}
                    ${b0&&O`
                        <div class="workspace-preview-text">Folder selected — create file, upload files, or download as zip.</div>
                        ${M0?.loading&&O`<div class="workspace-loading">Loading folder size preview…</div>`}
                        ${M0?.error&&O`<div class="workspace-error">${M0.error}</div>`}
                        ${M0?.payload&&M0.payload.segments?.length>0&&O`
                            <${JZ} payload=${M0.payload} />
                        `}
                        ${M0?.payload&&(!M0.payload.segments||M0.payload.segments.length===0)&&O`
                            <div class="workspace-preview-text">No file size data available for this folder yet.</div>
                        `}
                    `}
                    ${y&&!y.error&&!b0&&O`
                        <div class="workspace-preview-body" ref=${a0}></div>
                    `}
                    ${u&&O`
                        <div class="workspace-download-card">
                            <${EZ} mediaId=${u} />
                        </div>
                    `}
                </div>
            `}
            ${L0&&O`
                <div class="workspace-drag-ghost" ref=${__}>${L0.label}</div>
            `}
        </aside>
    `}var AZ=/\.(docx?|xlsx?|pptx?|odt|ods|odp|rtf)$/i,yZ=/\.(csv|tsv)$/i,MZ=/\.pdf$/i,PZ=/\.(png|jpe?g|gif|webp|bmp|ico|svg)$/i,Q9=/\.drawio(\.xml|\.svg|\.png)?$/i;function q9({tabs:_,activeId:$,onActivate:N,onClose:j,onCloseOthers:Y,onCloseAll:L,onTogglePin:Z,onTogglePreview:V,previewTabs:Q,onToggleDock:B,dockVisible:U,onToggleZen:X,zenMode:W,onPopOutTab:J}){let[E,P]=p(null),f=x(null);c(()=>{if(!E)return;let A=(v)=>{if(v.type==="keydown"&&v.key!=="Escape")return;P(null)};return document.addEventListener("click",A),document.addEventListener("keydown",A),()=>{document.removeEventListener("click",A),document.removeEventListener("keydown",A)}},[E]),c(()=>{let A=(v)=>{if(v.ctrlKey&&v.key==="Tab"){if(v.preventDefault(),!_.length)return;let o=_.findIndex((n)=>n.id===$);if(v.shiftKey){let n=_[(o-1+_.length)%_.length];N?.(n.id)}else{let n=_[(o+1)%_.length];N?.(n.id)}return}if((v.ctrlKey||v.metaKey)&&v.key==="w"){let o=document.querySelector(".editor-pane");if(o&&o.contains(document.activeElement)){if(v.preventDefault(),$)j?.($)}}};return document.addEventListener("keydown",A),()=>document.removeEventListener("keydown",A)},[_,$,N,j]);let D=I((A,v)=>{if(A.button===1){A.preventDefault(),j?.(v);return}if(A.button===0)N?.(v)},[N,j]),y=I((A,v)=>{A.preventDefault(),P({id:v,x:A.clientX,y:A.clientY})},[]),C=I((A)=>{A.preventDefault(),A.stopPropagation()},[]),u=I((A,v)=>{A.preventDefault(),A.stopPropagation(),j?.(v)},[j]);if(c(()=>{if(!$||!f.current)return;let A=f.current.querySelector(".tab-item.active");if(A)A.scrollIntoView({block:"nearest",inline:"nearest",behavior:"smooth"})},[$]),!_.length)return null;return O`
        <div class="tab-strip" ref=${f} role="tablist">
            ${_.map((A)=>O`
                <div
                    key=${A.id}
                    class=${`tab-item${A.id===$?" active":""}${A.dirty?" dirty":""}${A.pinned?" pinned":""}`}
                    role="tab"
                    aria-selected=${A.id===$}
                    title=${A.path}
                    onMouseDown=${(v)=>D(v,A.id)}
                    onContextMenu=${(v)=>y(v,A.id)}
                >
                    ${A.pinned&&O`
                        <span class="tab-pin-icon" aria-label="Pinned">
                            <svg viewBox="0 0 16 16" width="10" height="10" fill="currentColor">
                                <path d="M4.456.734a1.75 1.75 0 0 1 2.826.504l.613 1.327a3.1 3.1 0 0 0 2.084 1.707l2.454.584c1.332.317 1.8 1.972.832 2.94L11.06 10l3.72 3.72a.75.75 0 1 1-1.06 1.06L10 11.06l-2.204 2.205c-.968.968-2.623.5-2.94-.832l-.584-2.454a3.1 3.1 0 0 0-1.707-2.084l-1.327-.613a1.75 1.75 0 0 1-.504-2.826z"/>
                            </svg>
                        </span>
                    `}
                    <span class="tab-label">${A.label}</span>
                    <button
                        type="button"
                        class="tab-close"
                        onMouseDown=${C}
                        onClick=${(v)=>u(v,A.id)}
                        title=${A.dirty?"Unsaved changes":"Close"}
                        aria-label=${A.dirty?"Unsaved changes":`Close ${A.label}`}
                    >
                        ${A.dirty?O`<span class="tab-dirty-dot" aria-hidden="true"></span>`:O`<svg viewBox="0 0 16 16" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" aria-hidden="true" focusable="false" style=${{pointerEvents:"none"}}>
                                <line x1="4" y1="4" x2="12" y2="12" style=${{pointerEvents:"none"}}/>
                                <line x1="12" y1="4" x2="4" y2="12" style=${{pointerEvents:"none"}}/>
                            </svg>`}
                    </button>
                </div>
            `)}
            ${B&&O`
                <div class="tab-strip-spacer"></div>
                <button
                    class=${`tab-strip-dock-toggle${U?" active":""}`}
                    onClick=${B}
                    title=${`${U?"Hide":"Show"} terminal (Ctrl+\`)`}
                    aria-label=${`${U?"Hide":"Show"} terminal`}
                    aria-pressed=${U?"true":"false"}
                >
                    <svg viewBox="0 0 16 16" width="14" height="14" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                        <rect x="1.75" y="2.25" width="12.5" height="11.5" rx="2"/>
                        <polyline points="4.5 5.25 7 7.75 4.5 10.25"/>
                        <line x1="8.5" y1="10.25" x2="11.5" y2="10.25"/>
                    </svg>
                </button>
            `}
            ${X&&O`
                <button
                    class=${`tab-strip-zen-toggle${W?" active":""}`}
                    onClick=${X}
                    title=${`${W?"Exit":"Enter"} zen mode (Ctrl+Shift+Z)`}
                    aria-label=${`${W?"Exit":"Enter"} zen mode`}
                    aria-pressed=${W?"true":"false"}
                >
                    <svg viewBox="0 0 16 16" width="14" height="14" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                        ${W?O`<polyline points="4 8 1.5 8 1.5 1.5 14.5 1.5 14.5 8 12 8"/><polyline points="4 8 1.5 8 1.5 14.5 14.5 14.5 14.5 8 12 8"/>`:O`<polyline points="5.5 1.5 1.5 1.5 1.5 5.5"/><polyline points="10.5 1.5 14.5 1.5 14.5 5.5"/><polyline points="5.5 14.5 1.5 14.5 1.5 10.5"/><polyline points="10.5 14.5 14.5 14.5 14.5 10.5"/>`}
                    </svg>
                </button>
            `}
        </div>
        ${E&&O`
            <div class="tab-context-menu" style=${{left:E.x+"px",top:E.y+"px"}}>
                <button onClick=${()=>{j?.(E.id),P(null)}}>Close</button>
                <button onClick=${()=>{Y?.(E.id),P(null)}}>Close Others</button>
                <button onClick=${()=>{L?.(),P(null)}}>Close All</button>
                <hr />
                <button onClick=${()=>{Z?.(E.id),P(null)}}>
                    ${_.find((A)=>A.id===E.id)?.pinned?"Unpin":"Pin"}
                </button>
                ${J&&O`
                    <button onClick=${()=>{let A=_.find((v)=>v.id===E.id);J(E.id,A?.label),P(null)}}>Open in Window</button>
                `}
                ${V&&/\.(md|mdx|markdown)$/i.test(E.id)&&O`
                    <hr />
                    <button onClick=${()=>{V(E.id),P(null)}}>
                        ${Q?.has(E.id)?"Hide Preview":"Preview"}
                    </button>
                `}
                ${AZ.test(E.id)&&O`
                    <hr />
                    <button onClick=${()=>{let A="/workspace/raw?path="+encodeURIComponent(E.id),v=E.id.split("/").pop()||"document",o="/office-viewer/?url="+encodeURIComponent(A)+"&name="+encodeURIComponent(v);window.open(o,"_blank","noopener"),P(null)}}>Open in New Tab</button>
                `}
                ${yZ.test(E.id)&&O`
                    <hr />
                    <button onClick=${()=>{let A="/csv-viewer/?path="+encodeURIComponent(E.id);window.open(A,"_blank","noopener"),P(null)}}>Open in New Tab</button>
                `}
                ${MZ.test(E.id)&&O`
                    <hr />
                    <button onClick=${()=>{let A="/workspace/raw?path="+encodeURIComponent(E.id);window.open(A,"_blank","noopener"),P(null)}}>Open in New Tab</button>
                `}
                ${PZ.test(E.id)&&!Q9.test(E.id)&&O`
                    <hr />
                    <button onClick=${()=>{let A="/image-viewer/?path="+encodeURIComponent(E.id);window.open(A,"_blank","noopener"),P(null)}}>Open in New Tab</button>
                `}
                ${Q9.test(E.id)&&O`
                    <hr />
                    <button onClick=${()=>{let A="/drawio/edit?path="+encodeURIComponent(E.id);window.open(A,"_blank","noopener"),P(null)}}>Open in New Tab</button>
                `}
            </div>
        `}
    `}var kZ=400,w2=60,X9=220,C2="mdPreviewHeight";function xZ(){try{let _=localStorage.getItem(C2),$=_?Number(_):NaN;return Number.isFinite($)&&$>=w2?$:X9}catch{return X9}}function I2({getContent:_,path:$,onClose:N}){let[j,Y]=p(""),[L,Z]=p(xZ),V=x(null),Q=x(null),B=x(""),U=x(_);return U.current=_,c(()=>{let J=()=>{let P=U.current?.()||"";if(P===B.current)return;B.current=P;try{let f=X_(P,null,{sanitize:!1});Y(f)}catch{Y('<p style="color:var(--text-secondary)">Preview unavailable</p>')}};J();let E=setInterval(J,kZ);return()=>clearInterval(E)},[]),c(()=>{if(V.current&&j)Q4(V.current).catch(()=>{})},[j]),O`
        <div
            class="md-preview-splitter"
            onMouseDown=${(J)=>{J.preventDefault();let E=J.clientY,P=Q.current?.offsetHeight||L,f=Q.current?.parentElement,D=f?f.offsetHeight*0.7:500,y=J.currentTarget;y.classList.add("dragging"),document.body.style.cursor="row-resize",document.body.style.userSelect="none";let C=(A)=>{let v=Math.min(Math.max(P-(A.clientY-E),w2),D);Z(v)},u=()=>{y.classList.remove("dragging"),document.body.style.cursor="",document.body.style.userSelect="";try{localStorage.setItem(C2,String(Math.round(Q.current?.offsetHeight||L)))}catch{}document.removeEventListener("mousemove",C),document.removeEventListener("mouseup",u)};document.addEventListener("mousemove",C),document.addEventListener("mouseup",u)}}
            onTouchStart=${(J)=>{J.preventDefault();let E=J.touches[0];if(!E)return;let P=E.clientY,f=Q.current?.offsetHeight||L,D=Q.current?.parentElement,y=D?D.offsetHeight*0.7:500,C=J.currentTarget;C.classList.add("dragging"),document.body.style.userSelect="none";let u=(v)=>{let o=v.touches[0];if(!o)return;v.preventDefault();let n=Math.min(Math.max(f-(o.clientY-P),w2),y);Z(n)},A=()=>{C.classList.remove("dragging"),document.body.style.userSelect="";try{localStorage.setItem(C2,String(Math.round(Q.current?.offsetHeight||L)))}catch{}document.removeEventListener("touchmove",u),document.removeEventListener("touchend",A),document.removeEventListener("touchcancel",A)};document.addEventListener("touchmove",u,{passive:!1}),document.addEventListener("touchend",A),document.addEventListener("touchcancel",A)}}
        ></div>
        <div class="md-preview-panel" ref=${Q} style=${{height:L+"px"}}>
            <div class="md-preview-header">
                <span class="md-preview-title">Preview</span>
                <button class="md-preview-close" onClick=${N} title="Close preview" aria-label="Close preview">
                    <svg viewBox="0 0 16 16" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round">
                        <line x1="4" y1="4" x2="12" y2="12"/>
                        <line x1="12" y1="4" x2="4" y2="12"/>
                    </svg>
                </button>
            </div>
            <div
                class="md-preview-body post-content"
                ref=${V}
                dangerouslySetInnerHTML=${{__html:j}}
            />
        </div>
    `}function U9({handleSseEvent:_,handleConnectionStatusChange:$,loadPosts:N,onWake:j,chatJid:Y}){let L=x(_);L.current=_;let Z=x($);Z.current=$;let V=x(N);V.current=N;let Q=x(j);Q.current=j,c(()=>{V.current();let B=new V6((X,W)=>L.current(X,W),(X)=>Z.current(X),{chatJid:Y});B.connect();let U=()=>{B.reconnectIfNeeded();let X=typeof document<"u"?document:null;if(!X||X.visibilityState==="visible")Q.current?.()};return window.addEventListener("focus",U),document.addEventListener("visibilitychange",U),()=>{window.removeEventListener("focus",U),document.removeEventListener("visibilitychange",U),B.disconnect()}},[Y])}function G9(){let[_,$]=p(!1),[N,j]=p("default"),Y=x(!1);c(()=>{let Q=N8("notificationsEnabled",!1);if(Y.current=Q,$(Q),typeof Notification<"u")j(Notification.permission)},[]),c(()=>{Y.current=_},[_]);let L=I(()=>{if(typeof Notification>"u")return Promise.resolve("denied");try{let Q=Notification.requestPermission();if(Q&&typeof Q.then==="function")return Q;return Promise.resolve(Q)}catch{return Promise.resolve("default")}},[]),Z=I(async()=>{if(typeof window>"u"||typeof Notification>"u")return;if(!window.isSecureContext){alert("Notifications require a secure context (HTTPS or installed app).");return}if(Notification.permission==="denied"){j("denied"),alert("Browser notifications are blocked. Enable them in your browser settings.");return}if(Notification.permission==="default"){let B=await L();if(j(B||"default"),B!=="granted"){Y.current=!1,$(!1),Z1("notificationsEnabled","false");return}}let Q=!Y.current;Y.current=Q,$(Q),Z1("notificationsEnabled",String(Q))},[L]),V=I((Q,B)=>{if(!Y.current)return!1;if(typeof Notification>"u")return!1;if(Notification.permission!=="granted")return!1;try{let U=new Notification(Q,{body:B});return U.onclick=()=>{try{window.focus()}catch{}},!0}catch{return!1}},[]);return{notificationsEnabled:_,notificationPermission:N,toggleNotifications:Z,notify:V}}var c8=(_)=>{let $=new Set;return(_||[]).filter((N)=>{if(!N||$.has(N.id))return!1;return $.add(N.id),!0})};function W9({preserveTimelineScroll:_,preserveTimelineScrollTop:$,chatJid:N=null}){let[j,Y]=p(null),[L,Z]=p(!1),V=x(!1),Q=x(null),B=x(!1),U=x(null),X=x(null),W=x(0);c(()=>{V.current=L},[L]),c(()=>{X.current=j},[j]),c(()=>{W.current+=1,U.current=null,B.current=!1,V.current=!1,Z(!1)},[N]);let J=I(async(f=null)=>{let D=W.current;try{if(f){let y=await $5(f,50,0,N);if(D!==W.current)return;Y(y.posts),Z(!1)}else{let y=await h4(10,null,N);if(D!==W.current)return;Y(y.posts),Z(y.has_more)}}catch(y){if(D!==W.current)return;console.error("Failed to load posts:",y)}},[N]),E=I(async()=>{let f=W.current;try{let D=await h4(10,null,N);if(f!==W.current)return;Y((y)=>{if(!y||y.length===0)return D.posts;return c8([...D.posts,...y])}),Z((y)=>y||D.has_more)}catch(D){if(f!==W.current)return;console.error("Failed to refresh timeline:",D)}},[N]),P=I(async(f={})=>{let D=W.current,y=X.current;if(!y||y.length===0)return;if(B.current)return;let{preserveScroll:C=!0,preserveMode:u="top",allowRepeat:A=!1}=f,v=(g)=>{if(!C){g();return}if(u==="top")$(g);else _(g)},n=y.slice().sort((g,T)=>g.id-T.id)[0]?.id;if(!Number.isFinite(n))return;if(!A&&U.current===n)return;B.current=!0,U.current=n;try{let g=await h4(10,n,N);if(D!==W.current)return;if(g.posts.length>0)v(()=>{Y((T)=>c8([...g.posts,...T||[]])),Z(g.has_more)});else Z(!1)}catch(g){if(D!==W.current)return;console.error("Failed to load more posts:",g)}finally{if(D===W.current)B.current=!1}},[N,_,$]);return c(()=>{Q.current=P},[P]),{posts:j,setPosts:Y,hasMore:L,setHasMore:Z,hasMoreRef:V,loadPosts:J,refreshTimeline:E,loadMore:P,loadMoreRef:Q,loadingMoreRef:B,lastBeforeIdRef:U}}function O9(){let[_,$]=p(null),[N,j]=p({text:"",totalLines:0}),[Y,L]=p(""),[Z,V]=p({text:"",totalLines:0}),[Q,B]=p(null),[U,X]=p(null),[W,J]=p(null),E=x(null),P=x(0),f=x(!1),D=x(""),y=x(""),C=x(null),u=x(null),A=x(null),v=x(null),o=x(!1),n=x(!1);return{agentStatus:_,setAgentStatus:$,agentDraft:N,setAgentDraft:j,agentPlan:Y,setAgentPlan:L,agentThought:Z,setAgentThought:V,pendingRequest:Q,setPendingRequest:B,currentTurnId:U,setCurrentTurnId:X,steerQueuedTurnId:W,setSteerQueuedTurnId:J,lastAgentEventRef:E,lastSilenceNoticeRef:P,isAgentRunningRef:f,draftBufferRef:D,thoughtBufferRef:y,pendingRequestRef:C,stalledPostIdRef:u,currentTurnIdRef:A,steerQueuedTurnIdRef:v,thoughtExpandedRef:o,draftExpandedRef:n}}function z9({appShellRef:_,sidebarWidthRef:$,editorWidthRef:N,dockHeightRef:j}){let Y=x((U)=>{U.preventDefault();let X=_.current;if(!X)return;let W=U.clientX,J=$.current||280,E=U.currentTarget;E.classList.add("dragging"),X.classList.add("sidebar-resizing"),document.body.style.cursor="col-resize",document.body.style.userSelect="none";let P=W,f=(y)=>{P=y.clientX;let C=Math.min(Math.max(J+(y.clientX-W),160),600);X.style.setProperty("--sidebar-width",`${C}px`),$.current=C},D=()=>{let y=Math.min(Math.max(J+(P-W),160),600);$.current=y,E.classList.remove("dragging"),X.classList.remove("sidebar-resizing"),document.body.style.cursor="",document.body.style.userSelect="",Z1("sidebarWidth",String(Math.round(y))),document.removeEventListener("mousemove",f),document.removeEventListener("mouseup",D)};document.addEventListener("mousemove",f),document.addEventListener("mouseup",D)}).current,L=x((U)=>{U.preventDefault();let X=_.current;if(!X)return;let W=U.touches[0];if(!W)return;let J=W.clientX,E=$.current||280,P=U.currentTarget;P.classList.add("dragging"),X.classList.add("sidebar-resizing"),document.body.style.userSelect="none";let f=(y)=>{let C=y.touches[0];if(!C)return;y.preventDefault();let u=Math.min(Math.max(E+(C.clientX-J),160),600);X.style.setProperty("--sidebar-width",`${u}px`),$.current=u},D=()=>{P.classList.remove("dragging"),X.classList.remove("sidebar-resizing"),document.body.style.userSelect="",Z1("sidebarWidth",String(Math.round($.current||E))),document.removeEventListener("touchmove",f),document.removeEventListener("touchend",D),document.removeEventListener("touchcancel",D)};document.addEventListener("touchmove",f,{passive:!1}),document.addEventListener("touchend",D),document.addEventListener("touchcancel",D)}).current,Z=x((U)=>{U.preventDefault();let X=_.current;if(!X)return;let W=U.clientX,J=N.current||$.current||280,E=U.currentTarget;E.classList.add("dragging"),document.body.style.cursor="col-resize",document.body.style.userSelect="none";let P=W,f=(y)=>{P=y.clientX;let C=Math.min(Math.max(J+(y.clientX-W),200),800);X.style.setProperty("--editor-width",`${C}px`),N.current=C},D=()=>{let y=Math.min(Math.max(J+(P-W),200),800);N.current=y,E.classList.remove("dragging"),document.body.style.cursor="",document.body.style.userSelect="",Z1("editorWidth",String(Math.round(y))),document.removeEventListener("mousemove",f),document.removeEventListener("mouseup",D)};document.addEventListener("mousemove",f),document.addEventListener("mouseup",D)}).current,V=x((U)=>{U.preventDefault();let X=_.current;if(!X)return;let W=U.touches[0];if(!W)return;let J=W.clientX,E=N.current||$.current||280,P=U.currentTarget;P.classList.add("dragging"),document.body.style.userSelect="none";let f=(y)=>{let C=y.touches[0];if(!C)return;y.preventDefault();let u=Math.min(Math.max(E+(C.clientX-J),200),800);X.style.setProperty("--editor-width",`${u}px`),N.current=u},D=()=>{P.classList.remove("dragging"),document.body.style.userSelect="",Z1("editorWidth",String(Math.round(N.current||E))),document.removeEventListener("touchmove",f),document.removeEventListener("touchend",D),document.removeEventListener("touchcancel",D)};document.addEventListener("touchmove",f,{passive:!1}),document.addEventListener("touchend",D),document.addEventListener("touchcancel",D)}).current,Q=x((U)=>{U.preventDefault();let X=_.current;if(!X)return;let W=U.clientY,J=j?.current||200,E=U.currentTarget;E.classList.add("dragging"),document.body.style.cursor="row-resize",document.body.style.userSelect="none";let P=W,f=(y)=>{P=y.clientY;let C=Math.min(Math.max(J-(y.clientY-W),100),window.innerHeight*0.5);if(X.style.setProperty("--dock-height",`${C}px`),j)j.current=C;window.dispatchEvent(new CustomEvent("dock-resize"))},D=()=>{let y=Math.min(Math.max(J-(P-W),100),window.innerHeight*0.5);if(j)j.current=y;E.classList.remove("dragging"),document.body.style.cursor="",document.body.style.userSelect="",Z1("dockHeight",String(Math.round(y))),window.dispatchEvent(new CustomEvent("dock-resize")),document.removeEventListener("mousemove",f),document.removeEventListener("mouseup",D)};document.addEventListener("mousemove",f),document.addEventListener("mouseup",D)}).current,B=x((U)=>{U.preventDefault();let X=_.current;if(!X)return;let W=U.touches[0];if(!W)return;let J=W.clientY,E=j?.current||200,P=U.currentTarget;P.classList.add("dragging"),document.body.style.userSelect="none";let f=(y)=>{let C=y.touches[0];if(!C)return;y.preventDefault();let u=Math.min(Math.max(E-(C.clientY-J),100),window.innerHeight*0.5);if(X.style.setProperty("--dock-height",`${u}px`),j)j.current=u;window.dispatchEvent(new CustomEvent("dock-resize"))},D=()=>{P.classList.remove("dragging"),document.body.style.userSelect="",Z1("dockHeight",String(Math.round(j?.current||E))),window.dispatchEvent(new CustomEvent("dock-resize")),document.removeEventListener("touchmove",f),document.removeEventListener("touchend",D),document.removeEventListener("touchcancel",D)};document.addEventListener("touchmove",f,{passive:!1}),document.addEventListener("touchend",D),document.addEventListener("touchcancel",D)}).current;return{handleSplitterMouseDown:Y,handleSplitterTouchStart:L,handleEditorSplitterMouseDown:Z,handleEditorSplitterTouchStart:V,handleDockSplitterMouseDown:Q,handleDockSplitterTouchStart:B}}function F9({onTabClosed:_}={}){let $=x(_);$.current=_;let[N,j]=p(()=>d0.getTabs()),[Y,L]=p(()=>d0.getActiveId()),[Z,V]=p(()=>d0.getTabs().length>0);c(()=>{return d0.onChange((u,A)=>{j(u),L(A),V(u.length>0)})},[]);let[Q,B]=p(()=>new Set),U=I((u)=>{B((A)=>{let v=new Set(A);if(v.has(u))v.delete(u);else v.add(u);return v})},[]),X=I((u)=>{B((A)=>{if(!A.has(u))return A;let v=new Set(A);return v.delete(u),v})},[]),W=I((u,A={})=>{if(!u)return;let v={path:u,mode:"edit"};try{if(!N1.resolve(v)){if(!N1.get("editor")){console.warn(`[openEditor] No pane handler for: ${u}`);return}}}catch(n){console.warn(`[openEditor] paneRegistry.resolve() error for "${u}":`,n)}let o=typeof A?.label==="string"&&A.label.trim()?A.label.trim():void 0;d0.open(u,o)},[]),J=I(()=>{let u=d0.getActiveId();if(u){let A=d0.get(u);if(A?.dirty){if(!window.confirm(`"${A.label}" has unsaved changes. Close anyway?`))return}d0.close(u),X(u),$.current?.(u)}},[X]),E=I((u)=>{let A=d0.get(u);if(A?.dirty){if(!window.confirm(`"${A.label}" has unsaved changes. Close anyway?`))return}d0.close(u),X(u),$.current?.(u)},[X]),P=I((u)=>{d0.activate(u)},[]),f=I((u)=>{let A=d0.getTabs().filter((n)=>n.id!==u&&!n.pinned),v=A.filter((n)=>n.dirty).length;if(v>0){if(!window.confirm(`${v} unsaved tab${v>1?"s":""} will be closed. Continue?`))return}let o=A.map((n)=>n.id);d0.closeOthers(u),o.forEach((n)=>{X(n),$.current?.(n)})},[X]),D=I(()=>{let u=d0.getTabs().filter((o)=>!o.pinned),A=u.filter((o)=>o.dirty).length;if(A>0){if(!window.confirm(`${A} unsaved tab${A>1?"s":""} will be closed. Continue?`))return}let v=u.map((o)=>o.id);d0.closeAll(),v.forEach((o)=>{X(o),$.current?.(o)})},[X]),y=I((u)=>{d0.togglePin(u)},[]),C=I(()=>{let u=d0.getActiveId();if(u)window.dispatchEvent(new CustomEvent("workspace-reveal-path",{detail:{path:u}}))},[]);return c(()=>{let u=(A)=>{let{oldPath:v,newPath:o,type:n}=A.detail||{};if(!v||!o)return;if(n==="dir"){for(let g of d0.getTabs())if(g.path===v||g.path.startsWith(`${v}/`)){let T=`${o}${g.path.slice(v.length)}`;d0.rename(g.id,T)}}else d0.rename(v,o)};return window.addEventListener("workspace-file-renamed",u),()=>window.removeEventListener("workspace-file-renamed",u)},[]),c(()=>{let u=(A)=>{if(d0.hasUnsaved())A.preventDefault(),A.returnValue=""};return window.addEventListener("beforeunload",u),()=>window.removeEventListener("beforeunload",u)},[]),{editorOpen:Z,tabStripTabs:N,tabStripActiveId:Y,previewTabs:Q,openEditor:W,closeEditor:J,handleTabClose:E,handleTabActivate:P,handleTabCloseOthers:f,handleTabCloseAll:D,handleTabTogglePin:y,handleTabTogglePreview:U,revealInExplorer:C}}function T2(_,$){try{if(typeof window>"u")return $;let N=window.__PICLAW_SILENCE||{},j=`__PICLAW_SILENCE_${_.toUpperCase()}_MS`,Y=N[_]??window[j],L=Number(Y);return Number.isFinite(L)?L:$}catch{return $}}var f2=T2("warning",30000),H9=T2("finalize",120000),S2=T2("refresh",30000),D9=30000;function J9(_){let $={};return(_?.agents||[]).forEach((N)=>{$[N.id]=N}),$}function E9(){if(/iPad|iPhone/.test(navigator.userAgent))return!0;return navigator.platform==="MacIntel"&&navigator.maxTouchPoints>1}function A9(_=30000){let[,$]=p(0);c(()=>{let N=setInterval(()=>$((j)=>j+1),_);return()=>clearInterval(N)},[_])}function R2(_,$=160){let N=String(_||"").replace(/\r\n/g,`
`);if(!N)return 0;return N.split(`
`).reduce((j,Y)=>j+Math.max(1,Math.ceil(Y.length/$)),0)}function y9(_,$){if(typeof _!=="string")return{kind:"ignore"};let N=_.trim();if(!N)return{kind:"toast",title:"No file selected",detail:"Use a valid file path from a file pill.",level:"warning"};if(!$.editorOpen)return{kind:"toast",title:"Editor pane is not open",detail:"Open the editor pane to open files from pills.",level:"warning"};if(/^[a-z][a-z0-9+.-]*:/i.test(N))return{kind:"toast",title:"Cannot open external path from file pill",detail:"Use an in-workspace file path.",level:"warning"};try{if(!$.resolvePane({path:N,mode:"edit"}))return{kind:"toast",title:"No editor available",detail:`No editor can open: ${N}`,level:"warning"}}catch{return{kind:"toast",title:"No editor available",detail:`No editor can open: ${N}`,level:"warning"}}return{kind:"open",path:N}}function u2(_){return String(_||"").trim()||"web:default"}function M9({remainingQueueCount:_=0,currentTurnId:$=null,isAgentTurnActive:N=!1}={}){return Number(_||0)<=0&&!$&&!N}function P9(_={}){return X4(_)&&y6(_)}function wZ(_={}){let $=_.window??(typeof window<"u"?window:null),N=Number($?.visualViewport?.height||0);if(Number.isFinite(N)&&N>0)return Math.round(N);let j=Number($?.innerHeight||0);if(Number.isFinite(j)&&j>0)return Math.round(j);return null}function CZ(_={},$={}){if(!P9(_))return null;let N=_.window??(typeof window<"u"?window:null),j=_.document??(typeof document<"u"?document:null);if(!N||!j?.documentElement)return null;let Y=wZ({window:N});if(Y&&Y>0)j.documentElement.style.setProperty("--app-height",`${Y}px`);if($.resetScroll===!0){try{if(typeof N.scrollTo==="function")N.scrollTo(0,0)}catch{}try{if(j.scrollingElement)j.scrollingElement.scrollTop=0,j.scrollingElement.scrollLeft=0;if(j.documentElement)j.documentElement.scrollTop=0,j.documentElement.scrollLeft=0;if(j.body)j.body.scrollTop=0,j.body.scrollLeft=0}catch{}}return Y}function k9(_={}){if(!P9(_))return()=>{};let $=_.window??(typeof window<"u"?window:null),N=_.document??(typeof document<"u"?document:null);if(!$||!N)return()=>{};let j=0,Y=new Set,L=()=>{if(j)$.cancelAnimationFrame?.(j),j=0;for(let X of Y)$.clearTimeout?.(X);Y.clear()},Z=()=>{j=0,CZ({window:$,document:N})},V=()=>{if(j)$.cancelAnimationFrame?.(j);j=$.requestAnimationFrame?.(Z)??0},Q=()=>{V();for(let X of[80,220,420]){let W=$.setTimeout?.(()=>{Y.delete(W),V()},X);if(W!=null)Y.add(W)}},B=()=>{if(N.visibilityState&&N.visibilityState!=="visible")return;Q()},U=$.visualViewport;return Q(),$.addEventListener("focus",Q),$.addEventListener("pageshow",Q),$.addEventListener("resize",Q),$.addEventListener("orientationchange",Q),N.addEventListener("visibilitychange",B),N.addEventListener("focusin",Q,!0),U?.addEventListener?.("resize",Q),U?.addEventListener?.("scroll",Q),()=>{L(),$.removeEventListener("focus",Q),$.removeEventListener("pageshow",Q),$.removeEventListener("resize",Q),$.removeEventListener("orientationchange",Q),N.removeEventListener("visibilitychange",B),N.removeEventListener("focusin",Q,!0),U?.removeEventListener?.("resize",Q),U?.removeEventListener?.("scroll",Q)}}function IZ(_,$){if(typeof window<"u")console.warn(`[app] API export missing: ${_}. Using fallback behavior.`);return async()=>$}function x_(_,$,N){let j=_?.[$];return typeof j==="function"?j:IZ($,N)}var TZ=new Set(["extension_ui_request","extension_ui_timeout","extension_ui_notify","extension_ui_status","extension_ui_working","extension_ui_widget","extension_ui_title","extension_ui_editor_text","extension_ui_error"]);function x9(_){return TZ.has(String(_||"").trim())}function fZ(_){let $=String(_||"").trim();if(!$.startsWith("extension_ui_"))return"piclaw-extension-ui";return`piclaw-extension-ui:${$.slice(13).replace(/_/g,"-")}`}function w9(_,$,N=globalThis.window){if(!N||typeof N.dispatchEvent!=="function"||typeof CustomEvent>"u")return!1;let j={type:_,payload:$};return N.dispatchEvent(new CustomEvent("piclaw-extension-ui",{detail:j})),N.dispatchEvent(new CustomEvent(fZ(_),{detail:j})),!0}var SZ=["(display-mode: standalone)","(display-mode: minimal-ui)","(display-mode: fullscreen)"];function C9(_,$={}){let N=$.window??(typeof window<"u"?window:null),j=$.navigator??(typeof navigator<"u"?navigator:null);if(!N||typeof _!=="function")return()=>{};let Y=()=>{_(X4({window:N,navigator:j}))};Y();let Z=SZ.map((V)=>{try{return N.matchMedia?.(V)??null}catch{return null}}).filter(Boolean).map((V)=>{if(typeof V.addEventListener==="function")return V.addEventListener("change",Y),()=>V.removeEventListener("change",Y);if(typeof V.addListener==="function")return V.addListener(Y),()=>V.removeListener(Y);return()=>{}});return N.addEventListener?.("focus",Y),N.addEventListener?.("pageshow",Y),()=>{for(let V of Z)V();N.removeEventListener?.("focus",Y),N.removeEventListener?.("pageshow",Y)}}function I9(_,$={}){let N=$.window??(typeof window<"u"?window:null),j=$.document??(typeof document<"u"?document:null);if(!N||!j||typeof _!=="function")return()=>{};let Y=()=>{if(j.visibilityState&&j.visibilityState!=="visible")return;_()};return N.addEventListener?.("focus",Y),N.addEventListener?.("pageshow",Y),j.addEventListener?.("visibilitychange",Y),()=>{N.removeEventListener?.("focus",Y),N.removeEventListener?.("pageshow",Y),j.removeEventListener?.("visibilitychange",Y)}}var v2="piclaw_btw_session",RZ=900,uZ="__piclawRenameBranchPromptLock__",T9=()=>{if(typeof window>"u")return null;let _=window,$=uZ,N=_[$];if(N&&typeof N==="object")return N;let j={inFlight:!1,cooldownUntil:0};return _[$]=j,j};function bZ(_){if(_==="root")return"Branch family";if(_==="all")return"All chats";return"Current branch"}function vZ(){let _=q_(v2);if(!_)return null;try{let $=JSON.parse(_);if(!$||typeof $!=="object")return null;let N=typeof $.question==="string"?$.question:"",j=typeof $.answer==="string"?$.answer:"",Y=typeof $.thinking==="string"?$.thinking:"",L=typeof $.error==="string"&&$.error.trim()?$.error:null,Z=$.status==="running"?"error":$.status==="success"||$.status==="error"?$.status:"success";return{question:N,answer:j,thinking:Y,error:Z==="error"?L||"BTW stream interrupted. You can retry.":L,model:null,status:Z}}catch{return null}}var f9=N5,S9=Y5,mZ=Z5,R9=q5,u9=X5,b2=V5,S6=x_(Q_,"getAgentContext",null),b9=x_(Q_,"getAgentModels",{current:null,models:[]}),v9=x_(Q_,"getActiveChatAgents",{chats:[]}),R6=x_(Q_,"getChatBranches",{chats:[]}),gZ=x_(Q_,"renameChatBranch",null),hZ=x_(Q_,"pruneChatBranch",null),m9=x_(Q_,"restoreChatBranch",null),g9=x_(Q_,"getAgentQueueState",{count:0}),cZ=x_(Q_,"steerAgentQueueItem",{removed:!1,queued:"steer"}),pZ=x_(Q_,"removeAgentQueueItem",{removed:!1}),iZ=x_(Q_,"streamSidePrompt",null);if(window.marked)marked.setOptions({breaks:!0,gfm:!0});N1.register(g5);N1.register(U2);N1.register(X2);N1.register(G2);N1.register(W2);N1.register(O2);N1.register(F2);N1.register(H2);N1.register(J2);N1.register(Q2);h5();N1.register(i5);N1.register(n5);function nZ({locationParams:_,navigate:$}){let N=w0(()=>{let K=_.get("chat_jid");return K&&K.trim()?K.trim():"web:default"},[_]),j=w0(()=>{let K=(_.get("chat_only")||_.get("chat-only")||"").trim().toLowerCase();return K==="1"||K==="true"||K==="yes"},[_]),Y=w0(()=>{let K=(_.get("pane_popout")||"").trim().toLowerCase();return K==="1"||K==="true"||K==="yes"},[_]),L=w0(()=>{let K=_.get("pane_path");return K&&K.trim()?K.trim():""},[_]),Z=w0(()=>{let K=_.get("pane_label");return K&&K.trim()?K.trim():""},[_]),V=w0(()=>{let K=(_.get("branch_loader")||"").trim().toLowerCase();return K==="1"||K==="true"||K==="yes"},[_]),Q=w0(()=>{let K=_.get("branch_source_chat_jid");return K&&K.trim()?K.trim():N},[N,_]),[B,U]=p("disconnected"),[X,W]=p(()=>X4()),[J,E]=p(null),[P,f]=p(null),[D,y]=p(!1),[C,u]=p("current"),[A,v]=p([]),[o,n]=p([]),[g,T]=p(null),{agentStatus:i,setAgentStatus:d,agentDraft:q0,setAgentDraft:l,agentPlan:$0,setAgentPlan:N0,agentThought:Y0,setAgentThought:L0,pendingRequest:K0,setPendingRequest:G0,currentTurnId:W0,setCurrentTurnId:F0,steerQueuedTurnId:c0,setSteerQueuedTurnId:M0,lastAgentEventRef:D0,lastSilenceNoticeRef:p0,isAgentRunningRef:i0,draftBufferRef:C0,thoughtBufferRef:Q0,pendingRequestRef:P0,stalledPostIdRef:J0,currentTurnIdRef:Z0,steerQueuedTurnIdRef:k0,thoughtExpandedRef:r0,draftExpandedRef:m0}=O9(),[G1,P1]=p({}),[R0,n0]=p(null),[j1,V1]=p(null),[s0,T1]=p(!1),[Y1,v1]=p(null),[B1,i1]=p([]),[g0,t1]=p([]),[Q1,W1]=p(null),[H1,x0]=p([]),[D1,I0]=p(!1),[f0,a0]=p(()=>vZ()),[l1,m]=p(null),B0=x(new Set),E0=w0(()=>B1.find((K)=>K?.chat_jid===N)||null,[B1,N]),z0=w0(()=>g0.find((K)=>K?.chat_jid===N)||E0||null,[E0,g0,N]),o0=z0?.root_chat_jid||E0?.root_chat_jid||N,e1=bZ(C),[n1,p_]=p(()=>({status:V?"running":"idle",message:V?"Preparing a new chat branch…":""})),w_=H1.length,__=x(new Set),t0=x([]),f1=x(new Set),r1=x(0),S1=x({inFlight:!1,lastAttemptAt:0,turnId:null});__.current=new Set(H1.map((K)=>K.row_id)),t0.current=H1;let{notificationsEnabled:C_,notificationPermission:I_,toggleNotifications:W4,notify:O4}=G9(),[$_,i_]=p(()=>new Set),[L1,_4]=p(()=>N8("workspaceOpen",!0)),G_=x(null),{editorOpen:h0,tabStripTabs:O1,tabStripActiveId:u0,previewTabs:R1,openEditor:J1,closeEditor:$4,handleTabClose:z4,handleTabActivate:W_,handleTabCloseOthers:f4,handleTabCloseAll:p8,handleTabTogglePin:s4,handleTabTogglePreview:O_,revealInExplorer:X8}=F9({onTabClosed:(K)=>G_.current?.(K)}),N_=x(null),j_=x(null),n_=x(null),z_=x(null),m1=N1.getDockPanes().length>0,[V_,b0]=p(!1),Y_=I(()=>b0((K)=>!K),[]),F4=I(()=>{J1(f8,{label:"Terminal"})},[J1]),H4=I(()=>{J1(e_,{label:"VNC"})},[J1]),T_=w0(()=>O1.find((K)=>K.id===u0)||O1[0]||null,[u0,O1]),F_=w0(()=>Z||T_?.label||L||"Pane",[T_?.label,Z,L]),B_=w0(()=>O1.length>1||Boolean(u0&&R1.has(u0)),[R1,u0,O1.length]),E1=w0(()=>L===e_||L.startsWith(`${e_}/`),[L]),K1=w0(()=>L===f8&&!B_||E1,[E1,B_,L]),s1=Y||!j&&(h0||m1&&V_),[w1,N4]=p(!1),j4=x(!1),D4=I(()=>{if(!h0||j)return;if(j4.current=V_,V_)b0(!1);N4(!0)},[h0,j,V_]),o1=I(()=>{if(!w1)return;if(N4(!1),j4.current)b0(!0),j4.current=!1},[w1]),Y4=I(()=>{if(w1)o1();else D4()},[w1,D4,o1]);c(()=>{if(w1&&!h0)o1()},[w1,h0,o1]),c(()=>{if(!Y||!L)return;if(d0.getActiveId()===L)return;J1(L,Z?{label:Z}:void 0)},[J1,Z,Y,L]),c(()=>{let K=N_.current;if(!K)return;if(j_.current)j_.current.dispose(),j_.current=null;let q=u0;if(!q)return;let F={path:q,mode:"edit"},M=N1.resolve(F)||N1.get("editor");if(!M){K.innerHTML='<div style="padding:2em;color:var(--text-secondary);text-align:center;">No editor available for this file.</div>';return}let k=M.mount(K,F);j_.current=k,k.onDirtyChange?.((e)=>{d0.setDirty(q,e)}),k.onSaveRequest?.(()=>{}),k.onClose?.(()=>{$4()});let h=d0.getViewState(q);if(h&&typeof k.restoreViewState==="function")requestAnimationFrame(()=>k.restoreViewState(h));if(typeof k.onViewStateChange==="function")k.onViewStateChange((e)=>{d0.saveViewState(q,e)});return requestAnimationFrame(()=>k.focus()),()=>{if(j_.current===k)k.dispose(),j_.current=null}},[u0,$4]),c(()=>{let K=n_.current;if(z_.current)z_.current.dispose(),z_.current=null;if(!K||!m1||!V_)return;let q=N1.getDockPanes()[0];if(!q){K.innerHTML='<div class="terminal-placeholder">No dock pane available.</div>';return}let F=q.mount(K,{mode:"view"});return z_.current=F,requestAnimationFrame(()=>F.focus?.()),()=>{if(z_.current===F)F.dispose(),z_.current=null}},[m1,V_]);let[S4,f_]=p({name:"You",avatar_url:null,avatar_background:null}),H_=x(!1),K_=x(!1),S_=x(null),g1=x(N),R4=x(new Map),u4=x(N),J4=x(0),l_=x(0),R_=x({}),L4=x({name:null,avatar_url:null}),u1=x({currentHashtag:null,searchQuery:null,searchOpen:!1}),u_=x(null),b_=x(null),r_=x(0),E4=x(0),z1=x(0),A4=x(null),d1=x(null),L_=x(null),D_=x(null),b4=x(0),y4=x({title:null,avatarBase:null}),Z4=x(null),v4=x(!1),[s_,m4]=p(!1),o4=x(0),M4=I(()=>{if(Z4.current)clearTimeout(Z4.current),Z4.current=null;T(null)},[]);A9(30000),c(()=>{return l$()},[]),c(()=>{return C9(W)},[]),c(()=>{Z1("workspaceOpen",String(L1))},[L1]),c(()=>{return k9()},[]),c(()=>{return()=>{M4()}},[M4]),c(()=>{if(!f0){Z1(v2,"");return}Z1(v2,JSON.stringify({question:f0.question||"",answer:f0.answer||"",thinking:f0.thinking||"",error:f0.error||null,status:f0.status||"success"}))},[f0]),c(()=>{R_.current=G1||{}},[G1]),c(()=>{g1.current=N},[N]),c(()=>{L4.current=S4||{name:"You",avatar_url:null,avatar_background:null}},[S4]);let P4=I((K,q,F=null)=>{if(typeof document>"u")return;let M=(K||"").trim()||"PiClaw";if(y4.current.title!==M){document.title=M;let t=document.querySelector('meta[name="apple-mobile-web-app-title"]');if(t&&t.getAttribute("content")!==M)t.setAttribute("content",M);y4.current.title=M}let k=document.getElementById("dynamic-favicon");if(!k)return;let h=k.getAttribute("data-default")||k.getAttribute("href")||"/favicon.ico",e=q||h,_0=q?`${e}|${F||""}`:e;if(y4.current.avatarBase!==_0){let t=q?`${e}${e.includes("?")?"&":"?"}v=${F||Date.now()}`:e;k.setAttribute("href",t),y4.current.avatarBase=_0}},[]),v_=I((K)=>{if(!K)return;v((q)=>q.includes(K)?q:[...q,K])},[]),d4=I((K)=>{v((q)=>q.filter((F)=>F!==K))},[]);G_.current=d4;let V4=I(()=>{v([])},[]),z=I((K)=>{if(!Array.isArray(K)){v([]);return}let q=[],F=new Set;for(let M of K){if(typeof M!=="string"||!M.trim())continue;let k=M.trim();if(F.has(k))continue;F.add(k),q.push(k)}v(q)},[]),H=I((K,q=null,F="info",M=3000)=>{M4(),T({title:K,detail:q||null,kind:F||"info"}),Z4.current=setTimeout(()=>{T((k)=>k?.title===K?null:k)},M)},[M4]),R=I((K)=>{let q=y9(K,{editorOpen:h0,resolvePane:(F)=>N1.resolve(F)});if(q.kind==="open"){J1(q.path);return}if(q.kind==="toast")H(q.title,q.detail,q.level)},[h0,J1,H]),b=I(()=>{let K=u0;if(K)v_(K)},[u0,v_]),a=I((K)=>{if(!K)return;n((q)=>q.includes(K)?q:[...q,K])},[]),V0=I(async(K,q=null)=>{let F=(k)=>{k.scrollIntoView({behavior:"smooth",block:"center"}),k.classList.add("post-highlight"),setTimeout(()=>k.classList.remove("post-highlight"),2000)},M=document.getElementById("post-"+K);if(M){F(M);return}try{let k=typeof q==="string"&&q.trim()?q.trim():N,e=(await j5(K,k))?.thread?.[0];if(!e)return;C1((_0)=>{if(!_0)return[e];if(_0.some((t)=>t.id===e.id))return _0;return[..._0,e]}),requestAnimationFrame(()=>{setTimeout(()=>{let _0=document.getElementById("post-"+K);if(_0)F(_0)},50)})}catch(k){console.error("[scrollToMessage] Failed to fetch message",K,k)}},[N]),X0=I((K)=>{n((q)=>q.filter((F)=>F!==K))},[]),U0=I(()=>{n([])},[]),j0=I((K)=>{if(!Array.isArray(K)){n([]);return}let q=[],F=new Set;for(let M of K){if(typeof M!=="string"||!M.trim())continue;let k=M.trim();if(F.has(k))continue;F.add(k),q.push(k)}n(q)},[]),A0=I((K)=>{let q=typeof K==="string"&&K.trim()?K.trim():"Could not send your message.";H("Compose failed",q,"error",5000)},[H]),q1=I((K={})=>{let q=Date.now();if(D0.current=q,K.running)i0.current=!0,I0((F)=>F?F:!0);if(K.clearSilence)p0.current=0},[I0]),A1=I(()=>{if(D_.current)clearTimeout(D_.current),D_.current=null;b4.current=0},[]);c(()=>()=>{A1()},[A1]);let G=I(()=>{A1(),d((K)=>{if(!K)return K;if(!(K.last_activity||K.lastActivity))return K;let{last_activity:q,lastActivity:F,...M}=K;return M})},[A1]),w=I((K)=>{if(!K)return;A1();let q=Date.now();b4.current=q,d({type:K.type||"active",last_activity:!0}),D_.current=setTimeout(()=>{if(b4.current!==q)return;d((F)=>{if(!F||!(F.last_activity||F.lastActivity))return F;return null})},D9)},[A1]),S=I(()=>{i0.current=!1,I0(!1),D0.current=null,p0.current=0,C0.current="",Q0.current="",P0.current=null,d1.current=null,Z0.current=null,k0.current=null,S_.current=null,S1.current={inFlight:!1,lastAttemptAt:0,turnId:null},A1(),F0(null),M0(null),r0.current=!1,m0.current=!1},[A1,F0,M0,I0]),r=I((K)=>{if(!M9({remainingQueueCount:K,currentTurnId:Z0.current,isAgentTurnActive:D1}))return;k0.current=null,M0(null)},[D1,M0]),O0=I(()=>({agentStatus:null,agentDraft:{text:"",totalLines:0},agentPlan:"",agentThought:{text:"",totalLines:0},pendingRequest:null,currentTurnId:null,steerQueuedTurnId:null,isAgentTurnActive:!1,followupQueueItems:[],activeModel:null,activeThinkingLevel:null,supportsThinking:!1,activeModelUsage:null,contextUsage:null,isAgentRunning:!1,wasAgentActive:!1,draftBuffer:"",thoughtBuffer:"",lastAgentEvent:null,lastSilenceNotice:0,lastAgentResponse:null,currentTurnIdRef:null,steerQueuedTurnIdRef:null,thoughtExpanded:!1,draftExpanded:!1,agentStatusRef:null,silentRecovery:{inFlight:!1,lastAttemptAt:0,turnId:null}}),[]),v0=I(()=>({agentStatus:i,agentDraft:q0?{...q0}:{text:"",totalLines:0},agentPlan:$0||"",agentThought:Y0?{...Y0}:{text:"",totalLines:0},pendingRequest:K0,currentTurnId:W0,steerQueuedTurnId:c0,isAgentTurnActive:Boolean(D1),followupQueueItems:Array.isArray(H1)?H1.map((K)=>({...K})):[],activeModel:R0,activeThinkingLevel:j1,supportsThinking:Boolean(s0),activeModelUsage:Y1,contextUsage:Q1,isAgentRunning:Boolean(i0.current),wasAgentActive:Boolean(K_.current),draftBuffer:C0.current||"",thoughtBuffer:Q0.current||"",lastAgentEvent:D0.current||null,lastSilenceNotice:p0.current||0,lastAgentResponse:d1.current||null,currentTurnIdRef:Z0.current||null,steerQueuedTurnIdRef:k0.current||null,thoughtExpanded:Boolean(r0.current),draftExpanded:Boolean(m0.current),agentStatusRef:S_.current||null,silentRecovery:{...S1.current||{inFlight:!1,lastAttemptAt:0,turnId:null}}}),[R0,Y1,j1,q0,$0,i,Y0,Q1,W0,H1,D1,K0,c0,s0]),X1=I((K)=>{let q=K||O0();A1(),i0.current=Boolean(q.isAgentRunning),K_.current=Boolean(q.wasAgentActive),I0(Boolean(q.isAgentTurnActive)),D0.current=q.lastAgentEvent||null,p0.current=Number(q.lastSilenceNotice||0),C0.current=q.draftBuffer||"",Q0.current=q.thoughtBuffer||"",P0.current=q.pendingRequest||null,d1.current=q.lastAgentResponse||null,Z0.current=q.currentTurnIdRef||null,k0.current=q.steerQueuedTurnIdRef||null,S_.current=q.agentStatusRef||null,S1.current=q.silentRecovery||{inFlight:!1,lastAttemptAt:0,turnId:null},r0.current=Boolean(q.thoughtExpanded),m0.current=Boolean(q.draftExpanded),d(q.agentStatus||null),l(q.agentDraft?{...q.agentDraft}:{text:"",totalLines:0}),N0(q.agentPlan||""),L0(q.agentThought?{...q.agentThought}:{text:"",totalLines:0}),G0(q.pendingRequest||null),F0(q.currentTurnId||null),M0(q.steerQueuedTurnId||null),x0(Array.isArray(q.followupQueueItems)?q.followupQueueItems.map((F)=>({...F})):[]),n0(q.activeModel||null),V1(q.activeThinkingLevel||null),T1(Boolean(q.supportsThinking)),v1(q.activeModelUsage??null),W1(q.contextUsage??null)},[A1,O0,F0,x0,I0,M0]),l0=I((K)=>{if(!K)return;if(Z0.current===K)return;Z0.current=K,S1.current={inFlight:!1,lastAttemptAt:0,turnId:K},F0(K),k0.current=null,M0(null),C0.current="",Q0.current="",l({text:"",totalLines:0}),N0(""),L0({text:"",totalLines:0}),G0(null),P0.current=null,d1.current=null,r0.current=!1,m0.current=!1},[F0,M0]),J_=I((K)=>{if(typeof document<"u"){let t=typeof document.hasFocus==="function"?document.hasFocus():!0;if(!document.hidden&&t)return}let q=d1.current;if(!q||!q.post)return;if(K&&q.turnId&&q.turnId!==K)return;let F=q.post;if(F.id&&A4.current===F.id)return;let M=String(F?.data?.content||"").trim();if(!M)return;A4.current=F.id||A4.current,d1.current=null;let k=M.replace(/\s+/g," ").slice(0,200),h=R_.current||{},_0=(F?.data?.agent_id?h[F.data.agent_id]:null)?.name||"Pi";O4(_0,k)},[O4]),e0=I(async(K,q)=>{if(K!=="thought"&&K!=="draft")return;let F=Z0.current;if(K==="thought"){if(r0.current=q,F)try{await u9(F,"thought",q)}catch(M){console.warn("Failed to update thought visibility:",M)}if(!q)return;try{let M=F?await R9(F,"thought"):null;if(M?.text)Q0.current=M.text;L0((k)=>({...k||{text:"",totalLines:0},fullText:Q0.current||k?.fullText||"",totalLines:Number.isFinite(M?.total_lines)?M.total_lines:k?.totalLines||0}))}catch(M){console.warn("Failed to fetch full thought:",M)}return}if(m0.current=q,F)try{await u9(F,"draft",q)}catch(M){console.warn("Failed to update draft visibility:",M)}if(!q)return;try{let M=F?await R9(F,"draft"):null;if(M?.text)C0.current=M.text;l((k)=>({...k||{text:"",totalLines:0},fullText:C0.current||k?.fullText||"",totalLines:Number.isFinite(M?.total_lines)?M.total_lines:k?.totalLines||0}))}catch(M){console.warn("Failed to fetch full draft:",M)}},[]),m_=x(null),o_=I(()=>{let K=u_.current;if(!K)return;if(!(Math.abs(K.scrollTop)>150))K.scrollTop=0},[]);m_.current=o_;let a4=I((K)=>{let q=u_.current;if(!q||typeof K!=="function"){K?.();return}let{currentHashtag:F,searchQuery:M,searchOpen:k}=u1.current||{},h=!((M||k)&&!F),e=h?q.scrollHeight-q.scrollTop:q.scrollTop;K(),requestAnimationFrame(()=>{let _0=u_.current;if(!_0)return;if(h){let t=Math.max(_0.scrollHeight-e,0);_0.scrollTop=t}else{let t=Math.max(_0.scrollHeight-_0.clientHeight,0),s=Math.min(e,t);_0.scrollTop=s}})},[]),E_=I((K)=>{let q=u_.current;if(!q||typeof K!=="function"){K?.();return}let F=q.scrollTop;K(),requestAnimationFrame(()=>{let M=u_.current;if(!M)return;let k=Math.max(M.scrollHeight-M.clientHeight,0);M.scrollTop=Math.min(F,k)})},[]),u6="Queued as a follow-up (one-at-a-time).",g4="⁣",h1=I((K)=>{if(!K||!Array.isArray(K))return K;let q=__.current,F=new Set(q),M=K.filter((k)=>{if(F.has(k?.id))return!1;if(k?.data?.is_bot_message){let h=k?.data?.content;if(h===u6||h===g4)return!1}return!0});return M.length===K.length?K:M},[]),{posts:B4,setPosts:C1,hasMore:b6,setHasMore:t4,hasMoreRef:k4,loadPosts:F1,refreshTimeline:y1,loadMore:m2,loadMoreRef:U8}=W9({preserveTimelineScroll:a4,preserveTimelineScrollTop:E_,chatJid:N}),e4=w0(()=>h1(B4),[B4,H1,h1]),i8=I(()=>{let K=J0.current;if(!K)return;C1((q)=>q?q.filter((F)=>F.id!==K):q),J0.current=null},[C1]),{handleSplitterMouseDown:h9,handleSplitterTouchStart:c9,handleEditorSplitterMouseDown:p9,handleEditorSplitterTouchStart:i9,handleDockSplitterMouseDown:n9,handleDockSplitterTouchStart:l9}=z9({appShellRef:b_,sidebarWidthRef:r_,editorWidthRef:E4,dockHeightRef:z1}),g2=I(()=>{if(!i0.current)return;i0.current=!1,p0.current=0,D0.current=null,Z0.current=null,F0(null),r0.current=!1,m0.current=!1;let K=(C0.current||"").trim();if(C0.current="",Q0.current="",l({text:"",totalLines:0}),N0(""),L0({text:"",totalLines:0}),G0(null),P0.current=null,d1.current=null,!K){d({type:"error",title:"Response stalled - No content received"});return}let F=`${K}${`

⚠️ Response may be incomplete - the model stopped responding`}`,M=Date.now(),k=new Date().toISOString(),h={id:M,timestamp:k,data:{type:"agent_response",content:F,agent_id:"default",is_local_stall:!0}};J0.current=M,C1((e)=>e?c8([...e,h]):[h]),m_.current?.(),d(null)},[F0]);c(()=>{u1.current={currentHashtag:J,searchQuery:P,searchOpen:D}},[J,P,D]);let _1=I(()=>{let K=++r1.current,q=N;g9(q).then((F)=>{if(K!==r1.current)return;if(g1.current!==q)return;let M=f1.current,k=Array.isArray(F?.items)?F.items.map((h)=>({...h})).filter((h)=>!M.has(h.row_id)):[];if(k.length){x0((h)=>{if(h.length===k.length&&h.every((e,_0)=>e.row_id===k[_0].row_id))return h;return k});return}M.clear(),r(0),x0((h)=>h.length===0?h:[])}).catch(()=>{if(K!==r1.current)return;if(g1.current!==q)return;x0((F)=>F.length===0?F:[])})},[r,N,x0]),A_=I(async()=>{let K=N;try{let q=await S6(K);if(g1.current!==K)return;if(q)W1(q)}catch(q){if(g1.current!==K)return;console.warn("Failed to fetch agent context:",q)}},[N]),y_=I(async()=>{let K=N;try{let q=await b2(K);if(g1.current!==K)return null;if(!q||q.status!=="active"||!q.data){if(K_.current){let{currentHashtag:k,searchQuery:h,searchOpen:e}=u1.current||{};if(!k&&!h&&!e)y1()}return K_.current=!1,S(),S_.current=null,d(null),l({text:"",totalLines:0}),N0(""),L0({text:"",totalLines:0}),G0(null),P0.current=null,q??null}K_.current=!0;let F=q.data;S_.current=F;let M=F.turn_id||F.turnId;if(M)l0(M);if(q1({running:!0,clearSilence:!0}),G(),d(F),q.thought&&q.thought.text)L0((k)=>{if(k&&k.text&&k.text.length>=q.thought.text.length)return k;return Q0.current=q.thought.text,{text:q.thought.text,totalLines:q.thought.totalLines||0}});if(q.draft&&q.draft.text)l((k)=>{if(k&&k.text&&k.text.length>=q.draft.text.length)return k;return C0.current=q.draft.text,{text:q.draft.text,totalLines:q.draft.totalLines||0}});return q}catch(q){return console.warn("Failed to fetch agent status:",q),null}},[S,G,q1,y1,l0]),v6=I(async()=>{if(!i0.current)return null;if(P0.current)return null;let K=Z0.current||null,q=S1.current,F=Date.now();if(q.inFlight)return null;if(q.turnId===K&&F-q.lastAttemptAt<S2)return null;q.inFlight=!0,q.lastAttemptAt=F,q.turnId=K;try{let{currentHashtag:M,searchQuery:k,searchOpen:h}=u1.current||{};if(!M&&!k&&!h)await y1();return await _1(),await y_()}finally{q.inFlight=!1}},[y_,_1,y1]);c(()=>{let K=Math.min(1000,Math.max(100,Math.floor(f2/2))),q=setInterval(()=>{if(!i0.current)return;if(P0.current)return;let F=D0.current;if(!F)return;let M=Date.now(),k=M-F,h=x8(S_.current);if(k>=H9){if(!h)d({type:"waiting",title:"Re-syncing after a quiet period…"});v6();return}if(k>=f2){if(M-p0.current>=S2){if(!h){let e=Math.floor(k/1000);d({type:"waiting",title:`Waiting for model… No events for ${e}s`})}p0.current=M,v6()}}},K);return()=>clearInterval(q)},[v6]);let r9=I((K)=>{if(U(K),K!=="connected"){d(null),l({text:"",totalLines:0}),N0(""),L0({text:"",totalLines:0}),G0(null),P0.current=null,S();return}if(!H_.current){H_.current=!0;let{currentHashtag:k,searchQuery:h,searchOpen:e}=u1.current||{};if(!k&&!h&&!e)y1();y_(),_1(),A_();return}let{currentHashtag:q,searchQuery:F,searchOpen:M}=u1.current;if(!q&&!F&&!M)y1();y_(),_1(),A_()},[S,y1,y_,_1,A_]),s9=I(async(K)=>{E(K),C1(null),await F1(K)},[F1]),o9=I(async()=>{E(null),f(null),C1(null),await F1()},[F1]),d9=I(async(K,q=C)=>{if(!K||!K.trim())return;let F=q==="root"||q==="all"?q:"current";u(F),f(K.trim()),E(null),C1(null);try{let M=await f9(K.trim(),50,0,N,F,o0);C1(M.results),t4(!1)}catch(M){console.error("Failed to search:",M),C1([])}},[N,o0,C]),a9=I(()=>{y(!0),f(null),E(null),u("current"),C1([])},[]),t9=I(()=>{y(!1),f(null),F1()},[F1]),rZ=I(()=>{},[]),m6=!J&&!P&&!D,e9=I(async(K)=>{if(!K)return;let q=K.id,F=typeof K?.chat_jid==="string"&&K.chat_jid.trim()?K.chat_jid.trim():N,M=e4?.filter((h)=>h?.data?.thread_id===q&&h?.id!==q).length||0;if(M>0){if(!window.confirm(`Delete this message and its ${M} replies?`))return}let k=(h)=>{if(!h.length)return;i_((_0)=>{let t=new Set(_0);return h.forEach((s)=>t.add(s)),t}),setTimeout(()=>{if(E_(()=>{C1((_0)=>_0?_0.filter((t)=>!h.includes(t.id)):_0)}),i_((_0)=>{let t=new Set(_0);return h.forEach((s)=>t.delete(s)),t}),k4.current)U8.current?.({preserveScroll:!0,preserveMode:"top"})},180)};try{let h=await S9(q,M>0,F);if(h?.ids?.length)k(h.ids)}catch(h){let e=h?.message||"";if(M===0&&e.includes("Replies exist")){if(!window.confirm("Delete this message and its replies?"))return;let t=await S9(q,!0,F);if(t?.ids?.length)k(t.ids);return}console.error("Failed to delete post:",h),alert(`Failed to delete message: ${e}`)}},[N,e4,E_]),h2=I(async()=>{try{let K=await mZ();P1(J9(K));let q=K?.user||{};f_((M)=>{let k=typeof q.name==="string"&&q.name.trim()?q.name.trim():"You",h=typeof q.avatar_url==="string"?q.avatar_url.trim():null,e=typeof q.avatar_background==="string"&&q.avatar_background.trim()?q.avatar_background.trim():null;if(M.name===k&&M.avatar_url===h&&M.avatar_background===e)return M;return{name:k,avatar_url:h,avatar_background:e}});let F=(K?.agents||[]).find((M)=>M.id==="default");P4(F?.name,F?.avatar_url)}catch(K){console.warn("Failed to load agents:",K)}try{let K=N,q=await S6(K);if(g1.current!==K)return;if(q)W1(q)}catch{}},[P4,N]);c(()=>{h2();let K=j8("sidebarWidth",null),q=Number.isFinite(K)?Math.min(Math.max(K,160),600):280;if(r_.current=q,b_.current)b_.current.style.setProperty("--sidebar-width",`${q}px`)},[h2]);let G8=D1||i!==null,c2=I((K)=>{if(!K||typeof K!=="object")return;let q=K.agent_id;if(!q)return;let{agent_name:F,agent_avatar:M}=K;if(!F&&M===void 0)return;let k=R_.current?.[q]||{id:q},h=k.name||null,e=k.avatar_url??k.avatarUrl??k.avatar??null,_0=!1,t=!1;if(F&&F!==k.name)h=F,t=!0;if(M!==void 0){let s=typeof M==="string"?M.trim():null,H0=typeof e==="string"?e.trim():null,T0=s||null;if(T0!==(H0||null))e=T0,_0=!0}if(!t&&!_0)return;if(P1((s)=>{let T0={...s[q]||{id:q}};if(t)T0.name=h;if(_0)T0.avatar_url=e;return{...s,[q]:T0}}),q==="default")P4(h,e,_0?Date.now():null)},[P4]),p2=I((K)=>{if(!K||typeof K!=="object")return;let q=K.user_name??K.userName,F=K.user_avatar??K.userAvatar,M=K.user_avatar_background??K.userAvatarBackground;if(q===void 0&&F===void 0&&M===void 0)return;f_((k)=>{let h=typeof q==="string"&&q.trim()?q.trim():k.name||"You",e=F===void 0?k.avatar_url:typeof F==="string"&&F.trim()?F.trim():null,_0=M===void 0?k.avatar_background:typeof M==="string"&&M.trim()?M.trim():null;if(k.name===h&&k.avatar_url===e&&k.avatar_background===_0)return k;return{name:h,avatar_url:e,avatar_background:_0}})},[]),g6=I((K)=>{if(!K||typeof K!=="object")return;let q=K.model??K.current;if(q!==void 0)n0(q);if(K.thinking_level!==void 0)V1(K.thinking_level??null);if(K.supports_thinking!==void 0)T1(Boolean(K.supports_thinking));if(K.provider_usage!==void 0)v1(K.provider_usage??null)},[]),W8=I(()=>{let K=N;b9(K).then((q)=>{if(g1.current!==K)return;if(q)g6(q)}).catch(()=>{})},[g6,N]),c1=I(()=>{let K=N,q=(F)=>Array.isArray(F)?F.filter((M)=>M&&typeof M.chat_jid==="string"&&typeof M.agent_name==="string"&&M.agent_name.trim()):[];Promise.all([v9().catch(()=>({chats:[]})),R6(null,{includeArchived:!0}).catch(()=>({chats:[]}))]).then(([F,M])=>{if(g1.current!==K)return;let k=q(F?.chats),h=q(M?.chats);if(h.length===0){i1(k);return}let e=new Map(k.map((t)=>[t.chat_jid,t])),_0=h.map((t)=>{let s=e.get(t.chat_jid);return s?{...t,...s,is_active:s.is_active??t.is_active}:t});_0.sort((t,s)=>{if(t.chat_jid===K&&s.chat_jid!==K)return-1;if(s.chat_jid===K&&t.chat_jid!==K)return 1;let H0=Boolean(t.archived_at),T0=Boolean(s.archived_at);if(H0!==T0)return H0?1:-1;if(Boolean(t.is_active)!==Boolean(s.is_active))return t.is_active?-1:1;return String(t.chat_jid).localeCompare(String(s.chat_jid))}),i1(_0)}).catch(()=>{if(g1.current!==K)return;i1([])})},[N]),b1=I(()=>{R6(o0).then((K)=>{let q=Array.isArray(K?.chats)?K.chats.filter((F)=>F&&typeof F.chat_jid==="string"&&typeof F.agent_name==="string"):[];t1(q)}).catch(()=>{})},[o0]),_N=I((K)=>{let q=K?.row_id;if(q==null)return;f1.current.add(q),x0((F)=>F.filter((M)=>M?.row_id!==q)),cZ(q,u2(N)).then(()=>{_1()}).catch((F)=>{console.warn("[queue] Failed to steer queued item:",F),H("Failed to steer message","The queued message could not be sent as steering.","warning"),f1.current.delete(q),_1()})},[N,_1,x0,H]),$N=I((K)=>{let q=K?.row_id;if(q==null)return;let F=t0.current.filter((M)=>M?.row_id!==q).length;f1.current.add(q),r(F),x0((M)=>M.filter((k)=>k?.row_id!==q)),pZ(q,u2(N)).then(()=>{_1()}).catch((M)=>{console.warn("[queue] Failed to remove queued item:",M),H("Failed to remove message","The queued message could not be removed.","warning"),f1.current.delete(q),_1()})},[r,N,_1,x0,H]),O8=I((K)=>{if(!K||typeof K!=="object")return;if(c1(),b1(),K?.queued==="followup"||K?.queued==="steer"){_1();return}let q=K?.command;if(q&&typeof q==="object"&&(q?.queued_followup||q?.queued_steer))_1()},[c1,b1,_1]),h6=I(()=>{if(L_.current)L_.current.abort(),L_.current=null;a0(null)},[]),n8=I(async(K)=>{let q=String(K||"").trim();if(!q)return H("BTW needs a question","Usage: /btw <question>","warning"),!0;if(L_.current)L_.current.abort();let F=new AbortController;L_.current=F,a0({question:q,answer:"",thinking:"",error:null,model:null,status:"running"});try{let M=await iZ(q,{signal:F.signal,chatJid:N3(N),systemPrompt:"Answer the user briefly and directly. This is a side conversation that should not affect the main chat until explicitly injected.",onEvent:(k,h)=>{if(k==="side_prompt_start")a0((e)=>e?{...e,status:"running"}:e)},onThinkingDelta:(k)=>{a0((h)=>h?{...h,thinking:`${h.thinking||""}${k||""}`}:h)},onTextDelta:(k)=>{a0((h)=>h?{...h,answer:`${h.answer||""}${k||""}`}:h)}});if(L_.current!==F)return!0;a0((k)=>k?{...k,answer:M?.result||k.answer||"",thinking:M?.thinking||k.thinking||"",model:M?.model||null,status:"success",error:null}:k)}catch(M){if(F.signal.aborted)return!0;a0((k)=>k?{...k,status:"error",error:M?.payload?.error||M?.message||"BTW request failed."}:k)}finally{if(L_.current===F)L_.current=null}return!0},[N,H]),NN=I(async({content:K})=>{let q=$3(K);if(!q)return!1;if(q.type==="help")return H("BTW usage","Use /btw <question> to open a side conversation.","info",4000),!0;if(q.type==="clear")return h6(),H("BTW cleared","Closed the side conversation panel.","info"),!0;if(q.type==="ask")return await n8(q.question),!0;return!1},[h6,n8,H]),jN=I(()=>{if(f0?.question)n8(f0.question)},[f0,n8]),YN=I(async()=>{let K=L3(f0);if(!K)return;try{let q=await c4("default",K,null,[],G8?"queue":null,N);O8(q),H(q?.queued==="followup"?"BTW queued":"BTW injected",q?.queued==="followup"?"The BTW summary was queued as a follow-up because the agent is busy.":"The BTW summary was sent to the main chat.","info",3500)}catch(q){H("BTW inject failed",q?.message||"Could not inject BTW answer into chat.","warning")}},[f0,O8,G8,H]),i2=I(async(K=null)=>{let[q,F,M,k,h,e,_0]=await Promise.allSettled([b2(N),S6(N),g9(N),b9(N),v9(),R6(o0),h4(20,null,N)]),t=q.status==="fulfilled"?q.value:null,s=F.status==="fulfilled"?F.value:null,H0=M.status==="fulfilled"?M.value:null,T0=k.status==="fulfilled"?k.value:null,a1=h.status==="fulfilled"?h.value:null,M1=e.status==="fulfilled"?e.value:null,d_=_0.status==="fulfilled"?_0.value:null,M_=Array.isArray(d_?.posts)?d_.posts:Array.isArray(B4)?B4:[],s2=M_.length?M_[M_.length-1]:null,UN=M_.filter((i6)=>i6?.data?.is_bot_message).length,GN=M_.filter((i6)=>!i6?.data?.is_bot_message).length,o2=Number(H0?.count??t0.current.length??0)||0,d2=Array.isArray(a1?.chats)?a1.chats.length:B1.length,WN=Array.isArray(M1?.chats)?M1.chats.length:g0.length,a2=Number(s?.percent??Q1?.percent??0)||0,ON=Number(s?.tokens??Q1?.tokens??0)||0,zN=Number(s?.contextWindow??Q1?.contextWindow??0)||0,FN=T0?.current??R0??null,HN=T0?.thinking_level??j1??null,DN=T0?.supports_thinking??s0,JN=t?.status||(D1?"active":"idle"),EN=t?.data?.type||t?.type||null;return{generatedAt:new Date().toISOString(),request:K,chat:{currentChatJid:N,rootChatJid:o0,activeChats:d2,branches:WN},agent:{status:JN,phase:EN,running:Boolean(D1)},model:{current:FN,thinkingLevel:HN,supportsThinking:Boolean(DN)},context:{tokens:ON,contextWindow:zN,percent:a2},queue:{count:o2},timeline:{loadedPosts:M_.length,botPosts:UN,userPosts:GN,latestPostId:s2?.id??null,latestTimestamp:s2?.timestamp??null},bars:[{key:"context",label:"Context",value:Math.max(0,Math.min(100,Math.round(a2)))},{key:"queue",label:"Queue",value:Math.max(0,Math.min(100,o2*18))},{key:"activeChats",label:"Active chats",value:Math.max(0,Math.min(100,d2*12))},{key:"posts",label:"Timeline load",value:Math.max(0,Math.min(100,M_.length*5))}]}},[B1,R0,j1,Q1,g0,N,o0,D1,B4,s0]),z8=I(()=>{W8(),c1(),b1(),_1(),A_()},[W8,c1,b1,_1,A_]);c(()=>{z8();let K=setInterval(()=>{W8(),c1(),b1(),_1()},60000);return()=>clearInterval(K)},[z8,W8,c1,b1,_1]),c(()=>{b1()},[b1]),c(()=>{let K=!1,q=()=>{if(K)return;requestAnimationFrame(()=>{if(K)return;o_()})};if(J)return F1(J),()=>{K=!0};if(P)return f9(P,50,0,N,C,o0).then((F)=>{if(K)return;C1(F.results),t4(!1)}).catch((F)=>{if(K)return;console.error("Failed to search:",F),C1([]),t4(!1)}),()=>{K=!0};return F1().then(()=>{q()}).catch((F)=>{if(K)return;console.error("Failed to load timeline:",F)}),()=>{K=!0}},[N,J,P,C,o0,F1,o_,t4,C1]),c(()=>{let K=u4.current||N;R4.current.set(K,v0())},[N,v0]),c(()=>{let K=u4.current||N;if(K===N)return;R4.current.set(K,v0()),u4.current=N,f1.current.clear(),X1(R4.current.get(N)||null),_1(),y_(),A_()},[N,y_,A_,_1,X1,v0]);let LN=I(()=>{let{currentHashtag:K,searchQuery:q,searchOpen:F}=u1.current||{};if(!K&&!q&&!F)y1();z8()},[z8,y1]),F8=I((K,q="streaming")=>{let F=Q3({...K,...K&&K.status?{}:{status:q}});if(!F)return;let M=p1(F);if(M&&B0.current.has(M))return;m((k)=>{let h=p1(k),e=Boolean(M&&h&&M===h),_0={...e&&k?.artifact?k.artifact:{},...F.artifact||{}};return{...e&&k?k:{},...F,artifact:_0,source:"live",originChatJid:F.originChatJid||N,openedAt:e&&k?.openedAt?k.openedAt:new Date().toISOString(),liveUpdatedAt:new Date().toISOString()}})},[N]),c6=I((K,q)=>{let F=q?.turn_id,M=typeof q?.chat_jid==="string"&&q.chat_jid.trim()?q.chat_jid.trim():null,h=M?M===N:K==="connected"||K==="workspace_update";if(h)c2(q),p2(q);if(K==="ui_theme"){r$(q);return}if(K==="generated_widget_open"){if(!h)return;if(F&&!Z0.current)l0(F);F8(q,"loading");return}if(K==="generated_widget_delta"){if(!h)return;if(F&&!Z0.current)l0(F);F8(q,"streaming");return}if(K==="generated_widget_final"){if(!h)return;if(F&&!Z0.current)l0(F);F8(q,"final");return}if(K==="generated_widget_error"){if(!h)return;F8(q,"error");return}if(K==="generated_widget_close"){if(!h)return;let s=p1(q);m((H0)=>{if(!H0||H0?.source!=="live")return H0;let T0=p1(H0);if(s&&T0&&s!==T0)return H0;return null});return}if(K?.startsWith("agent_")){if(!(K==="agent_draft_delta"||K==="agent_thought_delta"||K==="agent_draft"||K==="agent_thought"))G()}if(K==="connected"){d(null),l({text:"",totalLines:0}),N0(""),L0({text:"",totalLines:0}),G0(null),P0.current=null,S();let s=N;b2(s).then((M1)=>{if(g1.current!==s)return;if(!M1||M1.status!=="active"||!M1.data)return;let d_=M1.data,M_=d_.turn_id||d_.turnId;if(M_)l0(M_);if(q1({clearSilence:!0}),w(d_),M1.thought&&M1.thought.text)Q0.current=M1.thought.text,L0({text:M1.thought.text,totalLines:M1.thought.totalLines||0});if(M1.draft&&M1.draft.text)C0.current=M1.draft.text,l({text:M1.draft.text,totalLines:M1.draft.totalLines||0})}).catch((M1)=>{console.warn("Failed to fetch agent status:",M1)});let{currentHashtag:H0,searchQuery:T0,searchOpen:a1}=u1.current||{};if(!H0&&!T0&&!a1)y1();z8();return}if(K==="agent_status"){if(!h){if(q?.type==="done"||q?.type==="error")c1(),b1();return}if(q.type==="done"||q.type==="error"){if(F&&Z0.current&&F!==Z0.current)return;if(q.type==="done"){J_(F||Z0.current);let{currentHashtag:s,searchQuery:H0,searchOpen:T0}=u1.current||{};if(!s&&!H0&&!T0)y1();if(q.context_usage)W1(q.context_usage)}if(K_.current=!1,S(),f1.current.clear(),c1(),_1(),l({text:"",totalLines:0}),N0(""),L0({text:"",totalLines:0}),G0(null),q.type==="error")d({type:"error",title:q.title||"Agent error"}),setTimeout(()=>d(null),8000);else d(null)}else{if(F)l0(F);if(q1({running:!0,clearSilence:!0}),q.type==="thinking")C0.current="",Q0.current="",l({text:"",totalLines:0}),N0(""),L0({text:"",totalLines:0});S_.current=q,d((s)=>{if(s&&s.type===q.type&&s.title===q.title)return s;return q})}return}if(K==="agent_steer_queued"){if(!h)return;if(F&&Z0.current&&F!==Z0.current)return;let s=F||Z0.current;if(!s)return;k0.current=s,M0(s);return}if(K==="agent_followup_queued"){if(!h)return;let s=q?.row_id,H0=q?.content;if(s!=null&&typeof H0==="string"&&H0.trim())x0((T0)=>{if(T0.some((a1)=>a1?.row_id===s))return T0;return[...T0,{row_id:s,content:H0,timestamp:q?.timestamp||null,thread_id:q?.thread_id??null}]});_1();return}if(K==="agent_followup_consumed"){if(!h)return;let s=q?.row_id;if(s!=null){let M1=t0.current.filter((d_)=>d_.row_id!==s).length;r(M1),x0((d_)=>d_.filter((M_)=>M_.row_id!==s))}_1();let{currentHashtag:H0,searchQuery:T0,searchOpen:a1}=u1.current||{};if(!H0&&!T0&&!a1)y1();return}if(K==="agent_followup_removed"){if(!h)return;let s=q?.row_id;if(s!=null){let H0=t0.current.filter((T0)=>T0.row_id!==s).length;f1.current.add(s),r(H0),x0((T0)=>T0.filter((a1)=>a1.row_id!==s))}_1();return}if(K==="agent_draft_delta"){if(!h)return;if(F&&Z0.current&&F!==Z0.current)return;if(F&&!Z0.current)l0(F);if(q1({running:!0,clearSilence:!0}),q?.reset)C0.current="";if(q?.delta)C0.current+=q.delta;let s=Date.now();if(!J4.current||s-J4.current>=100){J4.current=s;let H0=C0.current,T0=R2(H0);if(m0.current)l((a1)=>({text:a1?.text||"",totalLines:T0,fullText:H0}));else l({text:H0,totalLines:T0})}return}if(K==="agent_draft"){if(!h)return;if(F&&Z0.current&&F!==Z0.current)return;if(F&&!Z0.current)l0(F);q1({running:!0,clearSilence:!0});let s=q.text||"",H0=q.mode||(q.kind==="plan"?"replace":"append"),T0=Number.isFinite(q.total_lines)?q.total_lines:s?s.replace(/\r\n/g,`
`).split(`
`).length:0;if(q.kind==="plan")if(H0==="replace")N0(s);else N0((a1)=>(a1||"")+s);else if(!m0.current)C0.current=s,l({text:s,totalLines:T0});return}if(K==="agent_thought_delta"){if(!h)return;if(F&&Z0.current&&F!==Z0.current)return;if(F&&!Z0.current)l0(F);if(q1({running:!0,clearSilence:!0}),q?.reset)Q0.current="";if(typeof q?.delta==="string")Q0.current+=q.delta;let s=Date.now();if(r0.current&&(!l_.current||s-l_.current>=100)){l_.current=s;let H0=Q0.current;L0((T0)=>({text:T0?.text||"",totalLines:R2(H0),fullText:H0}))}return}if(K==="agent_thought"){if(!h)return;if(F&&Z0.current&&F!==Z0.current)return;if(F&&!Z0.current)l0(F);q1({running:!0,clearSilence:!0});let s=q.text||"",H0=Number.isFinite(q.total_lines)?q.total_lines:s?s.replace(/\r\n/g,`
`).split(`
`).length:0;if(!r0.current)Q0.current=s,L0({text:s,totalLines:H0});return}if(K==="model_changed"){if(!h)return;if(q?.model!==void 0)n0(q.model);if(q?.thinking_level!==void 0)V1(q.thinking_level??null);if(q?.supports_thinking!==void 0)T1(Boolean(q.supports_thinking));let s=N;S6(s).then((H0)=>{if(g1.current!==s)return;if(H0)W1(H0)}).catch(()=>{});return}if(K==="workspace_update"){if(typeof window<"u")window.dispatchEvent(new CustomEvent("workspace-update",{detail:q}));return}if(x9(K)){if(!h)return;if(w9(K,q),K==="extension_ui_notify"&&typeof q?.message==="string")H(q.message,null,q?.type||"info");if(K==="extension_ui_error"&&typeof q?.error==="string")H("Extension UI error",q.error,"error",5000);return}let{currentHashtag:e,searchQuery:_0,searchOpen:t}=u1.current;if(K==="agent_response"){if(!h)return;i8(),d1.current={post:q,turnId:Z0.current}}if(!e&&!_0&&!t&&h&&(K==="new_post"||K==="new_reply"||K==="agent_response"))C1((s)=>{if(!s)return[q];if(s.some((H0)=>H0.id===q.id))return s;return[...s,q]}),m_.current?.();if(K==="interaction_updated"){if(!h)return;if(e||_0||t)return;C1((s)=>{if(!s)return s;if(!s.some((H0)=>H0.id===q.id))return s;return s.map((H0)=>H0.id===q.id?q:H0)})}if(K==="interaction_deleted"){if(!h)return;if(e||_0||t)return;let s=q?.ids||[];if(s.length){if(E_(()=>{C1((H0)=>H0?H0.filter((T0)=>!s.includes(T0.id)):H0)}),k4.current)U8.current?.({preserveScroll:!0,preserveMode:"top"})}}},[F8,S,G,N,U8,q1,J_,E_,c1,b1,y1,i8,l0,w,c2,p2,W8,_1,x0]);c(()=>{if(typeof window>"u")return;let K=window.__PICLAW_TEST_API||{};return K.emit=c6,K.reset=()=>{i8(),S(),d(null),l({text:"",totalLines:0}),N0(""),L0({text:"",totalLines:0}),G0(null)},K.finalize=()=>g2(),window.__PICLAW_TEST_API=K,()=>{if(window.__PICLAW_TEST_API===K)window.__PICLAW_TEST_API=void 0}},[S,g2,c6,i8]),U9({handleSseEvent:c6,handleConnectionStatusChange:r9,loadPosts:F1,onWake:LN,chatJid:N}),c(()=>{if(!e4||e4.length===0)return;let K=location.hash;if(!K||!K.startsWith("#msg-"))return;let q=K.slice(5);V0(q),history.replaceState(null,"",location.pathname+location.search)},[e4,V0]);let p6=i!==null;c(()=>{if(B!=="connected")return;let q=setInterval(()=>{let{currentHashtag:F,searchQuery:M,searchOpen:k}=u1.current||{},h=!F&&!M&&!k;if(p6){if(h)y1();_1(),y_(),A_()}else{if(h)y1();y_(),A_()}},p6?15000:60000);return()=>clearInterval(q)},[B,p6,y_,A_,_1,y1]),c(()=>{return I9(()=>{y_(),A_(),_1()})},[y_,A_,_1]);let ZN=I(()=>{_4((K)=>!K)},[]),n2=I((K)=>{if(typeof window>"u")return;let q=String(K||"").trim();if(!q||q===N)return;let F=l4(window.location.href,q,{chatOnly:j});$?.(F)},[j,N,$]),l2=I(async()=>{if(typeof window>"u"||!z0?.chat_jid)return;let K=Date.now(),q=T9();if(!q)return;if(v4.current||K<o4.current||q.inFlight||K<q.cooldownUntil)return;v4.current=!0,q.inFlight=!0,m4(!0);try{let F=z0.display_name||z0.agent_name||"",M=window.prompt("Agent name",F);if(M===null)return;let k=M.trim(),h=k.toLowerCase().replace(/[^a-z0-9_-]+/g,"-").replace(/^-+|-+$/g,"").replace(/-{2,}/g,"-")||z0.agent_name||"",e=await gZ(z0.chat_jid,{displayName:k,agentName:h});await Promise.allSettled([c1(),b1()]);let _0=e?.branch?.agent_name||h||z0.agent_name||"",t=e?.branch?.display_name||k||_0;H("Branch renamed",`${t} (@${_0})`,"info",3500)}catch(F){let M=F instanceof Error?F.message:String(F||"Could not rename branch."),k=/already in use/i.test(M||"")?`${M} Switch to or restore that existing session from the session manager.`:M;H("Could not rename branch",k||"Could not rename branch.","warning",5000)}finally{v4.current=!1,m4(!1);let F=Date.now()+RZ;o4.current=F;let M=T9();if(M)M.inFlight=!1,M.cooldownUntil=F}},[z0,c1,b1,m4,H]),r2=I(async(K=null)=>{if(typeof window>"u")return;let q=typeof K==="string"&&K.trim()?K.trim():"",F=typeof N==="string"&&N.trim()?N.trim():"",M=q||z0?.chat_jid||F;if(!M){H("Could not prune branch","No active session is selected yet.","warning",4000);return}let k=(z0?.chat_jid===M?z0:null)||g0.find((t)=>t?.chat_jid===M)||B1.find((t)=>t?.chat_jid===M)||null;if(k?.chat_jid===(k?.root_chat_jid||k?.chat_jid)){H("Cannot prune branch","The root chat branch cannot be pruned.","warning",4000);return}let e=`@${k?.agent_name||M}${k?.chat_jid?` — ${k.chat_jid}`:""}`;if(!window.confirm(`Prune ${e}?

This archives the branch agent and removes it from the branch picker. Chat history is preserved.`))return;try{await hZ(M),await Promise.allSettled([c1(),b1()]);let t=k?.root_chat_jid||"web:default";H("Branch pruned",`${e} has been archived.`,"info",3000);let s=l4(window.location.href,t,{chatOnly:j});$?.(s)}catch(t){let s=t instanceof Error?t.message:String(t||"Could not prune branch.");H("Could not prune branch",s||"Could not prune branch.","warning",5000)}},[B1,j,z0,g0,N,$,c1,b1,H]),VN=I(async(K)=>{let q=typeof K==="string"?K.trim():"";if(!q||typeof m9!=="function")return;try{let F=await m9(q);await Promise.allSettled([c1(),b1()]);let M=F?.branch,k=typeof M?.chat_jid==="string"&&M.chat_jid.trim()?M.chat_jid.trim():q,h=typeof M?.agent_name==="string"&&M.agent_name.trim()?`@${M.agent_name.trim()}`:k;H("Branch restored",`Restored ${h}.`,"info",3200);let e=l4(window.location.href,k,{chatOnly:j});$?.(e)}catch(F){let M=F instanceof Error?F.message:String(F||"Could not restore branch.");H("Could not restore branch",M||"Could not restore branch.","warning",5000)}},[j,$,c1,b1,H]);c(()=>{if(!V||typeof window>"u")return;let K=!1;return(async()=>{try{p_({status:"running",message:"Preparing a new chat branch…"});let q=await E8(Q);if(K)return;let F=q?.branch,M=typeof F?.chat_jid==="string"&&F.chat_jid.trim()?F.chat_jid.trim():null;if(!M)throw Error("Branch fork did not return a chat id.");let k=l4(window.location.href,M,{chatOnly:!0});$?.(k,{replace:!0})}catch(q){if(K)return;p_({status:"error",message:M6(q)})}})(),()=>{K=!0}},[V,Q,$]);let BN=I((K)=>{if(!K||typeof K!=="object")return;let q=p1(K);if(q)B0.current.delete(q);m({...K,openedAt:new Date().toISOString()})},[]),H8=I(()=>{m((K)=>{let q=p1(K);if(K?.source==="live"&&q)B0.current.add(q);return null})},[]),KN=I((K,q)=>{let F=typeof K?.kind==="string"?K.kind:"",M=p1(q);if(!F||!M)return;if(F==="widget.close"){H8();return}if(F==="widget.submit"){let k=G3(K?.payload),h=W3(K?.payload),e=new Date().toISOString();if(m((_0)=>{let t=p1(_0);if(!_0||t!==M)return _0;return{..._0,runtimeState:{..._0.runtimeState||{},lastEventKind:F,lastEventPayload:K?.payload||null,lastSubmitAt:e,lastHostUpdate:{type:"submit_pending",submittedAt:e,preview:k||null}}}}),!k){if(H("Widget submission received","The widget submitted data without a message payload yet.","info",3500),h)H8();return}(async()=>{try{let _0=await c4("default",k,null,[],G8?"queue":null,N);if(O8(_0),m((t)=>{let s=p1(t);if(!t||s!==M)return t;return{...t,runtimeState:{...t.runtimeState||{},lastHostUpdate:{type:_0?.queued==="followup"?"submit_queued":"submit_sent",submittedAt:e,preview:k,queued:_0?.queued||null}}}}),H(_0?.queued==="followup"?"Widget submission queued":"Widget submission sent",_0?.queued==="followup"?"The widget message was queued because the agent is busy.":"The widget message was sent to the chat.","info",3500),h)H8()}catch(_0){m((t)=>{let s=p1(t);if(!t||s!==M)return t;return{...t,runtimeState:{...t.runtimeState||{},lastHostUpdate:{type:"submit_failed",submittedAt:e,preview:k,error:_0?.message||"Could not send the widget message."}}}}),H("Widget submission failed",_0?.message||"Could not send the widget message.","warning",5000)}})();return}if(F==="widget.ready"||F==="widget.request_refresh"){let k=new Date().toISOString(),h=Boolean(K?.payload?.buildDashboard||K?.payload?.dashboardKind==="internal-state"),e=Number(q?.runtimeState?.refreshCount||0)+1;if(m((_0)=>{let t=p1(_0);if(!_0||t!==M)return _0;return{..._0,runtimeState:{..._0.runtimeState||{},lastEventKind:F,lastEventPayload:K?.payload||null,...F==="widget.ready"?{readyAt:k,lastHostUpdate:{type:"ready_ack",at:k}}:{},...F==="widget.request_refresh"?{lastRefreshRequestAt:k,refreshCount:e,lastHostUpdate:{type:h?"refresh_building":"refresh_ack",at:k,count:e,echo:K?.payload||null}}:{}}}}),F==="widget.request_refresh")if(h)(async()=>{try{let _0=await i2(K?.payload||null);m((t)=>{let s=p1(t);if(!t||s!==M)return t;return{...t,runtimeState:{...t.runtimeState||{},dashboard:_0,lastHostUpdate:{type:"refresh_dashboard",at:new Date().toISOString(),count:e,echo:K?.payload||null}}}}),H("Dashboard built","Live dashboard state pushed into the widget.","info",3000)}catch(_0){m((t)=>{let s=p1(t);if(!t||s!==M)return t;return{...t,runtimeState:{...t.runtimeState||{},lastHostUpdate:{type:"refresh_failed",at:new Date().toISOString(),count:e,error:_0?.message||"Could not build dashboard."}}}}),H("Dashboard build failed",_0?.message||"Could not build dashboard.","warning",5000)}})();else H("Widget refresh requested","The widget received a host acknowledgement update.","info",3000)}},[i2,N,H8,O8,G8,H]);c(()=>{B0.current.clear(),m(null)},[N]);let QN=I(async()=>{if(typeof window>"u")return;try{let q=(await E8(N))?.branch,F=typeof q?.chat_jid==="string"&&q.chat_jid.trim()?q.chat_jid.trim():null;if(!F)throw Error("Branch fork did not return a chat id.");await Promise.allSettled([c1(),b1()]);let M=q?.agent_name?`@${q.agent_name}`:F;H("New branch created",`Switched to ${M}.`,"info",2500);let k=l4(window.location.href,F,{chatOnly:j});$?.(k)}catch(K){H("Could not create branch",M6(K),"warning",5000)}},[j,N,$,c1,b1,H]),l8=I((K,q)=>{if(typeof window>"u"||X)return;let F=typeof K==="string"&&K.trim()?K.trim():"";if(!F)return;let M=()=>{let _0=d0.get(F);if(!_0||_0.dirty)return;z4(F)},k=d3(F);if(!k){H("Could not open pane window","Opening pane windows is unavailable in standalone webapp mode.","warning",5000);return}let h=o3(window.location.href,F,{label:typeof q==="string"&&q.trim()?q.trim():void 0,chatJid:N});if(k.mode==="tab"){if(!window.open(h,k.target)){H("Could not open pane window","The browser blocked opening a new tab or window.","warning",5000);return}M();return}let e=l5(k);if(!e){H("Could not open pane window","The browser blocked opening a new tab or window.","warning",5000);return}r5(e,{title:typeof q==="string"&&q.trim()?`Opening ${q}…`:"Opening pane…",message:"Preparing a standalone pane window. This should only take a moment."}),s5(e,h),M()},[N,z4,X,H]);c(()=>{let K=(F)=>{let M=F.detail?.path,k=typeof F.detail?.label==="string"&&F.detail.label.trim()?F.detail.label.trim():void 0;if(M)J1(M,k?{label:k}:void 0)},q=(F)=>{let M=F.detail?.path,k=typeof F.detail?.label==="string"&&F.detail.label.trim()?F.detail.label.trim():void 0;if(M)l8(M,k)};return document.addEventListener("office-viewer:open-tab",K),document.addEventListener("drawio:open-tab",K),document.addEventListener("csv-viewer:open-tab",K),document.addEventListener("pdf-viewer:open-tab",K),document.addEventListener("image-viewer:open-tab",K),document.addEventListener("video-viewer:open-tab",K),document.addEventListener("vnc:open-tab",K),document.addEventListener("pane:popout",q),()=>{document.removeEventListener("office-viewer:open-tab",K),document.removeEventListener("drawio:open-tab",K),document.removeEventListener("csv-viewer:open-tab",K),document.removeEventListener("pdf-viewer:open-tab",K),document.removeEventListener("image-viewer:open-tab",K),document.removeEventListener("video-viewer:open-tab",K),document.removeEventListener("vnc:open-tab",K),document.removeEventListener("pane:popout",q)}},[l8,J1]);let qN=I(async()=>{if(typeof window>"u"||X)return;let K=l3(N);if(!K){H("Could not open branch window","Opening branch windows is unavailable in standalone webapp mode.","warning",5000);return}if(K.mode==="tab"){let F=s3(window.location.href,N,{chatOnly:!0});if(!window.open(F,K.target))H("Could not open branch window","The browser blocked opening a new tab or window.","warning",5000);return}let q=l5(K);if(!q){H("Could not open branch window","The browser blocked opening a new tab or window.","warning",5000);return}r5(q,{title:"Opening branch…",message:"Preparing a new chat branch. This should only take a moment."});try{let M=(await E8(N))?.branch,k=typeof M?.chat_jid==="string"&&M.chat_jid.trim()?M.chat_jid.trim():null;if(!k)throw Error("Branch fork did not return a chat id.");try{let e=await L5();i1(Array.isArray(e?.chats)?e.chats:[])}catch{}try{let e=await R6(o0);t1(Array.isArray(e?.chats)?e.chats:[])}catch{}let h=l4(window.location.href,k,{chatOnly:!0});s5(q,h)}catch(F){r3(q),H("Could not open branch window",M6(F),"error",5000)}},[N,o0,X,H]);c(()=>{if(!h0)return;if(typeof window>"u")return;let K=b_.current;if(!K)return;if(!E4.current){let q=j8("editorWidth",null),F=r_.current||280;E4.current=Number.isFinite(q)?q:F}if(K.style.setProperty("--editor-width",`${E4.current}px`),!z1.current){let q=j8("dockHeight",null);z1.current=Number.isFinite(q)?q:200}K.style.setProperty("--dock-height",`${z1.current}px`)},[h0]),c(()=>{if(!m1||j)return;let K=(q)=>{if(q.ctrlKey&&q.key==="`")q.preventDefault(),Y_()};return document.addEventListener("keydown",K),()=>document.removeEventListener("keydown",K)},[Y_,m1,j]),c(()=>{if(j)return;let K=(q)=>{if(q.ctrlKey&&q.shiftKey&&(q.key==="Z"||q.key==="z")){q.preventDefault(),Y4();return}if(q.key==="Escape"&&w1)q.preventDefault(),o1()};return document.addEventListener("keydown",K),()=>document.removeEventListener("keydown",K)},[Y4,o1,w1,j]);let XN=Boolean(c0&&c0===(i?.turn_id||W0));if(V)return O`
            <div class="app-shell chat-only">
                <div class="container" style=${{display:"flex",alignItems:"center",justifyContent:"center",minHeight:"100vh",padding:"24px"}}>
                    <div class="card" style=${{width:"min(560px, 100%)",padding:"24px"}}>
                        <h1 style=${{margin:"0 0 12px",fontSize:"1.1rem"}}>
                            ${n1.status==="error"?"Could not open branch window":"Opening branch…"}
                        </h1>
                        <p style=${{margin:0,lineHeight:1.6}}>${n1.message}</p>
                    </div>
                </div>
            </div>
        `;if(Y)return O`
            <div class=${`app-shell pane-popout${h0?" editor-open":""}`} ref=${b_}>
                <div class="editor-pane-container pane-popout-container">
                    ${h0&&!K1&&O`
                        <div class="pane-popout-controls" role="toolbar" aria-label="Pane window controls">
                            ${B_?O`
                                    <details class="pane-popout-controls-menu">
                                        <summary class="pane-popout-controls-trigger" aria-label="Pane window controls">
                                            <span class="pane-popout-controls-title">${F_}</span>
                                            <svg viewBox="0 0 16 16" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                                <polyline points="4.5 6.5 8 10 11.5 6.5" />
                                            </svg>
                                        </summary>
                                        <div class="pane-popout-controls-panel">
                                            ${O1.length>1&&O`
                                                <div class="pane-popout-controls-section">
                                                    <div class="pane-popout-controls-section-title">Open panes</div>
                                                    <div class="pane-popout-controls-list">
                                                        ${O1.map((K)=>O`
                                                            <button
                                                                type="button"
                                                                class=${`pane-popout-controls-item${K.id===u0?" active":""}`}
                                                                onClick=${(q)=>{W_(K.id),q.currentTarget.closest("details")?.removeAttribute("open")}}
                                                            >
                                                                ${K.label}
                                                            </button>
                                                        `)}
                                                    </div>
                                                </div>
                                            `}
                                            ${u0&&R1.has(u0)&&O`
                                                <button type="button" class="pane-popout-controls-action" onClick=${(K)=>{O_(u0),K.currentTarget.closest("details")?.removeAttribute("open")}}>
                                                    Hide preview
                                                </button>
                                            `}
                                        </div>
                                    </details>
                                `:O`
                                    <div class="pane-popout-controls-label" aria-label=${F_}>${F_}</div>
                                `}
                        </div>
                    `}
                    ${h0?O`<div class="editor-pane-host" ref=${N_}></div>`:O`<div class="card" style=${{margin:"24px",padding:"24px",maxWidth:"640px"}}>
                            <h1 style=${{margin:"0 0 12px",fontSize:"1.1rem"}}>Opening pane…</h1>
                            <p style=${{margin:0,lineHeight:1.6}}>${L||"No pane path provided."}</p>
                        </div>`}
                    ${h0&&u0&&R1.has(u0)&&O`
                        <${I2}
                            getContent=${()=>j_.current?.getContent?.()}
                            path=${u0}
                            onClose=${()=>O_(u0)}
                        />
                    `}
                </div>
            </div>
        `;return O`
        <div class=${`app-shell${L1?"":" workspace-collapsed"}${h0?" editor-open":""}${j?" chat-only":""}${w1?" zen-mode":""}`} ref=${b_}>
            ${!j&&O`
                <${K9}
                    onFileSelect=${v_}
                    visible=${L1}
                    active=${L1||h0}
                    onOpenEditor=${J1}
                    onOpenTerminalTab=${F4}
                    onOpenVncTab=${H4}
                    onToggleTerminal=${m1?Y_:void 0}
                    terminalVisible=${Boolean(m1&&V_)}
                />
                <button
                    class=${`workspace-toggle-tab${L1?" open":" closed"}`}
                    onClick=${ZN}
                    title=${L1?"Hide workspace":"Show workspace"}
                    aria-label=${L1?"Hide workspace":"Show workspace"}
                >
                    <svg class="workspace-toggle-tab-icon" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                        <polyline points="6 3 11 8 6 13" />
                    </svg>
                </button>
                <div class="workspace-splitter" onMouseDown=${h9} onTouchStart=${c9}></div>
            `}
            ${s1&&O`
                <div class="editor-pane-container">
                    ${w1&&O`<div class="zen-hover-zone"></div>`}
                    ${h0&&O`
                        <${q9}
                            tabs=${O1}
                            activeId=${u0}
                            onActivate=${W_}
                            onClose=${z4}
                            onCloseOthers=${f4}
                            onCloseAll=${p8}
                            onTogglePin=${s4}
                            onTogglePreview=${O_}
                            previewTabs=${R1}
                            onToggleDock=${m1?Y_:void 0}
                            dockVisible=${m1&&V_}
                            onToggleZen=${Y4}
                            zenMode=${w1}
                            onPopOutTab=${X?void 0:l8}
                        />
                    `}
                    ${h0&&O`<div class="editor-pane-host" ref=${N_}></div>`}
                    ${h0&&u0&&R1.has(u0)&&O`
                        <${I2}
                            getContent=${()=>j_.current?.getContent?.()}
                            path=${u0}
                            onClose=${()=>O_(u0)}
                        />
                    `}
                    ${m1&&V_&&O`<div class="dock-splitter" onMouseDown=${n9} onTouchStart=${l9}></div>`}
                    ${m1&&O`<div class=${`dock-panel${V_?"":" hidden"}`}>
                        <div class="dock-panel-header">
                            <span class="dock-panel-title">Terminal</span>
                            <div class="dock-panel-actions">
                                ${!X&&O`
                                    <button class="dock-panel-action" onClick=${()=>l8(f8,"Terminal")} title="Open terminal in window" aria-label="Open terminal in window">
                                        <svg viewBox="0 0 16 16" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                                            <rect x="2.25" y="2.25" width="8.5" height="8.5" rx="1.5"/>
                                            <path d="M8.5 2.25h5.25v5.25"/>
                                            <path d="M13.75 2.25 7.75 8.25"/>
                                        </svg>
                                    </button>
                                `}
                                <button class="dock-panel-close" onClick=${Y_} title="Hide terminal (Ctrl+\`)" aria-label="Hide terminal">
                                    <svg viewBox="0 0 16 16" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round">
                                        <line x1="4" y1="4" x2="12" y2="12"/>
                                        <line x1="12" y1="4" x2="4" y2="12"/>
                                    </svg>
                                </button>
                            </div>
                        </div>
                        <div class="dock-panel-body" ref=${n_}></div>
                    </div>`}
                </div>
                <div class="editor-splitter" onMouseDown=${p9} onTouchStart=${i9}></div>
            `}
            <div class="container">
                ${P&&E9()&&O`<div class="search-results-spacer"></div>`}
                ${j&&O`
                    <div class="chat-window-header">
                        <div class="chat-window-header-main">
                            <span class="chat-window-header-title">
                                ${z0?.agent_name?`@${z0.agent_name}`:N}
                            </span>
                            <span class="chat-window-header-subtitle">${z0?.chat_jid||N}</span>
                        </div>
                        <div class="chat-window-header-actions">
                            ${g0.length>1&&O`
                                <label class="chat-window-branch-picker-wrap">
                                    <span class="chat-window-branch-picker-label">Branch</span>
                                    <select
                                        class="chat-window-branch-picker"
                                        value=${N}
                                        onChange=${(K)=>n2(K.currentTarget.value)}
                                    >
                                        ${g0.map((K)=>O`
                                            <option key=${K.chat_jid} value=${K.chat_jid}>
                                                ${`@${K.agent_name} — ${K.chat_jid}${K.is_active?" • active":""}`}
                                            </option>
                                        `)}
                                    </select>
                                </label>
                            `}
                            ${z0?.chat_jid&&O`
                                <button
                                    class="chat-window-header-button"
                                    type="button"
                                    onClick=${l2}
                                    title=${s_?"Renaming branch…":"Rename this branch"}
                                    aria-label="Rename this branch"
                                    disabled=${s_}
                                >
                                    ${s_?"Renaming…":"Rename"}
                                </button>
                            `}
                            ${z0?.chat_jid&&z0.chat_jid!==(z0.root_chat_jid||z0.chat_jid)&&O`
                                <button
                                    class="chat-window-header-button"
                                    type="button"
                                    onClick=${r2}
                                    title="Prune this branch agent"
                                    aria-label="Prune this branch agent"
                                >
                                    Prune
                                </button>
                            `}
                            <span class="chat-window-header-badge">Chat only</span>
                        </div>
                    </div>
                `}
                ${(J||P)&&O`
                    <div class="hashtag-header">
                        <button class="back-btn" onClick=${o9}>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
                        </button>
                        <span>${J?`#${J}`:`Search: ${P} · ${e1}`}</span>
                    </div>
                `}
                <${h3}
                    posts=${e4}
                    hasMore=${m6?b6:!1}
                    onLoadMore=${m6?m2:void 0}
                    timelineRef=${u_}
                    onHashtagClick=${s9}
                    onMessageRef=${a}
                    onScrollToMessage=${V0}
                    onFileRef=${R}
                    onPostClick=${void 0}
                    onDeletePost=${e9}
                    onOpenWidget=${BN}
                    emptyMessage=${J?`No posts with #${J}`:P?`No results for "${P}"`:void 0}
                    agents=${G1}
                    user=${S4}
                    reverse=${m6}
                    removingPostIds=${$_}
                    searchQuery=${P}
                />
                <${M3}
                    status=${i}
                    draft=${q0}
                    plan=${$0}
                    thought=${Y0}
                    pendingRequest=${K0}
                    intent=${g}
                    turnId=${W0}
                    steerQueued=${XN}
                    onPanelToggle=${e0}
                />
                <${Z3}
                    session=${f0}
                    onClose=${h6}
                    onRetry=${jN}
                    onInject=${YN}
                />
                <${F3}
                    widget=${l1}
                    onClose=${H8}
                    onWidgetEvent=${KN}
                />
                <${S$}
                    onPost=${()=>{let{searchQuery:K,searchOpen:q}=u1.current||{};if(!K&&!q)F1(),o_()}}
                    onFocus=${o_}
                    searchMode=${D}
                    searchScope=${C}
                    onSearch=${d9}
                    onSearchScopeChange=${u}
                    onEnterSearch=${a9}
                    onExitSearch=${t9}
                    fileRefs=${A}
                    onRemoveFileRef=${d4}
                    onClearFileRefs=${V4}
                    onSetFileRefs=${z}
                    messageRefs=${o}
                    onRemoveMessageRef=${X0}
                    onClearMessageRefs=${U0}
                    onSetMessageRefs=${j0}
                    onSwitchChat=${n2}
                    onRenameSession=${l2}
                    isRenameSessionInProgress=${s_}
                    onCreateSession=${QN}
                    onDeleteSession=${r2}
                    onRestoreSession=${VN}
                    activeEditorPath=${j?null:u0}
                    onAttachEditorFile=${j?void 0:b}
                    onOpenFilePill=${R}
                    followupQueueCount=${w_}
                    followupQueueItems=${H1}
                    onInjectQueuedFollowup=${_N}
                    onRemoveQueuedFollowup=${$N}
                    onSubmitIntercept=${NN}
                    onMessageResponse=${O8}
                    onSubmitError=${A0}
                    onPopOutChat=${X?void 0:qN}
                    isAgentActive=${G8}
                    activeChatAgents=${B1}
                    currentChatJid=${N}
                    connectionStatus=${B}
                    activeModel=${R0}
                    modelUsage=${Y1}
                    thinkingLevel=${j1}
                    supportsThinking=${s0}
                    contextUsage=${Q1}
                    notificationsEnabled=${C_}
                    notificationPermission=${I_}
                    onToggleNotifications=${W4}
                    onModelChange=${n0}
                    onModelStateChange=${g6}
                />
                <${P3}
                    request=${K0}
                    onRespond=${()=>{G0(null),P0.current=null}}
                />
            </div>
        </div>
    `}function lZ(){let[_,$]=p(()=>typeof window>"u"?"http://localhost/":window.location.href);c(()=>{if(typeof window>"u")return;let Y=()=>$(window.location.href);return window.addEventListener("popstate",Y),()=>window.removeEventListener("popstate",Y)},[]);let N=I((Y,L={})=>{if(typeof window>"u")return;let{replace:Z=!1}=L||{},V=new URL(String(Y||""),window.location.href).toString();if(Z)window.history.replaceState(null,"",V);else window.history.pushState(null,"",V);$(window.location.href)},[]),j=w0(()=>new URL(_).searchParams,[_]);return O`<${nZ} locationParams=${j} navigate=${N} />`}E$(O`<${lZ} />`,document.getElementById("app"));

//# debugId=BA736AC1552855A164756E2164756E21
//# sourceMappingURL=app.bundle.js.map
