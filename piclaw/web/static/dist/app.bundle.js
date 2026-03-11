var w4=((_)=>typeof require<"u"?require:typeof Proxy<"u"?new Proxy(_,{get:($,J)=>(typeof require<"u"?require:$)[J]}):_)(function(_){if(typeof require<"u")return require.apply(this,arguments);throw Error('Dynamic require of "'+_+'" is not supported')});var N2,X_,x1,r0,f1,E1,A4,W2={},v1=[],M4=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;function x0(_,$){for(var J in $)_[J]=$[J];return _}function R1(_){var $=_.parentNode;$&&$.removeChild(_)}function u1(_,$,J){var Y,X,Z,j={};for(Z in $)Z=="key"?Y=$[Z]:Z=="ref"?X=$[Z]:j[Z]=$[Z];if(arguments.length>2&&(j.children=arguments.length>3?N2.call(arguments,2):J),typeof _=="function"&&_.defaultProps!=null)for(Z in _.defaultProps)j[Z]===void 0&&(j[Z]=_.defaultProps[Z]);return j2(_,j,Y,X,null)}function j2(_,$,J,Y,X){var Z={type:_,props:$,key:J,ref:Y,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:X==null?++x1:X};return X_.vnode!=null&&X_.vnode(Z),Z}function q2(_){return _.children}function G2(_,$){this.props=_,this.context=$}function p0(_,$){if($==null)return _.__?p0(_.__,_.__.__k.indexOf(_)+1):null;for(var J;$<_.__k.length;$++)if((J=_.__k[$])!=null&&J.__e!=null)return J.__e;return typeof _.type=="function"?p0(_):null}function m1(_){var $,J;if((_=_.__)!=null&&_.__c!=null){for(_.__e=_.__c.base=null,$=0;$<_.__k.length;$++)if((J=_.__k[$])!=null&&J.__e!=null){_.__e=_.__c.base=J.__e;break}return m1(_)}}function D1(_){(!_.__d&&(_.__d=!0)&&r0.push(_)&&!O2.__r++||E1!==X_.debounceRendering)&&((E1=X_.debounceRendering)||f1)(O2)}function O2(){for(var _;O2.__r=r0.length;)_=r0.sort(function($,J){return $.__v.__b-J.__v.__b}),r0=[],_.some(function($){var J,Y,X,Z,j,G;$.__d&&(j=(Z=(J=$).__v).__e,(G=J.__P)&&(Y=[],(X=x0({},Z)).__v=Z.__v+1,n2(G,Z,X,J.__n,G.ownerSVGElement!==void 0,Z.__h!=null?[j]:null,Y,j==null?p0(Z):j,Z.__h),h1(Y,Z),Z.__e!=j&&m1(Z)))})}function g1(_,$,J,Y,X,Z,j,G,V,W){var Q,y,F,D,N,z,E,w=Y&&Y.__k||v1,M=w.length;for(J.__k=[],Q=0;Q<$.length;Q++)if((D=J.__k[Q]=(D=$[Q])==null||typeof D=="boolean"?null:typeof D=="string"||typeof D=="number"||typeof D=="bigint"?j2(null,D,null,null,D):Array.isArray(D)?j2(q2,{children:D},null,null,null):D.__b>0?j2(D.type,D.props,D.key,null,D.__v):D)!=null){if(D.__=J,D.__b=J.__b+1,(F=w[Q])===null||F&&D.key==F.key&&D.type===F.type)w[Q]=void 0;else for(y=0;y<M;y++){if((F=w[y])&&D.key==F.key&&D.type===F.type){w[y]=void 0;break}F=null}n2(_,D,F=F||W2,X,Z,j,G,V,W),N=D.__e,(y=D.ref)&&F.ref!=y&&(E||(E=[]),F.ref&&E.push(F.ref,null,D),E.push(y,D.__c||N,D)),N!=null?(z==null&&(z=N),typeof D.type=="function"&&D.__k!=null&&D.__k===F.__k?D.__d=V=c1(D,V,_):V=p1(_,D,F,w,N,V),W||J.type!=="option"?typeof J.type=="function"&&(J.__d=V):_.value=""):V&&F.__e==V&&V.parentNode!=_&&(V=p0(F))}for(J.__e=z,Q=M;Q--;)w[Q]!=null&&(typeof J.type=="function"&&w[Q].__e!=null&&w[Q].__e==J.__d&&(J.__d=p0(Y,Q+1)),l1(w[Q],w[Q]));if(E)for(Q=0;Q<E.length;Q++)i1(E[Q],E[++Q],E[++Q])}function c1(_,$,J){var Y,X;for(Y=0;Y<_.__k.length;Y++)(X=_.__k[Y])&&(X.__=_,$=typeof X.type=="function"?c1(X,$,J):p1(J,X,X,_.__k,X.__e,$));return $}function p1(_,$,J,Y,X,Z){var j,G,V;if($.__d!==void 0)j=$.__d,$.__d=void 0;else if(J==null||X!=Z||X.parentNode==null)_:if(Z==null||Z.parentNode!==_)_.appendChild(X),j=null;else{for(G=Z,V=0;(G=G.nextSibling)&&V<Y.length;V+=2)if(G==X)break _;_.insertBefore(X,Z),j=Z}return j!==void 0?j:X.nextSibling}function C1(_,$,J){$[0]==="-"?_.setProperty($,J):_[$]=J==null?"":typeof J!="number"||M4.test($)?J:J+"px"}function K2(_,$,J,Y,X){var Z;_:if($==="style")if(typeof J=="string")_.style.cssText=J;else{if(typeof Y=="string"&&(_.style.cssText=Y=""),Y)for($ in Y)J&&$ in J||C1(_.style,$,"");if(J)for($ in J)Y&&J[$]===Y[$]||C1(_.style,$,J[$])}else if($[0]==="o"&&$[1]==="n")Z=$!==($=$.replace(/Capture$/,"")),$=$.toLowerCase()in _?$.toLowerCase().slice(2):$.slice(2),_.l||(_.l={}),_.l[$+Z]=J,J?Y||_.addEventListener($,Z?k1:y1,Z):_.removeEventListener($,Z?k1:y1,Z);else if($!=="dangerouslySetInnerHTML"){if(X)$=$.replace(/xlink[H:h]/,"h").replace(/sName$/,"s");else if($!=="href"&&$!=="list"&&$!=="form"&&$!=="tabIndex"&&$!=="download"&&$ in _)try{_[$]=J==null?"":J;break _}catch(j){}typeof J=="function"||(J!=null&&(J!==!1||$[0]==="a"&&$[1]==="r")?_.setAttribute($,J):_.removeAttribute($))}}function y1(_){this.l[_.type+!1](X_.event?X_.event(_):_)}function k1(_){this.l[_.type+!0](X_.event?X_.event(_):_)}function n2(_,$,J,Y,X,Z,j,G,V){var W,Q,y,F,D,N,z,E,w,M,v,R=$.type;if($.constructor!==void 0)return null;J.__h!=null&&(V=J.__h,G=$.__e=J.__e,$.__h=null,Z=[G]),(W=X_.__b)&&W($);try{_:if(typeof R=="function"){if(E=$.props,w=(W=R.contextType)&&Y[W.__c],M=W?w?w.props.value:W.__:Y,J.__c?z=(Q=$.__c=J.__c).__=Q.__E:(("prototype"in R)&&R.prototype.render?$.__c=Q=new R(E,M):($.__c=Q=new G2(E,M),Q.constructor=R,Q.render=P4),w&&w.sub(Q),Q.props=E,Q.state||(Q.state={}),Q.context=M,Q.__n=Y,y=Q.__d=!0,Q.__h=[]),Q.__s==null&&(Q.__s=Q.state),R.getDerivedStateFromProps!=null&&(Q.__s==Q.state&&(Q.__s=x0({},Q.__s)),x0(Q.__s,R.getDerivedStateFromProps(E,Q.__s))),F=Q.props,D=Q.state,y)R.getDerivedStateFromProps==null&&Q.componentWillMount!=null&&Q.componentWillMount(),Q.componentDidMount!=null&&Q.__h.push(Q.componentDidMount);else{if(R.getDerivedStateFromProps==null&&E!==F&&Q.componentWillReceiveProps!=null&&Q.componentWillReceiveProps(E,M),!Q.__e&&Q.shouldComponentUpdate!=null&&Q.shouldComponentUpdate(E,Q.__s,M)===!1||$.__v===J.__v){Q.props=E,Q.state=Q.__s,$.__v!==J.__v&&(Q.__d=!1),Q.__v=$,$.__e=J.__e,$.__k=J.__k,$.__k.forEach(function(o){o&&(o.__=$)}),Q.__h.length&&j.push(Q);break _}Q.componentWillUpdate!=null&&Q.componentWillUpdate(E,Q.__s,M),Q.componentDidUpdate!=null&&Q.__h.push(function(){Q.componentDidUpdate(F,D,N)})}Q.context=M,Q.props=E,Q.state=Q.__s,(W=X_.__r)&&W($),Q.__d=!1,Q.__v=$,Q.__P=_,W=Q.render(Q.props,Q.state,Q.context),Q.state=Q.__s,Q.getChildContext!=null&&(Y=x0(x0({},Y),Q.getChildContext())),y||Q.getSnapshotBeforeUpdate==null||(N=Q.getSnapshotBeforeUpdate(F,D)),v=W!=null&&W.type===q2&&W.key==null?W.props.children:W,g1(_,Array.isArray(v)?v:[v],$,J,Y,X,Z,j,G,V),Q.base=$.__e,$.__h=null,Q.__h.length&&j.push(Q),z&&(Q.__E=Q.__=null),Q.__e=!1}else Z==null&&$.__v===J.__v?($.__k=J.__k,$.__e=J.__e):$.__e=b4(J.__e,$,J,Y,X,Z,j,V);(W=X_.diffed)&&W($)}catch(o){$.__v=null,(V||Z!=null)&&($.__e=G,$.__h=!!V,Z[Z.indexOf(G)]=null),X_.__e(o,$,J)}}function h1(_,$){X_.__c&&X_.__c($,_),_.some(function(J){try{_=J.__h,J.__h=[],_.some(function(Y){Y.call(J)})}catch(Y){X_.__e(Y,J.__v)}})}function b4(_,$,J,Y,X,Z,j,G){var V,W,Q,y=J.props,F=$.props,D=$.type,N=0;if(D==="svg"&&(X=!0),Z!=null){for(;N<Z.length;N++)if((V=Z[N])&&(V===_||(D?V.localName==D:V.nodeType==3))){_=V,Z[N]=null;break}}if(_==null){if(D===null)return document.createTextNode(F);_=X?document.createElementNS("http://www.w3.org/2000/svg",D):document.createElement(D,F.is&&F),Z=null,G=!1}if(D===null)y===F||G&&_.data===F||(_.data=F);else{if(Z=Z&&N2.call(_.childNodes),W=(y=J.props||W2).dangerouslySetInnerHTML,Q=F.dangerouslySetInnerHTML,!G){if(Z!=null)for(y={},N=0;N<_.attributes.length;N++)y[_.attributes[N].name]=_.attributes[N].value;(Q||W)&&(Q&&(W&&Q.__html==W.__html||Q.__html===_.innerHTML)||(_.innerHTML=Q&&Q.__html||""))}if(function(z,E,w,M,v){var R;for(R in w)R==="children"||R==="key"||R in E||K2(z,R,null,w[R],M);for(R in E)v&&typeof E[R]!="function"||R==="children"||R==="key"||R==="value"||R==="checked"||w[R]===E[R]||K2(z,R,E[R],w[R],M)}(_,F,y,X,G),Q)$.__k=[];else if(N=$.props.children,g1(_,Array.isArray(N)?N:[N],$,J,Y,X&&D!=="foreignObject",Z,j,Z?Z[0]:J.__k&&p0(J,0),G),Z!=null)for(N=Z.length;N--;)Z[N]!=null&&R1(Z[N]);G||(("value"in F)&&(N=F.value)!==void 0&&(N!==_.value||D==="progress"&&!N)&&K2(_,"value",N,y.value,!1),("checked"in F)&&(N=F.checked)!==void 0&&N!==_.checked&&K2(_,"checked",N,y.checked,!1))}return _}function i1(_,$,J){try{typeof _=="function"?_($):_.current=$}catch(Y){X_.__e(Y,J)}}function l1(_,$,J){var Y,X;if(X_.unmount&&X_.unmount(_),(Y=_.ref)&&(Y.current&&Y.current!==_.__e||i1(Y,null,$)),(Y=_.__c)!=null){if(Y.componentWillUnmount)try{Y.componentWillUnmount()}catch(Z){X_.__e(Z,$)}Y.base=Y.__P=null}if(Y=_.__k)for(X=0;X<Y.length;X++)Y[X]&&l1(Y[X],$,typeof _.type!="function");J||_.__e==null||R1(_.__e),_.__e=_.__d=void 0}function P4(_,$,J){return this.constructor(_,J)}function o1(_,$,J){var Y,X,Z;X_.__&&X_.__(_,$),X=(Y=typeof J=="function")?null:J&&J.__k||$.__k,Z=[],n2($,_=(!Y&&J||$).__k=u1(q2,null,[_]),X||W2,W2,$.ownerSVGElement!==void 0,!Y&&J?[J]:X?null:$.firstChild?N2.call($.childNodes):null,Z,!Y&&J?J:X?X.__e:$.firstChild,Y),h1(Z,_)}N2=v1.slice,X_={__e:function(_,$){for(var J,Y,X;$=$.__;)if((J=$.__c)&&!J.__)try{if((Y=J.constructor)&&Y.getDerivedStateFromError!=null&&(J.setState(Y.getDerivedStateFromError(_)),X=J.__d),J.componentDidCatch!=null&&(J.componentDidCatch(_),X=J.__d),X)return J.__E=J}catch(Z){_=Z}throw _}},x1=0,G2.prototype.setState=function(_,$){var J;J=this.__s!=null&&this.__s!==this.state?this.__s:this.__s=x0({},this.state),typeof _=="function"&&(_=_(x0({},J),this.props)),_&&x0(J,_),_!=null&&this.__v&&($&&this.__h.push($),D1(this))},G2.prototype.forceUpdate=function(_){this.__v&&(this.__e=!0,_&&this.__h.push(_),D1(this))},G2.prototype.render=q2,r0=[],f1=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,O2.__r=0,A4=0;var B2,V0,w1,s0=0,l2=[],A1=X_.__b,M1=X_.__r,b1=X_.diffed,P1=X_.__c,I1=X_.unmount;function d2(_,$){X_.__h&&X_.__h(V0,_,s0||$),s0=0;var J=V0.__H||(V0.__H={__:[],__h:[]});return _>=J.__.length&&J.__.push({}),J.__[_]}function x(_){return s0=1,I4(d1,_)}function I4(_,$,J){var Y=d2(B2++,2);return Y.t=_,Y.__c||(Y.__=[J?J($):d1(void 0,$),function(X){var Z=Y.t(Y.__[0],X);Y.__[0]!==Z&&(Y.__=[Z,Y.__[1]],Y.__c.setState({}))}],Y.__c=V0),Y.__}function g(_,$){var J=d2(B2++,3);!X_.__s&&n1(J.__H,$)&&(J.__=_,J.__H=$,V0.__H.__h.push(J))}function k(_){return s0=5,A0(function(){return{current:_}},[])}function A0(_,$){var J=d2(B2++,7);return n1(J.__H,$)&&(J.__=_(),J.__H=$,J.__h=_),J.__}function P(_,$){return s0=8,A0(function(){return _},$)}function S4(){l2.forEach(function(_){if(_.__P)try{_.__H.__h.forEach(V2),_.__H.__h.forEach(o2),_.__H.__h=[]}catch($){_.__H.__h=[],X_.__e($,_.__v)}}),l2=[]}X_.__b=function(_){V0=null,A1&&A1(_)},X_.__r=function(_){M1&&M1(_),B2=0;var $=(V0=_.__c).__H;$&&($.__h.forEach(V2),$.__h.forEach(o2),$.__h=[])},X_.diffed=function(_){b1&&b1(_);var $=_.__c;$&&$.__H&&$.__H.__h.length&&(l2.push($)!==1&&w1===X_.requestAnimationFrame||((w1=X_.requestAnimationFrame)||function(J){var Y,X=function(){clearTimeout(Z),S1&&cancelAnimationFrame(Y),setTimeout(J)},Z=setTimeout(X,100);S1&&(Y=requestAnimationFrame(X))})(S4)),V0=void 0},X_.__c=function(_,$){$.some(function(J){try{J.__h.forEach(V2),J.__h=J.__h.filter(function(Y){return!Y.__||o2(Y)})}catch(Y){$.some(function(X){X.__h&&(X.__h=[])}),$=[],X_.__e(Y,J.__v)}}),P1&&P1(_,$)},X_.unmount=function(_){I1&&I1(_);var $=_.__c;if($&&$.__H)try{$.__H.__.forEach(V2)}catch(J){X_.__e(J,$.__v)}};var S1=typeof requestAnimationFrame=="function";function V2(_){var $=V0;typeof _.__c=="function"&&_.__c(),V0=$}function o2(_){var $=V0;_.__c=_.__(),V0=$}function n1(_,$){return!_||_.length!==$.length||$.some(function(J,Y){return J!==_[Y]})}function d1(_,$){return typeof $=="function"?$(_):$}var r1=function(_,$,J,Y){var X;$[0]=0;for(var Z=1;Z<$.length;Z++){var j=$[Z++],G=$[Z]?($[0]|=j?1:2,J[$[Z++]]):$[++Z];j===3?Y[0]=G:j===4?Y[1]=Object.assign(Y[1]||{},G):j===5?(Y[1]=Y[1]||{})[$[++Z]]=G:j===6?Y[1][$[++Z]]+=G+"":j?(X=_.apply(G,r1(_,G,J,["",null])),Y.push(X),G[0]?$[0]|=2:($[Z-2]=0,$[Z]=X)):Y.push(G)}return Y},T1=new Map,U=function(_){var $=T1.get(this);return $||($=new Map,T1.set(this,$)),($=r1(this,$.get(_)||($.set(_,$=function(J){for(var Y,X,Z=1,j="",G="",V=[0],W=function(F){Z===1&&(F||(j=j.replace(/^\s*\n\s*|\s*\n\s*$/g,"")))?V.push(0,F,j):Z===3&&(F||j)?(V.push(3,F,j),Z=2):Z===2&&j==="..."&&F?V.push(4,F,0):Z===2&&j&&!F?V.push(5,0,!0,j):Z>=5&&((j||!F&&Z===5)&&(V.push(Z,0,j,X),Z=6),F&&(V.push(Z,F,0,X),Z=6)),j=""},Q=0;Q<J.length;Q++){Q&&(Z===1&&W(),W(Q));for(var y=0;y<J[Q].length;y++)Y=J[Q][y],Z===1?Y==="<"?(W(),V=[V],Z=3):j+=Y:Z===4?j==="--"&&Y===">"?(Z=1,j=""):j=Y+j[0]:G?Y===G?G="":j+=Y:Y==='"'||Y==="'"?G=Y:Y===">"?(W(),Z=1):Z&&(Y==="="?(Z=5,X=j,j=""):Y==="/"&&(Z<5||J[Q][y+1]===">")?(W(),Z===3&&(V=V[0]),Z=V,(V=V[0]).push(2,0,Z),Z=0):Y===" "||Y==="\t"||Y===`
`||Y==="\r"?(W(),Z=2):j+=Y),Z===3&&j==="!--"&&(Z=4,V=V[0])}return W(),V}(_)),$),arguments,[])).length>1?$:$[0]}.bind(u1);async function d_(_,$={}){let J=await fetch(""+_,{...$,headers:{"Content-Type":"application/json",...$.headers}});if(!J.ok){let Y=await J.json().catch(()=>({error:"Unknown error"}));throw Error(Y.error||`HTTP ${J.status}`)}return J.json()}async function U2(_=10,$=null){let J=`/timeline?limit=${_}`;if($)J+=`&before=${$}`;return d_(J)}async function s1(_,$=50,J=0){return d_(`/hashtag/${encodeURIComponent(_)}?limit=${$}&offset=${J}`)}async function a1(_,$=50,J=0){return d_(`/search?q=${encodeURIComponent(_)}&limit=${$}&offset=${J}`)}async function t1(_,$=!1){let J=`/post/${_}?cascade=${$?"true":"false"}`;return d_(J,{method:"DELETE"})}async function r2(_,$,J=null,Y=[]){return d_(`/agent/${_}/message`,{method:"POST",body:JSON.stringify({content:$,thread_id:J,media_ids:Y})})}async function e1(){return d_("/agents")}async function _3(_=null){let $=_?`?chat_jid=${encodeURIComponent(_)}`:"";return d_(`/agent/status${$}`)}async function s2(_=null){let $=_?`?chat_jid=${encodeURIComponent(_)}`:"";return d_(`/agent/context${$}`)}async function a0(_=null){let $=_?`?chat_jid=${encodeURIComponent(_)}`:"";return d_(`/agent/models${$}`)}async function $3(_){let $=new FormData;$.append("file",_);let J=await fetch("/media/upload",{method:"POST",body:$});if(!J.ok){let Y=await J.json().catch(()=>({error:"Upload failed"}));throw Error(Y.error||`HTTP ${J.status}`)}return J.json()}async function a2(_,$){let J=await fetch("/agent/respond",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({request_id:_,outcome:$})});if(!J.ok){let Y=await J.json().catch(()=>({error:"Failed to respond"}));throw Error(Y.error||`HTTP ${J.status}`)}return J.json()}async function J3(_,$){let J=await fetch("/agent/whitelist",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({pattern:_,description:$})});if(!J.ok){let Y=await J.json().catch(()=>({error:"Failed to add to whitelist"}));throw Error(Y.error||`HTTP ${J.status}`)}return J.json()}async function Y3(_,$="thought"){let J=`/agent/thought?turn_id=${encodeURIComponent(_)}&panel=${encodeURIComponent($)}`;return d_(J)}async function Z3(_,$,J){return d_("/agent/thought/visibility",{method:"POST",body:JSON.stringify({turn_id:_,panel:$,expanded:Boolean(J)})})}function t0(_){return`/media/${_}`}function X3(_){return`/media/${_}/thumbnail`}async function z2(_){let $=await fetch(`/media/${_}/info`);if(!$.ok)throw Error("Failed to get media info");return $.json()}async function H2(_="",$=2,J=!1){let Y=`/workspace/tree?path=${encodeURIComponent(_)}&depth=${$}&show_hidden=${J?"1":"0"}`;return d_(Y)}async function Q3(_,$=20000,J=null){let Y=J?`&mode=${encodeURIComponent(J)}`:"",X=`/workspace/file?path=${encodeURIComponent(_)}&max=${$}${Y}`;return d_(X)}async function K3(_){return d_("/workspace/attach",{method:"POST",body:JSON.stringify({path:_})})}async function t2(_,$="",J={}){let Y=new FormData;Y.append("file",_);let X=new URLSearchParams;if($)X.set("path",$);if(J.overwrite)X.set("overwrite","1");let Z=X.toString(),j=Z?`/workspace/upload?${Z}`:"/workspace/upload",G=await fetch(""+j,{method:"POST",body:Y});if(!G.ok){let V=await G.json().catch(()=>({error:"Upload failed"})),W=Error(V.error||`HTTP ${G.status}`);throw W.status=G.status,W.code=V.code,W}return G.json()}async function j3(_,$,J=""){let Y=await fetch("/workspace/file",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({path:_,name:$,content:J})});if(!Y.ok){let X=await Y.json().catch(()=>({error:"Create failed"})),Z=Error(X.error||`HTTP ${Y.status}`);throw Z.status=Y.status,Z.code=X.code,Z}return Y.json()}async function G3(_,$){let J=await fetch("/workspace/rename",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({path:_,name:$})});if(!J.ok){let Y=await J.json().catch(()=>({error:"Rename failed"})),X=Error(Y.error||`HTTP ${J.status}`);throw X.status=J.status,X.code=Y.code,X}return J.json()}async function V3(_,$){let J=await fetch("/workspace/move",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({path:_,target:$})});if(!J.ok){let Y=await J.json().catch(()=>({error:"Move failed"})),X=Error(Y.error||`HTTP ${J.status}`);throw X.status=J.status,X.code=Y.code,X}return J.json()}async function W3(_){let $=`/workspace/file?path=${encodeURIComponent(_||"")}`;return d_($,{method:"DELETE"})}async function F2(_,$=!1){return d_("/workspace/visibility",{method:"POST",body:JSON.stringify({visible:Boolean(_),show_hidden:Boolean($)})})}function e2(_){return`/workspace/raw?path=${encodeURIComponent(_)}`}function O3(_,$=!1){return`/workspace/download?${`path=${encodeURIComponent(_||"")}&show_hidden=${$?"1":"0"}`}`}class _1{constructor(_,$){this.onEvent=_,this.onStatusChange=$,this.eventSource=null,this.reconnectTimeout=null,this.reconnectDelay=1000,this.status="disconnected",this.reconnectAttempts=0,this.cooldownUntil=0,this.connecting=!1}connect(){if(this.connecting)return;if(this.eventSource&&this.status==="connected")return;if(this.connecting=!0,this.eventSource)this.eventSource.close();this.eventSource=new EventSource("/sse/stream"),this.eventSource.onopen=()=>{this.connecting=!1,this.reconnectDelay=1000,this.reconnectAttempts=0,this.cooldownUntil=0,this.status="connected",this.onStatusChange("connected")},this.eventSource.onerror=()=>{this.connecting=!1,this.status="disconnected",this.onStatusChange("disconnected"),this.reconnectAttempts+=1,this.scheduleReconnect()},this.eventSource.addEventListener("connected",()=>{console.log("SSE connected"),this.onEvent("connected",{})}),this.eventSource.addEventListener("new_post",(_)=>{this.onEvent("new_post",JSON.parse(_.data))}),this.eventSource.addEventListener("new_reply",(_)=>{this.onEvent("new_reply",JSON.parse(_.data))}),this.eventSource.addEventListener("agent_response",(_)=>{this.onEvent("agent_response",JSON.parse(_.data))}),this.eventSource.addEventListener("interaction_updated",(_)=>{this.onEvent("interaction_updated",JSON.parse(_.data))}),this.eventSource.addEventListener("interaction_deleted",(_)=>{this.onEvent("interaction_deleted",JSON.parse(_.data))}),this.eventSource.addEventListener("agent_status",(_)=>{this.onEvent("agent_status",JSON.parse(_.data))}),this.eventSource.addEventListener("agent_steer_queued",(_)=>{this.onEvent("agent_steer_queued",JSON.parse(_.data))}),this.eventSource.addEventListener("agent_request",(_)=>{this.onEvent("agent_request",JSON.parse(_.data))}),this.eventSource.addEventListener("workspace_update",(_)=>{this.onEvent("workspace_update",JSON.parse(_.data))}),this.eventSource.addEventListener("agent_request_timeout",(_)=>{this.onEvent("agent_request_timeout",JSON.parse(_.data))}),this.eventSource.addEventListener("agent_draft",(_)=>{this.onEvent("agent_draft",JSON.parse(_.data))}),this.eventSource.addEventListener("agent_draft_delta",(_)=>{this.onEvent("agent_draft_delta",JSON.parse(_.data))}),this.eventSource.addEventListener("agent_thought",(_)=>{this.onEvent("agent_thought",JSON.parse(_.data))}),this.eventSource.addEventListener("agent_thought_delta",(_)=>{this.onEvent("agent_thought_delta",JSON.parse(_.data))}),this.eventSource.addEventListener("model_changed",(_)=>{this.onEvent("model_changed",JSON.parse(_.data))}),this.eventSource.addEventListener("ui_theme",(_)=>{this.onEvent("ui_theme",JSON.parse(_.data))})}scheduleReconnect(){if(this.reconnectTimeout)clearTimeout(this.reconnectTimeout);let _=10,$=60000,J=Date.now();if(this.reconnectAttempts>=_)this.cooldownUntil=Math.max(this.cooldownUntil,J+$),this.reconnectAttempts=0;let Y=Math.max(this.cooldownUntil-J,0),X=Math.max(this.reconnectDelay,Y);this.reconnectTimeout=setTimeout(()=>{console.log("Reconnecting SSE..."),this.connect()},X),this.reconnectDelay=Math.min(this.reconnectDelay*2,30000)}reconnectIfNeeded(){if(this.status==="connected")return;let _=Date.now();if(this.cooldownUntil&&_<this.cooldownUntil)return;if(this.reconnectTimeout)clearTimeout(this.reconnectTimeout),this.reconnectTimeout=null;this.connect()}disconnect(){if(this.connecting=!1,this.eventSource)this.eventSource.close(),this.eventSource=null;if(this.reconnectTimeout)clearTimeout(this.reconnectTimeout),this.reconnectTimeout=null}}function v0(_){if(typeof window>"u"||!window.localStorage)return null;try{return window.localStorage.getItem(_)}catch{return null}}function A_(_,$){if(typeof window>"u"||!window.localStorage)return;try{window.localStorage.setItem(_,$)}catch{}}function h0(_,$=!1){let J=v0(_);if(J===null)return $;return J==="true"}function i0(_,$=null){let J=v0(_);if(J===null)return $;let Y=parseInt(J,10);return Number.isFinite(Y)?Y:$}function f0({prefix:_="file",label:$,title:J,onRemove:Y,removeTitle:X="Remove",icon:Z="file"}){let j=`${_}-file-pill`,G=`${_}-file-name`,V=`${_}-file-remove`,W=Z==="message"?U`<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
      </svg>`:U`<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
        <polyline points="14 2 14 8 20 8"/>
      </svg>`;return U`
    <span class=${j} title=${J||$}>
      ${W}
      <span class=${G}>${$}</span>
      ${Y&&U`
        <button
          class=${V}
          onClick=${(Q)=>{Q.preventDefault(),Q.stopPropagation(),Y()}}
          title=${X}
          type="button"
        >
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M18 6L6 18M6 6l12 12"/>
          </svg>
        </button>
      `}
    </span>
  `}var x4=[{name:"/model",description:"Select model or list available models"},{name:"/cycle-model",description:"Cycle to the next available model"},{name:"/thinking",description:"Show or set thinking level"},{name:"/cycle-thinking",description:"Cycle thinking level"},{name:"/theme",description:"Set UI theme (use /theme list for options)"},{name:"/tint",description:"Tint default light/dark UI (usage: /tint #hex or /tint off)"},{name:"/state",description:"Show current session state"},{name:"/stats",description:"Show session token and cost stats"},{name:"/context",description:"Show context window usage"},{name:"/last",description:"Show last assistant response"},{name:"/compact",description:"Manually compact the session"},{name:"/auto-compact",description:"Toggle auto-compaction"},{name:"/auto-retry",description:"Toggle auto-retry"},{name:"/abort",description:"Abort the current response"},{name:"/abort-retry",description:"Abort retry backoff"},{name:"/abort-bash",description:"Abort running bash command"},{name:"/shell",description:"Run a shell command and return output"},{name:"/bash",description:"Run a shell command and add output to context"},{name:"/queue",description:"Queue a follow-up message (one-at-a-time)"},{name:"/queue-all",description:"Queue a follow-up message (batch all)"},{name:"/steering-mode",description:"Set steering mode (all|one)"},{name:"/followup-mode",description:"Set follow-up mode (all|one)"},{name:"/session-name",description:"Set or show the session name"},{name:"/new-session",description:"Start a new session"},{name:"/switch-session",description:"Switch to a session file"},{name:"/fork",description:"Fork from a previous message"},{name:"/forks",description:"List forkable messages"},{name:"/tree",description:"List the session tree"},{name:"/label",description:"Set or clear a label on a tree entry"},{name:"/labels",description:"List labeled entries"},{name:"/agent-name",description:"Set or show the agent display name"},{name:"/agent-avatar",description:"Set or show the agent avatar URL"},{name:"/user-name",description:"Set or show your display name"},{name:"/user-avatar",description:"Set or show your avatar URL"},{name:"/user-github",description:"Set name/avatar from GitHub profile"},{name:"/export-html",description:"Export session to HTML"},{name:"/passkey",description:"Manage passkeys (enrol/list/delete)"},{name:"/totp",description:"Show a TOTP enrolment QR code"},{name:"/qr",description:"Generate a QR code for text or URL"},{name:"/search",description:"Search notes and skills in the workspace"},{name:"/restart",description:"Restart the agent and stop subprocesses"},{name:"/commands",description:"List available commands"}];function f4({usage:_}){let $=Math.min(100,Math.max(0,_.percent||0)),J=_.tokens,Y=_.contextWindow,X=J!=null?`Context: ${N3(J)} / ${N3(Y)} tokens (${$.toFixed(0)}%)`:`Context: ${$.toFixed(0)}%`,Z=7,j=2*Math.PI*7,G=$/100*j,V=$>90?"var(--context-red, #ef4444)":$>75?"var(--context-amber, #f59e0b)":"var(--context-green, #22c55e)";return U`
        <span class="compose-context-pie icon-btn" title=${X}>
            <svg width="16" height="16" viewBox="0 0 20 20">
                <circle cx="10" cy="10" r=${7}
                    fill="none"
                    stroke="var(--context-track, rgba(128,128,128,0.2))"
                    stroke-width="2.5" />
                <circle cx="10" cy="10" r=${7}
                    fill="none"
                    stroke=${V}
                    stroke-width="2.5"
                    stroke-dasharray=${`${G} ${j}`}
                    stroke-linecap="round"
                    transform="rotate(-90 10 10)" />
            </svg>
        </span>
    `}function N3(_){if(_==null)return"?";if(_>=1e6)return(_/1e6).toFixed(1)+"M";if(_>=1000)return(_/1000).toFixed(0)+"K";return String(_)}function q3({onPost:_,onFocus:$,searchMode:J,onSearch:Y,onEnterSearch:X,onExitSearch:Z,fileRefs:j=[],onRemoveFileRef:G,onClearFileRefs:V,messageRefs:W=[],onRemoveMessageRef:Q,onClearMessageRefs:y,activeModel:F=null,thinkingLevel:D=null,supportsThinking:N=!1,contextUsage:z=null,notificationsEnabled:E=!1,notificationPermission:w="default",onToggleNotifications:M,onModelChange:v,onModelStateChange:R}){let[o,__]=x(""),[s,a]=x(""),[j_,h]=x(!1),[e,H_]=x([]),[J_,Q_]=x(!1),[W_,F_]=x([]),[Z_,r]=x(0),[G_,t]=x(!1),[K_,N_]=x(!1),[M_,B_]=x(!1),[y_,x_]=x([]),[U_,P_]=x(!1),z_=k(null),E_=k(null),p_=k(null),O0=k(null),b_=k(0),k_=200,e_=(H)=>{let I=new Set,u=[];for(let $_ of H||[]){if(typeof $_!=="string")continue;let q_=$_.trim();if(!q_||I.has(q_))continue;I.add(q_),u.push(q_)}return u},U0=()=>{let H=v0("piclaw_compose_history");if(!H)return[];try{let I=JSON.parse(H);if(!Array.isArray(I))return[];return e_(I)}catch{return[]}},h_=(H)=>{A_("piclaw_compose_history",JSON.stringify(H))},a_=k(U0()),f_=k(-1),L_=k(""),b=!j_&&(o.trim()||e.length>0||j.length>0||W.length>0),d=typeof window<"u"&&typeof navigator<"u"&&Boolean(navigator.geolocation)&&Boolean(window.isSecureContext),u_=typeof window<"u"&&typeof Notification<"u",D0=typeof window<"u"?Boolean(window.isSecureContext):!1,b0=u_&&D0&&w!=="denied",X0=w==="granted"&&E,z0=X0?"Disable notifications":"Enable notifications",_0=N&&D?` (${D})`:"",Q0=F?`${F}${_0}`:"",m_=(H)=>{if(!H||typeof H!=="object")return;let I=H.model??H.current;if(typeof R==="function")R({model:I??null,thinking_level:H.thinking_level??null,supports_thinking:H.supports_thinking});if(I&&typeof v==="function")v(I)},i_=(H)=>{let I=H||z_.current;if(!I)return;I.style.height="auto",I.style.height=`${I.scrollHeight}px`,I.style.overflowY="hidden"},v_=(H)=>{if(!H.startsWith("/")||H.includes(`
`)){t(!1),F_([]);return}let I=H.toLowerCase().split(" ")[0];if(I.length<1){t(!1),F_([]);return}let u=x4.filter(($_)=>$_.name.startsWith(I)||$_.name.replace(/-/g,"").startsWith(I.replace(/-/g,"")));if(u.length>0&&!(u.length===1&&u[0].name===I))F_(u),r(0),t(!0);else t(!1),F_([])},C0=(H)=>{let I=o,u=I.indexOf(" "),$_=u>=0?I.slice(u):"",q_=H.name+$_;__(q_),t(!1),F_([]),requestAnimationFrame(()=>{let T_=z_.current;if(!T_)return;let O_=q_.length;T_.selectionStart=O_,T_.selectionEnd=O_,T_.focus()})},$0=(H)=>{if(J)a(H);else __(H),v_(H);requestAnimationFrame(()=>i_())},H0=(H)=>{let I=J?s:o,u=I&&!I.endsWith(`
`)?`
`:"",$_=`${I}${u}${H}`.trimStart();$0($_)},R0=(H)=>{let I=H?.command?.model_label;if(I)return I;let u=H?.command?.message;if(typeof u==="string"){let $_=u.match(/•\s+([^\n]+?)\s+\(current\)/);if($_?.[1])return $_[1].trim()}return null},g_=async(H)=>{if(J||j_||K_)return;N_(!0);try{let I=await r2("default",H,null,[]),u=R0(I);return m_({model:u??F??null,thinking_level:I?.command?.thinking_level,supports_thinking:I?.command?.supports_thinking}),_?.(),!0}catch(I){return console.error("Failed to switch model:",I),alert("Failed to switch model: "+I.message),!1}finally{N_(!1)}},J0=async()=>{await g_("/cycle-model")},l_=async(H)=>{if(!H||K_)return;if(await g_(`/model ${H}`))B_(!1)},N0=(H)=>{H.preventDefault(),H.stopPropagation(),B_((I)=>!I)},q0=async(H)=>{let I=typeof H==="string"?H:H&&typeof H?.target?.value==="string"?H.target.value:o,u=typeof I==="string"?I:"";if(!u.trim()&&e.length===0&&j.length===0&&W.length===0)return;h(!0);try{let $_=[];for(let R_ of e){let c_=await $3(R_);$_.push(c_.id)}let q_=u.trim(),T_=j.length?`Files:
${j.map((R_)=>`- ${R_}`).join(`
`)}`:"",O_=W.length?`Referenced messages:
${W.map((R_)=>`- message:${R_}`).join(`
`)}`:"",w_=$_.length?`Images:
${$_.map((R_,c_)=>{let n_=e[c_]?.name||`image-${c_+1}`;return`- attachment:${R_} (${n_})`}).join(`
`)}`:"",r_=[q_,T_,O_,w_].filter(Boolean).join(`

`),w0=await r2("default",r_,null,$_);if(w0?.command)m_({model:w0.command.model_label??F??null,thinking_level:w0.command.thinking_level,supports_thinking:w0.command.supports_thinking});if(q_){let R_=a_.current,c_=e_(R_.filter((n0)=>n0!==q_));if(c_.push(q_),c_.length>200)c_.splice(0,c_.length-200);a_.current=c_,h_(c_),f_.current=-1,L_.current=""}__(""),H_([]),V?.(),y?.(),_?.()}catch($_){console.error("Failed to post:",$_),alert("Failed to post: "+$_.message)}finally{h(!1)}},P0=(H)=>{if(H.isComposing)return;if(J&&H.key==="Escape"){H.preventDefault(),a(""),Z?.();return}if(G_&&W_.length>0){let I=z_.current?.value??(J?s:o);if(!String(I||"").startsWith("/"))t(!1),F_([]);else{if(H.key==="ArrowDown"){H.preventDefault(),r((u)=>(u+1)%W_.length);return}if(H.key==="ArrowUp"){H.preventDefault(),r((u)=>(u-1+W_.length)%W_.length);return}if(H.key==="Tab"){H.preventDefault(),C0(W_[Z_]);return}if(H.key==="Enter"&&!H.shiftKey){if(!(z_.current?.value??(J?s:o)).includes(" ")){H.preventDefault();let q_=W_[Z_];t(!1),F_([]),q0(q_.name);return}}if(H.key==="Escape"){H.preventDefault(),t(!1),F_([]);return}}}if(!J&&(H.key==="ArrowUp"||H.key==="ArrowDown")&&!H.metaKey&&!H.ctrlKey&&!H.altKey&&!H.shiftKey){let I=z_.current;if(!I)return;let u=I.value||"",$_=I.selectionStart===0&&I.selectionEnd===0,q_=I.selectionStart===u.length&&I.selectionEnd===u.length;if(H.key==="ArrowUp"&&$_||H.key==="ArrowDown"&&q_){let T_=a_.current;if(!T_.length)return;H.preventDefault();let O_=f_.current;if(H.key==="ArrowUp"){if(O_===-1)L_.current=u,O_=T_.length-1;else if(O_>0)O_-=1;f_.current=O_,$0(T_[O_]||"")}else{if(O_===-1)return;if(O_<T_.length-1)O_+=1,f_.current=O_,$0(T_[O_]||"");else f_.current=-1,$0(L_.current||""),L_.current=""}requestAnimationFrame(()=>{let w_=z_.current;if(!w_)return;let r_=w_.value.length;w_.selectionStart=r_,w_.selectionEnd=r_});return}}if(H.key==="Enter"&&!H.shiftKey){H.preventDefault();let I=z_.current?.value??(J?s:o);if(J){if(I.trim())Y?.(I.trim())}else q0(I)}},y0=(H)=>{let I=Array.from(H||[]).filter((u)=>u&&u.type&&u.type.startsWith("image/"));if(!I.length)return;H_((u)=>[...u,...I])},F0=(H)=>{y0(H.target.files),H.target.value=""},I_=(H)=>{if(J)return;H.preventDefault(),H.stopPropagation(),b_.current+=1,Q_(!0)},K0=(H)=>{if(J)return;if(H.preventDefault(),H.stopPropagation(),b_.current=Math.max(0,b_.current-1),b_.current===0)Q_(!1)},Y0=(H)=>{if(J)return;if(H.preventDefault(),H.stopPropagation(),H.dataTransfer)H.dataTransfer.dropEffect="copy";Q_(!0)},S_=(H)=>{if(J)return;H.preventDefault(),H.stopPropagation(),b_.current=0,Q_(!1),y0(H.dataTransfer?.files||[])},o_=(H)=>{if(J)return;let I=H.clipboardData?.items;if(!I||!I.length)return;let u=[];for(let $_ of I){if($_.kind!=="file")continue;let q_=$_.getAsFile?.();if(q_)u.push(q_)}if(u.length>0)H.preventDefault(),y0(u)},j0=(H)=>{H_((I)=>I.filter((u,$_)=>$_!==H))},k0=()=>{if(!navigator.geolocation){alert("Geolocation is not available in this browser.");return}navigator.geolocation.getCurrentPosition((H)=>{let{latitude:I,longitude:u,accuracy:$_}=H.coords,q_=`${I.toFixed(5)}, ${u.toFixed(5)}`,T_=Number.isFinite($_)?` ±${Math.round($_)}m`:"",O_=`https://maps.google.com/?q=${I},${u}`,w_=`Location: ${q_}${T_} ${O_}`;H0(w_)},(H)=>{let I=H?.message||"Unable to retrieve location.";alert(`Location error: ${I}`)},{enableHighAccuracy:!0,timeout:1e4,maximumAge:0})};g(()=>{if(!M_)return;P_(!0),a0().then((H)=>{let I=Array.isArray(H?.models)?H.models.filter((u)=>typeof u==="string"&&u.trim().length>0):[];x_(I),m_(H)}).catch((H)=>{console.warn("Failed to load model list:",H),x_([])}).finally(()=>{P_(!1)})},[M_,F]),g(()=>{if(J)B_(!1)},[J]),g(()=>{if(!M_)return;let H=(I)=>{let u=p_.current,$_=O0.current,q_=I.target;if(u&&u.contains(q_))return;if($_&&$_.contains(q_))return;B_(!1)};return document.addEventListener("pointerdown",H),()=>document.removeEventListener("pointerdown",H)},[M_]);let I0=(H)=>{let I=H.target.value;i_(H.target),$0(I)};return g(()=>{requestAnimationFrame(()=>i_())},[o,s,J]),U`
        <div class="compose-box">
            <div
                class=${`compose-input-wrapper${J_?" drag-active":""}`}
                onDragEnter=${I_}
                onDragOver=${Y0}
                onDragLeave=${K0}
                onDrop=${S_}
            >
                <div class="compose-input-main">
                    ${!J&&(j.length>0||e.length>0||W.length>0)&&U`
                        <div class="compose-file-refs">
                            ${W.map((H)=>{return U`
                                    <${f0}
                                        key=${"msg-"+H}
                                        prefix="compose"
                                        label=${"msg:"+H}
                                        title=${"Message reference: "+H}
                                        removeTitle="Remove reference"
                                        icon="message"
                                        onRemove=${()=>Q?.(H)}
                                    />
                                `})}
                            ${j.map((H)=>{let I=H.split("/").pop()||H;return U`
                                    <${f0}
                                        prefix="compose"
                                        label=${I}
                                        title=${H}
                                        removeTitle="Remove file"
                                        onRemove=${()=>G?.(H)}
                                    />
                                `})}
                            ${e.map((H,I)=>{let u=H?.name||`image-${I+1}`;return U`
                                    <${f0}
                                        key=${u+I}
                                        prefix="compose"
                                        label=${u}
                                        title=${u}
                                        removeTitle="Remove image"
                                        onRemove=${()=>j0(I)}
                                    />
                                `})}
                        </div>
                    `}
                    <textarea
                        ref=${z_}
                        placeholder=${J?"Search (Enter to run)...":"Message (Enter to send, Shift+Enter for newline)..."}
                        value=${J?s:o}
                        onInput=${I0}
                        onKeyDown=${P0}
                        onPaste=${o_}
                        onFocus=${$}
                        onClick=${$}
                        disabled=${j_}
                        rows="1"
                    />
                    ${G_&&W_.length>0&&U`
                        <div class="slash-autocomplete" ref=${E_}>
                            ${W_.map((H,I)=>U`
                                <div
                                    key=${H.name}
                                    class=${`slash-item${I===Z_?" active":""}`}
                                    onMouseDown=${(u)=>{u.preventDefault(),C0(H)}}
                                    onMouseEnter=${()=>r(I)}
                                >
                                    <span class="slash-name">${H.name}</span>
                                    <span class="slash-desc">${H.description}</span>
                                </div>
                            `)}
                        </div>
                    `}
                    ${M_&&!J&&U`
                        <div class="compose-model-popup" ref=${p_}>
                            <div class="compose-model-popup-title">Select model</div>
                            <div class="compose-model-popup-menu" role="menu" aria-label="Model picker">
                                ${U_&&U`
                                    <div class="compose-model-popup-empty">Loading models…</div>
                                `}
                                ${!U_&&y_.length===0&&U`
                                    <div class="compose-model-popup-empty">No models available.</div>
                                `}
                                ${!U_&&y_.map((H)=>U`
                                    <button
                                        key=${H}
                                        type="button"
                                        role="menuitem"
                                        class=${`compose-model-popup-item${F===H?" active":""}`}
                                        onClick=${()=>{l_(H)}}
                                        disabled=${K_}
                                    >
                                        ${H}
                                    </button>
                                `)}
                            </div>
                            <div class="compose-model-popup-actions">
                                <button
                                    type="button"
                                    class="compose-model-popup-btn"
                                    onClick=${()=>{J0()}}
                                    disabled=${K_}
                                >
                                    Next model
                                </button>
                            </div>
                        </div>
                    `}
                </div>
                <div class="compose-footer">
                    ${!J&&F&&U`
                        <div class="compose-meta-row">
                            <button
                                ref=${O0}
                                type="button"
                                class="compose-model-hint compose-model-hint-btn"
                                title=${K_?"Switching model…":`Current model: ${Q0} (tap to open model picker)`}
                                aria-label="Open model picker"
                                onClick=${N0}
                                disabled=${j_||K_}
                            >
                                ${K_?"Switching…":Q0}
                            </button>
                        </div>
                    `}
                    <div class="compose-actions ${J?"search-mode":""}">
                    ${!J&&z&&z.percent!=null&&U`
                        <${f4} usage=${z} />
                    `}
                    <button
                        class="icon-btn search-toggle"
                        onClick=${J?Z:X}
                        title=${J?"Close search":"Search"}
                    >
                        ${J?U`
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
                    ${d&&!J&&U`
                        <button
                            class="icon-btn location-btn"
                            onClick=${k0}
                            title="Share location"
                            type="button"
                            disabled=${j_}
                        >
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <circle cx="12" cy="12" r="10" />
                                <path d="M12 2a14 14 0 0 1 0 20a14 14 0 0 1 0-20" />
                                <path d="M2 12h20" />
                            </svg>
                        </button>
                    `}
                    ${b0&&!J&&U`
                        <button
                            class=${`icon-btn notification-btn${X0?" active":""}`}
                            onClick=${M}
                            title=${z0}
                            type="button"
                        >
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M18 8a6 6 0 1 0-12 0c0 7-3 9-3 9h18s-3-2-3-9" />
                                <path d="M13.73 21a2 2 0 0 1-3.46 0" />
                            </svg>
                        </button>
                    `}
                    ${!J&&U`
                        <label class="icon-btn" title="Attach image">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>
                            <input type="file" accept="image/*" multiple hidden onChange=${F0} />
                        </label>
                        <button 
                            class="icon-btn send-btn" 
                            type="button"
                            onClick=${()=>{q0()}}
                            disabled=${!b}
                            title="Send (Ctrl+Enter)"
                        >
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/></svg>
                        </button>
                    `}
                </div>
            </div>
        </div>
        </div>
    `}var U3="piclaw_theme",Y1="piclaw_tint",D2={bgPrimary:"#ffffff",bgSecondary:"#f7f9fa",bgHover:"#e8ebed",textPrimary:"#0f1419",textSecondary:"#536471",borderColor:"#eff3f4",accent:"#1d9bf0",accentHover:"#1a8cd8",danger:"#f4212e",success:"#00ba7c"},v4={bgPrimary:"#000000",bgSecondary:"#16181c",bgHover:"#1d1f23",textPrimary:"#e7e9ea",textSecondary:"#71767b",borderColor:"#2f3336",accent:"#1d9bf0",accentHover:"#1a8cd8",danger:"#f4212e",success:"#00ba7c"},B3={default:{label:"Default",mode:"auto",light:D2,dark:v4},tango:{label:"Tango",mode:"light",light:{bgPrimary:"#f6f5f4",bgSecondary:"#efedeb",bgHover:"#e5e3e1",textPrimary:"#2e3436",textSecondary:"#5c6466",borderColor:"#d3d7cf",accent:"#3465a4",accentHover:"#2c5890",danger:"#cc0000",success:"#4e9a06"}},xterm:{label:"XTerm",mode:"dark",dark:{bgPrimary:"#000000",bgSecondary:"#0a0a0a",bgHover:"#121212",textPrimary:"#d0d0d0",textSecondary:"#8a8a8a",borderColor:"#1f1f1f",accent:"#00a2ff",accentHover:"#0086d1",danger:"#ff5f5f",success:"#5fff87"}},monokai:{label:"Monokai",mode:"dark",dark:{bgPrimary:"#272822",bgSecondary:"#2f2f2f",bgHover:"#3a3a3a",textPrimary:"#f8f8f2",textSecondary:"#cfcfc2",borderColor:"#3e3d32",accent:"#f92672",accentHover:"#e81560",danger:"#f92672",success:"#a6e22e"}},"monokai-pro":{label:"Monokai Pro",mode:"dark",dark:{bgPrimary:"#2d2a2e",bgSecondary:"#363237",bgHover:"#403a40",textPrimary:"#fcfcfa",textSecondary:"#c1c0c0",borderColor:"#444046",accent:"#ff6188",accentHover:"#f74f7e",danger:"#ff4f5e",success:"#a9dc76"}},ristretto:{label:"Ristretto",mode:"dark",dark:{bgPrimary:"#2c2525",bgSecondary:"#362d2d",bgHover:"#403535",textPrimary:"#f4f1ef",textSecondary:"#cbbdb8",borderColor:"#4a3c3c",accent:"#ff9f43",accentHover:"#f28a2e",danger:"#ff5f56",success:"#a9dc76"}},dracula:{label:"Dracula",mode:"dark",dark:{bgPrimary:"#282a36",bgSecondary:"#303445",bgHover:"#3a3f52",textPrimary:"#f8f8f2",textSecondary:"#c5c8d6",borderColor:"#44475a",accent:"#bd93f9",accentHover:"#a87ded",danger:"#ff5555",success:"#50fa7b"}},catppuccin:{label:"Catppuccin",mode:"dark",dark:{bgPrimary:"#1e1e2e",bgSecondary:"#24273a",bgHover:"#2c2f41",textPrimary:"#cdd6f4",textSecondary:"#a6adc8",borderColor:"#313244",accent:"#89b4fa",accentHover:"#74a0f5",danger:"#f38ba8",success:"#a6e3a1"}},nord:{label:"Nord",mode:"dark",dark:{bgPrimary:"#2e3440",bgSecondary:"#3b4252",bgHover:"#434c5e",textPrimary:"#eceff4",textSecondary:"#d8dee9",borderColor:"#4c566a",accent:"#88c0d0",accentHover:"#78a9c0",danger:"#bf616a",success:"#a3be8c"}},gruvbox:{label:"Gruvbox",mode:"dark",dark:{bgPrimary:"#282828",bgSecondary:"#32302f",bgHover:"#3c3836",textPrimary:"#ebdbb2",textSecondary:"#bdae93",borderColor:"#3c3836",accent:"#d79921",accentHover:"#c28515",danger:"#fb4934",success:"#b8bb26"}},solarized:{label:"Solarized",mode:"auto",light:{bgPrimary:"#fdf6e3",bgSecondary:"#f5efdc",bgHover:"#eee8d5",textPrimary:"#586e75",textSecondary:"#657b83",borderColor:"#e0d8c6",accent:"#268bd2",accentHover:"#1f78b3",danger:"#dc322f",success:"#859900"},dark:{bgPrimary:"#002b36",bgSecondary:"#073642",bgHover:"#0b3c4a",textPrimary:"#eee8d5",textSecondary:"#93a1a1",borderColor:"#18424a",accent:"#268bd2",accentHover:"#1f78b3",danger:"#dc322f",success:"#859900"}},tokyo:{label:"Tokyo",mode:"dark",dark:{bgPrimary:"#1a1b26",bgSecondary:"#24283b",bgHover:"#2f3549",textPrimary:"#c0caf5",textSecondary:"#9aa5ce",borderColor:"#414868",accent:"#7aa2f7",accentHover:"#6b92e6",danger:"#f7768e",success:"#9ece6a"}},miasma:{label:"Miasma",mode:"dark",dark:{bgPrimary:"#1f1f23",bgSecondary:"#29292f",bgHover:"#33333a",textPrimary:"#e5e5e5",textSecondary:"#b4b4b4",borderColor:"#3d3d45",accent:"#c9739c",accentHover:"#b8618c",danger:"#e06c75",success:"#98c379"}},github:{label:"GitHub",mode:"auto",light:{bgPrimary:"#ffffff",bgSecondary:"#f6f8fa",bgHover:"#eaeef2",textPrimary:"#24292f",textSecondary:"#57606a",borderColor:"#d0d7de",accent:"#0969da",accentHover:"#0550ae",danger:"#cf222e",success:"#1a7f37"},dark:{bgPrimary:"#0d1117",bgSecondary:"#161b22",bgHover:"#21262d",textPrimary:"#c9d1d9",textSecondary:"#8b949e",borderColor:"#30363d",accent:"#2f81f7",accentHover:"#1f6feb",danger:"#f85149",success:"#3fb950"}},gotham:{label:"Gotham",mode:"dark",dark:{bgPrimary:"#0b0f14",bgSecondary:"#111720",bgHover:"#18212b",textPrimary:"#cbd6e2",textSecondary:"#9bb0c3",borderColor:"#1f2a37",accent:"#5ccfe6",accentHover:"#48b8ce",danger:"#d26937",success:"#2aa889"}}},R4=["--bg-primary","--bg-secondary","--bg-hover","--text-primary","--text-secondary","--border-color","--accent-color","--accent-hover","--accent-soft","--accent-soft-strong","--danger-color","--success-color","--search-highlight-color"],C2={theme:"default",tint:null},z3="light",$1=!1;function H3(_){let $=String(_||"").trim().toLowerCase();if(!$)return"default";if($==="solarized-dark"||$==="solarized-light")return"solarized";if($==="github-dark"||$==="github-light")return"github";if($==="tokyo-night")return"tokyo";return $}function l0(_){if(!_)return null;let $=String(_).trim();if(!$)return null;let J=$.startsWith("#")?$.slice(1):$;if(!/^[0-9a-fA-F]{3}$/.test(J)&&!/^[0-9a-fA-F]{6}$/.test(J))return null;let Y=J.length===3?J.split("").map((Z)=>Z+Z).join(""):J,X=parseInt(Y,16);return{r:X>>16&255,g:X>>8&255,b:X&255,hex:`#${Y.toLowerCase()}`}}function u4(_){if(!_||typeof document>"u")return null;let $=String(_).trim();if(!$)return null;let J=document.createElement("div");if(J.style.color="",J.style.color=$,!J.style.color)return null;let Y=J.style.color;try{if(document.body)J.style.display="none",document.body.appendChild(J),Y=getComputedStyle(J).color||J.style.color,document.body.removeChild(J)}catch{}let X=Y.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/i);if(!X)return null;let Z=parseInt(X[1],10),j=parseInt(X[2],10),G=parseInt(X[3],10);if(![Z,j,G].every((W)=>Number.isFinite(W)))return null;let V=`#${[Z,j,G].map((W)=>W.toString(16).padStart(2,"0")).join("")}`;return{r:Z,g:j,b:G,hex:V}}function F3(_){return l0(_)||u4(_)}function e0(_,$,J){let Y=Math.round(_.r+($.r-_.r)*J),X=Math.round(_.g+($.g-_.g)*J),Z=Math.round(_.b+($.b-_.b)*J);return`rgb(${Y} ${X} ${Z})`}function J1(_,$){return`rgba(${_.r}, ${_.g}, ${_.b}, ${$})`}function L3(){if(typeof window>"u")return"light";try{return window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}catch{return"light"}}function Z1(_){return B3[_]||B3.default}function m4(_){return _.mode==="auto"?L3():_.mode}function g4(_,$){let J=Z1(_);if($==="dark"&&J.dark)return J.dark;if($==="light"&&J.light)return J.light;return J.dark||J.light||D2}function c4(_,$,J){let Y=F3($);if(!Y)return _;let X=l0(_.bgPrimary),Z=l0(_.bgSecondary),j=l0(_.bgHover),G=l0(_.borderColor);if(!X||!Z||!j||!G)return _;let W=l0(J==="dark"?"#ffffff":"#000000");return{..._,bgPrimary:e0(X,Y,0.08),bgSecondary:e0(Z,Y,0.12),bgHover:e0(j,Y,0.16),borderColor:e0(G,Y,0.08),accent:Y.hex,accentHover:W?e0(Y,W,0.18):Y.hex}}function p4(_,$){if(typeof document>"u")return;let J=document.documentElement,Y=_.accent,X=F3(Y),Z=X?J1(X,$==="dark"?0.35:0.2):_.searchHighlight||_.searchHighlightColor,j=X?J1(X,$==="dark"?0.16:0.12):"rgba(29, 155, 240, 0.12)",G=X?J1(X,$==="dark"?0.28:0.2):"rgba(29, 155, 240, 0.2)",V={"--bg-primary":_.bgPrimary,"--bg-secondary":_.bgSecondary,"--bg-hover":_.bgHover,"--text-primary":_.textPrimary,"--text-secondary":_.textSecondary,"--border-color":_.borderColor,"--accent-color":Y,"--accent-hover":_.accentHover||Y,"--accent-soft":j,"--accent-soft-strong":G,"--danger-color":_.danger||D2.danger,"--success-color":_.success||D2.success,"--search-highlight-color":Z||"rgba(29, 155, 240, 0.2)"};Object.entries(V).forEach(([W,Q])=>{if(Q)J.style.setProperty(W,Q)})}function h4(){if(typeof document>"u")return;let _=document.documentElement;R4.forEach(($)=>_.style.removeProperty($))}function L2(_){if(typeof document>"u")return null;let $=document.querySelector(`meta[name="${_}"]`);if(!$)$=document.createElement("meta"),$.setAttribute("name",_),document.head.appendChild($);return $}function i4(_,$){if(typeof document>"u")return;let J=L2("theme-color");if(J&&_)J.setAttribute("content",_);let Y=L2("msapplication-TileColor");if(Y&&_)Y.setAttribute("content",_);let X=L2("msapplication-navbutton-color");if(X&&_)X.setAttribute("content",_);let Z=L2("apple-mobile-web-app-status-bar-style");if(Z)Z.setAttribute("content",$==="dark"?"black-translucent":"default")}function l4(){if(typeof window>"u")return;let _={...C2,mode:z3};window.dispatchEvent(new CustomEvent("piclaw-theme-change",{detail:_}))}function X1(_,$={}){if(typeof window>"u"||typeof document>"u")return;let J=H3(_?.theme||"default"),Y=_?.tint?String(_.tint).trim():null,X=Z1(J),Z=m4(X),j=g4(J,Z);C2={theme:J,tint:Y},z3=Z;let G=document.documentElement;G.dataset.theme=Z,G.dataset.colorTheme=J,G.dataset.tint=Y?String(Y):"",G.style.colorScheme=Z;let V=j;if(J==="default"&&Y)V=c4(j,Y,Z);if(J==="default"&&!Y)h4();else p4(V,Z);if(i4(V.bgPrimary,Z),l4(),$.persist!==!1)if(A_(U3,J),Y)A_(Y1,Y);else A_(Y1,"")}function E2(){if(Z1(C2.theme).mode!=="auto")return;X1(C2,{persist:!1})}function E3(){if(typeof window>"u")return()=>{};let _=H3(v0(U3)||"default"),$=v0(Y1),J=$?$.trim():null;if(X1({theme:_,tint:J},{persist:!1}),window.matchMedia&&!$1){let Y=window.matchMedia("(prefers-color-scheme: dark)");if(Y.addEventListener)Y.addEventListener("change",E2);else if(Y.addListener)Y.addListener(E2);return $1=!0,()=>{if(Y.removeEventListener)Y.removeEventListener("change",E2);else if(Y.removeListener)Y.removeListener(E2);$1=!1}}return()=>{}}function D3(_){if(!_||typeof _!=="object")return;let $=_.chat_jid||_.chatJid;if($&&$!=="web:default")return;let J=_.theme??_.name??_.colorTheme,Y=_.tint??null;X1({theme:J||"default",tint:Y},{persist:!0})}function C3(){if(typeof document>"u")return"light";let _=document.documentElement?.dataset?.theme;if(_==="dark"||_==="light")return _;return L3()}var y2=/#(\w+)/g,o4=new Set(["strong","em","b","i","u","s","br","p","ul","ol","li","blockquote","ruby","rt","rp"]),n4=new Set(["a","abbr","blockquote","br","code","div","em","hr","h1","h2","h3","h4","h5","h6","i","img","kbd","li","mark","ol","p","pre","ruby","rt","rp","s","span","strong","sub","sup","table","tbody","td","th","thead","tr","u","ul","math","semantics","mrow","mi","mn","mo","mtext","mspace","msup","msub","msubsup","mfrac","msqrt","mroot","mtable","mtr","mtd","annotation"]),d4=new Set(["class","style","title","role","aria-hidden","aria-label","aria-expanded","aria-live","data-mermaid","data-hashtag"]),r4={a:new Set(["href","target","rel"]),img:new Set(["src","alt","title"])},s4=new Set(["http:","https:","mailto:",""]);function y3(_){return String(_||"").replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/'/g,"&#39;")}function o0(_,$={}){if(!_)return null;let J=String(_).trim();if(!J)return null;if(J.startsWith("#")||J.startsWith("/"))return J;if(J.startsWith("data:")){if($.allowDataImage&&/^data:image\//i.test(J))return J;return null}if(J.startsWith("blob:"))return J;try{let Y=new URL(J,typeof window<"u"?window.location.origin:"http://localhost");if(!s4.has(Y.protocol))return null;return Y.href}catch{return null}}function k3(_,$={}){if(!_)return"";let J=new DOMParser().parseFromString(_,"text/html"),Y=[],X=J.createTreeWalker(J.body,NodeFilter.SHOW_ELEMENT),Z;while(Z=X.nextNode())Y.push(Z);for(let j of Y){let G=j.tagName.toLowerCase();if(!n4.has(G)){let W=j.parentNode;if(!W)continue;while(j.firstChild)W.insertBefore(j.firstChild,j);W.removeChild(j);continue}let V=r4[G]||new Set;for(let W of Array.from(j.attributes)){let Q=W.name.toLowerCase(),y=W.value;if(Q.startsWith("on")){j.removeAttribute(W.name);continue}if(Q.startsWith("data-")||Q.startsWith("aria-"))continue;if(V.has(Q)||d4.has(Q)){if(Q==="href"){let F=o0(y);if(!F)j.removeAttribute(W.name);else if(j.setAttribute(W.name,F),G==="a"&&!j.getAttribute("rel"))j.setAttribute("rel","noopener noreferrer")}else if(Q==="src"){let F=G==="img"&&typeof $.rewriteImageSrc==="function"?$.rewriteImageSrc(y):y,D=o0(F,{allowDataImage:G==="img"});if(!D)j.removeAttribute(W.name);else j.setAttribute(W.name,D)}continue}j.removeAttribute(W.name)}}return J.body.innerHTML}function w3(_){if(!_)return _;let $=_.replace(/</g,"&lt;").replace(/>/g,"&gt;");return new DOMParser().parseFromString($,"text/html").documentElement.textContent}function k2(_,$=2){if(!_)return _;let J=_;for(let Y=0;Y<$;Y+=1){let X=w3(J);if(X===J)break;J=X}return J}function a4(_){if(!_)return{text:"",blocks:[]};let J=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),Y=[],X=[],Z=!1,j=[];for(let G of J){if(!Z&&G.trim().match(/^```mermaid\s*$/i)){Z=!0,j=[];continue}if(Z&&G.trim().match(/^```\s*$/)){let V=Y.length;Y.push(j.join(`
`)),X.push(`@@MERMAID_BLOCK_${V}@@`),Z=!1,j=[];continue}if(Z)j.push(G);else X.push(G)}if(Z)X.push("```mermaid"),X.push(...j);return{text:X.join(`
`),blocks:Y}}function t4(_){if(!_)return _;return k2(_,5)}function e4(_){let $=new TextEncoder().encode(String(_||"")),J="";for(let Y of $)J+=String.fromCharCode(Y);return btoa(J)}function _8(_){let $=atob(String(_||"")),J=new Uint8Array($.length);for(let Y=0;Y<$.length;Y+=1)J[Y]=$.charCodeAt(Y);return new TextDecoder().decode(J)}function $8(_,$){if(!_||!$||$.length===0)return _;return _.replace(/@@MERMAID_BLOCK_(\d+)@@/g,(J,Y)=>{let X=Number(Y),Z=$[X]??"",j=t4(Z);return`<div class="mermaid-container" data-mermaid="${e4(j)}"><div class="mermaid-loading">Loading diagram...</div></div>`})}function A3(_){if(!_)return _;return _.replace(/<code>([\s\S]*?)<\/code>/gi,($,J)=>{if(J.includes(`
`))return`
\`\`\`
${J}
\`\`\`
`;return`\`${J}\``})}function M3(_){if(!_)return _;return _.replace(/&lt;([\s\S]*?)&gt;/g,($,J)=>{let Y=J.trim(),X=Y.startsWith("/"),Z=X?Y.slice(1).trim():Y,V=(Z.endsWith("/")?Z.slice(0,-1).trim():Z).split(/\s+/)[0]?.toLowerCase();if(!V||!o4.has(V))return $;if(V==="br")return X?"":"<br>";if(X)return`</${V}>`;return`<${V}>`})}function b3(_){if(!_)return _;let $=(J)=>J.replace(/&amp;lt;/g,"&lt;").replace(/&amp;gt;/g,"&gt;").replace(/&amp;quot;/g,"&quot;").replace(/&amp;#39;/g,"&#39;").replace(/&amp;amp;/g,"&amp;");return _.replace(/<pre><code>([\s\S]*?)<\/code><\/pre>/g,(J,Y)=>`<pre><code>${$(Y)}</code></pre>`).replace(/<code>([\s\S]*?)<\/code>/g,(J,Y)=>`<code>${$(Y)}</code>`)}function P3(_){if(!_)return _;let $=new DOMParser().parseFromString(_,"text/html"),J=$.createTreeWalker($.body,NodeFilter.SHOW_TEXT),Y=(Z)=>Z.replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&quot;/g,'"').replace(/&#39;/g,"'").replace(/&amp;/g,"&"),X;while(X=J.nextNode()){if(!X.nodeValue)continue;let Z=Y(X.nodeValue);if(Z!==X.nodeValue)X.nodeValue=Z}return $.body.innerHTML}function J8(_){if(!window.katex)return _;let $=(j)=>w3(j).replace(/&gt;/g,">").replace(/&lt;/g,"<").replace(/&amp;/g,"&").replace(/<br\s*\/?\s*>/gi,`
`),J=(j)=>{let G=[],V=j.replace(/<pre\b[^>]*>\s*<code\b[^>]*>[\s\S]*?<\/code>\s*<\/pre>/gi,(W)=>{let Q=G.length;return G.push(W),`@@CODE_BLOCK_${Q}@@`});return V=V.replace(/<code\b[^>]*>[\s\S]*?<\/code>/gi,(W)=>{let Q=G.length;return G.push(W),`@@CODE_INLINE_${Q}@@`}),{html:V,blocks:G}},Y=(j,G)=>{if(!G.length)return j;return j.replace(/@@CODE_(?:BLOCK|INLINE)_(\d+)@@/g,(V,W)=>{let Q=Number(W);return G[Q]??""})},X=J(_),Z=X.html;return Z=Z.replace(/(^|\n|<br\s*\/?\s*>|<p>|<\/p>)\s*\$\$([\s\S]+?)\$\$\s*(?=\n|<br\s*\/?\s*>|<\/p>|$)/gi,(j,G,V)=>{try{let W=katex.renderToString($(V.trim()),{displayMode:!0,throwOnError:!1});return`${G}${W}`}catch(W){return`<span class="math-error" title="${y3(W.message)}">${j}</span>`}}),Z=Z.replace(/(^|[^\\$])\$(?!\s)([^\n$]+?)\$/g,(j,G,V)=>{if(/\s$/.test(V))return j;try{let W=katex.renderToString($(V),{displayMode:!1,throwOnError:!1});return`${G}${W}`}catch(W){return`${G}<span class="math-error" title="${y3(W.message)}">$${V}$</span>`}}),Y(Z,X.blocks)}function Y8(_){if(!_)return _;let $=new DOMParser().parseFromString(_,"text/html"),J=$.createTreeWalker($.body,NodeFilter.SHOW_TEXT),Y=[],X;while(X=J.nextNode())Y.push(X);for(let Z of Y){let j=Z.nodeValue;if(!j)continue;if(y2.lastIndex=0,!y2.test(j))continue;y2.lastIndex=0;let G=Z.parentElement;if(G&&(G.closest("a")||G.closest("code")||G.closest("pre")))continue;let V=j.split(y2);if(V.length<=1)continue;let W=$.createDocumentFragment();V.forEach((Q,y)=>{if(y%2===1){let F=$.createElement("a");F.setAttribute("href","#"),F.className="hashtag",F.setAttribute("data-hashtag",Q),F.textContent=`#${Q}`,W.appendChild(F)}else W.appendChild($.createTextNode(Q))}),Z.parentNode?.replaceChild(W,Z)}return $.body.innerHTML}function Z8(_){if(!_)return _;let J=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),Y=[],X=!1;for(let Z of J){if(!X&&Z.trim().match(/^```(?:math|katex|latex)\s*$/i)){X=!0,Y.push("$$");continue}if(X&&Z.trim().match(/^```\s*$/)){X=!1,Y.push("$$");continue}Y.push(Z)}return Y.join(`
`)}function w2(_,$,J={}){if(!_)return"";let Y=Z8(_),{text:X,blocks:Z}=a4(Y),j=k2(X,2),V=A3(j).replace(/</g,"&lt;").replace(/>/g,"&gt;"),W=M3(V),Q=window.marked?marked.parse(W,{headerIds:!1,mangle:!1}):W.replace(/\n/g,"<br>");return Q=b3(Q),Q=P3(Q),Q=J8(Q),Q=Y8(Q),Q=$8(Q,Z),Q=k3(Q,J),Q}function I3(_){if(!_)return"";let $=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`),J=k2($,2),X=A3(J).replace(/</g,"&lt;").replace(/>/g,"&gt;"),Z=M3(X),j=window.marked?marked.parse(Z):Z.replace(/\n/g,"<br>");return j=b3(j),j=P3(j),j=k3(j),j}async function S3(_){if(!window.beautifulMermaid)return;let{renderMermaid:$,THEMES:J}=window.beautifulMermaid,X=C3()==="dark"?J["tokyo-night"]:J["github-light"],Z=_.querySelectorAll(".mermaid-container[data-mermaid]");for(let j of Z)try{let G=j.dataset.mermaid,V=_8(G||""),W=k2(V,2),Q=await $(W,{...X,transparent:!0});j.innerHTML=Q,j.removeAttribute("data-mermaid")}catch(G){console.error("Mermaid render error:",G);let V=document.createElement("pre");V.className="mermaid-error",V.textContent=`Diagram error: ${G.message}`,j.innerHTML="",j.appendChild(V),j.removeAttribute("data-mermaid")}}var T3="PiClaw";function Q1(_,$){let J=_||"PiClaw",Y=J.charAt(0).toUpperCase(),X=["#FF6B6B","#4ECDC4","#45B7D1","#FFA07A","#98D8C8","#F7DC6F","#BB8FCE","#85C1E2","#F8B195","#6C5CE7","#00B894","#FDCB6E","#E17055","#74B9FF","#A29BFE","#FD79A8","#00CEC9","#FFEAA7","#DFE6E9","#FF7675","#55EFC4","#81ECEC","#FAB1A0","#74B9FF","#A29BFE","#FD79A8"],Z=Y.charCodeAt(0)%X.length,j=X[Z],G=J.trim().toLowerCase(),V=typeof $==="string"?$.trim():"",Q=(V?V:null)||(G==="PiClaw".toLowerCase()||G==="pi"?"/static/icon-192.png":null);return{letter:Y,color:j,image:Q}}function x3(_,$){if(!_)return"PiClaw";let J=$[_]?.name||_;return J?J.charAt(0).toUpperCase()+J.slice(1):"PiClaw"}function f3(_,$){if(!_)return null;let J=$[_]||{};return J.avatar_url||J.avatarUrl||J.avatar||null}function v3(_){if(!_)return null;if(typeof document<"u"){let Z=document.documentElement,j=Z?.dataset?.colorTheme||"",G=Z?.dataset?.tint||"",V=getComputedStyle(Z).getPropertyValue("--accent-color")?.trim();if(V&&(G||j&&j!=="default"))return V}let $=["#4ECDC4","#FF6B6B","#45B7D1","#BB8FCE","#FDCB6E","#00B894","#74B9FF","#FD79A8","#81ECEC","#FFA07A"],J=String(_),Y=0;for(let Z=0;Z<J.length;Z+=1)Y=(Y*31+J.charCodeAt(Z))%2147483647;let X=Math.abs(Y)%$.length;return $[X]}function R3({status:_,draft:$,plan:J,thought:Y,pendingRequest:X,turnId:Z,steerQueued:j,onPanelToggle:G}){let Q=(r)=>{if(!r)return{text:"",totalLines:0,fullText:""};if(typeof r==="string"){let N_=r,M_=N_?N_.replace(/\r\n/g,`
`).split(`
`).length:0;return{text:N_,totalLines:M_,fullText:N_}}let G_=r.text||"",t=r.fullText||r.full_text||G_,K_=Number.isFinite(r.totalLines)?r.totalLines:t?t.replace(/\r\n/g,`
`).split(`
`).length:0;return{text:G_,totalLines:K_,fullText:t}},y=160,F=(r)=>{if(!r)return 1;return Math.max(1,Math.ceil(r.length/160))},D=(r,G_,t)=>{let K_=(r||"").replace(/\r\n/g,`
`).replace(/\r/g,`
`);if(!K_)return{text:"",omitted:0,totalLines:Number.isFinite(t)?t:0,visibleLines:0};let N_=K_.split(`
`),M_=N_.length>G_?N_.slice(0,G_).join(`
`):K_,B_=Number.isFinite(t)?t:N_.reduce((U_,P_)=>U_+F(P_),0),y_=M_?M_.split(`
`).reduce((U_,P_)=>U_+F(P_),0):0,x_=Math.max(B_-y_,0);return{text:M_,omitted:x_,totalLines:B_,visibleLines:y_}},N=Q(J),z=Q(Y),E=Q($),w=Boolean(N.text)||N.totalLines>0,M=Boolean(z.text)||z.totalLines>0,v=Boolean(E.fullText?.trim()||E.text?.trim());if(!_&&!v&&!w&&!M&&!X)return null;let[R,o]=x(new Set),__=(r)=>o((G_)=>{let t=new Set(G_),K_=!t.has(r);if(K_)t.add(r);else t.delete(r);if(typeof G==="function")G(r,K_);return t});g(()=>{o(new Set)},[Z]);let s=_?.turn_id||Z,a=v3(s),j_=j?"turn-dot turn-dot-queued":"turn-dot",h=(r)=>r,e=Boolean(_?.last_activity||_?.lastActivity),H_="",J_=_?.title,Q_=_?.status;if(_?.type==="plan")H_=J_?`Planning: ${J_}`:"Planning...";else if(_?.type==="tool_call")H_=J_?`Running: ${J_}`:"Running tool...";else if(_?.type==="tool_status")H_=J_?`${J_}: ${Q_||"Working..."}`:Q_||"Working...";else if(_?.type==="error")H_=J_||"Agent error";else H_=J_||Q_||"Working...";if(e)H_="Last activity just now";let W_=({panelTitle:r,text:G_,fullText:t,totalLines:K_,maxLines:N_,titleClass:M_,panelKey:B_})=>{let y_=R.has(B_),x_=t||G_||"",U_=typeof N_==="number",P_=y_&&U_,z_=U_?D(x_,N_,K_):{text:x_||"",omitted:0,totalLines:Number.isFinite(K_)?K_:0};if(!x_&&!(Number.isFinite(z_.totalLines)&&z_.totalLines>0))return null;let E_=`agent-thinking-body${U_?" agent-thinking-body-collapsible":""}`,p_=U_?`--agent-thinking-collapsed-lines: ${N_};`:"";return U`
            <div
                class="agent-thinking"
                data-expanded=${y_?"true":"false"}
                data-collapsible=${U_?"true":"false"}
                style=${a?`--turn-color: ${a};`:""}
            >
                <div class="agent-thinking-title ${M_||""}">
                    ${a&&U`<span class=${j_} aria-hidden="true"></span>`}
                    ${r}
                    ${P_&&U`
                        <button
                            class="agent-thinking-close"
                            aria-label=${`Close ${r} panel`}
                            onClick=${()=>__(B_)}
                        >
                            ×
                        </button>
                    `}
                </div>
                <div
                    class=${E_}
                    style=${p_}
                    dangerouslySetInnerHTML=${{__html:I3(x_)}}
                />
                ${!y_&&z_.omitted>0&&U`
                    <button class="agent-thinking-truncation" onClick=${()=>__(B_)}>
                        ▸ ${z_.omitted} more lines
                    </button>
                `}
                ${y_&&z_.omitted>0&&U`
                    <button class="agent-thinking-truncation" onClick=${()=>__(B_)}>
                        ▴ show less
                    </button>
                `}
            </div>
        `},F_=X?.tool_call?.title,Z_=F_?`Awaiting approval: ${F_}`:"Awaiting approval";return U`
        <div class="agent-status-panel">
            ${X&&U`
                <div class="agent-status agent-status-request" aria-live="polite" style=${a?`--turn-color: ${a};`:""}>
                    <span class=${j_} aria-hidden="true"></span>
                    <div class="agent-status-spinner"></div>
                    <span class="agent-status-text">${Z_}</span>
                </div>
            `}
            ${w&&W_({panelTitle:h("Planning"),text:N.text,fullText:N.fullText,totalLines:N.totalLines,panelKey:"plan"})}
            ${M&&W_({panelTitle:h("Thoughts"),text:z.text,fullText:z.fullText,totalLines:z.totalLines,maxLines:8,titleClass:"thought",panelKey:"thought"})}
            ${v&&W_({panelTitle:h("Draft"),text:E.text,fullText:E.fullText,totalLines:E.totalLines,maxLines:8,titleClass:"thought",panelKey:"draft"})}
            ${_&&U`
                <div class=${`agent-status${e?" agent-status-last-activity":""}${_?.type==="error"?" agent-status-error":""}`} aria-live="polite" style=${a?`--turn-color: ${a};`:""}>
                    ${a&&U`<span class=${j_} aria-hidden="true"></span>`}
                    ${_?.type==="error"?U`<span class="agent-status-error-icon" aria-hidden="true">⚠</span>`:!e&&U`<div class="agent-status-spinner"></div>`}
                    <span class="agent-status-text">${H_}</span>
                </div>
            `}
        </div>
    `}function u3({request:_,onRespond:$}){if(!_)return null;let{request_id:J,tool_call:Y,options:X}=_,Z=Y?.title||"Agent Request",j=Y?.kind||"other",G=Y?.rawInput||{},V=G.command||G.commands&&G.commands[0]||null,W=G.diff||null,Q=G.fileName||G.path||null,y=Y?.description||G.description||G.explanation||null,D=(Array.isArray(Y?.locations)?Y.locations:[]).map((M)=>M?.path).filter((M)=>Boolean(M)),N=Array.from(new Set([Q,...D].filter(Boolean)));console.log("AgentRequestModal:",{request_id:J,tool_call:Y,options:X});let z=async(M)=>{try{await a2(J,M),$()}catch(v){console.error("Failed to respond to agent request:",v)}},E=async()=>{try{await J3(Z,`Auto-approved: ${Z}`),await a2(J,"approved"),$()}catch(M){console.error("Failed to add to whitelist:",M)}},w=X&&X.length>0;return U`
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
                ${(y||V||W||N.length>0)&&U`
                    <div class="agent-request-body">
                        ${y&&U`
                            <div class="agent-request-description">${y}</div>
                        `}
                        ${N.length>0&&U`
                            <div class="agent-request-files">
                                <div class="agent-request-subtitle">Files</div>
                                <ul>
                                    ${N.map((M,v)=>U`<li key=${v}>${M}</li>`)}
                                </ul>
                            </div>
                        `}
                        ${V&&U`
                            <pre class="agent-request-command">${V}</pre>
                        `}
                        ${W&&U`
                            <details class="agent-request-diff">
                                <summary>Proposed diff</summary>
                                <pre>${W}</pre>
                            </details>
                        `}
                    </div>
                `}
                <div class="agent-request-actions">
                    ${w?X.map((M)=>U`
                            <button 
                                key=${M.optionId||M.id||String(M)}
                                class="agent-request-btn ${M.kind==="allow_once"||M.kind==="allow_always"?"primary":""}"
                                onClick=${()=>z(M.optionId||M.id||M)}
                            >
                                ${M.name||M.label||M.optionId||M.id||String(M)}
                            </button>
                        `):U`
                        <button class="agent-request-btn primary" onClick=${()=>z("approved")}>
                            Allow
                        </button>
                        <button class="agent-request-btn" onClick=${()=>z("denied")}>
                            Deny
                        </button>
                        <button class="agent-request-btn always-allow" onClick=${E}>
                            Always Allow This
                        </button>
                    `}
                </div>
            </div>
        </div>
    `}function m3({status:_}){if(_==="connected")return null;return U`
        <div class="connection-status ${_}">
            ${_==="disconnected"?"Reconnecting...":_}
        </div>
    `}function g3(_){let $=new Date(_);if(Number.isNaN($.getTime()))return _;let Y=new Date-$,X=Y/1000,Z=86400000;if(Y<Z){if(X<60)return"just now";if(X<3600)return`${Math.floor(X/60)}m`;return`${Math.floor(X/3600)}h`}if(Y<5*Z){let V=$.toLocaleDateString(void 0,{weekday:"short"}),W=$.toLocaleTimeString(void 0,{hour:"2-digit",minute:"2-digit"});return`${V} ${W}`}let j=$.toLocaleDateString(void 0,{month:"short",day:"numeric"}),G=$.toLocaleTimeString(void 0,{hour:"2-digit",minute:"2-digit"});return`${j} ${G}`}function _2(_){if(!Number.isFinite(_))return"0";return Math.round(_).toLocaleString()}function M0(_){if(_<1024)return _+" B";if(_<1048576)return(_/1024).toFixed(1)+" KB";return(_/1048576).toFixed(1)+" MB"}function A2(_){let $=new Date(_);if(Number.isNaN($.getTime()))return _;return $.toLocaleString()}function c3({src:_,onClose:$}){return g(()=>{let J=(Y)=>{if(Y.key==="Escape")$()};return document.addEventListener("keydown",J),()=>document.removeEventListener("keydown",J)},[$]),U`
        <div class="image-modal" onClick=${$}>
            <img src=${_} alt="Full size" />
        </div>
    `}function X8({mediaId:_}){let[$,J]=x(null);if(g(()=>{z2(_).then(J).catch(()=>{})},[_]),!$)return null;let Y=$.filename||"file",X=$.metadata?.size,Z=X?M0(X):"";return U`
        <a href=${t0(_)} download=${Y} class="file-attachment" onClick=${(j)=>j.stopPropagation()}>
            <svg class="file-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                <polyline points="14 2 14 8 20 8"/>
                <line x1="16" y1="13" x2="8" y2="13"/>
                <line x1="16" y1="17" x2="8" y2="17"/>
                <polyline points="10 9 9 9 8 9"/>
            </svg>
            <div class="file-info">
                <span class="file-name">${Y}</span>
                ${Z&&U`<span class="file-size">${Z}</span>`}
            </div>
            <svg class="download-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                <polyline points="7 10 12 15 17 10"/>
                <line x1="12" y1="15" x2="12" y2="3"/>
            </svg>
        </a>
    `}function M2({annotations:_}){if(!_)return null;let{audience:$,priority:J,lastModified:Y}=_,X=Y?A2(Y):null;return U`
        <div class="content-annotations">
            ${$&&$.length>0&&U`
                <span class="content-annotation">Audience: ${$.join(", ")}</span>
            `}
            ${typeof J==="number"&&U`
                <span class="content-annotation">Priority: ${J}</span>
            `}
            ${X&&U`
                <span class="content-annotation">Updated: ${X}</span>
            `}
        </div>
    `}function Q8({block:_}){let $=_.title||_.name||_.uri,J=_.description,Y=_.size?M0(_.size):"",X=_.mime_type||"",Z=j8(X),j=o0(_.uri);return U`
        <a
            href=${j||"#"}
            class="resource-link"
            target=${j?"_blank":void 0}
            rel=${j?"noopener noreferrer":void 0}
            onClick=${(G)=>G.stopPropagation()}>
            <div class="resource-link-main">
                <div class="resource-link-header">
                    <span class="resource-link-icon-inline">${Z}</span>
                    <div class="resource-link-title">${$}</div>
                </div>
                ${J&&U`<div class="resource-link-description">${J}</div>`}
                <div class="resource-link-meta">
                    ${X&&U`<span>${X}</span>`}
                    ${Y&&U`<span>${Y}</span>`}
                </div>
            </div>
            <div class="resource-link-icon">↗</div>
        </a>
    `}function K8({block:_}){let[$,J]=x(!1),Y=_.uri||"Embedded resource",X=_.text||"",Z=Boolean(_.data),j=_.mime_type||"";return U`
        <div class="resource-embed">
            <button class="resource-embed-toggle" onClick=${(G)=>{G.preventDefault(),G.stopPropagation(),J(!$)}}>
                ${$?"▼":"▶"} ${Y}
            </button>
            ${$&&U`
                ${X&&U`<pre class="resource-embed-content">${X}</pre>`}
                ${Z&&U`
                    <div class="resource-embed-blob">
                        <span class="resource-embed-blob-label">Embedded blob</span>
                        ${j&&U`<span class="resource-embed-blob-meta">${j}</span>`}
                        <button class="resource-embed-blob-btn" onClick=${(G)=>{G.preventDefault(),G.stopPropagation();let V=new Blob([Uint8Array.from(atob(_.data),(y)=>y.charCodeAt(0))],{type:j||"application/octet-stream"}),W=URL.createObjectURL(V),Q=document.createElement("a");Q.href=W,Q.download=Y.split("/").pop()||"resource",Q.click(),URL.revokeObjectURL(W)}}>Download</button>
                    </div>
                `}
            `}
        </div>
    `}function j8(_){if(!_)return"\uD83D\uDCCE";if(_.startsWith("image/"))return"\uD83D\uDDBC️";if(_.startsWith("audio/"))return"\uD83C\uDFB5";if(_.startsWith("video/"))return"\uD83C\uDFAC";if(_.includes("pdf"))return"\uD83D\uDCC4";if(_.includes("zip")||_.includes("gzip"))return"\uD83D\uDDDC️";if(_.startsWith("text/"))return"\uD83D\uDCC4";return"\uD83D\uDCCE"}function G8({preview:_}){let $=o0(_.url),J=o0(_.image,{allowDataImage:!0}),Y=J?`background-image: url('${J}')`:"",X=_.site_name;if(!X&&$)try{X=new URL($).hostname}catch{X=$}return U`
        <a
            href=${$||"#"}
            class="link-preview ${J?"has-image":""}"
            target=${$?"_blank":void 0}
            rel=${$?"noopener noreferrer":void 0}
            onClick=${(Z)=>Z.stopPropagation()}
            style=${Y}>
            <div class="link-preview-overlay">
                <div class="link-preview-site">${X||""}</div>
                <div class="link-preview-title">${_.title}</div>
                ${_.description&&U`
                    <div class="link-preview-description">${_.description}</div>
                `}
            </div>
        </a>
    `}function V8(_,$){return typeof _==="string"?_:""}function W8(_){if(!_)return{content:_,fileRefs:[]};let J=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),Y=-1;for(let W=0;W<J.length;W+=1)if(J[W].trim()==="Files:"&&J[W+1]&&/^\s*-\s+/.test(J[W+1])){Y=W;break}if(Y===-1)return{content:_,fileRefs:[]};let X=[],Z=Y+1;for(;Z<J.length;Z+=1){let W=J[Z];if(/^\s*-\s+/.test(W))X.push(W.replace(/^\s*-\s+/,"").trim());else if(!W.trim())break;else break}if(X.length===0)return{content:_,fileRefs:[]};let j=J.slice(0,Y),G=J.slice(Z),V=[...j,...G].join(`
`);return V=V.replace(/\n{3,}/g,`

`).trim(),{content:V,fileRefs:X}}function O8(_){if(!_)return{content:_,messageRefs:[]};let J=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),Y=-1;for(let W=0;W<J.length;W+=1)if(J[W].trim()==="Referenced messages:"&&J[W+1]&&/^\s*-\s+/.test(J[W+1])){Y=W;break}if(Y===-1)return{content:_,messageRefs:[]};let X=[],Z=Y+1;for(;Z<J.length;Z+=1){let W=J[Z];if(/^\s*-\s+/.test(W)){let y=W.replace(/^\s*-\s+/,"").trim().match(/^message:(\S+)$/i);if(y)X.push(y[1])}else if(!W.trim())break;else break}if(X.length===0)return{content:_,messageRefs:[]};let j=J.slice(0,Y),G=J.slice(Z),V=[...j,...G].join(`
`);return V=V.replace(/\n{3,}/g,`

`).trim(),{content:V,messageRefs:X}}function N8(_){if(!_)return{content:_,attachments:[]};let J=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),Y=-1;for(let W=0;W<J.length;W+=1)if(J[W].trim()==="Images:"&&J[W+1]&&/^\s*-\s+/.test(J[W+1])){Y=W;break}if(Y===-1)return{content:_,attachments:[]};let X=[],Z=Y+1;for(;Z<J.length;Z+=1){let W=J[Z];if(/^\s*-\s+/.test(W)){let Q=W.replace(/^\s*-\s+/,"").trim(),y=Q.match(/^attachment:([^\s)]+)\s*(?:\((.+)\))?$/i)||Q.match(/^attachment:([^\s]+)\s+(.+)$/i);if(y){let F=y[1],D=(y[2]||"").trim()||F;X.push({id:F,label:D,raw:Q})}else X.push({id:null,label:Q,raw:Q})}else if(!W.trim())break;else break}if(X.length===0)return{content:_,attachments:[]};let j=J.slice(0,Y),G=J.slice(Z),V=[...j,...G].join(`
`);return V=V.replace(/\n{3,}/g,`

`).trim(),{content:V,attachments:X}}function q8(_){return _.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function B8(_,$){if(!_||!$)return _;let J=String($).trim().split(/\s+/).filter(Boolean);if(J.length===0)return _;let Y=J.map(q8).sort((Q,y)=>y.length-Q.length),X=new RegExp(`(${Y.join("|")})`,"gi"),Z=new RegExp(`^(${Y.join("|")})$`,"i"),j=new DOMParser().parseFromString(_,"text/html"),G=j.createTreeWalker(j.body,NodeFilter.SHOW_TEXT),V=[],W;while(W=G.nextNode())V.push(W);for(let Q of V){let y=Q.nodeValue;if(!y||!X.test(y)){X.lastIndex=0;continue}X.lastIndex=0;let F=Q.parentElement;if(F&&F.closest("code, pre, script, style"))continue;let D=y.split(X).filter((z)=>z!=="");if(D.length===0)continue;let N=j.createDocumentFragment();for(let z of D)if(Z.test(z)){let E=j.createElement("mark");E.className="search-highlight-term",E.textContent=z,N.appendChild(E)}else N.appendChild(j.createTextNode(z));Q.parentNode.replaceChild(N,Q)}return j.body.innerHTML}function p3({post:_,onClick:$,onHashtagClick:J,onMessageRef:Y,agentName:X,agentAvatarUrl:Z,userName:j,userAvatarUrl:G,userAvatarBackground:V,onDelete:W,isThreadReply:Q,isRemoving:y,highlightQuery:F}){let[D,N]=x(null),z=k(null),E=_.data,w=E.type==="agent_response",M=j||"You",v=w?X||T3:M,R=w?Q1(X,Z):Q1(M,G),o=typeof V==="string"?V.trim().toLowerCase():"",__=!w&&R.image&&(o==="clear"||o==="transparent"),s=w&&Boolean(R.image),a=`background-color: ${__||s?"transparent":R.color}`,j_=E.content_meta,h=Boolean(j_?.truncated),e=Boolean(j_?.preview),H_=h&&!e,J_=h?{originalLength:Number.isFinite(j_?.original_length)?j_.original_length:E.content?E.content.length:0,maxLength:Number.isFinite(j_?.max_length)?j_.max_length:0}:null,Q_=V8(E.content,E.link_previews),{content:W_,fileRefs:F_}=W8(Q_),{content:Z_,messageRefs:r}=O8(W_),{content:G_,attachments:t}=N8(Z_);Q_=G_;let K_=Boolean(Q_)&&!H_,N_=typeof F==="string"?F.trim():"",M_=A0(()=>{if(!Q_)return"";let b=w2(Q_,J);return N_?B8(b,N_):b},[Q_,N_]),B_=(b,d)=>{b.stopPropagation(),N(t0(d))},y_=(b)=>{b.stopPropagation(),W?.(_)},x_=(b,d)=>{let u_=new Set;if(!b||d.length===0)return{content:b,usedIds:u_};return{content:b.replace(/attachment:([^\s)"']+)/g,(Z0,b0,X0,z0)=>{let _0=b0.replace(/^\/+/,""),m_=d.find((v_)=>v_.name&&v_.name.toLowerCase()===_0.toLowerCase()&&!u_.has(v_.id))||d.find((v_)=>!u_.has(v_.id));if(!m_)return Z0;if(u_.add(m_.id),z0.slice(Math.max(0,X0-2),X0)==="](")return`/media/${m_.id}`;return m_.name||"attachment"}),usedIds:u_}},U_=[],P_=[],z_=[],E_=[],p_=[],O0=[],b_=E.content_blocks||[],k_=E.media_ids||[],e_=0;if(b_.length>0)b_.forEach((b)=>{if(b?.type==="text"&&b.annotations)O0.push(b.annotations);if(b?.type==="resource_link")E_.push(b);else if(b?.type==="resource")p_.push(b);else if(b?.type==="file"){let d=k_[e_++];if(d)P_.push(d),z_.push({id:d,name:b?.name||b?.filename||b?.title})}else if(b?.type==="image"||!b?.type){let d=k_[e_++];if(d)U_.push({id:d,annotations:b?.annotations}),z_.push({id:d,name:b?.name||b?.filename||b?.title})}});else if(k_.length>0)k_.forEach((b)=>{U_.push({id:b,annotations:null}),z_.push({id:b,name:null})});if(t.length>0)t.forEach((b)=>{if(!b?.id)return;let d=z_.find((u_)=>String(u_.id)===String(b.id));if(d&&!d.name)d.name=b.label});let{content:U0,usedIds:h_}=x_(Q_,z_);Q_=U0;let a_=U_.filter(({id:b})=>!h_.has(b)),f_=P_.filter((b)=>!h_.has(b)),L_=t.length>0?t.map((b,d)=>({id:b.id||`attachment-${d+1}`,label:b.label||`attachment-${d+1}`})):z_.map((b,d)=>({id:b.id,label:b.name||`attachment-${d+1}`}));return g(()=>{if(z.current)S3(z.current)},[Q_]),U`
        <div id=${`post-${_.id}`} class="post ${w?"agent-post":""} ${Q?"thread-reply":""} ${y?"removing":""}" onClick=${$}>
            <div class="post-avatar ${w?"agent-avatar":""} ${R.image?"has-image":""}" style=${a}>
                ${R.image?U`<img src=${R.image} alt=${v} />`:R.letter}
            </div>
            <div class="post-body">
                <button
                    class="post-delete-btn"
                    type="button"
                    title="Delete message"
                    aria-label="Delete message"
                    onClick=${y_}
                >
                    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <path d="M18 6L6 18M6 6l12 12" />
                    </svg>
                </button>
                <div class="post-meta">
                    <span class="post-author">${v}</span>
                    <a class="post-time" href=${`#msg-${_.id}`} onClick=${(b)=>{if(b.preventDefault(),b.stopPropagation(),Y)Y(_.id)}}>${g3(_.timestamp)}</a>
                </div>
                ${H_&&J_&&U`
                    <div class="post-content truncated">
                        <div class="truncated-title">Message too large to display.</div>
                        <div class="truncated-meta">
                            Original length: ${_2(J_.originalLength)} chars
                            ${J_.maxLength?U` • Display limit: ${_2(J_.maxLength)} chars`:""}
                        </div>
                    </div>
                `}
                ${e&&J_&&U`
                    <div class="post-content preview">
                        <div class="truncated-title">Preview truncated.</div>
                        <div class="truncated-meta">
                            Showing first ${_2(J_.maxLength)} of ${_2(J_.originalLength)} chars. Download full text below.
                        </div>
                    </div>
                `}
                ${(F_.length>0||r.length>0||L_.length>0)&&U`
                    <div class="post-file-refs">
                        ${r.map((b)=>{return U`
                                <a href=${`#msg-${b}`} class="post-msg-pill-link" onClick=${(d)=>{d.stopPropagation()}}>
                                    <${f0}
                                        prefix="post"
                                        label=${"msg:"+b}
                                        title=${"Message "+b}
                                        icon="message"
                                    />
                                </a>
                            `})}
                        ${F_.map((b)=>{let d=b.split("/").pop()||b;return U`
                                <${f0}
                                    prefix="post"
                                    label=${d}
                                    title=${b}
                                />
                            `})}
                        ${L_.map((b)=>U`
                            <${f0}
                                prefix="post"
                                label=${b.label}
                                title=${b.label}
                            />
                        `)}
                    </div>
                `}
                ${K_&&U`
                    <div 
                        ref=${z}
                        class="post-content"
                        dangerouslySetInnerHTML=${{__html:M_}}
                        onClick=${(b)=>{if(b.target.classList.contains("hashtag")){b.preventDefault(),b.stopPropagation();let d=b.target.dataset.hashtag;if(d)J?.(d)}else if(b.target.tagName==="IMG")b.preventDefault(),b.stopPropagation(),N(b.target.src)}}
                    />
                `}
                ${O0.length>0&&U`
                    ${O0.map((b,d)=>U`
                        <${M2} key=${d} annotations=${b} />
                    `)}
                `}
                ${a_.length>0&&U`
                    <div class="media-preview">
                        ${a_.map(({id:b})=>U`
                            <img 
                                key=${b} 
                                src=${X3(b)} 
                                alt="Media" 
                                loading="lazy"
                                onClick=${(d)=>B_(d,b)}
                            />
                        `)}
                    </div>
                `}
                ${a_.length>0&&U`
                    ${a_.map(({annotations:b},d)=>U`
                        ${b&&U`<${M2} key=${d} annotations=${b} />`}
                    `)}
                `}
                ${f_.length>0&&U`
                    <div class="file-attachments">
                        ${f_.map((b)=>U`
                            <${X8} key=${b} mediaId=${b} />
                        `)}
                    </div>
                `}
                ${E_.length>0&&U`
                    <div class="resource-links">
                        ${E_.map((b,d)=>U`
                            <div key=${d}>
                                <${Q8} block=${b} />
                                <${M2} annotations=${b.annotations} />
                            </div>
                        `)}
                    </div>
                `}
                ${p_.length>0&&U`
                    <div class="resource-embeds">
                        ${p_.map((b,d)=>U`
                            <div key=${d}>
                                <${K8} block=${b} />
                                <${M2} annotations=${b.annotations} />
                            </div>
                        `)}
                    </div>
                `}
                ${E.link_previews?.length>0&&U`
                    <div class="link-previews">
                        ${E.link_previews.map((b,d)=>U`
                            <${G8} key=${d} preview=${b} />
                        `)}
                    </div>
                `}
            </div>
        </div>
        ${D&&U`<${c3} src=${D} onClose=${()=>N(null)} />`}
    `}function h3({posts:_,hasMore:$,onLoadMore:J,onPostClick:Y,onHashtagClick:X,onMessageRef:Z,emptyMessage:j,timelineRef:G,agents:V,user:W,onDeletePost:Q,reverse:y=!0,removingPostIds:F,searchQuery:D}){let[N,z]=x(!1),E=k(null),w=typeof IntersectionObserver<"u",M=P(async()=>{if(!J||!$||N)return;z(!0);try{await J({preserveScroll:!0,preserveMode:"top"})}finally{z(!1)}},[$,N,J]),v=P((__)=>{let{scrollTop:s,scrollHeight:a,clientHeight:j_}=__.target,h=y?a-j_-s:s,e=Math.max(300,j_);if(h<e)M()},[y,M]);if(g(()=>{if(!w)return;let __=E.current,s=G?.current;if(!__||!s)return;let a=300,j_=new IntersectionObserver((h)=>{for(let e of h){if(!e.isIntersecting)continue;M()}},{root:s,rootMargin:`${a}px 0px ${a}px 0px`,threshold:0});return j_.observe(__),()=>j_.disconnect()},[w,$,J,G,M]),g(()=>{if(w)return;if(!G?.current)return;let{scrollTop:__,scrollHeight:s,clientHeight:a}=G.current,j_=y?s-a-__:__,h=Math.max(300,a);if(j_<h)M()},[w,_,$,y,G,M]),g(()=>{if(!G?.current)return;if(!$||N)return;let{scrollTop:__,scrollHeight:s,clientHeight:a}=G.current,j_=y?s-a-__:__,h=Math.max(300,a);if(s<=a+1||j_<h)M()},[_,$,N,y,G,M]),!_)return U`<div class="loading"><div class="spinner"></div></div>`;if(_.length===0)return U`
            <div class="timeline" ref=${G}>
                <div class="timeline-content">
                    <div style="padding: var(--spacing-xl); text-align: center; color: var(--text-secondary)">
                        ${j||"No messages yet. Start a conversation!"}
                    </div>
                </div>
            </div>
        `;let R=_.slice().sort((__,s)=>__.id-s.id),o=U`<div class="timeline-sentinel" ref=${E}></div>`;return U`
        <div class="timeline ${y?"reverse":"normal"}" ref=${G} onScroll=${v}>
            <div class="timeline-content">
                ${y?o:null}
                ${R.map((__)=>{let s=Boolean(__.data?.thread_id&&__.data.thread_id!==__.id),a=F?.has?.(__.id);return U`
                    <${p3}
                        key=${__.id}
                        post=${__}
                        isThreadReply=${s}
                        isRemoving=${a}
                        highlightQuery=${D}
                        agentName=${x3(__.data?.agent_id,V||{})}
                        agentAvatarUrl=${f3(__.data?.agent_id,V||{})}
                        userName=${W?.name||W?.user_name}
                        userAvatarUrl=${W?.avatar_url||W?.avatarUrl||W?.avatar}
                        userAvatarBackground=${W?.avatar_background||W?.avatarBackground}
                        onClick=${()=>Y?.(__)}
                        onHashtagClick=${X}
                        onMessageRef=${Z}
                        onDelete=${Q}
                    />
                `})}
                ${y?null:o}
            </div>
        </div>
    `}var U8=16,z8=60000,n3=(_)=>{if(!_||!_.name)return!1;if(_.path===".")return!1;return _.name.startsWith(".")};function H8(_,$){let J=String(_||"").trim();if(!J)return J;if(/^[a-zA-Z][a-zA-Z\d+.-]*:/.test(J)||J.startsWith("#")||J.startsWith("data:")||J.startsWith("blob:"))return J;let Y=J.match(/^([^?#]*)(\?[^#]*)?(#.*)?$/),X=Y?.[1]||J,Z=Y?.[2]||"",j=Y?.[3]||"",G=String($||"").split("/").slice(0,-1).join("/"),W=X.startsWith("/")?X:`${G?`${G}/`:""}${X}`,Q=[];for(let F of W.split("/")){if(!F||F===".")continue;if(F===".."){if(Q.length>0)Q.pop();continue}Q.push(F)}let y=Q.join("/");return`${e2(y)}${Z}${j}`}function d3(_,$,J,Y=0,X=[]){if(!J&&n3(_))return X;if(!_)return X;if(X.push({node:_,depth:Y}),_.type==="dir"&&_.children&&$.has(_.path))for(let Z of _.children)d3(Z,$,J,Y+1,X);return X}function i3(_,$,J){if(!_)return"";let Y=[],X=(Z)=>{if(!J&&n3(Z))return;if(Y.push(Z.type==="dir"?`d:${Z.path}`:`f:${Z.path}`),Z.children&&$?.has(Z.path))for(let j of Z.children)X(j)};return X(_),Y.join("|")}function V1(_,$){if(!$)return null;if(!_)return $;if(_.path!==$.path||_.type!==$.type)return $;let J=Array.isArray(_.children)?_.children:null,Y=Array.isArray($.children)?$.children:null;if(!Y)return _;let X=J?new Map(J.map((G)=>[G?.path,G])):new Map,Z=!J||J.length!==Y.length,j=Y.map((G)=>{let V=V1(X.get(G.path),G);if(V!==X.get(G.path))Z=!0;return V});return Z?{...$,children:j}:_}function j1(_,$,J){if(!_)return _;if(_.path===$)return V1(_,J);if(!Array.isArray(_.children))return _;let Y=!1,X=_.children.map((Z)=>{let j=j1(Z,$,J);if(j!==Z)Y=!0;return j});return Y?{..._,children:X}:_}var r3=4,K1=14,F8=8,L8=16;function s3(_){if(!_)return 0;if(_.type==="file"){let Y=Math.max(0,Number(_.size)||0);return _.__bytes=Y,Y}let $=Array.isArray(_.children)?_.children:[],J=0;for(let Y of $)J+=s3(Y);return _.__bytes=J,J}function a3(_,$=0){let J=Math.max(0,Number(_?.__bytes??_?.size??0)),Y={name:_?.name||_?.path||".",path:_?.path||".",size:J,children:[]};if(!_||_.type!=="dir"||$>=r3)return Y;let X=Array.isArray(_.children)?_.children:[],Z=[];for(let G of X){let V=Math.max(0,Number(G?.__bytes??G?.size??0));if(V<=0)continue;if(G.type==="dir")Z.push({kind:"dir",node:G,size:V});else Z.push({kind:"file",name:G.name,path:G.path,size:V})}Z.sort((G,V)=>V.size-G.size);let j=Z;if(Z.length>K1){let G=Z.slice(0,K1-1),V=Z.slice(K1-1),W=V.reduce((Q,y)=>Q+y.size,0);G.push({kind:"other",name:`+${V.length} more`,path:`${Y.path}/[other]`,size:W}),j=G}return Y.children=j.map((G)=>{if(G.kind==="dir")return a3(G.node,$+1);return{name:G.name,path:G.path,size:G.size,children:[]}}),Y}function l3(){if(typeof window>"u"||typeof document>"u")return!1;let{documentElement:_,body:$}=document,J=_?.getAttribute?.("data-theme")?.toLowerCase?.()||"";if(J==="dark")return!0;if(J==="light")return!1;if(_?.classList?.contains("dark")||$?.classList?.contains("dark"))return!0;if(_?.classList?.contains("light")||$?.classList?.contains("light"))return!1;return Boolean(window.matchMedia?.("(prefers-color-scheme: dark)")?.matches)}function t3(_,$,J){let Y=((_+Math.PI/2)*180/Math.PI+360)%360,X=J?Math.max(30,70-$*10):Math.max(34,66-$*8),Z=J?Math.min(70,45+$*5):Math.min(60,42+$*4);return`hsl(${Y.toFixed(1)} ${X}% ${Z}%)`}function b2(_,$,J,Y){return{x:_+J*Math.cos(Y),y:$+J*Math.sin(Y)}}function W1(_,$,J,Y,X,Z){let j=Math.PI*2-0.0001,G=Z-X>j?X+j:Z,V=b2(_,$,Y,X),W=b2(_,$,Y,G),Q=b2(_,$,J,G),y=b2(_,$,J,X),F=G-X>Math.PI?1:0;return[`M ${V.x.toFixed(3)} ${V.y.toFixed(3)}`,`A ${Y} ${Y} 0 ${F} 1 ${W.x.toFixed(3)} ${W.y.toFixed(3)}`,`L ${Q.x.toFixed(3)} ${Q.y.toFixed(3)}`,`A ${J} ${J} 0 ${F} 0 ${y.x.toFixed(3)} ${y.y.toFixed(3)}`,"Z"].join(" ")}var e3={1:[26,46],2:[48,68],3:[70,90],4:[92,112]};function _4(_,$,J){let Y=[],X=[],Z=Math.max(0,Number($)||0),j=(G,V,W,Q)=>{let y=Array.isArray(G?.children)?G.children:[];if(!y.length)return;let F=Math.max(0,Number(G.size)||0);if(F<=0)return;let D=W-V,N=V;y.forEach((z,E)=>{let w=Math.max(0,Number(z.size)||0);if(w<=0)return;let M=w/F,v=N,R=E===y.length-1?W:N+D*M;if(N=R,R-v<0.003)return;let o=e3[Q];if(o){let __=t3(v,Q,J);if(Y.push({key:z.path,path:z.path,label:z.name,size:w,color:__,depth:Q,startAngle:v,endAngle:R,innerRadius:o[0],outerRadius:o[1],d:W1(120,120,o[0],o[1],v,R)}),Q===1)X.push({key:z.path,name:z.name,size:w,pct:Z>0?w/Z*100:0,color:__})}if(Q<r3)j(z,v,R,Q+1)})};return j(_,-Math.PI/2,Math.PI*3/2,1),{segments:Y,legend:X}}function G1(_,$){if(!_||!$)return null;if(_.path===$)return _;let J=Array.isArray(_.children)?_.children:[];for(let Y of J){let X=G1(Y,$);if(X)return X}return null}function $4(_,$,J,Y){if(!J||J<=0)return{segments:[],legend:[]};let X=e3[1];if(!X)return{segments:[],legend:[]};let Z=-Math.PI/2,j=Math.PI*3/2,G=t3(Z,1,Y),W=`${$||"."}/[files]`;return{segments:[{key:W,path:W,label:_,size:J,color:G,depth:1,startAngle:Z,endAngle:j,innerRadius:X[0],outerRadius:X[1],d:W1(120,120,X[0],X[1],Z,j)}],legend:[{key:W,name:_,size:J,pct:100,color:G}]}}function o3(_,$=!1,J=!1){if(!_)return null;let Y=s3(_),X=a3(_,0),Z=X.size||Y,{segments:j,legend:G}=_4(X,Z,J);if(!j.length&&Z>0){let V=$4("[files]",X.path,Z,J);j=V.segments,G=V.legend}return{root:X,totalSize:Z,segments:j,legend:G,truncated:$,isDarkTheme:J}}function E8({payload:_}){if(!_)return null;let[$,J]=x(null),[Y,X]=x(_?.root?.path||"."),[Z,j]=x(()=>[_?.root?.path||"."]),[G,V]=x(!1);g(()=>{let h=_?.root?.path||".";X(h),j([h]),J(null)},[_?.root?.path,_?.totalSize]),g(()=>{if(!Y)return;V(!0);let h=setTimeout(()=>V(!1),180);return()=>clearTimeout(h)},[Y]);let W=A0(()=>{return G1(_.root,Y)||_.root},[_?.root,Y]),Q=W?.size||_.totalSize||0,{segments:y,legend:F}=A0(()=>{let h=_4(W,Q,_.isDarkTheme);if(h.segments.length>0)return h;if(Q<=0)return h;let e=W?.children?.length?"Total":"[files]";return $4(e,W?.path||_?.root?.path||".",Q,_.isDarkTheme)},[W,Q,_.isDarkTheme,_?.root?.path]),[D,N]=x(y),z=k(new Map),E=k(0);g(()=>{let h=z.current,e=new Map(y.map((W_)=>[W_.key,W_])),H_=performance.now(),J_=220,Q_=(W_)=>{let F_=Math.min(1,(W_-H_)/220),Z_=F_*(2-F_),r=y.map((G_)=>{let K_=h.get(G_.key)||{startAngle:G_.startAngle,endAngle:G_.startAngle,innerRadius:G_.innerRadius,outerRadius:G_.innerRadius},N_=(U_,P_)=>U_+(P_-U_)*Z_,M_=N_(K_.startAngle,G_.startAngle),B_=N_(K_.endAngle,G_.endAngle),y_=N_(K_.innerRadius,G_.innerRadius),x_=N_(K_.outerRadius,G_.outerRadius);return{...G_,d:W1(120,120,y_,x_,M_,B_)}});if(N(r),F_<1)E.current=requestAnimationFrame(Q_)};if(E.current)cancelAnimationFrame(E.current);return E.current=requestAnimationFrame(Q_),z.current=e,()=>{if(E.current)cancelAnimationFrame(E.current)}},[y]);let w=D.length?D:y,M=Q>0?M0(Q):"0 B",v=W?.name||"",o=(v&&v!=="."?v:"Total")||"Total",__=M,s=Z.length>1,a=(h)=>{if(!h?.path)return;let e=G1(_.root,h.path);if(!e||!Array.isArray(e.children)||e.children.length===0)return;j((H_)=>[...H_,e.path]),X(e.path),J(null)},j_=()=>{if(!s)return;j((h)=>{let e=h.slice(0,-1);return X(e[e.length-1]||_?.root?.path||"."),e}),J(null)};return U`
        <div class="workspace-folder-starburst">
            <svg viewBox="0 0 240 240" class=${`workspace-folder-starburst-svg${G?" is-zooming":""}`} role="img"
                aria-label=${`Folder sizes for ${W?.path||_?.root?.path||"."}`}
                data-segments=${w.length}
                data-base-size=${Q}>
                ${w.map((h)=>U`
                    <path
                        key=${h.key}
                        d=${h.d}
                        fill=${h.color}
                        stroke="var(--bg-primary)"
                        stroke-width="1"
                        class=${`workspace-folder-starburst-segment${$?.key===h.key?" is-hovered":""}`}
                        onMouseEnter=${()=>J(h)}
                        onMouseLeave=${()=>J(null)}
                        onTouchStart=${()=>J(h)}
                        onTouchEnd=${()=>J(null)}
                        onClick=${()=>a(h)}
                    >
                        <title>${h.label} — ${M0(h.size)}</title>
                    </path>
                `)}
                <g
                    class=${`workspace-folder-starburst-center-hit${s?" is-drill":""}`}
                    onClick=${j_}
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
                    <text x="120" y="114" text-anchor="middle" class="workspace-folder-starburst-total-label">${o}</text>
                    <text x="120" y="130" text-anchor="middle" class="workspace-folder-starburst-total-value">${__}</text>
                </g>
            </svg>
            ${F.length>0&&U`
                <div class="workspace-folder-starburst-legend">
                    ${F.slice(0,8).map((h)=>U`
                        <div key=${h.key} class="workspace-folder-starburst-legend-item">
                            <span class="workspace-folder-starburst-swatch" style=${`background:${h.color}`}></span>
                            <span class="workspace-folder-starburst-name" title=${h.name}>${h.name}</span>
                            <span class="workspace-folder-starburst-size">${M0(h.size)}</span>
                            <span class="workspace-folder-starburst-pct">${h.pct.toFixed(1)}%</span>
                        </div>
                    `)}
                </div>
            `}
            ${_.truncated&&U`
                <div class="workspace-folder-starburst-note">Preview is truncated by tree depth/entry limits.</div>
            `}
        </div>
    `}function D8({mediaId:_}){let[$,J]=x(null);if(g(()=>{if(!_)return;z2(_).then(J).catch(()=>{})},[_]),!$)return null;let Y=$.filename||"file",X=$.metadata?.size?M0($.metadata.size):"";return U`
        <a href=${t0(_)} download=${Y} class="file-attachment"
            onClick=${(Z)=>Z.stopPropagation()}>
            <svg class="file-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                <polyline points="14 2 14 8 20 8"/>
                <line x1="16" y1="13" x2="8" y2="13"/>
                <line x1="16" y1="17" x2="8" y2="17"/>
                <polyline points="10 9 9 9 8 9"/>
            </svg>
            <div class="file-info">
                <span class="file-name">${Y}</span>
                ${X&&U`<span class="file-size">${X}</span>`}
            </div>
            <svg class="download-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                <polyline points="7 10 12 15 17 10"/>
                <line x1="12" y1="15" x2="12" y2="3"/>
            </svg>
        </a>
    `}function J4({onFileSelect:_,visible:$=!0,active:J=void 0,onOpenEditor:Y}){let[X,Z]=x(null),[j,G]=x(new Set(["."])),[V,W]=x(null),[Q,y]=x(null),[F,D]=x(""),[N,z]=x(null),[E,w]=x(null),[M,v]=x(!0),[R,o]=x(!1),[__,s]=x(null),[a,j_]=x(()=>h0("workspaceShowHidden",!1)),[h,e]=x(!1),[H_,J_]=x(null),[Q_,W_]=x(null),[F_,Z_]=x(null),[r,G_]=x(!1),[t,K_]=x(null),[N_,M_]=x(()=>l3()),B_=k(j),y_=k(""),x_=k(null),U_=k(0),P_=k(new Set),z_=k(null),E_=k(new Map),p_=k(_),O0=k(Y),b_=k(null),k_=k(null),e_=k(null),U0=k(null),h_=k(null),a_=k(null),f_=k("."),L_=k(null),b=k({path:null,dragging:!1,startX:0,startY:0}),d=k({path:null,dragging:!1,startX:0,startY:0}),u_=k({path:null,timer:0}),D0=k(!1),Z0=k(0),b0=k(new Map),X0=k(null),z0=k(null),_0=k(a),Q0=k($),m_=k(J??$),i_=k(0),v_=k(F_),C0=k(h),$0=k(H_),H0=k(null),R0=k({x:0,y:0}),g_=k(0),J0=k(null),l_=k(V),N0=k(Q),q0=k(N);p_.current=_,O0.current=Y,g(()=>{B_.current=j},[j]),g(()=>{_0.current=a},[a]),g(()=>{Q0.current=$},[$]),g(()=>{m_.current=J??$},[J,$]),g(()=>{v_.current=F_},[F_]),g(()=>{let K=(B)=>{let C=B?.detail?.path;if(!C)return;let L=C.split("/"),T=[];for(let c=1;c<L.length;c++)T.push(L.slice(0,c).join("/"));if(T.length)G((c)=>{let l=new Set(c);l.add(".");for(let n of T)l.add(n);return l});W(C),requestAnimationFrame(()=>{let c=document.querySelector(`[data-path="${CSS.escape(C)}"]`);if(c)c.scrollIntoView({block:"nearest",behavior:"smooth"})})};return window.addEventListener("workspace-reveal-path",K),()=>window.removeEventListener("workspace-reveal-path",K)},[]),g(()=>{C0.current=h},[h]),g(()=>{$0.current=H_},[H_]),g(()=>{l_.current=V},[V]),g(()=>{N0.current=Q},[Q]),g(()=>{q0.current=N},[N]),g(()=>{if(typeof window>"u"||typeof document>"u")return;let K=()=>M_(l3());K();let B=window.matchMedia?.("(prefers-color-scheme: dark)"),C=()=>K();if(B?.addEventListener)B.addEventListener("change",C);else if(B?.addListener)B.addListener(C);let L=typeof MutationObserver<"u"?new MutationObserver(()=>K()):null;if(L?.observe(document.documentElement,{attributes:!0,attributeFilter:["class","data-theme"]}),document.body)L?.observe(document.body,{attributes:!0,attributeFilter:["class","data-theme"]});return()=>{if(B?.removeEventListener)B.removeEventListener("change",C);else if(B?.removeListener)B.removeListener(C);L?.disconnect()}},[]),g(()=>{if(!Q)return;let K=h_.current;if(!K)return;let B=requestAnimationFrame(()=>{try{K.focus(),K.select()}catch{}});return()=>cancelAnimationFrame(B)},[Q]);let P0=async(K)=>{o(!0),z(null),w(null);try{let B=await Q3(K,20000);z(B)}catch(B){z({error:B.message||"Failed to load preview"})}finally{o(!1)}};b_.current=P0;let y0=async()=>{if(!Q0.current)return;try{let K=await H2("",1,_0.current),B=i3(K.root,B_.current,_0.current);if(B===y_.current){v(!1);return}if(y_.current=B,x_.current=K.root,!U_.current)U_.current=requestAnimationFrame(()=>{U_.current=0,Z((C)=>V1(C,x_.current)),v(!1)})}catch(K){s(K.message||"Failed to load workspace"),v(!1)}},F0=async(K)=>{if(!K)return;if(P_.current.has(K))return;P_.current.add(K);try{let B=await H2(K,1,_0.current);Z((C)=>j1(C,K,B.root))}catch(B){s(B.message||"Failed to load workspace")}finally{P_.current.delete(K)}};k_.current=F0;let I_=P(()=>{let K=V;if(!K)return".";let B=E_.current?.get(K);if(B&&B.type==="dir")return B.path;if(K==="."||!K.includes("/"))return".";let C=K.split("/");return C.pop(),C.join("/")||"."},[V]),K0=P((K)=>{let B=K?.closest?.(".workspace-row");if(!B)return null;let C=B.dataset.path,L=B.dataset.type;if(!C)return null;if(L==="dir")return C;if(C.includes("/")){let T=C.split("/");return T.pop(),T.join("/")||"."}return"."},[]),Y0=P((K)=>{return K0(K?.target||null)},[K0]),S_=P((K)=>{v_.current=K,Z_(K)},[]),o_=P(()=>{let K=u_.current;if(K?.timer)clearTimeout(K.timer);u_.current={path:null,timer:0}},[]),j0=P((K)=>{if(!K||K==="."){o_();return}let B=E_.current?.get(K);if(!B||B.type!=="dir"){o_();return}if(B_.current?.has(K)){o_();return}if(u_.current?.path===K)return;o_();let C=setTimeout(()=>{u_.current={path:null,timer:0},k_.current?.(K),G((L)=>{let T=new Set(L);return T.add(K),T})},600);u_.current={path:K,timer:C}},[o_]),k0=P((K,B)=>{if(R0.current={x:K,y:B},g_.current)return;g_.current=requestAnimationFrame(()=>{g_.current=0;let C=H0.current;if(!C)return;let L=R0.current;C.style.transform=`translate(${L.x+12}px, ${L.y+12}px)`})},[]),I0=P((K)=>{if(!K)return;let C=(E_.current?.get(K)?.name||K.split("/").pop()||K).trim();if(!C)return;W_({path:K,label:C})},[]),H=P(()=>{if(W_(null),g_.current)cancelAnimationFrame(g_.current),g_.current=0;if(H0.current)H0.current.style.transform="translate(-9999px, -9999px)"},[]),I=P((K)=>{if(!K)return".";let B=E_.current?.get(K);if(B&&B.type==="dir")return B.path;if(K==="."||!K.includes("/"))return".";let C=K.split("/");return C.pop(),C.join("/")||"."},[]),u=P(()=>{y(null),D("")},[]),$_=P((K)=>{if(!K)return;let C=(E_.current?.get(K)?.name||K.split("/").pop()||K).trim();if(!C||K===".")return;y(K),D(C)},[]),q_=P(async()=>{let K=N0.current;if(!K)return;let B=(F||"").trim();if(!B){u();return}let C=E_.current?.get(K),L=(C?.name||K.split("/").pop()||K).trim();if(B===L){u();return}try{let c=(await G3(K,B))?.path||K,l=K.includes("/")?K.split("/").slice(0,-1).join("/")||".":".";if(u(),s(null),window.dispatchEvent(new CustomEvent("workspace-file-renamed",{detail:{oldPath:K,newPath:c,type:C?.type||"file"}})),C?.type==="dir")G((n)=>{let i=new Set;for(let Y_ of n)if(Y_===K)i.add(c);else if(Y_.startsWith(`${K}/`))i.add(`${c}${Y_.slice(K.length)}`);else i.add(Y_);return i});if(W(c),C?.type==="dir")z(null),o(!1),w(null);else b_.current?.(c);k_.current?.(l)}catch(T){s(T?.message||"Failed to rename file")}},[u,F]),T_=P(async(K)=>{let L=K||".";for(let T=0;T<50;T+=1){let l=`untitled${T===0?"":`-${T}`}.md`;try{let i=(await j3(L,l,""))?.path||(L==="."?l:`${L}/${l}`);if(L&&L!==".")G((Y_)=>new Set([...Y_,L]));W(i),s(null),k_.current?.(L),b_.current?.(i);return}catch(n){if(n?.status===409||n?.code==="file_exists")continue;s(n?.message||"Failed to create file");return}}s("Failed to create file (untitled name already in use).")},[]),O_=P((K)=>{if(K?.stopPropagation?.(),r)return;let B=I(l_.current);T_(B)},[r,I,T_]);g(()=>{if(typeof window>"u")return;let K=(B)=>{let C=B?.detail?.updates||[];if(!Array.isArray(C)||C.length===0)return;Z((n)=>{let i=n;for(let Y_ of C){if(!Y_?.root)continue;if(!i||Y_.path==="."||!Y_.path)i=Y_.root;else i=j1(i,Y_.path,Y_.root)}if(i)y_.current=i3(i,B_.current,_0.current);return v(!1),i});let L=l_.current;if(Boolean(L)&&C.some((n)=>{let i=n?.path||"";if(!i||i===".")return!0;return L===i||L.startsWith(`${i}/`)||i.startsWith(`${L}/`)}))b0.current.clear();if(!L||!q0.current)return;let c=E_.current?.get(L);if(c&&c.type==="dir")return;if(C.some((n)=>{let i=n?.path||"";if(!i||i===".")return!0;return L===i||L.startsWith(`${i}/`)}))b_.current?.(L)};return window.addEventListener("workspace-update",K),()=>window.removeEventListener("workspace-update",K)},[]),z_.current=y0;let w_=k(()=>{if(typeof window>"u")return;let K=window.matchMedia("(min-width: 1024px) and (orientation: landscape)"),B=m_.current??Q0.current,C=document.visibilityState!=="hidden"&&(B||K.matches&&Q0.current);F2(C,_0.current).catch(()=>{})}).current,r_=k(0),w0=k(()=>{if(r_.current)clearTimeout(r_.current);r_.current=setTimeout(()=>{r_.current=0,w_()},250)}).current;g(()=>{if(Q0.current)z_.current?.();w0()},[$,J]),g(()=>{z_.current(),w_();let K=setInterval(()=>z_.current(),z8),B=i0("previewHeight",null),C=Number.isFinite(B)?Math.min(Math.max(B,80),600):280;if(Z0.current=C,e_.current)e_.current.style.setProperty("--preview-height",`${C}px`);let L=window.matchMedia("(min-width: 1024px) and (orientation: landscape)"),T=()=>w0();if(L.addEventListener)L.addEventListener("change",T);else if(L.addListener)L.addListener(T);return document.addEventListener("visibilitychange",T),()=>{if(clearInterval(K),U_.current)cancelAnimationFrame(U_.current),U_.current=0;if(L.removeEventListener)L.removeEventListener("change",T);else if(L.removeListener)L.removeListener(T);if(document.removeEventListener("visibilitychange",T),r_.current)clearTimeout(r_.current),r_.current=0;if(L_.current)clearTimeout(L_.current),L_.current=null;F2(!1,_0.current).catch(()=>{})}},[]);let R_=A0(()=>d3(X,j,a),[X,j,a]),c_=A0(()=>new Map(R_.map((K)=>[K.node.path,K.node])),[R_]);E_.current=c_;let n_=(V?E_.current.get(V):null)?.type==="dir";g(()=>{if(!V||!n_){K_(null),X0.current=null,z0.current=null;return}let K=V,B=`${a?"hidden":"visible"}:${V}`,C=b0.current,L=C.get(B);if(L?.root){C.delete(B),C.set(B,L);let l=o3(L.root,Boolean(L.truncated),N_);if(l)X0.current=l,z0.current=V,K_({loading:!1,error:null,payload:l});return}let T=X0.current,c=z0.current;K_({loading:!0,error:null,payload:c===V?T:null}),H2(V,F8,a).then((l)=>{if(l_.current!==K)return;let n={root:l?.root,truncated:Boolean(l?.truncated)};C.delete(B),C.set(B,n);while(C.size>L8){let Y_=C.keys().next().value;if(!Y_)break;C.delete(Y_)}let i=o3(n.root,n.truncated,N_);X0.current=i,z0.current=V,K_({loading:!1,error:null,payload:i})}).catch((l)=>{if(l_.current!==K)return;K_({loading:!1,error:l?.message||"Failed to load folder size chart",payload:c===V?T:null})})},[V,n_,a,N_]);let L0=Boolean(N&&N.kind==="text"&&!n_&&(!N.size||N.size<=262144)),s_=L0?"Open in editor":N?.size>262144?"File too large to edit":"File is not editable",J2=(K)=>{let B=K?.target;if(B instanceof Element)return B;return B?.parentElement||null},S2=k((K)=>{if(D0.current){D0.current=!1;return}let B=J2(K),C=B?.closest?.("[data-path]");if(U0.current?.focus?.(),!C)return;let L=C.dataset.path,T=C.dataset.type,c=Boolean(B?.closest?.(".workspace-caret")),l=Boolean(B?.closest?.("button"))||Boolean(B?.closest?.("a"))||Boolean(B?.closest?.("input")),n=l_.current===L,i=N0.current;if(i){if(i===L)return;u()}if(n&&!c&&!l&&L!=="."){$_(L);return}if(T==="dir"){if(W(L),z(null),w(null),o(!1),!B_.current.has(L))k_.current?.(L);if(n&&!c)return;G((G0)=>{let O=new Set(G0);if(O.has(L))O.delete(L);else O.add(L);return O})}else{W(L);let Y_=E_.current.get(L);if(Y_)p_.current?.(Y_.path,Y_);b_.current?.(L)}}).current,Y2=k(()=>{y_.current="",z_.current(),Array.from(B_.current||[]).filter((B)=>B&&B!==".").forEach((B)=>k_.current?.(B))}).current,t_=k(()=>{W(null),z(null),w(null),o(!1)}).current,E0=k(()=>{j_((K)=>{let B=!K;if(typeof window<"u")A_("workspaceShowHidden",String(B));return _0.current=B,F2(!0,B).catch(()=>{}),y_.current="",z_.current?.(),Array.from(B_.current||[]).filter((L)=>L&&L!==".").forEach((L)=>k_.current?.(L)),B})}).current,T2=k((K)=>{if(J2(K)?.closest?.("[data-path]"))return;t_()}).current,S0=P(async(K)=>{if(!K)return;let B=K.split("/").pop()||K;if(!window.confirm(`Delete "${B}"? This cannot be undone.`))return;try{await W3(K);let L=K.includes("/")?K.split("/").slice(0,-1).join("/")||".":".";if(l_.current===K)t_();k_.current?.(L),s(null)}catch(L){z((T)=>({...T||{},error:L.message||"Failed to delete file"}))}},[t_]),T0=P((K)=>{let B=U0.current;if(!B||!K||typeof CSS>"u"||typeof CSS.escape!=="function")return;B.querySelector(`[data-path="${CSS.escape(K)}"]`)?.scrollIntoView?.({block:"nearest"})},[]),x2=P((K)=>{let B=R_;if(!B||B.length===0)return;let C=V?B.findIndex((L)=>L.node.path===V):-1;if(K.key==="ArrowDown"){K.preventDefault();let L=Math.min(C+1,B.length-1),T=B[L];if(!T)return;if(W(T.node.path),T.node.type!=="dir")p_.current?.(T.node.path,T.node),b_.current?.(T.node.path);else z(null),o(!1),w(null);T0(T.node.path);return}if(K.key==="ArrowUp"){K.preventDefault();let L=C<=0?0:C-1,T=B[L];if(!T)return;if(W(T.node.path),T.node.type!=="dir")p_.current?.(T.node.path,T.node),b_.current?.(T.node.path);else z(null),o(!1),w(null);T0(T.node.path);return}if(K.key==="ArrowRight"&&C>=0){let L=B[C];if(L?.node?.type==="dir"&&!j.has(L.node.path))K.preventDefault(),k_.current?.(L.node.path),G((T)=>new Set([...T,L.node.path]));return}if(K.key==="ArrowLeft"&&C>=0){let L=B[C];if(L?.node?.type==="dir"&&j.has(L.node.path))K.preventDefault(),G((T)=>{let c=new Set(T);return c.delete(L.node.path),c});return}if(K.key==="Enter"&&C>=0){K.preventDefault();let L=B[C];if(!L)return;let T=L.node.path;if(L.node.type==="dir"){if(!B_.current.has(T))k_.current?.(T);G((l)=>{let n=new Set(l);if(n.has(T))n.delete(T);else n.add(T);return n}),z(null),w(null),o(!1)}else p_.current?.(T,L.node),b_.current?.(T);return}if((K.key==="Delete"||K.key==="Backspace")&&C>=0){let L=B[C];if(!L||L.node.type==="dir")return;K.preventDefault(),S0(L.node.path);return}if(K.key==="Escape")K.preventDefault(),t_()},[t_,S0,j,R_,T0,V]),f2=P((K)=>{let B=K?.target?.closest?.(".workspace-row");if(!B)return;let C=B.dataset.type,L=B.dataset.path;if(!L||L===".")return;if(N0.current===L)return;let T=K?.touches?.[0];if(!T)return;if(b.current={path:L,dragging:!1,startX:T.clientX,startY:T.clientY},C!=="file")return;if(L_.current)clearTimeout(L_.current);L_.current=setTimeout(()=>{if(L_.current=null,b.current?.dragging)return;S0(L)},600)},[S0]),Z2=P(()=>{if(L_.current)clearTimeout(L_.current),L_.current=null;let K=b.current;if(K?.dragging&&K.path){let B=v_.current||I_(),C=J0.current;if(typeof C==="function")C(K.path,B)}b.current={path:null,dragging:!1,startX:0,startY:0},i_.current=0,e(!1),J_(null),S_(null),o_(),H()},[I_,H,S_,o_]),v2=P((K)=>{let B=b.current,C=K?.touches?.[0];if(!C||!B?.path){if(L_.current)clearTimeout(L_.current),L_.current=null;return}let L=Math.abs(C.clientX-B.startX),T=Math.abs(C.clientY-B.startY),c=L>8||T>8;if(c&&L_.current)clearTimeout(L_.current),L_.current=null;if(!B.dragging&&c)B.dragging=!0,e(!0),J_("move"),I0(B.path);if(B.dragging){K.preventDefault(),k0(C.clientX,C.clientY);let l=document.elementFromPoint(C.clientX,C.clientY),n=K0(l)||I_();if(v_.current!==n)S_(n);j0(n)}},[K0,I_,I0,k0,S_,j0]),R2=k((K)=>{K.preventDefault();let B=e_.current;if(!B)return;let C=K.clientY,L=Z0.current||280,T=K.currentTarget;T.classList.add("dragging"),document.body.style.cursor="row-resize",document.body.style.userSelect="none";let c=C,l=(i)=>{c=i.clientY;let Y_=B.clientHeight-80,G0=Math.min(Math.max(L-(i.clientY-C),80),Y_);B.style.setProperty("--preview-height",`${G0}px`),Z0.current=G0},n=()=>{let i=B.clientHeight-80,Y_=Math.min(Math.max(L-(c-C),80),i);Z0.current=Y_,T.classList.remove("dragging"),document.body.style.cursor="",document.body.style.userSelect="",A_("previewHeight",String(Math.round(Y_))),document.removeEventListener("mousemove",l),document.removeEventListener("mouseup",n)};document.addEventListener("mousemove",l),document.addEventListener("mouseup",n)}).current,u2=k((K)=>{K.preventDefault();let B=e_.current;if(!B)return;let C=K.touches[0];if(!C)return;let L=C.clientY,T=Z0.current||280,c=K.currentTarget;c.classList.add("dragging"),document.body.style.userSelect="none";let l=(i)=>{let Y_=i.touches[0];if(!Y_)return;i.preventDefault();let G0=B.clientHeight-80,O=Math.min(Math.max(T-(Y_.clientY-L),80),G0);B.style.setProperty("--preview-height",`${O}px`),Z0.current=O},n=()=>{c.classList.remove("dragging"),document.body.style.userSelect="",A_("previewHeight",String(Math.round(Z0.current||T))),document.removeEventListener("touchmove",l),document.removeEventListener("touchend",n),document.removeEventListener("touchcancel",n)};document.addEventListener("touchmove",l,{passive:!1}),document.addEventListener("touchend",n),document.addEventListener("touchcancel",n)}).current,u0=async()=>{if(!V)return;try{let K=await K3(V);if(K.media_id)w(K.media_id)}catch(K){z((B)=>({...B||{},error:K.message||"Failed to attach"}))}},d0=async()=>{if(!V||n_)return;await S0(V)},B0=(K)=>{return Array.from(K?.dataTransfer?.types||[]).includes("Files")},m2=P((K)=>{if(!B0(K))return;if(K.preventDefault(),i_.current+=1,!C0.current)e(!0);J_("upload");let B=Y0(K)||I_();S_(B),j0(B)},[I_,Y0,S_,j0]),g2=P((K)=>{if(!B0(K))return;if(K.preventDefault(),K.dataTransfer)K.dataTransfer.dropEffect="copy";if(!C0.current)e(!0);if($0.current!=="upload")J_("upload");let B=Y0(K)||I_();if(v_.current!==B)S_(B);j0(B)},[I_,Y0,S_,j0]),c2=P((K)=>{if(!B0(K))return;if(K.preventDefault(),i_.current=Math.max(0,i_.current-1),i_.current===0)e(!1),J_(null),S_(null),o_()},[S_,o_]),m0=P(async(K,B=".")=>{let C=Array.from(K||[]);if(C.length===0)return;let L=B&&B!==""?B:".",T=L!=="."?L:"workspace root";G_(!0);try{let c=null;for(let l of C)try{c=await t2(l,L)}catch(n){let i=n?.status,Y_=n?.code;if(i===409||Y_==="file_exists"){let G0=l?.name||"file";if(!window.confirm(`"${G0}" already exists in ${T}. Overwrite?`))continue;c=await t2(l,L,{overwrite:!0})}else throw n}if(c?.path)W(c.path),b_.current?.(c.path);k_.current?.(L)}catch(c){s(c.message||"Failed to upload file")}finally{G_(!1)}},[]),p2=P(async(K,B)=>{if(!K)return;let C=E_.current?.get(K);if(!C)return;let L=B&&B!==""?B:".",T=K.includes("/")?K.split("/").slice(0,-1).join("/")||".":".";if(L===T)return;try{let l=(await V3(K,L))?.path||K;if(C.type==="dir")G((n)=>{let i=new Set;for(let Y_ of n)if(Y_===K)i.add(l);else if(Y_.startsWith(`${K}/`))i.add(`${l}${Y_.slice(K.length)}`);else i.add(Y_);return i});if(W(l),C.type==="dir")z(null),o(!1),w(null);else b_.current?.(l);k_.current?.(T),k_.current?.(L)}catch(c){s(c?.message||"Failed to move entry")}},[]);J0.current=p2;let h2=P(async(K)=>{if(!B0(K))return;K.preventDefault(),i_.current=0,e(!1),J_(null),Z_(null),o_();let B=Array.from(K?.dataTransfer?.files||[]);if(B.length===0)return;let C=v_.current||Y0(K)||I_();await m0(B,C)},[I_,Y0,m0]),F1=P((K)=>{if(K?.stopPropagation?.(),r)return;let B=K?.currentTarget?.dataset?.uploadTarget||".";f_.current=B,a_.current?.click()},[r]),i2=P(()=>{if(r)return;let K=l_.current,B=K?E_.current?.get(K):null;f_.current=B?.type==="dir"?B.path:".",a_.current?.click()},[r]),X2=P((K)=>{if(!K||K.button!==0)return;let B=K.currentTarget;if(!B||!B.dataset)return;let C=B.dataset.path;if(!C||C===".")return;if(N0.current===C)return;if(K.target?.closest?.("button, a, input, .workspace-caret"))return;K.preventDefault(),d.current={path:C,dragging:!1,startX:K.clientX,startY:K.clientY};let L=(c)=>{let l=d.current;if(!l?.path)return;let n=Math.abs(c.clientX-l.startX),i=Math.abs(c.clientY-l.startY),Y_=n>4||i>4;if(!l.dragging&&Y_)l.dragging=!0,D0.current=!0,e(!0),J_("move"),I0(l.path),k0(c.clientX,c.clientY),document.body.style.userSelect="none",document.body.style.cursor="grabbing";if(l.dragging){c.preventDefault(),k0(c.clientX,c.clientY);let G0=document.elementFromPoint(c.clientX,c.clientY),O=K0(G0)||I_();if(v_.current!==O)S_(O);j0(O)}},T=()=>{document.removeEventListener("mousemove",L),document.removeEventListener("mouseup",T);let c=d.current;if(c?.dragging&&c.path){let l=v_.current||I_(),n=J0.current;if(typeof n==="function")n(c.path,l)}d.current={path:null,dragging:!1,startX:0,startY:0},i_.current=0,e(!1),J_(null),S_(null),o_(),H(),document.body.style.userSelect="",document.body.style.cursor="",setTimeout(()=>{D0.current=!1},0)};document.addEventListener("mousemove",L),document.addEventListener("mouseup",T)},[K0,I_,I0,k0,H,S_,j0,o_]),Q2=P(async(K)=>{let B=Array.from(K?.target?.files||[]);if(B.length===0)return;let C=f_.current||".";if(await m0(B,C),f_.current=".",K?.target)K.target.value=""},[m0]);return U`
        <aside
            class=${`workspace-sidebar${h?" workspace-drop-active":""}`}
            ref=${e_}
            onDragEnter=${m2}
            onDragOver=${g2}
            onDragLeave=${c2}
            onDrop=${h2}
        >
            <input type="file" multiple style="display:none" ref=${a_} onChange=${Q2} />
            <div class="workspace-header">
                <span>Workspace</span>
                <div class="workspace-header-actions">
                    <button class="workspace-create" onClick=${O_} title="New file" disabled=${r}>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                            stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                            <line x1="12" y1="5" x2="12" y2="19" />
                            <line x1="5" y1="12" x2="19" y2="12" />
                        </svg>
                    </button>
                    <button class="workspace-refresh" onClick=${Y2} title="Refresh">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"
                            stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                            <circle cx="12" cy="12" r="8.5" stroke-dasharray="42 12" stroke-dashoffset="6"
                                transform="rotate(75 12 12)" />
                            <polyline points="21 3 21 9 15 9" />
                        </svg>
                    </button>
                    <button
                        class=${`workspace-toggle-hidden${a?" active":""}`}
                        onClick=${E0}
                        title=${a?"Hide hidden files":"Show hidden files"}
                    >
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                            stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                            <path d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7-11-7-11-7z" />
                            <circle cx="12" cy="12" r="3" />
                            ${!a&&U`<line x1="3" y1="3" x2="21" y2="21" />`}
                        </svg>
                    </button>
                </div>
            </div>
            <div class="workspace-tree" onClick=${T2}>
                ${r&&U`<div class="workspace-drop-hint">Uploading…</div>`}
                ${M&&U`<div class="workspace-loading">Loading…</div>`}
                ${__&&U`<div class="workspace-error">${__}</div>`}
                ${X&&U`
                    <div
                        class="workspace-tree-list"
                        ref=${U0}
                        tabIndex="0"
                        onClick=${S2}
                        onKeyDown=${x2}
                        onTouchStart=${f2}
                        onTouchEnd=${Z2}
                        onTouchMove=${v2}
                        onTouchCancel=${Z2}
                    >
                        ${R_.map(({node:K,depth:B})=>{let C=K.type==="dir",L=K.path===V,T=K.path===Q,c=C&&j.has(K.path),l=F_&&K.path===F_,n=Array.isArray(K.children)&&K.children.length>0?K.children.length:Number(K.child_count)||0;return U`
                                <div
                                    key=${K.path}
                                    class=${`workspace-row${L?" selected":""}${l?" drop-target":""}`}
                                    style=${{paddingLeft:`${8+B*U8}px`}}
                                    data-path=${K.path}
                                    data-type=${K.type}
                                    onMouseDown=${X2}
                                >
                                    <span class="workspace-caret" aria-hidden="true">
                                        ${C?c?U`<svg viewBox="0 0 12 12"><polygon points="1,2 11,2 6,11"/></svg>`:U`<svg viewBox="0 0 12 12"><polygon points="2,1 11,6 2,11"/></svg>`:null}
                                    </span>
                                    <svg class=${`workspace-node-icon${C?" folder":""}`}
                                        viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                        stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                        aria-hidden="true">
                                        ${C?U`<path d="M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>`:U`<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/>`}
                                    </svg>
                                    ${T?U`
                                            <input
                                                class="workspace-rename-input"
                                                ref=${h_}
                                                value=${F}
                                                onInput=${(i)=>D(i?.target?.value||"")}
                                                onKeyDown=${(i)=>{if(i.key==="Enter")i.preventDefault(),q_();else if(i.key==="Escape")i.preventDefault(),u()}}
                                                onBlur=${u}
                                                onClick=${(i)=>i.stopPropagation()}
                                            />
                                        `:U`<span class="workspace-label">${K.name}</span>`}
                                    ${C&&!c&&n>0&&U`
                                        <span class="workspace-count">${n}</span>
                                    `}
                                    ${C&&U`
                                        <button
                                            class="workspace-folder-upload"
                                            data-upload-target=${K.path}
                                            title="Upload files to this folder"
                                            onClick=${F1}
                                            disabled=${r}
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
            ${V&&U`
                <div class="workspace-preview-splitter-h" onMouseDown=${R2} onTouchStart=${u2}></div>
                <div class="workspace-preview">
                    <div class="workspace-preview-header">
                        <span class="workspace-preview-title">${V}</span>
                        <div class="workspace-preview-actions">
                            <button class="workspace-create" onClick=${O_} title="New file" disabled=${r}>
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                    stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                    <line x1="12" y1="5" x2="12" y2="19" />
                                    <line x1="5" y1="12" x2="19" y2="12" />
                                </svg>
                            </button>
                            ${!n_&&U`
                                <button
                                    class="workspace-download workspace-edit"
                                    onClick=${()=>L0&&O0.current?.(V,N)}
                                    title=${s_}
                                    disabled=${!L0}
                                >
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                        stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                        <path d="M12 20h9" />
                                        <path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4Z" />
                                    </svg>
                                </button>
                                <button
                                    class="workspace-download workspace-delete"
                                    onClick=${d0}
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
                            ${n_?U`
                                    <button class="workspace-download" onClick=${i2}
                                        title="Upload files to this folder" disabled=${r}>
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                            stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                                            <polyline points="7 8 12 3 17 8"/>
                                            <line x1="12" y1="3" x2="12" y2="15"/>
                                        </svg>
                                    </button>
                                    <a class="workspace-download" href=${O3(V,a)}
                                        title="Download folder as zip" onClick=${(K)=>K.stopPropagation()}>
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                            stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                                            <polyline points="7 10 12 15 17 10"/>
                                            <line x1="12" y1="15" x2="12" y2="3"/>
                                        </svg>
                                    </a>`:U`<button class="workspace-download" onClick=${u0} title="Download">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                        stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                                        <polyline points="7 10 12 15 17 10"/>
                                        <line x1="12" y1="15" x2="12" y2="3"/>
                                    </svg>
                                </button>`}
                        </div>
                    </div>
                    ${R&&U`<div class="workspace-loading">Loading preview…</div>`}
                    ${N?.error&&U`<div class="workspace-error">${N.error}</div>`}
                    ${n_&&U`
                        <div class="workspace-preview-text">Folder selected — create file, upload files, or download as zip.</div>
                        ${t?.loading&&U`<div class="workspace-loading">Loading folder size preview…</div>`}
                        ${t?.error&&U`<div class="workspace-error">${t.error}</div>`}
                        ${t?.payload&&t.payload.segments?.length>0&&U`
                            <${E8} payload=${t.payload} />
                        `}
                        ${t?.payload&&(!t.payload.segments||t.payload.segments.length===0)&&U`
                            <div class="workspace-preview-text">No file size data available for this folder yet.</div>
                        `}
                    `}
                    ${N&&!N.error&&!n_&&U`
                        <div class="workspace-preview-meta">
                            ${N.size?U`<span>${M0(N.size)}</span>`:""}
                            ${N.mtime?U`<span>${A2(N.mtime)}</span>`:""}
                            ${N.truncated?U`<span>truncated</span>`:""}
                        </div>
                        ${N.kind==="image"&&U`
                            <div class="workspace-preview-image">
                                <img src=${N.url||e2(N.path)} alt="preview" />
                            </div>
                        `}
                        ${N.kind==="text"&&U`
                            ${N.content_type==="text/markdown"?U`<div class="workspace-preview-text"
                                    dangerouslySetInnerHTML=${{__html:w2(N.text||"",null,{rewriteImageSrc:(K)=>H8(K,N.path||V)})}} />`:U`<pre class="workspace-preview-text"><code>${N.text||""}</code></pre>`}
                        `}
                        ${N.kind==="binary"&&U`
                            <div class="workspace-preview-text">Binary file — download to view.</div>
                        `}
                    `}
                    ${E&&U`
                        <div class="workspace-download-card">
                            <${D8} mediaId=${E} />
                        </div>
                    `}
                </div>
            `}
            ${Q_&&U`
                <div class="workspace-drag-ghost" ref=${H0}>${Q_.label}</div>
            `}
        </aside>
    `}function Y4({tabs:_,activeId:$,onActivate:J,onClose:Y,onCloseOthers:X,onCloseAll:Z,onTogglePin:j,onToggleDock:G,dockVisible:V}){let[W,Q]=x(null),y=k(null);g(()=>{if(!W)return;let z=(E)=>{if(E.type==="keydown"&&E.key!=="Escape")return;Q(null)};return document.addEventListener("click",z),document.addEventListener("keydown",z),()=>{document.removeEventListener("click",z),document.removeEventListener("keydown",z)}},[W]),g(()=>{let z=(E)=>{if(E.ctrlKey&&E.key==="Tab"){if(E.preventDefault(),!_.length)return;let w=_.findIndex((M)=>M.id===$);if(E.shiftKey){let M=_[(w-1+_.length)%_.length];J?.(M.id)}else{let M=_[(w+1)%_.length];J?.(M.id)}return}if((E.ctrlKey||E.metaKey)&&E.key==="w"){let w=document.querySelector(".editor-pane");if(w&&w.contains(document.activeElement)){if(E.preventDefault(),$)Y?.($)}}};return document.addEventListener("keydown",z),()=>document.removeEventListener("keydown",z)},[_,$,J,Y]);let F=P((z,E)=>{if(z.button===1){z.preventDefault(),Y?.(E);return}if(z.button===0)J?.(E)},[J,Y]),D=P((z,E)=>{z.preventDefault(),Q({id:E,x:z.clientX,y:z.clientY})},[]),N=P((z,E)=>{z.stopPropagation(),Y?.(E)},[Y]);if(g(()=>{if(!$||!y.current)return;let z=y.current.querySelector(".tab-item.active");if(z)z.scrollIntoView({block:"nearest",inline:"nearest",behavior:"smooth"})},[$]),!_.length)return null;return U`
        <div class="tab-strip" ref=${y} role="tablist">
            ${_.map((z)=>U`
                <div
                    key=${z.id}
                    class=${`tab-item${z.id===$?" active":""}${z.dirty?" dirty":""}${z.pinned?" pinned":""}`}
                    role="tab"
                    aria-selected=${z.id===$}
                    title=${z.path}
                    onMouseDown=${(E)=>F(E,z.id)}
                    onContextMenu=${(E)=>D(E,z.id)}
                >
                    ${z.pinned&&U`
                        <span class="tab-pin-icon" aria-label="Pinned">
                            <svg viewBox="0 0 16 16" width="10" height="10" fill="currentColor">
                                <path d="M4.456.734a1.75 1.75 0 0 1 2.826.504l.613 1.327a3.1 3.1 0 0 0 2.084 1.707l2.454.584c1.332.317 1.8 1.972.832 2.94L11.06 10l3.72 3.72a.75.75 0 1 1-1.06 1.06L10 11.06l-2.204 2.205c-.968.968-2.623.5-2.94-.832l-.584-2.454a3.1 3.1 0 0 0-1.707-2.084l-1.327-.613a1.75 1.75 0 0 1-.504-2.826z"/>
                            </svg>
                        </span>
                    `}
                    <span class="tab-label">${z.label}</span>
                    <span
                        class="tab-close"
                        onClick=${(E)=>N(E,z.id)}
                        title=${z.dirty?"Unsaved changes":"Close"}
                        aria-label=${z.dirty?"Unsaved changes":`Close ${z.label}`}
                    >
                        ${z.dirty?U`<span class="tab-dirty-dot" aria-hidden="true"></span>`:U`<svg viewBox="0 0 16 16" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round">
                                <line x1="4" y1="4" x2="12" y2="12"/>
                                <line x1="12" y1="4" x2="4" y2="12"/>
                            </svg>`}
                    </span>
                </div>
            `)}
            ${G&&U`
                <div class="tab-strip-spacer"></div>
                <button
                    class=${`tab-strip-dock-toggle${V?" active":""}`}
                    onClick=${G}
                    title=${`${V?"Hide":"Show"} terminal (Ctrl+\`)`}
                    aria-label=${`${V?"Hide":"Show"} terminal`}
                    aria-pressed=${V?"true":"false"}
                >
                    <svg viewBox="0 0 16 16" width="14" height="14" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                        <polyline points="4 12 4 10 8 6 12 10 12 12"/>
                        <line x1="2" y1="14" x2="14" y2="14"/>
                    </svg>
                </button>
            `}
        </div>
        ${W&&U`
            <div class="tab-context-menu" style=${{left:W.x+"px",top:W.y+"px"}}>
                <button onClick=${()=>{Y?.(W.id),Q(null)}}>Close</button>
                <button onClick=${()=>{X?.(W.id),Q(null)}}>Close Others</button>
                <button onClick=${()=>{Z?.(),Q(null)}}>Close All</button>
                <hr />
                <button onClick=${()=>{j?.(W.id),Q(null)}}>
                    ${_.find((z)=>z.id===W.id)?.pinned?"Unpin":"Pin"}
                </button>
            </div>
        `}
    `}class Z4{extensions=new Map;register(_){this.extensions.set(_.id,_)}unregister(_){this.extensions.delete(_)}resolve(_){let $,J=-1/0;for(let Y of this.extensions.values()){if(Y.placement!=="tabs")continue;if(!Y.canHandle)continue;try{let X=Y.canHandle(_);if(X===!1||X===0)continue;let Z=X===!0?0:typeof X==="number"?X:0;if(Z>J)J=Z,$=Y}catch(X){console.warn(`[PaneRegistry] canHandle() error for "${Y.id}":`,X)}}return $}list(){return Array.from(this.extensions.values())}getDockPanes(){return Array.from(this.extensions.values()).filter((_)=>_.placement==="dock")}getTabPanes(){return Array.from(this.extensions.values()).filter((_)=>_.placement==="tabs")}get(_){return this.extensions.get(_)}get size(){return this.extensions.size}}var W0=new Z4;var P2=null,O1=null;function X4(){if(O1)return Promise.resolve(O1);if(!P2)P2=import("/static/dist/editor.bundle.js").then((_)=>{return O1=_,_}).catch((_)=>{throw P2=null,_});return P2}class Q4{container;context;real=null;disposed=!1;loadingEl;queuedDirtyCb=null;queuedSaveCb=null;queuedCloseCb=null;queuedViewStateCb=null;queuedViewState=null;constructor(_,$){this.container=_,this.context=$,this.loadingEl=document.createElement("div"),this.loadingEl.className="editor-pane",this.loadingEl.innerHTML=`
            <div class="editor-header">
                <div class="editor-title">${this.escapeHtml($.path||"Untitled")}</div>
            </div>
            <div class="editor-body">
                <div class="editor-status" style="padding: 2em; text-align: center; color: var(--text-secondary);">Loading editor…</div>
            </div>
        `,_.appendChild(this.loadingEl),this.load()}escapeHtml(_){let $=document.createElement("div");return $.textContent=_,$.innerHTML}async load(){try{let _=await X4();if(this.disposed)return;if(this.loadingEl.parentNode)this.loadingEl.remove();if(this.real=new _.StandaloneEditorInstance(this.container,this.context),this.queuedDirtyCb&&this.real.onDirtyChange)this.real.onDirtyChange(this.queuedDirtyCb);if(this.queuedSaveCb&&this.real.onSaveRequest)this.real.onSaveRequest(this.queuedSaveCb);if(this.queuedCloseCb&&this.real.onClose)this.real.onClose(this.queuedCloseCb);if(this.queuedViewStateCb&&typeof this.real.onViewStateChange==="function")this.real.onViewStateChange(this.queuedViewStateCb);if(this.queuedViewState&&typeof this.real.restoreViewState==="function")requestAnimationFrame(()=>this.real?.restoreViewState?.(this.queuedViewState))}catch(_){if(this.disposed)return;console.error("[editor-loader] Failed to load editor bundle:",_),this.loadingEl.querySelector(".editor-status").textContent="Failed to load editor. Check console for details."}}getContent(){return this.real?.getContent()}isDirty(){return this.real?.isDirty()||!1}setContent(_,$){if(this.real?.setContent)this.real.setContent(_,$)}focus(){this.real?.focus()}resize(){this.real?.resize?.()}dispose(){if(this.disposed)return;if(this.disposed=!0,this.real)this.real.dispose(),this.real=null;this.container.innerHTML="",this.queuedDirtyCb=null,this.queuedSaveCb=null,this.queuedCloseCb=null,this.queuedViewStateCb=null}onDirtyChange(_){if(this.queuedDirtyCb=_,this.real?.onDirtyChange)this.real.onDirtyChange(_)}onSaveRequest(_){if(this.queuedSaveCb=_,this.real?.onSaveRequest)this.real.onSaveRequest(_)}onClose(_){if(this.queuedCloseCb=_,this.real?.onClose)this.real.onClose(_)}onViewStateChange(_){if(this.queuedViewStateCb=_,this.real&&typeof this.real.onViewStateChange==="function")this.real.onViewStateChange(_)}restoreViewState(_){if(this.queuedViewState=_,this.real&&typeof this.real.restoreViewState==="function")this.real.restoreViewState(_)}getPath(){if(this.real&&typeof this.real.getPath==="function")return this.real.getPath();return this.context.path||""}setPath(_){if(this.real&&typeof this.real.setPath==="function")this.real.setPath(_)}}var N1={id:"editor",label:"Editor",icon:"edit",capabilities:["edit"],placement:"tabs",canHandle(_){if(!_.path)return!1;return 1},mount(_,$){return new Q4(_,$)}};function q1(){X4().catch(()=>{})}class K4{container;disposed=!1;termEl;constructor(_,$){this.container=_,this.termEl=document.createElement("div"),this.termEl.className="terminal-pane-content",this.termEl.setAttribute("tabindex","0");let J=document.createElement("div");J.className="terminal-pane-header";let Y=document.createElement("span");Y.className="terminal-pane-title",Y.textContent="Terminal";let X=document.createElement("span");X.className="terminal-pane-status",X.textContent="Not connected",J.append(Y,X);let Z=document.createElement("div");Z.className="terminal-pane-body",Z.innerHTML='<div class="terminal-placeholder">Terminal integration pending — xterm.js + WebSocket</div>',this.termEl.append(J,Z),_.appendChild(this.termEl)}getContent(){return}isDirty(){return!1}focus(){this.termEl?.focus()}resize(){}dispose(){if(this.disposed)return;this.disposed=!0,this.termEl?.remove()}}var B1={id:"terminal",label:"Terminal",icon:"terminal",capabilities:["terminal"],placement:"dock",mount(_,$){return new K4(_,$)}};class j4{tabs=new Map;activeId=null;mruOrder=[];listeners=new Set;onChange(_){return this.listeners.add(_),()=>this.listeners.delete(_)}notify(){let _=this.getTabs(),$=this.activeId;for(let J of this.listeners)try{J(_,$)}catch{}}open(_,$){let J=this.tabs.get(_);if(!J)J={id:_,label:$||_.split("/").pop()||_,path:_,dirty:!1,pinned:!1},this.tabs.set(_,J);return this.activate(_),J}activate(_){if(!this.tabs.has(_))return;this.activeId=_,this.mruOrder=[_,...this.mruOrder.filter(($)=>$!==_)],this.notify()}close(_){if(!this.tabs.get(_))return!1;if(this.tabs.delete(_),this.mruOrder=this.mruOrder.filter((J)=>J!==_),this.activeId===_)this.activeId=this.mruOrder[0]||null;return this.notify(),!0}closeOthers(_){for(let[$,J]of this.tabs)if($!==_&&!J.pinned)this.tabs.delete($),this.mruOrder=this.mruOrder.filter((Y)=>Y!==$);if(this.activeId&&!this.tabs.has(this.activeId))this.activeId=_;this.notify()}closeAll(){for(let[_,$]of this.tabs)if(!$.pinned)this.tabs.delete(_),this.mruOrder=this.mruOrder.filter((J)=>J!==_);if(this.activeId&&!this.tabs.has(this.activeId))this.activeId=this.mruOrder[0]||null;this.notify()}setDirty(_,$){let J=this.tabs.get(_);if(!J||J.dirty===$)return;J.dirty=$,this.notify()}togglePin(_){let $=this.tabs.get(_);if(!$)return;$.pinned=!$.pinned,this.notify()}saveViewState(_,$){let J=this.tabs.get(_);if(J)J.viewState=$}getViewState(_){return this.tabs.get(_)?.viewState}rename(_,$,J){let Y=this.tabs.get(_);if(!Y)return;if(this.tabs.delete(_),Y.id=$,Y.path=$,Y.label=J||$.split("/").pop()||$,this.tabs.set($,Y),this.mruOrder=this.mruOrder.map((X)=>X===_?$:X),this.activeId===_)this.activeId=$;this.notify()}getTabs(){return Array.from(this.tabs.values())}getActiveId(){return this.activeId}getActive(){return this.activeId?this.tabs.get(this.activeId)||null:null}get(_){return this.tabs.get(_)}get size(){return this.tabs.size}hasUnsaved(){for(let _ of this.tabs.values())if(_.dirty)return!0;return!1}getDirtyTabs(){return Array.from(this.tabs.values()).filter((_)=>_.dirty)}nextTab(){let _=this.getTabs();if(_.length<=1)return;let $=_.findIndex((Y)=>Y.id===this.activeId),J=_[($+1)%_.length];this.activate(J.id)}prevTab(){let _=this.getTabs();if(_.length<=1)return;let $=_.findIndex((Y)=>Y.id===this.activeId),J=_[($-1+_.length)%_.length];this.activate(J.id)}mruSwitch(){if(this.mruOrder.length>1)this.activate(this.mruOrder[1])}}var D_=new j4;function G4({handleSseEvent:_,handleConnectionStatusChange:$,loadPosts:J}){g(()=>{J();let Y=new _1(_,$);Y.connect();let X=()=>{Y.reconnectIfNeeded()};return window.addEventListener("focus",X),document.addEventListener("visibilitychange",X),()=>{window.removeEventListener("focus",X),document.removeEventListener("visibilitychange",X),Y.disconnect()}},[$,_,J])}function V4(){let[_,$]=x(!1),[J,Y]=x("default"),X=k(!1);g(()=>{let V=h0("notificationsEnabled",!1);if(X.current=V,$(V),typeof Notification<"u")Y(Notification.permission)},[]),g(()=>{X.current=_},[_]);let Z=P(()=>{if(typeof Notification>"u")return Promise.resolve("denied");try{let V=Notification.requestPermission();if(V&&typeof V.then==="function")return V;return Promise.resolve(V)}catch{return Promise.resolve("default")}},[]),j=P(async()=>{if(typeof window>"u"||typeof Notification>"u")return;if(!window.isSecureContext){alert("Notifications require a secure context (HTTPS or installed app).");return}if(Notification.permission==="denied"){Y("denied"),alert("Browser notifications are blocked. Enable them in your browser settings.");return}if(Notification.permission==="default"){let W=await Z();if(Y(W||"default"),W!=="granted"){X.current=!1,$(!1),A_("notificationsEnabled","false");return}}let V=!X.current;X.current=V,$(V),A_("notificationsEnabled",String(V))},[Z]),G=P((V,W)=>{if(!X.current)return!1;if(typeof Notification>"u")return!1;if(Notification.permission!=="granted")return!1;try{let Q=new Notification(V,{body:W});return Q.onclick=()=>{try{window.focus()}catch{}},!0}catch{return!1}},[]);return{notificationsEnabled:_,notificationPermission:J,toggleNotifications:j,notify:G}}var $2=(_)=>{let $=new Set;return(_||[]).filter((J)=>{if(!J||$.has(J.id))return!1;return $.add(J.id),!0})};function W4({preserveTimelineScroll:_,preserveTimelineScrollTop:$}){let[J,Y]=x(null),[X,Z]=x(!1),j=k(!1),G=k(null),V=k(!1),W=k(null);g(()=>{j.current=X},[X]);let Q=P(async(D=null)=>{try{if(D){let N=await s1(D);Y(N.posts),Z(!1)}else{let N=await U2(10);Y(N.posts),Z(N.has_more)}}catch(N){console.error("Failed to load posts:",N)}},[]),y=P(async()=>{try{let D=await U2(10);Y((N)=>{if(!N||N.length===0)return D.posts;return $2([...D.posts,...N])}),Z((N)=>N||D.has_more)}catch(D){console.error("Failed to refresh timeline:",D)}},[]),F=P(async(D={})=>{if(!J||J.length===0)return;if(V.current)return;let{preserveScroll:N=!0,preserveMode:z="top",allowRepeat:E=!1}=D,w=(R)=>{if(!N){R();return}if(z==="top")$(R);else _(R)},v=J.slice().sort((R,o)=>R.id-o.id)[0]?.id;if(!Number.isFinite(v))return;if(!E&&W.current===v)return;V.current=!0,W.current=v;try{let R=await U2(10,v);if(R.posts.length>0)w(()=>{Y((o)=>$2([...R.posts,...o||[]])),Z(R.has_more)});else Z(!1)}catch(R){console.error("Failed to load more posts:",R)}finally{V.current=!1}},[J,_,$]);return g(()=>{G.current=F},[F]),{posts:J,setPosts:Y,hasMore:X,setHasMore:Z,hasMoreRef:j,loadPosts:Q,refreshTimeline:y,loadMore:F,loadMoreRef:G,loadingMoreRef:V,lastBeforeIdRef:W}}function O4(){let[_,$]=x(null),[J,Y]=x({text:"",totalLines:0}),[X,Z]=x(""),[j,G]=x({text:"",totalLines:0}),[V,W]=x(null),[Q,y]=x(null),[F,D]=x(null),N=k(null),z=k(0),E=k(!1),w=k(""),M=k(""),v=k(null),R=k(null),o=k(null),__=k(null),s=k(!1),a=k(!1);return{agentStatus:_,setAgentStatus:$,agentDraft:J,setAgentDraft:Y,agentPlan:X,setAgentPlan:Z,agentThought:j,setAgentThought:G,pendingRequest:V,setPendingRequest:W,currentTurnId:Q,setCurrentTurnId:y,steerQueuedTurnId:F,setSteerQueuedTurnId:D,lastAgentEventRef:N,lastSilenceNoticeRef:z,isAgentRunningRef:E,draftBufferRef:w,thoughtBufferRef:M,pendingRequestRef:v,stalledPostIdRef:R,currentTurnIdRef:o,steerQueuedTurnIdRef:__,thoughtExpandedRef:s,draftExpandedRef:a}}function N4({appShellRef:_,sidebarWidthRef:$,editorWidthRef:J,dockHeightRef:Y}){let X=k((Q)=>{Q.preventDefault();let y=_.current;if(!y)return;let F=Q.clientX,D=$.current||280,N=Q.currentTarget;N.classList.add("dragging"),y.classList.add("sidebar-resizing"),document.body.style.cursor="col-resize",document.body.style.userSelect="none";let z=F,E=(M)=>{z=M.clientX;let v=Math.min(Math.max(D+(M.clientX-F),160),600);y.style.setProperty("--sidebar-width",`${v}px`),$.current=v},w=()=>{let M=Math.min(Math.max(D+(z-F),160),600);$.current=M,N.classList.remove("dragging"),y.classList.remove("sidebar-resizing"),document.body.style.cursor="",document.body.style.userSelect="",A_("sidebarWidth",String(Math.round(M))),document.removeEventListener("mousemove",E),document.removeEventListener("mouseup",w)};document.addEventListener("mousemove",E),document.addEventListener("mouseup",w)}).current,Z=k((Q)=>{Q.preventDefault();let y=_.current;if(!y)return;let F=Q.touches[0];if(!F)return;let D=F.clientX,N=$.current||280,z=Q.currentTarget;z.classList.add("dragging"),y.classList.add("sidebar-resizing"),document.body.style.userSelect="none";let E=(M)=>{let v=M.touches[0];if(!v)return;M.preventDefault();let R=Math.min(Math.max(N+(v.clientX-D),160),600);y.style.setProperty("--sidebar-width",`${R}px`),$.current=R},w=()=>{z.classList.remove("dragging"),y.classList.remove("sidebar-resizing"),document.body.style.userSelect="",A_("sidebarWidth",String(Math.round($.current||N))),document.removeEventListener("touchmove",E),document.removeEventListener("touchend",w),document.removeEventListener("touchcancel",w)};document.addEventListener("touchmove",E,{passive:!1}),document.addEventListener("touchend",w),document.addEventListener("touchcancel",w)}).current,j=k((Q)=>{Q.preventDefault();let y=_.current;if(!y)return;let F=Q.clientX,D=J.current||$.current||280,N=Q.currentTarget;N.classList.add("dragging"),document.body.style.cursor="col-resize",document.body.style.userSelect="none";let z=F,E=(M)=>{z=M.clientX;let v=Math.min(Math.max(D+(M.clientX-F),200),800);y.style.setProperty("--editor-width",`${v}px`),J.current=v},w=()=>{let M=Math.min(Math.max(D+(z-F),200),800);J.current=M,N.classList.remove("dragging"),document.body.style.cursor="",document.body.style.userSelect="",A_("editorWidth",String(Math.round(M))),document.removeEventListener("mousemove",E),document.removeEventListener("mouseup",w)};document.addEventListener("mousemove",E),document.addEventListener("mouseup",w)}).current,G=k((Q)=>{Q.preventDefault();let y=_.current;if(!y)return;let F=Q.touches[0];if(!F)return;let D=F.clientX,N=J.current||$.current||280,z=Q.currentTarget;z.classList.add("dragging"),document.body.style.userSelect="none";let E=(M)=>{let v=M.touches[0];if(!v)return;M.preventDefault();let R=Math.min(Math.max(N+(v.clientX-D),200),800);y.style.setProperty("--editor-width",`${R}px`),J.current=R},w=()=>{z.classList.remove("dragging"),document.body.style.userSelect="",A_("editorWidth",String(Math.round(J.current||N))),document.removeEventListener("touchmove",E),document.removeEventListener("touchend",w),document.removeEventListener("touchcancel",w)};document.addEventListener("touchmove",E,{passive:!1}),document.addEventListener("touchend",w),document.addEventListener("touchcancel",w)}).current,V=k((Q)=>{Q.preventDefault();let y=_.current;if(!y)return;let F=Q.clientY,D=Y?.current||200,N=Q.currentTarget;N.classList.add("dragging"),document.body.style.cursor="row-resize",document.body.style.userSelect="none";let z=F,E=(M)=>{z=M.clientY;let v=Math.min(Math.max(D-(M.clientY-F),100),window.innerHeight*0.5);if(y.style.setProperty("--dock-height",`${v}px`),Y)Y.current=v},w=()=>{let M=Math.min(Math.max(D-(z-F),100),window.innerHeight*0.5);if(Y)Y.current=M;N.classList.remove("dragging"),document.body.style.cursor="",document.body.style.userSelect="",A_("dockHeight",String(Math.round(M))),window.dispatchEvent(new CustomEvent("dock-resize")),document.removeEventListener("mousemove",E),document.removeEventListener("mouseup",w)};document.addEventListener("mousemove",E),document.addEventListener("mouseup",w)}).current,W=k((Q)=>{Q.preventDefault();let y=_.current;if(!y)return;let F=Q.touches[0];if(!F)return;let D=F.clientY,N=Y?.current||200,z=Q.currentTarget;z.classList.add("dragging"),document.body.style.userSelect="none";let E=(M)=>{let v=M.touches[0];if(!v)return;M.preventDefault();let R=Math.min(Math.max(N-(v.clientY-D),100),window.innerHeight*0.5);if(y.style.setProperty("--dock-height",`${R}px`),Y)Y.current=R},w=()=>{z.classList.remove("dragging"),document.body.style.userSelect="",A_("dockHeight",String(Math.round(Y?.current||N))),window.dispatchEvent(new CustomEvent("dock-resize")),document.removeEventListener("touchmove",E),document.removeEventListener("touchend",w),document.removeEventListener("touchcancel",w)};document.addEventListener("touchmove",E,{passive:!1}),document.addEventListener("touchend",w),document.addEventListener("touchcancel",w)}).current;return{handleSplitterMouseDown:X,handleSplitterTouchStart:Z,handleEditorSplitterMouseDown:j,handleEditorSplitterTouchStart:G,handleDockSplitterMouseDown:V,handleDockSplitterTouchStart:W}}function q4(){let[_,$]=x(()=>D_.getTabs()),[J,Y]=x(()=>D_.getActiveId()),[X,Z]=x(()=>D_.getTabs().length>0);g(()=>{return D_.onChange((N,z)=>{$(N),Y(z),Z(N.length>0)})},[]);let j=P((N)=>{if(!N)return;let z={path:N,mode:"edit"};try{if(!W0.resolve(z)){if(!W0.get("editor")){console.warn(`[openEditor] No pane handler for: ${N}`);return}}}catch(E){console.warn(`[openEditor] paneRegistry.resolve() error for "${N}":`,E)}D_.open(N)},[]),G=P(()=>{let N=D_.getActiveId();if(N){let z=D_.get(N);if(z?.dirty){if(!window.confirm(`"${z.label}" has unsaved changes. Close anyway?`))return}D_.close(N)}},[]),V=P((N)=>{let z=D_.get(N);if(z?.dirty){if(!window.confirm(`"${z.label}" has unsaved changes. Close anyway?`))return}D_.close(N)},[]),W=P((N)=>{D_.activate(N)},[]),Q=P((N)=>{D_.closeOthers(N)},[]),y=P(()=>{D_.closeAll()},[]),F=P((N)=>{D_.togglePin(N)},[]),D=P(()=>{let N=D_.getActiveId();if(N)window.dispatchEvent(new CustomEvent("workspace-reveal-path",{detail:{path:N}}))},[]);return g(()=>{let N=(z)=>{let{oldPath:E,newPath:w,type:M}=z.detail||{};if(!E||!w)return;if(M==="dir"){for(let v of D_.getTabs())if(v.path===E||v.path.startsWith(`${E}/`)){let R=`${w}${v.path.slice(E.length)}`;D_.rename(v.id,R)}}else D_.rename(E,w)};return window.addEventListener("workspace-file-renamed",N),()=>window.removeEventListener("workspace-file-renamed",N)},[]),g(()=>{let N=(z)=>{if(D_.hasUnsaved())z.preventDefault(),z.returnValue=""};return window.addEventListener("beforeunload",N),()=>window.removeEventListener("beforeunload",N)},[]),{editorOpen:X,tabStripTabs:_,tabStripActiveId:J,openEditor:j,closeEditor:G,handleTabClose:V,handleTabActivate:W,handleTabCloseOthers:Q,handleTabCloseAll:y,handleTabTogglePin:F,revealInExplorer:D}}function U1(_,$){try{if(typeof window>"u")return $;let J=window.__PICLAW_SILENCE||{},Y=`__PICLAW_SILENCE_${_.toUpperCase()}_MS`,X=J[_]??window[Y],Z=Number(X);return Number.isFinite(Z)?Z:$}catch{return $}}var z1=U1("warning",30000),B4=U1("finalize",120000),U4=U1("refresh",30000),z4=30000;function H4(_){let $={};return(_?.agents||[]).forEach((J)=>{$[J.id]=J}),$}function F4(){if(/iPad|iPhone/.test(navigator.userAgent))return!0;return navigator.platform==="MacIntel"&&navigator.maxTouchPoints>1}function L4(_=30000){let[,$]=x(0);g(()=>{let J=setInterval(()=>$((Y)=>Y+1),_);return()=>clearInterval(J)},[_])}function I2(_,$=160){let J=String(_||"").replace(/\r\n/g,`
`);if(!J)return 0;return J.split(`
`).reduce((Y,X)=>Y+Math.max(1,Math.ceil(X.length/$)),0)}function k4(_,$){if(typeof window<"u")console.warn(`[app] API export missing: ${_}. Using fallback behavior.`);return async()=>$}var C8=a1,E4=t1,y8=e1,D4=Y3,C4=Z3,y4=_3,H1=typeof s2==="function"?s2:k4("getAgentContext",null),k8=typeof a0==="function"?a0:k4("getAgentModels",{current:null,models:[]});if(window.marked)marked.setOptions({breaks:!0,gfm:!0});W0.register(N1);q1();var w8=typeof localStorage<"u"&&localStorage.getItem("experimentalPanes")==="true";if(w8)W0.register(B1);function A8(){let[_,$]=x("disconnected"),[J,Y]=x(null),[X,Z]=x(null),[j,G]=x(!1),[V,W]=x([]),[Q,y]=x([]),{agentStatus:F,setAgentStatus:D,agentDraft:N,setAgentDraft:z,agentPlan:E,setAgentPlan:w,agentThought:M,setAgentThought:v,pendingRequest:R,setPendingRequest:o,currentTurnId:__,setCurrentTurnId:s,steerQueuedTurnId:a,setSteerQueuedTurnId:j_,lastAgentEventRef:h,lastSilenceNoticeRef:e,isAgentRunningRef:H_,draftBufferRef:J_,thoughtBufferRef:Q_,pendingRequestRef:W_,stalledPostIdRef:F_,currentTurnIdRef:Z_,steerQueuedTurnIdRef:r,thoughtExpandedRef:G_,draftExpandedRef:t}=O4(),[K_,N_]=x({}),[M_,B_]=x(null),[y_,x_]=x(null),[U_,P_]=x(!1),[z_,E_]=x(null),{notificationsEnabled:p_,notificationPermission:O0,toggleNotifications:b_,notify:k_}=V4(),[e_,U0]=x(()=>new Set),[h_,a_]=x(()=>h0("workspaceOpen",!0)),{editorOpen:f_,tabStripTabs:L_,tabStripActiveId:b,openEditor:d,closeEditor:u_,handleTabClose:D0,handleTabActivate:Z0,handleTabCloseOthers:b0,handleTabCloseAll:X0,handleTabTogglePin:z0,revealInExplorer:_0}=q4(),Q0=k(null),m_=k(null);g(()=>{let O=Q0.current;if(!O)return;if(m_.current)m_.current.dispose(),m_.current=null;let q=b;if(!q)return;let A={path:q,mode:"edit"},f=W0.resolve(A)||W0.get("editor");if(!f)return;let m=f.mount(O,A);m_.current=m,m.onDirtyChange?.((p)=>{D_.setDirty(q,p)}),m.onSaveRequest?.(()=>{}),m.onClose?.(()=>{u_()});let S=D_.getViewState(q);if(S&&typeof m.restoreViewState==="function")requestAnimationFrame(()=>m.restoreViewState(S));if(typeof m.onViewStateChange==="function")m.onViewStateChange((p)=>{D_.saveViewState(q,p)});return requestAnimationFrame(()=>m.focus()),()=>{if(m_.current===m)m.dispose(),m_.current=null}},[b,u_]);let[i_,v_]=x({name:"You",avatar_url:null,avatar_background:null}),C0=k(!1),$0=k(!1),H0=k({}),R0=k({name:null,avatar_url:null}),g_=k({currentHashtag:null,searchQuery:null}),J0=k(null),l_=k(null),N0=k(0),q0=k(0),P0=k(0),y0=k(null),F0=k(null),I_=k(null),K0=k(0),Y0=k({title:null,avatarBase:null});L4(30000),g(()=>{return E3()},[]),g(()=>{A_("workspaceOpen",String(h_))},[h_]),g(()=>{H0.current=K_||{}},[K_]),g(()=>{R0.current=i_||{name:"You",avatar_url:null,avatar_background:null}},[i_]);let S_=P((O,q,A=null)=>{if(typeof document>"u")return;let f=(O||"").trim()||"PiClaw";if(Y0.current.title!==f){document.title=f;let C_=document.querySelector('meta[name="apple-mobile-web-app-title"]');if(C_&&C_.getAttribute("content")!==f)C_.setAttribute("content",f);Y0.current.title=f}let m=document.getElementById("dynamic-favicon");if(!m)return;let S=m.getAttribute("data-default")||m.getAttribute("href")||"/favicon.ico",p=q||S,V_=q?`${p}|${A||""}`:p;if(Y0.current.avatarBase!==V_){let C_=q?`${p}${p.includes("?")?"&":"?"}v=${A||Date.now()}`:p;m.setAttribute("href",C_),Y0.current.avatarBase=V_}},[]),o_=P((O)=>{if(!O)return;W((q)=>q.includes(O)?q:[...q,O])},[]),j0=P((O)=>{W((q)=>q.filter((A)=>A!==O))},[]),k0=P(()=>{W([])},[]),I0=P((O)=>{if(!O)return;y((q)=>q.includes(O)?q:[...q,O])},[]),H=P((O)=>{y((q)=>q.filter((A)=>A!==O))},[]),I=P(()=>{y([])},[]),u=P((O={})=>{let q=Date.now();if(h.current=q,O.running)H_.current=!0;if(O.clearSilence)e.current=0},[]),$_=P(()=>{if(I_.current)clearTimeout(I_.current),I_.current=null;K0.current=0},[]);g(()=>()=>{$_()},[$_]);let q_=P(()=>{$_(),D((O)=>{if(!O)return O;if(!(O.last_activity||O.lastActivity))return O;let{last_activity:q,lastActivity:A,...f}=O;return f})},[$_]),T_=P((O)=>{if(!O)return;$_();let q=Date.now();K0.current=q,D({type:O.type||"active",last_activity:!0}),I_.current=setTimeout(()=>{if(K0.current!==q)return;D((A)=>{if(!A||!(A.last_activity||A.lastActivity))return A;return null})},z4)},[$_]),O_=P(()=>{H_.current=!1,h.current=null,e.current=0,J_.current="",Q_.current="",W_.current=null,F0.current=null,Z_.current=null,r.current=null,$_(),s(null),j_(null),G_.current=!1,t.current=!1},[$_,s,j_]),w_=P((O)=>{if(!O)return;if(Z_.current===O)return;Z_.current=O,s(O),r.current=null,j_(null),J_.current="",Q_.current="",z({text:"",totalLines:0}),w(""),v({text:"",totalLines:0}),o(null),W_.current=null,F0.current=null,G_.current=!1,t.current=!1},[s,j_]),r_=P((O)=>{if(typeof document<"u"){let C_=typeof document.hasFocus==="function"?document.hasFocus():!0;if(!document.hidden&&C_)return}let q=F0.current;if(!q||!q.post)return;if(O&&q.turnId&&q.turnId!==O)return;let A=q.post;if(A.id&&y0.current===A.id)return;let f=String(A?.data?.content||"").trim();if(!f)return;y0.current=A.id||y0.current,F0.current=null;let m=f.replace(/\s+/g," ").slice(0,200),S=H0.current||{},V_=(A?.data?.agent_id?S[A.data.agent_id]:null)?.name||"Pi";k_(V_,m)},[k_]),w0=P(async(O,q)=>{if(O!=="thought"&&O!=="draft")return;let A=Z_.current;if(O==="thought"){if(G_.current=q,A)try{await C4(A,"thought",q)}catch(f){console.warn("Failed to update thought visibility:",f)}if(!q)return;try{let f=A?await D4(A,"thought"):null;if(f?.text)Q_.current=f.text;v((m)=>({...m||{text:"",totalLines:0},fullText:Q_.current||m?.fullText||"",totalLines:Number.isFinite(f?.total_lines)?f.total_lines:m?.totalLines||0}))}catch(f){console.warn("Failed to fetch full thought:",f)}return}if(t.current=q,A)try{await C4(A,"draft",q)}catch(f){console.warn("Failed to update draft visibility:",f)}if(!q)return;try{let f=A?await D4(A,"draft"):null;if(f?.text)J_.current=f.text;z((m)=>({...m||{text:"",totalLines:0},fullText:J_.current||m?.fullText||"",totalLines:Number.isFinite(f?.total_lines)?f.total_lines:m?.totalLines||0}))}catch(f){console.warn("Failed to fetch full draft:",f)}},[]),R_=k(null),c_=P(()=>{if(J0.current)J0.current.scrollTop=0},[]);R_.current=c_;let n0=P((O)=>{let q=J0.current;if(!q||typeof O!=="function"){O?.();return}let{currentHashtag:A,searchQuery:f}=g_.current||{},m=!(f&&!A),S=m?q.scrollHeight-q.scrollTop:q.scrollTop;O(),requestAnimationFrame(()=>{let p=J0.current;if(!p)return;if(m){let V_=Math.max(p.scrollHeight-S,0);p.scrollTop=V_}else{let V_=Math.max(p.scrollHeight-p.clientHeight,0),C_=Math.min(S,V_);p.scrollTop=C_}})},[]),n_=P((O)=>{let q=J0.current;if(!q||typeof O!=="function"){O?.();return}let A=q.scrollTop;O(),requestAnimationFrame(()=>{let f=J0.current;if(!f)return;let m=Math.max(f.scrollHeight-f.clientHeight,0);f.scrollTop=Math.min(A,m)})},[]),{posts:L0,setPosts:s_,hasMore:J2,setHasMore:S2,hasMoreRef:Y2,loadPosts:t_,refreshTimeline:E0,loadMore:T2,loadMoreRef:S0}=W4({preserveTimelineScroll:n0,preserveTimelineScrollTop:n_}),T0=P(()=>{let O=F_.current;if(!O)return;s_((q)=>q?q.filter((A)=>A.id!==O):q),F_.current=null},[s_]),{handleSplitterMouseDown:x2,handleSplitterTouchStart:f2,handleEditorSplitterMouseDown:Z2,handleEditorSplitterTouchStart:v2,handleDockSplitterMouseDown:R2,handleDockSplitterTouchStart:u2}=N4({appShellRef:l_,sidebarWidthRef:N0,editorWidthRef:q0,dockHeightRef:P0}),u0=P(()=>{if(!H_.current)return;H_.current=!1,e.current=0,h.current=null,Z_.current=null,s(null),G_.current=!1,t.current=!1;let O=(J_.current||"").trim();if(J_.current="",Q_.current="",z({text:"",totalLines:0}),w(""),v({text:"",totalLines:0}),o(null),W_.current=null,F0.current=null,!O){D({type:"error",title:"Response stalled — No content received"});return}let A=`${O}${`

⚠️ Response may be incomplete — the model stopped responding`}`,f=Date.now(),m=new Date().toISOString(),S={id:f,timestamp:m,data:{type:"agent_response",content:A,agent_id:"default",is_local_stall:!0}};F_.current=f,s_((p)=>p?$2([...p,S]):[S]),R_.current?.(),D(null)},[s]);g(()=>{g_.current={currentHashtag:J,searchQuery:X}},[J,X]),g(()=>{let O=Math.min(1000,Math.max(100,Math.floor(z1/2))),q=setInterval(()=>{if(!H_.current)return;if(W_.current)return;let A=h.current;if(!A)return;let f=Date.now(),m=f-A;if(m>=B4){u0();return}if(m>=z1){if(f-e.current>=U4){let S=Math.floor(m/1000);D({type:"waiting",title:`Waiting for model… No events for ${S}s`}),e.current=f}}},O);return()=>clearInterval(q)},[u0]);let d0=P(async()=>{try{let O=await H1();if(O)E_(O)}catch(O){console.warn("Failed to fetch agent context:",O)}},[]),B0=P(async()=>{try{let O=await y4("web:default");if(!O||O.status!=="active"||!O.data){if($0.current){let{currentHashtag:f,searchQuery:m}=g_.current||{};if(!f&&!m)E0()}$0.current=!1,O_(),D(null),z({text:"",totalLines:0}),w(""),v({text:"",totalLines:0}),o(null),W_.current=null;return}$0.current=!0;let q=O.data,A=q.turn_id||q.turnId;if(A)w_(A);if(u({running:!0,clearSilence:!0}),q_(),D(q),O.thought&&O.thought.text)v((f)=>{if(f&&f.text&&f.text.length>=O.thought.text.length)return f;return Q_.current=O.thought.text,{text:O.thought.text,totalLines:O.thought.totalLines||0}});if(O.draft&&O.draft.text)z((f)=>{if(f&&f.text&&f.text.length>=O.draft.text.length)return f;return J_.current=O.draft.text,{text:O.draft.text,totalLines:O.draft.totalLines||0}})}catch(O){console.warn("Failed to fetch agent status:",O)}},[O_,q_,u,E0,w_]),m2=P((O)=>{if($(O),O!=="connected"){D(null),z({text:"",totalLines:0}),w(""),v({text:"",totalLines:0}),o(null),W_.current=null,O_();return}if(!C0.current){C0.current=!0,B0();return}let{currentHashtag:q,searchQuery:A}=g_.current;if(!q&&!A)E0();B0()},[O_,E0,B0]),g2=P(async(O)=>{Y(O),s_(null),await t_(O)},[t_]),c2=P(async()=>{Y(null),Z(null),s_(null),await t_()},[t_]),m0=P(async(O)=>{if(!O||!O.trim())return;Z(O.trim()),Y(null),s_(null);try{let q=await C8(O.trim());s_(q.results),S2(!1)}catch(q){console.error("Failed to search:",q),s_([])}},[]),p2=P(()=>{G(!0),Z(null),Y(null),s_([])},[]),h2=P(()=>{G(!1),Z(null),t_()},[t_]),F1=P(()=>{},[]),i2=P(async(O)=>{if(!O)return;let q=O.id,A=L0?.filter((m)=>m?.data?.thread_id===q&&m?.id!==q).length||0;if(A>0){if(!window.confirm(`Delete this message and its ${A} replies?`))return}let f=(m)=>{if(!m.length)return;U0((p)=>{let V_=new Set(p);return m.forEach((C_)=>V_.add(C_)),V_}),setTimeout(()=>{if(n_(()=>{s_((p)=>p?p.filter((V_)=>!m.includes(V_.id)):p)}),U0((p)=>{let V_=new Set(p);return m.forEach((C_)=>V_.delete(C_)),V_}),Y2.current)S0.current?.({preserveScroll:!0,preserveMode:"top"})},180)};try{let m=await E4(q,A>0);if(m?.ids?.length)f(m.ids)}catch(m){let S=m?.message||"";if(A===0&&S.includes("Replies exist")){if(!window.confirm("Delete this message and its replies?"))return;let V_=await E4(q,!0);if(V_?.ids?.length)f(V_.ids);return}console.error("Failed to delete post:",m),alert(`Failed to delete message: ${S}`)}},[L0,n_]),X2=P(async()=>{try{let O=await y8();N_(H4(O));let q=O?.user||{};v_((f)=>{let m=typeof q.name==="string"&&q.name.trim()?q.name.trim():"You",S=typeof q.avatar_url==="string"?q.avatar_url.trim():null,p=typeof q.avatar_background==="string"&&q.avatar_background.trim()?q.avatar_background.trim():null;if(f.name===m&&f.avatar_url===S&&f.avatar_background===p)return f;return{name:m,avatar_url:S,avatar_background:p}});let A=(O?.agents||[]).find((f)=>f.id==="default");if(A?.model)B_(A.model);S_(A?.name,A?.avatar_url)}catch(O){console.warn("Failed to load agents:",O)}try{let O=await H1();if(O)E_(O)}catch{}},[S_]);g(()=>{X2();let O=i0("sidebarWidth",null),q=Number.isFinite(O)?Math.min(Math.max(O,160),600):280;if(N0.current=q,l_.current)l_.current.style.setProperty("--sidebar-width",`${q}px`)},[X2]);let Q2=P((O)=>{if(!O||typeof O!=="object")return;let q=O.agent_id;if(!q)return;let{agent_name:A,agent_avatar:f}=O;if(!A&&f===void 0)return;let m=H0.current?.[q]||{id:q},S=m.name||null,p=m.avatar_url??m.avatarUrl??m.avatar??null,V_=!1,C_=!1;if(A&&A!==m.name)S=A,C_=!0;if(f!==void 0){let g0=typeof f==="string"?f.trim():null,L1=typeof p==="string"?p.trim():null,c0=g0||null;if(c0!==(L1||null))p=c0,V_=!0}if(!C_&&!V_)return;if(N_((g0)=>{let c0={...g0[q]||{id:q}};if(C_)c0.name=S;if(V_)c0.avatar_url=p;return{...g0,[q]:c0}}),q==="default")S_(S,p,V_?Date.now():null)},[S_]),K=P((O)=>{if(!O||typeof O!=="object")return;let q=O.user_name??O.userName,A=O.user_avatar??O.userAvatar,f=O.user_avatar_background??O.userAvatarBackground;if(q===void 0&&A===void 0&&f===void 0)return;v_((m)=>{let S=typeof q==="string"&&q.trim()?q.trim():m.name||"You",p=A===void 0?m.avatar_url:typeof A==="string"&&A.trim()?A.trim():null,V_=f===void 0?m.avatar_background:typeof f==="string"&&f.trim()?f.trim():null;if(m.name===S&&m.avatar_url===p&&m.avatar_background===V_)return m;return{name:S,avatar_url:p,avatar_background:V_}})},[]),B=P((O)=>{if(!O||typeof O!=="object")return;let q=O.model??O.current;if(q!==void 0)B_(q);if(O.thinking_level!==void 0)x_(O.thinking_level??null);if(O.supports_thinking!==void 0)P_(Boolean(O.supports_thinking))},[]),C=P(()=>{k8().then((O)=>{if(O)B(O)}).catch(()=>{})},[B]),L=P((O,q)=>{let A=q?.turn_id;if(Q2(q),K(q),O==="ui_theme"){D3(q);return}if(O?.startsWith("agent_"))q_();if(O==="connected"){D(null),z({text:"",totalLines:0}),w(""),v({text:"",totalLines:0}),o(null),W_.current=null,O_(),y4("web:default").then((S)=>{if(!S||S.status!=="active"||!S.data)return;let p=S.data,V_=p.turn_id||p.turnId;if(V_)w_(V_);if(u({clearSilence:!0}),T_(p),S.thought&&S.thought.text)Q_.current=S.thought.text,v({text:S.thought.text,totalLines:S.thought.totalLines||0});if(S.draft&&S.draft.text)J_.current=S.draft.text,z({text:S.draft.text,totalLines:S.draft.totalLines||0})}).catch((S)=>{console.warn("Failed to fetch agent status:",S)}),C();return}if(O==="agent_status"){if(q.type==="done"||q.type==="error"){if(A&&Z_.current&&A!==Z_.current)return;if(q.type==="done"){r_(A||Z_.current);let{currentHashtag:S,searchQuery:p}=g_.current||{};if(!S&&!p)E0();if(q.context_usage)E_(q.context_usage)}if($0.current=!1,O_(),z({text:"",totalLines:0}),w(""),v({text:"",totalLines:0}),o(null),q.type==="error")D({type:"error",title:q.title||"Agent error"}),setTimeout(()=>D(null),8000);else D(null)}else{if(A)w_(A);if(u({running:!0,clearSilence:!0}),q.type==="thinking")J_.current="",Q_.current="",z({text:"",totalLines:0}),w(""),v({text:"",totalLines:0});D(q)}return}if(O==="agent_steer_queued"){if(A&&Z_.current&&A!==Z_.current)return;let S=A||Z_.current;if(!S)return;r.current=S,j_(S);return}if(O==="agent_draft_delta"){if(A&&Z_.current&&A!==Z_.current)return;if(A&&!Z_.current)w_(A);if(u({running:!0,clearSilence:!0}),q?.reset)J_.current="";if(q?.delta)J_.current+=q.delta;if(t.current){let S=J_.current;z((p)=>({text:p?.text||"",totalLines:I2(S),fullText:S}))}else{let S=J_.current,p=I2(S);z({text:S,totalLines:p})}return}if(O==="agent_draft"){if(A&&Z_.current&&A!==Z_.current)return;if(A&&!Z_.current)w_(A);u({running:!0,clearSilence:!0});let S=q.text||"",p=q.mode||(q.kind==="plan"?"replace":"append"),V_=Number.isFinite(q.total_lines)?q.total_lines:S?S.replace(/\r\n/g,`
`).split(`
`).length:0;if(q.kind==="plan")if(p==="replace")w(S);else w((C_)=>(C_||"")+S);else if(!t.current)J_.current=S,z({text:S,totalLines:V_});return}if(O==="agent_thought_delta"){if(A&&Z_.current&&A!==Z_.current)return;if(A&&!Z_.current)w_(A);if(u({running:!0,clearSilence:!0}),q?.reset)Q_.current="";if(typeof q?.delta==="string")Q_.current+=q.delta;if(G_.current){let S=Q_.current;v((p)=>({text:p?.text||"",totalLines:I2(S),fullText:S}))}return}if(O==="agent_thought"){if(A&&Z_.current&&A!==Z_.current)return;if(A&&!Z_.current)w_(A);u({running:!0,clearSilence:!0});let S=q.text||"",p=Number.isFinite(q.total_lines)?q.total_lines:S?S.replace(/\r\n/g,`
`).split(`
`).length:0;if(!G_.current)Q_.current=S,v({text:S,totalLines:p});return}if(O==="agent_request"){if(console.log("Agent request:",q),A&&Z_.current&&A!==Z_.current)return;if(A)w_(A);u({running:!0,clearSilence:!0}),o(q),W_.current=q;return}if(O==="agent_request_timeout"){if(console.log("Agent request timeout:",q),A&&Z_.current&&A!==Z_.current)return;o(null),W_.current=null,O_(),D({type:"error",title:"Permission request timed out"});return}if(O==="model_changed"){if(q?.model!==void 0)B_(q.model);if(q?.thinking_level!==void 0)x_(q.thinking_level??null);if(q?.supports_thinking!==void 0)P_(Boolean(q.supports_thinking));H1().then((S)=>{if(S)E_(S)}).catch(()=>{});return}if(O==="workspace_update"){if(typeof window<"u")window.dispatchEvent(new CustomEvent("workspace-update",{detail:q}));return}let{currentHashtag:f,searchQuery:m}=g_.current;if(O==="agent_response")T0(),F0.current={post:q,turnId:Z_.current};if(!f&&!m&&(O==="new_post"||O==="agent_response"))s_((S)=>{if(!S)return[q];if(S.some((p)=>p.id===q.id))return S;return[...S,q]}),R_.current?.();if(O==="interaction_updated")s_((S)=>S?S.map((p)=>p.id===q.id?q:p):S);if(O==="interaction_deleted"){let S=q?.ids||[];if(S.length){n_(()=>{s_((C_)=>C_?C_.filter((g0)=>!S.includes(g0.id)):C_)});let{currentHashtag:p,searchQuery:V_}=g_.current;if(Y2.current&&!p&&!V_)S0.current?.({preserveScroll:!0,preserveMode:"top"})}}},[O_,q_,u,r_,n_,E0,T0,w_,T_,Q2,K,C]);g(()=>{if(typeof window>"u")return;let O=window.__PICLAW_TEST_API||{};return O.emit=L,O.reset=()=>{T0(),O_(),D(null),z({text:"",totalLines:0}),w(""),v({text:"",totalLines:0}),o(null)},O.finalize=()=>u0(),window.__PICLAW_TEST_API=O,()=>{if(window.__PICLAW_TEST_API===O)window.__PICLAW_TEST_API=void 0}},[O_,u0,L,T0]),G4({handleSseEvent:L,handleConnectionStatusChange:m2,loadPosts:t_}),g(()=>{if(!L0||L0.length===0)return;let O=location.hash;if(!O||!O.startsWith("#msg-"))return;let q=document.getElementById(O.slice(1).replace("msg-","post-"));if(q)q.scrollIntoView({behavior:"smooth",block:"center"}),q.classList.add("post-highlight"),setTimeout(()=>q.classList.remove("post-highlight"),2000),history.replaceState(null,"",location.pathname+location.search)},[L0]);let T=F!==null;g(()=>{if(_!=="connected")return;let q=setInterval(()=>{if(T)B0(),d0();else{let{currentHashtag:A,searchQuery:f}=g_.current||{};if(!A&&!f)E0();B0(),d0()}},T?15000:60000);return()=>clearInterval(q)},[_,T,B0,d0,E0]);let c=P(()=>{a_((O)=>!O)},[]);g(()=>{if(!f_)return;if(typeof window>"u")return;let O=l_.current;if(!O)return;if(!q0.current){let q=i0("editorWidth",null),A=N0.current||280;q0.current=Number.isFinite(q)?q:A}if(O.style.setProperty("--editor-width",`${q0.current}px`),!P0.current){let q=i0("dockHeight",null);P0.current=Number.isFinite(q)?q:200}O.style.setProperty("--dock-height",`${P0.current}px`)},[f_]);let l=W0.getDockPanes().length>0,[n,i]=x(!1),Y_=P(()=>i((O)=>!O),[]);g(()=>{if(!l)return;let O=(q)=>{if(q.ctrlKey&&q.key==="`")q.preventDefault(),Y_()};return document.addEventListener("keydown",O),()=>document.removeEventListener("keydown",O)},[Y_,l]);let G0=Boolean(a&&a===(F?.turn_id||__));return U`
        <div class=${`app-shell${h_?"":" workspace-collapsed"}${f_?" editor-open":""}`} ref=${l_}>
            <${J4}
                onFileSelect=${o_}
                visible=${h_}
                active=${h_||f_}
                onOpenEditor=${d}
            />
            <button
                class=${`workspace-toggle-tab${h_?" open":" closed"}`}
                onClick=${c}
                title=${h_?"Hide workspace":"Show workspace"}
                aria-label=${h_?"Hide workspace":"Show workspace"}
            >
                <svg class="workspace-toggle-tab-icon" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                    <polyline points="6 3 11 8 6 13" />
                </svg>
            </button>
            <div class="workspace-splitter" onMouseDown=${x2} onTouchStart=${f2}></div>
            ${f_&&U`
                <div class="editor-pane-container">
                    <${Y4}
                        tabs=${L_}
                        activeId=${b}
                        onActivate=${Z0}
                        onClose=${D0}
                        onCloseOthers=${b0}
                        onCloseAll=${X0}
                        onTogglePin=${z0}
                        onToggleDock=${l?Y_:void 0}
                        dockVisible=${l&&n}
                    />
                    <div class="editor-pane-host" ref=${Q0}></div>
                    ${l&&n&&U`<div class="dock-splitter" onMouseDown=${R2} onTouchStart=${u2}></div>`}
                    ${l&&U`<div class=${`dock-panel${n?"":" hidden"}`}>
                        <div class="dock-panel-header">
                            <span class="dock-panel-title">Terminal</span>
                            <button class="dock-panel-close" onClick=${Y_} title="Hide terminal (Ctrl+\`)" aria-label="Hide terminal">
                                <svg viewBox="0 0 16 16" width="14" height="14" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round">
                                    <line x1="4" y1="12" x2="12" y2="4"/>
                                    <polyline points="4 4 12 4 12 12"/>
                                </svg>
                            </button>
                        </div>
                        <div class="dock-panel-body">
                            <div class="terminal-placeholder">Terminal integration pending — xterm.js + WebSocket</div>
                        </div>
                    </div>`}
                </div>
                <div class="editor-splitter" onMouseDown=${Z2} onTouchStart=${v2}></div>
            `}
            <div class="container">
                ${X&&F4()&&U`<div class="search-results-spacer"></div>`}
                ${(J||X)&&U`
                    <div class="hashtag-header">
                        <button class="back-btn" onClick=${c2}>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
                        </button>
                        <span>${J?`#${J}`:`Search: ${X}`}</span>
                    </div>
                `}
                <${h3} 
                    posts=${L0}
                    hasMore=${J2}
                    onLoadMore=${T2}
                    timelineRef=${J0}
                    onHashtagClick=${g2}
                    onMessageRef=${I0}
                    onPostClick=${void 0}
                    onDeletePost=${i2}
                    emptyMessage=${J?`No posts with #${J}`:X?`No results for "${X}"`:void 0}
                    agents=${K_}
                    user=${i_}
                    reverse=${!(X&&!J)}
                    removingPostIds=${e_}
                    searchQuery=${X}
                />
                <${R3}
                    status=${F}
                    draft=${N}
                    plan=${E}
                    thought=${M}
                    pendingRequest=${R}
                    turnId=${__}
                    steerQueued=${G0}
                    onPanelToggle=${w0}
                />
                <${q3} 
                    onPost=${()=>{t_(),c_()}}
                    onFocus=${c_}
                    searchMode=${j}
                    onSearch=${m0}
                    onEnterSearch=${p2}
                    onExitSearch=${h2}
                    fileRefs=${V}
                    onRemoveFileRef=${j0}
                    onClearFileRefs=${k0}
                    messageRefs=${Q}
                    onRemoveMessageRef=${H}
                    onClearMessageRefs=${I}
                    activeModel=${M_}
                    thinkingLevel=${y_}
                    supportsThinking=${U_}
                    contextUsage=${z_}
                    notificationsEnabled=${p_}
                    notificationPermission=${O0}
                    onToggleNotifications=${b_}
                    onModelChange=${B_}
                    onModelStateChange=${B}
                />
                <${m3} status=${_} />
                <${u3}
                    request=${R}
                    onRespond=${()=>{o(null),W_.current=null}}
                />
            </div>
        </div>
    `}o1(U`<${A8} />`,document.getElementById("app"));

//# debugId=BDA85E55582BF71864756E2164756E21
//# sourceMappingURL=app.bundle.js.map
