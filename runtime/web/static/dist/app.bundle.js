var XZ=Object.defineProperty;var VZ=(_)=>_;function BZ(_,$){this[_]=VZ.bind(null,$)}var WZ=(_,$)=>{for(var j in $)XZ(_,j,{get:$[j],enumerable:!0,configurable:!0,set:BZ.bind($,j)})};var Q5,X1,b3,LZ,C4,k3,u3,m3,g3,B8,Q8,q8,h3,N5={},Y5=[],UZ=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,q5=Array.isArray;function B4(_,$){for(var j in $)_[j]=$[j];return _}function W8(_){_&&_.parentNode&&_.parentNode.removeChild(_)}function G5(_,$,j){var Z,N,Y,K={};for(Y in $)Y=="key"?Z=$[Y]:Y=="ref"?N=$[Y]:K[Y]=$[Y];if(arguments.length>2&&(K.children=arguments.length>3?Q5.call(arguments,2):j),typeof _=="function"&&_.defaultProps!=null)for(Y in _.defaultProps)K[Y]===void 0&&(K[Y]=_.defaultProps[Y]);return j5(_,K,Z,N,null)}function j5(_,$,j,Z,N){var Y={type:_,props:$,key:j,ref:Z,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:N==null?++b3:N,__i:-1,__u:0};return N==null&&X1.vnode!=null&&X1.vnode(Y),Y}function X5(_){return _.children}function N$(_,$){this.props=_,this.context=$}function Y$(_,$){if($==null)return _.__?Y$(_.__,_.__i+1):null;for(var j;$<_.__k.length;$++)if((j=_.__k[$])!=null&&j.__e!=null)return j.__e;return typeof _.type=="function"?Y$(_):null}function zZ(_){if(_.__P&&_.__d){var $=_.__v,j=$.__e,Z=[],N=[],Y=B4({},$);Y.__v=$.__v+1,X1.vnode&&X1.vnode(Y),L8(_.__P,Y,$,_.__n,_.__P.namespaceURI,32&$.__u?[j]:null,Z,j==null?Y$($):j,!!(32&$.__u),N),Y.__v=$.__v,Y.__.__k[Y.__i]=Y,i3(Z,Y,N),$.__e=$.__=null,Y.__e!=j&&p3(Y)}}function p3(_){if((_=_.__)!=null&&_.__c!=null)return _.__e=_.__c.base=null,_.__k.some(function($){if($!=null&&$.__e!=null)return _.__e=_.__c.base=$.__e}),p3(_)}function G8(_){(!_.__d&&(_.__d=!0)&&C4.push(_)&&!K5.__r++||k3!=X1.debounceRendering)&&((k3=X1.debounceRendering)||u3)(K5)}function K5(){try{for(var _,$=1;C4.length;)C4.length>$&&C4.sort(m3),_=C4.shift(),$=C4.length,zZ(_)}finally{C4.length=K5.__r=0}}function c3(_,$,j,Z,N,Y,K,Q,X,G,W){var B,U,D,k,T,E,J,A=Z&&Z.__k||Y5,P=$.length;for(X=FZ(j,$,A,X,P),B=0;B<P;B++)(D=j.__k[B])!=null&&(U=D.__i!=-1&&A[D.__i]||N5,D.__i=B,E=L8(_,D,U,N,Y,K,Q,X,G,W),k=D.__e,D.ref&&U.ref!=D.ref&&(U.ref&&U8(U.ref,null,D),W.push(D.ref,D.__c||k,D)),T==null&&k!=null&&(T=k),(J=!!(4&D.__u))||U.__k===D.__k?X=l3(D,X,_,J):typeof D.type=="function"&&E!==void 0?X=E:k&&(X=k.nextSibling),D.__u&=-7);return j.__e=T,X}function FZ(_,$,j,Z,N){var Y,K,Q,X,G,W=j.length,B=W,U=0;for(_.__k=Array(N),Y=0;Y<N;Y++)(K=$[Y])!=null&&typeof K!="boolean"&&typeof K!="function"?(typeof K=="string"||typeof K=="number"||typeof K=="bigint"||K.constructor==String?K=_.__k[Y]=j5(null,K,null,null,null):q5(K)?K=_.__k[Y]=j5(X5,{children:K},null,null,null):K.constructor===void 0&&K.__b>0?K=_.__k[Y]=j5(K.type,K.props,K.key,K.ref?K.ref:null,K.__v):_.__k[Y]=K,X=Y+U,K.__=_,K.__b=_.__b+1,Q=null,(G=K.__i=HZ(K,j,X,B))!=-1&&(B--,(Q=j[G])&&(Q.__u|=2)),Q==null||Q.__v==null?(G==-1&&(N>W?U--:N<W&&U++),typeof K.type!="function"&&(K.__u|=4)):G!=X&&(G==X-1?U--:G==X+1?U++:(G>X?U--:U++,K.__u|=4))):_.__k[Y]=null;if(B)for(Y=0;Y<W;Y++)(Q=j[Y])!=null&&(2&Q.__u)==0&&(Q.__e==Z&&(Z=Y$(Q)),d3(Q,Q));return Z}function l3(_,$,j,Z){var N,Y;if(typeof _.type=="function"){for(N=_.__k,Y=0;N&&Y<N.length;Y++)N[Y]&&(N[Y].__=_,$=l3(N[Y],$,j,Z));return $}_.__e!=$&&(Z&&($&&_.type&&!$.parentNode&&($=Y$(_)),j.insertBefore(_.__e,$||null)),$=_.__e);do $=$&&$.nextSibling;while($!=null&&$.nodeType==8);return $}function HZ(_,$,j,Z){var N,Y,K,Q=_.key,X=_.type,G=$[j],W=G!=null&&(2&G.__u)==0;if(G===null&&Q==null||W&&Q==G.key&&X==G.type)return j;if(Z>(W?1:0)){for(N=j-1,Y=j+1;N>=0||Y<$.length;)if((G=$[K=N>=0?N--:Y++])!=null&&(2&G.__u)==0&&Q==G.key&&X==G.type)return K}return-1}function I3(_,$,j){$[0]=="-"?_.setProperty($,j==null?"":j):_[$]=j==null?"":typeof j!="number"||UZ.test($)?j:j+"px"}function $5(_,$,j,Z,N){var Y,K;_:if($=="style")if(typeof j=="string")_.style.cssText=j;else{if(typeof Z=="string"&&(_.style.cssText=Z=""),Z)for($ in Z)j&&$ in j||I3(_.style,$,"");if(j)for($ in j)Z&&j[$]==Z[$]||I3(_.style,$,j[$])}else if($[0]=="o"&&$[1]=="n")Y=$!=($=$.replace(g3,"$1")),K=$.toLowerCase(),$=K in _||$=="onFocusOut"||$=="onFocusIn"?K.slice(2):$.slice(2),_.l||(_.l={}),_.l[$+Y]=j,j?Z?j.u=Z.u:(j.u=B8,_.addEventListener($,Y?q8:Q8,Y)):_.removeEventListener($,Y?q8:Q8,Y);else{if(N=="http://www.w3.org/2000/svg")$=$.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if($!="width"&&$!="height"&&$!="href"&&$!="list"&&$!="form"&&$!="tabIndex"&&$!="download"&&$!="rowSpan"&&$!="colSpan"&&$!="role"&&$!="popover"&&$ in _)try{_[$]=j==null?"":j;break _}catch(Q){}typeof j=="function"||(j==null||j===!1&&$[4]!="-"?_.removeAttribute($):_.setAttribute($,$=="popover"&&j==1?"":j))}}function P3(_){return function($){if(this.l){var j=this.l[$.type+_];if($.t==null)$.t=B8++;else if($.t<j.u)return;return j(X1.event?X1.event($):$)}}}function L8(_,$,j,Z,N,Y,K,Q,X,G){var W,B,U,D,k,T,E,J,A,P,d,l,t,Y0,f,R=$.type;if($.constructor!==void 0)return null;128&j.__u&&(X=!!(32&j.__u),Y=[Q=$.__e=j.__e]),(W=X1.__b)&&W($);_:if(typeof R=="function")try{if(J=$.props,A=R.prototype&&R.prototype.render,P=(W=R.contextType)&&Z[W.__c],d=W?P?P.props.value:W.__:Z,j.__c?E=(B=$.__c=j.__c).__=B.__E:(A?$.__c=B=new R(J,d):($.__c=B=new N$(J,d),B.constructor=R,B.render=JZ),P&&P.sub(B),B.state||(B.state={}),B.__n=Z,U=B.__d=!0,B.__h=[],B._sb=[]),A&&B.__s==null&&(B.__s=B.state),A&&R.getDerivedStateFromProps!=null&&(B.__s==B.state&&(B.__s=B4({},B.__s)),B4(B.__s,R.getDerivedStateFromProps(J,B.__s))),D=B.props,k=B.state,B.__v=$,U)A&&R.getDerivedStateFromProps==null&&B.componentWillMount!=null&&B.componentWillMount(),A&&B.componentDidMount!=null&&B.__h.push(B.componentDidMount);else{if(A&&R.getDerivedStateFromProps==null&&J!==D&&B.componentWillReceiveProps!=null&&B.componentWillReceiveProps(J,d),$.__v==j.__v||!B.__e&&B.shouldComponentUpdate!=null&&B.shouldComponentUpdate(J,B.__s,d)===!1){$.__v!=j.__v&&(B.props=J,B.state=B.__s,B.__d=!1),$.__e=j.__e,$.__k=j.__k,$.__k.some(function(H){H&&(H.__=$)}),Y5.push.apply(B.__h,B._sb),B._sb=[],B.__h.length&&K.push(B);break _}B.componentWillUpdate!=null&&B.componentWillUpdate(J,B.__s,d),A&&B.componentDidUpdate!=null&&B.__h.push(function(){B.componentDidUpdate(D,k,T)})}if(B.context=d,B.props=J,B.__P=_,B.__e=!1,l=X1.__r,t=0,A)B.state=B.__s,B.__d=!1,l&&l($),W=B.render(B.props,B.state,B.context),Y5.push.apply(B.__h,B._sb),B._sb=[];else do B.__d=!1,l&&l($),W=B.render(B.props,B.state,B.context),B.state=B.__s;while(B.__d&&++t<25);B.state=B.__s,B.getChildContext!=null&&(Z=B4(B4({},Z),B.getChildContext())),A&&!U&&B.getSnapshotBeforeUpdate!=null&&(T=B.getSnapshotBeforeUpdate(D,k)),Y0=W!=null&&W.type===X5&&W.key==null?n3(W.props.children):W,Q=c3(_,q5(Y0)?Y0:[Y0],$,j,Z,N,Y,K,Q,X,G),B.base=$.__e,$.__u&=-161,B.__h.length&&K.push(B),E&&(B.__E=B.__=null)}catch(H){if($.__v=null,X||Y!=null)if(H.then){for($.__u|=X?160:128;Q&&Q.nodeType==8&&Q.nextSibling;)Q=Q.nextSibling;Y[Y.indexOf(Q)]=null,$.__e=Q}else{for(f=Y.length;f--;)W8(Y[f]);X8($)}else $.__e=j.__e,$.__k=j.__k,H.then||X8($);X1.__e(H,$,j)}else Y==null&&$.__v==j.__v?($.__k=j.__k,$.__e=j.__e):Q=$.__e=OZ(j.__e,$,j,Z,N,Y,K,X,G);return(W=X1.diffed)&&W($),128&$.__u?void 0:Q}function X8(_){_&&(_.__c&&(_.__c.__e=!0),_.__k&&_.__k.some(X8))}function i3(_,$,j){for(var Z=0;Z<j.length;Z++)U8(j[Z],j[++Z],j[++Z]);X1.__c&&X1.__c($,_),_.some(function(N){try{_=N.__h,N.__h=[],_.some(function(Y){Y.call(N)})}catch(Y){X1.__e(Y,N.__v)}})}function n3(_){return typeof _!="object"||_==null||_.__b>0?_:q5(_)?_.map(n3):B4({},_)}function OZ(_,$,j,Z,N,Y,K,Q,X){var G,W,B,U,D,k,T,E=j.props||N5,J=$.props,A=$.type;if(A=="svg"?N="http://www.w3.org/2000/svg":A=="math"?N="http://www.w3.org/1998/Math/MathML":N||(N="http://www.w3.org/1999/xhtml"),Y!=null){for(G=0;G<Y.length;G++)if((D=Y[G])&&"setAttribute"in D==!!A&&(A?D.localName==A:D.nodeType==3)){_=D,Y[G]=null;break}}if(_==null){if(A==null)return document.createTextNode(J);_=document.createElementNS(N,A,J.is&&J),Q&&(X1.__m&&X1.__m($,Y),Q=!1),Y=null}if(A==null)E===J||Q&&_.data==J||(_.data=J);else{if(Y=Y&&Q5.call(_.childNodes),!Q&&Y!=null)for(E={},G=0;G<_.attributes.length;G++)E[(D=_.attributes[G]).name]=D.value;for(G in E)D=E[G],G=="dangerouslySetInnerHTML"?B=D:G=="children"||(G in J)||G=="value"&&("defaultValue"in J)||G=="checked"&&("defaultChecked"in J)||$5(_,G,null,D,N);for(G in J)D=J[G],G=="children"?U=D:G=="dangerouslySetInnerHTML"?W=D:G=="value"?k=D:G=="checked"?T=D:Q&&typeof D!="function"||E[G]===D||$5(_,G,D,E[G],N);if(W)Q||B&&(W.__html==B.__html||W.__html==_.innerHTML)||(_.innerHTML=W.__html),$.__k=[];else if(B&&(_.innerHTML=""),c3($.type=="template"?_.content:_,q5(U)?U:[U],$,j,Z,A=="foreignObject"?"http://www.w3.org/1999/xhtml":N,Y,K,Y?Y[0]:j.__k&&Y$(j,0),Q,X),Y!=null)for(G=Y.length;G--;)W8(Y[G]);Q||(G="value",A=="progress"&&k==null?_.removeAttribute("value"):k!=null&&(k!==_[G]||A=="progress"&&!k||A=="option"&&k!=E[G])&&$5(_,G,k,E[G],N),G="checked",T!=null&&T!=_[G]&&$5(_,G,T,E[G],N))}return _}function U8(_,$,j){try{if(typeof _=="function"){var Z=typeof _.__u=="function";Z&&_.__u(),Z&&$==null||(_.__u=_($))}else _.current=$}catch(N){X1.__e(N,j)}}function d3(_,$,j){var Z,N;if(X1.unmount&&X1.unmount(_),(Z=_.ref)&&(Z.current&&Z.current!=_.__e||U8(Z,null,$)),(Z=_.__c)!=null){if(Z.componentWillUnmount)try{Z.componentWillUnmount()}catch(Y){X1.__e(Y,$)}Z.base=Z.__P=null}if(Z=_.__k)for(N=0;N<Z.length;N++)Z[N]&&d3(Z[N],$,j||typeof _.type!="function");j||W8(_.__e),_.__c=_.__=_.__e=void 0}function JZ(_,$,j){return this.constructor(_,j)}function V5(_,$,j){var Z,N,Y,K;$==document&&($=document.documentElement),X1.__&&X1.__(_,$),N=(Z=typeof j=="function")?null:j&&j.__k||$.__k,Y=[],K=[],L8($,_=(!Z&&j||$).__k=G5(X5,null,[_]),N||N5,N5,$.namespaceURI,!Z&&j?[j]:N?null:$.firstChild?Q5.call($.childNodes):null,Y,!Z&&j?j:N?N.__e:$.firstChild,Z,K),i3(Y,_,K)}function o3(_){function $(j){var Z,N;return this.getChildContext||(Z=new Set,(N={})[$.__c]=this,this.getChildContext=function(){return N},this.componentWillUnmount=function(){Z=null},this.shouldComponentUpdate=function(Y){this.props.value!=Y.value&&Z.forEach(function(K){K.__e=!0,G8(K)})},this.sub=function(Y){Z.add(Y);var K=Y.componentWillUnmount;Y.componentWillUnmount=function(){Z&&Z.delete(Y),K&&K.call(Y)}}),j.children}return $.__c="__cC"+h3++,$.__=_,$.Provider=$.__l=($.Consumer=function(j,Z){return j.children(Z)}).contextType=$,$}Q5=Y5.slice,X1={__e:function(_,$,j,Z){for(var N,Y,K;$=$.__;)if((N=$.__c)&&!N.__)try{if((Y=N.constructor)&&Y.getDerivedStateFromError!=null&&(N.setState(Y.getDerivedStateFromError(_)),K=N.__d),N.componentDidCatch!=null&&(N.componentDidCatch(_,Z||{}),K=N.__d),K)return N.__E=N}catch(Q){_=Q}throw _}},b3=0,LZ=function(_){return _!=null&&_.constructor===void 0},N$.prototype.setState=function(_,$){var j;j=this.__s!=null&&this.__s!=this.state?this.__s:this.__s=B4({},this.state),typeof _=="function"&&(_=_(B4({},j),this.props)),_&&B4(j,_),_!=null&&this.__v&&($&&this._sb.push($),G8(this))},N$.prototype.forceUpdate=function(_){this.__v&&(this.__e=!0,_&&this.__h.push(_),G8(this))},N$.prototype.render=X5,C4=[],u3=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,m3=function(_,$){return _.__v.__b-$.__v.__b},K5.__r=0,g3=/(PointerCapture)$|Capture$/i,B8=0,Q8=P3(!1),q8=P3(!0),h3=0;var T4,G1,K8,C3,K$=0,s3=[],z1=X1,T3=z1.__b,y3=z1.__r,S3=z1.diffed,x3=z1.__c,w3=z1.unmount,R3=z1.__;function Q$(_,$){z1.__h&&z1.__h(G1,_,K$||$),K$=0;var j=G1.__H||(G1.__H={__:[],__h:[]});return _>=j.__.length&&j.__.push({}),j.__[_]}function h(_){return K$=1,z8(_2,_)}function z8(_,$,j){var Z=Q$(T4++,2);if(Z.t=_,!Z.__c&&(Z.__=[j?j($):_2(void 0,$),function(Q){var X=Z.__N?Z.__N[0]:Z.__[0],G=Z.t(X,Q);X!==G&&(Z.__N=[G,Z.__[1]],Z.__c.setState({}))}],Z.__c=G1,!G1.__f)){var N=function(Q,X,G){if(!Z.__c.__H)return!0;var W=Z.__c.__H.__.filter(function(U){return U.__c});if(W.every(function(U){return!U.__N}))return!Y||Y.call(this,Q,X,G);var B=Z.__c.props!==Q;return W.some(function(U){if(U.__N){var D=U.__[0];U.__=U.__N,U.__N=void 0,D!==U.__[0]&&(B=!0)}}),Y&&Y.call(this,Q,X,G)||B};G1.__f=!0;var{shouldComponentUpdate:Y,componentWillUpdate:K}=G1;G1.componentWillUpdate=function(Q,X,G){if(this.__e){var W=Y;Y=void 0,N(Q,X,G),Y=W}K&&K.call(this,Q,X,G)},G1.shouldComponentUpdate=N}return Z.__N||Z.__}function p(_,$){var j=Q$(T4++,3);!z1.__s&&H8(j.__H,$)&&(j.__=_,j.u=$,G1.__H.__h.push(j))}function F8(_,$){var j=Q$(T4++,4);!z1.__s&&H8(j.__H,$)&&(j.__=_,j.u=$,G1.__h.push(j))}function S(_){return K$=5,E0(function(){return{current:_}},[])}function r3(_,$,j){K$=6,F8(function(){if(typeof _=="function"){var Z=_($());return function(){_(null),Z&&typeof Z=="function"&&Z()}}if(_)return _.current=$(),function(){return _.current=null}},j==null?j:j.concat(_))}function E0(_,$){var j=Q$(T4++,7);return H8(j.__H,$)&&(j.__=_(),j.__H=$,j.__h=_),j.__}function x(_,$){return K$=8,E0(function(){return _},$)}function a3(_){var $=G1.context[_.__c],j=Q$(T4++,9);return j.c=_,$?(j.__==null&&(j.__=!0,$.sub(G1)),$.props.value):_.__}function t3(_,$){z1.useDebugValue&&z1.useDebugValue($?$(_):_)}function e3(_){var $=Q$(T4++,10),j=h();return $.__=_,G1.componentDidCatch||(G1.componentDidCatch=function(Z,N){$.__&&$.__(Z,N),j[1](Z)}),[j[0],function(){j[1](void 0)}]}function DZ(){for(var _;_=s3.shift();){var $=_.__H;if(_.__P&&$)try{$.__h.some(Z5),$.__h.some(V8),$.__h=[]}catch(j){$.__h=[],z1.__e(j,_.__v)}}}z1.__b=function(_){G1=null,T3&&T3(_)},z1.__=function(_,$){_&&$.__k&&$.__k.__m&&(_.__m=$.__k.__m),R3&&R3(_,$)},z1.__r=function(_){y3&&y3(_),T4=0;var $=(G1=_.__c).__H;$&&(K8===G1?($.__h=[],G1.__h=[],$.__.some(function(j){j.__N&&(j.__=j.__N),j.u=j.__N=void 0})):($.__h.some(Z5),$.__h.some(V8),$.__h=[],T4=0)),K8=G1},z1.diffed=function(_){S3&&S3(_);var $=_.__c;$&&$.__H&&($.__H.__h.length&&(s3.push($)!==1&&C3===z1.requestAnimationFrame||((C3=z1.requestAnimationFrame)||EZ)(DZ)),$.__H.__.some(function(j){j.u&&(j.__H=j.u),j.u=void 0})),K8=G1=null},z1.__c=function(_,$){$.some(function(j){try{j.__h.some(Z5),j.__h=j.__h.filter(function(Z){return!Z.__||V8(Z)})}catch(Z){$.some(function(N){N.__h&&(N.__h=[])}),$=[],z1.__e(Z,j.__v)}}),x3&&x3(_,$)},z1.unmount=function(_){w3&&w3(_);var $,j=_.__c;j&&j.__H&&(j.__H.__.some(function(Z){try{Z5(Z)}catch(N){$=N}}),j.__H=void 0,$&&z1.__e($,j.__v))};var f3=typeof requestAnimationFrame=="function";function EZ(_){var $,j=function(){clearTimeout(Z),f3&&cancelAnimationFrame($),setTimeout(_)},Z=setTimeout(j,35);f3&&($=requestAnimationFrame(j))}function Z5(_){var $=G1,j=_.__c;typeof j=="function"&&(_.__c=void 0,j()),G1=$}function V8(_){var $=G1;_.__c=_.__(),G1=$}function H8(_,$){return!_||_.length!==$.length||$.some(function(j,Z){return j!==_[Z]})}function _2(_,$){return typeof $=="function"?$(_):$}var $2=function(_,$,j,Z){var N;$[0]=0;for(var Y=1;Y<$.length;Y++){var K=$[Y++],Q=$[Y]?($[0]|=K?1:2,j[$[Y++]]):$[++Y];K===3?Z[0]=Q:K===4?Z[1]=Object.assign(Z[1]||{},Q):K===5?(Z[1]=Z[1]||{})[$[++Y]]=Q:K===6?Z[1][$[++Y]]+=Q+"":K?(N=_.apply(Q,$2(_,Q,j,["",null])),Z.push(N),Q[0]?$[0]|=2:($[Y-2]=0,$[Y]=N)):Z.push(Q)}return Z},v3=new Map;function AZ(_){var $=v3.get(this);return $||($=new Map,v3.set(this,$)),($=$2(this,$.get(_)||($.set(_,$=function(j){for(var Z,N,Y=1,K="",Q="",X=[0],G=function(U){Y===1&&(U||(K=K.replace(/^\s*\n\s*|\s*\n\s*$/g,"")))?X.push(0,U,K):Y===3&&(U||K)?(X.push(3,U,K),Y=2):Y===2&&K==="..."&&U?X.push(4,U,0):Y===2&&K&&!U?X.push(5,0,!0,K):Y>=5&&((K||!U&&Y===5)&&(X.push(Y,0,K,N),Y=6),U&&(X.push(Y,U,0,N),Y=6)),K=""},W=0;W<j.length;W++){W&&(Y===1&&G(),G(W));for(var B=0;B<j[W].length;B++)Z=j[W][B],Y===1?Z==="<"?(G(),X=[X],Y=3):K+=Z:Y===4?K==="--"&&Z===">"?(Y=1,K=""):K=Z+K[0]:Q?Z===Q?Q="":K+=Z:Z==='"'||Z==="'"?Q=Z:Z===">"?(G(),Y=1):Y&&(Z==="="?(Y=5,N=K,K=""):Z==="/"&&(Y<5||j[W][B+1]===">")?(G(),Y===3&&(X=X[0]),Y=X,(X=X[0]).push(2,0,Y),Y=0):Z===" "||Z==="\t"||Z===`
`||Z==="\r"?(G(),Y=2):K+=Z),Y===3&&K==="!--"&&(Y=4,X=X[0])}return G(),X}(_)),$),arguments,[])).length>1?$:$[0]}var z=AZ.bind(G5);var j_={};WZ(j_,{uploadWorkspaceFile:()=>W5,uploadMedia:()=>I8,updateWorkspaceFile:()=>hZ,submitAdaptiveCardAction:()=>P8,streamSidePrompt:()=>uZ,stopAutoresearch:()=>RZ,steerAgentQueueItem:()=>bZ,setWorkspaceVisibility:()=>x$,setAgentThoughtVisibility:()=>y8,sendPeerAgentMessage:()=>SZ,sendAgentMessage:()=>n4,searchPosts:()=>J8,restoreChatBranch:()=>yZ,respondToAgentRequest:()=>B5,renameWorkspaceFile:()=>v8,renameChatBranch:()=>CZ,removeAgentQueueItem:()=>vZ,pruneChatBranch:()=>TZ,moveWorkspaceEntry:()=>b8,getWorkspaceTree:()=>S$,getWorkspaceRawUrl:()=>L5,getWorkspaceFile:()=>w8,getWorkspaceDownloadUrl:()=>U5,getWorkspaceBranch:()=>gZ,getTimeline:()=>i4,getThumbnailUrl:()=>S8,getThread:()=>D8,getPostsByHashtag:()=>O8,getMediaUrl:()=>C_,getMediaText:()=>x8,getMediaInfo:()=>q$,getMediaBlob:()=>mZ,getChatBranches:()=>PZ,getAutoresearchStatus:()=>wZ,getAgents:()=>M8,getAgentThought:()=>T8,getAgentStatus:()=>k8,getAgentQueueState:()=>fZ,getAgentModels:()=>y$,getAgentContext:()=>xZ,getActiveChatAgents:()=>A8,forkChatBranch:()=>T$,deleteWorkspaceFile:()=>u8,deletePost:()=>E8,createWorkspaceFile:()=>f8,createReply:()=>IZ,createPost:()=>kZ,attachWorkspaceFile:()=>R8,addToWhitelist:()=>C8,SSEClient:()=>z5});async function i0(_,$={}){let j=await fetch(""+_,{...$,headers:{"Content-Type":"application/json",...$.headers}});if(!j.ok){let Z=await j.json().catch(()=>({error:"Unknown error"}));throw Error(Z.error||`HTTP ${j.status}`)}return j.json()}function j2(_){let $=String(_||"").split(`
`),j="message",Z=[];for(let Y of $)if(Y.startsWith("event:"))j=Y.slice(6).trim()||"message";else if(Y.startsWith("data:"))Z.push(Y.slice(5).trim());let N=Z.join(`
`);if(!N)return null;try{return{event:j,data:JSON.parse(N)}}catch{return{event:j,data:N}}}async function MZ(_,$){if(!_.body)throw Error("Missing event stream body");let j=_.body.getReader(),Z=new TextDecoder,N="";while(!0){let{value:K,done:Q}=await j.read();if(Q)break;N+=Z.decode(K,{stream:!0});let X=N.split(`

`);N=X.pop()||"";for(let G of X){let W=j2(G);if(W)$(W.event,W.data)}}N+=Z.decode();let Y=j2(N);if(Y)$(Y.event,Y.data)}async function i4(_=10,$=null,j=null){let Z=`/timeline?limit=${_}`;if($)Z+=`&before=${$}`;if(j)Z+=`&chat_jid=${encodeURIComponent(j)}`;return i0(Z)}async function O8(_,$=50,j=0,Z=null){let N=Z?`&chat_jid=${encodeURIComponent(Z)}`:"";return i0(`/hashtag/${encodeURIComponent(_)}?limit=${$}&offset=${j}${N}`)}async function J8(_,$=50,j=0,Z=null,N="current",Y=null){let K=Z?`&chat_jid=${encodeURIComponent(Z)}`:"",Q=N?`&scope=${encodeURIComponent(N)}`:"",X=Y?`&root_chat_jid=${encodeURIComponent(Y)}`:"";return i0(`/search?q=${encodeURIComponent(_)}&limit=${$}&offset=${j}${K}${Q}${X}`)}async function D8(_,$=null){let j=$?`?chat_jid=${encodeURIComponent($)}`:"";return i0(`/thread/${_}${j}`)}async function kZ(_,$=[],j=null){let Z=j?`?chat_jid=${encodeURIComponent(j)}`:"";return i0(`/post${Z}`,{method:"POST",body:JSON.stringify({content:_,media_ids:$})})}async function IZ(_,$,j=[],Z=null){let N=Z?`?chat_jid=${encodeURIComponent(Z)}`:"";return i0(`/post/reply${N}`,{method:"POST",body:JSON.stringify({thread_id:_,content:$,media_ids:j})})}async function E8(_,$=!1,j=null){let Z=j?`&chat_jid=${encodeURIComponent(j)}`:"",N=`/post/${_}?cascade=${$?"true":"false"}${Z}`;return i0(N,{method:"DELETE"})}async function n4(_,$,j=null,Z=[],N=null,Y=null){let K=Y?`?chat_jid=${encodeURIComponent(Y)}`:"";return i0(`/agent/${_}/message${K}`,{method:"POST",body:JSON.stringify({content:$,thread_id:j,media_ids:Z,mode:N})})}async function A8(){return i0("/agent/active-chats")}async function PZ(_=null,$={}){let j=new URLSearchParams;if(_)j.set("root_chat_jid",String(_));if($?.includeArchived)j.set("include_archived","1");let Z=j.toString()?`?${j.toString()}`:"";return i0(`/agent/branches${Z}`)}async function T$(_,$={}){return i0("/agent/branch-fork",{method:"POST",body:JSON.stringify({source_chat_jid:_,...$?.agentName?{agent_name:$.agentName}:{}})})}async function CZ(_,$={}){return i0("/agent/branch-rename",{method:"POST",body:JSON.stringify({chat_jid:_,...$&&Object.prototype.hasOwnProperty.call($,"agentName")?{agent_name:$.agentName}:{}})})}async function TZ(_){return i0("/agent/branch-prune",{method:"POST",body:JSON.stringify({chat_jid:_})})}async function yZ(_,$={}){return i0("/agent/branch-restore",{method:"POST",body:JSON.stringify({chat_jid:_,...$&&Object.prototype.hasOwnProperty.call($,"agentName")?{agent_name:$.agentName}:{}})})}async function SZ(_,$,j,Z="auto",N={}){let Y={source_chat_jid:_,content:j,mode:Z,...N?.sourceAgentName?{source_agent_name:N.sourceAgentName}:{},...N?.targetBy==="agent_name"?{target_agent_name:$}:{target_chat_jid:$}};return i0("/agent/peer-message",{method:"POST",body:JSON.stringify(Y)})}async function M8(){return i0("/agent/roster")}async function k8(_=null){let $=_?`?chat_jid=${encodeURIComponent(_)}`:"";return i0(`/agent/status${$}`)}async function xZ(_=null){let $=_?`?chat_jid=${encodeURIComponent(_)}`:"";return i0(`/agent/context${$}`)}async function wZ(_=null){let $=_?`?chat_jid=${encodeURIComponent(_)}`:"";return i0(`/agent/autoresearch/status${$}`)}async function RZ(_=null,$={}){return i0("/agent/autoresearch/stop",{method:"POST",body:JSON.stringify({chat_jid:_||void 0,generate_report:$?.generateReport!==!1})})}async function fZ(_=null){let $=_?`?chat_jid=${encodeURIComponent(_)}`:"";return i0(`/agent/queue-state${$}`)}async function vZ(_,$=null){let j=await fetch("/agent/queue-remove",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({row_id:_,chat_jid:$||void 0})});if(!j.ok){let Z=await j.json().catch(()=>({error:"Failed to remove queued item"}));throw Error(Z.error||`HTTP ${j.status}`)}return j.json()}async function bZ(_,$=null){let j=await fetch("/agent/queue-steer",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({row_id:_,chat_jid:$||void 0})});if(!j.ok){let Z=await j.json().catch(()=>({error:"Failed to steer queued item"}));throw Error(Z.error||`HTTP ${j.status}`)}return j.json()}async function y$(_=null){let $=_?`?chat_jid=${encodeURIComponent(_)}`:"";return i0(`/agent/models${$}`)}async function I8(_){let $=new FormData;$.append("file",_);let j=await fetch("/media/upload",{method:"POST",body:$});if(!j.ok){let Z=await j.json().catch(()=>({error:"Upload failed"}));throw Error(Z.error||`HTTP ${j.status}`)}return j.json()}async function B5(_,$,j=null){let Z=await fetch("/agent/respond",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({request_id:_,outcome:$,chat_jid:j||void 0})});if(!Z.ok){let N=await Z.json().catch(()=>({error:"Failed to respond"}));throw Error(N.error||`HTTP ${Z.status}`)}return Z.json()}async function P8(_){let $=await fetch("/agent/card-action",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(_)});if(!$.ok){let j=await $.json().catch(()=>({error:"Adaptive Card action failed"}));throw Error(j.error||`HTTP ${$.status}`)}return $.json()}async function uZ(_,$={}){let j=await fetch("/agent/side-prompt/stream",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({prompt:_,system_prompt:$.systemPrompt||void 0,chat_jid:$.chatJid||void 0}),signal:$.signal});if(!j.ok){let Y=await j.json().catch(()=>({error:"Side prompt failed"}));throw Error(Y.error||`HTTP ${j.status}`)}let Z=null,N=null;if(await MZ(j,(Y,K)=>{if($.onEvent?.(Y,K),Y==="side_prompt_thinking_delta")$.onThinkingDelta?.(K?.delta||"");else if(Y==="side_prompt_text_delta")$.onTextDelta?.(K?.delta||"");else if(Y==="side_prompt_done")Z=K;else if(Y==="side_prompt_error")N=K}),N){let Y=Error(N?.error||"Side prompt failed");throw Y.payload=N,Y}return Z}async function C8(_,$){let j=await fetch("/agent/whitelist",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({pattern:_,description:$})});if(!j.ok){let Z=await j.json().catch(()=>({error:"Failed to add to whitelist"}));throw Error(Z.error||`HTTP ${j.status}`)}return j.json()}async function T8(_,$="thought"){let j=`/agent/thought?turn_id=${encodeURIComponent(_)}&panel=${encodeURIComponent($)}`;return i0(j)}async function y8(_,$,j){return i0("/agent/thought/visibility",{method:"POST",body:JSON.stringify({turn_id:_,panel:$,expanded:Boolean(j)})})}function C_(_){return`/media/${_}`}function S8(_){return`/media/${_}/thumbnail`}async function q$(_){let $=await fetch(`/media/${_}/info`);if(!$.ok)throw Error("Failed to get media info");return $.json()}async function x8(_){let $=await fetch(`/media/${_}`);if(!$.ok)throw Error("Failed to load media text");return $.text()}async function mZ(_){let $=await fetch(`/media/${_}`);if(!$.ok)throw Error("Failed to load media blob");return $.blob()}async function S$(_="",$=2,j=!1){let Z=`/workspace/tree?path=${encodeURIComponent(_)}&depth=${$}&show_hidden=${j?"1":"0"}`;return i0(Z)}async function gZ(_=""){let $=`/workspace/branch?path=${encodeURIComponent(_||"")}`;return i0($)}async function w8(_,$=20000,j=null){let Z=j?`&mode=${encodeURIComponent(j)}`:"",N=`/workspace/file?path=${encodeURIComponent(_)}&max=${$}${Z}`;return i0(N)}async function hZ(_,$){return i0("/workspace/file",{method:"PUT",body:JSON.stringify({path:_,content:$})})}async function R8(_){return i0("/workspace/attach",{method:"POST",body:JSON.stringify({path:_})})}async function W5(_,$="",j={}){let Z=new FormData;Z.append("file",_);let N=new URLSearchParams;if($)N.set("path",$);if(j.overwrite)N.set("overwrite","1");let Y=N.toString(),K=Y?`/workspace/upload?${Y}`:"/workspace/upload",Q=await fetch(""+K,{method:"POST",body:Z});if(!Q.ok){let X=await Q.json().catch(()=>({error:"Upload failed"})),G=Error(X.error||`HTTP ${Q.status}`);throw G.status=Q.status,G.code=X.code,G}return Q.json()}async function f8(_,$,j=""){let Z=await fetch("/workspace/file",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({path:_,name:$,content:j})});if(!Z.ok){let N=await Z.json().catch(()=>({error:"Create failed"})),Y=Error(N.error||`HTTP ${Z.status}`);throw Y.status=Z.status,Y.code=N.code,Y}return Z.json()}async function v8(_,$){let j=await fetch("/workspace/rename",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({path:_,name:$})});if(!j.ok){let Z=await j.json().catch(()=>({error:"Rename failed"})),N=Error(Z.error||`HTTP ${j.status}`);throw N.status=j.status,N.code=Z.code,N}return j.json()}async function b8(_,$){let j=await fetch("/workspace/move",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({path:_,target:$})});if(!j.ok){let Z=await j.json().catch(()=>({error:"Move failed"})),N=Error(Z.error||`HTTP ${j.status}`);throw N.status=j.status,N.code=Z.code,N}return j.json()}async function u8(_){let $=`/workspace/file?path=${encodeURIComponent(_||"")}`;return i0($,{method:"DELETE"})}async function x$(_,$=!1){return i0("/workspace/visibility",{method:"POST",body:JSON.stringify({visible:Boolean(_),show_hidden:Boolean($)})})}function L5(_){return`/workspace/raw?path=${encodeURIComponent(_)}`}function U5(_,$=!1){return`/workspace/download?${`path=${encodeURIComponent(_||"")}&show_hidden=${$?"1":"0"}`}`}class z5{constructor(_,$,j={}){this.onEvent=_,this.onStatusChange=$,this.chatJid=typeof j?.chatJid==="string"&&j.chatJid.trim()?j.chatJid.trim():null,this.eventSource=null,this.reconnectTimeout=null,this.reconnectDelay=1000,this.status="disconnected",this.reconnectAttempts=0,this.cooldownUntil=0,this.connecting=!1,this.lastActivityAt=0,this.staleCheckTimer=null,this.staleThresholdMs=70000}markActivity(){this.lastActivityAt=Date.now()}clearStaleMonitor(){if(this.staleCheckTimer)clearInterval(this.staleCheckTimer),this.staleCheckTimer=null}startStaleMonitor(){this.clearStaleMonitor(),this.staleCheckTimer=setInterval(()=>{if(this.status!=="connected")return;if(!this.lastActivityAt)return;if(Date.now()-this.lastActivityAt<=this.staleThresholdMs)return;console.warn("SSE connection went stale; forcing reconnect"),this.forceReconnect()},15000)}forceReconnect(){if(this.connecting=!1,this.eventSource)this.eventSource.close(),this.eventSource=null;this.clearStaleMonitor(),this.status="disconnected",this.onStatusChange("disconnected"),this.reconnectAttempts+=1,this.scheduleReconnect()}connect(){if(this.connecting)return;if(this.eventSource&&this.status==="connected")return;if(this.connecting=!0,this.eventSource)this.eventSource.close();this.clearStaleMonitor();let _=this.chatJid?`?chat_jid=${encodeURIComponent(this.chatJid)}`:"";this.eventSource=new EventSource("/sse/stream"+_);let $=(j)=>{this.eventSource.addEventListener(j,(Z)=>{this.markActivity(),this.onEvent(j,JSON.parse(Z.data))})};this.eventSource.onopen=()=>{this.connecting=!1,this.reconnectDelay=1000,this.reconnectAttempts=0,this.cooldownUntil=0,this.status="connected",this.markActivity(),this.startStaleMonitor(),this.onStatusChange("connected")},this.eventSource.onerror=()=>{this.connecting=!1,this.clearStaleMonitor(),this.status="disconnected",this.onStatusChange("disconnected"),this.reconnectAttempts+=1,this.scheduleReconnect()},this.eventSource.addEventListener("connected",()=>{this.markActivity(),console.log("SSE connected"),this.onEvent("connected",{})}),this.eventSource.addEventListener("heartbeat",()=>{this.markActivity()}),$("new_post"),$("new_reply"),$("agent_response"),$("interaction_updated"),$("interaction_deleted"),$("agent_status"),$("agent_steer_queued"),$("agent_followup_queued"),$("agent_followup_consumed"),$("agent_followup_removed"),$("workspace_update"),$("agent_draft"),$("agent_draft_delta"),$("agent_thought"),$("agent_thought_delta"),$("model_changed"),$("ui_theme"),$("autoresearch_status"),["extension_ui_request","extension_ui_timeout","extension_ui_notify","extension_ui_status","extension_ui_working","extension_ui_widget","extension_ui_title","extension_ui_editor_text","extension_ui_error"].forEach($)}scheduleReconnect(){if(this.reconnectTimeout)clearTimeout(this.reconnectTimeout);let _=10,$=60000,j=Date.now();if(this.reconnectAttempts>=_)this.cooldownUntil=Math.max(this.cooldownUntil,j+$),this.reconnectAttempts=0;let Z=Math.max(this.cooldownUntil-j,0),N=Math.max(this.reconnectDelay,Z);this.reconnectTimeout=setTimeout(()=>{console.log("Reconnecting SSE..."),this.connect()},N),this.reconnectDelay=Math.min(this.reconnectDelay*2,30000)}reconnectIfNeeded(){let _=Date.now();if(this.status==="connected"){if(this.lastActivityAt&&_-this.lastActivityAt>this.staleThresholdMs)this.forceReconnect();return}if(this.cooldownUntil&&_<this.cooldownUntil)return;if(this.reconnectTimeout)clearTimeout(this.reconnectTimeout),this.reconnectTimeout=null;this.connect()}disconnect(){if(this.connecting=!1,this.clearStaleMonitor(),this.eventSource)this.eventSource.close(),this.eventSource=null;if(this.reconnectTimeout)clearTimeout(this.reconnectTimeout),this.reconnectTimeout=null}}function F5(_){return String(_||"").toLowerCase().replace(/^@/,"").replace(/\s+/g," ").trim()}function pZ(_,$){let j=F5(_),Z=F5($);if(!Z)return!1;return j.startsWith(Z)||j.includes(Z)}function m8(_){if(!_)return!1;if(_.isComposing)return!1;if(_.ctrlKey||_.metaKey||_.altKey)return!1;return typeof _.key==="string"&&_.key.length===1&&/\S/.test(_.key)}function g8(_,$,j=Date.now(),Z=700){let N=_&&typeof _==="object"?_:{value:"",updatedAt:0},Y=String($||"").trim().toLowerCase();if(!Y)return{value:"",updatedAt:j};return{value:!N.value||!Number.isFinite(N.updatedAt)||j-N.updatedAt>Z?Y:`${N.value}${Y}`,updatedAt:j}}function cZ(_,$){let j=Math.max(0,Number(_)||0);if(j<=0)return[];let N=((Number.isInteger($)?$:0)%j+j)%j,Y=[];for(let K=0;K<j;K+=1)Y.push((N+K)%j);return Y}function lZ(_,$,j=0,Z=(N)=>N){let N=F5($);if(!N)return-1;let Y=Array.isArray(_)?_:[],K=cZ(Y.length,j),Q=Y.map((X)=>F5(Z(X)));for(let X of K)if(Q[X].startsWith(N))return X;for(let X of K)if(Q[X].includes(N))return X;return-1}function h8(_,$,j=-1,Z=(N)=>N){let N=Array.isArray(_)?_:[];if(j>=0&&j<N.length){let Y=Z(N[j]);if(pZ(Y,$))return j}return lZ(N,$,0,Z)}function F_(_){if(typeof window>"u"||!window.localStorage)return null;try{return window.localStorage.getItem(_)}catch{return null}}function Z1(_,$){if(typeof window>"u"||!window.localStorage)return;try{window.localStorage.setItem(_,$)}catch{}}function G$(_,$=!1){let j=F_(_);if(j===null)return $;return j==="true"}function X$(_,$=null){let j=F_(_);if(j===null)return $;let Z=parseInt(j,10);return Number.isFinite(Z)?Z:$}function H5(_){return String(_||"").trim().toLowerCase()}function p8(_){let $=String(_||"").match(/^@([a-zA-Z0-9_-]*)$/);if(!$)return null;return H5($[1]||"")}function iZ(_){let $=new Set,j=[];for(let Z of Array.isArray(_)?_:[]){let N=H5(Z?.agent_name);if(!N||$.has(N))continue;$.add(N),j.push(Z)}return j}function Z2(_,$,j={}){let Z=p8($);if(Z==null)return[];let N=typeof j?.currentChatJid==="string"?j.currentChatJid:null;return iZ(_).filter((Y)=>{if(N&&Y?.chat_jid===N)return!1;return H5(Y?.agent_name).startsWith(Z)})}function c8(_){let $=H5(_);return $?`@${$} `:""}function N2(_,$,j={}){if(!_||_.isComposing)return!1;if(j?.searchMode)return!1;if(!j?.showSessionSwitcherButton)return!1;if(_.ctrlKey||_.metaKey||_.altKey)return!1;if(_.key!=="@")return!1;return String($||"")===""}function O5(_){let $=l8(_);return $?`@${$}`:""}function l8(_){return String(_||"").trim().toLowerCase().replace(/[^a-z0-9_-]+/g,"-").replace(/^-+|-+$/g,"").replace(/-{2,}/g,"-")}function i8(_,$=""){let j=String(_||""),Z=l8(j),N=l8($);if(!j.trim())return{normalized:Z,handle:"",canSubmit:!1,kind:"error",message:"Enter a branch handle."};if(!Z)return{normalized:Z,handle:"",canSubmit:!1,kind:"error",message:"Handle must contain at least one letter or number."};let Y=`@${Z}`;if(Z===N)return{normalized:Z,handle:Y,canSubmit:!1,kind:"info",message:`Already using ${Y}.`};if(Z!==j.trim())return{normalized:Z,handle:Y,canSubmit:!0,kind:"info",message:`Will save as ${Y}. Letters, numbers, - and _ are allowed; leading @ is optional.`};return{normalized:Z,handle:Y,canSubmit:!0,kind:"success",message:`Saving as ${Y}.`}}function Y2(_,$){let j=typeof _?.agent_name==="string"&&_.agent_name.trim()?O5(_.agent_name):String($||"").trim(),Z=typeof _?.chat_jid==="string"&&_.chat_jid.trim()?_.chat_jid.trim():String($||"").trim();return`${j} — ${Z} • current branch`}function nZ(_,$={}){let j=[],Z=typeof $.currentChatJid==="string"?$.currentChatJid.trim():"",N=typeof _?.chat_jid==="string"?_.chat_jid.trim():"";if(Z&&N===Z)j.push("current");if(_?.archived_at)j.push("archived");else if(_?.is_active)j.push("active");return j}function J5(_,$={}){let j=O5(_?.agent_name)||String(_?.chat_jid||"").trim(),Z=typeof _?.chat_jid==="string"&&_.chat_jid.trim()?_.chat_jid.trim():"unknown-chat",N=nZ(_,$);return N.length>0?`${j} — ${Z} • ${N.join(" • ")}`:`${j} — ${Z}`}function K2(_,$,j){let Z=O5(_),N=O5($),Y=String(j||"").trim();if(Z&&N&&Z!==N)return`Restored archived ${Z} as ${N} because ${Z} is already in use.`;if(N)return`Restored ${N}.`;if(Z)return`Restored ${Z}.`;return`Restored ${Y||"branch"}.`}function p_({prefix:_="file",label:$,title:j,onRemove:Z,onClick:N,removeTitle:Y="Remove",icon:K="file"}){let Q=`${_}-file-pill`,X=`${_}-file-name`,G=`${_}-file-remove`,W=K==="message"?z`<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
      </svg>`:z`<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
        <polyline points="14 2 14 8 20 8"/>
      </svg>`;return z`
    <span class=${Q} title=${j||$} onClick=${N}>
      ${W}
      <span class=${X}>${$}</span>
      ${Z&&z`
        <button
          class=${G}
          onClick=${(B)=>{B.preventDefault(),B.stopPropagation(),Z()}}
          title=${Y}
          type="button"
        >
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M18 6L6 18M6 6l12 12"/>
          </svg>
        </button>
      `}
    </span>
  `}var dZ=[{name:"/model",description:"Select model or list available models"},{name:"/cycle-model",description:"Cycle to the next available model"},{name:"/thinking",description:"Show or set thinking level"},{name:"/cycle-thinking",description:"Cycle thinking level"},{name:"/theme",description:"Set UI theme (no name to show available themes)"},{name:"/tint",description:"Tint default light/dark UI (usage: /tint #hex or /tint off)"},{name:"/btw",description:"Open a side conversation panel without interrupting the main chat"},{name:"/state",description:"Show current session state"},{name:"/stats",description:"Show session token and cost stats"},{name:"/context",description:"Show context window usage"},{name:"/last",description:"Show last assistant response"},{name:"/compact",description:"Manually compact the session"},{name:"/auto-compact",description:"Toggle auto-compaction"},{name:"/auto-retry",description:"Toggle auto-retry"},{name:"/abort",description:"Abort the current response"},{name:"/abort-retry",description:"Abort retry backoff"},{name:"/abort-bash",description:"Abort running bash command"},{name:"/shell",description:"Run a shell command and return output"},{name:"/bash",description:"Run a shell command and add output to context"},{name:"/queue",description:"Queue a follow-up message (one-at-a-time)"},{name:"/queue-all",description:"Queue a follow-up message (batch all)"},{name:"/steer",description:"Steer the current response"},{name:"/steering-mode",description:"Set steering mode (all|one)"},{name:"/followup-mode",description:"Set follow-up mode (all|one)"},{name:"/session-name",description:"Set or show the session name"},{name:"/new-session",description:"Start a new session"},{name:"/switch-session",description:"Switch to a session file"},{name:"/fork",description:"Fork from a previous message"},{name:"/forks",description:"List forkable messages"},{name:"/tree",description:"List the session tree"},{name:"/label",description:"Set or clear a label on a tree entry"},{name:"/labels",description:"List labeled entries"},{name:"/agent-name",description:"Set or show the agent display name"},{name:"/agent-avatar",description:"Set or show the agent avatar URL"},{name:"/user-name",description:"Set or show your display name"},{name:"/user-avatar",description:"Set or show your avatar URL"},{name:"/user-github",description:"Set name/avatar from GitHub profile"},{name:"/export-html",description:"Export session to HTML"},{name:"/passkey",description:"Manage passkeys (enrol/list/delete)"},{name:"/totp",description:"Show a TOTP enrolment QR code"},{name:"/qr",description:"Generate a QR code for text or URL"},{name:"/search",description:"Search notes and skills in the workspace"},{name:"/restart",description:"Restart the agent and stop subprocesses"},{name:"/commands",description:"List available commands"}];function oZ({usage:_,onCompact:$}){let j=Math.min(100,Math.max(0,_.percent||0)),Z=_.tokens,N=_.contextWindow,Y="Compact context",Q=`${Z!=null?`Context: ${Q2(Z)} / ${Q2(N)} tokens (${j.toFixed(0)}%)`:`Context: ${j.toFixed(0)}%`} — ${"Compact context"}`,X=9,G=2*Math.PI*9,W=j/100*G,B=j>90?"var(--context-red, #ef4444)":j>75?"var(--context-amber, #f59e0b)":"var(--context-green, #22c55e)";return z`
        <button
            class="compose-context-pie icon-btn"
            type="button"
            title=${Q}
            aria-label="Compact context"
            onClick=${(U)=>{U.preventDefault(),U.stopPropagation(),$?.()}}
        >
            <svg width="22" height="22" viewBox="0 0 24 24" aria-hidden="true">
                <circle cx="12" cy="12" r=${9}
                    fill="none"
                    stroke="var(--context-track, rgba(128,128,128,0.2))"
                    stroke-width="2.5" />
                <circle cx="12" cy="12" r=${9}
                    fill="none"
                    stroke=${B}
                    stroke-width="2.5"
                    stroke-dasharray=${`${W} ${G}`}
                    stroke-linecap="round"
                    transform="rotate(-90 12 12)" />
            </svg>
        </button>
    `}function Q2(_){if(_==null)return"?";if(_>=1e6)return(_/1e6).toFixed(1)+"M";if(_>=1000)return(_/1000).toFixed(0)+"K";return String(_)}function q2({onPost:_,onFocus:$,searchMode:j,searchScope:Z="current",onSearch:N,onSearchScopeChange:Y,onEnterSearch:K,onExitSearch:Q,fileRefs:X=[],onRemoveFileRef:G,onClearFileRefs:W,messageRefs:B=[],onRemoveMessageRef:U,onClearMessageRefs:D,activeModel:k=null,modelUsage:T=null,thinkingLevel:E=null,supportsThinking:J=!1,contextUsage:A=null,onContextCompact:P,notificationsEnabled:d=!1,notificationPermission:l="default",onToggleNotifications:t,onModelChange:Y0,onModelStateChange:f,activeEditorPath:R=null,onAttachEditorFile:H,onOpenFilePill:w,followupQueueItems:c=[],onInjectQueuedFollowup:e,onRemoveQueuedFollowup:i,onSubmitIntercept:Z0,onMessageResponse:N0,onPopOutChat:K0,isAgentActive:G0=!1,activeChatAgents:V0=[],currentChatJid:F0="web:default",connectionStatus:U0="connected",onSetFileRefs:H0,onSetMessageRefs:u0,onSubmitError:k0,onSwitchChat:A0,onRenameSession:m0,isRenameSessionInProgress:g0=!1,onCreateSession:C0,onDeleteSession:B0,onRestoreSession:I0}){let[D0,X0]=h(""),[P0,d0]=h(""),[b0,W1]=h([]),[A1,S0]=h(!1),[h0,t0]=h([]),[N1,o0]=h(0),[S1,$1]=h(!1),[v1,Y1]=h([]),[p1,x0]=h(0),[Z_,Q1]=h(!1),[L1,V_]=h(!1),[e0,s1]=h(!1),[f0,p0]=h(!1),[w0,F1]=h([]),[m,Q0]=h(0),[O0,v0]=h(0),[s0,b1]=h(!1),[c1,r0]=h(0),[J1,B_]=h(null),K1=S(null),J_=S(null),W_=S(null),r1=S(null),a1=S(null),x1=S(null),i_=S(null),y_=S(null),N_=S({value:"",updatedAt:0}),Z4=S(0),M1=S(!1),n_=200,S_=(L)=>{let y=new Set,u=[];for(let n of L||[]){if(typeof n!=="string")continue;let z0=n.trim();if(!z0||y.has(z0))continue;y.add(z0),u.push(z0)}return u},w1=()=>{let L=F_("piclaw_compose_history");if(!L)return[];try{let y=JSON.parse(L);if(!Array.isArray(y))return[];return S_(y)}catch{return[]}},U1=(L)=>{Z1("piclaw_compose_history",JSON.stringify(L))},Y_=S(w1()),K_=S(-1),_1=S(""),t1=D0.trim()||b0.length>0||X.length>0||B.length>0,c0=typeof window<"u"&&typeof navigator<"u"&&Boolean(navigator.geolocation)&&Boolean(window.isSecureContext),l1=typeof window<"u"&&typeof Notification<"u",N4=typeof window<"u"?Boolean(window.isSecureContext):!1,R4=l1&&N4&&l!=="denied",x_=l==="granted"&&d,f4=x_?"Disable notifications":"Enable notifications",D_=b0.length>0||X.length>0||B.length>0,v4=U0==="disconnected"?"Reconnecting":String(U0||"Connecting").replace(/[-_]+/g," ").replace(/^./,(L)=>L.toUpperCase()),Y4=U0==="disconnected"?"Reconnecting":`Connection: ${v4}`,K4=(Array.isArray(V0)?V0:[]).filter((L)=>!L?.archived_at),q_=(()=>{for(let L of Array.isArray(V0)?V0:[]){let y=typeof L?.chat_jid==="string"?L.chat_jid.trim():"";if(y&&y===F0)return L}return null})(),d5=Boolean(q_&&q_.chat_jid===(q_.root_chat_jid||q_.chat_jid)),j1=E0(()=>{let L=new Set,y=[];for(let u of Array.isArray(V0)?V0:[]){let n=typeof u?.chat_jid==="string"?u.chat_jid.trim():"";if(!n||n===F0||L.has(n))continue;if(!(typeof u?.agent_name==="string"?u.agent_name.trim():""))continue;L.add(n),y.push(u)}return y},[V0,F0]),k1=j1.length>0,w_=k1&&typeof A0==="function",e1=k1&&typeof I0==="function",R1=Boolean(g0||M1.current),I1=!j&&typeof m0==="function"&&!R1,i1=!j&&typeof C0==="function",V1=!j&&typeof B0==="function"&&!d5,B1=!j&&(w_||e1||I1||i1||V1),E_=k||"",Q4=J&&E?` (${E})`:"",b4=Q4.trim()?`${E}`:"",H4=typeof T?.hint_short==="string"?T.hint_short.trim():"",d_=[b4||null,H4||null].filter(Boolean).join(" • "),o_=[E_?`Current model: ${E_}${Q4}`:null,T?.plan?`Plan: ${T.plan}`:null,H4||null,T?.primary?.reset_description||null,T?.secondary?.reset_description||null].filter(Boolean),u4=L1?"Switching model…":o_.join(" • ")||`Current model: ${E_}${Q4} (tap to open model picker)`,q4=(L)=>{if(!L||typeof L!=="object")return;let y=L.model??L.current;if(typeof f==="function")f({model:y??null,thinking_level:L.thinking_level??null,supports_thinking:L.supports_thinking,provider_usage:L.provider_usage??null});if(y&&typeof Y0==="function")Y0(y)},H1=(L)=>{let y=L||K1.current;if(!y)return;y.style.height="auto",y.style.height=`${y.scrollHeight}px`,y.style.overflowY="hidden"},O4=(L)=>{if(!L)return{content:L,fileRefs:[]};let u=L.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),n=-1;for(let l0=0;l0<u.length;l0+=1)if(u[l0].trim()==="Files:"&&u[l0+1]&&/^\s*-\s+/.test(u[l0+1])){n=l0;break}if(n===-1)return{content:L,fileRefs:[]};let z0=[],j0=n+1;for(;j0<u.length;j0+=1){let l0=u[j0];if(/^\s*-\s+/.test(l0))z0.push(l0.replace(/^\s*-\s+/,"").trim());else if(!l0.trim())break;else break}if(z0.length===0)return{content:L,fileRefs:[]};let q1=u.slice(0,n),D1=u.slice(j0);return{content:[...q1,...D1].join(`
`).replace(/\n{3,}/g,`

`).trim(),fileRefs:z0}},m4=(L)=>{if(!L)return{content:L,messageRefs:[]};let u=L.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),n=-1;for(let l0=0;l0<u.length;l0+=1)if(u[l0].trim()==="Referenced messages:"&&u[l0+1]&&/^\s*-\s+/.test(u[l0+1])){n=l0;break}if(n===-1)return{content:L,messageRefs:[]};let z0=[],j0=n+1;for(;j0<u.length;j0+=1){let l0=u[j0];if(/^\s*-\s+/.test(l0)){let V4=l0.replace(/^\s*-\s+/,"").trim().match(/^message:(\S+)$/i);if(V4)z0.push(V4[1])}else if(!l0.trim())break;else break}if(z0.length===0)return{content:L,messageRefs:[]};let q1=u.slice(0,n),D1=u.slice(j0);return{content:[...q1,...D1].join(`
`).replace(/\n{3,}/g,`

`).trim(),messageRefs:z0}},t4=(L)=>{let y=O4(L||""),u=m4(y.content||"");return{text:u.content||"",fileRefs:y.fileRefs,messageRefs:u.messageRefs}},R_=(L)=>{if(!L.startsWith("/")||L.includes(`
`)){$1(!1),t0([]);return}let y=L.toLowerCase().split(" ")[0];if(y.length<1){$1(!1),t0([]);return}let u=dZ.filter((n)=>n.name.startsWith(y)||n.name.replace(/-/g,"").startsWith(y.replace(/-/g,"")));if(u.length>0&&!(u.length===1&&u[0].name===y))Q1(!1),Y1([]),t0(u),o0(0),$1(!0);else $1(!1),t0([])},J4=(L)=>{let y=D0,u=y.indexOf(" "),n=u>=0?y.slice(u):"",z0=L.name+n;X0(z0),$1(!1),t0([]),requestAnimationFrame(()=>{let j0=K1.current;if(!j0)return;let q1=z0.length;j0.selectionStart=q1,j0.selectionEnd=q1,j0.focus()})},D4=(L)=>{if(p8(L)==null){Q1(!1),Y1([]);return}let y=Z2(K4,L,{currentChatJid:F0});if(y.length>0&&!(y.length===1&&c8(y[0].agent_name).trim().toLowerCase()===String(L||"").trim().toLowerCase()))$1(!1),t0([]),Y1(y),x0(0),Q1(!0);else Q1(!1),Y1([])},g4=(L)=>{let y=c8(L?.agent_name);if(!y)return;X0(y),Q1(!1),Y1([]),requestAnimationFrame(()=>{let u=K1.current;if(!u)return;let n=y.length;u.selectionStart=n,u.selectionEnd=n,u.focus()})},G4=()=>{if(j||!w_&&!e1&&!I1&&!i1&&!V1)return!1;return N_.current={value:"",updatedAt:0},s1(!1),$1(!1),t0([]),Q1(!1),Y1([]),p0(!0),!0},L_=(L)=>{if(L?.preventDefault?.(),L?.stopPropagation?.(),j||!w_&&!e1&&!I1&&!i1&&!V1)return;if(f0){N_.current={value:"",updatedAt:0},p0(!1);return}G4()},__=(L)=>{let y=typeof L==="string"?L.trim():"";if(p0(!1),!y||y===F0){requestAnimationFrame(()=>K1.current?.focus());return}A0?.(y)},P1=async(L)=>{let y=typeof L==="string"?L.trim():"";if(p0(!1),!y||typeof I0!=="function"){requestAnimationFrame(()=>K1.current?.focus());return}try{await I0(y)}catch(u){console.warn("Failed to restore session:",u),requestAnimationFrame(()=>K1.current?.focus())}},h4=(L)=>{let u=(Array.isArray(L)?L:[]).findIndex((n)=>!n?.disabled);return u>=0?u:0},O1=E0(()=>{let L=[];for(let y of j1){let u=Boolean(y?.archived_at),n=typeof y?.agent_name==="string"?y.agent_name.trim():"",z0=typeof y?.chat_jid==="string"?y.chat_jid.trim():"";if(!n||!z0)continue;L.push({type:"session",key:`session:${z0}`,label:`@${n} — ${z0}${y?.is_active?" active":""}${u?" archived":""}`,chat:y,disabled:u?!e1:!w_})}if(i1)L.push({type:"action",key:"action:new",label:"New session",action:"new",disabled:!1});if(I1)L.push({type:"action",key:"action:rename",label:"Rename current session",action:"rename",disabled:R1});if(V1)L.push({type:"action",key:"action:delete",label:"Delete current session",action:"delete",disabled:!1});return L},[j1,e1,w_,i1,I1,V1,R1]),f_=async(L)=>{if(L?.preventDefault)L.preventDefault();if(L?.stopPropagation)L.stopPropagation();if(typeof m0!=="function"||g0||M1.current)return;M1.current=!0,p0(!1);try{await m0()}catch(y){console.warn("Failed to rename session:",y)}finally{M1.current=!1}requestAnimationFrame(()=>K1.current?.focus())},E4=async()=>{if(typeof C0!=="function")return;p0(!1);try{await C0()}catch(L){console.warn("Failed to create session:",L)}requestAnimationFrame(()=>K1.current?.focus())},A4=async()=>{if(typeof B0!=="function")return;p0(!1);try{await B0(F0)}catch(L){console.warn("Failed to delete session:",L)}requestAnimationFrame(()=>K1.current?.focus())},X4=(L)=>{if(j)d0(L);else X0(L),R_(L),D4(L);requestAnimationFrame(()=>H1())},C1=(L)=>{let y=j?P0:D0,u=y&&!y.endsWith(`
`)?`
`:"",n=`${y}${u}${L}`.trimStart();X4(n)},s_=(L)=>{let y=L?.command?.model_label;if(y)return y;let u=L?.command?.message;if(typeof u==="string"){let n=u.match(/•\s+([^\n]+?)\s+\(current\)/);if(n?.[1])return n[1].trim()}return null},v_=async(L)=>{if(j||L1)return;V_(!0);try{let y=await n4("default",L,null,[],null,F0),u=s_(y);q4({model:u??k??null,thinking_level:y?.command?.thinking_level,supports_thinking:y?.command?.supports_thinking});try{let n=await y$(F0);if(n)q4(n)}catch{}return _?.(),!0}catch(y){return console.error("Failed to switch model:",y),alert("Failed to switch model: "+y.message),!1}finally{V_(!1)}},p4=async()=>{await v_("/cycle-model")},r_=async(L)=>{if(!L||L1)return;if(await v_(`/model ${L}`))s1(!1)},M4=(L)=>{if(!L||L.disabled)return;if(L.type==="session"){let y=L.chat;if(y?.archived_at)P1(y.chat_jid);else __(y.chat_jid);return}if(L.type==="action"){if(L.action==="new"){E4();return}if(L.action==="rename"){f_();return}if(L.action==="delete")A4()}},c4=(L)=>{L.preventDefault(),L.stopPropagation(),N_.current={value:"",updatedAt:0},p0(!1),s1((y)=>!y)},A_=async()=>{if(j)return;P?.(),await M_("/compact",null,{includeMedia:!1,includeFileRefs:!1,includeMessageRefs:!1,clearAfterSubmit:!1,recordHistory:!1})},U_=(L)=>{if(L==="queue"||L==="steer"||L==="auto")return L;return G0?"queue":null},M_=async(L,y,u={})=>{let{includeMedia:n=!0,includeFileRefs:z0=!0,includeMessageRefs:j0=!0,clearAfterSubmit:q1=!0,recordHistory:D1=!0}=u||{},u_=typeof L==="string"?L:L&&typeof L?.target?.value==="string"?L.target.value:D0,l0=typeof u_==="string"?u_:"";if(!l0.trim()&&(n?b0.length===0:!0)&&(z0?X.length===0:!0)&&(j0?B.length===0:!0))return;$1(!1),t0([]),Q1(!1),Y1([]),p0(!1),B_(null);let V4=n?[...b0]:[],e4=z0?[...X]:[],_$=j0?[...B]:[],I4=l0.trim();if(D1&&I4){let n1=Y_.current,T1=S_(n1.filter(($$)=>$$!==I4));if(T1.push(I4),T1.length>200)T1.splice(0,T1.length-200);Y_.current=T1,U1(T1),K_.current=-1,_1.current=""}let m_=()=>{if(n)W1([...V4]);if(z0)H0?.(e4);if(j0)u0?.(_$);X0(I4),requestAnimationFrame(()=>H1())};if(q1)X0(""),W1([]),W?.(),D?.();(async()=>{try{if(await Z0?.({content:I4,submitMode:y,fileRefs:e4,messageRefs:_$,mediaFiles:V4})){_?.();return}let T1=[];for(let z_ of V4){let u1=await I8(z_);T1.push(u1.id)}let $$=e4.length?`Files:
${e4.map((z_)=>`- ${z_}`).join(`
`)}`:"",g_=_$.length?`Referenced messages:
${_$.map((z_)=>`- message:${z_}`).join(`
`)}`:"",P4=T1.length?`Attachments:
${T1.map((z_,u1)=>{let s5=V4[u1]?.name||`attachment-${u1+1}`;return`- attachment:${z_} (${s5})`}).join(`
`)}`:"",r$=[I4,$$,g_,P4].filter(Boolean).join(`

`),t_=await n4("default",r$,null,T1,U_(y),F0);if(N0?.(t_),t_?.command){q4({model:t_.command.model_label??k??null,thinking_level:t_.command.thinking_level,supports_thinking:t_.command.supports_thinking});try{let z_=await y$(F0);if(z_)q4(z_)}catch{}}_?.()}catch(n1){if(q1)m_();let T1=n1?.message||"Failed to send message.";B_(T1),k0?.(T1),console.error("Failed to post:",n1)}})()},l4=(L)=>{e?.(L)},k_=x((L)=>{if(j||!e0&&!f0||L?.isComposing)return!1;let y=()=>{L.preventDefault?.(),L.stopPropagation?.()},u=()=>{N_.current={value:"",updatedAt:0}};if(L.key==="Escape"){if(y(),u(),e0)s1(!1);if(f0)p0(!1);return!0}if(e0){if(L.key==="ArrowDown"){if(y(),u(),w0.length>0)Q0((n)=>(n+1)%w0.length);return!0}if(L.key==="ArrowUp"){if(y(),u(),w0.length>0)Q0((n)=>(n-1+w0.length)%w0.length);return!0}if((L.key==="Enter"||L.key==="Tab")&&w0.length>0)return y(),u(),r_(w0[Math.max(0,Math.min(m,w0.length-1))]),!0;if(m8(L)&&w0.length>0){y();let n=g8(N_.current,L.key);N_.current=n;let z0=h8(w0,n.value,m,(j0)=>j0);if(z0>=0)Q0(z0);return!0}}if(f0){if(L.key==="ArrowDown"){if(y(),u(),O1.length>0)v0((n)=>(n+1)%O1.length);return!0}if(L.key==="ArrowUp"){if(y(),u(),O1.length>0)v0((n)=>(n-1+O1.length)%O1.length);return!0}if((L.key==="Enter"||L.key==="Tab")&&O1.length>0)return y(),u(),M4(O1[Math.max(0,Math.min(O0,O1.length-1))]),!0;if(m8(L)&&O1.length>0){y();let n=g8(N_.current,L.key);N_.current=n;let z0=h8(O1,n.value,O0,(j0)=>j0.label);if(z0>=0)v0(z0);return!0}}return!1},[j,e0,f0,w0,m,O1,O0,r_]),k4=(L)=>{if(L.isComposing)return;if(j&&L.key==="Escape"){L.preventDefault(),d0(""),Q?.();return}if(k_(L))return;let y=K1.current?.value??(j?P0:D0);if(N2(L,y,{searchMode:j,showSessionSwitcherButton:B1})){L.preventDefault(),G4();return}if(Z_&&v1.length>0){let u=K1.current?.value??(j?P0:D0);if(!String(u||"").match(/^@([a-zA-Z0-9_-]*)$/))Q1(!1),Y1([]);else{if(L.key==="ArrowDown"){L.preventDefault(),x0((n)=>(n+1)%v1.length);return}if(L.key==="ArrowUp"){L.preventDefault(),x0((n)=>(n-1+v1.length)%v1.length);return}if(L.key==="Tab"||L.key==="Enter"){L.preventDefault(),g4(v1[p1]);return}if(L.key==="Escape"){L.preventDefault(),Q1(!1),Y1([]);return}}}if(S1&&h0.length>0){let u=K1.current?.value??(j?P0:D0);if(!String(u||"").startsWith("/"))$1(!1),t0([]);else{if(L.key==="ArrowDown"){L.preventDefault(),o0((n)=>(n+1)%h0.length);return}if(L.key==="ArrowUp"){L.preventDefault(),o0((n)=>(n-1+h0.length)%h0.length);return}if(L.key==="Tab"){L.preventDefault(),J4(h0[N1]);return}if(L.key==="Enter"&&!L.shiftKey){if(!y.includes(" ")){L.preventDefault();let z0=h0[N1];$1(!1),t0([]),M_(z0.name);return}}if(L.key==="Escape"){L.preventDefault(),$1(!1),t0([]);return}}}if(!j&&(L.key==="ArrowUp"||L.key==="ArrowDown")&&!L.metaKey&&!L.ctrlKey&&!L.altKey&&!L.shiftKey){let u=K1.current;if(!u)return;let n=u.value||"",z0=u.selectionStart===0&&u.selectionEnd===0,j0=u.selectionStart===n.length&&u.selectionEnd===n.length;if(L.key==="ArrowUp"&&z0||L.key==="ArrowDown"&&j0){let q1=Y_.current;if(!q1.length)return;L.preventDefault();let D1=K_.current;if(L.key==="ArrowUp"){if(D1===-1)_1.current=n,D1=q1.length-1;else if(D1>0)D1-=1;K_.current=D1,X4(q1[D1]||"")}else{if(D1===-1)return;if(D1<q1.length-1)D1+=1,K_.current=D1,X4(q1[D1]||"");else K_.current=-1,X4(_1.current||""),_1.current=""}requestAnimationFrame(()=>{let u_=K1.current;if(!u_)return;let l0=u_.value.length;u_.selectionStart=l0,u_.selectionEnd=l0});return}}if(L.key==="Enter"&&!L.shiftKey&&(L.ctrlKey||L.metaKey)){if(L.preventDefault(),j){if(y.trim())N?.(y.trim(),Z)}else M_(y,"steer");return}if(L.key==="Enter"&&!L.shiftKey)if(L.preventDefault(),j){if(y.trim())N?.(y.trim(),Z)}else M_(y)},a_=(L)=>{let y=Array.from(L||[]).filter((u)=>u instanceof File&&!String(u.name||"").startsWith(".DS_Store"));if(!y.length)return;W1((u)=>[...u,...y]),B_(null)},b_=(L)=>{a_(L.target.files),L.target.value=""},F=(L)=>{if(j)return;L.preventDefault(),L.stopPropagation(),Z4.current+=1,S0(!0)},C=(L)=>{if(j)return;if(L.preventDefault(),L.stopPropagation(),Z4.current=Math.max(0,Z4.current-1),Z4.current===0)S0(!1)},v=(L)=>{if(j)return;if(L.preventDefault(),L.stopPropagation(),L.dataTransfer)L.dataTransfer.dropEffect="copy";S0(!0)},b=(L)=>{if(j)return;L.preventDefault(),L.stopPropagation(),Z4.current=0,S0(!1),a_(L.dataTransfer?.files||[])},o=(L)=>{if(j)return;let y=L.clipboardData?.items;if(!y||!y.length)return;let u=[];for(let n of y){if(n.kind!=="file")continue;let z0=n.getAsFile?.();if(z0)u.push(z0)}if(u.length>0)L.preventDefault(),a_(u)},q0=(L)=>{W1((y)=>y.filter((u,n)=>n!==L))},W0=()=>{B_(null),W1([]),W?.(),D?.()},L0=()=>{if(!navigator.geolocation){alert("Geolocation is not available in this browser.");return}navigator.geolocation.getCurrentPosition((L)=>{let{latitude:y,longitude:u,accuracy:n}=L.coords,z0=`${y.toFixed(5)}, ${u.toFixed(5)}`,j0=Number.isFinite(n)?` ±${Math.round(n)}m`:"",q1=`https://maps.google.com/?q=${y},${u}`,D1=`Location: ${z0}${j0} ${q1}`;C1(D1)},(L)=>{let y=L?.message||"Unable to retrieve location.";alert(`Location error: ${y}`)},{enableHighAccuracy:!0,timeout:1e4,maximumAge:0})};p(()=>{if(!e0)return;N_.current={value:"",updatedAt:0},b1(!0),y$(F0).then((L)=>{let y=Array.isArray(L?.models)?L.models.filter((u)=>typeof u==="string"&&u.trim().length>0):[];y.sort((u,n)=>u.localeCompare(n,void 0,{sensitivity:"base"})),F1(y),q4(L)}).catch((L)=>{console.warn("Failed to load model list:",L),F1([])}).finally(()=>{b1(!1)})},[e0,k]),p(()=>{if(j)s1(!1),p0(!1),$1(!1),t0([]),Q1(!1),Y1([])},[j]),p(()=>{if(f0&&!B1)p0(!1)},[f0,B1]),p(()=>{if(!e0)return;let L=w0.findIndex((y)=>y===k);Q0(L>=0?L:0)},[e0,w0,k]),p(()=>{if(!f0)return;v0(h4(O1)),N_.current={value:"",updatedAt:0}},[f0,F0]),p(()=>{if(!e0)return;let L=(y)=>{let u=r1.current,n=a1.current,z0=y.target;if(u&&u.contains(z0))return;if(n&&n.contains(z0))return;s1(!1)};return document.addEventListener("pointerdown",L),()=>document.removeEventListener("pointerdown",L)},[e0]),p(()=>{if(!f0)return;let L=(y)=>{let u=x1.current,n=i_.current,z0=y.target;if(u&&u.contains(z0))return;if(n&&n.contains(z0))return;p0(!1)};return document.addEventListener("pointerdown",L),()=>document.removeEventListener("pointerdown",L)},[f0]),p(()=>{if(j||!e0&&!f0)return;let L=(y)=>{k_(y)};return document.addEventListener("keydown",L,!0),()=>document.removeEventListener("keydown",L,!0)},[j,e0,f0,k_]),p(()=>{if(!e0)return;let L=r1.current;L?.focus?.(),L?.querySelector?.(".compose-model-popup-item.active")?.scrollIntoView?.({block:"nearest"})},[e0,m,w0]),p(()=>{if(!f0)return;let L=x1.current;L?.focus?.(),L?.querySelector?.(".compose-model-popup-item.active")?.scrollIntoView?.({block:"nearest"})},[f0,O0,O1.length]),p(()=>{let L=()=>{let j0=y_.current?.clientWidth||0;r0((q1)=>q1===j0?q1:j0)};L();let y=y_.current,u=0,n=()=>{if(u)cancelAnimationFrame(u);u=requestAnimationFrame(()=>{u=0,L()})},z0=null;if(y&&typeof ResizeObserver<"u")z0=new ResizeObserver(()=>n()),z0.observe(y);if(typeof window<"u")window.addEventListener("resize",n);return()=>{if(u)cancelAnimationFrame(u);if(z0?.disconnect?.(),typeof window<"u")window.removeEventListener("resize",n)}},[j,k,q_?.agent_name,B1,A?.percent]);let $0=(L)=>{let y=L.target.value;if(B_(null),f0)p0(!1);H1(L.target),X4(y)};return p(()=>{requestAnimationFrame(()=>H1())},[D0,P0,j]),p(()=>{if(j)return;D4(D0)},[K4,F0,D0,j]),z`
        <div class="compose-box">
            ${!j&&c.length>0&&z`
                <div class="compose-queue-stack">
                    ${c.map((L)=>{let y=typeof L?.content==="string"?L.content:"",u=t4(y);if(!u.text.trim()&&u.fileRefs.length===0&&u.messageRefs.length===0)return null;return z`
                            <div class="compose-queue-stack-item" role="listitem">
                                <div class="compose-queue-stack-content" title=${y}>
                                    ${u.text.trim()&&z`
                                        <div class="compose-queue-stack-text">${u.text}</div>
                                    `}
                                    ${(u.messageRefs.length>0||u.fileRefs.length>0)&&z`
                                        <div class="compose-queue-stack-refs">
                                            ${u.messageRefs.map((n)=>z`
                                                <${p_}
                                                    key=${"queue-msg-"+n}
                                                    prefix="compose"
                                                    label=${"msg:"+n}
                                                    title=${"Message reference: "+n}
                                                    icon="message"
                                                />
                                            `)}
                                            ${u.fileRefs.map((n)=>{let z0=n.split("/").pop()||n;return z`
                                                    <${p_}
                                                        key=${"queue-file-"+n}
                                                        prefix="compose"
                                                        label=${z0}
                                                        title=${n}
                                                        onClick=${()=>w?.(n)}
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
                                        onClick=${()=>l4(L)}
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
                                        onClick=${()=>i?.(L)}
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
                class=${`compose-input-wrapper${A1?" drag-active":""}`}
                onDragEnter=${F}
                onDragOver=${v}
                onDragLeave=${C}
                onDrop=${b}
            >
                <div class="compose-input-main">
                    ${J1&&!D_&&z`
                        <div class="compose-submit-error compose-submit-error-top" role="status" aria-live="polite">${J1}</div>
                    `}
                    ${D_&&z`
                        <div class="compose-file-refs">
                            ${J1&&z`
                                <div class="compose-submit-error" role="status" aria-live="polite">${J1}</div>
                            `}
                            ${B.map((L)=>{return z`
                                    <${p_}
                                        key=${"msg-"+L}
                                        prefix="compose"
                                        label=${"msg:"+L}
                                        title=${"Message reference: "+L}
                                        removeTitle="Remove reference"
                                        icon="message"
                                        onRemove=${()=>U?.(L)}
                                    />
                                `})}
                            ${X.map((L)=>{let y=L.split("/").pop()||L;return z`
                                    <${p_}
                                        prefix="compose"
                                        label=${y}
                                        title=${L}
                                        onClick=${()=>w?.(L)}
                                        removeTitle="Remove file"
                                        onRemove=${()=>G?.(L)}
                                    />
                                `})}
                            ${b0.map((L,y)=>{let u=L?.name||`attachment-${y+1}`;return z`
                                    <${p_}
                                        key=${u+y}
                                        prefix="compose"
                                        label=${u}
                                        title=${u}
                                        removeTitle="Remove attachment"
                                        onRemove=${()=>q0(y)}
                                    />
                                `})}
                            <button
                                type="button"
                                class="compose-clear-attachments-btn"
                                onClick=${W0}
                                title="Clear all attachments and references"
                                aria-label="Clear all attachments and references"
                            >
                                Clear all
                            </button>
                        </div>
                    `}
                    ${!j&&typeof K0==="function"&&z`
                        <button
                            type="button"
                            class="compose-popout-btn"
                            onClick=${()=>K0?.()}
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
                        ref=${K1}
                        placeholder=${j?"Search (Enter to run)...":"Message (Enter to send, Shift+Enter for newline)..."}
                        value=${j?P0:D0}
                        onInput=${$0}
                        onKeyDown=${k4}
                        onPaste=${o}
                        onFocus=${$}
                        onClick=${$}
                        rows="1"
                    />
                    ${Z_&&v1.length>0&&z`
                        <div class="slash-autocomplete" ref=${W_}>
                            ${v1.map((L,y)=>z`
                                <div
                                    key=${L.chat_jid||L.agent_name}
                                    class=${`slash-item${y===p1?" active":""}`}
                                    onMouseDown=${(u)=>{u.preventDefault(),g4(L)}}
                                    onMouseEnter=${()=>x0(y)}
                                >
                                    <span class="slash-name">@${L.agent_name}</span>
                                    <span class="slash-desc">${L.chat_jid||"Active agent"}</span>
                                </div>
                            `)}
                        </div>
                    `}
                    ${S1&&h0.length>0&&z`
                        <div class="slash-autocomplete" ref=${J_}>
                            ${h0.map((L,y)=>z`
                                <div
                                    key=${L.name}
                                    class=${`slash-item${y===N1?" active":""}`}
                                    onMouseDown=${(u)=>{u.preventDefault(),J4(L)}}
                                    onMouseEnter=${()=>o0(y)}
                                >
                                    <span class="slash-name">${L.name}</span>
                                    <span class="slash-desc">${L.description}</span>
                                </div>
                            `)}
                        </div>
                    `}
                    ${e0&&!j&&z`
                        <div class="compose-model-popup" ref=${r1} tabIndex="-1" onKeyDown=${k_}>
                            <div class="compose-model-popup-title">Select model</div>
                            <div class="compose-model-popup-menu" role="menu" aria-label="Model picker">
                                ${s0&&z`
                                    <div class="compose-model-popup-empty">Loading models…</div>
                                `}
                                ${!s0&&w0.length===0&&z`
                                    <div class="compose-model-popup-empty">No models available.</div>
                                `}
                                ${!s0&&w0.map((L,y)=>z`
                                    <button
                                        key=${L}
                                        type="button"
                                        role="menuitem"
                                        class=${`compose-model-popup-item${m===y?" active":""}${k===L?" current-model":""}`}
                                        onClick=${()=>{r_(L)}}
                                        disabled=${L1}
                                    >
                                        ${L}
                                    </button>
                                `)}
                            </div>
                            <div class="compose-model-popup-actions">
                                <button
                                    type="button"
                                    class="compose-model-popup-btn"
                                    onClick=${()=>{p4()}}
                                    disabled=${L1}
                                >
                                    Next model
                                </button>
                            </div>
                        </div>
                    `}
                    ${f0&&!j&&z`
                        <div class="compose-model-popup" ref=${x1} tabIndex="-1" onKeyDown=${k_}>
                            <div class="compose-model-popup-title">Manage sessions & agents</div>
                            <div class="compose-model-popup-menu" role="menu" aria-label="Sessions and agents">
                                ${z`
                                    <div class="compose-model-popup-item current" role="note" aria-live="polite">
                                        ${(()=>{return Y2(q_,F0)})()}
                                    </div>
                                `}
                                ${!k1&&z`
                                    <div class="compose-model-popup-empty">No other sessions yet.</div>
                                `}
                                ${k1&&j1.map((L,y)=>{let u=Boolean(L.archived_at),z0=L.chat_jid!==(L.root_chat_jid||L.chat_jid)&&!L.is_active&&!u&&typeof B0==="function",j0=J5(L,{currentChatJid:F0});return z`
                                        <div key=${L.chat_jid} class=${`compose-model-popup-item-row${u?" archived":""}`}>
                                            <button
                                                type="button"
                                                role="menuitem"
                                                class=${`compose-model-popup-item${u?" archived":""}${O0===y?" active":""}`}
                                                onClick=${()=>{if(u){P1(L.chat_jid);return}__(L.chat_jid)}}
                                                disabled=${u?!e1:!w_}
                                                title=${u?`Restore archived ${`@${L.agent_name}`}`:`Switch to ${`@${L.agent_name}`}`}
                                            >
                                                ${j0}
                                            </button>
                                            ${z0&&z`
                                                <button
                                                    type="button"
                                                    class="compose-model-popup-item-delete"
                                                    title="Delete this branch"
                                                    aria-label=${`Delete @${L.agent_name}`}
                                                    onClick=${(q1)=>{q1.stopPropagation(),p0(!1),B0(L.chat_jid)}}
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
                            ${(i1||I1||V1)&&z`
                                <div class="compose-model-popup-actions">
                                    ${i1&&z`
                                        <button
                                            type="button"
                                            class=${`compose-model-popup-btn primary${O1.findIndex((L)=>L.key==="action:new")===O0?" active":""}`}
                                            onClick=${()=>{E4()}}
                                            title="Create a new agent/session branch from this chat"
                                        >
                                            New
                                        </button>
                                    `}
                                    ${I1&&z`
                                        <button
                                            type="button"
                                            class=${`compose-model-popup-btn${O1.findIndex((L)=>L.key==="action:rename")===O0?" active":""}`}
                                            onClick=${(L)=>{f_(L)}}
                                            title="Rename the current branch handle"
                                            disabled=${R1}
                                        >
                                            Rename current…
                                        </button>
                                    `}
                                    ${V1&&z`
                                        <button
                                            type="button"
                                            class=${`compose-model-popup-btn danger${O1.findIndex((L)=>L.key==="action:delete")===O0?" active":""}`}
                                            onClick=${()=>{A4()}}
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
                <div class="compose-footer" ref=${y_}>
                    ${!j&&k&&z`
                    <div class="compose-meta-row">
                        ${!j&&k&&z`
                            <div class="compose-model-meta">
                                <button
                                    ref=${a1}
                                    type="button"
                                    class="compose-model-hint compose-model-hint-btn"
                                    title=${u4}
                                    aria-label="Open model picker"
                                    onClick=${c4}
                                    disabled=${L1}
                                >
                                    ${L1?"Switching…":E_}
                                </button>
                                <div class="compose-model-meta-subline">
                                    ${!L1&&d_&&z`
                                        <span class="compose-model-usage-hint" title=${u4}>
                                            ${d_}
                                        </span>
                                    `}
                                </div>
                            </div>
                        `}
                        ${!j&&A&&A.percent!=null&&z`
                            <${oZ} usage=${A} onCompact=${A_} />
                        `}
                    </div>
                    `}
                    <div class="compose-actions ${j?"search-mode":""}">
                    ${B1&&z`
                        ${q_?.agent_name&&z`
                            <button
                                type="button"
                                class="compose-current-agent-label active"
                                title=${q_.chat_jid||F0}
                                aria-label=${`Manage sessions for @${q_.agent_name}`}
                                onClick=${L_}
                            >@${q_.agent_name}</button>
                        `}
                        <button
                            ref=${i_}
                            type="button"
                            class=${`icon-btn compose-mention-btn${f0?" active":""}`}
                            onClick=${L_}
                            title=${f0?"Hide session manager":"Manage Sessions/Agents"}
                            aria-label="Manage Sessions/Agents"
                            aria-expanded=${f0?"true":"false"}
                        >
                            <svg class="compose-mention-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false">
                                <circle cx="12" cy="12" r="4.25" />
                                <path d="M16.25 7.75v5.4a2.1 2.1 0 0 0 4.2 0V12a8.45 8.45 0 1 0-4.2 7.33" />
                            </svg>
                        </button>
                    `}
                    ${j&&z`
                        <label class="compose-search-scope-wrap" title="Search scope">
                            <span class="compose-search-scope-label">Scope</span>
                            <select
                                class="compose-search-scope-select"
                                value=${Z}
                                onChange=${(L)=>Y?.(L.currentTarget.value)}
                            >
                                <option value="current">Current</option>
                                <option value="root">Branch family</option>
                                <option value="all">All chats</option>
                            </select>
                        </label>
                    `}
                    <button
                        class="icon-btn search-toggle"
                        onClick=${j?Q:K}
                        title=${j?"Close search":"Search"}
                    >
                        ${j?z`
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M18 6L6 18M6 6l12 12"/>
                            </svg>
                        `:z`
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <circle cx="11" cy="11" r="8"/>
                                <path d="M21 21l-4.35-4.35"/>
                            </svg>
                        `}
                    </button>
                    ${c0&&!j&&z`
                        <button
                            class="icon-btn location-btn"
                            onClick=${L0}
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
                    ${R4&&!j&&z`
                        <button
                            class=${`icon-btn notification-btn${x_?" active":""}`}
                            onClick=${t}
                            title=${f4}
                            type="button"
                        >
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M18 8a6 6 0 1 0-12 0c0 7-3 9-3 9h18s-3-2-3-9" />
                                <path d="M13.73 21a2 2 0 0 1-3.46 0" />
                            </svg>
                        </button>
                    `}
                    ${!j&&z`
                        ${R&&H&&z`
                            <button
                                class="icon-btn attach-editor-btn"
                                onClick=${H}
                                title=${`Attach open file: ${R}`}
                                type="button"
                                disabled=${X.includes(R)}
                            >
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"/><polyline points="13 2 13 9 20 9"/></svg>
                            </button>
                        `}
                        <label class="icon-btn" title="Attach file">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>
                            <input type="file" multiple hidden onChange=${b_} />
                        </label>
                    `}
                    ${(U0!=="connected"||!j)&&z`
                        <div class="compose-send-stack">
                            ${U0!=="connected"&&z`
                                <span class="compose-connection-status connection-status ${U0}" title=${Y4}>
                                    ${v4}
                                </span>
                            `}
                            ${!j&&z`
                                <button 
                                    class="icon-btn send-btn" 
                                    type="button"
                                    onClick=${()=>{M_()}}
                                    disabled=${!t1}
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
    `}var o8="piclaw_theme",E5="piclaw_tint",V2="piclaw_chat_themes",R$={bgPrimary:"#ffffff",bgSecondary:"#f7f9fa",bgHover:"#e8ebed",textPrimary:"#0f1419",textSecondary:"#536471",borderColor:"#eff3f4",accent:"#1d9bf0",accentHover:"#1a8cd8",danger:"#f4212e",success:"#00ba7c"},B2={bgPrimary:"#000000",bgSecondary:"#16181c",bgHover:"#1d1f23",textPrimary:"#e7e9ea",textSecondary:"#71767b",borderColor:"#2f3336",accent:"#1d9bf0",accentHover:"#1a8cd8",danger:"#f4212e",success:"#00ba7c"},G2={default:{label:"Default",mode:"auto",light:R$,dark:B2},tango:{label:"Tango",mode:"light",light:{bgPrimary:"#f6f5f4",bgSecondary:"#efedeb",bgHover:"#e5e3e1",textPrimary:"#2e3436",textSecondary:"#5c6466",borderColor:"#d3d7cf",accent:"#3465a4",accentHover:"#2c5890",danger:"#cc0000",success:"#4e9a06"}},xterm:{label:"XTerm",mode:"dark",dark:{bgPrimary:"#000000",bgSecondary:"#0a0a0a",bgHover:"#121212",textPrimary:"#d0d0d0",textSecondary:"#8a8a8a",borderColor:"#1f1f1f",accent:"#00a2ff",accentHover:"#0086d1",danger:"#ff5f5f",success:"#5fff87"}},monokai:{label:"Monokai",mode:"dark",dark:{bgPrimary:"#272822",bgSecondary:"#2f2f2f",bgHover:"#3a3a3a",textPrimary:"#f8f8f2",textSecondary:"#cfcfc2",borderColor:"#3e3d32",accent:"#f92672",accentHover:"#e81560",danger:"#f92672",success:"#a6e22e"}},"monokai-pro":{label:"Monokai Pro",mode:"dark",dark:{bgPrimary:"#2d2a2e",bgSecondary:"#363237",bgHover:"#403a40",textPrimary:"#fcfcfa",textSecondary:"#c1c0c0",borderColor:"#444046",accent:"#ff6188",accentHover:"#f74f7e",danger:"#ff4f5e",success:"#a9dc76"}},ristretto:{label:"Ristretto",mode:"dark",dark:{bgPrimary:"#2c2525",bgSecondary:"#362d2d",bgHover:"#403535",textPrimary:"#f4f1ef",textSecondary:"#cbbdb8",borderColor:"#4a3c3c",accent:"#ff9f43",accentHover:"#f28a2e",danger:"#ff5f56",success:"#a9dc76"}},dracula:{label:"Dracula",mode:"dark",dark:{bgPrimary:"#282a36",bgSecondary:"#303445",bgHover:"#3a3f52",textPrimary:"#f8f8f2",textSecondary:"#c5c8d6",borderColor:"#44475a",accent:"#bd93f9",accentHover:"#a87ded",danger:"#ff5555",success:"#50fa7b"}},catppuccin:{label:"Catppuccin",mode:"dark",dark:{bgPrimary:"#1e1e2e",bgSecondary:"#24273a",bgHover:"#2c2f41",textPrimary:"#cdd6f4",textSecondary:"#a6adc8",borderColor:"#313244",accent:"#89b4fa",accentHover:"#74a0f5",danger:"#f38ba8",success:"#a6e3a1"}},nord:{label:"Nord",mode:"dark",dark:{bgPrimary:"#2e3440",bgSecondary:"#3b4252",bgHover:"#434c5e",textPrimary:"#eceff4",textSecondary:"#d8dee9",borderColor:"#4c566a",accent:"#88c0d0",accentHover:"#78a9c0",danger:"#bf616a",success:"#a3be8c"}},gruvbox:{label:"Gruvbox",mode:"dark",dark:{bgPrimary:"#282828",bgSecondary:"#32302f",bgHover:"#3c3836",textPrimary:"#ebdbb2",textSecondary:"#bdae93",borderColor:"#3c3836",accent:"#d79921",accentHover:"#c28515",danger:"#fb4934",success:"#b8bb26"}},solarized:{label:"Solarized",mode:"auto",light:{bgPrimary:"#fdf6e3",bgSecondary:"#f5efdc",bgHover:"#eee8d5",textPrimary:"#586e75",textSecondary:"#657b83",borderColor:"#e0d8c6",accent:"#268bd2",accentHover:"#1f78b3",danger:"#dc322f",success:"#859900"},dark:{bgPrimary:"#002b36",bgSecondary:"#073642",bgHover:"#0b3c4a",textPrimary:"#eee8d5",textSecondary:"#93a1a1",borderColor:"#18424a",accent:"#268bd2",accentHover:"#1f78b3",danger:"#dc322f",success:"#859900"}},tokyo:{label:"Tokyo",mode:"dark",dark:{bgPrimary:"#1a1b26",bgSecondary:"#24283b",bgHover:"#2f3549",textPrimary:"#c0caf5",textSecondary:"#9aa5ce",borderColor:"#414868",accent:"#7aa2f7",accentHover:"#6b92e6",danger:"#f7768e",success:"#9ece6a"}},miasma:{label:"Miasma",mode:"dark",dark:{bgPrimary:"#1f1f23",bgSecondary:"#29292f",bgHover:"#33333a",textPrimary:"#e5e5e5",textSecondary:"#b4b4b4",borderColor:"#3d3d45",accent:"#c9739c",accentHover:"#b8618c",danger:"#e06c75",success:"#98c379"}},github:{label:"GitHub",mode:"auto",light:{bgPrimary:"#ffffff",bgSecondary:"#f6f8fa",bgHover:"#eaeef2",textPrimary:"#24292f",textSecondary:"#57606a",borderColor:"#d0d7de",accent:"#0969da",accentHover:"#0550ae",danger:"#cf222e",success:"#1a7f37"},dark:{bgPrimary:"#0d1117",bgSecondary:"#161b22",bgHover:"#21262d",textPrimary:"#c9d1d9",textSecondary:"#8b949e",borderColor:"#30363d",accent:"#2f81f7",accentHover:"#1f6feb",danger:"#f85149",success:"#3fb950"}},gotham:{label:"Gotham",mode:"dark",dark:{bgPrimary:"#0b0f14",bgSecondary:"#111720",bgHover:"#18212b",textPrimary:"#cbd6e2",textSecondary:"#9bb0c3",borderColor:"#1f2a37",accent:"#5ccfe6",accentHover:"#48b8ce",danger:"#d26937",success:"#2aa889"}}},sZ=["--bg-primary","--bg-secondary","--bg-hover","--text-primary","--text-secondary","--border-color","--accent-color","--accent-hover","--accent-contrast-text","--accent-soft","--accent-soft-strong","--danger-color","--success-color","--search-highlight-color"],d4={theme:"default",tint:null},W2="light",n8=!1;function A5(_){let $=String(_||"").trim().toLowerCase();if(!$)return"default";if($==="solarized-dark"||$==="solarized-light")return"solarized";if($==="github-dark"||$==="github-light")return"github";if($==="tokyo-night")return"tokyo";return $}function B$(_){if(!_)return null;let $=String(_).trim();if(!$)return null;let j=$.startsWith("#")?$.slice(1):$;if(!/^[0-9a-fA-F]{3}$/.test(j)&&!/^[0-9a-fA-F]{6}$/.test(j))return null;let Z=j.length===3?j.split("").map((Y)=>Y+Y).join(""):j,N=parseInt(Z,16);return{r:N>>16&255,g:N>>8&255,b:N&255,hex:`#${Z.toLowerCase()}`}}function rZ(_){if(!_||typeof document>"u")return null;let $=String(_).trim();if(!$)return null;let j=document.createElement("div");if(j.style.color="",j.style.color=$,!j.style.color)return null;let Z=j.style.color;try{if(document.body)j.style.display="none",document.body.appendChild(j),Z=getComputedStyle(j).color||j.style.color,document.body.removeChild(j)}catch{}let N=Z.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/i);if(!N)return null;let Y=parseInt(N[1],10),K=parseInt(N[2],10),Q=parseInt(N[3],10);if(![Y,K,Q].every((G)=>Number.isFinite(G)))return null;let X=`#${[Y,K,Q].map((G)=>G.toString(16).padStart(2,"0")).join("")}`;return{r:Y,g:K,b:Q,hex:X}}function L2(_){return B$(_)||rZ(_)}function w$(_,$,j){let Z=Math.round(_.r+($.r-_.r)*j),N=Math.round(_.g+($.g-_.g)*j),Y=Math.round(_.b+($.b-_.b)*j);return`rgb(${Z} ${N} ${Y})`}function d8(_,$){return`rgba(${_.r}, ${_.g}, ${_.b}, ${$})`}function aZ(_){let $=_.r/255,j=_.g/255,Z=_.b/255,N=$<=0.03928?$/12.92:Math.pow(($+0.055)/1.055,2.4),Y=j<=0.03928?j/12.92:Math.pow((j+0.055)/1.055,2.4),K=Z<=0.03928?Z/12.92:Math.pow((Z+0.055)/1.055,2.4);return 0.2126*N+0.7152*Y+0.0722*K}function tZ(_){return aZ(_)>0.4?"#000000":"#ffffff"}function U2(){if(typeof window>"u")return"light";try{return window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}catch{return"light"}}function s8(_){return G2[_]||G2.default}function eZ(_){return _.mode==="auto"?U2():_.mode}function z2(_,$){let j=s8(_);if($==="dark"&&j.dark)return j.dark;if($==="light"&&j.light)return j.light;return j.dark||j.light||R$}function F2(_,$,j){let Z=L2($);if(!Z)return _;let N=B$(_.bgPrimary),Y=B$(_.bgSecondary),K=B$(_.bgHover),Q=B$(_.borderColor);if(!N||!Y||!K||!Q)return _;let G=B$(j==="dark"?"#ffffff":"#000000");return{..._,bgPrimary:w$(N,Z,0.08),bgSecondary:w$(Y,Z,0.12),bgHover:w$(K,Z,0.16),borderColor:w$(Q,Z,0.08),accent:Z.hex,accentHover:G?w$(Z,G,0.18):Z.hex}}function _N(_,$){if(typeof document>"u")return;let j=document.documentElement,Z=_.accent,N=L2(Z),Y=N?d8(N,$==="dark"?0.35:0.2):_.searchHighlight||_.searchHighlightColor,K=N?d8(N,$==="dark"?0.16:0.12):"rgba(29, 155, 240, 0.12)",Q=N?d8(N,$==="dark"?0.28:0.2):"rgba(29, 155, 240, 0.2)",X=N?tZ(N):$==="dark"?"#000000":"#ffffff",G={"--bg-primary":_.bgPrimary,"--bg-secondary":_.bgSecondary,"--bg-hover":_.bgHover,"--text-primary":_.textPrimary,"--text-secondary":_.textSecondary,"--border-color":_.borderColor,"--accent-color":Z,"--accent-hover":_.accentHover||Z,"--accent-soft":K,"--accent-soft-strong":Q,"--accent-contrast-text":X,"--danger-color":_.danger||R$.danger,"--success-color":_.success||R$.success,"--search-highlight-color":Y||"rgba(29, 155, 240, 0.2)"};Object.entries(G).forEach(([W,B])=>{if(B)j.style.setProperty(W,B)})}function $N(){if(typeof document>"u")return;let _=document.documentElement;sZ.forEach(($)=>_.style.removeProperty($))}function V$(_,$={}){if(typeof document>"u")return null;let j=typeof $.id==="string"&&$.id.trim()?$.id.trim():null,Z=j?document.getElementById(j):document.querySelector(`meta[name="${_}"]`);if(!Z)Z=document.createElement("meta"),document.head.appendChild(Z);if(Z.setAttribute("name",_),j)Z.setAttribute("id",j);return Z}function X2(_){let $=A5(d4?.theme||"default"),j=d4?.tint?String(d4.tint).trim():null,Z=z2($,_);if($==="default"&&j)Z=F2(Z,j,_);if(Z?.bgPrimary)return Z.bgPrimary;return _==="dark"?B2.bgPrimary:R$.bgPrimary}function jN(_,$){if(typeof document>"u")return;let j=V$("theme-color",{id:"dynamic-theme-color"});if(j&&_)j.removeAttribute("media"),j.setAttribute("content",_);let Z=V$("theme-color",{id:"theme-color-light"});if(Z)Z.setAttribute("media","(prefers-color-scheme: light)"),Z.setAttribute("content",X2("light"));let N=V$("theme-color",{id:"theme-color-dark"});if(N)N.setAttribute("media","(prefers-color-scheme: dark)"),N.setAttribute("content",X2("dark"));let Y=V$("msapplication-TileColor");if(Y&&_)Y.setAttribute("content",_);let K=V$("msapplication-navbutton-color");if(K&&_)K.setAttribute("content",_);let Q=V$("apple-mobile-web-app-status-bar-style");if(Q)Q.setAttribute("content",$==="dark"?"black-translucent":"default")}function ZN(){if(typeof window>"u")return;let _={...d4,mode:W2};window.dispatchEvent(new CustomEvent("piclaw-theme-change",{detail:_}))}function H2(){try{let _=F_(V2);if(!_)return{};let $=JSON.parse(_);return typeof $==="object"&&$!==null?$:{}}catch{return{}}}function NN(_,$,j){let Z=H2();if(!$&&!j)delete Z[_];else Z[_]={theme:$||"default",tint:j||null};Z1(V2,JSON.stringify(Z))}function YN(_){if(!_)return null;return H2()[_]||null}function O2(){if(typeof window>"u")return"web:default";try{let $=new URL(window.location.href).searchParams.get("chat_jid");return $&&$.trim()?$.trim():"web:default"}catch{return"web:default"}}function r8(_,$={}){if(typeof window>"u"||typeof document>"u")return;let j=A5(_?.theme||"default"),Z=_?.tint?String(_.tint).trim():null,N=s8(j),Y=eZ(N),K=z2(j,Y);d4={theme:j,tint:Z},W2=Y;let Q=document.documentElement;Q.dataset.theme=Y,Q.dataset.colorTheme=j,Q.dataset.tint=Z?String(Z):"",Q.style.colorScheme=Y;let X=K;if(j==="default"&&Z)X=F2(K,Z,Y);if(j==="default"&&!Z)$N();else _N(X,Y);if(jN(X.bgPrimary,Y),ZN(),$.persist!==!1)if(Z1(o8,j),Z)Z1(E5,Z);else Z1(E5,"")}function D5(){if(s8(d4.theme).mode!=="auto")return;r8(d4,{persist:!1})}function J2(){if(typeof window>"u")return()=>{};let _=O2(),$=YN(_),j=$?A5($.theme||"default"):A5(F_(o8)||"default"),Z=$?$.tint?String($.tint).trim():null:(()=>{let N=F_(E5);return N?N.trim():null})();if(r8({theme:j,tint:Z},{persist:!1}),window.matchMedia&&!n8){let N=window.matchMedia("(prefers-color-scheme: dark)");if(N.addEventListener)N.addEventListener("change",D5);else if(N.addListener)N.addListener(D5);return n8=!0,()=>{if(N.removeEventListener)N.removeEventListener("change",D5);else if(N.removeListener)N.removeListener(D5);n8=!1}}return()=>{}}function D2(_){if(!_||typeof _!=="object")return;let $=_.chat_jid||_.chatJid||O2(),j=_.theme??_.name??_.colorTheme,Z=_.tint??null;if(NN($,j||"default",Z),r8({theme:j||"default",tint:Z},{persist:!1}),!$||$==="web:default")Z1(o8,j||"default"),Z1(E5,Z||"")}function E2(){if(typeof document>"u")return"light";let _=document.documentElement?.dataset?.theme;if(_==="dark"||_==="light")return _;return U2()}var M5=/#(\w+)/g,KN=new Set(["strong","em","b","i","u","s","br","p","ul","ol","li","blockquote","ruby","rt","rp","span"]),QN=new Set(["a","abbr","blockquote","br","code","div","em","hr","h1","h2","h3","h4","h5","h6","i","img","kbd","li","mark","ol","p","pre","ruby","rt","rp","s","span","strong","sub","sup","table","tbody","td","th","thead","tr","u","ul","math","semantics","mrow","mi","mn","mo","mtext","mspace","msup","msub","msubsup","mfrac","msqrt","mroot","mtable","mtr","mtd","annotation"]),qN=new Set(["class","style","title","role","aria-hidden","aria-label","aria-expanded","aria-live","data-mermaid","data-hashtag"]),GN={a:new Set(["href","target","rel"]),img:new Set(["src","alt","title"])},XN=new Set(["http:","https:","mailto:",""]);function a8(_){return String(_||"").replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/'/g,"&#39;")}function o4(_,$={}){if(!_)return null;let j=String(_).trim();if(!j)return null;if(j.startsWith("#")||j.startsWith("/"))return j;if(j.startsWith("data:")){if($.allowDataImage&&/^data:image\//i.test(j))return j;return null}if(j.startsWith("blob:"))return j;try{let Z=new URL(j,typeof window<"u"?window.location.origin:"http://localhost");if(!XN.has(Z.protocol))return null;return Z.href}catch{return null}}function A2(_,$={}){if(!_)return"";let j=new DOMParser().parseFromString(_,"text/html"),Z=[],N=j.createTreeWalker(j.body,NodeFilter.SHOW_ELEMENT),Y;while(Y=N.nextNode())Z.push(Y);for(let K of Z){let Q=K.tagName.toLowerCase();if(!QN.has(Q)){let G=K.parentNode;if(!G)continue;while(K.firstChild)G.insertBefore(K.firstChild,K);G.removeChild(K);continue}let X=GN[Q]||new Set;for(let G of Array.from(K.attributes)){let W=G.name.toLowerCase(),B=G.value;if(W.startsWith("on")){K.removeAttribute(G.name);continue}if(W.startsWith("data-")||W.startsWith("aria-"))continue;if(X.has(W)||qN.has(W)){if(W==="href"){let U=o4(B);if(!U)K.removeAttribute(G.name);else if(K.setAttribute(G.name,U),Q==="a"&&!K.getAttribute("rel"))K.setAttribute("rel","noopener noreferrer")}else if(W==="src"){let U=Q==="img"&&typeof $.rewriteImageSrc==="function"?$.rewriteImageSrc(B):B,D=o4(U,{allowDataImage:Q==="img"});if(!D)K.removeAttribute(G.name);else K.setAttribute(G.name,D)}continue}K.removeAttribute(G.name)}}return j.body.innerHTML}function M2(_){if(!_)return _;let $=_.replace(/</g,"&lt;").replace(/>/g,"&gt;");return new DOMParser().parseFromString($,"text/html").documentElement.textContent}function k5(_,$=2){if(!_)return _;let j=_;for(let Z=0;Z<$;Z+=1){let N=M2(j);if(N===j)break;j=N}return j}function VN(_){if(!_)return{text:"",blocks:[]};let j=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),Z=[],N=[],Y=!1,K=[];for(let Q of j){if(!Y&&Q.trim().match(/^```mermaid\s*$/i)){Y=!0,K=[];continue}if(Y&&Q.trim().match(/^```\s*$/)){let X=Z.length;Z.push(K.join(`
`)),N.push(`@@MERMAID_BLOCK_${X}@@`),Y=!1,K=[];continue}if(Y)K.push(Q);else N.push(Q)}if(Y)N.push("```mermaid"),N.push(...K);return{text:N.join(`
`),blocks:Z}}function BN(_){if(!_)return _;return k5(_,5)}function WN(_){let $=new TextEncoder().encode(String(_||"")),j="";for(let Z of $)j+=String.fromCharCode(Z);return btoa(j)}function LN(_){let $=atob(String(_||"")),j=new Uint8Array($.length);for(let Z=0;Z<$.length;Z+=1)j[Z]=$.charCodeAt(Z);return new TextDecoder().decode(j)}function UN(_,$){if(!_||!$||$.length===0)return _;return _.replace(/@@MERMAID_BLOCK_(\d+)@@/g,(j,Z)=>{let N=Number(Z),Y=$[N]??"",K=BN(Y);return`<div class="mermaid-container" data-mermaid="${WN(K)}"><div class="mermaid-loading">Loading diagram...</div></div>`})}function k2(_){if(!_)return _;return _.replace(/<code>([\s\S]*?)<\/code>/gi,($,j)=>{if(j.includes(`
`))return`
\`\`\`
${j}
\`\`\`
`;return`\`${j}\``})}var zN={span:new Set(["title","class","lang","dir"])};function FN(_,$){let j=zN[_];if(!j||!$)return"";let Z=[],N=/([a-zA-Z_:][\w:.-]*)(?:\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s"'`=<>]+)))?/g,Y;while(Y=N.exec($)){let K=(Y[1]||"").toLowerCase();if(!K||K.startsWith("on")||!j.has(K))continue;let Q=Y[2]??Y[3]??Y[4]??"";Z.push(` ${K}="${a8(Q)}"`)}return Z.join("")}function I2(_){if(!_)return _;return _.replace(/&lt;([\s\S]*?)&gt;/g,($,j)=>{let Z=j.trim(),N=Z.startsWith("/"),Y=N?Z.slice(1).trim():Z,Q=Y.endsWith("/")?Y.slice(0,-1).trim():Y,[X=""]=Q.split(/\s+/,1),G=X.toLowerCase();if(!G||!KN.has(G))return $;if(G==="br")return N?"":"<br>";if(N)return`</${G}>`;let W=Q.slice(X.length).trim(),B=FN(G,W);return`<${G}${B}>`})}function P2(_){if(!_)return _;let $=(j)=>j.replace(/&amp;lt;/g,"&lt;").replace(/&amp;gt;/g,"&gt;").replace(/&amp;quot;/g,"&quot;").replace(/&amp;#39;/g,"&#39;").replace(/&amp;amp;/g,"&amp;");return _.replace(/<pre><code>([\s\S]*?)<\/code><\/pre>/g,(j,Z)=>`<pre><code>${$(Z)}</code></pre>`).replace(/<code>([\s\S]*?)<\/code>/g,(j,Z)=>`<code>${$(Z)}</code>`)}function C2(_){if(!_)return _;let $=new DOMParser().parseFromString(_,"text/html"),j=$.createTreeWalker($.body,NodeFilter.SHOW_TEXT),Z=(Y)=>Y.replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&quot;/g,'"').replace(/&#39;/g,"'").replace(/&amp;/g,"&"),N;while(N=j.nextNode()){if(!N.nodeValue)continue;let Y=Z(N.nodeValue);if(Y!==N.nodeValue)N.nodeValue=Y}return $.body.innerHTML}function HN(_){if(!window.katex)return _;let $=(K)=>M2(K).replace(/&gt;/g,">").replace(/&lt;/g,"<").replace(/&amp;/g,"&").replace(/<br\s*\/?\s*>/gi,`
`),j=(K)=>{let Q=[],X=K.replace(/<pre\b[^>]*>\s*<code\b[^>]*>[\s\S]*?<\/code>\s*<\/pre>/gi,(G)=>{let W=Q.length;return Q.push(G),`@@CODE_BLOCK_${W}@@`});return X=X.replace(/<code\b[^>]*>[\s\S]*?<\/code>/gi,(G)=>{let W=Q.length;return Q.push(G),`@@CODE_INLINE_${W}@@`}),{html:X,blocks:Q}},Z=(K,Q)=>{if(!Q.length)return K;return K.replace(/@@CODE_(?:BLOCK|INLINE)_(\d+)@@/g,(X,G)=>{let W=Number(G);return Q[W]??""})},N=j(_),Y=N.html;return Y=Y.replace(/(^|\n|<br\s*\/?\s*>|<p>|<\/p>)\s*\$\$([\s\S]+?)\$\$\s*(?=\n|<br\s*\/?\s*>|<\/p>|$)/gi,(K,Q,X)=>{try{let G=katex.renderToString($(X.trim()),{displayMode:!0,throwOnError:!1});return`${Q}${G}`}catch(G){return`<span class="math-error" title="${a8(G.message)}">${K}</span>`}}),Y=Y.replace(/(^|[^\\$])\$(?!\s)([^\n$]+?)\$/g,(K,Q,X)=>{if(/\s$/.test(X))return K;try{let G=katex.renderToString($(X),{displayMode:!1,throwOnError:!1});return`${Q}${G}`}catch(G){return`${Q}<span class="math-error" title="${a8(G.message)}">$${X}$</span>`}}),Z(Y,N.blocks)}function ON(_){if(!_)return _;let $=new DOMParser().parseFromString(_,"text/html"),j=$.createTreeWalker($.body,NodeFilter.SHOW_TEXT),Z=[],N;while(N=j.nextNode())Z.push(N);for(let Y of Z){let K=Y.nodeValue;if(!K)continue;if(M5.lastIndex=0,!M5.test(K))continue;M5.lastIndex=0;let Q=Y.parentElement;if(Q&&(Q.closest("a")||Q.closest("code")||Q.closest("pre")))continue;let X=K.split(M5);if(X.length<=1)continue;let G=$.createDocumentFragment();X.forEach((W,B)=>{if(B%2===1){let U=$.createElement("a");U.setAttribute("href","#"),U.className="hashtag",U.setAttribute("data-hashtag",W),U.textContent=`#${W}`,G.appendChild(U)}else G.appendChild($.createTextNode(W))}),Y.parentNode?.replaceChild(G,Y)}return $.body.innerHTML}function JN(_){if(!_)return _;let j=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),Z=[],N=!1;for(let Y of j){if(!N&&Y.trim().match(/^```(?:math|katex|latex)\s*$/i)){N=!0,Z.push("$$");continue}if(N&&Y.trim().match(/^```\s*$/)){N=!1,Z.push("$$");continue}Z.push(Y)}return Z.join(`
`)}function DN(_){let $=JN(_||""),{text:j,blocks:Z}=VN($),N=k5(j,2),K=k2(N).replace(/</g,"&lt;");return{safeHtml:I2(K),mermaidBlocks:Z}}function H_(_,$,j={}){if(!_)return"";let{safeHtml:Z,mermaidBlocks:N}=DN(_),Y=window.marked?marked.parse(Z,{headerIds:!1,mangle:!1}):Z.replace(/\n/g,"<br>");return Y=P2(Y),Y=C2(Y),Y=HN(Y),Y=ON(Y),Y=UN(Y,N),Y=A2(Y,j),Y}function I5(_){if(!_)return"";let $=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`),j=k5($,2),N=k2(j).replace(/</g,"&lt;").replace(/>/g,"&gt;"),Y=I2(N),K=window.marked?marked.parse(Y):Y.replace(/\n/g,"<br>");return K=P2(K),K=C2(K),K=A2(K),K}function EN(_,$=6){return _.replace(/<polyline\b([^>]*)\bpoints="([^"]+)"([^>]*)\/?\s*>/g,(j,Z,N,Y)=>{let K=N.trim().split(/\s+/).map((X)=>{let[G,W]=X.split(",").map(Number);return{x:G,y:W}});if(K.length<3)return`<polyline${Z}points="${N}"${Y}/>`;let Q=[`M ${K[0].x},${K[0].y}`];for(let X=1;X<K.length-1;X++){let G=K[X-1],W=K[X],B=K[X+1],U=W.x-G.x,D=W.y-G.y,k=B.x-W.x,T=B.y-W.y,E=Math.sqrt(U*U+D*D),J=Math.sqrt(k*k+T*T),A=Math.min($,E/2,J/2);if(A<0.5){Q.push(`L ${W.x},${W.y}`);continue}let P=W.x-U/E*A,d=W.y-D/E*A,l=W.x+k/J*A,t=W.y+T/J*A,f=U*T-D*k>0?1:0;Q.push(`L ${P},${d}`),Q.push(`A ${A},${A} 0 0 ${f} ${l},${t}`)}return Q.push(`L ${K[K.length-1].x},${K[K.length-1].y}`),`<path${Z}d="${Q.join(" ")}"${Y}/>`})}async function W4(_){if(!window.beautifulMermaid)return;let{renderMermaid:$,THEMES:j}=window.beautifulMermaid,N=E2()==="dark"?j["tokyo-night"]:j["github-light"],Y=_.querySelectorAll(".mermaid-container[data-mermaid]");for(let K of Y)try{let Q=K.dataset.mermaid,X=LN(Q||""),G=k5(X,2),W=await $(G,{...N,transparent:!0});W=EN(W),K.innerHTML=W,K.removeAttribute("data-mermaid")}catch(Q){console.error("Mermaid render error:",Q);let X=document.createElement("pre");X.className="mermaid-error",X.textContent=`Diagram error: ${Q.message}`,K.innerHTML="",K.appendChild(X),K.removeAttribute("data-mermaid")}}function T2(_){let $=String(_||"").trim();if(!$.startsWith("/btw"))return null;let j=$.slice(4).trim();if(!j)return{type:"help"};if(j==="clear"||j==="close")return{type:"clear"};return{type:"ask",question:j}}function y2(_){return String(_||"").trim()||"web:default"}function S2(_){if(!_)return!1;let $=String(_.answer||"").trim();return _.status!=="running"&&Boolean($)}function x2(_){if(!_)return!1;return _.status!=="running"}function w2(_){let $=String(_?.question||"").trim(),j=String(_?.answer||"").trim();if(!$&&!j)return"";return["BTW side conversation",$?`Question: ${$}`:null,j?`Answer:
${j}`:null].filter(Boolean).join(`

`)}function R2({session:_,onClose:$,onInject:j,onRetry:Z}){let N=S(null),Y=S(null),K=_?.thinking?I5(_.thinking):"",Q=_?.answer?H_(_.answer,null,{sanitize:!1}):"";if(p(()=>{if(N.current&&K)W4(N.current).catch(()=>{})},[K]),p(()=>{if(Y.current&&Q)W4(Y.current).catch(()=>{})},[Q]),!_)return null;let X=_.status==="running",G=Boolean(String(_.answer||"").trim()),W=Boolean(String(_.thinking||"").trim()),B=S2(_),U=x2(_),D=!X&&G,k=X?"Thinking…":_.status==="error"?"Error":"Done";return z`
        <section class="btw-panel" aria-label="BTW side conversation">
            <div class="btw-panel-header">
                <div class="btw-panel-title-wrap">
                    <span class="btw-panel-title">Question</span>
                    <span class=${`btw-panel-status btw-panel-status-${_.status||"idle"}`}>${k}</span>
                </div>
                <button class="btw-panel-close" onClick=${()=>$?.()} title="Close BTW" aria-label="Close BTW">
                    <svg viewBox="0 0 16 16" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round">
                        <line x1="4" y1="4" x2="12" y2="12"/>
                        <line x1="12" y1="4" x2="4" y2="12"/>
                    </svg>
                </button>
            </div>

            ${_.question&&z`<div class="btw-block btw-question">${_.question}</div>`}
            ${_.error&&z`<div class="btw-block btw-error">${_.error}</div>`}
            ${W&&z`
                <details class="btw-block btw-thinking" open=${X?!0:void 0}>
                    <summary>Thinking</summary>
                    <div
                        class="btw-thinking-body post-content"
                        ref=${N}
                        dangerouslySetInnerHTML=${{__html:K}}
                    ></div>
                </details>
            `}
            ${B&&z`
                <div class="btw-block btw-answer">
                    <div class="btw-answer-label">Answer</div>
                    <div
                        class="btw-answer-body post-content"
                        ref=${Y}
                        dangerouslySetInnerHTML=${{__html:Q}}
                    ></div>
                </div>
            `}

            ${U&&z`
                <div class="btw-panel-footer">
                    <div class="btw-panel-footer-left">
                        ${_.question&&z`
                            <button class="btw-btn btw-btn-secondary" onClick=${()=>Z?.()}>
                                Retry
                            </button>
                        `}
                    </div>
                    <div class="btw-panel-footer-right">
                        <button class="btw-btn btw-btn-primary" onClick=${()=>j?.()} disabled=${!D}>
                            Inject into chat
                        </button>
                    </div>
                </div>
            `}
        </section>
    `}function AN(_){let $=_?.artifact||{},j=$.kind||_?.kind||null;if(j!=="html"&&j!=="svg")return null;if(j==="html"){let N=typeof $.html==="string"?$.html:typeof _?.html==="string"?_.html:"";return N?{kind:j,html:N}:null}let Z=typeof $.svg==="string"?$.svg:typeof _?.svg==="string"?_.svg:"";return Z?{kind:j,svg:Z}:null}function MN(_){let $=_?.artifact&&typeof _.artifact==="object"?_.artifact:{},j=typeof $.svg==="string"?$.svg:typeof _?.svg==="string"?_.svg:"",Z=typeof $.html==="string"?$.html:typeof _?.html==="string"?_.html:typeof _?.w==="string"?_.w:typeof _?.content==="string"?_.content:"",Y=($.kind||_?.kind||null)==="svg"||j?"svg":"html";if(Y==="svg")return j?{kind:Y,svg:j}:{kind:Y};return Z?{kind:Y,html:Z}:{kind:Y}}function y4(_){return typeof _==="number"&&Number.isFinite(_)?_:null}function M0(_){return typeof _==="string"&&_.trim()?_.trim():null}function v2(_,$=!1){let Z=(Array.isArray(_)?_:$?["interactive"]:[]).filter((N)=>typeof N==="string").map((N)=>N.trim().toLowerCase()).filter(Boolean);return Array.from(new Set(Z))}var b2="__PICLAW_WIDGET_HOST__:";function f2(_){return JSON.stringify(_).replace(/</g,"\\u003c").replace(/>/g,"\\u003e").replace(/&/g,"\\u0026").replace(/\u2028/g,"\\u2028").replace(/\u2029/g,"\\u2029")}function t8(_,$){if(!_||_.type!=="generated_widget")return null;let j=AN(_);if(!j)return null;return{title:_.title||_.name||"Generated widget",subtitle:typeof _.subtitle==="string"?_.subtitle:"",description:_.description||_.subtitle||"",originPostId:Number.isFinite($?.id)?$.id:null,originChatJid:typeof $?.chat_jid==="string"?$.chat_jid:null,widgetId:_.widget_id||_.id||null,artifact:j,capabilities:v2(_.capabilities,_.interactive===!0),source:"timeline",status:"final"}}function u2(_){if(!_||typeof _!=="object")return null;let $=MN(_),j=M0(_?.widget_id)||M0(_?.widgetId)||M0(_?.tool_call_id)||M0(_?.toolCallId),Z=M0(_?.tool_call_id)||M0(_?.toolCallId),N=M0(_?.turn_id)||M0(_?.turnId),Y=M0(_?.title)||M0(_?.name)||"Generated widget",K=M0(_?.subtitle)||"",Q=M0(_?.description)||K,X=M0(_?.status),G=X==="loading"||X==="streaming"||X==="final"||X==="error"?X:"streaming";return{title:Y,subtitle:K,description:Q,originPostId:y4(_?.origin_post_id)??y4(_?.originPostId),originChatJid:M0(_?.origin_chat_jid)||M0(_?.originChatJid)||M0(_?.chat_jid)||null,widgetId:j,artifact:$,capabilities:v2(_?.capabilities,!0),source:"live",status:G,turnId:N,toolCallId:Z,width:y4(_?.width),height:y4(_?.height),error:M0(_?.error)}}function m2(_){return t8(_,null)!==null}function h1(_){let $=M0(_?.toolCallId)||M0(_?.tool_call_id);if($)return $;let j=M0(_?.widgetId)||M0(_?.widget_id);if(j)return j;let Z=y4(_?.originPostId)??y4(_?.origin_post_id);if(Z!==null)return`post:${Z}`;return null}function g2(_){let j=(_?.artifact||{}).kind||_?.kind||null,N=(Array.isArray(_?.capabilities)?_.capabilities:[]).some((Y)=>typeof Y==="string"&&Y.trim().toLowerCase()==="interactive");return j==="html"&&(_?.source==="live"||N)}function h2(_){return g2(_)?"allow-downloads allow-scripts":"allow-downloads"}function P5(_){return{title:M0(_?.title)||"Generated widget",widgetId:M0(_?.widgetId)||M0(_?.widget_id),toolCallId:M0(_?.toolCallId)||M0(_?.tool_call_id),turnId:M0(_?.turnId)||M0(_?.turn_id),capabilities:Array.isArray(_?.capabilities)?_.capabilities:[],source:_?.source==="live"?"live":"timeline",status:M0(_?.status)||"final"}}function C5(_){return{...P5(_),subtitle:M0(_?.subtitle)||"",description:M0(_?.description)||"",error:M0(_?.error)||null,width:y4(_?.width),height:y4(_?.height),runtimeState:_?.runtimeState&&typeof _.runtimeState==="object"?_.runtimeState:null}}function T5(_){return`${b2}${JSON.stringify(C5(_))}`}function p2(_){if(typeof _==="string"&&_.trim())return _.trim();if(!_||typeof _!=="object")return null;let $=M0(_.text)||M0(_.content)||M0(_.message)||M0(_.prompt)||M0(_.value);if($)return $;let j=_.data;if(typeof j==="string"&&j.trim())return j.trim();if(j&&typeof j==="object"){let Z=M0(j.text)||M0(j.content)||M0(j.message)||M0(j.prompt)||M0(j.value);if(Z)return Z}return null}function c2(_){if(!_||typeof _!=="object")return!1;return _.close===!0||_.dismiss===!0||_.closeAfterSubmit===!0}function l2(_){let $=M0(_?.status);if($==="loading"||$==="streaming")return"Widget is loading…";if($==="error")return M0(_?.error)||"Widget failed to load.";return"Widget artifact is missing or unsupported."}function kN(_){let $=P5(_);return`<script>
(function () {
  const meta = ${f2($)};
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

  const windowNamePrefix = ${f2(b2)};
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
</script>`}function i2(_){let $=_?.artifact||{},j=$.kind||_?.kind||null,Z=typeof $.html==="string"?$.html:typeof _?.html==="string"?_.html:"",N=typeof $.svg==="string"?$.svg:typeof _?.svg==="string"?_.svg:"",Y=typeof _?.title==="string"&&_.title.trim()?_.title.trim():"Generated widget",K=j==="svg"?N:Z;if(!K)return"";let Q=g2(_),X=["default-src 'none'","img-src data: blob: https: http:","style-src 'unsafe-inline'","font-src data: https: http:","media-src data: blob: https: http:","connect-src 'none'","frame-src 'none'",Q?"script-src 'unsafe-inline'":"script-src 'none'","object-src 'none'","base-uri 'none'","form-action 'none'"].join("; "),G=j==="svg"?`<div class="widget-svg-shell">${K}</div>`:K,W=Q?kN(_):"";return`<!doctype html>
<html>
<head>
<meta charset="utf-8" />
<meta http-equiv="Content-Security-Policy" content="${X}" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<title>${Y.replace(/[<&>]/g,"")}</title>
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
${W}
</head>
<body>${G}</body>
</html>`}function n2({widget:_,onClose:$,onWidgetEvent:j}){let Z=S(null),N=S(!1),Y=E0(()=>i2(_),[_?.artifact?.kind,_?.artifact?.html,_?.artifact?.svg,_?.widgetId,_?.toolCallId,_?.turnId,_?.title]);if(p(()=>{if(!_)return;let J=(A)=>{if(A.key==="Escape")$?.()};return document.addEventListener("keydown",J),()=>document.removeEventListener("keydown",J)},[_,$]),p(()=>{N.current=!1},[Y]),p(()=>{if(!_)return;let J=Z.current;if(!J)return;let A=(Y0)=>{let f=T5(_),R=Y0==="widget.init"?P5(_):C5(_);try{J.name=f}catch{}try{J.contentWindow?.postMessage({__piclawGeneratedWidgetHost:!0,type:Y0,widgetId:_?.widgetId||null,toolCallId:_?.toolCallId||null,turnId:_?.turnId||null,payload:R},"*")}catch{}},P=()=>{A("widget.init"),A("widget.update")},d=()=>{N.current=!0,P()};J.addEventListener("load",d);let t=[0,40,120,300,800].map((Y0)=>setTimeout(P,Y0));return()=>{J.removeEventListener("load",d),t.forEach((Y0)=>clearTimeout(Y0))}},[Y,_?.widgetId,_?.toolCallId,_?.turnId]),p(()=>{if(!_)return;let J=Z.current;if(!J?.contentWindow)return;let A=T5(_),P=C5(_);try{J.name=A}catch{}try{J.contentWindow.postMessage({__piclawGeneratedWidgetHost:!0,type:"widget.update",widgetId:_?.widgetId||null,toolCallId:_?.toolCallId||null,turnId:_?.turnId||null,payload:P},"*")}catch{}return},[_?.widgetId,_?.toolCallId,_?.turnId,_?.status,_?.subtitle,_?.description,_?.error,_?.width,_?.height,_?.runtimeState]),p(()=>{if(!_)return;let J=(A)=>{let P=A?.data;if(!P||P.__piclawGeneratedWidget!==!0)return;let d=Z.current,l=h1(_),t=h1({widgetId:P.widgetId,toolCallId:P.toolCallId});if(t&&l&&t!==l)return;if(!t&&d?.contentWindow&&A.source!==d.contentWindow)return;j?.(P,_)};return window.addEventListener("message",J),()=>window.removeEventListener("message",J)},[_,j]),!_)return null;let Q=(_?.artifact||{}).kind||_?.kind||"html",X=typeof _?.title==="string"&&_.title.trim()?_.title.trim():"Generated widget",G=typeof _?.subtitle==="string"&&_.subtitle.trim()?_.subtitle.trim():"",W=_?.source==="live"?"live":"timeline",B=typeof _?.status==="string"&&_.status.trim()?_.status.trim():"final",U=W==="live"?`Live widget • ${B.toUpperCase()}`:_?.originPostId?`Message #${_.originPostId}`:"Timeline launch",D=typeof _?.description==="string"&&_.description.trim()?_.description.trim():"",k=!Y,T=l2(_),E=h2(_);return z`
        <div class="floating-widget-backdrop" onClick=${()=>$?.()}>
            <section
                class="floating-widget-pane"
                aria-label=${X}
                onClick=${(J)=>J.stopPropagation()}
            >
                <div class="floating-widget-header">
                    <div class="floating-widget-heading">
                        <div class="floating-widget-eyebrow">${U} • ${Q.toUpperCase()}</div>
                        <div class="floating-widget-title">${X}</div>
                        ${(G||D)&&z`
                            <div class="floating-widget-subtitle">${G||D}</div>
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
                    ${k?z`<div class="floating-widget-empty">${T}</div>`:z`
                            <iframe
                                ref=${Z}
                                class="floating-widget-frame"
                                title=${X}
                                name=${T5(_)}
                                sandbox=${E}
                                referrerpolicy="no-referrer"
                                srcdoc=${Y}
                            ></iframe>
                        `}
                </div>
            </section>
        </div>
    `}var d2="PiClaw";function e8(_,$,j=!1){let Z=_||"PiClaw",N=Z.charAt(0).toUpperCase(),Y=["#FF6B6B","#4ECDC4","#45B7D1","#FFA07A","#98D8C8","#F7DC6F","#BB8FCE","#85C1E2","#F8B195","#6C5CE7","#00B894","#FDCB6E","#E17055","#74B9FF","#A29BFE","#FD79A8","#00CEC9","#FFEAA7","#DFE6E9","#FF7675","#55EFC4","#81ECEC","#FAB1A0","#74B9FF","#A29BFE","#FD79A8"],K=N.charCodeAt(0)%Y.length,Q=Y[K],X=Z.trim().toLowerCase(),G=typeof $==="string"?$.trim():"",W=G?G:null,B=j||X==="PiClaw".toLowerCase()||X==="pi";return{letter:N,color:Q,image:W||(B?"/static/icon-192.png":null)}}function o2(_,$){if(!_)return"PiClaw";let j=$[_]?.name||_;return j?j.charAt(0).toUpperCase()+j.slice(1):"PiClaw"}function s2(_,$){if(!_)return null;let j=$[_]||{};return j.avatar_url||j.avatarUrl||j.avatar||null}function r2(_){if(!_)return null;if(typeof document<"u"){let Y=document.documentElement,K=Y?.dataset?.colorTheme||"",Q=Y?.dataset?.tint||"",X=getComputedStyle(Y).getPropertyValue("--accent-color")?.trim();if(X&&(Q||K&&K!=="default"))return X}let $=["#4ECDC4","#FF6B6B","#45B7D1","#BB8FCE","#FDCB6E","#00B894","#74B9FF","#FD79A8","#81ECEC","#FFA07A"],j=String(_),Z=0;for(let Y=0;Y<j.length;Y+=1)Z=(Z*31+j.charCodeAt(Y))%2147483647;let N=Math.abs(Z)%$.length;return $[N]}function IN(_){if(!_||typeof _!=="object")return null;let $=_.started_at??_.startedAt;if(typeof $!=="string"||!$)return null;let j=Date.parse($);return Number.isFinite(j)?j:null}function f$(_){if(!_||typeof _!=="object")return!1;let $=_.intent_key??_.intentKey;return _.type==="intent"&&$==="compaction"}function a2(_){if(!_||typeof _!=="object")return"";let $=_.title;if(typeof $==="string"&&$.trim())return $.trim();let j=_.status;if(typeof j==="string"&&j.trim())return j.trim();return f$(_)?"Compacting context":"Working..."}function PN(_){let $=Math.max(0,Math.floor(_/1000)),j=$%60,Z=Math.floor($/60)%60,N=Math.floor($/3600);if(N>0)return`${N}:${String(Z).padStart(2,"0")}:${String(j).padStart(2,"0")}`;return`${Z}:${String(j).padStart(2,"0")}`}function t2(_,$=Date.now()){let j=IN(_);if(j===null)return null;return PN(Math.max(0,$-j))}function e2({status:_,draft:$,plan:j,thought:Z,pendingRequest:N,intent:Y,turnId:K,steerQueued:Q,onPanelToggle:X}){let B=(B0)=>{if(!B0)return{text:"",totalLines:0,fullText:""};if(typeof B0==="string"){let P0=B0,d0=P0?P0.replace(/\r\n/g,`
`).split(`
`).length:0;return{text:P0,totalLines:d0,fullText:P0}}let I0=B0.text||"",D0=B0.fullText||B0.full_text||I0,X0=Number.isFinite(B0.totalLines)?B0.totalLines:D0?D0.replace(/\r\n/g,`
`).split(`
`).length:0;return{text:I0,totalLines:X0,fullText:D0}},U=160,D=(B0)=>String(B0||"").replace(/<\/?internal>/gi,""),k=(B0)=>{if(!B0)return 1;return Math.max(1,Math.ceil(B0.length/160))},T=(B0,I0,D0)=>{let X0=(B0||"").replace(/\r\n/g,`
`).replace(/\r/g,`
`);if(!X0)return{text:"",omitted:0,totalLines:Number.isFinite(D0)?D0:0,visibleLines:0};let P0=X0.split(`
`),d0=P0.length>I0?P0.slice(0,I0).join(`
`):X0,b0=Number.isFinite(D0)?D0:P0.reduce((S0,h0)=>S0+k(h0),0),W1=d0?d0.split(`
`).reduce((S0,h0)=>S0+k(h0),0):0,A1=Math.max(b0-W1,0);return{text:d0,omitted:A1,totalLines:b0,visibleLines:W1}},E=B(j),J=B(Z),A=B($),P=Boolean(E.text)||E.totalLines>0,d=Boolean(J.text)||J.totalLines>0,l=Boolean(A.fullText?.trim()||A.text?.trim());if(!_&&!l&&!P&&!d&&!N&&!Y)return null;let[t,Y0]=h(new Set),[f,R]=h(()=>Date.now()),H=(B0)=>Y0((I0)=>{let D0=new Set(I0),X0=!D0.has(B0);if(X0)D0.add(B0);else D0.delete(B0);if(typeof X==="function")X(B0,X0);return D0});p(()=>{Y0(new Set)},[K]);let w=f$(_);p(()=>{if(!w)return;R(Date.now());let B0=setInterval(()=>R(Date.now()),1000);return()=>clearInterval(B0)},[w,_?.started_at,_?.startedAt]);let c=_?.turn_id||K,e=r2(c),i=Q?"turn-dot turn-dot-queued":"turn-dot",Z0=(B0)=>B0,N0=Boolean(_?.last_activity||_?.lastActivity),K0=(B0)=>B0==="warning"?"#f59e0b":B0==="error"?"var(--danger-color)":B0==="success"?"var(--success-color)":e,G0=Y?.kind||"info",V0=K0(G0),F0=K0(_?.kind||(w?"warning":"info")),U0="",H0=_?.title,u0=_?.status;if(_?.type==="plan")U0=H0?`Planning: ${H0}`:"Planning...";else if(_?.type==="tool_call")U0=H0?`Running: ${H0}`:"Running tool...";else if(_?.type==="tool_status")U0=H0?`${H0}: ${u0||"Working..."}`:u0||"Working...";else if(_?.type==="error")U0=H0||"Agent error";else U0=H0||u0||"Working...";if(N0)U0="Last activity just now";let k0=({panelTitle:B0,text:I0,fullText:D0,totalLines:X0,maxLines:P0,titleClass:d0,panelKey:b0})=>{let W1=t.has(b0),A1=D0||I0||"",S0=b0==="thought"||b0==="draft"?D(A1):A1,h0=typeof P0==="number",t0=W1&&h0,N1=h0?T(S0,P0,X0):{text:S0||"",omitted:0,totalLines:Number.isFinite(X0)?X0:0};if(!S0&&!(Number.isFinite(N1.totalLines)&&N1.totalLines>0))return null;let o0=`agent-thinking-body${h0?" agent-thinking-body-collapsible":""}`,S1=h0?`--agent-thinking-collapsed-lines: ${P0};`:"";return z`
            <div
                class="agent-thinking"
                data-expanded=${W1?"true":"false"}
                data-collapsible=${h0?"true":"false"}
                style=${e?`--turn-color: ${e};`:""}
            >
                <div class="agent-thinking-title ${d0||""}">
                    ${e&&z`<span class=${i} aria-hidden="true"></span>`}
                    ${B0}
                    ${t0&&z`
                        <button
                            class="agent-thinking-close"
                            aria-label=${`Close ${B0} panel`}
                            onClick=${()=>H(b0)}
                        >
                            ×
                        </button>
                    `}
                </div>
                <div
                    class=${o0}
                    style=${S1}
                    dangerouslySetInnerHTML=${{__html:I5(S0)}}
                />
                ${!W1&&N1.omitted>0&&z`
                    <button class="agent-thinking-truncation" onClick=${()=>H(b0)}>
                        ▸ ${N1.omitted} more lines
                    </button>
                `}
                ${W1&&N1.omitted>0&&z`
                    <button class="agent-thinking-truncation" onClick=${()=>H(b0)}>
                        ▴ show less
                    </button>
                `}
            </div>
        `},A0=N?.tool_call?.title,m0=A0?`Awaiting approval: ${A0}`:"Awaiting approval",g0=w?t2(_,f):null,C0=(B0,I0,D0=null)=>{let X0=a2(B0);return z`
            <div
                class="agent-thinking agent-thinking-intent"
                aria-live="polite"
                style=${I0?`--turn-color: ${I0};`:""}
                title=${B0?.detail||""}
            >
                <div class="agent-thinking-title intent">
                    ${I0&&z`<span class=${i} aria-hidden="true"></span>`}
                    <span class="agent-thinking-title-text">${X0}</span>
                    ${D0&&z`<span class="agent-status-elapsed">${D0}</span>`}
                </div>
                ${B0.detail&&z`<div class="agent-thinking-body">${B0.detail}</div>`}
            </div>
        `};return z`
        <div class="agent-status-panel">
            ${Y&&C0(Y,V0)}
            ${_?.type==="intent"&&C0(_,F0,g0)}
            ${N&&z`
                <div class="agent-status agent-status-request" aria-live="polite" style=${e?`--turn-color: ${e};`:""}>
                    <span class=${i} aria-hidden="true"></span>
                    <div class="agent-status-spinner"></div>
                    <span class="agent-status-text">${m0}</span>
                </div>
            `}
            ${P&&k0({panelTitle:Z0("Planning"),text:E.text,fullText:E.fullText,totalLines:E.totalLines,panelKey:"plan"})}
            ${d&&k0({panelTitle:Z0("Thoughts"),text:J.text,fullText:J.fullText,totalLines:J.totalLines,maxLines:8,titleClass:"thought",panelKey:"thought"})}
            ${l&&k0({panelTitle:Z0("Draft"),text:A.text,fullText:A.fullText,totalLines:A.totalLines,maxLines:8,titleClass:"thought",panelKey:"draft"})}
            ${_&&_?.type!=="intent"&&z`
                <div class=${`agent-status${N0?" agent-status-last-activity":""}${_?.type==="error"?" agent-status-error":""}`} aria-live="polite" style=${e?`--turn-color: ${e};`:""}>
                    ${e&&z`<span class=${i} aria-hidden="true"></span>`}
                    ${_?.type==="error"?z`<span class="agent-status-error-icon" aria-hidden="true">⚠</span>`:!N0&&z`<div class="agent-status-spinner"></div>`}
                    <span class="agent-status-text">${U0}</span>
                </div>
            `}
        </div>
    `}function _7({request:_,onRespond:$}){if(!_)return null;let{request_id:j,tool_call:Z,options:N,chat_jid:Y}=_,K=Z?.title||"Agent Request",Q=Z?.kind||"other",X=Z?.rawInput||{},G=X.command||X.commands&&X.commands[0]||null,W=X.diff||null,B=X.fileName||X.path||null,U=Z?.description||X.description||X.explanation||null,k=(Array.isArray(Z?.locations)?Z.locations:[]).map((P)=>P?.path).filter((P)=>Boolean(P)),T=Array.from(new Set([B,...k].filter(Boolean)));console.log("AgentRequestModal:",{request_id:j,tool_call:Z,options:N});let E=async(P)=>{try{await B5(j,P,Y||null),$()}catch(d){console.error("Failed to respond to agent request:",d)}},J=async()=>{try{await C8(K,`Auto-approved: ${K}`),await B5(j,"approved",Y||null),$()}catch(P){console.error("Failed to add to whitelist:",P)}},A=N&&N.length>0;return z`
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
                ${(U||G||W||T.length>0)&&z`
                    <div class="agent-request-body">
                        ${U&&z`
                            <div class="agent-request-description">${U}</div>
                        `}
                        ${T.length>0&&z`
                            <div class="agent-request-files">
                                <div class="agent-request-subtitle">Files</div>
                                <ul>
                                    ${T.map((P,d)=>z`<li key=${d}>${P}</li>`)}
                                </ul>
                            </div>
                        `}
                        ${G&&z`
                            <pre class="agent-request-command">${G}</pre>
                        `}
                        ${W&&z`
                            <details class="agent-request-diff">
                                <summary>Proposed diff</summary>
                                <pre>${W}</pre>
                            </details>
                        `}
                    </div>
                `}
                <div class="agent-request-actions">
                    ${A?N.map((P)=>z`
                            <button 
                                key=${P.optionId||P.id||String(P)}
                                class="agent-request-btn ${P.kind==="allow_once"||P.kind==="allow_always"?"primary":""}"
                                onClick=${()=>E(P.optionId||P.id||P)}
                            >
                                ${P.name||P.label||P.optionId||P.id||String(P)}
                            </button>
                        `):z`
                        <button class="agent-request-btn primary" onClick=${()=>E("approved")}>
                            Allow
                        </button>
                        <button class="agent-request-btn" onClick=${()=>E("denied")}>
                            Deny
                        </button>
                        <button class="agent-request-btn always-allow" onClick=${J}>
                            Always Allow This
                        </button>
                    `}
                </div>
            </div>
        </div>
    `}function $7(_){let $=new Date(_);if(Number.isNaN($.getTime()))return _;let Z=new Date-$,N=Z/1000,Y=86400000;if(Z<Y){if(N<60)return"just now";if(N<3600)return`${Math.floor(N/60)}m`;return`${Math.floor(N/3600)}h`}if(Z<5*Y){let X=$.toLocaleDateString(void 0,{weekday:"short"}),G=$.toLocaleTimeString(void 0,{hour:"2-digit",minute:"2-digit"});return`${X} ${G}`}let K=$.toLocaleDateString(void 0,{month:"short",day:"numeric"}),Q=$.toLocaleTimeString(void 0,{hour:"2-digit",minute:"2-digit"});return`${K} ${Q}`}function v$(_){if(!Number.isFinite(_))return"0";return Math.round(_).toLocaleString()}function T_(_){if(_<1024)return _+" B";if(_<1048576)return(_/1024).toFixed(1)+" KB";return(_/1048576).toFixed(1)+" MB"}function s4(_){let $=new Date(_);if(Number.isNaN($.getTime()))return _;return $.toLocaleString()}var CN=new Set(["application/json","application/xml","text/csv","text/html","text/markdown","text/plain","text/xml"]),TN=new Set(["text/markdown"]),yN=new Set(["application/msword","application/rtf","application/vnd.ms-excel","application/vnd.ms-powerpoint","application/vnd.oasis.opendocument.presentation","application/vnd.oasis.opendocument.spreadsheet","application/vnd.oasis.opendocument.text","application/vnd.openxmlformats-officedocument.presentationml.presentation","application/vnd.openxmlformats-officedocument.spreadsheetml.sheet","application/vnd.openxmlformats-officedocument.wordprocessingml.document"]),SN=new Set(["application/vnd.jgraph.mxfile"]);function b$(_){return typeof _==="string"?_.trim().toLowerCase():""}function xN(_){let $=b$(_);return!!$&&($.endsWith(".drawio")||$.endsWith(".drawio.xml")||$.endsWith(".drawio.svg")||$.endsWith(".drawio.png"))}function wN(_){let $=b$(_);return!!$&&$.endsWith(".pdf")}function RN(_){let $=b$(_);return!!$&&($.endsWith(".docx")||$.endsWith(".doc")||$.endsWith(".odt")||$.endsWith(".rtf")||$.endsWith(".xlsx")||$.endsWith(".xls")||$.endsWith(".ods")||$.endsWith(".pptx")||$.endsWith(".ppt")||$.endsWith(".odp"))}function u$(_,$){let j=b$(_);if(xN($)||SN.has(j))return"drawio";if(wN($)||j==="application/pdf")return"pdf";if(RN($)||yN.has(j))return"office";if(!j)return"unsupported";if(j.startsWith("image/"))return"image";if(CN.has(j)||j.startsWith("text/"))return"text";return"unsupported"}function j7(_){let $=b$(_);return TN.has($)}function Z7(_){switch(_){case"image":return"Image preview";case"pdf":return"PDF preview";case"office":return"Office viewer";case"drawio":return"Draw.io preview (read-only)";case"text":return"Text preview";default:return"Preview unavailable"}}function fN(_){let j=String(_||"").trim().match(/^#([0-9a-f]{3}|[0-9a-f]{6})$/i);if(!j)return null;let Z=j[1].length===3?j[1].split("").map((N)=>`${N}${N}`).join(""):j[1];return{r:parseInt(Z.slice(0,2),16),g:parseInt(Z.slice(2,4),16),b:parseInt(Z.slice(4,6),16)}}function vN(_){let j=String(_||"").trim().match(/^rgba?\((\d+)[,\s]+(\d+)[,\s]+(\d+)/i);if(!j)return null;let Z=Number(j[1]),N=Number(j[2]),Y=Number(j[3]);if(![Z,N,Y].every((K)=>Number.isFinite(K)))return null;return{r:Z,g:N,b:Y}}function N7(_){return fN(_)||vN(_)}function y5(_){let $=(Y)=>{let K=Y/255;return K<=0.03928?K/12.92:((K+0.055)/1.055)**2.4},j=$(_.r),Z=$(_.g),N=$(_.b);return 0.2126*j+0.7152*Z+0.0722*N}function bN(_,$){let j=Math.max(y5(_),y5($)),Z=Math.min(y5(_),y5($));return(j+0.05)/(Z+0.05)}function uN(_,$,j="#ffffff"){let Z=N7(_);if(!Z)return j;let N=j,Y=-1;for(let K of $){let Q=N7(K);if(!Q)continue;let X=bN(Z,Q);if(X>Y)N=K,Y=X}return N}function _6(){let _=getComputedStyle(document.documentElement),$=(k,T)=>{for(let E of k){let J=_.getPropertyValue(E).trim();if(J)return J}return T},j=$(["--text-primary","--color-text"],"#0f1419"),Z=$(["--text-secondary","--color-text-muted"],"#536471"),N=$(["--bg-primary","--color-bg-primary"],"#ffffff"),Y=$(["--bg-secondary","--color-bg-secondary"],"#f7f9fa"),K=$(["--bg-hover","--bg-tertiary","--color-bg-tertiary"],"#e8ebed"),Q=$(["--accent-color","--color-accent"],"#1d9bf0"),X=$(["--success-color","--color-success"],"#00ba7c"),G=$(["--warning-color","--color-warning","--accent-color"],"#f0b429"),W=$(["--danger-color","--color-error"],"#f4212e"),B=$(["--border-color","--color-border"],"#eff3f4"),U=$(["--font-family"],"system-ui, sans-serif"),D=uN(Q,[j,N],j);return{fg:j,fgMuted:Z,bgPrimary:N,bg:Y,bgEmphasis:K,accent:Q,good:X,warning:G,attention:W,border:B,fontFamily:U,buttonTextColor:D}}function Y7(){let{fg:_,fgMuted:$,bg:j,bgEmphasis:Z,accent:N,good:Y,warning:K,attention:Q,border:X,fontFamily:G}=_6();return{fontFamily:G,containerStyles:{default:{backgroundColor:j,foregroundColors:{default:{default:_,subtle:$},accent:{default:N,subtle:N},good:{default:Y,subtle:Y},warning:{default:K,subtle:K},attention:{default:Q,subtle:Q}}},emphasis:{backgroundColor:Z,foregroundColors:{default:{default:_,subtle:$},accent:{default:N,subtle:N},good:{default:Y,subtle:Y},warning:{default:K,subtle:K},attention:{default:Q,subtle:Q}}}},actions:{actionsOrientation:"horizontal",actionAlignment:"left",buttonSpacing:8,maxActions:5,showCard:{actionMode:"inline"},spacing:"default"},adaptiveCard:{allowCustomStyle:!1},spacing:{small:4,default:8,medium:12,large:16,extraLarge:24,padding:12},separator:{lineThickness:1,lineColor:X},fontSizes:{small:12,default:14,medium:16,large:18,extraLarge:22},fontWeights:{lighter:300,default:400,bolder:600},imageSizes:{small:40,medium:80,large:120},textBlock:{headingLevel:2}}}var mN=new Set(["1.0","1.1","1.2","1.3","1.4","1.5","1.6"]),K7=!1,S5=null,Q7=!1;function $6(_){_.querySelector(".adaptive-card-notice")?.remove()}function gN(_,$,j="error"){$6(_);let Z=document.createElement("div");Z.className=`adaptive-card-notice adaptive-card-notice-${j}`,Z.textContent=$,_.appendChild(Z)}function hN(_,$=(j)=>H_(j,null)){let j=typeof _==="string"?_:String(_??"");if(!j.trim())return{outputHtml:"",didProcess:!1};return{outputHtml:$(j),didProcess:!0}}function pN(_=($)=>H_($,null)){return($,j)=>{try{let Z=hN($,_);j.outputHtml=Z.outputHtml,j.didProcess=Z.didProcess}catch(Z){console.error("[adaptive-card] Failed to process markdown:",Z),j.outputHtml=String($??""),j.didProcess=!1}}}function cN(_){if(Q7||!_?.AdaptiveCard)return;_.AdaptiveCard.onProcessMarkdown=pN(),Q7=!0}async function lN(){if(K7)return;if(S5)return S5;return S5=new Promise((_,$)=>{let j=document.createElement("script");j.src="/static/js/vendor/adaptivecards.min.js",j.onload=()=>{K7=!0,_()},j.onerror=()=>$(Error("Failed to load adaptivecards SDK")),document.head.appendChild(j)}),S5}function iN(){return globalThis.AdaptiveCards}function nN(_){if(!_||typeof _!=="object")return!1;let $=_;return $.type==="adaptive_card"&&typeof $.card_id==="string"&&typeof $.schema_version==="string"&&typeof $.payload==="object"&&$.payload!==null}function dN(_){return mN.has(_)}function Z6(_){if(!Array.isArray(_))return[];return _.filter(nN)}function oN(_){let $=(typeof _?.getJsonTypeName==="function"?_.getJsonTypeName():"")||_?.constructor?.name||"Unknown",j=(typeof _?.title==="string"?_.title:"")||"",Z=(typeof _?.url==="string"?_.url:"")||void 0,N=_?.data??void 0;return{type:$,title:j,data:N,url:Z,raw:_}}function j6(_){if(_==null)return"";if(typeof _==="string")return _.trim();if(typeof _==="number")return String(_);if(typeof _==="boolean")return _?"yes":"no";if(Array.isArray(_))return _.map(($)=>j6($)).filter(Boolean).join(", ");if(typeof _==="object")return Object.entries(_).map(([j,Z])=>`${j}: ${j6(Z)}`).filter((j)=>!j.endsWith(": ")).join(", ");return String(_).trim()}function sN(_,$,j){if($==null)return $;if(_==="Input.Toggle"){if(typeof $==="boolean"){if($)return j?.valueOn??"true";return j?.valueOff??"false"}return typeof $==="string"?$:String($)}if(_==="Input.ChoiceSet"){if(Array.isArray($))return $.join(",");return typeof $==="string"?$:String($)}if(Array.isArray($))return $.join(", ");if(typeof $==="object")return j6($);return typeof $==="string"?$:String($)}function rN(_,$){if(!_||typeof _!=="object")return _;if(!$||typeof $!=="object"||Array.isArray($))return _;let j=$,Z=(N)=>{if(Array.isArray(N))return N.map((Q)=>Z(Q));if(!N||typeof N!=="object")return N;let K={...N};if(typeof K.id==="string"&&K.id in j&&String(K.type||"").startsWith("Input."))K.value=sN(K.type,j[K.id],K);for(let[Q,X]of Object.entries(K))if(Array.isArray(X)||X&&typeof X==="object")K[Q]=Z(X);return K};return Z(_)}function aN(_){_.classList.add("adaptive-card-readonly");for(let $ of Array.from(_.querySelectorAll("input, textarea, select, button"))){let j=$;try{j.setAttribute("aria-disabled","true")}catch{}try{j.setAttribute("tabindex","-1")}catch{}if("disabled"in j)try{j.disabled=!0}catch{}if("readOnly"in j)try{j.readOnly=!0}catch{}}}function tN(_){if(typeof _!=="string"||!_.trim())return"";let $=new Date(_);if(Number.isNaN($.getTime()))return"";return new Intl.DateTimeFormat(void 0,{month:"short",day:"numeric",hour:"numeric",minute:"2-digit"}).format($)}function eN(_){if(_.state==="active")return null;let $=_.state==="completed"?"Submitted":_.state==="cancelled"?"Cancelled":"Failed",j=_.last_submission&&typeof _.last_submission==="object"?_.last_submission:null,Z=j&&typeof j.title==="string"?j.title.trim():"",N=tN(_.completed_at||j?.submitted_at),Y=[Z||null,N||null].filter(Boolean).join(" · ")||null;return{label:$,detail:Y}}async function q7(_,$,j){if(!dN($.schema_version))return console.warn(`[adaptive-card] Unsupported schema version ${$.schema_version} for card ${$.card_id}`),!1;try{await lN()}catch(Z){return console.error("[adaptive-card] Failed to load SDK:",Z),!1}try{let Z=iN();cN(Z);let N=new Z.AdaptiveCard,Y=_6();N.hostConfig=new Z.HostConfig(Y7());let K=$.last_submission&&typeof $.last_submission==="object"?$.last_submission.data:void 0,Q=$.state==="active"?$.payload:rN($.payload,K);N.parse(Q),N.onExecuteAction=(W)=>{let B=oN(W);if(j?.onAction)$6(_),_.classList.add("adaptive-card-busy"),Promise.resolve(j.onAction(B)).catch((U)=>{console.error("[adaptive-card] Action failed:",U);let D=U instanceof Error?U.message:String(U||"Action failed.");gN(_,D||"Action failed.","error")}).finally(()=>{_.classList.remove("adaptive-card-busy")});else console.log("[adaptive-card] Action executed (not wired yet):",B)};let X=N.render();if(!X)return console.warn(`[adaptive-card] Card ${$.card_id} rendered to null`),!1;_.classList.add("adaptive-card-container"),_.style.setProperty("--adaptive-card-button-text-color",Y.buttonTextColor);let G=eN($);if(G){_.classList.add("adaptive-card-finished");let W=document.createElement("div");W.className=`adaptive-card-status adaptive-card-status-${$.state}`;let B=document.createElement("span");if(B.className="adaptive-card-status-label",B.textContent=G.label,W.appendChild(B),G.detail){let U=document.createElement("span");U.className="adaptive-card-status-detail",U.textContent=G.detail,W.appendChild(U)}_.appendChild(W)}if($6(_),_.appendChild(X),G)aN(X);return!0}catch(Z){return console.error(`[adaptive-card] Failed to render card ${$.card_id}:`,Z),!1}}function m$(_){if(_==null)return"";if(typeof _==="string")return _.trim();if(typeof _==="number")return String(_);if(typeof _==="boolean")return _?"yes":"no";if(Array.isArray(_))return _.map(($)=>m$($)).filter(Boolean).join(", ");if(typeof _==="object")return Object.entries(_).filter(([$])=>!$.startsWith("__")).map(([$,j])=>`${$}: ${m$(j)}`).filter(($)=>!$.endsWith(": ")).join(", ");return String(_).trim()}function G7(_){if(typeof _!=="object"||_==null||Array.isArray(_))return[];return Object.entries(_).filter(([$])=>!$.startsWith("__")).map(([$,j])=>({key:$,value:m$(j)})).filter(($)=>$.value)}function _Y(_){if(!_||typeof _!=="object")return!1;let $=_;return $.type==="adaptive_card_submission"&&typeof $.card_id==="string"&&typeof $.source_post_id==="number"&&typeof $.submitted_at==="string"}function N6(_){if(!Array.isArray(_))return[];return _.filter(_Y)}function X7(_){let $=String(_.title||_.card_id||"card").trim()||"card",j=_.data;if(j==null)return`Card submission: ${$}`;if(typeof j==="string"||typeof j==="number"||typeof j==="boolean"){let Z=m$(j);return Z?`Card submission: ${$} — ${Z}`:`Card submission: ${$}`}if(typeof j==="object"){let N=G7(j).map(({key:Y,value:K})=>`${Y}: ${K}`);return N.length>0?`Card submission: ${$} — ${N.join(", ")}`:`Card submission: ${$}`}return`Card submission: ${$}`}function V7(_){let $=String(_.title||_.card_id||"Card submission").trim()||"Card submission",j=G7(_.data),Z=j.length>0?j.slice(0,2).map(({key:Y,value:K})=>`${Y}: ${K}`).join(", "):m$(_.data)||null,N=j.length;return{title:$,summary:Z,fields:j,fieldCount:N,submittedAt:_.submitted_at}}function $Y(_){let $=_?.metadata?.size;return[{label:"Type",value:_?.content_type||"application/octet-stream"},{label:"Size",value:typeof $==="number"?T_($):null},{label:"Added",value:_?.created_at?s4(_.created_at):null}].filter((Z)=>Z.value)}function jY(_,$,j){let Z=encodeURIComponent($||`attachment-${_}`),N=encodeURIComponent(String(_));if(j==="pdf")return`/pdf-viewer/?media=${N}&name=${Z}#media=${N}&name=${Z}`;if(j==="office"){let Y=C_(_);return`/office-viewer/?url=${encodeURIComponent(Y)}&name=${Z}`}if(j==="drawio")return`/drawio/edit.html?media=${N}&name=${Z}&readonly=1#media=${N}&name=${Z}&readonly=1`;return null}function B7({mediaId:_,info:$,onClose:j}){let Z=$?.filename||`attachment-${_}`,N=E0(()=>u$($?.content_type,Z),[$?.content_type,Z]),Y=Z7(N),K=E0(()=>j7($?.content_type),[$?.content_type]),[Q,X]=h(N==="text"),[G,W]=h(""),[B,U]=h(null),D=S(null),k=E0(()=>$Y($),[$]),T=E0(()=>jY(_,Z,N),[_,Z,N]),E=E0(()=>{if(!K||!G)return"";return H_(G)},[K,G]);return p(()=>{let J=(A)=>{if(A.key==="Escape")j()};return document.addEventListener("keydown",J),()=>document.removeEventListener("keydown",J)},[j]),p(()=>{if(!D.current||!E)return;W4(D.current);return},[E]),p(()=>{let J=!1;async function A(){if(N!=="text"){X(!1),U(null);return}X(!0),U(null);try{let P=await x8(_);if(!J)W(P)}catch{if(!J)U("Failed to load text preview.")}finally{if(!J)X(!1)}}return A(),()=>{J=!0}},[_,N]),z`
        <div class="image-modal attachment-preview-modal" onClick=${j}>
            <div class="attachment-preview-shell" onClick=${(J)=>{J.stopPropagation()}}>
                <div class="attachment-preview-header">
                    <div class="attachment-preview-heading">
                        <div class="attachment-preview-title">${Z}</div>
                        <div class="attachment-preview-subtitle">${Y}</div>
                    </div>
                    <div class="attachment-preview-header-actions">
                        ${T&&z`
                            <a
                                href=${T}
                                target="_blank"
                                rel="noopener noreferrer"
                                class="attachment-preview-download"
                                onClick=${(J)=>J.stopPropagation()}
                            >
                                Open in Tab
                            </a>
                        `}
                        <a
                            href=${C_(_)}
                            download=${Z}
                            class="attachment-preview-download"
                            onClick=${(J)=>J.stopPropagation()}
                        >
                            Download
                        </a>
                        <button class="attachment-preview-close" type="button" onClick=${j}>Close</button>
                    </div>
                </div>
                <div class="attachment-preview-body">
                    ${Q&&z`<div class="attachment-preview-state">Loading preview…</div>`}
                    ${!Q&&B&&z`<div class="attachment-preview-state">${B}</div>`}
                    ${!Q&&!B&&N==="image"&&z`
                        <img class="attachment-preview-image" src=${C_(_)} alt=${Z} />
                    `}
                    ${!Q&&!B&&(N==="pdf"||N==="office"||N==="drawio")&&T&&z`
                        <iframe class="attachment-preview-frame" src=${T} title=${Z}></iframe>
                    `}
                    ${!Q&&!B&&N==="drawio"&&z`
                        <div class="attachment-preview-readonly-note">Draw.io preview is read-only. Editing tools are disabled in this preview.</div>
                    `}
                    ${!Q&&!B&&N==="text"&&K&&z`
                        <div
                            ref=${D}
                            class="attachment-preview-markdown post-content"
                            dangerouslySetInnerHTML=${{__html:E}}
                        />
                    `}
                    ${!Q&&!B&&N==="text"&&!K&&z`
                        <pre class="attachment-preview-text">${G}</pre>
                    `}
                    ${!Q&&!B&&N==="unsupported"&&z`
                        <div class="attachment-preview-state">
                            Preview is not available for this file type yet. You can still download it directly.
                        </div>
                    `}
                </div>
                <div class="attachment-preview-meta">
                    ${k.map((J)=>z`
                        <div class="attachment-preview-meta-item" key=${J.label}>
                            <span class="attachment-preview-meta-label">${J.label}</span>
                            <span class="attachment-preview-meta-value">${J.value}</span>
                        </div>
                    `)}
                </div>
            </div>
        </div>
    `}function W7({src:_,onClose:$}){return p(()=>{let j=(Z)=>{if(Z.key==="Escape")$()};return document.addEventListener("keydown",j),()=>document.removeEventListener("keydown",j)},[$]),z`
        <div class="image-modal" onClick=${$}>
            <img src=${_} alt="Full size" />
        </div>
    `}function ZY({mediaId:_,onPreview:$}){let[j,Z]=h(null);if(p(()=>{q$(_).then(Z).catch(()=>{})},[_]),!j)return null;let N=j.filename||"file",Y=j.metadata?.size,K=Y?T_(Y):"",X=u$(j.content_type,j.filename)==="unsupported"?"Details":"Preview";return z`
        <div class="file-attachment" onClick=${(G)=>G.stopPropagation()}>
            <a href=${C_(_)} download=${N} class="file-attachment-main">
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
                        ${K&&z`<span class="file-size">${K}</span>`}
                        ${j.content_type&&z`<span class="file-size">${j.content_type}</span>`}
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
                onClick=${(G)=>{G.preventDefault(),G.stopPropagation(),$?.({mediaId:_,info:j})}}
            >
                ${X}
            </button>
        </div>
    `}function NY({attachment:_,onPreview:$}){let j=Number(_?.id),[Z,N]=h(null);p(()=>{if(!Number.isFinite(j))return;q$(j).then(N).catch(()=>{});return},[j]);let Y=Z?.filename||_.label||`attachment-${_.id}`,K=Number.isFinite(j)?C_(j):null,X=u$(Z?.content_type,Z?.filename||_?.label)==="unsupported"?"Details":"Preview";return z`
        <span class="attachment-pill" title=${Y}>
            ${K?z`
                    <a href=${K} download=${Y} class="attachment-pill-main" onClick=${(G)=>G.stopPropagation()}>
                        <${p_}
                            prefix="post"
                            label=${_.label}
                            title=${Y}
                        />
                    </a>
                `:z`
                    <${p_}
                        prefix="post"
                        label=${_.label}
                        title=${Y}
                    />
                `}
            ${Number.isFinite(j)&&Z&&z`
                <button
                    class="attachment-pill-preview"
                    type="button"
                    title=${X}
                    onClick=${(G)=>{G.preventDefault(),G.stopPropagation(),$?.({mediaId:j,info:Z})}}
                >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8S1 12 1 12z"/>
                        <circle cx="12" cy="12" r="3"/>
                    </svg>
                </button>
            `}
        </span>
    `}function x5({annotations:_}){if(!_)return null;let{audience:$,priority:j,lastModified:Z}=_,N=Z?s4(Z):null;return z`
        <div class="content-annotations">
            ${$&&$.length>0&&z`
                <span class="content-annotation">Audience: ${$.join(", ")}</span>
            `}
            ${typeof j==="number"&&z`
                <span class="content-annotation">Priority: ${j}</span>
            `}
            ${N&&z`
                <span class="content-annotation">Updated: ${N}</span>
            `}
        </div>
    `}function YY({block:_}){let $=_.title||_.name||_.uri,j=_.description,Z=_.size?T_(_.size):"",N=_.mime_type||"",Y=qY(N),K=o4(_.uri);return z`
        <a
            href=${K||"#"}
            class="resource-link"
            target=${K?"_blank":void 0}
            rel=${K?"noopener noreferrer":void 0}
            onClick=${(Q)=>Q.stopPropagation()}>
            <div class="resource-link-main">
                <div class="resource-link-header">
                    <span class="resource-link-icon-inline">${Y}</span>
                    <div class="resource-link-title">${$}</div>
                </div>
                ${j&&z`<div class="resource-link-description">${j}</div>`}
                <div class="resource-link-meta">
                    ${N&&z`<span>${N}</span>`}
                    ${Z&&z`<span>${Z}</span>`}
                </div>
            </div>
            <div class="resource-link-icon">↗</div>
        </a>
    `}function KY({block:_}){let[$,j]=h(!1),Z=_.uri||"Embedded resource",N=_.text||"",Y=Boolean(_.data),K=_.mime_type||"";return z`
        <div class="resource-embed">
            <button class="resource-embed-toggle" onClick=${(Q)=>{Q.preventDefault(),Q.stopPropagation(),j(!$)}}>
                ${$?"▼":"▶"} ${Z}
            </button>
            ${$&&z`
                ${N&&z`<pre class="resource-embed-content">${N}</pre>`}
                ${Y&&z`
                    <div class="resource-embed-blob">
                        <span class="resource-embed-blob-label">Embedded blob</span>
                        ${K&&z`<span class="resource-embed-blob-meta">${K}</span>`}
                        <button class="resource-embed-blob-btn" onClick=${(Q)=>{Q.preventDefault(),Q.stopPropagation();let X=new Blob([Uint8Array.from(atob(_.data),(B)=>B.charCodeAt(0))],{type:K||"application/octet-stream"}),G=URL.createObjectURL(X),W=document.createElement("a");W.href=G,W.download=Z.split("/").pop()||"resource",W.click(),URL.revokeObjectURL(G)}}>Download</button>
                    </div>
                `}
            `}
        </div>
    `}function QY({block:_,post:$,onOpenWidget:j}){if(!_)return null;let Z=t8(_,$),N=m2(_),Y=Z?.artifact?.kind||_?.artifact?.kind||_?.kind||null,K=Z?.title||_.title||_.name||"Generated widget",Q=Z?.description||_.description||_.subtitle||"",X=_.open_label||"Open widget",G=(W)=>{if(W.preventDefault(),W.stopPropagation(),!Z)return;j?.(Z)};return z`
        <div class="generated-widget-launch" onClick=${(W)=>W.stopPropagation()}>
            <div class="generated-widget-launch-header">
                <div class="generated-widget-launch-eyebrow">Generated widget${Y?` • ${String(Y).toUpperCase()}`:""}</div>
                <div class="generated-widget-launch-title">${K}</div>
            </div>
            ${Q&&z`<div class="generated-widget-launch-description">${Q}</div>`}
            <div class="generated-widget-launch-actions">
                <button
                    class="generated-widget-launch-btn"
                    type="button"
                    disabled=${!N}
                    onClick=${G}
                    title=${N?"Open widget in a floating pane":"Unsupported widget artifact"}
                >
                    ${X}
                </button>
                <span class="generated-widget-launch-note">
                    ${N?"Opens in a dismissible floating pane.":"This widget artifact is missing or unsupported."}
                </span>
            </div>
        </div>
    `}function qY(_){if(!_)return"\uD83D\uDCCE";if(_.startsWith("image/"))return"\uD83D\uDDBC️";if(_.startsWith("audio/"))return"\uD83C\uDFB5";if(_.startsWith("video/"))return"\uD83C\uDFAC";if(_.includes("pdf"))return"\uD83D\uDCC4";if(_.includes("zip")||_.includes("gzip"))return"\uD83D\uDDDC️";if(_.startsWith("text/"))return"\uD83D\uDCC4";return"\uD83D\uDCCE"}function GY({preview:_}){let $=o4(_.url),j=o4(_.image,{allowDataImage:!0}),Z=j?`background-image: url('${j}')`:"",N=_.site_name;if(!N&&$)try{N=new URL($).hostname}catch{N=$}return z`
        <a
            href=${$||"#"}
            class="link-preview ${j?"has-image":""}"
            target=${$?"_blank":void 0}
            rel=${$?"noopener noreferrer":void 0}
            onClick=${(Y)=>Y.stopPropagation()}
            style=${Z}>
            <div class="link-preview-overlay">
                <div class="link-preview-site">${N||""}</div>
                <div class="link-preview-title">${_.title}</div>
                ${_.description&&z`
                    <div class="link-preview-description">${_.description}</div>
                `}
            </div>
        </a>
    `}function XY(_,$){return typeof _==="string"?_:""}var VY=1800,BY=`
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <rect x="9" y="9" width="10" height="10" rx="2"></rect>
        <path d="M7 15H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2v1"></path>
    </svg>`,WY=`
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <path d="M20 6L9 17l-5-5"></path>
    </svg>`,LY=`
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <circle cx="12" cy="12" r="9"></circle>
        <path d="M9 9l6 6M15 9l-6 6"></path>
    </svg>`;async function UY(_){let $=typeof _==="string"?_:"";if(!$)return!1;if(navigator.clipboard?.writeText)try{return await navigator.clipboard.writeText($),!0}catch{}try{let j=document.createElement("textarea");j.value=$,j.setAttribute("readonly",""),j.style.position="fixed",j.style.opacity="0",j.style.pointerEvents="none",document.body.appendChild(j),j.select(),j.setSelectionRange(0,j.value.length);let Z=document.execCommand("copy");return document.body.removeChild(j),Z}catch{return!1}}function zY(_){if(!_)return()=>{};let $=Array.from(_.querySelectorAll("pre")).filter((Y)=>Y.querySelector("code"));if($.length===0)return()=>{};let j=new Map,Z=[],N=(Y,K)=>{let Q=K||"idle";if(Y.dataset.copyState=Q,Q==="success")Y.innerHTML=WY,Y.setAttribute("aria-label","Copied"),Y.setAttribute("title","Copied"),Y.classList.add("is-success"),Y.classList.remove("is-error");else if(Q==="error")Y.innerHTML=LY,Y.setAttribute("aria-label","Copy failed"),Y.setAttribute("title","Copy failed"),Y.classList.add("is-error"),Y.classList.remove("is-success");else Y.innerHTML=BY,Y.setAttribute("aria-label","Copy code"),Y.setAttribute("title","Copy code"),Y.classList.remove("is-success","is-error")};return $.forEach((Y)=>{let K=document.createElement("div");K.className="post-code-block",Y.parentNode?.insertBefore(K,Y),K.appendChild(Y);let Q=document.createElement("button");Q.type="button",Q.className="post-code-copy-btn",N(Q,"idle"),K.appendChild(Q);let X=async(G)=>{G.preventDefault(),G.stopPropagation();let B=Y.querySelector("code")?.textContent||"",U=await UY(B);N(Q,U?"success":"error");let D=j.get(Q);if(D)clearTimeout(D);let k=setTimeout(()=>{N(Q,"idle"),j.delete(Q)},VY);j.set(Q,k)};Q.addEventListener("click",X),Z.push(()=>{Q.removeEventListener("click",X);let G=j.get(Q);if(G)clearTimeout(G);if(K.parentNode)K.parentNode.insertBefore(Y,K),K.remove()})}),()=>{Z.forEach((Y)=>Y())}}function FY(_){if(!_)return{content:_,fileRefs:[]};let j=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),Z=-1;for(let G=0;G<j.length;G+=1)if(j[G].trim()==="Files:"&&j[G+1]&&/^\s*-\s+/.test(j[G+1])){Z=G;break}if(Z===-1)return{content:_,fileRefs:[]};let N=[],Y=Z+1;for(;Y<j.length;Y+=1){let G=j[Y];if(/^\s*-\s+/.test(G))N.push(G.replace(/^\s*-\s+/,"").trim());else if(!G.trim())break;else break}if(N.length===0)return{content:_,fileRefs:[]};let K=j.slice(0,Z),Q=j.slice(Y),X=[...K,...Q].join(`
`);return X=X.replace(/\n{3,}/g,`

`).trim(),{content:X,fileRefs:N}}function HY(_){if(!_)return{content:_,messageRefs:[]};let j=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),Z=-1;for(let G=0;G<j.length;G+=1)if(j[G].trim()==="Referenced messages:"&&j[G+1]&&/^\s*-\s+/.test(j[G+1])){Z=G;break}if(Z===-1)return{content:_,messageRefs:[]};let N=[],Y=Z+1;for(;Y<j.length;Y+=1){let G=j[Y];if(/^\s*-\s+/.test(G)){let B=G.replace(/^\s*-\s+/,"").trim().match(/^message:(\S+)$/i);if(B)N.push(B[1])}else if(!G.trim())break;else break}if(N.length===0)return{content:_,messageRefs:[]};let K=j.slice(0,Z),Q=j.slice(Y),X=[...K,...Q].join(`
`);return X=X.replace(/\n{3,}/g,`

`).trim(),{content:X,messageRefs:N}}function OY(_){if(!_)return{content:_,attachments:[]};let j=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),Z=-1;for(let G=0;G<j.length;G+=1){let W=j[G].trim();if((W==="Images:"||W==="Attachments:")&&j[G+1]&&/^\s*-\s+/.test(j[G+1])){Z=G;break}}if(Z===-1)return{content:_,attachments:[]};let N=[],Y=Z+1;for(;Y<j.length;Y+=1){let G=j[Y];if(/^\s*-\s+/.test(G)){let W=G.replace(/^\s*-\s+/,"").trim(),B=W.match(/^attachment:([^\s)]+)\s*(?:\((.+)\))?$/i)||W.match(/^attachment:([^\s]+)\s+(.+)$/i);if(B){let U=B[1],D=(B[2]||"").trim()||U;N.push({id:U,label:D,raw:W})}else N.push({id:null,label:W,raw:W})}else if(!G.trim())break;else break}if(N.length===0)return{content:_,attachments:[]};let K=j.slice(0,Z),Q=j.slice(Y),X=[...K,...Q].join(`
`);return X=X.replace(/\n{3,}/g,`

`).trim(),{content:X,attachments:N}}function JY(_){return _.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function DY(_,$){if(!_||!$)return _;let j=String($).trim().split(/\s+/).filter(Boolean);if(j.length===0)return _;let Z=j.map(JY).sort((W,B)=>B.length-W.length),N=new RegExp(`(${Z.join("|")})`,"gi"),Y=new RegExp(`^(${Z.join("|")})$`,"i"),K=new DOMParser().parseFromString(_,"text/html"),Q=K.createTreeWalker(K.body,NodeFilter.SHOW_TEXT),X=[],G;while(G=Q.nextNode())X.push(G);for(let W of X){let B=W.nodeValue;if(!B||!N.test(B)){N.lastIndex=0;continue}N.lastIndex=0;let U=W.parentElement;if(U&&U.closest("code, pre, script, style"))continue;let D=B.split(N).filter((T)=>T!=="");if(D.length===0)continue;let k=K.createDocumentFragment();for(let T of D)if(Y.test(T)){let E=K.createElement("mark");E.className="search-highlight-term",E.textContent=T,k.appendChild(E)}else k.appendChild(K.createTextNode(T));W.parentNode.replaceChild(k,W)}return K.body.innerHTML}function L7({post:_,onClick:$,onHashtagClick:j,onMessageRef:Z,onScrollToMessage:N,agentName:Y,agentAvatarUrl:K,userName:Q,userAvatarUrl:X,userAvatarBackground:G,onDelete:W,isThreadReply:B,isThreadPrev:U,isThreadNext:D,isRemoving:k,highlightQuery:T,onFileRef:E,onOpenWidget:J}){let[A,P]=h(null),d=S(null),l=_.data,t=l.type==="agent_response",Y0=Q||"You",f=t?Y||d2:Y0,R=t?e8(Y,K,!0):e8(Y0,X),H=typeof G==="string"?G.trim().toLowerCase():"",w=!t&&R.image&&(H==="clear"||H==="transparent"),c=t&&Boolean(R.image),e=`background-color: ${w||c?"transparent":R.color}`,i=l.content_meta,Z0=Boolean(i?.truncated),N0=Boolean(i?.preview),K0=Z0&&!N0,G0=Z0?{originalLength:Number.isFinite(i?.original_length)?i.original_length:l.content?l.content.length:0,maxLength:Number.isFinite(i?.max_length)?i.max_length:0}:null,V0=l.content_blocks||[],F0=l.media_ids||[],U0=XY(l.content,l.link_previews),{content:H0,fileRefs:u0}=FY(U0),{content:k0,messageRefs:A0}=HY(H0),{content:m0,attachments:g0}=OY(k0);U0=m0;let C0=Z6(V0),B0=N6(V0),I0=C0.length===1&&typeof C0[0]?.fallback_text==="string"?C0[0].fallback_text.trim():"",D0=B0.length===1?X7(B0[0]).trim():"",X0=Boolean(I0)&&U0?.trim()===I0||Boolean(D0)&&U0?.trim()===D0,P0=Boolean(U0)&&!K0&&!X0,d0=typeof T==="string"?T.trim():"",b0=E0(()=>{if(!U0||X0)return"";let m=H_(U0,j);return d0?DY(m,d0):m},[U0,X0,d0]),W1=(m,Q0)=>{m.stopPropagation(),P(C_(Q0))},[A1,S0]=h(null),h0=(m)=>{S0(m)},t0=(m)=>{m.stopPropagation(),W?.(_)},N1=(m,Q0)=>{let O0=new Set;if(!m||Q0.length===0)return{content:m,usedIds:O0};return{content:m.replace(/attachment:([^\s)"']+)/g,(s0,b1,c1,r0)=>{let J1=b1.replace(/^\/+/,""),K1=Q0.find((W_)=>W_.name&&W_.name.toLowerCase()===J1.toLowerCase()&&!O0.has(W_.id))||Q0.find((W_)=>!O0.has(W_.id));if(!K1)return s0;if(O0.add(K1.id),r0.slice(Math.max(0,c1-2),c1)==="](")return`/media/${K1.id}`;return K1.name||"attachment"}),usedIds:O0}},o0=[],S1=[],$1=[],v1=[],Y1=[],p1=[],x0=[],Z_=0;if(V0.length>0)V0.forEach((m)=>{if(m?.type==="text"&&m.annotations)x0.push(m.annotations);if(m?.type==="generated_widget")p1.push(m);else if(m?.type==="resource_link")v1.push(m);else if(m?.type==="resource")Y1.push(m);else if(m?.type==="file"){let Q0=F0[Z_++];if(Q0)S1.push(Q0),$1.push({id:Q0,name:m?.name||m?.filename||m?.title})}else if(m?.type==="image"||!m?.type){let Q0=F0[Z_++];if(Q0){let O0=typeof m?.mime_type==="string"?m.mime_type:void 0;o0.push({id:Q0,annotations:m?.annotations,mimeType:O0}),$1.push({id:Q0,name:m?.name||m?.filename||m?.title})}}});else if(F0.length>0){let m=g0.length>0;F0.forEach((Q0,O0)=>{let v0=g0[O0]||null;if($1.push({id:Q0,name:v0?.label||null}),m)S1.push(Q0);else o0.push({id:Q0,annotations:null})})}if(g0.length>0)g0.forEach((m)=>{if(!m?.id)return;let Q0=$1.find((O0)=>String(O0.id)===String(m.id));if(Q0&&!Q0.name)Q0.name=m.label});let{content:Q1,usedIds:L1}=N1(U0,$1);U0=Q1;let V_=o0.filter(({id:m})=>!L1.has(m)),e0=S1.filter((m)=>!L1.has(m)),s1=g0.length>0?g0.map((m,Q0)=>({id:m.id||`attachment-${Q0+1}`,label:m.label||`attachment-${Q0+1}`})):$1.map((m,Q0)=>({id:m.id,label:m.name||`attachment-${Q0+1}`})),f0=E0(()=>Z6(V0),[V0]),p0=E0(()=>N6(V0),[V0]),w0=E0(()=>{return f0.map((m)=>`${m.card_id}:${m.state}`).join("|")},[f0]);p(()=>{if(!d.current)return;return W4(d.current),zY(d.current)},[b0]);let F1=S(null);return p(()=>{if(!F1.current||f0.length===0)return;let m=F1.current;m.innerHTML="";for(let Q0 of f0){let O0=document.createElement("div");m.appendChild(O0),q7(O0,Q0,{onAction:async(v0)=>{if(v0.type==="Action.OpenUrl"){let s0=o4(v0.url||"");if(!s0)throw Error("Invalid URL");window.open(s0,"_blank","noopener,noreferrer");return}if(v0.type==="Action.Submit"){await P8({post_id:_.id,thread_id:l.thread_id||_.id,chat_jid:_.chat_jid||null,card_id:Q0.card_id,action:{type:v0.type,title:v0.title||"",data:v0.data}});return}console.warn("[post] unsupported adaptive card action:",v0.type,v0)}}).catch((v0)=>{console.error("[post] adaptive card render error:",v0),O0.textContent=Q0.fallback_text||"Card failed to render."})}},[w0,_.id]),z`
        <div id=${`post-${_.id}`} class="post ${t?"agent-post":""} ${B?"thread-reply":""} ${U?"thread-prev":""} ${D?"thread-next":""} ${k?"removing":""}" onClick=${$}>
            <div class="post-avatar ${t?"agent-avatar":""} ${R.image?"has-image":""}" style=${e}>
                ${R.image?z`<img src=${R.image} alt=${f} />`:R.letter}
            </div>
            <div class="post-body">
                <button
                    class="post-delete-btn"
                    type="button"
                    title="Delete message"
                    aria-label="Delete message"
                    onClick=${t0}
                >
                    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <path d="M18 6L6 18M6 6l12 12" />
                    </svg>
                </button>
                <div class="post-meta">
                    <span class="post-author">${f}</span>
                    <a class="post-time" href=${`#msg-${_.id}`} onClick=${(m)=>{if(m.preventDefault(),m.stopPropagation(),Z)Z(_.id)}}>${$7(_.timestamp)}</a>
                </div>
                ${K0&&G0&&z`
                    <div class="post-content truncated">
                        <div class="truncated-title">Message too large to display.</div>
                        <div class="truncated-meta">
                            Original length: ${v$(G0.originalLength)} chars
                            ${G0.maxLength?z` • Display limit: ${v$(G0.maxLength)} chars`:""}
                        </div>
                    </div>
                `}
                ${N0&&G0&&z`
                    <div class="post-content preview">
                        <div class="truncated-title">Preview truncated.</div>
                        <div class="truncated-meta">
                            Showing first ${v$(G0.maxLength)} of ${v$(G0.originalLength)} chars. Download full text below.
                        </div>
                    </div>
                `}
                ${(u0.length>0||A0.length>0||s1.length>0)&&z`
                    <div class="post-file-refs">
                        ${A0.map((m)=>{let Q0=(O0)=>{if(O0.preventDefault(),O0.stopPropagation(),N)N(m,_.chat_jid||null);else{let v0=document.getElementById("post-"+m);if(v0)v0.scrollIntoView({behavior:"smooth",block:"center"}),v0.classList.add("post-highlight"),setTimeout(()=>v0.classList.remove("post-highlight"),2000)}};return z`
                                <a href=${`#msg-${m}`} class="post-msg-pill-link" onClick=${Q0}>
                                    <${p_}
                                        prefix="post"
                                        label=${"msg:"+m}
                                        title=${"Message "+m}
                                        icon="message"
                                        onClick=${Q0}
                                    />
                                </a>
                            `})}
                        ${u0.map((m)=>{let Q0=m.split("/").pop()||m;return z`
                                <${p_}
                                    prefix="post"
                                    label=${Q0}
                                    title=${m}
                                    onClick=${()=>E?.(m)}
                                />
                            `})}
                        ${s1.map((m)=>z`
                            <${NY}
                                key=${m.id}
                                attachment=${m}
                                onPreview=${h0}
                            />
                        `)}
                    </div>
                `}
                ${P0&&z`
                    <div 
                        ref=${d}
                        class="post-content"
                        dangerouslySetInnerHTML=${{__html:b0}}
                        onClick=${(m)=>{if(m.target.classList.contains("hashtag")){m.preventDefault(),m.stopPropagation();let Q0=m.target.dataset.hashtag;if(Q0)j?.(Q0)}else if(m.target.tagName==="IMG")m.preventDefault(),m.stopPropagation(),P(m.target.src)}}
                    />
                `}
                ${f0.length>0&&z`
                    <div ref=${F1} class="post-adaptive-cards" />
                `}
                ${p0.length>0&&z`
                    <div class="post-adaptive-card-submissions">
                        ${p0.map((m,Q0)=>{let O0=V7(m),v0=`${m.card_id}-${Q0}`;return z`
                                <div key=${v0} class="adaptive-card-submission-receipt">
                                    <div class="adaptive-card-submission-header">
                                        <span class="adaptive-card-submission-icon" aria-hidden="true">✓</span>
                                        <div class="adaptive-card-submission-title-wrap">
                                            <span class="adaptive-card-submission-title">Submitted</span>
                                            <span class="adaptive-card-submission-title-action">${O0.title}</span>
                                        </div>
                                    </div>
                                    ${O0.fields.length>0&&z`
                                        <div class="adaptive-card-submission-fields">
                                            ${O0.fields.map((s0)=>z`
                                                <span class="adaptive-card-submission-field" title=${`${s0.key}: ${s0.value}`}>
                                                    <span class="adaptive-card-submission-field-key">${s0.key}</span>
                                                    <span class="adaptive-card-submission-field-sep">:</span>
                                                    <span class="adaptive-card-submission-field-value">${s0.value}</span>
                                                </span>
                                            `)}
                                        </div>
                                    `}
                                    <div class="adaptive-card-submission-meta">
                                        Submitted ${s4(O0.submittedAt)}
                                    </div>
                                </div>
                            `})}
                    </div>
                `}
                ${p1.length>0&&z`
                    <div class="generated-widget-launches">
                        ${p1.map((m,Q0)=>z`
                            <${QY}
                                key=${m.widget_id||m.id||`${_.id}-widget-${Q0}`}
                                block=${m}
                                post=${_}
                                onOpenWidget=${J}
                            />
                        `)}
                    </div>
                `}
                ${x0.length>0&&z`
                    ${x0.map((m,Q0)=>z`
                        <${x5} key=${Q0} annotations=${m} />
                    `)}
                `}
                ${V_.length>0&&z`
                    <div class="media-preview">
                        ${V_.map(({id:m,mimeType:Q0})=>{let v0=typeof Q0==="string"&&Q0.toLowerCase().startsWith("image/svg")?C_(m):S8(m);return z`
                                <img 
                                    key=${m} 
                                    src=${v0} 
                                    alt="Media" 
                                    loading="lazy"
                                    onClick=${(s0)=>W1(s0,m)}
                                />
                            `})}
                    </div>
                `}
                ${V_.length>0&&z`
                    ${V_.map(({annotations:m},Q0)=>z`
                        ${m&&z`<${x5} key=${Q0} annotations=${m} />`}
                    `)}
                `}
                ${e0.length>0&&z`
                    <div class="file-attachments">
                        ${e0.map((m)=>z`
                            <${ZY} key=${m} mediaId=${m} onPreview=${h0} />
                        `)}
                    </div>
                `}
                ${v1.length>0&&z`
                    <div class="resource-links">
                        ${v1.map((m,Q0)=>z`
                            <div key=${Q0}>
                                <${YY} block=${m} />
                                <${x5} annotations=${m.annotations} />
                            </div>
                        `)}
                    </div>
                `}
                ${Y1.length>0&&z`
                    <div class="resource-embeds">
                        ${Y1.map((m,Q0)=>z`
                            <div key=${Q0}>
                                <${KY} block=${m} />
                                <${x5} annotations=${m.annotations} />
                            </div>
                        `)}
                    </div>
                `}
                ${l.link_previews?.length>0&&z`
                    <div class="link-previews">
                        ${l.link_previews.map((m,Q0)=>z`
                            <${GY} key=${Q0} preview=${m} />
                        `)}
                    </div>
                `}
            </div>
        </div>
        ${A&&z`<${W7} src=${A} onClose=${()=>P(null)} />`}
        ${A1&&z`
            <${B7}
                mediaId=${A1.mediaId}
                info=${A1.info}
                onClose=${()=>S0(null)}
            />
        `}
    `}function U7({posts:_,hasMore:$,onLoadMore:j,onPostClick:Z,onHashtagClick:N,onMessageRef:Y,onScrollToMessage:K,onFileRef:Q,onOpenWidget:X,emptyMessage:G,timelineRef:W,agents:B,user:U,onDeletePost:D,reverse:k=!0,removingPostIds:T,searchQuery:E}){let[J,A]=h(!1),P=S(null),d=typeof IntersectionObserver<"u",l=x(async()=>{if(!j||!$||J)return;A(!0);try{await j({preserveScroll:!0,preserveMode:"top"})}finally{A(!1)}},[$,J,j]),t=x((i)=>{let{scrollTop:Z0,scrollHeight:N0,clientHeight:K0}=i.target,G0=k?N0-K0-Z0:Z0,V0=Math.max(300,K0);if(G0<V0)l()},[k,l]);p(()=>{if(!d)return;let i=P.current,Z0=W?.current;if(!i||!Z0)return;let N0=300,K0=new IntersectionObserver((G0)=>{for(let V0 of G0){if(!V0.isIntersecting)continue;l()}},{root:Z0,rootMargin:`${N0}px 0px ${N0}px 0px`,threshold:0});return K0.observe(i),()=>K0.disconnect()},[d,$,j,W,l]);let Y0=S(l);if(Y0.current=l,p(()=>{if(d)return;if(!W?.current)return;let{scrollTop:i,scrollHeight:Z0,clientHeight:N0}=W.current,K0=k?Z0-N0-i:i,G0=Math.max(300,N0);if(K0<G0)Y0.current?.()},[d,_,$,k,W]),p(()=>{if(!W?.current)return;if(!$||J)return;let{scrollTop:i,scrollHeight:Z0,clientHeight:N0}=W.current,K0=k?Z0-N0-i:i,G0=Math.max(300,N0);if(Z0<=N0+1||K0<G0)Y0.current?.()},[_,$,J,k,W]),!_)return z`<div class="loading"><div class="spinner"></div></div>`;if(_.length===0)return z`
            <div class="timeline" ref=${W}>
                <div class="timeline-content">
                    <div style="padding: var(--spacing-xl); text-align: center; color: var(--text-secondary)">
                        ${G||"No messages yet. Start a conversation!"}
                    </div>
                </div>
            </div>
        `;let f=_.slice().sort((i,Z0)=>i.id-Z0.id),R=(i)=>{let Z0=i?.data?.thread_id;if(Z0===null||Z0===void 0||Z0==="")return null;let N0=Number(Z0);return Number.isFinite(N0)?N0:null},H=new Map;for(let i=0;i<f.length;i+=1){let Z0=f[i],N0=Number(Z0?.id),K0=R(Z0);if(K0!==null){let G0=H.get(K0)||{anchorIndex:-1,replyIndexes:[]};G0.replyIndexes.push(i),H.set(K0,G0)}else if(Number.isFinite(N0)){let G0=H.get(N0)||{anchorIndex:-1,replyIndexes:[]};G0.anchorIndex=i,H.set(N0,G0)}}let w=new Map;for(let[i,Z0]of H.entries()){let N0=new Set;if(Z0.anchorIndex>=0)N0.add(Z0.anchorIndex);for(let K0 of Z0.replyIndexes)N0.add(K0);w.set(i,Array.from(N0).sort((K0,G0)=>K0-G0))}let c=f.map((i,Z0)=>{let N0=R(i);if(N0===null)return{hasThreadPrev:!1,hasThreadNext:!1};let K0=w.get(N0);if(!K0||K0.length===0)return{hasThreadPrev:!1,hasThreadNext:!1};let G0=K0.indexOf(Z0);if(G0<0)return{hasThreadPrev:!1,hasThreadNext:!1};return{hasThreadPrev:G0>0,hasThreadNext:G0<K0.length-1}}),e=z`<div class="timeline-sentinel" ref=${P}></div>`;return z`
        <div class="timeline ${k?"reverse":"normal"}" ref=${W} onScroll=${t}>
            <div class="timeline-content">
                ${k?e:null}
                ${f.map((i,Z0)=>{let N0=Boolean(i.data?.thread_id&&i.data.thread_id!==i.id),K0=T?.has?.(i.id),G0=c[Z0]||{};return z`
                    <${L7}
                        key=${i.id}
                        post=${i}
                        isThreadReply=${N0}
                        isThreadPrev=${G0.hasThreadPrev}
                        isThreadNext=${G0.hasThreadNext}
                        isRemoving=${K0}
                        highlightQuery=${E}
                        agentName=${o2(i.data?.agent_id,B||{})}
                        agentAvatarUrl=${s2(i.data?.agent_id,B||{})}
                        userName=${U?.name||U?.user_name}
                        userAvatarUrl=${U?.avatar_url||U?.avatarUrl||U?.avatar}
                        userAvatarBackground=${U?.avatar_background||U?.avatarBackground}
                        onClick=${()=>Z?.(i)}
                        onHashtagClick=${N}
                        onMessageRef=${Y}
                        onScrollToMessage=${K}
                        onFileRef=${Q}
                        onOpenWidget=${X}
                        onDelete=${D}
                    />
                `})}
                ${k?null:e}
            </div>
        </div>
    `}class z7{extensions=new Map;register(_){this.extensions.set(_.id,_)}unregister(_){this.extensions.delete(_)}resolve(_){let $,j=-1/0;for(let Z of this.extensions.values()){if(Z.placement!=="tabs")continue;if(!Z.canHandle)continue;try{let N=Z.canHandle(_);if(N===!1||N===0)continue;let Y=N===!0?0:typeof N==="number"?N:0;if(Y>j)j=Y,$=Z}catch(N){console.warn(`[PaneRegistry] canHandle() error for "${Z.id}":`,N)}}return $}list(){return Array.from(this.extensions.values())}getDockPanes(){return Array.from(this.extensions.values()).filter((_)=>_.placement==="dock")}getTabPanes(){return Array.from(this.extensions.values()).filter((_)=>_.placement==="tabs")}get(_){return this.extensions.get(_)}get size(){return this.extensions.size}}var R0=new z7;var w5=null,Y6=null;function EY(){try{return`/static/dist/editor.bundle.js${new URL(import.meta.url).search||""}`}catch{return"/static/dist/editor.bundle.js"}}function F7(){if(Y6)return Promise.resolve(Y6);if(!w5)w5=import(EY()).then((_)=>{return Y6=_,_}).catch((_)=>{throw w5=null,_});return w5}class H7{container;context;real=null;disposed=!1;loadingEl;queuedDirtyCb=null;queuedSaveCb=null;queuedCloseCb=null;queuedViewStateCb=null;queuedViewState=null;constructor(_,$){this.container=_,this.context=$,this.loadingEl=document.createElement("div"),this.loadingEl.className="editor-pane",this.loadingEl.innerHTML=`
            <div class="editor-body">
                <div class="editor-status" style="padding: 2em; text-align: center; color: var(--text-secondary);">Loading editor…</div>
            </div>
        `,_.appendChild(this.loadingEl),this.load()}escapeHtml(_){let $=document.createElement("div");return $.textContent=_,$.innerHTML}async load(){try{let _=await F7();if(this.disposed)return;if(this.loadingEl.parentNode)this.loadingEl.remove();if(this.real=new _.StandaloneEditorInstance(this.container,this.context),this.queuedDirtyCb&&this.real.onDirtyChange)this.real.onDirtyChange(this.queuedDirtyCb);if(this.queuedSaveCb&&this.real.onSaveRequest)this.real.onSaveRequest(this.queuedSaveCb);if(this.queuedCloseCb&&this.real.onClose)this.real.onClose(this.queuedCloseCb);if(this.queuedViewStateCb&&typeof this.real.onViewStateChange==="function")this.real.onViewStateChange(this.queuedViewStateCb);if(this.queuedViewState&&typeof this.real.restoreViewState==="function")requestAnimationFrame(()=>this.real?.restoreViewState?.(this.queuedViewState))}catch(_){if(this.disposed)return;console.error("[editor-loader] Failed to load editor bundle:",_),this.loadingEl.querySelector(".editor-status").textContent="Failed to load editor. Check console for details."}}getContent(){return this.real?.getContent()}isDirty(){return this.real?.isDirty()||!1}setContent(_,$){if(this.real?.setContent)this.real.setContent(_,$)}focus(){this.real?.focus()}resize(){this.real?.resize?.()}dispose(){if(this.disposed)return;if(this.disposed=!0,this.real)this.real.dispose(),this.real=null;this.container.innerHTML="",this.queuedDirtyCb=null,this.queuedSaveCb=null,this.queuedCloseCb=null,this.queuedViewStateCb=null}onDirtyChange(_){if(this.queuedDirtyCb=_,this.real?.onDirtyChange)this.real.onDirtyChange(_)}onSaveRequest(_){if(this.queuedSaveCb=_,this.real?.onSaveRequest)this.real.onSaveRequest(_)}onClose(_){if(this.queuedCloseCb=_,this.real?.onClose)this.real.onClose(_)}onViewStateChange(_){this.queuedViewStateCb=_,this.real?.onViewStateChange?.(_)}restoreViewState(_){this.queuedViewState=_,this.real?.restoreViewState?.(_)}getPath(){return this.real?.getPath?.()??this.context.path??""}setPath(_){this.real?.setPath?.(_)}}var K6={id:"editor",label:"Editor",icon:"edit",capabilities:["edit"],placement:"tabs",canHandle(_){if(!_.path)return!1;if(_.mode!=="edit")return!1;return 1},mount(_,$){return new H7(_,$)}};function Q6(){F7().catch(()=>{})}var g$="piclaw://terminal";var AY={yellow:"#9a6700",magenta:"#8250df",cyan:"#1b7c83",brightBlack:"#57606a",brightRed:"#cf222e",brightGreen:"#1a7f37",brightYellow:"#bf8700",brightBlue:"#0550ae",brightMagenta:"#6f42c1",brightCyan:"#0a7b83"},MY={yellow:"#d29922",magenta:"#bc8cff",cyan:"#39c5cf",brightBlack:"#8b949e",brightRed:"#ff7b72",brightGreen:"#7ee787",brightYellow:"#e3b341",brightBlue:"#79c0ff",brightMagenta:"#d2a8ff",brightCyan:"#56d4dd"},R5=null,q6=null;function kY(_){if(!_)return!1;return _.startsWith("data:application/wasm")||/(^|\/)ghostty-vt\.wasm(?:[?#].*)?$/.test(_)}async function IY(_){let $=globalThis.fetch?.bind(globalThis);if(!$)return await _();let j=new URL("/static/js/vendor/ghostty-vt.wasm",window.location.origin).href,Z=(N,Y)=>{let K=N instanceof Request?N.url:N instanceof URL?N.href:String(N);if(!kY(K))return $(N,Y);if(N instanceof Request)return $(new Request(j,N));return $(j,Y)};globalThis.fetch=Z;try{return await _()}finally{globalThis.fetch=$}}async function PY(){let $=await import(new URL("/static/js/vendor/ghostty-web.js",window.location.origin).href);if(!R5)R5=IY(()=>Promise.resolve($.init?.())).catch((j)=>{throw R5=null,j});return await R5,$}async function CY(){if(typeof document>"u"||!("fonts"in document)||!document.fonts)return;if(!q6)q6=Promise.allSettled([document.fonts.load('400 13px "FiraCode Nerd Font Mono"'),document.fonts.load('700 13px "FiraCode Nerd Font Mono"'),document.fonts.ready]).then(()=>{return}).catch(()=>{return});await q6}async function TY(){let _=await fetch("/terminal/session",{method:"GET",credentials:"same-origin"}),$=await _.json().catch(()=>({}));if(!_.ok)throw Error($?.error||`HTTP ${_.status}`);return $}function yY(_){return`${window.location.protocol==="https:"?"wss:":"ws:"}//${window.location.host}${_}`}function SY(){if(typeof window>"u"||typeof document>"u")return!1;let{documentElement:_,body:$}=document,j=_?.getAttribute?.("data-theme")?.toLowerCase?.()||"";if(j==="dark")return!0;if(j==="light")return!1;if(_?.classList?.contains("dark")||$?.classList?.contains("dark"))return!0;if(_?.classList?.contains("light")||$?.classList?.contains("light"))return!1;return Boolean(window.matchMedia?.("(prefers-color-scheme: dark)")?.matches)}function L4(_,$=""){if(typeof document>"u")return $;return getComputedStyle(document.documentElement).getPropertyValue(_)?.trim()||$}function xY(_,$){if(!_||!_.startsWith("#"))return _;let j=_.slice(1);if(j.length===3)return`#${j[0]}${j[0]}${j[1]}${j[1]}${j[2]}${j[2]}${$}`;if(j.length===6)return`#${j}${$}`;return _}function O7(){let _=SY(),$=_?MY:AY,j=L4("--bg-primary",_?"#000000":"#ffffff"),Z=L4("--text-primary",_?"#e7e9ea":"#0f1419"),N=L4("--text-secondary",_?"#71767b":"#536471"),Y=L4("--accent-color","#1d9bf0"),K=L4("--danger-color",_?"#ff7b72":"#cf222e"),Q=L4("--success-color",_?"#7ee787":"#1a7f37"),X=L4("--bg-hover",_?"#1d1f23":"#e8ebed"),G=L4("--border-color",_?"#2f3336":"#eff3f4"),W=L4("--accent-soft-strong",xY(Y,_?"47":"33"));return{background:j,foreground:Z,cursor:Y,cursorAccent:j,selectionBackground:W,selectionForeground:Z,black:X,red:K,green:Q,yellow:$.yellow,blue:Y,magenta:$.magenta,cyan:$.cyan,white:Z,brightBlack:$.brightBlack,brightRed:$.brightRed,brightGreen:$.brightGreen,brightYellow:$.brightYellow,brightBlue:$.brightBlue,brightMagenta:$.brightMagenta,brightCyan:$.brightCyan,brightWhite:G}}class G6{container;disposed=!1;termEl;bodyEl;statusEl;terminal=null;fitAddon=null;socket=null;themeObserver=null;themeChangeListener=null;mediaQuery=null;mediaQueryListener=null;resizeObserver=null;dockResizeListener=null;windowResizeListener=null;resizeFrame=0;lastAppliedThemeSignature=null;lastResizeSignature=null;constructor(_,$){this.container=_,this.termEl=document.createElement("div"),this.termEl.className="terminal-pane-content",this.termEl.setAttribute("tabindex","0"),this.statusEl=document.createElement("span"),this.statusEl.className="terminal-pane-status",this.statusEl.textContent="Loading terminal…",this.bodyEl=document.createElement("div"),this.bodyEl.className="terminal-pane-body",this.bodyEl.innerHTML='<div class="terminal-placeholder">Bootstrapping ghostty-web…</div>',this.termEl.append(this.bodyEl),_.appendChild(this.termEl),this.bootstrapGhostty()}setStatus(_){this.statusEl.textContent=_,this.termEl.dataset.connectionStatus=_,this.termEl.setAttribute("aria-label",`Terminal ${_}`)}getResizeSignature(){try{let _=this.container?.getBoundingClientRect?.(),$=this.bodyEl?.getBoundingClientRect?.(),j=Number.isFinite(_?.width)?_.width:0,Z=Number.isFinite(_?.height)?_.height:0,N=Number.isFinite($?.width)?$.width:0,Y=Number.isFinite($?.height)?$.height:0;return`${Math.round(j)}x${Math.round(Z)}:${Math.round(N)}x${Math.round(Y)}`}catch{return"0x0:0x0"}}syncHostLayout(){let _=this.bodyEl.querySelector(".terminal-live-host");if(!(_ instanceof HTMLElement))return;let $=_.firstElementChild;if($ instanceof HTMLElement)$.style.width="100%",$.style.height="100%",$.style.maxWidth="100%",$.style.minWidth="0",$.style.display="block";let j=_.querySelector("canvas");if(j instanceof HTMLElement)j.style.display="block",j.style.maxWidth="none"}scheduleResize(){if(this.disposed)return;let _=this.getResizeSignature();if(this.lastResizeSignature===_)return;if(this.resizeFrame)cancelAnimationFrame(this.resizeFrame);this.resizeFrame=requestAnimationFrame(()=>{this.resizeFrame=0,this.lastResizeSignature=this.getResizeSignature(),this.resize()})}async bootstrapGhostty(){try{let _=await PY();if(await CY(),this.disposed)return;this.bodyEl.innerHTML="";let $=document.createElement("div");$.className="terminal-live-host",this.bodyEl.appendChild($);let j=new _.Terminal({cols:120,rows:30,cursorBlink:!0,fontFamily:'FiraCode Nerd Font Mono, ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", monospace',fontSize:13,theme:O7()}),Z=null;if(typeof _.FitAddon==="function")Z=new _.FitAddon,j.loadAddon?.(Z);await j.open($),this.syncHostLayout(),j.loadFonts?.(),Z?.observeResize?.(),this.terminal=j,this.fitAddon=Z,this.installThemeSync(),this.installResizeSync(),this.scheduleResize(),await this.connectBackend()}catch(_){if(console.error("[terminal-pane] Failed to bootstrap ghostty-web:",_),this.disposed)return;this.bodyEl.innerHTML='<div class="terminal-placeholder">Terminal failed to load. Check vendored assets and backend wiring.</div>',this.setStatus("Load failed")}}applyTheme(){if(!this.terminal)return;let _=O7(),$=JSON.stringify(_),j=this.lastAppliedThemeSignature!==null&&this.lastAppliedThemeSignature!==$;try{this.termEl.style.backgroundColor=_.background,this.bodyEl.style.backgroundColor=_.background;let Z=this.bodyEl.querySelector(".terminal-live-host");if(Z instanceof HTMLElement)Z.style.backgroundColor=_.background,Z.style.color=_.foreground;let N=this.bodyEl.querySelector("canvas");if(N instanceof HTMLElement)N.style.backgroundColor=_.background,N.style.color=_.foreground}catch{}try{if(this.terminal.options)this.terminal.options.theme=_}catch{}try{if(j&&this.terminal.reset)this.terminal.reset()}catch{}try{this.terminal.renderer?.setTheme?.(_),this.terminal.renderer?.clear?.()}catch{}try{this.terminal.loadFonts?.()}catch{}try{this.terminal.renderer?.remeasureFont?.()}catch{}try{if(this.terminal.wasmTerm&&this.terminal.renderer?.render)this.terminal.renderer.render(this.terminal.wasmTerm,!0,this.terminal.viewportY||0,this.terminal),this.terminal.renderer.render(this.terminal.wasmTerm,!1,this.terminal.viewportY||0,this.terminal)}catch{}try{this.resize()}catch{}try{if(j&&this.socket?.readyState===WebSocket.OPEN)this.socket.send(JSON.stringify({type:"input",data:"\f"}))}catch{}try{this.terminal.refresh?.()}catch{}this.lastAppliedThemeSignature=$}installThemeSync(){if(typeof window>"u"||typeof document>"u")return;let _=()=>requestAnimationFrame(()=>this.applyTheme());_();let $=()=>_();window.addEventListener("piclaw-theme-change",$),this.themeChangeListener=$;let j=window.matchMedia?.("(prefers-color-scheme: dark)"),Z=()=>_();if(j?.addEventListener)j.addEventListener("change",Z);else if(j?.addListener)j.addListener(Z);this.mediaQuery=j,this.mediaQueryListener=Z;let N=typeof MutationObserver<"u"?new MutationObserver(()=>_()):null;if(N?.observe(document.documentElement,{attributes:!0,attributeFilter:["class","data-theme","style"]}),document.body)N?.observe(document.body,{attributes:!0,attributeFilter:["class","data-theme"]});this.themeObserver=N}installResizeSync(){if(typeof window>"u")return;let _=()=>this.scheduleResize(),$=()=>this.scheduleResize();if(window.addEventListener("dock-resize",_),window.addEventListener("resize",$),this.dockResizeListener=_,this.windowResizeListener=$,typeof ResizeObserver<"u"){let j=new ResizeObserver(()=>{if(this.disposed)return;this.scheduleResize()});j.observe(this.container),this.resizeObserver=j}}async connectBackend(){let _=this.terminal;if(!_)return;try{let $=await TY();if(this.disposed)return;if(!$?.enabled){_.write?.(`Terminal backend unavailable: ${$?.error||"disabled"}\r
`),this.setStatus("Unavailable");return}let j=new WebSocket(yY($.ws_path||"/terminal/ws"));this.socket=j,this.setStatus("Connecting…"),_.onData?.((Z)=>{if(j.readyState===WebSocket.OPEN)j.send(JSON.stringify({type:"input",data:Z}))}),_.onResize?.(({cols:Z,rows:N})=>{if(j.readyState===WebSocket.OPEN)j.send(JSON.stringify({type:"resize",cols:Z,rows:N}))}),j.addEventListener("open",()=>{if(this.disposed)return;this.setStatus("Connected"),this.scheduleResize()}),j.addEventListener("message",(Z)=>{if(this.disposed)return;let N=null;try{N=JSON.parse(String(Z.data))}catch{N={type:"output",data:String(Z.data)}}if(N?.type==="output"&&typeof N.data==="string"){_.write?.(N.data);return}if(N?.type==="exit")_.write?.(`\r
[terminal exited]\r
`),this.setStatus("Exited")}),j.addEventListener("close",()=>{if(this.disposed)return;this.setStatus("Disconnected")}),j.addEventListener("error",()=>{if(this.disposed)return;this.setStatus("Connection error")})}catch($){_.write?.(`Terminal backend unavailable: ${$ instanceof Error?$.message:String($)}\r
`),this.setStatus("Unavailable")}}sendResize(){if(!this.socket||this.socket.readyState!==WebSocket.OPEN||!this.fitAddon?.proposeDimensions)return;let _=this.fitAddon.proposeDimensions();if(!_)return;this.socket.send(JSON.stringify({type:"resize",cols:_.cols,rows:_.rows}))}getContent(){return}isDirty(){return!1}focus(){if(this.terminal?.focus){this.terminal.focus();return}this.termEl?.focus()}resize(){this.syncHostLayout();try{this.terminal?.renderer?.remeasureFont?.()}catch{}try{this.fitAddon?.fit?.()}catch{}try{this.terminal?.refresh?.()}catch{}this.syncHostLayout(),this.sendResize()}dispose(){if(this.disposed)return;this.disposed=!0;try{if(this.resizeFrame)cancelAnimationFrame(this.resizeFrame),this.resizeFrame=0}catch{}try{if(this.themeChangeListener)window.removeEventListener("piclaw-theme-change",this.themeChangeListener)}catch{}try{if(this.mediaQuery&&this.mediaQueryListener){if(this.mediaQuery.removeEventListener)this.mediaQuery.removeEventListener("change",this.mediaQueryListener);else if(this.mediaQuery.removeListener)this.mediaQuery.removeListener(this.mediaQueryListener)}}catch{}try{if(this.dockResizeListener)window.removeEventListener("dock-resize",this.dockResizeListener);if(this.windowResizeListener)window.removeEventListener("resize",this.windowResizeListener)}catch{}try{this.themeObserver?.disconnect?.()}catch{}try{this.resizeObserver?.disconnect?.()}catch{}try{this.socket?.close?.()}catch{}try{this.fitAddon?.dispose?.()}catch{}try{this.terminal?.dispose?.()}catch{}this.termEl?.remove()}}var X6={id:"terminal",label:"Terminal",icon:"terminal",capabilities:["terminal"],placement:"dock",mount(_,$){return new G6(_,$)}},V6={id:"terminal-tab",label:"Terminal",icon:"terminal",capabilities:["terminal"],placement:"tabs",canHandle(_){return _?.path==="piclaw://terminal"?1e4:!1},mount(_,$){return new G6(_,$)}};function U4(_={}){let $=_.window??(typeof window<"u"?window:null),j=_.navigator??(typeof navigator<"u"?navigator:null);if(j&&j.standalone===!0)return!0;if(!$||typeof $.matchMedia!=="function")return!1;return["(display-mode: standalone)","(display-mode: minimal-ui)","(display-mode: fullscreen)"].some((N)=>{try{return Boolean($.matchMedia(N)?.matches)}catch{return!1}})}function f5(_={}){let $=_.window??(typeof window<"u"?window:null),j=_.navigator??(typeof navigator<"u"?navigator:null);if(!$&&!j)return!1;let Z=String(j?.userAgent||""),N=Number(j?.maxTouchPoints||0),Y=/Android|webOS|iPhone|iPad|iPod|Mobile|Windows Phone/i.test(Z),K=(()=>{if(!$||typeof $.matchMedia!=="function")return!1;try{return Boolean($.matchMedia("(pointer: coarse)")?.matches||$.matchMedia("(any-pointer: coarse)")?.matches)}catch{return!1}})();return Boolean(Y||N>1||K)}function J7(_,$={}){if(U4($))return null;if(f5($))return{target:"_blank",features:void 0,mode:"tab"};return{target:wY(_),features:"popup=yes,width=900,height=960,resizable=yes,scrollbars=yes",mode:"popup"}}function B6(_,$={}){let j=$.window??(typeof window<"u"?window:null);if(!j||!_)return null;try{return _.features?j.open("about:blank",_.target,_.features):j.open("about:blank",_.target)}catch{return null}}function W6(_,$={}){if(!_||!_.document)return;try{let j=String($.title||"Opening branch…"),Z=String($.message||"Preparing a new branch window…");_.document.title=j,_.document.body.innerHTML=`
            <div style="font-family: system-ui, sans-serif; padding: 24px; color: #222;">
                <h1 style="font-size: 18px; margin: 0 0 12px;">${j}</h1>
                <p style="margin: 0; line-height: 1.5;">${Z}</p>
            </div>
        `}catch{}}function L6(_,$){if(!_||!$)return;try{if(_.location&&typeof _.location.replace==="function"){_.location.replace(String($));return}_.location=String($)}catch{}}function D7(_){if(!_||typeof _.close!=="function")return;try{_.close()}catch{}}function r4(_,$,j={}){let Z=new URL(String(_||"http://localhost/")),N=String($||"").trim()||"web:default";if(Z.searchParams.set("chat_jid",N),Z.searchParams.delete("branch_loader"),Z.searchParams.delete("branch_source_chat_jid"),Z.searchParams.delete("pane_popout"),Z.searchParams.delete("pane_path"),Z.searchParams.delete("pane_label"),j.chatOnly!==!1)Z.searchParams.set("chat_only","1");return Z.toString()}function E7(_,$,j={}){let Z=new URL(String(_||"http://localhost/")),N=String($||"").trim()||"web:default";if(Z.searchParams.set("branch_loader","1"),Z.searchParams.set("branch_source_chat_jid",N),Z.searchParams.delete("chat_jid"),Z.searchParams.delete("pane_popout"),Z.searchParams.delete("pane_path"),Z.searchParams.delete("pane_label"),j.chatOnly!==!1)Z.searchParams.set("chat_only","1");return Z.toString()}function A7(_,$,j={}){let Z=new URL(String(_||"http://localhost/")),N=String($||"").trim();if(!N)return Z.toString();if(Z.searchParams.set("pane_popout","1"),Z.searchParams.set("pane_path",N),j?.label)Z.searchParams.set("pane_label",String(j.label));else Z.searchParams.delete("pane_label");if(j?.chatJid)Z.searchParams.set("chat_jid",String(j.chatJid));return Z.searchParams.delete("chat_only"),Z.searchParams.delete("branch_loader"),Z.searchParams.delete("branch_source_chat_jid"),Z.toString()}function wY(_){return`piclaw-chat-${String(_||"web:default").trim().toLowerCase().replace(/[^a-z0-9_-]+/g,"-")||"default"}`}function RY(_){return`piclaw-pane-${String(_||"pane").trim().toLowerCase().replace(/[^a-z0-9_-]+/g,"-")||"default"}`}function M7(_,$={}){if(U4($))return null;if(f5($))return{target:"_blank",features:void 0,mode:"tab"};return{target:RY(_),features:"popup=yes,width=1200,height=960,resizable=yes,scrollbars=yes",mode:"popup"}}function v5(_){let $=_ instanceof Error?_.message:String(_||"").trim(),j=String($||"").trim();if(!j)return"PiClaw could not open a new branch window.";let Z=j.toLowerCase();if(Z.includes("no stable turn boundary"))return"This chat is still in flight and does not yet have a stable turn boundary to fork from.";if(Z.includes("cannot fork a branch while the source chat is still active"))return"This chat is still active. Please wait for the current turn to settle, then try again.";if(Z.includes("cancelled"))return"Branch creation was cancelled before a new chat window could be opened.";if(Z.includes("did not return a chat id"))return"PiClaw created no usable branch id for the new window. Please try again.";if(Z.includes("failed to fork branch")||Z.includes("failed to fork chat branch"))return"PiClaw could not create the new branch. Please try again.";return j}function fY(_){try{return JSON.parse(_)}catch{return null}}function vY(_){if(typeof _==="string")return new TextEncoder().encode(_).byteLength;if(_ instanceof ArrayBuffer)return _.byteLength;if(ArrayBuffer.isView(_))return _.byteLength;if(_ instanceof Blob)return _.size;return 0}function bY(_){if(typeof _==="string")return _.length;if(_ instanceof ArrayBuffer)return _.byteLength;if(_ instanceof Blob)return _.size;return Number(_?.size||0)}class U6{socket=null;disposed=!1;options;bytesIn=0;bytesOut=0;constructor(_){this.options=_}connect(){if(this.disposed)return;try{this.socket?.close?.()}catch{}let _=new WebSocket(this.options.url);_.binaryType=this.options.binaryType||"arraybuffer",_.addEventListener("open",()=>{if(this.disposed||this.socket!==_)return;this.options.onOpen?.()}),_.addEventListener("message",($)=>{if(this.disposed||this.socket!==_)return;let j=bY($.data);if(this.bytesIn+=j,this.emitMetrics(),typeof $.data==="string"){let Z=this.options.parseControlMessage||fY;this.options.onMessage?.({kind:"control",raw:$.data,payload:Z($.data)});return}this.options.onMessage?.({kind:"binary",data:$.data,size:j})}),_.addEventListener("close",()=>{if(this.socket===_)this.socket=null;if(this.disposed)return;this.options.onClose?.()}),_.addEventListener("error",()=>{if(this.disposed||this.socket!==_)return;this.options.onError?.()}),this.socket=_}send(_){if(this.disposed||!this.socket)return;let $=vY(_);this.bytesOut+=$,this.emitMetrics(),this.socket.send(_)}sendControl(_){this.send(JSON.stringify(_??{}))}getMetrics(){return{bytesIn:this.bytesIn,bytesOut:this.bytesOut}}dispose(){if(this.disposed)return;this.disposed=!0;try{this.socket?.close?.()}catch{}this.socket=null}emitMetrics(){this.options.onMetrics?.(this.getMetrics())}}var h$=()=>{throw Error("Operation requires compiling with --exportRuntime")},uY=typeof BigUint64Array<"u",p$=Symbol();var mY=new TextDecoder("utf-16le",{fatal:!0});Object.hasOwn=Object.hasOwn||function(_,$){return Object.prototype.hasOwnProperty.call(_,$)};function k7(_,$){let j=new Uint32Array(_)[$+-4>>>2]>>>1,Z=new Uint16Array(_,$,j);if(j<=192)return String.fromCharCode(...Z);try{return mY.decode(Z)}catch{let N="",Y=0;while(j-Y>1024)N+=String.fromCharCode(...Z.subarray(Y,Y+=1024));return N+String.fromCharCode(...Z.subarray(Y))}}function I7(_){let $={};function j(N,Y){if(!N)return"<yet unknown>";return k7(N.buffer,Y)}let Z=_.env=_.env||{};return Z.abort=Z.abort||function(Y,K,Q,X){let G=$.memory||Z.memory;throw Error(`abort: ${j(G,Y)} at ${j(G,K)}:${Q}:${X}`)},Z.trace=Z.trace||function(Y,K,...Q){let X=$.memory||Z.memory;console.log(`trace: ${j(X,Y)}${K?" ":""}${Q.slice(0,K).join(", ")}`)},Z.seed=Z.seed||Date.now,_.Math=_.Math||Math,_.Date=_.Date||Date,$}function P7(_,$){let j=$.exports,Z=j.memory,N=j.table,Y=j.__new||h$,K=j.__pin||h$,Q=j.__unpin||h$,X=j.__collect||h$,G=j.__rtti_base,W=G?(H)=>H[G>>>2]:h$;_.__new=Y,_.__pin=K,_.__unpin=Q,_.__collect=X;function B(H){let w=new Uint32Array(Z.buffer);if((H>>>=0)>=W(w))throw Error(`invalid id: ${H}`);return w[(G+4>>>2)+H]}function U(H){let w=B(H);if(!(w&7))throw Error(`not an array: ${H}, flags=${w}`);return w}function D(H){return 31-Math.clz32(H>>>6&31)}function k(H){if(H==null)return 0;let w=H.length,c=Y(w<<1,2),e=new Uint16Array(Z.buffer);for(let i=0,Z0=c>>>1;i<w;++i)e[Z0+i]=H.charCodeAt(i);return c}_.__newString=k;function T(H){if(H==null)return 0;let w=new Uint8Array(H),c=Y(w.length,1);return new Uint8Array(Z.buffer).set(w,c),c}_.__newArrayBuffer=T;function E(H){if(!H)return null;let w=Z.buffer;if(new Uint32Array(w)[H+-8>>>2]!==2)throw Error(`not a string: ${H}`);return k7(w,H)}_.__getString=E;function J(H,w,c){let e=Z.buffer;if(c)switch(H){case 2:return new Float32Array(e);case 3:return new Float64Array(e)}else switch(H){case 0:return new(w?Int8Array:Uint8Array)(e);case 1:return new(w?Int16Array:Uint16Array)(e);case 2:return new(w?Int32Array:Uint32Array)(e);case 3:return new(w?BigInt64Array:BigUint64Array)(e)}throw Error(`unsupported align: ${H}`)}function A(H,w=0){let c=w,e=U(H),i=D(e),Z0=typeof c!=="number",N0=Z0?c.length:c,K0=Y(N0<<i,e&4?H:1),G0;if(e&4)G0=K0;else{K(K0);let V0=Y(e&2?16:12,H);Q(K0);let F0=new Uint32Array(Z.buffer);if(F0[V0+0>>>2]=K0,F0[V0+4>>>2]=K0,F0[V0+8>>>2]=N0<<i,e&2)F0[V0+12>>>2]=N0;G0=V0}if(Z0){let V0=J(i,e&2048,e&4096),F0=K0>>>i;if(e&16384)for(let U0=0;U0<N0;++U0)V0[F0+U0]=c[U0];else V0.set(c,F0)}return G0}_.__newArray=A;function P(H){let w=new Uint32Array(Z.buffer),c=w[H+-8>>>2],e=U(c),i=D(e),Z0=e&4?H:w[H+4>>>2],N0=e&2?w[H+12>>>2]:w[Z0+-4>>>2]>>>i;return J(i,e&2048,e&4096).subarray(Z0>>>=i,Z0+N0)}_.__getArrayView=P;function d(H){let w=P(H),c=w.length,e=Array(c);for(let i=0;i<c;i++)e[i]=w[i];return e}_.__getArray=d;function l(H){let w=Z.buffer,c=new Uint32Array(w)[H+-4>>>2];return w.slice(H,H+c)}_.__getArrayBuffer=l;function t(H){if(!N)throw Error("Operation requires compiling with --exportTable");let w=new Uint32Array(Z.buffer)[H>>>2];return N.get(w)}_.__getFunction=t;function Y0(H,w,c){return new H(f(H,w,c))}function f(H,w,c){let e=Z.buffer,i=new Uint32Array(e);return new H(e,i[c+4>>>2],i[c+8>>>2]>>>w)}function R(H,w,c){_[`__get${w}`]=Y0.bind(null,H,c),_[`__get${w}View`]=f.bind(null,H,c)}if([Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array].forEach((H)=>{R(H,H.name,31-Math.clz32(H.BYTES_PER_ELEMENT))}),uY)[BigUint64Array,BigInt64Array].forEach((H)=>{R(H,H.name.slice(3),3)});return _.memory=_.memory||Z,_.table=_.table||N,hY(j,_)}function C7(_){return typeof Response<"u"&&_ instanceof Response}function gY(_){return _ instanceof WebAssembly.Module}async function z6(_,$={}){if(C7(_=await _))return b5(_,$);let j=gY(_)?_:await WebAssembly.compile(_),Z=I7($),N=await WebAssembly.instantiate(j,$),Y=P7(Z,N);return{module:j,instance:N,exports:Y}}async function b5(_,$={}){if(!WebAssembly.instantiateStreaming)return z6(C7(_=await _)?_.arrayBuffer():_,$);let j=I7($),Z=await WebAssembly.instantiateStreaming(_,$),N=P7(j,Z.instance);return{...Z,exports:N}}function hY(_,$={}){let j=_.__argumentsLength?(Z)=>{_.__argumentsLength.value=Z}:_.__setArgumentsLength||_.__setargc||(()=>{});for(let Z of Object.keys(_)){let N=_[Z],Y=Z.split("."),K=$;while(Y.length>1){let G=Y.shift();if(!Object.hasOwn(K,G))K[G]={};K=K[G]}let Q=Y[0],X=Q.indexOf("#");if(X>=0){let G=Q.substring(0,X),W=K[G];if(typeof W>"u"||!W.prototype){let B=function(...U){return B.wrap(B.prototype.constructor(0,...U))};if(B.prototype={valueOf(){return this[p$]}},B.wrap=function(U){return Object.create(B.prototype,{[p$]:{value:U,writable:!1}})},W)Object.getOwnPropertyNames(W).forEach((U)=>Object.defineProperty(B,U,Object.getOwnPropertyDescriptor(W,U)));K[G]=B}if(Q=Q.substring(X+1),K=K[G].prototype,/^(get|set):/.test(Q)){if(!Object.hasOwn(K,Q=Q.substring(4))){let B=_[Z.replace("set:","get:")],U=_[Z.replace("get:","set:")];Object.defineProperty(K,Q,{get(){return B(this[p$])},set(D){U(this[p$],D)},enumerable:!0})}}else if(Q==="constructor")(K[Q]=function(...B){return j(B.length),N(...B)}).original=N;else(K[Q]=function(...B){return j(B.length),N(this[p$],...B)}).original=N}else if(/^(get|set):/.test(Q)){if(!Object.hasOwn(K,Q=Q.substring(4)))Object.defineProperty(K,Q,{get:_[Z.replace("set:","get:")],set:_[Z.replace("get:","set:")],enumerable:!0})}else if(typeof N==="function"&&N!==j)(K[Q]=(...G)=>{return j(G.length),N(...G)}).original=N;else K[Q]=N}return $}var cY="/static/js/vendor/remote-display-decoder.wasm",u5=null;function T7(_){if(_ instanceof ArrayBuffer)return _;if(_.byteOffset===0&&_.byteLength===_.buffer.byteLength)return _.buffer;return _.slice().buffer}async function y7(){if(u5)return u5;return u5=(async()=>{try{let Z=function(N,Y,K,Q,X,G,W){let B=T7(Y),U=j.__pin(j.__newArrayBuffer(B));try{return j[N](U,K,Q,X,G,W.bitsPerPixel,W.bigEndian?1:0,W.trueColor?1:0,W.redMax,W.greenMax,W.blueMax,W.redShift,W.greenShift,W.blueShift)}finally{j.__unpin(U);try{j.__collect()}catch{}}},_=await fetch(cY,{credentials:"same-origin"});if(!_.ok)throw Error(`HTTP ${_.status}`);let j=(typeof b5==="function"?await b5(_,{}):await z6(await _.arrayBuffer(),{})).exports;for(let N of["initFramebuffer","getFramebufferPtr","getFramebufferLen","getFramebufferWidth","getFramebufferHeight","processRawRect","processCopyRect","processRreRect","processHextileRect","processZrleTileData","decodeRawRectToRgba"])if(typeof j[N]!=="function")throw Error(`${N} export is missing.`);return{initFramebuffer(N,Y){j.initFramebuffer(N,Y)},getFramebuffer(){let N=j.getFramebufferPtr(),Y=j.getFramebufferLen();return new Uint8ClampedArray(new Uint8Array(j.memory.buffer,N,Y).slice().buffer)},getFramebufferWidth(){return j.getFramebufferWidth()},getFramebufferHeight(){return j.getFramebufferHeight()},processRawRect(N,Y,K,Q,X,G){return Z("processRawRect",N,Y,K,Q,X,G)},processCopyRect(N,Y,K,Q,X,G){return j.processCopyRect(N,Y,K,Q,X,G)},processRreRect(N,Y,K,Q,X,G){return Z("processRreRect",N,Y,K,Q,X,G)},processHextileRect(N,Y,K,Q,X,G){return Z("processHextileRect",N,Y,K,Q,X,G)},processZrleTileData(N,Y,K,Q,X,G){return Z("processZrleTileData",N,Y,K,Q,X,G)},decodeRawRectToRgba(N,Y,K,Q){let X=T7(N),G=j.__pin(j.__newArrayBuffer(X));try{let W=j.__pin(j.decodeRawRectToRgba(G,Y,K,Q.bitsPerPixel,Q.bigEndian?1:0,Q.trueColor?1:0,Q.redMax,Q.greenMax,Q.blueMax,Q.redShift,Q.greenShift,Q.blueShift));try{return new Uint8ClampedArray(j.__getArrayBuffer(W))}finally{j.__unpin(W)}}finally{j.__unpin(G);try{j.__collect?.()}catch{}}}}}catch(_){return console.warn("[remote-display] Failed to load WASM pipeline, using JS fallback.",_),null}})(),u5}function W$(_,$,j){return Math.max($,Math.min(j,_))}function m5(_,$,j){let Z=new Uint8Array(6),N=W$(Math.floor(Number($||0)),0,65535),Y=W$(Math.floor(Number(j||0)),0,65535);return Z[0]=5,Z[1]=W$(Math.floor(Number(_||0)),0,255),Z[2]=N>>8&255,Z[3]=N&255,Z[4]=Y>>8&255,Z[5]=Y&255,Z}function H6(_){switch(Number(_)){case 0:return 1;case 1:return 2;case 2:return 4;default:return 0}}function S7(_,$,j,Z,N){let Y=Math.max(1,Math.floor(Number(Z||0))),K=Math.max(1,Math.floor(Number(N||0))),Q=Math.max(1,Number(j?.width||0)),X=Math.max(1,Number(j?.height||0)),G=(Number(_||0)-Number(j?.left||0))/Q,W=(Number($||0)-Number(j?.top||0))/X;return{x:W$(Math.floor(G*Y),0,Math.max(0,Y-1)),y:W$(Math.floor(W*K),0,Math.max(0,K-1))}}function x7(_,$,j,Z=0){let N=Number(_)<0?8:16,Y=W$(Number(Z||0)|N,0,255);return[m5(Y,$,j),m5(Number(Z||0),$,j)]}function w7(_,$){let j=new Uint8Array(8),Z=Math.max(0,Math.min(4294967295,Number($||0)>>>0));return j[0]=4,j[1]=_?1:0,j[4]=Z>>>24&255,j[5]=Z>>>16&255,j[6]=Z>>>8&255,j[7]=Z&255,j}function c$(_){if(typeof _!=="string")return null;return _.length>0?_:null}function R7(_,$,j,Z){let N=Math.max(1,Math.floor(Number(_||0))),Y=Math.max(1,Math.floor(Number($||0))),K=Math.max(1,Math.floor(Number(j||0))),Q=Math.max(1,Math.floor(Number(Z||0))),X=Math.min(N/K,Y/Q);if(!Number.isFinite(X)||X<=0)return 1;return Math.max(0.01,X)}var F6={Backspace:65288,Tab:65289,Enter:65293,Escape:65307,Insert:65379,Delete:65535,Home:65360,End:65367,PageUp:65365,PageDown:65366,ArrowLeft:65361,ArrowUp:65362,ArrowRight:65363,ArrowDown:65364,Shift:65505,ShiftLeft:65505,ShiftRight:65506,Control:65507,ControlLeft:65507,ControlRight:65508,Alt:65513,AltLeft:65513,AltRight:65514,Meta:65515,MetaLeft:65515,MetaRight:65516,Super:65515,Super_L:65515,Super_R:65516,CapsLock:65509,NumLock:65407,ScrollLock:65300,Pause:65299,PrintScreen:65377,ContextMenu:65383,Menu:65383," ":32};for(let _=1;_<=12;_+=1)F6[`F${_}`]=65470+(_-1);function O6(_){let $=[_?.key,_?.code];for(let Y of $)if(Y&&Object.prototype.hasOwnProperty.call(F6,Y))return F6[Y];let j=String(_?.key||""),Z=j?j.codePointAt(0):null,N=Z==null?0:Z>65535?2:1;if(Z!=null&&j.length===N){if(Z<=255)return Z;return(16777216|Z)>>>0}return null}var y1=Uint8Array,O_=Uint16Array,C6=Int32Array,g5=new y1([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),h5=new y1([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),M6=new y1([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),u7=function(_,$){var j=new O_(31);for(var Z=0;Z<31;++Z)j[Z]=$+=1<<_[Z-1];var N=new C6(j[30]);for(var Z=1;Z<30;++Z)for(var Y=j[Z];Y<j[Z+1];++Y)N[Y]=Y-j[Z]<<5|Z;return{b:j,r:N}},m7=u7(g5,2),g7=m7.b,k6=m7.r;g7[28]=258,k6[258]=28;var h7=u7(h5,0),lY=h7.b,f7=h7.r,I6=new O_(32768);for(y0=0;y0<32768;++y0)_4=(y0&43690)>>1|(y0&21845)<<1,_4=(_4&52428)>>2|(_4&13107)<<2,_4=(_4&61680)>>4|(_4&3855)<<4,I6[y0]=((_4&65280)>>8|(_4&255)<<8)>>1;var _4,y0,$4=function(_,$,j){var Z=_.length,N=0,Y=new O_($);for(;N<Z;++N)if(_[N])++Y[_[N]-1];var K=new O_($);for(N=1;N<$;++N)K[N]=K[N-1]+Y[N-1]<<1;var Q;if(j){Q=new O_(1<<$);var X=15-$;for(N=0;N<Z;++N)if(_[N]){var G=N<<4|_[N],W=$-_[N],B=K[_[N]-1]++<<W;for(var U=B|(1<<W)-1;B<=U;++B)Q[I6[B]>>X]=G}}else{Q=new O_(Z);for(N=0;N<Z;++N)if(_[N])Q[N]=I6[K[_[N]-1]++]>>15-_[N]}return Q},S4=new y1(288);for(y0=0;y0<144;++y0)S4[y0]=8;var y0;for(y0=144;y0<256;++y0)S4[y0]=9;var y0;for(y0=256;y0<280;++y0)S4[y0]=7;var y0;for(y0=280;y0<288;++y0)S4[y0]=8;var y0,d$=new y1(32);for(y0=0;y0<32;++y0)d$[y0]=5;var y0,iY=$4(S4,9,0),nY=$4(S4,9,1),dY=$4(d$,5,0),oY=$4(d$,5,1),J6=function(_){var $=_[0];for(var j=1;j<_.length;++j)if(_[j]>$)$=_[j];return $},c_=function(_,$,j){var Z=$/8|0;return(_[Z]|_[Z+1]<<8)>>($&7)&j},D6=function(_,$){var j=$/8|0;return(_[j]|_[j+1]<<8|_[j+2]<<16)>>($&7)},T6=function(_){return(_+7)/8|0},n$=function(_,$,j){if($==null||$<0)$=0;if(j==null||j>_.length)j=_.length;return new y1(_.subarray($,j))};var sY=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],G_=function(_,$,j){var Z=Error($||sY[_]);if(Z.code=_,Error.captureStackTrace)Error.captureStackTrace(Z,G_);if(!j)throw Z;return Z},rY=function(_,$,j,Z){var N=_.length,Y=Z?Z.length:0;if(!N||$.f&&!$.l)return j||new y1(0);var K=!j,Q=K||$.i!=2,X=$.i;if(K)j=new y1(N*3);var G=function(D0){var X0=j.length;if(D0>X0){var P0=new y1(Math.max(X0*2,D0));P0.set(j),j=P0}},W=$.f||0,B=$.p||0,U=$.b||0,D=$.l,k=$.d,T=$.m,E=$.n,J=N*8;do{if(!D){W=c_(_,B,1);var A=c_(_,B+1,3);if(B+=3,!A){var P=T6(B)+4,d=_[P-4]|_[P-3]<<8,l=P+d;if(l>N){if(X)G_(0);break}if(Q)G(U+d);j.set(_.subarray(P,l),U),$.b=U+=d,$.p=B=l*8,$.f=W;continue}else if(A==1)D=nY,k=oY,T=9,E=5;else if(A==2){var t=c_(_,B,31)+257,Y0=c_(_,B+10,15)+4,f=t+c_(_,B+5,31)+1;B+=14;var R=new y1(f),H=new y1(19);for(var w=0;w<Y0;++w)H[M6[w]]=c_(_,B+w*3,7);B+=Y0*3;var c=J6(H),e=(1<<c)-1,i=$4(H,c,1);for(var w=0;w<f;){var Z0=i[c_(_,B,e)];B+=Z0&15;var P=Z0>>4;if(P<16)R[w++]=P;else{var N0=0,K0=0;if(P==16)K0=3+c_(_,B,3),B+=2,N0=R[w-1];else if(P==17)K0=3+c_(_,B,7),B+=3;else if(P==18)K0=11+c_(_,B,127),B+=7;while(K0--)R[w++]=N0}}var G0=R.subarray(0,t),V0=R.subarray(t);T=J6(G0),E=J6(V0),D=$4(G0,T,1),k=$4(V0,E,1)}else G_(1);if(B>J){if(X)G_(0);break}}if(Q)G(U+131072);var F0=(1<<T)-1,U0=(1<<E)-1,H0=B;for(;;H0=B){var N0=D[D6(_,B)&F0],u0=N0>>4;if(B+=N0&15,B>J){if(X)G_(0);break}if(!N0)G_(2);if(u0<256)j[U++]=u0;else if(u0==256){H0=B,D=null;break}else{var k0=u0-254;if(u0>264){var w=u0-257,A0=g5[w];k0=c_(_,B,(1<<A0)-1)+g7[w],B+=A0}var m0=k[D6(_,B)&U0],g0=m0>>4;if(!m0)G_(3);B+=m0&15;var V0=lY[g0];if(g0>3){var A0=h5[g0];V0+=D6(_,B)&(1<<A0)-1,B+=A0}if(B>J){if(X)G_(0);break}if(Q)G(U+131072);var C0=U+k0;if(U<V0){var B0=Y-V0,I0=Math.min(V0,C0);if(B0+U<0)G_(3);for(;U<I0;++U)j[U]=Z[B0+U]}for(;U<C0;++U)j[U]=j[U-V0]}}if($.l=D,$.p=H0,$.b=U,$.f=W,D)W=1,$.m=T,$.d=k,$.n=E}while(!W);return U!=j.length&&K?n$(j,0,U):j.subarray(0,U)},z4=function(_,$,j){j<<=$&7;var Z=$/8|0;_[Z]|=j,_[Z+1]|=j>>8},l$=function(_,$,j){j<<=$&7;var Z=$/8|0;_[Z]|=j,_[Z+1]|=j>>8,_[Z+2]|=j>>16},E6=function(_,$){var j=[];for(var Z=0;Z<_.length;++Z)if(_[Z])j.push({s:Z,f:_[Z]});var N=j.length,Y=j.slice();if(!N)return{t:c7,l:0};if(N==1){var K=new y1(j[0].s+1);return K[j[0].s]=1,{t:K,l:1}}j.sort(function(l,t){return l.f-t.f}),j.push({s:-1,f:25001});var Q=j[0],X=j[1],G=0,W=1,B=2;j[0]={s:-1,f:Q.f+X.f,l:Q,r:X};while(W!=N-1)Q=j[j[G].f<j[B].f?G++:B++],X=j[G!=W&&j[G].f<j[B].f?G++:B++],j[W++]={s:-1,f:Q.f+X.f,l:Q,r:X};var U=Y[0].s;for(var Z=1;Z<N;++Z)if(Y[Z].s>U)U=Y[Z].s;var D=new O_(U+1),k=P6(j[W-1],D,0);if(k>$){var Z=0,T=0,E=k-$,J=1<<E;Y.sort(function(t,Y0){return D[Y0.s]-D[t.s]||t.f-Y0.f});for(;Z<N;++Z){var A=Y[Z].s;if(D[A]>$)T+=J-(1<<k-D[A]),D[A]=$;else break}T>>=E;while(T>0){var P=Y[Z].s;if(D[P]<$)T-=1<<$-D[P]++-1;else++Z}for(;Z>=0&&T;--Z){var d=Y[Z].s;if(D[d]==$)--D[d],++T}k=$}return{t:new y1(D),l:k}},P6=function(_,$,j){return _.s==-1?Math.max(P6(_.l,$,j+1),P6(_.r,$,j+1)):$[_.s]=j},v7=function(_){var $=_.length;while($&&!_[--$]);var j=new O_(++$),Z=0,N=_[0],Y=1,K=function(X){j[Z++]=X};for(var Q=1;Q<=$;++Q)if(_[Q]==N&&Q!=$)++Y;else{if(!N&&Y>2){for(;Y>138;Y-=138)K(32754);if(Y>2)K(Y>10?Y-11<<5|28690:Y-3<<5|12305),Y=0}else if(Y>3){K(N),--Y;for(;Y>6;Y-=6)K(8304);if(Y>2)K(Y-3<<5|8208),Y=0}while(Y--)K(N);Y=1,N=_[Q]}return{c:j.subarray(0,Z),n:$}},i$=function(_,$){var j=0;for(var Z=0;Z<$.length;++Z)j+=_[Z]*$[Z];return j},p7=function(_,$,j){var Z=j.length,N=T6($+2);_[N]=Z&255,_[N+1]=Z>>8,_[N+2]=_[N]^255,_[N+3]=_[N+1]^255;for(var Y=0;Y<Z;++Y)_[N+Y+4]=j[Y];return(N+4+Z)*8},b7=function(_,$,j,Z,N,Y,K,Q,X,G,W){z4($,W++,j),++N[256];var B=E6(N,15),U=B.t,D=B.l,k=E6(Y,15),T=k.t,E=k.l,J=v7(U),A=J.c,P=J.n,d=v7(T),l=d.c,t=d.n,Y0=new O_(19);for(var f=0;f<A.length;++f)++Y0[A[f]&31];for(var f=0;f<l.length;++f)++Y0[l[f]&31];var R=E6(Y0,7),H=R.t,w=R.l,c=19;for(;c>4&&!H[M6[c-1]];--c);var e=G+5<<3,i=i$(N,S4)+i$(Y,d$)+K,Z0=i$(N,U)+i$(Y,T)+K+14+3*c+i$(Y0,H)+2*Y0[16]+3*Y0[17]+7*Y0[18];if(X>=0&&e<=i&&e<=Z0)return p7($,W,_.subarray(X,X+G));var N0,K0,G0,V0;if(z4($,W,1+(Z0<i)),W+=2,Z0<i){N0=$4(U,D,0),K0=U,G0=$4(T,E,0),V0=T;var F0=$4(H,w,0);z4($,W,P-257),z4($,W+5,t-1),z4($,W+10,c-4),W+=14;for(var f=0;f<c;++f)z4($,W+3*f,H[M6[f]]);W+=3*c;var U0=[A,l];for(var H0=0;H0<2;++H0){var u0=U0[H0];for(var f=0;f<u0.length;++f){var k0=u0[f]&31;if(z4($,W,F0[k0]),W+=H[k0],k0>15)z4($,W,u0[f]>>5&127),W+=u0[f]>>12}}}else N0=iY,K0=S4,G0=dY,V0=d$;for(var f=0;f<Q;++f){var A0=Z[f];if(A0>255){var k0=A0>>18&31;if(l$($,W,N0[k0+257]),W+=K0[k0+257],k0>7)z4($,W,A0>>23&31),W+=g5[k0];var m0=A0&31;if(l$($,W,G0[m0]),W+=V0[m0],m0>3)l$($,W,A0>>5&8191),W+=h5[m0]}else l$($,W,N0[A0]),W+=K0[A0]}return l$($,W,N0[256]),W+K0[256]},aY=new C6([65540,131080,131088,131104,262176,1048704,1048832,2114560,2117632]),c7=new y1(0),tY=function(_,$,j,Z,N,Y){var K=Y.z||_.length,Q=new y1(Z+K+5*(1+Math.ceil(K/7000))+N),X=Q.subarray(Z,Q.length-N),G=Y.l,W=(Y.r||0)&7;if($){if(W)X[0]=Y.r>>3;var B=aY[$-1],U=B>>13,D=B&8191,k=(1<<j)-1,T=Y.p||new O_(32768),E=Y.h||new O_(k+1),J=Math.ceil(j/3),A=2*J,P=function(d0){return(_[d0]^_[d0+1]<<J^_[d0+2]<<A)&k},d=new C6(25000),l=new O_(288),t=new O_(32),Y0=0,f=0,R=Y.i||0,H=0,w=Y.w||0,c=0;for(;R+2<K;++R){var e=P(R),i=R&32767,Z0=E[e];if(T[i]=Z0,E[e]=i,w<=R){var N0=K-R;if((Y0>7000||H>24576)&&(N0>423||!G)){W=b7(_,X,0,d,l,t,f,H,c,R-c,W),H=Y0=f=0,c=R;for(var K0=0;K0<286;++K0)l[K0]=0;for(var K0=0;K0<30;++K0)t[K0]=0}var G0=2,V0=0,F0=D,U0=i-Z0&32767;if(N0>2&&e==P(R-U0)){var H0=Math.min(U,N0)-1,u0=Math.min(32767,R),k0=Math.min(258,N0);while(U0<=u0&&--F0&&i!=Z0){if(_[R+G0]==_[R+G0-U0]){var A0=0;for(;A0<k0&&_[R+A0]==_[R+A0-U0];++A0);if(A0>G0){if(G0=A0,V0=U0,A0>H0)break;var m0=Math.min(U0,A0-2),g0=0;for(var K0=0;K0<m0;++K0){var C0=R-U0+K0&32767,B0=T[C0],I0=C0-B0&32767;if(I0>g0)g0=I0,Z0=C0}}}i=Z0,Z0=T[i],U0+=i-Z0&32767}}if(V0){d[H++]=268435456|k6[G0]<<18|f7[V0];var D0=k6[G0]&31,X0=f7[V0]&31;f+=g5[D0]+h5[X0],++l[257+D0],++t[X0],w=R+G0,++Y0}else d[H++]=_[R],++l[_[R]]}}for(R=Math.max(R,w);R<K;++R)d[H++]=_[R],++l[_[R]];if(W=b7(_,X,G,d,l,t,f,H,c,R-c,W),!G)Y.r=W&7|X[W/8|0]<<3,W-=7,Y.h=E,Y.p=T,Y.i=R,Y.w=w}else{for(var R=Y.w||0;R<K+G;R+=65535){var P0=R+65535;if(P0>=K)X[W/8|0]=G,P0=K;W=p7(X,W+1,_.subarray(R,P0))}Y.i=K}return n$(Q,0,Z+T6(W)+N)};var l7=function(){var _=1,$=0;return{p:function(j){var Z=_,N=$,Y=j.length|0;for(var K=0;K!=Y;){var Q=Math.min(K+2655,Y);for(;K<Q;++K)N+=Z+=j[K];Z=(Z&65535)+15*(Z>>16),N=(N&65535)+15*(N>>16)}_=Z,$=N},d:function(){return _%=65521,$%=65521,(_&255)<<24|(_&65280)<<8|($&255)<<8|$>>8}}},eY=function(_,$,j,Z,N){if(!N){if(N={l:1},$.dictionary){var Y=$.dictionary.subarray(-32768),K=new y1(Y.length+_.length);K.set(Y),K.set(_,Y.length),_=K,N.w=Y.length}}return tY(_,$.level==null?6:$.level,$.mem==null?N.l?Math.ceil(Math.max(8,Math.min(13,Math.log(_.length)))*1.5):20:12+$.mem,j,Z,N)};var i7=function(_,$,j){for(;j;++$)_[$]=j,j>>>=8};var _K=function(_,$){var j=$.level,Z=j==0?0:j<6?1:j==9?3:2;if(_[0]=120,_[1]=Z<<6|($.dictionary&&32),_[1]|=31-(_[0]<<8|_[1])%31,$.dictionary){var N=l7();N.p($.dictionary),i7(_,2,N.d())}},$K=function(_,$){if((_[0]&15)!=8||_[0]>>4>7||(_[0]<<8|_[1])%31)G_(6,"invalid zlib data");if((_[1]>>5&1)==+!$)G_(6,"invalid zlib data: "+(_[1]&32?"need":"unexpected")+" dictionary");return(_[1]>>3&4)+2};var A6=function(){function _($,j){if(typeof $=="function")j=$,$={};this.ondata=j;var Z=$&&$.dictionary&&$.dictionary.subarray(-32768);if(this.s={i:0,b:Z?Z.length:0},this.o=new y1(32768),this.p=new y1(0),Z)this.o.set(Z)}return _.prototype.e=function($){if(!this.ondata)G_(5);if(this.d)G_(4);if(!this.p.length)this.p=$;else if($.length){var j=new y1(this.p.length+$.length);j.set(this.p),j.set($,this.p.length),this.p=j}},_.prototype.c=function($){this.s.i=+(this.d=$||!1);var j=this.s.b,Z=rY(this.p,this.s,this.o);this.ondata(n$(Z,j,this.s.b),this.d),this.o=n$(Z,this.s.b-32768),this.s.b=this.o.length,this.p=n$(this.p,this.s.p/8|0),this.s.p&=7},_.prototype.push=function($,j){this.e($),this.c(j)},_}();function n7(_,$){if(!$)$={};var j=l7();j.p(_);var Z=eY(_,$,$.dictionary?6:2,4);return _K(Z,$),i7(Z,Z.length-4,j.d()),Z}var d7=function(){function _($,j){A6.call(this,$,j),this.v=$&&$.dictionary?2:1}return _.prototype.push=function($,j){if(A6.prototype.e.call(this,$),this.v){if(this.p.length<6&&!j)return;this.p=this.p.subarray($K(this.p,this.v-1)),this.v=0}if(j){if(this.p.length<4)G_(6,"invalid zlib data");this.p=this.p.subarray(0,-4)}A6.prototype.c.call(this,j)},_}();var jK=typeof TextDecoder<"u"&&new TextDecoder,ZK=0;try{jK.decode(c7,{stream:!0}),ZK=1}catch(_){}var NK=[58,50,42,34,26,18,10,2,60,52,44,36,28,20,12,4,62,54,46,38,30,22,14,6,64,56,48,40,32,24,16,8,57,49,41,33,25,17,9,1,59,51,43,35,27,19,11,3,61,53,45,37,29,21,13,5,63,55,47,39,31,23,15,7],YK=[40,8,48,16,56,24,64,32,39,7,47,15,55,23,63,31,38,6,46,14,54,22,62,30,37,5,45,13,53,21,61,29,36,4,44,12,52,20,60,28,35,3,43,11,51,19,59,27,34,2,42,10,50,18,58,26,33,1,41,9,49,17,57,25],KK=[32,1,2,3,4,5,4,5,6,7,8,9,8,9,10,11,12,13,12,13,14,15,16,17,16,17,18,19,20,21,20,21,22,23,24,25,24,25,26,27,28,29,28,29,30,31,32,1],QK=[16,7,20,21,29,12,28,17,1,15,23,26,5,18,31,10,2,8,24,14,32,27,3,9,19,13,30,6,22,11,4,25],qK=[57,49,41,33,25,17,9,1,58,50,42,34,26,18,10,2,59,51,43,35,27,19,11,3,60,52,44,36,63,55,47,39,31,23,15,7,62,54,46,38,30,22,14,6,61,53,45,37,29,21,13,5,28,20,12,4],GK=[14,17,11,24,1,5,3,28,15,6,21,10,23,19,12,4,26,8,16,7,27,20,13,2,41,52,31,37,47,55,30,40,51,45,33,48,44,49,39,56,34,53,46,42,50,36,29,32],XK=[1,1,2,2,2,2,2,2,1,2,2,2,2,2,2,1],VK=[[[14,4,13,1,2,15,11,8,3,10,6,12,5,9,0,7],[0,15,7,4,14,2,13,1,10,6,12,11,9,5,3,8],[4,1,14,8,13,6,2,11,15,12,9,7,3,10,5,0],[15,12,8,2,4,9,1,7,5,11,3,14,10,0,6,13]],[[15,1,8,14,6,11,3,4,9,7,2,13,12,0,5,10],[3,13,4,7,15,2,8,14,12,0,1,10,6,9,11,5],[0,14,7,11,10,4,13,1,5,8,12,6,9,3,2,15],[13,8,10,1,3,15,4,2,11,6,7,12,0,5,14,9]],[[10,0,9,14,6,3,15,5,1,13,12,7,11,4,2,8],[13,7,0,9,3,4,6,10,2,8,5,14,12,11,15,1],[13,6,4,9,8,15,3,0,11,1,2,12,5,10,14,7],[1,10,13,0,6,9,8,7,4,15,14,3,11,5,2,12]],[[7,13,14,3,0,6,9,10,1,2,8,5,11,12,4,15],[13,8,11,5,6,15,0,3,4,7,2,12,1,10,14,9],[10,6,9,0,12,11,7,13,15,1,3,14,5,2,8,4],[3,15,0,6,10,1,13,8,9,4,5,11,12,7,2,14]],[[2,12,4,1,7,10,11,6,8,5,3,15,13,0,14,9],[14,11,2,12,4,7,13,1,5,0,15,10,3,9,8,6],[4,2,1,11,10,13,7,8,15,9,12,5,6,3,0,14],[11,8,12,7,1,14,2,13,6,15,0,9,10,4,5,3]],[[12,1,10,15,9,2,6,8,0,13,3,4,14,7,5,11],[10,15,4,2,7,12,9,5,6,1,13,14,0,11,3,8],[9,14,15,5,2,8,12,3,7,0,4,10,1,13,11,6],[4,3,2,12,9,5,15,10,11,14,1,7,6,0,8,13]],[[4,11,2,14,15,0,8,13,3,12,9,7,5,10,6,1],[13,0,11,7,4,9,1,10,14,3,5,12,2,15,8,6],[1,4,11,13,12,3,7,14,10,15,6,8,0,5,9,2],[6,11,13,8,1,4,10,7,9,5,0,15,14,2,3,12]],[[13,2,8,4,6,15,11,1,10,9,3,14,5,0,12,7],[1,15,13,8,10,3,7,4,12,5,6,11,0,14,9,2],[7,11,4,1,9,12,14,2,0,6,10,13,15,3,5,8],[2,1,14,7,4,10,8,13,15,12,9,0,3,5,6,11]]],r7=new Uint8Array(256);for(let _=0;_<256;_+=1){let $=0;for(let j=0;j<8;j+=1)$=$<<1|_>>j&1;r7[_]=$}function a7(_){if(_ instanceof Uint8Array)return _;if(_ instanceof ArrayBuffer)return new Uint8Array(_);if(ArrayBuffer.isView(_))return new Uint8Array(_.buffer,_.byteOffset,_.byteLength);return new Uint8Array(0)}function t7(_){let $=0n,j=a7(_);for(let Z of j)$=$<<8n|BigInt(Z);return $}function BK(_,$){let j=new Uint8Array($),Z=BigInt(_);for(let N=$-1;N>=0;N-=1)j[N]=Number(Z&0xffn),Z>>=8n;return j}function L$(_,$,j){let Z=0n;for(let N of $){let Y=BigInt(_)>>BigInt(j-N)&1n;Z=Z<<1n|Y}return Z}function o7(_,$){let j=28n,Z=(1n<<j)-1n,N=BigInt($%28);return(_<<N|_>>j-N)&Z}function WK(_){let $=L$(t7(_),qK,64),j=$>>28n&0x0fffffffn,Z=$&0x0fffffffn,N=[];for(let Y of XK){j=o7(j,Y),Z=o7(Z,Y);let K=j<<28n|Z;N.push(L$(K,GK,56))}return N}function LK(_){let $=0n;for(let j=0;j<8;j+=1){let Z=BigInt((7-j)*6),N=Number(_>>Z&0x3fn),Y=(N&32)>>4|N&1,K=N>>1&15;$=$<<4n|BigInt(VK[j][Y][K])}return $}function UK(_,$){let j=L$(_,KK,32)^BigInt($),Z=LK(j);return L$(Z,QK,32)}function s7(_,$){let j=WK($),Z=L$(t7(_),NK,64),N=Z>>32n&0xffffffffn,Y=Z&0xffffffffn;for(let Q of j){let X=Y,G=(N^UK(Y,Q))&0xffffffffn;N=X,Y=G}let K=Y<<32n|N;return BK(L$(K,YK,64),8)}function zK(_){let $=String(_??""),j=new Uint8Array(8);for(let Z=0;Z<8;Z+=1){let N=Z<$.length?$.charCodeAt(Z)&255:0;j[Z]=r7[N]}return j}function e7(_,$){let j=a7($);if(j.byteLength!==16)throw Error(`Invalid VNC auth challenge length ${j.byteLength}; expected 16 bytes.`);let Z=zK(_),N=new Uint8Array(16);return N.set(s7(j.slice(0,8),Z),0),N.set(s7(j.slice(8,16),Z),8),N}var l_="vnc";function FK(_){return Number(_)}function HK(_){let $=Array.isArray(_)?_:typeof _==="string"?_.split(",").map((N)=>N.trim()).filter((N)=>N.length>0):[],j=[],Z=new Set;for(let N of $){let Y=FK(N);if(!Number.isFinite(Y))continue;let K=Number(Y);if(!Z.has(K))j.push(K),Z.add(K)}if(j.length>0)return j;return[5,2,1,0,-223]}function F$(_){if(_ instanceof Uint8Array)return _;if(_ instanceof ArrayBuffer)return new Uint8Array(_);if(ArrayBuffer.isView(_))return new Uint8Array(_.buffer,_.byteOffset,_.byteLength);return new Uint8Array(0)}function OK(_,$){let j=F$(_),Z=F$($);if(!j.byteLength)return new Uint8Array(Z);if(!Z.byteLength)return new Uint8Array(j);let N=new Uint8Array(j.byteLength+Z.byteLength);return N.set(j,0),N.set(Z,j.byteLength),N}function JK(_){let $=0;for(let N of _||[])$+=N?.byteLength||0;let j=new Uint8Array($),Z=0;for(let N of _||[]){let Y=F$(N);j.set(Y,Z),Z+=Y.byteLength}return j}function DK(){return(_)=>{let $=F$(_);try{let j=[],Z=new d7((N)=>{j.push(new Uint8Array(N))});if(Z.push($,!0),Z.err)throw Error(Z.msg||"zlib decompression error");return JK(j)}catch(j){try{let Z=n7($);return Z instanceof Uint8Array?Z:new Uint8Array(Z)}catch(Z){let N=Z instanceof Error?Z.message:"unexpected EOF";throw Error(`unexpected EOF: ${N}`)}}}}function EK(_){return new TextEncoder().encode(String(_||""))}function U$(_){return new TextDecoder().decode(F$(_))}function AK(_){let $=/^RFB (\d{3})\.(\d{3})\n$/.exec(String(_||""));if(!$)return null;return{major:parseInt($[1],10),minor:parseInt($[2],10),text:$[0]}}function MK(_){if(!_)return`RFB 003.008
`;if(_.major>3||_.minor>=8)return`RFB 003.008
`;if(_.minor>=7)return`RFB 003.007
`;return`RFB 003.003
`}function _9(_,$=0){return{bitsPerPixel:_.getUint8($),depth:_.getUint8($+1),bigEndian:_.getUint8($+2)===1,trueColor:_.getUint8($+3)===1,redMax:_.getUint16($+4,!1),greenMax:_.getUint16($+6,!1),blueMax:_.getUint16($+8,!1),redShift:_.getUint8($+10),greenShift:_.getUint8($+11),blueShift:_.getUint8($+12)}}function kK(_){let $=new ArrayBuffer(20),j=new DataView($);return j.setUint8(0,0),j.setUint8(1,0),j.setUint8(2,0),j.setUint8(3,0),j.setUint8(4,_.bitsPerPixel),j.setUint8(5,_.depth),j.setUint8(6,_.bigEndian?1:0),j.setUint8(7,_.trueColor?1:0),j.setUint16(8,_.redMax,!1),j.setUint16(10,_.greenMax,!1),j.setUint16(12,_.blueMax,!1),j.setUint8(14,_.redShift),j.setUint8(15,_.greenShift),j.setUint8(16,_.blueShift),new Uint8Array($)}function IK(_){let $=Array.isArray(_)?_:[],j=new ArrayBuffer(4+$.length*4),Z=new DataView(j);Z.setUint8(0,2),Z.setUint8(1,0),Z.setUint16(2,$.length,!1);let N=4;for(let Y of $)Z.setInt32(N,Number(Y||0),!1),N+=4;return new Uint8Array(j)}function $9(_,$,j,Z=0,N=0){let Y=new ArrayBuffer(10),K=new DataView(Y);return K.setUint8(0,3),K.setUint8(1,_?1:0),K.setUint16(2,Z,!1),K.setUint16(4,N,!1),K.setUint16(6,Math.max(0,$||0),!1),K.setUint16(8,Math.max(0,j||0),!1),new Uint8Array(Y)}function z$(_,$){let j=Number($||0);if(j<=0)return 0;if(j===255)return _&255;return Math.max(0,Math.min(255,Math.round((_||0)*255/j)))}function Z9(_,$,j,Z){if(j===1)return _[$];if(j===2)return Z?(_[$]<<8|_[$+1])>>>0:(_[$]|_[$+1]<<8)>>>0;if(j===3)return Z?(_[$]<<16|_[$+1]<<8|_[$+2])>>>0:(_[$]|_[$+1]<<8|_[$+2]<<16)>>>0;if(j===4)return Z?(_[$]<<24>>>0|_[$+1]<<16|_[$+2]<<8|_[$+3])>>>0:(_[$]|_[$+1]<<8|_[$+2]<<16|_[$+3]<<24>>>0)>>>0;return 0}function PK(_,$,j,Z){let N=Z||H$,Y=F$(_),K=Math.max(1,Math.floor(Number(N.bitsPerPixel||0)/8)),Q=Math.max(0,$||0)*Math.max(0,j||0)*K;if(Y.byteLength<Q)throw Error(`Incomplete raw rectangle payload: expected ${Q} byte(s), got ${Y.byteLength}`);if(!N.trueColor)throw Error("Indexed-colour VNC framebuffers are not supported yet.");let X=new Uint8ClampedArray(Math.max(0,$||0)*Math.max(0,j||0)*4),G=0,W=0;for(let B=0;B<Math.max(0,$||0)*Math.max(0,j||0);B+=1){let U=Z9(Y,G,K,N.bigEndian),D=z$(U>>>N.redShift&N.redMax,N.redMax),k=z$(U>>>N.greenShift&N.greenMax,N.greenMax),T=z$(U>>>N.blueShift&N.blueMax,N.blueMax);X[W]=D,X[W+1]=k,X[W+2]=T,X[W+3]=255,G+=K,W+=4}return X}function F4(_,$,j){let Z=j||H$,N=Math.max(1,Math.floor(Number(Z.bitsPerPixel||0)/8));if(_.byteLength<$+N)return null;let Y=Z9(_,$,N,Z.bigEndian);return{rgba:[z$(Y>>>Z.redShift&Z.redMax,Z.redMax),z$(Y>>>Z.greenShift&Z.greenMax,Z.greenMax),z$(Y>>>Z.blueShift&Z.blueMax,Z.blueMax),255],bytesPerPixel:N}}function x4(_,$,j,Z,N,Y,K){if(!K)return;for(let Q=0;Q<Y;Q+=1)for(let X=0;X<N;X+=1){let G=((Z+Q)*$+(j+X))*4;_[G]=K[0],_[G+1]=K[1],_[G+2]=K[2],_[G+3]=K[3]}}function N9(_,$,j,Z,N,Y,K){for(let Q=0;Q<Y;Q+=1){let X=Q*N*4,G=((Z+Q)*$+j)*4;_.set(K.subarray(X,X+N*4),G)}}function j9(_,$){let j=$,Z=1;while(!0){if(_.byteLength<j+1)return null;let N=_[j++];if(Z+=N,N!==255)break}return{consumed:j-$,runLength:Z}}function CK(_,$,j,Z,N,Y,K){let Q=N||H$,X=Math.max(1,Math.floor(Number(Q.bitsPerPixel||0)/8));if(_.byteLength<$+4)return null;let G=new DataView(_.buffer,_.byteOffset+$,4).getUint32(0,!1);if(_.byteLength<$+4+G)return null;let W=_.slice($+4,$+4+G),B;try{B=K(W)}catch{return{consumed:4+G,skipped:!0}}let U=0,D=new Uint8ClampedArray(Math.max(0,j||0)*Math.max(0,Z||0)*4);for(let k=0;k<Z;k+=64){let T=Math.min(64,Z-k);for(let E=0;E<j;E+=64){let J=Math.min(64,j-E);if(B.byteLength<U+1)return null;let A=B[U++],P=A&127,d=(A&128)!==0;if(!d&&P===0){let l=J*T*X;if(B.byteLength<U+l)return null;let t=Y(B.slice(U,U+l),J,T,Q);U+=l,N9(D,j,E,k,J,T,t);continue}if(!d&&P===1){let l=F4(B,U,Q);if(!l)return null;U+=l.bytesPerPixel,x4(D,j,E,k,J,T,l.rgba);continue}if(!d&&P>1&&P<=16){let l=[];for(let R=0;R<P;R+=1){let H=F4(B,U,Q);if(!H)return null;U+=H.bytesPerPixel,l.push(H.rgba)}let t=P<=2?1:P<=4?2:4,Y0=Math.ceil(J*t/8),f=Y0*T;if(B.byteLength<U+f)return null;for(let R=0;R<T;R+=1){let H=U+R*Y0;for(let w=0;w<J;w+=1){let c=w*t,e=H+(c>>3),i=8-t-(c&7),Z0=B[e]>>i&(1<<t)-1;x4(D,j,E+w,k+R,1,1,l[Z0])}}U+=f;continue}if(d&&P===0){let l=0,t=0;while(t<T){let Y0=F4(B,U,Q);if(!Y0)return null;U+=Y0.bytesPerPixel;let f=j9(B,U);if(!f)return null;U+=f.consumed;for(let R=0;R<f.runLength;R+=1)if(x4(D,j,E+l,k+t,1,1,Y0.rgba),l+=1,l>=J){if(l=0,t+=1,t>=T)break}}continue}if(d&&P>0){let l=[];for(let f=0;f<P;f+=1){let R=F4(B,U,Q);if(!R)return null;U+=R.bytesPerPixel,l.push(R.rgba)}let t=0,Y0=0;while(Y0<T){if(B.byteLength<U+1)return null;let f=B[U++],R=f,H=1;if(f&128){R=f&127;let c=j9(B,U);if(!c)return null;U+=c.consumed,H=c.runLength}let w=l[R];if(!w)return null;for(let c=0;c<H;c+=1)if(x4(D,j,E+t,k+Y0,1,1,w),t+=1,t>=J){if(t=0,Y0+=1,Y0>=T)break}}continue}return{consumed:4+G,skipped:!0}}}return{consumed:4+G,rgba:D,decompressed:B}}function TK(_,$,j,Z,N){let Y=N||H$,K=Math.max(1,Math.floor(Number(Y.bitsPerPixel||0)/8));if(_.byteLength<$+4+K)return null;let X=new DataView(_.buffer,_.byteOffset+$,_.byteLength-$).getUint32(0,!1),G=4+K+X*(K+8);if(_.byteLength<$+G)return null;let W=$+4,B=F4(_,W,Y);if(!B)return null;W+=B.bytesPerPixel;let U=new Uint8ClampedArray(Math.max(0,j||0)*Math.max(0,Z||0)*4);x4(U,j,0,0,j,Z,B.rgba);for(let D=0;D<X;D+=1){let k=F4(_,W,Y);if(!k)return null;if(W+=k.bytesPerPixel,_.byteLength<W+8)return null;let T=new DataView(_.buffer,_.byteOffset+W,8),E=T.getUint16(0,!1),J=T.getUint16(2,!1),A=T.getUint16(4,!1),P=T.getUint16(6,!1);W+=8,x4(U,j,E,J,A,P,k.rgba)}return{consumed:W-$,rgba:U}}function yK(_,$,j,Z,N,Y){let K=N||H$,Q=Math.max(1,Math.floor(Number(K.bitsPerPixel||0)/8)),X=new Uint8ClampedArray(Math.max(0,j||0)*Math.max(0,Z||0)*4),G=$,W=[0,0,0,255],B=[255,255,255,255];for(let U=0;U<Z;U+=16){let D=Math.min(16,Z-U);for(let k=0;k<j;k+=16){let T=Math.min(16,j-k);if(_.byteLength<G+1)return null;let E=_[G++];if(E&1){let J=T*D*Q;if(_.byteLength<G+J)return null;let A=Y(_.slice(G,G+J),T,D,K);G+=J,N9(X,j,k,U,T,D,A);continue}if(E&2){let J=F4(_,G,K);if(!J)return null;W=J.rgba,G+=J.bytesPerPixel}if(x4(X,j,k,U,T,D,W),E&4){let J=F4(_,G,K);if(!J)return null;B=J.rgba,G+=J.bytesPerPixel}if(E&8){if(_.byteLength<G+1)return null;let J=_[G++];for(let A=0;A<J;A+=1){let P=B;if(E&16){let H=F4(_,G,K);if(!H)return null;P=H.rgba,G+=H.bytesPerPixel}if(_.byteLength<G+2)return null;let d=_[G++],l=_[G++],t=d>>4,Y0=d&15,f=(l>>4)+1,R=(l&15)+1;x4(X,j,k+t,U+Y0,f,R,P)}}}}return{consumed:G-$,rgba:X}}var H$={bitsPerPixel:32,depth:24,bigEndian:!1,trueColor:!0,redMax:255,greenMax:255,blueMax:255,redShift:16,greenShift:8,blueShift:0};class p5{protocol=l_;constructor(_={}){this.shared=_.shared!==!1,this.decodeRawRect=typeof _.decodeRawRect==="function"?_.decodeRawRect:PK,this.pipeline=_.pipeline||null,this.encodings=HK(_.encodings||null),this.state="version",this.buffer=new Uint8Array(0),this.serverVersion=null,this.clientVersionText=null,this.framebufferWidth=0,this.framebufferHeight=0,this.serverName="",this.serverPixelFormat=null,this.clientPixelFormat={...H$},this.password=typeof _.password==="string"&&_.password.length>0?_.password:null,this.inflateZrle=typeof _.inflateZrle==="function"?_.inflateZrle:DK()}receive(_){if(_)this.buffer=OK(this.buffer,_);let $=[],j=[],Z=!0;while(Z){if(Z=!1,this.state==="version"){if(this.buffer.byteLength<12)break;let N=this.consume(12),Y=U$(N),K=AK(Y);if(!K)throw Error(`Unsupported RFB version banner: ${Y||"<empty>"}`);this.serverVersion=K,this.clientVersionText=MK(K),j.push(EK(this.clientVersionText)),$.push({type:"protocol-version",protocol:l_,server:K.text.trim(),client:this.clientVersionText.trim()}),this.state=K.minor>=7?"security-types":"security-type-33",Z=!0;continue}if(this.state==="security-types"){if(this.buffer.byteLength<1)break;let N=this.buffer[0];if(N===0){if(this.buffer.byteLength<5)break;let X=new DataView(this.buffer.buffer,this.buffer.byteOffset,this.buffer.byteLength).getUint32(1,!1);if(this.buffer.byteLength<5+X)break;this.consume(1);let G=U$(this.consume(4+X).slice(4));throw Error(G||"VNC server rejected the connection.")}if(this.buffer.byteLength<1+N)break;this.consume(1);let Y=Array.from(this.consume(N));$.push({type:"security-types",protocol:l_,types:Y});let K=null;if(Y.includes(2)&&this.password!==null)K=2;else if(Y.includes(1))K=1;else if(Y.includes(2))throw Error("VNC password authentication is required. Enter a password and reconnect.");else throw Error(`Unsupported VNC security types: ${Y.join(", ")||"none"}. This viewer currently supports only "None" and password-based VNC auth.`);j.push(Uint8Array.of(K)),$.push({type:"security-selected",protocol:l_,securityType:K,label:K===2?"VNC Authentication":"None"}),this.state=K===2?"security-challenge":"security-result",Z=!0;continue}if(this.state==="security-type-33"){if(this.buffer.byteLength<4)break;let Y=new DataView(this.buffer.buffer,this.buffer.byteOffset,this.buffer.byteLength).getUint32(0,!1);if(this.consume(4),Y===0){if(this.buffer.byteLength<4)break;let Q=new DataView(this.buffer.buffer,this.buffer.byteOffset,this.buffer.byteLength).getUint32(0,!1);if(this.buffer.byteLength<4+Q)break;let X=U$(this.consume(4+Q).slice(4));throw Error(X||"VNC server rejected the connection.")}if(Y===2){if(this.password===null)throw Error("VNC password authentication is required. Enter a password and reconnect.");$.push({type:"security-selected",protocol:l_,securityType:2,label:"VNC Authentication"}),this.state="security-challenge",Z=!0;continue}if(Y!==1)throw Error(`Unsupported VNC security type ${Y}. This viewer currently supports only "None" and password-based VNC auth.`);$.push({type:"security-selected",protocol:l_,securityType:1,label:"None"}),j.push(Uint8Array.of(this.shared?1:0)),this.state="server-init",Z=!0;continue}if(this.state==="security-challenge"){if(this.buffer.byteLength<16)break;if(this.password===null)throw Error("VNC password authentication is required. Enter a password and reconnect.");let N=this.consume(16);j.push(e7(this.password,N)),this.state="security-result",Z=!0;continue}if(this.state==="security-result"){if(this.buffer.byteLength<4)break;let Y=new DataView(this.buffer.buffer,this.buffer.byteOffset,this.buffer.byteLength).getUint32(0,!1);if(this.consume(4),Y!==0){if(this.buffer.byteLength>=4){let K=new DataView(this.buffer.buffer,this.buffer.byteOffset,this.buffer.byteLength).getUint32(0,!1);if(this.buffer.byteLength>=4+K){let Q=U$(this.consume(4+K).slice(4));throw Error(Q||"VNC authentication failed.")}}throw Error("VNC authentication failed.")}$.push({type:"security-result",protocol:l_,ok:!0}),j.push(Uint8Array.of(this.shared?1:0)),this.state="server-init",Z=!0;continue}if(this.state==="server-init"){if(this.buffer.byteLength<24)break;let N=new DataView(this.buffer.buffer,this.buffer.byteOffset,this.buffer.byteLength),Y=N.getUint16(0,!1),K=N.getUint16(2,!1),Q=_9(N,4),X=N.getUint32(20,!1);if(this.buffer.byteLength<24+X)break;let G=this.consume(24),W=new DataView(G.buffer,G.byteOffset,G.byteLength);if(this.framebufferWidth=W.getUint16(0,!1),this.framebufferHeight=W.getUint16(2,!1),this.serverPixelFormat=_9(W,4),this.serverName=U$(this.consume(X)),this.state="connected",this.pipeline)this.pipeline.initFramebuffer(this.framebufferWidth,this.framebufferHeight);j.push(kK(this.clientPixelFormat)),j.push(IK(this.encodings)),j.push($9(!1,this.framebufferWidth,this.framebufferHeight)),$.push({type:"display-init",protocol:l_,width:Y,height:K,name:this.serverName,pixelFormat:Q}),Z=!0;continue}if(this.state==="connected"){if(this.buffer.byteLength<1)break;let N=this.buffer[0];if(N===0){if(this.buffer.byteLength<4)break;let K=new DataView(this.buffer.buffer,this.buffer.byteOffset,this.buffer.byteLength).getUint16(2,!1),Q=4,X=[],G=!1,W=!!this.pipeline;for(let U=0;U<K;U+=1){if(this.buffer.byteLength<Q+12){G=!0;break}let D=new DataView(this.buffer.buffer,this.buffer.byteOffset+Q,12),k=D.getUint16(0,!1),T=D.getUint16(2,!1),E=D.getUint16(4,!1),J=D.getUint16(6,!1),A=D.getInt32(8,!1);if(Q+=12,A===0){let P=Math.max(1,Math.floor(Number(this.clientPixelFormat.bitsPerPixel||0)/8)),d=E*J*P;if(this.buffer.byteLength<Q+d){G=!0;break}let l=this.buffer.slice(Q,Q+d);if(Q+=d,W)this.pipeline.processRawRect(l,k,T,E,J,this.clientPixelFormat),X.push({kind:"pipeline",x:k,y:T,width:E,height:J});else X.push({kind:"rgba",x:k,y:T,width:E,height:J,rgba:this.decodeRawRect(l,E,J,this.clientPixelFormat)});continue}if(A===2){let P=TK(this.buffer,Q,E,J,this.clientPixelFormat);if(!P){G=!0;break}if(W){let d=this.buffer.slice(Q,Q+P.consumed);this.pipeline.processRreRect(d,k,T,E,J,this.clientPixelFormat),X.push({kind:"pipeline",x:k,y:T,width:E,height:J})}else X.push({kind:"rgba",x:k,y:T,width:E,height:J,rgba:P.rgba});Q+=P.consumed;continue}if(A===1){if(this.buffer.byteLength<Q+4){G=!0;break}let P=new DataView(this.buffer.buffer,this.buffer.byteOffset+Q,4),d=P.getUint16(0,!1),l=P.getUint16(2,!1);if(Q+=4,W)this.pipeline.processCopyRect(k,T,E,J,d,l),X.push({kind:"pipeline",x:k,y:T,width:E,height:J});else X.push({kind:"copy",x:k,y:T,width:E,height:J,srcX:d,srcY:l});continue}if(A===16){let P=CK(this.buffer,Q,E,J,this.clientPixelFormat,this.decodeRawRect,this.inflateZrle);if(!P){G=!0;break}if(Q+=P.consumed,P.skipped)continue;if(W&&P.decompressed)this.pipeline.processZrleTileData(P.decompressed,k,T,E,J,this.clientPixelFormat),X.push({kind:"pipeline",x:k,y:T,width:E,height:J});else X.push({kind:"rgba",x:k,y:T,width:E,height:J,rgba:P.rgba});continue}if(A===5){let P=yK(this.buffer,Q,E,J,this.clientPixelFormat,this.decodeRawRect);if(!P){G=!0;break}if(W){let d=this.buffer.slice(Q,Q+P.consumed);this.pipeline.processHextileRect(d,k,T,E,J,this.clientPixelFormat),X.push({kind:"pipeline",x:k,y:T,width:E,height:J})}else X.push({kind:"rgba",x:k,y:T,width:E,height:J,rgba:P.rgba});Q+=P.consumed;continue}if(A===-223){if(this.framebufferWidth=E,this.framebufferHeight=J,W)this.pipeline.initFramebuffer(E,J);X.push({kind:"resize",x:k,y:T,width:E,height:J});continue}throw Error(`Unsupported VNC rectangle encoding ${A}. This viewer currently supports ZRLE, Hextile, RRE, CopyRect, raw rectangles, and DesktopSize only.`)}if(G)break;this.consume(Q);let B={type:"framebuffer-update",protocol:l_,width:this.framebufferWidth,height:this.framebufferHeight,rects:X};if(W)B.framebuffer=this.pipeline.getFramebuffer();$.push(B),j.push($9(!0,this.framebufferWidth,this.framebufferHeight)),Z=!0;continue}if(N===2){this.consume(1),$.push({type:"bell",protocol:l_}),Z=!0;continue}if(N===3){if(this.buffer.byteLength<8)break;let K=new DataView(this.buffer.buffer,this.buffer.byteOffset,this.buffer.byteLength).getUint32(4,!1);if(this.buffer.byteLength<8+K)break;this.consume(8);let Q=U$(this.consume(K));$.push({type:"clipboard",protocol:l_,text:Q}),Z=!0;continue}throw Error(`Unsupported VNC server message type ${N}.`)}}return{events:$,outgoing:j}}consume(_){let $=this.buffer.slice(0,_);return this.buffer=this.buffer.slice(_),$}}var j4="piclaw://vnc";function SK(_){let $=String(_||"");if($===j4)return null;if(!$.startsWith(`${j4}/`))return null;let j=$.slice(`${j4}/`.length).trim();if(!j)return null;try{return decodeURIComponent(j)}catch{return j}}function a4(_){return String(_||"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}async function xK(_=null){let $=_?`/vnc/session?target=${encodeURIComponent(_)}`:"/vnc/session",j=await fetch($,{credentials:"same-origin"}),Z=await j.json().catch(()=>({}));if(!j.ok)throw Error(Z?.error||`HTTP ${j.status}`);return Z}function wK(_){return`${window.location.protocol==="https:"?"wss:":"ws:"}//${window.location.host}/vnc/ws?target=${encodeURIComponent(_)}`}function RK(_,$){let j=String(_||"").trim(),Z=Math.floor(Number($||0));if(!j||!Number.isFinite(Z)||Z<=0||Z>65535)return null;return`${j.includes(":")&&!j.startsWith("[")?`[${j}]`:j}:${Z}`}class Y9{container;root;statusEl;bodyEl;metricsEl;targetSubtitleEl;socketBoundary=null;protocol=null;disposed=!1;targetId=null;targetLabel=null;bytesIn=0;bytesOut=0;canvas=null;canvasCtx=null;displayPlaceholderEl=null;displayInfoEl=null;displayMetaEl=null;displayStageEl=null;chromeEl=null;sessionShellEl=null;resizeObserver=null;displayScale=null;readOnly=!1;pointerButtonMask=0;pressedKeysyms=new Map;passwordInputEl=null;authPassword=null;directHostInputEl=null;directPortInputEl=null;directPasswordInputEl=null;hasRenderedFrame=!1;frameTimeoutId=null;rawFallbackAttempted=!1;protocolRecovering=!1;constructor(_,$){this.container=_,this.targetId=SK($?.path),this.targetLabel=this.targetId||null,this.root=document.createElement("div"),this.root.className="vnc-pane-shell",this.root.style.cssText="display:flex;flex-direction:column;width:100%;height:100%;background:var(--bg-primary);color:var(--text-primary);",this.targetSubtitleEl=null,this.statusEl=document.createElement("div"),this.statusEl.style.cssText="display:none;",this.statusEl.textContent="",this.bodyEl=document.createElement("div"),this.bodyEl.style.cssText="flex:1;min-height:0;display:flex;align-items:stretch;justify-content:stretch;padding:12px;",this.metricsEl=document.createElement("div"),this.metricsEl.style.cssText="display:none;",this.updateMetrics(),this.root.append(this.statusEl,this.bodyEl),this.container.appendChild(this.root),this.load()}setStatus(_){this.statusEl.textContent=String(_||"")}setSessionChromeVisible(_){if(this.chromeEl)this.chromeEl.style.display=_?"grid":"none";if(this.sessionShellEl?.style)this.sessionShellEl.style.gridTemplateRows=_?"auto minmax(0,1fr)":"1fr";if(this.displayStageEl?.style)this.displayStageEl.style.padding=_?"12px":"0",this.displayStageEl.style.border=_?"1px solid var(--border-color)":"none",this.displayStageEl.style.borderRadius=_?"16px":"0",this.displayStageEl.style.background=_?"#0a0a0a":"#000";if(this.displayPlaceholderEl?.style)this.displayPlaceholderEl.style.display=_?"block":"none"}updateMetrics(){this.metricsEl.textContent=`Transport bytes — in: ${this.bytesIn} / out: ${this.bytesOut}`}applyMetrics(_){this.bytesIn=Number(_?.bytesIn||0),this.bytesOut=Number(_?.bytesOut||0),this.updateMetrics()}openTargetTab(_,$){if(this.targetId=String(_||"").trim()||null,this.targetLabel=String($||_||"").trim()||this.targetId||"VNC",this.targetId)this.renderTargetSession({direct_connect_enabled:!0,target:{id:this.targetId,label:this.targetLabel,read_only:!1,direct_connect:!0}}),this.setStatus("Connecting…"),this.updateDisplayInfo("Connecting…"),this.updateDisplayMeta("connecting");this.load()}requestPanePopout(_,$){this.container.dispatchEvent(new CustomEvent("pane:popout",{bubbles:!0,detail:{path:_,label:$}}))}resetLiveSession(){this.protocol=null;try{this.socketBoundary?.dispose?.()}catch{}this.socketBoundary=null;try{this.resizeObserver?.disconnect?.()}catch{}if(this.resizeObserver=null,this.canvas=null,this.canvasCtx=null,this.displayPlaceholderEl=null,this.displayInfoEl=null,this.displayMetaEl=null,this.displayStageEl=null,this.displayScale=null,this.passwordInputEl=null,this.directHostInputEl=null,this.directPortInputEl=null,this.directPasswordInputEl=null,this.hasRenderedFrame=!1,this.rawFallbackAttempted=!1,this.protocolRecovering=!1,this.frameTimeoutId)clearTimeout(this.frameTimeoutId),this.frameTimeoutId=null;this.pressedKeysyms.clear()}renderTargets(_){this.resetLiveSession();let $=Array.isArray(_?.targets)?_.targets:[],j=Boolean(_?.direct_connect_enabled);this.bodyEl.innerHTML=`
            <div style="width:100%;height:100%;min-height:0;display:grid;align-content:start;justify-items:center;gap:16px;overflow:auto;padding:24px;box-sizing:border-box;">
                ${j?`
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
                        ${$.map((N)=>`
                            <div style="text-align:left;padding:16px;border:1px solid var(--border-color);border-radius:14px;background:var(--bg-secondary);color:inherit;display:flex;flex-direction:column;gap:12px;">
                                <div>
                                    <div style="font-weight:600;margin-bottom:6px;">${a4(N.label||N.id)}</div>
                                    <div style="font:12px var(--font-family-mono, monospace);color:var(--text-secondary);">${a4(N.id)}</div>
                                    <div style="margin-top:8px;font-size:12px;color:var(--text-secondary);">${N.readOnly?"Read-only target":"Interactive target"}</div>
                                </div>
                                <div style="display:flex;flex-wrap:wrap;gap:8px;">
                                    <button type="button" data-target-open-tab="${a4(N.id)}" data-target-label="${a4(N.label||N.id)}" style="padding:8px 12px;border:1px solid var(--border-color);border-radius:10px;background:var(--bg-primary);cursor:pointer;color:inherit;">Connect</button>
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
        `,this.directHostInputEl=this.bodyEl.querySelector("[data-vnc-direct-host]"),this.directPortInputEl=this.bodyEl.querySelector("[data-vnc-direct-port]"),this.directPasswordInputEl=this.bodyEl.querySelector("[data-vnc-direct-password]");let Z=()=>{let N=RK(this.directHostInputEl?.value,this.directPortInputEl?.value);if(!N)return;this.authPassword=c$(this.directPasswordInputEl?this.directPasswordInputEl.value:this.authPassword),this.openTargetTab(N,N)};this.directHostInputEl?.addEventListener("keydown",(N)=>{if(N.key!=="Enter")return;N.preventDefault(),Z()}),this.directPortInputEl?.addEventListener("keydown",(N)=>{if(N.key!=="Enter")return;N.preventDefault(),Z()}),this.directPasswordInputEl?.addEventListener("keydown",(N)=>{if(N.key!=="Enter")return;N.preventDefault(),Z()}),this.bodyEl.querySelector("[data-direct-open-tab]")?.addEventListener("click",()=>Z());for(let N of Array.from(this.bodyEl.querySelectorAll("[data-target-open-tab]")))N.addEventListener("click",()=>{let Y=N.getAttribute("data-target-open-tab"),K=N.getAttribute("data-target-label")||Y||"VNC";if(!Y)return;this.openTargetTab(Y,K)})}renderTargetSession(_){this.resetLiveSession();let $=_?.target||{},j=$?.label||this.targetId||"VNC target";if(this.targetLabel=j,this.readOnly=Boolean($.read_only),this.pointerButtonMask=0,this.hasRenderedFrame=!1,this.pressedKeysyms.clear(),this.bodyEl.innerHTML=`
            <div data-vnc-session-shell style="width:100%;height:100%;min-height:0;display:grid;grid-template-rows:auto minmax(0,1fr);gap:12px;">
                <div data-vnc-session-chrome style="padding:10px 12px;border:1px solid var(--border-color);border-radius:14px;background:var(--bg-secondary);display:grid;gap:10px;">
                    <div style="display:grid;gap:4px;min-width:0;">
                        <div style="font:12px var(--font-family-mono, monospace);color:var(--text-secondary);white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">${a4($.id||this.targetId||"")} · ${$.read_only?"read-only":"interactive"} · websocket → TCP proxy</div>
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
                    <canvas data-display-canvas tabindex="0" style="display:none;max-width:100%;max-height:100%;width:auto;height:auto;image-rendering:auto;box-shadow:0 12px 36px rgba(0,0,0,.35);border-radius:8px;background:#000;"></canvas>
                    <div data-display-placeholder style="max-width:520px;text-align:center;color:#d7d7d7;line-height:1.6;">
                        <div style="font-weight:700;font-size:18px;margin-bottom:8px;">${a4(j)}</div>
                        <div style="font-size:13px;color:#b7b7b7;">Waiting for the VNC/RFB handshake and first framebuffer update…</div>
                    </div>
                </div>
            </div>
        `,this.sessionShellEl=this.bodyEl.querySelector("[data-vnc-session-shell]"),this.chromeEl=this.bodyEl.querySelector("[data-vnc-session-chrome]"),this.displayStageEl=this.bodyEl.querySelector("[data-display-stage]"),this.canvas=this.bodyEl.querySelector("[data-display-canvas]"),this.displayPlaceholderEl=this.bodyEl.querySelector("[data-display-placeholder]"),this.displayInfoEl=this.bodyEl.querySelector("[data-display-info]"),this.displayMetaEl=this.bodyEl.querySelector("[data-display-meta]"),this.canvasCtx=this.canvas?.getContext?.("2d",{alpha:!1})||null,this.canvasCtx)this.canvasCtx.imageSmoothingEnabled=!0,this.canvasCtx.imageSmoothingQuality="high";if(this.updateDisplayInfo("Waiting for VNC protocol negotiation…"),this.updateDisplayMeta(),this.setSessionChromeVisible(!0),this.attachDisplayResizeObserver(),this.attachCanvasPointerHandlers(),this.attachCanvasKeyboardHandlers(),this.passwordInputEl=this.bodyEl.querySelector("[data-vnc-password]"),this.passwordInputEl&&this.authPassword!==null)this.passwordInputEl.value=this.authPassword;this.passwordInputEl?.addEventListener("input",()=>{this.authPassword=c$(this.passwordInputEl.value)}),this.passwordInputEl?.addEventListener("keydown",(Y)=>{if(Y.key!=="Enter")return;Y.preventDefault(),this.connectSocket()}),this.bodyEl.querySelector("[data-vnc-reconnect]")?.addEventListener("click",()=>{this.authPassword=c$(this.passwordInputEl?this.passwordInputEl.value:this.authPassword),this.connectSocket()}),this.bodyEl.querySelector("[data-open-target-picker]")?.addEventListener("click",()=>{this.openTargetTab("","VNC")})}updateDisplayInfo(_){if(this.displayInfoEl)this.displayInfoEl.textContent=String(_||"")}updateDisplayMeta(_=""){if(!this.displayMetaEl)return;let $=this.protocol?.state?`state=${this.protocol.state}`:"state=idle",j=this.protocol?.framebufferWidth&&this.protocol?.framebufferHeight?`${this.protocol.framebufferWidth}×${this.protocol.framebufferHeight}`:"pending",Z=this.protocol?.serverName?` · name=${this.protocol.serverName}`:"",N=this.displayScale?` · scale=${Math.round(this.displayScale*100)}%`:"",Y=_?` · ${_}`:"";this.displayMetaEl.textContent=`${$} · framebuffer=${j}${Z}${N}${Y}`}ensureCanvasSize(_,$,j={}){if(!this.canvas||!this.canvasCtx||!_||!$)return;if(this.canvas.width!==_||this.canvas.height!==$)this.canvas.width=_,this.canvas.height=$;let Z=j?.reveal===!0;if(this.canvas.style.display=Z||this.hasRenderedFrame?"block":"none",this.canvas.style.aspectRatio=`${_} / ${$}`,this.displayPlaceholderEl)this.displayPlaceholderEl.style.display=Z||this.hasRenderedFrame?"none":"";this.updateCanvasScale()}attachDisplayResizeObserver(){if(!this.displayStageEl||typeof ResizeObserver>"u")return;try{this.resizeObserver?.disconnect?.()}catch{}this.resizeObserver=new ResizeObserver(()=>{this.updateCanvasScale()}),this.resizeObserver.observe(this.displayStageEl)}updateCanvasScale(){if(!this.canvas||!this.displayStageEl||!this.canvas.width||!this.canvas.height)return;requestAnimationFrame(()=>{if(!this.canvas||!this.displayStageEl)return;let _=this.displayStageEl.getBoundingClientRect?.(),$=Math.max(1,Math.floor(_?.width||this.displayStageEl.clientWidth||0)-32),j=Math.max(1,Math.floor(_?.height||this.displayStageEl.clientHeight||0)-32);if(!$||!j)return;let Z=R7($,j,this.canvas.width,this.canvas.height);this.displayScale=Z,this.canvas.style.width=`${Math.max(1,Math.round(this.canvas.width*Z))}px`,this.canvas.style.height=`${Math.max(1,Math.round(this.canvas.height*Z))}px`,this.updateDisplayMeta()})}getFramebufferPointFromEvent(_){if(!this.canvas||!this.protocol?.framebufferWidth||!this.protocol?.framebufferHeight)return null;let $=this.canvas.getBoundingClientRect?.();if(!$||!$.width||!$.height)return null;return S7(_.clientX,_.clientY,$,this.protocol.framebufferWidth,this.protocol.framebufferHeight)}sendPointerEvent(_,$,j){if(!this.socketBoundary||!this.protocol||this.protocol.state!=="connected")return;this.socketBoundary.send(m5(_,$,j))}attachCanvasPointerHandlers(){if(!this.canvas||this.readOnly)return;this.canvas.style.cursor="crosshair",this.canvas.style.touchAction="none",this.canvas.addEventListener("contextmenu",(_)=>{_.preventDefault()}),this.canvas.addEventListener("pointermove",(_)=>{let $=this.getFramebufferPointFromEvent(_);if(!$)return;this.sendPointerEvent(this.pointerButtonMask,$.x,$.y)}),this.canvas.addEventListener("pointerdown",(_)=>{let $=this.getFramebufferPointFromEvent(_);if(!$)return;_.preventDefault(),this.canvas?.focus?.();try{this.canvas?.setPointerCapture?.(_.pointerId)}catch{}this.pointerButtonMask|=H6(_.button),this.sendPointerEvent(this.pointerButtonMask,$.x,$.y)}),this.canvas.addEventListener("pointerup",(_)=>{let $=this.getFramebufferPointFromEvent(_);if(!$)return;_.preventDefault(),this.pointerButtonMask&=~H6(_.button),this.sendPointerEvent(this.pointerButtonMask,$.x,$.y);try{this.canvas?.releasePointerCapture?.(_.pointerId)}catch{}}),this.canvas.addEventListener("pointercancel",(_)=>{let $=this.getFramebufferPointFromEvent(_)||{x:0,y:0};this.pointerButtonMask=0,this.sendPointerEvent(0,$.x,$.y);try{this.canvas?.releasePointerCapture?.(_.pointerId)}catch{}}),this.canvas.addEventListener("wheel",(_)=>{let $=this.getFramebufferPointFromEvent(_);if(!$)return;_.preventDefault();for(let j of x7(_.deltaY,$.x,$.y,this.pointerButtonMask))this.socketBoundary?.send?.(j)},{passive:!1})}sendKeyEvent(_,$){if(!this.socketBoundary||!this.protocol||this.protocol.state!=="connected")return;this.socketBoundary.send(w7(_,$))}releasePressedKeys(){for(let _ of this.pressedKeysyms.values())this.sendKeyEvent(!1,_);this.pressedKeysyms.clear()}attachCanvasKeyboardHandlers(){if(!this.canvas||this.readOnly)return;this.canvas.addEventListener("keydown",(_)=>{let $=O6(_);if($==null)return;if(_.repeat&&this.pressedKeysyms.has(_.code||_.key)){_.preventDefault();return}_.preventDefault();let j=_.code||_.key;this.pressedKeysyms.set(j,$),this.sendKeyEvent(!0,$)}),this.canvas.addEventListener("keyup",(_)=>{let $=_.code||_.key,j=this.pressedKeysyms.get($)??O6(_);if(j==null)return;_.preventDefault(),this.pressedKeysyms.delete($),this.sendKeyEvent(!1,j)}),this.canvas.addEventListener("blur",()=>{this.releasePressedKeys()})}drawRgbaRect(_){if(!this.canvasCtx||!this.canvas)return;this.ensureCanvasSize(this.canvas.width||_.width,this.canvas.height||_.height,{reveal:!0});let $=new ImageData(_.rgba,_.width,_.height);this.canvasCtx.putImageData($,_.x,_.y),this.hasRenderedFrame=!0}copyCanvasRect(_){if(!this.canvasCtx||!this.canvas)return;this.ensureCanvasSize(this.canvas.width||_.width,this.canvas.height||_.height,{reveal:!0});let $=this.canvasCtx.getImageData(_.srcX,_.srcY,_.width,_.height);this.canvasCtx.putImageData($,_.x,_.y),this.hasRenderedFrame=!0}scheduleRawFallbackTimeout(){if(this.frameTimeoutId)clearTimeout(this.frameTimeoutId),this.frameTimeoutId=null;if(this.rawFallbackAttempted||this.protocolRecovering)return;this.frameTimeoutId=setTimeout(()=>{if(this.hasRenderedFrame||this.rawFallbackAttempted||this.protocolRecovering)return;if(this.protocol&&this.socketBoundary)this.rawFallbackAttempted=!0,this.protocolRecovering=!0,this.setStatus("No framebuffer update yet; retrying with RAW encoding."),this.updateDisplayInfo("No framebuffer update yet. Retrying with RAW encoding."),this.updateDisplayMeta("reconnect-encoding-fallback"),this.connectWithEncodings("0")},2200)}applyRemoteDisplayEvent(_){if(!_)return;switch(_.type){case"protocol-version":this.setStatus(`Negotiated ${_.protocol.toUpperCase()} ${_.server} → ${_.client}.`),this.updateDisplayInfo(`Negotiated ${_.server} → ${_.client}.`),this.updateDisplayMeta();return;case"security-types":this.setStatus(`Server offered security types: ${_.types.join(", ")||"none"}.`),this.updateDisplayInfo(`Security types: ${_.types.join(", ")||"none"}.`),this.updateDisplayMeta();return;case"security-selected":this.setStatus(`Using ${_.protocol.toUpperCase()} security type ${_.label}.`),this.updateDisplayInfo(`Security: ${_.label}.`),this.updateDisplayMeta();return;case"security-result":this.setStatus("Security negotiation complete. Waiting for server init…"),this.updateDisplayInfo("Security negotiation complete. Waiting for server init…"),this.updateDisplayMeta();return;case"display-init":this.ensureCanvasSize(_.width,_.height),this.setSessionChromeVisible(!1),this.setStatus(`Connected to ${this.targetLabel||this.targetId||"target"} — waiting for first framebuffer update (${_.width}×${_.height}).`),this.updateDisplayInfo(`Connected to ${_.name||this.targetLabel||this.targetId||"remote display"}. Waiting for first framebuffer update…`),this.updateDisplayMeta("awaiting-frame"),this.scheduleRawFallbackTimeout();return;case"framebuffer-update":if(this.frameTimeoutId)clearTimeout(this.frameTimeoutId),this.frameTimeoutId=null;let $=!1,j=(_.rects||[]).some((Z)=>Z.kind==="pipeline");if(_.framebuffer&&_.framebuffer.length>0&&_.width>0&&_.height>0&&j){this.ensureCanvasSize(_.width,_.height,{reveal:!0});for(let N of _.rects||[])if(N.kind==="resize")this.ensureCanvasSize(N.width,N.height);let Z=this.canvas?.getContext("2d",{alpha:!1});if(Z){let N=new ImageData(new Uint8ClampedArray(_.framebuffer),_.width,_.height);Z.putImageData(N,0,0),$=!0}}else for(let Z of _.rects||[]){if(Z.kind==="resize"){this.ensureCanvasSize(Z.width,Z.height);continue}if(Z.kind==="copy"){this.ensureCanvasSize(_.width,_.height,{reveal:!0}),this.copyCanvasRect(Z),$=!0;continue}if(Z.kind==="rgba")this.ensureCanvasSize(_.width,_.height,{reveal:!0}),this.drawRgbaRect(Z),$=!0}if($||this.hasRenderedFrame)this.protocolRecovering=!1,this.setStatus(`Rendering live framebuffer — ${_.width}×${_.height}.`),this.updateDisplayInfo(`Framebuffer update applied (${(_.rects||[]).length} rect${(_.rects||[]).length===1?"":"s"}).`),this.updateDisplayMeta();else this.setStatus(`Connected to ${this.targetLabel||this.targetId||"target"} — waiting for painted framebuffer data.`),this.updateDisplayInfo(`Framebuffer update received, but no paintable rects yet (${(_.rects||[]).length} rect${(_.rects||[]).length===1?"":"s"}).`),this.updateDisplayMeta("awaiting-frame"),this.scheduleRawFallbackTimeout();return;case"clipboard":this.setStatus("Remote clipboard updated."),this.updateDisplayInfo(`Clipboard text received (${_.text.length} chars).`),this.updateDisplayMeta();return;case"bell":this.setStatus("Remote display bell received."),this.updateDisplayInfo("Remote display bell received."),this.updateDisplayMeta();return}}async handleSocketMessage(_){if(_?.kind==="control"){let j=_.payload;if(j?.type==="vnc.error"){this.setStatus(`Proxy error: ${j.error||"Unknown error"}`),this.updateDisplayInfo(`Proxy error: ${j.error||"Unknown error"}`),this.updateDisplayMeta("proxy-error");return}if(j?.type==="vnc.connected"){let Z=j?.target?.label||this.targetLabel||this.targetId;this.setStatus(`Connected to ${Z}. Waiting for VNC/RFB data…`),this.updateDisplayInfo(`Connected to ${Z}. Waiting for VNC handshake…`),this.updateDisplayMeta();return}if(j?.type==="pong")return;return}let $=this.protocol||(this.protocol=new p5);try{let j=_.data instanceof Blob?await _.data.arrayBuffer():_.data,Z=$.receive(j);for(let N of Z.outgoing||[])this.socketBoundary?.send?.(N);for(let N of Z.events||[])this.applyRemoteDisplayEvent(N)}catch(j){let Z=j?.message||"Unknown error";if(this.setSessionChromeVisible(!0),this.setStatus(`Display protocol error: ${Z}`),this.updateDisplayInfo(`Display protocol error: ${Z}`),this.updateDisplayMeta("protocol-error"),this.frameTimeoutId)clearTimeout(this.frameTimeoutId),this.frameTimeoutId=null;if(!this.rawFallbackAttempted&&!this.protocolRecovering&&/unexpected eof|zlib|decompress|protocol|buffer|undefined|not an object|reading '0'/i.test(Z))this.rawFallbackAttempted=!0,this.protocolRecovering=!0,this.connectWithEncodings("0")}}async connectSocket(_=null){if(!this.targetId||this.disposed)return;if(this.protocolRecovering&&_==null)this.protocolRecovering=!1;try{this.socketBoundary?.dispose?.()}catch{}if(_==null)this.rawFallbackAttempted=!1,this.protocolRecovering=!1;let $=_==null?null:String(_).trim(),j=await y7(),Z={};if(j)Z.pipeline=j,Z.decodeRawRect=(Y,K,Q,X)=>j.decodeRawRectToRgba(Y,K,Q,X);let N=c$(this.authPassword);if(N!==null)Z.password=N;if($)Z.encodings=$;if(this.protocol=new p5(Z),this.hasRenderedFrame=!1,this.frameTimeoutId=null,this.canvas)this.canvas.style.display="none";if(this.displayPlaceholderEl)this.displayPlaceholderEl.style.display="";this.socketBoundary=new U6({url:wK(this.targetId),binaryType:"arraybuffer",onOpen:()=>{this.setStatus(`Connected to proxy for ${this.targetId}. Waiting for VNC/RFB data…`),this.updateDisplayInfo("WebSocket proxy connected. Waiting for handshake…"),this.updateDisplayMeta(),this.socketBoundary?.sendControl?.({type:"ping"})},onMetrics:(Y)=>{this.applyMetrics(Y)},onMessage:(Y)=>{this.handleSocketMessage(Y)},onClose:()=>{if(this.setSessionChromeVisible(!0),this.frameTimeoutId)clearTimeout(this.frameTimeoutId),this.frameTimeoutId=null;if(this.disposed)return;this.setStatus(this.bytesIn>0?`Proxy closed after receiving ${this.bytesIn} byte(s).`:"Proxy closed."),this.updateDisplayInfo(this.bytesIn>0?"Remote display transport closed after receiving data.":"Remote display transport closed."),this.updateDisplayMeta("closed")},onError:()=>{this.setSessionChromeVisible(!0),this.setStatus("WebSocket proxy connection failed."),this.updateDisplayInfo("WebSocket proxy connection failed."),this.updateDisplayMeta("socket-error")}}),this.socketBoundary.connect()}connectWithEncodings(_){return this.connectSocket(_)}async load(){this.setStatus("");try{let _=await xK(this.targetId);if(!_?.enabled){this.renderTargets(_),this.setStatus("");return}if(!this.targetId){this.renderTargets(_),this.setStatus("");return}this.renderTargetSession(_),await this.connectSocket()}catch(_){this.resetLiveSession(),this.bodyEl.innerHTML=`
                <div style="max-width:620px;text-align:center;padding:28px;border:1px dashed var(--border-color);border-radius:14px;background:var(--bg-secondary);">
                    <div style="font-size:32px;margin-bottom:10px;">⚠️</div>
                    <div style="font-weight:600;margin-bottom:6px;">Failed to load VNC session</div>
                    <div style="color:var(--text-secondary);font-size:13px;line-height:1.5;">${a4(_?.message||"Unknown error")}</div>
                </div>
            `,this.setStatus(`Session load failed: ${_?.message||"Unknown error"}`)}}getContent(){return}isDirty(){return!1}focus(){this.canvas?.focus?.(),this.root?.focus?.()}resize(){this.updateCanvasScale()}dispose(){if(this.disposed)return;this.disposed=!0,this.resetLiveSession(),this.root?.remove?.()}}var y6={id:"vnc-viewer",label:"VNC",icon:"display",capabilities:["preview"],placement:"tabs",canHandle(_){let $=String(_?.path||"");return $===j4||$.startsWith(`${j4}/`)?9000:!1},mount(_,$){return new Y9(_,$)}};function w4(_){return String(_||"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}function fK(_,$){let j=String(_||"").trim();if(!j)return j;if(/^[a-zA-Z][a-zA-Z\d+.-]*:/.test(j)||j.startsWith("#")||j.startsWith("data:")||j.startsWith("blob:"))return j;let Z=j.match(/^([^?#]*)(\?[^#]*)?(#.*)?$/),N=Z?.[1]||j,Y=Z?.[2]||"",K=Z?.[3]||"",Q=String($||"").split("/").slice(0,-1).join("/"),G=N.startsWith("/")?N:`${Q?`${Q}/`:""}${N}`,W=[];for(let U of G.split("/")){if(!U||U===".")continue;if(U===".."){if(W.length>0)W.pop();continue}W.push(U)}let B=W.join("/");return`${L5(B)}${Y}${K}`}function o$(_){return _?.preview||null}function vK(_){let $=String(_||""),j=Math.max($.lastIndexOf("/"),$.lastIndexOf("\\")),Z=j>=0?$.slice(j+1):$,N=Z.lastIndexOf(".");if(N<=0||N===Z.length-1)return"none";return Z.slice(N+1)}function bK(_){if(!_)return"unknown";if(_.kind==="image")return"image";if(_.kind==="text")return _.content_type==="text/markdown"?"markdown":"text";if(_.kind==="binary")return"binary";return String(_.kind||"unknown")}function uK(_,$){let j=$?.path||_?.path||"",Z=[];if($?.content_type)Z.push(`<span><strong>type:</strong> ${w4($.content_type)}</span>`);if(typeof $?.size==="number")Z.push(`<span><strong>size:</strong> ${w4(T_($.size))}</span>`);if($?.mtime)Z.push(`<span><strong>modified:</strong> ${w4(s4($.mtime))}</span>`);if(Z.push(`<span><strong>kind:</strong> ${w4(bK($))}</span>`),Z.push(`<span><strong>extension:</strong> ${w4(vK(j))}</span>`),j)Z.push(`<span><strong>path:</strong> ${w4(j)}</span>`);if($?.truncated)Z.push("<span><strong>content:</strong> truncated</span>");return`<div class="workspace-preview-meta workspace-preview-meta-inline">${Z.join("")}</div>`}function mK(_){let $=o$(_);if(!$)return'<div class="workspace-preview-text">No preview available.</div>';let j=uK(_,$);if($.kind==="image"){let Z=$.url||($.path?L5($.path):"");return`${j}
            <div class="workspace-preview-image">
                <img src="${w4(Z)}" alt="preview" />
            </div>
        `}if($.kind==="text"){if($.content_type==="text/markdown"){let Z=H_($.text||"",null,{rewriteImageSrc:(N)=>fK(N,$.path||_?.path)});return`${j}<div class="workspace-preview-text">${Z}</div>`}return`${j}<pre class="workspace-preview-text"><code>${w4($.text||"")}</code></pre>`}if($.kind==="binary")return`${j}<div class="workspace-preview-text">Binary file — download to view.</div>`;return`${j}<div class="workspace-preview-text">No preview available.</div>`}class S6{constructor(_,$){this.container=_,this.context=$,this.disposed=!1,this.host=document.createElement("div"),this.host.className="workspace-preview-render-host",this.host.tabIndex=0,this.container.appendChild(this.host),this.render()}render(){if(this.disposed)return;this.host.innerHTML=mK(this.context)}getContent(){let _=o$(this.context);return typeof _?.text==="string"?_.text:void 0}isDirty(){return!1}setContent(_,$){let j=o$(this.context);if(j&&j.kind==="text"){if(j.text=_,$!==void 0)j.mtime=$}if(this.context.content=_,$!==void 0)this.context.mtime=$;this.render()}focus(){this.host?.focus?.()}dispose(){if(this.disposed)return;this.disposed=!0,this.host?.remove(),this.container.innerHTML=""}}var x6={id:"workspace-markdown-preview",label:"Workspace Markdown Preview",icon:"preview",capabilities:["preview","readonly"],placement:"tabs",canHandle(_){let $=o$(_);if(_?.mode!=="view")return!1;if(!$||$.kind!=="text")return!1;return $.content_type==="text/markdown"?20:!1},mount(_,$){return new S6(_,$)}},w6={id:"workspace-preview-default",label:"Workspace Preview",icon:"preview",capabilities:["preview","readonly"],placement:"tabs",canHandle(_){if(_?.mode!=="view")return!1;return o$(_)||_?.path?1:!1},mount(_,$){return new S6(_,$)}};var gK=new Set([".docx",".doc",".odt",".rtf",".xlsx",".xls",".ods",".csv",".pptx",".ppt",".odp"]),hK={".docx":"Word Document",".doc":"Word (Legacy)",".odt":"OpenDocument Text",".rtf":"Rich Text",".xlsx":"Excel Spreadsheet",".xls":"Excel (Legacy)",".ods":"OpenDocument Spreadsheet",".csv":"CSV Data",".pptx":"PowerPoint",".ppt":"PowerPoint (Legacy)",".odp":"OpenDocument Presentation"},pK={".docx":"\uD83D\uDCDD",".doc":"\uD83D\uDCDD",".odt":"\uD83D\uDCDD",".rtf":"\uD83D\uDCDD",".xlsx":"\uD83D\uDCCA",".xls":"\uD83D\uDCCA",".ods":"\uD83D\uDCCA",".csv":"\uD83D\uDCCA",".pptx":"\uD83D\uDCFD️",".ppt":"\uD83D\uDCFD️",".odp":"\uD83D\uDCFD️"};function Q9(_){if(!_)return"";let $=_.lastIndexOf(".");if($<0)return"";return _.slice($).toLowerCase()}function K9(_){return _.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}class q9{container;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Z=j.split("/").pop()||"document",N=Q9(j),Y=pK[N]||"\uD83D\uDCC4",K=hK[N]||"Office Document",Q=document.createElement("div");Q.style.cssText="width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:var(--bg-primary,#1a1a1a);",Q.innerHTML=`
            <div style="text-align:center;max-width:360px;padding:24px;">
                <div style="font-size:56px;margin-bottom:12px;">${Y}</div>
                <div style="font-size:14px;font-weight:600;color:var(--text-primary,#e0e0e0);margin-bottom:4px;word-break:break-word;">${K9(Z)}</div>
                <div style="font-size:11px;color:var(--text-secondary,#888);margin-bottom:20px;">${K9(K)}</div>
                <button id="ov-open-tab" style="padding:8px 20px;background:var(--accent-color,#1d9bf0);color:var(--accent-contrast-text,#fff);
                    border:none;border-radius:5px;font-size:13px;font-weight:500;cursor:pointer;
                    transition:background 0.15s;"
                    onmouseenter="this.style.background='var(--accent-hover,#1a8cd8)'"
                    onmouseleave="this.style.background='var(--accent-color,#1d9bf0)'">
                    Open in Tab
                </button>
            </div>
        `,_.appendChild(Q);let X=Q.querySelector("#ov-open-tab");if(X)X.addEventListener("click",()=>{let G=new CustomEvent("office-viewer:open-tab",{bubbles:!0,detail:{path:j}});_.dispatchEvent(G)})}getContent(){return}isDirty(){return!1}focus(){}resize(){}dispose(){if(this.disposed)return;this.disposed=!0,this.container.innerHTML=""}}class G9{container;iframe=null;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Z=j.split("/").pop()||"document",N=`/workspace/raw?path=${encodeURIComponent(j)}`,Y=`/office-viewer/?url=${encodeURIComponent(N)}&name=${encodeURIComponent(Z)}`;this.iframe=document.createElement("iframe"),this.iframe.src=Y,this.iframe.style.cssText="width:100%;height:100%;border:none;background:#1e1e1e;",_.appendChild(this.iframe)}getContent(){return}isDirty(){return!1}focus(){this.iframe?.focus()}resize(){}dispose(){if(this.disposed)return;if(this.disposed=!0,this.iframe)this.iframe.src="about:blank",this.iframe=null;this.container.innerHTML=""}}var R6={id:"office-viewer",label:"Office Viewer",icon:"file-text",capabilities:["readonly","preview"],placement:"tabs",canHandle(_){let $=Q9(_?.path);if(!$||!gK.has($))return!1;return 50},mount(_,$){if($?.mode==="view")return new q9(_,$);return new G9(_,$)}};var cK=/\.(csv|tsv)$/i;function X9(_){return _.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}class V9{container;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Z=j.split("/").pop()||"table.csv",N=j.toLowerCase().endsWith(".tsv")?"TSV Table":"CSV Table",Y=document.createElement("div");Y.style.cssText="width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:var(--bg-primary,#1a1a1a);",Y.innerHTML=`
            <div style="text-align:center;max-width:360px;padding:24px;">
                <div style="font-size:56px;margin-bottom:12px;">\uD83D\uDCCA</div>
                <div style="font-size:14px;font-weight:600;color:var(--text-primary,#e0e0e0);margin-bottom:4px;word-break:break-word;">${X9(Z)}</div>
                <div style="font-size:11px;color:var(--text-secondary,#888);margin-bottom:20px;">${X9(N)}</div>
                <button id="csv-open-tab" style="padding:8px 20px;background:var(--accent-color,#1d9bf0);color:var(--accent-contrast-text,#fff);
                    border:none;border-radius:5px;font-size:13px;font-weight:500;cursor:pointer;
                    transition:background 0.15s;"
                    onmouseenter="this.style.background='var(--accent-hover,#1a8cd8)'"
                    onmouseleave="this.style.background='var(--accent-color,#1d9bf0)'">
                    Open in Tab
                </button>
            </div>
        `,_.appendChild(Y);let K=Y.querySelector("#csv-open-tab");if(K)K.addEventListener("click",()=>{let Q=new CustomEvent("csv-viewer:open-tab",{bubbles:!0,detail:{path:j}});_.dispatchEvent(Q)})}getContent(){return}isDirty(){return!1}focus(){}resize(){}dispose(){if(this.disposed)return;this.disposed=!0,this.container.innerHTML=""}}class B9{container;iframe=null;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Z=`/csv-viewer/?path=${encodeURIComponent(j)}`;this.iframe=document.createElement("iframe"),this.iframe.src=Z,this.iframe.style.cssText="width:100%;height:100%;border:none;background:var(--bg-primary,#000);",_.appendChild(this.iframe)}getContent(){return}isDirty(){return!1}focus(){this.iframe?.focus()}resize(){}dispose(){if(this.disposed)return;if(this.disposed=!0,this.iframe)this.iframe.src="about:blank",this.iframe=null;this.container.innerHTML=""}}var f6={id:"csv-viewer",label:"CSV Viewer",icon:"table",capabilities:["readonly","preview"],placement:"tabs",canHandle(_){let $=_?.path||"";if(!cK.test($))return!1;return 55},mount(_,$){if($?.mode==="view")return new V9(_,$);return new B9(_,$)}};var lK=/\.pdf$/i;function iK(_){return _.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}class W9{container;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Z=j.split("/").pop()||"document.pdf",N=document.createElement("div");N.style.cssText="width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:var(--bg-primary,#1a1a1a);",N.innerHTML=`
            <div style="text-align:center;max-width:360px;padding:24px;">
                <div style="font-size:56px;margin-bottom:12px;">\uD83D\uDCC4</div>
                <div style="font-size:14px;font-weight:600;color:var(--text-primary,#e0e0e0);margin-bottom:4px;word-break:break-word;">${iK(Z)}</div>
                <div style="font-size:11px;color:var(--text-secondary,#888);margin-bottom:20px;">PDF Document</div>
                <button id="pdf-open-tab" style="padding:8px 20px;background:var(--accent-color,#1d9bf0);color:var(--accent-contrast-text,#fff);
                    border:none;border-radius:5px;font-size:13px;font-weight:500;cursor:pointer;
                    transition:background 0.15s;"
                    onmouseenter="this.style.background='var(--accent-hover,#1a8cd8)'"
                    onmouseleave="this.style.background='var(--accent-color,#1d9bf0)'">
                    Open in Tab
                </button>
            </div>
        `,_.appendChild(N);let Y=N.querySelector("#pdf-open-tab");if(Y)Y.addEventListener("click",()=>{let K=new CustomEvent("pdf-viewer:open-tab",{bubbles:!0,detail:{path:j}});_.dispatchEvent(K)})}getContent(){return}isDirty(){return!1}focus(){}resize(){}dispose(){if(this.disposed)return;this.disposed=!0,this.container.innerHTML=""}}class L9{container;iframe=null;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Z=`/pdf-viewer/?path=${encodeURIComponent(j)}`;this.iframe=document.createElement("iframe"),this.iframe.src=Z,this.iframe.style.cssText="width:100%;height:100%;border:none;background:#1e1e1e;",_.appendChild(this.iframe)}getContent(){return}isDirty(){return!1}focus(){this.iframe?.focus()}resize(){}dispose(){if(this.disposed)return;if(this.disposed=!0,this.iframe)this.iframe.src="about:blank",this.iframe=null;this.container.innerHTML=""}}var v6={id:"pdf-viewer",label:"PDF Viewer",icon:"file-text",capabilities:["readonly","preview"],placement:"tabs",canHandle(_){let $=_?.path||"";if(!lK.test($))return!1;return 52},mount(_,$){if($?.mode==="view")return new W9(_,$);return new L9(_,$)}};var nK=/\.(png|jpe?g|gif|webp|bmp|ico|svg)$/i;function b6(_){return _.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}class U9{container;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Z=j.split("/").pop()||"image",N=`/workspace/raw?path=${encodeURIComponent(j)}`,Y=document.createElement("div");Y.style.cssText="width:100%;height:100%;display:flex;flex-direction:column;background:var(--bg-primary,#1a1a1a);",Y.innerHTML=`
            <div style="flex:1;min-height:0;display:flex;align-items:center;justify-content:center;overflow:hidden;padding:16px;">
                <img src="${b6(N)}" alt="${b6(Z)}" style="max-width:100%;max-height:100%;object-fit:contain;border-radius:4px;" />
            </div>
            <div style="display:flex;align-items:center;justify-content:space-between;padding:8px 16px;border-top:1px solid var(--border-color,#333);flex-shrink:0;">
                <div style="font-size:12px;color:var(--text-secondary,#888);overflow:hidden;text-overflow:ellipsis;white-space:nowrap;min-width:0;">${b6(Z)}</div>
                <button id="img-open-tab" style="padding:5px 14px;background:var(--accent-color,#1d9bf0);color:var(--accent-contrast-text,#fff);
                    border:none;border-radius:4px;font-size:12px;font-weight:500;cursor:pointer;flex-shrink:0;
                    transition:background 0.15s;"
                    onmouseenter="this.style.background='var(--accent-hover,#1a8cd8)'"
                    onmouseleave="this.style.background='var(--accent-color,#1d9bf0)'">
                    Open in Tab
                </button>
            </div>
        `,_.appendChild(Y);let K=Y.querySelector("#img-open-tab");if(K)K.addEventListener("click",()=>{let Q=new CustomEvent("image-viewer:open-tab",{bubbles:!0,detail:{path:j}});_.dispatchEvent(Q)})}getContent(){return}isDirty(){return!1}focus(){}resize(){}dispose(){if(this.disposed)return;this.disposed=!0,this.container.innerHTML=""}}class z9{container;iframe=null;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Z=`/image-viewer/?path=${encodeURIComponent(j)}`;this.iframe=document.createElement("iframe"),this.iframe.src=Z,this.iframe.style.cssText="width:100%;height:100%;border:none;background:var(--bg-primary,#000);",_.appendChild(this.iframe)}getContent(){return}isDirty(){return!1}focus(){this.iframe?.focus()}resize(){}dispose(){if(this.disposed)return;if(this.disposed=!0,this.iframe)this.iframe.src="about:blank",this.iframe=null;this.container.innerHTML=""}}var u6={id:"image-viewer",label:"Image Viewer",icon:"image",capabilities:["readonly","preview"],placement:"tabs",canHandle(_){let $=_?.path||"";if(!nK.test($))return!1;return 48},mount(_,$){if($?.mode==="view")return new U9(_,$);return new z9(_,$)}};var dK=/\.(mp4|m4v|mov|webm|ogv)$/i;function oK(_){return _.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}class F9{container;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Z=j.split("/").pop()||"video.mp4",N=document.createElement("div");N.style.cssText="width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:var(--bg-primary,#1a1a1a);",N.innerHTML=`
            <div style="text-align:center;max-width:360px;padding:24px;">
                <div style="font-size:56px;margin-bottom:12px;">\uD83C\uDFAC</div>
                <div style="font-size:14px;font-weight:600;color:var(--text-primary,#e0e0e0);margin-bottom:4px;word-break:break-word;">${oK(Z)}</div>
                <div style="font-size:11px;color:var(--text-secondary,#888);margin-bottom:20px;">Video File</div>
                <button id="video-open-tab" style="padding:8px 20px;background:var(--accent-color,#1d9bf0);color:var(--accent-contrast-text,#fff);
                    border:none;border-radius:5px;font-size:13px;font-weight:500;cursor:pointer;
                    transition:background 0.15s;"
                    onmouseenter="this.style.background='var(--accent-hover,#1a8cd8)'"
                    onmouseleave="this.style.background='var(--accent-color,#1d9bf0)'">
                    Open in Tab
                </button>
            </div>
        `,_.appendChild(N);let Y=N.querySelector("#video-open-tab");if(Y)Y.addEventListener("click",()=>{let K=new CustomEvent("video-viewer:open-tab",{bubbles:!0,detail:{path:j}});_.dispatchEvent(K)})}getContent(){return}isDirty(){return!1}focus(){}resize(){}dispose(){if(this.disposed)return;this.disposed=!0,this.container.innerHTML=""}}class H9{container;iframe=null;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Z=`/video-viewer/?path=${encodeURIComponent(j)}`;this.iframe=document.createElement("iframe"),this.iframe.src=Z,this.iframe.style.cssText="width:100%;height:100%;border:none;background:#111;",_.appendChild(this.iframe)}getContent(){return}isDirty(){return!1}focus(){this.iframe?.focus()}resize(){}dispose(){if(this.disposed)return;if(this.disposed=!0,this.iframe)this.iframe.src="about:blank",this.iframe=null;this.container.innerHTML=""}}var m6={id:"video-viewer",label:"Video Viewer",icon:"play-circle",capabilities:["readonly","preview"],placement:"tabs",canHandle(_){let $=_?.path||"";if(!dK.test($))return!1;return 54},mount(_,$){if($?.mode==="view")return new F9(_,$);return new H9(_,$)}};function sK(_){if(!_)return!1;let $=_.toLowerCase();return $.endsWith(".drawio")||$.endsWith(".drawio.xml")||$.endsWith(".drawio.svg")||$.endsWith(".drawio.png")}function rK(_){return _.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}var g6='<mxfile host="app.diagrams.net"><diagram id="page-1" name="Page-1"><mxGraphModel dx="1260" dy="720" grid="1" gridSize="10" guides="1" tooltips="1" connect="1" arrows="1" fold="1" page="1" pageScale="1" pageWidth="850" pageHeight="1100" math="0" shadow="0"><root><mxCell id="0"/><mxCell id="1" parent="0"/></root></mxGraphModel></diagram></mxfile>';function O9(_){let $=String(_||"").trim();return $?$:g6}function aK(_){let $=String(_||"").toLowerCase();if($.endsWith(".drawio.svg")||$.endsWith(".svg"))return"xmlsvg";if($.endsWith(".drawio.png")||$.endsWith(".png"))return"xmlpng";return"xml"}function tK(_){let $="",j=32768;for(let Z=0;Z<_.length;Z+=j)$+=String.fromCharCode(..._.subarray(Z,Z+j));return btoa($)}function eK(_,$="*"){try{let j=(Y)=>{let K=_.parent||_.opener;if(!K)return!1;return K.postMessage(JSON.stringify({event:"workspace-export",...Y}),$),!0},Z=_.EditorUi;if(Z?.prototype&&!Z.prototype.__piclawWorkspaceSavePatched){let Y=Z.prototype.saveData;Z.prototype.saveData=function(K,Q,X,G,W,B){try{if(K&&X!=null&&j({filename:K,format:Q,data:X,mimeType:G,base64Encoded:Boolean(W),defaultMode:B}))return}catch(U){console.warn("[drawio-pane] saveData intercept failed, falling back to native save",U)}return Y.apply(this,arguments)},Z.prototype.__piclawWorkspaceSavePatched=!0}let N=_.App;if(N?.prototype&&!N.prototype.__piclawExportPatched){let Y=N.prototype.exportFile;N.prototype.exportFile=function(K,Q,X,G,W,B){try{if(Q&&j({filename:Q,data:K,mimeType:X,base64Encoded:Boolean(G),mode:W,folderId:B}))return}catch(U){console.warn("[drawio-pane] export intercept failed, falling back to native export",U)}return Y.apply(this,arguments)},N.prototype.__piclawExportPatched=!0}return Boolean(Z?.prototype&&Z.prototype.__piclawWorkspaceSavePatched||N?.prototype&&N.prototype.__piclawExportPatched)}catch{return!1}}async function J9(_,$){let j=new Uint8Array(await _.arrayBuffer());return`data:${_.headers.get("Content-Type")||$};base64,${tK(j)}`}class D9{container;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Z=j.split("/").pop()||"diagram.drawio",N=document.createElement("div");N.style.cssText="width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:var(--bg-primary,#1a1a1a);",N.innerHTML=`
            <div style="text-align:center;max-width:360px;padding:24px;">
                <div style="font-size:56px;margin-bottom:12px;">\uD83D\uDCD0</div>
                <div style="font-size:14px;font-weight:600;color:var(--text-primary,#e0e0e0);margin-bottom:4px;word-break:break-word;">${rK(Z)}</div>
                <div style="font-size:11px;color:var(--text-secondary,#888);margin-bottom:20px;">Draw.io Diagram</div>
                <button id="drawio-open-tab" style="padding:8px 20px;background:var(--accent-color,#1d9bf0);color:var(--accent-contrast-text,#fff);
                    border:none;border-radius:5px;font-size:13px;font-weight:500;cursor:pointer;
                    transition:background 0.15s;"
                    onmouseenter="this.style.background='var(--accent-hover,#1a8cd8)'"
                    onmouseleave="this.style.background='var(--accent-color,#1d9bf0)'">
                    Edit in Tab
                </button>
            </div>
        `,_.appendChild(N);let Y=N.querySelector("#drawio-open-tab");if(Y)Y.addEventListener("click",()=>{let K=new CustomEvent("drawio:open-tab",{bubbles:!0,detail:{path:j}});_.dispatchEvent(K)})}getContent(){return}isDirty(){return!1}focus(){}resize(){}dispose(){if(this.disposed)return;this.disposed=!0,this.container.innerHTML=""}}class E9{container;iframe=null;overlay=null;disposed=!1;filePath;fileName;format;xmlData="";fileLoaded=!1;editorReady=!1;loadSent=!1;saveChain=Promise.resolve();onMessageBound;constructor(_,$){this.container=_,this.filePath=$.path||"",this.fileName=this.filePath.split("/").pop()||"diagram.drawio",this.format=aK(this.filePath),this.onMessageBound=this.onMessage.bind(this);let j=document.createElement("div");j.style.cssText="position:relative;width:100%;height:100%;background:#1e1e1e;",this.overlay=document.createElement("div"),this.overlay.style.cssText="position:absolute;inset:0;display:flex;align-items:center;justify-content:center;color:#999;font:14px system-ui,sans-serif;z-index:1;pointer-events:none;",this.overlay.textContent="Loading draw.io editor…",j.appendChild(this.overlay);let N=`/drawio/index.html?embed=1&proto=json&spin=1&modified=0&noSaveBtn=1&noExitBtn=1&saveAndExit=0&libraries=0&ui=dark&dark=${window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?"1":"0"}`;this.iframe=document.createElement("iframe"),this.iframe.src=N,this.iframe.style.cssText="width:100%;height:100%;border:none;background:#1e1e1e;position:relative;z-index:0;",this.iframe.addEventListener("load",()=>{let Y=()=>{if(!this.iframe?.contentWindow||this.disposed)return;if(eK(this.iframe.contentWindow))return;setTimeout(Y,250)};Y()}),j.appendChild(this.iframe),_.appendChild(j),window.addEventListener("message",this.onMessageBound),this.loadFile()}async loadFile(){if(!this.filePath){this.xmlData=g6,this.fileLoaded=!0,this.trySendLoad();return}try{let _=await fetch(`/workspace/raw?path=${encodeURIComponent(this.filePath)}`);if(_.ok)if(this.format==="xmlsvg")this.xmlData=await J9(_,"image/svg+xml");else if(this.format==="xmlpng")this.xmlData=await J9(_,"image/png");else this.xmlData=O9(await _.text());else if(_.status===404)this.xmlData=g6;else throw Error(`HTTP ${_.status}`);this.fileLoaded=!0,this.trySendLoad()}catch(_){if(this.overlay)this.overlay.textContent=`Failed to load: ${_ instanceof Error?_.message:String(_)}`}}trySendLoad(){if(this.disposed||this.loadSent||!this.editorReady||!this.fileLoaded||!this.iframe?.contentWindow)return;if(this.loadSent=!0,this.iframe.contentWindow.postMessage(JSON.stringify({action:"load",xml:this.format==="xml"?O9(this.xmlData):this.xmlData,autosave:1,saveAndExit:"0",noSaveBtn:"1",noExitBtn:"1",title:this.fileName}),"*"),this.overlay)this.overlay.style.display="none"}queueSave(_,$){if(!this.filePath)return;this.saveChain=this.saveChain.then(async()=>{let j=await fetch("/drawio/save",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({path:this.filePath,format:_.format||this.format,xml:_.xml,data:_.data,mimeType:_.mimeType,filename:_.filename,base64Encoded:_.base64Encoded})});if(!j.ok)throw Error(`HTTP ${j.status}`);if($&&this.iframe?.contentWindow)this.iframe.contentWindow.postMessage(JSON.stringify({action:"status",message:"Saved",modified:!1}),"*")}).catch((j)=>{if(console.error("[drawio-pane] save failed:",j),this.overlay)this.overlay.style.display="flex",this.overlay.textContent=`Save failed: ${j instanceof Error?j.message:String(j)}`})}onMessage(_){if(this.disposed||_.source!==this.iframe?.contentWindow)return;let $;try{$=typeof _.data==="string"?JSON.parse(_.data):_.data}catch{return}switch($?.event){case"init":this.editorReady=!0,this.trySendLoad();break;case"autosave":if(this.format==="xml"){if(typeof $.xml==="string")this.queueSave({xml:$.xml,format:"xml"},!1)}else if(typeof $.xml==="string")this.xmlData=$.xml;break;case"save":if(this.format==="xml"){if(typeof $.xml==="string")this.queueSave({xml:$.xml,format:"xml"},!0)}else if(typeof $.xml==="string"&&this.iframe?.contentWindow)this.xmlData=$.xml,this.iframe.contentWindow.postMessage(JSON.stringify({action:"export",format:this.format,xml:$.xml,spinKey:"export"}),"*");break;case"export":if(typeof $.data==="string")this.queueSave({data:$.data,format:this.format,xml:typeof $.xml==="string"?$.xml:void 0},!0);break;case"workspace-export":if(typeof $.data==="string")this.queueSave({data:$.data,xml:typeof $.xml==="string"?$.xml:void 0,mimeType:typeof $.mimeType==="string"?$.mimeType:void 0,filename:typeof $.filename==="string"?$.filename:void 0,base64Encoded:Boolean($.base64Encoded),format:this.format},!0);break;case"exit":default:break}}getContent(){return}isDirty(){return!1}focus(){this.iframe?.focus()}resize(){}dispose(){if(this.disposed)return;if(this.disposed=!0,window.removeEventListener("message",this.onMessageBound),this.iframe)this.iframe.src="about:blank",this.iframe=null;this.overlay=null,this.container.innerHTML=""}}var h6={id:"drawio-editor",label:"Draw.io Editor",icon:"git-merge",capabilities:["edit","preview"],placement:"tabs",canHandle(_){if(!sK(_?.path))return!1;return 60},mount(_,$){if($?.mode==="view")return new D9(_,$);return new E9(_,$)}};var _Q=/\.mindmap\.ya?ml$/i,p6=String(Date.now());function A9(){let _=document.documentElement?.dataset?.theme;if(_==="dark")return!0;if(_==="light")return!1;try{return!!window.matchMedia?.("(prefers-color-scheme: dark)")?.matches}catch{return!1}}function c6(_){let $=_.split("?")[0];if(document.querySelector(`script[data-src="${$}"]`))return Promise.resolve();let Z=document.querySelector(`script[src="${$}"]`);if(Z)Z.remove();return new Promise((N,Y)=>{let K=document.createElement("script");K.src=_,K.dataset.src=$,K.onload=()=>N(),K.onerror=()=>Y(Error(`Failed to load ${_}`)),document.head.appendChild(K)})}function $Q(_){if(document.querySelector(`link[href="${_}"]`))return;let $=document.createElement("link");$.rel="stylesheet",$.href=_,document.head.appendChild($)}function jQ(_){let $=document.createElementNS("http://www.w3.org/2000/svg","svg");$.id="mindmap-svg",$.setAttribute("width","100%"),$.setAttribute("height","100%"),$.style.cssText="display:block;position:absolute;inset:0;",_.appendChild($);let j=document.createElement("div");j.className="mindmap-toolbar",j.innerHTML=`
        <select id="layout-select">
            <option value="horizontal-tree">Horizontal Tree</option>
            <option value="vertical-tree">Vertical Tree</option>
            <option value="radial">Radial</option>
            <option value="force-directed">Force Directed</option>
        </select>
        <button id="zoom-fit" title="Fit to view">⊞</button>
        <button id="zoom-in"  title="Zoom in">+</button>
        <button id="zoom-out" title="Zoom out">−</button>
        <button id="reset-layout" title="Reset layout">↻</button>
    `,_.appendChild(j);let Z=document.createElement("div");Z.id="context-menu",Z.className="context-menu hidden",Z.innerHTML=`
        <button data-action="cut">Cut</button>
        <button data-action="copy">Copy</button>
        <button data-action="paste">Paste</button>
        <hr/>
        <button data-action="add-child">Add child</button>
        <button data-action="add-sibling">Add sibling</button>
        <hr/>
        <button data-action="delete">Delete</button>
    `,_.appendChild(Z)}class M9{container;constructor(_,$){this.container=_;let j=$.path||"",Z=j.split("/").pop()||"mindmap",N=document.createElement("div");N.style.cssText="width:100%;height:100%;display:flex;flex-direction:column;background:var(--bg-primary);",N.innerHTML=`
            <div style="flex:1;display:flex;align-items:center;justify-content:center;padding:24px;">
                <div style="text-align:center;">
                    <div style="font-size:32px;margin-bottom:8px;">\uD83E\uDDE0</div>
                    <div style="font-size:14px;color:var(--text-primary);">${Z}</div>
                    <div style="font-size:12px;color:var(--text-secondary);margin-top:4px;">Mindmap Editor</div>
                </div>
            </div>
            <div style="display:flex;align-items:center;justify-content:flex-end;padding:8px 16px;border-top:1px solid var(--border-color);flex-shrink:0;">
                <button id="mm-open-tab" style="padding:5px 14px;background:var(--accent-color);color:var(--accent-contrast-text,#fff);
                    border:none;border-radius:4px;font-size:12px;font-weight:500;cursor:pointer;">Edit in Tab</button>
            </div>`,_.appendChild(N),N.querySelector("#mm-open-tab")?.addEventListener("click",()=>{_.dispatchEvent(new CustomEvent("mindmap:open-tab",{bubbles:!0,detail:{path:j}}))})}getContent(){return}isDirty(){return!1}focus(){}resize(){}dispose(){this.container.innerHTML=""}}class k9{container;filePath;dirty=!1;dirtyCallback=null;disposed=!1;mindmapEl=null;pendingContent=null;themeListener=()=>{window.__mindmapEditor?.setTheme?.(A9())};constructor(_,$){this.container=_,this.filePath=$.path||"",this.init($.content)}async resolveInitialContent(_){if(_!==void 0)return _;if(!this.filePath)return"";try{return(await(await fetch(`/workspace/file?path=${encodeURIComponent(this.filePath)}&max=1000000&mode=edit`)).json())?.text||""}catch{return""}}async init(_){let $=await this.resolveInitialContent(_);if(this.disposed)return;if($Q("/static/css/mindmap.css"),await Promise.all([c6("/static/js/vendor/d3-mindmap.min.js?v="+p6),c6("/static/js/vendor/js-yaml.min.js?v="+p6)]),this.disposed)return;this.mindmapEl=document.createElement("div"),this.mindmapEl.id="mindmap-container",this.mindmapEl.tabIndex=-1,this.mindmapEl.style.cssText="width:100%;height:100%;overflow:hidden;position:relative;outline:none;",this.container.appendChild(this.mindmapEl),jQ(this.mindmapEl);let j=A9(),Z=this.filePath.replace(/\/[^/]+$/,"")||"/";try{if(await c6("/static/js/vendor/mindmap-editor.js?v="+p6),this.disposed)return;let N=window.__mindmapEditor;if(!N)throw Error("__mindmapEditor not found");if(N.mount({content:$,isDark:j,onEdit:(Y)=>{this.dirty=!0,this.dirtyCallback?.(!0),this.saveToWorkspace(Y)},resolveImagePath:(Y)=>{if(Y.startsWith("data:")||Y.startsWith("http"))return Y;return`/workspace/raw?path=${encodeURIComponent(Z+"/"+Y)}`}}),this.pendingContent!==null)N.update(this.pendingContent),this.pendingContent=null;window.addEventListener("piclaw-theme-change",this.themeListener)}catch(N){if(console.error("[mindmap] Failed to load mindmap renderer:",N),this.mindmapEl)this.mindmapEl.innerHTML='<div style="padding:24px;color:var(--text-secondary);">Failed to load mindmap editor.</div>'}}async saveToWorkspace(_){if(!this.filePath)return;try{let $=await fetch("/workspace/file",{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({path:this.filePath,content:_})});if(!$.ok)throw Error(`HTTP ${$.status}`);this.dirty=!1,this.dirtyCallback?.(!1)}catch($){console.error("[mindmap] Save failed:",$)}}getContent(){return}isDirty(){return this.dirty}setContent(_,$){let j=window.__mindmapEditor;if(j?.update)j.update(_);else this.pendingContent=_;this.dirty=!1,this.dirtyCallback?.(!1)}focus(){this.mindmapEl?.focus()}resize(){window.dispatchEvent(new Event("resize"))}onDirtyChange(_){this.dirtyCallback=_}dispose(){if(this.disposed)return;this.disposed=!0,window.removeEventListener("piclaw-theme-change",this.themeListener),window.__mindmapEditor?.destroy(),this.pendingContent=null,this.container.innerHTML=""}}var l6={id:"mindmap-editor",label:"Mindmap Editor",icon:"mindmap",capabilities:["edit","preview"],placement:"tabs",canHandle(_){let $=_?.path||"";if(!_Q.test($))return!1;return 50},mount(_,$){if($?.mode==="view")return new M9(_,$);return new k9(_,$)}};var ZQ=/\.kanban\.md$/i,NQ=String(Date.now());function I9(){let _=document.documentElement?.dataset?.theme;if(_==="dark")return!0;if(_==="light")return!1;try{return!!window.matchMedia?.("(prefers-color-scheme: dark)")?.matches}catch{return!1}}function YQ(){let _=window;if(_.preact)return;_.preact={h:G5,render:V5,Component:N$,createContext:o3},_.preactHooks={useState:h,useEffect:p,useCallback:x,useRef:S,useMemo:E0,useReducer:z8,useContext:a3,useLayoutEffect:F8,useImperativeHandle:r3,useErrorBoundary:e3,useDebugValue:t3},_.htm={bind:()=>z}}function KQ(_){let $=_.split("?")[0];if(document.querySelector(`script[data-src="${$}"]`))return Promise.resolve();let Z=document.querySelector(`script[src="${$}"]`);if(Z)Z.remove();return new Promise((N,Y)=>{let K=document.createElement("script");K.src=_,K.dataset.src=$,K.onload=()=>N(),K.onerror=()=>Y(Error(`Failed to load ${_}`)),document.head.appendChild(K)})}function QQ(_){if(document.querySelector(`link[href="${_}"]`))return;let $=document.createElement("link");$.rel="stylesheet",$.href=_,document.head.appendChild($)}class P9{container;constructor(_,$){this.container=_;let j=$.path||"",Z=j.split("/").pop()||"kanban",N=document.createElement("div");N.style.cssText="width:100%;height:100%;display:flex;flex-direction:column;background:var(--bg-primary);",N.innerHTML=`
            <div style="flex:1;display:flex;align-items:center;justify-content:center;padding:24px;">
                <div style="text-align:center;">
                    <div style="font-size:32px;margin-bottom:8px;">\uD83D\uDCCB</div>
                    <div style="font-size:14px;color:var(--text-primary);">${Z}</div>
                    <div style="font-size:12px;color:var(--text-secondary);margin-top:4px;">Kanban Board</div>
                </div>
            </div>
            <div style="display:flex;align-items:center;justify-content:flex-end;padding:8px 16px;border-top:1px solid var(--border-color);flex-shrink:0;">
                <button id="kb-open-tab" style="padding:5px 14px;background:var(--accent-color);color:var(--accent-contrast-text,#fff);
                    border:none;border-radius:4px;font-size:12px;font-weight:500;cursor:pointer;">
                    Edit in Tab
                </button>
            </div>
        `,_.appendChild(N),N.querySelector("#kb-open-tab")?.addEventListener("click",()=>{_.dispatchEvent(new CustomEvent("kanban:open-tab",{bubbles:!0,detail:{path:j}}))})}getContent(){return}isDirty(){return!1}focus(){}resize(){}dispose(){this.container.innerHTML=""}}class C9{container;filePath;dirty=!1;dirtyCallback=null;disposed=!1;boardEl=null;pendingContent=null;themeListener=()=>{window.__kanbanEditor?.setTheme?.(I9())};constructor(_,$){this.container=_,this.filePath=$.path||"",this.init($.content)}async resolveInitialContent(_){if(_!==void 0)return _;if(!this.filePath)return"";try{return(await(await fetch(`/workspace/file?path=${encodeURIComponent(this.filePath)}&max=1000000&mode=edit`)).json())?.text||""}catch{return""}}async init(_){let $=await this.resolveInitialContent(_);if(this.disposed)return;QQ("/static/css/kanban.css"),this.boardEl=document.createElement("div"),this.boardEl.id="kanban-container",this.boardEl.style.cssText="width:100%;height:100%;overflow:auto;position:relative;",this.container.appendChild(this.boardEl);let j=I9();try{if(YQ(),await KQ("/static/js/vendor/kanban-editor.js?v="+NQ),this.disposed)return;let Z=window.__kanbanEditor;if(!Z)throw Error("__kanbanEditor not found");if(Z.mount(this.boardEl,{content:$,isDark:j,onEdit:(N)=>{this.dirty=!0,this.dirtyCallback?.(!0),this.saveToWorkspace(N)}}),this.pendingContent!==null)Z.update(this.pendingContent),this.pendingContent=null;window.addEventListener("piclaw-theme-change",this.themeListener)}catch(Z){if(console.error("[kanban] Failed to load kanban renderer:",Z),this.boardEl)this.boardEl.innerHTML='<div style="padding:24px;color:var(--text-secondary);">Failed to load kanban editor.</div>'}}async saveToWorkspace(_){if(!this.filePath)return;try{let $=await fetch("/workspace/file",{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({path:this.filePath,content:_})});if(!$.ok)throw Error(`HTTP ${$.status}`);this.dirty=!1,this.dirtyCallback?.(!1)}catch($){console.error("[kanban] Save failed:",$)}}getContent(){return}isDirty(){return this.dirty}setContent(_,$){let j=window.__kanbanEditor;if(j?.update)j.update(_);else this.pendingContent=_;this.dirty=!1,this.dirtyCallback?.(!1)}focus(){this.boardEl?.focus()}resize(){}onDirtyChange(_){this.dirtyCallback=_}dispose(){if(this.disposed)return;this.disposed=!0,window.removeEventListener("piclaw-theme-change",this.themeListener),window.__kanbanEditor?.destroy(),this.pendingContent=null,this.container.innerHTML=""}}var i6={id:"kanban-editor",label:"Kanban Board",icon:"kanban",capabilities:["edit","preview"],placement:"tabs",canHandle(_){let $=_?.path||"";if(!ZQ.test($))return!1;return 50},mount(_,$){if($?.mode==="view")return new P9(_,$);return new C9(_,$)}};class T9{tabs=new Map;activeId=null;mruOrder=[];listeners=new Set;onChange(_){return this.listeners.add(_),()=>this.listeners.delete(_)}notify(){let _=this.getTabs(),$=this.activeId;for(let j of this.listeners)try{j(_,$)}catch{}}open(_,$){let j=this.tabs.get(_);if(!j)j={id:_,label:$||_.split("/").pop()||_,path:_,dirty:!1,pinned:!1},this.tabs.set(_,j);return this.activate(_),j}activate(_){if(!this.tabs.has(_))return;this.activeId=_,this.mruOrder=[_,...this.mruOrder.filter(($)=>$!==_)],this.notify()}close(_){if(!this.tabs.get(_))return!1;if(this.tabs.delete(_),this.mruOrder=this.mruOrder.filter((j)=>j!==_),this.activeId===_)this.activeId=this.mruOrder[0]||null;return this.notify(),!0}closeOthers(_){for(let[$,j]of this.tabs)if($!==_&&!j.pinned)this.tabs.delete($),this.mruOrder=this.mruOrder.filter((Z)=>Z!==$);if(this.activeId&&!this.tabs.has(this.activeId))this.activeId=_;this.notify()}closeAll(){for(let[_,$]of this.tabs)if(!$.pinned)this.tabs.delete(_),this.mruOrder=this.mruOrder.filter((j)=>j!==_);if(this.activeId&&!this.tabs.has(this.activeId))this.activeId=this.mruOrder[0]||null;this.notify()}setDirty(_,$){let j=this.tabs.get(_);if(!j||j.dirty===$)return;j.dirty=$,this.notify()}togglePin(_){let $=this.tabs.get(_);if(!$)return;$.pinned=!$.pinned,this.notify()}saveViewState(_,$){let j=this.tabs.get(_);if(j)j.viewState=$}getViewState(_){return this.tabs.get(_)?.viewState}rename(_,$,j){let Z=this.tabs.get(_);if(!Z)return;if(this.tabs.delete(_),Z.id=$,Z.path=$,Z.label=j||$.split("/").pop()||$,this.tabs.set($,Z),this.mruOrder=this.mruOrder.map((N)=>N===_?$:N),this.activeId===_)this.activeId=$;this.notify()}getTabs(){return Array.from(this.tabs.values())}getActiveId(){return this.activeId}getActive(){return this.activeId?this.tabs.get(this.activeId)||null:null}get(_){return this.tabs.get(_)}get size(){return this.tabs.size}hasUnsaved(){for(let _ of this.tabs.values())if(_.dirty)return!0;return!1}getDirtyTabs(){return Array.from(this.tabs.values()).filter((_)=>_.dirty)}nextTab(){let _=this.getTabs();if(_.length<=1)return;let $=_.findIndex((Z)=>Z.id===this.activeId),j=_[($+1)%_.length];this.activate(j.id)}prevTab(){let _=this.getTabs();if(_.length<=1)return;let $=_.findIndex((Z)=>Z.id===this.activeId),j=_[($-1+_.length)%_.length];this.activate(j.id)}mruSwitch(){if(this.mruOrder.length>1)this.activate(this.mruOrder[1])}}var n0=new T9;var c5="workspaceExplorerScale",qQ=["compact","default","comfortable"],GQ=new Set(qQ),XQ={compact:{indentPx:14},default:{indentPx:16},comfortable:{indentPx:18}};function y9(_,$="default"){if(typeof _!=="string")return $;let j=_.trim().toLowerCase();return GQ.has(j)?j:$}function n6(){if(typeof window>"u")return{width:0,isTouch:!1};let _=Number(window.innerWidth)||0,$=Boolean(window.matchMedia?.("(pointer: coarse)")?.matches),j=Boolean(window.matchMedia?.("(hover: none)")?.matches),Z=Number(globalThis.navigator?.maxTouchPoints||0)>0;return{width:_,isTouch:$||Z&&j}}function VQ(_={}){let $=Math.max(0,Number(_.width)||0);if(Boolean(_.isTouch))return"comfortable";if($>0&&$<1180)return"comfortable";return"default"}function BQ(_,$={}){if(Boolean($.isTouch)&&_==="compact")return"default";return _}function d6(_={}){let $=VQ(_),j=_.stored?y9(_.stored,$):$;return BQ(j,_)}function S9(_){return XQ[y9(_)]}function WQ(_){if(!_||_.kind!=="text")return!1;let $=Number(_?.size);return!Number.isFinite($)||$<=262144}function o6(_,$){let j=String(_||"").trim();if(!j||j.endsWith("/"))return!1;if(typeof $!=="function")return!1;let Z=$({path:j,mode:"edit"});if(!Z||typeof Z!=="object")return!1;return Z.id!=="editor"}function x9(_,$,j={}){let Z=j?.resolvePane;if(o6(_,Z))return!0;return WQ($)}var LQ=60000,v9=(_)=>{if(!_||!_.name)return!1;if(_.path===".")return!1;return _.name.startsWith(".")};function UQ(_){let $=String(_||"").trim();if(!$||$.endsWith("/"))return!1;return o6($,(j)=>R0.resolve(j))}function b9(_,$,j,Z=0,N=[]){if(!j&&v9(_))return N;if(!_)return N;if(N.push({node:_,depth:Z}),_.type==="dir"&&_.children&&$.has(_.path))for(let Y of _.children)b9(Y,$,j,Z+1,N);return N}function w9(_,$,j){if(!_)return"";let Z=[],N=(Y)=>{if(!j&&v9(Y))return;if(Z.push(Y.type==="dir"?`d:${Y.path}`:`f:${Y.path}`),Y.children&&$?.has(Y.path))for(let K of Y.children)N(K)};return N(_),Z.join("|")}function t6(_,$){if(!$)return null;if(!_)return $;if(_.path!==$.path||_.type!==$.type)return $;let j=Array.isArray(_.children)?_.children:null,Z=Array.isArray($.children)?$.children:null;if(!Z)return _;let N=j?new Map(j.map((Q)=>[Q?.path,Q])):new Map,Y=!j||j.length!==Z.length,K=Z.map((Q)=>{let X=t6(N.get(Q.path),Q);if(X!==N.get(Q.path))Y=!0;return X});return Y?{...$,children:K}:_}function r6(_,$,j){if(!_)return _;if(_.path===$)return t6(_,j);if(!Array.isArray(_.children))return _;let Z=!1,N=_.children.map((Y)=>{let K=r6(Y,$,j);if(K!==Y)Z=!0;return K});return Z?{..._,children:N}:_}var u9=4,s6=14,zQ=8,FQ=16;function m9(_){if(!_)return 0;if(_.type==="file"){let Z=Math.max(0,Number(_.size)||0);return _.__bytes=Z,Z}let $=Array.isArray(_.children)?_.children:[],j=0;for(let Z of $)j+=m9(Z);return _.__bytes=j,j}function g9(_,$=0){let j=Math.max(0,Number(_?.__bytes??_?.size??0)),Z={name:_?.name||_?.path||".",path:_?.path||".",size:j,children:[]};if(!_||_.type!=="dir"||$>=u9)return Z;let N=Array.isArray(_.children)?_.children:[],Y=[];for(let Q of N){let X=Math.max(0,Number(Q?.__bytes??Q?.size??0));if(X<=0)continue;if(Q.type==="dir")Y.push({kind:"dir",node:Q,size:X});else Y.push({kind:"file",name:Q.name,path:Q.path,size:X})}Y.sort((Q,X)=>X.size-Q.size);let K=Y;if(Y.length>s6){let Q=Y.slice(0,s6-1),X=Y.slice(s6-1),G=X.reduce((W,B)=>W+B.size,0);Q.push({kind:"other",name:`+${X.length} more`,path:`${Z.path}/[other]`,size:G}),K=Q}return Z.children=K.map((Q)=>{if(Q.kind==="dir")return g9(Q.node,$+1);return{name:Q.name,path:Q.path,size:Q.size,children:[]}}),Z}function R9(){if(typeof window>"u"||typeof document>"u")return!1;let{documentElement:_,body:$}=document,j=_?.getAttribute?.("data-theme")?.toLowerCase?.()||"";if(j==="dark")return!0;if(j==="light")return!1;if(_?.classList?.contains("dark")||$?.classList?.contains("dark"))return!0;if(_?.classList?.contains("light")||$?.classList?.contains("light"))return!1;return Boolean(window.matchMedia?.("(prefers-color-scheme: dark)")?.matches)}function h9(_,$,j){let Z=((_+Math.PI/2)*180/Math.PI+360)%360,N=j?Math.max(30,70-$*10):Math.max(34,66-$*8),Y=j?Math.min(70,45+$*5):Math.min(60,42+$*4);return`hsl(${Z.toFixed(1)} ${N}% ${Y}%)`}function l5(_,$,j,Z){return{x:_+j*Math.cos(Z),y:$+j*Math.sin(Z)}}function e6(_,$,j,Z,N,Y){let K=Math.PI*2-0.0001,Q=Y-N>K?N+K:Y,X=l5(_,$,Z,N),G=l5(_,$,Z,Q),W=l5(_,$,j,Q),B=l5(_,$,j,N),U=Q-N>Math.PI?1:0;return[`M ${X.x.toFixed(3)} ${X.y.toFixed(3)}`,`A ${Z} ${Z} 0 ${U} 1 ${G.x.toFixed(3)} ${G.y.toFixed(3)}`,`L ${W.x.toFixed(3)} ${W.y.toFixed(3)}`,`A ${j} ${j} 0 ${U} 0 ${B.x.toFixed(3)} ${B.y.toFixed(3)}`,"Z"].join(" ")}var p9={1:[26,46],2:[48,68],3:[70,90],4:[92,112]};function c9(_,$,j){let Z=[],N=[],Y=Math.max(0,Number($)||0),K=(Q,X,G,W)=>{let B=Array.isArray(Q?.children)?Q.children:[];if(!B.length)return;let U=Math.max(0,Number(Q.size)||0);if(U<=0)return;let D=G-X,k=X;B.forEach((T,E)=>{let J=Math.max(0,Number(T.size)||0);if(J<=0)return;let A=J/U,P=k,d=E===B.length-1?G:k+D*A;if(k=d,d-P<0.003)return;let l=p9[W];if(l){let t=h9(P,W,j);if(Z.push({key:T.path,path:T.path,label:T.name,size:J,color:t,depth:W,startAngle:P,endAngle:d,innerRadius:l[0],outerRadius:l[1],d:e6(120,120,l[0],l[1],P,d)}),W===1)N.push({key:T.path,name:T.name,size:J,pct:Y>0?J/Y*100:0,color:t})}if(W<u9)K(T,P,d,W+1)})};return K(_,-Math.PI/2,Math.PI*3/2,1),{segments:Z,legend:N}}function a6(_,$){if(!_||!$)return null;if(_.path===$)return _;let j=Array.isArray(_.children)?_.children:[];for(let Z of j){let N=a6(Z,$);if(N)return N}return null}function l9(_,$,j,Z){if(!j||j<=0)return{segments:[],legend:[]};let N=p9[1];if(!N)return{segments:[],legend:[]};let Y=-Math.PI/2,K=Math.PI*3/2,Q=h9(Y,1,Z),G=`${$||"."}/[files]`;return{segments:[{key:G,path:G,label:_,size:j,color:Q,depth:1,startAngle:Y,endAngle:K,innerRadius:N[0],outerRadius:N[1],d:e6(120,120,N[0],N[1],Y,K)}],legend:[{key:G,name:_,size:j,pct:100,color:Q}]}}function f9(_,$=!1,j=!1){if(!_)return null;let Z=m9(_),N=g9(_,0),Y=N.size||Z,{segments:K,legend:Q}=c9(N,Y,j);if(!K.length&&Y>0){let X=l9("[files]",N.path,Y,j);K=X.segments,Q=X.legend}return{root:N,totalSize:Y,segments:K,legend:Q,truncated:$,isDarkTheme:j}}function HQ({payload:_}){if(!_)return null;let[$,j]=h(null),[Z,N]=h(_?.root?.path||"."),[Y,K]=h(()=>[_?.root?.path||"."]),[Q,X]=h(!1);p(()=>{let H=_?.root?.path||".";N(H),K([H]),j(null)},[_?.root?.path,_?.totalSize]),p(()=>{if(!Z)return;X(!0);let H=setTimeout(()=>X(!1),180);return()=>clearTimeout(H)},[Z]);let G=E0(()=>{return a6(_.root,Z)||_.root},[_?.root,Z]),W=G?.size||_.totalSize||0,{segments:B,legend:U}=E0(()=>{let H=c9(G,W,_.isDarkTheme);if(H.segments.length>0)return H;if(W<=0)return H;let w=G?.children?.length?"Total":"[files]";return l9(w,G?.path||_?.root?.path||".",W,_.isDarkTheme)},[G,W,_.isDarkTheme,_?.root?.path]),[D,k]=h(B),T=S(new Map),E=S(0);p(()=>{let H=T.current,w=new Map(B.map((Z0)=>[Z0.key,Z0])),c=performance.now(),e=220,i=(Z0)=>{let N0=Math.min(1,(Z0-c)/220),K0=N0*(2-N0),G0=B.map((V0)=>{let U0=H.get(V0.key)||{startAngle:V0.startAngle,endAngle:V0.startAngle,innerRadius:V0.innerRadius,outerRadius:V0.innerRadius},H0=(g0,C0)=>g0+(C0-g0)*K0,u0=H0(U0.startAngle,V0.startAngle),k0=H0(U0.endAngle,V0.endAngle),A0=H0(U0.innerRadius,V0.innerRadius),m0=H0(U0.outerRadius,V0.outerRadius);return{...V0,d:e6(120,120,A0,m0,u0,k0)}});if(k(G0),N0<1)E.current=requestAnimationFrame(i)};if(E.current)cancelAnimationFrame(E.current);return E.current=requestAnimationFrame(i),T.current=w,()=>{if(E.current)cancelAnimationFrame(E.current)}},[B]);let J=D.length?D:B,A=W>0?T_(W):"0 B",P=G?.name||"",l=(P&&P!=="."?P:"Total")||"Total",t=A,Y0=Y.length>1,f=(H)=>{if(!H?.path)return;let w=a6(_.root,H.path);if(!w||!Array.isArray(w.children)||w.children.length===0)return;K((c)=>[...c,w.path]),N(w.path),j(null)},R=()=>{if(!Y0)return;K((H)=>{let w=H.slice(0,-1);return N(w[w.length-1]||_?.root?.path||"."),w}),j(null)};return z`
        <div class="workspace-folder-starburst">
            <svg viewBox="0 0 240 240" class=${`workspace-folder-starburst-svg${Q?" is-zooming":""}`} role="img"
                aria-label=${`Folder sizes for ${G?.path||_?.root?.path||"."}`}
                data-segments=${J.length}
                data-base-size=${W}>
                ${J.map((H)=>z`
                    <path
                        key=${H.key}
                        d=${H.d}
                        fill=${H.color}
                        stroke="var(--bg-primary)"
                        stroke-width="1"
                        class=${`workspace-folder-starburst-segment${$?.key===H.key?" is-hovered":""}`}
                        onMouseEnter=${()=>j(H)}
                        onMouseLeave=${()=>j(null)}
                        onTouchStart=${()=>j(H)}
                        onTouchEnd=${()=>j(null)}
                        onClick=${()=>f(H)}
                    >
                        <title>${H.label} — ${T_(H.size)}</title>
                    </path>
                `)}
                <g
                    class=${`workspace-folder-starburst-center-hit${Y0?" is-drill":""}`}
                    onClick=${R}
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
                    <text x="120" y="114" text-anchor="middle" class="workspace-folder-starburst-total-label">${l}</text>
                    <text x="120" y="130" text-anchor="middle" class="workspace-folder-starburst-total-value">${t}</text>
                </g>
            </svg>
            ${U.length>0&&z`
                <div class="workspace-folder-starburst-legend">
                    ${U.slice(0,8).map((H)=>z`
                        <div key=${H.key} class="workspace-folder-starburst-legend-item">
                            <span class="workspace-folder-starburst-swatch" style=${`background:${H.color}`}></span>
                            <span class="workspace-folder-starburst-name" title=${H.name}>${H.name}</span>
                            <span class="workspace-folder-starburst-size">${T_(H.size)}</span>
                            <span class="workspace-folder-starburst-pct">${H.pct.toFixed(1)}%</span>
                        </div>
                    `)}
                </div>
            `}
            ${_.truncated&&z`
                <div class="workspace-folder-starburst-note">Preview is truncated by tree depth/entry limits.</div>
            `}
        </div>
    `}function OQ({mediaId:_}){let[$,j]=h(null);if(p(()=>{if(!_)return;q$(_).then(j).catch(()=>{})},[_]),!$)return null;let Z=$.filename||"file",N=$.metadata?.size?T_($.metadata.size):"";return z`
        <a href=${C_(_)} download=${Z} class="file-attachment"
            onClick=${(Y)=>Y.stopPropagation()}>
            <svg class="file-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                <polyline points="14 2 14 8 20 8"/>
                <line x1="16" y1="13" x2="8" y2="13"/>
                <line x1="16" y1="17" x2="8" y2="17"/>
                <polyline points="10 9 9 9 8 9"/>
            </svg>
            <div class="file-info">
                <span class="file-name">${Z}</span>
                ${N&&z`<span class="file-size">${N}</span>`}
            </div>
            <svg class="download-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                <polyline points="7 10 12 15 17 10"/>
                <line x1="12" y1="15" x2="12" y2="3"/>
            </svg>
        </a>
    `}function i9({onFileSelect:_,visible:$=!0,active:j=void 0,onOpenEditor:Z,onOpenTerminalTab:N,onOpenVncTab:Y,onToggleTerminal:K,terminalVisible:Q=!1}){let[X,G]=h(null),[W,B]=h(new Set(["."])),[U,D]=h(null),[k,T]=h(null),[E,J]=h(""),[A,P]=h(null),[d,l]=h(null),[t,Y0]=h(!0),[f,R]=h(!1),[H,w]=h(null),[c,e]=h(()=>G$("workspaceShowHidden",!1)),[i,Z0]=h(!1),[N0,K0]=h(null),[G0,V0]=h(null),[F0,U0]=h(null),[H0,u0]=h(!1),[k0,A0]=h(null),[m0,g0]=h(()=>R9()),[C0,B0]=h(()=>d6({stored:F_(c5),...n6()})),[I0,D0]=h(!1),X0=S(W),P0=S(""),d0=S(null),b0=S(0),W1=S(new Set),A1=S(null),S0=S(new Map),h0=S(_),t0=S(Z),N1=S(null),o0=S(null),S1=S(null),$1=S(null),v1=S(null),Y1=S(null),p1=S("."),x0=S(null),Z_=S({path:null,dragging:!1,startX:0,startY:0}),Q1=S({path:null,dragging:!1,startX:0,startY:0}),L1=S({path:null,timer:0}),V_=S(!1),e0=S(0),s1=S(new Map),f0=S(null),p0=S(null),w0=S(null),F1=S(null),m=S(null),Q0=S(null),O0=S(c),v0=S($),s0=S(j??$),b1=S(0),c1=S(F0),r0=S(i),J1=S(N0),B_=S(null),K1=S({x:0,y:0}),J_=S(0),W_=S(null),r1=S(U),a1=S(k),x1=S(null),i_=S(A);h0.current=_,t0.current=Z,p(()=>{X0.current=W},[W]),p(()=>{O0.current=c},[c]),p(()=>{v0.current=$},[$]),p(()=>{s0.current=j??$},[j,$]),p(()=>{c1.current=F0},[F0]),p(()=>{if(typeof window>"u")return;let F=()=>{B0(d6({stored:F_(c5),...n6()}))};F();let C=()=>F(),v=()=>F(),b=($0)=>{if(!$0||$0.key===null||$0.key===c5)F()};window.addEventListener("resize",C),window.addEventListener("focus",v),window.addEventListener("storage",b);let o=window.matchMedia?.("(pointer: coarse)"),q0=window.matchMedia?.("(hover: none)"),W0=($0,L)=>{if(!$0)return;if($0.addEventListener)$0.addEventListener("change",L);else if($0.addListener)$0.addListener(L)},L0=($0,L)=>{if(!$0)return;if($0.removeEventListener)$0.removeEventListener("change",L);else if($0.removeListener)$0.removeListener(L)};return W0(o,C),W0(q0,C),()=>{window.removeEventListener("resize",C),window.removeEventListener("focus",v),window.removeEventListener("storage",b),L0(o,C),L0(q0,C)}},[]),p(()=>{let F=(C)=>{let v=C?.detail?.path;if(!v)return;let b=v.split("/"),o=[];for(let q0=1;q0<b.length;q0++)o.push(b.slice(0,q0).join("/"));if(o.length)B((q0)=>{let W0=new Set(q0);W0.add(".");for(let L0 of o)W0.add(L0);return W0});D(v),requestAnimationFrame(()=>{let q0=document.querySelector(`[data-path="${CSS.escape(v)}"]`);if(q0)q0.scrollIntoView({block:"nearest",behavior:"smooth"})})};return window.addEventListener("workspace-reveal-path",F),()=>window.removeEventListener("workspace-reveal-path",F)},[]),p(()=>{r0.current=i},[i]),p(()=>{J1.current=N0},[N0]),p(()=>{r1.current=U},[U]),p(()=>{a1.current=k},[k]),p(()=>{i_.current=A},[A]),p(()=>{if(typeof window>"u"||typeof document>"u")return;let F=()=>g0(R9());F();let C=window.matchMedia?.("(prefers-color-scheme: dark)"),v=()=>F();if(C?.addEventListener)C.addEventListener("change",v);else if(C?.addListener)C.addListener(v);let b=typeof MutationObserver<"u"?new MutationObserver(()=>F()):null;if(b?.observe(document.documentElement,{attributes:!0,attributeFilter:["class","data-theme"]}),document.body)b?.observe(document.body,{attributes:!0,attributeFilter:["class","data-theme"]});return()=>{if(C?.removeEventListener)C.removeEventListener("change",v);else if(C?.removeListener)C.removeListener(v);b?.disconnect()}},[]),p(()=>{if(!k)return;let F=v1.current;if(!F)return;let C=requestAnimationFrame(()=>{try{F.focus(),F.select()}catch{}});return()=>cancelAnimationFrame(C)},[k]),p(()=>{if(!I0)return;let F=(v)=>{let b=v?.target;if(!(b instanceof Element))return;if(m.current?.contains(b))return;if(Q0.current?.contains(b))return;D0(!1)},C=(v)=>{if(v?.key==="Escape")D0(!1),Q0.current?.focus?.()};return document.addEventListener("mousedown",F),document.addEventListener("touchstart",F,{passive:!0}),document.addEventListener("keydown",C),()=>{document.removeEventListener("mousedown",F),document.removeEventListener("touchstart",F),document.removeEventListener("keydown",C)}},[I0]);let y_=async(F,C={})=>{let v=Boolean(C?.autoOpen),b=String(F||"").trim();R(!0),P(null),l(null);try{let o=await w8(b,20000);if(v&&b&&x9(b,o,{resolvePane:(q0)=>R0.resolve(q0)}))return t0.current?.(b,o),o;return P(o),o}catch(o){let q0={error:o.message||"Failed to load preview"};return P(q0),q0}finally{R(!1)}};N1.current=y_;let N_=async()=>{if(!v0.current)return;try{let F=await S$("",1,O0.current),C=w9(F.root,X0.current,O0.current);if(C===P0.current){Y0(!1);return}if(P0.current=C,d0.current=F.root,!b0.current)b0.current=requestAnimationFrame(()=>{b0.current=0,G((v)=>t6(v,d0.current)),Y0(!1)})}catch(F){w(F.message||"Failed to load workspace"),Y0(!1)}},Z4=async(F)=>{if(!F)return;if(W1.current.has(F))return;W1.current.add(F);try{let C=await S$(F,1,O0.current);G((v)=>r6(v,F,C.root))}catch(C){w(C.message||"Failed to load workspace")}finally{W1.current.delete(F)}};o0.current=Z4;let M1=x(()=>{let F=U;if(!F)return".";let C=S0.current?.get(F);if(C&&C.type==="dir")return C.path;if(F==="."||!F.includes("/"))return".";let v=F.split("/");return v.pop(),v.join("/")||"."},[U]),n_=x((F)=>{let C=F?.closest?.(".workspace-row");if(!C)return null;let v=C.dataset.path,b=C.dataset.type;if(!v)return null;if(b==="dir")return v;if(v.includes("/")){let o=v.split("/");return o.pop(),o.join("/")||"."}return"."},[]),S_=x((F)=>{return n_(F?.target||null)},[n_]),w1=x((F)=>{c1.current=F,U0(F)},[]),U1=x(()=>{let F=L1.current;if(F?.timer)clearTimeout(F.timer);L1.current={path:null,timer:0}},[]),Y_=x((F)=>{if(!F||F==="."){U1();return}let C=S0.current?.get(F);if(!C||C.type!=="dir"){U1();return}if(X0.current?.has(F)){U1();return}if(L1.current?.path===F)return;U1();let v=setTimeout(()=>{L1.current={path:null,timer:0},o0.current?.(F),B((b)=>{let o=new Set(b);return o.add(F),o})},600);L1.current={path:F,timer:v}},[U1]),K_=x((F,C)=>{if(K1.current={x:F,y:C},J_.current)return;J_.current=requestAnimationFrame(()=>{J_.current=0;let v=B_.current;if(!v)return;let b=K1.current;v.style.transform=`translate(${b.x+12}px, ${b.y+12}px)`})},[]),_1=x((F)=>{if(!F)return;let v=(S0.current?.get(F)?.name||F.split("/").pop()||F).trim();if(!v)return;V0({path:F,label:v})},[]),t1=x(()=>{if(V0(null),J_.current)cancelAnimationFrame(J_.current),J_.current=0;if(B_.current)B_.current.style.transform="translate(-9999px, -9999px)"},[]),c0=x((F)=>{if(!F)return".";let C=S0.current?.get(F);if(C&&C.type==="dir")return C.path;if(F==="."||!F.includes("/"))return".";let v=F.split("/");return v.pop(),v.join("/")||"."},[]),l1=x(()=>{T(null),J("")},[]),N4=x((F)=>{if(!F)return;let v=(S0.current?.get(F)?.name||F.split("/").pop()||F).trim();if(!v||F===".")return;T(F),J(v)},[]),Q_=x(async()=>{let F=a1.current;if(!F)return;let C=(E||"").trim();if(!C){l1();return}let v=S0.current?.get(F),b=(v?.name||F.split("/").pop()||F).trim();if(C===b){l1();return}try{let q0=(await v8(F,C))?.path||F,W0=F.includes("/")?F.split("/").slice(0,-1).join("/")||".":".";if(l1(),w(null),window.dispatchEvent(new CustomEvent("workspace-file-renamed",{detail:{oldPath:F,newPath:q0,type:v?.type||"file"}})),v?.type==="dir")B((L0)=>{let $0=new Set;for(let L of L0)if(L===F)$0.add(q0);else if(L.startsWith(`${F}/`))$0.add(`${q0}${L.slice(F.length)}`);else $0.add(L);return $0});if(D(q0),v?.type==="dir")P(null),R(!1),l(null);else N1.current?.(q0);o0.current?.(W0)}catch(o){w(o?.message||"Failed to rename file")}},[l1,E]),R4=x(async(F)=>{let b=F||".";for(let o=0;o<50;o+=1){let W0=`untitled${o===0?"":`-${o}`}.md`;try{let $0=(await f8(b,W0,""))?.path||(b==="."?W0:`${b}/${W0}`);if(b&&b!==".")B((L)=>new Set([...L,b]));D($0),w(null),o0.current?.(b),N1.current?.($0);return}catch(L0){if(L0?.status===409||L0?.code==="file_exists")continue;w(L0?.message||"Failed to create file");return}}w("Failed to create file (untitled name already in use).")},[]),x_=x((F)=>{if(F?.stopPropagation?.(),H0)return;let C=c0(r1.current);R4(C)},[H0,c0,R4]);p(()=>{if(typeof window>"u")return;let F=(C)=>{let v=C?.detail?.updates||[];if(!Array.isArray(v)||v.length===0)return;G((L0)=>{let $0=L0;for(let L of v){if(!L?.root)continue;if(!$0||L.path==="."||!L.path)$0=L.root;else $0=r6($0,L.path,L.root)}if($0)P0.current=w9($0,X0.current,O0.current);return Y0(!1),$0});let b=r1.current;if(Boolean(b)&&v.some((L0)=>{let $0=L0?.path||"";if(!$0||$0===".")return!0;return b===$0||b.startsWith(`${$0}/`)||$0.startsWith(`${b}/`)}))s1.current.clear();if(!b||!i_.current)return;let q0=S0.current?.get(b);if(q0&&q0.type==="dir")return;if(v.some((L0)=>{let $0=L0?.path||"";if(!$0||$0===".")return!0;return b===$0||b.startsWith(`${$0}/`)}))N1.current?.(b)};return window.addEventListener("workspace-update",F),()=>window.removeEventListener("workspace-update",F)},[]),A1.current=N_;let f4=S(()=>{if(typeof window>"u")return;let F=window.matchMedia("(min-width: 1024px) and (orientation: landscape)"),C=s0.current??v0.current,v=document.visibilityState!=="hidden"&&(C||F.matches&&v0.current);x$(v,O0.current).catch(()=>{})}).current,D_=S(0),v4=S(()=>{if(D_.current)clearTimeout(D_.current);D_.current=setTimeout(()=>{D_.current=0,f4()},250)}).current;p(()=>{if(v0.current)A1.current?.();v4()},[$,j]),p(()=>{A1.current(),f4();let F=setInterval(()=>A1.current(),LQ),C=X$("previewHeight",null),v=Number.isFinite(C)?Math.min(Math.max(C,80),600):280;if(e0.current=v,S1.current)S1.current.style.setProperty("--preview-height",`${v}px`);let b=window.matchMedia("(min-width: 1024px) and (orientation: landscape)"),o=()=>v4();if(b.addEventListener)b.addEventListener("change",o);else if(b.addListener)b.addListener(o);return document.addEventListener("visibilitychange",o),()=>{if(clearInterval(F),b0.current)cancelAnimationFrame(b0.current),b0.current=0;if(b.removeEventListener)b.removeEventListener("change",o);else if(b.removeListener)b.removeListener(o);if(document.removeEventListener("visibilitychange",o),D_.current)clearTimeout(D_.current),D_.current=0;if(x0.current)clearTimeout(x0.current),x0.current=null;x$(!1,O0.current).catch(()=>{})}},[]);let Y4=E0(()=>b9(X,W,c),[X,W,c]),K4=E0(()=>new Map(Y4.map((F)=>[F.node.path,F.node])),[Y4]),q_=E0(()=>S9(C0),[C0]);S0.current=K4;let j1=(U?S0.current.get(U):null)?.type==="dir";p(()=>{if(!U||!j1){A0(null),f0.current=null,p0.current=null;return}let F=U,C=`${c?"hidden":"visible"}:${U}`,v=s1.current,b=v.get(C);if(b?.root){v.delete(C),v.set(C,b);let W0=f9(b.root,Boolean(b.truncated),m0);if(W0)f0.current=W0,p0.current=U,A0({loading:!1,error:null,payload:W0});return}let o=f0.current,q0=p0.current;A0({loading:!0,error:null,payload:q0===U?o:null}),S$(U,zQ,c).then((W0)=>{if(r1.current!==F)return;let L0={root:W0?.root,truncated:Boolean(W0?.truncated)};v.delete(C),v.set(C,L0);while(v.size>FQ){let L=v.keys().next().value;if(!L)break;v.delete(L)}let $0=f9(L0.root,L0.truncated,m0);f0.current=$0,p0.current=U,A0({loading:!1,error:null,payload:$0})}).catch((W0)=>{if(r1.current!==F)return;A0({loading:!1,error:W0?.message||"Failed to load folder size chart",payload:q0===U?o:null})})},[U,j1,c,m0]);let k1=Boolean(A&&A.kind==="text"&&!j1&&(!A.size||A.size<=262144)),w_=k1?"Open in editor":A?.size>262144?"File too large to edit":"File is not editable",e1=Boolean(U&&U!=="."),R1=Boolean(U&&!j1),I1=Boolean(U&&!j1),i1=U&&j1?U5(U,c):null,V1=x(()=>D0(!1),[]),B1=x(async(F)=>{V1();try{await F?.()}catch{}},[V1]);p(()=>{let F=w0.current;if(F1.current)F1.current.dispose(),F1.current=null;if(!F)return;if(F.innerHTML="",!U||j1||!A||A.error)return;let C={path:U,content:typeof A.text==="string"?A.text:void 0,mtime:A.mtime,size:A.size,preview:A,mode:"view"},v=R0.resolve(C)||R0.get("workspace-preview-default");if(!v)return;let b=v.mount(F,C);return F1.current=b,()=>{if(F1.current===b)b.dispose(),F1.current=null;F.innerHTML=""}},[U,j1,A]);let E_=(F)=>{let C=F?.target;if(C instanceof Element)return C;return C?.parentElement||null},Q4=(F)=>{return Boolean(F?.closest?.(".workspace-node-icon, .workspace-label-text"))},b4=S((F)=>{let C=E_(F),v=C?.closest?.("[data-path]");if(!v)return;let b=v.dataset.path;if(!b||b===".")return;let o=Boolean(C?.closest?.("button"))||Boolean(C?.closest?.("a"))||Boolean(C?.closest?.("input")),q0=Boolean(C?.closest?.(".workspace-caret"));if(o||q0)return;if(a1.current===b)return;N4(b)}).current,H4=S((F)=>{if(V_.current){V_.current=!1;return}let C=E_(F),v=C?.closest?.("[data-path]");if($1.current?.focus?.(),!v)return;let b=v.dataset.path,o=v.dataset.type,q0=Boolean(C?.closest?.(".workspace-caret")),W0=Boolean(C?.closest?.("button"))||Boolean(C?.closest?.("a"))||Boolean(C?.closest?.("input")),L0=r1.current===b,$0=a1.current;if($0){if($0===b)return;l1()}let L=o==="file"&&x1.current===b&&!q0&&!W0;if(o==="dir"){if(x1.current=null,D(b),P(null),l(null),R(!1),!X0.current.has(b))o0.current?.(b);if(L0&&!q0)return;B((u)=>{let n=new Set(u);if(n.has(b))n.delete(b);else n.add(b);return n})}else{x1.current=null,D(b);let y=S0.current.get(b);if(y)h0.current?.(y.path,y);if(!W0&&!q0&&UQ(b))t0.current?.(b,i_.current);else{let n=!W0&&!q0;N1.current?.(b,{autoOpen:n})}}}).current,d_=S(()=>{P0.current="",A1.current(),Array.from(X0.current||[]).filter((C)=>C&&C!==".").forEach((C)=>o0.current?.(C))}).current,o_=S(()=>{x1.current=null,D(null),P(null),l(null),R(!1)}).current,u4=S(()=>{e((F)=>{let C=!F;if(typeof window<"u")Z1("workspaceShowHidden",String(C));return O0.current=C,x$(!0,C).catch(()=>{}),P0.current="",A1.current?.(),Array.from(X0.current||[]).filter((b)=>b&&b!==".").forEach((b)=>o0.current?.(b)),C})}).current,q4=S((F)=>{if(E_(F)?.closest?.("[data-path]"))return;o_()}).current,H1=x(async(F)=>{if(!F)return;let C=F.split("/").pop()||F;if(!window.confirm(`Delete "${C}"? This cannot be undone.`))return;try{await u8(F);let b=F.includes("/")?F.split("/").slice(0,-1).join("/")||".":".";if(r1.current===F)o_();o0.current?.(b),w(null)}catch(b){P((o)=>({...o||{},error:b.message||"Failed to delete file"}))}},[o_]),O4=x((F)=>{let C=$1.current;if(!C||!F||typeof CSS>"u"||typeof CSS.escape!=="function")return;C.querySelector(`[data-path="${CSS.escape(F)}"]`)?.scrollIntoView?.({block:"nearest"})},[]),m4=x((F)=>{let C=Y4;if(!C||C.length===0)return;let v=U?C.findIndex((b)=>b.node.path===U):-1;if(F.key==="ArrowDown"){F.preventDefault();let b=Math.min(v+1,C.length-1),o=C[b];if(!o)return;if(D(o.node.path),o.node.type!=="dir")h0.current?.(o.node.path,o.node),N1.current?.(o.node.path);else P(null),R(!1),l(null);O4(o.node.path);return}if(F.key==="ArrowUp"){F.preventDefault();let b=v<=0?0:v-1,o=C[b];if(!o)return;if(D(o.node.path),o.node.type!=="dir")h0.current?.(o.node.path,o.node),N1.current?.(o.node.path);else P(null),R(!1),l(null);O4(o.node.path);return}if(F.key==="ArrowRight"&&v>=0){let b=C[v];if(b?.node?.type==="dir"&&!W.has(b.node.path))F.preventDefault(),o0.current?.(b.node.path),B((o)=>new Set([...o,b.node.path]));return}if(F.key==="ArrowLeft"&&v>=0){let b=C[v];if(b?.node?.type==="dir"&&W.has(b.node.path))F.preventDefault(),B((o)=>{let q0=new Set(o);return q0.delete(b.node.path),q0});return}if(F.key==="Enter"&&v>=0){F.preventDefault();let b=C[v];if(!b)return;let o=b.node.path;if(b.node.type==="dir"){if(!X0.current.has(o))o0.current?.(o);B((W0)=>{let L0=new Set(W0);if(L0.has(o))L0.delete(o);else L0.add(o);return L0}),P(null),l(null),R(!1)}else h0.current?.(o,b.node),N1.current?.(o);return}if((F.key==="Delete"||F.key==="Backspace")&&v>=0){let b=C[v];if(!b||b.node.type==="dir")return;F.preventDefault(),H1(b.node.path);return}if(F.key==="Escape")F.preventDefault(),o_()},[o_,H1,W,Y4,O4,U]),t4=x((F)=>{let C=E_(F),v=C?.closest?.(".workspace-row");if(!v)return;let b=v.dataset.type,o=v.dataset.path;if(!o||o===".")return;if(a1.current===o)return;let q0=F?.touches?.[0];if(!q0)return;if(Z_.current={path:Q4(C)?o:null,dragging:!1,startX:q0.clientX,startY:q0.clientY},b!=="file")return;if(x0.current)clearTimeout(x0.current);x0.current=setTimeout(()=>{if(x0.current=null,Z_.current?.dragging)return;H1(o)},600)},[H1]),R_=x(()=>{if(x0.current)clearTimeout(x0.current),x0.current=null;let F=Z_.current;if(F?.dragging&&F.path){let C=c1.current||M1(),v=W_.current;if(typeof v==="function")v(F.path,C)}Z_.current={path:null,dragging:!1,startX:0,startY:0},b1.current=0,Z0(!1),K0(null),w1(null),U1(),t1()},[M1,t1,w1,U1]),J4=x((F)=>{let C=Z_.current,v=F?.touches?.[0];if(!v||!C?.path){if(x0.current)clearTimeout(x0.current),x0.current=null;return}let b=Math.abs(v.clientX-C.startX),o=Math.abs(v.clientY-C.startY),q0=b>8||o>8;if(q0&&x0.current)clearTimeout(x0.current),x0.current=null;if(!C.dragging&&q0)C.dragging=!0,Z0(!0),K0("move"),_1(C.path);if(C.dragging){F.preventDefault(),K_(v.clientX,v.clientY);let W0=document.elementFromPoint(v.clientX,v.clientY),L0=n_(W0)||M1();if(c1.current!==L0)w1(L0);Y_(L0)}},[n_,M1,_1,K_,w1,Y_]),D4=S((F)=>{F.preventDefault();let C=S1.current;if(!C)return;let v=F.clientY,b=e0.current||280,o=F.currentTarget;o.classList.add("dragging"),document.body.style.cursor="row-resize",document.body.style.userSelect="none";let q0=v,W0=($0)=>{q0=$0.clientY;let L=C.clientHeight-80,y=Math.min(Math.max(b-($0.clientY-v),80),L);C.style.setProperty("--preview-height",`${y}px`),e0.current=y},L0=()=>{let $0=C.clientHeight-80,L=Math.min(Math.max(b-(q0-v),80),$0);e0.current=L,o.classList.remove("dragging"),document.body.style.cursor="",document.body.style.userSelect="",Z1("previewHeight",String(Math.round(L))),document.removeEventListener("mousemove",W0),document.removeEventListener("mouseup",L0)};document.addEventListener("mousemove",W0),document.addEventListener("mouseup",L0)}).current,g4=S((F)=>{F.preventDefault();let C=S1.current;if(!C)return;let v=F.touches[0];if(!v)return;let b=v.clientY,o=e0.current||280,q0=F.currentTarget;q0.classList.add("dragging"),document.body.style.userSelect="none";let W0=($0)=>{let L=$0.touches[0];if(!L)return;$0.preventDefault();let y=C.clientHeight-80,u=Math.min(Math.max(o-(L.clientY-b),80),y);C.style.setProperty("--preview-height",`${u}px`),e0.current=u},L0=()=>{q0.classList.remove("dragging"),document.body.style.userSelect="",Z1("previewHeight",String(Math.round(e0.current||o))),document.removeEventListener("touchmove",W0),document.removeEventListener("touchend",L0),document.removeEventListener("touchcancel",L0)};document.addEventListener("touchmove",W0,{passive:!1}),document.addEventListener("touchend",L0),document.addEventListener("touchcancel",L0)}).current,G4=async()=>{if(!U)return;try{let F=await R8(U);if(F.media_id)l(F.media_id)}catch(F){P((C)=>({...C||{},error:F.message||"Failed to attach"}))}},L_=async()=>{if(!U||j1)return;await H1(U)},__=(F)=>{return Array.from(F?.dataTransfer?.types||[]).includes("Files")},P1=x((F)=>{if(!__(F))return;if(F.preventDefault(),b1.current+=1,!r0.current)Z0(!0);K0("upload");let C=S_(F)||M1();w1(C),Y_(C)},[M1,S_,w1,Y_]),h4=x((F)=>{if(!__(F))return;if(F.preventDefault(),F.dataTransfer)F.dataTransfer.dropEffect="copy";if(!r0.current)Z0(!0);if(J1.current!=="upload")K0("upload");let C=S_(F)||M1();if(c1.current!==C)w1(C);Y_(C)},[M1,S_,w1,Y_]),O1=x((F)=>{if(!__(F))return;if(F.preventDefault(),b1.current=Math.max(0,b1.current-1),b1.current===0)Z0(!1),K0(null),w1(null),U1()},[w1,U1]),f_=x(async(F,C=".")=>{let v=Array.from(F||[]);if(v.length===0)return;let b=C&&C!==""?C:".",o=b!=="."?b:"workspace root";u0(!0);try{let q0=null;for(let W0 of v)try{q0=await W5(W0,b)}catch(L0){let $0=L0?.status,L=L0?.code;if($0===409||L==="file_exists"){let y=W0?.name||"file";if(!window.confirm(`"${y}" already exists in ${o}. Overwrite?`))continue;q0=await W5(W0,b,{overwrite:!0})}else throw L0}if(q0?.path)x1.current=q0.path,D(q0.path),N1.current?.(q0.path);o0.current?.(b)}catch(q0){w(q0.message||"Failed to upload file")}finally{u0(!1)}},[]),E4=x(async(F,C)=>{if(!F)return;let v=S0.current?.get(F);if(!v)return;let b=C&&C!==""?C:".",o=F.includes("/")?F.split("/").slice(0,-1).join("/")||".":".";if(b===o)return;try{let W0=(await b8(F,b))?.path||F;if(v.type==="dir")B((L0)=>{let $0=new Set;for(let L of L0)if(L===F)$0.add(W0);else if(L.startsWith(`${F}/`))$0.add(`${W0}${L.slice(F.length)}`);else $0.add(L);return $0});if(D(W0),v.type==="dir")P(null),R(!1),l(null);else N1.current?.(W0);o0.current?.(o),o0.current?.(b)}catch(q0){w(q0?.message||"Failed to move entry")}},[]);W_.current=E4;let A4=x(async(F)=>{if(!__(F))return;F.preventDefault(),b1.current=0,Z0(!1),K0(null),U0(null),U1();let C=Array.from(F?.dataTransfer?.files||[]);if(C.length===0)return;let v=c1.current||S_(F)||M1();await f_(C,v)},[M1,S_,f_]),X4=x((F)=>{if(F?.stopPropagation?.(),H0)return;let C=F?.currentTarget?.dataset?.uploadTarget||".";p1.current=C,Y1.current?.click()},[H0]),C1=x(()=>{if(H0)return;let F=r1.current,C=F?S0.current?.get(F):null;p1.current=C?.type==="dir"?C.path:".",Y1.current?.click()},[H0]),s_=x(()=>{B1(()=>x_(null))},[B1,x_]),v_=x(()=>{B1(()=>C1())},[B1,C1]),p4=x(()=>{B1(()=>d_())},[B1,d_]),r_=x(()=>{B1(()=>u4())},[B1,u4]),M4=x(()=>{if(!U||!k1)return;B1(()=>t0.current?.(U,A))},[B1,U,k1,A]),c4=x(()=>{if(!U||U===".")return;B1(()=>N4(U))},[B1,U,N4]),A_=x(()=>{if(!U||j1)return;B1(()=>L_())},[B1,U,j1,L_]),U_=x(()=>{if(!U||j1)return;B1(()=>G4())},[B1,U,j1,G4]),M_=x(()=>{if(!i1)return;if(V1(),typeof window<"u")window.open(i1,"_blank","noopener")},[V1,i1]),l4=x(()=>{V1(),N?.()},[V1,N]),k_=x(()=>{V1(),Y?.()},[V1,Y]),k4=x(()=>{V1(),K?.()},[V1,K]),a_=x((F)=>{if(!F||F.button!==0)return;let C=F.currentTarget;if(!C||!C.dataset)return;let v=C.dataset.path;if(!v||v===".")return;if(a1.current===v)return;let b=E_(F);if(b?.closest?.("button, a, input, .workspace-caret"))return;if(!Q4(b))return;F.preventDefault(),Q1.current={path:v,dragging:!1,startX:F.clientX,startY:F.clientY};let o=(W0)=>{let L0=Q1.current;if(!L0?.path)return;let $0=Math.abs(W0.clientX-L0.startX),L=Math.abs(W0.clientY-L0.startY),y=$0>4||L>4;if(!L0.dragging&&y)L0.dragging=!0,V_.current=!0,Z0(!0),K0("move"),_1(L0.path),K_(W0.clientX,W0.clientY),document.body.style.userSelect="none",document.body.style.cursor="grabbing";if(L0.dragging){W0.preventDefault(),K_(W0.clientX,W0.clientY);let u=document.elementFromPoint(W0.clientX,W0.clientY),n=n_(u)||M1();if(c1.current!==n)w1(n);Y_(n)}},q0=()=>{document.removeEventListener("mousemove",o),document.removeEventListener("mouseup",q0);let W0=Q1.current;if(W0?.dragging&&W0.path){let L0=c1.current||M1(),$0=W_.current;if(typeof $0==="function")$0(W0.path,L0)}Q1.current={path:null,dragging:!1,startX:0,startY:0},b1.current=0,Z0(!1),K0(null),w1(null),U1(),t1(),document.body.style.userSelect="",document.body.style.cursor="",setTimeout(()=>{V_.current=!1},0)};document.addEventListener("mousemove",o),document.addEventListener("mouseup",q0)},[n_,M1,_1,K_,t1,w1,Y_,U1]),b_=x(async(F)=>{let C=Array.from(F?.target?.files||[]);if(C.length===0)return;let v=p1.current||".";if(await f_(C,v),p1.current=".",F?.target)F.target.value=""},[f_]);return z`
        <aside
            class=${`workspace-sidebar${i?" workspace-drop-active":""}`}
            data-workspace-scale=${C0}
            ref=${S1}
            onDragEnter=${P1}
            onDragOver=${h4}
            onDragLeave=${O1}
            onDrop=${A4}
        >
            <input type="file" multiple style="display:none" ref=${Y1} onChange=${b_} />
            <div class="workspace-header">
                <div class="workspace-header-left">
                    <div class="workspace-menu-wrap">
                        <button
                            ref=${Q0}
                            class=${`workspace-menu-button${I0?" active":""}`}
                            onClick=${(F)=>{F.stopPropagation(),D0((C)=>!C)}}
                            title="Workspace actions"
                            aria-label="Workspace actions"
                            aria-haspopup="menu"
                            aria-expanded=${I0?"true":"false"}
                        >
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                <line x1="4" y1="7" x2="20" y2="7" />
                                <line x1="4" y1="12" x2="20" y2="12" />
                                <line x1="4" y1="17" x2="20" y2="17" />
                            </svg>
                        </button>
                        ${I0&&z`
                            <div class="workspace-menu-dropdown" ref=${m} role="menu" aria-label="Workspace options">
                                <button class="workspace-menu-item" role="menuitem" onClick=${s_} disabled=${H0}>New file</button>
                                <button class="workspace-menu-item" role="menuitem" onClick=${v_} disabled=${H0}>Upload files</button>
                                <button class="workspace-menu-item" role="menuitem" onClick=${p4}>Refresh tree</button>
                                <button class=${`workspace-menu-item${c?" active":""}`} role="menuitem" onClick=${r_}>
                                    ${c?"Hide hidden files":"Show hidden files"}
                                </button>

                                ${U&&z`<div class="workspace-menu-separator"></div>`}
                                ${U&&!j1&&z`
                                    <button class="workspace-menu-item" role="menuitem" onClick=${M4} disabled=${!k1}>Open in editor</button>
                                `}
                                ${e1&&z`
                                    <button class="workspace-menu-item" role="menuitem" onClick=${c4}>Rename selected</button>
                                `}
                                ${I1&&z`
                                    <button class="workspace-menu-item" role="menuitem" onClick=${U_}>Download selected file</button>
                                `}
                                ${i1&&z`
                                    <button class="workspace-menu-item" role="menuitem" onClick=${M_}>Download selected folder (zip)</button>
                                `}
                                ${R1&&z`
                                    <button class="workspace-menu-item danger" role="menuitem" onClick=${A_}>Delete selected file</button>
                                `}

                                ${(N||Y||K)&&z`<div class="workspace-menu-separator"></div>`}
                                ${N&&z`
                                    <button class="workspace-menu-item" role="menuitem" onClick=${l4}>
                                        Open terminal in tab
                                    </button>
                                `}
                                ${Y&&z`
                                    <button class="workspace-menu-item" role="menuitem" onClick=${k_}>
                                        Open VNC in tab
                                    </button>
                                `}
                                ${K&&z`
                                    <button class="workspace-menu-item" role="menuitem" onClick=${k4}>
                                        ${Q?"Hide terminal dock":"Show terminal dock"}
                                    </button>
                                `}
                            </div>
                        `}
                    </div>
                    <span>Workspace</span>
                </div>
                <div class="workspace-header-actions">
                    <button class="workspace-create" onClick=${x_} title="New file" disabled=${H0}>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                            stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                            <line x1="12" y1="5" x2="12" y2="19" />
                            <line x1="5" y1="12" x2="19" y2="12" />
                        </svg>
                    </button>
                    <button class="workspace-refresh" onClick=${d_} title="Refresh">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"
                            stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                            <circle cx="12" cy="12" r="8.5" stroke-dasharray="42 12" stroke-dashoffset="6"
                                transform="rotate(75 12 12)" />
                            <polyline points="21 3 21 9 15 9" />
                        </svg>
                    </button>
                </div>
            </div>
            <div class="workspace-tree" onClick=${q4}>
                ${H0&&z`<div class="workspace-drop-hint">Uploading…</div>`}
                ${t&&z`<div class="workspace-loading">Loading…</div>`}
                ${H&&z`<div class="workspace-error">${H}</div>`}
                ${X&&z`
                    <div
                        class="workspace-tree-list"
                        ref=${$1}
                        tabIndex="0"
                        onClick=${H4}
                        onDblClick=${b4}
                        onKeyDown=${m4}
                        onTouchStart=${t4}
                        onTouchEnd=${R_}
                        onTouchMove=${J4}
                        onTouchCancel=${R_}
                    >
                        ${Y4.map(({node:F,depth:C})=>{let v=F.type==="dir",b=F.path===U,o=F.path===k,q0=v&&W.has(F.path),W0=F0&&F.path===F0,L0=Array.isArray(F.children)&&F.children.length>0?F.children.length:Number(F.child_count)||0;return z`
                                <div
                                    key=${F.path}
                                    class=${`workspace-row${b?" selected":""}${W0?" drop-target":""}`}
                                    style=${{paddingLeft:`${8+C*q_.indentPx}px`}}
                                    data-path=${F.path}
                                    data-type=${F.type}
                                    onMouseDown=${a_}
                                >
                                    <span class="workspace-caret" aria-hidden="true">
                                        ${v?q0?z`<svg viewBox="0 0 12 12"><polygon points="1,2 11,2 6,11"/></svg>`:z`<svg viewBox="0 0 12 12"><polygon points="2,1 11,6 2,11"/></svg>`:null}
                                    </span>
                                    <svg class=${`workspace-node-icon${v?" folder":""}`}
                                        viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                        stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                        aria-hidden="true">
                                        ${v?z`<path d="M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>`:z`<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/>`}
                                    </svg>
                                    ${o?z`
                                            <input
                                                class="workspace-rename-input"
                                                ref=${v1}
                                                value=${E}
                                                onInput=${($0)=>J($0?.target?.value||"")}
                                                onKeyDown=${($0)=>{if($0.key==="Enter")$0.preventDefault(),Q_();else if($0.key==="Escape")$0.preventDefault(),l1()}}
                                                onBlur=${l1}
                                                onClick=${($0)=>$0.stopPropagation()}
                                            />
                                        `:z`<span class="workspace-label"><span class="workspace-label-text">${F.name}</span></span>`}
                                    ${v&&!q0&&L0>0&&z`
                                        <span class="workspace-count">${L0}</span>
                                    `}
                                    ${v&&z`
                                        <button
                                            class="workspace-folder-upload"
                                            data-upload-target=${F.path}
                                            title="Upload files to this folder"
                                            onClick=${X4}
                                            disabled=${H0}
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
            ${U&&z`
                <div class="workspace-preview-splitter-h" onMouseDown=${D4} onTouchStart=${g4}></div>
                <div class="workspace-preview">
                    <div class="workspace-preview-header">
                        <span class="workspace-preview-title">${U}</span>
                        <div class="workspace-preview-actions">
                            <button class="workspace-create" onClick=${x_} title="New file" disabled=${H0}>
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                    stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                    <line x1="12" y1="5" x2="12" y2="19" />
                                    <line x1="5" y1="12" x2="19" y2="12" />
                                </svg>
                            </button>
                            ${!j1&&z`
                                <button
                                    class="workspace-download workspace-edit"
                                    onClick=${()=>k1&&t0.current?.(U,A)}
                                    title=${w_}
                                    disabled=${!k1}
                                >
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                        stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                        <path d="M12 20h9" />
                                        <path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4Z" />
                                    </svg>
                                </button>
                                <button
                                    class="workspace-download workspace-delete"
                                    onClick=${L_}
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
                            ${j1?z`
                                    <button class="workspace-download" onClick=${C1}
                                        title="Upload files to this folder" disabled=${H0}>
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                            stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                                            <polyline points="7 8 12 3 17 8"/>
                                            <line x1="12" y1="3" x2="12" y2="15"/>
                                        </svg>
                                    </button>
                                    <a class="workspace-download" href=${U5(U,c)}
                                        title="Download folder as zip" onClick=${(F)=>F.stopPropagation()}>
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                            stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                                            <polyline points="7 10 12 15 17 10"/>
                                            <line x1="12" y1="15" x2="12" y2="3"/>
                                        </svg>
                                    </a>`:z`<button class="workspace-download" onClick=${G4} title="Download">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                        stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                                        <polyline points="7 10 12 15 17 10"/>
                                        <line x1="12" y1="15" x2="12" y2="3"/>
                                    </svg>
                                </button>`}
                        </div>
                    </div>
                    ${f&&z`<div class="workspace-loading">Loading preview…</div>`}
                    ${A?.error&&z`<div class="workspace-error">${A.error}</div>`}
                    ${j1&&z`
                        <div class="workspace-preview-text">Folder selected — create file, upload files, or download as zip.</div>
                        ${k0?.loading&&z`<div class="workspace-loading">Loading folder size preview…</div>`}
                        ${k0?.error&&z`<div class="workspace-error">${k0.error}</div>`}
                        ${k0?.payload&&k0.payload.segments?.length>0&&z`
                            <${HQ} payload=${k0.payload} />
                        `}
                        ${k0?.payload&&(!k0.payload.segments||k0.payload.segments.length===0)&&z`
                            <div class="workspace-preview-text">No file size data available for this folder yet.</div>
                        `}
                    `}
                    ${A&&!A.error&&!j1&&z`
                        <div class="workspace-preview-body" ref=${w0}></div>
                    `}
                    ${d&&z`
                        <div class="workspace-download-card">
                            <${OQ} mediaId=${d} />
                        </div>
                    `}
                </div>
            `}
            ${G0&&z`
                <div class="workspace-drag-ghost" ref=${B_}>${G0.label}</div>
            `}
        </aside>
    `}var JQ=new Set(["kanban-editor","mindmap-editor"]);function DQ(_,$,j){let Z=String(_||"").trim();if(!Z)return null;if($)return $;if(typeof j!=="function")return null;return j({path:Z,mode:"edit"})?.id||null}function n9(_,$,j){let Z=DQ(_,$,j);return JQ.has(Z)}var EQ=/\.(docx?|xlsx?|pptx?|odt|ods|odp|rtf)$/i,AQ=/\.(csv|tsv)$/i,MQ=/\.pdf$/i,kQ=/\.(png|jpe?g|gif|webp|bmp|ico|svg)$/i,d9=/\.drawio(\.xml|\.svg|\.png)?$/i;function o9({tabs:_,activeId:$,onActivate:j,onClose:Z,onCloseOthers:N,onCloseAll:Y,onTogglePin:K,onTogglePreview:Q,onEditSource:X,previewTabs:G,paneOverrides:W,onToggleDock:B,dockVisible:U,onToggleZen:D,zenMode:k,onPopOutTab:T}){let[E,J]=h(null),A=S(null);p(()=>{if(!E)return;let H=(w)=>{if(w.type==="keydown"&&w.key!=="Escape")return;J(null)};return document.addEventListener("click",H),document.addEventListener("keydown",H),()=>{document.removeEventListener("click",H),document.removeEventListener("keydown",H)}},[E]),p(()=>{let H=(w)=>{if(w.ctrlKey&&w.key==="Tab"){if(w.preventDefault(),!_.length)return;let c=_.findIndex((e)=>e.id===$);if(w.shiftKey){let e=_[(c-1+_.length)%_.length];j?.(e.id)}else{let e=_[(c+1)%_.length];j?.(e.id)}return}if((w.ctrlKey||w.metaKey)&&w.key==="w"){let c=document.querySelector(".editor-pane");if(c&&c.contains(document.activeElement)){if(w.preventDefault(),$)Z?.($)}}};return document.addEventListener("keydown",H),()=>document.removeEventListener("keydown",H)},[_,$,j,Z]);let P=x((H,w)=>{if(H.button===1){H.preventDefault(),Z?.(w);return}if(H.button===0)j?.(w)},[j,Z]),d=x((H,w)=>{H.preventDefault(),J({id:w,x:H.clientX,y:H.clientY})},[]),l=x((H)=>{H.preventDefault(),H.stopPropagation()},[]),t=x((H,w)=>{H.preventDefault(),H.stopPropagation(),Z?.(w)},[Z]);p(()=>{if(!$||!A.current)return;let H=A.current.querySelector(".tab-item.active");if(H)H.scrollIntoView({block:"nearest",inline:"nearest",behavior:"smooth"})},[$]);let Y0=x((H)=>{if(!(W instanceof Map))return null;return W.get(H)||null},[W]),f=E0(()=>_.find((H)=>H.id===E?.id)||null,[E?.id,_]),R=E0(()=>{let H=E?.id;if(!H)return!1;return n9(H,Y0(H),(w)=>R0.resolve(w))},[E?.id,Y0]);if(!_.length)return null;return z`
        <div class="tab-strip" ref=${A} role="tablist">
            ${_.map((H)=>z`
                <div
                    key=${H.id}
                    class=${`tab-item${H.id===$?" active":""}${H.dirty?" dirty":""}${H.pinned?" pinned":""}`}
                    role="tab"
                    aria-selected=${H.id===$}
                    title=${H.path}
                    onMouseDown=${(w)=>P(w,H.id)}
                    onContextMenu=${(w)=>d(w,H.id)}
                >
                    ${H.pinned&&z`
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
                        onMouseDown=${l}
                        onClick=${(w)=>t(w,H.id)}
                        title=${H.dirty?"Unsaved changes":"Close"}
                        aria-label=${H.dirty?"Unsaved changes":`Close ${H.label}`}
                    >
                        ${H.dirty?z`<span class="tab-dirty-dot" aria-hidden="true"></span>`:z`<svg viewBox="0 0 16 16" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" aria-hidden="true" focusable="false" style=${{pointerEvents:"none"}}>
                                <line x1="4" y1="4" x2="12" y2="12" style=${{pointerEvents:"none"}}/>
                                <line x1="12" y1="4" x2="4" y2="12" style=${{pointerEvents:"none"}}/>
                            </svg>`}
                    </button>
                </div>
            `)}
            ${B&&z`
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
            ${D&&z`
                <button
                    class=${`tab-strip-zen-toggle${k?" active":""}`}
                    onClick=${D}
                    title=${`${k?"Exit":"Enter"} zen mode (Ctrl+Shift+Z)`}
                    aria-label=${`${k?"Exit":"Enter"} zen mode`}
                    aria-pressed=${k?"true":"false"}
                >
                    <svg viewBox="0 0 16 16" width="14" height="14" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                        ${k?z`<polyline points="4 8 1.5 8 1.5 1.5 14.5 1.5 14.5 8 12 8"/><polyline points="4 8 1.5 8 1.5 14.5 14.5 14.5 14.5 8 12 8"/>`:z`<polyline points="5.5 1.5 1.5 1.5 1.5 5.5"/><polyline points="10.5 1.5 14.5 1.5 14.5 5.5"/><polyline points="5.5 14.5 1.5 14.5 1.5 10.5"/><polyline points="10.5 14.5 14.5 14.5 14.5 10.5"/>`}
                    </svg>
                </button>
            `}
        </div>
        ${E&&z`
            <div class="tab-context-menu" style=${{left:E.x+"px",top:E.y+"px"}}>
                <button onClick=${()=>{Z?.(E.id),J(null)}}>Close</button>
                <button onClick=${()=>{N?.(E.id),J(null)}}>Close Others</button>
                <button onClick=${()=>{Y?.(),J(null)}}>Close All</button>
                <hr />
                <button onClick=${()=>{K?.(E.id),J(null)}}>
                    ${f?.pinned?"Unpin":"Pin"}
                </button>
                ${R&&X&&z`
                    <button onClick=${()=>{X(E.id),J(null)}}>Edit Source</button>
                `}
                ${T&&z`
                    <button onClick=${()=>{let H=_.find((w)=>w.id===E.id);T(E.id,H?.label),J(null)}}>Open in Window</button>
                `}
                ${Q&&/\.(md|mdx|markdown)$/i.test(E.id)&&z`
                    <hr />
                    <button onClick=${()=>{Q(E.id),J(null)}}>
                        ${G?.has(E.id)?"Hide Preview":"Preview"}
                    </button>
                `}
                ${EQ.test(E.id)&&z`
                    <hr />
                    <button onClick=${()=>{let H="/workspace/raw?path="+encodeURIComponent(E.id),w=E.id.split("/").pop()||"document",c="/office-viewer/?url="+encodeURIComponent(H)+"&name="+encodeURIComponent(w);window.open(c,"_blank","noopener"),J(null)}}>Open in New Tab</button>
                `}
                ${AQ.test(E.id)&&z`
                    <hr />
                    <button onClick=${()=>{let H="/csv-viewer/?path="+encodeURIComponent(E.id);window.open(H,"_blank","noopener"),J(null)}}>Open in New Tab</button>
                `}
                ${MQ.test(E.id)&&z`
                    <hr />
                    <button onClick=${()=>{let H="/workspace/raw?path="+encodeURIComponent(E.id);window.open(H,"_blank","noopener"),J(null)}}>Open in New Tab</button>
                `}
                ${kQ.test(E.id)&&!d9.test(E.id)&&z`
                    <hr />
                    <button onClick=${()=>{let H="/image-viewer/?path="+encodeURIComponent(E.id);window.open(H,"_blank","noopener"),J(null)}}>Open in New Tab</button>
                `}
                ${d9.test(E.id)&&z`
                    <hr />
                    <button onClick=${()=>{let H="/drawio/edit?path="+encodeURIComponent(E.id);window.open(H,"_blank","noopener"),J(null)}}>Open in New Tab</button>
                `}
            </div>
        `}
    `}var IQ=400,_3=60,s9=220,$3="mdPreviewHeight";function PQ(){try{let _=localStorage.getItem($3),$=_?Number(_):NaN;return Number.isFinite($)&&$>=_3?$:s9}catch{return s9}}function j3({getContent:_,path:$,onClose:j}){let[Z,N]=h(""),[Y,K]=h(PQ),Q=S(null),X=S(null),G=S(""),W=S(_);return W.current=_,p(()=>{let D=()=>{let T=W.current?.()||"";if(T===G.current)return;G.current=T;try{let E=H_(T,null,{sanitize:!1});N(E)}catch{N('<p style="color:var(--text-secondary)">Preview unavailable</p>')}};D();let k=setInterval(D,IQ);return()=>clearInterval(k)},[]),p(()=>{if(Q.current&&Z)W4(Q.current).catch(()=>{})},[Z]),z`
        <div
            class="md-preview-splitter"
            onMouseDown=${(D)=>{D.preventDefault();let k=D.clientY,T=X.current?.offsetHeight||Y,E=X.current?.parentElement,J=E?E.offsetHeight*0.7:500,A=D.currentTarget;A.classList.add("dragging"),document.body.style.cursor="row-resize",document.body.style.userSelect="none";let P=(l)=>{let t=Math.min(Math.max(T-(l.clientY-k),_3),J);K(t)},d=()=>{A.classList.remove("dragging"),document.body.style.cursor="",document.body.style.userSelect="";try{localStorage.setItem($3,String(Math.round(X.current?.offsetHeight||Y)))}catch{}document.removeEventListener("mousemove",P),document.removeEventListener("mouseup",d)};document.addEventListener("mousemove",P),document.addEventListener("mouseup",d)}}
            onTouchStart=${(D)=>{D.preventDefault();let k=D.touches[0];if(!k)return;let T=k.clientY,E=X.current?.offsetHeight||Y,J=X.current?.parentElement,A=J?J.offsetHeight*0.7:500,P=D.currentTarget;P.classList.add("dragging"),document.body.style.userSelect="none";let d=(t)=>{let Y0=t.touches[0];if(!Y0)return;t.preventDefault();let f=Math.min(Math.max(E-(Y0.clientY-T),_3),A);K(f)},l=()=>{P.classList.remove("dragging"),document.body.style.userSelect="";try{localStorage.setItem($3,String(Math.round(X.current?.offsetHeight||Y)))}catch{}document.removeEventListener("touchmove",d),document.removeEventListener("touchend",l),document.removeEventListener("touchcancel",l)};document.addEventListener("touchmove",d,{passive:!1}),document.addEventListener("touchend",l),document.addEventListener("touchcancel",l)}}
        ></div>
        <div class="md-preview-panel" ref=${X} style=${{height:Y+"px"}}>
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
                ref=${Q}
                dangerouslySetInnerHTML=${{__html:Z}}
            />
        </div>
    `}function r9({handleSseEvent:_,handleConnectionStatusChange:$,loadPosts:j,onWake:Z,chatJid:N}){let Y=S(_);Y.current=_;let K=S($);K.current=$;let Q=S(j);Q.current=j;let X=S(Z);X.current=Z,p(()=>{Q.current();let G=new z5((B,U)=>Y.current(B,U),(B)=>K.current(B),{chatJid:N});G.connect();let W=()=>{G.reconnectIfNeeded();let B=typeof document<"u"?document:null;if(!B||B.visibilityState==="visible")X.current?.()};return window.addEventListener("focus",W),document.addEventListener("visibilitychange",W),()=>{window.removeEventListener("focus",W),document.removeEventListener("visibilitychange",W),G.disconnect()}},[N])}function a9(){let[_,$]=h(!1),[j,Z]=h("default"),N=S(!1);p(()=>{let X=G$("notificationsEnabled",!1);if(N.current=X,$(X),typeof Notification<"u")Z(Notification.permission)},[]),p(()=>{N.current=_},[_]);let Y=x(()=>{if(typeof Notification>"u")return Promise.resolve("denied");try{let X=Notification.requestPermission();if(X&&typeof X.then==="function")return X;return Promise.resolve(X)}catch{return Promise.resolve("default")}},[]),K=x(async()=>{if(typeof window>"u"||typeof Notification>"u")return;if(!window.isSecureContext){alert("Notifications require a secure context (HTTPS or installed app).");return}if(Notification.permission==="denied"){Z("denied"),alert("Browser notifications are blocked. Enable them in your browser settings.");return}if(Notification.permission==="default"){let G=await Y();if(Z(G||"default"),G!=="granted"){N.current=!1,$(!1),Z1("notificationsEnabled","false");return}}let X=!N.current;N.current=X,$(X),Z1("notificationsEnabled",String(X))},[Y]),Q=x((X,G)=>{if(!N.current)return!1;if(typeof Notification>"u")return!1;if(Notification.permission!=="granted")return!1;try{let W=new Notification(X,{body:G});return W.onclick=()=>{try{window.focus()}catch{}},!0}catch{return!1}},[]);return{notificationsEnabled:_,notificationPermission:j,toggleNotifications:K,notify:Q}}var s$=(_)=>{let $=new Set;return(_||[]).filter((j)=>{if(!j||$.has(j.id))return!1;return $.add(j.id),!0})};function t9({preserveTimelineScroll:_,preserveTimelineScrollTop:$,chatJid:j=null}){let[Z,N]=h(null),[Y,K]=h(!1),Q=S(!1),X=S(null),G=S(!1),W=S(null),B=S(null),U=S(0);p(()=>{Q.current=Y},[Y]),p(()=>{B.current=Z},[Z]),p(()=>{U.current+=1,W.current=null,G.current=!1,Q.current=!1,K(!1)},[j]);let D=x(async(E=null)=>{let J=U.current;try{if(E){let A=await O8(E,50,0,j);if(J!==U.current)return;N(A.posts),K(!1)}else{let A=await i4(10,null,j);if(J!==U.current)return;N(A.posts),K(A.has_more)}}catch(A){if(J!==U.current)return;console.error("Failed to load posts:",A)}},[j]),k=x(async()=>{let E=U.current;try{let J=await i4(10,null,j);if(E!==U.current)return;N((A)=>{if(!A||A.length===0)return J.posts;return s$([...J.posts,...A])}),K((A)=>A||J.has_more)}catch(J){if(E!==U.current)return;console.error("Failed to refresh timeline:",J)}},[j]),T=x(async(E={})=>{let J=U.current,A=B.current;if(!A||A.length===0)return;if(G.current)return;let{preserveScroll:P=!0,preserveMode:d="top",allowRepeat:l=!1}=E,t=(R)=>{if(!P){R();return}if(d==="top")$(R);else _(R)},f=A.slice().sort((R,H)=>R.id-H.id)[0]?.id;if(!Number.isFinite(f))return;if(!l&&W.current===f)return;G.current=!0,W.current=f;try{let R=await i4(10,f,j);if(J!==U.current)return;if(R.posts.length>0)t(()=>{N((H)=>s$([...R.posts,...H||[]])),K(R.has_more)});else K(!1)}catch(R){if(J!==U.current)return;console.error("Failed to load more posts:",R)}finally{if(J===U.current)G.current=!1}},[j,_,$]);return p(()=>{X.current=T},[T]),{posts:Z,setPosts:N,hasMore:Y,setHasMore:K,hasMoreRef:Q,loadPosts:D,refreshTimeline:k,loadMore:T,loadMoreRef:X,loadingMoreRef:G,lastBeforeIdRef:W}}function e9(){let[_,$]=h(null),[j,Z]=h({text:"",totalLines:0}),[N,Y]=h(""),[K,Q]=h({text:"",totalLines:0}),[X,G]=h(null),[W,B]=h(null),[U,D]=h(null),k=S(null),T=S(0),E=S(!1),J=S(""),A=S(""),P=S(null),d=S(null),l=S(null),t=S(null),Y0=S(!1),f=S(!1);return{agentStatus:_,setAgentStatus:$,agentDraft:j,setAgentDraft:Z,agentPlan:N,setAgentPlan:Y,agentThought:K,setAgentThought:Q,pendingRequest:X,setPendingRequest:G,currentTurnId:W,setCurrentTurnId:B,steerQueuedTurnId:U,setSteerQueuedTurnId:D,lastAgentEventRef:k,lastSilenceNoticeRef:T,isAgentRunningRef:E,draftBufferRef:J,thoughtBufferRef:A,pendingRequestRef:P,stalledPostIdRef:d,currentTurnIdRef:l,steerQueuedTurnIdRef:t,thoughtExpandedRef:Y0,draftExpandedRef:f}}function _j({appShellRef:_,sidebarWidthRef:$,editorWidthRef:j,dockHeightRef:Z}){let N=S((W)=>{W.preventDefault();let B=_.current;if(!B)return;let U=W.clientX,D=$.current||280,k=W.currentTarget;k.classList.add("dragging"),B.classList.add("sidebar-resizing"),document.body.style.cursor="col-resize",document.body.style.userSelect="none";let T=U,E=(A)=>{T=A.clientX;let P=Math.min(Math.max(D+(A.clientX-U),160),600);B.style.setProperty("--sidebar-width",`${P}px`),$.current=P},J=()=>{let A=Math.min(Math.max(D+(T-U),160),600);$.current=A,k.classList.remove("dragging"),B.classList.remove("sidebar-resizing"),document.body.style.cursor="",document.body.style.userSelect="",Z1("sidebarWidth",String(Math.round(A))),document.removeEventListener("mousemove",E),document.removeEventListener("mouseup",J)};document.addEventListener("mousemove",E),document.addEventListener("mouseup",J)}).current,Y=S((W)=>{W.preventDefault();let B=_.current;if(!B)return;let U=W.touches[0];if(!U)return;let D=U.clientX,k=$.current||280,T=W.currentTarget;T.classList.add("dragging"),B.classList.add("sidebar-resizing"),document.body.style.userSelect="none";let E=(A)=>{let P=A.touches[0];if(!P)return;A.preventDefault();let d=Math.min(Math.max(k+(P.clientX-D),160),600);B.style.setProperty("--sidebar-width",`${d}px`),$.current=d},J=()=>{T.classList.remove("dragging"),B.classList.remove("sidebar-resizing"),document.body.style.userSelect="",Z1("sidebarWidth",String(Math.round($.current||k))),document.removeEventListener("touchmove",E),document.removeEventListener("touchend",J),document.removeEventListener("touchcancel",J)};document.addEventListener("touchmove",E,{passive:!1}),document.addEventListener("touchend",J),document.addEventListener("touchcancel",J)}).current,K=S((W)=>{W.preventDefault();let B=_.current;if(!B)return;let U=W.clientX,D=j.current||$.current||280,k=W.currentTarget;k.classList.add("dragging"),document.body.style.cursor="col-resize",document.body.style.userSelect="none";let T=U,E=(A)=>{T=A.clientX;let P=Math.min(Math.max(D+(A.clientX-U),200),800);B.style.setProperty("--editor-width",`${P}px`),j.current=P},J=()=>{let A=Math.min(Math.max(D+(T-U),200),800);j.current=A,k.classList.remove("dragging"),document.body.style.cursor="",document.body.style.userSelect="",Z1("editorWidth",String(Math.round(A))),document.removeEventListener("mousemove",E),document.removeEventListener("mouseup",J)};document.addEventListener("mousemove",E),document.addEventListener("mouseup",J)}).current,Q=S((W)=>{W.preventDefault();let B=_.current;if(!B)return;let U=W.touches[0];if(!U)return;let D=U.clientX,k=j.current||$.current||280,T=W.currentTarget;T.classList.add("dragging"),document.body.style.userSelect="none";let E=(A)=>{let P=A.touches[0];if(!P)return;A.preventDefault();let d=Math.min(Math.max(k+(P.clientX-D),200),800);B.style.setProperty("--editor-width",`${d}px`),j.current=d},J=()=>{T.classList.remove("dragging"),document.body.style.userSelect="",Z1("editorWidth",String(Math.round(j.current||k))),document.removeEventListener("touchmove",E),document.removeEventListener("touchend",J),document.removeEventListener("touchcancel",J)};document.addEventListener("touchmove",E,{passive:!1}),document.addEventListener("touchend",J),document.addEventListener("touchcancel",J)}).current,X=S((W)=>{W.preventDefault();let B=_.current;if(!B)return;let U=W.clientY,D=Z?.current||200,k=W.currentTarget;k.classList.add("dragging"),document.body.style.cursor="row-resize",document.body.style.userSelect="none";let T=U,E=(A)=>{T=A.clientY;let P=Math.min(Math.max(D-(A.clientY-U),100),window.innerHeight*0.5);if(B.style.setProperty("--dock-height",`${P}px`),Z)Z.current=P;window.dispatchEvent(new CustomEvent("dock-resize"))},J=()=>{let A=Math.min(Math.max(D-(T-U),100),window.innerHeight*0.5);if(Z)Z.current=A;k.classList.remove("dragging"),document.body.style.cursor="",document.body.style.userSelect="",Z1("dockHeight",String(Math.round(A))),window.dispatchEvent(new CustomEvent("dock-resize")),document.removeEventListener("mousemove",E),document.removeEventListener("mouseup",J)};document.addEventListener("mousemove",E),document.addEventListener("mouseup",J)}).current,G=S((W)=>{W.preventDefault();let B=_.current;if(!B)return;let U=W.touches[0];if(!U)return;let D=U.clientY,k=Z?.current||200,T=W.currentTarget;T.classList.add("dragging"),document.body.style.userSelect="none";let E=(A)=>{let P=A.touches[0];if(!P)return;A.preventDefault();let d=Math.min(Math.max(k-(P.clientY-D),100),window.innerHeight*0.5);if(B.style.setProperty("--dock-height",`${d}px`),Z)Z.current=d;window.dispatchEvent(new CustomEvent("dock-resize"))},J=()=>{T.classList.remove("dragging"),document.body.style.userSelect="",Z1("dockHeight",String(Math.round(Z?.current||k))),window.dispatchEvent(new CustomEvent("dock-resize")),document.removeEventListener("touchmove",E),document.removeEventListener("touchend",J),document.removeEventListener("touchcancel",J)};document.addEventListener("touchmove",E,{passive:!1}),document.addEventListener("touchend",J),document.addEventListener("touchcancel",J)}).current;return{handleSplitterMouseDown:N,handleSplitterTouchStart:Y,handleEditorSplitterMouseDown:K,handleEditorSplitterTouchStart:Q,handleDockSplitterMouseDown:X,handleDockSplitterTouchStart:G}}function CQ(_,$,j,Z){if(!(_ instanceof Map)||_.size===0||!$||!j)return _;let N=!1,Y=new Map;for(let[K,Q]of _.entries()){let X=K;if(Z==="dir"){if(K===$)X=j,N=!0;else if(K.startsWith(`${$}/`))X=`${j}${K.slice($.length)}`,N=!0}else if(K===$)X=j,N=!0;Y.set(X,Q)}return N?Y:_}function $j({onTabClosed:_}={}){let $=S(_);$.current=_;let[j,Z]=h(()=>n0.getTabs()),[N,Y]=h(()=>n0.getActiveId()),[K,Q]=h(()=>n0.getTabs().length>0);p(()=>{return n0.onChange((f,R)=>{Z(f),Y(R),Q(f.length>0)})},[]);let[X,G]=h(()=>new Set),[W,B]=h(()=>new Map),U=x((f)=>{G((R)=>{let H=new Set(R);if(H.has(f))H.delete(f);else H.add(f);return H})},[]),D=x((f)=>{G((R)=>{if(!R.has(f))return R;let H=new Set(R);return H.delete(f),H})},[]),k=x((f)=>{B((R)=>{if(!R.has(f))return R;let H=new Map(R);return H.delete(f),H})},[]),T=x((f,R={})=>{if(!f)return;let H=typeof R?.paneOverrideId==="string"&&R.paneOverrideId.trim()?R.paneOverrideId.trim():null,w={path:f,mode:"edit"};try{if(!(H?R0.get(H):R0.resolve(w))){if(!R0.get("editor")){console.warn(`[openEditor] No pane handler for: ${f}`);return}}}catch(e){console.warn(`[openEditor] paneRegistry.resolve() error for "${f}":`,e)}let c=typeof R?.label==="string"&&R.label.trim()?R.label.trim():void 0;if(n0.open(f,c),H)B((e)=>{if(e.get(f)===H)return e;let i=new Map(e);return i.set(f,H),i})},[]),E=x(()=>{let f=n0.getActiveId();if(f){let R=n0.get(f);if(R?.dirty){if(!window.confirm(`"${R.label}" has unsaved changes. Close anyway?`))return}n0.close(f),D(f),k(f),$.current?.(f)}},[k,D]),J=x((f)=>{let R=n0.get(f);if(R?.dirty){if(!window.confirm(`"${R.label}" has unsaved changes. Close anyway?`))return}n0.close(f),D(f),k(f),$.current?.(f)},[k,D]),A=x((f)=>{n0.activate(f)},[]),P=x((f)=>{let R=n0.getTabs().filter((c)=>c.id!==f&&!c.pinned),H=R.filter((c)=>c.dirty).length;if(H>0){if(!window.confirm(`${H} unsaved tab${H>1?"s":""} will be closed. Continue?`))return}let w=R.map((c)=>c.id);n0.closeOthers(f),w.forEach((c)=>{D(c),k(c),$.current?.(c)})},[k,D]),d=x(()=>{let f=n0.getTabs().filter((w)=>!w.pinned),R=f.filter((w)=>w.dirty).length;if(R>0){if(!window.confirm(`${R} unsaved tab${R>1?"s":""} will be closed. Continue?`))return}let H=f.map((w)=>w.id);n0.closeAll(),H.forEach((w)=>{D(w),k(w),$.current?.(w)})},[k,D]),l=x((f)=>{n0.togglePin(f)},[]),t=x((f)=>{if(!f)return;B((R)=>{if(R.get(f)==="editor")return R;let H=new Map(R);return H.set(f,"editor"),H}),n0.activate(f)},[]),Y0=x(()=>{let f=n0.getActiveId();if(f)window.dispatchEvent(new CustomEvent("workspace-reveal-path",{detail:{path:f}}))},[]);return p(()=>{let f=(R)=>{let{oldPath:H,newPath:w,type:c}=R.detail||{};if(!H||!w)return;if(c==="dir"){for(let e of n0.getTabs())if(e.path===H||e.path.startsWith(`${H}/`)){let i=`${w}${e.path.slice(H.length)}`;n0.rename(e.id,i)}}else n0.rename(H,w);B((e)=>CQ(e,H,w,c))};return window.addEventListener("workspace-file-renamed",f),()=>window.removeEventListener("workspace-file-renamed",f)},[]),p(()=>{let f=(R)=>{if(n0.hasUnsaved())R.preventDefault(),R.returnValue=""};return window.addEventListener("beforeunload",f),()=>window.removeEventListener("beforeunload",f)},[]),{editorOpen:K,tabStripTabs:j,tabStripActiveId:N,previewTabs:X,tabPaneOverrides:W,openEditor:T,closeEditor:E,handleTabClose:J,handleTabActivate:A,handleTabCloseOthers:P,handleTabCloseAll:d,handleTabTogglePin:l,handleTabTogglePreview:U,handleTabEditSource:t,revealInExplorer:Y0}}function Z3(_,$){try{if(typeof window>"u")return $;let j=window.__PICLAW_SILENCE||{},Z=`__PICLAW_SILENCE_${_.toUpperCase()}_MS`,N=j[_]??window[Z],Y=Number(N);return Number.isFinite(Y)?Y:$}catch{return $}}var N3=Z3("warning",30000),jj=Z3("finalize",120000),Y3=Z3("refresh",30000),Zj=30000;function Nj(_){let $={};return(_?.agents||[]).forEach((j)=>{$[j.id]=j}),$}function Yj(){if(/iPad|iPhone/.test(navigator.userAgent))return!0;return navigator.platform==="MacIntel"&&navigator.maxTouchPoints>1}function Kj(_=30000){let[,$]=h(0);p(()=>{let j=setInterval(()=>$((Z)=>Z+1),_);return()=>clearInterval(j)},[_])}function K3(_,$=160){let j=String(_||"").replace(/\r\n/g,`
`);if(!j)return 0;return j.split(`
`).reduce((Z,N)=>Z+Math.max(1,Math.ceil(N.length/$)),0)}function Qj(_,$){if(typeof _!=="string")return{kind:"ignore"};let j=_.trim();if(!j)return{kind:"toast",title:"No file selected",detail:"Use a valid file path from a file pill.",level:"warning"};if(!$.editorOpen)return{kind:"toast",title:"Editor pane is not open",detail:"Open the editor pane to open files from pills.",level:"warning"};if(/^[a-z][a-z0-9+.-]*:/i.test(j))return{kind:"toast",title:"Cannot open external path from file pill",detail:"Use an in-workspace file path.",level:"warning"};try{if(!$.resolvePane({path:j,mode:"edit"}))return{kind:"toast",title:"No editor available",detail:`No editor can open: ${j}`,level:"warning"}}catch{return{kind:"toast",title:"No editor available",detail:`No editor can open: ${j}`,level:"warning"}}return{kind:"open",path:j}}function Q3(_){return String(_||"").trim()||"web:default"}function qj({remainingQueueCount:_=0,currentTurnId:$=null,isAgentTurnActive:j=!1}={}){return Number(_||0)<=0&&!$&&!j}function Gj(_={}){return U4(_)&&f5(_)}function TQ(_={}){let $=_.window??(typeof window<"u"?window:null),j=Number($?.visualViewport?.height||0);if(Number.isFinite(j)&&j>0)return Math.round(j);let Z=Number($?.innerHeight||0);if(Number.isFinite(Z)&&Z>0)return Math.round(Z);return null}function yQ(_={},$={}){if(!Gj(_))return null;let j=_.window??(typeof window<"u"?window:null),Z=_.document??(typeof document<"u"?document:null);if(!j||!Z?.documentElement)return null;let N=TQ({window:j});if(N&&N>0)Z.documentElement.style.setProperty("--app-height",`${N}px`);if($.resetScroll===!0){try{if(typeof j.scrollTo==="function")j.scrollTo(0,0)}catch{}try{if(Z.scrollingElement)Z.scrollingElement.scrollTop=0,Z.scrollingElement.scrollLeft=0;if(Z.documentElement)Z.documentElement.scrollTop=0,Z.documentElement.scrollLeft=0;if(Z.body)Z.body.scrollTop=0,Z.body.scrollLeft=0}catch{}}return N}function Xj(_={}){if(!Gj(_))return()=>{};let $=_.window??(typeof window<"u"?window:null),j=_.document??(typeof document<"u"?document:null);if(!$||!j)return()=>{};let Z=0,N=new Set,Y=()=>{if(Z)$.cancelAnimationFrame?.(Z),Z=0;for(let B of N)$.clearTimeout?.(B);N.clear()},K=()=>{Z=0,yQ({window:$,document:j})},Q=()=>{if(Z)$.cancelAnimationFrame?.(Z);Z=$.requestAnimationFrame?.(K)??0},X=()=>{Q();for(let B of[80,220,420]){let U=$.setTimeout?.(()=>{N.delete(U),Q()},B);if(U!=null)N.add(U)}},G=()=>{if(j.visibilityState&&j.visibilityState!=="visible")return;X()},W=$.visualViewport;return X(),$.addEventListener("focus",X),$.addEventListener("pageshow",X),$.addEventListener("resize",X),$.addEventListener("orientationchange",X),j.addEventListener("visibilitychange",G),j.addEventListener("focusin",X,!0),W?.addEventListener?.("resize",X),W?.addEventListener?.("scroll",X),()=>{Y(),$.removeEventListener("focus",X),$.removeEventListener("pageshow",X),$.removeEventListener("resize",X),$.removeEventListener("orientationchange",X),j.removeEventListener("visibilitychange",G),j.removeEventListener("focusin",X,!0),W?.removeEventListener?.("resize",X),W?.removeEventListener?.("scroll",X)}}function SQ(_,$){if(typeof window<"u")console.warn(`[app] API export missing: ${_}. Using fallback behavior.`);return async()=>$}function X_(_,$,j){let Z=_?.[$];return typeof Z==="function"?Z:SQ($,j)}var xQ=new Set(["extension_ui_request","extension_ui_timeout","extension_ui_notify","extension_ui_status","extension_ui_working","extension_ui_widget","extension_ui_title","extension_ui_editor_text","extension_ui_error"]);function Vj(_){return xQ.has(String(_||"").trim())}function wQ(_){let $=String(_||"").trim();if(!$.startsWith("extension_ui_"))return"piclaw-extension-ui";return`piclaw-extension-ui:${$.slice(13).replace(/_/g,"-")}`}function Bj(_,$,j=globalThis.window){if(!j||typeof j.dispatchEvent!=="function"||typeof CustomEvent>"u")return!1;let Z={type:_,payload:$};return j.dispatchEvent(new CustomEvent("piclaw-extension-ui",{detail:Z})),j.dispatchEvent(new CustomEvent(wQ(_),{detail:Z})),!0}var RQ=["(display-mode: standalone)","(display-mode: minimal-ui)","(display-mode: fullscreen)"];function Wj(_,$={}){let j=$.window??(typeof window<"u"?window:null),Z=$.navigator??(typeof navigator<"u"?navigator:null);if(!j||typeof _!=="function")return()=>{};let N=()=>{_(U4({window:j,navigator:Z}))};N();let K=RQ.map((Q)=>{try{return j.matchMedia?.(Q)??null}catch{return null}}).filter(Boolean).map((Q)=>{if(typeof Q.addEventListener==="function")return Q.addEventListener("change",N),()=>Q.removeEventListener("change",N);if(typeof Q.addListener==="function")return Q.addListener(N),()=>Q.removeListener(N);return()=>{}});return j.addEventListener?.("focus",N),j.addEventListener?.("pageshow",N),()=>{for(let Q of K)Q();j.removeEventListener?.("focus",N),j.removeEventListener?.("pageshow",N)}}function Lj(_,$={}){let j=$.window??(typeof window<"u"?window:null),Z=$.document??(typeof document<"u"?document:null);if(!j||!Z||typeof _!=="function")return()=>{};let N=()=>{if(Z.visibilityState&&Z.visibilityState!=="visible")return;_()};return j.addEventListener?.("focus",N),j.addEventListener?.("pageshow",N),Z.addEventListener?.("visibilitychange",N),()=>{j.removeEventListener?.("focus",N),j.removeEventListener?.("pageshow",N),Z.removeEventListener?.("visibilitychange",N)}}var X3="piclaw_btw_session",fQ=900,vQ="__piclawRenameBranchFormLock__",q3=()=>{if(typeof window>"u")return null;let _=window,$=vQ,j=_[$];if(j&&typeof j==="object")return j;let Z={inFlight:!1,cooldownUntil:0};return _[$]=Z,Z};function bQ(_){if(_==="root")return"Branch family";if(_==="all")return"All chats";return"Current branch"}function uQ(){let _=F_(X3);if(!_)return null;try{let $=JSON.parse(_);if(!$||typeof $!=="object")return null;let j=typeof $.question==="string"?$.question:"",Z=typeof $.answer==="string"?$.answer:"",N=typeof $.thinking==="string"?$.thinking:"",Y=typeof $.error==="string"&&$.error.trim()?$.error:null,K=$.status==="running"?"error":$.status==="success"||$.status==="error"?$.status:"success";return{question:j,answer:Z,thinking:N,error:K==="error"?Y||"BTW stream interrupted. You can retry.":Y,model:null,status:K}}catch{return null}}var Uj=J8,zj=E8,mQ=M8,Fj=T8,Hj=y8,G3=k8,i5=X_(j_,"getAgentContext",null),gQ=X_(j_,"getAutoresearchStatus",{active:!1,state:"idle"}),hQ=X_(j_,"stopAutoresearch",{status:"ok"}),Oj=X_(j_,"getAgentModels",{current:null,models:[]}),Jj=X_(j_,"getActiveChatAgents",{chats:[]}),n5=X_(j_,"getChatBranches",{chats:[]}),pQ=X_(j_,"renameChatBranch",null),cQ=X_(j_,"pruneChatBranch",null),Dj=X_(j_,"restoreChatBranch",null),Ej=X_(j_,"getAgentQueueState",{count:0}),lQ=X_(j_,"steerAgentQueueItem",{removed:!1,queued:"steer"}),iQ=X_(j_,"removeAgentQueueItem",{removed:!1}),nQ=X_(j_,"streamSidePrompt",null);if(window.marked)marked.setOptions({breaks:!0,gfm:!0});R0.register(K6);R0.register(w6);R0.register(x6);R0.register(R6);R0.register(f6);R0.register(v6);R0.register(u6);R0.register(m6);R0.register(h6);R0.register(l6);R0.register(i6);R0.register(y6);Q6();R0.register(X6);R0.register(V6);function dQ({locationParams:_,navigate:$}){let j=E0(()=>{let q=_.get("chat_jid");return q&&q.trim()?q.trim():"web:default"},[_]),Z=E0(()=>{let q=(_.get("chat_only")||_.get("chat-only")||"").trim().toLowerCase();return q==="1"||q==="true"||q==="yes"},[_]),N=E0(()=>{let q=(_.get("pane_popout")||"").trim().toLowerCase();return q==="1"||q==="true"||q==="yes"},[_]),Y=E0(()=>{let q=_.get("pane_path");return q&&q.trim()?q.trim():""},[_]),K=E0(()=>{let q=_.get("pane_label");return q&&q.trim()?q.trim():""},[_]),Q=E0(()=>{let q=(_.get("branch_loader")||"").trim().toLowerCase();return q==="1"||q==="true"||q==="yes"},[_]),X=E0(()=>{let q=_.get("branch_source_chat_jid");return q&&q.trim()?q.trim():j},[j,_]),[G,W]=h("disconnected"),[B,U]=h(()=>U4()),[D,k]=h(null),[T,E]=h(null),[J,A]=h(!1),[P,d]=h("current"),[l,t]=h([]),[Y0,f]=h([]),[R,H]=h(null),{agentStatus:w,setAgentStatus:c,agentDraft:e,setAgentDraft:i,agentPlan:Z0,setAgentPlan:N0,agentThought:K0,setAgentThought:G0,pendingRequest:V0,setPendingRequest:F0,currentTurnId:U0,setCurrentTurnId:H0,steerQueuedTurnId:u0,setSteerQueuedTurnId:k0,lastAgentEventRef:A0,lastSilenceNoticeRef:m0,isAgentRunningRef:g0,draftBufferRef:C0,thoughtBufferRef:B0,pendingRequestRef:I0,stalledPostIdRef:D0,currentTurnIdRef:X0,steerQueuedTurnIdRef:P0,thoughtExpandedRef:d0,draftExpandedRef:b0}=e9(),[W1,A1]=h({}),[S0,h0]=h(null),[t0,N1]=h(null),[o0,S1]=h(!1),[$1,v1]=h(null),[Y1,p1]=h([]),[x0,Z_]=h([]),[Q1,L1]=h(null),[V_,e0]=h(null),[s1,f0]=h(!1),[p0,w0]=h([]),[F1,m]=h(!1),[Q0,O0]=h(()=>uQ()),[v0,s0]=h(null),b1=S(new Set),c1=E0(()=>Y1.find((q)=>q?.chat_jid===j)||null,[Y1,j]),r0=E0(()=>x0.find((q)=>q?.chat_jid===j)||c1||null,[c1,x0,j]),J1=r0?.root_chat_jid||c1?.root_chat_jid||j,B_=bQ(P),[K1,J_]=h(()=>({status:Q?"running":"idle",message:Q?"Preparing a new chat branch…":""})),W_=p0.length,r1=S(new Set),a1=S([]),x1=S(new Set),i_=S(0),y_=S({inFlight:!1,lastAttemptAt:0,turnId:null});r1.current=new Set(p0.map((q)=>q.row_id)),a1.current=p0;let{notificationsEnabled:N_,notificationPermission:Z4,toggleNotifications:M1,notify:n_}=a9(),[S_,w1]=h(()=>new Set),[U1,Y_]=h(()=>G$("workspaceOpen",!0)),K_=S(null),{editorOpen:_1,tabStripTabs:t1,tabStripActiveId:c0,previewTabs:l1,tabPaneOverrides:N4,openEditor:Q_,closeEditor:R4,handleTabClose:x_,handleTabActivate:f4,handleTabCloseOthers:D_,handleTabCloseAll:v4,handleTabTogglePin:Y4,handleTabTogglePreview:K4,handleTabEditSource:q_,revealInExplorer:d5}=$j({onTabClosed:(q)=>K_.current?.(q)}),j1=S(null),k1=S(null),w_=S(null),e1=S(null),R1=R0.getDockPanes().length>0,[I1,i1]=h(!1),V1=x(()=>i1((q)=>!q),[]),B1=x(()=>{Q_(g$,{label:"Terminal"})},[Q_]),E_=x(()=>{Q_(j4,{label:"VNC"})},[Q_]),Q4=E0(()=>t1.find((q)=>q.id===c0)||t1[0]||null,[c0,t1]),b4=E0(()=>c0?N4.get(c0)||null:null,[N4,c0]),H4=E0(()=>K||Q4?.label||Y||"Pane",[Q4?.label,K,Y]),d_=E0(()=>t1.length>1||Boolean(c0&&l1.has(c0)),[l1,c0,t1.length]),o_=E0(()=>Y===j4||Y.startsWith(`${j4}/`),[Y]),u4=E0(()=>Y===g$&&!d_||o_,[o_,d_,Y]),q4=N||!Z&&(_1||R1&&I1),[H1,O4]=h(!1),m4=S(!1),t4=x(()=>{if(!_1||Z)return;if(m4.current=I1,I1)i1(!1);O4(!0)},[_1,Z,I1]),R_=x(()=>{if(!H1)return;if(O4(!1),m4.current)i1(!0),m4.current=!1},[H1]),J4=x(()=>{if(H1)R_();else t4()},[H1,t4,R_]);p(()=>{if(H1&&!_1)R_()},[H1,_1,R_]),p(()=>{if(!N||!Y)return;if(n0.getActiveId()===Y)return;Q_(Y,K?{label:K}:void 0)},[Q_,K,N,Y]),p(()=>{let q=j1.current;if(!q)return;if(k1.current)k1.current.dispose(),k1.current=null;let V=c0;if(!V)return;let O={path:V,mode:"edit"},I=(b4?R0.get(b4):null)||R0.resolve(O)||R0.get("editor");if(!I){q.innerHTML='<div style="padding:2em;color:var(--text-secondary);text-align:center;">No editor available for this file.</div>';return}let M=I.mount(q,O);k1.current=M,M.onDirtyChange?.((a)=>{n0.setDirty(V,a)}),M.onSaveRequest?.(()=>{}),M.onClose?.(()=>{R4()});let g=n0.getViewState(V);if(g&&typeof M.restoreViewState==="function")requestAnimationFrame(()=>M.restoreViewState(g));if(typeof M.onViewStateChange==="function")M.onViewStateChange((a)=>{n0.saveViewState(V,a)});return requestAnimationFrame(()=>M.focus()),()=>{if(k1.current===M)M.dispose(),k1.current=null}},[c0,b4,R4]),p(()=>{let q=w_.current;if(e1.current)e1.current.dispose(),e1.current=null;if(!q||!R1||!I1)return;let V=R0.getDockPanes()[0];if(!V){q.innerHTML='<div class="terminal-placeholder">No dock pane available.</div>';return}let O=V.mount(q,{mode:"view"});return e1.current=O,requestAnimationFrame(()=>O.focus?.()),()=>{if(e1.current===O)O.dispose(),e1.current=null}},[R1,I1]);let[D4,g4]=h({name:"You",avatar_url:null,avatar_background:null}),G4=S(!1),L_=S(!1),__=S(null),P1=S(j),h4=S(new Map),O1=S(j),f_=S(0),E4=S(0),A4=S({}),X4=S({name:null,avatar_url:null}),C1=S({currentHashtag:null,searchQuery:null,searchOpen:!1}),s_=S(null),v_=S(null),p4=S(0),r_=S(0),M4=S(0),c4=S(null),A_=S(null),U_=S(null),M_=S(null),l4=S(0),k_=S({title:null,avatarBase:null}),k4=S(null),a_=S(!1),[b_,F]=h(!1),C=S(0),[v,b]=h(!1),[o,q0]=h(""),W0=E0(()=>i8(o,r0?.agent_name||""),[r0?.agent_name,o]),L0=S(null),$0=x(()=>{if(k4.current)clearTimeout(k4.current),k4.current=null;H(null)},[]);Kj(30000),p(()=>{if(!v)return;requestAnimationFrame(()=>{if(v)L0.current?.focus(),L0.current?.select?.()})},[v]),p(()=>{return J2()},[]),p(()=>{return Wj(U)},[]),p(()=>{Z1("workspaceOpen",String(U1))},[U1]),p(()=>{return Xj()},[]),p(()=>{return()=>{$0()}},[$0]),p(()=>{if(!Q0){Z1(X3,"");return}Z1(X3,JSON.stringify({question:Q0.question||"",answer:Q0.answer||"",thinking:Q0.thinking||"",error:Q0.error||null,status:Q0.status||"success"}))},[Q0]),p(()=>{A4.current=W1||{}},[W1]),p(()=>{P1.current=j},[j]),p(()=>{X4.current=D4||{name:"You",avatar_url:null,avatar_background:null}},[D4]);let L=x((q,V,O=null)=>{if(typeof document>"u")return;let I=(q||"").trim()||"PiClaw";if(k_.current.title!==I){document.title=I;let r=document.querySelector('meta[name="apple-mobile-web-app-title"]');if(r&&r.getAttribute("content")!==I)r.setAttribute("content",I);k_.current.title=I}let M=document.getElementById("dynamic-favicon");if(!M)return;let g=M.getAttribute("data-default")||M.getAttribute("href")||"/favicon.ico",a=V||g,_0=V?`${a}|${O||""}`:a;if(k_.current.avatarBase!==_0){let r=V?`${a}${a.includes("?")?"&":"?"}v=${O||Date.now()}`:a;M.setAttribute("href",r),k_.current.avatarBase=_0}},[]),y=x((q)=>{if(!q)return;t((V)=>V.includes(q)?V:[...V,q])},[]),u=x((q)=>{t((V)=>V.filter((O)=>O!==q))},[]);K_.current=u;let n=x(()=>{t([])},[]),z0=x((q)=>{if(!Array.isArray(q)){t([]);return}let V=[],O=new Set;for(let I of q){if(typeof I!=="string"||!I.trim())continue;let M=I.trim();if(O.has(M))continue;O.add(M),V.push(M)}t(V)},[]),j0=x((q,V=null,O="info",I=3000)=>{$0(),H({title:q,detail:V||null,kind:O||"info"}),k4.current=setTimeout(()=>{H((M)=>M?.title===q?null:M)},I)},[$0]),q1=x((q)=>{let V=Qj(q,{editorOpen:_1,resolvePane:(O)=>R0.resolve(O)});if(V.kind==="open"){Q_(V.path);return}if(V.kind==="toast")j0(V.title,V.detail,V.level)},[_1,Q_,j0]),D1=x(()=>{let q=c0;if(q)y(q)},[c0,y]),u_=x((q)=>{if(!q)return;f((V)=>V.includes(q)?V:[...V,q])},[]),l0=x(async(q,V=null)=>{let O=(M)=>{M.scrollIntoView({behavior:"smooth",block:"center"}),M.classList.add("post-highlight"),setTimeout(()=>M.classList.remove("post-highlight"),2000)},I=document.getElementById("post-"+q);if(I){O(I);return}try{let M=typeof V==="string"&&V.trim()?V.trim():j,a=(await D8(q,M))?.thread?.[0];if(!a)return;m1((_0)=>{if(!_0)return[a];if(_0.some((r)=>r.id===a.id))return _0;return[..._0,a]}),requestAnimationFrame(()=>{setTimeout(()=>{let _0=document.getElementById("post-"+q);if(_0)O(_0)},50)})}catch(M){console.error("[scrollToMessage] Failed to fetch message",q,M)}},[j]),V4=x((q)=>{f((V)=>V.filter((O)=>O!==q))},[]),e4=x(()=>{f([])},[]),_$=x((q)=>{if(!Array.isArray(q)){f([]);return}let V=[],O=new Set;for(let I of q){if(typeof I!=="string"||!I.trim())continue;let M=I.trim();if(O.has(M))continue;O.add(M),V.push(M)}f(V)},[]),I4=x((q)=>{let V=typeof q==="string"&&q.trim()?q.trim():"Could not send your message.";j0("Compose failed",V,"error",5000)},[j0]),m_=x((q={})=>{let V=Date.now();if(A0.current=V,q.running)g0.current=!0,m((O)=>O?O:!0);if(q.clearSilence)m0.current=0},[m]),n1=x(()=>{if(M_.current)clearTimeout(M_.current),M_.current=null;l4.current=0},[]);p(()=>()=>{n1()},[n1]);let T1=x(()=>{n1(),c((q)=>{if(!q)return q;if(!(q.last_activity||q.lastActivity))return q;let{last_activity:V,lastActivity:O,...I}=q;return I})},[n1]),$$=x((q)=>{if(!q)return;n1();let V=Date.now();l4.current=V,c({type:q.type||"active",last_activity:!0}),M_.current=setTimeout(()=>{if(l4.current!==V)return;c((O)=>{if(!O||!(O.last_activity||O.lastActivity))return O;return null})},Zj)},[n1]),g_=x(()=>{g0.current=!1,m(!1),A0.current=null,m0.current=0,C0.current="",B0.current="",I0.current=null,A_.current=null,X0.current=null,P0.current=null,__.current=null,y_.current={inFlight:!1,lastAttemptAt:0,turnId:null},n1(),H0(null),k0(null),d0.current=!1,b0.current=!1},[n1,H0,k0,m]),P4=x((q)=>{if(!qj({remainingQueueCount:q,currentTurnId:X0.current,isAgentTurnActive:F1}))return;P0.current=null,k0(null)},[F1,k0]),r$=x(()=>({agentStatus:null,agentDraft:{text:"",totalLines:0},agentPlan:"",agentThought:{text:"",totalLines:0},pendingRequest:null,currentTurnId:null,steerQueuedTurnId:null,isAgentTurnActive:!1,followupQueueItems:[],activeModel:null,activeThinkingLevel:null,supportsThinking:!1,activeModelUsage:null,contextUsage:null,isAgentRunning:!1,wasAgentActive:!1,draftBuffer:"",thoughtBuffer:"",lastAgentEvent:null,lastSilenceNotice:0,lastAgentResponse:null,currentTurnIdRef:null,steerQueuedTurnIdRef:null,thoughtExpanded:!1,draftExpanded:!1,agentStatusRef:null,silentRecovery:{inFlight:!1,lastAttemptAt:0,turnId:null}}),[]),t_=x(()=>({agentStatus:w,agentDraft:e?{...e}:{text:"",totalLines:0},agentPlan:Z0||"",agentThought:K0?{...K0}:{text:"",totalLines:0},pendingRequest:V0,currentTurnId:U0,steerQueuedTurnId:u0,isAgentTurnActive:Boolean(F1),followupQueueItems:Array.isArray(p0)?p0.map((q)=>({...q})):[],activeModel:S0,activeThinkingLevel:t0,supportsThinking:Boolean(o0),activeModelUsage:$1,contextUsage:Q1,isAgentRunning:Boolean(g0.current),wasAgentActive:Boolean(L_.current),draftBuffer:C0.current||"",thoughtBuffer:B0.current||"",lastAgentEvent:A0.current||null,lastSilenceNotice:m0.current||0,lastAgentResponse:A_.current||null,currentTurnIdRef:X0.current||null,steerQueuedTurnIdRef:P0.current||null,thoughtExpanded:Boolean(d0.current),draftExpanded:Boolean(b0.current),agentStatusRef:__.current||null,silentRecovery:{...y_.current||{inFlight:!1,lastAttemptAt:0,turnId:null}}}),[S0,$1,t0,e,Z0,w,K0,Q1,U0,p0,F1,V0,u0,o0]),z_=x((q)=>{let V=q||r$();n1(),g0.current=Boolean(V.isAgentRunning),L_.current=Boolean(V.wasAgentActive),m(Boolean(V.isAgentTurnActive)),A0.current=V.lastAgentEvent||null,m0.current=Number(V.lastSilenceNotice||0),C0.current=V.draftBuffer||"",B0.current=V.thoughtBuffer||"",I0.current=V.pendingRequest||null,A_.current=V.lastAgentResponse||null,X0.current=V.currentTurnIdRef||null,P0.current=V.steerQueuedTurnIdRef||null,__.current=V.agentStatusRef||null,y_.current=V.silentRecovery||{inFlight:!1,lastAttemptAt:0,turnId:null},d0.current=Boolean(V.thoughtExpanded),b0.current=Boolean(V.draftExpanded),c(V.agentStatus||null),i(V.agentDraft?{...V.agentDraft}:{text:"",totalLines:0}),N0(V.agentPlan||""),G0(V.agentThought?{...V.agentThought}:{text:"",totalLines:0}),F0(V.pendingRequest||null),H0(V.currentTurnId||null),k0(V.steerQueuedTurnId||null),w0(Array.isArray(V.followupQueueItems)?V.followupQueueItems.map((O)=>({...O})):[]),h0(V.activeModel||null),N1(V.activeThinkingLevel||null),S1(Boolean(V.supportsThinking)),v1(V.activeModelUsage??null),L1(V.contextUsage??null)},[n1,r$,H0,w0,m,k0]),u1=x((q)=>{if(!q)return;if(X0.current===q)return;X0.current=q,y_.current={inFlight:!1,lastAttemptAt:0,turnId:q},H0(q),P0.current=null,k0(null),C0.current="",B0.current="",i({text:"",totalLines:0}),N0(""),G0({text:"",totalLines:0}),F0(null),I0.current=null,A_.current=null,d0.current=!1,b0.current=!1},[H0,k0]),o5=x((q)=>{if(typeof document<"u"){let r=typeof document.hasFocus==="function"?document.hasFocus():!0;if(!document.hidden&&r)return}let V=A_.current;if(!V||!V.post)return;if(q&&V.turnId&&V.turnId!==q)return;let O=V.post;if(O.id&&c4.current===O.id)return;let I=String(O?.data?.content||"").trim();if(!I)return;c4.current=O.id||c4.current,A_.current=null;let M=I.replace(/\s+/g," ").slice(0,200),g=A4.current||{},_0=(O?.data?.agent_id?g[O.data.agent_id]:null)?.name||"Pi";n_(_0,M)},[n_]),s5=x(async(q,V)=>{if(q!=="thought"&&q!=="draft")return;let O=X0.current;if(q==="thought"){if(d0.current=V,O)try{await Hj(O,"thought",V)}catch(I){console.warn("Failed to update thought visibility:",I)}if(!V)return;try{let I=O?await Fj(O,"thought"):null;if(I?.text)B0.current=I.text;G0((M)=>({...M||{text:"",totalLines:0},fullText:B0.current||M?.fullText||"",totalLines:Number.isFinite(I?.total_lines)?I.total_lines:M?.totalLines||0}))}catch(I){console.warn("Failed to fetch full thought:",I)}return}if(b0.current=V,O)try{await Hj(O,"draft",V)}catch(I){console.warn("Failed to update draft visibility:",I)}if(!V)return;try{let I=O?await Fj(O,"draft"):null;if(I?.text)C0.current=I.text;i((M)=>({...M||{text:"",totalLines:0},fullText:C0.current||M?.fullText||"",totalLines:Number.isFinite(I?.total_lines)?I.total_lines:M?.totalLines||0}))}catch(I){console.warn("Failed to fetch full draft:",I)}},[]),r5=S(null),O$=x(()=>{let q=s_.current;if(!q)return;if(!(Math.abs(q.scrollTop)>150))q.scrollTop=0},[]);r5.current=O$;let Aj=x((q)=>{let V=s_.current;if(!V||typeof q!=="function"){q?.();return}let{currentHashtag:O,searchQuery:I,searchOpen:M}=C1.current||{},g=!((I||M)&&!O),a=g?V.scrollHeight-V.scrollTop:V.scrollTop;q(),requestAnimationFrame(()=>{let _0=s_.current;if(!_0)return;if(g){let r=Math.max(_0.scrollHeight-a,0);_0.scrollTop=r}else{let r=Math.max(_0.scrollHeight-_0.clientHeight,0),s=Math.min(a,r);_0.scrollTop=s}})},[]),J$=x((q)=>{let V=s_.current;if(!V||typeof q!=="function"){q?.();return}let O=V.scrollTop;q(),requestAnimationFrame(()=>{let I=s_.current;if(!I)return;let M=Math.max(I.scrollHeight-I.clientHeight,0);I.scrollTop=Math.min(O,M)})},[]),Mj="Queued as a follow-up (one-at-a-time).",kj="⁣",V3=x((q)=>{if(!q||!Array.isArray(q))return q;let V=r1.current,O=new Set(V),I=q.filter((M)=>{if(O.has(M?.id))return!1;if(M?.data?.is_bot_message){let g=M?.data?.content;if(g===Mj||g===kj)return!1}return!0});return I.length===q.length?q:I},[]),{posts:D$,setPosts:m1,hasMore:Ij,setHasMore:a$,hasMoreRef:B3,loadPosts:h_,refreshTimeline:d1,loadMore:Pj,loadMoreRef:a5}=t9({preserveTimelineScroll:Aj,preserveTimelineScrollTop:J$,chatJid:j}),j$=E0(()=>V3(D$),[D$,p0,V3]),t$=x(()=>{let q=D0.current;if(!q)return;m1((V)=>V?V.filter((O)=>O.id!==q):V),D0.current=null},[m1]),{handleSplitterMouseDown:Cj,handleSplitterTouchStart:Tj,handleEditorSplitterMouseDown:yj,handleEditorSplitterTouchStart:Sj,handleDockSplitterMouseDown:xj,handleDockSplitterTouchStart:wj}=_j({appShellRef:v_,sidebarWidthRef:p4,editorWidthRef:r_,dockHeightRef:M4}),W3=x(()=>{if(!g0.current)return;g0.current=!1,m0.current=0,A0.current=null,X0.current=null,H0(null),d0.current=!1,b0.current=!1;let q=(C0.current||"").trim();if(C0.current="",B0.current="",i({text:"",totalLines:0}),N0(""),G0({text:"",totalLines:0}),F0(null),I0.current=null,A_.current=null,!q){c({type:"error",title:"Response stalled - No content received"});return}let O=`${q}${`

⚠️ Response may be incomplete - the model stopped responding`}`,I=Date.now(),M=new Date().toISOString(),g={id:I,timestamp:M,data:{type:"agent_response",content:O,agent_id:"default",is_local_stall:!0}};D0.current=I,m1((a)=>a?s$([...a,g]):[g]),r5.current?.(),c(null)},[H0]);p(()=>{C1.current={currentHashtag:D,searchQuery:T,searchOpen:J}},[D,T,J]);let a0=x(()=>{let q=++i_.current,V=j;Ej(V).then((O)=>{if(q!==i_.current)return;if(P1.current!==V)return;let I=x1.current,M=Array.isArray(O?.items)?O.items.map((g)=>({...g})).filter((g)=>!I.has(g.row_id)):[];if(M.length){w0((g)=>{if(g.length===M.length&&g.every((a,_0)=>a.row_id===M[_0].row_id))return g;return M});return}I.clear(),P4(0),w0((g)=>g.length===0?g:[])}).catch(()=>{if(q!==i_.current)return;if(P1.current!==V)return;w0((O)=>O.length===0?O:[])})},[P4,j,w0]),o1=x(async()=>{let q=j;try{let V=await i5(q);if(P1.current!==q)return;if(V)L1(V)}catch(V){if(P1.current!==q)return;console.warn("Failed to fetch agent context:",V)}},[j]),Z$=x(async()=>{let q=j;try{let V=await gQ(q);if(P1.current!==q)return;let O=!V?.active&&(!V?.state||V.state==="idle");if(e0(O?null:V),O||V?.state!=="running")f0(!1)}catch(V){if(P1.current!==q)return;console.warn("Failed to fetch autoresearch status:",V)}},[j]),I_=x(async()=>{let q=j;try{let V=await G3(q);if(P1.current!==q)return null;if(!V||V.status!=="active"||!V.data){if(L_.current){let{currentHashtag:M,searchQuery:g,searchOpen:a}=C1.current||{};if(!M&&!g&&!a)d1()}return L_.current=!1,g_(),__.current=null,c(null),i({text:"",totalLines:0}),N0(""),G0({text:"",totalLines:0}),F0(null),I0.current=null,V??null}L_.current=!0;let O=V.data;__.current=O;let I=O.turn_id||O.turnId;if(I)u1(I);if(m_({running:!0,clearSilence:!0}),T1(),c(O),V.thought&&V.thought.text)G0((M)=>{if(M&&M.text&&M.text.length>=V.thought.text.length)return M;return B0.current=V.thought.text,{text:V.thought.text,totalLines:V.thought.totalLines||0}});if(V.draft&&V.draft.text)i((M)=>{if(M&&M.text&&M.text.length>=V.draft.text.length)return M;return C0.current=V.draft.text,{text:V.draft.text,totalLines:V.draft.totalLines||0}});return V}catch(V){return console.warn("Failed to fetch agent status:",V),null}},[g_,T1,m_,d1,u1]),t5=x(async()=>{if(!g0.current)return null;if(I0.current)return null;let q=X0.current||null,V=y_.current,O=Date.now();if(V.inFlight)return null;if(V.turnId===q&&O-V.lastAttemptAt<Y3)return null;V.inFlight=!0,V.lastAttemptAt=O,V.turnId=q;try{let{currentHashtag:I,searchQuery:M,searchOpen:g}=C1.current||{};if(!I&&!M&&!g)await d1();return await a0(),await I_()}finally{V.inFlight=!1}},[I_,a0,d1]);p(()=>{let q=Math.min(1000,Math.max(100,Math.floor(N3/2))),V=setInterval(()=>{if(!g0.current)return;if(I0.current)return;let O=A0.current;if(!O)return;let I=Date.now(),M=I-O,g=f$(__.current);if(M>=jj){if(!g)c({type:"waiting",title:"Re-syncing after a quiet period…"});t5();return}if(M>=N3){if(I-m0.current>=Y3){if(!g){let a=Math.floor(M/1000);c({type:"waiting",title:`Waiting for model… No events for ${a}s`})}m0.current=I,t5()}}},q);return()=>clearInterval(V)},[t5]);let Rj=x((q)=>{if(W(q),q!=="connected"){c(null),i({text:"",totalLines:0}),N0(""),G0({text:"",totalLines:0}),F0(null),I0.current=null,g_();return}if(!G4.current){G4.current=!0;let{currentHashtag:M,searchQuery:g,searchOpen:a}=C1.current||{};if(!M&&!g&&!a)d1();I_(),a0(),o1();return}let{currentHashtag:V,searchQuery:O,searchOpen:I}=C1.current;if(!V&&!O&&!I)d1();I_(),a0(),o1()},[g_,d1,I_,a0,o1]),fj=x(async(q)=>{k(q),m1(null),await h_(q)},[h_]),vj=x(async()=>{k(null),E(null),m1(null),await h_()},[h_]),bj=x(async(q,V=P)=>{if(!q||!q.trim())return;let O=V==="root"||V==="all"?V:"current";d(O),E(q.trim()),k(null),m1(null);try{let I=await Uj(q.trim(),50,0,j,O,J1);m1(I.results),a$(!1)}catch(I){console.error("Failed to search:",I),m1([])}},[j,J1,P]),uj=x(()=>{A(!0),E(null),k(null),d("current"),m1([])},[]),mj=x(()=>{A(!1),E(null),h_()},[h_]),sQ=x(()=>{},[]),e5=!D&&!T&&!J,gj=x(async(q)=>{if(!q)return;let V=q.id,O=typeof q?.chat_jid==="string"&&q.chat_jid.trim()?q.chat_jid.trim():j,I=j$?.filter((g)=>g?.data?.thread_id===V&&g?.id!==V).length||0;if(I>0){if(!window.confirm(`Delete this message and its ${I} replies?`))return}let M=(g)=>{if(!g.length)return;w1((_0)=>{let r=new Set(_0);return g.forEach((s)=>r.add(s)),r}),setTimeout(()=>{if(J$(()=>{m1((_0)=>_0?_0.filter((r)=>!g.includes(r.id)):_0)}),w1((_0)=>{let r=new Set(_0);return g.forEach((s)=>r.delete(s)),r}),B3.current)a5.current?.({preserveScroll:!0,preserveMode:"top"})},180)};try{let g=await zj(V,I>0,O);if(g?.ids?.length)M(g.ids)}catch(g){let a=g?.message||"";if(I===0&&a.includes("Replies exist")){if(!window.confirm("Delete this message and its replies?"))return;let r=await zj(V,!0,O);if(r?.ids?.length)M(r.ids);return}console.error("Failed to delete post:",g),alert(`Failed to delete message: ${a}`)}},[j,j$,J$]),L3=x(async()=>{try{let q=await mQ();A1(Nj(q));let V=q?.user||{};g4((I)=>{let M=typeof V.name==="string"&&V.name.trim()?V.name.trim():"You",g=typeof V.avatar_url==="string"?V.avatar_url.trim():null,a=typeof V.avatar_background==="string"&&V.avatar_background.trim()?V.avatar_background.trim():null;if(I.name===M&&I.avatar_url===g&&I.avatar_background===a)return I;return{name:M,avatar_url:g,avatar_background:a}});let O=(q?.agents||[]).find((I)=>I.id==="default");L(O?.name,O?.avatar_url)}catch(q){console.warn("Failed to load agents:",q)}try{let q=j,V=await i5(q);if(P1.current!==q)return;if(V)L1(V)}catch{}},[L,j]);p(()=>{L3();let q=X$("sidebarWidth",null),V=Number.isFinite(q)?Math.min(Math.max(q,160),600):280;if(p4.current=V,v_.current)v_.current.style.setProperty("--sidebar-width",`${V}px`)},[L3]);let E$=F1||w!==null,U3=x((q)=>{if(!q||typeof q!=="object")return;let V=q.agent_id;if(!V)return;let{agent_name:O,agent_avatar:I}=q;if(!O&&I===void 0)return;let M=A4.current?.[V]||{id:V},g=M.name||null,a=M.avatar_url??M.avatarUrl??M.avatar??null,_0=!1,r=!1;if(O&&O!==M.name)g=O,r=!0;if(I!==void 0){let s=typeof I==="string"?I.trim():null,J0=typeof a==="string"?a.trim():null,T0=s||null;if(T0!==(J0||null))a=T0,_0=!0}if(!r&&!_0)return;if(A1((s)=>{let T0={...s[V]||{id:V}};if(r)T0.name=g;if(_0)T0.avatar_url=a;return{...s,[V]:T0}}),V==="default")L(g,a,_0?Date.now():null)},[L]),z3=x((q)=>{if(!q||typeof q!=="object")return;let V=q.user_name??q.userName,O=q.user_avatar??q.userAvatar,I=q.user_avatar_background??q.userAvatarBackground;if(V===void 0&&O===void 0&&I===void 0)return;g4((M)=>{let g=typeof V==="string"&&V.trim()?V.trim():M.name||"You",a=O===void 0?M.avatar_url:typeof O==="string"&&O.trim()?O.trim():null,_0=I===void 0?M.avatar_background:typeof I==="string"&&I.trim()?I.trim():null;if(M.name===g&&M.avatar_url===a&&M.avatar_background===_0)return M;return{name:g,avatar_url:a,avatar_background:_0}})},[]),_8=x((q)=>{if(!q||typeof q!=="object")return;let V=q.model??q.current;if(V!==void 0)h0(V);if(q.thinking_level!==void 0)N1(q.thinking_level??null);if(q.supports_thinking!==void 0)S1(Boolean(q.supports_thinking));if(q.provider_usage!==void 0)v1(q.provider_usage??null)},[]),A$=x(()=>{let q=j;Oj(q).then((V)=>{if(P1.current!==q)return;if(V)_8(V)}).catch(()=>{})},[_8,j]),g1=x(()=>{let q=j,V=(O)=>Array.isArray(O)?O.filter((I)=>I&&typeof I.chat_jid==="string"&&typeof I.agent_name==="string"&&I.agent_name.trim()):[];Promise.all([Jj().catch(()=>({chats:[]})),n5(null,{includeArchived:!0}).catch(()=>({chats:[]}))]).then(([O,I])=>{if(P1.current!==q)return;let M=V(O?.chats),g=V(I?.chats);if(g.length===0){p1(M);return}let a=new Map(M.map((r)=>[r.chat_jid,r])),_0=g.map((r)=>{let s=a.get(r.chat_jid);return s?{...r,...s,is_active:s.is_active??r.is_active}:r});_0.sort((r,s)=>{if(r.chat_jid===q&&s.chat_jid!==q)return-1;if(s.chat_jid===q&&r.chat_jid!==q)return 1;let J0=Boolean(r.archived_at),T0=Boolean(s.archived_at);if(J0!==T0)return J0?1:-1;if(Boolean(r.is_active)!==Boolean(s.is_active))return r.is_active?-1:1;return String(r.chat_jid).localeCompare(String(s.chat_jid))}),p1(_0)}).catch(()=>{if(P1.current!==q)return;p1([])})},[j]),f1=x(()=>{n5(J1).then((q)=>{let V=Array.isArray(q?.chats)?q.chats.filter((O)=>O&&typeof O.chat_jid==="string"&&typeof O.agent_name==="string"):[];Z_(V)}).catch(()=>{})},[J1]),hj=x((q)=>{let V=q?.row_id;if(V==null)return;x1.current.add(V),w0((O)=>O.filter((I)=>I?.row_id!==V)),lQ(V,Q3(j)).then(()=>{a0()}).catch((O)=>{console.warn("[queue] Failed to steer queued item:",O),j0("Failed to steer message","The queued message could not be sent as steering.","warning"),x1.current.delete(V),a0()})},[j,a0,w0,j0]),pj=x((q)=>{let V=q?.row_id;if(V==null)return;let O=a1.current.filter((I)=>I?.row_id!==V).length;x1.current.add(V),P4(O),w0((I)=>I.filter((M)=>M?.row_id!==V)),iQ(V,Q3(j)).then(()=>{a0()}).catch((I)=>{console.warn("[queue] Failed to remove queued item:",I),j0("Failed to remove message","The queued message could not be removed.","warning"),x1.current.delete(V),a0()})},[P4,j,a0,w0,j0]),M$=x((q)=>{if(!q||typeof q!=="object")return;if(g1(),f1(),o1(),Z$(),q?.queued==="followup"||q?.queued==="steer"){a0();return}let V=q?.command;if(V&&typeof V==="object"&&(V?.queued_followup||V?.queued_steer))a0()},[g1,Z$,f1,o1,a0]),rQ=x(async()=>{if(s1)return;f0(!0);try{await hQ(j,{generateReport:!0}),Z$()}catch(q){f0(!1),j0("Failed to stop autoresearch",q?.message||"Could not stop the experiment.","warning")}},[j,s1,Z$,j0]),$8=x(()=>{if(U_.current)U_.current.abort(),U_.current=null;O0(null)},[]),e$=x(async(q)=>{let V=String(q||"").trim();if(!V)return j0("BTW needs a question","Usage: /btw <question>","warning"),!0;if(U_.current)U_.current.abort();let O=new AbortController;U_.current=O,O0({question:V,answer:"",thinking:"",error:null,model:null,status:"running"});try{let I=await nQ(V,{signal:O.signal,chatJid:y2(j),systemPrompt:"Answer the user briefly and directly. This is a side conversation that should not affect the main chat until explicitly injected.",onEvent:(M,g)=>{if(M==="side_prompt_start")O0((a)=>a?{...a,status:"running"}:a)},onThinkingDelta:(M)=>{O0((g)=>g?{...g,thinking:`${g.thinking||""}${M||""}`}:g)},onTextDelta:(M)=>{O0((g)=>g?{...g,answer:`${g.answer||""}${M||""}`}:g)}});if(U_.current!==O)return!0;O0((M)=>M?{...M,answer:I?.result||M.answer||"",thinking:I?.thinking||M.thinking||"",model:I?.model||null,status:"success",error:null}:M)}catch(I){if(O.signal.aborted)return!0;O0((M)=>M?{...M,status:"error",error:I?.payload?.error||I?.message||"BTW request failed."}:M)}finally{if(U_.current===O)U_.current=null}return!0},[j,j0]),cj=x(async({content:q})=>{let V=T2(q);if(!V)return!1;if(V.type==="help")return j0("BTW usage","Use /btw <question> to open a side conversation.","info",4000),!0;if(V.type==="clear")return $8(),j0("BTW cleared","Closed the side conversation panel.","info"),!0;if(V.type==="ask")return await e$(V.question),!0;return!1},[$8,e$,j0]),lj=x(()=>{if(Q0?.question)e$(Q0.question)},[Q0,e$]),ij=x(async()=>{let q=w2(Q0);if(!q)return;try{let V=await n4("default",q,null,[],E$?"queue":null,j);M$(V),j0(V?.queued==="followup"?"BTW queued":"BTW injected",V?.queued==="followup"?"The BTW summary was queued as a follow-up because the agent is busy.":"The BTW summary was sent to the main chat.","info",3500)}catch(V){j0("BTW inject failed",V?.message||"Could not inject BTW answer into chat.","warning")}},[Q0,M$,E$,j0]),F3=x(async(q=null)=>{let[V,O,I,M,g,a,_0]=await Promise.allSettled([G3(j),i5(j),Ej(j),Oj(j),Jj(),n5(J1),i4(20,null,j)]),r=V.status==="fulfilled"?V.value:null,s=O.status==="fulfilled"?O.value:null,J0=I.status==="fulfilled"?I.value:null,T0=M.status==="fulfilled"?M.value:null,$_=g.status==="fulfilled"?g.value:null,E1=a.status==="fulfilled"?a.value:null,e_=_0.status==="fulfilled"?_0.value:null,P_=Array.isArray(e_?.posts)?e_.posts:Array.isArray(D$)?D$:[],D3=P_.length?P_[P_.length-1]:null,_Z=P_.filter((Y8)=>Y8?.data?.is_bot_message).length,$Z=P_.filter((Y8)=>!Y8?.data?.is_bot_message).length,E3=Number(J0?.count??a1.current.length??0)||0,A3=Array.isArray($_?.chats)?$_.chats.length:Y1.length,jZ=Array.isArray(E1?.chats)?E1.chats.length:x0.length,M3=Number(s?.percent??Q1?.percent??0)||0,ZZ=Number(s?.tokens??Q1?.tokens??0)||0,NZ=Number(s?.contextWindow??Q1?.contextWindow??0)||0,YZ=T0?.current??S0??null,KZ=T0?.thinking_level??t0??null,QZ=T0?.supports_thinking??o0,qZ=r?.status||(F1?"active":"idle"),GZ=r?.data?.type||r?.type||null;return{generatedAt:new Date().toISOString(),request:q,chat:{currentChatJid:j,rootChatJid:J1,activeChats:A3,branches:jZ},agent:{status:qZ,phase:GZ,running:Boolean(F1)},model:{current:YZ,thinkingLevel:KZ,supportsThinking:Boolean(QZ)},context:{tokens:ZZ,contextWindow:NZ,percent:M3},queue:{count:E3},timeline:{loadedPosts:P_.length,botPosts:_Z,userPosts:$Z,latestPostId:D3?.id??null,latestTimestamp:D3?.timestamp??null},bars:[{key:"context",label:"Context",value:Math.max(0,Math.min(100,Math.round(M3)))},{key:"queue",label:"Queue",value:Math.max(0,Math.min(100,E3*18))},{key:"activeChats",label:"Active chats",value:Math.max(0,Math.min(100,A3*12))},{key:"posts",label:"Timeline load",value:Math.max(0,Math.min(100,P_.length*5))}]}},[Y1,S0,t0,Q1,x0,j,J1,F1,D$,o0]),k$=x(()=>{A$(),g1(),f1(),a0(),o1(),Z$()},[A$,g1,f1,a0,o1,Z$]);p(()=>{k$();let q=setInterval(()=>{A$(),g1(),f1(),a0()},60000);return()=>clearInterval(q)},[k$,A$,g1,f1,a0]),p(()=>{f1()},[f1]),p(()=>{let q=!1,V=()=>{if(q)return;requestAnimationFrame(()=>{if(q)return;O$()})};if(D)return h_(D),()=>{q=!0};if(T)return Uj(T,50,0,j,P,J1).then((O)=>{if(q)return;m1(O.results),a$(!1)}).catch((O)=>{if(q)return;console.error("Failed to search:",O),m1([]),a$(!1)}),()=>{q=!0};return h_().then(()=>{V()}).catch((O)=>{if(q)return;console.error("Failed to load timeline:",O)}),()=>{q=!0}},[j,D,T,P,J1,h_,O$,a$,m1]),p(()=>{let q=O1.current||j;h4.current.set(q,t_())},[j,t_]),p(()=>{let q=O1.current||j;if(q===j)return;h4.current.set(q,t_()),O1.current=j,x1.current.clear(),z_(h4.current.get(j)||null),a0(),I_(),o1()},[j,I_,o1,a0,z_,t_]);let nj=x(()=>{let{currentHashtag:q,searchQuery:V,searchOpen:O}=C1.current||{};if(!q&&!V&&!O)d1();k$()},[k$,d1]),I$=x((q,V="streaming")=>{let O=u2({...q,...q&&q.status?{}:{status:V}});if(!O)return;let I=h1(O);if(I&&b1.current.has(I))return;s0((M)=>{let g=h1(M),a=Boolean(I&&g&&I===g),_0={...a&&M?.artifact?M.artifact:{},...O.artifact||{}};return{...a&&M?M:{},...O,artifact:_0,source:"live",originChatJid:O.originChatJid||j,openedAt:a&&M?.openedAt?M.openedAt:new Date().toISOString(),liveUpdatedAt:new Date().toISOString()}})},[j]),j8=x((q,V)=>{let O=V?.turn_id,I=typeof V?.chat_jid==="string"&&V.chat_jid.trim()?V.chat_jid.trim():null,g=I?I===j:q==="connected"||q==="workspace_update";if(g)U3(V),z3(V);if(q==="ui_theme"){D2(V);return}if(q==="generated_widget_open"){if(!g)return;if(O&&!X0.current)u1(O);I$(V,"loading");return}if(q==="generated_widget_delta"){if(!g)return;if(O&&!X0.current)u1(O);I$(V,"streaming");return}if(q==="generated_widget_final"){if(!g)return;if(O&&!X0.current)u1(O);I$(V,"final");return}if(q==="generated_widget_error"){if(!g)return;I$(V,"error");return}if(q==="generated_widget_close"){if(!g)return;let s=h1(V);s0((J0)=>{if(!J0||J0?.source!=="live")return J0;let T0=h1(J0);if(s&&T0&&s!==T0)return J0;return null});return}if(q?.startsWith("agent_")){if(!(q==="agent_draft_delta"||q==="agent_thought_delta"||q==="agent_draft"||q==="agent_thought"))T1()}if(q==="connected"){c(null),i({text:"",totalLines:0}),N0(""),G0({text:"",totalLines:0}),F0(null),I0.current=null,g_();let s=j;G3(s).then((E1)=>{if(P1.current!==s)return;if(!E1||E1.status!=="active"||!E1.data)return;let e_=E1.data,P_=e_.turn_id||e_.turnId;if(P_)u1(P_);if(m_({clearSilence:!0}),$$(e_),E1.thought&&E1.thought.text)B0.current=E1.thought.text,G0({text:E1.thought.text,totalLines:E1.thought.totalLines||0});if(E1.draft&&E1.draft.text)C0.current=E1.draft.text,i({text:E1.draft.text,totalLines:E1.draft.totalLines||0})}).catch((E1)=>{console.warn("Failed to fetch agent status:",E1)});let{currentHashtag:J0,searchQuery:T0,searchOpen:$_}=C1.current||{};if(!J0&&!T0&&!$_)d1();k$();return}if(q==="agent_status"){if(!g){if(V?.type==="done"||V?.type==="error")g1(),f1();return}if(V.type==="done"||V.type==="error"){if(O&&X0.current&&O!==X0.current)return;if(V.type==="done"){o5(O||X0.current);let{currentHashtag:s,searchQuery:J0,searchOpen:T0}=C1.current||{};if(!s&&!J0&&!T0)d1();if(V.context_usage)L1(V.context_usage)}if(o1(),L_.current=!1,g_(),x1.current.clear(),g1(),a0(),i({text:"",totalLines:0}),N0(""),G0({text:"",totalLines:0}),F0(null),V.type==="error")c({type:"error",title:V.title||"Agent error"}),setTimeout(()=>c(null),8000);else c(null)}else{if(O)u1(O);if(m_({running:!0,clearSilence:!0}),V.type==="thinking")C0.current="",B0.current="",i({text:"",totalLines:0}),N0(""),G0({text:"",totalLines:0});__.current=V,c((s)=>{if(s&&s.type===V.type&&s.title===V.title)return s;return V})}return}if(q==="agent_steer_queued"){if(!g)return;if(O&&X0.current&&O!==X0.current)return;let s=O||X0.current;if(!s)return;P0.current=s,k0(s);return}if(q==="agent_followup_queued"){if(!g)return;let s=V?.row_id,J0=V?.content;if(s!=null&&typeof J0==="string"&&J0.trim())w0((T0)=>{if(T0.some(($_)=>$_?.row_id===s))return T0;return[...T0,{row_id:s,content:J0,timestamp:V?.timestamp||null,thread_id:V?.thread_id??null}]});a0();return}if(q==="agent_followup_consumed"){if(!g)return;let s=V?.row_id;if(s!=null){let E1=a1.current.filter((e_)=>e_.row_id!==s).length;P4(E1),w0((e_)=>e_.filter((P_)=>P_.row_id!==s))}a0();let{currentHashtag:J0,searchQuery:T0,searchOpen:$_}=C1.current||{};if(!J0&&!T0&&!$_)d1();return}if(q==="agent_followup_removed"){if(!g)return;let s=V?.row_id;if(s!=null){let J0=a1.current.filter((T0)=>T0.row_id!==s).length;x1.current.add(s),P4(J0),w0((T0)=>T0.filter(($_)=>$_.row_id!==s))}a0();return}if(q==="agent_draft_delta"){if(!g)return;if(O&&X0.current&&O!==X0.current)return;if(O&&!X0.current)u1(O);if(m_({running:!0,clearSilence:!0}),V?.reset)C0.current="";if(V?.delta)C0.current+=V.delta;let s=Date.now();if(!f_.current||s-f_.current>=100){f_.current=s;let J0=C0.current,T0=K3(J0);if(b0.current)i(($_)=>({text:$_?.text||"",totalLines:T0,fullText:J0}));else i({text:J0,totalLines:T0})}return}if(q==="agent_draft"){if(!g)return;if(O&&X0.current&&O!==X0.current)return;if(O&&!X0.current)u1(O);m_({running:!0,clearSilence:!0});let s=V.text||"",J0=V.mode||(V.kind==="plan"?"replace":"append"),T0=Number.isFinite(V.total_lines)?V.total_lines:s?s.replace(/\r\n/g,`
`).split(`
`).length:0;if(V.kind==="plan")if(J0==="replace")N0(s);else N0(($_)=>($_||"")+s);else if(!b0.current)C0.current=s,i({text:s,totalLines:T0});return}if(q==="agent_thought_delta"){if(!g)return;if(O&&X0.current&&O!==X0.current)return;if(O&&!X0.current)u1(O);if(m_({running:!0,clearSilence:!0}),V?.reset)B0.current="";if(typeof V?.delta==="string")B0.current+=V.delta;let s=Date.now();if(d0.current&&(!E4.current||s-E4.current>=100)){E4.current=s;let J0=B0.current;G0((T0)=>({text:T0?.text||"",totalLines:K3(J0),fullText:J0}))}return}if(q==="agent_thought"){if(!g)return;if(O&&X0.current&&O!==X0.current)return;if(O&&!X0.current)u1(O);m_({running:!0,clearSilence:!0});let s=V.text||"",J0=Number.isFinite(V.total_lines)?V.total_lines:s?s.replace(/\r\n/g,`
`).split(`
`).length:0;if(!d0.current)B0.current=s,G0({text:s,totalLines:J0});return}if(q==="model_changed"){if(!g)return;if(V?.model!==void 0)h0(V.model);if(V?.thinking_level!==void 0)N1(V.thinking_level??null);if(V?.supports_thinking!==void 0)S1(Boolean(V.supports_thinking));let s=j;i5(s).then((J0)=>{if(P1.current!==s)return;if(J0)L1(J0)}).catch(()=>{});return}if(q==="workspace_update"){if(typeof window<"u")window.dispatchEvent(new CustomEvent("workspace-update",{detail:V}));return}if(Vj(q)){if(!g)return;if(Bj(q,V),q==="extension_ui_notify"&&typeof V?.message==="string")j0(V.message,null,V?.type||"info");if(q==="extension_ui_error"&&typeof V?.error==="string")j0("Extension UI error",V.error,"error",5000);return}let{currentHashtag:a,searchQuery:_0,searchOpen:r}=C1.current;if(q==="agent_response"){if(!g)return;t$(),A_.current={post:V,turnId:X0.current}}if(!a&&!_0&&!r&&g&&(q==="new_post"||q==="new_reply"||q==="agent_response"))m1((s)=>{if(!s)return[V];if(s.some((J0)=>J0.id===V.id))return s;return[...s,V]}),r5.current?.();if(q==="interaction_updated"){if(!g)return;if(a||_0||r)return;m1((s)=>{if(!s)return s;if(!s.some((J0)=>J0.id===V.id))return s;return s.map((J0)=>J0.id===V.id?V:J0)})}if(q==="interaction_deleted"){if(!g)return;if(a||_0||r)return;let s=V?.ids||[];if(s.length){if(J$(()=>{m1((J0)=>J0?J0.filter((T0)=>!s.includes(T0.id)):J0)}),B3.current)a5.current?.({preserveScroll:!0,preserveMode:"top"})}}},[I$,g_,T1,j,a5,m_,o5,J$,g1,f1,d1,t$,u1,$$,U3,z3,A$,a0,w0,o1]);p(()=>{if(typeof window>"u")return;let q=window.__PICLAW_TEST_API||{};return q.emit=j8,q.reset=()=>{t$(),g_(),c(null),i({text:"",totalLines:0}),N0(""),G0({text:"",totalLines:0}),F0(null)},q.finalize=()=>W3(),window.__PICLAW_TEST_API=q,()=>{if(window.__PICLAW_TEST_API===q)window.__PICLAW_TEST_API=void 0}},[g_,W3,j8,t$]),r9({handleSseEvent:j8,handleConnectionStatusChange:Rj,loadPosts:h_,onWake:nj,chatJid:j}),p(()=>{if(!j$||j$.length===0)return;let q=location.hash;if(!q||!q.startsWith("#msg-"))return;let V=q.slice(5);l0(V),history.replaceState(null,"",location.pathname+location.search)},[j$,l0]);let Z8=w!==null;p(()=>{if(G!=="connected")return;let V=setInterval(()=>{let{currentHashtag:O,searchQuery:I,searchOpen:M}=C1.current||{},g=!O&&!I&&!M;if(Z8){if(g)d1();a0(),I_(),o1()}else{if(g)d1();I_(),o1()}},Z8?15000:60000);return()=>clearInterval(V)},[G,Z8,I_,o1,a0,d1]),p(()=>{return Lj(()=>{I_(),o1(),a0()})},[I_,o1,a0]);let dj=x(()=>{Y_((q)=>!q)},[]),H3=x((q)=>{if(typeof window>"u")return;let V=String(q||"").trim();if(!V||V===j)return;let O=r4(window.location.href,V,{chatOnly:Z});$?.(O)},[Z,j,$]),N8=x(()=>{if(typeof window>"u"||!r0?.chat_jid)return;let q=Date.now(),V=q3();if(!V)return;if(a_.current||q<C.current||V.inFlight||q<V.cooldownUntil)return;q0(r0.agent_name||""),b(!0)},[r0]),P$=x(()=>{b(!1),q0("")},[]),O3=x(async(q)=>{if(typeof window>"u"||!r0?.chat_jid)return;if(typeof q!=="string"){N8();return}let V=Date.now(),O=q3();if(!O)return;if(a_.current||V<C.current||O.inFlight||V<O.cooldownUntil)return;a_.current=!0,O.inFlight=!0,F(!0);try{let I=r0.agent_name||"",M=i8(q,I);if(!M.canSubmit){j0("Could not rename branch",M.message||"Enter a valid branch handle.","warning",4000);return}let g=M.normalized||I,a=await pQ(r0.chat_jid,{agentName:g});await Promise.allSettled([g1(),f1()]);let _0=a?.branch?.agent_name||g||I;j0("Branch renamed",`@${_0}`,"info",3500),P$()}catch(I){let M=I instanceof Error?I.message:String(I||"Could not rename branch."),g=/already in use/i.test(M||"")?`${M} Switch to or restore that existing session from the session manager.`:M;j0("Could not rename branch",g||"Could not rename branch.","warning",5000)}finally{a_.current=!1,F(!1);let I=Date.now()+fQ;C.current=I;let M=q3();if(M)M.inFlight=!1,M.cooldownUntil=I}},[P$,r0,g1,f1,N8,F,j0]),J3=x(async(q=null)=>{if(typeof window>"u")return;let V=typeof q==="string"&&q.trim()?q.trim():"",O=typeof j==="string"&&j.trim()?j.trim():"",I=V||r0?.chat_jid||O;if(!I){j0("Could not prune branch","No active session is selected yet.","warning",4000);return}let M=(r0?.chat_jid===I?r0:null)||x0.find((r)=>r?.chat_jid===I)||Y1.find((r)=>r?.chat_jid===I)||null;if(M?.chat_jid===(M?.root_chat_jid||M?.chat_jid)){j0("Cannot prune branch","The root chat branch cannot be pruned.","warning",4000);return}let a=`@${M?.agent_name||I}${M?.chat_jid?` — ${M.chat_jid}`:""}`;if(!window.confirm(`Prune ${a}?

This archives the branch agent and removes it from the branch picker. Chat history is preserved.`))return;try{await cQ(I),await Promise.allSettled([g1(),f1()]);let r=M?.root_chat_jid||"web:default";j0("Branch pruned",`${a} has been archived.`,"info",3000);let s=r4(window.location.href,r,{chatOnly:Z});$?.(s)}catch(r){let s=r instanceof Error?r.message:String(r||"Could not prune branch.");j0("Could not prune branch",s||"Could not prune branch.","warning",5000)}},[Y1,Z,r0,x0,j,$,g1,f1,j0]),oj=x(async(q)=>{let V=typeof q==="string"?q.trim():"";if(!V||typeof Dj!=="function")return;try{let O=x0.find((r)=>r?.chat_jid===V)||null,I=await Dj(V);await Promise.allSettled([g1(),f1()]);let M=I?.branch,g=typeof M?.chat_jid==="string"&&M.chat_jid.trim()?M.chat_jid.trim():V,a=K2(O?.agent_name,M?.agent_name,g);j0("Branch restored",a,"info",4200);let _0=r4(window.location.href,g,{chatOnly:Z});$?.(_0)}catch(O){let I=O instanceof Error?O.message:String(O||"Could not restore branch.");j0("Could not restore branch",I||"Could not restore branch.","warning",5000)}},[Z,x0,$,g1,f1,j0]);p(()=>{if(!Q||typeof window>"u")return;let q=!1;return(async()=>{try{J_({status:"running",message:"Preparing a new chat branch…"});let V=await T$(X);if(q)return;let O=V?.branch,I=typeof O?.chat_jid==="string"&&O.chat_jid.trim()?O.chat_jid.trim():null;if(!I)throw Error("Branch fork did not return a chat id.");let M=r4(window.location.href,I,{chatOnly:!0});$?.(M,{replace:!0})}catch(V){if(q)return;J_({status:"error",message:v5(V)})}})(),()=>{q=!0}},[Q,X,$]);let sj=x((q)=>{if(!q||typeof q!=="object")return;let V=h1(q);if(V)b1.current.delete(V);s0({...q,openedAt:new Date().toISOString()})},[]),C$=x(()=>{s0((q)=>{let V=h1(q);if(q?.source==="live"&&V)b1.current.add(V);return null})},[]),rj=x((q,V)=>{let O=typeof q?.kind==="string"?q.kind:"",I=h1(V);if(!O||!I)return;if(O==="widget.close"){C$();return}if(O==="widget.submit"){let M=p2(q?.payload),g=c2(q?.payload),a=new Date().toISOString();if(s0((_0)=>{let r=h1(_0);if(!_0||r!==I)return _0;return{..._0,runtimeState:{..._0.runtimeState||{},lastEventKind:O,lastEventPayload:q?.payload||null,lastSubmitAt:a,lastHostUpdate:{type:"submit_pending",submittedAt:a,preview:M||null}}}}),!M){if(j0("Widget submission received","The widget submitted data without a message payload yet.","info",3500),g)C$();return}(async()=>{try{let _0=await n4("default",M,null,[],E$?"queue":null,j);if(M$(_0),s0((r)=>{let s=h1(r);if(!r||s!==I)return r;return{...r,runtimeState:{...r.runtimeState||{},lastHostUpdate:{type:_0?.queued==="followup"?"submit_queued":"submit_sent",submittedAt:a,preview:M,queued:_0?.queued||null}}}}),j0(_0?.queued==="followup"?"Widget submission queued":"Widget submission sent",_0?.queued==="followup"?"The widget message was queued because the agent is busy.":"The widget message was sent to the chat.","info",3500),g)C$()}catch(_0){s0((r)=>{let s=h1(r);if(!r||s!==I)return r;return{...r,runtimeState:{...r.runtimeState||{},lastHostUpdate:{type:"submit_failed",submittedAt:a,preview:M,error:_0?.message||"Could not send the widget message."}}}}),j0("Widget submission failed",_0?.message||"Could not send the widget message.","warning",5000)}})();return}if(O==="widget.ready"||O==="widget.request_refresh"){let M=new Date().toISOString(),g=Boolean(q?.payload?.buildDashboard||q?.payload?.dashboardKind==="internal-state"),a=Number(V?.runtimeState?.refreshCount||0)+1;if(s0((_0)=>{let r=h1(_0);if(!_0||r!==I)return _0;return{..._0,runtimeState:{..._0.runtimeState||{},lastEventKind:O,lastEventPayload:q?.payload||null,...O==="widget.ready"?{readyAt:M,lastHostUpdate:{type:"ready_ack",at:M}}:{},...O==="widget.request_refresh"?{lastRefreshRequestAt:M,refreshCount:a,lastHostUpdate:{type:g?"refresh_building":"refresh_ack",at:M,count:a,echo:q?.payload||null}}:{}}}}),O==="widget.request_refresh")if(g)(async()=>{try{let _0=await F3(q?.payload||null);s0((r)=>{let s=h1(r);if(!r||s!==I)return r;return{...r,runtimeState:{...r.runtimeState||{},dashboard:_0,lastHostUpdate:{type:"refresh_dashboard",at:new Date().toISOString(),count:a,echo:q?.payload||null}}}}),j0("Dashboard built","Live dashboard state pushed into the widget.","info",3000)}catch(_0){s0((r)=>{let s=h1(r);if(!r||s!==I)return r;return{...r,runtimeState:{...r.runtimeState||{},lastHostUpdate:{type:"refresh_failed",at:new Date().toISOString(),count:a,error:_0?.message||"Could not build dashboard."}}}}),j0("Dashboard build failed",_0?.message||"Could not build dashboard.","warning",5000)}})();else j0("Widget refresh requested","The widget received a host acknowledgement update.","info",3000)}},[F3,j,C$,M$,E$,j0]);p(()=>{b1.current.clear(),s0(null)},[j]);let aj=x(async()=>{if(typeof window>"u")return;try{let V=(await T$(j))?.branch,O=typeof V?.chat_jid==="string"&&V.chat_jid.trim()?V.chat_jid.trim():null;if(!O)throw Error("Branch fork did not return a chat id.");await Promise.allSettled([g1(),f1()]);let I=V?.agent_name?`@${V.agent_name}`:O;j0("New branch created",`Switched to ${I}.`,"info",2500);let M=r4(window.location.href,O,{chatOnly:Z});$?.(M)}catch(q){j0("Could not create branch",v5(q),"warning",5000)}},[Z,j,$,g1,f1,j0]),_5=x((q,V)=>{if(typeof window>"u"||B)return;let O=typeof q==="string"&&q.trim()?q.trim():"";if(!O)return;let I=()=>{let _0=n0.get(O);if(!_0||_0.dirty)return;x_(O)},M=M7(O);if(!M){j0("Could not open pane window","Opening pane windows is unavailable in standalone webapp mode.","warning",5000);return}let g=A7(window.location.href,O,{label:typeof V==="string"&&V.trim()?V.trim():void 0,chatJid:j});if(M.mode==="tab"){if(!window.open(g,M.target)){j0("Could not open pane window","The browser blocked opening a new tab or window.","warning",5000);return}I();return}let a=B6(M);if(!a){j0("Could not open pane window","The browser blocked opening a new tab or window.","warning",5000);return}W6(a,{title:typeof V==="string"&&V.trim()?`Opening ${V}…`:"Opening pane…",message:"Preparing a standalone pane window. This should only take a moment."}),L6(a,g),I()},[j,x_,B,j0]);p(()=>{let q=(O)=>{let I=O.detail?.path,M=typeof O.detail?.label==="string"&&O.detail.label.trim()?O.detail.label.trim():void 0;if(I)Q_(I,M?{label:M}:void 0)},V=(O)=>{let I=O.detail?.path,M=typeof O.detail?.label==="string"&&O.detail.label.trim()?O.detail.label.trim():void 0;if(I)_5(I,M)};return document.addEventListener("office-viewer:open-tab",q),document.addEventListener("drawio:open-tab",q),document.addEventListener("csv-viewer:open-tab",q),document.addEventListener("pdf-viewer:open-tab",q),document.addEventListener("image-viewer:open-tab",q),document.addEventListener("video-viewer:open-tab",q),document.addEventListener("vnc:open-tab",q),document.addEventListener("pane:popout",V),()=>{document.removeEventListener("office-viewer:open-tab",q),document.removeEventListener("drawio:open-tab",q),document.removeEventListener("csv-viewer:open-tab",q),document.removeEventListener("pdf-viewer:open-tab",q),document.removeEventListener("image-viewer:open-tab",q),document.removeEventListener("video-viewer:open-tab",q),document.removeEventListener("vnc:open-tab",q),document.removeEventListener("pane:popout",V)}},[_5,Q_]);let tj=x(async()=>{if(typeof window>"u"||B)return;let q=J7(j);if(!q){j0("Could not open branch window","Opening branch windows is unavailable in standalone webapp mode.","warning",5000);return}if(q.mode==="tab"){let O=E7(window.location.href,j,{chatOnly:!0});if(!window.open(O,q.target))j0("Could not open branch window","The browser blocked opening a new tab or window.","warning",5000);return}let V=B6(q);if(!V){j0("Could not open branch window","The browser blocked opening a new tab or window.","warning",5000);return}W6(V,{title:"Opening branch…",message:"Preparing a new chat branch. This should only take a moment."});try{let I=(await T$(j))?.branch,M=typeof I?.chat_jid==="string"&&I.chat_jid.trim()?I.chat_jid.trim():null;if(!M)throw Error("Branch fork did not return a chat id.");try{let a=await A8();p1(Array.isArray(a?.chats)?a.chats:[])}catch{}try{let a=await n5(J1);Z_(Array.isArray(a?.chats)?a.chats:[])}catch{}let g=r4(window.location.href,M,{chatOnly:!0});L6(V,g)}catch(O){D7(V),j0("Could not open branch window",v5(O),"error",5000)}},[j,J1,B,j0]);p(()=>{if(!_1)return;if(typeof window>"u")return;let q=v_.current;if(!q)return;if(!r_.current){let V=X$("editorWidth",null),O=p4.current||280;r_.current=Number.isFinite(V)?V:O}if(q.style.setProperty("--editor-width",`${r_.current}px`),!M4.current){let V=X$("dockHeight",null);M4.current=Number.isFinite(V)?V:200}q.style.setProperty("--dock-height",`${M4.current}px`)},[_1]),p(()=>{if(!R1||Z)return;let q=(V)=>{if(V.ctrlKey&&V.key==="`")V.preventDefault(),V1()};return document.addEventListener("keydown",q),()=>document.removeEventListener("keydown",q)},[V1,R1,Z]),p(()=>{if(Z)return;let q=(V)=>{if(V.ctrlKey&&V.shiftKey&&(V.key==="Z"||V.key==="z")){V.preventDefault(),J4();return}if(V.key==="Escape"&&H1)V.preventDefault(),R_()};return document.addEventListener("keydown",q),()=>document.removeEventListener("keydown",q)},[J4,R_,H1,Z]);let ej=Boolean(u0&&u0===(w?.turn_id||U0));if(Q)return z`
            <div class="app-shell chat-only">
                <div class="container" style=${{display:"flex",alignItems:"center",justifyContent:"center",minHeight:"100vh",padding:"24px"}}>
                    <div class="card" style=${{width:"min(560px, 100%)",padding:"24px"}}>
                        <h1 style=${{margin:"0 0 12px",fontSize:"1.1rem"}}>
                            ${K1.status==="error"?"Could not open branch window":"Opening branch…"}
                        </h1>
                        <p style=${{margin:0,lineHeight:1.6}}>${K1.message}</p>
                    </div>
                </div>
            </div>
        `;if(N)return z`
            <div class=${`app-shell pane-popout${_1?" editor-open":""}`} ref=${v_}>
                <div class="editor-pane-container pane-popout-container">
                    ${_1&&!u4&&z`
                        <div class="pane-popout-controls" role="toolbar" aria-label="Pane window controls">
                            ${d_?z`
                                    <details class="pane-popout-controls-menu">
                                        <summary class="pane-popout-controls-trigger" aria-label="Pane window controls">
                                            <span class="pane-popout-controls-title">${H4}</span>
                                            <svg viewBox="0 0 16 16" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                                <polyline points="4.5 6.5 8 10 11.5 6.5" />
                                            </svg>
                                        </summary>
                                        <div class="pane-popout-controls-panel">
                                            ${t1.length>1&&z`
                                                <div class="pane-popout-controls-section">
                                                    <div class="pane-popout-controls-section-title">Open panes</div>
                                                    <div class="pane-popout-controls-list">
                                                        ${t1.map((q)=>z`
                                                            <button
                                                                type="button"
                                                                class=${`pane-popout-controls-item${q.id===c0?" active":""}`}
                                                                onClick=${(V)=>{f4(q.id),V.currentTarget.closest("details")?.removeAttribute("open")}}
                                                            >
                                                                ${q.label}
                                                            </button>
                                                        `)}
                                                    </div>
                                                </div>
                                            `}
                                            ${c0&&l1.has(c0)&&z`
                                                <button type="button" class="pane-popout-controls-action" onClick=${(q)=>{K4(c0),q.currentTarget.closest("details")?.removeAttribute("open")}}>
                                                    Hide preview
                                                </button>
                                            `}
                                        </div>
                                    </details>
                                `:z`
                                    <div class="pane-popout-controls-label" aria-label=${H4}>${H4}</div>
                                `}
                        </div>
                    `}
                    ${_1?z`<div class="editor-pane-host" ref=${j1}></div>`:z`<div class="card" style=${{margin:"24px",padding:"24px",maxWidth:"640px"}}>
                            <h1 style=${{margin:"0 0 12px",fontSize:"1.1rem"}}>Opening pane…</h1>
                            <p style=${{margin:0,lineHeight:1.6}}>${Y||"No pane path provided."}</p>
                        </div>`}
                    ${_1&&c0&&l1.has(c0)&&z`
                        <${j3}
                            getContent=${()=>k1.current?.getContent?.()}
                            path=${c0}
                            onClose=${()=>K4(c0)}
                        />
                    `}
                </div>
            </div>
        `;return z`
        <div class=${`app-shell${U1?"":" workspace-collapsed"}${_1?" editor-open":""}${Z?" chat-only":""}${H1?" zen-mode":""}`} ref=${v_}>
            ${v&&z`
                <div class="rename-branch-overlay" onPointerDown=${(q)=>{if(q.target===q.currentTarget)P$()}}>
                    <form
                        class="rename-branch-panel"
                        onSubmit=${(q)=>{q.preventDefault(),O3(o)}}
                    >
                        <div class="rename-branch-title">Rename branch handle</div>
                        <input
                            ref=${L0}
                            value=${o}
                            onInput=${(q)=>{let V=q.currentTarget?.value??"";q0(String(V))}}
                            onKeyDown=${(q)=>{if(q.key==="Escape")q.preventDefault(),P$()}}
                            autocomplete="off"
                            placeholder="Handle (letters, numbers, - and _ only)"
                        />
                        <div class=${`rename-branch-help ${W0.kind||"info"}`}>
                            ${W0.message}
                        </div>
                        <div class="rename-branch-actions">
                            <button type="submit" class="compose-model-popup-btn primary" disabled=${b_||!W0.canSubmit}>
                                ${b_?"Renaming…":"Save"}
                            </button>
                            <button
                                type="button"
                                class="compose-model-popup-btn"
                                onClick=${P$}
                                disabled=${b_}
                            >
                                Cancel
                            </button>
                        </div>
                    </form>
                </div>
            `}
            ${!Z&&z`
                <${i9}
                    onFileSelect=${y}
                    visible=${U1}
                    active=${U1||_1}
                    onOpenEditor=${Q_}
                    onOpenTerminalTab=${B1}
                    onOpenVncTab=${E_}
                    onToggleTerminal=${R1?V1:void 0}
                    terminalVisible=${Boolean(R1&&I1)}
                />
                <button
                    class=${`workspace-toggle-tab${U1?" open":" closed"}`}
                    onClick=${dj}
                    title=${U1?"Hide workspace":"Show workspace"}
                    aria-label=${U1?"Hide workspace":"Show workspace"}
                >
                    <svg class="workspace-toggle-tab-icon" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                        <polyline points="6 3 11 8 6 13" />
                    </svg>
                </button>
                <div class="workspace-splitter" onMouseDown=${Cj} onTouchStart=${Tj}></div>
            `}
            ${q4&&z`
                <div class="editor-pane-container">
                    ${H1&&z`<div class="zen-hover-zone"></div>`}
                    ${_1&&z`
                        <${o9}
                            tabs=${t1}
                            activeId=${c0}
                            onActivate=${f4}
                            onClose=${x_}
                            onCloseOthers=${D_}
                            onCloseAll=${v4}
                            onTogglePin=${Y4}
                            onTogglePreview=${K4}
                            onEditSource=${q_}
                            previewTabs=${l1}
                            paneOverrides=${N4}
                            onToggleDock=${R1?V1:void 0}
                            dockVisible=${R1&&I1}
                            onToggleZen=${J4}
                            zenMode=${H1}
                            onPopOutTab=${B?void 0:_5}
                        />
                    `}
                    ${_1&&z`<div class="editor-pane-host" ref=${j1}></div>`}
                    ${_1&&c0&&l1.has(c0)&&z`
                        <${j3}
                            getContent=${()=>k1.current?.getContent?.()}
                            path=${c0}
                            onClose=${()=>K4(c0)}
                        />
                    `}
                    ${R1&&I1&&z`<div class="dock-splitter" onMouseDown=${xj} onTouchStart=${wj}></div>`}
                    ${R1&&z`<div class=${`dock-panel${I1?"":" hidden"}`}>
                        <div class="dock-panel-header">
                            <span class="dock-panel-title">Terminal</span>
                            <div class="dock-panel-actions">
                                ${!B&&z`
                                    <button class="dock-panel-action" onClick=${()=>_5(g$,"Terminal")} title="Open terminal in window" aria-label="Open terminal in window">
                                        <svg viewBox="0 0 16 16" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                                            <rect x="2.25" y="2.25" width="8.5" height="8.5" rx="1.5"/>
                                            <path d="M8.5 2.25h5.25v5.25"/>
                                            <path d="M13.75 2.25 7.75 8.25"/>
                                        </svg>
                                    </button>
                                `}
                                <button class="dock-panel-close" onClick=${V1} title="Hide terminal (Ctrl+\`)" aria-label="Hide terminal">
                                    <svg viewBox="0 0 16 16" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round">
                                        <line x1="4" y1="4" x2="12" y2="12"/>
                                        <line x1="12" y1="4" x2="4" y2="12"/>
                                    </svg>
                                </button>
                            </div>
                        </div>
                        <div class="dock-panel-body" ref=${w_}></div>
                    </div>`}
                </div>
                <div class="editor-splitter" onMouseDown=${yj} onTouchStart=${Sj}></div>
            `}
            <div class="container">
                ${T&&Yj()&&z`<div class="search-results-spacer"></div>`}
                ${Z&&z`
                    <div class="chat-window-header">
                        <div class="chat-window-header-main">
                            <span class="chat-window-header-title">
                                ${r0?.agent_name?`@${r0.agent_name}`:j}
                            </span>
                            <span class="chat-window-header-subtitle">${r0?.chat_jid||j}</span>
                        </div>
                        <div class="chat-window-header-actions">
                            ${x0.length>1&&z`
                                <label class="chat-window-branch-picker-wrap">
                                    <span class="chat-window-branch-picker-label">Branch</span>
                                    <select
                                        class="chat-window-branch-picker"
                                        value=${j}
                                        onChange=${(q)=>H3(q.currentTarget.value)}
                                    >
                                        ${x0.map((q)=>z`
                                            <option key=${q.chat_jid} value=${q.chat_jid}>
                                                ${J5(q,{currentChatJid:j})}
                                            </option>
                                        `)}
                                    </select>
                                </label>
                            `}
                            ${r0?.chat_jid&&z`
                                <button
                                    class="chat-window-header-button"
                                    type="button"
                                    onClick=${N8}
                                    title=${b_?"Renaming branch…":"Rename this branch"}
                                    aria-label="Rename this branch"
                                    disabled=${b_}
                                >
                                    ${b_?"Renaming…":"Rename"}
                                </button>
                            `}
                            ${r0?.chat_jid&&r0.chat_jid!==(r0.root_chat_jid||r0.chat_jid)&&z`
                                <button
                                    class="chat-window-header-button"
                                    type="button"
                                    onClick=${J3}
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
                ${(D||T)&&z`
                    <div class="hashtag-header">
                        <button class="back-btn" onClick=${vj}>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
                        </button>
                        <span>${D?`#${D}`:`Search: ${T} · ${B_}`}</span>
                    </div>
                `}
                <${U7}
                    posts=${j$}
                    hasMore=${e5?Ij:!1}
                    onLoadMore=${e5?Pj:void 0}
                    timelineRef=${s_}
                    onHashtagClick=${fj}
                    onMessageRef=${u_}
                    onScrollToMessage=${l0}
                    onFileRef=${q1}
                    onPostClick=${void 0}
                    onDeletePost=${gj}
                    onOpenWidget=${sj}
                    emptyMessage=${D?`No posts with #${D}`:T?`No results for "${T}"`:void 0}
                    agents=${W1}
                    user=${D4}
                    reverse=${e5}
                    removingPostIds=${S_}
                    searchQuery=${T}
                />
                <${e2}
                    status=${w}
                    draft=${e}
                    plan=${Z0}
                    thought=${K0}
                    pendingRequest=${V0}
                    intent=${R}
                    turnId=${U0}
                    steerQueued=${ej}
                    onPanelToggle=${s5}
                />
                <${R2}
                    session=${Q0}
                    onClose=${$8}
                    onRetry=${lj}
                    onInject=${ij}
                />
                <${n2}
                    widget=${v0}
                    onClose=${C$}
                    onWidgetEvent=${rj}
                />
                <${q2}
                    onPost=${()=>{let{searchQuery:q,searchOpen:V}=C1.current||{};if(!q&&!V)h_(),O$()}}
                    onFocus=${O$}
                    searchMode=${J}
                    searchScope=${P}
                    onSearch=${bj}
                    onSearchScopeChange=${d}
                    onEnterSearch=${uj}
                    onExitSearch=${mj}
                    fileRefs=${l}
                    onRemoveFileRef=${u}
                    onClearFileRefs=${n}
                    onSetFileRefs=${z0}
                    messageRefs=${Y0}
                    onRemoveMessageRef=${V4}
                    onClearMessageRefs=${e4}
                    onSetMessageRefs=${_$}
                    onSwitchChat=${H3}
                    onRenameSession=${O3}
                    isRenameSessionInProgress=${b_}
                    onCreateSession=${aj}
                    onDeleteSession=${J3}
                    onRestoreSession=${oj}
                    activeEditorPath=${Z?null:c0}
                    onAttachEditorFile=${Z?void 0:D1}
                    onOpenFilePill=${q1}
                    followupQueueCount=${W_}
                    followupQueueItems=${p0}
                    onInjectQueuedFollowup=${hj}
                    onRemoveQueuedFollowup=${pj}
                    onSubmitIntercept=${cj}
                    onMessageResponse=${M$}
                    onSubmitError=${I4}
                    onPopOutChat=${B?void 0:tj}
                    isAgentActive=${E$}
                    activeChatAgents=${Y1}
                    currentChatJid=${j}
                    connectionStatus=${G}
                    activeModel=${S0}
                    modelUsage=${$1}
                    thinkingLevel=${t0}
                    supportsThinking=${o0}
                    contextUsage=${Q1}
                    notificationsEnabled=${N_}
                    notificationPermission=${Z4}
                    onToggleNotifications=${M1}
                    onModelChange=${h0}
                    onModelStateChange=${_8}
                />
                <${_7}
                    request=${V0}
                    onRespond=${()=>{F0(null),I0.current=null}}
                />
            </div>
        </div>
    `}function oQ(){let[_,$]=h(()=>typeof window>"u"?"http://localhost/":window.location.href);p(()=>{if(typeof window>"u")return;let N=()=>$(window.location.href);return window.addEventListener("popstate",N),()=>window.removeEventListener("popstate",N)},[]);let j=x((N,Y={})=>{if(typeof window>"u")return;let{replace:K=!1}=Y||{},Q=new URL(String(N||""),window.location.href).toString();if(K)window.history.replaceState(null,"",Q);else window.history.pushState(null,"",Q);$(window.location.href)},[]),Z=E0(()=>new URL(_).searchParams,[_]);return z`<${dQ} locationParams=${Z} navigate=${j} />`}V5(z`<${oQ} />`,document.getElementById("app"));

//# debugId=925A45BC8273E15F64756E2164756E21
//# sourceMappingURL=app.bundle.js.map
