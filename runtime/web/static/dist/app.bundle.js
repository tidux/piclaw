var N5=Object.defineProperty;var G5=(_)=>_;function Y5(_,$){this[_]=G5.bind(null,$)}var z5=(_,$)=>{for(var j in $)N5(_,j,{get:$[j],enumerable:!0,configurable:!0,set:Y5.bind($,j)})};var V1,_0,c3,K5,d$,x3,h3,i3,l3,a1,d1,o1,W5,W1={},q1=[],q5=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,L1=Array.isArray;function R$(_,$){for(var j in $)_[j]=$[j];return _}function t1(_){_&&_.parentNode&&_.parentNode.removeChild(_)}function n3(_,$,j){var Z,N,G,Y={};for(G in $)G=="key"?Z=$[G]:G=="ref"?N=$[G]:Y[G]=$[G];if(arguments.length>2&&(Y.children=arguments.length>3?V1.call(arguments,2):j),typeof _=="function"&&_.defaultProps!=null)for(G in _.defaultProps)Y[G]===void 0&&(Y[G]=_.defaultProps[G]);return Y1(_,Y,Z,N,null)}function Y1(_,$,j,Z,N){var G={type:_,props:$,key:j,ref:Z,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:N==null?++c3:N,__i:-1,__u:0};return N==null&&_0.vnode!=null&&_0.vnode(G),G}function Q1(_){return _.children}function z1(_,$){this.props=_,this.context=$}function J2(_,$){if($==null)return _.__?J2(_.__,_.__i+1):null;for(var j;$<_.__k.length;$++)if((j=_.__k[$])!=null&&j.__e!=null)return j.__e;return typeof _.type=="function"?J2(_):null}function X5(_){if(_.__P&&_.__d){var $=_.__v,j=$.__e,Z=[],N=[],G=R$({},$);G.__v=$.__v+1,_0.vnode&&_0.vnode(G),e1(_.__P,G,$,_.__n,_.__P.namespaceURI,32&$.__u?[j]:null,Z,j==null?J2($):j,!!(32&$.__u),N),G.__v=$.__v,G.__.__k[G.__i]=G,r3(Z,G,N),$.__e=$.__=null,G.__e!=j&&d3(G)}}function d3(_){if((_=_.__)!=null&&_.__c!=null)return _.__e=_.__c.base=null,_.__k.some(function($){if($!=null&&$.__e!=null)return _.__e=_.__c.base=$.__e}),d3(_)}function M3(_){(!_.__d&&(_.__d=!0)&&d$.push(_)&&!X1.__r++||x3!=_0.debounceRendering)&&((x3=_0.debounceRendering)||h3)(X1)}function X1(){try{for(var _,$=1;d$.length;)d$.length>$&&d$.sort(i3),_=d$.shift(),$=d$.length,X5(_)}finally{d$.length=X1.__r=0}}function o3(_,$,j,Z,N,G,Y,q,L,X,Q){var V,H,P,T,g,f,w,M=Z&&Z.__k||q1,c=$.length;for(L=V5(j,$,M,L,c),V=0;V<c;V++)(P=j.__k[V])!=null&&(H=P.__i!=-1&&M[P.__i]||W1,P.__i=V,f=e1(_,P,H,N,G,Y,q,L,X,Q),T=P.__e,P.ref&&H.ref!=P.ref&&(H.ref&&_4(H.ref,null,P),Q.push(P.ref,P.__c||T,P)),g==null&&T!=null&&(g=T),(w=!!(4&P.__u))||H.__k===P.__k?L=s3(P,L,_,w):typeof P.type=="function"&&f!==void 0?L=f:T&&(L=T.nextSibling),P.__u&=-7);return j.__e=g,L}function V5(_,$,j,Z,N){var G,Y,q,L,X,Q=j.length,V=Q,H=0;for(_.__k=Array(N),G=0;G<N;G++)(Y=$[G])!=null&&typeof Y!="boolean"&&typeof Y!="function"?(typeof Y=="string"||typeof Y=="number"||typeof Y=="bigint"||Y.constructor==String?Y=_.__k[G]=Y1(null,Y,null,null,null):L1(Y)?Y=_.__k[G]=Y1(Q1,{children:Y},null,null,null):Y.constructor===void 0&&Y.__b>0?Y=_.__k[G]=Y1(Y.type,Y.props,Y.key,Y.ref?Y.ref:null,Y.__v):_.__k[G]=Y,L=G+H,Y.__=_,Y.__b=_.__b+1,q=null,(X=Y.__i=L5(Y,j,L,V))!=-1&&(V--,(q=j[X])&&(q.__u|=2)),q==null||q.__v==null?(X==-1&&(N>Q?H--:N<Q&&H++),typeof Y.type!="function"&&(Y.__u|=4)):X!=L&&(X==L-1?H--:X==L+1?H++:(X>L?H--:H++,Y.__u|=4))):_.__k[G]=null;if(V)for(G=0;G<Q;G++)(q=j[G])!=null&&(2&q.__u)==0&&(q.__e==Z&&(Z=J2(q)),t3(q,q));return Z}function s3(_,$,j,Z){var N,G;if(typeof _.type=="function"){for(N=_.__k,G=0;N&&G<N.length;G++)N[G]&&(N[G].__=_,$=s3(N[G],$,j,Z));return $}_.__e!=$&&(Z&&($&&_.type&&!$.parentNode&&($=J2(_)),j.insertBefore(_.__e,$||null)),$=_.__e);do $=$&&$.nextSibling;while($!=null&&$.nodeType==8);return $}function L5(_,$,j,Z){var N,G,Y,q=_.key,L=_.type,X=$[j],Q=X!=null&&(2&X.__u)==0;if(X===null&&q==null||Q&&q==X.key&&L==X.type)return j;if(Z>(Q?1:0)){for(N=j-1,G=j+1;N>=0||G<$.length;)if((X=$[Y=N>=0?N--:G++])!=null&&(2&X.__u)==0&&q==X.key&&L==X.type)return Y}return-1}function b3(_,$,j){$[0]=="-"?_.setProperty($,j==null?"":j):_[$]=j==null?"":typeof j!="number"||q5.test($)?j:j+"px"}function G1(_,$,j,Z,N){var G,Y;_:if($=="style")if(typeof j=="string")_.style.cssText=j;else{if(typeof Z=="string"&&(_.style.cssText=Z=""),Z)for($ in Z)j&&$ in j||b3(_.style,$,"");if(j)for($ in j)Z&&j[$]==Z[$]||b3(_.style,$,j[$])}else if($[0]=="o"&&$[1]=="n")G=$!=($=$.replace(l3,"$1")),Y=$.toLowerCase(),$=Y in _||$=="onFocusOut"||$=="onFocusIn"?Y.slice(2):$.slice(2),_.l||(_.l={}),_.l[$+G]=j,j?Z?j.u=Z.u:(j.u=a1,_.addEventListener($,G?o1:d1,G)):_.removeEventListener($,G?o1:d1,G);else{if(N=="http://www.w3.org/2000/svg")$=$.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if($!="width"&&$!="height"&&$!="href"&&$!="list"&&$!="form"&&$!="tabIndex"&&$!="download"&&$!="rowSpan"&&$!="colSpan"&&$!="role"&&$!="popover"&&$ in _)try{_[$]=j==null?"":j;break _}catch(q){}typeof j=="function"||(j==null||j===!1&&$[4]!="-"?_.removeAttribute($):_.setAttribute($,$=="popover"&&j==1?"":j))}}function C3(_){return function($){if(this.l){var j=this.l[$.type+_];if($.t==null)$.t=a1++;else if($.t<j.u)return;return j(_0.event?_0.event($):$)}}}function e1(_,$,j,Z,N,G,Y,q,L,X){var Q,V,H,P,T,g,f,w,M,c,y,S,o,a,n,$_=$.type;if($.constructor!==void 0)return null;128&j.__u&&(L=!!(32&j.__u),G=[q=$.__e=j.__e]),(Q=_0.__b)&&Q($);_:if(typeof $_=="function")try{if(w=$.props,M=$_.prototype&&$_.prototype.render,c=(Q=$_.contextType)&&Z[Q.__c],y=Q?c?c.props.value:Q.__:Z,j.__c?f=(V=$.__c=j.__c).__=V.__E:(M?$.__c=V=new $_(w,y):($.__c=V=new z1(w,y),V.constructor=$_,V.render=B5),c&&c.sub(V),V.state||(V.state={}),V.__n=Z,H=V.__d=!0,V.__h=[],V._sb=[]),M&&V.__s==null&&(V.__s=V.state),M&&$_.getDerivedStateFromProps!=null&&(V.__s==V.state&&(V.__s=R$({},V.__s)),R$(V.__s,$_.getDerivedStateFromProps(w,V.__s))),P=V.props,T=V.state,V.__v=$,H)M&&$_.getDerivedStateFromProps==null&&V.componentWillMount!=null&&V.componentWillMount(),M&&V.componentDidMount!=null&&V.__h.push(V.componentDidMount);else{if(M&&$_.getDerivedStateFromProps==null&&w!==P&&V.componentWillReceiveProps!=null&&V.componentWillReceiveProps(w,y),$.__v==j.__v||!V.__e&&V.shouldComponentUpdate!=null&&V.shouldComponentUpdate(w,V.__s,y)===!1){$.__v!=j.__v&&(V.props=w,V.state=V.__s,V.__d=!1),$.__e=j.__e,$.__k=j.__k,$.__k.some(function(i){i&&(i.__=$)}),q1.push.apply(V.__h,V._sb),V._sb=[],V.__h.length&&Y.push(V);break _}V.componentWillUpdate!=null&&V.componentWillUpdate(w,V.__s,y),M&&V.componentDidUpdate!=null&&V.__h.push(function(){V.componentDidUpdate(P,T,g)})}if(V.context=y,V.props=w,V.__P=_,V.__e=!1,S=_0.__r,o=0,M)V.state=V.__s,V.__d=!1,S&&S($),Q=V.render(V.props,V.state,V.context),q1.push.apply(V.__h,V._sb),V._sb=[];else do V.__d=!1,S&&S($),Q=V.render(V.props,V.state,V.context),V.state=V.__s;while(V.__d&&++o<25);V.state=V.__s,V.getChildContext!=null&&(Z=R$(R$({},Z),V.getChildContext())),M&&!H&&V.getSnapshotBeforeUpdate!=null&&(g=V.getSnapshotBeforeUpdate(P,T)),a=Q!=null&&Q.type===Q1&&Q.key==null?a3(Q.props.children):Q,q=o3(_,L1(a)?a:[a],$,j,Z,N,G,Y,q,L,X),V.base=$.__e,$.__u&=-161,V.__h.length&&Y.push(V),f&&(V.__E=V.__=null)}catch(i){if($.__v=null,L||G!=null)if(i.then){for($.__u|=L?160:128;q&&q.nodeType==8&&q.nextSibling;)q=q.nextSibling;G[G.indexOf(q)]=null,$.__e=q}else{for(n=G.length;n--;)t1(G[n]);s1($)}else $.__e=j.__e,$.__k=j.__k,i.then||s1($);_0.__e(i,$,j)}else G==null&&$.__v==j.__v?($.__k=j.__k,$.__e=j.__e):q=$.__e=Q5(j.__e,$,j,Z,N,G,Y,L,X);return(Q=_0.diffed)&&Q($),128&$.__u?void 0:q}function s1(_){_&&(_.__c&&(_.__c.__e=!0),_.__k&&_.__k.some(s1))}function r3(_,$,j){for(var Z=0;Z<j.length;Z++)_4(j[Z],j[++Z],j[++Z]);_0.__c&&_0.__c($,_),_.some(function(N){try{_=N.__h,N.__h=[],_.some(function(G){G.call(N)})}catch(G){_0.__e(G,N.__v)}})}function a3(_){return typeof _!="object"||_==null||_.__b>0?_:L1(_)?_.map(a3):R$({},_)}function Q5(_,$,j,Z,N,G,Y,q,L){var X,Q,V,H,P,T,g,f=j.props||W1,w=$.props,M=$.type;if(M=="svg"?N="http://www.w3.org/2000/svg":M=="math"?N="http://www.w3.org/1998/Math/MathML":N||(N="http://www.w3.org/1999/xhtml"),G!=null){for(X=0;X<G.length;X++)if((P=G[X])&&"setAttribute"in P==!!M&&(M?P.localName==M:P.nodeType==3)){_=P,G[X]=null;break}}if(_==null){if(M==null)return document.createTextNode(w);_=document.createElementNS(N,M,w.is&&w),q&&(_0.__m&&_0.__m($,G),q=!1),G=null}if(M==null)f===w||q&&_.data==w||(_.data=w);else{if(G=G&&V1.call(_.childNodes),!q&&G!=null)for(f={},X=0;X<_.attributes.length;X++)f[(P=_.attributes[X]).name]=P.value;for(X in f)P=f[X],X=="dangerouslySetInnerHTML"?V=P:X=="children"||(X in w)||X=="value"&&("defaultValue"in w)||X=="checked"&&("defaultChecked"in w)||G1(_,X,null,P,N);for(X in w)P=w[X],X=="children"?H=P:X=="dangerouslySetInnerHTML"?Q=P:X=="value"?T=P:X=="checked"?g=P:q&&typeof P!="function"||f[X]===P||G1(_,X,P,f[X],N);if(Q)q||V&&(Q.__html==V.__html||Q.__html==_.innerHTML)||(_.innerHTML=Q.__html),$.__k=[];else if(V&&(_.innerHTML=""),o3($.type=="template"?_.content:_,L1(H)?H:[H],$,j,Z,M=="foreignObject"?"http://www.w3.org/1999/xhtml":N,G,Y,G?G[0]:j.__k&&J2(j,0),q,L),G!=null)for(X=G.length;X--;)t1(G[X]);q||(X="value",M=="progress"&&T==null?_.removeAttribute("value"):T!=null&&(T!==_[X]||M=="progress"&&!T||M=="option"&&T!=f[X])&&G1(_,X,T,f[X],N),X="checked",g!=null&&g!=_[X]&&G1(_,X,g,f[X],N))}return _}function _4(_,$,j){try{if(typeof _=="function"){var Z=typeof _.__u=="function";Z&&_.__u(),Z&&$==null||(_.__u=_($))}else _.current=$}catch(N){_0.__e(N,j)}}function t3(_,$,j){var Z,N;if(_0.unmount&&_0.unmount(_),(Z=_.ref)&&(Z.current&&Z.current!=_.__e||_4(Z,null,$)),(Z=_.__c)!=null){if(Z.componentWillUnmount)try{Z.componentWillUnmount()}catch(G){_0.__e(G,$)}Z.base=Z.__P=null}if(Z=_.__k)for(N=0;N<Z.length;N++)Z[N]&&t3(Z[N],$,j||typeof _.type!="function");j||t1(_.__e),_.__c=_.__=_.__e=void 0}function B5(_,$,j){return this.constructor(_,j)}function e3(_,$,j){var Z,N,G,Y;$==document&&($=document.documentElement),_0.__&&_0.__(_,$),N=(Z=typeof j=="function")?null:j&&j.__k||$.__k,G=[],Y=[],e1($,_=(!Z&&j||$).__k=n3(Q1,null,[_]),N||W1,W1,$.namespaceURI,!Z&&j?[j]:N?null:$.firstChild?V1.call($.childNodes):null,G,!Z&&j?j:N?N.__e:$.firstChild,Z,Y),r3(G,_,Y)}V1=q1.slice,_0={__e:function(_,$,j,Z){for(var N,G,Y;$=$.__;)if((N=$.__c)&&!N.__)try{if((G=N.constructor)&&G.getDerivedStateFromError!=null&&(N.setState(G.getDerivedStateFromError(_)),Y=N.__d),N.componentDidCatch!=null&&(N.componentDidCatch(_,Z||{}),Y=N.__d),Y)return N.__E=N}catch(q){_=q}throw _}},c3=0,K5=function(_){return _!=null&&_.constructor===void 0},z1.prototype.setState=function(_,$){var j;j=this.__s!=null&&this.__s!=this.state?this.__s:this.__s=R$({},this.state),typeof _=="function"&&(_=_(R$({},j),this.props)),_&&R$(j,_),_!=null&&this.__v&&($&&this._sb.push($),M3(this))},z1.prototype.forceUpdate=function(_){this.__v&&(this.__e=!0,_&&this.__h.push(_),M3(this))},z1.prototype.render=Q1,d$=[],h3=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,i3=function(_,$){return _.__v.__b-$.__v.__b},X1.__r=0,l3=/(PointerCapture)$|Capture$/i,a1=0,d1=C3(!1),o1=C3(!0),W5=0;var g2,U0,n1,T3,p2=0,_8=[],B0=_0,f3=B0.__b,S3=B0.__r,R3=B0.diffed,v3=B0.__c,u3=B0.unmount,m3=B0.__;function $4(_,$){B0.__h&&B0.__h(U0,_,p2||$),p2=0;var j=U0.__H||(U0.__H={__:[],__h:[]});return _>=j.__.length&&j.__.push({}),j.__[_]}function R(_){return p2=1,U5(j8,_)}function U5(_,$,j){var Z=$4(g2++,2);if(Z.t=_,!Z.__c&&(Z.__=[j?j($):j8(void 0,$),function(q){var L=Z.__N?Z.__N[0]:Z.__[0],X=Z.t(L,q);L!==X&&(Z.__N=[X,Z.__[1]],Z.__c.setState({}))}],Z.__c=U0,!U0.__f)){var N=function(q,L,X){if(!Z.__c.__H)return!0;var Q=Z.__c.__H.__.filter(function(H){return H.__c});if(Q.every(function(H){return!H.__N}))return!G||G.call(this,q,L,X);var V=Z.__c.props!==q;return Q.some(function(H){if(H.__N){var P=H.__[0];H.__=H.__N,H.__N=void 0,P!==H.__[0]&&(V=!0)}}),G&&G.call(this,q,L,X)||V};U0.__f=!0;var{shouldComponentUpdate:G,componentWillUpdate:Y}=U0;U0.componentWillUpdate=function(q,L,X){if(this.__e){var Q=G;G=void 0,N(q,L,X),G=Q}Y&&Y.call(this,q,L,X)},U0.shouldComponentUpdate=N}return Z.__N||Z.__}function u(_,$){var j=$4(g2++,3);!B0.__s&&$8(j.__H,$)&&(j.__=_,j.u=$,U0.__H.__h.push(j))}function k(_){return p2=5,S_(function(){return{current:_}},[])}function S_(_,$){var j=$4(g2++,7);return $8(j.__H,$)&&(j.__=_(),j.__H=$,j.__h=_),j.__}function x(_,$){return p2=8,S_(function(){return _},$)}function O5(){for(var _;_=_8.shift();){var $=_.__H;if(_.__P&&$)try{$.__h.some(K1),$.__h.some(r1),$.__h=[]}catch(j){$.__h=[],B0.__e(j,_.__v)}}}B0.__b=function(_){U0=null,f3&&f3(_)},B0.__=function(_,$){_&&$.__k&&$.__k.__m&&(_.__m=$.__k.__m),m3&&m3(_,$)},B0.__r=function(_){S3&&S3(_),g2=0;var $=(U0=_.__c).__H;$&&(n1===U0?($.__h=[],U0.__h=[],$.__.some(function(j){j.__N&&(j.__=j.__N),j.u=j.__N=void 0})):($.__h.some(K1),$.__h.some(r1),$.__h=[],g2=0)),n1=U0},B0.diffed=function(_){R3&&R3(_);var $=_.__c;$&&$.__H&&($.__H.__h.length&&(_8.push($)!==1&&T3===B0.requestAnimationFrame||((T3=B0.requestAnimationFrame)||F5)(O5)),$.__H.__.some(function(j){j.u&&(j.__H=j.u),j.u=void 0})),n1=U0=null},B0.__c=function(_,$){$.some(function(j){try{j.__h.some(K1),j.__h=j.__h.filter(function(Z){return!Z.__||r1(Z)})}catch(Z){$.some(function(N){N.__h&&(N.__h=[])}),$=[],B0.__e(Z,j.__v)}}),v3&&v3(_,$)},B0.unmount=function(_){u3&&u3(_);var $,j=_.__c;j&&j.__H&&(j.__H.__.some(function(Z){try{K1(Z)}catch(N){$=N}}),j.__H=void 0,$&&B0.__e($,j.__v))};var g3=typeof requestAnimationFrame=="function";function F5(_){var $,j=function(){clearTimeout(Z),g3&&cancelAnimationFrame($),setTimeout(_)},Z=setTimeout(j,35);g3&&($=requestAnimationFrame(j))}function K1(_){var $=U0,j=_.__c;typeof j=="function"&&(_.__c=void 0,j()),U0=$}function r1(_){var $=U0;_.__c=_.__(),U0=$}function $8(_,$){return!_||_.length!==$.length||$.some(function(j,Z){return j!==_[Z]})}function j8(_,$){return typeof $=="function"?$(_):$}var Z8=function(_,$,j,Z){var N;$[0]=0;for(var G=1;G<$.length;G++){var Y=$[G++],q=$[G]?($[0]|=Y?1:2,j[$[G++]]):$[++G];Y===3?Z[0]=q:Y===4?Z[1]=Object.assign(Z[1]||{},q):Y===5?(Z[1]=Z[1]||{})[$[++G]]=q:Y===6?Z[1][$[++G]]+=q+"":Y?(N=_.apply(q,Z8(_,q,j,["",null])),Z.push(N),q[0]?$[0]|=2:($[G-2]=0,$[G]=N)):Z.push(q)}return Z},p3=new Map;function H5(_){var $=p3.get(this);return $||($=new Map,p3.set(this,$)),($=Z8(this,$.get(_)||($.set(_,$=function(j){for(var Z,N,G=1,Y="",q="",L=[0],X=function(H){G===1&&(H||(Y=Y.replace(/^\s*\n\s*|\s*\n\s*$/g,"")))?L.push(0,H,Y):G===3&&(H||Y)?(L.push(3,H,Y),G=2):G===2&&Y==="..."&&H?L.push(4,H,0):G===2&&Y&&!H?L.push(5,0,!0,Y):G>=5&&((Y||!H&&G===5)&&(L.push(G,0,Y,N),G=6),H&&(L.push(G,H,0,N),G=6)),Y=""},Q=0;Q<j.length;Q++){Q&&(G===1&&X(),X(Q));for(var V=0;V<j[Q].length;V++)Z=j[Q][V],G===1?Z==="<"?(X(),L=[L],G=3):Y+=Z:G===4?Y==="--"&&Z===">"?(G=1,Y=""):Y=Z+Y[0]:q?Z===q?q="":Y+=Z:Z==='"'||Z==="'"?q=Z:Z===">"?(X(),G=1):G&&(Z==="="?(G=5,N=Y,Y=""):Z==="/"&&(G<5||j[Q][V+1]===">")?(X(),G===3&&(L=L[0]),G=L,(L=L[0]).push(2,0,G),G=0):Z===" "||Z==="\t"||Z===`
`||Z==="\r"?(X(),G=2):Y+=Z),G===3&&Y==="!--"&&(G=4,L=L[0])}return X(),L}(_)),$),arguments,[])).length>1?$:$[0]}var B=H5.bind(n3);var a0={};z5(a0,{uploadWorkspaceFile:()=>U1,uploadMedia:()=>W4,updateWorkspaceFile:()=>S5,submitAdaptiveCardAction:()=>q4,streamSidePrompt:()=>C5,steerAgentQueueItem:()=>b5,setWorkspaceVisibility:()=>n2,setAgentThoughtVisibility:()=>L4,sendPeerAgentMessage:()=>P5,sendAgentMessage:()=>y2,searchPosts:()=>Z4,restoreChatBranch:()=>w5,respondToAgentRequest:()=>B1,renameWorkspaceFile:()=>H4,renameChatBranch:()=>k5,removeAgentQueueItem:()=>M5,pruneChatBranch:()=>A5,moveWorkspaceEntry:()=>D4,getWorkspaceTree:()=>l2,getWorkspaceRawUrl:()=>O1,getWorkspaceFile:()=>U4,getWorkspaceDownloadUrl:()=>F1,getWorkspaceBranch:()=>f5,getTimeline:()=>c2,getThumbnailUrl:()=>Q4,getThread:()=>N4,getPostsByHashtag:()=>j4,getMediaUrl:()=>X$,getMediaText:()=>B4,getMediaInfo:()=>E2,getMediaBlob:()=>T5,getChatBranches:()=>E5,getAgents:()=>z4,getAgentThought:()=>V4,getAgentStatus:()=>K4,getAgentQueueState:()=>x5,getAgentModels:()=>i2,getAgentContext:()=>I5,getActiveChatAgents:()=>Y4,forkChatBranch:()=>h2,deleteWorkspaceFile:()=>J4,deletePost:()=>G4,createWorkspaceFile:()=>F4,createReply:()=>y5,createPost:()=>J5,attachWorkspaceFile:()=>O4,addToWhitelist:()=>X4,SSEClient:()=>H1});async function R_(_,$={}){let j=await fetch(""+_,{...$,headers:{"Content-Type":"application/json",...$.headers}});if(!j.ok){let Z=await j.json().catch(()=>({error:"Unknown error"}));throw Error(Z.error||`HTTP ${j.status}`)}return j.json()}function N8(_){let $=String(_||"").split(`
`),j="message",Z=[];for(let G of $)if(G.startsWith("event:"))j=G.slice(6).trim()||"message";else if(G.startsWith("data:"))Z.push(G.slice(5).trim());let N=Z.join(`
`);if(!N)return null;try{return{event:j,data:JSON.parse(N)}}catch{return{event:j,data:N}}}async function D5(_,$){if(!_.body)throw Error("Missing event stream body");let j=_.body.getReader(),Z=new TextDecoder,N="";while(!0){let{value:Y,done:q}=await j.read();if(q)break;N+=Z.decode(Y,{stream:!0});let L=N.split(`

`);N=L.pop()||"";for(let X of L){let Q=N8(X);if(Q)$(Q.event,Q.data)}}N+=Z.decode();let G=N8(N);if(G)$(G.event,G.data)}async function c2(_=10,$=null,j=null){let Z=`/timeline?limit=${_}`;if($)Z+=`&before=${$}`;if(j)Z+=`&chat_jid=${encodeURIComponent(j)}`;return R_(Z)}async function j4(_,$=50,j=0,Z=null){let N=Z?`&chat_jid=${encodeURIComponent(Z)}`:"";return R_(`/hashtag/${encodeURIComponent(_)}?limit=${$}&offset=${j}${N}`)}async function Z4(_,$=50,j=0,Z=null,N="current",G=null){let Y=Z?`&chat_jid=${encodeURIComponent(Z)}`:"",q=N?`&scope=${encodeURIComponent(N)}`:"",L=G?`&root_chat_jid=${encodeURIComponent(G)}`:"";return R_(`/search?q=${encodeURIComponent(_)}&limit=${$}&offset=${j}${Y}${q}${L}`)}async function N4(_,$=null){let j=$?`?chat_jid=${encodeURIComponent($)}`:"";return R_(`/thread/${_}${j}`)}async function J5(_,$=[],j=null){let Z=j?`?chat_jid=${encodeURIComponent(j)}`:"";return R_(`/post${Z}`,{method:"POST",body:JSON.stringify({content:_,media_ids:$})})}async function y5(_,$,j=[],Z=null){let N=Z?`?chat_jid=${encodeURIComponent(Z)}`:"";return R_(`/post/reply${N}`,{method:"POST",body:JSON.stringify({thread_id:_,content:$,media_ids:j})})}async function G4(_,$=!1,j=null){let Z=j?`&chat_jid=${encodeURIComponent(j)}`:"",N=`/post/${_}?cascade=${$?"true":"false"}${Z}`;return R_(N,{method:"DELETE"})}async function y2(_,$,j=null,Z=[],N=null,G=null){let Y=G?`?chat_jid=${encodeURIComponent(G)}`:"";return R_(`/agent/${_}/message${Y}`,{method:"POST",body:JSON.stringify({content:$,thread_id:j,media_ids:Z,mode:N})})}async function Y4(){return R_("/agent/active-chats")}async function E5(_=null,$={}){let j=new URLSearchParams;if(_)j.set("root_chat_jid",String(_));if($?.includeArchived)j.set("include_archived","1");let Z=j.toString()?`?${j.toString()}`:"";return R_(`/agent/branches${Z}`)}async function h2(_,$={}){return R_("/agent/branch-fork",{method:"POST",body:JSON.stringify({source_chat_jid:_,...$?.agentName?{agent_name:$.agentName}:{},...$?.displayName?{display_name:$.displayName}:{}})})}async function k5(_,$={}){return R_("/agent/branch-rename",{method:"POST",body:JSON.stringify({chat_jid:_,...$&&Object.prototype.hasOwnProperty.call($,"agentName")?{agent_name:$.agentName}:{},...$&&Object.prototype.hasOwnProperty.call($,"displayName")?{display_name:$.displayName}:{}})})}async function A5(_){return R_("/agent/branch-prune",{method:"POST",body:JSON.stringify({chat_jid:_})})}async function w5(_,$={}){return R_("/agent/branch-restore",{method:"POST",body:JSON.stringify({chat_jid:_,...$&&Object.prototype.hasOwnProperty.call($,"agentName")?{agent_name:$.agentName}:{},...$&&Object.prototype.hasOwnProperty.call($,"displayName")?{display_name:$.displayName}:{}})})}async function P5(_,$,j,Z="auto",N={}){let G={source_chat_jid:_,content:j,mode:Z,...N?.sourceAgentName?{source_agent_name:N.sourceAgentName}:{},...N?.targetBy==="agent_name"?{target_agent_name:$}:{target_chat_jid:$}};return R_("/agent/peer-message",{method:"POST",body:JSON.stringify(G)})}async function z4(){return R_("/agent/roster")}async function K4(_=null){let $=_?`?chat_jid=${encodeURIComponent(_)}`:"";return R_(`/agent/status${$}`)}async function I5(_=null){let $=_?`?chat_jid=${encodeURIComponent(_)}`:"";return R_(`/agent/context${$}`)}async function x5(_=null){let $=_?`?chat_jid=${encodeURIComponent(_)}`:"";return R_(`/agent/queue-state${$}`)}async function M5(_,$=null){let j=await fetch("/agent/queue-remove",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({row_id:_,chat_jid:$||void 0})});if(!j.ok){let Z=await j.json().catch(()=>({error:"Failed to remove queued item"}));throw Error(Z.error||`HTTP ${j.status}`)}return j.json()}async function b5(_,$=null){let j=await fetch("/agent/queue-steer",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({row_id:_,chat_jid:$||void 0})});if(!j.ok){let Z=await j.json().catch(()=>({error:"Failed to steer queued item"}));throw Error(Z.error||`HTTP ${j.status}`)}return j.json()}async function i2(_=null){let $=_?`?chat_jid=${encodeURIComponent(_)}`:"";return R_(`/agent/models${$}`)}async function W4(_){let $=new FormData;$.append("file",_);let j=await fetch("/media/upload",{method:"POST",body:$});if(!j.ok){let Z=await j.json().catch(()=>({error:"Upload failed"}));throw Error(Z.error||`HTTP ${j.status}`)}return j.json()}async function B1(_,$,j=null){let Z=await fetch("/agent/respond",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({request_id:_,outcome:$,chat_jid:j||void 0})});if(!Z.ok){let N=await Z.json().catch(()=>({error:"Failed to respond"}));throw Error(N.error||`HTTP ${Z.status}`)}return Z.json()}async function q4(_){let $=await fetch("/agent/card-action",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(_)});if(!$.ok){let j=await $.json().catch(()=>({error:"Adaptive Card action failed"}));throw Error(j.error||`HTTP ${$.status}`)}return $.json()}async function C5(_,$={}){let j=await fetch("/agent/side-prompt/stream",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({prompt:_,system_prompt:$.systemPrompt||void 0,chat_jid:$.chatJid||void 0}),signal:$.signal});if(!j.ok){let G=await j.json().catch(()=>({error:"Side prompt failed"}));throw Error(G.error||`HTTP ${j.status}`)}let Z=null,N=null;if(await D5(j,(G,Y)=>{if($.onEvent?.(G,Y),G==="side_prompt_thinking_delta")$.onThinkingDelta?.(Y?.delta||"");else if(G==="side_prompt_text_delta")$.onTextDelta?.(Y?.delta||"");else if(G==="side_prompt_done")Z=Y;else if(G==="side_prompt_error")N=Y}),N){let G=Error(N?.error||"Side prompt failed");throw G.payload=N,G}return Z}async function X4(_,$){let j=await fetch("/agent/whitelist",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({pattern:_,description:$})});if(!j.ok){let Z=await j.json().catch(()=>({error:"Failed to add to whitelist"}));throw Error(Z.error||`HTTP ${j.status}`)}return j.json()}async function V4(_,$="thought"){let j=`/agent/thought?turn_id=${encodeURIComponent(_)}&panel=${encodeURIComponent($)}`;return R_(j)}async function L4(_,$,j){return R_("/agent/thought/visibility",{method:"POST",body:JSON.stringify({turn_id:_,panel:$,expanded:Boolean(j)})})}function X$(_){return`/media/${_}`}function Q4(_){return`/media/${_}/thumbnail`}async function E2(_){let $=await fetch(`/media/${_}/info`);if(!$.ok)throw Error("Failed to get media info");return $.json()}async function B4(_){let $=await fetch(`/media/${_}`);if(!$.ok)throw Error("Failed to load media text");return $.text()}async function T5(_){let $=await fetch(`/media/${_}`);if(!$.ok)throw Error("Failed to load media blob");return $.blob()}async function l2(_="",$=2,j=!1){let Z=`/workspace/tree?path=${encodeURIComponent(_)}&depth=${$}&show_hidden=${j?"1":"0"}`;return R_(Z)}async function f5(_=""){let $=`/workspace/branch?path=${encodeURIComponent(_||"")}`;return R_($)}async function U4(_,$=20000,j=null){let Z=j?`&mode=${encodeURIComponent(j)}`:"",N=`/workspace/file?path=${encodeURIComponent(_)}&max=${$}${Z}`;return R_(N)}async function S5(_,$){return R_("/workspace/file",{method:"PUT",body:JSON.stringify({path:_,content:$})})}async function O4(_){return R_("/workspace/attach",{method:"POST",body:JSON.stringify({path:_})})}async function U1(_,$="",j={}){let Z=new FormData;Z.append("file",_);let N=new URLSearchParams;if($)N.set("path",$);if(j.overwrite)N.set("overwrite","1");let G=N.toString(),Y=G?`/workspace/upload?${G}`:"/workspace/upload",q=await fetch(""+Y,{method:"POST",body:Z});if(!q.ok){let L=await q.json().catch(()=>({error:"Upload failed"})),X=Error(L.error||`HTTP ${q.status}`);throw X.status=q.status,X.code=L.code,X}return q.json()}async function F4(_,$,j=""){let Z=await fetch("/workspace/file",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({path:_,name:$,content:j})});if(!Z.ok){let N=await Z.json().catch(()=>({error:"Create failed"})),G=Error(N.error||`HTTP ${Z.status}`);throw G.status=Z.status,G.code=N.code,G}return Z.json()}async function H4(_,$){let j=await fetch("/workspace/rename",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({path:_,name:$})});if(!j.ok){let Z=await j.json().catch(()=>({error:"Rename failed"})),N=Error(Z.error||`HTTP ${j.status}`);throw N.status=j.status,N.code=Z.code,N}return j.json()}async function D4(_,$){let j=await fetch("/workspace/move",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({path:_,target:$})});if(!j.ok){let Z=await j.json().catch(()=>({error:"Move failed"})),N=Error(Z.error||`HTTP ${j.status}`);throw N.status=j.status,N.code=Z.code,N}return j.json()}async function J4(_){let $=`/workspace/file?path=${encodeURIComponent(_||"")}`;return R_($,{method:"DELETE"})}async function n2(_,$=!1){return R_("/workspace/visibility",{method:"POST",body:JSON.stringify({visible:Boolean(_),show_hidden:Boolean($)})})}function O1(_){return`/workspace/raw?path=${encodeURIComponent(_)}`}function F1(_,$=!1){return`/workspace/download?${`path=${encodeURIComponent(_||"")}&show_hidden=${$?"1":"0"}`}`}class H1{constructor(_,$,j={}){this.onEvent=_,this.onStatusChange=$,this.chatJid=typeof j?.chatJid==="string"&&j.chatJid.trim()?j.chatJid.trim():null,this.eventSource=null,this.reconnectTimeout=null,this.reconnectDelay=1000,this.status="disconnected",this.reconnectAttempts=0,this.cooldownUntil=0,this.connecting=!1,this.lastActivityAt=0,this.staleCheckTimer=null,this.staleThresholdMs=70000}markActivity(){this.lastActivityAt=Date.now()}clearStaleMonitor(){if(this.staleCheckTimer)clearInterval(this.staleCheckTimer),this.staleCheckTimer=null}startStaleMonitor(){this.clearStaleMonitor(),this.staleCheckTimer=setInterval(()=>{if(this.status!=="connected")return;if(!this.lastActivityAt)return;if(Date.now()-this.lastActivityAt<=this.staleThresholdMs)return;console.warn("SSE connection went stale; forcing reconnect"),this.forceReconnect()},15000)}forceReconnect(){if(this.connecting=!1,this.eventSource)this.eventSource.close(),this.eventSource=null;this.clearStaleMonitor(),this.status="disconnected",this.onStatusChange("disconnected"),this.reconnectAttempts+=1,this.scheduleReconnect()}connect(){if(this.connecting)return;if(this.eventSource&&this.status==="connected")return;if(this.connecting=!0,this.eventSource)this.eventSource.close();this.clearStaleMonitor();let _=this.chatJid?`?chat_jid=${encodeURIComponent(this.chatJid)}`:"";this.eventSource=new EventSource("/sse/stream"+_);let $=(j)=>{this.eventSource.addEventListener(j,(Z)=>{this.markActivity(),this.onEvent(j,JSON.parse(Z.data))})};this.eventSource.onopen=()=>{this.connecting=!1,this.reconnectDelay=1000,this.reconnectAttempts=0,this.cooldownUntil=0,this.status="connected",this.markActivity(),this.startStaleMonitor(),this.onStatusChange("connected")},this.eventSource.onerror=()=>{this.connecting=!1,this.clearStaleMonitor(),this.status="disconnected",this.onStatusChange("disconnected"),this.reconnectAttempts+=1,this.scheduleReconnect()},this.eventSource.addEventListener("connected",()=>{this.markActivity(),console.log("SSE connected"),this.onEvent("connected",{})}),this.eventSource.addEventListener("heartbeat",()=>{this.markActivity()}),$("new_post"),$("new_reply"),$("agent_response"),$("interaction_updated"),$("interaction_deleted"),$("agent_status"),$("agent_steer_queued"),$("agent_followup_queued"),$("agent_followup_consumed"),$("agent_followup_removed"),$("workspace_update"),$("agent_draft"),$("agent_draft_delta"),$("agent_thought"),$("agent_thought_delta"),$("model_changed"),$("ui_theme"),["extension_ui_request","extension_ui_timeout","extension_ui_notify","extension_ui_status","extension_ui_working","extension_ui_widget","extension_ui_title","extension_ui_editor_text","extension_ui_error"].forEach($)}scheduleReconnect(){if(this.reconnectTimeout)clearTimeout(this.reconnectTimeout);let _=10,$=60000,j=Date.now();if(this.reconnectAttempts>=_)this.cooldownUntil=Math.max(this.cooldownUntil,j+$),this.reconnectAttempts=0;let Z=Math.max(this.cooldownUntil-j,0),N=Math.max(this.reconnectDelay,Z);this.reconnectTimeout=setTimeout(()=>{console.log("Reconnecting SSE..."),this.connect()},N),this.reconnectDelay=Math.min(this.reconnectDelay*2,30000)}reconnectIfNeeded(){let _=Date.now();if(this.status==="connected"){if(this.lastActivityAt&&_-this.lastActivityAt>this.staleThresholdMs)this.forceReconnect();return}if(this.cooldownUntil&&_<this.cooldownUntil)return;if(this.reconnectTimeout)clearTimeout(this.reconnectTimeout),this.reconnectTimeout=null;this.connect()}disconnect(){if(this.connecting=!1,this.clearStaleMonitor(),this.eventSource)this.eventSource.close(),this.eventSource=null;if(this.reconnectTimeout)clearTimeout(this.reconnectTimeout),this.reconnectTimeout=null}}function t0(_){if(typeof window>"u"||!window.localStorage)return null;try{return window.localStorage.getItem(_)}catch{return null}}function l_(_,$){if(typeof window>"u"||!window.localStorage)return;try{window.localStorage.setItem(_,$)}catch{}}function k2(_,$=!1){let j=t0(_);if(j===null)return $;return j==="true"}function A2(_,$=null){let j=t0(_);if(j===null)return $;let Z=parseInt(j,10);return Number.isFinite(Z)?Z:$}function D1(_){return String(_||"").trim().toLowerCase()}function y4(_){let $=String(_||"").match(/^@([a-zA-Z0-9_-]*)$/);if(!$)return null;return D1($[1]||"")}function G8(_){let $=new Set,j=[];for(let Z of Array.isArray(_)?_:[]){let N=D1(Z?.agent_name);if(!N||$.has(N))continue;$.add(N),j.push(Z)}return j}function Y8(_,$,j={}){let Z=y4($);if(Z==null)return[];let N=typeof j?.currentChatJid==="string"?j.currentChatJid:null;return G8(_).filter((G)=>{if(N&&G?.chat_jid===N)return!1;return D1(G?.agent_name).startsWith(Z)})}function E4(_){let $=D1(_);return $?`@${$} `:""}function z8(_,$={}){let j=typeof $?.currentChatJid==="string"?$.currentChatJid:null,Z=Number.isFinite($?.limit)?Math.max(0,$.limit):4;return G8(_).filter((N)=>!(j&&N?.chat_jid===j)).slice(0,Z)}function K8({footerWidth:_=0,visibleAgentCount:$=0,hasContextIndicator:j=!1}={}){let Z=Number(_||0),N=Math.max(0,Math.min(Number($||0),4));if(!Number.isFinite(Z)||Z<=0)return!1;if(N<=0)return!1;let G=460+N*68+(j?40:0);return Z>=G}function D$({prefix:_="file",label:$,title:j,onRemove:Z,onClick:N,removeTitle:G="Remove",icon:Y="file"}){let q=`${_}-file-pill`,L=`${_}-file-name`,X=`${_}-file-remove`,Q=Y==="message"?B`<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
      </svg>`:B`<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
        <polyline points="14 2 14 8 20 8"/>
      </svg>`;return B`
    <span class=${q} title=${j||$} onClick=${N}>
      ${Q}
      <span class=${L}>${$}</span>
      ${Z&&B`
        <button
          class=${X}
          onClick=${(V)=>{V.preventDefault(),V.stopPropagation(),Z()}}
          title=${G}
          type="button"
        >
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M18 6L6 18M6 6l12 12"/>
          </svg>
        </button>
      `}
    </span>
  `}var R5=[{name:"/model",description:"Select model or list available models"},{name:"/cycle-model",description:"Cycle to the next available model"},{name:"/thinking",description:"Show or set thinking level"},{name:"/cycle-thinking",description:"Cycle thinking level"},{name:"/theme",description:"Set UI theme (no name to show available themes)"},{name:"/tint",description:"Tint default light/dark UI (usage: /tint #hex or /tint off)"},{name:"/btw",description:"Open a side conversation panel without interrupting the main chat"},{name:"/state",description:"Show current session state"},{name:"/stats",description:"Show session token and cost stats"},{name:"/context",description:"Show context window usage"},{name:"/last",description:"Show last assistant response"},{name:"/compact",description:"Manually compact the session"},{name:"/auto-compact",description:"Toggle auto-compaction"},{name:"/auto-retry",description:"Toggle auto-retry"},{name:"/abort",description:"Abort the current response"},{name:"/abort-retry",description:"Abort retry backoff"},{name:"/abort-bash",description:"Abort running bash command"},{name:"/shell",description:"Run a shell command and return output"},{name:"/bash",description:"Run a shell command and add output to context"},{name:"/queue",description:"Queue a follow-up message (one-at-a-time)"},{name:"/queue-all",description:"Queue a follow-up message (batch all)"},{name:"/steer",description:"Steer the current response"},{name:"/steering-mode",description:"Set steering mode (all|one)"},{name:"/followup-mode",description:"Set follow-up mode (all|one)"},{name:"/session-name",description:"Set or show the session name"},{name:"/new-session",description:"Start a new session"},{name:"/switch-session",description:"Switch to a session file"},{name:"/fork",description:"Fork from a previous message"},{name:"/forks",description:"List forkable messages"},{name:"/tree",description:"List the session tree"},{name:"/label",description:"Set or clear a label on a tree entry"},{name:"/labels",description:"List labeled entries"},{name:"/agent-name",description:"Set or show the agent display name"},{name:"/agent-avatar",description:"Set or show the agent avatar URL"},{name:"/user-name",description:"Set or show your display name"},{name:"/user-avatar",description:"Set or show your avatar URL"},{name:"/user-github",description:"Set name/avatar from GitHub profile"},{name:"/export-html",description:"Export session to HTML"},{name:"/passkey",description:"Manage passkeys (enrol/list/delete)"},{name:"/totp",description:"Show a TOTP enrolment QR code"},{name:"/qr",description:"Generate a QR code for text or URL"},{name:"/search",description:"Search notes and skills in the workspace"},{name:"/restart",description:"Restart the agent and stop subprocesses"},{name:"/commands",description:"List available commands"}];function v5({usage:_,onCompact:$}){let j=Math.min(100,Math.max(0,_.percent||0)),Z=_.tokens,N=_.contextWindow,G="Compact context",q=`${Z!=null?`Context: ${W8(Z)} / ${W8(N)} tokens (${j.toFixed(0)}%)`:`Context: ${j.toFixed(0)}%`} — ${"Compact context"}`,L=9,X=2*Math.PI*9,Q=j/100*X,V=j>90?"var(--context-red, #ef4444)":j>75?"var(--context-amber, #f59e0b)":"var(--context-green, #22c55e)";return B`
        <button
            class="compose-context-pie icon-btn"
            type="button"
            title=${q}
            aria-label="Compact context"
            onClick=${(H)=>{H.preventDefault(),H.stopPropagation(),$?.()}}
        >
            <svg width="22" height="22" viewBox="0 0 24 24" aria-hidden="true">
                <circle cx="12" cy="12" r=${9}
                    fill="none"
                    stroke="var(--context-track, rgba(128,128,128,0.2))"
                    stroke-width="2.5" />
                <circle cx="12" cy="12" r=${9}
                    fill="none"
                    stroke=${V}
                    stroke-width="2.5"
                    stroke-dasharray=${`${Q} ${X}`}
                    stroke-linecap="round"
                    transform="rotate(-90 12 12)" />
            </svg>
        </button>
    `}function W8(_){if(_==null)return"?";if(_>=1e6)return(_/1e6).toFixed(1)+"M";if(_>=1000)return(_/1000).toFixed(0)+"K";return String(_)}function q8({onPost:_,onFocus:$,searchMode:j,searchScope:Z="current",onSearch:N,onSearchScopeChange:G,onEnterSearch:Y,onExitSearch:q,fileRefs:L=[],onRemoveFileRef:X,onClearFileRefs:Q,messageRefs:V=[],onRemoveMessageRef:H,onClearMessageRefs:P,activeModel:T=null,modelUsage:g=null,thinkingLevel:f=null,supportsThinking:w=!1,contextUsage:M=null,onContextCompact:c,notificationsEnabled:y=!1,notificationPermission:S="default",onToggleNotifications:o,onModelChange:a,onModelStateChange:n,activeEditorPath:$_=null,onAttachEditorFile:i,onOpenFilePill:W_,followupQueueItems:d_=[],onInjectQueuedFollowup:g_,onRemoveQueuedFollowup:l,onSubmitIntercept:Z_,onMessageResponse:t,onPopOutChat:q_,isAgentActive:Y_=!1,activeChatAgents:X_=[],currentChatJid:Q_="web:default",connectionStatus:N_="connected",onSetFileRefs:v_,onSetMessageRefs:I_,onSubmitError:J_,onSwitchChat:y_,onRenameSession:z0,isRenameSessionInProgress:K0=!1,onCreateSession:K_,onDeleteSession:__,onRestoreSession:O_}){let[j_,F_]=R(""),[x_,a_]=R(""),[p_,o_]=R([]),[c_,h_]=R(!1),[A_,E_]=R([]),[u_,W0]=R(0),[P0,M_]=R(!1),[y0,j0]=R([]),[b_,Z0]=R(0),[t_,$0]=R(!1),[N0,C_]=R(!1),[O0,T0]=R(!1),[m_,e_]=R(!1),[f0,w_]=R([]),[C,r]=R(!1),[B_,P_]=R(0),[s_,F0]=R(null),T_=k(null),S0=k(null),_$=k(null),$$=k(null),b0=k(null),x$=k(null),H0=k(null),h0=k(null),i0=k(0),R0=k(!1),j$=200,V2=(z)=>{let O=new Set,D=[];for(let b of z||[]){if(typeof b!=="string")continue;let p=b.trim();if(!p||O.has(p))continue;O.add(p),D.push(p)}return D},L2=()=>{let z=t0("piclaw_compose_history");if(!z)return[];try{let O=JSON.parse(z);if(!Array.isArray(O))return[];return V2(O)}catch{return[]}},E0=(z)=>{l_("piclaw_compose_history",JSON.stringify(z))},D0=k(L2()),G0=k(-1),g0=k(""),Y0=j_.trim()||p_.length>0||L.length>0||V.length>0,I0=typeof window<"u"&&typeof navigator<"u"&&Boolean(navigator.geolocation)&&Boolean(window.isSecureContext),Z$=typeof window<"u"&&typeof Notification<"u",M$=typeof window<"u"?Boolean(window.isSecureContext):!1,m$=Z$&&M$&&S!=="denied",r$=S==="granted"&&y,l0=r$?"Disable notifications":"Enable notifications",a$=p_.length>0||L.length>0||V.length>0,t$=N_==="disconnected"?"Reconnecting":String(N_||"Connecting").replace(/[-_]+/g," ").replace(/^./,(z)=>z.toUpperCase()),N$=N_==="disconnected"?"Reconnecting":`Connection: ${t$}`,B$=(Array.isArray(X_)?X_:[]).filter((z)=>!z?.archived_at),n0=z8(B$,{currentChatJid:Q_,limit:4}),X0=!j&&K8({footerWidth:B_,visibleAgentCount:n0.length,hasContextIndicator:Boolean(M&&M.percent!=null)}),i_=(()=>{for(let z of Array.isArray(X_)?X_:[]){let O=typeof z?.chat_jid==="string"?z.chat_jid.trim():"";if(O&&O===Q_)return z}return null})(),U$=Boolean(i_&&i_.chat_jid===(i_.root_chat_jid||i_.chat_jid)),J$=(()=>{let z=new Set,O=[];for(let D of Array.isArray(X_)?X_:[]){let b=typeof D?.chat_jid==="string"?D.chat_jid.trim():"";if(!b||b===Q_||z.has(b))continue;if(!(typeof D?.agent_name==="string"?D.agent_name.trim():""))continue;z.add(b),O.push(D)}return O})(),g$=J$.length>0,Q2=g$&&typeof y_==="function",H_=g$&&typeof O_==="function",G$=Boolean(K0||R0.current),y$=!j&&typeof z0==="function"&&!G$,b$=!j&&typeof K_==="function",d0=!j&&typeof __==="function"&&!U$,C$=!j&&(Q2||H_||y$||b$||d0),o0=T||"",v0=w&&f?` (${f})`:"",V0=v0.trim()?`${f}`:"",u0=typeof g?.hint_short==="string"?g.hint_short.trim():"",s0=[V0||null,u0||null].filter(Boolean).join(" • "),C0=[o0?`Current model: ${o0}${v0}`:null,g?.plan?`Plan: ${g.plan}`:null,u0||null,g?.primary?.reset_description||null,g?.secondary?.reset_description||null].filter(Boolean),p$=N0?"Switching model…":C0.join(" • ")||`Current model: ${o0}${v0} (tap to open model picker)`,r0=(z)=>{if(!z||typeof z!=="object")return;let O=z.model??z.current;if(typeof n==="function")n({model:O??null,thinking_level:z.thinking_level??null,supports_thinking:z.supports_thinking,provider_usage:z.provider_usage??null});if(O&&typeof a==="function")a(O)},p0=(z)=>{let O=z||T_.current;if(!O)return;O.style.height="auto",O.style.height=`${O.scrollHeight}px`,O.style.overflowY="hidden"},c$=(z)=>{if(!z)return{content:z,fileRefs:[]};let D=z.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),b=-1;for(let U_=0;U_<D.length;U_+=1)if(D[U_].trim()==="Files:"&&D[U_+1]&&/^\s*-\s+/.test(D[U_+1])){b=U_;break}if(b===-1)return{content:z,fileRefs:[]};let p=[],v=b+1;for(;v<D.length;v+=1){let U_=D[v];if(/^\s*-\s+/.test(U_))p.push(U_.replace(/^\s*-\s+/,"").trim());else if(!U_.trim())break;else break}if(p.length===0)return{content:z,fileRefs:[]};let s=D.slice(0,b),L_=D.slice(v);return{content:[...s,...L_].join(`
`).replace(/\n{3,}/g,`

`).trim(),fileRefs:p}},e$=(z)=>{if(!z)return{content:z,messageRefs:[]};let D=z.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),b=-1;for(let U_=0;U_<D.length;U_+=1)if(D[U_].trim()==="Referenced messages:"&&D[U_+1]&&/^\s*-\s+/.test(D[U_+1])){b=U_;break}if(b===-1)return{content:z,messageRefs:[]};let p=[],v=b+1;for(;v<D.length;v+=1){let U_=D[v];if(/^\s*-\s+/.test(U_)){let H$=U_.replace(/^\s*-\s+/,"").trim().match(/^message:(\S+)$/i);if(H$)p.push(H$[1])}else if(!U_.trim())break;else break}if(p.length===0)return{content:z,messageRefs:[]};let s=D.slice(0,b),L_=D.slice(v);return{content:[...s,...L_].join(`
`).replace(/\n{3,}/g,`

`).trim(),messageRefs:p}},T$=(z)=>{let O=c$(z||""),D=e$(O.content||"");return{text:D.content||"",fileRefs:O.fileRefs,messageRefs:D.messageRefs}},J0=(z)=>{if(!z.startsWith("/")||z.includes(`
`)){M_(!1),E_([]);return}let O=z.toLowerCase().split(" ")[0];if(O.length<1){M_(!1),E_([]);return}let D=R5.filter((b)=>b.name.startsWith(O)||b.name.replace(/-/g,"").startsWith(O.replace(/-/g,"")));if(D.length>0&&!(D.length===1&&D[0].name===O))$0(!1),j0([]),E_(D),W0(0),M_(!0);else M_(!1),E_([])},O$=(z)=>{let O=j_,D=O.indexOf(" "),b=D>=0?O.slice(D):"",p=z.name+b;F_(p),M_(!1),E_([]),requestAnimationFrame(()=>{let v=T_.current;if(!v)return;let s=p.length;v.selectionStart=s,v.selectionEnd=s,v.focus()})},E$=(z)=>{if(y4(z)==null){$0(!1),j0([]);return}let O=Y8(B$,z,{currentChatJid:Q_});if(O.length>0&&!(O.length===1&&E4(O[0].agent_name).trim().toLowerCase()===String(z||"").trim().toLowerCase()))M_(!1),E_([]),j0(O),Z0(0),$0(!0);else $0(!1),j0([])},k$=(z)=>{let O=E4(z?.agent_name);if(!O)return;F_(O),$0(!1),j0([]),requestAnimationFrame(()=>{let D=T_.current;if(!D)return;let b=O.length;D.selectionStart=b,D.selectionEnd=b,D.focus()})},f$=(z)=>{if(z?.preventDefault?.(),z?.stopPropagation?.(),j||!Q2&&!H_&&!y$&&!b$&&!d0)return;T0(!1),M_(!1),E_([]),$0(!1),j0([]),e_((O)=>!O)},h$=(z)=>{let O=typeof z==="string"?z.trim():"";if(e_(!1),!O||O===Q_){requestAnimationFrame(()=>T_.current?.focus());return}y_?.(O)},_2=async(z)=>{let O=typeof z==="string"?z.trim():"";if(e_(!1),!O||typeof O_!=="function"){requestAnimationFrame(()=>T_.current?.focus());return}try{await O_(O)}catch(D){console.warn("Failed to restore session:",D),requestAnimationFrame(()=>T_.current?.focus())}},c0=(z)=>{let O=typeof z?.chat_jid==="string"?z.chat_jid.trim():"";if(O&&typeof y_==="function"){y_(O);return}k$(z)},m0=async(z)=>{if(z?.preventDefault)z.preventDefault();if(z?.stopPropagation)z.stopPropagation();if(typeof z0!=="function"||K0||R0.current)return;R0.current=!0,e_(!1);try{await z0()}catch(O){console.warn("Failed to rename session:",O)}finally{R0.current=!1}requestAnimationFrame(()=>T_.current?.focus())},F$=async()=>{if(typeof K_!=="function")return;e_(!1);try{await K_()}catch(z){console.warn("Failed to create session:",z)}requestAnimationFrame(()=>T_.current?.focus())},$2=async()=>{if(typeof __!=="function")return;e_(!1);try{await __(Q_)}catch(z){console.warn("Failed to delete session:",z)}requestAnimationFrame(()=>T_.current?.focus())},Y$=(z)=>{if(j)a_(z);else F_(z),J0(z),E$(z);requestAnimationFrame(()=>p0())},i$=(z)=>{let O=j?x_:j_,D=O&&!O.endsWith(`
`)?`
`:"",b=`${O}${D}${z}`.trimStart();Y$(b)},A$=(z)=>{let O=z?.command?.model_label;if(O)return O;let D=z?.command?.message;if(typeof D==="string"){let b=D.match(/•\s+([^\n]+?)\s+\(current\)/);if(b?.[1])return b[1].trim()}return null},S$=async(z)=>{if(j||N0)return;C_(!0);try{let O=await y2("default",z,null,[],null,Q_),D=A$(O);r0({model:D??T??null,thinking_level:O?.command?.thinking_level,supports_thinking:O?.command?.supports_thinking});try{let b=await i2(Q_);if(b)r0(b)}catch{}return _?.(),!0}catch(O){return console.error("Failed to switch model:",O),alert("Failed to switch model: "+O.message),!1}finally{C_(!1)}},j2=async()=>{await S$("/cycle-model")},B2=async(z)=>{if(!z||N0)return;if(await S$(`/model ${z}`))T0(!1)},w$=(z)=>{z.preventDefault(),z.stopPropagation(),e_(!1),T0((O)=>!O)},l$=async()=>{if(j)return;c?.(),await P$("/compact",null,{includeMedia:!1,includeFileRefs:!1,includeMessageRefs:!1,clearAfterSubmit:!1,recordHistory:!1})},Z2=(z)=>{if(z==="queue"||z==="steer"||z==="auto")return z;return Y_?"queue":null},P$=async(z,O,D={})=>{let{includeMedia:b=!0,includeFileRefs:p=!0,includeMessageRefs:v=!0,clearAfterSubmit:s=!0,recordHistory:L_=!0}=D||{},k0=typeof z==="string"?z:z&&typeof z?.target?.value==="string"?z.target.value:j_,U_=typeof k0==="string"?k0:"";if(!U_.trim()&&(b?p_.length===0:!0)&&(p?L.length===0:!0)&&(v?V.length===0:!0))return;M_(!1),E_([]),$0(!1),j0([]),e_(!1),F0(null);let H$=b?[...p_]:[],I$=p?[...L]:[],O2=v?[...V]:[],z$=U_.trim();if(L_&&z$){let G2=D0.current,x0=V2(G2.filter((F2)=>F2!==z$));if(x0.push(z$),x0.length>200)x0.splice(0,x0.length-200);D0.current=x0,E0(x0),G0.current=-1,g0.current=""}let S1=()=>{if(b)o_([...H$]);if(p)v_?.(I$);if(v)I_?.(O2);F_(z$),requestAnimationFrame(()=>p0())};if(s)F_(""),o_([]),Q?.(),P?.();(async()=>{try{if(await Z_?.({content:z$,submitMode:O,fileRefs:I$,messageRefs:O2,mediaFiles:H$})){_?.();return}let x0=[];for(let q0 of H$){let L0=await W4(q0);x0.push(L0.id)}let F2=I$.length?`Files:
${I$.map((q0)=>`- ${q0}`).join(`
`)}`:"",Q0=O2.length?`Referenced messages:
${O2.map((q0)=>`- message:${q0}`).join(`
`)}`:"",R1=x0.length?`Attachments:
${x0.map((q0,L0)=>{let R2=H$[L0]?.name||`attachment-${L0+1}`;return`- attachment:${q0} (${R2})`}).join(`
`)}`:"",H2=[z$,F2,Q0,R1].filter(Boolean).join(`

`),n$=await y2("default",H2,null,x0,Z2(O),Q_);if(t?.(n$),n$?.command){r0({model:n$.command.model_label??T??null,thinking_level:n$.command.thinking_level,supports_thinking:n$.command.supports_thinking});try{let q0=await i2(Q_);if(q0)r0(q0)}catch{}}_?.()}catch(G2){if(s)S1();let x0=G2?.message||"Failed to send message.";F0(x0),J_?.(x0),console.error("Failed to post:",G2)}})()},x2=(z)=>{g_?.(z)},M2=(z)=>{if(z.isComposing)return;if(j&&z.key==="Escape"){z.preventDefault(),a_(""),q?.();return}if(!j&&m_&&z.key==="Escape"){z.preventDefault(),e_(!1);return}if(t_&&y0.length>0){let O=T_.current?.value??(j?x_:j_);if(!String(O||"").match(/^@([a-zA-Z0-9_-]*)$/))$0(!1),j0([]);else{if(z.key==="ArrowDown"){z.preventDefault(),Z0((D)=>(D+1)%y0.length);return}if(z.key==="ArrowUp"){z.preventDefault(),Z0((D)=>(D-1+y0.length)%y0.length);return}if(z.key==="Tab"||z.key==="Enter"){z.preventDefault(),k$(y0[b_]);return}if(z.key==="Escape"){z.preventDefault(),$0(!1),j0([]);return}}}if(P0&&A_.length>0){let O=T_.current?.value??(j?x_:j_);if(!String(O||"").startsWith("/"))M_(!1),E_([]);else{if(z.key==="ArrowDown"){z.preventDefault(),W0((D)=>(D+1)%A_.length);return}if(z.key==="ArrowUp"){z.preventDefault(),W0((D)=>(D-1+A_.length)%A_.length);return}if(z.key==="Tab"){z.preventDefault(),O$(A_[u_]);return}if(z.key==="Enter"&&!z.shiftKey){if(!(T_.current?.value??(j?x_:j_)).includes(" ")){z.preventDefault();let p=A_[u_];M_(!1),E_([]),P$(p.name);return}}if(z.key==="Escape"){z.preventDefault(),M_(!1),E_([]);return}}}if(!j&&(z.key==="ArrowUp"||z.key==="ArrowDown")&&!z.metaKey&&!z.ctrlKey&&!z.altKey&&!z.shiftKey){let O=T_.current;if(!O)return;let D=O.value||"",b=O.selectionStart===0&&O.selectionEnd===0,p=O.selectionStart===D.length&&O.selectionEnd===D.length;if(z.key==="ArrowUp"&&b||z.key==="ArrowDown"&&p){let v=D0.current;if(!v.length)return;z.preventDefault();let s=G0.current;if(z.key==="ArrowUp"){if(s===-1)g0.current=D,s=v.length-1;else if(s>0)s-=1;G0.current=s,Y$(v[s]||"")}else{if(s===-1)return;if(s<v.length-1)s+=1,G0.current=s,Y$(v[s]||"");else G0.current=-1,Y$(g0.current||""),g0.current=""}requestAnimationFrame(()=>{let L_=T_.current;if(!L_)return;let k0=L_.value.length;L_.selectionStart=k0,L_.selectionEnd=k0});return}}if(z.key==="Enter"&&!z.shiftKey&&(z.ctrlKey||z.metaKey)){z.preventDefault();let O=T_.current?.value??(j?x_:j_);if(j){if(O.trim())N?.(O.trim(),Z)}else P$(O,"steer");return}if(z.key==="Enter"&&!z.shiftKey){z.preventDefault();let O=T_.current?.value??(j?x_:j_);if(j){if(O.trim())N?.(O.trim(),Z)}else P$(O)}},V_=(z)=>{let O=Array.from(z||[]).filter((D)=>D instanceof File&&!String(D.name||"").startsWith(".DS_Store"));if(!O.length)return;o_((D)=>[...D,...O]),F0(null)},U2=(z)=>{V_(z.target.files),z.target.value=""},b2=(z)=>{if(j)return;z.preventDefault(),z.stopPropagation(),i0.current+=1,h_(!0)},C2=(z)=>{if(j)return;if(z.preventDefault(),z.stopPropagation(),i0.current=Math.max(0,i0.current-1),i0.current===0)h_(!1)},N2=(z)=>{if(j)return;if(z.preventDefault(),z.stopPropagation(),z.dataTransfer)z.dataTransfer.dropEffect="copy";h_(!0)},T2=(z)=>{if(j)return;z.preventDefault(),z.stopPropagation(),i0.current=0,h_(!1),V_(z.dataTransfer?.files||[])},f2=(z)=>{if(j)return;let O=z.clipboardData?.items;if(!O||!O.length)return;let D=[];for(let b of O){if(b.kind!=="file")continue;let p=b.getAsFile?.();if(p)D.push(p)}if(D.length>0)z.preventDefault(),V_(D)},S2=(z)=>{o_((O)=>O.filter((D,b)=>b!==z))},U=()=>{F0(null),o_([]),Q?.(),P?.()},J=()=>{if(!navigator.geolocation){alert("Geolocation is not available in this browser.");return}navigator.geolocation.getCurrentPosition((z)=>{let{latitude:O,longitude:D,accuracy:b}=z.coords,p=`${O.toFixed(5)}, ${D.toFixed(5)}`,v=Number.isFinite(b)?` ±${Math.round(b)}m`:"",s=`https://maps.google.com/?q=${O},${D}`,L_=`Location: ${p}${v} ${s}`;i$(L_)},(z)=>{let O=z?.message||"Unable to retrieve location.";alert(`Location error: ${O}`)},{enableHighAccuracy:!0,timeout:1e4,maximumAge:0})};u(()=>{if(!O0)return;r(!0),i2(Q_).then((z)=>{let O=Array.isArray(z?.models)?z.models.filter((D)=>typeof D==="string"&&D.trim().length>0):[];O.sort((D,b)=>D.localeCompare(b,void 0,{sensitivity:"base"})),w_(O),r0(z)}).catch((z)=>{console.warn("Failed to load model list:",z),w_([])}).finally(()=>{r(!1)})},[O0,T]),u(()=>{if(j)T0(!1),e_(!1),M_(!1),E_([]),$0(!1),j0([])},[j]),u(()=>{if(m_&&!C$)e_(!1)},[m_,C$]),u(()=>{if(!O0)return;let z=(O)=>{let D=$$.current,b=b0.current,p=O.target;if(D&&D.contains(p))return;if(b&&b.contains(p))return;T0(!1)};return document.addEventListener("pointerdown",z),()=>document.removeEventListener("pointerdown",z)},[O0]),u(()=>{if(!m_)return;let z=(O)=>{let D=x$.current,b=H0.current,p=O.target;if(D&&D.contains(p))return;if(b&&b.contains(p))return;e_(!1)};return document.addEventListener("pointerdown",z),()=>document.removeEventListener("pointerdown",z)},[m_]),u(()=>{let z=()=>{let v=h0.current?.clientWidth||0;P_((s)=>s===v?s:v)};z();let O=h0.current,D=0,b=()=>{if(D)cancelAnimationFrame(D);D=requestAnimationFrame(()=>{D=0,z()})},p=null;if(O&&typeof ResizeObserver<"u")p=new ResizeObserver(()=>b()),p.observe(O);if(typeof window<"u")window.addEventListener("resize",b);return()=>{if(D)cancelAnimationFrame(D);if(p?.disconnect?.(),typeof window<"u")window.removeEventListener("resize",b)}},[j,T,n0.length,M?.percent]);let I=(z)=>{let O=z.target.value;if(F0(null),m_)e_(!1);p0(z.target),Y$(O)};return u(()=>{requestAnimationFrame(()=>p0())},[j_,x_,j]),u(()=>{if(j)return;E$(j_)},[B$,Q_,j_,j]),B`
        <div class="compose-box">
            ${!j&&d_.length>0&&B`
                <div class="compose-queue-stack">
                    ${d_.map((z)=>{let O=typeof z?.content==="string"?z.content:"",D=T$(O);if(!D.text.trim()&&D.fileRefs.length===0&&D.messageRefs.length===0)return null;return B`
                            <div class="compose-queue-stack-item" role="listitem">
                                <div class="compose-queue-stack-content" title=${O}>
                                    ${D.text.trim()&&B`
                                        <div class="compose-queue-stack-text">${D.text}</div>
                                    `}
                                    ${(D.messageRefs.length>0||D.fileRefs.length>0)&&B`
                                        <div class="compose-queue-stack-refs">
                                            ${D.messageRefs.map((b)=>B`
                                                <${D$}
                                                    key=${"queue-msg-"+b}
                                                    prefix="compose"
                                                    label=${"msg:"+b}
                                                    title=${"Message reference: "+b}
                                                    icon="message"
                                                />
                                            `)}
                                            ${D.fileRefs.map((b)=>{let p=b.split("/").pop()||b;return B`
                                                    <${D$}
                                                        key=${"queue-file-"+b}
                                                        prefix="compose"
                                                        label=${p}
                                                        title=${b}
                                                        onClick=${()=>W_?.(b)}
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
                                        onClick=${()=>x2(z)}
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
                                        onClick=${()=>l?.(z)}
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
                class=${`compose-input-wrapper${c_?" drag-active":""}`}
                onDragEnter=${b2}
                onDragOver=${N2}
                onDragLeave=${C2}
                onDrop=${T2}
            >
                <div class="compose-input-main">
                    ${s_&&!a$&&B`
                        <div class="compose-submit-error compose-submit-error-top" role="status" aria-live="polite">${s_}</div>
                    `}
                    ${a$&&B`
                        <div class="compose-file-refs">
                            ${s_&&B`
                                <div class="compose-submit-error" role="status" aria-live="polite">${s_}</div>
                            `}
                            ${V.map((z)=>{return B`
                                    <${D$}
                                        key=${"msg-"+z}
                                        prefix="compose"
                                        label=${"msg:"+z}
                                        title=${"Message reference: "+z}
                                        removeTitle="Remove reference"
                                        icon="message"
                                        onRemove=${()=>H?.(z)}
                                    />
                                `})}
                            ${L.map((z)=>{let O=z.split("/").pop()||z;return B`
                                    <${D$}
                                        prefix="compose"
                                        label=${O}
                                        title=${z}
                                        onClick=${()=>W_?.(z)}
                                        removeTitle="Remove file"
                                        onRemove=${()=>X?.(z)}
                                    />
                                `})}
                            ${p_.map((z,O)=>{let D=z?.name||`attachment-${O+1}`;return B`
                                    <${D$}
                                        key=${D+O}
                                        prefix="compose"
                                        label=${D}
                                        title=${D}
                                        removeTitle="Remove attachment"
                                        onRemove=${()=>S2(O)}
                                    />
                                `})}
                            <button
                                type="button"
                                class="compose-clear-attachments-btn"
                                onClick=${U}
                                title="Clear all attachments and references"
                                aria-label="Clear all attachments and references"
                            >
                                Clear all
                            </button>
                        </div>
                    `}
                    ${!j&&typeof q_==="function"&&B`
                        <button
                            type="button"
                            class="compose-popout-btn"
                            onClick=${()=>q_?.()}
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
                        ref=${T_}
                        placeholder=${j?"Search (Enter to run)...":"Message (Enter to send, Shift+Enter for newline)..."}
                        value=${j?x_:j_}
                        onInput=${I}
                        onKeyDown=${M2}
                        onPaste=${f2}
                        onFocus=${$}
                        onClick=${$}
                        rows="1"
                    />
                    ${t_&&y0.length>0&&B`
                        <div class="slash-autocomplete" ref=${_$}>
                            ${y0.map((z,O)=>B`
                                <div
                                    key=${z.chat_jid||z.agent_name}
                                    class=${`slash-item${O===b_?" active":""}`}
                                    onMouseDown=${(D)=>{D.preventDefault(),k$(z)}}
                                    onMouseEnter=${()=>Z0(O)}
                                >
                                    <span class="slash-name">@${z.agent_name}</span>
                                    <span class="slash-desc">${z.chat_jid||"Active agent"}</span>
                                </div>
                            `)}
                        </div>
                    `}
                    ${P0&&A_.length>0&&B`
                        <div class="slash-autocomplete" ref=${S0}>
                            ${A_.map((z,O)=>B`
                                <div
                                    key=${z.name}
                                    class=${`slash-item${O===u_?" active":""}`}
                                    onMouseDown=${(D)=>{D.preventDefault(),O$(z)}}
                                    onMouseEnter=${()=>W0(O)}
                                >
                                    <span class="slash-name">${z.name}</span>
                                    <span class="slash-desc">${z.description}</span>
                                </div>
                            `)}
                        </div>
                    `}
                    ${O0&&!j&&B`
                        <div class="compose-model-popup" ref=${$$}>
                            <div class="compose-model-popup-title">Select model</div>
                            <div class="compose-model-popup-menu" role="menu" aria-label="Model picker">
                                ${C&&B`
                                    <div class="compose-model-popup-empty">Loading models…</div>
                                `}
                                ${!C&&f0.length===0&&B`
                                    <div class="compose-model-popup-empty">No models available.</div>
                                `}
                                ${!C&&f0.map((z)=>B`
                                    <button
                                        key=${z}
                                        type="button"
                                        role="menuitem"
                                        class=${`compose-model-popup-item${T===z?" active":""}`}
                                        onClick=${()=>{B2(z)}}
                                        disabled=${N0}
                                    >
                                        ${z}
                                    </button>
                                `)}
                            </div>
                            <div class="compose-model-popup-actions">
                                <button
                                    type="button"
                                    class="compose-model-popup-btn"
                                    onClick=${()=>{j2()}}
                                    disabled=${N0}
                                >
                                    Next model
                                </button>
                            </div>
                        </div>
                    `}
                    ${m_&&!j&&B`
                        <div class="compose-model-popup" ref=${x$}>
                            <div class="compose-model-popup-title">Manage sessions & agents</div>
                            <div class="compose-model-popup-menu" role="menu" aria-label="Sessions and agents">
                                ${B`
                                    <div class="compose-model-popup-item current" role="note" aria-live="polite">
                                        ${(()=>{let z=typeof i_?.agent_name==="string"&&i_.agent_name.trim()?`@${i_.agent_name.trim()}`:Q_,O=typeof i_?.chat_jid==="string"&&i_.chat_jid.trim()?i_.chat_jid.trim():Q_;return`${z} — ${O} • current`})()}
                                    </div>
                                `}
                                ${!g$&&B`
                                    <div class="compose-model-popup-empty">No other sessions yet.</div>
                                `}
                                ${g$&&J$.map((z)=>{let O=Boolean(z.archived_at),b=z.chat_jid!==(z.root_chat_jid||z.chat_jid)&&!z.is_active&&!O&&typeof __==="function",p=`@${z.agent_name} — ${z.chat_jid}${z.is_active?" • active":""}${O?" • archived":""}`;return B`
                                        <div key=${z.chat_jid} class=${`compose-model-popup-item-row${O?" archived":""}`}>
                                            <button
                                                type="button"
                                                role="menuitem"
                                                class=${`compose-model-popup-item${O?" archived":""}`}
                                                onClick=${()=>{if(O){_2(z.chat_jid);return}h$(z.chat_jid)}}
                                                disabled=${O?!H_:!Q2}
                                                title=${O?"Restore this archived branch":"Switch to this session"}
                                            >
                                                ${p}
                                            </button>
                                            ${b&&B`
                                                <button
                                                    type="button"
                                                    class="compose-model-popup-item-delete"
                                                    title="Delete this branch"
                                                    aria-label=${`Delete @${z.agent_name}`}
                                                    onClick=${(v)=>{v.stopPropagation(),e_(!1),__(z.chat_jid)}}
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
                            ${(b$||y$||d0)&&B`
                                <div class="compose-model-popup-actions">
                                    ${b$&&B`
                                        <button
                                            type="button"
                                            class="compose-model-popup-btn primary"
                                            onClick=${()=>{F$()}}
                                            title="Create a new agent/session branch from this chat"
                                        >
                                            New
                                        </button>
                                    `}
                                    ${y$&&B`
                                        <button
                                            type="button"
                                            class="compose-model-popup-btn"
                                            onClick=${(z)=>{m0(z)}}
                                            title="Rename current branch name and agent handle"
                                            disabled=${G$}
                                        >
                                            Rename current…
                                        </button>
                                    `}
                                    ${d0&&B`
                                        <button
                                            type="button"
                                            class="compose-model-popup-btn danger"
                                            onClick=${()=>{$2()}}
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
                <div class="compose-footer" ref=${h0}>
                    ${!j&&T&&B`
                    <div class="compose-meta-row">
                        ${!j&&T&&B`
                            <div class="compose-model-meta">
                                <button
                                    ref=${b0}
                                    type="button"
                                    class="compose-model-hint compose-model-hint-btn"
                                    title=${p$}
                                    aria-label="Open model picker"
                                    onClick=${w$}
                                    disabled=${N0}
                                >
                                    ${N0?"Switching…":o0}
                                </button>
                                <div class="compose-model-meta-subline">
                                    ${!N0&&s0&&B`
                                        <span class="compose-model-usage-hint" title=${p$}>
                                            ${s0}
                                        </span>
                                    `}
                                </div>
                            </div>
                        `}
                        ${!j&&M&&M.percent!=null&&B`
                            <${v5} usage=${M} onCompact=${l$} />
                        `}
                    </div>
                    `}
                    <div class="compose-actions ${j?"search-mode":""}">
                    ${X0&&B`
                        <div class="compose-agent-hints compose-agent-hints-inline" title="Active chat agents you can mention with @name">
                            ${n0.map((z)=>B`
                                <button
                                    key=${z.chat_jid||z.agent_name}
                                    type="button"
                                    class="compose-agent-chip"
                                    onClick=${()=>c0(z)}
                                    title=${`${z.chat_jid||"Active agent"} — switch to @${z.agent_name}`}
                                >
                                    <span class="compose-agent-chip-handle">@${z.agent_name}</span>
                                </button>
                            `)}
                        </div>
                    `}
                    ${C$&&B`
                        ${i_?.agent_name&&B`
                            <span
                                class="compose-current-agent-label"
                                title=${i_.chat_jid||Q_}
                                onClick=${f$}
                            >@${i_.agent_name}</span>
                        `}
                        <button
                            ref=${H0}
                            type="button"
                            class=${`icon-btn compose-mention-btn${m_?" active":""}`}
                            onClick=${f$}
                            title=${m_?"Hide session manager":"Manage Sessions/Agents"}
                            aria-label="Manage Sessions/Agents"
                            aria-expanded=${m_?"true":"false"}
                        >
                            <svg class="compose-mention-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false">
                                <circle cx="12" cy="12" r="4.25" />
                                <path d="M16.25 7.75v5.4a2.1 2.1 0 0 0 4.2 0V12a8.45 8.45 0 1 0-4.2 7.33" />
                            </svg>
                        </button>
                    `}
                    ${j&&B`
                        <label class="compose-search-scope-wrap" title="Search scope">
                            <span class="compose-search-scope-label">Scope</span>
                            <select
                                class="compose-search-scope-select"
                                value=${Z}
                                onChange=${(z)=>G?.(z.currentTarget.value)}
                            >
                                <option value="current">Current</option>
                                <option value="root">Branch family</option>
                                <option value="all">All chats</option>
                            </select>
                        </label>
                    `}
                    <button
                        class="icon-btn search-toggle"
                        onClick=${j?q:Y}
                        title=${j?"Close search":"Search"}
                    >
                        ${j?B`
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M18 6L6 18M6 6l12 12"/>
                            </svg>
                        `:B`
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <circle cx="11" cy="11" r="8"/>
                                <path d="M21 21l-4.35-4.35"/>
                            </svg>
                        `}
                    </button>
                    ${I0&&!j&&B`
                        <button
                            class="icon-btn location-btn"
                            onClick=${J}
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
                    ${m$&&!j&&B`
                        <button
                            class=${`icon-btn notification-btn${r$?" active":""}`}
                            onClick=${o}
                            title=${l0}
                            type="button"
                        >
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M18 8a6 6 0 1 0-12 0c0 7-3 9-3 9h18s-3-2-3-9" />
                                <path d="M13.73 21a2 2 0 0 1-3.46 0" />
                            </svg>
                        </button>
                    `}
                    ${!j&&B`
                        ${$_&&i&&B`
                            <button
                                class="icon-btn attach-editor-btn"
                                onClick=${i}
                                title=${`Attach open file: ${$_}`}
                                type="button"
                                disabled=${L.includes($_)}
                            >
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"/><polyline points="13 2 13 9 20 9"/></svg>
                            </button>
                        `}
                        <label class="icon-btn" title="Attach file">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>
                            <input type="file" multiple hidden onChange=${U2} />
                        </label>
                    `}
                    ${(N_!=="connected"||!j)&&B`
                        <div class="compose-send-stack">
                            ${N_!=="connected"&&B`
                                <span class="compose-connection-status connection-status ${N_}" title=${N$}>
                                    ${t$}
                                </span>
                            `}
                            ${!j&&B`
                                <button 
                                    class="icon-btn send-btn" 
                                    type="button"
                                    onClick=${()=>{P$()}}
                                    disabled=${!Y0}
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
    `}var w4="piclaw_theme",y1="piclaw_tint",L8="piclaw_chat_themes",o2={bgPrimary:"#ffffff",bgSecondary:"#f7f9fa",bgHover:"#e8ebed",textPrimary:"#0f1419",textSecondary:"#536471",borderColor:"#eff3f4",accent:"#1d9bf0",accentHover:"#1a8cd8",danger:"#f4212e",success:"#00ba7c"},Q8={bgPrimary:"#000000",bgSecondary:"#16181c",bgHover:"#1d1f23",textPrimary:"#e7e9ea",textSecondary:"#71767b",borderColor:"#2f3336",accent:"#1d9bf0",accentHover:"#1a8cd8",danger:"#f4212e",success:"#00ba7c"},X8={default:{label:"Default",mode:"auto",light:o2,dark:Q8},tango:{label:"Tango",mode:"light",light:{bgPrimary:"#f6f5f4",bgSecondary:"#efedeb",bgHover:"#e5e3e1",textPrimary:"#2e3436",textSecondary:"#5c6466",borderColor:"#d3d7cf",accent:"#3465a4",accentHover:"#2c5890",danger:"#cc0000",success:"#4e9a06"}},xterm:{label:"XTerm",mode:"dark",dark:{bgPrimary:"#000000",bgSecondary:"#0a0a0a",bgHover:"#121212",textPrimary:"#d0d0d0",textSecondary:"#8a8a8a",borderColor:"#1f1f1f",accent:"#00a2ff",accentHover:"#0086d1",danger:"#ff5f5f",success:"#5fff87"}},monokai:{label:"Monokai",mode:"dark",dark:{bgPrimary:"#272822",bgSecondary:"#2f2f2f",bgHover:"#3a3a3a",textPrimary:"#f8f8f2",textSecondary:"#cfcfc2",borderColor:"#3e3d32",accent:"#f92672",accentHover:"#e81560",danger:"#f92672",success:"#a6e22e"}},"monokai-pro":{label:"Monokai Pro",mode:"dark",dark:{bgPrimary:"#2d2a2e",bgSecondary:"#363237",bgHover:"#403a40",textPrimary:"#fcfcfa",textSecondary:"#c1c0c0",borderColor:"#444046",accent:"#ff6188",accentHover:"#f74f7e",danger:"#ff4f5e",success:"#a9dc76"}},ristretto:{label:"Ristretto",mode:"dark",dark:{bgPrimary:"#2c2525",bgSecondary:"#362d2d",bgHover:"#403535",textPrimary:"#f4f1ef",textSecondary:"#cbbdb8",borderColor:"#4a3c3c",accent:"#ff9f43",accentHover:"#f28a2e",danger:"#ff5f56",success:"#a9dc76"}},dracula:{label:"Dracula",mode:"dark",dark:{bgPrimary:"#282a36",bgSecondary:"#303445",bgHover:"#3a3f52",textPrimary:"#f8f8f2",textSecondary:"#c5c8d6",borderColor:"#44475a",accent:"#bd93f9",accentHover:"#a87ded",danger:"#ff5555",success:"#50fa7b"}},catppuccin:{label:"Catppuccin",mode:"dark",dark:{bgPrimary:"#1e1e2e",bgSecondary:"#24273a",bgHover:"#2c2f41",textPrimary:"#cdd6f4",textSecondary:"#a6adc8",borderColor:"#313244",accent:"#89b4fa",accentHover:"#74a0f5",danger:"#f38ba8",success:"#a6e3a1"}},nord:{label:"Nord",mode:"dark",dark:{bgPrimary:"#2e3440",bgSecondary:"#3b4252",bgHover:"#434c5e",textPrimary:"#eceff4",textSecondary:"#d8dee9",borderColor:"#4c566a",accent:"#88c0d0",accentHover:"#78a9c0",danger:"#bf616a",success:"#a3be8c"}},gruvbox:{label:"Gruvbox",mode:"dark",dark:{bgPrimary:"#282828",bgSecondary:"#32302f",bgHover:"#3c3836",textPrimary:"#ebdbb2",textSecondary:"#bdae93",borderColor:"#3c3836",accent:"#d79921",accentHover:"#c28515",danger:"#fb4934",success:"#b8bb26"}},solarized:{label:"Solarized",mode:"auto",light:{bgPrimary:"#fdf6e3",bgSecondary:"#f5efdc",bgHover:"#eee8d5",textPrimary:"#586e75",textSecondary:"#657b83",borderColor:"#e0d8c6",accent:"#268bd2",accentHover:"#1f78b3",danger:"#dc322f",success:"#859900"},dark:{bgPrimary:"#002b36",bgSecondary:"#073642",bgHover:"#0b3c4a",textPrimary:"#eee8d5",textSecondary:"#93a1a1",borderColor:"#18424a",accent:"#268bd2",accentHover:"#1f78b3",danger:"#dc322f",success:"#859900"}},tokyo:{label:"Tokyo",mode:"dark",dark:{bgPrimary:"#1a1b26",bgSecondary:"#24283b",bgHover:"#2f3549",textPrimary:"#c0caf5",textSecondary:"#9aa5ce",borderColor:"#414868",accent:"#7aa2f7",accentHover:"#6b92e6",danger:"#f7768e",success:"#9ece6a"}},miasma:{label:"Miasma",mode:"dark",dark:{bgPrimary:"#1f1f23",bgSecondary:"#29292f",bgHover:"#33333a",textPrimary:"#e5e5e5",textSecondary:"#b4b4b4",borderColor:"#3d3d45",accent:"#c9739c",accentHover:"#b8618c",danger:"#e06c75",success:"#98c379"}},github:{label:"GitHub",mode:"auto",light:{bgPrimary:"#ffffff",bgSecondary:"#f6f8fa",bgHover:"#eaeef2",textPrimary:"#24292f",textSecondary:"#57606a",borderColor:"#d0d7de",accent:"#0969da",accentHover:"#0550ae",danger:"#cf222e",success:"#1a7f37"},dark:{bgPrimary:"#0d1117",bgSecondary:"#161b22",bgHover:"#21262d",textPrimary:"#c9d1d9",textSecondary:"#8b949e",borderColor:"#30363d",accent:"#2f81f7",accentHover:"#1f6feb",danger:"#f85149",success:"#3fb950"}},gotham:{label:"Gotham",mode:"dark",dark:{bgPrimary:"#0b0f14",bgSecondary:"#111720",bgHover:"#18212b",textPrimary:"#cbd6e2",textSecondary:"#9bb0c3",borderColor:"#1f2a37",accent:"#5ccfe6",accentHover:"#48b8ce",danger:"#d26937",success:"#2aa889"}}},u5=["--bg-primary","--bg-secondary","--bg-hover","--text-primary","--text-secondary","--border-color","--accent-color","--accent-hover","--accent-contrast-text","--accent-soft","--accent-soft-strong","--danger-color","--success-color","--search-highlight-color"],z2={theme:"default",tint:null},B8="light",k4=!1;function E1(_){let $=String(_||"").trim().toLowerCase();if(!$)return"default";if($==="solarized-dark"||$==="solarized-light")return"solarized";if($==="github-dark"||$==="github-light")return"github";if($==="tokyo-night")return"tokyo";return $}function P2(_){if(!_)return null;let $=String(_).trim();if(!$)return null;let j=$.startsWith("#")?$.slice(1):$;if(!/^[0-9a-fA-F]{3}$/.test(j)&&!/^[0-9a-fA-F]{6}$/.test(j))return null;let Z=j.length===3?j.split("").map((G)=>G+G).join(""):j,N=parseInt(Z,16);return{r:N>>16&255,g:N>>8&255,b:N&255,hex:`#${Z.toLowerCase()}`}}function m5(_){if(!_||typeof document>"u")return null;let $=String(_).trim();if(!$)return null;let j=document.createElement("div");if(j.style.color="",j.style.color=$,!j.style.color)return null;let Z=j.style.color;try{if(document.body)j.style.display="none",document.body.appendChild(j),Z=getComputedStyle(j).color||j.style.color,document.body.removeChild(j)}catch{}let N=Z.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/i);if(!N)return null;let G=parseInt(N[1],10),Y=parseInt(N[2],10),q=parseInt(N[3],10);if(![G,Y,q].every((X)=>Number.isFinite(X)))return null;let L=`#${[G,Y,q].map((X)=>X.toString(16).padStart(2,"0")).join("")}`;return{r:G,g:Y,b:q,hex:L}}function U8(_){return P2(_)||m5(_)}function d2(_,$,j){let Z=Math.round(_.r+($.r-_.r)*j),N=Math.round(_.g+($.g-_.g)*j),G=Math.round(_.b+($.b-_.b)*j);return`rgb(${Z} ${N} ${G})`}function A4(_,$){return`rgba(${_.r}, ${_.g}, ${_.b}, ${$})`}function g5(_){let $=_.r/255,j=_.g/255,Z=_.b/255,N=$<=0.03928?$/12.92:Math.pow(($+0.055)/1.055,2.4),G=j<=0.03928?j/12.92:Math.pow((j+0.055)/1.055,2.4),Y=Z<=0.03928?Z/12.92:Math.pow((Z+0.055)/1.055,2.4);return 0.2126*N+0.7152*G+0.0722*Y}function p5(_){return g5(_)>0.4?"#000000":"#ffffff"}function O8(){if(typeof window>"u")return"light";try{return window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}catch{return"light"}}function P4(_){return X8[_]||X8.default}function c5(_){return _.mode==="auto"?O8():_.mode}function F8(_,$){let j=P4(_);if($==="dark"&&j.dark)return j.dark;if($==="light"&&j.light)return j.light;return j.dark||j.light||o2}function H8(_,$,j){let Z=U8($);if(!Z)return _;let N=P2(_.bgPrimary),G=P2(_.bgSecondary),Y=P2(_.bgHover),q=P2(_.borderColor);if(!N||!G||!Y||!q)return _;let X=P2(j==="dark"?"#ffffff":"#000000");return{..._,bgPrimary:d2(N,Z,0.08),bgSecondary:d2(G,Z,0.12),bgHover:d2(Y,Z,0.16),borderColor:d2(q,Z,0.08),accent:Z.hex,accentHover:X?d2(Z,X,0.18):Z.hex}}function h5(_,$){if(typeof document>"u")return;let j=document.documentElement,Z=_.accent,N=U8(Z),G=N?A4(N,$==="dark"?0.35:0.2):_.searchHighlight||_.searchHighlightColor,Y=N?A4(N,$==="dark"?0.16:0.12):"rgba(29, 155, 240, 0.12)",q=N?A4(N,$==="dark"?0.28:0.2):"rgba(29, 155, 240, 0.2)",L=N?p5(N):$==="dark"?"#000000":"#ffffff",X={"--bg-primary":_.bgPrimary,"--bg-secondary":_.bgSecondary,"--bg-hover":_.bgHover,"--text-primary":_.textPrimary,"--text-secondary":_.textSecondary,"--border-color":_.borderColor,"--accent-color":Z,"--accent-hover":_.accentHover||Z,"--accent-soft":Y,"--accent-soft-strong":q,"--accent-contrast-text":L,"--danger-color":_.danger||o2.danger,"--success-color":_.success||o2.success,"--search-highlight-color":G||"rgba(29, 155, 240, 0.2)"};Object.entries(X).forEach(([Q,V])=>{if(V)j.style.setProperty(Q,V)})}function i5(){if(typeof document>"u")return;let _=document.documentElement;u5.forEach(($)=>_.style.removeProperty($))}function w2(_,$={}){if(typeof document>"u")return null;let j=typeof $.id==="string"&&$.id.trim()?$.id.trim():null,Z=j?document.getElementById(j):document.querySelector(`meta[name="${_}"]`);if(!Z)Z=document.createElement("meta"),document.head.appendChild(Z);if(Z.setAttribute("name",_),j)Z.setAttribute("id",j);return Z}function V8(_){let $=E1(z2?.theme||"default"),j=z2?.tint?String(z2.tint).trim():null,Z=F8($,_);if($==="default"&&j)Z=H8(Z,j,_);if(Z?.bgPrimary)return Z.bgPrimary;return _==="dark"?Q8.bgPrimary:o2.bgPrimary}function l5(_,$){if(typeof document>"u")return;let j=w2("theme-color",{id:"dynamic-theme-color"});if(j&&_)j.removeAttribute("media"),j.setAttribute("content",_);let Z=w2("theme-color",{id:"theme-color-light"});if(Z)Z.setAttribute("media","(prefers-color-scheme: light)"),Z.setAttribute("content",V8("light"));let N=w2("theme-color",{id:"theme-color-dark"});if(N)N.setAttribute("media","(prefers-color-scheme: dark)"),N.setAttribute("content",V8("dark"));let G=w2("msapplication-TileColor");if(G&&_)G.setAttribute("content",_);let Y=w2("msapplication-navbutton-color");if(Y&&_)Y.setAttribute("content",_);let q=w2("apple-mobile-web-app-status-bar-style");if(q)q.setAttribute("content",$==="dark"?"black-translucent":"default")}function n5(){if(typeof window>"u")return;let _={...z2,mode:B8};window.dispatchEvent(new CustomEvent("piclaw-theme-change",{detail:_}))}function D8(){try{let _=t0(L8);if(!_)return{};let $=JSON.parse(_);return typeof $==="object"&&$!==null?$:{}}catch{return{}}}function d5(_,$,j){let Z=D8();if(!$&&!j)delete Z[_];else Z[_]={theme:$||"default",tint:j||null};l_(L8,JSON.stringify(Z))}function o5(_){if(!_)return null;return D8()[_]||null}function J8(){if(typeof window>"u")return"web:default";try{let $=new URL(window.location.href).searchParams.get("chat_jid");return $&&$.trim()?$.trim():"web:default"}catch{return"web:default"}}function I4(_,$={}){if(typeof window>"u"||typeof document>"u")return;let j=E1(_?.theme||"default"),Z=_?.tint?String(_.tint).trim():null,N=P4(j),G=c5(N),Y=F8(j,G);z2={theme:j,tint:Z},B8=G;let q=document.documentElement;q.dataset.theme=G,q.dataset.colorTheme=j,q.dataset.tint=Z?String(Z):"",q.style.colorScheme=G;let L=Y;if(j==="default"&&Z)L=H8(Y,Z,G);if(j==="default"&&!Z)i5();else h5(L,G);if(l5(L.bgPrimary,G),n5(),$.persist!==!1)if(l_(w4,j),Z)l_(y1,Z);else l_(y1,"")}function J1(){if(P4(z2.theme).mode!=="auto")return;I4(z2,{persist:!1})}function y8(){if(typeof window>"u")return()=>{};let _=J8(),$=o5(_),j=$?E1($.theme||"default"):E1(t0(w4)||"default"),Z=$?$.tint?String($.tint).trim():null:(()=>{let N=t0(y1);return N?N.trim():null})();if(I4({theme:j,tint:Z},{persist:!1}),window.matchMedia&&!k4){let N=window.matchMedia("(prefers-color-scheme: dark)");if(N.addEventListener)N.addEventListener("change",J1);else if(N.addListener)N.addListener(J1);return k4=!0,()=>{if(N.removeEventListener)N.removeEventListener("change",J1);else if(N.removeListener)N.removeListener(J1);k4=!1}}return()=>{}}function E8(_){if(!_||typeof _!=="object")return;let $=_.chat_jid||_.chatJid||J8(),j=_.theme??_.name??_.colorTheme,Z=_.tint??null;if(d5($,j||"default",Z),I4({theme:j||"default",tint:Z},{persist:!1}),!$||$==="web:default")l_(w4,j||"default"),l_(y1,Z||"")}function k8(){if(typeof document>"u")return"light";let _=document.documentElement?.dataset?.theme;if(_==="dark"||_==="light")return _;return O8()}var k1=/#(\w+)/g,s5=new Set(["strong","em","b","i","u","s","br","p","ul","ol","li","blockquote","ruby","rt","rp","span"]),r5=new Set(["a","abbr","blockquote","br","code","div","em","hr","h1","h2","h3","h4","h5","h6","i","img","kbd","li","mark","ol","p","pre","ruby","rt","rp","s","span","strong","sub","sup","table","tbody","td","th","thead","tr","u","ul","math","semantics","mrow","mi","mn","mo","mtext","mspace","msup","msub","msubsup","mfrac","msqrt","mroot","mtable","mtr","mtd","annotation"]),a5=new Set(["class","style","title","role","aria-hidden","aria-label","aria-expanded","aria-live","data-mermaid","data-hashtag"]),t5={a:new Set(["href","target","rel"]),img:new Set(["src","alt","title"])},e5=new Set(["http:","https:","mailto:",""]);function x4(_){return String(_||"").replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/'/g,"&#39;")}function K2(_,$={}){if(!_)return null;let j=String(_).trim();if(!j)return null;if(j.startsWith("#")||j.startsWith("/"))return j;if(j.startsWith("data:")){if($.allowDataImage&&/^data:image\//i.test(j))return j;return null}if(j.startsWith("blob:"))return j;try{let Z=new URL(j,typeof window<"u"?window.location.origin:"http://localhost");if(!e5.has(Z.protocol))return null;return Z.href}catch{return null}}function A8(_,$={}){if(!_)return"";let j=new DOMParser().parseFromString(_,"text/html"),Z=[],N=j.createTreeWalker(j.body,NodeFilter.SHOW_ELEMENT),G;while(G=N.nextNode())Z.push(G);for(let Y of Z){let q=Y.tagName.toLowerCase();if(!r5.has(q)){let X=Y.parentNode;if(!X)continue;while(Y.firstChild)X.insertBefore(Y.firstChild,Y);X.removeChild(Y);continue}let L=t5[q]||new Set;for(let X of Array.from(Y.attributes)){let Q=X.name.toLowerCase(),V=X.value;if(Q.startsWith("on")){Y.removeAttribute(X.name);continue}if(Q.startsWith("data-")||Q.startsWith("aria-"))continue;if(L.has(Q)||a5.has(Q)){if(Q==="href"){let H=K2(V);if(!H)Y.removeAttribute(X.name);else if(Y.setAttribute(X.name,H),q==="a"&&!Y.getAttribute("rel"))Y.setAttribute("rel","noopener noreferrer")}else if(Q==="src"){let H=q==="img"&&typeof $.rewriteImageSrc==="function"?$.rewriteImageSrc(V):V,P=K2(H,{allowDataImage:q==="img"});if(!P)Y.removeAttribute(X.name);else Y.setAttribute(X.name,P)}continue}Y.removeAttribute(X.name)}}return j.body.innerHTML}function w8(_){if(!_)return _;let $=_.replace(/</g,"&lt;").replace(/>/g,"&gt;");return new DOMParser().parseFromString($,"text/html").documentElement.textContent}function A1(_,$=2){if(!_)return _;let j=_;for(let Z=0;Z<$;Z+=1){let N=w8(j);if(N===j)break;j=N}return j}function _7(_){if(!_)return{text:"",blocks:[]};let j=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),Z=[],N=[],G=!1,Y=[];for(let q of j){if(!G&&q.trim().match(/^```mermaid\s*$/i)){G=!0,Y=[];continue}if(G&&q.trim().match(/^```\s*$/)){let L=Z.length;Z.push(Y.join(`
`)),N.push(`@@MERMAID_BLOCK_${L}@@`),G=!1,Y=[];continue}if(G)Y.push(q);else N.push(q)}if(G)N.push("```mermaid"),N.push(...Y);return{text:N.join(`
`),blocks:Z}}function $7(_){if(!_)return _;return A1(_,5)}function j7(_){let $=new TextEncoder().encode(String(_||"")),j="";for(let Z of $)j+=String.fromCharCode(Z);return btoa(j)}function Z7(_){let $=atob(String(_||"")),j=new Uint8Array($.length);for(let Z=0;Z<$.length;Z+=1)j[Z]=$.charCodeAt(Z);return new TextDecoder().decode(j)}function N7(_,$){if(!_||!$||$.length===0)return _;return _.replace(/@@MERMAID_BLOCK_(\d+)@@/g,(j,Z)=>{let N=Number(Z),G=$[N]??"",Y=$7(G);return`<div class="mermaid-container" data-mermaid="${j7(Y)}"><div class="mermaid-loading">Loading diagram...</div></div>`})}function P8(_){if(!_)return _;return _.replace(/<code>([\s\S]*?)<\/code>/gi,($,j)=>{if(j.includes(`
`))return`
\`\`\`
${j}
\`\`\`
`;return`\`${j}\``})}var G7={span:new Set(["title","class","lang","dir"])};function Y7(_,$){let j=G7[_];if(!j||!$)return"";let Z=[],N=/([a-zA-Z_:][\w:.-]*)(?:\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s"'`=<>]+)))?/g,G;while(G=N.exec($)){let Y=(G[1]||"").toLowerCase();if(!Y||Y.startsWith("on")||!j.has(Y))continue;let q=G[2]??G[3]??G[4]??"";Z.push(` ${Y}="${x4(q)}"`)}return Z.join("")}function I8(_){if(!_)return _;return _.replace(/&lt;([\s\S]*?)&gt;/g,($,j)=>{let Z=j.trim(),N=Z.startsWith("/"),G=N?Z.slice(1).trim():Z,q=G.endsWith("/")?G.slice(0,-1).trim():G,[L=""]=q.split(/\s+/,1),X=L.toLowerCase();if(!X||!s5.has(X))return $;if(X==="br")return N?"":"<br>";if(N)return`</${X}>`;let Q=q.slice(L.length).trim(),V=Y7(X,Q);return`<${X}${V}>`})}function x8(_){if(!_)return _;let $=(j)=>j.replace(/&amp;lt;/g,"&lt;").replace(/&amp;gt;/g,"&gt;").replace(/&amp;quot;/g,"&quot;").replace(/&amp;#39;/g,"&#39;").replace(/&amp;amp;/g,"&amp;");return _.replace(/<pre><code>([\s\S]*?)<\/code><\/pre>/g,(j,Z)=>`<pre><code>${$(Z)}</code></pre>`).replace(/<code>([\s\S]*?)<\/code>/g,(j,Z)=>`<code>${$(Z)}</code>`)}function M8(_){if(!_)return _;let $=new DOMParser().parseFromString(_,"text/html"),j=$.createTreeWalker($.body,NodeFilter.SHOW_TEXT),Z=(G)=>G.replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&quot;/g,'"').replace(/&#39;/g,"'").replace(/&amp;/g,"&"),N;while(N=j.nextNode()){if(!N.nodeValue)continue;let G=Z(N.nodeValue);if(G!==N.nodeValue)N.nodeValue=G}return $.body.innerHTML}function z7(_){if(!window.katex)return _;let $=(Y)=>w8(Y).replace(/&gt;/g,">").replace(/&lt;/g,"<").replace(/&amp;/g,"&").replace(/<br\s*\/?\s*>/gi,`
`),j=(Y)=>{let q=[],L=Y.replace(/<pre\b[^>]*>\s*<code\b[^>]*>[\s\S]*?<\/code>\s*<\/pre>/gi,(X)=>{let Q=q.length;return q.push(X),`@@CODE_BLOCK_${Q}@@`});return L=L.replace(/<code\b[^>]*>[\s\S]*?<\/code>/gi,(X)=>{let Q=q.length;return q.push(X),`@@CODE_INLINE_${Q}@@`}),{html:L,blocks:q}},Z=(Y,q)=>{if(!q.length)return Y;return Y.replace(/@@CODE_(?:BLOCK|INLINE)_(\d+)@@/g,(L,X)=>{let Q=Number(X);return q[Q]??""})},N=j(_),G=N.html;return G=G.replace(/(^|\n|<br\s*\/?\s*>|<p>|<\/p>)\s*\$\$([\s\S]+?)\$\$\s*(?=\n|<br\s*\/?\s*>|<\/p>|$)/gi,(Y,q,L)=>{try{let X=katex.renderToString($(L.trim()),{displayMode:!0,throwOnError:!1});return`${q}${X}`}catch(X){return`<span class="math-error" title="${x4(X.message)}">${Y}</span>`}}),G=G.replace(/(^|[^\\$])\$(?!\s)([^\n$]+?)\$/g,(Y,q,L)=>{if(/\s$/.test(L))return Y;try{let X=katex.renderToString($(L),{displayMode:!1,throwOnError:!1});return`${q}${X}`}catch(X){return`${q}<span class="math-error" title="${x4(X.message)}">$${L}$</span>`}}),Z(G,N.blocks)}function K7(_){if(!_)return _;let $=new DOMParser().parseFromString(_,"text/html"),j=$.createTreeWalker($.body,NodeFilter.SHOW_TEXT),Z=[],N;while(N=j.nextNode())Z.push(N);for(let G of Z){let Y=G.nodeValue;if(!Y)continue;if(k1.lastIndex=0,!k1.test(Y))continue;k1.lastIndex=0;let q=G.parentElement;if(q&&(q.closest("a")||q.closest("code")||q.closest("pre")))continue;let L=Y.split(k1);if(L.length<=1)continue;let X=$.createDocumentFragment();L.forEach((Q,V)=>{if(V%2===1){let H=$.createElement("a");H.setAttribute("href","#"),H.className="hashtag",H.setAttribute("data-hashtag",Q),H.textContent=`#${Q}`,X.appendChild(H)}else X.appendChild($.createTextNode(Q))}),G.parentNode?.replaceChild(X,G)}return $.body.innerHTML}function W7(_){if(!_)return _;let j=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),Z=[],N=!1;for(let G of j){if(!N&&G.trim().match(/^```(?:math|katex|latex)\s*$/i)){N=!0,Z.push("$$");continue}if(N&&G.trim().match(/^```\s*$/)){N=!1,Z.push("$$");continue}Z.push(G)}return Z.join(`
`)}function e0(_,$,j={}){if(!_)return"";let Z=W7(_),{text:N,blocks:G}=_7(Z),Y=A1(N,2),L=P8(Y).replace(/</g,"&lt;").replace(/>/g,"&gt;"),X=I8(L),Q=window.marked?marked.parse(X,{headerIds:!1,mangle:!1}):X.replace(/\n/g,"<br>");return Q=x8(Q),Q=M8(Q),Q=z7(Q),Q=K7(Q),Q=N7(Q,G),Q=A8(Q,j),Q}function w1(_){if(!_)return"";let $=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`),j=A1($,2),N=P8(j).replace(/</g,"&lt;").replace(/>/g,"&gt;"),G=I8(N),Y=window.marked?marked.parse(G):G.replace(/\n/g,"<br>");return Y=x8(Y),Y=M8(Y),Y=A8(Y),Y}function q7(_,$=6){return _.replace(/<polyline\b([^>]*)\bpoints="([^"]+)"([^>]*)\/?\s*>/g,(j,Z,N,G)=>{let Y=N.trim().split(/\s+/).map((L)=>{let[X,Q]=L.split(",").map(Number);return{x:X,y:Q}});if(Y.length<3)return`<polyline${Z}points="${N}"${G}/>`;let q=[`M ${Y[0].x},${Y[0].y}`];for(let L=1;L<Y.length-1;L++){let X=Y[L-1],Q=Y[L],V=Y[L+1],H=Q.x-X.x,P=Q.y-X.y,T=V.x-Q.x,g=V.y-Q.y,f=Math.sqrt(H*H+P*P),w=Math.sqrt(T*T+g*g),M=Math.min($,f/2,w/2);if(M<0.5){q.push(`L ${Q.x},${Q.y}`);continue}let c=Q.x-H/f*M,y=Q.y-P/f*M,S=Q.x+T/w*M,o=Q.y+g/w*M,n=H*g-P*T>0?1:0;q.push(`L ${c},${y}`),q.push(`A ${M},${M} 0 0 ${n} ${S},${o}`)}return q.push(`L ${Y[Y.length-1].x},${Y[Y.length-1].y}`),`<path${Z}d="${q.join(" ")}"${G}/>`})}async function v$(_){if(!window.beautifulMermaid)return;let{renderMermaid:$,THEMES:j}=window.beautifulMermaid,N=k8()==="dark"?j["tokyo-night"]:j["github-light"],G=_.querySelectorAll(".mermaid-container[data-mermaid]");for(let Y of G)try{let q=Y.dataset.mermaid,L=Z7(q||""),X=A1(L,2),Q=await $(X,{...N,transparent:!0});Q=q7(Q),Y.innerHTML=Q,Y.removeAttribute("data-mermaid")}catch(q){console.error("Mermaid render error:",q);let L=document.createElement("pre");L.className="mermaid-error",L.textContent=`Diagram error: ${q.message}`,Y.innerHTML="",Y.appendChild(L),Y.removeAttribute("data-mermaid")}}function b8(_){let $=String(_||"").trim();if(!$.startsWith("/btw"))return null;let j=$.slice(4).trim();if(!j)return{type:"help"};if(j==="clear"||j==="close")return{type:"clear"};return{type:"ask",question:j}}function C8(_){return String(_||"").trim()||"web:default"}function T8(_){if(!_)return!1;let $=String(_.answer||"").trim();return _.status!=="running"&&Boolean($)}function f8(_){if(!_)return!1;return _.status!=="running"}function S8(_){let $=String(_?.question||"").trim(),j=String(_?.answer||"").trim();if(!$&&!j)return"";return["BTW side conversation",$?`Question: ${$}`:null,j?`Answer:
${j}`:null].filter(Boolean).join(`

`)}function R8({session:_,onClose:$,onInject:j,onRetry:Z}){let N=k(null),G=k(null),Y=_?.thinking?w1(_.thinking):"",q=_?.answer?e0(_.answer,null,{sanitize:!1}):"";if(u(()=>{if(N.current&&Y)v$(N.current).catch(()=>{})},[Y]),u(()=>{if(G.current&&q)v$(G.current).catch(()=>{})},[q]),!_)return null;let L=_.status==="running",X=Boolean(String(_.answer||"").trim()),Q=Boolean(String(_.thinking||"").trim()),V=T8(_),H=f8(_),P=!L&&X,T=L?"Thinking…":_.status==="error"?"Error":"Done";return B`
        <section class="btw-panel" aria-label="BTW side conversation">
            <div class="btw-panel-header">
                <div class="btw-panel-title-wrap">
                    <span class="btw-panel-title">Question</span>
                    <span class=${`btw-panel-status btw-panel-status-${_.status||"idle"}`}>${T}</span>
                </div>
                <button class="btw-panel-close" onClick=${()=>$?.()} title="Close BTW" aria-label="Close BTW">
                    <svg viewBox="0 0 16 16" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round">
                        <line x1="4" y1="4" x2="12" y2="12"/>
                        <line x1="12" y1="4" x2="4" y2="12"/>
                    </svg>
                </button>
            </div>

            ${_.question&&B`<div class="btw-block btw-question">${_.question}</div>`}
            ${_.error&&B`<div class="btw-block btw-error">${_.error}</div>`}
            ${Q&&B`
                <details class="btw-block btw-thinking" open=${L?!0:void 0}>
                    <summary>Thinking</summary>
                    <div
                        class="btw-thinking-body post-content"
                        ref=${N}
                        dangerouslySetInnerHTML=${{__html:Y}}
                    ></div>
                </details>
            `}
            ${V&&B`
                <div class="btw-block btw-answer">
                    <div class="btw-answer-label">Answer</div>
                    <div
                        class="btw-answer-body post-content"
                        ref=${G}
                        dangerouslySetInnerHTML=${{__html:q}}
                    ></div>
                </div>
            `}

            ${H&&B`
                <div class="btw-panel-footer">
                    <div class="btw-panel-footer-left">
                        ${_.question&&B`
                            <button class="btw-btn btw-btn-secondary" onClick=${()=>Z?.()}>
                                Retry
                            </button>
                        `}
                    </div>
                    <div class="btw-panel-footer-right">
                        <button class="btw-btn btw-btn-primary" onClick=${()=>j?.()} disabled=${!P}>
                            Inject into chat
                        </button>
                    </div>
                </div>
            `}
        </section>
    `}function X7(_){let $=_?.artifact||{},j=$.kind||_?.kind||null;if(j!=="html"&&j!=="svg")return null;if(j==="html"){let N=typeof $.html==="string"?$.html:typeof _?.html==="string"?_.html:"";return N?{kind:j,html:N}:null}let Z=typeof $.svg==="string"?$.svg:typeof _?.svg==="string"?_.svg:"";return Z?{kind:j,svg:Z}:null}function V7(_){let $=_?.artifact&&typeof _.artifact==="object"?_.artifact:{},j=typeof $.svg==="string"?$.svg:typeof _?.svg==="string"?_.svg:"",Z=typeof $.html==="string"?$.html:typeof _?.html==="string"?_.html:typeof _?.w==="string"?_.w:typeof _?.content==="string"?_.content:"",G=($.kind||_?.kind||null)==="svg"||j?"svg":"html";if(G==="svg")return j?{kind:G,svg:j}:{kind:G};return Z?{kind:G,html:Z}:{kind:G}}function I2(_){return typeof _==="number"&&Number.isFinite(_)?_:null}function k_(_){return typeof _==="string"&&_.trim()?_.trim():null}function L7(_){return JSON.stringify(_).replace(/</g,"\\u003c").replace(/>/g,"\\u003e").replace(/&/g,"\\u0026").replace(/\u2028/g,"\\u2028").replace(/\u2029/g,"\\u2029")}function M4(_,$){if(!_||_.type!=="generated_widget")return null;let j=X7(_);if(!j)return null;return{title:_.title||_.name||"Generated widget",subtitle:typeof _.subtitle==="string"?_.subtitle:"",description:_.description||_.subtitle||"",originPostId:Number.isFinite($?.id)?$.id:null,originChatJid:typeof $?.chat_jid==="string"?$.chat_jid:null,widgetId:_.widget_id||_.id||null,artifact:j,source:"timeline",status:"final"}}function v8(_){if(!_||typeof _!=="object")return null;let $=V7(_),j=k_(_?.widget_id)||k_(_?.widgetId)||k_(_?.tool_call_id)||k_(_?.toolCallId),Z=k_(_?.tool_call_id)||k_(_?.toolCallId),N=k_(_?.turn_id)||k_(_?.turnId),G=k_(_?.title)||k_(_?.name)||"Generated widget",Y=k_(_?.subtitle)||"",q=k_(_?.description)||Y,L=k_(_?.status),X=L==="loading"||L==="streaming"||L==="final"||L==="error"?L:"streaming";return{title:G,subtitle:Y,description:q,originPostId:I2(_?.origin_post_id)??I2(_?.originPostId),originChatJid:k_(_?.origin_chat_jid)||k_(_?.originChatJid)||k_(_?.chat_jid)||null,widgetId:j,artifact:$,source:"live",status:X,turnId:N,toolCallId:Z,width:I2(_?.width),height:I2(_?.height),error:k_(_?.error)}}function u8(_){return M4(_,null)!==null}function V$(_){let $=k_(_?.toolCallId)||k_(_?.tool_call_id);if($)return $;let j=k_(_?.widgetId)||k_(_?.widget_id);if(j)return j;let Z=I2(_?.originPostId)??I2(_?.origin_post_id);if(Z!==null)return`post:${Z}`;return null}function m8(_){let j=(_?.artifact||{}).kind||_?.kind||null;return _?.source==="live"&&j==="html"}function g8(_){return m8(_)?"allow-downloads allow-scripts":"allow-downloads"}function b4(_){return{title:k_(_?.title)||"Generated widget",widgetId:k_(_?.widgetId)||k_(_?.widget_id),toolCallId:k_(_?.toolCallId)||k_(_?.tool_call_id),turnId:k_(_?.turnId)||k_(_?.turn_id),source:_?.source==="live"?"live":"timeline",status:k_(_?.status)||"final"}}function p8(_){let $=k_(_?.status);if($==="loading"||$==="streaming")return"Widget is loading…";if($==="error")return k_(_?.error)||"Widget failed to load.";return"Widget artifact is missing or unsupported."}function Q7(_){let $=b4(_);return`<script>
(function () {
  const meta = ${L7($)};
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

  window.piclawWidget = {
    meta,
    ready(payload) { post('widget.ready', payload); },
    close(payload) { post('widget.close', payload); },
    requestRefresh(payload) { post('widget.request_refresh', payload); },
    submit(payload) { post('widget.submit', payload); },
  };

  window.addEventListener('message', function (event) {
    const data = event && event.data;
    if (!data || data.__piclawGeneratedWidgetHost !== true) return;
    if ((data.widgetId || null) !== (meta.widgetId || null)) return;
    window.dispatchEvent(new CustomEvent('piclaw:widget-message', { detail: data }));
  });

  function announceReady() {
    post('widget.ready', { title: document.title || meta.title || 'Generated widget' });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', announceReady, { once: true });
  } else {
    announceReady();
  }
})();
</script>`}function c8(_){let $=_?.artifact||{},j=$.kind||_?.kind||null,Z=typeof $.html==="string"?$.html:typeof _?.html==="string"?_.html:"",N=typeof $.svg==="string"?$.svg:typeof _?.svg==="string"?_.svg:"",G=typeof _?.title==="string"&&_.title.trim()?_.title.trim():"Generated widget",Y=j==="svg"?N:Z;if(!Y)return"";let q=m8(_),L=["default-src 'none'","img-src data: blob: https: http:","style-src 'unsafe-inline'","font-src data: https: http:","media-src data: blob: https: http:","connect-src 'none'","frame-src 'none'",q?"script-src 'unsafe-inline'":"script-src 'none'","object-src 'none'","base-uri 'none'","form-action 'none'"].join("; "),X=j==="svg"?`<div class="widget-svg-shell">${Y}</div>`:Y,Q=q?Q7(_):"";return`<!doctype html>
<html>
<head>
<meta charset="utf-8" />
<meta http-equiv="Content-Security-Policy" content="${L}" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<title>${G.replace(/[<&>]/g,"")}</title>
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
${Q}
</head>
<body>${X}</body>
</html>`}function h8({widget:_,onClose:$,onWidgetEvent:j}){let Z=k(null);u(()=>{if(!_)return;let f=(w)=>{if(w.key==="Escape")$?.()};return document.addEventListener("keydown",f),()=>document.removeEventListener("keydown",f)},[_,$]),u(()=>{if(!_)return;let f=Z.current;if(!f)return;let w=()=>{try{f.contentWindow?.postMessage({__piclawGeneratedWidgetHost:!0,type:"widget.init",widgetId:_?.widgetId||null,toolCallId:_?.toolCallId||null,turnId:_?.turnId||null,payload:b4(_)},"*")}catch{}};return f.addEventListener("load",w),()=>f.removeEventListener("load",w)},[_]),u(()=>{if(!_)return;let f=(w)=>{let M=Z.current;if(!M?.contentWindow||w.source!==M.contentWindow)return;let c=w?.data;if(!c||c.__piclawGeneratedWidget!==!0)return;let y=V$({widgetId:c.widgetId,toolCallId:c.toolCallId}),S=V$(_);if(y&&S&&y!==S)return;j?.(c,_)};return window.addEventListener("message",f),()=>window.removeEventListener("message",f)},[_,j]);let N=S_(()=>c8(_),[_]);if(!_)return null;let Y=(_?.artifact||{}).kind||_?.kind||"html",q=typeof _?.title==="string"&&_.title.trim()?_.title.trim():"Generated widget",L=typeof _?.subtitle==="string"&&_.subtitle.trim()?_.subtitle.trim():"",X=_?.source==="live"?"live":"timeline",Q=typeof _?.status==="string"&&_.status.trim()?_.status.trim():"final",V=X==="live"?`Live widget • ${Q.toUpperCase()}`:_?.originPostId?`Message #${_.originPostId}`:"Timeline launch",H=typeof _?.description==="string"&&_.description.trim()?_.description.trim():"",P=!N,T=p8(_),g=g8(_);return B`
        <div class="floating-widget-backdrop" onClick=${()=>$?.()}>
            <section
                class="floating-widget-pane"
                aria-label=${q}
                onClick=${(f)=>f.stopPropagation()}
            >
                <div class="floating-widget-header">
                    <div class="floating-widget-heading">
                        <div class="floating-widget-eyebrow">${V} • ${Y.toUpperCase()}</div>
                        <div class="floating-widget-title">${q}</div>
                        ${(L||H)&&B`
                            <div class="floating-widget-subtitle">${L||H}</div>
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
                    ${P?B`<div class="floating-widget-empty">${T}</div>`:B`
                            <iframe
                                ref=${Z}
                                class="floating-widget-frame"
                                title=${q}
                                sandbox=${g}
                                referrerpolicy="no-referrer"
                                srcdoc=${N}
                            ></iframe>
                        `}
                </div>
            </section>
        </div>
    `}var i8="PiClaw";function C4(_,$,j=!1){let Z=_||"PiClaw",N=Z.charAt(0).toUpperCase(),G=["#FF6B6B","#4ECDC4","#45B7D1","#FFA07A","#98D8C8","#F7DC6F","#BB8FCE","#85C1E2","#F8B195","#6C5CE7","#00B894","#FDCB6E","#E17055","#74B9FF","#A29BFE","#FD79A8","#00CEC9","#FFEAA7","#DFE6E9","#FF7675","#55EFC4","#81ECEC","#FAB1A0","#74B9FF","#A29BFE","#FD79A8"],Y=N.charCodeAt(0)%G.length,q=G[Y],L=Z.trim().toLowerCase(),X=typeof $==="string"?$.trim():"",Q=X?X:null,V=j||L==="PiClaw".toLowerCase()||L==="pi";return{letter:N,color:q,image:Q||(V?"/static/icon-192.png":null)}}function l8(_,$){if(!_)return"PiClaw";let j=$[_]?.name||_;return j?j.charAt(0).toUpperCase()+j.slice(1):"PiClaw"}function n8(_,$){if(!_)return null;let j=$[_]||{};return j.avatar_url||j.avatarUrl||j.avatar||null}function d8(_){if(!_)return null;if(typeof document<"u"){let G=document.documentElement,Y=G?.dataset?.colorTheme||"",q=G?.dataset?.tint||"",L=getComputedStyle(G).getPropertyValue("--accent-color")?.trim();if(L&&(q||Y&&Y!=="default"))return L}let $=["#4ECDC4","#FF6B6B","#45B7D1","#BB8FCE","#FDCB6E","#00B894","#74B9FF","#FD79A8","#81ECEC","#FFA07A"],j=String(_),Z=0;for(let G=0;G<j.length;G+=1)Z=(Z*31+j.charCodeAt(G))%2147483647;let N=Math.abs(Z)%$.length;return $[N]}function B7(_){if(!_||typeof _!=="object")return null;let $=_.started_at??_.startedAt;if(typeof $!=="string"||!$)return null;let j=Date.parse($);return Number.isFinite(j)?j:null}function s2(_){if(!_||typeof _!=="object")return!1;let $=_.intent_key??_.intentKey;return _.type==="intent"&&$==="compaction"}function o8(_){if(!_||typeof _!=="object")return"";let $=_.title;if(typeof $==="string"&&$.trim())return $.trim();let j=_.status;if(typeof j==="string"&&j.trim())return j.trim();return s2(_)?"Compacting context":"Working..."}function U7(_){let $=Math.max(0,Math.floor(_/1000)),j=$%60,Z=Math.floor($/60)%60,N=Math.floor($/3600);if(N>0)return`${N}:${String(Z).padStart(2,"0")}:${String(j).padStart(2,"0")}`;return`${Z}:${String(j).padStart(2,"0")}`}function s8(_,$=Date.now()){let j=B7(_);if(j===null)return null;return U7(Math.max(0,$-j))}function r8({status:_,draft:$,plan:j,thought:Z,pendingRequest:N,intent:G,turnId:Y,steerQueued:q,onPanelToggle:L}){let V=(__)=>{if(!__)return{text:"",totalLines:0,fullText:""};if(typeof __==="string"){let x_=__,a_=x_?x_.replace(/\r\n/g,`
`).split(`
`).length:0;return{text:x_,totalLines:a_,fullText:x_}}let O_=__.text||"",j_=__.fullText||__.full_text||O_,F_=Number.isFinite(__.totalLines)?__.totalLines:j_?j_.replace(/\r\n/g,`
`).split(`
`).length:0;return{text:O_,totalLines:F_,fullText:j_}},H=160,P=(__)=>String(__||"").replace(/<\/?internal>/gi,""),T=(__)=>{if(!__)return 1;return Math.max(1,Math.ceil(__.length/160))},g=(__,O_,j_)=>{let F_=(__||"").replace(/\r\n/g,`
`).replace(/\r/g,`
`);if(!F_)return{text:"",omitted:0,totalLines:Number.isFinite(j_)?j_:0,visibleLines:0};let x_=F_.split(`
`),a_=x_.length>O_?x_.slice(0,O_).join(`
`):F_,p_=Number.isFinite(j_)?j_:x_.reduce((h_,A_)=>h_+T(A_),0),o_=a_?a_.split(`
`).reduce((h_,A_)=>h_+T(A_),0):0,c_=Math.max(p_-o_,0);return{text:a_,omitted:c_,totalLines:p_,visibleLines:o_}},f=V(j),w=V(Z),M=V($),c=Boolean(f.text)||f.totalLines>0,y=Boolean(w.text)||w.totalLines>0,S=Boolean(M.fullText?.trim()||M.text?.trim());if(!_&&!S&&!c&&!y&&!N&&!G)return null;let[o,a]=R(new Set),[n,$_]=R(()=>Date.now()),i=(__)=>a((O_)=>{let j_=new Set(O_),F_=!j_.has(__);if(F_)j_.add(__);else j_.delete(__);if(typeof L==="function")L(__,F_);return j_});u(()=>{a(new Set)},[Y]);let W_=s2(_);u(()=>{if(!W_)return;$_(Date.now());let __=setInterval(()=>$_(Date.now()),1000);return()=>clearInterval(__)},[W_,_?.started_at,_?.startedAt]);let d_=_?.turn_id||Y,g_=d8(d_),l=q?"turn-dot turn-dot-queued":"turn-dot",Z_=(__)=>__,t=Boolean(_?.last_activity||_?.lastActivity),q_=(__)=>__==="warning"?"#f59e0b":__==="error"?"var(--danger-color)":__==="success"?"var(--success-color)":g_,Y_=G?.kind||"info",X_=q_(Y_),Q_=q_(_?.kind||(W_?"warning":"info")),N_="",v_=_?.title,I_=_?.status;if(_?.type==="plan")N_=v_?`Planning: ${v_}`:"Planning...";else if(_?.type==="tool_call")N_=v_?`Running: ${v_}`:"Running tool...";else if(_?.type==="tool_status")N_=v_?`${v_}: ${I_||"Working..."}`:I_||"Working...";else if(_?.type==="error")N_=v_||"Agent error";else N_=v_||I_||"Working...";if(t)N_="Last activity just now";let J_=({panelTitle:__,text:O_,fullText:j_,totalLines:F_,maxLines:x_,titleClass:a_,panelKey:p_})=>{let o_=o.has(p_),c_=j_||O_||"",h_=p_==="thought"||p_==="draft"?P(c_):c_,A_=typeof x_==="number",E_=o_&&A_,u_=A_?g(h_,x_,F_):{text:h_||"",omitted:0,totalLines:Number.isFinite(F_)?F_:0};if(!h_&&!(Number.isFinite(u_.totalLines)&&u_.totalLines>0))return null;let W0=`agent-thinking-body${A_?" agent-thinking-body-collapsible":""}`,P0=A_?`--agent-thinking-collapsed-lines: ${x_};`:"";return B`
            <div
                class="agent-thinking"
                data-expanded=${o_?"true":"false"}
                data-collapsible=${A_?"true":"false"}
                style=${g_?`--turn-color: ${g_};`:""}
            >
                <div class="agent-thinking-title ${a_||""}">
                    ${g_&&B`<span class=${l} aria-hidden="true"></span>`}
                    ${__}
                    ${E_&&B`
                        <button
                            class="agent-thinking-close"
                            aria-label=${`Close ${__} panel`}
                            onClick=${()=>i(p_)}
                        >
                            ×
                        </button>
                    `}
                </div>
                <div
                    class=${W0}
                    style=${P0}
                    dangerouslySetInnerHTML=${{__html:w1(h_)}}
                />
                ${!o_&&u_.omitted>0&&B`
                    <button class="agent-thinking-truncation" onClick=${()=>i(p_)}>
                        ▸ ${u_.omitted} more lines
                    </button>
                `}
                ${o_&&u_.omitted>0&&B`
                    <button class="agent-thinking-truncation" onClick=${()=>i(p_)}>
                        ▴ show less
                    </button>
                `}
            </div>
        `},y_=N?.tool_call?.title,z0=y_?`Awaiting approval: ${y_}`:"Awaiting approval",K0=W_?s8(_,n):null,K_=(__,O_,j_=null)=>{let F_=o8(__);return B`
            <div
                class="agent-thinking agent-thinking-intent"
                aria-live="polite"
                style=${O_?`--turn-color: ${O_};`:""}
                title=${__?.detail||""}
            >
                <div class="agent-thinking-title intent">
                    ${O_&&B`<span class=${l} aria-hidden="true"></span>`}
                    <span class="agent-thinking-title-text">${F_}</span>
                    ${j_&&B`<span class="agent-status-elapsed">${j_}</span>`}
                </div>
                ${__.detail&&B`<div class="agent-thinking-body">${__.detail}</div>`}
            </div>
        `};return B`
        <div class="agent-status-panel">
            ${G&&K_(G,X_)}
            ${_?.type==="intent"&&K_(_,Q_,K0)}
            ${N&&B`
                <div class="agent-status agent-status-request" aria-live="polite" style=${g_?`--turn-color: ${g_};`:""}>
                    <span class=${l} aria-hidden="true"></span>
                    <div class="agent-status-spinner"></div>
                    <span class="agent-status-text">${z0}</span>
                </div>
            `}
            ${c&&J_({panelTitle:Z_("Planning"),text:f.text,fullText:f.fullText,totalLines:f.totalLines,panelKey:"plan"})}
            ${y&&J_({panelTitle:Z_("Thoughts"),text:w.text,fullText:w.fullText,totalLines:w.totalLines,maxLines:8,titleClass:"thought",panelKey:"thought"})}
            ${S&&J_({panelTitle:Z_("Draft"),text:M.text,fullText:M.fullText,totalLines:M.totalLines,maxLines:8,titleClass:"thought",panelKey:"draft"})}
            ${_&&_?.type!=="intent"&&B`
                <div class=${`agent-status${t?" agent-status-last-activity":""}${_?.type==="error"?" agent-status-error":""}`} aria-live="polite" style=${g_?`--turn-color: ${g_};`:""}>
                    ${g_&&B`<span class=${l} aria-hidden="true"></span>`}
                    ${_?.type==="error"?B`<span class="agent-status-error-icon" aria-hidden="true">⚠</span>`:!t&&B`<div class="agent-status-spinner"></div>`}
                    <span class="agent-status-text">${N_}</span>
                </div>
            `}
        </div>
    `}function a8({request:_,onRespond:$}){if(!_)return null;let{request_id:j,tool_call:Z,options:N,chat_jid:G}=_,Y=Z?.title||"Agent Request",q=Z?.kind||"other",L=Z?.rawInput||{},X=L.command||L.commands&&L.commands[0]||null,Q=L.diff||null,V=L.fileName||L.path||null,H=Z?.description||L.description||L.explanation||null,T=(Array.isArray(Z?.locations)?Z.locations:[]).map((c)=>c?.path).filter((c)=>Boolean(c)),g=Array.from(new Set([V,...T].filter(Boolean)));console.log("AgentRequestModal:",{request_id:j,tool_call:Z,options:N});let f=async(c)=>{try{await B1(j,c,G||null),$()}catch(y){console.error("Failed to respond to agent request:",y)}},w=async()=>{try{await X4(Y,`Auto-approved: ${Y}`),await B1(j,"approved",G||null),$()}catch(c){console.error("Failed to add to whitelist:",c)}},M=N&&N.length>0;return B`
        <div class="agent-request-modal">
            <div class="agent-request-content">
                <div class="agent-request-header">
                    <div class="agent-request-icon">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                        </svg>
                    </div>
                    <div class="agent-request-title">${Y}</div>
                </div>
                ${(H||X||Q||g.length>0)&&B`
                    <div class="agent-request-body">
                        ${H&&B`
                            <div class="agent-request-description">${H}</div>
                        `}
                        ${g.length>0&&B`
                            <div class="agent-request-files">
                                <div class="agent-request-subtitle">Files</div>
                                <ul>
                                    ${g.map((c,y)=>B`<li key=${y}>${c}</li>`)}
                                </ul>
                            </div>
                        `}
                        ${X&&B`
                            <pre class="agent-request-command">${X}</pre>
                        `}
                        ${Q&&B`
                            <details class="agent-request-diff">
                                <summary>Proposed diff</summary>
                                <pre>${Q}</pre>
                            </details>
                        `}
                    </div>
                `}
                <div class="agent-request-actions">
                    ${M?N.map((c)=>B`
                            <button 
                                key=${c.optionId||c.id||String(c)}
                                class="agent-request-btn ${c.kind==="allow_once"||c.kind==="allow_always"?"primary":""}"
                                onClick=${()=>f(c.optionId||c.id||c)}
                            >
                                ${c.name||c.label||c.optionId||c.id||String(c)}
                            </button>
                        `):B`
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
    `}function t8(_){let $=new Date(_);if(Number.isNaN($.getTime()))return _;let Z=new Date-$,N=Z/1000,G=86400000;if(Z<G){if(N<60)return"just now";if(N<3600)return`${Math.floor(N/60)}m`;return`${Math.floor(N/3600)}h`}if(Z<5*G){let L=$.toLocaleDateString(void 0,{weekday:"short"}),X=$.toLocaleTimeString(void 0,{hour:"2-digit",minute:"2-digit"});return`${L} ${X}`}let Y=$.toLocaleDateString(void 0,{month:"short",day:"numeric"}),q=$.toLocaleTimeString(void 0,{hour:"2-digit",minute:"2-digit"});return`${Y} ${q}`}function r2(_){if(!Number.isFinite(_))return"0";return Math.round(_).toLocaleString()}function L$(_){if(_<1024)return _+" B";if(_<1048576)return(_/1024).toFixed(1)+" KB";return(_/1048576).toFixed(1)+" MB"}function W2(_){let $=new Date(_);if(Number.isNaN($.getTime()))return _;return $.toLocaleString()}var O7=new Set(["application/json","application/xml","text/csv","text/html","text/markdown","text/plain","text/xml"]),F7=new Set(["text/markdown"]),H7=new Set(["application/msword","application/rtf","application/vnd.ms-excel","application/vnd.ms-powerpoint","application/vnd.oasis.opendocument.presentation","application/vnd.oasis.opendocument.spreadsheet","application/vnd.oasis.opendocument.text","application/vnd.openxmlformats-officedocument.presentationml.presentation","application/vnd.openxmlformats-officedocument.spreadsheetml.sheet","application/vnd.openxmlformats-officedocument.wordprocessingml.document"]),D7=new Set(["application/vnd.jgraph.mxfile"]);function a2(_){return typeof _==="string"?_.trim().toLowerCase():""}function J7(_){let $=a2(_);return!!$&&($.endsWith(".drawio")||$.endsWith(".drawio.xml")||$.endsWith(".drawio.svg")||$.endsWith(".drawio.png"))}function y7(_){let $=a2(_);return!!$&&$.endsWith(".pdf")}function E7(_){let $=a2(_);return!!$&&($.endsWith(".docx")||$.endsWith(".doc")||$.endsWith(".odt")||$.endsWith(".rtf")||$.endsWith(".xlsx")||$.endsWith(".xls")||$.endsWith(".ods")||$.endsWith(".pptx")||$.endsWith(".ppt")||$.endsWith(".odp"))}function t2(_,$){let j=a2(_);if(J7($)||D7.has(j))return"drawio";if(y7($)||j==="application/pdf")return"pdf";if(E7($)||H7.has(j))return"office";if(!j)return"unsupported";if(j.startsWith("image/"))return"image";if(O7.has(j)||j.startsWith("text/"))return"text";return"unsupported"}function e8(_){let $=a2(_);return F7.has($)}function _6(_){switch(_){case"image":return"Image preview";case"pdf":return"PDF preview";case"office":return"Office viewer";case"drawio":return"Draw.io preview (read-only)";case"text":return"Text preview";default:return"Preview unavailable"}}function k7(_){let j=String(_||"").trim().match(/^#([0-9a-f]{3}|[0-9a-f]{6})$/i);if(!j)return null;let Z=j[1].length===3?j[1].split("").map((N)=>`${N}${N}`).join(""):j[1];return{r:parseInt(Z.slice(0,2),16),g:parseInt(Z.slice(2,4),16),b:parseInt(Z.slice(4,6),16)}}function A7(_){let j=String(_||"").trim().match(/^rgba?\((\d+)[,\s]+(\d+)[,\s]+(\d+)/i);if(!j)return null;let Z=Number(j[1]),N=Number(j[2]),G=Number(j[3]);if(![Z,N,G].every((Y)=>Number.isFinite(Y)))return null;return{r:Z,g:N,b:G}}function $6(_){return k7(_)||A7(_)}function P1(_){let $=(G)=>{let Y=G/255;return Y<=0.03928?Y/12.92:((Y+0.055)/1.055)**2.4},j=$(_.r),Z=$(_.g),N=$(_.b);return 0.2126*j+0.7152*Z+0.0722*N}function w7(_,$){let j=Math.max(P1(_),P1($)),Z=Math.min(P1(_),P1($));return(j+0.05)/(Z+0.05)}function P7(_,$,j="#ffffff"){let Z=$6(_);if(!Z)return j;let N=j,G=-1;for(let Y of $){let q=$6(Y);if(!q)continue;let L=w7(Z,q);if(L>G)N=Y,G=L}return N}function T4(){let _=getComputedStyle(document.documentElement),$=(T,g)=>{for(let f of T){let w=_.getPropertyValue(f).trim();if(w)return w}return g},j=$(["--text-primary","--color-text"],"#0f1419"),Z=$(["--text-secondary","--color-text-muted"],"#536471"),N=$(["--bg-primary","--color-bg-primary"],"#ffffff"),G=$(["--bg-secondary","--color-bg-secondary"],"#f7f9fa"),Y=$(["--bg-hover","--bg-tertiary","--color-bg-tertiary"],"#e8ebed"),q=$(["--accent-color","--color-accent"],"#1d9bf0"),L=$(["--success-color","--color-success"],"#00ba7c"),X=$(["--warning-color","--color-warning","--accent-color"],"#f0b429"),Q=$(["--danger-color","--color-error"],"#f4212e"),V=$(["--border-color","--color-border"],"#eff3f4"),H=$(["--font-family"],"system-ui, sans-serif"),P=P7(q,[j,N],j);return{fg:j,fgMuted:Z,bgPrimary:N,bg:G,bgEmphasis:Y,accent:q,good:L,warning:X,attention:Q,border:V,fontFamily:H,buttonTextColor:P}}function j6(){let{fg:_,fgMuted:$,bg:j,bgEmphasis:Z,accent:N,good:G,warning:Y,attention:q,border:L,fontFamily:X}=T4();return{fontFamily:X,containerStyles:{default:{backgroundColor:j,foregroundColors:{default:{default:_,subtle:$},accent:{default:N,subtle:N},good:{default:G,subtle:G},warning:{default:Y,subtle:Y},attention:{default:q,subtle:q}}},emphasis:{backgroundColor:Z,foregroundColors:{default:{default:_,subtle:$},accent:{default:N,subtle:N},good:{default:G,subtle:G},warning:{default:Y,subtle:Y},attention:{default:q,subtle:q}}}},actions:{actionsOrientation:"horizontal",actionAlignment:"left",buttonSpacing:8,maxActions:5,showCard:{actionMode:"inline"},spacing:"default"},adaptiveCard:{allowCustomStyle:!1},spacing:{small:4,default:8,medium:12,large:16,extraLarge:24,padding:12},separator:{lineThickness:1,lineColor:L},fontSizes:{small:12,default:14,medium:16,large:18,extraLarge:22},fontWeights:{lighter:300,default:400,bolder:600},imageSizes:{small:40,medium:80,large:120},textBlock:{headingLevel:2}}}var I7=new Set(["1.0","1.1","1.2","1.3","1.4","1.5","1.6"]),Z6=!1,I1=null,N6=!1;function f4(_){_.querySelector(".adaptive-card-notice")?.remove()}function x7(_,$,j="error"){f4(_);let Z=document.createElement("div");Z.className=`adaptive-card-notice adaptive-card-notice-${j}`,Z.textContent=$,_.appendChild(Z)}function M7(_,$=(j)=>e0(j,null)){let j=typeof _==="string"?_:String(_??"");if(!j.trim())return{outputHtml:"",didProcess:!1};return{outputHtml:$(j),didProcess:!0}}function b7(_=($)=>e0($,null)){return($,j)=>{try{let Z=M7($,_);j.outputHtml=Z.outputHtml,j.didProcess=Z.didProcess}catch(Z){console.error("[adaptive-card] Failed to process markdown:",Z),j.outputHtml=String($??""),j.didProcess=!1}}}function C7(_){if(N6||!_?.AdaptiveCard)return;_.AdaptiveCard.onProcessMarkdown=b7(),N6=!0}async function T7(){if(Z6)return;if(I1)return I1;return I1=new Promise((_,$)=>{let j=document.createElement("script");j.src="/static/js/vendor/adaptivecards.min.js",j.onload=()=>{Z6=!0,_()},j.onerror=()=>$(Error("Failed to load adaptivecards SDK")),document.head.appendChild(j)}),I1}function f7(){return globalThis.AdaptiveCards}function S7(_){if(!_||typeof _!=="object")return!1;let $=_;return $.type==="adaptive_card"&&typeof $.card_id==="string"&&typeof $.schema_version==="string"&&typeof $.payload==="object"&&$.payload!==null}function R7(_){return I7.has(_)}function R4(_){if(!Array.isArray(_))return[];return _.filter(S7)}function v7(_){let $=(typeof _?.getJsonTypeName==="function"?_.getJsonTypeName():"")||_?.constructor?.name||"Unknown",j=(typeof _?.title==="string"?_.title:"")||"",Z=(typeof _?.url==="string"?_.url:"")||void 0,N=_?.data??void 0;return{type:$,title:j,data:N,url:Z,raw:_}}function S4(_){if(_==null)return"";if(typeof _==="string")return _.trim();if(typeof _==="number")return String(_);if(typeof _==="boolean")return _?"yes":"no";if(Array.isArray(_))return _.map(($)=>S4($)).filter(Boolean).join(", ");if(typeof _==="object")return Object.entries(_).map(([j,Z])=>`${j}: ${S4(Z)}`).filter((j)=>!j.endsWith(": ")).join(", ");return String(_).trim()}function u7(_,$,j){if($==null)return $;if(_==="Input.Toggle"){if(typeof $==="boolean"){if($)return j?.valueOn??"true";return j?.valueOff??"false"}return typeof $==="string"?$:String($)}if(_==="Input.ChoiceSet"){if(Array.isArray($))return $.join(",");return typeof $==="string"?$:String($)}if(Array.isArray($))return $.join(", ");if(typeof $==="object")return S4($);return typeof $==="string"?$:String($)}function m7(_,$){if(!_||typeof _!=="object")return _;if(!$||typeof $!=="object"||Array.isArray($))return _;let j=$,Z=(N)=>{if(Array.isArray(N))return N.map((q)=>Z(q));if(!N||typeof N!=="object")return N;let Y={...N};if(typeof Y.id==="string"&&Y.id in j&&String(Y.type||"").startsWith("Input."))Y.value=u7(Y.type,j[Y.id],Y);for(let[q,L]of Object.entries(Y))if(Array.isArray(L)||L&&typeof L==="object")Y[q]=Z(L);return Y};return Z(_)}function g7(_){_.classList.add("adaptive-card-readonly");for(let $ of Array.from(_.querySelectorAll("input, textarea, select, button"))){let j=$;try{j.setAttribute("aria-disabled","true")}catch{}try{j.setAttribute("tabindex","-1")}catch{}if("disabled"in j)try{j.disabled=!0}catch{}if("readOnly"in j)try{j.readOnly=!0}catch{}}}function p7(_){if(typeof _!=="string"||!_.trim())return"";let $=new Date(_);if(Number.isNaN($.getTime()))return"";return new Intl.DateTimeFormat(void 0,{month:"short",day:"numeric",hour:"numeric",minute:"2-digit"}).format($)}function c7(_){if(_.state==="active")return null;let $=_.state==="completed"?"Submitted":_.state==="cancelled"?"Cancelled":"Failed",j=_.last_submission&&typeof _.last_submission==="object"?_.last_submission:null,Z=j&&typeof j.title==="string"?j.title.trim():"",N=p7(_.completed_at||j?.submitted_at),G=[Z||null,N||null].filter(Boolean).join(" · ")||null;return{label:$,detail:G}}async function G6(_,$,j){if(!R7($.schema_version))return console.warn(`[adaptive-card] Unsupported schema version ${$.schema_version} for card ${$.card_id}`),!1;try{await T7()}catch(Z){return console.error("[adaptive-card] Failed to load SDK:",Z),!1}try{let Z=f7();C7(Z);let N=new Z.AdaptiveCard,G=T4();N.hostConfig=new Z.HostConfig(j6());let Y=$.last_submission&&typeof $.last_submission==="object"?$.last_submission.data:void 0,q=$.state==="active"?$.payload:m7($.payload,Y);N.parse(q),N.onExecuteAction=(Q)=>{let V=v7(Q);if(j?.onAction)f4(_),_.classList.add("adaptive-card-busy"),Promise.resolve(j.onAction(V)).catch((H)=>{console.error("[adaptive-card] Action failed:",H);let P=H instanceof Error?H.message:String(H||"Action failed.");x7(_,P||"Action failed.","error")}).finally(()=>{_.classList.remove("adaptive-card-busy")});else console.log("[adaptive-card] Action executed (not wired yet):",V)};let L=N.render();if(!L)return console.warn(`[adaptive-card] Card ${$.card_id} rendered to null`),!1;_.classList.add("adaptive-card-container"),_.style.setProperty("--adaptive-card-button-text-color",G.buttonTextColor);let X=c7($);if(X){_.classList.add("adaptive-card-finished");let Q=document.createElement("div");Q.className=`adaptive-card-status adaptive-card-status-${$.state}`;let V=document.createElement("span");if(V.className="adaptive-card-status-label",V.textContent=X.label,Q.appendChild(V),X.detail){let H=document.createElement("span");H.className="adaptive-card-status-detail",H.textContent=X.detail,Q.appendChild(H)}_.appendChild(Q)}if(f4(_),_.appendChild(L),X)g7(L);return!0}catch(Z){return console.error(`[adaptive-card] Failed to render card ${$.card_id}:`,Z),!1}}function e2(_){if(_==null)return"";if(typeof _==="string")return _.trim();if(typeof _==="number")return String(_);if(typeof _==="boolean")return _?"yes":"no";if(Array.isArray(_))return _.map(($)=>e2($)).filter(Boolean).join(", ");if(typeof _==="object")return Object.entries(_).filter(([$])=>!$.startsWith("__")).map(([$,j])=>`${$}: ${e2(j)}`).filter(($)=>!$.endsWith(": ")).join(", ");return String(_).trim()}function Y6(_){if(typeof _!=="object"||_==null||Array.isArray(_))return[];return Object.entries(_).filter(([$])=>!$.startsWith("__")).map(([$,j])=>({key:$,value:e2(j)})).filter(($)=>$.value)}function h7(_){if(!_||typeof _!=="object")return!1;let $=_;return $.type==="adaptive_card_submission"&&typeof $.card_id==="string"&&typeof $.source_post_id==="number"&&typeof $.submitted_at==="string"}function v4(_){if(!Array.isArray(_))return[];return _.filter(h7)}function z6(_){let $=String(_.title||_.card_id||"card").trim()||"card",j=_.data;if(j==null)return`Card submission: ${$}`;if(typeof j==="string"||typeof j==="number"||typeof j==="boolean"){let Z=e2(j);return Z?`Card submission: ${$} — ${Z}`:`Card submission: ${$}`}if(typeof j==="object"){let N=Y6(j).map(({key:G,value:Y})=>`${G}: ${Y}`);return N.length>0?`Card submission: ${$} — ${N.join(", ")}`:`Card submission: ${$}`}return`Card submission: ${$}`}function K6(_){let $=String(_.title||_.card_id||"Card submission").trim()||"Card submission",j=Y6(_.data),Z=j.length>0?j.slice(0,2).map(({key:G,value:Y})=>`${G}: ${Y}`).join(", "):e2(_.data)||null,N=j.length;return{title:$,summary:Z,fields:j,fieldCount:N,submittedAt:_.submitted_at}}function i7(_){let $=_?.metadata?.size;return[{label:"Type",value:_?.content_type||"application/octet-stream"},{label:"Size",value:typeof $==="number"?L$($):null},{label:"Added",value:_?.created_at?W2(_.created_at):null}].filter((Z)=>Z.value)}function l7(_,$,j){let Z=encodeURIComponent($||`attachment-${_}`),N=encodeURIComponent(String(_));if(j==="pdf")return`/pdf-viewer/?media=${N}&name=${Z}#media=${N}&name=${Z}`;if(j==="office"){let G=X$(_);return`/office-viewer/?url=${encodeURIComponent(G)}&name=${Z}`}if(j==="drawio")return`/drawio/edit.html?media=${N}&name=${Z}&readonly=1#media=${N}&name=${Z}&readonly=1`;return null}function W6({mediaId:_,info:$,onClose:j}){let Z=$?.filename||`attachment-${_}`,N=S_(()=>t2($?.content_type,Z),[$?.content_type,Z]),G=_6(N),Y=S_(()=>e8($?.content_type),[$?.content_type]),[q,L]=R(N==="text"),[X,Q]=R(""),[V,H]=R(null),P=k(null),T=S_(()=>i7($),[$]),g=S_(()=>l7(_,Z,N),[_,Z,N]),f=S_(()=>{if(!Y||!X)return"";return e0(X)},[Y,X]);return u(()=>{let w=(M)=>{if(M.key==="Escape")j()};return document.addEventListener("keydown",w),()=>document.removeEventListener("keydown",w)},[j]),u(()=>{if(!P.current||!f)return;v$(P.current);return},[f]),u(()=>{let w=!1;async function M(){if(N!=="text"){L(!1),H(null);return}L(!0),H(null);try{let c=await B4(_);if(!w)Q(c)}catch{if(!w)H("Failed to load text preview.")}finally{if(!w)L(!1)}}return M(),()=>{w=!0}},[_,N]),B`
        <div class="image-modal attachment-preview-modal" onClick=${j}>
            <div class="attachment-preview-shell" onClick=${(w)=>{w.stopPropagation()}}>
                <div class="attachment-preview-header">
                    <div class="attachment-preview-heading">
                        <div class="attachment-preview-title">${Z}</div>
                        <div class="attachment-preview-subtitle">${G}</div>
                    </div>
                    <div class="attachment-preview-header-actions">
                        ${g&&B`
                            <a
                                href=${g}
                                target="_blank"
                                rel="noopener noreferrer"
                                class="attachment-preview-download"
                                onClick=${(w)=>w.stopPropagation()}
                            >
                                Open in Tab
                            </a>
                        `}
                        <a
                            href=${X$(_)}
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
                    ${q&&B`<div class="attachment-preview-state">Loading preview…</div>`}
                    ${!q&&V&&B`<div class="attachment-preview-state">${V}</div>`}
                    ${!q&&!V&&N==="image"&&B`
                        <img class="attachment-preview-image" src=${X$(_)} alt=${Z} />
                    `}
                    ${!q&&!V&&(N==="pdf"||N==="office"||N==="drawio")&&g&&B`
                        <iframe class="attachment-preview-frame" src=${g} title=${Z}></iframe>
                    `}
                    ${!q&&!V&&N==="drawio"&&B`
                        <div class="attachment-preview-readonly-note">Draw.io preview is read-only. Editing tools are disabled in this preview.</div>
                    `}
                    ${!q&&!V&&N==="text"&&Y&&B`
                        <div
                            ref=${P}
                            class="attachment-preview-markdown post-content"
                            dangerouslySetInnerHTML=${{__html:f}}
                        />
                    `}
                    ${!q&&!V&&N==="text"&&!Y&&B`
                        <pre class="attachment-preview-text">${X}</pre>
                    `}
                    ${!q&&!V&&N==="unsupported"&&B`
                        <div class="attachment-preview-state">
                            Preview is not available for this file type yet. You can still download it directly.
                        </div>
                    `}
                </div>
                <div class="attachment-preview-meta">
                    ${T.map((w)=>B`
                        <div class="attachment-preview-meta-item" key=${w.label}>
                            <span class="attachment-preview-meta-label">${w.label}</span>
                            <span class="attachment-preview-meta-value">${w.value}</span>
                        </div>
                    `)}
                </div>
            </div>
        </div>
    `}function q6({src:_,onClose:$}){return u(()=>{let j=(Z)=>{if(Z.key==="Escape")$()};return document.addEventListener("keydown",j),()=>document.removeEventListener("keydown",j)},[$]),B`
        <div class="image-modal" onClick=${$}>
            <img src=${_} alt="Full size" />
        </div>
    `}function n7({mediaId:_,onPreview:$}){let[j,Z]=R(null);if(u(()=>{E2(_).then(Z).catch(()=>{})},[_]),!j)return null;let N=j.filename||"file",G=j.metadata?.size,Y=G?L$(G):"",L=t2(j.content_type,j.filename)==="unsupported"?"Details":"Preview";return B`
        <div class="file-attachment" onClick=${(X)=>X.stopPropagation()}>
            <a href=${X$(_)} download=${N} class="file-attachment-main">
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
                        ${Y&&B`<span class="file-size">${Y}</span>`}
                        ${j.content_type&&B`<span class="file-size">${j.content_type}</span>`}
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
                onClick=${(X)=>{X.preventDefault(),X.stopPropagation(),$?.({mediaId:_,info:j})}}
            >
                ${L}
            </button>
        </div>
    `}function d7({attachment:_,onPreview:$}){let j=Number(_?.id),[Z,N]=R(null);u(()=>{if(!Number.isFinite(j))return;E2(j).then(N).catch(()=>{});return},[j]);let G=Z?.filename||_.label||`attachment-${_.id}`,Y=Number.isFinite(j)?X$(j):null,L=t2(Z?.content_type,Z?.filename||_?.label)==="unsupported"?"Details":"Preview";return B`
        <span class="attachment-pill" title=${G}>
            ${Y?B`
                    <a href=${Y} download=${G} class="attachment-pill-main" onClick=${(X)=>X.stopPropagation()}>
                        <${D$}
                            prefix="post"
                            label=${_.label}
                            title=${G}
                        />
                    </a>
                `:B`
                    <${D$}
                        prefix="post"
                        label=${_.label}
                        title=${G}
                    />
                `}
            ${Number.isFinite(j)&&Z&&B`
                <button
                    class="attachment-pill-preview"
                    type="button"
                    title=${L}
                    onClick=${(X)=>{X.preventDefault(),X.stopPropagation(),$?.({mediaId:j,info:Z})}}
                >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8S1 12 1 12z"/>
                        <circle cx="12" cy="12" r="3"/>
                    </svg>
                </button>
            `}
        </span>
    `}function x1({annotations:_}){if(!_)return null;let{audience:$,priority:j,lastModified:Z}=_,N=Z?W2(Z):null;return B`
        <div class="content-annotations">
            ${$&&$.length>0&&B`
                <span class="content-annotation">Audience: ${$.join(", ")}</span>
            `}
            ${typeof j==="number"&&B`
                <span class="content-annotation">Priority: ${j}</span>
            `}
            ${N&&B`
                <span class="content-annotation">Updated: ${N}</span>
            `}
        </div>
    `}function o7({block:_}){let $=_.title||_.name||_.uri,j=_.description,Z=_.size?L$(_.size):"",N=_.mime_type||"",G=a7(N),Y=K2(_.uri);return B`
        <a
            href=${Y||"#"}
            class="resource-link"
            target=${Y?"_blank":void 0}
            rel=${Y?"noopener noreferrer":void 0}
            onClick=${(q)=>q.stopPropagation()}>
            <div class="resource-link-main">
                <div class="resource-link-header">
                    <span class="resource-link-icon-inline">${G}</span>
                    <div class="resource-link-title">${$}</div>
                </div>
                ${j&&B`<div class="resource-link-description">${j}</div>`}
                <div class="resource-link-meta">
                    ${N&&B`<span>${N}</span>`}
                    ${Z&&B`<span>${Z}</span>`}
                </div>
            </div>
            <div class="resource-link-icon">↗</div>
        </a>
    `}function s7({block:_}){let[$,j]=R(!1),Z=_.uri||"Embedded resource",N=_.text||"",G=Boolean(_.data),Y=_.mime_type||"";return B`
        <div class="resource-embed">
            <button class="resource-embed-toggle" onClick=${(q)=>{q.preventDefault(),q.stopPropagation(),j(!$)}}>
                ${$?"▼":"▶"} ${Z}
            </button>
            ${$&&B`
                ${N&&B`<pre class="resource-embed-content">${N}</pre>`}
                ${G&&B`
                    <div class="resource-embed-blob">
                        <span class="resource-embed-blob-label">Embedded blob</span>
                        ${Y&&B`<span class="resource-embed-blob-meta">${Y}</span>`}
                        <button class="resource-embed-blob-btn" onClick=${(q)=>{q.preventDefault(),q.stopPropagation();let L=new Blob([Uint8Array.from(atob(_.data),(V)=>V.charCodeAt(0))],{type:Y||"application/octet-stream"}),X=URL.createObjectURL(L),Q=document.createElement("a");Q.href=X,Q.download=Z.split("/").pop()||"resource",Q.click(),URL.revokeObjectURL(X)}}>Download</button>
                    </div>
                `}
            `}
        </div>
    `}function r7({block:_,post:$,onOpenWidget:j}){if(!_)return null;let Z=M4(_,$),N=u8(_),G=Z?.artifact?.kind||_?.artifact?.kind||_?.kind||null,Y=Z?.title||_.title||_.name||"Generated widget",q=Z?.description||_.description||_.subtitle||"",L=_.open_label||"Open widget",X=(Q)=>{if(Q.preventDefault(),Q.stopPropagation(),!Z)return;j?.(Z)};return B`
        <div class="generated-widget-launch" onClick=${(Q)=>Q.stopPropagation()}>
            <div class="generated-widget-launch-header">
                <div class="generated-widget-launch-eyebrow">Generated widget${G?` • ${String(G).toUpperCase()}`:""}</div>
                <div class="generated-widget-launch-title">${Y}</div>
            </div>
            ${q&&B`<div class="generated-widget-launch-description">${q}</div>`}
            <div class="generated-widget-launch-actions">
                <button
                    class="generated-widget-launch-btn"
                    type="button"
                    disabled=${!N}
                    onClick=${X}
                    title=${N?"Open widget in a floating pane":"Unsupported widget artifact"}
                >
                    ${L}
                </button>
                <span class="generated-widget-launch-note">
                    ${N?"Opens in a dismissible floating pane.":"This widget artifact is missing or unsupported."}
                </span>
            </div>
        </div>
    `}function a7(_){if(!_)return"\uD83D\uDCCE";if(_.startsWith("image/"))return"\uD83D\uDDBC️";if(_.startsWith("audio/"))return"\uD83C\uDFB5";if(_.startsWith("video/"))return"\uD83C\uDFAC";if(_.includes("pdf"))return"\uD83D\uDCC4";if(_.includes("zip")||_.includes("gzip"))return"\uD83D\uDDDC️";if(_.startsWith("text/"))return"\uD83D\uDCC4";return"\uD83D\uDCCE"}function t7({preview:_}){let $=K2(_.url),j=K2(_.image,{allowDataImage:!0}),Z=j?`background-image: url('${j}')`:"",N=_.site_name;if(!N&&$)try{N=new URL($).hostname}catch{N=$}return B`
        <a
            href=${$||"#"}
            class="link-preview ${j?"has-image":""}"
            target=${$?"_blank":void 0}
            rel=${$?"noopener noreferrer":void 0}
            onClick=${(G)=>G.stopPropagation()}
            style=${Z}>
            <div class="link-preview-overlay">
                <div class="link-preview-site">${N||""}</div>
                <div class="link-preview-title">${_.title}</div>
                ${_.description&&B`
                    <div class="link-preview-description">${_.description}</div>
                `}
            </div>
        </a>
    `}function e7(_,$){return typeof _==="string"?_:""}var _j=1800,$j=`
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <rect x="9" y="9" width="10" height="10" rx="2"></rect>
        <path d="M7 15H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2v1"></path>
    </svg>`,jj=`
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <path d="M20 6L9 17l-5-5"></path>
    </svg>`,Zj=`
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <circle cx="12" cy="12" r="9"></circle>
        <path d="M9 9l6 6M15 9l-6 6"></path>
    </svg>`;async function Nj(_){let $=typeof _==="string"?_:"";if(!$)return!1;if(navigator.clipboard?.writeText)try{return await navigator.clipboard.writeText($),!0}catch{}try{let j=document.createElement("textarea");j.value=$,j.setAttribute("readonly",""),j.style.position="fixed",j.style.opacity="0",j.style.pointerEvents="none",document.body.appendChild(j),j.select(),j.setSelectionRange(0,j.value.length);let Z=document.execCommand("copy");return document.body.removeChild(j),Z}catch{return!1}}function Gj(_){if(!_)return()=>{};let $=Array.from(_.querySelectorAll("pre")).filter((G)=>G.querySelector("code"));if($.length===0)return()=>{};let j=new Map,Z=[],N=(G,Y)=>{let q=Y||"idle";if(G.dataset.copyState=q,q==="success")G.innerHTML=jj,G.setAttribute("aria-label","Copied"),G.setAttribute("title","Copied"),G.classList.add("is-success"),G.classList.remove("is-error");else if(q==="error")G.innerHTML=Zj,G.setAttribute("aria-label","Copy failed"),G.setAttribute("title","Copy failed"),G.classList.add("is-error"),G.classList.remove("is-success");else G.innerHTML=$j,G.setAttribute("aria-label","Copy code"),G.setAttribute("title","Copy code"),G.classList.remove("is-success","is-error")};return $.forEach((G)=>{let Y=document.createElement("div");Y.className="post-code-block",G.parentNode?.insertBefore(Y,G),Y.appendChild(G);let q=document.createElement("button");q.type="button",q.className="post-code-copy-btn",N(q,"idle"),Y.appendChild(q);let L=async(X)=>{X.preventDefault(),X.stopPropagation();let V=G.querySelector("code")?.textContent||"",H=await Nj(V);N(q,H?"success":"error");let P=j.get(q);if(P)clearTimeout(P);let T=setTimeout(()=>{N(q,"idle"),j.delete(q)},_j);j.set(q,T)};q.addEventListener("click",L),Z.push(()=>{q.removeEventListener("click",L);let X=j.get(q);if(X)clearTimeout(X);if(Y.parentNode)Y.parentNode.insertBefore(G,Y),Y.remove()})}),()=>{Z.forEach((G)=>G())}}function Yj(_){if(!_)return{content:_,fileRefs:[]};let j=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),Z=-1;for(let X=0;X<j.length;X+=1)if(j[X].trim()==="Files:"&&j[X+1]&&/^\s*-\s+/.test(j[X+1])){Z=X;break}if(Z===-1)return{content:_,fileRefs:[]};let N=[],G=Z+1;for(;G<j.length;G+=1){let X=j[G];if(/^\s*-\s+/.test(X))N.push(X.replace(/^\s*-\s+/,"").trim());else if(!X.trim())break;else break}if(N.length===0)return{content:_,fileRefs:[]};let Y=j.slice(0,Z),q=j.slice(G),L=[...Y,...q].join(`
`);return L=L.replace(/\n{3,}/g,`

`).trim(),{content:L,fileRefs:N}}function zj(_){if(!_)return{content:_,messageRefs:[]};let j=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),Z=-1;for(let X=0;X<j.length;X+=1)if(j[X].trim()==="Referenced messages:"&&j[X+1]&&/^\s*-\s+/.test(j[X+1])){Z=X;break}if(Z===-1)return{content:_,messageRefs:[]};let N=[],G=Z+1;for(;G<j.length;G+=1){let X=j[G];if(/^\s*-\s+/.test(X)){let V=X.replace(/^\s*-\s+/,"").trim().match(/^message:(\S+)$/i);if(V)N.push(V[1])}else if(!X.trim())break;else break}if(N.length===0)return{content:_,messageRefs:[]};let Y=j.slice(0,Z),q=j.slice(G),L=[...Y,...q].join(`
`);return L=L.replace(/\n{3,}/g,`

`).trim(),{content:L,messageRefs:N}}function Kj(_){if(!_)return{content:_,attachments:[]};let j=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),Z=-1;for(let X=0;X<j.length;X+=1){let Q=j[X].trim();if((Q==="Images:"||Q==="Attachments:")&&j[X+1]&&/^\s*-\s+/.test(j[X+1])){Z=X;break}}if(Z===-1)return{content:_,attachments:[]};let N=[],G=Z+1;for(;G<j.length;G+=1){let X=j[G];if(/^\s*-\s+/.test(X)){let Q=X.replace(/^\s*-\s+/,"").trim(),V=Q.match(/^attachment:([^\s)]+)\s*(?:\((.+)\))?$/i)||Q.match(/^attachment:([^\s]+)\s+(.+)$/i);if(V){let H=V[1],P=(V[2]||"").trim()||H;N.push({id:H,label:P,raw:Q})}else N.push({id:null,label:Q,raw:Q})}else if(!X.trim())break;else break}if(N.length===0)return{content:_,attachments:[]};let Y=j.slice(0,Z),q=j.slice(G),L=[...Y,...q].join(`
`);return L=L.replace(/\n{3,}/g,`

`).trim(),{content:L,attachments:N}}function Wj(_){return _.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function qj(_,$){if(!_||!$)return _;let j=String($).trim().split(/\s+/).filter(Boolean);if(j.length===0)return _;let Z=j.map(Wj).sort((Q,V)=>V.length-Q.length),N=new RegExp(`(${Z.join("|")})`,"gi"),G=new RegExp(`^(${Z.join("|")})$`,"i"),Y=new DOMParser().parseFromString(_,"text/html"),q=Y.createTreeWalker(Y.body,NodeFilter.SHOW_TEXT),L=[],X;while(X=q.nextNode())L.push(X);for(let Q of L){let V=Q.nodeValue;if(!V||!N.test(V)){N.lastIndex=0;continue}N.lastIndex=0;let H=Q.parentElement;if(H&&H.closest("code, pre, script, style"))continue;let P=V.split(N).filter((g)=>g!=="");if(P.length===0)continue;let T=Y.createDocumentFragment();for(let g of P)if(G.test(g)){let f=Y.createElement("mark");f.className="search-highlight-term",f.textContent=g,T.appendChild(f)}else T.appendChild(Y.createTextNode(g));Q.parentNode.replaceChild(T,Q)}return Y.body.innerHTML}function X6({post:_,onClick:$,onHashtagClick:j,onMessageRef:Z,onScrollToMessage:N,agentName:G,agentAvatarUrl:Y,userName:q,userAvatarUrl:L,userAvatarBackground:X,onDelete:Q,isThreadReply:V,isThreadPrev:H,isThreadNext:P,isRemoving:T,highlightQuery:g,onFileRef:f,onOpenWidget:w}){let[M,c]=R(null),y=k(null),S=_.data,o=S.type==="agent_response",a=q||"You",n=o?G||i8:a,$_=o?C4(G,Y,!0):C4(a,L),i=typeof X==="string"?X.trim().toLowerCase():"",W_=!o&&$_.image&&(i==="clear"||i==="transparent"),d_=o&&Boolean($_.image),g_=`background-color: ${W_||d_?"transparent":$_.color}`,l=S.content_meta,Z_=Boolean(l?.truncated),t=Boolean(l?.preview),q_=Z_&&!t,Y_=Z_?{originalLength:Number.isFinite(l?.original_length)?l.original_length:S.content?S.content.length:0,maxLength:Number.isFinite(l?.max_length)?l.max_length:0}:null,X_=S.content_blocks||[],Q_=S.media_ids||[],N_=e7(S.content,S.link_previews),{content:v_,fileRefs:I_}=Yj(N_),{content:J_,messageRefs:y_}=zj(v_),{content:z0,attachments:K0}=Kj(J_);N_=z0;let K_=R4(X_),__=v4(X_),O_=K_.length===1&&typeof K_[0]?.fallback_text==="string"?K_[0].fallback_text.trim():"",j_=__.length===1?z6(__[0]).trim():"",F_=Boolean(O_)&&N_?.trim()===O_||Boolean(j_)&&N_?.trim()===j_,x_=Boolean(N_)&&!q_&&!F_,a_=typeof g==="string"?g.trim():"",p_=S_(()=>{if(!N_||F_)return"";let C=e0(N_,j);return a_?qj(C,a_):C},[N_,F_,a_]),o_=(C,r)=>{C.stopPropagation(),c(X$(r))},[c_,h_]=R(null),A_=(C)=>{h_(C)},E_=(C)=>{C.stopPropagation(),Q?.(_)},u_=(C,r)=>{let B_=new Set;if(!C||r.length===0)return{content:C,usedIds:B_};return{content:C.replace(/attachment:([^\s)"']+)/g,(s_,F0,T_,S0)=>{let _$=F0.replace(/^\/+/,""),b0=r.find((H0)=>H0.name&&H0.name.toLowerCase()===_$.toLowerCase()&&!B_.has(H0.id))||r.find((H0)=>!B_.has(H0.id));if(!b0)return s_;if(B_.add(b0.id),S0.slice(Math.max(0,T_-2),T_)==="](")return`/media/${b0.id}`;return b0.name||"attachment"}),usedIds:B_}},W0=[],P0=[],M_=[],y0=[],j0=[],b_=[],Z0=[],t_=0;if(X_.length>0)X_.forEach((C)=>{if(C?.type==="text"&&C.annotations)Z0.push(C.annotations);if(C?.type==="generated_widget")b_.push(C);else if(C?.type==="resource_link")y0.push(C);else if(C?.type==="resource")j0.push(C);else if(C?.type==="file"){let r=Q_[t_++];if(r)P0.push(r),M_.push({id:r,name:C?.name||C?.filename||C?.title})}else if(C?.type==="image"||!C?.type){let r=Q_[t_++];if(r){let B_=typeof C?.mime_type==="string"?C.mime_type:void 0;W0.push({id:r,annotations:C?.annotations,mimeType:B_}),M_.push({id:r,name:C?.name||C?.filename||C?.title})}}});else if(Q_.length>0){let C=K0.length>0;Q_.forEach((r,B_)=>{let P_=K0[B_]||null;if(M_.push({id:r,name:P_?.label||null}),C)P0.push(r);else W0.push({id:r,annotations:null})})}if(K0.length>0)K0.forEach((C)=>{if(!C?.id)return;let r=M_.find((B_)=>String(B_.id)===String(C.id));if(r&&!r.name)r.name=C.label});let{content:$0,usedIds:N0}=u_(N_,M_);N_=$0;let C_=W0.filter(({id:C})=>!N0.has(C)),O0=P0.filter((C)=>!N0.has(C)),T0=K0.length>0?K0.map((C,r)=>({id:C.id||`attachment-${r+1}`,label:C.label||`attachment-${r+1}`})):M_.map((C,r)=>({id:C.id,label:C.name||`attachment-${r+1}`})),m_=S_(()=>R4(X_),[X_]),e_=S_(()=>v4(X_),[X_]),f0=S_(()=>{return m_.map((C)=>`${C.card_id}:${C.state}`).join("|")},[m_]);u(()=>{if(!y.current)return;return v$(y.current),Gj(y.current)},[p_]);let w_=k(null);return u(()=>{if(!w_.current||m_.length===0)return;let C=w_.current;C.innerHTML="";for(let r of m_){let B_=document.createElement("div");C.appendChild(B_),G6(B_,r,{onAction:async(P_)=>{if(P_.type==="Action.OpenUrl"){let s_=K2(P_.url||"");if(!s_)throw Error("Invalid URL");window.open(s_,"_blank","noopener,noreferrer");return}if(P_.type==="Action.Submit"){await q4({post_id:_.id,thread_id:S.thread_id||_.id,chat_jid:_.chat_jid||null,card_id:r.card_id,action:{type:P_.type,title:P_.title||"",data:P_.data}});return}console.warn("[post] unsupported adaptive card action:",P_.type,P_)}}).catch((P_)=>{console.error("[post] adaptive card render error:",P_),B_.textContent=r.fallback_text||"Card failed to render."})}},[f0,_.id]),B`
        <div id=${`post-${_.id}`} class="post ${o?"agent-post":""} ${V?"thread-reply":""} ${H?"thread-prev":""} ${P?"thread-next":""} ${T?"removing":""}" onClick=${$}>
            <div class="post-avatar ${o?"agent-avatar":""} ${$_.image?"has-image":""}" style=${g_}>
                ${$_.image?B`<img src=${$_.image} alt=${n} />`:$_.letter}
            </div>
            <div class="post-body">
                <button
                    class="post-delete-btn"
                    type="button"
                    title="Delete message"
                    aria-label="Delete message"
                    onClick=${E_}
                >
                    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <path d="M18 6L6 18M6 6l12 12" />
                    </svg>
                </button>
                <div class="post-meta">
                    <span class="post-author">${n}</span>
                    <a class="post-time" href=${`#msg-${_.id}`} onClick=${(C)=>{if(C.preventDefault(),C.stopPropagation(),Z)Z(_.id)}}>${t8(_.timestamp)}</a>
                </div>
                ${q_&&Y_&&B`
                    <div class="post-content truncated">
                        <div class="truncated-title">Message too large to display.</div>
                        <div class="truncated-meta">
                            Original length: ${r2(Y_.originalLength)} chars
                            ${Y_.maxLength?B` • Display limit: ${r2(Y_.maxLength)} chars`:""}
                        </div>
                    </div>
                `}
                ${t&&Y_&&B`
                    <div class="post-content preview">
                        <div class="truncated-title">Preview truncated.</div>
                        <div class="truncated-meta">
                            Showing first ${r2(Y_.maxLength)} of ${r2(Y_.originalLength)} chars. Download full text below.
                        </div>
                    </div>
                `}
                ${(I_.length>0||y_.length>0||T0.length>0)&&B`
                    <div class="post-file-refs">
                        ${y_.map((C)=>{let r=(B_)=>{if(B_.preventDefault(),B_.stopPropagation(),N)N(C,_.chat_jid||null);else{let P_=document.getElementById("post-"+C);if(P_)P_.scrollIntoView({behavior:"smooth",block:"center"}),P_.classList.add("post-highlight"),setTimeout(()=>P_.classList.remove("post-highlight"),2000)}};return B`
                                <a href=${`#msg-${C}`} class="post-msg-pill-link" onClick=${r}>
                                    <${D$}
                                        prefix="post"
                                        label=${"msg:"+C}
                                        title=${"Message "+C}
                                        icon="message"
                                        onClick=${r}
                                    />
                                </a>
                            `})}
                        ${I_.map((C)=>{let r=C.split("/").pop()||C;return B`
                                <${D$}
                                    prefix="post"
                                    label=${r}
                                    title=${C}
                                    onClick=${()=>f?.(C)}
                                />
                            `})}
                        ${T0.map((C)=>B`
                            <${d7}
                                key=${C.id}
                                attachment=${C}
                                onPreview=${A_}
                            />
                        `)}
                    </div>
                `}
                ${x_&&B`
                    <div 
                        ref=${y}
                        class="post-content"
                        dangerouslySetInnerHTML=${{__html:p_}}
                        onClick=${(C)=>{if(C.target.classList.contains("hashtag")){C.preventDefault(),C.stopPropagation();let r=C.target.dataset.hashtag;if(r)j?.(r)}else if(C.target.tagName==="IMG")C.preventDefault(),C.stopPropagation(),c(C.target.src)}}
                    />
                `}
                ${m_.length>0&&B`
                    <div ref=${w_} class="post-adaptive-cards" />
                `}
                ${e_.length>0&&B`
                    <div class="post-adaptive-card-submissions">
                        ${e_.map((C,r)=>{let B_=K6(C),P_=`${C.card_id}-${r}`;return B`
                                <div key=${P_} class="adaptive-card-submission-receipt">
                                    <div class="adaptive-card-submission-header">
                                        <span class="adaptive-card-submission-icon" aria-hidden="true">✓</span>
                                        <div class="adaptive-card-submission-title-wrap">
                                            <span class="adaptive-card-submission-title">Submitted</span>
                                            <span class="adaptive-card-submission-title-action">${B_.title}</span>
                                        </div>
                                    </div>
                                    ${B_.fields.length>0&&B`
                                        <div class="adaptive-card-submission-fields">
                                            ${B_.fields.map((s_)=>B`
                                                <span class="adaptive-card-submission-field" title=${`${s_.key}: ${s_.value}`}>
                                                    <span class="adaptive-card-submission-field-key">${s_.key}</span>
                                                    <span class="adaptive-card-submission-field-sep">:</span>
                                                    <span class="adaptive-card-submission-field-value">${s_.value}</span>
                                                </span>
                                            `)}
                                        </div>
                                    `}
                                    <div class="adaptive-card-submission-meta">
                                        Submitted ${W2(B_.submittedAt)}
                                    </div>
                                </div>
                            `})}
                    </div>
                `}
                ${b_.length>0&&B`
                    <div class="generated-widget-launches">
                        ${b_.map((C,r)=>B`
                            <${r7}
                                key=${C.widget_id||C.id||`${_.id}-widget-${r}`}
                                block=${C}
                                post=${_}
                                onOpenWidget=${w}
                            />
                        `)}
                    </div>
                `}
                ${Z0.length>0&&B`
                    ${Z0.map((C,r)=>B`
                        <${x1} key=${r} annotations=${C} />
                    `)}
                `}
                ${C_.length>0&&B`
                    <div class="media-preview">
                        ${C_.map(({id:C,mimeType:r})=>{let P_=typeof r==="string"&&r.toLowerCase().startsWith("image/svg")?X$(C):Q4(C);return B`
                                <img 
                                    key=${C} 
                                    src=${P_} 
                                    alt="Media" 
                                    loading="lazy"
                                    onClick=${(s_)=>o_(s_,C)}
                                />
                            `})}
                    </div>
                `}
                ${C_.length>0&&B`
                    ${C_.map(({annotations:C},r)=>B`
                        ${C&&B`<${x1} key=${r} annotations=${C} />`}
                    `)}
                `}
                ${O0.length>0&&B`
                    <div class="file-attachments">
                        ${O0.map((C)=>B`
                            <${n7} key=${C} mediaId=${C} onPreview=${A_} />
                        `)}
                    </div>
                `}
                ${y0.length>0&&B`
                    <div class="resource-links">
                        ${y0.map((C,r)=>B`
                            <div key=${r}>
                                <${o7} block=${C} />
                                <${x1} annotations=${C.annotations} />
                            </div>
                        `)}
                    </div>
                `}
                ${j0.length>0&&B`
                    <div class="resource-embeds">
                        ${j0.map((C,r)=>B`
                            <div key=${r}>
                                <${s7} block=${C} />
                                <${x1} annotations=${C.annotations} />
                            </div>
                        `)}
                    </div>
                `}
                ${S.link_previews?.length>0&&B`
                    <div class="link-previews">
                        ${S.link_previews.map((C,r)=>B`
                            <${t7} key=${r} preview=${C} />
                        `)}
                    </div>
                `}
            </div>
        </div>
        ${M&&B`<${q6} src=${M} onClose=${()=>c(null)} />`}
        ${c_&&B`
            <${W6}
                mediaId=${c_.mediaId}
                info=${c_.info}
                onClose=${()=>h_(null)}
            />
        `}
    `}function V6({posts:_,hasMore:$,onLoadMore:j,onPostClick:Z,onHashtagClick:N,onMessageRef:G,onScrollToMessage:Y,onFileRef:q,onOpenWidget:L,emptyMessage:X,timelineRef:Q,agents:V,user:H,onDeletePost:P,reverse:T=!0,removingPostIds:g,searchQuery:f}){let[w,M]=R(!1),c=k(null),y=typeof IntersectionObserver<"u",S=x(async()=>{if(!j||!$||w)return;M(!0);try{await j({preserveScroll:!0,preserveMode:"top"})}finally{M(!1)}},[$,w,j]),o=x((l)=>{let{scrollTop:Z_,scrollHeight:t,clientHeight:q_}=l.target,Y_=T?t-q_-Z_:Z_,X_=Math.max(300,q_);if(Y_<X_)S()},[T,S]);u(()=>{if(!y)return;let l=c.current,Z_=Q?.current;if(!l||!Z_)return;let t=300,q_=new IntersectionObserver((Y_)=>{for(let X_ of Y_){if(!X_.isIntersecting)continue;S()}},{root:Z_,rootMargin:`${t}px 0px ${t}px 0px`,threshold:0});return q_.observe(l),()=>q_.disconnect()},[y,$,j,Q,S]);let a=k(S);if(a.current=S,u(()=>{if(y)return;if(!Q?.current)return;let{scrollTop:l,scrollHeight:Z_,clientHeight:t}=Q.current,q_=T?Z_-t-l:l,Y_=Math.max(300,t);if(q_<Y_)a.current?.()},[y,_,$,T,Q]),u(()=>{if(!Q?.current)return;if(!$||w)return;let{scrollTop:l,scrollHeight:Z_,clientHeight:t}=Q.current,q_=T?Z_-t-l:l,Y_=Math.max(300,t);if(Z_<=t+1||q_<Y_)a.current?.()},[_,$,w,T,Q]),!_)return B`<div class="loading"><div class="spinner"></div></div>`;if(_.length===0)return B`
            <div class="timeline" ref=${Q}>
                <div class="timeline-content">
                    <div style="padding: var(--spacing-xl); text-align: center; color: var(--text-secondary)">
                        ${X||"No messages yet. Start a conversation!"}
                    </div>
                </div>
            </div>
        `;let n=_.slice().sort((l,Z_)=>l.id-Z_.id),$_=(l)=>{let Z_=l?.data?.thread_id;if(Z_===null||Z_===void 0||Z_==="")return null;let t=Number(Z_);return Number.isFinite(t)?t:null},i=new Map;for(let l=0;l<n.length;l+=1){let Z_=n[l],t=Number(Z_?.id),q_=$_(Z_);if(q_!==null){let Y_=i.get(q_)||{anchorIndex:-1,replyIndexes:[]};Y_.replyIndexes.push(l),i.set(q_,Y_)}else if(Number.isFinite(t)){let Y_=i.get(t)||{anchorIndex:-1,replyIndexes:[]};Y_.anchorIndex=l,i.set(t,Y_)}}let W_=new Map;for(let[l,Z_]of i.entries()){let t=new Set;if(Z_.anchorIndex>=0)t.add(Z_.anchorIndex);for(let q_ of Z_.replyIndexes)t.add(q_);W_.set(l,Array.from(t).sort((q_,Y_)=>q_-Y_))}let d_=n.map((l,Z_)=>{let t=$_(l);if(t===null)return{hasThreadPrev:!1,hasThreadNext:!1};let q_=W_.get(t);if(!q_||q_.length===0)return{hasThreadPrev:!1,hasThreadNext:!1};let Y_=q_.indexOf(Z_);if(Y_<0)return{hasThreadPrev:!1,hasThreadNext:!1};return{hasThreadPrev:Y_>0,hasThreadNext:Y_<q_.length-1}}),g_=B`<div class="timeline-sentinel" ref=${c}></div>`;return B`
        <div class="timeline ${T?"reverse":"normal"}" ref=${Q} onScroll=${o}>
            <div class="timeline-content">
                ${T?g_:null}
                ${n.map((l,Z_)=>{let t=Boolean(l.data?.thread_id&&l.data.thread_id!==l.id),q_=g?.has?.(l.id),Y_=d_[Z_]||{};return B`
                    <${X6}
                        key=${l.id}
                        post=${l}
                        isThreadReply=${t}
                        isThreadPrev=${Y_.hasThreadPrev}
                        isThreadNext=${Y_.hasThreadNext}
                        isRemoving=${q_}
                        highlightQuery=${f}
                        agentName=${l8(l.data?.agent_id,V||{})}
                        agentAvatarUrl=${n8(l.data?.agent_id,V||{})}
                        userName=${H?.name||H?.user_name}
                        userAvatarUrl=${H?.avatar_url||H?.avatarUrl||H?.avatar}
                        userAvatarBackground=${H?.avatar_background||H?.avatarBackground}
                        onClick=${()=>Z?.(l)}
                        onHashtagClick=${N}
                        onMessageRef=${G}
                        onScrollToMessage=${Y}
                        onFileRef=${q}
                        onOpenWidget=${L}
                        onDelete=${P}
                    />
                `})}
                ${T?null:g_}
            </div>
        </div>
    `}class L6{extensions=new Map;register(_){this.extensions.set(_.id,_)}unregister(_){this.extensions.delete(_)}resolve(_){let $,j=-1/0;for(let Z of this.extensions.values()){if(Z.placement!=="tabs")continue;if(!Z.canHandle)continue;try{let N=Z.canHandle(_);if(N===!1||N===0)continue;let G=N===!0?0:typeof N==="number"?N:0;if(G>j)j=G,$=Z}catch(N){console.warn(`[PaneRegistry] canHandle() error for "${Z.id}":`,N)}}return $}list(){return Array.from(this.extensions.values())}getDockPanes(){return Array.from(this.extensions.values()).filter((_)=>_.placement==="dock")}getTabPanes(){return Array.from(this.extensions.values()).filter((_)=>_.placement==="tabs")}get(_){return this.extensions.get(_)}get size(){return this.extensions.size}}var r_=new L6;var M1=null,u4=null;function Xj(){try{return`/static/dist/editor.bundle.js${new URL(import.meta.url).search||""}`}catch{return"/static/dist/editor.bundle.js"}}function Q6(){if(u4)return Promise.resolve(u4);if(!M1)M1=import(Xj()).then((_)=>{return u4=_,_}).catch((_)=>{throw M1=null,_});return M1}class B6{container;context;real=null;disposed=!1;loadingEl;queuedDirtyCb=null;queuedSaveCb=null;queuedCloseCb=null;queuedViewStateCb=null;queuedViewState=null;constructor(_,$){this.container=_,this.context=$,this.loadingEl=document.createElement("div"),this.loadingEl.className="editor-pane",this.loadingEl.innerHTML=`
            <div class="editor-body">
                <div class="editor-status" style="padding: 2em; text-align: center; color: var(--text-secondary);">Loading editor…</div>
            </div>
        `,_.appendChild(this.loadingEl),this.load()}escapeHtml(_){let $=document.createElement("div");return $.textContent=_,$.innerHTML}async load(){try{let _=await Q6();if(this.disposed)return;if(this.loadingEl.parentNode)this.loadingEl.remove();if(this.real=new _.StandaloneEditorInstance(this.container,this.context),this.queuedDirtyCb&&this.real.onDirtyChange)this.real.onDirtyChange(this.queuedDirtyCb);if(this.queuedSaveCb&&this.real.onSaveRequest)this.real.onSaveRequest(this.queuedSaveCb);if(this.queuedCloseCb&&this.real.onClose)this.real.onClose(this.queuedCloseCb);if(this.queuedViewStateCb&&typeof this.real.onViewStateChange==="function")this.real.onViewStateChange(this.queuedViewStateCb);if(this.queuedViewState&&typeof this.real.restoreViewState==="function")requestAnimationFrame(()=>this.real?.restoreViewState?.(this.queuedViewState))}catch(_){if(this.disposed)return;console.error("[editor-loader] Failed to load editor bundle:",_),this.loadingEl.querySelector(".editor-status").textContent="Failed to load editor. Check console for details."}}getContent(){return this.real?.getContent()}isDirty(){return this.real?.isDirty()||!1}setContent(_,$){if(this.real?.setContent)this.real.setContent(_,$)}focus(){this.real?.focus()}resize(){this.real?.resize?.()}dispose(){if(this.disposed)return;if(this.disposed=!0,this.real)this.real.dispose(),this.real=null;this.container.innerHTML="",this.queuedDirtyCb=null,this.queuedSaveCb=null,this.queuedCloseCb=null,this.queuedViewStateCb=null}onDirtyChange(_){if(this.queuedDirtyCb=_,this.real?.onDirtyChange)this.real.onDirtyChange(_)}onSaveRequest(_){if(this.queuedSaveCb=_,this.real?.onSaveRequest)this.real.onSaveRequest(_)}onClose(_){if(this.queuedCloseCb=_,this.real?.onClose)this.real.onClose(_)}onViewStateChange(_){this.queuedViewStateCb=_,this.real?.onViewStateChange?.(_)}restoreViewState(_){this.queuedViewState=_,this.real?.restoreViewState?.(_)}getPath(){return this.real?.getPath?.()??this.context.path??""}setPath(_){this.real?.setPath?.(_)}}var m4={id:"editor",label:"Editor",icon:"edit",capabilities:["edit"],placement:"tabs",canHandle(_){if(!_.path)return!1;if(_.mode!=="edit")return!1;return 1},mount(_,$){return new B6(_,$)}};function g4(){Q6().catch(()=>{})}var c4="piclaw://terminal";var Vj={yellow:"#9a6700",magenta:"#8250df",cyan:"#1b7c83",brightBlack:"#57606a",brightRed:"#cf222e",brightGreen:"#1a7f37",brightYellow:"#bf8700",brightBlue:"#0550ae",brightMagenta:"#6f42c1",brightCyan:"#0a7b83"},Lj={yellow:"#d29922",magenta:"#bc8cff",cyan:"#39c5cf",brightBlack:"#8b949e",brightRed:"#ff7b72",brightGreen:"#7ee787",brightYellow:"#e3b341",brightBlue:"#79c0ff",brightMagenta:"#d2a8ff",brightCyan:"#56d4dd"},b1=null,p4=null;function Qj(_){if(!_)return!1;return _.startsWith("data:application/wasm")||/(^|\/)ghostty-vt\.wasm(?:[?#].*)?$/.test(_)}async function Bj(_){let $=globalThis.fetch?.bind(globalThis);if(!$)return await _();let j=new URL("/static/js/vendor/ghostty-vt.wasm",window.location.origin).href,Z=(N,G)=>{let Y=N instanceof Request?N.url:N instanceof URL?N.href:String(N);if(!Qj(Y))return $(N,G);if(N instanceof Request)return $(new Request(j,N));return $(j,G)};globalThis.fetch=Z;try{return await _()}finally{globalThis.fetch=$}}async function Uj(){let $=await import(new URL("/static/js/vendor/ghostty-web.js",window.location.origin).href);if(!b1)b1=Bj(()=>Promise.resolve($.init?.())).catch((j)=>{throw b1=null,j});return await b1,$}async function Oj(){if(typeof document>"u"||!("fonts"in document)||!document.fonts)return;if(!p4)p4=Promise.allSettled([document.fonts.load('400 13px "FiraCode Nerd Font Mono"'),document.fonts.load('700 13px "FiraCode Nerd Font Mono"'),document.fonts.ready]).then(()=>{return}).catch(()=>{return});await p4}async function Fj(){let _=await fetch("/terminal/session",{method:"GET",credentials:"same-origin"}),$=await _.json().catch(()=>({}));if(!_.ok)throw Error($?.error||`HTTP ${_.status}`);return $}function Hj(_){return`${window.location.protocol==="https:"?"wss:":"ws:"}//${window.location.host}${_}`}function Dj(){if(typeof window>"u"||typeof document>"u")return!1;let{documentElement:_,body:$}=document,j=_?.getAttribute?.("data-theme")?.toLowerCase?.()||"";if(j==="dark")return!0;if(j==="light")return!1;if(_?.classList?.contains("dark")||$?.classList?.contains("dark"))return!0;if(_?.classList?.contains("light")||$?.classList?.contains("light"))return!1;return Boolean(window.matchMedia?.("(prefers-color-scheme: dark)")?.matches)}function u$(_,$=""){if(typeof document>"u")return $;return getComputedStyle(document.documentElement).getPropertyValue(_)?.trim()||$}function Jj(_,$){if(!_||!_.startsWith("#"))return _;let j=_.slice(1);if(j.length===3)return`#${j[0]}${j[0]}${j[1]}${j[1]}${j[2]}${j[2]}${$}`;if(j.length===6)return`#${j}${$}`;return _}function U6(){let _=Dj(),$=_?Lj:Vj,j=u$("--bg-primary",_?"#000000":"#ffffff"),Z=u$("--text-primary",_?"#e7e9ea":"#0f1419"),N=u$("--text-secondary",_?"#71767b":"#536471"),G=u$("--accent-color","#1d9bf0"),Y=u$("--danger-color",_?"#ff7b72":"#cf222e"),q=u$("--success-color",_?"#7ee787":"#1a7f37"),L=u$("--bg-hover",_?"#1d1f23":"#e8ebed"),X=u$("--border-color",_?"#2f3336":"#eff3f4"),Q=u$("--accent-soft-strong",Jj(G,_?"47":"33"));return{background:j,foreground:Z,cursor:G,cursorAccent:j,selectionBackground:Q,selectionForeground:Z,black:L,red:Y,green:q,yellow:$.yellow,blue:G,magenta:$.magenta,cyan:$.cyan,white:Z,brightBlack:$.brightBlack,brightRed:$.brightRed,brightGreen:$.brightGreen,brightYellow:$.brightYellow,brightBlue:$.brightBlue,brightMagenta:$.brightMagenta,brightCyan:$.brightCyan,brightWhite:X}}class h4{container;disposed=!1;termEl;bodyEl;statusEl;terminal=null;fitAddon=null;socket=null;themeObserver=null;themeChangeListener=null;mediaQuery=null;mediaQueryListener=null;resizeObserver=null;dockResizeListener=null;windowResizeListener=null;resizeFrame=0;lastAppliedThemeSignature=null;lastResizeSignature=null;constructor(_,$){this.container=_,this.termEl=document.createElement("div"),this.termEl.className="terminal-pane-content",this.termEl.setAttribute("tabindex","0"),this.statusEl=document.createElement("span"),this.statusEl.className="terminal-pane-status",this.statusEl.textContent="Loading terminal…",this.bodyEl=document.createElement("div"),this.bodyEl.className="terminal-pane-body",this.bodyEl.innerHTML='<div class="terminal-placeholder">Bootstrapping ghostty-web…</div>',this.termEl.append(this.bodyEl),_.appendChild(this.termEl),this.bootstrapGhostty()}setStatus(_){this.statusEl.textContent=_,this.termEl.dataset.connectionStatus=_,this.termEl.setAttribute("aria-label",`Terminal ${_}`)}getResizeSignature(){try{let _=this.container?.getBoundingClientRect?.(),$=this.bodyEl?.getBoundingClientRect?.(),j=Number.isFinite(_?.width)?_.width:0,Z=Number.isFinite(_?.height)?_.height:0,N=Number.isFinite($?.width)?$.width:0,G=Number.isFinite($?.height)?$.height:0;return`${Math.round(j)}x${Math.round(Z)}:${Math.round(N)}x${Math.round(G)}`}catch{return"0x0:0x0"}}syncHostLayout(){let _=this.bodyEl.querySelector(".terminal-live-host");if(!(_ instanceof HTMLElement))return;let $=_.firstElementChild;if($ instanceof HTMLElement)$.style.width="100%",$.style.height="100%",$.style.maxWidth="100%",$.style.minWidth="0",$.style.display="block";let j=_.querySelector("canvas");if(j instanceof HTMLElement)j.style.display="block",j.style.maxWidth="none"}scheduleResize(){if(this.disposed)return;let _=this.getResizeSignature();if(this.lastResizeSignature===_)return;if(this.resizeFrame)cancelAnimationFrame(this.resizeFrame);this.resizeFrame=requestAnimationFrame(()=>{this.resizeFrame=0,this.lastResizeSignature=this.getResizeSignature(),this.resize()})}async bootstrapGhostty(){try{let _=await Uj();if(await Oj(),this.disposed)return;this.bodyEl.innerHTML="";let $=document.createElement("div");$.className="terminal-live-host",this.bodyEl.appendChild($);let j=new _.Terminal({cols:120,rows:30,cursorBlink:!0,fontFamily:'FiraCode Nerd Font Mono, ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", monospace',fontSize:13,theme:U6()}),Z=null;if(typeof _.FitAddon==="function")Z=new _.FitAddon,j.loadAddon?.(Z);await j.open($),this.syncHostLayout(),j.loadFonts?.(),Z?.observeResize?.(),this.terminal=j,this.fitAddon=Z,this.installThemeSync(),this.installResizeSync(),this.scheduleResize(),await this.connectBackend()}catch(_){if(console.error("[terminal-pane] Failed to bootstrap ghostty-web:",_),this.disposed)return;this.bodyEl.innerHTML='<div class="terminal-placeholder">Terminal failed to load. Check vendored assets and backend wiring.</div>',this.setStatus("Load failed")}}applyTheme(){if(!this.terminal)return;let _=U6(),$=JSON.stringify(_),j=this.lastAppliedThemeSignature!==null&&this.lastAppliedThemeSignature!==$;try{this.termEl.style.backgroundColor=_.background,this.bodyEl.style.backgroundColor=_.background;let Z=this.bodyEl.querySelector(".terminal-live-host");if(Z instanceof HTMLElement)Z.style.backgroundColor=_.background,Z.style.color=_.foreground;let N=this.bodyEl.querySelector("canvas");if(N instanceof HTMLElement)N.style.backgroundColor=_.background,N.style.color=_.foreground}catch{}try{if(this.terminal.options)this.terminal.options.theme=_}catch{}try{if(j&&this.terminal.reset)this.terminal.reset()}catch{}try{this.terminal.renderer?.setTheme?.(_),this.terminal.renderer?.clear?.()}catch{}try{this.terminal.loadFonts?.()}catch{}try{this.terminal.renderer?.remeasureFont?.()}catch{}try{if(this.terminal.wasmTerm&&this.terminal.renderer?.render)this.terminal.renderer.render(this.terminal.wasmTerm,!0,this.terminal.viewportY||0,this.terminal),this.terminal.renderer.render(this.terminal.wasmTerm,!1,this.terminal.viewportY||0,this.terminal)}catch{}try{this.resize()}catch{}try{if(j&&this.socket?.readyState===WebSocket.OPEN)this.socket.send(JSON.stringify({type:"input",data:"\f"}))}catch{}try{this.terminal.refresh?.()}catch{}this.lastAppliedThemeSignature=$}installThemeSync(){if(typeof window>"u"||typeof document>"u")return;let _=()=>requestAnimationFrame(()=>this.applyTheme());_();let $=()=>_();window.addEventListener("piclaw-theme-change",$),this.themeChangeListener=$;let j=window.matchMedia?.("(prefers-color-scheme: dark)"),Z=()=>_();if(j?.addEventListener)j.addEventListener("change",Z);else if(j?.addListener)j.addListener(Z);this.mediaQuery=j,this.mediaQueryListener=Z;let N=typeof MutationObserver<"u"?new MutationObserver(()=>_()):null;if(N?.observe(document.documentElement,{attributes:!0,attributeFilter:["class","data-theme","style"]}),document.body)N?.observe(document.body,{attributes:!0,attributeFilter:["class","data-theme"]});this.themeObserver=N}installResizeSync(){if(typeof window>"u")return;let _=()=>this.scheduleResize(),$=()=>this.scheduleResize();if(window.addEventListener("dock-resize",_),window.addEventListener("resize",$),this.dockResizeListener=_,this.windowResizeListener=$,typeof ResizeObserver<"u"){let j=new ResizeObserver(()=>{if(this.disposed)return;this.scheduleResize()});j.observe(this.container),this.resizeObserver=j}}async connectBackend(){let _=this.terminal;if(!_)return;try{let $=await Fj();if(this.disposed)return;if(!$?.enabled){_.write?.(`Terminal backend unavailable: ${$?.error||"disabled"}\r
`),this.setStatus("Unavailable");return}let j=new WebSocket(Hj($.ws_path||"/terminal/ws"));this.socket=j,this.setStatus("Connecting…"),_.onData?.((Z)=>{if(j.readyState===WebSocket.OPEN)j.send(JSON.stringify({type:"input",data:Z}))}),_.onResize?.(({cols:Z,rows:N})=>{if(j.readyState===WebSocket.OPEN)j.send(JSON.stringify({type:"resize",cols:Z,rows:N}))}),j.addEventListener("open",()=>{if(this.disposed)return;this.setStatus("Connected"),this.scheduleResize()}),j.addEventListener("message",(Z)=>{if(this.disposed)return;let N=null;try{N=JSON.parse(String(Z.data))}catch{N={type:"output",data:String(Z.data)}}if(N?.type==="output"&&typeof N.data==="string"){_.write?.(N.data);return}if(N?.type==="exit")_.write?.(`\r
[terminal exited]\r
`),this.setStatus("Exited")}),j.addEventListener("close",()=>{if(this.disposed)return;this.setStatus("Disconnected")}),j.addEventListener("error",()=>{if(this.disposed)return;this.setStatus("Connection error")})}catch($){_.write?.(`Terminal backend unavailable: ${$ instanceof Error?$.message:String($)}\r
`),this.setStatus("Unavailable")}}sendResize(){if(!this.socket||this.socket.readyState!==WebSocket.OPEN||!this.fitAddon?.proposeDimensions)return;let _=this.fitAddon.proposeDimensions();if(!_)return;this.socket.send(JSON.stringify({type:"resize",cols:_.cols,rows:_.rows}))}getContent(){return}isDirty(){return!1}focus(){if(this.terminal?.focus){this.terminal.focus();return}this.termEl?.focus()}resize(){this.syncHostLayout();try{this.terminal?.renderer?.remeasureFont?.()}catch{}try{this.fitAddon?.fit?.()}catch{}try{this.terminal?.refresh?.()}catch{}this.syncHostLayout(),this.sendResize()}dispose(){if(this.disposed)return;this.disposed=!0;try{if(this.resizeFrame)cancelAnimationFrame(this.resizeFrame),this.resizeFrame=0}catch{}try{if(this.themeChangeListener)window.removeEventListener("piclaw-theme-change",this.themeChangeListener)}catch{}try{if(this.mediaQuery&&this.mediaQueryListener){if(this.mediaQuery.removeEventListener)this.mediaQuery.removeEventListener("change",this.mediaQueryListener);else if(this.mediaQuery.removeListener)this.mediaQuery.removeListener(this.mediaQueryListener)}}catch{}try{if(this.dockResizeListener)window.removeEventListener("dock-resize",this.dockResizeListener);if(this.windowResizeListener)window.removeEventListener("resize",this.windowResizeListener)}catch{}try{this.themeObserver?.disconnect?.()}catch{}try{this.resizeObserver?.disconnect?.()}catch{}try{this.socket?.close?.()}catch{}try{this.fitAddon?.dispose?.()}catch{}try{this.terminal?.dispose?.()}catch{}this.termEl?.remove()}}var i4={id:"terminal",label:"Terminal",icon:"terminal",capabilities:["terminal"],placement:"dock",mount(_,$){return new h4(_,$)}},l4={id:"terminal-tab",label:"Terminal",icon:"terminal",capabilities:["terminal"],placement:"tabs",canHandle(_){return _?.path==="piclaw://terminal"?1e4:!1},mount(_,$){return new h4(_,$)}};function o$(_){return String(_||"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}function yj(_,$){let j=String(_||"").trim();if(!j)return j;if(/^[a-zA-Z][a-zA-Z\d+.-]*:/.test(j)||j.startsWith("#")||j.startsWith("data:")||j.startsWith("blob:"))return j;let Z=j.match(/^([^?#]*)(\?[^#]*)?(#.*)?$/),N=Z?.[1]||j,G=Z?.[2]||"",Y=Z?.[3]||"",q=String($||"").split("/").slice(0,-1).join("/"),X=N.startsWith("/")?N:`${q?`${q}/`:""}${N}`,Q=[];for(let H of X.split("/")){if(!H||H===".")continue;if(H===".."){if(Q.length>0)Q.pop();continue}Q.push(H)}let V=Q.join("/");return`${O1(V)}${G}${Y}`}function _1(_){return _?.preview||null}function Ej(_){let $=String(_||""),j=Math.max($.lastIndexOf("/"),$.lastIndexOf("\\")),Z=j>=0?$.slice(j+1):$,N=Z.lastIndexOf(".");if(N<=0||N===Z.length-1)return"none";return Z.slice(N+1)}function kj(_){if(!_)return"unknown";if(_.kind==="image")return"image";if(_.kind==="text")return _.content_type==="text/markdown"?"markdown":"text";if(_.kind==="binary")return"binary";return String(_.kind||"unknown")}function Aj(_,$){let j=$?.path||_?.path||"",Z=[];if($?.content_type)Z.push(`<span><strong>type:</strong> ${o$($.content_type)}</span>`);if(typeof $?.size==="number")Z.push(`<span><strong>size:</strong> ${o$(L$($.size))}</span>`);if($?.mtime)Z.push(`<span><strong>modified:</strong> ${o$(W2($.mtime))}</span>`);if(Z.push(`<span><strong>kind:</strong> ${o$(kj($))}</span>`),Z.push(`<span><strong>extension:</strong> ${o$(Ej(j))}</span>`),j)Z.push(`<span><strong>path:</strong> ${o$(j)}</span>`);if($?.truncated)Z.push("<span><strong>content:</strong> truncated</span>");return`<div class="workspace-preview-meta workspace-preview-meta-inline">${Z.join("")}</div>`}function wj(_){let $=_1(_);if(!$)return'<div class="workspace-preview-text">No preview available.</div>';let j=Aj(_,$);if($.kind==="image"){let Z=$.url||($.path?O1($.path):"");return`${j}
            <div class="workspace-preview-image">
                <img src="${o$(Z)}" alt="preview" />
            </div>
        `}if($.kind==="text"){if($.content_type==="text/markdown"){let Z=e0($.text||"",null,{rewriteImageSrc:(N)=>yj(N,$.path||_?.path)});return`${j}<div class="workspace-preview-text">${Z}</div>`}return`${j}<pre class="workspace-preview-text"><code>${o$($.text||"")}</code></pre>`}if($.kind==="binary")return`${j}<div class="workspace-preview-text">Binary file — download to view.</div>`;return`${j}<div class="workspace-preview-text">No preview available.</div>`}class n4{constructor(_,$){this.container=_,this.context=$,this.disposed=!1,this.host=document.createElement("div"),this.host.className="workspace-preview-render-host",this.host.tabIndex=0,this.container.appendChild(this.host),this.render()}render(){if(this.disposed)return;this.host.innerHTML=wj(this.context)}getContent(){let _=_1(this.context);return typeof _?.text==="string"?_.text:void 0}isDirty(){return!1}setContent(_,$){let j=_1(this.context);if(j&&j.kind==="text"){if(j.text=_,$!==void 0)j.mtime=$}if(this.context.content=_,$!==void 0)this.context.mtime=$;this.render()}focus(){this.host?.focus?.()}dispose(){if(this.disposed)return;this.disposed=!0,this.host?.remove(),this.container.innerHTML=""}}var d4={id:"workspace-markdown-preview",label:"Workspace Markdown Preview",icon:"preview",capabilities:["preview","readonly"],placement:"tabs",canHandle(_){let $=_1(_);if(_?.mode!=="view")return!1;if(!$||$.kind!=="text")return!1;return $.content_type==="text/markdown"?20:!1},mount(_,$){return new n4(_,$)}},o4={id:"workspace-preview-default",label:"Workspace Preview",icon:"preview",capabilities:["preview","readonly"],placement:"tabs",canHandle(_){if(_?.mode!=="view")return!1;return _1(_)||_?.path?1:!1},mount(_,$){return new n4(_,$)}};var Pj=new Set([".docx",".doc",".odt",".rtf",".xlsx",".xls",".ods",".csv",".pptx",".ppt",".odp"]),Ij={".docx":"Word Document",".doc":"Word (Legacy)",".odt":"OpenDocument Text",".rtf":"Rich Text",".xlsx":"Excel Spreadsheet",".xls":"Excel (Legacy)",".ods":"OpenDocument Spreadsheet",".csv":"CSV Data",".pptx":"PowerPoint",".ppt":"PowerPoint (Legacy)",".odp":"OpenDocument Presentation"},xj={".docx":"\uD83D\uDCDD",".doc":"\uD83D\uDCDD",".odt":"\uD83D\uDCDD",".rtf":"\uD83D\uDCDD",".xlsx":"\uD83D\uDCCA",".xls":"\uD83D\uDCCA",".ods":"\uD83D\uDCCA",".csv":"\uD83D\uDCCA",".pptx":"\uD83D\uDCFD️",".ppt":"\uD83D\uDCFD️",".odp":"\uD83D\uDCFD️"};function F6(_){if(!_)return"";let $=_.lastIndexOf(".");if($<0)return"";return _.slice($).toLowerCase()}function O6(_){return _.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}class H6{container;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Z=j.split("/").pop()||"document",N=F6(j),G=xj[N]||"\uD83D\uDCC4",Y=Ij[N]||"Office Document",q=document.createElement("div");q.style.cssText="width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:var(--bg-primary,#1a1a1a);",q.innerHTML=`
            <div style="text-align:center;max-width:360px;padding:24px;">
                <div style="font-size:56px;margin-bottom:12px;">${G}</div>
                <div style="font-size:14px;font-weight:600;color:var(--text-primary,#e0e0e0);margin-bottom:4px;word-break:break-word;">${O6(Z)}</div>
                <div style="font-size:11px;color:var(--text-secondary,#888);margin-bottom:20px;">${O6(Y)}</div>
                <button id="ov-open-tab" style="padding:8px 20px;background:var(--accent-color,#1d9bf0);color:var(--accent-contrast-text,#fff);
                    border:none;border-radius:5px;font-size:13px;font-weight:500;cursor:pointer;
                    transition:background 0.15s;"
                    onmouseenter="this.style.background='var(--accent-hover,#1a8cd8)'"
                    onmouseleave="this.style.background='var(--accent-color,#1d9bf0)'">
                    Open in Tab
                </button>
            </div>
        `,_.appendChild(q);let L=q.querySelector("#ov-open-tab");if(L)L.addEventListener("click",()=>{let X=new CustomEvent("office-viewer:open-tab",{bubbles:!0,detail:{path:j}});_.dispatchEvent(X)})}getContent(){return}isDirty(){return!1}focus(){}resize(){}dispose(){if(this.disposed)return;this.disposed=!0,this.container.innerHTML=""}}class D6{container;iframe=null;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Z=j.split("/").pop()||"document",N=`/workspace/raw?path=${encodeURIComponent(j)}`,G=`/office-viewer/?url=${encodeURIComponent(N)}&name=${encodeURIComponent(Z)}`;this.iframe=document.createElement("iframe"),this.iframe.src=G,this.iframe.style.cssText="width:100%;height:100%;border:none;background:#1e1e1e;",_.appendChild(this.iframe)}getContent(){return}isDirty(){return!1}focus(){this.iframe?.focus()}resize(){}dispose(){if(this.disposed)return;if(this.disposed=!0,this.iframe)this.iframe.src="about:blank",this.iframe=null;this.container.innerHTML=""}}var s4={id:"office-viewer",label:"Office Viewer",icon:"file-text",capabilities:["readonly","preview"],placement:"tabs",canHandle(_){let $=F6(_?.path);if(!$||!Pj.has($))return!1;return 50},mount(_,$){if($?.mode==="view")return new H6(_,$);return new D6(_,$)}};var Mj=/\.(csv|tsv)$/i;function J6(_){return _.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}class y6{container;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Z=j.split("/").pop()||"table.csv",N=j.toLowerCase().endsWith(".tsv")?"TSV Table":"CSV Table",G=document.createElement("div");G.style.cssText="width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:var(--bg-primary,#1a1a1a);",G.innerHTML=`
            <div style="text-align:center;max-width:360px;padding:24px;">
                <div style="font-size:56px;margin-bottom:12px;">\uD83D\uDCCA</div>
                <div style="font-size:14px;font-weight:600;color:var(--text-primary,#e0e0e0);margin-bottom:4px;word-break:break-word;">${J6(Z)}</div>
                <div style="font-size:11px;color:var(--text-secondary,#888);margin-bottom:20px;">${J6(N)}</div>
                <button id="csv-open-tab" style="padding:8px 20px;background:var(--accent-color,#1d9bf0);color:var(--accent-contrast-text,#fff);
                    border:none;border-radius:5px;font-size:13px;font-weight:500;cursor:pointer;
                    transition:background 0.15s;"
                    onmouseenter="this.style.background='var(--accent-hover,#1a8cd8)'"
                    onmouseleave="this.style.background='var(--accent-color,#1d9bf0)'">
                    Open in Tab
                </button>
            </div>
        `,_.appendChild(G);let Y=G.querySelector("#csv-open-tab");if(Y)Y.addEventListener("click",()=>{let q=new CustomEvent("csv-viewer:open-tab",{bubbles:!0,detail:{path:j}});_.dispatchEvent(q)})}getContent(){return}isDirty(){return!1}focus(){}resize(){}dispose(){if(this.disposed)return;this.disposed=!0,this.container.innerHTML=""}}class E6{container;iframe=null;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Z=`/csv-viewer/?path=${encodeURIComponent(j)}`;this.iframe=document.createElement("iframe"),this.iframe.src=Z,this.iframe.style.cssText="width:100%;height:100%;border:none;background:var(--bg-primary,#000);",_.appendChild(this.iframe)}getContent(){return}isDirty(){return!1}focus(){this.iframe?.focus()}resize(){}dispose(){if(this.disposed)return;if(this.disposed=!0,this.iframe)this.iframe.src="about:blank",this.iframe=null;this.container.innerHTML=""}}var r4={id:"csv-viewer",label:"CSV Viewer",icon:"table",capabilities:["readonly","preview"],placement:"tabs",canHandle(_){let $=_?.path||"";if(!Mj.test($))return!1;return 55},mount(_,$){if($?.mode==="view")return new y6(_,$);return new E6(_,$)}};var bj=/\.pdf$/i;function Cj(_){return _.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}class k6{container;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Z=j.split("/").pop()||"document.pdf",N=document.createElement("div");N.style.cssText="width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:var(--bg-primary,#1a1a1a);",N.innerHTML=`
            <div style="text-align:center;max-width:360px;padding:24px;">
                <div style="font-size:56px;margin-bottom:12px;">\uD83D\uDCC4</div>
                <div style="font-size:14px;font-weight:600;color:var(--text-primary,#e0e0e0);margin-bottom:4px;word-break:break-word;">${Cj(Z)}</div>
                <div style="font-size:11px;color:var(--text-secondary,#888);margin-bottom:20px;">PDF Document</div>
                <button id="pdf-open-tab" style="padding:8px 20px;background:var(--accent-color,#1d9bf0);color:var(--accent-contrast-text,#fff);
                    border:none;border-radius:5px;font-size:13px;font-weight:500;cursor:pointer;
                    transition:background 0.15s;"
                    onmouseenter="this.style.background='var(--accent-hover,#1a8cd8)'"
                    onmouseleave="this.style.background='var(--accent-color,#1d9bf0)'">
                    Open in Tab
                </button>
            </div>
        `,_.appendChild(N);let G=N.querySelector("#pdf-open-tab");if(G)G.addEventListener("click",()=>{let Y=new CustomEvent("pdf-viewer:open-tab",{bubbles:!0,detail:{path:j}});_.dispatchEvent(Y)})}getContent(){return}isDirty(){return!1}focus(){}resize(){}dispose(){if(this.disposed)return;this.disposed=!0,this.container.innerHTML=""}}class A6{container;iframe=null;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Z=`/pdf-viewer/?path=${encodeURIComponent(j)}`;this.iframe=document.createElement("iframe"),this.iframe.src=Z,this.iframe.style.cssText="width:100%;height:100%;border:none;background:#1e1e1e;",_.appendChild(this.iframe)}getContent(){return}isDirty(){return!1}focus(){this.iframe?.focus()}resize(){}dispose(){if(this.disposed)return;if(this.disposed=!0,this.iframe)this.iframe.src="about:blank",this.iframe=null;this.container.innerHTML=""}}var a4={id:"pdf-viewer",label:"PDF Viewer",icon:"file-text",capabilities:["readonly","preview"],placement:"tabs",canHandle(_){let $=_?.path||"";if(!bj.test($))return!1;return 52},mount(_,$){if($?.mode==="view")return new k6(_,$);return new A6(_,$)}};var Tj=/\.(png|jpe?g|gif|webp|bmp|ico|svg)$/i;function t4(_){return _.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}class w6{container;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Z=j.split("/").pop()||"image",N=`/workspace/raw?path=${encodeURIComponent(j)}`,G=document.createElement("div");G.style.cssText="width:100%;height:100%;display:flex;flex-direction:column;background:var(--bg-primary,#1a1a1a);",G.innerHTML=`
            <div style="flex:1;min-height:0;display:flex;align-items:center;justify-content:center;overflow:hidden;padding:16px;">
                <img src="${t4(N)}" alt="${t4(Z)}" style="max-width:100%;max-height:100%;object-fit:contain;border-radius:4px;" />
            </div>
            <div style="display:flex;align-items:center;justify-content:space-between;padding:8px 16px;border-top:1px solid var(--border-color,#333);flex-shrink:0;">
                <div style="font-size:12px;color:var(--text-secondary,#888);overflow:hidden;text-overflow:ellipsis;white-space:nowrap;min-width:0;">${t4(Z)}</div>
                <button id="img-open-tab" style="padding:5px 14px;background:var(--accent-color,#1d9bf0);color:var(--accent-contrast-text,#fff);
                    border:none;border-radius:4px;font-size:12px;font-weight:500;cursor:pointer;flex-shrink:0;
                    transition:background 0.15s;"
                    onmouseenter="this.style.background='var(--accent-hover,#1a8cd8)'"
                    onmouseleave="this.style.background='var(--accent-color,#1d9bf0)'">
                    Open in Tab
                </button>
            </div>
        `,_.appendChild(G);let Y=G.querySelector("#img-open-tab");if(Y)Y.addEventListener("click",()=>{let q=new CustomEvent("image-viewer:open-tab",{bubbles:!0,detail:{path:j}});_.dispatchEvent(q)})}getContent(){return}isDirty(){return!1}focus(){}resize(){}dispose(){if(this.disposed)return;this.disposed=!0,this.container.innerHTML=""}}class P6{container;iframe=null;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Z=`/image-viewer/?path=${encodeURIComponent(j)}`;this.iframe=document.createElement("iframe"),this.iframe.src=Z,this.iframe.style.cssText="width:100%;height:100%;border:none;background:var(--bg-primary,#000);",_.appendChild(this.iframe)}getContent(){return}isDirty(){return!1}focus(){this.iframe?.focus()}resize(){}dispose(){if(this.disposed)return;if(this.disposed=!0,this.iframe)this.iframe.src="about:blank",this.iframe=null;this.container.innerHTML=""}}var e4={id:"image-viewer",label:"Image Viewer",icon:"image",capabilities:["readonly","preview"],placement:"tabs",canHandle(_){let $=_?.path||"";if(!Tj.test($))return!1;return 48},mount(_,$){if($?.mode==="view")return new w6(_,$);return new P6(_,$)}};var fj=/\.(mp4|m4v|mov|webm|ogv)$/i;function Sj(_){return _.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}class I6{container;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Z=j.split("/").pop()||"video.mp4",N=document.createElement("div");N.style.cssText="width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:var(--bg-primary,#1a1a1a);",N.innerHTML=`
            <div style="text-align:center;max-width:360px;padding:24px;">
                <div style="font-size:56px;margin-bottom:12px;">\uD83C\uDFAC</div>
                <div style="font-size:14px;font-weight:600;color:var(--text-primary,#e0e0e0);margin-bottom:4px;word-break:break-word;">${Sj(Z)}</div>
                <div style="font-size:11px;color:var(--text-secondary,#888);margin-bottom:20px;">Video File</div>
                <button id="video-open-tab" style="padding:8px 20px;background:var(--accent-color,#1d9bf0);color:var(--accent-contrast-text,#fff);
                    border:none;border-radius:5px;font-size:13px;font-weight:500;cursor:pointer;
                    transition:background 0.15s;"
                    onmouseenter="this.style.background='var(--accent-hover,#1a8cd8)'"
                    onmouseleave="this.style.background='var(--accent-color,#1d9bf0)'">
                    Open in Tab
                </button>
            </div>
        `,_.appendChild(N);let G=N.querySelector("#video-open-tab");if(G)G.addEventListener("click",()=>{let Y=new CustomEvent("video-viewer:open-tab",{bubbles:!0,detail:{path:j}});_.dispatchEvent(Y)})}getContent(){return}isDirty(){return!1}focus(){}resize(){}dispose(){if(this.disposed)return;this.disposed=!0,this.container.innerHTML=""}}class x6{container;iframe=null;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Z=`/video-viewer/?path=${encodeURIComponent(j)}`;this.iframe=document.createElement("iframe"),this.iframe.src=Z,this.iframe.style.cssText="width:100%;height:100%;border:none;background:#111;",_.appendChild(this.iframe)}getContent(){return}isDirty(){return!1}focus(){this.iframe?.focus()}resize(){}dispose(){if(this.disposed)return;if(this.disposed=!0,this.iframe)this.iframe.src="about:blank",this.iframe=null;this.container.innerHTML=""}}var _3={id:"video-viewer",label:"Video Viewer",icon:"play-circle",capabilities:["readonly","preview"],placement:"tabs",canHandle(_){let $=_?.path||"";if(!fj.test($))return!1;return 54},mount(_,$){if($?.mode==="view")return new I6(_,$);return new x6(_,$)}};function Rj(_){if(!_)return!1;let $=_.toLowerCase();return $.endsWith(".drawio")||$.endsWith(".drawio.xml")||$.endsWith(".drawio.svg")||$.endsWith(".drawio.png")}function vj(_){return _.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}var $3='<mxfile host="app.diagrams.net"><diagram id="page-1" name="Page-1"><mxGraphModel dx="1260" dy="720" grid="1" gridSize="10" guides="1" tooltips="1" connect="1" arrows="1" fold="1" page="1" pageScale="1" pageWidth="850" pageHeight="1100" math="0" shadow="0"><root><mxCell id="0"/><mxCell id="1" parent="0"/></root></mxGraphModel></diagram></mxfile>';function M6(_){let $=String(_||"").trim();return $?$:$3}function uj(_){let $=String(_||"").toLowerCase();if($.endsWith(".drawio.svg")||$.endsWith(".svg"))return"xmlsvg";if($.endsWith(".drawio.png")||$.endsWith(".png"))return"xmlpng";return"xml"}function mj(_){let $="",j=32768;for(let Z=0;Z<_.length;Z+=j)$+=String.fromCharCode(..._.subarray(Z,Z+j));return btoa($)}function gj(_,$="*"){try{let j=(G)=>{let Y=_.parent||_.opener;if(!Y)return!1;return Y.postMessage(JSON.stringify({event:"workspace-export",...G}),$),!0},Z=_.EditorUi;if(Z?.prototype&&!Z.prototype.__piclawWorkspaceSavePatched){let G=Z.prototype.saveData;Z.prototype.saveData=function(Y,q,L,X,Q,V){try{if(Y&&L!=null&&j({filename:Y,format:q,data:L,mimeType:X,base64Encoded:Boolean(Q),defaultMode:V}))return}catch(H){console.warn("[drawio-pane] saveData intercept failed, falling back to native save",H)}return G.apply(this,arguments)},Z.prototype.__piclawWorkspaceSavePatched=!0}let N=_.App;if(N?.prototype&&!N.prototype.__piclawExportPatched){let G=N.prototype.exportFile;N.prototype.exportFile=function(Y,q,L,X,Q,V){try{if(q&&j({filename:q,data:Y,mimeType:L,base64Encoded:Boolean(X),mode:Q,folderId:V}))return}catch(H){console.warn("[drawio-pane] export intercept failed, falling back to native export",H)}return G.apply(this,arguments)},N.prototype.__piclawExportPatched=!0}return Boolean(Z?.prototype&&Z.prototype.__piclawWorkspaceSavePatched||N?.prototype&&N.prototype.__piclawExportPatched)}catch{return!1}}async function b6(_,$){let j=new Uint8Array(await _.arrayBuffer());return`data:${_.headers.get("Content-Type")||$};base64,${mj(j)}`}class C6{container;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Z=j.split("/").pop()||"diagram.drawio",N=document.createElement("div");N.style.cssText="width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:var(--bg-primary,#1a1a1a);",N.innerHTML=`
            <div style="text-align:center;max-width:360px;padding:24px;">
                <div style="font-size:56px;margin-bottom:12px;">\uD83D\uDCD0</div>
                <div style="font-size:14px;font-weight:600;color:var(--text-primary,#e0e0e0);margin-bottom:4px;word-break:break-word;">${vj(Z)}</div>
                <div style="font-size:11px;color:var(--text-secondary,#888);margin-bottom:20px;">Draw.io Diagram</div>
                <button id="drawio-open-tab" style="padding:8px 20px;background:var(--accent-color,#1d9bf0);color:var(--accent-contrast-text,#fff);
                    border:none;border-radius:5px;font-size:13px;font-weight:500;cursor:pointer;
                    transition:background 0.15s;"
                    onmouseenter="this.style.background='var(--accent-hover,#1a8cd8)'"
                    onmouseleave="this.style.background='var(--accent-color,#1d9bf0)'">
                    Edit in Tab
                </button>
            </div>
        `,_.appendChild(N);let G=N.querySelector("#drawio-open-tab");if(G)G.addEventListener("click",()=>{let Y=new CustomEvent("drawio:open-tab",{bubbles:!0,detail:{path:j}});_.dispatchEvent(Y)})}getContent(){return}isDirty(){return!1}focus(){}resize(){}dispose(){if(this.disposed)return;this.disposed=!0,this.container.innerHTML=""}}class T6{container;iframe=null;overlay=null;disposed=!1;filePath;fileName;format;xmlData="";fileLoaded=!1;editorReady=!1;loadSent=!1;saveChain=Promise.resolve();onMessageBound;constructor(_,$){this.container=_,this.filePath=$.path||"",this.fileName=this.filePath.split("/").pop()||"diagram.drawio",this.format=uj(this.filePath),this.onMessageBound=this.onMessage.bind(this);let j=document.createElement("div");j.style.cssText="position:relative;width:100%;height:100%;background:#1e1e1e;",this.overlay=document.createElement("div"),this.overlay.style.cssText="position:absolute;inset:0;display:flex;align-items:center;justify-content:center;color:#999;font:14px system-ui,sans-serif;z-index:1;pointer-events:none;",this.overlay.textContent="Loading draw.io editor…",j.appendChild(this.overlay);let N=`/drawio/index.html?embed=1&proto=json&spin=1&modified=0&noSaveBtn=1&noExitBtn=1&saveAndExit=0&ui=dark&dark=${window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?"1":"0"}`;this.iframe=document.createElement("iframe"),this.iframe.src=N,this.iframe.style.cssText="width:100%;height:100%;border:none;background:#1e1e1e;position:relative;z-index:0;",this.iframe.addEventListener("load",()=>{let G=()=>{if(!this.iframe?.contentWindow||this.disposed)return;if(gj(this.iframe.contentWindow))return;setTimeout(G,250)};G()}),j.appendChild(this.iframe),_.appendChild(j),window.addEventListener("message",this.onMessageBound),this.loadFile()}async loadFile(){if(!this.filePath){this.xmlData=$3,this.fileLoaded=!0,this.trySendLoad();return}try{let _=await fetch(`/workspace/raw?path=${encodeURIComponent(this.filePath)}`);if(_.ok)if(this.format==="xmlsvg")this.xmlData=await b6(_,"image/svg+xml");else if(this.format==="xmlpng")this.xmlData=await b6(_,"image/png");else this.xmlData=M6(await _.text());else if(_.status===404)this.xmlData=$3;else throw Error(`HTTP ${_.status}`);this.fileLoaded=!0,this.trySendLoad()}catch(_){if(this.overlay)this.overlay.textContent=`Failed to load: ${_ instanceof Error?_.message:String(_)}`}}trySendLoad(){if(this.disposed||this.loadSent||!this.editorReady||!this.fileLoaded||!this.iframe?.contentWindow)return;if(this.loadSent=!0,this.iframe.contentWindow.postMessage(JSON.stringify({action:"load",xml:this.format==="xml"?M6(this.xmlData):this.xmlData,autosave:1,saveAndExit:"0",noSaveBtn:"1",noExitBtn:"1",title:this.fileName}),"*"),this.overlay)this.overlay.style.display="none"}queueSave(_,$){if(!this.filePath)return;this.saveChain=this.saveChain.then(async()=>{let j=await fetch("/drawio/save",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({path:this.filePath,format:_.format||this.format,xml:_.xml,data:_.data,mimeType:_.mimeType,filename:_.filename,base64Encoded:_.base64Encoded})});if(!j.ok)throw Error(`HTTP ${j.status}`);if($&&this.iframe?.contentWindow)this.iframe.contentWindow.postMessage(JSON.stringify({action:"status",message:"Saved",modified:!1}),"*")}).catch((j)=>{if(console.error("[drawio-pane] save failed:",j),this.overlay)this.overlay.style.display="flex",this.overlay.textContent=`Save failed: ${j instanceof Error?j.message:String(j)}`})}onMessage(_){if(this.disposed||_.source!==this.iframe?.contentWindow)return;let $;try{$=typeof _.data==="string"?JSON.parse(_.data):_.data}catch{return}switch($?.event){case"init":this.editorReady=!0,this.trySendLoad();break;case"autosave":if(this.format==="xml"){if(typeof $.xml==="string")this.queueSave({xml:$.xml,format:"xml"},!1)}else if(typeof $.xml==="string")this.xmlData=$.xml;break;case"save":if(this.format==="xml"){if(typeof $.xml==="string")this.queueSave({xml:$.xml,format:"xml"},!0)}else if(typeof $.xml==="string"&&this.iframe?.contentWindow)this.xmlData=$.xml,this.iframe.contentWindow.postMessage(JSON.stringify({action:"export",format:this.format,xml:$.xml,spinKey:"export"}),"*");break;case"export":if(typeof $.data==="string")this.queueSave({data:$.data,format:this.format,xml:typeof $.xml==="string"?$.xml:void 0},!0);break;case"workspace-export":if(typeof $.data==="string")this.queueSave({data:$.data,xml:typeof $.xml==="string"?$.xml:void 0,mimeType:typeof $.mimeType==="string"?$.mimeType:void 0,filename:typeof $.filename==="string"?$.filename:void 0,base64Encoded:Boolean($.base64Encoded),format:this.format},!0);break;case"exit":default:break}}getContent(){return}isDirty(){return!1}focus(){this.iframe?.focus()}resize(){}dispose(){if(this.disposed)return;if(this.disposed=!0,window.removeEventListener("message",this.onMessageBound),this.iframe)this.iframe.src="about:blank",this.iframe=null;this.overlay=null,this.container.innerHTML=""}}var j3={id:"drawio-editor",label:"Draw.io Editor",icon:"git-merge",capabilities:["edit","preview"],placement:"tabs",canHandle(_){if(!Rj(_?.path))return!1;return 60},mount(_,$){if($?.mode==="view")return new C6(_,$);return new T6(_,$)}};class f6{tabs=new Map;activeId=null;mruOrder=[];listeners=new Set;onChange(_){return this.listeners.add(_),()=>this.listeners.delete(_)}notify(){let _=this.getTabs(),$=this.activeId;for(let j of this.listeners)try{j(_,$)}catch{}}open(_,$){let j=this.tabs.get(_);if(!j)j={id:_,label:$||_.split("/").pop()||_,path:_,dirty:!1,pinned:!1},this.tabs.set(_,j);return this.activate(_),j}activate(_){if(!this.tabs.has(_))return;this.activeId=_,this.mruOrder=[_,...this.mruOrder.filter(($)=>$!==_)],this.notify()}close(_){if(!this.tabs.get(_))return!1;if(this.tabs.delete(_),this.mruOrder=this.mruOrder.filter((j)=>j!==_),this.activeId===_)this.activeId=this.mruOrder[0]||null;return this.notify(),!0}closeOthers(_){for(let[$,j]of this.tabs)if($!==_&&!j.pinned)this.tabs.delete($),this.mruOrder=this.mruOrder.filter((Z)=>Z!==$);if(this.activeId&&!this.tabs.has(this.activeId))this.activeId=_;this.notify()}closeAll(){for(let[_,$]of this.tabs)if(!$.pinned)this.tabs.delete(_),this.mruOrder=this.mruOrder.filter((j)=>j!==_);if(this.activeId&&!this.tabs.has(this.activeId))this.activeId=this.mruOrder[0]||null;this.notify()}setDirty(_,$){let j=this.tabs.get(_);if(!j||j.dirty===$)return;j.dirty=$,this.notify()}togglePin(_){let $=this.tabs.get(_);if(!$)return;$.pinned=!$.pinned,this.notify()}saveViewState(_,$){let j=this.tabs.get(_);if(j)j.viewState=$}getViewState(_){return this.tabs.get(_)?.viewState}rename(_,$,j){let Z=this.tabs.get(_);if(!Z)return;if(this.tabs.delete(_),Z.id=$,Z.path=$,Z.label=j||$.split("/").pop()||$,this.tabs.set($,Z),this.mruOrder=this.mruOrder.map((N)=>N===_?$:N),this.activeId===_)this.activeId=$;this.notify()}getTabs(){return Array.from(this.tabs.values())}getActiveId(){return this.activeId}getActive(){return this.activeId?this.tabs.get(this.activeId)||null:null}get(_){return this.tabs.get(_)}get size(){return this.tabs.size}hasUnsaved(){for(let _ of this.tabs.values())if(_.dirty)return!0;return!1}getDirtyTabs(){return Array.from(this.tabs.values()).filter((_)=>_.dirty)}nextTab(){let _=this.getTabs();if(_.length<=1)return;let $=_.findIndex((Z)=>Z.id===this.activeId),j=_[($+1)%_.length];this.activate(j.id)}prevTab(){let _=this.getTabs();if(_.length<=1)return;let $=_.findIndex((Z)=>Z.id===this.activeId),j=_[($-1+_.length)%_.length];this.activate(j.id)}mruSwitch(){if(this.mruOrder.length>1)this.activate(this.mruOrder[1])}}var n_=new f6;var C1="workspaceExplorerScale",pj=["compact","default","comfortable"],cj=new Set(pj),hj={compact:{indentPx:14},default:{indentPx:16},comfortable:{indentPx:18}};function S6(_,$="default"){if(typeof _!=="string")return $;let j=_.trim().toLowerCase();return cj.has(j)?j:$}function Z3(){if(typeof window>"u")return{width:0,isTouch:!1};let _=Number(window.innerWidth)||0,$=Boolean(window.matchMedia?.("(pointer: coarse)")?.matches),j=Boolean(window.matchMedia?.("(hover: none)")?.matches),Z=Number(globalThis.navigator?.maxTouchPoints||0)>0;return{width:_,isTouch:$||Z&&j}}function ij(_={}){let $=Math.max(0,Number(_.width)||0);if(Boolean(_.isTouch))return"comfortable";if($>0&&$<1180)return"comfortable";return"default"}function lj(_,$={}){if(Boolean($.isTouch)&&_==="compact")return"default";return _}function N3(_={}){let $=ij(_),j=_.stored?S6(_.stored,$):$;return lj(j,_)}function R6(_){return hj[S6(_)]}var nj=60000,g6=(_)=>{if(!_||!_.name)return!1;if(_.path===".")return!1;return _.name.startsWith(".")};function p6(_,$,j,Z=0,N=[]){if(!j&&g6(_))return N;if(!_)return N;if(N.push({node:_,depth:Z}),_.type==="dir"&&_.children&&$.has(_.path))for(let G of _.children)p6(G,$,j,Z+1,N);return N}function v6(_,$,j){if(!_)return"";let Z=[],N=(G)=>{if(!j&&g6(G))return;if(Z.push(G.type==="dir"?`d:${G.path}`:`f:${G.path}`),G.children&&$?.has(G.path))for(let Y of G.children)N(Y)};return N(_),Z.join("|")}function K3(_,$){if(!$)return null;if(!_)return $;if(_.path!==$.path||_.type!==$.type)return $;let j=Array.isArray(_.children)?_.children:null,Z=Array.isArray($.children)?$.children:null;if(!Z)return _;let N=j?new Map(j.map((q)=>[q?.path,q])):new Map,G=!j||j.length!==Z.length,Y=Z.map((q)=>{let L=K3(N.get(q.path),q);if(L!==N.get(q.path))G=!0;return L});return G?{...$,children:Y}:_}function Y3(_,$,j){if(!_)return _;if(_.path===$)return K3(_,j);if(!Array.isArray(_.children))return _;let Z=!1,N=_.children.map((G)=>{let Y=Y3(G,$,j);if(Y!==G)Z=!0;return Y});return Z?{..._,children:N}:_}var c6=4,G3=14,dj=8,oj=16;function h6(_){if(!_)return 0;if(_.type==="file"){let Z=Math.max(0,Number(_.size)||0);return _.__bytes=Z,Z}let $=Array.isArray(_.children)?_.children:[],j=0;for(let Z of $)j+=h6(Z);return _.__bytes=j,j}function i6(_,$=0){let j=Math.max(0,Number(_?.__bytes??_?.size??0)),Z={name:_?.name||_?.path||".",path:_?.path||".",size:j,children:[]};if(!_||_.type!=="dir"||$>=c6)return Z;let N=Array.isArray(_.children)?_.children:[],G=[];for(let q of N){let L=Math.max(0,Number(q?.__bytes??q?.size??0));if(L<=0)continue;if(q.type==="dir")G.push({kind:"dir",node:q,size:L});else G.push({kind:"file",name:q.name,path:q.path,size:L})}G.sort((q,L)=>L.size-q.size);let Y=G;if(G.length>G3){let q=G.slice(0,G3-1),L=G.slice(G3-1),X=L.reduce((Q,V)=>Q+V.size,0);q.push({kind:"other",name:`+${L.length} more`,path:`${Z.path}/[other]`,size:X}),Y=q}return Z.children=Y.map((q)=>{if(q.kind==="dir")return i6(q.node,$+1);return{name:q.name,path:q.path,size:q.size,children:[]}}),Z}function u6(){if(typeof window>"u"||typeof document>"u")return!1;let{documentElement:_,body:$}=document,j=_?.getAttribute?.("data-theme")?.toLowerCase?.()||"";if(j==="dark")return!0;if(j==="light")return!1;if(_?.classList?.contains("dark")||$?.classList?.contains("dark"))return!0;if(_?.classList?.contains("light")||$?.classList?.contains("light"))return!1;return Boolean(window.matchMedia?.("(prefers-color-scheme: dark)")?.matches)}function l6(_,$,j){let Z=((_+Math.PI/2)*180/Math.PI+360)%360,N=j?Math.max(30,70-$*10):Math.max(34,66-$*8),G=j?Math.min(70,45+$*5):Math.min(60,42+$*4);return`hsl(${Z.toFixed(1)} ${N}% ${G}%)`}function T1(_,$,j,Z){return{x:_+j*Math.cos(Z),y:$+j*Math.sin(Z)}}function W3(_,$,j,Z,N,G){let Y=Math.PI*2-0.0001,q=G-N>Y?N+Y:G,L=T1(_,$,Z,N),X=T1(_,$,Z,q),Q=T1(_,$,j,q),V=T1(_,$,j,N),H=q-N>Math.PI?1:0;return[`M ${L.x.toFixed(3)} ${L.y.toFixed(3)}`,`A ${Z} ${Z} 0 ${H} 1 ${X.x.toFixed(3)} ${X.y.toFixed(3)}`,`L ${Q.x.toFixed(3)} ${Q.y.toFixed(3)}`,`A ${j} ${j} 0 ${H} 0 ${V.x.toFixed(3)} ${V.y.toFixed(3)}`,"Z"].join(" ")}var n6={1:[26,46],2:[48,68],3:[70,90],4:[92,112]};function d6(_,$,j){let Z=[],N=[],G=Math.max(0,Number($)||0),Y=(q,L,X,Q)=>{let V=Array.isArray(q?.children)?q.children:[];if(!V.length)return;let H=Math.max(0,Number(q.size)||0);if(H<=0)return;let P=X-L,T=L;V.forEach((g,f)=>{let w=Math.max(0,Number(g.size)||0);if(w<=0)return;let M=w/H,c=T,y=f===V.length-1?X:T+P*M;if(T=y,y-c<0.003)return;let S=n6[Q];if(S){let o=l6(c,Q,j);if(Z.push({key:g.path,path:g.path,label:g.name,size:w,color:o,depth:Q,startAngle:c,endAngle:y,innerRadius:S[0],outerRadius:S[1],d:W3(120,120,S[0],S[1],c,y)}),Q===1)N.push({key:g.path,name:g.name,size:w,pct:G>0?w/G*100:0,color:o})}if(Q<c6)Y(g,c,y,Q+1)})};return Y(_,-Math.PI/2,Math.PI*3/2,1),{segments:Z,legend:N}}function z3(_,$){if(!_||!$)return null;if(_.path===$)return _;let j=Array.isArray(_.children)?_.children:[];for(let Z of j){let N=z3(Z,$);if(N)return N}return null}function o6(_,$,j,Z){if(!j||j<=0)return{segments:[],legend:[]};let N=n6[1];if(!N)return{segments:[],legend:[]};let G=-Math.PI/2,Y=Math.PI*3/2,q=l6(G,1,Z),X=`${$||"."}/[files]`;return{segments:[{key:X,path:X,label:_,size:j,color:q,depth:1,startAngle:G,endAngle:Y,innerRadius:N[0],outerRadius:N[1],d:W3(120,120,N[0],N[1],G,Y)}],legend:[{key:X,name:_,size:j,pct:100,color:q}]}}function m6(_,$=!1,j=!1){if(!_)return null;let Z=h6(_),N=i6(_,0),G=N.size||Z,{segments:Y,legend:q}=d6(N,G,j);if(!Y.length&&G>0){let L=o6("[files]",N.path,G,j);Y=L.segments,q=L.legend}return{root:N,totalSize:G,segments:Y,legend:q,truncated:$,isDarkTheme:j}}function sj({payload:_}){if(!_)return null;let[$,j]=R(null),[Z,N]=R(_?.root?.path||"."),[G,Y]=R(()=>[_?.root?.path||"."]),[q,L]=R(!1);u(()=>{let i=_?.root?.path||".";N(i),Y([i]),j(null)},[_?.root?.path,_?.totalSize]),u(()=>{if(!Z)return;L(!0);let i=setTimeout(()=>L(!1),180);return()=>clearTimeout(i)},[Z]);let X=S_(()=>{return z3(_.root,Z)||_.root},[_?.root,Z]),Q=X?.size||_.totalSize||0,{segments:V,legend:H}=S_(()=>{let i=d6(X,Q,_.isDarkTheme);if(i.segments.length>0)return i;if(Q<=0)return i;let W_=X?.children?.length?"Total":"[files]";return o6(W_,X?.path||_?.root?.path||".",Q,_.isDarkTheme)},[X,Q,_.isDarkTheme,_?.root?.path]),[P,T]=R(V),g=k(new Map),f=k(0);u(()=>{let i=g.current,W_=new Map(V.map((Z_)=>[Z_.key,Z_])),d_=performance.now(),g_=220,l=(Z_)=>{let t=Math.min(1,(Z_-d_)/220),q_=t*(2-t),Y_=V.map((X_)=>{let N_=i.get(X_.key)||{startAngle:X_.startAngle,endAngle:X_.startAngle,innerRadius:X_.innerRadius,outerRadius:X_.innerRadius},v_=(K0,K_)=>K0+(K_-K0)*q_,I_=v_(N_.startAngle,X_.startAngle),J_=v_(N_.endAngle,X_.endAngle),y_=v_(N_.innerRadius,X_.innerRadius),z0=v_(N_.outerRadius,X_.outerRadius);return{...X_,d:W3(120,120,y_,z0,I_,J_)}});if(T(Y_),t<1)f.current=requestAnimationFrame(l)};if(f.current)cancelAnimationFrame(f.current);return f.current=requestAnimationFrame(l),g.current=W_,()=>{if(f.current)cancelAnimationFrame(f.current)}},[V]);let w=P.length?P:V,M=Q>0?L$(Q):"0 B",c=X?.name||"",S=(c&&c!=="."?c:"Total")||"Total",o=M,a=G.length>1,n=(i)=>{if(!i?.path)return;let W_=z3(_.root,i.path);if(!W_||!Array.isArray(W_.children)||W_.children.length===0)return;Y((d_)=>[...d_,W_.path]),N(W_.path),j(null)},$_=()=>{if(!a)return;Y((i)=>{let W_=i.slice(0,-1);return N(W_[W_.length-1]||_?.root?.path||"."),W_}),j(null)};return B`
        <div class="workspace-folder-starburst">
            <svg viewBox="0 0 240 240" class=${`workspace-folder-starburst-svg${q?" is-zooming":""}`} role="img"
                aria-label=${`Folder sizes for ${X?.path||_?.root?.path||"."}`}
                data-segments=${w.length}
                data-base-size=${Q}>
                ${w.map((i)=>B`
                    <path
                        key=${i.key}
                        d=${i.d}
                        fill=${i.color}
                        stroke="var(--bg-primary)"
                        stroke-width="1"
                        class=${`workspace-folder-starburst-segment${$?.key===i.key?" is-hovered":""}`}
                        onMouseEnter=${()=>j(i)}
                        onMouseLeave=${()=>j(null)}
                        onTouchStart=${()=>j(i)}
                        onTouchEnd=${()=>j(null)}
                        onClick=${()=>n(i)}
                    >
                        <title>${i.label} — ${L$(i.size)}</title>
                    </path>
                `)}
                <g
                    class=${`workspace-folder-starburst-center-hit${a?" is-drill":""}`}
                    onClick=${$_}
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
                    <text x="120" y="114" text-anchor="middle" class="workspace-folder-starburst-total-label">${S}</text>
                    <text x="120" y="130" text-anchor="middle" class="workspace-folder-starburst-total-value">${o}</text>
                </g>
            </svg>
            ${H.length>0&&B`
                <div class="workspace-folder-starburst-legend">
                    ${H.slice(0,8).map((i)=>B`
                        <div key=${i.key} class="workspace-folder-starburst-legend-item">
                            <span class="workspace-folder-starburst-swatch" style=${`background:${i.color}`}></span>
                            <span class="workspace-folder-starburst-name" title=${i.name}>${i.name}</span>
                            <span class="workspace-folder-starburst-size">${L$(i.size)}</span>
                            <span class="workspace-folder-starburst-pct">${i.pct.toFixed(1)}%</span>
                        </div>
                    `)}
                </div>
            `}
            ${_.truncated&&B`
                <div class="workspace-folder-starburst-note">Preview is truncated by tree depth/entry limits.</div>
            `}
        </div>
    `}function rj({mediaId:_}){let[$,j]=R(null);if(u(()=>{if(!_)return;E2(_).then(j).catch(()=>{})},[_]),!$)return null;let Z=$.filename||"file",N=$.metadata?.size?L$($.metadata.size):"";return B`
        <a href=${X$(_)} download=${Z} class="file-attachment"
            onClick=${(G)=>G.stopPropagation()}>
            <svg class="file-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                <polyline points="14 2 14 8 20 8"/>
                <line x1="16" y1="13" x2="8" y2="13"/>
                <line x1="16" y1="17" x2="8" y2="17"/>
                <polyline points="10 9 9 9 8 9"/>
            </svg>
            <div class="file-info">
                <span class="file-name">${Z}</span>
                ${N&&B`<span class="file-size">${N}</span>`}
            </div>
            <svg class="download-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                <polyline points="7 10 12 15 17 10"/>
                <line x1="12" y1="15" x2="12" y2="3"/>
            </svg>
        </a>
    `}function s6({onFileSelect:_,visible:$=!0,active:j=void 0,onOpenEditor:Z,onOpenTerminalTab:N,onToggleTerminal:G,terminalVisible:Y=!1}){let[q,L]=R(null),[X,Q]=R(new Set(["."])),[V,H]=R(null),[P,T]=R(null),[g,f]=R(""),[w,M]=R(null),[c,y]=R(null),[S,o]=R(!0),[a,n]=R(!1),[$_,i]=R(null),[W_,d_]=R(()=>k2("workspaceShowHidden",!1)),[g_,l]=R(!1),[Z_,t]=R(null),[q_,Y_]=R(null),[X_,Q_]=R(null),[N_,v_]=R(!1),[I_,J_]=R(null),[y_,z0]=R(()=>u6()),[K0,K_]=R(()=>N3({stored:t0(C1),...Z3()})),[__,O_]=R(!1),j_=k(X),F_=k(""),x_=k(null),a_=k(0),p_=k(new Set),o_=k(null),c_=k(new Map),h_=k(_),A_=k(Z),E_=k(null),u_=k(null),W0=k(null),P0=k(null),M_=k(null),y0=k(null),j0=k("."),b_=k(null),Z0=k({path:null,dragging:!1,startX:0,startY:0}),t_=k({path:null,dragging:!1,startX:0,startY:0}),$0=k({path:null,timer:0}),N0=k(!1),C_=k(0),O0=k(new Map),T0=k(null),m_=k(null),e_=k(null),f0=k(null),w_=k(null),C=k(null),r=k(W_),B_=k($),P_=k(j??$),s_=k(0),F0=k(X_),T_=k(g_),S0=k(Z_),_$=k(null),$$=k({x:0,y:0}),b0=k(0),x$=k(null),H0=k(V),h0=k(P),i0=k(null),R0=k(null),j$=k(w);h_.current=_,A_.current=Z,u(()=>{j_.current=X},[X]),u(()=>{r.current=W_},[W_]),u(()=>{B_.current=$},[$]),u(()=>{P_.current=j??$},[j,$]),u(()=>{F0.current=X_},[X_]),u(()=>{if(typeof window>"u")return;let U=()=>{K_(N3({stored:t0(C1),...Z3()}))};U();let J=()=>U(),I=()=>U(),z=(v)=>{if(!v||v.key===null||v.key===C1)U()};window.addEventListener("resize",J),window.addEventListener("focus",I),window.addEventListener("storage",z);let O=window.matchMedia?.("(pointer: coarse)"),D=window.matchMedia?.("(hover: none)"),b=(v,s)=>{if(!v)return;if(v.addEventListener)v.addEventListener("change",s);else if(v.addListener)v.addListener(s)},p=(v,s)=>{if(!v)return;if(v.removeEventListener)v.removeEventListener("change",s);else if(v.removeListener)v.removeListener(s)};return b(O,J),b(D,J),()=>{window.removeEventListener("resize",J),window.removeEventListener("focus",I),window.removeEventListener("storage",z),p(O,J),p(D,J)}},[]),u(()=>{let U=(J)=>{let I=J?.detail?.path;if(!I)return;let z=I.split("/"),O=[];for(let D=1;D<z.length;D++)O.push(z.slice(0,D).join("/"));if(O.length)Q((D)=>{let b=new Set(D);b.add(".");for(let p of O)b.add(p);return b});H(I),requestAnimationFrame(()=>{let D=document.querySelector(`[data-path="${CSS.escape(I)}"]`);if(D)D.scrollIntoView({block:"nearest",behavior:"smooth"})})};return window.addEventListener("workspace-reveal-path",U),()=>window.removeEventListener("workspace-reveal-path",U)},[]),u(()=>{T_.current=g_},[g_]),u(()=>{S0.current=Z_},[Z_]),u(()=>{H0.current=V},[V]),u(()=>{h0.current=P},[P]),u(()=>{j$.current=w},[w]),u(()=>{if(typeof window>"u"||typeof document>"u")return;let U=()=>z0(u6());U();let J=window.matchMedia?.("(prefers-color-scheme: dark)"),I=()=>U();if(J?.addEventListener)J.addEventListener("change",I);else if(J?.addListener)J.addListener(I);let z=typeof MutationObserver<"u"?new MutationObserver(()=>U()):null;if(z?.observe(document.documentElement,{attributes:!0,attributeFilter:["class","data-theme"]}),document.body)z?.observe(document.body,{attributes:!0,attributeFilter:["class","data-theme"]});return()=>{if(J?.removeEventListener)J.removeEventListener("change",I);else if(J?.removeListener)J.removeListener(I);z?.disconnect()}},[]),u(()=>{if(!P)return;let U=M_.current;if(!U)return;let J=requestAnimationFrame(()=>{try{U.focus(),U.select()}catch{}});return()=>cancelAnimationFrame(J)},[P]),u(()=>{if(!__)return;let U=(I)=>{let z=I?.target;if(!(z instanceof Element))return;if(w_.current?.contains(z))return;if(C.current?.contains(z))return;O_(!1)},J=(I)=>{if(I?.key==="Escape")O_(!1),C.current?.focus?.()};return document.addEventListener("mousedown",U),document.addEventListener("touchstart",U,{passive:!0}),document.addEventListener("keydown",J),()=>{document.removeEventListener("mousedown",U),document.removeEventListener("touchstart",U),document.removeEventListener("keydown",J)}},[__]);let V2=async(U)=>{n(!0),M(null),y(null);try{let J=await U4(U,20000);M(J)}catch(J){M({error:J.message||"Failed to load preview"})}finally{n(!1)}};E_.current=V2;let L2=async()=>{if(!B_.current)return;try{let U=await l2("",1,r.current),J=v6(U.root,j_.current,r.current);if(J===F_.current){o(!1);return}if(F_.current=J,x_.current=U.root,!a_.current)a_.current=requestAnimationFrame(()=>{a_.current=0,L((I)=>K3(I,x_.current)),o(!1)})}catch(U){i(U.message||"Failed to load workspace"),o(!1)}},E0=async(U)=>{if(!U)return;if(p_.current.has(U))return;p_.current.add(U);try{let J=await l2(U,1,r.current);L((I)=>Y3(I,U,J.root))}catch(J){i(J.message||"Failed to load workspace")}finally{p_.current.delete(U)}};u_.current=E0;let D0=x(()=>{let U=V;if(!U)return".";let J=c_.current?.get(U);if(J&&J.type==="dir")return J.path;if(U==="."||!U.includes("/"))return".";let I=U.split("/");return I.pop(),I.join("/")||"."},[V]),G0=x((U)=>{let J=U?.closest?.(".workspace-row");if(!J)return null;let I=J.dataset.path,z=J.dataset.type;if(!I)return null;if(z==="dir")return I;if(I.includes("/")){let O=I.split("/");return O.pop(),O.join("/")||"."}return"."},[]),g0=x((U)=>{return G0(U?.target||null)},[G0]),Y0=x((U)=>{F0.current=U,Q_(U)},[]),I0=x(()=>{let U=$0.current;if(U?.timer)clearTimeout(U.timer);$0.current={path:null,timer:0}},[]),Z$=x((U)=>{if(!U||U==="."){I0();return}let J=c_.current?.get(U);if(!J||J.type!=="dir"){I0();return}if(j_.current?.has(U)){I0();return}if($0.current?.path===U)return;I0();let I=setTimeout(()=>{$0.current={path:null,timer:0},u_.current?.(U),Q((z)=>{let O=new Set(z);return O.add(U),O})},600);$0.current={path:U,timer:I}},[I0]),M$=x((U,J)=>{if($$.current={x:U,y:J},b0.current)return;b0.current=requestAnimationFrame(()=>{b0.current=0;let I=_$.current;if(!I)return;let z=$$.current;I.style.transform=`translate(${z.x+12}px, ${z.y+12}px)`})},[]),s$=x((U)=>{if(!U)return;let I=(c_.current?.get(U)?.name||U.split("/").pop()||U).trim();if(!I)return;Y_({path:U,label:I})},[]),m$=x(()=>{if(Y_(null),b0.current)cancelAnimationFrame(b0.current),b0.current=0;if(_$.current)_$.current.style.transform="translate(-9999px, -9999px)"},[]),r$=x((U)=>{if(!U)return".";let J=c_.current?.get(U);if(J&&J.type==="dir")return J.path;if(U==="."||!U.includes("/"))return".";let I=U.split("/");return I.pop(),I.join("/")||"."},[]),l0=x(()=>{T(null),f("")},[]),a$=x((U)=>{if(!U)return;let I=(c_.current?.get(U)?.name||U.split("/").pop()||U).trim();if(!I||U===".")return;T(U),f(I)},[]),t$=x(async()=>{let U=h0.current;if(!U)return;let J=(g||"").trim();if(!J){l0();return}let I=c_.current?.get(U),z=(I?.name||U.split("/").pop()||U).trim();if(J===z){l0();return}try{let D=(await H4(U,J))?.path||U,b=U.includes("/")?U.split("/").slice(0,-1).join("/")||".":".";if(l0(),i(null),window.dispatchEvent(new CustomEvent("workspace-file-renamed",{detail:{oldPath:U,newPath:D,type:I?.type||"file"}})),I?.type==="dir")Q((p)=>{let v=new Set;for(let s of p)if(s===U)v.add(D);else if(s.startsWith(`${U}/`))v.add(`${D}${s.slice(U.length)}`);else v.add(s);return v});if(H(D),I?.type==="dir")M(null),n(!1),y(null);else E_.current?.(D);u_.current?.(b)}catch(O){i(O?.message||"Failed to rename file")}},[l0,g]),N$=x(async(U)=>{let z=U||".";for(let O=0;O<50;O+=1){let b=`untitled${O===0?"":`-${O}`}.md`;try{let v=(await F4(z,b,""))?.path||(z==="."?b:`${z}/${b}`);if(z&&z!==".")Q((s)=>new Set([...s,z]));H(v),i(null),u_.current?.(z),E_.current?.(v);return}catch(p){if(p?.status===409||p?.code==="file_exists")continue;i(p?.message||"Failed to create file");return}}i("Failed to create file (untitled name already in use).")},[]),B$=x((U)=>{if(U?.stopPropagation?.(),N_)return;let J=r$(H0.current);N$(J)},[N_,r$,N$]);u(()=>{if(typeof window>"u")return;let U=(J)=>{let I=J?.detail?.updates||[];if(!Array.isArray(I)||I.length===0)return;L((p)=>{let v=p;for(let s of I){if(!s?.root)continue;if(!v||s.path==="."||!s.path)v=s.root;else v=Y3(v,s.path,s.root)}if(v)F_.current=v6(v,j_.current,r.current);return o(!1),v});let z=H0.current;if(Boolean(z)&&I.some((p)=>{let v=p?.path||"";if(!v||v===".")return!0;return z===v||z.startsWith(`${v}/`)||v.startsWith(`${z}/`)}))O0.current.clear();if(!z||!j$.current)return;let D=c_.current?.get(z);if(D&&D.type==="dir")return;if(I.some((p)=>{let v=p?.path||"";if(!v||v===".")return!0;return z===v||z.startsWith(`${v}/`)}))E_.current?.(z)};return window.addEventListener("workspace-update",U),()=>window.removeEventListener("workspace-update",U)},[]),o_.current=L2;let n0=k(()=>{if(typeof window>"u")return;let U=window.matchMedia("(min-width: 1024px) and (orientation: landscape)"),J=P_.current??B_.current,I=document.visibilityState!=="hidden"&&(J||U.matches&&B_.current);n2(I,r.current).catch(()=>{})}).current,X0=k(0),i_=k(()=>{if(X0.current)clearTimeout(X0.current);X0.current=setTimeout(()=>{X0.current=0,n0()},250)}).current;u(()=>{if(B_.current)o_.current?.();i_()},[$,j]),u(()=>{o_.current(),n0();let U=setInterval(()=>o_.current(),nj),J=A2("previewHeight",null),I=Number.isFinite(J)?Math.min(Math.max(J,80),600):280;if(C_.current=I,W0.current)W0.current.style.setProperty("--preview-height",`${I}px`);let z=window.matchMedia("(min-width: 1024px) and (orientation: landscape)"),O=()=>i_();if(z.addEventListener)z.addEventListener("change",O);else if(z.addListener)z.addListener(O);return document.addEventListener("visibilitychange",O),()=>{if(clearInterval(U),a_.current)cancelAnimationFrame(a_.current),a_.current=0;if(z.removeEventListener)z.removeEventListener("change",O);else if(z.removeListener)z.removeListener(O);if(document.removeEventListener("visibilitychange",O),X0.current)clearTimeout(X0.current),X0.current=0;if(b_.current)clearTimeout(b_.current),b_.current=null;n2(!1,r.current).catch(()=>{})}},[]);let U$=S_(()=>p6(q,X,W_),[q,X,W_]),J$=S_(()=>new Map(U$.map((U)=>[U.node.path,U.node])),[U$]),g$=S_(()=>R6(K0),[K0]);c_.current=J$;let H_=(V?c_.current.get(V):null)?.type==="dir";u(()=>{if(!V||!H_){J_(null),T0.current=null,m_.current=null;return}let U=V,J=`${W_?"hidden":"visible"}:${V}`,I=O0.current,z=I.get(J);if(z?.root){I.delete(J),I.set(J,z);let b=m6(z.root,Boolean(z.truncated),y_);if(b)T0.current=b,m_.current=V,J_({loading:!1,error:null,payload:b});return}let O=T0.current,D=m_.current;J_({loading:!0,error:null,payload:D===V?O:null}),l2(V,dj,W_).then((b)=>{if(H0.current!==U)return;let p={root:b?.root,truncated:Boolean(b?.truncated)};I.delete(J),I.set(J,p);while(I.size>oj){let s=I.keys().next().value;if(!s)break;I.delete(s)}let v=m6(p.root,p.truncated,y_);T0.current=v,m_.current=V,J_({loading:!1,error:null,payload:v})}).catch((b)=>{if(H0.current!==U)return;J_({loading:!1,error:b?.message||"Failed to load folder size chart",payload:D===V?O:null})})},[V,H_,W_,y_]);let G$=Boolean(w&&w.kind==="text"&&!H_&&(!w.size||w.size<=262144)),y$=G$?"Open in editor":w?.size>262144?"File too large to edit":"File is not editable",b$=Boolean(V&&V!=="."),d0=Boolean(V&&!H_),C$=Boolean(V&&!H_),o0=V&&H_?F1(V,W_):null,v0=x(()=>O_(!1),[]),V0=x(async(U)=>{v0();try{await U?.()}catch{}},[v0]);u(()=>{let U=e_.current;if(f0.current)f0.current.dispose(),f0.current=null;if(!U)return;if(U.innerHTML="",!V||H_||!w||w.error)return;let J={path:V,content:typeof w.text==="string"?w.text:void 0,mtime:w.mtime,size:w.size,preview:w,mode:"view"},I=r_.resolve(J)||r_.get("workspace-preview-default");if(!I)return;let z=I.mount(U,J);return f0.current=z,()=>{if(f0.current===z)z.dispose(),f0.current=null;U.innerHTML=""}},[V,H_,w]);let u0=(U)=>{let J=U?.target;if(J instanceof Element)return J;return J?.parentElement||null},s0=(U)=>{return Boolean(U?.closest?.(".workspace-node-icon, .workspace-label-text"))},C0=k((U)=>{if(R0.current)clearTimeout(R0.current),R0.current=null;let I=u0(U)?.closest?.("[data-path]");if(!I)return;let z=I.dataset.path;if(I.dataset.type==="dir"||!z)return;if(h0.current===z)l0();A_.current?.(z)}).current,p$=k((U)=>{if(N0.current){N0.current=!1;return}let J=u0(U),I=J?.closest?.("[data-path]");if(P0.current?.focus?.(),!I)return;let z=I.dataset.path,O=I.dataset.type,D=Boolean(J?.closest?.(".workspace-caret")),b=Boolean(J?.closest?.("button"))||Boolean(J?.closest?.("a"))||Boolean(J?.closest?.("input")),p=H0.current===z,v=h0.current;if(v){if(v===z)return;l0()}let s=O==="file"&&i0.current===z&&!D&&!b;if(p&&!D&&!b&&z!=="."&&!s){if(R0.current)clearTimeout(R0.current);R0.current=setTimeout(()=>{R0.current=null,a$(z)},350);return}if(O==="dir"){if(i0.current=null,H(z),M(null),y(null),n(!1),!j_.current.has(z))u_.current?.(z);if(p&&!D)return;Q((k0)=>{let U_=new Set(k0);if(U_.has(z))U_.delete(z);else U_.add(z);return U_})}else{i0.current=null,H(z);let L_=c_.current.get(z);if(L_)h_.current?.(L_.path,L_);E_.current?.(z)}}).current,r0=k(()=>{F_.current="",o_.current(),Array.from(j_.current||[]).filter((J)=>J&&J!==".").forEach((J)=>u_.current?.(J))}).current,p0=k(()=>{i0.current=null,H(null),M(null),y(null),n(!1)}).current,c$=k(()=>{d_((U)=>{let J=!U;if(typeof window<"u")l_("workspaceShowHidden",String(J));return r.current=J,n2(!0,J).catch(()=>{}),F_.current="",o_.current?.(),Array.from(j_.current||[]).filter((z)=>z&&z!==".").forEach((z)=>u_.current?.(z)),J})}).current,e$=k((U)=>{if(u0(U)?.closest?.("[data-path]"))return;p0()}).current,T$=x(async(U)=>{if(!U)return;let J=U.split("/").pop()||U;if(!window.confirm(`Delete "${J}"? This cannot be undone.`))return;try{await J4(U);let z=U.includes("/")?U.split("/").slice(0,-1).join("/")||".":".";if(H0.current===U)p0();u_.current?.(z),i(null)}catch(z){M((O)=>({...O||{},error:z.message||"Failed to delete file"}))}},[p0]),J0=x((U)=>{let J=P0.current;if(!J||!U||typeof CSS>"u"||typeof CSS.escape!=="function")return;J.querySelector(`[data-path="${CSS.escape(U)}"]`)?.scrollIntoView?.({block:"nearest"})},[]),O$=x((U)=>{let J=U$;if(!J||J.length===0)return;let I=V?J.findIndex((z)=>z.node.path===V):-1;if(U.key==="ArrowDown"){U.preventDefault();let z=Math.min(I+1,J.length-1),O=J[z];if(!O)return;if(H(O.node.path),O.node.type!=="dir")h_.current?.(O.node.path,O.node),E_.current?.(O.node.path);else M(null),n(!1),y(null);J0(O.node.path);return}if(U.key==="ArrowUp"){U.preventDefault();let z=I<=0?0:I-1,O=J[z];if(!O)return;if(H(O.node.path),O.node.type!=="dir")h_.current?.(O.node.path,O.node),E_.current?.(O.node.path);else M(null),n(!1),y(null);J0(O.node.path);return}if(U.key==="ArrowRight"&&I>=0){let z=J[I];if(z?.node?.type==="dir"&&!X.has(z.node.path))U.preventDefault(),u_.current?.(z.node.path),Q((O)=>new Set([...O,z.node.path]));return}if(U.key==="ArrowLeft"&&I>=0){let z=J[I];if(z?.node?.type==="dir"&&X.has(z.node.path))U.preventDefault(),Q((O)=>{let D=new Set(O);return D.delete(z.node.path),D});return}if(U.key==="Enter"&&I>=0){U.preventDefault();let z=J[I];if(!z)return;let O=z.node.path;if(z.node.type==="dir"){if(!j_.current.has(O))u_.current?.(O);Q((b)=>{let p=new Set(b);if(p.has(O))p.delete(O);else p.add(O);return p}),M(null),y(null),n(!1)}else h_.current?.(O,z.node),E_.current?.(O);return}if((U.key==="Delete"||U.key==="Backspace")&&I>=0){let z=J[I];if(!z||z.node.type==="dir")return;U.preventDefault(),T$(z.node.path);return}if(U.key==="Escape")U.preventDefault(),p0()},[p0,T$,X,U$,J0,V]),E$=x((U)=>{let J=u0(U),I=J?.closest?.(".workspace-row");if(!I)return;let z=I.dataset.type,O=I.dataset.path;if(!O||O===".")return;if(h0.current===O)return;let D=U?.touches?.[0];if(!D)return;if(Z0.current={path:s0(J)?O:null,dragging:!1,startX:D.clientX,startY:D.clientY},z!=="file")return;if(b_.current)clearTimeout(b_.current);b_.current=setTimeout(()=>{if(b_.current=null,Z0.current?.dragging)return;T$(O)},600)},[T$]),k$=x(()=>{if(b_.current)clearTimeout(b_.current),b_.current=null;let U=Z0.current;if(U?.dragging&&U.path){let J=F0.current||D0(),I=x$.current;if(typeof I==="function")I(U.path,J)}Z0.current={path:null,dragging:!1,startX:0,startY:0},s_.current=0,l(!1),t(null),Y0(null),I0(),m$()},[D0,m$,Y0,I0]),f$=x((U)=>{let J=Z0.current,I=U?.touches?.[0];if(!I||!J?.path){if(b_.current)clearTimeout(b_.current),b_.current=null;return}let z=Math.abs(I.clientX-J.startX),O=Math.abs(I.clientY-J.startY),D=z>8||O>8;if(D&&b_.current)clearTimeout(b_.current),b_.current=null;if(!J.dragging&&D)J.dragging=!0,l(!0),t("move"),s$(J.path);if(J.dragging){U.preventDefault(),M$(I.clientX,I.clientY);let b=document.elementFromPoint(I.clientX,I.clientY),p=G0(b)||D0();if(F0.current!==p)Y0(p);Z$(p)}},[G0,D0,s$,M$,Y0,Z$]),h$=k((U)=>{U.preventDefault();let J=W0.current;if(!J)return;let I=U.clientY,z=C_.current||280,O=U.currentTarget;O.classList.add("dragging"),document.body.style.cursor="row-resize",document.body.style.userSelect="none";let D=I,b=(v)=>{D=v.clientY;let s=J.clientHeight-80,L_=Math.min(Math.max(z-(v.clientY-I),80),s);J.style.setProperty("--preview-height",`${L_}px`),C_.current=L_},p=()=>{let v=J.clientHeight-80,s=Math.min(Math.max(z-(D-I),80),v);C_.current=s,O.classList.remove("dragging"),document.body.style.cursor="",document.body.style.userSelect="",l_("previewHeight",String(Math.round(s))),document.removeEventListener("mousemove",b),document.removeEventListener("mouseup",p)};document.addEventListener("mousemove",b),document.addEventListener("mouseup",p)}).current,_2=k((U)=>{U.preventDefault();let J=W0.current;if(!J)return;let I=U.touches[0];if(!I)return;let z=I.clientY,O=C_.current||280,D=U.currentTarget;D.classList.add("dragging"),document.body.style.userSelect="none";let b=(v)=>{let s=v.touches[0];if(!s)return;v.preventDefault();let L_=J.clientHeight-80,k0=Math.min(Math.max(O-(s.clientY-z),80),L_);J.style.setProperty("--preview-height",`${k0}px`),C_.current=k0},p=()=>{D.classList.remove("dragging"),document.body.style.userSelect="",l_("previewHeight",String(Math.round(C_.current||O))),document.removeEventListener("touchmove",b),document.removeEventListener("touchend",p),document.removeEventListener("touchcancel",p)};document.addEventListener("touchmove",b,{passive:!1}),document.addEventListener("touchend",p),document.addEventListener("touchcancel",p)}).current,c0=async()=>{if(!V)return;try{let U=await O4(V);if(U.media_id)y(U.media_id)}catch(U){M((J)=>({...J||{},error:U.message||"Failed to attach"}))}},m0=async()=>{if(!V||H_)return;await T$(V)},F$=(U)=>{return Array.from(U?.dataTransfer?.types||[]).includes("Files")},$2=x((U)=>{if(!F$(U))return;if(U.preventDefault(),s_.current+=1,!T_.current)l(!0);t("upload");let J=g0(U)||D0();Y0(J),Z$(J)},[D0,g0,Y0,Z$]),Y$=x((U)=>{if(!F$(U))return;if(U.preventDefault(),U.dataTransfer)U.dataTransfer.dropEffect="copy";if(!T_.current)l(!0);if(S0.current!=="upload")t("upload");let J=g0(U)||D0();if(F0.current!==J)Y0(J);Z$(J)},[D0,g0,Y0,Z$]),i$=x((U)=>{if(!F$(U))return;if(U.preventDefault(),s_.current=Math.max(0,s_.current-1),s_.current===0)l(!1),t(null),Y0(null),I0()},[Y0,I0]),A$=x(async(U,J=".")=>{let I=Array.from(U||[]);if(I.length===0)return;let z=J&&J!==""?J:".",O=z!=="."?z:"workspace root";v_(!0);try{let D=null;for(let b of I)try{D=await U1(b,z)}catch(p){let v=p?.status,s=p?.code;if(v===409||s==="file_exists"){let L_=b?.name||"file";if(!window.confirm(`"${L_}" already exists in ${O}. Overwrite?`))continue;D=await U1(b,z,{overwrite:!0})}else throw p}if(D?.path)i0.current=D.path,H(D.path),E_.current?.(D.path);u_.current?.(z)}catch(D){i(D.message||"Failed to upload file")}finally{v_(!1)}},[]),S$=x(async(U,J)=>{if(!U)return;let I=c_.current?.get(U);if(!I)return;let z=J&&J!==""?J:".",O=U.includes("/")?U.split("/").slice(0,-1).join("/")||".":".";if(z===O)return;try{let b=(await D4(U,z))?.path||U;if(I.type==="dir")Q((p)=>{let v=new Set;for(let s of p)if(s===U)v.add(b);else if(s.startsWith(`${U}/`))v.add(`${b}${s.slice(U.length)}`);else v.add(s);return v});if(H(b),I.type==="dir")M(null),n(!1),y(null);else E_.current?.(b);u_.current?.(O),u_.current?.(z)}catch(D){i(D?.message||"Failed to move entry")}},[]);x$.current=S$;let j2=x(async(U)=>{if(!F$(U))return;U.preventDefault(),s_.current=0,l(!1),t(null),Q_(null),I0();let J=Array.from(U?.dataTransfer?.files||[]);if(J.length===0)return;let I=F0.current||g0(U)||D0();await A$(J,I)},[D0,g0,A$]),B2=x((U)=>{if(U?.stopPropagation?.(),N_)return;let J=U?.currentTarget?.dataset?.uploadTarget||".";j0.current=J,y0.current?.click()},[N_]),w$=x(()=>{if(N_)return;let U=H0.current,J=U?c_.current?.get(U):null;j0.current=J?.type==="dir"?J.path:".",y0.current?.click()},[N_]),l$=x(()=>{V0(()=>B$(null))},[V0,B$]),Z2=x(()=>{V0(()=>w$())},[V0,w$]),P$=x(()=>{V0(()=>r0())},[V0,r0]),x2=x(()=>{V0(()=>c$())},[V0,c$]),M2=x(()=>{if(!V||!G$)return;V0(()=>A_.current?.(V,w))},[V0,V,G$,w]),V_=x(()=>{if(!V||V===".")return;V0(()=>a$(V))},[V0,V,a$]),U2=x(()=>{if(!V||H_)return;V0(()=>m0())},[V0,V,H_,m0]),b2=x(()=>{if(!V||H_)return;V0(()=>c0())},[V0,V,H_,c0]),C2=x(()=>{if(!o0)return;if(v0(),typeof window<"u")window.open(o0,"_blank","noopener")},[v0,o0]),N2=x(()=>{v0(),N?.()},[v0,N]),T2=x(()=>{v0(),G?.()},[v0,G]),f2=x((U)=>{if(!U||U.button!==0)return;let J=U.currentTarget;if(!J||!J.dataset)return;let I=J.dataset.path;if(!I||I===".")return;if(h0.current===I)return;let z=u0(U);if(z?.closest?.("button, a, input, .workspace-caret"))return;if(!s0(z))return;U.preventDefault(),t_.current={path:I,dragging:!1,startX:U.clientX,startY:U.clientY};let O=(b)=>{let p=t_.current;if(!p?.path)return;let v=Math.abs(b.clientX-p.startX),s=Math.abs(b.clientY-p.startY),L_=v>4||s>4;if(!p.dragging&&L_)p.dragging=!0,N0.current=!0,l(!0),t("move"),s$(p.path),M$(b.clientX,b.clientY),document.body.style.userSelect="none",document.body.style.cursor="grabbing";if(p.dragging){b.preventDefault(),M$(b.clientX,b.clientY);let k0=document.elementFromPoint(b.clientX,b.clientY),U_=G0(k0)||D0();if(F0.current!==U_)Y0(U_);Z$(U_)}},D=()=>{document.removeEventListener("mousemove",O),document.removeEventListener("mouseup",D);let b=t_.current;if(b?.dragging&&b.path){let p=F0.current||D0(),v=x$.current;if(typeof v==="function")v(b.path,p)}t_.current={path:null,dragging:!1,startX:0,startY:0},s_.current=0,l(!1),t(null),Y0(null),I0(),m$(),document.body.style.userSelect="",document.body.style.cursor="",setTimeout(()=>{N0.current=!1},0)};document.addEventListener("mousemove",O),document.addEventListener("mouseup",D)},[G0,D0,s$,M$,m$,Y0,Z$,I0]),S2=x(async(U)=>{let J=Array.from(U?.target?.files||[]);if(J.length===0)return;let I=j0.current||".";if(await A$(J,I),j0.current=".",U?.target)U.target.value=""},[A$]);return B`
        <aside
            class=${`workspace-sidebar${g_?" workspace-drop-active":""}`}
            data-workspace-scale=${K0}
            ref=${W0}
            onDragEnter=${$2}
            onDragOver=${Y$}
            onDragLeave=${i$}
            onDrop=${j2}
        >
            <input type="file" multiple style="display:none" ref=${y0} onChange=${S2} />
            <div class="workspace-header">
                <div class="workspace-header-left">
                    <div class="workspace-menu-wrap">
                        <button
                            ref=${C}
                            class=${`workspace-menu-button${__?" active":""}`}
                            onClick=${(U)=>{U.stopPropagation(),O_((J)=>!J)}}
                            title="Workspace actions"
                            aria-label="Workspace actions"
                            aria-haspopup="menu"
                            aria-expanded=${__?"true":"false"}
                        >
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                <line x1="4" y1="7" x2="20" y2="7" />
                                <line x1="4" y1="12" x2="20" y2="12" />
                                <line x1="4" y1="17" x2="20" y2="17" />
                            </svg>
                        </button>
                        ${__&&B`
                            <div class="workspace-menu-dropdown" ref=${w_} role="menu" aria-label="Workspace options">
                                <button class="workspace-menu-item" role="menuitem" onClick=${l$} disabled=${N_}>New file</button>
                                <button class="workspace-menu-item" role="menuitem" onClick=${Z2} disabled=${N_}>Upload files</button>
                                <button class="workspace-menu-item" role="menuitem" onClick=${P$}>Refresh tree</button>
                                <button class=${`workspace-menu-item${W_?" active":""}`} role="menuitem" onClick=${x2}>
                                    ${W_?"Hide hidden files":"Show hidden files"}
                                </button>

                                ${V&&B`<div class="workspace-menu-separator"></div>`}
                                ${V&&!H_&&B`
                                    <button class="workspace-menu-item" role="menuitem" onClick=${M2} disabled=${!G$}>Open in editor</button>
                                `}
                                ${b$&&B`
                                    <button class="workspace-menu-item" role="menuitem" onClick=${V_}>Rename selected</button>
                                `}
                                ${C$&&B`
                                    <button class="workspace-menu-item" role="menuitem" onClick=${b2}>Download selected file</button>
                                `}
                                ${o0&&B`
                                    <button class="workspace-menu-item" role="menuitem" onClick=${C2}>Download selected folder (zip)</button>
                                `}
                                ${d0&&B`
                                    <button class="workspace-menu-item danger" role="menuitem" onClick=${U2}>Delete selected file</button>
                                `}

                                ${(N||G)&&B`<div class="workspace-menu-separator"></div>`}
                                ${N&&B`
                                    <button class="workspace-menu-item" role="menuitem" onClick=${N2}>
                                        Open terminal in tab
                                    </button>
                                `}
                                ${G&&B`
                                    <button class="workspace-menu-item" role="menuitem" onClick=${T2}>
                                        ${Y?"Hide terminal dock":"Show terminal dock"}
                                    </button>
                                `}
                            </div>
                        `}
                    </div>
                    <span>Workspace</span>
                </div>
                <div class="workspace-header-actions">
                    <button class="workspace-create" onClick=${B$} title="New file" disabled=${N_}>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                            stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                            <line x1="12" y1="5" x2="12" y2="19" />
                            <line x1="5" y1="12" x2="19" y2="12" />
                        </svg>
                    </button>
                    <button class="workspace-refresh" onClick=${r0} title="Refresh">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"
                            stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                            <circle cx="12" cy="12" r="8.5" stroke-dasharray="42 12" stroke-dashoffset="6"
                                transform="rotate(75 12 12)" />
                            <polyline points="21 3 21 9 15 9" />
                        </svg>
                    </button>
                </div>
            </div>
            <div class="workspace-tree" onClick=${e$}>
                ${N_&&B`<div class="workspace-drop-hint">Uploading…</div>`}
                ${S&&B`<div class="workspace-loading">Loading…</div>`}
                ${$_&&B`<div class="workspace-error">${$_}</div>`}
                ${q&&B`
                    <div
                        class="workspace-tree-list"
                        ref=${P0}
                        tabIndex="0"
                        onClick=${p$}
                        onDblClick=${C0}
                        onKeyDown=${O$}
                        onTouchStart=${E$}
                        onTouchEnd=${k$}
                        onTouchMove=${f$}
                        onTouchCancel=${k$}
                    >
                        ${U$.map(({node:U,depth:J})=>{let I=U.type==="dir",z=U.path===V,O=U.path===P,D=I&&X.has(U.path),b=X_&&U.path===X_,p=Array.isArray(U.children)&&U.children.length>0?U.children.length:Number(U.child_count)||0;return B`
                                <div
                                    key=${U.path}
                                    class=${`workspace-row${z?" selected":""}${b?" drop-target":""}`}
                                    style=${{paddingLeft:`${8+J*g$.indentPx}px`}}
                                    data-path=${U.path}
                                    data-type=${U.type}
                                    onMouseDown=${f2}
                                >
                                    <span class="workspace-caret" aria-hidden="true">
                                        ${I?D?B`<svg viewBox="0 0 12 12"><polygon points="1,2 11,2 6,11"/></svg>`:B`<svg viewBox="0 0 12 12"><polygon points="2,1 11,6 2,11"/></svg>`:null}
                                    </span>
                                    <svg class=${`workspace-node-icon${I?" folder":""}`}
                                        viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                        stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                        aria-hidden="true">
                                        ${I?B`<path d="M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>`:B`<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/>`}
                                    </svg>
                                    ${O?B`
                                            <input
                                                class="workspace-rename-input"
                                                ref=${M_}
                                                value=${g}
                                                onInput=${(v)=>f(v?.target?.value||"")}
                                                onKeyDown=${(v)=>{if(v.key==="Enter")v.preventDefault(),t$();else if(v.key==="Escape")v.preventDefault(),l0()}}
                                                onBlur=${l0}
                                                onClick=${(v)=>v.stopPropagation()}
                                            />
                                        `:B`<span class="workspace-label"><span class="workspace-label-text">${U.name}</span></span>`}
                                    ${I&&!D&&p>0&&B`
                                        <span class="workspace-count">${p}</span>
                                    `}
                                    ${I&&B`
                                        <button
                                            class="workspace-folder-upload"
                                            data-upload-target=${U.path}
                                            title="Upload files to this folder"
                                            onClick=${B2}
                                            disabled=${N_}
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
            ${V&&B`
                <div class="workspace-preview-splitter-h" onMouseDown=${h$} onTouchStart=${_2}></div>
                <div class="workspace-preview">
                    <div class="workspace-preview-header">
                        <span class="workspace-preview-title">${V}</span>
                        <div class="workspace-preview-actions">
                            <button class="workspace-create" onClick=${B$} title="New file" disabled=${N_}>
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                    stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                    <line x1="12" y1="5" x2="12" y2="19" />
                                    <line x1="5" y1="12" x2="19" y2="12" />
                                </svg>
                            </button>
                            ${!H_&&B`
                                <button
                                    class="workspace-download workspace-edit"
                                    onClick=${()=>G$&&A_.current?.(V,w)}
                                    title=${y$}
                                    disabled=${!G$}
                                >
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                        stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                        <path d="M12 20h9" />
                                        <path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4Z" />
                                    </svg>
                                </button>
                                <button
                                    class="workspace-download workspace-delete"
                                    onClick=${m0}
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
                            ${H_?B`
                                    <button class="workspace-download" onClick=${w$}
                                        title="Upload files to this folder" disabled=${N_}>
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                            stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                                            <polyline points="7 8 12 3 17 8"/>
                                            <line x1="12" y1="3" x2="12" y2="15"/>
                                        </svg>
                                    </button>
                                    <a class="workspace-download" href=${F1(V,W_)}
                                        title="Download folder as zip" onClick=${(U)=>U.stopPropagation()}>
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                            stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                                            <polyline points="7 10 12 15 17 10"/>
                                            <line x1="12" y1="15" x2="12" y2="3"/>
                                        </svg>
                                    </a>`:B`<button class="workspace-download" onClick=${c0} title="Download">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                        stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                                        <polyline points="7 10 12 15 17 10"/>
                                        <line x1="12" y1="15" x2="12" y2="3"/>
                                    </svg>
                                </button>`}
                        </div>
                    </div>
                    ${a&&B`<div class="workspace-loading">Loading preview…</div>`}
                    ${w?.error&&B`<div class="workspace-error">${w.error}</div>`}
                    ${H_&&B`
                        <div class="workspace-preview-text">Folder selected — create file, upload files, or download as zip.</div>
                        ${I_?.loading&&B`<div class="workspace-loading">Loading folder size preview…</div>`}
                        ${I_?.error&&B`<div class="workspace-error">${I_.error}</div>`}
                        ${I_?.payload&&I_.payload.segments?.length>0&&B`
                            <${sj} payload=${I_.payload} />
                        `}
                        ${I_?.payload&&(!I_.payload.segments||I_.payload.segments.length===0)&&B`
                            <div class="workspace-preview-text">No file size data available for this folder yet.</div>
                        `}
                    `}
                    ${w&&!w.error&&!H_&&B`
                        <div class="workspace-preview-body" ref=${e_}></div>
                    `}
                    ${c&&B`
                        <div class="workspace-download-card">
                            <${rj} mediaId=${c} />
                        </div>
                    `}
                </div>
            `}
            ${q_&&B`
                <div class="workspace-drag-ghost" ref=${_$}>${q_.label}</div>
            `}
        </aside>
    `}var aj=/\.(docx?|xlsx?|pptx?|odt|ods|odp|rtf)$/i,tj=/\.(csv|tsv)$/i,ej=/\.pdf$/i,_Z=/\.(png|jpe?g|gif|webp|bmp|ico|svg)$/i,r6=/\.drawio(\.xml|\.svg|\.png)?$/i;function a6({tabs:_,activeId:$,onActivate:j,onClose:Z,onCloseOthers:N,onCloseAll:G,onTogglePin:Y,onTogglePreview:q,previewTabs:L,onToggleDock:X,dockVisible:Q,onToggleZen:V,zenMode:H}){let[P,T]=R(null),g=k(null);u(()=>{if(!P)return;let y=(S)=>{if(S.type==="keydown"&&S.key!=="Escape")return;T(null)};return document.addEventListener("click",y),document.addEventListener("keydown",y),()=>{document.removeEventListener("click",y),document.removeEventListener("keydown",y)}},[P]),u(()=>{let y=(S)=>{if(S.ctrlKey&&S.key==="Tab"){if(S.preventDefault(),!_.length)return;let o=_.findIndex((a)=>a.id===$);if(S.shiftKey){let a=_[(o-1+_.length)%_.length];j?.(a.id)}else{let a=_[(o+1)%_.length];j?.(a.id)}return}if((S.ctrlKey||S.metaKey)&&S.key==="w"){let o=document.querySelector(".editor-pane");if(o&&o.contains(document.activeElement)){if(S.preventDefault(),$)Z?.($)}}};return document.addEventListener("keydown",y),()=>document.removeEventListener("keydown",y)},[_,$,j,Z]);let f=x((y,S)=>{if(y.button===1){y.preventDefault(),Z?.(S);return}if(y.button===0)j?.(S)},[j,Z]),w=x((y,S)=>{y.preventDefault(),T({id:S,x:y.clientX,y:y.clientY})},[]),M=x((y)=>{y.preventDefault(),y.stopPropagation()},[]),c=x((y,S)=>{y.preventDefault(),y.stopPropagation(),Z?.(S)},[Z]);if(u(()=>{if(!$||!g.current)return;let y=g.current.querySelector(".tab-item.active");if(y)y.scrollIntoView({block:"nearest",inline:"nearest",behavior:"smooth"})},[$]),!_.length)return null;return B`
        <div class="tab-strip" ref=${g} role="tablist">
            ${_.map((y)=>B`
                <div
                    key=${y.id}
                    class=${`tab-item${y.id===$?" active":""}${y.dirty?" dirty":""}${y.pinned?" pinned":""}`}
                    role="tab"
                    aria-selected=${y.id===$}
                    title=${y.path}
                    onMouseDown=${(S)=>f(S,y.id)}
                    onContextMenu=${(S)=>w(S,y.id)}
                >
                    ${y.pinned&&B`
                        <span class="tab-pin-icon" aria-label="Pinned">
                            <svg viewBox="0 0 16 16" width="10" height="10" fill="currentColor">
                                <path d="M4.456.734a1.75 1.75 0 0 1 2.826.504l.613 1.327a3.1 3.1 0 0 0 2.084 1.707l2.454.584c1.332.317 1.8 1.972.832 2.94L11.06 10l3.72 3.72a.75.75 0 1 1-1.06 1.06L10 11.06l-2.204 2.205c-.968.968-2.623.5-2.94-.832l-.584-2.454a3.1 3.1 0 0 0-1.707-2.084l-1.327-.613a1.75 1.75 0 0 1-.504-2.826z"/>
                            </svg>
                        </span>
                    `}
                    <span class="tab-label">${y.label}</span>
                    <button
                        type="button"
                        class="tab-close"
                        onMouseDown=${M}
                        onClick=${(S)=>c(S,y.id)}
                        title=${y.dirty?"Unsaved changes":"Close"}
                        aria-label=${y.dirty?"Unsaved changes":`Close ${y.label}`}
                    >
                        ${y.dirty?B`<span class="tab-dirty-dot" aria-hidden="true"></span>`:B`<svg viewBox="0 0 16 16" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" aria-hidden="true" focusable="false" style=${{pointerEvents:"none"}}>
                                <line x1="4" y1="4" x2="12" y2="12" style=${{pointerEvents:"none"}}/>
                                <line x1="12" y1="4" x2="4" y2="12" style=${{pointerEvents:"none"}}/>
                            </svg>`}
                    </button>
                </div>
            `)}
            ${X&&B`
                <div class="tab-strip-spacer"></div>
                <button
                    class=${`tab-strip-dock-toggle${Q?" active":""}`}
                    onClick=${X}
                    title=${`${Q?"Hide":"Show"} terminal (Ctrl+\`)`}
                    aria-label=${`${Q?"Hide":"Show"} terminal`}
                    aria-pressed=${Q?"true":"false"}
                >
                    <svg viewBox="0 0 16 16" width="14" height="14" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                        <rect x="1.75" y="2.25" width="12.5" height="11.5" rx="2"/>
                        <polyline points="4.5 5.25 7 7.75 4.5 10.25"/>
                        <line x1="8.5" y1="10.25" x2="11.5" y2="10.25"/>
                    </svg>
                </button>
            `}
            ${V&&B`
                <button
                    class=${`tab-strip-zen-toggle${H?" active":""}`}
                    onClick=${V}
                    title=${`${H?"Exit":"Enter"} zen mode (Ctrl+Shift+Z)`}
                    aria-label=${`${H?"Exit":"Enter"} zen mode`}
                    aria-pressed=${H?"true":"false"}
                >
                    <svg viewBox="0 0 16 16" width="14" height="14" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                        ${H?B`<polyline points="4 8 1.5 8 1.5 1.5 14.5 1.5 14.5 8 12 8"/><polyline points="4 8 1.5 8 1.5 14.5 14.5 14.5 14.5 8 12 8"/>`:B`<polyline points="5.5 1.5 1.5 1.5 1.5 5.5"/><polyline points="10.5 1.5 14.5 1.5 14.5 5.5"/><polyline points="5.5 14.5 1.5 14.5 1.5 10.5"/><polyline points="10.5 14.5 14.5 14.5 14.5 10.5"/>`}
                    </svg>
                </button>
            `}
        </div>
        ${P&&B`
            <div class="tab-context-menu" style=${{left:P.x+"px",top:P.y+"px"}}>
                <button onClick=${()=>{Z?.(P.id),T(null)}}>Close</button>
                <button onClick=${()=>{N?.(P.id),T(null)}}>Close Others</button>
                <button onClick=${()=>{G?.(),T(null)}}>Close All</button>
                <hr />
                <button onClick=${()=>{Y?.(P.id),T(null)}}>
                    ${_.find((y)=>y.id===P.id)?.pinned?"Unpin":"Pin"}
                </button>
                ${q&&/\.(md|mdx|markdown)$/i.test(P.id)&&B`
                    <hr />
                    <button onClick=${()=>{q(P.id),T(null)}}>
                        ${L?.has(P.id)?"Hide Preview":"Preview"}
                    </button>
                `}
                ${aj.test(P.id)&&B`
                    <hr />
                    <button onClick=${()=>{let y="/workspace/raw?path="+encodeURIComponent(P.id),S=P.id.split("/").pop()||"document",o="/office-viewer/?url="+encodeURIComponent(y)+"&name="+encodeURIComponent(S);window.open(o,"_blank","noopener"),T(null)}}>Open in New Tab</button>
                `}
                ${tj.test(P.id)&&B`
                    <hr />
                    <button onClick=${()=>{let y="/csv-viewer/?path="+encodeURIComponent(P.id);window.open(y,"_blank","noopener"),T(null)}}>Open in New Tab</button>
                `}
                ${ej.test(P.id)&&B`
                    <hr />
                    <button onClick=${()=>{let y="/workspace/raw?path="+encodeURIComponent(P.id);window.open(y,"_blank","noopener"),T(null)}}>Open in New Tab</button>
                `}
                ${_Z.test(P.id)&&!r6.test(P.id)&&B`
                    <hr />
                    <button onClick=${()=>{let y="/image-viewer/?path="+encodeURIComponent(P.id);window.open(y,"_blank","noopener"),T(null)}}>Open in New Tab</button>
                `}
                ${r6.test(P.id)&&B`
                    <hr />
                    <button onClick=${()=>{let y="/drawio/edit?path="+encodeURIComponent(P.id);window.open(y,"_blank","noopener"),T(null)}}>Open in New Tab</button>
                `}
            </div>
        `}
    `}var $Z=400,q3=60,t6=220,X3="mdPreviewHeight";function jZ(){try{let _=localStorage.getItem(X3),$=_?Number(_):NaN;return Number.isFinite($)&&$>=q3?$:t6}catch{return t6}}function e6({getContent:_,path:$,onClose:j}){let[Z,N]=R(""),[G,Y]=R(jZ),q=k(null),L=k(null),X=k(""),Q=k(_);return Q.current=_,u(()=>{let P=()=>{let g=Q.current?.()||"";if(g===X.current)return;X.current=g;try{let f=e0(g,null,{sanitize:!1});N(f)}catch{N('<p style="color:var(--text-secondary)">Preview unavailable</p>')}};P();let T=setInterval(P,$Z);return()=>clearInterval(T)},[]),u(()=>{if(q.current&&Z)v$(q.current).catch(()=>{})},[Z]),B`
        <div
            class="md-preview-splitter"
            onMouseDown=${(P)=>{P.preventDefault();let T=P.clientY,g=L.current?.offsetHeight||G,f=L.current?.parentElement,w=f?f.offsetHeight*0.7:500,M=P.currentTarget;M.classList.add("dragging"),document.body.style.cursor="row-resize",document.body.style.userSelect="none";let c=(S)=>{let o=Math.min(Math.max(g-(S.clientY-T),q3),w);Y(o)},y=()=>{M.classList.remove("dragging"),document.body.style.cursor="",document.body.style.userSelect="";try{localStorage.setItem(X3,String(Math.round(L.current?.offsetHeight||G)))}catch{}document.removeEventListener("mousemove",c),document.removeEventListener("mouseup",y)};document.addEventListener("mousemove",c),document.addEventListener("mouseup",y)}}
            onTouchStart=${(P)=>{P.preventDefault();let T=P.touches[0];if(!T)return;let g=T.clientY,f=L.current?.offsetHeight||G,w=L.current?.parentElement,M=w?w.offsetHeight*0.7:500,c=P.currentTarget;c.classList.add("dragging"),document.body.style.userSelect="none";let y=(o)=>{let a=o.touches[0];if(!a)return;o.preventDefault();let n=Math.min(Math.max(f-(a.clientY-g),q3),M);Y(n)},S=()=>{c.classList.remove("dragging"),document.body.style.userSelect="";try{localStorage.setItem(X3,String(Math.round(L.current?.offsetHeight||G)))}catch{}document.removeEventListener("touchmove",y),document.removeEventListener("touchend",S),document.removeEventListener("touchcancel",S)};document.addEventListener("touchmove",y,{passive:!1}),document.addEventListener("touchend",S),document.addEventListener("touchcancel",S)}}
        ></div>
        <div class="md-preview-panel" ref=${L} style=${{height:G+"px"}}>
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
                ref=${q}
                dangerouslySetInnerHTML=${{__html:Z}}
            />
        </div>
    `}function _9({handleSseEvent:_,handleConnectionStatusChange:$,loadPosts:j,onWake:Z,chatJid:N}){let G=k(_);G.current=_;let Y=k($);Y.current=$;let q=k(j);q.current=j;let L=k(Z);L.current=Z,u(()=>{q.current();let X=new H1((V,H)=>G.current(V,H),(V)=>Y.current(V),{chatJid:N});X.connect();let Q=()=>{X.reconnectIfNeeded();let V=typeof document<"u"?document:null;if(!V||V.visibilityState==="visible")L.current?.()};return window.addEventListener("focus",Q),document.addEventListener("visibilitychange",Q),()=>{window.removeEventListener("focus",Q),document.removeEventListener("visibilitychange",Q),X.disconnect()}},[N])}function $9(){let[_,$]=R(!1),[j,Z]=R("default"),N=k(!1);u(()=>{let L=k2("notificationsEnabled",!1);if(N.current=L,$(L),typeof Notification<"u")Z(Notification.permission)},[]),u(()=>{N.current=_},[_]);let G=x(()=>{if(typeof Notification>"u")return Promise.resolve("denied");try{let L=Notification.requestPermission();if(L&&typeof L.then==="function")return L;return Promise.resolve(L)}catch{return Promise.resolve("default")}},[]),Y=x(async()=>{if(typeof window>"u"||typeof Notification>"u")return;if(!window.isSecureContext){alert("Notifications require a secure context (HTTPS or installed app).");return}if(Notification.permission==="denied"){Z("denied"),alert("Browser notifications are blocked. Enable them in your browser settings.");return}if(Notification.permission==="default"){let X=await G();if(Z(X||"default"),X!=="granted"){N.current=!1,$(!1),l_("notificationsEnabled","false");return}}let L=!N.current;N.current=L,$(L),l_("notificationsEnabled",String(L))},[G]),q=x((L,X)=>{if(!N.current)return!1;if(typeof Notification>"u")return!1;if(Notification.permission!=="granted")return!1;try{let Q=new Notification(L,{body:X});return Q.onclick=()=>{try{window.focus()}catch{}},!0}catch{return!1}},[]);return{notificationsEnabled:_,notificationPermission:j,toggleNotifications:Y,notify:q}}var $1=(_)=>{let $=new Set;return(_||[]).filter((j)=>{if(!j||$.has(j.id))return!1;return $.add(j.id),!0})};function j9({preserveTimelineScroll:_,preserveTimelineScrollTop:$,chatJid:j=null}){let[Z,N]=R(null),[G,Y]=R(!1),q=k(!1),L=k(null),X=k(!1),Q=k(null),V=k(null),H=k(0);u(()=>{q.current=G},[G]),u(()=>{V.current=Z},[Z]),u(()=>{H.current+=1,V.current=null,Q.current=null,X.current=!1,q.current=!1,N(null),Y(!1)},[j]);let P=x(async(f=null)=>{let w=H.current;try{if(f){let M=await j4(f,50,0,j);if(w!==H.current)return;N(M.posts),Y(!1)}else{let M=await c2(10,null,j);if(w!==H.current)return;N(M.posts),Y(M.has_more)}}catch(M){if(w!==H.current)return;console.error("Failed to load posts:",M)}},[j]),T=x(async()=>{let f=H.current;try{let w=await c2(10,null,j);if(f!==H.current)return;N((M)=>{if(!M||M.length===0)return w.posts;return $1([...w.posts,...M])}),Y((M)=>M||w.has_more)}catch(w){if(f!==H.current)return;console.error("Failed to refresh timeline:",w)}},[j]),g=x(async(f={})=>{let w=H.current,M=V.current;if(!M||M.length===0)return;if(X.current)return;let{preserveScroll:c=!0,preserveMode:y="top",allowRepeat:S=!1}=f,o=($_)=>{if(!c){$_();return}if(y==="top")$($_);else _($_)},n=M.slice().sort(($_,i)=>$_.id-i.id)[0]?.id;if(!Number.isFinite(n))return;if(!S&&Q.current===n)return;X.current=!0,Q.current=n;try{let $_=await c2(10,n,j);if(w!==H.current)return;if($_.posts.length>0)o(()=>{N((i)=>$1([...$_.posts,...i||[]])),Y($_.has_more)});else Y(!1)}catch($_){if(w!==H.current)return;console.error("Failed to load more posts:",$_)}finally{if(w===H.current)X.current=!1}},[j,_,$]);return u(()=>{L.current=g},[g]),{posts:Z,setPosts:N,hasMore:G,setHasMore:Y,hasMoreRef:q,loadPosts:P,refreshTimeline:T,loadMore:g,loadMoreRef:L,loadingMoreRef:X,lastBeforeIdRef:Q}}function Z9(){let[_,$]=R(null),[j,Z]=R({text:"",totalLines:0}),[N,G]=R(""),[Y,q]=R({text:"",totalLines:0}),[L,X]=R(null),[Q,V]=R(null),[H,P]=R(null),T=k(null),g=k(0),f=k(!1),w=k(""),M=k(""),c=k(null),y=k(null),S=k(null),o=k(null),a=k(!1),n=k(!1);return{agentStatus:_,setAgentStatus:$,agentDraft:j,setAgentDraft:Z,agentPlan:N,setAgentPlan:G,agentThought:Y,setAgentThought:q,pendingRequest:L,setPendingRequest:X,currentTurnId:Q,setCurrentTurnId:V,steerQueuedTurnId:H,setSteerQueuedTurnId:P,lastAgentEventRef:T,lastSilenceNoticeRef:g,isAgentRunningRef:f,draftBufferRef:w,thoughtBufferRef:M,pendingRequestRef:c,stalledPostIdRef:y,currentTurnIdRef:S,steerQueuedTurnIdRef:o,thoughtExpandedRef:a,draftExpandedRef:n}}function N9({appShellRef:_,sidebarWidthRef:$,editorWidthRef:j,dockHeightRef:Z}){let N=k((Q)=>{Q.preventDefault();let V=_.current;if(!V)return;let H=Q.clientX,P=$.current||280,T=Q.currentTarget;T.classList.add("dragging"),V.classList.add("sidebar-resizing"),document.body.style.cursor="col-resize",document.body.style.userSelect="none";let g=H,f=(M)=>{g=M.clientX;let c=Math.min(Math.max(P+(M.clientX-H),160),600);V.style.setProperty("--sidebar-width",`${c}px`),$.current=c},w=()=>{let M=Math.min(Math.max(P+(g-H),160),600);$.current=M,T.classList.remove("dragging"),V.classList.remove("sidebar-resizing"),document.body.style.cursor="",document.body.style.userSelect="",l_("sidebarWidth",String(Math.round(M))),document.removeEventListener("mousemove",f),document.removeEventListener("mouseup",w)};document.addEventListener("mousemove",f),document.addEventListener("mouseup",w)}).current,G=k((Q)=>{Q.preventDefault();let V=_.current;if(!V)return;let H=Q.touches[0];if(!H)return;let P=H.clientX,T=$.current||280,g=Q.currentTarget;g.classList.add("dragging"),V.classList.add("sidebar-resizing"),document.body.style.userSelect="none";let f=(M)=>{let c=M.touches[0];if(!c)return;M.preventDefault();let y=Math.min(Math.max(T+(c.clientX-P),160),600);V.style.setProperty("--sidebar-width",`${y}px`),$.current=y},w=()=>{g.classList.remove("dragging"),V.classList.remove("sidebar-resizing"),document.body.style.userSelect="",l_("sidebarWidth",String(Math.round($.current||T))),document.removeEventListener("touchmove",f),document.removeEventListener("touchend",w),document.removeEventListener("touchcancel",w)};document.addEventListener("touchmove",f,{passive:!1}),document.addEventListener("touchend",w),document.addEventListener("touchcancel",w)}).current,Y=k((Q)=>{Q.preventDefault();let V=_.current;if(!V)return;let H=Q.clientX,P=j.current||$.current||280,T=Q.currentTarget;T.classList.add("dragging"),document.body.style.cursor="col-resize",document.body.style.userSelect="none";let g=H,f=(M)=>{g=M.clientX;let c=Math.min(Math.max(P+(M.clientX-H),200),800);V.style.setProperty("--editor-width",`${c}px`),j.current=c},w=()=>{let M=Math.min(Math.max(P+(g-H),200),800);j.current=M,T.classList.remove("dragging"),document.body.style.cursor="",document.body.style.userSelect="",l_("editorWidth",String(Math.round(M))),document.removeEventListener("mousemove",f),document.removeEventListener("mouseup",w)};document.addEventListener("mousemove",f),document.addEventListener("mouseup",w)}).current,q=k((Q)=>{Q.preventDefault();let V=_.current;if(!V)return;let H=Q.touches[0];if(!H)return;let P=H.clientX,T=j.current||$.current||280,g=Q.currentTarget;g.classList.add("dragging"),document.body.style.userSelect="none";let f=(M)=>{let c=M.touches[0];if(!c)return;M.preventDefault();let y=Math.min(Math.max(T+(c.clientX-P),200),800);V.style.setProperty("--editor-width",`${y}px`),j.current=y},w=()=>{g.classList.remove("dragging"),document.body.style.userSelect="",l_("editorWidth",String(Math.round(j.current||T))),document.removeEventListener("touchmove",f),document.removeEventListener("touchend",w),document.removeEventListener("touchcancel",w)};document.addEventListener("touchmove",f,{passive:!1}),document.addEventListener("touchend",w),document.addEventListener("touchcancel",w)}).current,L=k((Q)=>{Q.preventDefault();let V=_.current;if(!V)return;let H=Q.clientY,P=Z?.current||200,T=Q.currentTarget;T.classList.add("dragging"),document.body.style.cursor="row-resize",document.body.style.userSelect="none";let g=H,f=(M)=>{g=M.clientY;let c=Math.min(Math.max(P-(M.clientY-H),100),window.innerHeight*0.5);if(V.style.setProperty("--dock-height",`${c}px`),Z)Z.current=c;window.dispatchEvent(new CustomEvent("dock-resize"))},w=()=>{let M=Math.min(Math.max(P-(g-H),100),window.innerHeight*0.5);if(Z)Z.current=M;T.classList.remove("dragging"),document.body.style.cursor="",document.body.style.userSelect="",l_("dockHeight",String(Math.round(M))),window.dispatchEvent(new CustomEvent("dock-resize")),document.removeEventListener("mousemove",f),document.removeEventListener("mouseup",w)};document.addEventListener("mousemove",f),document.addEventListener("mouseup",w)}).current,X=k((Q)=>{Q.preventDefault();let V=_.current;if(!V)return;let H=Q.touches[0];if(!H)return;let P=H.clientY,T=Z?.current||200,g=Q.currentTarget;g.classList.add("dragging"),document.body.style.userSelect="none";let f=(M)=>{let c=M.touches[0];if(!c)return;M.preventDefault();let y=Math.min(Math.max(T-(c.clientY-P),100),window.innerHeight*0.5);if(V.style.setProperty("--dock-height",`${y}px`),Z)Z.current=y;window.dispatchEvent(new CustomEvent("dock-resize"))},w=()=>{g.classList.remove("dragging"),document.body.style.userSelect="",l_("dockHeight",String(Math.round(Z?.current||T))),window.dispatchEvent(new CustomEvent("dock-resize")),document.removeEventListener("touchmove",f),document.removeEventListener("touchend",w),document.removeEventListener("touchcancel",w)};document.addEventListener("touchmove",f,{passive:!1}),document.addEventListener("touchend",w),document.addEventListener("touchcancel",w)}).current;return{handleSplitterMouseDown:N,handleSplitterTouchStart:G,handleEditorSplitterMouseDown:Y,handleEditorSplitterTouchStart:q,handleDockSplitterMouseDown:L,handleDockSplitterTouchStart:X}}function G9({onTabClosed:_}={}){let $=k(_);$.current=_;let[j,Z]=R(()=>n_.getTabs()),[N,G]=R(()=>n_.getActiveId()),[Y,q]=R(()=>n_.getTabs().length>0);u(()=>{return n_.onChange((y,S)=>{Z(y),G(S),q(y.length>0)})},[]);let[L,X]=R(()=>new Set),Q=x((y)=>{X((S)=>{let o=new Set(S);if(o.has(y))o.delete(y);else o.add(y);return o})},[]),V=x((y)=>{X((S)=>{if(!S.has(y))return S;let o=new Set(S);return o.delete(y),o})},[]),H=x((y,S={})=>{if(!y)return;let o={path:y,mode:"edit"};try{if(!r_.resolve(o)){if(!r_.get("editor")){console.warn(`[openEditor] No pane handler for: ${y}`);return}}}catch(n){console.warn(`[openEditor] paneRegistry.resolve() error for "${y}":`,n)}let a=typeof S?.label==="string"&&S.label.trim()?S.label.trim():void 0;n_.open(y,a)},[]),P=x(()=>{let y=n_.getActiveId();if(y){let S=n_.get(y);if(S?.dirty){if(!window.confirm(`"${S.label}" has unsaved changes. Close anyway?`))return}n_.close(y),V(y),$.current?.(y)}},[V]),T=x((y)=>{let S=n_.get(y);if(S?.dirty){if(!window.confirm(`"${S.label}" has unsaved changes. Close anyway?`))return}n_.close(y),V(y),$.current?.(y)},[V]),g=x((y)=>{n_.activate(y)},[]),f=x((y)=>{let S=n_.getTabs().filter((n)=>n.id!==y&&!n.pinned),o=S.filter((n)=>n.dirty).length;if(o>0){if(!window.confirm(`${o} unsaved tab${o>1?"s":""} will be closed. Continue?`))return}let a=S.map((n)=>n.id);n_.closeOthers(y),a.forEach((n)=>{V(n),$.current?.(n)})},[V]),w=x(()=>{let y=n_.getTabs().filter((a)=>!a.pinned),S=y.filter((a)=>a.dirty).length;if(S>0){if(!window.confirm(`${S} unsaved tab${S>1?"s":""} will be closed. Continue?`))return}let o=y.map((a)=>a.id);n_.closeAll(),o.forEach((a)=>{V(a),$.current?.(a)})},[V]),M=x((y)=>{n_.togglePin(y)},[]),c=x(()=>{let y=n_.getActiveId();if(y)window.dispatchEvent(new CustomEvent("workspace-reveal-path",{detail:{path:y}}))},[]);return u(()=>{let y=(S)=>{let{oldPath:o,newPath:a,type:n}=S.detail||{};if(!o||!a)return;if(n==="dir"){for(let $_ of n_.getTabs())if($_.path===o||$_.path.startsWith(`${o}/`)){let i=`${a}${$_.path.slice(o.length)}`;n_.rename($_.id,i)}}else n_.rename(o,a)};return window.addEventListener("workspace-file-renamed",y),()=>window.removeEventListener("workspace-file-renamed",y)},[]),u(()=>{let y=(S)=>{if(n_.hasUnsaved())S.preventDefault(),S.returnValue=""};return window.addEventListener("beforeunload",y),()=>window.removeEventListener("beforeunload",y)},[]),{editorOpen:Y,tabStripTabs:j,tabStripActiveId:N,previewTabs:L,openEditor:H,closeEditor:P,handleTabClose:T,handleTabActivate:g,handleTabCloseOthers:f,handleTabCloseAll:w,handleTabTogglePin:M,handleTabTogglePreview:Q,revealInExplorer:c}}function V3(_,$){try{if(typeof window>"u")return $;let j=window.__PICLAW_SILENCE||{},Z=`__PICLAW_SILENCE_${_.toUpperCase()}_MS`,N=j[_]??window[Z],G=Number(N);return Number.isFinite(G)?G:$}catch{return $}}var L3=V3("warning",30000),Y9=V3("finalize",120000),Q3=V3("refresh",30000),z9=30000;function K9(_){let $={};return(_?.agents||[]).forEach((j)=>{$[j.id]=j}),$}function W9(){if(/iPad|iPhone/.test(navigator.userAgent))return!0;return navigator.platform==="MacIntel"&&navigator.maxTouchPoints>1}function q9(_=30000){let[,$]=R(0);u(()=>{let j=setInterval(()=>$((Z)=>Z+1),_);return()=>clearInterval(j)},[_])}function B3(_,$=160){let j=String(_||"").replace(/\r\n/g,`
`);if(!j)return 0;return j.split(`
`).reduce((Z,N)=>Z+Math.max(1,Math.ceil(N.length/$)),0)}function X9(_,$){if(typeof _!=="string")return{kind:"ignore"};let j=_.trim();if(!j)return{kind:"toast",title:"No file selected",detail:"Use a valid file path from a file pill.",level:"warning"};if(!$.editorOpen)return{kind:"toast",title:"Editor pane is not open",detail:"Open the editor pane to open files from pills.",level:"warning"};if(/^[a-z][a-z0-9+.-]*:/i.test(j))return{kind:"toast",title:"Cannot open external path from file pill",detail:"Use an in-workspace file path.",level:"warning"};try{if(!$.resolvePane({path:j,mode:"edit"}))return{kind:"toast",title:"No editor available",detail:`No editor can open: ${j}`,level:"warning"}}catch{return{kind:"toast",title:"No editor available",detail:`No editor can open: ${j}`,level:"warning"}}return{kind:"open",path:j}}function q2(_={}){let $=_.window??(typeof window<"u"?window:null),j=_.navigator??(typeof navigator<"u"?navigator:null);if(j&&j.standalone===!0)return!0;if(!$||typeof $.matchMedia!=="function")return!1;return["(display-mode: standalone)","(display-mode: minimal-ui)","(display-mode: fullscreen)"].some((N)=>{try{return Boolean($.matchMedia(N)?.matches)}catch{return!1}})}function U3(_={}){let $=_.window??(typeof window<"u"?window:null),j=_.navigator??(typeof navigator<"u"?navigator:null);if(!$&&!j)return!1;let Z=String(j?.userAgent||""),N=Number(j?.maxTouchPoints||0),G=/Android|webOS|iPhone|iPad|iPod|Mobile|Windows Phone/i.test(Z),Y=(()=>{if(!$||typeof $.matchMedia!=="function")return!1;try{return Boolean($.matchMedia("(pointer: coarse)")?.matches||$.matchMedia("(any-pointer: coarse)")?.matches)}catch{return!1}})();return Boolean(G||N>1||Y)}function V9(_,$={}){if(q2($))return null;if(U3($))return{target:"_blank",features:void 0,mode:"tab"};return{target:ZZ(_),features:"popup=yes,width=900,height=960,resizable=yes,scrollbars=yes",mode:"popup"}}function L9(_,$={}){let j=$.window??(typeof window<"u"?window:null);if(!j||!_)return null;try{return _.features?j.open("about:blank",_.target,_.features):j.open("about:blank",_.target)}catch{return null}}function Q9(_,$={}){if(!_||!_.document)return;try{let j=String($.title||"Opening branch…"),Z=String($.message||"Preparing a new branch window…");_.document.title=j,_.document.body.innerHTML=`
            <div style="font-family: system-ui, sans-serif; padding: 24px; color: #222;">
                <h1 style="font-size: 18px; margin: 0 0 12px;">${j}</h1>
                <p style="margin: 0; line-height: 1.5;">${Z}</p>
            </div>
        `}catch{}}function B9(_,$){if(!_||!$)return;try{if(_.location&&typeof _.location.replace==="function"){_.location.replace(String($));return}_.location=String($)}catch{}}function U9(_){if(!_||typeof _.close!=="function")return;try{_.close()}catch{}}function X2(_,$,j={}){let Z=new URL(String(_||"http://localhost/")),N=String($||"").trim()||"web:default";if(Z.searchParams.set("chat_jid",N),Z.searchParams.delete("branch_loader"),Z.searchParams.delete("branch_source_chat_jid"),j.chatOnly!==!1)Z.searchParams.set("chat_only","1");return Z.toString()}function O9(_,$,j={}){let Z=new URL(String(_||"http://localhost/")),N=String($||"").trim()||"web:default";if(Z.searchParams.set("branch_loader","1"),Z.searchParams.set("branch_source_chat_jid",N),j.chatOnly!==!1)Z.searchParams.set("chat_only","1");return Z.toString()}function ZZ(_){return`piclaw-chat-${String(_||"web:default").trim().toLowerCase().replace(/[^a-z0-9_-]+/g,"-")||"default"}`}function f1(_){let $=_ instanceof Error?_.message:String(_||"").trim(),j=String($||"").trim();if(!j)return"PiClaw could not open a new branch window.";let Z=j.toLowerCase();if(Z.includes("no stable turn boundary"))return"This chat is still in flight and does not yet have a stable turn boundary to fork from.";if(Z.includes("cannot fork a branch while the source chat is still active"))return"This chat is still active. Please wait for the current turn to settle, then try again.";if(Z.includes("cancelled"))return"Branch creation was cancelled before a new chat window could be opened.";if(Z.includes("did not return a chat id"))return"PiClaw created no usable branch id for the new window. Please try again.";if(Z.includes("failed to fork branch")||Z.includes("failed to fork chat branch"))return"PiClaw could not create the new branch. Please try again.";return j}function O3(_){return String(_||"").trim()||"web:default"}function F9({remainingQueueCount:_=0,currentTurnId:$=null,isAgentTurnActive:j=!1}={}){return Number(_||0)<=0&&!$&&!j}function H9(_={}){return q2(_)&&U3(_)}function NZ(_={}){let $=_.window??(typeof window<"u"?window:null),j=Number($?.visualViewport?.height||0);if(Number.isFinite(j)&&j>0)return Math.round(j);let Z=Number($?.innerHeight||0);if(Number.isFinite(Z)&&Z>0)return Math.round(Z);return null}function GZ(_={},$={}){if(!H9(_))return null;let j=_.window??(typeof window<"u"?window:null),Z=_.document??(typeof document<"u"?document:null);if(!j||!Z?.documentElement)return null;let N=NZ({window:j});if(N&&N>0)Z.documentElement.style.setProperty("--app-height",`${N}px`);if($.resetScroll===!0){try{if(typeof j.scrollTo==="function")j.scrollTo(0,0)}catch{}try{if(Z.scrollingElement)Z.scrollingElement.scrollTop=0,Z.scrollingElement.scrollLeft=0;if(Z.documentElement)Z.documentElement.scrollTop=0,Z.documentElement.scrollLeft=0;if(Z.body)Z.body.scrollTop=0,Z.body.scrollLeft=0}catch{}}return N}function D9(_={}){if(!H9(_))return()=>{};let $=_.window??(typeof window<"u"?window:null),j=_.document??(typeof document<"u"?document:null);if(!$||!j)return()=>{};let Z=0,N=new Set,G=()=>{if(Z)$.cancelAnimationFrame?.(Z),Z=0;for(let V of N)$.clearTimeout?.(V);N.clear()},Y=()=>{Z=0,GZ({window:$,document:j})},q=()=>{if(Z)$.cancelAnimationFrame?.(Z);Z=$.requestAnimationFrame?.(Y)??0},L=()=>{q();for(let V of[80,220,420]){let H=$.setTimeout?.(()=>{N.delete(H),q()},V);if(H!=null)N.add(H)}},X=()=>{if(j.visibilityState&&j.visibilityState!=="visible")return;L()},Q=$.visualViewport;return L(),$.addEventListener("focus",L),$.addEventListener("pageshow",L),$.addEventListener("resize",L),$.addEventListener("orientationchange",L),j.addEventListener("visibilitychange",X),j.addEventListener("focusin",L,!0),Q?.addEventListener?.("resize",L),Q?.addEventListener?.("scroll",L),()=>{G(),$.removeEventListener("focus",L),$.removeEventListener("pageshow",L),$.removeEventListener("resize",L),$.removeEventListener("orientationchange",L),j.removeEventListener("visibilitychange",X),j.removeEventListener("focusin",L,!0),Q?.removeEventListener?.("resize",L),Q?.removeEventListener?.("scroll",L)}}function YZ(_,$){if(typeof window<"u")console.warn(`[app] API export missing: ${_}. Using fallback behavior.`);return async()=>$}function Q$(_,$,j){let Z=_?.[$];return typeof Z==="function"?Z:YZ($,j)}var zZ=new Set(["extension_ui_request","extension_ui_timeout","extension_ui_notify","extension_ui_status","extension_ui_working","extension_ui_widget","extension_ui_title","extension_ui_editor_text","extension_ui_error"]);function J9(_){return zZ.has(String(_||"").trim())}function KZ(_){let $=String(_||"").trim();if(!$.startsWith("extension_ui_"))return"piclaw-extension-ui";return`piclaw-extension-ui:${$.slice(13).replace(/_/g,"-")}`}function y9(_,$,j=globalThis.window){if(!j||typeof j.dispatchEvent!=="function"||typeof CustomEvent>"u")return!1;let Z={type:_,payload:$};return j.dispatchEvent(new CustomEvent("piclaw-extension-ui",{detail:Z})),j.dispatchEvent(new CustomEvent(KZ(_),{detail:Z})),!0}var WZ=["(display-mode: standalone)","(display-mode: minimal-ui)","(display-mode: fullscreen)"];function E9(_,$={}){let j=$.window??(typeof window<"u"?window:null),Z=$.navigator??(typeof navigator<"u"?navigator:null);if(!j||typeof _!=="function")return()=>{};let N=()=>{_(q2({window:j,navigator:Z}))};N();let Y=WZ.map((q)=>{try{return j.matchMedia?.(q)??null}catch{return null}}).filter(Boolean).map((q)=>{if(typeof q.addEventListener==="function")return q.addEventListener("change",N),()=>q.removeEventListener("change",N);if(typeof q.addListener==="function")return q.addListener(N),()=>q.removeListener(N);return()=>{}});return j.addEventListener?.("focus",N),j.addEventListener?.("pageshow",N),()=>{for(let q of Y)q();j.removeEventListener?.("focus",N),j.removeEventListener?.("pageshow",N)}}function k9(_,$={}){let j=$.window??(typeof window<"u"?window:null),Z=$.document??(typeof document<"u"?document:null);if(!j||!Z||typeof _!=="function")return()=>{};let N=()=>{if(Z.visibilityState&&Z.visibilityState!=="visible")return;_()};return j.addEventListener?.("focus",N),j.addEventListener?.("pageshow",N),Z.addEventListener?.("visibilitychange",N),()=>{j.removeEventListener?.("focus",N),j.removeEventListener?.("pageshow",N),Z.removeEventListener?.("visibilitychange",N)}}var D3="piclaw_btw_session",qZ=900,XZ="__piclawRenameBranchPromptLock__",A9=()=>{if(typeof window>"u")return null;let _=window,$=XZ,j=_[$];if(j&&typeof j==="object")return j;let Z={inFlight:!1,cooldownUntil:0};return _[$]=Z,Z};function VZ(_){if(_==="root")return"Branch family";if(_==="all")return"All chats";return"Current branch"}function LZ(){let _=t0(D3);if(!_)return null;try{let $=JSON.parse(_);if(!$||typeof $!=="object")return null;let j=typeof $.question==="string"?$.question:"",Z=typeof $.answer==="string"?$.answer:"",N=typeof $.thinking==="string"?$.thinking:"",G=typeof $.error==="string"&&$.error.trim()?$.error:null,Y=$.status==="running"?"error":$.status==="success"||$.status==="error"?$.status:"success";return{question:j,answer:Z,thinking:N,error:Y==="error"?G||"BTW stream interrupted. You can retry.":G,model:null,status:Y}}catch{return null}}var w9=Z4,P9=G4,QZ=z4,I9=V4,x9=L4,M9=K4,F3=Q$(a0,"getAgentContext",null),BZ=Q$(a0,"getAgentModels",{current:null,models:[]}),UZ=Q$(a0,"getActiveChatAgents",{chats:[]}),H3=Q$(a0,"getChatBranches",{chats:[]}),OZ=Q$(a0,"renameChatBranch",null),FZ=Q$(a0,"pruneChatBranch",null),b9=Q$(a0,"restoreChatBranch",null),HZ=Q$(a0,"getAgentQueueState",{count:0}),DZ=Q$(a0,"steerAgentQueueItem",{removed:!1,queued:"steer"}),JZ=Q$(a0,"removeAgentQueueItem",{removed:!1}),yZ=Q$(a0,"streamSidePrompt",null);if(window.marked)marked.setOptions({breaks:!0,gfm:!0});r_.register(m4);r_.register(o4);r_.register(d4);r_.register(s4);r_.register(r4);r_.register(a4);r_.register(e4);r_.register(_3);r_.register(j3);g4();r_.register(i4);r_.register(l4);function EZ({locationParams:_}){let $=S_(()=>{let W=_.get("chat_jid");return W&&W.trim()?W.trim():"web:default"},[_]),j=S_(()=>{let W=(_.get("chat_only")||_.get("chat-only")||"").trim().toLowerCase();return W==="1"||W==="true"||W==="yes"},[_]),Z=S_(()=>{let W=(_.get("branch_loader")||"").trim().toLowerCase();return W==="1"||W==="true"||W==="yes"},[_]),N=S_(()=>{let W=_.get("branch_source_chat_jid");return W&&W.trim()?W.trim():$},[$,_]),[G,Y]=R("disconnected"),[q,L]=R(()=>q2()),[X,Q]=R(null),[V,H]=R(null),[P,T]=R(!1),[g,f]=R("current"),[w,M]=R([]),[c,y]=R([]),[S,o]=R(null),{agentStatus:a,setAgentStatus:n,agentDraft:$_,setAgentDraft:i,agentPlan:W_,setAgentPlan:d_,agentThought:g_,setAgentThought:l,pendingRequest:Z_,setPendingRequest:t,currentTurnId:q_,setCurrentTurnId:Y_,steerQueuedTurnId:X_,setSteerQueuedTurnId:Q_,lastAgentEventRef:N_,lastSilenceNoticeRef:v_,isAgentRunningRef:I_,draftBufferRef:J_,thoughtBufferRef:y_,pendingRequestRef:z0,stalledPostIdRef:K0,currentTurnIdRef:K_,steerQueuedTurnIdRef:__,thoughtExpandedRef:O_,draftExpandedRef:j_}=Z9(),[F_,x_]=R({}),[a_,p_]=R(null),[o_,c_]=R(null),[h_,A_]=R(!1),[E_,u_]=R(null),[W0,P0]=R([]),[M_,y0]=R([]),[j0,b_]=R(null),[Z0,t_]=R([]),[$0,N0]=R(!1),[C_,O0]=R(()=>LZ()),[T0,m_]=R(null),e_=k(new Set),f0=S_(()=>W0.find((W)=>W?.chat_jid===$)||null,[W0,$]),w_=S_(()=>M_.find((W)=>W?.chat_jid===$)||f0||null,[f0,M_,$]),C=w_?.root_chat_jid||f0?.root_chat_jid||$,r=VZ(g),[B_,P_]=R(()=>({status:Z?"running":"idle",message:Z?"Preparing a new chat branch…":""})),s_=Z0.length,F0=k(new Set),T_=k([]),S0=k(new Set),_$=k(0),$$=k({inFlight:!1,lastAttemptAt:0,turnId:null});F0.current=new Set(Z0.map((W)=>W.row_id)),T_.current=Z0;let{notificationsEnabled:b0,notificationPermission:x$,toggleNotifications:H0,notify:h0}=$9(),[i0,R0]=R(()=>new Set),[j$,V2]=R(()=>k2("workspaceOpen",!0)),L2=k(null),{editorOpen:E0,tabStripTabs:D0,tabStripActiveId:G0,previewTabs:g0,openEditor:Y0,closeEditor:I0,handleTabClose:Z$,handleTabActivate:M$,handleTabCloseOthers:s$,handleTabCloseAll:m$,handleTabTogglePin:r$,handleTabTogglePreview:l0,revealInExplorer:a$}=G9({onTabClosed:(W)=>L2.current?.(W)}),t$=k(null),N$=k(null),B$=k(null),n0=k(null),X0=r_.getDockPanes().length>0,[i_,U$]=R(!1),J$=x(()=>U$((W)=>!W),[]),g$=x(()=>{Y0(c4,{label:"Terminal"})},[Y0]),Q2=!j&&(E0||X0&&i_),[H_,G$]=R(!1),y$=k(!1),b$=x(()=>{if(!E0||j)return;if(y$.current=i_,i_)U$(!1);G$(!0)},[E0,j,i_]),d0=x(()=>{if(!H_)return;if(G$(!1),y$.current)U$(!0),y$.current=!1},[H_]),C$=x(()=>{if(H_)d0();else b$()},[H_,b$,d0]);u(()=>{if(H_&&!E0)d0()},[H_,E0,d0]),u(()=>{let W=t$.current;if(!W)return;if(N$.current)N$.current.dispose(),N$.current=null;let K=G0;if(!K)return;let F={path:K,mode:"edit"},E=r_.resolve(F)||r_.get("editor");if(!E){W.innerHTML='<div style="padding:2em;color:var(--text-secondary);text-align:center;">No editor available for this file.</div>';return}let A=E.mount(W,F);N$.current=A,A.onDirtyChange?.((d)=>{n_.setDirty(K,d)}),A.onSaveRequest?.(()=>{}),A.onClose?.(()=>{I0()});let m=n_.getViewState(K);if(m&&typeof A.restoreViewState==="function")requestAnimationFrame(()=>A.restoreViewState(m));if(typeof A.onViewStateChange==="function")A.onViewStateChange((d)=>{n_.saveViewState(K,d)});return requestAnimationFrame(()=>A.focus()),()=>{if(N$.current===A)A.dispose(),N$.current=null}},[G0,I0]),u(()=>{let W=(K)=>{let F=K.detail?.path;if(F)Y0(F)};return document.addEventListener("office-viewer:open-tab",W),document.addEventListener("drawio:open-tab",W),document.addEventListener("csv-viewer:open-tab",W),document.addEventListener("pdf-viewer:open-tab",W),document.addEventListener("image-viewer:open-tab",W),document.addEventListener("video-viewer:open-tab",W),()=>{document.removeEventListener("office-viewer:open-tab",W),document.removeEventListener("drawio:open-tab",W),document.removeEventListener("csv-viewer:open-tab",W),document.removeEventListener("pdf-viewer:open-tab",W),document.removeEventListener("image-viewer:open-tab",W),document.removeEventListener("video-viewer:open-tab",W)}},[Y0]),u(()=>{let W=B$.current;if(n0.current)n0.current.dispose(),n0.current=null;if(!W||!X0||!i_)return;let K=r_.getDockPanes()[0];if(!K){W.innerHTML='<div class="terminal-placeholder">No dock pane available.</div>';return}let F=K.mount(W,{mode:"view"});return n0.current=F,requestAnimationFrame(()=>F.focus?.()),()=>{if(n0.current===F)F.dispose(),n0.current=null}},[X0,i_]);let[o0,v0]=R({name:"You",avatar_url:null,avatar_background:null}),V0=k(!1),u0=k(!1),s0=k(null),C0=k($),p$=k(new Map),r0=k($),p0=k(0),c$=k(0),e$=k({}),T$=k({name:null,avatar_url:null}),J0=k({currentHashtag:null,searchQuery:null,searchOpen:!1}),O$=k(null),E$=k(null),k$=k(0),f$=k(0),h$=k(0),_2=k(null),c0=k(null),m0=k(null),F$=k(null),$2=k(0),Y$=k({title:null,avatarBase:null}),i$=k(null),A$=k(!1),[S$,j2]=R(!1),B2=k(0),w$=x(()=>{if(i$.current)clearTimeout(i$.current),i$.current=null;o(null)},[]);q9(30000),u(()=>{return y8()},[]),u(()=>{return E9(L)},[]),u(()=>{l_("workspaceOpen",String(j$))},[j$]),u(()=>{return D9()},[]),u(()=>{return()=>{w$()}},[w$]),u(()=>{if(!C_){l_(D3,"");return}l_(D3,JSON.stringify({question:C_.question||"",answer:C_.answer||"",thinking:C_.thinking||"",error:C_.error||null,status:C_.status||"success"}))},[C_]),u(()=>{e$.current=F_||{}},[F_]),u(()=>{C0.current=$},[$]),u(()=>{T$.current=o0||{name:"You",avatar_url:null,avatar_background:null}},[o0]);let l$=x((W,K,F=null)=>{if(typeof document>"u")return;let E=(W||"").trim()||"PiClaw";if(Y$.current.title!==E){document.title=E;let e=document.querySelector('meta[name="apple-mobile-web-app-title"]');if(e&&e.getAttribute("content")!==E)e.setAttribute("content",E);Y$.current.title=E}let A=document.getElementById("dynamic-favicon");if(!A)return;let m=A.getAttribute("data-default")||A.getAttribute("href")||"/favicon.ico",d=K||m,G_=K?`${d}|${F||""}`:d;if(Y$.current.avatarBase!==G_){let e=K?`${d}${d.includes("?")?"&":"?"}v=${F||Date.now()}`:d;A.setAttribute("href",e),Y$.current.avatarBase=G_}},[]),Z2=x((W)=>{if(!W)return;M((K)=>K.includes(W)?K:[...K,W])},[]),P$=x((W)=>{M((K)=>K.filter((F)=>F!==W))},[]);L2.current=P$;let x2=x(()=>{M([])},[]),M2=x((W)=>{if(!Array.isArray(W)){M([]);return}let K=[],F=new Set;for(let E of W){if(typeof E!=="string"||!E.trim())continue;let A=E.trim();if(F.has(A))continue;F.add(A),K.push(A)}M(K)},[]),V_=x((W,K=null,F="info",E=3000)=>{w$(),o({title:W,detail:K||null,kind:F||"info"}),i$.current=setTimeout(()=>{o((A)=>A?.title===W?null:A)},E)},[w$]),U2=x((W)=>{let K=X9(W,{editorOpen:E0,resolvePane:(F)=>r_.resolve(F)});if(K.kind==="open"){Y0(K.path);return}if(K.kind==="toast")V_(K.title,K.detail,K.level)},[E0,Y0,V_]),b2=x(()=>{let W=G0;if(W)Z2(W)},[G0,Z2]),C2=x((W)=>{if(!W)return;y((K)=>K.includes(W)?K:[...K,W])},[]),N2=x(async(W,K=null)=>{let F=(A)=>{A.scrollIntoView({behavior:"smooth",block:"center"}),A.classList.add("post-highlight"),setTimeout(()=>A.classList.remove("post-highlight"),2000)},E=document.getElementById("post-"+W);if(E){F(E);return}try{let A=typeof K==="string"&&K.trim()?K.trim():$,d=(await N4(W,A))?.thread?.[0];if(!d)return;Q0((G_)=>{if(!G_)return[d];if(G_.some((e)=>e.id===d.id))return G_;return[...G_,d]}),requestAnimationFrame(()=>{setTimeout(()=>{let G_=document.getElementById("post-"+W);if(G_)F(G_)},50)})}catch(A){console.error("[scrollToMessage] Failed to fetch message",W,A)}},[$]),T2=x((W)=>{y((K)=>K.filter((F)=>F!==W))},[]),f2=x(()=>{y([])},[]),S2=x((W)=>{if(!Array.isArray(W)){y([]);return}let K=[],F=new Set;for(let E of W){if(typeof E!=="string"||!E.trim())continue;let A=E.trim();if(F.has(A))continue;F.add(A),K.push(A)}y(K)},[]),U=x((W)=>{let K=typeof W==="string"&&W.trim()?W.trim():"Could not send your message.";V_("Compose failed",K,"error",5000)},[V_]),J=x((W={})=>{let K=Date.now();if(N_.current=K,W.running)I_.current=!0,N0((F)=>F?F:!0);if(W.clearSilence)v_.current=0},[N0]),I=x(()=>{if(F$.current)clearTimeout(F$.current),F$.current=null;$2.current=0},[]);u(()=>()=>{I()},[I]);let z=x(()=>{I(),n((W)=>{if(!W)return W;if(!(W.last_activity||W.lastActivity))return W;let{last_activity:K,lastActivity:F,...E}=W;return E})},[I]),O=x((W)=>{if(!W)return;I();let K=Date.now();$2.current=K,n({type:W.type||"active",last_activity:!0}),F$.current=setTimeout(()=>{if($2.current!==K)return;n((F)=>{if(!F||!(F.last_activity||F.lastActivity))return F;return null})},z9)},[I]),D=x(()=>{I_.current=!1,N0(!1),N_.current=null,v_.current=0,J_.current="",y_.current="",z0.current=null,c0.current=null,K_.current=null,__.current=null,s0.current=null,$$.current={inFlight:!1,lastAttemptAt:0,turnId:null},I(),Y_(null),Q_(null),O_.current=!1,j_.current=!1},[I,Y_,Q_,N0]),b=x((W)=>{if(!F9({remainingQueueCount:W,currentTurnId:K_.current,isAgentTurnActive:$0}))return;__.current=null,Q_(null)},[$0,Q_]),p=x(()=>({agentStatus:null,agentDraft:{text:"",totalLines:0},agentPlan:"",agentThought:{text:"",totalLines:0},pendingRequest:null,currentTurnId:null,steerQueuedTurnId:null,isAgentTurnActive:!1,followupQueueItems:[],activeModel:null,activeThinkingLevel:null,supportsThinking:!1,activeModelUsage:null,contextUsage:null,isAgentRunning:!1,wasAgentActive:!1,draftBuffer:"",thoughtBuffer:"",lastAgentEvent:null,lastSilenceNotice:0,lastAgentResponse:null,currentTurnIdRef:null,steerQueuedTurnIdRef:null,thoughtExpanded:!1,draftExpanded:!1,agentStatusRef:null,silentRecovery:{inFlight:!1,lastAttemptAt:0,turnId:null}}),[]),v=x(()=>({agentStatus:a,agentDraft:$_?{...$_}:{text:"",totalLines:0},agentPlan:W_||"",agentThought:g_?{...g_}:{text:"",totalLines:0},pendingRequest:Z_,currentTurnId:q_,steerQueuedTurnId:X_,isAgentTurnActive:Boolean($0),followupQueueItems:Array.isArray(Z0)?Z0.map((W)=>({...W})):[],activeModel:a_,activeThinkingLevel:o_,supportsThinking:Boolean(h_),activeModelUsage:E_,contextUsage:j0,isAgentRunning:Boolean(I_.current),wasAgentActive:Boolean(u0.current),draftBuffer:J_.current||"",thoughtBuffer:y_.current||"",lastAgentEvent:N_.current||null,lastSilenceNotice:v_.current||0,lastAgentResponse:c0.current||null,currentTurnIdRef:K_.current||null,steerQueuedTurnIdRef:__.current||null,thoughtExpanded:Boolean(O_.current),draftExpanded:Boolean(j_.current),agentStatusRef:s0.current||null,silentRecovery:{...$$.current||{inFlight:!1,lastAttemptAt:0,turnId:null}}}),[a_,E_,o_,$_,W_,a,g_,j0,q_,Z0,$0,Z_,X_,h_]),s=x((W)=>{let K=W||p();I(),I_.current=Boolean(K.isAgentRunning),u0.current=Boolean(K.wasAgentActive),N0(Boolean(K.isAgentTurnActive)),N_.current=K.lastAgentEvent||null,v_.current=Number(K.lastSilenceNotice||0),J_.current=K.draftBuffer||"",y_.current=K.thoughtBuffer||"",z0.current=K.pendingRequest||null,c0.current=K.lastAgentResponse||null,K_.current=K.currentTurnIdRef||null,__.current=K.steerQueuedTurnIdRef||null,s0.current=K.agentStatusRef||null,$$.current=K.silentRecovery||{inFlight:!1,lastAttemptAt:0,turnId:null},O_.current=Boolean(K.thoughtExpanded),j_.current=Boolean(K.draftExpanded),n(K.agentStatus||null),i(K.agentDraft?{...K.agentDraft}:{text:"",totalLines:0}),d_(K.agentPlan||""),l(K.agentThought?{...K.agentThought}:{text:"",totalLines:0}),t(K.pendingRequest||null),Y_(K.currentTurnId||null),Q_(K.steerQueuedTurnId||null),t_(Array.isArray(K.followupQueueItems)?K.followupQueueItems.map((F)=>({...F})):[]),p_(K.activeModel||null),c_(K.activeThinkingLevel||null),A_(Boolean(K.supportsThinking)),u_(K.activeModelUsage??null),b_(K.contextUsage??null)},[I,p,Y_,t_,N0,Q_]),L_=x((W)=>{if(!W)return;if(K_.current===W)return;K_.current=W,$$.current={inFlight:!1,lastAttemptAt:0,turnId:W},Y_(W),__.current=null,Q_(null),J_.current="",y_.current="",i({text:"",totalLines:0}),d_(""),l({text:"",totalLines:0}),t(null),z0.current=null,c0.current=null,O_.current=!1,j_.current=!1},[Y_,Q_]),k0=x((W)=>{if(typeof document<"u"){let e=typeof document.hasFocus==="function"?document.hasFocus():!0;if(!document.hidden&&e)return}let K=c0.current;if(!K||!K.post)return;if(W&&K.turnId&&K.turnId!==W)return;let F=K.post;if(F.id&&_2.current===F.id)return;let E=String(F?.data?.content||"").trim();if(!E)return;_2.current=F.id||_2.current,c0.current=null;let A=E.replace(/\s+/g," ").slice(0,200),m=e$.current||{},G_=(F?.data?.agent_id?m[F.data.agent_id]:null)?.name||"Pi";h0(G_,A)},[h0]),U_=x(async(W,K)=>{if(W!=="thought"&&W!=="draft")return;let F=K_.current;if(W==="thought"){if(O_.current=K,F)try{await x9(F,"thought",K)}catch(E){console.warn("Failed to update thought visibility:",E)}if(!K)return;try{let E=F?await I9(F,"thought"):null;if(E?.text)y_.current=E.text;l((A)=>({...A||{text:"",totalLines:0},fullText:y_.current||A?.fullText||"",totalLines:Number.isFinite(E?.total_lines)?E.total_lines:A?.totalLines||0}))}catch(E){console.warn("Failed to fetch full thought:",E)}return}if(j_.current=K,F)try{await x9(F,"draft",K)}catch(E){console.warn("Failed to update draft visibility:",E)}if(!K)return;try{let E=F?await I9(F,"draft"):null;if(E?.text)J_.current=E.text;i((A)=>({...A||{text:"",totalLines:0},fullText:J_.current||A?.fullText||"",totalLines:Number.isFinite(E?.total_lines)?E.total_lines:A?.totalLines||0}))}catch(E){console.warn("Failed to fetch full draft:",E)}},[]),H$=k(null),I$=x(()=>{let W=O$.current;if(!W)return;if(!(Math.abs(W.scrollTop)>150))W.scrollTop=0},[]);H$.current=I$;let O2=x((W)=>{let K=O$.current;if(!K||typeof W!=="function"){W?.();return}let{currentHashtag:F,searchQuery:E,searchOpen:A}=J0.current||{},m=!((E||A)&&!F),d=m?K.scrollHeight-K.scrollTop:K.scrollTop;W(),requestAnimationFrame(()=>{let G_=O$.current;if(!G_)return;if(m){let e=Math.max(G_.scrollHeight-d,0);G_.scrollTop=e}else{let e=Math.max(G_.scrollHeight-G_.clientHeight,0),h=Math.min(d,e);G_.scrollTop=h}})},[]),z$=x((W)=>{let K=O$.current;if(!K||typeof W!=="function"){W?.();return}let F=K.scrollTop;W(),requestAnimationFrame(()=>{let E=O$.current;if(!E)return;let A=Math.max(E.scrollHeight-E.clientHeight,0);E.scrollTop=Math.min(F,A)})},[]),S1="Queued as a follow-up (one-at-a-time).",G2="⁣",x0=x((W)=>{if(!W||!Array.isArray(W))return W;let K=F0.current,F=new Set(K),E=W.filter((A)=>{if(F.has(A?.id))return!1;if(A?.data?.is_bot_message){let m=A?.data?.content;if(m===S1||m===G2)return!1}return!0});return E.length===W.length?W:E},[]),{posts:F2,setPosts:Q0,hasMore:R1,setHasMore:H2,hasMoreRef:n$,loadPosts:q0,refreshTimeline:L0,loadMore:J3,loadMoreRef:R2}=j9({preserveTimelineScroll:O2,preserveTimelineScrollTop:z$,chatJid:$}),D2=S_(()=>x0(F2),[F2,Z0,x0]),j1=x(()=>{let W=K0.current;if(!W)return;Q0((K)=>K?K.filter((F)=>F.id!==W):K),K0.current=null},[Q0]),{handleSplitterMouseDown:C9,handleSplitterTouchStart:T9,handleEditorSplitterMouseDown:f9,handleEditorSplitterTouchStart:S9,handleDockSplitterMouseDown:R9,handleDockSplitterTouchStart:v9}=N9({appShellRef:E$,sidebarWidthRef:k$,editorWidthRef:f$,dockHeightRef:h$}),y3=x(()=>{if(!I_.current)return;I_.current=!1,v_.current=0,N_.current=null,K_.current=null,Y_(null),O_.current=!1,j_.current=!1;let W=(J_.current||"").trim();if(J_.current="",y_.current="",i({text:"",totalLines:0}),d_(""),l({text:"",totalLines:0}),t(null),z0.current=null,c0.current=null,!W){n({type:"error",title:"Response stalled - No content received"});return}let F=`${W}${`

⚠️ Response may be incomplete - the model stopped responding`}`,E=Date.now(),A=new Date().toISOString(),m={id:E,timestamp:A,data:{type:"agent_response",content:F,agent_id:"default",is_local_stall:!0}};K0.current=E,Q0((d)=>d?$1([...d,m]):[m]),H$.current?.(),n(null)},[Y_]);u(()=>{J0.current={currentHashtag:X,searchQuery:V,searchOpen:P}},[X,V,P]);let f_=x(()=>{let W=++_$.current,K=$;HZ(K).then((F)=>{if(W!==_$.current)return;if(C0.current!==K)return;let E=S0.current,A=Array.isArray(F?.items)?F.items.map((m)=>({...m})).filter((m)=>!E.has(m.row_id)):[];if(A.length){t_((m)=>{if(m.length===A.length&&m.every((d,G_)=>d.row_id===A[G_].row_id))return m;return A});return}E.clear(),b(0),t_((m)=>m.length===0?m:[])}).catch(()=>{if(W!==_$.current)return;if(C0.current!==K)return;t_((F)=>F.length===0?F:[])})},[b,$,t_]),K$=x(async()=>{let W=$;try{let K=await F3(W);if(C0.current!==W)return;if(K)b_(K)}catch(K){if(C0.current!==W)return;console.warn("Failed to fetch agent context:",K)}},[$]),W$=x(async()=>{let W=$;try{let K=await M9(W);if(C0.current!==W)return null;if(!K||K.status!=="active"||!K.data){if(u0.current){let{currentHashtag:A,searchQuery:m,searchOpen:d}=J0.current||{};if(!A&&!m&&!d)L0()}return u0.current=!1,D(),s0.current=null,n(null),i({text:"",totalLines:0}),d_(""),l({text:"",totalLines:0}),t(null),z0.current=null,K??null}u0.current=!0;let F=K.data;s0.current=F;let E=F.turn_id||F.turnId;if(E)L_(E);if(J({running:!0,clearSilence:!0}),z(),n(F),K.thought&&K.thought.text)l((A)=>{if(A&&A.text&&A.text.length>=K.thought.text.length)return A;return y_.current=K.thought.text,{text:K.thought.text,totalLines:K.thought.totalLines||0}});if(K.draft&&K.draft.text)i((A)=>{if(A&&A.text&&A.text.length>=K.draft.text.length)return A;return J_.current=K.draft.text,{text:K.draft.text,totalLines:K.draft.totalLines||0}});return K}catch(K){return console.warn("Failed to fetch agent status:",K),null}},[D,z,J,L0,L_]),v1=x(async()=>{if(!I_.current)return null;if(z0.current)return null;let W=K_.current||null,K=$$.current,F=Date.now();if(K.inFlight)return null;if(K.turnId===W&&F-K.lastAttemptAt<Q3)return null;K.inFlight=!0,K.lastAttemptAt=F,K.turnId=W;try{let{currentHashtag:E,searchQuery:A,searchOpen:m}=J0.current||{};if(!E&&!A&&!m)await L0();return await f_(),await W$()}finally{K.inFlight=!1}},[W$,f_,L0]);u(()=>{let W=Math.min(1000,Math.max(100,Math.floor(L3/2))),K=setInterval(()=>{if(!I_.current)return;if(z0.current)return;let F=N_.current;if(!F)return;let E=Date.now(),A=E-F,m=s2(s0.current);if(A>=Y9){if(!m)n({type:"waiting",title:"Re-syncing after a quiet period…"});v1();return}if(A>=L3){if(E-v_.current>=Q3){if(!m){let d=Math.floor(A/1000);n({type:"waiting",title:`Waiting for model… No events for ${d}s`})}v_.current=E,v1()}}},W);return()=>clearInterval(K)},[v1]);let u9=x((W)=>{if(Y(W),W!=="connected"){n(null),i({text:"",totalLines:0}),d_(""),l({text:"",totalLines:0}),t(null),z0.current=null,D();return}if(!V0.current){V0.current=!0;let{currentHashtag:A,searchQuery:m,searchOpen:d}=J0.current||{};if(!A&&!m&&!d)L0();W$(),f_(),K$();return}let{currentHashtag:K,searchQuery:F,searchOpen:E}=J0.current;if(!K&&!F&&!E)L0();W$(),f_(),K$()},[D,L0,W$,f_,K$]),m9=x(async(W)=>{Q(W),Q0(null),await q0(W)},[q0]),g9=x(async()=>{Q(null),H(null),Q0(null),await q0()},[q0]),p9=x(async(W,K=g)=>{if(!W||!W.trim())return;let F=K==="root"||K==="all"?K:"current";f(F),H(W.trim()),Q(null),Q0(null);try{let E=await w9(W.trim(),50,0,$,F,C);Q0(E.results),H2(!1)}catch(E){console.error("Failed to search:",E),Q0([])}},[$,C,g]),c9=x(()=>{T(!0),H(null),Q(null),f("current"),Q0([])},[]),h9=x(()=>{T(!1),H(null),q0()},[q0]),AZ=x(()=>{},[]),u1=!X&&!V&&!P,i9=x(async(W)=>{if(!W)return;let K=W.id,F=typeof W?.chat_jid==="string"&&W.chat_jid.trim()?W.chat_jid.trim():$,E=D2?.filter((m)=>m?.data?.thread_id===K&&m?.id!==K).length||0;if(E>0){if(!window.confirm(`Delete this message and its ${E} replies?`))return}let A=(m)=>{if(!m.length)return;R0((G_)=>{let e=new Set(G_);return m.forEach((h)=>e.add(h)),e}),setTimeout(()=>{if(z$(()=>{Q0((G_)=>G_?G_.filter((e)=>!m.includes(e.id)):G_)}),R0((G_)=>{let e=new Set(G_);return m.forEach((h)=>e.delete(h)),e}),n$.current)R2.current?.({preserveScroll:!0,preserveMode:"top"})},180)};try{let m=await P9(K,E>0,F);if(m?.ids?.length)A(m.ids)}catch(m){let d=m?.message||"";if(E===0&&d.includes("Replies exist")){if(!window.confirm("Delete this message and its replies?"))return;let e=await P9(K,!0,F);if(e?.ids?.length)A(e.ids);return}console.error("Failed to delete post:",m),alert(`Failed to delete message: ${d}`)}},[$,D2,z$]),E3=x(async()=>{try{let W=await QZ();x_(K9(W));let K=W?.user||{};v0((E)=>{let A=typeof K.name==="string"&&K.name.trim()?K.name.trim():"You",m=typeof K.avatar_url==="string"?K.avatar_url.trim():null,d=typeof K.avatar_background==="string"&&K.avatar_background.trim()?K.avatar_background.trim():null;if(E.name===A&&E.avatar_url===m&&E.avatar_background===d)return E;return{name:A,avatar_url:m,avatar_background:d}});let F=(W?.agents||[]).find((E)=>E.id==="default");l$(F?.name,F?.avatar_url)}catch(W){console.warn("Failed to load agents:",W)}try{let W=$,K=await F3(W);if(C0.current!==W)return;if(K)b_(K)}catch{}},[l$,$]);u(()=>{E3();let W=A2("sidebarWidth",null),K=Number.isFinite(W)?Math.min(Math.max(W,160),600):280;if(k$.current=K,E$.current)E$.current.style.setProperty("--sidebar-width",`${K}px`)},[E3]);let m1=$0||a!==null,k3=x((W)=>{if(!W||typeof W!=="object")return;let K=W.agent_id;if(!K)return;let{agent_name:F,agent_avatar:E}=W;if(!F&&E===void 0)return;let A=e$.current?.[K]||{id:K},m=A.name||null,d=A.avatar_url??A.avatarUrl??A.avatar??null,G_=!1,e=!1;if(F&&F!==A.name)m=F,e=!0;if(E!==void 0){let h=typeof E==="string"?E.trim():null,z_=typeof d==="string"?d.trim():null,D_=h||null;if(D_!==(z_||null))d=D_,G_=!0}if(!e&&!G_)return;if(x_((h)=>{let D_={...h[K]||{id:K}};if(e)D_.name=m;if(G_)D_.avatar_url=d;return{...h,[K]:D_}}),K==="default")l$(m,d,G_?Date.now():null)},[l$]),A3=x((W)=>{if(!W||typeof W!=="object")return;let K=W.user_name??W.userName,F=W.user_avatar??W.userAvatar,E=W.user_avatar_background??W.userAvatarBackground;if(K===void 0&&F===void 0&&E===void 0)return;v0((A)=>{let m=typeof K==="string"&&K.trim()?K.trim():A.name||"You",d=F===void 0?A.avatar_url:typeof F==="string"&&F.trim()?F.trim():null,G_=E===void 0?A.avatar_background:typeof E==="string"&&E.trim()?E.trim():null;if(A.name===m&&A.avatar_url===d&&A.avatar_background===G_)return A;return{name:m,avatar_url:d,avatar_background:G_}})},[]),g1=x((W)=>{if(!W||typeof W!=="object")return;let K=W.model??W.current;if(K!==void 0)p_(K);if(W.thinking_level!==void 0)c_(W.thinking_level??null);if(W.supports_thinking!==void 0)A_(Boolean(W.supports_thinking));if(W.provider_usage!==void 0)u_(W.provider_usage??null)},[]),v2=x(()=>{let W=$;BZ(W).then((K)=>{if(C0.current!==W)return;if(K)g1(K)}).catch(()=>{})},[g1,$]),M0=x(()=>{let W=$,K=(F)=>Array.isArray(F)?F.filter((E)=>E&&typeof E.chat_jid==="string"&&typeof E.agent_name==="string"&&E.agent_name.trim()):[];Promise.all([UZ().catch(()=>({chats:[]})),H3(null,{includeArchived:!0}).catch(()=>({chats:[]}))]).then(([F,E])=>{if(C0.current!==W)return;let A=K(F?.chats),m=K(E?.chats);if(m.length===0){P0(A);return}let d=new Map(A.map((e)=>[e.chat_jid,e])),G_=m.map((e)=>{let h=d.get(e.chat_jid);return h?{...e,...h,is_active:h.is_active??e.is_active}:e});G_.sort((e,h)=>{if(e.chat_jid===W&&h.chat_jid!==W)return-1;if(h.chat_jid===W&&e.chat_jid!==W)return 1;let z_=Boolean(e.archived_at),D_=Boolean(h.archived_at);if(z_!==D_)return z_?1:-1;if(Boolean(e.is_active)!==Boolean(h.is_active))return e.is_active?-1:1;return String(e.chat_jid).localeCompare(String(h.chat_jid))}),P0(G_)}).catch(()=>{if(C0.current!==W)return;P0([])})},[$]),A0=x(()=>{H3(C).then((W)=>{let K=Array.isArray(W?.chats)?W.chats.filter((F)=>F&&typeof F.chat_jid==="string"&&typeof F.agent_name==="string"):[];y0(K)}).catch(()=>{})},[C]),l9=x((W)=>{let K=W?.row_id;if(K==null)return;S0.current.add(K),t_((F)=>F.filter((E)=>E?.row_id!==K)),DZ(K,O3($)).then(()=>{f_()}).catch((F)=>{console.warn("[queue] Failed to steer queued item:",F),V_("Failed to steer message","The queued message could not be sent as steering.","warning"),S0.current.delete(K),f_()})},[$,f_,t_,V_]),n9=x((W)=>{let K=W?.row_id;if(K==null)return;let F=T_.current.filter((E)=>E?.row_id!==K).length;S0.current.add(K),b(F),t_((E)=>E.filter((A)=>A?.row_id!==K)),JZ(K,O3($)).then(()=>{f_()}).catch((E)=>{console.warn("[queue] Failed to remove queued item:",E),V_("Failed to remove message","The queued message could not be removed.","warning"),S0.current.delete(K),f_()})},[b,$,f_,t_,V_]),p1=x((W)=>{if(!W||typeof W!=="object")return;if(M0(),A0(),W?.queued==="followup"||W?.queued==="steer"){f_();return}let K=W?.command;if(K&&typeof K==="object"&&(K?.queued_followup||K?.queued_steer))f_()},[M0,A0,f_]),c1=x(()=>{if(m0.current)m0.current.abort(),m0.current=null;O0(null)},[]),Z1=x(async(W)=>{let K=String(W||"").trim();if(!K)return V_("BTW needs a question","Usage: /btw <question>","warning"),!0;if(m0.current)m0.current.abort();let F=new AbortController;m0.current=F,O0({question:K,answer:"",thinking:"",error:null,model:null,status:"running"});try{let E=await yZ(K,{signal:F.signal,chatJid:C8($),systemPrompt:"Answer the user briefly and directly. This is a side conversation that should not affect the main chat until explicitly injected.",onEvent:(A,m)=>{if(A==="side_prompt_start")O0((d)=>d?{...d,status:"running"}:d)},onThinkingDelta:(A)=>{O0((m)=>m?{...m,thinking:`${m.thinking||""}${A||""}`}:m)},onTextDelta:(A)=>{O0((m)=>m?{...m,answer:`${m.answer||""}${A||""}`}:m)}});if(m0.current!==F)return!0;O0((A)=>A?{...A,answer:E?.result||A.answer||"",thinking:E?.thinking||A.thinking||"",model:E?.model||null,status:"success",error:null}:A)}catch(E){if(F.signal.aborted)return!0;O0((A)=>A?{...A,status:"error",error:E?.payload?.error||E?.message||"BTW request failed."}:A)}finally{if(m0.current===F)m0.current=null}return!0},[$,V_]),d9=x(async({content:W})=>{let K=b8(W);if(!K)return!1;if(K.type==="help")return V_("BTW usage","Use /btw <question> to open a side conversation.","info",4000),!0;if(K.type==="clear")return c1(),V_("BTW cleared","Closed the side conversation panel.","info"),!0;if(K.type==="ask")return await Z1(K.question),!0;return!1},[c1,Z1,V_]),o9=x(()=>{if(C_?.question)Z1(C_.question)},[C_,Z1]),s9=x(async()=>{let W=S8(C_);if(!W)return;try{let K=await y2("default",W,null,[],m1?"queue":null,$);p1(K),V_(K?.queued==="followup"?"BTW queued":"BTW injected",K?.queued==="followup"?"The BTW summary was queued as a follow-up because the agent is busy.":"The BTW summary was sent to the main chat.","info",3500)}catch(K){V_("BTW inject failed",K?.message||"Could not inject BTW answer into chat.","warning")}},[C_,p1,m1,V_]),u2=x(()=>{v2(),M0(),A0(),f_(),K$()},[v2,M0,A0,f_,K$]);u(()=>{u2();let W=setInterval(()=>{v2(),M0(),A0(),f_()},60000);return()=>clearInterval(W)},[u2,v2,M0,A0,f_]),u(()=>{A0()},[A0]),u(()=>{let W=!1;Q0(null);let K=()=>{if(W)return;requestAnimationFrame(()=>{if(W)return;I$()})};if(X)return q0(X),()=>{W=!0};if(V)return w9(V,50,0,$,g,C).then((F)=>{if(W)return;Q0(F.results),H2(!1)}).catch((F)=>{if(W)return;console.error("Failed to search:",F),Q0([]),H2(!1)}),()=>{W=!0};return q0().then(()=>{K()}).catch((F)=>{if(W)return;console.error("Failed to load timeline:",F)}),()=>{W=!0}},[$,X,V,g,C,q0,I$,H2,Q0]),u(()=>{let W=r0.current||$;p$.current.set(W,v())},[$,v]),u(()=>{let W=r0.current||$;if(W===$)return;p$.current.set(W,v()),r0.current=$,S0.current.clear(),s(p$.current.get($)||null),f_(),W$(),K$()},[$,W$,K$,f_,s,v]);let r9=x(()=>{let{currentHashtag:W,searchQuery:K,searchOpen:F}=J0.current||{};if(!W&&!K&&!F)L0();u2()},[u2,L0]),m2=x((W,K="streaming")=>{let F=v8({...W,...W&&W.status?{}:{status:K}});if(!F)return;let E=V$(F);if(E&&e_.current.has(E))return;m_((A)=>{let m=V$(A),d=Boolean(E&&m&&E===m),G_={...d&&A?.artifact?A.artifact:{},...F.artifact||{}};return{...d&&A?A:{},...F,artifact:G_,source:"live",originChatJid:F.originChatJid||$,openedAt:d&&A?.openedAt?A.openedAt:new Date().toISOString(),liveUpdatedAt:new Date().toISOString()}})},[$]),h1=x((W,K)=>{let F=K?.turn_id,E=typeof K?.chat_jid==="string"&&K.chat_jid.trim()?K.chat_jid.trim():null,m=E?E===$:W==="connected"||W==="workspace_update";if(m)k3(K),A3(K);if(W==="ui_theme"){E8(K);return}if(W==="generated_widget_open"){if(!m)return;if(F&&!K_.current)L_(F);m2(K,"loading");return}if(W==="generated_widget_delta"){if(!m)return;if(F&&!K_.current)L_(F);m2(K,"streaming");return}if(W==="generated_widget_final"){if(!m)return;if(F&&!K_.current)L_(F);m2(K,"final");return}if(W==="generated_widget_error"){if(!m)return;m2(K,"error");return}if(W==="generated_widget_close"){if(!m)return;let h=V$(K);m_((z_)=>{if(!z_||z_?.source!=="live")return z_;let D_=V$(z_);if(h&&D_&&h!==D_)return z_;return null});return}if(W?.startsWith("agent_")){if(!(W==="agent_draft_delta"||W==="agent_thought_delta"||W==="agent_draft"||W==="agent_thought"))z()}if(W==="connected"){n(null),i({text:"",totalLines:0}),d_(""),l({text:"",totalLines:0}),t(null),z0.current=null,D();let h=$;M9(h).then((w0)=>{if(C0.current!==h)return;if(!w0||w0.status!=="active"||!w0.data)return;let Y2=w0.data,N1=Y2.turn_id||Y2.turnId;if(N1)L_(N1);if(J({clearSilence:!0}),O(Y2),w0.thought&&w0.thought.text)y_.current=w0.thought.text,l({text:w0.thought.text,totalLines:w0.thought.totalLines||0});if(w0.draft&&w0.draft.text)J_.current=w0.draft.text,i({text:w0.draft.text,totalLines:w0.draft.totalLines||0})}).catch((w0)=>{console.warn("Failed to fetch agent status:",w0)});let{currentHashtag:z_,searchQuery:D_,searchOpen:q$}=J0.current||{};if(!z_&&!D_&&!q$)L0();u2();return}if(W==="agent_status"){if(!m){if(K?.type==="done"||K?.type==="error")M0(),A0();return}if(K.type==="done"||K.type==="error"){if(F&&K_.current&&F!==K_.current)return;if(K.type==="done"){k0(F||K_.current);let{currentHashtag:h,searchQuery:z_,searchOpen:D_}=J0.current||{};if(!h&&!z_&&!D_)L0();if(K.context_usage)b_(K.context_usage)}if(u0.current=!1,D(),S0.current.clear(),M0(),f_(),i({text:"",totalLines:0}),d_(""),l({text:"",totalLines:0}),t(null),K.type==="error")n({type:"error",title:K.title||"Agent error"}),setTimeout(()=>n(null),8000);else n(null)}else{if(F)L_(F);if(J({running:!0,clearSilence:!0}),K.type==="thinking")J_.current="",y_.current="",i({text:"",totalLines:0}),d_(""),l({text:"",totalLines:0});s0.current=K,n((h)=>{if(h&&h.type===K.type&&h.title===K.title)return h;return K})}return}if(W==="agent_steer_queued"){if(!m)return;if(F&&K_.current&&F!==K_.current)return;let h=F||K_.current;if(!h)return;__.current=h,Q_(h);return}if(W==="agent_followup_queued"){if(!m)return;let h=K?.row_id,z_=K?.content;if(h!=null&&typeof z_==="string"&&z_.trim())t_((D_)=>{if(D_.some((q$)=>q$?.row_id===h))return D_;return[...D_,{row_id:h,content:z_,timestamp:K?.timestamp||null,thread_id:K?.thread_id??null}]});f_();return}if(W==="agent_followup_consumed"){if(!m)return;let h=K?.row_id;if(h!=null){let w0=T_.current.filter((Y2)=>Y2.row_id!==h).length;b(w0),t_((Y2)=>Y2.filter((N1)=>N1.row_id!==h))}f_();let{currentHashtag:z_,searchQuery:D_,searchOpen:q$}=J0.current||{};if(!z_&&!D_&&!q$)L0();return}if(W==="agent_followup_removed"){if(!m)return;let h=K?.row_id;if(h!=null){let z_=T_.current.filter((D_)=>D_.row_id!==h).length;S0.current.add(h),b(z_),t_((D_)=>D_.filter((q$)=>q$.row_id!==h))}f_();return}if(W==="agent_draft_delta"){if(!m)return;if(F&&K_.current&&F!==K_.current)return;if(F&&!K_.current)L_(F);if(J({running:!0,clearSilence:!0}),K?.reset)J_.current="";if(K?.delta)J_.current+=K.delta;let h=Date.now();if(!p0.current||h-p0.current>=100){p0.current=h;let z_=J_.current,D_=B3(z_);if(j_.current)i((q$)=>({text:q$?.text||"",totalLines:D_,fullText:z_}));else i({text:z_,totalLines:D_})}return}if(W==="agent_draft"){if(!m)return;if(F&&K_.current&&F!==K_.current)return;if(F&&!K_.current)L_(F);J({running:!0,clearSilence:!0});let h=K.text||"",z_=K.mode||(K.kind==="plan"?"replace":"append"),D_=Number.isFinite(K.total_lines)?K.total_lines:h?h.replace(/\r\n/g,`
`).split(`
`).length:0;if(K.kind==="plan")if(z_==="replace")d_(h);else d_((q$)=>(q$||"")+h);else if(!j_.current)J_.current=h,i({text:h,totalLines:D_});return}if(W==="agent_thought_delta"){if(!m)return;if(F&&K_.current&&F!==K_.current)return;if(F&&!K_.current)L_(F);if(J({running:!0,clearSilence:!0}),K?.reset)y_.current="";if(typeof K?.delta==="string")y_.current+=K.delta;let h=Date.now();if(O_.current&&(!c$.current||h-c$.current>=100)){c$.current=h;let z_=y_.current;l((D_)=>({text:D_?.text||"",totalLines:B3(z_),fullText:z_}))}return}if(W==="agent_thought"){if(!m)return;if(F&&K_.current&&F!==K_.current)return;if(F&&!K_.current)L_(F);J({running:!0,clearSilence:!0});let h=K.text||"",z_=Number.isFinite(K.total_lines)?K.total_lines:h?h.replace(/\r\n/g,`
`).split(`
`).length:0;if(!O_.current)y_.current=h,l({text:h,totalLines:z_});return}if(W==="model_changed"){if(!m)return;if(K?.model!==void 0)p_(K.model);if(K?.thinking_level!==void 0)c_(K.thinking_level??null);if(K?.supports_thinking!==void 0)A_(Boolean(K.supports_thinking));let h=$;F3(h).then((z_)=>{if(C0.current!==h)return;if(z_)b_(z_)}).catch(()=>{});return}if(W==="workspace_update"){if(typeof window<"u")window.dispatchEvent(new CustomEvent("workspace-update",{detail:K}));return}if(J9(W)){if(!m)return;if(y9(W,K),W==="extension_ui_notify"&&typeof K?.message==="string")V_(K.message,null,K?.type||"info");if(W==="extension_ui_error"&&typeof K?.error==="string")V_("Extension UI error",K.error,"error",5000);return}let{currentHashtag:d,searchQuery:G_,searchOpen:e}=J0.current;if(W==="agent_response"){if(!m)return;j1(),c0.current={post:K,turnId:K_.current}}if(!d&&!G_&&!e&&m&&(W==="new_post"||W==="new_reply"||W==="agent_response"))Q0((h)=>{if(!h)return[K];if(h.some((z_)=>z_.id===K.id))return h;return[...h,K]}),H$.current?.();if(W==="interaction_updated"){if(!m)return;if(d||G_||e)return;Q0((h)=>{if(!h)return h;if(!h.some((z_)=>z_.id===K.id))return h;return h.map((z_)=>z_.id===K.id?K:z_)})}if(W==="interaction_deleted"){if(!m)return;if(d||G_||e)return;let h=K?.ids||[];if(h.length){if(z$(()=>{Q0((z_)=>z_?z_.filter((D_)=>!h.includes(D_.id)):z_)}),n$.current)R2.current?.({preserveScroll:!0,preserveMode:"top"})}}},[m2,D,z,$,R2,J,k0,z$,M0,A0,L0,j1,L_,O,k3,A3,v2,f_,t_]);u(()=>{if(typeof window>"u")return;let W=window.__PICLAW_TEST_API||{};return W.emit=h1,W.reset=()=>{j1(),D(),n(null),i({text:"",totalLines:0}),d_(""),l({text:"",totalLines:0}),t(null)},W.finalize=()=>y3(),window.__PICLAW_TEST_API=W,()=>{if(window.__PICLAW_TEST_API===W)window.__PICLAW_TEST_API=void 0}},[D,y3,h1,j1]),_9({handleSseEvent:h1,handleConnectionStatusChange:u9,loadPosts:q0,onWake:r9,chatJid:$}),u(()=>{if(!D2||D2.length===0)return;let W=location.hash;if(!W||!W.startsWith("#msg-"))return;let K=W.slice(5);N2(K),history.replaceState(null,"",location.pathname+location.search)},[D2,N2]);let i1=a!==null;u(()=>{if(G!=="connected")return;let K=setInterval(()=>{let{currentHashtag:F,searchQuery:E,searchOpen:A}=J0.current||{},m=!F&&!E&&!A;if(i1){if(m)L0();f_(),W$(),K$()}else{if(m)L0();W$(),K$()}},i1?15000:60000);return()=>clearInterval(K)},[G,i1,W$,K$,f_,L0]),u(()=>{return k9(()=>{W$(),K$(),f_()})},[W$,K$,f_]);let a9=x(()=>{V2((W)=>!W)},[]),w3=x((W)=>{if(typeof window>"u")return;let K=String(W||"").trim();if(!K||K===$)return;let F=X2(window.location.href,K,{chatOnly:j});window.location.assign(F)},[j,$]),P3=x(async()=>{if(typeof window>"u"||!w_?.chat_jid)return;let W=Date.now(),K=A9();if(!K)return;if(A$.current||W<B2.current||K.inFlight||W<K.cooldownUntil)return;A$.current=!0,K.inFlight=!0,j2(!0);try{let F=w_.display_name||w_.agent_name||"",E=window.prompt("Agent name",F);if(E===null)return;let A=E.trim(),m=A.toLowerCase().replace(/[^a-z0-9_-]+/g,"-").replace(/^-+|-+$/g,"").replace(/-{2,}/g,"-")||w_.agent_name||"",d=await OZ(w_.chat_jid,{displayName:A,agentName:m});await Promise.allSettled([M0(),A0()]);let G_=d?.branch?.agent_name||m||w_.agent_name||"",e=d?.branch?.display_name||A||G_;V_("Branch renamed",`${e} (@${G_})`,"info",3500)}catch(F){let E=F instanceof Error?F.message:String(F||"Could not rename branch."),A=/already in use/i.test(E||"")?`${E} Switch to or restore that existing session from the session manager.`:E;V_("Could not rename branch",A||"Could not rename branch.","warning",5000)}finally{A$.current=!1,j2(!1);let F=Date.now()+qZ;B2.current=F;let E=A9();if(E)E.inFlight=!1,E.cooldownUntil=F}},[w_,M0,A0,j2,V_]),I3=x(async(W=null)=>{if(typeof window>"u")return;let K=typeof W==="string"&&W.trim()?W.trim():"",F=typeof $==="string"&&$.trim()?$.trim():"",E=K||w_?.chat_jid||F;if(!E){V_("Could not prune branch","No active session is selected yet.","warning",4000);return}let A=(w_?.chat_jid===E?w_:null)||M_.find((e)=>e?.chat_jid===E)||W0.find((e)=>e?.chat_jid===E)||null;if(A?.chat_jid===(A?.root_chat_jid||A?.chat_jid)){V_("Cannot prune branch","The root chat branch cannot be pruned.","warning",4000);return}let d=`@${A?.agent_name||E}${A?.chat_jid?` — ${A.chat_jid}`:""}`;if(!window.confirm(`Prune ${d}?

This archives the branch agent and removes it from the branch picker. Chat history is preserved.`))return;try{await FZ(E),await Promise.allSettled([M0(),A0()]);let e=A?.root_chat_jid||"web:default";V_("Branch pruned",`${d} has been archived.`,"info",3000);let h=X2(window.location.href,e,{chatOnly:j});window.location.assign(h)}catch(e){let h=e instanceof Error?e.message:String(e||"Could not prune branch.");V_("Could not prune branch",h||"Could not prune branch.","warning",5000)}},[W0,j,w_,M_,$,M0,A0,V_]),t9=x(async(W)=>{let K=typeof W==="string"?W.trim():"";if(!K||typeof b9!=="function")return;try{let F=await b9(K);await Promise.allSettled([M0(),A0()]);let E=F?.branch,A=typeof E?.chat_jid==="string"&&E.chat_jid.trim()?E.chat_jid.trim():K,m=typeof E?.agent_name==="string"&&E.agent_name.trim()?`@${E.agent_name.trim()}`:A;V_("Branch restored",`Restored ${m}.`,"info",3200);let d=X2(window.location.href,A,{chatOnly:j});window.location.assign(d)}catch(F){let E=F instanceof Error?F.message:String(F||"Could not restore branch.");V_("Could not restore branch",E||"Could not restore branch.","warning",5000)}},[j,M0,A0,V_]);u(()=>{if(!Z||typeof window>"u")return;let W=!1;return(async()=>{try{P_({status:"running",message:"Preparing a new chat branch…"});let K=await h2(N);if(W)return;let F=K?.branch,E=typeof F?.chat_jid==="string"&&F.chat_jid.trim()?F.chat_jid.trim():null;if(!E)throw Error("Branch fork did not return a chat id.");let A=X2(window.location.href,E,{chatOnly:!0});window.location.replace(A)}catch(K){if(W)return;P_({status:"error",message:f1(K)})}})(),()=>{W=!0}},[Z,N]);let e9=x((W)=>{if(!W||typeof W!=="object")return;let K=V$(W);if(K)e_.current.delete(K);m_({...W,openedAt:new Date().toISOString()})},[]),l1=x(()=>{m_((W)=>{let K=V$(W);if(W?.source==="live"&&K)e_.current.add(K);return null})},[]),_5=x((W,K)=>{let F=typeof W?.kind==="string"?W.kind:"",E=V$(K);if(!F||!E)return;if(F==="widget.close"){l1();return}if(F==="widget.ready"||F==="widget.submit"||F==="widget.request_refresh")m_((A)=>{let m=V$(A);if(!A||m!==E)return A;return{...A,runtimeState:{...A.runtimeState||{},lastEventKind:F,lastEventPayload:W?.payload||null,...F==="widget.ready"?{readyAt:new Date().toISOString()}:{},...F==="widget.submit"?{lastSubmitAt:new Date().toISOString()}:{},...F==="widget.request_refresh"?{lastRefreshRequestAt:new Date().toISOString()}:{}}}})},[l1]);u(()=>{e_.current.clear(),m_(null)},[$]);let $5=x(async()=>{if(typeof window>"u")return;try{let K=(await h2($))?.branch,F=typeof K?.chat_jid==="string"&&K.chat_jid.trim()?K.chat_jid.trim():null;if(!F)throw Error("Branch fork did not return a chat id.");await Promise.allSettled([M0(),A0()]);let E=K?.agent_name?`@${K.agent_name}`:F;V_("New branch created",`Switched to ${E}.`,"info",2500);let A=X2(window.location.href,F,{chatOnly:j});window.location.assign(A)}catch(W){V_("Could not create branch",f1(W),"warning",5000)}},[j,$,M0,A0,V_]),j5=x(async()=>{if(typeof window>"u"||q)return;let W=V9($);if(!W){V_("Could not open branch window","Opening branch windows is unavailable in standalone webapp mode.","warning",5000);return}if(W.mode==="tab"){let F=O9(window.location.href,$,{chatOnly:!0});if(!window.open(F,W.target))V_("Could not open branch window","The browser blocked opening a new tab or window.","warning",5000);return}let K=L9(W);if(!K){V_("Could not open branch window","The browser blocked opening a new tab or window.","warning",5000);return}Q9(K,{title:"Opening branch…",message:"Preparing a new chat branch. This should only take a moment."});try{let E=(await h2($))?.branch,A=typeof E?.chat_jid==="string"&&E.chat_jid.trim()?E.chat_jid.trim():null;if(!A)throw Error("Branch fork did not return a chat id.");try{let d=await Y4();P0(Array.isArray(d?.chats)?d.chats:[])}catch{}try{let d=await H3(C);y0(Array.isArray(d?.chats)?d.chats:[])}catch{}let m=X2(window.location.href,A,{chatOnly:!0});B9(K,m)}catch(F){U9(K),V_("Could not open branch window",f1(F),"error",5000)}},[$,C,q,V_]);u(()=>{if(!E0)return;if(typeof window>"u")return;let W=E$.current;if(!W)return;if(!f$.current){let K=A2("editorWidth",null),F=k$.current||280;f$.current=Number.isFinite(K)?K:F}if(W.style.setProperty("--editor-width",`${f$.current}px`),!h$.current){let K=A2("dockHeight",null);h$.current=Number.isFinite(K)?K:200}W.style.setProperty("--dock-height",`${h$.current}px`)},[E0]),u(()=>{if(!X0||j)return;let W=(K)=>{if(K.ctrlKey&&K.key==="`")K.preventDefault(),J$()};return document.addEventListener("keydown",W),()=>document.removeEventListener("keydown",W)},[J$,X0,j]),u(()=>{if(j)return;let W=(K)=>{if(K.ctrlKey&&K.shiftKey&&(K.key==="Z"||K.key==="z")){K.preventDefault(),C$();return}if(K.key==="Escape"&&H_)K.preventDefault(),d0()};return document.addEventListener("keydown",W),()=>document.removeEventListener("keydown",W)},[C$,d0,H_,j]);let Z5=Boolean(X_&&X_===(a?.turn_id||q_));if(Z)return B`
            <div class="app-shell chat-only">
                <div class="container" style=${{display:"flex",alignItems:"center",justifyContent:"center",minHeight:"100vh",padding:"24px"}}>
                    <div class="card" style=${{width:"min(560px, 100%)",padding:"24px"}}>
                        <h1 style=${{margin:"0 0 12px",fontSize:"1.1rem"}}>
                            ${B_.status==="error"?"Could not open branch window":"Opening branch…"}
                        </h1>
                        <p style=${{margin:0,lineHeight:1.6}}>${B_.message}</p>
                    </div>
                </div>
            </div>
        `;return B`
        <div class=${`app-shell${j$?"":" workspace-collapsed"}${E0?" editor-open":""}${j?" chat-only":""}${H_?" zen-mode":""}`} ref=${E$}>
            ${!j&&B`
                <${s6}
                    onFileSelect=${Z2}
                    visible=${j$}
                    active=${j$||E0}
                    onOpenEditor=${Y0}
                    onOpenTerminalTab=${g$}
                    onToggleTerminal=${X0?J$:void 0}
                    terminalVisible=${Boolean(X0&&i_)}
                />
                <button
                    class=${`workspace-toggle-tab${j$?" open":" closed"}`}
                    onClick=${a9}
                    title=${j$?"Hide workspace":"Show workspace"}
                    aria-label=${j$?"Hide workspace":"Show workspace"}
                >
                    <svg class="workspace-toggle-tab-icon" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                        <polyline points="6 3 11 8 6 13" />
                    </svg>
                </button>
                <div class="workspace-splitter" onMouseDown=${C9} onTouchStart=${T9}></div>
            `}
            ${Q2&&B`
                <div class="editor-pane-container">
                    ${H_&&B`<div class="zen-hover-zone"></div>`}
                    ${E0&&B`
                        <${a6}
                            tabs=${D0}
                            activeId=${G0}
                            onActivate=${M$}
                            onClose=${Z$}
                            onCloseOthers=${s$}
                            onCloseAll=${m$}
                            onTogglePin=${r$}
                            onTogglePreview=${l0}
                            previewTabs=${g0}
                            onToggleDock=${X0?J$:void 0}
                            dockVisible=${X0&&i_}
                            onToggleZen=${C$}
                            zenMode=${H_}
                        />
                    `}
                    ${E0&&B`<div class="editor-pane-host" ref=${t$}></div>`}
                    ${E0&&G0&&g0.has(G0)&&B`
                        <${e6}
                            getContent=${()=>N$.current?.getContent?.()}
                            path=${G0}
                            onClose=${()=>l0(G0)}
                        />
                    `}
                    ${X0&&i_&&B`<div class="dock-splitter" onMouseDown=${R9} onTouchStart=${v9}></div>`}
                    ${X0&&B`<div class=${`dock-panel${i_?"":" hidden"}`}>
                        <div class="dock-panel-header">
                            <span class="dock-panel-title">Terminal</span>
                            <button class="dock-panel-close" onClick=${J$} title="Hide terminal (Ctrl+\`)" aria-label="Hide terminal">
                                <svg viewBox="0 0 16 16" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round">
                                    <line x1="4" y1="4" x2="12" y2="12"/>
                                    <line x1="12" y1="4" x2="4" y2="12"/>
                                </svg>
                            </button>
                        </div>
                        <div class="dock-panel-body" ref=${B$}></div>
                    </div>`}
                </div>
                <div class="editor-splitter" onMouseDown=${f9} onTouchStart=${S9}></div>
            `}
            <div class="container">
                ${V&&W9()&&B`<div class="search-results-spacer"></div>`}
                ${j&&B`
                    <div class="chat-window-header">
                        <div class="chat-window-header-main">
                            <span class="chat-window-header-title">
                                ${w_?.agent_name?`@${w_.agent_name}`:$}
                            </span>
                            <span class="chat-window-header-subtitle">${w_?.chat_jid||$}</span>
                        </div>
                        <div class="chat-window-header-actions">
                            ${M_.length>1&&B`
                                <label class="chat-window-branch-picker-wrap">
                                    <span class="chat-window-branch-picker-label">Branch</span>
                                    <select
                                        class="chat-window-branch-picker"
                                        value=${$}
                                        onChange=${(W)=>w3(W.currentTarget.value)}
                                    >
                                        ${M_.map((W)=>B`
                                            <option key=${W.chat_jid} value=${W.chat_jid}>
                                                ${`@${W.agent_name} — ${W.chat_jid}${W.is_active?" • active":""}`}
                                            </option>
                                        `)}
                                    </select>
                                </label>
                            `}
                            ${w_?.chat_jid&&B`
                                <button
                                    class="chat-window-header-button"
                                    type="button"
                                    onClick=${P3}
                                    title=${S$?"Renaming branch…":"Rename this branch"}
                                    aria-label="Rename this branch"
                                    disabled=${S$}
                                >
                                    ${S$?"Renaming…":"Rename"}
                                </button>
                            `}
                            ${w_?.chat_jid&&w_.chat_jid!==(w_.root_chat_jid||w_.chat_jid)&&B`
                                <button
                                    class="chat-window-header-button"
                                    type="button"
                                    onClick=${I3}
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
                ${(X||V)&&B`
                    <div class="hashtag-header">
                        <button class="back-btn" onClick=${g9}>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
                        </button>
                        <span>${X?`#${X}`:`Search: ${V} · ${r}`}</span>
                    </div>
                `}
                <${V6}
                    posts=${D2}
                    hasMore=${u1?R1:!1}
                    onLoadMore=${u1?J3:void 0}
                    timelineRef=${O$}
                    onHashtagClick=${m9}
                    onMessageRef=${C2}
                    onScrollToMessage=${N2}
                    onFileRef=${U2}
                    onPostClick=${void 0}
                    onDeletePost=${i9}
                    onOpenWidget=${e9}
                    emptyMessage=${X?`No posts with #${X}`:V?`No results for "${V}"`:void 0}
                    agents=${F_}
                    user=${o0}
                    reverse=${u1}
                    removingPostIds=${i0}
                    searchQuery=${V}
                />
                <${r8}
                    status=${a}
                    draft=${$_}
                    plan=${W_}
                    thought=${g_}
                    pendingRequest=${Z_}
                    intent=${S}
                    turnId=${q_}
                    steerQueued=${Z5}
                    onPanelToggle=${U_}
                />
                <${R8}
                    session=${C_}
                    onClose=${c1}
                    onRetry=${o9}
                    onInject=${s9}
                />
                <${h8}
                    widget=${T0}
                    onClose=${l1}
                    onWidgetEvent=${_5}
                />
                <${q8}
                    onPost=${()=>{let{searchQuery:W,searchOpen:K}=J0.current||{};if(!W&&!K)q0(),I$()}}
                    onFocus=${I$}
                    searchMode=${P}
                    searchScope=${g}
                    onSearch=${p9}
                    onSearchScopeChange=${f}
                    onEnterSearch=${c9}
                    onExitSearch=${h9}
                    fileRefs=${w}
                    onRemoveFileRef=${P$}
                    onClearFileRefs=${x2}
                    onSetFileRefs=${M2}
                    messageRefs=${c}
                    onRemoveMessageRef=${T2}
                    onClearMessageRefs=${f2}
                    onSetMessageRefs=${S2}
                    onSwitchChat=${w3}
                    onRenameSession=${P3}
                    isRenameSessionInProgress=${S$}
                    onCreateSession=${$5}
                    onDeleteSession=${I3}
                    onRestoreSession=${t9}
                    activeEditorPath=${j?null:G0}
                    onAttachEditorFile=${j?void 0:b2}
                    onOpenFilePill=${U2}
                    followupQueueCount=${s_}
                    followupQueueItems=${Z0}
                    onInjectQueuedFollowup=${l9}
                    onRemoveQueuedFollowup=${n9}
                    onSubmitIntercept=${d9}
                    onMessageResponse=${p1}
                    onSubmitError=${U}
                    onPopOutChat=${q?void 0:j5}
                    isAgentActive=${m1}
                    activeChatAgents=${W0}
                    currentChatJid=${$}
                    connectionStatus=${G}
                    activeModel=${a_}
                    modelUsage=${E_}
                    thinkingLevel=${o_}
                    supportsThinking=${h_}
                    contextUsage=${j0}
                    notificationsEnabled=${b0}
                    notificationPermission=${x$}
                    onToggleNotifications=${H0}
                    onModelChange=${p_}
                    onModelStateChange=${g1}
                />
                <${a8}
                    request=${Z_}
                    onRespond=${()=>{t(null),z0.current=null}}
                />
            </div>
        </div>
    `}function kZ(){let _=typeof window>"u"?new URLSearchParams:new URL(window.location.href).searchParams;return B`<${EZ} locationParams=${_} />`}e3(B`<${kZ} />`,document.getElementById("app"));

//# debugId=5E44770AA3E0DC3264756E2164756E21
//# sourceMappingURL=app.bundle.js.map
