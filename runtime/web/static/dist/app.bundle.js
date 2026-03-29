var yY=Object.defineProperty;var SY=(_)=>_;function wY(_,$){this[_]=SY.bind(null,$)}var RY=(_,$)=>{for(var j in $)yY(_,j,{get:$[j],enumerable:!0,configurable:!0,set:wY.bind($,j)})};var z8,L1,Y2,uY,M4,i3,q2,K2,N2,k6,J6,O6,G2,B8={},W8=[],fY=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,H8=Array.isArray;function N4(_,$){for(var j in $)_[j]=$[j];return _}function M6(_){_&&_.parentNode&&_.parentNode.removeChild(_)}function J8(_,$,j){var Q,Z,Y,q={};for(Y in $)Y=="key"?Q=$[Y]:Y=="ref"?Z=$[Y]:q[Y]=$[Y];if(arguments.length>2&&(q.children=arguments.length>3?z8.call(arguments,2):j),typeof _=="function"&&_.defaultProps!=null)for(Y in _.defaultProps)q[Y]===void 0&&(q[Y]=_.defaultProps[Y]);return U8(_,q,Q,Z,null)}function U8(_,$,j,Q,Z){var Y={type:_,props:$,key:j,ref:Q,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:Z==null?++Y2:Z,__i:-1,__u:0};return Z==null&&L1.vnode!=null&&L1.vnode(Y),Y}function O8(_){return _.children}function G5(_,$){this.props=_,this.context=$}function X5(_,$){if($==null)return _.__?X5(_.__,_.__i+1):null;for(var j;$<_.__k.length;$++)if((j=_.__k[$])!=null&&j.__e!=null)return j.__e;return typeof _.type=="function"?X5(_):null}function vY(_){if(_.__P&&_.__d){var $=_.__v,j=$.__e,Q=[],Z=[],Y=N4({},$);Y.__v=$.__v+1,L1.vnode&&L1.vnode(Y),I6(_.__P,Y,$,_.__n,_.__P.namespaceURI,32&$.__u?[j]:null,Q,j==null?X5($):j,!!(32&$.__u),Z),Y.__v=$.__v,Y.__.__k[Y.__i]=Y,L2(Q,Y,Z),$.__e=$.__=null,Y.__e!=j&&X2(Y)}}function X2(_){if((_=_.__)!=null&&_.__c!=null)return _.__e=_.__c.base=null,_.__k.some(function($){if($!=null&&$.__e!=null)return _.__e=_.__c.base=$.__e}),X2(_)}function A6(_){(!_.__d&&(_.__d=!0)&&M4.push(_)&&!F8.__r++||i3!=L1.debounceRendering)&&((i3=L1.debounceRendering)||q2)(F8)}function F8(){try{for(var _,$=1;M4.length;)M4.length>$&&M4.sort(K2),_=M4.shift(),$=M4.length,vY(_)}finally{M4.length=F8.__r=0}}function V2(_,$,j,Q,Z,Y,q,K,N,G,X){var V,U,L,J,D,O,W,A=Q&&Q.__k||W8,E=$.length;for(N=gY(j,$,A,N,E),V=0;V<E;V++)(L=j.__k[V])!=null&&(U=L.__i!=-1&&A[L.__i]||B8,L.__i=V,O=I6(_,L,U,Z,Y,q,K,N,G,X),J=L.__e,L.ref&&U.ref!=L.ref&&(U.ref&&x6(U.ref,null,L),X.push(L.ref,L.__c||J,L)),D==null&&J!=null&&(D=J),(W=!!(4&L.__u))||U.__k===L.__k?N=U2(L,N,_,W):typeof L.type=="function"&&O!==void 0?N=O:J&&(N=J.nextSibling),L.__u&=-7);return j.__e=D,N}function gY(_,$,j,Q,Z){var Y,q,K,N,G,X=j.length,V=X,U=0;for(_.__k=Array(Z),Y=0;Y<Z;Y++)(q=$[Y])!=null&&typeof q!="boolean"&&typeof q!="function"?(typeof q=="string"||typeof q=="number"||typeof q=="bigint"||q.constructor==String?q=_.__k[Y]=U8(null,q,null,null,null):H8(q)?q=_.__k[Y]=U8(O8,{children:q},null,null,null):q.constructor===void 0&&q.__b>0?q=_.__k[Y]=U8(q.type,q.props,q.key,q.ref?q.ref:null,q.__v):_.__k[Y]=q,N=Y+U,q.__=_,q.__b=_.__b+1,K=null,(G=q.__i=bY(q,j,N,V))!=-1&&(V--,(K=j[G])&&(K.__u|=2)),K==null||K.__v==null?(G==-1&&(Z>X?U--:Z<X&&U++),typeof q.type!="function"&&(q.__u|=4)):G!=N&&(G==N-1?U--:G==N+1?U++:(G>N?U--:U++,q.__u|=4))):_.__k[Y]=null;if(V)for(Y=0;Y<X;Y++)(K=j[Y])!=null&&(2&K.__u)==0&&(K.__e==Q&&(Q=X5(K)),W2(K,K));return Q}function U2(_,$,j,Q){var Z,Y;if(typeof _.type=="function"){for(Z=_.__k,Y=0;Z&&Y<Z.length;Y++)Z[Y]&&(Z[Y].__=_,$=U2(Z[Y],$,j,Q));return $}_.__e!=$&&(Q&&($&&_.type&&!$.parentNode&&($=X5(_)),j.insertBefore(_.__e,$||null)),$=_.__e);do $=$&&$.nextSibling;while($!=null&&$.nodeType==8);return $}function bY(_,$,j,Q){var Z,Y,q,K=_.key,N=_.type,G=$[j],X=G!=null&&(2&G.__u)==0;if(G===null&&K==null||X&&K==G.key&&N==G.type)return j;if(Q>(X?1:0)){for(Z=j-1,Y=j+1;Z>=0||Y<$.length;)if((G=$[q=Z>=0?Z--:Y++])!=null&&(2&G.__u)==0&&K==G.key&&N==G.type)return q}return-1}function r3(_,$,j){$[0]=="-"?_.setProperty($,j==null?"":j):_[$]=j==null?"":typeof j!="number"||fY.test($)?j:j+"px"}function V8(_,$,j,Q,Z){var Y,q;_:if($=="style")if(typeof j=="string")_.style.cssText=j;else{if(typeof Q=="string"&&(_.style.cssText=Q=""),Q)for($ in Q)j&&$ in j||r3(_.style,$,"");if(j)for($ in j)Q&&j[$]==Q[$]||r3(_.style,$,j[$])}else if($[0]=="o"&&$[1]=="n")Y=$!=($=$.replace(N2,"$1")),q=$.toLowerCase(),$=q in _||$=="onFocusOut"||$=="onFocusIn"?q.slice(2):$.slice(2),_.l||(_.l={}),_.l[$+Y]=j,j?Q?j.u=Q.u:(j.u=k6,_.addEventListener($,Y?O6:J6,Y)):_.removeEventListener($,Y?O6:J6,Y);else{if(Z=="http://www.w3.org/2000/svg")$=$.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if($!="width"&&$!="height"&&$!="href"&&$!="list"&&$!="form"&&$!="tabIndex"&&$!="download"&&$!="rowSpan"&&$!="colSpan"&&$!="role"&&$!="popover"&&$ in _)try{_[$]=j==null?"":j;break _}catch(K){}typeof j=="function"||(j==null||j===!1&&$[4]!="-"?_.removeAttribute($):_.setAttribute($,$=="popover"&&j==1?"":j))}}function o3(_){return function($){if(this.l){var j=this.l[$.type+_];if($.t==null)$.t=k6++;else if($.t<j.u)return;return j(L1.event?L1.event($):$)}}}function I6(_,$,j,Q,Z,Y,q,K,N,G){var X,V,U,L,J,D,O,W,A,E,f,u,c,r,P,I=$.type;if($.constructor!==void 0)return null;128&j.__u&&(N=!!(32&j.__u),Y=[K=$.__e=j.__e]),(X=L1.__b)&&X($);_:if(typeof I=="function")try{if(W=$.props,A=I.prototype&&I.prototype.render,E=(X=I.contextType)&&Q[X.__c],f=X?E?E.props.value:X.__:Q,j.__c?O=(V=$.__c=j.__c).__=V.__E:(A?$.__c=V=new I(W,f):($.__c=V=new G5(W,f),V.constructor=I,V.render=hY),E&&E.sub(V),V.state||(V.state={}),V.__n=Q,U=V.__d=!0,V.__h=[],V._sb=[]),A&&V.__s==null&&(V.__s=V.state),A&&I.getDerivedStateFromProps!=null&&(V.__s==V.state&&(V.__s=N4({},V.__s)),N4(V.__s,I.getDerivedStateFromProps(W,V.__s))),L=V.props,J=V.state,V.__v=$,U)A&&I.getDerivedStateFromProps==null&&V.componentWillMount!=null&&V.componentWillMount(),A&&V.componentDidMount!=null&&V.__h.push(V.componentDidMount);else{if(A&&I.getDerivedStateFromProps==null&&W!==L&&V.componentWillReceiveProps!=null&&V.componentWillReceiveProps(W,f),$.__v==j.__v||!V.__e&&V.shouldComponentUpdate!=null&&V.shouldComponentUpdate(W,V.__s,f)===!1){$.__v!=j.__v&&(V.props=W,V.state=V.__s,V.__d=!1),$.__e=j.__e,$.__k=j.__k,$.__k.some(function(z){z&&(z.__=$)}),W8.push.apply(V.__h,V._sb),V._sb=[],V.__h.length&&q.push(V);break _}V.componentWillUpdate!=null&&V.componentWillUpdate(W,V.__s,f),A&&V.componentDidUpdate!=null&&V.__h.push(function(){V.componentDidUpdate(L,J,D)})}if(V.context=f,V.props=W,V.__P=_,V.__e=!1,u=L1.__r,c=0,A)V.state=V.__s,V.__d=!1,u&&u($),X=V.render(V.props,V.state,V.context),W8.push.apply(V.__h,V._sb),V._sb=[];else do V.__d=!1,u&&u($),X=V.render(V.props,V.state,V.context),V.state=V.__s;while(V.__d&&++c<25);V.state=V.__s,V.getChildContext!=null&&(Q=N4(N4({},Q),V.getChildContext())),A&&!U&&V.getSnapshotBeforeUpdate!=null&&(D=V.getSnapshotBeforeUpdate(L,J)),r=X!=null&&X.type===O8&&X.key==null?B2(X.props.children):X,K=V2(_,H8(r)?r:[r],$,j,Q,Z,Y,q,K,N,G),V.base=$.__e,$.__u&=-161,V.__h.length&&q.push(V),O&&(V.__E=V.__=null)}catch(z){if($.__v=null,N||Y!=null)if(z.then){for($.__u|=N?160:128;K&&K.nodeType==8&&K.nextSibling;)K=K.nextSibling;Y[Y.indexOf(K)]=null,$.__e=K}else{for(P=Y.length;P--;)M6(Y[P]);D6($)}else $.__e=j.__e,$.__k=j.__k,z.then||D6($);L1.__e(z,$,j)}else Y==null&&$.__v==j.__v?($.__k=j.__k,$.__e=j.__e):K=$.__e=mY(j.__e,$,j,Q,Z,Y,q,N,G);return(X=L1.diffed)&&X($),128&$.__u?void 0:K}function D6(_){_&&(_.__c&&(_.__c.__e=!0),_.__k&&_.__k.some(D6))}function L2(_,$,j){for(var Q=0;Q<j.length;Q++)x6(j[Q],j[++Q],j[++Q]);L1.__c&&L1.__c($,_),_.some(function(Z){try{_=Z.__h,Z.__h=[],_.some(function(Y){Y.call(Z)})}catch(Y){L1.__e(Y,Z.__v)}})}function B2(_){return typeof _!="object"||_==null||_.__b>0?_:H8(_)?_.map(B2):N4({},_)}function mY(_,$,j,Q,Z,Y,q,K,N){var G,X,V,U,L,J,D,O=j.props||B8,W=$.props,A=$.type;if(A=="svg"?Z="http://www.w3.org/2000/svg":A=="math"?Z="http://www.w3.org/1998/Math/MathML":Z||(Z="http://www.w3.org/1999/xhtml"),Y!=null){for(G=0;G<Y.length;G++)if((L=Y[G])&&"setAttribute"in L==!!A&&(A?L.localName==A:L.nodeType==3)){_=L,Y[G]=null;break}}if(_==null){if(A==null)return document.createTextNode(W);_=document.createElementNS(Z,A,W.is&&W),K&&(L1.__m&&L1.__m($,Y),K=!1),Y=null}if(A==null)O===W||K&&_.data==W||(_.data=W);else{if(Y=Y&&z8.call(_.childNodes),!K&&Y!=null)for(O={},G=0;G<_.attributes.length;G++)O[(L=_.attributes[G]).name]=L.value;for(G in O)L=O[G],G=="dangerouslySetInnerHTML"?V=L:G=="children"||(G in W)||G=="value"&&("defaultValue"in W)||G=="checked"&&("defaultChecked"in W)||V8(_,G,null,L,Z);for(G in W)L=W[G],G=="children"?U=L:G=="dangerouslySetInnerHTML"?X=L:G=="value"?J=L:G=="checked"?D=L:K&&typeof L!="function"||O[G]===L||V8(_,G,L,O[G],Z);if(X)K||V&&(X.__html==V.__html||X.__html==_.innerHTML)||(_.innerHTML=X.__html),$.__k=[];else if(V&&(_.innerHTML=""),V2($.type=="template"?_.content:_,H8(U)?U:[U],$,j,Q,A=="foreignObject"?"http://www.w3.org/1999/xhtml":Z,Y,q,Y?Y[0]:j.__k&&X5(j,0),K,N),Y!=null)for(G=Y.length;G--;)M6(Y[G]);K||(G="value",A=="progress"&&J==null?_.removeAttribute("value"):J!=null&&(J!==_[G]||A=="progress"&&!J||A=="option"&&J!=O[G])&&V8(_,G,J,O[G],Z),G="checked",D!=null&&D!=_[G]&&V8(_,G,D,O[G],Z))}return _}function x6(_,$,j){try{if(typeof _=="function"){var Q=typeof _.__u=="function";Q&&_.__u(),Q&&$==null||(_.__u=_($))}else _.current=$}catch(Z){L1.__e(Z,j)}}function W2(_,$,j){var Q,Z;if(L1.unmount&&L1.unmount(_),(Q=_.ref)&&(Q.current&&Q.current!=_.__e||x6(Q,null,$)),(Q=_.__c)!=null){if(Q.componentWillUnmount)try{Q.componentWillUnmount()}catch(Y){L1.__e(Y,$)}Q.base=Q.__P=null}if(Q=_.__k)for(Z=0;Z<Q.length;Z++)Q[Z]&&W2(Q[Z],$,j||typeof _.type!="function");j||M6(_.__e),_.__c=_.__=_.__e=void 0}function hY(_,$,j){return this.constructor(_,j)}function x4(_,$,j){var Q,Z,Y,q;$==document&&($=document.documentElement),L1.__&&L1.__(_,$),Z=(Q=typeof j=="function")?null:j&&j.__k||$.__k,Y=[],q=[],I6($,_=(!Q&&j||$).__k=J8(O8,null,[_]),Z||B8,B8,$.namespaceURI,!Q&&j?[j]:Z?null:$.firstChild?z8.call($.childNodes):null,Y,!Q&&j?j:Z?Z.__e:$.firstChild,Q,q),L2(Y,_,q)}function F2(_){function $(j){var Q,Z;return this.getChildContext||(Q=new Set,(Z={})[$.__c]=this,this.getChildContext=function(){return Z},this.componentWillUnmount=function(){Q=null},this.shouldComponentUpdate=function(Y){this.props.value!=Y.value&&Q.forEach(function(q){q.__e=!0,A6(q)})},this.sub=function(Y){Q.add(Y);var q=Y.componentWillUnmount;Y.componentWillUnmount=function(){Q&&Q.delete(Y),q&&q.call(Y)}}),j.children}return $.__c="__cC"+G2++,$.__=_,$.Provider=$.__l=($.Consumer=function(j,Q){return j.children(Q)}).contextType=$,$}z8=W8.slice,L1={__e:function(_,$,j,Q){for(var Z,Y,q;$=$.__;)if((Z=$.__c)&&!Z.__)try{if((Y=Z.constructor)&&Y.getDerivedStateFromError!=null&&(Z.setState(Y.getDerivedStateFromError(_)),q=Z.__d),Z.componentDidCatch!=null&&(Z.componentDidCatch(_,Q||{}),q=Z.__d),q)return Z.__E=Z}catch(K){_=K}throw _}},Y2=0,uY=function(_){return _!=null&&_.constructor===void 0},G5.prototype.setState=function(_,$){var j;j=this.__s!=null&&this.__s!=this.state?this.__s:this.__s=N4({},this.state),typeof _=="function"&&(_=_(N4({},j),this.props)),_&&N4(j,_),_!=null&&this.__v&&($&&this._sb.push($),A6(this))},G5.prototype.forceUpdate=function(_){this.__v&&(this.__e=!0,_&&this.__h.push(_),A6(this))},G5.prototype.render=O8,M4=[],q2=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,K2=function(_,$){return _.__v.__b-$.__v.__b},F8.__r=0,N2=/(PointerCapture)$|Capture$/i,k6=0,J6=o3(!1),O6=o3(!0),G2=0;var I4,U1,H6,s3,V5=0,z2=[],O1=L1,a3=O1.__b,t3=O1.__r,e3=O1.diffed,_2=O1.__c,$2=O1.unmount,j2=O1.__;function U5(_,$){O1.__h&&O1.__h(U1,_,V5||$),V5=0;var j=U1.__H||(U1.__H={__:[],__h:[]});return _>=j.__.length&&j.__.push({}),j.__[_]}function g(_){return V5=1,T6(D2,_)}function T6(_,$,j){var Q=U5(I4++,2);if(Q.t=_,!Q.__c&&(Q.__=[j?j($):D2(void 0,$),function(K){var N=Q.__N?Q.__N[0]:Q.__[0],G=Q.t(N,K);N!==G&&(Q.__N=[G,Q.__[1]],Q.__c.setState({}))}],Q.__c=U1,!U1.__f)){var Z=function(K,N,G){if(!Q.__c.__H)return!0;var X=Q.__c.__H.__.filter(function(U){return U.__c});if(X.every(function(U){return!U.__N}))return!Y||Y.call(this,K,N,G);var V=Q.__c.props!==K;return X.some(function(U){if(U.__N){var L=U.__[0];U.__=U.__N,U.__N=void 0,L!==U.__[0]&&(V=!0)}}),Y&&Y.call(this,K,N,G)||V};U1.__f=!0;var{shouldComponentUpdate:Y,componentWillUpdate:q}=U1;U1.componentWillUpdate=function(K,N,G){if(this.__e){var X=Y;Y=void 0,Z(K,N,G),Y=X}q&&q.call(this,K,N,G)},U1.shouldComponentUpdate=Z}return Q.__N||Q.__}function v(_,$){var j=U5(I4++,3);!O1.__s&&C6(j.__H,$)&&(j.__=_,j.u=$,U1.__H.__h.push(j))}function R5(_,$){var j=U5(I4++,4);!O1.__s&&C6(j.__H,$)&&(j.__=_,j.u=$,U1.__h.push(j))}function x(_){return V5=5,w0(function(){return{current:_}},[])}function H2(_,$,j){V5=6,R5(function(){if(typeof _=="function"){var Q=_($());return function(){_(null),Q&&typeof Q=="function"&&Q()}}if(_)return _.current=$(),function(){return _.current=null}},j==null?j:j.concat(_))}function w0(_,$){var j=U5(I4++,7);return C6(j.__H,$)&&(j.__=_(),j.__H=$,j.__h=_),j.__}function T(_,$){return V5=8,w0(function(){return _},$)}function J2(_){var $=U1.context[_.__c],j=U5(I4++,9);return j.c=_,$?(j.__==null&&(j.__=!0,$.sub(U1)),$.props.value):_.__}function O2(_,$){O1.useDebugValue&&O1.useDebugValue($?$(_):_)}function A2(_){var $=U5(I4++,10),j=g();return $.__=_,U1.componentDidCatch||(U1.componentDidCatch=function(Q,Z){$.__&&$.__(Q,Z),j[1](Q)}),[j[0],function(){j[1](void 0)}]}function pY(){for(var _;_=z2.shift();){var $=_.__H;if(_.__P&&$)try{$.__h.some(L8),$.__h.some(E6),$.__h=[]}catch(j){$.__h=[],O1.__e(j,_.__v)}}}O1.__b=function(_){U1=null,a3&&a3(_)},O1.__=function(_,$){_&&$.__k&&$.__k.__m&&(_.__m=$.__k.__m),j2&&j2(_,$)},O1.__r=function(_){t3&&t3(_),I4=0;var $=(U1=_.__c).__H;$&&(H6===U1?($.__h=[],U1.__h=[],$.__.some(function(j){j.__N&&(j.__=j.__N),j.u=j.__N=void 0})):($.__h.some(L8),$.__h.some(E6),$.__h=[],I4=0)),H6=U1},O1.diffed=function(_){e3&&e3(_);var $=_.__c;$&&$.__H&&($.__H.__h.length&&(z2.push($)!==1&&s3===O1.requestAnimationFrame||((s3=O1.requestAnimationFrame)||cY)(pY)),$.__H.__.some(function(j){j.u&&(j.__H=j.u),j.u=void 0})),H6=U1=null},O1.__c=function(_,$){$.some(function(j){try{j.__h.some(L8),j.__h=j.__h.filter(function(Q){return!Q.__||E6(Q)})}catch(Q){$.some(function(Z){Z.__h&&(Z.__h=[])}),$=[],O1.__e(Q,j.__v)}}),_2&&_2(_,$)},O1.unmount=function(_){$2&&$2(_);var $,j=_.__c;j&&j.__H&&(j.__H.__.some(function(Q){try{L8(Q)}catch(Z){$=Z}}),j.__H=void 0,$&&O1.__e($,j.__v))};var Q2=typeof requestAnimationFrame=="function";function cY(_){var $,j=function(){clearTimeout(Q),Q2&&cancelAnimationFrame($),setTimeout(_)},Q=setTimeout(j,35);Q2&&($=requestAnimationFrame(j))}function L8(_){var $=U1,j=_.__c;typeof j=="function"&&(_.__c=void 0,j()),U1=$}function E6(_){var $=U1;_.__c=_.__(),U1=$}function C6(_,$){return!_||_.length!==$.length||$.some(function(j,Q){return j!==_[Q]})}function D2(_,$){return typeof $=="function"?$(_):$}var E2=function(_,$,j,Q){var Z;$[0]=0;for(var Y=1;Y<$.length;Y++){var q=$[Y++],K=$[Y]?($[0]|=q?1:2,j[$[Y++]]):$[++Y];q===3?Q[0]=K:q===4?Q[1]=Object.assign(Q[1]||{},K):q===5?(Q[1]=Q[1]||{})[$[++Y]]=K:q===6?Q[1][$[++Y]]+=K+"":q?(Z=_.apply(K,E2(_,K,j,["",null])),Q.push(Z),K[0]?$[0]|=2:($[Y-2]=0,$[Y]=Z)):Q.push(K)}return Q},Z2=new Map;function lY(_){var $=Z2.get(this);return $||($=new Map,Z2.set(this,$)),($=E2(this,$.get(_)||($.set(_,$=function(j){for(var Q,Z,Y=1,q="",K="",N=[0],G=function(U){Y===1&&(U||(q=q.replace(/^\s*\n\s*|\s*\n\s*$/g,"")))?N.push(0,U,q):Y===3&&(U||q)?(N.push(3,U,q),Y=2):Y===2&&q==="..."&&U?N.push(4,U,0):Y===2&&q&&!U?N.push(5,0,!0,q):Y>=5&&((q||!U&&Y===5)&&(N.push(Y,0,q,Z),Y=6),U&&(N.push(Y,U,0,Z),Y=6)),q=""},X=0;X<j.length;X++){X&&(Y===1&&G(),G(X));for(var V=0;V<j[X].length;V++)Q=j[X][V],Y===1?Q==="<"?(G(),N=[N],Y=3):q+=Q:Y===4?q==="--"&&Q===">"?(Y=1,q=""):q=Q+q[0]:K?Q===K?K="":q+=Q:Q==='"'||Q==="'"?K=Q:Q===">"?(G(),Y=1):Y&&(Q==="="?(Y=5,Z=q,q=""):Q==="/"&&(Y<5||j[X][V+1]===">")?(G(),Y===3&&(N=N[0]),Y=N,(N=N[0]).push(2,0,Y),Y=0):Q===" "||Q==="\t"||Q===`
`||Q==="\r"?(G(),Y=2):q+=Q),Y===3&&q==="!--"&&(Y=4,N=N[0])}return G(),N}(_)),$),arguments,[])).length>1?$:$[0]}var B=lY.bind(J8);var r1={};RY(r1,{uploadWorkspaceFile:()=>D8,uploadMedia:()=>v6,updateWorkspaceFile:()=>Gq,submitAdaptiveCardAction:()=>g6,streamSidePrompt:()=>qq,stopAutoresearch:()=>$q,steerAgentQueueItem:()=>Yq,setWorkspaceVisibility:()=>b5,setAgentThoughtVisibility:()=>h6,sendPeerAgentMessage:()=>tY,sendAgentMessage:()=>n4,searchPosts:()=>y6,restoreChatBranch:()=>aY,respondToAgentRequest:()=>A8,renameWorkspaceFile:()=>d6,renameChatBranch:()=>oY,removeAgentQueueItem:()=>Zq,pruneChatBranch:()=>sY,moveWorkspaceEntry:()=>i6,getWorkspaceTree:()=>v5,getWorkspaceRawUrl:()=>E8,getWorkspaceFile:()=>g5,getWorkspaceDownloadUrl:()=>k8,getWorkspaceBranch:()=>Nq,getTimeline:()=>l4,getThumbnailUrl:()=>p6,getThread:()=>S6,getPostsByHashtag:()=>P6,getMediaUrl:()=>y_,getMediaText:()=>c6,getMediaInfo:()=>L5,getMediaBlob:()=>Kq,getChatBranches:()=>rY,getAutoresearchStatus:()=>_q,getAgents:()=>u6,getAgentThought:()=>m6,getAgentStatus:()=>f6,getAgentQueueState:()=>Qq,getAgentModels:()=>f5,getAgentContext:()=>eY,getActiveChatAgents:()=>R6,forkChatBranch:()=>u5,dismissAutoresearch:()=>jq,deleteWorkspaceFile:()=>r6,deletePost:()=>w6,createWorkspaceFile:()=>n6,createReply:()=>iY,createPost:()=>dY,attachWorkspaceFile:()=>l6,addToWhitelist:()=>b6,SSEClient:()=>M8});async function r0(_,$={}){let j=await fetch(""+_,{...$,headers:{"Content-Type":"application/json",...$.headers}});if(!j.ok){let Q=await j.json().catch(()=>({error:"Unknown error"}));throw Error(Q.error||`HTTP ${j.status}`)}return j.json()}function k2(_){let $=String(_||"").split(`
`),j="message",Q=[];for(let Y of $)if(Y.startsWith("event:"))j=Y.slice(6).trim()||"message";else if(Y.startsWith("data:"))Q.push(Y.slice(5).trim());let Z=Q.join(`
`);if(!Z)return null;try{return{event:j,data:JSON.parse(Z)}}catch{return{event:j,data:Z}}}async function nY(_,$){if(!_.body)throw Error("Missing event stream body");let j=_.body.getReader(),Q=new TextDecoder,Z="";while(!0){let{value:q,done:K}=await j.read();if(K)break;Z+=Q.decode(q,{stream:!0});let N=Z.split(`

`);Z=N.pop()||"";for(let G of N){let X=k2(G);if(X)$(X.event,X.data)}}Z+=Q.decode();let Y=k2(Z);if(Y)$(Y.event,Y.data)}async function l4(_=10,$=null,j=null){let Q=`/timeline?limit=${_}`;if($)Q+=`&before=${$}`;if(j)Q+=`&chat_jid=${encodeURIComponent(j)}`;return r0(Q)}async function P6(_,$=50,j=0,Q=null){let Z=Q?`&chat_jid=${encodeURIComponent(Q)}`:"";return r0(`/hashtag/${encodeURIComponent(_)}?limit=${$}&offset=${j}${Z}`)}async function y6(_,$=50,j=0,Q=null,Z="current",Y=null){let q=Q?`&chat_jid=${encodeURIComponent(Q)}`:"",K=Z?`&scope=${encodeURIComponent(Z)}`:"",N=Y?`&root_chat_jid=${encodeURIComponent(Y)}`:"";return r0(`/search?q=${encodeURIComponent(_)}&limit=${$}&offset=${j}${q}${K}${N}`)}async function S6(_,$=null){let j=$?`?chat_jid=${encodeURIComponent($)}`:"";return r0(`/thread/${_}${j}`)}async function dY(_,$=[],j=null){let Q=j?`?chat_jid=${encodeURIComponent(j)}`:"";return r0(`/post${Q}`,{method:"POST",body:JSON.stringify({content:_,media_ids:$})})}async function iY(_,$,j=[],Q=null){let Z=Q?`?chat_jid=${encodeURIComponent(Q)}`:"";return r0(`/post/reply${Z}`,{method:"POST",body:JSON.stringify({thread_id:_,content:$,media_ids:j})})}async function w6(_,$=!1,j=null){let Q=j?`&chat_jid=${encodeURIComponent(j)}`:"",Z=`/post/${_}?cascade=${$?"true":"false"}${Q}`;return r0(Z,{method:"DELETE"})}async function n4(_,$,j=null,Q=[],Z=null,Y=null){let q=Y?`?chat_jid=${encodeURIComponent(Y)}`:"",K={content:$,thread_id:j,media_ids:Q};if(Z==="auto"||Z==="queue"||Z==="steer")K.mode=Z;return r0(`/agent/${_}/message${q}`,{method:"POST",body:JSON.stringify(K)})}async function R6(){return r0("/agent/active-chats")}async function rY(_=null,$={}){let j=new URLSearchParams;if(_)j.set("root_chat_jid",String(_));if($?.includeArchived)j.set("include_archived","1");let Q=j.toString()?`?${j.toString()}`:"";return r0(`/agent/branches${Q}`)}async function u5(_,$={}){return r0("/agent/branch-fork",{method:"POST",body:JSON.stringify({source_chat_jid:_,...$?.agentName?{agent_name:$.agentName}:{}})})}async function oY(_,$={}){return r0("/agent/branch-rename",{method:"POST",body:JSON.stringify({chat_jid:_,...$&&Object.prototype.hasOwnProperty.call($,"agentName")?{agent_name:$.agentName}:{}})})}async function sY(_){return r0("/agent/branch-prune",{method:"POST",body:JSON.stringify({chat_jid:_})})}async function aY(_,$={}){return r0("/agent/branch-restore",{method:"POST",body:JSON.stringify({chat_jid:_,...$&&Object.prototype.hasOwnProperty.call($,"agentName")?{agent_name:$.agentName}:{}})})}async function tY(_,$,j,Q="auto",Z={}){let Y={source_chat_jid:_,content:j,mode:Q,...Z?.sourceAgentName?{source_agent_name:Z.sourceAgentName}:{},...Z?.targetBy==="agent_name"?{target_agent_name:$}:{target_chat_jid:$}};return r0("/agent/peer-message",{method:"POST",body:JSON.stringify(Y)})}async function u6(){return r0("/agent/roster")}async function f6(_=null){let $=_?`?chat_jid=${encodeURIComponent(_)}`:"";return r0(`/agent/status${$}`)}async function eY(_=null){let $=_?`?chat_jid=${encodeURIComponent(_)}`:"";return r0(`/agent/context${$}`)}async function _q(_=null){let $=_?`?chat_jid=${encodeURIComponent(_)}`:"";return r0(`/agent/autoresearch/status${$}`)}async function $q(_=null,$={}){return r0("/agent/autoresearch/stop",{method:"POST",body:JSON.stringify({chat_jid:_||void 0,generate_report:$?.generateReport!==!1})})}async function jq(_=null){return r0("/agent/autoresearch/dismiss",{method:"POST",body:JSON.stringify({chat_jid:_||void 0})})}async function Qq(_=null){let $=_?`?chat_jid=${encodeURIComponent(_)}`:"";return r0(`/agent/queue-state${$}`)}async function Zq(_,$=null){let j=await fetch("/agent/queue-remove",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({row_id:_,chat_jid:$||void 0})});if(!j.ok){let Q=await j.json().catch(()=>({error:"Failed to remove queued item"}));throw Error(Q.error||`HTTP ${j.status}`)}return j.json()}async function Yq(_,$=null){let j=await fetch("/agent/queue-steer",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({row_id:_,chat_jid:$||void 0})});if(!j.ok){let Q=await j.json().catch(()=>({error:"Failed to steer queued item"}));throw Error(Q.error||`HTTP ${j.status}`)}return j.json()}async function f5(_=null){let $=_?`?chat_jid=${encodeURIComponent(_)}`:"";return r0(`/agent/models${$}`)}async function v6(_){let $=new FormData;$.append("file",_);let j=await fetch("/media/upload",{method:"POST",body:$});if(!j.ok){let Q=await j.json().catch(()=>({error:"Upload failed"}));throw Error(Q.error||`HTTP ${j.status}`)}return j.json()}async function A8(_,$,j=null){let Q=await fetch("/agent/respond",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({request_id:_,outcome:$,chat_jid:j||void 0})});if(!Q.ok){let Z=await Q.json().catch(()=>({error:"Failed to respond"}));throw Error(Z.error||`HTTP ${Q.status}`)}return Q.json()}async function g6(_){let $=await fetch("/agent/card-action",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(_)});if(!$.ok){let j=await $.json().catch(()=>({error:"Adaptive Card action failed"}));throw Error(j.error||`HTTP ${$.status}`)}return $.json()}async function qq(_,$={}){let j=await fetch("/agent/side-prompt/stream",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({prompt:_,system_prompt:$.systemPrompt||void 0,chat_jid:$.chatJid||void 0}),signal:$.signal});if(!j.ok){let Y=await j.json().catch(()=>({error:"Side prompt failed"}));throw Error(Y.error||`HTTP ${j.status}`)}let Q=null,Z=null;if(await nY(j,(Y,q)=>{if($.onEvent?.(Y,q),Y==="side_prompt_thinking_delta")$.onThinkingDelta?.(q?.delta||"");else if(Y==="side_prompt_text_delta")$.onTextDelta?.(q?.delta||"");else if(Y==="side_prompt_done")Q=q;else if(Y==="side_prompt_error")Z=q}),Z){let Y=Error(Z?.error||"Side prompt failed");throw Y.payload=Z,Y}return Q}async function b6(_,$){let j=await fetch("/agent/whitelist",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({pattern:_,description:$})});if(!j.ok){let Q=await j.json().catch(()=>({error:"Failed to add to whitelist"}));throw Error(Q.error||`HTTP ${j.status}`)}return j.json()}async function m6(_,$="thought"){let j=`/agent/thought?turn_id=${encodeURIComponent(_)}&panel=${encodeURIComponent($)}`;return r0(j)}async function h6(_,$,j){return r0("/agent/thought/visibility",{method:"POST",body:JSON.stringify({turn_id:_,panel:$,expanded:Boolean(j)})})}function y_(_){return`/media/${_}`}function p6(_){return`/media/${_}/thumbnail`}async function L5(_){let $=await fetch(`/media/${_}/info`);if(!$.ok)throw Error("Failed to get media info");return $.json()}async function c6(_){let $=await fetch(`/media/${_}`);if(!$.ok)throw Error("Failed to load media text");return $.text()}async function Kq(_){let $=await fetch(`/media/${_}`);if(!$.ok)throw Error("Failed to load media blob");return $.blob()}async function v5(_="",$=2,j=!1){let Q=`/workspace/tree?path=${encodeURIComponent(_)}&depth=${$}&show_hidden=${j?"1":"0"}`;return r0(Q)}async function Nq(_=""){let $=`/workspace/branch?path=${encodeURIComponent(_||"")}`;return r0($)}async function g5(_,$=20000,j=null){let Q=j?`&mode=${encodeURIComponent(j)}`:"",Z=`/workspace/file?path=${encodeURIComponent(_)}&max=${$}${Q}`;return r0(Z)}async function Gq(_,$){return r0("/workspace/file",{method:"PUT",body:JSON.stringify({path:_,content:$})})}async function l6(_){return r0("/workspace/attach",{method:"POST",body:JSON.stringify({path:_})})}async function D8(_,$="",j={}){let Q=new FormData;Q.append("file",_);let Z=new URLSearchParams;if($)Z.set("path",$);if(j.overwrite)Z.set("overwrite","1");let Y=Z.toString(),q=Y?`/workspace/upload?${Y}`:"/workspace/upload",K=await fetch(""+q,{method:"POST",body:Q});if(!K.ok){let N=await K.json().catch(()=>({error:"Upload failed"})),G=Error(N.error||`HTTP ${K.status}`);throw G.status=K.status,G.code=N.code,G}return K.json()}async function n6(_,$,j=""){let Q=await fetch("/workspace/file",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({path:_,name:$,content:j})});if(!Q.ok){let Z=await Q.json().catch(()=>({error:"Create failed"})),Y=Error(Z.error||`HTTP ${Q.status}`);throw Y.status=Q.status,Y.code=Z.code,Y}return Q.json()}async function d6(_,$){let j=await fetch("/workspace/rename",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({path:_,name:$})});if(!j.ok){let Q=await j.json().catch(()=>({error:"Rename failed"})),Z=Error(Q.error||`HTTP ${j.status}`);throw Z.status=j.status,Z.code=Q.code,Z}return j.json()}async function i6(_,$){let j=await fetch("/workspace/move",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({path:_,target:$})});if(!j.ok){let Q=await j.json().catch(()=>({error:"Move failed"})),Z=Error(Q.error||`HTTP ${j.status}`);throw Z.status=j.status,Z.code=Q.code,Z}return j.json()}async function r6(_){let $=`/workspace/file?path=${encodeURIComponent(_||"")}`;return r0($,{method:"DELETE"})}async function b5(_,$=!1){return r0("/workspace/visibility",{method:"POST",body:JSON.stringify({visible:Boolean(_),show_hidden:Boolean($)})})}function E8(_){return`/workspace/raw?path=${encodeURIComponent(_)}`}function k8(_,$=!1){return`/workspace/download?${`path=${encodeURIComponent(_||"")}&show_hidden=${$?"1":"0"}`}`}class M8{constructor(_,$,j={}){this.onEvent=_,this.onStatusChange=$,this.chatJid=typeof j?.chatJid==="string"&&j.chatJid.trim()?j.chatJid.trim():null,this.eventSource=null,this.reconnectTimeout=null,this.reconnectDelay=1000,this.status="disconnected",this.reconnectAttempts=0,this.cooldownUntil=0,this.connecting=!1,this.lastActivityAt=0,this.staleCheckTimer=null,this.staleThresholdMs=70000}markActivity(){this.lastActivityAt=Date.now()}clearStaleMonitor(){if(this.staleCheckTimer)clearInterval(this.staleCheckTimer),this.staleCheckTimer=null}startStaleMonitor(){this.clearStaleMonitor(),this.staleCheckTimer=setInterval(()=>{if(this.status!=="connected")return;if(!this.lastActivityAt)return;if(Date.now()-this.lastActivityAt<=this.staleThresholdMs)return;console.warn("SSE connection went stale; forcing reconnect"),this.forceReconnect()},15000)}forceReconnect(){if(this.connecting=!1,this.eventSource)this.eventSource.close(),this.eventSource=null;this.clearStaleMonitor(),this.status="disconnected",this.onStatusChange("disconnected"),this.reconnectAttempts+=1,this.scheduleReconnect()}connect(){if(this.connecting)return;if(this.eventSource&&this.status==="connected")return;if(this.connecting=!0,this.eventSource)this.eventSource.close();this.clearStaleMonitor();let _=this.chatJid?`?chat_jid=${encodeURIComponent(this.chatJid)}`:"";this.eventSource=new EventSource("/sse/stream"+_);let $=(j)=>{this.eventSource.addEventListener(j,(Q)=>{this.markActivity(),this.onEvent(j,JSON.parse(Q.data))})};this.eventSource.onopen=()=>{this.connecting=!1,this.reconnectDelay=1000,this.reconnectAttempts=0,this.cooldownUntil=0,this.status="connected",this.markActivity(),this.startStaleMonitor(),this.onStatusChange("connected")},this.eventSource.onerror=()=>{this.connecting=!1,this.clearStaleMonitor(),this.status="disconnected",this.onStatusChange("disconnected"),this.reconnectAttempts+=1,this.scheduleReconnect()},this.eventSource.addEventListener("connected",()=>{this.markActivity(),console.log("SSE connected"),this.onEvent("connected",{})}),this.eventSource.addEventListener("heartbeat",()=>{this.markActivity()}),$("new_post"),$("new_reply"),$("agent_response"),$("interaction_updated"),$("interaction_deleted"),$("agent_status"),$("agent_steer_queued"),$("agent_followup_queued"),$("agent_followup_consumed"),$("agent_followup_removed"),$("workspace_update"),$("agent_draft"),$("agent_draft_delta"),$("agent_thought"),$("agent_thought_delta"),$("model_changed"),$("ui_theme"),["extension_ui_request","extension_ui_timeout","extension_ui_notify","extension_ui_status","extension_ui_working","extension_ui_widget","extension_ui_title","extension_ui_editor_text","extension_ui_error"].forEach($)}scheduleReconnect(){if(this.reconnectTimeout)clearTimeout(this.reconnectTimeout);let _=10,$=60000,j=Date.now();if(this.reconnectAttempts>=_)this.cooldownUntil=Math.max(this.cooldownUntil,j+$),this.reconnectAttempts=0;let Q=Math.max(this.cooldownUntil-j,0),Z=Math.max(this.reconnectDelay,Q);this.reconnectTimeout=setTimeout(()=>{console.log("Reconnecting SSE..."),this.connect()},Z),this.reconnectDelay=Math.min(this.reconnectDelay*2,30000)}reconnectIfNeeded(){let _=Date.now();if(this.status==="connected"){if(this.lastActivityAt&&_-this.lastActivityAt>this.staleThresholdMs)this.forceReconnect();return}if(this.cooldownUntil&&_<this.cooldownUntil)return;if(this.reconnectTimeout)clearTimeout(this.reconnectTimeout),this.reconnectTimeout=null;this.connect()}disconnect(){if(this.connecting=!1,this.clearStaleMonitor(),this.eventSource)this.eventSource.close(),this.eventSource=null;if(this.reconnectTimeout)clearTimeout(this.reconnectTimeout),this.reconnectTimeout=null}}class M2{extensions=new Map;register(_){this.extensions.set(_.id,_)}unregister(_){this.extensions.delete(_)}resolve(_){let $,j=-1/0;for(let Q of this.extensions.values()){if(Q.placement!=="tabs")continue;if(!Q.canHandle)continue;try{let Z=Q.canHandle(_);if(Z===!1||Z===0)continue;let Y=Z===!0?0:typeof Z==="number"?Z:0;if(Y>j)j=Y,$=Q}catch(Z){console.warn(`[PaneRegistry] canHandle() error for "${Q.id}":`,Z)}}return $}list(){return Array.from(this.extensions.values())}getDockPanes(){return Array.from(this.extensions.values()).filter((_)=>_.placement==="dock")}getTabPanes(){return Array.from(this.extensions.values()).filter((_)=>_.placement==="tabs")}get(_){return this.extensions.get(_)}get size(){return this.extensions.size}}var c0=new M2;var I8=null,o6=null;function Xq(){try{return`/static/dist/editor.bundle.js${new URL(import.meta.url).search||""}`}catch{return"/static/dist/editor.bundle.js"}}function I2(){if(o6)return Promise.resolve(o6);if(!I8)I8=import(Xq()).then((_)=>{return o6=_,_}).catch((_)=>{throw I8=null,_});return I8}class x2{container;context;real=null;disposed=!1;loadingEl;queuedDirtyCb=null;queuedSaveCb=null;queuedCloseCb=null;queuedViewStateCb=null;queuedViewState=null;constructor(_,$){this.container=_,this.context=$,this.loadingEl=document.createElement("div"),this.loadingEl.className="editor-pane",this.loadingEl.innerHTML=`
            <div class="editor-body">
                <div class="editor-status" style="padding: 2em; text-align: center; color: var(--text-secondary);">Loading editor…</div>
            </div>
        `,_.appendChild(this.loadingEl),this.load()}escapeHtml(_){let $=document.createElement("div");return $.textContent=_,$.innerHTML}async load(){try{let _=await I2();if(this.disposed)return;if(this.loadingEl.parentNode)this.loadingEl.remove();if(this.real=new _.StandaloneEditorInstance(this.container,this.context),this.queuedDirtyCb&&this.real.onDirtyChange)this.real.onDirtyChange(this.queuedDirtyCb);if(this.queuedSaveCb&&this.real.onSaveRequest)this.real.onSaveRequest(this.queuedSaveCb);if(this.queuedCloseCb&&this.real.onClose)this.real.onClose(this.queuedCloseCb);if(this.queuedViewStateCb&&typeof this.real.onViewStateChange==="function")this.real.onViewStateChange(this.queuedViewStateCb);if(this.queuedViewState&&typeof this.real.restoreViewState==="function")requestAnimationFrame(()=>this.real?.restoreViewState?.(this.queuedViewState))}catch(_){if(this.disposed)return;console.error("[editor-loader] Failed to load editor bundle:",_),this.loadingEl.querySelector(".editor-status").textContent="Failed to load editor. Check console for details."}}getContent(){return this.real?.getContent()}isDirty(){return this.real?.isDirty()||!1}setContent(_,$){if(this.real?.setContent)this.real.setContent(_,$)}focus(){this.real?.focus()}resize(){this.real?.resize?.()}dispose(){if(this.disposed)return;if(this.disposed=!0,this.real)this.real.dispose(),this.real=null;this.container.innerHTML="",this.queuedDirtyCb=null,this.queuedSaveCb=null,this.queuedCloseCb=null,this.queuedViewStateCb=null}onDirtyChange(_){if(this.queuedDirtyCb=_,this.real?.onDirtyChange)this.real.onDirtyChange(_)}onSaveRequest(_){if(this.queuedSaveCb=_,this.real?.onSaveRequest)this.real.onSaveRequest(_)}onClose(_){if(this.queuedCloseCb=_,this.real?.onClose)this.real.onClose(_)}onViewStateChange(_){this.queuedViewStateCb=_,this.real?.onViewStateChange?.(_)}restoreViewState(_){this.queuedViewState=_,this.real?.restoreViewState?.(_)}getPath(){return this.real?.getPath?.()??this.context.path??""}setPath(_){this.real?.setPath?.(_)}}var s6={id:"editor",label:"Editor",icon:"edit",capabilities:["edit"],placement:"tabs",canHandle(_){if(!_.path)return!1;if(_.mode!=="edit")return!1;return 1},mount(_,$){return new x2(_,$)}};function a6(){I2().catch(()=>{})}var d4="piclaw://terminal";var Vq={yellow:"#9a6700",magenta:"#8250df",cyan:"#1b7c83",brightBlack:"#57606a",brightRed:"#cf222e",brightGreen:"#1a7f37",brightYellow:"#bf8700",brightBlue:"#0550ae",brightMagenta:"#6f42c1",brightCyan:"#0a7b83"},Uq={yellow:"#d29922",magenta:"#bc8cff",cyan:"#39c5cf",brightBlack:"#8b949e",brightRed:"#ff7b72",brightGreen:"#7ee787",brightYellow:"#e3b341",brightBlue:"#79c0ff",brightMagenta:"#d2a8ff",brightCyan:"#56d4dd"},x8=null,t6=null;function Lq(_){if(!_)return!1;return _.startsWith("data:application/wasm")||/(^|\/)ghostty-vt\.wasm(?:[?#].*)?$/.test(_)}async function Bq(_){let $=globalThis.fetch?.bind(globalThis);if(!$)return await _();let j=new URL("/static/js/vendor/ghostty-vt.wasm",window.location.origin).href,Q=(Z,Y)=>{let q=Z instanceof Request?Z.url:Z instanceof URL?Z.href:String(Z);if(!Lq(q))return $(Z,Y);if(Z instanceof Request)return $(new Request(j,Z));return $(j,Y)};globalThis.fetch=Q;try{return await _()}finally{globalThis.fetch=$}}async function Wq(){let $=await import(new URL("/static/js/vendor/ghostty-web.js",window.location.origin).href);if(!x8)x8=Bq(()=>Promise.resolve($.init?.())).catch((j)=>{throw x8=null,j});return await x8,$}async function Fq(){if(typeof document>"u"||!("fonts"in document)||!document.fonts)return;if(!t6)t6=Promise.allSettled([document.fonts.load('400 13px "FiraCode Nerd Font Mono"'),document.fonts.load('700 13px "FiraCode Nerd Font Mono"'),document.fonts.ready]).then(()=>{return}).catch(()=>{return});await t6}async function zq(){let _=await fetch("/terminal/session",{method:"GET",credentials:"same-origin"}),$=await _.json().catch(()=>({}));if(!_.ok)throw Error($?.error||`HTTP ${_.status}`);return $}function Hq(_){return`${window.location.protocol==="https:"?"wss:":"ws:"}//${window.location.host}${_}`}function Jq(){if(typeof window>"u"||typeof document>"u")return!1;let{documentElement:_,body:$}=document,j=_?.getAttribute?.("data-theme")?.toLowerCase?.()||"";if(j==="dark")return!0;if(j==="light")return!1;if(_?.classList?.contains("dark")||$?.classList?.contains("dark"))return!0;if(_?.classList?.contains("light")||$?.classList?.contains("light"))return!1;return Boolean(window.matchMedia?.("(prefers-color-scheme: dark)")?.matches)}function G4(_,$=""){if(typeof document>"u")return $;return getComputedStyle(document.documentElement).getPropertyValue(_)?.trim()||$}function Oq(_,$){if(!_||!_.startsWith("#"))return _;let j=_.slice(1);if(j.length===3)return`#${j[0]}${j[0]}${j[1]}${j[1]}${j[2]}${j[2]}${$}`;if(j.length===6)return`#${j}${$}`;return _}function T2(){let _=Jq(),$=_?Uq:Vq,j=G4("--bg-primary",_?"#000000":"#ffffff"),Q=G4("--text-primary",_?"#e7e9ea":"#0f1419"),Z=G4("--text-secondary",_?"#71767b":"#536471"),Y=G4("--accent-color","#1d9bf0"),q=G4("--danger-color",_?"#ff7b72":"#cf222e"),K=G4("--success-color",_?"#7ee787":"#1a7f37"),N=G4("--bg-hover",_?"#1d1f23":"#e8ebed"),G=G4("--border-color",_?"#2f3336":"#eff3f4"),X=G4("--accent-soft-strong",Oq(Y,_?"47":"33"));return{background:j,foreground:Q,cursor:Y,cursorAccent:j,selectionBackground:X,selectionForeground:Q,black:N,red:q,green:K,yellow:$.yellow,blue:Y,magenta:$.magenta,cyan:$.cyan,white:Q,brightBlack:$.brightBlack,brightRed:$.brightRed,brightGreen:$.brightGreen,brightYellow:$.brightYellow,brightBlue:$.brightBlue,brightMagenta:$.brightMagenta,brightCyan:$.brightCyan,brightWhite:G}}class e6{container;disposed=!1;termEl;bodyEl;statusEl;terminal=null;fitAddon=null;socket=null;themeObserver=null;themeChangeListener=null;mediaQuery=null;mediaQueryListener=null;resizeObserver=null;dockResizeListener=null;windowResizeListener=null;resizeFrame=0;lastAppliedThemeSignature=null;lastResizeSignature=null;constructor(_,$){this.container=_,this.termEl=document.createElement("div"),this.termEl.className="terminal-pane-content",this.termEl.setAttribute("tabindex","0"),this.statusEl=document.createElement("span"),this.statusEl.className="terminal-pane-status",this.statusEl.textContent="Loading terminal…",this.bodyEl=document.createElement("div"),this.bodyEl.className="terminal-pane-body",this.bodyEl.innerHTML='<div class="terminal-placeholder">Bootstrapping ghostty-web…</div>',this.termEl.append(this.bodyEl),_.appendChild(this.termEl),this.bootstrapGhostty()}setStatus(_){this.statusEl.textContent=_,this.termEl.dataset.connectionStatus=_,this.termEl.setAttribute("aria-label",`Terminal ${_}`)}getResizeSignature(){try{let _=this.container?.getBoundingClientRect?.(),$=this.bodyEl?.getBoundingClientRect?.(),j=Number.isFinite(_?.width)?_.width:0,Q=Number.isFinite(_?.height)?_.height:0,Z=Number.isFinite($?.width)?$.width:0,Y=Number.isFinite($?.height)?$.height:0;return`${Math.round(j)}x${Math.round(Q)}:${Math.round(Z)}x${Math.round(Y)}`}catch{return"0x0:0x0"}}syncHostLayout(){let _=this.bodyEl.querySelector(".terminal-live-host");if(!(_ instanceof HTMLElement))return;let $=_.firstElementChild;if($ instanceof HTMLElement)$.style.width="100%",$.style.height="100%",$.style.maxWidth="100%",$.style.minWidth="0",$.style.display="block";let j=_.querySelector("canvas");if(j instanceof HTMLElement)j.style.display="block",j.style.maxWidth="none"}scheduleResize(){if(this.disposed)return;let _=this.getResizeSignature();if(this.lastResizeSignature===_)return;if(this.resizeFrame)cancelAnimationFrame(this.resizeFrame);this.resizeFrame=requestAnimationFrame(()=>{this.resizeFrame=0,this.lastResizeSignature=this.getResizeSignature(),this.resize()})}async bootstrapGhostty(){try{let _=await Wq();if(await Fq(),this.disposed)return;this.bodyEl.innerHTML="";let $=document.createElement("div");$.className="terminal-live-host",this.bodyEl.appendChild($);let j=new _.Terminal({cols:120,rows:30,cursorBlink:!0,fontFamily:'FiraCode Nerd Font Mono, ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", monospace',fontSize:13,theme:T2()}),Q=null;if(typeof _.FitAddon==="function")Q=new _.FitAddon,j.loadAddon?.(Q);await j.open($),this.syncHostLayout(),j.loadFonts?.(),Q?.observeResize?.(),this.terminal=j,this.fitAddon=Q,this.installThemeSync(),this.installResizeSync(),this.scheduleResize(),await this.connectBackend()}catch(_){if(console.error("[terminal-pane] Failed to bootstrap ghostty-web:",_),this.disposed)return;this.bodyEl.innerHTML='<div class="terminal-placeholder">Terminal failed to load. Check vendored assets and backend wiring.</div>',this.setStatus("Load failed")}}applyTheme(){if(!this.terminal)return;let _=T2(),$=JSON.stringify(_),j=this.lastAppliedThemeSignature!==null&&this.lastAppliedThemeSignature!==$;try{this.termEl.style.backgroundColor=_.background,this.bodyEl.style.backgroundColor=_.background;let Q=this.bodyEl.querySelector(".terminal-live-host");if(Q instanceof HTMLElement)Q.style.backgroundColor=_.background,Q.style.color=_.foreground;let Z=this.bodyEl.querySelector("canvas");if(Z instanceof HTMLElement)Z.style.backgroundColor=_.background,Z.style.color=_.foreground}catch{}try{if(this.terminal.options)this.terminal.options.theme=_}catch{}try{if(j&&this.terminal.reset)this.terminal.reset()}catch{}try{this.terminal.renderer?.setTheme?.(_),this.terminal.renderer?.clear?.()}catch{}try{this.terminal.loadFonts?.()}catch{}try{this.terminal.renderer?.remeasureFont?.()}catch{}try{if(this.terminal.wasmTerm&&this.terminal.renderer?.render)this.terminal.renderer.render(this.terminal.wasmTerm,!0,this.terminal.viewportY||0,this.terminal),this.terminal.renderer.render(this.terminal.wasmTerm,!1,this.terminal.viewportY||0,this.terminal)}catch{}try{this.resize()}catch{}try{if(j&&this.socket?.readyState===WebSocket.OPEN)this.socket.send(JSON.stringify({type:"input",data:"\f"}))}catch{}try{this.terminal.refresh?.()}catch{}this.lastAppliedThemeSignature=$}installThemeSync(){if(typeof window>"u"||typeof document>"u")return;let _=()=>requestAnimationFrame(()=>this.applyTheme());_();let $=()=>_();window.addEventListener("piclaw-theme-change",$),this.themeChangeListener=$;let j=window.matchMedia?.("(prefers-color-scheme: dark)"),Q=()=>_();if(j?.addEventListener)j.addEventListener("change",Q);else if(j?.addListener)j.addListener(Q);this.mediaQuery=j,this.mediaQueryListener=Q;let Z=typeof MutationObserver<"u"?new MutationObserver(()=>_()):null;if(Z?.observe(document.documentElement,{attributes:!0,attributeFilter:["class","data-theme","style"]}),document.body)Z?.observe(document.body,{attributes:!0,attributeFilter:["class","data-theme"]});this.themeObserver=Z}installResizeSync(){if(typeof window>"u")return;let _=()=>this.scheduleResize(),$=()=>this.scheduleResize();if(window.addEventListener("dock-resize",_),window.addEventListener("resize",$),this.dockResizeListener=_,this.windowResizeListener=$,typeof ResizeObserver<"u"){let j=new ResizeObserver(()=>{if(this.disposed)return;this.scheduleResize()});j.observe(this.container),this.resizeObserver=j}}async connectBackend(){let _=this.terminal;if(!_)return;try{let $=await zq();if(this.disposed)return;if(!$?.enabled){_.write?.(`Terminal backend unavailable: ${$?.error||"disabled"}\r
`),this.setStatus("Unavailable");return}let j=new WebSocket(Hq($.ws_path||"/terminal/ws"));this.socket=j,this.setStatus("Connecting…"),_.onData?.((Q)=>{if(j.readyState===WebSocket.OPEN)j.send(JSON.stringify({type:"input",data:Q}))}),_.onResize?.(({cols:Q,rows:Z})=>{if(j.readyState===WebSocket.OPEN)j.send(JSON.stringify({type:"resize",cols:Q,rows:Z}))}),j.addEventListener("open",()=>{if(this.disposed)return;this.setStatus("Connected"),this.scheduleResize()}),j.addEventListener("message",(Q)=>{if(this.disposed)return;let Z=null;try{Z=JSON.parse(String(Q.data))}catch{Z={type:"output",data:String(Q.data)}}if(Z?.type==="output"&&typeof Z.data==="string"){_.write?.(Z.data);return}if(Z?.type==="exit")_.write?.(`\r
[terminal exited]\r
`),this.setStatus("Exited")}),j.addEventListener("close",()=>{if(this.disposed)return;this.setStatus("Disconnected")}),j.addEventListener("error",()=>{if(this.disposed)return;this.setStatus("Connection error")})}catch($){_.write?.(`Terminal backend unavailable: ${$ instanceof Error?$.message:String($)}\r
`),this.setStatus("Unavailable")}}sendResize(){if(!this.socket||this.socket.readyState!==WebSocket.OPEN||!this.fitAddon?.proposeDimensions)return;let _=this.fitAddon.proposeDimensions();if(!_)return;this.socket.send(JSON.stringify({type:"resize",cols:_.cols,rows:_.rows}))}getContent(){return}isDirty(){return!1}focus(){if(this.terminal?.focus){this.terminal.focus();return}this.termEl?.focus()}resize(){this.syncHostLayout();try{this.terminal?.renderer?.remeasureFont?.()}catch{}try{this.fitAddon?.fit?.()}catch{}try{this.terminal?.refresh?.()}catch{}this.syncHostLayout(),this.sendResize()}dispose(){if(this.disposed)return;this.disposed=!0;try{if(this.resizeFrame)cancelAnimationFrame(this.resizeFrame),this.resizeFrame=0}catch{}try{if(this.themeChangeListener)window.removeEventListener("piclaw-theme-change",this.themeChangeListener)}catch{}try{if(this.mediaQuery&&this.mediaQueryListener){if(this.mediaQuery.removeEventListener)this.mediaQuery.removeEventListener("change",this.mediaQueryListener);else if(this.mediaQuery.removeListener)this.mediaQuery.removeListener(this.mediaQueryListener)}}catch{}try{if(this.dockResizeListener)window.removeEventListener("dock-resize",this.dockResizeListener);if(this.windowResizeListener)window.removeEventListener("resize",this.windowResizeListener)}catch{}try{this.themeObserver?.disconnect?.()}catch{}try{this.resizeObserver?.disconnect?.()}catch{}try{this.socket?.close?.()}catch{}try{this.fitAddon?.dispose?.()}catch{}try{this.terminal?.dispose?.()}catch{}this.termEl?.remove()}}var _$={id:"terminal",label:"Terminal",icon:"terminal",capabilities:["terminal"],placement:"dock",mount(_,$){return new e6(_,$)}},$$={id:"terminal-tab",label:"Terminal",icon:"terminal",capabilities:["terminal"],placement:"tabs",canHandle(_){return _?.path==="piclaw://terminal"?1e4:!1},mount(_,$){return new e6(_,$)}};function X4(_={}){let $=_.window??(typeof window<"u"?window:null),j=_.navigator??(typeof navigator<"u"?navigator:null);if(j&&j.standalone===!0)return!0;if(!$||typeof $.matchMedia!=="function")return!1;return["(display-mode: standalone)","(display-mode: minimal-ui)","(display-mode: fullscreen)"].some((Z)=>{try{return Boolean($.matchMedia(Z)?.matches)}catch{return!1}})}function T8(_={}){let $=_.window??(typeof window<"u"?window:null),j=_.navigator??(typeof navigator<"u"?navigator:null);if(!$&&!j)return!1;let Q=String(j?.userAgent||""),Z=Number(j?.maxTouchPoints||0),Y=/Android|webOS|iPhone|iPad|iPod|Mobile|Windows Phone/i.test(Q),q=(()=>{if(!$||typeof $.matchMedia!=="function")return!1;try{return Boolean($.matchMedia("(pointer: coarse)")?.matches||$.matchMedia("(any-pointer: coarse)")?.matches)}catch{return!1}})();return Boolean(Y||Z>1||q)}function C2(_,$={}){if(X4($))return null;if(T8($))return{target:"_blank",features:void 0,mode:"tab"};return{target:Aq(_),features:"popup=yes,width=900,height=960,resizable=yes,scrollbars=yes",mode:"popup"}}function j$(_,$={}){let j=$.window??(typeof window<"u"?window:null);if(!j||!_)return null;try{return _.features?j.open("about:blank",_.target,_.features):j.open("about:blank",_.target)}catch{return null}}function Q$(_,$={}){if(!_||!_.document)return;try{let j=String($.title||"Opening branch…"),Q=String($.message||"Preparing a new branch window…");_.document.title=j,_.document.body.innerHTML=`
            <div style="font-family: system-ui, sans-serif; padding: 24px; color: #222;">
                <h1 style="font-size: 18px; margin: 0 0 12px;">${j}</h1>
                <p style="margin: 0; line-height: 1.5;">${Q}</p>
            </div>
        `}catch{}}function Z$(_,$){if(!_||!$)return;try{if(_.location&&typeof _.location.replace==="function"){_.location.replace(String($));return}_.location=String($)}catch{}}function Y$(_){if(!_||typeof _.close!=="function")return;try{_.close()}catch{}}function V4(_,$,j={}){let Q=new URL(String(_||"http://localhost/")),Z=String($||"").trim()||"web:default";if(Q.searchParams.set("chat_jid",Z),Q.searchParams.delete("branch_loader"),Q.searchParams.delete("branch_source_chat_jid"),Q.searchParams.delete("pane_popout"),Q.searchParams.delete("pane_path"),Q.searchParams.delete("pane_label"),j.chatOnly!==!1)Q.searchParams.set("chat_only","1");return Q.toString()}function P2(_,$,j={}){let Q=new URL(String(_||"http://localhost/")),Z=String($||"").trim()||"web:default";if(Q.searchParams.set("branch_loader","1"),Q.searchParams.set("branch_source_chat_jid",Z),Q.searchParams.delete("chat_jid"),Q.searchParams.delete("pane_popout"),Q.searchParams.delete("pane_path"),Q.searchParams.delete("pane_label"),j.chatOnly!==!1)Q.searchParams.set("chat_only","1");return Q.toString()}function y2(_,$,j={}){let Q=new URL(String(_||"http://localhost/")),Z=String($||"").trim();if(!Z)return Q.toString();if(Q.searchParams.set("pane_popout","1"),Q.searchParams.set("pane_path",Z),j?.label)Q.searchParams.set("pane_label",String(j.label));else Q.searchParams.delete("pane_label");if(j?.chatJid)Q.searchParams.set("chat_jid",String(j.chatJid));let Y=j?.params&&typeof j.params==="object"?j.params:null;if(Y)for(let[q,K]of Object.entries(Y)){let N=String(q||"").trim();if(!N)continue;if(K===null||K===void 0||K==="")Q.searchParams.delete(N);else Q.searchParams.set(N,String(K))}return Q.searchParams.delete("chat_only"),Q.searchParams.delete("branch_loader"),Q.searchParams.delete("branch_source_chat_jid"),Q.toString()}function Aq(_){return`piclaw-chat-${String(_||"web:default").trim().toLowerCase().replace(/[^a-z0-9_-]+/g,"-")||"default"}`}function Dq(_){return`piclaw-pane-${String(_||"pane").trim().toLowerCase().replace(/[^a-z0-9_-]+/g,"-")||"default"}`}function S2(_,$={}){if(X4($))return null;if(T8($))return{target:"_blank",features:void 0,mode:"tab"};return{target:Dq(_),features:"popup=yes,width=1200,height=960,resizable=yes,scrollbars=yes",mode:"popup"}}function m5(_){let $=_ instanceof Error?_.message:String(_||"").trim(),j=String($||"").trim();if(!j)return"PiClaw could not open a new branch window.";let Q=j.toLowerCase();if(Q.includes("no stable turn boundary"))return"This chat is still in flight and does not yet have a stable turn boundary to fork from.";if(Q.includes("cannot fork a branch while the source chat is still active"))return"This chat is still active. Please wait for the current turn to settle, then try again.";if(Q.includes("cancelled"))return"Branch creation was cancelled before a new chat window could be opened.";if(Q.includes("did not return a chat id"))return"PiClaw created no usable branch id for the new window. Please try again.";if(Q.includes("failed to fork branch")||Q.includes("failed to fork chat branch"))return"PiClaw could not create the new branch. Please try again.";return j}function Eq(_){try{return JSON.parse(_)}catch{return null}}function kq(_){if(typeof _==="string")return new TextEncoder().encode(_).byteLength;if(_ instanceof ArrayBuffer)return _.byteLength;if(ArrayBuffer.isView(_))return _.byteLength;if(_ instanceof Blob)return _.size;return 0}function Mq(_){if(typeof _==="string")return _.length;if(_ instanceof ArrayBuffer)return _.byteLength;if(_ instanceof Blob)return _.size;return Number(_?.size||0)}class q${socket=null;disposed=!1;options;bytesIn=0;bytesOut=0;constructor(_){this.options=_}connect(){if(this.disposed)return;try{this.socket?.close?.()}catch{}let _=new WebSocket(this.options.url);_.binaryType=this.options.binaryType||"arraybuffer",_.addEventListener("open",()=>{if(this.disposed||this.socket!==_)return;this.options.onOpen?.()}),_.addEventListener("message",($)=>{if(this.disposed||this.socket!==_)return;let j=Mq($.data);if(this.bytesIn+=j,this.emitMetrics(),typeof $.data==="string"){let Q=this.options.parseControlMessage||Eq;this.options.onMessage?.({kind:"control",raw:$.data,payload:Q($.data)});return}this.options.onMessage?.({kind:"binary",data:$.data,size:j})}),_.addEventListener("close",()=>{if(this.socket===_)this.socket=null;if(this.disposed)return;this.options.onClose?.()}),_.addEventListener("error",()=>{if(this.disposed||this.socket!==_)return;this.options.onError?.()}),this.socket=_}send(_){if(this.disposed||!this.socket)return;let $=kq(_);this.bytesOut+=$,this.emitMetrics(),this.socket.send(_)}sendControl(_){this.send(JSON.stringify(_??{}))}getMetrics(){return{bytesIn:this.bytesIn,bytesOut:this.bytesOut}}dispose(){if(this.disposed)return;this.disposed=!0;try{this.socket?.close?.()}catch{}this.socket=null}emitMetrics(){this.options.onMetrics?.(this.getMetrics())}}var h5=()=>{throw Error("Operation requires compiling with --exportRuntime")},Iq=typeof BigUint64Array<"u",p5=Symbol();var xq=new TextDecoder("utf-16le",{fatal:!0});Object.hasOwn=Object.hasOwn||function(_,$){return Object.prototype.hasOwnProperty.call(_,$)};function w2(_,$){let j=new Uint32Array(_)[$+-4>>>2]>>>1,Q=new Uint16Array(_,$,j);if(j<=192)return String.fromCharCode(...Q);try{return xq.decode(Q)}catch{let Z="",Y=0;while(j-Y>1024)Z+=String.fromCharCode(...Q.subarray(Y,Y+=1024));return Z+String.fromCharCode(...Q.subarray(Y))}}function R2(_){let $={};function j(Z,Y){if(!Z)return"<yet unknown>";return w2(Z.buffer,Y)}let Q=_.env=_.env||{};return Q.abort=Q.abort||function(Y,q,K,N){let G=$.memory||Q.memory;throw Error(`abort: ${j(G,Y)} at ${j(G,q)}:${K}:${N}`)},Q.trace=Q.trace||function(Y,q,...K){let N=$.memory||Q.memory;console.log(`trace: ${j(N,Y)}${q?" ":""}${K.slice(0,q).join(", ")}`)},Q.seed=Q.seed||Date.now,_.Math=_.Math||Math,_.Date=_.Date||Date,$}function u2(_,$){let j=$.exports,Q=j.memory,Z=j.table,Y=j.__new||h5,q=j.__pin||h5,K=j.__unpin||h5,N=j.__collect||h5,G=j.__rtti_base,X=G?(z)=>z[G>>>2]:h5;_.__new=Y,_.__pin=q,_.__unpin=K,_.__collect=N;function V(z){let C=new Uint32Array(Q.buffer);if((z>>>=0)>=X(C))throw Error(`invalid id: ${z}`);return C[(G+4>>>2)+z]}function U(z){let C=V(z);if(!(C&7))throw Error(`not an array: ${z}, flags=${C}`);return C}function L(z){return 31-Math.clz32(z>>>6&31)}function J(z){if(z==null)return 0;let C=z.length,b=Y(C<<1,2),e=new Uint16Array(Q.buffer);for(let h=0,a=b>>>1;h<C;++h)e[a+h]=z.charCodeAt(h);return b}_.__newString=J;function D(z){if(z==null)return 0;let C=new Uint8Array(z),b=Y(C.length,1);return new Uint8Array(Q.buffer).set(C,b),b}_.__newArrayBuffer=D;function O(z){if(!z)return null;let C=Q.buffer;if(new Uint32Array(C)[z+-8>>>2]!==2)throw Error(`not a string: ${z}`);return w2(C,z)}_.__getString=O;function W(z,C,b){let e=Q.buffer;if(b)switch(z){case 2:return new Float32Array(e);case 3:return new Float64Array(e)}else switch(z){case 0:return new(C?Int8Array:Uint8Array)(e);case 1:return new(C?Int16Array:Uint16Array)(e);case 2:return new(C?Int32Array:Uint32Array)(e);case 3:return new(C?BigInt64Array:BigUint64Array)(e)}throw Error(`unsupported align: ${z}`)}function A(z,C=0){let b=C,e=U(z),h=L(e),a=typeof b!=="number",t=a?b.length:b,_0=Y(t<<h,e&4?z:1),q0;if(e&4)q0=_0;else{q(_0);let Z0=Y(e&2?16:12,z);K(_0);let K0=new Uint32Array(Q.buffer);if(K0[Z0+0>>>2]=_0,K0[Z0+4>>>2]=_0,K0[Z0+8>>>2]=t<<h,e&2)K0[Z0+12>>>2]=t;q0=Z0}if(a){let Z0=W(h,e&2048,e&4096),K0=_0>>>h;if(e&16384)for(let B0=0;B0<t;++B0)Z0[K0+B0]=b[B0];else Z0.set(b,K0)}return q0}_.__newArray=A;function E(z){let C=new Uint32Array(Q.buffer),b=C[z+-8>>>2],e=U(b),h=L(e),a=e&4?z:C[z+4>>>2],t=e&2?C[z+12>>>2]:C[a+-4>>>2]>>>h;return W(h,e&2048,e&4096).subarray(a>>>=h,a+t)}_.__getArrayView=E;function f(z){let C=E(z),b=C.length,e=Array(b);for(let h=0;h<b;h++)e[h]=C[h];return e}_.__getArray=f;function u(z){let C=Q.buffer,b=new Uint32Array(C)[z+-4>>>2];return C.slice(z,z+b)}_.__getArrayBuffer=u;function c(z){if(!Z)throw Error("Operation requires compiling with --exportTable");let C=new Uint32Array(Q.buffer)[z>>>2];return Z.get(C)}_.__getFunction=c;function r(z,C,b){return new z(P(z,C,b))}function P(z,C,b){let e=Q.buffer,h=new Uint32Array(e);return new z(e,h[b+4>>>2],h[b+8>>>2]>>>C)}function I(z,C,b){_[`__get${C}`]=r.bind(null,z,b),_[`__get${C}View`]=P.bind(null,z,b)}if([Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array].forEach((z)=>{I(z,z.name,31-Math.clz32(z.BYTES_PER_ELEMENT))}),Iq)[BigUint64Array,BigInt64Array].forEach((z)=>{I(z,z.name.slice(3),3)});return _.memory=_.memory||Q,_.table=_.table||Z,Cq(j,_)}function f2(_){return typeof Response<"u"&&_ instanceof Response}function Tq(_){return _ instanceof WebAssembly.Module}async function K$(_,$={}){if(f2(_=await _))return C8(_,$);let j=Tq(_)?_:await WebAssembly.compile(_),Q=R2($),Z=await WebAssembly.instantiate(j,$),Y=u2(Q,Z);return{module:j,instance:Z,exports:Y}}async function C8(_,$={}){if(!WebAssembly.instantiateStreaming)return K$(f2(_=await _)?_.arrayBuffer():_,$);let j=R2($),Q=await WebAssembly.instantiateStreaming(_,$),Z=u2(j,Q.instance);return{...Q,exports:Z}}function Cq(_,$={}){let j=_.__argumentsLength?(Q)=>{_.__argumentsLength.value=Q}:_.__setArgumentsLength||_.__setargc||(()=>{});for(let Q of Object.keys(_)){let Z=_[Q],Y=Q.split("."),q=$;while(Y.length>1){let G=Y.shift();if(!Object.hasOwn(q,G))q[G]={};q=q[G]}let K=Y[0],N=K.indexOf("#");if(N>=0){let G=K.substring(0,N),X=q[G];if(typeof X>"u"||!X.prototype){let V=function(...U){return V.wrap(V.prototype.constructor(0,...U))};if(V.prototype={valueOf(){return this[p5]}},V.wrap=function(U){return Object.create(V.prototype,{[p5]:{value:U,writable:!1}})},X)Object.getOwnPropertyNames(X).forEach((U)=>Object.defineProperty(V,U,Object.getOwnPropertyDescriptor(X,U)));q[G]=V}if(K=K.substring(N+1),q=q[G].prototype,/^(get|set):/.test(K)){if(!Object.hasOwn(q,K=K.substring(4))){let V=_[Q.replace("set:","get:")],U=_[Q.replace("get:","set:")];Object.defineProperty(q,K,{get(){return V(this[p5])},set(L){U(this[p5],L)},enumerable:!0})}}else if(K==="constructor")(q[K]=function(...V){return j(V.length),Z(...V)}).original=Z;else(q[K]=function(...V){return j(V.length),Z(this[p5],...V)}).original=Z}else if(/^(get|set):/.test(K)){if(!Object.hasOwn(q,K=K.substring(4)))Object.defineProperty(q,K,{get:_[Q.replace("set:","get:")],set:_[Q.replace("get:","set:")],enumerable:!0})}else if(typeof Z==="function"&&Z!==j)(q[K]=(...G)=>{return j(G.length),Z(...G)}).original=Z;else q[K]=Z}return $}var yq="/static/js/vendor/remote-display-decoder.wasm",P8=null;function v2(_){if(_ instanceof ArrayBuffer)return _;if(_.byteOffset===0&&_.byteLength===_.buffer.byteLength)return _.buffer;return _.slice().buffer}async function g2(){if(P8)return P8;return P8=(async()=>{try{let Q=function(Z,Y,q,K,N,G,X){let V=v2(Y),U=j.__pin(j.__newArrayBuffer(V));try{return j[Z](U,q,K,N,G,X.bitsPerPixel,X.bigEndian?1:0,X.trueColor?1:0,X.redMax,X.greenMax,X.blueMax,X.redShift,X.greenShift,X.blueShift)}finally{j.__unpin(U);try{j.__collect()}catch{}}},_=await fetch(yq,{credentials:"same-origin"});if(!_.ok)throw Error(`HTTP ${_.status}`);let j=(typeof C8==="function"?await C8(_,{}):await K$(await _.arrayBuffer(),{})).exports;for(let Z of["initFramebuffer","getFramebufferPtr","getFramebufferLen","getFramebufferWidth","getFramebufferHeight","processRawRect","processCopyRect","processRreRect","processHextileRect","processZrleTileData","decodeRawRectToRgba"])if(typeof j[Z]!=="function")throw Error(`${Z} export is missing.`);return{initFramebuffer(Z,Y){j.initFramebuffer(Z,Y)},getFramebuffer(){let Z=j.getFramebufferPtr(),Y=j.getFramebufferLen();return new Uint8ClampedArray(new Uint8Array(j.memory.buffer,Z,Y).slice().buffer)},getFramebufferWidth(){return j.getFramebufferWidth()},getFramebufferHeight(){return j.getFramebufferHeight()},processRawRect(Z,Y,q,K,N,G){return Q("processRawRect",Z,Y,q,K,N,G)},processCopyRect(Z,Y,q,K,N,G){return j.processCopyRect(Z,Y,q,K,N,G)},processRreRect(Z,Y,q,K,N,G){return Q("processRreRect",Z,Y,q,K,N,G)},processHextileRect(Z,Y,q,K,N,G){return Q("processHextileRect",Z,Y,q,K,N,G)},processZrleTileData(Z,Y,q,K,N,G){return Q("processZrleTileData",Z,Y,q,K,N,G)},decodeRawRectToRgba(Z,Y,q,K){let N=v2(Z),G=j.__pin(j.__newArrayBuffer(N));try{let X=j.__pin(j.decodeRawRectToRgba(G,Y,q,K.bitsPerPixel,K.bigEndian?1:0,K.trueColor?1:0,K.redMax,K.greenMax,K.blueMax,K.redShift,K.greenShift,K.blueShift));try{return new Uint8ClampedArray(j.__getArrayBuffer(X))}finally{j.__unpin(X)}}finally{j.__unpin(G);try{j.__collect?.()}catch{}}}}}catch(_){return console.warn("[remote-display] Failed to load WASM pipeline, using JS fallback.",_),null}})(),P8}function B5(_,$,j){return Math.max($,Math.min(j,_))}function y8(_,$,j){let Q=new Uint8Array(6),Z=B5(Math.floor(Number($||0)),0,65535),Y=B5(Math.floor(Number(j||0)),0,65535);return Q[0]=5,Q[1]=B5(Math.floor(Number(_||0)),0,255),Q[2]=Z>>8&255,Q[3]=Z&255,Q[4]=Y>>8&255,Q[5]=Y&255,Q}function G$(_){switch(Number(_)){case 0:return 1;case 1:return 2;case 2:return 4;default:return 0}}function b2(_,$,j,Q,Z){let Y=Math.max(1,Math.floor(Number(Q||0))),q=Math.max(1,Math.floor(Number(Z||0))),K=Math.max(1,Number(j?.width||0)),N=Math.max(1,Number(j?.height||0)),G=(Number(_||0)-Number(j?.left||0))/K,X=(Number($||0)-Number(j?.top||0))/N;return{x:B5(Math.floor(G*Y),0,Math.max(0,Y-1)),y:B5(Math.floor(X*q),0,Math.max(0,q-1))}}function m2(_,$,j,Q=0){let Z=Number(_)<0?8:16,Y=B5(Number(Q||0)|Z,0,255);return[y8(Y,$,j),y8(Number(Q||0),$,j)]}function h2(_,$){let j=new Uint8Array(8),Q=Math.max(0,Math.min(4294967295,Number($||0)>>>0));return j[0]=4,j[1]=_?1:0,j[4]=Q>>>24&255,j[5]=Q>>>16&255,j[6]=Q>>>8&255,j[7]=Q&255,j}function c5(_){if(typeof _!=="string")return null;return _.length>0?_:null}function p2(_,$,j,Q){let Z=Math.max(1,Math.floor(Number(_||0))),Y=Math.max(1,Math.floor(Number($||0))),q=Math.max(1,Math.floor(Number(j||0))),K=Math.max(1,Math.floor(Number(Q||0))),N=Math.min(Z/q,Y/K);if(!Number.isFinite(N)||N<=0)return 1;return Math.max(0.01,N)}var N$={Backspace:65288,Tab:65289,Enter:65293,Escape:65307,Insert:65379,Delete:65535,Home:65360,End:65367,PageUp:65365,PageDown:65366,ArrowLeft:65361,ArrowUp:65362,ArrowRight:65363,ArrowDown:65364,Shift:65505,ShiftLeft:65505,ShiftRight:65506,Control:65507,ControlLeft:65507,ControlRight:65508,Alt:65513,AltLeft:65513,AltRight:65514,Meta:65515,MetaLeft:65515,MetaRight:65516,Super:65515,Super_L:65515,Super_R:65516,CapsLock:65509,NumLock:65407,ScrollLock:65300,Pause:65299,PrintScreen:65377,ContextMenu:65383,Menu:65383," ":32};for(let _=1;_<=12;_+=1)N$[`F${_}`]=65470+(_-1);function X$(_){let $=[_?.key,_?.code];for(let Y of $)if(Y&&Object.prototype.hasOwnProperty.call(N$,Y))return N$[Y];let j=String(_?.key||""),Q=j?j.codePointAt(0):null,Z=Q==null?0:Q>65535?2:1;if(Q!=null&&j.length===Z){if(Q<=255)return Q;return(16777216|Q)>>>0}return null}var w1=Uint8Array,F_=Uint16Array,J$=Int32Array,S8=new w1([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),w8=new w1([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),W$=new w1([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),d2=function(_,$){var j=new F_(31);for(var Q=0;Q<31;++Q)j[Q]=$+=1<<_[Q-1];var Z=new J$(j[30]);for(var Q=1;Q<30;++Q)for(var Y=j[Q];Y<j[Q+1];++Y)Z[Y]=Y-j[Q]<<5|Q;return{b:j,r:Z}},i2=d2(S8,2),r2=i2.b,F$=i2.r;r2[28]=258,F$[258]=28;var o2=d2(w8,0),Sq=o2.b,c2=o2.r,z$=new F_(32768);for(h0=0;h0<32768;++h0)o_=(h0&43690)>>1|(h0&21845)<<1,o_=(o_&52428)>>2|(o_&13107)<<2,o_=(o_&61680)>>4|(o_&3855)<<4,z$[h0]=((o_&65280)>>8|(o_&255)<<8)>>1;var o_,h0,s_=function(_,$,j){var Q=_.length,Z=0,Y=new F_($);for(;Z<Q;++Z)if(_[Z])++Y[_[Z]-1];var q=new F_($);for(Z=1;Z<$;++Z)q[Z]=q[Z-1]+Y[Z-1]<<1;var K;if(j){K=new F_(1<<$);var N=15-$;for(Z=0;Z<Q;++Z)if(_[Z]){var G=Z<<4|_[Z],X=$-_[Z],V=q[_[Z]-1]++<<X;for(var U=V|(1<<X)-1;V<=U;++V)K[z$[V]>>N]=G}}else{K=new F_(Q);for(Z=0;Z<Q;++Z)if(_[Z])K[Z]=z$[q[_[Z]-1]++]>>15-_[Z]}return K},T4=new w1(288);for(h0=0;h0<144;++h0)T4[h0]=8;var h0;for(h0=144;h0<256;++h0)T4[h0]=9;var h0;for(h0=256;h0<280;++h0)T4[h0]=7;var h0;for(h0=280;h0<288;++h0)T4[h0]=8;var h0,i5=new w1(32);for(h0=0;h0<32;++h0)i5[h0]=5;var h0,wq=s_(T4,9,0),Rq=s_(T4,9,1),uq=s_(i5,5,0),fq=s_(i5,5,1),V$=function(_){var $=_[0];for(var j=1;j<_.length;++j)if(_[j]>$)$=_[j];return $},b_=function(_,$,j){var Q=$/8|0;return(_[Q]|_[Q+1]<<8)>>($&7)&j},U$=function(_,$){var j=$/8|0;return(_[j]|_[j+1]<<8|_[j+2]<<16)>>($&7)},O$=function(_){return(_+7)/8|0},d5=function(_,$,j){if($==null||$<0)$=0;if(j==null||j>_.length)j=_.length;return new w1(_.subarray($,j))};var vq=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],U_=function(_,$,j){var Q=Error($||vq[_]);if(Q.code=_,Error.captureStackTrace)Error.captureStackTrace(Q,U_);if(!j)throw Q;return Q},gq=function(_,$,j,Q){var Z=_.length,Y=Q?Q.length:0;if(!Z||$.f&&!$.l)return j||new w1(0);var q=!j,K=q||$.i!=2,N=$.i;if(q)j=new w1(Z*3);var G=function(d0){var F0=j.length;if(d0>F0){var x0=new w1(Math.max(F0*2,d0));x0.set(j),j=x0}},X=$.f||0,V=$.p||0,U=$.b||0,L=$.l,J=$.d,D=$.m,O=$.n,W=Z*8;do{if(!L){X=b_(_,V,1);var A=b_(_,V+1,3);if(V+=3,!A){var E=O$(V)+4,f=_[E-4]|_[E-3]<<8,u=E+f;if(u>Z){if(N)U_(0);break}if(K)G(U+f);j.set(_.subarray(E,u),U),$.b=U+=f,$.p=V=u*8,$.f=X;continue}else if(A==1)L=Rq,J=fq,D=9,O=5;else if(A==2){var c=b_(_,V,31)+257,r=b_(_,V+10,15)+4,P=c+b_(_,V+5,31)+1;V+=14;var I=new w1(P),z=new w1(19);for(var C=0;C<r;++C)z[W$[C]]=b_(_,V+C*3,7);V+=r*3;var b=V$(z),e=(1<<b)-1,h=s_(z,b,1);for(var C=0;C<P;){var a=h[b_(_,V,e)];V+=a&15;var E=a>>4;if(E<16)I[C++]=E;else{var t=0,_0=0;if(E==16)_0=3+b_(_,V,3),V+=2,t=I[C-1];else if(E==17)_0=3+b_(_,V,7),V+=3;else if(E==18)_0=11+b_(_,V,127),V+=7;while(_0--)I[C++]=t}}var q0=I.subarray(0,c),Z0=I.subarray(c);D=V$(q0),O=V$(Z0),L=s_(q0,D,1),J=s_(Z0,O,1)}else U_(1);if(V>W){if(N)U_(0);break}}if(K)G(U+131072);var K0=(1<<D)-1,B0=(1<<O)-1,U0=V;for(;;U0=V){var t=L[U$(_,V)&K0],f0=t>>4;if(V+=t&15,V>W){if(N)U_(0);break}if(!t)U_(2);if(f0<256)j[U++]=f0;else if(f0==256){U0=V,L=null;break}else{var M0=f0-254;if(f0>264){var C=f0-257,A0=S8[C];M0=b_(_,V,(1<<A0)-1)+r2[C],V+=A0}var b0=J[U$(_,V)&B0],u0=b0>>4;if(!b0)U_(3);V+=b0&15;var Z0=Sq[u0];if(u0>3){var A0=w8[u0];Z0+=U$(_,V)&(1<<A0)-1,V+=A0}if(V>W){if(N)U_(0);break}if(K)G(U+131072);var p0=U+M0;if(U<Z0){var n0=Y-Z0,E0=Math.min(Z0,p0);if(n0+U<0)U_(3);for(;U<E0;++U)j[U]=Q[n0+U]}for(;U<p0;++U)j[U]=j[U-Z0]}}if($.l=L,$.p=U0,$.b=U,$.f=X,L)X=1,$.m=D,$.d=J,$.n=O}while(!X);return U!=j.length&&q?d5(j,0,U):j.subarray(0,U)},U4=function(_,$,j){j<<=$&7;var Q=$/8|0;_[Q]|=j,_[Q+1]|=j>>8},l5=function(_,$,j){j<<=$&7;var Q=$/8|0;_[Q]|=j,_[Q+1]|=j>>8,_[Q+2]|=j>>16},L$=function(_,$){var j=[];for(var Q=0;Q<_.length;++Q)if(_[Q])j.push({s:Q,f:_[Q]});var Z=j.length,Y=j.slice();if(!Z)return{t:a2,l:0};if(Z==1){var q=new w1(j[0].s+1);return q[j[0].s]=1,{t:q,l:1}}j.sort(function(u,c){return u.f-c.f}),j.push({s:-1,f:25001});var K=j[0],N=j[1],G=0,X=1,V=2;j[0]={s:-1,f:K.f+N.f,l:K,r:N};while(X!=Z-1)K=j[j[G].f<j[V].f?G++:V++],N=j[G!=X&&j[G].f<j[V].f?G++:V++],j[X++]={s:-1,f:K.f+N.f,l:K,r:N};var U=Y[0].s;for(var Q=1;Q<Z;++Q)if(Y[Q].s>U)U=Y[Q].s;var L=new F_(U+1),J=H$(j[X-1],L,0);if(J>$){var Q=0,D=0,O=J-$,W=1<<O;Y.sort(function(c,r){return L[r.s]-L[c.s]||c.f-r.f});for(;Q<Z;++Q){var A=Y[Q].s;if(L[A]>$)D+=W-(1<<J-L[A]),L[A]=$;else break}D>>=O;while(D>0){var E=Y[Q].s;if(L[E]<$)D-=1<<$-L[E]++-1;else++Q}for(;Q>=0&&D;--Q){var f=Y[Q].s;if(L[f]==$)--L[f],++D}J=$}return{t:new w1(L),l:J}},H$=function(_,$,j){return _.s==-1?Math.max(H$(_.l,$,j+1),H$(_.r,$,j+1)):$[_.s]=j},l2=function(_){var $=_.length;while($&&!_[--$]);var j=new F_(++$),Q=0,Z=_[0],Y=1,q=function(N){j[Q++]=N};for(var K=1;K<=$;++K)if(_[K]==Z&&K!=$)++Y;else{if(!Z&&Y>2){for(;Y>138;Y-=138)q(32754);if(Y>2)q(Y>10?Y-11<<5|28690:Y-3<<5|12305),Y=0}else if(Y>3){q(Z),--Y;for(;Y>6;Y-=6)q(8304);if(Y>2)q(Y-3<<5|8208),Y=0}while(Y--)q(Z);Y=1,Z=_[K]}return{c:j.subarray(0,Q),n:$}},n5=function(_,$){var j=0;for(var Q=0;Q<$.length;++Q)j+=_[Q]*$[Q];return j},s2=function(_,$,j){var Q=j.length,Z=O$($+2);_[Z]=Q&255,_[Z+1]=Q>>8,_[Z+2]=_[Z]^255,_[Z+3]=_[Z+1]^255;for(var Y=0;Y<Q;++Y)_[Z+Y+4]=j[Y];return(Z+4+Q)*8},n2=function(_,$,j,Q,Z,Y,q,K,N,G,X){U4($,X++,j),++Z[256];var V=L$(Z,15),U=V.t,L=V.l,J=L$(Y,15),D=J.t,O=J.l,W=l2(U),A=W.c,E=W.n,f=l2(D),u=f.c,c=f.n,r=new F_(19);for(var P=0;P<A.length;++P)++r[A[P]&31];for(var P=0;P<u.length;++P)++r[u[P]&31];var I=L$(r,7),z=I.t,C=I.l,b=19;for(;b>4&&!z[W$[b-1]];--b);var e=G+5<<3,h=n5(Z,T4)+n5(Y,i5)+q,a=n5(Z,U)+n5(Y,D)+q+14+3*b+n5(r,z)+2*r[16]+3*r[17]+7*r[18];if(N>=0&&e<=h&&e<=a)return s2($,X,_.subarray(N,N+G));var t,_0,q0,Z0;if(U4($,X,1+(a<h)),X+=2,a<h){t=s_(U,L,0),_0=U,q0=s_(D,O,0),Z0=D;var K0=s_(z,C,0);U4($,X,E-257),U4($,X+5,c-1),U4($,X+10,b-4),X+=14;for(var P=0;P<b;++P)U4($,X+3*P,z[W$[P]]);X+=3*b;var B0=[A,u];for(var U0=0;U0<2;++U0){var f0=B0[U0];for(var P=0;P<f0.length;++P){var M0=f0[P]&31;if(U4($,X,K0[M0]),X+=z[M0],M0>15)U4($,X,f0[P]>>5&127),X+=f0[P]>>12}}}else t=wq,_0=T4,q0=uq,Z0=i5;for(var P=0;P<K;++P){var A0=Q[P];if(A0>255){var M0=A0>>18&31;if(l5($,X,t[M0+257]),X+=_0[M0+257],M0>7)U4($,X,A0>>23&31),X+=S8[M0];var b0=A0&31;if(l5($,X,q0[b0]),X+=Z0[b0],b0>3)l5($,X,A0>>5&8191),X+=w8[b0]}else l5($,X,t[A0]),X+=_0[A0]}return l5($,X,t[256]),X+_0[256]},bq=new J$([65540,131080,131088,131104,262176,1048704,1048832,2114560,2117632]),a2=new w1(0),mq=function(_,$,j,Q,Z,Y){var q=Y.z||_.length,K=new w1(Q+q+5*(1+Math.ceil(q/7000))+Z),N=K.subarray(Q,K.length-Z),G=Y.l,X=(Y.r||0)&7;if($){if(X)N[0]=Y.r>>3;var V=bq[$-1],U=V>>13,L=V&8191,J=(1<<j)-1,D=Y.p||new F_(32768),O=Y.h||new F_(J+1),W=Math.ceil(j/3),A=2*W,E=function(i0){return(_[i0]^_[i0+1]<<W^_[i0+2]<<A)&J},f=new J$(25000),u=new F_(288),c=new F_(32),r=0,P=0,I=Y.i||0,z=0,C=Y.w||0,b=0;for(;I+2<q;++I){var e=E(I),h=I&32767,a=O[e];if(D[h]=a,O[e]=h,C<=I){var t=q-I;if((r>7000||z>24576)&&(t>423||!G)){X=n2(_,N,0,f,u,c,P,z,b,I-b,X),z=r=P=0,b=I;for(var _0=0;_0<286;++_0)u[_0]=0;for(var _0=0;_0<30;++_0)c[_0]=0}var q0=2,Z0=0,K0=L,B0=h-a&32767;if(t>2&&e==E(I-B0)){var U0=Math.min(U,t)-1,f0=Math.min(32767,I),M0=Math.min(258,t);while(B0<=f0&&--K0&&h!=a){if(_[I+q0]==_[I+q0-B0]){var A0=0;for(;A0<M0&&_[I+A0]==_[I+A0-B0];++A0);if(A0>q0){if(q0=A0,Z0=B0,A0>U0)break;var b0=Math.min(B0,A0-2),u0=0;for(var _0=0;_0<b0;++_0){var p0=I-B0+_0&32767,n0=D[p0],E0=p0-n0&32767;if(E0>u0)u0=E0,a=p0}}}h=a,a=D[h],B0+=h-a&32767}}if(Z0){f[z++]=268435456|F$[q0]<<18|c2[Z0];var d0=F$[q0]&31,F0=c2[Z0]&31;P+=S8[d0]+w8[F0],++u[257+d0],++c[F0],C=I+q0,++r}else f[z++]=_[I],++u[_[I]]}}for(I=Math.max(I,C);I<q;++I)f[z++]=_[I],++u[_[I]];if(X=n2(_,N,G,f,u,c,P,z,b,I-b,X),!G)Y.r=X&7|N[X/8|0]<<3,X-=7,Y.h=O,Y.p=D,Y.i=I,Y.w=C}else{for(var I=Y.w||0;I<q+G;I+=65535){var x0=I+65535;if(x0>=q)N[X/8|0]=G,x0=q;X=s2(N,X+1,_.subarray(I,x0))}Y.i=q}return d5(K,0,Q+O$(X)+Z)};var t2=function(){var _=1,$=0;return{p:function(j){var Q=_,Z=$,Y=j.length|0;for(var q=0;q!=Y;){var K=Math.min(q+2655,Y);for(;q<K;++q)Z+=Q+=j[q];Q=(Q&65535)+15*(Q>>16),Z=(Z&65535)+15*(Z>>16)}_=Q,$=Z},d:function(){return _%=65521,$%=65521,(_&255)<<24|(_&65280)<<8|($&255)<<8|$>>8}}},hq=function(_,$,j,Q,Z){if(!Z){if(Z={l:1},$.dictionary){var Y=$.dictionary.subarray(-32768),q=new w1(Y.length+_.length);q.set(Y),q.set(_,Y.length),_=q,Z.w=Y.length}}return mq(_,$.level==null?6:$.level,$.mem==null?Z.l?Math.ceil(Math.max(8,Math.min(13,Math.log(_.length)))*1.5):20:12+$.mem,j,Q,Z)};var e2=function(_,$,j){for(;j;++$)_[$]=j,j>>>=8};var pq=function(_,$){var j=$.level,Q=j==0?0:j<6?1:j==9?3:2;if(_[0]=120,_[1]=Q<<6|($.dictionary&&32),_[1]|=31-(_[0]<<8|_[1])%31,$.dictionary){var Z=t2();Z.p($.dictionary),e2(_,2,Z.d())}},cq=function(_,$){if((_[0]&15)!=8||_[0]>>4>7||(_[0]<<8|_[1])%31)U_(6,"invalid zlib data");if((_[1]>>5&1)==+!$)U_(6,"invalid zlib data: "+(_[1]&32?"need":"unexpected")+" dictionary");return(_[1]>>3&4)+2};var B$=function(){function _($,j){if(typeof $=="function")j=$,$={};this.ondata=j;var Q=$&&$.dictionary&&$.dictionary.subarray(-32768);if(this.s={i:0,b:Q?Q.length:0},this.o=new w1(32768),this.p=new w1(0),Q)this.o.set(Q)}return _.prototype.e=function($){if(!this.ondata)U_(5);if(this.d)U_(4);if(!this.p.length)this.p=$;else if($.length){var j=new w1(this.p.length+$.length);j.set(this.p),j.set($,this.p.length),this.p=j}},_.prototype.c=function($){this.s.i=+(this.d=$||!1);var j=this.s.b,Q=gq(this.p,this.s,this.o);this.ondata(d5(Q,j,this.s.b),this.d),this.o=d5(Q,this.s.b-32768),this.s.b=this.o.length,this.p=d5(this.p,this.s.p/8|0),this.s.p&=7},_.prototype.push=function($,j){this.e($),this.c(j)},_}();function _7(_,$){if(!$)$={};var j=t2();j.p(_);var Q=hq(_,$,$.dictionary?6:2,4);return pq(Q,$),e2(Q,Q.length-4,j.d()),Q}var $7=function(){function _($,j){B$.call(this,$,j),this.v=$&&$.dictionary?2:1}return _.prototype.push=function($,j){if(B$.prototype.e.call(this,$),this.v){if(this.p.length<6&&!j)return;this.p=this.p.subarray(cq(this.p,this.v-1)),this.v=0}if(j){if(this.p.length<4)U_(6,"invalid zlib data");this.p=this.p.subarray(0,-4)}B$.prototype.c.call(this,j)},_}();var lq=typeof TextDecoder<"u"&&new TextDecoder,nq=0;try{lq.decode(a2,{stream:!0}),nq=1}catch(_){}var dq=[58,50,42,34,26,18,10,2,60,52,44,36,28,20,12,4,62,54,46,38,30,22,14,6,64,56,48,40,32,24,16,8,57,49,41,33,25,17,9,1,59,51,43,35,27,19,11,3,61,53,45,37,29,21,13,5,63,55,47,39,31,23,15,7],iq=[40,8,48,16,56,24,64,32,39,7,47,15,55,23,63,31,38,6,46,14,54,22,62,30,37,5,45,13,53,21,61,29,36,4,44,12,52,20,60,28,35,3,43,11,51,19,59,27,34,2,42,10,50,18,58,26,33,1,41,9,49,17,57,25],rq=[32,1,2,3,4,5,4,5,6,7,8,9,8,9,10,11,12,13,12,13,14,15,16,17,16,17,18,19,20,21,20,21,22,23,24,25,24,25,26,27,28,29,28,29,30,31,32,1],oq=[16,7,20,21,29,12,28,17,1,15,23,26,5,18,31,10,2,8,24,14,32,27,3,9,19,13,30,6,22,11,4,25],sq=[57,49,41,33,25,17,9,1,58,50,42,34,26,18,10,2,59,51,43,35,27,19,11,3,60,52,44,36,63,55,47,39,31,23,15,7,62,54,46,38,30,22,14,6,61,53,45,37,29,21,13,5,28,20,12,4],aq=[14,17,11,24,1,5,3,28,15,6,21,10,23,19,12,4,26,8,16,7,27,20,13,2,41,52,31,37,47,55,30,40,51,45,33,48,44,49,39,56,34,53,46,42,50,36,29,32],tq=[1,1,2,2,2,2,2,2,1,2,2,2,2,2,2,1],eq=[[[14,4,13,1,2,15,11,8,3,10,6,12,5,9,0,7],[0,15,7,4,14,2,13,1,10,6,12,11,9,5,3,8],[4,1,14,8,13,6,2,11,15,12,9,7,3,10,5,0],[15,12,8,2,4,9,1,7,5,11,3,14,10,0,6,13]],[[15,1,8,14,6,11,3,4,9,7,2,13,12,0,5,10],[3,13,4,7,15,2,8,14,12,0,1,10,6,9,11,5],[0,14,7,11,10,4,13,1,5,8,12,6,9,3,2,15],[13,8,10,1,3,15,4,2,11,6,7,12,0,5,14,9]],[[10,0,9,14,6,3,15,5,1,13,12,7,11,4,2,8],[13,7,0,9,3,4,6,10,2,8,5,14,12,11,15,1],[13,6,4,9,8,15,3,0,11,1,2,12,5,10,14,7],[1,10,13,0,6,9,8,7,4,15,14,3,11,5,2,12]],[[7,13,14,3,0,6,9,10,1,2,8,5,11,12,4,15],[13,8,11,5,6,15,0,3,4,7,2,12,1,10,14,9],[10,6,9,0,12,11,7,13,15,1,3,14,5,2,8,4],[3,15,0,6,10,1,13,8,9,4,5,11,12,7,2,14]],[[2,12,4,1,7,10,11,6,8,5,3,15,13,0,14,9],[14,11,2,12,4,7,13,1,5,0,15,10,3,9,8,6],[4,2,1,11,10,13,7,8,15,9,12,5,6,3,0,14],[11,8,12,7,1,14,2,13,6,15,0,9,10,4,5,3]],[[12,1,10,15,9,2,6,8,0,13,3,4,14,7,5,11],[10,15,4,2,7,12,9,5,6,1,13,14,0,11,3,8],[9,14,15,5,2,8,12,3,7,0,4,10,1,13,11,6],[4,3,2,12,9,5,15,10,11,14,1,7,6,0,8,13]],[[4,11,2,14,15,0,8,13,3,12,9,7,5,10,6,1],[13,0,11,7,4,9,1,10,14,3,5,12,2,15,8,6],[1,4,11,13,12,3,7,14,10,15,6,8,0,5,9,2],[6,11,13,8,1,4,10,7,9,5,0,15,14,2,3,12]],[[13,2,8,4,6,15,11,1,10,9,3,14,5,0,12,7],[1,15,13,8,10,3,7,4,12,5,6,11,0,14,9,2],[7,11,4,1,9,12,14,2,0,6,10,13,15,3,5,8],[2,1,14,7,4,10,8,13,15,12,9,0,3,5,6,11]]],Z7=new Uint8Array(256);for(let _=0;_<256;_+=1){let $=0;for(let j=0;j<8;j+=1)$=$<<1|_>>j&1;Z7[_]=$}function Y7(_){if(_ instanceof Uint8Array)return _;if(_ instanceof ArrayBuffer)return new Uint8Array(_);if(ArrayBuffer.isView(_))return new Uint8Array(_.buffer,_.byteOffset,_.byteLength);return new Uint8Array(0)}function q7(_){let $=0n,j=Y7(_);for(let Q of j)$=$<<8n|BigInt(Q);return $}function _K(_,$){let j=new Uint8Array($),Q=BigInt(_);for(let Z=$-1;Z>=0;Z-=1)j[Z]=Number(Q&0xffn),Q>>=8n;return j}function W5(_,$,j){let Q=0n;for(let Z of $){let Y=BigInt(_)>>BigInt(j-Z)&1n;Q=Q<<1n|Y}return Q}function j7(_,$){let j=28n,Q=(1n<<j)-1n,Z=BigInt($%28);return(_<<Z|_>>j-Z)&Q}function $K(_){let $=W5(q7(_),sq,64),j=$>>28n&0x0fffffffn,Q=$&0x0fffffffn,Z=[];for(let Y of tq){j=j7(j,Y),Q=j7(Q,Y);let q=j<<28n|Q;Z.push(W5(q,aq,56))}return Z}function jK(_){let $=0n;for(let j=0;j<8;j+=1){let Q=BigInt((7-j)*6),Z=Number(_>>Q&0x3fn),Y=(Z&32)>>4|Z&1,q=Z>>1&15;$=$<<4n|BigInt(eq[j][Y][q])}return $}function QK(_,$){let j=W5(_,rq,32)^BigInt($),Q=jK(j);return W5(Q,oq,32)}function Q7(_,$){let j=$K($),Q=W5(q7(_),dq,64),Z=Q>>32n&0xffffffffn,Y=Q&0xffffffffn;for(let K of j){let N=Y,G=(Z^QK(Y,K))&0xffffffffn;Z=N,Y=G}let q=Y<<32n|Z;return _K(W5(q,iq,64),8)}function ZK(_){let $=String(_??""),j=new Uint8Array(8);for(let Q=0;Q<8;Q+=1){let Z=Q<$.length?$.charCodeAt(Q)&255:0;j[Q]=Z7[Z]}return j}function K7(_,$){let j=Y7($);if(j.byteLength!==16)throw Error(`Invalid VNC auth challenge length ${j.byteLength}; expected 16 bytes.`);let Q=ZK(_),Z=new Uint8Array(16);return Z.set(Q7(j.slice(0,8),Q),0),Z.set(Q7(j.slice(8,16),Q),8),Z}var m_="vnc";function YK(_){return Number(_)}function qK(_){let $=Array.isArray(_)?_:typeof _==="string"?_.split(",").map((Z)=>Z.trim()).filter((Z)=>Z.length>0):[],j=[],Q=new Set;for(let Z of $){let Y=YK(Z);if(!Number.isFinite(Y))continue;let q=Number(Y);if(!Q.has(q))j.push(q),Q.add(q)}if(j.length>0)return j;return[5,2,1,0,-223]}function H5(_){if(_ instanceof Uint8Array)return _;if(_ instanceof ArrayBuffer)return new Uint8Array(_);if(ArrayBuffer.isView(_))return new Uint8Array(_.buffer,_.byteOffset,_.byteLength);return new Uint8Array(0)}function KK(_,$){let j=H5(_),Q=H5($);if(!j.byteLength)return new Uint8Array(Q);if(!Q.byteLength)return new Uint8Array(j);let Z=new Uint8Array(j.byteLength+Q.byteLength);return Z.set(j,0),Z.set(Q,j.byteLength),Z}function NK(_){let $=0;for(let Z of _||[])$+=Z?.byteLength||0;let j=new Uint8Array($),Q=0;for(let Z of _||[]){let Y=H5(Z);j.set(Y,Q),Q+=Y.byteLength}return j}function GK(){return(_)=>{let $=H5(_);try{let j=[],Q=new $7((Z)=>{j.push(new Uint8Array(Z))});if(Q.push($,!0),Q.err)throw Error(Q.msg||"zlib decompression error");return NK(j)}catch(j){try{let Q=_7($);return Q instanceof Uint8Array?Q:new Uint8Array(Q)}catch(Q){let Z=Q instanceof Error?Q.message:"unexpected EOF";throw Error(`unexpected EOF: ${Z}`)}}}}function XK(_){return new TextEncoder().encode(String(_||""))}function F5(_){return new TextDecoder().decode(H5(_))}function VK(_){let $=/^RFB (\d{3})\.(\d{3})\n$/.exec(String(_||""));if(!$)return null;return{major:parseInt($[1],10),minor:parseInt($[2],10),text:$[0]}}function UK(_){if(!_)return`RFB 003.008
`;if(_.major>3||_.minor>=8)return`RFB 003.008
`;if(_.minor>=7)return`RFB 003.007
`;return`RFB 003.003
`}function N7(_,$=0){return{bitsPerPixel:_.getUint8($),depth:_.getUint8($+1),bigEndian:_.getUint8($+2)===1,trueColor:_.getUint8($+3)===1,redMax:_.getUint16($+4,!1),greenMax:_.getUint16($+6,!1),blueMax:_.getUint16($+8,!1),redShift:_.getUint8($+10),greenShift:_.getUint8($+11),blueShift:_.getUint8($+12)}}function LK(_){let $=new ArrayBuffer(20),j=new DataView($);return j.setUint8(0,0),j.setUint8(1,0),j.setUint8(2,0),j.setUint8(3,0),j.setUint8(4,_.bitsPerPixel),j.setUint8(5,_.depth),j.setUint8(6,_.bigEndian?1:0),j.setUint8(7,_.trueColor?1:0),j.setUint16(8,_.redMax,!1),j.setUint16(10,_.greenMax,!1),j.setUint16(12,_.blueMax,!1),j.setUint8(14,_.redShift),j.setUint8(15,_.greenShift),j.setUint8(16,_.blueShift),new Uint8Array($)}function BK(_){let $=Array.isArray(_)?_:[],j=new ArrayBuffer(4+$.length*4),Q=new DataView(j);Q.setUint8(0,2),Q.setUint8(1,0),Q.setUint16(2,$.length,!1);let Z=4;for(let Y of $)Q.setInt32(Z,Number(Y||0),!1),Z+=4;return new Uint8Array(j)}function G7(_,$,j,Q=0,Z=0){let Y=new ArrayBuffer(10),q=new DataView(Y);return q.setUint8(0,3),q.setUint8(1,_?1:0),q.setUint16(2,Q,!1),q.setUint16(4,Z,!1),q.setUint16(6,Math.max(0,$||0),!1),q.setUint16(8,Math.max(0,j||0),!1),new Uint8Array(Y)}function z5(_,$){let j=Number($||0);if(j<=0)return 0;if(j===255)return _&255;return Math.max(0,Math.min(255,Math.round((_||0)*255/j)))}function V7(_,$,j,Q){if(j===1)return _[$];if(j===2)return Q?(_[$]<<8|_[$+1])>>>0:(_[$]|_[$+1]<<8)>>>0;if(j===3)return Q?(_[$]<<16|_[$+1]<<8|_[$+2])>>>0:(_[$]|_[$+1]<<8|_[$+2]<<16)>>>0;if(j===4)return Q?(_[$]<<24>>>0|_[$+1]<<16|_[$+2]<<8|_[$+3])>>>0:(_[$]|_[$+1]<<8|_[$+2]<<16|_[$+3]<<24>>>0)>>>0;return 0}function WK(_,$,j,Q){let Z=Q||J5,Y=H5(_),q=Math.max(1,Math.floor(Number(Z.bitsPerPixel||0)/8)),K=Math.max(0,$||0)*Math.max(0,j||0)*q;if(Y.byteLength<K)throw Error(`Incomplete raw rectangle payload: expected ${K} byte(s), got ${Y.byteLength}`);if(!Z.trueColor)throw Error("Indexed-colour VNC framebuffers are not supported yet.");let N=new Uint8ClampedArray(Math.max(0,$||0)*Math.max(0,j||0)*4),G=0,X=0;for(let V=0;V<Math.max(0,$||0)*Math.max(0,j||0);V+=1){let U=V7(Y,G,q,Z.bigEndian),L=z5(U>>>Z.redShift&Z.redMax,Z.redMax),J=z5(U>>>Z.greenShift&Z.greenMax,Z.greenMax),D=z5(U>>>Z.blueShift&Z.blueMax,Z.blueMax);N[X]=L,N[X+1]=J,N[X+2]=D,N[X+3]=255,G+=q,X+=4}return N}function L4(_,$,j){let Q=j||J5,Z=Math.max(1,Math.floor(Number(Q.bitsPerPixel||0)/8));if(_.byteLength<$+Z)return null;let Y=V7(_,$,Z,Q.bigEndian);return{rgba:[z5(Y>>>Q.redShift&Q.redMax,Q.redMax),z5(Y>>>Q.greenShift&Q.greenMax,Q.greenMax),z5(Y>>>Q.blueShift&Q.blueMax,Q.blueMax),255],bytesPerPixel:Z}}function C4(_,$,j,Q,Z,Y,q){if(!q)return;for(let K=0;K<Y;K+=1)for(let N=0;N<Z;N+=1){let G=((Q+K)*$+(j+N))*4;_[G]=q[0],_[G+1]=q[1],_[G+2]=q[2],_[G+3]=q[3]}}function U7(_,$,j,Q,Z,Y,q){for(let K=0;K<Y;K+=1){let N=K*Z*4,G=((Q+K)*$+j)*4;_.set(q.subarray(N,N+Z*4),G)}}function X7(_,$){let j=$,Q=1;while(!0){if(_.byteLength<j+1)return null;let Z=_[j++];if(Q+=Z,Z!==255)break}return{consumed:j-$,runLength:Q}}function FK(_,$,j,Q,Z,Y,q){let K=Z||J5,N=Math.max(1,Math.floor(Number(K.bitsPerPixel||0)/8));if(_.byteLength<$+4)return null;let G=new DataView(_.buffer,_.byteOffset+$,4).getUint32(0,!1);if(_.byteLength<$+4+G)return null;let X=_.slice($+4,$+4+G),V;try{V=q(X)}catch{return{consumed:4+G,skipped:!0}}let U=0,L=new Uint8ClampedArray(Math.max(0,j||0)*Math.max(0,Q||0)*4);for(let J=0;J<Q;J+=64){let D=Math.min(64,Q-J);for(let O=0;O<j;O+=64){let W=Math.min(64,j-O);if(V.byteLength<U+1)return null;let A=V[U++],E=A&127,f=(A&128)!==0;if(!f&&E===0){let u=W*D*N;if(V.byteLength<U+u)return null;let c=Y(V.slice(U,U+u),W,D,K);U+=u,U7(L,j,O,J,W,D,c);continue}if(!f&&E===1){let u=L4(V,U,K);if(!u)return null;U+=u.bytesPerPixel,C4(L,j,O,J,W,D,u.rgba);continue}if(!f&&E>1&&E<=16){let u=[];for(let I=0;I<E;I+=1){let z=L4(V,U,K);if(!z)return null;U+=z.bytesPerPixel,u.push(z.rgba)}let c=E<=2?1:E<=4?2:4,r=Math.ceil(W*c/8),P=r*D;if(V.byteLength<U+P)return null;for(let I=0;I<D;I+=1){let z=U+I*r;for(let C=0;C<W;C+=1){let b=C*c,e=z+(b>>3),h=8-c-(b&7),a=V[e]>>h&(1<<c)-1;C4(L,j,O+C,J+I,1,1,u[a])}}U+=P;continue}if(f&&E===0){let u=0,c=0;while(c<D){let r=L4(V,U,K);if(!r)return null;U+=r.bytesPerPixel;let P=X7(V,U);if(!P)return null;U+=P.consumed;for(let I=0;I<P.runLength;I+=1)if(C4(L,j,O+u,J+c,1,1,r.rgba),u+=1,u>=W){if(u=0,c+=1,c>=D)break}}continue}if(f&&E>0){let u=[];for(let P=0;P<E;P+=1){let I=L4(V,U,K);if(!I)return null;U+=I.bytesPerPixel,u.push(I.rgba)}let c=0,r=0;while(r<D){if(V.byteLength<U+1)return null;let P=V[U++],I=P,z=1;if(P&128){I=P&127;let b=X7(V,U);if(!b)return null;U+=b.consumed,z=b.runLength}let C=u[I];if(!C)return null;for(let b=0;b<z;b+=1)if(C4(L,j,O+c,J+r,1,1,C),c+=1,c>=W){if(c=0,r+=1,r>=D)break}}continue}return{consumed:4+G,skipped:!0}}}return{consumed:4+G,rgba:L,decompressed:V}}function zK(_,$,j,Q,Z){let Y=Z||J5,q=Math.max(1,Math.floor(Number(Y.bitsPerPixel||0)/8));if(_.byteLength<$+4+q)return null;let N=new DataView(_.buffer,_.byteOffset+$,_.byteLength-$).getUint32(0,!1),G=4+q+N*(q+8);if(_.byteLength<$+G)return null;let X=$+4,V=L4(_,X,Y);if(!V)return null;X+=V.bytesPerPixel;let U=new Uint8ClampedArray(Math.max(0,j||0)*Math.max(0,Q||0)*4);C4(U,j,0,0,j,Q,V.rgba);for(let L=0;L<N;L+=1){let J=L4(_,X,Y);if(!J)return null;if(X+=J.bytesPerPixel,_.byteLength<X+8)return null;let D=new DataView(_.buffer,_.byteOffset+X,8),O=D.getUint16(0,!1),W=D.getUint16(2,!1),A=D.getUint16(4,!1),E=D.getUint16(6,!1);X+=8,C4(U,j,O,W,A,E,J.rgba)}return{consumed:X-$,rgba:U}}function HK(_,$,j,Q,Z,Y){let q=Z||J5,K=Math.max(1,Math.floor(Number(q.bitsPerPixel||0)/8)),N=new Uint8ClampedArray(Math.max(0,j||0)*Math.max(0,Q||0)*4),G=$,X=[0,0,0,255],V=[255,255,255,255];for(let U=0;U<Q;U+=16){let L=Math.min(16,Q-U);for(let J=0;J<j;J+=16){let D=Math.min(16,j-J);if(_.byteLength<G+1)return null;let O=_[G++];if(O&1){let W=D*L*K;if(_.byteLength<G+W)return null;let A=Y(_.slice(G,G+W),D,L,q);G+=W,U7(N,j,J,U,D,L,A);continue}if(O&2){let W=L4(_,G,q);if(!W)return null;X=W.rgba,G+=W.bytesPerPixel}if(C4(N,j,J,U,D,L,X),O&4){let W=L4(_,G,q);if(!W)return null;V=W.rgba,G+=W.bytesPerPixel}if(O&8){if(_.byteLength<G+1)return null;let W=_[G++];for(let A=0;A<W;A+=1){let E=V;if(O&16){let z=L4(_,G,q);if(!z)return null;E=z.rgba,G+=z.bytesPerPixel}if(_.byteLength<G+2)return null;let f=_[G++],u=_[G++],c=f>>4,r=f&15,P=(u>>4)+1,I=(u&15)+1;C4(N,j,J+c,U+r,P,I,E)}}}}return{consumed:G-$,rgba:N}}var J5={bitsPerPixel:32,depth:24,bigEndian:!1,trueColor:!0,redMax:255,greenMax:255,blueMax:255,redShift:16,greenShift:8,blueShift:0};class R8{protocol=m_;constructor(_={}){this.shared=_.shared!==!1,this.decodeRawRect=typeof _.decodeRawRect==="function"?_.decodeRawRect:WK,this.pipeline=_.pipeline||null,this.encodings=qK(_.encodings||null),this.state="version",this.buffer=new Uint8Array(0),this.serverVersion=null,this.clientVersionText=null,this.framebufferWidth=0,this.framebufferHeight=0,this.serverName="",this.serverPixelFormat=null,this.clientPixelFormat={...J5},this.password=typeof _.password==="string"&&_.password.length>0?_.password:null,this.inflateZrle=typeof _.inflateZrle==="function"?_.inflateZrle:GK()}receive(_){if(_)this.buffer=KK(this.buffer,_);let $=[],j=[],Q=!0;while(Q){if(Q=!1,this.state==="version"){if(this.buffer.byteLength<12)break;let Z=this.consume(12),Y=F5(Z),q=VK(Y);if(!q)throw Error(`Unsupported RFB version banner: ${Y||"<empty>"}`);this.serverVersion=q,this.clientVersionText=UK(q),j.push(XK(this.clientVersionText)),$.push({type:"protocol-version",protocol:m_,server:q.text.trim(),client:this.clientVersionText.trim()}),this.state=q.minor>=7?"security-types":"security-type-33",Q=!0;continue}if(this.state==="security-types"){if(this.buffer.byteLength<1)break;let Z=this.buffer[0];if(Z===0){if(this.buffer.byteLength<5)break;let N=new DataView(this.buffer.buffer,this.buffer.byteOffset,this.buffer.byteLength).getUint32(1,!1);if(this.buffer.byteLength<5+N)break;this.consume(1);let G=F5(this.consume(4+N).slice(4));throw Error(G||"VNC server rejected the connection.")}if(this.buffer.byteLength<1+Z)break;this.consume(1);let Y=Array.from(this.consume(Z));$.push({type:"security-types",protocol:m_,types:Y});let q=null;if(Y.includes(2)&&this.password!==null)q=2;else if(Y.includes(1))q=1;else if(Y.includes(2))throw Error("VNC password authentication is required. Enter a password and reconnect.");else throw Error(`Unsupported VNC security types: ${Y.join(", ")||"none"}. This viewer currently supports only "None" and password-based VNC auth.`);j.push(Uint8Array.of(q)),$.push({type:"security-selected",protocol:m_,securityType:q,label:q===2?"VNC Authentication":"None"}),this.state=q===2?"security-challenge":"security-result",Q=!0;continue}if(this.state==="security-type-33"){if(this.buffer.byteLength<4)break;let Y=new DataView(this.buffer.buffer,this.buffer.byteOffset,this.buffer.byteLength).getUint32(0,!1);if(this.consume(4),Y===0){if(this.buffer.byteLength<4)break;let K=new DataView(this.buffer.buffer,this.buffer.byteOffset,this.buffer.byteLength).getUint32(0,!1);if(this.buffer.byteLength<4+K)break;let N=F5(this.consume(4+K).slice(4));throw Error(N||"VNC server rejected the connection.")}if(Y===2){if(this.password===null)throw Error("VNC password authentication is required. Enter a password and reconnect.");$.push({type:"security-selected",protocol:m_,securityType:2,label:"VNC Authentication"}),this.state="security-challenge",Q=!0;continue}if(Y!==1)throw Error(`Unsupported VNC security type ${Y}. This viewer currently supports only "None" and password-based VNC auth.`);$.push({type:"security-selected",protocol:m_,securityType:1,label:"None"}),j.push(Uint8Array.of(this.shared?1:0)),this.state="server-init",Q=!0;continue}if(this.state==="security-challenge"){if(this.buffer.byteLength<16)break;if(this.password===null)throw Error("VNC password authentication is required. Enter a password and reconnect.");let Z=this.consume(16);j.push(K7(this.password,Z)),this.state="security-result",Q=!0;continue}if(this.state==="security-result"){if(this.buffer.byteLength<4)break;let Y=new DataView(this.buffer.buffer,this.buffer.byteOffset,this.buffer.byteLength).getUint32(0,!1);if(this.consume(4),Y!==0){if(this.buffer.byteLength>=4){let q=new DataView(this.buffer.buffer,this.buffer.byteOffset,this.buffer.byteLength).getUint32(0,!1);if(this.buffer.byteLength>=4+q){let K=F5(this.consume(4+q).slice(4));throw Error(K||"VNC authentication failed.")}}throw Error("VNC authentication failed.")}$.push({type:"security-result",protocol:m_,ok:!0}),j.push(Uint8Array.of(this.shared?1:0)),this.state="server-init",Q=!0;continue}if(this.state==="server-init"){if(this.buffer.byteLength<24)break;let Z=new DataView(this.buffer.buffer,this.buffer.byteOffset,this.buffer.byteLength),Y=Z.getUint16(0,!1),q=Z.getUint16(2,!1),K=N7(Z,4),N=Z.getUint32(20,!1);if(this.buffer.byteLength<24+N)break;let G=this.consume(24),X=new DataView(G.buffer,G.byteOffset,G.byteLength);if(this.framebufferWidth=X.getUint16(0,!1),this.framebufferHeight=X.getUint16(2,!1),this.serverPixelFormat=N7(X,4),this.serverName=F5(this.consume(N)),this.state="connected",this.pipeline)this.pipeline.initFramebuffer(this.framebufferWidth,this.framebufferHeight);j.push(LK(this.clientPixelFormat)),j.push(BK(this.encodings)),j.push(G7(!1,this.framebufferWidth,this.framebufferHeight)),$.push({type:"display-init",protocol:m_,width:Y,height:q,name:this.serverName,pixelFormat:K}),Q=!0;continue}if(this.state==="connected"){if(this.buffer.byteLength<1)break;let Z=this.buffer[0];if(Z===0){if(this.buffer.byteLength<4)break;let q=new DataView(this.buffer.buffer,this.buffer.byteOffset,this.buffer.byteLength).getUint16(2,!1),K=4,N=[],G=!1,X=!!this.pipeline;for(let U=0;U<q;U+=1){if(this.buffer.byteLength<K+12){G=!0;break}let L=new DataView(this.buffer.buffer,this.buffer.byteOffset+K,12),J=L.getUint16(0,!1),D=L.getUint16(2,!1),O=L.getUint16(4,!1),W=L.getUint16(6,!1),A=L.getInt32(8,!1);if(K+=12,A===0){let E=Math.max(1,Math.floor(Number(this.clientPixelFormat.bitsPerPixel||0)/8)),f=O*W*E;if(this.buffer.byteLength<K+f){G=!0;break}let u=this.buffer.slice(K,K+f);if(K+=f,X)this.pipeline.processRawRect(u,J,D,O,W,this.clientPixelFormat),N.push({kind:"pipeline",x:J,y:D,width:O,height:W});else N.push({kind:"rgba",x:J,y:D,width:O,height:W,rgba:this.decodeRawRect(u,O,W,this.clientPixelFormat)});continue}if(A===2){let E=zK(this.buffer,K,O,W,this.clientPixelFormat);if(!E){G=!0;break}if(X){let f=this.buffer.slice(K,K+E.consumed);this.pipeline.processRreRect(f,J,D,O,W,this.clientPixelFormat),N.push({kind:"pipeline",x:J,y:D,width:O,height:W})}else N.push({kind:"rgba",x:J,y:D,width:O,height:W,rgba:E.rgba});K+=E.consumed;continue}if(A===1){if(this.buffer.byteLength<K+4){G=!0;break}let E=new DataView(this.buffer.buffer,this.buffer.byteOffset+K,4),f=E.getUint16(0,!1),u=E.getUint16(2,!1);if(K+=4,X)this.pipeline.processCopyRect(J,D,O,W,f,u),N.push({kind:"pipeline",x:J,y:D,width:O,height:W});else N.push({kind:"copy",x:J,y:D,width:O,height:W,srcX:f,srcY:u});continue}if(A===16){let E=FK(this.buffer,K,O,W,this.clientPixelFormat,this.decodeRawRect,this.inflateZrle);if(!E){G=!0;break}if(K+=E.consumed,E.skipped)continue;if(X&&E.decompressed)this.pipeline.processZrleTileData(E.decompressed,J,D,O,W,this.clientPixelFormat),N.push({kind:"pipeline",x:J,y:D,width:O,height:W});else N.push({kind:"rgba",x:J,y:D,width:O,height:W,rgba:E.rgba});continue}if(A===5){let E=HK(this.buffer,K,O,W,this.clientPixelFormat,this.decodeRawRect);if(!E){G=!0;break}if(X){let f=this.buffer.slice(K,K+E.consumed);this.pipeline.processHextileRect(f,J,D,O,W,this.clientPixelFormat),N.push({kind:"pipeline",x:J,y:D,width:O,height:W})}else N.push({kind:"rgba",x:J,y:D,width:O,height:W,rgba:E.rgba});K+=E.consumed;continue}if(A===-223){if(this.framebufferWidth=O,this.framebufferHeight=W,X)this.pipeline.initFramebuffer(O,W);N.push({kind:"resize",x:J,y:D,width:O,height:W});continue}throw Error(`Unsupported VNC rectangle encoding ${A}. This viewer currently supports ZRLE, Hextile, RRE, CopyRect, raw rectangles, and DesktopSize only.`)}if(G)break;this.consume(K);let V={type:"framebuffer-update",protocol:m_,width:this.framebufferWidth,height:this.framebufferHeight,rects:N};if(X)V.framebuffer=this.pipeline.getFramebuffer();$.push(V),j.push(G7(!0,this.framebufferWidth,this.framebufferHeight)),Q=!0;continue}if(Z===2){this.consume(1),$.push({type:"bell",protocol:m_}),Q=!0;continue}if(Z===3){if(this.buffer.byteLength<8)break;let q=new DataView(this.buffer.buffer,this.buffer.byteOffset,this.buffer.byteLength).getUint32(4,!1);if(this.buffer.byteLength<8+q)break;this.consume(8);let K=F5(this.consume(q));$.push({type:"clipboard",protocol:m_,text:K}),Q=!0;continue}throw Error(`Unsupported VNC server message type ${Z}.`)}}return{events:$,outgoing:j}}consume(_){let $=this.buffer.slice(0,_);return this.buffer=this.buffer.slice(_),$}}var B4="piclaw://vnc";function JK(_){let $=String(_||"");if($===B4)return null;if(!$.startsWith(`${B4}/`))return null;let j=$.slice(`${B4}/`.length).trim();if(!j)return null;try{return decodeURIComponent(j)}catch{return j}}function i4(_){return String(_||"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}async function OK(_=null){let $=_?`/vnc/session?target=${encodeURIComponent(_)}`:"/vnc/session",j=await fetch($,{credentials:"same-origin"}),Q=await j.json().catch(()=>({}));if(!j.ok)throw Error(Q?.error||`HTTP ${j.status}`);return Q}async function AK(_){let $=`/vnc/handoff?target=${encodeURIComponent(String(_||"").trim())}`,j=await fetch($,{method:"POST",credentials:"same-origin"}),Q=await j.json().catch(()=>({}));if(!j.ok)throw Error(Q?.error||`HTTP ${j.status}`);return Q?.handoff||null}function DK(_,$=null){let j=window.location.protocol==="https:"?"wss:":"ws:",Q=new URL(`${j}//${window.location.host}/vnc/ws`);if(Q.searchParams.set("target",String(_||"")),$)Q.searchParams.set("handoff",String($));return Q.toString()}function EK(_,$){let j=String(_||"").trim(),Q=Math.floor(Number($||0));if(!j||!Number.isFinite(Q)||Q<=0||Q>65535)return null;return`${j.includes(":")&&!j.startsWith("[")?`[${j}]`:j}:${Q}`}function kK(_){if(typeof window>"u")return null;try{let $=new URL(window.location.href),j=$.searchParams.get(_)?.trim()||"";if(!j)return null;return $.searchParams.delete(_),window.history?.replaceState?.(window.history.state,document.title,$.toString()),j}catch{return null}}class L7{container;root;statusEl;bodyEl;metricsEl;targetSubtitleEl;socketBoundary=null;protocol=null;disposed=!1;targetId=null;targetLabel=null;bytesIn=0;bytesOut=0;canvas=null;canvasCtx=null;displayPlaceholderEl=null;displayInfoEl=null;displayMetaEl=null;displayStageEl=null;chromeEl=null;sessionShellEl=null;resizeObserver=null;displayScale=null;readOnly=!1;pointerButtonMask=0;pressedKeysyms=new Map;passwordInputEl=null;authPassword=null;directHostInputEl=null;directPortInputEl=null;directPasswordInputEl=null;hasRenderedFrame=!1;frameTimeoutId=null;reconnectTimerId=null;reconnectAttempts=0;rawFallbackAttempted=!1;protocolRecovering=!1;pendingHandoffToken=null;constructor(_,$){this.container=_,this.targetId=JK($?.path),this.targetLabel=this.targetId||null,this.pendingHandoffToken=kK("vnc_handoff"),this.root=document.createElement("div"),this.root.className="vnc-pane-shell",this.root.style.cssText="display:flex;flex-direction:column;width:100%;height:100%;background:var(--bg-primary);color:var(--text-primary);",this.targetSubtitleEl=null,this.statusEl=document.createElement("div"),this.statusEl.style.cssText="display:none;",this.statusEl.textContent="",this.bodyEl=document.createElement("div"),this.bodyEl.style.cssText="flex:1;min-height:0;display:flex;align-items:stretch;justify-content:stretch;padding:12px;",this.metricsEl=document.createElement("div"),this.metricsEl.style.cssText="display:none;",this.updateMetrics(),this.root.append(this.statusEl,this.bodyEl),this.container.appendChild(this.root),this.load()}setStatus(_){this.statusEl.textContent=String(_||"")}setSessionChromeVisible(_){if(this.chromeEl)this.chromeEl.style.display=_?"grid":"none";if(this.sessionShellEl?.style)this.sessionShellEl.style.gridTemplateRows=_?"auto minmax(0,1fr)":"1fr";if(this.displayStageEl?.style)this.displayStageEl.style.padding=_?"12px":"0",this.displayStageEl.style.border=_?"1px solid var(--border-color)":"none",this.displayStageEl.style.borderRadius=_?"16px":"0",this.displayStageEl.style.background=_?"#0a0a0a":"#000";if(this.displayPlaceholderEl?.style)this.displayPlaceholderEl.style.display=_&&!this.hasRenderedFrame?"block":"none"}clearReconnectTimer(){if(this.reconnectTimerId)clearTimeout(this.reconnectTimerId),this.reconnectTimerId=null}scheduleReconnect(){if(this.disposed||!this.targetId)return;this.clearReconnectTimer();let _=Math.min(8000,1500+this.reconnectAttempts*1000);this.reconnectAttempts+=1,this.reconnectTimerId=setTimeout(()=>{if(this.reconnectTimerId=null,this.disposed||!this.targetId)return;this.connectSocket()},_)}updateMetrics(){this.metricsEl.textContent=`Transport bytes — in: ${this.bytesIn} / out: ${this.bytesOut}`}applyMetrics(_){this.bytesIn=Number(_?.bytesIn||0),this.bytesOut=Number(_?.bytesOut||0),this.updateMetrics()}openTargetTab(_,$){if(this.targetId=String(_||"").trim()||null,this.targetLabel=String($||_||"").trim()||this.targetId||"VNC",this.targetId)this.renderTargetSession({direct_connect_enabled:!0,target:{id:this.targetId,label:this.targetLabel,read_only:!1,direct_connect:!0}}),this.setStatus("Connecting…"),this.updateDisplayInfo("Connecting…"),this.updateDisplayMeta("connecting");this.load()}requestPanePopout(_,$){this.container.dispatchEvent(new CustomEvent("pane:popout",{bubbles:!0,detail:{path:_,label:$}}))}resetLiveSession(){this.clearReconnectTimer(),this.reconnectAttempts=0,this.protocol=null;try{this.socketBoundary?.dispose?.()}catch{}this.socketBoundary=null;try{this.resizeObserver?.disconnect?.()}catch{}if(this.resizeObserver=null,this.canvas=null,this.canvasCtx=null,this.displayPlaceholderEl=null,this.displayInfoEl=null,this.displayMetaEl=null,this.displayStageEl=null,this.displayScale=null,this.passwordInputEl=null,this.directHostInputEl=null,this.directPortInputEl=null,this.directPasswordInputEl=null,this.hasRenderedFrame=!1,this.rawFallbackAttempted=!1,this.protocolRecovering=!1,this.frameTimeoutId)clearTimeout(this.frameTimeoutId),this.frameTimeoutId=null;this.pressedKeysyms.clear()}renderTargets(_){this.resetLiveSession();let $=Array.isArray(_?.targets)?_.targets:[],j=Boolean(_?.direct_connect_enabled);this.bodyEl.innerHTML=`
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
        `,this.directHostInputEl=this.bodyEl.querySelector("[data-vnc-direct-host]"),this.directPortInputEl=this.bodyEl.querySelector("[data-vnc-direct-port]"),this.directPasswordInputEl=this.bodyEl.querySelector("[data-vnc-direct-password]");let Q=()=>{let Z=EK(this.directHostInputEl?.value,this.directPortInputEl?.value);if(!Z)return;this.authPassword=c5(this.directPasswordInputEl?this.directPasswordInputEl.value:this.authPassword),this.openTargetTab(Z,Z)};this.directHostInputEl?.addEventListener("keydown",(Z)=>{if(Z.key!=="Enter")return;Z.preventDefault(),Q()}),this.directPortInputEl?.addEventListener("keydown",(Z)=>{if(Z.key!=="Enter")return;Z.preventDefault(),Q()}),this.directPasswordInputEl?.addEventListener("keydown",(Z)=>{if(Z.key!=="Enter")return;Z.preventDefault(),Q()}),this.bodyEl.querySelector("[data-direct-open-tab]")?.addEventListener("click",()=>Q());for(let Z of Array.from(this.bodyEl.querySelectorAll("[data-target-open-tab]")))Z.addEventListener("click",()=>{let Y=Z.getAttribute("data-target-open-tab"),q=Z.getAttribute("data-target-label")||Y||"VNC";if(!Y)return;this.openTargetTab(Y,q)})}renderTargetSession(_){this.resetLiveSession();let $=_?.target||{},j=$?.label||this.targetId||"VNC target";if(this.targetLabel=j,this.readOnly=Boolean($.read_only),this.pointerButtonMask=0,this.hasRenderedFrame=!1,this.pressedKeysyms.clear(),this.bodyEl.innerHTML=`
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
        `,this.sessionShellEl=this.bodyEl.querySelector("[data-vnc-session-shell]"),this.chromeEl=this.bodyEl.querySelector("[data-vnc-session-chrome]"),this.displayStageEl=this.bodyEl.querySelector("[data-display-stage]"),this.canvas=this.bodyEl.querySelector("[data-display-canvas]"),this.displayPlaceholderEl=this.bodyEl.querySelector("[data-display-placeholder]"),this.displayInfoEl=this.bodyEl.querySelector("[data-display-info]"),this.displayMetaEl=this.bodyEl.querySelector("[data-display-meta]"),this.canvasCtx=this.canvas?.getContext?.("2d",{alpha:!1})||null,this.canvasCtx)this.canvasCtx.imageSmoothingEnabled=!0,this.canvasCtx.imageSmoothingQuality="high";if(this.updateDisplayInfo("Waiting for VNC protocol negotiation…"),this.updateDisplayMeta(),this.setSessionChromeVisible(!0),this.attachDisplayResizeObserver(),this.attachCanvasPointerHandlers(),this.attachCanvasKeyboardHandlers(),this.passwordInputEl=this.bodyEl.querySelector("[data-vnc-password]"),this.passwordInputEl&&this.authPassword!==null)this.passwordInputEl.value=this.authPassword;this.passwordInputEl?.addEventListener("input",()=>{this.authPassword=c5(this.passwordInputEl.value)}),this.passwordInputEl?.addEventListener("keydown",(Y)=>{if(Y.key!=="Enter")return;Y.preventDefault(),this.connectSocket()}),this.bodyEl.querySelector("[data-vnc-reconnect]")?.addEventListener("click",()=>{this.authPassword=c5(this.passwordInputEl?this.passwordInputEl.value:this.authPassword),this.connectSocket()}),this.bodyEl.querySelector("[data-open-target-picker]")?.addEventListener("click",()=>{this.openTargetTab("","VNC")})}updateDisplayInfo(_){if(this.displayInfoEl)this.displayInfoEl.textContent=String(_||"")}updateDisplayMeta(_=""){if(!this.displayMetaEl)return;let $=this.protocol?.state?`state=${this.protocol.state}`:"state=idle",j=this.protocol?.framebufferWidth&&this.protocol?.framebufferHeight?`${this.protocol.framebufferWidth}×${this.protocol.framebufferHeight}`:"pending",Q=this.protocol?.serverName?` · name=${this.protocol.serverName}`:"",Z=this.displayScale?` · scale=${Math.round(this.displayScale*100)}%`:"",Y=_?` · ${_}`:"";this.displayMetaEl.textContent=`${$} · framebuffer=${j}${Q}${Z}${Y}`}ensureCanvasSize(_,$,j={}){if(!this.canvas||!this.canvasCtx||!_||!$)return;if(this.canvas.width!==_||this.canvas.height!==$)this.canvas.width=_,this.canvas.height=$;let Q=j?.reveal===!0;if(this.canvas.style.display=Q||this.hasRenderedFrame?"block":"none",this.canvas.style.aspectRatio=`${_} / ${$}`,this.displayPlaceholderEl)this.displayPlaceholderEl.style.display=Q||this.hasRenderedFrame?"none":"";this.updateCanvasScale()}attachDisplayResizeObserver(){if(!this.displayStageEl||typeof ResizeObserver>"u")return;try{this.resizeObserver?.disconnect?.()}catch{}this.resizeObserver=new ResizeObserver(()=>{this.updateCanvasScale()}),this.resizeObserver.observe(this.displayStageEl)}updateCanvasScale(){if(!this.canvas||!this.displayStageEl||!this.canvas.width||!this.canvas.height)return;requestAnimationFrame(()=>{if(!this.canvas||!this.displayStageEl)return;let _=this.displayStageEl.getBoundingClientRect?.(),$=Math.max(1,Math.floor(_?.width||this.displayStageEl.clientWidth||0)-32),j=Math.max(1,Math.floor(_?.height||this.displayStageEl.clientHeight||0)-32);if(!$||!j)return;let Q=p2($,j,this.canvas.width,this.canvas.height);this.displayScale=Q,this.canvas.style.width=`${Math.max(1,Math.round(this.canvas.width*Q))}px`,this.canvas.style.height=`${Math.max(1,Math.round(this.canvas.height*Q))}px`,this.updateDisplayMeta()})}getFramebufferPointFromEvent(_){if(!this.canvas||!this.protocol?.framebufferWidth||!this.protocol?.framebufferHeight)return null;let $=this.canvas.getBoundingClientRect?.();if(!$||!$.width||!$.height)return null;return b2(_.clientX,_.clientY,$,this.protocol.framebufferWidth,this.protocol.framebufferHeight)}sendPointerEvent(_,$,j){if(!this.socketBoundary||!this.protocol||this.protocol.state!=="connected")return;this.socketBoundary.send(y8(_,$,j))}attachCanvasPointerHandlers(){if(!this.canvas||this.readOnly)return;this.canvas.style.cursor="crosshair",this.canvas.style.touchAction="none",this.canvas.addEventListener("contextmenu",(_)=>{_.preventDefault()}),this.canvas.addEventListener("pointermove",(_)=>{let $=this.getFramebufferPointFromEvent(_);if(!$)return;this.sendPointerEvent(this.pointerButtonMask,$.x,$.y)}),this.canvas.addEventListener("pointerdown",(_)=>{let $=this.getFramebufferPointFromEvent(_);if(!$)return;_.preventDefault(),this.canvas?.focus?.();try{this.canvas?.setPointerCapture?.(_.pointerId)}catch{}this.pointerButtonMask|=G$(_.button),this.sendPointerEvent(this.pointerButtonMask,$.x,$.y)}),this.canvas.addEventListener("pointerup",(_)=>{let $=this.getFramebufferPointFromEvent(_);if(!$)return;_.preventDefault(),this.pointerButtonMask&=~G$(_.button),this.sendPointerEvent(this.pointerButtonMask,$.x,$.y);try{this.canvas?.releasePointerCapture?.(_.pointerId)}catch{}}),this.canvas.addEventListener("pointercancel",(_)=>{let $=this.getFramebufferPointFromEvent(_)||{x:0,y:0};this.pointerButtonMask=0,this.sendPointerEvent(0,$.x,$.y);try{this.canvas?.releasePointerCapture?.(_.pointerId)}catch{}}),this.canvas.addEventListener("wheel",(_)=>{let $=this.getFramebufferPointFromEvent(_);if(!$)return;_.preventDefault();for(let j of m2(_.deltaY,$.x,$.y,this.pointerButtonMask))this.socketBoundary?.send?.(j)},{passive:!1})}sendKeyEvent(_,$){if(!this.socketBoundary||!this.protocol||this.protocol.state!=="connected")return;this.socketBoundary.send(h2(_,$))}releasePressedKeys(){for(let _ of this.pressedKeysyms.values())this.sendKeyEvent(!1,_);this.pressedKeysyms.clear()}attachCanvasKeyboardHandlers(){if(!this.canvas||this.readOnly)return;this.canvas.addEventListener("keydown",(_)=>{let $=X$(_);if($==null)return;if(_.repeat&&this.pressedKeysyms.has(_.code||_.key)){_.preventDefault();return}_.preventDefault();let j=_.code||_.key;this.pressedKeysyms.set(j,$),this.sendKeyEvent(!0,$)}),this.canvas.addEventListener("keyup",(_)=>{let $=_.code||_.key,j=this.pressedKeysyms.get($)??X$(_);if(j==null)return;_.preventDefault(),this.pressedKeysyms.delete($),this.sendKeyEvent(!1,j)}),this.canvas.addEventListener("blur",()=>{this.releasePressedKeys()})}drawRgbaRect(_){if(!this.canvasCtx||!this.canvas)return;this.ensureCanvasSize(this.canvas.width||_.width,this.canvas.height||_.height,{reveal:!0});let $=new ImageData(_.rgba,_.width,_.height);this.canvasCtx.putImageData($,_.x,_.y),this.hasRenderedFrame=!0}copyCanvasRect(_){if(!this.canvasCtx||!this.canvas)return;this.ensureCanvasSize(this.canvas.width||_.width,this.canvas.height||_.height,{reveal:!0});let $=this.canvasCtx.getImageData(_.srcX,_.srcY,_.width,_.height);this.canvasCtx.putImageData($,_.x,_.y),this.hasRenderedFrame=!0}scheduleRawFallbackTimeout(){if(this.frameTimeoutId)clearTimeout(this.frameTimeoutId),this.frameTimeoutId=null;if(this.rawFallbackAttempted||this.protocolRecovering)return;this.frameTimeoutId=setTimeout(()=>{if(this.hasRenderedFrame||this.rawFallbackAttempted||this.protocolRecovering)return;if(this.protocol&&this.socketBoundary)this.rawFallbackAttempted=!0,this.protocolRecovering=!0,this.setStatus("No framebuffer update yet; retrying with RAW encoding."),this.updateDisplayInfo("No framebuffer update yet. Retrying with RAW encoding."),this.updateDisplayMeta("reconnect-encoding-fallback"),this.connectWithEncodings("0")},2200)}applyRemoteDisplayEvent(_){if(!_)return;switch(_.type){case"protocol-version":this.setStatus(`Negotiated ${_.protocol.toUpperCase()} ${_.server} → ${_.client}.`),this.updateDisplayInfo(`Negotiated ${_.server} → ${_.client}.`),this.updateDisplayMeta();return;case"security-types":this.setStatus(`Server offered security types: ${_.types.join(", ")||"none"}.`),this.updateDisplayInfo(`Security types: ${_.types.join(", ")||"none"}.`),this.updateDisplayMeta();return;case"security-selected":this.setStatus(`Using ${_.protocol.toUpperCase()} security type ${_.label}.`),this.updateDisplayInfo(`Security: ${_.label}.`),this.updateDisplayMeta();return;case"security-result":this.setStatus("Security negotiation complete. Waiting for server init…"),this.updateDisplayInfo("Security negotiation complete. Waiting for server init…"),this.updateDisplayMeta();return;case"display-init":this.ensureCanvasSize(_.width,_.height),this.setSessionChromeVisible(!1),this.setStatus(`Connected to ${this.targetLabel||this.targetId||"target"} — waiting for first framebuffer update (${_.width}×${_.height}).`),this.updateDisplayInfo(`Connected to ${_.name||this.targetLabel||this.targetId||"remote display"}. Waiting for first framebuffer update…`),this.updateDisplayMeta("awaiting-frame"),this.scheduleRawFallbackTimeout();return;case"framebuffer-update":if(this.frameTimeoutId)clearTimeout(this.frameTimeoutId),this.frameTimeoutId=null;let $=!1,j=(_.rects||[]).some((Q)=>Q.kind==="pipeline");if(_.framebuffer&&_.framebuffer.length>0&&_.width>0&&_.height>0&&j){this.ensureCanvasSize(_.width,_.height,{reveal:!0});for(let Z of _.rects||[])if(Z.kind==="resize")this.ensureCanvasSize(Z.width,Z.height);let Q=this.canvas?.getContext("2d",{alpha:!1});if(Q){let Z=new ImageData(new Uint8ClampedArray(_.framebuffer),_.width,_.height);Q.putImageData(Z,0,0),$=!0}}else for(let Q of _.rects||[]){if(Q.kind==="resize"){this.ensureCanvasSize(Q.width,Q.height);continue}if(Q.kind==="copy"){this.ensureCanvasSize(_.width,_.height,{reveal:!0}),this.copyCanvasRect(Q),$=!0;continue}if(Q.kind==="rgba")this.ensureCanvasSize(_.width,_.height,{reveal:!0}),this.drawRgbaRect(Q),$=!0}if($||this.hasRenderedFrame)this.protocolRecovering=!1,this.setStatus(`Rendering live framebuffer — ${_.width}×${_.height}.`),this.updateDisplayInfo(`Framebuffer update applied (${(_.rects||[]).length} rect${(_.rects||[]).length===1?"":"s"}).`),this.updateDisplayMeta();else this.setStatus(`Connected to ${this.targetLabel||this.targetId||"target"} — waiting for painted framebuffer data.`),this.updateDisplayInfo(`Framebuffer update received, but no paintable rects yet (${(_.rects||[]).length} rect${(_.rects||[]).length===1?"":"s"}).`),this.updateDisplayMeta("awaiting-frame"),this.scheduleRawFallbackTimeout();return;case"clipboard":this.setStatus("Remote clipboard updated."),this.updateDisplayInfo(`Clipboard text received (${_.text.length} chars).`),this.updateDisplayMeta();return;case"bell":this.setStatus("Remote display bell received."),this.updateDisplayInfo("Remote display bell received."),this.updateDisplayMeta();return}}async handleSocketMessage(_){if(_?.kind==="control"){let j=_.payload;if(j?.type==="vnc.error"){this.setStatus(`Proxy error: ${j.error||"Unknown error"}`),this.updateDisplayInfo(`Proxy error: ${j.error||"Unknown error"}`),this.updateDisplayMeta("proxy-error");return}if(j?.type==="vnc.connected"){let Q=j?.target?.label||this.targetLabel||this.targetId;this.setStatus(`Connected to ${Q}. Waiting for VNC/RFB data…`),this.updateDisplayInfo(`Connected to ${Q}. Waiting for VNC handshake…`),this.updateDisplayMeta();return}if(j?.type==="pong")return;return}let $=this.protocol||(this.protocol=new R8);try{let j=_.data instanceof Blob?await _.data.arrayBuffer():_.data,Q=$.receive(j);for(let Z of Q.outgoing||[])this.socketBoundary?.send?.(Z);for(let Z of Q.events||[])this.applyRemoteDisplayEvent(Z)}catch(j){let Q=j?.message||"Unknown error";if(this.setSessionChromeVisible(!0),this.setStatus(`Display protocol error: ${Q}`),this.updateDisplayInfo(`Display protocol error: ${Q}`),this.updateDisplayMeta("protocol-error"),this.frameTimeoutId)clearTimeout(this.frameTimeoutId),this.frameTimeoutId=null;if(!this.rawFallbackAttempted&&!this.protocolRecovering&&/unexpected eof|zlib|decompress|protocol|buffer|undefined|not an object|reading '0'/i.test(Q))this.rawFallbackAttempted=!0,this.protocolRecovering=!0,this.connectWithEncodings("0")}}async connectSocket(_=null){if(!this.targetId||this.disposed)return;if(this.clearReconnectTimer(),this.protocolRecovering&&_==null)this.protocolRecovering=!1;try{this.socketBoundary?.dispose?.()}catch{}if(_==null)this.rawFallbackAttempted=!1,this.protocolRecovering=!1;let $=this.pendingHandoffToken||null,j=_==null?null:String(_).trim(),Q=await g2(),Z={};if(Q)Z.pipeline=Q,Z.decodeRawRect=(K,N,G,X)=>Q.decodeRawRectToRgba(K,N,G,X);let Y=c5(this.authPassword);if(Y!==null)Z.password=Y;if(j)Z.encodings=j;let q=Boolean(this.canvas&&this.hasRenderedFrame);if(this.protocol=new R8(Z),this.hasRenderedFrame=q,this.frameTimeoutId=null,this.canvas)this.canvas.style.display=q?"block":"none";if(this.displayPlaceholderEl)this.displayPlaceholderEl.style.display=q?"none":"";this.socketBoundary=new q$({url:DK(this.targetId,$),binaryType:"arraybuffer",onOpen:()=>{if($&&this.pendingHandoffToken===$)this.pendingHandoffToken=null;this.reconnectAttempts=0,this.setStatus(`Connected to proxy for ${this.targetId}. Waiting for VNC/RFB data…`),this.updateDisplayInfo("WebSocket proxy connected. Waiting for handshake…"),this.updateDisplayMeta(),this.socketBoundary?.sendControl?.({type:"ping"})},onMetrics:(K)=>{this.applyMetrics(K)},onMessage:(K)=>{this.handleSocketMessage(K)},onClose:()=>{if(this.setSessionChromeVisible(!0),this.frameTimeoutId)clearTimeout(this.frameTimeoutId),this.frameTimeoutId=null;if(this.disposed)return;if(this.bytesIn>0||this.hasRenderedFrame||this.reconnectAttempts>0){this.setStatus("Remote display connection lost. Reconnecting…"),this.updateDisplayInfo("Remote display transport closed. Attempting to reconnect…"),this.updateDisplayMeta("reconnecting"),this.scheduleReconnect();return}this.setStatus(this.bytesIn>0?`Proxy closed after receiving ${this.bytesIn} byte(s).`:"Proxy closed."),this.updateDisplayInfo(this.bytesIn>0?"Remote display transport closed after receiving data.":"Remote display transport closed."),this.updateDisplayMeta("closed")},onError:()=>{if(this.setSessionChromeVisible(!0),this.bytesIn>0||this.hasRenderedFrame||this.reconnectAttempts>0){this.setStatus("WebSocket proxy connection failed. Reconnecting…"),this.updateDisplayInfo("WebSocket proxy connection failed. Attempting to reconnect…"),this.updateDisplayMeta("socket-reconnecting"),this.scheduleReconnect();return}this.setStatus("WebSocket proxy connection failed."),this.updateDisplayInfo("WebSocket proxy connection failed."),this.updateDisplayMeta("socket-error")}}),this.socketBoundary.connect()}connectWithEncodings(_){return this.connectSocket(_)}async load(){this.setStatus("");try{let _=await OK(this.targetId);if(!_?.enabled){this.renderTargets(_),this.setStatus("");return}if(!this.targetId){this.renderTargets(_),this.setStatus("");return}this.renderTargetSession(_),await this.connectSocket()}catch(_){this.resetLiveSession(),this.bodyEl.innerHTML=`
                <div style="max-width:620px;text-align:center;padding:28px;border:1px dashed var(--border-color);border-radius:14px;background:var(--bg-secondary);">
                    <div style="font-size:32px;margin-bottom:10px;">⚠️</div>
                    <div style="font-weight:600;margin-bottom:6px;">Failed to load VNC session</div>
                    <div style="color:var(--text-secondary);font-size:13px;line-height:1.5;">${i4(_?.message||"Unknown error")}</div>
                </div>
            `,this.setStatus(`Session load failed: ${_?.message||"Unknown error"}`)}}async preparePopoutTransfer(){if(!this.targetId)return null;let _=await AK(this.targetId),$=typeof _?.token==="string"?_.token.trim():"";if(!$)throw Error("No live VNC session is available to transfer.");return{vnc_handoff:$}}getContent(){return}isDirty(){return!1}focus(){this.canvas?.focus?.(),this.root?.focus?.()}resize(){this.updateCanvasScale()}dispose(){if(this.disposed)return;this.disposed=!0,this.resetLiveSession(),this.root?.remove?.()}}var A$={id:"vnc-viewer",label:"VNC",icon:"display",capabilities:["preview"],placement:"tabs",canHandle(_){let $=String(_?.path||"");return $===B4||$.startsWith(`${B4}/`)?9000:!1},mount(_,$){return new L7(_,$)}};function z_(_){if(typeof window>"u"||!window.localStorage)return null;try{return window.localStorage.getItem(_)}catch{return null}}function Y1(_,$){if(typeof window>"u"||!window.localStorage)return;try{window.localStorage.setItem(_,$)}catch{}}function O5(_,$=!1){let j=z_(_);if(j===null)return $;return j==="true"}function r5(_,$=null){let j=z_(_);if(j===null)return $;let Q=parseInt(j,10);return Number.isFinite(Q)?Q:$}var k$="piclaw_theme",f8="piclaw_tint",F7="piclaw_chat_themes",s5={bgPrimary:"#ffffff",bgSecondary:"#f7f9fa",bgHover:"#e8ebed",textPrimary:"#0f1419",textSecondary:"#536471",borderColor:"#eff3f4",accent:"#1d9bf0",accentHover:"#1a8cd8",danger:"#f4212e",success:"#00ba7c"},z7={bgPrimary:"#000000",bgSecondary:"#16181c",bgHover:"#1d1f23",textPrimary:"#e7e9ea",textSecondary:"#71767b",borderColor:"#2f3336",accent:"#1d9bf0",accentHover:"#1a8cd8",danger:"#f4212e",success:"#00ba7c"},B7={default:{label:"Default",mode:"auto",light:s5,dark:z7},tango:{label:"Tango",mode:"light",light:{bgPrimary:"#f6f5f4",bgSecondary:"#efedeb",bgHover:"#e5e3e1",textPrimary:"#2e3436",textSecondary:"#5c6466",borderColor:"#d3d7cf",accent:"#3465a4",accentHover:"#2c5890",danger:"#cc0000",success:"#4e9a06"}},xterm:{label:"XTerm",mode:"dark",dark:{bgPrimary:"#000000",bgSecondary:"#0a0a0a",bgHover:"#121212",textPrimary:"#d0d0d0",textSecondary:"#8a8a8a",borderColor:"#1f1f1f",accent:"#00a2ff",accentHover:"#0086d1",danger:"#ff5f5f",success:"#5fff87"}},monokai:{label:"Monokai",mode:"dark",dark:{bgPrimary:"#272822",bgSecondary:"#2f2f2f",bgHover:"#3a3a3a",textPrimary:"#f8f8f2",textSecondary:"#cfcfc2",borderColor:"#3e3d32",accent:"#f92672",accentHover:"#e81560",danger:"#f92672",success:"#a6e22e"}},"monokai-pro":{label:"Monokai Pro",mode:"dark",dark:{bgPrimary:"#2d2a2e",bgSecondary:"#363237",bgHover:"#403a40",textPrimary:"#fcfcfa",textSecondary:"#c1c0c0",borderColor:"#444046",accent:"#ff6188",accentHover:"#f74f7e",danger:"#ff4f5e",success:"#a9dc76"}},ristretto:{label:"Ristretto",mode:"dark",dark:{bgPrimary:"#2c2525",bgSecondary:"#362d2d",bgHover:"#403535",textPrimary:"#f4f1ef",textSecondary:"#cbbdb8",borderColor:"#4a3c3c",accent:"#ff9f43",accentHover:"#f28a2e",danger:"#ff5f56",success:"#a9dc76"}},dracula:{label:"Dracula",mode:"dark",dark:{bgPrimary:"#282a36",bgSecondary:"#303445",bgHover:"#3a3f52",textPrimary:"#f8f8f2",textSecondary:"#c5c8d6",borderColor:"#44475a",accent:"#bd93f9",accentHover:"#a87ded",danger:"#ff5555",success:"#50fa7b"}},catppuccin:{label:"Catppuccin",mode:"dark",dark:{bgPrimary:"#1e1e2e",bgSecondary:"#24273a",bgHover:"#2c2f41",textPrimary:"#cdd6f4",textSecondary:"#a6adc8",borderColor:"#313244",accent:"#89b4fa",accentHover:"#74a0f5",danger:"#f38ba8",success:"#a6e3a1"}},nord:{label:"Nord",mode:"dark",dark:{bgPrimary:"#2e3440",bgSecondary:"#3b4252",bgHover:"#434c5e",textPrimary:"#eceff4",textSecondary:"#d8dee9",borderColor:"#4c566a",accent:"#88c0d0",accentHover:"#78a9c0",danger:"#bf616a",success:"#a3be8c"}},gruvbox:{label:"Gruvbox",mode:"dark",dark:{bgPrimary:"#282828",bgSecondary:"#32302f",bgHover:"#3c3836",textPrimary:"#ebdbb2",textSecondary:"#bdae93",borderColor:"#3c3836",accent:"#d79921",accentHover:"#c28515",danger:"#fb4934",success:"#b8bb26"}},solarized:{label:"Solarized",mode:"auto",light:{bgPrimary:"#fdf6e3",bgSecondary:"#f5efdc",bgHover:"#eee8d5",textPrimary:"#586e75",textSecondary:"#657b83",borderColor:"#e0d8c6",accent:"#268bd2",accentHover:"#1f78b3",danger:"#dc322f",success:"#859900"},dark:{bgPrimary:"#002b36",bgSecondary:"#073642",bgHover:"#0b3c4a",textPrimary:"#eee8d5",textSecondary:"#93a1a1",borderColor:"#18424a",accent:"#268bd2",accentHover:"#1f78b3",danger:"#dc322f",success:"#859900"}},tokyo:{label:"Tokyo",mode:"dark",dark:{bgPrimary:"#1a1b26",bgSecondary:"#24283b",bgHover:"#2f3549",textPrimary:"#c0caf5",textSecondary:"#9aa5ce",borderColor:"#414868",accent:"#7aa2f7",accentHover:"#6b92e6",danger:"#f7768e",success:"#9ece6a"}},miasma:{label:"Miasma",mode:"dark",dark:{bgPrimary:"#1f1f23",bgSecondary:"#29292f",bgHover:"#33333a",textPrimary:"#e5e5e5",textSecondary:"#b4b4b4",borderColor:"#3d3d45",accent:"#c9739c",accentHover:"#b8618c",danger:"#e06c75",success:"#98c379"}},github:{label:"GitHub",mode:"auto",light:{bgPrimary:"#ffffff",bgSecondary:"#f6f8fa",bgHover:"#eaeef2",textPrimary:"#24292f",textSecondary:"#57606a",borderColor:"#d0d7de",accent:"#0969da",accentHover:"#0550ae",danger:"#cf222e",success:"#1a7f37"},dark:{bgPrimary:"#0d1117",bgSecondary:"#161b22",bgHover:"#21262d",textPrimary:"#c9d1d9",textSecondary:"#8b949e",borderColor:"#30363d",accent:"#2f81f7",accentHover:"#1f6feb",danger:"#f85149",success:"#3fb950"}},gotham:{label:"Gotham",mode:"dark",dark:{bgPrimary:"#0b0f14",bgSecondary:"#111720",bgHover:"#18212b",textPrimary:"#cbd6e2",textSecondary:"#9bb0c3",borderColor:"#1f2a37",accent:"#5ccfe6",accentHover:"#48b8ce",danger:"#d26937",success:"#2aa889"}}},MK=["--bg-primary","--bg-secondary","--bg-hover","--text-primary","--text-secondary","--border-color","--accent-color","--accent-hover","--accent-contrast-text","--accent-soft","--accent-soft-strong","--danger-color","--success-color","--search-highlight-color"],r4={theme:"default",tint:null},H7="light",D$=!1;function v8(_){let $=String(_||"").trim().toLowerCase();if(!$)return"default";if($==="solarized-dark"||$==="solarized-light")return"solarized";if($==="github-dark"||$==="github-light")return"github";if($==="tokyo-night")return"tokyo";return $}function D5(_){if(!_)return null;let $=String(_).trim();if(!$)return null;let j=$.startsWith("#")?$.slice(1):$;if(!/^[0-9a-fA-F]{3}$/.test(j)&&!/^[0-9a-fA-F]{6}$/.test(j))return null;let Q=j.length===3?j.split("").map((Y)=>Y+Y).join(""):j,Z=parseInt(Q,16);return{r:Z>>16&255,g:Z>>8&255,b:Z&255,hex:`#${Q.toLowerCase()}`}}function IK(_){if(!_||typeof document>"u")return null;let $=String(_).trim();if(!$)return null;let j=document.createElement("div");if(j.style.color="",j.style.color=$,!j.style.color)return null;let Q=j.style.color;try{if(document.body)j.style.display="none",document.body.appendChild(j),Q=getComputedStyle(j).color||j.style.color,document.body.removeChild(j)}catch{}let Z=Q.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/i);if(!Z)return null;let Y=parseInt(Z[1],10),q=parseInt(Z[2],10),K=parseInt(Z[3],10);if(![Y,q,K].every((G)=>Number.isFinite(G)))return null;let N=`#${[Y,q,K].map((G)=>G.toString(16).padStart(2,"0")).join("")}`;return{r:Y,g:q,b:K,hex:N}}function J7(_){return D5(_)||IK(_)}function o5(_,$,j){let Q=Math.round(_.r+($.r-_.r)*j),Z=Math.round(_.g+($.g-_.g)*j),Y=Math.round(_.b+($.b-_.b)*j);return`rgb(${Q} ${Z} ${Y})`}function E$(_,$){return`rgba(${_.r}, ${_.g}, ${_.b}, ${$})`}function xK(_){let $=_.r/255,j=_.g/255,Q=_.b/255,Z=$<=0.03928?$/12.92:Math.pow(($+0.055)/1.055,2.4),Y=j<=0.03928?j/12.92:Math.pow((j+0.055)/1.055,2.4),q=Q<=0.03928?Q/12.92:Math.pow((Q+0.055)/1.055,2.4);return 0.2126*Z+0.7152*Y+0.0722*q}function TK(_){return xK(_)>0.4?"#000000":"#ffffff"}function O7(){if(typeof window>"u")return"light";try{return window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}catch{return"light"}}function M$(_){return B7[_]||B7.default}function CK(_){return _.mode==="auto"?O7():_.mode}function A7(_,$){let j=M$(_);if($==="dark"&&j.dark)return j.dark;if($==="light"&&j.light)return j.light;return j.dark||j.light||s5}function D7(_,$,j){let Q=J7($);if(!Q)return _;let Z=D5(_.bgPrimary),Y=D5(_.bgSecondary),q=D5(_.bgHover),K=D5(_.borderColor);if(!Z||!Y||!q||!K)return _;let G=D5(j==="dark"?"#ffffff":"#000000");return{..._,bgPrimary:o5(Z,Q,0.08),bgSecondary:o5(Y,Q,0.12),bgHover:o5(q,Q,0.16),borderColor:o5(K,Q,0.08),accent:Q.hex,accentHover:G?o5(Q,G,0.18):Q.hex}}function PK(_,$){if(typeof document>"u")return;let j=document.documentElement,Q=_.accent,Z=J7(Q),Y=Z?E$(Z,$==="dark"?0.35:0.2):_.searchHighlight||_.searchHighlightColor,q=Z?E$(Z,$==="dark"?0.16:0.12):"rgba(29, 155, 240, 0.12)",K=Z?E$(Z,$==="dark"?0.28:0.2):"rgba(29, 155, 240, 0.2)",N=Z?TK(Z):$==="dark"?"#000000":"#ffffff",G={"--bg-primary":_.bgPrimary,"--bg-secondary":_.bgSecondary,"--bg-hover":_.bgHover,"--text-primary":_.textPrimary,"--text-secondary":_.textSecondary,"--border-color":_.borderColor,"--accent-color":Q,"--accent-hover":_.accentHover||Q,"--accent-soft":q,"--accent-soft-strong":K,"--accent-contrast-text":N,"--danger-color":_.danger||s5.danger,"--success-color":_.success||s5.success,"--search-highlight-color":Y||"rgba(29, 155, 240, 0.2)"};Object.entries(G).forEach(([X,V])=>{if(V)j.style.setProperty(X,V)})}function yK(){if(typeof document>"u")return;let _=document.documentElement;MK.forEach(($)=>_.style.removeProperty($))}function A5(_,$={}){if(typeof document>"u")return null;let j=typeof $.id==="string"&&$.id.trim()?$.id.trim():null,Q=j?document.getElementById(j):document.querySelector(`meta[name="${_}"]`);if(!Q)Q=document.createElement("meta"),document.head.appendChild(Q);if(Q.setAttribute("name",_),j)Q.setAttribute("id",j);return Q}function W7(_){let $=v8(r4?.theme||"default"),j=r4?.tint?String(r4.tint).trim():null,Q=A7($,_);if($==="default"&&j)Q=D7(Q,j,_);if(Q?.bgPrimary)return Q.bgPrimary;return _==="dark"?z7.bgPrimary:s5.bgPrimary}function SK(_,$){if(typeof document>"u")return;let j=A5("theme-color",{id:"dynamic-theme-color"});if(j&&_)j.removeAttribute("media"),j.setAttribute("content",_);let Q=A5("theme-color",{id:"theme-color-light"});if(Q)Q.setAttribute("media","(prefers-color-scheme: light)"),Q.setAttribute("content",W7("light"));let Z=A5("theme-color",{id:"theme-color-dark"});if(Z)Z.setAttribute("media","(prefers-color-scheme: dark)"),Z.setAttribute("content",W7("dark"));let Y=A5("msapplication-TileColor");if(Y&&_)Y.setAttribute("content",_);let q=A5("msapplication-navbutton-color");if(q&&_)q.setAttribute("content",_);let K=A5("apple-mobile-web-app-status-bar-style");if(K)K.setAttribute("content",$==="dark"?"black-translucent":"default")}function wK(){if(typeof window>"u")return;let _={...r4,mode:H7};window.dispatchEvent(new CustomEvent("piclaw-theme-change",{detail:_}))}function E7(){try{let _=z_(F7);if(!_)return{};let $=JSON.parse(_);return typeof $==="object"&&$!==null?$:{}}catch{return{}}}function RK(_,$,j){let Q=E7();if(!$&&!j)delete Q[_];else Q[_]={theme:$||"default",tint:j||null};Y1(F7,JSON.stringify(Q))}function uK(_){if(!_)return null;return E7()[_]||null}function k7(){if(typeof window>"u")return"web:default";try{let $=new URL(window.location.href).searchParams.get("chat_jid");return $&&$.trim()?$.trim():"web:default"}catch{return"web:default"}}function I$(_,$={}){if(typeof window>"u"||typeof document>"u")return;let j=v8(_?.theme||"default"),Q=_?.tint?String(_.tint).trim():null,Z=M$(j),Y=CK(Z),q=A7(j,Y);r4={theme:j,tint:Q},H7=Y;let K=document.documentElement;K.dataset.theme=Y,K.dataset.colorTheme=j,K.dataset.tint=Q?String(Q):"",K.style.colorScheme=Y;let N=q;if(j==="default"&&Q)N=D7(q,Q,Y);if(j==="default"&&!Q)yK();else PK(N,Y);if(SK(N.bgPrimary,Y),wK(),$.persist!==!1)if(Y1(k$,j),Q)Y1(f8,Q);else Y1(f8,"")}function u8(){if(M$(r4.theme).mode!=="auto")return;I$(r4,{persist:!1})}function M7(){if(typeof window>"u")return()=>{};let _=k7(),$=uK(_),j=$?v8($.theme||"default"):v8(z_(k$)||"default"),Q=$?$.tint?String($.tint).trim():null:(()=>{let Z=z_(f8);return Z?Z.trim():null})();if(I$({theme:j,tint:Q},{persist:!1}),window.matchMedia&&!D$){let Z=window.matchMedia("(prefers-color-scheme: dark)");if(Z.addEventListener)Z.addEventListener("change",u8);else if(Z.addListener)Z.addListener(u8);return D$=!0,()=>{if(Z.removeEventListener)Z.removeEventListener("change",u8);else if(Z.removeListener)Z.removeListener(u8);D$=!1}}return()=>{}}function I7(_){if(!_||typeof _!=="object")return;let $=_.chat_jid||_.chatJid||k7(),j=_.theme??_.name??_.colorTheme,Q=_.tint??null;if(RK($,j||"default",Q),I$({theme:j||"default",tint:Q},{persist:!1}),!$||$==="web:default")Y1(k$,j||"default"),Y1(f8,Q||"")}function x7(){if(typeof document>"u")return"light";let _=document.documentElement?.dataset?.theme;if(_==="dark"||_==="light")return _;return O7()}var g8=/#(\w+)/g,fK=new Set(["strong","em","b","i","u","s","br","p","ul","ol","li","blockquote","ruby","rt","rp","span"]),vK=new Set(["a","abbr","blockquote","br","code","div","em","hr","h1","h2","h3","h4","h5","h6","i","img","kbd","li","mark","ol","p","pre","ruby","rt","rp","s","span","strong","sub","sup","table","tbody","td","th","thead","tr","u","ul","math","semantics","mrow","mi","mn","mo","mtext","mspace","msup","msub","msubsup","mfrac","msqrt","mroot","mtable","mtr","mtd","annotation"]),gK=new Set(["class","style","title","role","aria-hidden","aria-label","aria-expanded","aria-live","data-mermaid","data-hashtag"]),bK={a:new Set(["href","target","rel"]),img:new Set(["src","alt","title"])},mK=new Set(["http:","https:","mailto:",""]);function x$(_){return String(_||"").replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/'/g,"&#39;")}function o4(_,$={}){if(!_)return null;let j=String(_).trim();if(!j)return null;if(j.startsWith("#")||j.startsWith("/"))return j;if(j.startsWith("data:")){if($.allowDataImage&&/^data:image\//i.test(j))return j;return null}if(j.startsWith("blob:"))return j;try{let Q=new URL(j,typeof window<"u"?window.location.origin:"http://localhost");if(!mK.has(Q.protocol))return null;return Q.href}catch{return null}}function T7(_,$={}){if(!_)return"";let j=new DOMParser().parseFromString(_,"text/html"),Q=[],Z=j.createTreeWalker(j.body,NodeFilter.SHOW_ELEMENT),Y;while(Y=Z.nextNode())Q.push(Y);for(let q of Q){let K=q.tagName.toLowerCase();if(!vK.has(K)){let G=q.parentNode;if(!G)continue;while(q.firstChild)G.insertBefore(q.firstChild,q);G.removeChild(q);continue}let N=bK[K]||new Set;for(let G of Array.from(q.attributes)){let X=G.name.toLowerCase(),V=G.value;if(X.startsWith("on")){q.removeAttribute(G.name);continue}if(X.startsWith("data-")||X.startsWith("aria-"))continue;if(N.has(X)||gK.has(X)){if(X==="href"){let U=o4(V);if(!U)q.removeAttribute(G.name);else if(q.setAttribute(G.name,U),K==="a"&&!q.getAttribute("rel"))q.setAttribute("rel","noopener noreferrer")}else if(X==="src"){let U=K==="img"&&typeof $.rewriteImageSrc==="function"?$.rewriteImageSrc(V):V,L=o4(U,{allowDataImage:K==="img"});if(!L)q.removeAttribute(G.name);else q.setAttribute(G.name,L)}continue}q.removeAttribute(G.name)}}return j.body.innerHTML}function C7(_){if(!_)return _;let $=_.replace(/</g,"&lt;").replace(/>/g,"&gt;");return new DOMParser().parseFromString($,"text/html").documentElement.textContent}function b8(_,$=2){if(!_)return _;let j=_;for(let Q=0;Q<$;Q+=1){let Z=C7(j);if(Z===j)break;j=Z}return j}function hK(_){if(!_)return{text:"",blocks:[]};let j=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),Q=[],Z=[],Y=!1,q=[];for(let K of j){if(!Y&&K.trim().match(/^```mermaid\s*$/i)){Y=!0,q=[];continue}if(Y&&K.trim().match(/^```\s*$/)){let N=Q.length;Q.push(q.join(`
`)),Z.push(`@@MERMAID_BLOCK_${N}@@`),Y=!1,q=[];continue}if(Y)q.push(K);else Z.push(K)}if(Y)Z.push("```mermaid"),Z.push(...q);return{text:Z.join(`
`),blocks:Q}}function pK(_){if(!_)return _;return b8(_,5)}function cK(_){let $=new TextEncoder().encode(String(_||"")),j="";for(let Q of $)j+=String.fromCharCode(Q);return btoa(j)}function lK(_){let $=atob(String(_||"")),j=new Uint8Array($.length);for(let Q=0;Q<$.length;Q+=1)j[Q]=$.charCodeAt(Q);return new TextDecoder().decode(j)}function nK(_,$){if(!_||!$||$.length===0)return _;return _.replace(/@@MERMAID_BLOCK_(\d+)@@/g,(j,Q)=>{let Z=Number(Q),Y=$[Z]??"",q=pK(Y);return`<div class="mermaid-container" data-mermaid="${cK(q)}"><div class="mermaid-loading">Loading diagram...</div></div>`})}function P7(_){if(!_)return _;return _.replace(/<code>([\s\S]*?)<\/code>/gi,($,j)=>{if(j.includes(`
`))return`
\`\`\`
${j}
\`\`\`
`;return`\`${j}\``})}var dK={span:new Set(["title","class","lang","dir"])};function iK(_,$){let j=dK[_];if(!j||!$)return"";let Q=[],Z=/([a-zA-Z_:][\w:.-]*)(?:\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s"'`=<>]+)))?/g,Y;while(Y=Z.exec($)){let q=(Y[1]||"").toLowerCase();if(!q||q.startsWith("on")||!j.has(q))continue;let K=Y[2]??Y[3]??Y[4]??"";Q.push(` ${q}="${x$(K)}"`)}return Q.join("")}function y7(_){if(!_)return _;return _.replace(/&lt;([\s\S]*?)&gt;/g,($,j)=>{let Q=j.trim(),Z=Q.startsWith("/"),Y=Z?Q.slice(1).trim():Q,K=Y.endsWith("/")?Y.slice(0,-1).trim():Y,[N=""]=K.split(/\s+/,1),G=N.toLowerCase();if(!G||!fK.has(G))return $;if(G==="br")return Z?"":"<br>";if(Z)return`</${G}>`;let X=K.slice(N.length).trim(),V=iK(G,X);return`<${G}${V}>`})}function S7(_){if(!_)return _;let $=(j)=>j.replace(/&amp;lt;/g,"&lt;").replace(/&amp;gt;/g,"&gt;").replace(/&amp;quot;/g,"&quot;").replace(/&amp;#39;/g,"&#39;").replace(/&amp;amp;/g,"&amp;");return _.replace(/<pre><code>([\s\S]*?)<\/code><\/pre>/g,(j,Q)=>`<pre><code>${$(Q)}</code></pre>`).replace(/<code>([\s\S]*?)<\/code>/g,(j,Q)=>`<code>${$(Q)}</code>`)}function w7(_){if(!_)return _;let $=new DOMParser().parseFromString(_,"text/html"),j=$.createTreeWalker($.body,NodeFilter.SHOW_TEXT),Q=(Y)=>Y.replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&quot;/g,'"').replace(/&#39;/g,"'").replace(/&amp;/g,"&"),Z;while(Z=j.nextNode()){if(!Z.nodeValue)continue;let Y=Q(Z.nodeValue);if(Y!==Z.nodeValue)Z.nodeValue=Y}return $.body.innerHTML}function rK(_){if(!window.katex)return _;let $=(q)=>C7(q).replace(/&gt;/g,">").replace(/&lt;/g,"<").replace(/&amp;/g,"&").replace(/<br\s*\/?\s*>/gi,`
`),j=(q)=>{let K=[],N=q.replace(/<pre\b[^>]*>\s*<code\b[^>]*>[\s\S]*?<\/code>\s*<\/pre>/gi,(G)=>{let X=K.length;return K.push(G),`@@CODE_BLOCK_${X}@@`});return N=N.replace(/<code\b[^>]*>[\s\S]*?<\/code>/gi,(G)=>{let X=K.length;return K.push(G),`@@CODE_INLINE_${X}@@`}),{html:N,blocks:K}},Q=(q,K)=>{if(!K.length)return q;return q.replace(/@@CODE_(?:BLOCK|INLINE)_(\d+)@@/g,(N,G)=>{let X=Number(G);return K[X]??""})},Z=j(_),Y=Z.html;return Y=Y.replace(/(^|\n|<br\s*\/?\s*>|<p>|<\/p>)\s*\$\$([\s\S]+?)\$\$\s*(?=\n|<br\s*\/?\s*>|<\/p>|$)/gi,(q,K,N)=>{try{let G=katex.renderToString($(N.trim()),{displayMode:!0,throwOnError:!1});return`${K}${G}`}catch(G){return`<span class="math-error" title="${x$(G.message)}">${q}</span>`}}),Y=Y.replace(/(^|[^\\$])\$(?!\s)([^\n$]+?)\$/g,(q,K,N)=>{if(/\s$/.test(N))return q;try{let G=katex.renderToString($(N),{displayMode:!1,throwOnError:!1});return`${K}${G}`}catch(G){return`${K}<span class="math-error" title="${x$(G.message)}">$${N}$</span>`}}),Q(Y,Z.blocks)}function oK(_){if(!_)return _;let $=new DOMParser().parseFromString(_,"text/html"),j=$.createTreeWalker($.body,NodeFilter.SHOW_TEXT),Q=[],Z;while(Z=j.nextNode())Q.push(Z);for(let Y of Q){let q=Y.nodeValue;if(!q)continue;if(g8.lastIndex=0,!g8.test(q))continue;g8.lastIndex=0;let K=Y.parentElement;if(K&&(K.closest("a")||K.closest("code")||K.closest("pre")))continue;let N=q.split(g8);if(N.length<=1)continue;let G=$.createDocumentFragment();N.forEach((X,V)=>{if(V%2===1){let U=$.createElement("a");U.setAttribute("href","#"),U.className="hashtag",U.setAttribute("data-hashtag",X),U.textContent=`#${X}`,G.appendChild(U)}else G.appendChild($.createTextNode(X))}),Y.parentNode?.replaceChild(G,Y)}return $.body.innerHTML}function sK(_){if(!_)return _;let j=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),Q=[],Z=!1;for(let Y of j){if(!Z&&Y.trim().match(/^```(?:math|katex|latex)\s*$/i)){Z=!0,Q.push("$$");continue}if(Z&&Y.trim().match(/^```\s*$/)){Z=!1,Q.push("$$");continue}Q.push(Y)}return Q.join(`
`)}function aK(_){let $=sK(_||""),{text:j,blocks:Q}=hK($),Z=b8(j,2),q=P7(Z).replace(/</g,"&lt;");return{safeHtml:y7(q),mermaidBlocks:Q}}function H_(_,$,j={}){if(!_)return"";let{safeHtml:Q,mermaidBlocks:Z}=aK(_),Y=window.marked?marked.parse(Q,{headerIds:!1,mangle:!1}):Q.replace(/\n/g,"<br>");return Y=S7(Y),Y=w7(Y),Y=rK(Y),Y=oK(Y),Y=nK(Y,Z),Y=T7(Y,j),Y}function a5(_){if(!_)return"";let $=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`),j=b8($,2),Z=P7(j).replace(/</g,"&lt;").replace(/>/g,"&gt;"),Y=y7(Z),q=window.marked?marked.parse(Y):Y.replace(/\n/g,"<br>");return q=S7(q),q=w7(q),q=T7(q),q}function tK(_,$=6){return _.replace(/<polyline\b([^>]*)\bpoints="([^"]+)"([^>]*)\/?\s*>/g,(j,Q,Z,Y)=>{let q=Z.trim().split(/\s+/).map((N)=>{let[G,X]=N.split(",").map(Number);return{x:G,y:X}});if(q.length<3)return`<polyline${Q}points="${Z}"${Y}/>`;let K=[`M ${q[0].x},${q[0].y}`];for(let N=1;N<q.length-1;N++){let G=q[N-1],X=q[N],V=q[N+1],U=X.x-G.x,L=X.y-G.y,J=V.x-X.x,D=V.y-X.y,O=Math.sqrt(U*U+L*L),W=Math.sqrt(J*J+D*D),A=Math.min($,O/2,W/2);if(A<0.5){K.push(`L ${X.x},${X.y}`);continue}let E=X.x-U/O*A,f=X.y-L/O*A,u=X.x+J/W*A,c=X.y+D/W*A,P=U*D-L*J>0?1:0;K.push(`L ${E},${f}`),K.push(`A ${A},${A} 0 0 ${P} ${u},${c}`)}return K.push(`L ${q[q.length-1].x},${q[q.length-1].y}`),`<path${Q}d="${K.join(" ")}"${Y}/>`})}async function W4(_){if(!window.beautifulMermaid)return;let{renderMermaid:$,THEMES:j}=window.beautifulMermaid,Z=x7()==="dark"?j["tokyo-night"]:j["github-light"],Y=_.querySelectorAll(".mermaid-container[data-mermaid]");for(let q of Y)try{let K=q.dataset.mermaid,N=lK(K||""),G=b8(N,2),X=await $(G,{...Z,transparent:!0});X=tK(X),q.innerHTML=X,q.removeAttribute("data-mermaid")}catch(K){console.error("Mermaid render error:",K);let N=document.createElement("pre");N.className="mermaid-error",N.textContent=`Diagram error: ${K.message}`,q.innerHTML="",q.appendChild(N),q.removeAttribute("data-mermaid")}}function R7(_){let $=new Date(_);if(Number.isNaN($.getTime()))return _;let Q=new Date-$,Z=Q/1000,Y=86400000;if(Q<Y){if(Z<60)return"just now";if(Z<3600)return`${Math.floor(Z/60)}m`;return`${Math.floor(Z/3600)}h`}if(Q<5*Y){let N=$.toLocaleDateString(void 0,{weekday:"short"}),G=$.toLocaleTimeString(void 0,{hour:"2-digit",minute:"2-digit"});return`${N} ${G}`}let q=$.toLocaleDateString(void 0,{month:"short",day:"numeric"}),K=$.toLocaleTimeString(void 0,{hour:"2-digit",minute:"2-digit"});return`${q} ${K}`}function t5(_){if(!Number.isFinite(_))return"0";return Math.round(_).toLocaleString()}function S_(_){if(_<1024)return _+" B";if(_<1048576)return(_/1024).toFixed(1)+" KB";return(_/1048576).toFixed(1)+" MB"}function s4(_){let $=new Date(_);if(Number.isNaN($.getTime()))return _;return $.toLocaleString()}function P4(_){return String(_||"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}function eK(_,$){let j=String(_||"").trim();if(!j)return j;if(/^[a-zA-Z][a-zA-Z\d+.-]*:/.test(j)||j.startsWith("#")||j.startsWith("data:")||j.startsWith("blob:"))return j;let Q=j.match(/^([^?#]*)(\?[^#]*)?(#.*)?$/),Z=Q?.[1]||j,Y=Q?.[2]||"",q=Q?.[3]||"",K=String($||"").split("/").slice(0,-1).join("/"),G=Z.startsWith("/")?Z:`${K?`${K}/`:""}${Z}`,X=[];for(let U of G.split("/")){if(!U||U===".")continue;if(U===".."){if(X.length>0)X.pop();continue}X.push(U)}let V=X.join("/");return`${E8(V)}${Y}${q}`}function e5(_){return _?.preview||null}function _N(_){let $=String(_||""),j=Math.max($.lastIndexOf("/"),$.lastIndexOf("\\")),Q=j>=0?$.slice(j+1):$,Z=Q.lastIndexOf(".");if(Z<=0||Z===Q.length-1)return"none";return Q.slice(Z+1)}function $N(_){if(!_)return"unknown";if(_.kind==="image")return"image";if(_.kind==="text")return _.content_type==="text/markdown"?"markdown":"text";if(_.kind==="binary")return"binary";return String(_.kind||"unknown")}function jN(_,$){let j=$?.path||_?.path||"",Q=[];if($?.content_type)Q.push(`<span><strong>type:</strong> ${P4($.content_type)}</span>`);if(typeof $?.size==="number")Q.push(`<span><strong>size:</strong> ${P4(S_($.size))}</span>`);if($?.mtime)Q.push(`<span><strong>modified:</strong> ${P4(s4($.mtime))}</span>`);if(Q.push(`<span><strong>kind:</strong> ${P4($N($))}</span>`),Q.push(`<span><strong>extension:</strong> ${P4(_N(j))}</span>`),j)Q.push(`<span><strong>path:</strong> ${P4(j)}</span>`);if($?.truncated)Q.push("<span><strong>content:</strong> truncated</span>");return`<div class="workspace-preview-meta workspace-preview-meta-inline">${Q.join("")}</div>`}function QN(_){let $=e5(_);if(!$)return'<div class="workspace-preview-text">No preview available.</div>';let j=jN(_,$);if($.kind==="image"){let Q=$.url||($.path?E8($.path):"");return`${j}
            <div class="workspace-preview-image">
                <img src="${P4(Q)}" alt="preview" />
            </div>
        `}if($.kind==="text"){if($.content_type==="text/markdown"){let Q=H_($.text||"",null,{rewriteImageSrc:(Z)=>eK(Z,$.path||_?.path)});return`${j}<div class="workspace-preview-text">${Q}</div>`}return`${j}<pre class="workspace-preview-text"><code>${P4($.text||"")}</code></pre>`}if($.kind==="binary")return`${j}<div class="workspace-preview-text">Binary file — download to view.</div>`;return`${j}<div class="workspace-preview-text">No preview available.</div>`}class T${constructor(_,$){this.container=_,this.context=$,this.disposed=!1,this.host=document.createElement("div"),this.host.className="workspace-preview-render-host",this.host.tabIndex=0,this.container.appendChild(this.host),this.render()}render(){if(this.disposed)return;this.host.innerHTML=QN(this.context)}getContent(){let _=e5(this.context);return typeof _?.text==="string"?_.text:void 0}isDirty(){return!1}setContent(_,$){let j=e5(this.context);if(j&&j.kind==="text"){if(j.text=_,$!==void 0)j.mtime=$}if(this.context.content=_,$!==void 0)this.context.mtime=$;this.render()}focus(){this.host?.focus?.()}dispose(){if(this.disposed)return;this.disposed=!0,this.host?.remove(),this.container.innerHTML=""}}var C$={id:"workspace-markdown-preview",label:"Workspace Markdown Preview",icon:"preview",capabilities:["preview","readonly"],placement:"tabs",canHandle(_){let $=e5(_);if(_?.mode!=="view")return!1;if(!$||$.kind!=="text")return!1;return $.content_type==="text/markdown"?20:!1},mount(_,$){return new T$(_,$)}},P$={id:"workspace-preview-default",label:"Workspace Preview",icon:"preview",capabilities:["preview","readonly"],placement:"tabs",canHandle(_){if(_?.mode!=="view")return!1;return e5(_)||_?.path?1:!1},mount(_,$){return new T$(_,$)}};var ZN=new Set([".docx",".doc",".odt",".rtf",".xlsx",".xls",".ods",".csv",".pptx",".ppt",".odp"]),YN={".docx":"Word Document",".doc":"Word (Legacy)",".odt":"OpenDocument Text",".rtf":"Rich Text",".xlsx":"Excel Spreadsheet",".xls":"Excel (Legacy)",".ods":"OpenDocument Spreadsheet",".csv":"CSV Data",".pptx":"PowerPoint",".ppt":"PowerPoint (Legacy)",".odp":"OpenDocument Presentation"},qN={".docx":"\uD83D\uDCDD",".doc":"\uD83D\uDCDD",".odt":"\uD83D\uDCDD",".rtf":"\uD83D\uDCDD",".xlsx":"\uD83D\uDCCA",".xls":"\uD83D\uDCCA",".ods":"\uD83D\uDCCA",".csv":"\uD83D\uDCCA",".pptx":"\uD83D\uDCFD️",".ppt":"\uD83D\uDCFD️",".odp":"\uD83D\uDCFD️"};function f7(_){if(!_)return"";let $=_.lastIndexOf(".");if($<0)return"";return _.slice($).toLowerCase()}function u7(_){return _.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}class v7{container;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Q=j.split("/").pop()||"document",Z=f7(j),Y=qN[Z]||"\uD83D\uDCC4",q=YN[Z]||"Office Document",K=document.createElement("div");K.style.cssText="width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:var(--bg-primary,#1a1a1a);",K.innerHTML=`
            <div style="text-align:center;max-width:360px;padding:24px;">
                <div style="font-size:56px;margin-bottom:12px;">${Y}</div>
                <div style="font-size:14px;font-weight:600;color:var(--text-primary,#e0e0e0);margin-bottom:4px;word-break:break-word;">${u7(Q)}</div>
                <div style="font-size:11px;color:var(--text-secondary,#888);margin-bottom:20px;">${u7(q)}</div>
                <button id="ov-open-tab" style="padding:8px 20px;background:var(--accent-color,#1d9bf0);color:var(--accent-contrast-text,#fff);
                    border:none;border-radius:5px;font-size:13px;font-weight:500;cursor:pointer;
                    transition:background 0.15s;"
                    onmouseenter="this.style.background='var(--accent-hover,#1a8cd8)'"
                    onmouseleave="this.style.background='var(--accent-color,#1d9bf0)'">
                    Open in Tab
                </button>
            </div>
        `,_.appendChild(K);let N=K.querySelector("#ov-open-tab");if(N)N.addEventListener("click",()=>{let G=new CustomEvent("office-viewer:open-tab",{bubbles:!0,detail:{path:j}});_.dispatchEvent(G)})}getContent(){return}isDirty(){return!1}focus(){}resize(){}dispose(){if(this.disposed)return;this.disposed=!0,this.container.innerHTML=""}}class g7{container;iframe=null;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Q=j.split("/").pop()||"document",Z=`/workspace/raw?path=${encodeURIComponent(j)}`,Y=`/office-viewer/?url=${encodeURIComponent(Z)}&name=${encodeURIComponent(Q)}`;this.iframe=document.createElement("iframe"),this.iframe.src=Y,this.iframe.style.cssText="width:100%;height:100%;border:none;background:#1e1e1e;",_.appendChild(this.iframe)}getContent(){return}isDirty(){return!1}focus(){this.iframe?.focus()}resize(){}dispose(){if(this.disposed)return;if(this.disposed=!0,this.iframe)this.iframe.src="about:blank",this.iframe=null;this.container.innerHTML=""}}var y$={id:"office-viewer",label:"Office Viewer",icon:"file-text",capabilities:["readonly","preview"],placement:"tabs",canHandle(_){let $=f7(_?.path);if(!$||!ZN.has($))return!1;return 50},mount(_,$){if($?.mode==="view")return new v7(_,$);return new g7(_,$)}};var KN=/\.(csv|tsv)$/i;function b7(_){return _.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}class m7{container;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Q=j.split("/").pop()||"table.csv",Z=j.toLowerCase().endsWith(".tsv")?"TSV Table":"CSV Table",Y=document.createElement("div");Y.style.cssText="width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:var(--bg-primary,#1a1a1a);",Y.innerHTML=`
            <div style="text-align:center;max-width:360px;padding:24px;">
                <div style="font-size:56px;margin-bottom:12px;">\uD83D\uDCCA</div>
                <div style="font-size:14px;font-weight:600;color:var(--text-primary,#e0e0e0);margin-bottom:4px;word-break:break-word;">${b7(Q)}</div>
                <div style="font-size:11px;color:var(--text-secondary,#888);margin-bottom:20px;">${b7(Z)}</div>
                <button id="csv-open-tab" style="padding:8px 20px;background:var(--accent-color,#1d9bf0);color:var(--accent-contrast-text,#fff);
                    border:none;border-radius:5px;font-size:13px;font-weight:500;cursor:pointer;
                    transition:background 0.15s;"
                    onmouseenter="this.style.background='var(--accent-hover,#1a8cd8)'"
                    onmouseleave="this.style.background='var(--accent-color,#1d9bf0)'">
                    Open in Tab
                </button>
            </div>
        `,_.appendChild(Y);let q=Y.querySelector("#csv-open-tab");if(q)q.addEventListener("click",()=>{let K=new CustomEvent("csv-viewer:open-tab",{bubbles:!0,detail:{path:j}});_.dispatchEvent(K)})}getContent(){return}isDirty(){return!1}focus(){}resize(){}dispose(){if(this.disposed)return;this.disposed=!0,this.container.innerHTML=""}}class h7{container;iframe=null;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Q=`/csv-viewer/?path=${encodeURIComponent(j)}`;this.iframe=document.createElement("iframe"),this.iframe.src=Q,this.iframe.style.cssText="width:100%;height:100%;border:none;background:var(--bg-primary,#000);",_.appendChild(this.iframe)}getContent(){return}isDirty(){return!1}focus(){this.iframe?.focus()}resize(){}dispose(){if(this.disposed)return;if(this.disposed=!0,this.iframe)this.iframe.src="about:blank",this.iframe=null;this.container.innerHTML=""}}var S$={id:"csv-viewer",label:"CSV Viewer",icon:"table",capabilities:["readonly","preview"],placement:"tabs",canHandle(_){let $=_?.path||"";if(!KN.test($))return!1;return 55},mount(_,$){if($?.mode==="view")return new m7(_,$);return new h7(_,$)}};var NN=/\.pdf$/i;function GN(_){return _.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}class p7{container;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Q=j.split("/").pop()||"document.pdf",Z=document.createElement("div");Z.style.cssText="width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:var(--bg-primary,#1a1a1a);",Z.innerHTML=`
            <div style="text-align:center;max-width:360px;padding:24px;">
                <div style="font-size:56px;margin-bottom:12px;">\uD83D\uDCC4</div>
                <div style="font-size:14px;font-weight:600;color:var(--text-primary,#e0e0e0);margin-bottom:4px;word-break:break-word;">${GN(Q)}</div>
                <div style="font-size:11px;color:var(--text-secondary,#888);margin-bottom:20px;">PDF Document</div>
                <button id="pdf-open-tab" style="padding:8px 20px;background:var(--accent-color,#1d9bf0);color:var(--accent-contrast-text,#fff);
                    border:none;border-radius:5px;font-size:13px;font-weight:500;cursor:pointer;
                    transition:background 0.15s;"
                    onmouseenter="this.style.background='var(--accent-hover,#1a8cd8)'"
                    onmouseleave="this.style.background='var(--accent-color,#1d9bf0)'">
                    Open in Tab
                </button>
            </div>
        `,_.appendChild(Z);let Y=Z.querySelector("#pdf-open-tab");if(Y)Y.addEventListener("click",()=>{let q=new CustomEvent("pdf-viewer:open-tab",{bubbles:!0,detail:{path:j}});_.dispatchEvent(q)})}getContent(){return}isDirty(){return!1}focus(){}resize(){}dispose(){if(this.disposed)return;this.disposed=!0,this.container.innerHTML=""}}class c7{container;iframe=null;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Q=`/pdf-viewer/?path=${encodeURIComponent(j)}`;this.iframe=document.createElement("iframe"),this.iframe.src=Q,this.iframe.style.cssText="width:100%;height:100%;border:none;background:#1e1e1e;",_.appendChild(this.iframe)}getContent(){return}isDirty(){return!1}focus(){this.iframe?.focus()}resize(){}dispose(){if(this.disposed)return;if(this.disposed=!0,this.iframe)this.iframe.src="about:blank",this.iframe=null;this.container.innerHTML=""}}var w$={id:"pdf-viewer",label:"PDF Viewer",icon:"file-text",capabilities:["readonly","preview"],placement:"tabs",canHandle(_){let $=_?.path||"";if(!NN.test($))return!1;return 52},mount(_,$){if($?.mode==="view")return new p7(_,$);return new c7(_,$)}};var XN=/\.(png|jpe?g|gif|webp|bmp|ico|svg)$/i;function R$(_){return _.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}class l7{container;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Q=j.split("/").pop()||"image",Z=`/workspace/raw?path=${encodeURIComponent(j)}`,Y=document.createElement("div");Y.style.cssText="width:100%;height:100%;display:flex;flex-direction:column;background:var(--bg-primary,#1a1a1a);",Y.innerHTML=`
            <div style="flex:1;min-height:0;display:flex;align-items:center;justify-content:center;overflow:hidden;padding:16px;">
                <img src="${R$(Z)}" alt="${R$(Q)}" style="max-width:100%;max-height:100%;object-fit:contain;border-radius:4px;" />
            </div>
            <div style="display:flex;align-items:center;justify-content:space-between;padding:8px 16px;border-top:1px solid var(--border-color,#333);flex-shrink:0;">
                <div style="font-size:12px;color:var(--text-secondary,#888);overflow:hidden;text-overflow:ellipsis;white-space:nowrap;min-width:0;">${R$(Q)}</div>
                <button id="img-open-tab" style="padding:5px 14px;background:var(--accent-color,#1d9bf0);color:var(--accent-contrast-text,#fff);
                    border:none;border-radius:4px;font-size:12px;font-weight:500;cursor:pointer;flex-shrink:0;
                    transition:background 0.15s;"
                    onmouseenter="this.style.background='var(--accent-hover,#1a8cd8)'"
                    onmouseleave="this.style.background='var(--accent-color,#1d9bf0)'">
                    Open in Tab
                </button>
            </div>
        `,_.appendChild(Y);let q=Y.querySelector("#img-open-tab");if(q)q.addEventListener("click",()=>{let K=new CustomEvent("image-viewer:open-tab",{bubbles:!0,detail:{path:j}});_.dispatchEvent(K)})}getContent(){return}isDirty(){return!1}focus(){}resize(){}dispose(){if(this.disposed)return;this.disposed=!0,this.container.innerHTML=""}}class n7{container;iframe=null;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Q=`/image-viewer/?path=${encodeURIComponent(j)}`;this.iframe=document.createElement("iframe"),this.iframe.src=Q,this.iframe.style.cssText="width:100%;height:100%;border:none;background:var(--bg-primary,#000);",_.appendChild(this.iframe)}getContent(){return}isDirty(){return!1}focus(){this.iframe?.focus()}resize(){}dispose(){if(this.disposed)return;if(this.disposed=!0,this.iframe)this.iframe.src="about:blank",this.iframe=null;this.container.innerHTML=""}}var u$={id:"image-viewer",label:"Image Viewer",icon:"image",capabilities:["readonly","preview"],placement:"tabs",canHandle(_){let $=_?.path||"";if(!XN.test($))return!1;return 48},mount(_,$){if($?.mode==="view")return new l7(_,$);return new n7(_,$)}};var VN=/\.(mp4|m4v|mov|webm|ogv)$/i;function UN(_){return _.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}class d7{container;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Q=j.split("/").pop()||"video.mp4",Z=document.createElement("div");Z.style.cssText="width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:var(--bg-primary,#1a1a1a);",Z.innerHTML=`
            <div style="text-align:center;max-width:360px;padding:24px;">
                <div style="font-size:56px;margin-bottom:12px;">\uD83C\uDFAC</div>
                <div style="font-size:14px;font-weight:600;color:var(--text-primary,#e0e0e0);margin-bottom:4px;word-break:break-word;">${UN(Q)}</div>
                <div style="font-size:11px;color:var(--text-secondary,#888);margin-bottom:20px;">Video File</div>
                <button id="video-open-tab" style="padding:8px 20px;background:var(--accent-color,#1d9bf0);color:var(--accent-contrast-text,#fff);
                    border:none;border-radius:5px;font-size:13px;font-weight:500;cursor:pointer;
                    transition:background 0.15s;"
                    onmouseenter="this.style.background='var(--accent-hover,#1a8cd8)'"
                    onmouseleave="this.style.background='var(--accent-color,#1d9bf0)'">
                    Open in Tab
                </button>
            </div>
        `,_.appendChild(Z);let Y=Z.querySelector("#video-open-tab");if(Y)Y.addEventListener("click",()=>{let q=new CustomEvent("video-viewer:open-tab",{bubbles:!0,detail:{path:j}});_.dispatchEvent(q)})}getContent(){return}isDirty(){return!1}focus(){}resize(){}dispose(){if(this.disposed)return;this.disposed=!0,this.container.innerHTML=""}}class i7{container;iframe=null;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Q=`/video-viewer/?path=${encodeURIComponent(j)}`;this.iframe=document.createElement("iframe"),this.iframe.src=Q,this.iframe.style.cssText="width:100%;height:100%;border:none;background:#111;",_.appendChild(this.iframe)}getContent(){return}isDirty(){return!1}focus(){this.iframe?.focus()}resize(){}dispose(){if(this.disposed)return;if(this.disposed=!0,this.iframe)this.iframe.src="about:blank",this.iframe=null;this.container.innerHTML=""}}var f$={id:"video-viewer",label:"Video Viewer",icon:"play-circle",capabilities:["readonly","preview"],placement:"tabs",canHandle(_){let $=_?.path||"";if(!VN.test($))return!1;return 54},mount(_,$){if($?.mode==="view")return new d7(_,$);return new i7(_,$)}};function LN(_){if(!_)return!1;let $=_.toLowerCase();return $.endsWith(".drawio")||$.endsWith(".drawio.xml")||$.endsWith(".drawio.svg")||$.endsWith(".drawio.png")}function BN(_){return _.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}var v$='<mxfile host="app.diagrams.net"><diagram id="page-1" name="Page-1"><mxGraphModel dx="1260" dy="720" grid="1" gridSize="10" guides="1" tooltips="1" connect="1" arrows="1" fold="1" page="1" pageScale="1" pageWidth="850" pageHeight="1100" math="0" shadow="0"><root><mxCell id="0"/><mxCell id="1" parent="0"/></root></mxGraphModel></diagram></mxfile>';function r7(_){let $=String(_||"").trim();return $?$:v$}function WN(_){let $=String(_||"").toLowerCase();if($.endsWith(".drawio.svg")||$.endsWith(".svg"))return"xmlsvg";if($.endsWith(".drawio.png")||$.endsWith(".png"))return"xmlpng";return"xml"}function FN(_){let $="",j=32768;for(let Q=0;Q<_.length;Q+=j)$+=String.fromCharCode(..._.subarray(Q,Q+j));return btoa($)}function zN(_,$="*"){try{let j=(Y)=>{let q=_.parent||_.opener;if(!q)return!1;return q.postMessage(JSON.stringify({event:"workspace-export",...Y}),$),!0},Q=_.EditorUi;if(Q?.prototype&&!Q.prototype.__piclawWorkspaceSavePatched){let Y=Q.prototype.saveData;Q.prototype.saveData=function(q,K,N,G,X,V){try{if(q&&N!=null&&j({filename:q,format:K,data:N,mimeType:G,base64Encoded:Boolean(X),defaultMode:V}))return}catch(U){console.warn("[drawio-pane] saveData intercept failed, falling back to native save",U)}return Y.apply(this,arguments)},Q.prototype.__piclawWorkspaceSavePatched=!0}let Z=_.App;if(Z?.prototype&&!Z.prototype.__piclawExportPatched){let Y=Z.prototype.exportFile;Z.prototype.exportFile=function(q,K,N,G,X,V){try{if(K&&j({filename:K,data:q,mimeType:N,base64Encoded:Boolean(G),mode:X,folderId:V}))return}catch(U){console.warn("[drawio-pane] export intercept failed, falling back to native export",U)}return Y.apply(this,arguments)},Z.prototype.__piclawExportPatched=!0}return Boolean(Q?.prototype&&Q.prototype.__piclawWorkspaceSavePatched||Z?.prototype&&Z.prototype.__piclawExportPatched)}catch{return!1}}async function o7(_,$){let j=new Uint8Array(await _.arrayBuffer());return`data:${_.headers.get("Content-Type")||$};base64,${FN(j)}`}class s7{container;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Q=j.split("/").pop()||"diagram.drawio",Z=document.createElement("div");Z.style.cssText="width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:var(--bg-primary,#1a1a1a);",Z.innerHTML=`
            <div style="text-align:center;max-width:360px;padding:24px;">
                <div style="font-size:56px;margin-bottom:12px;">\uD83D\uDCD0</div>
                <div style="font-size:14px;font-weight:600;color:var(--text-primary,#e0e0e0);margin-bottom:4px;word-break:break-word;">${BN(Q)}</div>
                <div style="font-size:11px;color:var(--text-secondary,#888);margin-bottom:20px;">Draw.io Diagram</div>
                <button id="drawio-open-tab" style="padding:8px 20px;background:var(--accent-color,#1d9bf0);color:var(--accent-contrast-text,#fff);
                    border:none;border-radius:5px;font-size:13px;font-weight:500;cursor:pointer;
                    transition:background 0.15s;"
                    onmouseenter="this.style.background='var(--accent-hover,#1a8cd8)'"
                    onmouseleave="this.style.background='var(--accent-color,#1d9bf0)'">
                    Edit in Tab
                </button>
            </div>
        `,_.appendChild(Z);let Y=Z.querySelector("#drawio-open-tab");if(Y)Y.addEventListener("click",()=>{let q=new CustomEvent("drawio:open-tab",{bubbles:!0,detail:{path:j}});_.dispatchEvent(q)})}getContent(){return}isDirty(){return!1}focus(){}resize(){}dispose(){if(this.disposed)return;this.disposed=!0,this.container.innerHTML=""}}class a7{container;iframe=null;overlay=null;disposed=!1;filePath;fileName;format;xmlData="";fileLoaded=!1;editorReady=!1;loadSent=!1;saveChain=Promise.resolve();onMessageBound;constructor(_,$){this.container=_,this.filePath=$.path||"",this.fileName=this.filePath.split("/").pop()||"diagram.drawio",this.format=WN(this.filePath),this.onMessageBound=this.onMessage.bind(this);let j=document.createElement("div");j.style.cssText="position:relative;width:100%;height:100%;background:#1e1e1e;",this.overlay=document.createElement("div"),this.overlay.style.cssText="position:absolute;inset:0;display:flex;align-items:center;justify-content:center;color:#999;font:14px system-ui,sans-serif;z-index:1;pointer-events:none;",this.overlay.textContent="Loading draw.io editor…",j.appendChild(this.overlay);let Z=`/drawio/index.html?embed=1&proto=json&spin=1&modified=0&noSaveBtn=1&noExitBtn=1&saveAndExit=0&libraries=0&ui=dark&dark=${window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?"1":"0"}`;this.iframe=document.createElement("iframe"),this.iframe.src=Z,this.iframe.style.cssText="width:100%;height:100%;border:none;background:#1e1e1e;position:relative;z-index:0;",this.iframe.addEventListener("load",()=>{let Y=()=>{if(!this.iframe?.contentWindow||this.disposed)return;if(zN(this.iframe.contentWindow))return;setTimeout(Y,250)};Y()}),j.appendChild(this.iframe),_.appendChild(j),window.addEventListener("message",this.onMessageBound),this.loadFile()}async loadFile(){if(!this.filePath){this.xmlData=v$,this.fileLoaded=!0,this.trySendLoad();return}try{let _=await fetch(`/workspace/raw?path=${encodeURIComponent(this.filePath)}`);if(_.ok)if(this.format==="xmlsvg")this.xmlData=await o7(_,"image/svg+xml");else if(this.format==="xmlpng")this.xmlData=await o7(_,"image/png");else this.xmlData=r7(await _.text());else if(_.status===404)this.xmlData=v$;else throw Error(`HTTP ${_.status}`);this.fileLoaded=!0,this.trySendLoad()}catch(_){if(this.overlay)this.overlay.textContent=`Failed to load: ${_ instanceof Error?_.message:String(_)}`}}trySendLoad(){if(this.disposed||this.loadSent||!this.editorReady||!this.fileLoaded||!this.iframe?.contentWindow)return;if(this.loadSent=!0,this.iframe.contentWindow.postMessage(JSON.stringify({action:"load",xml:this.format==="xml"?r7(this.xmlData):this.xmlData,autosave:1,saveAndExit:"0",noSaveBtn:"1",noExitBtn:"1",title:this.fileName}),"*"),this.overlay)this.overlay.style.display="none"}queueSave(_,$){if(!this.filePath)return;this.saveChain=this.saveChain.then(async()=>{let j=await fetch("/drawio/save",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({path:this.filePath,format:_.format||this.format,xml:_.xml,data:_.data,mimeType:_.mimeType,filename:_.filename,base64Encoded:_.base64Encoded})});if(!j.ok)throw Error(`HTTP ${j.status}`);if($&&this.iframe?.contentWindow)this.iframe.contentWindow.postMessage(JSON.stringify({action:"status",message:"Saved",modified:!1}),"*")}).catch((j)=>{if(console.error("[drawio-pane] save failed:",j),this.overlay)this.overlay.style.display="flex",this.overlay.textContent=`Save failed: ${j instanceof Error?j.message:String(j)}`})}onMessage(_){if(this.disposed||_.source!==this.iframe?.contentWindow)return;let $;try{$=typeof _.data==="string"?JSON.parse(_.data):_.data}catch{return}switch($?.event){case"init":this.editorReady=!0,this.trySendLoad();break;case"autosave":if(this.format==="xml"){if(typeof $.xml==="string")this.queueSave({xml:$.xml,format:"xml"},!1)}else if(typeof $.xml==="string")this.xmlData=$.xml;break;case"save":if(this.format==="xml"){if(typeof $.xml==="string")this.queueSave({xml:$.xml,format:"xml"},!0)}else if(typeof $.xml==="string"&&this.iframe?.contentWindow)this.xmlData=$.xml,this.iframe.contentWindow.postMessage(JSON.stringify({action:"export",format:this.format,xml:$.xml,spinKey:"export"}),"*");break;case"export":if(typeof $.data==="string")this.queueSave({data:$.data,format:this.format,xml:typeof $.xml==="string"?$.xml:void 0},!0);break;case"workspace-export":if(typeof $.data==="string")this.queueSave({data:$.data,xml:typeof $.xml==="string"?$.xml:void 0,mimeType:typeof $.mimeType==="string"?$.mimeType:void 0,filename:typeof $.filename==="string"?$.filename:void 0,base64Encoded:Boolean($.base64Encoded),format:this.format},!0);break;case"exit":default:break}}getContent(){return}isDirty(){return!1}focus(){this.iframe?.focus()}resize(){}dispose(){if(this.disposed)return;if(this.disposed=!0,window.removeEventListener("message",this.onMessageBound),this.iframe)this.iframe.src="about:blank",this.iframe=null;this.overlay=null,this.container.innerHTML=""}}var g$={id:"drawio-editor",label:"Draw.io Editor",icon:"git-merge",capabilities:["edit","preview"],placement:"tabs",canHandle(_){if(!LN(_?.path))return!1;return 60},mount(_,$){if($?.mode==="view")return new s7(_,$);return new a7(_,$)}};var HN=/\.mindmap\.ya?ml$/i,b$=String(Date.now());function t7(){let _=document.documentElement?.dataset?.theme;if(_==="dark")return!0;if(_==="light")return!1;try{return!!window.matchMedia?.("(prefers-color-scheme: dark)")?.matches}catch{return!1}}function m$(_){let $=_.split("?")[0];if(document.querySelector(`script[data-src="${$}"]`))return Promise.resolve();let Q=document.querySelector(`script[src="${$}"]`);if(Q)Q.remove();return new Promise((Z,Y)=>{let q=document.createElement("script");q.src=_,q.dataset.src=$,q.onload=()=>Z(),q.onerror=()=>Y(Error(`Failed to load ${_}`)),document.head.appendChild(q)})}function JN(_){if(document.querySelector(`link[href="${_}"]`))return;let $=document.createElement("link");$.rel="stylesheet",$.href=_,document.head.appendChild($)}function ON(_){let $=document.createElementNS("http://www.w3.org/2000/svg","svg");$.id="mindmap-svg",$.setAttribute("width","100%"),$.setAttribute("height","100%"),$.style.cssText="display:block;position:absolute;inset:0;",_.appendChild($);let j=document.createElement("div");j.id="toolbar",j.className="mindmap-toolbar",j.innerHTML=`
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
    `,_.appendChild(Q)}class e7{container;constructor(_,$){this.container=_;let j=$.path||"",Q=j.split("/").pop()||"mindmap",Z=document.createElement("div");Z.style.cssText="width:100%;height:100%;display:flex;flex-direction:column;background:var(--bg-primary);",Z.innerHTML=`
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
            </div>`,_.appendChild(Z),Z.querySelector("#mm-open-tab")?.addEventListener("click",()=>{_.dispatchEvent(new CustomEvent("mindmap:open-tab",{bubbles:!0,detail:{path:j}}))})}getContent(){return}isDirty(){return!1}focus(){}resize(){}dispose(){this.container.innerHTML=""}}class _9{container;filePath;dirty=!1;dirtyCallback=null;disposed=!1;mindmapEl=null;pendingContent=null;lastContent="";themeListener=()=>{window.__mindmapEditor?.setTheme?.(t7())};constructor(_,$){this.container=_,this.filePath=$.path||"",this.init($.content)}async resolveInitialContent(_){if(_!==void 0)return _;if(!this.filePath)return"";try{return(await(await fetch(`/workspace/file?path=${encodeURIComponent(this.filePath)}&max=1000000&mode=edit`)).json())?.text||""}catch{return""}}async init(_){let $=await this.resolveInitialContent(_);if(this.disposed)return;if(this.lastContent=$,JN("/static/css/mindmap.css"),await Promise.all([m$("/static/js/vendor/d3-mindmap.min.js?v="+b$),m$("/static/js/vendor/js-yaml.min.js?v="+b$)]),this.disposed)return;this.mindmapEl=document.createElement("div"),this.mindmapEl.id="mindmap-container",this.mindmapEl.tabIndex=-1,this.mindmapEl.style.cssText="width:100%;height:100%;overflow:hidden;position:relative;outline:none;",this.container.appendChild(this.mindmapEl),ON(this.mindmapEl);let j=t7(),Q=this.filePath.replace(/\/[^/]+$/,"")||"/";try{if(await m$("/static/js/vendor/mindmap-editor.js?v="+b$),this.disposed)return;let Z=window.__mindmapEditor;if(!Z)throw Error("__mindmapEditor not found");if(Z.mount({content:$,isDark:j,onEdit:(Y)=>{this.lastContent=Y,this.dirty=!0,this.dirtyCallback?.(!0),this.saveToWorkspace(Y)},resolveImagePath:(Y)=>{if(Y.startsWith("data:")||Y.startsWith("http"))return Y;return`/workspace/raw?path=${encodeURIComponent(Q+"/"+Y)}`}}),this.pendingContent!==null)Z.update(this.pendingContent),this.lastContent=this.pendingContent,this.pendingContent=null;window.addEventListener("piclaw-theme-change",this.themeListener)}catch(Z){if(console.error("[mindmap] Failed to load mindmap renderer:",Z),this.mindmapEl)this.mindmapEl.innerHTML='<div style="padding:24px;color:var(--text-secondary);">Failed to load mindmap editor.</div>'}}async saveToWorkspace(_){if(!this.filePath)return;try{let $=await fetch("/workspace/file",{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({path:this.filePath,content:_})});if(!$.ok)throw Error(`HTTP ${$.status}`);this.dirty=!1,this.dirtyCallback?.(!1)}catch($){console.error("[mindmap] Save failed:",$)}}getContent(){return}isDirty(){return this.dirty}setContent(_,$){if(_===this.lastContent)return;let j=window.__mindmapEditor;if(j?.update)j.update(_);else this.pendingContent=_;this.lastContent=_,this.dirty=!1,this.dirtyCallback?.(!1)}focus(){this.mindmapEl?.focus()}resize(){window.dispatchEvent(new Event("resize"))}onDirtyChange(_){this.dirtyCallback=_}dispose(){if(this.disposed)return;this.disposed=!0,window.removeEventListener("piclaw-theme-change",this.themeListener),window.__mindmapEditor?.destroy(),this.pendingContent=null,this.container.innerHTML=""}}var h$={id:"mindmap-editor",label:"Mindmap Editor",icon:"mindmap",capabilities:["edit","preview"],placement:"tabs",canHandle(_){let $=_?.path||"";if(!HN.test($))return!1;return 50},mount(_,$){if($?.mode==="view")return new e7(_,$);return new _9(_,$)}};var AN=/\.kanban\.md$/i,DN=String(Date.now());function $9(){let _=document.documentElement?.dataset?.theme;if(_==="dark")return!0;if(_==="light")return!1;try{return!!window.matchMedia?.("(prefers-color-scheme: dark)")?.matches}catch{return!1}}function EN(){let _=window;if(_.preact)return;_.preact={h:J8,render:x4,Component:G5,createContext:F2},_.preactHooks={useState:g,useEffect:v,useCallback:T,useRef:x,useMemo:w0,useReducer:T6,useContext:J2,useLayoutEffect:R5,useImperativeHandle:H2,useErrorBoundary:A2,useDebugValue:O2},_.htm={bind:()=>B}}function kN(_){let $=_.split("?")[0];if(document.querySelector(`script[data-src="${$}"]`))return Promise.resolve();let Q=document.querySelector(`script[src="${$}"]`);if(Q)Q.remove();return new Promise((Z,Y)=>{let q=document.createElement("script");q.src=_,q.dataset.src=$,q.onload=()=>Z(),q.onerror=()=>Y(Error(`Failed to load ${_}`)),document.head.appendChild(q)})}function MN(_){if(document.querySelector(`link[href="${_}"]`))return;let $=document.createElement("link");$.rel="stylesheet",$.href=_,document.head.appendChild($)}class j9{container;constructor(_,$){this.container=_;let j=$.path||"",Q=j.split("/").pop()||"kanban",Z=document.createElement("div");Z.style.cssText="width:100%;height:100%;display:flex;flex-direction:column;background:var(--bg-primary);",Z.innerHTML=`
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
        `,_.appendChild(Z),Z.querySelector("#kb-open-tab")?.addEventListener("click",()=>{_.dispatchEvent(new CustomEvent("kanban:open-tab",{bubbles:!0,detail:{path:j}}))})}getContent(){return}isDirty(){return!1}focus(){}resize(){}dispose(){this.container.innerHTML=""}}class Q9{container;filePath;dirty=!1;dirtyCallback=null;disposed=!1;boardEl=null;pendingContent=null;lastContent="";themeListener=()=>{window.__kanbanEditor?.setTheme?.($9())};constructor(_,$){this.container=_,this.filePath=$.path||"",this.init($.content)}async resolveInitialContent(_){if(_!==void 0)return _;if(!this.filePath)return"";try{return(await(await fetch(`/workspace/file?path=${encodeURIComponent(this.filePath)}&max=1000000&mode=edit`)).json())?.text||""}catch{return""}}async init(_){let $=await this.resolveInitialContent(_);if(this.disposed)return;this.lastContent=$,MN("/static/css/kanban.css"),this.boardEl=document.createElement("div"),this.boardEl.id="kanban-container",this.boardEl.style.cssText="width:100%;height:100%;overflow:auto;position:relative;",this.container.appendChild(this.boardEl);let j=$9();try{if(EN(),await kN("/static/js/vendor/kanban-editor.js?v="+DN),this.disposed)return;let Q=window.__kanbanEditor;if(!Q)throw Error("__kanbanEditor not found");if(Q.mount(this.boardEl,{content:$,isDark:j,onEdit:(Z)=>{this.lastContent=Z,this.dirty=!0,this.dirtyCallback?.(!0),this.saveToWorkspace(Z)}}),this.pendingContent!==null)Q.update(this.pendingContent),this.lastContent=this.pendingContent,this.pendingContent=null;window.addEventListener("piclaw-theme-change",this.themeListener)}catch(Q){if(console.error("[kanban] Failed to load kanban renderer:",Q),this.boardEl)this.boardEl.innerHTML='<div style="padding:24px;color:var(--text-secondary);">Failed to load kanban editor.</div>'}}async saveToWorkspace(_){if(!this.filePath)return;try{let $=await fetch("/workspace/file",{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({path:this.filePath,content:_})});if(!$.ok)throw Error(`HTTP ${$.status}`);this.dirty=!1,this.dirtyCallback?.(!1)}catch($){console.error("[kanban] Save failed:",$)}}getContent(){return}isDirty(){return this.dirty}setContent(_,$){if(_===this.lastContent)return;let j=window.__kanbanEditor;if(j?.update)j.update(_);else this.pendingContent=_;this.lastContent=_,this.dirty=!1,this.dirtyCallback?.(!1)}focus(){this.boardEl?.focus()}resize(){}onDirtyChange(_){this.dirtyCallback=_}dispose(){if(this.disposed)return;this.disposed=!0,window.removeEventListener("piclaw-theme-change",this.themeListener),window.__kanbanEditor?.destroy(),this.pendingContent=null,this.container.innerHTML=""}}var p$={id:"kanban-editor",label:"Kanban Board",icon:"kanban",capabilities:["edit","preview"],placement:"tabs",canHandle(_){let $=_?.path||"";if(!AN.test($))return!1;return 50},mount(_,$){if($?.mode==="view")return new j9(_,$);return new Q9(_,$)}};class Z9{tabs=new Map;activeId=null;mruOrder=[];listeners=new Set;onChange(_){return this.listeners.add(_),()=>this.listeners.delete(_)}notify(){let _=this.getTabs(),$=this.activeId;for(let j of this.listeners)try{j(_,$)}catch(Q){console.warn("[tab-store] Change listener failed:",Q)}}open(_,$){let j=this.tabs.get(_);if(!j)j={id:_,label:$||_.split("/").pop()||_,path:_,dirty:!1,pinned:!1},this.tabs.set(_,j);return this.activate(_),j}activate(_){if(!this.tabs.has(_))return;this.activeId=_,this.mruOrder=[_,...this.mruOrder.filter(($)=>$!==_)],this.notify()}close(_){if(!this.tabs.get(_))return!1;if(this.tabs.delete(_),this.mruOrder=this.mruOrder.filter((j)=>j!==_),this.activeId===_)this.activeId=this.mruOrder[0]||null;return this.notify(),!0}closeOthers(_){for(let[$,j]of this.tabs)if($!==_&&!j.pinned)this.tabs.delete($),this.mruOrder=this.mruOrder.filter((Q)=>Q!==$);if(this.activeId&&!this.tabs.has(this.activeId))this.activeId=_;this.notify()}closeAll(){for(let[_,$]of this.tabs)if(!$.pinned)this.tabs.delete(_),this.mruOrder=this.mruOrder.filter((j)=>j!==_);if(this.activeId&&!this.tabs.has(this.activeId))this.activeId=this.mruOrder[0]||null;this.notify()}setDirty(_,$){let j=this.tabs.get(_);if(!j||j.dirty===$)return;j.dirty=$,this.notify()}togglePin(_){let $=this.tabs.get(_);if(!$)return;$.pinned=!$.pinned,this.notify()}saveViewState(_,$){let j=this.tabs.get(_);if(j)j.viewState=$}getViewState(_){return this.tabs.get(_)?.viewState}rename(_,$,j){let Q=this.tabs.get(_);if(!Q)return;if(this.tabs.delete(_),Q.id=$,Q.path=$,Q.label=j||$.split("/").pop()||$,this.tabs.set($,Q),this.mruOrder=this.mruOrder.map((Z)=>Z===_?$:Z),this.activeId===_)this.activeId=$;this.notify()}getTabs(){return Array.from(this.tabs.values())}getActiveId(){return this.activeId}getActive(){return this.activeId?this.tabs.get(this.activeId)||null:null}get(_){return this.tabs.get(_)}get size(){return this.tabs.size}hasUnsaved(){for(let _ of this.tabs.values())if(_.dirty)return!0;return!1}getDirtyTabs(){return Array.from(this.tabs.values()).filter((_)=>_.dirty)}nextTab(){let _=this.getTabs();if(_.length<=1)return;let $=_.findIndex((Q)=>Q.id===this.activeId),j=_[($+1)%_.length];this.activate(j.id)}prevTab(){let _=this.getTabs();if(_.length<=1)return;let $=_.findIndex((Q)=>Q.id===this.activeId),j=_[($-1+_.length)%_.length];this.activate(j.id)}mruSwitch(){if(this.mruOrder.length>1)this.activate(this.mruOrder[1])}}var o0=new Z9;function Y9({handleSseEvent:_,handleConnectionStatusChange:$,loadPosts:j,onWake:Q,chatJid:Z}){let Y=x(_);Y.current=_;let q=x($);q.current=$;let K=x(j);K.current=j;let N=x(Q);N.current=Q,v(()=>{let G=new M8((V,U)=>Y.current(V,U),(V)=>q.current(V),{chatJid:Z});G.connect();let X=()=>{G.reconnectIfNeeded();let V=typeof document<"u"?document:null;if(!V||V.visibilityState==="visible")N.current?.()};return window.addEventListener("focus",X),document.addEventListener("visibilitychange",X),()=>{window.removeEventListener("focus",X),document.removeEventListener("visibilitychange",X),G.disconnect()}},[Z])}function q9(){let[_,$]=g(!1),[j,Q]=g("default"),Z=x(!1);v(()=>{let N=O5("notificationsEnabled",!1);if(Z.current=N,$(N),typeof Notification<"u")Q(Notification.permission)},[]),v(()=>{Z.current=_},[_]);let Y=T(()=>{if(typeof Notification>"u")return Promise.resolve("denied");try{let N=Notification.requestPermission();if(N&&typeof N.then==="function")return N;return Promise.resolve(N)}catch{return Promise.resolve("default")}},[]),q=T(async()=>{if(typeof window>"u"||typeof Notification>"u")return;if(!window.isSecureContext){alert("Notifications require a secure context (HTTPS or installed app).");return}if(Notification.permission==="denied"){Q("denied"),alert("Browser notifications are blocked. Enable them in your browser settings.");return}if(Notification.permission==="default"){let G=await Y();if(Q(G||"default"),G!=="granted"){Z.current=!1,$(!1),Y1("notificationsEnabled","false");return}}let N=!Z.current;Z.current=N,$(N),Y1("notificationsEnabled",String(N))},[Y]),K=T((N,G)=>{if(!Z.current)return!1;if(typeof Notification>"u")return!1;if(Notification.permission!=="granted")return!1;try{let X=new Notification(N,{body:G});return X.onclick=()=>{try{window.focus()}catch{}},!0}catch{return!1}},[]);return{notificationsEnabled:_,notificationPermission:j,toggleNotifications:q,notify:K}}var _8=(_)=>{let $=new Set;return(_||[]).filter((j)=>{if(!j||$.has(j.id))return!1;return $.add(j.id),!0})};function K9({preserveTimelineScroll:_,preserveTimelineScrollTop:$,chatJid:j=null}){let[Q,Z]=g(null),[Y,q]=g(!1),K=x(!1),N=x(null),G=x(!1),X=x(null),V=x(null),U=x(0);v(()=>{K.current=Y},[Y]),v(()=>{V.current=Q},[Q]),v(()=>{U.current+=1,X.current=null,G.current=!1,K.current=!1,q(!1)},[j]);let L=T(async(O=null)=>{let W=U.current;try{if(O){let A=await P6(O,50,0,j);if(W!==U.current)return;Z(A.posts),q(!1)}else{let A=await l4(10,null,j);if(W!==U.current)return;Z(A.posts),q(A.has_more)}}catch(A){if(W!==U.current)return;console.error("Failed to load posts:",A)}},[j]),J=T(async()=>{let O=U.current;try{let W=await l4(10,null,j);if(O!==U.current)return;Z((A)=>{if(!A||A.length===0)return W.posts;return _8([...W.posts,...A])}),q((A)=>A||W.has_more)}catch(W){if(O!==U.current)return;console.error("Failed to refresh timeline:",W)}},[j]),D=T(async(O={})=>{let W=U.current,A=V.current;if(!A||A.length===0)return;if(G.current)return;let{preserveScroll:E=!0,preserveMode:f="top",allowRepeat:u=!1}=O,c=(I)=>{if(!E){I();return}if(f==="top")$(I);else _(I)},P=A.slice().sort((I,z)=>I.id-z.id)[0]?.id;if(!Number.isFinite(P))return;if(!u&&X.current===P)return;G.current=!0,X.current=P;try{let I=await l4(10,P,j);if(W!==U.current)return;if(I.posts.length>0)c(()=>{Z((z)=>_8([...I.posts,...z||[]])),q(I.has_more)});else q(!1)}catch(I){if(W!==U.current)return;console.error("Failed to load more posts:",I)}finally{if(W===U.current)G.current=!1}},[j,_,$]);return v(()=>{N.current=D},[D]),{posts:Q,setPosts:Z,hasMore:Y,setHasMore:q,hasMoreRef:K,loadPosts:L,refreshTimeline:J,loadMore:D,loadMoreRef:N,loadingMoreRef:G,lastBeforeIdRef:X}}function N9(){let[_,$]=g(null),[j,Q]=g({text:"",totalLines:0}),[Z,Y]=g(""),[q,K]=g({text:"",totalLines:0}),[N,G]=g(null),[X,V]=g(null),[U,L]=g(null),J=x(null),D=x(0),O=x(!1),W=x(""),A=x(""),E=x(null),f=x(null),u=x(null),c=x(null),r=x(!1),P=x(!1);return{agentStatus:_,setAgentStatus:$,agentDraft:j,setAgentDraft:Q,agentPlan:Z,setAgentPlan:Y,agentThought:q,setAgentThought:K,pendingRequest:N,setPendingRequest:G,currentTurnId:X,setCurrentTurnId:V,steerQueuedTurnId:U,setSteerQueuedTurnId:L,lastAgentEventRef:J,lastSilenceNoticeRef:D,isAgentRunningRef:O,draftBufferRef:W,thoughtBufferRef:A,pendingRequestRef:E,stalledPostIdRef:f,currentTurnIdRef:u,steerQueuedTurnIdRef:c,thoughtExpandedRef:r,draftExpandedRef:P}}function G9({appShellRef:_,sidebarWidthRef:$,editorWidthRef:j,dockHeightRef:Q}){let Z=x((X)=>{X.preventDefault();let V=_.current;if(!V)return;let U=X.clientX,L=$.current||280,J=X.currentTarget;J.classList.add("dragging"),V.classList.add("sidebar-resizing"),document.body.style.cursor="col-resize",document.body.style.userSelect="none";let D=U,O=(A)=>{D=A.clientX;let E=Math.min(Math.max(L+(A.clientX-U),160),600);V.style.setProperty("--sidebar-width",`${E}px`),$.current=E},W=()=>{let A=Math.min(Math.max(L+(D-U),160),600);$.current=A,J.classList.remove("dragging"),V.classList.remove("sidebar-resizing"),document.body.style.cursor="",document.body.style.userSelect="",Y1("sidebarWidth",String(Math.round(A))),document.removeEventListener("mousemove",O),document.removeEventListener("mouseup",W)};document.addEventListener("mousemove",O),document.addEventListener("mouseup",W)}).current,Y=x((X)=>{X.preventDefault();let V=_.current;if(!V)return;let U=X.touches[0];if(!U)return;let L=U.clientX,J=$.current||280,D=X.currentTarget;D.classList.add("dragging"),V.classList.add("sidebar-resizing"),document.body.style.userSelect="none";let O=(A)=>{let E=A.touches[0];if(!E)return;A.preventDefault();let f=Math.min(Math.max(J+(E.clientX-L),160),600);V.style.setProperty("--sidebar-width",`${f}px`),$.current=f},W=()=>{D.classList.remove("dragging"),V.classList.remove("sidebar-resizing"),document.body.style.userSelect="",Y1("sidebarWidth",String(Math.round($.current||J))),document.removeEventListener("touchmove",O),document.removeEventListener("touchend",W),document.removeEventListener("touchcancel",W)};document.addEventListener("touchmove",O,{passive:!1}),document.addEventListener("touchend",W),document.addEventListener("touchcancel",W)}).current,q=x((X)=>{X.preventDefault();let V=_.current;if(!V)return;let U=X.clientX,L=j.current||$.current||280,J=X.currentTarget;J.classList.add("dragging"),document.body.style.cursor="col-resize",document.body.style.userSelect="none";let D=U,O=(A)=>{D=A.clientX;let E=Math.min(Math.max(L+(A.clientX-U),200),800);V.style.setProperty("--editor-width",`${E}px`),j.current=E},W=()=>{let A=Math.min(Math.max(L+(D-U),200),800);j.current=A,J.classList.remove("dragging"),document.body.style.cursor="",document.body.style.userSelect="",Y1("editorWidth",String(Math.round(A))),document.removeEventListener("mousemove",O),document.removeEventListener("mouseup",W)};document.addEventListener("mousemove",O),document.addEventListener("mouseup",W)}).current,K=x((X)=>{X.preventDefault();let V=_.current;if(!V)return;let U=X.touches[0];if(!U)return;let L=U.clientX,J=j.current||$.current||280,D=X.currentTarget;D.classList.add("dragging"),document.body.style.userSelect="none";let O=(A)=>{let E=A.touches[0];if(!E)return;A.preventDefault();let f=Math.min(Math.max(J+(E.clientX-L),200),800);V.style.setProperty("--editor-width",`${f}px`),j.current=f},W=()=>{D.classList.remove("dragging"),document.body.style.userSelect="",Y1("editorWidth",String(Math.round(j.current||J))),document.removeEventListener("touchmove",O),document.removeEventListener("touchend",W),document.removeEventListener("touchcancel",W)};document.addEventListener("touchmove",O,{passive:!1}),document.addEventListener("touchend",W),document.addEventListener("touchcancel",W)}).current,N=x((X)=>{X.preventDefault();let V=_.current;if(!V)return;let U=X.clientY,L=Q?.current||200,J=X.currentTarget;J.classList.add("dragging"),document.body.style.cursor="row-resize",document.body.style.userSelect="none";let D=U,O=(A)=>{D=A.clientY;let E=Math.min(Math.max(L-(A.clientY-U),100),window.innerHeight*0.5);if(V.style.setProperty("--dock-height",`${E}px`),Q)Q.current=E;window.dispatchEvent(new CustomEvent("dock-resize"))},W=()=>{let A=Math.min(Math.max(L-(D-U),100),window.innerHeight*0.5);if(Q)Q.current=A;J.classList.remove("dragging"),document.body.style.cursor="",document.body.style.userSelect="",Y1("dockHeight",String(Math.round(A))),window.dispatchEvent(new CustomEvent("dock-resize")),document.removeEventListener("mousemove",O),document.removeEventListener("mouseup",W)};document.addEventListener("mousemove",O),document.addEventListener("mouseup",W)}).current,G=x((X)=>{X.preventDefault();let V=_.current;if(!V)return;let U=X.touches[0];if(!U)return;let L=U.clientY,J=Q?.current||200,D=X.currentTarget;D.classList.add("dragging"),document.body.style.userSelect="none";let O=(A)=>{let E=A.touches[0];if(!E)return;A.preventDefault();let f=Math.min(Math.max(J-(E.clientY-L),100),window.innerHeight*0.5);if(V.style.setProperty("--dock-height",`${f}px`),Q)Q.current=f;window.dispatchEvent(new CustomEvent("dock-resize"))},W=()=>{D.classList.remove("dragging"),document.body.style.userSelect="",Y1("dockHeight",String(Math.round(Q?.current||J))),window.dispatchEvent(new CustomEvent("dock-resize")),document.removeEventListener("touchmove",O),document.removeEventListener("touchend",W),document.removeEventListener("touchcancel",W)};document.addEventListener("touchmove",O,{passive:!1}),document.addEventListener("touchend",W),document.addEventListener("touchcancel",W)}).current;return{handleSplitterMouseDown:Z,handleSplitterTouchStart:Y,handleEditorSplitterMouseDown:q,handleEditorSplitterTouchStart:K,handleDockSplitterMouseDown:N,handleDockSplitterTouchStart:G}}function IN(_,$,j,Q){if(!(_ instanceof Map)||_.size===0||!$||!j)return _;let Z=!1,Y=new Map;for(let[q,K]of _.entries()){let N=q;if(Q==="dir"){if(q===$)N=j,Z=!0;else if(q.startsWith(`${$}/`))N=`${j}${q.slice($.length)}`,Z=!0}else if(q===$)N=j,Z=!0;Y.set(N,K)}return Z?Y:_}function X9({onTabClosed:_}={}){let $=x(_);$.current=_;let[j,Q]=g(()=>o0.getTabs()),[Z,Y]=g(()=>o0.getActiveId()),[q,K]=g(()=>o0.getTabs().length>0);v(()=>{return o0.onChange((P,I)=>{Q(P),Y(I),K(P.length>0)})},[]);let[N,G]=g(()=>new Set),[X,V]=g(()=>new Map),U=T((P)=>{G((I)=>{let z=new Set(I);if(z.has(P))z.delete(P);else z.add(P);return z})},[]),L=T((P)=>{G((I)=>{if(!I.has(P))return I;let z=new Set(I);return z.delete(P),z})},[]),J=T((P)=>{V((I)=>{if(!I.has(P))return I;let z=new Map(I);return z.delete(P),z})},[]),D=T((P,I={})=>{if(!P)return;let z=typeof I?.paneOverrideId==="string"&&I.paneOverrideId.trim()?I.paneOverrideId.trim():null,C={path:P,mode:"edit"};try{if(!(z?c0.get(z):c0.resolve(C))){if(!c0.get("editor")){console.warn(`[openEditor] No pane handler for: ${P}`);return}}}catch(e){console.warn(`[openEditor] paneRegistry.resolve() error for "${P}":`,e)}let b=typeof I?.label==="string"&&I.label.trim()?I.label.trim():void 0;if(o0.open(P,b),z)V((e)=>{if(e.get(P)===z)return e;let h=new Map(e);return h.set(P,z),h})},[]),O=T(()=>{let P=o0.getActiveId();if(P){let I=o0.get(P);if(I?.dirty){if(!window.confirm(`"${I.label}" has unsaved changes. Close anyway?`))return}o0.close(P),L(P),J(P),$.current?.(P)}},[J,L]),W=T((P)=>{let I=o0.get(P);if(I?.dirty){if(!window.confirm(`"${I.label}" has unsaved changes. Close anyway?`))return}o0.close(P),L(P),J(P),$.current?.(P)},[J,L]),A=T((P)=>{o0.activate(P)},[]),E=T((P)=>{let I=o0.getTabs().filter((b)=>b.id!==P&&!b.pinned),z=I.filter((b)=>b.dirty).length;if(z>0){if(!window.confirm(`${z} unsaved tab${z>1?"s":""} will be closed. Continue?`))return}let C=I.map((b)=>b.id);o0.closeOthers(P),C.forEach((b)=>{L(b),J(b),$.current?.(b)})},[J,L]),f=T(()=>{let P=o0.getTabs().filter((C)=>!C.pinned),I=P.filter((C)=>C.dirty).length;if(I>0){if(!window.confirm(`${I} unsaved tab${I>1?"s":""} will be closed. Continue?`))return}let z=P.map((C)=>C.id);o0.closeAll(),z.forEach((C)=>{L(C),J(C),$.current?.(C)})},[J,L]),u=T((P)=>{o0.togglePin(P)},[]),c=T((P)=>{if(!P)return;V((I)=>{if(I.get(P)==="editor")return I;let z=new Map(I);return z.set(P,"editor"),z}),o0.activate(P)},[]),r=T(()=>{let P=o0.getActiveId();if(P)window.dispatchEvent(new CustomEvent("workspace-reveal-path",{detail:{path:P}}))},[]);return v(()=>{let P=(I)=>{let{oldPath:z,newPath:C,type:b}=I.detail||{};if(!z||!C)return;if(b==="dir"){for(let e of o0.getTabs())if(e.path===z||e.path.startsWith(`${z}/`)){let h=`${C}${e.path.slice(z.length)}`;o0.rename(e.id,h)}}else o0.rename(z,C);V((e)=>IN(e,z,C,b))};return window.addEventListener("workspace-file-renamed",P),()=>window.removeEventListener("workspace-file-renamed",P)},[]),v(()=>{let P=(I)=>{if(o0.hasUnsaved())I.preventDefault(),I.returnValue=""};return window.addEventListener("beforeunload",P),()=>window.removeEventListener("beforeunload",P)},[]),{editorOpen:q,tabStripTabs:j,tabStripActiveId:Z,previewTabs:N,tabPaneOverrides:X,openEditor:D,closeEditor:O,handleTabClose:W,handleTabActivate:A,handleTabCloseOthers:E,handleTabCloseAll:f,handleTabTogglePin:u,handleTabTogglePreview:U,handleTabEditSource:c,revealInExplorer:r}}function c$(_,$){try{if(typeof window>"u")return $;let j=window.__PICLAW_SILENCE||{},Q=`__PICLAW_SILENCE_${_.toUpperCase()}_MS`,Z=j[_]??window[Q],Y=Number(Z);return Number.isFinite(Y)?Y:$}catch{return $}}var l$=c$("warning",30000),V9=c$("finalize",120000),n$=c$("refresh",30000),U9=30000;function L9(_){let $={};return(_?.agents||[]).forEach((j)=>{$[j.id]=j}),$}function B9(){if(/iPad|iPhone/.test(navigator.userAgent))return!0;return navigator.platform==="MacIntel"&&navigator.maxTouchPoints>1}function W9(_=30000){let[,$]=g(0);v(()=>{let j=setInterval(()=>$((Q)=>Q+1),_);return()=>clearInterval(j)},[_])}function F9(_,$=160){let j=String(_||"").replace(/\r\n/g,`
`);if(!j)return 0;return j.split(`
`).reduce((Q,Z)=>Q+Math.max(1,Math.ceil(Z.length/$)),0)}async function z9(_){let{panelKey:$,expanded:j,currentTurnIdRef:Q,thoughtExpandedRef:Z,draftExpandedRef:Y,setAgentThoughtVisibility:q,getAgentThought:K,thoughtBufferRef:N,draftBufferRef:G,setAgentThought:X,setAgentDraft:V}=_;if($!=="thought"&&$!=="draft")return;let U=Q.current;if($==="thought"){if(Z.current=j,U)try{await q(U,"thought",j)}catch(L){console.warn("Failed to update thought visibility:",L)}if(!j)return;try{let L=U?await K(U,"thought"):null;if(L?.text)N.current=L.text;X((J)=>({...J||{text:"",totalLines:0},fullText:N.current||J?.fullText||"",totalLines:Number.isFinite(L?.total_lines)?L.total_lines:J?.totalLines||0}))}catch(L){console.warn("Failed to fetch full thought:",L)}return}if(Y.current=j,U)try{await q(U,"draft",j)}catch(L){console.warn("Failed to update draft visibility:",L)}if(!j)return;try{let L=U?await K(U,"draft"):null;if(L?.text)G.current=L.text;V((J)=>({...J||{text:"",totalLines:0},fullText:G.current||J?.fullText||"",totalLines:Number.isFinite(L?.total_lines)?L.total_lines:J?.totalLines||0}))}catch(L){console.warn("Failed to fetch full draft:",L)}}function H9(_,$){if(typeof _!=="string")return{kind:"ignore"};let j=_.trim();if(!j)return{kind:"toast",title:"No file selected",detail:"Use a valid file path from a file pill.",level:"warning"};if(!$.editorOpen)return{kind:"toast",title:"Editor pane is not open",detail:"Open the editor pane to open files from pills.",level:"warning"};if(/^[a-z][a-z0-9+.-]*:/i.test(j))return{kind:"toast",title:"Cannot open external path from file pill",detail:"Use an in-workspace file path.",level:"warning"};try{if(!$.resolvePane({path:j,mode:"edit"}))return{kind:"toast",title:"No editor available",detail:`No editor can open: ${j}`,level:"warning"}}catch{return{kind:"toast",title:"No editor available",detail:`No editor can open: ${j}`,level:"warning"}}return{kind:"open",path:j}}function J9(_){let $=String(_||"").trim();if(!$.startsWith("/btw"))return null;let j=$.slice(4).trim();if(!j)return{type:"help"};if(j==="clear"||j==="close")return{type:"clear"};return{type:"ask",question:j}}function O9(_){return String(_||"").trim()||"web:default"}function A9(_){if(!_)return!1;let $=String(_.answer||"").trim();return _.status!=="running"&&Boolean($)}function D9(_){if(!_)return!1;return _.status!=="running"}function E9(_){let $=String(_?.question||"").trim(),j=String(_?.answer||"").trim();if(!$&&!j)return"";return["BTW side conversation",$?`Question: ${$}`:null,j?`Answer:
${j}`:null].filter(Boolean).join(`

`)}function d$(_){return String(_||"").trim()||"web:default"}function k9({remainingQueueCount:_=0,currentTurnId:$=null,isAgentTurnActive:j=!1}={}){return Number(_||0)<=0&&!$&&!j}function xN(_){if(!_||typeof _!=="object")return null;let $=_.started_at??_.startedAt;if(typeof $!=="string"||!$)return null;let j=Date.parse($);return Number.isFinite(j)?j:null}function y4(_){if(!_||typeof _!=="object")return!1;let $=_.intent_key??_.intentKey;return _.type==="intent"&&$==="compaction"}function m8(_){if(!_||typeof _!=="object")return"";let $=_.title;if(typeof $==="string"&&$.trim())return $.trim();let j=_.status;if(typeof j==="string"&&j.trim())return j.trim();return y4(_)?"Compacting context":"Working..."}function TN(_){let $=Math.max(0,Math.floor(_/1000)),j=$%60,Q=Math.floor($/60)%60,Z=Math.floor($/3600);if(Z>0)return`${Z}:${String(Q).padStart(2,"0")}:${String(j).padStart(2,"0")}`;return`${Q}:${String(j).padStart(2,"0")}`}function h8(_,$=Date.now()){let j=xN(_);if(j===null)return null;return TN(Math.max(0,$-j))}function $8(_){return typeof _==="string"}function M9(_){return typeof _==="string"&&_.trim().length>0}function i$(_){if(!Array.isArray(_))return[];return _.filter(($)=>M9($?.chat_jid)&&M9($?.agent_name))}function I9(_){if(!Array.isArray(_))return[];return _.filter(($)=>$8($?.chat_jid)&&$8($?.agent_name))}function x9(_,$,j){if(!Array.isArray($)||$.length===0)return Array.isArray(_)?_:[];let Q=new Map;if(Array.isArray(_)){for(let q of _)if($8(q?.chat_jid))Q.set(q.chat_jid,q)}let Z=$.map((q)=>{if(!$8(q?.chat_jid))return q;let K=Q.get(q.chat_jid);return K?{...q,...K,is_active:K.is_active??q.is_active}:q}),Y=$8(j)?j:"";return Z.sort((q,K)=>{if(q.chat_jid===Y&&K.chat_jid!==Y)return-1;if(K.chat_jid===Y&&q.chat_jid!==Y)return 1;let N=Boolean(q.archived_at),G=Boolean(K.archived_at);if(N!==G)return N?1:-1;if(Boolean(q.is_active)!==Boolean(K.is_active))return q.is_active?-1:1;return String(q.chat_jid).localeCompare(String(K.chat_jid))}),Z}var CN={hasModel:!1,model:void 0,hasThinkingLevel:!1,thinkingLevel:null,hasSupportsThinking:!1,supportsThinking:!1,hasProviderUsage:!1,providerUsage:null};function T9(_){if(!_||typeof _!=="object")return CN;let $=_.model??_.current;return{hasModel:$!==void 0,model:$,hasThinkingLevel:_.thinking_level!==void 0,thinkingLevel:_.thinking_level??null,hasSupportsThinking:_.supports_thinking!==void 0,supportsThinking:Boolean(_.supports_thinking),hasProviderUsage:_.provider_usage!==void 0,providerUsage:_.provider_usage??null}}function C9(_){let j=(Array.isArray(_)?_:[]).find((Q)=>Q?.id==="default");return{name:j?.name,avatarUrl:j?.avatar_url}}function P9(_,$){if(!_||typeof _!=="object")return null;let j=_.agent_id;if(!j)return null;let Q=String(j),Z=_.agent_name,Y=_.agent_avatar;if(!Z&&Y===void 0)return null;let q=$||{id:Q},K=q.name||null,N=q.avatar_url??q.avatarUrl??q.avatar??null,G=!1,X=!1;if(Z&&Z!==q.name)K=Z,G=!0;if(Y!==void 0){let V=typeof Y==="string"?Y.trim():null,U=typeof N==="string"?N.trim():null,L=V||null;if(L!==(U||null))N=L,X=!0}if(!G&&!X)return null;return{agentId:Q,nameChanged:G,avatarChanged:X,resolvedName:K,resolvedAvatar:N}}function y9(_,$){let j=typeof $?.name==="string"&&$.name.trim()?$.name.trim():"You",Q=typeof $?.avatar_url==="string"?$.avatar_url.trim():null,Z=typeof $?.avatar_background==="string"&&$.avatar_background.trim()?$.avatar_background.trim():null;if(_.name===j&&_.avatar_url===Q&&_.avatar_background===Z)return _;return{name:j,avatar_url:Q,avatar_background:Z}}function S9(_,$){if(!$||typeof $!=="object")return _;let j=$.user_name??$.userName,Q=$.user_avatar??$.userAvatar,Z=$.user_avatar_background??$.userAvatarBackground;if(j===void 0&&Q===void 0&&Z===void 0)return _;let Y=typeof j==="string"&&j.trim()?j.trim():_.name||"You",q=Q===void 0?_.avatar_url:typeof Q==="string"&&Q.trim()?Q.trim():null,K=Z===void 0?_.avatar_background:typeof Z==="string"&&Z.trim()?Z.trim():null;if(_.name===Y&&_.avatar_url===q&&_.avatar_background===K)return _;return{name:Y,avatar_url:q,avatar_background:K}}function PN(_){if(!_?.data?.is_bot_message)return!1;let $=_.data.content;return $==="Queued as a follow-up (one-at-a-time)."||$==="⁣"}function w9(_,$){if(!_||!Array.isArray(_))return _;let j=new Set($||[]),Q=_.filter((Z)=>!j.has(Z?.id)&&!PN(Z));return Q.length===_.length?_:Q}function R9(_,$){let j=$||new Set;return Array.isArray(_)?_.map((Q)=>({...Q})).filter((Q)=>!j.has(Q.row_id)):[]}function u9(_,$){if(!Array.isArray(_)||!Array.isArray($))return!1;return _.length===$.length&&_.every((j,Q)=>j?.row_id===$[Q]?.row_id)}function S4(_,$){let j=Array.isArray(_)&&$!=null?_.filter((Q)=>Q?.row_id!==$):Array.isArray(_)?[..._]:[];return{items:j,remainingQueueCount:j.length}}function f9(_,$){let j=Array.isArray(_)?_:[],Q=$?.row_id,Z=$?.content;if(Q==null||typeof Z!=="string"||!Z.trim())return j;if(j.some((Y)=>Y?.row_id===Q))return j;return[...j,{row_id:Q,content:Z,timestamp:$?.timestamp||null,thread_id:$?.thread_id??null}]}function v9(_){if(!_||typeof _!=="object")return!1;if(_.queued==="followup"||_.queued==="steer")return!0;let $=_.command;return Boolean($&&typeof $==="object"&&($.queued_followup||$.queued_steer))}async function g9(_){let{getAgents:$,setAgents:j,setUserProfile:Q,applyBranding:Z}=_;try{let Y=await $();j(L9(Y));let q=Y?.user||{};Q((N)=>y9(N,q));let K=C9(Y?.agents);Z(K.name,K.avatarUrl)}catch(Y){console.warn("Failed to load agents:",Y)}}function b9(_){let{payload:$,agentsRef:j,setAgents:Q,applyBranding:Z}=_,Y=P9($,$?.agent_id?j.current?.[String($.agent_id)]||{id:String($.agent_id)}:null);if(!Y)return;if(Q((q)=>{let N={...q[Y.agentId]||{id:Y.agentId}};if(Y.nameChanged)N.name=Y.resolvedName;if(Y.avatarChanged)N.avatar_url=Y.resolvedAvatar;return{...q,[Y.agentId]:N}}),Y.agentId==="default")Z(Y.resolvedName,Y.resolvedAvatar,Y.avatarChanged?Date.now():null)}function m9(_){let{payload:$,setUserProfile:j}=_;j((Q)=>S9(Q,$))}function h9(_){let{payload:$,setActiveModel:j,setActiveThinkingLevel:Q,setSupportsThinking:Z,setActiveModelUsage:Y}=_,q=T9($);if(q.hasModel)j(q.model);if(q.hasThinkingLevel)Q(q.thinkingLevel);if(q.hasSupportsThinking)Z(q.supportsThinking);if(q.hasProviderUsage)Y(q.providerUsage)}function p9(_){let{currentChatJid:$,getAgentModels:j,activeChatJidRef:Q,applyModelState:Z}=_,Y=$;j(Y).then((q)=>{if(Q.current!==Y)return;if(q)Z(q)}).catch(()=>{})}function c9(_){let{currentChatJid:$,getActiveChatAgents:j,getChatBranches:Q,activeChatJidRef:Z,setActiveChatAgents:Y}=_,q=$;Promise.all([j().catch(()=>({chats:[]})),Q(null,{includeArchived:!0}).catch(()=>({chats:[]}))]).then(([K,N])=>{if(Z.current!==q)return;let G=i$(K?.chats),X=i$(N?.chats);Y(x9(G,X,q))}).catch(()=>{if(Z.current!==q)return;Y([])})}function l9(_){let{currentRootChatJid:$,getChatBranches:j,setCurrentChatBranches:Q}=_;j($).then((Z)=>{Q(I9(Z?.chats))}).catch(()=>{})}function n9(_){let{response:$,refreshActiveChatAgents:j,refreshCurrentChatBranches:Q,refreshContextUsage:Z,refreshAutoresearchStatus:Y,refreshQueueState:q}=_;if(!$||typeof $!=="object")return;if(j(),Q(),Z(),Y(),v9($))q()}function d9(_={}){return X4(_)&&T8(_)}function yN(_={}){let $=_.window??(typeof window<"u"?window:null),j=Number($?.visualViewport?.height||0);if(Number.isFinite(j)&&j>0)return Math.round(j);let Q=Number($?.innerHeight||0);if(Number.isFinite(Q)&&Q>0)return Math.round(Q);return null}function SN(_={},$={}){if(!d9(_))return null;let j=_.window??(typeof window<"u"?window:null),Q=_.document??(typeof document<"u"?document:null);if(!j||!Q?.documentElement)return null;let Z=yN({window:j});if(Z&&Z>0)Q.documentElement.style.setProperty("--app-height",`${Z}px`);if($.resetScroll===!0){try{if(typeof j.scrollTo==="function")j.scrollTo(0,0)}catch{}try{if(Q.scrollingElement)Q.scrollingElement.scrollTop=0,Q.scrollingElement.scrollLeft=0;if(Q.documentElement)Q.documentElement.scrollTop=0,Q.documentElement.scrollLeft=0;if(Q.body)Q.body.scrollTop=0,Q.body.scrollLeft=0}catch{}}return Z}function i9(_={}){if(!d9(_))return()=>{};let $=_.window??(typeof window<"u"?window:null),j=_.document??(typeof document<"u"?document:null);if(!$||!j)return()=>{};let Q=0,Z=new Set,Y=()=>{if(Q)$.cancelAnimationFrame?.(Q),Q=0;for(let V of Z)$.clearTimeout?.(V);Z.clear()},q=()=>{Q=0,SN({window:$,document:j})},K=()=>{if(Q)$.cancelAnimationFrame?.(Q);Q=$.requestAnimationFrame?.(q)??0},N=()=>{K();for(let V of[80,220,420]){let U=$.setTimeout?.(()=>{Z.delete(U),K()},V);if(U!=null)Z.add(U)}},G=()=>{if(j.visibilityState&&j.visibilityState!=="visible")return;N()},X=$.visualViewport;return N(),$.addEventListener("focus",N),$.addEventListener("pageshow",N),$.addEventListener("resize",N),$.addEventListener("orientationchange",N),j.addEventListener("visibilitychange",G),j.addEventListener("focusin",N,!0),X?.addEventListener?.("resize",N),X?.addEventListener?.("scroll",N),()=>{Y(),$.removeEventListener("focus",N),$.removeEventListener("pageshow",N),$.removeEventListener("resize",N),$.removeEventListener("orientationchange",N),j.removeEventListener("visibilitychange",G),j.removeEventListener("focusin",N,!0),X?.removeEventListener?.("resize",N),X?.removeEventListener?.("scroll",N)}}function wN(_,$){if(typeof window<"u")console.warn(`[app] API export missing: ${_}. Using fallback behavior.`);return async()=>$}function __(_,$,j){let Q=_?.[$];return typeof Q==="function"?Q:wN($,j)}var RN=["(display-mode: standalone)","(display-mode: minimal-ui)","(display-mode: fullscreen)"];function r9(_,$={}){let j=$.window??(typeof window<"u"?window:null),Q=$.navigator??(typeof navigator<"u"?navigator:null);if(!j||typeof _!=="function")return()=>{};let Z=()=>{_(X4({window:j,navigator:Q}))};Z();let q=RN.map((K)=>{try{return j.matchMedia?.(K)??null}catch{return null}}).filter(Boolean).map((K)=>{if(typeof K.addEventListener==="function")return K.addEventListener("change",Z),()=>K.removeEventListener("change",Z);if(typeof K.addListener==="function")return K.addListener(Z),()=>K.removeListener(Z);return()=>{}});return j.addEventListener?.("focus",Z),j.addEventListener?.("pageshow",Z),()=>{for(let K of q)K();j.removeEventListener?.("focus",Z),j.removeEventListener?.("pageshow",Z)}}function o9(_,$={}){let j=$.window??(typeof window<"u"?window:null),Q=$.document??(typeof document<"u"?document:null);if(!j||!Q||typeof _!=="function")return()=>{};let Z=()=>{if(Q.visibilityState&&Q.visibilityState!=="visible")return;_()};return j.addEventListener?.("focus",Z),j.addEventListener?.("pageshow",Z),Q.addEventListener?.("visibilitychange",Z),()=>{j.removeEventListener?.("focus",Z),j.removeEventListener?.("pageshow",Z),Q.removeEventListener?.("visibilitychange",Z)}}function s9(_,$={}){let j=$.document??(typeof document<"u"?document:null);if(!j)return()=>{};let Q=_?.openTab,Z=_?.popOutPane,Y=(N)=>{let G=N?.detail?.path,X=typeof N?.detail?.label==="string"&&N.detail.label.trim()?N.detail.label.trim():void 0;if(G)Q?.(G,X)},q=(N)=>{let G=N?.detail?.path,X=typeof N?.detail?.label==="string"&&N.detail.label.trim()?N.detail.label.trim():void 0;if(G)Z?.(G,X)},K=["office-viewer:open-tab","drawio:open-tab","csv-viewer:open-tab","pdf-viewer:open-tab","image-viewer:open-tab","video-viewer:open-tab","vnc:open-tab"];return K.forEach((N)=>j.addEventListener(N,Y)),j.addEventListener("pane:popout",q),()=>{K.forEach((N)=>j.removeEventListener(N,Y)),j.removeEventListener("pane:popout",q)}}function a9(_,$={}){let j=$.document??(typeof document<"u"?document:null);if(!j)return()=>{};let Q=(Z)=>{if(Z?.ctrlKey&&Z.key==="`")Z.preventDefault?.(),_?.()};return j.addEventListener("keydown",Q),()=>j.removeEventListener("keydown",Q)}function t9(_,$={}){let j=$.document??(typeof document<"u"?document:null);if(!j)return()=>{};let Q=_?.toggleZenMode,Z=_?.exitZenMode,Y=typeof _?.isZenModeActive==="function"?_.isZenModeActive:()=>Boolean(_?.zenMode),q=(K)=>{if(K?.ctrlKey&&K.shiftKey&&(K.key==="Z"||K.key==="z")){K.preventDefault?.(),Q?.();return}if(K?.key==="Escape"&&Y())K.preventDefault?.(),Z?.()};return j.addEventListener("keydown",q),()=>j.removeEventListener("keydown",q)}function e9(_,$){let j=Array.isArray(_)?_:[];return j.find((Q)=>Q?.id===$)||j[0]||null}function _j(_,$){if(!$||!_||typeof _.get!=="function")return null;return _.get($)||null}function $j(_,$,j){return _||$?.label||j||"Pane"}function jj(_,$,j){let Q=Array.isArray(_)?_.length:0,Z=Boolean(j&&$?.has?.(j));return Q>1||Z}function Qj(_,$){let j=typeof _==="string"?_:"";return j===$||j.startsWith(`${$}/`)}function Zj(_,$,j,Q){return _===$&&!j||Q}function Yj(_,$,j,Q,Z){return _||!$&&(j||Q&&Z)}function p8(_){let $=r$(_);return $?`@${$}`:""}function r$(_){return String(_||"").trim().toLowerCase().replace(/[^a-z0-9_-]+/g,"-").replace(/^-+|-+$/g,"").replace(/-{2,}/g,"-")}function c8(_,$=""){let j=String(_||""),Q=r$(j),Z=r$($);if(!j.trim())return{normalized:Q,handle:"",canSubmit:!1,kind:"error",message:"Enter a branch handle."};if(!Q)return{normalized:Q,handle:"",canSubmit:!1,kind:"error",message:"Handle must contain at least one letter or number."};let Y=`@${Q}`;if(Q===Z)return{normalized:Q,handle:Y,canSubmit:!1,kind:"info",message:`Already using ${Y}.`};if(Q!==j.trim())return{normalized:Q,handle:Y,canSubmit:!0,kind:"info",message:`Will save as ${Y}. Letters, numbers, - and _ are allowed; leading @ is optional.`};return{normalized:Q,handle:Y,canSubmit:!0,kind:"success",message:`Saving as ${Y}.`}}function qj(_,$){let j=typeof _?.agent_name==="string"&&_.agent_name.trim()?p8(_.agent_name):String($||"").trim(),Q=typeof _?.chat_jid==="string"&&_.chat_jid.trim()?_.chat_jid.trim():String($||"").trim();return`${j} — ${Q} • current branch`}function uN(_,$={}){let j=[],Q=typeof $.currentChatJid==="string"?$.currentChatJid.trim():"",Z=typeof _?.chat_jid==="string"?_.chat_jid.trim():"";if(Q&&Z===Q)j.push("current");if(_?.archived_at)j.push("archived");else if(_?.is_active)j.push("active");return j}function l8(_,$={}){let j=p8(_?.agent_name)||String(_?.chat_jid||"").trim(),Q=typeof _?.chat_jid==="string"&&_.chat_jid.trim()?_.chat_jid.trim():"unknown-chat",Z=uN(_,$);return Z.length>0?`${j} — ${Q} • ${Z.join(" • ")}`:`${j} — ${Q}`}function Kj(_,$,j){let Q=p8(_),Z=p8($),Y=String(j||"").trim();if(Q&&Z&&Q!==Z)return`Restored archived ${Q} as ${Z} because ${Q} is already in use.`;if(Z)return`Restored ${Z}.`;if(Q)return`Restored ${Q}.`;return`Restored ${Y||"branch"}.`}var fN="piclaw_btw_session",Gj=900,Nj="__piclawRenameBranchFormLock__";function vN(){try{return import.meta.url}catch{return null}}function o$(_){let $=typeof _==="string"?_.trim().toLowerCase():"";return $==="1"||$==="true"||$==="yes"}function n8(_,$,j=""){let Q=_?.get?.($);return Q&&Q.trim()?Q.trim():j}function Xj(_={}){let $=_.importMetaUrl===void 0?vN():_.importMetaUrl,j=_.document===void 0?typeof document<"u"?document:null:_.document,Q=_.origin===void 0?typeof window<"u"?window.location.origin:"http://localhost":_.origin||"http://localhost";try{let Z=$?new URL($).searchParams.get("v"):null;if(Z&&Z.trim())return Z.trim()}catch{}try{let Y=Array.from(j?.querySelectorAll?.('script[type="module"][src]')||[]).find((N)=>String(N?.getAttribute?.("src")||"").includes("/static/dist/app.bundle.js"))?.getAttribute?.("src")||"";if(!Y)return null;let K=new URL(Y,Q).searchParams.get("v");return K&&K.trim()?K.trim():null}catch{return null}}function s$(_={}){let $=_.window===void 0?typeof window<"u"?window:null:_.window;if(!$)return null;let j=$[Nj];if(j&&typeof j==="object")return j;let Q={inFlight:!1,cooldownUntil:0};return $[Nj]=Q,Q}function Vj(_){if(_==="root")return"Branch family";if(_==="all")return"All chats";return"Current branch"}function Uj(_={}){let $=typeof _.readItem==="function"?_.readItem:z_,j=_.storageKey||fN,Q=$(j);if(!Q)return null;try{let Z=JSON.parse(Q);if(!Z||typeof Z!=="object")return null;let Y=typeof Z.question==="string"?Z.question:"",q=typeof Z.answer==="string"?Z.answer:"",K=typeof Z.thinking==="string"?Z.thinking:"",N=typeof Z.error==="string"&&Z.error.trim()?Z.error:null,G=Z.status==="running"?"error":Z.status==="success"||Z.status==="error"?Z.status:"success";return{question:Y,answer:q,thinking:K,error:G==="error"?N||"BTW stream interrupted. You can retry.":N,model:null,status:G}}catch{return null}}function Lj(_,$={}){let j=$.defaultChatJid||"web:default",Q=n8(_,"chat_jid",j),Z=o$(_?.get?.("chat_only")||_?.get?.("chat-only")),Y=o$(_?.get?.("pane_popout")),q=n8(_,"pane_path"),K=n8(_,"pane_label"),N=o$(_?.get?.("branch_loader")),G=n8(_,"branch_source_chat_jid",Q);return{currentChatJid:Q,chatOnlyMode:Z,panePopoutMode:Y,panePopoutPath:q,panePopoutLabel:K,branchLoaderMode:N,branchLoaderSourceChatJid:G}}function Bj(_){let{serverVersion:$,currentAppAssetVersion:j,staleUiVersionRef:Q,staleUiReloadScheduledRef:Z,tabStoreHasUnsaved:Y,isAgentRunningRef:q,pendingRequestRef:K,showIntentToast:N}=_,G=typeof $==="string"&&$.trim()?$.trim():null;if(!G||!j||G===j)return!1;if(Q.current===G)return!0;Q.current=G;let X=typeof document<"u"?String(document.querySelector(".compose-box textarea")?.value||"").trim():"";if(!Y()&&!X&&!q.current&&!K.current&&!Z.current)return Z.current=!0,N("Updating UI…","Reloading to apply the latest interface after restart.","info",2500),window.setTimeout(()=>{try{window.location.reload()}catch{Z.current=!1}},350),!0;return N("New UI available","Reload this page to apply the latest interface update.","warning",8000),!0}function a$(_){let{currentHashtag:$,searchQuery:j,searchOpen:Q}=_||{};return!$&&!j&&!Q}function Wj(_){let{status:$,setConnectionStatus:j,setAgentStatus:Q,setAgentDraft:Z,setAgentPlan:Y,setAgentThought:q,setPendingRequest:K,pendingRequestRef:N,clearAgentRunState:G,hasConnectedOnceRef:X,viewStateRef:V,refreshTimeline:U,refreshAgentStatus:L,refreshQueueState:J,refreshContextUsage:D}=_;if(j($),$!=="connected"){Q(null),Z({text:"",totalLines:0}),Y(""),q({text:"",totalLines:0}),K(null),N.current=null,G();return}if(!X.current){if(X.current=!0,a$(V.current))U();L(),J(),D();return}if(a$(V.current))U();L(),J(),D()}function Fj(_){let{viewStateRef:$,isAgentActive:j,refreshTimeline:Q,refreshQueueState:Z,refreshAgentStatus:Y,refreshContextUsage:q,refreshAutoresearchStatus:K}=_,N=a$($.current);if(j){if(N)Q();Z(),Y(),q(),K();return}if(N)Q();Y(),q(),K()}function zj(_){let{hasWindow:$=typeof window<"u",currentBranchRecord:j,renameBranchInFlight:Q,renameBranchLockUntil:Z,getFormLock:Y,setRenameBranchNameDraft:q,setIsRenameBranchFormOpen:K,now:N=Date.now()}=_;if(!$||!j?.chat_jid)return!1;let G=Y?.()||null;if(!G)return!1;if(Q||N<Number(Z||0)||G.inFlight||N<Number(G.cooldownUntil||0))return!1;return q?.(j.agent_name||""),K?.(!0),!0}function Hj(_){let{setIsRenameBranchFormOpen:$,setRenameBranchNameDraft:j}=_;$?.(!1),j?.("")}async function Jj(_){let{hasWindow:$=typeof window<"u",currentBranchRecord:j,nextName:Q,openRenameForm:Z,renameBranchInFlightRef:Y,renameBranchLockUntilRef:q,getFormLock:K,setIsRenamingBranch:N,renameChatBranch:G,refreshActiveChatAgents:X,refreshCurrentChatBranches:V,showIntentToast:U,closeRenameForm:L,now:J=()=>Date.now()}=_;if(!$||!j?.chat_jid)return!1;if(typeof Q!=="string")return Z?.(),!1;let D=J(),O=K?.()||null;if(!O)return!1;if(Y.current||D<Number(q.current||0)||O.inFlight||D<Number(O.cooldownUntil||0))return!1;Y.current=!0,O.inFlight=!0,N?.(!0);try{let W=j.agent_name||"",A=c8(Q,W);if(!A.canSubmit)return U?.("Could not rename branch",A.message||"Enter a valid branch handle.","warning",4000),!1;let E=A.normalized||W,f=await G(j.chat_jid,{agentName:E});await Promise.allSettled([X?.(),V?.()]);let u=f?.branch?.agent_name||E||W;return U?.("Branch renamed",`@${u}`,"info",3500),L?.(),!0}catch(W){let A=W instanceof Error?W.message:String(W||"Could not rename branch."),E=/already in use/i.test(A||"")?`${A} Switch to or restore that existing session from the session manager.`:A;return U?.("Could not rename branch",E||"Could not rename branch.","warning",5000),!1}finally{Y.current=!1,N?.(!1);let W=J()+Gj;q.current=W;let A=K?.()||null;if(A)A.inFlight=!1,A.cooldownUntil=W}}async function Oj(_){let{hasWindow:$=typeof window<"u",targetChatJid:j=null,currentChatJid:Q,currentBranchRecord:Z,currentChatBranches:Y=[],activeChatAgents:q=[],pruneChatBranch:K,refreshActiveChatAgents:N,refreshCurrentChatBranches:G,showIntentToast:X,baseHref:V,chatOnlyMode:U,navigate:L,confirm:J=(c)=>window.confirm(c)}=_;if(!$)return!1;let D=typeof j==="string"&&j.trim()?j.trim():"",O=typeof Q==="string"&&Q.trim()?Q.trim():"",W=D||Z?.chat_jid||O;if(!W)return X?.("Could not prune branch","No active session is selected yet.","warning",4000),!1;let A=(Z?.chat_jid===W?Z:null)||Y.find((c)=>c?.chat_jid===W)||q.find((c)=>c?.chat_jid===W)||null;if(A?.chat_jid===(A?.root_chat_jid||A?.chat_jid))return X?.("Cannot prune branch","The root chat branch cannot be pruned.","warning",4000),!1;let f=`@${A?.agent_name||W}${A?.chat_jid?` — ${A.chat_jid}`:""}`;if(!J(`Prune ${f}?

This archives the branch agent and removes it from the branch picker. Chat history is preserved.`))return!1;try{await K(W),await Promise.allSettled([N?.(),G?.()]);let c=A?.root_chat_jid||"web:default";X?.("Branch pruned",`${f} has been archived.`,"info",3000);let r=V4(V,c,{chatOnly:U});return L?.(r),!0}catch(c){let r=c instanceof Error?c.message:String(c||"Could not prune branch.");return X?.("Could not prune branch",r||"Could not prune branch.","warning",5000),!1}}async function Aj(_){let{targetChatJid:$,restoreChatBranch:j,currentChatBranches:Q=[],refreshActiveChatAgents:Z,refreshCurrentChatBranches:Y,showIntentToast:q,baseHref:K,chatOnlyMode:N,navigate:G}=_,X=typeof $==="string"?$.trim():"";if(!X||typeof j!=="function")return!1;try{let V=Q.find((W)=>W?.chat_jid===X)||null,U=await j(X);await Promise.allSettled([Z?.(),Y?.()]);let L=U?.branch,J=typeof L?.chat_jid==="string"&&L.chat_jid.trim()?L.chat_jid.trim():X,D=Kj(V?.agent_name,L?.agent_name,J);q?.("Branch restored",D,"info",4200);let O=V4(K,J,{chatOnly:N});return G?.(O),!0}catch(V){let U=V instanceof Error?V.message:String(V||"Could not restore branch.");return q?.("Could not restore branch",U||"Could not restore branch.","warning",5000),!1}}async function Dj(_){let{branchLoaderSourceChatJid:$,forkChatBranch:j,setBranchLoaderState:Q,navigate:Z,baseHref:Y,isCancelled:q=()=>!1}=_;try{Q?.({status:"running",message:"Preparing a new chat branch…"});let K=await j($);if(q())return!1;let N=K?.branch,G=typeof N?.chat_jid==="string"&&N.chat_jid.trim()?N.chat_jid.trim():null;if(!G)throw Error("Branch fork did not return a chat id.");let X=V4(Y,G,{chatOnly:!0});return Z?.(X,{replace:!0}),!0}catch(K){if(q())return!1;return Q?.({status:"error",message:m5(K)}),!1}}async function Ej(_){let{currentChatJid:$,chatOnlyMode:j,forkChatBranch:Q,refreshActiveChatAgents:Z,refreshCurrentChatBranches:Y,showIntentToast:q,navigate:K,baseHref:N}=_;try{let X=(await Q($))?.branch,V=typeof X?.chat_jid==="string"&&X.chat_jid.trim()?X.chat_jid.trim():null;if(!V)throw Error("Branch fork did not return a chat id.");await Promise.allSettled([Z?.(),Y?.()]);let U=X?.agent_name?`@${X.agent_name}`:V;q?.("New branch created",`Switched to ${U}.`,"info",2500);let L=V4(N,V,{chatOnly:j});return K?.(L),!0}catch(G){return q?.("Could not create branch",m5(G),"warning",5000),!1}}async function kj(_){let{hasWindow:$=typeof window<"u",isWebAppMode:j=!1,path:Q,label:Z,showIntentToast:Y,resolveSourceTransfer:q,closeSourcePaneIfTransferred:K,currentChatJid:N,baseHref:G}=_;if(!$||j)return!1;let X=typeof Q==="string"&&Q.trim()?Q.trim():"";if(!X)return!1;let V=S2(X);if(!V)return Y?.("Could not open pane window","Opening pane windows is unavailable in standalone webapp mode.","warning",5000),!1;let U=j$(V);if(!U)return Y?.("Could not open pane window","The browser blocked opening a new tab or window.","warning",5000),!1;Q$(U,{title:typeof Z==="string"&&Z.trim()?`Opening ${Z}…`:"Opening pane…",message:"Preparing a standalone pane window. This should only take a moment."});try{let L=await q?.(X),J=y2(G,X,{label:typeof Z==="string"&&Z.trim()?Z.trim():void 0,chatJid:N,params:L});return Z$(U,J),K?.(X),!0}catch(L){Y$(U);let J=L instanceof Error?L.message:"Could not transfer pane state to the new window.";return Y?.("Could not open pane window",J,"warning",5000),!1}}async function Mj(_){let{hasWindow:$=typeof window<"u",isWebAppMode:j=!1,currentChatJid:Q,currentRootChatJid:Z,forkChatBranch:Y,getActiveChatAgents:q,getChatBranches:K,setActiveChatAgents:N,setCurrentChatBranches:G,showIntentToast:X,baseHref:V}=_;if(!$||j)return!1;let U=C2(Q);if(!U)return X?.("Could not open branch window","Opening branch windows is unavailable in standalone webapp mode.","warning",5000),!1;if(U.mode==="tab"){let J=P2(V,Q,{chatOnly:!0});if(!window.open(J,U.target))return X?.("Could not open branch window","The browser blocked opening a new tab or window.","warning",5000),!1;return!0}let L=j$(U);if(!L)return X?.("Could not open branch window","The browser blocked opening a new tab or window.","warning",5000),!1;Q$(L,{title:"Opening branch…",message:"Preparing a new chat branch. This should only take a moment."});try{let D=(await Y(Q))?.branch,O=typeof D?.chat_jid==="string"&&D.chat_jid.trim()?D.chat_jid.trim():null;if(!O)throw Error("Branch fork did not return a chat id.");try{let A=await q?.();N?.(Array.isArray(A?.chats)?A.chats:[])}catch{}try{let A=await K?.(Z);G?.(Array.isArray(A?.chats)?A.chats:[])}catch{}let W=V4(V,O,{chatOnly:!0});return Z$(L,W),!0}catch(J){return Y$(L),X?.("Could not open branch window",m5(J),"error",5000),!1}}function d8(_){return _?{..._}:{text:"",totalLines:0}}function Ij(_){return Array.isArray(_)?_.map(($)=>({...$})):[]}function gN(_){return{inFlight:Boolean(_?.inFlight),lastAttemptAt:Number(_?.lastAttemptAt||0),turnId:typeof _?.turnId==="string"?_.turnId:null}}function bN(){return{agentStatus:null,agentDraft:{text:"",totalLines:0},agentPlan:"",agentThought:{text:"",totalLines:0},pendingRequest:null,currentTurnId:null,steerQueuedTurnId:null,isAgentTurnActive:!1,followupQueueItems:[],activeModel:null,activeThinkingLevel:null,supportsThinking:!1,activeModelUsage:null,contextUsage:null,isAgentRunning:!1,wasAgentActive:!1,draftBuffer:"",thoughtBuffer:"",lastAgentEvent:null,lastSilenceNotice:0,lastAgentResponse:null,currentTurnIdRef:null,steerQueuedTurnIdRef:null,thoughtExpanded:!1,draftExpanded:!1,agentStatusRef:null,silentRecovery:{inFlight:!1,lastAttemptAt:0,turnId:null}}}function xj(_){return{agentStatus:_.agentStatus,agentDraft:d8(_.agentDraft),agentPlan:_.agentPlan||"",agentThought:d8(_.agentThought),pendingRequest:_.pendingRequest,currentTurnId:_.currentTurnId||null,steerQueuedTurnId:_.steerQueuedTurnId||null,isAgentTurnActive:Boolean(_.isAgentTurnActive),followupQueueItems:Ij(_.followupQueueItems),activeModel:_.activeModel,activeThinkingLevel:_.activeThinkingLevel,supportsThinking:Boolean(_.supportsThinking),activeModelUsage:_.activeModelUsage,contextUsage:_.contextUsage,isAgentRunning:Boolean(_.isAgentRunning),wasAgentActive:Boolean(_.wasAgentActive),draftBuffer:_.draftBuffer||"",thoughtBuffer:_.thoughtBuffer||"",lastAgentEvent:_.lastAgentEvent||null,lastSilenceNotice:Number(_.lastSilenceNotice||0),lastAgentResponse:_.lastAgentResponse||null,currentTurnIdRef:_.currentTurnIdRef||null,steerQueuedTurnIdRef:_.steerQueuedTurnIdRef||null,thoughtExpanded:Boolean(_.thoughtExpanded),draftExpanded:Boolean(_.draftExpanded),agentStatusRef:_.agentStatusRef||null,silentRecovery:gN(_.silentRecovery)}}function Tj(_){let $=_.snapshot||bN(),{refs:j,setters:Q}=_;return _.clearLastActivityTimer?.(),j.isAgentRunningRef.current=Boolean($.isAgentRunning),j.wasAgentActiveRef.current=Boolean($.wasAgentActive),Q.setIsAgentTurnActive(Boolean($.isAgentTurnActive)),j.lastAgentEventRef.current=$.lastAgentEvent||null,j.lastSilenceNoticeRef.current=Number($.lastSilenceNotice||0),j.draftBufferRef.current=$.draftBuffer||"",j.thoughtBufferRef.current=$.thoughtBuffer||"",j.pendingRequestRef.current=$.pendingRequest||null,j.lastAgentResponseRef.current=$.lastAgentResponse||null,j.currentTurnIdRef.current=$.currentTurnIdRef||null,j.steerQueuedTurnIdRef.current=$.steerQueuedTurnIdRef||null,j.agentStatusRef.current=$.agentStatusRef||null,j.silentRecoveryRef.current=$.silentRecovery||{inFlight:!1,lastAttemptAt:0,turnId:null},j.thoughtExpandedRef.current=Boolean($.thoughtExpanded),j.draftExpandedRef.current=Boolean($.draftExpanded),Q.setAgentStatus($.agentStatus||null),Q.setAgentDraft(d8($.agentDraft)),Q.setAgentPlan($.agentPlan||""),Q.setAgentThought(d8($.agentThought)),Q.setPendingRequest($.pendingRequest||null),Q.setCurrentTurnId($.currentTurnId||null),Q.setSteerQueuedTurnId($.steerQueuedTurnId||null),Q.setFollowupQueueItems(Ij($.followupQueueItems)),Q.setActiveModel($.activeModel||null),Q.setActiveThinkingLevel($.activeThinkingLevel||null),Q.setSupportsThinking(Boolean($.supportsThinking)),Q.setActiveModelUsage($.activeModelUsage??null),Q.setContextUsage($.contextUsage??null),$}function t$(_){if(!Array.isArray(_?.content))return null;return _.content.find((j)=>j?.type==="status_panel"&&j?.panel)?.panel||null}function Cj(_,$){let j=new Map(_),Q=t$($);if(typeof $?.key==="string"&&$.key&&Q)j.set($.key,Q);else j.delete("autoresearch");return j}function Pj(_,$){let j=typeof $?.key==="string"?$.key:"";if(!j)return _;let Q=new Map(_),Z=t$($);if($?.options?.remove||!Z)Q.delete(j);else Q.set(j,Z);return Q}function yj(_){if(_?.options?.remove)return!0;return t$(_)?.state!=="running"}function e$(_,$){return`${_}:${$}`}function Sj(_,$,j){let Q=e$($,j);if(_.has(Q))return _;let Z=new Set(_);return Z.add(Q),Z}function wj(_,$){if(!_.has($))return _;let j=new Set(_);return j.delete($),j}function i8(_,$){if(_.size===0)return _;let j=`${$}:`,Q=new Set(Array.from(_).filter((Z)=>!String(Z).startsWith(j)));return Q.size===_.size?_:Q}async function Rj(_){let $=typeof _.action?.action_type==="string"?_.action.action_type:"",j=typeof _.action?.key==="string"?_.action.key:"";if($==="autoresearch.stop")return await _.stopAutoresearch(_.currentChatJid,{generateReport:!0}),{refreshAutoresearchStatus:!0};if($==="autoresearch.dismiss")return await _.dismissAutoresearch(_.currentChatJid),{refreshAutoresearchStatus:!0};if($==="autoresearch.copy_tmux"){let Q=typeof _.panel?.tmux_command==="string"?_.panel.tmux_command.trim():"";if(!Q)throw Error("No tmux command available.");return await _.writeClipboard(Q),{refreshAutoresearchStatus:!1,toast:{title:"Copied",detail:"tmux command copied to clipboard.",kind:"success"}}}throw Error(`Unsupported panel action: ${$||j}`)}function mN(_){let $=_?.artifact||{},j=$.kind||_?.kind||null;if(j!=="html"&&j!=="svg")return null;if(j==="html"){let Z=typeof $.html==="string"?$.html:typeof _?.html==="string"?_.html:"";return Z?{kind:j,html:Z}:null}let Q=typeof $.svg==="string"?$.svg:typeof _?.svg==="string"?_.svg:"";return Q?{kind:j,svg:Q}:null}function hN(_){let $=_?.artifact&&typeof _.artifact==="object"?_.artifact:{},j=typeof $.svg==="string"?$.svg:typeof _?.svg==="string"?_.svg:"",Q=typeof $.html==="string"?$.html:typeof _?.html==="string"?_.html:typeof _?.w==="string"?_.w:typeof _?.content==="string"?_.content:"",Y=($.kind||_?.kind||null)==="svg"||j?"svg":"html";if(Y==="svg")return j?{kind:Y,svg:j}:{kind:Y};return Q?{kind:Y,html:Q}:{kind:Y}}function w4(_){return typeof _==="number"&&Number.isFinite(_)?_:null}function y0(_){return typeof _==="string"&&_.trim()?_.trim():null}function fj(_,$=!1){let Q=(Array.isArray(_)?_:$?["interactive"]:[]).filter((Z)=>typeof Z==="string").map((Z)=>Z.trim().toLowerCase()).filter(Boolean);return Array.from(new Set(Q))}var vj="__PICLAW_WIDGET_HOST__:";function uj(_){return JSON.stringify(_).replace(/</g,"\\u003c").replace(/>/g,"\\u003e").replace(/&/g,"\\u0026").replace(/\u2028/g,"\\u2028").replace(/\u2029/g,"\\u2029")}function _3(_,$){if(!_||_.type!=="generated_widget")return null;let j=mN(_);if(!j)return null;return{title:_.title||_.name||"Generated widget",subtitle:typeof _.subtitle==="string"?_.subtitle:"",description:_.description||_.subtitle||"",originPostId:Number.isFinite($?.id)?$.id:null,originChatJid:typeof $?.chat_jid==="string"?$.chat_jid:null,widgetId:_.widget_id||_.id||null,artifact:j,capabilities:fj(_.capabilities,_.interactive===!0),source:"timeline",status:"final"}}function gj(_){if(!_||typeof _!=="object")return null;let $=hN(_),j=y0(_?.widget_id)||y0(_?.widgetId)||y0(_?.tool_call_id)||y0(_?.toolCallId),Q=y0(_?.tool_call_id)||y0(_?.toolCallId),Z=y0(_?.turn_id)||y0(_?.turnId),Y=y0(_?.title)||y0(_?.name)||"Generated widget",q=y0(_?.subtitle)||"",K=y0(_?.description)||q,N=y0(_?.status),G=N==="loading"||N==="streaming"||N==="final"||N==="error"?N:"streaming";return{title:Y,subtitle:q,description:K,originPostId:w4(_?.origin_post_id)??w4(_?.originPostId),originChatJid:y0(_?.origin_chat_jid)||y0(_?.originChatJid)||y0(_?.chat_jid)||null,widgetId:j,artifact:$,capabilities:fj(_?.capabilities,!0),source:"live",status:G,turnId:Z,toolCallId:Q,width:w4(_?.width),height:w4(_?.height),error:y0(_?.error)}}function bj(_){return _3(_,null)!==null}function J_(_){let $=y0(_?.toolCallId)||y0(_?.tool_call_id);if($)return $;let j=y0(_?.widgetId)||y0(_?.widget_id);if(j)return j;let Q=w4(_?.originPostId)??w4(_?.origin_post_id);if(Q!==null)return`post:${Q}`;return null}function mj(_){let j=(_?.artifact||{}).kind||_?.kind||null,Z=(Array.isArray(_?.capabilities)?_.capabilities:[]).some((Y)=>typeof Y==="string"&&Y.trim().toLowerCase()==="interactive");return j==="html"&&(_?.source==="live"||Z)}function hj(_){return mj(_)?"allow-downloads allow-scripts":"allow-downloads"}function r8(_){return{title:y0(_?.title)||"Generated widget",widgetId:y0(_?.widgetId)||y0(_?.widget_id),toolCallId:y0(_?.toolCallId)||y0(_?.tool_call_id),turnId:y0(_?.turnId)||y0(_?.turn_id),capabilities:Array.isArray(_?.capabilities)?_.capabilities:[],source:_?.source==="live"?"live":"timeline",status:y0(_?.status)||"final"}}function o8(_){return{...r8(_),subtitle:y0(_?.subtitle)||"",description:y0(_?.description)||"",error:y0(_?.error)||null,width:w4(_?.width),height:w4(_?.height),runtimeState:_?.runtimeState&&typeof _.runtimeState==="object"?_.runtimeState:null}}function s8(_){return`${vj}${JSON.stringify(o8(_))}`}function pj(_){if(typeof _==="string"&&_.trim())return _.trim();if(!_||typeof _!=="object")return null;let $=y0(_.text)||y0(_.content)||y0(_.message)||y0(_.prompt)||y0(_.value);if($)return $;let j=_.data;if(typeof j==="string"&&j.trim())return j.trim();if(j&&typeof j==="object"){let Q=y0(j.text)||y0(j.content)||y0(j.message)||y0(j.prompt)||y0(j.value);if(Q)return Q}return null}function cj(_){if(!_||typeof _!=="object")return!1;return _.close===!0||_.dismiss===!0||_.closeAfterSubmit===!0}function lj(_){let $=y0(_?.status);if($==="loading"||$==="streaming")return"Widget is loading…";if($==="error")return y0(_?.error)||"Widget failed to load.";return"Widget artifact is missing or unsupported."}function pN(_){let $=r8(_);return`<script>
(function () {
  const meta = ${uj($)};
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

  const windowNamePrefix = ${uj(vj)};
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
</script>`}function nj(_){let $=_?.artifact||{},j=$.kind||_?.kind||null,Q=typeof $.html==="string"?$.html:typeof _?.html==="string"?_.html:"",Z=typeof $.svg==="string"?$.svg:typeof _?.svg==="string"?_.svg:"",Y=typeof _?.title==="string"&&_.title.trim()?_.title.trim():"Generated widget",q=j==="svg"?Z:Q;if(!q)return"";let K=mj(_),N=["default-src 'none'","img-src data: blob: https: http:","style-src 'unsafe-inline'","font-src data: https: http:","media-src data: blob: https: http:","connect-src 'none'","frame-src 'none'",K?"script-src 'unsafe-inline'":"script-src 'none'","object-src 'none'","base-uri 'none'","form-action 'none'"].join("; "),G=j==="svg"?`<div class="widget-svg-shell">${q}</div>`:q,X=K?pN(_):"";return`<!doctype html>
<html>
<head>
<meta charset="utf-8" />
<meta http-equiv="Content-Security-Policy" content="${N}" />
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
</html>`}function cN(_,$){let j=J_(_);return Boolean(_&&j===$)}function E5(_,$,j){if(!cN(_,$))return _;return{..._,runtimeState:{..._?.runtimeState&&typeof _.runtimeState==="object"?_.runtimeState:{},...j}}}function dj(_,$){return{..._,openedAt:$}}function ij(_){let $=J_(_);return{nextWidget:null,dismissedSessionKey:_?.source==="live"&&$?$:null}}function rj(_,$,j){let Q=gj({...$,...$&&$.status?{}:{status:j.fallbackStatus||"streaming"}});if(!Q)return _;let Z=J_(Q);if(Z&&j.dismissedSessionKeys?.has(Z))return _;let Y=J_(_),q=Boolean(Z&&Y&&Z===Y),K={...q&&_?.artifact?_.artifact:{},...Q.artifact||{}};return{...q&&_?_:{},...Q,artifact:K,source:"live",originChatJid:Q.originChatJid||j.currentChatJid,openedAt:q&&_?.openedAt?_.openedAt:j.updatedAt,liveUpdatedAt:j.updatedAt}}function oj(_,$){if(!_||_?.source!=="live")return _||null;let j=J_($),Q=J_(_);if(j&&Q&&j!==Q)return _;return null}function sj(_,$,j){return E5(_,$,{lastEventKind:j.kind,lastEventPayload:j.payload||null,lastSubmitAt:j.submittedAt,lastHostUpdate:{type:"submit_pending",submittedAt:j.submittedAt,preview:j.submissionText||null}})}function $3(_,$,j){if(j.errorMessage)return E5(_,$,{lastHostUpdate:{type:"submit_failed",submittedAt:j.submittedAt,preview:j.submissionText,error:j.errorMessage}});return E5(_,$,{lastHostUpdate:{type:j.queued==="followup"?"submit_queued":"submit_sent",submittedAt:j.submittedAt,preview:j.submissionText,queued:j.queued||null}})}function aj(_,$,j){return E5(_,$,{lastEventKind:j.kind,lastEventPayload:j.payload||null,...j.kind==="widget.ready"?{readyAt:j.eventAt,lastHostUpdate:{type:"ready_ack",at:j.eventAt}}:{},...j.kind==="widget.request_refresh"?{lastRefreshRequestAt:j.eventAt,refreshCount:j.nextRefreshCount,lastHostUpdate:{type:j.shouldBuildDashboard?"refresh_building":"refresh_ack",at:j.eventAt,count:j.nextRefreshCount,echo:j.payload||null}}:{}})}function tj(_,$,j){return E5(_,$,{dashboard:j.dashboard,lastHostUpdate:{type:"refresh_dashboard",at:j.at,count:j.count,echo:j.echo||null}})}function ej(_,$,j){return E5(_,$,{lastHostUpdate:{type:"refresh_failed",at:j.at,count:j.count,error:j.errorMessage}})}function k5(_,$){let j=$?.row_id;if(j==null||typeof j!=="string"&&typeof j!=="number")return null;let Q=S4(_,j);return{rowId:j,items:Q.items,remainingQueueCount:Q.remainingQueueCount}}function j3(_){if(_==="steer")return{title:"Failed to steer message",detail:"The queued message could not be sent as steering."};return{title:"Failed to remove message",detail:"The queued message could not be removed."}}function R4(_){return _.status==="fulfilled"?_.value:null}function a8(_){return Math.max(0,Math.min(100,_))}function _Q(_){let $=Array.isArray(_.timelinePayload?.posts)?_.timelinePayload.posts:Array.isArray(_.rawPosts)?_.rawPosts:[],j=$.length?$[$.length-1]:null,Q=$.filter((O)=>O?.data?.is_bot_message).length,Z=$.filter((O)=>!O?.data?.is_bot_message).length,Y=Number(_.queuePayload?.count??_.followupQueueItems?.length??0)||0,q=Array.isArray(_.activeChatsPayload?.chats)?_.activeChatsPayload.chats.length:Array.isArray(_.activeChatAgents)?_.activeChatAgents.length:0,K=Array.isArray(_.branchesPayload?.chats)?_.branchesPayload.chats.length:Array.isArray(_.currentChatBranches)?_.currentChatBranches.length:0,N=Number(_.contextPayload?.percent??_.contextUsage?.percent??0)||0,G=Number(_.contextPayload?.tokens??_.contextUsage?.tokens??0)||0,X=Number(_.contextPayload?.contextWindow??_.contextUsage?.contextWindow??0)||0,V=_.modelsPayload?.current??_.activeModel??null,U=_.modelsPayload?.thinking_level??_.activeThinkingLevel??null,L=_.modelsPayload?.supports_thinking??_.supportsThinking,J=_.statusPayload?.status||(_.isAgentTurnActive?"active":"idle"),D=_.statusPayload?.data?.type||_.statusPayload?.type||null;return{generatedAt:_.generatedAt,request:_.request,chat:{currentChatJid:_.currentChatJid,rootChatJid:_.currentRootChatJid,activeChats:q,branches:K},agent:{status:J,phase:D,running:Boolean(_.isAgentTurnActive)},model:{current:V,thinkingLevel:U,supportsThinking:Boolean(L)},context:{tokens:G,contextWindow:X,percent:N},queue:{count:Y},timeline:{loadedPosts:$.length,botPosts:Q,userPosts:Z,latestPostId:j?.id??null,latestTimestamp:j?.timestamp??null},bars:[{key:"context",label:"Context",value:a8(Math.round(N))},{key:"queue",label:"Queue",value:a8(Y*18)},{key:"activeChats",label:"Active chats",value:a8(q*12)},{key:"posts",label:"Timeline load",value:a8($.length*5)}]}}function $Q(_){if(_==="followup")return{title:"Widget submission queued",detail:"The widget message was queued because the agent is busy.",kind:"info",durationMs:3500};return{title:"Widget submission sent",detail:"The widget message was sent to the chat.",kind:"info",durationMs:3500}}function jQ(_){return{title:"Widget submission failed",detail:_||"Could not send the widget message.",kind:"warning",durationMs:5000}}function QQ(_,$){return{shouldBuildDashboard:Boolean(_?.buildDashboard||_?.dashboardKind==="internal-state"),nextRefreshCount:Number($||0)+1}}function ZQ(){return{title:"Dashboard built",detail:"Live dashboard state pushed into the widget.",kind:"info",durationMs:3000}}function YQ(_){return{title:"Dashboard build failed",detail:_||"Could not build dashboard.",kind:"warning",durationMs:5000}}function qQ(){return{title:"Widget refresh requested",detail:"The widget received a host acknowledgement update.",kind:"info",durationMs:3000}}async function KQ(_){let{requestPayload:$=null,currentChatJid:j,currentRootChatJid:Q,getAgentStatus:Z,getAgentContext:Y,getAgentQueueState:q,getAgentModels:K,getActiveChatAgents:N,getChatBranches:G,getTimeline:X,rawPosts:V,activeChatAgents:U,currentChatBranches:L,contextUsage:J,followupQueueItems:D,activeModel:O,activeThinkingLevel:W,supportsThinking:A,isAgentTurnActive:E}=_,[f,u,c,r,P,I,z]=await Promise.allSettled([Z(j),Y(j),q(j),K(j),N(),G(Q),X(20,null,j)]);return _Q({generatedAt:new Date().toISOString(),request:$,currentChatJid:j,currentRootChatJid:Q,statusPayload:R4(f),contextPayload:R4(u),queuePayload:R4(c),modelsPayload:R4(r),activeChatsPayload:R4(P),branchesPayload:R4(I),timelinePayload:R4(z),rawPosts:V,activeChatAgents:U,currentChatBranches:L,contextUsage:J,followupQueueItems:D,activeModel:O,activeThinkingLevel:W,supportsThinking:A,isAgentTurnActive:E})}function NQ(_){let{queuedItem:$,followupQueueItemsRef:j,dismissedQueueRowIdsRef:Q,currentChatJid:Z,refreshQueueState:Y,setFollowupQueueItems:q,showIntentToast:K,steerAgentQueueItem:N}=_,G=k5(j.current,$);if(!G)return;let{rowId:X}=G;Q.current.add(X),q((V)=>S4(V,X).items),N(X,d$(Z)).then(()=>{Y()}).catch((V)=>{console.warn("[queue] Failed to steer queued item:",V);let U=j3("steer");K(U.title,U.detail,"warning"),Q.current.delete(X),Y()})}function GQ(_){let{queuedItem:$,followupQueueItemsRef:j,dismissedQueueRowIdsRef:Q,currentChatJid:Z,refreshQueueState:Y,setFollowupQueueItems:q,showIntentToast:K,clearQueuedSteerStateIfStale:N,removeAgentQueueItem:G}=_,X=k5(j.current,$);if(!X)return;let{rowId:V}=X;Q.current.add(V),N?.(X.remainingQueueCount),q((U)=>S4(U,V).items),G(V,d$(Z)).then(()=>{Y()}).catch((U)=>{console.warn("[queue] Failed to remove queued item:",U);let L=j3("remove");K(L.title,L.detail,"warning"),Q.current.delete(V),Y()})}function XQ(_){let{widget:$,dismissedLiveWidgetKeysRef:j,setFloatingWidget:Q}=_;if(!$||typeof $!=="object")return;let Z=J_($);if(Z)j.current.delete(Z);Q(dj($,new Date().toISOString()))}function VQ(_){let{dismissedLiveWidgetKeysRef:$,setFloatingWidget:j}=_;j((Q)=>{let Z=ij(Q);if(Z.dismissedSessionKey)$.current.add(Z.dismissedSessionKey);return Z.nextWidget})}function UQ(_){let{event:$,widget:j,currentChatJid:Q,isComposeBoxAgentActive:Z,setFloatingWidget:Y,handleCloseFloatingWidget:q,handleMessageResponse:K,showIntentToast:N,sendAgentMessage:G,buildFloatingWidgetDashboardSnapshot:X}=_,V=typeof $?.kind==="string"?$.kind:"",U=J_(j);if(!V||!U)return;if(V==="widget.close"){q();return}if(V==="widget.submit"){let L=pj($?.payload),J=cj($?.payload),D=new Date().toISOString();if(Y((O)=>sj(O,U,{kind:V,payload:$?.payload||null,submittedAt:D,submissionText:L})),!L){if(N("Widget submission received","The widget submitted data without a message payload yet.","info",3500),J)q();return}(async()=>{try{let O=await G("default",L,null,[],Z?"queue":null,Q);K(O),Y((A)=>$3(A,U,{submittedAt:D,submissionText:L,queued:O?.queued||null}));let W=$Q(O?.queued);if(N(W.title,W.detail,W.kind,W.durationMs),J)q()}catch(O){Y((A)=>$3(A,U,{submittedAt:D,submissionText:L,errorMessage:O?.message||"Could not send the widget message."}));let W=jQ(O?.message);N(W.title,W.detail,W.kind,W.durationMs)}})();return}if(V==="widget.ready"||V==="widget.request_refresh"){let L=new Date().toISOString(),J=QQ($?.payload||null,j?.runtimeState?.refreshCount);if(Y((D)=>aj(D,U,{kind:V,payload:$?.payload||null,eventAt:L,nextRefreshCount:J.nextRefreshCount,shouldBuildDashboard:J.shouldBuildDashboard})),V==="widget.request_refresh")if(J.shouldBuildDashboard)(async()=>{try{let D=await X($?.payload||null);Y((W)=>tj(W,U,{dashboard:D,at:new Date().toISOString(),count:J.nextRefreshCount,echo:$?.payload||null}));let O=ZQ();N(O.title,O.detail,O.kind,O.durationMs)}catch(D){Y((W)=>ej(W,U,{errorMessage:D?.message||"Could not build dashboard.",at:new Date().toISOString(),count:J.nextRefreshCount}));let O=YQ(D?.message);N(O.title,O.detail,O.kind,O.durationMs)}})();else{let D=qQ();N(D.title,D.detail,D.kind,D.durationMs)}}}var lN=400,Q3=60,LQ=220,Z3="mdPreviewHeight";function nN(){try{let _=localStorage.getItem(Z3),$=_?Number(_):NaN;return Number.isFinite($)&&$>=Q3?$:LQ}catch{return LQ}}function t8({getContent:_,path:$,onClose:j}){let[Q,Z]=g(""),[Y,q]=g(nN),K=x(null),N=x(null),G=x(""),X=x(_);return X.current=_,v(()=>{let L=()=>{let D=X.current?.()||"";if(D===G.current)return;G.current=D;try{let O=H_(D,null,{sanitize:!1});Z(O)}catch{Z('<p style="color:var(--text-secondary)">Preview unavailable</p>')}};L();let J=setInterval(L,lN);return()=>clearInterval(J)},[]),v(()=>{if(K.current&&Q)W4(K.current).catch(()=>{})},[Q]),B`
        <div
            class="md-preview-splitter"
            onMouseDown=${(L)=>{L.preventDefault();let J=L.clientY,D=N.current?.offsetHeight||Y,O=N.current?.parentElement,W=O?O.offsetHeight*0.7:500,A=L.currentTarget;A.classList.add("dragging"),document.body.style.cursor="row-resize",document.body.style.userSelect="none";let E=(u)=>{let c=Math.min(Math.max(D-(u.clientY-J),Q3),W);q(c)},f=()=>{A.classList.remove("dragging"),document.body.style.cursor="",document.body.style.userSelect="";try{localStorage.setItem(Z3,String(Math.round(N.current?.offsetHeight||Y)))}catch{}document.removeEventListener("mousemove",E),document.removeEventListener("mouseup",f)};document.addEventListener("mousemove",E),document.addEventListener("mouseup",f)}}
            onTouchStart=${(L)=>{L.preventDefault();let J=L.touches[0];if(!J)return;let D=J.clientY,O=N.current?.offsetHeight||Y,W=N.current?.parentElement,A=W?W.offsetHeight*0.7:500,E=L.currentTarget;E.classList.add("dragging"),document.body.style.userSelect="none";let f=(c)=>{let r=c.touches[0];if(!r)return;c.preventDefault();let P=Math.min(Math.max(O-(r.clientY-D),Q3),A);q(P)},u=()=>{E.classList.remove("dragging"),document.body.style.userSelect="";try{localStorage.setItem(Z3,String(Math.round(N.current?.offsetHeight||Y)))}catch{}document.removeEventListener("touchmove",f),document.removeEventListener("touchend",u),document.removeEventListener("touchcancel",u)};document.addEventListener("touchmove",f,{passive:!1}),document.addEventListener("touchend",u),document.addEventListener("touchcancel",u)}}
        ></div>
        <div class="md-preview-panel" ref=${N} style=${{height:Y+"px"}}>
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
                ref=${K}
                dangerouslySetInnerHTML=${{__html:Q}}
            />
        </div>
    `}function BQ(_){if(_.branchLoaderMode)return"branch-loader";if(_.panePopoutMode)return"pane-popout";return"main"}function dN(_){return _==="error"?"Could not open branch window":"Opening branch…"}function WQ(_){return B`
    <div class="app-shell chat-only">
      <div class="container" style=${{display:"flex",alignItems:"center",justifyContent:"center",minHeight:"100vh",padding:"24px"}}>
        <div class="card" style=${{width:"min(560px, 100%)",padding:"24px"}}>
          <h1 style=${{margin:"0 0 12px",fontSize:"1.1rem"}}>
            ${dN(_.status)}
          </h1>
          <p style=${{margin:0,lineHeight:1.6}}>${_.message}</p>
        </div>
      </div>
    </div>
  `}function FQ(_){let{appShellRef:$,editorOpen:j,hidePanePopoutControls:Q,panePopoutHasMenuActions:Z,panePopoutTitle:Y,tabStripTabs:q,tabStripActiveId:K,handleTabActivate:N,previewTabs:G,handleTabTogglePreview:X,editorContainerRef:V,getPaneContent:U,panePopoutPath:L}=_;return B`
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
                              class=${`pane-popout-controls-item${J.id===K?" active":""}`}
                              onClick=${(D)=>{N(J.id),D.currentTarget.closest("details")?.removeAttribute("open")}}
                            >
                              ${J.label}
                            </button>
                          `)}
                        </div>
                      </div>
                    `}
                    ${K&&G.has(K)&&B`
                      <button
                        type="button"
                        class="pane-popout-controls-action"
                        onClick=${(J)=>{X(K),J.currentTarget.closest("details")?.removeAttribute("open")}}
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
              <p style=${{margin:0,lineHeight:1.6}}>${L||"No pane path provided."}</p>
            </div>
          `}
        ${j&&K&&G.has(K)&&B`
          <${t8}
            getContent=${U}
            path=${K}
            onClose=${()=>X(K)}
          />
        `}
      </div>
    </div>
  `}function e8(_){return String(_||"").toLowerCase().replace(/^@/,"").replace(/\s+/g," ").trim()}function iN(_,$){let j=e8(_),Q=e8($);if(!Q)return!1;return j.startsWith(Q)||j.includes(Q)}function Y3(_){if(!_)return!1;if(_.isComposing)return!1;if(_.ctrlKey||_.metaKey||_.altKey)return!1;return typeof _.key==="string"&&_.key.length===1&&/\S/.test(_.key)}function q3(_,$,j=Date.now(),Q=700){let Z=_&&typeof _==="object"?_:{value:"",updatedAt:0},Y=String($||"").trim().toLowerCase();if(!Y)return{value:"",updatedAt:j};return{value:!Z.value||!Number.isFinite(Z.updatedAt)||j-Z.updatedAt>Q?Y:`${Z.value}${Y}`,updatedAt:j}}function rN(_,$){let j=Math.max(0,Number(_)||0);if(j<=0)return[];let Z=((Number.isInteger($)?$:0)%j+j)%j,Y=[];for(let q=0;q<j;q+=1)Y.push((Z+q)%j);return Y}function oN(_,$,j=0,Q=(Z)=>Z){let Z=e8($);if(!Z)return-1;let Y=Array.isArray(_)?_:[],q=rN(Y.length,j),K=Y.map((N)=>e8(Q(N)));for(let N of q)if(K[N].startsWith(Z))return N;for(let N of q)if(K[N].includes(Z))return N;return-1}function K3(_,$,j=-1,Q=(Z)=>Z){let Z=Array.isArray(_)?_:[];if(j>=0&&j<Z.length){let Y=Q(Z[j]);if(iN(Y,$))return j}return oN(Z,$,0,Q)}function _6(_){return String(_||"").trim().toLowerCase()}function N3(_){let $=String(_||"").match(/^@([a-zA-Z0-9_-]*)$/);if(!$)return null;return _6($[1]||"")}function sN(_){let $=new Set,j=[];for(let Q of Array.isArray(_)?_:[]){let Z=_6(Q?.agent_name);if(!Z||$.has(Z))continue;$.add(Z),j.push(Q)}return j}function zQ(_,$,j={}){let Q=N3($);if(Q==null)return[];let Z=typeof j?.currentChatJid==="string"?j.currentChatJid:null;return sN(_).filter((Y)=>{if(Z&&Y?.chat_jid===Z)return!1;return _6(Y?.agent_name).startsWith(Q)})}function G3(_){let $=_6(_);return $?`@${$} `:""}function HQ(_,$,j={}){if(!_||_.isComposing)return!1;if(j.searchMode)return!1;if(!j.showSessionSwitcherButton)return!1;if(_.ctrlKey||_.metaKey||_.altKey)return!1;if(_.key!=="@")return!1;return String($||"")===""}function h_({prefix:_="file",label:$,title:j,onRemove:Q,onClick:Z,removeTitle:Y="Remove",icon:q="file"}){let K=`${_}-file-pill`,N=`${_}-file-name`,G=`${_}-file-remove`,X=q==="message"?B`<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
      </svg>`:B`<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
        <polyline points="14 2 14 8 20 8"/>
      </svg>`;return B`
    <span class=${K} title=${j||$} onClick=${Z}>
      ${X}
      <span class=${N}>${$}</span>
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
  `}var aN=[{name:"/model",description:"Select model or list available models"},{name:"/cycle-model",description:"Cycle to the next available model"},{name:"/thinking",description:"Show or set thinking level"},{name:"/cycle-thinking",description:"Cycle thinking level"},{name:"/theme",description:"Set UI theme (no name to show available themes)"},{name:"/tint",description:"Tint default light/dark UI (usage: /tint #hex or /tint off)"},{name:"/btw",description:"Open a side conversation panel without interrupting the main chat"},{name:"/state",description:"Show current session state"},{name:"/stats",description:"Show session token and cost stats"},{name:"/context",description:"Show context window usage"},{name:"/last",description:"Show last assistant response"},{name:"/compact",description:"Manually compact the session"},{name:"/auto-compact",description:"Toggle auto-compaction"},{name:"/auto-retry",description:"Toggle auto-retry"},{name:"/abort",description:"Abort the current response"},{name:"/abort-retry",description:"Abort retry backoff"},{name:"/abort-bash",description:"Abort running bash command"},{name:"/shell",description:"Run a shell command and return output"},{name:"/bash",description:"Run a shell command and add output to context"},{name:"/queue",description:"Queue a follow-up message (one-at-a-time)"},{name:"/queue-all",description:"Queue a follow-up message (batch all)"},{name:"/steer",description:"Steer the current response"},{name:"/steering-mode",description:"Set steering mode (all|one)"},{name:"/followup-mode",description:"Set follow-up mode (all|one)"},{name:"/session-name",description:"Set or show the session name"},{name:"/new-session",description:"Start a new session"},{name:"/switch-session",description:"Switch to a session file"},{name:"/fork",description:"Fork from a previous message"},{name:"/forks",description:"List forkable messages"},{name:"/tree",description:"List the session tree"},{name:"/label",description:"Set or clear a label on a tree entry"},{name:"/labels",description:"List labeled entries"},{name:"/agent-name",description:"Set or show the agent display name"},{name:"/agent-avatar",description:"Set or show the agent avatar URL"},{name:"/user-name",description:"Set or show your display name"},{name:"/user-avatar",description:"Set or show your avatar URL"},{name:"/user-github",description:"Set name/avatar from GitHub profile"},{name:"/export-html",description:"Export session to HTML"},{name:"/passkey",description:"Manage passkeys (enrol/list/delete)"},{name:"/totp",description:"Show a TOTP enrolment QR code"},{name:"/qr",description:"Generate a QR code for text or URL"},{name:"/search",description:"Search notes and skills in the workspace"},{name:"/restart",description:"Restart the agent and stop subprocesses"},{name:"/commands",description:"List available commands"}];function tN({usage:_,onCompact:$}){let j=Math.min(100,Math.max(0,_.percent||0)),Q=_.tokens,Z=_.contextWindow,Y="Compact context",K=`${Q!=null?`Context: ${JQ(Q)} / ${JQ(Z)} tokens (${j.toFixed(0)}%)`:`Context: ${j.toFixed(0)}%`} — ${"Compact context"}`,N=9,G=2*Math.PI*9,X=j/100*G,V=j>90?"var(--context-red, #ef4444)":j>75?"var(--context-amber, #f59e0b)":"var(--context-green, #22c55e)";return B`
        <button
            class="compose-context-pie icon-btn"
            type="button"
            title=${K}
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
    `}function JQ(_){if(_==null)return"?";if(_>=1e6)return(_/1e6).toFixed(1)+"M";if(_>=1000)return(_/1000).toFixed(0)+"K";return String(_)}function eN(_){if(!_)return{content:_,fileRefs:[]};let j=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),Q=-1;for(let G=0;G<j.length;G+=1)if(j[G].trim()==="Files:"&&j[G+1]&&/^\s*-\s+/.test(j[G+1])){Q=G;break}if(Q===-1)return{content:_,fileRefs:[]};let Z=[],Y=Q+1;for(;Y<j.length;Y+=1){let G=j[Y];if(/^\s*-\s+/.test(G))Z.push(G.replace(/^\s*-\s+/,"").trim());else if(!G.trim())break;else break}if(Z.length===0)return{content:_,fileRefs:[]};let q=j.slice(0,Q),K=j.slice(Y);return{content:[...q,...K].join(`
`).replace(/\n{3,}/g,`

`).trim(),fileRefs:Z}}function _G(_){if(!_)return{content:_,messageRefs:[]};let j=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),Q=-1;for(let G=0;G<j.length;G+=1)if(j[G].trim()==="Referenced messages:"&&j[G+1]&&/^\s*-\s+/.test(j[G+1])){Q=G;break}if(Q===-1)return{content:_,messageRefs:[]};let Z=[],Y=Q+1;for(;Y<j.length;Y+=1){let G=j[Y];if(/^\s*-\s+/.test(G)){let X=G.replace(/^\s*-\s+/,"").trim().match(/^message:(\S+)$/i);if(X)Z.push(X[1])}else if(!G.trim())break;else break}if(Z.length===0)return{content:_,messageRefs:[]};let q=j.slice(0,Q),K=j.slice(Y);return{content:[...q,...K].join(`
`).replace(/\n{3,}/g,`

`).trim(),messageRefs:Z}}function $G(_){let $=eN(_||""),j=_G($.content||"");return{text:j.content||"",fileRefs:$.fileRefs,messageRefs:j.messageRefs}}function X3({items:_=[],onInjectQueuedFollowup:$,onRemoveQueuedFollowup:j,onOpenFilePill:Q}){if(!Array.isArray(_)||_.length===0)return null;return B`
        <div class="compose-queue-stack">
            ${_.map((Z)=>{let Y=typeof Z?.content==="string"?Z.content:"",q=$G(Y);if(!q.text.trim()&&q.fileRefs.length===0&&q.messageRefs.length===0)return null;return B`
                    <div class="compose-queue-stack-item" role="listitem">
                        <div class="compose-queue-stack-content" title=${Y}>
                            ${q.text.trim()&&B`<div class="compose-queue-stack-text">${q.text}</div>`}
                            ${(q.messageRefs.length>0||q.fileRefs.length>0)&&B`
                                <div class="compose-queue-stack-refs">
                                    ${q.messageRefs.map((K)=>B`
                                        <${h_}
                                            key=${"queue-msg-"+K}
                                            prefix="compose"
                                            label=${"msg:"+K}
                                            title=${"Message reference: "+K}
                                            icon="message"
                                        />
                                    `)}
                                    ${q.fileRefs.map((K)=>{let N=K.split("/").pop()||K;return B`
                                            <${h_}
                                                key=${"queue-file-"+K}
                                                prefix="compose"
                                                label=${N}
                                                title=${K}
                                                onClick=${()=>Q?.(K)}
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
    `}function OQ({onPost:_,onFocus:$,searchMode:j,searchScope:Q="current",onSearch:Z,onSearchScopeChange:Y,onEnterSearch:q,onExitSearch:K,fileRefs:N=[],onRemoveFileRef:G,onClearFileRefs:X,messageRefs:V=[],onRemoveMessageRef:U,onClearMessageRefs:L,activeModel:J=null,modelUsage:D=null,thinkingLevel:O=null,supportsThinking:W=!1,contextUsage:A=null,onContextCompact:E,notificationsEnabled:f=!1,notificationPermission:u="default",onToggleNotifications:c,onModelChange:r,onModelStateChange:P,activeEditorPath:I=null,onAttachEditorFile:z,onOpenFilePill:C,followupQueueItems:b=[],onInjectQueuedFollowup:e,onRemoveQueuedFollowup:h,onSubmitIntercept:a,onMessageResponse:t,onPopOutChat:_0,isAgentActive:q0=!1,activeChatAgents:Z0=[],currentChatJid:K0="web:default",connectionStatus:B0="connected",onSetFileRefs:U0,onSetMessageRefs:f0,onSubmitError:M0,onSwitchChat:A0,onRenameSession:b0,isRenameSessionInProgress:u0=!1,onCreateSession:p0,onDeleteSession:n0,onRestoreSession:E0,showQueueStack:d0=!0,statusNotice:F0=null}){let[x0,i0]=g(""),[s0,R1]=g(""),[q1,l0]=g([]),[B1,Q1]=g(!1),[t0,V0]=g([]),[R0,j1]=g(0),[i,Y0]=g(!1),[m,d]=g([]),[z0,k0]=g(0),[I0,H0]=g(!1),[C0,v0]=g(!1),[L0,S0]=g(!1),[J0,j0]=g(!1),[y,o]=g([]),[X0,O0]=g(0),[g0,e0]=g(0),[N1,k1]=g(!1),[u1,w_]=g(0),[$_,g1]=g(null),[o1,c1]=g(()=>Date.now()),_1=x(null),s1=x(null),t_=x(null),j_=x(null),e_=x(null),p_=x(null),M1=x(null),a1=x(null),I1=x({value:"",updatedAt:0}),W1=x(0),F1=x(!1),L_=200,B_=(F)=>{let w=new Set,l=[];for(let p of F||[]){if(typeof p!=="string")continue;let T0=p.trim();if(!T0||w.has(T0))continue;w.add(T0),l.push(T0)}return l},T1=()=>{let F=z_("piclaw_compose_history");if(!F)return[];try{let w=JSON.parse(F);if(!Array.isArray(w))return[];return B_(w)}catch{return[]}},t1=(F)=>{Y1("piclaw_compose_history",JSON.stringify(F))},K1=x(T1()),C1=x(-1),Q_=x(""),b1=x0.trim()||q1.length>0||N.length>0||V.length>0,_4=typeof window<"u"&&typeof navigator<"u"&&Boolean(navigator.geolocation)&&Boolean(window.isSecureContext),O_=typeof window<"u"&&typeof Notification<"u",$4=typeof window<"u"?Boolean(window.isSecureContext):!1,F4=O_&&$4&&u!=="denied",D_=u==="granted"&&f,R_=y4(F0),u4=m8(F0),f4=typeof F0?.detail==="string"&&F0.detail.trim()?F0.detail.trim():"",Z1=R_?h8(F0,o1):null,x1=D_?"Disable notifications":"Enable notifications",z4=q1.length>0||N.length>0||V.length>0,Z_=B0==="disconnected"?"Reconnecting":String(B0||"Connecting").replace(/[-_]+/g," ").replace(/^./,(F)=>F.toUpperCase()),E_=B0==="disconnected"?"Reconnecting":`Connection: ${Z_}`,l1=(Array.isArray(Z0)?Z0:[]).filter((F)=>!F?.archived_at),A1=(()=>{for(let F of Array.isArray(Z0)?Z0:[]){let w=typeof F?.chat_jid==="string"?F.chat_jid.trim():"";if(w&&w===K0)return F}return null})(),f1=Boolean(A1&&A1.chat_jid===(A1.root_chat_jid||A1.chat_jid)),G1=w0(()=>{let F=new Set,w=[];for(let l of Array.isArray(Z0)?Z0:[]){let p=typeof l?.chat_jid==="string"?l.chat_jid.trim():"";if(!p||p===K0||F.has(p))continue;if(!(typeof l?.agent_name==="string"?l.agent_name.trim():""))continue;F.add(p),w.push(l)}return w},[Z0,K0]),Y_=G1.length>0,q_=Y_&&typeof A0==="function",K_=Y_&&typeof E0==="function",c_=Boolean(u0||F1.current),m1=!j&&typeof b0==="function"&&!c_,v1=!j&&typeof p0==="function",N_=!j&&typeof n0==="function"&&!f1,u_=!j&&(q_||K_||m1||v1||N_),z1=J||"",k_=W&&O?` (${O})`:"",X1=k_.trim()?`${O}`:"",f_=typeof D?.hint_short==="string"?D.hint_short.trim():"",M_=[X1||null,f_||null].filter(Boolean).join(" • "),v4=[z1?`Current model: ${z1}${k_}`:null,D?.plan?`Plan: ${D.plan}`:null,f_||null,D?.primary?.reset_description||null,D?.secondary?.reset_description||null].filter(Boolean),g4=C0?"Switching model…":v4.join(" • ")||`Current model: ${z1}${k_} (tap to open model picker)`,v_=(F)=>{if(!F||typeof F!=="object")return;let w=F.model??F.current;if(typeof P==="function")P({model:w??null,thinking_level:F.thinking_level??null,supports_thinking:F.supports_thinking,provider_usage:F.provider_usage??null});if(w&&typeof r==="function")r(w)},g_=(F)=>{let w=F||_1.current;if(!w)return;w.style.height="auto",w.style.height=`${w.scrollHeight}px`,w.style.overflowY="hidden"},b4=(F)=>{if(!F.startsWith("/")||F.includes(`
`)){Y0(!1),V0([]);return}let w=F.toLowerCase().split(" ")[0];if(w.length<1){Y0(!1),V0([]);return}let l=aN.filter((p)=>p.name.startsWith(w)||p.name.replace(/-/g,"").startsWith(w.replace(/-/g,"")));if(l.length>0&&!(l.length===1&&l[0].name===w))H0(!1),d([]),V0(l),j1(0),Y0(!0);else Y0(!1),V0([])},j4=(F)=>{let w=x0,l=w.indexOf(" "),p=l>=0?w.slice(l):"",T0=F.name+p;i0(T0),Y0(!1),V0([]),requestAnimationFrame(()=>{let H1=_1.current;if(!H1)return;let P1=T0.length;H1.selectionStart=P1,H1.selectionEnd=P1,H1.focus()})},t4=(F)=>{if(N3(F)==null){H0(!1),d([]);return}let w=zQ(l1,F,{currentChatJid:K0});if(w.length>0&&!(w.length===1&&G3(w[0].agent_name).trim().toLowerCase()===String(F||"").trim().toLowerCase()))Y0(!1),V0([]),d(w),k0(0),H0(!0);else H0(!1),d([])},Q4=(F)=>{let w=G3(F?.agent_name);if(!w)return;i0(w),H0(!1),d([]),requestAnimationFrame(()=>{let l=_1.current;if(!l)return;let p=w.length;l.selectionStart=p,l.selectionEnd=p,l.focus()})},l_=()=>{if(j||!q_&&!K_&&!m1&&!v1&&!N_)return!1;return I1.current={value:"",updatedAt:0},S0(!1),Y0(!1),V0([]),H0(!1),d([]),j0(!0),!0},n1=(F)=>{if(F?.preventDefault?.(),F?.stopPropagation?.(),j||!q_&&!K_&&!m1&&!v1&&!N_)return;if(J0){I1.current={value:"",updatedAt:0},j0(!1);return}l_()},H4=(F)=>{let w=typeof F==="string"?F.trim():"";if(j0(!1),!w||w===K0){requestAnimationFrame(()=>_1.current?.focus());return}A0?.(w)},J4=async(F)=>{let w=typeof F==="string"?F.trim():"";if(j0(!1),!w||typeof E0!=="function"){requestAnimationFrame(()=>_1.current?.focus());return}try{await E0(w)}catch(l){console.warn("Failed to restore session:",l),requestAnimationFrame(()=>_1.current?.focus())}},T5=(F)=>{let l=(Array.isArray(F)?F:[]).findIndex((p)=>!p?.disabled);return l>=0?l:0},D1=w0(()=>{let F=[];for(let w of G1){let l=Boolean(w?.archived_at),p=typeof w?.agent_name==="string"?w.agent_name.trim():"",T0=typeof w?.chat_jid==="string"?w.chat_jid.trim():"";if(!p||!T0)continue;F.push({type:"session",key:`session:${T0}`,label:`@${p} — ${T0}${w?.is_active?" active":""}${l?" archived":""}`,chat:w,disabled:l?!K_:!q_})}if(v1)F.push({type:"action",key:"action:new",label:"New session",action:"new",disabled:!1});if(m1)F.push({type:"action",key:"action:rename",label:"Rename current session",action:"rename",disabled:c_});if(N_)F.push({type:"action",key:"action:delete",label:"Delete current session",action:"delete",disabled:!1});return F},[G1,K_,q_,v1,m1,N_,c_]),O4=async(F)=>{if(F?.preventDefault)F.preventDefault();if(F?.stopPropagation)F.stopPropagation();if(typeof b0!=="function"||u0||F1.current)return;F1.current=!0,j0(!1);try{await b0()}catch(w){console.warn("Failed to rename session:",w)}finally{F1.current=!1}requestAnimationFrame(()=>_1.current?.focus())},e4=async()=>{if(typeof p0!=="function")return;j0(!1);try{await p0()}catch(F){console.warn("Failed to create session:",F)}requestAnimationFrame(()=>_1.current?.focus())},G_=async()=>{if(typeof n0!=="function")return;j0(!1);try{await n0(K0)}catch(F){console.warn("Failed to delete session:",F)}requestAnimationFrame(()=>_1.current?.focus())},X_=(F)=>{if(j)R1(F);else i0(F),b4(F),t4(F);requestAnimationFrame(()=>g_())},Z4=(F)=>{let w=j?s0:x0,l=w&&!w.endsWith(`
`)?`
`:"",p=`${w}${l}${F}`.trimStart();X_(p)},m4=(F)=>{let w=F?.command?.model_label;if(w)return w;let l=F?.command?.message;if(typeof l==="string"){let p=l.match(/•\s+([^\n]+?)\s+\(current\)/);if(p?.[1])return p[1].trim()}return null},h4=async(F)=>{if(j||C0)return;v0(!0);try{let w=await n4("default",F,null,[],null,K0),l=m4(w);v_({model:l??J??null,thinking_level:w?.command?.thinking_level,supports_thinking:w?.command?.supports_thinking});try{let p=await f5(K0);if(p)v_(p)}catch{}return _?.(),!0}catch(w){return console.error("Failed to switch model:",w),alert("Failed to switch model: "+w.message),!1}finally{v0(!1)}},_5=async()=>{await h4("/cycle-model")},Y4=async(F)=>{if(!F||C0)return;if(await h4(`/model ${F}`))S0(!1)},I_=(F)=>{if(!F||F.disabled)return;if(F.type==="session"){let w=F.chat;if(w?.archived_at)J4(w.chat_jid);else H4(w.chat_jid);return}if(F.type==="action"){if(F.action==="new"){e4();return}if(F.action==="rename"){O4();return}if(F.action==="delete")G_()}},$5=(F)=>{F.preventDefault(),F.stopPropagation(),I1.current={value:"",updatedAt:0},j0(!1),S0((w)=>!w)},A4=async()=>{if(j)return;E?.(),await x_("/compact",null,{includeMedia:!1,includeFileRefs:!1,includeMessageRefs:!1,clearAfterSubmit:!1,recordHistory:!1})},p4=(F)=>{if(F==="queue"||F==="steer"||F==="auto")return F;return q0?"queue":void 0},x_=async(F,w,l={})=>{let{includeMedia:p=!0,includeFileRefs:T0=!0,includeMessageRefs:H1=!0,clearAfterSubmit:P1=!0,recordHistory:S1=!0}=l||{},q4=typeof F==="string"?F:F&&typeof F?.target?.value==="string"?F.target.value:x0,c4=typeof q4==="string"?q4:"";if(!c4.trim()&&(p?q1.length===0:!0)&&(T0?N.length===0:!0)&&(H1?V.length===0:!0))return;Y0(!1),V0([]),H0(!1),d([]),j0(!1),g1(null);let j5=p?[...q1]:[],Q5=T0?[...N]:[],K4=H1?[...V]:[],p1=c4.trim();if(S1&&p1){let D4=K1.current,J1=B_(D4.filter((n_)=>n_!==p1));if(J1.push(p1),J1.length>200)J1.splice(0,J1.length-200);K1.current=J1,t1(J1),C1.current=-1,Q_.current=""}let Z5=()=>{if(p)l0([...j5]);if(T0)U0?.(Q5);if(H1)f0?.(K4);i0(p1),requestAnimationFrame(()=>g_())};if(P1)i0(""),l0([]),X?.(),L?.();(async()=>{try{if(await a?.({content:p1,submitMode:w,fileRefs:Q5,messageRefs:K4,mediaFiles:j5})){_?.();return}let J1=[];for(let T_ of j5){let k4=await v6(T_);J1.push(k4.id)}let n_=Q5.length?`Files:
${Q5.map((T_)=>`- ${T_}`).join(`
`)}`:"",Y5=K4.length?`Referenced messages:
${K4.map((T_)=>`- message:${T_}`).join(`
`)}`:"",Y8=J1.length?`Attachments:
${J1.map((T_,k4)=>{let G6=j5[k4]?.name||`attachment-${k4+1}`;return`- attachment:${T_} (${G6})`}).join(`
`)}`:"",q5=[p1,n_,Y5,Y8].filter(Boolean).join(`

`),E4=await n4("default",q5,null,J1,p4(w),K0);if(t?.(E4),E4?.command){v_({model:E4.command.model_label??J??null,thinking_level:E4.command.thinking_level,supports_thinking:E4.command.supports_thinking});try{let T_=await f5(K0);if(T_)v_(T_)}catch{}}_?.()}catch(D4){if(P1)Z5();let J1=D4?.message||"Failed to send message.";g1(J1),M0?.(J1),console.error("Failed to post:",D4)}})()},H=(F)=>{e?.(F)},k=T((F)=>{if(j||!L0&&!J0||F?.isComposing)return!1;let w=()=>{F.preventDefault?.(),F.stopPropagation?.()},l=()=>{I1.current={value:"",updatedAt:0}};if(F.key==="Escape"){if(w(),l(),L0)S0(!1);if(J0)j0(!1);return!0}if(L0){if(F.key==="ArrowDown"){if(w(),l(),y.length>0)O0((p)=>(p+1)%y.length);return!0}if(F.key==="ArrowUp"){if(w(),l(),y.length>0)O0((p)=>(p-1+y.length)%y.length);return!0}if((F.key==="Enter"||F.key==="Tab")&&y.length>0)return w(),l(),Y4(y[Math.max(0,Math.min(X0,y.length-1))]),!0;if(Y3(F)&&y.length>0){w();let p=q3(I1.current,F.key);I1.current=p;let T0=K3(y,p.value,X0,(H1)=>H1);if(T0>=0)O0(T0);return!0}}if(J0){if(F.key==="ArrowDown"){if(w(),l(),D1.length>0)e0((p)=>(p+1)%D1.length);return!0}if(F.key==="ArrowUp"){if(w(),l(),D1.length>0)e0((p)=>(p-1+D1.length)%D1.length);return!0}if((F.key==="Enter"||F.key==="Tab")&&D1.length>0)return w(),l(),I_(D1[Math.max(0,Math.min(g0,D1.length-1))]),!0;if(Y3(F)&&D1.length>0){w();let p=q3(I1.current,F.key);I1.current=p;let T0=K3(D1,p.value,g0,(H1)=>H1.label);if(T0>=0)e0(T0);return!0}}return!1},[j,L0,J0,y,X0,D1,g0,Y4]),R=(F)=>{if(F.isComposing)return;if(j&&F.key==="Escape"){F.preventDefault(),R1(""),K?.();return}if(k(F))return;let w=_1.current?.value??(j?s0:x0);if(HQ(F,w,{searchMode:j,showSessionSwitcherButton:u_})){F.preventDefault(),l_();return}if(I0&&m.length>0){let l=_1.current?.value??(j?s0:x0);if(!String(l||"").match(/^@([a-zA-Z0-9_-]*)$/))H0(!1),d([]);else{if(F.key==="ArrowDown"){F.preventDefault(),k0((p)=>(p+1)%m.length);return}if(F.key==="ArrowUp"){F.preventDefault(),k0((p)=>(p-1+m.length)%m.length);return}if(F.key==="Tab"||F.key==="Enter"){F.preventDefault(),Q4(m[z0]);return}if(F.key==="Escape"){F.preventDefault(),H0(!1),d([]);return}}}if(i&&t0.length>0){let l=_1.current?.value??(j?s0:x0);if(!String(l||"").startsWith("/"))Y0(!1),V0([]);else{if(F.key==="ArrowDown"){F.preventDefault(),j1((p)=>(p+1)%t0.length);return}if(F.key==="ArrowUp"){F.preventDefault(),j1((p)=>(p-1+t0.length)%t0.length);return}if(F.key==="Tab"){F.preventDefault(),j4(t0[R0]);return}if(F.key==="Enter"&&!F.shiftKey){if(!w.includes(" ")){F.preventDefault();let T0=t0[R0];Y0(!1),V0([]),x_(T0.name);return}}if(F.key==="Escape"){F.preventDefault(),Y0(!1),V0([]);return}}}if(!j&&(F.key==="ArrowUp"||F.key==="ArrowDown")&&!F.metaKey&&!F.ctrlKey&&!F.altKey&&!F.shiftKey){let l=_1.current;if(!l)return;let p=l.value||"",T0=l.selectionStart===0&&l.selectionEnd===0,H1=l.selectionStart===p.length&&l.selectionEnd===p.length;if(F.key==="ArrowUp"&&T0||F.key==="ArrowDown"&&H1){let P1=K1.current;if(!P1.length)return;F.preventDefault();let S1=C1.current;if(F.key==="ArrowUp"){if(S1===-1)Q_.current=p,S1=P1.length-1;else if(S1>0)S1-=1;C1.current=S1,X_(P1[S1]||"")}else{if(S1===-1)return;if(S1<P1.length-1)S1+=1,C1.current=S1,X_(P1[S1]||"");else C1.current=-1,X_(Q_.current||""),Q_.current=""}requestAnimationFrame(()=>{let q4=_1.current;if(!q4)return;let c4=q4.value.length;q4.selectionStart=c4,q4.selectionEnd=c4});return}}if(F.key==="Enter"&&!F.shiftKey&&(F.ctrlKey||F.metaKey)){if(F.preventDefault(),j){if(w.trim())Z?.(w.trim(),Q)}else x_(w,"steer");return}if(F.key==="Enter"&&!F.shiftKey)if(F.preventDefault(),j){if(w.trim())Z?.(w.trim(),Q)}else x_(w)},S=(F)=>{let w=Array.from(F||[]).filter((l)=>l instanceof File&&!String(l.name||"").startsWith(".DS_Store"));if(!w.length)return;l0((l)=>[...l,...w]),g1(null)},n=(F)=>{S(F.target.files),F.target.value=""},Q0=(F)=>{if(j)return;F.preventDefault(),F.stopPropagation(),W1.current+=1,Q1(!0)},N0=(F)=>{if(j)return;if(F.preventDefault(),F.stopPropagation(),W1.current=Math.max(0,W1.current-1),W1.current===0)Q1(!1)},G0=(F)=>{if(j)return;if(F.preventDefault(),F.stopPropagation(),F.dataTransfer)F.dataTransfer.dropEffect="copy";Q1(!0)},$0=(F)=>{if(j)return;F.preventDefault(),F.stopPropagation(),W1.current=0,Q1(!1),S(F.dataTransfer?.files||[])},P0=(F)=>{if(j)return;let w=F.clipboardData?.items;if(!w||!w.length)return;let l=[];for(let p of w){if(p.kind!=="file")continue;let T0=p.getAsFile?.();if(T0)l.push(T0)}if(l.length>0)F.preventDefault(),S(l)},y1=(F)=>{l0((w)=>w.filter((l,p)=>p!==F))},e1=()=>{g1(null),l0([]),X?.(),L?.()},h1=()=>{if(!navigator.geolocation){alert("Geolocation is not available in this browser.");return}navigator.geolocation.getCurrentPosition((F)=>{let{latitude:w,longitude:l,accuracy:p}=F.coords,T0=`${w.toFixed(5)}, ${l.toFixed(5)}`,H1=Number.isFinite(p)?` ±${Math.round(p)}m`:"",P1=`https://maps.google.com/?q=${w},${l}`,S1=`Location: ${T0}${H1} ${P1}`;Z4(S1)},(F)=>{let w=F?.message||"Unable to retrieve location.";alert(`Location error: ${w}`)},{enableHighAccuracy:!0,timeout:1e4,maximumAge:0})};v(()=>{if(!L0)return;I1.current={value:"",updatedAt:0},k1(!0),f5(K0).then((F)=>{let w=Array.isArray(F?.models)?F.models.filter((l)=>typeof l==="string"&&l.trim().length>0):[];w.sort((l,p)=>l.localeCompare(p,void 0,{sensitivity:"base"})),o(w),v_(F)}).catch((F)=>{console.warn("Failed to load model list:",F),o([])}).finally(()=>{k1(!1)})},[L0,J]),v(()=>{if(j)S0(!1),j0(!1),Y0(!1),V0([]),H0(!1),d([])},[j]),v(()=>{if(J0&&!u_)j0(!1)},[J0,u_]),v(()=>{if(!L0)return;let F=y.findIndex((w)=>w===J);O0(F>=0?F:0)},[L0,y,J]),v(()=>{if(!J0)return;e0(T5(D1)),I1.current={value:"",updatedAt:0}},[J0,K0]),v(()=>{if(!L0)return;let F=(w)=>{let l=j_.current,p=e_.current,T0=w.target;if(l&&l.contains(T0))return;if(p&&p.contains(T0))return;S0(!1)};return document.addEventListener("pointerdown",F),()=>document.removeEventListener("pointerdown",F)},[L0]),v(()=>{if(!J0)return;let F=(w)=>{let l=p_.current,p=M1.current,T0=w.target;if(l&&l.contains(T0))return;if(p&&p.contains(T0))return;j0(!1)};return document.addEventListener("pointerdown",F),()=>document.removeEventListener("pointerdown",F)},[J0]),v(()=>{if(j||!L0&&!J0)return;let F=(w)=>{k(w)};return document.addEventListener("keydown",F,!0),()=>document.removeEventListener("keydown",F,!0)},[j,L0,J0,k]),v(()=>{if(!L0)return;let F=j_.current;F?.focus?.(),F?.querySelector?.(".compose-model-popup-item.active")?.scrollIntoView?.({block:"nearest"})},[L0,X0,y]),v(()=>{if(!J0)return;let F=p_.current;F?.focus?.(),F?.querySelector?.(".compose-model-popup-item.active")?.scrollIntoView?.({block:"nearest"})},[J0,g0,D1.length]),v(()=>{let F=()=>{let H1=a1.current?.clientWidth||0;w_((P1)=>P1===H1?P1:H1)};F();let w=a1.current,l=0,p=()=>{if(l)cancelAnimationFrame(l);l=requestAnimationFrame(()=>{l=0,F()})},T0=null;if(w&&typeof ResizeObserver<"u")T0=new ResizeObserver(()=>p()),T0.observe(w);if(typeof window<"u")window.addEventListener("resize",p);return()=>{if(l)cancelAnimationFrame(l);if(T0?.disconnect?.(),typeof window<"u")window.removeEventListener("resize",p)}},[j,J,A1?.agent_name,u_,A?.percent]);let C5=(F)=>{let w=F.target.value;if(g1(null),J0)j0(!1);g_(F.target),X_(w)};return v(()=>{requestAnimationFrame(()=>g_())},[x0,s0,j]),v(()=>{if(!R_)return;c1(Date.now());let F=setInterval(()=>c1(Date.now()),1000);return()=>clearInterval(F)},[R_,F0?.started_at,F0?.startedAt]),v(()=>{if(j)return;t4(x0)},[l1,K0,x0,j]),B`
        <div class="compose-box">
            ${d0&&!j&&B`
                <${X3}
                    items=${b}
                    onInjectQueuedFollowup=${H}
                    onRemoveQueuedFollowup=${h}
                    onOpenFilePill=${C}
                />
            `}
            ${F0&&B`
                <div
                    class=${`compose-inline-status${R_?" compaction":""}`}
                    role="status"
                    aria-live="polite"
                    title=${f4||""}
                >
                    <div class="compose-inline-status-row">
                        <span class="compose-inline-status-dot" aria-hidden="true"></span>
                        <span class="compose-inline-status-title">${u4}</span>
                        ${Z1&&B`<span class="compose-inline-status-elapsed">${Z1}</span>`}
                    </div>
                    ${f4&&B`<div class="compose-inline-status-detail">${f4}</div>`}
                </div>
            `}
            ${$_&&B`
                <div class="compose-submit-error compose-submit-error-top" role="status" aria-live="polite">${$_}</div>
            `}
            <div
                class=${`compose-input-wrapper${B1?" drag-active":""}`}
                onDragEnter=${Q0}
                onDragOver=${G0}
                onDragLeave=${N0}
                onDrop=${$0}
            >
                <div class="compose-input-main">
                    ${z4&&B`
                        <div class="compose-file-refs">
                            ${V.map((F)=>{return B`
                                    <${h_}
                                        key=${"msg-"+F}
                                        prefix="compose"
                                        label=${"msg:"+F}
                                        title=${"Message reference: "+F}
                                        removeTitle="Remove reference"
                                        icon="message"
                                        onRemove=${()=>U?.(F)}
                                    />
                                `})}
                            ${N.map((F)=>{let w=F.split("/").pop()||F;return B`
                                    <${h_}
                                        prefix="compose"
                                        label=${w}
                                        title=${F}
                                        onClick=${()=>C?.(F)}
                                        removeTitle="Remove file"
                                        onRemove=${()=>G?.(F)}
                                    />
                                `})}
                            ${q1.map((F,w)=>{let l=F?.name||`attachment-${w+1}`;return B`
                                    <${h_}
                                        key=${l+w}
                                        prefix="compose"
                                        label=${l}
                                        title=${l}
                                        removeTitle="Remove attachment"
                                        onRemove=${()=>y1(w)}
                                    />
                                `})}
                            <button
                                type="button"
                                class="compose-clear-attachments-btn"
                                onClick=${e1}
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
                        ref=${_1}
                        placeholder=${j?"Search (Enter to run)...":"Message (Enter to send, Shift+Enter for newline)..."}
                        value=${j?s0:x0}
                        onInput=${C5}
                        onKeyDown=${R}
                        onPaste=${P0}
                        onFocus=${$}
                        onClick=${$}
                        rows="1"
                    />
                    ${I0&&m.length>0&&B`
                        <div class="slash-autocomplete" ref=${t_}>
                            ${m.map((F,w)=>B`
                                <div
                                    key=${F.chat_jid||F.agent_name}
                                    class=${`slash-item${w===z0?" active":""}`}
                                    onMouseDown=${(l)=>{l.preventDefault(),Q4(F)}}
                                    onMouseEnter=${()=>k0(w)}
                                >
                                    <span class="slash-name">@${F.agent_name}</span>
                                    <span class="slash-desc">${F.chat_jid||"Active agent"}</span>
                                </div>
                            `)}
                        </div>
                    `}
                    ${i&&t0.length>0&&B`
                        <div class="slash-autocomplete" ref=${s1}>
                            ${t0.map((F,w)=>B`
                                <div
                                    key=${F.name}
                                    class=${`slash-item${w===R0?" active":""}`}
                                    onMouseDown=${(l)=>{l.preventDefault(),j4(F)}}
                                    onMouseEnter=${()=>j1(w)}
                                >
                                    <span class="slash-name">${F.name}</span>
                                    <span class="slash-desc">${F.description}</span>
                                </div>
                            `)}
                        </div>
                    `}
                    ${L0&&!j&&B`
                        <div class="compose-model-popup" ref=${j_} tabIndex="-1" onKeyDown=${k}>
                            <div class="compose-model-popup-title">Select model</div>
                            <div class="compose-model-popup-menu" role="menu" aria-label="Model picker">
                                ${N1&&B`
                                    <div class="compose-model-popup-empty">Loading models…</div>
                                `}
                                ${!N1&&y.length===0&&B`
                                    <div class="compose-model-popup-empty">No models available.</div>
                                `}
                                ${!N1&&y.map((F,w)=>B`
                                    <button
                                        key=${F}
                                        type="button"
                                        role="menuitem"
                                        class=${`compose-model-popup-item${X0===w?" active":""}${J===F?" current-model":""}`}
                                        onClick=${()=>{Y4(F)}}
                                        disabled=${C0}
                                    >
                                        ${F}
                                    </button>
                                `)}
                            </div>
                            <div class="compose-model-popup-actions">
                                <button
                                    type="button"
                                    class="compose-model-popup-btn"
                                    onClick=${()=>{_5()}}
                                    disabled=${C0}
                                >
                                    Next model
                                </button>
                            </div>
                        </div>
                    `}
                    ${J0&&!j&&B`
                        <div class="compose-model-popup" ref=${p_} tabIndex="-1" onKeyDown=${k}>
                            <div class="compose-model-popup-title">Manage sessions & agents</div>
                            <div class="compose-model-popup-menu" role="menu" aria-label="Sessions and agents">
                                ${B`
                                    <div class="compose-model-popup-item current" role="note" aria-live="polite">
                                        ${(()=>{return qj(A1,K0)})()}
                                    </div>
                                `}
                                ${!Y_&&B`
                                    <div class="compose-model-popup-empty">No other sessions yet.</div>
                                `}
                                ${Y_&&G1.map((F,w)=>{let l=Boolean(F.archived_at),T0=F.chat_jid!==(F.root_chat_jid||F.chat_jid)&&!F.is_active&&!l&&typeof n0==="function",H1=l8(F,{currentChatJid:K0});return B`
                                        <div key=${F.chat_jid} class=${`compose-model-popup-item-row${l?" archived":""}`}>
                                            <button
                                                type="button"
                                                role="menuitem"
                                                class=${`compose-model-popup-item${l?" archived":""}${g0===w?" active":""}`}
                                                onClick=${()=>{if(l){J4(F.chat_jid);return}H4(F.chat_jid)}}
                                                disabled=${l?!K_:!q_}
                                                title=${l?`Restore archived ${`@${F.agent_name}`}`:`Switch to ${`@${F.agent_name}`}`}
                                            >
                                                ${H1}
                                            </button>
                                            ${T0&&B`
                                                <button
                                                    type="button"
                                                    class="compose-model-popup-item-delete"
                                                    title="Delete this branch"
                                                    aria-label=${`Delete @${F.agent_name}`}
                                                    onClick=${(P1)=>{P1.stopPropagation(),j0(!1),n0(F.chat_jid)}}
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
                            ${(v1||m1||N_)&&B`
                                <div class="compose-model-popup-actions">
                                    ${v1&&B`
                                        <button
                                            type="button"
                                            class=${`compose-model-popup-btn primary${D1.findIndex((F)=>F.key==="action:new")===g0?" active":""}`}
                                            onClick=${()=>{e4()}}
                                            title="Create a new agent/session branch from this chat"
                                        >
                                            New
                                        </button>
                                    `}
                                    ${m1&&B`
                                        <button
                                            type="button"
                                            class=${`compose-model-popup-btn${D1.findIndex((F)=>F.key==="action:rename")===g0?" active":""}`}
                                            onClick=${(F)=>{O4(F)}}
                                            title="Rename the current branch handle"
                                            disabled=${c_}
                                        >
                                            Rename current…
                                        </button>
                                    `}
                                    ${N_&&B`
                                        <button
                                            type="button"
                                            class=${`compose-model-popup-btn danger${D1.findIndex((F)=>F.key==="action:delete")===g0?" active":""}`}
                                            onClick=${()=>{G_()}}
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
                <div class="compose-footer" ref=${a1}>
                    ${!j&&J&&B`
                    <div class="compose-meta-row">
                        ${!j&&J&&B`
                            <div class="compose-model-meta">
                                <button
                                    ref=${e_}
                                    type="button"
                                    class="compose-model-hint compose-model-hint-btn"
                                    title=${g4}
                                    aria-label="Open model picker"
                                    onClick=${$5}
                                    disabled=${C0}
                                >
                                    ${C0?"Switching…":z1}
                                </button>
                                <div class="compose-model-meta-subline">
                                    ${!C0&&M_&&B`
                                        <span class="compose-model-usage-hint" title=${g4}>
                                            ${M_}
                                        </span>
                                    `}
                                </div>
                            </div>
                        `}
                        ${!j&&A&&A.percent!=null&&B`
                            <${tN} usage=${A} onCompact=${A4} />
                        `}
                    </div>
                    `}
                    <div class="compose-actions ${j?"search-mode":""}">
                    ${u_&&B`
                        ${A1?.agent_name&&B`
                            <button
                                type="button"
                                class="compose-current-agent-label active"
                                title=${A1.chat_jid||K0}
                                aria-label=${`Manage sessions for @${A1.agent_name}`}
                                onClick=${n1}
                            >@${A1.agent_name}</button>
                        `}
                        <button
                            ref=${M1}
                            type="button"
                            class=${`icon-btn compose-mention-btn${J0?" active":""}`}
                            onClick=${n1}
                            title=${J0?"Hide session manager":"Manage Sessions/Agents"}
                            aria-label="Manage Sessions/Agents"
                            aria-expanded=${J0?"true":"false"}
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
                                onChange=${(F)=>Y?.(F.currentTarget.value)}
                            >
                                <option value="current">Current</option>
                                <option value="root">Branch family</option>
                                <option value="all">All chats</option>
                            </select>
                        </label>
                    `}
                    <button
                        class="icon-btn search-toggle"
                        onClick=${j?K:q}
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
                    ${_4&&!j&&B`
                        <button
                            class="icon-btn location-btn"
                            onClick=${h1}
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
                            class=${`icon-btn notification-btn${D_?" active":""}`}
                            onClick=${c}
                            title=${x1}
                            type="button"
                        >
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M18 8a6 6 0 1 0-12 0c0 7-3 9-3 9h18s-3-2-3-9" />
                                <path d="M13.73 21a2 2 0 0 1-3.46 0" />
                            </svg>
                        </button>
                    `}
                    ${!j&&B`
                        ${I&&z&&B`
                            <button
                                class="icon-btn attach-editor-btn"
                                onClick=${z}
                                title=${`Attach open file: ${I}`}
                                type="button"
                                disabled=${N.includes(I)}
                            >
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"/><polyline points="13 2 13 9 20 9"/></svg>
                            </button>
                        `}
                        <label class="icon-btn" title="Attach file">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>
                            <input type="file" multiple hidden onChange=${n} />
                        </label>
                    `}
                    ${(B0!=="connected"||!j)&&B`
                        <div class="compose-send-stack">
                            ${B0!=="connected"&&B`
                                <span class="compose-connection-status connection-status ${B0}" title=${E_}>
                                    ${Z_}
                                </span>
                            `}
                            ${!j&&B`
                                <button 
                                    class="icon-btn send-btn" 
                                    type="button"
                                    onClick=${()=>{x_()}}
                                    disabled=${!b1}
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
    `}function AQ({session:_,onClose:$,onInject:j,onRetry:Q}){let Z=x(null),Y=x(null),q=_?.thinking?a5(_.thinking):"",K=_?.answer?H_(_.answer,null,{sanitize:!1}):"";if(v(()=>{if(Z.current&&q)W4(Z.current).catch(()=>{})},[q]),v(()=>{if(Y.current&&K)W4(Y.current).catch(()=>{})},[K]),!_)return null;let N=_.status==="running",G=Boolean(String(_.answer||"").trim()),X=Boolean(String(_.thinking||"").trim()),V=A9(_),U=D9(_),L=!N&&G,J=N?"Thinking…":_.status==="error"?"Error":"Done";return B`
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
                <details class="btw-block btw-thinking" open=${N?!0:void 0}>
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
                        dangerouslySetInnerHTML=${{__html:K}}
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
                        <button class="btw-btn btw-btn-primary" onClick=${()=>j?.()} disabled=${!L}>
                            Inject into chat
                        </button>
                    </div>
                </div>
            `}
        </section>
    `}function DQ({widget:_,onClose:$,onWidgetEvent:j}){let Q=x(null),Z=x(!1),Y=w0(()=>nj(_),[_?.artifact?.kind,_?.artifact?.html,_?.artifact?.svg,_?.widgetId,_?.toolCallId,_?.turnId,_?.title]);if(v(()=>{if(!_)return;let W=(A)=>{if(A.key==="Escape")$?.()};return document.addEventListener("keydown",W),()=>document.removeEventListener("keydown",W)},[_,$]),v(()=>{Z.current=!1},[Y]),v(()=>{if(!_)return;let W=Q.current;if(!W)return;let A=(r)=>{let P=s8(_),I=r==="widget.init"?r8(_):o8(_);try{W.name=P}catch{}try{W.contentWindow?.postMessage({__piclawGeneratedWidgetHost:!0,type:r,widgetId:_?.widgetId||null,toolCallId:_?.toolCallId||null,turnId:_?.turnId||null,payload:I},"*")}catch{}},E=()=>{A("widget.init"),A("widget.update")},f=()=>{Z.current=!0,E()};W.addEventListener("load",f);let c=[0,40,120,300,800].map((r)=>setTimeout(E,r));return()=>{W.removeEventListener("load",f),c.forEach((r)=>clearTimeout(r))}},[Y,_?.widgetId,_?.toolCallId,_?.turnId]),v(()=>{if(!_)return;let W=Q.current;if(!W?.contentWindow)return;let A=s8(_),E=o8(_);try{W.name=A}catch{}try{W.contentWindow.postMessage({__piclawGeneratedWidgetHost:!0,type:"widget.update",widgetId:_?.widgetId||null,toolCallId:_?.toolCallId||null,turnId:_?.turnId||null,payload:E},"*")}catch{}return},[_?.widgetId,_?.toolCallId,_?.turnId,_?.status,_?.subtitle,_?.description,_?.error,_?.width,_?.height,_?.runtimeState]),v(()=>{if(!_)return;let W=(A)=>{let E=A?.data;if(!E||E.__piclawGeneratedWidget!==!0)return;let f=Q.current,u=J_(_),c=J_({widgetId:E.widgetId,toolCallId:E.toolCallId});if(c&&u&&c!==u)return;if(!c&&f?.contentWindow&&A.source!==f.contentWindow)return;j?.(E,_)};return window.addEventListener("message",W),()=>window.removeEventListener("message",W)},[_,j]),!_)return null;let K=(_?.artifact||{}).kind||_?.kind||"html",N=typeof _?.title==="string"&&_.title.trim()?_.title.trim():"Generated widget",G=typeof _?.subtitle==="string"&&_.subtitle.trim()?_.subtitle.trim():"",X=_?.source==="live"?"live":"timeline",V=typeof _?.status==="string"&&_.status.trim()?_.status.trim():"final",U=X==="live"?`Live widget • ${V.toUpperCase()}`:_?.originPostId?`Message #${_.originPostId}`:"Timeline launch",L=typeof _?.description==="string"&&_.description.trim()?_.description.trim():"",J=!Y,D=lj(_),O=hj(_);return B`
        <div class="floating-widget-backdrop" onClick=${()=>$?.()}>
            <section
                class="floating-widget-pane"
                aria-label=${N}
                onClick=${(W)=>W.stopPropagation()}
            >
                <div class="floating-widget-header">
                    <div class="floating-widget-heading">
                        <div class="floating-widget-eyebrow">${U} • ${K.toUpperCase()}</div>
                        <div class="floating-widget-title">${N}</div>
                        ${(G||L)&&B`
                            <div class="floating-widget-subtitle">${G||L}</div>
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
                                title=${N}
                                name=${s8(_)}
                                sandbox=${O}
                                referrerpolicy="no-referrer"
                                srcdoc=${Y}
                            ></iframe>
                        `}
                </div>
            </section>
        </div>
    `}var EQ="PiClaw";function V3(_,$,j=!1){let Q=_||"PiClaw",Z=Q.charAt(0).toUpperCase(),Y=["#FF6B6B","#4ECDC4","#45B7D1","#FFA07A","#98D8C8","#F7DC6F","#BB8FCE","#85C1E2","#F8B195","#6C5CE7","#00B894","#FDCB6E","#E17055","#74B9FF","#A29BFE","#FD79A8","#00CEC9","#FFEAA7","#DFE6E9","#FF7675","#55EFC4","#81ECEC","#FAB1A0","#74B9FF","#A29BFE","#FD79A8"],q=Z.charCodeAt(0)%Y.length,K=Y[q],N=Q.trim().toLowerCase(),G=typeof $==="string"?$.trim():"",X=G?G:null,V=j||N==="PiClaw".toLowerCase()||N==="pi";return{letter:Z,color:K,image:X||(V?"/static/icon-192.png":null)}}function kQ(_,$){if(!_)return"PiClaw";let j=$[_]?.name||_;return j?j.charAt(0).toUpperCase()+j.slice(1):"PiClaw"}function MQ(_,$){if(!_)return null;let j=$[_]||{};return j.avatar_url||j.avatarUrl||j.avatar||null}function IQ(_){if(!_)return null;if(typeof document<"u"){let Y=document.documentElement,q=Y?.dataset?.colorTheme||"",K=Y?.dataset?.tint||"",N=getComputedStyle(Y).getPropertyValue("--accent-color")?.trim();if(N&&(K||q&&q!=="default"))return N}let $=["#4ECDC4","#FF6B6B","#45B7D1","#BB8FCE","#FDCB6E","#00B894","#74B9FF","#FD79A8","#81ECEC","#FFA07A"],j=String(_),Q=0;for(let Y=0;Y<j.length;Y+=1)Q=(Q*31+j.charCodeAt(Y))%2147483647;let Z=Math.abs(Q)%$.length;return $[Z]}var jG=B`
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <rect x="9" y="9" width="10" height="10" rx="2"></rect>
        <path d="M7 15H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2v1"></path>
    </svg>
`;function U3({status:_,draft:$,plan:j,thought:Q,pendingRequest:Z,intent:Y,extensionPanels:q=[],pendingPanelActions:K=new Set,onExtensionPanelAction:N,turnId:G,steerQueued:X,onPanelToggle:V,showCorePanels:U=!0,showExtensionPanels:L=!0}){let O=(i)=>{if(!i)return{text:"",totalLines:0,fullText:""};if(typeof i==="string"){let z0=i,k0=z0?z0.replace(/\r\n/g,`
`).split(`
`).length:0;return{text:z0,totalLines:k0,fullText:z0}}let Y0=i.text||"",m=i.fullText||i.full_text||Y0,d=Number.isFinite(i.totalLines)?i.totalLines:m?m.replace(/\r\n/g,`
`).split(`
`).length:0;return{text:Y0,totalLines:d,fullText:m}},W=160,A=(i)=>String(i||"").replace(/<\/?internal>/gi,""),E=(i)=>{if(!i)return 1;return Math.max(1,Math.ceil(i.length/160))},f=(i,Y0,m)=>{let d=(i||"").replace(/\r\n/g,`
`).replace(/\r/g,`
`);if(!d)return{text:"",omitted:0,totalLines:Number.isFinite(m)?m:0,visibleLines:0};let z0=d.split(`
`),k0=z0.length>Y0?z0.slice(0,Y0).join(`
`):d,I0=Number.isFinite(m)?m:z0.reduce((v0,L0)=>v0+E(L0),0),H0=k0?k0.split(`
`).reduce((v0,L0)=>v0+E(L0),0):0,C0=Math.max(I0-H0,0);return{text:k0,omitted:C0,totalLines:I0,visibleLines:H0}},u=O(j),c=O(Q),r=O($),P=Boolean(u.text)||u.totalLines>0,I=Boolean(c.text)||c.totalLines>0,z=Boolean(r.fullText?.trim()||r.text?.trim()),C=Boolean(_||z||P||I||Z||Y),b=Array.isArray(q)&&q.length>0;if((!U||!C)&&(!L||!b))return null;let[e,h]=g(new Set),[a,t]=g(null),[_0,q0]=g(()=>Date.now()),Z0=(i)=>h((Y0)=>{let m=new Set(Y0),d=!m.has(i);if(d)m.add(i);else m.delete(i);if(typeof V==="function")V(i,d);return m});v(()=>{h(new Set),t(null)},[G]);let K0=y4(_);v(()=>{if(!K0)return;q0(Date.now());let i=setInterval(()=>q0(Date.now()),1000);return()=>clearInterval(i)},[K0,_?.started_at,_?.startedAt]);let B0=_?.turn_id||G,U0=IQ(B0),f0=X?"turn-dot turn-dot-queued":"turn-dot",M0=(i)=>i,A0=Boolean(_?.last_activity||_?.lastActivity),b0=(i)=>i==="warning"?"#f59e0b":i==="error"?"var(--danger-color)":i==="success"?"var(--success-color)":U0,u0=Y?.kind||"info",p0=b0(u0),n0=b0(_?.kind||(K0?"warning":"info")),E0="",d0=_?.title,F0=_?.status;if(_?.type==="plan")E0=d0?`Planning: ${d0}`:"Planning...";else if(_?.type==="tool_call")E0=d0?`Running: ${d0}`:"Running tool...";else if(_?.type==="tool_status")E0=d0?`${d0}: ${F0||"Working..."}`:F0||"Working...";else if(_?.type==="error")E0=d0||"Agent error";else E0=d0||F0||"Working...";if(A0)E0="Last activity just now";let x0=({panelTitle:i,text:Y0,fullText:m,totalLines:d,maxLines:z0,titleClass:k0,panelKey:I0})=>{let H0=e.has(I0),C0=m||Y0||"",v0=I0==="thought"||I0==="draft"?A(C0):C0,L0=typeof z0==="number",S0=H0&&L0,J0=L0?f(v0,z0,d):{text:v0||"",omitted:0,totalLines:Number.isFinite(d)?d:0};if(!v0&&!(Number.isFinite(J0.totalLines)&&J0.totalLines>0))return null;let j0=`agent-thinking-body${L0?" agent-thinking-body-collapsible":""}`,y=L0?`--agent-thinking-collapsed-lines: ${z0};`:"";return B`
            <div
                class="agent-thinking"
                data-expanded=${H0?"true":"false"}
                data-collapsible=${L0?"true":"false"}
                style=${U0?`--turn-color: ${U0};`:""}
            >
                <div class="agent-thinking-title ${k0||""}">
                    ${U0&&B`<span class=${f0} aria-hidden="true"></span>`}
                    ${i}
                    ${S0&&B`
                        <button
                            class="agent-thinking-close"
                            aria-label=${`Close ${i} panel`}
                            onClick=${()=>Z0(I0)}
                        >
                            ×
                        </button>
                    `}
                </div>
                <div
                    class=${j0}
                    style=${y}
                    dangerouslySetInnerHTML=${{__html:a5(v0)}}
                />
                ${!H0&&J0.omitted>0&&B`
                    <button class="agent-thinking-truncation" onClick=${()=>Z0(I0)}>
                        ▸ ${J0.omitted} more lines
                    </button>
                `}
                ${H0&&J0.omitted>0&&B`
                    <button class="agent-thinking-truncation" onClick=${()=>Z0(I0)}>
                        ▴ show less
                    </button>
                `}
            </div>
        `},i0=Z?.tool_call?.title,s0=i0?`Awaiting approval: ${i0}`:"Awaiting approval",R1=K0?h8(_,_0):null,q1=(i,Y0,m=null)=>{let d=m8(i);return B`
            <div
                class="agent-thinking agent-thinking-intent"
                aria-live="polite"
                style=${Y0?`--turn-color: ${Y0};`:""}
                title=${i?.detail||""}
            >
                <div class="agent-thinking-title intent">
                    ${Y0&&B`<span class=${f0} aria-hidden="true"></span>`}
                    <span class="agent-thinking-title-text">${d}</span>
                    ${m&&B`<span class="agent-status-elapsed">${m}</span>`}
                </div>
                ${i.detail&&B`<div class="agent-thinking-body">${i.detail}</div>`}
            </div>
        `},l0=(i,Y0,m,d,z0,k0,I0,H0=8,C0=8)=>{let v0=Math.max(z0-d,0.000000001),L0=Math.max(Y0-H0*2,1),S0=Math.max(m-C0*2,1),J0=Math.max(I0-k0,1),j0=I0===k0?Y0/2:H0+(i.run-k0)/J0*L0,y=C0+(S0-(i.value-d)/v0*S0);return{x:j0,y}},B1=(i,Y0,m,d,z0,k0,I0,H0=8,C0=8)=>{if(!Array.isArray(i)||i.length===0)return"";return i.map((v0,L0)=>{let{x:S0,y:J0}=l0(v0,Y0,m,d,z0,k0,I0,H0,C0);return`${L0===0?"M":"L"} ${S0.toFixed(2)} ${J0.toFixed(2)}`}).join(" ")},Q1=(i,Y0="")=>{if(!Number.isFinite(i))return"—";return`${Math.abs(i)>=100?i.toFixed(0):i.toFixed(2).replace(/\.0+$/,"").replace(/(\.\d*[1-9])0+$/,"$1")}${Y0}`},t0=["var(--accent-color)","var(--success-color)","var(--warning-color, #f59e0b)","var(--danger-color)"],V0=(i,Y0)=>{let m=t0;if(!Array.isArray(m)||m.length===0)return"var(--accent-color)";if(m.length===1||!Number.isFinite(Y0)||Y0<=1)return m[0];let z0=Math.max(0,Math.min(Number.isFinite(i)?i:0,Y0-1))/Math.max(1,Y0-1)*(m.length-1),k0=Math.floor(z0),I0=Math.min(m.length-1,k0+1),H0=z0-k0,C0=m[k0],v0=m[I0];if(!v0||k0===I0||H0<=0.001)return C0;if(H0>=0.999)return v0;let L0=Math.round((1-H0)*1000)/10,S0=Math.round(H0*1000)/10;return`color-mix(in oklab, ${C0} ${L0}%, ${v0} ${S0}%)`},R0=(i,Y0="autoresearch")=>{let m=Array.isArray(i)?i.map((j0)=>({...j0,points:Array.isArray(j0?.points)?j0.points.filter((y)=>Number.isFinite(y?.value)&&Number.isFinite(y?.run)):[]})).filter((j0)=>j0.points.length>0):[],d=m.map((j0,y)=>({...j0,color:V0(y,m.length)}));if(d.length===0)return null;let z0=320,k0=120,I0=d.flatMap((j0)=>j0.points),H0=I0.map((j0)=>j0.value),C0=I0.map((j0)=>j0.run),v0=Math.min(...H0),L0=Math.max(...H0),S0=Math.min(...C0),J0=Math.max(...C0);return B`
            <div class="agent-series-chart agent-series-chart-combined">
                <div class="agent-series-chart-header">
                    <span class="agent-series-chart-title">Tracked variables</span>
                    <span class="agent-series-chart-value">${d.length} series</span>
                </div>
                <div class="agent-series-chart-plot">
                    <svg class="agent-series-chart-svg" viewBox=${`0 0 ${z0} ${k0}`} preserveAspectRatio="none" aria-hidden="true">
                        ${d.map((j0)=>{let y=j0?.key||j0?.label||"series",o=a?.panelKey===Y0&&a?.seriesKey===y;return B`
                                <g key=${y}>
                                    <path
                                        class=${`agent-series-chart-line${o?" is-hovered":""}`}
                                        d=${B1(j0.points,z0,k0,v0,L0,S0,J0)}
                                        style=${`--agent-series-color: ${j0.color};`}
                                        onMouseEnter=${()=>t({panelKey:Y0,seriesKey:y})}
                                        onMouseLeave=${()=>t((X0)=>X0?.panelKey===Y0&&X0?.seriesKey===y?null:X0)}
                                    ></path>
                                </g>
                            `})}
                    </svg>
                    <div class="agent-series-chart-points-layer">
                        ${d.flatMap((j0)=>{let y=typeof j0?.unit==="string"?j0.unit:"",o=j0?.key||j0?.label||"series";return j0.points.map((X0,O0)=>{let g0=l0(X0,z0,k0,v0,L0,S0,J0);return B`
                                    <button
                                        key=${`${o}-point-${O0}`}
                                        type="button"
                                        class="agent-series-chart-point-hit"
                                        style=${`--agent-series-color: ${j0.color}; left:${g0.x/z0*100}%; top:${g0.y/k0*100}%;`}
                                        onMouseEnter=${()=>t({panelKey:Y0,seriesKey:o,run:X0.run,value:X0.value,unit:y})}
                                        onMouseLeave=${()=>t((e0)=>e0?.panelKey===Y0?null:e0)}
                                        onFocus=${()=>t({panelKey:Y0,seriesKey:o,run:X0.run,value:X0.value,unit:y})}
                                        onBlur=${()=>t((e0)=>e0?.panelKey===Y0?null:e0)}
                                        aria-label=${`${j0?.label||"Series"} ${Q1(X0.value,y)} at run ${X0.run}`}
                                    >
                                        <span class="agent-series-chart-point"></span>
                                    </button>
                                `})})}
                    </div>
                </div>
                <div class="agent-series-legend">
                    ${d.map((j0)=>{let y=j0.points[j0.points.length-1]?.value,o=typeof j0?.unit==="string"?j0.unit:"",X0=j0?.key||j0?.label||"series",O0=a?.panelKey===Y0&&a?.seriesKey===X0?a:null,g0=O0&&Number.isFinite(O0.value)?O0.value:y,e0=O0&&typeof O0.unit==="string"?O0.unit:o,N1=O0&&Number.isFinite(O0.run)?O0.run:null;return B`
                            <div key=${`${X0}-legend`} class=${`agent-series-legend-item${O0?" is-hovered":""}`} style=${`--agent-series-color: ${j0.color};`}>
                                <span class="agent-series-legend-swatch" style=${`--agent-series-color: ${j0.color};`}></span>
                                <span class="agent-series-legend-label">${j0?.label||"Series"}</span>
                                ${N1!==null&&B`<span class="agent-series-legend-run">run ${N1}</span>`}
                                <span class="agent-series-legend-value">${Q1(g0,e0)}</span>
                            </div>
                        `})}
                </div>
            </div>
        `},j1=(i)=>{if(!i)return null;let Y0=typeof i?.key==="string"?i.key:`panel-${Math.random()}`,m=e.has(Y0),d=i?.title||"Extension status",z0=i?.collapsed_text||"",k0=String(i?.state||"").replace(/[-_]+/g," ").replace(/^./,(o)=>o.toUpperCase()),I0=b0(i?.state==="completed"?"success":i?.state==="failed"?"error":i?.state==="stopped"?"warning":"info"),H0=typeof i?.detail_markdown==="string"?i.detail_markdown.trim():"",C0=typeof i?.last_run_text==="string"?i.last_run_text.trim():"",v0=typeof i?.tmux_command==="string"?i.tmux_command.trim():"",L0=Array.isArray(i?.series)?i.series:[],S0=Array.isArray(i?.actions)?i.actions:[],J0=Boolean(H0||v0),j0=Boolean(H0||L0.length>0||v0),y=[d,z0].filter(Boolean).join(" — ");return B`
            <div
                class="agent-thinking agent-thinking-intent agent-thinking-autoresearch"
                aria-live="polite"
                data-expanded=${m?"true":"false"}
                style=${I0?`--turn-color: ${I0};`:""}
                title=${!m?y||d:""}
            >
                <div class="agent-thinking-header agent-thinking-header-inline">
                    <button
                        class="agent-thinking-title intent agent-thinking-title-clickable"
                        type="button"
                        onClick=${()=>j0?Z0(Y0):null}
                    >
                        ${I0&&B`<span class=${f0} aria-hidden="true"></span>`}
                        <span class="agent-thinking-title-text">${d}</span>
                        ${z0&&B`<span class="agent-thinking-title-meta">${z0}</span>`}
                    </button>
                    ${(S0.length>0||j0&&!m)&&B`
                        <div class="agent-thinking-tools-inline">
                            ${S0.length>0&&B`
                                <div class="agent-thinking-actions agent-thinking-actions-inline">
                                    ${S0.map((o)=>{let X0=`${Y0}:${o?.key||""}`,O0=K?.has?.(X0);return B`
                                            <button
                                                key=${X0}
                                                class=${`agent-thinking-action-btn${o?.tone==="danger"?" danger":""}`}
                                                onClick=${()=>N?.(i,o)}
                                                disabled=${Boolean(O0)}
                                            >
                                                ${O0?"Working…":o?.label||"Run"}
                                            </button>
                                        `})}
                                </div>
                            `}
                            ${j0&&!m&&B`
                                <button
                                    class="agent-thinking-corner-toggle agent-thinking-corner-toggle-inline"
                                    type="button"
                                    aria-label=${`Expand ${d}`}
                                    title="Expand details"
                                    onClick=${()=>Z0(Y0)}
                                >
                                    <svg viewBox="0 0 16 16" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                        <polyline points="4 10 8 6 12 10"></polyline>
                                    </svg>
                                </button>
                            `}
                        </div>
                    `}
                </div>
                ${j0&&m&&B`
                    <button
                        class="agent-thinking-corner-toggle"
                        type="button"
                        aria-label=${`Collapse ${d}`}
                        title="Collapse details"
                        onClick=${()=>Z0(Y0)}
                    >
                        <svg viewBox="0 0 16 16" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                            <polyline points="4 6 8 10 12 6"></polyline>
                        </svg>
                    </button>
                `}
                ${m&&B`
                    <div class=${`agent-thinking-autoresearch-layout${J0?"":" chart-only"}`}>
                        ${J0&&B`
                            <div class="agent-thinking-autoresearch-meta-stack">
                                ${H0&&B`
                                    <div
                                        class="agent-thinking-body agent-thinking-autoresearch-detail"
                                        dangerouslySetInnerHTML=${{__html:a5(H0)}}
                                    />
                                `}
                                ${v0&&B`
                                    <div class="agent-series-chart-command">
                                        <div class="agent-series-chart-command-header">
                                            <span>Attach to session</span>
                                        </div>
                                        <div class="agent-series-chart-command-shell">
                                            <pre class="agent-series-chart-command-code">${v0}</pre>
                                            <button
                                                type="button"
                                                class="agent-series-chart-command-copy"
                                                aria-label="Copy tmux command"
                                                title="Copy tmux command"
                                                onClick=${()=>N?.(i,{key:"copy_tmux",action_type:"autoresearch.copy_tmux",label:"Copy tmux"})}
                                            >
                                                ${jG}
                                            </button>
                                        </div>
                                    </div>
                                `}
                            </div>
                        `}
                        ${L0.length>0?B`
                                <div class="agent-series-chart-stack">
                                    ${R0(L0,Y0)}
                                    ${C0&&B`<div class="agent-series-chart-note">${C0}</div>`}
                                </div>
                            `:B`<div class="agent-thinking-body agent-thinking-autoresearch-summary">Variable history will appear after the first completed run.</div>`}
                    </div>
                `}
            </div>
        `};return B`
        <div class="agent-status-panel">
            ${U&&Y&&q1(Y,p0)}
            ${L&&Array.isArray(q)&&q.map((i)=>j1(i))}
            ${U&&_?.type==="intent"&&q1(_,n0,R1)}
            ${U&&Z&&B`
                <div class="agent-status agent-status-request" aria-live="polite" style=${U0?`--turn-color: ${U0};`:""}>
                    <span class=${f0} aria-hidden="true"></span>
                    <div class="agent-status-spinner"></div>
                    <span class="agent-status-text">${s0}</span>
                </div>
            `}
            ${U&&P&&x0({panelTitle:M0("Planning"),text:u.text,fullText:u.fullText,totalLines:u.totalLines,panelKey:"plan"})}
            ${U&&I&&x0({panelTitle:M0("Thoughts"),text:c.text,fullText:c.fullText,totalLines:c.totalLines,maxLines:8,titleClass:"thought",panelKey:"thought"})}
            ${U&&z&&x0({panelTitle:M0("Draft"),text:r.text,fullText:r.fullText,totalLines:r.totalLines,maxLines:8,titleClass:"thought",panelKey:"draft"})}
            ${U&&_&&_?.type!=="intent"&&B`
                <div class=${`agent-status${A0?" agent-status-last-activity":""}${_?.type==="error"?" agent-status-error":""}`} aria-live="polite" style=${U0?`--turn-color: ${U0};`:""}>
                    ${U0&&B`<span class=${f0} aria-hidden="true"></span>`}
                    ${_?.type==="error"?B`<span class="agent-status-error-icon" aria-hidden="true">⚠</span>`:!A0&&B`<div class="agent-status-spinner"></div>`}
                    <span class="agent-status-text">${E0}</span>
                </div>
            `}
        </div>
    `}function xQ({request:_,onRespond:$}){if(!_)return null;let{request_id:j,tool_call:Q,options:Z,chat_jid:Y}=_,q=Q?.title||"Agent Request",K=Q?.kind||"other",N=Q?.rawInput||{},G=N.command||N.commands&&N.commands[0]||null,X=N.diff||null,V=N.fileName||N.path||null,U=Q?.description||N.description||N.explanation||null,J=(Array.isArray(Q?.locations)?Q.locations:[]).map((E)=>E?.path).filter((E)=>Boolean(E)),D=Array.from(new Set([V,...J].filter(Boolean)));console.log("AgentRequestModal:",{request_id:j,tool_call:Q,options:Z});let O=async(E)=>{try{await A8(j,E,Y||null),$()}catch(f){console.error("Failed to respond to agent request:",f)}},W=async()=>{try{await b6(q,`Auto-approved: ${q}`),await A8(j,"approved",Y||null),$()}catch(E){console.error("Failed to add to whitelist:",E)}},A=Z&&Z.length>0;return B`
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
                                    ${D.map((E,f)=>B`<li key=${f}>${E}</li>`)}
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
                    ${A?Z.map((E)=>B`
                            <button 
                                key=${E.optionId||E.id||String(E)}
                                class="agent-request-btn ${E.kind==="allow_once"||E.kind==="allow_always"?"primary":""}"
                                onClick=${()=>O(E.optionId||E.id||E)}
                            >
                                ${E.name||E.label||E.optionId||E.id||String(E)}
                            </button>
                        `):B`
                        <button class="agent-request-btn primary" onClick=${()=>O("approved")}>
                            Allow
                        </button>
                        <button class="agent-request-btn" onClick=${()=>O("denied")}>
                            Deny
                        </button>
                        <button class="agent-request-btn always-allow" onClick=${W}>
                            Always Allow This
                        </button>
                    `}
                </div>
            </div>
        </div>
    `}var QG=new Set(["application/json","application/xml","text/csv","text/html","text/markdown","text/plain","text/xml"]),ZG=new Set(["text/markdown"]),YG=new Set(["application/msword","application/rtf","application/vnd.ms-excel","application/vnd.ms-powerpoint","application/vnd.oasis.opendocument.presentation","application/vnd.oasis.opendocument.spreadsheet","application/vnd.oasis.opendocument.text","application/vnd.openxmlformats-officedocument.presentationml.presentation","application/vnd.openxmlformats-officedocument.spreadsheetml.sheet","application/vnd.openxmlformats-officedocument.wordprocessingml.document"]),qG=new Set(["application/vnd.jgraph.mxfile"]);function j8(_){return typeof _==="string"?_.trim().toLowerCase():""}function KG(_){let $=j8(_);return!!$&&($.endsWith(".drawio")||$.endsWith(".drawio.xml")||$.endsWith(".drawio.svg")||$.endsWith(".drawio.png"))}function NG(_){let $=j8(_);return!!$&&$.endsWith(".pdf")}function GG(_){let $=j8(_);return!!$&&($.endsWith(".docx")||$.endsWith(".doc")||$.endsWith(".odt")||$.endsWith(".rtf")||$.endsWith(".xlsx")||$.endsWith(".xls")||$.endsWith(".ods")||$.endsWith(".pptx")||$.endsWith(".ppt")||$.endsWith(".odp"))}function Q8(_,$){let j=j8(_);if(KG($)||qG.has(j))return"drawio";if(NG($)||j==="application/pdf")return"pdf";if(GG($)||YG.has(j))return"office";if(!j)return"unsupported";if(j.startsWith("image/"))return"image";if(QG.has(j)||j.startsWith("text/"))return"text";return"unsupported"}function TQ(_){let $=j8(_);return ZG.has($)}function CQ(_){switch(_){case"image":return"Image preview";case"pdf":return"PDF preview";case"office":return"Office viewer";case"drawio":return"Draw.io preview (read-only)";case"text":return"Text preview";default:return"Preview unavailable"}}function XG(_){let j=String(_||"").trim().match(/^#([0-9a-f]{3}|[0-9a-f]{6})$/i);if(!j)return null;let Q=j[1].length===3?j[1].split("").map((Z)=>`${Z}${Z}`).join(""):j[1];return{r:parseInt(Q.slice(0,2),16),g:parseInt(Q.slice(2,4),16),b:parseInt(Q.slice(4,6),16)}}function VG(_){let j=String(_||"").trim().match(/^rgba?\((\d+)[,\s]+(\d+)[,\s]+(\d+)/i);if(!j)return null;let Q=Number(j[1]),Z=Number(j[2]),Y=Number(j[3]);if(![Q,Z,Y].every((q)=>Number.isFinite(q)))return null;return{r:Q,g:Z,b:Y}}function PQ(_){return XG(_)||VG(_)}function $6(_){let $=(Y)=>{let q=Y/255;return q<=0.03928?q/12.92:((q+0.055)/1.055)**2.4},j=$(_.r),Q=$(_.g),Z=$(_.b);return 0.2126*j+0.7152*Q+0.0722*Z}function UG(_,$){let j=Math.max($6(_),$6($)),Q=Math.min($6(_),$6($));return(j+0.05)/(Q+0.05)}function LG(_,$,j="#ffffff"){let Q=PQ(_);if(!Q)return j;let Z=j,Y=-1;for(let q of $){let K=PQ(q);if(!K)continue;let N=UG(Q,K);if(N>Y)Z=q,Y=N}return Z}function L3(){let _=getComputedStyle(document.documentElement),$=(J,D)=>{for(let O of J){let W=_.getPropertyValue(O).trim();if(W)return W}return D},j=$(["--text-primary","--color-text"],"#0f1419"),Q=$(["--text-secondary","--color-text-muted"],"#536471"),Z=$(["--bg-primary","--color-bg-primary"],"#ffffff"),Y=$(["--bg-secondary","--color-bg-secondary"],"#f7f9fa"),q=$(["--bg-hover","--bg-tertiary","--color-bg-tertiary"],"#e8ebed"),K=$(["--accent-color","--color-accent"],"#1d9bf0"),N=$(["--success-color","--color-success"],"#00ba7c"),G=$(["--warning-color","--color-warning","--accent-color"],"#f0b429"),X=$(["--danger-color","--color-error"],"#f4212e"),V=$(["--border-color","--color-border"],"#eff3f4"),U=$(["--font-family"],"system-ui, sans-serif"),L=LG(K,[j,Z],j);return{fg:j,fgMuted:Q,bgPrimary:Z,bg:Y,bgEmphasis:q,accent:K,good:N,warning:G,attention:X,border:V,fontFamily:U,buttonTextColor:L}}function yQ(){let{fg:_,fgMuted:$,bg:j,bgEmphasis:Q,accent:Z,good:Y,warning:q,attention:K,border:N,fontFamily:G}=L3();return{fontFamily:G,containerStyles:{default:{backgroundColor:j,foregroundColors:{default:{default:_,subtle:$},accent:{default:Z,subtle:Z},good:{default:Y,subtle:Y},warning:{default:q,subtle:q},attention:{default:K,subtle:K}}},emphasis:{backgroundColor:Q,foregroundColors:{default:{default:_,subtle:$},accent:{default:Z,subtle:Z},good:{default:Y,subtle:Y},warning:{default:q,subtle:q},attention:{default:K,subtle:K}}}},actions:{actionsOrientation:"horizontal",actionAlignment:"left",buttonSpacing:8,maxActions:5,showCard:{actionMode:"inline"},spacing:"default"},adaptiveCard:{allowCustomStyle:!1},spacing:{small:4,default:8,medium:12,large:16,extraLarge:24,padding:12},separator:{lineThickness:1,lineColor:N},fontSizes:{small:12,default:14,medium:16,large:18,extraLarge:22},fontWeights:{lighter:300,default:400,bolder:600},imageSizes:{small:40,medium:80,large:120},textBlock:{headingLevel:2}}}var BG=new Set(["1.0","1.1","1.2","1.3","1.4","1.5","1.6"]),SQ=!1,j6=null,wQ=!1;function B3(_){_.querySelector(".adaptive-card-notice")?.remove()}function WG(_,$,j="error"){B3(_);let Q=document.createElement("div");Q.className=`adaptive-card-notice adaptive-card-notice-${j}`,Q.textContent=$,_.appendChild(Q)}function FG(_,$=(j)=>H_(j,null)){let j=typeof _==="string"?_:String(_??"");if(!j.trim())return{outputHtml:"",didProcess:!1};return{outputHtml:$(j),didProcess:!0}}function zG(_=($)=>H_($,null)){return($,j)=>{try{let Q=FG($,_);j.outputHtml=Q.outputHtml,j.didProcess=Q.didProcess}catch(Q){console.error("[adaptive-card] Failed to process markdown:",Q),j.outputHtml=String($??""),j.didProcess=!1}}}function HG(_){if(wQ||!_?.AdaptiveCard)return;_.AdaptiveCard.onProcessMarkdown=zG(),wQ=!0}async function JG(){if(SQ)return;if(j6)return j6;return j6=new Promise((_,$)=>{let j=document.createElement("script");j.src="/static/js/vendor/adaptivecards.min.js",j.onload=()=>{SQ=!0,_()},j.onerror=()=>$(Error("Failed to load adaptivecards SDK")),document.head.appendChild(j)}),j6}function OG(){return globalThis.AdaptiveCards}function AG(_){if(!_||typeof _!=="object")return!1;let $=_;return $.type==="adaptive_card"&&typeof $.card_id==="string"&&typeof $.schema_version==="string"&&typeof $.payload==="object"&&$.payload!==null}function DG(_){return BG.has(_)}function F3(_){if(!Array.isArray(_))return[];return _.filter(AG)}function EG(_){let $=(typeof _?.getJsonTypeName==="function"?_.getJsonTypeName():"")||_?.constructor?.name||"Unknown",j=(typeof _?.title==="string"?_.title:"")||"",Q=(typeof _?.url==="string"?_.url:"")||void 0,Z=_?.data??void 0;return{type:$,title:j,data:Z,url:Q,raw:_}}function W3(_){if(_==null)return"";if(typeof _==="string")return _.trim();if(typeof _==="number")return String(_);if(typeof _==="boolean")return _?"yes":"no";if(Array.isArray(_))return _.map(($)=>W3($)).filter(Boolean).join(", ");if(typeof _==="object")return Object.entries(_).map(([j,Q])=>`${j}: ${W3(Q)}`).filter((j)=>!j.endsWith(": ")).join(", ");return String(_).trim()}function kG(_,$,j){if($==null)return $;if(_==="Input.Toggle"){if(typeof $==="boolean"){if($)return j?.valueOn??"true";return j?.valueOff??"false"}return typeof $==="string"?$:String($)}if(_==="Input.ChoiceSet"){if(Array.isArray($))return $.join(",");return typeof $==="string"?$:String($)}if(Array.isArray($))return $.join(", ");if(typeof $==="object")return W3($);return typeof $==="string"?$:String($)}function MG(_,$){if(!_||typeof _!=="object")return _;if(!$||typeof $!=="object"||Array.isArray($))return _;let j=$,Q=(Z)=>{if(Array.isArray(Z))return Z.map((K)=>Q(K));if(!Z||typeof Z!=="object")return Z;let q={...Z};if(typeof q.id==="string"&&q.id in j&&String(q.type||"").startsWith("Input."))q.value=kG(q.type,j[q.id],q);for(let[K,N]of Object.entries(q))if(Array.isArray(N)||N&&typeof N==="object")q[K]=Q(N);return q};return Q(_)}function IG(_){_.classList.add("adaptive-card-readonly");for(let $ of Array.from(_.querySelectorAll("input, textarea, select, button"))){let j=$;try{j.setAttribute("aria-disabled","true")}catch{}try{j.setAttribute("tabindex","-1")}catch{}if("disabled"in j)try{j.disabled=!0}catch{}if("readOnly"in j)try{j.readOnly=!0}catch{}}}function xG(_){if(typeof _!=="string"||!_.trim())return"";let $=new Date(_);if(Number.isNaN($.getTime()))return"";return new Intl.DateTimeFormat(void 0,{month:"short",day:"numeric",hour:"numeric",minute:"2-digit"}).format($)}function TG(_){if(_.state==="active")return null;let $=_.state==="completed"?"Submitted":_.state==="cancelled"?"Cancelled":"Failed",j=_.last_submission&&typeof _.last_submission==="object"?_.last_submission:null,Q=j&&typeof j.title==="string"?j.title.trim():"",Z=xG(_.completed_at||j?.submitted_at),Y=[Q||null,Z||null].filter(Boolean).join(" · ")||null;return{label:$,detail:Y}}async function RQ(_,$,j){if(!DG($.schema_version))return console.warn(`[adaptive-card] Unsupported schema version ${$.schema_version} for card ${$.card_id}`),!1;try{await JG()}catch(Q){return console.error("[adaptive-card] Failed to load SDK:",Q),!1}try{let Q=OG();HG(Q);let Z=new Q.AdaptiveCard,Y=L3();Z.hostConfig=new Q.HostConfig(yQ());let q=$.last_submission&&typeof $.last_submission==="object"?$.last_submission.data:void 0,K=$.state==="active"?$.payload:MG($.payload,q);Z.parse(K),Z.onExecuteAction=(X)=>{let V=EG(X);if(j?.onAction)B3(_),_.classList.add("adaptive-card-busy"),Promise.resolve(j.onAction(V)).catch((U)=>{console.error("[adaptive-card] Action failed:",U);let L=U instanceof Error?U.message:String(U||"Action failed.");WG(_,L||"Action failed.","error")}).finally(()=>{_.classList.remove("adaptive-card-busy")});else console.log("[adaptive-card] Action executed (not wired yet):",V)};let N=Z.render();if(!N)return console.warn(`[adaptive-card] Card ${$.card_id} rendered to null`),!1;_.classList.add("adaptive-card-container"),_.style.setProperty("--adaptive-card-button-text-color",Y.buttonTextColor);let G=TG($);if(G){_.classList.add("adaptive-card-finished");let X=document.createElement("div");X.className=`adaptive-card-status adaptive-card-status-${$.state}`;let V=document.createElement("span");if(V.className="adaptive-card-status-label",V.textContent=G.label,X.appendChild(V),G.detail){let U=document.createElement("span");U.className="adaptive-card-status-detail",U.textContent=G.detail,X.appendChild(U)}_.appendChild(X)}if(B3(_),_.appendChild(N),G)IG(N);return!0}catch(Q){return console.error(`[adaptive-card] Failed to render card ${$.card_id}:`,Q),!1}}function Z8(_){if(_==null)return"";if(typeof _==="string")return _.trim();if(typeof _==="number")return String(_);if(typeof _==="boolean")return _?"yes":"no";if(Array.isArray(_))return _.map(($)=>Z8($)).filter(Boolean).join(", ");if(typeof _==="object")return Object.entries(_).filter(([$])=>!$.startsWith("__")).map(([$,j])=>`${$}: ${Z8(j)}`).filter(($)=>!$.endsWith(": ")).join(", ");return String(_).trim()}function uQ(_){if(typeof _!=="object"||_==null||Array.isArray(_))return[];return Object.entries(_).filter(([$])=>!$.startsWith("__")).map(([$,j])=>({key:$,value:Z8(j)})).filter(($)=>$.value)}function CG(_){if(!_||typeof _!=="object")return!1;let $=_;return $.type==="adaptive_card_submission"&&typeof $.card_id==="string"&&typeof $.source_post_id==="number"&&typeof $.submitted_at==="string"}function z3(_){if(!Array.isArray(_))return[];return _.filter(CG)}function fQ(_){let $=String(_.title||_.card_id||"card").trim()||"card",j=_.data;if(j==null)return`Card submission: ${$}`;if(typeof j==="string"||typeof j==="number"||typeof j==="boolean"){let Q=Z8(j);return Q?`Card submission: ${$} — ${Q}`:`Card submission: ${$}`}if(typeof j==="object"){let Z=uQ(j).map(({key:Y,value:q})=>`${Y}: ${q}`);return Z.length>0?`Card submission: ${$} — ${Z.join(", ")}`:`Card submission: ${$}`}return`Card submission: ${$}`}function vQ(_){let $=String(_.title||_.card_id||"Card submission").trim()||"Card submission",j=uQ(_.data),Q=j.length>0?j.slice(0,2).map(({key:Y,value:q})=>`${Y}: ${q}`).join(", "):Z8(_.data)||null,Z=j.length;return{title:$,summary:Q,fields:j,fieldCount:Z,submittedAt:_.submitted_at}}function M5({children:_,className:$=""}){let j=x(null);return v(()=>{if(typeof document>"u")return;let Q=document.createElement("div");if($)Q.className=$;return document.body.appendChild(Q),j.current=Q,()=>{try{x4(null,Q)}finally{if(Q.remove(),j.current===Q)j.current=null}}},[$]),R5(()=>{let Q=j.current;if(!Q)return;return x4(_,Q),()=>{x4(null,Q)}},[_]),null}function PG(_){let $=_?.metadata?.size;return[{label:"Type",value:_?.content_type||"application/octet-stream"},{label:"Size",value:typeof $==="number"?S_($):null},{label:"Added",value:_?.created_at?s4(_.created_at):null}].filter((Q)=>Q.value)}function yG(_,$,j){let Q=encodeURIComponent($||`attachment-${_}`),Z=encodeURIComponent(String(_));if(j==="pdf")return`/pdf-viewer/?media=${Z}&name=${Q}#media=${Z}&name=${Q}`;if(j==="office"){let Y=y_(_);return`/office-viewer/?url=${encodeURIComponent(Y)}&name=${Q}`}if(j==="drawio")return`/drawio/edit.html?media=${Z}&name=${Q}&readonly=1#media=${Z}&name=${Q}&readonly=1`;return null}function gQ({mediaId:_,info:$,onClose:j}){let Q=$?.filename||`attachment-${_}`,Z=w0(()=>Q8($?.content_type,Q),[$?.content_type,Q]),Y=CQ(Z),q=w0(()=>TQ($?.content_type),[$?.content_type]),[K,N]=g(Z==="text"),[G,X]=g(""),[V,U]=g(null),L=x(null),J=w0(()=>PG($),[$]),D=w0(()=>yG(_,Q,Z),[_,Q,Z]),O=w0(()=>{if(!q||!G)return"";return H_(G)},[q,G]);return v(()=>{let W=(A)=>{if(A.key==="Escape")j()};return document.addEventListener("keydown",W),()=>document.removeEventListener("keydown",W)},[j]),v(()=>{if(!L.current||!O)return;W4(L.current);return},[O]),v(()=>{let W=!1;async function A(){if(Z!=="text"){N(!1),U(null);return}N(!0),U(null);try{let E=await c6(_);if(!W)X(E)}catch{if(!W)U("Failed to load text preview.")}finally{if(!W)N(!1)}}return A(),()=>{W=!0}},[_,Z]),B`
        <${M5} className="attachment-preview-portal-root">
            <div class="image-modal attachment-preview-modal" onClick=${j}>
                <div class="attachment-preview-shell" onClick=${(W)=>{W.stopPropagation()}}>
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
                                    onClick=${(W)=>W.stopPropagation()}
                                >
                                    Open in Tab
                                </a>
                            `}
                            <a
                                href=${y_(_)}
                                download=${Q}
                                class="attachment-preview-download"
                                onClick=${(W)=>W.stopPropagation()}
                            >
                                Download
                            </a>
                            <button class="attachment-preview-close" type="button" onClick=${j}>Close</button>
                        </div>
                    </div>
                    <div class="attachment-preview-body">
                        ${K&&B`<div class="attachment-preview-state">Loading preview…</div>`}
                        ${!K&&V&&B`<div class="attachment-preview-state">${V}</div>`}
                        ${!K&&!V&&Z==="image"&&B`
                            <img class="attachment-preview-image" src=${y_(_)} alt=${Q} />
                        `}
                        ${!K&&!V&&(Z==="pdf"||Z==="office"||Z==="drawio")&&D&&B`
                            <iframe class="attachment-preview-frame" src=${D} title=${Q}></iframe>
                        `}
                        ${!K&&!V&&Z==="drawio"&&B`
                            <div class="attachment-preview-readonly-note">Draw.io preview is read-only. Editing tools are disabled in this preview.</div>
                        `}
                        ${!K&&!V&&Z==="text"&&q&&B`
                            <div
                                ref=${L}
                                class="attachment-preview-markdown post-content"
                                dangerouslySetInnerHTML=${{__html:O}}
                            />
                        `}
                        ${!K&&!V&&Z==="text"&&!q&&B`
                            <pre class="attachment-preview-text">${G}</pre>
                        `}
                        ${!K&&!V&&Z==="unsupported"&&B`
                            <div class="attachment-preview-state">
                                Preview is not available for this file type yet. You can still download it directly.
                            </div>
                        `}
                    </div>
                    <div class="attachment-preview-meta">
                        ${J.map((W)=>B`
                            <div class="attachment-preview-meta-item" key=${W.label}>
                                <span class="attachment-preview-meta-label">${W.label}</span>
                                <span class="attachment-preview-meta-value">${W.value}</span>
                            </div>
                        `)}
                    </div>
                </div>
            </div>
        </${M5}>
    `}function bQ({src:_,onClose:$}){return v(()=>{let j=(Q)=>{if(Q.key==="Escape")$()};return document.addEventListener("keydown",j),()=>document.removeEventListener("keydown",j)},[$]),B`
        <${M5} className="image-modal-portal-root">
            <div class="image-modal" onClick=${$}>
                <img src=${_} alt="Full size" />
            </div>
        </${M5}>
    `}function SG({mediaId:_,onPreview:$}){let[j,Q]=g(null);if(v(()=>{L5(_).then(Q).catch(()=>{})},[_]),!j)return null;let Z=j.filename||"file",Y=j.metadata?.size,q=Y?S_(Y):"",N=Q8(j.content_type,j.filename)==="unsupported"?"Details":"Preview";return B`
        <div class="file-attachment" onClick=${(G)=>G.stopPropagation()}>
            <a href=${y_(_)} download=${Z} class="file-attachment-main">
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
                ${N}
            </button>
        </div>
    `}function wG({attachment:_,onPreview:$}){let j=Number(_?.id),[Q,Z]=g(null);v(()=>{if(!Number.isFinite(j))return;L5(j).then(Z).catch(()=>{});return},[j]);let Y=Q?.filename||_.label||`attachment-${_.id}`,q=Number.isFinite(j)?y_(j):null,N=Q8(Q?.content_type,Q?.filename||_?.label)==="unsupported"?"Details":"Preview";return B`
        <span class="attachment-pill" title=${Y}>
            ${q?B`
                    <a href=${q} download=${Y} class="attachment-pill-main" onClick=${(G)=>G.stopPropagation()}>
                        <${h_}
                            prefix="post"
                            label=${_.label}
                            title=${Y}
                        />
                    </a>
                `:B`
                    <${h_}
                        prefix="post"
                        label=${_.label}
                        title=${Y}
                    />
                `}
            ${Number.isFinite(j)&&Q&&B`
                <button
                    class="attachment-pill-preview"
                    type="button"
                    title=${N}
                    onClick=${(G)=>{G.preventDefault(),G.stopPropagation(),$?.({mediaId:j,info:Q})}}
                >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8S1 12 1 12z"/>
                        <circle cx="12" cy="12" r="3"/>
                    </svg>
                </button>
            `}
        </span>
    `}function Q6({annotations:_}){if(!_)return null;let{audience:$,priority:j,lastModified:Q}=_,Z=Q?s4(Q):null;return B`
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
    `}function RG({block:_}){let $=_.title||_.name||_.uri,j=_.description,Q=_.size?S_(_.size):"",Z=_.mime_type||"",Y=vG(Z),q=o4(_.uri);return B`
        <a
            href=${q||"#"}
            class="resource-link"
            target=${q?"_blank":void 0}
            rel=${q?"noopener noreferrer":void 0}
            onClick=${(K)=>K.stopPropagation()}>
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
    `}function uG({block:_}){let[$,j]=g(!1),Q=_.uri||"Embedded resource",Z=_.text||"",Y=Boolean(_.data),q=_.mime_type||"";return B`
        <div class="resource-embed">
            <button class="resource-embed-toggle" onClick=${(K)=>{K.preventDefault(),K.stopPropagation(),j(!$)}}>
                ${$?"▼":"▶"} ${Q}
            </button>
            ${$&&B`
                ${Z&&B`<pre class="resource-embed-content">${Z}</pre>`}
                ${Y&&B`
                    <div class="resource-embed-blob">
                        <span class="resource-embed-blob-label">Embedded blob</span>
                        ${q&&B`<span class="resource-embed-blob-meta">${q}</span>`}
                        <button class="resource-embed-blob-btn" onClick=${(K)=>{K.preventDefault(),K.stopPropagation();let N=new Blob([Uint8Array.from(atob(_.data),(V)=>V.charCodeAt(0))],{type:q||"application/octet-stream"}),G=URL.createObjectURL(N),X=document.createElement("a");X.href=G,X.download=Q.split("/").pop()||"resource",X.click(),URL.revokeObjectURL(G)}}>Download</button>
                    </div>
                `}
            `}
        </div>
    `}function fG({block:_,post:$,onOpenWidget:j}){if(!_)return null;let Q=_3(_,$),Z=bj(_),Y=Q?.artifact?.kind||_?.artifact?.kind||_?.kind||null,q=Q?.title||_.title||_.name||"Generated widget",K=Q?.description||_.description||_.subtitle||"",N=_.open_label||"Open widget",G=(X)=>{if(X.preventDefault(),X.stopPropagation(),!Q)return;j?.(Q)};return B`
        <div class="generated-widget-launch" onClick=${(X)=>X.stopPropagation()}>
            <div class="generated-widget-launch-header">
                <div class="generated-widget-launch-eyebrow">Generated widget${Y?` • ${String(Y).toUpperCase()}`:""}</div>
                <div class="generated-widget-launch-title">${q}</div>
            </div>
            ${K&&B`<div class="generated-widget-launch-description">${K}</div>`}
            <div class="generated-widget-launch-actions">
                <button
                    class="generated-widget-launch-btn"
                    type="button"
                    disabled=${!Z}
                    onClick=${G}
                    title=${Z?"Open widget in a floating pane":"Unsupported widget artifact"}
                >
                    ${N}
                </button>
                <span class="generated-widget-launch-note">
                    ${Z?"Opens in a dismissible floating pane.":"This widget artifact is missing or unsupported."}
                </span>
            </div>
        </div>
    `}function vG(_){if(!_)return"\uD83D\uDCCE";if(_.startsWith("image/"))return"\uD83D\uDDBC️";if(_.startsWith("audio/"))return"\uD83C\uDFB5";if(_.startsWith("video/"))return"\uD83C\uDFAC";if(_.includes("pdf"))return"\uD83D\uDCC4";if(_.includes("zip")||_.includes("gzip"))return"\uD83D\uDDDC️";if(_.startsWith("text/"))return"\uD83D\uDCC4";return"\uD83D\uDCCE"}function gG({preview:_}){let $=o4(_.url),j=o4(_.image,{allowDataImage:!0}),Q=j?`background-image: url('${j}')`:"",Z=_.site_name;if(!Z&&$)try{Z=new URL($).hostname}catch{Z=$}return B`
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
    `}function bG(_,$){return typeof _==="string"?_:""}var mG=1800,hG=`
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <rect x="9" y="9" width="10" height="10" rx="2"></rect>
        <path d="M7 15H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2v1"></path>
    </svg>`,pG=`
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <path d="M20 6L9 17l-5-5"></path>
    </svg>`,cG=`
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <circle cx="12" cy="12" r="9"></circle>
        <path d="M9 9l6 6M15 9l-6 6"></path>
    </svg>`;async function lG(_){let $=typeof _==="string"?_:"";if(!$)return!1;if(navigator.clipboard?.writeText)try{return await navigator.clipboard.writeText($),!0}catch{}try{let j=document.createElement("textarea");j.value=$,j.setAttribute("readonly",""),j.style.position="fixed",j.style.opacity="0",j.style.pointerEvents="none",document.body.appendChild(j),j.select(),j.setSelectionRange(0,j.value.length);let Q=document.execCommand("copy");return document.body.removeChild(j),Q}catch{return!1}}function nG(_){if(!_)return()=>{};let $=Array.from(_.querySelectorAll("pre")).filter((Y)=>Y.querySelector("code"));if($.length===0)return()=>{};let j=new Map,Q=[],Z=(Y,q)=>{let K=q||"idle";if(Y.dataset.copyState=K,K==="success")Y.innerHTML=pG,Y.setAttribute("aria-label","Copied"),Y.setAttribute("title","Copied"),Y.classList.add("is-success"),Y.classList.remove("is-error");else if(K==="error")Y.innerHTML=cG,Y.setAttribute("aria-label","Copy failed"),Y.setAttribute("title","Copy failed"),Y.classList.add("is-error"),Y.classList.remove("is-success");else Y.innerHTML=hG,Y.setAttribute("aria-label","Copy code"),Y.setAttribute("title","Copy code"),Y.classList.remove("is-success","is-error")};return $.forEach((Y)=>{let q=document.createElement("div");q.className="post-code-block",Y.parentNode?.insertBefore(q,Y),q.appendChild(Y);let K=document.createElement("button");K.type="button",K.className="post-code-copy-btn",Z(K,"idle"),q.appendChild(K);let N=async(G)=>{G.preventDefault(),G.stopPropagation();let V=Y.querySelector("code")?.textContent||"",U=await lG(V);Z(K,U?"success":"error");let L=j.get(K);if(L)clearTimeout(L);let J=setTimeout(()=>{Z(K,"idle"),j.delete(K)},mG);j.set(K,J)};K.addEventListener("click",N),Q.push(()=>{K.removeEventListener("click",N);let G=j.get(K);if(G)clearTimeout(G);if(q.parentNode)q.parentNode.insertBefore(Y,q),q.remove()})}),()=>{Q.forEach((Y)=>Y())}}function dG(_){if(!_)return{content:_,fileRefs:[]};let j=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),Q=-1;for(let G=0;G<j.length;G+=1)if(j[G].trim()==="Files:"&&j[G+1]&&/^\s*-\s+/.test(j[G+1])){Q=G;break}if(Q===-1)return{content:_,fileRefs:[]};let Z=[],Y=Q+1;for(;Y<j.length;Y+=1){let G=j[Y];if(/^\s*-\s+/.test(G))Z.push(G.replace(/^\s*-\s+/,"").trim());else if(!G.trim())break;else break}if(Z.length===0)return{content:_,fileRefs:[]};let q=j.slice(0,Q),K=j.slice(Y),N=[...q,...K].join(`
`);return N=N.replace(/\n{3,}/g,`

`).trim(),{content:N,fileRefs:Z}}function iG(_){if(!_)return{content:_,messageRefs:[]};let j=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),Q=-1;for(let G=0;G<j.length;G+=1)if(j[G].trim()==="Referenced messages:"&&j[G+1]&&/^\s*-\s+/.test(j[G+1])){Q=G;break}if(Q===-1)return{content:_,messageRefs:[]};let Z=[],Y=Q+1;for(;Y<j.length;Y+=1){let G=j[Y];if(/^\s*-\s+/.test(G)){let V=G.replace(/^\s*-\s+/,"").trim().match(/^message:(\S+)$/i);if(V)Z.push(V[1])}else if(!G.trim())break;else break}if(Z.length===0)return{content:_,messageRefs:[]};let q=j.slice(0,Q),K=j.slice(Y),N=[...q,...K].join(`
`);return N=N.replace(/\n{3,}/g,`

`).trim(),{content:N,messageRefs:Z}}function rG(_){if(!_)return{content:_,attachments:[]};let j=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),Q=-1;for(let G=0;G<j.length;G+=1){let X=j[G].trim();if((X==="Images:"||X==="Attachments:")&&j[G+1]&&/^\s*-\s+/.test(j[G+1])){Q=G;break}}if(Q===-1)return{content:_,attachments:[]};let Z=[],Y=Q+1;for(;Y<j.length;Y+=1){let G=j[Y];if(/^\s*-\s+/.test(G)){let X=G.replace(/^\s*-\s+/,"").trim(),V=X.match(/^attachment:([^\s)]+)\s*(?:\((.+)\))?$/i)||X.match(/^attachment:([^\s]+)\s+(.+)$/i);if(V){let U=V[1],L=(V[2]||"").trim()||U;Z.push({id:U,label:L,raw:X})}else Z.push({id:null,label:X,raw:X})}else if(!G.trim())break;else break}if(Z.length===0)return{content:_,attachments:[]};let q=j.slice(0,Q),K=j.slice(Y),N=[...q,...K].join(`
`);return N=N.replace(/\n{3,}/g,`

`).trim(),{content:N,attachments:Z}}function oG(_){return _.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function sG(_,$){if(!_||!$)return _;let j=String($).trim().split(/\s+/).filter(Boolean);if(j.length===0)return _;let Q=j.map(oG).sort((X,V)=>V.length-X.length),Z=new RegExp(`(${Q.join("|")})`,"gi"),Y=new RegExp(`^(${Q.join("|")})$`,"i"),q=new DOMParser().parseFromString(_,"text/html"),K=q.createTreeWalker(q.body,NodeFilter.SHOW_TEXT),N=[],G;while(G=K.nextNode())N.push(G);for(let X of N){let V=X.nodeValue;if(!V||!Z.test(V)){Z.lastIndex=0;continue}Z.lastIndex=0;let U=X.parentElement;if(U&&U.closest("code, pre, script, style"))continue;let L=V.split(Z).filter((D)=>D!=="");if(L.length===0)continue;let J=q.createDocumentFragment();for(let D of L)if(Y.test(D)){let O=q.createElement("mark");O.className="search-highlight-term",O.textContent=D,J.appendChild(O)}else J.appendChild(q.createTextNode(D));X.parentNode.replaceChild(J,X)}return q.body.innerHTML}function mQ({post:_,onClick:$,onHashtagClick:j,onMessageRef:Q,onScrollToMessage:Z,agentName:Y,agentAvatarUrl:q,userName:K,userAvatarUrl:N,userAvatarBackground:G,onDelete:X,isThreadReply:V,isThreadPrev:U,isThreadNext:L,isRemoving:J,highlightQuery:D,onFileRef:O,onOpenWidget:W}){let[A,E]=g(null),f=x(null),u=_.data,c=u.type==="agent_response",r=K||"You",P=c?Y||EQ:r,I=c?V3(Y,q,!0):V3(r,N),z=typeof G==="string"?G.trim().toLowerCase():"",C=!c&&I.image&&(z==="clear"||z==="transparent"),b=c&&Boolean(I.image),e=`background-color: ${C||b?"transparent":I.color}`,h=u.content_meta,a=Boolean(h?.truncated),t=Boolean(h?.preview),_0=a&&!t,q0=a?{originalLength:Number.isFinite(h?.original_length)?h.original_length:u.content?u.content.length:0,maxLength:Number.isFinite(h?.max_length)?h.max_length:0}:null,Z0=u.content_blocks||[],K0=u.media_ids||[],B0=bG(u.content,u.link_previews),{content:U0,fileRefs:f0}=dG(B0),{content:M0,messageRefs:A0}=iG(U0),{content:b0,attachments:u0}=rG(M0);B0=b0;let p0=F3(Z0),n0=z3(Z0),E0=p0.length===1&&typeof p0[0]?.fallback_text==="string"?p0[0].fallback_text.trim():"",d0=n0.length===1?fQ(n0[0]).trim():"",F0=Boolean(E0)&&B0?.trim()===E0||Boolean(d0)&&B0?.trim()===d0,x0=Boolean(B0)&&!_0&&!F0,i0=typeof D==="string"?D.trim():"",s0=w0(()=>{if(!B0||F0)return"";let y=H_(B0,j);return i0?sG(y,i0):y},[B0,F0,i0]),R1=(y,o)=>{y.stopPropagation(),E(y_(o))},[q1,l0]=g(null),B1=(y)=>{l0(y)},Q1=(y)=>{y.stopPropagation(),X?.(_)},t0=(y,o)=>{let X0=new Set;if(!y||o.length===0)return{content:y,usedIds:X0};return{content:y.replace(/attachment:([^\s)"']+)/g,(g0,e0,N1,k1)=>{let u1=e0.replace(/^\/+/,""),$_=o.find((o1)=>o1.name&&o1.name.toLowerCase()===u1.toLowerCase()&&!X0.has(o1.id))||o.find((o1)=>!X0.has(o1.id));if(!$_)return g0;if(X0.add($_.id),k1.slice(Math.max(0,N1-2),N1)==="](")return`/media/${$_.id}`;return $_.name||"attachment"}),usedIds:X0}},V0=[],R0=[],j1=[],i=[],Y0=[],m=[],d=[],z0=0;if(Z0.length>0)Z0.forEach((y)=>{if(y?.type==="text"&&y.annotations)d.push(y.annotations);if(y?.type==="generated_widget")m.push(y);else if(y?.type==="resource_link")i.push(y);else if(y?.type==="resource")Y0.push(y);else if(y?.type==="file"){let o=K0[z0++];if(o)R0.push(o),j1.push({id:o,name:y?.name||y?.filename||y?.title})}else if(y?.type==="image"||!y?.type){let o=K0[z0++];if(o){let X0=typeof y?.mime_type==="string"?y.mime_type:void 0;V0.push({id:o,annotations:y?.annotations,mimeType:X0}),j1.push({id:o,name:y?.name||y?.filename||y?.title})}}});else if(K0.length>0){let y=u0.length>0;K0.forEach((o,X0)=>{let O0=u0[X0]||null;if(j1.push({id:o,name:O0?.label||null}),y)R0.push(o);else V0.push({id:o,annotations:null})})}if(u0.length>0)u0.forEach((y)=>{if(!y?.id)return;let o=j1.find((X0)=>String(X0.id)===String(y.id));if(o&&!o.name)o.name=y.label});let{content:k0,usedIds:I0}=t0(B0,j1);B0=k0;let H0=V0.filter(({id:y})=>!I0.has(y)),C0=R0.filter((y)=>!I0.has(y)),v0=u0.length>0?u0.map((y,o)=>({id:y.id||`attachment-${o+1}`,label:y.label||`attachment-${o+1}`})):j1.map((y,o)=>({id:y.id,label:y.name||`attachment-${o+1}`})),L0=w0(()=>F3(Z0),[Z0]),S0=w0(()=>z3(Z0),[Z0]),J0=w0(()=>{return L0.map((y)=>`${y.card_id}:${y.state}`).join("|")},[L0]);v(()=>{if(!f.current)return;return W4(f.current),nG(f.current)},[s0]);let j0=x(null);return v(()=>{if(!j0.current||L0.length===0)return;let y=j0.current;y.innerHTML="";for(let o of L0){let X0=document.createElement("div");y.appendChild(X0),RQ(X0,o,{onAction:async(O0)=>{if(O0.type==="Action.OpenUrl"){let g0=o4(O0.url||"");if(!g0)throw Error("Invalid URL");window.open(g0,"_blank","noopener,noreferrer");return}if(O0.type==="Action.Submit"){await g6({post_id:_.id,thread_id:u.thread_id||_.id,chat_jid:_.chat_jid||null,card_id:o.card_id,action:{type:O0.type,title:O0.title||"",data:O0.data}});return}console.warn("[post] unsupported adaptive card action:",O0.type,O0)}}).catch((O0)=>{console.error("[post] adaptive card render error:",O0),X0.textContent=o.fallback_text||"Card failed to render."})}},[J0,_.id]),B`
        <div id=${`post-${_.id}`} class="post ${c?"agent-post":""} ${V?"thread-reply":""} ${U?"thread-prev":""} ${L?"thread-next":""} ${J?"removing":""}" onClick=${$}>
            <div class="post-avatar ${c?"agent-avatar":""} ${I.image?"has-image":""}" style=${e}>
                ${I.image?B`<img src=${I.image} alt=${P} />`:I.letter}
            </div>
            <div class="post-body">
                <button
                    class="post-delete-btn"
                    type="button"
                    title="Delete message"
                    aria-label="Delete message"
                    onClick=${Q1}
                >
                    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <path d="M18 6L6 18M6 6l12 12" />
                    </svg>
                </button>
                <div class="post-meta">
                    <span class="post-author">${P}</span>
                    <a class="post-time" href=${`#msg-${_.id}`} onClick=${(y)=>{if(y.preventDefault(),y.stopPropagation(),Q)Q(_.id)}}>${R7(_.timestamp)}</a>
                </div>
                ${_0&&q0&&B`
                    <div class="post-content truncated">
                        <div class="truncated-title">Message too large to display.</div>
                        <div class="truncated-meta">
                            Original length: ${t5(q0.originalLength)} chars
                            ${q0.maxLength?B` • Display limit: ${t5(q0.maxLength)} chars`:""}
                        </div>
                    </div>
                `}
                ${t&&q0&&B`
                    <div class="post-content preview">
                        <div class="truncated-title">Preview truncated.</div>
                        <div class="truncated-meta">
                            Showing first ${t5(q0.maxLength)} of ${t5(q0.originalLength)} chars. Download full text below.
                        </div>
                    </div>
                `}
                ${(f0.length>0||A0.length>0||v0.length>0)&&B`
                    <div class="post-file-refs">
                        ${A0.map((y)=>{let o=(X0)=>{if(X0.preventDefault(),X0.stopPropagation(),Z)Z(y,_.chat_jid||null);else{let O0=document.getElementById("post-"+y);if(O0)O0.scrollIntoView({behavior:"smooth",block:"center"}),O0.classList.add("post-highlight"),setTimeout(()=>O0.classList.remove("post-highlight"),2000)}};return B`
                                <a href=${`#msg-${y}`} class="post-msg-pill-link" onClick=${o}>
                                    <${h_}
                                        prefix="post"
                                        label=${"msg:"+y}
                                        title=${"Message "+y}
                                        icon="message"
                                        onClick=${o}
                                    />
                                </a>
                            `})}
                        ${f0.map((y)=>{let o=y.split("/").pop()||y;return B`
                                <${h_}
                                    prefix="post"
                                    label=${o}
                                    title=${y}
                                    onClick=${()=>O?.(y)}
                                />
                            `})}
                        ${v0.map((y)=>B`
                            <${wG}
                                key=${y.id}
                                attachment=${y}
                                onPreview=${B1}
                            />
                        `)}
                    </div>
                `}
                ${x0&&B`
                    <div 
                        ref=${f}
                        class="post-content"
                        dangerouslySetInnerHTML=${{__html:s0}}
                        onClick=${(y)=>{if(y.target.classList.contains("hashtag")){y.preventDefault(),y.stopPropagation();let o=y.target.dataset.hashtag;if(o)j?.(o)}else if(y.target.tagName==="IMG")y.preventDefault(),y.stopPropagation(),E(y.target.src)}}
                    />
                `}
                ${L0.length>0&&B`
                    <div ref=${j0} class="post-adaptive-cards" />
                `}
                ${S0.length>0&&B`
                    <div class="post-adaptive-card-submissions">
                        ${S0.map((y,o)=>{let X0=vQ(y),O0=`${y.card_id}-${o}`;return B`
                                <div key=${O0} class="adaptive-card-submission-receipt">
                                    <div class="adaptive-card-submission-header">
                                        <span class="adaptive-card-submission-icon" aria-hidden="true">✓</span>
                                        <div class="adaptive-card-submission-title-wrap">
                                            <span class="adaptive-card-submission-title">Submitted</span>
                                            <span class="adaptive-card-submission-title-action">${X0.title}</span>
                                        </div>
                                    </div>
                                    ${X0.fields.length>0&&B`
                                        <div class="adaptive-card-submission-fields">
                                            ${X0.fields.map((g0)=>B`
                                                <span class="adaptive-card-submission-field" title=${`${g0.key}: ${g0.value}`}>
                                                    <span class="adaptive-card-submission-field-key">${g0.key}</span>
                                                    <span class="adaptive-card-submission-field-sep">:</span>
                                                    <span class="adaptive-card-submission-field-value">${g0.value}</span>
                                                </span>
                                            `)}
                                        </div>
                                    `}
                                    <div class="adaptive-card-submission-meta">
                                        Submitted ${s4(X0.submittedAt)}
                                    </div>
                                </div>
                            `})}
                    </div>
                `}
                ${m.length>0&&B`
                    <div class="generated-widget-launches">
                        ${m.map((y,o)=>B`
                            <${fG}
                                key=${y.widget_id||y.id||`${_.id}-widget-${o}`}
                                block=${y}
                                post=${_}
                                onOpenWidget=${W}
                            />
                        `)}
                    </div>
                `}
                ${d.length>0&&B`
                    ${d.map((y,o)=>B`
                        <${Q6} key=${o} annotations=${y} />
                    `)}
                `}
                ${H0.length>0&&B`
                    <div class="media-preview">
                        ${H0.map(({id:y,mimeType:o})=>{let O0=typeof o==="string"&&o.toLowerCase().startsWith("image/svg")?y_(y):p6(y);return B`
                                <img 
                                    key=${y} 
                                    src=${O0} 
                                    alt="Media" 
                                    loading="lazy"
                                    onClick=${(g0)=>R1(g0,y)}
                                />
                            `})}
                    </div>
                `}
                ${H0.length>0&&B`
                    ${H0.map(({annotations:y},o)=>B`
                        ${y&&B`<${Q6} key=${o} annotations=${y} />`}
                    `)}
                `}
                ${C0.length>0&&B`
                    <div class="file-attachments">
                        ${C0.map((y)=>B`
                            <${SG} key=${y} mediaId=${y} onPreview=${B1} />
                        `)}
                    </div>
                `}
                ${i.length>0&&B`
                    <div class="resource-links">
                        ${i.map((y,o)=>B`
                            <div key=${o}>
                                <${RG} block=${y} />
                                <${Q6} annotations=${y.annotations} />
                            </div>
                        `)}
                    </div>
                `}
                ${Y0.length>0&&B`
                    <div class="resource-embeds">
                        ${Y0.map((y,o)=>B`
                            <div key=${o}>
                                <${uG} block=${y} />
                                <${Q6} annotations=${y.annotations} />
                            </div>
                        `)}
                    </div>
                `}
                ${u.link_previews?.length>0&&B`
                    <div class="link-previews">
                        ${u.link_previews.map((y,o)=>B`
                            <${gG} key=${o} preview=${y} />
                        `)}
                    </div>
                `}
            </div>
        </div>
        ${A&&B`<${bQ} src=${A} onClose=${()=>E(null)} />`}
        ${q1&&B`
            <${gQ}
                mediaId=${q1.mediaId}
                info=${q1.info}
                onClose=${()=>l0(null)}
            />
        `}
    `}function hQ({posts:_,hasMore:$,onLoadMore:j,onPostClick:Q,onHashtagClick:Z,onMessageRef:Y,onScrollToMessage:q,onFileRef:K,onOpenWidget:N,emptyMessage:G,timelineRef:X,agents:V,user:U,onDeletePost:L,reverse:J=!0,removingPostIds:D,searchQuery:O}){let[W,A]=g(!1),E=x(null),f=typeof IntersectionObserver<"u",u=T(async()=>{if(!j||!$||W)return;A(!0);try{await j({preserveScroll:!0,preserveMode:"top"})}finally{A(!1)}},[$,W,j]),c=T((h)=>{let{scrollTop:a,scrollHeight:t,clientHeight:_0}=h.target,q0=J?t-_0-a:a,Z0=Math.max(300,_0);if(q0<Z0)u()},[J,u]);v(()=>{if(!f)return;let h=E.current,a=X?.current;if(!h||!a)return;let t=300,_0=new IntersectionObserver((q0)=>{for(let Z0 of q0){if(!Z0.isIntersecting)continue;u()}},{root:a,rootMargin:`${t}px 0px ${t}px 0px`,threshold:0});return _0.observe(h),()=>_0.disconnect()},[f,$,j,X,u]);let r=x(u);if(r.current=u,v(()=>{if(f)return;if(!X?.current)return;let{scrollTop:h,scrollHeight:a,clientHeight:t}=X.current,_0=J?a-t-h:h,q0=Math.max(300,t);if(_0<q0)r.current?.()},[f,_,$,J,X]),v(()=>{if(!X?.current)return;if(!$||W)return;let{scrollTop:h,scrollHeight:a,clientHeight:t}=X.current,_0=J?a-t-h:h,q0=Math.max(300,t);if(a<=t+1||_0<q0)r.current?.()},[_,$,W,J,X]),!_)return B`<div class="loading"><div class="spinner"></div></div>`;if(_.length===0)return B`
            <div class="timeline" ref=${X}>
                <div class="timeline-content">
                    <div style="padding: var(--spacing-xl); text-align: center; color: var(--text-secondary)">
                        ${G||"No messages yet. Start a conversation!"}
                    </div>
                </div>
            </div>
        `;let P=_.slice().sort((h,a)=>h.id-a.id),I=(h)=>{let a=h?.data?.thread_id;if(a===null||a===void 0||a==="")return null;let t=Number(a);return Number.isFinite(t)?t:null},z=new Map;for(let h=0;h<P.length;h+=1){let a=P[h],t=Number(a?.id),_0=I(a);if(_0!==null){let q0=z.get(_0)||{anchorIndex:-1,replyIndexes:[]};q0.replyIndexes.push(h),z.set(_0,q0)}else if(Number.isFinite(t)){let q0=z.get(t)||{anchorIndex:-1,replyIndexes:[]};q0.anchorIndex=h,z.set(t,q0)}}let C=new Map;for(let[h,a]of z.entries()){let t=new Set;if(a.anchorIndex>=0)t.add(a.anchorIndex);for(let _0 of a.replyIndexes)t.add(_0);C.set(h,Array.from(t).sort((_0,q0)=>_0-q0))}let b=P.map((h,a)=>{let t=I(h);if(t===null)return{hasThreadPrev:!1,hasThreadNext:!1};let _0=C.get(t);if(!_0||_0.length===0)return{hasThreadPrev:!1,hasThreadNext:!1};let q0=_0.indexOf(a);if(q0<0)return{hasThreadPrev:!1,hasThreadNext:!1};return{hasThreadPrev:q0>0,hasThreadNext:q0<_0.length-1}}),e=B`<div class="timeline-sentinel" ref=${E}></div>`;return B`
        <div class="timeline ${J?"reverse":"normal"}" ref=${X} onScroll=${c}>
            <div class="timeline-content">
                ${J?e:null}
                ${P.map((h,a)=>{let t=Boolean(h.data?.thread_id&&h.data.thread_id!==h.id),_0=D?.has?.(h.id),q0=b[a]||{};return B`
                    <${mQ}
                        key=${h.id}
                        post=${h}
                        isThreadReply=${t}
                        isThreadPrev=${q0.hasThreadPrev}
                        isThreadNext=${q0.hasThreadNext}
                        isRemoving=${_0}
                        highlightQuery=${O}
                        agentName=${kQ(h.data?.agent_id,V||{})}
                        agentAvatarUrl=${MQ(h.data?.agent_id,V||{})}
                        userName=${U?.name||U?.user_name}
                        userAvatarUrl=${U?.avatar_url||U?.avatarUrl||U?.avatar}
                        userAvatarBackground=${U?.avatar_background||U?.avatarBackground}
                        onClick=${()=>Q?.(h)}
                        onHashtagClick=${Z}
                        onMessageRef=${Y}
                        onScrollToMessage=${q}
                        onFileRef=${K}
                        onOpenWidget=${N}
                        onDelete=${L}
                    />
                `})}
                ${J?null:e}
            </div>
        </div>
    `}var Z6="workspaceExplorerScale",aG=["compact","default","comfortable"],tG=new Set(aG),eG={compact:{indentPx:14},default:{indentPx:16},comfortable:{indentPx:18}};function pQ(_,$="default"){if(typeof _!=="string")return $;let j=_.trim().toLowerCase();return tG.has(j)?j:$}function H3(){if(typeof window>"u")return{width:0,isTouch:!1};let _=Number(window.innerWidth)||0,$=Boolean(window.matchMedia?.("(pointer: coarse)")?.matches),j=Boolean(window.matchMedia?.("(hover: none)")?.matches),Q=Number(globalThis.navigator?.maxTouchPoints||0)>0;return{width:_,isTouch:$||Q&&j}}function _X(_={}){let $=Math.max(0,Number(_.width)||0);if(Boolean(_.isTouch))return"comfortable";if($>0&&$<1180)return"comfortable";return"default"}function $X(_,$={}){if(Boolean($.isTouch)&&_==="compact")return"default";return _}function J3(_={}){let $=_X(_),j=_.stored?pQ(_.stored,$):$;return $X(j,_)}function cQ(_){return eG[pQ(_)]}function jX(_){if(!_||_.kind!=="text")return!1;let $=Number(_.size);return!Number.isFinite($)||$<=262144}function O3(_,$){let j=String(_||"").trim();if(!j||j.endsWith("/"))return!1;if(typeof $!=="function")return!1;let Q=$({path:j,mode:"edit"});if(!Q||typeof Q!=="object")return!1;return Q.id!=="editor"}function lQ(_,$,j={}){let Q=j.resolvePane;if(O3(_,Q))return!0;return jX($)}var QX=60000,rQ=(_)=>{if(!_||!_.name)return!1;if(_.path===".")return!1;return _.name.startsWith(".")};function ZX(_){let $=String(_||"").trim();if(!$||$.endsWith("/"))return!1;return O3($,(j)=>c0.resolve(j))}function oQ(_,$,j,Q=0,Z=[]){if(!j&&rQ(_))return Z;if(!_)return Z;if(Z.push({node:_,depth:Q}),_.type==="dir"&&_.children&&$.has(_.path))for(let Y of _.children)oQ(Y,$,j,Q+1,Z);return Z}function nQ(_,$,j){if(!_)return"";let Q=[],Z=(Y)=>{if(!j&&rQ(Y))return;if(Q.push(Y.type==="dir"?`d:${Y.path}`:`f:${Y.path}`),Y.children&&$?.has(Y.path))for(let q of Y.children)Z(q)};return Z(_),Q.join("|")}function k3(_,$){if(!$)return null;if(!_)return $;if(_.path!==$.path||_.type!==$.type)return $;let j=Array.isArray(_.children)?_.children:null,Q=Array.isArray($.children)?$.children:null;if(!Q)return _;let Z=j?new Map(j.map((K)=>[K?.path,K])):new Map,Y=!j||j.length!==Q.length,q=Q.map((K)=>{let N=k3(Z.get(K.path),K);if(N!==Z.get(K.path))Y=!0;return N});return Y?{...$,children:q}:_}function D3(_,$,j){if(!_)return _;if(_.path===$)return k3(_,j);if(!Array.isArray(_.children))return _;let Q=!1,Z=_.children.map((Y)=>{let q=D3(Y,$,j);if(q!==Y)Q=!0;return q});return Q?{..._,children:Z}:_}var sQ=4,A3=14,YX=8,qX=16;function aQ(_){if(!_)return 0;if(_.type==="file"){let Q=Math.max(0,Number(_.size)||0);return _.__bytes=Q,Q}let $=Array.isArray(_.children)?_.children:[],j=0;for(let Q of $)j+=aQ(Q);return _.__bytes=j,j}function tQ(_,$=0){let j=Math.max(0,Number(_?.__bytes??_?.size??0)),Q={name:_?.name||_?.path||".",path:_?.path||".",size:j,children:[]};if(!_||_.type!=="dir"||$>=sQ)return Q;let Z=Array.isArray(_.children)?_.children:[],Y=[];for(let K of Z){let N=Math.max(0,Number(K?.__bytes??K?.size??0));if(N<=0)continue;if(K.type==="dir")Y.push({kind:"dir",node:K,size:N});else Y.push({kind:"file",name:K.name,path:K.path,size:N})}Y.sort((K,N)=>N.size-K.size);let q=Y;if(Y.length>A3){let K=Y.slice(0,A3-1),N=Y.slice(A3-1),G=N.reduce((X,V)=>X+V.size,0);K.push({kind:"other",name:`+${N.length} more`,path:`${Q.path}/[other]`,size:G}),q=K}return Q.children=q.map((K)=>{if(K.kind==="dir")return tQ(K.node,$+1);return{name:K.name,path:K.path,size:K.size,children:[]}}),Q}function dQ(){if(typeof window>"u"||typeof document>"u")return!1;let{documentElement:_,body:$}=document,j=_?.getAttribute?.("data-theme")?.toLowerCase?.()||"";if(j==="dark")return!0;if(j==="light")return!1;if(_?.classList?.contains("dark")||$?.classList?.contains("dark"))return!0;if(_?.classList?.contains("light")||$?.classList?.contains("light"))return!1;return Boolean(window.matchMedia?.("(prefers-color-scheme: dark)")?.matches)}function eQ(_,$,j){let Q=((_+Math.PI/2)*180/Math.PI+360)%360,Z=j?Math.max(30,70-$*10):Math.max(34,66-$*8),Y=j?Math.min(70,45+$*5):Math.min(60,42+$*4);return`hsl(${Q.toFixed(1)} ${Z}% ${Y}%)`}function Y6(_,$,j,Q){return{x:_+j*Math.cos(Q),y:$+j*Math.sin(Q)}}function M3(_,$,j,Q,Z,Y){let q=Math.PI*2-0.0001,K=Y-Z>q?Z+q:Y,N=Y6(_,$,Q,Z),G=Y6(_,$,Q,K),X=Y6(_,$,j,K),V=Y6(_,$,j,Z),U=K-Z>Math.PI?1:0;return[`M ${N.x.toFixed(3)} ${N.y.toFixed(3)}`,`A ${Q} ${Q} 0 ${U} 1 ${G.x.toFixed(3)} ${G.y.toFixed(3)}`,`L ${X.x.toFixed(3)} ${X.y.toFixed(3)}`,`A ${j} ${j} 0 ${U} 0 ${V.x.toFixed(3)} ${V.y.toFixed(3)}`,"Z"].join(" ")}var _Z={1:[26,46],2:[48,68],3:[70,90],4:[92,112]};function $Z(_,$,j){let Q=[],Z=[],Y=Math.max(0,Number($)||0),q=(K,N,G,X)=>{let V=Array.isArray(K?.children)?K.children:[];if(!V.length)return;let U=Math.max(0,Number(K.size)||0);if(U<=0)return;let L=G-N,J=N;V.forEach((D,O)=>{let W=Math.max(0,Number(D.size)||0);if(W<=0)return;let A=W/U,E=J,f=O===V.length-1?G:J+L*A;if(J=f,f-E<0.003)return;let u=_Z[X];if(u){let c=eQ(E,X,j);if(Q.push({key:D.path,path:D.path,label:D.name,size:W,color:c,depth:X,startAngle:E,endAngle:f,innerRadius:u[0],outerRadius:u[1],d:M3(120,120,u[0],u[1],E,f)}),X===1)Z.push({key:D.path,name:D.name,size:W,pct:Y>0?W/Y*100:0,color:c})}if(X<sQ)q(D,E,f,X+1)})};return q(_,-Math.PI/2,Math.PI*3/2,1),{segments:Q,legend:Z}}function E3(_,$){if(!_||!$)return null;if(_.path===$)return _;let j=Array.isArray(_.children)?_.children:[];for(let Q of j){let Z=E3(Q,$);if(Z)return Z}return null}function jZ(_,$,j,Q){if(!j||j<=0)return{segments:[],legend:[]};let Z=_Z[1];if(!Z)return{segments:[],legend:[]};let Y=-Math.PI/2,q=Math.PI*3/2,K=eQ(Y,1,Q),G=`${$||"."}/[files]`;return{segments:[{key:G,path:G,label:_,size:j,color:K,depth:1,startAngle:Y,endAngle:q,innerRadius:Z[0],outerRadius:Z[1],d:M3(120,120,Z[0],Z[1],Y,q)}],legend:[{key:G,name:_,size:j,pct:100,color:K}]}}function iQ(_,$=!1,j=!1){if(!_)return null;let Q=aQ(_),Z=tQ(_,0),Y=Z.size||Q,{segments:q,legend:K}=$Z(Z,Y,j);if(!q.length&&Y>0){let N=jZ("[files]",Z.path,Y,j);q=N.segments,K=N.legend}return{root:Z,totalSize:Y,segments:q,legend:K,truncated:$,isDarkTheme:j}}function KX({payload:_}){if(!_)return null;let[$,j]=g(null),[Q,Z]=g(_?.root?.path||"."),[Y,q]=g(()=>[_?.root?.path||"."]),[K,N]=g(!1);v(()=>{let z=_?.root?.path||".";Z(z),q([z]),j(null)},[_?.root?.path,_?.totalSize]),v(()=>{if(!Q)return;N(!0);let z=setTimeout(()=>N(!1),180);return()=>clearTimeout(z)},[Q]);let G=w0(()=>{return E3(_.root,Q)||_.root},[_?.root,Q]),X=G?.size||_.totalSize||0,{segments:V,legend:U}=w0(()=>{let z=$Z(G,X,_.isDarkTheme);if(z.segments.length>0)return z;if(X<=0)return z;let C=G?.children?.length?"Total":"[files]";return jZ(C,G?.path||_?.root?.path||".",X,_.isDarkTheme)},[G,X,_.isDarkTheme,_?.root?.path]),[L,J]=g(V),D=x(new Map),O=x(0);v(()=>{let z=D.current,C=new Map(V.map((a)=>[a.key,a])),b=performance.now(),e=220,h=(a)=>{let t=Math.min(1,(a-b)/220),_0=t*(2-t),q0=V.map((Z0)=>{let B0=z.get(Z0.key)||{startAngle:Z0.startAngle,endAngle:Z0.startAngle,innerRadius:Z0.innerRadius,outerRadius:Z0.innerRadius},U0=(u0,p0)=>u0+(p0-u0)*_0,f0=U0(B0.startAngle,Z0.startAngle),M0=U0(B0.endAngle,Z0.endAngle),A0=U0(B0.innerRadius,Z0.innerRadius),b0=U0(B0.outerRadius,Z0.outerRadius);return{...Z0,d:M3(120,120,A0,b0,f0,M0)}});if(J(q0),t<1)O.current=requestAnimationFrame(h)};if(O.current)cancelAnimationFrame(O.current);return O.current=requestAnimationFrame(h),D.current=C,()=>{if(O.current)cancelAnimationFrame(O.current)}},[V]);let W=L.length?L:V,A=X>0?S_(X):"0 B",E=G?.name||"",u=(E&&E!=="."?E:"Total")||"Total",c=A,r=Y.length>1,P=(z)=>{if(!z?.path)return;let C=E3(_.root,z.path);if(!C||!Array.isArray(C.children)||C.children.length===0)return;q((b)=>[...b,C.path]),Z(C.path),j(null)},I=()=>{if(!r)return;q((z)=>{let C=z.slice(0,-1);return Z(C[C.length-1]||_?.root?.path||"."),C}),j(null)};return B`
        <div class="workspace-folder-starburst">
            <svg viewBox="0 0 240 240" class=${`workspace-folder-starburst-svg${K?" is-zooming":""}`} role="img"
                aria-label=${`Folder sizes for ${G?.path||_?.root?.path||"."}`}
                data-segments=${W.length}
                data-base-size=${X}>
                ${W.map((z)=>B`
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
                        <title>${z.label} — ${S_(z.size)}</title>
                    </path>
                `)}
                <g
                    class=${`workspace-folder-starburst-center-hit${r?" is-drill":""}`}
                    onClick=${I}
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
                    <text x="120" y="114" text-anchor="middle" class="workspace-folder-starburst-total-label">${u}</text>
                    <text x="120" y="130" text-anchor="middle" class="workspace-folder-starburst-total-value">${c}</text>
                </g>
            </svg>
            ${U.length>0&&B`
                <div class="workspace-folder-starburst-legend">
                    ${U.slice(0,8).map((z)=>B`
                        <div key=${z.key} class="workspace-folder-starburst-legend-item">
                            <span class="workspace-folder-starburst-swatch" style=${`background:${z.color}`}></span>
                            <span class="workspace-folder-starburst-name" title=${z.name}>${z.name}</span>
                            <span class="workspace-folder-starburst-size">${S_(z.size)}</span>
                            <span class="workspace-folder-starburst-pct">${z.pct.toFixed(1)}%</span>
                        </div>
                    `)}
                </div>
            `}
            ${_.truncated&&B`
                <div class="workspace-folder-starburst-note">Preview is truncated by tree depth/entry limits.</div>
            `}
        </div>
    `}function NX({mediaId:_}){let[$,j]=g(null);if(v(()=>{if(!_)return;L5(_).then(j).catch(()=>{})},[_]),!$)return null;let Q=$.filename||"file",Z=$.metadata?.size?S_($.metadata.size):"";return B`
        <a href=${y_(_)} download=${Q} class="file-attachment"
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
    `}function QZ({onFileSelect:_,visible:$=!0,active:j=void 0,onOpenEditor:Q,onOpenTerminalTab:Z,onOpenVncTab:Y,onToggleTerminal:q,terminalVisible:K=!1}){let[N,G]=g(null),[X,V]=g(new Set(["."])),[U,L]=g(null),[J,D]=g(null),[O,W]=g(""),[A,E]=g(null),[f,u]=g(null),[c,r]=g(!0),[P,I]=g(!1),[z,C]=g(null),[b,e]=g(()=>O5("workspaceShowHidden",!1)),[h,a]=g(!1),[t,_0]=g(null),[q0,Z0]=g(null),[K0,B0]=g(null),[U0,f0]=g(!1),[M0,A0]=g(null),[b0,u0]=g(()=>dQ()),[p0,n0]=g(()=>J3({stored:z_(Z6),...H3()})),[E0,d0]=g(!1),F0=x(X),x0=x(""),i0=x(null),s0=x(0),R1=x(new Set),q1=x(null),l0=x(new Map),B1=x(_),Q1=x(Q),t0=x(null),V0=x(null),R0=x(null),j1=x(null),i=x(null),Y0=x(null),m=x("."),d=x(null),z0=x({path:null,dragging:!1,startX:0,startY:0}),k0=x({path:null,dragging:!1,startX:0,startY:0}),I0=x({path:null,timer:0}),H0=x(!1),C0=x(0),v0=x(new Map),L0=x(null),S0=x(null),J0=x(null),j0=x(null),y=x(null),o=x(null),X0=x(b),O0=x($),g0=x(j??$),e0=x(0),N1=x(K0),k1=x(h),u1=x(t),w_=x(null),$_=x({x:0,y:0}),g1=x(0),o1=x(null),c1=x(U),_1=x(J),s1=x(null),t_=x(A);B1.current=_,Q1.current=Q,v(()=>{F0.current=X},[X]),v(()=>{X0.current=b},[b]),v(()=>{O0.current=$},[$]),v(()=>{g0.current=j??$},[j,$]),v(()=>{N1.current=K0},[K0]),v(()=>{if(typeof window>"u")return;let H=()=>{n0(J3({stored:z_(Z6),...H3()}))};H();let k=()=>H(),R=()=>H(),S=($0)=>{if(!$0||$0.key===null||$0.key===Z6)H()};window.addEventListener("resize",k),window.addEventListener("focus",R),window.addEventListener("storage",S);let n=window.matchMedia?.("(pointer: coarse)"),Q0=window.matchMedia?.("(hover: none)"),N0=($0,P0)=>{if(!$0)return;if($0.addEventListener)$0.addEventListener("change",P0);else if($0.addListener)$0.addListener(P0)},G0=($0,P0)=>{if(!$0)return;if($0.removeEventListener)$0.removeEventListener("change",P0);else if($0.removeListener)$0.removeListener(P0)};return N0(n,k),N0(Q0,k),()=>{window.removeEventListener("resize",k),window.removeEventListener("focus",R),window.removeEventListener("storage",S),G0(n,k),G0(Q0,k)}},[]),v(()=>{let H=(k)=>{let R=k?.detail?.path;if(!R)return;let S=R.split("/"),n=[];for(let Q0=1;Q0<S.length;Q0++)n.push(S.slice(0,Q0).join("/"));if(n.length)V((Q0)=>{let N0=new Set(Q0);N0.add(".");for(let G0 of n)N0.add(G0);return N0});L(R),requestAnimationFrame(()=>{let Q0=document.querySelector(`[data-path="${CSS.escape(R)}"]`);if(Q0)Q0.scrollIntoView({block:"nearest",behavior:"smooth"})})};return window.addEventListener("workspace-reveal-path",H),()=>window.removeEventListener("workspace-reveal-path",H)},[]),v(()=>{k1.current=h},[h]),v(()=>{u1.current=t},[t]),v(()=>{c1.current=U},[U]),v(()=>{_1.current=J},[J]),v(()=>{t_.current=A},[A]),v(()=>{if(typeof window>"u"||typeof document>"u")return;let H=()=>u0(dQ());H();let k=window.matchMedia?.("(prefers-color-scheme: dark)"),R=()=>H();if(k?.addEventListener)k.addEventListener("change",R);else if(k?.addListener)k.addListener(R);let S=typeof MutationObserver<"u"?new MutationObserver(()=>H()):null;if(S?.observe(document.documentElement,{attributes:!0,attributeFilter:["class","data-theme"]}),document.body)S?.observe(document.body,{attributes:!0,attributeFilter:["class","data-theme"]});return()=>{if(k?.removeEventListener)k.removeEventListener("change",R);else if(k?.removeListener)k.removeListener(R);S?.disconnect()}},[]),v(()=>{if(!J)return;let H=i.current;if(!H)return;let k=requestAnimationFrame(()=>{try{H.focus(),H.select()}catch{}});return()=>cancelAnimationFrame(k)},[J]),v(()=>{if(!E0)return;let H=(R)=>{let S=R?.target;if(!(S instanceof Element))return;if(y.current?.contains(S))return;if(o.current?.contains(S))return;d0(!1)},k=(R)=>{if(R?.key==="Escape")d0(!1),o.current?.focus?.()};return document.addEventListener("mousedown",H),document.addEventListener("touchstart",H,{passive:!0}),document.addEventListener("keydown",k),()=>{document.removeEventListener("mousedown",H),document.removeEventListener("touchstart",H),document.removeEventListener("keydown",k)}},[E0]);let j_=async(H,k={})=>{let R=Boolean(k?.autoOpen),S=String(H||"").trim();I(!0),E(null),u(null);try{let n=await g5(S,20000);if(R&&S&&lQ(S,n,{resolvePane:(Q0)=>c0.resolve(Q0)}))return Q1.current?.(S,n),n;return E(n),n}catch(n){let Q0={error:n.message||"Failed to load preview"};return E(Q0),Q0}finally{I(!1)}};t0.current=j_;let e_=async()=>{if(!O0.current)return;try{let H=await v5("",1,X0.current),k=nQ(H.root,F0.current,X0.current);if(k===x0.current){r(!1);return}if(x0.current=k,i0.current=H.root,!s0.current)s0.current=requestAnimationFrame(()=>{s0.current=0,G((R)=>k3(R,i0.current)),r(!1)})}catch(H){C(H.message||"Failed to load workspace"),r(!1)}},p_=async(H)=>{if(!H)return;if(R1.current.has(H))return;R1.current.add(H);try{let k=await v5(H,1,X0.current);G((R)=>D3(R,H,k.root))}catch(k){C(k.message||"Failed to load workspace")}finally{R1.current.delete(H)}};V0.current=p_;let M1=T(()=>{let H=U;if(!H)return".";let k=l0.current?.get(H);if(k&&k.type==="dir")return k.path;if(H==="."||!H.includes("/"))return".";let R=H.split("/");return R.pop(),R.join("/")||"."},[U]),a1=T((H)=>{let k=H?.closest?.(".workspace-row");if(!k)return null;let R=k.dataset.path,S=k.dataset.type;if(!R)return null;if(S==="dir")return R;if(R.includes("/")){let n=R.split("/");return n.pop(),n.join("/")||"."}return"."},[]),I1=T((H)=>{return a1(H?.target||null)},[a1]),W1=T((H)=>{N1.current=H,B0(H)},[]),F1=T(()=>{let H=I0.current;if(H?.timer)clearTimeout(H.timer);I0.current={path:null,timer:0}},[]),L_=T((H)=>{if(!H||H==="."){F1();return}let k=l0.current?.get(H);if(!k||k.type!=="dir"){F1();return}if(F0.current?.has(H)){F1();return}if(I0.current?.path===H)return;F1();let R=setTimeout(()=>{I0.current={path:null,timer:0},V0.current?.(H),V((S)=>{let n=new Set(S);return n.add(H),n})},600);I0.current={path:H,timer:R}},[F1]),B_=T((H,k)=>{if($_.current={x:H,y:k},g1.current)return;g1.current=requestAnimationFrame(()=>{g1.current=0;let R=w_.current;if(!R)return;let S=$_.current;R.style.transform=`translate(${S.x+12}px, ${S.y+12}px)`})},[]),T1=T((H)=>{if(!H)return;let R=(l0.current?.get(H)?.name||H.split("/").pop()||H).trim();if(!R)return;Z0({path:H,label:R})},[]),t1=T(()=>{if(Z0(null),g1.current)cancelAnimationFrame(g1.current),g1.current=0;if(w_.current)w_.current.style.transform="translate(-9999px, -9999px)"},[]),K1=T((H)=>{if(!H)return".";let k=l0.current?.get(H);if(k&&k.type==="dir")return k.path;if(H==="."||!H.includes("/"))return".";let R=H.split("/");return R.pop(),R.join("/")||"."},[]),C1=T(()=>{D(null),W("")},[]),Q_=T((H)=>{if(!H)return;let R=(l0.current?.get(H)?.name||H.split("/").pop()||H).trim();if(!R||H===".")return;D(H),W(R)},[]),b1=T(async()=>{let H=_1.current;if(!H)return;let k=(O||"").trim();if(!k){C1();return}let R=l0.current?.get(H),S=(R?.name||H.split("/").pop()||H).trim();if(k===S){C1();return}try{let Q0=(await d6(H,k))?.path||H,N0=H.includes("/")?H.split("/").slice(0,-1).join("/")||".":".";if(C1(),C(null),window.dispatchEvent(new CustomEvent("workspace-file-renamed",{detail:{oldPath:H,newPath:Q0,type:R?.type||"file"}})),R?.type==="dir")V((G0)=>{let $0=new Set;for(let P0 of G0)if(P0===H)$0.add(Q0);else if(P0.startsWith(`${H}/`))$0.add(`${Q0}${P0.slice(H.length)}`);else $0.add(P0);return $0});if(L(Q0),R?.type==="dir")E(null),I(!1),u(null);else t0.current?.(Q0);V0.current?.(N0)}catch(n){C(n?.message||"Failed to rename file")}},[C1,O]),_4=T(async(H)=>{let S=H||".";for(let n=0;n<50;n+=1){let N0=`untitled${n===0?"":`-${n}`}.md`;try{let $0=(await n6(S,N0,""))?.path||(S==="."?N0:`${S}/${N0}`);if(S&&S!==".")V((P0)=>new Set([...P0,S]));L($0),C(null),V0.current?.(S),t0.current?.($0);return}catch(G0){if(G0?.status===409||G0?.code==="file_exists")continue;C(G0?.message||"Failed to create file");return}}C("Failed to create file (untitled name already in use).")},[]),O_=T((H)=>{if(H?.stopPropagation?.(),U0)return;let k=K1(c1.current);_4(k)},[U0,K1,_4]);v(()=>{if(typeof window>"u")return;let H=(k)=>{let R=k?.detail?.updates||[];if(!Array.isArray(R)||R.length===0)return;G((G0)=>{let $0=G0;for(let P0 of R){if(!P0?.root)continue;if(!$0||P0.path==="."||!P0.path)$0=P0.root;else $0=D3($0,P0.path,P0.root)}if($0)x0.current=nQ($0,F0.current,X0.current);return r(!1),$0});let S=c1.current;if(Boolean(S)&&R.some((G0)=>{let $0=G0?.path||"";if(!$0||$0===".")return!0;return S===$0||S.startsWith(`${$0}/`)||$0.startsWith(`${S}/`)}))v0.current.clear();if(!S||!t_.current)return;let Q0=l0.current?.get(S);if(Q0&&Q0.type==="dir")return;if(R.some((G0)=>{let $0=G0?.path||"";if(!$0||$0===".")return!0;return S===$0||S.startsWith(`${$0}/`)}))t0.current?.(S)};return window.addEventListener("workspace-update",H),()=>window.removeEventListener("workspace-update",H)},[]),q1.current=e_;let $4=x(()=>{if(typeof window>"u")return;let H=window.matchMedia("(min-width: 1024px) and (orientation: landscape)"),k=g0.current??O0.current,R=document.visibilityState!=="hidden"&&(k||H.matches&&O0.current);b5(R,X0.current).catch(()=>{})}).current,A_=x(0),F4=x(()=>{if(A_.current)clearTimeout(A_.current);A_.current=setTimeout(()=>{A_.current=0,$4()},250)}).current;v(()=>{if(O0.current)q1.current?.();F4()},[$,j]),v(()=>{q1.current(),$4();let H=setInterval(()=>q1.current(),QX),k=r5("previewHeight",null),R=Number.isFinite(k)?Math.min(Math.max(k,80),600):280;if(C0.current=R,R0.current)R0.current.style.setProperty("--preview-height",`${R}px`);let S=window.matchMedia("(min-width: 1024px) and (orientation: landscape)"),n=()=>F4();if(S.addEventListener)S.addEventListener("change",n);else if(S.addListener)S.addListener(n);return document.addEventListener("visibilitychange",n),()=>{if(clearInterval(H),s0.current)cancelAnimationFrame(s0.current),s0.current=0;if(S.removeEventListener)S.removeEventListener("change",n);else if(S.removeListener)S.removeListener(n);if(document.removeEventListener("visibilitychange",n),A_.current)clearTimeout(A_.current),A_.current=0;if(d.current)clearTimeout(d.current),d.current=null;b5(!1,X0.current).catch(()=>{})}},[]);let D_=w0(()=>oQ(N,X,b),[N,X,b]),R_=w0(()=>new Map(D_.map((H)=>[H.node.path,H.node])),[D_]),u4=w0(()=>cQ(p0),[p0]);l0.current=R_;let Z1=(U?l0.current.get(U):null)?.type==="dir";v(()=>{if(!U||!Z1){A0(null),L0.current=null,S0.current=null;return}let H=U,k=`${b?"hidden":"visible"}:${U}`,R=v0.current,S=R.get(k);if(S?.root){R.delete(k),R.set(k,S);let N0=iQ(S.root,Boolean(S.truncated),b0);if(N0)L0.current=N0,S0.current=U,A0({loading:!1,error:null,payload:N0});return}let n=L0.current,Q0=S0.current;A0({loading:!0,error:null,payload:Q0===U?n:null}),v5(U,YX,b).then((N0)=>{if(c1.current!==H)return;let G0={root:N0?.root,truncated:Boolean(N0?.truncated)};R.delete(k),R.set(k,G0);while(R.size>qX){let P0=R.keys().next().value;if(!P0)break;R.delete(P0)}let $0=iQ(G0.root,G0.truncated,b0);L0.current=$0,S0.current=U,A0({loading:!1,error:null,payload:$0})}).catch((N0)=>{if(c1.current!==H)return;A0({loading:!1,error:N0?.message||"Failed to load folder size chart",payload:Q0===U?n:null})})},[U,Z1,b,b0]);let x1=Boolean(A&&A.kind==="text"&&!Z1&&(!A.size||A.size<=262144)),z4=x1?"Open in editor":A?.size>262144?"File too large to edit":"File is not editable",Z_=Boolean(U&&U!=="."),E_=Boolean(U&&!Z1),l1=Boolean(U&&!Z1),A1=U&&Z1?k8(U,b):null,f1=T(()=>d0(!1),[]),G1=T(async(H)=>{f1();try{await H?.()}catch(k){console.warn("[workspace-explorer] Header menu action failed:",k)}},[f1]);v(()=>{let H=J0.current;if(j0.current)j0.current.dispose(),j0.current=null;if(!H)return;if(H.innerHTML="",!U||Z1||!A||A.error)return;let k={path:U,content:typeof A.text==="string"?A.text:void 0,mtime:A.mtime,size:A.size,preview:A,mode:"view"},R=c0.resolve(k)||c0.get("workspace-preview-default");if(!R)return;let S=R.mount(H,k);return j0.current=S,()=>{if(j0.current===S)S.dispose(),j0.current=null;H.innerHTML=""}},[U,Z1,A]);let Y_=(H)=>{let k=H?.target;if(k instanceof Element)return k;return k?.parentElement||null},q_=(H)=>{return Boolean(H?.closest?.(".workspace-node-icon, .workspace-label-text"))},K_=x((H)=>{let k=Y_(H),R=k?.closest?.("[data-path]");if(!R)return;let S=R.dataset.path;if(!S||S===".")return;let n=Boolean(k?.closest?.("button"))||Boolean(k?.closest?.("a"))||Boolean(k?.closest?.("input")),Q0=Boolean(k?.closest?.(".workspace-caret"));if(n||Q0)return;if(_1.current===S)return;Q_(S)}).current,c_=x((H)=>{if(H0.current){H0.current=!1;return}let k=Y_(H),R=k?.closest?.("[data-path]");if(j1.current?.focus?.(),!R)return;let S=R.dataset.path,n=R.dataset.type,Q0=Boolean(k?.closest?.(".workspace-caret")),N0=Boolean(k?.closest?.("button"))||Boolean(k?.closest?.("a"))||Boolean(k?.closest?.("input")),G0=c1.current===S,$0=_1.current;if($0){if($0===S)return;C1()}let P0=n==="file"&&s1.current===S&&!Q0&&!N0;if(n==="dir"){if(s1.current=null,L(S),E(null),u(null),I(!1),!F0.current.has(S))V0.current?.(S);if(G0&&!Q0)return;V((e1)=>{let h1=new Set(e1);if(h1.has(S))h1.delete(S);else h1.add(S);return h1})}else{s1.current=null,L(S);let y1=l0.current.get(S);if(y1)B1.current?.(y1.path,y1);if(!N0&&!Q0&&ZX(S))Q1.current?.(S,t_.current);else{let h1=!N0&&!Q0;t0.current?.(S,{autoOpen:h1})}}}).current,m1=x(()=>{x0.current="",q1.current(),Array.from(F0.current||[]).filter((k)=>k&&k!==".").forEach((k)=>V0.current?.(k))}).current,v1=x(()=>{s1.current=null,L(null),E(null),u(null),I(!1)}).current,N_=x(()=>{e((H)=>{let k=!H;if(typeof window<"u")Y1("workspaceShowHidden",String(k));return X0.current=k,b5(!0,k).catch(()=>{}),x0.current="",q1.current?.(),Array.from(F0.current||[]).filter((S)=>S&&S!==".").forEach((S)=>V0.current?.(S)),k})}).current,u_=x((H)=>{if(Y_(H)?.closest?.("[data-path]"))return;v1()}).current,z1=T(async(H)=>{if(!H)return;let k=H.split("/").pop()||H;if(!window.confirm(`Delete "${k}"? This cannot be undone.`))return;try{await r6(H);let S=H.includes("/")?H.split("/").slice(0,-1).join("/")||".":".";if(c1.current===H)v1();V0.current?.(S),C(null)}catch(S){E((n)=>({...n||{},error:S.message||"Failed to delete file"}))}},[v1]),k_=T((H)=>{let k=j1.current;if(!k||!H||typeof CSS>"u"||typeof CSS.escape!=="function")return;k.querySelector(`[data-path="${CSS.escape(H)}"]`)?.scrollIntoView?.({block:"nearest"})},[]),X1=T((H)=>{let k=D_;if(!k||k.length===0)return;let R=U?k.findIndex((S)=>S.node.path===U):-1;if(H.key==="ArrowDown"){H.preventDefault();let S=Math.min(R+1,k.length-1),n=k[S];if(!n)return;if(L(n.node.path),n.node.type!=="dir")B1.current?.(n.node.path,n.node),t0.current?.(n.node.path);else E(null),I(!1),u(null);k_(n.node.path);return}if(H.key==="ArrowUp"){H.preventDefault();let S=R<=0?0:R-1,n=k[S];if(!n)return;if(L(n.node.path),n.node.type!=="dir")B1.current?.(n.node.path,n.node),t0.current?.(n.node.path);else E(null),I(!1),u(null);k_(n.node.path);return}if(H.key==="ArrowRight"&&R>=0){let S=k[R];if(S?.node?.type==="dir"&&!X.has(S.node.path))H.preventDefault(),V0.current?.(S.node.path),V((n)=>new Set([...n,S.node.path]));return}if(H.key==="ArrowLeft"&&R>=0){let S=k[R];if(S?.node?.type==="dir"&&X.has(S.node.path))H.preventDefault(),V((n)=>{let Q0=new Set(n);return Q0.delete(S.node.path),Q0});return}if(H.key==="Enter"&&R>=0){H.preventDefault();let S=k[R];if(!S)return;let n=S.node.path;if(S.node.type==="dir"){if(!F0.current.has(n))V0.current?.(n);V((N0)=>{let G0=new Set(N0);if(G0.has(n))G0.delete(n);else G0.add(n);return G0}),E(null),u(null),I(!1)}else B1.current?.(n,S.node),t0.current?.(n);return}if((H.key==="Delete"||H.key==="Backspace")&&R>=0){let S=k[R];if(!S||S.node.type==="dir")return;H.preventDefault(),z1(S.node.path);return}if(H.key==="Escape")H.preventDefault(),v1()},[v1,z1,X,D_,k_,U]),f_=T((H)=>{let k=Y_(H),R=k?.closest?.(".workspace-row");if(!R)return;let S=R.dataset.type,n=R.dataset.path;if(!n||n===".")return;if(_1.current===n)return;let Q0=H?.touches?.[0];if(!Q0)return;if(z0.current={path:q_(k)?n:null,dragging:!1,startX:Q0.clientX,startY:Q0.clientY},S!=="file")return;if(d.current)clearTimeout(d.current);d.current=setTimeout(()=>{if(d.current=null,z0.current?.dragging)return;z1(n)},600)},[z1]),M_=T(()=>{if(d.current)clearTimeout(d.current),d.current=null;let H=z0.current;if(H?.dragging&&H.path){let k=N1.current||M1(),R=o1.current;if(typeof R==="function")R(H.path,k)}z0.current={path:null,dragging:!1,startX:0,startY:0},e0.current=0,a(!1),_0(null),W1(null),F1(),t1()},[M1,t1,W1,F1]),v4=T((H)=>{let k=z0.current,R=H?.touches?.[0];if(!R||!k?.path){if(d.current)clearTimeout(d.current),d.current=null;return}let S=Math.abs(R.clientX-k.startX),n=Math.abs(R.clientY-k.startY),Q0=S>8||n>8;if(Q0&&d.current)clearTimeout(d.current),d.current=null;if(!k.dragging&&Q0)k.dragging=!0,a(!0),_0("move"),T1(k.path);if(k.dragging){H.preventDefault(),B_(R.clientX,R.clientY);let N0=document.elementFromPoint(R.clientX,R.clientY),G0=a1(N0)||M1();if(N1.current!==G0)W1(G0);L_(G0)}},[a1,M1,T1,B_,W1,L_]),g4=x((H)=>{H.preventDefault();let k=R0.current;if(!k)return;let R=H.clientY,S=C0.current||280,n=H.currentTarget;n.classList.add("dragging"),document.body.style.cursor="row-resize",document.body.style.userSelect="none";let Q0=R,N0=($0)=>{Q0=$0.clientY;let P0=k.clientHeight-80,y1=Math.min(Math.max(S-($0.clientY-R),80),P0);k.style.setProperty("--preview-height",`${y1}px`),C0.current=y1},G0=()=>{let $0=k.clientHeight-80,P0=Math.min(Math.max(S-(Q0-R),80),$0);C0.current=P0,n.classList.remove("dragging"),document.body.style.cursor="",document.body.style.userSelect="",Y1("previewHeight",String(Math.round(P0))),document.removeEventListener("mousemove",N0),document.removeEventListener("mouseup",G0)};document.addEventListener("mousemove",N0),document.addEventListener("mouseup",G0)}).current,v_=x((H)=>{H.preventDefault();let k=R0.current;if(!k)return;let R=H.touches[0];if(!R)return;let S=R.clientY,n=C0.current||280,Q0=H.currentTarget;Q0.classList.add("dragging"),document.body.style.userSelect="none";let N0=($0)=>{let P0=$0.touches[0];if(!P0)return;$0.preventDefault();let y1=k.clientHeight-80,e1=Math.min(Math.max(n-(P0.clientY-S),80),y1);k.style.setProperty("--preview-height",`${e1}px`),C0.current=e1},G0=()=>{Q0.classList.remove("dragging"),document.body.style.userSelect="",Y1("previewHeight",String(Math.round(C0.current||n))),document.removeEventListener("touchmove",N0),document.removeEventListener("touchend",G0),document.removeEventListener("touchcancel",G0)};document.addEventListener("touchmove",N0,{passive:!1}),document.addEventListener("touchend",G0),document.addEventListener("touchcancel",G0)}).current,g_=async()=>{if(!U)return;try{let H=await l6(U);if(H.media_id)u(H.media_id)}catch(H){E((k)=>({...k||{},error:H.message||"Failed to attach"}))}},b4=async()=>{if(!U||Z1)return;await z1(U)},j4=(H)=>{return Array.from(H?.dataTransfer?.types||[]).includes("Files")},t4=T((H)=>{if(!j4(H))return;if(H.preventDefault(),e0.current+=1,!k1.current)a(!0);_0("upload");let k=I1(H)||M1();W1(k),L_(k)},[M1,I1,W1,L_]),Q4=T((H)=>{if(!j4(H))return;if(H.preventDefault(),H.dataTransfer)H.dataTransfer.dropEffect="copy";if(!k1.current)a(!0);if(u1.current!=="upload")_0("upload");let k=I1(H)||M1();if(N1.current!==k)W1(k);L_(k)},[M1,I1,W1,L_]),l_=T((H)=>{if(!j4(H))return;if(H.preventDefault(),e0.current=Math.max(0,e0.current-1),e0.current===0)a(!1),_0(null),W1(null),F1()},[W1,F1]),n1=T(async(H,k=".")=>{let R=Array.from(H||[]);if(R.length===0)return;let S=k&&k!==""?k:".",n=S!=="."?S:"workspace root";f0(!0);try{let Q0=null;for(let N0 of R)try{Q0=await D8(N0,S)}catch(G0){let $0=G0?.status,P0=G0?.code;if($0===409||P0==="file_exists"){let y1=N0?.name||"file";if(!window.confirm(`"${y1}" already exists in ${n}. Overwrite?`))continue;Q0=await D8(N0,S,{overwrite:!0})}else throw G0}if(Q0?.path)s1.current=Q0.path,L(Q0.path),t0.current?.(Q0.path);V0.current?.(S)}catch(Q0){C(Q0.message||"Failed to upload file")}finally{f0(!1)}},[]),H4=T(async(H,k)=>{if(!H)return;let R=l0.current?.get(H);if(!R)return;let S=k&&k!==""?k:".",n=H.includes("/")?H.split("/").slice(0,-1).join("/")||".":".";if(S===n)return;try{let N0=(await i6(H,S))?.path||H;if(R.type==="dir")V((G0)=>{let $0=new Set;for(let P0 of G0)if(P0===H)$0.add(N0);else if(P0.startsWith(`${H}/`))$0.add(`${N0}${P0.slice(H.length)}`);else $0.add(P0);return $0});if(L(N0),R.type==="dir")E(null),I(!1),u(null);else t0.current?.(N0);V0.current?.(n),V0.current?.(S)}catch(Q0){C(Q0?.message||"Failed to move entry")}},[]);o1.current=H4;let J4=T(async(H)=>{if(!j4(H))return;H.preventDefault(),e0.current=0,a(!1),_0(null),B0(null),F1();let k=Array.from(H?.dataTransfer?.files||[]);if(k.length===0)return;let R=N1.current||I1(H)||M1();await n1(k,R)},[M1,I1,n1]),T5=T((H)=>{if(H?.stopPropagation?.(),U0)return;let k=H?.currentTarget?.dataset?.uploadTarget||".";m.current=k,Y0.current?.click()},[U0]),D1=T(()=>{if(U0)return;let H=c1.current,k=H?l0.current?.get(H):null;m.current=k?.type==="dir"?k.path:".",Y0.current?.click()},[U0]),O4=T(()=>{G1(()=>O_(null))},[G1,O_]),e4=T(()=>{G1(()=>D1())},[G1,D1]),G_=T(()=>{G1(()=>m1())},[G1,m1]),X_=T(()=>{G1(()=>N_())},[G1,N_]),Z4=T(()=>{if(!U||!x1)return;G1(()=>Q1.current?.(U,A))},[G1,U,x1,A]),m4=T(()=>{if(!U||U===".")return;G1(()=>Q_(U))},[G1,U,Q_]),h4=T(()=>{if(!U||Z1)return;G1(()=>b4())},[G1,U,Z1,b4]),_5=T(()=>{if(!U||Z1)return;G1(()=>g_())},[G1,U,Z1,g_]),Y4=T(()=>{if(!A1)return;if(f1(),typeof window<"u")window.open(A1,"_blank","noopener")},[f1,A1]),I_=T(()=>{f1(),Z?.()},[f1,Z]),$5=T(()=>{f1(),Y?.()},[f1,Y]),A4=T(()=>{f1(),q?.()},[f1,q]),p4=T((H)=>{if(!H||H.button!==0)return;let k=H.currentTarget;if(!k||!k.dataset)return;let R=k.dataset.path;if(!R||R===".")return;if(_1.current===R)return;let S=Y_(H);if(S?.closest?.("button, a, input, .workspace-caret"))return;if(!q_(S))return;H.preventDefault(),k0.current={path:R,dragging:!1,startX:H.clientX,startY:H.clientY};let n=(N0)=>{let G0=k0.current;if(!G0?.path)return;let $0=Math.abs(N0.clientX-G0.startX),P0=Math.abs(N0.clientY-G0.startY),y1=$0>4||P0>4;if(!G0.dragging&&y1)G0.dragging=!0,H0.current=!0,a(!0),_0("move"),T1(G0.path),B_(N0.clientX,N0.clientY),document.body.style.userSelect="none",document.body.style.cursor="grabbing";if(G0.dragging){N0.preventDefault(),B_(N0.clientX,N0.clientY);let e1=document.elementFromPoint(N0.clientX,N0.clientY),h1=a1(e1)||M1();if(N1.current!==h1)W1(h1);L_(h1)}},Q0=()=>{document.removeEventListener("mousemove",n),document.removeEventListener("mouseup",Q0);let N0=k0.current;if(N0?.dragging&&N0.path){let G0=N1.current||M1(),$0=o1.current;if(typeof $0==="function")$0(N0.path,G0)}k0.current={path:null,dragging:!1,startX:0,startY:0},e0.current=0,a(!1),_0(null),W1(null),F1(),t1(),document.body.style.userSelect="",document.body.style.cursor="",setTimeout(()=>{H0.current=!1},0)};document.addEventListener("mousemove",n),document.addEventListener("mouseup",Q0)},[a1,M1,T1,B_,t1,W1,L_,F1]),x_=T(async(H)=>{let k=Array.from(H?.target?.files||[]);if(k.length===0)return;let R=m.current||".";if(await n1(k,R),m.current=".",H?.target)H.target.value=""},[n1]);return B`
        <aside
            class=${`workspace-sidebar${h?" workspace-drop-active":""}`}
            data-workspace-scale=${p0}
            ref=${R0}
            onDragEnter=${t4}
            onDragOver=${Q4}
            onDragLeave=${l_}
            onDrop=${J4}
        >
            <input type="file" multiple style="display:none" ref=${Y0} onChange=${x_} />
            <div class="workspace-header">
                <div class="workspace-header-left">
                    <div class="workspace-menu-wrap">
                        <button
                            ref=${o}
                            class=${`workspace-menu-button${E0?" active":""}`}
                            onClick=${(H)=>{H.stopPropagation(),d0((k)=>!k)}}
                            title="Workspace actions"
                            aria-label="Workspace actions"
                            aria-haspopup="menu"
                            aria-expanded=${E0?"true":"false"}
                        >
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                <line x1="4" y1="7" x2="20" y2="7" />
                                <line x1="4" y1="12" x2="20" y2="12" />
                                <line x1="4" y1="17" x2="20" y2="17" />
                            </svg>
                        </button>
                        ${E0&&B`
                            <div class="workspace-menu-dropdown" ref=${y} role="menu" aria-label="Workspace options">
                                <button class="workspace-menu-item" role="menuitem" onClick=${O4} disabled=${U0}>New file</button>
                                <button class="workspace-menu-item" role="menuitem" onClick=${e4} disabled=${U0}>Upload files</button>
                                <button class="workspace-menu-item" role="menuitem" onClick=${G_}>Refresh tree</button>
                                <button class=${`workspace-menu-item${b?" active":""}`} role="menuitem" onClick=${X_}>
                                    ${b?"Hide hidden files":"Show hidden files"}
                                </button>

                                ${U&&B`<div class="workspace-menu-separator"></div>`}
                                ${U&&!Z1&&B`
                                    <button class="workspace-menu-item" role="menuitem" onClick=${Z4} disabled=${!x1}>Open in editor</button>
                                `}
                                ${Z_&&B`
                                    <button class="workspace-menu-item" role="menuitem" onClick=${m4}>Rename selected</button>
                                `}
                                ${l1&&B`
                                    <button class="workspace-menu-item" role="menuitem" onClick=${_5}>Download selected file</button>
                                `}
                                ${A1&&B`
                                    <button class="workspace-menu-item" role="menuitem" onClick=${Y4}>Download selected folder (zip)</button>
                                `}
                                ${E_&&B`
                                    <button class="workspace-menu-item danger" role="menuitem" onClick=${h4}>Delete selected file</button>
                                `}

                                ${(Z||Y||q)&&B`<div class="workspace-menu-separator"></div>`}
                                ${Z&&B`
                                    <button class="workspace-menu-item" role="menuitem" onClick=${I_}>
                                        Open terminal in tab
                                    </button>
                                `}
                                ${Y&&B`
                                    <button class="workspace-menu-item" role="menuitem" onClick=${$5}>
                                        Open VNC in tab
                                    </button>
                                `}
                                ${q&&B`
                                    <button class="workspace-menu-item" role="menuitem" onClick=${A4}>
                                        ${K?"Hide terminal dock":"Show terminal dock"}
                                    </button>
                                `}
                            </div>
                        `}
                    </div>
                    <span>Workspace</span>
                </div>
                <div class="workspace-header-actions">
                    <button class="workspace-create" onClick=${O_} title="New file" disabled=${U0}>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                            stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                            <line x1="12" y1="5" x2="12" y2="19" />
                            <line x1="5" y1="12" x2="19" y2="12" />
                        </svg>
                    </button>
                    <button class="workspace-refresh" onClick=${m1} title="Refresh">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"
                            stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                            <circle cx="12" cy="12" r="8.5" stroke-dasharray="42 12" stroke-dashoffset="6"
                                transform="rotate(75 12 12)" />
                            <polyline points="21 3 21 9 15 9" />
                        </svg>
                    </button>
                </div>
            </div>
            <div class="workspace-tree" onClick=${u_}>
                ${U0&&B`<div class="workspace-drop-hint">Uploading…</div>`}
                ${c&&B`<div class="workspace-loading">Loading…</div>`}
                ${z&&B`<div class="workspace-error">${z}</div>`}
                ${N&&B`
                    <div
                        class="workspace-tree-list"
                        ref=${j1}
                        tabIndex="0"
                        onClick=${c_}
                        onDblClick=${K_}
                        onKeyDown=${X1}
                        onTouchStart=${f_}
                        onTouchEnd=${M_}
                        onTouchMove=${v4}
                        onTouchCancel=${M_}
                    >
                        ${D_.map(({node:H,depth:k})=>{let R=H.type==="dir",S=H.path===U,n=H.path===J,Q0=R&&X.has(H.path),N0=K0&&H.path===K0,G0=Array.isArray(H.children)&&H.children.length>0?H.children.length:Number(H.child_count)||0;return B`
                                <div
                                    key=${H.path}
                                    class=${`workspace-row${S?" selected":""}${N0?" drop-target":""}`}
                                    style=${{paddingLeft:`${8+k*u4.indentPx}px`}}
                                    data-path=${H.path}
                                    data-type=${H.type}
                                    onMouseDown=${p4}
                                >
                                    <span class="workspace-caret" aria-hidden="true">
                                        ${R?Q0?B`<svg viewBox="0 0 12 12"><polygon points="1,2 11,2 6,11"/></svg>`:B`<svg viewBox="0 0 12 12"><polygon points="2,1 11,6 2,11"/></svg>`:null}
                                    </span>
                                    <svg class=${`workspace-node-icon${R?" folder":""}`}
                                        viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                        stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                        aria-hidden="true">
                                        ${R?B`<path d="M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>`:B`<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/>`}
                                    </svg>
                                    ${n?B`
                                            <input
                                                class="workspace-rename-input"
                                                ref=${i}
                                                value=${O}
                                                onInput=${($0)=>W($0?.target?.value||"")}
                                                onKeyDown=${($0)=>{if($0.key==="Enter")$0.preventDefault(),b1();else if($0.key==="Escape")$0.preventDefault(),C1()}}
                                                onBlur=${C1}
                                                onClick=${($0)=>$0.stopPropagation()}
                                            />
                                        `:B`<span class="workspace-label"><span class="workspace-label-text">${H.name}</span></span>`}
                                    ${R&&!Q0&&G0>0&&B`
                                        <span class="workspace-count">${G0}</span>
                                    `}
                                    ${R&&B`
                                        <button
                                            class="workspace-folder-upload"
                                            data-upload-target=${H.path}
                                            title="Upload files to this folder"
                                            onClick=${T5}
                                            disabled=${U0}
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
                <div class="workspace-preview-splitter-h" onMouseDown=${g4} onTouchStart=${v_}></div>
                <div class="workspace-preview">
                    <div class="workspace-preview-header">
                        <span class="workspace-preview-title">${U}</span>
                        <div class="workspace-preview-actions">
                            <button class="workspace-create" onClick=${O_} title="New file" disabled=${U0}>
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                    stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                    <line x1="12" y1="5" x2="12" y2="19" />
                                    <line x1="5" y1="12" x2="19" y2="12" />
                                </svg>
                            </button>
                            ${!Z1&&B`
                                <button
                                    class="workspace-download workspace-edit"
                                    onClick=${()=>x1&&Q1.current?.(U,A)}
                                    title=${z4}
                                    disabled=${!x1}
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
                            ${Z1?B`
                                    <button class="workspace-download" onClick=${D1}
                                        title="Upload files to this folder" disabled=${U0}>
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                            stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                                            <polyline points="7 8 12 3 17 8"/>
                                            <line x1="12" y1="3" x2="12" y2="15"/>
                                        </svg>
                                    </button>
                                    <a class="workspace-download" href=${k8(U,b)}
                                        title="Download folder as zip" onClick=${(H)=>H.stopPropagation()}>
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                            stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                                            <polyline points="7 10 12 15 17 10"/>
                                            <line x1="12" y1="15" x2="12" y2="3"/>
                                        </svg>
                                    </a>`:B`<button class="workspace-download" onClick=${g_} title="Download">
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
                    ${Z1&&B`
                        <div class="workspace-preview-text">Folder selected — create file, upload files, or download as zip.</div>
                        ${M0?.loading&&B`<div class="workspace-loading">Loading folder size preview…</div>`}
                        ${M0?.error&&B`<div class="workspace-error">${M0.error}</div>`}
                        ${M0?.payload&&M0.payload.segments?.length>0&&B`
                            <${KX} payload=${M0.payload} />
                        `}
                        ${M0?.payload&&(!M0.payload.segments||M0.payload.segments.length===0)&&B`
                            <div class="workspace-preview-text">No file size data available for this folder yet.</div>
                        `}
                    `}
                    ${A&&!A.error&&!Z1&&B`
                        <div class="workspace-preview-body" ref=${J0}></div>
                    `}
                    ${f&&B`
                        <div class="workspace-download-card">
                            <${NX} mediaId=${f} />
                        </div>
                    `}
                </div>
            `}
            ${q0&&B`
                <div class="workspace-drag-ghost" ref=${w_}>${q0.label}</div>
            `}
        </aside>
    `}var GX=new Set(["kanban-editor","mindmap-editor"]);function XX(_,$,j){let Q=String(_||"").trim();if(!Q)return null;if($)return $;if(typeof j!=="function")return null;return j({path:Q,mode:"edit"})?.id||null}function ZZ(_,$,j){let Q=XX(_,$,j);return Q!=null&&GX.has(Q)}var VX=/\.(docx?|xlsx?|pptx?|odt|ods|odp|rtf)$/i,UX=/\.(csv|tsv)$/i,LX=/\.pdf$/i,BX=/\.(png|jpe?g|gif|webp|bmp|ico|svg)$/i,YZ=/\.drawio(\.xml|\.svg|\.png)?$/i;function qZ({tabs:_,activeId:$,onActivate:j,onClose:Q,onCloseOthers:Z,onCloseAll:Y,onTogglePin:q,onTogglePreview:K,onEditSource:N,previewTabs:G,paneOverrides:X,onToggleDock:V,dockVisible:U,onToggleZen:L,zenMode:J,onPopOutTab:D}){let[O,W]=g(null),A=x(null);v(()=>{if(!O)return;let z=(C)=>{if(C.type==="keydown"&&C.key!=="Escape")return;W(null)};return document.addEventListener("click",z),document.addEventListener("keydown",z),()=>{document.removeEventListener("click",z),document.removeEventListener("keydown",z)}},[O]),v(()=>{let z=(C)=>{if(C.ctrlKey&&C.key==="Tab"){if(C.preventDefault(),!_.length)return;let b=_.findIndex((e)=>e.id===$);if(C.shiftKey){let e=_[(b-1+_.length)%_.length];j?.(e.id)}else{let e=_[(b+1)%_.length];j?.(e.id)}return}if((C.ctrlKey||C.metaKey)&&C.key==="w"){let b=document.querySelector(".editor-pane");if(b&&b.contains(document.activeElement)){if(C.preventDefault(),$)Q?.($)}}};return document.addEventListener("keydown",z),()=>document.removeEventListener("keydown",z)},[_,$,j,Q]);let E=T((z,C)=>{if(z.button===1){z.preventDefault(),Q?.(C);return}if(z.button===0)j?.(C)},[j,Q]),f=T((z,C)=>{z.preventDefault(),W({id:C,x:z.clientX,y:z.clientY})},[]),u=T((z)=>{z.preventDefault(),z.stopPropagation()},[]),c=T((z,C)=>{z.preventDefault(),z.stopPropagation(),Q?.(C)},[Q]);v(()=>{if(!$||!A.current)return;let z=A.current.querySelector(".tab-item.active");if(z)z.scrollIntoView({block:"nearest",inline:"nearest",behavior:"smooth"})},[$]);let r=T((z)=>{if(!(X instanceof Map))return null;return X.get(z)||null},[X]),P=w0(()=>_.find((z)=>z.id===O?.id)||null,[O?.id,_]),I=w0(()=>{let z=O?.id;if(!z)return!1;return ZZ(z,r(z),(C)=>c0.resolve(C))},[O?.id,r]);if(!_.length)return null;return B`
        <div class="tab-strip" ref=${A} role="tablist">
            ${_.map((z)=>B`
                <div
                    key=${z.id}
                    class=${`tab-item${z.id===$?" active":""}${z.dirty?" dirty":""}${z.pinned?" pinned":""}`}
                    role="tab"
                    aria-selected=${z.id===$}
                    title=${z.path}
                    onMouseDown=${(C)=>E(C,z.id)}
                    onContextMenu=${(C)=>f(C,z.id)}
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
                        onMouseDown=${u}
                        onClick=${(C)=>c(C,z.id)}
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
            ${L&&B`
                <button
                    class=${`tab-strip-zen-toggle${J?" active":""}`}
                    onClick=${L}
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
                <button onClick=${()=>{Q?.(O.id),W(null)}}>Close</button>
                <button onClick=${()=>{Z?.(O.id),W(null)}}>Close Others</button>
                <button onClick=${()=>{Y?.(),W(null)}}>Close All</button>
                <hr />
                <button onClick=${()=>{q?.(O.id),W(null)}}>
                    ${P?.pinned?"Unpin":"Pin"}
                </button>
                ${I&&N&&B`
                    <button onClick=${()=>{N(O.id),W(null)}}>Edit Source</button>
                `}
                ${D&&B`
                    <button onClick=${()=>{let z=_.find((C)=>C.id===O.id);D(O.id,z?.label),W(null)}}>Open in Window</button>
                `}
                ${K&&/\.(md|mdx|markdown)$/i.test(O.id)&&B`
                    <hr />
                    <button onClick=${()=>{K(O.id),W(null)}}>
                        ${G?.has(O.id)?"Hide Preview":"Preview"}
                    </button>
                `}
                ${VX.test(O.id)&&B`
                    <hr />
                    <button onClick=${()=>{let z="/workspace/raw?path="+encodeURIComponent(O.id),C=O.id.split("/").pop()||"document",b="/office-viewer/?url="+encodeURIComponent(z)+"&name="+encodeURIComponent(C);window.open(b,"_blank","noopener"),W(null)}}>Open in New Tab</button>
                `}
                ${UX.test(O.id)&&B`
                    <hr />
                    <button onClick=${()=>{let z="/csv-viewer/?path="+encodeURIComponent(O.id);window.open(z,"_blank","noopener"),W(null)}}>Open in New Tab</button>
                `}
                ${LX.test(O.id)&&B`
                    <hr />
                    <button onClick=${()=>{let z="/workspace/raw?path="+encodeURIComponent(O.id);window.open(z,"_blank","noopener"),W(null)}}>Open in New Tab</button>
                `}
                ${BX.test(O.id)&&!YZ.test(O.id)&&B`
                    <hr />
                    <button onClick=${()=>{let z="/image-viewer/?path="+encodeURIComponent(O.id);window.open(z,"_blank","noopener"),W(null)}}>Open in New Tab</button>
                `}
                ${YZ.test(O.id)&&B`
                    <hr />
                    <button onClick=${()=>{let z="/drawio/edit?path="+encodeURIComponent(O.id);window.open(z,"_blank","noopener"),W(null)}}>Open in New Tab</button>
                `}
            </div>
        `}
    `}function WX(_){let{workspaceOpen:$,editorOpen:j,chatOnlyMode:Q,zenMode:Z}=_;return`app-shell${$?"":" workspace-collapsed"}${j?" editor-open":""}${Q?" chat-only":""}${Z?" zen-mode":""}`}function KZ(_){let{appShellRef:$,workspaceOpen:j,editorOpen:Q,chatOnlyMode:Z,zenMode:Y,isRenameBranchFormOpen:q,closeRenameCurrentBranchForm:K,handleRenameCurrentBranch:N,renameBranchNameDraft:G,renameBranchNameInputRef:X,setRenameBranchNameDraft:V,renameBranchDraftState:U,isRenamingBranch:L,addFileRef:J,openEditor:D,openTerminalTab:O,openVncTab:W,hasDockPanes:A,toggleDock:E,dockVisible:f,handleSplitterMouseDown:u,handleSplitterTouchStart:c,showEditorPaneContainer:r,tabStripTabs:P,tabStripActiveId:I,handleTabActivate:z,handleTabClose:C,handleTabCloseOthers:b,handleTabCloseAll:e,handleTabTogglePin:h,handleTabTogglePreview:a,handleTabEditSource:t,previewTabs:_0,tabPaneOverrides:q0,toggleZenMode:Z0,handlePopOutPane:K0,isWebAppMode:B0,editorContainerRef:U0,editorInstanceRef:f0,handleDockSplitterMouseDown:M0,handleDockSplitterTouchStart:A0,TERMINAL_TAB_PATH:b0,dockContainerRef:u0,handleEditorSplitterMouseDown:p0,handleEditorSplitterTouchStart:n0,searchQuery:E0,isIOSDevice:d0,currentBranchRecord:F0,currentChatJid:x0,currentChatBranches:i0,handleBranchPickerChange:s0,formatBranchPickerLabel:R1,openRenameCurrentBranchForm:q1,handlePruneCurrentBranch:l0,currentHashtag:B1,handleBackToTimeline:Q1,activeSearchScopeLabel:t0,posts:V0,isMainTimelineView:R0,hasMore:j1,loadMore:i,timelineRef:Y0,handleHashtagClick:m,addMessageRef:d,scrollToMessage:z0,openFileFromPill:k0,handleDeletePost:I0,handleOpenFloatingWidget:H0,agents:C0,userProfile:v0,removingPostIds:L0,agentStatus:S0,isCompactionStatus:J0,agentDraft:j0,agentPlan:y,agentThought:o,pendingRequest:X0,intentToast:O0,currentTurnId:g0,steerQueued:e0,handlePanelToggle:N1,btwSession:k1,closeBtwPanel:u1,handleBtwRetry:w_,handleBtwInject:$_,floatingWidget:g1,handleCloseFloatingWidget:o1,handleFloatingWidgetEvent:c1,extensionStatusPanels:_1,pendingExtensionPanelActions:s1,handleExtensionPanelAction:t_,searchOpen:j_,followupQueueItems:e_,handleInjectQueuedFollowup:p_,handleRemoveQueuedFollowup:M1,viewStateRef:a1,loadPosts:I1,scrollToBottom:W1,searchScope:F1,handleSearch:L_,setSearchScope:B_,enterSearchMode:T1,exitSearchMode:t1,fileRefs:K1,removeFileRef:C1,clearFileRefs:Q_,setFileRefsFromCompose:b1,messageRefs:_4,removeMessageRef:O_,clearMessageRefs:$4,setMessageRefsFromCompose:A_,handleCreateSessionFromCompose:F4,handleRestoreBranch:D_,attachActiveEditorFile:R_,followupQueueCount:u4,handleBtwIntercept:f4,handleMessageResponse:Z1,handleComposeSubmitError:x1,handlePopOutChat:z4,isComposeBoxAgentActive:Z_,activeChatAgents:E_,connectionStatus:l1,activeModel:A1,activeModelUsage:f1,activeThinkingLevel:G1,supportsThinking:Y_,contextUsage:q_,notificationsEnabled:K_,notificationPermission:c_,handleToggleNotifications:m1,setActiveModel:v1,applyModelState:N_,setPendingRequest:u_,pendingRequestRef:z1,toggleWorkspace:k_}=_;return B`
    <div class=${WX({workspaceOpen:j,editorOpen:Q,chatOnlyMode:Z,zenMode:Y})} ref=${$}>
      ${q&&B`
        <div class="rename-branch-overlay" onPointerDown=${(X1)=>{if(X1.target===X1.currentTarget)K()}}>
          <form
            class="rename-branch-panel"
            onSubmit=${(X1)=>{X1.preventDefault(),N(G)}}
          >
            <div class="rename-branch-title">Rename branch handle</div>
            <input
              ref=${X}
              value=${G}
              onInput=${(X1)=>{let f_=X1.currentTarget?.value??"";V(String(f_))}}
              onKeyDown=${(X1)=>{if(X1.key==="Escape")X1.preventDefault(),K()}}
              autocomplete="off"
              placeholder="Handle (letters, numbers, - and _ only)"
            />
            <div class=${`rename-branch-help ${U.kind||"info"}`}>
              ${U.message}
            </div>
            <div class="rename-branch-actions">
              <button type="submit" class="compose-model-popup-btn primary" disabled=${L||!U.canSubmit}>
                ${L?"Renaming…":"Save"}
              </button>
              <button
                type="button"
                class="compose-model-popup-btn"
                onClick=${K}
                disabled=${L}
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      `}
      ${!Z&&B`
        <${QZ}
          onFileSelect=${J}
          visible=${j}
          active=${j||Q}
          onOpenEditor=${D}
          onOpenTerminalTab=${O}
          onOpenVncTab=${W}
          onToggleTerminal=${A?E:void 0}
          terminalVisible=${Boolean(A&&f)}
        />
        <button
          class=${`workspace-toggle-tab${j?" open":" closed"}`}
          onClick=${k_}
          title=${j?"Hide workspace":"Show workspace"}
          aria-label=${j?"Hide workspace":"Show workspace"}
        >
          <svg class="workspace-toggle-tab-icon" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <polyline points="6 3 11 8 6 13" />
          </svg>
        </button>
        <div class="workspace-splitter" onMouseDown=${u} onTouchStart=${c}></div>
      `}
      ${r&&B`
        <div class="editor-pane-container">
          ${Y&&B`<div class="zen-hover-zone"></div>`}
          ${Q&&B`
            <${qZ}
              tabs=${P}
              activeId=${I}
              onActivate=${z}
              onClose=${C}
              onCloseOthers=${b}
              onCloseAll=${e}
              onTogglePin=${h}
              onTogglePreview=${a}
              onEditSource=${t}
              previewTabs=${_0}
              paneOverrides=${q0}
              onToggleDock=${A?E:void 0}
              dockVisible=${A&&f}
              onToggleZen=${Z0}
              zenMode=${Y}
              onPopOutTab=${B0?void 0:K0}
            />
          `}
          ${Q&&B`<div class="editor-pane-host" ref=${U0}></div>`}
          ${Q&&I&&_0.has(I)&&B`
            <${t8}
              getContent=${()=>f0.current?.getContent?.()}
              path=${I}
              onClose=${()=>a(I)}
            />
          `}
          ${A&&f&&B`<div class="dock-splitter" onMouseDown=${M0} onTouchStart=${A0}></div>`}
          ${A&&B`<div class=${`dock-panel${f?"":" hidden"}`}>
            <div class="dock-panel-header">
              <span class="dock-panel-title">Terminal</span>
              <div class="dock-panel-actions">
                ${!B0&&B`
                  <button class="dock-panel-action" onClick=${()=>K0(b0,"Terminal")} title="Open terminal in window" aria-label="Open terminal in window">
                    <svg viewBox="0 0 16 16" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                      <rect x="2.25" y="2.25" width="8.5" height="8.5" rx="1.5"/>
                      <path d="M8.5 2.25h5.25v5.25"/>
                      <path d="M13.75 2.25 7.75 8.25"/>
                    </svg>
                  </button>
                `}
                <button class="dock-panel-close" onClick=${E} title="Hide terminal (Ctrl+\`)" aria-label="Hide terminal">
                  <svg viewBox="0 0 16 16" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round">
                    <line x1="4" y1="4" x2="12" y2="12"/>
                    <line x1="12" y1="4" x2="4" y2="12"/>
                  </svg>
                </button>
              </div>
            </div>
            <div class="dock-panel-body" ref=${u0}></div>
          </div>`}
        </div>
        <div class="editor-splitter" onMouseDown=${p0} onTouchStart=${n0}></div>
      `}
      <div class="container">
        ${E0&&d0()&&B`<div class="search-results-spacer"></div>`}
        ${Z&&B`
          <div class="chat-window-header">
            <div class="chat-window-header-main">
              <span class="chat-window-header-title">
                ${F0?.agent_name?`@${F0.agent_name}`:x0}
              </span>
              <span class="chat-window-header-subtitle">${F0?.chat_jid||x0}</span>
            </div>
            <div class="chat-window-header-actions">
              ${i0.length>1&&B`
                <label class="chat-window-branch-picker-wrap">
                  <span class="chat-window-branch-picker-label">Branch</span>
                  <select
                    class="chat-window-branch-picker"
                    value=${x0}
                    onChange=${(X1)=>s0(X1.currentTarget.value)}
                  >
                    ${i0.map((X1)=>B`
                      <option key=${X1.chat_jid} value=${X1.chat_jid}>
                        ${R1(X1,{currentChatJid:x0})}
                      </option>
                    `)}
                  </select>
                </label>
              `}
              ${F0?.chat_jid&&B`
                <button
                  class="chat-window-header-button"
                  type="button"
                  onClick=${q1}
                  title=${L?"Renaming branch…":"Rename this branch"}
                  aria-label="Rename this branch"
                  disabled=${L}
                >
                  ${L?"Renaming…":"Rename"}
                </button>
              `}
              ${F0?.chat_jid&&F0.chat_jid!==(F0.root_chat_jid||F0.chat_jid)&&B`
                <button
                  class="chat-window-header-button"
                  type="button"
                  onClick=${l0}
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
        ${(B1||E0)&&B`
          <div class="hashtag-header">
            <button class="back-btn" onClick=${Q1}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
            </button>
            <span>${B1?`#${B1}`:`Search: ${E0} · ${t0}`}</span>
          </div>
        `}
        <${hQ}
          posts=${V0}
          hasMore=${R0?j1:!1}
          onLoadMore=${R0?i:void 0}
          timelineRef=${Y0}
          onHashtagClick=${m}
          onMessageRef=${d}
          onScrollToMessage=${z0}
          onFileRef=${k0}
          onPostClick=${void 0}
          onDeletePost=${I0}
          onOpenWidget=${H0}
          emptyMessage=${B1?`No posts with #${B1}`:E0?`No results for "${E0}"`:void 0}
          agents=${C0}
          user=${v0}
          reverse=${R0}
          removingPostIds=${L0}
          searchQuery=${E0}
        />
        <${U3}
          status=${J0(S0)?null:S0}
          draft=${j0}
          plan=${y}
          thought=${o}
          pendingRequest=${X0}
          intent=${O0}
          turnId=${g0}
          steerQueued=${e0}
          onPanelToggle=${N1}
          showExtensionPanels=${!1}
        />
        <${AQ}
          session=${k1}
          onClose=${u1}
          onRetry=${w_}
          onInject=${$_}
        />
        <${DQ}
          widget=${g1}
          onClose=${o1}
          onWidgetEvent=${c1}
        />
        <${U3}
          extensionPanels=${Array.from(_1.values())}
          pendingPanelActions=${s1}
          onExtensionPanelAction=${t_}
          turnId=${g0}
          steerQueued=${e0}
          onPanelToggle=${N1}
          showCorePanels=${!1}
        />
        <${X3}
          items=${j_?[]:e_}
          onInjectQueuedFollowup=${p_}
          onRemoveQueuedFollowup=${M1}
          onOpenFilePill=${k0}
        />
        <${OQ}
          onPost=${()=>{let{searchQuery:X1,searchOpen:f_}=a1.current||{};if(!X1&&!f_)I1(),W1()}}
          onFocus=${W1}
          searchMode=${j_}
          searchScope=${F1}
          onSearch=${L_}
          onSearchScopeChange=${B_}
          onEnterSearch=${T1}
          onExitSearch=${t1}
          fileRefs=${K1}
          onRemoveFileRef=${C1}
          onClearFileRefs=${Q_}
          onSetFileRefs=${b1}
          messageRefs=${_4}
          onRemoveMessageRef=${O_}
          onClearMessageRefs=${$4}
          onSetMessageRefs=${A_}
          onSwitchChat=${s0}
          onRenameSession=${N}
          isRenameSessionInProgress=${L}
          onCreateSession=${F4}
          onDeleteSession=${l0}
          onRestoreSession=${D_}
          activeEditorPath=${Z?null:I}
          onAttachEditorFile=${Z?void 0:R_}
          onOpenFilePill=${k0}
          followupQueueCount=${u4}
          followupQueueItems=${e_}
          showQueueStack=${!1}
          onInjectQueuedFollowup=${p_}
          onRemoveQueuedFollowup=${M1}
          onSubmitIntercept=${f4}
          onMessageResponse=${Z1}
          onSubmitError=${x1}
          onPopOutChat=${B0?void 0:z4}
          isAgentActive=${Z_}
          activeChatAgents=${E_}
          currentChatJid=${x0}
          connectionStatus=${l1}
          activeModel=${A1}
          modelUsage=${f1}
          thinkingLevel=${G1}
          supportsThinking=${Y_}
          contextUsage=${q_}
          notificationsEnabled=${K_}
          notificationPermission=${c_}
          onToggleNotifications=${m1}
          onModelChange=${v1}
          onModelStateChange=${N_}
          statusNotice=${J0(S0)?S0:null}
        />
        <${xQ}
          request=${X0}
          onRespond=${()=>{u_(null),z1.current=null}}
        />
      </div>
    </div>
  `}function a_(_){return!_?.currentHashtag&&!_?.searchQuery&&!_?.searchOpen}function NZ(_,$,j){return Boolean($&&j&&(_==="new_post"||_==="new_reply"||_==="agent_response"))}function I3(_,$){return _&&$}function GZ(_,$){if(!Array.isArray(_)||_.length===0)return[$];if(_.some((j)=>j?.id===$?.id))return _;return[..._,$]}function XZ(_,$){if(!Array.isArray(_))return _;if(!_.some((j)=>j?.id===$?.id))return _;return _.map((j)=>j?.id===$?.id?$:j)}function VZ(_,$){if(!Array.isArray(_))return _;let j=Array.isArray($)?$:[];if(j.length===0)return _;let Q=new Set(j),Z=_.filter((Y)=>!Q.has(Y?.id));return Z.length===_.length?_:Z}function UZ(_){let{currentChatJid:$,queueRefreshGenRef:j,activeChatJidRef:Q,dismissedQueueRowIdsRef:Z,getAgentQueueState:Y,setFollowupQueueItems:q,clearQueuedSteerStateIfStale:K}=_,N=++j.current,G=$;Y(G).then((X)=>{if(N!==j.current)return;if(Q.current!==G)return;let V=Z.current,U=R9(X?.items,V);if(U.length){q((L)=>u9(L,U)?L:U);return}V.clear(),K(0),q((L)=>L.length===0?L:[])}).catch(()=>{if(N!==j.current)return;if(Q.current!==G)return;q((X)=>X.length===0?X:[])})}async function LZ(_){let{currentChatJid:$,activeChatJidRef:j,getAgentContext:Q,setContextUsage:Z}=_,Y=$;try{let q=await Q(Y);if(j.current!==Y)return;if(q)Z(q)}catch(q){if(j.current!==Y)return;console.warn("Failed to fetch agent context:",q)}}async function BZ(_){let{currentChatJid:$,activeChatJidRef:j,getAutoresearchStatus:Q,setExtensionStatusPanels:Z,setPendingExtensionPanelActions:Y}=_,q=$;try{let K=await Q(q);if(j.current!==q)return;Z((N)=>Cj(N,K)),Y((N)=>i8(N,"autoresearch"))}catch(K){if(j.current!==q)return;console.warn("Failed to fetch autoresearch status:",K)}}function WZ(_){let{refreshModelState:$,refreshActiveChatAgents:j,refreshCurrentChatBranches:Q,refreshQueueState:Z,refreshContextUsage:Y,refreshAutoresearchStatus:q}=_;$(),j(),Q(),Z(),Y(),q()}function FZ(_){let{viewStateRef:$,refreshTimeline:j,refreshModelAndQueueState:Q}=_;if(a_($.current))j();Q()}function FX(_,$){return Number.isFinite($)?Number($):_?_.replace(/\r\n/g,`
`).split(`
`).length:0}function q6(_,$){return{text:_,totalLines:FX(_,$)}}function x3(_,$){return{text:$?.text||"",totalLines:F9(_),fullText:_}}function zZ(_,$,j){return j==="replace"?$:`${_||""}${$}`}function HZ(_,$){let j=_||"";if($?.reset)j="";if($?.delta)j+=String($.delta);return j}function JZ(_,$){let j=_||"";if($?.reset)j="";if(typeof $?.delta==="string")j+=$.delta;return j}function a4(_,$){return Boolean(_)&&Boolean($)&&_!==$}function I5(_,$){return Boolean(_)&&!Boolean($)}function OZ(_,$){return _||$||null}function K6(_){return _?.turn_id||_?.turnId||null}function x5(_){if(typeof _?.text!=="string"||!_.text)return null;let $=Number.isFinite(_?.totalLines)?Number(_.totalLines):Number.isFinite(_?.total_lines)?Number(_.total_lines):0;return{text:_.text,totalLines:$}}function T3(_,$){return typeof _?.text==="string"&&_.text.length>=$.length}function AZ(_){switch(_){case"generated_widget_open":return{kind:"update",fallbackStatus:"loading",shouldAdoptTurn:!0};case"generated_widget_delta":return{kind:"update",fallbackStatus:"streaming",shouldAdoptTurn:!0};case"generated_widget_final":return{kind:"update",fallbackStatus:"final",shouldAdoptTurn:!0};case"generated_widget_error":return{kind:"update",fallbackStatus:"error",shouldAdoptTurn:!1};case"generated_widget_close":return{kind:"close",fallbackStatus:null,shouldAdoptTurn:!1};default:return{kind:null,fallbackStatus:null,shouldAdoptTurn:!1}}}function zX(_,$){return typeof _?.chat_jid==="string"&&_.chat_jid.trim()?_.chat_jid.trim():$}function DZ(_,$,j){return{isStatusPanelWidgetEvent:_==="extension_ui_widget"&&$?.options?.surface==="status-panel",eventChatJid:zX($,j),panelKey:typeof $?.key==="string"?$.key:""}}function EZ(_,$){if(_==="extension_ui_notify"&&typeof $?.message==="string")return{title:$.message,detail:null,kind:typeof $?.type==="string"&&$.type.trim()?$.type:"info"};if(_==="extension_ui_error"&&typeof $?.error==="string")return{title:"Extension UI error",detail:$.error,kind:"error",durationMs:5000};return null}var HX=new Set(["extension_ui_request","extension_ui_timeout","extension_ui_notify","extension_ui_status","extension_ui_working","extension_ui_widget","extension_ui_title","extension_ui_editor_text","extension_ui_error"]);function kZ(_){return HX.has(String(_||"").trim())}function JX(_){let $=String(_||"").trim();if(!$.startsWith("extension_ui_"))return"piclaw-extension-ui";return`piclaw-extension-ui:${$.slice(13).replace(/_/g,"-")}`}function C3(_,$,j=globalThis.window){if(!j||typeof j.dispatchEvent!=="function"||typeof CustomEvent>"u")return!1;let Q={type:_,payload:$};return j.dispatchEvent(new CustomEvent("piclaw-extension-ui",{detail:Q})),j.dispatchEvent(new CustomEvent(JX(_),{detail:Q})),!0}function MZ(_,$,j){let Q=$?.turn_id,Z=$?.chat_jid,Y=typeof Z==="string"&&Z.trim()?Z.trim():null,q=_==="connected"||_==="workspace_update";return{turnId:Q,eventChatJid:Y,isGlobalUiEvent:q,isCurrentChatEvent:Y?Y===j:q}}function IZ(_){return _==="agent_draft_delta"||_==="agent_thought_delta"||_==="agent_draft"||_==="agent_thought"}function xZ(_,$,j){let{currentChatJid:Q,updateAgentProfile:Z,updateUserProfile:Y,currentTurnIdRef:q,activeChatJidRef:K,pendingRequestRef:N,draftBufferRef:G,thoughtBufferRef:X,steerQueuedTurnIdRef:V,thoughtExpandedRef:U,draftExpandedRef:L,draftThrottleRef:J,thoughtThrottleRef:D,viewStateRef:O,followupQueueItemsRef:W,dismissedQueueRowIdsRef:A,scrollToBottomRef:E,hasMoreRef:f,loadMoreRef:u,lastAgentResponseRef:c,wasAgentActiveRef:r,setActiveTurn:P,applyLiveGeneratedWidgetUpdate:I,setFloatingWidget:z,clearLastActivityFlag:C,handleUiVersionDrift:b,setAgentStatus:e,setAgentDraft:h,setAgentPlan:a,setAgentThought:t,setPendingRequest:_0,clearAgentRunState:q0,getAgentStatus:Z0,noteAgentActivity:K0,showLastActivity:B0,refreshTimeline:U0,refreshModelAndQueueState:f0,refreshActiveChatAgents:M0,refreshCurrentChatBranches:A0,notifyForFinalResponse:b0,setContextUsage:u0,refreshContextUsage:p0,refreshQueueState:n0,setFollowupQueueItems:E0,clearQueuedSteerStateIfStale:d0,setSteerQueuedTurnId:F0,applyModelState:x0,getAgentContext:i0,setExtensionStatusPanels:s0,setPendingExtensionPanelActions:R1,refreshActiveEditorFromWorkspace:q1,showIntentToast:l0,removeStalledPost:B1,setPosts:Q1,preserveTimelineScrollTop:t0}=j,{turnId:V0,isCurrentChatEvent:R0}=MZ(_,$,Q);if(R0)Z($),Y($);if(_==="ui_theme"){I7($);return}let j1=AZ(_);if(j1.kind==="update"){if(!R0)return;if(j1.shouldAdoptTurn&&I5(V0,q.current))P(V0);I($,j1.fallbackStatus||"streaming");return}if(j1.kind==="close"){if(!R0)return;z((m)=>oj(m,$));return}if(_?.startsWith("agent_")&&!IZ(_))C();if(_==="connected"){if(b($?.app_asset_version))return;e(null),h({text:"",totalLines:0}),a(""),t({text:"",totalLines:0}),_0(null),N.current=null,q0();let m=Q;if(Z0(m).then((d)=>{if(K.current!==m)return;if(!d||d.status!=="active"||!d.data)return;let z0=d.data,k0=K6(z0);if(k0)P(k0);K0({clearSilence:!0}),B0(z0);let I0=x5(d.thought);if(I0)X.current=I0.text,t(I0);let H0=x5(d.draft);if(H0)G.current=H0.text,h(H0)}).catch((d)=>{console.warn("Failed to fetch agent status:",d)}),a_(O.current))U0();f0();return}if(_==="agent_status"){if(!R0){if($?.type==="done"||$?.type==="error")M0(),A0();return}if($.type==="done"||$.type==="error"){if(a4(V0,q.current))return;if($.type==="done"){if(b0(V0||q.current),a_(O.current))U0();if($.context_usage)u0($.context_usage)}if(p0(),r.current=!1,q0(),A.current.clear(),M0(),n0(),h({text:"",totalLines:0}),a(""),t({text:"",totalLines:0}),_0(null),$.type==="error")e({type:"error",title:$.title||"Agent error"}),setTimeout(()=>e(null),8000);else e(null)}else{if(V0)P(V0);if(K0({running:!0,clearSilence:!0}),$.type==="thinking")G.current="",X.current="",h({text:"",totalLines:0}),a(""),t({text:"",totalLines:0});e((m)=>{if(m&&m.type===$.type&&m.title===$.title)return m;return $})}return}if(_==="agent_steer_queued"){if(!R0)return;if(a4(V0,q.current))return;let m=OZ(V0,q.current);if(!m)return;V.current=m,F0(m);return}if(_==="agent_followup_queued"){if(!R0)return;E0((m)=>f9(m,$)),n0();return}if(_==="agent_followup_consumed"){if(!R0)return;let m=k5(W.current,$);if(m)d0(m.remainingQueueCount),E0((d)=>S4(d,m.rowId).items);if(n0(),a_(O.current))U0();return}if(_==="agent_followup_removed"){if(!R0)return;let m=k5(W.current,$);if(m)A.current.add(m.rowId),d0(m.remainingQueueCount),E0((d)=>S4(d,m.rowId).items);n0();return}if(_==="agent_draft_delta"){if(!R0)return;if(a4(V0,q.current))return;if(I5(V0,q.current))P(V0);K0({running:!0,clearSilence:!0}),G.current=HZ(G.current,$);let m=Date.now();if(!J.current||m-J.current>=100){J.current=m;let d=G.current;if(L.current)h((z0)=>x3(d,z0));else h(q6(d,null))}return}if(_==="agent_draft"){if(!R0)return;if(a4(V0,q.current))return;if(I5(V0,q.current))P(V0);K0({running:!0,clearSilence:!0});let m=$.text||"",d=$.mode||($.kind==="plan"?"replace":"append");if($.kind==="plan")a((z0)=>zZ(z0,m,d));else if(!L.current)G.current=m,h(q6(m,$.total_lines));return}if(_==="agent_thought_delta"){if(!R0)return;if(a4(V0,q.current))return;if(I5(V0,q.current))P(V0);K0({running:!0,clearSilence:!0}),X.current=JZ(X.current,$);let m=Date.now();if(U.current&&(!D.current||m-D.current>=100)){D.current=m;let d=X.current;t((z0)=>x3(d,z0))}return}if(_==="agent_thought"){if(!R0)return;if(a4(V0,q.current))return;if(I5(V0,q.current))P(V0);K0({running:!0,clearSilence:!0});let m=$.text||"";if(!U.current)X.current=m,t(q6(m,$.total_lines));return}if(_==="model_changed"){if(!R0)return;x0($);let m=Q;i0(m).then((d)=>{if(K.current!==m)return;if(d)u0(d)}).catch(()=>{});return}let i=DZ(_,$,Q);if(i.isStatusPanelWidgetEvent){if(i.eventChatJid!==Q)return;if(!i.panelKey)return;if(s0((m)=>Pj(m,$)),yj($))R1((m)=>i8(m,i.panelKey));C3(_,$);return}if(_==="workspace_update"){if(typeof window<"u")window.dispatchEvent(new CustomEvent("workspace-update",{detail:$}));q1($?.updates);return}if(kZ(_)){if(!R0)return;C3(_,$);let m=EZ(_,$);if(m)l0(m.title,m.detail,m.kind,m.durationMs);return}let Y0=a_(O.current);if(_==="agent_response"){if(!R0)return;B1(),c.current={post:$,turnId:q.current}}if(NZ(_,R0,Y0))Q1((m)=>GZ(m,$)),E.current?.();if(_==="interaction_updated"){if(!I3(R0,Y0))return;Q1((m)=>XZ(m,$))}if(_==="interaction_deleted"){if(!I3(R0,Y0))return;let m=$?.ids||[];if(m.length){if(t0(()=>{Q1((d)=>VZ(d,m))}),f.current)u.current?.({preserveScroll:!0,preserveMode:"top"})}}}async function TZ(_){let{currentChatJid:$,getAgentStatus:j,activeChatJidRef:Q,wasAgentActiveRef:Z,viewStateRef:Y,refreshTimeline:q,clearAgentRunState:K,agentStatusRef:N,pendingRequestRef:G,thoughtBufferRef:X,draftBufferRef:V,setAgentStatus:U,setAgentDraft:L,setAgentPlan:J,setAgentThought:D,setPendingRequest:O,setActiveTurn:W,noteAgentActivity:A,clearLastActivityFlag:E}=_,f=$;try{let u=await j(f);if(Q.current!==f)return null;if(!u||u.status!=="active"||!u.data){if(Z.current&&a_(Y.current))q();return Z.current=!1,K(),N.current=null,U(null),L({text:"",totalLines:0}),J(""),D({text:"",totalLines:0}),O(null),G.current=null,u??null}Z.current=!0;let c=u.data;N.current=c;let r=K6(c);if(r)W(r);A({running:!0,clearSilence:!0}),E(),U(c);let P=x5(u.thought);if(P)D((z)=>{if(T3(z,P.text))return z;return X.current=P.text,P});let I=x5(u.draft);if(I)L((z)=>{if(T3(z,I.text))return z;return V.current=I.text,I});return u}catch(u){return console.warn("Failed to fetch agent status:",u),null}}async function CZ(_){let{isAgentRunningRef:$,pendingRequestRef:j,currentTurnIdRef:Q,silentRecoveryRef:Z,silenceRefreshMs:Y,viewStateRef:q,refreshTimeline:K,refreshQueueState:N,refreshAgentStatus:G,now:X=()=>Date.now()}=_;if(!$.current)return null;if(j.current)return null;let V=Q.current||null,U=Z.current,L=X();if(U.inFlight)return null;if(U.turnId===V&&L-U.lastAttemptAt<Y)return null;U.inFlight=!0,U.lastAttemptAt=L,U.turnId=V;try{if(a_(q.current))await K();return await N(),await G()}finally{U.inFlight=!1}}function PZ(_){let{isAgentRunningRef:$,pendingRequestRef:j,lastAgentEventRef:Q,lastSilenceNoticeRef:Z,agentStatusRef:Y,silenceWarningMs:q,silenceFinalizeMs:K,silenceRefreshMs:N,isCompactionStatus:G,setAgentStatus:X,reconcileSilentTurn:V,now:U=()=>Date.now()}=_;if(!$.current)return;if(j.current)return;let L=Q.current;if(!L)return;let J=U(),D=J-L,O=G(Y.current);if(D>=K){if(!O)X({type:"waiting",title:"Re-syncing after a quiet period…"});V();return}if(D>=q&&J-Z.current>=N){if(!O){let W=Math.floor(D/1000);X({type:"waiting",title:`Waiting for model… No events for ${W}s`})}Z.current=J,V()}}function yZ(_){let{readStoredNumber:$,sidebarWidthRef:j,shellElement:Q,minWidth:Z=160,maxWidth:Y=600,fallbackWidth:q=280}=_,K=$("sidebarWidth",null),N=Number.isFinite(K)?Math.min(Math.max(Number(K),Z),Y):q;if(j.current=N,Q)Q.style.setProperty("--sidebar-width",`${N}px`);return N}async function SZ(_){let{currentHashtag:$,searchQuery:j,searchScope:Q,currentChatJid:Z,currentRootChatJid:Y,loadPosts:q,searchPosts:K,setPosts:N,setHasMore:G,scrollToBottom:X,isCancelled:V,scheduleRaf:U=(D)=>requestAnimationFrame(D),scheduleTimeout:L=(D,O)=>{setTimeout(D,O)}}=_,J=()=>{if(V())return;U(()=>{if(V())return;L(()=>{if(V())return;X()},0)})};if($){await q($);return}if(j){try{let D=await K(j,50,0,Z,Q,Y);if(V())return;N(Array.isArray(D?.results)?D.results:[]),G(!1)}catch(D){if(V())return;console.error("Failed to search:",D),N([]),G(!1)}return}try{await q(),J()}catch(D){if(V())return;console.error("Failed to load timeline:",D)}}function wZ(_){let{hasWindow:$=typeof window<"u",nextChatJid:j,currentChatJid:Q,chatOnlyMode:Z,currentHref:Y,navigate:q}=_;if(!$)return!1;let K=typeof j==="string"?j.trim():"";if(!K||K===Q)return!1;let N=V4(Y,K,{chatOnly:Z});return q?.(N),!0}async function RZ(_){let{panePath:$,tabStripActiveId:j,editorInstanceRef:Q,dockInstanceRef:Z,terminalTabPath:Y}=_,K=(typeof j==="string"?j.trim():"")===$?Q.current:$===Y?Z.current:null;if(typeof K?.preparePopoutTransfer!=="function")return null;return await K.preparePopoutTransfer()}function uZ(_){let{panePath:$,terminalTabPath:j,dockVisible:Q,resolveTab:Z,closeTab:Y,setDockVisible:q}=_,K=Z($);if(K&&!K.dirty){Y($);return}if($===j&&Q)q(!1)}function fZ(_){let{hasWindow:$=typeof window<"u",editorOpen:j,shellElement:Q,editorWidthRef:Z,dockHeightRef:Y,sidebarWidthRef:q,readStoredNumber:K}=_;if(!j||!$||!Q)return;if(!Z.current){let N=K("editorWidth",null),G=q.current||280;Z.current=Number.isFinite(N)?Number(N):G}if(Q.style.setProperty("--editor-width",`${Z.current}px`),!Y.current){let N=K("dockHeight",null);Y.current=Number.isFinite(N)?Number(N):200}Q.style.setProperty("--dock-height",`${Y.current}px`)}function P3(_,$){if(typeof $!=="string")return Array.isArray(_)?_:[];let j=$.trim();if(!j)return Array.isArray(_)?_:[];let Q=Array.isArray(_)?_:[];if(Q.includes(j))return Q;return[...Q,j]}function y3(_,$){let j=Array.isArray(_)?_:[];if(typeof $!=="string")return j;let Q=$.trim();if(!Q)return j;if(!j.includes(Q))return j;return j.filter((Z)=>Z!==Q)}function S3(_){if(!Array.isArray(_))return[];let $=[],j=new Set;for(let Q of _){if(typeof Q!=="string")continue;let Z=Q.trim();if(!Z||j.has(Z))continue;j.add(Z),$.push(Z)}return $}async function vZ(_){let{hashtag:$,setCurrentHashtag:j,setPosts:Q,loadPosts:Z}=_;j($),Q(null),await Z($)}async function gZ(_){let{setCurrentHashtag:$,setSearchQuery:j,setPosts:Q,loadPosts:Z}=_;$(null),j(null),Q(null),await Z()}async function bZ(_){let{query:$,scope:j,currentChatJid:Q,currentRootChatJid:Z,searchPosts:Y,setSearchScope:q,setSearchQuery:K,setCurrentHashtag:N,setPosts:G,setHasMore:X}=_,V=typeof $==="string"?$.trim():"";if(!V)return;let U=j==="root"||j==="all"?j:"current";q(U),K(V),N(null),G(null);try{let L=await Y(V,50,0,Q,U,Z);G(Array.isArray(L?.results)?L.results:[]),X(!1)}catch(L){console.error("Failed to search:",L),G([])}}async function mZ(_){let{post:$,posts:j,currentChatJid:Q,deletePost:Z,preserveTimelineScrollTop:Y,setPosts:q,setRemovingPostIds:K,hasMoreRef:N,loadMoreRef:G,confirm:X=(W)=>window.confirm(W),showAlert:V=(W)=>alert(W),scheduleTimeout:U=(W,A)=>{setTimeout(W,A)}}=_;if(!$)return;let L=$.id,J=typeof $?.chat_jid==="string"&&$.chat_jid.trim()?$.chat_jid.trim():Q,D=j?.filter((W)=>W?.data?.thread_id===L&&W?.id!==L).length||0;if(D>0){if(!X(`Delete this message and its ${D} replies?`))return}let O=(W)=>{if(!W.length)return;K((A)=>{let E=new Set(A);return W.forEach((f)=>E.add(f)),E}),U(()=>{if(Y(()=>{q((A)=>A?A.filter((E)=>!W.includes(E.id)):A)}),K((A)=>{let E=new Set(A);return W.forEach((f)=>E.delete(f)),E}),N.current)G.current?.({preserveScroll:!0,preserveMode:"top"})},180)};try{let W=await Z(L,D>0,J);if(W?.ids?.length)O(W.ids)}catch(W){let A=W instanceof Error?W.message:String(W||"");if(D===0&&A.includes("Replies exist")){if(!X("Delete this message and its replies?"))return;let f=await Z(L,!0,J);if(f?.ids?.length)O(f.ids);return}console.error("Failed to delete post:",W),V(`Failed to delete message: ${A}`)}}function hZ(_){let{btwAbortRef:$,setBtwSession:j}=_;if($.current)$.current.abort(),$.current=null;j(null)}async function pZ(_){let{question:$,currentChatJid:j,streamSidePrompt:Q,resolveBtwChatJid:Z,showIntentToast:Y,btwAbortRef:q,setBtwSession:K}=_,N=String($||"").trim();if(!N)return Y("BTW needs a question","Usage: /btw <question>","warning"),!0;if(q.current)q.current.abort();let G=new AbortController;q.current=G,K({question:N,answer:"",thinking:"",error:null,model:null,status:"running"});try{let X=await Q(N,{signal:G.signal,chatJid:Z(j),systemPrompt:"Answer the user briefly and directly. This is a side conversation that should not affect the main chat until explicitly injected.",onEvent:(V)=>{if(V==="side_prompt_start")K((U)=>U?{...U,status:"running"}:U)},onThinkingDelta:(V)=>{K((U)=>U?{...U,thinking:`${U.thinking||""}${V||""}`}:U)},onTextDelta:(V)=>{K((U)=>U?{...U,answer:`${U.answer||""}${V||""}`}:U)}});if(q.current!==G)return!0;K((V)=>V?{...V,answer:X?.result||V.answer||"",thinking:X?.thinking||V.thinking||"",model:X?.model||null,status:"success",error:null}:V)}catch(X){if(G.signal.aborted)return!0;K((V)=>V?{...V,status:"error",error:X?.payload?.error||X?.message||"BTW request failed."}:V)}finally{if(q.current===G)q.current=null}return!0}async function cZ(_){let{content:$,parseBtwCommand:j,closeBtwPanel:Q,runBtwPrompt:Z,showIntentToast:Y}=_,q=j($);if(!q)return!1;if(q.type==="help")return Y("BTW usage","Use /btw <question> to open a side conversation.","info",4000),!0;if(q.type==="clear")return Q(),Y("BTW cleared","Closed the side conversation panel.","info"),!0;if(q.type==="ask")return await Z(q.question),!0;return!1}async function lZ(_){let{btwSession:$,buildBtwInjectionText:j,isComposeBoxAgentActive:Q,currentChatJid:Z,sendAgentMessage:Y,handleMessageResponse:q,showIntentToast:K}=_,N=j($);if(!N)return!1;try{let G=await Y("default",N,null,[],Q?"queue":null,Z);return q(G),K(G?.queued==="followup"?"BTW queued":"BTW injected",G?.queued==="followup"?"The BTW summary was queued as a follow-up because the agent is busy.":"The BTW summary was sent to the main chat.","info",3500),!0}catch(G){return K("BTW inject failed",G?.message||"Could not inject BTW answer into chat.","warning"),!1}}var OX=Xj(),nZ=y6,AX=w6,DX=u6,EX=m6,kX=h6,w3=f6,R3=__(r1,"getAgentContext",null),MX=__(r1,"getAutoresearchStatus",null),IX=__(r1,"stopAutoresearch",{status:"ok"}),xX=__(r1,"dismissAutoresearch",{status:"ok"}),dZ=__(r1,"getAgentModels",{current:null,models:[]}),iZ=__(r1,"getActiveChatAgents",{chats:[]}),N6=__(r1,"getChatBranches",{chats:[]}),TX=__(r1,"renameChatBranch",null),CX=__(r1,"pruneChatBranch",null),PX=__(r1,"restoreChatBranch",null),rZ=__(r1,"getAgentQueueState",{count:0}),oZ=__(r1,"steerAgentQueueItem",{removed:!1,queued:"steer"}),sZ=__(r1,"removeAgentQueueItem",{removed:!1}),yX=__(r1,"streamSidePrompt",null);if(window.marked)marked.setOptions({breaks:!0,gfm:!0});c0.register(s6);c0.register(P$);c0.register(C$);c0.register(y$);c0.register(S$);c0.register(w$);c0.register(u$);c0.register(f$);c0.register(g$);c0.register(h$);c0.register(p$);c0.register(A$);a6();c0.register(_$);c0.register($$);function SX({locationParams:_,navigate:$}){let{currentChatJid:j,chatOnlyMode:Q,panePopoutMode:Z,panePopoutPath:Y,panePopoutLabel:q,branchLoaderMode:K,branchLoaderSourceChatJid:N}=w0(()=>Lj(_),[_]),[G,X]=g("disconnected"),[V,U]=g(()=>X4()),[L,J]=g(null),[D,O]=g(null),[W,A]=g(!1),[E,f]=g("current"),[u,c]=g([]),[r,P]=g([]),[I,z]=g(null),{agentStatus:C,setAgentStatus:b,agentDraft:e,setAgentDraft:h,agentPlan:a,setAgentPlan:t,agentThought:_0,setAgentThought:q0,pendingRequest:Z0,setPendingRequest:K0,currentTurnId:B0,setCurrentTurnId:U0,steerQueuedTurnId:f0,setSteerQueuedTurnId:M0,lastAgentEventRef:A0,lastSilenceNoticeRef:b0,isAgentRunningRef:u0,draftBufferRef:p0,thoughtBufferRef:n0,pendingRequestRef:E0,stalledPostIdRef:d0,currentTurnIdRef:F0,steerQueuedTurnIdRef:x0,thoughtExpandedRef:i0,draftExpandedRef:s0}=N9(),[R1,q1]=g({}),[l0,B1]=g(null),[Q1,t0]=g(null),[V0,R0]=g(!1),[j1,i]=g(null),[Y0,m]=g([]),[d,z0]=g([]),[k0,I0]=g(null),[H0,C0]=g(()=>new Map),[v0,L0]=g(()=>new Set),[S0,J0]=g([]),[j0,y]=g(!1),[o,X0]=g(()=>Uj()),[O0,g0]=g(null),e0=x(new Set),N1=w0(()=>Y0.find((M)=>M?.chat_jid===j)||null,[Y0,j]),k1=w0(()=>d.find((M)=>M?.chat_jid===j)||N1||null,[N1,d,j]),u1=k1?.root_chat_jid||N1?.root_chat_jid||j,w_=Vj(E),[$_,g1]=g(()=>({status:K?"running":"idle",message:K?"Preparing a new chat branch…":""})),o1=S0.length,c1=x(new Set),_1=x([]),s1=x(new Set),t_=x(0),j_=x({inFlight:!1,lastAttemptAt:0,turnId:null});c1.current=new Set(S0.map((M)=>M.row_id)),_1.current=S0;let{notificationsEnabled:e_,notificationPermission:p_,toggleNotifications:M1,notify:a1}=q9(),[I1,W1]=g(()=>new Set),[F1,L_]=g(()=>O5("workspaceOpen",!0)),B_=x(null),{editorOpen:T1,tabStripTabs:t1,tabStripActiveId:K1,previewTabs:C1,tabPaneOverrides:Q_,openEditor:b1,closeEditor:_4,handleTabClose:O_,handleTabActivate:$4,handleTabCloseOthers:A_,handleTabCloseAll:F4,handleTabTogglePin:D_,handleTabTogglePreview:R_,handleTabEditSource:u4,revealInExplorer:f4}=X9({onTabClosed:(M)=>B_.current?.(M)}),Z1=x(null),x1=x(null),z4=x(null),Z_=x(null),E_=c0.getDockPanes().length>0,[l1,A1]=g(!1),f1=T(()=>A1((M)=>!M),[]),G1=T(()=>{b1(d4,{label:"Terminal"})},[b1]),Y_=T(()=>{b1(B4,{label:"VNC"})},[b1]),q_=w0(()=>e9(t1,K1),[K1,t1]),K_=w0(()=>_j(Q_,K1),[Q_,K1]),c_=w0(()=>$j(q,q_,Y),[q_,q,Y]),m1=w0(()=>jj(t1,C1,K1),[C1,K1,t1]),v1=w0(()=>Qj(Y,B4),[Y]),N_=w0(()=>Zj(Y,d4,m1,v1),[v1,m1,Y]),u_=Yj(Z,Q,T1,E_,l1),[z1,k_]=g(!1),X1=x(!1),f_=T(()=>{if(!T1||Q)return;if(X1.current=l1,l1)A1(!1);k_(!0)},[T1,Q,l1]),M_=T(()=>{if(!z1)return;if(k_(!1),X1.current)A1(!0),X1.current=!1},[z1]),v4=T(()=>{if(z1)M_();else f_()},[z1,f_,M_]);v(()=>{if(z1&&!T1)M_()},[z1,T1,M_]),v(()=>{if(!Z||!Y)return;if(o0.getActiveId()===Y)return;b1(Y,q?{label:q}:void 0)},[b1,q,Z,Y]),v(()=>{let M=Z1.current;if(!M)return;if(x1.current)x1.current.dispose(),x1.current=null;let s=K1;if(!s)return;let W0={path:s,mode:"edit"},m0=(K_?c0.get(K_):null)||c0.resolve(W0)||c0.get("editor");if(!m0){M.innerHTML='<div style="padding:2em;color:var(--text-secondary);text-align:center;">No editor available for this file.</div>';return}let D0=m0.mount(M,W0);x1.current=D0,D0.onDirtyChange?.(($1)=>{o0.setDirty(s,$1)}),D0.onSaveRequest?.(()=>{}),D0.onClose?.(()=>{_4()});let a0=o0.getViewState(s);if(a0&&typeof D0.restoreViewState==="function")requestAnimationFrame(()=>D0.restoreViewState(a0));if(typeof D0.onViewStateChange==="function")D0.onViewStateChange(($1)=>{o0.saveViewState(s,$1)});return requestAnimationFrame(()=>D0.focus()),()=>{if(x1.current===D0)D0.dispose(),x1.current=null}},[K1,K_,_4]);let g4=T(async(M)=>{let s=typeof K1==="string"?K1.trim():"",W0=x1.current;if(!s||!W0?.setContent)return;if(typeof W0.isDirty==="function"&&W0.isDirty())return;if(!(Array.isArray(M)&&M.length>0?M.some((D0)=>{let a0=Array.isArray(D0?.changed_paths)?D0.changed_paths.map((V1)=>typeof V1==="string"?V1.trim():"").filter(Boolean):[];if(a0.length>0)return a0.some((V1)=>V1==="."||V1===s);let $1=typeof D0?.path==="string"?D0.path.trim():"";return!$1||$1==="."||$1===s}):!0))return;try{let D0=await g5(s,1e6,"edit"),a0=typeof D0?.text==="string"?D0.text:"",$1=typeof D0?.mtime==="string"&&D0.mtime.trim()?D0.mtime.trim():new Date().toISOString();W0.setContent(a0,$1)}catch(D0){console.warn("[workspace_update] Failed to refresh active pane:",D0)}},[K1]);v(()=>{let M=z4.current;if(Z_.current)Z_.current.dispose(),Z_.current=null;if(!M||!E_||!l1)return;let s=c0.getDockPanes()[0];if(!s){M.innerHTML='<div class="terminal-placeholder">No dock pane available.</div>';return}let W0=s.mount(M,{mode:"view"});return Z_.current=W0,requestAnimationFrame(()=>W0.focus?.()),()=>{if(Z_.current===W0)W0.dispose(),Z_.current=null}},[E_,l1]);let[v_,g_]=g({name:"You",avatar_url:null,avatar_background:null}),b4=x(null),j4=x(!1),t4=x(!1),Q4=x(!1),l_=x(null),n1=x(j),H4=x(new Map),J4=x(j),T5=x(0),D1=x(0),O4=x({}),e4=x({name:null,avatar_url:null}),G_=x({currentHashtag:null,searchQuery:null,searchOpen:!1}),X_=x(null),Z4=x(null),m4=x(0),h4=x(0),_5=x(0),Y4=x(null),I_=x(null),$5=x(null),A4=x(null),p4=x(0),x_=x({title:null,avatarBase:null}),H=x(null),k=x(!1),[R,S]=g(!1),n=x(0),[Q0,N0]=g(!1),[G0,$0]=g(""),P0=w0(()=>c8(G0,k1?.agent_name||""),[k1?.agent_name,G0]),y1=x(null),e1=T(()=>{if(H.current)clearTimeout(H.current),H.current=null;z(null)},[]);W9(30000),v(()=>{if(!Q0)return;requestAnimationFrame(()=>{if(Q0)y1.current?.focus(),y1.current?.select?.()})},[Q0]),v(()=>{return M7()},[]),v(()=>{return r9(U)},[]),v(()=>{Y1("workspaceOpen",String(F1))},[F1]),v(()=>{return i9()},[]),v(()=>{return()=>{e1()}},[e1]),v(()=>{if(!o){Y1(BTW_SESSION_KEY,"");return}Y1(BTW_SESSION_KEY,JSON.stringify({question:o.question||"",answer:o.answer||"",thinking:o.thinking||"",error:o.error||null,status:o.status||"success"}))},[o]),v(()=>{O4.current=R1||{}},[R1]),v(()=>{n1.current=j},[j]),v(()=>{e4.current=v_||{name:"You",avatar_url:null,avatar_background:null}},[v_]);let h1=T((M,s,W0=null)=>{if(typeof document>"u")return;let m0=(M||"").trim()||"PiClaw";if(x_.current.title!==m0){document.title=m0;let W_=document.querySelector('meta[name="apple-mobile-web-app-title"]');if(W_&&W_.getAttribute("content")!==m0)W_.setAttribute("content",m0);x_.current.title=m0}let D0=document.getElementById("dynamic-favicon");if(!D0)return;let a0=D0.getAttribute("data-default")||D0.getAttribute("href")||"/favicon.ico",$1=s||a0,V1=s?`${$1}|${W0||""}`:$1;if(x_.current.avatarBase!==V1){let W_=s?`${$1}${$1.includes("?")?"&":"?"}v=${W0||Date.now()}`:$1;D0.setAttribute("href",W_),x_.current.avatarBase=V1}},[]),C5=T((M)=>{c((s)=>P3(s,M))},[]),F=T((M)=>{c((s)=>y3(s,M))},[]);B_.current=F;let w=T(()=>{c([])},[]),l=T((M)=>{c(S3(M))},[]),p=T((M,s=null,W0="info",m0=3000)=>{e1(),z({title:M,detail:s||null,kind:W0||"info"}),H.current=setTimeout(()=>{z((D0)=>D0?.title===M?null:D0)},m0)},[e1]),T0=T((M)=>{let s=H9(M,{editorOpen:T1,resolvePane:(W0)=>c0.resolve(W0)});if(s.kind==="open"){b1(s.path);return}if(s.kind==="toast")p(s.title,s.detail,s.level)},[T1,b1,p]),H1=T(()=>{let M=K1;if(M)C5(M)},[K1,C5]),P1=T((M)=>{P((s)=>P3(s,M))},[]),S1=T(async(M,s=null)=>{let W0=(D0)=>{D0.scrollIntoView({behavior:"smooth",block:"center"}),D0.classList.add("post-highlight"),setTimeout(()=>D0.classList.remove("post-highlight"),2000)},m0=document.getElementById("post-"+M);if(m0){W0(m0);return}try{let D0=typeof s==="string"&&s.trim()?s.trim():j,$1=(await S6(M,D0))?.thread?.[0];if(!$1)return;C_((V1)=>{if(!V1)return[$1];if(V1.some((W_)=>W_.id===$1.id))return V1;return[...V1,$1]}),requestAnimationFrame(()=>{setTimeout(()=>{let V1=document.getElementById("post-"+M);if(V1)W0(V1)},50)})}catch(D0){console.error("[scrollToMessage] Failed to fetch message",M,D0)}},[j]),q4=T((M)=>{P((s)=>y3(s,M))},[]),c4=T(()=>{P([])},[]),j5=T((M)=>{P(S3(M))},[]),Q5=T((M)=>{let s=typeof M==="string"&&M.trim()?M.trim():"Could not send your message.";p("Compose failed",s,"error",5000)},[p]),K4=T((M={})=>{let s=Date.now();if(A0.current=s,M.running)u0.current=!0,y((W0)=>W0?W0:!0);if(M.clearSilence)b0.current=0},[y]),p1=T(()=>{if(A4.current)clearTimeout(A4.current),A4.current=null;p4.current=0},[]);v(()=>()=>{p1()},[p1]);let Z5=T(()=>{p1(),b((M)=>{if(!M)return M;if(!(M.last_activity||M.lastActivity))return M;let{last_activity:s,lastActivity:W0,...m0}=M;return m0})},[p1]),D4=T((M)=>{if(!M)return;p1();let s=Date.now();p4.current=s,b({type:M.type||"active",last_activity:!0}),A4.current=setTimeout(()=>{if(p4.current!==s)return;b((W0)=>{if(!W0||!(W0.last_activity||W0.lastActivity))return W0;return null})},U9)},[p1]),J1=T(()=>{u0.current=!1,y(!1),A0.current=null,b0.current=0,p0.current="",n0.current="",E0.current=null,I_.current=null,F0.current=null,x0.current=null,l_.current=null,j_.current={inFlight:!1,lastAttemptAt:0,turnId:null},p1(),U0(null),M0(null),i0.current=!1,s0.current=!1},[p1,U0,M0,y]),n_=T((M)=>{if(!k9({remainingQueueCount:M,currentTurnId:F0.current,isAgentTurnActive:j0}))return;x0.current=null,M0(null)},[j0,M0]),Y5=T(()=>xj({agentStatus:C,agentDraft:e,agentPlan:a,agentThought:_0,pendingRequest:Z0,currentTurnId:B0,steerQueuedTurnId:f0,isAgentTurnActive:j0,followupQueueItems:S0,activeModel:l0,activeThinkingLevel:Q1,supportsThinking:V0,activeModelUsage:j1,contextUsage:k0,isAgentRunning:u0.current,wasAgentActive:Q4.current,draftBuffer:p0.current,thoughtBuffer:n0.current,lastAgentEvent:A0.current,lastSilenceNotice:b0.current,lastAgentResponse:I_.current,currentTurnIdRef:F0.current,steerQueuedTurnIdRef:x0.current,thoughtExpanded:i0.current,draftExpanded:s0.current,agentStatusRef:l_.current,silentRecovery:j_.current}),[l0,j1,Q1,e,a,C,_0,k0,B0,S0,j0,Z0,f0,V0]),Y8=T((M)=>{Tj({snapshot:M,clearLastActivityTimer:p1,refs:{isAgentRunningRef:u0,wasAgentActiveRef:Q4,lastAgentEventRef:A0,lastSilenceNoticeRef:b0,draftBufferRef:p0,thoughtBufferRef:n0,pendingRequestRef:E0,lastAgentResponseRef:I_,currentTurnIdRef:F0,steerQueuedTurnIdRef:x0,agentStatusRef:l_,silentRecoveryRef:j_,thoughtExpandedRef:i0,draftExpandedRef:s0},setters:{setIsAgentTurnActive:y,setAgentStatus:b,setAgentDraft:h,setAgentPlan:t,setAgentThought:q0,setPendingRequest:K0,setCurrentTurnId:U0,setSteerQueuedTurnId:M0,setFollowupQueueItems:J0,setActiveModel:B1,setActiveThinkingLevel:t0,setSupportsThinking:R0,setActiveModelUsage:i,setContextUsage:I0}})},[p1,U0,J0,y,M0]),q5=T((M)=>{if(!M)return;if(F0.current===M)return;F0.current=M,j_.current={inFlight:!1,lastAttemptAt:0,turnId:M},U0(M),x0.current=null,M0(null),p0.current="",n0.current="",h({text:"",totalLines:0}),t(""),q0({text:"",totalLines:0}),K0(null),E0.current=null,I_.current=null,i0.current=!1,s0.current=!1},[U0,M0]),E4=T((M)=>{if(typeof document<"u"){let W_=typeof document.hasFocus==="function"?document.hasFocus():!0;if(!document.hidden&&W_)return}let s=I_.current;if(!s||!s.post)return;if(M&&s.turnId&&s.turnId!==M)return;let W0=s.post;if(W0.id&&Y4.current===W0.id)return;let m0=String(W0?.data?.content||"").trim();if(!m0)return;Y4.current=W0.id||Y4.current,I_.current=null;let D0=m0.replace(/\s+/g," ").slice(0,200),a0=O4.current||{},V1=(W0?.data?.agent_id?a0[W0.data.agent_id]:null)?.name||"Pi";a1(V1,D0)},[a1]),T_=T(async(M,s)=>{await z9({panelKey:M,expanded:s,currentTurnIdRef:F0,thoughtExpandedRef:i0,draftExpandedRef:s0,setAgentThoughtVisibility:kX,getAgentThought:EX,thoughtBufferRef:n0,draftBufferRef:p0,setAgentThought:q0,setAgentDraft:h})},[]),k4=x(null),P5=T(()=>{let M=X_.current;if(!M)return;if(!(Math.abs(M.scrollTop)>150))M.scrollTop=0},[]);k4.current=P5;let G6=T((M)=>{let s=X_.current;if(!s||typeof M!=="function"){M?.();return}let{currentHashtag:W0,searchQuery:m0,searchOpen:D0}=G_.current||{},a0=!((m0||D0)&&!W0),$1=a0?s.scrollHeight-s.scrollTop:s.scrollTop;M(),requestAnimationFrame(()=>{let V1=X_.current;if(!V1)return;if(a0){let W_=Math.max(V1.scrollHeight-$1,0);V1.scrollTop=W_}else{let W_=Math.max(V1.scrollHeight-V1.clientHeight,0),PY=Math.min($1,W_);V1.scrollTop=PY}})},[]),q8=T((M)=>{let s=X_.current;if(!s||typeof M!=="function"){M?.();return}let W0=s.scrollTop;M(),requestAnimationFrame(()=>{let m0=X_.current;if(!m0)return;let D0=Math.max(m0.scrollHeight-m0.clientHeight,0);m0.scrollTop=Math.min(W0,D0)})},[]),u3=T((M)=>w9(M,c1.current),[]),{posts:K8,setPosts:C_,hasMore:aZ,setHasMore:X6,hasMoreRef:f3,loadPosts:d_,refreshTimeline:P_,loadMore:tZ,loadMoreRef:v3}=K9({preserveTimelineScroll:G6,preserveTimelineScrollTop:q8,chatJid:j}),K5=w0(()=>u3(K8),[K8,S0,u3]),N8=T(()=>{let M=d0.current;if(!M)return;C_((s)=>s?s.filter((W0)=>W0.id!==M):s),d0.current=null},[C_]),{handleSplitterMouseDown:eZ,handleSplitterTouchStart:_Y,handleEditorSplitterMouseDown:$Y,handleEditorSplitterTouchStart:jY,handleDockSplitterMouseDown:QY,handleDockSplitterTouchStart:ZY}=G9({appShellRef:Z4,sidebarWidthRef:m4,editorWidthRef:h4,dockHeightRef:_5}),g3=T(()=>{if(!u0.current)return;u0.current=!1,b0.current=0,A0.current=null,F0.current=null,U0(null),i0.current=!1,s0.current=!1;let M=(p0.current||"").trim();if(p0.current="",n0.current="",h({text:"",totalLines:0}),t(""),q0({text:"",totalLines:0}),K0(null),E0.current=null,I_.current=null,!M){b({type:"error",title:"Response stalled - No content received"});return}let W0=`${M}${`

⚠️ Response may be incomplete - the model stopped responding`}`,m0=Date.now(),D0=new Date().toISOString(),a0={id:m0,timestamp:D0,data:{type:"agent_response",content:W0,agent_id:"default",is_local_stall:!0}};d0.current=m0,C_(($1)=>$1?_8([...$1,a0]):[a0]),k4.current?.(),b(null)},[U0]);v(()=>{G_.current={currentHashtag:L,searchQuery:D,searchOpen:W}},[L,D,W]);let E1=T(()=>{UZ({currentChatJid:j,queueRefreshGenRef:t_,activeChatJidRef:n1,dismissedQueueRowIdsRef:s1,getAgentQueueState:rZ,setFollowupQueueItems:J0,clearQueuedSteerStateIfStale:n_})},[n_,j]),V_=T(async()=>{await LZ({currentChatJid:j,activeChatJidRef:n1,getAgentContext:R3,setContextUsage:I0})},[j]),i_=T(async()=>{await BZ({currentChatJid:j,activeChatJidRef:n1,getAutoresearchStatus:MX,setExtensionStatusPanels:C0,setPendingExtensionPanelActions:L0})},[j]),r_=T(async()=>{return await TZ({currentChatJid:j,getAgentStatus:w3,activeChatJidRef:n1,wasAgentActiveRef:Q4,viewStateRef:G_,refreshTimeline:P_,clearAgentRunState:J1,agentStatusRef:l_,pendingRequestRef:E0,thoughtBufferRef:n0,draftBufferRef:p0,setAgentStatus:b,setAgentDraft:h,setAgentPlan:t,setAgentThought:q0,setPendingRequest:K0,setActiveTurn:q5,noteAgentActivity:K4,clearLastActivityFlag:Z5})},[J1,Z5,j,K4,P_,q5]),b3=T(async()=>{return await CZ({isAgentRunningRef:u0,pendingRequestRef:E0,currentTurnIdRef:F0,silentRecoveryRef:j_,silenceRefreshMs:n$,viewStateRef:G_,refreshTimeline:P_,refreshQueueState:E1,refreshAgentStatus:r_})},[r_,E1,P_]);v(()=>{let M=Math.min(1000,Math.max(100,Math.floor(l$/2))),s=setInterval(()=>{PZ({isAgentRunningRef:u0,pendingRequestRef:E0,lastAgentEventRef:A0,lastSilenceNoticeRef:b0,agentStatusRef:l_,silenceWarningMs:l$,silenceFinalizeMs:V9,silenceRefreshMs:n$,isCompactionStatus:y4,setAgentStatus:b,reconcileSilentTurn:b3})},M);return()=>clearInterval(s)},[b3]);let m3=T((M)=>{return Bj({serverVersion:M,currentAppAssetVersion:OX,staleUiVersionRef:b4,staleUiReloadScheduledRef:j4,tabStoreHasUnsaved:()=>o0.hasUnsaved(),isAgentRunningRef:u0,pendingRequestRef:E0,showIntentToast:p})},[u0,E0,p]),YY=T((M)=>{Wj({status:M,setConnectionStatus:X,setAgentStatus:b,setAgentDraft:h,setAgentPlan:t,setAgentThought:q0,setPendingRequest:K0,pendingRequestRef:E0,clearAgentRunState:J1,hasConnectedOnceRef:t4,viewStateRef:G_,refreshTimeline:P_,refreshAgentStatus:r_,refreshQueueState:E1,refreshContextUsage:V_})},[J1,P_,r_,E1,V_]),qY=T(async(M)=>{await vZ({hashtag:M,setCurrentHashtag:J,setPosts:C_,loadPosts:d_})},[d_]),KY=T(async()=>{await gZ({setCurrentHashtag:J,setSearchQuery:O,setPosts:C_,loadPosts:d_})},[d_]),NY=T(async(M,s=E)=>{await bZ({query:M,scope:s,currentChatJid:j,currentRootChatJid:u1,searchPosts:nZ,setSearchScope:f,setSearchQuery:O,setCurrentHashtag:J,setPosts:C_,setHasMore:X6})},[j,u1,E]),GY=T(()=>{A(!0),O(null),J(null),f("current"),C_([])},[]),XY=T(()=>{A(!1),O(null),d_()},[d_]),RX=T(()=>{},[]),VY=!L&&!D&&!W,UY=T(async(M)=>{await mZ({post:M,posts:K5,currentChatJid:j,deletePost:AX,preserveTimelineScrollTop:q8,setPosts:C_,setRemovingPostIds:W1,hasMoreRef:f3,loadMoreRef:v3})},[j,K5,q8]),h3=T(async()=>{await g9({getAgents:DX,setAgents:q1,setUserProfile:g_,applyBranding:h1})},[h1]);v(()=>{h3(),yZ({readStoredNumber:r5,sidebarWidthRef:m4,shellElement:Z4.current})},[h3]);let y5=j0||C!==null,p3=T((M)=>{b9({payload:M,agentsRef:O4,setAgents:q1,applyBranding:h1})},[h1]),c3=T((M)=>{m9({payload:M,setUserProfile:g_})},[]),S5=T((M)=>{h9({payload:M,setActiveModel:B1,setActiveThinkingLevel:t0,setSupportsThinking:R0,setActiveModelUsage:i})},[]),G8=T(()=>{p9({currentChatJid:j,getAgentModels:dZ,activeChatJidRef:n1,applyModelState:S5})},[S5,j]),d1=T(()=>{c9({currentChatJid:j,getActiveChatAgents:iZ,getChatBranches:N6,activeChatJidRef:n1,setActiveChatAgents:m})},[j]),i1=T(()=>{l9({currentRootChatJid:u1,getChatBranches:N6,setCurrentChatBranches:z0})},[u1]),LY=T((M)=>{NQ({queuedItem:M,followupQueueItemsRef:_1,dismissedQueueRowIdsRef:s1,currentChatJid:j,refreshQueueState:E1,setFollowupQueueItems:J0,showIntentToast:p,steerAgentQueueItem:oZ,removeAgentQueueItem:sZ})},[j,E1,J0,p]),BY=T((M)=>{GQ({queuedItem:M,followupQueueItemsRef:_1,dismissedQueueRowIdsRef:s1,currentChatJid:j,refreshQueueState:E1,setFollowupQueueItems:J0,showIntentToast:p,clearQueuedSteerStateIfStale:n_,steerAgentQueueItem:oZ,removeAgentQueueItem:sZ})},[n_,j,E1,J0,p]),w5=T((M)=>{n9({response:M,refreshActiveChatAgents:d1,refreshCurrentChatBranches:i1,refreshContextUsage:V_,refreshAutoresearchStatus:i_,refreshQueueState:E1})},[d1,i_,i1,V_,E1]),WY=T(async(M,s)=>{let W0=typeof M?.key==="string"?M.key:"",m0=typeof s?.key==="string"?s.key:"",D0=e$(W0,m0);if(!W0||!m0)return;L0((a0)=>Sj(a0,W0,m0));try{let a0=await Rj({panel:M,action:s,currentChatJid:j,stopAutoresearch:IX,dismissAutoresearch:xX,writeClipboard:($1)=>navigator.clipboard.writeText($1)});if(a0.refreshAutoresearchStatus)i_();if(a0.toast)p(a0.toast.title,a0.toast.detail,a0.toast.kind,a0.toast.durationMs)}catch(a0){p("Panel action failed",a0?.message||"Could not complete that action.","warning")}finally{L0((a0)=>wj(a0,D0))}},[j,i_,p]),V6=T(()=>{hZ({btwAbortRef:$5,setBtwSession:X0})},[]),X8=T(async(M)=>{return await pZ({question:M,currentChatJid:j,streamSidePrompt:yX,resolveBtwChatJid:O9,showIntentToast:p,btwAbortRef:$5,setBtwSession:X0})},[j,p]),FY=T(async({content:M})=>{return await cZ({content:M,parseBtwCommand:J9,closeBtwPanel:V6,runBtwPrompt:X8,showIntentToast:p})},[V6,X8,p]),zY=T(()=>{if(o?.question)X8(o.question)},[o,X8]),HY=T(async()=>{await lZ({btwSession:o,buildBtwInjectionText:E9,isComposeBoxAgentActive:y5,currentChatJid:j,sendAgentMessage:n4,handleMessageResponse:w5,showIntentToast:p})},[o,j,w5,y5,p]),l3=T(async(M=null)=>{return KQ({requestPayload:M,currentChatJid:j,currentRootChatJid:u1,getAgentStatus:w3,getAgentContext:R3,getAgentQueueState:rZ,getAgentModels:dZ,getActiveChatAgents:iZ,getChatBranches:N6,getTimeline:l4,rawPosts:K8,activeChatAgents:Y0,currentChatBranches:d,contextUsage:k0,followupQueueItems:_1.current,activeModel:l0,activeThinkingLevel:Q1,supportsThinking:V0,isAgentTurnActive:j0})},[Y0,l0,Q1,k0,d,j,u1,j0,K8,V0]),N5=T(()=>{WZ({refreshModelState:G8,refreshActiveChatAgents:d1,refreshCurrentChatBranches:i1,refreshQueueState:E1,refreshContextUsage:V_,refreshAutoresearchStatus:i_})},[d1,i_,V_,i1,G8,E1]);v(()=>{N5();let M=setInterval(()=>{G8(),d1(),i1(),E1()},60000);return()=>clearInterval(M)},[N5,G8,d1,i1,E1]),v(()=>{C0(new Map),L0(new Set)},[j]),v(()=>{let M=!1;return SZ({currentHashtag:L,searchQuery:D,searchScope:E,currentChatJid:j,currentRootChatJid:u1,loadPosts:d_,searchPosts:nZ,setPosts:C_,setHasMore:X6,scrollToBottom:P5,isCancelled:()=>M}),()=>{M=!0}},[j,L,D,E,u1,d_,P5,X6,C_]),v(()=>{let M=J4.current||j;H4.current.set(M,Y5())},[j,Y5]),v(()=>{let M=J4.current||j;if(M===j)return;H4.current.set(M,Y5()),J4.current=j,s1.current.clear(),Y8(H4.current.get(j)||null),E1(),r_(),V_()},[j,r_,V_,E1,Y8,Y5]);let JY=T(()=>{FZ({viewStateRef:G_,refreshTimeline:P_,refreshModelAndQueueState:N5})},[N5,P_]),n3=T((M,s="streaming")=>{let W0=new Date().toISOString();g0((m0)=>rj(m0,M,{fallbackStatus:s,currentChatJid:j,dismissedSessionKeys:e0.current,updatedAt:W0}))},[j]),U6=T((M,s)=>{xZ(M,s,{currentChatJid:j,updateAgentProfile:p3,updateUserProfile:c3,currentTurnIdRef:F0,activeChatJidRef:n1,pendingRequestRef:E0,draftBufferRef:p0,thoughtBufferRef:n0,steerQueuedTurnIdRef:x0,thoughtExpandedRef:i0,draftExpandedRef:s0,draftThrottleRef:T5,thoughtThrottleRef:D1,viewStateRef:G_,followupQueueItemsRef:_1,dismissedQueueRowIdsRef:s1,scrollToBottomRef:k4,hasMoreRef:f3,loadMoreRef:v3,lastAgentResponseRef:I_,wasAgentActiveRef:Q4,setActiveTurn:q5,applyLiveGeneratedWidgetUpdate:n3,setFloatingWidget:g0,clearLastActivityFlag:Z5,handleUiVersionDrift:m3,setAgentStatus:b,setAgentDraft:h,setAgentPlan:t,setAgentThought:q0,setPendingRequest:K0,clearAgentRunState:J1,getAgentStatus:w3,noteAgentActivity:K4,showLastActivity:D4,refreshTimeline:P_,refreshModelAndQueueState:N5,refreshActiveChatAgents:d1,refreshCurrentChatBranches:i1,notifyForFinalResponse:E4,setContextUsage:I0,refreshContextUsage:V_,refreshQueueState:E1,setFollowupQueueItems:J0,clearQueuedSteerStateIfStale:n_,setSteerQueuedTurnId:M0,applyModelState:S5,getAgentContext:R3,setExtensionStatusPanels:C0,setPendingExtensionPanelActions:L0,refreshActiveEditorFromWorkspace:g4,showIntentToast:p,removeStalledPost:N8,setPosts:C_,preserveTimelineScrollTop:q8})},[n3,S5,J1,Z5,n_,j,m3,K4,E4,d1,g4,V_,i1,N5,E1,P_,N8,q5,J0,p,D4,p3,c3]);v(()=>{if(typeof window>"u")return;let M=window.__PICLAW_TEST_API||{};return M.emit=U6,M.reset=()=>{N8(),J1(),b(null),h({text:"",totalLines:0}),t(""),q0({text:"",totalLines:0}),K0(null)},M.finalize=()=>g3(),window.__PICLAW_TEST_API=M,()=>{if(window.__PICLAW_TEST_API===M)window.__PICLAW_TEST_API=void 0}},[J1,g3,U6,N8]),Y9({handleSseEvent:U6,handleConnectionStatusChange:YY,loadPosts:d_,onWake:JY,chatJid:j}),v(()=>{if(!K5||K5.length===0)return;let M=location.hash;if(!M||!M.startsWith("#msg-"))return;let s=M.slice(5);S1(s),history.replaceState(null,"",location.pathname+location.search)},[K5,S1]);let L6=C!==null;v(()=>{if(G!=="connected")return;let s=setInterval(()=>{Fj({viewStateRef:G_,isAgentActive:L6,refreshTimeline:P_,refreshQueueState:E1,refreshAgentStatus:r_,refreshContextUsage:V_,refreshAutoresearchStatus:i_})},L6?15000:60000);return()=>clearInterval(s)},[G,L6,r_,i_,V_,E1,P_]),v(()=>{return o9(()=>{r_(),V_(),E1(),i_()})},[r_,i_,V_,E1]);let OY=T(()=>{L_((M)=>!M)},[]),AY=T((M)=>{wZ({hasWindow:typeof window<"u",nextChatJid:M,currentChatJid:j,chatOnlyMode:Q,currentHref:typeof window<"u"?window.location.href:"http://localhost/",navigate:$})},[Q,j,$]),B6=T(()=>{zj({hasWindow:typeof window<"u",currentBranchRecord:k1,renameBranchInFlight:k.current,renameBranchLockUntil:n.current,getFormLock:s$,setRenameBranchNameDraft:$0,setIsRenameBranchFormOpen:N0})},[k1]),W6=T(()=>{Hj({setIsRenameBranchFormOpen:N0,setRenameBranchNameDraft:$0})},[]),DY=T(async(M)=>{await Jj({hasWindow:typeof window<"u",currentBranchRecord:k1,nextName:M,openRenameForm:B6,renameBranchInFlightRef:k,renameBranchLockUntilRef:n,getFormLock:s$,setIsRenamingBranch:S,renameChatBranch:TX,refreshActiveChatAgents:d1,refreshCurrentChatBranches:i1,showIntentToast:p,closeRenameForm:W6})},[W6,k1,d1,i1,B6,S,p]),EY=T(async(M=null)=>{await Oj({hasWindow:typeof window<"u",targetChatJid:M,currentChatJid:j,currentBranchRecord:k1,currentChatBranches:d,activeChatAgents:Y0,pruneChatBranch:CX,refreshActiveChatAgents:d1,refreshCurrentChatBranches:i1,showIntentToast:p,baseHref:typeof window<"u"?window.location.href:"http://localhost/",chatOnlyMode:Q,navigate:$})},[Y0,Q,k1,d,j,$,d1,i1,p]),kY=T(async(M)=>{await Aj({targetChatJid:M,restoreChatBranch:PX,currentChatBranches:d,refreshActiveChatAgents:d1,refreshCurrentChatBranches:i1,showIntentToast:p,baseHref:typeof window<"u"?window.location.href:"http://localhost/",chatOnlyMode:Q,navigate:$})},[Q,d,$,d1,i1,p]);v(()=>{if(!K||typeof window>"u")return;let M=!1;return Dj({branchLoaderSourceChatJid:N,forkChatBranch:u5,setBranchLoaderState:g1,navigate:$,baseHref:window.location.href,isCancelled:()=>M}),()=>{M=!0}},[K,N,$]);let MY=T((M)=>{XQ({widget:M,dismissedLiveWidgetKeysRef:e0,setFloatingWidget:g0})},[]),F6=T(()=>{VQ({dismissedLiveWidgetKeysRef:e0,setFloatingWidget:g0})},[]),IY=T((M,s)=>{UQ({event:M,widget:s,currentChatJid:j,isComposeBoxAgentActive:y5,setFloatingWidget:g0,handleCloseFloatingWidget:F6,handleMessageResponse:w5,showIntentToast:p,sendAgentMessage:n4,buildFloatingWidgetDashboardSnapshot:l3})},[l3,j,F6,w5,y5,p]);v(()=>{e0.current.clear(),g0(null)},[j]);let xY=T(async()=>{await Ej({currentChatJid:j,chatOnlyMode:Q,forkChatBranch:u5,refreshActiveChatAgents:d1,refreshCurrentChatBranches:i1,showIntentToast:p,navigate:$,baseHref:typeof window<"u"?window.location.href:"http://localhost/"})},[Q,j,$,d1,i1,p]),z6=T(async(M,s)=>{await kj({hasWindow:typeof window<"u",isWebAppMode:V,path:M,label:s,showIntentToast:p,currentChatJid:j,baseHref:typeof window<"u"?window.location.href:"http://localhost/",resolveSourceTransfer:(W0)=>RZ({panePath:W0,tabStripActiveId:K1,editorInstanceRef:x1,dockInstanceRef:Z_,terminalTabPath:d4}),closeSourcePaneIfTransferred:(W0)=>{uZ({panePath:W0,terminalTabPath:d4,dockVisible:l1,resolveTab:(m0)=>o0.get(m0),closeTab:O_,setDockVisible:A1})}})},[j,l1,O_,V,p,K1]);v(()=>s9({openTab:(M,s)=>b1(M,s?{label:s}:void 0),popOutPane:(M,s)=>{z6(M,s)}}),[z6,b1]);let TY=T(async()=>{await Mj({hasWindow:typeof window<"u",isWebAppMode:V,currentChatJid:j,currentRootChatJid:u1,forkChatBranch:u5,getActiveChatAgents:R6,getChatBranches:N6,setActiveChatAgents:m,setCurrentChatBranches:z0,showIntentToast:p,baseHref:typeof window<"u"?window.location.href:"http://localhost/"})},[j,u1,V,p]);v(()=>{fZ({hasWindow:typeof window<"u",editorOpen:T1,shellElement:Z4.current,editorWidthRef:h4,dockHeightRef:_5,sidebarWidthRef:m4,readStoredNumber:r5})},[T1]),v(()=>{if(!E_||Q)return;return a9(f1)},[f1,E_,Q]),v(()=>{if(Q)return;return t9({toggleZenMode:v4,exitZenMode:M_,zenMode:z1,isZenModeActive:()=>z1})},[v4,M_,z1,Q]);let CY=Boolean(f0&&f0===(C?.turn_id||B0)),d3=BQ({branchLoaderMode:K,panePopoutMode:Z});if(d3==="branch-loader")return WQ($_);if(d3==="pane-popout")return FQ({appShellRef:Z4,editorOpen:T1,hidePanePopoutControls:N_,panePopoutHasMenuActions:m1,panePopoutTitle:c_,tabStripTabs:t1,tabStripActiveId:K1,handleTabActivate:$4,previewTabs:C1,handleTabTogglePreview:R_,editorContainerRef:Z1,getPaneContent:()=>x1.current?.getContent?.(),panePopoutPath:Y});return KZ({appShellRef:Z4,workspaceOpen:F1,editorOpen:T1,chatOnlyMode:Q,zenMode:z1,isRenameBranchFormOpen:Q0,closeRenameCurrentBranchForm:W6,handleRenameCurrentBranch:DY,renameBranchNameDraft:G0,renameBranchNameInputRef:y1,setRenameBranchNameDraft:$0,renameBranchDraftState:P0,isRenamingBranch:R,addFileRef:C5,openEditor:b1,openTerminalTab:G1,openVncTab:Y_,hasDockPanes:E_,toggleDock:f1,dockVisible:l1,handleSplitterMouseDown:eZ,handleSplitterTouchStart:_Y,showEditorPaneContainer:u_,tabStripTabs:t1,tabStripActiveId:K1,handleTabActivate:$4,handleTabClose:O_,handleTabCloseOthers:A_,handleTabCloseAll:F4,handleTabTogglePin:D_,handleTabTogglePreview:R_,handleTabEditSource:u4,previewTabs:C1,tabPaneOverrides:Q_,toggleZenMode:v4,handlePopOutPane:z6,isWebAppMode:V,editorContainerRef:Z1,editorInstanceRef:x1,handleDockSplitterMouseDown:QY,handleDockSplitterTouchStart:ZY,TERMINAL_TAB_PATH:d4,dockContainerRef:z4,handleEditorSplitterMouseDown:$Y,handleEditorSplitterTouchStart:jY,searchQuery:D,isIOSDevice:B9,currentBranchRecord:k1,currentChatJid:j,currentChatBranches:d,handleBranchPickerChange:AY,formatBranchPickerLabel:l8,openRenameCurrentBranchForm:B6,handlePruneCurrentBranch:EY,currentHashtag:L,handleBackToTimeline:KY,activeSearchScopeLabel:w_,posts:K5,isMainTimelineView:VY,hasMore:aZ,loadMore:tZ,timelineRef:X_,handleHashtagClick:qY,addMessageRef:P1,scrollToMessage:S1,openFileFromPill:T0,handleDeletePost:UY,handleOpenFloatingWidget:MY,agents:R1,userProfile:v_,removingPostIds:I1,agentStatus:C,isCompactionStatus:y4,agentDraft:e,agentPlan:a,agentThought:_0,pendingRequest:Z0,intentToast:I,currentTurnId:B0,steerQueued:CY,handlePanelToggle:T_,btwSession:o,closeBtwPanel:V6,handleBtwRetry:zY,handleBtwInject:HY,floatingWidget:O0,handleCloseFloatingWidget:F6,handleFloatingWidgetEvent:IY,extensionStatusPanels:H0,pendingExtensionPanelActions:v0,handleExtensionPanelAction:WY,searchOpen:W,followupQueueItems:S0,handleInjectQueuedFollowup:LY,handleRemoveQueuedFollowup:BY,viewStateRef:G_,loadPosts:d_,scrollToBottom:P5,searchScope:E,handleSearch:NY,setSearchScope:f,enterSearchMode:GY,exitSearchMode:XY,fileRefs:u,removeFileRef:F,clearFileRefs:w,setFileRefsFromCompose:l,messageRefs:r,removeMessageRef:q4,clearMessageRefs:c4,setMessageRefsFromCompose:j5,handleCreateSessionFromCompose:xY,handleRestoreBranch:kY,attachActiveEditorFile:H1,followupQueueCount:o1,handleBtwIntercept:FY,handleMessageResponse:w5,handleComposeSubmitError:Q5,handlePopOutChat:TY,isComposeBoxAgentActive:y5,activeChatAgents:Y0,connectionStatus:G,activeModel:l0,activeModelUsage:j1,activeThinkingLevel:Q1,supportsThinking:V0,contextUsage:k0,notificationsEnabled:e_,notificationPermission:p_,handleToggleNotifications:M1,setActiveModel:B1,applyModelState:S5,setPendingRequest:K0,pendingRequestRef:E0,toggleWorkspace:OY})}function wX(){let[_,$]=g(()=>typeof window>"u"?"http://localhost/":window.location.href);v(()=>{if(typeof window>"u")return;let Z=()=>$(window.location.href);return window.addEventListener("popstate",Z),()=>window.removeEventListener("popstate",Z)},[]);let j=T((Z,Y={})=>{if(typeof window>"u")return;let{replace:q=!1}=Y||{},K=new URL(String(Z||""),window.location.href).toString();if(q)window.history.replaceState(null,"",K);else window.history.pushState(null,"",K);$(window.location.href)},[]),Q=w0(()=>new URL(_).searchParams,[_]);return B`<${SX} locationParams=${Q} navigate=${j} />`}x4(B`<${wX} />`,document.getElementById("app"));

//# debugId=8D121C9706F0D68A64756E2164756E21
//# sourceMappingURL=app.bundle.js.map
