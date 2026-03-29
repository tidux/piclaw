var AY=Object.defineProperty;var DY=(_)=>_;function EY(_,$){this[_]=DY.bind(null,$)}var kY=(_,$)=>{for(var j in $)AY(_,j,{get:$[j],enumerable:!0,configurable:!0,set:EY.bind($,j)})};var H8,W1,q2,MY,M4,r3,N2,K2,G2,I6,A6,D6,X2,W8={},F8=[],IY=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,J8=Array.isArray;function K4(_,$){for(var j in $)_[j]=$[j];return _}function x6(_){_&&_.parentNode&&_.parentNode.removeChild(_)}function O8(_,$,j){var Q,Z,Y,q={};for(Y in $)Y=="key"?Q=$[Y]:Y=="ref"?Z=$[Y]:q[Y]=$[Y];if(arguments.length>2&&(q.children=arguments.length>3?H8.call(arguments,2):j),typeof _=="function"&&_.defaultProps!=null)for(Y in _.defaultProps)q[Y]===void 0&&(q[Y]=_.defaultProps[Y]);return B8(_,q,Q,Z,null)}function B8(_,$,j,Q,Z){var Y={type:_,props:$,key:j,ref:Q,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:Z==null?++q2:Z,__i:-1,__u:0};return Z==null&&W1.vnode!=null&&W1.vnode(Y),Y}function A8(_){return _.children}function G5(_,$){this.props=_,this.context=$}function X5(_,$){if($==null)return _.__?X5(_.__,_.__i+1):null;for(var j;$<_.__k.length;$++)if((j=_.__k[$])!=null&&j.__e!=null)return j.__e;return typeof _.type=="function"?X5(_):null}function xY(_){if(_.__P&&_.__d){var $=_.__v,j=$.__e,Q=[],Z=[],Y=K4({},$);Y.__v=$.__v+1,W1.vnode&&W1.vnode(Y),T6(_.__P,Y,$,_.__n,_.__P.namespaceURI,32&$.__u?[j]:null,Q,j==null?X5($):j,!!(32&$.__u),Z),Y.__v=$.__v,Y.__.__k[Y.__i]=Y,L2(Q,Y,Z),$.__e=$.__=null,Y.__e!=j&&V2(Y)}}function V2(_){if((_=_.__)!=null&&_.__c!=null)return _.__e=_.__c.base=null,_.__k.some(function($){if($!=null&&$.__e!=null)return _.__e=_.__c.base=$.__e}),V2(_)}function E6(_){(!_.__d&&(_.__d=!0)&&M4.push(_)&&!z8.__r++||r3!=W1.debounceRendering)&&((r3=W1.debounceRendering)||N2)(z8)}function z8(){try{for(var _,$=1;M4.length;)M4.length>$&&M4.sort(K2),_=M4.shift(),$=M4.length,xY(_)}finally{M4.length=z8.__r=0}}function U2(_,$,j,Q,Z,Y,q,N,K,G,X){var V,U,W,J,D,O,F,A=Q&&Q.__k||F8,k=$.length;for(K=TY(j,$,A,K,k),V=0;V<k;V++)(W=j.__k[V])!=null&&(U=W.__i!=-1&&A[W.__i]||W8,W.__i=V,O=T6(_,W,U,Z,Y,q,N,K,G,X),J=W.__e,W.ref&&U.ref!=W.ref&&(U.ref&&C6(U.ref,null,W),X.push(W.ref,W.__c||J,W)),D==null&&J!=null&&(D=J),(F=!!(4&W.__u))||U.__k===W.__k?K=B2(W,K,_,F):typeof W.type=="function"&&O!==void 0?K=O:J&&(K=J.nextSibling),W.__u&=-7);return j.__e=D,K}function TY(_,$,j,Q,Z){var Y,q,N,K,G,X=j.length,V=X,U=0;for(_.__k=Array(Z),Y=0;Y<Z;Y++)(q=$[Y])!=null&&typeof q!="boolean"&&typeof q!="function"?(typeof q=="string"||typeof q=="number"||typeof q=="bigint"||q.constructor==String?q=_.__k[Y]=B8(null,q,null,null,null):J8(q)?q=_.__k[Y]=B8(A8,{children:q},null,null,null):q.constructor===void 0&&q.__b>0?q=_.__k[Y]=B8(q.type,q.props,q.key,q.ref?q.ref:null,q.__v):_.__k[Y]=q,K=Y+U,q.__=_,q.__b=_.__b+1,N=null,(G=q.__i=CY(q,j,K,V))!=-1&&(V--,(N=j[G])&&(N.__u|=2)),N==null||N.__v==null?(G==-1&&(Z>X?U--:Z<X&&U++),typeof q.type!="function"&&(q.__u|=4)):G!=K&&(G==K-1?U--:G==K+1?U++:(G>K?U--:U++,q.__u|=4))):_.__k[Y]=null;if(V)for(Y=0;Y<X;Y++)(N=j[Y])!=null&&(2&N.__u)==0&&(N.__e==Q&&(Q=X5(N)),F2(N,N));return Q}function B2(_,$,j,Q){var Z,Y;if(typeof _.type=="function"){for(Z=_.__k,Y=0;Z&&Y<Z.length;Y++)Z[Y]&&(Z[Y].__=_,$=B2(Z[Y],$,j,Q));return $}_.__e!=$&&(Q&&($&&_.type&&!$.parentNode&&($=X5(_)),j.insertBefore(_.__e,$||null)),$=_.__e);do $=$&&$.nextSibling;while($!=null&&$.nodeType==8);return $}function CY(_,$,j,Q){var Z,Y,q,N=_.key,K=_.type,G=$[j],X=G!=null&&(2&G.__u)==0;if(G===null&&N==null||X&&N==G.key&&K==G.type)return j;if(Q>(X?1:0)){for(Z=j-1,Y=j+1;Z>=0||Y<$.length;)if((G=$[q=Z>=0?Z--:Y++])!=null&&(2&G.__u)==0&&N==G.key&&K==G.type)return q}return-1}function o3(_,$,j){$[0]=="-"?_.setProperty($,j==null?"":j):_[$]=j==null?"":typeof j!="number"||IY.test($)?j:j+"px"}function U8(_,$,j,Q,Z){var Y,q;_:if($=="style")if(typeof j=="string")_.style.cssText=j;else{if(typeof Q=="string"&&(_.style.cssText=Q=""),Q)for($ in Q)j&&$ in j||o3(_.style,$,"");if(j)for($ in j)Q&&j[$]==Q[$]||o3(_.style,$,j[$])}else if($[0]=="o"&&$[1]=="n")Y=$!=($=$.replace(G2,"$1")),q=$.toLowerCase(),$=q in _||$=="onFocusOut"||$=="onFocusIn"?q.slice(2):$.slice(2),_.l||(_.l={}),_.l[$+Y]=j,j?Q?j.u=Q.u:(j.u=I6,_.addEventListener($,Y?D6:A6,Y)):_.removeEventListener($,Y?D6:A6,Y);else{if(Z=="http://www.w3.org/2000/svg")$=$.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if($!="width"&&$!="height"&&$!="href"&&$!="list"&&$!="form"&&$!="tabIndex"&&$!="download"&&$!="rowSpan"&&$!="colSpan"&&$!="role"&&$!="popover"&&$ in _)try{_[$]=j==null?"":j;break _}catch(N){}typeof j=="function"||(j==null||j===!1&&$[4]!="-"?_.removeAttribute($):_.setAttribute($,$=="popover"&&j==1?"":j))}}function s3(_){return function($){if(this.l){var j=this.l[$.type+_];if($.t==null)$.t=I6++;else if($.t<j.u)return;return j(W1.event?W1.event($):$)}}}function T6(_,$,j,Q,Z,Y,q,N,K,G){var X,V,U,W,J,D,O,F,A,k,m,f,l,o,P,x=$.type;if($.constructor!==void 0)return null;128&j.__u&&(K=!!(32&j.__u),Y=[N=$.__e=j.__e]),(X=W1.__b)&&X($);_:if(typeof x=="function")try{if(F=$.props,A=x.prototype&&x.prototype.render,k=(X=x.contextType)&&Q[X.__c],m=X?k?k.props.value:X.__:Q,j.__c?O=(V=$.__c=j.__c).__=V.__E:(A?$.__c=V=new x(F,m):($.__c=V=new G5(F,m),V.constructor=x,V.render=yY),k&&k.sub(V),V.state||(V.state={}),V.__n=Q,U=V.__d=!0,V.__h=[],V._sb=[]),A&&V.__s==null&&(V.__s=V.state),A&&x.getDerivedStateFromProps!=null&&(V.__s==V.state&&(V.__s=K4({},V.__s)),K4(V.__s,x.getDerivedStateFromProps(F,V.__s))),W=V.props,J=V.state,V.__v=$,U)A&&x.getDerivedStateFromProps==null&&V.componentWillMount!=null&&V.componentWillMount(),A&&V.componentDidMount!=null&&V.__h.push(V.componentDidMount);else{if(A&&x.getDerivedStateFromProps==null&&F!==W&&V.componentWillReceiveProps!=null&&V.componentWillReceiveProps(F,m),$.__v==j.__v||!V.__e&&V.shouldComponentUpdate!=null&&V.shouldComponentUpdate(F,V.__s,m)===!1){$.__v!=j.__v&&(V.props=F,V.state=V.__s,V.__d=!1),$.__e=j.__e,$.__k=j.__k,$.__k.some(function(z){z&&(z.__=$)}),F8.push.apply(V.__h,V._sb),V._sb=[],V.__h.length&&q.push(V);break _}V.componentWillUpdate!=null&&V.componentWillUpdate(F,V.__s,m),A&&V.componentDidUpdate!=null&&V.__h.push(function(){V.componentDidUpdate(W,J,D)})}if(V.context=m,V.props=F,V.__P=_,V.__e=!1,f=W1.__r,l=0,A)V.state=V.__s,V.__d=!1,f&&f($),X=V.render(V.props,V.state,V.context),F8.push.apply(V.__h,V._sb),V._sb=[];else do V.__d=!1,f&&f($),X=V.render(V.props,V.state,V.context),V.state=V.__s;while(V.__d&&++l<25);V.state=V.__s,V.getChildContext!=null&&(Q=K4(K4({},Q),V.getChildContext())),A&&!U&&V.getSnapshotBeforeUpdate!=null&&(D=V.getSnapshotBeforeUpdate(W,J)),o=X!=null&&X.type===A8&&X.key==null?W2(X.props.children):X,N=U2(_,J8(o)?o:[o],$,j,Q,Z,Y,q,N,K,G),V.base=$.__e,$.__u&=-161,V.__h.length&&q.push(V),O&&(V.__E=V.__=null)}catch(z){if($.__v=null,K||Y!=null)if(z.then){for($.__u|=K?160:128;N&&N.nodeType==8&&N.nextSibling;)N=N.nextSibling;Y[Y.indexOf(N)]=null,$.__e=N}else{for(P=Y.length;P--;)x6(Y[P]);k6($)}else $.__e=j.__e,$.__k=j.__k,z.then||k6($);W1.__e(z,$,j)}else Y==null&&$.__v==j.__v?($.__k=j.__k,$.__e=j.__e):N=$.__e=PY(j.__e,$,j,Q,Z,Y,q,K,G);return(X=W1.diffed)&&X($),128&$.__u?void 0:N}function k6(_){_&&(_.__c&&(_.__c.__e=!0),_.__k&&_.__k.some(k6))}function L2(_,$,j){for(var Q=0;Q<j.length;Q++)C6(j[Q],j[++Q],j[++Q]);W1.__c&&W1.__c($,_),_.some(function(Z){try{_=Z.__h,Z.__h=[],_.some(function(Y){Y.call(Z)})}catch(Y){W1.__e(Y,Z.__v)}})}function W2(_){return typeof _!="object"||_==null||_.__b>0?_:J8(_)?_.map(W2):K4({},_)}function PY(_,$,j,Q,Z,Y,q,N,K){var G,X,V,U,W,J,D,O=j.props||W8,F=$.props,A=$.type;if(A=="svg"?Z="http://www.w3.org/2000/svg":A=="math"?Z="http://www.w3.org/1998/Math/MathML":Z||(Z="http://www.w3.org/1999/xhtml"),Y!=null){for(G=0;G<Y.length;G++)if((W=Y[G])&&"setAttribute"in W==!!A&&(A?W.localName==A:W.nodeType==3)){_=W,Y[G]=null;break}}if(_==null){if(A==null)return document.createTextNode(F);_=document.createElementNS(Z,A,F.is&&F),N&&(W1.__m&&W1.__m($,Y),N=!1),Y=null}if(A==null)O===F||N&&_.data==F||(_.data=F);else{if(Y=Y&&H8.call(_.childNodes),!N&&Y!=null)for(O={},G=0;G<_.attributes.length;G++)O[(W=_.attributes[G]).name]=W.value;for(G in O)W=O[G],G=="dangerouslySetInnerHTML"?V=W:G=="children"||(G in F)||G=="value"&&("defaultValue"in F)||G=="checked"&&("defaultChecked"in F)||U8(_,G,null,W,Z);for(G in F)W=F[G],G=="children"?U=W:G=="dangerouslySetInnerHTML"?X=W:G=="value"?J=W:G=="checked"?D=W:N&&typeof W!="function"||O[G]===W||U8(_,G,W,O[G],Z);if(X)N||V&&(X.__html==V.__html||X.__html==_.innerHTML)||(_.innerHTML=X.__html),$.__k=[];else if(V&&(_.innerHTML=""),U2($.type=="template"?_.content:_,J8(U)?U:[U],$,j,Q,A=="foreignObject"?"http://www.w3.org/1999/xhtml":Z,Y,q,Y?Y[0]:j.__k&&X5(j,0),N,K),Y!=null)for(G=Y.length;G--;)x6(Y[G]);N||(G="value",A=="progress"&&J==null?_.removeAttribute("value"):J!=null&&(J!==_[G]||A=="progress"&&!J||A=="option"&&J!=O[G])&&U8(_,G,J,O[G],Z),G="checked",D!=null&&D!=_[G]&&U8(_,G,D,O[G],Z))}return _}function C6(_,$,j){try{if(typeof _=="function"){var Q=typeof _.__u=="function";Q&&_.__u(),Q&&$==null||(_.__u=_($))}else _.current=$}catch(Z){W1.__e(Z,j)}}function F2(_,$,j){var Q,Z;if(W1.unmount&&W1.unmount(_),(Q=_.ref)&&(Q.current&&Q.current!=_.__e||C6(Q,null,$)),(Q=_.__c)!=null){if(Q.componentWillUnmount)try{Q.componentWillUnmount()}catch(Y){W1.__e(Y,$)}Q.base=Q.__P=null}if(Q=_.__k)for(Z=0;Z<Q.length;Z++)Q[Z]&&F2(Q[Z],$,j||typeof _.type!="function");j||x6(_.__e),_.__c=_.__=_.__e=void 0}function yY(_,$,j){return this.constructor(_,j)}function x4(_,$,j){var Q,Z,Y,q;$==document&&($=document.documentElement),W1.__&&W1.__(_,$),Z=(Q=typeof j=="function")?null:j&&j.__k||$.__k,Y=[],q=[],T6($,_=(!Q&&j||$).__k=O8(A8,null,[_]),Z||W8,W8,$.namespaceURI,!Q&&j?[j]:Z?null:$.firstChild?H8.call($.childNodes):null,Y,!Q&&j?j:Z?Z.__e:$.firstChild,Q,q),L2(Y,_,q)}function z2(_){function $(j){var Q,Z;return this.getChildContext||(Q=new Set,(Z={})[$.__c]=this,this.getChildContext=function(){return Z},this.componentWillUnmount=function(){Q=null},this.shouldComponentUpdate=function(Y){this.props.value!=Y.value&&Q.forEach(function(q){q.__e=!0,E6(q)})},this.sub=function(Y){Q.add(Y);var q=Y.componentWillUnmount;Y.componentWillUnmount=function(){Q&&Q.delete(Y),q&&q.call(Y)}}),j.children}return $.__c="__cC"+X2++,$.__=_,$.Provider=$.__l=($.Consumer=function(j,Q){return j.children(Q)}).contextType=$,$}H8=F8.slice,W1={__e:function(_,$,j,Q){for(var Z,Y,q;$=$.__;)if((Z=$.__c)&&!Z.__)try{if((Y=Z.constructor)&&Y.getDerivedStateFromError!=null&&(Z.setState(Y.getDerivedStateFromError(_)),q=Z.__d),Z.componentDidCatch!=null&&(Z.componentDidCatch(_,Q||{}),q=Z.__d),q)return Z.__E=Z}catch(N){_=N}throw _}},q2=0,MY=function(_){return _!=null&&_.constructor===void 0},G5.prototype.setState=function(_,$){var j;j=this.__s!=null&&this.__s!=this.state?this.__s:this.__s=K4({},this.state),typeof _=="function"&&(_=_(K4({},j),this.props)),_&&K4(j,_),_!=null&&this.__v&&($&&this._sb.push($),E6(this))},G5.prototype.forceUpdate=function(_){this.__v&&(this.__e=!0,_&&this.__h.push(_),E6(this))},G5.prototype.render=A8,M4=[],N2=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,K2=function(_,$){return _.__v.__b-$.__v.__b},z8.__r=0,G2=/(PointerCapture)$|Capture$/i,I6=0,A6=s3(!1),D6=s3(!0),X2=0;var I4,L1,O6,a3,V5=0,H2=[],A1=W1,t3=A1.__b,e3=A1.__r,_2=A1.diffed,$2=A1.__c,j2=A1.unmount,Q2=A1.__;function U5(_,$){A1.__h&&A1.__h(L1,_,V5||$),V5=0;var j=L1.__H||(L1.__H={__:[],__h:[]});return _>=j.__.length&&j.__.push({}),j.__[_]}function g(_){return V5=1,P6(E2,_)}function P6(_,$,j){var Q=U5(I4++,2);if(Q.t=_,!Q.__c&&(Q.__=[j?j($):E2(void 0,$),function(N){var K=Q.__N?Q.__N[0]:Q.__[0],G=Q.t(K,N);K!==G&&(Q.__N=[G,Q.__[1]],Q.__c.setState({}))}],Q.__c=L1,!L1.__f)){var Z=function(N,K,G){if(!Q.__c.__H)return!0;var X=Q.__c.__H.__.filter(function(U){return U.__c});if(X.every(function(U){return!U.__N}))return!Y||Y.call(this,N,K,G);var V=Q.__c.props!==N;return X.some(function(U){if(U.__N){var W=U.__[0];U.__=U.__N,U.__N=void 0,W!==U.__[0]&&(V=!0)}}),Y&&Y.call(this,N,K,G)||V};L1.__f=!0;var{shouldComponentUpdate:Y,componentWillUpdate:q}=L1;L1.componentWillUpdate=function(N,K,G){if(this.__e){var X=Y;Y=void 0,Z(N,K,G),Y=X}q&&q.call(this,N,K,G)},L1.shouldComponentUpdate=Z}return Q.__N||Q.__}function v(_,$){var j=U5(I4++,3);!A1.__s&&y6(j.__H,$)&&(j.__=_,j.u=$,L1.__H.__h.push(j))}function u5(_,$){var j=U5(I4++,4);!A1.__s&&y6(j.__H,$)&&(j.__=_,j.u=$,L1.__h.push(j))}function I(_){return V5=5,f0(function(){return{current:_}},[])}function J2(_,$,j){V5=6,u5(function(){if(typeof _=="function"){var Q=_($());return function(){_(null),Q&&typeof Q=="function"&&Q()}}if(_)return _.current=$(),function(){return _.current=null}},j==null?j:j.concat(_))}function f0(_,$){var j=U5(I4++,7);return y6(j.__H,$)&&(j.__=_(),j.__H=$,j.__h=_),j.__}function T(_,$){return V5=8,f0(function(){return _},$)}function O2(_){var $=L1.context[_.__c],j=U5(I4++,9);return j.c=_,$?(j.__==null&&(j.__=!0,$.sub(L1)),$.props.value):_.__}function A2(_,$){A1.useDebugValue&&A1.useDebugValue($?$(_):_)}function D2(_){var $=U5(I4++,10),j=g();return $.__=_,L1.componentDidCatch||(L1.componentDidCatch=function(Q,Z){$.__&&$.__(Q,Z),j[1](Q)}),[j[0],function(){j[1](void 0)}]}function SY(){for(var _;_=H2.shift();){var $=_.__H;if(_.__P&&$)try{$.__h.some(L8),$.__h.some(M6),$.__h=[]}catch(j){$.__h=[],A1.__e(j,_.__v)}}}A1.__b=function(_){L1=null,t3&&t3(_)},A1.__=function(_,$){_&&$.__k&&$.__k.__m&&(_.__m=$.__k.__m),Q2&&Q2(_,$)},A1.__r=function(_){e3&&e3(_),I4=0;var $=(L1=_.__c).__H;$&&(O6===L1?($.__h=[],L1.__h=[],$.__.some(function(j){j.__N&&(j.__=j.__N),j.u=j.__N=void 0})):($.__h.some(L8),$.__h.some(M6),$.__h=[],I4=0)),O6=L1},A1.diffed=function(_){_2&&_2(_);var $=_.__c;$&&$.__H&&($.__H.__h.length&&(H2.push($)!==1&&a3===A1.requestAnimationFrame||((a3=A1.requestAnimationFrame)||wY)(SY)),$.__H.__.some(function(j){j.u&&(j.__H=j.u),j.u=void 0})),O6=L1=null},A1.__c=function(_,$){$.some(function(j){try{j.__h.some(L8),j.__h=j.__h.filter(function(Q){return!Q.__||M6(Q)})}catch(Q){$.some(function(Z){Z.__h&&(Z.__h=[])}),$=[],A1.__e(Q,j.__v)}}),$2&&$2(_,$)},A1.unmount=function(_){j2&&j2(_);var $,j=_.__c;j&&j.__H&&(j.__H.__.some(function(Q){try{L8(Q)}catch(Z){$=Z}}),j.__H=void 0,$&&A1.__e($,j.__v))};var Z2=typeof requestAnimationFrame=="function";function wY(_){var $,j=function(){clearTimeout(Q),Z2&&cancelAnimationFrame($),setTimeout(_)},Q=setTimeout(j,35);Z2&&($=requestAnimationFrame(j))}function L8(_){var $=L1,j=_.__c;typeof j=="function"&&(_.__c=void 0,j()),L1=$}function M6(_){var $=L1;_.__c=_.__(),L1=$}function y6(_,$){return!_||_.length!==$.length||$.some(function(j,Q){return j!==_[Q]})}function E2(_,$){return typeof $=="function"?$(_):$}var k2=function(_,$,j,Q){var Z;$[0]=0;for(var Y=1;Y<$.length;Y++){var q=$[Y++],N=$[Y]?($[0]|=q?1:2,j[$[Y++]]):$[++Y];q===3?Q[0]=N:q===4?Q[1]=Object.assign(Q[1]||{},N):q===5?(Q[1]=Q[1]||{})[$[++Y]]=N:q===6?Q[1][$[++Y]]+=N+"":q?(Z=_.apply(N,k2(_,N,j,["",null])),Q.push(Z),N[0]?$[0]|=2:($[Y-2]=0,$[Y]=Z)):Q.push(N)}return Q},Y2=new Map;function RY(_){var $=Y2.get(this);return $||($=new Map,Y2.set(this,$)),($=k2(this,$.get(_)||($.set(_,$=function(j){for(var Q,Z,Y=1,q="",N="",K=[0],G=function(U){Y===1&&(U||(q=q.replace(/^\s*\n\s*|\s*\n\s*$/g,"")))?K.push(0,U,q):Y===3&&(U||q)?(K.push(3,U,q),Y=2):Y===2&&q==="..."&&U?K.push(4,U,0):Y===2&&q&&!U?K.push(5,0,!0,q):Y>=5&&((q||!U&&Y===5)&&(K.push(Y,0,q,Z),Y=6),U&&(K.push(Y,U,0,Z),Y=6)),q=""},X=0;X<j.length;X++){X&&(Y===1&&G(),G(X));for(var V=0;V<j[X].length;V++)Q=j[X][V],Y===1?Q==="<"?(G(),K=[K],Y=3):q+=Q:Y===4?q==="--"&&Q===">"?(Y=1,q=""):q=Q+q[0]:N?Q===N?N="":q+=Q:Q==='"'||Q==="'"?N=Q:Q===">"?(G(),Y=1):Y&&(Q==="="?(Y=5,Z=q,q=""):Q==="/"&&(Y<5||j[X][V+1]===">")?(G(),Y===3&&(K=K[0]),Y=K,(K=K[0]).push(2,0,Y),Y=0):Q===" "||Q==="\t"||Q===`
`||Q==="\r"?(G(),Y=2):q+=Q),Y===3&&q==="!--"&&(Y=4,K=K[0])}return G(),K}(_)),$),arguments,[])).length>1?$:$[0]}var B=RY.bind(O8);var o1={};kY(o1,{uploadWorkspaceFile:()=>E8,uploadMedia:()=>b6,updateWorkspaceFile:()=>eY,submitAdaptiveCardAction:()=>m6,streamSidePrompt:()=>sY,stopAutoresearch:()=>nY,steerAgentQueueItem:()=>oY,setWorkspaceVisibility:()=>m5,setAgentThoughtVisibility:()=>c6,sendPeerAgentMessage:()=>pY,sendAgentMessage:()=>n4,searchPosts:()=>w6,restoreChatBranch:()=>hY,respondToAgentRequest:()=>D8,renameWorkspaceFile:()=>r6,renameChatBranch:()=>bY,removeAgentQueueItem:()=>rY,pruneChatBranch:()=>mY,moveWorkspaceEntry:()=>o6,getWorkspaceTree:()=>g5,getWorkspaceRawUrl:()=>k8,getWorkspaceFile:()=>b5,getWorkspaceDownloadUrl:()=>M8,getWorkspaceBranch:()=>tY,getTimeline:()=>l4,getThumbnailUrl:()=>l6,getThread:()=>R6,getPostsByHashtag:()=>S6,getMediaUrl:()=>S_,getMediaText:()=>n6,getMediaInfo:()=>B5,getMediaBlob:()=>aY,getChatBranches:()=>gY,getAutoresearchStatus:()=>lY,getAgents:()=>v6,getAgentThought:()=>p6,getAgentStatus:()=>g6,getAgentQueueState:()=>iY,getAgentModels:()=>v5,getAgentContext:()=>cY,getActiveChatAgents:()=>f6,forkChatBranch:()=>f5,dismissAutoresearch:()=>dY,deleteWorkspaceFile:()=>s6,deletePost:()=>u6,createWorkspaceFile:()=>i6,createReply:()=>vY,createPost:()=>fY,attachWorkspaceFile:()=>d6,addToWhitelist:()=>h6,SSEClient:()=>I8});async function a0(_,$={}){let j=await fetch(""+_,{...$,headers:{"Content-Type":"application/json",...$.headers}});if(!j.ok){let Q=await j.json().catch(()=>({error:"Unknown error"}));throw Error(Q.error||`HTTP ${j.status}`)}return j.json()}function M2(_){let $=String(_||"").split(`
`),j="message",Q=[];for(let Y of $)if(Y.startsWith("event:"))j=Y.slice(6).trim()||"message";else if(Y.startsWith("data:"))Q.push(Y.slice(5).trim());let Z=Q.join(`
`);if(!Z)return null;try{return{event:j,data:JSON.parse(Z)}}catch{return{event:j,data:Z}}}async function uY(_,$){if(!_.body)throw Error("Missing event stream body");let j=_.body.getReader(),Q=new TextDecoder,Z="";while(!0){let{value:q,done:N}=await j.read();if(N)break;Z+=Q.decode(q,{stream:!0});let K=Z.split(`

`);Z=K.pop()||"";for(let G of K){let X=M2(G);if(X)$(X.event,X.data)}}Z+=Q.decode();let Y=M2(Z);if(Y)$(Y.event,Y.data)}async function l4(_=10,$=null,j=null){let Q=`/timeline?limit=${_}`;if($)Q+=`&before=${$}`;if(j)Q+=`&chat_jid=${encodeURIComponent(j)}`;return a0(Q)}async function S6(_,$=50,j=0,Q=null){let Z=Q?`&chat_jid=${encodeURIComponent(Q)}`:"";return a0(`/hashtag/${encodeURIComponent(_)}?limit=${$}&offset=${j}${Z}`)}async function w6(_,$=50,j=0,Q=null,Z="current",Y=null){let q=Q?`&chat_jid=${encodeURIComponent(Q)}`:"",N=Z?`&scope=${encodeURIComponent(Z)}`:"",K=Y?`&root_chat_jid=${encodeURIComponent(Y)}`:"";return a0(`/search?q=${encodeURIComponent(_)}&limit=${$}&offset=${j}${q}${N}${K}`)}async function R6(_,$=null){let j=$?`?chat_jid=${encodeURIComponent($)}`:"";return a0(`/thread/${_}${j}`)}async function fY(_,$=[],j=null){let Q=j?`?chat_jid=${encodeURIComponent(j)}`:"";return a0(`/post${Q}`,{method:"POST",body:JSON.stringify({content:_,media_ids:$})})}async function vY(_,$,j=[],Q=null){let Z=Q?`?chat_jid=${encodeURIComponent(Q)}`:"";return a0(`/post/reply${Z}`,{method:"POST",body:JSON.stringify({thread_id:_,content:$,media_ids:j})})}async function u6(_,$=!1,j=null){let Q=j?`&chat_jid=${encodeURIComponent(j)}`:"",Z=`/post/${_}?cascade=${$?"true":"false"}${Q}`;return a0(Z,{method:"DELETE"})}async function n4(_,$,j=null,Q=[],Z=null,Y=null){let q=Y?`?chat_jid=${encodeURIComponent(Y)}`:"",N={content:$,thread_id:j,media_ids:Q};if(Z==="auto"||Z==="queue"||Z==="steer")N.mode=Z;return a0(`/agent/${_}/message${q}`,{method:"POST",body:JSON.stringify(N)})}async function f6(){return a0("/agent/active-chats")}async function gY(_=null,$={}){let j=new URLSearchParams;if(_)j.set("root_chat_jid",String(_));if($?.includeArchived)j.set("include_archived","1");let Q=j.toString()?`?${j.toString()}`:"";return a0(`/agent/branches${Q}`)}async function f5(_,$={}){return a0("/agent/branch-fork",{method:"POST",body:JSON.stringify({source_chat_jid:_,...$?.agentName?{agent_name:$.agentName}:{}})})}async function bY(_,$={}){return a0("/agent/branch-rename",{method:"POST",body:JSON.stringify({chat_jid:_,...$&&Object.prototype.hasOwnProperty.call($,"agentName")?{agent_name:$.agentName}:{}})})}async function mY(_){return a0("/agent/branch-prune",{method:"POST",body:JSON.stringify({chat_jid:_})})}async function hY(_,$={}){return a0("/agent/branch-restore",{method:"POST",body:JSON.stringify({chat_jid:_,...$&&Object.prototype.hasOwnProperty.call($,"agentName")?{agent_name:$.agentName}:{}})})}async function pY(_,$,j,Q="auto",Z={}){let Y={source_chat_jid:_,content:j,mode:Q,...Z?.sourceAgentName?{source_agent_name:Z.sourceAgentName}:{},...Z?.targetBy==="agent_name"?{target_agent_name:$}:{target_chat_jid:$}};return a0("/agent/peer-message",{method:"POST",body:JSON.stringify(Y)})}async function v6(){return a0("/agent/roster")}async function g6(_=null){let $=_?`?chat_jid=${encodeURIComponent(_)}`:"";return a0(`/agent/status${$}`)}async function cY(_=null){let $=_?`?chat_jid=${encodeURIComponent(_)}`:"";return a0(`/agent/context${$}`)}async function lY(_=null){let $=_?`?chat_jid=${encodeURIComponent(_)}`:"";return a0(`/agent/autoresearch/status${$}`)}async function nY(_=null,$={}){return a0("/agent/autoresearch/stop",{method:"POST",body:JSON.stringify({chat_jid:_||void 0,generate_report:$?.generateReport!==!1})})}async function dY(_=null){return a0("/agent/autoresearch/dismiss",{method:"POST",body:JSON.stringify({chat_jid:_||void 0})})}async function iY(_=null){let $=_?`?chat_jid=${encodeURIComponent(_)}`:"";return a0(`/agent/queue-state${$}`)}async function rY(_,$=null){let j=await fetch("/agent/queue-remove",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({row_id:_,chat_jid:$||void 0})});if(!j.ok){let Q=await j.json().catch(()=>({error:"Failed to remove queued item"}));throw Error(Q.error||`HTTP ${j.status}`)}return j.json()}async function oY(_,$=null){let j=await fetch("/agent/queue-steer",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({row_id:_,chat_jid:$||void 0})});if(!j.ok){let Q=await j.json().catch(()=>({error:"Failed to steer queued item"}));throw Error(Q.error||`HTTP ${j.status}`)}return j.json()}async function v5(_=null){let $=_?`?chat_jid=${encodeURIComponent(_)}`:"";return a0(`/agent/models${$}`)}async function b6(_){let $=new FormData;$.append("file",_);let j=await fetch("/media/upload",{method:"POST",body:$});if(!j.ok){let Q=await j.json().catch(()=>({error:"Upload failed"}));throw Error(Q.error||`HTTP ${j.status}`)}return j.json()}async function D8(_,$,j=null){let Q=await fetch("/agent/respond",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({request_id:_,outcome:$,chat_jid:j||void 0})});if(!Q.ok){let Z=await Q.json().catch(()=>({error:"Failed to respond"}));throw Error(Z.error||`HTTP ${Q.status}`)}return Q.json()}async function m6(_){let $=await fetch("/agent/card-action",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(_)});if(!$.ok){let j=await $.json().catch(()=>({error:"Adaptive Card action failed"}));throw Error(j.error||`HTTP ${$.status}`)}return $.json()}async function sY(_,$={}){let j=await fetch("/agent/side-prompt/stream",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({prompt:_,system_prompt:$.systemPrompt||void 0,chat_jid:$.chatJid||void 0}),signal:$.signal});if(!j.ok){let Y=await j.json().catch(()=>({error:"Side prompt failed"}));throw Error(Y.error||`HTTP ${j.status}`)}let Q=null,Z=null;if(await uY(j,(Y,q)=>{if($.onEvent?.(Y,q),Y==="side_prompt_thinking_delta")$.onThinkingDelta?.(q?.delta||"");else if(Y==="side_prompt_text_delta")$.onTextDelta?.(q?.delta||"");else if(Y==="side_prompt_done")Q=q;else if(Y==="side_prompt_error")Z=q}),Z){let Y=Error(Z?.error||"Side prompt failed");throw Y.payload=Z,Y}return Q}async function h6(_,$){let j=await fetch("/agent/whitelist",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({pattern:_,description:$})});if(!j.ok){let Q=await j.json().catch(()=>({error:"Failed to add to whitelist"}));throw Error(Q.error||`HTTP ${j.status}`)}return j.json()}async function p6(_,$="thought"){let j=`/agent/thought?turn_id=${encodeURIComponent(_)}&panel=${encodeURIComponent($)}`;return a0(j)}async function c6(_,$,j){return a0("/agent/thought/visibility",{method:"POST",body:JSON.stringify({turn_id:_,panel:$,expanded:Boolean(j)})})}function S_(_){return`/media/${_}`}function l6(_){return`/media/${_}/thumbnail`}async function B5(_){let $=await fetch(`/media/${_}/info`);if(!$.ok)throw Error("Failed to get media info");return $.json()}async function n6(_){let $=await fetch(`/media/${_}`);if(!$.ok)throw Error("Failed to load media text");return $.text()}async function aY(_){let $=await fetch(`/media/${_}`);if(!$.ok)throw Error("Failed to load media blob");return $.blob()}async function g5(_="",$=2,j=!1){let Q=`/workspace/tree?path=${encodeURIComponent(_)}&depth=${$}&show_hidden=${j?"1":"0"}`;return a0(Q)}async function tY(_=""){let $=`/workspace/branch?path=${encodeURIComponent(_||"")}`;return a0($)}async function b5(_,$=20000,j=null){let Q=j?`&mode=${encodeURIComponent(j)}`:"",Z=`/workspace/file?path=${encodeURIComponent(_)}&max=${$}${Q}`;return a0(Z)}async function eY(_,$){return a0("/workspace/file",{method:"PUT",body:JSON.stringify({path:_,content:$})})}async function d6(_){return a0("/workspace/attach",{method:"POST",body:JSON.stringify({path:_})})}async function E8(_,$="",j={}){let Q=new FormData;Q.append("file",_);let Z=new URLSearchParams;if($)Z.set("path",$);if(j.overwrite)Z.set("overwrite","1");let Y=Z.toString(),q=Y?`/workspace/upload?${Y}`:"/workspace/upload",N=await fetch(""+q,{method:"POST",body:Q});if(!N.ok){let K=await N.json().catch(()=>({error:"Upload failed"})),G=Error(K.error||`HTTP ${N.status}`);throw G.status=N.status,G.code=K.code,G}return N.json()}async function i6(_,$,j=""){let Q=await fetch("/workspace/file",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({path:_,name:$,content:j})});if(!Q.ok){let Z=await Q.json().catch(()=>({error:"Create failed"})),Y=Error(Z.error||`HTTP ${Q.status}`);throw Y.status=Q.status,Y.code=Z.code,Y}return Q.json()}async function r6(_,$){let j=await fetch("/workspace/rename",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({path:_,name:$})});if(!j.ok){let Q=await j.json().catch(()=>({error:"Rename failed"})),Z=Error(Q.error||`HTTP ${j.status}`);throw Z.status=j.status,Z.code=Q.code,Z}return j.json()}async function o6(_,$){let j=await fetch("/workspace/move",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({path:_,target:$})});if(!j.ok){let Q=await j.json().catch(()=>({error:"Move failed"})),Z=Error(Q.error||`HTTP ${j.status}`);throw Z.status=j.status,Z.code=Q.code,Z}return j.json()}async function s6(_){let $=`/workspace/file?path=${encodeURIComponent(_||"")}`;return a0($,{method:"DELETE"})}async function m5(_,$=!1){return a0("/workspace/visibility",{method:"POST",body:JSON.stringify({visible:Boolean(_),show_hidden:Boolean($)})})}function k8(_){return`/workspace/raw?path=${encodeURIComponent(_)}`}function M8(_,$=!1){return`/workspace/download?${`path=${encodeURIComponent(_||"")}&show_hidden=${$?"1":"0"}`}`}class I8{constructor(_,$,j={}){this.onEvent=_,this.onStatusChange=$,this.chatJid=typeof j?.chatJid==="string"&&j.chatJid.trim()?j.chatJid.trim():null,this.eventSource=null,this.reconnectTimeout=null,this.reconnectDelay=1000,this.status="disconnected",this.reconnectAttempts=0,this.cooldownUntil=0,this.connecting=!1,this.lastActivityAt=0,this.staleCheckTimer=null,this.staleThresholdMs=70000}markActivity(){this.lastActivityAt=Date.now()}clearStaleMonitor(){if(this.staleCheckTimer)clearInterval(this.staleCheckTimer),this.staleCheckTimer=null}startStaleMonitor(){this.clearStaleMonitor(),this.staleCheckTimer=setInterval(()=>{if(this.status!=="connected")return;if(!this.lastActivityAt)return;if(Date.now()-this.lastActivityAt<=this.staleThresholdMs)return;console.warn("SSE connection went stale; forcing reconnect"),this.forceReconnect()},15000)}forceReconnect(){if(this.connecting=!1,this.eventSource)this.eventSource.close(),this.eventSource=null;this.clearStaleMonitor(),this.status="disconnected",this.onStatusChange("disconnected"),this.reconnectAttempts+=1,this.scheduleReconnect()}connect(){if(this.connecting)return;if(this.eventSource&&this.status==="connected")return;if(this.connecting=!0,this.eventSource)this.eventSource.close();this.clearStaleMonitor();let _=this.chatJid?`?chat_jid=${encodeURIComponent(this.chatJid)}`:"";this.eventSource=new EventSource("/sse/stream"+_);let $=(j)=>{this.eventSource.addEventListener(j,(Q)=>{this.markActivity(),this.onEvent(j,JSON.parse(Q.data))})};this.eventSource.onopen=()=>{this.connecting=!1,this.reconnectDelay=1000,this.reconnectAttempts=0,this.cooldownUntil=0,this.status="connected",this.markActivity(),this.startStaleMonitor(),this.onStatusChange("connected")},this.eventSource.onerror=()=>{this.connecting=!1,this.clearStaleMonitor(),this.status="disconnected",this.onStatusChange("disconnected"),this.reconnectAttempts+=1,this.scheduleReconnect()},this.eventSource.addEventListener("connected",()=>{this.markActivity(),console.log("SSE connected"),this.onEvent("connected",{})}),this.eventSource.addEventListener("heartbeat",()=>{this.markActivity()}),$("new_post"),$("new_reply"),$("agent_response"),$("interaction_updated"),$("interaction_deleted"),$("agent_status"),$("agent_steer_queued"),$("agent_followup_queued"),$("agent_followup_consumed"),$("agent_followup_removed"),$("workspace_update"),$("agent_draft"),$("agent_draft_delta"),$("agent_thought"),$("agent_thought_delta"),$("model_changed"),$("ui_theme"),["extension_ui_request","extension_ui_timeout","extension_ui_notify","extension_ui_status","extension_ui_working","extension_ui_widget","extension_ui_title","extension_ui_editor_text","extension_ui_error"].forEach($)}scheduleReconnect(){if(this.reconnectTimeout)clearTimeout(this.reconnectTimeout);let _=10,$=60000,j=Date.now();if(this.reconnectAttempts>=_)this.cooldownUntil=Math.max(this.cooldownUntil,j+$),this.reconnectAttempts=0;let Q=Math.max(this.cooldownUntil-j,0),Z=Math.max(this.reconnectDelay,Q);this.reconnectTimeout=setTimeout(()=>{console.log("Reconnecting SSE..."),this.connect()},Z),this.reconnectDelay=Math.min(this.reconnectDelay*2,30000)}reconnectIfNeeded(){let _=Date.now();if(this.status==="connected"){if(this.lastActivityAt&&_-this.lastActivityAt>this.staleThresholdMs)this.forceReconnect();return}if(this.cooldownUntil&&_<this.cooldownUntil)return;if(this.reconnectTimeout)clearTimeout(this.reconnectTimeout),this.reconnectTimeout=null;this.connect()}disconnect(){if(this.connecting=!1,this.clearStaleMonitor(),this.eventSource)this.eventSource.close(),this.eventSource=null;if(this.reconnectTimeout)clearTimeout(this.reconnectTimeout),this.reconnectTimeout=null}}class I2{extensions=new Map;register(_){this.extensions.set(_.id,_)}unregister(_){this.extensions.delete(_)}resolve(_){let $,j=-1/0;for(let Q of this.extensions.values()){if(Q.placement!=="tabs")continue;if(!Q.canHandle)continue;try{let Z=Q.canHandle(_);if(Z===!1||Z===0)continue;let Y=Z===!0?0:typeof Z==="number"?Z:0;if(Y>j)j=Y,$=Q}catch(Z){console.warn(`[PaneRegistry] canHandle() error for "${Q.id}":`,Z)}}return $}list(){return Array.from(this.extensions.values())}getDockPanes(){return Array.from(this.extensions.values()).filter((_)=>_.placement==="dock")}getTabPanes(){return Array.from(this.extensions.values()).filter((_)=>_.placement==="tabs")}get(_){return this.extensions.get(_)}get size(){return this.extensions.size}}var d0=new I2;var x8=null,a6=null;function _q(){try{return`/static/dist/editor.bundle.js${new URL(import.meta.url).search||""}`}catch{return"/static/dist/editor.bundle.js"}}function x2(){if(a6)return Promise.resolve(a6);if(!x8)x8=import(_q()).then((_)=>{return a6=_,_}).catch((_)=>{throw x8=null,_});return x8}class T2{container;context;real=null;disposed=!1;loadingEl;queuedDirtyCb=null;queuedSaveCb=null;queuedCloseCb=null;queuedViewStateCb=null;queuedViewState=null;constructor(_,$){this.container=_,this.context=$,this.loadingEl=document.createElement("div"),this.loadingEl.className="editor-pane",this.loadingEl.innerHTML=`
            <div class="editor-body">
                <div class="editor-status" style="padding: 2em; text-align: center; color: var(--text-secondary);">Loading editor…</div>
            </div>
        `,_.appendChild(this.loadingEl),this.load()}escapeHtml(_){let $=document.createElement("div");return $.textContent=_,$.innerHTML}async load(){try{let _=await x2();if(this.disposed)return;if(this.loadingEl.parentNode)this.loadingEl.remove();if(this.real=new _.StandaloneEditorInstance(this.container,this.context),this.queuedDirtyCb&&this.real.onDirtyChange)this.real.onDirtyChange(this.queuedDirtyCb);if(this.queuedSaveCb&&this.real.onSaveRequest)this.real.onSaveRequest(this.queuedSaveCb);if(this.queuedCloseCb&&this.real.onClose)this.real.onClose(this.queuedCloseCb);if(this.queuedViewStateCb&&typeof this.real.onViewStateChange==="function")this.real.onViewStateChange(this.queuedViewStateCb);if(this.queuedViewState&&typeof this.real.restoreViewState==="function")requestAnimationFrame(()=>this.real?.restoreViewState?.(this.queuedViewState))}catch(_){if(this.disposed)return;console.error("[editor-loader] Failed to load editor bundle:",_),this.loadingEl.querySelector(".editor-status").textContent="Failed to load editor. Check console for details."}}getContent(){return this.real?.getContent()}isDirty(){return this.real?.isDirty()||!1}setContent(_,$){if(this.real?.setContent)this.real.setContent(_,$)}focus(){this.real?.focus()}resize(){this.real?.resize?.()}dispose(){if(this.disposed)return;if(this.disposed=!0,this.real)this.real.dispose(),this.real=null;this.container.innerHTML="",this.queuedDirtyCb=null,this.queuedSaveCb=null,this.queuedCloseCb=null,this.queuedViewStateCb=null}onDirtyChange(_){if(this.queuedDirtyCb=_,this.real?.onDirtyChange)this.real.onDirtyChange(_)}onSaveRequest(_){if(this.queuedSaveCb=_,this.real?.onSaveRequest)this.real.onSaveRequest(_)}onClose(_){if(this.queuedCloseCb=_,this.real?.onClose)this.real.onClose(_)}onViewStateChange(_){this.queuedViewStateCb=_,this.real?.onViewStateChange?.(_)}restoreViewState(_){this.queuedViewState=_,this.real?.restoreViewState?.(_)}getPath(){return this.real?.getPath?.()??this.context.path??""}setPath(_){this.real?.setPath?.(_)}}var t6={id:"editor",label:"Editor",icon:"edit",capabilities:["edit"],placement:"tabs",canHandle(_){if(!_.path)return!1;if(_.mode!=="edit")return!1;return 1},mount(_,$){return new T2(_,$)}};function e6(){x2().catch(()=>{})}var d4="piclaw://terminal";var $q={yellow:"#9a6700",magenta:"#8250df",cyan:"#1b7c83",brightBlack:"#57606a",brightRed:"#cf222e",brightGreen:"#1a7f37",brightYellow:"#bf8700",brightBlue:"#0550ae",brightMagenta:"#6f42c1",brightCyan:"#0a7b83"},jq={yellow:"#d29922",magenta:"#bc8cff",cyan:"#39c5cf",brightBlack:"#8b949e",brightRed:"#ff7b72",brightGreen:"#7ee787",brightYellow:"#e3b341",brightBlue:"#79c0ff",brightMagenta:"#d2a8ff",brightCyan:"#56d4dd"},T8=null,_$=null;function Qq(_){if(!_)return!1;return _.startsWith("data:application/wasm")||/(^|\/)ghostty-vt\.wasm(?:[?#].*)?$/.test(_)}async function Zq(_){let $=globalThis.fetch?.bind(globalThis);if(!$)return await _();let j=new URL("/static/js/vendor/ghostty-vt.wasm",window.location.origin).href,Q=(Z,Y)=>{let q=Z instanceof Request?Z.url:Z instanceof URL?Z.href:String(Z);if(!Qq(q))return $(Z,Y);if(Z instanceof Request)return $(new Request(j,Z));return $(j,Y)};globalThis.fetch=Q;try{return await _()}finally{globalThis.fetch=$}}async function Yq(){let $=await import(new URL("/static/js/vendor/ghostty-web.js",window.location.origin).href);if(!T8)T8=Zq(()=>Promise.resolve($.init?.())).catch((j)=>{throw T8=null,j});return await T8,$}async function qq(){if(typeof document>"u"||!("fonts"in document)||!document.fonts)return;if(!_$)_$=Promise.allSettled([document.fonts.load('400 13px "FiraCode Nerd Font Mono"'),document.fonts.load('700 13px "FiraCode Nerd Font Mono"'),document.fonts.ready]).then(()=>{return}).catch(()=>{return});await _$}async function Nq(){let _=await fetch("/terminal/session",{method:"GET",credentials:"same-origin"}),$=await _.json().catch(()=>({}));if(!_.ok)throw Error($?.error||`HTTP ${_.status}`);return $}function Kq(_){return`${window.location.protocol==="https:"?"wss:":"ws:"}//${window.location.host}${_}`}function Gq(){if(typeof window>"u"||typeof document>"u")return!1;let{documentElement:_,body:$}=document,j=_?.getAttribute?.("data-theme")?.toLowerCase?.()||"";if(j==="dark")return!0;if(j==="light")return!1;if(_?.classList?.contains("dark")||$?.classList?.contains("dark"))return!0;if(_?.classList?.contains("light")||$?.classList?.contains("light"))return!1;return Boolean(window.matchMedia?.("(prefers-color-scheme: dark)")?.matches)}function G4(_,$=""){if(typeof document>"u")return $;return getComputedStyle(document.documentElement).getPropertyValue(_)?.trim()||$}function Xq(_,$){if(!_||!_.startsWith("#"))return _;let j=_.slice(1);if(j.length===3)return`#${j[0]}${j[0]}${j[1]}${j[1]}${j[2]}${j[2]}${$}`;if(j.length===6)return`#${j}${$}`;return _}function C2(){let _=Gq(),$=_?jq:$q,j=G4("--bg-primary",_?"#000000":"#ffffff"),Q=G4("--text-primary",_?"#e7e9ea":"#0f1419"),Z=G4("--text-secondary",_?"#71767b":"#536471"),Y=G4("--accent-color","#1d9bf0"),q=G4("--danger-color",_?"#ff7b72":"#cf222e"),N=G4("--success-color",_?"#7ee787":"#1a7f37"),K=G4("--bg-hover",_?"#1d1f23":"#e8ebed"),G=G4("--border-color",_?"#2f3336":"#eff3f4"),X=G4("--accent-soft-strong",Xq(Y,_?"47":"33"));return{background:j,foreground:Q,cursor:Y,cursorAccent:j,selectionBackground:X,selectionForeground:Q,black:K,red:q,green:N,yellow:$.yellow,blue:Y,magenta:$.magenta,cyan:$.cyan,white:Q,brightBlack:$.brightBlack,brightRed:$.brightRed,brightGreen:$.brightGreen,brightYellow:$.brightYellow,brightBlue:$.brightBlue,brightMagenta:$.brightMagenta,brightCyan:$.brightCyan,brightWhite:G}}class $${container;disposed=!1;termEl;bodyEl;statusEl;terminal=null;fitAddon=null;socket=null;themeObserver=null;themeChangeListener=null;mediaQuery=null;mediaQueryListener=null;resizeObserver=null;dockResizeListener=null;windowResizeListener=null;resizeFrame=0;lastAppliedThemeSignature=null;lastResizeSignature=null;constructor(_,$){this.container=_,this.termEl=document.createElement("div"),this.termEl.className="terminal-pane-content",this.termEl.setAttribute("tabindex","0"),this.statusEl=document.createElement("span"),this.statusEl.className="terminal-pane-status",this.statusEl.textContent="Loading terminal…",this.bodyEl=document.createElement("div"),this.bodyEl.className="terminal-pane-body",this.bodyEl.innerHTML='<div class="terminal-placeholder">Bootstrapping ghostty-web…</div>',this.termEl.append(this.bodyEl),_.appendChild(this.termEl),this.bootstrapGhostty()}setStatus(_){this.statusEl.textContent=_,this.termEl.dataset.connectionStatus=_,this.termEl.setAttribute("aria-label",`Terminal ${_}`)}getResizeSignature(){try{let _=this.container?.getBoundingClientRect?.(),$=this.bodyEl?.getBoundingClientRect?.(),j=Number.isFinite(_?.width)?_.width:0,Q=Number.isFinite(_?.height)?_.height:0,Z=Number.isFinite($?.width)?$.width:0,Y=Number.isFinite($?.height)?$.height:0;return`${Math.round(j)}x${Math.round(Q)}:${Math.round(Z)}x${Math.round(Y)}`}catch{return"0x0:0x0"}}syncHostLayout(){let _=this.bodyEl.querySelector(".terminal-live-host");if(!(_ instanceof HTMLElement))return;let $=_.firstElementChild;if($ instanceof HTMLElement)$.style.width="100%",$.style.height="100%",$.style.maxWidth="100%",$.style.minWidth="0",$.style.display="block";let j=_.querySelector("canvas");if(j instanceof HTMLElement)j.style.display="block",j.style.maxWidth="none"}scheduleResize(){if(this.disposed)return;let _=this.getResizeSignature();if(this.lastResizeSignature===_)return;if(this.resizeFrame)cancelAnimationFrame(this.resizeFrame);this.resizeFrame=requestAnimationFrame(()=>{this.resizeFrame=0,this.lastResizeSignature=this.getResizeSignature(),this.resize()})}async bootstrapGhostty(){try{let _=await Yq();if(await qq(),this.disposed)return;this.bodyEl.innerHTML="";let $=document.createElement("div");$.className="terminal-live-host",this.bodyEl.appendChild($);let j=new _.Terminal({cols:120,rows:30,cursorBlink:!0,fontFamily:'FiraCode Nerd Font Mono, ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", monospace',fontSize:13,theme:C2()}),Q=null;if(typeof _.FitAddon==="function")Q=new _.FitAddon,j.loadAddon?.(Q);await j.open($),this.syncHostLayout(),j.loadFonts?.(),Q?.observeResize?.(),this.terminal=j,this.fitAddon=Q,this.installThemeSync(),this.installResizeSync(),this.scheduleResize(),await this.connectBackend()}catch(_){if(console.error("[terminal-pane] Failed to bootstrap ghostty-web:",_),this.disposed)return;this.bodyEl.innerHTML='<div class="terminal-placeholder">Terminal failed to load. Check vendored assets and backend wiring.</div>',this.setStatus("Load failed")}}applyTheme(){if(!this.terminal)return;let _=C2(),$=JSON.stringify(_),j=this.lastAppliedThemeSignature!==null&&this.lastAppliedThemeSignature!==$;try{this.termEl.style.backgroundColor=_.background,this.bodyEl.style.backgroundColor=_.background;let Q=this.bodyEl.querySelector(".terminal-live-host");if(Q instanceof HTMLElement)Q.style.backgroundColor=_.background,Q.style.color=_.foreground;let Z=this.bodyEl.querySelector("canvas");if(Z instanceof HTMLElement)Z.style.backgroundColor=_.background,Z.style.color=_.foreground}catch{}try{if(this.terminal.options)this.terminal.options.theme=_}catch{}try{if(j&&this.terminal.reset)this.terminal.reset()}catch{}try{this.terminal.renderer?.setTheme?.(_),this.terminal.renderer?.clear?.()}catch{}try{this.terminal.loadFonts?.()}catch{}try{this.terminal.renderer?.remeasureFont?.()}catch{}try{if(this.terminal.wasmTerm&&this.terminal.renderer?.render)this.terminal.renderer.render(this.terminal.wasmTerm,!0,this.terminal.viewportY||0,this.terminal),this.terminal.renderer.render(this.terminal.wasmTerm,!1,this.terminal.viewportY||0,this.terminal)}catch{}try{this.resize()}catch{}try{if(j&&this.socket?.readyState===WebSocket.OPEN)this.socket.send(JSON.stringify({type:"input",data:"\f"}))}catch{}try{this.terminal.refresh?.()}catch{}this.lastAppliedThemeSignature=$}installThemeSync(){if(typeof window>"u"||typeof document>"u")return;let _=()=>requestAnimationFrame(()=>this.applyTheme());_();let $=()=>_();window.addEventListener("piclaw-theme-change",$),this.themeChangeListener=$;let j=window.matchMedia?.("(prefers-color-scheme: dark)"),Q=()=>_();if(j?.addEventListener)j.addEventListener("change",Q);else if(j?.addListener)j.addListener(Q);this.mediaQuery=j,this.mediaQueryListener=Q;let Z=typeof MutationObserver<"u"?new MutationObserver(()=>_()):null;if(Z?.observe(document.documentElement,{attributes:!0,attributeFilter:["class","data-theme","style"]}),document.body)Z?.observe(document.body,{attributes:!0,attributeFilter:["class","data-theme"]});this.themeObserver=Z}installResizeSync(){if(typeof window>"u")return;let _=()=>this.scheduleResize(),$=()=>this.scheduleResize();if(window.addEventListener("dock-resize",_),window.addEventListener("resize",$),this.dockResizeListener=_,this.windowResizeListener=$,typeof ResizeObserver<"u"){let j=new ResizeObserver(()=>{if(this.disposed)return;this.scheduleResize()});j.observe(this.container),this.resizeObserver=j}}async connectBackend(){let _=this.terminal;if(!_)return;try{let $=await Nq();if(this.disposed)return;if(!$?.enabled){_.write?.(`Terminal backend unavailable: ${$?.error||"disabled"}\r
`),this.setStatus("Unavailable");return}let j=new WebSocket(Kq($.ws_path||"/terminal/ws"));this.socket=j,this.setStatus("Connecting…"),_.onData?.((Q)=>{if(j.readyState===WebSocket.OPEN)j.send(JSON.stringify({type:"input",data:Q}))}),_.onResize?.(({cols:Q,rows:Z})=>{if(j.readyState===WebSocket.OPEN)j.send(JSON.stringify({type:"resize",cols:Q,rows:Z}))}),j.addEventListener("open",()=>{if(this.disposed)return;this.setStatus("Connected"),this.scheduleResize()}),j.addEventListener("message",(Q)=>{if(this.disposed)return;let Z=null;try{Z=JSON.parse(String(Q.data))}catch{Z={type:"output",data:String(Q.data)}}if(Z?.type==="output"&&typeof Z.data==="string"){_.write?.(Z.data);return}if(Z?.type==="exit")_.write?.(`\r
[terminal exited]\r
`),this.setStatus("Exited")}),j.addEventListener("close",()=>{if(this.disposed)return;this.setStatus("Disconnected")}),j.addEventListener("error",()=>{if(this.disposed)return;this.setStatus("Connection error")})}catch($){_.write?.(`Terminal backend unavailable: ${$ instanceof Error?$.message:String($)}\r
`),this.setStatus("Unavailable")}}sendResize(){if(!this.socket||this.socket.readyState!==WebSocket.OPEN||!this.fitAddon?.proposeDimensions)return;let _=this.fitAddon.proposeDimensions();if(!_)return;this.socket.send(JSON.stringify({type:"resize",cols:_.cols,rows:_.rows}))}getContent(){return}isDirty(){return!1}focus(){if(this.terminal?.focus){this.terminal.focus();return}this.termEl?.focus()}resize(){this.syncHostLayout();try{this.terminal?.renderer?.remeasureFont?.()}catch{}try{this.fitAddon?.fit?.()}catch{}try{this.terminal?.refresh?.()}catch{}this.syncHostLayout(),this.sendResize()}dispose(){if(this.disposed)return;this.disposed=!0;try{if(this.resizeFrame)cancelAnimationFrame(this.resizeFrame),this.resizeFrame=0}catch{}try{if(this.themeChangeListener)window.removeEventListener("piclaw-theme-change",this.themeChangeListener)}catch{}try{if(this.mediaQuery&&this.mediaQueryListener){if(this.mediaQuery.removeEventListener)this.mediaQuery.removeEventListener("change",this.mediaQueryListener);else if(this.mediaQuery.removeListener)this.mediaQuery.removeListener(this.mediaQueryListener)}}catch{}try{if(this.dockResizeListener)window.removeEventListener("dock-resize",this.dockResizeListener);if(this.windowResizeListener)window.removeEventListener("resize",this.windowResizeListener)}catch{}try{this.themeObserver?.disconnect?.()}catch{}try{this.resizeObserver?.disconnect?.()}catch{}try{this.socket?.close?.()}catch{}try{this.fitAddon?.dispose?.()}catch{}try{this.terminal?.dispose?.()}catch{}this.termEl?.remove()}}var j$={id:"terminal",label:"Terminal",icon:"terminal",capabilities:["terminal"],placement:"dock",mount(_,$){return new $$(_,$)}},Q$={id:"terminal-tab",label:"Terminal",icon:"terminal",capabilities:["terminal"],placement:"tabs",canHandle(_){return _?.path==="piclaw://terminal"?1e4:!1},mount(_,$){return new $$(_,$)}};function X4(_={}){let $=_.window??(typeof window<"u"?window:null),j=_.navigator??(typeof navigator<"u"?navigator:null);if(j&&j.standalone===!0)return!0;if(!$||typeof $.matchMedia!=="function")return!1;return["(display-mode: standalone)","(display-mode: minimal-ui)","(display-mode: fullscreen)"].some((Z)=>{try{return Boolean($.matchMedia(Z)?.matches)}catch{return!1}})}function C8(_={}){let $=_.window??(typeof window<"u"?window:null),j=_.navigator??(typeof navigator<"u"?navigator:null);if(!$&&!j)return!1;let Q=String(j?.userAgent||""),Z=Number(j?.maxTouchPoints||0),Y=/Android|webOS|iPhone|iPad|iPod|Mobile|Windows Phone/i.test(Q),q=(()=>{if(!$||typeof $.matchMedia!=="function")return!1;try{return Boolean($.matchMedia("(pointer: coarse)")?.matches||$.matchMedia("(any-pointer: coarse)")?.matches)}catch{return!1}})();return Boolean(Y||Z>1||q)}function P2(_,$={}){if(X4($))return null;if(C8($))return{target:"_blank",features:void 0,mode:"tab"};return{target:Vq(_),features:"popup=yes,width=900,height=960,resizable=yes,scrollbars=yes",mode:"popup"}}function Z$(_,$={}){let j=$.window??(typeof window<"u"?window:null);if(!j||!_)return null;try{return _.features?j.open("about:blank",_.target,_.features):j.open("about:blank",_.target)}catch{return null}}function Y$(_,$={}){if(!_||!_.document)return;try{let j=String($.title||"Opening branch…"),Q=String($.message||"Preparing a new branch window…");_.document.title=j,_.document.body.innerHTML=`
            <div style="font-family: system-ui, sans-serif; padding: 24px; color: #222;">
                <h1 style="font-size: 18px; margin: 0 0 12px;">${j}</h1>
                <p style="margin: 0; line-height: 1.5;">${Q}</p>
            </div>
        `}catch{}}function q$(_,$){if(!_||!$)return;try{if(_.location&&typeof _.location.replace==="function"){_.location.replace(String($));return}_.location=String($)}catch{}}function N$(_){if(!_||typeof _.close!=="function")return;try{_.close()}catch{}}function V4(_,$,j={}){let Q=new URL(String(_||"http://localhost/")),Z=String($||"").trim()||"web:default";if(Q.searchParams.set("chat_jid",Z),Q.searchParams.delete("branch_loader"),Q.searchParams.delete("branch_source_chat_jid"),Q.searchParams.delete("pane_popout"),Q.searchParams.delete("pane_path"),Q.searchParams.delete("pane_label"),j.chatOnly!==!1)Q.searchParams.set("chat_only","1");return Q.toString()}function y2(_,$,j={}){let Q=new URL(String(_||"http://localhost/")),Z=String($||"").trim()||"web:default";if(Q.searchParams.set("branch_loader","1"),Q.searchParams.set("branch_source_chat_jid",Z),Q.searchParams.delete("chat_jid"),Q.searchParams.delete("pane_popout"),Q.searchParams.delete("pane_path"),Q.searchParams.delete("pane_label"),j.chatOnly!==!1)Q.searchParams.set("chat_only","1");return Q.toString()}function S2(_,$,j={}){let Q=new URL(String(_||"http://localhost/")),Z=String($||"").trim();if(!Z)return Q.toString();if(Q.searchParams.set("pane_popout","1"),Q.searchParams.set("pane_path",Z),j?.label)Q.searchParams.set("pane_label",String(j.label));else Q.searchParams.delete("pane_label");if(j?.chatJid)Q.searchParams.set("chat_jid",String(j.chatJid));let Y=j?.params&&typeof j.params==="object"?j.params:null;if(Y)for(let[q,N]of Object.entries(Y)){let K=String(q||"").trim();if(!K)continue;if(N===null||N===void 0||N==="")Q.searchParams.delete(K);else Q.searchParams.set(K,String(N))}return Q.searchParams.delete("chat_only"),Q.searchParams.delete("branch_loader"),Q.searchParams.delete("branch_source_chat_jid"),Q.toString()}function Vq(_){return`piclaw-chat-${String(_||"web:default").trim().toLowerCase().replace(/[^a-z0-9_-]+/g,"-")||"default"}`}function Uq(_){return`piclaw-pane-${String(_||"pane").trim().toLowerCase().replace(/[^a-z0-9_-]+/g,"-")||"default"}`}function w2(_,$={}){if(X4($))return null;if(C8($))return{target:"_blank",features:void 0,mode:"tab"};return{target:Uq(_),features:"popup=yes,width=1200,height=960,resizable=yes,scrollbars=yes",mode:"popup"}}function h5(_){let $=_ instanceof Error?_.message:String(_||"").trim(),j=String($||"").trim();if(!j)return"PiClaw could not open a new branch window.";let Q=j.toLowerCase();if(Q.includes("no stable turn boundary"))return"This chat is still in flight and does not yet have a stable turn boundary to fork from.";if(Q.includes("cannot fork a branch while the source chat is still active"))return"This chat is still active. Please wait for the current turn to settle, then try again.";if(Q.includes("cancelled"))return"Branch creation was cancelled before a new chat window could be opened.";if(Q.includes("did not return a chat id"))return"PiClaw created no usable branch id for the new window. Please try again.";if(Q.includes("failed to fork branch")||Q.includes("failed to fork chat branch"))return"PiClaw could not create the new branch. Please try again.";return j}function Bq(_){try{return JSON.parse(_)}catch{return null}}function Lq(_){if(typeof _==="string")return new TextEncoder().encode(_).byteLength;if(_ instanceof ArrayBuffer)return _.byteLength;if(ArrayBuffer.isView(_))return _.byteLength;if(_ instanceof Blob)return _.size;return 0}function Wq(_){if(typeof _==="string")return _.length;if(_ instanceof ArrayBuffer)return _.byteLength;if(_ instanceof Blob)return _.size;return Number(_?.size||0)}class K${socket=null;disposed=!1;options;bytesIn=0;bytesOut=0;constructor(_){this.options=_}connect(){if(this.disposed)return;try{this.socket?.close?.()}catch{}let _=new WebSocket(this.options.url);_.binaryType=this.options.binaryType||"arraybuffer",_.addEventListener("open",()=>{if(this.disposed||this.socket!==_)return;this.options.onOpen?.()}),_.addEventListener("message",($)=>{if(this.disposed||this.socket!==_)return;let j=Wq($.data);if(this.bytesIn+=j,this.emitMetrics(),typeof $.data==="string"){let Q=this.options.parseControlMessage||Bq;this.options.onMessage?.({kind:"control",raw:$.data,payload:Q($.data)});return}this.options.onMessage?.({kind:"binary",data:$.data,size:j})}),_.addEventListener("close",()=>{if(this.socket===_)this.socket=null;if(this.disposed)return;this.options.onClose?.()}),_.addEventListener("error",()=>{if(this.disposed||this.socket!==_)return;this.options.onError?.()}),this.socket=_}send(_){if(this.disposed||!this.socket)return;let $=Lq(_);this.bytesOut+=$,this.emitMetrics(),this.socket.send(_)}sendControl(_){this.send(JSON.stringify(_??{}))}getMetrics(){return{bytesIn:this.bytesIn,bytesOut:this.bytesOut}}dispose(){if(this.disposed)return;this.disposed=!0;try{this.socket?.close?.()}catch{}this.socket=null}emitMetrics(){this.options.onMetrics?.(this.getMetrics())}}var p5=()=>{throw Error("Operation requires compiling with --exportRuntime")},Fq=typeof BigUint64Array<"u",c5=Symbol();var zq=new TextDecoder("utf-16le",{fatal:!0});Object.hasOwn=Object.hasOwn||function(_,$){return Object.prototype.hasOwnProperty.call(_,$)};function R2(_,$){let j=new Uint32Array(_)[$+-4>>>2]>>>1,Q=new Uint16Array(_,$,j);if(j<=192)return String.fromCharCode(...Q);try{return zq.decode(Q)}catch{let Z="",Y=0;while(j-Y>1024)Z+=String.fromCharCode(...Q.subarray(Y,Y+=1024));return Z+String.fromCharCode(...Q.subarray(Y))}}function u2(_){let $={};function j(Z,Y){if(!Z)return"<yet unknown>";return R2(Z.buffer,Y)}let Q=_.env=_.env||{};return Q.abort=Q.abort||function(Y,q,N,K){let G=$.memory||Q.memory;throw Error(`abort: ${j(G,Y)} at ${j(G,q)}:${N}:${K}`)},Q.trace=Q.trace||function(Y,q,...N){let K=$.memory||Q.memory;console.log(`trace: ${j(K,Y)}${q?" ":""}${N.slice(0,q).join(", ")}`)},Q.seed=Q.seed||Date.now,_.Math=_.Math||Math,_.Date=_.Date||Date,$}function f2(_,$){let j=$.exports,Q=j.memory,Z=j.table,Y=j.__new||p5,q=j.__pin||p5,N=j.__unpin||p5,K=j.__collect||p5,G=j.__rtti_base,X=G?(z)=>z[G>>>2]:p5;_.__new=Y,_.__pin=q,_.__unpin=N,_.__collect=K;function V(z){let C=new Uint32Array(Q.buffer);if((z>>>=0)>=X(C))throw Error(`invalid id: ${z}`);return C[(G+4>>>2)+z]}function U(z){let C=V(z);if(!(C&7))throw Error(`not an array: ${z}, flags=${C}`);return C}function W(z){return 31-Math.clz32(z>>>6&31)}function J(z){if(z==null)return 0;let C=z.length,b=Y(C<<1,2),e=new Uint16Array(Q.buffer);for(let p=0,a=b>>>1;p<C;++p)e[a+p]=z.charCodeAt(p);return b}_.__newString=J;function D(z){if(z==null)return 0;let C=new Uint8Array(z),b=Y(C.length,1);return new Uint8Array(Q.buffer).set(C,b),b}_.__newArrayBuffer=D;function O(z){if(!z)return null;let C=Q.buffer;if(new Uint32Array(C)[z+-8>>>2]!==2)throw Error(`not a string: ${z}`);return R2(C,z)}_.__getString=O;function F(z,C,b){let e=Q.buffer;if(b)switch(z){case 2:return new Float32Array(e);case 3:return new Float64Array(e)}else switch(z){case 0:return new(C?Int8Array:Uint8Array)(e);case 1:return new(C?Int16Array:Uint16Array)(e);case 2:return new(C?Int32Array:Uint32Array)(e);case 3:return new(C?BigInt64Array:BigUint64Array)(e)}throw Error(`unsupported align: ${z}`)}function A(z,C=0){let b=C,e=U(z),p=W(e),a=typeof b!=="number",t=a?b.length:b,_0=Y(t<<p,e&4?z:1),K0;if(e&4)K0=_0;else{q(_0);let q0=Y(e&2?16:12,z);N(_0);let V0=new Uint32Array(Q.buffer);if(V0[q0+0>>>2]=_0,V0[q0+4>>>2]=_0,V0[q0+8>>>2]=t<<p,e&2)V0[q0+12>>>2]=t;K0=q0}if(a){let q0=F(p,e&2048,e&4096),V0=_0>>>p;if(e&16384)for(let H0=0;H0<t;++H0)q0[V0+H0]=b[H0];else q0.set(b,V0)}return K0}_.__newArray=A;function k(z){let C=new Uint32Array(Q.buffer),b=C[z+-8>>>2],e=U(b),p=W(e),a=e&4?z:C[z+4>>>2],t=e&2?C[z+12>>>2]:C[a+-4>>>2]>>>p;return F(p,e&2048,e&4096).subarray(a>>>=p,a+t)}_.__getArrayView=k;function m(z){let C=k(z),b=C.length,e=Array(b);for(let p=0;p<b;p++)e[p]=C[p];return e}_.__getArray=m;function f(z){let C=Q.buffer,b=new Uint32Array(C)[z+-4>>>2];return C.slice(z,z+b)}_.__getArrayBuffer=f;function l(z){if(!Z)throw Error("Operation requires compiling with --exportTable");let C=new Uint32Array(Q.buffer)[z>>>2];return Z.get(C)}_.__getFunction=l;function o(z,C,b){return new z(P(z,C,b))}function P(z,C,b){let e=Q.buffer,p=new Uint32Array(e);return new z(e,p[b+4>>>2],p[b+8>>>2]>>>C)}function x(z,C,b){_[`__get${C}`]=o.bind(null,z,b),_[`__get${C}View`]=P.bind(null,z,b)}if([Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array].forEach((z)=>{x(z,z.name,31-Math.clz32(z.BYTES_PER_ELEMENT))}),Fq)[BigUint64Array,BigInt64Array].forEach((z)=>{x(z,z.name.slice(3),3)});return _.memory=_.memory||Q,_.table=_.table||Z,Jq(j,_)}function v2(_){return typeof Response<"u"&&_ instanceof Response}function Hq(_){return _ instanceof WebAssembly.Module}async function G$(_,$={}){if(v2(_=await _))return P8(_,$);let j=Hq(_)?_:await WebAssembly.compile(_),Q=u2($),Z=await WebAssembly.instantiate(j,$),Y=f2(Q,Z);return{module:j,instance:Z,exports:Y}}async function P8(_,$={}){if(!WebAssembly.instantiateStreaming)return G$(v2(_=await _)?_.arrayBuffer():_,$);let j=u2($),Q=await WebAssembly.instantiateStreaming(_,$),Z=f2(j,Q.instance);return{...Q,exports:Z}}function Jq(_,$={}){let j=_.__argumentsLength?(Q)=>{_.__argumentsLength.value=Q}:_.__setArgumentsLength||_.__setargc||(()=>{});for(let Q of Object.keys(_)){let Z=_[Q],Y=Q.split("."),q=$;while(Y.length>1){let G=Y.shift();if(!Object.hasOwn(q,G))q[G]={};q=q[G]}let N=Y[0],K=N.indexOf("#");if(K>=0){let G=N.substring(0,K),X=q[G];if(typeof X>"u"||!X.prototype){let V=function(...U){return V.wrap(V.prototype.constructor(0,...U))};if(V.prototype={valueOf(){return this[c5]}},V.wrap=function(U){return Object.create(V.prototype,{[c5]:{value:U,writable:!1}})},X)Object.getOwnPropertyNames(X).forEach((U)=>Object.defineProperty(V,U,Object.getOwnPropertyDescriptor(X,U)));q[G]=V}if(N=N.substring(K+1),q=q[G].prototype,/^(get|set):/.test(N)){if(!Object.hasOwn(q,N=N.substring(4))){let V=_[Q.replace("set:","get:")],U=_[Q.replace("get:","set:")];Object.defineProperty(q,N,{get(){return V(this[c5])},set(W){U(this[c5],W)},enumerable:!0})}}else if(N==="constructor")(q[N]=function(...V){return j(V.length),Z(...V)}).original=Z;else(q[N]=function(...V){return j(V.length),Z(this[c5],...V)}).original=Z}else if(/^(get|set):/.test(N)){if(!Object.hasOwn(q,N=N.substring(4)))Object.defineProperty(q,N,{get:_[Q.replace("set:","get:")],set:_[Q.replace("get:","set:")],enumerable:!0})}else if(typeof Z==="function"&&Z!==j)(q[N]=(...G)=>{return j(G.length),Z(...G)}).original=Z;else q[N]=Z}return $}var Aq="/static/js/vendor/remote-display-decoder.wasm",y8=null;function g2(_){if(_ instanceof ArrayBuffer)return _;if(_.byteOffset===0&&_.byteLength===_.buffer.byteLength)return _.buffer;return _.slice().buffer}async function b2(){if(y8)return y8;return y8=(async()=>{try{let Q=function(Z,Y,q,N,K,G,X){let V=g2(Y),U=j.__pin(j.__newArrayBuffer(V));try{return j[Z](U,q,N,K,G,X.bitsPerPixel,X.bigEndian?1:0,X.trueColor?1:0,X.redMax,X.greenMax,X.blueMax,X.redShift,X.greenShift,X.blueShift)}finally{j.__unpin(U);try{j.__collect()}catch{}}},_=await fetch(Aq,{credentials:"same-origin"});if(!_.ok)throw Error(`HTTP ${_.status}`);let j=(typeof P8==="function"?await P8(_,{}):await G$(await _.arrayBuffer(),{})).exports;for(let Z of["initFramebuffer","getFramebufferPtr","getFramebufferLen","getFramebufferWidth","getFramebufferHeight","processRawRect","processCopyRect","processRreRect","processHextileRect","processZrleTileData","decodeRawRectToRgba"])if(typeof j[Z]!=="function")throw Error(`${Z} export is missing.`);return{initFramebuffer(Z,Y){j.initFramebuffer(Z,Y)},getFramebuffer(){let Z=j.getFramebufferPtr(),Y=j.getFramebufferLen();return new Uint8ClampedArray(new Uint8Array(j.memory.buffer,Z,Y).slice().buffer)},getFramebufferWidth(){return j.getFramebufferWidth()},getFramebufferHeight(){return j.getFramebufferHeight()},processRawRect(Z,Y,q,N,K,G){return Q("processRawRect",Z,Y,q,N,K,G)},processCopyRect(Z,Y,q,N,K,G){return j.processCopyRect(Z,Y,q,N,K,G)},processRreRect(Z,Y,q,N,K,G){return Q("processRreRect",Z,Y,q,N,K,G)},processHextileRect(Z,Y,q,N,K,G){return Q("processHextileRect",Z,Y,q,N,K,G)},processZrleTileData(Z,Y,q,N,K,G){return Q("processZrleTileData",Z,Y,q,N,K,G)},decodeRawRectToRgba(Z,Y,q,N){let K=g2(Z),G=j.__pin(j.__newArrayBuffer(K));try{let X=j.__pin(j.decodeRawRectToRgba(G,Y,q,N.bitsPerPixel,N.bigEndian?1:0,N.trueColor?1:0,N.redMax,N.greenMax,N.blueMax,N.redShift,N.greenShift,N.blueShift));try{return new Uint8ClampedArray(j.__getArrayBuffer(X))}finally{j.__unpin(X)}}finally{j.__unpin(G);try{j.__collect?.()}catch{}}}}}catch(_){return console.warn("[remote-display] Failed to load WASM pipeline, using JS fallback.",_),null}})(),y8}function L5(_,$,j){return Math.max($,Math.min(j,_))}function S8(_,$,j){let Q=new Uint8Array(6),Z=L5(Math.floor(Number($||0)),0,65535),Y=L5(Math.floor(Number(j||0)),0,65535);return Q[0]=5,Q[1]=L5(Math.floor(Number(_||0)),0,255),Q[2]=Z>>8&255,Q[3]=Z&255,Q[4]=Y>>8&255,Q[5]=Y&255,Q}function V$(_){switch(Number(_)){case 0:return 1;case 1:return 2;case 2:return 4;default:return 0}}function m2(_,$,j,Q,Z){let Y=Math.max(1,Math.floor(Number(Q||0))),q=Math.max(1,Math.floor(Number(Z||0))),N=Math.max(1,Number(j?.width||0)),K=Math.max(1,Number(j?.height||0)),G=(Number(_||0)-Number(j?.left||0))/N,X=(Number($||0)-Number(j?.top||0))/K;return{x:L5(Math.floor(G*Y),0,Math.max(0,Y-1)),y:L5(Math.floor(X*q),0,Math.max(0,q-1))}}function h2(_,$,j,Q=0){let Z=Number(_)<0?8:16,Y=L5(Number(Q||0)|Z,0,255);return[S8(Y,$,j),S8(Number(Q||0),$,j)]}function p2(_,$){let j=new Uint8Array(8),Q=Math.max(0,Math.min(4294967295,Number($||0)>>>0));return j[0]=4,j[1]=_?1:0,j[4]=Q>>>24&255,j[5]=Q>>>16&255,j[6]=Q>>>8&255,j[7]=Q&255,j}function l5(_){if(typeof _!=="string")return null;return _.length>0?_:null}function c2(_,$,j,Q){let Z=Math.max(1,Math.floor(Number(_||0))),Y=Math.max(1,Math.floor(Number($||0))),q=Math.max(1,Math.floor(Number(j||0))),N=Math.max(1,Math.floor(Number(Q||0))),K=Math.min(Z/q,Y/N);if(!Number.isFinite(K)||K<=0)return 1;return Math.max(0.01,K)}var X$={Backspace:65288,Tab:65289,Enter:65293,Escape:65307,Insert:65379,Delete:65535,Home:65360,End:65367,PageUp:65365,PageDown:65366,ArrowLeft:65361,ArrowUp:65362,ArrowRight:65363,ArrowDown:65364,Shift:65505,ShiftLeft:65505,ShiftRight:65506,Control:65507,ControlLeft:65507,ControlRight:65508,Alt:65513,AltLeft:65513,AltRight:65514,Meta:65515,MetaLeft:65515,MetaRight:65516,Super:65515,Super_L:65515,Super_R:65516,CapsLock:65509,NumLock:65407,ScrollLock:65300,Pause:65299,PrintScreen:65377,ContextMenu:65383,Menu:65383," ":32};for(let _=1;_<=12;_+=1)X$[`F${_}`]=65470+(_-1);function U$(_){let $=[_?.key,_?.code];for(let Y of $)if(Y&&Object.prototype.hasOwnProperty.call(X$,Y))return X$[Y];let j=String(_?.key||""),Q=j?j.codePointAt(0):null,Z=Q==null?0:Q>65535?2:1;if(Q!=null&&j.length===Z){if(Q<=255)return Q;return(16777216|Q)>>>0}return null}var R1=Uint8Array,H_=Uint16Array,A$=Int32Array,w8=new R1([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),R8=new R1([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),z$=new R1([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),i2=function(_,$){var j=new H_(31);for(var Q=0;Q<31;++Q)j[Q]=$+=1<<_[Q-1];var Z=new A$(j[30]);for(var Q=1;Q<30;++Q)for(var Y=j[Q];Y<j[Q+1];++Y)Z[Y]=Y-j[Q]<<5|Q;return{b:j,r:Z}},r2=i2(w8,2),o2=r2.b,H$=r2.r;o2[28]=258,H$[258]=28;var s2=i2(R8,0),Dq=s2.b,l2=s2.r,J$=new H_(32768);for(c0=0;c0<32768;++c0)a_=(c0&43690)>>1|(c0&21845)<<1,a_=(a_&52428)>>2|(a_&13107)<<2,a_=(a_&61680)>>4|(a_&3855)<<4,J$[c0]=((a_&65280)>>8|(a_&255)<<8)>>1;var a_,c0,t_=function(_,$,j){var Q=_.length,Z=0,Y=new H_($);for(;Z<Q;++Z)if(_[Z])++Y[_[Z]-1];var q=new H_($);for(Z=1;Z<$;++Z)q[Z]=q[Z-1]+Y[Z-1]<<1;var N;if(j){N=new H_(1<<$);var K=15-$;for(Z=0;Z<Q;++Z)if(_[Z]){var G=Z<<4|_[Z],X=$-_[Z],V=q[_[Z]-1]++<<X;for(var U=V|(1<<X)-1;V<=U;++V)N[J$[V]>>K]=G}}else{N=new H_(Q);for(Z=0;Z<Q;++Z)if(_[Z])N[Z]=J$[q[_[Z]-1]++]>>15-_[Z]}return N},T4=new R1(288);for(c0=0;c0<144;++c0)T4[c0]=8;var c0;for(c0=144;c0<256;++c0)T4[c0]=9;var c0;for(c0=256;c0<280;++c0)T4[c0]=7;var c0;for(c0=280;c0<288;++c0)T4[c0]=8;var c0,r5=new R1(32);for(c0=0;c0<32;++c0)r5[c0]=5;var c0,Eq=t_(T4,9,0),kq=t_(T4,9,1),Mq=t_(r5,5,0),Iq=t_(r5,5,1),B$=function(_){var $=_[0];for(var j=1;j<_.length;++j)if(_[j]>$)$=_[j];return $},p_=function(_,$,j){var Q=$/8|0;return(_[Q]|_[Q+1]<<8)>>($&7)&j},L$=function(_,$){var j=$/8|0;return(_[j]|_[j+1]<<8|_[j+2]<<16)>>($&7)},D$=function(_){return(_+7)/8|0},i5=function(_,$,j){if($==null||$<0)$=0;if(j==null||j>_.length)j=_.length;return new R1(_.subarray($,j))};var xq=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],L_=function(_,$,j){var Q=Error($||xq[_]);if(Q.code=_,Error.captureStackTrace)Error.captureStackTrace(Q,L_);if(!j)throw Q;return Q},Tq=function(_,$,j,Q){var Z=_.length,Y=Q?Q.length:0;if(!Z||$.f&&!$.l)return j||new R1(0);var q=!j,N=q||$.i!=2,K=$.i;if(q)j=new R1(Z*3);var G=function(o0){var J0=j.length;if(o0>J0){var P0=new R1(Math.max(J0*2,o0));P0.set(j),j=P0}},X=$.f||0,V=$.p||0,U=$.b||0,W=$.l,J=$.d,D=$.m,O=$.n,F=Z*8;do{if(!W){X=p_(_,V,1);var A=p_(_,V+1,3);if(V+=3,!A){var k=D$(V)+4,m=_[k-4]|_[k-3]<<8,f=k+m;if(f>Z){if(K)L_(0);break}if(N)G(U+m);j.set(_.subarray(k,f),U),$.b=U+=m,$.p=V=f*8,$.f=X;continue}else if(A==1)W=kq,J=Iq,D=9,O=5;else if(A==2){var l=p_(_,V,31)+257,o=p_(_,V+10,15)+4,P=l+p_(_,V+5,31)+1;V+=14;var x=new R1(P),z=new R1(19);for(var C=0;C<o;++C)z[z$[C]]=p_(_,V+C*3,7);V+=o*3;var b=B$(z),e=(1<<b)-1,p=t_(z,b,1);for(var C=0;C<P;){var a=p[p_(_,V,e)];V+=a&15;var k=a>>4;if(k<16)x[C++]=k;else{var t=0,_0=0;if(k==16)_0=3+p_(_,V,3),V+=2,t=x[C-1];else if(k==17)_0=3+p_(_,V,7),V+=3;else if(k==18)_0=11+p_(_,V,127),V+=7;while(_0--)x[C++]=t}}var K0=x.subarray(0,l),q0=x.subarray(l);D=B$(K0),O=B$(q0),W=t_(K0,D,1),J=t_(q0,O,1)}else L_(1);if(V>F){if(K)L_(0);break}}if(N)G(U+131072);var V0=(1<<D)-1,H0=(1<<O)-1,F0=V;for(;;F0=V){var t=W[L$(_,V)&V0],b0=t>>4;if(V+=t&15,V>F){if(K)L_(0);break}if(!t)L_(2);if(b0<256)j[U++]=b0;else if(b0==256){F0=V,W=null;break}else{var x0=b0-254;if(b0>264){var C=b0-257,k0=w8[C];x0=p_(_,V,(1<<k0)-1)+o2[C],V+=k0}var m0=J[L$(_,V)&H0],g0=m0>>4;if(!m0)L_(3);V+=m0&15;var q0=Dq[g0];if(g0>3){var k0=R8[g0];q0+=L$(_,V)&(1<<k0)-1,V+=k0}if(V>F){if(K)L_(0);break}if(N)G(U+131072);var l0=U+x0;if(U<q0){var r0=Y-q0,M0=Math.min(q0,l0);if(r0+U<0)L_(3);for(;U<M0;++U)j[U]=Q[r0+U]}for(;U<l0;++U)j[U]=j[U-q0]}}if($.l=W,$.p=F0,$.b=U,$.f=X,W)X=1,$.m=D,$.d=J,$.n=O}while(!X);return U!=j.length&&q?i5(j,0,U):j.subarray(0,U)},U4=function(_,$,j){j<<=$&7;var Q=$/8|0;_[Q]|=j,_[Q+1]|=j>>8},n5=function(_,$,j){j<<=$&7;var Q=$/8|0;_[Q]|=j,_[Q+1]|=j>>8,_[Q+2]|=j>>16},W$=function(_,$){var j=[];for(var Q=0;Q<_.length;++Q)if(_[Q])j.push({s:Q,f:_[Q]});var Z=j.length,Y=j.slice();if(!Z)return{t:t2,l:0};if(Z==1){var q=new R1(j[0].s+1);return q[j[0].s]=1,{t:q,l:1}}j.sort(function(f,l){return f.f-l.f}),j.push({s:-1,f:25001});var N=j[0],K=j[1],G=0,X=1,V=2;j[0]={s:-1,f:N.f+K.f,l:N,r:K};while(X!=Z-1)N=j[j[G].f<j[V].f?G++:V++],K=j[G!=X&&j[G].f<j[V].f?G++:V++],j[X++]={s:-1,f:N.f+K.f,l:N,r:K};var U=Y[0].s;for(var Q=1;Q<Z;++Q)if(Y[Q].s>U)U=Y[Q].s;var W=new H_(U+1),J=O$(j[X-1],W,0);if(J>$){var Q=0,D=0,O=J-$,F=1<<O;Y.sort(function(l,o){return W[o.s]-W[l.s]||l.f-o.f});for(;Q<Z;++Q){var A=Y[Q].s;if(W[A]>$)D+=F-(1<<J-W[A]),W[A]=$;else break}D>>=O;while(D>0){var k=Y[Q].s;if(W[k]<$)D-=1<<$-W[k]++-1;else++Q}for(;Q>=0&&D;--Q){var m=Y[Q].s;if(W[m]==$)--W[m],++D}J=$}return{t:new R1(W),l:J}},O$=function(_,$,j){return _.s==-1?Math.max(O$(_.l,$,j+1),O$(_.r,$,j+1)):$[_.s]=j},n2=function(_){var $=_.length;while($&&!_[--$]);var j=new H_(++$),Q=0,Z=_[0],Y=1,q=function(K){j[Q++]=K};for(var N=1;N<=$;++N)if(_[N]==Z&&N!=$)++Y;else{if(!Z&&Y>2){for(;Y>138;Y-=138)q(32754);if(Y>2)q(Y>10?Y-11<<5|28690:Y-3<<5|12305),Y=0}else if(Y>3){q(Z),--Y;for(;Y>6;Y-=6)q(8304);if(Y>2)q(Y-3<<5|8208),Y=0}while(Y--)q(Z);Y=1,Z=_[N]}return{c:j.subarray(0,Q),n:$}},d5=function(_,$){var j=0;for(var Q=0;Q<$.length;++Q)j+=_[Q]*$[Q];return j},a2=function(_,$,j){var Q=j.length,Z=D$($+2);_[Z]=Q&255,_[Z+1]=Q>>8,_[Z+2]=_[Z]^255,_[Z+3]=_[Z+1]^255;for(var Y=0;Y<Q;++Y)_[Z+Y+4]=j[Y];return(Z+4+Q)*8},d2=function(_,$,j,Q,Z,Y,q,N,K,G,X){U4($,X++,j),++Z[256];var V=W$(Z,15),U=V.t,W=V.l,J=W$(Y,15),D=J.t,O=J.l,F=n2(U),A=F.c,k=F.n,m=n2(D),f=m.c,l=m.n,o=new H_(19);for(var P=0;P<A.length;++P)++o[A[P]&31];for(var P=0;P<f.length;++P)++o[f[P]&31];var x=W$(o,7),z=x.t,C=x.l,b=19;for(;b>4&&!z[z$[b-1]];--b);var e=G+5<<3,p=d5(Z,T4)+d5(Y,r5)+q,a=d5(Z,U)+d5(Y,D)+q+14+3*b+d5(o,z)+2*o[16]+3*o[17]+7*o[18];if(K>=0&&e<=p&&e<=a)return a2($,X,_.subarray(K,K+G));var t,_0,K0,q0;if(U4($,X,1+(a<p)),X+=2,a<p){t=t_(U,W,0),_0=U,K0=t_(D,O,0),q0=D;var V0=t_(z,C,0);U4($,X,k-257),U4($,X+5,l-1),U4($,X+10,b-4),X+=14;for(var P=0;P<b;++P)U4($,X+3*P,z[z$[P]]);X+=3*b;var H0=[A,f];for(var F0=0;F0<2;++F0){var b0=H0[F0];for(var P=0;P<b0.length;++P){var x0=b0[P]&31;if(U4($,X,V0[x0]),X+=z[x0],x0>15)U4($,X,b0[P]>>5&127),X+=b0[P]>>12}}}else t=Eq,_0=T4,K0=Mq,q0=r5;for(var P=0;P<N;++P){var k0=Q[P];if(k0>255){var x0=k0>>18&31;if(n5($,X,t[x0+257]),X+=_0[x0+257],x0>7)U4($,X,k0>>23&31),X+=w8[x0];var m0=k0&31;if(n5($,X,K0[m0]),X+=q0[m0],m0>3)n5($,X,k0>>5&8191),X+=R8[m0]}else n5($,X,t[k0]),X+=_0[k0]}return n5($,X,t[256]),X+_0[256]},Cq=new A$([65540,131080,131088,131104,262176,1048704,1048832,2114560,2117632]),t2=new R1(0),Pq=function(_,$,j,Q,Z,Y){var q=Y.z||_.length,N=new R1(Q+q+5*(1+Math.ceil(q/7000))+Z),K=N.subarray(Q,N.length-Z),G=Y.l,X=(Y.r||0)&7;if($){if(X)K[0]=Y.r>>3;var V=Cq[$-1],U=V>>13,W=V&8191,J=(1<<j)-1,D=Y.p||new H_(32768),O=Y.h||new H_(J+1),F=Math.ceil(j/3),A=2*F,k=function(s0){return(_[s0]^_[s0+1]<<F^_[s0+2]<<A)&J},m=new A$(25000),f=new H_(288),l=new H_(32),o=0,P=0,x=Y.i||0,z=0,C=Y.w||0,b=0;for(;x+2<q;++x){var e=k(x),p=x&32767,a=O[e];if(D[p]=a,O[e]=p,C<=x){var t=q-x;if((o>7000||z>24576)&&(t>423||!G)){X=d2(_,K,0,m,f,l,P,z,b,x-b,X),z=o=P=0,b=x;for(var _0=0;_0<286;++_0)f[_0]=0;for(var _0=0;_0<30;++_0)l[_0]=0}var K0=2,q0=0,V0=W,H0=p-a&32767;if(t>2&&e==k(x-H0)){var F0=Math.min(U,t)-1,b0=Math.min(32767,x),x0=Math.min(258,t);while(H0<=b0&&--V0&&p!=a){if(_[x+K0]==_[x+K0-H0]){var k0=0;for(;k0<x0&&_[x+k0]==_[x+k0-H0];++k0);if(k0>K0){if(K0=k0,q0=H0,k0>F0)break;var m0=Math.min(H0,k0-2),g0=0;for(var _0=0;_0<m0;++_0){var l0=x-H0+_0&32767,r0=D[l0],M0=l0-r0&32767;if(M0>g0)g0=M0,a=l0}}}p=a,a=D[p],H0+=p-a&32767}}if(q0){m[z++]=268435456|H$[K0]<<18|l2[q0];var o0=H$[K0]&31,J0=l2[q0]&31;P+=w8[o0]+R8[J0],++f[257+o0],++l[J0],C=x+K0,++o}else m[z++]=_[x],++f[_[x]]}}for(x=Math.max(x,C);x<q;++x)m[z++]=_[x],++f[_[x]];if(X=d2(_,K,G,m,f,l,P,z,b,x-b,X),!G)Y.r=X&7|K[X/8|0]<<3,X-=7,Y.h=O,Y.p=D,Y.i=x,Y.w=C}else{for(var x=Y.w||0;x<q+G;x+=65535){var P0=x+65535;if(P0>=q)K[X/8|0]=G,P0=q;X=a2(K,X+1,_.subarray(x,P0))}Y.i=q}return i5(N,0,Q+D$(X)+Z)};var e2=function(){var _=1,$=0;return{p:function(j){var Q=_,Z=$,Y=j.length|0;for(var q=0;q!=Y;){var N=Math.min(q+2655,Y);for(;q<N;++q)Z+=Q+=j[q];Q=(Q&65535)+15*(Q>>16),Z=(Z&65535)+15*(Z>>16)}_=Q,$=Z},d:function(){return _%=65521,$%=65521,(_&255)<<24|(_&65280)<<8|($&255)<<8|$>>8}}},yq=function(_,$,j,Q,Z){if(!Z){if(Z={l:1},$.dictionary){var Y=$.dictionary.subarray(-32768),q=new R1(Y.length+_.length);q.set(Y),q.set(_,Y.length),_=q,Z.w=Y.length}}return Pq(_,$.level==null?6:$.level,$.mem==null?Z.l?Math.ceil(Math.max(8,Math.min(13,Math.log(_.length)))*1.5):20:12+$.mem,j,Q,Z)};var _7=function(_,$,j){for(;j;++$)_[$]=j,j>>>=8};var Sq=function(_,$){var j=$.level,Q=j==0?0:j<6?1:j==9?3:2;if(_[0]=120,_[1]=Q<<6|($.dictionary&&32),_[1]|=31-(_[0]<<8|_[1])%31,$.dictionary){var Z=e2();Z.p($.dictionary),_7(_,2,Z.d())}},wq=function(_,$){if((_[0]&15)!=8||_[0]>>4>7||(_[0]<<8|_[1])%31)L_(6,"invalid zlib data");if((_[1]>>5&1)==+!$)L_(6,"invalid zlib data: "+(_[1]&32?"need":"unexpected")+" dictionary");return(_[1]>>3&4)+2};var F$=function(){function _($,j){if(typeof $=="function")j=$,$={};this.ondata=j;var Q=$&&$.dictionary&&$.dictionary.subarray(-32768);if(this.s={i:0,b:Q?Q.length:0},this.o=new R1(32768),this.p=new R1(0),Q)this.o.set(Q)}return _.prototype.e=function($){if(!this.ondata)L_(5);if(this.d)L_(4);if(!this.p.length)this.p=$;else if($.length){var j=new R1(this.p.length+$.length);j.set(this.p),j.set($,this.p.length),this.p=j}},_.prototype.c=function($){this.s.i=+(this.d=$||!1);var j=this.s.b,Q=Tq(this.p,this.s,this.o);this.ondata(i5(Q,j,this.s.b),this.d),this.o=i5(Q,this.s.b-32768),this.s.b=this.o.length,this.p=i5(this.p,this.s.p/8|0),this.s.p&=7},_.prototype.push=function($,j){this.e($),this.c(j)},_}();function $7(_,$){if(!$)$={};var j=e2();j.p(_);var Q=yq(_,$,$.dictionary?6:2,4);return Sq(Q,$),_7(Q,Q.length-4,j.d()),Q}var j7=function(){function _($,j){F$.call(this,$,j),this.v=$&&$.dictionary?2:1}return _.prototype.push=function($,j){if(F$.prototype.e.call(this,$),this.v){if(this.p.length<6&&!j)return;this.p=this.p.subarray(wq(this.p,this.v-1)),this.v=0}if(j){if(this.p.length<4)L_(6,"invalid zlib data");this.p=this.p.subarray(0,-4)}F$.prototype.c.call(this,j)},_}();var Rq=typeof TextDecoder<"u"&&new TextDecoder,uq=0;try{Rq.decode(t2,{stream:!0}),uq=1}catch(_){}var fq=[58,50,42,34,26,18,10,2,60,52,44,36,28,20,12,4,62,54,46,38,30,22,14,6,64,56,48,40,32,24,16,8,57,49,41,33,25,17,9,1,59,51,43,35,27,19,11,3,61,53,45,37,29,21,13,5,63,55,47,39,31,23,15,7],vq=[40,8,48,16,56,24,64,32,39,7,47,15,55,23,63,31,38,6,46,14,54,22,62,30,37,5,45,13,53,21,61,29,36,4,44,12,52,20,60,28,35,3,43,11,51,19,59,27,34,2,42,10,50,18,58,26,33,1,41,9,49,17,57,25],gq=[32,1,2,3,4,5,4,5,6,7,8,9,8,9,10,11,12,13,12,13,14,15,16,17,16,17,18,19,20,21,20,21,22,23,24,25,24,25,26,27,28,29,28,29,30,31,32,1],bq=[16,7,20,21,29,12,28,17,1,15,23,26,5,18,31,10,2,8,24,14,32,27,3,9,19,13,30,6,22,11,4,25],mq=[57,49,41,33,25,17,9,1,58,50,42,34,26,18,10,2,59,51,43,35,27,19,11,3,60,52,44,36,63,55,47,39,31,23,15,7,62,54,46,38,30,22,14,6,61,53,45,37,29,21,13,5,28,20,12,4],hq=[14,17,11,24,1,5,3,28,15,6,21,10,23,19,12,4,26,8,16,7,27,20,13,2,41,52,31,37,47,55,30,40,51,45,33,48,44,49,39,56,34,53,46,42,50,36,29,32],pq=[1,1,2,2,2,2,2,2,1,2,2,2,2,2,2,1],cq=[[[14,4,13,1,2,15,11,8,3,10,6,12,5,9,0,7],[0,15,7,4,14,2,13,1,10,6,12,11,9,5,3,8],[4,1,14,8,13,6,2,11,15,12,9,7,3,10,5,0],[15,12,8,2,4,9,1,7,5,11,3,14,10,0,6,13]],[[15,1,8,14,6,11,3,4,9,7,2,13,12,0,5,10],[3,13,4,7,15,2,8,14,12,0,1,10,6,9,11,5],[0,14,7,11,10,4,13,1,5,8,12,6,9,3,2,15],[13,8,10,1,3,15,4,2,11,6,7,12,0,5,14,9]],[[10,0,9,14,6,3,15,5,1,13,12,7,11,4,2,8],[13,7,0,9,3,4,6,10,2,8,5,14,12,11,15,1],[13,6,4,9,8,15,3,0,11,1,2,12,5,10,14,7],[1,10,13,0,6,9,8,7,4,15,14,3,11,5,2,12]],[[7,13,14,3,0,6,9,10,1,2,8,5,11,12,4,15],[13,8,11,5,6,15,0,3,4,7,2,12,1,10,14,9],[10,6,9,0,12,11,7,13,15,1,3,14,5,2,8,4],[3,15,0,6,10,1,13,8,9,4,5,11,12,7,2,14]],[[2,12,4,1,7,10,11,6,8,5,3,15,13,0,14,9],[14,11,2,12,4,7,13,1,5,0,15,10,3,9,8,6],[4,2,1,11,10,13,7,8,15,9,12,5,6,3,0,14],[11,8,12,7,1,14,2,13,6,15,0,9,10,4,5,3]],[[12,1,10,15,9,2,6,8,0,13,3,4,14,7,5,11],[10,15,4,2,7,12,9,5,6,1,13,14,0,11,3,8],[9,14,15,5,2,8,12,3,7,0,4,10,1,13,11,6],[4,3,2,12,9,5,15,10,11,14,1,7,6,0,8,13]],[[4,11,2,14,15,0,8,13,3,12,9,7,5,10,6,1],[13,0,11,7,4,9,1,10,14,3,5,12,2,15,8,6],[1,4,11,13,12,3,7,14,10,15,6,8,0,5,9,2],[6,11,13,8,1,4,10,7,9,5,0,15,14,2,3,12]],[[13,2,8,4,6,15,11,1,10,9,3,14,5,0,12,7],[1,15,13,8,10,3,7,4,12,5,6,11,0,14,9,2],[7,11,4,1,9,12,14,2,0,6,10,13,15,3,5,8],[2,1,14,7,4,10,8,13,15,12,9,0,3,5,6,11]]],Y7=new Uint8Array(256);for(let _=0;_<256;_+=1){let $=0;for(let j=0;j<8;j+=1)$=$<<1|_>>j&1;Y7[_]=$}function q7(_){if(_ instanceof Uint8Array)return _;if(_ instanceof ArrayBuffer)return new Uint8Array(_);if(ArrayBuffer.isView(_))return new Uint8Array(_.buffer,_.byteOffset,_.byteLength);return new Uint8Array(0)}function N7(_){let $=0n,j=q7(_);for(let Q of j)$=$<<8n|BigInt(Q);return $}function lq(_,$){let j=new Uint8Array($),Q=BigInt(_);for(let Z=$-1;Z>=0;Z-=1)j[Z]=Number(Q&0xffn),Q>>=8n;return j}function W5(_,$,j){let Q=0n;for(let Z of $){let Y=BigInt(_)>>BigInt(j-Z)&1n;Q=Q<<1n|Y}return Q}function Q7(_,$){let j=28n,Q=(1n<<j)-1n,Z=BigInt($%28);return(_<<Z|_>>j-Z)&Q}function nq(_){let $=W5(N7(_),mq,64),j=$>>28n&0x0fffffffn,Q=$&0x0fffffffn,Z=[];for(let Y of pq){j=Q7(j,Y),Q=Q7(Q,Y);let q=j<<28n|Q;Z.push(W5(q,hq,56))}return Z}function dq(_){let $=0n;for(let j=0;j<8;j+=1){let Q=BigInt((7-j)*6),Z=Number(_>>Q&0x3fn),Y=(Z&32)>>4|Z&1,q=Z>>1&15;$=$<<4n|BigInt(cq[j][Y][q])}return $}function iq(_,$){let j=W5(_,gq,32)^BigInt($),Q=dq(j);return W5(Q,bq,32)}function Z7(_,$){let j=nq($),Q=W5(N7(_),fq,64),Z=Q>>32n&0xffffffffn,Y=Q&0xffffffffn;for(let N of j){let K=Y,G=(Z^iq(Y,N))&0xffffffffn;Z=K,Y=G}let q=Y<<32n|Z;return lq(W5(q,vq,64),8)}function rq(_){let $=String(_??""),j=new Uint8Array(8);for(let Q=0;Q<8;Q+=1){let Z=Q<$.length?$.charCodeAt(Q)&255:0;j[Q]=Y7[Z]}return j}function K7(_,$){let j=q7($);if(j.byteLength!==16)throw Error(`Invalid VNC auth challenge length ${j.byteLength}; expected 16 bytes.`);let Q=rq(_),Z=new Uint8Array(16);return Z.set(Z7(j.slice(0,8),Q),0),Z.set(Z7(j.slice(8,16),Q),8),Z}var c_="vnc";function oq(_){return Number(_)}function sq(_){let $=Array.isArray(_)?_:typeof _==="string"?_.split(",").map((Z)=>Z.trim()).filter((Z)=>Z.length>0):[],j=[],Q=new Set;for(let Z of $){let Y=oq(Z);if(!Number.isFinite(Y))continue;let q=Number(Y);if(!Q.has(q))j.push(q),Q.add(q)}if(j.length>0)return j;return[5,2,1,0,-223]}function H5(_){if(_ instanceof Uint8Array)return _;if(_ instanceof ArrayBuffer)return new Uint8Array(_);if(ArrayBuffer.isView(_))return new Uint8Array(_.buffer,_.byteOffset,_.byteLength);return new Uint8Array(0)}function aq(_,$){let j=H5(_),Q=H5($);if(!j.byteLength)return new Uint8Array(Q);if(!Q.byteLength)return new Uint8Array(j);let Z=new Uint8Array(j.byteLength+Q.byteLength);return Z.set(j,0),Z.set(Q,j.byteLength),Z}function tq(_){let $=0;for(let Z of _||[])$+=Z?.byteLength||0;let j=new Uint8Array($),Q=0;for(let Z of _||[]){let Y=H5(Z);j.set(Y,Q),Q+=Y.byteLength}return j}function eq(){return(_)=>{let $=H5(_);try{let j=[],Q=new j7((Z)=>{j.push(new Uint8Array(Z))});if(Q.push($,!0),Q.err)throw Error(Q.msg||"zlib decompression error");return tq(j)}catch(j){try{let Q=$7($);return Q instanceof Uint8Array?Q:new Uint8Array(Q)}catch(Q){let Z=Q instanceof Error?Q.message:"unexpected EOF";throw Error(`unexpected EOF: ${Z}`)}}}}function _N(_){return new TextEncoder().encode(String(_||""))}function F5(_){return new TextDecoder().decode(H5(_))}function $N(_){let $=/^RFB (\d{3})\.(\d{3})\n$/.exec(String(_||""));if(!$)return null;return{major:parseInt($[1],10),minor:parseInt($[2],10),text:$[0]}}function jN(_){if(!_)return`RFB 003.008
`;if(_.major>3||_.minor>=8)return`RFB 003.008
`;if(_.minor>=7)return`RFB 003.007
`;return`RFB 003.003
`}function G7(_,$=0){return{bitsPerPixel:_.getUint8($),depth:_.getUint8($+1),bigEndian:_.getUint8($+2)===1,trueColor:_.getUint8($+3)===1,redMax:_.getUint16($+4,!1),greenMax:_.getUint16($+6,!1),blueMax:_.getUint16($+8,!1),redShift:_.getUint8($+10),greenShift:_.getUint8($+11),blueShift:_.getUint8($+12)}}function QN(_){let $=new ArrayBuffer(20),j=new DataView($);return j.setUint8(0,0),j.setUint8(1,0),j.setUint8(2,0),j.setUint8(3,0),j.setUint8(4,_.bitsPerPixel),j.setUint8(5,_.depth),j.setUint8(6,_.bigEndian?1:0),j.setUint8(7,_.trueColor?1:0),j.setUint16(8,_.redMax,!1),j.setUint16(10,_.greenMax,!1),j.setUint16(12,_.blueMax,!1),j.setUint8(14,_.redShift),j.setUint8(15,_.greenShift),j.setUint8(16,_.blueShift),new Uint8Array($)}function ZN(_){let $=Array.isArray(_)?_:[],j=new ArrayBuffer(4+$.length*4),Q=new DataView(j);Q.setUint8(0,2),Q.setUint8(1,0),Q.setUint16(2,$.length,!1);let Z=4;for(let Y of $)Q.setInt32(Z,Number(Y||0),!1),Z+=4;return new Uint8Array(j)}function X7(_,$,j,Q=0,Z=0){let Y=new ArrayBuffer(10),q=new DataView(Y);return q.setUint8(0,3),q.setUint8(1,_?1:0),q.setUint16(2,Q,!1),q.setUint16(4,Z,!1),q.setUint16(6,Math.max(0,$||0),!1),q.setUint16(8,Math.max(0,j||0),!1),new Uint8Array(Y)}function z5(_,$){let j=Number($||0);if(j<=0)return 0;if(j===255)return _&255;return Math.max(0,Math.min(255,Math.round((_||0)*255/j)))}function U7(_,$,j,Q){if(j===1)return _[$];if(j===2)return Q?(_[$]<<8|_[$+1])>>>0:(_[$]|_[$+1]<<8)>>>0;if(j===3)return Q?(_[$]<<16|_[$+1]<<8|_[$+2])>>>0:(_[$]|_[$+1]<<8|_[$+2]<<16)>>>0;if(j===4)return Q?(_[$]<<24>>>0|_[$+1]<<16|_[$+2]<<8|_[$+3])>>>0:(_[$]|_[$+1]<<8|_[$+2]<<16|_[$+3]<<24>>>0)>>>0;return 0}function YN(_,$,j,Q){let Z=Q||J5,Y=H5(_),q=Math.max(1,Math.floor(Number(Z.bitsPerPixel||0)/8)),N=Math.max(0,$||0)*Math.max(0,j||0)*q;if(Y.byteLength<N)throw Error(`Incomplete raw rectangle payload: expected ${N} byte(s), got ${Y.byteLength}`);if(!Z.trueColor)throw Error("Indexed-colour VNC framebuffers are not supported yet.");let K=new Uint8ClampedArray(Math.max(0,$||0)*Math.max(0,j||0)*4),G=0,X=0;for(let V=0;V<Math.max(0,$||0)*Math.max(0,j||0);V+=1){let U=U7(Y,G,q,Z.bigEndian),W=z5(U>>>Z.redShift&Z.redMax,Z.redMax),J=z5(U>>>Z.greenShift&Z.greenMax,Z.greenMax),D=z5(U>>>Z.blueShift&Z.blueMax,Z.blueMax);K[X]=W,K[X+1]=J,K[X+2]=D,K[X+3]=255,G+=q,X+=4}return K}function B4(_,$,j){let Q=j||J5,Z=Math.max(1,Math.floor(Number(Q.bitsPerPixel||0)/8));if(_.byteLength<$+Z)return null;let Y=U7(_,$,Z,Q.bigEndian);return{rgba:[z5(Y>>>Q.redShift&Q.redMax,Q.redMax),z5(Y>>>Q.greenShift&Q.greenMax,Q.greenMax),z5(Y>>>Q.blueShift&Q.blueMax,Q.blueMax),255],bytesPerPixel:Z}}function C4(_,$,j,Q,Z,Y,q){if(!q)return;for(let N=0;N<Y;N+=1)for(let K=0;K<Z;K+=1){let G=((Q+N)*$+(j+K))*4;_[G]=q[0],_[G+1]=q[1],_[G+2]=q[2],_[G+3]=q[3]}}function B7(_,$,j,Q,Z,Y,q){for(let N=0;N<Y;N+=1){let K=N*Z*4,G=((Q+N)*$+j)*4;_.set(q.subarray(K,K+Z*4),G)}}function V7(_,$){let j=$,Q=1;while(!0){if(_.byteLength<j+1)return null;let Z=_[j++];if(Q+=Z,Z!==255)break}return{consumed:j-$,runLength:Q}}function qN(_,$,j,Q,Z,Y,q){let N=Z||J5,K=Math.max(1,Math.floor(Number(N.bitsPerPixel||0)/8));if(_.byteLength<$+4)return null;let G=new DataView(_.buffer,_.byteOffset+$,4).getUint32(0,!1);if(_.byteLength<$+4+G)return null;let X=_.slice($+4,$+4+G),V;try{V=q(X)}catch{return{consumed:4+G,skipped:!0}}let U=0,W=new Uint8ClampedArray(Math.max(0,j||0)*Math.max(0,Q||0)*4);for(let J=0;J<Q;J+=64){let D=Math.min(64,Q-J);for(let O=0;O<j;O+=64){let F=Math.min(64,j-O);if(V.byteLength<U+1)return null;let A=V[U++],k=A&127,m=(A&128)!==0;if(!m&&k===0){let f=F*D*K;if(V.byteLength<U+f)return null;let l=Y(V.slice(U,U+f),F,D,N);U+=f,B7(W,j,O,J,F,D,l);continue}if(!m&&k===1){let f=B4(V,U,N);if(!f)return null;U+=f.bytesPerPixel,C4(W,j,O,J,F,D,f.rgba);continue}if(!m&&k>1&&k<=16){let f=[];for(let x=0;x<k;x+=1){let z=B4(V,U,N);if(!z)return null;U+=z.bytesPerPixel,f.push(z.rgba)}let l=k<=2?1:k<=4?2:4,o=Math.ceil(F*l/8),P=o*D;if(V.byteLength<U+P)return null;for(let x=0;x<D;x+=1){let z=U+x*o;for(let C=0;C<F;C+=1){let b=C*l,e=z+(b>>3),p=8-l-(b&7),a=V[e]>>p&(1<<l)-1;C4(W,j,O+C,J+x,1,1,f[a])}}U+=P;continue}if(m&&k===0){let f=0,l=0;while(l<D){let o=B4(V,U,N);if(!o)return null;U+=o.bytesPerPixel;let P=V7(V,U);if(!P)return null;U+=P.consumed;for(let x=0;x<P.runLength;x+=1)if(C4(W,j,O+f,J+l,1,1,o.rgba),f+=1,f>=F){if(f=0,l+=1,l>=D)break}}continue}if(m&&k>0){let f=[];for(let P=0;P<k;P+=1){let x=B4(V,U,N);if(!x)return null;U+=x.bytesPerPixel,f.push(x.rgba)}let l=0,o=0;while(o<D){if(V.byteLength<U+1)return null;let P=V[U++],x=P,z=1;if(P&128){x=P&127;let b=V7(V,U);if(!b)return null;U+=b.consumed,z=b.runLength}let C=f[x];if(!C)return null;for(let b=0;b<z;b+=1)if(C4(W,j,O+l,J+o,1,1,C),l+=1,l>=F){if(l=0,o+=1,o>=D)break}}continue}return{consumed:4+G,skipped:!0}}}return{consumed:4+G,rgba:W,decompressed:V}}function NN(_,$,j,Q,Z){let Y=Z||J5,q=Math.max(1,Math.floor(Number(Y.bitsPerPixel||0)/8));if(_.byteLength<$+4+q)return null;let K=new DataView(_.buffer,_.byteOffset+$,_.byteLength-$).getUint32(0,!1),G=4+q+K*(q+8);if(_.byteLength<$+G)return null;let X=$+4,V=B4(_,X,Y);if(!V)return null;X+=V.bytesPerPixel;let U=new Uint8ClampedArray(Math.max(0,j||0)*Math.max(0,Q||0)*4);C4(U,j,0,0,j,Q,V.rgba);for(let W=0;W<K;W+=1){let J=B4(_,X,Y);if(!J)return null;if(X+=J.bytesPerPixel,_.byteLength<X+8)return null;let D=new DataView(_.buffer,_.byteOffset+X,8),O=D.getUint16(0,!1),F=D.getUint16(2,!1),A=D.getUint16(4,!1),k=D.getUint16(6,!1);X+=8,C4(U,j,O,F,A,k,J.rgba)}return{consumed:X-$,rgba:U}}function KN(_,$,j,Q,Z,Y){let q=Z||J5,N=Math.max(1,Math.floor(Number(q.bitsPerPixel||0)/8)),K=new Uint8ClampedArray(Math.max(0,j||0)*Math.max(0,Q||0)*4),G=$,X=[0,0,0,255],V=[255,255,255,255];for(let U=0;U<Q;U+=16){let W=Math.min(16,Q-U);for(let J=0;J<j;J+=16){let D=Math.min(16,j-J);if(_.byteLength<G+1)return null;let O=_[G++];if(O&1){let F=D*W*N;if(_.byteLength<G+F)return null;let A=Y(_.slice(G,G+F),D,W,q);G+=F,B7(K,j,J,U,D,W,A);continue}if(O&2){let F=B4(_,G,q);if(!F)return null;X=F.rgba,G+=F.bytesPerPixel}if(C4(K,j,J,U,D,W,X),O&4){let F=B4(_,G,q);if(!F)return null;V=F.rgba,G+=F.bytesPerPixel}if(O&8){if(_.byteLength<G+1)return null;let F=_[G++];for(let A=0;A<F;A+=1){let k=V;if(O&16){let z=B4(_,G,q);if(!z)return null;k=z.rgba,G+=z.bytesPerPixel}if(_.byteLength<G+2)return null;let m=_[G++],f=_[G++],l=m>>4,o=m&15,P=(f>>4)+1,x=(f&15)+1;C4(K,j,J+l,U+o,P,x,k)}}}}return{consumed:G-$,rgba:K}}var J5={bitsPerPixel:32,depth:24,bigEndian:!1,trueColor:!0,redMax:255,greenMax:255,blueMax:255,redShift:16,greenShift:8,blueShift:0};class u8{protocol=c_;constructor(_={}){this.shared=_.shared!==!1,this.decodeRawRect=typeof _.decodeRawRect==="function"?_.decodeRawRect:YN,this.pipeline=_.pipeline||null,this.encodings=sq(_.encodings||null),this.state="version",this.buffer=new Uint8Array(0),this.serverVersion=null,this.clientVersionText=null,this.framebufferWidth=0,this.framebufferHeight=0,this.serverName="",this.serverPixelFormat=null,this.clientPixelFormat={...J5},this.password=typeof _.password==="string"&&_.password.length>0?_.password:null,this.inflateZrle=typeof _.inflateZrle==="function"?_.inflateZrle:eq()}receive(_){if(_)this.buffer=aq(this.buffer,_);let $=[],j=[],Q=!0;while(Q){if(Q=!1,this.state==="version"){if(this.buffer.byteLength<12)break;let Z=this.consume(12),Y=F5(Z),q=$N(Y);if(!q)throw Error(`Unsupported RFB version banner: ${Y||"<empty>"}`);this.serverVersion=q,this.clientVersionText=jN(q),j.push(_N(this.clientVersionText)),$.push({type:"protocol-version",protocol:c_,server:q.text.trim(),client:this.clientVersionText.trim()}),this.state=q.minor>=7?"security-types":"security-type-33",Q=!0;continue}if(this.state==="security-types"){if(this.buffer.byteLength<1)break;let Z=this.buffer[0];if(Z===0){if(this.buffer.byteLength<5)break;let K=new DataView(this.buffer.buffer,this.buffer.byteOffset,this.buffer.byteLength).getUint32(1,!1);if(this.buffer.byteLength<5+K)break;this.consume(1);let G=F5(this.consume(4+K).slice(4));throw Error(G||"VNC server rejected the connection.")}if(this.buffer.byteLength<1+Z)break;this.consume(1);let Y=Array.from(this.consume(Z));$.push({type:"security-types",protocol:c_,types:Y});let q=null;if(Y.includes(2)&&this.password!==null)q=2;else if(Y.includes(1))q=1;else if(Y.includes(2))throw Error("VNC password authentication is required. Enter a password and reconnect.");else throw Error(`Unsupported VNC security types: ${Y.join(", ")||"none"}. This viewer currently supports only "None" and password-based VNC auth.`);j.push(Uint8Array.of(q)),$.push({type:"security-selected",protocol:c_,securityType:q,label:q===2?"VNC Authentication":"None"}),this.state=q===2?"security-challenge":"security-result",Q=!0;continue}if(this.state==="security-type-33"){if(this.buffer.byteLength<4)break;let Y=new DataView(this.buffer.buffer,this.buffer.byteOffset,this.buffer.byteLength).getUint32(0,!1);if(this.consume(4),Y===0){if(this.buffer.byteLength<4)break;let N=new DataView(this.buffer.buffer,this.buffer.byteOffset,this.buffer.byteLength).getUint32(0,!1);if(this.buffer.byteLength<4+N)break;let K=F5(this.consume(4+N).slice(4));throw Error(K||"VNC server rejected the connection.")}if(Y===2){if(this.password===null)throw Error("VNC password authentication is required. Enter a password and reconnect.");$.push({type:"security-selected",protocol:c_,securityType:2,label:"VNC Authentication"}),this.state="security-challenge",Q=!0;continue}if(Y!==1)throw Error(`Unsupported VNC security type ${Y}. This viewer currently supports only "None" and password-based VNC auth.`);$.push({type:"security-selected",protocol:c_,securityType:1,label:"None"}),j.push(Uint8Array.of(this.shared?1:0)),this.state="server-init",Q=!0;continue}if(this.state==="security-challenge"){if(this.buffer.byteLength<16)break;if(this.password===null)throw Error("VNC password authentication is required. Enter a password and reconnect.");let Z=this.consume(16);j.push(K7(this.password,Z)),this.state="security-result",Q=!0;continue}if(this.state==="security-result"){if(this.buffer.byteLength<4)break;let Y=new DataView(this.buffer.buffer,this.buffer.byteOffset,this.buffer.byteLength).getUint32(0,!1);if(this.consume(4),Y!==0){if(this.buffer.byteLength>=4){let q=new DataView(this.buffer.buffer,this.buffer.byteOffset,this.buffer.byteLength).getUint32(0,!1);if(this.buffer.byteLength>=4+q){let N=F5(this.consume(4+q).slice(4));throw Error(N||"VNC authentication failed.")}}throw Error("VNC authentication failed.")}$.push({type:"security-result",protocol:c_,ok:!0}),j.push(Uint8Array.of(this.shared?1:0)),this.state="server-init",Q=!0;continue}if(this.state==="server-init"){if(this.buffer.byteLength<24)break;let Z=new DataView(this.buffer.buffer,this.buffer.byteOffset,this.buffer.byteLength),Y=Z.getUint16(0,!1),q=Z.getUint16(2,!1),N=G7(Z,4),K=Z.getUint32(20,!1);if(this.buffer.byteLength<24+K)break;let G=this.consume(24),X=new DataView(G.buffer,G.byteOffset,G.byteLength);if(this.framebufferWidth=X.getUint16(0,!1),this.framebufferHeight=X.getUint16(2,!1),this.serverPixelFormat=G7(X,4),this.serverName=F5(this.consume(K)),this.state="connected",this.pipeline)this.pipeline.initFramebuffer(this.framebufferWidth,this.framebufferHeight);j.push(QN(this.clientPixelFormat)),j.push(ZN(this.encodings)),j.push(X7(!1,this.framebufferWidth,this.framebufferHeight)),$.push({type:"display-init",protocol:c_,width:Y,height:q,name:this.serverName,pixelFormat:N}),Q=!0;continue}if(this.state==="connected"){if(this.buffer.byteLength<1)break;let Z=this.buffer[0];if(Z===0){if(this.buffer.byteLength<4)break;let q=new DataView(this.buffer.buffer,this.buffer.byteOffset,this.buffer.byteLength).getUint16(2,!1),N=4,K=[],G=!1,X=!!this.pipeline;for(let U=0;U<q;U+=1){if(this.buffer.byteLength<N+12){G=!0;break}let W=new DataView(this.buffer.buffer,this.buffer.byteOffset+N,12),J=W.getUint16(0,!1),D=W.getUint16(2,!1),O=W.getUint16(4,!1),F=W.getUint16(6,!1),A=W.getInt32(8,!1);if(N+=12,A===0){let k=Math.max(1,Math.floor(Number(this.clientPixelFormat.bitsPerPixel||0)/8)),m=O*F*k;if(this.buffer.byteLength<N+m){G=!0;break}let f=this.buffer.slice(N,N+m);if(N+=m,X)this.pipeline.processRawRect(f,J,D,O,F,this.clientPixelFormat),K.push({kind:"pipeline",x:J,y:D,width:O,height:F});else K.push({kind:"rgba",x:J,y:D,width:O,height:F,rgba:this.decodeRawRect(f,O,F,this.clientPixelFormat)});continue}if(A===2){let k=NN(this.buffer,N,O,F,this.clientPixelFormat);if(!k){G=!0;break}if(X){let m=this.buffer.slice(N,N+k.consumed);this.pipeline.processRreRect(m,J,D,O,F,this.clientPixelFormat),K.push({kind:"pipeline",x:J,y:D,width:O,height:F})}else K.push({kind:"rgba",x:J,y:D,width:O,height:F,rgba:k.rgba});N+=k.consumed;continue}if(A===1){if(this.buffer.byteLength<N+4){G=!0;break}let k=new DataView(this.buffer.buffer,this.buffer.byteOffset+N,4),m=k.getUint16(0,!1),f=k.getUint16(2,!1);if(N+=4,X)this.pipeline.processCopyRect(J,D,O,F,m,f),K.push({kind:"pipeline",x:J,y:D,width:O,height:F});else K.push({kind:"copy",x:J,y:D,width:O,height:F,srcX:m,srcY:f});continue}if(A===16){let k=qN(this.buffer,N,O,F,this.clientPixelFormat,this.decodeRawRect,this.inflateZrle);if(!k){G=!0;break}if(N+=k.consumed,k.skipped)continue;if(X&&k.decompressed)this.pipeline.processZrleTileData(k.decompressed,J,D,O,F,this.clientPixelFormat),K.push({kind:"pipeline",x:J,y:D,width:O,height:F});else K.push({kind:"rgba",x:J,y:D,width:O,height:F,rgba:k.rgba});continue}if(A===5){let k=KN(this.buffer,N,O,F,this.clientPixelFormat,this.decodeRawRect);if(!k){G=!0;break}if(X){let m=this.buffer.slice(N,N+k.consumed);this.pipeline.processHextileRect(m,J,D,O,F,this.clientPixelFormat),K.push({kind:"pipeline",x:J,y:D,width:O,height:F})}else K.push({kind:"rgba",x:J,y:D,width:O,height:F,rgba:k.rgba});N+=k.consumed;continue}if(A===-223){if(this.framebufferWidth=O,this.framebufferHeight=F,X)this.pipeline.initFramebuffer(O,F);K.push({kind:"resize",x:J,y:D,width:O,height:F});continue}throw Error(`Unsupported VNC rectangle encoding ${A}. This viewer currently supports ZRLE, Hextile, RRE, CopyRect, raw rectangles, and DesktopSize only.`)}if(G)break;this.consume(N);let V={type:"framebuffer-update",protocol:c_,width:this.framebufferWidth,height:this.framebufferHeight,rects:K};if(X)V.framebuffer=this.pipeline.getFramebuffer();$.push(V),j.push(X7(!0,this.framebufferWidth,this.framebufferHeight)),Q=!0;continue}if(Z===2){this.consume(1),$.push({type:"bell",protocol:c_}),Q=!0;continue}if(Z===3){if(this.buffer.byteLength<8)break;let q=new DataView(this.buffer.buffer,this.buffer.byteOffset,this.buffer.byteLength).getUint32(4,!1);if(this.buffer.byteLength<8+q)break;this.consume(8);let N=F5(this.consume(q));$.push({type:"clipboard",protocol:c_,text:N}),Q=!0;continue}throw Error(`Unsupported VNC server message type ${Z}.`)}}return{events:$,outgoing:j}}consume(_){let $=this.buffer.slice(0,_);return this.buffer=this.buffer.slice(_),$}}var L4="piclaw://vnc";function GN(_){let $=String(_||"");if($===L4)return null;if(!$.startsWith(`${L4}/`))return null;let j=$.slice(`${L4}/`.length).trim();if(!j)return null;try{return decodeURIComponent(j)}catch{return j}}function i4(_){return String(_||"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}async function XN(_=null){let $=_?`/vnc/session?target=${encodeURIComponent(_)}`:"/vnc/session",j=await fetch($,{credentials:"same-origin"}),Q=await j.json().catch(()=>({}));if(!j.ok)throw Error(Q?.error||`HTTP ${j.status}`);return Q}async function VN(_){let $=`/vnc/handoff?target=${encodeURIComponent(String(_||"").trim())}`,j=await fetch($,{method:"POST",credentials:"same-origin"}),Q=await j.json().catch(()=>({}));if(!j.ok)throw Error(Q?.error||`HTTP ${j.status}`);return Q?.handoff||null}function UN(_,$=null){let j=window.location.protocol==="https:"?"wss:":"ws:",Q=new URL(`${j}//${window.location.host}/vnc/ws`);if(Q.searchParams.set("target",String(_||"")),$)Q.searchParams.set("handoff",String($));return Q.toString()}function BN(_,$){let j=String(_||"").trim(),Q=Math.floor(Number($||0));if(!j||!Number.isFinite(Q)||Q<=0||Q>65535)return null;return`${j.includes(":")&&!j.startsWith("[")?`[${j}]`:j}:${Q}`}function LN(_){if(typeof window>"u")return null;try{let $=new URL(window.location.href),j=$.searchParams.get(_)?.trim()||"";if(!j)return null;return $.searchParams.delete(_),window.history?.replaceState?.(window.history.state,document.title,$.toString()),j}catch{return null}}class L7{container;root;statusEl;bodyEl;metricsEl;targetSubtitleEl;socketBoundary=null;protocol=null;disposed=!1;targetId=null;targetLabel=null;bytesIn=0;bytesOut=0;canvas=null;canvasCtx=null;displayPlaceholderEl=null;displayInfoEl=null;displayMetaEl=null;displayStageEl=null;chromeEl=null;sessionShellEl=null;resizeObserver=null;displayScale=null;readOnly=!1;pointerButtonMask=0;pressedKeysyms=new Map;passwordInputEl=null;authPassword=null;directHostInputEl=null;directPortInputEl=null;directPasswordInputEl=null;hasRenderedFrame=!1;frameTimeoutId=null;reconnectTimerId=null;reconnectAttempts=0;rawFallbackAttempted=!1;protocolRecovering=!1;pendingHandoffToken=null;constructor(_,$){this.container=_,this.targetId=GN($?.path),this.targetLabel=this.targetId||null,this.pendingHandoffToken=LN("vnc_handoff"),this.root=document.createElement("div"),this.root.className="vnc-pane-shell",this.root.style.cssText="display:flex;flex-direction:column;width:100%;height:100%;background:var(--bg-primary);color:var(--text-primary);",this.targetSubtitleEl=null,this.statusEl=document.createElement("div"),this.statusEl.style.cssText="display:none;",this.statusEl.textContent="",this.bodyEl=document.createElement("div"),this.bodyEl.style.cssText="flex:1;min-height:0;display:flex;align-items:stretch;justify-content:stretch;padding:12px;",this.metricsEl=document.createElement("div"),this.metricsEl.style.cssText="display:none;",this.updateMetrics(),this.root.append(this.statusEl,this.bodyEl),this.container.appendChild(this.root),this.load()}setStatus(_){this.statusEl.textContent=String(_||"")}setSessionChromeVisible(_){if(this.chromeEl)this.chromeEl.style.display=_?"grid":"none";if(this.sessionShellEl?.style)this.sessionShellEl.style.gridTemplateRows=_?"auto minmax(0,1fr)":"1fr";if(this.displayStageEl?.style)this.displayStageEl.style.padding=_?"12px":"0",this.displayStageEl.style.border=_?"1px solid var(--border-color)":"none",this.displayStageEl.style.borderRadius=_?"16px":"0",this.displayStageEl.style.background=_?"#0a0a0a":"#000";if(this.displayPlaceholderEl?.style)this.displayPlaceholderEl.style.display=_&&!this.hasRenderedFrame?"block":"none"}clearReconnectTimer(){if(this.reconnectTimerId)clearTimeout(this.reconnectTimerId),this.reconnectTimerId=null}scheduleReconnect(){if(this.disposed||!this.targetId)return;this.clearReconnectTimer();let _=Math.min(8000,1500+this.reconnectAttempts*1000);this.reconnectAttempts+=1,this.reconnectTimerId=setTimeout(()=>{if(this.reconnectTimerId=null,this.disposed||!this.targetId)return;this.connectSocket()},_)}updateMetrics(){this.metricsEl.textContent=`Transport bytes — in: ${this.bytesIn} / out: ${this.bytesOut}`}applyMetrics(_){this.bytesIn=Number(_?.bytesIn||0),this.bytesOut=Number(_?.bytesOut||0),this.updateMetrics()}openTargetTab(_,$){if(this.targetId=String(_||"").trim()||null,this.targetLabel=String($||_||"").trim()||this.targetId||"VNC",this.targetId)this.renderTargetSession({direct_connect_enabled:!0,target:{id:this.targetId,label:this.targetLabel,read_only:!1,direct_connect:!0}}),this.setStatus("Connecting…"),this.updateDisplayInfo("Connecting…"),this.updateDisplayMeta("connecting");this.load()}requestPanePopout(_,$){this.container.dispatchEvent(new CustomEvent("pane:popout",{bubbles:!0,detail:{path:_,label:$}}))}resetLiveSession(){this.clearReconnectTimer(),this.reconnectAttempts=0,this.protocol=null;try{this.socketBoundary?.dispose?.()}catch{}this.socketBoundary=null;try{this.resizeObserver?.disconnect?.()}catch{}if(this.resizeObserver=null,this.canvas=null,this.canvasCtx=null,this.displayPlaceholderEl=null,this.displayInfoEl=null,this.displayMetaEl=null,this.displayStageEl=null,this.displayScale=null,this.passwordInputEl=null,this.directHostInputEl=null,this.directPortInputEl=null,this.directPasswordInputEl=null,this.hasRenderedFrame=!1,this.rawFallbackAttempted=!1,this.protocolRecovering=!1,this.frameTimeoutId)clearTimeout(this.frameTimeoutId),this.frameTimeoutId=null;this.pressedKeysyms.clear()}renderTargets(_){this.resetLiveSession();let $=Array.isArray(_?.targets)?_.targets:[],j=Boolean(_?.direct_connect_enabled);this.bodyEl.innerHTML=`
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
                        ${$.map((Z)=>`
                            <div style="text-align:left;padding:16px;border:1px solid var(--border-color);border-radius:14px;background:var(--bg-secondary);color:inherit;display:flex;flex-direction:column;gap:12px;">
                                <div>
                                    <div style="font-weight:600;margin-bottom:6px;">${i4(Z.label||Z.id)}</div>
                                    <div style="font:12px var(--font-family-mono, monospace);color:var(--text-secondary);">${i4(Z.id)}</div>
                                    <div style="margin-top:8px;font-size:12px;color:var(--text-secondary);">${Z.readOnly?"Read-only target":"Interactive target"}</div>
                                </div>
                                <div style="display:flex;flex-wrap:wrap;gap:8px;">
                                    <button type="button" data-target-open-tab="${i4(Z.id)}" data-target-label="${i4(Z.label||Z.id)}" style="padding:8px 12px;border:1px solid var(--border-color);border-radius:10px;background:var(--bg-primary);cursor:pointer;color:inherit;">Connect</button>
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
        `,this.directHostInputEl=this.bodyEl.querySelector("[data-vnc-direct-host]"),this.directPortInputEl=this.bodyEl.querySelector("[data-vnc-direct-port]"),this.directPasswordInputEl=this.bodyEl.querySelector("[data-vnc-direct-password]");let Q=()=>{let Z=BN(this.directHostInputEl?.value,this.directPortInputEl?.value);if(!Z)return;this.authPassword=l5(this.directPasswordInputEl?this.directPasswordInputEl.value:this.authPassword),this.openTargetTab(Z,Z)};this.directHostInputEl?.addEventListener("keydown",(Z)=>{if(Z.key!=="Enter")return;Z.preventDefault(),Q()}),this.directPortInputEl?.addEventListener("keydown",(Z)=>{if(Z.key!=="Enter")return;Z.preventDefault(),Q()}),this.directPasswordInputEl?.addEventListener("keydown",(Z)=>{if(Z.key!=="Enter")return;Z.preventDefault(),Q()}),this.bodyEl.querySelector("[data-direct-open-tab]")?.addEventListener("click",()=>Q());for(let Z of Array.from(this.bodyEl.querySelectorAll("[data-target-open-tab]")))Z.addEventListener("click",()=>{let Y=Z.getAttribute("data-target-open-tab"),q=Z.getAttribute("data-target-label")||Y||"VNC";if(!Y)return;this.openTargetTab(Y,q)})}renderTargetSession(_){this.resetLiveSession();let $=_?.target||{},j=$?.label||this.targetId||"VNC target";if(this.targetLabel=j,this.readOnly=Boolean($.read_only),this.pointerButtonMask=0,this.hasRenderedFrame=!1,this.pressedKeysyms.clear(),this.bodyEl.innerHTML=`
            <div data-vnc-session-shell style="width:100%;height:100%;min-height:0;display:grid;grid-template-rows:auto minmax(0,1fr);gap:12px;">
                <div data-vnc-session-chrome style="padding:10px 12px;border:1px solid var(--border-color);border-radius:14px;background:var(--bg-secondary);display:grid;gap:10px;">
                    <div style="display:grid;gap:4px;min-width:0;">
                        <div style="font:12px var(--font-family-mono, monospace);color:var(--text-secondary);white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">${i4($.id||this.targetId||"")} · ${$.read_only?"read-only":"interactive"} · websocket → TCP proxy</div>
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
                        <div style="font-weight:700;font-size:18px;margin-bottom:8px;">${i4(j)}</div>
                        <div style="font-size:13px;color:#b7b7b7;">Waiting for the VNC/RFB handshake and first framebuffer update…</div>
                    </div>
                </div>
            </div>
        `,this.sessionShellEl=this.bodyEl.querySelector("[data-vnc-session-shell]"),this.chromeEl=this.bodyEl.querySelector("[data-vnc-session-chrome]"),this.displayStageEl=this.bodyEl.querySelector("[data-display-stage]"),this.canvas=this.bodyEl.querySelector("[data-display-canvas]"),this.displayPlaceholderEl=this.bodyEl.querySelector("[data-display-placeholder]"),this.displayInfoEl=this.bodyEl.querySelector("[data-display-info]"),this.displayMetaEl=this.bodyEl.querySelector("[data-display-meta]"),this.canvasCtx=this.canvas?.getContext?.("2d",{alpha:!1})||null,this.canvasCtx)this.canvasCtx.imageSmoothingEnabled=!0,this.canvasCtx.imageSmoothingQuality="high";if(this.updateDisplayInfo("Waiting for VNC protocol negotiation…"),this.updateDisplayMeta(),this.setSessionChromeVisible(!0),this.attachDisplayResizeObserver(),this.attachCanvasPointerHandlers(),this.attachCanvasKeyboardHandlers(),this.passwordInputEl=this.bodyEl.querySelector("[data-vnc-password]"),this.passwordInputEl&&this.authPassword!==null)this.passwordInputEl.value=this.authPassword;this.passwordInputEl?.addEventListener("input",()=>{this.authPassword=l5(this.passwordInputEl.value)}),this.passwordInputEl?.addEventListener("keydown",(Y)=>{if(Y.key!=="Enter")return;Y.preventDefault(),this.connectSocket()}),this.bodyEl.querySelector("[data-vnc-reconnect]")?.addEventListener("click",()=>{this.authPassword=l5(this.passwordInputEl?this.passwordInputEl.value:this.authPassword),this.connectSocket()}),this.bodyEl.querySelector("[data-open-target-picker]")?.addEventListener("click",()=>{this.openTargetTab("","VNC")})}updateDisplayInfo(_){if(this.displayInfoEl)this.displayInfoEl.textContent=String(_||"")}updateDisplayMeta(_=""){if(!this.displayMetaEl)return;let $=this.protocol?.state?`state=${this.protocol.state}`:"state=idle",j=this.protocol?.framebufferWidth&&this.protocol?.framebufferHeight?`${this.protocol.framebufferWidth}×${this.protocol.framebufferHeight}`:"pending",Q=this.protocol?.serverName?` · name=${this.protocol.serverName}`:"",Z=this.displayScale?` · scale=${Math.round(this.displayScale*100)}%`:"",Y=_?` · ${_}`:"";this.displayMetaEl.textContent=`${$} · framebuffer=${j}${Q}${Z}${Y}`}ensureCanvasSize(_,$,j={}){if(!this.canvas||!this.canvasCtx||!_||!$)return;if(this.canvas.width!==_||this.canvas.height!==$)this.canvas.width=_,this.canvas.height=$;let Q=j?.reveal===!0;if(this.canvas.style.display=Q||this.hasRenderedFrame?"block":"none",this.canvas.style.aspectRatio=`${_} / ${$}`,this.displayPlaceholderEl)this.displayPlaceholderEl.style.display=Q||this.hasRenderedFrame?"none":"";this.updateCanvasScale()}attachDisplayResizeObserver(){if(!this.displayStageEl||typeof ResizeObserver>"u")return;try{this.resizeObserver?.disconnect?.()}catch{}this.resizeObserver=new ResizeObserver(()=>{this.updateCanvasScale()}),this.resizeObserver.observe(this.displayStageEl)}updateCanvasScale(){if(!this.canvas||!this.displayStageEl||!this.canvas.width||!this.canvas.height)return;requestAnimationFrame(()=>{if(!this.canvas||!this.displayStageEl)return;let _=this.displayStageEl.getBoundingClientRect?.(),$=Math.max(1,Math.floor(_?.width||this.displayStageEl.clientWidth||0)-32),j=Math.max(1,Math.floor(_?.height||this.displayStageEl.clientHeight||0)-32);if(!$||!j)return;let Q=c2($,j,this.canvas.width,this.canvas.height);this.displayScale=Q,this.canvas.style.width=`${Math.max(1,Math.round(this.canvas.width*Q))}px`,this.canvas.style.height=`${Math.max(1,Math.round(this.canvas.height*Q))}px`,this.updateDisplayMeta()})}getFramebufferPointFromEvent(_){if(!this.canvas||!this.protocol?.framebufferWidth||!this.protocol?.framebufferHeight)return null;let $=this.canvas.getBoundingClientRect?.();if(!$||!$.width||!$.height)return null;return m2(_.clientX,_.clientY,$,this.protocol.framebufferWidth,this.protocol.framebufferHeight)}sendPointerEvent(_,$,j){if(!this.socketBoundary||!this.protocol||this.protocol.state!=="connected")return;this.socketBoundary.send(S8(_,$,j))}attachCanvasPointerHandlers(){if(!this.canvas||this.readOnly)return;this.canvas.style.cursor="crosshair",this.canvas.style.touchAction="none",this.canvas.addEventListener("contextmenu",(_)=>{_.preventDefault()}),this.canvas.addEventListener("pointermove",(_)=>{let $=this.getFramebufferPointFromEvent(_);if(!$)return;this.sendPointerEvent(this.pointerButtonMask,$.x,$.y)}),this.canvas.addEventListener("pointerdown",(_)=>{let $=this.getFramebufferPointFromEvent(_);if(!$)return;_.preventDefault(),this.canvas?.focus?.();try{this.canvas?.setPointerCapture?.(_.pointerId)}catch{}this.pointerButtonMask|=V$(_.button),this.sendPointerEvent(this.pointerButtonMask,$.x,$.y)}),this.canvas.addEventListener("pointerup",(_)=>{let $=this.getFramebufferPointFromEvent(_);if(!$)return;_.preventDefault(),this.pointerButtonMask&=~V$(_.button),this.sendPointerEvent(this.pointerButtonMask,$.x,$.y);try{this.canvas?.releasePointerCapture?.(_.pointerId)}catch{}}),this.canvas.addEventListener("pointercancel",(_)=>{let $=this.getFramebufferPointFromEvent(_)||{x:0,y:0};this.pointerButtonMask=0,this.sendPointerEvent(0,$.x,$.y);try{this.canvas?.releasePointerCapture?.(_.pointerId)}catch{}}),this.canvas.addEventListener("wheel",(_)=>{let $=this.getFramebufferPointFromEvent(_);if(!$)return;_.preventDefault();for(let j of h2(_.deltaY,$.x,$.y,this.pointerButtonMask))this.socketBoundary?.send?.(j)},{passive:!1})}sendKeyEvent(_,$){if(!this.socketBoundary||!this.protocol||this.protocol.state!=="connected")return;this.socketBoundary.send(p2(_,$))}releasePressedKeys(){for(let _ of this.pressedKeysyms.values())this.sendKeyEvent(!1,_);this.pressedKeysyms.clear()}attachCanvasKeyboardHandlers(){if(!this.canvas||this.readOnly)return;this.canvas.addEventListener("keydown",(_)=>{let $=U$(_);if($==null)return;if(_.repeat&&this.pressedKeysyms.has(_.code||_.key)){_.preventDefault();return}_.preventDefault();let j=_.code||_.key;this.pressedKeysyms.set(j,$),this.sendKeyEvent(!0,$)}),this.canvas.addEventListener("keyup",(_)=>{let $=_.code||_.key,j=this.pressedKeysyms.get($)??U$(_);if(j==null)return;_.preventDefault(),this.pressedKeysyms.delete($),this.sendKeyEvent(!1,j)}),this.canvas.addEventListener("blur",()=>{this.releasePressedKeys()})}drawRgbaRect(_){if(!this.canvasCtx||!this.canvas)return;this.ensureCanvasSize(this.canvas.width||_.width,this.canvas.height||_.height,{reveal:!0});let $=new ImageData(_.rgba,_.width,_.height);this.canvasCtx.putImageData($,_.x,_.y),this.hasRenderedFrame=!0}copyCanvasRect(_){if(!this.canvasCtx||!this.canvas)return;this.ensureCanvasSize(this.canvas.width||_.width,this.canvas.height||_.height,{reveal:!0});let $=this.canvasCtx.getImageData(_.srcX,_.srcY,_.width,_.height);this.canvasCtx.putImageData($,_.x,_.y),this.hasRenderedFrame=!0}scheduleRawFallbackTimeout(){if(this.frameTimeoutId)clearTimeout(this.frameTimeoutId),this.frameTimeoutId=null;if(this.rawFallbackAttempted||this.protocolRecovering)return;this.frameTimeoutId=setTimeout(()=>{if(this.hasRenderedFrame||this.rawFallbackAttempted||this.protocolRecovering)return;if(this.protocol&&this.socketBoundary)this.rawFallbackAttempted=!0,this.protocolRecovering=!0,this.setStatus("No framebuffer update yet; retrying with RAW encoding."),this.updateDisplayInfo("No framebuffer update yet. Retrying with RAW encoding."),this.updateDisplayMeta("reconnect-encoding-fallback"),this.connectWithEncodings("0")},2200)}applyRemoteDisplayEvent(_){if(!_)return;switch(_.type){case"protocol-version":this.setStatus(`Negotiated ${_.protocol.toUpperCase()} ${_.server} → ${_.client}.`),this.updateDisplayInfo(`Negotiated ${_.server} → ${_.client}.`),this.updateDisplayMeta();return;case"security-types":this.setStatus(`Server offered security types: ${_.types.join(", ")||"none"}.`),this.updateDisplayInfo(`Security types: ${_.types.join(", ")||"none"}.`),this.updateDisplayMeta();return;case"security-selected":this.setStatus(`Using ${_.protocol.toUpperCase()} security type ${_.label}.`),this.updateDisplayInfo(`Security: ${_.label}.`),this.updateDisplayMeta();return;case"security-result":this.setStatus("Security negotiation complete. Waiting for server init…"),this.updateDisplayInfo("Security negotiation complete. Waiting for server init…"),this.updateDisplayMeta();return;case"display-init":this.ensureCanvasSize(_.width,_.height),this.setSessionChromeVisible(!1),this.setStatus(`Connected to ${this.targetLabel||this.targetId||"target"} — waiting for first framebuffer update (${_.width}×${_.height}).`),this.updateDisplayInfo(`Connected to ${_.name||this.targetLabel||this.targetId||"remote display"}. Waiting for first framebuffer update…`),this.updateDisplayMeta("awaiting-frame"),this.scheduleRawFallbackTimeout();return;case"framebuffer-update":if(this.frameTimeoutId)clearTimeout(this.frameTimeoutId),this.frameTimeoutId=null;let $=!1,j=(_.rects||[]).some((Q)=>Q.kind==="pipeline");if(_.framebuffer&&_.framebuffer.length>0&&_.width>0&&_.height>0&&j){this.ensureCanvasSize(_.width,_.height,{reveal:!0});for(let Z of _.rects||[])if(Z.kind==="resize")this.ensureCanvasSize(Z.width,Z.height);let Q=this.canvas?.getContext("2d",{alpha:!1});if(Q){let Z=new ImageData(new Uint8ClampedArray(_.framebuffer),_.width,_.height);Q.putImageData(Z,0,0),$=!0}}else for(let Q of _.rects||[]){if(Q.kind==="resize"){this.ensureCanvasSize(Q.width,Q.height);continue}if(Q.kind==="copy"){this.ensureCanvasSize(_.width,_.height,{reveal:!0}),this.copyCanvasRect(Q),$=!0;continue}if(Q.kind==="rgba")this.ensureCanvasSize(_.width,_.height,{reveal:!0}),this.drawRgbaRect(Q),$=!0}if($||this.hasRenderedFrame)this.protocolRecovering=!1,this.setStatus(`Rendering live framebuffer — ${_.width}×${_.height}.`),this.updateDisplayInfo(`Framebuffer update applied (${(_.rects||[]).length} rect${(_.rects||[]).length===1?"":"s"}).`),this.updateDisplayMeta();else this.setStatus(`Connected to ${this.targetLabel||this.targetId||"target"} — waiting for painted framebuffer data.`),this.updateDisplayInfo(`Framebuffer update received, but no paintable rects yet (${(_.rects||[]).length} rect${(_.rects||[]).length===1?"":"s"}).`),this.updateDisplayMeta("awaiting-frame"),this.scheduleRawFallbackTimeout();return;case"clipboard":this.setStatus("Remote clipboard updated."),this.updateDisplayInfo(`Clipboard text received (${_.text.length} chars).`),this.updateDisplayMeta();return;case"bell":this.setStatus("Remote display bell received."),this.updateDisplayInfo("Remote display bell received."),this.updateDisplayMeta();return}}async handleSocketMessage(_){if(_?.kind==="control"){let j=_.payload;if(j?.type==="vnc.error"){this.setStatus(`Proxy error: ${j.error||"Unknown error"}`),this.updateDisplayInfo(`Proxy error: ${j.error||"Unknown error"}`),this.updateDisplayMeta("proxy-error");return}if(j?.type==="vnc.connected"){let Q=j?.target?.label||this.targetLabel||this.targetId;this.setStatus(`Connected to ${Q}. Waiting for VNC/RFB data…`),this.updateDisplayInfo(`Connected to ${Q}. Waiting for VNC handshake…`),this.updateDisplayMeta();return}if(j?.type==="pong")return;return}let $=this.protocol||(this.protocol=new u8);try{let j=_.data instanceof Blob?await _.data.arrayBuffer():_.data,Q=$.receive(j);for(let Z of Q.outgoing||[])this.socketBoundary?.send?.(Z);for(let Z of Q.events||[])this.applyRemoteDisplayEvent(Z)}catch(j){let Q=j?.message||"Unknown error";if(this.setSessionChromeVisible(!0),this.setStatus(`Display protocol error: ${Q}`),this.updateDisplayInfo(`Display protocol error: ${Q}`),this.updateDisplayMeta("protocol-error"),this.frameTimeoutId)clearTimeout(this.frameTimeoutId),this.frameTimeoutId=null;if(!this.rawFallbackAttempted&&!this.protocolRecovering&&/unexpected eof|zlib|decompress|protocol|buffer|undefined|not an object|reading '0'/i.test(Q))this.rawFallbackAttempted=!0,this.protocolRecovering=!0,this.connectWithEncodings("0")}}async connectSocket(_=null){if(!this.targetId||this.disposed)return;if(this.clearReconnectTimer(),this.protocolRecovering&&_==null)this.protocolRecovering=!1;try{this.socketBoundary?.dispose?.()}catch{}if(_==null)this.rawFallbackAttempted=!1,this.protocolRecovering=!1;let $=this.pendingHandoffToken||null,j=_==null?null:String(_).trim(),Q=await b2(),Z={};if(Q)Z.pipeline=Q,Z.decodeRawRect=(N,K,G,X)=>Q.decodeRawRectToRgba(N,K,G,X);let Y=l5(this.authPassword);if(Y!==null)Z.password=Y;if(j)Z.encodings=j;let q=Boolean(this.canvas&&this.hasRenderedFrame);if(this.protocol=new u8(Z),this.hasRenderedFrame=q,this.frameTimeoutId=null,this.canvas)this.canvas.style.display=q?"block":"none";if(this.displayPlaceholderEl)this.displayPlaceholderEl.style.display=q?"none":"";this.socketBoundary=new K$({url:UN(this.targetId,$),binaryType:"arraybuffer",onOpen:()=>{if($&&this.pendingHandoffToken===$)this.pendingHandoffToken=null;this.reconnectAttempts=0,this.setStatus(`Connected to proxy for ${this.targetId}. Waiting for VNC/RFB data…`),this.updateDisplayInfo("WebSocket proxy connected. Waiting for handshake…"),this.updateDisplayMeta(),this.socketBoundary?.sendControl?.({type:"ping"})},onMetrics:(N)=>{this.applyMetrics(N)},onMessage:(N)=>{this.handleSocketMessage(N)},onClose:()=>{if(this.setSessionChromeVisible(!0),this.frameTimeoutId)clearTimeout(this.frameTimeoutId),this.frameTimeoutId=null;if(this.disposed)return;if(this.bytesIn>0||this.hasRenderedFrame||this.reconnectAttempts>0){this.setStatus("Remote display connection lost. Reconnecting…"),this.updateDisplayInfo("Remote display transport closed. Attempting to reconnect…"),this.updateDisplayMeta("reconnecting"),this.scheduleReconnect();return}this.setStatus(this.bytesIn>0?`Proxy closed after receiving ${this.bytesIn} byte(s).`:"Proxy closed."),this.updateDisplayInfo(this.bytesIn>0?"Remote display transport closed after receiving data.":"Remote display transport closed."),this.updateDisplayMeta("closed")},onError:()=>{if(this.setSessionChromeVisible(!0),this.bytesIn>0||this.hasRenderedFrame||this.reconnectAttempts>0){this.setStatus("WebSocket proxy connection failed. Reconnecting…"),this.updateDisplayInfo("WebSocket proxy connection failed. Attempting to reconnect…"),this.updateDisplayMeta("socket-reconnecting"),this.scheduleReconnect();return}this.setStatus("WebSocket proxy connection failed."),this.updateDisplayInfo("WebSocket proxy connection failed."),this.updateDisplayMeta("socket-error")}}),this.socketBoundary.connect()}connectWithEncodings(_){return this.connectSocket(_)}async load(){this.setStatus("");try{let _=await XN(this.targetId);if(!_?.enabled){this.renderTargets(_),this.setStatus("");return}if(!this.targetId){this.renderTargets(_),this.setStatus("");return}this.renderTargetSession(_),await this.connectSocket()}catch(_){this.resetLiveSession(),this.bodyEl.innerHTML=`
                <div style="max-width:620px;text-align:center;padding:28px;border:1px dashed var(--border-color);border-radius:14px;background:var(--bg-secondary);">
                    <div style="font-size:32px;margin-bottom:10px;">⚠️</div>
                    <div style="font-weight:600;margin-bottom:6px;">Failed to load VNC session</div>
                    <div style="color:var(--text-secondary);font-size:13px;line-height:1.5;">${i4(_?.message||"Unknown error")}</div>
                </div>
            `,this.setStatus(`Session load failed: ${_?.message||"Unknown error"}`)}}async preparePopoutTransfer(){if(!this.targetId)return null;let _=await VN(this.targetId),$=typeof _?.token==="string"?_.token.trim():"";if(!$)throw Error("No live VNC session is available to transfer.");return{vnc_handoff:$}}getContent(){return}isDirty(){return!1}focus(){this.canvas?.focus?.(),this.root?.focus?.()}resize(){this.updateCanvasScale()}dispose(){if(this.disposed)return;this.disposed=!0,this.resetLiveSession(),this.root?.remove?.()}}var E$={id:"vnc-viewer",label:"VNC",icon:"display",capabilities:["preview"],placement:"tabs",canHandle(_){let $=String(_?.path||"");return $===L4||$.startsWith(`${L4}/`)?9000:!1},mount(_,$){return new L7(_,$)}};function J_(_){if(typeof window>"u"||!window.localStorage)return null;try{return window.localStorage.getItem(_)}catch{return null}}function q1(_,$){if(typeof window>"u"||!window.localStorage)return;try{window.localStorage.setItem(_,$)}catch{}}function O5(_,$=!1){let j=J_(_);if(j===null)return $;return j==="true"}function o5(_,$=null){let j=J_(_);if(j===null)return $;let Q=parseInt(j,10);return Number.isFinite(Q)?Q:$}var I$="piclaw_theme",v8="piclaw_tint",z7="piclaw_chat_themes",a5={bgPrimary:"#ffffff",bgSecondary:"#f7f9fa",bgHover:"#e8ebed",textPrimary:"#0f1419",textSecondary:"#536471",borderColor:"#eff3f4",accent:"#1d9bf0",accentHover:"#1a8cd8",danger:"#f4212e",success:"#00ba7c"},H7={bgPrimary:"#000000",bgSecondary:"#16181c",bgHover:"#1d1f23",textPrimary:"#e7e9ea",textSecondary:"#71767b",borderColor:"#2f3336",accent:"#1d9bf0",accentHover:"#1a8cd8",danger:"#f4212e",success:"#00ba7c"},W7={default:{label:"Default",mode:"auto",light:a5,dark:H7},tango:{label:"Tango",mode:"light",light:{bgPrimary:"#f6f5f4",bgSecondary:"#efedeb",bgHover:"#e5e3e1",textPrimary:"#2e3436",textSecondary:"#5c6466",borderColor:"#d3d7cf",accent:"#3465a4",accentHover:"#2c5890",danger:"#cc0000",success:"#4e9a06"}},xterm:{label:"XTerm",mode:"dark",dark:{bgPrimary:"#000000",bgSecondary:"#0a0a0a",bgHover:"#121212",textPrimary:"#d0d0d0",textSecondary:"#8a8a8a",borderColor:"#1f1f1f",accent:"#00a2ff",accentHover:"#0086d1",danger:"#ff5f5f",success:"#5fff87"}},monokai:{label:"Monokai",mode:"dark",dark:{bgPrimary:"#272822",bgSecondary:"#2f2f2f",bgHover:"#3a3a3a",textPrimary:"#f8f8f2",textSecondary:"#cfcfc2",borderColor:"#3e3d32",accent:"#f92672",accentHover:"#e81560",danger:"#f92672",success:"#a6e22e"}},"monokai-pro":{label:"Monokai Pro",mode:"dark",dark:{bgPrimary:"#2d2a2e",bgSecondary:"#363237",bgHover:"#403a40",textPrimary:"#fcfcfa",textSecondary:"#c1c0c0",borderColor:"#444046",accent:"#ff6188",accentHover:"#f74f7e",danger:"#ff4f5e",success:"#a9dc76"}},ristretto:{label:"Ristretto",mode:"dark",dark:{bgPrimary:"#2c2525",bgSecondary:"#362d2d",bgHover:"#403535",textPrimary:"#f4f1ef",textSecondary:"#cbbdb8",borderColor:"#4a3c3c",accent:"#ff9f43",accentHover:"#f28a2e",danger:"#ff5f56",success:"#a9dc76"}},dracula:{label:"Dracula",mode:"dark",dark:{bgPrimary:"#282a36",bgSecondary:"#303445",bgHover:"#3a3f52",textPrimary:"#f8f8f2",textSecondary:"#c5c8d6",borderColor:"#44475a",accent:"#bd93f9",accentHover:"#a87ded",danger:"#ff5555",success:"#50fa7b"}},catppuccin:{label:"Catppuccin",mode:"dark",dark:{bgPrimary:"#1e1e2e",bgSecondary:"#24273a",bgHover:"#2c2f41",textPrimary:"#cdd6f4",textSecondary:"#a6adc8",borderColor:"#313244",accent:"#89b4fa",accentHover:"#74a0f5",danger:"#f38ba8",success:"#a6e3a1"}},nord:{label:"Nord",mode:"dark",dark:{bgPrimary:"#2e3440",bgSecondary:"#3b4252",bgHover:"#434c5e",textPrimary:"#eceff4",textSecondary:"#d8dee9",borderColor:"#4c566a",accent:"#88c0d0",accentHover:"#78a9c0",danger:"#bf616a",success:"#a3be8c"}},gruvbox:{label:"Gruvbox",mode:"dark",dark:{bgPrimary:"#282828",bgSecondary:"#32302f",bgHover:"#3c3836",textPrimary:"#ebdbb2",textSecondary:"#bdae93",borderColor:"#3c3836",accent:"#d79921",accentHover:"#c28515",danger:"#fb4934",success:"#b8bb26"}},solarized:{label:"Solarized",mode:"auto",light:{bgPrimary:"#fdf6e3",bgSecondary:"#f5efdc",bgHover:"#eee8d5",textPrimary:"#586e75",textSecondary:"#657b83",borderColor:"#e0d8c6",accent:"#268bd2",accentHover:"#1f78b3",danger:"#dc322f",success:"#859900"},dark:{bgPrimary:"#002b36",bgSecondary:"#073642",bgHover:"#0b3c4a",textPrimary:"#eee8d5",textSecondary:"#93a1a1",borderColor:"#18424a",accent:"#268bd2",accentHover:"#1f78b3",danger:"#dc322f",success:"#859900"}},tokyo:{label:"Tokyo",mode:"dark",dark:{bgPrimary:"#1a1b26",bgSecondary:"#24283b",bgHover:"#2f3549",textPrimary:"#c0caf5",textSecondary:"#9aa5ce",borderColor:"#414868",accent:"#7aa2f7",accentHover:"#6b92e6",danger:"#f7768e",success:"#9ece6a"}},miasma:{label:"Miasma",mode:"dark",dark:{bgPrimary:"#1f1f23",bgSecondary:"#29292f",bgHover:"#33333a",textPrimary:"#e5e5e5",textSecondary:"#b4b4b4",borderColor:"#3d3d45",accent:"#c9739c",accentHover:"#b8618c",danger:"#e06c75",success:"#98c379"}},github:{label:"GitHub",mode:"auto",light:{bgPrimary:"#ffffff",bgSecondary:"#f6f8fa",bgHover:"#eaeef2",textPrimary:"#24292f",textSecondary:"#57606a",borderColor:"#d0d7de",accent:"#0969da",accentHover:"#0550ae",danger:"#cf222e",success:"#1a7f37"},dark:{bgPrimary:"#0d1117",bgSecondary:"#161b22",bgHover:"#21262d",textPrimary:"#c9d1d9",textSecondary:"#8b949e",borderColor:"#30363d",accent:"#2f81f7",accentHover:"#1f6feb",danger:"#f85149",success:"#3fb950"}},gotham:{label:"Gotham",mode:"dark",dark:{bgPrimary:"#0b0f14",bgSecondary:"#111720",bgHover:"#18212b",textPrimary:"#cbd6e2",textSecondary:"#9bb0c3",borderColor:"#1f2a37",accent:"#5ccfe6",accentHover:"#48b8ce",danger:"#d26937",success:"#2aa889"}}},WN=["--bg-primary","--bg-secondary","--bg-hover","--text-primary","--text-secondary","--border-color","--accent-color","--accent-hover","--accent-contrast-text","--accent-soft","--accent-soft-strong","--danger-color","--success-color","--search-highlight-color"],r4={theme:"default",tint:null},J7="light",k$=!1;function g8(_){let $=String(_||"").trim().toLowerCase();if(!$)return"default";if($==="solarized-dark"||$==="solarized-light")return"solarized";if($==="github-dark"||$==="github-light")return"github";if($==="tokyo-night")return"tokyo";return $}function D5(_){if(!_)return null;let $=String(_).trim();if(!$)return null;let j=$.startsWith("#")?$.slice(1):$;if(!/^[0-9a-fA-F]{3}$/.test(j)&&!/^[0-9a-fA-F]{6}$/.test(j))return null;let Q=j.length===3?j.split("").map((Y)=>Y+Y).join(""):j,Z=parseInt(Q,16);return{r:Z>>16&255,g:Z>>8&255,b:Z&255,hex:`#${Q.toLowerCase()}`}}function FN(_){if(!_||typeof document>"u")return null;let $=String(_).trim();if(!$)return null;let j=document.createElement("div");if(j.style.color="",j.style.color=$,!j.style.color)return null;let Q=j.style.color;try{if(document.body)j.style.display="none",document.body.appendChild(j),Q=getComputedStyle(j).color||j.style.color,document.body.removeChild(j)}catch{}let Z=Q.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/i);if(!Z)return null;let Y=parseInt(Z[1],10),q=parseInt(Z[2],10),N=parseInt(Z[3],10);if(![Y,q,N].every((G)=>Number.isFinite(G)))return null;let K=`#${[Y,q,N].map((G)=>G.toString(16).padStart(2,"0")).join("")}`;return{r:Y,g:q,b:N,hex:K}}function O7(_){return D5(_)||FN(_)}function s5(_,$,j){let Q=Math.round(_.r+($.r-_.r)*j),Z=Math.round(_.g+($.g-_.g)*j),Y=Math.round(_.b+($.b-_.b)*j);return`rgb(${Q} ${Z} ${Y})`}function M$(_,$){return`rgba(${_.r}, ${_.g}, ${_.b}, ${$})`}function zN(_){let $=_.r/255,j=_.g/255,Q=_.b/255,Z=$<=0.03928?$/12.92:Math.pow(($+0.055)/1.055,2.4),Y=j<=0.03928?j/12.92:Math.pow((j+0.055)/1.055,2.4),q=Q<=0.03928?Q/12.92:Math.pow((Q+0.055)/1.055,2.4);return 0.2126*Z+0.7152*Y+0.0722*q}function HN(_){return zN(_)>0.4?"#000000":"#ffffff"}function A7(){if(typeof window>"u")return"light";try{return window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}catch{return"light"}}function x$(_){return W7[_]||W7.default}function JN(_){return _.mode==="auto"?A7():_.mode}function D7(_,$){let j=x$(_);if($==="dark"&&j.dark)return j.dark;if($==="light"&&j.light)return j.light;return j.dark||j.light||a5}function E7(_,$,j){let Q=O7($);if(!Q)return _;let Z=D5(_.bgPrimary),Y=D5(_.bgSecondary),q=D5(_.bgHover),N=D5(_.borderColor);if(!Z||!Y||!q||!N)return _;let G=D5(j==="dark"?"#ffffff":"#000000");return{..._,bgPrimary:s5(Z,Q,0.08),bgSecondary:s5(Y,Q,0.12),bgHover:s5(q,Q,0.16),borderColor:s5(N,Q,0.08),accent:Q.hex,accentHover:G?s5(Q,G,0.18):Q.hex}}function ON(_,$){if(typeof document>"u")return;let j=document.documentElement,Q=_.accent,Z=O7(Q),Y=Z?M$(Z,$==="dark"?0.35:0.2):_.searchHighlight||_.searchHighlightColor,q=Z?M$(Z,$==="dark"?0.16:0.12):"rgba(29, 155, 240, 0.12)",N=Z?M$(Z,$==="dark"?0.28:0.2):"rgba(29, 155, 240, 0.2)",K=Z?HN(Z):$==="dark"?"#000000":"#ffffff",G={"--bg-primary":_.bgPrimary,"--bg-secondary":_.bgSecondary,"--bg-hover":_.bgHover,"--text-primary":_.textPrimary,"--text-secondary":_.textSecondary,"--border-color":_.borderColor,"--accent-color":Q,"--accent-hover":_.accentHover||Q,"--accent-soft":q,"--accent-soft-strong":N,"--accent-contrast-text":K,"--danger-color":_.danger||a5.danger,"--success-color":_.success||a5.success,"--search-highlight-color":Y||"rgba(29, 155, 240, 0.2)"};Object.entries(G).forEach(([X,V])=>{if(V)j.style.setProperty(X,V)})}function AN(){if(typeof document>"u")return;let _=document.documentElement;WN.forEach(($)=>_.style.removeProperty($))}function A5(_,$={}){if(typeof document>"u")return null;let j=typeof $.id==="string"&&$.id.trim()?$.id.trim():null,Q=j?document.getElementById(j):document.querySelector(`meta[name="${_}"]`);if(!Q)Q=document.createElement("meta"),document.head.appendChild(Q);if(Q.setAttribute("name",_),j)Q.setAttribute("id",j);return Q}function F7(_){let $=g8(r4?.theme||"default"),j=r4?.tint?String(r4.tint).trim():null,Q=D7($,_);if($==="default"&&j)Q=E7(Q,j,_);if(Q?.bgPrimary)return Q.bgPrimary;return _==="dark"?H7.bgPrimary:a5.bgPrimary}function DN(_,$){if(typeof document>"u")return;let j=A5("theme-color",{id:"dynamic-theme-color"});if(j&&_)j.removeAttribute("media"),j.setAttribute("content",_);let Q=A5("theme-color",{id:"theme-color-light"});if(Q)Q.setAttribute("media","(prefers-color-scheme: light)"),Q.setAttribute("content",F7("light"));let Z=A5("theme-color",{id:"theme-color-dark"});if(Z)Z.setAttribute("media","(prefers-color-scheme: dark)"),Z.setAttribute("content",F7("dark"));let Y=A5("msapplication-TileColor");if(Y&&_)Y.setAttribute("content",_);let q=A5("msapplication-navbutton-color");if(q&&_)q.setAttribute("content",_);let N=A5("apple-mobile-web-app-status-bar-style");if(N)N.setAttribute("content",$==="dark"?"black-translucent":"default")}function EN(){if(typeof window>"u")return;let _={...r4,mode:J7};window.dispatchEvent(new CustomEvent("piclaw-theme-change",{detail:_}))}function k7(){try{let _=J_(z7);if(!_)return{};let $=JSON.parse(_);return typeof $==="object"&&$!==null?$:{}}catch{return{}}}function kN(_,$,j){let Q=k7();if(!$&&!j)delete Q[_];else Q[_]={theme:$||"default",tint:j||null};q1(z7,JSON.stringify(Q))}function MN(_){if(!_)return null;return k7()[_]||null}function M7(){if(typeof window>"u")return"web:default";try{let $=new URL(window.location.href).searchParams.get("chat_jid");return $&&$.trim()?$.trim():"web:default"}catch{return"web:default"}}function T$(_,$={}){if(typeof window>"u"||typeof document>"u")return;let j=g8(_?.theme||"default"),Q=_?.tint?String(_.tint).trim():null,Z=x$(j),Y=JN(Z),q=D7(j,Y);r4={theme:j,tint:Q},J7=Y;let N=document.documentElement;N.dataset.theme=Y,N.dataset.colorTheme=j,N.dataset.tint=Q?String(Q):"",N.style.colorScheme=Y;let K=q;if(j==="default"&&Q)K=E7(q,Q,Y);if(j==="default"&&!Q)AN();else ON(K,Y);if(DN(K.bgPrimary,Y),EN(),$.persist!==!1)if(q1(I$,j),Q)q1(v8,Q);else q1(v8,"")}function f8(){if(x$(r4.theme).mode!=="auto")return;T$(r4,{persist:!1})}function I7(){if(typeof window>"u")return()=>{};let _=M7(),$=MN(_),j=$?g8($.theme||"default"):g8(J_(I$)||"default"),Q=$?$.tint?String($.tint).trim():null:(()=>{let Z=J_(v8);return Z?Z.trim():null})();if(T$({theme:j,tint:Q},{persist:!1}),window.matchMedia&&!k$){let Z=window.matchMedia("(prefers-color-scheme: dark)");if(Z.addEventListener)Z.addEventListener("change",f8);else if(Z.addListener)Z.addListener(f8);return k$=!0,()=>{if(Z.removeEventListener)Z.removeEventListener("change",f8);else if(Z.removeListener)Z.removeListener(f8);k$=!1}}return()=>{}}function x7(_){if(!_||typeof _!=="object")return;let $=_.chat_jid||_.chatJid||M7(),j=_.theme??_.name??_.colorTheme,Q=_.tint??null;if(kN($,j||"default",Q),T$({theme:j||"default",tint:Q},{persist:!1}),!$||$==="web:default")q1(I$,j||"default"),q1(v8,Q||"")}function T7(){if(typeof document>"u")return"light";let _=document.documentElement?.dataset?.theme;if(_==="dark"||_==="light")return _;return A7()}var b8=/#(\w+)/g,IN=new Set(["strong","em","b","i","u","s","br","p","ul","ol","li","blockquote","ruby","rt","rp","span"]),xN=new Set(["a","abbr","blockquote","br","code","div","em","hr","h1","h2","h3","h4","h5","h6","i","img","kbd","li","mark","ol","p","pre","ruby","rt","rp","s","span","strong","sub","sup","table","tbody","td","th","thead","tr","u","ul","math","semantics","mrow","mi","mn","mo","mtext","mspace","msup","msub","msubsup","mfrac","msqrt","mroot","mtable","mtr","mtd","annotation"]),TN=new Set(["class","style","title","role","aria-hidden","aria-label","aria-expanded","aria-live","data-mermaid","data-hashtag"]),CN={a:new Set(["href","target","rel"]),img:new Set(["src","alt","title"])},PN=new Set(["http:","https:","mailto:",""]);function C$(_){return String(_||"").replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/'/g,"&#39;")}function o4(_,$={}){if(!_)return null;let j=String(_).trim();if(!j)return null;if(j.startsWith("#")||j.startsWith("/"))return j;if(j.startsWith("data:")){if($.allowDataImage&&/^data:image\//i.test(j))return j;return null}if(j.startsWith("blob:"))return j;try{let Q=new URL(j,typeof window<"u"?window.location.origin:"http://localhost");if(!PN.has(Q.protocol))return null;return Q.href}catch{return null}}function C7(_,$={}){if(!_)return"";let j=new DOMParser().parseFromString(_,"text/html"),Q=[],Z=j.createTreeWalker(j.body,NodeFilter.SHOW_ELEMENT),Y;while(Y=Z.nextNode())Q.push(Y);for(let q of Q){let N=q.tagName.toLowerCase();if(!xN.has(N)){let G=q.parentNode;if(!G)continue;while(q.firstChild)G.insertBefore(q.firstChild,q);G.removeChild(q);continue}let K=CN[N]||new Set;for(let G of Array.from(q.attributes)){let X=G.name.toLowerCase(),V=G.value;if(X.startsWith("on")){q.removeAttribute(G.name);continue}if(X.startsWith("data-")||X.startsWith("aria-"))continue;if(K.has(X)||TN.has(X)){if(X==="href"){let U=o4(V);if(!U)q.removeAttribute(G.name);else if(q.setAttribute(G.name,U),N==="a"&&!q.getAttribute("rel"))q.setAttribute("rel","noopener noreferrer")}else if(X==="src"){let U=N==="img"&&typeof $.rewriteImageSrc==="function"?$.rewriteImageSrc(V):V,W=o4(U,{allowDataImage:N==="img"});if(!W)q.removeAttribute(G.name);else q.setAttribute(G.name,W)}continue}q.removeAttribute(G.name)}}return j.body.innerHTML}function P7(_){if(!_)return _;let $=_.replace(/</g,"&lt;").replace(/>/g,"&gt;");return new DOMParser().parseFromString($,"text/html").documentElement.textContent}function m8(_,$=2){if(!_)return _;let j=_;for(let Q=0;Q<$;Q+=1){let Z=P7(j);if(Z===j)break;j=Z}return j}function yN(_){if(!_)return{text:"",blocks:[]};let j=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),Q=[],Z=[],Y=!1,q=[];for(let N of j){if(!Y&&N.trim().match(/^```mermaid\s*$/i)){Y=!0,q=[];continue}if(Y&&N.trim().match(/^```\s*$/)){let K=Q.length;Q.push(q.join(`
`)),Z.push(`@@MERMAID_BLOCK_${K}@@`),Y=!1,q=[];continue}if(Y)q.push(N);else Z.push(N)}if(Y)Z.push("```mermaid"),Z.push(...q);return{text:Z.join(`
`),blocks:Q}}function SN(_){if(!_)return _;return m8(_,5)}function wN(_){let $=new TextEncoder().encode(String(_||"")),j="";for(let Q of $)j+=String.fromCharCode(Q);return btoa(j)}function RN(_){let $=atob(String(_||"")),j=new Uint8Array($.length);for(let Q=0;Q<$.length;Q+=1)j[Q]=$.charCodeAt(Q);return new TextDecoder().decode(j)}function uN(_,$){if(!_||!$||$.length===0)return _;return _.replace(/@@MERMAID_BLOCK_(\d+)@@/g,(j,Q)=>{let Z=Number(Q),Y=$[Z]??"",q=SN(Y);return`<div class="mermaid-container" data-mermaid="${wN(q)}"><div class="mermaid-loading">Loading diagram...</div></div>`})}function y7(_){if(!_)return _;return _.replace(/<code>([\s\S]*?)<\/code>/gi,($,j)=>{if(j.includes(`
`))return`
\`\`\`
${j}
\`\`\`
`;return`\`${j}\``})}var fN={span:new Set(["title","class","lang","dir"])};function vN(_,$){let j=fN[_];if(!j||!$)return"";let Q=[],Z=/([a-zA-Z_:][\w:.-]*)(?:\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s"'`=<>]+)))?/g,Y;while(Y=Z.exec($)){let q=(Y[1]||"").toLowerCase();if(!q||q.startsWith("on")||!j.has(q))continue;let N=Y[2]??Y[3]??Y[4]??"";Q.push(` ${q}="${C$(N)}"`)}return Q.join("")}function S7(_){if(!_)return _;return _.replace(/&lt;([\s\S]*?)&gt;/g,($,j)=>{let Q=j.trim(),Z=Q.startsWith("/"),Y=Z?Q.slice(1).trim():Q,N=Y.endsWith("/")?Y.slice(0,-1).trim():Y,[K=""]=N.split(/\s+/,1),G=K.toLowerCase();if(!G||!IN.has(G))return $;if(G==="br")return Z?"":"<br>";if(Z)return`</${G}>`;let X=N.slice(K.length).trim(),V=vN(G,X);return`<${G}${V}>`})}function w7(_){if(!_)return _;let $=(j)=>j.replace(/&amp;lt;/g,"&lt;").replace(/&amp;gt;/g,"&gt;").replace(/&amp;quot;/g,"&quot;").replace(/&amp;#39;/g,"&#39;").replace(/&amp;amp;/g,"&amp;");return _.replace(/<pre><code>([\s\S]*?)<\/code><\/pre>/g,(j,Q)=>`<pre><code>${$(Q)}</code></pre>`).replace(/<code>([\s\S]*?)<\/code>/g,(j,Q)=>`<code>${$(Q)}</code>`)}function R7(_){if(!_)return _;let $=new DOMParser().parseFromString(_,"text/html"),j=$.createTreeWalker($.body,NodeFilter.SHOW_TEXT),Q=(Y)=>Y.replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&quot;/g,'"').replace(/&#39;/g,"'").replace(/&amp;/g,"&"),Z;while(Z=j.nextNode()){if(!Z.nodeValue)continue;let Y=Q(Z.nodeValue);if(Y!==Z.nodeValue)Z.nodeValue=Y}return $.body.innerHTML}function gN(_){if(!window.katex)return _;let $=(q)=>P7(q).replace(/&gt;/g,">").replace(/&lt;/g,"<").replace(/&amp;/g,"&").replace(/<br\s*\/?\s*>/gi,`
`),j=(q)=>{let N=[],K=q.replace(/<pre\b[^>]*>\s*<code\b[^>]*>[\s\S]*?<\/code>\s*<\/pre>/gi,(G)=>{let X=N.length;return N.push(G),`@@CODE_BLOCK_${X}@@`});return K=K.replace(/<code\b[^>]*>[\s\S]*?<\/code>/gi,(G)=>{let X=N.length;return N.push(G),`@@CODE_INLINE_${X}@@`}),{html:K,blocks:N}},Q=(q,N)=>{if(!N.length)return q;return q.replace(/@@CODE_(?:BLOCK|INLINE)_(\d+)@@/g,(K,G)=>{let X=Number(G);return N[X]??""})},Z=j(_),Y=Z.html;return Y=Y.replace(/(^|\n|<br\s*\/?\s*>|<p>|<\/p>)\s*\$\$([\s\S]+?)\$\$\s*(?=\n|<br\s*\/?\s*>|<\/p>|$)/gi,(q,N,K)=>{try{let G=katex.renderToString($(K.trim()),{displayMode:!0,throwOnError:!1});return`${N}${G}`}catch(G){return`<span class="math-error" title="${C$(G.message)}">${q}</span>`}}),Y=Y.replace(/(^|[^\\$])\$(?!\s)([^\n$]+?)\$/g,(q,N,K)=>{if(/\s$/.test(K))return q;try{let G=katex.renderToString($(K),{displayMode:!1,throwOnError:!1});return`${N}${G}`}catch(G){return`${N}<span class="math-error" title="${C$(G.message)}">$${K}$</span>`}}),Q(Y,Z.blocks)}function bN(_){if(!_)return _;let $=new DOMParser().parseFromString(_,"text/html"),j=$.createTreeWalker($.body,NodeFilter.SHOW_TEXT),Q=[],Z;while(Z=j.nextNode())Q.push(Z);for(let Y of Q){let q=Y.nodeValue;if(!q)continue;if(b8.lastIndex=0,!b8.test(q))continue;b8.lastIndex=0;let N=Y.parentElement;if(N&&(N.closest("a")||N.closest("code")||N.closest("pre")))continue;let K=q.split(b8);if(K.length<=1)continue;let G=$.createDocumentFragment();K.forEach((X,V)=>{if(V%2===1){let U=$.createElement("a");U.setAttribute("href","#"),U.className="hashtag",U.setAttribute("data-hashtag",X),U.textContent=`#${X}`,G.appendChild(U)}else G.appendChild($.createTextNode(X))}),Y.parentNode?.replaceChild(G,Y)}return $.body.innerHTML}function mN(_){if(!_)return _;let j=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),Q=[],Z=!1;for(let Y of j){if(!Z&&Y.trim().match(/^```(?:math|katex|latex)\s*$/i)){Z=!0,Q.push("$$");continue}if(Z&&Y.trim().match(/^```\s*$/)){Z=!1,Q.push("$$");continue}Q.push(Y)}return Q.join(`
`)}function hN(_){let $=mN(_||""),{text:j,blocks:Q}=yN($),Z=m8(j,2),q=y7(Z).replace(/</g,"&lt;");return{safeHtml:S7(q),mermaidBlocks:Q}}function O_(_,$,j={}){if(!_)return"";let{safeHtml:Q,mermaidBlocks:Z}=hN(_),Y=window.marked?marked.parse(Q,{headerIds:!1,mangle:!1}):Q.replace(/\n/g,"<br>");return Y=w7(Y),Y=R7(Y),Y=gN(Y),Y=bN(Y),Y=uN(Y,Z),Y=C7(Y,j),Y}function t5(_){if(!_)return"";let $=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`),j=m8($,2),Z=y7(j).replace(/</g,"&lt;").replace(/>/g,"&gt;"),Y=S7(Z),q=window.marked?marked.parse(Y):Y.replace(/\n/g,"<br>");return q=w7(q),q=R7(q),q=C7(q),q}function pN(_,$=6){return _.replace(/<polyline\b([^>]*)\bpoints="([^"]+)"([^>]*)\/?\s*>/g,(j,Q,Z,Y)=>{let q=Z.trim().split(/\s+/).map((K)=>{let[G,X]=K.split(",").map(Number);return{x:G,y:X}});if(q.length<3)return`<polyline${Q}points="${Z}"${Y}/>`;let N=[`M ${q[0].x},${q[0].y}`];for(let K=1;K<q.length-1;K++){let G=q[K-1],X=q[K],V=q[K+1],U=X.x-G.x,W=X.y-G.y,J=V.x-X.x,D=V.y-X.y,O=Math.sqrt(U*U+W*W),F=Math.sqrt(J*J+D*D),A=Math.min($,O/2,F/2);if(A<0.5){N.push(`L ${X.x},${X.y}`);continue}let k=X.x-U/O*A,m=X.y-W/O*A,f=X.x+J/F*A,l=X.y+D/F*A,P=U*D-W*J>0?1:0;N.push(`L ${k},${m}`),N.push(`A ${A},${A} 0 0 ${P} ${f},${l}`)}return N.push(`L ${q[q.length-1].x},${q[q.length-1].y}`),`<path${Q}d="${N.join(" ")}"${Y}/>`})}async function W4(_){if(!window.beautifulMermaid)return;let{renderMermaid:$,THEMES:j}=window.beautifulMermaid,Z=T7()==="dark"?j["tokyo-night"]:j["github-light"],Y=_.querySelectorAll(".mermaid-container[data-mermaid]");for(let q of Y)try{let N=q.dataset.mermaid,K=RN(N||""),G=m8(K,2),X=await $(G,{...Z,transparent:!0});X=pN(X),q.innerHTML=X,q.removeAttribute("data-mermaid")}catch(N){console.error("Mermaid render error:",N);let K=document.createElement("pre");K.className="mermaid-error",K.textContent=`Diagram error: ${N.message}`,q.innerHTML="",q.appendChild(K),q.removeAttribute("data-mermaid")}}function u7(_){let $=new Date(_);if(Number.isNaN($.getTime()))return _;let Q=new Date-$,Z=Q/1000,Y=86400000;if(Q<Y){if(Z<60)return"just now";if(Z<3600)return`${Math.floor(Z/60)}m`;return`${Math.floor(Z/3600)}h`}if(Q<5*Y){let K=$.toLocaleDateString(void 0,{weekday:"short"}),G=$.toLocaleTimeString(void 0,{hour:"2-digit",minute:"2-digit"});return`${K} ${G}`}let q=$.toLocaleDateString(void 0,{month:"short",day:"numeric"}),N=$.toLocaleTimeString(void 0,{hour:"2-digit",minute:"2-digit"});return`${q} ${N}`}function e5(_){if(!Number.isFinite(_))return"0";return Math.round(_).toLocaleString()}function w_(_){if(_<1024)return _+" B";if(_<1048576)return(_/1024).toFixed(1)+" KB";return(_/1048576).toFixed(1)+" MB"}function s4(_){let $=new Date(_);if(Number.isNaN($.getTime()))return _;return $.toLocaleString()}function P4(_){return String(_||"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}function cN(_,$){let j=String(_||"").trim();if(!j)return j;if(/^[a-zA-Z][a-zA-Z\d+.-]*:/.test(j)||j.startsWith("#")||j.startsWith("data:")||j.startsWith("blob:"))return j;let Q=j.match(/^([^?#]*)(\?[^#]*)?(#.*)?$/),Z=Q?.[1]||j,Y=Q?.[2]||"",q=Q?.[3]||"",N=String($||"").split("/").slice(0,-1).join("/"),G=Z.startsWith("/")?Z:`${N?`${N}/`:""}${Z}`,X=[];for(let U of G.split("/")){if(!U||U===".")continue;if(U===".."){if(X.length>0)X.pop();continue}X.push(U)}let V=X.join("/");return`${k8(V)}${Y}${q}`}function _8(_){return _?.preview||null}function lN(_){let $=String(_||""),j=Math.max($.lastIndexOf("/"),$.lastIndexOf("\\")),Q=j>=0?$.slice(j+1):$,Z=Q.lastIndexOf(".");if(Z<=0||Z===Q.length-1)return"none";return Q.slice(Z+1)}function nN(_){if(!_)return"unknown";if(_.kind==="image")return"image";if(_.kind==="text")return _.content_type==="text/markdown"?"markdown":"text";if(_.kind==="binary")return"binary";return String(_.kind||"unknown")}function dN(_,$){let j=$?.path||_?.path||"",Q=[];if($?.content_type)Q.push(`<span><strong>type:</strong> ${P4($.content_type)}</span>`);if(typeof $?.size==="number")Q.push(`<span><strong>size:</strong> ${P4(w_($.size))}</span>`);if($?.mtime)Q.push(`<span><strong>modified:</strong> ${P4(s4($.mtime))}</span>`);if(Q.push(`<span><strong>kind:</strong> ${P4(nN($))}</span>`),Q.push(`<span><strong>extension:</strong> ${P4(lN(j))}</span>`),j)Q.push(`<span><strong>path:</strong> ${P4(j)}</span>`);if($?.truncated)Q.push("<span><strong>content:</strong> truncated</span>");return`<div class="workspace-preview-meta workspace-preview-meta-inline">${Q.join("")}</div>`}function iN(_){let $=_8(_);if(!$)return'<div class="workspace-preview-text">No preview available.</div>';let j=dN(_,$);if($.kind==="image"){let Q=$.url||($.path?k8($.path):"");return`${j}
            <div class="workspace-preview-image">
                <img src="${P4(Q)}" alt="preview" />
            </div>
        `}if($.kind==="text"){if($.content_type==="text/markdown"){let Q=O_($.text||"",null,{rewriteImageSrc:(Z)=>cN(Z,$.path||_?.path)});return`${j}<div class="workspace-preview-text">${Q}</div>`}return`${j}<pre class="workspace-preview-text"><code>${P4($.text||"")}</code></pre>`}if($.kind==="binary")return`${j}<div class="workspace-preview-text">Binary file — download to view.</div>`;return`${j}<div class="workspace-preview-text">No preview available.</div>`}class P${constructor(_,$){this.container=_,this.context=$,this.disposed=!1,this.host=document.createElement("div"),this.host.className="workspace-preview-render-host",this.host.tabIndex=0,this.container.appendChild(this.host),this.render()}render(){if(this.disposed)return;this.host.innerHTML=iN(this.context)}getContent(){let _=_8(this.context);return typeof _?.text==="string"?_.text:void 0}isDirty(){return!1}setContent(_,$){let j=_8(this.context);if(j&&j.kind==="text"){if(j.text=_,$!==void 0)j.mtime=$}if(this.context.content=_,$!==void 0)this.context.mtime=$;this.render()}focus(){this.host?.focus?.()}dispose(){if(this.disposed)return;this.disposed=!0,this.host?.remove(),this.container.innerHTML=""}}var y$={id:"workspace-markdown-preview",label:"Workspace Markdown Preview",icon:"preview",capabilities:["preview","readonly"],placement:"tabs",canHandle(_){let $=_8(_);if(_?.mode!=="view")return!1;if(!$||$.kind!=="text")return!1;return $.content_type==="text/markdown"?20:!1},mount(_,$){return new P$(_,$)}},S$={id:"workspace-preview-default",label:"Workspace Preview",icon:"preview",capabilities:["preview","readonly"],placement:"tabs",canHandle(_){if(_?.mode!=="view")return!1;return _8(_)||_?.path?1:!1},mount(_,$){return new P$(_,$)}};var rN=new Set([".docx",".doc",".odt",".rtf",".xlsx",".xls",".ods",".csv",".pptx",".ppt",".odp"]),oN={".docx":"Word Document",".doc":"Word (Legacy)",".odt":"OpenDocument Text",".rtf":"Rich Text",".xlsx":"Excel Spreadsheet",".xls":"Excel (Legacy)",".ods":"OpenDocument Spreadsheet",".csv":"CSV Data",".pptx":"PowerPoint",".ppt":"PowerPoint (Legacy)",".odp":"OpenDocument Presentation"},sN={".docx":"\uD83D\uDCDD",".doc":"\uD83D\uDCDD",".odt":"\uD83D\uDCDD",".rtf":"\uD83D\uDCDD",".xlsx":"\uD83D\uDCCA",".xls":"\uD83D\uDCCA",".ods":"\uD83D\uDCCA",".csv":"\uD83D\uDCCA",".pptx":"\uD83D\uDCFD️",".ppt":"\uD83D\uDCFD️",".odp":"\uD83D\uDCFD️"};function v7(_){if(!_)return"";let $=_.lastIndexOf(".");if($<0)return"";return _.slice($).toLowerCase()}function f7(_){return _.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}class g7{container;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Q=j.split("/").pop()||"document",Z=v7(j),Y=sN[Z]||"\uD83D\uDCC4",q=oN[Z]||"Office Document",N=document.createElement("div");N.style.cssText="width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:var(--bg-primary,#1a1a1a);",N.innerHTML=`
            <div style="text-align:center;max-width:360px;padding:24px;">
                <div style="font-size:56px;margin-bottom:12px;">${Y}</div>
                <div style="font-size:14px;font-weight:600;color:var(--text-primary,#e0e0e0);margin-bottom:4px;word-break:break-word;">${f7(Q)}</div>
                <div style="font-size:11px;color:var(--text-secondary,#888);margin-bottom:20px;">${f7(q)}</div>
                <button id="ov-open-tab" style="padding:8px 20px;background:var(--accent-color,#1d9bf0);color:var(--accent-contrast-text,#fff);
                    border:none;border-radius:5px;font-size:13px;font-weight:500;cursor:pointer;
                    transition:background 0.15s;"
                    onmouseenter="this.style.background='var(--accent-hover,#1a8cd8)'"
                    onmouseleave="this.style.background='var(--accent-color,#1d9bf0)'">
                    Open in Tab
                </button>
            </div>
        `,_.appendChild(N);let K=N.querySelector("#ov-open-tab");if(K)K.addEventListener("click",()=>{let G=new CustomEvent("office-viewer:open-tab",{bubbles:!0,detail:{path:j}});_.dispatchEvent(G)})}getContent(){return}isDirty(){return!1}focus(){}resize(){}dispose(){if(this.disposed)return;this.disposed=!0,this.container.innerHTML=""}}class b7{container;iframe=null;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Q=j.split("/").pop()||"document",Z=`/workspace/raw?path=${encodeURIComponent(j)}`,Y=`/office-viewer/?url=${encodeURIComponent(Z)}&name=${encodeURIComponent(Q)}`;this.iframe=document.createElement("iframe"),this.iframe.src=Y,this.iframe.style.cssText="width:100%;height:100%;border:none;background:#1e1e1e;",_.appendChild(this.iframe)}getContent(){return}isDirty(){return!1}focus(){this.iframe?.focus()}resize(){}dispose(){if(this.disposed)return;if(this.disposed=!0,this.iframe)this.iframe.src="about:blank",this.iframe=null;this.container.innerHTML=""}}var w$={id:"office-viewer",label:"Office Viewer",icon:"file-text",capabilities:["readonly","preview"],placement:"tabs",canHandle(_){let $=v7(_?.path);if(!$||!rN.has($))return!1;return 50},mount(_,$){if($?.mode==="view")return new g7(_,$);return new b7(_,$)}};var aN=/\.(csv|tsv)$/i;function m7(_){return _.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}class h7{container;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Q=j.split("/").pop()||"table.csv",Z=j.toLowerCase().endsWith(".tsv")?"TSV Table":"CSV Table",Y=document.createElement("div");Y.style.cssText="width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:var(--bg-primary,#1a1a1a);",Y.innerHTML=`
            <div style="text-align:center;max-width:360px;padding:24px;">
                <div style="font-size:56px;margin-bottom:12px;">\uD83D\uDCCA</div>
                <div style="font-size:14px;font-weight:600;color:var(--text-primary,#e0e0e0);margin-bottom:4px;word-break:break-word;">${m7(Q)}</div>
                <div style="font-size:11px;color:var(--text-secondary,#888);margin-bottom:20px;">${m7(Z)}</div>
                <button id="csv-open-tab" style="padding:8px 20px;background:var(--accent-color,#1d9bf0);color:var(--accent-contrast-text,#fff);
                    border:none;border-radius:5px;font-size:13px;font-weight:500;cursor:pointer;
                    transition:background 0.15s;"
                    onmouseenter="this.style.background='var(--accent-hover,#1a8cd8)'"
                    onmouseleave="this.style.background='var(--accent-color,#1d9bf0)'">
                    Open in Tab
                </button>
            </div>
        `,_.appendChild(Y);let q=Y.querySelector("#csv-open-tab");if(q)q.addEventListener("click",()=>{let N=new CustomEvent("csv-viewer:open-tab",{bubbles:!0,detail:{path:j}});_.dispatchEvent(N)})}getContent(){return}isDirty(){return!1}focus(){}resize(){}dispose(){if(this.disposed)return;this.disposed=!0,this.container.innerHTML=""}}class p7{container;iframe=null;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Q=`/csv-viewer/?path=${encodeURIComponent(j)}`;this.iframe=document.createElement("iframe"),this.iframe.src=Q,this.iframe.style.cssText="width:100%;height:100%;border:none;background:var(--bg-primary,#000);",_.appendChild(this.iframe)}getContent(){return}isDirty(){return!1}focus(){this.iframe?.focus()}resize(){}dispose(){if(this.disposed)return;if(this.disposed=!0,this.iframe)this.iframe.src="about:blank",this.iframe=null;this.container.innerHTML=""}}var R$={id:"csv-viewer",label:"CSV Viewer",icon:"table",capabilities:["readonly","preview"],placement:"tabs",canHandle(_){let $=_?.path||"";if(!aN.test($))return!1;return 55},mount(_,$){if($?.mode==="view")return new h7(_,$);return new p7(_,$)}};var tN=/\.pdf$/i;function eN(_){return _.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}class c7{container;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Q=j.split("/").pop()||"document.pdf",Z=document.createElement("div");Z.style.cssText="width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:var(--bg-primary,#1a1a1a);",Z.innerHTML=`
            <div style="text-align:center;max-width:360px;padding:24px;">
                <div style="font-size:56px;margin-bottom:12px;">\uD83D\uDCC4</div>
                <div style="font-size:14px;font-weight:600;color:var(--text-primary,#e0e0e0);margin-bottom:4px;word-break:break-word;">${eN(Q)}</div>
                <div style="font-size:11px;color:var(--text-secondary,#888);margin-bottom:20px;">PDF Document</div>
                <button id="pdf-open-tab" style="padding:8px 20px;background:var(--accent-color,#1d9bf0);color:var(--accent-contrast-text,#fff);
                    border:none;border-radius:5px;font-size:13px;font-weight:500;cursor:pointer;
                    transition:background 0.15s;"
                    onmouseenter="this.style.background='var(--accent-hover,#1a8cd8)'"
                    onmouseleave="this.style.background='var(--accent-color,#1d9bf0)'">
                    Open in Tab
                </button>
            </div>
        `,_.appendChild(Z);let Y=Z.querySelector("#pdf-open-tab");if(Y)Y.addEventListener("click",()=>{let q=new CustomEvent("pdf-viewer:open-tab",{bubbles:!0,detail:{path:j}});_.dispatchEvent(q)})}getContent(){return}isDirty(){return!1}focus(){}resize(){}dispose(){if(this.disposed)return;this.disposed=!0,this.container.innerHTML=""}}class l7{container;iframe=null;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Q=`/pdf-viewer/?path=${encodeURIComponent(j)}`;this.iframe=document.createElement("iframe"),this.iframe.src=Q,this.iframe.style.cssText="width:100%;height:100%;border:none;background:#1e1e1e;",_.appendChild(this.iframe)}getContent(){return}isDirty(){return!1}focus(){this.iframe?.focus()}resize(){}dispose(){if(this.disposed)return;if(this.disposed=!0,this.iframe)this.iframe.src="about:blank",this.iframe=null;this.container.innerHTML=""}}var u$={id:"pdf-viewer",label:"PDF Viewer",icon:"file-text",capabilities:["readonly","preview"],placement:"tabs",canHandle(_){let $=_?.path||"";if(!tN.test($))return!1;return 52},mount(_,$){if($?.mode==="view")return new c7(_,$);return new l7(_,$)}};var _K=/\.(png|jpe?g|gif|webp|bmp|ico|svg)$/i;function f$(_){return _.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}class n7{container;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Q=j.split("/").pop()||"image",Z=`/workspace/raw?path=${encodeURIComponent(j)}`,Y=document.createElement("div");Y.style.cssText="width:100%;height:100%;display:flex;flex-direction:column;background:var(--bg-primary,#1a1a1a);",Y.innerHTML=`
            <div style="flex:1;min-height:0;display:flex;align-items:center;justify-content:center;overflow:hidden;padding:16px;">
                <img src="${f$(Z)}" alt="${f$(Q)}" style="max-width:100%;max-height:100%;object-fit:contain;border-radius:4px;" />
            </div>
            <div style="display:flex;align-items:center;justify-content:space-between;padding:8px 16px;border-top:1px solid var(--border-color,#333);flex-shrink:0;">
                <div style="font-size:12px;color:var(--text-secondary,#888);overflow:hidden;text-overflow:ellipsis;white-space:nowrap;min-width:0;">${f$(Q)}</div>
                <button id="img-open-tab" style="padding:5px 14px;background:var(--accent-color,#1d9bf0);color:var(--accent-contrast-text,#fff);
                    border:none;border-radius:4px;font-size:12px;font-weight:500;cursor:pointer;flex-shrink:0;
                    transition:background 0.15s;"
                    onmouseenter="this.style.background='var(--accent-hover,#1a8cd8)'"
                    onmouseleave="this.style.background='var(--accent-color,#1d9bf0)'">
                    Open in Tab
                </button>
            </div>
        `,_.appendChild(Y);let q=Y.querySelector("#img-open-tab");if(q)q.addEventListener("click",()=>{let N=new CustomEvent("image-viewer:open-tab",{bubbles:!0,detail:{path:j}});_.dispatchEvent(N)})}getContent(){return}isDirty(){return!1}focus(){}resize(){}dispose(){if(this.disposed)return;this.disposed=!0,this.container.innerHTML=""}}class d7{container;iframe=null;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Q=`/image-viewer/?path=${encodeURIComponent(j)}`;this.iframe=document.createElement("iframe"),this.iframe.src=Q,this.iframe.style.cssText="width:100%;height:100%;border:none;background:var(--bg-primary,#000);",_.appendChild(this.iframe)}getContent(){return}isDirty(){return!1}focus(){this.iframe?.focus()}resize(){}dispose(){if(this.disposed)return;if(this.disposed=!0,this.iframe)this.iframe.src="about:blank",this.iframe=null;this.container.innerHTML=""}}var v$={id:"image-viewer",label:"Image Viewer",icon:"image",capabilities:["readonly","preview"],placement:"tabs",canHandle(_){let $=_?.path||"";if(!_K.test($))return!1;return 48},mount(_,$){if($?.mode==="view")return new n7(_,$);return new d7(_,$)}};var $K=/\.(mp4|m4v|mov|webm|ogv)$/i;function jK(_){return _.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}class i7{container;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Q=j.split("/").pop()||"video.mp4",Z=document.createElement("div");Z.style.cssText="width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:var(--bg-primary,#1a1a1a);",Z.innerHTML=`
            <div style="text-align:center;max-width:360px;padding:24px;">
                <div style="font-size:56px;margin-bottom:12px;">\uD83C\uDFAC</div>
                <div style="font-size:14px;font-weight:600;color:var(--text-primary,#e0e0e0);margin-bottom:4px;word-break:break-word;">${jK(Q)}</div>
                <div style="font-size:11px;color:var(--text-secondary,#888);margin-bottom:20px;">Video File</div>
                <button id="video-open-tab" style="padding:8px 20px;background:var(--accent-color,#1d9bf0);color:var(--accent-contrast-text,#fff);
                    border:none;border-radius:5px;font-size:13px;font-weight:500;cursor:pointer;
                    transition:background 0.15s;"
                    onmouseenter="this.style.background='var(--accent-hover,#1a8cd8)'"
                    onmouseleave="this.style.background='var(--accent-color,#1d9bf0)'">
                    Open in Tab
                </button>
            </div>
        `,_.appendChild(Z);let Y=Z.querySelector("#video-open-tab");if(Y)Y.addEventListener("click",()=>{let q=new CustomEvent("video-viewer:open-tab",{bubbles:!0,detail:{path:j}});_.dispatchEvent(q)})}getContent(){return}isDirty(){return!1}focus(){}resize(){}dispose(){if(this.disposed)return;this.disposed=!0,this.container.innerHTML=""}}class r7{container;iframe=null;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Q=`/video-viewer/?path=${encodeURIComponent(j)}`;this.iframe=document.createElement("iframe"),this.iframe.src=Q,this.iframe.style.cssText="width:100%;height:100%;border:none;background:#111;",_.appendChild(this.iframe)}getContent(){return}isDirty(){return!1}focus(){this.iframe?.focus()}resize(){}dispose(){if(this.disposed)return;if(this.disposed=!0,this.iframe)this.iframe.src="about:blank",this.iframe=null;this.container.innerHTML=""}}var g$={id:"video-viewer",label:"Video Viewer",icon:"play-circle",capabilities:["readonly","preview"],placement:"tabs",canHandle(_){let $=_?.path||"";if(!$K.test($))return!1;return 54},mount(_,$){if($?.mode==="view")return new i7(_,$);return new r7(_,$)}};function QK(_){if(!_)return!1;let $=_.toLowerCase();return $.endsWith(".drawio")||$.endsWith(".drawio.xml")||$.endsWith(".drawio.svg")||$.endsWith(".drawio.png")}function ZK(_){return _.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}var b$='<mxfile host="app.diagrams.net"><diagram id="page-1" name="Page-1"><mxGraphModel dx="1260" dy="720" grid="1" gridSize="10" guides="1" tooltips="1" connect="1" arrows="1" fold="1" page="1" pageScale="1" pageWidth="850" pageHeight="1100" math="0" shadow="0"><root><mxCell id="0"/><mxCell id="1" parent="0"/></root></mxGraphModel></diagram></mxfile>';function o7(_){let $=String(_||"").trim();return $?$:b$}function YK(_){let $=String(_||"").toLowerCase();if($.endsWith(".drawio.svg")||$.endsWith(".svg"))return"xmlsvg";if($.endsWith(".drawio.png")||$.endsWith(".png"))return"xmlpng";return"xml"}function qK(_){let $="",j=32768;for(let Q=0;Q<_.length;Q+=j)$+=String.fromCharCode(..._.subarray(Q,Q+j));return btoa($)}function NK(_,$="*"){try{let j=(Y)=>{let q=_.parent||_.opener;if(!q)return!1;return q.postMessage(JSON.stringify({event:"workspace-export",...Y}),$),!0},Q=_.EditorUi;if(Q?.prototype&&!Q.prototype.__piclawWorkspaceSavePatched){let Y=Q.prototype.saveData;Q.prototype.saveData=function(q,N,K,G,X,V){try{if(q&&K!=null&&j({filename:q,format:N,data:K,mimeType:G,base64Encoded:Boolean(X),defaultMode:V}))return}catch(U){console.warn("[drawio-pane] saveData intercept failed, falling back to native save",U)}return Y.apply(this,arguments)},Q.prototype.__piclawWorkspaceSavePatched=!0}let Z=_.App;if(Z?.prototype&&!Z.prototype.__piclawExportPatched){let Y=Z.prototype.exportFile;Z.prototype.exportFile=function(q,N,K,G,X,V){try{if(N&&j({filename:N,data:q,mimeType:K,base64Encoded:Boolean(G),mode:X,folderId:V}))return}catch(U){console.warn("[drawio-pane] export intercept failed, falling back to native export",U)}return Y.apply(this,arguments)},Z.prototype.__piclawExportPatched=!0}return Boolean(Q?.prototype&&Q.prototype.__piclawWorkspaceSavePatched||Z?.prototype&&Z.prototype.__piclawExportPatched)}catch{return!1}}async function s7(_,$){let j=new Uint8Array(await _.arrayBuffer());return`data:${_.headers.get("Content-Type")||$};base64,${qK(j)}`}class a7{container;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Q=j.split("/").pop()||"diagram.drawio",Z=document.createElement("div");Z.style.cssText="width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:var(--bg-primary,#1a1a1a);",Z.innerHTML=`
            <div style="text-align:center;max-width:360px;padding:24px;">
                <div style="font-size:56px;margin-bottom:12px;">\uD83D\uDCD0</div>
                <div style="font-size:14px;font-weight:600;color:var(--text-primary,#e0e0e0);margin-bottom:4px;word-break:break-word;">${ZK(Q)}</div>
                <div style="font-size:11px;color:var(--text-secondary,#888);margin-bottom:20px;">Draw.io Diagram</div>
                <button id="drawio-open-tab" style="padding:8px 20px;background:var(--accent-color,#1d9bf0);color:var(--accent-contrast-text,#fff);
                    border:none;border-radius:5px;font-size:13px;font-weight:500;cursor:pointer;
                    transition:background 0.15s;"
                    onmouseenter="this.style.background='var(--accent-hover,#1a8cd8)'"
                    onmouseleave="this.style.background='var(--accent-color,#1d9bf0)'">
                    Edit in Tab
                </button>
            </div>
        `,_.appendChild(Z);let Y=Z.querySelector("#drawio-open-tab");if(Y)Y.addEventListener("click",()=>{let q=new CustomEvent("drawio:open-tab",{bubbles:!0,detail:{path:j}});_.dispatchEvent(q)})}getContent(){return}isDirty(){return!1}focus(){}resize(){}dispose(){if(this.disposed)return;this.disposed=!0,this.container.innerHTML=""}}class t7{container;iframe=null;overlay=null;disposed=!1;filePath;fileName;format;xmlData="";fileLoaded=!1;editorReady=!1;loadSent=!1;saveChain=Promise.resolve();onMessageBound;constructor(_,$){this.container=_,this.filePath=$.path||"",this.fileName=this.filePath.split("/").pop()||"diagram.drawio",this.format=YK(this.filePath),this.onMessageBound=this.onMessage.bind(this);let j=document.createElement("div");j.style.cssText="position:relative;width:100%;height:100%;background:#1e1e1e;",this.overlay=document.createElement("div"),this.overlay.style.cssText="position:absolute;inset:0;display:flex;align-items:center;justify-content:center;color:#999;font:14px system-ui,sans-serif;z-index:1;pointer-events:none;",this.overlay.textContent="Loading draw.io editor…",j.appendChild(this.overlay);let Z=`/drawio/index.html?embed=1&proto=json&spin=1&modified=0&noSaveBtn=1&noExitBtn=1&saveAndExit=0&libraries=0&ui=dark&dark=${window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?"1":"0"}`;this.iframe=document.createElement("iframe"),this.iframe.src=Z,this.iframe.style.cssText="width:100%;height:100%;border:none;background:#1e1e1e;position:relative;z-index:0;",this.iframe.addEventListener("load",()=>{let Y=()=>{if(!this.iframe?.contentWindow||this.disposed)return;if(NK(this.iframe.contentWindow))return;setTimeout(Y,250)};Y()}),j.appendChild(this.iframe),_.appendChild(j),window.addEventListener("message",this.onMessageBound),this.loadFile()}async loadFile(){if(!this.filePath){this.xmlData=b$,this.fileLoaded=!0,this.trySendLoad();return}try{let _=await fetch(`/workspace/raw?path=${encodeURIComponent(this.filePath)}`);if(_.ok)if(this.format==="xmlsvg")this.xmlData=await s7(_,"image/svg+xml");else if(this.format==="xmlpng")this.xmlData=await s7(_,"image/png");else this.xmlData=o7(await _.text());else if(_.status===404)this.xmlData=b$;else throw Error(`HTTP ${_.status}`);this.fileLoaded=!0,this.trySendLoad()}catch(_){if(this.overlay)this.overlay.textContent=`Failed to load: ${_ instanceof Error?_.message:String(_)}`}}trySendLoad(){if(this.disposed||this.loadSent||!this.editorReady||!this.fileLoaded||!this.iframe?.contentWindow)return;if(this.loadSent=!0,this.iframe.contentWindow.postMessage(JSON.stringify({action:"load",xml:this.format==="xml"?o7(this.xmlData):this.xmlData,autosave:1,saveAndExit:"0",noSaveBtn:"1",noExitBtn:"1",title:this.fileName}),"*"),this.overlay)this.overlay.style.display="none"}queueSave(_,$){if(!this.filePath)return;this.saveChain=this.saveChain.then(async()=>{let j=await fetch("/drawio/save",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({path:this.filePath,format:_.format||this.format,xml:_.xml,data:_.data,mimeType:_.mimeType,filename:_.filename,base64Encoded:_.base64Encoded})});if(!j.ok)throw Error(`HTTP ${j.status}`);if($&&this.iframe?.contentWindow)this.iframe.contentWindow.postMessage(JSON.stringify({action:"status",message:"Saved",modified:!1}),"*")}).catch((j)=>{if(console.error("[drawio-pane] save failed:",j),this.overlay)this.overlay.style.display="flex",this.overlay.textContent=`Save failed: ${j instanceof Error?j.message:String(j)}`})}onMessage(_){if(this.disposed||_.source!==this.iframe?.contentWindow)return;let $;try{$=typeof _.data==="string"?JSON.parse(_.data):_.data}catch{return}switch($?.event){case"init":this.editorReady=!0,this.trySendLoad();break;case"autosave":if(this.format==="xml"){if(typeof $.xml==="string")this.queueSave({xml:$.xml,format:"xml"},!1)}else if(typeof $.xml==="string")this.xmlData=$.xml;break;case"save":if(this.format==="xml"){if(typeof $.xml==="string")this.queueSave({xml:$.xml,format:"xml"},!0)}else if(typeof $.xml==="string"&&this.iframe?.contentWindow)this.xmlData=$.xml,this.iframe.contentWindow.postMessage(JSON.stringify({action:"export",format:this.format,xml:$.xml,spinKey:"export"}),"*");break;case"export":if(typeof $.data==="string")this.queueSave({data:$.data,format:this.format,xml:typeof $.xml==="string"?$.xml:void 0},!0);break;case"workspace-export":if(typeof $.data==="string")this.queueSave({data:$.data,xml:typeof $.xml==="string"?$.xml:void 0,mimeType:typeof $.mimeType==="string"?$.mimeType:void 0,filename:typeof $.filename==="string"?$.filename:void 0,base64Encoded:Boolean($.base64Encoded),format:this.format},!0);break;case"exit":default:break}}getContent(){return}isDirty(){return!1}focus(){this.iframe?.focus()}resize(){}dispose(){if(this.disposed)return;if(this.disposed=!0,window.removeEventListener("message",this.onMessageBound),this.iframe)this.iframe.src="about:blank",this.iframe=null;this.overlay=null,this.container.innerHTML=""}}var m$={id:"drawio-editor",label:"Draw.io Editor",icon:"git-merge",capabilities:["edit","preview"],placement:"tabs",canHandle(_){if(!QK(_?.path))return!1;return 60},mount(_,$){if($?.mode==="view")return new a7(_,$);return new t7(_,$)}};var KK=/\.mindmap\.ya?ml$/i,h$=String(Date.now());function e7(){let _=document.documentElement?.dataset?.theme;if(_==="dark")return!0;if(_==="light")return!1;try{return!!window.matchMedia?.("(prefers-color-scheme: dark)")?.matches}catch{return!1}}function p$(_){let $=_.split("?")[0];if(document.querySelector(`script[data-src="${$}"]`))return Promise.resolve();let Q=document.querySelector(`script[src="${$}"]`);if(Q)Q.remove();return new Promise((Z,Y)=>{let q=document.createElement("script");q.src=_,q.dataset.src=$,q.onload=()=>Z(),q.onerror=()=>Y(Error(`Failed to load ${_}`)),document.head.appendChild(q)})}function GK(_){if(document.querySelector(`link[href="${_}"]`))return;let $=document.createElement("link");$.rel="stylesheet",$.href=_,document.head.appendChild($)}function XK(_){let $=document.createElementNS("http://www.w3.org/2000/svg","svg");$.id="mindmap-svg",$.setAttribute("width","100%"),$.setAttribute("height","100%"),$.style.cssText="display:block;position:absolute;inset:0;",_.appendChild($);let j=document.createElement("div");j.id="toolbar",j.className="mindmap-toolbar",j.innerHTML=`
        <select id="layout-select">
            <option value="horizontal-tree">Horizontal Tree</option>
            <option value="vertical-tree">Vertical Tree</option>
            <option value="radial">Radial</option>
            <option value="force-directed">Force Directed</option>
        </select>
        <button type="button" id="zoom-fit" title="Fit to view">⊞</button>
        <button type="button" id="zoom-in"  title="Zoom in">+</button>
        <button type="button" id="zoom-out" title="Zoom out">−</button>
        <button type="button" id="reset-layout" title="Reset layout">↻</button>
    `,_.appendChild(j);let Q=document.createElement("div");Q.id="context-menu",Q.className="context-menu hidden",Q.innerHTML=`
        <button data-action="cut">Cut</button>
        <button data-action="copy">Copy</button>
        <button data-action="paste">Paste</button>
        <hr/>
        <button data-action="add-child">Add child</button>
        <button data-action="add-sibling">Add sibling</button>
        <hr/>
        <button data-action="delete">Delete</button>
    `,_.appendChild(Q)}class _9{container;constructor(_,$){this.container=_;let j=$.path||"",Q=j.split("/").pop()||"mindmap",Z=document.createElement("div");Z.style.cssText="width:100%;height:100%;display:flex;flex-direction:column;background:var(--bg-primary);",Z.innerHTML=`
            <div style="flex:1;display:flex;align-items:center;justify-content:center;padding:24px;">
                <div style="text-align:center;">
                    <div style="font-size:32px;margin-bottom:8px;">\uD83E\uDDE0</div>
                    <div style="font-size:14px;color:var(--text-primary);">${Q}</div>
                    <div style="font-size:12px;color:var(--text-secondary);margin-top:4px;">Mindmap Editor</div>
                </div>
            </div>
            <div style="display:flex;align-items:center;justify-content:flex-end;padding:8px 16px;border-top:1px solid var(--border-color);flex-shrink:0;">
                <button id="mm-open-tab" style="padding:5px 14px;background:var(--accent-color);color:var(--accent-contrast-text,#fff);
                    border:none;border-radius:4px;font-size:12px;font-weight:500;cursor:pointer;">Edit in Tab</button>
            </div>`,_.appendChild(Z),Z.querySelector("#mm-open-tab")?.addEventListener("click",()=>{_.dispatchEvent(new CustomEvent("mindmap:open-tab",{bubbles:!0,detail:{path:j}}))})}getContent(){return}isDirty(){return!1}focus(){}resize(){}dispose(){this.container.innerHTML=""}}class $9{container;filePath;dirty=!1;dirtyCallback=null;disposed=!1;mindmapEl=null;pendingContent=null;lastContent="";themeListener=()=>{window.__mindmapEditor?.setTheme?.(e7())};constructor(_,$){this.container=_,this.filePath=$.path||"",this.init($.content)}async resolveInitialContent(_){if(_!==void 0)return _;if(!this.filePath)return"";try{return(await(await fetch(`/workspace/file?path=${encodeURIComponent(this.filePath)}&max=1000000&mode=edit`)).json())?.text||""}catch{return""}}async init(_){let $=await this.resolveInitialContent(_);if(this.disposed)return;if(this.lastContent=$,GK("/static/css/mindmap.css"),await Promise.all([p$("/static/js/vendor/d3-mindmap.min.js?v="+h$),p$("/static/js/vendor/js-yaml.min.js?v="+h$)]),this.disposed)return;this.mindmapEl=document.createElement("div"),this.mindmapEl.id="mindmap-container",this.mindmapEl.tabIndex=-1,this.mindmapEl.style.cssText="width:100%;height:100%;overflow:hidden;position:relative;outline:none;",this.container.appendChild(this.mindmapEl),XK(this.mindmapEl);let j=e7(),Q=this.filePath.replace(/\/[^/]+$/,"")||"/";try{if(await p$("/static/js/vendor/mindmap-editor.js?v="+h$),this.disposed)return;let Z=window.__mindmapEditor;if(!Z)throw Error("__mindmapEditor not found");if(Z.mount({content:$,isDark:j,onEdit:(Y)=>{this.lastContent=Y,this.dirty=!0,this.dirtyCallback?.(!0),this.saveToWorkspace(Y)},resolveImagePath:(Y)=>{if(Y.startsWith("data:")||Y.startsWith("http"))return Y;return`/workspace/raw?path=${encodeURIComponent(Q+"/"+Y)}`}}),this.pendingContent!==null)Z.update(this.pendingContent),this.lastContent=this.pendingContent,this.pendingContent=null;window.addEventListener("piclaw-theme-change",this.themeListener)}catch(Z){if(console.error("[mindmap] Failed to load mindmap renderer:",Z),this.mindmapEl)this.mindmapEl.innerHTML='<div style="padding:24px;color:var(--text-secondary);">Failed to load mindmap editor.</div>'}}async saveToWorkspace(_){if(!this.filePath)return;try{let $=await fetch("/workspace/file",{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({path:this.filePath,content:_})});if(!$.ok)throw Error(`HTTP ${$.status}`);this.dirty=!1,this.dirtyCallback?.(!1)}catch($){console.error("[mindmap] Save failed:",$)}}getContent(){return}isDirty(){return this.dirty}setContent(_,$){if(_===this.lastContent)return;let j=window.__mindmapEditor;if(j?.update)j.update(_);else this.pendingContent=_;this.lastContent=_,this.dirty=!1,this.dirtyCallback?.(!1)}focus(){this.mindmapEl?.focus()}resize(){window.dispatchEvent(new Event("resize"))}onDirtyChange(_){this.dirtyCallback=_}dispose(){if(this.disposed)return;this.disposed=!0,window.removeEventListener("piclaw-theme-change",this.themeListener),window.__mindmapEditor?.destroy(),this.pendingContent=null,this.container.innerHTML=""}}var c$={id:"mindmap-editor",label:"Mindmap Editor",icon:"mindmap",capabilities:["edit","preview"],placement:"tabs",canHandle(_){let $=_?.path||"";if(!KK.test($))return!1;return 50},mount(_,$){if($?.mode==="view")return new _9(_,$);return new $9(_,$)}};var VK=/\.kanban\.md$/i,UK=String(Date.now());function j9(){let _=document.documentElement?.dataset?.theme;if(_==="dark")return!0;if(_==="light")return!1;try{return!!window.matchMedia?.("(prefers-color-scheme: dark)")?.matches}catch{return!1}}function BK(){let _=window;if(_.preact)return;_.preact={h:O8,render:x4,Component:G5,createContext:z2},_.preactHooks={useState:g,useEffect:v,useCallback:T,useRef:I,useMemo:f0,useReducer:P6,useContext:O2,useLayoutEffect:u5,useImperativeHandle:J2,useErrorBoundary:D2,useDebugValue:A2},_.htm={bind:()=>B}}function LK(_){let $=_.split("?")[0];if(document.querySelector(`script[data-src="${$}"]`))return Promise.resolve();let Q=document.querySelector(`script[src="${$}"]`);if(Q)Q.remove();return new Promise((Z,Y)=>{let q=document.createElement("script");q.src=_,q.dataset.src=$,q.onload=()=>Z(),q.onerror=()=>Y(Error(`Failed to load ${_}`)),document.head.appendChild(q)})}function WK(_){if(document.querySelector(`link[href="${_}"]`))return;let $=document.createElement("link");$.rel="stylesheet",$.href=_,document.head.appendChild($)}class Q9{container;constructor(_,$){this.container=_;let j=$.path||"",Q=j.split("/").pop()||"kanban",Z=document.createElement("div");Z.style.cssText="width:100%;height:100%;display:flex;flex-direction:column;background:var(--bg-primary);",Z.innerHTML=`
            <div style="flex:1;display:flex;align-items:center;justify-content:center;padding:24px;">
                <div style="text-align:center;">
                    <div style="font-size:32px;margin-bottom:8px;">\uD83D\uDCCB</div>
                    <div style="font-size:14px;color:var(--text-primary);">${Q}</div>
                    <div style="font-size:12px;color:var(--text-secondary);margin-top:4px;">Kanban Board</div>
                </div>
            </div>
            <div style="display:flex;align-items:center;justify-content:flex-end;padding:8px 16px;border-top:1px solid var(--border-color);flex-shrink:0;">
                <button id="kb-open-tab" style="padding:5px 14px;background:var(--accent-color);color:var(--accent-contrast-text,#fff);
                    border:none;border-radius:4px;font-size:12px;font-weight:500;cursor:pointer;">
                    Edit in Tab
                </button>
            </div>
        `,_.appendChild(Z),Z.querySelector("#kb-open-tab")?.addEventListener("click",()=>{_.dispatchEvent(new CustomEvent("kanban:open-tab",{bubbles:!0,detail:{path:j}}))})}getContent(){return}isDirty(){return!1}focus(){}resize(){}dispose(){this.container.innerHTML=""}}class Z9{container;filePath;dirty=!1;dirtyCallback=null;disposed=!1;boardEl=null;pendingContent=null;lastContent="";themeListener=()=>{window.__kanbanEditor?.setTheme?.(j9())};constructor(_,$){this.container=_,this.filePath=$.path||"",this.init($.content)}async resolveInitialContent(_){if(_!==void 0)return _;if(!this.filePath)return"";try{return(await(await fetch(`/workspace/file?path=${encodeURIComponent(this.filePath)}&max=1000000&mode=edit`)).json())?.text||""}catch{return""}}async init(_){let $=await this.resolveInitialContent(_);if(this.disposed)return;this.lastContent=$,WK("/static/css/kanban.css"),this.boardEl=document.createElement("div"),this.boardEl.id="kanban-container",this.boardEl.style.cssText="width:100%;height:100%;overflow:auto;position:relative;",this.container.appendChild(this.boardEl);let j=j9();try{if(BK(),await LK("/static/js/vendor/kanban-editor.js?v="+UK),this.disposed)return;let Q=window.__kanbanEditor;if(!Q)throw Error("__kanbanEditor not found");if(Q.mount(this.boardEl,{content:$,isDark:j,onEdit:(Z)=>{this.lastContent=Z,this.dirty=!0,this.dirtyCallback?.(!0),this.saveToWorkspace(Z)}}),this.pendingContent!==null)Q.update(this.pendingContent),this.lastContent=this.pendingContent,this.pendingContent=null;window.addEventListener("piclaw-theme-change",this.themeListener)}catch(Q){if(console.error("[kanban] Failed to load kanban renderer:",Q),this.boardEl)this.boardEl.innerHTML='<div style="padding:24px;color:var(--text-secondary);">Failed to load kanban editor.</div>'}}async saveToWorkspace(_){if(!this.filePath)return;try{let $=await fetch("/workspace/file",{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({path:this.filePath,content:_})});if(!$.ok)throw Error(`HTTP ${$.status}`);this.dirty=!1,this.dirtyCallback?.(!1)}catch($){console.error("[kanban] Save failed:",$)}}getContent(){return}isDirty(){return this.dirty}setContent(_,$){if(_===this.lastContent)return;let j=window.__kanbanEditor;if(j?.update)j.update(_);else this.pendingContent=_;this.lastContent=_,this.dirty=!1,this.dirtyCallback?.(!1)}focus(){this.boardEl?.focus()}resize(){}onDirtyChange(_){this.dirtyCallback=_}dispose(){if(this.disposed)return;this.disposed=!0,window.removeEventListener("piclaw-theme-change",this.themeListener),window.__kanbanEditor?.destroy(),this.pendingContent=null,this.container.innerHTML=""}}var l$={id:"kanban-editor",label:"Kanban Board",icon:"kanban",capabilities:["edit","preview"],placement:"tabs",canHandle(_){let $=_?.path||"";if(!VK.test($))return!1;return 50},mount(_,$){if($?.mode==="view")return new Q9(_,$);return new Z9(_,$)}};class Y9{tabs=new Map;activeId=null;mruOrder=[];listeners=new Set;onChange(_){return this.listeners.add(_),()=>this.listeners.delete(_)}notify(){let _=this.getTabs(),$=this.activeId;for(let j of this.listeners)try{j(_,$)}catch(Q){console.warn("[tab-store] Change listener failed:",Q)}}open(_,$){let j=this.tabs.get(_);if(!j)j={id:_,label:$||_.split("/").pop()||_,path:_,dirty:!1,pinned:!1},this.tabs.set(_,j);return this.activate(_),j}activate(_){if(!this.tabs.has(_))return;this.activeId=_,this.mruOrder=[_,...this.mruOrder.filter(($)=>$!==_)],this.notify()}close(_){if(!this.tabs.get(_))return!1;if(this.tabs.delete(_),this.mruOrder=this.mruOrder.filter((j)=>j!==_),this.activeId===_)this.activeId=this.mruOrder[0]||null;return this.notify(),!0}closeOthers(_){for(let[$,j]of this.tabs)if($!==_&&!j.pinned)this.tabs.delete($),this.mruOrder=this.mruOrder.filter((Q)=>Q!==$);if(this.activeId&&!this.tabs.has(this.activeId))this.activeId=_;this.notify()}closeAll(){for(let[_,$]of this.tabs)if(!$.pinned)this.tabs.delete(_),this.mruOrder=this.mruOrder.filter((j)=>j!==_);if(this.activeId&&!this.tabs.has(this.activeId))this.activeId=this.mruOrder[0]||null;this.notify()}setDirty(_,$){let j=this.tabs.get(_);if(!j||j.dirty===$)return;j.dirty=$,this.notify()}togglePin(_){let $=this.tabs.get(_);if(!$)return;$.pinned=!$.pinned,this.notify()}saveViewState(_,$){let j=this.tabs.get(_);if(j)j.viewState=$}getViewState(_){return this.tabs.get(_)?.viewState}rename(_,$,j){let Q=this.tabs.get(_);if(!Q)return;if(this.tabs.delete(_),Q.id=$,Q.path=$,Q.label=j||$.split("/").pop()||$,this.tabs.set($,Q),this.mruOrder=this.mruOrder.map((Z)=>Z===_?$:Z),this.activeId===_)this.activeId=$;this.notify()}getTabs(){return Array.from(this.tabs.values())}getActiveId(){return this.activeId}getActive(){return this.activeId?this.tabs.get(this.activeId)||null:null}get(_){return this.tabs.get(_)}get size(){return this.tabs.size}hasUnsaved(){for(let _ of this.tabs.values())if(_.dirty)return!0;return!1}getDirtyTabs(){return Array.from(this.tabs.values()).filter((_)=>_.dirty)}nextTab(){let _=this.getTabs();if(_.length<=1)return;let $=_.findIndex((Q)=>Q.id===this.activeId),j=_[($+1)%_.length];this.activate(j.id)}prevTab(){let _=this.getTabs();if(_.length<=1)return;let $=_.findIndex((Q)=>Q.id===this.activeId),j=_[($-1+_.length)%_.length];this.activate(j.id)}mruSwitch(){if(this.mruOrder.length>1)this.activate(this.mruOrder[1])}}var t0=new Y9;function q9({handleSseEvent:_,handleConnectionStatusChange:$,loadPosts:j,onWake:Q,chatJid:Z}){let Y=I(_);Y.current=_;let q=I($);q.current=$;let N=I(j);N.current=j;let K=I(Q);K.current=Q,v(()=>{let G=new I8((V,U)=>Y.current(V,U),(V)=>q.current(V),{chatJid:Z});G.connect();let X=()=>{G.reconnectIfNeeded();let V=typeof document<"u"?document:null;if(!V||V.visibilityState==="visible")K.current?.()};return window.addEventListener("focus",X),document.addEventListener("visibilitychange",X),()=>{window.removeEventListener("focus",X),document.removeEventListener("visibilitychange",X),G.disconnect()}},[Z])}function N9(){let[_,$]=g(!1),[j,Q]=g("default"),Z=I(!1);v(()=>{let K=O5("notificationsEnabled",!1);if(Z.current=K,$(K),typeof Notification<"u")Q(Notification.permission)},[]),v(()=>{Z.current=_},[_]);let Y=T(()=>{if(typeof Notification>"u")return Promise.resolve("denied");try{let K=Notification.requestPermission();if(K&&typeof K.then==="function")return K;return Promise.resolve(K)}catch{return Promise.resolve("default")}},[]),q=T(async()=>{if(typeof window>"u"||typeof Notification>"u")return;if(!window.isSecureContext){alert("Notifications require a secure context (HTTPS or installed app).");return}if(Notification.permission==="denied"){Q("denied"),alert("Browser notifications are blocked. Enable them in your browser settings.");return}if(Notification.permission==="default"){let G=await Y();if(Q(G||"default"),G!=="granted"){Z.current=!1,$(!1),q1("notificationsEnabled","false");return}}let K=!Z.current;Z.current=K,$(K),q1("notificationsEnabled",String(K))},[Y]),N=T((K,G)=>{if(!Z.current)return!1;if(typeof Notification>"u")return!1;if(Notification.permission!=="granted")return!1;try{let X=new Notification(K,{body:G});return X.onclick=()=>{try{window.focus()}catch{}},!0}catch{return!1}},[]);return{notificationsEnabled:_,notificationPermission:j,toggleNotifications:q,notify:N}}var $8=(_)=>{let $=new Set;return(_||[]).filter((j)=>{if(!j||$.has(j.id))return!1;return $.add(j.id),!0})};function K9({preserveTimelineScroll:_,preserveTimelineScrollTop:$,chatJid:j=null}){let[Q,Z]=g(null),[Y,q]=g(!1),N=I(!1),K=I(null),G=I(!1),X=I(null),V=I(null),U=I(0);v(()=>{N.current=Y},[Y]),v(()=>{V.current=Q},[Q]),v(()=>{U.current+=1,X.current=null,G.current=!1,N.current=!1,q(!1)},[j]);let W=T(async(O=null)=>{let F=U.current;try{if(O){let A=await S6(O,50,0,j);if(F!==U.current)return;Z(A.posts),q(!1)}else{let A=await l4(10,null,j);if(F!==U.current)return;Z(A.posts),q(A.has_more)}}catch(A){if(F!==U.current)return;console.error("Failed to load posts:",A)}},[j]),J=T(async()=>{let O=U.current;try{let F=await l4(10,null,j);if(O!==U.current)return;Z((A)=>{if(!A||A.length===0)return F.posts;return $8([...F.posts,...A])}),q((A)=>A||F.has_more)}catch(F){if(O!==U.current)return;console.error("Failed to refresh timeline:",F)}},[j]),D=T(async(O={})=>{let F=U.current,A=V.current;if(!A||A.length===0)return;if(G.current)return;let{preserveScroll:k=!0,preserveMode:m="top",allowRepeat:f=!1}=O,l=(x)=>{if(!k){x();return}if(m==="top")$(x);else _(x)},P=A.slice().sort((x,z)=>x.id-z.id)[0]?.id;if(!Number.isFinite(P))return;if(!f&&X.current===P)return;G.current=!0,X.current=P;try{let x=await l4(10,P,j);if(F!==U.current)return;if(x.posts.length>0)l(()=>{Z((z)=>$8([...x.posts,...z||[]])),q(x.has_more)});else q(!1)}catch(x){if(F!==U.current)return;console.error("Failed to load more posts:",x)}finally{if(F===U.current)G.current=!1}},[j,_,$]);return v(()=>{K.current=D},[D]),{posts:Q,setPosts:Z,hasMore:Y,setHasMore:q,hasMoreRef:N,loadPosts:W,refreshTimeline:J,loadMore:D,loadMoreRef:K,loadingMoreRef:G,lastBeforeIdRef:X}}function G9(){let[_,$]=g(null),[j,Q]=g({text:"",totalLines:0}),[Z,Y]=g(""),[q,N]=g({text:"",totalLines:0}),[K,G]=g(null),[X,V]=g(null),[U,W]=g(null),J=I(null),D=I(0),O=I(!1),F=I(""),A=I(""),k=I(null),m=I(null),f=I(null),l=I(null),o=I(!1),P=I(!1);return{agentStatus:_,setAgentStatus:$,agentDraft:j,setAgentDraft:Q,agentPlan:Z,setAgentPlan:Y,agentThought:q,setAgentThought:N,pendingRequest:K,setPendingRequest:G,currentTurnId:X,setCurrentTurnId:V,steerQueuedTurnId:U,setSteerQueuedTurnId:W,lastAgentEventRef:J,lastSilenceNoticeRef:D,isAgentRunningRef:O,draftBufferRef:F,thoughtBufferRef:A,pendingRequestRef:k,stalledPostIdRef:m,currentTurnIdRef:f,steerQueuedTurnIdRef:l,thoughtExpandedRef:o,draftExpandedRef:P}}function X9({appShellRef:_,sidebarWidthRef:$,editorWidthRef:j,dockHeightRef:Q}){let Z=I((X)=>{X.preventDefault();let V=_.current;if(!V)return;let U=X.clientX,W=$.current||280,J=X.currentTarget;J.classList.add("dragging"),V.classList.add("sidebar-resizing"),document.body.style.cursor="col-resize",document.body.style.userSelect="none";let D=U,O=(A)=>{D=A.clientX;let k=Math.min(Math.max(W+(A.clientX-U),160),600);V.style.setProperty("--sidebar-width",`${k}px`),$.current=k},F=()=>{let A=Math.min(Math.max(W+(D-U),160),600);$.current=A,J.classList.remove("dragging"),V.classList.remove("sidebar-resizing"),document.body.style.cursor="",document.body.style.userSelect="",q1("sidebarWidth",String(Math.round(A))),document.removeEventListener("mousemove",O),document.removeEventListener("mouseup",F)};document.addEventListener("mousemove",O),document.addEventListener("mouseup",F)}).current,Y=I((X)=>{X.preventDefault();let V=_.current;if(!V)return;let U=X.touches[0];if(!U)return;let W=U.clientX,J=$.current||280,D=X.currentTarget;D.classList.add("dragging"),V.classList.add("sidebar-resizing"),document.body.style.userSelect="none";let O=(A)=>{let k=A.touches[0];if(!k)return;A.preventDefault();let m=Math.min(Math.max(J+(k.clientX-W),160),600);V.style.setProperty("--sidebar-width",`${m}px`),$.current=m},F=()=>{D.classList.remove("dragging"),V.classList.remove("sidebar-resizing"),document.body.style.userSelect="",q1("sidebarWidth",String(Math.round($.current||J))),document.removeEventListener("touchmove",O),document.removeEventListener("touchend",F),document.removeEventListener("touchcancel",F)};document.addEventListener("touchmove",O,{passive:!1}),document.addEventListener("touchend",F),document.addEventListener("touchcancel",F)}).current,q=I((X)=>{X.preventDefault();let V=_.current;if(!V)return;let U=X.clientX,W=j.current||$.current||280,J=X.currentTarget;J.classList.add("dragging"),document.body.style.cursor="col-resize",document.body.style.userSelect="none";let D=U,O=(A)=>{D=A.clientX;let k=Math.min(Math.max(W+(A.clientX-U),200),800);V.style.setProperty("--editor-width",`${k}px`),j.current=k},F=()=>{let A=Math.min(Math.max(W+(D-U),200),800);j.current=A,J.classList.remove("dragging"),document.body.style.cursor="",document.body.style.userSelect="",q1("editorWidth",String(Math.round(A))),document.removeEventListener("mousemove",O),document.removeEventListener("mouseup",F)};document.addEventListener("mousemove",O),document.addEventListener("mouseup",F)}).current,N=I((X)=>{X.preventDefault();let V=_.current;if(!V)return;let U=X.touches[0];if(!U)return;let W=U.clientX,J=j.current||$.current||280,D=X.currentTarget;D.classList.add("dragging"),document.body.style.userSelect="none";let O=(A)=>{let k=A.touches[0];if(!k)return;A.preventDefault();let m=Math.min(Math.max(J+(k.clientX-W),200),800);V.style.setProperty("--editor-width",`${m}px`),j.current=m},F=()=>{D.classList.remove("dragging"),document.body.style.userSelect="",q1("editorWidth",String(Math.round(j.current||J))),document.removeEventListener("touchmove",O),document.removeEventListener("touchend",F),document.removeEventListener("touchcancel",F)};document.addEventListener("touchmove",O,{passive:!1}),document.addEventListener("touchend",F),document.addEventListener("touchcancel",F)}).current,K=I((X)=>{X.preventDefault();let V=_.current;if(!V)return;let U=X.clientY,W=Q?.current||200,J=X.currentTarget;J.classList.add("dragging"),document.body.style.cursor="row-resize",document.body.style.userSelect="none";let D=U,O=(A)=>{D=A.clientY;let k=Math.min(Math.max(W-(A.clientY-U),100),window.innerHeight*0.5);if(V.style.setProperty("--dock-height",`${k}px`),Q)Q.current=k;window.dispatchEvent(new CustomEvent("dock-resize"))},F=()=>{let A=Math.min(Math.max(W-(D-U),100),window.innerHeight*0.5);if(Q)Q.current=A;J.classList.remove("dragging"),document.body.style.cursor="",document.body.style.userSelect="",q1("dockHeight",String(Math.round(A))),window.dispatchEvent(new CustomEvent("dock-resize")),document.removeEventListener("mousemove",O),document.removeEventListener("mouseup",F)};document.addEventListener("mousemove",O),document.addEventListener("mouseup",F)}).current,G=I((X)=>{X.preventDefault();let V=_.current;if(!V)return;let U=X.touches[0];if(!U)return;let W=U.clientY,J=Q?.current||200,D=X.currentTarget;D.classList.add("dragging"),document.body.style.userSelect="none";let O=(A)=>{let k=A.touches[0];if(!k)return;A.preventDefault();let m=Math.min(Math.max(J-(k.clientY-W),100),window.innerHeight*0.5);if(V.style.setProperty("--dock-height",`${m}px`),Q)Q.current=m;window.dispatchEvent(new CustomEvent("dock-resize"))},F=()=>{D.classList.remove("dragging"),document.body.style.userSelect="",q1("dockHeight",String(Math.round(Q?.current||J))),window.dispatchEvent(new CustomEvent("dock-resize")),document.removeEventListener("touchmove",O),document.removeEventListener("touchend",F),document.removeEventListener("touchcancel",F)};document.addEventListener("touchmove",O,{passive:!1}),document.addEventListener("touchend",F),document.addEventListener("touchcancel",F)}).current;return{handleSplitterMouseDown:Z,handleSplitterTouchStart:Y,handleEditorSplitterMouseDown:q,handleEditorSplitterTouchStart:N,handleDockSplitterMouseDown:K,handleDockSplitterTouchStart:G}}function FK(_,$,j,Q){if(!(_ instanceof Map)||_.size===0||!$||!j)return _;let Z=!1,Y=new Map;for(let[q,N]of _.entries()){let K=q;if(Q==="dir"){if(q===$)K=j,Z=!0;else if(q.startsWith(`${$}/`))K=`${j}${q.slice($.length)}`,Z=!0}else if(q===$)K=j,Z=!0;Y.set(K,N)}return Z?Y:_}function V9({onTabClosed:_}={}){let $=I(_);$.current=_;let[j,Q]=g(()=>t0.getTabs()),[Z,Y]=g(()=>t0.getActiveId()),[q,N]=g(()=>t0.getTabs().length>0);v(()=>{return t0.onChange((P,x)=>{Q(P),Y(x),N(P.length>0)})},[]);let[K,G]=g(()=>new Set),[X,V]=g(()=>new Map),U=T((P)=>{G((x)=>{let z=new Set(x);if(z.has(P))z.delete(P);else z.add(P);return z})},[]),W=T((P)=>{G((x)=>{if(!x.has(P))return x;let z=new Set(x);return z.delete(P),z})},[]),J=T((P)=>{V((x)=>{if(!x.has(P))return x;let z=new Map(x);return z.delete(P),z})},[]),D=T((P,x={})=>{if(!P)return;let z=typeof x?.paneOverrideId==="string"&&x.paneOverrideId.trim()?x.paneOverrideId.trim():null,C={path:P,mode:"edit"};try{if(!(z?d0.get(z):d0.resolve(C))){if(!d0.get("editor")){console.warn(`[openEditor] No pane handler for: ${P}`);return}}}catch(e){console.warn(`[openEditor] paneRegistry.resolve() error for "${P}":`,e)}let b=typeof x?.label==="string"&&x.label.trim()?x.label.trim():void 0;if(t0.open(P,b),z)V((e)=>{if(e.get(P)===z)return e;let p=new Map(e);return p.set(P,z),p})},[]),O=T(()=>{let P=t0.getActiveId();if(P){let x=t0.get(P);if(x?.dirty){if(!window.confirm(`"${x.label}" has unsaved changes. Close anyway?`))return}t0.close(P),W(P),J(P),$.current?.(P)}},[J,W]),F=T((P)=>{let x=t0.get(P);if(x?.dirty){if(!window.confirm(`"${x.label}" has unsaved changes. Close anyway?`))return}t0.close(P),W(P),J(P),$.current?.(P)},[J,W]),A=T((P)=>{t0.activate(P)},[]),k=T((P)=>{let x=t0.getTabs().filter((b)=>b.id!==P&&!b.pinned),z=x.filter((b)=>b.dirty).length;if(z>0){if(!window.confirm(`${z} unsaved tab${z>1?"s":""} will be closed. Continue?`))return}let C=x.map((b)=>b.id);t0.closeOthers(P),C.forEach((b)=>{W(b),J(b),$.current?.(b)})},[J,W]),m=T(()=>{let P=t0.getTabs().filter((C)=>!C.pinned),x=P.filter((C)=>C.dirty).length;if(x>0){if(!window.confirm(`${x} unsaved tab${x>1?"s":""} will be closed. Continue?`))return}let z=P.map((C)=>C.id);t0.closeAll(),z.forEach((C)=>{W(C),J(C),$.current?.(C)})},[J,W]),f=T((P)=>{t0.togglePin(P)},[]),l=T((P)=>{if(!P)return;V((x)=>{if(x.get(P)==="editor")return x;let z=new Map(x);return z.set(P,"editor"),z}),t0.activate(P)},[]),o=T(()=>{let P=t0.getActiveId();if(P)window.dispatchEvent(new CustomEvent("workspace-reveal-path",{detail:{path:P}}))},[]);return v(()=>{let P=(x)=>{let{oldPath:z,newPath:C,type:b}=x.detail||{};if(!z||!C)return;if(b==="dir"){for(let e of t0.getTabs())if(e.path===z||e.path.startsWith(`${z}/`)){let p=`${C}${e.path.slice(z.length)}`;t0.rename(e.id,p)}}else t0.rename(z,C);V((e)=>FK(e,z,C,b))};return window.addEventListener("workspace-file-renamed",P),()=>window.removeEventListener("workspace-file-renamed",P)},[]),v(()=>{let P=(x)=>{if(t0.hasUnsaved())x.preventDefault(),x.returnValue=""};return window.addEventListener("beforeunload",P),()=>window.removeEventListener("beforeunload",P)},[]),{editorOpen:q,tabStripTabs:j,tabStripActiveId:Z,previewTabs:K,tabPaneOverrides:X,openEditor:D,closeEditor:O,handleTabClose:F,handleTabActivate:A,handleTabCloseOthers:k,handleTabCloseAll:m,handleTabTogglePin:f,handleTabTogglePreview:U,handleTabEditSource:l,revealInExplorer:o}}function n$(_,$){try{if(typeof window>"u")return $;let j=window.__PICLAW_SILENCE||{},Q=`__PICLAW_SILENCE_${_.toUpperCase()}_MS`,Z=j[_]??window[Q],Y=Number(Z);return Number.isFinite(Y)?Y:$}catch{return $}}var d$=n$("warning",30000),U9=n$("finalize",120000),i$=n$("refresh",30000),B9=30000;function L9(_){let $={};return(_?.agents||[]).forEach((j)=>{$[j.id]=j}),$}function W9(){if(/iPad|iPhone/.test(navigator.userAgent))return!0;return navigator.platform==="MacIntel"&&navigator.maxTouchPoints>1}function F9(_=30000){let[,$]=g(0);v(()=>{let j=setInterval(()=>$((Q)=>Q+1),_);return()=>clearInterval(j)},[_])}function z9(_,$=160){let j=String(_||"").replace(/\r\n/g,`
`);if(!j)return 0;return j.split(`
`).reduce((Q,Z)=>Q+Math.max(1,Math.ceil(Z.length/$)),0)}function h8(_){return _?.turn_id||_?.turnId||null}function E5(_){if(typeof _?.text!=="string"||!_.text)return null;let $=Number.isFinite(_?.totalLines)?Number(_.totalLines):Number.isFinite(_?.total_lines)?Number(_.total_lines):0;return{text:_.text,totalLines:$}}function r$(_,$){return typeof _?.text==="string"&&_.text.length>=$.length}async function H9(_){let{panelKey:$,expanded:j,currentTurnIdRef:Q,thoughtExpandedRef:Z,draftExpandedRef:Y,setAgentThoughtVisibility:q,getAgentThought:N,thoughtBufferRef:K,draftBufferRef:G,setAgentThought:X,setAgentDraft:V}=_;if($!=="thought"&&$!=="draft")return;let U=Q.current;if($==="thought"){if(Z.current=j,U)try{await q(U,"thought",j)}catch(W){console.warn("Failed to update thought visibility:",W)}if(!j)return;try{let W=U?await N(U,"thought"):null;if(W?.text)K.current=W.text;X((J)=>({...J||{text:"",totalLines:0},fullText:K.current||J?.fullText||"",totalLines:Number.isFinite(W?.total_lines)?W.total_lines:J?.totalLines||0}))}catch(W){console.warn("Failed to fetch full thought:",W)}return}if(Y.current=j,U)try{await q(U,"draft",j)}catch(W){console.warn("Failed to update draft visibility:",W)}if(!j)return;try{let W=U?await N(U,"draft"):null;if(W?.text)G.current=W.text;V((J)=>({...J||{text:"",totalLines:0},fullText:G.current||J?.fullText||"",totalLines:Number.isFinite(W?.total_lines)?W.total_lines:J?.totalLines||0}))}catch(W){console.warn("Failed to fetch full draft:",W)}}function J9(_,$){if(typeof _!=="string")return{kind:"ignore"};let j=_.trim();if(!j)return{kind:"toast",title:"No file selected",detail:"Use a valid file path from a file pill.",level:"warning"};if(!$.editorOpen)return{kind:"toast",title:"Editor pane is not open",detail:"Open the editor pane to open files from pills.",level:"warning"};if(/^[a-z][a-z0-9+.-]*:/i.test(j))return{kind:"toast",title:"Cannot open external path from file pill",detail:"Use an in-workspace file path.",level:"warning"};try{if(!$.resolvePane({path:j,mode:"edit"}))return{kind:"toast",title:"No editor available",detail:`No editor can open: ${j}`,level:"warning"}}catch{return{kind:"toast",title:"No editor available",detail:`No editor can open: ${j}`,level:"warning"}}return{kind:"open",path:j}}function O9(_){let $=String(_||"").trim();if(!$.startsWith("/btw"))return null;let j=$.slice(4).trim();if(!j)return{type:"help"};if(j==="clear"||j==="close")return{type:"clear"};return{type:"ask",question:j}}function A9(_){return String(_||"").trim()||"web:default"}function D9(_){if(!_)return!1;let $=String(_.answer||"").trim();return _.status!=="running"&&Boolean($)}function E9(_){if(!_)return!1;return _.status!=="running"}function k9(_){let $=String(_?.question||"").trim(),j=String(_?.answer||"").trim();if(!$&&!j)return"";return["BTW side conversation",$?`Question: ${$}`:null,j?`Answer:
${j}`:null].filter(Boolean).join(`

`)}function o$(_){return String(_||"").trim()||"web:default"}function M9({remainingQueueCount:_=0,currentTurnId:$=null,isAgentTurnActive:j=!1}={}){return Number(_||0)<=0&&!$&&!j}function zK(_){if(!_||typeof _!=="object")return null;let $=_.started_at??_.startedAt;if(typeof $!=="string"||!$)return null;let j=Date.parse($);return Number.isFinite(j)?j:null}function y4(_){if(!_||typeof _!=="object")return!1;let $=_.intent_key??_.intentKey;return _.type==="intent"&&$==="compaction"}function p8(_){if(!_||typeof _!=="object")return"";let $=_.title;if(typeof $==="string"&&$.trim())return $.trim();let j=_.status;if(typeof j==="string"&&j.trim())return j.trim();return y4(_)?"Compacting context":"Working..."}function HK(_){let $=Math.max(0,Math.floor(_/1000)),j=$%60,Q=Math.floor($/60)%60,Z=Math.floor($/3600);if(Z>0)return`${Z}:${String(Q).padStart(2,"0")}:${String(j).padStart(2,"0")}`;return`${Q}:${String(j).padStart(2,"0")}`}function c8(_,$=Date.now()){let j=zK(_);if(j===null)return null;return HK(Math.max(0,$-j))}function j8(_){return typeof _==="string"}function I9(_){return typeof _==="string"&&_.trim().length>0}function s$(_){if(!Array.isArray(_))return[];return _.filter(($)=>I9($?.chat_jid)&&I9($?.agent_name))}function x9(_){if(!Array.isArray(_))return[];return _.filter(($)=>j8($?.chat_jid)&&j8($?.agent_name))}function T9(_,$,j){if(!Array.isArray($)||$.length===0)return Array.isArray(_)?_:[];let Q=new Map;if(Array.isArray(_)){for(let q of _)if(j8(q?.chat_jid))Q.set(q.chat_jid,q)}let Z=$.map((q)=>{if(!j8(q?.chat_jid))return q;let N=Q.get(q.chat_jid);return N?{...q,...N,is_active:N.is_active??q.is_active}:q}),Y=j8(j)?j:"";return Z.sort((q,N)=>{if(q.chat_jid===Y&&N.chat_jid!==Y)return-1;if(N.chat_jid===Y&&q.chat_jid!==Y)return 1;let K=Boolean(q.archived_at),G=Boolean(N.archived_at);if(K!==G)return K?1:-1;if(Boolean(q.is_active)!==Boolean(N.is_active))return q.is_active?-1:1;return String(q.chat_jid).localeCompare(String(N.chat_jid))}),Z}var JK={hasModel:!1,model:void 0,hasThinkingLevel:!1,thinkingLevel:null,hasSupportsThinking:!1,supportsThinking:!1,hasProviderUsage:!1,providerUsage:null};function C9(_){if(!_||typeof _!=="object")return JK;let $=_.model??_.current;return{hasModel:$!==void 0,model:$,hasThinkingLevel:_.thinking_level!==void 0,thinkingLevel:_.thinking_level??null,hasSupportsThinking:_.supports_thinking!==void 0,supportsThinking:Boolean(_.supports_thinking),hasProviderUsage:_.provider_usage!==void 0,providerUsage:_.provider_usage??null}}function P9(_){let j=(Array.isArray(_)?_:[]).find((Q)=>Q?.id==="default");return{name:j?.name,avatarUrl:j?.avatar_url}}function y9(_,$){if(!_||typeof _!=="object")return null;let j=_.agent_id;if(!j)return null;let Q=String(j),Z=_.agent_name,Y=_.agent_avatar;if(!Z&&Y===void 0)return null;let q=$||{id:Q},N=q.name||null,K=q.avatar_url??q.avatarUrl??q.avatar??null,G=!1,X=!1;if(Z&&Z!==q.name)N=Z,G=!0;if(Y!==void 0){let V=typeof Y==="string"?Y.trim():null,U=typeof K==="string"?K.trim():null,W=V||null;if(W!==(U||null))K=W,X=!0}if(!G&&!X)return null;return{agentId:Q,nameChanged:G,avatarChanged:X,resolvedName:N,resolvedAvatar:K}}function S9(_,$){let j=typeof $?.name==="string"&&$.name.trim()?$.name.trim():"You",Q=typeof $?.avatar_url==="string"?$.avatar_url.trim():null,Z=typeof $?.avatar_background==="string"&&$.avatar_background.trim()?$.avatar_background.trim():null;if(_.name===j&&_.avatar_url===Q&&_.avatar_background===Z)return _;return{name:j,avatar_url:Q,avatar_background:Z}}function w9(_,$){if(!$||typeof $!=="object")return _;let j=$.user_name??$.userName,Q=$.user_avatar??$.userAvatar,Z=$.user_avatar_background??$.userAvatarBackground;if(j===void 0&&Q===void 0&&Z===void 0)return _;let Y=typeof j==="string"&&j.trim()?j.trim():_.name||"You",q=Q===void 0?_.avatar_url:typeof Q==="string"&&Q.trim()?Q.trim():null,N=Z===void 0?_.avatar_background:typeof Z==="string"&&Z.trim()?Z.trim():null;if(_.name===Y&&_.avatar_url===q&&_.avatar_background===N)return _;return{name:Y,avatar_url:q,avatar_background:N}}function OK(_){if(!_?.data?.is_bot_message)return!1;let $=_.data.content;return $==="Queued as a follow-up (one-at-a-time)."||$==="⁣"}function R9(_,$){if(!_||!Array.isArray(_))return _;let j=new Set($||[]),Q=_.filter((Z)=>!j.has(Z?.id)&&!OK(Z));return Q.length===_.length?_:Q}function u9(_,$){let j=$||new Set;return Array.isArray(_)?_.map((Q)=>({...Q})).filter((Q)=>!j.has(Q.row_id)):[]}function f9(_,$){if(!Array.isArray(_)||!Array.isArray($))return!1;return _.length===$.length&&_.every((j,Q)=>j?.row_id===$[Q]?.row_id)}function S4(_,$){let j=Array.isArray(_)&&$!=null?_.filter((Q)=>Q?.row_id!==$):Array.isArray(_)?[..._]:[];return{items:j,remainingQueueCount:j.length}}function v9(_,$){let j=Array.isArray(_)?_:[],Q=$?.row_id,Z=$?.content;if(Q==null||typeof Z!=="string"||!Z.trim())return j;if(j.some((Y)=>Y?.row_id===Q))return j;return[...j,{row_id:Q,content:Z,timestamp:$?.timestamp||null,thread_id:$?.thread_id??null}]}function g9(_){if(!_||typeof _!=="object")return!1;if(_.queued==="followup"||_.queued==="steer")return!0;let $=_.command;return Boolean($&&typeof $==="object"&&($.queued_followup||$.queued_steer))}async function b9(_){let{getAgents:$,setAgents:j,setUserProfile:Q,applyBranding:Z}=_;try{let Y=await $();j(L9(Y));let q=Y?.user||{};Q((K)=>S9(K,q));let N=P9(Y?.agents);Z(N.name,N.avatarUrl)}catch(Y){console.warn("Failed to load agents:",Y)}}function m9(_){let{payload:$,agentsRef:j,setAgents:Q,applyBranding:Z}=_,Y=y9($,$?.agent_id?j.current?.[String($.agent_id)]||{id:String($.agent_id)}:null);if(!Y)return;if(Q((q)=>{let K={...q[Y.agentId]||{id:Y.agentId}};if(Y.nameChanged)K.name=Y.resolvedName;if(Y.avatarChanged)K.avatar_url=Y.resolvedAvatar;return{...q,[Y.agentId]:K}}),Y.agentId==="default")Z(Y.resolvedName,Y.resolvedAvatar,Y.avatarChanged?Date.now():null)}function h9(_){let{payload:$,setUserProfile:j}=_;j((Q)=>w9(Q,$))}function p9(_){let{payload:$,setActiveModel:j,setActiveThinkingLevel:Q,setSupportsThinking:Z,setActiveModelUsage:Y}=_,q=C9($);if(q.hasModel)j(q.model);if(q.hasThinkingLevel)Q(q.thinkingLevel);if(q.hasSupportsThinking)Z(q.supportsThinking);if(q.hasProviderUsage)Y(q.providerUsage)}function c9(_){let{currentChatJid:$,getAgentModels:j,activeChatJidRef:Q,applyModelState:Z}=_,Y=$;j(Y).then((q)=>{if(Q.current!==Y)return;if(q)Z(q)}).catch(()=>{})}function l9(_){let{currentChatJid:$,getActiveChatAgents:j,getChatBranches:Q,activeChatJidRef:Z,setActiveChatAgents:Y}=_,q=$;Promise.all([j().catch(()=>({chats:[]})),Q(null,{includeArchived:!0}).catch(()=>({chats:[]}))]).then(([N,K])=>{if(Z.current!==q)return;let G=s$(N?.chats),X=s$(K?.chats);Y(T9(G,X,q))}).catch(()=>{if(Z.current!==q)return;Y([])})}function n9(_){let{currentRootChatJid:$,getChatBranches:j,setCurrentChatBranches:Q}=_;j($).then((Z)=>{Q(x9(Z?.chats))}).catch(()=>{})}function d9(_){let{response:$,refreshActiveChatAgents:j,refreshCurrentChatBranches:Q,refreshContextUsage:Z,refreshAutoresearchStatus:Y,refreshQueueState:q}=_;if(!$||typeof $!=="object")return;if(j(),Q(),Z(),Y(),g9($))q()}function i9(_={}){return X4(_)&&C8(_)}function AK(_={}){let $=_.window??(typeof window<"u"?window:null),j=Number($?.visualViewport?.height||0);if(Number.isFinite(j)&&j>0)return Math.round(j);let Q=Number($?.innerHeight||0);if(Number.isFinite(Q)&&Q>0)return Math.round(Q);return null}function DK(_={},$={}){if(!i9(_))return null;let j=_.window??(typeof window<"u"?window:null),Q=_.document??(typeof document<"u"?document:null);if(!j||!Q?.documentElement)return null;let Z=AK({window:j});if(Z&&Z>0)Q.documentElement.style.setProperty("--app-height",`${Z}px`);if($.resetScroll===!0){try{if(typeof j.scrollTo==="function")j.scrollTo(0,0)}catch{}try{if(Q.scrollingElement)Q.scrollingElement.scrollTop=0,Q.scrollingElement.scrollLeft=0;if(Q.documentElement)Q.documentElement.scrollTop=0,Q.documentElement.scrollLeft=0;if(Q.body)Q.body.scrollTop=0,Q.body.scrollLeft=0}catch{}}return Z}function r9(_={}){if(!i9(_))return()=>{};let $=_.window??(typeof window<"u"?window:null),j=_.document??(typeof document<"u"?document:null);if(!$||!j)return()=>{};let Q=0,Z=new Set,Y=()=>{if(Q)$.cancelAnimationFrame?.(Q),Q=0;for(let V of Z)$.clearTimeout?.(V);Z.clear()},q=()=>{Q=0,DK({window:$,document:j})},N=()=>{if(Q)$.cancelAnimationFrame?.(Q);Q=$.requestAnimationFrame?.(q)??0},K=()=>{N();for(let V of[80,220,420]){let U=$.setTimeout?.(()=>{Z.delete(U),N()},V);if(U!=null)Z.add(U)}},G=()=>{if(j.visibilityState&&j.visibilityState!=="visible")return;K()},X=$.visualViewport;return K(),$.addEventListener("focus",K),$.addEventListener("pageshow",K),$.addEventListener("resize",K),$.addEventListener("orientationchange",K),j.addEventListener("visibilitychange",G),j.addEventListener("focusin",K,!0),X?.addEventListener?.("resize",K),X?.addEventListener?.("scroll",K),()=>{Y(),$.removeEventListener("focus",K),$.removeEventListener("pageshow",K),$.removeEventListener("resize",K),$.removeEventListener("orientationchange",K),j.removeEventListener("visibilitychange",G),j.removeEventListener("focusin",K,!0),X?.removeEventListener?.("resize",K),X?.removeEventListener?.("scroll",K)}}function EK(_,$){if(typeof window<"u")console.warn(`[app] API export missing: ${_}. Using fallback behavior.`);return async()=>$}function $_(_,$,j){let Q=_?.[$];return typeof Q==="function"?Q:EK($,j)}var kK=["(display-mode: standalone)","(display-mode: minimal-ui)","(display-mode: fullscreen)"];function o9(_,$={}){let j=$.window??(typeof window<"u"?window:null),Q=$.navigator??(typeof navigator<"u"?navigator:null);if(!j||typeof _!=="function")return()=>{};let Z=()=>{_(X4({window:j,navigator:Q}))};Z();let q=kK.map((N)=>{try{return j.matchMedia?.(N)??null}catch{return null}}).filter(Boolean).map((N)=>{if(typeof N.addEventListener==="function")return N.addEventListener("change",Z),()=>N.removeEventListener("change",Z);if(typeof N.addListener==="function")return N.addListener(Z),()=>N.removeListener(Z);return()=>{}});return j.addEventListener?.("focus",Z),j.addEventListener?.("pageshow",Z),()=>{for(let N of q)N();j.removeEventListener?.("focus",Z),j.removeEventListener?.("pageshow",Z)}}function s9(_,$={}){let j=$.window??(typeof window<"u"?window:null),Q=$.document??(typeof document<"u"?document:null);if(!j||!Q||typeof _!=="function")return()=>{};let Z=()=>{if(Q.visibilityState&&Q.visibilityState!=="visible")return;_()};return j.addEventListener?.("focus",Z),j.addEventListener?.("pageshow",Z),Q.addEventListener?.("visibilitychange",Z),()=>{j.removeEventListener?.("focus",Z),j.removeEventListener?.("pageshow",Z),Q.removeEventListener?.("visibilitychange",Z)}}function a9(_,$={}){let j=$.document??(typeof document<"u"?document:null);if(!j)return()=>{};let Q=_?.openTab,Z=_?.popOutPane,Y=(K)=>{let G=K?.detail?.path,X=typeof K?.detail?.label==="string"&&K.detail.label.trim()?K.detail.label.trim():void 0;if(G)Q?.(G,X)},q=(K)=>{let G=K?.detail?.path,X=typeof K?.detail?.label==="string"&&K.detail.label.trim()?K.detail.label.trim():void 0;if(G)Z?.(G,X)},N=["office-viewer:open-tab","drawio:open-tab","csv-viewer:open-tab","pdf-viewer:open-tab","image-viewer:open-tab","video-viewer:open-tab","vnc:open-tab"];return N.forEach((K)=>j.addEventListener(K,Y)),j.addEventListener("pane:popout",q),()=>{N.forEach((K)=>j.removeEventListener(K,Y)),j.removeEventListener("pane:popout",q)}}function t9(_,$={}){let j=$.document??(typeof document<"u"?document:null);if(!j)return()=>{};let Q=(Z)=>{if(Z?.ctrlKey&&Z.key==="`")Z.preventDefault?.(),_?.()};return j.addEventListener("keydown",Q),()=>j.removeEventListener("keydown",Q)}function e9(_,$={}){let j=$.document??(typeof document<"u"?document:null);if(!j)return()=>{};let Q=_?.toggleZenMode,Z=_?.exitZenMode,Y=typeof _?.isZenModeActive==="function"?_.isZenModeActive:()=>Boolean(_?.zenMode),q=(N)=>{if(N?.ctrlKey&&N.shiftKey&&(N.key==="Z"||N.key==="z")){N.preventDefault?.(),Q?.();return}if(N?.key==="Escape"&&Y())N.preventDefault?.(),Z?.()};return j.addEventListener("keydown",q),()=>j.removeEventListener("keydown",q)}function _j(_,$){let j=Array.isArray(_)?_:[];return j.find((Q)=>Q?.id===$)||j[0]||null}function $j(_,$){if(!$||!_||typeof _.get!=="function")return null;return _.get($)||null}function jj(_,$,j){return _||$?.label||j||"Pane"}function Qj(_,$,j){let Q=Array.isArray(_)?_.length:0,Z=Boolean(j&&$?.has?.(j));return Q>1||Z}function Zj(_,$){let j=typeof _==="string"?_:"";return j===$||j.startsWith(`${$}/`)}function Yj(_,$,j,Q){return _===$&&!j||Q}function qj(_,$,j,Q,Z){return _||!$&&(j||Q&&Z)}function l8(_){let $=a$(_);return $?`@${$}`:""}function a$(_){return String(_||"").trim().toLowerCase().replace(/[^a-z0-9_-]+/g,"-").replace(/^-+|-+$/g,"").replace(/-{2,}/g,"-")}function n8(_,$=""){let j=String(_||""),Q=a$(j),Z=a$($);if(!j.trim())return{normalized:Q,handle:"",canSubmit:!1,kind:"error",message:"Enter a branch handle."};if(!Q)return{normalized:Q,handle:"",canSubmit:!1,kind:"error",message:"Handle must contain at least one letter or number."};let Y=`@${Q}`;if(Q===Z)return{normalized:Q,handle:Y,canSubmit:!1,kind:"info",message:`Already using ${Y}.`};if(Q!==j.trim())return{normalized:Q,handle:Y,canSubmit:!0,kind:"info",message:`Will save as ${Y}. Letters, numbers, - and _ are allowed; leading @ is optional.`};return{normalized:Q,handle:Y,canSubmit:!0,kind:"success",message:`Saving as ${Y}.`}}function Nj(_,$){let j=typeof _?.agent_name==="string"&&_.agent_name.trim()?l8(_.agent_name):String($||"").trim(),Q=typeof _?.chat_jid==="string"&&_.chat_jid.trim()?_.chat_jid.trim():String($||"").trim();return`${j} — ${Q} • current branch`}function MK(_,$={}){let j=[],Q=typeof $.currentChatJid==="string"?$.currentChatJid.trim():"",Z=typeof _?.chat_jid==="string"?_.chat_jid.trim():"";if(Q&&Z===Q)j.push("current");if(_?.archived_at)j.push("archived");else if(_?.is_active)j.push("active");return j}function d8(_,$={}){let j=l8(_?.agent_name)||String(_?.chat_jid||"").trim(),Q=typeof _?.chat_jid==="string"&&_.chat_jid.trim()?_.chat_jid.trim():"unknown-chat",Z=MK(_,$);return Z.length>0?`${j} — ${Q} • ${Z.join(" • ")}`:`${j} — ${Q}`}function Kj(_,$,j){let Q=l8(_),Z=l8($),Y=String(j||"").trim();if(Q&&Z&&Q!==Z)return`Restored archived ${Q} as ${Z} because ${Q} is already in use.`;if(Z)return`Restored ${Z}.`;if(Q)return`Restored ${Q}.`;return`Restored ${Y||"branch"}.`}var IK="piclaw_btw_session",Xj=900,Gj="__piclawRenameBranchFormLock__";function xK(){try{return import.meta.url}catch{return null}}function t$(_){let $=typeof _==="string"?_.trim().toLowerCase():"";return $==="1"||$==="true"||$==="yes"}function i8(_,$,j=""){let Q=_?.get?.($);return Q&&Q.trim()?Q.trim():j}function Vj(_={}){let $=_.importMetaUrl===void 0?xK():_.importMetaUrl,j=_.document===void 0?typeof document<"u"?document:null:_.document,Q=_.origin===void 0?typeof window<"u"?window.location.origin:"http://localhost":_.origin||"http://localhost";try{let Z=$?new URL($).searchParams.get("v"):null;if(Z&&Z.trim())return Z.trim()}catch{}try{let Y=Array.from(j?.querySelectorAll?.('script[type="module"][src]')||[]).find((K)=>String(K?.getAttribute?.("src")||"").includes("/static/dist/app.bundle.js"))?.getAttribute?.("src")||"";if(!Y)return null;let N=new URL(Y,Q).searchParams.get("v");return N&&N.trim()?N.trim():null}catch{return null}}function e$(_={}){let $=_.window===void 0?typeof window<"u"?window:null:_.window;if(!$)return null;let j=$[Gj];if(j&&typeof j==="object")return j;let Q={inFlight:!1,cooldownUntil:0};return $[Gj]=Q,Q}function Uj(_){if(_==="root")return"Branch family";if(_==="all")return"All chats";return"Current branch"}function Bj(_={}){let $=typeof _.readItem==="function"?_.readItem:J_,j=_.storageKey||IK,Q=$(j);if(!Q)return null;try{let Z=JSON.parse(Q);if(!Z||typeof Z!=="object")return null;let Y=typeof Z.question==="string"?Z.question:"",q=typeof Z.answer==="string"?Z.answer:"",N=typeof Z.thinking==="string"?Z.thinking:"",K=typeof Z.error==="string"&&Z.error.trim()?Z.error:null,G=Z.status==="running"?"error":Z.status==="success"||Z.status==="error"?Z.status:"success";return{question:Y,answer:q,thinking:N,error:G==="error"?K||"BTW stream interrupted. You can retry.":K,model:null,status:G}}catch{return null}}function Lj(_,$={}){let j=$.defaultChatJid||"web:default",Q=i8(_,"chat_jid",j),Z=t$(_?.get?.("chat_only")||_?.get?.("chat-only")),Y=t$(_?.get?.("pane_popout")),q=i8(_,"pane_path"),N=i8(_,"pane_label"),K=t$(_?.get?.("branch_loader")),G=i8(_,"branch_source_chat_jid",Q);return{currentChatJid:Q,chatOnlyMode:Z,panePopoutMode:Y,panePopoutPath:q,panePopoutLabel:N,branchLoaderMode:K,branchLoaderSourceChatJid:G}}function Wj(_){let{serverVersion:$,currentAppAssetVersion:j,staleUiVersionRef:Q,staleUiReloadScheduledRef:Z,tabStoreHasUnsaved:Y,isAgentRunningRef:q,pendingRequestRef:N,showIntentToast:K}=_,G=typeof $==="string"&&$.trim()?$.trim():null;if(!G||!j||G===j)return!1;if(Q.current===G)return!0;Q.current=G;let X=typeof document<"u"?String(document.querySelector(".compose-box textarea")?.value||"").trim():"";if(!Y()&&!X&&!q.current&&!N.current&&!Z.current)return Z.current=!0,K("Updating UI…","Reloading to apply the latest interface after restart.","info",2500),window.setTimeout(()=>{try{window.location.reload()}catch{Z.current=!1}},350),!0;return K("New UI available","Reload this page to apply the latest interface update.","warning",8000),!0}function _3(_){let{currentHashtag:$,searchQuery:j,searchOpen:Q}=_||{};return!$&&!j&&!Q}function Fj(_){let{status:$,setConnectionStatus:j,setAgentStatus:Q,setAgentDraft:Z,setAgentPlan:Y,setAgentThought:q,setPendingRequest:N,pendingRequestRef:K,clearAgentRunState:G,hasConnectedOnceRef:X,viewStateRef:V,refreshTimeline:U,refreshAgentStatus:W,refreshQueueState:J,refreshContextUsage:D}=_;if(j($),$!=="connected"){Q(null),Z({text:"",totalLines:0}),Y(""),q({text:"",totalLines:0}),N(null),K.current=null,G();return}if(!X.current){if(X.current=!0,_3(V.current))U();W(),J(),D();return}if(_3(V.current))U();W(),J(),D()}function zj(_){let{viewStateRef:$,isAgentActive:j,refreshTimeline:Q,refreshQueueState:Z,refreshAgentStatus:Y,refreshContextUsage:q,refreshAutoresearchStatus:N}=_,K=_3($.current);if(j){if(K)Q();Z(),Y(),q(),N();return}if(K)Q();Y(),q(),N()}function Hj(_){let{hasWindow:$=typeof window<"u",currentBranchRecord:j,renameBranchInFlight:Q,renameBranchLockUntil:Z,getFormLock:Y,setRenameBranchNameDraft:q,setIsRenameBranchFormOpen:N,now:K=Date.now()}=_;if(!$||!j?.chat_jid)return!1;let G=Y?.()||null;if(!G)return!1;if(Q||K<Number(Z||0)||G.inFlight||K<Number(G.cooldownUntil||0))return!1;return q?.(j.agent_name||""),N?.(!0),!0}function Jj(_){let{setIsRenameBranchFormOpen:$,setRenameBranchNameDraft:j}=_;$?.(!1),j?.("")}async function Oj(_){let{hasWindow:$=typeof window<"u",currentBranchRecord:j,nextName:Q,openRenameForm:Z,renameBranchInFlightRef:Y,renameBranchLockUntilRef:q,getFormLock:N,setIsRenamingBranch:K,renameChatBranch:G,refreshActiveChatAgents:X,refreshCurrentChatBranches:V,showIntentToast:U,closeRenameForm:W,now:J=()=>Date.now()}=_;if(!$||!j?.chat_jid)return!1;if(typeof Q!=="string")return Z?.(),!1;let D=J(),O=N?.()||null;if(!O)return!1;if(Y.current||D<Number(q.current||0)||O.inFlight||D<Number(O.cooldownUntil||0))return!1;Y.current=!0,O.inFlight=!0,K?.(!0);try{let F=j.agent_name||"",A=n8(Q,F);if(!A.canSubmit)return U?.("Could not rename branch",A.message||"Enter a valid branch handle.","warning",4000),!1;let k=A.normalized||F,m=await G(j.chat_jid,{agentName:k});await Promise.allSettled([X?.(),V?.()]);let f=m?.branch?.agent_name||k||F;return U?.("Branch renamed",`@${f}`,"info",3500),W?.(),!0}catch(F){let A=F instanceof Error?F.message:String(F||"Could not rename branch."),k=/already in use/i.test(A||"")?`${A} Switch to or restore that existing session from the session manager.`:A;return U?.("Could not rename branch",k||"Could not rename branch.","warning",5000),!1}finally{Y.current=!1,K?.(!1);let F=J()+Xj;q.current=F;let A=N?.()||null;if(A)A.inFlight=!1,A.cooldownUntil=F}}async function Aj(_){let{hasWindow:$=typeof window<"u",targetChatJid:j=null,currentChatJid:Q,currentBranchRecord:Z,currentChatBranches:Y=[],activeChatAgents:q=[],pruneChatBranch:N,refreshActiveChatAgents:K,refreshCurrentChatBranches:G,showIntentToast:X,baseHref:V,chatOnlyMode:U,navigate:W,confirm:J=(l)=>window.confirm(l)}=_;if(!$)return!1;let D=typeof j==="string"&&j.trim()?j.trim():"",O=typeof Q==="string"&&Q.trim()?Q.trim():"",F=D||Z?.chat_jid||O;if(!F)return X?.("Could not prune branch","No active session is selected yet.","warning",4000),!1;let A=(Z?.chat_jid===F?Z:null)||Y.find((l)=>l?.chat_jid===F)||q.find((l)=>l?.chat_jid===F)||null;if(A?.chat_jid===(A?.root_chat_jid||A?.chat_jid))return X?.("Cannot prune branch","The root chat branch cannot be pruned.","warning",4000),!1;let m=`@${A?.agent_name||F}${A?.chat_jid?` — ${A.chat_jid}`:""}`;if(!J(`Prune ${m}?

This archives the branch agent and removes it from the branch picker. Chat history is preserved.`))return!1;try{await N(F),await Promise.allSettled([K?.(),G?.()]);let l=A?.root_chat_jid||"web:default";X?.("Branch pruned",`${m} has been archived.`,"info",3000);let o=V4(V,l,{chatOnly:U});return W?.(o),!0}catch(l){let o=l instanceof Error?l.message:String(l||"Could not prune branch.");return X?.("Could not prune branch",o||"Could not prune branch.","warning",5000),!1}}async function Dj(_){let{targetChatJid:$,restoreChatBranch:j,currentChatBranches:Q=[],refreshActiveChatAgents:Z,refreshCurrentChatBranches:Y,showIntentToast:q,baseHref:N,chatOnlyMode:K,navigate:G}=_,X=typeof $==="string"?$.trim():"";if(!X||typeof j!=="function")return!1;try{let V=Q.find((F)=>F?.chat_jid===X)||null,U=await j(X);await Promise.allSettled([Z?.(),Y?.()]);let W=U?.branch,J=typeof W?.chat_jid==="string"&&W.chat_jid.trim()?W.chat_jid.trim():X,D=Kj(V?.agent_name,W?.agent_name,J);q?.("Branch restored",D,"info",4200);let O=V4(N,J,{chatOnly:K});return G?.(O),!0}catch(V){let U=V instanceof Error?V.message:String(V||"Could not restore branch.");return q?.("Could not restore branch",U||"Could not restore branch.","warning",5000),!1}}async function Ej(_){let{branchLoaderSourceChatJid:$,forkChatBranch:j,setBranchLoaderState:Q,navigate:Z,baseHref:Y,isCancelled:q=()=>!1}=_;try{Q?.({status:"running",message:"Preparing a new chat branch…"});let N=await j($);if(q())return!1;let K=N?.branch,G=typeof K?.chat_jid==="string"&&K.chat_jid.trim()?K.chat_jid.trim():null;if(!G)throw Error("Branch fork did not return a chat id.");let X=V4(Y,G,{chatOnly:!0});return Z?.(X,{replace:!0}),!0}catch(N){if(q())return!1;return Q?.({status:"error",message:h5(N)}),!1}}async function kj(_){let{currentChatJid:$,chatOnlyMode:j,forkChatBranch:Q,refreshActiveChatAgents:Z,refreshCurrentChatBranches:Y,showIntentToast:q,navigate:N,baseHref:K}=_;try{let X=(await Q($))?.branch,V=typeof X?.chat_jid==="string"&&X.chat_jid.trim()?X.chat_jid.trim():null;if(!V)throw Error("Branch fork did not return a chat id.");await Promise.allSettled([Z?.(),Y?.()]);let U=X?.agent_name?`@${X.agent_name}`:V;q?.("New branch created",`Switched to ${U}.`,"info",2500);let W=V4(K,V,{chatOnly:j});return N?.(W),!0}catch(G){return q?.("Could not create branch",h5(G),"warning",5000),!1}}async function Mj(_){let{hasWindow:$=typeof window<"u",isWebAppMode:j=!1,path:Q,label:Z,showIntentToast:Y,resolveSourceTransfer:q,closeSourcePaneIfTransferred:N,currentChatJid:K,baseHref:G}=_;if(!$||j)return!1;let X=typeof Q==="string"&&Q.trim()?Q.trim():"";if(!X)return!1;let V=w2(X);if(!V)return Y?.("Could not open pane window","Opening pane windows is unavailable in standalone webapp mode.","warning",5000),!1;let U=Z$(V);if(!U)return Y?.("Could not open pane window","The browser blocked opening a new tab or window.","warning",5000),!1;Y$(U,{title:typeof Z==="string"&&Z.trim()?`Opening ${Z}…`:"Opening pane…",message:"Preparing a standalone pane window. This should only take a moment."});try{let W=await q?.(X),J=S2(G,X,{label:typeof Z==="string"&&Z.trim()?Z.trim():void 0,chatJid:K,params:W});return q$(U,J),N?.(X),!0}catch(W){N$(U);let J=W instanceof Error?W.message:"Could not transfer pane state to the new window.";return Y?.("Could not open pane window",J,"warning",5000),!1}}async function Ij(_){let{hasWindow:$=typeof window<"u",isWebAppMode:j=!1,currentChatJid:Q,currentRootChatJid:Z,forkChatBranch:Y,getActiveChatAgents:q,getChatBranches:N,setActiveChatAgents:K,setCurrentChatBranches:G,showIntentToast:X,baseHref:V}=_;if(!$||j)return!1;let U=P2(Q);if(!U)return X?.("Could not open branch window","Opening branch windows is unavailable in standalone webapp mode.","warning",5000),!1;if(U.mode==="tab"){let J=y2(V,Q,{chatOnly:!0});if(!window.open(J,U.target))return X?.("Could not open branch window","The browser blocked opening a new tab or window.","warning",5000),!1;return!0}let W=Z$(U);if(!W)return X?.("Could not open branch window","The browser blocked opening a new tab or window.","warning",5000),!1;Y$(W,{title:"Opening branch…",message:"Preparing a new chat branch. This should only take a moment."});try{let D=(await Y(Q))?.branch,O=typeof D?.chat_jid==="string"&&D.chat_jid.trim()?D.chat_jid.trim():null;if(!O)throw Error("Branch fork did not return a chat id.");try{let A=await q?.();K?.(Array.isArray(A?.chats)?A.chats:[])}catch{}try{let A=await N?.(Z);G?.(Array.isArray(A?.chats)?A.chats:[])}catch{}let F=V4(V,O,{chatOnly:!0});return q$(W,F),!0}catch(J){return N$(W),X?.("Could not open branch window",h5(J),"error",5000),!1}}function r8(_){return _?{..._}:{text:"",totalLines:0}}function xj(_){return Array.isArray(_)?_.map(($)=>({...$})):[]}function TK(_){return{inFlight:Boolean(_?.inFlight),lastAttemptAt:Number(_?.lastAttemptAt||0),turnId:typeof _?.turnId==="string"?_.turnId:null}}function CK(){return{agentStatus:null,agentDraft:{text:"",totalLines:0},agentPlan:"",agentThought:{text:"",totalLines:0},pendingRequest:null,currentTurnId:null,steerQueuedTurnId:null,isAgentTurnActive:!1,followupQueueItems:[],activeModel:null,activeThinkingLevel:null,supportsThinking:!1,activeModelUsage:null,contextUsage:null,isAgentRunning:!1,wasAgentActive:!1,draftBuffer:"",thoughtBuffer:"",lastAgentEvent:null,lastSilenceNotice:0,lastAgentResponse:null,currentTurnIdRef:null,steerQueuedTurnIdRef:null,thoughtExpanded:!1,draftExpanded:!1,agentStatusRef:null,silentRecovery:{inFlight:!1,lastAttemptAt:0,turnId:null}}}function Tj(_){return{agentStatus:_.agentStatus,agentDraft:r8(_.agentDraft),agentPlan:_.agentPlan||"",agentThought:r8(_.agentThought),pendingRequest:_.pendingRequest,currentTurnId:_.currentTurnId||null,steerQueuedTurnId:_.steerQueuedTurnId||null,isAgentTurnActive:Boolean(_.isAgentTurnActive),followupQueueItems:xj(_.followupQueueItems),activeModel:_.activeModel,activeThinkingLevel:_.activeThinkingLevel,supportsThinking:Boolean(_.supportsThinking),activeModelUsage:_.activeModelUsage,contextUsage:_.contextUsage,isAgentRunning:Boolean(_.isAgentRunning),wasAgentActive:Boolean(_.wasAgentActive),draftBuffer:_.draftBuffer||"",thoughtBuffer:_.thoughtBuffer||"",lastAgentEvent:_.lastAgentEvent||null,lastSilenceNotice:Number(_.lastSilenceNotice||0),lastAgentResponse:_.lastAgentResponse||null,currentTurnIdRef:_.currentTurnIdRef||null,steerQueuedTurnIdRef:_.steerQueuedTurnIdRef||null,thoughtExpanded:Boolean(_.thoughtExpanded),draftExpanded:Boolean(_.draftExpanded),agentStatusRef:_.agentStatusRef||null,silentRecovery:TK(_.silentRecovery)}}function Cj(_){let $=_.snapshot||CK(),{refs:j,setters:Q}=_;return _.clearLastActivityTimer?.(),j.isAgentRunningRef.current=Boolean($.isAgentRunning),j.wasAgentActiveRef.current=Boolean($.wasAgentActive),Q.setIsAgentTurnActive(Boolean($.isAgentTurnActive)),j.lastAgentEventRef.current=$.lastAgentEvent||null,j.lastSilenceNoticeRef.current=Number($.lastSilenceNotice||0),j.draftBufferRef.current=$.draftBuffer||"",j.thoughtBufferRef.current=$.thoughtBuffer||"",j.pendingRequestRef.current=$.pendingRequest||null,j.lastAgentResponseRef.current=$.lastAgentResponse||null,j.currentTurnIdRef.current=$.currentTurnIdRef||null,j.steerQueuedTurnIdRef.current=$.steerQueuedTurnIdRef||null,j.agentStatusRef.current=$.agentStatusRef||null,j.silentRecoveryRef.current=$.silentRecovery||{inFlight:!1,lastAttemptAt:0,turnId:null},j.thoughtExpandedRef.current=Boolean($.thoughtExpanded),j.draftExpandedRef.current=Boolean($.draftExpanded),Q.setAgentStatus($.agentStatus||null),Q.setAgentDraft(r8($.agentDraft)),Q.setAgentPlan($.agentPlan||""),Q.setAgentThought(r8($.agentThought)),Q.setPendingRequest($.pendingRequest||null),Q.setCurrentTurnId($.currentTurnId||null),Q.setSteerQueuedTurnId($.steerQueuedTurnId||null),Q.setFollowupQueueItems(xj($.followupQueueItems)),Q.setActiveModel($.activeModel||null),Q.setActiveThinkingLevel($.activeThinkingLevel||null),Q.setSupportsThinking(Boolean($.supportsThinking)),Q.setActiveModelUsage($.activeModelUsage??null),Q.setContextUsage($.contextUsage??null),$}function $3(_){if(!Array.isArray(_?.content))return null;return _.content.find((j)=>j?.type==="status_panel"&&j?.panel)?.panel||null}function Pj(_,$){let j=new Map(_),Q=$3($);if(typeof $?.key==="string"&&$.key&&Q)j.set($.key,Q);else j.delete("autoresearch");return j}function yj(_,$){let j=typeof $?.key==="string"?$.key:"";if(!j)return _;let Q=new Map(_),Z=$3($);if($?.options?.remove||!Z)Q.delete(j);else Q.set(j,Z);return Q}function Sj(_){if(_?.options?.remove)return!0;return $3(_)?.state!=="running"}function j3(_,$){return`${_}:${$}`}function wj(_,$,j){let Q=j3($,j);if(_.has(Q))return _;let Z=new Set(_);return Z.add(Q),Z}function Rj(_,$){if(!_.has($))return _;let j=new Set(_);return j.delete($),j}function o8(_,$){if(_.size===0)return _;let j=`${$}:`,Q=new Set(Array.from(_).filter((Z)=>!String(Z).startsWith(j)));return Q.size===_.size?_:Q}async function uj(_){let $=typeof _.action?.action_type==="string"?_.action.action_type:"",j=typeof _.action?.key==="string"?_.action.key:"";if($==="autoresearch.stop")return await _.stopAutoresearch(_.currentChatJid,{generateReport:!0}),{refreshAutoresearchStatus:!0};if($==="autoresearch.dismiss")return await _.dismissAutoresearch(_.currentChatJid),{refreshAutoresearchStatus:!0};if($==="autoresearch.copy_tmux"){let Q=typeof _.panel?.tmux_command==="string"?_.panel.tmux_command.trim():"";if(!Q)throw Error("No tmux command available.");return await _.writeClipboard(Q),{refreshAutoresearchStatus:!1,toast:{title:"Copied",detail:"tmux command copied to clipboard.",kind:"success"}}}throw Error(`Unsupported panel action: ${$||j}`)}function PK(_){let $=_?.artifact||{},j=$.kind||_?.kind||null;if(j!=="html"&&j!=="svg")return null;if(j==="html"){let Z=typeof $.html==="string"?$.html:typeof _?.html==="string"?_.html:"";return Z?{kind:j,html:Z}:null}let Q=typeof $.svg==="string"?$.svg:typeof _?.svg==="string"?_.svg:"";return Q?{kind:j,svg:Q}:null}function yK(_){let $=_?.artifact&&typeof _.artifact==="object"?_.artifact:{},j=typeof $.svg==="string"?$.svg:typeof _?.svg==="string"?_.svg:"",Q=typeof $.html==="string"?$.html:typeof _?.html==="string"?_.html:typeof _?.w==="string"?_.w:typeof _?.content==="string"?_.content:"",Y=($.kind||_?.kind||null)==="svg"||j?"svg":"html";if(Y==="svg")return j?{kind:Y,svg:j}:{kind:Y};return Q?{kind:Y,html:Q}:{kind:Y}}function w4(_){return typeof _==="number"&&Number.isFinite(_)?_:null}function R0(_){return typeof _==="string"&&_.trim()?_.trim():null}function vj(_,$=!1){let Q=(Array.isArray(_)?_:$?["interactive"]:[]).filter((Z)=>typeof Z==="string").map((Z)=>Z.trim().toLowerCase()).filter(Boolean);return Array.from(new Set(Q))}var gj="__PICLAW_WIDGET_HOST__:";function fj(_){return JSON.stringify(_).replace(/</g,"\\u003c").replace(/>/g,"\\u003e").replace(/&/g,"\\u0026").replace(/\u2028/g,"\\u2028").replace(/\u2029/g,"\\u2029")}function Q3(_,$){if(!_||_.type!=="generated_widget")return null;let j=PK(_);if(!j)return null;return{title:_.title||_.name||"Generated widget",subtitle:typeof _.subtitle==="string"?_.subtitle:"",description:_.description||_.subtitle||"",originPostId:Number.isFinite($?.id)?$.id:null,originChatJid:typeof $?.chat_jid==="string"?$.chat_jid:null,widgetId:_.widget_id||_.id||null,artifact:j,capabilities:vj(_.capabilities,_.interactive===!0),source:"timeline",status:"final"}}function bj(_){if(!_||typeof _!=="object")return null;let $=yK(_),j=R0(_?.widget_id)||R0(_?.widgetId)||R0(_?.tool_call_id)||R0(_?.toolCallId),Q=R0(_?.tool_call_id)||R0(_?.toolCallId),Z=R0(_?.turn_id)||R0(_?.turnId),Y=R0(_?.title)||R0(_?.name)||"Generated widget",q=R0(_?.subtitle)||"",N=R0(_?.description)||q,K=R0(_?.status),G=K==="loading"||K==="streaming"||K==="final"||K==="error"?K:"streaming";return{title:Y,subtitle:q,description:N,originPostId:w4(_?.origin_post_id)??w4(_?.originPostId),originChatJid:R0(_?.origin_chat_jid)||R0(_?.originChatJid)||R0(_?.chat_jid)||null,widgetId:j,artifact:$,capabilities:vj(_?.capabilities,!0),source:"live",status:G,turnId:Z,toolCallId:Q,width:w4(_?.width),height:w4(_?.height),error:R0(_?.error)}}function mj(_){return Q3(_,null)!==null}function A_(_){let $=R0(_?.toolCallId)||R0(_?.tool_call_id);if($)return $;let j=R0(_?.widgetId)||R0(_?.widget_id);if(j)return j;let Q=w4(_?.originPostId)??w4(_?.origin_post_id);if(Q!==null)return`post:${Q}`;return null}function hj(_){let j=(_?.artifact||{}).kind||_?.kind||null,Z=(Array.isArray(_?.capabilities)?_.capabilities:[]).some((Y)=>typeof Y==="string"&&Y.trim().toLowerCase()==="interactive");return j==="html"&&(_?.source==="live"||Z)}function pj(_){return hj(_)?"allow-downloads allow-scripts":"allow-downloads"}function s8(_){return{title:R0(_?.title)||"Generated widget",widgetId:R0(_?.widgetId)||R0(_?.widget_id),toolCallId:R0(_?.toolCallId)||R0(_?.tool_call_id),turnId:R0(_?.turnId)||R0(_?.turn_id),capabilities:Array.isArray(_?.capabilities)?_.capabilities:[],source:_?.source==="live"?"live":"timeline",status:R0(_?.status)||"final"}}function a8(_){return{...s8(_),subtitle:R0(_?.subtitle)||"",description:R0(_?.description)||"",error:R0(_?.error)||null,width:w4(_?.width),height:w4(_?.height),runtimeState:_?.runtimeState&&typeof _.runtimeState==="object"?_.runtimeState:null}}function t8(_){return`${gj}${JSON.stringify(a8(_))}`}function cj(_){if(typeof _==="string"&&_.trim())return _.trim();if(!_||typeof _!=="object")return null;let $=R0(_.text)||R0(_.content)||R0(_.message)||R0(_.prompt)||R0(_.value);if($)return $;let j=_.data;if(typeof j==="string"&&j.trim())return j.trim();if(j&&typeof j==="object"){let Q=R0(j.text)||R0(j.content)||R0(j.message)||R0(j.prompt)||R0(j.value);if(Q)return Q}return null}function lj(_){if(!_||typeof _!=="object")return!1;return _.close===!0||_.dismiss===!0||_.closeAfterSubmit===!0}function nj(_){let $=R0(_?.status);if($==="loading"||$==="streaming")return"Widget is loading…";if($==="error")return R0(_?.error)||"Widget failed to load.";return"Widget artifact is missing or unsupported."}function SK(_){let $=s8(_);return`<script>
(function () {
  const meta = ${fj($)};
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
    } catch {
      /* expected: parent bridge may be unavailable while the iframe is unloading. */
    }
  }

  const windowNamePrefix = ${fj(gj)};
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
    } catch {
      /* expected: host window.name payload can be absent or mid-update while polling. */
    }
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
</script>`}function dj(_){let $=_?.artifact||{},j=$.kind||_?.kind||null,Q=typeof $.html==="string"?$.html:typeof _?.html==="string"?_.html:"",Z=typeof $.svg==="string"?$.svg:typeof _?.svg==="string"?_.svg:"",Y=typeof _?.title==="string"&&_.title.trim()?_.title.trim():"Generated widget",q=j==="svg"?Z:Q;if(!q)return"";let N=hj(_),K=["default-src 'none'","img-src data: blob: https: http:","style-src 'unsafe-inline'","font-src data: https: http:","media-src data: blob: https: http:","connect-src 'none'","frame-src 'none'",N?"script-src 'unsafe-inline'":"script-src 'none'","object-src 'none'","base-uri 'none'","form-action 'none'"].join("; "),G=j==="svg"?`<div class="widget-svg-shell">${q}</div>`:q,X=N?SK(_):"";return`<!doctype html>
<html>
<head>
<meta charset="utf-8" />
<meta http-equiv="Content-Security-Policy" content="${K}" />
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
${X}
</head>
<body>${G}</body>
</html>`}function wK(_,$){let j=A_(_);return Boolean(_&&j===$)}function k5(_,$,j){if(!wK(_,$))return _;return{..._,runtimeState:{..._?.runtimeState&&typeof _.runtimeState==="object"?_.runtimeState:{},...j}}}function ij(_,$){return{..._,openedAt:$}}function rj(_){let $=A_(_);return{nextWidget:null,dismissedSessionKey:_?.source==="live"&&$?$:null}}function oj(_,$,j){let Q=bj({...$,...$&&$.status?{}:{status:j.fallbackStatus||"streaming"}});if(!Q)return _;let Z=A_(Q);if(Z&&j.dismissedSessionKeys?.has(Z))return _;let Y=A_(_),q=Boolean(Z&&Y&&Z===Y),N={...q&&_?.artifact?_.artifact:{},...Q.artifact||{}};return{...q&&_?_:{},...Q,artifact:N,source:"live",originChatJid:Q.originChatJid||j.currentChatJid,openedAt:q&&_?.openedAt?_.openedAt:j.updatedAt,liveUpdatedAt:j.updatedAt}}function sj(_,$){if(!_||_?.source!=="live")return _||null;let j=A_($),Q=A_(_);if(j&&Q&&j!==Q)return _;return null}function aj(_,$,j){return k5(_,$,{lastEventKind:j.kind,lastEventPayload:j.payload||null,lastSubmitAt:j.submittedAt,lastHostUpdate:{type:"submit_pending",submittedAt:j.submittedAt,preview:j.submissionText||null}})}function Z3(_,$,j){if(j.errorMessage)return k5(_,$,{lastHostUpdate:{type:"submit_failed",submittedAt:j.submittedAt,preview:j.submissionText,error:j.errorMessage}});return k5(_,$,{lastHostUpdate:{type:j.queued==="followup"?"submit_queued":"submit_sent",submittedAt:j.submittedAt,preview:j.submissionText,queued:j.queued||null}})}function tj(_,$,j){return k5(_,$,{lastEventKind:j.kind,lastEventPayload:j.payload||null,...j.kind==="widget.ready"?{readyAt:j.eventAt,lastHostUpdate:{type:"ready_ack",at:j.eventAt}}:{},...j.kind==="widget.request_refresh"?{lastRefreshRequestAt:j.eventAt,refreshCount:j.nextRefreshCount,lastHostUpdate:{type:j.shouldBuildDashboard?"refresh_building":"refresh_ack",at:j.eventAt,count:j.nextRefreshCount,echo:j.payload||null}}:{}})}function ej(_,$,j){return k5(_,$,{dashboard:j.dashboard,lastHostUpdate:{type:"refresh_dashboard",at:j.at,count:j.count,echo:j.echo||null}})}function _Q(_,$,j){return k5(_,$,{lastHostUpdate:{type:"refresh_failed",at:j.at,count:j.count,error:j.errorMessage}})}function M5(_,$){let j=$?.row_id;if(j==null||typeof j!=="string"&&typeof j!=="number")return null;let Q=S4(_,j);return{rowId:j,items:Q.items,remainingQueueCount:Q.remainingQueueCount}}function Y3(_){if(_==="steer")return{title:"Failed to steer message",detail:"The queued message could not be sent as steering."};return{title:"Failed to remove message",detail:"The queued message could not be removed."}}function R4(_){return _.status==="fulfilled"?_.value:null}function e8(_){return Math.max(0,Math.min(100,_))}function $Q(_){let $=Array.isArray(_.timelinePayload?.posts)?_.timelinePayload.posts:Array.isArray(_.rawPosts)?_.rawPosts:[],j=$.length?$[$.length-1]:null,Q=$.filter((O)=>O?.data?.is_bot_message).length,Z=$.filter((O)=>!O?.data?.is_bot_message).length,Y=Number(_.queuePayload?.count??_.followupQueueItems?.length??0)||0,q=Array.isArray(_.activeChatsPayload?.chats)?_.activeChatsPayload.chats.length:Array.isArray(_.activeChatAgents)?_.activeChatAgents.length:0,N=Array.isArray(_.branchesPayload?.chats)?_.branchesPayload.chats.length:Array.isArray(_.currentChatBranches)?_.currentChatBranches.length:0,K=Number(_.contextPayload?.percent??_.contextUsage?.percent??0)||0,G=Number(_.contextPayload?.tokens??_.contextUsage?.tokens??0)||0,X=Number(_.contextPayload?.contextWindow??_.contextUsage?.contextWindow??0)||0,V=_.modelsPayload?.current??_.activeModel??null,U=_.modelsPayload?.thinking_level??_.activeThinkingLevel??null,W=_.modelsPayload?.supports_thinking??_.supportsThinking,J=_.statusPayload?.status||(_.isAgentTurnActive?"active":"idle"),D=_.statusPayload?.data?.type||_.statusPayload?.type||null;return{generatedAt:_.generatedAt,request:_.request,chat:{currentChatJid:_.currentChatJid,rootChatJid:_.currentRootChatJid,activeChats:q,branches:N},agent:{status:J,phase:D,running:Boolean(_.isAgentTurnActive)},model:{current:V,thinkingLevel:U,supportsThinking:Boolean(W)},context:{tokens:G,contextWindow:X,percent:K},queue:{count:Y},timeline:{loadedPosts:$.length,botPosts:Q,userPosts:Z,latestPostId:j?.id??null,latestTimestamp:j?.timestamp??null},bars:[{key:"context",label:"Context",value:e8(Math.round(K))},{key:"queue",label:"Queue",value:e8(Y*18)},{key:"activeChats",label:"Active chats",value:e8(q*12)},{key:"posts",label:"Timeline load",value:e8($.length*5)}]}}function jQ(_){if(_==="followup")return{title:"Widget submission queued",detail:"The widget message was queued because the agent is busy.",kind:"info",durationMs:3500};return{title:"Widget submission sent",detail:"The widget message was sent to the chat.",kind:"info",durationMs:3500}}function QQ(_){return{title:"Widget submission failed",detail:_||"Could not send the widget message.",kind:"warning",durationMs:5000}}function ZQ(_,$){return{shouldBuildDashboard:Boolean(_?.buildDashboard||_?.dashboardKind==="internal-state"),nextRefreshCount:Number($||0)+1}}function YQ(){return{title:"Dashboard built",detail:"Live dashboard state pushed into the widget.",kind:"info",durationMs:3000}}function qQ(_){return{title:"Dashboard build failed",detail:_||"Could not build dashboard.",kind:"warning",durationMs:5000}}function NQ(){return{title:"Widget refresh requested",detail:"The widget received a host acknowledgement update.",kind:"info",durationMs:3000}}async function KQ(_){let{requestPayload:$=null,currentChatJid:j,currentRootChatJid:Q,getAgentStatus:Z,getAgentContext:Y,getAgentQueueState:q,getAgentModels:N,getActiveChatAgents:K,getChatBranches:G,getTimeline:X,rawPosts:V,activeChatAgents:U,currentChatBranches:W,contextUsage:J,followupQueueItems:D,activeModel:O,activeThinkingLevel:F,supportsThinking:A,isAgentTurnActive:k}=_,[m,f,l,o,P,x,z]=await Promise.allSettled([Z(j),Y(j),q(j),N(j),K(),G(Q),X(20,null,j)]);return $Q({generatedAt:new Date().toISOString(),request:$,currentChatJid:j,currentRootChatJid:Q,statusPayload:R4(m),contextPayload:R4(f),queuePayload:R4(l),modelsPayload:R4(o),activeChatsPayload:R4(P),branchesPayload:R4(x),timelinePayload:R4(z),rawPosts:V,activeChatAgents:U,currentChatBranches:W,contextUsage:J,followupQueueItems:D,activeModel:O,activeThinkingLevel:F,supportsThinking:A,isAgentTurnActive:k})}function GQ(_){let{queuedItem:$,followupQueueItemsRef:j,dismissedQueueRowIdsRef:Q,currentChatJid:Z,refreshQueueState:Y,setFollowupQueueItems:q,showIntentToast:N,steerAgentQueueItem:K}=_,G=M5(j.current,$);if(!G)return;let{rowId:X}=G;Q.current.add(X),q((V)=>S4(V,X).items),K(X,o$(Z)).then(()=>{Y()}).catch((V)=>{console.warn("[queue] Failed to steer queued item:",V);let U=Y3("steer");N(U.title,U.detail,"warning"),Q.current.delete(X),Y()})}function XQ(_){let{queuedItem:$,followupQueueItemsRef:j,dismissedQueueRowIdsRef:Q,currentChatJid:Z,refreshQueueState:Y,setFollowupQueueItems:q,showIntentToast:N,clearQueuedSteerStateIfStale:K,removeAgentQueueItem:G}=_,X=M5(j.current,$);if(!X)return;let{rowId:V}=X;Q.current.add(V),K?.(X.remainingQueueCount),q((U)=>S4(U,V).items),G(V,o$(Z)).then(()=>{Y()}).catch((U)=>{console.warn("[queue] Failed to remove queued item:",U);let W=Y3("remove");N(W.title,W.detail,"warning"),Q.current.delete(V),Y()})}function VQ(_){let{widget:$,dismissedLiveWidgetKeysRef:j,setFloatingWidget:Q}=_;if(!$||typeof $!=="object")return;let Z=A_($);if(Z)j.current.delete(Z);Q(ij($,new Date().toISOString()))}function UQ(_){let{dismissedLiveWidgetKeysRef:$,setFloatingWidget:j}=_;j((Q)=>{let Z=rj(Q);if(Z.dismissedSessionKey)$.current.add(Z.dismissedSessionKey);return Z.nextWidget})}function BQ(_){let{event:$,widget:j,currentChatJid:Q,isComposeBoxAgentActive:Z,setFloatingWidget:Y,handleCloseFloatingWidget:q,handleMessageResponse:N,showIntentToast:K,sendAgentMessage:G,buildFloatingWidgetDashboardSnapshot:X}=_,V=typeof $?.kind==="string"?$.kind:"",U=A_(j);if(!V||!U)return;if(V==="widget.close"){q();return}if(V==="widget.submit"){let W=cj($?.payload),J=lj($?.payload),D=new Date().toISOString();if(Y((O)=>aj(O,U,{kind:V,payload:$?.payload||null,submittedAt:D,submissionText:W})),!W){if(K("Widget submission received","The widget submitted data without a message payload yet.","info",3500),J)q();return}(async()=>{try{let O=await G("default",W,null,[],Z?"queue":null,Q);N(O),Y((A)=>Z3(A,U,{submittedAt:D,submissionText:W,queued:O?.queued||null}));let F=jQ(O?.queued);if(K(F.title,F.detail,F.kind,F.durationMs),J)q()}catch(O){Y((A)=>Z3(A,U,{submittedAt:D,submissionText:W,errorMessage:O?.message||"Could not send the widget message."}));let F=QQ(O?.message);K(F.title,F.detail,F.kind,F.durationMs)}})();return}if(V==="widget.ready"||V==="widget.request_refresh"){let W=new Date().toISOString(),J=ZQ($?.payload||null,j?.runtimeState?.refreshCount);if(Y((D)=>tj(D,U,{kind:V,payload:$?.payload||null,eventAt:W,nextRefreshCount:J.nextRefreshCount,shouldBuildDashboard:J.shouldBuildDashboard})),V==="widget.request_refresh")if(J.shouldBuildDashboard)(async()=>{try{let D=await X($?.payload||null);Y((F)=>ej(F,U,{dashboard:D,at:new Date().toISOString(),count:J.nextRefreshCount,echo:$?.payload||null}));let O=YQ();K(O.title,O.detail,O.kind,O.durationMs)}catch(D){Y((F)=>_Q(F,U,{errorMessage:D?.message||"Could not build dashboard.",at:new Date().toISOString(),count:J.nextRefreshCount}));let O=qQ(D?.message);K(O.title,O.detail,O.kind,O.durationMs)}})();else{let D=NQ();K(D.title,D.detail,D.kind,D.durationMs)}}}var RK=400,q3=60,LQ=220,N3="mdPreviewHeight";function uK(){try{let _=localStorage.getItem(N3),$=_?Number(_):NaN;return Number.isFinite($)&&$>=q3?$:LQ}catch{return LQ}}function _6({getContent:_,path:$,onClose:j}){let[Q,Z]=g(""),[Y,q]=g(uK),N=I(null),K=I(null),G=I(""),X=I(_);return X.current=_,v(()=>{let W=()=>{let D=X.current?.()||"";if(D===G.current)return;G.current=D;try{let O=O_(D,null,{sanitize:!1});Z(O)}catch{Z('<p style="color:var(--text-secondary)">Preview unavailable</p>')}};W();let J=setInterval(W,RK);return()=>clearInterval(J)},[]),v(()=>{if(N.current&&Q)W4(N.current).catch(()=>{})},[Q]),B`
        <div
            class="md-preview-splitter"
            onMouseDown=${(W)=>{W.preventDefault();let J=W.clientY,D=K.current?.offsetHeight||Y,O=K.current?.parentElement,F=O?O.offsetHeight*0.7:500,A=W.currentTarget;A.classList.add("dragging"),document.body.style.cursor="row-resize",document.body.style.userSelect="none";let k=(f)=>{let l=Math.min(Math.max(D-(f.clientY-J),q3),F);q(l)},m=()=>{A.classList.remove("dragging"),document.body.style.cursor="",document.body.style.userSelect="";try{localStorage.setItem(N3,String(Math.round(K.current?.offsetHeight||Y)))}catch{}document.removeEventListener("mousemove",k),document.removeEventListener("mouseup",m)};document.addEventListener("mousemove",k),document.addEventListener("mouseup",m)}}
            onTouchStart=${(W)=>{W.preventDefault();let J=W.touches[0];if(!J)return;let D=J.clientY,O=K.current?.offsetHeight||Y,F=K.current?.parentElement,A=F?F.offsetHeight*0.7:500,k=W.currentTarget;k.classList.add("dragging"),document.body.style.userSelect="none";let m=(l)=>{let o=l.touches[0];if(!o)return;l.preventDefault();let P=Math.min(Math.max(O-(o.clientY-D),q3),A);q(P)},f=()=>{k.classList.remove("dragging"),document.body.style.userSelect="";try{localStorage.setItem(N3,String(Math.round(K.current?.offsetHeight||Y)))}catch{}document.removeEventListener("touchmove",m),document.removeEventListener("touchend",f),document.removeEventListener("touchcancel",f)};document.addEventListener("touchmove",m,{passive:!1}),document.addEventListener("touchend",f),document.addEventListener("touchcancel",f)}}
        ></div>
        <div class="md-preview-panel" ref=${K} style=${{height:Y+"px"}}>
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
                ref=${N}
                dangerouslySetInnerHTML=${{__html:Q}}
            />
        </div>
    `}function WQ(_){if(_.branchLoaderMode)return"branch-loader";if(_.panePopoutMode)return"pane-popout";return"main"}function fK(_){return _==="error"?"Could not open branch window":"Opening branch…"}function FQ(_){return B`
    <div class="app-shell chat-only">
      <div class="container" style=${{display:"flex",alignItems:"center",justifyContent:"center",minHeight:"100vh",padding:"24px"}}>
        <div class="card" style=${{width:"min(560px, 100%)",padding:"24px"}}>
          <h1 style=${{margin:"0 0 12px",fontSize:"1.1rem"}}>
            ${fK(_.status)}
          </h1>
          <p style=${{margin:0,lineHeight:1.6}}>${_.message}</p>
        </div>
      </div>
    </div>
  `}function zQ(_){let{appShellRef:$,editorOpen:j,hidePanePopoutControls:Q,panePopoutHasMenuActions:Z,panePopoutTitle:Y,tabStripTabs:q,tabStripActiveId:N,handleTabActivate:K,previewTabs:G,handleTabTogglePreview:X,editorContainerRef:V,getPaneContent:U,panePopoutPath:W}=_;return B`
    <div class=${`app-shell pane-popout${j?" editor-open":""}`} ref=${$}>
      <div class="editor-pane-container pane-popout-container">
        ${j&&!Q&&B`
          <div class="pane-popout-controls" role="toolbar" aria-label="Pane window controls">
            ${Z?B`
                <details class="pane-popout-controls-menu">
                  <summary class="pane-popout-controls-trigger" aria-label="Pane window controls">
                    <span class="pane-popout-controls-title">${Y}</span>
                    <svg viewBox="0 0 16 16" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                      <polyline points="4.5 6.5 8 10 11.5 6.5" />
                    </svg>
                  </summary>
                  <div class="pane-popout-controls-panel">
                    ${q.length>1&&B`
                      <div class="pane-popout-controls-section">
                        <div class="pane-popout-controls-section-title">Open panes</div>
                        <div class="pane-popout-controls-list">
                          ${q.map((J)=>B`
                            <button
                              type="button"
                              class=${`pane-popout-controls-item${J.id===N?" active":""}`}
                              onClick=${(D)=>{K(J.id),D.currentTarget.closest("details")?.removeAttribute("open")}}
                            >
                              ${J.label}
                            </button>
                          `)}
                        </div>
                      </div>
                    `}
                    ${N&&G.has(N)&&B`
                      <button
                        type="button"
                        class="pane-popout-controls-action"
                        onClick=${(J)=>{X(N),J.currentTarget.closest("details")?.removeAttribute("open")}}
                      >
                        Hide preview
                      </button>
                    `}
                  </div>
                </details>
              `:B`
                <div class="pane-popout-controls-label" aria-label=${Y}>${Y}</div>
              `}
          </div>
        `}
        ${j?B`<div class="editor-pane-host" ref=${V}></div>`:B`
            <div class="card" style=${{margin:"24px",padding:"24px",maxWidth:"640px"}}>
              <h1 style=${{margin:"0 0 12px",fontSize:"1.1rem"}}>Opening pane…</h1>
              <p style=${{margin:0,lineHeight:1.6}}>${W||"No pane path provided."}</p>
            </div>
          `}
        ${j&&N&&G.has(N)&&B`
          <${_6}
            getContent=${U}
            path=${N}
            onClose=${()=>X(N)}
          />
        `}
      </div>
    </div>
  `}function $6(_){return String(_||"").toLowerCase().replace(/^@/,"").replace(/\s+/g," ").trim()}function vK(_,$){let j=$6(_),Q=$6($);if(!Q)return!1;return j.startsWith(Q)||j.includes(Q)}function K3(_){if(!_)return!1;if(_.isComposing)return!1;if(_.ctrlKey||_.metaKey||_.altKey)return!1;return typeof _.key==="string"&&_.key.length===1&&/\S/.test(_.key)}function G3(_,$,j=Date.now(),Q=700){let Z=_&&typeof _==="object"?_:{value:"",updatedAt:0},Y=String($||"").trim().toLowerCase();if(!Y)return{value:"",updatedAt:j};return{value:!Z.value||!Number.isFinite(Z.updatedAt)||j-Z.updatedAt>Q?Y:`${Z.value}${Y}`,updatedAt:j}}function gK(_,$){let j=Math.max(0,Number(_)||0);if(j<=0)return[];let Z=((Number.isInteger($)?$:0)%j+j)%j,Y=[];for(let q=0;q<j;q+=1)Y.push((Z+q)%j);return Y}function bK(_,$,j=0,Q=(Z)=>Z){let Z=$6($);if(!Z)return-1;let Y=Array.isArray(_)?_:[],q=gK(Y.length,j),N=Y.map((K)=>$6(Q(K)));for(let K of q)if(N[K].startsWith(Z))return K;for(let K of q)if(N[K].includes(Z))return K;return-1}function X3(_,$,j=-1,Q=(Z)=>Z){let Z=Array.isArray(_)?_:[];if(j>=0&&j<Z.length){let Y=Q(Z[j]);if(vK(Y,$))return j}return bK(Z,$,0,Q)}function j6(_){return String(_||"").trim().toLowerCase()}function V3(_){let $=String(_||"").match(/^@([a-zA-Z0-9_-]*)$/);if(!$)return null;return j6($[1]||"")}function mK(_){let $=new Set,j=[];for(let Q of Array.isArray(_)?_:[]){let Z=j6(Q?.agent_name);if(!Z||$.has(Z))continue;$.add(Z),j.push(Q)}return j}function HQ(_,$,j={}){let Q=V3($);if(Q==null)return[];let Z=typeof j?.currentChatJid==="string"?j.currentChatJid:null;return mK(_).filter((Y)=>{if(Z&&Y?.chat_jid===Z)return!1;return j6(Y?.agent_name).startsWith(Q)})}function U3(_){let $=j6(_);return $?`@${$} `:""}function JQ(_,$,j={}){if(!_||_.isComposing)return!1;if(j.searchMode)return!1;if(!j.showSessionSwitcherButton)return!1;if(_.ctrlKey||_.metaKey||_.altKey)return!1;if(_.key!=="@")return!1;return String($||"")===""}function l_({prefix:_="file",label:$,title:j,onRemove:Q,onClick:Z,removeTitle:Y="Remove",icon:q="file"}){let N=`${_}-file-pill`,K=`${_}-file-name`,G=`${_}-file-remove`,X=q==="message"?B`<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
      </svg>`:B`<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
        <polyline points="14 2 14 8 20 8"/>
      </svg>`;return B`
    <span class=${N} title=${j||$} onClick=${Z}>
      ${X}
      <span class=${K}>${$}</span>
      ${Q&&B`
        <button
          class=${G}
          onClick=${(V)=>{V.preventDefault(),V.stopPropagation(),Q()}}
          title=${Y}
          type="button"
        >
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M18 6L6 18M6 6l12 12"/>
          </svg>
        </button>
      `}
    </span>
  `}var hK=[{name:"/model",description:"Select model or list available models"},{name:"/cycle-model",description:"Cycle to the next available model"},{name:"/thinking",description:"Show or set thinking level"},{name:"/cycle-thinking",description:"Cycle thinking level"},{name:"/theme",description:"Set UI theme (no name to show available themes)"},{name:"/tint",description:"Tint default light/dark UI (usage: /tint #hex or /tint off)"},{name:"/btw",description:"Open a side conversation panel without interrupting the main chat"},{name:"/state",description:"Show current session state"},{name:"/stats",description:"Show session token and cost stats"},{name:"/context",description:"Show context window usage"},{name:"/last",description:"Show last assistant response"},{name:"/compact",description:"Manually compact the session"},{name:"/auto-compact",description:"Toggle auto-compaction"},{name:"/auto-retry",description:"Toggle auto-retry"},{name:"/abort",description:"Abort the current response"},{name:"/abort-retry",description:"Abort retry backoff"},{name:"/abort-bash",description:"Abort running bash command"},{name:"/shell",description:"Run a shell command and return output"},{name:"/bash",description:"Run a shell command and add output to context"},{name:"/queue",description:"Queue a follow-up message (one-at-a-time)"},{name:"/queue-all",description:"Queue a follow-up message (batch all)"},{name:"/steer",description:"Steer the current response"},{name:"/steering-mode",description:"Set steering mode (all|one)"},{name:"/followup-mode",description:"Set follow-up mode (all|one)"},{name:"/session-name",description:"Set or show the session name"},{name:"/new-session",description:"Start a new session"},{name:"/switch-session",description:"Switch to a session file"},{name:"/fork",description:"Fork from a previous message"},{name:"/forks",description:"List forkable messages"},{name:"/tree",description:"List the session tree"},{name:"/label",description:"Set or clear a label on a tree entry"},{name:"/labels",description:"List labeled entries"},{name:"/agent-name",description:"Set or show the agent display name"},{name:"/agent-avatar",description:"Set or show the agent avatar URL"},{name:"/user-name",description:"Set or show your display name"},{name:"/user-avatar",description:"Set or show your avatar URL"},{name:"/user-github",description:"Set name/avatar from GitHub profile"},{name:"/export-html",description:"Export session to HTML"},{name:"/passkey",description:"Manage passkeys (enrol/list/delete)"},{name:"/totp",description:"Show a TOTP enrolment QR code"},{name:"/qr",description:"Generate a QR code for text or URL"},{name:"/search",description:"Search notes and skills in the workspace"},{name:"/restart",description:"Restart the agent and stop subprocesses"},{name:"/commands",description:"List available commands"}];function pK({usage:_,onCompact:$}){let j=Math.min(100,Math.max(0,_.percent||0)),Q=_.tokens,Z=_.contextWindow,Y="Compact context",N=`${Q!=null?`Context: ${OQ(Q)} / ${OQ(Z)} tokens (${j.toFixed(0)}%)`:`Context: ${j.toFixed(0)}%`} — ${"Compact context"}`,K=9,G=2*Math.PI*9,X=j/100*G,V=j>90?"var(--context-red, #ef4444)":j>75?"var(--context-amber, #f59e0b)":"var(--context-green, #22c55e)";return B`
        <button
            class="compose-context-pie icon-btn"
            type="button"
            title=${N}
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
                    stroke=${V}
                    stroke-width="2.5"
                    stroke-dasharray=${`${X} ${G}`}
                    stroke-linecap="round"
                    transform="rotate(-90 12 12)" />
            </svg>
        </button>
    `}function OQ(_){if(_==null)return"?";if(_>=1e6)return(_/1e6).toFixed(1)+"M";if(_>=1000)return(_/1000).toFixed(0)+"K";return String(_)}function cK(_){if(!_)return{content:_,fileRefs:[]};let j=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),Q=-1;for(let G=0;G<j.length;G+=1)if(j[G].trim()==="Files:"&&j[G+1]&&/^\s*-\s+/.test(j[G+1])){Q=G;break}if(Q===-1)return{content:_,fileRefs:[]};let Z=[],Y=Q+1;for(;Y<j.length;Y+=1){let G=j[Y];if(/^\s*-\s+/.test(G))Z.push(G.replace(/^\s*-\s+/,"").trim());else if(!G.trim())break;else break}if(Z.length===0)return{content:_,fileRefs:[]};let q=j.slice(0,Q),N=j.slice(Y);return{content:[...q,...N].join(`
`).replace(/\n{3,}/g,`

`).trim(),fileRefs:Z}}function lK(_){if(!_)return{content:_,messageRefs:[]};let j=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),Q=-1;for(let G=0;G<j.length;G+=1)if(j[G].trim()==="Referenced messages:"&&j[G+1]&&/^\s*-\s+/.test(j[G+1])){Q=G;break}if(Q===-1)return{content:_,messageRefs:[]};let Z=[],Y=Q+1;for(;Y<j.length;Y+=1){let G=j[Y];if(/^\s*-\s+/.test(G)){let X=G.replace(/^\s*-\s+/,"").trim().match(/^message:(\S+)$/i);if(X)Z.push(X[1])}else if(!G.trim())break;else break}if(Z.length===0)return{content:_,messageRefs:[]};let q=j.slice(0,Q),N=j.slice(Y);return{content:[...q,...N].join(`
`).replace(/\n{3,}/g,`

`).trim(),messageRefs:Z}}function nK(_){let $=cK(_||""),j=lK($.content||"");return{text:j.content||"",fileRefs:$.fileRefs,messageRefs:j.messageRefs}}function B3({items:_=[],onInjectQueuedFollowup:$,onRemoveQueuedFollowup:j,onOpenFilePill:Q}){if(!Array.isArray(_)||_.length===0)return null;return B`
        <div class="compose-queue-stack">
            ${_.map((Z)=>{let Y=typeof Z?.content==="string"?Z.content:"",q=nK(Y);if(!q.text.trim()&&q.fileRefs.length===0&&q.messageRefs.length===0)return null;return B`
                    <div class="compose-queue-stack-item" role="listitem">
                        <div class="compose-queue-stack-content" title=${Y}>
                            ${q.text.trim()&&B`<div class="compose-queue-stack-text">${q.text}</div>`}
                            ${(q.messageRefs.length>0||q.fileRefs.length>0)&&B`
                                <div class="compose-queue-stack-refs">
                                    ${q.messageRefs.map((N)=>B`
                                        <${l_}
                                            key=${"queue-msg-"+N}
                                            prefix="compose"
                                            label=${"msg:"+N}
                                            title=${"Message reference: "+N}
                                            icon="message"
                                        />
                                    `)}
                                    ${q.fileRefs.map((N)=>{let K=N.split("/").pop()||N;return B`
                                            <${l_}
                                                key=${"queue-file-"+N}
                                                prefix="compose"
                                                label=${K}
                                                title=${N}
                                                onClick=${()=>Q?.(N)}
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
                                onClick=${()=>$?.(Z)}
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
                                onClick=${()=>j?.(Z)}
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
    `}function AQ({onPost:_,onFocus:$,searchMode:j,searchScope:Q="current",onSearch:Z,onSearchScopeChange:Y,onEnterSearch:q,onExitSearch:N,fileRefs:K=[],onRemoveFileRef:G,onClearFileRefs:X,messageRefs:V=[],onRemoveMessageRef:U,onClearMessageRefs:W,activeModel:J=null,modelUsage:D=null,thinkingLevel:O=null,supportsThinking:F=!1,contextUsage:A=null,onContextCompact:k,notificationsEnabled:m=!1,notificationPermission:f="default",onToggleNotifications:l,onModelChange:o,onModelStateChange:P,activeEditorPath:x=null,onAttachEditorFile:z,onOpenFilePill:C,followupQueueItems:b=[],onInjectQueuedFollowup:e,onRemoveQueuedFollowup:p,onSubmitIntercept:a,onMessageResponse:t,onPopOutChat:_0,isAgentActive:K0=!1,activeChatAgents:q0=[],currentChatJid:V0="web:default",connectionStatus:H0="connected",onSetFileRefs:F0,onSetMessageRefs:b0,onSubmitError:x0,onSwitchChat:k0,onRenameSession:m0,isRenameSessionInProgress:g0=!1,onCreateSession:l0,onDeleteSession:r0,onRestoreSession:M0,showQueueStack:o0=!0,statusNotice:J0=null}){let[P0,s0]=g(""),[e0,u1]=g(""),[N1,i0]=g([]),[F1,Z1]=g(!1),[_1,W0]=g([]),[v0,Q1]=g(0),[r,N0]=g(!1),[h,i]=g([]),[O0,I0]=g(0),[C0,A0]=g(!1),[S0,h0]=g(!1),[z0,u0]=g(!1),[D0,j0]=g(!1),[y,s]=g([]),[G0,E0]=g(0),[p0,$1]=g(0),[X1,M1]=g(!1),[f1,R_]=g(0),[j_,b1]=g(null),[s1,l1]=g(()=>Date.now()),j1=I(null),a1=I(null),e_=I(null),Q_=I(null),_4=I(null),n_=I(null),I1=I(null),t1=I(null),x1=I({value:"",updatedAt:0}),V1=I(0),z1=I(!1),W_=200,F_=(L)=>{let w=new Set,n=[];for(let c of L||[]){if(typeof c!=="string")continue;let y0=c.trim();if(!y0||w.has(y0))continue;w.add(y0),n.push(y0)}return n},C1=()=>{let L=J_("piclaw_compose_history");if(!L)return[];try{let w=JSON.parse(L);if(!Array.isArray(w))return[];return F_(w)}catch{return[]}},e1=(L)=>{q1("piclaw_compose_history",JSON.stringify(L))},K1=I(C1()),P1=I(-1),Z_=I(""),m1=P0.trim()||N1.length>0||K.length>0||V.length>0,$4=typeof window<"u"&&typeof navigator<"u"&&Boolean(navigator.geolocation)&&Boolean(window.isSecureContext),D_=typeof window<"u"&&typeof Notification<"u",j4=typeof window<"u"?Boolean(window.isSecureContext):!1,F4=D_&&j4&&f!=="denied",k_=f==="granted"&&m,u_=y4(J0),u4=p8(J0),f4=typeof J0?.detail==="string"&&J0.detail.trim()?J0.detail.trim():"",Y1=u_?c8(J0,s1):null,T1=k_?"Disable notifications":"Enable notifications",z4=N1.length>0||K.length>0||V.length>0,Y_=H0==="disconnected"?"Reconnecting":String(H0||"Connecting").replace(/[-_]+/g," ").replace(/^./,(L)=>L.toUpperCase()),M_=H0==="disconnected"?"Reconnecting":`Connection: ${Y_}`,n1=(Array.isArray(q0)?q0:[]).filter((L)=>!L?.archived_at),D1=(()=>{for(let L of Array.isArray(q0)?q0:[]){let w=typeof L?.chat_jid==="string"?L.chat_jid.trim():"";if(w&&w===V0)return L}return null})(),v1=Boolean(D1&&D1.chat_jid===(D1.root_chat_jid||D1.chat_jid)),U1=f0(()=>{let L=new Set,w=[];for(let n of Array.isArray(q0)?q0:[]){let c=typeof n?.chat_jid==="string"?n.chat_jid.trim():"";if(!c||c===V0||L.has(c))continue;if(!(typeof n?.agent_name==="string"?n.agent_name.trim():""))continue;L.add(c),w.push(n)}return w},[q0,V0]),q_=U1.length>0,N_=q_&&typeof k0==="function",K_=q_&&typeof M0==="function",d_=Boolean(g0||z1.current),h1=!j&&typeof m0==="function"&&!d_,g1=!j&&typeof l0==="function",G_=!j&&typeof r0==="function"&&!v1,f_=!j&&(N_||K_||h1||g1||G_),H1=J||"",I_=F&&O?` (${O})`:"",B1=I_.trim()?`${O}`:"",v_=typeof D?.hint_short==="string"?D.hint_short.trim():"",x_=[B1||null,v_||null].filter(Boolean).join(" • "),v4=[H1?`Current model: ${H1}${I_}`:null,D?.plan?`Plan: ${D.plan}`:null,v_||null,D?.primary?.reset_description||null,D?.secondary?.reset_description||null].filter(Boolean),g4=S0?"Switching model…":v4.join(" • ")||`Current model: ${H1}${I_} (tap to open model picker)`,g_=(L)=>{if(!L||typeof L!=="object")return;let w=L.model??L.current;if(typeof P==="function")P({model:w??null,thinking_level:L.thinking_level??null,supports_thinking:L.supports_thinking,provider_usage:L.provider_usage??null});if(w&&typeof o==="function")o(w)},b_=(L)=>{let w=L||j1.current;if(!w)return;w.style.height="auto",w.style.height=`${w.scrollHeight}px`,w.style.overflowY="hidden"},b4=(L)=>{if(!L.startsWith("/")||L.includes(`
`)){N0(!1),W0([]);return}let w=L.toLowerCase().split(" ")[0];if(w.length<1){N0(!1),W0([]);return}let n=hK.filter((c)=>c.name.startsWith(w)||c.name.replace(/-/g,"").startsWith(w.replace(/-/g,"")));if(n.length>0&&!(n.length===1&&n[0].name===w))A0(!1),i([]),W0(n),Q1(0),N0(!0);else N0(!1),W0([])},Q4=(L)=>{let w=P0,n=w.indexOf(" "),c=n>=0?w.slice(n):"",y0=L.name+c;s0(y0),N0(!1),W0([]),requestAnimationFrame(()=>{let J1=j1.current;if(!J1)return;let y1=y0.length;J1.selectionStart=y1,J1.selectionEnd=y1,J1.focus()})},e4=(L)=>{if(V3(L)==null){A0(!1),i([]);return}let w=HQ(n1,L,{currentChatJid:V0});if(w.length>0&&!(w.length===1&&U3(w[0].agent_name).trim().toLowerCase()===String(L||"").trim().toLowerCase()))N0(!1),W0([]),i(w),I0(0),A0(!0);else A0(!1),i([])},m_=(L)=>{let w=U3(L?.agent_name);if(!w)return;s0(w),A0(!1),i([]),requestAnimationFrame(()=>{let n=j1.current;if(!n)return;let c=w.length;n.selectionStart=c,n.selectionEnd=c,n.focus()})},h_=()=>{if(j||!N_&&!K_&&!h1&&!g1&&!G_)return!1;return x1.current={value:"",updatedAt:0},u0(!1),N0(!1),W0([]),A0(!1),i([]),j0(!0),!0},d1=(L)=>{if(L?.preventDefault?.(),L?.stopPropagation?.(),j||!N_&&!K_&&!h1&&!g1&&!G_)return;if(D0){x1.current={value:"",updatedAt:0},j0(!1);return}h_()},H4=(L)=>{let w=typeof L==="string"?L.trim():"";if(j0(!1),!w||w===V0){requestAnimationFrame(()=>j1.current?.focus());return}k0?.(w)},J4=async(L)=>{let w=typeof L==="string"?L.trim():"";if(j0(!1),!w||typeof M0!=="function"){requestAnimationFrame(()=>j1.current?.focus());return}try{await M0(w)}catch(n){console.warn("Failed to restore session:",n),requestAnimationFrame(()=>j1.current?.focus())}},T5=(L)=>{let n=(Array.isArray(L)?L:[]).findIndex((c)=>!c?.disabled);return n>=0?n:0},E1=f0(()=>{let L=[];for(let w of U1){let n=Boolean(w?.archived_at),c=typeof w?.agent_name==="string"?w.agent_name.trim():"",y0=typeof w?.chat_jid==="string"?w.chat_jid.trim():"";if(!c||!y0)continue;L.push({type:"session",key:`session:${y0}`,label:`@${c} — ${y0}${w?.is_active?" active":""}${n?" archived":""}`,chat:w,disabled:n?!K_:!N_})}if(g1)L.push({type:"action",key:"action:new",label:"New session",action:"new",disabled:!1});if(h1)L.push({type:"action",key:"action:rename",label:"Rename current session",action:"rename",disabled:d_});if(G_)L.push({type:"action",key:"action:delete",label:"Delete current session",action:"delete",disabled:!1});return L},[U1,K_,N_,g1,h1,G_,d_]),O4=async(L)=>{if(L?.preventDefault)L.preventDefault();if(L?.stopPropagation)L.stopPropagation();if(typeof m0!=="function"||g0||z1.current)return;z1.current=!0,j0(!1);try{await m0()}catch(w){console.warn("Failed to rename session:",w)}finally{z1.current=!1}requestAnimationFrame(()=>j1.current?.focus())},_5=async()=>{if(typeof l0!=="function")return;j0(!1);try{await l0()}catch(L){console.warn("Failed to create session:",L)}requestAnimationFrame(()=>j1.current?.focus())},X_=async()=>{if(typeof r0!=="function")return;j0(!1);try{await r0(V0)}catch(L){console.warn("Failed to delete session:",L)}requestAnimationFrame(()=>j1.current?.focus())},V_=(L)=>{if(j)u1(L);else s0(L),b4(L),e4(L);requestAnimationFrame(()=>b_())},Z4=(L)=>{let w=j?e0:P0,n=w&&!w.endsWith(`
`)?`
`:"",c=`${w}${n}${L}`.trimStart();V_(c)},m4=(L)=>{let w=L?.command?.model_label;if(w)return w;let n=L?.command?.message;if(typeof n==="string"){let c=n.match(/•\s+([^\n]+?)\s+\(current\)/);if(c?.[1])return c[1].trim()}return null},h4=async(L)=>{if(j||S0)return;h0(!0);try{let w=await n4("default",L,null,[],null,V0),n=m4(w);g_({model:n??J??null,thinking_level:w?.command?.thinking_level,supports_thinking:w?.command?.supports_thinking});try{let c=await v5(V0);if(c)g_(c)}catch{}return _?.(),!0}catch(w){return console.error("Failed to switch model:",w),alert("Failed to switch model: "+w.message),!1}finally{h0(!1)}},$5=async()=>{await h4("/cycle-model")},Y4=async(L)=>{if(!L||S0)return;if(await h4(`/model ${L}`))u0(!1)},T_=(L)=>{if(!L||L.disabled)return;if(L.type==="session"){let w=L.chat;if(w?.archived_at)J4(w.chat_jid);else H4(w.chat_jid);return}if(L.type==="action"){if(L.action==="new"){_5();return}if(L.action==="rename"){O4();return}if(L.action==="delete")X_()}},z_=(L)=>{L.preventDefault(),L.stopPropagation(),x1.current={value:"",updatedAt:0},j0(!1),u0((w)=>!w)},A4=async()=>{if(j)return;k?.(),await C_("/compact",null,{includeMedia:!1,includeFileRefs:!1,includeMessageRefs:!1,clearAfterSubmit:!1,recordHistory:!1})},p4=(L)=>{if(L==="queue"||L==="steer"||L==="auto")return L;return K0?"queue":void 0},C_=async(L,w,n={})=>{let{includeMedia:c=!0,includeFileRefs:y0=!0,includeMessageRefs:J1=!0,clearAfterSubmit:y1=!0,recordHistory:w1=!0}=n||{},q4=typeof L==="string"?L:L&&typeof L?.target?.value==="string"?L.target.value:P0,c4=typeof q4==="string"?q4:"";if(!c4.trim()&&(c?N1.length===0:!0)&&(y0?K.length===0:!0)&&(J1?V.length===0:!0))return;N0(!1),W0([]),A0(!1),i([]),j0(!1),b1(null);let j5=c?[...N1]:[],Q5=y0?[...K]:[],N4=J1?[...V]:[],c1=c4.trim();if(w1&&c1){let D4=K1.current,O1=F_(D4.filter((i_)=>i_!==c1));if(O1.push(c1),O1.length>200)O1.splice(0,O1.length-200);K1.current=O1,e1(O1),P1.current=-1,Z_.current=""}let Z5=()=>{if(c)i0([...j5]);if(y0)F0?.(Q5);if(J1)b0?.(N4);s0(c1),requestAnimationFrame(()=>b_())};if(y1)s0(""),i0([]),X?.(),W?.();(async()=>{try{if(await a?.({content:c1,submitMode:w,fileRefs:Q5,messageRefs:N4,mediaFiles:j5})){_?.();return}let O1=[];for(let P_ of j5){let k4=await b6(P_);O1.push(k4.id)}let i_=Q5.length?`Files:
${Q5.map((P_)=>`- ${P_}`).join(`
`)}`:"",Y5=N4.length?`Referenced messages:
${N4.map((P_)=>`- message:${P_}`).join(`
`)}`:"",q8=O1.length?`Attachments:
${O1.map((P_,k4)=>{let X6=j5[k4]?.name||`attachment-${k4+1}`;return`- attachment:${P_} (${X6})`}).join(`
`)}`:"",q5=[c1,i_,Y5,q8].filter(Boolean).join(`

`),E4=await n4("default",q5,null,O1,p4(w),V0);if(t?.(E4),E4?.command){g_({model:E4.command.model_label??J??null,thinking_level:E4.command.thinking_level,supports_thinking:E4.command.supports_thinking});try{let P_=await v5(V0);if(P_)g_(P_)}catch{}}_?.()}catch(D4){if(y1)Z5();let O1=D4?.message||"Failed to send message.";b1(O1),x0?.(O1),console.error("Failed to post:",D4)}})()},H=(L)=>{e?.(L)},M=T((L)=>{if(j||!z0&&!D0||L?.isComposing)return!1;let w=()=>{L.preventDefault?.(),L.stopPropagation?.()},n=()=>{x1.current={value:"",updatedAt:0}};if(L.key==="Escape"){if(w(),n(),z0)u0(!1);if(D0)j0(!1);return!0}if(z0){if(L.key==="ArrowDown"){if(w(),n(),y.length>0)E0((c)=>(c+1)%y.length);return!0}if(L.key==="ArrowUp"){if(w(),n(),y.length>0)E0((c)=>(c-1+y.length)%y.length);return!0}if((L.key==="Enter"||L.key==="Tab")&&y.length>0)return w(),n(),Y4(y[Math.max(0,Math.min(G0,y.length-1))]),!0;if(K3(L)&&y.length>0){w();let c=G3(x1.current,L.key);x1.current=c;let y0=X3(y,c.value,G0,(J1)=>J1);if(y0>=0)E0(y0);return!0}}if(D0){if(L.key==="ArrowDown"){if(w(),n(),E1.length>0)$1((c)=>(c+1)%E1.length);return!0}if(L.key==="ArrowUp"){if(w(),n(),E1.length>0)$1((c)=>(c-1+E1.length)%E1.length);return!0}if((L.key==="Enter"||L.key==="Tab")&&E1.length>0)return w(),n(),T_(E1[Math.max(0,Math.min(p0,E1.length-1))]),!0;if(K3(L)&&E1.length>0){w();let c=G3(x1.current,L.key);x1.current=c;let y0=X3(E1,c.value,p0,(J1)=>J1.label);if(y0>=0)$1(y0);return!0}}return!1},[j,z0,D0,y,G0,E1,p0,Y4]),R=(L)=>{if(L.isComposing)return;if(j&&L.key==="Escape"){L.preventDefault(),u1(""),N?.();return}if(M(L))return;let w=j1.current?.value??(j?e0:P0);if(JQ(L,w,{searchMode:j,showSessionSwitcherButton:f_})){L.preventDefault(),h_();return}if(C0&&h.length>0){let n=j1.current?.value??(j?e0:P0);if(!String(n||"").match(/^@([a-zA-Z0-9_-]*)$/))A0(!1),i([]);else{if(L.key==="ArrowDown"){L.preventDefault(),I0((c)=>(c+1)%h.length);return}if(L.key==="ArrowUp"){L.preventDefault(),I0((c)=>(c-1+h.length)%h.length);return}if(L.key==="Tab"||L.key==="Enter"){L.preventDefault(),m_(h[O0]);return}if(L.key==="Escape"){L.preventDefault(),A0(!1),i([]);return}}}if(r&&_1.length>0){let n=j1.current?.value??(j?e0:P0);if(!String(n||"").startsWith("/"))N0(!1),W0([]);else{if(L.key==="ArrowDown"){L.preventDefault(),Q1((c)=>(c+1)%_1.length);return}if(L.key==="ArrowUp"){L.preventDefault(),Q1((c)=>(c-1+_1.length)%_1.length);return}if(L.key==="Tab"){L.preventDefault(),Q4(_1[v0]);return}if(L.key==="Enter"&&!L.shiftKey){if(!w.includes(" ")){L.preventDefault();let y0=_1[v0];N0(!1),W0([]),C_(y0.name);return}}if(L.key==="Escape"){L.preventDefault(),N0(!1),W0([]);return}}}if(!j&&(L.key==="ArrowUp"||L.key==="ArrowDown")&&!L.metaKey&&!L.ctrlKey&&!L.altKey&&!L.shiftKey){let n=j1.current;if(!n)return;let c=n.value||"",y0=n.selectionStart===0&&n.selectionEnd===0,J1=n.selectionStart===c.length&&n.selectionEnd===c.length;if(L.key==="ArrowUp"&&y0||L.key==="ArrowDown"&&J1){let y1=K1.current;if(!y1.length)return;L.preventDefault();let w1=P1.current;if(L.key==="ArrowUp"){if(w1===-1)Z_.current=c,w1=y1.length-1;else if(w1>0)w1-=1;P1.current=w1,V_(y1[w1]||"")}else{if(w1===-1)return;if(w1<y1.length-1)w1+=1,P1.current=w1,V_(y1[w1]||"");else P1.current=-1,V_(Z_.current||""),Z_.current=""}requestAnimationFrame(()=>{let q4=j1.current;if(!q4)return;let c4=q4.value.length;q4.selectionStart=c4,q4.selectionEnd=c4});return}}if(L.key==="Enter"&&!L.shiftKey&&(L.ctrlKey||L.metaKey)){if(L.preventDefault(),j){if(w.trim())Z?.(w.trim(),Q)}else C_(w,"steer");return}if(L.key==="Enter"&&!L.shiftKey)if(L.preventDefault(),j){if(w.trim())Z?.(w.trim(),Q)}else C_(w)},S=(L)=>{let w=Array.from(L||[]).filter((n)=>n instanceof File&&!String(n.name||"").startsWith(".DS_Store"));if(!w.length)return;i0((n)=>[...n,...w]),b1(null)},d=(L)=>{S(L.target.files),L.target.value=""},Z0=(L)=>{if(j)return;L.preventDefault(),L.stopPropagation(),V1.current+=1,Z1(!0)},U0=(L)=>{if(j)return;if(L.preventDefault(),L.stopPropagation(),V1.current=Math.max(0,V1.current-1),V1.current===0)Z1(!1)},B0=(L)=>{if(j)return;if(L.preventDefault(),L.stopPropagation(),L.dataTransfer)L.dataTransfer.dropEffect="copy";Z1(!0)},$0=(L)=>{if(j)return;L.preventDefault(),L.stopPropagation(),V1.current=0,Z1(!1),S(L.dataTransfer?.files||[])},w0=(L)=>{if(j)return;let w=L.clipboardData?.items;if(!w||!w.length)return;let n=[];for(let c of w){if(c.kind!=="file")continue;let y0=c.getAsFile?.();if(y0)n.push(y0)}if(n.length>0)L.preventDefault(),S(n)},S1=(L)=>{i0((w)=>w.filter((n,c)=>c!==L))},__=()=>{b1(null),i0([]),X?.(),W?.()},p1=()=>{if(!navigator.geolocation){alert("Geolocation is not available in this browser.");return}navigator.geolocation.getCurrentPosition((L)=>{let{latitude:w,longitude:n,accuracy:c}=L.coords,y0=`${w.toFixed(5)}, ${n.toFixed(5)}`,J1=Number.isFinite(c)?` ±${Math.round(c)}m`:"",y1=`https://maps.google.com/?q=${w},${n}`,w1=`Location: ${y0}${J1} ${y1}`;Z4(w1)},(L)=>{let w=L?.message||"Unable to retrieve location.";alert(`Location error: ${w}`)},{enableHighAccuracy:!0,timeout:1e4,maximumAge:0})};v(()=>{if(!z0)return;x1.current={value:"",updatedAt:0},M1(!0),v5(V0).then((L)=>{let w=Array.isArray(L?.models)?L.models.filter((n)=>typeof n==="string"&&n.trim().length>0):[];w.sort((n,c)=>n.localeCompare(c,void 0,{sensitivity:"base"})),s(w),g_(L)}).catch((L)=>{console.warn("Failed to load model list:",L),s([])}).finally(()=>{M1(!1)})},[z0,J]),v(()=>{if(j)u0(!1),j0(!1),N0(!1),W0([]),A0(!1),i([])},[j]),v(()=>{if(D0&&!f_)j0(!1)},[D0,f_]),v(()=>{if(!z0)return;let L=y.findIndex((w)=>w===J);E0(L>=0?L:0)},[z0,y,J]),v(()=>{if(!D0)return;$1(T5(E1)),x1.current={value:"",updatedAt:0}},[D0,V0]),v(()=>{if(!z0)return;let L=(w)=>{let n=Q_.current,c=_4.current,y0=w.target;if(n&&n.contains(y0))return;if(c&&c.contains(y0))return;u0(!1)};return document.addEventListener("pointerdown",L),()=>document.removeEventListener("pointerdown",L)},[z0]),v(()=>{if(!D0)return;let L=(w)=>{let n=n_.current,c=I1.current,y0=w.target;if(n&&n.contains(y0))return;if(c&&c.contains(y0))return;j0(!1)};return document.addEventListener("pointerdown",L),()=>document.removeEventListener("pointerdown",L)},[D0]),v(()=>{if(j||!z0&&!D0)return;let L=(w)=>{M(w)};return document.addEventListener("keydown",L,!0),()=>document.removeEventListener("keydown",L,!0)},[j,z0,D0,M]),v(()=>{if(!z0)return;let L=Q_.current;L?.focus?.(),L?.querySelector?.(".compose-model-popup-item.active")?.scrollIntoView?.({block:"nearest"})},[z0,G0,y]),v(()=>{if(!D0)return;let L=n_.current;L?.focus?.(),L?.querySelector?.(".compose-model-popup-item.active")?.scrollIntoView?.({block:"nearest"})},[D0,p0,E1.length]),v(()=>{let L=()=>{let J1=t1.current?.clientWidth||0;R_((y1)=>y1===J1?y1:J1)};L();let w=t1.current,n=0,c=()=>{if(n)cancelAnimationFrame(n);n=requestAnimationFrame(()=>{n=0,L()})},y0=null;if(w&&typeof ResizeObserver<"u")y0=new ResizeObserver(()=>c()),y0.observe(w);if(typeof window<"u")window.addEventListener("resize",c);return()=>{if(n)cancelAnimationFrame(n);if(y0?.disconnect?.(),typeof window<"u")window.removeEventListener("resize",c)}},[j,J,D1?.agent_name,f_,A?.percent]);let C5=(L)=>{let w=L.target.value;if(b1(null),D0)j0(!1);b_(L.target),V_(w)};return v(()=>{requestAnimationFrame(()=>b_())},[P0,e0,j]),v(()=>{if(!u_)return;l1(Date.now());let L=setInterval(()=>l1(Date.now()),1000);return()=>clearInterval(L)},[u_,J0?.started_at,J0?.startedAt]),v(()=>{if(j)return;e4(P0)},[n1,V0,P0,j]),B`
        <div class="compose-box">
            ${o0&&!j&&B`
                <${B3}
                    items=${b}
                    onInjectQueuedFollowup=${H}
                    onRemoveQueuedFollowup=${p}
                    onOpenFilePill=${C}
                />
            `}
            ${J0&&B`
                <div
                    class=${`compose-inline-status${u_?" compaction":""}`}
                    role="status"
                    aria-live="polite"
                    title=${f4||""}
                >
                    <div class="compose-inline-status-row">
                        <span class="compose-inline-status-dot" aria-hidden="true"></span>
                        <span class="compose-inline-status-title">${u4}</span>
                        ${Y1&&B`<span class="compose-inline-status-elapsed">${Y1}</span>`}
                    </div>
                    ${f4&&B`<div class="compose-inline-status-detail">${f4}</div>`}
                </div>
            `}
            ${j_&&B`
                <div class="compose-submit-error compose-submit-error-top" role="status" aria-live="polite">${j_}</div>
            `}
            <div
                class=${`compose-input-wrapper${F1?" drag-active":""}`}
                onDragEnter=${Z0}
                onDragOver=${B0}
                onDragLeave=${U0}
                onDrop=${$0}
            >
                <div class="compose-input-main">
                    ${z4&&B`
                        <div class="compose-file-refs">
                            ${V.map((L)=>{return B`
                                    <${l_}
                                        key=${"msg-"+L}
                                        prefix="compose"
                                        label=${"msg:"+L}
                                        title=${"Message reference: "+L}
                                        removeTitle="Remove reference"
                                        icon="message"
                                        onRemove=${()=>U?.(L)}
                                    />
                                `})}
                            ${K.map((L)=>{let w=L.split("/").pop()||L;return B`
                                    <${l_}
                                        prefix="compose"
                                        label=${w}
                                        title=${L}
                                        onClick=${()=>C?.(L)}
                                        removeTitle="Remove file"
                                        onRemove=${()=>G?.(L)}
                                    />
                                `})}
                            ${N1.map((L,w)=>{let n=L?.name||`attachment-${w+1}`;return B`
                                    <${l_}
                                        key=${n+w}
                                        prefix="compose"
                                        label=${n}
                                        title=${n}
                                        removeTitle="Remove attachment"
                                        onRemove=${()=>S1(w)}
                                    />
                                `})}
                            <button
                                type="button"
                                class="compose-clear-attachments-btn"
                                onClick=${__}
                                title="Clear all attachments and references"
                                aria-label="Clear all attachments and references"
                            >
                                Clear all
                            </button>
                        </div>
                    `}
                    ${!j&&typeof _0==="function"&&B`
                        <button
                            type="button"
                            class="compose-popout-btn"
                            onClick=${()=>_0?.()}
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
                        ref=${j1}
                        placeholder=${j?"Search (Enter to run)...":"Message (Enter to send, Shift+Enter for newline)..."}
                        value=${j?e0:P0}
                        onInput=${C5}
                        onKeyDown=${R}
                        onPaste=${w0}
                        onFocus=${$}
                        onClick=${$}
                        rows="1"
                    />
                    ${C0&&h.length>0&&B`
                        <div class="slash-autocomplete" ref=${e_}>
                            ${h.map((L,w)=>B`
                                <div
                                    key=${L.chat_jid||L.agent_name}
                                    class=${`slash-item${w===O0?" active":""}`}
                                    onMouseDown=${(n)=>{n.preventDefault(),m_(L)}}
                                    onMouseEnter=${()=>I0(w)}
                                >
                                    <span class="slash-name">@${L.agent_name}</span>
                                    <span class="slash-desc">${L.chat_jid||"Active agent"}</span>
                                </div>
                            `)}
                        </div>
                    `}
                    ${r&&_1.length>0&&B`
                        <div class="slash-autocomplete" ref=${a1}>
                            ${_1.map((L,w)=>B`
                                <div
                                    key=${L.name}
                                    class=${`slash-item${w===v0?" active":""}`}
                                    onMouseDown=${(n)=>{n.preventDefault(),Q4(L)}}
                                    onMouseEnter=${()=>Q1(w)}
                                >
                                    <span class="slash-name">${L.name}</span>
                                    <span class="slash-desc">${L.description}</span>
                                </div>
                            `)}
                        </div>
                    `}
                    ${z0&&!j&&B`
                        <div class="compose-model-popup" ref=${Q_} tabIndex="-1" onKeyDown=${M}>
                            <div class="compose-model-popup-title">Select model</div>
                            <div class="compose-model-popup-menu" role="menu" aria-label="Model picker">
                                ${X1&&B`
                                    <div class="compose-model-popup-empty">Loading models…</div>
                                `}
                                ${!X1&&y.length===0&&B`
                                    <div class="compose-model-popup-empty">No models available.</div>
                                `}
                                ${!X1&&y.map((L,w)=>B`
                                    <button
                                        key=${L}
                                        type="button"
                                        role="menuitem"
                                        class=${`compose-model-popup-item${G0===w?" active":""}${J===L?" current-model":""}`}
                                        onClick=${()=>{Y4(L)}}
                                        disabled=${S0}
                                    >
                                        ${L}
                                    </button>
                                `)}
                            </div>
                            <div class="compose-model-popup-actions">
                                <button
                                    type="button"
                                    class="compose-model-popup-btn"
                                    onClick=${()=>{$5()}}
                                    disabled=${S0}
                                >
                                    Next model
                                </button>
                            </div>
                        </div>
                    `}
                    ${D0&&!j&&B`
                        <div class="compose-model-popup" ref=${n_} tabIndex="-1" onKeyDown=${M}>
                            <div class="compose-model-popup-title">Manage sessions & agents</div>
                            <div class="compose-model-popup-menu" role="menu" aria-label="Sessions and agents">
                                ${B`
                                    <div class="compose-model-popup-item current" role="note" aria-live="polite">
                                        ${(()=>{return Nj(D1,V0)})()}
                                    </div>
                                `}
                                ${!q_&&B`
                                    <div class="compose-model-popup-empty">No other sessions yet.</div>
                                `}
                                ${q_&&U1.map((L,w)=>{let n=Boolean(L.archived_at),y0=L.chat_jid!==(L.root_chat_jid||L.chat_jid)&&!L.is_active&&!n&&typeof r0==="function",J1=d8(L,{currentChatJid:V0});return B`
                                        <div key=${L.chat_jid} class=${`compose-model-popup-item-row${n?" archived":""}`}>
                                            <button
                                                type="button"
                                                role="menuitem"
                                                class=${`compose-model-popup-item${n?" archived":""}${p0===w?" active":""}`}
                                                onClick=${()=>{if(n){J4(L.chat_jid);return}H4(L.chat_jid)}}
                                                disabled=${n?!K_:!N_}
                                                title=${n?`Restore archived ${`@${L.agent_name}`}`:`Switch to ${`@${L.agent_name}`}`}
                                            >
                                                ${J1}
                                            </button>
                                            ${y0&&B`
                                                <button
                                                    type="button"
                                                    class="compose-model-popup-item-delete"
                                                    title="Delete this branch"
                                                    aria-label=${`Delete @${L.agent_name}`}
                                                    onClick=${(y1)=>{y1.stopPropagation(),j0(!1),r0(L.chat_jid)}}
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
                            ${(g1||h1||G_)&&B`
                                <div class="compose-model-popup-actions">
                                    ${g1&&B`
                                        <button
                                            type="button"
                                            class=${`compose-model-popup-btn primary${E1.findIndex((L)=>L.key==="action:new")===p0?" active":""}`}
                                            onClick=${()=>{_5()}}
                                            title="Create a new agent/session branch from this chat"
                                        >
                                            New
                                        </button>
                                    `}
                                    ${h1&&B`
                                        <button
                                            type="button"
                                            class=${`compose-model-popup-btn${E1.findIndex((L)=>L.key==="action:rename")===p0?" active":""}`}
                                            onClick=${(L)=>{O4(L)}}
                                            title="Rename the current branch handle"
                                            disabled=${d_}
                                        >
                                            Rename current…
                                        </button>
                                    `}
                                    ${G_&&B`
                                        <button
                                            type="button"
                                            class=${`compose-model-popup-btn danger${E1.findIndex((L)=>L.key==="action:delete")===p0?" active":""}`}
                                            onClick=${()=>{X_()}}
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
                <div class="compose-footer" ref=${t1}>
                    ${!j&&J&&B`
                    <div class="compose-meta-row">
                        ${!j&&J&&B`
                            <div class="compose-model-meta">
                                <button
                                    ref=${_4}
                                    type="button"
                                    class="compose-model-hint compose-model-hint-btn"
                                    title=${g4}
                                    aria-label="Open model picker"
                                    onClick=${z_}
                                    disabled=${S0}
                                >
                                    ${S0?"Switching…":H1}
                                </button>
                                <div class="compose-model-meta-subline">
                                    ${!S0&&x_&&B`
                                        <span class="compose-model-usage-hint" title=${g4}>
                                            ${x_}
                                        </span>
                                    `}
                                </div>
                            </div>
                        `}
                        ${!j&&A&&A.percent!=null&&B`
                            <${pK} usage=${A} onCompact=${A4} />
                        `}
                    </div>
                    `}
                    <div class="compose-actions ${j?"search-mode":""}">
                    ${f_&&B`
                        ${D1?.agent_name&&B`
                            <button
                                type="button"
                                class="compose-current-agent-label active"
                                title=${D1.chat_jid||V0}
                                aria-label=${`Manage sessions for @${D1.agent_name}`}
                                onClick=${d1}
                            >@${D1.agent_name}</button>
                        `}
                        <button
                            ref=${I1}
                            type="button"
                            class=${`icon-btn compose-mention-btn${D0?" active":""}`}
                            onClick=${d1}
                            title=${D0?"Hide session manager":"Manage Sessions/Agents"}
                            aria-label="Manage Sessions/Agents"
                            aria-expanded=${D0?"true":"false"}
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
                                value=${Q}
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
                        onClick=${j?N:q}
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
                    ${$4&&!j&&B`
                        <button
                            class="icon-btn location-btn"
                            onClick=${p1}
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
                    ${F4&&!j&&B`
                        <button
                            class=${`icon-btn notification-btn${k_?" active":""}`}
                            onClick=${l}
                            title=${T1}
                            type="button"
                        >
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M18 8a6 6 0 1 0-12 0c0 7-3 9-3 9h18s-3-2-3-9" />
                                <path d="M13.73 21a2 2 0 0 1-3.46 0" />
                            </svg>
                        </button>
                    `}
                    ${!j&&B`
                        ${x&&z&&B`
                            <button
                                class="icon-btn attach-editor-btn"
                                onClick=${z}
                                title=${`Attach open file: ${x}`}
                                type="button"
                                disabled=${K.includes(x)}
                            >
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"/><polyline points="13 2 13 9 20 9"/></svg>
                            </button>
                        `}
                        <label class="icon-btn" title="Attach file">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>
                            <input type="file" multiple hidden onChange=${d} />
                        </label>
                    `}
                    ${(H0!=="connected"||!j)&&B`
                        <div class="compose-send-stack">
                            ${H0!=="connected"&&B`
                                <span class="compose-connection-status connection-status ${H0}" title=${M_}>
                                    ${Y_}
                                </span>
                            `}
                            ${!j&&B`
                                <button 
                                    class="icon-btn send-btn" 
                                    type="button"
                                    onClick=${()=>{C_()}}
                                    disabled=${!m1}
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
    `}function DQ({session:_,onClose:$,onInject:j,onRetry:Q}){let Z=I(null),Y=I(null),q=_?.thinking?t5(_.thinking):"",N=_?.answer?O_(_.answer,null,{sanitize:!1}):"";if(v(()=>{if(Z.current&&q)W4(Z.current).catch(()=>{})},[q]),v(()=>{if(Y.current&&N)W4(Y.current).catch(()=>{})},[N]),!_)return null;let K=_.status==="running",G=Boolean(String(_.answer||"").trim()),X=Boolean(String(_.thinking||"").trim()),V=D9(_),U=E9(_),W=!K&&G,J=K?"Thinking…":_.status==="error"?"Error":"Done";return B`
        <section class="btw-panel" aria-label="BTW side conversation">
            <div class="btw-panel-header">
                <div class="btw-panel-title-wrap">
                    <span class="btw-panel-title">Question</span>
                    <span class=${`btw-panel-status btw-panel-status-${_.status||"idle"}`}>${J}</span>
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
            ${X&&B`
                <details class="btw-block btw-thinking" open=${K?!0:void 0}>
                    <summary>Thinking</summary>
                    <div
                        class="btw-thinking-body post-content"
                        ref=${Z}
                        dangerouslySetInnerHTML=${{__html:q}}
                    ></div>
                </details>
            `}
            ${V&&B`
                <div class="btw-block btw-answer">
                    <div class="btw-answer-label">Answer</div>
                    <div
                        class="btw-answer-body post-content"
                        ref=${Y}
                        dangerouslySetInnerHTML=${{__html:N}}
                    ></div>
                </div>
            `}

            ${U&&B`
                <div class="btw-panel-footer">
                    <div class="btw-panel-footer-left">
                        ${_.question&&B`
                            <button class="btw-btn btw-btn-secondary" onClick=${()=>Q?.()}>
                                Retry
                            </button>
                        `}
                    </div>
                    <div class="btw-panel-footer-right">
                        <button class="btw-btn btw-btn-primary" onClick=${()=>j?.()} disabled=${!W}>
                            Inject into chat
                        </button>
                    </div>
                </div>
            `}
        </section>
    `}function EQ({widget:_,onClose:$,onWidgetEvent:j}){let Q=I(null),Z=I(!1),Y=f0(()=>dj(_),[_?.artifact?.kind,_?.artifact?.html,_?.artifact?.svg,_?.widgetId,_?.toolCallId,_?.turnId,_?.title]);if(v(()=>{if(!_)return;let F=(A)=>{if(A.key==="Escape")$?.()};return document.addEventListener("keydown",F),()=>document.removeEventListener("keydown",F)},[_,$]),v(()=>{Z.current=!1},[Y]),v(()=>{if(!_)return;let F=Q.current;if(!F)return;let A=(o)=>{let P=t8(_),x=o==="widget.init"?s8(_):a8(_);try{F.name=P}catch{}try{F.contentWindow?.postMessage({__piclawGeneratedWidgetHost:!0,type:o,widgetId:_?.widgetId||null,toolCallId:_?.toolCallId||null,turnId:_?.turnId||null,payload:x},"*")}catch{}},k=()=>{A("widget.init"),A("widget.update")},m=()=>{Z.current=!0,k()};F.addEventListener("load",m);let l=[0,40,120,300,800].map((o)=>setTimeout(k,o));return()=>{F.removeEventListener("load",m),l.forEach((o)=>clearTimeout(o))}},[Y,_?.widgetId,_?.toolCallId,_?.turnId]),v(()=>{if(!_)return;let F=Q.current;if(!F?.contentWindow)return;let A=t8(_),k=a8(_);try{F.name=A}catch{}try{F.contentWindow.postMessage({__piclawGeneratedWidgetHost:!0,type:"widget.update",widgetId:_?.widgetId||null,toolCallId:_?.toolCallId||null,turnId:_?.turnId||null,payload:k},"*")}catch{}return},[_?.widgetId,_?.toolCallId,_?.turnId,_?.status,_?.subtitle,_?.description,_?.error,_?.width,_?.height,_?.runtimeState]),v(()=>{if(!_)return;let F=(A)=>{let k=A?.data;if(!k||k.__piclawGeneratedWidget!==!0)return;let m=Q.current,f=A_(_),l=A_({widgetId:k.widgetId,toolCallId:k.toolCallId});if(l&&f&&l!==f)return;if(!l&&m?.contentWindow&&A.source!==m.contentWindow)return;j?.(k,_)};return window.addEventListener("message",F),()=>window.removeEventListener("message",F)},[_,j]),!_)return null;let N=(_?.artifact||{}).kind||_?.kind||"html",K=typeof _?.title==="string"&&_.title.trim()?_.title.trim():"Generated widget",G=typeof _?.subtitle==="string"&&_.subtitle.trim()?_.subtitle.trim():"",X=_?.source==="live"?"live":"timeline",V=typeof _?.status==="string"&&_.status.trim()?_.status.trim():"final",U=X==="live"?`Live widget • ${V.toUpperCase()}`:_?.originPostId?`Message #${_.originPostId}`:"Timeline launch",W=typeof _?.description==="string"&&_.description.trim()?_.description.trim():"",J=!Y,D=nj(_),O=pj(_);return B`
        <div class="floating-widget-backdrop" onClick=${()=>$?.()}>
            <section
                class="floating-widget-pane"
                aria-label=${K}
                onClick=${(F)=>F.stopPropagation()}
            >
                <div class="floating-widget-header">
                    <div class="floating-widget-heading">
                        <div class="floating-widget-eyebrow">${U} • ${N.toUpperCase()}</div>
                        <div class="floating-widget-title">${K}</div>
                        ${(G||W)&&B`
                            <div class="floating-widget-subtitle">${G||W}</div>
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
                    ${J?B`<div class="floating-widget-empty">${D}</div>`:B`
                            <iframe
                                ref=${Q}
                                class="floating-widget-frame"
                                title=${K}
                                name=${t8(_)}
                                sandbox=${O}
                                referrerpolicy="no-referrer"
                                srcdoc=${Y}
                            ></iframe>
                        `}
                </div>
            </section>
        </div>
    `}var kQ="PiClaw";function L3(_,$,j=!1){let Q=_||"PiClaw",Z=Q.charAt(0).toUpperCase(),Y=["#FF6B6B","#4ECDC4","#45B7D1","#FFA07A","#98D8C8","#F7DC6F","#BB8FCE","#85C1E2","#F8B195","#6C5CE7","#00B894","#FDCB6E","#E17055","#74B9FF","#A29BFE","#FD79A8","#00CEC9","#FFEAA7","#DFE6E9","#FF7675","#55EFC4","#81ECEC","#FAB1A0","#74B9FF","#A29BFE","#FD79A8"],q=Z.charCodeAt(0)%Y.length,N=Y[q],K=Q.trim().toLowerCase(),G=typeof $==="string"?$.trim():"",X=G?G:null,V=j||K==="PiClaw".toLowerCase()||K==="pi";return{letter:Z,color:N,image:X||(V?"/static/icon-192.png":null)}}function MQ(_,$){if(!_)return"PiClaw";let j=$[_]?.name||_;return j?j.charAt(0).toUpperCase()+j.slice(1):"PiClaw"}function IQ(_,$){if(!_)return null;let j=$[_]||{};return j.avatar_url||j.avatarUrl||j.avatar||null}function xQ(_){if(!_)return null;if(typeof document<"u"){let Y=document.documentElement,q=Y?.dataset?.colorTheme||"",N=Y?.dataset?.tint||"",K=getComputedStyle(Y).getPropertyValue("--accent-color")?.trim();if(K&&(N||q&&q!=="default"))return K}let $=["#4ECDC4","#FF6B6B","#45B7D1","#BB8FCE","#FDCB6E","#00B894","#74B9FF","#FD79A8","#81ECEC","#FFA07A"],j=String(_),Q=0;for(let Y=0;Y<j.length;Y+=1)Q=(Q*31+j.charCodeAt(Y))%2147483647;let Z=Math.abs(Q)%$.length;return $[Z]}var dK=B`
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <rect x="9" y="9" width="10" height="10" rx="2"></rect>
        <path d="M7 15H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2v1"></path>
    </svg>
`;function W3({status:_,draft:$,plan:j,thought:Q,pendingRequest:Z,intent:Y,extensionPanels:q=[],pendingPanelActions:N=new Set,onExtensionPanelAction:K,turnId:G,steerQueued:X,onPanelToggle:V,showCorePanels:U=!0,showExtensionPanels:W=!0}){let O=(r)=>{if(!r)return{text:"",totalLines:0,fullText:""};if(typeof r==="string"){let O0=r,I0=O0?O0.replace(/\r\n/g,`
`).split(`
`).length:0;return{text:O0,totalLines:I0,fullText:O0}}let N0=r.text||"",h=r.fullText||r.full_text||N0,i=Number.isFinite(r.totalLines)?r.totalLines:h?h.replace(/\r\n/g,`
`).split(`
`).length:0;return{text:N0,totalLines:i,fullText:h}},F=160,A=(r)=>String(r||"").replace(/<\/?internal>/gi,""),k=(r)=>{if(!r)return 1;return Math.max(1,Math.ceil(r.length/160))},m=(r,N0,h)=>{let i=(r||"").replace(/\r\n/g,`
`).replace(/\r/g,`
`);if(!i)return{text:"",omitted:0,totalLines:Number.isFinite(h)?h:0,visibleLines:0};let O0=i.split(`
`),I0=O0.length>N0?O0.slice(0,N0).join(`
`):i,C0=Number.isFinite(h)?h:O0.reduce((h0,z0)=>h0+k(z0),0),A0=I0?I0.split(`
`).reduce((h0,z0)=>h0+k(z0),0):0,S0=Math.max(C0-A0,0);return{text:I0,omitted:S0,totalLines:C0,visibleLines:A0}},f=O(j),l=O(Q),o=O($),P=Boolean(f.text)||f.totalLines>0,x=Boolean(l.text)||l.totalLines>0,z=Boolean(o.fullText?.trim()||o.text?.trim()),C=Boolean(_||z||P||x||Z||Y),b=Array.isArray(q)&&q.length>0;if((!U||!C)&&(!W||!b))return null;let[e,p]=g(new Set),[a,t]=g(null),[_0,K0]=g(()=>Date.now()),q0=(r)=>p((N0)=>{let h=new Set(N0),i=!h.has(r);if(i)h.add(r);else h.delete(r);if(typeof V==="function")V(r,i);return h});v(()=>{p(new Set),t(null)},[G]);let V0=y4(_);v(()=>{if(!V0)return;K0(Date.now());let r=setInterval(()=>K0(Date.now()),1000);return()=>clearInterval(r)},[V0,_?.started_at,_?.startedAt]);let H0=_?.turn_id||G,F0=xQ(H0),b0=X?"turn-dot turn-dot-queued":"turn-dot",x0=(r)=>r,k0=Boolean(_?.last_activity||_?.lastActivity),m0=(r)=>r==="warning"?"#f59e0b":r==="error"?"var(--danger-color)":r==="success"?"var(--success-color)":F0,g0=Y?.kind||"info",l0=m0(g0),r0=m0(_?.kind||(V0?"warning":"info")),M0="",o0=_?.title,J0=_?.status;if(_?.type==="plan")M0=o0?`Planning: ${o0}`:"Planning...";else if(_?.type==="tool_call")M0=o0?`Running: ${o0}`:"Running tool...";else if(_?.type==="tool_status")M0=o0?`${o0}: ${J0||"Working..."}`:J0||"Working...";else if(_?.type==="error")M0=o0||"Agent error";else M0=o0||J0||"Working...";if(k0)M0="Last activity just now";let P0=({panelTitle:r,text:N0,fullText:h,totalLines:i,maxLines:O0,titleClass:I0,panelKey:C0})=>{let A0=e.has(C0),S0=h||N0||"",h0=C0==="thought"||C0==="draft"?A(S0):S0,z0=typeof O0==="number",u0=A0&&z0,D0=z0?m(h0,O0,i):{text:h0||"",omitted:0,totalLines:Number.isFinite(i)?i:0};if(!h0&&!(Number.isFinite(D0.totalLines)&&D0.totalLines>0))return null;let j0=`agent-thinking-body${z0?" agent-thinking-body-collapsible":""}`,y=z0?`--agent-thinking-collapsed-lines: ${O0};`:"";return B`
            <div
                class="agent-thinking"
                data-expanded=${A0?"true":"false"}
                data-collapsible=${z0?"true":"false"}
                style=${F0?`--turn-color: ${F0};`:""}
            >
                <div class="agent-thinking-title ${I0||""}">
                    ${F0&&B`<span class=${b0} aria-hidden="true"></span>`}
                    ${r}
                    ${u0&&B`
                        <button
                            class="agent-thinking-close"
                            aria-label=${`Close ${r} panel`}
                            onClick=${()=>q0(C0)}
                        >
                            ×
                        </button>
                    `}
                </div>
                <div
                    class=${j0}
                    style=${y}
                    dangerouslySetInnerHTML=${{__html:t5(h0)}}
                />
                ${!A0&&D0.omitted>0&&B`
                    <button class="agent-thinking-truncation" onClick=${()=>q0(C0)}>
                        ▸ ${D0.omitted} more lines
                    </button>
                `}
                ${A0&&D0.omitted>0&&B`
                    <button class="agent-thinking-truncation" onClick=${()=>q0(C0)}>
                        ▴ show less
                    </button>
                `}
            </div>
        `},s0=Z?.tool_call?.title,e0=s0?`Awaiting approval: ${s0}`:"Awaiting approval",u1=V0?c8(_,_0):null,N1=(r,N0,h=null)=>{let i=p8(r);return B`
            <div
                class="agent-thinking agent-thinking-intent"
                aria-live="polite"
                style=${N0?`--turn-color: ${N0};`:""}
                title=${r?.detail||""}
            >
                <div class="agent-thinking-title intent">
                    ${N0&&B`<span class=${b0} aria-hidden="true"></span>`}
                    <span class="agent-thinking-title-text">${i}</span>
                    ${h&&B`<span class="agent-status-elapsed">${h}</span>`}
                </div>
                ${r.detail&&B`<div class="agent-thinking-body">${r.detail}</div>`}
            </div>
        `},i0=(r,N0,h,i,O0,I0,C0,A0=8,S0=8)=>{let h0=Math.max(O0-i,0.000000001),z0=Math.max(N0-A0*2,1),u0=Math.max(h-S0*2,1),D0=Math.max(C0-I0,1),j0=C0===I0?N0/2:A0+(r.run-I0)/D0*z0,y=S0+(u0-(r.value-i)/h0*u0);return{x:j0,y}},F1=(r,N0,h,i,O0,I0,C0,A0=8,S0=8)=>{if(!Array.isArray(r)||r.length===0)return"";return r.map((h0,z0)=>{let{x:u0,y:D0}=i0(h0,N0,h,i,O0,I0,C0,A0,S0);return`${z0===0?"M":"L"} ${u0.toFixed(2)} ${D0.toFixed(2)}`}).join(" ")},Z1=(r,N0="")=>{if(!Number.isFinite(r))return"—";return`${Math.abs(r)>=100?r.toFixed(0):r.toFixed(2).replace(/\.0+$/,"").replace(/(\.\d*[1-9])0+$/,"$1")}${N0}`},_1=["var(--accent-color)","var(--success-color)","var(--warning-color, #f59e0b)","var(--danger-color)"],W0=(r,N0)=>{let h=_1;if(!Array.isArray(h)||h.length===0)return"var(--accent-color)";if(h.length===1||!Number.isFinite(N0)||N0<=1)return h[0];let O0=Math.max(0,Math.min(Number.isFinite(r)?r:0,N0-1))/Math.max(1,N0-1)*(h.length-1),I0=Math.floor(O0),C0=Math.min(h.length-1,I0+1),A0=O0-I0,S0=h[I0],h0=h[C0];if(!h0||I0===C0||A0<=0.001)return S0;if(A0>=0.999)return h0;let z0=Math.round((1-A0)*1000)/10,u0=Math.round(A0*1000)/10;return`color-mix(in oklab, ${S0} ${z0}%, ${h0} ${u0}%)`},v0=(r,N0="autoresearch")=>{let h=Array.isArray(r)?r.map((j0)=>({...j0,points:Array.isArray(j0?.points)?j0.points.filter((y)=>Number.isFinite(y?.value)&&Number.isFinite(y?.run)):[]})).filter((j0)=>j0.points.length>0):[],i=h.map((j0,y)=>({...j0,color:W0(y,h.length)}));if(i.length===0)return null;let O0=320,I0=120,C0=i.flatMap((j0)=>j0.points),A0=C0.map((j0)=>j0.value),S0=C0.map((j0)=>j0.run),h0=Math.min(...A0),z0=Math.max(...A0),u0=Math.min(...S0),D0=Math.max(...S0);return B`
            <div class="agent-series-chart agent-series-chart-combined">
                <div class="agent-series-chart-header">
                    <span class="agent-series-chart-title">Tracked variables</span>
                    <span class="agent-series-chart-value">${i.length} series</span>
                </div>
                <div class="agent-series-chart-plot">
                    <svg class="agent-series-chart-svg" viewBox=${`0 0 ${O0} ${I0}`} preserveAspectRatio="none" aria-hidden="true">
                        ${i.map((j0)=>{let y=j0?.key||j0?.label||"series",s=a?.panelKey===N0&&a?.seriesKey===y;return B`
                                <g key=${y}>
                                    <path
                                        class=${`agent-series-chart-line${s?" is-hovered":""}`}
                                        d=${F1(j0.points,O0,I0,h0,z0,u0,D0)}
                                        style=${`--agent-series-color: ${j0.color};`}
                                        onMouseEnter=${()=>t({panelKey:N0,seriesKey:y})}
                                        onMouseLeave=${()=>t((G0)=>G0?.panelKey===N0&&G0?.seriesKey===y?null:G0)}
                                    ></path>
                                </g>
                            `})}
                    </svg>
                    <div class="agent-series-chart-points-layer">
                        ${i.flatMap((j0)=>{let y=typeof j0?.unit==="string"?j0.unit:"",s=j0?.key||j0?.label||"series";return j0.points.map((G0,E0)=>{let p0=i0(G0,O0,I0,h0,z0,u0,D0);return B`
                                    <button
                                        key=${`${s}-point-${E0}`}
                                        type="button"
                                        class="agent-series-chart-point-hit"
                                        style=${`--agent-series-color: ${j0.color}; left:${p0.x/O0*100}%; top:${p0.y/I0*100}%;`}
                                        onMouseEnter=${()=>t({panelKey:N0,seriesKey:s,run:G0.run,value:G0.value,unit:y})}
                                        onMouseLeave=${()=>t(($1)=>$1?.panelKey===N0?null:$1)}
                                        onFocus=${()=>t({panelKey:N0,seriesKey:s,run:G0.run,value:G0.value,unit:y})}
                                        onBlur=${()=>t(($1)=>$1?.panelKey===N0?null:$1)}
                                        aria-label=${`${j0?.label||"Series"} ${Z1(G0.value,y)} at run ${G0.run}`}
                                    >
                                        <span class="agent-series-chart-point"></span>
                                    </button>
                                `})})}
                    </div>
                </div>
                <div class="agent-series-legend">
                    ${i.map((j0)=>{let y=j0.points[j0.points.length-1]?.value,s=typeof j0?.unit==="string"?j0.unit:"",G0=j0?.key||j0?.label||"series",E0=a?.panelKey===N0&&a?.seriesKey===G0?a:null,p0=E0&&Number.isFinite(E0.value)?E0.value:y,$1=E0&&typeof E0.unit==="string"?E0.unit:s,X1=E0&&Number.isFinite(E0.run)?E0.run:null;return B`
                            <div key=${`${G0}-legend`} class=${`agent-series-legend-item${E0?" is-hovered":""}`} style=${`--agent-series-color: ${j0.color};`}>
                                <span class="agent-series-legend-swatch" style=${`--agent-series-color: ${j0.color};`}></span>
                                <span class="agent-series-legend-label">${j0?.label||"Series"}</span>
                                ${X1!==null&&B`<span class="agent-series-legend-run">run ${X1}</span>`}
                                <span class="agent-series-legend-value">${Z1(p0,$1)}</span>
                            </div>
                        `})}
                </div>
            </div>
        `},Q1=(r)=>{if(!r)return null;let N0=typeof r?.key==="string"?r.key:`panel-${Math.random()}`,h=e.has(N0),i=r?.title||"Extension status",O0=r?.collapsed_text||"",I0=String(r?.state||"").replace(/[-_]+/g," ").replace(/^./,(s)=>s.toUpperCase()),C0=m0(r?.state==="completed"?"success":r?.state==="failed"?"error":r?.state==="stopped"?"warning":"info"),A0=typeof r?.detail_markdown==="string"?r.detail_markdown.trim():"",S0=typeof r?.last_run_text==="string"?r.last_run_text.trim():"",h0=typeof r?.tmux_command==="string"?r.tmux_command.trim():"",z0=Array.isArray(r?.series)?r.series:[],u0=Array.isArray(r?.actions)?r.actions:[],D0=Boolean(A0||h0),j0=Boolean(A0||z0.length>0||h0),y=[i,O0].filter(Boolean).join(" — ");return B`
            <div
                class="agent-thinking agent-thinking-intent agent-thinking-autoresearch"
                aria-live="polite"
                data-expanded=${h?"true":"false"}
                style=${C0?`--turn-color: ${C0};`:""}
                title=${!h?y||i:""}
            >
                <div class="agent-thinking-header agent-thinking-header-inline">
                    <button
                        class="agent-thinking-title intent agent-thinking-title-clickable"
                        type="button"
                        onClick=${()=>j0?q0(N0):null}
                    >
                        ${C0&&B`<span class=${b0} aria-hidden="true"></span>`}
                        <span class="agent-thinking-title-text">${i}</span>
                        ${O0&&B`<span class="agent-thinking-title-meta">${O0}</span>`}
                    </button>
                    ${(u0.length>0||j0&&!h)&&B`
                        <div class="agent-thinking-tools-inline">
                            ${u0.length>0&&B`
                                <div class="agent-thinking-actions agent-thinking-actions-inline">
                                    ${u0.map((s)=>{let G0=`${N0}:${s?.key||""}`,E0=N?.has?.(G0);return B`
                                            <button
                                                key=${G0}
                                                class=${`agent-thinking-action-btn${s?.tone==="danger"?" danger":""}`}
                                                onClick=${()=>K?.(r,s)}
                                                disabled=${Boolean(E0)}
                                            >
                                                ${E0?"Working…":s?.label||"Run"}
                                            </button>
                                        `})}
                                </div>
                            `}
                            ${j0&&!h&&B`
                                <button
                                    class="agent-thinking-corner-toggle agent-thinking-corner-toggle-inline"
                                    type="button"
                                    aria-label=${`Expand ${i}`}
                                    title="Expand details"
                                    onClick=${()=>q0(N0)}
                                >
                                    <svg viewBox="0 0 16 16" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                        <polyline points="4 10 8 6 12 10"></polyline>
                                    </svg>
                                </button>
                            `}
                        </div>
                    `}
                </div>
                ${j0&&h&&B`
                    <button
                        class="agent-thinking-corner-toggle"
                        type="button"
                        aria-label=${`Collapse ${i}`}
                        title="Collapse details"
                        onClick=${()=>q0(N0)}
                    >
                        <svg viewBox="0 0 16 16" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                            <polyline points="4 6 8 10 12 6"></polyline>
                        </svg>
                    </button>
                `}
                ${h&&B`
                    <div class=${`agent-thinking-autoresearch-layout${D0?"":" chart-only"}`}>
                        ${D0&&B`
                            <div class="agent-thinking-autoresearch-meta-stack">
                                ${A0&&B`
                                    <div
                                        class="agent-thinking-body agent-thinking-autoresearch-detail"
                                        dangerouslySetInnerHTML=${{__html:t5(A0)}}
                                    />
                                `}
                                ${h0&&B`
                                    <div class="agent-series-chart-command">
                                        <div class="agent-series-chart-command-header">
                                            <span>Attach to session</span>
                                        </div>
                                        <div class="agent-series-chart-command-shell">
                                            <pre class="agent-series-chart-command-code">${h0}</pre>
                                            <button
                                                type="button"
                                                class="agent-series-chart-command-copy"
                                                aria-label="Copy tmux command"
                                                title="Copy tmux command"
                                                onClick=${()=>K?.(r,{key:"copy_tmux",action_type:"autoresearch.copy_tmux",label:"Copy tmux"})}
                                            >
                                                ${dK}
                                            </button>
                                        </div>
                                    </div>
                                `}
                            </div>
                        `}
                        ${z0.length>0?B`
                                <div class="agent-series-chart-stack">
                                    ${v0(z0,N0)}
                                    ${S0&&B`<div class="agent-series-chart-note">${S0}</div>`}
                                </div>
                            `:B`<div class="agent-thinking-body agent-thinking-autoresearch-summary">Variable history will appear after the first completed run.</div>`}
                    </div>
                `}
            </div>
        `};return B`
        <div class="agent-status-panel">
            ${U&&Y&&N1(Y,l0)}
            ${W&&Array.isArray(q)&&q.map((r)=>Q1(r))}
            ${U&&_?.type==="intent"&&N1(_,r0,u1)}
            ${U&&Z&&B`
                <div class="agent-status agent-status-request" aria-live="polite" style=${F0?`--turn-color: ${F0};`:""}>
                    <span class=${b0} aria-hidden="true"></span>
                    <div class="agent-status-spinner"></div>
                    <span class="agent-status-text">${e0}</span>
                </div>
            `}
            ${U&&P&&P0({panelTitle:x0("Planning"),text:f.text,fullText:f.fullText,totalLines:f.totalLines,panelKey:"plan"})}
            ${U&&x&&P0({panelTitle:x0("Thoughts"),text:l.text,fullText:l.fullText,totalLines:l.totalLines,maxLines:8,titleClass:"thought",panelKey:"thought"})}
            ${U&&z&&P0({panelTitle:x0("Draft"),text:o.text,fullText:o.fullText,totalLines:o.totalLines,maxLines:8,titleClass:"thought",panelKey:"draft"})}
            ${U&&_&&_?.type!=="intent"&&B`
                <div class=${`agent-status${k0?" agent-status-last-activity":""}${_?.type==="error"?" agent-status-error":""}`} aria-live="polite" style=${F0?`--turn-color: ${F0};`:""}>
                    ${F0&&B`<span class=${b0} aria-hidden="true"></span>`}
                    ${_?.type==="error"?B`<span class="agent-status-error-icon" aria-hidden="true">⚠</span>`:!k0&&B`<div class="agent-status-spinner"></div>`}
                    <span class="agent-status-text">${M0}</span>
                </div>
            `}
        </div>
    `}function TQ({request:_,onRespond:$}){if(!_)return null;let{request_id:j,tool_call:Q,options:Z,chat_jid:Y}=_,q=Q?.title||"Agent Request",N=Q?.kind||"other",K=Q?.rawInput||{},G=K.command||K.commands&&K.commands[0]||null,X=K.diff||null,V=K.fileName||K.path||null,U=Q?.description||K.description||K.explanation||null,J=(Array.isArray(Q?.locations)?Q.locations:[]).map((k)=>k?.path).filter((k)=>Boolean(k)),D=Array.from(new Set([V,...J].filter(Boolean)));console.log("AgentRequestModal:",{request_id:j,tool_call:Q,options:Z});let O=async(k)=>{try{await D8(j,k,Y||null),$()}catch(m){console.error("Failed to respond to agent request:",m)}},F=async()=>{try{await h6(q,`Auto-approved: ${q}`),await D8(j,"approved",Y||null),$()}catch(k){console.error("Failed to add to whitelist:",k)}},A=Z&&Z.length>0;return B`
        <div class="agent-request-modal">
            <div class="agent-request-content">
                <div class="agent-request-header">
                    <div class="agent-request-icon">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                        </svg>
                    </div>
                    <div class="agent-request-title">${q}</div>
                </div>
                ${(U||G||X||D.length>0)&&B`
                    <div class="agent-request-body">
                        ${U&&B`
                            <div class="agent-request-description">${U}</div>
                        `}
                        ${D.length>0&&B`
                            <div class="agent-request-files">
                                <div class="agent-request-subtitle">Files</div>
                                <ul>
                                    ${D.map((k,m)=>B`<li key=${m}>${k}</li>`)}
                                </ul>
                            </div>
                        `}
                        ${G&&B`
                            <pre class="agent-request-command">${G}</pre>
                        `}
                        ${X&&B`
                            <details class="agent-request-diff">
                                <summary>Proposed diff</summary>
                                <pre>${X}</pre>
                            </details>
                        `}
                    </div>
                `}
                <div class="agent-request-actions">
                    ${A?Z.map((k)=>B`
                            <button 
                                key=${k.optionId||k.id||String(k)}
                                class="agent-request-btn ${k.kind==="allow_once"||k.kind==="allow_always"?"primary":""}"
                                onClick=${()=>O(k.optionId||k.id||k)}
                            >
                                ${k.name||k.label||k.optionId||k.id||String(k)}
                            </button>
                        `):B`
                        <button class="agent-request-btn primary" onClick=${()=>O("approved")}>
                            Allow
                        </button>
                        <button class="agent-request-btn" onClick=${()=>O("denied")}>
                            Deny
                        </button>
                        <button class="agent-request-btn always-allow" onClick=${F}>
                            Always Allow This
                        </button>
                    `}
                </div>
            </div>
        </div>
    `}var iK=new Set(["application/json","application/xml","text/csv","text/html","text/markdown","text/plain","text/xml"]),rK=new Set(["text/markdown"]),oK=new Set(["application/msword","application/rtf","application/vnd.ms-excel","application/vnd.ms-powerpoint","application/vnd.oasis.opendocument.presentation","application/vnd.oasis.opendocument.spreadsheet","application/vnd.oasis.opendocument.text","application/vnd.openxmlformats-officedocument.presentationml.presentation","application/vnd.openxmlformats-officedocument.spreadsheetml.sheet","application/vnd.openxmlformats-officedocument.wordprocessingml.document"]),sK=new Set(["application/vnd.jgraph.mxfile"]);function Q8(_){return typeof _==="string"?_.trim().toLowerCase():""}function aK(_){let $=Q8(_);return!!$&&($.endsWith(".drawio")||$.endsWith(".drawio.xml")||$.endsWith(".drawio.svg")||$.endsWith(".drawio.png"))}function tK(_){let $=Q8(_);return!!$&&$.endsWith(".pdf")}function eK(_){let $=Q8(_);return!!$&&($.endsWith(".docx")||$.endsWith(".doc")||$.endsWith(".odt")||$.endsWith(".rtf")||$.endsWith(".xlsx")||$.endsWith(".xls")||$.endsWith(".ods")||$.endsWith(".pptx")||$.endsWith(".ppt")||$.endsWith(".odp"))}function Z8(_,$){let j=Q8(_);if(aK($)||sK.has(j))return"drawio";if(tK($)||j==="application/pdf")return"pdf";if(eK($)||oK.has(j))return"office";if(!j)return"unsupported";if(j.startsWith("image/"))return"image";if(iK.has(j)||j.startsWith("text/"))return"text";return"unsupported"}function CQ(_){let $=Q8(_);return rK.has($)}function PQ(_){switch(_){case"image":return"Image preview";case"pdf":return"PDF preview";case"office":return"Office viewer";case"drawio":return"Draw.io preview (read-only)";case"text":return"Text preview";default:return"Preview unavailable"}}function _G(_){let j=String(_||"").trim().match(/^#([0-9a-f]{3}|[0-9a-f]{6})$/i);if(!j)return null;let Q=j[1].length===3?j[1].split("").map((Z)=>`${Z}${Z}`).join(""):j[1];return{r:parseInt(Q.slice(0,2),16),g:parseInt(Q.slice(2,4),16),b:parseInt(Q.slice(4,6),16)}}function $G(_){let j=String(_||"").trim().match(/^rgba?\((\d+)[,\s]+(\d+)[,\s]+(\d+)/i);if(!j)return null;let Q=Number(j[1]),Z=Number(j[2]),Y=Number(j[3]);if(![Q,Z,Y].every((q)=>Number.isFinite(q)))return null;return{r:Q,g:Z,b:Y}}function yQ(_){return _G(_)||$G(_)}function Q6(_){let $=(Y)=>{let q=Y/255;return q<=0.03928?q/12.92:((q+0.055)/1.055)**2.4},j=$(_.r),Q=$(_.g),Z=$(_.b);return 0.2126*j+0.7152*Q+0.0722*Z}function jG(_,$){let j=Math.max(Q6(_),Q6($)),Q=Math.min(Q6(_),Q6($));return(j+0.05)/(Q+0.05)}function QG(_,$,j="#ffffff"){let Q=yQ(_);if(!Q)return j;let Z=j,Y=-1;for(let q of $){let N=yQ(q);if(!N)continue;let K=jG(Q,N);if(K>Y)Z=q,Y=K}return Z}function F3(){let _=getComputedStyle(document.documentElement),$=(J,D)=>{for(let O of J){let F=_.getPropertyValue(O).trim();if(F)return F}return D},j=$(["--text-primary","--color-text"],"#0f1419"),Q=$(["--text-secondary","--color-text-muted"],"#536471"),Z=$(["--bg-primary","--color-bg-primary"],"#ffffff"),Y=$(["--bg-secondary","--color-bg-secondary"],"#f7f9fa"),q=$(["--bg-hover","--bg-tertiary","--color-bg-tertiary"],"#e8ebed"),N=$(["--accent-color","--color-accent"],"#1d9bf0"),K=$(["--success-color","--color-success"],"#00ba7c"),G=$(["--warning-color","--color-warning","--accent-color"],"#f0b429"),X=$(["--danger-color","--color-error"],"#f4212e"),V=$(["--border-color","--color-border"],"#eff3f4"),U=$(["--font-family"],"system-ui, sans-serif"),W=QG(N,[j,Z],j);return{fg:j,fgMuted:Q,bgPrimary:Z,bg:Y,bgEmphasis:q,accent:N,good:K,warning:G,attention:X,border:V,fontFamily:U,buttonTextColor:W}}function SQ(){let{fg:_,fgMuted:$,bg:j,bgEmphasis:Q,accent:Z,good:Y,warning:q,attention:N,border:K,fontFamily:G}=F3();return{fontFamily:G,containerStyles:{default:{backgroundColor:j,foregroundColors:{default:{default:_,subtle:$},accent:{default:Z,subtle:Z},good:{default:Y,subtle:Y},warning:{default:q,subtle:q},attention:{default:N,subtle:N}}},emphasis:{backgroundColor:Q,foregroundColors:{default:{default:_,subtle:$},accent:{default:Z,subtle:Z},good:{default:Y,subtle:Y},warning:{default:q,subtle:q},attention:{default:N,subtle:N}}}},actions:{actionsOrientation:"horizontal",actionAlignment:"left",buttonSpacing:8,maxActions:5,showCard:{actionMode:"inline"},spacing:"default"},adaptiveCard:{allowCustomStyle:!1},spacing:{small:4,default:8,medium:12,large:16,extraLarge:24,padding:12},separator:{lineThickness:1,lineColor:K},fontSizes:{small:12,default:14,medium:16,large:18,extraLarge:22},fontWeights:{lighter:300,default:400,bolder:600},imageSizes:{small:40,medium:80,large:120},textBlock:{headingLevel:2}}}var ZG=new Set(["1.0","1.1","1.2","1.3","1.4","1.5","1.6"]),wQ=!1,Z6=null,RQ=!1;function z3(_){_.querySelector(".adaptive-card-notice")?.remove()}function YG(_,$,j="error"){z3(_);let Q=document.createElement("div");Q.className=`adaptive-card-notice adaptive-card-notice-${j}`,Q.textContent=$,_.appendChild(Q)}function qG(_,$=(j)=>O_(j,null)){let j=typeof _==="string"?_:String(_??"");if(!j.trim())return{outputHtml:"",didProcess:!1};return{outputHtml:$(j),didProcess:!0}}function NG(_=($)=>O_($,null)){return($,j)=>{try{let Q=qG($,_);j.outputHtml=Q.outputHtml,j.didProcess=Q.didProcess}catch(Q){console.error("[adaptive-card] Failed to process markdown:",Q),j.outputHtml=String($??""),j.didProcess=!1}}}function KG(_){if(RQ||!_?.AdaptiveCard)return;_.AdaptiveCard.onProcessMarkdown=NG(),RQ=!0}async function GG(){if(wQ)return;if(Z6)return Z6;return Z6=new Promise((_,$)=>{let j=document.createElement("script");j.src="/static/js/vendor/adaptivecards.min.js",j.onload=()=>{wQ=!0,_()},j.onerror=()=>$(Error("Failed to load adaptivecards SDK")),document.head.appendChild(j)}),Z6}function XG(){return globalThis.AdaptiveCards}function VG(_){if(!_||typeof _!=="object")return!1;let $=_;return $.type==="adaptive_card"&&typeof $.card_id==="string"&&typeof $.schema_version==="string"&&typeof $.payload==="object"&&$.payload!==null}function UG(_){return ZG.has(_)}function J3(_){if(!Array.isArray(_))return[];return _.filter(VG)}function BG(_){let $=(typeof _?.getJsonTypeName==="function"?_.getJsonTypeName():"")||_?.constructor?.name||"Unknown",j=(typeof _?.title==="string"?_.title:"")||"",Q=(typeof _?.url==="string"?_.url:"")||void 0,Z=_?.data??void 0;return{type:$,title:j,data:Z,url:Q,raw:_}}function H3(_){if(_==null)return"";if(typeof _==="string")return _.trim();if(typeof _==="number")return String(_);if(typeof _==="boolean")return _?"yes":"no";if(Array.isArray(_))return _.map(($)=>H3($)).filter(Boolean).join(", ");if(typeof _==="object")return Object.entries(_).map(([j,Q])=>`${j}: ${H3(Q)}`).filter((j)=>!j.endsWith(": ")).join(", ");return String(_).trim()}function LG(_,$,j){if($==null)return $;if(_==="Input.Toggle"){if(typeof $==="boolean"){if($)return j?.valueOn??"true";return j?.valueOff??"false"}return typeof $==="string"?$:String($)}if(_==="Input.ChoiceSet"){if(Array.isArray($))return $.join(",");return typeof $==="string"?$:String($)}if(Array.isArray($))return $.join(", ");if(typeof $==="object")return H3($);return typeof $==="string"?$:String($)}function WG(_,$){if(!_||typeof _!=="object")return _;if(!$||typeof $!=="object"||Array.isArray($))return _;let j=$,Q=(Z)=>{if(Array.isArray(Z))return Z.map((N)=>Q(N));if(!Z||typeof Z!=="object")return Z;let q={...Z};if(typeof q.id==="string"&&q.id in j&&String(q.type||"").startsWith("Input."))q.value=LG(q.type,j[q.id],q);for(let[N,K]of Object.entries(q))if(Array.isArray(K)||K&&typeof K==="object")q[N]=Q(K);return q};return Q(_)}function FG(_){_.classList.add("adaptive-card-readonly");for(let $ of Array.from(_.querySelectorAll("input, textarea, select, button"))){let j=$;try{j.setAttribute("aria-disabled","true")}catch{}try{j.setAttribute("tabindex","-1")}catch{}if("disabled"in j)try{j.disabled=!0}catch{}if("readOnly"in j)try{j.readOnly=!0}catch{}}}function zG(_){if(typeof _!=="string"||!_.trim())return"";let $=new Date(_);if(Number.isNaN($.getTime()))return"";return new Intl.DateTimeFormat(void 0,{month:"short",day:"numeric",hour:"numeric",minute:"2-digit"}).format($)}function HG(_){if(_.state==="active")return null;let $=_.state==="completed"?"Submitted":_.state==="cancelled"?"Cancelled":"Failed",j=_.last_submission&&typeof _.last_submission==="object"?_.last_submission:null,Q=j&&typeof j.title==="string"?j.title.trim():"",Z=zG(_.completed_at||j?.submitted_at),Y=[Q||null,Z||null].filter(Boolean).join(" · ")||null;return{label:$,detail:Y}}async function uQ(_,$,j){if(!UG($.schema_version))return console.warn(`[adaptive-card] Unsupported schema version ${$.schema_version} for card ${$.card_id}`),!1;try{await GG()}catch(Q){return console.error("[adaptive-card] Failed to load SDK:",Q),!1}try{let Q=XG();KG(Q);let Z=new Q.AdaptiveCard,Y=F3();Z.hostConfig=new Q.HostConfig(SQ());let q=$.last_submission&&typeof $.last_submission==="object"?$.last_submission.data:void 0,N=$.state==="active"?$.payload:WG($.payload,q);Z.parse(N),Z.onExecuteAction=(X)=>{let V=BG(X);if(j?.onAction)z3(_),_.classList.add("adaptive-card-busy"),Promise.resolve(j.onAction(V)).catch((U)=>{console.error("[adaptive-card] Action failed:",U);let W=U instanceof Error?U.message:String(U||"Action failed.");YG(_,W||"Action failed.","error")}).finally(()=>{_.classList.remove("adaptive-card-busy")});else console.log("[adaptive-card] Action executed (not wired yet):",V)};let K=Z.render();if(!K)return console.warn(`[adaptive-card] Card ${$.card_id} rendered to null`),!1;_.classList.add("adaptive-card-container"),_.style.setProperty("--adaptive-card-button-text-color",Y.buttonTextColor);let G=HG($);if(G){_.classList.add("adaptive-card-finished");let X=document.createElement("div");X.className=`adaptive-card-status adaptive-card-status-${$.state}`;let V=document.createElement("span");if(V.className="adaptive-card-status-label",V.textContent=G.label,X.appendChild(V),G.detail){let U=document.createElement("span");U.className="adaptive-card-status-detail",U.textContent=G.detail,X.appendChild(U)}_.appendChild(X)}if(z3(_),_.appendChild(K),G)FG(K);return!0}catch(Q){return console.error(`[adaptive-card] Failed to render card ${$.card_id}:`,Q),!1}}function Y8(_){if(_==null)return"";if(typeof _==="string")return _.trim();if(typeof _==="number")return String(_);if(typeof _==="boolean")return _?"yes":"no";if(Array.isArray(_))return _.map(($)=>Y8($)).filter(Boolean).join(", ");if(typeof _==="object")return Object.entries(_).filter(([$])=>!$.startsWith("__")).map(([$,j])=>`${$}: ${Y8(j)}`).filter(($)=>!$.endsWith(": ")).join(", ");return String(_).trim()}function fQ(_){if(typeof _!=="object"||_==null||Array.isArray(_))return[];return Object.entries(_).filter(([$])=>!$.startsWith("__")).map(([$,j])=>({key:$,value:Y8(j)})).filter(($)=>$.value)}function JG(_){if(!_||typeof _!=="object")return!1;let $=_;return $.type==="adaptive_card_submission"&&typeof $.card_id==="string"&&typeof $.source_post_id==="number"&&typeof $.submitted_at==="string"}function O3(_){if(!Array.isArray(_))return[];return _.filter(JG)}function vQ(_){let $=String(_.title||_.card_id||"card").trim()||"card",j=_.data;if(j==null)return`Card submission: ${$}`;if(typeof j==="string"||typeof j==="number"||typeof j==="boolean"){let Q=Y8(j);return Q?`Card submission: ${$} — ${Q}`:`Card submission: ${$}`}if(typeof j==="object"){let Z=fQ(j).map(({key:Y,value:q})=>`${Y}: ${q}`);return Z.length>0?`Card submission: ${$} — ${Z.join(", ")}`:`Card submission: ${$}`}return`Card submission: ${$}`}function gQ(_){let $=String(_.title||_.card_id||"Card submission").trim()||"Card submission",j=fQ(_.data),Q=j.length>0?j.slice(0,2).map(({key:Y,value:q})=>`${Y}: ${q}`).join(", "):Y8(_.data)||null,Z=j.length;return{title:$,summary:Q,fields:j,fieldCount:Z,submittedAt:_.submitted_at}}function I5({children:_,className:$=""}){let j=I(null);return v(()=>{if(typeof document>"u")return;let Q=document.createElement("div");if($)Q.className=$;return document.body.appendChild(Q),j.current=Q,()=>{try{x4(null,Q)}finally{if(Q.remove(),j.current===Q)j.current=null}}},[$]),u5(()=>{let Q=j.current;if(!Q)return;return x4(_,Q),()=>{x4(null,Q)}},[_]),null}function OG(_){let $=_?.metadata?.size;return[{label:"Type",value:_?.content_type||"application/octet-stream"},{label:"Size",value:typeof $==="number"?w_($):null},{label:"Added",value:_?.created_at?s4(_.created_at):null}].filter((Q)=>Q.value)}function AG(_,$,j){let Q=encodeURIComponent($||`attachment-${_}`),Z=encodeURIComponent(String(_));if(j==="pdf")return`/pdf-viewer/?media=${Z}&name=${Q}#media=${Z}&name=${Q}`;if(j==="office"){let Y=S_(_);return`/office-viewer/?url=${encodeURIComponent(Y)}&name=${Q}`}if(j==="drawio")return`/drawio/edit.html?media=${Z}&name=${Q}&readonly=1#media=${Z}&name=${Q}&readonly=1`;return null}function bQ({mediaId:_,info:$,onClose:j}){let Q=$?.filename||`attachment-${_}`,Z=f0(()=>Z8($?.content_type,Q),[$?.content_type,Q]),Y=PQ(Z),q=f0(()=>CQ($?.content_type),[$?.content_type]),[N,K]=g(Z==="text"),[G,X]=g(""),[V,U]=g(null),W=I(null),J=f0(()=>OG($),[$]),D=f0(()=>AG(_,Q,Z),[_,Q,Z]),O=f0(()=>{if(!q||!G)return"";return O_(G)},[q,G]);return v(()=>{let F=(A)=>{if(A.key==="Escape")j()};return document.addEventListener("keydown",F),()=>document.removeEventListener("keydown",F)},[j]),v(()=>{if(!W.current||!O)return;W4(W.current);return},[O]),v(()=>{let F=!1;async function A(){if(Z!=="text"){K(!1),U(null);return}K(!0),U(null);try{let k=await n6(_);if(!F)X(k)}catch{if(!F)U("Failed to load text preview.")}finally{if(!F)K(!1)}}return A(),()=>{F=!0}},[_,Z]),B`
        <${I5} className="attachment-preview-portal-root">
            <div class="image-modal attachment-preview-modal" onClick=${j}>
                <div class="attachment-preview-shell" onClick=${(F)=>{F.stopPropagation()}}>
                    <div class="attachment-preview-header">
                        <div class="attachment-preview-heading">
                            <div class="attachment-preview-title">${Q}</div>
                            <div class="attachment-preview-subtitle">${Y}</div>
                        </div>
                        <div class="attachment-preview-header-actions">
                            ${D&&B`
                                <a
                                    href=${D}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    class="attachment-preview-download"
                                    onClick=${(F)=>F.stopPropagation()}
                                >
                                    Open in Tab
                                </a>
                            `}
                            <a
                                href=${S_(_)}
                                download=${Q}
                                class="attachment-preview-download"
                                onClick=${(F)=>F.stopPropagation()}
                            >
                                Download
                            </a>
                            <button class="attachment-preview-close" type="button" onClick=${j}>Close</button>
                        </div>
                    </div>
                    <div class="attachment-preview-body">
                        ${N&&B`<div class="attachment-preview-state">Loading preview…</div>`}
                        ${!N&&V&&B`<div class="attachment-preview-state">${V}</div>`}
                        ${!N&&!V&&Z==="image"&&B`
                            <img class="attachment-preview-image" src=${S_(_)} alt=${Q} />
                        `}
                        ${!N&&!V&&(Z==="pdf"||Z==="office"||Z==="drawio")&&D&&B`
                            <iframe class="attachment-preview-frame" src=${D} title=${Q}></iframe>
                        `}
                        ${!N&&!V&&Z==="drawio"&&B`
                            <div class="attachment-preview-readonly-note">Draw.io preview is read-only. Editing tools are disabled in this preview.</div>
                        `}
                        ${!N&&!V&&Z==="text"&&q&&B`
                            <div
                                ref=${W}
                                class="attachment-preview-markdown post-content"
                                dangerouslySetInnerHTML=${{__html:O}}
                            />
                        `}
                        ${!N&&!V&&Z==="text"&&!q&&B`
                            <pre class="attachment-preview-text">${G}</pre>
                        `}
                        ${!N&&!V&&Z==="unsupported"&&B`
                            <div class="attachment-preview-state">
                                Preview is not available for this file type yet. You can still download it directly.
                            </div>
                        `}
                    </div>
                    <div class="attachment-preview-meta">
                        ${J.map((F)=>B`
                            <div class="attachment-preview-meta-item" key=${F.label}>
                                <span class="attachment-preview-meta-label">${F.label}</span>
                                <span class="attachment-preview-meta-value">${F.value}</span>
                            </div>
                        `)}
                    </div>
                </div>
            </div>
        </${I5}>
    `}function mQ({src:_,onClose:$}){return v(()=>{let j=(Q)=>{if(Q.key==="Escape")$()};return document.addEventListener("keydown",j),()=>document.removeEventListener("keydown",j)},[$]),B`
        <${I5} className="image-modal-portal-root">
            <div class="image-modal" onClick=${$}>
                <img src=${_} alt="Full size" />
            </div>
        </${I5}>
    `}function DG({mediaId:_,onPreview:$}){let[j,Q]=g(null);if(v(()=>{B5(_).then(Q).catch(()=>{})},[_]),!j)return null;let Z=j.filename||"file",Y=j.metadata?.size,q=Y?w_(Y):"",K=Z8(j.content_type,j.filename)==="unsupported"?"Details":"Preview";return B`
        <div class="file-attachment" onClick=${(G)=>G.stopPropagation()}>
            <a href=${S_(_)} download=${Z} class="file-attachment-main">
                <svg class="file-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                    <polyline points="14 2 14 8 20 8"/>
                    <line x1="16" y1="13" x2="8" y2="13"/>
                    <line x1="16" y1="17" x2="8" y2="17"/>
                    <polyline points="10 9 9 9 8 9"/>
                </svg>
                <div class="file-info">
                    <span class="file-name">${Z}</span>
                    <span class="file-meta-row">
                        ${q&&B`<span class="file-size">${q}</span>`}
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
                onClick=${(G)=>{G.preventDefault(),G.stopPropagation(),$?.({mediaId:_,info:j})}}
            >
                ${K}
            </button>
        </div>
    `}function EG({attachment:_,onPreview:$}){let j=Number(_?.id),[Q,Z]=g(null);v(()=>{if(!Number.isFinite(j))return;B5(j).then(Z).catch(()=>{});return},[j]);let Y=Q?.filename||_.label||`attachment-${_.id}`,q=Number.isFinite(j)?S_(j):null,K=Z8(Q?.content_type,Q?.filename||_?.label)==="unsupported"?"Details":"Preview";return B`
        <span class="attachment-pill" title=${Y}>
            ${q?B`
                    <a href=${q} download=${Y} class="attachment-pill-main" onClick=${(G)=>G.stopPropagation()}>
                        <${l_}
                            prefix="post"
                            label=${_.label}
                            title=${Y}
                        />
                    </a>
                `:B`
                    <${l_}
                        prefix="post"
                        label=${_.label}
                        title=${Y}
                    />
                `}
            ${Number.isFinite(j)&&Q&&B`
                <button
                    class="attachment-pill-preview"
                    type="button"
                    title=${K}
                    onClick=${(G)=>{G.preventDefault(),G.stopPropagation(),$?.({mediaId:j,info:Q})}}
                >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8S1 12 1 12z"/>
                        <circle cx="12" cy="12" r="3"/>
                    </svg>
                </button>
            `}
        </span>
    `}function Y6({annotations:_}){if(!_)return null;let{audience:$,priority:j,lastModified:Q}=_,Z=Q?s4(Q):null;return B`
        <div class="content-annotations">
            ${$&&$.length>0&&B`
                <span class="content-annotation">Audience: ${$.join(", ")}</span>
            `}
            ${typeof j==="number"&&B`
                <span class="content-annotation">Priority: ${j}</span>
            `}
            ${Z&&B`
                <span class="content-annotation">Updated: ${Z}</span>
            `}
        </div>
    `}function kG({block:_}){let $=_.title||_.name||_.uri,j=_.description,Q=_.size?w_(_.size):"",Z=_.mime_type||"",Y=xG(Z),q=o4(_.uri);return B`
        <a
            href=${q||"#"}
            class="resource-link"
            target=${q?"_blank":void 0}
            rel=${q?"noopener noreferrer":void 0}
            onClick=${(N)=>N.stopPropagation()}>
            <div class="resource-link-main">
                <div class="resource-link-header">
                    <span class="resource-link-icon-inline">${Y}</span>
                    <div class="resource-link-title">${$}</div>
                </div>
                ${j&&B`<div class="resource-link-description">${j}</div>`}
                <div class="resource-link-meta">
                    ${Z&&B`<span>${Z}</span>`}
                    ${Q&&B`<span>${Q}</span>`}
                </div>
            </div>
            <div class="resource-link-icon">↗</div>
        </a>
    `}function MG({block:_}){let[$,j]=g(!1),Q=_.uri||"Embedded resource",Z=_.text||"",Y=Boolean(_.data),q=_.mime_type||"";return B`
        <div class="resource-embed">
            <button class="resource-embed-toggle" onClick=${(N)=>{N.preventDefault(),N.stopPropagation(),j(!$)}}>
                ${$?"▼":"▶"} ${Q}
            </button>
            ${$&&B`
                ${Z&&B`<pre class="resource-embed-content">${Z}</pre>`}
                ${Y&&B`
                    <div class="resource-embed-blob">
                        <span class="resource-embed-blob-label">Embedded blob</span>
                        ${q&&B`<span class="resource-embed-blob-meta">${q}</span>`}
                        <button class="resource-embed-blob-btn" onClick=${(N)=>{N.preventDefault(),N.stopPropagation();let K=new Blob([Uint8Array.from(atob(_.data),(V)=>V.charCodeAt(0))],{type:q||"application/octet-stream"}),G=URL.createObjectURL(K),X=document.createElement("a");X.href=G,X.download=Q.split("/").pop()||"resource",X.click(),URL.revokeObjectURL(G)}}>Download</button>
                    </div>
                `}
            `}
        </div>
    `}function IG({block:_,post:$,onOpenWidget:j}){if(!_)return null;let Q=Q3(_,$),Z=mj(_),Y=Q?.artifact?.kind||_?.artifact?.kind||_?.kind||null,q=Q?.title||_.title||_.name||"Generated widget",N=Q?.description||_.description||_.subtitle||"",K=_.open_label||"Open widget",G=(X)=>{if(X.preventDefault(),X.stopPropagation(),!Q)return;j?.(Q)};return B`
        <div class="generated-widget-launch" onClick=${(X)=>X.stopPropagation()}>
            <div class="generated-widget-launch-header">
                <div class="generated-widget-launch-eyebrow">Generated widget${Y?` • ${String(Y).toUpperCase()}`:""}</div>
                <div class="generated-widget-launch-title">${q}</div>
            </div>
            ${N&&B`<div class="generated-widget-launch-description">${N}</div>`}
            <div class="generated-widget-launch-actions">
                <button
                    class="generated-widget-launch-btn"
                    type="button"
                    disabled=${!Z}
                    onClick=${G}
                    title=${Z?"Open widget in a floating pane":"Unsupported widget artifact"}
                >
                    ${K}
                </button>
                <span class="generated-widget-launch-note">
                    ${Z?"Opens in a dismissible floating pane.":"This widget artifact is missing or unsupported."}
                </span>
            </div>
        </div>
    `}function xG(_){if(!_)return"\uD83D\uDCCE";if(_.startsWith("image/"))return"\uD83D\uDDBC️";if(_.startsWith("audio/"))return"\uD83C\uDFB5";if(_.startsWith("video/"))return"\uD83C\uDFAC";if(_.includes("pdf"))return"\uD83D\uDCC4";if(_.includes("zip")||_.includes("gzip"))return"\uD83D\uDDDC️";if(_.startsWith("text/"))return"\uD83D\uDCC4";return"\uD83D\uDCCE"}function TG({preview:_}){let $=o4(_.url),j=o4(_.image,{allowDataImage:!0}),Q=j?`background-image: url('${j}')`:"",Z=_.site_name;if(!Z&&$)try{Z=new URL($).hostname}catch{Z=$}return B`
        <a
            href=${$||"#"}
            class="link-preview ${j?"has-image":""}"
            target=${$?"_blank":void 0}
            rel=${$?"noopener noreferrer":void 0}
            onClick=${(Y)=>Y.stopPropagation()}
            style=${Q}>
            <div class="link-preview-overlay">
                <div class="link-preview-site">${Z||""}</div>
                <div class="link-preview-title">${_.title}</div>
                ${_.description&&B`
                    <div class="link-preview-description">${_.description}</div>
                `}
            </div>
        </a>
    `}function CG(_,$){return typeof _==="string"?_:""}var PG=1800,yG=`
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <rect x="9" y="9" width="10" height="10" rx="2"></rect>
        <path d="M7 15H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2v1"></path>
    </svg>`,SG=`
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <path d="M20 6L9 17l-5-5"></path>
    </svg>`,wG=`
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <circle cx="12" cy="12" r="9"></circle>
        <path d="M9 9l6 6M15 9l-6 6"></path>
    </svg>`;async function RG(_){let $=typeof _==="string"?_:"";if(!$)return!1;if(navigator.clipboard?.writeText)try{return await navigator.clipboard.writeText($),!0}catch{}try{let j=document.createElement("textarea");j.value=$,j.setAttribute("readonly",""),j.style.position="fixed",j.style.opacity="0",j.style.pointerEvents="none",document.body.appendChild(j),j.select(),j.setSelectionRange(0,j.value.length);let Q=document.execCommand("copy");return document.body.removeChild(j),Q}catch{return!1}}function uG(_){if(!_)return()=>{};let $=Array.from(_.querySelectorAll("pre")).filter((Y)=>Y.querySelector("code"));if($.length===0)return()=>{};let j=new Map,Q=[],Z=(Y,q)=>{let N=q||"idle";if(Y.dataset.copyState=N,N==="success")Y.innerHTML=SG,Y.setAttribute("aria-label","Copied"),Y.setAttribute("title","Copied"),Y.classList.add("is-success"),Y.classList.remove("is-error");else if(N==="error")Y.innerHTML=wG,Y.setAttribute("aria-label","Copy failed"),Y.setAttribute("title","Copy failed"),Y.classList.add("is-error"),Y.classList.remove("is-success");else Y.innerHTML=yG,Y.setAttribute("aria-label","Copy code"),Y.setAttribute("title","Copy code"),Y.classList.remove("is-success","is-error")};return $.forEach((Y)=>{let q=document.createElement("div");q.className="post-code-block",Y.parentNode?.insertBefore(q,Y),q.appendChild(Y);let N=document.createElement("button");N.type="button",N.className="post-code-copy-btn",Z(N,"idle"),q.appendChild(N);let K=async(G)=>{G.preventDefault(),G.stopPropagation();let V=Y.querySelector("code")?.textContent||"",U=await RG(V);Z(N,U?"success":"error");let W=j.get(N);if(W)clearTimeout(W);let J=setTimeout(()=>{Z(N,"idle"),j.delete(N)},PG);j.set(N,J)};N.addEventListener("click",K),Q.push(()=>{N.removeEventListener("click",K);let G=j.get(N);if(G)clearTimeout(G);if(q.parentNode)q.parentNode.insertBefore(Y,q),q.remove()})}),()=>{Q.forEach((Y)=>Y())}}function fG(_){if(!_)return{content:_,fileRefs:[]};let j=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),Q=-1;for(let G=0;G<j.length;G+=1)if(j[G].trim()==="Files:"&&j[G+1]&&/^\s*-\s+/.test(j[G+1])){Q=G;break}if(Q===-1)return{content:_,fileRefs:[]};let Z=[],Y=Q+1;for(;Y<j.length;Y+=1){let G=j[Y];if(/^\s*-\s+/.test(G))Z.push(G.replace(/^\s*-\s+/,"").trim());else if(!G.trim())break;else break}if(Z.length===0)return{content:_,fileRefs:[]};let q=j.slice(0,Q),N=j.slice(Y),K=[...q,...N].join(`
`);return K=K.replace(/\n{3,}/g,`

`).trim(),{content:K,fileRefs:Z}}function vG(_){if(!_)return{content:_,messageRefs:[]};let j=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),Q=-1;for(let G=0;G<j.length;G+=1)if(j[G].trim()==="Referenced messages:"&&j[G+1]&&/^\s*-\s+/.test(j[G+1])){Q=G;break}if(Q===-1)return{content:_,messageRefs:[]};let Z=[],Y=Q+1;for(;Y<j.length;Y+=1){let G=j[Y];if(/^\s*-\s+/.test(G)){let V=G.replace(/^\s*-\s+/,"").trim().match(/^message:(\S+)$/i);if(V)Z.push(V[1])}else if(!G.trim())break;else break}if(Z.length===0)return{content:_,messageRefs:[]};let q=j.slice(0,Q),N=j.slice(Y),K=[...q,...N].join(`
`);return K=K.replace(/\n{3,}/g,`

`).trim(),{content:K,messageRefs:Z}}function gG(_){if(!_)return{content:_,attachments:[]};let j=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),Q=-1;for(let G=0;G<j.length;G+=1){let X=j[G].trim();if((X==="Images:"||X==="Attachments:")&&j[G+1]&&/^\s*-\s+/.test(j[G+1])){Q=G;break}}if(Q===-1)return{content:_,attachments:[]};let Z=[],Y=Q+1;for(;Y<j.length;Y+=1){let G=j[Y];if(/^\s*-\s+/.test(G)){let X=G.replace(/^\s*-\s+/,"").trim(),V=X.match(/^attachment:([^\s)]+)\s*(?:\((.+)\))?$/i)||X.match(/^attachment:([^\s]+)\s+(.+)$/i);if(V){let U=V[1],W=(V[2]||"").trim()||U;Z.push({id:U,label:W,raw:X})}else Z.push({id:null,label:X,raw:X})}else if(!G.trim())break;else break}if(Z.length===0)return{content:_,attachments:[]};let q=j.slice(0,Q),N=j.slice(Y),K=[...q,...N].join(`
`);return K=K.replace(/\n{3,}/g,`

`).trim(),{content:K,attachments:Z}}function bG(_){return _.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function mG(_,$){if(!_||!$)return _;let j=String($).trim().split(/\s+/).filter(Boolean);if(j.length===0)return _;let Q=j.map(bG).sort((X,V)=>V.length-X.length),Z=new RegExp(`(${Q.join("|")})`,"gi"),Y=new RegExp(`^(${Q.join("|")})$`,"i"),q=new DOMParser().parseFromString(_,"text/html"),N=q.createTreeWalker(q.body,NodeFilter.SHOW_TEXT),K=[],G;while(G=N.nextNode())K.push(G);for(let X of K){let V=X.nodeValue;if(!V||!Z.test(V)){Z.lastIndex=0;continue}Z.lastIndex=0;let U=X.parentElement;if(U&&U.closest("code, pre, script, style"))continue;let W=V.split(Z).filter((D)=>D!=="");if(W.length===0)continue;let J=q.createDocumentFragment();for(let D of W)if(Y.test(D)){let O=q.createElement("mark");O.className="search-highlight-term",O.textContent=D,J.appendChild(O)}else J.appendChild(q.createTextNode(D));X.parentNode.replaceChild(J,X)}return q.body.innerHTML}function hQ({post:_,onClick:$,onHashtagClick:j,onMessageRef:Q,onScrollToMessage:Z,agentName:Y,agentAvatarUrl:q,userName:N,userAvatarUrl:K,userAvatarBackground:G,onDelete:X,isThreadReply:V,isThreadPrev:U,isThreadNext:W,isRemoving:J,highlightQuery:D,onFileRef:O,onOpenWidget:F}){let[A,k]=g(null),m=I(null),f=_.data,l=f.type==="agent_response",o=N||"You",P=l?Y||kQ:o,x=l?L3(Y,q,!0):L3(o,K),z=typeof G==="string"?G.trim().toLowerCase():"",C=!l&&x.image&&(z==="clear"||z==="transparent"),b=l&&Boolean(x.image),e=`background-color: ${C||b?"transparent":x.color}`,p=f.content_meta,a=Boolean(p?.truncated),t=Boolean(p?.preview),_0=a&&!t,K0=a?{originalLength:Number.isFinite(p?.original_length)?p.original_length:f.content?f.content.length:0,maxLength:Number.isFinite(p?.max_length)?p.max_length:0}:null,q0=f.content_blocks||[],V0=f.media_ids||[],H0=CG(f.content,f.link_previews),{content:F0,fileRefs:b0}=fG(H0),{content:x0,messageRefs:k0}=vG(F0),{content:m0,attachments:g0}=gG(x0);H0=m0;let l0=J3(q0),r0=O3(q0),M0=l0.length===1&&typeof l0[0]?.fallback_text==="string"?l0[0].fallback_text.trim():"",o0=r0.length===1?vQ(r0[0]).trim():"",J0=Boolean(M0)&&H0?.trim()===M0||Boolean(o0)&&H0?.trim()===o0,P0=Boolean(H0)&&!_0&&!J0,s0=typeof D==="string"?D.trim():"",e0=f0(()=>{if(!H0||J0)return"";let y=O_(H0,j);return s0?mG(y,s0):y},[H0,J0,s0]),u1=(y,s)=>{y.stopPropagation(),k(S_(s))},[N1,i0]=g(null),F1=(y)=>{i0(y)},Z1=(y)=>{y.stopPropagation(),X?.(_)},_1=(y,s)=>{let G0=new Set;if(!y||s.length===0)return{content:y,usedIds:G0};return{content:y.replace(/attachment:([^\s)"']+)/g,(p0,$1,X1,M1)=>{let f1=$1.replace(/^\/+/,""),j_=s.find((s1)=>s1.name&&s1.name.toLowerCase()===f1.toLowerCase()&&!G0.has(s1.id))||s.find((s1)=>!G0.has(s1.id));if(!j_)return p0;if(G0.add(j_.id),M1.slice(Math.max(0,X1-2),X1)==="](")return`/media/${j_.id}`;return j_.name||"attachment"}),usedIds:G0}},W0=[],v0=[],Q1=[],r=[],N0=[],h=[],i=[],O0=0;if(q0.length>0)q0.forEach((y)=>{if(y?.type==="text"&&y.annotations)i.push(y.annotations);if(y?.type==="generated_widget")h.push(y);else if(y?.type==="resource_link")r.push(y);else if(y?.type==="resource")N0.push(y);else if(y?.type==="file"){let s=V0[O0++];if(s)v0.push(s),Q1.push({id:s,name:y?.name||y?.filename||y?.title})}else if(y?.type==="image"||!y?.type){let s=V0[O0++];if(s){let G0=typeof y?.mime_type==="string"?y.mime_type:void 0;W0.push({id:s,annotations:y?.annotations,mimeType:G0}),Q1.push({id:s,name:y?.name||y?.filename||y?.title})}}});else if(V0.length>0){let y=g0.length>0;V0.forEach((s,G0)=>{let E0=g0[G0]||null;if(Q1.push({id:s,name:E0?.label||null}),y)v0.push(s);else W0.push({id:s,annotations:null})})}if(g0.length>0)g0.forEach((y)=>{if(!y?.id)return;let s=Q1.find((G0)=>String(G0.id)===String(y.id));if(s&&!s.name)s.name=y.label});let{content:I0,usedIds:C0}=_1(H0,Q1);H0=I0;let A0=W0.filter(({id:y})=>!C0.has(y)),S0=v0.filter((y)=>!C0.has(y)),h0=g0.length>0?g0.map((y,s)=>({id:y.id||`attachment-${s+1}`,label:y.label||`attachment-${s+1}`})):Q1.map((y,s)=>({id:y.id,label:y.name||`attachment-${s+1}`})),z0=f0(()=>J3(q0),[q0]),u0=f0(()=>O3(q0),[q0]),D0=f0(()=>{return z0.map((y)=>`${y.card_id}:${y.state}`).join("|")},[z0]);v(()=>{if(!m.current)return;return W4(m.current),uG(m.current)},[e0]);let j0=I(null);return v(()=>{if(!j0.current||z0.length===0)return;let y=j0.current;y.innerHTML="";for(let s of z0){let G0=document.createElement("div");y.appendChild(G0),uQ(G0,s,{onAction:async(E0)=>{if(E0.type==="Action.OpenUrl"){let p0=o4(E0.url||"");if(!p0)throw Error("Invalid URL");window.open(p0,"_blank","noopener,noreferrer");return}if(E0.type==="Action.Submit"){await m6({post_id:_.id,thread_id:f.thread_id||_.id,chat_jid:_.chat_jid||null,card_id:s.card_id,action:{type:E0.type,title:E0.title||"",data:E0.data}});return}console.warn("[post] unsupported adaptive card action:",E0.type,E0)}}).catch((E0)=>{console.error("[post] adaptive card render error:",E0),G0.textContent=s.fallback_text||"Card failed to render."})}},[D0,_.id]),B`
        <div id=${`post-${_.id}`} class="post ${l?"agent-post":""} ${V?"thread-reply":""} ${U?"thread-prev":""} ${W?"thread-next":""} ${J?"removing":""}" onClick=${$}>
            <div class="post-avatar ${l?"agent-avatar":""} ${x.image?"has-image":""}" style=${e}>
                ${x.image?B`<img src=${x.image} alt=${P} />`:x.letter}
            </div>
            <div class="post-body">
                <button
                    class="post-delete-btn"
                    type="button"
                    title="Delete message"
                    aria-label="Delete message"
                    onClick=${Z1}
                >
                    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <path d="M18 6L6 18M6 6l12 12" />
                    </svg>
                </button>
                <div class="post-meta">
                    <span class="post-author">${P}</span>
                    <a class="post-time" href=${`#msg-${_.id}`} onClick=${(y)=>{if(y.preventDefault(),y.stopPropagation(),Q)Q(_.id)}}>${u7(_.timestamp)}</a>
                </div>
                ${_0&&K0&&B`
                    <div class="post-content truncated">
                        <div class="truncated-title">Message too large to display.</div>
                        <div class="truncated-meta">
                            Original length: ${e5(K0.originalLength)} chars
                            ${K0.maxLength?B` • Display limit: ${e5(K0.maxLength)} chars`:""}
                        </div>
                    </div>
                `}
                ${t&&K0&&B`
                    <div class="post-content preview">
                        <div class="truncated-title">Preview truncated.</div>
                        <div class="truncated-meta">
                            Showing first ${e5(K0.maxLength)} of ${e5(K0.originalLength)} chars. Download full text below.
                        </div>
                    </div>
                `}
                ${(b0.length>0||k0.length>0||h0.length>0)&&B`
                    <div class="post-file-refs">
                        ${k0.map((y)=>{let s=(G0)=>{if(G0.preventDefault(),G0.stopPropagation(),Z)Z(y,_.chat_jid||null);else{let E0=document.getElementById("post-"+y);if(E0)E0.scrollIntoView({behavior:"smooth",block:"center"}),E0.classList.add("post-highlight"),setTimeout(()=>E0.classList.remove("post-highlight"),2000)}};return B`
                                <a href=${`#msg-${y}`} class="post-msg-pill-link" onClick=${s}>
                                    <${l_}
                                        prefix="post"
                                        label=${"msg:"+y}
                                        title=${"Message "+y}
                                        icon="message"
                                        onClick=${s}
                                    />
                                </a>
                            `})}
                        ${b0.map((y)=>{let s=y.split("/").pop()||y;return B`
                                <${l_}
                                    prefix="post"
                                    label=${s}
                                    title=${y}
                                    onClick=${()=>O?.(y)}
                                />
                            `})}
                        ${h0.map((y)=>B`
                            <${EG}
                                key=${y.id}
                                attachment=${y}
                                onPreview=${F1}
                            />
                        `)}
                    </div>
                `}
                ${P0&&B`
                    <div 
                        ref=${m}
                        class="post-content"
                        dangerouslySetInnerHTML=${{__html:e0}}
                        onClick=${(y)=>{if(y.target.classList.contains("hashtag")){y.preventDefault(),y.stopPropagation();let s=y.target.dataset.hashtag;if(s)j?.(s)}else if(y.target.tagName==="IMG")y.preventDefault(),y.stopPropagation(),k(y.target.src)}}
                    />
                `}
                ${z0.length>0&&B`
                    <div ref=${j0} class="post-adaptive-cards" />
                `}
                ${u0.length>0&&B`
                    <div class="post-adaptive-card-submissions">
                        ${u0.map((y,s)=>{let G0=gQ(y),E0=`${y.card_id}-${s}`;return B`
                                <div key=${E0} class="adaptive-card-submission-receipt">
                                    <div class="adaptive-card-submission-header">
                                        <span class="adaptive-card-submission-icon" aria-hidden="true">✓</span>
                                        <div class="adaptive-card-submission-title-wrap">
                                            <span class="adaptive-card-submission-title">Submitted</span>
                                            <span class="adaptive-card-submission-title-action">${G0.title}</span>
                                        </div>
                                    </div>
                                    ${G0.fields.length>0&&B`
                                        <div class="adaptive-card-submission-fields">
                                            ${G0.fields.map((p0)=>B`
                                                <span class="adaptive-card-submission-field" title=${`${p0.key}: ${p0.value}`}>
                                                    <span class="adaptive-card-submission-field-key">${p0.key}</span>
                                                    <span class="adaptive-card-submission-field-sep">:</span>
                                                    <span class="adaptive-card-submission-field-value">${p0.value}</span>
                                                </span>
                                            `)}
                                        </div>
                                    `}
                                    <div class="adaptive-card-submission-meta">
                                        Submitted ${s4(G0.submittedAt)}
                                    </div>
                                </div>
                            `})}
                    </div>
                `}
                ${h.length>0&&B`
                    <div class="generated-widget-launches">
                        ${h.map((y,s)=>B`
                            <${IG}
                                key=${y.widget_id||y.id||`${_.id}-widget-${s}`}
                                block=${y}
                                post=${_}
                                onOpenWidget=${F}
                            />
                        `)}
                    </div>
                `}
                ${i.length>0&&B`
                    ${i.map((y,s)=>B`
                        <${Y6} key=${s} annotations=${y} />
                    `)}
                `}
                ${A0.length>0&&B`
                    <div class="media-preview">
                        ${A0.map(({id:y,mimeType:s})=>{let E0=typeof s==="string"&&s.toLowerCase().startsWith("image/svg")?S_(y):l6(y);return B`
                                <img 
                                    key=${y} 
                                    src=${E0} 
                                    alt="Media" 
                                    loading="lazy"
                                    onClick=${(p0)=>u1(p0,y)}
                                />
                            `})}
                    </div>
                `}
                ${A0.length>0&&B`
                    ${A0.map(({annotations:y},s)=>B`
                        ${y&&B`<${Y6} key=${s} annotations=${y} />`}
                    `)}
                `}
                ${S0.length>0&&B`
                    <div class="file-attachments">
                        ${S0.map((y)=>B`
                            <${DG} key=${y} mediaId=${y} onPreview=${F1} />
                        `)}
                    </div>
                `}
                ${r.length>0&&B`
                    <div class="resource-links">
                        ${r.map((y,s)=>B`
                            <div key=${s}>
                                <${kG} block=${y} />
                                <${Y6} annotations=${y.annotations} />
                            </div>
                        `)}
                    </div>
                `}
                ${N0.length>0&&B`
                    <div class="resource-embeds">
                        ${N0.map((y,s)=>B`
                            <div key=${s}>
                                <${MG} block=${y} />
                                <${Y6} annotations=${y.annotations} />
                            </div>
                        `)}
                    </div>
                `}
                ${f.link_previews?.length>0&&B`
                    <div class="link-previews">
                        ${f.link_previews.map((y,s)=>B`
                            <${TG} key=${s} preview=${y} />
                        `)}
                    </div>
                `}
            </div>
        </div>
        ${A&&B`<${mQ} src=${A} onClose=${()=>k(null)} />`}
        ${N1&&B`
            <${bQ}
                mediaId=${N1.mediaId}
                info=${N1.info}
                onClose=${()=>i0(null)}
            />
        `}
    `}function pQ({posts:_,hasMore:$,onLoadMore:j,onPostClick:Q,onHashtagClick:Z,onMessageRef:Y,onScrollToMessage:q,onFileRef:N,onOpenWidget:K,emptyMessage:G,timelineRef:X,agents:V,user:U,onDeletePost:W,reverse:J=!0,removingPostIds:D,searchQuery:O}){let[F,A]=g(!1),k=I(null),m=typeof IntersectionObserver<"u",f=T(async()=>{if(!j||!$||F)return;A(!0);try{await j({preserveScroll:!0,preserveMode:"top"})}finally{A(!1)}},[$,F,j]),l=T((p)=>{let{scrollTop:a,scrollHeight:t,clientHeight:_0}=p.target,K0=J?t-_0-a:a,q0=Math.max(300,_0);if(K0<q0)f()},[J,f]);v(()=>{if(!m)return;let p=k.current,a=X?.current;if(!p||!a)return;let t=300,_0=new IntersectionObserver((K0)=>{for(let q0 of K0){if(!q0.isIntersecting)continue;f()}},{root:a,rootMargin:`${t}px 0px ${t}px 0px`,threshold:0});return _0.observe(p),()=>_0.disconnect()},[m,$,j,X,f]);let o=I(f);if(o.current=f,v(()=>{if(m)return;if(!X?.current)return;let{scrollTop:p,scrollHeight:a,clientHeight:t}=X.current,_0=J?a-t-p:p,K0=Math.max(300,t);if(_0<K0)o.current?.()},[m,_,$,J,X]),v(()=>{if(!X?.current)return;if(!$||F)return;let{scrollTop:p,scrollHeight:a,clientHeight:t}=X.current,_0=J?a-t-p:p,K0=Math.max(300,t);if(a<=t+1||_0<K0)o.current?.()},[_,$,F,J,X]),!_)return B`<div class="loading"><div class="spinner"></div></div>`;if(_.length===0)return B`
            <div class="timeline" ref=${X}>
                <div class="timeline-content">
                    <div style="padding: var(--spacing-xl); text-align: center; color: var(--text-secondary)">
                        ${G||"No messages yet. Start a conversation!"}
                    </div>
                </div>
            </div>
        `;let P=_.slice().sort((p,a)=>p.id-a.id),x=(p)=>{let a=p?.data?.thread_id;if(a===null||a===void 0||a==="")return null;let t=Number(a);return Number.isFinite(t)?t:null},z=new Map;for(let p=0;p<P.length;p+=1){let a=P[p],t=Number(a?.id),_0=x(a);if(_0!==null){let K0=z.get(_0)||{anchorIndex:-1,replyIndexes:[]};K0.replyIndexes.push(p),z.set(_0,K0)}else if(Number.isFinite(t)){let K0=z.get(t)||{anchorIndex:-1,replyIndexes:[]};K0.anchorIndex=p,z.set(t,K0)}}let C=new Map;for(let[p,a]of z.entries()){let t=new Set;if(a.anchorIndex>=0)t.add(a.anchorIndex);for(let _0 of a.replyIndexes)t.add(_0);C.set(p,Array.from(t).sort((_0,K0)=>_0-K0))}let b=P.map((p,a)=>{let t=x(p);if(t===null)return{hasThreadPrev:!1,hasThreadNext:!1};let _0=C.get(t);if(!_0||_0.length===0)return{hasThreadPrev:!1,hasThreadNext:!1};let K0=_0.indexOf(a);if(K0<0)return{hasThreadPrev:!1,hasThreadNext:!1};return{hasThreadPrev:K0>0,hasThreadNext:K0<_0.length-1}}),e=B`<div class="timeline-sentinel" ref=${k}></div>`;return B`
        <div class="timeline ${J?"reverse":"normal"}" ref=${X} onScroll=${l}>
            <div class="timeline-content">
                ${J?e:null}
                ${P.map((p,a)=>{let t=Boolean(p.data?.thread_id&&p.data.thread_id!==p.id),_0=D?.has?.(p.id),K0=b[a]||{};return B`
                    <${hQ}
                        key=${p.id}
                        post=${p}
                        isThreadReply=${t}
                        isThreadPrev=${K0.hasThreadPrev}
                        isThreadNext=${K0.hasThreadNext}
                        isRemoving=${_0}
                        highlightQuery=${O}
                        agentName=${MQ(p.data?.agent_id,V||{})}
                        agentAvatarUrl=${IQ(p.data?.agent_id,V||{})}
                        userName=${U?.name||U?.user_name}
                        userAvatarUrl=${U?.avatar_url||U?.avatarUrl||U?.avatar}
                        userAvatarBackground=${U?.avatar_background||U?.avatarBackground}
                        onClick=${()=>Q?.(p)}
                        onHashtagClick=${Z}
                        onMessageRef=${Y}
                        onScrollToMessage=${q}
                        onFileRef=${N}
                        onOpenWidget=${K}
                        onDelete=${W}
                    />
                `})}
                ${J?null:e}
            </div>
        </div>
    `}var q6="workspaceExplorerScale",hG=["compact","default","comfortable"],pG=new Set(hG),cG={compact:{indentPx:14},default:{indentPx:16},comfortable:{indentPx:18}};function cQ(_,$="default"){if(typeof _!=="string")return $;let j=_.trim().toLowerCase();return pG.has(j)?j:$}function A3(){if(typeof window>"u")return{width:0,isTouch:!1};let _=Number(window.innerWidth)||0,$=Boolean(window.matchMedia?.("(pointer: coarse)")?.matches),j=Boolean(window.matchMedia?.("(hover: none)")?.matches),Q=Number(globalThis.navigator?.maxTouchPoints||0)>0;return{width:_,isTouch:$||Q&&j}}function lG(_={}){let $=Math.max(0,Number(_.width)||0);if(Boolean(_.isTouch))return"comfortable";if($>0&&$<1180)return"comfortable";return"default"}function nG(_,$={}){if(Boolean($.isTouch)&&_==="compact")return"default";return _}function D3(_={}){let $=lG(_),j=_.stored?cQ(_.stored,$):$;return nG(j,_)}function lQ(_){return cG[cQ(_)]}function dG(_){if(!_||_.kind!=="text")return!1;let $=Number(_.size);return!Number.isFinite($)||$<=262144}function E3(_,$){let j=String(_||"").trim();if(!j||j.endsWith("/"))return!1;if(typeof $!=="function")return!1;let Q=$({path:j,mode:"edit"});if(!Q||typeof Q!=="object")return!1;return Q.id!=="editor"}function nQ(_,$,j={}){let Q=j.resolvePane;if(E3(_,Q))return!0;return dG($)}var iG=60000,oQ=(_)=>{if(!_||!_.name)return!1;if(_.path===".")return!1;return _.name.startsWith(".")};function rG(_){let $=String(_||"").trim();if(!$||$.endsWith("/"))return!1;return E3($,(j)=>d0.resolve(j))}function sQ(_,$,j,Q=0,Z=[]){if(!j&&oQ(_))return Z;if(!_)return Z;if(Z.push({node:_,depth:Q}),_.type==="dir"&&_.children&&$.has(_.path))for(let Y of _.children)sQ(Y,$,j,Q+1,Z);return Z}function dQ(_,$,j){if(!_)return"";let Q=[],Z=(Y)=>{if(!j&&oQ(Y))return;if(Q.push(Y.type==="dir"?`d:${Y.path}`:`f:${Y.path}`),Y.children&&$?.has(Y.path))for(let q of Y.children)Z(q)};return Z(_),Q.join("|")}function x3(_,$){if(!$)return null;if(!_)return $;if(_.path!==$.path||_.type!==$.type)return $;let j=Array.isArray(_.children)?_.children:null,Q=Array.isArray($.children)?$.children:null;if(!Q)return _;let Z=j?new Map(j.map((N)=>[N?.path,N])):new Map,Y=!j||j.length!==Q.length,q=Q.map((N)=>{let K=x3(Z.get(N.path),N);if(K!==Z.get(N.path))Y=!0;return K});return Y?{...$,children:q}:_}function M3(_,$,j){if(!_)return _;if(_.path===$)return x3(_,j);if(!Array.isArray(_.children))return _;let Q=!1,Z=_.children.map((Y)=>{let q=M3(Y,$,j);if(q!==Y)Q=!0;return q});return Q?{..._,children:Z}:_}var aQ=4,k3=14,oG=8,sG=16;function tQ(_){if(!_)return 0;if(_.type==="file"){let Q=Math.max(0,Number(_.size)||0);return _.__bytes=Q,Q}let $=Array.isArray(_.children)?_.children:[],j=0;for(let Q of $)j+=tQ(Q);return _.__bytes=j,j}function eQ(_,$=0){let j=Math.max(0,Number(_?.__bytes??_?.size??0)),Q={name:_?.name||_?.path||".",path:_?.path||".",size:j,children:[]};if(!_||_.type!=="dir"||$>=aQ)return Q;let Z=Array.isArray(_.children)?_.children:[],Y=[];for(let N of Z){let K=Math.max(0,Number(N?.__bytes??N?.size??0));if(K<=0)continue;if(N.type==="dir")Y.push({kind:"dir",node:N,size:K});else Y.push({kind:"file",name:N.name,path:N.path,size:K})}Y.sort((N,K)=>K.size-N.size);let q=Y;if(Y.length>k3){let N=Y.slice(0,k3-1),K=Y.slice(k3-1),G=K.reduce((X,V)=>X+V.size,0);N.push({kind:"other",name:`+${K.length} more`,path:`${Q.path}/[other]`,size:G}),q=N}return Q.children=q.map((N)=>{if(N.kind==="dir")return eQ(N.node,$+1);return{name:N.name,path:N.path,size:N.size,children:[]}}),Q}function iQ(){if(typeof window>"u"||typeof document>"u")return!1;let{documentElement:_,body:$}=document,j=_?.getAttribute?.("data-theme")?.toLowerCase?.()||"";if(j==="dark")return!0;if(j==="light")return!1;if(_?.classList?.contains("dark")||$?.classList?.contains("dark"))return!0;if(_?.classList?.contains("light")||$?.classList?.contains("light"))return!1;return Boolean(window.matchMedia?.("(prefers-color-scheme: dark)")?.matches)}function _Z(_,$,j){let Q=((_+Math.PI/2)*180/Math.PI+360)%360,Z=j?Math.max(30,70-$*10):Math.max(34,66-$*8),Y=j?Math.min(70,45+$*5):Math.min(60,42+$*4);return`hsl(${Q.toFixed(1)} ${Z}% ${Y}%)`}function N6(_,$,j,Q){return{x:_+j*Math.cos(Q),y:$+j*Math.sin(Q)}}function T3(_,$,j,Q,Z,Y){let q=Math.PI*2-0.0001,N=Y-Z>q?Z+q:Y,K=N6(_,$,Q,Z),G=N6(_,$,Q,N),X=N6(_,$,j,N),V=N6(_,$,j,Z),U=N-Z>Math.PI?1:0;return[`M ${K.x.toFixed(3)} ${K.y.toFixed(3)}`,`A ${Q} ${Q} 0 ${U} 1 ${G.x.toFixed(3)} ${G.y.toFixed(3)}`,`L ${X.x.toFixed(3)} ${X.y.toFixed(3)}`,`A ${j} ${j} 0 ${U} 0 ${V.x.toFixed(3)} ${V.y.toFixed(3)}`,"Z"].join(" ")}var $Z={1:[26,46],2:[48,68],3:[70,90],4:[92,112]};function jZ(_,$,j){let Q=[],Z=[],Y=Math.max(0,Number($)||0),q=(N,K,G,X)=>{let V=Array.isArray(N?.children)?N.children:[];if(!V.length)return;let U=Math.max(0,Number(N.size)||0);if(U<=0)return;let W=G-K,J=K;V.forEach((D,O)=>{let F=Math.max(0,Number(D.size)||0);if(F<=0)return;let A=F/U,k=J,m=O===V.length-1?G:J+W*A;if(J=m,m-k<0.003)return;let f=$Z[X];if(f){let l=_Z(k,X,j);if(Q.push({key:D.path,path:D.path,label:D.name,size:F,color:l,depth:X,startAngle:k,endAngle:m,innerRadius:f[0],outerRadius:f[1],d:T3(120,120,f[0],f[1],k,m)}),X===1)Z.push({key:D.path,name:D.name,size:F,pct:Y>0?F/Y*100:0,color:l})}if(X<aQ)q(D,k,m,X+1)})};return q(_,-Math.PI/2,Math.PI*3/2,1),{segments:Q,legend:Z}}function I3(_,$){if(!_||!$)return null;if(_.path===$)return _;let j=Array.isArray(_.children)?_.children:[];for(let Q of j){let Z=I3(Q,$);if(Z)return Z}return null}function QZ(_,$,j,Q){if(!j||j<=0)return{segments:[],legend:[]};let Z=$Z[1];if(!Z)return{segments:[],legend:[]};let Y=-Math.PI/2,q=Math.PI*3/2,N=_Z(Y,1,Q),G=`${$||"."}/[files]`;return{segments:[{key:G,path:G,label:_,size:j,color:N,depth:1,startAngle:Y,endAngle:q,innerRadius:Z[0],outerRadius:Z[1],d:T3(120,120,Z[0],Z[1],Y,q)}],legend:[{key:G,name:_,size:j,pct:100,color:N}]}}function rQ(_,$=!1,j=!1){if(!_)return null;let Q=tQ(_),Z=eQ(_,0),Y=Z.size||Q,{segments:q,legend:N}=jZ(Z,Y,j);if(!q.length&&Y>0){let K=QZ("[files]",Z.path,Y,j);q=K.segments,N=K.legend}return{root:Z,totalSize:Y,segments:q,legend:N,truncated:$,isDarkTheme:j}}function aG({payload:_}){if(!_)return null;let[$,j]=g(null),[Q,Z]=g(_?.root?.path||"."),[Y,q]=g(()=>[_?.root?.path||"."]),[N,K]=g(!1);v(()=>{let z=_?.root?.path||".";Z(z),q([z]),j(null)},[_?.root?.path,_?.totalSize]),v(()=>{if(!Q)return;K(!0);let z=setTimeout(()=>K(!1),180);return()=>clearTimeout(z)},[Q]);let G=f0(()=>{return I3(_.root,Q)||_.root},[_?.root,Q]),X=G?.size||_.totalSize||0,{segments:V,legend:U}=f0(()=>{let z=jZ(G,X,_.isDarkTheme);if(z.segments.length>0)return z;if(X<=0)return z;let C=G?.children?.length?"Total":"[files]";return QZ(C,G?.path||_?.root?.path||".",X,_.isDarkTheme)},[G,X,_.isDarkTheme,_?.root?.path]),[W,J]=g(V),D=I(new Map),O=I(0);v(()=>{let z=D.current,C=new Map(V.map((a)=>[a.key,a])),b=performance.now(),e=220,p=(a)=>{let t=Math.min(1,(a-b)/220),_0=t*(2-t),K0=V.map((q0)=>{let H0=z.get(q0.key)||{startAngle:q0.startAngle,endAngle:q0.startAngle,innerRadius:q0.innerRadius,outerRadius:q0.innerRadius},F0=(g0,l0)=>g0+(l0-g0)*_0,b0=F0(H0.startAngle,q0.startAngle),x0=F0(H0.endAngle,q0.endAngle),k0=F0(H0.innerRadius,q0.innerRadius),m0=F0(H0.outerRadius,q0.outerRadius);return{...q0,d:T3(120,120,k0,m0,b0,x0)}});if(J(K0),t<1)O.current=requestAnimationFrame(p)};if(O.current)cancelAnimationFrame(O.current);return O.current=requestAnimationFrame(p),D.current=C,()=>{if(O.current)cancelAnimationFrame(O.current)}},[V]);let F=W.length?W:V,A=X>0?w_(X):"0 B",k=G?.name||"",f=(k&&k!=="."?k:"Total")||"Total",l=A,o=Y.length>1,P=(z)=>{if(!z?.path)return;let C=I3(_.root,z.path);if(!C||!Array.isArray(C.children)||C.children.length===0)return;q((b)=>[...b,C.path]),Z(C.path),j(null)},x=()=>{if(!o)return;q((z)=>{let C=z.slice(0,-1);return Z(C[C.length-1]||_?.root?.path||"."),C}),j(null)};return B`
        <div class="workspace-folder-starburst">
            <svg viewBox="0 0 240 240" class=${`workspace-folder-starburst-svg${N?" is-zooming":""}`} role="img"
                aria-label=${`Folder sizes for ${G?.path||_?.root?.path||"."}`}
                data-segments=${F.length}
                data-base-size=${X}>
                ${F.map((z)=>B`
                    <path
                        key=${z.key}
                        d=${z.d}
                        fill=${z.color}
                        stroke="var(--bg-primary)"
                        stroke-width="1"
                        class=${`workspace-folder-starburst-segment${$?.key===z.key?" is-hovered":""}`}
                        onMouseEnter=${()=>j(z)}
                        onMouseLeave=${()=>j(null)}
                        onTouchStart=${()=>j(z)}
                        onTouchEnd=${()=>j(null)}
                        onClick=${()=>P(z)}
                    >
                        <title>${z.label} — ${w_(z.size)}</title>
                    </path>
                `)}
                <g
                    class=${`workspace-folder-starburst-center-hit${o?" is-drill":""}`}
                    onClick=${x}
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
                    <text x="120" y="114" text-anchor="middle" class="workspace-folder-starburst-total-label">${f}</text>
                    <text x="120" y="130" text-anchor="middle" class="workspace-folder-starburst-total-value">${l}</text>
                </g>
            </svg>
            ${U.length>0&&B`
                <div class="workspace-folder-starburst-legend">
                    ${U.slice(0,8).map((z)=>B`
                        <div key=${z.key} class="workspace-folder-starburst-legend-item">
                            <span class="workspace-folder-starburst-swatch" style=${`background:${z.color}`}></span>
                            <span class="workspace-folder-starburst-name" title=${z.name}>${z.name}</span>
                            <span class="workspace-folder-starburst-size">${w_(z.size)}</span>
                            <span class="workspace-folder-starburst-pct">${z.pct.toFixed(1)}%</span>
                        </div>
                    `)}
                </div>
            `}
            ${_.truncated&&B`
                <div class="workspace-folder-starburst-note">Preview is truncated by tree depth/entry limits.</div>
            `}
        </div>
    `}function tG({mediaId:_}){let[$,j]=g(null);if(v(()=>{if(!_)return;B5(_).then(j).catch(()=>{})},[_]),!$)return null;let Q=$.filename||"file",Z=$.metadata?.size?w_($.metadata.size):"";return B`
        <a href=${S_(_)} download=${Q} class="file-attachment"
            onClick=${(Y)=>Y.stopPropagation()}>
            <svg class="file-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                <polyline points="14 2 14 8 20 8"/>
                <line x1="16" y1="13" x2="8" y2="13"/>
                <line x1="16" y1="17" x2="8" y2="17"/>
                <polyline points="10 9 9 9 8 9"/>
            </svg>
            <div class="file-info">
                <span class="file-name">${Q}</span>
                ${Z&&B`<span class="file-size">${Z}</span>`}
            </div>
            <svg class="download-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                <polyline points="7 10 12 15 17 10"/>
                <line x1="12" y1="15" x2="12" y2="3"/>
            </svg>
        </a>
    `}function ZZ({onFileSelect:_,visible:$=!0,active:j=void 0,onOpenEditor:Q,onOpenTerminalTab:Z,onOpenVncTab:Y,onToggleTerminal:q,terminalVisible:N=!1}){let[K,G]=g(null),[X,V]=g(new Set(["."])),[U,W]=g(null),[J,D]=g(null),[O,F]=g(""),[A,k]=g(null),[m,f]=g(null),[l,o]=g(!0),[P,x]=g(!1),[z,C]=g(null),[b,e]=g(()=>O5("workspaceShowHidden",!1)),[p,a]=g(!1),[t,_0]=g(null),[K0,q0]=g(null),[V0,H0]=g(null),[F0,b0]=g(!1),[x0,k0]=g(null),[m0,g0]=g(()=>iQ()),[l0,r0]=g(()=>D3({stored:J_(q6),...A3()})),[M0,o0]=g(!1),J0=I(X),P0=I(""),s0=I(null),e0=I(0),u1=I(new Set),N1=I(null),i0=I(new Map),F1=I(_),Z1=I(Q),_1=I(null),W0=I(null),v0=I(null),Q1=I(null),r=I(null),N0=I(null),h=I("."),i=I(null),O0=I({path:null,dragging:!1,startX:0,startY:0}),I0=I({path:null,dragging:!1,startX:0,startY:0}),C0=I({path:null,timer:0}),A0=I(!1),S0=I(0),h0=I(new Map),z0=I(null),u0=I(null),D0=I(null),j0=I(null),y=I(null),s=I(null),G0=I(b),E0=I($),p0=I(j??$),$1=I(0),X1=I(V0),M1=I(p),f1=I(t),R_=I(null),j_=I({x:0,y:0}),b1=I(0),s1=I(null),l1=I(U),j1=I(J),a1=I(null),e_=I(A);F1.current=_,Z1.current=Q,v(()=>{J0.current=X},[X]),v(()=>{G0.current=b},[b]),v(()=>{E0.current=$},[$]),v(()=>{p0.current=j??$},[j,$]),v(()=>{X1.current=V0},[V0]),v(()=>{if(typeof window>"u")return;let H=()=>{r0(D3({stored:J_(q6),...A3()}))};H();let M=()=>H(),R=()=>H(),S=($0)=>{if(!$0||$0.key===null||$0.key===q6)H()};window.addEventListener("resize",M),window.addEventListener("focus",R),window.addEventListener("storage",S);let d=window.matchMedia?.("(pointer: coarse)"),Z0=window.matchMedia?.("(hover: none)"),U0=($0,w0)=>{if(!$0)return;if($0.addEventListener)$0.addEventListener("change",w0);else if($0.addListener)$0.addListener(w0)},B0=($0,w0)=>{if(!$0)return;if($0.removeEventListener)$0.removeEventListener("change",w0);else if($0.removeListener)$0.removeListener(w0)};return U0(d,M),U0(Z0,M),()=>{window.removeEventListener("resize",M),window.removeEventListener("focus",R),window.removeEventListener("storage",S),B0(d,M),B0(Z0,M)}},[]),v(()=>{let H=(M)=>{let R=M?.detail?.path;if(!R)return;let S=R.split("/"),d=[];for(let Z0=1;Z0<S.length;Z0++)d.push(S.slice(0,Z0).join("/"));if(d.length)V((Z0)=>{let U0=new Set(Z0);U0.add(".");for(let B0 of d)U0.add(B0);return U0});W(R),requestAnimationFrame(()=>{let Z0=document.querySelector(`[data-path="${CSS.escape(R)}"]`);if(Z0)Z0.scrollIntoView({block:"nearest",behavior:"smooth"})})};return window.addEventListener("workspace-reveal-path",H),()=>window.removeEventListener("workspace-reveal-path",H)},[]),v(()=>{M1.current=p},[p]),v(()=>{f1.current=t},[t]),v(()=>{l1.current=U},[U]),v(()=>{j1.current=J},[J]),v(()=>{e_.current=A},[A]),v(()=>{if(typeof window>"u"||typeof document>"u")return;let H=()=>g0(iQ());H();let M=window.matchMedia?.("(prefers-color-scheme: dark)"),R=()=>H();if(M?.addEventListener)M.addEventListener("change",R);else if(M?.addListener)M.addListener(R);let S=typeof MutationObserver<"u"?new MutationObserver(()=>H()):null;if(S?.observe(document.documentElement,{attributes:!0,attributeFilter:["class","data-theme"]}),document.body)S?.observe(document.body,{attributes:!0,attributeFilter:["class","data-theme"]});return()=>{if(M?.removeEventListener)M.removeEventListener("change",R);else if(M?.removeListener)M.removeListener(R);S?.disconnect()}},[]),v(()=>{if(!J)return;let H=r.current;if(!H)return;let M=requestAnimationFrame(()=>{try{H.focus(),H.select()}catch{}});return()=>cancelAnimationFrame(M)},[J]),v(()=>{if(!M0)return;let H=(R)=>{let S=R?.target;if(!(S instanceof Element))return;if(y.current?.contains(S))return;if(s.current?.contains(S))return;o0(!1)},M=(R)=>{if(R?.key==="Escape")o0(!1),s.current?.focus?.()};return document.addEventListener("mousedown",H),document.addEventListener("touchstart",H,{passive:!0}),document.addEventListener("keydown",M),()=>{document.removeEventListener("mousedown",H),document.removeEventListener("touchstart",H),document.removeEventListener("keydown",M)}},[M0]);let Q_=async(H,M={})=>{let R=Boolean(M?.autoOpen),S=String(H||"").trim();x(!0),k(null),f(null);try{let d=await b5(S,20000);if(R&&S&&nQ(S,d,{resolvePane:(Z0)=>d0.resolve(Z0)}))return Z1.current?.(S,d),d;return k(d),d}catch(d){let Z0={error:d.message||"Failed to load preview"};return k(Z0),Z0}finally{x(!1)}};_1.current=Q_;let _4=async()=>{if(!E0.current)return;try{let H=await g5("",1,G0.current),M=dQ(H.root,J0.current,G0.current);if(M===P0.current){o(!1);return}if(P0.current=M,s0.current=H.root,!e0.current)e0.current=requestAnimationFrame(()=>{e0.current=0,G((R)=>x3(R,s0.current)),o(!1)})}catch(H){C(H.message||"Failed to load workspace"),o(!1)}},n_=async(H)=>{if(!H)return;if(u1.current.has(H))return;u1.current.add(H);try{let M=await g5(H,1,G0.current);G((R)=>M3(R,H,M.root))}catch(M){C(M.message||"Failed to load workspace")}finally{u1.current.delete(H)}};W0.current=n_;let I1=T(()=>{let H=U;if(!H)return".";let M=i0.current?.get(H);if(M&&M.type==="dir")return M.path;if(H==="."||!H.includes("/"))return".";let R=H.split("/");return R.pop(),R.join("/")||"."},[U]),t1=T((H)=>{let M=H?.closest?.(".workspace-row");if(!M)return null;let R=M.dataset.path,S=M.dataset.type;if(!R)return null;if(S==="dir")return R;if(R.includes("/")){let d=R.split("/");return d.pop(),d.join("/")||"."}return"."},[]),x1=T((H)=>{return t1(H?.target||null)},[t1]),V1=T((H)=>{X1.current=H,H0(H)},[]),z1=T(()=>{let H=C0.current;if(H?.timer)clearTimeout(H.timer);C0.current={path:null,timer:0}},[]),W_=T((H)=>{if(!H||H==="."){z1();return}let M=i0.current?.get(H);if(!M||M.type!=="dir"){z1();return}if(J0.current?.has(H)){z1();return}if(C0.current?.path===H)return;z1();let R=setTimeout(()=>{C0.current={path:null,timer:0},W0.current?.(H),V((S)=>{let d=new Set(S);return d.add(H),d})},600);C0.current={path:H,timer:R}},[z1]),F_=T((H,M)=>{if(j_.current={x:H,y:M},b1.current)return;b1.current=requestAnimationFrame(()=>{b1.current=0;let R=R_.current;if(!R)return;let S=j_.current;R.style.transform=`translate(${S.x+12}px, ${S.y+12}px)`})},[]),C1=T((H)=>{if(!H)return;let R=(i0.current?.get(H)?.name||H.split("/").pop()||H).trim();if(!R)return;q0({path:H,label:R})},[]),e1=T(()=>{if(q0(null),b1.current)cancelAnimationFrame(b1.current),b1.current=0;if(R_.current)R_.current.style.transform="translate(-9999px, -9999px)"},[]),K1=T((H)=>{if(!H)return".";let M=i0.current?.get(H);if(M&&M.type==="dir")return M.path;if(H==="."||!H.includes("/"))return".";let R=H.split("/");return R.pop(),R.join("/")||"."},[]),P1=T(()=>{D(null),F("")},[]),Z_=T((H)=>{if(!H)return;let R=(i0.current?.get(H)?.name||H.split("/").pop()||H).trim();if(!R||H===".")return;D(H),F(R)},[]),m1=T(async()=>{let H=j1.current;if(!H)return;let M=(O||"").trim();if(!M){P1();return}let R=i0.current?.get(H),S=(R?.name||H.split("/").pop()||H).trim();if(M===S){P1();return}try{let Z0=(await r6(H,M))?.path||H,U0=H.includes("/")?H.split("/").slice(0,-1).join("/")||".":".";if(P1(),C(null),window.dispatchEvent(new CustomEvent("workspace-file-renamed",{detail:{oldPath:H,newPath:Z0,type:R?.type||"file"}})),R?.type==="dir")V((B0)=>{let $0=new Set;for(let w0 of B0)if(w0===H)$0.add(Z0);else if(w0.startsWith(`${H}/`))$0.add(`${Z0}${w0.slice(H.length)}`);else $0.add(w0);return $0});if(W(Z0),R?.type==="dir")k(null),x(!1),f(null);else _1.current?.(Z0);W0.current?.(U0)}catch(d){C(d?.message||"Failed to rename file")}},[P1,O]),$4=T(async(H)=>{let S=H||".";for(let d=0;d<50;d+=1){let U0=`untitled${d===0?"":`-${d}`}.md`;try{let $0=(await i6(S,U0,""))?.path||(S==="."?U0:`${S}/${U0}`);if(S&&S!==".")V((w0)=>new Set([...w0,S]));W($0),C(null),W0.current?.(S),_1.current?.($0);return}catch(B0){if(B0?.status===409||B0?.code==="file_exists")continue;C(B0?.message||"Failed to create file");return}}C("Failed to create file (untitled name already in use).")},[]),D_=T((H)=>{if(H?.stopPropagation?.(),F0)return;let M=K1(l1.current);$4(M)},[F0,K1,$4]);v(()=>{if(typeof window>"u")return;let H=(M)=>{let R=M?.detail?.updates||[];if(!Array.isArray(R)||R.length===0)return;G((B0)=>{let $0=B0;for(let w0 of R){if(!w0?.root)continue;if(!$0||w0.path==="."||!w0.path)$0=w0.root;else $0=M3($0,w0.path,w0.root)}if($0)P0.current=dQ($0,J0.current,G0.current);return o(!1),$0});let S=l1.current;if(Boolean(S)&&R.some((B0)=>{let $0=B0?.path||"";if(!$0||$0===".")return!0;return S===$0||S.startsWith(`${$0}/`)||$0.startsWith(`${S}/`)}))h0.current.clear();if(!S||!e_.current)return;let Z0=i0.current?.get(S);if(Z0&&Z0.type==="dir")return;if(R.some((B0)=>{let $0=B0?.path||"";if(!$0||$0===".")return!0;return S===$0||S.startsWith(`${$0}/`)}))_1.current?.(S)};return window.addEventListener("workspace-update",H),()=>window.removeEventListener("workspace-update",H)},[]),N1.current=_4;let j4=I(()=>{if(typeof window>"u")return;let H=window.matchMedia("(min-width: 1024px) and (orientation: landscape)"),M=p0.current??E0.current,R=document.visibilityState!=="hidden"&&(M||H.matches&&E0.current);m5(R,G0.current).catch(()=>{})}).current,E_=I(0),F4=I(()=>{if(E_.current)clearTimeout(E_.current);E_.current=setTimeout(()=>{E_.current=0,j4()},250)}).current;v(()=>{if(E0.current)N1.current?.();F4()},[$,j]),v(()=>{N1.current(),j4();let H=setInterval(()=>N1.current(),iG),M=o5("previewHeight",null),R=Number.isFinite(M)?Math.min(Math.max(M,80),600):280;if(S0.current=R,v0.current)v0.current.style.setProperty("--preview-height",`${R}px`);let S=window.matchMedia("(min-width: 1024px) and (orientation: landscape)"),d=()=>F4();if(S.addEventListener)S.addEventListener("change",d);else if(S.addListener)S.addListener(d);return document.addEventListener("visibilitychange",d),()=>{if(clearInterval(H),e0.current)cancelAnimationFrame(e0.current),e0.current=0;if(S.removeEventListener)S.removeEventListener("change",d);else if(S.removeListener)S.removeListener(d);if(document.removeEventListener("visibilitychange",d),E_.current)clearTimeout(E_.current),E_.current=0;if(i.current)clearTimeout(i.current),i.current=null;m5(!1,G0.current).catch(()=>{})}},[]);let k_=f0(()=>sQ(K,X,b),[K,X,b]),u_=f0(()=>new Map(k_.map((H)=>[H.node.path,H.node])),[k_]),u4=f0(()=>lQ(l0),[l0]);i0.current=u_;let Y1=(U?i0.current.get(U):null)?.type==="dir";v(()=>{if(!U||!Y1){k0(null),z0.current=null,u0.current=null;return}let H=U,M=`${b?"hidden":"visible"}:${U}`,R=h0.current,S=R.get(M);if(S?.root){R.delete(M),R.set(M,S);let U0=rQ(S.root,Boolean(S.truncated),m0);if(U0)z0.current=U0,u0.current=U,k0({loading:!1,error:null,payload:U0});return}let d=z0.current,Z0=u0.current;k0({loading:!0,error:null,payload:Z0===U?d:null}),g5(U,oG,b).then((U0)=>{if(l1.current!==H)return;let B0={root:U0?.root,truncated:Boolean(U0?.truncated)};R.delete(M),R.set(M,B0);while(R.size>sG){let w0=R.keys().next().value;if(!w0)break;R.delete(w0)}let $0=rQ(B0.root,B0.truncated,m0);z0.current=$0,u0.current=U,k0({loading:!1,error:null,payload:$0})}).catch((U0)=>{if(l1.current!==H)return;k0({loading:!1,error:U0?.message||"Failed to load folder size chart",payload:Z0===U?d:null})})},[U,Y1,b,m0]);let T1=Boolean(A&&A.kind==="text"&&!Y1&&(!A.size||A.size<=262144)),z4=T1?"Open in editor":A?.size>262144?"File too large to edit":"File is not editable",Y_=Boolean(U&&U!=="."),M_=Boolean(U&&!Y1),n1=Boolean(U&&!Y1),D1=U&&Y1?M8(U,b):null,v1=T(()=>o0(!1),[]),U1=T(async(H)=>{v1();try{await H?.()}catch(M){console.warn("[workspace-explorer] Header menu action failed:",M)}},[v1]);v(()=>{let H=D0.current;if(j0.current)j0.current.dispose(),j0.current=null;if(!H)return;if(H.innerHTML="",!U||Y1||!A||A.error)return;let M={path:U,content:typeof A.text==="string"?A.text:void 0,mtime:A.mtime,size:A.size,preview:A,mode:"view"},R=d0.resolve(M)||d0.get("workspace-preview-default");if(!R)return;let S=R.mount(H,M);return j0.current=S,()=>{if(j0.current===S)S.dispose(),j0.current=null;H.innerHTML=""}},[U,Y1,A]);let q_=(H)=>{let M=H?.target;if(M instanceof Element)return M;return M?.parentElement||null},N_=(H)=>{return Boolean(H?.closest?.(".workspace-node-icon, .workspace-label-text"))},K_=I((H)=>{let M=q_(H),R=M?.closest?.("[data-path]");if(!R)return;let S=R.dataset.path;if(!S||S===".")return;let d=Boolean(M?.closest?.("button"))||Boolean(M?.closest?.("a"))||Boolean(M?.closest?.("input")),Z0=Boolean(M?.closest?.(".workspace-caret"));if(d||Z0)return;if(j1.current===S)return;Z_(S)}).current,d_=I((H)=>{if(A0.current){A0.current=!1;return}let M=q_(H),R=M?.closest?.("[data-path]");if(Q1.current?.focus?.(),!R)return;let S=R.dataset.path,d=R.dataset.type,Z0=Boolean(M?.closest?.(".workspace-caret")),U0=Boolean(M?.closest?.("button"))||Boolean(M?.closest?.("a"))||Boolean(M?.closest?.("input")),B0=l1.current===S,$0=j1.current;if($0){if($0===S)return;P1()}let w0=d==="file"&&a1.current===S&&!Z0&&!U0;if(d==="dir"){if(a1.current=null,W(S),k(null),f(null),x(!1),!J0.current.has(S))W0.current?.(S);if(B0&&!Z0)return;V((__)=>{let p1=new Set(__);if(p1.has(S))p1.delete(S);else p1.add(S);return p1})}else{a1.current=null,W(S);let S1=i0.current.get(S);if(S1)F1.current?.(S1.path,S1);if(!U0&&!Z0&&rG(S))Z1.current?.(S,e_.current);else{let p1=!U0&&!Z0;_1.current?.(S,{autoOpen:p1})}}}).current,h1=I(()=>{P0.current="",N1.current(),Array.from(J0.current||[]).filter((M)=>M&&M!==".").forEach((M)=>W0.current?.(M))}).current,g1=I(()=>{a1.current=null,W(null),k(null),f(null),x(!1)}).current,G_=I(()=>{e((H)=>{let M=!H;if(typeof window<"u")q1("workspaceShowHidden",String(M));return G0.current=M,m5(!0,M).catch(()=>{}),P0.current="",N1.current?.(),Array.from(J0.current||[]).filter((S)=>S&&S!==".").forEach((S)=>W0.current?.(S)),M})}).current,f_=I((H)=>{if(q_(H)?.closest?.("[data-path]"))return;g1()}).current,H1=T(async(H)=>{if(!H)return;let M=H.split("/").pop()||H;if(!window.confirm(`Delete "${M}"? This cannot be undone.`))return;try{await s6(H);let S=H.includes("/")?H.split("/").slice(0,-1).join("/")||".":".";if(l1.current===H)g1();W0.current?.(S),C(null)}catch(S){k((d)=>({...d||{},error:S.message||"Failed to delete file"}))}},[g1]),I_=T((H)=>{let M=Q1.current;if(!M||!H||typeof CSS>"u"||typeof CSS.escape!=="function")return;M.querySelector(`[data-path="${CSS.escape(H)}"]`)?.scrollIntoView?.({block:"nearest"})},[]),B1=T((H)=>{let M=k_;if(!M||M.length===0)return;let R=U?M.findIndex((S)=>S.node.path===U):-1;if(H.key==="ArrowDown"){H.preventDefault();let S=Math.min(R+1,M.length-1),d=M[S];if(!d)return;if(W(d.node.path),d.node.type!=="dir")F1.current?.(d.node.path,d.node),_1.current?.(d.node.path);else k(null),x(!1),f(null);I_(d.node.path);return}if(H.key==="ArrowUp"){H.preventDefault();let S=R<=0?0:R-1,d=M[S];if(!d)return;if(W(d.node.path),d.node.type!=="dir")F1.current?.(d.node.path,d.node),_1.current?.(d.node.path);else k(null),x(!1),f(null);I_(d.node.path);return}if(H.key==="ArrowRight"&&R>=0){let S=M[R];if(S?.node?.type==="dir"&&!X.has(S.node.path))H.preventDefault(),W0.current?.(S.node.path),V((d)=>new Set([...d,S.node.path]));return}if(H.key==="ArrowLeft"&&R>=0){let S=M[R];if(S?.node?.type==="dir"&&X.has(S.node.path))H.preventDefault(),V((d)=>{let Z0=new Set(d);return Z0.delete(S.node.path),Z0});return}if(H.key==="Enter"&&R>=0){H.preventDefault();let S=M[R];if(!S)return;let d=S.node.path;if(S.node.type==="dir"){if(!J0.current.has(d))W0.current?.(d);V((U0)=>{let B0=new Set(U0);if(B0.has(d))B0.delete(d);else B0.add(d);return B0}),k(null),f(null),x(!1)}else F1.current?.(d,S.node),_1.current?.(d);return}if((H.key==="Delete"||H.key==="Backspace")&&R>=0){let S=M[R];if(!S||S.node.type==="dir")return;H.preventDefault(),H1(S.node.path);return}if(H.key==="Escape")H.preventDefault(),g1()},[g1,H1,X,k_,I_,U]),v_=T((H)=>{let M=q_(H),R=M?.closest?.(".workspace-row");if(!R)return;let S=R.dataset.type,d=R.dataset.path;if(!d||d===".")return;if(j1.current===d)return;let Z0=H?.touches?.[0];if(!Z0)return;if(O0.current={path:N_(M)?d:null,dragging:!1,startX:Z0.clientX,startY:Z0.clientY},S!=="file")return;if(i.current)clearTimeout(i.current);i.current=setTimeout(()=>{if(i.current=null,O0.current?.dragging)return;H1(d)},600)},[H1]),x_=T(()=>{if(i.current)clearTimeout(i.current),i.current=null;let H=O0.current;if(H?.dragging&&H.path){let M=X1.current||I1(),R=s1.current;if(typeof R==="function")R(H.path,M)}O0.current={path:null,dragging:!1,startX:0,startY:0},$1.current=0,a(!1),_0(null),V1(null),z1(),e1()},[I1,e1,V1,z1]),v4=T((H)=>{let M=O0.current,R=H?.touches?.[0];if(!R||!M?.path){if(i.current)clearTimeout(i.current),i.current=null;return}let S=Math.abs(R.clientX-M.startX),d=Math.abs(R.clientY-M.startY),Z0=S>8||d>8;if(Z0&&i.current)clearTimeout(i.current),i.current=null;if(!M.dragging&&Z0)M.dragging=!0,a(!0),_0("move"),C1(M.path);if(M.dragging){H.preventDefault(),F_(R.clientX,R.clientY);let U0=document.elementFromPoint(R.clientX,R.clientY),B0=t1(U0)||I1();if(X1.current!==B0)V1(B0);W_(B0)}},[t1,I1,C1,F_,V1,W_]),g4=I((H)=>{H.preventDefault();let M=v0.current;if(!M)return;let R=H.clientY,S=S0.current||280,d=H.currentTarget;d.classList.add("dragging"),document.body.style.cursor="row-resize",document.body.style.userSelect="none";let Z0=R,U0=($0)=>{Z0=$0.clientY;let w0=M.clientHeight-80,S1=Math.min(Math.max(S-($0.clientY-R),80),w0);M.style.setProperty("--preview-height",`${S1}px`),S0.current=S1},B0=()=>{let $0=M.clientHeight-80,w0=Math.min(Math.max(S-(Z0-R),80),$0);S0.current=w0,d.classList.remove("dragging"),document.body.style.cursor="",document.body.style.userSelect="",q1("previewHeight",String(Math.round(w0))),document.removeEventListener("mousemove",U0),document.removeEventListener("mouseup",B0)};document.addEventListener("mousemove",U0),document.addEventListener("mouseup",B0)}).current,g_=I((H)=>{H.preventDefault();let M=v0.current;if(!M)return;let R=H.touches[0];if(!R)return;let S=R.clientY,d=S0.current||280,Z0=H.currentTarget;Z0.classList.add("dragging"),document.body.style.userSelect="none";let U0=($0)=>{let w0=$0.touches[0];if(!w0)return;$0.preventDefault();let S1=M.clientHeight-80,__=Math.min(Math.max(d-(w0.clientY-S),80),S1);M.style.setProperty("--preview-height",`${__}px`),S0.current=__},B0=()=>{Z0.classList.remove("dragging"),document.body.style.userSelect="",q1("previewHeight",String(Math.round(S0.current||d))),document.removeEventListener("touchmove",U0),document.removeEventListener("touchend",B0),document.removeEventListener("touchcancel",B0)};document.addEventListener("touchmove",U0,{passive:!1}),document.addEventListener("touchend",B0),document.addEventListener("touchcancel",B0)}).current,b_=async()=>{if(!U)return;try{let H=await d6(U);if(H.media_id)f(H.media_id)}catch(H){k((M)=>({...M||{},error:H.message||"Failed to attach"}))}},b4=async()=>{if(!U||Y1)return;await H1(U)},Q4=(H)=>{return Array.from(H?.dataTransfer?.types||[]).includes("Files")},e4=T((H)=>{if(!Q4(H))return;if(H.preventDefault(),$1.current+=1,!M1.current)a(!0);_0("upload");let M=x1(H)||I1();V1(M),W_(M)},[I1,x1,V1,W_]),m_=T((H)=>{if(!Q4(H))return;if(H.preventDefault(),H.dataTransfer)H.dataTransfer.dropEffect="copy";if(!M1.current)a(!0);if(f1.current!=="upload")_0("upload");let M=x1(H)||I1();if(X1.current!==M)V1(M);W_(M)},[I1,x1,V1,W_]),h_=T((H)=>{if(!Q4(H))return;if(H.preventDefault(),$1.current=Math.max(0,$1.current-1),$1.current===0)a(!1),_0(null),V1(null),z1()},[V1,z1]),d1=T(async(H,M=".")=>{let R=Array.from(H||[]);if(R.length===0)return;let S=M&&M!==""?M:".",d=S!=="."?S:"workspace root";b0(!0);try{let Z0=null;for(let U0 of R)try{Z0=await E8(U0,S)}catch(B0){let $0=B0?.status,w0=B0?.code;if($0===409||w0==="file_exists"){let S1=U0?.name||"file";if(!window.confirm(`"${S1}" already exists in ${d}. Overwrite?`))continue;Z0=await E8(U0,S,{overwrite:!0})}else throw B0}if(Z0?.path)a1.current=Z0.path,W(Z0.path),_1.current?.(Z0.path);W0.current?.(S)}catch(Z0){C(Z0.message||"Failed to upload file")}finally{b0(!1)}},[]),H4=T(async(H,M)=>{if(!H)return;let R=i0.current?.get(H);if(!R)return;let S=M&&M!==""?M:".",d=H.includes("/")?H.split("/").slice(0,-1).join("/")||".":".";if(S===d)return;try{let U0=(await o6(H,S))?.path||H;if(R.type==="dir")V((B0)=>{let $0=new Set;for(let w0 of B0)if(w0===H)$0.add(U0);else if(w0.startsWith(`${H}/`))$0.add(`${U0}${w0.slice(H.length)}`);else $0.add(w0);return $0});if(W(U0),R.type==="dir")k(null),x(!1),f(null);else _1.current?.(U0);W0.current?.(d),W0.current?.(S)}catch(Z0){C(Z0?.message||"Failed to move entry")}},[]);s1.current=H4;let J4=T(async(H)=>{if(!Q4(H))return;H.preventDefault(),$1.current=0,a(!1),_0(null),H0(null),z1();let M=Array.from(H?.dataTransfer?.files||[]);if(M.length===0)return;let R=X1.current||x1(H)||I1();await d1(M,R)},[I1,x1,d1]),T5=T((H)=>{if(H?.stopPropagation?.(),F0)return;let M=H?.currentTarget?.dataset?.uploadTarget||".";h.current=M,N0.current?.click()},[F0]),E1=T(()=>{if(F0)return;let H=l1.current,M=H?i0.current?.get(H):null;h.current=M?.type==="dir"?M.path:".",N0.current?.click()},[F0]),O4=T(()=>{U1(()=>D_(null))},[U1,D_]),_5=T(()=>{U1(()=>E1())},[U1,E1]),X_=T(()=>{U1(()=>h1())},[U1,h1]),V_=T(()=>{U1(()=>G_())},[U1,G_]),Z4=T(()=>{if(!U||!T1)return;U1(()=>Z1.current?.(U,A))},[U1,U,T1,A]),m4=T(()=>{if(!U||U===".")return;U1(()=>Z_(U))},[U1,U,Z_]),h4=T(()=>{if(!U||Y1)return;U1(()=>b4())},[U1,U,Y1,b4]),$5=T(()=>{if(!U||Y1)return;U1(()=>b_())},[U1,U,Y1,b_]),Y4=T(()=>{if(!D1)return;if(v1(),typeof window<"u")window.open(D1,"_blank","noopener")},[v1,D1]),T_=T(()=>{v1(),Z?.()},[v1,Z]),z_=T(()=>{v1(),Y?.()},[v1,Y]),A4=T(()=>{v1(),q?.()},[v1,q]),p4=T((H)=>{if(!H||H.button!==0)return;let M=H.currentTarget;if(!M||!M.dataset)return;let R=M.dataset.path;if(!R||R===".")return;if(j1.current===R)return;let S=q_(H);if(S?.closest?.("button, a, input, .workspace-caret"))return;if(!N_(S))return;H.preventDefault(),I0.current={path:R,dragging:!1,startX:H.clientX,startY:H.clientY};let d=(U0)=>{let B0=I0.current;if(!B0?.path)return;let $0=Math.abs(U0.clientX-B0.startX),w0=Math.abs(U0.clientY-B0.startY),S1=$0>4||w0>4;if(!B0.dragging&&S1)B0.dragging=!0,A0.current=!0,a(!0),_0("move"),C1(B0.path),F_(U0.clientX,U0.clientY),document.body.style.userSelect="none",document.body.style.cursor="grabbing";if(B0.dragging){U0.preventDefault(),F_(U0.clientX,U0.clientY);let __=document.elementFromPoint(U0.clientX,U0.clientY),p1=t1(__)||I1();if(X1.current!==p1)V1(p1);W_(p1)}},Z0=()=>{document.removeEventListener("mousemove",d),document.removeEventListener("mouseup",Z0);let U0=I0.current;if(U0?.dragging&&U0.path){let B0=X1.current||I1(),$0=s1.current;if(typeof $0==="function")$0(U0.path,B0)}I0.current={path:null,dragging:!1,startX:0,startY:0},$1.current=0,a(!1),_0(null),V1(null),z1(),e1(),document.body.style.userSelect="",document.body.style.cursor="",setTimeout(()=>{A0.current=!1},0)};document.addEventListener("mousemove",d),document.addEventListener("mouseup",Z0)},[t1,I1,C1,F_,e1,V1,W_,z1]),C_=T(async(H)=>{let M=Array.from(H?.target?.files||[]);if(M.length===0)return;let R=h.current||".";if(await d1(M,R),h.current=".",H?.target)H.target.value=""},[d1]);return B`
        <aside
            class=${`workspace-sidebar${p?" workspace-drop-active":""}`}
            data-workspace-scale=${l0}
            ref=${v0}
            onDragEnter=${e4}
            onDragOver=${m_}
            onDragLeave=${h_}
            onDrop=${J4}
        >
            <input type="file" multiple style="display:none" ref=${N0} onChange=${C_} />
            <div class="workspace-header">
                <div class="workspace-header-left">
                    <div class="workspace-menu-wrap">
                        <button
                            ref=${s}
                            class=${`workspace-menu-button${M0?" active":""}`}
                            onClick=${(H)=>{H.stopPropagation(),o0((M)=>!M)}}
                            title="Workspace actions"
                            aria-label="Workspace actions"
                            aria-haspopup="menu"
                            aria-expanded=${M0?"true":"false"}
                        >
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                <line x1="4" y1="7" x2="20" y2="7" />
                                <line x1="4" y1="12" x2="20" y2="12" />
                                <line x1="4" y1="17" x2="20" y2="17" />
                            </svg>
                        </button>
                        ${M0&&B`
                            <div class="workspace-menu-dropdown" ref=${y} role="menu" aria-label="Workspace options">
                                <button class="workspace-menu-item" role="menuitem" onClick=${O4} disabled=${F0}>New file</button>
                                <button class="workspace-menu-item" role="menuitem" onClick=${_5} disabled=${F0}>Upload files</button>
                                <button class="workspace-menu-item" role="menuitem" onClick=${X_}>Refresh tree</button>
                                <button class=${`workspace-menu-item${b?" active":""}`} role="menuitem" onClick=${V_}>
                                    ${b?"Hide hidden files":"Show hidden files"}
                                </button>

                                ${U&&B`<div class="workspace-menu-separator"></div>`}
                                ${U&&!Y1&&B`
                                    <button class="workspace-menu-item" role="menuitem" onClick=${Z4} disabled=${!T1}>Open in editor</button>
                                `}
                                ${Y_&&B`
                                    <button class="workspace-menu-item" role="menuitem" onClick=${m4}>Rename selected</button>
                                `}
                                ${n1&&B`
                                    <button class="workspace-menu-item" role="menuitem" onClick=${$5}>Download selected file</button>
                                `}
                                ${D1&&B`
                                    <button class="workspace-menu-item" role="menuitem" onClick=${Y4}>Download selected folder (zip)</button>
                                `}
                                ${M_&&B`
                                    <button class="workspace-menu-item danger" role="menuitem" onClick=${h4}>Delete selected file</button>
                                `}

                                ${(Z||Y||q)&&B`<div class="workspace-menu-separator"></div>`}
                                ${Z&&B`
                                    <button class="workspace-menu-item" role="menuitem" onClick=${T_}>
                                        Open terminal in tab
                                    </button>
                                `}
                                ${Y&&B`
                                    <button class="workspace-menu-item" role="menuitem" onClick=${z_}>
                                        Open VNC in tab
                                    </button>
                                `}
                                ${q&&B`
                                    <button class="workspace-menu-item" role="menuitem" onClick=${A4}>
                                        ${N?"Hide terminal dock":"Show terminal dock"}
                                    </button>
                                `}
                            </div>
                        `}
                    </div>
                    <span>Workspace</span>
                </div>
                <div class="workspace-header-actions">
                    <button class="workspace-create" onClick=${D_} title="New file" disabled=${F0}>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                            stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                            <line x1="12" y1="5" x2="12" y2="19" />
                            <line x1="5" y1="12" x2="19" y2="12" />
                        </svg>
                    </button>
                    <button class="workspace-refresh" onClick=${h1} title="Refresh">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"
                            stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                            <circle cx="12" cy="12" r="8.5" stroke-dasharray="42 12" stroke-dashoffset="6"
                                transform="rotate(75 12 12)" />
                            <polyline points="21 3 21 9 15 9" />
                        </svg>
                    </button>
                </div>
            </div>
            <div class="workspace-tree" onClick=${f_}>
                ${F0&&B`<div class="workspace-drop-hint">Uploading…</div>`}
                ${l&&B`<div class="workspace-loading">Loading…</div>`}
                ${z&&B`<div class="workspace-error">${z}</div>`}
                ${K&&B`
                    <div
                        class="workspace-tree-list"
                        ref=${Q1}
                        tabIndex="0"
                        onClick=${d_}
                        onDblClick=${K_}
                        onKeyDown=${B1}
                        onTouchStart=${v_}
                        onTouchEnd=${x_}
                        onTouchMove=${v4}
                        onTouchCancel=${x_}
                    >
                        ${k_.map(({node:H,depth:M})=>{let R=H.type==="dir",S=H.path===U,d=H.path===J,Z0=R&&X.has(H.path),U0=V0&&H.path===V0,B0=Array.isArray(H.children)&&H.children.length>0?H.children.length:Number(H.child_count)||0;return B`
                                <div
                                    key=${H.path}
                                    class=${`workspace-row${S?" selected":""}${U0?" drop-target":""}`}
                                    style=${{paddingLeft:`${8+M*u4.indentPx}px`}}
                                    data-path=${H.path}
                                    data-type=${H.type}
                                    onMouseDown=${p4}
                                >
                                    <span class="workspace-caret" aria-hidden="true">
                                        ${R?Z0?B`<svg viewBox="0 0 12 12"><polygon points="1,2 11,2 6,11"/></svg>`:B`<svg viewBox="0 0 12 12"><polygon points="2,1 11,6 2,11"/></svg>`:null}
                                    </span>
                                    <svg class=${`workspace-node-icon${R?" folder":""}`}
                                        viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                        stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                        aria-hidden="true">
                                        ${R?B`<path d="M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>`:B`<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/>`}
                                    </svg>
                                    ${d?B`
                                            <input
                                                class="workspace-rename-input"
                                                ref=${r}
                                                value=${O}
                                                onInput=${($0)=>F($0?.target?.value||"")}
                                                onKeyDown=${($0)=>{if($0.key==="Enter")$0.preventDefault(),m1();else if($0.key==="Escape")$0.preventDefault(),P1()}}
                                                onBlur=${P1}
                                                onClick=${($0)=>$0.stopPropagation()}
                                            />
                                        `:B`<span class="workspace-label"><span class="workspace-label-text">${H.name}</span></span>`}
                                    ${R&&!Z0&&B0>0&&B`
                                        <span class="workspace-count">${B0}</span>
                                    `}
                                    ${R&&B`
                                        <button
                                            class="workspace-folder-upload"
                                            data-upload-target=${H.path}
                                            title="Upload files to this folder"
                                            onClick=${T5}
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
            ${U&&B`
                <div class="workspace-preview-splitter-h" onMouseDown=${g4} onTouchStart=${g_}></div>
                <div class="workspace-preview">
                    <div class="workspace-preview-header">
                        <span class="workspace-preview-title">${U}</span>
                        <div class="workspace-preview-actions">
                            <button class="workspace-create" onClick=${D_} title="New file" disabled=${F0}>
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                    stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                    <line x1="12" y1="5" x2="12" y2="19" />
                                    <line x1="5" y1="12" x2="19" y2="12" />
                                </svg>
                            </button>
                            ${!Y1&&B`
                                <button
                                    class="workspace-download workspace-edit"
                                    onClick=${()=>T1&&Z1.current?.(U,A)}
                                    title=${z4}
                                    disabled=${!T1}
                                >
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                        stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                        <path d="M12 20h9" />
                                        <path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4Z" />
                                    </svg>
                                </button>
                                <button
                                    class="workspace-download workspace-delete"
                                    onClick=${b4}
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
                            ${Y1?B`
                                    <button class="workspace-download" onClick=${E1}
                                        title="Upload files to this folder" disabled=${F0}>
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                            stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                                            <polyline points="7 8 12 3 17 8"/>
                                            <line x1="12" y1="3" x2="12" y2="15"/>
                                        </svg>
                                    </button>
                                    <a class="workspace-download" href=${M8(U,b)}
                                        title="Download folder as zip" onClick=${(H)=>H.stopPropagation()}>
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                            stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                                            <polyline points="7 10 12 15 17 10"/>
                                            <line x1="12" y1="15" x2="12" y2="3"/>
                                        </svg>
                                    </a>`:B`<button class="workspace-download" onClick=${b_} title="Download">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                        stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                                        <polyline points="7 10 12 15 17 10"/>
                                        <line x1="12" y1="15" x2="12" y2="3"/>
                                    </svg>
                                </button>`}
                        </div>
                    </div>
                    ${P&&B`<div class="workspace-loading">Loading preview…</div>`}
                    ${A?.error&&B`<div class="workspace-error">${A.error}</div>`}
                    ${Y1&&B`
                        <div class="workspace-preview-text">Folder selected — create file, upload files, or download as zip.</div>
                        ${x0?.loading&&B`<div class="workspace-loading">Loading folder size preview…</div>`}
                        ${x0?.error&&B`<div class="workspace-error">${x0.error}</div>`}
                        ${x0?.payload&&x0.payload.segments?.length>0&&B`
                            <${aG} payload=${x0.payload} />
                        `}
                        ${x0?.payload&&(!x0.payload.segments||x0.payload.segments.length===0)&&B`
                            <div class="workspace-preview-text">No file size data available for this folder yet.</div>
                        `}
                    `}
                    ${A&&!A.error&&!Y1&&B`
                        <div class="workspace-preview-body" ref=${D0}></div>
                    `}
                    ${m&&B`
                        <div class="workspace-download-card">
                            <${tG} mediaId=${m} />
                        </div>
                    `}
                </div>
            `}
            ${K0&&B`
                <div class="workspace-drag-ghost" ref=${R_}>${K0.label}</div>
            `}
        </aside>
    `}var eG=new Set(["kanban-editor","mindmap-editor"]);function _X(_,$,j){let Q=String(_||"").trim();if(!Q)return null;if($)return $;if(typeof j!=="function")return null;return j({path:Q,mode:"edit"})?.id||null}function YZ(_,$,j){let Q=_X(_,$,j);return Q!=null&&eG.has(Q)}var $X=/\.(docx?|xlsx?|pptx?|odt|ods|odp|rtf)$/i,jX=/\.(csv|tsv)$/i,QX=/\.pdf$/i,ZX=/\.(png|jpe?g|gif|webp|bmp|ico|svg)$/i,qZ=/\.drawio(\.xml|\.svg|\.png)?$/i;function NZ({tabs:_,activeId:$,onActivate:j,onClose:Q,onCloseOthers:Z,onCloseAll:Y,onTogglePin:q,onTogglePreview:N,onEditSource:K,previewTabs:G,paneOverrides:X,onToggleDock:V,dockVisible:U,onToggleZen:W,zenMode:J,onPopOutTab:D}){let[O,F]=g(null),A=I(null);v(()=>{if(!O)return;let z=(C)=>{if(C.type==="keydown"&&C.key!=="Escape")return;F(null)};return document.addEventListener("click",z),document.addEventListener("keydown",z),()=>{document.removeEventListener("click",z),document.removeEventListener("keydown",z)}},[O]),v(()=>{let z=(C)=>{if(C.ctrlKey&&C.key==="Tab"){if(C.preventDefault(),!_.length)return;let b=_.findIndex((e)=>e.id===$);if(C.shiftKey){let e=_[(b-1+_.length)%_.length];j?.(e.id)}else{let e=_[(b+1)%_.length];j?.(e.id)}return}if((C.ctrlKey||C.metaKey)&&C.key==="w"){let b=document.querySelector(".editor-pane");if(b&&b.contains(document.activeElement)){if(C.preventDefault(),$)Q?.($)}}};return document.addEventListener("keydown",z),()=>document.removeEventListener("keydown",z)},[_,$,j,Q]);let k=T((z,C)=>{if(z.button===1){z.preventDefault(),Q?.(C);return}if(z.button===0)j?.(C)},[j,Q]),m=T((z,C)=>{z.preventDefault(),F({id:C,x:z.clientX,y:z.clientY})},[]),f=T((z)=>{z.preventDefault(),z.stopPropagation()},[]),l=T((z,C)=>{z.preventDefault(),z.stopPropagation(),Q?.(C)},[Q]);v(()=>{if(!$||!A.current)return;let z=A.current.querySelector(".tab-item.active");if(z)z.scrollIntoView({block:"nearest",inline:"nearest",behavior:"smooth"})},[$]);let o=T((z)=>{if(!(X instanceof Map))return null;return X.get(z)||null},[X]),P=f0(()=>_.find((z)=>z.id===O?.id)||null,[O?.id,_]),x=f0(()=>{let z=O?.id;if(!z)return!1;return YZ(z,o(z),(C)=>d0.resolve(C))},[O?.id,o]);if(!_.length)return null;return B`
        <div class="tab-strip" ref=${A} role="tablist">
            ${_.map((z)=>B`
                <div
                    key=${z.id}
                    class=${`tab-item${z.id===$?" active":""}${z.dirty?" dirty":""}${z.pinned?" pinned":""}`}
                    role="tab"
                    aria-selected=${z.id===$}
                    title=${z.path}
                    onMouseDown=${(C)=>k(C,z.id)}
                    onContextMenu=${(C)=>m(C,z.id)}
                >
                    ${z.pinned&&B`
                        <span class="tab-pin-icon" aria-label="Pinned">
                            <svg viewBox="0 0 16 16" width="10" height="10" fill="currentColor">
                                <path d="M4.456.734a1.75 1.75 0 0 1 2.826.504l.613 1.327a3.1 3.1 0 0 0 2.084 1.707l2.454.584c1.332.317 1.8 1.972.832 2.94L11.06 10l3.72 3.72a.75.75 0 1 1-1.06 1.06L10 11.06l-2.204 2.205c-.968.968-2.623.5-2.94-.832l-.584-2.454a3.1 3.1 0 0 0-1.707-2.084l-1.327-.613a1.75 1.75 0 0 1-.504-2.826z"/>
                            </svg>
                        </span>
                    `}
                    <span class="tab-label">${z.label}</span>
                    <button
                        type="button"
                        class="tab-close"
                        onMouseDown=${f}
                        onClick=${(C)=>l(C,z.id)}
                        title=${z.dirty?"Unsaved changes":"Close"}
                        aria-label=${z.dirty?"Unsaved changes":`Close ${z.label}`}
                    >
                        ${z.dirty?B`<span class="tab-dirty-dot" aria-hidden="true"></span>`:B`<svg viewBox="0 0 16 16" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" aria-hidden="true" focusable="false" style=${{pointerEvents:"none"}}>
                                <line x1="4" y1="4" x2="12" y2="12" style=${{pointerEvents:"none"}}/>
                                <line x1="12" y1="4" x2="4" y2="12" style=${{pointerEvents:"none"}}/>
                            </svg>`}
                    </button>
                </div>
            `)}
            ${V&&B`
                <div class="tab-strip-spacer"></div>
                <button
                    class=${`tab-strip-dock-toggle${U?" active":""}`}
                    onClick=${V}
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
            ${W&&B`
                <button
                    class=${`tab-strip-zen-toggle${J?" active":""}`}
                    onClick=${W}
                    title=${`${J?"Exit":"Enter"} zen mode (Ctrl+Shift+Z)`}
                    aria-label=${`${J?"Exit":"Enter"} zen mode`}
                    aria-pressed=${J?"true":"false"}
                >
                    <svg viewBox="0 0 16 16" width="14" height="14" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                        ${J?B`<polyline points="4 8 1.5 8 1.5 1.5 14.5 1.5 14.5 8 12 8"/><polyline points="4 8 1.5 8 1.5 14.5 14.5 14.5 14.5 8 12 8"/>`:B`<polyline points="5.5 1.5 1.5 1.5 1.5 5.5"/><polyline points="10.5 1.5 14.5 1.5 14.5 5.5"/><polyline points="5.5 14.5 1.5 14.5 1.5 10.5"/><polyline points="10.5 14.5 14.5 14.5 14.5 10.5"/>`}
                    </svg>
                </button>
            `}
        </div>
        ${O&&B`
            <div class="tab-context-menu" style=${{left:O.x+"px",top:O.y+"px"}}>
                <button onClick=${()=>{Q?.(O.id),F(null)}}>Close</button>
                <button onClick=${()=>{Z?.(O.id),F(null)}}>Close Others</button>
                <button onClick=${()=>{Y?.(),F(null)}}>Close All</button>
                <hr />
                <button onClick=${()=>{q?.(O.id),F(null)}}>
                    ${P?.pinned?"Unpin":"Pin"}
                </button>
                ${x&&K&&B`
                    <button onClick=${()=>{K(O.id),F(null)}}>Edit Source</button>
                `}
                ${D&&B`
                    <button onClick=${()=>{let z=_.find((C)=>C.id===O.id);D(O.id,z?.label),F(null)}}>Open in Window</button>
                `}
                ${N&&/\.(md|mdx|markdown)$/i.test(O.id)&&B`
                    <hr />
                    <button onClick=${()=>{N(O.id),F(null)}}>
                        ${G?.has(O.id)?"Hide Preview":"Preview"}
                    </button>
                `}
                ${$X.test(O.id)&&B`
                    <hr />
                    <button onClick=${()=>{let z="/workspace/raw?path="+encodeURIComponent(O.id),C=O.id.split("/").pop()||"document",b="/office-viewer/?url="+encodeURIComponent(z)+"&name="+encodeURIComponent(C);window.open(b,"_blank","noopener"),F(null)}}>Open in New Tab</button>
                `}
                ${jX.test(O.id)&&B`
                    <hr />
                    <button onClick=${()=>{let z="/csv-viewer/?path="+encodeURIComponent(O.id);window.open(z,"_blank","noopener"),F(null)}}>Open in New Tab</button>
                `}
                ${QX.test(O.id)&&B`
                    <hr />
                    <button onClick=${()=>{let z="/workspace/raw?path="+encodeURIComponent(O.id);window.open(z,"_blank","noopener"),F(null)}}>Open in New Tab</button>
                `}
                ${ZX.test(O.id)&&!qZ.test(O.id)&&B`
                    <hr />
                    <button onClick=${()=>{let z="/image-viewer/?path="+encodeURIComponent(O.id);window.open(z,"_blank","noopener"),F(null)}}>Open in New Tab</button>
                `}
                ${qZ.test(O.id)&&B`
                    <hr />
                    <button onClick=${()=>{let z="/drawio/edit?path="+encodeURIComponent(O.id);window.open(z,"_blank","noopener"),F(null)}}>Open in New Tab</button>
                `}
            </div>
        `}
    `}function YX(_){let{workspaceOpen:$,editorOpen:j,chatOnlyMode:Q,zenMode:Z}=_;return`app-shell${$?"":" workspace-collapsed"}${j?" editor-open":""}${Q?" chat-only":""}${Z?" zen-mode":""}`}function KZ(_){let{appShellRef:$,workspaceOpen:j,editorOpen:Q,chatOnlyMode:Z,zenMode:Y,isRenameBranchFormOpen:q,closeRenameCurrentBranchForm:N,handleRenameCurrentBranch:K,renameBranchNameDraft:G,renameBranchNameInputRef:X,setRenameBranchNameDraft:V,renameBranchDraftState:U,isRenamingBranch:W,addFileRef:J,openEditor:D,openTerminalTab:O,openVncTab:F,hasDockPanes:A,toggleDock:k,dockVisible:m,handleSplitterMouseDown:f,handleSplitterTouchStart:l,showEditorPaneContainer:o,tabStripTabs:P,tabStripActiveId:x,handleTabActivate:z,handleTabClose:C,handleTabCloseOthers:b,handleTabCloseAll:e,handleTabTogglePin:p,handleTabTogglePreview:a,handleTabEditSource:t,previewTabs:_0,tabPaneOverrides:K0,toggleZenMode:q0,handlePopOutPane:V0,isWebAppMode:H0,editorContainerRef:F0,editorInstanceRef:b0,handleDockSplitterMouseDown:x0,handleDockSplitterTouchStart:k0,TERMINAL_TAB_PATH:m0,dockContainerRef:g0,handleEditorSplitterMouseDown:l0,handleEditorSplitterTouchStart:r0,searchQuery:M0,isIOSDevice:o0,currentBranchRecord:J0,currentChatJid:P0,currentChatBranches:s0,handleBranchPickerChange:e0,formatBranchPickerLabel:u1,openRenameCurrentBranchForm:N1,handlePruneCurrentBranch:i0,currentHashtag:F1,handleBackToTimeline:Z1,activeSearchScopeLabel:_1,posts:W0,isMainTimelineView:v0,hasMore:Q1,loadMore:r,timelineRef:N0,handleHashtagClick:h,addMessageRef:i,scrollToMessage:O0,openFileFromPill:I0,handleDeletePost:C0,handleOpenFloatingWidget:A0,agents:S0,userProfile:h0,removingPostIds:z0,agentStatus:u0,isCompactionStatus:D0,agentDraft:j0,agentPlan:y,agentThought:s,pendingRequest:G0,intentToast:E0,currentTurnId:p0,steerQueued:$1,handlePanelToggle:X1,btwSession:M1,closeBtwPanel:f1,handleBtwRetry:R_,handleBtwInject:j_,floatingWidget:b1,handleCloseFloatingWidget:s1,handleFloatingWidgetEvent:l1,extensionStatusPanels:j1,pendingExtensionPanelActions:a1,handleExtensionPanelAction:e_,searchOpen:Q_,followupQueueItems:_4,handleInjectQueuedFollowup:n_,handleRemoveQueuedFollowup:I1,viewStateRef:t1,loadPosts:x1,scrollToBottom:V1,searchScope:z1,handleSearch:W_,setSearchScope:F_,enterSearchMode:C1,exitSearchMode:e1,fileRefs:K1,removeFileRef:P1,clearFileRefs:Z_,setFileRefsFromCompose:m1,messageRefs:$4,removeMessageRef:D_,clearMessageRefs:j4,setMessageRefsFromCompose:E_,handleCreateSessionFromCompose:F4,handleRestoreBranch:k_,attachActiveEditorFile:u_,followupQueueCount:u4,handleBtwIntercept:f4,handleMessageResponse:Y1,handleComposeSubmitError:T1,handlePopOutChat:z4,isComposeBoxAgentActive:Y_,activeChatAgents:M_,connectionStatus:n1,activeModel:D1,activeModelUsage:v1,activeThinkingLevel:U1,supportsThinking:q_,contextUsage:N_,notificationsEnabled:K_,notificationPermission:d_,handleToggleNotifications:h1,setActiveModel:g1,applyModelState:G_,setPendingRequest:f_,pendingRequestRef:H1,toggleWorkspace:I_}=_;return B`
    <div class=${YX({workspaceOpen:j,editorOpen:Q,chatOnlyMode:Z,zenMode:Y})} ref=${$}>
      ${q&&B`
        <div class="rename-branch-overlay" onPointerDown=${(B1)=>{if(B1.target===B1.currentTarget)N()}}>
          <form
            class="rename-branch-panel"
            onSubmit=${(B1)=>{B1.preventDefault(),K(G)}}
          >
            <div class="rename-branch-title">Rename branch handle</div>
            <input
              ref=${X}
              value=${G}
              onInput=${(B1)=>{let v_=B1.currentTarget?.value??"";V(String(v_))}}
              onKeyDown=${(B1)=>{if(B1.key==="Escape")B1.preventDefault(),N()}}
              autocomplete="off"
              placeholder="Handle (letters, numbers, - and _ only)"
            />
            <div class=${`rename-branch-help ${U.kind||"info"}`}>
              ${U.message}
            </div>
            <div class="rename-branch-actions">
              <button type="submit" class="compose-model-popup-btn primary" disabled=${W||!U.canSubmit}>
                ${W?"Renaming…":"Save"}
              </button>
              <button
                type="button"
                class="compose-model-popup-btn"
                onClick=${N}
                disabled=${W}
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      `}
      ${!Z&&B`
        <${ZZ}
          onFileSelect=${J}
          visible=${j}
          active=${j||Q}
          onOpenEditor=${D}
          onOpenTerminalTab=${O}
          onOpenVncTab=${F}
          onToggleTerminal=${A?k:void 0}
          terminalVisible=${Boolean(A&&m)}
        />
        <button
          class=${`workspace-toggle-tab${j?" open":" closed"}`}
          onClick=${I_}
          title=${j?"Hide workspace":"Show workspace"}
          aria-label=${j?"Hide workspace":"Show workspace"}
        >
          <svg class="workspace-toggle-tab-icon" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <polyline points="6 3 11 8 6 13" />
          </svg>
        </button>
        <div class="workspace-splitter" onMouseDown=${f} onTouchStart=${l}></div>
      `}
      ${o&&B`
        <div class="editor-pane-container">
          ${Y&&B`<div class="zen-hover-zone"></div>`}
          ${Q&&B`
            <${NZ}
              tabs=${P}
              activeId=${x}
              onActivate=${z}
              onClose=${C}
              onCloseOthers=${b}
              onCloseAll=${e}
              onTogglePin=${p}
              onTogglePreview=${a}
              onEditSource=${t}
              previewTabs=${_0}
              paneOverrides=${K0}
              onToggleDock=${A?k:void 0}
              dockVisible=${A&&m}
              onToggleZen=${q0}
              zenMode=${Y}
              onPopOutTab=${H0?void 0:V0}
            />
          `}
          ${Q&&B`<div class="editor-pane-host" ref=${F0}></div>`}
          ${Q&&x&&_0.has(x)&&B`
            <${_6}
              getContent=${()=>b0.current?.getContent?.()}
              path=${x}
              onClose=${()=>a(x)}
            />
          `}
          ${A&&m&&B`<div class="dock-splitter" onMouseDown=${x0} onTouchStart=${k0}></div>`}
          ${A&&B`<div class=${`dock-panel${m?"":" hidden"}`}>
            <div class="dock-panel-header">
              <span class="dock-panel-title">Terminal</span>
              <div class="dock-panel-actions">
                ${!H0&&B`
                  <button class="dock-panel-action" onClick=${()=>V0(m0,"Terminal")} title="Open terminal in window" aria-label="Open terminal in window">
                    <svg viewBox="0 0 16 16" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                      <rect x="2.25" y="2.25" width="8.5" height="8.5" rx="1.5"/>
                      <path d="M8.5 2.25h5.25v5.25"/>
                      <path d="M13.75 2.25 7.75 8.25"/>
                    </svg>
                  </button>
                `}
                <button class="dock-panel-close" onClick=${k} title="Hide terminal (Ctrl+\`)" aria-label="Hide terminal">
                  <svg viewBox="0 0 16 16" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round">
                    <line x1="4" y1="4" x2="12" y2="12"/>
                    <line x1="12" y1="4" x2="4" y2="12"/>
                  </svg>
                </button>
              </div>
            </div>
            <div class="dock-panel-body" ref=${g0}></div>
          </div>`}
        </div>
        <div class="editor-splitter" onMouseDown=${l0} onTouchStart=${r0}></div>
      `}
      <div class="container">
        ${M0&&o0()&&B`<div class="search-results-spacer"></div>`}
        ${Z&&B`
          <div class="chat-window-header">
            <div class="chat-window-header-main">
              <span class="chat-window-header-title">
                ${J0?.agent_name?`@${J0.agent_name}`:P0}
              </span>
              <span class="chat-window-header-subtitle">${J0?.chat_jid||P0}</span>
            </div>
            <div class="chat-window-header-actions">
              ${s0.length>1&&B`
                <label class="chat-window-branch-picker-wrap">
                  <span class="chat-window-branch-picker-label">Branch</span>
                  <select
                    class="chat-window-branch-picker"
                    value=${P0}
                    onChange=${(B1)=>e0(B1.currentTarget.value)}
                  >
                    ${s0.map((B1)=>B`
                      <option key=${B1.chat_jid} value=${B1.chat_jid}>
                        ${u1(B1,{currentChatJid:P0})}
                      </option>
                    `)}
                  </select>
                </label>
              `}
              ${J0?.chat_jid&&B`
                <button
                  class="chat-window-header-button"
                  type="button"
                  onClick=${N1}
                  title=${W?"Renaming branch…":"Rename this branch"}
                  aria-label="Rename this branch"
                  disabled=${W}
                >
                  ${W?"Renaming…":"Rename"}
                </button>
              `}
              ${J0?.chat_jid&&J0.chat_jid!==(J0.root_chat_jid||J0.chat_jid)&&B`
                <button
                  class="chat-window-header-button"
                  type="button"
                  onClick=${i0}
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
        ${(F1||M0)&&B`
          <div class="hashtag-header">
            <button class="back-btn" onClick=${Z1}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
            </button>
            <span>${F1?`#${F1}`:`Search: ${M0} · ${_1}`}</span>
          </div>
        `}
        <${pQ}
          posts=${W0}
          hasMore=${v0?Q1:!1}
          onLoadMore=${v0?r:void 0}
          timelineRef=${N0}
          onHashtagClick=${h}
          onMessageRef=${i}
          onScrollToMessage=${O0}
          onFileRef=${I0}
          onPostClick=${void 0}
          onDeletePost=${C0}
          onOpenWidget=${A0}
          emptyMessage=${F1?`No posts with #${F1}`:M0?`No results for "${M0}"`:void 0}
          agents=${S0}
          user=${h0}
          reverse=${v0}
          removingPostIds=${z0}
          searchQuery=${M0}
        />
        <${W3}
          status=${D0(u0)?null:u0}
          draft=${j0}
          plan=${y}
          thought=${s}
          pendingRequest=${G0}
          intent=${E0}
          turnId=${p0}
          steerQueued=${$1}
          onPanelToggle=${X1}
          showExtensionPanels=${!1}
        />
        <${DQ}
          session=${M1}
          onClose=${f1}
          onRetry=${R_}
          onInject=${j_}
        />
        <${EQ}
          widget=${b1}
          onClose=${s1}
          onWidgetEvent=${l1}
        />
        <${W3}
          extensionPanels=${Array.from(j1.values())}
          pendingPanelActions=${a1}
          onExtensionPanelAction=${e_}
          turnId=${p0}
          steerQueued=${$1}
          onPanelToggle=${X1}
          showCorePanels=${!1}
        />
        <${B3}
          items=${Q_?[]:_4}
          onInjectQueuedFollowup=${n_}
          onRemoveQueuedFollowup=${I1}
          onOpenFilePill=${I0}
        />
        <${AQ}
          onPost=${()=>{let{searchQuery:B1,searchOpen:v_}=t1.current||{};if(!B1&&!v_)x1(),V1()}}
          onFocus=${V1}
          searchMode=${Q_}
          searchScope=${z1}
          onSearch=${W_}
          onSearchScopeChange=${F_}
          onEnterSearch=${C1}
          onExitSearch=${e1}
          fileRefs=${K1}
          onRemoveFileRef=${P1}
          onClearFileRefs=${Z_}
          onSetFileRefs=${m1}
          messageRefs=${$4}
          onRemoveMessageRef=${D_}
          onClearMessageRefs=${j4}
          onSetMessageRefs=${E_}
          onSwitchChat=${e0}
          onRenameSession=${K}
          isRenameSessionInProgress=${W}
          onCreateSession=${F4}
          onDeleteSession=${i0}
          onRestoreSession=${k_}
          activeEditorPath=${Z?null:x}
          onAttachEditorFile=${Z?void 0:u_}
          onOpenFilePill=${I0}
          followupQueueCount=${u4}
          followupQueueItems=${_4}
          showQueueStack=${!1}
          onInjectQueuedFollowup=${n_}
          onRemoveQueuedFollowup=${I1}
          onSubmitIntercept=${f4}
          onMessageResponse=${Y1}
          onSubmitError=${T1}
          onPopOutChat=${H0?void 0:z4}
          isAgentActive=${Y_}
          activeChatAgents=${M_}
          currentChatJid=${P0}
          connectionStatus=${n1}
          activeModel=${D1}
          modelUsage=${v1}
          thinkingLevel=${U1}
          supportsThinking=${q_}
          contextUsage=${N_}
          notificationsEnabled=${K_}
          notificationPermission=${d_}
          onToggleNotifications=${h1}
          onModelChange=${g1}
          onModelStateChange=${G_}
          statusNotice=${D0(u0)?u0:null}
        />
        <${TQ}
          request=${G0}
          onRespond=${()=>{f_(null),H1.current=null}}
        />
      </div>
    </div>
  `}function a4(_){return!_?.currentHashtag&&!_?.searchQuery&&!_?.searchOpen}function GZ(_,$,j){return Boolean($&&j&&(_==="new_post"||_==="new_reply"||_==="agent_response"))}function C3(_,$){return _&&$}function XZ(_,$){if(!Array.isArray(_)||_.length===0)return[$];if(_.some((j)=>j?.id===$?.id))return _;return[..._,$]}function VZ(_,$){if(!Array.isArray(_))return _;if(!_.some((j)=>j?.id===$?.id))return _;return _.map((j)=>j?.id===$?.id?$:j)}function UZ(_,$){if(!Array.isArray(_))return _;let j=Array.isArray($)?$:[];if(j.length===0)return _;let Q=new Set(j),Z=_.filter((Y)=>!Q.has(Y?.id));return Z.length===_.length?_:Z}function BZ(_){let{currentChatJid:$,queueRefreshGenRef:j,activeChatJidRef:Q,dismissedQueueRowIdsRef:Z,getAgentQueueState:Y,setFollowupQueueItems:q,clearQueuedSteerStateIfStale:N}=_,K=++j.current,G=$;Y(G).then((X)=>{if(K!==j.current)return;if(Q.current!==G)return;let V=Z.current,U=u9(X?.items,V);if(U.length){q((W)=>f9(W,U)?W:U);return}V.clear(),N(0),q((W)=>W.length===0?W:[])}).catch(()=>{if(K!==j.current)return;if(Q.current!==G)return;q((X)=>X.length===0?X:[])})}async function LZ(_){let{currentChatJid:$,activeChatJidRef:j,getAgentContext:Q,setContextUsage:Z}=_,Y=$;try{let q=await Q(Y);if(j.current!==Y)return;if(q)Z(q)}catch(q){if(j.current!==Y)return;console.warn("Failed to fetch agent context:",q)}}async function WZ(_){let{currentChatJid:$,activeChatJidRef:j,getAutoresearchStatus:Q,setExtensionStatusPanels:Z,setPendingExtensionPanelActions:Y}=_,q=$;try{let N=await Q(q);if(j.current!==q)return;Z((K)=>Pj(K,N)),Y((K)=>o8(K,"autoresearch"))}catch(N){if(j.current!==q)return;console.warn("Failed to fetch autoresearch status:",N)}}function FZ(_){let{refreshModelState:$,refreshActiveChatAgents:j,refreshCurrentChatBranches:Q,refreshQueueState:Z,refreshContextUsage:Y,refreshAutoresearchStatus:q}=_;$(),j(),Q(),Z(),Y(),q()}function zZ(_){let{viewStateRef:$,refreshTimeline:j,refreshModelAndQueueState:Q}=_;if(a4($.current))j();Q()}function qX(_,$){return Number.isFinite($)?Number($):_?_.replace(/\r\n/g,`
`).split(`
`).length:0}function K6(_,$){return{text:_,totalLines:qX(_,$)}}function P3(_,$){return{text:$?.text||"",totalLines:z9(_),fullText:_}}function HZ(_,$,j){return j==="replace"?$:`${_||""}${$}`}function JZ(_,$){let j=_||"";if($?.reset)j="";if($?.delta)j+=String($.delta);return j}function OZ(_,$){let j=_||"";if($?.reset)j="";if(typeof $?.delta==="string")j+=$.delta;return j}function t4(_,$){return Boolean(_)&&Boolean($)&&_!==$}function x5(_,$){return Boolean(_)&&!Boolean($)}function AZ(_,$){return _||$||null}function DZ(_){switch(_){case"generated_widget_open":return{kind:"update",fallbackStatus:"loading",shouldAdoptTurn:!0};case"generated_widget_delta":return{kind:"update",fallbackStatus:"streaming",shouldAdoptTurn:!0};case"generated_widget_final":return{kind:"update",fallbackStatus:"final",shouldAdoptTurn:!0};case"generated_widget_error":return{kind:"update",fallbackStatus:"error",shouldAdoptTurn:!1};case"generated_widget_close":return{kind:"close",fallbackStatus:null,shouldAdoptTurn:!1};default:return{kind:null,fallbackStatus:null,shouldAdoptTurn:!1}}}function NX(_,$){return typeof _?.chat_jid==="string"&&_.chat_jid.trim()?_.chat_jid.trim():$}function EZ(_,$,j){return{isStatusPanelWidgetEvent:_==="extension_ui_widget"&&$?.options?.surface==="status-panel",eventChatJid:NX($,j),panelKey:typeof $?.key==="string"?$.key:""}}function kZ(_,$){if(_==="extension_ui_notify"&&typeof $?.message==="string")return{title:$.message,detail:null,kind:typeof $?.type==="string"&&$.type.trim()?$.type:"info"};if(_==="extension_ui_error"&&typeof $?.error==="string")return{title:"Extension UI error",detail:$.error,kind:"error",durationMs:5000};return null}var KX=new Set(["extension_ui_request","extension_ui_timeout","extension_ui_notify","extension_ui_status","extension_ui_working","extension_ui_widget","extension_ui_title","extension_ui_editor_text","extension_ui_error"]);function MZ(_){return KX.has(String(_||"").trim())}function GX(_){let $=String(_||"").trim();if(!$.startsWith("extension_ui_"))return"piclaw-extension-ui";return`piclaw-extension-ui:${$.slice(13).replace(/_/g,"-")}`}function y3(_,$,j=globalThis.window){if(!j||typeof j.dispatchEvent!=="function"||typeof CustomEvent>"u")return!1;let Q={type:_,payload:$};return j.dispatchEvent(new CustomEvent("piclaw-extension-ui",{detail:Q})),j.dispatchEvent(new CustomEvent(GX(_),{detail:Q})),!0}function IZ(_,$,j){let Q=$?.turn_id,Z=$?.chat_jid,Y=typeof Z==="string"&&Z.trim()?Z.trim():null,q=_==="connected"||_==="workspace_update";return{turnId:Q,eventChatJid:Y,isGlobalUiEvent:q,isCurrentChatEvent:Y?Y===j:q}}function xZ(_){return _==="agent_draft_delta"||_==="agent_thought_delta"||_==="agent_draft"||_==="agent_thought"}function TZ(_,$,j){let{currentChatJid:Q,updateAgentProfile:Z,updateUserProfile:Y,currentTurnIdRef:q,activeChatJidRef:N,pendingRequestRef:K,draftBufferRef:G,thoughtBufferRef:X,steerQueuedTurnIdRef:V,thoughtExpandedRef:U,draftExpandedRef:W,draftThrottleRef:J,thoughtThrottleRef:D,viewStateRef:O,followupQueueItemsRef:F,dismissedQueueRowIdsRef:A,scrollToBottomRef:k,hasMoreRef:m,loadMoreRef:f,lastAgentResponseRef:l,wasAgentActiveRef:o,setActiveTurn:P,applyLiveGeneratedWidgetUpdate:x,setFloatingWidget:z,clearLastActivityFlag:C,handleUiVersionDrift:b,setAgentStatus:e,setAgentDraft:p,setAgentPlan:a,setAgentThought:t,setPendingRequest:_0,clearAgentRunState:K0,getAgentStatus:q0,noteAgentActivity:V0,showLastActivity:H0,refreshTimeline:F0,refreshModelAndQueueState:b0,refreshActiveChatAgents:x0,refreshCurrentChatBranches:k0,notifyForFinalResponse:m0,setContextUsage:g0,refreshContextUsage:l0,refreshQueueState:r0,setFollowupQueueItems:M0,clearQueuedSteerStateIfStale:o0,setSteerQueuedTurnId:J0,applyModelState:P0,getAgentContext:s0,setExtensionStatusPanels:e0,setPendingExtensionPanelActions:u1,refreshActiveEditorFromWorkspace:N1,showIntentToast:i0,removeStalledPost:F1,setPosts:Z1,preserveTimelineScrollTop:_1}=j,{turnId:W0,isCurrentChatEvent:v0}=IZ(_,$,Q);if(v0)Z($),Y($);if(_==="ui_theme"){x7($);return}let Q1=DZ(_);if(Q1.kind==="update"){if(!v0)return;if(Q1.shouldAdoptTurn&&x5(W0,q.current))P(W0);x($,Q1.fallbackStatus||"streaming");return}if(Q1.kind==="close"){if(!v0)return;z((h)=>sj(h,$));return}if(_?.startsWith("agent_")&&!xZ(_))C();if(_==="connected"){if(b($?.app_asset_version))return;e(null),p({text:"",totalLines:0}),a(""),t({text:"",totalLines:0}),_0(null),K.current=null,K0();let h=Q;if(q0(h).then((i)=>{if(N.current!==h)return;if(!i||i.status!=="active"||!i.data)return;let O0=i.data,I0=h8(O0);if(I0)P(I0);V0({clearSilence:!0}),H0(O0);let C0=E5(i.thought);if(C0)X.current=C0.text,t(C0);let A0=E5(i.draft);if(A0)G.current=A0.text,p(A0)}).catch((i)=>{console.warn("Failed to fetch agent status:",i)}),a4(O.current))F0();b0();return}if(_==="agent_status"){if(!v0){if($?.type==="done"||$?.type==="error")x0(),k0();return}if($.type==="done"||$.type==="error"){if(t4(W0,q.current))return;if($.type==="done"){if(m0(W0||q.current),a4(O.current))F0();if($.context_usage)g0($.context_usage)}if(l0(),o.current=!1,K0(),A.current.clear(),x0(),r0(),p({text:"",totalLines:0}),a(""),t({text:"",totalLines:0}),_0(null),$.type==="error")e({type:"error",title:$.title||"Agent error"}),setTimeout(()=>e(null),8000);else e(null)}else{if(W0)P(W0);if(V0({running:!0,clearSilence:!0}),$.type==="thinking")G.current="",X.current="",p({text:"",totalLines:0}),a(""),t({text:"",totalLines:0});e((h)=>{if(h&&h.type===$.type&&h.title===$.title)return h;return $})}return}if(_==="agent_steer_queued"){if(!v0)return;if(t4(W0,q.current))return;let h=AZ(W0,q.current);if(!h)return;V.current=h,J0(h);return}if(_==="agent_followup_queued"){if(!v0)return;M0((h)=>v9(h,$)),r0();return}if(_==="agent_followup_consumed"){if(!v0)return;let h=M5(F.current,$);if(h)o0(h.remainingQueueCount),M0((i)=>S4(i,h.rowId).items);if(r0(),a4(O.current))F0();return}if(_==="agent_followup_removed"){if(!v0)return;let h=M5(F.current,$);if(h)A.current.add(h.rowId),o0(h.remainingQueueCount),M0((i)=>S4(i,h.rowId).items);r0();return}if(_==="agent_draft_delta"){if(!v0)return;if(t4(W0,q.current))return;if(x5(W0,q.current))P(W0);V0({running:!0,clearSilence:!0}),G.current=JZ(G.current,$);let h=Date.now();if(!J.current||h-J.current>=100){J.current=h;let i=G.current;if(W.current)p((O0)=>P3(i,O0));else p(K6(i,null))}return}if(_==="agent_draft"){if(!v0)return;if(t4(W0,q.current))return;if(x5(W0,q.current))P(W0);V0({running:!0,clearSilence:!0});let h=$.text||"",i=$.mode||($.kind==="plan"?"replace":"append");if($.kind==="plan")a((O0)=>HZ(O0,h,i));else if(!W.current)G.current=h,p(K6(h,$.total_lines));return}if(_==="agent_thought_delta"){if(!v0)return;if(t4(W0,q.current))return;if(x5(W0,q.current))P(W0);V0({running:!0,clearSilence:!0}),X.current=OZ(X.current,$);let h=Date.now();if(U.current&&(!D.current||h-D.current>=100)){D.current=h;let i=X.current;t((O0)=>P3(i,O0))}return}if(_==="agent_thought"){if(!v0)return;if(t4(W0,q.current))return;if(x5(W0,q.current))P(W0);V0({running:!0,clearSilence:!0});let h=$.text||"";if(!U.current)X.current=h,t(K6(h,$.total_lines));return}if(_==="model_changed"){if(!v0)return;P0($);let h=Q;s0(h).then((i)=>{if(N.current!==h)return;if(i)g0(i)}).catch(()=>{});return}let r=EZ(_,$,Q);if(r.isStatusPanelWidgetEvent){if(r.eventChatJid!==Q)return;if(!r.panelKey)return;if(e0((h)=>yj(h,$)),Sj($))u1((h)=>o8(h,r.panelKey));y3(_,$);return}if(_==="workspace_update"){if(typeof window<"u")window.dispatchEvent(new CustomEvent("workspace-update",{detail:$}));N1($?.updates);return}if(MZ(_)){if(!v0)return;y3(_,$);let h=kZ(_,$);if(h)i0(h.title,h.detail,h.kind,h.durationMs);return}let N0=a4(O.current);if(_==="agent_response"){if(!v0)return;F1(),l.current={post:$,turnId:q.current}}if(GZ(_,v0,N0))Z1((h)=>XZ(h,$)),k.current?.();if(_==="interaction_updated"){if(!C3(v0,N0))return;Z1((h)=>VZ(h,$))}if(_==="interaction_deleted"){if(!C3(v0,N0))return;let h=$?.ids||[];if(h.length){if(_1(()=>{Z1((i)=>UZ(i,h))}),m.current)f.current?.({preserveScroll:!0,preserveMode:"top"})}}}function CZ(_){let{readStoredNumber:$,sidebarWidthRef:j,shellElement:Q,minWidth:Z=160,maxWidth:Y=600,fallbackWidth:q=280}=_,N=$("sidebarWidth",null),K=Number.isFinite(N)?Math.min(Math.max(Number(N),Z),Y):q;if(j.current=K,Q)Q.style.setProperty("--sidebar-width",`${K}px`);return K}async function PZ(_){let{currentHashtag:$,searchQuery:j,searchScope:Q,currentChatJid:Z,currentRootChatJid:Y,loadPosts:q,searchPosts:N,setPosts:K,setHasMore:G,scrollToBottom:X,isCancelled:V,scheduleRaf:U=(D)=>requestAnimationFrame(D),scheduleTimeout:W=(D,O)=>{setTimeout(D,O)}}=_,J=()=>{if(V())return;U(()=>{if(V())return;W(()=>{if(V())return;X()},0)})};if($){await q($);return}if(j){try{let D=await N(j,50,0,Z,Q,Y);if(V())return;K(Array.isArray(D?.results)?D.results:[]),G(!1)}catch(D){if(V())return;console.error("Failed to search:",D),K([]),G(!1)}return}try{await q(),J()}catch(D){if(V())return;console.error("Failed to load timeline:",D)}}function yZ(_){let{hasWindow:$=typeof window<"u",nextChatJid:j,currentChatJid:Q,chatOnlyMode:Z,currentHref:Y,navigate:q}=_;if(!$)return!1;let N=typeof j==="string"?j.trim():"";if(!N||N===Q)return!1;let K=V4(Y,N,{chatOnly:Z});return q?.(K),!0}async function SZ(_){let{panePath:$,tabStripActiveId:j,editorInstanceRef:Q,dockInstanceRef:Z,terminalTabPath:Y}=_,N=(typeof j==="string"?j.trim():"")===$?Q.current:$===Y?Z.current:null;if(typeof N?.preparePopoutTransfer!=="function")return null;return await N.preparePopoutTransfer()}function wZ(_){let{panePath:$,terminalTabPath:j,dockVisible:Q,resolveTab:Z,closeTab:Y,setDockVisible:q}=_,N=Z($);if(N&&!N.dirty){Y($);return}if($===j&&Q)q(!1)}function RZ(_){let{hasWindow:$=typeof window<"u",editorOpen:j,shellElement:Q,editorWidthRef:Z,dockHeightRef:Y,sidebarWidthRef:q,readStoredNumber:N}=_;if(!j||!$||!Q)return;if(!Z.current){let K=N("editorWidth",null),G=q.current||280;Z.current=Number.isFinite(K)?Number(K):G}if(Q.style.setProperty("--editor-width",`${Z.current}px`),!Y.current){let K=N("dockHeight",null);Y.current=Number.isFinite(K)?Number(K):200}Q.style.setProperty("--dock-height",`${Y.current}px`)}function S3(_,$){if(typeof $!=="string")return Array.isArray(_)?_:[];let j=$.trim();if(!j)return Array.isArray(_)?_:[];let Q=Array.isArray(_)?_:[];if(Q.includes(j))return Q;return[...Q,j]}function w3(_,$){let j=Array.isArray(_)?_:[];if(typeof $!=="string")return j;let Q=$.trim();if(!Q)return j;if(!j.includes(Q))return j;return j.filter((Z)=>Z!==Q)}function R3(_){if(!Array.isArray(_))return[];let $=[],j=new Set;for(let Q of _){if(typeof Q!=="string")continue;let Z=Q.trim();if(!Z||j.has(Z))continue;j.add(Z),$.push(Z)}return $}var XX=Vj(),uZ=w6,fZ=u6,VX=v6,UX=p6,BX=c6,u3=g6,f3=$_(o1,"getAgentContext",null),LX=$_(o1,"getAutoresearchStatus",null),WX=$_(o1,"stopAutoresearch",{status:"ok"}),FX=$_(o1,"dismissAutoresearch",{status:"ok"}),vZ=$_(o1,"getAgentModels",{current:null,models:[]}),gZ=$_(o1,"getActiveChatAgents",{chats:[]}),G6=$_(o1,"getChatBranches",{chats:[]}),zX=$_(o1,"renameChatBranch",null),HX=$_(o1,"pruneChatBranch",null),JX=$_(o1,"restoreChatBranch",null),bZ=$_(o1,"getAgentQueueState",{count:0}),mZ=$_(o1,"steerAgentQueueItem",{removed:!1,queued:"steer"}),hZ=$_(o1,"removeAgentQueueItem",{removed:!1}),OX=$_(o1,"streamSidePrompt",null);if(window.marked)marked.setOptions({breaks:!0,gfm:!0});d0.register(t6);d0.register(S$);d0.register(y$);d0.register(w$);d0.register(R$);d0.register(u$);d0.register(v$);d0.register(g$);d0.register(m$);d0.register(c$);d0.register(l$);d0.register(E$);e6();d0.register(j$);d0.register(Q$);function AX({locationParams:_,navigate:$}){let{currentChatJid:j,chatOnlyMode:Q,panePopoutMode:Z,panePopoutPath:Y,panePopoutLabel:q,branchLoaderMode:N,branchLoaderSourceChatJid:K}=f0(()=>Lj(_),[_]),[G,X]=g("disconnected"),[V,U]=g(()=>X4()),[W,J]=g(null),[D,O]=g(null),[F,A]=g(!1),[k,m]=g("current"),[f,l]=g([]),[o,P]=g([]),[x,z]=g(null),{agentStatus:C,setAgentStatus:b,agentDraft:e,setAgentDraft:p,agentPlan:a,setAgentPlan:t,agentThought:_0,setAgentThought:K0,pendingRequest:q0,setPendingRequest:V0,currentTurnId:H0,setCurrentTurnId:F0,steerQueuedTurnId:b0,setSteerQueuedTurnId:x0,lastAgentEventRef:k0,lastSilenceNoticeRef:m0,isAgentRunningRef:g0,draftBufferRef:l0,thoughtBufferRef:r0,pendingRequestRef:M0,stalledPostIdRef:o0,currentTurnIdRef:J0,steerQueuedTurnIdRef:P0,thoughtExpandedRef:s0,draftExpandedRef:e0}=G9(),[u1,N1]=g({}),[i0,F1]=g(null),[Z1,_1]=g(null),[W0,v0]=g(!1),[Q1,r]=g(null),[N0,h]=g([]),[i,O0]=g([]),[I0,C0]=g(null),[A0,S0]=g(()=>new Map),[h0,z0]=g(()=>new Set),[u0,D0]=g([]),[j0,y]=g(!1),[s,G0]=g(()=>Bj()),[E0,p0]=g(null),$1=I(new Set),X1=f0(()=>N0.find((E)=>E?.chat_jid===j)||null,[N0,j]),M1=f0(()=>i.find((E)=>E?.chat_jid===j)||X1||null,[X1,i,j]),f1=M1?.root_chat_jid||X1?.root_chat_jid||j,R_=Uj(k),[j_,b1]=g(()=>({status:N?"running":"idle",message:N?"Preparing a new chat branch…":""})),s1=u0.length,l1=I(new Set),j1=I([]),a1=I(new Set),e_=I(0),Q_=I({inFlight:!1,lastAttemptAt:0,turnId:null});l1.current=new Set(u0.map((E)=>E.row_id)),j1.current=u0;let{notificationsEnabled:_4,notificationPermission:n_,toggleNotifications:I1,notify:t1}=N9(),[x1,V1]=g(()=>new Set),[z1,W_]=g(()=>O5("workspaceOpen",!0)),F_=I(null),{editorOpen:C1,tabStripTabs:e1,tabStripActiveId:K1,previewTabs:P1,tabPaneOverrides:Z_,openEditor:m1,closeEditor:$4,handleTabClose:D_,handleTabActivate:j4,handleTabCloseOthers:E_,handleTabCloseAll:F4,handleTabTogglePin:k_,handleTabTogglePreview:u_,handleTabEditSource:u4,revealInExplorer:f4}=V9({onTabClosed:(E)=>F_.current?.(E)}),Y1=I(null),T1=I(null),z4=I(null),Y_=I(null),M_=d0.getDockPanes().length>0,[n1,D1]=g(!1),v1=T(()=>D1((E)=>!E),[]),U1=T(()=>{m1(d4,{label:"Terminal"})},[m1]),q_=T(()=>{m1(L4,{label:"VNC"})},[m1]),N_=f0(()=>_j(e1,K1),[K1,e1]),K_=f0(()=>$j(Z_,K1),[Z_,K1]),d_=f0(()=>jj(q,N_,Y),[N_,q,Y]),h1=f0(()=>Qj(e1,P1,K1),[P1,K1,e1]),g1=f0(()=>Zj(Y,L4),[Y]),G_=f0(()=>Yj(Y,d4,h1,g1),[g1,h1,Y]),f_=qj(Z,Q,C1,M_,n1),[H1,I_]=g(!1),B1=I(!1),v_=T(()=>{if(!C1||Q)return;if(B1.current=n1,n1)D1(!1);I_(!0)},[C1,Q,n1]),x_=T(()=>{if(!H1)return;if(I_(!1),B1.current)D1(!0),B1.current=!1},[H1]),v4=T(()=>{if(H1)x_();else v_()},[H1,v_,x_]);v(()=>{if(H1&&!C1)x_()},[H1,C1,x_]),v(()=>{if(!Z||!Y)return;if(t0.getActiveId()===Y)return;m1(Y,q?{label:q}:void 0)},[m1,q,Z,Y]),v(()=>{let E=Y1.current;if(!E)return;if(T1.current)T1.current.dispose(),T1.current=null;let u=K1;if(!u)return;let Y0={path:u,mode:"edit"},L0=(K_?d0.get(K_):null)||d0.resolve(Y0)||d0.get("editor");if(!L0){E.innerHTML='<div style="padding:2em;color:var(--text-secondary);text-align:center;">No editor available for this file.</div>';return}let Q0=L0.mount(E,Y0);T1.current=Q0,Q0.onDirtyChange?.((T0)=>{t0.setDirty(u,T0)}),Q0.onSaveRequest?.(()=>{}),Q0.onClose?.(()=>{$4()});let X0=t0.getViewState(u);if(X0&&typeof Q0.restoreViewState==="function")requestAnimationFrame(()=>Q0.restoreViewState(X0));if(typeof Q0.onViewStateChange==="function")Q0.onViewStateChange((T0)=>{t0.saveViewState(u,T0)});return requestAnimationFrame(()=>Q0.focus()),()=>{if(T1.current===Q0)Q0.dispose(),T1.current=null}},[K1,K_,$4]);let g4=T(async(E)=>{let u=typeof K1==="string"?K1.trim():"",Y0=T1.current;if(!u||!Y0?.setContent)return;if(typeof Y0.isDirty==="function"&&Y0.isDirty())return;if(!(Array.isArray(E)&&E.length>0?E.some((Q0)=>{let X0=Array.isArray(Q0?.changed_paths)?Q0.changed_paths.map((n0)=>typeof n0==="string"?n0.trim():"").filter(Boolean):[];if(X0.length>0)return X0.some((n0)=>n0==="."||n0===u);let T0=typeof Q0?.path==="string"?Q0.path.trim():"";return!T0||T0==="."||T0===u}):!0))return;try{let Q0=await b5(u,1e6,"edit"),X0=typeof Q0?.text==="string"?Q0.text:"",T0=typeof Q0?.mtime==="string"&&Q0.mtime.trim()?Q0.mtime.trim():new Date().toISOString();Y0.setContent(X0,T0)}catch(Q0){console.warn("[workspace_update] Failed to refresh active pane:",Q0)}},[K1]);v(()=>{let E=z4.current;if(Y_.current)Y_.current.dispose(),Y_.current=null;if(!E||!M_||!n1)return;let u=d0.getDockPanes()[0];if(!u){E.innerHTML='<div class="terminal-placeholder">No dock pane available.</div>';return}let Y0=u.mount(E,{mode:"view"});return Y_.current=Y0,requestAnimationFrame(()=>Y0.focus?.()),()=>{if(Y_.current===Y0)Y0.dispose(),Y_.current=null}},[M_,n1]);let[g_,b_]=g({name:"You",avatar_url:null,avatar_background:null}),b4=I(null),Q4=I(!1),e4=I(!1),m_=I(!1),h_=I(null),d1=I(j),H4=I(new Map),J4=I(j),T5=I(0),E1=I(0),O4=I({}),_5=I({name:null,avatar_url:null}),X_=I({currentHashtag:null,searchQuery:null,searchOpen:!1}),V_=I(null),Z4=I(null),m4=I(0),h4=I(0),$5=I(0),Y4=I(null),T_=I(null),z_=I(null),A4=I(null),p4=I(0),C_=I({title:null,avatarBase:null}),H=I(null),M=I(!1),[R,S]=g(!1),d=I(0),[Z0,U0]=g(!1),[B0,$0]=g(""),w0=f0(()=>n8(B0,M1?.agent_name||""),[M1?.agent_name,B0]),S1=I(null),__=T(()=>{if(H.current)clearTimeout(H.current),H.current=null;z(null)},[]);F9(30000),v(()=>{if(!Z0)return;requestAnimationFrame(()=>{if(Z0)S1.current?.focus(),S1.current?.select?.()})},[Z0]),v(()=>{return I7()},[]),v(()=>{return o9(U)},[]),v(()=>{q1("workspaceOpen",String(z1))},[z1]),v(()=>{return r9()},[]),v(()=>{return()=>{__()}},[__]),v(()=>{if(!s){q1(BTW_SESSION_KEY,"");return}q1(BTW_SESSION_KEY,JSON.stringify({question:s.question||"",answer:s.answer||"",thinking:s.thinking||"",error:s.error||null,status:s.status||"success"}))},[s]),v(()=>{O4.current=u1||{}},[u1]),v(()=>{d1.current=j},[j]),v(()=>{_5.current=g_||{name:"You",avatar_url:null,avatar_background:null}},[g_]);let p1=T((E,u,Y0=null)=>{if(typeof document>"u")return;let L0=(E||"").trim()||"PiClaw";if(C_.current.title!==L0){document.title=L0;let G1=document.querySelector('meta[name="apple-mobile-web-app-title"]');if(G1&&G1.getAttribute("content")!==L0)G1.setAttribute("content",L0);C_.current.title=L0}let Q0=document.getElementById("dynamic-favicon");if(!Q0)return;let X0=Q0.getAttribute("data-default")||Q0.getAttribute("href")||"/favicon.ico",T0=u||X0,n0=u?`${T0}|${Y0||""}`:T0;if(C_.current.avatarBase!==n0){let G1=u?`${T0}${T0.includes("?")?"&":"?"}v=${Y0||Date.now()}`:T0;Q0.setAttribute("href",G1),C_.current.avatarBase=n0}},[]),C5=T((E)=>{l((u)=>S3(u,E))},[]),L=T((E)=>{l((u)=>w3(u,E))},[]);F_.current=L;let w=T(()=>{l([])},[]),n=T((E)=>{l(R3(E))},[]),c=T((E,u=null,Y0="info",L0=3000)=>{__(),z({title:E,detail:u||null,kind:Y0||"info"}),H.current=setTimeout(()=>{z((Q0)=>Q0?.title===E?null:Q0)},L0)},[__]),y0=T((E)=>{let u=J9(E,{editorOpen:C1,resolvePane:(Y0)=>d0.resolve(Y0)});if(u.kind==="open"){m1(u.path);return}if(u.kind==="toast")c(u.title,u.detail,u.level)},[C1,m1,c]),J1=T(()=>{let E=K1;if(E)C5(E)},[K1,C5]),y1=T((E)=>{P((u)=>S3(u,E))},[]),w1=T(async(E,u=null)=>{let Y0=(Q0)=>{Q0.scrollIntoView({behavior:"smooth",block:"center"}),Q0.classList.add("post-highlight"),setTimeout(()=>Q0.classList.remove("post-highlight"),2000)},L0=document.getElementById("post-"+E);if(L0){Y0(L0);return}try{let Q0=typeof u==="string"&&u.trim()?u.trim():j,T0=(await R6(E,Q0))?.thread?.[0];if(!T0)return;U_((n0)=>{if(!n0)return[T0];if(n0.some((G1)=>G1.id===T0.id))return n0;return[...n0,T0]}),requestAnimationFrame(()=>{setTimeout(()=>{let n0=document.getElementById("post-"+E);if(n0)Y0(n0)},50)})}catch(Q0){console.error("[scrollToMessage] Failed to fetch message",E,Q0)}},[j]),q4=T((E)=>{P((u)=>w3(u,E))},[]),c4=T(()=>{P([])},[]),j5=T((E)=>{P(R3(E))},[]),Q5=T((E)=>{let u=typeof E==="string"&&E.trim()?E.trim():"Could not send your message.";c("Compose failed",u,"error",5000)},[c]),N4=T((E={})=>{let u=Date.now();if(k0.current=u,E.running)g0.current=!0,y((Y0)=>Y0?Y0:!0);if(E.clearSilence)m0.current=0},[y]),c1=T(()=>{if(A4.current)clearTimeout(A4.current),A4.current=null;p4.current=0},[]);v(()=>()=>{c1()},[c1]);let Z5=T(()=>{c1(),b((E)=>{if(!E)return E;if(!(E.last_activity||E.lastActivity))return E;let{last_activity:u,lastActivity:Y0,...L0}=E;return L0})},[c1]),D4=T((E)=>{if(!E)return;c1();let u=Date.now();p4.current=u,b({type:E.type||"active",last_activity:!0}),A4.current=setTimeout(()=>{if(p4.current!==u)return;b((Y0)=>{if(!Y0||!(Y0.last_activity||Y0.lastActivity))return Y0;return null})},B9)},[c1]),O1=T(()=>{g0.current=!1,y(!1),k0.current=null,m0.current=0,l0.current="",r0.current="",M0.current=null,T_.current=null,J0.current=null,P0.current=null,h_.current=null,Q_.current={inFlight:!1,lastAttemptAt:0,turnId:null},c1(),F0(null),x0(null),s0.current=!1,e0.current=!1},[c1,F0,x0,y]),i_=T((E)=>{if(!M9({remainingQueueCount:E,currentTurnId:J0.current,isAgentTurnActive:j0}))return;P0.current=null,x0(null)},[j0,x0]),Y5=T(()=>Tj({agentStatus:C,agentDraft:e,agentPlan:a,agentThought:_0,pendingRequest:q0,currentTurnId:H0,steerQueuedTurnId:b0,isAgentTurnActive:j0,followupQueueItems:u0,activeModel:i0,activeThinkingLevel:Z1,supportsThinking:W0,activeModelUsage:Q1,contextUsage:I0,isAgentRunning:g0.current,wasAgentActive:m_.current,draftBuffer:l0.current,thoughtBuffer:r0.current,lastAgentEvent:k0.current,lastSilenceNotice:m0.current,lastAgentResponse:T_.current,currentTurnIdRef:J0.current,steerQueuedTurnIdRef:P0.current,thoughtExpanded:s0.current,draftExpanded:e0.current,agentStatusRef:h_.current,silentRecovery:Q_.current}),[i0,Q1,Z1,e,a,C,_0,I0,H0,u0,j0,q0,b0,W0]),q8=T((E)=>{Cj({snapshot:E,clearLastActivityTimer:c1,refs:{isAgentRunningRef:g0,wasAgentActiveRef:m_,lastAgentEventRef:k0,lastSilenceNoticeRef:m0,draftBufferRef:l0,thoughtBufferRef:r0,pendingRequestRef:M0,lastAgentResponseRef:T_,currentTurnIdRef:J0,steerQueuedTurnIdRef:P0,agentStatusRef:h_,silentRecoveryRef:Q_,thoughtExpandedRef:s0,draftExpandedRef:e0},setters:{setIsAgentTurnActive:y,setAgentStatus:b,setAgentDraft:p,setAgentPlan:t,setAgentThought:K0,setPendingRequest:V0,setCurrentTurnId:F0,setSteerQueuedTurnId:x0,setFollowupQueueItems:D0,setActiveModel:F1,setActiveThinkingLevel:_1,setSupportsThinking:v0,setActiveModelUsage:r,setContextUsage:C0}})},[c1,F0,D0,y,x0]),q5=T((E)=>{if(!E)return;if(J0.current===E)return;J0.current=E,Q_.current={inFlight:!1,lastAttemptAt:0,turnId:E},F0(E),P0.current=null,x0(null),l0.current="",r0.current="",p({text:"",totalLines:0}),t(""),K0({text:"",totalLines:0}),V0(null),M0.current=null,T_.current=null,s0.current=!1,e0.current=!1},[F0,x0]),E4=T((E)=>{if(typeof document<"u"){let G1=typeof document.hasFocus==="function"?document.hasFocus():!0;if(!document.hidden&&G1)return}let u=T_.current;if(!u||!u.post)return;if(E&&u.turnId&&u.turnId!==E)return;let Y0=u.post;if(Y0.id&&Y4.current===Y0.id)return;let L0=String(Y0?.data?.content||"").trim();if(!L0)return;Y4.current=Y0.id||Y4.current,T_.current=null;let Q0=L0.replace(/\s+/g," ").slice(0,200),X0=O4.current||{},n0=(Y0?.data?.agent_id?X0[Y0.data.agent_id]:null)?.name||"Pi";t1(n0,Q0)},[t1]),P_=T(async(E,u)=>{await H9({panelKey:E,expanded:u,currentTurnIdRef:J0,thoughtExpandedRef:s0,draftExpandedRef:e0,setAgentThoughtVisibility:BX,getAgentThought:UX,thoughtBufferRef:r0,draftBufferRef:l0,setAgentThought:K0,setAgentDraft:p})},[]),k4=I(null),P5=T(()=>{let E=V_.current;if(!E)return;if(!(Math.abs(E.scrollTop)>150))E.scrollTop=0},[]);k4.current=P5;let X6=T((E)=>{let u=V_.current;if(!u||typeof E!=="function"){E?.();return}let{currentHashtag:Y0,searchQuery:L0,searchOpen:Q0}=X_.current||{},X0=!((L0||Q0)&&!Y0),T0=X0?u.scrollHeight-u.scrollTop:u.scrollTop;E(),requestAnimationFrame(()=>{let n0=V_.current;if(!n0)return;if(X0){let G1=Math.max(n0.scrollHeight-T0,0);n0.scrollTop=G1}else{let G1=Math.max(n0.scrollHeight-n0.clientHeight,0),R5=Math.min(T0,G1);n0.scrollTop=R5}})},[]),N8=T((E)=>{let u=V_.current;if(!u||typeof E!=="function"){E?.();return}let Y0=u.scrollTop;E(),requestAnimationFrame(()=>{let L0=V_.current;if(!L0)return;let Q0=Math.max(L0.scrollHeight-L0.clientHeight,0);L0.scrollTop=Math.min(Y0,Q0)})},[]),v3=T((E)=>R9(E,l1.current),[]),{posts:K8,setPosts:U_,hasMore:pZ,setHasMore:V6,hasMoreRef:g3,loadPosts:r_,refreshTimeline:y_,loadMore:cZ,loadMoreRef:b3}=K9({preserveTimelineScroll:X6,preserveTimelineScrollTop:N8,chatJid:j}),N5=f0(()=>v3(K8),[K8,u0,v3]),G8=T(()=>{let E=o0.current;if(!E)return;U_((u)=>u?u.filter((Y0)=>Y0.id!==E):u),o0.current=null},[U_]),{handleSplitterMouseDown:lZ,handleSplitterTouchStart:nZ,handleEditorSplitterMouseDown:dZ,handleEditorSplitterTouchStart:iZ,handleDockSplitterMouseDown:rZ,handleDockSplitterTouchStart:oZ}=X9({appShellRef:Z4,sidebarWidthRef:m4,editorWidthRef:h4,dockHeightRef:$5}),m3=T(()=>{if(!g0.current)return;g0.current=!1,m0.current=0,k0.current=null,J0.current=null,F0(null),s0.current=!1,e0.current=!1;let E=(l0.current||"").trim();if(l0.current="",r0.current="",p({text:"",totalLines:0}),t(""),K0({text:"",totalLines:0}),V0(null),M0.current=null,T_.current=null,!E){b({type:"error",title:"Response stalled - No content received"});return}let Y0=`${E}${`

⚠️ Response may be incomplete - the model stopped responding`}`,L0=Date.now(),Q0=new Date().toISOString(),X0={id:L0,timestamp:Q0,data:{type:"agent_response",content:Y0,agent_id:"default",is_local_stall:!0}};o0.current=L0,U_((T0)=>T0?$8([...T0,X0]):[X0]),k4.current?.(),b(null)},[F0]);v(()=>{X_.current={currentHashtag:W,searchQuery:D,searchOpen:F}},[W,D,F]);let k1=T(()=>{BZ({currentChatJid:j,queueRefreshGenRef:e_,activeChatJidRef:d1,dismissedQueueRowIdsRef:a1,getAgentQueueState:bZ,setFollowupQueueItems:D0,clearQueuedSteerStateIfStale:i_})},[i_,j]),B_=T(async()=>{await LZ({currentChatJid:j,activeChatJidRef:d1,getAgentContext:f3,setContextUsage:C0})},[j]),o_=T(async()=>{await WZ({currentChatJid:j,activeChatJidRef:d1,getAutoresearchStatus:LX,setExtensionStatusPanels:S0,setPendingExtensionPanelActions:z0})},[j]),s_=T(async()=>{let E=j;try{let u=await u3(E);if(d1.current!==E)return null;if(!u||u.status!=="active"||!u.data){if(m_.current){let{currentHashtag:T0,searchQuery:n0,searchOpen:G1}=X_.current||{};if(!T0&&!n0&&!G1)y_()}return m_.current=!1,O1(),h_.current=null,b(null),p({text:"",totalLines:0}),t(""),K0({text:"",totalLines:0}),V0(null),M0.current=null,u??null}m_.current=!0;let Y0=u.data;h_.current=Y0;let L0=h8(Y0);if(L0)q5(L0);N4({running:!0,clearSilence:!0}),Z5(),b(Y0);let Q0=E5(u.thought);if(Q0)K0((T0)=>{if(r$(T0,Q0.text))return T0;return r0.current=Q0.text,Q0});let X0=E5(u.draft);if(X0)p((T0)=>{if(r$(T0,X0.text))return T0;return l0.current=X0.text,X0});return u}catch(u){return console.warn("Failed to fetch agent status:",u),null}},[O1,Z5,N4,y_,q5]),U6=T(async()=>{if(!g0.current)return null;if(M0.current)return null;let E=J0.current||null,u=Q_.current,Y0=Date.now();if(u.inFlight)return null;if(u.turnId===E&&Y0-u.lastAttemptAt<i$)return null;u.inFlight=!0,u.lastAttemptAt=Y0,u.turnId=E;try{let{currentHashtag:L0,searchQuery:Q0,searchOpen:X0}=X_.current||{};if(!L0&&!Q0&&!X0)await y_();return await k1(),await s_()}finally{u.inFlight=!1}},[s_,k1,y_]);v(()=>{let E=Math.min(1000,Math.max(100,Math.floor(d$/2))),u=setInterval(()=>{if(!g0.current)return;if(M0.current)return;let Y0=k0.current;if(!Y0)return;let L0=Date.now(),Q0=L0-Y0,X0=y4(h_.current);if(Q0>=U9){if(!X0)b({type:"waiting",title:"Re-syncing after a quiet period…"});U6();return}if(Q0>=d$){if(L0-m0.current>=i$){if(!X0){let T0=Math.floor(Q0/1000);b({type:"waiting",title:`Waiting for model… No events for ${T0}s`})}m0.current=L0,U6()}}},E);return()=>clearInterval(u)},[U6]);let h3=T((E)=>{return Wj({serverVersion:E,currentAppAssetVersion:XX,staleUiVersionRef:b4,staleUiReloadScheduledRef:Q4,tabStoreHasUnsaved:()=>t0.hasUnsaved(),isAgentRunningRef:g0,pendingRequestRef:M0,showIntentToast:c})},[g0,M0,c]),sZ=T((E)=>{Fj({status:E,setConnectionStatus:X,setAgentStatus:b,setAgentDraft:p,setAgentPlan:t,setAgentThought:K0,setPendingRequest:V0,pendingRequestRef:M0,clearAgentRunState:O1,hasConnectedOnceRef:e4,viewStateRef:X_,refreshTimeline:y_,refreshAgentStatus:s_,refreshQueueState:k1,refreshContextUsage:B_})},[O1,y_,s_,k1,B_]),aZ=T(async(E)=>{J(E),U_(null),await r_(E)},[r_]),tZ=T(async()=>{J(null),O(null),U_(null),await r_()},[r_]),eZ=T(async(E,u=k)=>{if(!E||!E.trim())return;let Y0=u==="root"||u==="all"?u:"current";m(Y0),O(E.trim()),J(null),U_(null);try{let L0=await uZ(E.trim(),50,0,j,Y0,f1);U_(L0.results),V6(!1)}catch(L0){console.error("Failed to search:",L0),U_([])}},[j,f1,k]),_Y=T(()=>{A(!0),O(null),J(null),m("current"),U_([])},[]),$Y=T(()=>{A(!1),O(null),r_()},[r_]),EX=T(()=>{},[]),jY=!W&&!D&&!F,QY=T(async(E)=>{if(!E)return;let u=E.id,Y0=typeof E?.chat_jid==="string"&&E.chat_jid.trim()?E.chat_jid.trim():j,L0=N5?.filter((X0)=>X0?.data?.thread_id===u&&X0?.id!==u).length||0;if(L0>0){if(!window.confirm(`Delete this message and its ${L0} replies?`))return}let Q0=(X0)=>{if(!X0.length)return;V1((n0)=>{let G1=new Set(n0);return X0.forEach((R5)=>G1.add(R5)),G1}),setTimeout(()=>{if(N8(()=>{U_((n0)=>n0?n0.filter((G1)=>!X0.includes(G1.id)):n0)}),V1((n0)=>{let G1=new Set(n0);return X0.forEach((R5)=>G1.delete(R5)),G1}),g3.current)b3.current?.({preserveScroll:!0,preserveMode:"top"})},180)};try{let X0=await fZ(u,L0>0,Y0);if(X0?.ids?.length)Q0(X0.ids)}catch(X0){let T0=X0?.message||"";if(L0===0&&T0.includes("Replies exist")){if(!window.confirm("Delete this message and its replies?"))return;let G1=await fZ(u,!0,Y0);if(G1?.ids?.length)Q0(G1.ids);return}console.error("Failed to delete post:",X0),alert(`Failed to delete message: ${T0}`)}},[j,N5,N8]),p3=T(async()=>{await b9({getAgents:VX,setAgents:N1,setUserProfile:b_,applyBranding:p1})},[p1]);v(()=>{p3(),CZ({readStoredNumber:o5,sidebarWidthRef:m4,shellElement:Z4.current})},[p3]);let y5=j0||C!==null,c3=T((E)=>{m9({payload:E,agentsRef:O4,setAgents:N1,applyBranding:p1})},[p1]),l3=T((E)=>{h9({payload:E,setUserProfile:b_})},[]),S5=T((E)=>{p9({payload:E,setActiveModel:F1,setActiveThinkingLevel:_1,setSupportsThinking:v0,setActiveModelUsage:r})},[]),X8=T(()=>{c9({currentChatJid:j,getAgentModels:vZ,activeChatJidRef:d1,applyModelState:S5})},[S5,j]),i1=T(()=>{l9({currentChatJid:j,getActiveChatAgents:gZ,getChatBranches:G6,activeChatJidRef:d1,setActiveChatAgents:h})},[j]),r1=T(()=>{n9({currentRootChatJid:f1,getChatBranches:G6,setCurrentChatBranches:O0})},[f1]),ZY=T((E)=>{GQ({queuedItem:E,followupQueueItemsRef:j1,dismissedQueueRowIdsRef:a1,currentChatJid:j,refreshQueueState:k1,setFollowupQueueItems:D0,showIntentToast:c,steerAgentQueueItem:mZ,removeAgentQueueItem:hZ})},[j,k1,D0,c]),YY=T((E)=>{XQ({queuedItem:E,followupQueueItemsRef:j1,dismissedQueueRowIdsRef:a1,currentChatJid:j,refreshQueueState:k1,setFollowupQueueItems:D0,showIntentToast:c,clearQueuedSteerStateIfStale:i_,steerAgentQueueItem:mZ,removeAgentQueueItem:hZ})},[i_,j,k1,D0,c]),w5=T((E)=>{d9({response:E,refreshActiveChatAgents:i1,refreshCurrentChatBranches:r1,refreshContextUsage:B_,refreshAutoresearchStatus:o_,refreshQueueState:k1})},[i1,o_,r1,B_,k1]),qY=T(async(E,u)=>{let Y0=typeof E?.key==="string"?E.key:"",L0=typeof u?.key==="string"?u.key:"",Q0=j3(Y0,L0);if(!Y0||!L0)return;z0((X0)=>wj(X0,Y0,L0));try{let X0=await uj({panel:E,action:u,currentChatJid:j,stopAutoresearch:WX,dismissAutoresearch:FX,writeClipboard:(T0)=>navigator.clipboard.writeText(T0)});if(X0.refreshAutoresearchStatus)o_();if(X0.toast)c(X0.toast.title,X0.toast.detail,X0.toast.kind,X0.toast.durationMs)}catch(X0){c("Panel action failed",X0?.message||"Could not complete that action.","warning")}finally{z0((X0)=>Rj(X0,Q0))}},[j,o_,c]),B6=T(()=>{if(z_.current)z_.current.abort(),z_.current=null;G0(null)},[]),V8=T(async(E)=>{let u=String(E||"").trim();if(!u)return c("BTW needs a question","Usage: /btw <question>","warning"),!0;if(z_.current)z_.current.abort();let Y0=new AbortController;z_.current=Y0,G0({question:u,answer:"",thinking:"",error:null,model:null,status:"running"});try{let L0=await OX(u,{signal:Y0.signal,chatJid:A9(j),systemPrompt:"Answer the user briefly and directly. This is a side conversation that should not affect the main chat until explicitly injected.",onEvent:(Q0,X0)=>{if(Q0==="side_prompt_start")G0((T0)=>T0?{...T0,status:"running"}:T0)},onThinkingDelta:(Q0)=>{G0((X0)=>X0?{...X0,thinking:`${X0.thinking||""}${Q0||""}`}:X0)},onTextDelta:(Q0)=>{G0((X0)=>X0?{...X0,answer:`${X0.answer||""}${Q0||""}`}:X0)}});if(z_.current!==Y0)return!0;G0((Q0)=>Q0?{...Q0,answer:L0?.result||Q0.answer||"",thinking:L0?.thinking||Q0.thinking||"",model:L0?.model||null,status:"success",error:null}:Q0)}catch(L0){if(Y0.signal.aborted)return!0;G0((Q0)=>Q0?{...Q0,status:"error",error:L0?.payload?.error||L0?.message||"BTW request failed."}:Q0)}finally{if(z_.current===Y0)z_.current=null}return!0},[j,c]),NY=T(async({content:E})=>{let u=O9(E);if(!u)return!1;if(u.type==="help")return c("BTW usage","Use /btw <question> to open a side conversation.","info",4000),!0;if(u.type==="clear")return B6(),c("BTW cleared","Closed the side conversation panel.","info"),!0;if(u.type==="ask")return await V8(u.question),!0;return!1},[B6,V8,c]),KY=T(()=>{if(s?.question)V8(s.question)},[s,V8]),GY=T(async()=>{let E=k9(s);if(!E)return;try{let u=await n4("default",E,null,[],y5?"queue":null,j);w5(u),c(u?.queued==="followup"?"BTW queued":"BTW injected",u?.queued==="followup"?"The BTW summary was queued as a follow-up because the agent is busy.":"The BTW summary was sent to the main chat.","info",3500)}catch(u){c("BTW inject failed",u?.message||"Could not inject BTW answer into chat.","warning")}},[s,w5,y5,c]),n3=T(async(E=null)=>{return KQ({requestPayload:E,currentChatJid:j,currentRootChatJid:f1,getAgentStatus:u3,getAgentContext:f3,getAgentQueueState:bZ,getAgentModels:vZ,getActiveChatAgents:gZ,getChatBranches:G6,getTimeline:l4,rawPosts:K8,activeChatAgents:N0,currentChatBranches:i,contextUsage:I0,followupQueueItems:j1.current,activeModel:i0,activeThinkingLevel:Z1,supportsThinking:W0,isAgentTurnActive:j0})},[N0,i0,Z1,I0,i,j,f1,j0,K8,W0]),K5=T(()=>{FZ({refreshModelState:X8,refreshActiveChatAgents:i1,refreshCurrentChatBranches:r1,refreshQueueState:k1,refreshContextUsage:B_,refreshAutoresearchStatus:o_})},[i1,o_,B_,r1,X8,k1]);v(()=>{K5();let E=setInterval(()=>{X8(),i1(),r1(),k1()},60000);return()=>clearInterval(E)},[K5,X8,i1,r1,k1]),v(()=>{S0(new Map),z0(new Set)},[j]),v(()=>{let E=!1;return PZ({currentHashtag:W,searchQuery:D,searchScope:k,currentChatJid:j,currentRootChatJid:f1,loadPosts:r_,searchPosts:uZ,setPosts:U_,setHasMore:V6,scrollToBottom:P5,isCancelled:()=>E}),()=>{E=!0}},[j,W,D,k,f1,r_,P5,V6,U_]),v(()=>{let E=J4.current||j;H4.current.set(E,Y5())},[j,Y5]),v(()=>{let E=J4.current||j;if(E===j)return;H4.current.set(E,Y5()),J4.current=j,a1.current.clear(),q8(H4.current.get(j)||null),k1(),s_(),B_()},[j,s_,B_,k1,q8,Y5]);let XY=T(()=>{zZ({viewStateRef:X_,refreshTimeline:y_,refreshModelAndQueueState:K5})},[K5,y_]),d3=T((E,u="streaming")=>{let Y0=new Date().toISOString();p0((L0)=>oj(L0,E,{fallbackStatus:u,currentChatJid:j,dismissedSessionKeys:$1.current,updatedAt:Y0}))},[j]),L6=T((E,u)=>{TZ(E,u,{currentChatJid:j,updateAgentProfile:c3,updateUserProfile:l3,currentTurnIdRef:J0,activeChatJidRef:d1,pendingRequestRef:M0,draftBufferRef:l0,thoughtBufferRef:r0,steerQueuedTurnIdRef:P0,thoughtExpandedRef:s0,draftExpandedRef:e0,draftThrottleRef:T5,thoughtThrottleRef:E1,viewStateRef:X_,followupQueueItemsRef:j1,dismissedQueueRowIdsRef:a1,scrollToBottomRef:k4,hasMoreRef:g3,loadMoreRef:b3,lastAgentResponseRef:T_,wasAgentActiveRef:m_,setActiveTurn:q5,applyLiveGeneratedWidgetUpdate:d3,setFloatingWidget:p0,clearLastActivityFlag:Z5,handleUiVersionDrift:h3,setAgentStatus:b,setAgentDraft:p,setAgentPlan:t,setAgentThought:K0,setPendingRequest:V0,clearAgentRunState:O1,getAgentStatus:u3,noteAgentActivity:N4,showLastActivity:D4,refreshTimeline:y_,refreshModelAndQueueState:K5,refreshActiveChatAgents:i1,refreshCurrentChatBranches:r1,notifyForFinalResponse:E4,setContextUsage:C0,refreshContextUsage:B_,refreshQueueState:k1,setFollowupQueueItems:D0,clearQueuedSteerStateIfStale:i_,setSteerQueuedTurnId:x0,applyModelState:S5,getAgentContext:f3,setExtensionStatusPanels:S0,setPendingExtensionPanelActions:z0,refreshActiveEditorFromWorkspace:g4,showIntentToast:c,removeStalledPost:G8,setPosts:U_,preserveTimelineScrollTop:N8})},[d3,S5,O1,Z5,i_,j,h3,N4,E4,i1,g4,B_,r1,K5,k1,y_,G8,q5,D0,c,D4,c3,l3]);v(()=>{if(typeof window>"u")return;let E=window.__PICLAW_TEST_API||{};return E.emit=L6,E.reset=()=>{G8(),O1(),b(null),p({text:"",totalLines:0}),t(""),K0({text:"",totalLines:0}),V0(null)},E.finalize=()=>m3(),window.__PICLAW_TEST_API=E,()=>{if(window.__PICLAW_TEST_API===E)window.__PICLAW_TEST_API=void 0}},[O1,m3,L6,G8]),q9({handleSseEvent:L6,handleConnectionStatusChange:sZ,loadPosts:r_,onWake:XY,chatJid:j}),v(()=>{if(!N5||N5.length===0)return;let E=location.hash;if(!E||!E.startsWith("#msg-"))return;let u=E.slice(5);w1(u),history.replaceState(null,"",location.pathname+location.search)},[N5,w1]);let W6=C!==null;v(()=>{if(G!=="connected")return;let u=setInterval(()=>{zj({viewStateRef:X_,isAgentActive:W6,refreshTimeline:y_,refreshQueueState:k1,refreshAgentStatus:s_,refreshContextUsage:B_,refreshAutoresearchStatus:o_})},W6?15000:60000);return()=>clearInterval(u)},[G,W6,s_,o_,B_,k1,y_]),v(()=>{return s9(()=>{s_(),B_(),k1(),o_()})},[s_,o_,B_,k1]);let VY=T(()=>{W_((E)=>!E)},[]),UY=T((E)=>{yZ({hasWindow:typeof window<"u",nextChatJid:E,currentChatJid:j,chatOnlyMode:Q,currentHref:typeof window<"u"?window.location.href:"http://localhost/",navigate:$})},[Q,j,$]),F6=T(()=>{Hj({hasWindow:typeof window<"u",currentBranchRecord:M1,renameBranchInFlight:M.current,renameBranchLockUntil:d.current,getFormLock:e$,setRenameBranchNameDraft:$0,setIsRenameBranchFormOpen:U0})},[M1]),z6=T(()=>{Jj({setIsRenameBranchFormOpen:U0,setRenameBranchNameDraft:$0})},[]),BY=T(async(E)=>{await Oj({hasWindow:typeof window<"u",currentBranchRecord:M1,nextName:E,openRenameForm:F6,renameBranchInFlightRef:M,renameBranchLockUntilRef:d,getFormLock:e$,setIsRenamingBranch:S,renameChatBranch:zX,refreshActiveChatAgents:i1,refreshCurrentChatBranches:r1,showIntentToast:c,closeRenameForm:z6})},[z6,M1,i1,r1,F6,S,c]),LY=T(async(E=null)=>{await Aj({hasWindow:typeof window<"u",targetChatJid:E,currentChatJid:j,currentBranchRecord:M1,currentChatBranches:i,activeChatAgents:N0,pruneChatBranch:HX,refreshActiveChatAgents:i1,refreshCurrentChatBranches:r1,showIntentToast:c,baseHref:typeof window<"u"?window.location.href:"http://localhost/",chatOnlyMode:Q,navigate:$})},[N0,Q,M1,i,j,$,i1,r1,c]),WY=T(async(E)=>{await Dj({targetChatJid:E,restoreChatBranch:JX,currentChatBranches:i,refreshActiveChatAgents:i1,refreshCurrentChatBranches:r1,showIntentToast:c,baseHref:typeof window<"u"?window.location.href:"http://localhost/",chatOnlyMode:Q,navigate:$})},[Q,i,$,i1,r1,c]);v(()=>{if(!N||typeof window>"u")return;let E=!1;return Ej({branchLoaderSourceChatJid:K,forkChatBranch:f5,setBranchLoaderState:b1,navigate:$,baseHref:window.location.href,isCancelled:()=>E}),()=>{E=!0}},[N,K,$]);let FY=T((E)=>{VQ({widget:E,dismissedLiveWidgetKeysRef:$1,setFloatingWidget:p0})},[]),H6=T(()=>{UQ({dismissedLiveWidgetKeysRef:$1,setFloatingWidget:p0})},[]),zY=T((E,u)=>{BQ({event:E,widget:u,currentChatJid:j,isComposeBoxAgentActive:y5,setFloatingWidget:p0,handleCloseFloatingWidget:H6,handleMessageResponse:w5,showIntentToast:c,sendAgentMessage:n4,buildFloatingWidgetDashboardSnapshot:n3})},[n3,j,H6,w5,y5,c]);v(()=>{$1.current.clear(),p0(null)},[j]);let HY=T(async()=>{await kj({currentChatJid:j,chatOnlyMode:Q,forkChatBranch:f5,refreshActiveChatAgents:i1,refreshCurrentChatBranches:r1,showIntentToast:c,navigate:$,baseHref:typeof window<"u"?window.location.href:"http://localhost/"})},[Q,j,$,i1,r1,c]),J6=T(async(E,u)=>{await Mj({hasWindow:typeof window<"u",isWebAppMode:V,path:E,label:u,showIntentToast:c,currentChatJid:j,baseHref:typeof window<"u"?window.location.href:"http://localhost/",resolveSourceTransfer:(Y0)=>SZ({panePath:Y0,tabStripActiveId:K1,editorInstanceRef:T1,dockInstanceRef:Y_,terminalTabPath:d4}),closeSourcePaneIfTransferred:(Y0)=>{wZ({panePath:Y0,terminalTabPath:d4,dockVisible:n1,resolveTab:(L0)=>t0.get(L0),closeTab:D_,setDockVisible:D1})}})},[j,n1,D_,V,c,K1]);v(()=>a9({openTab:(E,u)=>m1(E,u?{label:u}:void 0),popOutPane:(E,u)=>{J6(E,u)}}),[J6,m1]);let JY=T(async()=>{await Ij({hasWindow:typeof window<"u",isWebAppMode:V,currentChatJid:j,currentRootChatJid:f1,forkChatBranch:f5,getActiveChatAgents:f6,getChatBranches:G6,setActiveChatAgents:h,setCurrentChatBranches:O0,showIntentToast:c,baseHref:typeof window<"u"?window.location.href:"http://localhost/"})},[j,f1,V,c]);v(()=>{RZ({hasWindow:typeof window<"u",editorOpen:C1,shellElement:Z4.current,editorWidthRef:h4,dockHeightRef:$5,sidebarWidthRef:m4,readStoredNumber:o5})},[C1]),v(()=>{if(!M_||Q)return;return t9(v1)},[v1,M_,Q]),v(()=>{if(Q)return;return e9({toggleZenMode:v4,exitZenMode:x_,zenMode:H1,isZenModeActive:()=>H1})},[v4,x_,H1,Q]);let OY=Boolean(b0&&b0===(C?.turn_id||H0)),i3=WQ({branchLoaderMode:N,panePopoutMode:Z});if(i3==="branch-loader")return FQ(j_);if(i3==="pane-popout")return zQ({appShellRef:Z4,editorOpen:C1,hidePanePopoutControls:G_,panePopoutHasMenuActions:h1,panePopoutTitle:d_,tabStripTabs:e1,tabStripActiveId:K1,handleTabActivate:j4,previewTabs:P1,handleTabTogglePreview:u_,editorContainerRef:Y1,getPaneContent:()=>T1.current?.getContent?.(),panePopoutPath:Y});return KZ({appShellRef:Z4,workspaceOpen:z1,editorOpen:C1,chatOnlyMode:Q,zenMode:H1,isRenameBranchFormOpen:Z0,closeRenameCurrentBranchForm:z6,handleRenameCurrentBranch:BY,renameBranchNameDraft:B0,renameBranchNameInputRef:S1,setRenameBranchNameDraft:$0,renameBranchDraftState:w0,isRenamingBranch:R,addFileRef:C5,openEditor:m1,openTerminalTab:U1,openVncTab:q_,hasDockPanes:M_,toggleDock:v1,dockVisible:n1,handleSplitterMouseDown:lZ,handleSplitterTouchStart:nZ,showEditorPaneContainer:f_,tabStripTabs:e1,tabStripActiveId:K1,handleTabActivate:j4,handleTabClose:D_,handleTabCloseOthers:E_,handleTabCloseAll:F4,handleTabTogglePin:k_,handleTabTogglePreview:u_,handleTabEditSource:u4,previewTabs:P1,tabPaneOverrides:Z_,toggleZenMode:v4,handlePopOutPane:J6,isWebAppMode:V,editorContainerRef:Y1,editorInstanceRef:T1,handleDockSplitterMouseDown:rZ,handleDockSplitterTouchStart:oZ,TERMINAL_TAB_PATH:d4,dockContainerRef:z4,handleEditorSplitterMouseDown:dZ,handleEditorSplitterTouchStart:iZ,searchQuery:D,isIOSDevice:W9,currentBranchRecord:M1,currentChatJid:j,currentChatBranches:i,handleBranchPickerChange:UY,formatBranchPickerLabel:d8,openRenameCurrentBranchForm:F6,handlePruneCurrentBranch:LY,currentHashtag:W,handleBackToTimeline:tZ,activeSearchScopeLabel:R_,posts:N5,isMainTimelineView:jY,hasMore:pZ,loadMore:cZ,timelineRef:V_,handleHashtagClick:aZ,addMessageRef:y1,scrollToMessage:w1,openFileFromPill:y0,handleDeletePost:QY,handleOpenFloatingWidget:FY,agents:u1,userProfile:g_,removingPostIds:x1,agentStatus:C,isCompactionStatus:y4,agentDraft:e,agentPlan:a,agentThought:_0,pendingRequest:q0,intentToast:x,currentTurnId:H0,steerQueued:OY,handlePanelToggle:P_,btwSession:s,closeBtwPanel:B6,handleBtwRetry:KY,handleBtwInject:GY,floatingWidget:E0,handleCloseFloatingWidget:H6,handleFloatingWidgetEvent:zY,extensionStatusPanels:A0,pendingExtensionPanelActions:h0,handleExtensionPanelAction:qY,searchOpen:F,followupQueueItems:u0,handleInjectQueuedFollowup:ZY,handleRemoveQueuedFollowup:YY,viewStateRef:X_,loadPosts:r_,scrollToBottom:P5,searchScope:k,handleSearch:eZ,setSearchScope:m,enterSearchMode:_Y,exitSearchMode:$Y,fileRefs:f,removeFileRef:L,clearFileRefs:w,setFileRefsFromCompose:n,messageRefs:o,removeMessageRef:q4,clearMessageRefs:c4,setMessageRefsFromCompose:j5,handleCreateSessionFromCompose:HY,handleRestoreBranch:WY,attachActiveEditorFile:J1,followupQueueCount:s1,handleBtwIntercept:NY,handleMessageResponse:w5,handleComposeSubmitError:Q5,handlePopOutChat:JY,isComposeBoxAgentActive:y5,activeChatAgents:N0,connectionStatus:G,activeModel:i0,activeModelUsage:Q1,activeThinkingLevel:Z1,supportsThinking:W0,contextUsage:I0,notificationsEnabled:_4,notificationPermission:n_,handleToggleNotifications:I1,setActiveModel:F1,applyModelState:S5,setPendingRequest:V0,pendingRequestRef:M0,toggleWorkspace:VY})}function DX(){let[_,$]=g(()=>typeof window>"u"?"http://localhost/":window.location.href);v(()=>{if(typeof window>"u")return;let Z=()=>$(window.location.href);return window.addEventListener("popstate",Z),()=>window.removeEventListener("popstate",Z)},[]);let j=T((Z,Y={})=>{if(typeof window>"u")return;let{replace:q=!1}=Y||{},N=new URL(String(Z||""),window.location.href).toString();if(q)window.history.replaceState(null,"",N);else window.history.pushState(null,"",N);$(window.location.href)},[]),Q=f0(()=>new URL(_).searchParams,[_]);return B`<${AX} locationParams=${Q} navigate=${j} />`}x4(B`<${DX} />`,document.getElementById("app"));

//# debugId=62D4F471B518949E64756E2164756E21
//# sourceMappingURL=app.bundle.js.map
