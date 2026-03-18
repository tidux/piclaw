var w9=Object.defineProperty;var A9=(_)=>_;function P9(_,$){this[_]=A9.bind(null,$)}var M9=(_,$)=>{for(var j in $)w9(_,j,{get:$[j],enumerable:!0,configurable:!0,set:P9.bind($,j)})};var $1,a_,P3,b9,d$,B3,M3,b3,I3,v1,T1,S1,I9,t2={},e2=[],x9=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,j1=Array.isArray;function I$(_,$){for(var j in $)_[j]=$[j];return _}function u1(_){_&&_.parentNode&&_.parentNode.removeChild(_)}function x3(_,$,j){var Z,N,z,K={};for(z in $)z=="key"?Z=$[z]:z=="ref"?N=$[z]:K[z]=$[z];if(arguments.length>2&&(K.children=arguments.length>3?$1.call(arguments,2):j),typeof _=="function"&&_.defaultProps!=null)for(z in _.defaultProps)K[z]===void 0&&(K[z]=_.defaultProps[z]);return s2(_,K,Z,N,null)}function s2(_,$,j,Z,N){var z={type:_,props:$,key:j,ref:Z,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:N==null?++P3:N,__i:-1,__u:0};return N==null&&a_.vnode!=null&&a_.vnode(z),z}function Z1(_){return _.children}function r2(_,$){this.props=_,this.context=$}function H2(_,$){if($==null)return _.__?H2(_.__,_.__i+1):null;for(var j;$<_.__k.length;$++)if((j=_.__k[$])!=null&&j.__e!=null)return j.__e;return typeof _.type=="function"?H2(_):null}function C9(_){if(_.__P&&_.__d){var $=_.__v,j=$.__e,Z=[],N=[],z=I$({},$);z.__v=$.__v+1,a_.vnode&&a_.vnode(z),m1(_.__P,z,$,_.__n,_.__P.namespaceURI,32&$.__u?[j]:null,Z,j==null?H2($):j,!!(32&$.__u),N),z.__v=$.__v,z.__.__k[z.__i]=z,f3(Z,z,N),$.__e=$.__=null,z.__e!=j&&C3(z)}}function C3(_){if((_=_.__)!=null&&_.__c!=null)return _.__e=_.__c.base=null,_.__k.some(function($){if($!=null&&$.__e!=null)return _.__e=_.__c.base=$.__e}),C3(_)}function Q3(_){(!_.__d&&(_.__d=!0)&&d$.push(_)&&!_1.__r++||B3!=a_.debounceRendering)&&((B3=a_.debounceRendering)||M3)(_1)}function _1(){try{for(var _,$=1;d$.length;)d$.length>$&&d$.sort(b3),_=d$.shift(),$=d$.length,C9(_)}finally{d$.length=_1.__r=0}}function T3(_,$,j,Z,N,z,K,X,L,q,B){var G,F,b,g,u,f,w,H=Z&&Z.__k||e2,x=$.length;for(L=T9(j,$,H,L,x),G=0;G<x;G++)(b=j.__k[G])!=null&&(F=b.__i!=-1&&H[b.__i]||t2,b.__i=G,f=m1(_,b,F,N,z,K,X,L,q,B),g=b.__e,b.ref&&F.ref!=b.ref&&(F.ref&&g1(F.ref,null,b),B.push(b.ref,b.__c||g,b)),u==null&&g!=null&&(u=g),(w=!!(4&b.__u))||F.__k===b.__k?L=S3(b,L,_,w):typeof b.type=="function"&&f!==void 0?L=f:g&&(L=g.nextSibling),b.__u&=-7);return j.__e=u,L}function T9(_,$,j,Z,N){var z,K,X,L,q,B=j.length,G=B,F=0;for(_.__k=Array(N),z=0;z<N;z++)(K=$[z])!=null&&typeof K!="boolean"&&typeof K!="function"?(typeof K=="string"||typeof K=="number"||typeof K=="bigint"||K.constructor==String?K=_.__k[z]=s2(null,K,null,null,null):j1(K)?K=_.__k[z]=s2(Z1,{children:K},null,null,null):K.constructor===void 0&&K.__b>0?K=_.__k[z]=s2(K.type,K.props,K.key,K.ref?K.ref:null,K.__v):_.__k[z]=K,L=z+F,K.__=_,K.__b=_.__b+1,X=null,(q=K.__i=S9(K,j,L,G))!=-1&&(G--,(X=j[q])&&(X.__u|=2)),X==null||X.__v==null?(q==-1&&(N>B?F--:N<B&&F++),typeof K.type!="function"&&(K.__u|=4)):q!=L&&(q==L-1?F--:q==L+1?F++:(q>L?F--:F++,K.__u|=4))):_.__k[z]=null;if(G)for(z=0;z<B;z++)(X=j[z])!=null&&(2&X.__u)==0&&(X.__e==Z&&(Z=H2(X)),v3(X,X));return Z}function S3(_,$,j,Z){var N,z;if(typeof _.type=="function"){for(N=_.__k,z=0;N&&z<N.length;z++)N[z]&&(N[z].__=_,$=S3(N[z],$,j,Z));return $}_.__e!=$&&(Z&&($&&_.type&&!$.parentNode&&($=H2(_)),j.insertBefore(_.__e,$||null)),$=_.__e);do $=$&&$.nextSibling;while($!=null&&$.nodeType==8);return $}function S9(_,$,j,Z){var N,z,K,X=_.key,L=_.type,q=$[j],B=q!=null&&(2&q.__u)==0;if(q===null&&X==null||B&&X==q.key&&L==q.type)return j;if(Z>(B?1:0)){for(N=j-1,z=j+1;N>=0||z<$.length;)if((q=$[K=N>=0?N--:z++])!=null&&(2&q.__u)==0&&X==q.key&&L==q.type)return K}return-1}function O3(_,$,j){$[0]=="-"?_.setProperty($,j==null?"":j):_[$]=j==null?"":typeof j!="number"||x9.test($)?j:j+"px"}function o2(_,$,j,Z,N){var z,K;_:if($=="style")if(typeof j=="string")_.style.cssText=j;else{if(typeof Z=="string"&&(_.style.cssText=Z=""),Z)for($ in Z)j&&$ in j||O3(_.style,$,"");if(j)for($ in j)Z&&j[$]==Z[$]||O3(_.style,$,j[$])}else if($[0]=="o"&&$[1]=="n")z=$!=($=$.replace(I3,"$1")),K=$.toLowerCase(),$=K in _||$=="onFocusOut"||$=="onFocusIn"?K.slice(2):$.slice(2),_.l||(_.l={}),_.l[$+z]=j,j?Z?j.u=Z.u:(j.u=v1,_.addEventListener($,z?S1:T1,z)):_.removeEventListener($,z?S1:T1,z);else{if(N=="http://www.w3.org/2000/svg")$=$.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if($!="width"&&$!="height"&&$!="href"&&$!="list"&&$!="form"&&$!="tabIndex"&&$!="download"&&$!="rowSpan"&&$!="colSpan"&&$!="role"&&$!="popover"&&$ in _)try{_[$]=j==null?"":j;break _}catch(X){}typeof j=="function"||(j==null||j===!1&&$[4]!="-"?_.removeAttribute($):_.setAttribute($,$=="popover"&&j==1?"":j))}}function U3(_){return function($){if(this.l){var j=this.l[$.type+_];if($.t==null)$.t=v1++;else if($.t<j.u)return;return j(a_.event?a_.event($):$)}}}function m1(_,$,j,Z,N,z,K,X,L,q){var B,G,F,b,g,u,f,w,H,x,I,i,n,e,d,N_=$.type;if($.constructor!==void 0)return null;128&j.__u&&(L=!!(32&j.__u),z=[X=$.__e=j.__e]),(B=a_.__b)&&B($);_:if(typeof N_=="function")try{if(w=$.props,H=N_.prototype&&N_.prototype.render,x=(B=N_.contextType)&&Z[B.__c],I=B?x?x.props.value:B.__:Z,j.__c?f=(G=$.__c=j.__c).__=G.__E:(H?$.__c=G=new N_(w,I):($.__c=G=new r2(w,I),G.constructor=N_,G.render=R9),x&&x.sub(G),G.state||(G.state={}),G.__n=Z,F=G.__d=!0,G.__h=[],G._sb=[]),H&&G.__s==null&&(G.__s=G.state),H&&N_.getDerivedStateFromProps!=null&&(G.__s==G.state&&(G.__s=I$({},G.__s)),I$(G.__s,N_.getDerivedStateFromProps(w,G.__s))),b=G.props,g=G.state,G.__v=$,F)H&&N_.getDerivedStateFromProps==null&&G.componentWillMount!=null&&G.componentWillMount(),H&&G.componentDidMount!=null&&G.__h.push(G.componentDidMount);else{if(H&&N_.getDerivedStateFromProps==null&&w!==b&&G.componentWillReceiveProps!=null&&G.componentWillReceiveProps(w,I),$.__v==j.__v||!G.__e&&G.shouldComponentUpdate!=null&&G.shouldComponentUpdate(w,G.__s,I)===!1){$.__v!=j.__v&&(G.props=w,G.state=G.__s,G.__d=!1),$.__e=j.__e,$.__k=j.__k,$.__k.some(function(p){p&&(p.__=$)}),e2.push.apply(G.__h,G._sb),G._sb=[],G.__h.length&&K.push(G);break _}G.componentWillUpdate!=null&&G.componentWillUpdate(w,G.__s,I),H&&G.componentDidUpdate!=null&&G.__h.push(function(){G.componentDidUpdate(b,g,u)})}if(G.context=I,G.props=w,G.__P=_,G.__e=!1,i=a_.__r,n=0,H)G.state=G.__s,G.__d=!1,i&&i($),B=G.render(G.props,G.state,G.context),e2.push.apply(G.__h,G._sb),G._sb=[];else do G.__d=!1,i&&i($),B=G.render(G.props,G.state,G.context),G.state=G.__s;while(G.__d&&++n<25);G.state=G.__s,G.getChildContext!=null&&(Z=I$(I$({},Z),G.getChildContext())),H&&!F&&G.getSnapshotBeforeUpdate!=null&&(u=G.getSnapshotBeforeUpdate(b,g)),e=B!=null&&B.type===Z1&&B.key==null?R3(B.props.children):B,X=T3(_,j1(e)?e:[e],$,j,Z,N,z,K,X,L,q),G.base=$.__e,$.__u&=-161,G.__h.length&&K.push(G),f&&(G.__E=G.__=null)}catch(p){if($.__v=null,L||z!=null)if(p.then){for($.__u|=L?160:128;X&&X.nodeType==8&&X.nextSibling;)X=X.nextSibling;z[z.indexOf(X)]=null,$.__e=X}else{for(d=z.length;d--;)u1(z[d]);f1($)}else $.__e=j.__e,$.__k=j.__k,p.then||f1($);a_.__e(p,$,j)}else z==null&&$.__v==j.__v?($.__k=j.__k,$.__e=j.__e):X=$.__e=f9(j.__e,$,j,Z,N,z,K,L,q);return(B=a_.diffed)&&B($),128&$.__u?void 0:X}function f1(_){_&&(_.__c&&(_.__c.__e=!0),_.__k&&_.__k.some(f1))}function f3(_,$,j){for(var Z=0;Z<j.length;Z++)g1(j[Z],j[++Z],j[++Z]);a_.__c&&a_.__c($,_),_.some(function(N){try{_=N.__h,N.__h=[],_.some(function(z){z.call(N)})}catch(z){a_.__e(z,N.__v)}})}function R3(_){return typeof _!="object"||_==null||_.__b>0?_:j1(_)?_.map(R3):I$({},_)}function f9(_,$,j,Z,N,z,K,X,L){var q,B,G,F,b,g,u,f=j.props||t2,w=$.props,H=$.type;if(H=="svg"?N="http://www.w3.org/2000/svg":H=="math"?N="http://www.w3.org/1998/Math/MathML":N||(N="http://www.w3.org/1999/xhtml"),z!=null){for(q=0;q<z.length;q++)if((b=z[q])&&"setAttribute"in b==!!H&&(H?b.localName==H:b.nodeType==3)){_=b,z[q]=null;break}}if(_==null){if(H==null)return document.createTextNode(w);_=document.createElementNS(N,H,w.is&&w),X&&(a_.__m&&a_.__m($,z),X=!1),z=null}if(H==null)f===w||X&&_.data==w||(_.data=w);else{if(z=z&&$1.call(_.childNodes),!X&&z!=null)for(f={},q=0;q<_.attributes.length;q++)f[(b=_.attributes[q]).name]=b.value;for(q in f)b=f[q],q=="dangerouslySetInnerHTML"?G=b:q=="children"||(q in w)||q=="value"&&("defaultValue"in w)||q=="checked"&&("defaultChecked"in w)||o2(_,q,null,b,N);for(q in w)b=w[q],q=="children"?F=b:q=="dangerouslySetInnerHTML"?B=b:q=="value"?g=b:q=="checked"?u=b:X&&typeof b!="function"||f[q]===b||o2(_,q,b,f[q],N);if(B)X||G&&(B.__html==G.__html||B.__html==_.innerHTML)||(_.innerHTML=B.__html),$.__k=[];else if(G&&(_.innerHTML=""),T3($.type=="template"?_.content:_,j1(F)?F:[F],$,j,Z,H=="foreignObject"?"http://www.w3.org/1999/xhtml":N,z,K,z?z[0]:j.__k&&H2(j,0),X,L),z!=null)for(q=z.length;q--;)u1(z[q]);X||(q="value",H=="progress"&&g==null?_.removeAttribute("value"):g!=null&&(g!==_[q]||H=="progress"&&!g||H=="option"&&g!=f[q])&&o2(_,q,g,f[q],N),q="checked",u!=null&&u!=_[q]&&o2(_,q,u,f[q],N))}return _}function g1(_,$,j){try{if(typeof _=="function"){var Z=typeof _.__u=="function";Z&&_.__u(),Z&&$==null||(_.__u=_($))}else _.current=$}catch(N){a_.__e(N,j)}}function v3(_,$,j){var Z,N;if(a_.unmount&&a_.unmount(_),(Z=_.ref)&&(Z.current&&Z.current!=_.__e||g1(Z,null,$)),(Z=_.__c)!=null){if(Z.componentWillUnmount)try{Z.componentWillUnmount()}catch(z){a_.__e(z,$)}Z.base=Z.__P=null}if(Z=_.__k)for(N=0;N<Z.length;N++)Z[N]&&v3(Z[N],$,j||typeof _.type!="function");j||u1(_.__e),_.__c=_.__=_.__e=void 0}function R9(_,$,j){return this.constructor(_,j)}function u3(_,$,j){var Z,N,z,K;$==document&&($=document.documentElement),a_.__&&a_.__(_,$),N=(Z=typeof j=="function")?null:j&&j.__k||$.__k,z=[],K=[],m1($,_=(!Z&&j||$).__k=x3(Z1,null,[_]),N||t2,t2,$.namespaceURI,!Z&&j?[j]:N?null:$.firstChild?$1.call($.childNodes):null,z,!Z&&j?j:N?N.__e:$.firstChild,Z,K),f3(z,_,K)}$1=e2.slice,a_={__e:function(_,$,j,Z){for(var N,z,K;$=$.__;)if((N=$.__c)&&!N.__)try{if((z=N.constructor)&&z.getDerivedStateFromError!=null&&(N.setState(z.getDerivedStateFromError(_)),K=N.__d),N.componentDidCatch!=null&&(N.componentDidCatch(_,Z||{}),K=N.__d),K)return N.__E=N}catch(X){_=X}throw _}},P3=0,b9=function(_){return _!=null&&_.constructor===void 0},r2.prototype.setState=function(_,$){var j;j=this.__s!=null&&this.__s!=this.state?this.__s:this.__s=I$({},this.state),typeof _=="function"&&(_=_(I$({},j),this.props)),_&&I$(j,_),_!=null&&this.__v&&($&&this._sb.push($),Q3(this))},r2.prototype.forceUpdate=function(_){this.__v&&(this.__e=!0,_&&this.__h.push(_),Q3(this))},r2.prototype.render=Z1,d$=[],M3=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,b3=function(_,$){return _.__v.__b-$.__v.__b},_1.__r=0,I3=/(PointerCapture)$|Capture$/i,v1=0,T1=U3(!1),S1=U3(!0),I9=0;var I2,L0,C1,F3,x2=0,m3=[],q0=a_,H3=q0.__b,J3=q0.__r,D3=q0.diffed,E3=q0.__c,y3=q0.unmount,k3=q0.__;function p1(_,$){q0.__h&&q0.__h(L0,_,x2||$),x2=0;var j=L0.__H||(L0.__H={__:[],__h:[]});return _>=j.__.length&&j.__.push({}),j.__[_]}function S(_){return x2=1,v9(p3,_)}function v9(_,$,j){var Z=p1(I2++,2);if(Z.t=_,!Z.__c&&(Z.__=[j?j($):p3(void 0,$),function(X){var L=Z.__N?Z.__N[0]:Z.__[0],q=Z.t(L,X);L!==q&&(Z.__N=[q,Z.__[1]],Z.__c.setState({}))}],Z.__c=L0,!L0.__f)){var N=function(X,L,q){if(!Z.__c.__H)return!0;var B=Z.__c.__H.__.filter(function(F){return F.__c});if(B.every(function(F){return!F.__N}))return!z||z.call(this,X,L,q);var G=Z.__c.props!==X;return B.some(function(F){if(F.__N){var b=F.__[0];F.__=F.__N,F.__N=void 0,b!==F.__[0]&&(G=!0)}}),z&&z.call(this,X,L,q)||G};L0.__f=!0;var{shouldComponentUpdate:z,componentWillUpdate:K}=L0;L0.componentWillUpdate=function(X,L,q){if(this.__e){var B=z;z=void 0,N(X,L,q),z=B}K&&K.call(this,X,L,q)},L0.shouldComponentUpdate=N}return Z.__N||Z.__}function R(_,$){var j=p1(I2++,3);!q0.__s&&g3(j.__H,$)&&(j.__=_,j.u=$,L0.__H.__h.push(j))}function y(_){return x2=5,n_(function(){return{current:_}},[])}function n_(_,$){var j=p1(I2++,7);return g3(j.__H,$)&&(j.__=_(),j.__H=$,j.__h=_),j.__}function M(_,$){return x2=8,n_(function(){return _},$)}function u9(){for(var _;_=m3.shift();){var $=_.__H;if(_.__P&&$)try{$.__h.some(a2),$.__h.some(R1),$.__h=[]}catch(j){$.__h=[],q0.__e(j,_.__v)}}}q0.__b=function(_){L0=null,H3&&H3(_)},q0.__=function(_,$){_&&$.__k&&$.__k.__m&&(_.__m=$.__k.__m),k3&&k3(_,$)},q0.__r=function(_){J3&&J3(_),I2=0;var $=(L0=_.__c).__H;$&&(C1===L0?($.__h=[],L0.__h=[],$.__.some(function(j){j.__N&&(j.__=j.__N),j.u=j.__N=void 0})):($.__h.some(a2),$.__h.some(R1),$.__h=[],I2=0)),C1=L0},q0.diffed=function(_){D3&&D3(_);var $=_.__c;$&&$.__H&&($.__H.__h.length&&(m3.push($)!==1&&F3===q0.requestAnimationFrame||((F3=q0.requestAnimationFrame)||m9)(u9)),$.__H.__.some(function(j){j.u&&(j.__H=j.u),j.u=void 0})),C1=L0=null},q0.__c=function(_,$){$.some(function(j){try{j.__h.some(a2),j.__h=j.__h.filter(function(Z){return!Z.__||R1(Z)})}catch(Z){$.some(function(N){N.__h&&(N.__h=[])}),$=[],q0.__e(Z,j.__v)}}),E3&&E3(_,$)},q0.unmount=function(_){y3&&y3(_);var $,j=_.__c;j&&j.__H&&(j.__H.__.some(function(Z){try{a2(Z)}catch(N){$=N}}),j.__H=void 0,$&&q0.__e($,j.__v))};var w3=typeof requestAnimationFrame=="function";function m9(_){var $,j=function(){clearTimeout(Z),w3&&cancelAnimationFrame($),setTimeout(_)},Z=setTimeout(j,35);w3&&($=requestAnimationFrame(j))}function a2(_){var $=L0,j=_.__c;typeof j=="function"&&(_.__c=void 0,j()),L0=$}function R1(_){var $=L0;_.__c=_.__(),L0=$}function g3(_,$){return!_||_.length!==$.length||$.some(function(j,Z){return j!==_[Z]})}function p3(_,$){return typeof $=="function"?$(_):$}var c3=function(_,$,j,Z){var N;$[0]=0;for(var z=1;z<$.length;z++){var K=$[z++],X=$[z]?($[0]|=K?1:2,j[$[z++]]):$[++z];K===3?Z[0]=X:K===4?Z[1]=Object.assign(Z[1]||{},X):K===5?(Z[1]=Z[1]||{})[$[++z]]=X:K===6?Z[1][$[++z]]+=X+"":K?(N=_.apply(X,c3(_,X,j,["",null])),Z.push(N),X[0]?$[0]|=2:($[z-2]=0,$[z]=N)):Z.push(X)}return Z},A3=new Map;function g9(_){var $=A3.get(this);return $||($=new Map,A3.set(this,$)),($=c3(this,$.get(_)||($.set(_,$=function(j){for(var Z,N,z=1,K="",X="",L=[0],q=function(F){z===1&&(F||(K=K.replace(/^\s*\n\s*|\s*\n\s*$/g,"")))?L.push(0,F,K):z===3&&(F||K)?(L.push(3,F,K),z=2):z===2&&K==="..."&&F?L.push(4,F,0):z===2&&K&&!F?L.push(5,0,!0,K):z>=5&&((K||!F&&z===5)&&(L.push(z,0,K,N),z=6),F&&(L.push(z,F,0,N),z=6)),K=""},B=0;B<j.length;B++){B&&(z===1&&q(),q(B));for(var G=0;G<j[B].length;G++)Z=j[B][G],z===1?Z==="<"?(q(),L=[L],z=3):K+=Z:z===4?K==="--"&&Z===">"?(z=1,K=""):K=Z+K[0]:X?Z===X?X="":K+=Z:Z==='"'||Z==="'"?X=Z:Z===">"?(q(),z=1):z&&(Z==="="?(z=5,N=K,K=""):Z==="/"&&(z<5||j[B][G+1]===">")?(q(),z===3&&(L=L[0]),z=L,(L=L[0]).push(2,0,z),z=0):Z===" "||Z==="\t"||Z===`
`||Z==="\r"?(q(),z=2):K+=Z),z===3&&K==="!--"&&(z=4,L=L[0])}return q(),L}(_)),$),arguments,[])).length>1?$:$[0]}var U=g9.bind(x3);var l0={};M9(l0,{uploadWorkspaceFile:()=>z1,uploadMedia:()=>s1,updateWorkspaceFile:()=>j5,submitAdaptiveCardAction:()=>r1,streamSidePrompt:()=>e9,steerAgentQueueItem:()=>t9,setWorkspaceVisibility:()=>R2,setAgentThoughtVisibility:()=>e1,sendPeerAgentMessage:()=>o9,sendAgentMessage:()=>J2,searchPosts:()=>h1,restoreChatBranch:()=>d9,respondToAgentRequest:()=>N1,renameWorkspaceFile:()=>z4,renameChatBranch:()=>l9,removeAgentQueueItem:()=>a9,pruneChatBranch:()=>n9,moveWorkspaceEntry:()=>K4,getWorkspaceTree:()=>f2,getWorkspaceRawUrl:()=>K1,getWorkspaceFile:()=>j4,getWorkspaceDownloadUrl:()=>Y1,getWorkspaceBranch:()=>$5,getTimeline:()=>C2,getThumbnailUrl:()=>_4,getThread:()=>i1,getPostsByHashtag:()=>c1,getMediaUrl:()=>Z$,getMediaText:()=>$4,getMediaInfo:()=>D2,getMediaBlob:()=>_5,getChatBranches:()=>i9,getAgents:()=>d1,getAgentThought:()=>t1,getAgentStatus:()=>o1,getAgentQueueState:()=>r9,getAgentModels:()=>S2,getAgentContext:()=>s9,getActiveChatAgents:()=>n1,forkChatBranch:()=>T2,deleteWorkspaceFile:()=>Y4,deletePost:()=>l1,createWorkspaceFile:()=>N4,createReply:()=>h9,createPost:()=>c9,attachWorkspaceFile:()=>Z4,addToWhitelist:()=>a1,SSEClient:()=>W1});async function R_(_,$={}){let j=await fetch(""+_,{...$,headers:{"Content-Type":"application/json",...$.headers}});if(!j.ok){let Z=await j.json().catch(()=>({error:"Unknown error"}));throw Error(Z.error||`HTTP ${j.status}`)}return j.json()}function h3(_){let $=String(_||"").split(`
`),j="message",Z=[];for(let z of $)if(z.startsWith("event:"))j=z.slice(6).trim()||"message";else if(z.startsWith("data:"))Z.push(z.slice(5).trim());let N=Z.join(`
`);if(!N)return null;try{return{event:j,data:JSON.parse(N)}}catch{return{event:j,data:N}}}async function p9(_,$){if(!_.body)throw Error("Missing event stream body");let j=_.body.getReader(),Z=new TextDecoder,N="";while(!0){let{value:K,done:X}=await j.read();if(X)break;N+=Z.decode(K,{stream:!0});let L=N.split(`

`);N=L.pop()||"";for(let q of L){let B=h3(q);if(B)$(B.event,B.data)}}N+=Z.decode();let z=h3(N);if(z)$(z.event,z.data)}async function C2(_=10,$=null,j=null){let Z=`/timeline?limit=${_}`;if($)Z+=`&before=${$}`;if(j)Z+=`&chat_jid=${encodeURIComponent(j)}`;return R_(Z)}async function c1(_,$=50,j=0,Z=null){let N=Z?`&chat_jid=${encodeURIComponent(Z)}`:"";return R_(`/hashtag/${encodeURIComponent(_)}?limit=${$}&offset=${j}${N}`)}async function h1(_,$=50,j=0,Z=null,N="current",z=null){let K=Z?`&chat_jid=${encodeURIComponent(Z)}`:"",X=N?`&scope=${encodeURIComponent(N)}`:"",L=z?`&root_chat_jid=${encodeURIComponent(z)}`:"";return R_(`/search?q=${encodeURIComponent(_)}&limit=${$}&offset=${j}${K}${X}${L}`)}async function i1(_,$=null){let j=$?`?chat_jid=${encodeURIComponent($)}`:"";return R_(`/thread/${_}${j}`)}async function c9(_,$=[],j=null){let Z=j?`?chat_jid=${encodeURIComponent(j)}`:"";return R_(`/post${Z}`,{method:"POST",body:JSON.stringify({content:_,media_ids:$})})}async function h9(_,$,j=[],Z=null){let N=Z?`?chat_jid=${encodeURIComponent(Z)}`:"";return R_(`/post/reply${N}`,{method:"POST",body:JSON.stringify({thread_id:_,content:$,media_ids:j})})}async function l1(_,$=!1,j=null){let Z=j?`&chat_jid=${encodeURIComponent(j)}`:"",N=`/post/${_}?cascade=${$?"true":"false"}${Z}`;return R_(N,{method:"DELETE"})}async function J2(_,$,j=null,Z=[],N=null,z=null){let K=z?`?chat_jid=${encodeURIComponent(z)}`:"";return R_(`/agent/${_}/message${K}`,{method:"POST",body:JSON.stringify({content:$,thread_id:j,media_ids:Z,mode:N})})}async function n1(){return R_("/agent/active-chats")}async function i9(_=null,$={}){let j=new URLSearchParams;if(_)j.set("root_chat_jid",String(_));if($?.includeArchived)j.set("include_archived","1");let Z=j.toString()?`?${j.toString()}`:"";return R_(`/agent/branches${Z}`)}async function T2(_,$={}){return R_("/agent/branch-fork",{method:"POST",body:JSON.stringify({source_chat_jid:_,...$?.agentName?{agent_name:$.agentName}:{},...$?.displayName?{display_name:$.displayName}:{}})})}async function l9(_,$={}){return R_("/agent/branch-rename",{method:"POST",body:JSON.stringify({chat_jid:_,...$&&Object.prototype.hasOwnProperty.call($,"agentName")?{agent_name:$.agentName}:{},...$&&Object.prototype.hasOwnProperty.call($,"displayName")?{display_name:$.displayName}:{}})})}async function n9(_){return R_("/agent/branch-prune",{method:"POST",body:JSON.stringify({chat_jid:_})})}async function d9(_,$={}){return R_("/agent/branch-restore",{method:"POST",body:JSON.stringify({chat_jid:_,...$&&Object.prototype.hasOwnProperty.call($,"agentName")?{agent_name:$.agentName}:{},...$&&Object.prototype.hasOwnProperty.call($,"displayName")?{display_name:$.displayName}:{}})})}async function o9(_,$,j,Z="auto",N={}){let z={source_chat_jid:_,content:j,mode:Z,...N?.sourceAgentName?{source_agent_name:N.sourceAgentName}:{},...N?.targetBy==="agent_name"?{target_agent_name:$}:{target_chat_jid:$}};return R_("/agent/peer-message",{method:"POST",body:JSON.stringify(z)})}async function d1(){return R_("/agent/roster")}async function o1(_=null){let $=_?`?chat_jid=${encodeURIComponent(_)}`:"";return R_(`/agent/status${$}`)}async function s9(_=null){let $=_?`?chat_jid=${encodeURIComponent(_)}`:"";return R_(`/agent/context${$}`)}async function r9(_=null){let $=_?`?chat_jid=${encodeURIComponent(_)}`:"";return R_(`/agent/queue-state${$}`)}async function a9(_,$=null){let j=await fetch("/agent/queue-remove",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({row_id:_,chat_jid:$||void 0})});if(!j.ok){let Z=await j.json().catch(()=>({error:"Failed to remove queued item"}));throw Error(Z.error||`HTTP ${j.status}`)}return j.json()}async function t9(_,$=null){let j=await fetch("/agent/queue-steer",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({row_id:_,chat_jid:$||void 0})});if(!j.ok){let Z=await j.json().catch(()=>({error:"Failed to steer queued item"}));throw Error(Z.error||`HTTP ${j.status}`)}return j.json()}async function S2(_=null){let $=_?`?chat_jid=${encodeURIComponent(_)}`:"";return R_(`/agent/models${$}`)}async function s1(_){let $=new FormData;$.append("file",_);let j=await fetch("/media/upload",{method:"POST",body:$});if(!j.ok){let Z=await j.json().catch(()=>({error:"Upload failed"}));throw Error(Z.error||`HTTP ${j.status}`)}return j.json()}async function N1(_,$,j=null){let Z=await fetch("/agent/respond",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({request_id:_,outcome:$,chat_jid:j||void 0})});if(!Z.ok){let N=await Z.json().catch(()=>({error:"Failed to respond"}));throw Error(N.error||`HTTP ${Z.status}`)}return Z.json()}async function r1(_){let $=await fetch("/agent/card-action",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(_)});if(!$.ok){let j=await $.json().catch(()=>({error:"Adaptive Card action failed"}));throw Error(j.error||`HTTP ${$.status}`)}return $.json()}async function e9(_,$={}){let j=await fetch("/agent/side-prompt/stream",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({prompt:_,system_prompt:$.systemPrompt||void 0,chat_jid:$.chatJid||void 0}),signal:$.signal});if(!j.ok){let z=await j.json().catch(()=>({error:"Side prompt failed"}));throw Error(z.error||`HTTP ${j.status}`)}let Z=null,N=null;if(await p9(j,(z,K)=>{if($.onEvent?.(z,K),z==="side_prompt_thinking_delta")$.onThinkingDelta?.(K?.delta||"");else if(z==="side_prompt_text_delta")$.onTextDelta?.(K?.delta||"");else if(z==="side_prompt_done")Z=K;else if(z==="side_prompt_error")N=K}),N){let z=Error(N?.error||"Side prompt failed");throw z.payload=N,z}return Z}async function a1(_,$){let j=await fetch("/agent/whitelist",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({pattern:_,description:$})});if(!j.ok){let Z=await j.json().catch(()=>({error:"Failed to add to whitelist"}));throw Error(Z.error||`HTTP ${j.status}`)}return j.json()}async function t1(_,$="thought"){let j=`/agent/thought?turn_id=${encodeURIComponent(_)}&panel=${encodeURIComponent($)}`;return R_(j)}async function e1(_,$,j){return R_("/agent/thought/visibility",{method:"POST",body:JSON.stringify({turn_id:_,panel:$,expanded:Boolean(j)})})}function Z$(_){return`/media/${_}`}function _4(_){return`/media/${_}/thumbnail`}async function D2(_){let $=await fetch(`/media/${_}/info`);if(!$.ok)throw Error("Failed to get media info");return $.json()}async function $4(_){let $=await fetch(`/media/${_}`);if(!$.ok)throw Error("Failed to load media text");return $.text()}async function _5(_){let $=await fetch(`/media/${_}`);if(!$.ok)throw Error("Failed to load media blob");return $.blob()}async function f2(_="",$=2,j=!1){let Z=`/workspace/tree?path=${encodeURIComponent(_)}&depth=${$}&show_hidden=${j?"1":"0"}`;return R_(Z)}async function $5(_=""){let $=`/workspace/branch?path=${encodeURIComponent(_||"")}`;return R_($)}async function j4(_,$=20000,j=null){let Z=j?`&mode=${encodeURIComponent(j)}`:"",N=`/workspace/file?path=${encodeURIComponent(_)}&max=${$}${Z}`;return R_(N)}async function j5(_,$){return R_("/workspace/file",{method:"PUT",body:JSON.stringify({path:_,content:$})})}async function Z4(_){return R_("/workspace/attach",{method:"POST",body:JSON.stringify({path:_})})}async function z1(_,$="",j={}){let Z=new FormData;Z.append("file",_);let N=new URLSearchParams;if($)N.set("path",$);if(j.overwrite)N.set("overwrite","1");let z=N.toString(),K=z?`/workspace/upload?${z}`:"/workspace/upload",X=await fetch(""+K,{method:"POST",body:Z});if(!X.ok){let L=await X.json().catch(()=>({error:"Upload failed"})),q=Error(L.error||`HTTP ${X.status}`);throw q.status=X.status,q.code=L.code,q}return X.json()}async function N4(_,$,j=""){let Z=await fetch("/workspace/file",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({path:_,name:$,content:j})});if(!Z.ok){let N=await Z.json().catch(()=>({error:"Create failed"})),z=Error(N.error||`HTTP ${Z.status}`);throw z.status=Z.status,z.code=N.code,z}return Z.json()}async function z4(_,$){let j=await fetch("/workspace/rename",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({path:_,name:$})});if(!j.ok){let Z=await j.json().catch(()=>({error:"Rename failed"})),N=Error(Z.error||`HTTP ${j.status}`);throw N.status=j.status,N.code=Z.code,N}return j.json()}async function K4(_,$){let j=await fetch("/workspace/move",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({path:_,target:$})});if(!j.ok){let Z=await j.json().catch(()=>({error:"Move failed"})),N=Error(Z.error||`HTTP ${j.status}`);throw N.status=j.status,N.code=Z.code,N}return j.json()}async function Y4(_){let $=`/workspace/file?path=${encodeURIComponent(_||"")}`;return R_($,{method:"DELETE"})}async function R2(_,$=!1){return R_("/workspace/visibility",{method:"POST",body:JSON.stringify({visible:Boolean(_),show_hidden:Boolean($)})})}function K1(_){return`/workspace/raw?path=${encodeURIComponent(_)}`}function Y1(_,$=!1){return`/workspace/download?${`path=${encodeURIComponent(_||"")}&show_hidden=${$?"1":"0"}`}`}class W1{constructor(_,$,j={}){this.onEvent=_,this.onStatusChange=$,this.chatJid=typeof j?.chatJid==="string"&&j.chatJid.trim()?j.chatJid.trim():null,this.eventSource=null,this.reconnectTimeout=null,this.reconnectDelay=1000,this.status="disconnected",this.reconnectAttempts=0,this.cooldownUntil=0,this.connecting=!1,this.lastActivityAt=0,this.staleCheckTimer=null,this.staleThresholdMs=70000}markActivity(){this.lastActivityAt=Date.now()}clearStaleMonitor(){if(this.staleCheckTimer)clearInterval(this.staleCheckTimer),this.staleCheckTimer=null}startStaleMonitor(){this.clearStaleMonitor(),this.staleCheckTimer=setInterval(()=>{if(this.status!=="connected")return;if(!this.lastActivityAt)return;if(Date.now()-this.lastActivityAt<=this.staleThresholdMs)return;console.warn("SSE connection went stale; forcing reconnect"),this.forceReconnect()},15000)}forceReconnect(){if(this.connecting=!1,this.eventSource)this.eventSource.close(),this.eventSource=null;this.clearStaleMonitor(),this.status="disconnected",this.onStatusChange("disconnected"),this.reconnectAttempts+=1,this.scheduleReconnect()}connect(){if(this.connecting)return;if(this.eventSource&&this.status==="connected")return;if(this.connecting=!0,this.eventSource)this.eventSource.close();this.clearStaleMonitor();let _=this.chatJid?`?chat_jid=${encodeURIComponent(this.chatJid)}`:"";this.eventSource=new EventSource("/sse/stream"+_);let $=(j)=>{this.eventSource.addEventListener(j,(Z)=>{this.markActivity(),this.onEvent(j,JSON.parse(Z.data))})};this.eventSource.onopen=()=>{this.connecting=!1,this.reconnectDelay=1000,this.reconnectAttempts=0,this.cooldownUntil=0,this.status="connected",this.markActivity(),this.startStaleMonitor(),this.onStatusChange("connected")},this.eventSource.onerror=()=>{this.connecting=!1,this.clearStaleMonitor(),this.status="disconnected",this.onStatusChange("disconnected"),this.reconnectAttempts+=1,this.scheduleReconnect()},this.eventSource.addEventListener("connected",()=>{this.markActivity(),console.log("SSE connected"),this.onEvent("connected",{})}),this.eventSource.addEventListener("heartbeat",()=>{this.markActivity()}),$("new_post"),$("new_reply"),$("agent_response"),$("interaction_updated"),$("interaction_deleted"),$("agent_status"),$("agent_steer_queued"),$("agent_followup_queued"),$("agent_followup_consumed"),$("agent_followup_removed"),$("workspace_update"),$("agent_draft"),$("agent_draft_delta"),$("agent_thought"),$("agent_thought_delta"),$("model_changed"),$("ui_theme"),["extension_ui_request","extension_ui_timeout","extension_ui_notify","extension_ui_status","extension_ui_working","extension_ui_widget","extension_ui_title","extension_ui_editor_text","extension_ui_error"].forEach($)}scheduleReconnect(){if(this.reconnectTimeout)clearTimeout(this.reconnectTimeout);let _=10,$=60000,j=Date.now();if(this.reconnectAttempts>=_)this.cooldownUntil=Math.max(this.cooldownUntil,j+$),this.reconnectAttempts=0;let Z=Math.max(this.cooldownUntil-j,0),N=Math.max(this.reconnectDelay,Z);this.reconnectTimeout=setTimeout(()=>{console.log("Reconnecting SSE..."),this.connect()},N),this.reconnectDelay=Math.min(this.reconnectDelay*2,30000)}reconnectIfNeeded(){let _=Date.now();if(this.status==="connected"){if(this.lastActivityAt&&_-this.lastActivityAt>this.staleThresholdMs)this.forceReconnect();return}if(this.cooldownUntil&&_<this.cooldownUntil)return;if(this.reconnectTimeout)clearTimeout(this.reconnectTimeout),this.reconnectTimeout=null;this.connect()}disconnect(){if(this.connecting=!1,this.clearStaleMonitor(),this.eventSource)this.eventSource.close(),this.eventSource=null;if(this.reconnectTimeout)clearTimeout(this.reconnectTimeout),this.reconnectTimeout=null}}function N$(_){if(typeof window>"u"||!window.localStorage)return null;try{return window.localStorage.getItem(_)}catch{return null}}function $0(_,$){if(typeof window>"u"||!window.localStorage)return;try{window.localStorage.setItem(_,$)}catch{}}function E2(_,$=!1){let j=N$(_);if(j===null)return $;return j==="true"}function y2(_,$=null){let j=N$(_);if(j===null)return $;let Z=parseInt(j,10);return Number.isFinite(Z)?Z:$}function G1(_){return String(_||"").trim().toLowerCase()}function W4(_){let $=String(_||"").match(/^@([a-zA-Z0-9_-]*)$/);if(!$)return null;return G1($[1]||"")}function i3(_){let $=new Set,j=[];for(let Z of Array.isArray(_)?_:[]){let N=G1(Z?.agent_name);if(!N||$.has(N))continue;$.add(N),j.push(Z)}return j}function l3(_,$,j={}){let Z=W4($);if(Z==null)return[];let N=typeof j?.currentChatJid==="string"?j.currentChatJid:null;return i3(_).filter((z)=>{if(N&&z?.chat_jid===N)return!1;return G1(z?.agent_name).startsWith(Z)})}function G4(_){let $=G1(_);return $?`@${$} `:""}function n3(_,$={}){let j=typeof $?.currentChatJid==="string"?$.currentChatJid:null,Z=Number.isFinite($?.limit)?Math.max(0,$.limit):4;return i3(_).filter((N)=>!(j&&N?.chat_jid===j)).slice(0,Z)}function d3({footerWidth:_=0,visibleAgentCount:$=0,hasContextIndicator:j=!1}={}){let Z=Number(_||0),N=Math.max(0,Math.min(Number($||0),4));if(!Number.isFinite(Z)||Z<=0)return!1;if(N<=0)return!1;let z=460+N*68+(j?40:0);return Z>=z}function X$({prefix:_="file",label:$,title:j,onRemove:Z,onClick:N,removeTitle:z="Remove",icon:K="file"}){let X=`${_}-file-pill`,L=`${_}-file-name`,q=`${_}-file-remove`,B=K==="message"?U`<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
      </svg>`:U`<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
        <polyline points="14 2 14 8 20 8"/>
      </svg>`;return U`
    <span class=${X} title=${j||$} onClick=${N}>
      ${B}
      <span class=${L}>${$}</span>
      ${Z&&U`
        <button
          class=${q}
          onClick=${(G)=>{G.preventDefault(),G.stopPropagation(),Z()}}
          title=${z}
          type="button"
        >
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M18 6L6 18M6 6l12 12"/>
          </svg>
        </button>
      `}
    </span>
  `}var Z5=[{name:"/model",description:"Select model or list available models"},{name:"/cycle-model",description:"Cycle to the next available model"},{name:"/thinking",description:"Show or set thinking level"},{name:"/cycle-thinking",description:"Cycle thinking level"},{name:"/theme",description:"Set UI theme (use /theme list for options)"},{name:"/tint",description:"Tint default light/dark UI (usage: /tint #hex or /tint off)"},{name:"/btw",description:"Open a side conversation panel without interrupting the main chat"},{name:"/state",description:"Show current session state"},{name:"/stats",description:"Show session token and cost stats"},{name:"/context",description:"Show context window usage"},{name:"/last",description:"Show last assistant response"},{name:"/compact",description:"Manually compact the session"},{name:"/auto-compact",description:"Toggle auto-compaction"},{name:"/auto-retry",description:"Toggle auto-retry"},{name:"/abort",description:"Abort the current response"},{name:"/abort-retry",description:"Abort retry backoff"},{name:"/abort-bash",description:"Abort running bash command"},{name:"/shell",description:"Run a shell command and return output"},{name:"/bash",description:"Run a shell command and add output to context"},{name:"/queue",description:"Queue a follow-up message (one-at-a-time)"},{name:"/queue-all",description:"Queue a follow-up message (batch all)"},{name:"/steer",description:"Steer the current response"},{name:"/steering-mode",description:"Set steering mode (all|one)"},{name:"/followup-mode",description:"Set follow-up mode (all|one)"},{name:"/session-name",description:"Set or show the session name"},{name:"/new-session",description:"Start a new session"},{name:"/switch-session",description:"Switch to a session file"},{name:"/fork",description:"Fork from a previous message"},{name:"/forks",description:"List forkable messages"},{name:"/tree",description:"List the session tree"},{name:"/label",description:"Set or clear a label on a tree entry"},{name:"/labels",description:"List labeled entries"},{name:"/agent-name",description:"Set or show the agent display name"},{name:"/agent-avatar",description:"Set or show the agent avatar URL"},{name:"/user-name",description:"Set or show your display name"},{name:"/user-avatar",description:"Set or show your avatar URL"},{name:"/user-github",description:"Set name/avatar from GitHub profile"},{name:"/export-html",description:"Export session to HTML"},{name:"/passkey",description:"Manage passkeys (enrol/list/delete)"},{name:"/totp",description:"Show a TOTP enrolment QR code"},{name:"/qr",description:"Generate a QR code for text or URL"},{name:"/search",description:"Search notes and skills in the workspace"},{name:"/restart",description:"Restart the agent and stop subprocesses"},{name:"/commands",description:"List available commands"}];function N5({usage:_}){let $=Math.min(100,Math.max(0,_.percent||0)),j=_.tokens,Z=_.contextWindow,N=j!=null?`Context: ${o3(j)} / ${o3(Z)} tokens (${$.toFixed(0)}%)`:`Context: ${$.toFixed(0)}%`,z=7,K=2*Math.PI*7,X=$/100*K,L=$>90?"var(--context-red, #ef4444)":$>75?"var(--context-amber, #f59e0b)":"var(--context-green, #22c55e)";return U`
        <span class="compose-context-pie icon-btn" title=${N}>
            <svg width="16" height="16" viewBox="0 0 20 20">
                <circle cx="10" cy="10" r=${7}
                    fill="none"
                    stroke="var(--context-track, rgba(128,128,128,0.2))"
                    stroke-width="2.5" />
                <circle cx="10" cy="10" r=${7}
                    fill="none"
                    stroke=${L}
                    stroke-width="2.5"
                    stroke-dasharray=${`${X} ${K}`}
                    stroke-linecap="round"
                    transform="rotate(-90 10 10)" />
            </svg>
        </span>
    `}function o3(_){if(_==null)return"?";if(_>=1e6)return(_/1e6).toFixed(1)+"M";if(_>=1000)return(_/1000).toFixed(0)+"K";return String(_)}function s3({onPost:_,onFocus:$,searchMode:j,searchScope:Z="current",onSearch:N,onSearchScopeChange:z,onEnterSearch:K,onExitSearch:X,fileRefs:L=[],onRemoveFileRef:q,onClearFileRefs:B,messageRefs:G=[],onRemoveMessageRef:F,onClearMessageRefs:b,activeModel:g=null,modelUsage:u=null,thinkingLevel:f=null,supportsThinking:w=!1,contextUsage:H=null,notificationsEnabled:x=!1,notificationPermission:I="default",onToggleNotifications:i,onModelChange:n,onModelStateChange:e,activeEditorPath:d=null,onAttachEditorFile:N_,onOpenFilePill:p,followupQueueItems:q_=[],onInjectQueuedFollowup:c_,onRemoveQueuedFollowup:__,onSubmitIntercept:t,onMessageResponse:Z_,onPopOutChat:$_,isAgentActive:Q_=!1,activeChatAgents:b_=[],currentChatJid:W_="web:default",connectionStatus:k_="connected",onSetFileRefs:O_,onSetMessageRefs:F_,onSubmitError:v_,onSwitchChat:D_,onRenameSession:I_,onCreateSession:j0,onDeleteSession:F0,onRestoreSession:G_}){let[a,H_]=S(""),[K_,A_]=S(""),[u_,h_]=S([]),[t_,i_]=S(!1),[E_,J_]=S([]),[o_,e_]=S(0),[g_,m_]=S(!1),[V0,_0]=S([]),[g0,X0]=S(0),[x_,C_]=S(!1),[y_,k0]=S(!1),[B0,P_]=S(!1),[l_,s_]=S(!1),[T_,Q0]=S([]),[T0,d0]=S(!1),[T,s]=S(0),[z_,U_]=S(null),X_=y(null),S_=y(null),R0=y(null),J$=y(null),Y$=y(null),T$=y(null),w0=y(null),q$=y(null),Z0=y(0),b0=200,L$=(Q)=>{let P=new Set,Y=[];for(let O of Q||[]){if(typeof O!=="string")continue;let D=O.trim();if(!D||P.has(D))continue;P.add(D),Y.push(D)}return Y},o0=()=>{let Q=N$("piclaw_compose_history");if(!Q)return[];try{let P=JSON.parse(Q);if(!Array.isArray(P))return[];return L$(P)}catch{return[]}},S0=(Q)=>{$0("piclaw_compose_history",JSON.stringify(Q))},s$=y(o0()),H0=y(-1),D$=y(""),N0=a.trim()||u_.length>0||L.length>0||G.length>0,W$=typeof window<"u"&&typeof navigator<"u"&&Boolean(navigator.geolocation)&&Boolean(window.isSecureContext),B$=typeof window<"u"&&typeof Notification<"u",A0=typeof window<"u"?Boolean(window.isSecureContext):!1,s0=B$&&A0&&I!=="denied",Q$=I==="granted"&&x,E$=Q$?"Disable notifications":"Enable notifications",S$=u_.length>0||L.length>0||G.length>0,f$=k_==="disconnected"?"Reconnecting":String(k_||"Connecting").replace(/[-_]+/g," ").replace(/^./,(Q)=>Q.toUpperCase()),J0=k_==="disconnected"?"Reconnecting":`Connection: ${f$}`,O$=(Array.isArray(b_)?b_:[]).filter((Q)=>!Q?.archived_at),r0=n3(O$,{currentChatJid:W_,limit:4}),I0=!j&&d3({footerWidth:T,visibleAgentCount:r0.length,hasContextIndicator:Boolean(H&&H.percent!=null)}),z0=(()=>{for(let Q of Array.isArray(b_)?b_:[]){let P=typeof Q?.chat_jid==="string"?Q.chat_jid.trim():"";if(P&&P===W_)return Q}return null})(),q2=Boolean(z0&&z0.chat_jid===(z0.root_chat_jid||z0.chat_jid)),x0=(()=>{let Q=new Set,P=[];for(let Y of Array.isArray(b_)?b_:[]){let O=typeof Y?.chat_jid==="string"?Y.chat_jid.trim():"";if(!O||O===W_||Q.has(O))continue;if(!(typeof Y?.agent_name==="string"?Y.agent_name.trim():""))continue;Q.add(O),P.push(Y)}return P})(),y$=x0.length>0,G$=y$&&typeof D_==="function",k$=y$&&typeof G_==="function",w$=!j&&typeof I_==="function",R$=!j&&typeof j0==="function",M_=!j&&typeof F0==="function"&&!q2,D0=!j&&(G$||k$||w$||R$||M_),O0=g||"",A$=w&&f?` (${f})`:"",r$=A$.trim()?`${f}`:"",v$=typeof u?.hint_short==="string"?u.hint_short.trim():"",V$=[r$||null,v$||null].filter(Boolean).join(" • "),v0=[O0?`Current model: ${O0}${A$}`:null,u?.plan?`Plan: ${u.plan}`:null,v$||null,u?.primary?.reset_description||null,u?.secondary?.reset_description||null].filter(Boolean),G0=y_?"Switching model…":v0.join(" • ")||`Current model: ${O0}${A$} (tap to open model picker)`,r_=(Q)=>{if(!Q||typeof Q!=="object")return;let P=Q.model??Q.current;if(typeof e==="function")e({model:P??null,thinking_level:Q.thinking_level??null,supports_thinking:Q.supports_thinking,provider_usage:Q.provider_usage??null});if(P&&typeof n==="function")n(P)},u0=(Q)=>{let P=Q||X_.current;if(!P)return;P.style.height="auto",P.style.height=`${P.scrollHeight}px`,P.style.overflowY="hidden"},P$=(Q)=>{if(!Q)return{content:Q,fileRefs:[]};let Y=Q.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),O=-1;for(let c=0;c<Y.length;c+=1)if(Y[c].trim()==="Files:"&&Y[c+1]&&/^\s*-\s+/.test(Y[c+1])){O=c;break}if(O===-1)return{content:Q,fileRefs:[]};let D=[],E=O+1;for(;E<Y.length;E+=1){let c=Y[E];if(/^\s*-\s+/.test(c))D.push(c.replace(/^\s*-\s+/,"").trim());else if(!c.trim())break;else break}if(D.length===0)return{content:Q,fileRefs:[]};let C=Y.slice(0,O),l=Y.slice(E);return{content:[...C,...l].join(`
`).replace(/\n{3,}/g,`

`).trim(),fileRefs:D}},a$=(Q)=>{if(!Q)return{content:Q,messageRefs:[]};let Y=Q.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),O=-1;for(let c=0;c<Y.length;c+=1)if(Y[c].trim()==="Referenced messages:"&&Y[c+1]&&/^\s*-\s+/.test(Y[c+1])){O=c;break}if(O===-1)return{content:Q,messageRefs:[]};let D=[],E=O+1;for(;E<Y.length;E+=1){let c=Y[E];if(/^\s*-\s+/.test(c)){let m=c.replace(/^\s*-\s+/,"").trim().match(/^message:(\S+)$/i);if(m)D.push(m[1])}else if(!c.trim())break;else break}if(D.length===0)return{content:Q,messageRefs:[]};let C=Y.slice(0,O),l=Y.slice(E);return{content:[...C,...l].join(`
`).replace(/\n{3,}/g,`

`).trim(),messageRefs:D}},U$=(Q)=>{let P=P$(Q||""),Y=a$(P.content||"");return{text:Y.content||"",fileRefs:P.fileRefs,messageRefs:Y.messageRefs}},a0=(Q)=>{if(!Q.startsWith("/")||Q.includes(`
`)){m_(!1),J_([]);return}let P=Q.toLowerCase().split(" ")[0];if(P.length<1){m_(!1),J_([]);return}let Y=Z5.filter((O)=>O.name.startsWith(P)||O.name.replace(/-/g,"").startsWith(P.replace(/-/g,"")));if(Y.length>0&&!(Y.length===1&&Y[0].name===P))C_(!1),_0([]),J_(Y),e_(0),m_(!0);else m_(!1),J_([])},M$=(Q)=>{let P=a,Y=P.indexOf(" "),O=Y>=0?P.slice(Y):"",D=Q.name+O;H_(D),m_(!1),J_([]),requestAnimationFrame(()=>{let E=X_.current;if(!E)return;let C=D.length;E.selectionStart=C,E.selectionEnd=C,E.focus()})},p0=(Q)=>{if(W4(Q)==null){C_(!1),_0([]);return}let P=l3(O$,Q,{currentChatJid:W_});if(P.length>0&&!(P.length===1&&G4(P[0].agent_name).trim().toLowerCase()===String(Q||"").trim().toLowerCase()))m_(!1),J_([]),_0(P),X0(0),C_(!0);else C_(!1),_0([])},U0=(Q)=>{let P=G4(Q?.agent_name);if(!P)return;H_(P),C_(!1),_0([]),requestAnimationFrame(()=>{let Y=X_.current;if(!Y)return;let O=P.length;Y.selectionStart=O,Y.selectionEnd=O,Y.focus()})},F$=(Q)=>{if(Q?.preventDefault?.(),Q?.stopPropagation?.(),j||!G$&&!k$&&!w$&&!R$&&!M_)return;P_(!1),m_(!1),J_([]),C_(!1),_0([]),s_((P)=>!P)},t$=(Q)=>{let P=typeof Q==="string"?Q.trim():"";if(s_(!1),!P||P===W_){requestAnimationFrame(()=>X_.current?.focus());return}D_?.(P)},u$=async(Q)=>{let P=typeof Q==="string"?Q.trim():"";if(s_(!1),!P||typeof G_!=="function"){requestAnimationFrame(()=>X_.current?.focus());return}try{await G_(P)}catch(Y){console.warn("Failed to restore session:",Y),requestAnimationFrame(()=>X_.current?.focus())}},b$=(Q)=>{let P=typeof Q?.chat_jid==="string"?Q.chat_jid.trim():"";if(P&&typeof D_==="function"){D_(P);return}U0(Q)},m$=async()=>{if(typeof I_!=="function")return;s_(!1);try{await I_()}catch(Q){console.warn("Failed to rename session:",Q)}requestAnimationFrame(()=>X_.current?.focus())},g$=async()=>{if(typeof j0!=="function")return;s_(!1);try{await j0()}catch(Q){console.warn("Failed to create session:",Q)}requestAnimationFrame(()=>X_.current?.focus())},e$=async()=>{if(typeof F0!=="function")return;s_(!1);try{await F0(W_)}catch(Q){console.warn("Failed to delete session:",Q)}requestAnimationFrame(()=>X_.current?.focus())},t0=(Q)=>{if(j)A_(Q);else H_(Q),a0(Q),p0(Q);requestAnimationFrame(()=>u0())},_2=(Q)=>{let P=j?K_:a,Y=P&&!P.endsWith(`
`)?`
`:"",O=`${P}${Y}${Q}`.trimStart();t0(O)},p$=(Q)=>{let P=Q?.command?.model_label;if(P)return P;let Y=Q?.command?.message;if(typeof Y==="string"){let O=Y.match(/•\s+([^\n]+?)\s+\(current\)/);if(O?.[1])return O[1].trim()}return null},L_=async(Q)=>{if(j||y_)return;k0(!0);try{let P=await J2("default",Q,null,[],null,W_),Y=p$(P);r_({model:Y??g??null,thinking_level:P?.command?.thinking_level,supports_thinking:P?.command?.supports_thinking});try{let O=await S2(W_);if(O)r_(O)}catch{}return _?.(),!0}catch(P){return console.error("Failed to switch model:",P),alert("Failed to switch model: "+P.message),!1}finally{k0(!1)}},L2=async()=>{await L_("/cycle-model")},A2=async(Q)=>{if(!Q||y_)return;if(await L_(`/model ${Q}`))P_(!1)},c$=(Q)=>{Q.preventDefault(),Q.stopPropagation(),s_(!1),P_((P)=>!P)},$2=(Q)=>{if(Q==="queue"||Q==="steer"||Q==="auto")return Q;return Q_?"queue":null},h$=async(Q,P,Y={})=>{let{includeMedia:O=!0,includeFileRefs:D=!0,includeMessageRefs:E=!0,clearAfterSubmit:C=!0,recordHistory:l=!0}=Y||{},o=typeof Q==="string"?Q:Q&&typeof Q?.target?.value==="string"?Q.target.value:a,c=typeof o==="string"?o:"";if(!c.trim()&&(O?u_.length===0:!0)&&(D?L.length===0:!0)&&(E?G.length===0:!0))return;m_(!1),J_([]),C_(!1),_0([]),s_(!1),U_(null);let m=O?[...u_]:[],Y_=D?[...L]:[],K0=E?[...G]:[],P0=c.trim();if(l&&P0){let W0=s$.current,C0=L$(W0.filter((N2)=>N2!==P0));if(C0.push(P0),C0.length>200)C0.splice(0,C0.length-200);s$.current=C0,S0(C0),H0.current=-1,D$.current=""}let Y0=()=>{if(O)h_([...m]);if(D)O_?.(Y_);if(E)F_?.(K0);H_(P0),requestAnimationFrame(()=>u0())};if(C)H_(""),h_([]),B?.(),b?.();(async()=>{try{if(await t?.({content:P0,submitMode:P,fileRefs:Y_,messageRefs:K0,mediaFiles:m})){_?.();return}let C0=[];for(let e0 of m){let F2=await s1(e0);C0.push(F2.id)}let N2=Y_.length?`Files:
${Y_.map((e0)=>`- ${e0}`).join(`
`)}`:"",n$=K0.length?`Referenced messages:
${K0.map((e0)=>`- message:${e0}`).join(`
`)}`:"",U2=C0.length?`Attachments:
${C0.map((e0,F2)=>{let y1=m[F2]?.name||`attachment-${F2+1}`;return`- attachment:${e0} (${y1})`}).join(`
`)}`:"",E1=[P0,N2,n$,U2].filter(Boolean).join(`

`),z2=await J2("default",E1,null,C0,$2(P),W_);if(Z_?.(z2),z2?.command){r_({model:z2.command.model_label??g??null,thinking_level:z2.command.thinking_level,supports_thinking:z2.command.supports_thinking});try{let e0=await S2(W_);if(e0)r_(e0)}catch{}}_?.()}catch(W0){if(C)Y0();let C0=W0?.message||"Failed to send message.";U_(C0),v_?.(C0),console.error("Failed to post:",W0)}})()},P2=(Q)=>{c_?.(Q)},j2=(Q)=>{if(Q.isComposing)return;if(j&&Q.key==="Escape"){Q.preventDefault(),A_(""),X?.();return}if(!j&&l_&&Q.key==="Escape"){Q.preventDefault(),s_(!1);return}if(x_&&V0.length>0){let P=X_.current?.value??(j?K_:a);if(!String(P||"").match(/^@([a-zA-Z0-9_-]*)$/))C_(!1),_0([]);else{if(Q.key==="ArrowDown"){Q.preventDefault(),X0((Y)=>(Y+1)%V0.length);return}if(Q.key==="ArrowUp"){Q.preventDefault(),X0((Y)=>(Y-1+V0.length)%V0.length);return}if(Q.key==="Tab"||Q.key==="Enter"){Q.preventDefault(),U0(V0[g0]);return}if(Q.key==="Escape"){Q.preventDefault(),C_(!1),_0([]);return}}}if(g_&&E_.length>0){let P=X_.current?.value??(j?K_:a);if(!String(P||"").startsWith("/"))m_(!1),J_([]);else{if(Q.key==="ArrowDown"){Q.preventDefault(),e_((Y)=>(Y+1)%E_.length);return}if(Q.key==="ArrowUp"){Q.preventDefault(),e_((Y)=>(Y-1+E_.length)%E_.length);return}if(Q.key==="Tab"){Q.preventDefault(),M$(E_[o_]);return}if(Q.key==="Enter"&&!Q.shiftKey){if(!(X_.current?.value??(j?K_:a)).includes(" ")){Q.preventDefault();let D=E_[o_];m_(!1),J_([]),h$(D.name);return}}if(Q.key==="Escape"){Q.preventDefault(),m_(!1),J_([]);return}}}if(!j&&(Q.key==="ArrowUp"||Q.key==="ArrowDown")&&!Q.metaKey&&!Q.ctrlKey&&!Q.altKey&&!Q.shiftKey){let P=X_.current;if(!P)return;let Y=P.value||"",O=P.selectionStart===0&&P.selectionEnd===0,D=P.selectionStart===Y.length&&P.selectionEnd===Y.length;if(Q.key==="ArrowUp"&&O||Q.key==="ArrowDown"&&D){let E=s$.current;if(!E.length)return;Q.preventDefault();let C=H0.current;if(Q.key==="ArrowUp"){if(C===-1)D$.current=Y,C=E.length-1;else if(C>0)C-=1;H0.current=C,t0(E[C]||"")}else{if(C===-1)return;if(C<E.length-1)C+=1,H0.current=C,t0(E[C]||"");else H0.current=-1,t0(D$.current||""),D$.current=""}requestAnimationFrame(()=>{let l=X_.current;if(!l)return;let o=l.value.length;l.selectionStart=o,l.selectionEnd=o});return}}if(Q.key==="Enter"&&!Q.shiftKey&&(Q.ctrlKey||Q.metaKey)){Q.preventDefault();let P=X_.current?.value??(j?K_:a);if(j){if(P.trim())N?.(P.trim(),Z)}else h$(P,"steer");return}if(Q.key==="Enter"&&!Q.shiftKey){Q.preventDefault();let P=X_.current?.value??(j?K_:a);if(j){if(P.trim())N?.(P.trim(),Z)}else h$(P)}},Z2=(Q)=>{let P=Array.from(Q||[]).filter((Y)=>Y instanceof File&&!String(Y.name||"").startsWith(".DS_Store"));if(!P.length)return;h_((Y)=>[...Y,...P]),U_(null)},c0=(Q)=>{Z2(Q.target.files),Q.target.value=""},m0=(Q)=>{if(j)return;Q.preventDefault(),Q.stopPropagation(),Z0.current+=1,i_(!0)},i$=(Q)=>{if(j)return;if(Q.preventDefault(),Q.stopPropagation(),Z0.current=Math.max(0,Z0.current-1),Z0.current===0)i_(!1)},B2=(Q)=>{if(j)return;if(Q.preventDefault(),Q.stopPropagation(),Q.dataTransfer)Q.dataTransfer.dropEffect="copy";i_(!0)},h0=(Q)=>{if(j)return;Q.preventDefault(),Q.stopPropagation(),Z0.current=0,i_(!1),Z2(Q.dataTransfer?.files||[])},H$=(Q)=>{if(j)return;let P=Q.clipboardData?.items;if(!P||!P.length)return;let Y=[];for(let O of P){if(O.kind!=="file")continue;let D=O.getAsFile?.();if(D)Y.push(D)}if(Y.length>0)Q.preventDefault(),Z2(Y)},Q2=(Q)=>{h_((P)=>P.filter((Y,O)=>O!==Q))},l$=()=>{U_(null),h_([]),B?.(),b?.()},O2=()=>{if(!navigator.geolocation){alert("Geolocation is not available in this browser.");return}navigator.geolocation.getCurrentPosition((Q)=>{let{latitude:P,longitude:Y,accuracy:O}=Q.coords,D=`${P.toFixed(5)}, ${Y.toFixed(5)}`,E=Number.isFinite(O)?` ±${Math.round(O)}m`:"",C=`https://maps.google.com/?q=${P},${Y}`,l=`Location: ${D}${E} ${C}`;_2(l)},(Q)=>{let P=Q?.message||"Unable to retrieve location.";alert(`Location error: ${P}`)},{enableHighAccuracy:!0,timeout:1e4,maximumAge:0})};R(()=>{if(!B0)return;d0(!0),S2(W_).then((Q)=>{let P=Array.isArray(Q?.models)?Q.models.filter((Y)=>typeof Y==="string"&&Y.trim().length>0):[];P.sort((Y,O)=>Y.localeCompare(O,void 0,{sensitivity:"base"})),Q0(P),r_(Q)}).catch((Q)=>{console.warn("Failed to load model list:",Q),Q0([])}).finally(()=>{d0(!1)})},[B0,g]),R(()=>{if(j)P_(!1),s_(!1),m_(!1),J_([]),C_(!1),_0([])},[j]),R(()=>{if(l_&&!D0)s_(!1)},[l_,D0]),R(()=>{if(!B0)return;let Q=(P)=>{let Y=J$.current,O=Y$.current,D=P.target;if(Y&&Y.contains(D))return;if(O&&O.contains(D))return;P_(!1)};return document.addEventListener("pointerdown",Q),()=>document.removeEventListener("pointerdown",Q)},[B0]),R(()=>{if(!l_)return;let Q=(P)=>{let Y=T$.current,O=w0.current,D=P.target;if(Y&&Y.contains(D))return;if(O&&O.contains(D))return;s_(!1)};return document.addEventListener("pointerdown",Q),()=>document.removeEventListener("pointerdown",Q)},[l_]),R(()=>{let Q=()=>{let E=q$.current?.clientWidth||0;s((C)=>C===E?C:E)};Q();let P=q$.current,Y=0,O=()=>{if(Y)cancelAnimationFrame(Y);Y=requestAnimationFrame(()=>{Y=0,Q()})},D=null;if(P&&typeof ResizeObserver<"u")D=new ResizeObserver(()=>O()),D.observe(P);if(typeof window<"u")window.addEventListener("resize",O);return()=>{if(Y)cancelAnimationFrame(Y);if(D?.disconnect?.(),typeof window<"u")window.removeEventListener("resize",O)}},[j,g,r0.length,H?.percent]);let i0=(Q)=>{let P=Q.target.value;if(U_(null),l_)s_(!1);u0(Q.target),t0(P)};return R(()=>{requestAnimationFrame(()=>u0())},[a,K_,j]),R(()=>{if(j)return;p0(a)},[O$,W_,a,j]),U`
        <div class="compose-box">
            ${!j&&q_.length>0&&U`
                <div class="compose-queue-stack">
                    ${q_.map((Q)=>{let P=typeof Q?.content==="string"?Q.content:"",Y=U$(P);if(!Y.text.trim()&&Y.fileRefs.length===0&&Y.messageRefs.length===0)return null;return U`
                            <div class="compose-queue-stack-item" role="listitem">
                                <div class="compose-queue-stack-content" title=${P}>
                                    ${Y.text.trim()&&U`
                                        <div class="compose-queue-stack-text">${Y.text}</div>
                                    `}
                                    ${(Y.messageRefs.length>0||Y.fileRefs.length>0)&&U`
                                        <div class="compose-queue-stack-refs">
                                            ${Y.messageRefs.map((O)=>U`
                                                <${X$}
                                                    key=${"queue-msg-"+O}
                                                    prefix="compose"
                                                    label=${"msg:"+O}
                                                    title=${"Message reference: "+O}
                                                    icon="message"
                                                />
                                            `)}
                                            ${Y.fileRefs.map((O)=>{let D=O.split("/").pop()||O;return U`
                                                    <${X$}
                                                        key=${"queue-file-"+O}
                                                        prefix="compose"
                                                        label=${D}
                                                        title=${O}
                                                        onClick=${()=>p?.(O)}
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
                                        onClick=${()=>P2(Q)}
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
                                        onClick=${()=>__?.(Q)}
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
                class=${`compose-input-wrapper${t_?" drag-active":""}`}
                onDragEnter=${m0}
                onDragOver=${B2}
                onDragLeave=${i$}
                onDrop=${h0}
            >
                <div class="compose-input-main">
                    ${z_&&!S$&&U`
                        <div class="compose-submit-error compose-submit-error-top" role="status" aria-live="polite">${z_}</div>
                    `}
                    ${S$&&U`
                        <div class="compose-file-refs">
                            ${z_&&U`
                                <div class="compose-submit-error" role="status" aria-live="polite">${z_}</div>
                            `}
                            ${G.map((Q)=>{return U`
                                    <${X$}
                                        key=${"msg-"+Q}
                                        prefix="compose"
                                        label=${"msg:"+Q}
                                        title=${"Message reference: "+Q}
                                        removeTitle="Remove reference"
                                        icon="message"
                                        onRemove=${()=>F?.(Q)}
                                    />
                                `})}
                            ${L.map((Q)=>{let P=Q.split("/").pop()||Q;return U`
                                    <${X$}
                                        prefix="compose"
                                        label=${P}
                                        title=${Q}
                                        onClick=${()=>p?.(Q)}
                                        removeTitle="Remove file"
                                        onRemove=${()=>q?.(Q)}
                                    />
                                `})}
                            ${u_.map((Q,P)=>{let Y=Q?.name||`attachment-${P+1}`;return U`
                                    <${X$}
                                        key=${Y+P}
                                        prefix="compose"
                                        label=${Y}
                                        title=${Y}
                                        removeTitle="Remove attachment"
                                        onRemove=${()=>Q2(P)}
                                    />
                                `})}
                            <button
                                type="button"
                                class="compose-clear-attachments-btn"
                                onClick=${l$}
                                title="Clear all attachments and references"
                                aria-label="Clear all attachments and references"
                            >
                                Clear all
                            </button>
                        </div>
                    `}
                    ${!j&&typeof $_==="function"&&U`
                        <button
                            type="button"
                            class="compose-popout-btn"
                            onClick=${()=>$_?.()}
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
                        ref=${X_}
                        placeholder=${j?"Search (Enter to run)...":"Message (Enter to send, Shift+Enter for newline)..."}
                        value=${j?K_:a}
                        onInput=${i0}
                        onKeyDown=${j2}
                        onPaste=${H$}
                        onFocus=${$}
                        onClick=${$}
                        rows="1"
                    />
                    ${x_&&V0.length>0&&U`
                        <div class="slash-autocomplete" ref=${R0}>
                            ${V0.map((Q,P)=>U`
                                <div
                                    key=${Q.chat_jid||Q.agent_name}
                                    class=${`slash-item${P===g0?" active":""}`}
                                    onMouseDown=${(Y)=>{Y.preventDefault(),U0(Q)}}
                                    onMouseEnter=${()=>X0(P)}
                                >
                                    <span class="slash-name">@${Q.agent_name}</span>
                                    <span class="slash-desc">${Q.chat_jid||"Active agent"}</span>
                                </div>
                            `)}
                        </div>
                    `}
                    ${g_&&E_.length>0&&U`
                        <div class="slash-autocomplete" ref=${S_}>
                            ${E_.map((Q,P)=>U`
                                <div
                                    key=${Q.name}
                                    class=${`slash-item${P===o_?" active":""}`}
                                    onMouseDown=${(Y)=>{Y.preventDefault(),M$(Q)}}
                                    onMouseEnter=${()=>e_(P)}
                                >
                                    <span class="slash-name">${Q.name}</span>
                                    <span class="slash-desc">${Q.description}</span>
                                </div>
                            `)}
                        </div>
                    `}
                    ${B0&&!j&&U`
                        <div class="compose-model-popup" ref=${J$}>
                            <div class="compose-model-popup-title">Select model</div>
                            <div class="compose-model-popup-menu" role="menu" aria-label="Model picker">
                                ${T0&&U`
                                    <div class="compose-model-popup-empty">Loading models…</div>
                                `}
                                ${!T0&&T_.length===0&&U`
                                    <div class="compose-model-popup-empty">No models available.</div>
                                `}
                                ${!T0&&T_.map((Q)=>U`
                                    <button
                                        key=${Q}
                                        type="button"
                                        role="menuitem"
                                        class=${`compose-model-popup-item${g===Q?" active":""}`}
                                        onClick=${()=>{A2(Q)}}
                                        disabled=${y_}
                                    >
                                        ${Q}
                                    </button>
                                `)}
                            </div>
                            <div class="compose-model-popup-actions">
                                <button
                                    type="button"
                                    class="compose-model-popup-btn"
                                    onClick=${()=>{L2()}}
                                    disabled=${y_}
                                >
                                    Next model
                                </button>
                            </div>
                        </div>
                    `}
                    ${l_&&!j&&U`
                        <div class="compose-model-popup" ref=${T$}>
                            <div class="compose-model-popup-title">Manage sessions & agents</div>
                            <div class="compose-model-popup-menu" role="menu" aria-label="Sessions and agents">
                                ${U`
                                    <div class="compose-model-popup-item current" role="note" aria-live="polite">
                                        ${(()=>{let Q=typeof z0?.agent_name==="string"&&z0.agent_name.trim()?`@${z0.agent_name.trim()}`:W_,P=typeof z0?.chat_jid==="string"&&z0.chat_jid.trim()?z0.chat_jid.trim():W_;return`${Q} — ${P} • current`})()}
                                    </div>
                                `}
                                ${!y$&&U`
                                    <div class="compose-model-popup-empty">No other sessions yet.</div>
                                `}
                                ${y$&&x0.map((Q)=>{let P=Boolean(Q.archived_at),Y=`@${Q.agent_name} — ${Q.chat_jid}${Q.is_active?" • active":""}${P?" • archived":""}`;return U`
                                        <button
                                            key=${Q.chat_jid}
                                            type="button"
                                            role="menuitem"
                                            class=${`compose-model-popup-item${P?" archived":""}`}
                                            onClick=${()=>{if(P){u$(Q.chat_jid);return}t$(Q.chat_jid)}}
                                            disabled=${P?!k$:!G$}
                                            title=${P?"Restore this archived branch":"Switch to this session"}
                                        >
                                            ${Y}
                                        </button>
                                    `})}
                            </div>
                            ${(R$||w$||M_)&&U`
                                <div class="compose-model-popup-actions">
                                    ${R$&&U`
                                        <button
                                            type="button"
                                            class="compose-model-popup-btn primary"
                                            onClick=${()=>{g$()}}
                                            title="Create a new agent/session branch from this chat"
                                        >
                                            New
                                        </button>
                                    `}
                                    ${w$&&U`
                                        <button
                                            type="button"
                                            class="compose-model-popup-btn"
                                            onClick=${()=>{m$()}}
                                            title="Rename current branch name and agent handle"
                                        >
                                            Rename current…
                                        </button>
                                    `}
                                    ${M_&&U`
                                        <button
                                            type="button"
                                            class="compose-model-popup-btn danger"
                                            onClick=${()=>{e$()}}
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
                <div class="compose-footer" ref=${q$}>
                    ${!j&&g&&U`
                    <div class="compose-meta-row">
                        ${!j&&g&&U`
                            <div class="compose-model-meta">
                                <button
                                    ref=${Y$}
                                    type="button"
                                    class="compose-model-hint compose-model-hint-btn"
                                    title=${G0}
                                    aria-label="Open model picker"
                                    onClick=${c$}
                                    disabled=${y_}
                                >
                                    ${y_?"Switching…":O0}
                                </button>
                                <div class="compose-model-meta-subline">
                                    ${!y_&&V$&&U`
                                        <span class="compose-model-usage-hint" title=${G0}>
                                            ${V$}
                                        </span>
                                    `}
                                </div>
                            </div>
                        `}
                    </div>
                    `}
                    <div class="compose-actions ${j?"search-mode":""}">
                    ${I0&&U`
                        <div class="compose-agent-hints compose-agent-hints-inline" title="Active chat agents you can mention with @name">
                            <span class="compose-agent-hints-label">Agents</span>
                            ${r0.map((Q)=>U`
                                <button
                                    key=${Q.chat_jid||Q.agent_name}
                                    type="button"
                                    class=${`compose-agent-chip${Q.is_active?" active":""}`}
                                    onClick=${()=>b$(Q)}
                                    title=${`${Q.chat_jid||"Active agent"} — switch to @${Q.agent_name}`}
                                >
                                    <span class="compose-agent-chip-handle">@${Q.agent_name}</span>
                                </button>
                            `)}
                        </div>
                    `}
                    ${!j&&H&&H.percent!=null&&U`
                        <${N5} usage=${H} />
                    `}
                    ${D0&&U`
                        <button
                            ref=${w0}
                            type="button"
                            class=${`icon-btn compose-mention-btn${l_?" active":""}`}
                            onClick=${F$}
                            title=${l_?"Hide session manager":"Manage Sessions/Agents"}
                            aria-label="Manage Sessions/Agents"
                            aria-expanded=${l_?"true":"false"}
                        >
                            <svg class="compose-mention-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false">
                                <circle cx="12" cy="12" r="4.25" />
                                <path d="M16.25 7.75v5.4a2.1 2.1 0 0 0 4.2 0V12a8.45 8.45 0 1 0-4.2 7.33" />
                            </svg>
                        </button>
                    `}
                    ${j&&U`
                        <label class="compose-search-scope-wrap" title="Search scope">
                            <span class="compose-search-scope-label">Scope</span>
                            <select
                                class="compose-search-scope-select"
                                value=${Z}
                                onChange=${(Q)=>z?.(Q.currentTarget.value)}
                            >
                                <option value="current">Current</option>
                                <option value="root">Branch family</option>
                                <option value="all">All chats</option>
                            </select>
                        </label>
                    `}
                    <button
                        class="icon-btn search-toggle"
                        onClick=${j?X:K}
                        title=${j?"Close search":"Search"}
                    >
                        ${j?U`
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M18 6L6 18M6 6l12 12"/>
                            </svg>
                        `:U`
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <circle cx="11" cy="11" r="8"/>
                                <path d="M21 21l-4.35-4.35"/>
                            </svg>
                        `}
                    </button>
                    ${W$&&!j&&U`
                        <button
                            class="icon-btn location-btn"
                            onClick=${O2}
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
                    ${s0&&!j&&U`
                        <button
                            class=${`icon-btn notification-btn${Q$?" active":""}`}
                            onClick=${i}
                            title=${E$}
                            type="button"
                        >
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M18 8a6 6 0 1 0-12 0c0 7-3 9-3 9h18s-3-2-3-9" />
                                <path d="M13.73 21a2 2 0 0 1-3.46 0" />
                            </svg>
                        </button>
                    `}
                    ${!j&&U`
                        ${d&&N_&&U`
                            <button
                                class="icon-btn attach-editor-btn"
                                onClick=${N_}
                                title=${`Attach open file: ${d}`}
                                type="button"
                                disabled=${L.includes(d)}
                            >
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"/><polyline points="13 2 13 9 20 9"/></svg>
                            </button>
                        `}
                        <label class="icon-btn" title="Attach file">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>
                            <input type="file" multiple hidden onChange=${c0} />
                        </label>
                    `}
                    ${(k_!=="connected"||!j)&&U`
                        <div class="compose-send-stack">
                            ${k_!=="connected"&&U`
                                <span class="compose-connection-status connection-status ${k_}" title=${J0}>
                                    ${f$}
                                </span>
                            `}
                            ${!j&&U`
                                <button 
                                    class="icon-btn send-btn" 
                                    type="button"
                                    onClick=${()=>{h$()}}
                                    disabled=${!N0}
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
    `}var t3="piclaw_theme",q4="piclaw_tint",u2={bgPrimary:"#ffffff",bgSecondary:"#f7f9fa",bgHover:"#e8ebed",textPrimary:"#0f1419",textSecondary:"#536471",borderColor:"#eff3f4",accent:"#1d9bf0",accentHover:"#1a8cd8",danger:"#f4212e",success:"#00ba7c"},e3={bgPrimary:"#000000",bgSecondary:"#16181c",bgHover:"#1d1f23",textPrimary:"#e7e9ea",textSecondary:"#71767b",borderColor:"#2f3336",accent:"#1d9bf0",accentHover:"#1a8cd8",danger:"#f4212e",success:"#00ba7c"},r3={default:{label:"Default",mode:"auto",light:u2,dark:e3},tango:{label:"Tango",mode:"light",light:{bgPrimary:"#f6f5f4",bgSecondary:"#efedeb",bgHover:"#e5e3e1",textPrimary:"#2e3436",textSecondary:"#5c6466",borderColor:"#d3d7cf",accent:"#3465a4",accentHover:"#2c5890",danger:"#cc0000",success:"#4e9a06"}},xterm:{label:"XTerm",mode:"dark",dark:{bgPrimary:"#000000",bgSecondary:"#0a0a0a",bgHover:"#121212",textPrimary:"#d0d0d0",textSecondary:"#8a8a8a",borderColor:"#1f1f1f",accent:"#00a2ff",accentHover:"#0086d1",danger:"#ff5f5f",success:"#5fff87"}},monokai:{label:"Monokai",mode:"dark",dark:{bgPrimary:"#272822",bgSecondary:"#2f2f2f",bgHover:"#3a3a3a",textPrimary:"#f8f8f2",textSecondary:"#cfcfc2",borderColor:"#3e3d32",accent:"#f92672",accentHover:"#e81560",danger:"#f92672",success:"#a6e22e"}},"monokai-pro":{label:"Monokai Pro",mode:"dark",dark:{bgPrimary:"#2d2a2e",bgSecondary:"#363237",bgHover:"#403a40",textPrimary:"#fcfcfa",textSecondary:"#c1c0c0",borderColor:"#444046",accent:"#ff6188",accentHover:"#f74f7e",danger:"#ff4f5e",success:"#a9dc76"}},ristretto:{label:"Ristretto",mode:"dark",dark:{bgPrimary:"#2c2525",bgSecondary:"#362d2d",bgHover:"#403535",textPrimary:"#f4f1ef",textSecondary:"#cbbdb8",borderColor:"#4a3c3c",accent:"#ff9f43",accentHover:"#f28a2e",danger:"#ff5f56",success:"#a9dc76"}},dracula:{label:"Dracula",mode:"dark",dark:{bgPrimary:"#282a36",bgSecondary:"#303445",bgHover:"#3a3f52",textPrimary:"#f8f8f2",textSecondary:"#c5c8d6",borderColor:"#44475a",accent:"#bd93f9",accentHover:"#a87ded",danger:"#ff5555",success:"#50fa7b"}},catppuccin:{label:"Catppuccin",mode:"dark",dark:{bgPrimary:"#1e1e2e",bgSecondary:"#24273a",bgHover:"#2c2f41",textPrimary:"#cdd6f4",textSecondary:"#a6adc8",borderColor:"#313244",accent:"#89b4fa",accentHover:"#74a0f5",danger:"#f38ba8",success:"#a6e3a1"}},nord:{label:"Nord",mode:"dark",dark:{bgPrimary:"#2e3440",bgSecondary:"#3b4252",bgHover:"#434c5e",textPrimary:"#eceff4",textSecondary:"#d8dee9",borderColor:"#4c566a",accent:"#88c0d0",accentHover:"#78a9c0",danger:"#bf616a",success:"#a3be8c"}},gruvbox:{label:"Gruvbox",mode:"dark",dark:{bgPrimary:"#282828",bgSecondary:"#32302f",bgHover:"#3c3836",textPrimary:"#ebdbb2",textSecondary:"#bdae93",borderColor:"#3c3836",accent:"#d79921",accentHover:"#c28515",danger:"#fb4934",success:"#b8bb26"}},solarized:{label:"Solarized",mode:"auto",light:{bgPrimary:"#fdf6e3",bgSecondary:"#f5efdc",bgHover:"#eee8d5",textPrimary:"#586e75",textSecondary:"#657b83",borderColor:"#e0d8c6",accent:"#268bd2",accentHover:"#1f78b3",danger:"#dc322f",success:"#859900"},dark:{bgPrimary:"#002b36",bgSecondary:"#073642",bgHover:"#0b3c4a",textPrimary:"#eee8d5",textSecondary:"#93a1a1",borderColor:"#18424a",accent:"#268bd2",accentHover:"#1f78b3",danger:"#dc322f",success:"#859900"}},tokyo:{label:"Tokyo",mode:"dark",dark:{bgPrimary:"#1a1b26",bgSecondary:"#24283b",bgHover:"#2f3549",textPrimary:"#c0caf5",textSecondary:"#9aa5ce",borderColor:"#414868",accent:"#7aa2f7",accentHover:"#6b92e6",danger:"#f7768e",success:"#9ece6a"}},miasma:{label:"Miasma",mode:"dark",dark:{bgPrimary:"#1f1f23",bgSecondary:"#29292f",bgHover:"#33333a",textPrimary:"#e5e5e5",textSecondary:"#b4b4b4",borderColor:"#3d3d45",accent:"#c9739c",accentHover:"#b8618c",danger:"#e06c75",success:"#98c379"}},github:{label:"GitHub",mode:"auto",light:{bgPrimary:"#ffffff",bgSecondary:"#f6f8fa",bgHover:"#eaeef2",textPrimary:"#24292f",textSecondary:"#57606a",borderColor:"#d0d7de",accent:"#0969da",accentHover:"#0550ae",danger:"#cf222e",success:"#1a7f37"},dark:{bgPrimary:"#0d1117",bgSecondary:"#161b22",bgHover:"#21262d",textPrimary:"#c9d1d9",textSecondary:"#8b949e",borderColor:"#30363d",accent:"#2f81f7",accentHover:"#1f6feb",danger:"#f85149",success:"#3fb950"}},gotham:{label:"Gotham",mode:"dark",dark:{bgPrimary:"#0b0f14",bgSecondary:"#111720",bgHover:"#18212b",textPrimary:"#cbd6e2",textSecondary:"#9bb0c3",borderColor:"#1f2a37",accent:"#5ccfe6",accentHover:"#48b8ce",danger:"#d26937",success:"#2aa889"}}},z5=["--bg-primary","--bg-secondary","--bg-hover","--text-primary","--text-secondary","--border-color","--accent-color","--accent-hover","--accent-contrast-text","--accent-soft","--accent-soft-strong","--danger-color","--success-color","--search-highlight-color"],Y2={theme:"default",tint:null},_8="light",V4=!1;function L4(_){let $=String(_||"").trim().toLowerCase();if(!$)return"default";if($==="solarized-dark"||$==="solarized-light")return"solarized";if($==="github-dark"||$==="github-light")return"github";if($==="tokyo-night")return"tokyo";return $}function w2(_){if(!_)return null;let $=String(_).trim();if(!$)return null;let j=$.startsWith("#")?$.slice(1):$;if(!/^[0-9a-fA-F]{3}$/.test(j)&&!/^[0-9a-fA-F]{6}$/.test(j))return null;let Z=j.length===3?j.split("").map((z)=>z+z).join(""):j,N=parseInt(Z,16);return{r:N>>16&255,g:N>>8&255,b:N&255,hex:`#${Z.toLowerCase()}`}}function K5(_){if(!_||typeof document>"u")return null;let $=String(_).trim();if(!$)return null;let j=document.createElement("div");if(j.style.color="",j.style.color=$,!j.style.color)return null;let Z=j.style.color;try{if(document.body)j.style.display="none",document.body.appendChild(j),Z=getComputedStyle(j).color||j.style.color,document.body.removeChild(j)}catch{}let N=Z.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/i);if(!N)return null;let z=parseInt(N[1],10),K=parseInt(N[2],10),X=parseInt(N[3],10);if(![z,K,X].every((q)=>Number.isFinite(q)))return null;let L=`#${[z,K,X].map((q)=>q.toString(16).padStart(2,"0")).join("")}`;return{r:z,g:K,b:X,hex:L}}function $8(_){return w2(_)||K5(_)}function v2(_,$,j){let Z=Math.round(_.r+($.r-_.r)*j),N=Math.round(_.g+($.g-_.g)*j),z=Math.round(_.b+($.b-_.b)*j);return`rgb(${Z} ${N} ${z})`}function X4(_,$){return`rgba(${_.r}, ${_.g}, ${_.b}, ${$})`}function Y5(_){let $=_.r/255,j=_.g/255,Z=_.b/255,N=$<=0.03928?$/12.92:Math.pow(($+0.055)/1.055,2.4),z=j<=0.03928?j/12.92:Math.pow((j+0.055)/1.055,2.4),K=Z<=0.03928?Z/12.92:Math.pow((Z+0.055)/1.055,2.4);return 0.2126*N+0.7152*z+0.0722*K}function W5(_){return Y5(_)>0.4?"#000000":"#ffffff"}function j8(){if(typeof window>"u")return"light";try{return window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}catch{return"light"}}function B4(_){return r3[_]||r3.default}function G5(_){return _.mode==="auto"?j8():_.mode}function Z8(_,$){let j=B4(_);if($==="dark"&&j.dark)return j.dark;if($==="light"&&j.light)return j.light;return j.dark||j.light||u2}function N8(_,$,j){let Z=$8($);if(!Z)return _;let N=w2(_.bgPrimary),z=w2(_.bgSecondary),K=w2(_.bgHover),X=w2(_.borderColor);if(!N||!z||!K||!X)return _;let q=w2(j==="dark"?"#ffffff":"#000000");return{..._,bgPrimary:v2(N,Z,0.08),bgSecondary:v2(z,Z,0.12),bgHover:v2(K,Z,0.16),borderColor:v2(X,Z,0.08),accent:Z.hex,accentHover:q?v2(Z,q,0.18):Z.hex}}function V5(_,$){if(typeof document>"u")return;let j=document.documentElement,Z=_.accent,N=$8(Z),z=N?X4(N,$==="dark"?0.35:0.2):_.searchHighlight||_.searchHighlightColor,K=N?X4(N,$==="dark"?0.16:0.12):"rgba(29, 155, 240, 0.12)",X=N?X4(N,$==="dark"?0.28:0.2):"rgba(29, 155, 240, 0.2)",L=N?W5(N):$==="dark"?"#000000":"#ffffff",q={"--bg-primary":_.bgPrimary,"--bg-secondary":_.bgSecondary,"--bg-hover":_.bgHover,"--text-primary":_.textPrimary,"--text-secondary":_.textSecondary,"--border-color":_.borderColor,"--accent-color":Z,"--accent-hover":_.accentHover||Z,"--accent-soft":K,"--accent-soft-strong":X,"--accent-contrast-text":L,"--danger-color":_.danger||u2.danger,"--success-color":_.success||u2.success,"--search-highlight-color":z||"rgba(29, 155, 240, 0.2)"};Object.entries(q).forEach(([B,G])=>{if(G)j.style.setProperty(B,G)})}function X5(){if(typeof document>"u")return;let _=document.documentElement;z5.forEach(($)=>_.style.removeProperty($))}function k2(_,$={}){if(typeof document>"u")return null;let j=typeof $.id==="string"&&$.id.trim()?$.id.trim():null,Z=j?document.getElementById(j):document.querySelector(`meta[name="${_}"]`);if(!Z)Z=document.createElement("meta"),document.head.appendChild(Z);if(Z.setAttribute("name",_),j)Z.setAttribute("id",j);return Z}function a3(_){let $=L4(Y2?.theme||"default"),j=Y2?.tint?String(Y2.tint).trim():null,Z=Z8($,_);if($==="default"&&j)Z=N8(Z,j,_);if(Z?.bgPrimary)return Z.bgPrimary;return _==="dark"?e3.bgPrimary:u2.bgPrimary}function q5(_,$){if(typeof document>"u")return;let j=k2("theme-color",{id:"dynamic-theme-color"});if(j&&_)j.removeAttribute("media"),j.setAttribute("content",_);let Z=k2("theme-color",{id:"theme-color-light"});if(Z)Z.setAttribute("media","(prefers-color-scheme: light)"),Z.setAttribute("content",a3("light"));let N=k2("theme-color",{id:"theme-color-dark"});if(N)N.setAttribute("media","(prefers-color-scheme: dark)"),N.setAttribute("content",a3("dark"));let z=k2("msapplication-TileColor");if(z&&_)z.setAttribute("content",_);let K=k2("msapplication-navbutton-color");if(K&&_)K.setAttribute("content",_);let X=k2("apple-mobile-web-app-status-bar-style");if(X)X.setAttribute("content",$==="dark"?"black-translucent":"default")}function L5(){if(typeof window>"u")return;let _={...Y2,mode:_8};window.dispatchEvent(new CustomEvent("piclaw-theme-change",{detail:_}))}function Q4(_,$={}){if(typeof window>"u"||typeof document>"u")return;let j=L4(_?.theme||"default"),Z=_?.tint?String(_.tint).trim():null,N=B4(j),z=G5(N),K=Z8(j,z);Y2={theme:j,tint:Z},_8=z;let X=document.documentElement;X.dataset.theme=z,X.dataset.colorTheme=j,X.dataset.tint=Z?String(Z):"",X.style.colorScheme=z;let L=K;if(j==="default"&&Z)L=N8(K,Z,z);if(j==="default"&&!Z)X5();else V5(L,z);if(q5(L.bgPrimary,z),L5(),$.persist!==!1)if($0(t3,j),Z)$0(q4,Z);else $0(q4,"")}function V1(){if(B4(Y2.theme).mode!=="auto")return;Q4(Y2,{persist:!1})}function z8(){if(typeof window>"u")return()=>{};let _=L4(N$(t3)||"default"),$=N$(q4),j=$?$.trim():null;if(Q4({theme:_,tint:j},{persist:!1}),window.matchMedia&&!V4){let Z=window.matchMedia("(prefers-color-scheme: dark)");if(Z.addEventListener)Z.addEventListener("change",V1);else if(Z.addListener)Z.addListener(V1);return V4=!0,()=>{if(Z.removeEventListener)Z.removeEventListener("change",V1);else if(Z.removeListener)Z.removeListener(V1);V4=!1}}return()=>{}}function K8(_){if(!_||typeof _!=="object")return;let $=_.chat_jid||_.chatJid;if($&&$!=="web:default")return;let j=_.theme??_.name??_.colorTheme,Z=_.tint??null;Q4({theme:j||"default",tint:Z},{persist:!0})}function Y8(){if(typeof document>"u")return"light";let _=document.documentElement?.dataset?.theme;if(_==="dark"||_==="light")return _;return j8()}var X1=/#(\w+)/g,B5=new Set(["strong","em","b","i","u","s","br","p","ul","ol","li","blockquote","ruby","rt","rp","span"]),Q5=new Set(["a","abbr","blockquote","br","code","div","em","hr","h1","h2","h3","h4","h5","h6","i","img","kbd","li","mark","ol","p","pre","ruby","rt","rp","s","span","strong","sub","sup","table","tbody","td","th","thead","tr","u","ul","math","semantics","mrow","mi","mn","mo","mtext","mspace","msup","msub","msubsup","mfrac","msqrt","mroot","mtable","mtr","mtd","annotation"]),O5=new Set(["class","style","title","role","aria-hidden","aria-label","aria-expanded","aria-live","data-mermaid","data-hashtag"]),U5={a:new Set(["href","target","rel"]),img:new Set(["src","alt","title"])},F5=new Set(["http:","https:","mailto:",""]);function O4(_){return String(_||"").replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/'/g,"&#39;")}function W2(_,$={}){if(!_)return null;let j=String(_).trim();if(!j)return null;if(j.startsWith("#")||j.startsWith("/"))return j;if(j.startsWith("data:")){if($.allowDataImage&&/^data:image\//i.test(j))return j;return null}if(j.startsWith("blob:"))return j;try{let Z=new URL(j,typeof window<"u"?window.location.origin:"http://localhost");if(!F5.has(Z.protocol))return null;return Z.href}catch{return null}}function W8(_,$={}){if(!_)return"";let j=new DOMParser().parseFromString(_,"text/html"),Z=[],N=j.createTreeWalker(j.body,NodeFilter.SHOW_ELEMENT),z;while(z=N.nextNode())Z.push(z);for(let K of Z){let X=K.tagName.toLowerCase();if(!Q5.has(X)){let q=K.parentNode;if(!q)continue;while(K.firstChild)q.insertBefore(K.firstChild,K);q.removeChild(K);continue}let L=U5[X]||new Set;for(let q of Array.from(K.attributes)){let B=q.name.toLowerCase(),G=q.value;if(B.startsWith("on")){K.removeAttribute(q.name);continue}if(B.startsWith("data-")||B.startsWith("aria-"))continue;if(L.has(B)||O5.has(B)){if(B==="href"){let F=W2(G);if(!F)K.removeAttribute(q.name);else if(K.setAttribute(q.name,F),X==="a"&&!K.getAttribute("rel"))K.setAttribute("rel","noopener noreferrer")}else if(B==="src"){let F=X==="img"&&typeof $.rewriteImageSrc==="function"?$.rewriteImageSrc(G):G,b=W2(F,{allowDataImage:X==="img"});if(!b)K.removeAttribute(q.name);else K.setAttribute(q.name,b)}continue}K.removeAttribute(q.name)}}return j.body.innerHTML}function G8(_){if(!_)return _;let $=_.replace(/</g,"&lt;").replace(/>/g,"&gt;");return new DOMParser().parseFromString($,"text/html").documentElement.textContent}function q1(_,$=2){if(!_)return _;let j=_;for(let Z=0;Z<$;Z+=1){let N=G8(j);if(N===j)break;j=N}return j}function H5(_){if(!_)return{text:"",blocks:[]};let j=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),Z=[],N=[],z=!1,K=[];for(let X of j){if(!z&&X.trim().match(/^```mermaid\s*$/i)){z=!0,K=[];continue}if(z&&X.trim().match(/^```\s*$/)){let L=Z.length;Z.push(K.join(`
`)),N.push(`@@MERMAID_BLOCK_${L}@@`),z=!1,K=[];continue}if(z)K.push(X);else N.push(X)}if(z)N.push("```mermaid"),N.push(...K);return{text:N.join(`
`),blocks:Z}}function J5(_){if(!_)return _;return q1(_,5)}function D5(_){let $=new TextEncoder().encode(String(_||"")),j="";for(let Z of $)j+=String.fromCharCode(Z);return btoa(j)}function E5(_){let $=atob(String(_||"")),j=new Uint8Array($.length);for(let Z=0;Z<$.length;Z+=1)j[Z]=$.charCodeAt(Z);return new TextDecoder().decode(j)}function y5(_,$){if(!_||!$||$.length===0)return _;return _.replace(/@@MERMAID_BLOCK_(\d+)@@/g,(j,Z)=>{let N=Number(Z),z=$[N]??"",K=J5(z);return`<div class="mermaid-container" data-mermaid="${D5(K)}"><div class="mermaid-loading">Loading diagram...</div></div>`})}function V8(_){if(!_)return _;return _.replace(/<code>([\s\S]*?)<\/code>/gi,($,j)=>{if(j.includes(`
`))return`
\`\`\`
${j}
\`\`\`
`;return`\`${j}\``})}var k5={span:new Set(["title","class","lang","dir"])};function w5(_,$){let j=k5[_];if(!j||!$)return"";let Z=[],N=/([a-zA-Z_:][\w:.-]*)(?:\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s"'`=<>]+)))?/g,z;while(z=N.exec($)){let K=(z[1]||"").toLowerCase();if(!K||K.startsWith("on")||!j.has(K))continue;let X=z[2]??z[3]??z[4]??"";Z.push(` ${K}="${O4(X)}"`)}return Z.join("")}function X8(_){if(!_)return _;return _.replace(/&lt;([\s\S]*?)&gt;/g,($,j)=>{let Z=j.trim(),N=Z.startsWith("/"),z=N?Z.slice(1).trim():Z,X=z.endsWith("/")?z.slice(0,-1).trim():z,[L=""]=X.split(/\s+/,1),q=L.toLowerCase();if(!q||!B5.has(q))return $;if(q==="br")return N?"":"<br>";if(N)return`</${q}>`;let B=X.slice(L.length).trim(),G=w5(q,B);return`<${q}${G}>`})}function q8(_){if(!_)return _;let $=(j)=>j.replace(/&amp;lt;/g,"&lt;").replace(/&amp;gt;/g,"&gt;").replace(/&amp;quot;/g,"&quot;").replace(/&amp;#39;/g,"&#39;").replace(/&amp;amp;/g,"&amp;");return _.replace(/<pre><code>([\s\S]*?)<\/code><\/pre>/g,(j,Z)=>`<pre><code>${$(Z)}</code></pre>`).replace(/<code>([\s\S]*?)<\/code>/g,(j,Z)=>`<code>${$(Z)}</code>`)}function L8(_){if(!_)return _;let $=new DOMParser().parseFromString(_,"text/html"),j=$.createTreeWalker($.body,NodeFilter.SHOW_TEXT),Z=(z)=>z.replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&quot;/g,'"').replace(/&#39;/g,"'").replace(/&amp;/g,"&"),N;while(N=j.nextNode()){if(!N.nodeValue)continue;let z=Z(N.nodeValue);if(z!==N.nodeValue)N.nodeValue=z}return $.body.innerHTML}function A5(_){if(!window.katex)return _;let $=(K)=>G8(K).replace(/&gt;/g,">").replace(/&lt;/g,"<").replace(/&amp;/g,"&").replace(/<br\s*\/?\s*>/gi,`
`),j=(K)=>{let X=[],L=K.replace(/<pre\b[^>]*>\s*<code\b[^>]*>[\s\S]*?<\/code>\s*<\/pre>/gi,(q)=>{let B=X.length;return X.push(q),`@@CODE_BLOCK_${B}@@`});return L=L.replace(/<code\b[^>]*>[\s\S]*?<\/code>/gi,(q)=>{let B=X.length;return X.push(q),`@@CODE_INLINE_${B}@@`}),{html:L,blocks:X}},Z=(K,X)=>{if(!X.length)return K;return K.replace(/@@CODE_(?:BLOCK|INLINE)_(\d+)@@/g,(L,q)=>{let B=Number(q);return X[B]??""})},N=j(_),z=N.html;return z=z.replace(/(^|\n|<br\s*\/?\s*>|<p>|<\/p>)\s*\$\$([\s\S]+?)\$\$\s*(?=\n|<br\s*\/?\s*>|<\/p>|$)/gi,(K,X,L)=>{try{let q=katex.renderToString($(L.trim()),{displayMode:!0,throwOnError:!1});return`${X}${q}`}catch(q){return`<span class="math-error" title="${O4(q.message)}">${K}</span>`}}),z=z.replace(/(^|[^\\$])\$(?!\s)([^\n$]+?)\$/g,(K,X,L)=>{if(/\s$/.test(L))return K;try{let q=katex.renderToString($(L),{displayMode:!1,throwOnError:!1});return`${X}${q}`}catch(q){return`${X}<span class="math-error" title="${O4(q.message)}">$${L}$</span>`}}),Z(z,N.blocks)}function P5(_){if(!_)return _;let $=new DOMParser().parseFromString(_,"text/html"),j=$.createTreeWalker($.body,NodeFilter.SHOW_TEXT),Z=[],N;while(N=j.nextNode())Z.push(N);for(let z of Z){let K=z.nodeValue;if(!K)continue;if(X1.lastIndex=0,!X1.test(K))continue;X1.lastIndex=0;let X=z.parentElement;if(X&&(X.closest("a")||X.closest("code")||X.closest("pre")))continue;let L=K.split(X1);if(L.length<=1)continue;let q=$.createDocumentFragment();L.forEach((B,G)=>{if(G%2===1){let F=$.createElement("a");F.setAttribute("href","#"),F.className="hashtag",F.setAttribute("data-hashtag",B),F.textContent=`#${B}`,q.appendChild(F)}else q.appendChild($.createTextNode(B))}),z.parentNode?.replaceChild(q,z)}return $.body.innerHTML}function M5(_){if(!_)return _;let j=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),Z=[],N=!1;for(let z of j){if(!N&&z.trim().match(/^```(?:math|katex|latex)\s*$/i)){N=!0,Z.push("$$");continue}if(N&&z.trim().match(/^```\s*$/)){N=!1,Z.push("$$");continue}Z.push(z)}return Z.join(`
`)}function n0(_,$,j={}){if(!_)return"";let Z=M5(_),{text:N,blocks:z}=H5(Z),K=q1(N,2),L=V8(K).replace(/</g,"&lt;").replace(/>/g,"&gt;"),q=X8(L),B=window.marked?marked.parse(q,{headerIds:!1,mangle:!1}):q.replace(/\n/g,"<br>");return B=q8(B),B=L8(B),B=A5(B),B=P5(B),B=y5(B,z),B=W8(B,j),B}function L1(_){if(!_)return"";let $=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`),j=q1($,2),N=V8(j).replace(/</g,"&lt;").replace(/>/g,"&gt;"),z=X8(N),K=window.marked?marked.parse(z):z.replace(/\n/g,"<br>");return K=q8(K),K=L8(K),K=W8(K),K}function b5(_,$=6){return _.replace(/<polyline\b([^>]*)\bpoints="([^"]+)"([^>]*)\/?\s*>/g,(j,Z,N,z)=>{let K=N.trim().split(/\s+/).map((L)=>{let[q,B]=L.split(",").map(Number);return{x:q,y:B}});if(K.length<3)return`<polyline${Z}points="${N}"${z}/>`;let X=[`M ${K[0].x},${K[0].y}`];for(let L=1;L<K.length-1;L++){let q=K[L-1],B=K[L],G=K[L+1],F=B.x-q.x,b=B.y-q.y,g=G.x-B.x,u=G.y-B.y,f=Math.sqrt(F*F+b*b),w=Math.sqrt(g*g+u*u),H=Math.min($,f/2,w/2);if(H<0.5){X.push(`L ${B.x},${B.y}`);continue}let x=B.x-F/f*H,I=B.y-b/f*H,i=B.x+g/w*H,n=B.y+u/w*H,d=F*u-b*g>0?1:0;X.push(`L ${x},${I}`),X.push(`A ${H},${H} 0 0 ${d} ${i},${n}`)}return X.push(`L ${K[K.length-1].x},${K[K.length-1].y}`),`<path${Z}d="${X.join(" ")}"${z}/>`})}async function x$(_){if(!window.beautifulMermaid)return;let{renderMermaid:$,THEMES:j}=window.beautifulMermaid,N=Y8()==="dark"?j["tokyo-night"]:j["github-light"],z=_.querySelectorAll(".mermaid-container[data-mermaid]");for(let K of z)try{let X=K.dataset.mermaid,L=E5(X||""),q=q1(L,2),B=await $(q,{...N,transparent:!0});B=b5(B),K.innerHTML=B,K.removeAttribute("data-mermaid")}catch(X){console.error("Mermaid render error:",X);let L=document.createElement("pre");L.className="mermaid-error",L.textContent=`Diagram error: ${X.message}`,K.innerHTML="",K.appendChild(L),K.removeAttribute("data-mermaid")}}function B8(_){let $=String(_||"").trim();if(!$.startsWith("/btw"))return null;let j=$.slice(4).trim();if(!j)return{type:"help"};if(j==="clear"||j==="close")return{type:"clear"};return{type:"ask",question:j}}function Q8(_){return String(_||"").trim()||"web:default"}function O8(_){if(!_)return!1;let $=String(_.answer||"").trim();return _.status!=="running"&&Boolean($)}function U8(_){if(!_)return!1;return _.status!=="running"}function F8(_){let $=String(_?.question||"").trim(),j=String(_?.answer||"").trim();if(!$&&!j)return"";return["BTW side conversation",$?`Question: ${$}`:null,j?`Answer:
${j}`:null].filter(Boolean).join(`

`)}function H8({session:_,onClose:$,onInject:j,onRetry:Z}){let N=y(null),z=y(null),K=_?.thinking?L1(_.thinking):"",X=_?.answer?n0(_.answer,null,{sanitize:!1}):"";if(R(()=>{if(N.current&&K)x$(N.current).catch(()=>{})},[K]),R(()=>{if(z.current&&X)x$(z.current).catch(()=>{})},[X]),!_)return null;let L=_.status==="running",q=Boolean(String(_.answer||"").trim()),B=Boolean(String(_.thinking||"").trim()),G=O8(_),F=U8(_),b=!L&&q,g=L?"Thinking…":_.status==="error"?"Error":"Done";return U`
        <section class="btw-panel" aria-label="BTW side conversation">
            <div class="btw-panel-header">
                <div class="btw-panel-title-wrap">
                    <span class="btw-panel-title">Question</span>
                    <span class=${`btw-panel-status btw-panel-status-${_.status||"idle"}`}>${g}</span>
                </div>
                <button class="btw-panel-close" onClick=${()=>$?.()} title="Close BTW" aria-label="Close BTW">
                    <svg viewBox="0 0 16 16" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round">
                        <line x1="4" y1="4" x2="12" y2="12"/>
                        <line x1="12" y1="4" x2="4" y2="12"/>
                    </svg>
                </button>
            </div>

            ${_.question&&U`<div class="btw-block btw-question">${_.question}</div>`}
            ${_.error&&U`<div class="btw-block btw-error">${_.error}</div>`}
            ${B&&U`
                <details class="btw-block btw-thinking" open=${L?!0:void 0}>
                    <summary>Thinking</summary>
                    <div
                        class="btw-thinking-body post-content"
                        ref=${N}
                        dangerouslySetInnerHTML=${{__html:K}}
                    ></div>
                </details>
            `}
            ${G&&U`
                <div class="btw-block btw-answer">
                    <div class="btw-answer-label">Answer</div>
                    <div
                        class="btw-answer-body post-content"
                        ref=${z}
                        dangerouslySetInnerHTML=${{__html:X}}
                    ></div>
                </div>
            `}

            ${F&&U`
                <div class="btw-panel-footer">
                    <div class="btw-panel-footer-left">
                        ${_.question&&U`
                            <button class="btw-btn btw-btn-secondary" onClick=${()=>Z?.()}>
                                Retry
                            </button>
                        `}
                    </div>
                    <div class="btw-panel-footer-right">
                        <button class="btw-btn btw-btn-primary" onClick=${()=>j?.()} disabled=${!b}>
                            Inject into chat
                        </button>
                    </div>
                </div>
            `}
        </section>
    `}var J8="PiClaw";function U4(_,$,j=!1){let Z=_||"PiClaw",N=Z.charAt(0).toUpperCase(),z=["#FF6B6B","#4ECDC4","#45B7D1","#FFA07A","#98D8C8","#F7DC6F","#BB8FCE","#85C1E2","#F8B195","#6C5CE7","#00B894","#FDCB6E","#E17055","#74B9FF","#A29BFE","#FD79A8","#00CEC9","#FFEAA7","#DFE6E9","#FF7675","#55EFC4","#81ECEC","#FAB1A0","#74B9FF","#A29BFE","#FD79A8"],K=N.charCodeAt(0)%z.length,X=z[K],L=Z.trim().toLowerCase(),q=typeof $==="string"?$.trim():"",B=q?q:null,G=j||L==="PiClaw".toLowerCase()||L==="pi";return{letter:N,color:X,image:B||(G?"/static/icon-192.png":null)}}function D8(_,$){if(!_)return"PiClaw";let j=$[_]?.name||_;return j?j.charAt(0).toUpperCase()+j.slice(1):"PiClaw"}function E8(_,$){if(!_)return null;let j=$[_]||{};return j.avatar_url||j.avatarUrl||j.avatar||null}function y8(_){if(!_)return null;if(typeof document<"u"){let z=document.documentElement,K=z?.dataset?.colorTheme||"",X=z?.dataset?.tint||"",L=getComputedStyle(z).getPropertyValue("--accent-color")?.trim();if(L&&(X||K&&K!=="default"))return L}let $=["#4ECDC4","#FF6B6B","#45B7D1","#BB8FCE","#FDCB6E","#00B894","#74B9FF","#FD79A8","#81ECEC","#FFA07A"],j=String(_),Z=0;for(let z=0;z<j.length;z+=1)Z=(Z*31+j.charCodeAt(z))%2147483647;let N=Math.abs(Z)%$.length;return $[N]}function I5(_){if(!_||typeof _!=="object")return null;let $=_.started_at??_.startedAt;if(typeof $!=="string"||!$)return null;let j=Date.parse($);return Number.isFinite(j)?j:null}function m2(_){if(!_||typeof _!=="object")return!1;let $=_.intent_key??_.intentKey;return _.type==="intent"&&$==="compaction"}function k8(_){if(!_||typeof _!=="object")return"";let $=_.title;if(typeof $==="string"&&$.trim())return $.trim();let j=_.status;if(typeof j==="string"&&j.trim())return j.trim();return m2(_)?"Compacting context":"Working..."}function x5(_){let $=Math.max(0,Math.floor(_/1000)),j=$%60,Z=Math.floor($/60)%60,N=Math.floor($/3600);if(N>0)return`${N}:${String(Z).padStart(2,"0")}:${String(j).padStart(2,"0")}`;return`${Z}:${String(j).padStart(2,"0")}`}function w8(_,$=Date.now()){let j=I5(_);if(j===null)return null;return x5(Math.max(0,$-j))}function A8({status:_,draft:$,plan:j,thought:Z,pendingRequest:N,intent:z,turnId:K,steerQueued:X,onPanelToggle:L}){let G=(a)=>{if(!a)return{text:"",totalLines:0,fullText:""};if(typeof a==="string"){let u_=a,h_=u_?u_.replace(/\r\n/g,`
`).split(`
`).length:0;return{text:u_,totalLines:h_,fullText:u_}}let H_=a.text||"",K_=a.fullText||a.full_text||H_,A_=Number.isFinite(a.totalLines)?a.totalLines:K_?K_.replace(/\r\n/g,`
`).split(`
`).length:0;return{text:H_,totalLines:A_,fullText:K_}},F=160,b=(a)=>String(a||"").replace(/<\/?internal>/gi,""),g=(a)=>{if(!a)return 1;return Math.max(1,Math.ceil(a.length/160))},u=(a,H_,K_)=>{let A_=(a||"").replace(/\r\n/g,`
`).replace(/\r/g,`
`);if(!A_)return{text:"",omitted:0,totalLines:Number.isFinite(K_)?K_:0,visibleLines:0};let u_=A_.split(`
`),h_=u_.length>H_?u_.slice(0,H_).join(`
`):A_,t_=Number.isFinite(K_)?K_:u_.reduce((J_,o_)=>J_+g(o_),0),i_=h_?h_.split(`
`).reduce((J_,o_)=>J_+g(o_),0):0,E_=Math.max(t_-i_,0);return{text:h_,omitted:E_,totalLines:t_,visibleLines:i_}},f=G(j),w=G(Z),H=G($),x=Boolean(f.text)||f.totalLines>0,I=Boolean(w.text)||w.totalLines>0,i=Boolean(H.fullText?.trim()||H.text?.trim());if(!_&&!i&&!x&&!I&&!N&&!z)return null;let[n,e]=S(new Set),[d,N_]=S(()=>Date.now()),p=(a)=>e((H_)=>{let K_=new Set(H_),A_=!K_.has(a);if(A_)K_.add(a);else K_.delete(a);if(typeof L==="function")L(a,A_);return K_});R(()=>{e(new Set)},[K]);let q_=m2(_);R(()=>{if(!q_)return;N_(Date.now());let a=setInterval(()=>N_(Date.now()),1000);return()=>clearInterval(a)},[q_,_?.started_at,_?.startedAt]);let c_=_?.turn_id||K,__=y8(c_),t=X?"turn-dot turn-dot-queued":"turn-dot",Z_=(a)=>a,$_=Boolean(_?.last_activity||_?.lastActivity),Q_=(a)=>a==="warning"?"#f59e0b":a==="error"?"var(--danger-color)":a==="success"?"var(--success-color)":__,b_=z?.kind||"info",W_=Q_(b_),k_=Q_(_?.kind||(q_?"warning":"info")),O_="",F_=_?.title,v_=_?.status;if(_?.type==="plan")O_=F_?`Planning: ${F_}`:"Planning...";else if(_?.type==="tool_call")O_=F_?`Running: ${F_}`:"Running tool...";else if(_?.type==="tool_status")O_=F_?`${F_}: ${v_||"Working..."}`:v_||"Working...";else if(_?.type==="error")O_=F_||"Agent error";else O_=F_||v_||"Working...";if($_)O_="Last activity just now";let D_=({panelTitle:a,text:H_,fullText:K_,totalLines:A_,maxLines:u_,titleClass:h_,panelKey:t_})=>{let i_=n.has(t_),E_=K_||H_||"",J_=t_==="thought"||t_==="draft"?b(E_):E_,o_=typeof u_==="number",e_=i_&&o_,g_=o_?u(J_,u_,A_):{text:J_||"",omitted:0,totalLines:Number.isFinite(A_)?A_:0};if(!J_&&!(Number.isFinite(g_.totalLines)&&g_.totalLines>0))return null;let m_=`agent-thinking-body${o_?" agent-thinking-body-collapsible":""}`,V0=o_?`--agent-thinking-collapsed-lines: ${u_};`:"";return U`
            <div
                class="agent-thinking"
                data-expanded=${i_?"true":"false"}
                data-collapsible=${o_?"true":"false"}
                style=${__?`--turn-color: ${__};`:""}
            >
                <div class="agent-thinking-title ${h_||""}">
                    ${__&&U`<span class=${t} aria-hidden="true"></span>`}
                    ${a}
                    ${e_&&U`
                        <button
                            class="agent-thinking-close"
                            aria-label=${`Close ${a} panel`}
                            onClick=${()=>p(t_)}
                        >
                            ×
                        </button>
                    `}
                </div>
                <div
                    class=${m_}
                    style=${V0}
                    dangerouslySetInnerHTML=${{__html:L1(J_)}}
                />
                ${!i_&&g_.omitted>0&&U`
                    <button class="agent-thinking-truncation" onClick=${()=>p(t_)}>
                        ▸ ${g_.omitted} more lines
                    </button>
                `}
                ${i_&&g_.omitted>0&&U`
                    <button class="agent-thinking-truncation" onClick=${()=>p(t_)}>
                        ▴ show less
                    </button>
                `}
            </div>
        `},I_=N?.tool_call?.title,j0=I_?`Awaiting approval: ${I_}`:"Awaiting approval",F0=q_?w8(_,d):null,G_=(a,H_,K_=null)=>{let A_=k8(a);return U`
            <div
                class="agent-thinking agent-thinking-intent"
                aria-live="polite"
                style=${H_?`--turn-color: ${H_};`:""}
                title=${a?.detail||""}
            >
                <div class="agent-thinking-title intent">
                    ${H_&&U`<span class=${t} aria-hidden="true"></span>`}
                    <span class="agent-thinking-title-text">${A_}</span>
                    ${K_&&U`<span class="agent-status-elapsed">${K_}</span>`}
                </div>
                ${a.detail&&U`<div class="agent-thinking-body">${a.detail}</div>`}
            </div>
        `};return U`
        <div class="agent-status-panel">
            ${z&&G_(z,W_)}
            ${_?.type==="intent"&&G_(_,k_,F0)}
            ${N&&U`
                <div class="agent-status agent-status-request" aria-live="polite" style=${__?`--turn-color: ${__};`:""}>
                    <span class=${t} aria-hidden="true"></span>
                    <div class="agent-status-spinner"></div>
                    <span class="agent-status-text">${j0}</span>
                </div>
            `}
            ${x&&D_({panelTitle:Z_("Planning"),text:f.text,fullText:f.fullText,totalLines:f.totalLines,panelKey:"plan"})}
            ${I&&D_({panelTitle:Z_("Thoughts"),text:w.text,fullText:w.fullText,totalLines:w.totalLines,maxLines:8,titleClass:"thought",panelKey:"thought"})}
            ${i&&D_({panelTitle:Z_("Draft"),text:H.text,fullText:H.fullText,totalLines:H.totalLines,maxLines:8,titleClass:"thought",panelKey:"draft"})}
            ${_&&_?.type!=="intent"&&U`
                <div class=${`agent-status${$_?" agent-status-last-activity":""}${_?.type==="error"?" agent-status-error":""}`} aria-live="polite" style=${__?`--turn-color: ${__};`:""}>
                    ${__&&U`<span class=${t} aria-hidden="true"></span>`}
                    ${_?.type==="error"?U`<span class="agent-status-error-icon" aria-hidden="true">⚠</span>`:!$_&&U`<div class="agent-status-spinner"></div>`}
                    <span class="agent-status-text">${O_}</span>
                </div>
            `}
        </div>
    `}function P8({request:_,onRespond:$}){if(!_)return null;let{request_id:j,tool_call:Z,options:N,chat_jid:z}=_,K=Z?.title||"Agent Request",X=Z?.kind||"other",L=Z?.rawInput||{},q=L.command||L.commands&&L.commands[0]||null,B=L.diff||null,G=L.fileName||L.path||null,F=Z?.description||L.description||L.explanation||null,g=(Array.isArray(Z?.locations)?Z.locations:[]).map((x)=>x?.path).filter((x)=>Boolean(x)),u=Array.from(new Set([G,...g].filter(Boolean)));console.log("AgentRequestModal:",{request_id:j,tool_call:Z,options:N});let f=async(x)=>{try{await N1(j,x,z||null),$()}catch(I){console.error("Failed to respond to agent request:",I)}},w=async()=>{try{await a1(K,`Auto-approved: ${K}`),await N1(j,"approved",z||null),$()}catch(x){console.error("Failed to add to whitelist:",x)}},H=N&&N.length>0;return U`
        <div class="agent-request-modal">
            <div class="agent-request-content">
                <div class="agent-request-header">
                    <div class="agent-request-icon">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                        </svg>
                    </div>
                    <div class="agent-request-title">${K}</div>
                </div>
                ${(F||q||B||u.length>0)&&U`
                    <div class="agent-request-body">
                        ${F&&U`
                            <div class="agent-request-description">${F}</div>
                        `}
                        ${u.length>0&&U`
                            <div class="agent-request-files">
                                <div class="agent-request-subtitle">Files</div>
                                <ul>
                                    ${u.map((x,I)=>U`<li key=${I}>${x}</li>`)}
                                </ul>
                            </div>
                        `}
                        ${q&&U`
                            <pre class="agent-request-command">${q}</pre>
                        `}
                        ${B&&U`
                            <details class="agent-request-diff">
                                <summary>Proposed diff</summary>
                                <pre>${B}</pre>
                            </details>
                        `}
                    </div>
                `}
                <div class="agent-request-actions">
                    ${H?N.map((x)=>U`
                            <button 
                                key=${x.optionId||x.id||String(x)}
                                class="agent-request-btn ${x.kind==="allow_once"||x.kind==="allow_always"?"primary":""}"
                                onClick=${()=>f(x.optionId||x.id||x)}
                            >
                                ${x.name||x.label||x.optionId||x.id||String(x)}
                            </button>
                        `):U`
                        <button class="agent-request-btn primary" onClick=${()=>f("approved")}>
                            Allow
                        </button>
                        <button class="agent-request-btn" onClick=${()=>f("denied")}>
                            Deny
                        </button>
                        <button class="agent-request-btn always-allow" onClick=${w}>
                            Always Allow This
                        </button>
                    `}
                </div>
            </div>
        </div>
    `}function M8(_){let $=new Date(_);if(Number.isNaN($.getTime()))return _;let Z=new Date-$,N=Z/1000,z=86400000;if(Z<z){if(N<60)return"just now";if(N<3600)return`${Math.floor(N/60)}m`;return`${Math.floor(N/3600)}h`}if(Z<5*z){let L=$.toLocaleDateString(void 0,{weekday:"short"}),q=$.toLocaleTimeString(void 0,{hour:"2-digit",minute:"2-digit"});return`${L} ${q}`}let K=$.toLocaleDateString(void 0,{month:"short",day:"numeric"}),X=$.toLocaleTimeString(void 0,{hour:"2-digit",minute:"2-digit"});return`${K} ${X}`}function g2(_){if(!Number.isFinite(_))return"0";return Math.round(_).toLocaleString()}function z$(_){if(_<1024)return _+" B";if(_<1048576)return(_/1024).toFixed(1)+" KB";return(_/1048576).toFixed(1)+" MB"}function G2(_){let $=new Date(_);if(Number.isNaN($.getTime()))return _;return $.toLocaleString()}var C5=new Set(["application/json","application/xml","text/csv","text/html","text/markdown","text/plain","text/xml"]),T5=new Set(["text/markdown"]),S5=new Set(["application/msword","application/rtf","application/vnd.ms-excel","application/vnd.ms-powerpoint","application/vnd.oasis.opendocument.presentation","application/vnd.oasis.opendocument.spreadsheet","application/vnd.oasis.opendocument.text","application/vnd.openxmlformats-officedocument.presentationml.presentation","application/vnd.openxmlformats-officedocument.spreadsheetml.sheet","application/vnd.openxmlformats-officedocument.wordprocessingml.document"]),f5=new Set(["application/vnd.jgraph.mxfile"]);function p2(_){return typeof _==="string"?_.trim().toLowerCase():""}function R5(_){let $=p2(_);return!!$&&($.endsWith(".drawio")||$.endsWith(".drawio.xml")||$.endsWith(".drawio.svg")||$.endsWith(".drawio.png"))}function v5(_){let $=p2(_);return!!$&&$.endsWith(".pdf")}function u5(_){let $=p2(_);return!!$&&($.endsWith(".docx")||$.endsWith(".doc")||$.endsWith(".odt")||$.endsWith(".rtf")||$.endsWith(".xlsx")||$.endsWith(".xls")||$.endsWith(".ods")||$.endsWith(".pptx")||$.endsWith(".ppt")||$.endsWith(".odp"))}function c2(_,$){let j=p2(_);if(R5($)||f5.has(j))return"drawio";if(v5($)||j==="application/pdf")return"pdf";if(u5($)||S5.has(j))return"office";if(!j)return"unsupported";if(j.startsWith("image/"))return"image";if(C5.has(j)||j.startsWith("text/"))return"text";return"unsupported"}function b8(_){let $=p2(_);return T5.has($)}function I8(_){switch(_){case"image":return"Image preview";case"pdf":return"PDF preview";case"office":return"Office viewer";case"drawio":return"Draw.io preview (read-only)";case"text":return"Text preview";default:return"Preview unavailable"}}function m5(_){let j=String(_||"").trim().match(/^#([0-9a-f]{3}|[0-9a-f]{6})$/i);if(!j)return null;let Z=j[1].length===3?j[1].split("").map((N)=>`${N}${N}`).join(""):j[1];return{r:parseInt(Z.slice(0,2),16),g:parseInt(Z.slice(2,4),16),b:parseInt(Z.slice(4,6),16)}}function g5(_){let j=String(_||"").trim().match(/^rgba?\((\d+)[,\s]+(\d+)[,\s]+(\d+)/i);if(!j)return null;let Z=Number(j[1]),N=Number(j[2]),z=Number(j[3]);if(![Z,N,z].every((K)=>Number.isFinite(K)))return null;return{r:Z,g:N,b:z}}function x8(_){return m5(_)||g5(_)}function B1(_){let $=(z)=>{let K=z/255;return K<=0.03928?K/12.92:((K+0.055)/1.055)**2.4},j=$(_.r),Z=$(_.g),N=$(_.b);return 0.2126*j+0.7152*Z+0.0722*N}function p5(_,$){let j=Math.max(B1(_),B1($)),Z=Math.min(B1(_),B1($));return(j+0.05)/(Z+0.05)}function c5(_,$,j="#ffffff"){let Z=x8(_);if(!Z)return j;let N=j,z=-1;for(let K of $){let X=x8(K);if(!X)continue;let L=p5(Z,X);if(L>z)N=K,z=L}return N}function F4(){let _=getComputedStyle(document.documentElement),$=(g,u)=>{for(let f of g){let w=_.getPropertyValue(f).trim();if(w)return w}return u},j=$(["--text-primary","--color-text"],"#0f1419"),Z=$(["--text-secondary","--color-text-muted"],"#536471"),N=$(["--bg-primary","--color-bg-primary"],"#ffffff"),z=$(["--bg-secondary","--color-bg-secondary"],"#f7f9fa"),K=$(["--bg-hover","--bg-tertiary","--color-bg-tertiary"],"#e8ebed"),X=$(["--accent-color","--color-accent"],"#1d9bf0"),L=$(["--success-color","--color-success"],"#00ba7c"),q=$(["--warning-color","--color-warning","--accent-color"],"#f0b429"),B=$(["--danger-color","--color-error"],"#f4212e"),G=$(["--border-color","--color-border"],"#eff3f4"),F=$(["--font-family"],"system-ui, sans-serif"),b=c5(X,[j,N],j);return{fg:j,fgMuted:Z,bgPrimary:N,bg:z,bgEmphasis:K,accent:X,good:L,warning:q,attention:B,border:G,fontFamily:F,buttonTextColor:b}}function C8(){let{fg:_,fgMuted:$,bg:j,bgEmphasis:Z,accent:N,good:z,warning:K,attention:X,border:L,fontFamily:q}=F4();return{fontFamily:q,containerStyles:{default:{backgroundColor:j,foregroundColors:{default:{default:_,subtle:$},accent:{default:N,subtle:N},good:{default:z,subtle:z},warning:{default:K,subtle:K},attention:{default:X,subtle:X}}},emphasis:{backgroundColor:Z,foregroundColors:{default:{default:_,subtle:$},accent:{default:N,subtle:N},good:{default:z,subtle:z},warning:{default:K,subtle:K},attention:{default:X,subtle:X}}}},actions:{actionsOrientation:"horizontal",actionAlignment:"left",buttonSpacing:8,maxActions:5,showCard:{actionMode:"inline"},spacing:"default"},adaptiveCard:{allowCustomStyle:!1},spacing:{small:4,default:8,medium:12,large:16,extraLarge:24,padding:12},separator:{lineThickness:1,lineColor:L},fontSizes:{small:12,default:14,medium:16,large:18,extraLarge:22},fontWeights:{lighter:300,default:400,bolder:600},imageSizes:{small:40,medium:80,large:120},textBlock:{headingLevel:2}}}var h5=new Set(["1.0","1.1","1.2","1.3","1.4","1.5","1.6"]),T8=!1,Q1=null,S8=!1;function H4(_){_.querySelector(".adaptive-card-notice")?.remove()}function i5(_,$,j="error"){H4(_);let Z=document.createElement("div");Z.className=`adaptive-card-notice adaptive-card-notice-${j}`,Z.textContent=$,_.appendChild(Z)}function l5(_,$=(j)=>n0(j,null)){let j=typeof _==="string"?_:String(_??"");if(!j.trim())return{outputHtml:"",didProcess:!1};return{outputHtml:$(j),didProcess:!0}}function n5(_=($)=>n0($,null)){return($,j)=>{try{let Z=l5($,_);j.outputHtml=Z.outputHtml,j.didProcess=Z.didProcess}catch(Z){console.error("[adaptive-card] Failed to process markdown:",Z),j.outputHtml=String($??""),j.didProcess=!1}}}function d5(_){if(S8||!_?.AdaptiveCard)return;_.AdaptiveCard.onProcessMarkdown=n5(),S8=!0}async function o5(){if(T8)return;if(Q1)return Q1;return Q1=new Promise((_,$)=>{let j=document.createElement("script");j.src="/static/js/vendor/adaptivecards.min.js",j.onload=()=>{T8=!0,_()},j.onerror=()=>$(Error("Failed to load adaptivecards SDK")),document.head.appendChild(j)}),Q1}function s5(){return globalThis.AdaptiveCards}function r5(_){if(!_||typeof _!=="object")return!1;let $=_;return $.type==="adaptive_card"&&typeof $.card_id==="string"&&typeof $.schema_version==="string"&&typeof $.payload==="object"&&$.payload!==null}function a5(_){return h5.has(_)}function D4(_){if(!Array.isArray(_))return[];return _.filter(r5)}function t5(_){let $=typeof _?.toJSON==="function"?_.toJSON():null,j=(typeof _?.getJsonTypeName==="function"?_.getJsonTypeName():"")||_?.constructor?.name||$?.type||"Unknown",Z=(typeof _?.title==="string"?_.title:"")||(typeof $?.title==="string"?$.title:"")||"",N=(typeof _?.url==="string"?_.url:"")||(typeof $?.url==="string"?$.url:"")||void 0,z=_?.data??$?.data;return{type:j,title:Z,data:z,url:N,raw:_}}function J4(_){if(_==null)return"";if(typeof _==="string")return _.trim();if(typeof _==="number")return String(_);if(typeof _==="boolean")return _?"yes":"no";if(Array.isArray(_))return _.map(($)=>J4($)).filter(Boolean).join(", ");if(typeof _==="object")return Object.entries(_).map(([j,Z])=>`${j}: ${J4(Z)}`).filter((j)=>!j.endsWith(": ")).join(", ");return String(_).trim()}function e5(_,$,j){if($==null)return $;if(_==="Input.Toggle"){if(typeof $==="boolean"){if($)return j?.valueOn??"true";return j?.valueOff??"false"}return typeof $==="string"?$:String($)}if(_==="Input.ChoiceSet"){if(Array.isArray($))return $.join(",");return typeof $==="string"?$:String($)}if(Array.isArray($))return $.join(", ");if(typeof $==="object")return J4($);return typeof $==="string"?$:String($)}function _7(_,$){if(!_||typeof _!=="object")return _;if(!$||typeof $!=="object"||Array.isArray($))return _;let j=$,Z=(N)=>{if(Array.isArray(N))return N.map((X)=>Z(X));if(!N||typeof N!=="object")return N;let K={...N};if(typeof K.id==="string"&&K.id in j&&String(K.type||"").startsWith("Input."))K.value=e5(K.type,j[K.id],K);for(let[X,L]of Object.entries(K))if(Array.isArray(L)||L&&typeof L==="object")K[X]=Z(L);return K};return Z(_)}function $7(_){_.classList.add("adaptive-card-readonly");for(let $ of Array.from(_.querySelectorAll("input, textarea, select, button"))){let j=$;try{j.setAttribute("aria-disabled","true")}catch{}try{j.setAttribute("tabindex","-1")}catch{}if("disabled"in j)try{j.disabled=!0}catch{}if("readOnly"in j)try{j.readOnly=!0}catch{}}}function j7(_){if(typeof _!=="string"||!_.trim())return"";let $=new Date(_);if(Number.isNaN($.getTime()))return"";return new Intl.DateTimeFormat(void 0,{month:"short",day:"numeric",hour:"numeric",minute:"2-digit"}).format($)}function Z7(_){if(_.state==="active")return null;let $=_.state==="completed"?"Submitted":_.state==="cancelled"?"Cancelled":"Failed",j=_.last_submission&&typeof _.last_submission==="object"?_.last_submission:null,Z=j&&typeof j.title==="string"?j.title.trim():"",N=j7(_.completed_at||j?.submitted_at),z=[Z||null,N||null].filter(Boolean).join(" · ")||null;return{label:$,detail:z}}async function f8(_,$,j){if(!a5($.schema_version))return console.warn(`[adaptive-card] Unsupported schema version ${$.schema_version} for card ${$.card_id}`),!1;try{await o5()}catch(Z){return console.error("[adaptive-card] Failed to load SDK:",Z),!1}try{let Z=s5();d5(Z);let N=new Z.AdaptiveCard,z=F4();N.hostConfig=new Z.HostConfig(C8());let K=$.last_submission&&typeof $.last_submission==="object"?$.last_submission.data:void 0,X=$.state==="active"?$.payload:_7($.payload,K);N.parse(X),N.onExecuteAction=(B)=>{let G=t5(B);if(j?.onAction)H4(_),_.classList.add("adaptive-card-busy"),Promise.resolve(j.onAction(G)).catch((F)=>{console.error("[adaptive-card] Action failed:",F);let b=F instanceof Error?F.message:String(F||"Action failed.");i5(_,b||"Action failed.","error")}).finally(()=>{_.classList.remove("adaptive-card-busy")});else console.log("[adaptive-card] Action executed (not wired yet):",G)};let L=N.render();if(!L)return console.warn(`[adaptive-card] Card ${$.card_id} rendered to null`),!1;_.classList.add("adaptive-card-container"),_.style.setProperty("--adaptive-card-button-text-color",z.buttonTextColor);let q=Z7($);if(q){_.classList.add("adaptive-card-finished");let B=document.createElement("div");B.className=`adaptive-card-status adaptive-card-status-${$.state}`;let G=document.createElement("span");if(G.className="adaptive-card-status-label",G.textContent=q.label,B.appendChild(G),q.detail){let F=document.createElement("span");F.className="adaptive-card-status-detail",F.textContent=q.detail,B.appendChild(F)}_.appendChild(B)}if(H4(_),_.appendChild(L),q)$7(L);return!0}catch(Z){return console.error(`[adaptive-card] Failed to render card ${$.card_id}:`,Z),!1}}function h2(_){if(_==null)return"";if(typeof _==="string")return _.trim();if(typeof _==="number")return String(_);if(typeof _==="boolean")return _?"yes":"no";if(Array.isArray(_))return _.map(($)=>h2($)).filter(Boolean).join(", ");if(typeof _==="object")return Object.entries(_).filter(([$])=>!$.startsWith("__")).map(([$,j])=>`${$}: ${h2(j)}`).filter(($)=>!$.endsWith(": ")).join(", ");return String(_).trim()}function R8(_){if(typeof _!=="object"||_==null||Array.isArray(_))return[];return Object.entries(_).filter(([$])=>!$.startsWith("__")).map(([$,j])=>({key:$,value:h2(j)})).filter(($)=>$.value)}function N7(_){if(!_||typeof _!=="object")return!1;let $=_;return $.type==="adaptive_card_submission"&&typeof $.card_id==="string"&&typeof $.source_post_id==="number"&&typeof $.submitted_at==="string"}function E4(_){if(!Array.isArray(_))return[];return _.filter(N7)}function v8(_){let $=String(_.title||_.card_id||"card").trim()||"card",j=_.data;if(j==null)return`Card submission: ${$}`;if(typeof j==="string"||typeof j==="number"||typeof j==="boolean"){let Z=h2(j);return Z?`Card submission: ${$} — ${Z}`:`Card submission: ${$}`}if(typeof j==="object"){let N=R8(j).slice(0,4).map(({key:z,value:K})=>`${z}: ${K}`);return N.length>0?`Card submission: ${$} — ${N.join(", ")}`:`Card submission: ${$}`}return`Card submission: ${$}`}function u8(_){let $=String(_.title||_.card_id||"Card submission").trim()||"Card submission",j=R8(_.data),Z=j.length>0?j.slice(0,2).map(({key:L,value:q})=>`${L}: ${q}`).join(", "):h2(_.data)||null,N=j.length,z=j.slice(0,4),K=j.slice(4),X=K.length;return{title:$,summary:Z,fields:z,hiddenFields:K,fieldCount:N,hiddenFieldCount:X,submittedAt:_.submitted_at}}function z7(_){let $=_?.metadata?.size;return[{label:"Type",value:_?.content_type||"application/octet-stream"},{label:"Size",value:typeof $==="number"?z$($):null},{label:"Added",value:_?.created_at?G2(_.created_at):null}].filter((Z)=>Z.value)}function K7(_,$,j){let Z=encodeURIComponent($||`attachment-${_}`),N=encodeURIComponent(String(_));if(j==="pdf")return`/pdf-viewer/?media=${N}&name=${Z}#media=${N}&name=${Z}`;if(j==="office"){let z=Z$(_);return`/office-viewer/?url=${encodeURIComponent(z)}&name=${Z}`}if(j==="drawio")return`/drawio/edit.html?media=${N}&name=${Z}&readonly=1#media=${N}&name=${Z}&readonly=1`;return null}function m8({mediaId:_,info:$,onClose:j}){let Z=$?.filename||`attachment-${_}`,N=n_(()=>c2($?.content_type,Z),[$?.content_type,Z]),z=I8(N),K=n_(()=>b8($?.content_type),[$?.content_type]),[X,L]=S(N==="text"),[q,B]=S(""),[G,F]=S(null),b=y(null),g=n_(()=>z7($),[$]),u=n_(()=>K7(_,Z,N),[_,Z,N]),f=n_(()=>{if(!K||!q)return"";return n0(q)},[K,q]);return R(()=>{let w=(H)=>{if(H.key==="Escape")j()};return document.addEventListener("keydown",w),()=>document.removeEventListener("keydown",w)},[j]),R(()=>{if(!b.current||!f)return;x$(b.current);return},[f]),R(()=>{let w=!1;async function H(){if(N!=="text"){L(!1),F(null);return}L(!0),F(null);try{let x=await $4(_);if(!w)B(x)}catch{if(!w)F("Failed to load text preview.")}finally{if(!w)L(!1)}}return H(),()=>{w=!0}},[_,N]),U`
        <div class="image-modal attachment-preview-modal" onClick=${j}>
            <div class="attachment-preview-shell" onClick=${(w)=>{w.stopPropagation()}}>
                <div class="attachment-preview-header">
                    <div class="attachment-preview-heading">
                        <div class="attachment-preview-title">${Z}</div>
                        <div class="attachment-preview-subtitle">${z}</div>
                    </div>
                    <div class="attachment-preview-header-actions">
                        ${u&&U`
                            <a
                                href=${u}
                                target="_blank"
                                rel="noopener noreferrer"
                                class="attachment-preview-download"
                                onClick=${(w)=>w.stopPropagation()}
                            >
                                Open in Tab
                            </a>
                        `}
                        <a
                            href=${Z$(_)}
                            download=${Z}
                            class="attachment-preview-download"
                            onClick=${(w)=>w.stopPropagation()}
                        >
                            Download
                        </a>
                        <button class="attachment-preview-close" type="button" onClick=${j}>Close</button>
                    </div>
                </div>
                <div class="attachment-preview-body">
                    ${X&&U`<div class="attachment-preview-state">Loading preview…</div>`}
                    ${!X&&G&&U`<div class="attachment-preview-state">${G}</div>`}
                    ${!X&&!G&&N==="image"&&U`
                        <img class="attachment-preview-image" src=${Z$(_)} alt=${Z} />
                    `}
                    ${!X&&!G&&(N==="pdf"||N==="office"||N==="drawio")&&u&&U`
                        <iframe class="attachment-preview-frame" src=${u} title=${Z}></iframe>
                    `}
                    ${!X&&!G&&N==="drawio"&&U`
                        <div class="attachment-preview-readonly-note">Draw.io preview is read-only. Editing tools are disabled in this preview.</div>
                    `}
                    ${!X&&!G&&N==="text"&&K&&U`
                        <div
                            ref=${b}
                            class="attachment-preview-markdown post-content"
                            dangerouslySetInnerHTML=${{__html:f}}
                        />
                    `}
                    ${!X&&!G&&N==="text"&&!K&&U`
                        <pre class="attachment-preview-text">${q}</pre>
                    `}
                    ${!X&&!G&&N==="unsupported"&&U`
                        <div class="attachment-preview-state">
                            Preview is not available for this file type yet. You can still download it directly.
                        </div>
                    `}
                </div>
                <div class="attachment-preview-meta">
                    ${g.map((w)=>U`
                        <div class="attachment-preview-meta-item" key=${w.label}>
                            <span class="attachment-preview-meta-label">${w.label}</span>
                            <span class="attachment-preview-meta-value">${w.value}</span>
                        </div>
                    `)}
                </div>
            </div>
        </div>
    `}function g8({src:_,onClose:$}){return R(()=>{let j=(Z)=>{if(Z.key==="Escape")$()};return document.addEventListener("keydown",j),()=>document.removeEventListener("keydown",j)},[$]),U`
        <div class="image-modal" onClick=${$}>
            <img src=${_} alt="Full size" />
        </div>
    `}function Y7({mediaId:_,onPreview:$}){let[j,Z]=S(null);if(R(()=>{D2(_).then(Z).catch(()=>{})},[_]),!j)return null;let N=j.filename||"file",z=j.metadata?.size,K=z?z$(z):"",L=c2(j.content_type,j.filename)==="unsupported"?"Details":"Preview";return U`
        <div class="file-attachment" onClick=${(q)=>q.stopPropagation()}>
            <a href=${Z$(_)} download=${N} class="file-attachment-main">
                <svg class="file-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                    <polyline points="14 2 14 8 20 8"/>
                    <line x1="16" y1="13" x2="8" y2="13"/>
                    <line x1="16" y1="17" x2="8" y2="17"/>
                    <polyline points="10 9 9 9 8 9"/>
                </svg>
                <div class="file-info">
                    <span class="file-name">${N}</span>
                    <span class="file-meta-row">
                        ${K&&U`<span class="file-size">${K}</span>`}
                        ${j.content_type&&U`<span class="file-size">${j.content_type}</span>`}
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
                onClick=${(q)=>{q.preventDefault(),q.stopPropagation(),$?.({mediaId:_,info:j})}}
            >
                ${L}
            </button>
        </div>
    `}function W7({attachment:_,onPreview:$}){let j=Number(_?.id),[Z,N]=S(null);R(()=>{if(!Number.isFinite(j))return;D2(j).then(N).catch(()=>{});return},[j]);let z=Z?.filename||_.label||`attachment-${_.id}`,K=Number.isFinite(j)?Z$(j):null,L=c2(Z?.content_type,Z?.filename||_?.label)==="unsupported"?"Details":"Preview";return U`
        <span class="attachment-pill" title=${z}>
            ${K?U`
                    <a href=${K} download=${z} class="attachment-pill-main" onClick=${(q)=>q.stopPropagation()}>
                        <${X$}
                            prefix="post"
                            label=${_.label}
                            title=${z}
                        />
                    </a>
                `:U`
                    <${X$}
                        prefix="post"
                        label=${_.label}
                        title=${z}
                    />
                `}
            ${Number.isFinite(j)&&Z&&U`
                <button
                    class="attachment-pill-preview"
                    type="button"
                    title=${L}
                    onClick=${(q)=>{q.preventDefault(),q.stopPropagation(),$?.({mediaId:j,info:Z})}}
                >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8S1 12 1 12z"/>
                        <circle cx="12" cy="12" r="3"/>
                    </svg>
                </button>
            `}
        </span>
    `}function O1({annotations:_}){if(!_)return null;let{audience:$,priority:j,lastModified:Z}=_,N=Z?G2(Z):null;return U`
        <div class="content-annotations">
            ${$&&$.length>0&&U`
                <span class="content-annotation">Audience: ${$.join(", ")}</span>
            `}
            ${typeof j==="number"&&U`
                <span class="content-annotation">Priority: ${j}</span>
            `}
            ${N&&U`
                <span class="content-annotation">Updated: ${N}</span>
            `}
        </div>
    `}function G7({block:_}){let $=_.title||_.name||_.uri,j=_.description,Z=_.size?z$(_.size):"",N=_.mime_type||"",z=X7(N),K=W2(_.uri);return U`
        <a
            href=${K||"#"}
            class="resource-link"
            target=${K?"_blank":void 0}
            rel=${K?"noopener noreferrer":void 0}
            onClick=${(X)=>X.stopPropagation()}>
            <div class="resource-link-main">
                <div class="resource-link-header">
                    <span class="resource-link-icon-inline">${z}</span>
                    <div class="resource-link-title">${$}</div>
                </div>
                ${j&&U`<div class="resource-link-description">${j}</div>`}
                <div class="resource-link-meta">
                    ${N&&U`<span>${N}</span>`}
                    ${Z&&U`<span>${Z}</span>`}
                </div>
            </div>
            <div class="resource-link-icon">↗</div>
        </a>
    `}function V7({block:_}){let[$,j]=S(!1),Z=_.uri||"Embedded resource",N=_.text||"",z=Boolean(_.data),K=_.mime_type||"";return U`
        <div class="resource-embed">
            <button class="resource-embed-toggle" onClick=${(X)=>{X.preventDefault(),X.stopPropagation(),j(!$)}}>
                ${$?"▼":"▶"} ${Z}
            </button>
            ${$&&U`
                ${N&&U`<pre class="resource-embed-content">${N}</pre>`}
                ${z&&U`
                    <div class="resource-embed-blob">
                        <span class="resource-embed-blob-label">Embedded blob</span>
                        ${K&&U`<span class="resource-embed-blob-meta">${K}</span>`}
                        <button class="resource-embed-blob-btn" onClick=${(X)=>{X.preventDefault(),X.stopPropagation();let L=new Blob([Uint8Array.from(atob(_.data),(G)=>G.charCodeAt(0))],{type:K||"application/octet-stream"}),q=URL.createObjectURL(L),B=document.createElement("a");B.href=q,B.download=Z.split("/").pop()||"resource",B.click(),URL.revokeObjectURL(q)}}>Download</button>
                    </div>
                `}
            `}
        </div>
    `}function X7(_){if(!_)return"\uD83D\uDCCE";if(_.startsWith("image/"))return"\uD83D\uDDBC️";if(_.startsWith("audio/"))return"\uD83C\uDFB5";if(_.startsWith("video/"))return"\uD83C\uDFAC";if(_.includes("pdf"))return"\uD83D\uDCC4";if(_.includes("zip")||_.includes("gzip"))return"\uD83D\uDDDC️";if(_.startsWith("text/"))return"\uD83D\uDCC4";return"\uD83D\uDCCE"}function q7({preview:_}){let $=W2(_.url),j=W2(_.image,{allowDataImage:!0}),Z=j?`background-image: url('${j}')`:"",N=_.site_name;if(!N&&$)try{N=new URL($).hostname}catch{N=$}return U`
        <a
            href=${$||"#"}
            class="link-preview ${j?"has-image":""}"
            target=${$?"_blank":void 0}
            rel=${$?"noopener noreferrer":void 0}
            onClick=${(z)=>z.stopPropagation()}
            style=${Z}>
            <div class="link-preview-overlay">
                <div class="link-preview-site">${N||""}</div>
                <div class="link-preview-title">${_.title}</div>
                ${_.description&&U`
                    <div class="link-preview-description">${_.description}</div>
                `}
            </div>
        </a>
    `}function L7(_,$){return typeof _==="string"?_:""}var B7=1800,Q7=`
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <rect x="9" y="9" width="10" height="10" rx="2"></rect>
        <path d="M7 15H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2v1"></path>
    </svg>`,O7=`
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <path d="M20 6L9 17l-5-5"></path>
    </svg>`,U7=`
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <circle cx="12" cy="12" r="9"></circle>
        <path d="M9 9l6 6M15 9l-6 6"></path>
    </svg>`;async function F7(_){let $=typeof _==="string"?_:"";if(!$)return!1;if(navigator.clipboard?.writeText)try{return await navigator.clipboard.writeText($),!0}catch{}try{let j=document.createElement("textarea");j.value=$,j.setAttribute("readonly",""),j.style.position="fixed",j.style.opacity="0",j.style.pointerEvents="none",document.body.appendChild(j),j.select(),j.setSelectionRange(0,j.value.length);let Z=document.execCommand("copy");return document.body.removeChild(j),Z}catch{return!1}}function H7(_){if(!_)return()=>{};let $=Array.from(_.querySelectorAll("pre")).filter((z)=>z.querySelector("code"));if($.length===0)return()=>{};let j=new Map,Z=[],N=(z,K)=>{let X=K||"idle";if(z.dataset.copyState=X,X==="success")z.innerHTML=O7,z.setAttribute("aria-label","Copied"),z.setAttribute("title","Copied"),z.classList.add("is-success"),z.classList.remove("is-error");else if(X==="error")z.innerHTML=U7,z.setAttribute("aria-label","Copy failed"),z.setAttribute("title","Copy failed"),z.classList.add("is-error"),z.classList.remove("is-success");else z.innerHTML=Q7,z.setAttribute("aria-label","Copy code"),z.setAttribute("title","Copy code"),z.classList.remove("is-success","is-error")};return $.forEach((z)=>{let K=document.createElement("div");K.className="post-code-block",z.parentNode?.insertBefore(K,z),K.appendChild(z);let X=document.createElement("button");X.type="button",X.className="post-code-copy-btn",N(X,"idle"),K.appendChild(X);let L=async(q)=>{q.preventDefault(),q.stopPropagation();let G=z.querySelector("code")?.textContent||"",F=await F7(G);N(X,F?"success":"error");let b=j.get(X);if(b)clearTimeout(b);let g=setTimeout(()=>{N(X,"idle"),j.delete(X)},B7);j.set(X,g)};X.addEventListener("click",L),Z.push(()=>{X.removeEventListener("click",L);let q=j.get(X);if(q)clearTimeout(q);if(K.parentNode)K.parentNode.insertBefore(z,K),K.remove()})}),()=>{Z.forEach((z)=>z())}}function J7(_){if(!_)return{content:_,fileRefs:[]};let j=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),Z=-1;for(let q=0;q<j.length;q+=1)if(j[q].trim()==="Files:"&&j[q+1]&&/^\s*-\s+/.test(j[q+1])){Z=q;break}if(Z===-1)return{content:_,fileRefs:[]};let N=[],z=Z+1;for(;z<j.length;z+=1){let q=j[z];if(/^\s*-\s+/.test(q))N.push(q.replace(/^\s*-\s+/,"").trim());else if(!q.trim())break;else break}if(N.length===0)return{content:_,fileRefs:[]};let K=j.slice(0,Z),X=j.slice(z),L=[...K,...X].join(`
`);return L=L.replace(/\n{3,}/g,`

`).trim(),{content:L,fileRefs:N}}function D7(_){if(!_)return{content:_,messageRefs:[]};let j=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),Z=-1;for(let q=0;q<j.length;q+=1)if(j[q].trim()==="Referenced messages:"&&j[q+1]&&/^\s*-\s+/.test(j[q+1])){Z=q;break}if(Z===-1)return{content:_,messageRefs:[]};let N=[],z=Z+1;for(;z<j.length;z+=1){let q=j[z];if(/^\s*-\s+/.test(q)){let G=q.replace(/^\s*-\s+/,"").trim().match(/^message:(\S+)$/i);if(G)N.push(G[1])}else if(!q.trim())break;else break}if(N.length===0)return{content:_,messageRefs:[]};let K=j.slice(0,Z),X=j.slice(z),L=[...K,...X].join(`
`);return L=L.replace(/\n{3,}/g,`

`).trim(),{content:L,messageRefs:N}}function E7(_){if(!_)return{content:_,attachments:[]};let j=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),Z=-1;for(let q=0;q<j.length;q+=1){let B=j[q].trim();if((B==="Images:"||B==="Attachments:")&&j[q+1]&&/^\s*-\s+/.test(j[q+1])){Z=q;break}}if(Z===-1)return{content:_,attachments:[]};let N=[],z=Z+1;for(;z<j.length;z+=1){let q=j[z];if(/^\s*-\s+/.test(q)){let B=q.replace(/^\s*-\s+/,"").trim(),G=B.match(/^attachment:([^\s)]+)\s*(?:\((.+)\))?$/i)||B.match(/^attachment:([^\s]+)\s+(.+)$/i);if(G){let F=G[1],b=(G[2]||"").trim()||F;N.push({id:F,label:b,raw:B})}else N.push({id:null,label:B,raw:B})}else if(!q.trim())break;else break}if(N.length===0)return{content:_,attachments:[]};let K=j.slice(0,Z),X=j.slice(z),L=[...K,...X].join(`
`);return L=L.replace(/\n{3,}/g,`

`).trim(),{content:L,attachments:N}}function y7(_){return _.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function k7(_,$){if(!_||!$)return _;let j=String($).trim().split(/\s+/).filter(Boolean);if(j.length===0)return _;let Z=j.map(y7).sort((B,G)=>G.length-B.length),N=new RegExp(`(${Z.join("|")})`,"gi"),z=new RegExp(`^(${Z.join("|")})$`,"i"),K=new DOMParser().parseFromString(_,"text/html"),X=K.createTreeWalker(K.body,NodeFilter.SHOW_TEXT),L=[],q;while(q=X.nextNode())L.push(q);for(let B of L){let G=B.nodeValue;if(!G||!N.test(G)){N.lastIndex=0;continue}N.lastIndex=0;let F=B.parentElement;if(F&&F.closest("code, pre, script, style"))continue;let b=G.split(N).filter((u)=>u!=="");if(b.length===0)continue;let g=K.createDocumentFragment();for(let u of b)if(z.test(u)){let f=K.createElement("mark");f.className="search-highlight-term",f.textContent=u,g.appendChild(f)}else g.appendChild(K.createTextNode(u));B.parentNode.replaceChild(g,B)}return K.body.innerHTML}function p8({post:_,onClick:$,onHashtagClick:j,onMessageRef:Z,onScrollToMessage:N,agentName:z,agentAvatarUrl:K,userName:X,userAvatarUrl:L,userAvatarBackground:q,onDelete:B,isThreadReply:G,isThreadPrev:F,isThreadNext:b,isRemoving:g,highlightQuery:u,onFileRef:f}){let[w,H]=S(null),[x,I]=S(()=>new Set),i=y(null),n=_.data,e=n.type==="agent_response",d=X||"You",N_=e?z||J8:d,p=e?U4(z,K,!0):U4(d,L),q_=typeof q==="string"?q.trim().toLowerCase():"",c_=!e&&p.image&&(q_==="clear"||q_==="transparent"),__=e&&Boolean(p.image),t=`background-color: ${c_||__?"transparent":p.color}`,Z_=n.content_meta,$_=Boolean(Z_?.truncated),Q_=Boolean(Z_?.preview),b_=$_&&!Q_,W_=$_?{originalLength:Number.isFinite(Z_?.original_length)?Z_.original_length:n.content?n.content.length:0,maxLength:Number.isFinite(Z_?.max_length)?Z_.max_length:0}:null,k_=n.content_blocks||[],O_=n.media_ids||[],F_=L7(n.content,n.link_previews),{content:v_,fileRefs:D_}=J7(F_),{content:I_,messageRefs:j0}=D7(v_),{content:F0,attachments:G_}=E7(I_);F_=F0;let a=D4(k_),H_=E4(k_),K_=a.length===1&&typeof a[0]?.fallback_text==="string"?a[0].fallback_text.trim():"",A_=H_.length===1?v8(H_[0]).trim():"",u_=Boolean(K_)&&F_?.trim()===K_||Boolean(A_)&&F_?.trim()===A_,h_=Boolean(F_)&&!b_&&!u_,t_=typeof u==="string"?u.trim():"",i_=n_(()=>{if(!F_||u_)return"";let T=n0(F_,j);return t_?k7(T,t_):T},[F_,u_,t_]),E_=(T,s)=>{T.stopPropagation(),H(Z$(s))},[J_,o_]=S(null),e_=(T)=>{o_(T)},g_=(T)=>{T.stopPropagation(),B?.(_)},m_=(T)=>{I((s)=>{let z_=new Set(s);if(z_.has(T))z_.delete(T);else z_.add(T);return z_})},V0=(T,s)=>{let z_=new Set;if(!T||s.length===0)return{content:T,usedIds:z_};return{content:T.replace(/attachment:([^\s)"']+)/g,(X_,S_,R0,J$)=>{let Y$=S_.replace(/^\/+/,""),w0=s.find((Z0)=>Z0.name&&Z0.name.toLowerCase()===Y$.toLowerCase()&&!z_.has(Z0.id))||s.find((Z0)=>!z_.has(Z0.id));if(!w0)return X_;if(z_.add(w0.id),J$.slice(Math.max(0,R0-2),R0)==="](")return`/media/${w0.id}`;return w0.name||"attachment"}),usedIds:z_}},_0=[],g0=[],X0=[],x_=[],C_=[],y_=[],k0=0;if(k_.length>0)k_.forEach((T)=>{if(T?.type==="text"&&T.annotations)y_.push(T.annotations);if(T?.type==="resource_link")x_.push(T);else if(T?.type==="resource")C_.push(T);else if(T?.type==="file"){let s=O_[k0++];if(s)g0.push(s),X0.push({id:s,name:T?.name||T?.filename||T?.title})}else if(T?.type==="image"||!T?.type){let s=O_[k0++];if(s){let z_=typeof T?.mime_type==="string"?T.mime_type:void 0;_0.push({id:s,annotations:T?.annotations,mimeType:z_}),X0.push({id:s,name:T?.name||T?.filename||T?.title})}}});else if(O_.length>0){let T=G_.length>0;O_.forEach((s,z_)=>{let U_=G_[z_]||null;if(X0.push({id:s,name:U_?.label||null}),T)g0.push(s);else _0.push({id:s,annotations:null})})}if(G_.length>0)G_.forEach((T)=>{if(!T?.id)return;let s=X0.find((z_)=>String(z_.id)===String(T.id));if(s&&!s.name)s.name=T.label});let{content:B0,usedIds:P_}=V0(F_,X0);F_=B0;let l_=_0.filter(({id:T})=>!P_.has(T)),s_=g0.filter((T)=>!P_.has(T)),T_=G_.length>0?G_.map((T,s)=>({id:T.id||`attachment-${s+1}`,label:T.label||`attachment-${s+1}`})):X0.map((T,s)=>({id:T.id,label:T.name||`attachment-${s+1}`})),Q0=n_(()=>D4(k_),[k_]),T0=n_(()=>E4(k_),[k_]);R(()=>{if(!i.current)return;return x$(i.current),H7(i.current)},[i_]);let d0=y(null);return R(()=>{if(!d0.current||Q0.length===0)return;let T=d0.current;T.innerHTML="";for(let s of Q0){let z_=document.createElement("div");T.appendChild(z_),f8(z_,s,{onAction:async(U_)=>{if(U_.type==="Action.OpenUrl"){let X_=W2(U_.url||"");if(!X_)throw Error("Invalid URL");window.open(X_,"_blank","noopener,noreferrer");return}if(U_.type==="Action.Submit"){await r1({post_id:_.id,thread_id:n.thread_id||_.id,chat_jid:_.chat_jid||null,card_id:s.card_id,action:{type:U_.type,title:U_.title||"",data:U_.data}});return}console.warn("[post] unsupported adaptive card action:",U_.type,U_)}}).catch((U_)=>{console.error("[post] adaptive card render error:",U_),z_.textContent=s.fallback_text||"Card failed to render."})}},[Q0,n.thread_id,_.id]),U`
        <div id=${`post-${_.id}`} class="post ${e?"agent-post":""} ${G?"thread-reply":""} ${F?"thread-prev":""} ${b?"thread-next":""} ${g?"removing":""}" onClick=${$}>
            <div class="post-avatar ${e?"agent-avatar":""} ${p.image?"has-image":""}" style=${t}>
                ${p.image?U`<img src=${p.image} alt=${N_} />`:p.letter}
            </div>
            <div class="post-body">
                <button
                    class="post-delete-btn"
                    type="button"
                    title="Delete message"
                    aria-label="Delete message"
                    onClick=${g_}
                >
                    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <path d="M18 6L6 18M6 6l12 12" />
                    </svg>
                </button>
                <div class="post-meta">
                    <span class="post-author">${N_}</span>
                    <a class="post-time" href=${`#msg-${_.id}`} onClick=${(T)=>{if(T.preventDefault(),T.stopPropagation(),Z)Z(_.id)}}>${M8(_.timestamp)}</a>
                </div>
                ${b_&&W_&&U`
                    <div class="post-content truncated">
                        <div class="truncated-title">Message too large to display.</div>
                        <div class="truncated-meta">
                            Original length: ${g2(W_.originalLength)} chars
                            ${W_.maxLength?U` • Display limit: ${g2(W_.maxLength)} chars`:""}
                        </div>
                    </div>
                `}
                ${Q_&&W_&&U`
                    <div class="post-content preview">
                        <div class="truncated-title">Preview truncated.</div>
                        <div class="truncated-meta">
                            Showing first ${g2(W_.maxLength)} of ${g2(W_.originalLength)} chars. Download full text below.
                        </div>
                    </div>
                `}
                ${(D_.length>0||j0.length>0||T_.length>0)&&U`
                    <div class="post-file-refs">
                        ${j0.map((T)=>{let s=(z_)=>{if(z_.preventDefault(),z_.stopPropagation(),N)N(T,_.chat_jid||null);else{let U_=document.getElementById("post-"+T);if(U_)U_.scrollIntoView({behavior:"smooth",block:"center"}),U_.classList.add("post-highlight"),setTimeout(()=>U_.classList.remove("post-highlight"),2000)}};return U`
                                <a href=${`#msg-${T}`} class="post-msg-pill-link" onClick=${s}>
                                    <${X$}
                                        prefix="post"
                                        label=${"msg:"+T}
                                        title=${"Message "+T}
                                        icon="message"
                                        onClick=${s}
                                    />
                                </a>
                            `})}
                        ${D_.map((T)=>{let s=T.split("/").pop()||T;return U`
                                <${X$}
                                    prefix="post"
                                    label=${s}
                                    title=${T}
                                    onClick=${()=>f?.(T)}
                                />
                            `})}
                        ${T_.map((T)=>U`
                            <${W7}
                                key=${T.id}
                                attachment=${T}
                                onPreview=${e_}
                            />
                        `)}
                    </div>
                `}
                ${h_&&U`
                    <div 
                        ref=${i}
                        class="post-content"
                        dangerouslySetInnerHTML=${{__html:i_}}
                        onClick=${(T)=>{if(T.target.classList.contains("hashtag")){T.preventDefault(),T.stopPropagation();let s=T.target.dataset.hashtag;if(s)j?.(s)}else if(T.target.tagName==="IMG")T.preventDefault(),T.stopPropagation(),H(T.target.src)}}
                    />
                `}
                ${Q0.length>0&&U`
                    <div ref=${d0} class="post-adaptive-cards" />
                `}
                ${T0.length>0&&U`
                    <div class="post-adaptive-card-submissions">
                        ${T0.map((T,s)=>{let z_=u8(T),U_=`${T.card_id}-${s}`,X_=x.has(U_);return U`
                                <div key=${U_} class="adaptive-card-submission-receipt">
                                    <div class="adaptive-card-submission-header">
                                        <span class="adaptive-card-submission-icon" aria-hidden="true">✓</span>
                                        <div class="adaptive-card-submission-title-wrap">
                                            <span class="adaptive-card-submission-title">Submitted</span>
                                            <span class="adaptive-card-submission-title-action">${z_.title}</span>
                                        </div>
                                    </div>
                                    ${z_.summary&&U`
                                        <div class="adaptive-card-submission-summary">${z_.summary}</div>
                                    `}
                                    ${z_.fields.length>0&&U`
                                        <div class="adaptive-card-submission-fields">
                                            ${z_.fields.map((S_)=>U`
                                                <span class="adaptive-card-submission-field" title=${`${S_.key}: ${S_.value}`}>
                                                    <span class="adaptive-card-submission-field-key">${S_.key}</span>
                                                    <span class="adaptive-card-submission-field-sep">:</span>
                                                    <span class="adaptive-card-submission-field-value">${S_.value}</span>
                                                </span>
                                            `)}
                                        </div>
                                    `}
                                    ${z_.hiddenFieldCount>0&&U`
                                        <button
                                            type="button"
                                            class="adaptive-card-submission-toggle"
                                            aria-expanded=${X_?"true":"false"}
                                            onClick=${(S_)=>{S_.preventDefault(),S_.stopPropagation(),m_(U_)}}
                                        >
                                            ${X_?`Hide ${z_.hiddenFieldCount} more`:`Show ${z_.hiddenFieldCount} more`}
                                        </button>
                                    `}
                                    ${X_&&z_.hiddenFields.length>0&&U`
                                        <div class="adaptive-card-submission-fields adaptive-card-submission-fields-extra">
                                            ${z_.hiddenFields.map((S_)=>U`
                                                <span class="adaptive-card-submission-field" title=${`${S_.key}: ${S_.value}`}>
                                                    <span class="adaptive-card-submission-field-key">${S_.key}</span>
                                                    <span class="adaptive-card-submission-field-sep">:</span>
                                                    <span class="adaptive-card-submission-field-value">${S_.value}</span>
                                                </span>
                                            `)}
                                        </div>
                                    `}
                                    <div class="adaptive-card-submission-meta">
                                        Submitted ${G2(z_.submittedAt)}
                                    </div>
                                </div>
                            `})}
                    </div>
                `}
                ${y_.length>0&&U`
                    ${y_.map((T,s)=>U`
                        <${O1} key=${s} annotations=${T} />
                    `)}
                `}
                ${l_.length>0&&U`
                    <div class="media-preview">
                        ${l_.map(({id:T,mimeType:s})=>{let U_=typeof s==="string"&&s.toLowerCase().startsWith("image/svg")?Z$(T):_4(T);return U`
                                <img 
                                    key=${T} 
                                    src=${U_} 
                                    alt="Media" 
                                    loading="lazy"
                                    onClick=${(X_)=>E_(X_,T)}
                                />
                            `})}
                    </div>
                `}
                ${l_.length>0&&U`
                    ${l_.map(({annotations:T},s)=>U`
                        ${T&&U`<${O1} key=${s} annotations=${T} />`}
                    `)}
                `}
                ${s_.length>0&&U`
                    <div class="file-attachments">
                        ${s_.map((T)=>U`
                            <${Y7} key=${T} mediaId=${T} onPreview=${e_} />
                        `)}
                    </div>
                `}
                ${x_.length>0&&U`
                    <div class="resource-links">
                        ${x_.map((T,s)=>U`
                            <div key=${s}>
                                <${G7} block=${T} />
                                <${O1} annotations=${T.annotations} />
                            </div>
                        `)}
                    </div>
                `}
                ${C_.length>0&&U`
                    <div class="resource-embeds">
                        ${C_.map((T,s)=>U`
                            <div key=${s}>
                                <${V7} block=${T} />
                                <${O1} annotations=${T.annotations} />
                            </div>
                        `)}
                    </div>
                `}
                ${n.link_previews?.length>0&&U`
                    <div class="link-previews">
                        ${n.link_previews.map((T,s)=>U`
                            <${q7} key=${s} preview=${T} />
                        `)}
                    </div>
                `}
            </div>
        </div>
        ${w&&U`<${g8} src=${w} onClose=${()=>H(null)} />`}
        ${J_&&U`
            <${m8}
                mediaId=${J_.mediaId}
                info=${J_.info}
                onClose=${()=>o_(null)}
            />
        `}
    `}function c8({posts:_,hasMore:$,onLoadMore:j,onPostClick:Z,onHashtagClick:N,onMessageRef:z,onScrollToMessage:K,onFileRef:X,emptyMessage:L,timelineRef:q,agents:B,user:G,onDeletePost:F,reverse:b=!0,removingPostIds:g,searchQuery:u}){let[f,w]=S(!1),H=y(null),x=typeof IntersectionObserver<"u",I=M(async()=>{if(!j||!$||f)return;w(!0);try{await j({preserveScroll:!0,preserveMode:"top"})}finally{w(!1)}},[$,f,j]),i=M((__)=>{let{scrollTop:t,scrollHeight:Z_,clientHeight:$_}=__.target,Q_=b?Z_-$_-t:t,b_=Math.max(300,$_);if(Q_<b_)I()},[b,I]);R(()=>{if(!x)return;let __=H.current,t=q?.current;if(!__||!t)return;let Z_=300,$_=new IntersectionObserver((Q_)=>{for(let b_ of Q_){if(!b_.isIntersecting)continue;I()}},{root:t,rootMargin:`${Z_}px 0px ${Z_}px 0px`,threshold:0});return $_.observe(__),()=>$_.disconnect()},[x,$,j,q,I]);let n=y(I);if(n.current=I,R(()=>{if(x)return;if(!q?.current)return;let{scrollTop:__,scrollHeight:t,clientHeight:Z_}=q.current,$_=b?t-Z_-__:__,Q_=Math.max(300,Z_);if($_<Q_)n.current?.()},[x,_,$,b,q]),R(()=>{if(!q?.current)return;if(!$||f)return;let{scrollTop:__,scrollHeight:t,clientHeight:Z_}=q.current,$_=b?t-Z_-__:__,Q_=Math.max(300,Z_);if(t<=Z_+1||$_<Q_)n.current?.()},[_,$,f,b,q]),!_)return U`<div class="loading"><div class="spinner"></div></div>`;if(_.length===0)return U`
            <div class="timeline" ref=${q}>
                <div class="timeline-content">
                    <div style="padding: var(--spacing-xl); text-align: center; color: var(--text-secondary)">
                        ${L||"No messages yet. Start a conversation!"}
                    </div>
                </div>
            </div>
        `;let e=_.slice().sort((__,t)=>__.id-t.id),d=(__)=>{let t=__?.data?.thread_id;if(t===null||t===void 0||t==="")return null;let Z_=Number(t);return Number.isFinite(Z_)?Z_:null},N_=new Map;for(let __=0;__<e.length;__+=1){let t=e[__],Z_=Number(t?.id),$_=d(t);if($_!==null){let Q_=N_.get($_)||{anchorIndex:-1,replyIndexes:[]};Q_.replyIndexes.push(__),N_.set($_,Q_)}else if(Number.isFinite(Z_)){let Q_=N_.get(Z_)||{anchorIndex:-1,replyIndexes:[]};Q_.anchorIndex=__,N_.set(Z_,Q_)}}let p=new Map;for(let[__,t]of N_.entries()){let Z_=new Set;if(t.anchorIndex>=0)Z_.add(t.anchorIndex);for(let $_ of t.replyIndexes)Z_.add($_);p.set(__,Array.from(Z_).sort(($_,Q_)=>$_-Q_))}let q_=e.map((__,t)=>{let Z_=d(__);if(Z_===null)return{hasThreadPrev:!1,hasThreadNext:!1};let $_=p.get(Z_);if(!$_||$_.length===0)return{hasThreadPrev:!1,hasThreadNext:!1};let Q_=$_.indexOf(t);if(Q_<0)return{hasThreadPrev:!1,hasThreadNext:!1};return{hasThreadPrev:Q_>0,hasThreadNext:Q_<$_.length-1}}),c_=U`<div class="timeline-sentinel" ref=${H}></div>`;return U`
        <div class="timeline ${b?"reverse":"normal"}" ref=${q} onScroll=${i}>
            <div class="timeline-content">
                ${b?c_:null}
                ${e.map((__,t)=>{let Z_=Boolean(__.data?.thread_id&&__.data.thread_id!==__.id),$_=g?.has?.(__.id),Q_=q_[t]||{};return U`
                    <${p8}
                        key=${__.id}
                        post=${__}
                        isThreadReply=${Z_}
                        isThreadPrev=${Q_.hasThreadPrev}
                        isThreadNext=${Q_.hasThreadNext}
                        isRemoving=${$_}
                        highlightQuery=${u}
                        agentName=${D8(__.data?.agent_id,B||{})}
                        agentAvatarUrl=${E8(__.data?.agent_id,B||{})}
                        userName=${G?.name||G?.user_name}
                        userAvatarUrl=${G?.avatar_url||G?.avatarUrl||G?.avatar}
                        userAvatarBackground=${G?.avatar_background||G?.avatarBackground}
                        onClick=${()=>Z?.(__)}
                        onHashtagClick=${N}
                        onMessageRef=${z}
                        onScrollToMessage=${K}
                        onFileRef=${X}
                        onDelete=${F}
                    />
                `})}
                ${b?null:c_}
            </div>
        </div>
    `}class h8{extensions=new Map;register(_){this.extensions.set(_.id,_)}unregister(_){this.extensions.delete(_)}resolve(_){let $,j=-1/0;for(let Z of this.extensions.values()){if(Z.placement!=="tabs")continue;if(!Z.canHandle)continue;try{let N=Z.canHandle(_);if(N===!1||N===0)continue;let z=N===!0?0:typeof N==="number"?N:0;if(z>j)j=z,$=Z}catch(N){console.warn(`[PaneRegistry] canHandle() error for "${Z.id}":`,N)}}return $}list(){return Array.from(this.extensions.values())}getDockPanes(){return Array.from(this.extensions.values()).filter((_)=>_.placement==="dock")}getTabPanes(){return Array.from(this.extensions.values()).filter((_)=>_.placement==="tabs")}get(_){return this.extensions.get(_)}get size(){return this.extensions.size}}var d_=new h8;var U1=null,y4=null;function w7(){try{return`/static/dist/editor.bundle.js${new URL(import.meta.url).search||""}`}catch{return"/static/dist/editor.bundle.js"}}function i8(){if(y4)return Promise.resolve(y4);if(!U1)U1=import(w7()).then((_)=>{return y4=_,_}).catch((_)=>{throw U1=null,_});return U1}class l8{container;context;real=null;disposed=!1;loadingEl;queuedDirtyCb=null;queuedSaveCb=null;queuedCloseCb=null;queuedViewStateCb=null;queuedViewState=null;constructor(_,$){this.container=_,this.context=$,this.loadingEl=document.createElement("div"),this.loadingEl.className="editor-pane",this.loadingEl.innerHTML=`
            <div class="editor-body">
                <div class="editor-status" style="padding: 2em; text-align: center; color: var(--text-secondary);">Loading editor…</div>
            </div>
        `,_.appendChild(this.loadingEl),this.load()}escapeHtml(_){let $=document.createElement("div");return $.textContent=_,$.innerHTML}async load(){try{let _=await i8();if(this.disposed)return;if(this.loadingEl.parentNode)this.loadingEl.remove();if(this.real=new _.StandaloneEditorInstance(this.container,this.context),this.queuedDirtyCb&&this.real.onDirtyChange)this.real.onDirtyChange(this.queuedDirtyCb);if(this.queuedSaveCb&&this.real.onSaveRequest)this.real.onSaveRequest(this.queuedSaveCb);if(this.queuedCloseCb&&this.real.onClose)this.real.onClose(this.queuedCloseCb);if(this.queuedViewStateCb&&typeof this.real.onViewStateChange==="function")this.real.onViewStateChange(this.queuedViewStateCb);if(this.queuedViewState&&typeof this.real.restoreViewState==="function")requestAnimationFrame(()=>this.real?.restoreViewState?.(this.queuedViewState))}catch(_){if(this.disposed)return;console.error("[editor-loader] Failed to load editor bundle:",_),this.loadingEl.querySelector(".editor-status").textContent="Failed to load editor. Check console for details."}}getContent(){return this.real?.getContent()}isDirty(){return this.real?.isDirty()||!1}setContent(_,$){if(this.real?.setContent)this.real.setContent(_,$)}focus(){this.real?.focus()}resize(){this.real?.resize?.()}dispose(){if(this.disposed)return;if(this.disposed=!0,this.real)this.real.dispose(),this.real=null;this.container.innerHTML="",this.queuedDirtyCb=null,this.queuedSaveCb=null,this.queuedCloseCb=null,this.queuedViewStateCb=null}onDirtyChange(_){if(this.queuedDirtyCb=_,this.real?.onDirtyChange)this.real.onDirtyChange(_)}onSaveRequest(_){if(this.queuedSaveCb=_,this.real?.onSaveRequest)this.real.onSaveRequest(_)}onClose(_){if(this.queuedCloseCb=_,this.real?.onClose)this.real.onClose(_)}onViewStateChange(_){this.queuedViewStateCb=_,this.real?.onViewStateChange?.(_)}restoreViewState(_){this.queuedViewState=_,this.real?.restoreViewState?.(_)}getPath(){return this.real?.getPath?.()??this.context.path??""}setPath(_){this.real?.setPath?.(_)}}var k4={id:"editor",label:"Editor",icon:"edit",capabilities:["edit"],placement:"tabs",canHandle(_){if(!_.path)return!1;if(_.mode!=="edit")return!1;return 1},mount(_,$){return new l8(_,$)}};function w4(){i8().catch(()=>{})}var P4="piclaw://terminal";var A7={yellow:"#9a6700",magenta:"#8250df",cyan:"#1b7c83",brightBlack:"#57606a",brightRed:"#cf222e",brightGreen:"#1a7f37",brightYellow:"#bf8700",brightBlue:"#0550ae",brightMagenta:"#6f42c1",brightCyan:"#0a7b83"},P7={yellow:"#d29922",magenta:"#bc8cff",cyan:"#39c5cf",brightBlack:"#8b949e",brightRed:"#ff7b72",brightGreen:"#7ee787",brightYellow:"#e3b341",brightBlue:"#79c0ff",brightMagenta:"#d2a8ff",brightCyan:"#56d4dd"},F1=null,A4=null;function M7(_){if(!_)return!1;return _.startsWith("data:application/wasm")||/(^|\/)ghostty-vt\.wasm(?:[?#].*)?$/.test(_)}async function b7(_){let $=globalThis.fetch?.bind(globalThis);if(!$)return await _();let j=new URL("/static/js/vendor/ghostty-vt.wasm",window.location.origin).href,Z=(N,z)=>{let K=N instanceof Request?N.url:N instanceof URL?N.href:String(N);if(!M7(K))return $(N,z);if(N instanceof Request)return $(new Request(j,N));return $(j,z)};globalThis.fetch=Z;try{return await _()}finally{globalThis.fetch=$}}async function I7(){let $=await import(new URL("/static/js/vendor/ghostty-web.js",window.location.origin).href);if(!F1)F1=b7(()=>Promise.resolve($.init?.())).catch((j)=>{throw F1=null,j});return await F1,$}async function x7(){if(typeof document>"u"||!("fonts"in document)||!document.fonts)return;if(!A4)A4=Promise.allSettled([document.fonts.load('400 13px "FiraCode Nerd Font Mono"'),document.fonts.load('700 13px "FiraCode Nerd Font Mono"'),document.fonts.ready]).then(()=>{return}).catch(()=>{return});await A4}async function C7(){let _=await fetch("/terminal/session",{method:"GET",credentials:"same-origin"}),$=await _.json().catch(()=>({}));if(!_.ok)throw Error($?.error||`HTTP ${_.status}`);return $}function T7(_){return`${window.location.protocol==="https:"?"wss:":"ws:"}//${window.location.host}${_}`}function S7(){if(typeof window>"u"||typeof document>"u")return!1;let{documentElement:_,body:$}=document,j=_?.getAttribute?.("data-theme")?.toLowerCase?.()||"";if(j==="dark")return!0;if(j==="light")return!1;if(_?.classList?.contains("dark")||$?.classList?.contains("dark"))return!0;if(_?.classList?.contains("light")||$?.classList?.contains("light"))return!1;return Boolean(window.matchMedia?.("(prefers-color-scheme: dark)")?.matches)}function C$(_,$=""){if(typeof document>"u")return $;return getComputedStyle(document.documentElement).getPropertyValue(_)?.trim()||$}function f7(_,$){if(!_||!_.startsWith("#"))return _;let j=_.slice(1);if(j.length===3)return`#${j[0]}${j[0]}${j[1]}${j[1]}${j[2]}${j[2]}${$}`;if(j.length===6)return`#${j}${$}`;return _}function n8(){let _=S7(),$=_?P7:A7,j=C$("--bg-primary",_?"#000000":"#ffffff"),Z=C$("--text-primary",_?"#e7e9ea":"#0f1419"),N=C$("--text-secondary",_?"#71767b":"#536471"),z=C$("--accent-color","#1d9bf0"),K=C$("--danger-color",_?"#ff7b72":"#cf222e"),X=C$("--success-color",_?"#7ee787":"#1a7f37"),L=C$("--bg-hover",_?"#1d1f23":"#e8ebed"),q=C$("--border-color",_?"#2f3336":"#eff3f4"),B=C$("--accent-soft-strong",f7(z,_?"47":"33"));return{background:j,foreground:Z,cursor:z,cursorAccent:j,selectionBackground:B,selectionForeground:Z,black:L,red:K,green:X,yellow:$.yellow,blue:z,magenta:$.magenta,cyan:$.cyan,white:Z,brightBlack:$.brightBlack,brightRed:$.brightRed,brightGreen:$.brightGreen,brightYellow:$.brightYellow,brightBlue:$.brightBlue,brightMagenta:$.brightMagenta,brightCyan:$.brightCyan,brightWhite:q}}class M4{container;disposed=!1;termEl;bodyEl;statusEl;terminal=null;fitAddon=null;socket=null;themeObserver=null;themeChangeListener=null;mediaQuery=null;mediaQueryListener=null;resizeObserver=null;dockResizeListener=null;windowResizeListener=null;resizeFrame=0;lastAppliedThemeSignature=null;lastResizeSignature=null;constructor(_,$){this.container=_,this.termEl=document.createElement("div"),this.termEl.className="terminal-pane-content",this.termEl.setAttribute("tabindex","0"),this.statusEl=document.createElement("span"),this.statusEl.className="terminal-pane-status",this.statusEl.textContent="Loading terminal…",this.bodyEl=document.createElement("div"),this.bodyEl.className="terminal-pane-body",this.bodyEl.innerHTML='<div class="terminal-placeholder">Bootstrapping ghostty-web…</div>',this.termEl.append(this.bodyEl),_.appendChild(this.termEl),this.bootstrapGhostty()}setStatus(_){this.statusEl.textContent=_,this.termEl.dataset.connectionStatus=_,this.termEl.setAttribute("aria-label",`Terminal ${_}`)}getResizeSignature(){try{let _=this.container?.getBoundingClientRect?.(),$=this.bodyEl?.getBoundingClientRect?.(),j=Number.isFinite(_?.width)?_.width:0,Z=Number.isFinite(_?.height)?_.height:0,N=Number.isFinite($?.width)?$.width:0,z=Number.isFinite($?.height)?$.height:0;return`${Math.round(j)}x${Math.round(Z)}:${Math.round(N)}x${Math.round(z)}`}catch{return"0x0:0x0"}}syncHostLayout(){let _=this.bodyEl.querySelector(".terminal-live-host");if(!(_ instanceof HTMLElement))return;let $=_.firstElementChild;if($ instanceof HTMLElement)$.style.width="100%",$.style.height="100%",$.style.maxWidth="100%",$.style.minWidth="0",$.style.display="block";let j=_.querySelector("canvas");if(j instanceof HTMLElement)j.style.display="block",j.style.maxWidth="none"}scheduleResize(){if(this.disposed)return;let _=this.getResizeSignature();if(this.lastResizeSignature===_)return;if(this.resizeFrame)cancelAnimationFrame(this.resizeFrame);this.resizeFrame=requestAnimationFrame(()=>{this.resizeFrame=0,this.lastResizeSignature=this.getResizeSignature(),this.resize()})}async bootstrapGhostty(){try{let _=await I7();if(await x7(),this.disposed)return;this.bodyEl.innerHTML="";let $=document.createElement("div");$.className="terminal-live-host",this.bodyEl.appendChild($);let j=new _.Terminal({cols:120,rows:30,cursorBlink:!0,fontFamily:'FiraCode Nerd Font Mono, ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", monospace',fontSize:13,theme:n8()}),Z=null;if(typeof _.FitAddon==="function")Z=new _.FitAddon,j.loadAddon?.(Z);await j.open($),this.syncHostLayout(),j.loadFonts?.(),Z?.observeResize?.(),this.terminal=j,this.fitAddon=Z,this.installThemeSync(),this.installResizeSync(),this.scheduleResize(),await this.connectBackend()}catch(_){if(console.error("[terminal-pane] Failed to bootstrap ghostty-web:",_),this.disposed)return;this.bodyEl.innerHTML='<div class="terminal-placeholder">Terminal failed to load. Check vendored assets and backend wiring.</div>',this.setStatus("Load failed")}}applyTheme(){if(!this.terminal)return;let _=n8(),$=JSON.stringify(_),j=this.lastAppliedThemeSignature!==null&&this.lastAppliedThemeSignature!==$;try{this.termEl.style.backgroundColor=_.background,this.bodyEl.style.backgroundColor=_.background;let Z=this.bodyEl.querySelector(".terminal-live-host");if(Z instanceof HTMLElement)Z.style.backgroundColor=_.background,Z.style.color=_.foreground;let N=this.bodyEl.querySelector("canvas");if(N instanceof HTMLElement)N.style.backgroundColor=_.background,N.style.color=_.foreground}catch{}try{if(this.terminal.options)this.terminal.options.theme=_}catch{}try{if(j&&this.terminal.reset)this.terminal.reset()}catch{}try{this.terminal.renderer?.setTheme?.(_),this.terminal.renderer?.clear?.()}catch{}try{this.terminal.loadFonts?.()}catch{}try{this.terminal.renderer?.remeasureFont?.()}catch{}try{if(this.terminal.wasmTerm&&this.terminal.renderer?.render)this.terminal.renderer.render(this.terminal.wasmTerm,!0,this.terminal.viewportY||0,this.terminal),this.terminal.renderer.render(this.terminal.wasmTerm,!1,this.terminal.viewportY||0,this.terminal)}catch{}try{this.resize()}catch{}try{if(j&&this.socket?.readyState===WebSocket.OPEN)this.socket.send(JSON.stringify({type:"input",data:"\f"}))}catch{}try{this.terminal.refresh?.()}catch{}this.lastAppliedThemeSignature=$}installThemeSync(){if(typeof window>"u"||typeof document>"u")return;let _=()=>requestAnimationFrame(()=>this.applyTheme());_();let $=()=>_();window.addEventListener("piclaw-theme-change",$),this.themeChangeListener=$;let j=window.matchMedia?.("(prefers-color-scheme: dark)"),Z=()=>_();if(j?.addEventListener)j.addEventListener("change",Z);else if(j?.addListener)j.addListener(Z);this.mediaQuery=j,this.mediaQueryListener=Z;let N=typeof MutationObserver<"u"?new MutationObserver(()=>_()):null;if(N?.observe(document.documentElement,{attributes:!0,attributeFilter:["class","data-theme","style"]}),document.body)N?.observe(document.body,{attributes:!0,attributeFilter:["class","data-theme"]});this.themeObserver=N}installResizeSync(){if(typeof window>"u")return;let _=()=>this.scheduleResize(),$=()=>this.scheduleResize();if(window.addEventListener("dock-resize",_),window.addEventListener("resize",$),this.dockResizeListener=_,this.windowResizeListener=$,typeof ResizeObserver<"u"){let j=new ResizeObserver(()=>{if(this.disposed)return;this.scheduleResize()});j.observe(this.container),this.resizeObserver=j}}async connectBackend(){let _=this.terminal;if(!_)return;try{let $=await C7();if(this.disposed)return;if(!$?.enabled){_.write?.(`Terminal backend unavailable: ${$?.error||"disabled"}\r
`),this.setStatus("Unavailable");return}let j=new WebSocket(T7($.ws_path||"/terminal/ws"));this.socket=j,this.setStatus("Connecting…"),_.onData?.((Z)=>{if(j.readyState===WebSocket.OPEN)j.send(JSON.stringify({type:"input",data:Z}))}),_.onResize?.(({cols:Z,rows:N})=>{if(j.readyState===WebSocket.OPEN)j.send(JSON.stringify({type:"resize",cols:Z,rows:N}))}),j.addEventListener("open",()=>{if(this.disposed)return;this.setStatus("Connected"),this.scheduleResize()}),j.addEventListener("message",(Z)=>{if(this.disposed)return;let N=null;try{N=JSON.parse(String(Z.data))}catch{N={type:"output",data:String(Z.data)}}if(N?.type==="output"&&typeof N.data==="string"){_.write?.(N.data);return}if(N?.type==="exit")_.write?.(`\r
[terminal exited]\r
`),this.setStatus("Exited")}),j.addEventListener("close",()=>{if(this.disposed)return;this.setStatus("Disconnected")}),j.addEventListener("error",()=>{if(this.disposed)return;this.setStatus("Connection error")})}catch($){_.write?.(`Terminal backend unavailable: ${$ instanceof Error?$.message:String($)}\r
`),this.setStatus("Unavailable")}}sendResize(){if(!this.socket||this.socket.readyState!==WebSocket.OPEN||!this.fitAddon?.proposeDimensions)return;let _=this.fitAddon.proposeDimensions();if(!_)return;this.socket.send(JSON.stringify({type:"resize",cols:_.cols,rows:_.rows}))}getContent(){return}isDirty(){return!1}focus(){if(this.terminal?.focus){this.terminal.focus();return}this.termEl?.focus()}resize(){this.syncHostLayout();try{this.terminal?.renderer?.remeasureFont?.()}catch{}try{this.fitAddon?.fit?.()}catch{}try{this.terminal?.refresh?.()}catch{}this.syncHostLayout(),this.sendResize()}dispose(){if(this.disposed)return;this.disposed=!0;try{if(this.resizeFrame)cancelAnimationFrame(this.resizeFrame),this.resizeFrame=0}catch{}try{if(this.themeChangeListener)window.removeEventListener("piclaw-theme-change",this.themeChangeListener)}catch{}try{if(this.mediaQuery&&this.mediaQueryListener){if(this.mediaQuery.removeEventListener)this.mediaQuery.removeEventListener("change",this.mediaQueryListener);else if(this.mediaQuery.removeListener)this.mediaQuery.removeListener(this.mediaQueryListener)}}catch{}try{if(this.dockResizeListener)window.removeEventListener("dock-resize",this.dockResizeListener);if(this.windowResizeListener)window.removeEventListener("resize",this.windowResizeListener)}catch{}try{this.themeObserver?.disconnect?.()}catch{}try{this.resizeObserver?.disconnect?.()}catch{}try{this.socket?.close?.()}catch{}try{this.fitAddon?.dispose?.()}catch{}try{this.terminal?.dispose?.()}catch{}this.termEl?.remove()}}var b4={id:"terminal",label:"Terminal",icon:"terminal",capabilities:["terminal"],placement:"dock",mount(_,$){return new M4(_,$)}},I4={id:"terminal-tab",label:"Terminal",icon:"terminal",capabilities:["terminal"],placement:"tabs",canHandle(_){return _?.path==="piclaw://terminal"?1e4:!1},mount(_,$){return new M4(_,$)}};function o$(_){return String(_||"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}function R7(_,$){let j=String(_||"").trim();if(!j)return j;if(/^[a-zA-Z][a-zA-Z\d+.-]*:/.test(j)||j.startsWith("#")||j.startsWith("data:")||j.startsWith("blob:"))return j;let Z=j.match(/^([^?#]*)(\?[^#]*)?(#.*)?$/),N=Z?.[1]||j,z=Z?.[2]||"",K=Z?.[3]||"",X=String($||"").split("/").slice(0,-1).join("/"),q=N.startsWith("/")?N:`${X?`${X}/`:""}${N}`,B=[];for(let F of q.split("/")){if(!F||F===".")continue;if(F===".."){if(B.length>0)B.pop();continue}B.push(F)}let G=B.join("/");return`${K1(G)}${z}${K}`}function i2(_){return _?.preview||null}function v7(_){let $=String(_||""),j=Math.max($.lastIndexOf("/"),$.lastIndexOf("\\")),Z=j>=0?$.slice(j+1):$,N=Z.lastIndexOf(".");if(N<=0||N===Z.length-1)return"none";return Z.slice(N+1)}function u7(_){if(!_)return"unknown";if(_.kind==="image")return"image";if(_.kind==="text")return _.content_type==="text/markdown"?"markdown":"text";if(_.kind==="binary")return"binary";return String(_.kind||"unknown")}function m7(_,$){let j=$?.path||_?.path||"",Z=[];if($?.content_type)Z.push(`<span><strong>type:</strong> ${o$($.content_type)}</span>`);if(typeof $?.size==="number")Z.push(`<span><strong>size:</strong> ${o$(z$($.size))}</span>`);if($?.mtime)Z.push(`<span><strong>modified:</strong> ${o$(G2($.mtime))}</span>`);if(Z.push(`<span><strong>kind:</strong> ${o$(u7($))}</span>`),Z.push(`<span><strong>extension:</strong> ${o$(v7(j))}</span>`),j)Z.push(`<span><strong>path:</strong> ${o$(j)}</span>`);if($?.truncated)Z.push("<span><strong>content:</strong> truncated</span>");return`<div class="workspace-preview-meta workspace-preview-meta-inline">${Z.join("")}</div>`}function g7(_){let $=i2(_);if(!$)return'<div class="workspace-preview-text">No preview available.</div>';let j=m7(_,$);if($.kind==="image"){let Z=$.url||($.path?K1($.path):"");return`${j}
            <div class="workspace-preview-image">
                <img src="${o$(Z)}" alt="preview" />
            </div>
        `}if($.kind==="text"){if($.content_type==="text/markdown"){let Z=n0($.text||"",null,{rewriteImageSrc:(N)=>R7(N,$.path||_?.path)});return`${j}<div class="workspace-preview-text">${Z}</div>`}return`${j}<pre class="workspace-preview-text"><code>${o$($.text||"")}</code></pre>`}if($.kind==="binary")return`${j}<div class="workspace-preview-text">Binary file — download to view.</div>`;return`${j}<div class="workspace-preview-text">No preview available.</div>`}class x4{constructor(_,$){this.container=_,this.context=$,this.disposed=!1,this.host=document.createElement("div"),this.host.className="workspace-preview-render-host",this.host.tabIndex=0,this.container.appendChild(this.host),this.render()}render(){if(this.disposed)return;this.host.innerHTML=g7(this.context)}getContent(){let _=i2(this.context);return typeof _?.text==="string"?_.text:void 0}isDirty(){return!1}setContent(_,$){let j=i2(this.context);if(j&&j.kind==="text"){if(j.text=_,$!==void 0)j.mtime=$}if(this.context.content=_,$!==void 0)this.context.mtime=$;this.render()}focus(){this.host?.focus?.()}dispose(){if(this.disposed)return;this.disposed=!0,this.host?.remove(),this.container.innerHTML=""}}var C4={id:"workspace-markdown-preview",label:"Workspace Markdown Preview",icon:"preview",capabilities:["preview","readonly"],placement:"tabs",canHandle(_){let $=i2(_);if(_?.mode!=="view")return!1;if(!$||$.kind!=="text")return!1;return $.content_type==="text/markdown"?20:!1},mount(_,$){return new x4(_,$)}},T4={id:"workspace-preview-default",label:"Workspace Preview",icon:"preview",capabilities:["preview","readonly"],placement:"tabs",canHandle(_){if(_?.mode!=="view")return!1;return i2(_)||_?.path?1:!1},mount(_,$){return new x4(_,$)}};var p7=new Set([".docx",".doc",".odt",".rtf",".xlsx",".xls",".ods",".csv",".pptx",".ppt",".odp"]),c7={".docx":"Word Document",".doc":"Word (Legacy)",".odt":"OpenDocument Text",".rtf":"Rich Text",".xlsx":"Excel Spreadsheet",".xls":"Excel (Legacy)",".ods":"OpenDocument Spreadsheet",".csv":"CSV Data",".pptx":"PowerPoint",".ppt":"PowerPoint (Legacy)",".odp":"OpenDocument Presentation"},h7={".docx":"\uD83D\uDCDD",".doc":"\uD83D\uDCDD",".odt":"\uD83D\uDCDD",".rtf":"\uD83D\uDCDD",".xlsx":"\uD83D\uDCCA",".xls":"\uD83D\uDCCA",".ods":"\uD83D\uDCCA",".csv":"\uD83D\uDCCA",".pptx":"\uD83D\uDCFD️",".ppt":"\uD83D\uDCFD️",".odp":"\uD83D\uDCFD️"};function o8(_){if(!_)return"";let $=_.lastIndexOf(".");if($<0)return"";return _.slice($).toLowerCase()}function d8(_){return _.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}class s8{container;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Z=j.split("/").pop()||"document",N=o8(j),z=h7[N]||"\uD83D\uDCC4",K=c7[N]||"Office Document",X=document.createElement("div");X.style.cssText="width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:var(--bg-primary,#1a1a1a);",X.innerHTML=`
            <div style="text-align:center;max-width:360px;padding:24px;">
                <div style="font-size:56px;margin-bottom:12px;">${z}</div>
                <div style="font-size:14px;font-weight:600;color:var(--text-primary,#e0e0e0);margin-bottom:4px;word-break:break-word;">${d8(Z)}</div>
                <div style="font-size:11px;color:var(--text-secondary,#888);margin-bottom:20px;">${d8(K)}</div>
                <button id="ov-open-tab" style="padding:8px 20px;background:var(--accent-color,#1d9bf0);color:var(--accent-contrast-text,#fff);
                    border:none;border-radius:5px;font-size:13px;font-weight:500;cursor:pointer;
                    transition:background 0.15s;"
                    onmouseenter="this.style.background='var(--accent-hover,#1a8cd8)'"
                    onmouseleave="this.style.background='var(--accent-color,#1d9bf0)'">
                    Open in Tab
                </button>
            </div>
        `,_.appendChild(X);let L=X.querySelector("#ov-open-tab");if(L)L.addEventListener("click",()=>{let q=new CustomEvent("office-viewer:open-tab",{bubbles:!0,detail:{path:j}});_.dispatchEvent(q)})}getContent(){return}isDirty(){return!1}focus(){}resize(){}dispose(){if(this.disposed)return;this.disposed=!0,this.container.innerHTML=""}}class r8{container;iframe=null;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Z=j.split("/").pop()||"document",N=`/workspace/raw?path=${encodeURIComponent(j)}`,z=`/office-viewer/?url=${encodeURIComponent(N)}&name=${encodeURIComponent(Z)}`;this.iframe=document.createElement("iframe"),this.iframe.src=z,this.iframe.style.cssText="width:100%;height:100%;border:none;background:#1e1e1e;",_.appendChild(this.iframe)}getContent(){return}isDirty(){return!1}focus(){this.iframe?.focus()}resize(){}dispose(){if(this.disposed)return;if(this.disposed=!0,this.iframe)this.iframe.src="about:blank",this.iframe=null;this.container.innerHTML=""}}var S4={id:"office-viewer",label:"Office Viewer",icon:"file-text",capabilities:["readonly","preview"],placement:"tabs",canHandle(_){let $=o8(_?.path);if(!$||!p7.has($))return!1;return 50},mount(_,$){if($?.mode==="view")return new s8(_,$);return new r8(_,$)}};var i7=/\.(csv|tsv)$/i;function a8(_){return _.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}class t8{container;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Z=j.split("/").pop()||"table.csv",N=j.toLowerCase().endsWith(".tsv")?"TSV Table":"CSV Table",z=document.createElement("div");z.style.cssText="width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:var(--bg-primary,#1a1a1a);",z.innerHTML=`
            <div style="text-align:center;max-width:360px;padding:24px;">
                <div style="font-size:56px;margin-bottom:12px;">\uD83D\uDCCA</div>
                <div style="font-size:14px;font-weight:600;color:var(--text-primary,#e0e0e0);margin-bottom:4px;word-break:break-word;">${a8(Z)}</div>
                <div style="font-size:11px;color:var(--text-secondary,#888);margin-bottom:20px;">${a8(N)}</div>
                <button id="csv-open-tab" style="padding:8px 20px;background:var(--accent-color,#1d9bf0);color:var(--accent-contrast-text,#fff);
                    border:none;border-radius:5px;font-size:13px;font-weight:500;cursor:pointer;
                    transition:background 0.15s;"
                    onmouseenter="this.style.background='var(--accent-hover,#1a8cd8)'"
                    onmouseleave="this.style.background='var(--accent-color,#1d9bf0)'">
                    Open in Tab
                </button>
            </div>
        `,_.appendChild(z);let K=z.querySelector("#csv-open-tab");if(K)K.addEventListener("click",()=>{let X=new CustomEvent("csv-viewer:open-tab",{bubbles:!0,detail:{path:j}});_.dispatchEvent(X)})}getContent(){return}isDirty(){return!1}focus(){}resize(){}dispose(){if(this.disposed)return;this.disposed=!0,this.container.innerHTML=""}}class e8{container;iframe=null;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Z=`/csv-viewer/?path=${encodeURIComponent(j)}`;this.iframe=document.createElement("iframe"),this.iframe.src=Z,this.iframe.style.cssText="width:100%;height:100%;border:none;background:var(--bg-primary,#000);",_.appendChild(this.iframe)}getContent(){return}isDirty(){return!1}focus(){this.iframe?.focus()}resize(){}dispose(){if(this.disposed)return;if(this.disposed=!0,this.iframe)this.iframe.src="about:blank",this.iframe=null;this.container.innerHTML=""}}var f4={id:"csv-viewer",label:"CSV Viewer",icon:"table",capabilities:["readonly","preview"],placement:"tabs",canHandle(_){let $=_?.path||"";if(!i7.test($))return!1;return 55},mount(_,$){if($?.mode==="view")return new t8(_,$);return new e8(_,$)}};var l7=/\.pdf$/i;function n7(_){return _.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}class _6{container;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Z=j.split("/").pop()||"document.pdf",N=document.createElement("div");N.style.cssText="width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:var(--bg-primary,#1a1a1a);",N.innerHTML=`
            <div style="text-align:center;max-width:360px;padding:24px;">
                <div style="font-size:56px;margin-bottom:12px;">\uD83D\uDCC4</div>
                <div style="font-size:14px;font-weight:600;color:var(--text-primary,#e0e0e0);margin-bottom:4px;word-break:break-word;">${n7(Z)}</div>
                <div style="font-size:11px;color:var(--text-secondary,#888);margin-bottom:20px;">PDF Document</div>
                <button id="pdf-open-tab" style="padding:8px 20px;background:var(--accent-color,#1d9bf0);color:var(--accent-contrast-text,#fff);
                    border:none;border-radius:5px;font-size:13px;font-weight:500;cursor:pointer;
                    transition:background 0.15s;"
                    onmouseenter="this.style.background='var(--accent-hover,#1a8cd8)'"
                    onmouseleave="this.style.background='var(--accent-color,#1d9bf0)'">
                    Open in Tab
                </button>
            </div>
        `,_.appendChild(N);let z=N.querySelector("#pdf-open-tab");if(z)z.addEventListener("click",()=>{let K=new CustomEvent("pdf-viewer:open-tab",{bubbles:!0,detail:{path:j}});_.dispatchEvent(K)})}getContent(){return}isDirty(){return!1}focus(){}resize(){}dispose(){if(this.disposed)return;this.disposed=!0,this.container.innerHTML=""}}class $6{container;iframe=null;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Z=`/pdf-viewer/?path=${encodeURIComponent(j)}`;this.iframe=document.createElement("iframe"),this.iframe.src=Z,this.iframe.style.cssText="width:100%;height:100%;border:none;background:#1e1e1e;",_.appendChild(this.iframe)}getContent(){return}isDirty(){return!1}focus(){this.iframe?.focus()}resize(){}dispose(){if(this.disposed)return;if(this.disposed=!0,this.iframe)this.iframe.src="about:blank",this.iframe=null;this.container.innerHTML=""}}var R4={id:"pdf-viewer",label:"PDF Viewer",icon:"file-text",capabilities:["readonly","preview"],placement:"tabs",canHandle(_){let $=_?.path||"";if(!l7.test($))return!1;return 52},mount(_,$){if($?.mode==="view")return new _6(_,$);return new $6(_,$)}};var d7=/\.(png|jpe?g|gif|webp|bmp|ico|svg)$/i;function v4(_){return _.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}class j6{container;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Z=j.split("/").pop()||"image",N=`/workspace/raw?path=${encodeURIComponent(j)}`,z=document.createElement("div");z.style.cssText="width:100%;height:100%;display:flex;flex-direction:column;background:var(--bg-primary,#1a1a1a);",z.innerHTML=`
            <div style="flex:1;min-height:0;display:flex;align-items:center;justify-content:center;overflow:hidden;padding:16px;">
                <img src="${v4(N)}" alt="${v4(Z)}" style="max-width:100%;max-height:100%;object-fit:contain;border-radius:4px;" />
            </div>
            <div style="display:flex;align-items:center;justify-content:space-between;padding:8px 16px;border-top:1px solid var(--border-color,#333);flex-shrink:0;">
                <div style="font-size:12px;color:var(--text-secondary,#888);overflow:hidden;text-overflow:ellipsis;white-space:nowrap;min-width:0;">${v4(Z)}</div>
                <button id="img-open-tab" style="padding:5px 14px;background:var(--accent-color,#1d9bf0);color:var(--accent-contrast-text,#fff);
                    border:none;border-radius:4px;font-size:12px;font-weight:500;cursor:pointer;flex-shrink:0;
                    transition:background 0.15s;"
                    onmouseenter="this.style.background='var(--accent-hover,#1a8cd8)'"
                    onmouseleave="this.style.background='var(--accent-color,#1d9bf0)'">
                    Open in Tab
                </button>
            </div>
        `,_.appendChild(z);let K=z.querySelector("#img-open-tab");if(K)K.addEventListener("click",()=>{let X=new CustomEvent("image-viewer:open-tab",{bubbles:!0,detail:{path:j}});_.dispatchEvent(X)})}getContent(){return}isDirty(){return!1}focus(){}resize(){}dispose(){if(this.disposed)return;this.disposed=!0,this.container.innerHTML=""}}class Z6{container;iframe=null;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Z=`/image-viewer/?path=${encodeURIComponent(j)}`;this.iframe=document.createElement("iframe"),this.iframe.src=Z,this.iframe.style.cssText="width:100%;height:100%;border:none;background:var(--bg-primary,#000);",_.appendChild(this.iframe)}getContent(){return}isDirty(){return!1}focus(){this.iframe?.focus()}resize(){}dispose(){if(this.disposed)return;if(this.disposed=!0,this.iframe)this.iframe.src="about:blank",this.iframe=null;this.container.innerHTML=""}}var u4={id:"image-viewer",label:"Image Viewer",icon:"image",capabilities:["readonly","preview"],placement:"tabs",canHandle(_){let $=_?.path||"";if(!d7.test($))return!1;return 48},mount(_,$){if($?.mode==="view")return new j6(_,$);return new Z6(_,$)}};var o7=/\.(mp4|m4v|mov|webm|ogv)$/i;function s7(_){return _.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}class N6{container;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Z=j.split("/").pop()||"video.mp4",N=document.createElement("div");N.style.cssText="width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:var(--bg-primary,#1a1a1a);",N.innerHTML=`
            <div style="text-align:center;max-width:360px;padding:24px;">
                <div style="font-size:56px;margin-bottom:12px;">\uD83C\uDFAC</div>
                <div style="font-size:14px;font-weight:600;color:var(--text-primary,#e0e0e0);margin-bottom:4px;word-break:break-word;">${s7(Z)}</div>
                <div style="font-size:11px;color:var(--text-secondary,#888);margin-bottom:20px;">Video File</div>
                <button id="video-open-tab" style="padding:8px 20px;background:var(--accent-color,#1d9bf0);color:var(--accent-contrast-text,#fff);
                    border:none;border-radius:5px;font-size:13px;font-weight:500;cursor:pointer;
                    transition:background 0.15s;"
                    onmouseenter="this.style.background='var(--accent-hover,#1a8cd8)'"
                    onmouseleave="this.style.background='var(--accent-color,#1d9bf0)'">
                    Open in Tab
                </button>
            </div>
        `,_.appendChild(N);let z=N.querySelector("#video-open-tab");if(z)z.addEventListener("click",()=>{let K=new CustomEvent("video-viewer:open-tab",{bubbles:!0,detail:{path:j}});_.dispatchEvent(K)})}getContent(){return}isDirty(){return!1}focus(){}resize(){}dispose(){if(this.disposed)return;this.disposed=!0,this.container.innerHTML=""}}class z6{container;iframe=null;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Z=`/video-viewer/?path=${encodeURIComponent(j)}`;this.iframe=document.createElement("iframe"),this.iframe.src=Z,this.iframe.style.cssText="width:100%;height:100%;border:none;background:#111;",_.appendChild(this.iframe)}getContent(){return}isDirty(){return!1}focus(){this.iframe?.focus()}resize(){}dispose(){if(this.disposed)return;if(this.disposed=!0,this.iframe)this.iframe.src="about:blank",this.iframe=null;this.container.innerHTML=""}}var m4={id:"video-viewer",label:"Video Viewer",icon:"play-circle",capabilities:["readonly","preview"],placement:"tabs",canHandle(_){let $=_?.path||"";if(!o7.test($))return!1;return 54},mount(_,$){if($?.mode==="view")return new N6(_,$);return new z6(_,$)}};function r7(_){if(!_)return!1;let $=_.toLowerCase();return $.endsWith(".drawio")||$.endsWith(".drawio.xml")||$.endsWith(".drawio.svg")||$.endsWith(".drawio.png")}function a7(_){return _.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}var g4='<mxfile host="app.diagrams.net"><diagram id="page-1" name="Page-1"><mxGraphModel dx="1260" dy="720" grid="1" gridSize="10" guides="1" tooltips="1" connect="1" arrows="1" fold="1" page="1" pageScale="1" pageWidth="850" pageHeight="1100" math="0" shadow="0"><root><mxCell id="0"/><mxCell id="1" parent="0"/></root></mxGraphModel></diagram></mxfile>';function K6(_){let $=String(_||"").trim();return $?$:g4}function t7(_){let $=String(_||"").toLowerCase();if($.endsWith(".drawio.svg")||$.endsWith(".svg"))return"xmlsvg";if($.endsWith(".drawio.png")||$.endsWith(".png"))return"xmlpng";return"xml"}function e7(_){let $="",j=32768;for(let Z=0;Z<_.length;Z+=j)$+=String.fromCharCode(..._.subarray(Z,Z+j));return btoa($)}function _j(_,$="*"){try{let j=(z)=>{let K=_.parent||_.opener;if(!K)return!1;return K.postMessage(JSON.stringify({event:"workspace-export",...z}),$),!0},Z=_.EditorUi;if(Z?.prototype&&!Z.prototype.__piclawWorkspaceSavePatched){let z=Z.prototype.saveData;Z.prototype.saveData=function(K,X,L,q,B,G){try{if(K&&L!=null&&j({filename:K,format:X,data:L,mimeType:q,base64Encoded:Boolean(B),defaultMode:G}))return}catch(F){console.warn("[drawio-pane] saveData intercept failed, falling back to native save",F)}return z.apply(this,arguments)},Z.prototype.__piclawWorkspaceSavePatched=!0}let N=_.App;if(N?.prototype&&!N.prototype.__piclawExportPatched){let z=N.prototype.exportFile;N.prototype.exportFile=function(K,X,L,q,B,G){try{if(X&&j({filename:X,data:K,mimeType:L,base64Encoded:Boolean(q),mode:B,folderId:G}))return}catch(F){console.warn("[drawio-pane] export intercept failed, falling back to native export",F)}return z.apply(this,arguments)},N.prototype.__piclawExportPatched=!0}return Boolean(Z?.prototype&&Z.prototype.__piclawWorkspaceSavePatched||N?.prototype&&N.prototype.__piclawExportPatched)}catch{return!1}}async function Y6(_,$){let j=new Uint8Array(await _.arrayBuffer());return`data:${_.headers.get("Content-Type")||$};base64,${e7(j)}`}class W6{container;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Z=j.split("/").pop()||"diagram.drawio",N=document.createElement("div");N.style.cssText="width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:var(--bg-primary,#1a1a1a);",N.innerHTML=`
            <div style="text-align:center;max-width:360px;padding:24px;">
                <div style="font-size:56px;margin-bottom:12px;">\uD83D\uDCD0</div>
                <div style="font-size:14px;font-weight:600;color:var(--text-primary,#e0e0e0);margin-bottom:4px;word-break:break-word;">${a7(Z)}</div>
                <div style="font-size:11px;color:var(--text-secondary,#888);margin-bottom:20px;">Draw.io Diagram</div>
                <button id="drawio-open-tab" style="padding:8px 20px;background:var(--accent-color,#1d9bf0);color:var(--accent-contrast-text,#fff);
                    border:none;border-radius:5px;font-size:13px;font-weight:500;cursor:pointer;
                    transition:background 0.15s;"
                    onmouseenter="this.style.background='var(--accent-hover,#1a8cd8)'"
                    onmouseleave="this.style.background='var(--accent-color,#1d9bf0)'">
                    Edit in Tab
                </button>
            </div>
        `,_.appendChild(N);let z=N.querySelector("#drawio-open-tab");if(z)z.addEventListener("click",()=>{let K=new CustomEvent("drawio:open-tab",{bubbles:!0,detail:{path:j}});_.dispatchEvent(K)})}getContent(){return}isDirty(){return!1}focus(){}resize(){}dispose(){if(this.disposed)return;this.disposed=!0,this.container.innerHTML=""}}class G6{container;iframe=null;overlay=null;disposed=!1;filePath;fileName;format;xmlData="";fileLoaded=!1;editorReady=!1;loadSent=!1;saveChain=Promise.resolve();onMessageBound;constructor(_,$){this.container=_,this.filePath=$.path||"",this.fileName=this.filePath.split("/").pop()||"diagram.drawio",this.format=t7(this.filePath),this.onMessageBound=this.onMessage.bind(this);let j=document.createElement("div");j.style.cssText="position:relative;width:100%;height:100%;background:#1e1e1e;",this.overlay=document.createElement("div"),this.overlay.style.cssText="position:absolute;inset:0;display:flex;align-items:center;justify-content:center;color:#999;font:14px system-ui,sans-serif;z-index:1;pointer-events:none;",this.overlay.textContent="Loading draw.io editor…",j.appendChild(this.overlay);let N=`/drawio/index.html?embed=1&proto=json&spin=1&modified=0&noSaveBtn=1&noExitBtn=1&saveAndExit=0&ui=dark&dark=${window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?"1":"0"}`;this.iframe=document.createElement("iframe"),this.iframe.src=N,this.iframe.style.cssText="width:100%;height:100%;border:none;background:#1e1e1e;position:relative;z-index:0;",this.iframe.addEventListener("load",()=>{let z=()=>{if(!this.iframe?.contentWindow||this.disposed)return;if(_j(this.iframe.contentWindow))return;setTimeout(z,250)};z()}),j.appendChild(this.iframe),_.appendChild(j),window.addEventListener("message",this.onMessageBound),this.loadFile()}async loadFile(){if(!this.filePath){this.xmlData=g4,this.fileLoaded=!0,this.trySendLoad();return}try{let _=await fetch(`/workspace/raw?path=${encodeURIComponent(this.filePath)}`);if(_.ok)if(this.format==="xmlsvg")this.xmlData=await Y6(_,"image/svg+xml");else if(this.format==="xmlpng")this.xmlData=await Y6(_,"image/png");else this.xmlData=K6(await _.text());else if(_.status===404)this.xmlData=g4;else throw Error(`HTTP ${_.status}`);this.fileLoaded=!0,this.trySendLoad()}catch(_){if(this.overlay)this.overlay.textContent=`Failed to load: ${_ instanceof Error?_.message:String(_)}`}}trySendLoad(){if(this.disposed||this.loadSent||!this.editorReady||!this.fileLoaded||!this.iframe?.contentWindow)return;if(this.loadSent=!0,this.iframe.contentWindow.postMessage(JSON.stringify({action:"load",xml:this.format==="xml"?K6(this.xmlData):this.xmlData,autosave:1,saveAndExit:"0",noSaveBtn:"1",noExitBtn:"1",title:this.fileName}),"*"),this.overlay)this.overlay.style.display="none"}queueSave(_,$){if(!this.filePath)return;this.saveChain=this.saveChain.then(async()=>{let j=await fetch("/drawio/save",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({path:this.filePath,format:_.format||this.format,xml:_.xml,data:_.data,mimeType:_.mimeType,filename:_.filename,base64Encoded:_.base64Encoded})});if(!j.ok)throw Error(`HTTP ${j.status}`);if($&&this.iframe?.contentWindow)this.iframe.contentWindow.postMessage(JSON.stringify({action:"status",message:"Saved",modified:!1}),"*")}).catch((j)=>{if(console.error("[drawio-pane] save failed:",j),this.overlay)this.overlay.style.display="flex",this.overlay.textContent=`Save failed: ${j instanceof Error?j.message:String(j)}`})}onMessage(_){if(this.disposed||_.source!==this.iframe?.contentWindow)return;let $;try{$=typeof _.data==="string"?JSON.parse(_.data):_.data}catch{return}switch($?.event){case"init":this.editorReady=!0,this.trySendLoad();break;case"autosave":if(this.format==="xml"){if(typeof $.xml==="string")this.queueSave({xml:$.xml,format:"xml"},!1)}else if(typeof $.xml==="string")this.xmlData=$.xml;break;case"save":if(this.format==="xml"){if(typeof $.xml==="string")this.queueSave({xml:$.xml,format:"xml"},!0)}else if(typeof $.xml==="string"&&this.iframe?.contentWindow)this.xmlData=$.xml,this.iframe.contentWindow.postMessage(JSON.stringify({action:"export",format:this.format,xml:$.xml,spinKey:"export"}),"*");break;case"export":if(typeof $.data==="string")this.queueSave({data:$.data,format:this.format,xml:typeof $.xml==="string"?$.xml:void 0},!0);break;case"workspace-export":if(typeof $.data==="string")this.queueSave({data:$.data,xml:typeof $.xml==="string"?$.xml:void 0,mimeType:typeof $.mimeType==="string"?$.mimeType:void 0,filename:typeof $.filename==="string"?$.filename:void 0,base64Encoded:Boolean($.base64Encoded),format:this.format},!0);break;case"exit":default:break}}getContent(){return}isDirty(){return!1}focus(){this.iframe?.focus()}resize(){}dispose(){if(this.disposed)return;if(this.disposed=!0,window.removeEventListener("message",this.onMessageBound),this.iframe)this.iframe.src="about:blank",this.iframe=null;this.overlay=null,this.container.innerHTML=""}}var p4={id:"drawio-editor",label:"Draw.io Editor",icon:"git-merge",capabilities:["edit","preview"],placement:"tabs",canHandle(_){if(!r7(_?.path))return!1;return 60},mount(_,$){if($?.mode==="view")return new W6(_,$);return new G6(_,$)}};class V6{tabs=new Map;activeId=null;mruOrder=[];listeners=new Set;onChange(_){return this.listeners.add(_),()=>this.listeners.delete(_)}notify(){let _=this.getTabs(),$=this.activeId;for(let j of this.listeners)try{j(_,$)}catch{}}open(_,$){let j=this.tabs.get(_);if(!j)j={id:_,label:$||_.split("/").pop()||_,path:_,dirty:!1,pinned:!1},this.tabs.set(_,j);return this.activate(_),j}activate(_){if(!this.tabs.has(_))return;this.activeId=_,this.mruOrder=[_,...this.mruOrder.filter(($)=>$!==_)],this.notify()}close(_){if(!this.tabs.get(_))return!1;if(this.tabs.delete(_),this.mruOrder=this.mruOrder.filter((j)=>j!==_),this.activeId===_)this.activeId=this.mruOrder[0]||null;return this.notify(),!0}closeOthers(_){for(let[$,j]of this.tabs)if($!==_&&!j.pinned)this.tabs.delete($),this.mruOrder=this.mruOrder.filter((Z)=>Z!==$);if(this.activeId&&!this.tabs.has(this.activeId))this.activeId=_;this.notify()}closeAll(){for(let[_,$]of this.tabs)if(!$.pinned)this.tabs.delete(_),this.mruOrder=this.mruOrder.filter((j)=>j!==_);if(this.activeId&&!this.tabs.has(this.activeId))this.activeId=this.mruOrder[0]||null;this.notify()}setDirty(_,$){let j=this.tabs.get(_);if(!j||j.dirty===$)return;j.dirty=$,this.notify()}togglePin(_){let $=this.tabs.get(_);if(!$)return;$.pinned=!$.pinned,this.notify()}saveViewState(_,$){let j=this.tabs.get(_);if(j)j.viewState=$}getViewState(_){return this.tabs.get(_)?.viewState}rename(_,$,j){let Z=this.tabs.get(_);if(!Z)return;if(this.tabs.delete(_),Z.id=$,Z.path=$,Z.label=j||$.split("/").pop()||$,this.tabs.set($,Z),this.mruOrder=this.mruOrder.map((N)=>N===_?$:N),this.activeId===_)this.activeId=$;this.notify()}getTabs(){return Array.from(this.tabs.values())}getActiveId(){return this.activeId}getActive(){return this.activeId?this.tabs.get(this.activeId)||null:null}get(_){return this.tabs.get(_)}get size(){return this.tabs.size}hasUnsaved(){for(let _ of this.tabs.values())if(_.dirty)return!0;return!1}getDirtyTabs(){return Array.from(this.tabs.values()).filter((_)=>_.dirty)}nextTab(){let _=this.getTabs();if(_.length<=1)return;let $=_.findIndex((Z)=>Z.id===this.activeId),j=_[($+1)%_.length];this.activate(j.id)}prevTab(){let _=this.getTabs();if(_.length<=1)return;let $=_.findIndex((Z)=>Z.id===this.activeId),j=_[($-1+_.length)%_.length];this.activate(j.id)}mruSwitch(){if(this.mruOrder.length>1)this.activate(this.mruOrder[1])}}var p_=new V6;var H1="workspaceExplorerScale",$j=["compact","default","comfortable"],jj=new Set($j),Zj={compact:{indentPx:14},default:{indentPx:16},comfortable:{indentPx:18}};function X6(_,$="default"){if(typeof _!=="string")return $;let j=_.trim().toLowerCase();return jj.has(j)?j:$}function c4(){if(typeof window>"u")return{width:0,isTouch:!1};let _=Number(window.innerWidth)||0,$=Boolean(window.matchMedia?.("(pointer: coarse)")?.matches),j=Boolean(window.matchMedia?.("(hover: none)")?.matches),Z=Number(globalThis.navigator?.maxTouchPoints||0)>0;return{width:_,isTouch:$||Z&&j}}function Nj(_={}){let $=Math.max(0,Number(_.width)||0);if(Boolean(_.isTouch))return"comfortable";if($>0&&$<1180)return"comfortable";return"default"}function zj(_,$={}){if(Boolean($.isTouch)&&_==="compact")return"default";return _}function h4(_={}){let $=Nj(_),j=_.stored?X6(_.stored,$):$;return zj(j,_)}function q6(_){return Zj[X6(_)]}var Kj=60000,O6=(_)=>{if(!_||!_.name)return!1;if(_.path===".")return!1;return _.name.startsWith(".")};function U6(_,$,j,Z=0,N=[]){if(!j&&O6(_))return N;if(!_)return N;if(N.push({node:_,depth:Z}),_.type==="dir"&&_.children&&$.has(_.path))for(let z of _.children)U6(z,$,j,Z+1,N);return N}function L6(_,$,j){if(!_)return"";let Z=[],N=(z)=>{if(!j&&O6(z))return;if(Z.push(z.type==="dir"?`d:${z.path}`:`f:${z.path}`),z.children&&$?.has(z.path))for(let K of z.children)N(K)};return N(_),Z.join("|")}function d4(_,$){if(!$)return null;if(!_)return $;if(_.path!==$.path||_.type!==$.type)return $;let j=Array.isArray(_.children)?_.children:null,Z=Array.isArray($.children)?$.children:null;if(!Z)return _;let N=j?new Map(j.map((X)=>[X?.path,X])):new Map,z=!j||j.length!==Z.length,K=Z.map((X)=>{let L=d4(N.get(X.path),X);if(L!==N.get(X.path))z=!0;return L});return z?{...$,children:K}:_}function l4(_,$,j){if(!_)return _;if(_.path===$)return d4(_,j);if(!Array.isArray(_.children))return _;let Z=!1,N=_.children.map((z)=>{let K=l4(z,$,j);if(K!==z)Z=!0;return K});return Z?{..._,children:N}:_}var F6=4,i4=14,Yj=8,Wj=16;function H6(_){if(!_)return 0;if(_.type==="file"){let Z=Math.max(0,Number(_.size)||0);return _.__bytes=Z,Z}let $=Array.isArray(_.children)?_.children:[],j=0;for(let Z of $)j+=H6(Z);return _.__bytes=j,j}function J6(_,$=0){let j=Math.max(0,Number(_?.__bytes??_?.size??0)),Z={name:_?.name||_?.path||".",path:_?.path||".",size:j,children:[]};if(!_||_.type!=="dir"||$>=F6)return Z;let N=Array.isArray(_.children)?_.children:[],z=[];for(let X of N){let L=Math.max(0,Number(X?.__bytes??X?.size??0));if(L<=0)continue;if(X.type==="dir")z.push({kind:"dir",node:X,size:L});else z.push({kind:"file",name:X.name,path:X.path,size:L})}z.sort((X,L)=>L.size-X.size);let K=z;if(z.length>i4){let X=z.slice(0,i4-1),L=z.slice(i4-1),q=L.reduce((B,G)=>B+G.size,0);X.push({kind:"other",name:`+${L.length} more`,path:`${Z.path}/[other]`,size:q}),K=X}return Z.children=K.map((X)=>{if(X.kind==="dir")return J6(X.node,$+1);return{name:X.name,path:X.path,size:X.size,children:[]}}),Z}function B6(){if(typeof window>"u"||typeof document>"u")return!1;let{documentElement:_,body:$}=document,j=_?.getAttribute?.("data-theme")?.toLowerCase?.()||"";if(j==="dark")return!0;if(j==="light")return!1;if(_?.classList?.contains("dark")||$?.classList?.contains("dark"))return!0;if(_?.classList?.contains("light")||$?.classList?.contains("light"))return!1;return Boolean(window.matchMedia?.("(prefers-color-scheme: dark)")?.matches)}function D6(_,$,j){let Z=((_+Math.PI/2)*180/Math.PI+360)%360,N=j?Math.max(30,70-$*10):Math.max(34,66-$*8),z=j?Math.min(70,45+$*5):Math.min(60,42+$*4);return`hsl(${Z.toFixed(1)} ${N}% ${z}%)`}function J1(_,$,j,Z){return{x:_+j*Math.cos(Z),y:$+j*Math.sin(Z)}}function o4(_,$,j,Z,N,z){let K=Math.PI*2-0.0001,X=z-N>K?N+K:z,L=J1(_,$,Z,N),q=J1(_,$,Z,X),B=J1(_,$,j,X),G=J1(_,$,j,N),F=X-N>Math.PI?1:0;return[`M ${L.x.toFixed(3)} ${L.y.toFixed(3)}`,`A ${Z} ${Z} 0 ${F} 1 ${q.x.toFixed(3)} ${q.y.toFixed(3)}`,`L ${B.x.toFixed(3)} ${B.y.toFixed(3)}`,`A ${j} ${j} 0 ${F} 0 ${G.x.toFixed(3)} ${G.y.toFixed(3)}`,"Z"].join(" ")}var E6={1:[26,46],2:[48,68],3:[70,90],4:[92,112]};function y6(_,$,j){let Z=[],N=[],z=Math.max(0,Number($)||0),K=(X,L,q,B)=>{let G=Array.isArray(X?.children)?X.children:[];if(!G.length)return;let F=Math.max(0,Number(X.size)||0);if(F<=0)return;let b=q-L,g=L;G.forEach((u,f)=>{let w=Math.max(0,Number(u.size)||0);if(w<=0)return;let H=w/F,x=g,I=f===G.length-1?q:g+b*H;if(g=I,I-x<0.003)return;let i=E6[B];if(i){let n=D6(x,B,j);if(Z.push({key:u.path,path:u.path,label:u.name,size:w,color:n,depth:B,startAngle:x,endAngle:I,innerRadius:i[0],outerRadius:i[1],d:o4(120,120,i[0],i[1],x,I)}),B===1)N.push({key:u.path,name:u.name,size:w,pct:z>0?w/z*100:0,color:n})}if(B<F6)K(u,x,I,B+1)})};return K(_,-Math.PI/2,Math.PI*3/2,1),{segments:Z,legend:N}}function n4(_,$){if(!_||!$)return null;if(_.path===$)return _;let j=Array.isArray(_.children)?_.children:[];for(let Z of j){let N=n4(Z,$);if(N)return N}return null}function k6(_,$,j,Z){if(!j||j<=0)return{segments:[],legend:[]};let N=E6[1];if(!N)return{segments:[],legend:[]};let z=-Math.PI/2,K=Math.PI*3/2,X=D6(z,1,Z),q=`${$||"."}/[files]`;return{segments:[{key:q,path:q,label:_,size:j,color:X,depth:1,startAngle:z,endAngle:K,innerRadius:N[0],outerRadius:N[1],d:o4(120,120,N[0],N[1],z,K)}],legend:[{key:q,name:_,size:j,pct:100,color:X}]}}function Q6(_,$=!1,j=!1){if(!_)return null;let Z=H6(_),N=J6(_,0),z=N.size||Z,{segments:K,legend:X}=y6(N,z,j);if(!K.length&&z>0){let L=k6("[files]",N.path,z,j);K=L.segments,X=L.legend}return{root:N,totalSize:z,segments:K,legend:X,truncated:$,isDarkTheme:j}}function Gj({payload:_}){if(!_)return null;let[$,j]=S(null),[Z,N]=S(_?.root?.path||"."),[z,K]=S(()=>[_?.root?.path||"."]),[X,L]=S(!1);R(()=>{let p=_?.root?.path||".";N(p),K([p]),j(null)},[_?.root?.path,_?.totalSize]),R(()=>{if(!Z)return;L(!0);let p=setTimeout(()=>L(!1),180);return()=>clearTimeout(p)},[Z]);let q=n_(()=>{return n4(_.root,Z)||_.root},[_?.root,Z]),B=q?.size||_.totalSize||0,{segments:G,legend:F}=n_(()=>{let p=y6(q,B,_.isDarkTheme);if(p.segments.length>0)return p;if(B<=0)return p;let q_=q?.children?.length?"Total":"[files]";return k6(q_,q?.path||_?.root?.path||".",B,_.isDarkTheme)},[q,B,_.isDarkTheme,_?.root?.path]),[b,g]=S(G),u=y(new Map),f=y(0);R(()=>{let p=u.current,q_=new Map(G.map((Z_)=>[Z_.key,Z_])),c_=performance.now(),__=220,t=(Z_)=>{let $_=Math.min(1,(Z_-c_)/220),Q_=$_*(2-$_),b_=G.map((W_)=>{let O_=p.get(W_.key)||{startAngle:W_.startAngle,endAngle:W_.startAngle,innerRadius:W_.innerRadius,outerRadius:W_.innerRadius},F_=(F0,G_)=>F0+(G_-F0)*Q_,v_=F_(O_.startAngle,W_.startAngle),D_=F_(O_.endAngle,W_.endAngle),I_=F_(O_.innerRadius,W_.innerRadius),j0=F_(O_.outerRadius,W_.outerRadius);return{...W_,d:o4(120,120,I_,j0,v_,D_)}});if(g(b_),$_<1)f.current=requestAnimationFrame(t)};if(f.current)cancelAnimationFrame(f.current);return f.current=requestAnimationFrame(t),u.current=q_,()=>{if(f.current)cancelAnimationFrame(f.current)}},[G]);let w=b.length?b:G,H=B>0?z$(B):"0 B",x=q?.name||"",i=(x&&x!=="."?x:"Total")||"Total",n=H,e=z.length>1,d=(p)=>{if(!p?.path)return;let q_=n4(_.root,p.path);if(!q_||!Array.isArray(q_.children)||q_.children.length===0)return;K((c_)=>[...c_,q_.path]),N(q_.path),j(null)},N_=()=>{if(!e)return;K((p)=>{let q_=p.slice(0,-1);return N(q_[q_.length-1]||_?.root?.path||"."),q_}),j(null)};return U`
        <div class="workspace-folder-starburst">
            <svg viewBox="0 0 240 240" class=${`workspace-folder-starburst-svg${X?" is-zooming":""}`} role="img"
                aria-label=${`Folder sizes for ${q?.path||_?.root?.path||"."}`}
                data-segments=${w.length}
                data-base-size=${B}>
                ${w.map((p)=>U`
                    <path
                        key=${p.key}
                        d=${p.d}
                        fill=${p.color}
                        stroke="var(--bg-primary)"
                        stroke-width="1"
                        class=${`workspace-folder-starburst-segment${$?.key===p.key?" is-hovered":""}`}
                        onMouseEnter=${()=>j(p)}
                        onMouseLeave=${()=>j(null)}
                        onTouchStart=${()=>j(p)}
                        onTouchEnd=${()=>j(null)}
                        onClick=${()=>d(p)}
                    >
                        <title>${p.label} — ${z$(p.size)}</title>
                    </path>
                `)}
                <g
                    class=${`workspace-folder-starburst-center-hit${e?" is-drill":""}`}
                    onClick=${N_}
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
                    <text x="120" y="114" text-anchor="middle" class="workspace-folder-starburst-total-label">${i}</text>
                    <text x="120" y="130" text-anchor="middle" class="workspace-folder-starburst-total-value">${n}</text>
                </g>
            </svg>
            ${F.length>0&&U`
                <div class="workspace-folder-starburst-legend">
                    ${F.slice(0,8).map((p)=>U`
                        <div key=${p.key} class="workspace-folder-starburst-legend-item">
                            <span class="workspace-folder-starburst-swatch" style=${`background:${p.color}`}></span>
                            <span class="workspace-folder-starburst-name" title=${p.name}>${p.name}</span>
                            <span class="workspace-folder-starburst-size">${z$(p.size)}</span>
                            <span class="workspace-folder-starburst-pct">${p.pct.toFixed(1)}%</span>
                        </div>
                    `)}
                </div>
            `}
            ${_.truncated&&U`
                <div class="workspace-folder-starburst-note">Preview is truncated by tree depth/entry limits.</div>
            `}
        </div>
    `}function Vj({mediaId:_}){let[$,j]=S(null);if(R(()=>{if(!_)return;D2(_).then(j).catch(()=>{})},[_]),!$)return null;let Z=$.filename||"file",N=$.metadata?.size?z$($.metadata.size):"";return U`
        <a href=${Z$(_)} download=${Z} class="file-attachment"
            onClick=${(z)=>z.stopPropagation()}>
            <svg class="file-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                <polyline points="14 2 14 8 20 8"/>
                <line x1="16" y1="13" x2="8" y2="13"/>
                <line x1="16" y1="17" x2="8" y2="17"/>
                <polyline points="10 9 9 9 8 9"/>
            </svg>
            <div class="file-info">
                <span class="file-name">${Z}</span>
                ${N&&U`<span class="file-size">${N}</span>`}
            </div>
            <svg class="download-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                <polyline points="7 10 12 15 17 10"/>
                <line x1="12" y1="15" x2="12" y2="3"/>
            </svg>
        </a>
    `}function w6({onFileSelect:_,visible:$=!0,active:j=void 0,onOpenEditor:Z,onOpenTerminalTab:N,onToggleTerminal:z,terminalVisible:K=!1}){let[X,L]=S(null),[q,B]=S(new Set(["."])),[G,F]=S(null),[b,g]=S(null),[u,f]=S(""),[w,H]=S(null),[x,I]=S(null),[i,n]=S(!0),[e,d]=S(!1),[N_,p]=S(null),[q_,c_]=S(()=>E2("workspaceShowHidden",!1)),[__,t]=S(!1),[Z_,$_]=S(null),[Q_,b_]=S(null),[W_,k_]=S(null),[O_,F_]=S(!1),[v_,D_]=S(null),[I_,j0]=S(()=>B6()),[F0,G_]=S(()=>h4({stored:N$(H1),...c4()})),[a,H_]=S(!1),K_=y(q),A_=y(""),u_=y(null),h_=y(0),t_=y(new Set),i_=y(null),E_=y(new Map),J_=y(_),o_=y(Z),e_=y(null),g_=y(null),m_=y(null),V0=y(null),_0=y(null),g0=y(null),X0=y("."),x_=y(null),C_=y({path:null,dragging:!1,startX:0,startY:0}),y_=y({path:null,dragging:!1,startX:0,startY:0}),k0=y({path:null,timer:0}),B0=y(!1),P_=y(0),l_=y(new Map),s_=y(null),T_=y(null),Q0=y(null),T0=y(null),d0=y(null),T=y(null),s=y(q_),z_=y($),U_=y(j??$),X_=y(0),S_=y(W_),R0=y(__),J$=y(Z_),Y$=y(null),T$=y({x:0,y:0}),w0=y(0),q$=y(null),Z0=y(G),b0=y(b),L$=y(null),o0=y(null),S0=y(w);J_.current=_,o_.current=Z,R(()=>{K_.current=q},[q]),R(()=>{s.current=q_},[q_]),R(()=>{z_.current=$},[$]),R(()=>{U_.current=j??$},[j,$]),R(()=>{S_.current=W_},[W_]),R(()=>{if(typeof window>"u")return;let Y=()=>{G_(h4({stored:N$(H1),...c4()}))};Y();let O=()=>Y(),D=()=>Y(),E=(m)=>{if(!m||m.key===null||m.key===H1)Y()};window.addEventListener("resize",O),window.addEventListener("focus",D),window.addEventListener("storage",E);let C=window.matchMedia?.("(pointer: coarse)"),l=window.matchMedia?.("(hover: none)"),o=(m,Y_)=>{if(!m)return;if(m.addEventListener)m.addEventListener("change",Y_);else if(m.addListener)m.addListener(Y_)},c=(m,Y_)=>{if(!m)return;if(m.removeEventListener)m.removeEventListener("change",Y_);else if(m.removeListener)m.removeListener(Y_)};return o(C,O),o(l,O),()=>{window.removeEventListener("resize",O),window.removeEventListener("focus",D),window.removeEventListener("storage",E),c(C,O),c(l,O)}},[]),R(()=>{let Y=(O)=>{let D=O?.detail?.path;if(!D)return;let E=D.split("/"),C=[];for(let l=1;l<E.length;l++)C.push(E.slice(0,l).join("/"));if(C.length)B((l)=>{let o=new Set(l);o.add(".");for(let c of C)o.add(c);return o});F(D),requestAnimationFrame(()=>{let l=document.querySelector(`[data-path="${CSS.escape(D)}"]`);if(l)l.scrollIntoView({block:"nearest",behavior:"smooth"})})};return window.addEventListener("workspace-reveal-path",Y),()=>window.removeEventListener("workspace-reveal-path",Y)},[]),R(()=>{R0.current=__},[__]),R(()=>{J$.current=Z_},[Z_]),R(()=>{Z0.current=G},[G]),R(()=>{b0.current=b},[b]),R(()=>{S0.current=w},[w]),R(()=>{if(typeof window>"u"||typeof document>"u")return;let Y=()=>j0(B6());Y();let O=window.matchMedia?.("(prefers-color-scheme: dark)"),D=()=>Y();if(O?.addEventListener)O.addEventListener("change",D);else if(O?.addListener)O.addListener(D);let E=typeof MutationObserver<"u"?new MutationObserver(()=>Y()):null;if(E?.observe(document.documentElement,{attributes:!0,attributeFilter:["class","data-theme"]}),document.body)E?.observe(document.body,{attributes:!0,attributeFilter:["class","data-theme"]});return()=>{if(O?.removeEventListener)O.removeEventListener("change",D);else if(O?.removeListener)O.removeListener(D);E?.disconnect()}},[]),R(()=>{if(!b)return;let Y=_0.current;if(!Y)return;let O=requestAnimationFrame(()=>{try{Y.focus(),Y.select()}catch{}});return()=>cancelAnimationFrame(O)},[b]),R(()=>{if(!a)return;let Y=(D)=>{let E=D?.target;if(!(E instanceof Element))return;if(d0.current?.contains(E))return;if(T.current?.contains(E))return;H_(!1)},O=(D)=>{if(D?.key==="Escape")H_(!1),T.current?.focus?.()};return document.addEventListener("mousedown",Y),document.addEventListener("touchstart",Y,{passive:!0}),document.addEventListener("keydown",O),()=>{document.removeEventListener("mousedown",Y),document.removeEventListener("touchstart",Y),document.removeEventListener("keydown",O)}},[a]);let s$=async(Y)=>{d(!0),H(null),I(null);try{let O=await j4(Y,20000);H(O)}catch(O){H({error:O.message||"Failed to load preview"})}finally{d(!1)}};e_.current=s$;let H0=async()=>{if(!z_.current)return;try{let Y=await f2("",1,s.current),O=L6(Y.root,K_.current,s.current);if(O===A_.current){n(!1);return}if(A_.current=O,u_.current=Y.root,!h_.current)h_.current=requestAnimationFrame(()=>{h_.current=0,L((D)=>d4(D,u_.current)),n(!1)})}catch(Y){p(Y.message||"Failed to load workspace"),n(!1)}},D$=async(Y)=>{if(!Y)return;if(t_.current.has(Y))return;t_.current.add(Y);try{let O=await f2(Y,1,s.current);L((D)=>l4(D,Y,O.root))}catch(O){p(O.message||"Failed to load workspace")}finally{t_.current.delete(Y)}};g_.current=D$;let N0=M(()=>{let Y=G;if(!Y)return".";let O=E_.current?.get(Y);if(O&&O.type==="dir")return O.path;if(Y==="."||!Y.includes("/"))return".";let D=Y.split("/");return D.pop(),D.join("/")||"."},[G]),W$=M((Y)=>{let O=Y?.closest?.(".workspace-row");if(!O)return null;let D=O.dataset.path,E=O.dataset.type;if(!D)return null;if(E==="dir")return D;if(D.includes("/")){let C=D.split("/");return C.pop(),C.join("/")||"."}return"."},[]),B$=M((Y)=>{return W$(Y?.target||null)},[W$]),A0=M((Y)=>{S_.current=Y,k_(Y)},[]),f0=M(()=>{let Y=k0.current;if(Y?.timer)clearTimeout(Y.timer);k0.current={path:null,timer:0}},[]),s0=M((Y)=>{if(!Y||Y==="."){f0();return}let O=E_.current?.get(Y);if(!O||O.type!=="dir"){f0();return}if(K_.current?.has(Y)){f0();return}if(k0.current?.path===Y)return;f0();let D=setTimeout(()=>{k0.current={path:null,timer:0},g_.current?.(Y),B((E)=>{let C=new Set(E);return C.add(Y),C})},600);k0.current={path:Y,timer:D}},[f0]),Q$=M((Y,O)=>{if(T$.current={x:Y,y:O},w0.current)return;w0.current=requestAnimationFrame(()=>{w0.current=0;let D=Y$.current;if(!D)return;let E=T$.current;D.style.transform=`translate(${E.x+12}px, ${E.y+12}px)`})},[]),E$=M((Y)=>{if(!Y)return;let D=(E_.current?.get(Y)?.name||Y.split("/").pop()||Y).trim();if(!D)return;b_({path:Y,label:D})},[]),S$=M(()=>{if(b_(null),w0.current)cancelAnimationFrame(w0.current),w0.current=0;if(Y$.current)Y$.current.style.transform="translate(-9999px, -9999px)"},[]),f$=M((Y)=>{if(!Y)return".";let O=E_.current?.get(Y);if(O&&O.type==="dir")return O.path;if(Y==="."||!Y.includes("/"))return".";let D=Y.split("/");return D.pop(),D.join("/")||"."},[]),J0=M(()=>{g(null),f("")},[]),O$=M((Y)=>{if(!Y)return;let D=(E_.current?.get(Y)?.name||Y.split("/").pop()||Y).trim();if(!D||Y===".")return;g(Y),f(D)},[]),r0=M(async()=>{let Y=b0.current;if(!Y)return;let O=(u||"").trim();if(!O){J0();return}let D=E_.current?.get(Y),E=(D?.name||Y.split("/").pop()||Y).trim();if(O===E){J0();return}try{let l=(await z4(Y,O))?.path||Y,o=Y.includes("/")?Y.split("/").slice(0,-1).join("/")||".":".";if(J0(),p(null),window.dispatchEvent(new CustomEvent("workspace-file-renamed",{detail:{oldPath:Y,newPath:l,type:D?.type||"file"}})),D?.type==="dir")B((c)=>{let m=new Set;for(let Y_ of c)if(Y_===Y)m.add(l);else if(Y_.startsWith(`${Y}/`))m.add(`${l}${Y_.slice(Y.length)}`);else m.add(Y_);return m});if(F(l),D?.type==="dir")H(null),d(!1),I(null);else e_.current?.(l);g_.current?.(o)}catch(C){p(C?.message||"Failed to rename file")}},[J0,u]),I0=M(async(Y)=>{let E=Y||".";for(let C=0;C<50;C+=1){let o=`untitled${C===0?"":`-${C}`}.md`;try{let m=(await N4(E,o,""))?.path||(E==="."?o:`${E}/${o}`);if(E&&E!==".")B((Y_)=>new Set([...Y_,E]));F(m),p(null),g_.current?.(E),e_.current?.(m);return}catch(c){if(c?.status===409||c?.code==="file_exists")continue;p(c?.message||"Failed to create file");return}}p("Failed to create file (untitled name already in use).")},[]),z0=M((Y)=>{if(Y?.stopPropagation?.(),O_)return;let O=f$(Z0.current);I0(O)},[O_,f$,I0]);R(()=>{if(typeof window>"u")return;let Y=(O)=>{let D=O?.detail?.updates||[];if(!Array.isArray(D)||D.length===0)return;L((c)=>{let m=c;for(let Y_ of D){if(!Y_?.root)continue;if(!m||Y_.path==="."||!Y_.path)m=Y_.root;else m=l4(m,Y_.path,Y_.root)}if(m)A_.current=L6(m,K_.current,s.current);return n(!1),m});let E=Z0.current;if(Boolean(E)&&D.some((c)=>{let m=c?.path||"";if(!m||m===".")return!0;return E===m||E.startsWith(`${m}/`)||m.startsWith(`${E}/`)}))l_.current.clear();if(!E||!S0.current)return;let l=E_.current?.get(E);if(l&&l.type==="dir")return;if(D.some((c)=>{let m=c?.path||"";if(!m||m===".")return!0;return E===m||E.startsWith(`${m}/`)}))e_.current?.(E)};return window.addEventListener("workspace-update",Y),()=>window.removeEventListener("workspace-update",Y)},[]),i_.current=H0;let q2=y(()=>{if(typeof window>"u")return;let Y=window.matchMedia("(min-width: 1024px) and (orientation: landscape)"),O=U_.current??z_.current,D=document.visibilityState!=="hidden"&&(O||Y.matches&&z_.current);R2(D,s.current).catch(()=>{})}).current,x0=y(0),y$=y(()=>{if(x0.current)clearTimeout(x0.current);x0.current=setTimeout(()=>{x0.current=0,q2()},250)}).current;R(()=>{if(z_.current)i_.current?.();y$()},[$,j]),R(()=>{i_.current(),q2();let Y=setInterval(()=>i_.current(),Kj),O=y2("previewHeight",null),D=Number.isFinite(O)?Math.min(Math.max(O,80),600):280;if(P_.current=D,m_.current)m_.current.style.setProperty("--preview-height",`${D}px`);let E=window.matchMedia("(min-width: 1024px) and (orientation: landscape)"),C=()=>y$();if(E.addEventListener)E.addEventListener("change",C);else if(E.addListener)E.addListener(C);return document.addEventListener("visibilitychange",C),()=>{if(clearInterval(Y),h_.current)cancelAnimationFrame(h_.current),h_.current=0;if(E.removeEventListener)E.removeEventListener("change",C);else if(E.removeListener)E.removeListener(C);if(document.removeEventListener("visibilitychange",C),x0.current)clearTimeout(x0.current),x0.current=0;if(x_.current)clearTimeout(x_.current),x_.current=null;R2(!1,s.current).catch(()=>{})}},[]);let G$=n_(()=>U6(X,q,q_),[X,q,q_]),k$=n_(()=>new Map(G$.map((Y)=>[Y.node.path,Y.node])),[G$]),w$=n_(()=>q6(F0),[F0]);E_.current=k$;let M_=(G?E_.current.get(G):null)?.type==="dir";R(()=>{if(!G||!M_){D_(null),s_.current=null,T_.current=null;return}let Y=G,O=`${q_?"hidden":"visible"}:${G}`,D=l_.current,E=D.get(O);if(E?.root){D.delete(O),D.set(O,E);let o=Q6(E.root,Boolean(E.truncated),I_);if(o)s_.current=o,T_.current=G,D_({loading:!1,error:null,payload:o});return}let C=s_.current,l=T_.current;D_({loading:!0,error:null,payload:l===G?C:null}),f2(G,Yj,q_).then((o)=>{if(Z0.current!==Y)return;let c={root:o?.root,truncated:Boolean(o?.truncated)};D.delete(O),D.set(O,c);while(D.size>Wj){let Y_=D.keys().next().value;if(!Y_)break;D.delete(Y_)}let m=Q6(c.root,c.truncated,I_);s_.current=m,T_.current=G,D_({loading:!1,error:null,payload:m})}).catch((o)=>{if(Z0.current!==Y)return;D_({loading:!1,error:o?.message||"Failed to load folder size chart",payload:l===G?C:null})})},[G,M_,q_,I_]);let D0=Boolean(w&&w.kind==="text"&&!M_&&(!w.size||w.size<=262144)),O0=D0?"Open in editor":w?.size>262144?"File too large to edit":"File is not editable",A$=Boolean(G&&G!=="."),r$=Boolean(G&&!M_),v$=Boolean(G&&!M_),V$=G&&M_?Y1(G,q_):null,v0=M(()=>H_(!1),[]),G0=M(async(Y)=>{v0();try{await Y?.()}catch{}},[v0]);R(()=>{let Y=Q0.current;if(T0.current)T0.current.dispose(),T0.current=null;if(!Y)return;if(Y.innerHTML="",!G||M_||!w||w.error)return;let O={path:G,content:typeof w.text==="string"?w.text:void 0,mtime:w.mtime,size:w.size,preview:w,mode:"view"},D=d_.resolve(O)||d_.get("workspace-preview-default");if(!D)return;let E=D.mount(Y,O);return T0.current=E,()=>{if(T0.current===E)E.dispose(),T0.current=null;Y.innerHTML=""}},[G,M_,w]);let r_=(Y)=>{let O=Y?.target;if(O instanceof Element)return O;return O?.parentElement||null},u0=(Y)=>{return Boolean(Y?.closest?.(".workspace-node-icon, .workspace-label-text"))},P$=y((Y)=>{if(o0.current)clearTimeout(o0.current),o0.current=null;let D=r_(Y)?.closest?.("[data-path]");if(!D)return;let E=D.dataset.path;if(D.dataset.type==="dir"||!E)return;if(b0.current===E)J0();o_.current?.(E)}).current,a$=y((Y)=>{if(B0.current){B0.current=!1;return}let O=r_(Y),D=O?.closest?.("[data-path]");if(V0.current?.focus?.(),!D)return;let E=D.dataset.path,C=D.dataset.type,l=Boolean(O?.closest?.(".workspace-caret")),o=Boolean(O?.closest?.("button"))||Boolean(O?.closest?.("a"))||Boolean(O?.closest?.("input")),c=Z0.current===E,m=b0.current;if(m){if(m===E)return;J0()}let Y_=C==="file"&&L$.current===E&&!l&&!o;if(c&&!l&&!o&&E!=="."&&!Y_){if(o0.current)clearTimeout(o0.current);o0.current=setTimeout(()=>{o0.current=null,O$(E)},350);return}if(C==="dir"){if(L$.current=null,F(E),H(null),I(null),d(!1),!K_.current.has(E))g_.current?.(E);if(c&&!l)return;B((P0)=>{let Y0=new Set(P0);if(Y0.has(E))Y0.delete(E);else Y0.add(E);return Y0})}else{L$.current=null,F(E);let K0=E_.current.get(E);if(K0)J_.current?.(K0.path,K0);e_.current?.(E)}}).current,U$=y(()=>{A_.current="",i_.current(),Array.from(K_.current||[]).filter((O)=>O&&O!==".").forEach((O)=>g_.current?.(O))}).current,a0=y(()=>{L$.current=null,F(null),H(null),I(null),d(!1)}).current,M$=y(()=>{c_((Y)=>{let O=!Y;if(typeof window<"u")$0("workspaceShowHidden",String(O));return s.current=O,R2(!0,O).catch(()=>{}),A_.current="",i_.current?.(),Array.from(K_.current||[]).filter((E)=>E&&E!==".").forEach((E)=>g_.current?.(E)),O})}).current,p0=y((Y)=>{if(r_(Y)?.closest?.("[data-path]"))return;a0()}).current,U0=M(async(Y)=>{if(!Y)return;let O=Y.split("/").pop()||Y;if(!window.confirm(`Delete "${O}"? This cannot be undone.`))return;try{await Y4(Y);let E=Y.includes("/")?Y.split("/").slice(0,-1).join("/")||".":".";if(Z0.current===Y)a0();g_.current?.(E),p(null)}catch(E){H((C)=>({...C||{},error:E.message||"Failed to delete file"}))}},[a0]),F$=M((Y)=>{let O=V0.current;if(!O||!Y||typeof CSS>"u"||typeof CSS.escape!=="function")return;O.querySelector(`[data-path="${CSS.escape(Y)}"]`)?.scrollIntoView?.({block:"nearest"})},[]),t$=M((Y)=>{let O=G$;if(!O||O.length===0)return;let D=G?O.findIndex((E)=>E.node.path===G):-1;if(Y.key==="ArrowDown"){Y.preventDefault();let E=Math.min(D+1,O.length-1),C=O[E];if(!C)return;if(F(C.node.path),C.node.type!=="dir")J_.current?.(C.node.path,C.node),e_.current?.(C.node.path);else H(null),d(!1),I(null);F$(C.node.path);return}if(Y.key==="ArrowUp"){Y.preventDefault();let E=D<=0?0:D-1,C=O[E];if(!C)return;if(F(C.node.path),C.node.type!=="dir")J_.current?.(C.node.path,C.node),e_.current?.(C.node.path);else H(null),d(!1),I(null);F$(C.node.path);return}if(Y.key==="ArrowRight"&&D>=0){let E=O[D];if(E?.node?.type==="dir"&&!q.has(E.node.path))Y.preventDefault(),g_.current?.(E.node.path),B((C)=>new Set([...C,E.node.path]));return}if(Y.key==="ArrowLeft"&&D>=0){let E=O[D];if(E?.node?.type==="dir"&&q.has(E.node.path))Y.preventDefault(),B((C)=>{let l=new Set(C);return l.delete(E.node.path),l});return}if(Y.key==="Enter"&&D>=0){Y.preventDefault();let E=O[D];if(!E)return;let C=E.node.path;if(E.node.type==="dir"){if(!K_.current.has(C))g_.current?.(C);B((o)=>{let c=new Set(o);if(c.has(C))c.delete(C);else c.add(C);return c}),H(null),I(null),d(!1)}else J_.current?.(C,E.node),e_.current?.(C);return}if((Y.key==="Delete"||Y.key==="Backspace")&&D>=0){let E=O[D];if(!E||E.node.type==="dir")return;Y.preventDefault(),U0(E.node.path);return}if(Y.key==="Escape")Y.preventDefault(),a0()},[a0,U0,q,G$,F$,G]),u$=M((Y)=>{let O=r_(Y),D=O?.closest?.(".workspace-row");if(!D)return;let E=D.dataset.type,C=D.dataset.path;if(!C||C===".")return;if(b0.current===C)return;let l=Y?.touches?.[0];if(!l)return;if(C_.current={path:u0(O)?C:null,dragging:!1,startX:l.clientX,startY:l.clientY},E!=="file")return;if(x_.current)clearTimeout(x_.current);x_.current=setTimeout(()=>{if(x_.current=null,C_.current?.dragging)return;U0(C)},600)},[U0]),b$=M(()=>{if(x_.current)clearTimeout(x_.current),x_.current=null;let Y=C_.current;if(Y?.dragging&&Y.path){let O=S_.current||N0(),D=q$.current;if(typeof D==="function")D(Y.path,O)}C_.current={path:null,dragging:!1,startX:0,startY:0},X_.current=0,t(!1),$_(null),A0(null),f0(),S$()},[N0,S$,A0,f0]),m$=M((Y)=>{let O=C_.current,D=Y?.touches?.[0];if(!D||!O?.path){if(x_.current)clearTimeout(x_.current),x_.current=null;return}let E=Math.abs(D.clientX-O.startX),C=Math.abs(D.clientY-O.startY),l=E>8||C>8;if(l&&x_.current)clearTimeout(x_.current),x_.current=null;if(!O.dragging&&l)O.dragging=!0,t(!0),$_("move"),E$(O.path);if(O.dragging){Y.preventDefault(),Q$(D.clientX,D.clientY);let o=document.elementFromPoint(D.clientX,D.clientY),c=W$(o)||N0();if(S_.current!==c)A0(c);s0(c)}},[W$,N0,E$,Q$,A0,s0]),g$=y((Y)=>{Y.preventDefault();let O=m_.current;if(!O)return;let D=Y.clientY,E=P_.current||280,C=Y.currentTarget;C.classList.add("dragging"),document.body.style.cursor="row-resize",document.body.style.userSelect="none";let l=D,o=(m)=>{l=m.clientY;let Y_=O.clientHeight-80,K0=Math.min(Math.max(E-(m.clientY-D),80),Y_);O.style.setProperty("--preview-height",`${K0}px`),P_.current=K0},c=()=>{let m=O.clientHeight-80,Y_=Math.min(Math.max(E-(l-D),80),m);P_.current=Y_,C.classList.remove("dragging"),document.body.style.cursor="",document.body.style.userSelect="",$0("previewHeight",String(Math.round(Y_))),document.removeEventListener("mousemove",o),document.removeEventListener("mouseup",c)};document.addEventListener("mousemove",o),document.addEventListener("mouseup",c)}).current,e$=y((Y)=>{Y.preventDefault();let O=m_.current;if(!O)return;let D=Y.touches[0];if(!D)return;let E=D.clientY,C=P_.current||280,l=Y.currentTarget;l.classList.add("dragging"),document.body.style.userSelect="none";let o=(m)=>{let Y_=m.touches[0];if(!Y_)return;m.preventDefault();let K0=O.clientHeight-80,P0=Math.min(Math.max(C-(Y_.clientY-E),80),K0);O.style.setProperty("--preview-height",`${P0}px`),P_.current=P0},c=()=>{l.classList.remove("dragging"),document.body.style.userSelect="",$0("previewHeight",String(Math.round(P_.current||C))),document.removeEventListener("touchmove",o),document.removeEventListener("touchend",c),document.removeEventListener("touchcancel",c)};document.addEventListener("touchmove",o,{passive:!1}),document.addEventListener("touchend",c),document.addEventListener("touchcancel",c)}).current,t0=async()=>{if(!G)return;try{let Y=await Z4(G);if(Y.media_id)I(Y.media_id)}catch(Y){H((O)=>({...O||{},error:Y.message||"Failed to attach"}))}},_2=async()=>{if(!G||M_)return;await U0(G)},p$=(Y)=>{return Array.from(Y?.dataTransfer?.types||[]).includes("Files")},L_=M((Y)=>{if(!p$(Y))return;if(Y.preventDefault(),X_.current+=1,!R0.current)t(!0);$_("upload");let O=B$(Y)||N0();A0(O),s0(O)},[N0,B$,A0,s0]),L2=M((Y)=>{if(!p$(Y))return;if(Y.preventDefault(),Y.dataTransfer)Y.dataTransfer.dropEffect="copy";if(!R0.current)t(!0);if(J$.current!=="upload")$_("upload");let O=B$(Y)||N0();if(S_.current!==O)A0(O);s0(O)},[N0,B$,A0,s0]),A2=M((Y)=>{if(!p$(Y))return;if(Y.preventDefault(),X_.current=Math.max(0,X_.current-1),X_.current===0)t(!1),$_(null),A0(null),f0()},[A0,f0]),c$=M(async(Y,O=".")=>{let D=Array.from(Y||[]);if(D.length===0)return;let E=O&&O!==""?O:".",C=E!=="."?E:"workspace root";F_(!0);try{let l=null;for(let o of D)try{l=await z1(o,E)}catch(c){let m=c?.status,Y_=c?.code;if(m===409||Y_==="file_exists"){let K0=o?.name||"file";if(!window.confirm(`"${K0}" already exists in ${C}. Overwrite?`))continue;l=await z1(o,E,{overwrite:!0})}else throw c}if(l?.path)L$.current=l.path,F(l.path),e_.current?.(l.path);g_.current?.(E)}catch(l){p(l.message||"Failed to upload file")}finally{F_(!1)}},[]),$2=M(async(Y,O)=>{if(!Y)return;let D=E_.current?.get(Y);if(!D)return;let E=O&&O!==""?O:".",C=Y.includes("/")?Y.split("/").slice(0,-1).join("/")||".":".";if(E===C)return;try{let o=(await K4(Y,E))?.path||Y;if(D.type==="dir")B((c)=>{let m=new Set;for(let Y_ of c)if(Y_===Y)m.add(o);else if(Y_.startsWith(`${Y}/`))m.add(`${o}${Y_.slice(Y.length)}`);else m.add(Y_);return m});if(F(o),D.type==="dir")H(null),d(!1),I(null);else e_.current?.(o);g_.current?.(C),g_.current?.(E)}catch(l){p(l?.message||"Failed to move entry")}},[]);q$.current=$2;let h$=M(async(Y)=>{if(!p$(Y))return;Y.preventDefault(),X_.current=0,t(!1),$_(null),k_(null),f0();let O=Array.from(Y?.dataTransfer?.files||[]);if(O.length===0)return;let D=S_.current||B$(Y)||N0();await c$(O,D)},[N0,B$,c$]),P2=M((Y)=>{if(Y?.stopPropagation?.(),O_)return;let O=Y?.currentTarget?.dataset?.uploadTarget||".";X0.current=O,g0.current?.click()},[O_]),j2=M(()=>{if(O_)return;let Y=Z0.current,O=Y?E_.current?.get(Y):null;X0.current=O?.type==="dir"?O.path:".",g0.current?.click()},[O_]),Z2=M(()=>{G0(()=>z0(null))},[G0,z0]),c0=M(()=>{G0(()=>j2())},[G0,j2]),m0=M(()=>{G0(()=>U$())},[G0,U$]),i$=M(()=>{G0(()=>M$())},[G0,M$]),B2=M(()=>{if(!G||!D0)return;G0(()=>o_.current?.(G,w))},[G0,G,D0,w]),h0=M(()=>{if(!G||G===".")return;G0(()=>O$(G))},[G0,G,O$]),H$=M(()=>{if(!G||M_)return;G0(()=>_2())},[G0,G,M_,_2]),Q2=M(()=>{if(!G||M_)return;G0(()=>t0())},[G0,G,M_,t0]),l$=M(()=>{if(!V$)return;if(v0(),typeof window<"u")window.open(V$,"_blank","noopener")},[v0,V$]),O2=M(()=>{v0(),N?.()},[v0,N]),i0=M(()=>{v0(),z?.()},[v0,z]),Q=M((Y)=>{if(!Y||Y.button!==0)return;let O=Y.currentTarget;if(!O||!O.dataset)return;let D=O.dataset.path;if(!D||D===".")return;if(b0.current===D)return;let E=r_(Y);if(E?.closest?.("button, a, input, .workspace-caret"))return;if(!u0(E))return;Y.preventDefault(),y_.current={path:D,dragging:!1,startX:Y.clientX,startY:Y.clientY};let C=(o)=>{let c=y_.current;if(!c?.path)return;let m=Math.abs(o.clientX-c.startX),Y_=Math.abs(o.clientY-c.startY),K0=m>4||Y_>4;if(!c.dragging&&K0)c.dragging=!0,B0.current=!0,t(!0),$_("move"),E$(c.path),Q$(o.clientX,o.clientY),document.body.style.userSelect="none",document.body.style.cursor="grabbing";if(c.dragging){o.preventDefault(),Q$(o.clientX,o.clientY);let P0=document.elementFromPoint(o.clientX,o.clientY),Y0=W$(P0)||N0();if(S_.current!==Y0)A0(Y0);s0(Y0)}},l=()=>{document.removeEventListener("mousemove",C),document.removeEventListener("mouseup",l);let o=y_.current;if(o?.dragging&&o.path){let c=S_.current||N0(),m=q$.current;if(typeof m==="function")m(o.path,c)}y_.current={path:null,dragging:!1,startX:0,startY:0},X_.current=0,t(!1),$_(null),A0(null),f0(),S$(),document.body.style.userSelect="",document.body.style.cursor="",setTimeout(()=>{B0.current=!1},0)};document.addEventListener("mousemove",C),document.addEventListener("mouseup",l)},[W$,N0,E$,Q$,S$,A0,s0,f0]),P=M(async(Y)=>{let O=Array.from(Y?.target?.files||[]);if(O.length===0)return;let D=X0.current||".";if(await c$(O,D),X0.current=".",Y?.target)Y.target.value=""},[c$]);return U`
        <aside
            class=${`workspace-sidebar${__?" workspace-drop-active":""}`}
            data-workspace-scale=${F0}
            ref=${m_}
            onDragEnter=${L_}
            onDragOver=${L2}
            onDragLeave=${A2}
            onDrop=${h$}
        >
            <input type="file" multiple style="display:none" ref=${g0} onChange=${P} />
            <div class="workspace-header">
                <div class="workspace-header-left">
                    <div class="workspace-menu-wrap">
                        <button
                            ref=${T}
                            class=${`workspace-menu-button${a?" active":""}`}
                            onClick=${(Y)=>{Y.stopPropagation(),H_((O)=>!O)}}
                            title="Workspace actions"
                            aria-label="Workspace actions"
                            aria-haspopup="menu"
                            aria-expanded=${a?"true":"false"}
                        >
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                <line x1="4" y1="7" x2="20" y2="7" />
                                <line x1="4" y1="12" x2="20" y2="12" />
                                <line x1="4" y1="17" x2="20" y2="17" />
                            </svg>
                        </button>
                        ${a&&U`
                            <div class="workspace-menu-dropdown" ref=${d0} role="menu" aria-label="Workspace options">
                                <button class="workspace-menu-item" role="menuitem" onClick=${Z2} disabled=${O_}>New file</button>
                                <button class="workspace-menu-item" role="menuitem" onClick=${c0} disabled=${O_}>Upload files</button>
                                <button class="workspace-menu-item" role="menuitem" onClick=${m0}>Refresh tree</button>
                                <button class=${`workspace-menu-item${q_?" active":""}`} role="menuitem" onClick=${i$}>
                                    ${q_?"Hide hidden files":"Show hidden files"}
                                </button>

                                ${G&&U`<div class="workspace-menu-separator"></div>`}
                                ${G&&!M_&&U`
                                    <button class="workspace-menu-item" role="menuitem" onClick=${B2} disabled=${!D0}>Open in editor</button>
                                `}
                                ${A$&&U`
                                    <button class="workspace-menu-item" role="menuitem" onClick=${h0}>Rename selected</button>
                                `}
                                ${v$&&U`
                                    <button class="workspace-menu-item" role="menuitem" onClick=${Q2}>Download selected file</button>
                                `}
                                ${V$&&U`
                                    <button class="workspace-menu-item" role="menuitem" onClick=${l$}>Download selected folder (zip)</button>
                                `}
                                ${r$&&U`
                                    <button class="workspace-menu-item danger" role="menuitem" onClick=${H$}>Delete selected file</button>
                                `}

                                ${(N||z)&&U`<div class="workspace-menu-separator"></div>`}
                                ${N&&U`
                                    <button class="workspace-menu-item" role="menuitem" onClick=${O2}>
                                        Open terminal in tab
                                    </button>
                                `}
                                ${z&&U`
                                    <button class="workspace-menu-item" role="menuitem" onClick=${i0}>
                                        ${K?"Hide terminal dock":"Show terminal dock"}
                                    </button>
                                `}
                            </div>
                        `}
                    </div>
                    <span>Workspace</span>
                </div>
                <div class="workspace-header-actions">
                    <button class="workspace-create" onClick=${z0} title="New file" disabled=${O_}>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                            stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                            <line x1="12" y1="5" x2="12" y2="19" />
                            <line x1="5" y1="12" x2="19" y2="12" />
                        </svg>
                    </button>
                    <button class="workspace-refresh" onClick=${U$} title="Refresh">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"
                            stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                            <circle cx="12" cy="12" r="8.5" stroke-dasharray="42 12" stroke-dashoffset="6"
                                transform="rotate(75 12 12)" />
                            <polyline points="21 3 21 9 15 9" />
                        </svg>
                    </button>
                </div>
            </div>
            <div class="workspace-tree" onClick=${p0}>
                ${O_&&U`<div class="workspace-drop-hint">Uploading…</div>`}
                ${i&&U`<div class="workspace-loading">Loading…</div>`}
                ${N_&&U`<div class="workspace-error">${N_}</div>`}
                ${X&&U`
                    <div
                        class="workspace-tree-list"
                        ref=${V0}
                        tabIndex="0"
                        onClick=${a$}
                        onDblClick=${P$}
                        onKeyDown=${t$}
                        onTouchStart=${u$}
                        onTouchEnd=${b$}
                        onTouchMove=${m$}
                        onTouchCancel=${b$}
                    >
                        ${G$.map(({node:Y,depth:O})=>{let D=Y.type==="dir",E=Y.path===G,C=Y.path===b,l=D&&q.has(Y.path),o=W_&&Y.path===W_,c=Array.isArray(Y.children)&&Y.children.length>0?Y.children.length:Number(Y.child_count)||0;return U`
                                <div
                                    key=${Y.path}
                                    class=${`workspace-row${E?" selected":""}${o?" drop-target":""}`}
                                    style=${{paddingLeft:`${8+O*w$.indentPx}px`}}
                                    data-path=${Y.path}
                                    data-type=${Y.type}
                                    onMouseDown=${Q}
                                >
                                    <span class="workspace-caret" aria-hidden="true">
                                        ${D?l?U`<svg viewBox="0 0 12 12"><polygon points="1,2 11,2 6,11"/></svg>`:U`<svg viewBox="0 0 12 12"><polygon points="2,1 11,6 2,11"/></svg>`:null}
                                    </span>
                                    <svg class=${`workspace-node-icon${D?" folder":""}`}
                                        viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                        stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                        aria-hidden="true">
                                        ${D?U`<path d="M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>`:U`<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/>`}
                                    </svg>
                                    ${C?U`
                                            <input
                                                class="workspace-rename-input"
                                                ref=${_0}
                                                value=${u}
                                                onInput=${(m)=>f(m?.target?.value||"")}
                                                onKeyDown=${(m)=>{if(m.key==="Enter")m.preventDefault(),r0();else if(m.key==="Escape")m.preventDefault(),J0()}}
                                                onBlur=${J0}
                                                onClick=${(m)=>m.stopPropagation()}
                                            />
                                        `:U`<span class="workspace-label"><span class="workspace-label-text">${Y.name}</span></span>`}
                                    ${D&&!l&&c>0&&U`
                                        <span class="workspace-count">${c}</span>
                                    `}
                                    ${D&&U`
                                        <button
                                            class="workspace-folder-upload"
                                            data-upload-target=${Y.path}
                                            title="Upload files to this folder"
                                            onClick=${P2}
                                            disabled=${O_}
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
            ${G&&U`
                <div class="workspace-preview-splitter-h" onMouseDown=${g$} onTouchStart=${e$}></div>
                <div class="workspace-preview">
                    <div class="workspace-preview-header">
                        <span class="workspace-preview-title">${G}</span>
                        <div class="workspace-preview-actions">
                            <button class="workspace-create" onClick=${z0} title="New file" disabled=${O_}>
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                    stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                    <line x1="12" y1="5" x2="12" y2="19" />
                                    <line x1="5" y1="12" x2="19" y2="12" />
                                </svg>
                            </button>
                            ${!M_&&U`
                                <button
                                    class="workspace-download workspace-edit"
                                    onClick=${()=>D0&&o_.current?.(G,w)}
                                    title=${O0}
                                    disabled=${!D0}
                                >
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                        stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                        <path d="M12 20h9" />
                                        <path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4Z" />
                                    </svg>
                                </button>
                                <button
                                    class="workspace-download workspace-delete"
                                    onClick=${_2}
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
                            ${M_?U`
                                    <button class="workspace-download" onClick=${j2}
                                        title="Upload files to this folder" disabled=${O_}>
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                            stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                                            <polyline points="7 8 12 3 17 8"/>
                                            <line x1="12" y1="3" x2="12" y2="15"/>
                                        </svg>
                                    </button>
                                    <a class="workspace-download" href=${Y1(G,q_)}
                                        title="Download folder as zip" onClick=${(Y)=>Y.stopPropagation()}>
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                            stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                                            <polyline points="7 10 12 15 17 10"/>
                                            <line x1="12" y1="15" x2="12" y2="3"/>
                                        </svg>
                                    </a>`:U`<button class="workspace-download" onClick=${t0} title="Download">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                        stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                                        <polyline points="7 10 12 15 17 10"/>
                                        <line x1="12" y1="15" x2="12" y2="3"/>
                                    </svg>
                                </button>`}
                        </div>
                    </div>
                    ${e&&U`<div class="workspace-loading">Loading preview…</div>`}
                    ${w?.error&&U`<div class="workspace-error">${w.error}</div>`}
                    ${M_&&U`
                        <div class="workspace-preview-text">Folder selected — create file, upload files, or download as zip.</div>
                        ${v_?.loading&&U`<div class="workspace-loading">Loading folder size preview…</div>`}
                        ${v_?.error&&U`<div class="workspace-error">${v_.error}</div>`}
                        ${v_?.payload&&v_.payload.segments?.length>0&&U`
                            <${Gj} payload=${v_.payload} />
                        `}
                        ${v_?.payload&&(!v_.payload.segments||v_.payload.segments.length===0)&&U`
                            <div class="workspace-preview-text">No file size data available for this folder yet.</div>
                        `}
                    `}
                    ${w&&!w.error&&!M_&&U`
                        <div class="workspace-preview-body" ref=${Q0}></div>
                    `}
                    ${x&&U`
                        <div class="workspace-download-card">
                            <${Vj} mediaId=${x} />
                        </div>
                    `}
                </div>
            `}
            ${Q_&&U`
                <div class="workspace-drag-ghost" ref=${Y$}>${Q_.label}</div>
            `}
        </aside>
    `}var Xj=/\.(docx?|xlsx?|pptx?|odt|ods|odp|rtf)$/i,qj=/\.(csv|tsv)$/i,Lj=/\.pdf$/i,Bj=/\.(png|jpe?g|gif|webp|bmp|ico|svg)$/i,A6=/\.drawio(\.xml|\.svg|\.png)?$/i;function P6({tabs:_,activeId:$,onActivate:j,onClose:Z,onCloseOthers:N,onCloseAll:z,onTogglePin:K,onTogglePreview:X,previewTabs:L,onToggleDock:q,dockVisible:B}){let[G,F]=S(null),b=y(null);R(()=>{if(!G)return;let H=(x)=>{if(x.type==="keydown"&&x.key!=="Escape")return;F(null)};return document.addEventListener("click",H),document.addEventListener("keydown",H),()=>{document.removeEventListener("click",H),document.removeEventListener("keydown",H)}},[G]),R(()=>{let H=(x)=>{if(x.ctrlKey&&x.key==="Tab"){if(x.preventDefault(),!_.length)return;let I=_.findIndex((i)=>i.id===$);if(x.shiftKey){let i=_[(I-1+_.length)%_.length];j?.(i.id)}else{let i=_[(I+1)%_.length];j?.(i.id)}return}if((x.ctrlKey||x.metaKey)&&x.key==="w"){let I=document.querySelector(".editor-pane");if(I&&I.contains(document.activeElement)){if(x.preventDefault(),$)Z?.($)}}};return document.addEventListener("keydown",H),()=>document.removeEventListener("keydown",H)},[_,$,j,Z]);let g=M((H,x)=>{if(H.button===1){H.preventDefault(),Z?.(x);return}if(H.button===0)j?.(x)},[j,Z]),u=M((H,x)=>{H.preventDefault(),F({id:x,x:H.clientX,y:H.clientY})},[]),f=M((H)=>{H.preventDefault(),H.stopPropagation()},[]),w=M((H,x)=>{H.preventDefault(),H.stopPropagation(),Z?.(x)},[Z]);if(R(()=>{if(!$||!b.current)return;let H=b.current.querySelector(".tab-item.active");if(H)H.scrollIntoView({block:"nearest",inline:"nearest",behavior:"smooth"})},[$]),!_.length)return null;return U`
        <div class="tab-strip" ref=${b} role="tablist">
            ${_.map((H)=>U`
                <div
                    key=${H.id}
                    class=${`tab-item${H.id===$?" active":""}${H.dirty?" dirty":""}${H.pinned?" pinned":""}`}
                    role="tab"
                    aria-selected=${H.id===$}
                    title=${H.path}
                    onMouseDown=${(x)=>g(x,H.id)}
                    onContextMenu=${(x)=>u(x,H.id)}
                >
                    ${H.pinned&&U`
                        <span class="tab-pin-icon" aria-label="Pinned">
                            <svg viewBox="0 0 16 16" width="10" height="10" fill="currentColor">
                                <path d="M4.456.734a1.75 1.75 0 0 1 2.826.504l.613 1.327a3.1 3.1 0 0 0 2.084 1.707l2.454.584c1.332.317 1.8 1.972.832 2.94L11.06 10l3.72 3.72a.75.75 0 1 1-1.06 1.06L10 11.06l-2.204 2.205c-.968.968-2.623.5-2.94-.832l-.584-2.454a3.1 3.1 0 0 0-1.707-2.084l-1.327-.613a1.75 1.75 0 0 1-.504-2.826z"/>
                            </svg>
                        </span>
                    `}
                    <span class="tab-label">${H.label}</span>
                    <button
                        type="button"
                        class="tab-close"
                        onMouseDown=${f}
                        onClick=${(x)=>w(x,H.id)}
                        title=${H.dirty?"Unsaved changes":"Close"}
                        aria-label=${H.dirty?"Unsaved changes":`Close ${H.label}`}
                    >
                        ${H.dirty?U`<span class="tab-dirty-dot" aria-hidden="true"></span>`:U`<svg viewBox="0 0 16 16" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" aria-hidden="true" focusable="false" style=${{pointerEvents:"none"}}>
                                <line x1="4" y1="4" x2="12" y2="12" style=${{pointerEvents:"none"}}/>
                                <line x1="12" y1="4" x2="4" y2="12" style=${{pointerEvents:"none"}}/>
                            </svg>`}
                    </button>
                </div>
            `)}
            ${q&&U`
                <div class="tab-strip-spacer"></div>
                <button
                    class=${`tab-strip-dock-toggle${B?" active":""}`}
                    onClick=${q}
                    title=${`${B?"Hide":"Show"} terminal (Ctrl+\`)`}
                    aria-label=${`${B?"Hide":"Show"} terminal`}
                    aria-pressed=${B?"true":"false"}
                >
                    <svg viewBox="0 0 16 16" width="14" height="14" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                        <rect x="1.75" y="2.25" width="12.5" height="11.5" rx="2"/>
                        <polyline points="4.5 5.25 7 7.75 4.5 10.25"/>
                        <line x1="8.5" y1="10.25" x2="11.5" y2="10.25"/>
                    </svg>
                </button>
            `}
        </div>
        ${G&&U`
            <div class="tab-context-menu" style=${{left:G.x+"px",top:G.y+"px"}}>
                <button onClick=${()=>{Z?.(G.id),F(null)}}>Close</button>
                <button onClick=${()=>{N?.(G.id),F(null)}}>Close Others</button>
                <button onClick=${()=>{z?.(),F(null)}}>Close All</button>
                <hr />
                <button onClick=${()=>{K?.(G.id),F(null)}}>
                    ${_.find((H)=>H.id===G.id)?.pinned?"Unpin":"Pin"}
                </button>
                ${X&&/\.(md|mdx|markdown)$/i.test(G.id)&&U`
                    <hr />
                    <button onClick=${()=>{X(G.id),F(null)}}>
                        ${L?.has(G.id)?"Hide Preview":"Preview"}
                    </button>
                `}
                ${Xj.test(G.id)&&U`
                    <hr />
                    <button onClick=${()=>{let H="/workspace/raw?path="+encodeURIComponent(G.id),x=G.id.split("/").pop()||"document",I="/office-viewer/?url="+encodeURIComponent(H)+"&name="+encodeURIComponent(x);window.open(I,"_blank","noopener"),F(null)}}>Open in New Tab</button>
                `}
                ${qj.test(G.id)&&U`
                    <hr />
                    <button onClick=${()=>{let H="/csv-viewer/?path="+encodeURIComponent(G.id);window.open(H,"_blank","noopener"),F(null)}}>Open in New Tab</button>
                `}
                ${Lj.test(G.id)&&U`
                    <hr />
                    <button onClick=${()=>{let H="/workspace/raw?path="+encodeURIComponent(G.id);window.open(H,"_blank","noopener"),F(null)}}>Open in New Tab</button>
                `}
                ${Bj.test(G.id)&&!A6.test(G.id)&&U`
                    <hr />
                    <button onClick=${()=>{let H="/image-viewer/?path="+encodeURIComponent(G.id);window.open(H,"_blank","noopener"),F(null)}}>Open in New Tab</button>
                `}
                ${A6.test(G.id)&&U`
                    <hr />
                    <button onClick=${()=>{let H="/drawio/edit?path="+encodeURIComponent(G.id);window.open(H,"_blank","noopener"),F(null)}}>Open in New Tab</button>
                `}
            </div>
        `}
    `}var Qj=400,s4=60,M6=220,r4="mdPreviewHeight";function Oj(){try{let _=localStorage.getItem(r4),$=_?Number(_):NaN;return Number.isFinite($)&&$>=s4?$:M6}catch{return M6}}function b6({getContent:_,path:$,onClose:j}){let[Z,N]=S(""),[z,K]=S(Oj),X=y(null),L=y(null),q=y(""),B=y(_);return B.current=_,R(()=>{let b=()=>{let u=B.current?.()||"";if(u===q.current)return;q.current=u;try{let f=n0(u,null,{sanitize:!1});N(f)}catch{N('<p style="color:var(--text-secondary)">Preview unavailable</p>')}};b();let g=setInterval(b,Qj);return()=>clearInterval(g)},[]),R(()=>{if(X.current&&Z)x$(X.current).catch(()=>{})},[Z]),U`
        <div
            class="md-preview-splitter"
            onMouseDown=${(b)=>{b.preventDefault();let g=b.clientY,u=L.current?.offsetHeight||z,f=L.current?.parentElement,w=f?f.offsetHeight*0.7:500,H=b.currentTarget;H.classList.add("dragging"),document.body.style.cursor="row-resize",document.body.style.userSelect="none";let x=(i)=>{let n=Math.min(Math.max(u-(i.clientY-g),s4),w);K(n)},I=()=>{H.classList.remove("dragging"),document.body.style.cursor="",document.body.style.userSelect="";try{localStorage.setItem(r4,String(Math.round(L.current?.offsetHeight||z)))}catch{}document.removeEventListener("mousemove",x),document.removeEventListener("mouseup",I)};document.addEventListener("mousemove",x),document.addEventListener("mouseup",I)}}
            onTouchStart=${(b)=>{b.preventDefault();let g=b.touches[0];if(!g)return;let u=g.clientY,f=L.current?.offsetHeight||z,w=L.current?.parentElement,H=w?w.offsetHeight*0.7:500,x=b.currentTarget;x.classList.add("dragging"),document.body.style.userSelect="none";let I=(n)=>{let e=n.touches[0];if(!e)return;n.preventDefault();let d=Math.min(Math.max(f-(e.clientY-u),s4),H);K(d)},i=()=>{x.classList.remove("dragging"),document.body.style.userSelect="";try{localStorage.setItem(r4,String(Math.round(L.current?.offsetHeight||z)))}catch{}document.removeEventListener("touchmove",I),document.removeEventListener("touchend",i),document.removeEventListener("touchcancel",i)};document.addEventListener("touchmove",I,{passive:!1}),document.addEventListener("touchend",i),document.addEventListener("touchcancel",i)}}
        ></div>
        <div class="md-preview-panel" ref=${L} style=${{height:z+"px"}}>
            <div class="md-preview-header">
                <span class="md-preview-title">Preview</span>
                <button class="md-preview-close" onClick=${j} title="Close preview" aria-label="Close preview">
                    <svg viewBox="0 0 16 16" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round">
                        <line x1="4" y1="4" x2="12" y2="12"/>
                        <line x1="12" y1="4" x2="4" y2="12"/>
                    </svg>
                </button>
            </div>
            <div
                class="md-preview-body post-content"
                ref=${X}
                dangerouslySetInnerHTML=${{__html:Z}}
            />
        </div>
    `}function I6({handleSseEvent:_,handleConnectionStatusChange:$,loadPosts:j,onWake:Z,chatJid:N}){let z=y(_);z.current=_;let K=y($);K.current=$;let X=y(j);X.current=j;let L=y(Z);L.current=Z,R(()=>{X.current();let q=new W1((G,F)=>z.current(G,F),(G)=>K.current(G),{chatJid:N});q.connect();let B=()=>{q.reconnectIfNeeded();let G=typeof document<"u"?document:null;if(!G||G.visibilityState==="visible")L.current?.()};return window.addEventListener("focus",B),document.addEventListener("visibilitychange",B),()=>{window.removeEventListener("focus",B),document.removeEventListener("visibilitychange",B),q.disconnect()}},[N])}function x6(){let[_,$]=S(!1),[j,Z]=S("default"),N=y(!1);R(()=>{let L=E2("notificationsEnabled",!1);if(N.current=L,$(L),typeof Notification<"u")Z(Notification.permission)},[]),R(()=>{N.current=_},[_]);let z=M(()=>{if(typeof Notification>"u")return Promise.resolve("denied");try{let L=Notification.requestPermission();if(L&&typeof L.then==="function")return L;return Promise.resolve(L)}catch{return Promise.resolve("default")}},[]),K=M(async()=>{if(typeof window>"u"||typeof Notification>"u")return;if(!window.isSecureContext){alert("Notifications require a secure context (HTTPS or installed app).");return}if(Notification.permission==="denied"){Z("denied"),alert("Browser notifications are blocked. Enable them in your browser settings.");return}if(Notification.permission==="default"){let q=await z();if(Z(q||"default"),q!=="granted"){N.current=!1,$(!1),$0("notificationsEnabled","false");return}}let L=!N.current;N.current=L,$(L),$0("notificationsEnabled",String(L))},[z]),X=M((L,q)=>{if(!N.current)return!1;if(typeof Notification>"u")return!1;if(Notification.permission!=="granted")return!1;try{let B=new Notification(L,{body:q});return B.onclick=()=>{try{window.focus()}catch{}},!0}catch{return!1}},[]);return{notificationsEnabled:_,notificationPermission:j,toggleNotifications:K,notify:X}}var l2=(_)=>{let $=new Set;return(_||[]).filter((j)=>{if(!j||$.has(j.id))return!1;return $.add(j.id),!0})};function C6({preserveTimelineScroll:_,preserveTimelineScrollTop:$,chatJid:j=null}){let[Z,N]=S(null),[z,K]=S(!1),X=y(!1),L=y(null),q=y(!1),B=y(null),G=y(null),F=y(0);R(()=>{X.current=z},[z]),R(()=>{G.current=Z},[Z]),R(()=>{F.current+=1,G.current=null,B.current=null,q.current=!1,X.current=!1,N(null),K(!1)},[j]);let b=M(async(f=null)=>{let w=F.current;try{if(f){let H=await c1(f,50,0,j);if(w!==F.current)return;N(H.posts),K(!1)}else{let H=await C2(10,null,j);if(w!==F.current)return;N(H.posts),K(H.has_more)}}catch(H){if(w!==F.current)return;console.error("Failed to load posts:",H)}},[j]),g=M(async()=>{let f=F.current;try{let w=await C2(10,null,j);if(f!==F.current)return;N((H)=>{if(!H||H.length===0)return w.posts;return l2([...w.posts,...H])}),K((H)=>H||w.has_more)}catch(w){if(f!==F.current)return;console.error("Failed to refresh timeline:",w)}},[j]),u=M(async(f={})=>{let w=F.current,H=G.current;if(!H||H.length===0)return;if(q.current)return;let{preserveScroll:x=!0,preserveMode:I="top",allowRepeat:i=!1}=f,n=(N_)=>{if(!x){N_();return}if(I==="top")$(N_);else _(N_)},d=H.slice().sort((N_,p)=>N_.id-p.id)[0]?.id;if(!Number.isFinite(d))return;if(!i&&B.current===d)return;q.current=!0,B.current=d;try{let N_=await C2(10,d,j);if(w!==F.current)return;if(N_.posts.length>0)n(()=>{N((p)=>l2([...N_.posts,...p||[]])),K(N_.has_more)});else K(!1)}catch(N_){if(w!==F.current)return;console.error("Failed to load more posts:",N_)}finally{if(w===F.current)q.current=!1}},[j,_,$]);return R(()=>{L.current=u},[u]),{posts:Z,setPosts:N,hasMore:z,setHasMore:K,hasMoreRef:X,loadPosts:b,refreshTimeline:g,loadMore:u,loadMoreRef:L,loadingMoreRef:q,lastBeforeIdRef:B}}function T6(){let[_,$]=S(null),[j,Z]=S({text:"",totalLines:0}),[N,z]=S(""),[K,X]=S({text:"",totalLines:0}),[L,q]=S(null),[B,G]=S(null),[F,b]=S(null),g=y(null),u=y(0),f=y(!1),w=y(""),H=y(""),x=y(null),I=y(null),i=y(null),n=y(null),e=y(!1),d=y(!1);return{agentStatus:_,setAgentStatus:$,agentDraft:j,setAgentDraft:Z,agentPlan:N,setAgentPlan:z,agentThought:K,setAgentThought:X,pendingRequest:L,setPendingRequest:q,currentTurnId:B,setCurrentTurnId:G,steerQueuedTurnId:F,setSteerQueuedTurnId:b,lastAgentEventRef:g,lastSilenceNoticeRef:u,isAgentRunningRef:f,draftBufferRef:w,thoughtBufferRef:H,pendingRequestRef:x,stalledPostIdRef:I,currentTurnIdRef:i,steerQueuedTurnIdRef:n,thoughtExpandedRef:e,draftExpandedRef:d}}function S6({appShellRef:_,sidebarWidthRef:$,editorWidthRef:j,dockHeightRef:Z}){let N=y((B)=>{B.preventDefault();let G=_.current;if(!G)return;let F=B.clientX,b=$.current||280,g=B.currentTarget;g.classList.add("dragging"),G.classList.add("sidebar-resizing"),document.body.style.cursor="col-resize",document.body.style.userSelect="none";let u=F,f=(H)=>{u=H.clientX;let x=Math.min(Math.max(b+(H.clientX-F),160),600);G.style.setProperty("--sidebar-width",`${x}px`),$.current=x},w=()=>{let H=Math.min(Math.max(b+(u-F),160),600);$.current=H,g.classList.remove("dragging"),G.classList.remove("sidebar-resizing"),document.body.style.cursor="",document.body.style.userSelect="",$0("sidebarWidth",String(Math.round(H))),document.removeEventListener("mousemove",f),document.removeEventListener("mouseup",w)};document.addEventListener("mousemove",f),document.addEventListener("mouseup",w)}).current,z=y((B)=>{B.preventDefault();let G=_.current;if(!G)return;let F=B.touches[0];if(!F)return;let b=F.clientX,g=$.current||280,u=B.currentTarget;u.classList.add("dragging"),G.classList.add("sidebar-resizing"),document.body.style.userSelect="none";let f=(H)=>{let x=H.touches[0];if(!x)return;H.preventDefault();let I=Math.min(Math.max(g+(x.clientX-b),160),600);G.style.setProperty("--sidebar-width",`${I}px`),$.current=I},w=()=>{u.classList.remove("dragging"),G.classList.remove("sidebar-resizing"),document.body.style.userSelect="",$0("sidebarWidth",String(Math.round($.current||g))),document.removeEventListener("touchmove",f),document.removeEventListener("touchend",w),document.removeEventListener("touchcancel",w)};document.addEventListener("touchmove",f,{passive:!1}),document.addEventListener("touchend",w),document.addEventListener("touchcancel",w)}).current,K=y((B)=>{B.preventDefault();let G=_.current;if(!G)return;let F=B.clientX,b=j.current||$.current||280,g=B.currentTarget;g.classList.add("dragging"),document.body.style.cursor="col-resize",document.body.style.userSelect="none";let u=F,f=(H)=>{u=H.clientX;let x=Math.min(Math.max(b+(H.clientX-F),200),800);G.style.setProperty("--editor-width",`${x}px`),j.current=x},w=()=>{let H=Math.min(Math.max(b+(u-F),200),800);j.current=H,g.classList.remove("dragging"),document.body.style.cursor="",document.body.style.userSelect="",$0("editorWidth",String(Math.round(H))),document.removeEventListener("mousemove",f),document.removeEventListener("mouseup",w)};document.addEventListener("mousemove",f),document.addEventListener("mouseup",w)}).current,X=y((B)=>{B.preventDefault();let G=_.current;if(!G)return;let F=B.touches[0];if(!F)return;let b=F.clientX,g=j.current||$.current||280,u=B.currentTarget;u.classList.add("dragging"),document.body.style.userSelect="none";let f=(H)=>{let x=H.touches[0];if(!x)return;H.preventDefault();let I=Math.min(Math.max(g+(x.clientX-b),200),800);G.style.setProperty("--editor-width",`${I}px`),j.current=I},w=()=>{u.classList.remove("dragging"),document.body.style.userSelect="",$0("editorWidth",String(Math.round(j.current||g))),document.removeEventListener("touchmove",f),document.removeEventListener("touchend",w),document.removeEventListener("touchcancel",w)};document.addEventListener("touchmove",f,{passive:!1}),document.addEventListener("touchend",w),document.addEventListener("touchcancel",w)}).current,L=y((B)=>{B.preventDefault();let G=_.current;if(!G)return;let F=B.clientY,b=Z?.current||200,g=B.currentTarget;g.classList.add("dragging"),document.body.style.cursor="row-resize",document.body.style.userSelect="none";let u=F,f=(H)=>{u=H.clientY;let x=Math.min(Math.max(b-(H.clientY-F),100),window.innerHeight*0.5);if(G.style.setProperty("--dock-height",`${x}px`),Z)Z.current=x;window.dispatchEvent(new CustomEvent("dock-resize"))},w=()=>{let H=Math.min(Math.max(b-(u-F),100),window.innerHeight*0.5);if(Z)Z.current=H;g.classList.remove("dragging"),document.body.style.cursor="",document.body.style.userSelect="",$0("dockHeight",String(Math.round(H))),window.dispatchEvent(new CustomEvent("dock-resize")),document.removeEventListener("mousemove",f),document.removeEventListener("mouseup",w)};document.addEventListener("mousemove",f),document.addEventListener("mouseup",w)}).current,q=y((B)=>{B.preventDefault();let G=_.current;if(!G)return;let F=B.touches[0];if(!F)return;let b=F.clientY,g=Z?.current||200,u=B.currentTarget;u.classList.add("dragging"),document.body.style.userSelect="none";let f=(H)=>{let x=H.touches[0];if(!x)return;H.preventDefault();let I=Math.min(Math.max(g-(x.clientY-b),100),window.innerHeight*0.5);if(G.style.setProperty("--dock-height",`${I}px`),Z)Z.current=I;window.dispatchEvent(new CustomEvent("dock-resize"))},w=()=>{u.classList.remove("dragging"),document.body.style.userSelect="",$0("dockHeight",String(Math.round(Z?.current||g))),window.dispatchEvent(new CustomEvent("dock-resize")),document.removeEventListener("touchmove",f),document.removeEventListener("touchend",w),document.removeEventListener("touchcancel",w)};document.addEventListener("touchmove",f,{passive:!1}),document.addEventListener("touchend",w),document.addEventListener("touchcancel",w)}).current;return{handleSplitterMouseDown:N,handleSplitterTouchStart:z,handleEditorSplitterMouseDown:K,handleEditorSplitterTouchStart:X,handleDockSplitterMouseDown:L,handleDockSplitterTouchStart:q}}function f6({onTabClosed:_}={}){let $=y(_);$.current=_;let[j,Z]=S(()=>p_.getTabs()),[N,z]=S(()=>p_.getActiveId()),[K,X]=S(()=>p_.getTabs().length>0);R(()=>{return p_.onChange((I,i)=>{Z(I),z(i),X(I.length>0)})},[]);let[L,q]=S(()=>new Set),B=M((I)=>{q((i)=>{let n=new Set(i);if(n.has(I))n.delete(I);else n.add(I);return n})},[]),G=M((I)=>{q((i)=>{if(!i.has(I))return i;let n=new Set(i);return n.delete(I),n})},[]),F=M((I,i={})=>{if(!I)return;let n={path:I,mode:"edit"};try{if(!d_.resolve(n)){if(!d_.get("editor")){console.warn(`[openEditor] No pane handler for: ${I}`);return}}}catch(d){console.warn(`[openEditor] paneRegistry.resolve() error for "${I}":`,d)}let e=typeof i?.label==="string"&&i.label.trim()?i.label.trim():void 0;p_.open(I,e)},[]),b=M(()=>{let I=p_.getActiveId();if(I){let i=p_.get(I);if(i?.dirty){if(!window.confirm(`"${i.label}" has unsaved changes. Close anyway?`))return}p_.close(I),G(I),$.current?.(I)}},[G]),g=M((I)=>{let i=p_.get(I);if(i?.dirty){if(!window.confirm(`"${i.label}" has unsaved changes. Close anyway?`))return}p_.close(I),G(I),$.current?.(I)},[G]),u=M((I)=>{p_.activate(I)},[]),f=M((I)=>{let i=p_.getTabs().filter((d)=>d.id!==I&&!d.pinned),n=i.filter((d)=>d.dirty).length;if(n>0){if(!window.confirm(`${n} unsaved tab${n>1?"s":""} will be closed. Continue?`))return}let e=i.map((d)=>d.id);p_.closeOthers(I),e.forEach((d)=>{G(d),$.current?.(d)})},[G]),w=M(()=>{let I=p_.getTabs().filter((e)=>!e.pinned),i=I.filter((e)=>e.dirty).length;if(i>0){if(!window.confirm(`${i} unsaved tab${i>1?"s":""} will be closed. Continue?`))return}let n=I.map((e)=>e.id);p_.closeAll(),n.forEach((e)=>{G(e),$.current?.(e)})},[G]),H=M((I)=>{p_.togglePin(I)},[]),x=M(()=>{let I=p_.getActiveId();if(I)window.dispatchEvent(new CustomEvent("workspace-reveal-path",{detail:{path:I}}))},[]);return R(()=>{let I=(i)=>{let{oldPath:n,newPath:e,type:d}=i.detail||{};if(!n||!e)return;if(d==="dir"){for(let N_ of p_.getTabs())if(N_.path===n||N_.path.startsWith(`${n}/`)){let p=`${e}${N_.path.slice(n.length)}`;p_.rename(N_.id,p)}}else p_.rename(n,e)};return window.addEventListener("workspace-file-renamed",I),()=>window.removeEventListener("workspace-file-renamed",I)},[]),R(()=>{let I=(i)=>{if(p_.hasUnsaved())i.preventDefault(),i.returnValue=""};return window.addEventListener("beforeunload",I),()=>window.removeEventListener("beforeunload",I)},[]),{editorOpen:K,tabStripTabs:j,tabStripActiveId:N,previewTabs:L,openEditor:F,closeEditor:b,handleTabClose:g,handleTabActivate:u,handleTabCloseOthers:f,handleTabCloseAll:w,handleTabTogglePin:H,handleTabTogglePreview:B,revealInExplorer:x}}function a4(_,$){try{if(typeof window>"u")return $;let j=window.__PICLAW_SILENCE||{},Z=`__PICLAW_SILENCE_${_.toUpperCase()}_MS`,N=j[_]??window[Z],z=Number(N);return Number.isFinite(z)?z:$}catch{return $}}var t4=a4("warning",30000),R6=a4("finalize",120000),e4=a4("refresh",30000),v6=30000;function u6(_){let $={};return(_?.agents||[]).forEach((j)=>{$[j.id]=j}),$}function m6(){if(/iPad|iPhone/.test(navigator.userAgent))return!0;return navigator.platform==="MacIntel"&&navigator.maxTouchPoints>1}function g6(_=30000){let[,$]=S(0);R(()=>{let j=setInterval(()=>$((Z)=>Z+1),_);return()=>clearInterval(j)},[_])}function _3(_,$=160){let j=String(_||"").replace(/\r\n/g,`
`);if(!j)return 0;return j.split(`
`).reduce((Z,N)=>Z+Math.max(1,Math.ceil(N.length/$)),0)}function p6(_,$){if(typeof _!=="string")return{kind:"ignore"};let j=_.trim();if(!j)return{kind:"toast",title:"No file selected",detail:"Use a valid file path from a file pill.",level:"warning"};if(!$.editorOpen)return{kind:"toast",title:"Editor pane is not open",detail:"Open the editor pane to open files from pills.",level:"warning"};if(/^[a-z][a-z0-9+.-]*:/i.test(j))return{kind:"toast",title:"Cannot open external path from file pill",detail:"Use an in-workspace file path.",level:"warning"};try{if(!$.resolvePane({path:j,mode:"edit"}))return{kind:"toast",title:"No editor available",detail:`No editor can open: ${j}`,level:"warning"}}catch{return{kind:"toast",title:"No editor available",detail:`No editor can open: ${j}`,level:"warning"}}return{kind:"open",path:j}}function V2(_={}){let $=_.window??(typeof window<"u"?window:null),j=_.navigator??(typeof navigator<"u"?navigator:null);if(j&&j.standalone===!0)return!0;if(!$||typeof $.matchMedia!=="function")return!1;return["(display-mode: standalone)","(display-mode: minimal-ui)","(display-mode: fullscreen)"].some((N)=>{try{return Boolean($.matchMedia(N)?.matches)}catch{return!1}})}function $3(_={}){let $=_.window??(typeof window<"u"?window:null),j=_.navigator??(typeof navigator<"u"?navigator:null);if(!$&&!j)return!1;let Z=String(j?.userAgent||""),N=Number(j?.maxTouchPoints||0),z=/Android|webOS|iPhone|iPad|iPod|Mobile|Windows Phone/i.test(Z),K=(()=>{if(!$||typeof $.matchMedia!=="function")return!1;try{return Boolean($.matchMedia("(pointer: coarse)")?.matches||$.matchMedia("(any-pointer: coarse)")?.matches)}catch{return!1}})();return Boolean(z||N>1||K)}function c6(_,$={}){if(V2($))return null;if($3($))return{target:"_blank",features:void 0,mode:"tab"};return{target:Uj(_),features:"popup=yes,width=900,height=960,resizable=yes,scrollbars=yes",mode:"popup"}}function h6(_,$={}){let j=$.window??(typeof window<"u"?window:null);if(!j||!_)return null;try{return _.features?j.open("about:blank",_.target,_.features):j.open("about:blank",_.target)}catch{return null}}function i6(_,$={}){if(!_||!_.document)return;try{let j=String($.title||"Opening branch…"),Z=String($.message||"Preparing a new branch window…");_.document.title=j,_.document.body.innerHTML=`
            <div style="font-family: system-ui, sans-serif; padding: 24px; color: #222;">
                <h1 style="font-size: 18px; margin: 0 0 12px;">${j}</h1>
                <p style="margin: 0; line-height: 1.5;">${Z}</p>
            </div>
        `}catch{}}function l6(_,$){if(!_||!$)return;try{if(_.location&&typeof _.location.replace==="function"){_.location.replace(String($));return}_.location=String($)}catch{}}function n6(_){if(!_||typeof _.close!=="function")return;try{_.close()}catch{}}function X2(_,$,j={}){let Z=new URL(String(_||"http://localhost/")),N=String($||"").trim()||"web:default";if(Z.searchParams.set("chat_jid",N),Z.searchParams.delete("branch_loader"),Z.searchParams.delete("branch_source_chat_jid"),j.chatOnly!==!1)Z.searchParams.set("chat_only","1");return Z.toString()}function d6(_,$,j={}){let Z=new URL(String(_||"http://localhost/")),N=String($||"").trim()||"web:default";if(Z.searchParams.set("branch_loader","1"),Z.searchParams.set("branch_source_chat_jid",N),j.chatOnly!==!1)Z.searchParams.set("chat_only","1");return Z.toString()}function Uj(_){return`piclaw-chat-${String(_||"web:default").trim().toLowerCase().replace(/[^a-z0-9_-]+/g,"-")||"default"}`}function D1(_){let $=_ instanceof Error?_.message:String(_||"").trim(),j=String($||"").trim();if(!j)return"PiClaw could not open a new branch window.";let Z=j.toLowerCase();if(Z.includes("no stable turn boundary"))return"This chat is still in flight and does not yet have a stable turn boundary to fork from.";if(Z.includes("cannot fork a branch while the source chat is still active"))return"This chat is still active. Please wait for the current turn to settle, then try again.";if(Z.includes("cancelled"))return"Branch creation was cancelled before a new chat window could be opened.";if(Z.includes("did not return a chat id"))return"PiClaw created no usable branch id for the new window. Please try again.";if(Z.includes("failed to fork branch")||Z.includes("failed to fork chat branch"))return"PiClaw could not create the new branch. Please try again.";return j}function j3(_){return String(_||"").trim()||"web:default"}function o6({remainingQueueCount:_=0,currentTurnId:$=null,isAgentTurnActive:j=!1}={}){return Number(_||0)<=0&&!$&&!j}function s6(_={}){return V2(_)&&$3(_)}function Fj(_={}){let $=_.window??(typeof window<"u"?window:null),j=Number($?.visualViewport?.height||0);if(Number.isFinite(j)&&j>0)return Math.round(j);let Z=Number($?.innerHeight||0);if(Number.isFinite(Z)&&Z>0)return Math.round(Z);return null}function Hj(_={},$={}){if(!s6(_))return null;let j=_.window??(typeof window<"u"?window:null),Z=_.document??(typeof document<"u"?document:null);if(!j||!Z?.documentElement)return null;let N=Fj({window:j});if(N&&N>0)Z.documentElement.style.setProperty("--app-height",`${N}px`);if($.resetScroll===!0){try{if(typeof j.scrollTo==="function")j.scrollTo(0,0)}catch{}try{if(Z.scrollingElement)Z.scrollingElement.scrollTop=0,Z.scrollingElement.scrollLeft=0;if(Z.documentElement)Z.documentElement.scrollTop=0,Z.documentElement.scrollLeft=0;if(Z.body)Z.body.scrollTop=0,Z.body.scrollLeft=0}catch{}}return N}function r6(_={}){if(!s6(_))return()=>{};let $=_.window??(typeof window<"u"?window:null),j=_.document??(typeof document<"u"?document:null);if(!$||!j)return()=>{};let Z=0,N=new Set,z=()=>{if(Z)$.cancelAnimationFrame?.(Z),Z=0;for(let G of N)$.clearTimeout?.(G);N.clear()},K=()=>{Z=0,Hj({window:$,document:j})},X=()=>{if(Z)$.cancelAnimationFrame?.(Z);Z=$.requestAnimationFrame?.(K)??0},L=()=>{X();for(let G of[80,220,420]){let F=$.setTimeout?.(()=>{N.delete(F),X()},G);if(F!=null)N.add(F)}},q=()=>{if(j.visibilityState&&j.visibilityState!=="visible")return;L()},B=$.visualViewport;return L(),$.addEventListener("focus",L),$.addEventListener("pageshow",L),$.addEventListener("resize",L),$.addEventListener("orientationchange",L),j.addEventListener("visibilitychange",q),j.addEventListener("focusin",L,!0),B?.addEventListener?.("resize",L),B?.addEventListener?.("scroll",L),()=>{z(),$.removeEventListener("focus",L),$.removeEventListener("pageshow",L),$.removeEventListener("resize",L),$.removeEventListener("orientationchange",L),j.removeEventListener("visibilitychange",q),j.removeEventListener("focusin",L,!0),B?.removeEventListener?.("resize",L),B?.removeEventListener?.("scroll",L)}}function Jj(_,$){if(typeof window<"u")console.warn(`[app] API export missing: ${_}. Using fallback behavior.`);return async()=>$}function K$(_,$,j){let Z=_?.[$];return typeof Z==="function"?Z:Jj($,j)}var Dj=new Set(["extension_ui_request","extension_ui_timeout","extension_ui_notify","extension_ui_status","extension_ui_working","extension_ui_widget","extension_ui_title","extension_ui_editor_text","extension_ui_error"]);function a6(_){return Dj.has(String(_||"").trim())}function Ej(_){let $=String(_||"").trim();if(!$.startsWith("extension_ui_"))return"piclaw-extension-ui";return`piclaw-extension-ui:${$.slice(13).replace(/_/g,"-")}`}function t6(_,$,j=globalThis.window){if(!j||typeof j.dispatchEvent!=="function"||typeof CustomEvent>"u")return!1;let Z={type:_,payload:$};return j.dispatchEvent(new CustomEvent("piclaw-extension-ui",{detail:Z})),j.dispatchEvent(new CustomEvent(Ej(_),{detail:Z})),!0}var yj=["(display-mode: standalone)","(display-mode: minimal-ui)","(display-mode: fullscreen)"];function e6(_,$={}){let j=$.window??(typeof window<"u"?window:null),Z=$.navigator??(typeof navigator<"u"?navigator:null);if(!j||typeof _!=="function")return()=>{};let N=()=>{_(V2({window:j,navigator:Z}))};N();let K=yj.map((X)=>{try{return j.matchMedia?.(X)??null}catch{return null}}).filter(Boolean).map((X)=>{if(typeof X.addEventListener==="function")return X.addEventListener("change",N),()=>X.removeEventListener("change",N);if(typeof X.addListener==="function")return X.addListener(N),()=>X.removeListener(N);return()=>{}});return j.addEventListener?.("focus",N),j.addEventListener?.("pageshow",N),()=>{for(let X of K)X();j.removeEventListener?.("focus",N),j.removeEventListener?.("pageshow",N)}}function _9(_,$={}){let j=$.window??(typeof window<"u"?window:null),Z=$.document??(typeof document<"u"?document:null);if(!j||!Z||typeof _!=="function")return()=>{};let N=()=>{if(Z.visibilityState&&Z.visibilityState!=="visible")return;_()};return j.addEventListener?.("focus",N),j.addEventListener?.("pageshow",N),Z.addEventListener?.("visibilitychange",N),()=>{j.removeEventListener?.("focus",N),j.removeEventListener?.("pageshow",N),Z.removeEventListener?.("visibilitychange",N)}}var z3="piclaw_btw_session";function kj(_){if(_==="root")return"Branch family";if(_==="all")return"All chats";return"Current branch"}function wj(){let _=N$(z3);if(!_)return null;try{let $=JSON.parse(_);if(!$||typeof $!=="object")return null;let j=typeof $.question==="string"?$.question:"",Z=typeof $.answer==="string"?$.answer:"",N=typeof $.thinking==="string"?$.thinking:"",z=typeof $.error==="string"&&$.error.trim()?$.error:null,K=$.status==="running"?"error":$.status==="success"||$.status==="error"?$.status:"success";return{question:j,answer:Z,thinking:N,error:K==="error"?z||"BTW stream interrupted. You can retry.":z,model:null,status:K}}catch{return null}}var $9=h1,j9=l1,Aj=d1,Z9=t1,N9=e1,z9=o1,Z3=K$(l0,"getAgentContext",null),Pj=K$(l0,"getAgentModels",{current:null,models:[]}),Mj=K$(l0,"getActiveChatAgents",{chats:[]}),N3=K$(l0,"getChatBranches",{chats:[]}),bj=K$(l0,"renameChatBranch",null),Ij=K$(l0,"pruneChatBranch",null),K9=K$(l0,"restoreChatBranch",null),xj=K$(l0,"getAgentQueueState",{count:0}),Cj=K$(l0,"steerAgentQueueItem",{removed:!1,queued:"steer"}),Tj=K$(l0,"removeAgentQueueItem",{removed:!1}),Sj=K$(l0,"streamSidePrompt",null);if(window.marked)marked.setOptions({breaks:!0,gfm:!0});d_.register(k4);d_.register(T4);d_.register(C4);d_.register(S4);d_.register(f4);d_.register(R4);d_.register(u4);d_.register(m4);d_.register(p4);w4();d_.register(b4);d_.register(I4);function fj({locationParams:_}){let $=n_(()=>{let V=_.get("chat_jid");return V&&V.trim()?V.trim():"web:default"},[_]),j=n_(()=>{let V=(_.get("chat_only")||_.get("chat-only")||"").trim().toLowerCase();return V==="1"||V==="true"||V==="yes"},[_]),Z=n_(()=>{let V=(_.get("branch_loader")||"").trim().toLowerCase();return V==="1"||V==="true"||V==="yes"},[_]),N=n_(()=>{let V=_.get("branch_source_chat_jid");return V&&V.trim()?V.trim():$},[$,_]),[z,K]=S("disconnected"),[X,L]=S(()=>V2()),[q,B]=S(null),[G,F]=S(null),[b,g]=S(!1),[u,f]=S("current"),[w,H]=S([]),[x,I]=S([]),[i,n]=S(null),{agentStatus:e,setAgentStatus:d,agentDraft:N_,setAgentDraft:p,agentPlan:q_,setAgentPlan:c_,agentThought:__,setAgentThought:t,pendingRequest:Z_,setPendingRequest:$_,currentTurnId:Q_,setCurrentTurnId:b_,steerQueuedTurnId:W_,setSteerQueuedTurnId:k_,lastAgentEventRef:O_,lastSilenceNoticeRef:F_,isAgentRunningRef:v_,draftBufferRef:D_,thoughtBufferRef:I_,pendingRequestRef:j0,stalledPostIdRef:F0,currentTurnIdRef:G_,steerQueuedTurnIdRef:a,thoughtExpandedRef:H_,draftExpandedRef:K_}=T6(),[A_,u_]=S({}),[h_,t_]=S(null),[i_,E_]=S(null),[J_,o_]=S(!1),[e_,g_]=S(null),[m_,V0]=S([]),[_0,g0]=S([]),[X0,x_]=S(null),[C_,y_]=S([]),[k0,B0]=S(!1),[P_,l_]=S(()=>wj()),s_=n_(()=>m_.find((V)=>V?.chat_jid===$)||null,[m_,$]),T_=n_(()=>_0.find((V)=>V?.chat_jid===$)||s_||null,[s_,_0,$]),Q0=T_?.root_chat_jid||s_?.root_chat_jid||$,T0=kj(u),[d0,T]=S(()=>({status:Z?"running":"idle",message:Z?"Preparing a new chat branch…":""})),s=C_.length,z_=y(new Set),U_=y([]),X_=y(new Set),S_=y(0),R0=y({inFlight:!1,lastAttemptAt:0,turnId:null});z_.current=new Set(C_.map((V)=>V.row_id)),U_.current=C_;let{notificationsEnabled:J$,notificationPermission:Y$,toggleNotifications:T$,notify:w0}=x6(),[q$,Z0]=S(()=>new Set),[b0,L$]=S(()=>E2("workspaceOpen",!0)),o0=y(null),{editorOpen:S0,tabStripTabs:s$,tabStripActiveId:H0,previewTabs:D$,openEditor:N0,closeEditor:W$,handleTabClose:B$,handleTabActivate:A0,handleTabCloseOthers:f0,handleTabCloseAll:s0,handleTabTogglePin:Q$,handleTabTogglePreview:E$,revealInExplorer:S$}=f6({onTabClosed:(V)=>o0.current?.(V)}),f$=y(null),J0=y(null),O$=y(null),r0=y(null),I0=d_.getDockPanes().length>0,[z0,q2]=S(!1),x0=M(()=>q2((V)=>!V),[]),y$=M(()=>{N0(P4,{label:"Terminal"})},[N0]),G$=!j&&(S0||I0&&z0);R(()=>{let V=f$.current;if(!V)return;if(J0.current)J0.current.dispose(),J0.current=null;let W=H0;if(!W)return;let J={path:W,mode:"edit"},k=d_.resolve(J)||d_.get("editor");if(!k){V.innerHTML='<div style="padding:2em;color:var(--text-secondary);text-align:center;">No editor available for this file.</div>';return}let A=k.mount(V,J);J0.current=A,A.onDirtyChange?.((r)=>{p_.setDirty(W,r)}),A.onSaveRequest?.(()=>{}),A.onClose?.(()=>{W$()});let v=p_.getViewState(W);if(v&&typeof A.restoreViewState==="function")requestAnimationFrame(()=>A.restoreViewState(v));if(typeof A.onViewStateChange==="function")A.onViewStateChange((r)=>{p_.saveViewState(W,r)});return requestAnimationFrame(()=>A.focus()),()=>{if(J0.current===A)A.dispose(),J0.current=null}},[H0,W$]),R(()=>{let V=(W)=>{let J=W.detail?.path;if(J)N0(J)};return document.addEventListener("office-viewer:open-tab",V),document.addEventListener("drawio:open-tab",V),document.addEventListener("csv-viewer:open-tab",V),document.addEventListener("pdf-viewer:open-tab",V),document.addEventListener("image-viewer:open-tab",V),document.addEventListener("video-viewer:open-tab",V),()=>{document.removeEventListener("office-viewer:open-tab",V),document.removeEventListener("drawio:open-tab",V),document.removeEventListener("csv-viewer:open-tab",V),document.removeEventListener("pdf-viewer:open-tab",V),document.removeEventListener("image-viewer:open-tab",V),document.removeEventListener("video-viewer:open-tab",V)}},[N0]),R(()=>{let V=O$.current;if(r0.current)r0.current.dispose(),r0.current=null;if(!V||!I0||!z0)return;let W=d_.getDockPanes()[0];if(!W){V.innerHTML='<div class="terminal-placeholder">No dock pane available.</div>';return}let J=W.mount(V,{mode:"view"});return r0.current=J,requestAnimationFrame(()=>J.focus?.()),()=>{if(r0.current===J)J.dispose(),r0.current=null}},[I0,z0]);let[k$,w$]=S({name:"You",avatar_url:null,avatar_background:null}),R$=y(!1),M_=y(!1),D0=y(null),O0=y($),A$=y(new Map),r$=y($),v$=y(0),V$=y(0),v0=y({}),G0=y({name:null,avatar_url:null}),r_=y({currentHashtag:null,searchQuery:null,searchOpen:!1}),u0=y(null),P$=y(null),a$=y(0),U$=y(0),a0=y(0),M$=y(null),p0=y(null),U0=y(null),F$=y(null),t$=y(0),u$=y({title:null,avatarBase:null}),b$=y(null),m$=M(()=>{if(b$.current)clearTimeout(b$.current),b$.current=null;n(null)},[]);g6(30000),R(()=>{return z8()},[]),R(()=>{return e6(L)},[]),R(()=>{$0("workspaceOpen",String(b0))},[b0]),R(()=>{return r6()},[]),R(()=>{return()=>{m$()}},[m$]),R(()=>{if(!P_){$0(z3,"");return}$0(z3,JSON.stringify({question:P_.question||"",answer:P_.answer||"",thinking:P_.thinking||"",error:P_.error||null,status:P_.status||"success"}))},[P_]),R(()=>{v0.current=A_||{}},[A_]),R(()=>{O0.current=$},[$]),R(()=>{G0.current=k$||{name:"You",avatar_url:null,avatar_background:null}},[k$]);let g$=M((V,W,J=null)=>{if(typeof document>"u")return;let k=(V||"").trim()||"PiClaw";if(u$.current.title!==k){document.title=k;let j_=document.querySelector('meta[name="apple-mobile-web-app-title"]');if(j_&&j_.getAttribute("content")!==k)j_.setAttribute("content",k);u$.current.title=k}let A=document.getElementById("dynamic-favicon");if(!A)return;let v=A.getAttribute("data-default")||A.getAttribute("href")||"/favicon.ico",r=W||v,V_=W?`${r}|${J||""}`:r;if(u$.current.avatarBase!==V_){let j_=W?`${r}${r.includes("?")?"&":"?"}v=${J||Date.now()}`:r;A.setAttribute("href",j_),u$.current.avatarBase=V_}},[]),e$=M((V)=>{if(!V)return;H((W)=>W.includes(V)?W:[...W,V])},[]),t0=M((V)=>{H((W)=>W.filter((J)=>J!==V))},[]);o0.current=t0;let _2=M(()=>{H([])},[]),p$=M((V)=>{if(!Array.isArray(V)){H([]);return}let W=[],J=new Set;for(let k of V){if(typeof k!=="string"||!k.trim())continue;let A=k.trim();if(J.has(A))continue;J.add(A),W.push(A)}H(W)},[]),L_=M((V,W=null,J="info",k=3000)=>{m$(),n({title:V,detail:W||null,kind:J||"info"}),b$.current=setTimeout(()=>{n((A)=>A?.title===V?null:A)},k)},[m$]),L2=M((V)=>{let W=p6(V,{editorOpen:S0,resolvePane:(J)=>d_.resolve(J)});if(W.kind==="open"){N0(W.path);return}if(W.kind==="toast")L_(W.title,W.detail,W.level)},[S0,N0,L_]),A2=M(()=>{let V=H0;if(V)e$(V)},[H0,e$]),c$=M((V)=>{if(!V)return;I((W)=>W.includes(V)?W:[...W,V])},[]),$2=M(async(V,W=null)=>{let J=(A)=>{A.scrollIntoView({behavior:"smooth",block:"center"}),A.classList.add("post-highlight"),setTimeout(()=>A.classList.remove("post-highlight"),2000)},k=document.getElementById("post-"+V);if(k){J(k);return}try{let A=typeof W==="string"&&W.trim()?W.trim():$,r=(await i1(V,A))?.thread?.[0];if(!r)return;m((V_)=>{if(!V_)return[r];if(V_.some((j_)=>j_.id===r.id))return V_;return[...V_,r]}),requestAnimationFrame(()=>{setTimeout(()=>{let V_=document.getElementById("post-"+V);if(V_)J(V_)},50)})}catch(A){console.error("[scrollToMessage] Failed to fetch message",V,A)}},[$]),h$=M((V)=>{I((W)=>W.filter((J)=>J!==V))},[]),P2=M(()=>{I([])},[]),j2=M((V)=>{if(!Array.isArray(V)){I([]);return}let W=[],J=new Set;for(let k of V){if(typeof k!=="string"||!k.trim())continue;let A=k.trim();if(J.has(A))continue;J.add(A),W.push(A)}I(W)},[]),Z2=M((V)=>{let W=typeof V==="string"&&V.trim()?V.trim():"Could not send your message.";L_("Compose failed",W,"error",5000)},[L_]),c0=M((V={})=>{let W=Date.now();if(O_.current=W,V.running)v_.current=!0,B0((J)=>J?J:!0);if(V.clearSilence)F_.current=0},[B0]),m0=M(()=>{if(F$.current)clearTimeout(F$.current),F$.current=null;t$.current=0},[]);R(()=>()=>{m0()},[m0]);let i$=M(()=>{m0(),d((V)=>{if(!V)return V;if(!(V.last_activity||V.lastActivity))return V;let{last_activity:W,lastActivity:J,...k}=V;return k})},[m0]),B2=M((V)=>{if(!V)return;m0();let W=Date.now();t$.current=W,d({type:V.type||"active",last_activity:!0}),F$.current=setTimeout(()=>{if(t$.current!==W)return;d((J)=>{if(!J||!(J.last_activity||J.lastActivity))return J;return null})},v6)},[m0]),h0=M(()=>{v_.current=!1,B0(!1),O_.current=null,F_.current=0,D_.current="",I_.current="",j0.current=null,p0.current=null,G_.current=null,a.current=null,D0.current=null,R0.current={inFlight:!1,lastAttemptAt:0,turnId:null},m0(),b_(null),k_(null),H_.current=!1,K_.current=!1},[m0,b_,k_,B0]),H$=M((V)=>{if(!o6({remainingQueueCount:V,currentTurnId:G_.current,isAgentTurnActive:k0}))return;a.current=null,k_(null)},[k0,k_]),Q2=M(()=>({agentStatus:null,agentDraft:{text:"",totalLines:0},agentPlan:"",agentThought:{text:"",totalLines:0},pendingRequest:null,currentTurnId:null,steerQueuedTurnId:null,isAgentTurnActive:!1,followupQueueItems:[],activeModel:null,activeThinkingLevel:null,supportsThinking:!1,activeModelUsage:null,contextUsage:null,isAgentRunning:!1,wasAgentActive:!1,draftBuffer:"",thoughtBuffer:"",lastAgentEvent:null,lastSilenceNotice:0,lastAgentResponse:null,currentTurnIdRef:null,steerQueuedTurnIdRef:null,thoughtExpanded:!1,draftExpanded:!1,agentStatusRef:null,silentRecovery:{inFlight:!1,lastAttemptAt:0,turnId:null}}),[]),l$=M(()=>({agentStatus:e,agentDraft:N_?{...N_}:{text:"",totalLines:0},agentPlan:q_||"",agentThought:__?{...__}:{text:"",totalLines:0},pendingRequest:Z_,currentTurnId:Q_,steerQueuedTurnId:W_,isAgentTurnActive:Boolean(k0),followupQueueItems:Array.isArray(C_)?C_.map((V)=>({...V})):[],activeModel:h_,activeThinkingLevel:i_,supportsThinking:Boolean(J_),activeModelUsage:e_,contextUsage:X0,isAgentRunning:Boolean(v_.current),wasAgentActive:Boolean(M_.current),draftBuffer:D_.current||"",thoughtBuffer:I_.current||"",lastAgentEvent:O_.current||null,lastSilenceNotice:F_.current||0,lastAgentResponse:p0.current||null,currentTurnIdRef:G_.current||null,steerQueuedTurnIdRef:a.current||null,thoughtExpanded:Boolean(H_.current),draftExpanded:Boolean(K_.current),agentStatusRef:D0.current||null,silentRecovery:{...R0.current||{inFlight:!1,lastAttemptAt:0,turnId:null}}}),[h_,e_,i_,N_,q_,e,__,X0,Q_,C_,k0,Z_,W_,J_]),O2=M((V)=>{let W=V||Q2();m0(),v_.current=Boolean(W.isAgentRunning),M_.current=Boolean(W.wasAgentActive),B0(Boolean(W.isAgentTurnActive)),O_.current=W.lastAgentEvent||null,F_.current=Number(W.lastSilenceNotice||0),D_.current=W.draftBuffer||"",I_.current=W.thoughtBuffer||"",j0.current=W.pendingRequest||null,p0.current=W.lastAgentResponse||null,G_.current=W.currentTurnIdRef||null,a.current=W.steerQueuedTurnIdRef||null,D0.current=W.agentStatusRef||null,R0.current=W.silentRecovery||{inFlight:!1,lastAttemptAt:0,turnId:null},H_.current=Boolean(W.thoughtExpanded),K_.current=Boolean(W.draftExpanded),d(W.agentStatus||null),p(W.agentDraft?{...W.agentDraft}:{text:"",totalLines:0}),c_(W.agentPlan||""),t(W.agentThought?{...W.agentThought}:{text:"",totalLines:0}),$_(W.pendingRequest||null),b_(W.currentTurnId||null),k_(W.steerQueuedTurnId||null),y_(Array.isArray(W.followupQueueItems)?W.followupQueueItems.map((J)=>({...J})):[]),t_(W.activeModel||null),E_(W.activeThinkingLevel||null),o_(Boolean(W.supportsThinking)),g_(W.activeModelUsage??null),x_(W.contextUsage??null)},[m0,Q2,b_,y_,B0,k_]),i0=M((V)=>{if(!V)return;if(G_.current===V)return;G_.current=V,R0.current={inFlight:!1,lastAttemptAt:0,turnId:V},b_(V),a.current=null,k_(null),D_.current="",I_.current="",p({text:"",totalLines:0}),c_(""),t({text:"",totalLines:0}),$_(null),j0.current=null,p0.current=null,H_.current=!1,K_.current=!1},[b_,k_]),Q=M((V)=>{if(typeof document<"u"){let j_=typeof document.hasFocus==="function"?document.hasFocus():!0;if(!document.hidden&&j_)return}let W=p0.current;if(!W||!W.post)return;if(V&&W.turnId&&W.turnId!==V)return;let J=W.post;if(J.id&&M$.current===J.id)return;let k=String(J?.data?.content||"").trim();if(!k)return;M$.current=J.id||M$.current,p0.current=null;let A=k.replace(/\s+/g," ").slice(0,200),v=v0.current||{},V_=(J?.data?.agent_id?v[J.data.agent_id]:null)?.name||"Pi";w0(V_,A)},[w0]),P=M(async(V,W)=>{if(V!=="thought"&&V!=="draft")return;let J=G_.current;if(V==="thought"){if(H_.current=W,J)try{await N9(J,"thought",W)}catch(k){console.warn("Failed to update thought visibility:",k)}if(!W)return;try{let k=J?await Z9(J,"thought"):null;if(k?.text)I_.current=k.text;t((A)=>({...A||{text:"",totalLines:0},fullText:I_.current||A?.fullText||"",totalLines:Number.isFinite(k?.total_lines)?k.total_lines:A?.totalLines||0}))}catch(k){console.warn("Failed to fetch full thought:",k)}return}if(K_.current=W,J)try{await N9(J,"draft",W)}catch(k){console.warn("Failed to update draft visibility:",k)}if(!W)return;try{let k=J?await Z9(J,"draft"):null;if(k?.text)D_.current=k.text;p((A)=>({...A||{text:"",totalLines:0},fullText:D_.current||A?.fullText||"",totalLines:Number.isFinite(k?.total_lines)?k.total_lines:A?.totalLines||0}))}catch(k){console.warn("Failed to fetch full draft:",k)}},[]),Y=y(null),O=M(()=>{let V=u0.current;if(!V)return;if(!(Math.abs(V.scrollTop)>150))V.scrollTop=0},[]);Y.current=O;let D=M((V)=>{let W=u0.current;if(!W||typeof V!=="function"){V?.();return}let{currentHashtag:J,searchQuery:k,searchOpen:A}=r_.current||{},v=!((k||A)&&!J),r=v?W.scrollHeight-W.scrollTop:W.scrollTop;V(),requestAnimationFrame(()=>{let V_=u0.current;if(!V_)return;if(v){let j_=Math.max(V_.scrollHeight-r,0);V_.scrollTop=j_}else{let j_=Math.max(V_.scrollHeight-V_.clientHeight,0),h=Math.min(r,j_);V_.scrollTop=h}})},[]),E=M((V)=>{let W=u0.current;if(!W||typeof V!=="function"){V?.();return}let J=W.scrollTop;V(),requestAnimationFrame(()=>{let k=u0.current;if(!k)return;let A=Math.max(k.scrollHeight-k.clientHeight,0);k.scrollTop=Math.min(J,A)})},[]),C="Queued as a follow-up (one-at-a-time).",l="⁣",o=M((V)=>{if(!V||!Array.isArray(V))return V;let W=z_.current,J=new Set(W),k=V.filter((A)=>{if(J.has(A?.id))return!1;if(A?.data?.is_bot_message){let v=A?.data?.content;if(v===C||v===l)return!1}return!0});return k.length===V.length?V:k},[]),{posts:c,setPosts:m,hasMore:Y_,setHasMore:K0,hasMoreRef:P0,loadPosts:Y0,refreshTimeline:W0,loadMore:C0,loadMoreRef:N2}=C6({preserveTimelineScroll:D,preserveTimelineScrollTop:E,chatJid:$}),n$=n_(()=>o(c),[c,C_,o]),U2=M(()=>{let V=F0.current;if(!V)return;m((W)=>W?W.filter((J)=>J.id!==V):W),F0.current=null},[m]),{handleSplitterMouseDown:E1,handleSplitterTouchStart:z2,handleEditorSplitterMouseDown:e0,handleEditorSplitterTouchStart:F2,handleDockSplitterMouseDown:K3,handleDockSplitterTouchStart:y1}=S6({appShellRef:P$,sidebarWidthRef:a$,editorWidthRef:U$,dockHeightRef:a0}),Y3=M(()=>{if(!v_.current)return;v_.current=!1,F_.current=0,O_.current=null,G_.current=null,b_(null),H_.current=!1,K_.current=!1;let V=(D_.current||"").trim();if(D_.current="",I_.current="",p({text:"",totalLines:0}),c_(""),t({text:"",totalLines:0}),$_(null),j0.current=null,p0.current=null,!V){d({type:"error",title:"Response stalled - No content received"});return}let J=`${V}${`

⚠️ Response may be incomplete - the model stopped responding`}`,k=Date.now(),A=new Date().toISOString(),v={id:k,timestamp:A,data:{type:"agent_response",content:J,agent_id:"default",is_local_stall:!0}};F0.current=k,m((r)=>r?l2([...r,v]):[v]),Y.current?.(),d(null)},[b_]);R(()=>{r_.current={currentHashtag:q,searchQuery:G,searchOpen:b}},[q,G,b]);let f_=M(()=>{let V=++S_.current,W=$;xj(W).then((J)=>{if(V!==S_.current)return;if(O0.current!==W)return;let k=X_.current,A=Array.isArray(J?.items)?J.items.map((v)=>({...v})).filter((v)=>!k.has(v.row_id)):[];if(A.length){y_((v)=>{if(v.length===A.length&&v.every((r,V_)=>r.row_id===A[V_].row_id))return v;return A});return}k.clear(),H$(0),y_((v)=>v.length===0?v:[])}).catch(()=>{if(V!==S_.current)return;if(O0.current!==W)return;y_((J)=>J.length===0?J:[])})},[H$,$,y_]),_$=M(async()=>{let V=$;try{let W=await Z3(V);if(O0.current!==V)return;if(W)x_(W)}catch(W){if(O0.current!==V)return;console.warn("Failed to fetch agent context:",W)}},[$]),$$=M(async()=>{let V=$;try{let W=await z9(V);if(O0.current!==V)return null;if(!W||W.status!=="active"||!W.data){if(M_.current){let{currentHashtag:A,searchQuery:v,searchOpen:r}=r_.current||{};if(!A&&!v&&!r)W0()}return M_.current=!1,h0(),D0.current=null,d(null),p({text:"",totalLines:0}),c_(""),t({text:"",totalLines:0}),$_(null),j0.current=null,W??null}M_.current=!0;let J=W.data;D0.current=J;let k=J.turn_id||J.turnId;if(k)i0(k);if(c0({running:!0,clearSilence:!0}),i$(),d(J),W.thought&&W.thought.text)t((A)=>{if(A&&A.text&&A.text.length>=W.thought.text.length)return A;return I_.current=W.thought.text,{text:W.thought.text,totalLines:W.thought.totalLines||0}});if(W.draft&&W.draft.text)p((A)=>{if(A&&A.text&&A.text.length>=W.draft.text.length)return A;return D_.current=W.draft.text,{text:W.draft.text,totalLines:W.draft.totalLines||0}});return W}catch(W){return console.warn("Failed to fetch agent status:",W),null}},[h0,i$,c0,W0,i0]),k1=M(async()=>{if(!v_.current)return null;if(j0.current)return null;let V=G_.current||null,W=R0.current,J=Date.now();if(W.inFlight)return null;if(W.turnId===V&&J-W.lastAttemptAt<e4)return null;W.inFlight=!0,W.lastAttemptAt=J,W.turnId=V;try{let{currentHashtag:k,searchQuery:A,searchOpen:v}=r_.current||{};if(!k&&!A&&!v)await W0();return await f_(),await $$()}finally{W.inFlight=!1}},[$$,f_,W0]);R(()=>{let V=Math.min(1000,Math.max(100,Math.floor(t4/2))),W=setInterval(()=>{if(!v_.current)return;if(j0.current)return;let J=O_.current;if(!J)return;let k=Date.now(),A=k-J,v=m2(D0.current);if(A>=R6){if(!v)d({type:"waiting",title:"Re-syncing after a quiet period…"});k1();return}if(A>=t4){if(k-F_.current>=e4){if(!v){let r=Math.floor(A/1000);d({type:"waiting",title:`Waiting for model… No events for ${r}s`})}F_.current=k,k1()}}},V);return()=>clearInterval(W)},[k1]);let Y9=M((V)=>{if(K(V),V!=="connected"){d(null),p({text:"",totalLines:0}),c_(""),t({text:"",totalLines:0}),$_(null),j0.current=null,h0();return}if(!R$.current){R$.current=!0;let{currentHashtag:A,searchQuery:v,searchOpen:r}=r_.current||{};if(!A&&!v&&!r)W0();$$(),f_(),_$();return}let{currentHashtag:W,searchQuery:J,searchOpen:k}=r_.current;if(!W&&!J&&!k)W0();$$(),f_(),_$()},[h0,W0,$$,f_,_$]),W9=M(async(V)=>{B(V),m(null),await Y0(V)},[Y0]),G9=M(async()=>{B(null),F(null),m(null),await Y0()},[Y0]),V9=M(async(V,W=u)=>{if(!V||!V.trim())return;let J=W==="root"||W==="all"?W:"current";f(J),F(V.trim()),B(null),m(null);try{let k=await $9(V.trim(),50,0,$,J,Q0);m(k.results),K0(!1)}catch(k){console.error("Failed to search:",k),m([])}},[$,Q0,u]),X9=M(()=>{g(!0),F(null),B(null),f("current"),m([])},[]),q9=M(()=>{g(!1),F(null),Y0()},[Y0]),vj=M(()=>{},[]),w1=!q&&!G&&!b,L9=M(async(V)=>{if(!V)return;let W=V.id,J=typeof V?.chat_jid==="string"&&V.chat_jid.trim()?V.chat_jid.trim():$,k=n$?.filter((v)=>v?.data?.thread_id===W&&v?.id!==W).length||0;if(k>0){if(!window.confirm(`Delete this message and its ${k} replies?`))return}let A=(v)=>{if(!v.length)return;Z0((V_)=>{let j_=new Set(V_);return v.forEach((h)=>j_.add(h)),j_}),setTimeout(()=>{if(E(()=>{m((V_)=>V_?V_.filter((j_)=>!v.includes(j_.id)):V_)}),Z0((V_)=>{let j_=new Set(V_);return v.forEach((h)=>j_.delete(h)),j_}),P0.current)N2.current?.({preserveScroll:!0,preserveMode:"top"})},180)};try{let v=await j9(W,k>0,J);if(v?.ids?.length)A(v.ids)}catch(v){let r=v?.message||"";if(k===0&&r.includes("Replies exist")){if(!window.confirm("Delete this message and its replies?"))return;let j_=await j9(W,!0,J);if(j_?.ids?.length)A(j_.ids);return}console.error("Failed to delete post:",v),alert(`Failed to delete message: ${r}`)}},[$,n$,E]),W3=M(async()=>{try{let V=await Aj();u_(u6(V));let W=V?.user||{};w$((k)=>{let A=typeof W.name==="string"&&W.name.trim()?W.name.trim():"You",v=typeof W.avatar_url==="string"?W.avatar_url.trim():null,r=typeof W.avatar_background==="string"&&W.avatar_background.trim()?W.avatar_background.trim():null;if(k.name===A&&k.avatar_url===v&&k.avatar_background===r)return k;return{name:A,avatar_url:v,avatar_background:r}});let J=(V?.agents||[]).find((k)=>k.id==="default");g$(J?.name,J?.avatar_url)}catch(V){console.warn("Failed to load agents:",V)}try{let V=$,W=await Z3(V);if(O0.current!==V)return;if(W)x_(W)}catch{}},[g$,$]);R(()=>{W3();let V=y2("sidebarWidth",null),W=Number.isFinite(V)?Math.min(Math.max(V,160),600):280;if(a$.current=W,P$.current)P$.current.style.setProperty("--sidebar-width",`${W}px`)},[W3]);let A1=k0||e!==null,G3=M((V)=>{if(!V||typeof V!=="object")return;let W=V.agent_id;if(!W)return;let{agent_name:J,agent_avatar:k}=V;if(!J&&k===void 0)return;let A=v0.current?.[W]||{id:W},v=A.name||null,r=A.avatar_url??A.avatarUrl??A.avatar??null,V_=!1,j_=!1;if(J&&J!==A.name)v=J,j_=!0;if(k!==void 0){let h=typeof k==="string"?k.trim():null,B_=typeof r==="string"?r.trim():null,w_=h||null;if(w_!==(B_||null))r=w_,V_=!0}if(!j_&&!V_)return;if(u_((h)=>{let w_={...h[W]||{id:W}};if(j_)w_.name=v;if(V_)w_.avatar_url=r;return{...h,[W]:w_}}),W==="default")g$(v,r,V_?Date.now():null)},[g$]),V3=M((V)=>{if(!V||typeof V!=="object")return;let W=V.user_name??V.userName,J=V.user_avatar??V.userAvatar,k=V.user_avatar_background??V.userAvatarBackground;if(W===void 0&&J===void 0&&k===void 0)return;w$((A)=>{let v=typeof W==="string"&&W.trim()?W.trim():A.name||"You",r=J===void 0?A.avatar_url:typeof J==="string"&&J.trim()?J.trim():null,V_=k===void 0?A.avatar_background:typeof k==="string"&&k.trim()?k.trim():null;if(A.name===v&&A.avatar_url===r&&A.avatar_background===V_)return A;return{name:v,avatar_url:r,avatar_background:V_}})},[]),P1=M((V)=>{if(!V||typeof V!=="object")return;let W=V.model??V.current;if(W!==void 0)t_(W);if(V.thinking_level!==void 0)E_(V.thinking_level??null);if(V.supports_thinking!==void 0)o_(Boolean(V.supports_thinking));if(V.provider_usage!==void 0)g_(V.provider_usage??null)},[]),M2=M(()=>{let V=$;Pj(V).then((W)=>{if(O0.current!==V)return;if(W)P1(W)}).catch(()=>{})},[P1,$]),M0=M(()=>{let V=$,W=(J)=>Array.isArray(J)?J.filter((k)=>k&&typeof k.chat_jid==="string"&&typeof k.agent_name==="string"&&k.agent_name.trim()):[];Promise.all([Mj().catch(()=>({chats:[]})),N3(null,{includeArchived:!0}).catch(()=>({chats:[]}))]).then(([J,k])=>{if(O0.current!==V)return;let A=W(J?.chats),v=W(k?.chats);if(v.length===0){V0(A);return}let r=new Map(A.map((j_)=>[j_.chat_jid,j_])),V_=v.map((j_)=>{let h=r.get(j_.chat_jid);return h?{...j_,...h,is_active:h.is_active??j_.is_active}:j_});V_.sort((j_,h)=>{if(j_.chat_jid===V&&h.chat_jid!==V)return-1;if(h.chat_jid===V&&j_.chat_jid!==V)return 1;let B_=Boolean(j_.archived_at),w_=Boolean(h.archived_at);if(B_!==w_)return B_?1:-1;if(Boolean(j_.is_active)!==Boolean(h.is_active))return j_.is_active?-1:1;return String(j_.chat_jid).localeCompare(String(h.chat_jid))}),V0(V_)}).catch(()=>{if(O0.current!==V)return;V0([])})},[$]),E0=M(()=>{N3(Q0).then((V)=>{let W=Array.isArray(V?.chats)?V.chats.filter((J)=>J&&typeof J.chat_jid==="string"&&typeof J.agent_name==="string"):[];g0(W)}).catch(()=>{})},[Q0]),B9=M((V)=>{let W=V?.row_id;if(W==null)return;X_.current.add(W),y_((J)=>J.filter((k)=>k?.row_id!==W)),Cj(W,j3($)).then(()=>{f_()}).catch((J)=>{console.warn("[queue] Failed to steer queued item:",J),L_("Failed to steer message","The queued message could not be sent as steering.","warning"),X_.current.delete(W),f_()})},[$,f_,y_,L_]),Q9=M((V)=>{let W=V?.row_id;if(W==null)return;let J=U_.current.filter((k)=>k?.row_id!==W).length;X_.current.add(W),H$(J),y_((k)=>k.filter((A)=>A?.row_id!==W)),Tj(W,j3($)).then(()=>{f_()}).catch((k)=>{console.warn("[queue] Failed to remove queued item:",k),L_("Failed to remove message","The queued message could not be removed.","warning"),X_.current.delete(W),f_()})},[H$,$,f_,y_,L_]),M1=M((V)=>{if(!V||typeof V!=="object")return;if(M0(),E0(),V?.queued==="followup"||V?.queued==="steer"){f_();return}let W=V?.command;if(W&&typeof W==="object"&&(W?.queued_followup||W?.queued_steer))f_()},[M0,E0,f_]),b1=M(()=>{if(U0.current)U0.current.abort(),U0.current=null;l_(null)},[]),n2=M(async(V)=>{let W=String(V||"").trim();if(!W)return L_("BTW needs a question","Usage: /btw <question>","warning"),!0;if(U0.current)U0.current.abort();let J=new AbortController;U0.current=J,l_({question:W,answer:"",thinking:"",error:null,model:null,status:"running"});try{let k=await Sj(W,{signal:J.signal,chatJid:Q8($),systemPrompt:"Answer the user briefly and directly. This is a side conversation that should not affect the main chat until explicitly injected.",onEvent:(A,v)=>{if(A==="side_prompt_start")l_((r)=>r?{...r,status:"running"}:r)},onThinkingDelta:(A)=>{l_((v)=>v?{...v,thinking:`${v.thinking||""}${A||""}`}:v)},onTextDelta:(A)=>{l_((v)=>v?{...v,answer:`${v.answer||""}${A||""}`}:v)}});if(U0.current!==J)return!0;l_((A)=>A?{...A,answer:k?.result||A.answer||"",thinking:k?.thinking||A.thinking||"",model:k?.model||null,status:"success",error:null}:A)}catch(k){if(J.signal.aborted)return!0;l_((A)=>A?{...A,status:"error",error:k?.payload?.error||k?.message||"BTW request failed."}:A)}finally{if(U0.current===J)U0.current=null}return!0},[$,L_]),O9=M(async({content:V})=>{let W=B8(V);if(!W)return!1;if(W.type==="help")return L_("BTW usage","Use /btw <question> to open a side conversation.","info",4000),!0;if(W.type==="clear")return b1(),L_("BTW cleared","Closed the side conversation panel.","info"),!0;if(W.type==="ask")return await n2(W.question),!0;return!1},[b1,n2,L_]),U9=M(()=>{if(P_?.question)n2(P_.question)},[P_,n2]),F9=M(async()=>{let V=F8(P_);if(!V)return;try{let W=await J2("default",V,null,[],A1?"queue":null,$);M1(W),L_(W?.queued==="followup"?"BTW queued":"BTW injected",W?.queued==="followup"?"The BTW summary was queued as a follow-up because the agent is busy.":"The BTW summary was sent to the main chat.","info",3500)}catch(W){L_("BTW inject failed",W?.message||"Could not inject BTW answer into chat.","warning")}},[P_,M1,A1,L_]),b2=M(()=>{M2(),M0(),E0(),f_(),_$()},[M2,M0,E0,f_,_$]);R(()=>{b2();let V=setInterval(()=>{M2(),M0(),E0(),f_()},60000);return()=>clearInterval(V)},[b2,M2,M0,E0,f_]),R(()=>{E0()},[E0]),R(()=>{let V=!1;if(m(null),q)return Y0(q),()=>{V=!0};if(G)return $9(G,50,0,$,u,Q0).then((W)=>{if(V)return;m(W.results),K0(!1)}).catch((W)=>{if(V)return;console.error("Failed to search:",W),m([]),K0(!1)}),()=>{V=!0};return Y0(),()=>{V=!0}},[$,q,G,u,Q0,Y0,K0,m]),R(()=>{let V=r$.current||$;A$.current.set(V,l$())},[$,l$]),R(()=>{let V=r$.current||$;if(V===$)return;A$.current.set(V,l$()),r$.current=$,X_.current.clear(),O2(A$.current.get($)||null),f_(),$$(),_$()},[$,$$,_$,f_,O2,l$]);let H9=M(()=>{let{currentHashtag:V,searchQuery:W,searchOpen:J}=r_.current||{};if(!V&&!W&&!J)W0();b2()},[b2,W0]),I1=M((V,W)=>{let J=W?.turn_id,k=typeof W?.chat_jid==="string"&&W.chat_jid.trim()?W.chat_jid.trim():null,v=k?k===$:V==="connected"||V==="workspace_update";if(v)G3(W),V3(W);if(V==="ui_theme"){K8(W);return}if(V?.startsWith("agent_")){if(!(V==="agent_draft_delta"||V==="agent_thought_delta"||V==="agent_draft"||V==="agent_thought"))i$()}if(V==="connected"){d(null),p({text:"",totalLines:0}),c_(""),t({text:"",totalLines:0}),$_(null),j0.current=null,h0();let h=$;z9(h).then((y0)=>{if(O0.current!==h)return;if(!y0||y0.status!=="active"||!y0.data)return;let K2=y0.data,d2=K2.turn_id||K2.turnId;if(d2)i0(d2);if(c0({clearSilence:!0}),B2(K2),y0.thought&&y0.thought.text)I_.current=y0.thought.text,t({text:y0.thought.text,totalLines:y0.thought.totalLines||0});if(y0.draft&&y0.draft.text)D_.current=y0.draft.text,p({text:y0.draft.text,totalLines:y0.draft.totalLines||0})}).catch((y0)=>{console.warn("Failed to fetch agent status:",y0)});let{currentHashtag:B_,searchQuery:w_,searchOpen:j$}=r_.current||{};if(!B_&&!w_&&!j$)W0();b2();return}if(V==="agent_status"){if(!v){if(W?.type==="done"||W?.type==="error")M0(),E0();return}if(W.type==="done"||W.type==="error"){if(J&&G_.current&&J!==G_.current)return;if(W.type==="done"){Q(J||G_.current);let{currentHashtag:h,searchQuery:B_,searchOpen:w_}=r_.current||{};if(!h&&!B_&&!w_)W0();if(W.context_usage)x_(W.context_usage)}if(M_.current=!1,h0(),X_.current.clear(),M0(),f_(),p({text:"",totalLines:0}),c_(""),t({text:"",totalLines:0}),$_(null),W.type==="error")d({type:"error",title:W.title||"Agent error"}),setTimeout(()=>d(null),8000);else d(null)}else{if(J)i0(J);if(c0({running:!0,clearSilence:!0}),W.type==="thinking")D_.current="",I_.current="",p({text:"",totalLines:0}),c_(""),t({text:"",totalLines:0});D0.current=W,d((h)=>{if(h&&h.type===W.type&&h.title===W.title)return h;return W})}return}if(V==="agent_steer_queued"){if(!v)return;if(J&&G_.current&&J!==G_.current)return;let h=J||G_.current;if(!h)return;a.current=h,k_(h);return}if(V==="agent_followup_queued"){if(!v)return;let h=W?.row_id,B_=W?.content;if(h!=null&&typeof B_==="string"&&B_.trim())y_((w_)=>{if(w_.some((j$)=>j$?.row_id===h))return w_;return[...w_,{row_id:h,content:B_,timestamp:W?.timestamp||null,thread_id:W?.thread_id??null}]});f_();return}if(V==="agent_followup_consumed"){if(!v)return;let h=W?.row_id;if(h!=null){let y0=U_.current.filter((K2)=>K2.row_id!==h).length;H$(y0),y_((K2)=>K2.filter((d2)=>d2.row_id!==h))}f_();let{currentHashtag:B_,searchQuery:w_,searchOpen:j$}=r_.current||{};if(!B_&&!w_&&!j$)W0();return}if(V==="agent_followup_removed"){if(!v)return;let h=W?.row_id;if(h!=null){let B_=U_.current.filter((w_)=>w_.row_id!==h).length;X_.current.add(h),H$(B_),y_((w_)=>w_.filter((j$)=>j$.row_id!==h))}f_();return}if(V==="agent_draft_delta"){if(!v)return;if(J&&G_.current&&J!==G_.current)return;if(J&&!G_.current)i0(J);if(c0({running:!0,clearSilence:!0}),W?.reset)D_.current="";if(W?.delta)D_.current+=W.delta;let h=Date.now();if(!v$.current||h-v$.current>=100){v$.current=h;let B_=D_.current,w_=_3(B_);if(K_.current)p((j$)=>({text:j$?.text||"",totalLines:w_,fullText:B_}));else p({text:B_,totalLines:w_})}return}if(V==="agent_draft"){if(!v)return;if(J&&G_.current&&J!==G_.current)return;if(J&&!G_.current)i0(J);c0({running:!0,clearSilence:!0});let h=W.text||"",B_=W.mode||(W.kind==="plan"?"replace":"append"),w_=Number.isFinite(W.total_lines)?W.total_lines:h?h.replace(/\r\n/g,`
`).split(`
`).length:0;if(W.kind==="plan")if(B_==="replace")c_(h);else c_((j$)=>(j$||"")+h);else if(!K_.current)D_.current=h,p({text:h,totalLines:w_});return}if(V==="agent_thought_delta"){if(!v)return;if(J&&G_.current&&J!==G_.current)return;if(J&&!G_.current)i0(J);if(c0({running:!0,clearSilence:!0}),W?.reset)I_.current="";if(typeof W?.delta==="string")I_.current+=W.delta;let h=Date.now();if(H_.current&&(!V$.current||h-V$.current>=100)){V$.current=h;let B_=I_.current;t((w_)=>({text:w_?.text||"",totalLines:_3(B_),fullText:B_}))}return}if(V==="agent_thought"){if(!v)return;if(J&&G_.current&&J!==G_.current)return;if(J&&!G_.current)i0(J);c0({running:!0,clearSilence:!0});let h=W.text||"",B_=Number.isFinite(W.total_lines)?W.total_lines:h?h.replace(/\r\n/g,`
`).split(`
`).length:0;if(!H_.current)I_.current=h,t({text:h,totalLines:B_});return}if(V==="model_changed"){if(!v)return;if(W?.model!==void 0)t_(W.model);if(W?.thinking_level!==void 0)E_(W.thinking_level??null);if(W?.supports_thinking!==void 0)o_(Boolean(W.supports_thinking));let h=$;Z3(h).then((B_)=>{if(O0.current!==h)return;if(B_)x_(B_)}).catch(()=>{});return}if(V==="workspace_update"){if(typeof window<"u")window.dispatchEvent(new CustomEvent("workspace-update",{detail:W}));return}if(a6(V)){if(!v)return;if(t6(V,W),V==="extension_ui_notify"&&typeof W?.message==="string")L_(W.message,null,W?.type||"info");if(V==="extension_ui_error"&&typeof W?.error==="string")L_("Extension UI error",W.error,"error",5000);return}let{currentHashtag:r,searchQuery:V_,searchOpen:j_}=r_.current;if(V==="agent_response"){if(!v)return;U2(),p0.current={post:W,turnId:G_.current}}if(!r&&!V_&&!j_&&v&&(V==="new_post"||V==="new_reply"||V==="agent_response"))m((h)=>{if(!h)return[W];if(h.some((B_)=>B_.id===W.id))return h;return[...h,W]}),Y.current?.();if(V==="interaction_updated"){if(!v)return;if(r||V_||j_)return;m((h)=>{if(!h)return h;if(!h.some((B_)=>B_.id===W.id))return h;return h.map((B_)=>B_.id===W.id?W:B_)})}if(V==="interaction_deleted"){if(!v)return;if(r||V_||j_)return;let h=W?.ids||[];if(h.length){if(E(()=>{m((B_)=>B_?B_.filter((w_)=>!h.includes(w_.id)):B_)}),P0.current)N2.current?.({preserveScroll:!0,preserveMode:"top"})}}},[h0,i$,$,N2,c0,Q,E,M0,E0,W0,U2,i0,B2,G3,V3,M2,f_,y_]);R(()=>{if(typeof window>"u")return;let V=window.__PICLAW_TEST_API||{};return V.emit=I1,V.reset=()=>{U2(),h0(),d(null),p({text:"",totalLines:0}),c_(""),t({text:"",totalLines:0}),$_(null)},V.finalize=()=>Y3(),window.__PICLAW_TEST_API=V,()=>{if(window.__PICLAW_TEST_API===V)window.__PICLAW_TEST_API=void 0}},[h0,Y3,I1,U2]),I6({handleSseEvent:I1,handleConnectionStatusChange:Y9,loadPosts:Y0,onWake:H9,chatJid:$}),R(()=>{if(!n$||n$.length===0)return;let V=location.hash;if(!V||!V.startsWith("#msg-"))return;let W=V.slice(5);$2(W),history.replaceState(null,"",location.pathname+location.search)},[n$,$2]);let x1=e!==null;R(()=>{if(z!=="connected")return;let W=setInterval(()=>{let{currentHashtag:J,searchQuery:k,searchOpen:A}=r_.current||{},v=!J&&!k&&!A;if(x1){if(v)W0();f_(),$$(),_$()}else{if(v)W0();$$(),_$()}},x1?15000:60000);return()=>clearInterval(W)},[z,x1,$$,_$,f_,W0]),R(()=>{return _9(()=>{$$(),_$(),f_()})},[$$,_$,f_]);let J9=M(()=>{L$((V)=>!V)},[]),X3=M((V)=>{if(typeof window>"u")return;let W=String(V||"").trim();if(!W||W===$)return;let J=X2(window.location.href,W,{chatOnly:j});window.location.assign(J)},[j,$]),q3=M(async()=>{if(typeof window>"u"||!T_?.chat_jid)return;let V=T_.agent_name||"",W=T_.display_name||"",J=window.prompt("Branch display name",W);if(J===null)return;let k=window.prompt("Agent handle (without @)",V);if(k===null)return;try{let A=await bj(T_.chat_jid,{displayName:J,agentName:k});await Promise.allSettled([M0(),E0()]);let v=A?.branch?.agent_name||String(k||"").trim()||V;L_("Branch renamed",`This chat is now @${v}.`,"info",3500)}catch(A){let v=A instanceof Error?A.message:String(A||"Could not rename branch."),r=/already in use/i.test(v||"")?`${v} Switch to or restore that existing session from the session manager.`:v;L_("Could not rename branch",r||"Could not rename branch.","warning",5000)}},[T_,M0,E0,L_]),L3=M(async(V=null)=>{if(typeof window>"u")return;let W=typeof V==="string"&&V.trim()?V.trim():"",J=typeof $==="string"&&$.trim()?$.trim():"",k=W||T_?.chat_jid||J;if(!k){L_("Could not prune branch","No active session is selected yet.","warning",4000);return}let A=(T_?.chat_jid===k?T_:null)||_0.find((j_)=>j_?.chat_jid===k)||m_.find((j_)=>j_?.chat_jid===k)||null;if(A?.chat_jid===(A?.root_chat_jid||A?.chat_jid)){L_("Cannot prune branch","The root chat branch cannot be pruned.","warning",4000);return}let r=`@${A?.agent_name||k}${A?.chat_jid?` — ${A.chat_jid}`:""}`;if(!window.confirm(`Prune ${r}?

This archives the branch agent and removes it from the branch picker. Chat history is preserved.`))return;try{await Ij(k),await Promise.allSettled([M0(),E0()]);let j_=A?.root_chat_jid||"web:default";L_("Branch pruned",`${r} has been archived.`,"info",3000);let h=X2(window.location.href,j_,{chatOnly:j});window.location.assign(h)}catch(j_){let h=j_ instanceof Error?j_.message:String(j_||"Could not prune branch.");L_("Could not prune branch",h||"Could not prune branch.","warning",5000)}},[m_,j,T_,_0,$,M0,E0,L_]),D9=M(async(V)=>{let W=typeof V==="string"?V.trim():"";if(!W||typeof K9!=="function")return;try{let J=await K9(W);await Promise.allSettled([M0(),E0()]);let k=J?.branch,A=typeof k?.chat_jid==="string"&&k.chat_jid.trim()?k.chat_jid.trim():W,v=typeof k?.agent_name==="string"&&k.agent_name.trim()?`@${k.agent_name.trim()}`:A;L_("Branch restored",`Restored ${v}.`,"info",3200);let r=X2(window.location.href,A,{chatOnly:j});window.location.assign(r)}catch(J){let k=J instanceof Error?J.message:String(J||"Could not restore branch.");L_("Could not restore branch",k||"Could not restore branch.","warning",5000)}},[j,M0,E0,L_]);R(()=>{if(!Z||typeof window>"u")return;let V=!1;return(async()=>{try{T({status:"running",message:"Preparing a new chat branch…"});let W=await T2(N);if(V)return;let J=W?.branch,k=typeof J?.chat_jid==="string"&&J.chat_jid.trim()?J.chat_jid.trim():null;if(!k)throw Error("Branch fork did not return a chat id.");let A=X2(window.location.href,k,{chatOnly:!0});window.location.replace(A)}catch(W){if(V)return;T({status:"error",message:D1(W)})}})(),()=>{V=!0}},[Z,N]);let E9=M(async()=>{if(typeof window>"u")return;try{let W=(await T2($))?.branch,J=typeof W?.chat_jid==="string"&&W.chat_jid.trim()?W.chat_jid.trim():null;if(!J)throw Error("Branch fork did not return a chat id.");await Promise.allSettled([M0(),E0()]);let k=W?.agent_name?`@${W.agent_name}`:J;L_("New branch created",`Switched to ${k}.`,"info",2500);let A=X2(window.location.href,J,{chatOnly:j});window.location.assign(A)}catch(V){L_("Could not create branch",D1(V),"warning",5000)}},[j,$,M0,E0,L_]),y9=M(async()=>{if(typeof window>"u"||X)return;let V=c6($);if(!V){L_("Could not open branch window","Opening branch windows is unavailable in standalone webapp mode.","warning",5000);return}if(V.mode==="tab"){let J=d6(window.location.href,$,{chatOnly:!0});if(!window.open(J,V.target))L_("Could not open branch window","The browser blocked opening a new tab or window.","warning",5000);return}let W=h6(V);if(!W){L_("Could not open branch window","The browser blocked opening a new tab or window.","warning",5000);return}i6(W,{title:"Opening branch…",message:"Preparing a new chat branch. This should only take a moment."});try{let k=(await T2($))?.branch,A=typeof k?.chat_jid==="string"&&k.chat_jid.trim()?k.chat_jid.trim():null;if(!A)throw Error("Branch fork did not return a chat id.");try{let r=await n1();V0(Array.isArray(r?.chats)?r.chats:[])}catch{}try{let r=await N3(Q0);g0(Array.isArray(r?.chats)?r.chats:[])}catch{}let v=X2(window.location.href,A,{chatOnly:!0});l6(W,v)}catch(J){n6(W),L_("Could not open branch window",D1(J),"error",5000)}},[$,Q0,X,L_]);R(()=>{if(!S0)return;if(typeof window>"u")return;let V=P$.current;if(!V)return;if(!U$.current){let W=y2("editorWidth",null),J=a$.current||280;U$.current=Number.isFinite(W)?W:J}if(V.style.setProperty("--editor-width",`${U$.current}px`),!a0.current){let W=y2("dockHeight",null);a0.current=Number.isFinite(W)?W:200}V.style.setProperty("--dock-height",`${a0.current}px`)},[S0]),R(()=>{if(!I0||j)return;let V=(W)=>{if(W.ctrlKey&&W.key==="`")W.preventDefault(),x0()};return document.addEventListener("keydown",V),()=>document.removeEventListener("keydown",V)},[x0,I0,j]);let k9=Boolean(W_&&W_===(e?.turn_id||Q_));if(Z)return U`
            <div class="app-shell chat-only">
                <div class="container" style=${{display:"flex",alignItems:"center",justifyContent:"center",minHeight:"100vh",padding:"24px"}}>
                    <div class="card" style=${{width:"min(560px, 100%)",padding:"24px"}}>
                        <h1 style=${{margin:"0 0 12px",fontSize:"1.1rem"}}>
                            ${d0.status==="error"?"Could not open branch window":"Opening branch…"}
                        </h1>
                        <p style=${{margin:0,lineHeight:1.6}}>${d0.message}</p>
                    </div>
                </div>
            </div>
        `;return U`
        <div class=${`app-shell${b0?"":" workspace-collapsed"}${S0?" editor-open":""}${j?" chat-only":""}`} ref=${P$}>
            ${!j&&U`
                <${w6}
                    onFileSelect=${e$}
                    visible=${b0}
                    active=${b0||S0}
                    onOpenEditor=${N0}
                    onOpenTerminalTab=${y$}
                    onToggleTerminal=${I0?x0:void 0}
                    terminalVisible=${Boolean(I0&&z0)}
                />
                <button
                    class=${`workspace-toggle-tab${b0?" open":" closed"}`}
                    onClick=${J9}
                    title=${b0?"Hide workspace":"Show workspace"}
                    aria-label=${b0?"Hide workspace":"Show workspace"}
                >
                    <svg class="workspace-toggle-tab-icon" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                        <polyline points="6 3 11 8 6 13" />
                    </svg>
                </button>
                <div class="workspace-splitter" onMouseDown=${E1} onTouchStart=${z2}></div>
            `}
            ${G$&&U`
                <div class="editor-pane-container">
                    ${S0&&U`
                        <${P6}
                            tabs=${s$}
                            activeId=${H0}
                            onActivate=${A0}
                            onClose=${B$}
                            onCloseOthers=${f0}
                            onCloseAll=${s0}
                            onTogglePin=${Q$}
                            onTogglePreview=${E$}
                            previewTabs=${D$}
                            onToggleDock=${I0?x0:void 0}
                            dockVisible=${I0&&z0}
                        />
                    `}
                    ${S0&&U`<div class="editor-pane-host" ref=${f$}></div>`}
                    ${S0&&H0&&D$.has(H0)&&U`
                        <${b6}
                            getContent=${()=>J0.current?.getContent?.()}
                            path=${H0}
                            onClose=${()=>E$(H0)}
                        />
                    `}
                    ${I0&&z0&&U`<div class="dock-splitter" onMouseDown=${K3} onTouchStart=${y1}></div>`}
                    ${I0&&U`<div class=${`dock-panel${z0?"":" hidden"}`}>
                        <div class="dock-panel-header">
                            <span class="dock-panel-title">Terminal</span>
                            <button class="dock-panel-close" onClick=${x0} title="Hide terminal (Ctrl+\`)" aria-label="Hide terminal">
                                <svg viewBox="0 0 16 16" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round">
                                    <line x1="4" y1="4" x2="12" y2="12"/>
                                    <line x1="12" y1="4" x2="4" y2="12"/>
                                </svg>
                            </button>
                        </div>
                        <div class="dock-panel-body" ref=${O$}></div>
                    </div>`}
                </div>
                <div class="editor-splitter" onMouseDown=${e0} onTouchStart=${F2}></div>
            `}
            <div class="container">
                ${G&&m6()&&U`<div class="search-results-spacer"></div>`}
                ${j&&U`
                    <div class="chat-window-header">
                        <div class="chat-window-header-main">
                            <span class="chat-window-header-title">
                                ${T_?.agent_name?`@${T_.agent_name}`:$}
                            </span>
                            <span class="chat-window-header-subtitle">${T_?.chat_jid||$}</span>
                        </div>
                        <div class="chat-window-header-actions">
                            ${_0.length>1&&U`
                                <label class="chat-window-branch-picker-wrap">
                                    <span class="chat-window-branch-picker-label">Branch</span>
                                    <select
                                        class="chat-window-branch-picker"
                                        value=${$}
                                        onChange=${(V)=>X3(V.currentTarget.value)}
                                    >
                                        ${_0.map((V)=>U`
                                            <option key=${V.chat_jid} value=${V.chat_jid}>
                                                ${`@${V.agent_name} — ${V.chat_jid}${V.is_active?" • active":""}`}
                                            </option>
                                        `)}
                                    </select>
                                </label>
                            `}
                            ${T_?.chat_jid&&U`
                                <button
                                    class="chat-window-header-button"
                                    type="button"
                                    onClick=${q3}
                                    title="Rename this branch"
                                    aria-label="Rename this branch"
                                >
                                    Rename
                                </button>
                            `}
                            ${T_?.chat_jid&&T_.chat_jid!==(T_.root_chat_jid||T_.chat_jid)&&U`
                                <button
                                    class="chat-window-header-button"
                                    type="button"
                                    onClick=${L3}
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
                ${(q||G)&&U`
                    <div class="hashtag-header">
                        <button class="back-btn" onClick=${G9}>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
                        </button>
                        <span>${q?`#${q}`:`Search: ${G} · ${T0}`}</span>
                    </div>
                `}
                <${c8}
                    posts=${n$}
                    hasMore=${w1?Y_:!1}
                    onLoadMore=${w1?C0:void 0}
                    timelineRef=${u0}
                    onHashtagClick=${W9}
                    onMessageRef=${c$}
                    onScrollToMessage=${$2}
                    onFileRef=${L2}
                    onPostClick=${void 0}
                    onDeletePost=${L9}
                    emptyMessage=${q?`No posts with #${q}`:G?`No results for "${G}"`:void 0}
                    agents=${A_}
                    user=${k$}
                    reverse=${w1}
                    removingPostIds=${q$}
                    searchQuery=${G}
                />
                <${A8}
                    status=${e}
                    draft=${N_}
                    plan=${q_}
                    thought=${__}
                    pendingRequest=${Z_}
                    intent=${i}
                    turnId=${Q_}
                    steerQueued=${k9}
                    onPanelToggle=${P}
                />
                <${H8}
                    session=${P_}
                    onClose=${b1}
                    onRetry=${U9}
                    onInject=${F9}
                />
                <${s3}
                    onPost=${()=>{let{searchQuery:V,searchOpen:W}=r_.current||{};if(!V&&!W)Y0(),O()}}
                    onFocus=${O}
                    searchMode=${b}
                    searchScope=${u}
                    onSearch=${V9}
                    onSearchScopeChange=${f}
                    onEnterSearch=${X9}
                    onExitSearch=${q9}
                    fileRefs=${w}
                    onRemoveFileRef=${t0}
                    onClearFileRefs=${_2}
                    onSetFileRefs=${p$}
                    messageRefs=${x}
                    onRemoveMessageRef=${h$}
                    onClearMessageRefs=${P2}
                    onSetMessageRefs=${j2}
                    onSwitchChat=${X3}
                    onRenameSession=${q3}
                    onCreateSession=${E9}
                    onDeleteSession=${L3}
                    onRestoreSession=${D9}
                    activeEditorPath=${j?null:H0}
                    onAttachEditorFile=${j?void 0:A2}
                    onOpenFilePill=${L2}
                    followupQueueCount=${s}
                    followupQueueItems=${C_}
                    onInjectQueuedFollowup=${B9}
                    onRemoveQueuedFollowup=${Q9}
                    onSubmitIntercept=${O9}
                    onMessageResponse=${M1}
                    onSubmitError=${Z2}
                    onPopOutChat=${X?void 0:y9}
                    isAgentActive=${A1}
                    activeChatAgents=${m_}
                    currentChatJid=${$}
                    connectionStatus=${z}
                    activeModel=${h_}
                    modelUsage=${e_}
                    thinkingLevel=${i_}
                    supportsThinking=${J_}
                    contextUsage=${X0}
                    notificationsEnabled=${J$}
                    notificationPermission=${Y$}
                    onToggleNotifications=${T$}
                    onModelChange=${t_}
                    onModelStateChange=${P1}
                />
                <${P8}
                    request=${Z_}
                    onRespond=${()=>{$_(null),j0.current=null}}
                />
            </div>
        </div>
    `}function Rj(){let _=typeof window>"u"?new URLSearchParams:new URL(window.location.href).searchParams;return U`<${fj} locationParams=${_} />`}u3(U`<${Rj} />`,document.getElementById("app"));

//# debugId=D65F870CA492F05964756E2164756E21
//# sourceMappingURL=app.bundle.js.map
