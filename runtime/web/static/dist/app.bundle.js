var wQ=Object.defineProperty;var RQ=(_)=>_;function uQ(_,$){this[_]=RQ.bind(null,$)}var fQ=(_,$)=>{for(var j in $)wQ(_,j,{get:$[j],enumerable:!0,configurable:!0,set:uQ.bind($,j)})};var j8,X1,v3,vQ,W4,I3,b3,g3,m3,Y6,e8,_6,p3,e5={},_8=[],bQ=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,Z8=Array.isArray;function a_(_,$){for(var j in $)_[j]=$[j];return _}function Q6(_){_&&_.parentNode&&_.parentNode.removeChild(_)}function Y8(_,$,j){var Z,Y,Q,q={};for(Q in $)Q=="key"?Z=$[Q]:Q=="ref"?Y=$[Q]:q[Q]=$[Q];if(arguments.length>2&&(q.children=arguments.length>3?j8.call(arguments,2):j),typeof _=="function"&&_.defaultProps!=null)for(Q in _.defaultProps)q[Q]===void 0&&(q[Q]=_.defaultProps[Q]);return a5(_,q,Z,Y,null)}function a5(_,$,j,Z,Y){var Q={type:_,props:$,key:j,ref:Z,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:Y==null?++v3:Y,__i:-1,__u:0};return Y==null&&X1.vnode!=null&&X1.vnode(Q),Q}function Q8(_){return _.children}function o4(_,$){this.props=_,this.context=$}function s4(_,$){if($==null)return _.__?s4(_.__,_.__i+1):null;for(var j;$<_.__k.length;$++)if((j=_.__k[$])!=null&&j.__e!=null)return j.__e;return typeof _.type=="function"?s4(_):null}function gQ(_){if(_.__P&&_.__d){var $=_.__v,j=$.__e,Z=[],Y=[],Q=a_({},$);Q.__v=$.__v+1,X1.vnode&&X1.vnode(Q),q6(_.__P,Q,$,_.__n,_.__P.namespaceURI,32&$.__u?[j]:null,Z,j==null?s4($):j,!!(32&$.__u),Y),Q.__v=$.__v,Q.__.__k[Q.__i]=Q,n3(Z,Q,Y),$.__e=$.__=null,Q.__e!=j&&h3(Q)}}function h3(_){if((_=_.__)!=null&&_.__c!=null)return _.__e=_.__c.base=null,_.__k.some(function($){if($!=null&&$.__e!=null)return _.__e=_.__c.base=$.__e}),h3(_)}function $6(_){(!_.__d&&(_.__d=!0)&&W4.push(_)&&!$8.__r++||I3!=X1.debounceRendering)&&((I3=X1.debounceRendering)||b3)($8)}function $8(){try{for(var _,$=1;W4.length;)W4.length>$&&W4.sort(g3),_=W4.shift(),$=W4.length,gQ(_)}finally{W4.length=$8.__r=0}}function c3(_,$,j,Z,Y,Q,q,N,K,G,X){var V,U,L,F,J,H,W,D=Z&&Z.__k||_8,E=$.length;for(K=mQ(j,$,D,K,E),V=0;V<E;V++)(L=j.__k[V])!=null&&(U=L.__i!=-1&&D[L.__i]||e5,L.__i=V,H=q6(_,L,U,Y,Q,q,N,K,G,X),F=L.__e,L.ref&&U.ref!=L.ref&&(U.ref&&N6(U.ref,null,L),X.push(L.ref,L.__c||F,L)),J==null&&F!=null&&(J=F),(W=!!(4&L.__u))||U.__k===L.__k?K=l3(L,K,_,W):typeof L.type=="function"&&H!==void 0?K=H:F&&(K=F.nextSibling),L.__u&=-7);return j.__e=J,K}function mQ(_,$,j,Z,Y){var Q,q,N,K,G,X=j.length,V=X,U=0;for(_.__k=Array(Y),Q=0;Q<Y;Q++)(q=$[Q])!=null&&typeof q!="boolean"&&typeof q!="function"?(typeof q=="string"||typeof q=="number"||typeof q=="bigint"||q.constructor==String?q=_.__k[Q]=a5(null,q,null,null,null):Z8(q)?q=_.__k[Q]=a5(Q8,{children:q},null,null,null):q.constructor===void 0&&q.__b>0?q=_.__k[Q]=a5(q.type,q.props,q.key,q.ref?q.ref:null,q.__v):_.__k[Q]=q,K=Q+U,q.__=_,q.__b=_.__b+1,N=null,(G=q.__i=pQ(q,j,K,V))!=-1&&(V--,(N=j[G])&&(N.__u|=2)),N==null||N.__v==null?(G==-1&&(Y>X?U--:Y<X&&U++),typeof q.type!="function"&&(q.__u|=4)):G!=K&&(G==K-1?U--:G==K+1?U++:(G>K?U--:U++,q.__u|=4))):_.__k[Q]=null;if(V)for(Q=0;Q<X;Q++)(N=j[Q])!=null&&(2&N.__u)==0&&(N.__e==Z&&(Z=s4(N)),i3(N,N));return Z}function l3(_,$,j,Z){var Y,Q;if(typeof _.type=="function"){for(Y=_.__k,Q=0;Y&&Q<Y.length;Q++)Y[Q]&&(Y[Q].__=_,$=l3(Y[Q],$,j,Z));return $}_.__e!=$&&(Z&&($&&_.type&&!$.parentNode&&($=s4(_)),j.insertBefore(_.__e,$||null)),$=_.__e);do $=$&&$.nextSibling;while($!=null&&$.nodeType==8);return $}function pQ(_,$,j,Z){var Y,Q,q,N=_.key,K=_.type,G=$[j],X=G!=null&&(2&G.__u)==0;if(G===null&&N==null||X&&N==G.key&&K==G.type)return j;if(Z>(X?1:0)){for(Y=j-1,Q=j+1;Y>=0||Q<$.length;)if((G=$[q=Y>=0?Y--:Q++])!=null&&(2&G.__u)==0&&N==G.key&&K==G.type)return q}return-1}function M3(_,$,j){$[0]=="-"?_.setProperty($,j==null?"":j):_[$]=j==null?"":typeof j!="number"||bQ.test($)?j:j+"px"}function s5(_,$,j,Z,Y){var Q,q;_:if($=="style")if(typeof j=="string")_.style.cssText=j;else{if(typeof Z=="string"&&(_.style.cssText=Z=""),Z)for($ in Z)j&&$ in j||M3(_.style,$,"");if(j)for($ in j)Z&&j[$]==Z[$]||M3(_.style,$,j[$])}else if($[0]=="o"&&$[1]=="n")Q=$!=($=$.replace(m3,"$1")),q=$.toLowerCase(),$=q in _||$=="onFocusOut"||$=="onFocusIn"?q.slice(2):$.slice(2),_.l||(_.l={}),_.l[$+Q]=j,j?Z?j.u=Z.u:(j.u=Y6,_.addEventListener($,Q?_6:e8,Q)):_.removeEventListener($,Q?_6:e8,Q);else{if(Y=="http://www.w3.org/2000/svg")$=$.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if($!="width"&&$!="height"&&$!="href"&&$!="list"&&$!="form"&&$!="tabIndex"&&$!="download"&&$!="rowSpan"&&$!="colSpan"&&$!="role"&&$!="popover"&&$ in _)try{_[$]=j==null?"":j;break _}catch(N){}typeof j=="function"||(j==null||j===!1&&$[4]!="-"?_.removeAttribute($):_.setAttribute($,$=="popover"&&j==1?"":j))}}function T3(_){return function($){if(this.l){var j=this.l[$.type+_];if($.t==null)$.t=Y6++;else if($.t<j.u)return;return j(X1.event?X1.event($):$)}}}function q6(_,$,j,Z,Y,Q,q,N,K,G){var X,V,U,L,F,J,H,W,D,E,C,P,v,p,M,k=$.type;if($.constructor!==void 0)return null;128&j.__u&&(K=!!(32&j.__u),Q=[N=$.__e=j.__e]),(X=X1.__b)&&X($);_:if(typeof k=="function")try{if(W=$.props,D=k.prototype&&k.prototype.render,E=(X=k.contextType)&&Z[X.__c],C=X?E?E.props.value:X.__:Z,j.__c?H=(V=$.__c=j.__c).__=V.__E:(D?$.__c=V=new k(W,C):($.__c=V=new o4(W,C),V.constructor=k,V.render=cQ),E&&E.sub(V),V.state||(V.state={}),V.__n=Z,U=V.__d=!0,V.__h=[],V._sb=[]),D&&V.__s==null&&(V.__s=V.state),D&&k.getDerivedStateFromProps!=null&&(V.__s==V.state&&(V.__s=a_({},V.__s)),a_(V.__s,k.getDerivedStateFromProps(W,V.__s))),L=V.props,F=V.state,V.__v=$,U)D&&k.getDerivedStateFromProps==null&&V.componentWillMount!=null&&V.componentWillMount(),D&&V.componentDidMount!=null&&V.__h.push(V.componentDidMount);else{if(D&&k.getDerivedStateFromProps==null&&W!==L&&V.componentWillReceiveProps!=null&&V.componentWillReceiveProps(W,C),$.__v==j.__v||!V.__e&&V.shouldComponentUpdate!=null&&V.shouldComponentUpdate(W,V.__s,C)===!1){$.__v!=j.__v&&(V.props=W,V.state=V.__s,V.__d=!1),$.__e=j.__e,$.__k=j.__k,$.__k.some(function(B){B&&(B.__=$)}),_8.push.apply(V.__h,V._sb),V._sb=[],V.__h.length&&q.push(V);break _}V.componentWillUpdate!=null&&V.componentWillUpdate(W,V.__s,C),D&&V.componentDidUpdate!=null&&V.__h.push(function(){V.componentDidUpdate(L,F,J)})}if(V.context=C,V.props=W,V.__P=_,V.__e=!1,P=X1.__r,v=0,D)V.state=V.__s,V.__d=!1,P&&P($),X=V.render(V.props,V.state,V.context),_8.push.apply(V.__h,V._sb),V._sb=[];else do V.__d=!1,P&&P($),X=V.render(V.props,V.state,V.context),V.state=V.__s;while(V.__d&&++v<25);V.state=V.__s,V.getChildContext!=null&&(Z=a_(a_({},Z),V.getChildContext())),D&&!U&&V.getSnapshotBeforeUpdate!=null&&(J=V.getSnapshotBeforeUpdate(L,F)),p=X!=null&&X.type===Q8&&X.key==null?d3(X.props.children):X,N=c3(_,Z8(p)?p:[p],$,j,Z,Y,Q,q,N,K,G),V.base=$.__e,$.__u&=-161,V.__h.length&&q.push(V),H&&(V.__E=V.__=null)}catch(B){if($.__v=null,K||Q!=null)if(B.then){for($.__u|=K?160:128;N&&N.nodeType==8&&N.nextSibling;)N=N.nextSibling;Q[Q.indexOf(N)]=null,$.__e=N}else{for(M=Q.length;M--;)Q6(Q[M]);j6($)}else $.__e=j.__e,$.__k=j.__k,B.then||j6($);X1.__e(B,$,j)}else Q==null&&$.__v==j.__v?($.__k=j.__k,$.__e=j.__e):N=$.__e=hQ(j.__e,$,j,Z,Y,Q,q,K,G);return(X=X1.diffed)&&X($),128&$.__u?void 0:N}function j6(_){_&&(_.__c&&(_.__c.__e=!0),_.__k&&_.__k.some(j6))}function n3(_,$,j){for(var Z=0;Z<j.length;Z++)N6(j[Z],j[++Z],j[++Z]);X1.__c&&X1.__c($,_),_.some(function(Y){try{_=Y.__h,Y.__h=[],_.some(function(Q){Q.call(Y)})}catch(Q){X1.__e(Q,Y.__v)}})}function d3(_){return typeof _!="object"||_==null||_.__b>0?_:Z8(_)?_.map(d3):a_({},_)}function hQ(_,$,j,Z,Y,Q,q,N,K){var G,X,V,U,L,F,J,H=j.props||e5,W=$.props,D=$.type;if(D=="svg"?Y="http://www.w3.org/2000/svg":D=="math"?Y="http://www.w3.org/1998/Math/MathML":Y||(Y="http://www.w3.org/1999/xhtml"),Q!=null){for(G=0;G<Q.length;G++)if((L=Q[G])&&"setAttribute"in L==!!D&&(D?L.localName==D:L.nodeType==3)){_=L,Q[G]=null;break}}if(_==null){if(D==null)return document.createTextNode(W);_=document.createElementNS(Y,D,W.is&&W),N&&(X1.__m&&X1.__m($,Q),N=!1),Q=null}if(D==null)H===W||N&&_.data==W||(_.data=W);else{if(Q=Q&&j8.call(_.childNodes),!N&&Q!=null)for(H={},G=0;G<_.attributes.length;G++)H[(L=_.attributes[G]).name]=L.value;for(G in H)L=H[G],G=="dangerouslySetInnerHTML"?V=L:G=="children"||(G in W)||G=="value"&&("defaultValue"in W)||G=="checked"&&("defaultChecked"in W)||s5(_,G,null,L,Y);for(G in W)L=W[G],G=="children"?U=L:G=="dangerouslySetInnerHTML"?X=L:G=="value"?F=L:G=="checked"?J=L:N&&typeof L!="function"||H[G]===L||s5(_,G,L,H[G],Y);if(X)N||V&&(X.__html==V.__html||X.__html==_.innerHTML)||(_.innerHTML=X.__html),$.__k=[];else if(V&&(_.innerHTML=""),c3($.type=="template"?_.content:_,Z8(U)?U:[U],$,j,Z,D=="foreignObject"?"http://www.w3.org/1999/xhtml":Y,Q,q,Q?Q[0]:j.__k&&s4(j,0),N,K),Q!=null)for(G=Q.length;G--;)Q6(Q[G]);N||(G="value",D=="progress"&&F==null?_.removeAttribute("value"):F!=null&&(F!==_[G]||D=="progress"&&!F||D=="option"&&F!=H[G])&&s5(_,G,F,H[G],Y),G="checked",J!=null&&J!=_[G]&&s5(_,G,J,H[G],Y))}return _}function N6(_,$,j){try{if(typeof _=="function"){var Z=typeof _.__u=="function";Z&&_.__u(),Z&&$==null||(_.__u=_($))}else _.current=$}catch(Y){X1.__e(Y,j)}}function i3(_,$,j){var Z,Y;if(X1.unmount&&X1.unmount(_),(Z=_.ref)&&(Z.current&&Z.current!=_.__e||N6(Z,null,$)),(Z=_.__c)!=null){if(Z.componentWillUnmount)try{Z.componentWillUnmount()}catch(Q){X1.__e(Q,$)}Z.base=Z.__P=null}if(Z=_.__k)for(Y=0;Y<Z.length;Y++)Z[Y]&&i3(Z[Y],$,j||typeof _.type!="function");j||Q6(_.__e),_.__c=_.__=_.__e=void 0}function cQ(_,$,j){return this.constructor(_,j)}function z4(_,$,j){var Z,Y,Q,q;$==document&&($=document.documentElement),X1.__&&X1.__(_,$),Y=(Z=typeof j=="function")?null:j&&j.__k||$.__k,Q=[],q=[],q6($,_=(!Z&&j||$).__k=Y8(Q8,null,[_]),Y||e5,e5,$.namespaceURI,!Z&&j?[j]:Y?null:$.firstChild?j8.call($.childNodes):null,Q,!Z&&j?j:Y?Y.__e:$.firstChild,Z,q),n3(Q,_,q)}function r3(_){function $(j){var Z,Y;return this.getChildContext||(Z=new Set,(Y={})[$.__c]=this,this.getChildContext=function(){return Y},this.componentWillUnmount=function(){Z=null},this.shouldComponentUpdate=function(Q){this.props.value!=Q.value&&Z.forEach(function(q){q.__e=!0,$6(q)})},this.sub=function(Q){Z.add(Q);var q=Q.componentWillUnmount;Q.componentWillUnmount=function(){Z&&Z.delete(Q),q&&q.call(Q)}}),j.children}return $.__c="__cC"+p3++,$.__=_,$.Provider=$.__l=($.Consumer=function(j,Z){return j.children(Z)}).contextType=$,$}j8=_8.slice,X1={__e:function(_,$,j,Z){for(var Y,Q,q;$=$.__;)if((Y=$.__c)&&!Y.__)try{if((Q=Y.constructor)&&Q.getDerivedStateFromError!=null&&(Y.setState(Q.getDerivedStateFromError(_)),q=Y.__d),Y.componentDidCatch!=null&&(Y.componentDidCatch(_,Z||{}),q=Y.__d),q)return Y.__E=Y}catch(N){_=N}throw _}},v3=0,vQ=function(_){return _!=null&&_.constructor===void 0},o4.prototype.setState=function(_,$){var j;j=this.__s!=null&&this.__s!=this.state?this.__s:this.__s=a_({},this.state),typeof _=="function"&&(_=_(a_({},j),this.props)),_&&a_(j,_),_!=null&&this.__v&&($&&this._sb.push($),$6(this))},o4.prototype.forceUpdate=function(_){this.__v&&(this.__e=!0,_&&this.__h.push(_),$6(this))},o4.prototype.render=Q8,W4=[],b3=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,g3=function(_,$){return _.__v.__b-$.__v.__b},$8.__r=0,m3=/(PointerCapture)$|Capture$/i,Y6=0,e8=T3(!1),_6=T3(!0),p3=0;var B4,G1,t8,x3,a4=0,o3=[],z1=X1,y3=z1.__b,P3=z1.__r,C3=z1.diffed,S3=z1.__c,w3=z1.unmount,R3=z1.__;function t4(_,$){z1.__h&&z1.__h(G1,_,a4||$),a4=0;var j=G1.__H||(G1.__H={__:[],__h:[]});return _>=j.__.length&&j.__.push({}),j.__[_]}function m(_){return a4=1,K6(_2,_)}function K6(_,$,j){var Z=t4(B4++,2);if(Z.t=_,!Z.__c&&(Z.__=[j?j($):_2(void 0,$),function(N){var K=Z.__N?Z.__N[0]:Z.__[0],G=Z.t(K,N);K!==G&&(Z.__N=[G,Z.__[1]],Z.__c.setState({}))}],Z.__c=G1,!G1.__f)){var Y=function(N,K,G){if(!Z.__c.__H)return!0;var X=Z.__c.__H.__.filter(function(U){return U.__c});if(X.every(function(U){return!U.__N}))return!Q||Q.call(this,N,K,G);var V=Z.__c.props!==N;return X.some(function(U){if(U.__N){var L=U.__[0];U.__=U.__N,U.__N=void 0,L!==U.__[0]&&(V=!0)}}),Q&&Q.call(this,N,K,G)||V};G1.__f=!0;var{shouldComponentUpdate:Q,componentWillUpdate:q}=G1;G1.componentWillUpdate=function(N,K,G){if(this.__e){var X=Q;Q=void 0,Y(N,K,G),Q=X}q&&q.call(this,N,K,G)},G1.shouldComponentUpdate=Y}return Z.__N||Z.__}function g(_,$){var j=t4(B4++,3);!z1.__s&&G6(j.__H,$)&&(j.__=_,j.u=$,G1.__H.__h.push(j))}function D5(_,$){var j=t4(B4++,4);!z1.__s&&G6(j.__H,$)&&(j.__=_,j.u=$,G1.__h.push(j))}function y(_){return a4=5,m0(function(){return{current:_}},[])}function s3(_,$,j){a4=6,D5(function(){if(typeof _=="function"){var Z=_($());return function(){_(null),Z&&typeof Z=="function"&&Z()}}if(_)return _.current=$(),function(){return _.current=null}},j==null?j:j.concat(_))}function m0(_,$){var j=t4(B4++,7);return G6(j.__H,$)&&(j.__=_(),j.__H=$,j.__h=_),j.__}function x(_,$){return a4=8,m0(function(){return _},$)}function a3(_){var $=G1.context[_.__c],j=t4(B4++,9);return j.c=_,$?(j.__==null&&(j.__=!0,$.sub(G1)),$.props.value):_.__}function t3(_,$){z1.useDebugValue&&z1.useDebugValue($?$(_):_)}function e3(_){var $=t4(B4++,10),j=m();return $.__=_,G1.componentDidCatch||(G1.componentDidCatch=function(Z,Y){$.__&&$.__(Z,Y),j[1](Z)}),[j[0],function(){j[1](void 0)}]}function lQ(){for(var _;_=o3.shift();){var $=_.__H;if(_.__P&&$)try{$.__h.some(t5),$.__h.some(Z6),$.__h=[]}catch(j){$.__h=[],z1.__e(j,_.__v)}}}z1.__b=function(_){G1=null,y3&&y3(_)},z1.__=function(_,$){_&&$.__k&&$.__k.__m&&(_.__m=$.__k.__m),R3&&R3(_,$)},z1.__r=function(_){P3&&P3(_),B4=0;var $=(G1=_.__c).__H;$&&(t8===G1?($.__h=[],G1.__h=[],$.__.some(function(j){j.__N&&(j.__=j.__N),j.u=j.__N=void 0})):($.__h.some(t5),$.__h.some(Z6),$.__h=[],B4=0)),t8=G1},z1.diffed=function(_){C3&&C3(_);var $=_.__c;$&&$.__H&&($.__H.__h.length&&(o3.push($)!==1&&x3===z1.requestAnimationFrame||((x3=z1.requestAnimationFrame)||nQ)(lQ)),$.__H.__.some(function(j){j.u&&(j.__H=j.u),j.u=void 0})),t8=G1=null},z1.__c=function(_,$){$.some(function(j){try{j.__h.some(t5),j.__h=j.__h.filter(function(Z){return!Z.__||Z6(Z)})}catch(Z){$.some(function(Y){Y.__h&&(Y.__h=[])}),$=[],z1.__e(Z,j.__v)}}),S3&&S3(_,$)},z1.unmount=function(_){w3&&w3(_);var $,j=_.__c;j&&j.__H&&(j.__H.__.some(function(Z){try{t5(Z)}catch(Y){$=Y}}),j.__H=void 0,$&&z1.__e($,j.__v))};var u3=typeof requestAnimationFrame=="function";function nQ(_){var $,j=function(){clearTimeout(Z),u3&&cancelAnimationFrame($),setTimeout(_)},Z=setTimeout(j,35);u3&&($=requestAnimationFrame(j))}function t5(_){var $=G1,j=_.__c;typeof j=="function"&&(_.__c=void 0,j()),G1=$}function Z6(_){var $=G1;_.__c=_.__(),G1=$}function G6(_,$){return!_||_.length!==$.length||$.some(function(j,Z){return j!==_[Z]})}function _2(_,$){return typeof $=="function"?$(_):$}var $2=function(_,$,j,Z){var Y;$[0]=0;for(var Q=1;Q<$.length;Q++){var q=$[Q++],N=$[Q]?($[0]|=q?1:2,j[$[Q++]]):$[++Q];q===3?Z[0]=N:q===4?Z[1]=Object.assign(Z[1]||{},N):q===5?(Z[1]=Z[1]||{})[$[++Q]]=N:q===6?Z[1][$[++Q]]+=N+"":q?(Y=_.apply(N,$2(_,N,j,["",null])),Z.push(Y),N[0]?$[0]|=2:($[Q-2]=0,$[Q]=Y)):Z.push(N)}return Z},f3=new Map;function dQ(_){var $=f3.get(this);return $||($=new Map,f3.set(this,$)),($=$2(this,$.get(_)||($.set(_,$=function(j){for(var Z,Y,Q=1,q="",N="",K=[0],G=function(U){Q===1&&(U||(q=q.replace(/^\s*\n\s*|\s*\n\s*$/g,"")))?K.push(0,U,q):Q===3&&(U||q)?(K.push(3,U,q),Q=2):Q===2&&q==="..."&&U?K.push(4,U,0):Q===2&&q&&!U?K.push(5,0,!0,q):Q>=5&&((q||!U&&Q===5)&&(K.push(Q,0,q,Y),Q=6),U&&(K.push(Q,U,0,Y),Q=6)),q=""},X=0;X<j.length;X++){X&&(Q===1&&G(),G(X));for(var V=0;V<j[X].length;V++)Z=j[X][V],Q===1?Z==="<"?(G(),K=[K],Q=3):q+=Z:Q===4?q==="--"&&Z===">"?(Q=1,q=""):q=Z+q[0]:N?Z===N?N="":q+=Z:Z==='"'||Z==="'"?N=Z:Z===">"?(G(),Q=1):Q&&(Z==="="?(Q=5,Y=q,q=""):Z==="/"&&(Q<5||j[X][V+1]===">")?(G(),Q===3&&(K=K[0]),Q=K,(K=K[0]).push(2,0,Q),Q=0):Z===" "||Z==="\t"||Z===`
`||Z==="\r"?(G(),Q=2):q+=Z),Q===3&&q==="!--"&&(Q=4,K=K[0])}return G(),K}(_)),$),arguments,[])).length>1?$:$[0]}var z=dQ.bind(Y8);var v1={};fQ(v1,{uploadWorkspaceFile:()=>N8,uploadMedia:()=>H6,updateWorkspaceFile:()=>Vq,submitAdaptiveCardAction:()=>J6,streamSidePrompt:()=>Kq,stopAutoresearch:()=>Zq,steerAgentQueueItem:()=>Nq,setWorkspaceVisibility:()=>I5,setAgentThoughtVisibility:()=>A6,sendPeerAgentMessage:()=>_q,sendAgentMessage:()=>e4,searchPosts:()=>V6,restoreChatBranch:()=>eQ,respondToAgentRequest:()=>q8,renameWorkspaceFile:()=>T6,renameChatBranch:()=>aQ,removeAgentQueueItem:()=>qq,pruneChatBranch:()=>tQ,moveWorkspaceEntry:()=>x6,getWorkspaceTree:()=>E5,getWorkspaceRawUrl:()=>K8,getWorkspaceFile:()=>k5,getWorkspaceDownloadUrl:()=>G8,getWorkspaceBranch:()=>Xq,getTimeline:()=>u4,getThumbnailUrl:()=>E6,getThread:()=>U6,getPostsByHashtag:()=>X6,getMediaUrl:()=>D_,getMediaText:()=>k6,getMediaInfo:()=>_5,getMediaBlob:()=>Gq,getChatBranches:()=>sQ,getAutoresearchStatus:()=>jq,getAgents:()=>z6,getAgentThought:()=>D6,getAgentStatus:()=>F6,getAgentQueueState:()=>Qq,getAgentModels:()=>A5,getAgentContext:()=>$q,getActiveChatAgents:()=>W6,forkChatBranch:()=>B6,dismissAutoresearch:()=>Yq,deleteWorkspaceFile:()=>y6,deletePost:()=>L6,createWorkspaceFile:()=>M6,createReply:()=>oQ,createPost:()=>rQ,attachWorkspaceFile:()=>I6,addToWhitelist:()=>O6,SSEClient:()=>X8});async function e0(_,$={}){let j=await fetch(""+_,{...$,headers:{"Content-Type":"application/json",...$.headers}});if(!j.ok){let Z=await j.json().catch(()=>({error:"Unknown error"}));throw Error(Z.error||`HTTP ${j.status}`)}return j.json()}function j2(_){let $=String(_||"").split(`
`),j="message",Z=[];for(let Q of $)if(Q.startsWith("event:"))j=Q.slice(6).trim()||"message";else if(Q.startsWith("data:"))Z.push(Q.slice(5).trim());let Y=Z.join(`
`);if(!Y)return null;try{return{event:j,data:JSON.parse(Y)}}catch{return{event:j,data:Y}}}async function iQ(_,$){if(!_.body)throw Error("Missing event stream body");let j=_.body.getReader(),Z=new TextDecoder,Y="";while(!0){let{value:q,done:N}=await j.read();if(N)break;Y+=Z.decode(q,{stream:!0});let K=Y.split(`

`);Y=K.pop()||"";for(let G of K){let X=j2(G);if(X)$(X.event,X.data)}}Y+=Z.decode();let Q=j2(Y);if(Q)$(Q.event,Q.data)}async function u4(_=10,$=null,j=null){let Z=`/timeline?limit=${_}`;if($)Z+=`&before=${$}`;if(j)Z+=`&chat_jid=${encodeURIComponent(j)}`;return e0(Z)}async function X6(_,$=50,j=0,Z=null){let Y=Z?`&chat_jid=${encodeURIComponent(Z)}`:"";return e0(`/hashtag/${encodeURIComponent(_)}?limit=${$}&offset=${j}${Y}`)}async function V6(_,$=50,j=0,Z=null,Y="current",Q=null){let q=Z?`&chat_jid=${encodeURIComponent(Z)}`:"",N=Y?`&scope=${encodeURIComponent(Y)}`:"",K=Q?`&root_chat_jid=${encodeURIComponent(Q)}`:"";return e0(`/search?q=${encodeURIComponent(_)}&limit=${$}&offset=${j}${q}${N}${K}`)}async function U6(_,$=null){let j=$?`?chat_jid=${encodeURIComponent($)}`:"";return e0(`/thread/${_}${j}`)}async function rQ(_,$=[],j=null){let Z=j?`?chat_jid=${encodeURIComponent(j)}`:"";return e0(`/post${Z}`,{method:"POST",body:JSON.stringify({content:_,media_ids:$})})}async function oQ(_,$,j=[],Z=null){let Y=Z?`?chat_jid=${encodeURIComponent(Z)}`:"";return e0(`/post/reply${Y}`,{method:"POST",body:JSON.stringify({thread_id:_,content:$,media_ids:j})})}async function L6(_,$=!1,j=null){let Z=j?`&chat_jid=${encodeURIComponent(j)}`:"",Y=`/post/${_}?cascade=${$?"true":"false"}${Z}`;return e0(Y,{method:"DELETE"})}async function e4(_,$,j=null,Z=[],Y=null,Q=null){let q=Q?`?chat_jid=${encodeURIComponent(Q)}`:"",N={content:$,thread_id:j,media_ids:Z};if(Y==="auto"||Y==="queue"||Y==="steer")N.mode=Y;return e0(`/agent/${_}/message${q}`,{method:"POST",body:JSON.stringify(N)})}async function W6(){return e0("/agent/active-chats")}async function sQ(_=null,$={}){let j=new URLSearchParams;if(_)j.set("root_chat_jid",String(_));if($?.includeArchived)j.set("include_archived","1");let Z=j.toString()?`?${j.toString()}`:"";return e0(`/agent/branches${Z}`)}async function B6(_,$={}){return e0("/agent/branch-fork",{method:"POST",body:JSON.stringify({source_chat_jid:_,...$?.agentName?{agent_name:$.agentName}:{}})})}async function aQ(_,$={}){return e0("/agent/branch-rename",{method:"POST",body:JSON.stringify({chat_jid:_,...$&&Object.prototype.hasOwnProperty.call($,"agentName")?{agent_name:$.agentName}:{}})})}async function tQ(_){return e0("/agent/branch-prune",{method:"POST",body:JSON.stringify({chat_jid:_})})}async function eQ(_,$={}){return e0("/agent/branch-restore",{method:"POST",body:JSON.stringify({chat_jid:_,...$&&Object.prototype.hasOwnProperty.call($,"agentName")?{agent_name:$.agentName}:{}})})}async function _q(_,$,j,Z="auto",Y={}){let Q={source_chat_jid:_,content:j,mode:Z,...Y?.sourceAgentName?{source_agent_name:Y.sourceAgentName}:{},...Y?.targetBy==="agent_name"?{target_agent_name:$}:{target_chat_jid:$}};return e0("/agent/peer-message",{method:"POST",body:JSON.stringify(Q)})}async function z6(){return e0("/agent/roster")}async function F6(_=null){let $=_?`?chat_jid=${encodeURIComponent(_)}`:"";return e0(`/agent/status${$}`)}async function $q(_=null){let $=_?`?chat_jid=${encodeURIComponent(_)}`:"";return e0(`/agent/context${$}`)}async function jq(_=null){let $=_?`?chat_jid=${encodeURIComponent(_)}`:"";return e0(`/agent/autoresearch/status${$}`)}async function Zq(_=null,$={}){return e0("/agent/autoresearch/stop",{method:"POST",body:JSON.stringify({chat_jid:_||void 0,generate_report:$?.generateReport!==!1})})}async function Yq(_=null){return e0("/agent/autoresearch/dismiss",{method:"POST",body:JSON.stringify({chat_jid:_||void 0})})}async function Qq(_=null){let $=_?`?chat_jid=${encodeURIComponent(_)}`:"";return e0(`/agent/queue-state${$}`)}async function qq(_,$=null){let j=await fetch("/agent/queue-remove",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({row_id:_,chat_jid:$||void 0})});if(!j.ok){let Z=await j.json().catch(()=>({error:"Failed to remove queued item"}));throw Error(Z.error||`HTTP ${j.status}`)}return j.json()}async function Nq(_,$=null){let j=await fetch("/agent/queue-steer",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({row_id:_,chat_jid:$||void 0})});if(!j.ok){let Z=await j.json().catch(()=>({error:"Failed to steer queued item"}));throw Error(Z.error||`HTTP ${j.status}`)}return j.json()}async function A5(_=null){let $=_?`?chat_jid=${encodeURIComponent(_)}`:"";return e0(`/agent/models${$}`)}async function H6(_){let $=new FormData;$.append("file",_);let j=await fetch("/media/upload",{method:"POST",body:$});if(!j.ok){let Z=await j.json().catch(()=>({error:"Upload failed"}));throw Error(Z.error||`HTTP ${j.status}`)}return j.json()}async function q8(_,$,j=null){let Z=await fetch("/agent/respond",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({request_id:_,outcome:$,chat_jid:j||void 0})});if(!Z.ok){let Y=await Z.json().catch(()=>({error:"Failed to respond"}));throw Error(Y.error||`HTTP ${Z.status}`)}return Z.json()}async function J6(_){let $=await fetch("/agent/card-action",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(_)});if(!$.ok){let j=await $.json().catch(()=>({error:"Adaptive Card action failed"}));throw Error(j.error||`HTTP ${$.status}`)}return $.json()}async function Kq(_,$={}){let j=await fetch("/agent/side-prompt/stream",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({prompt:_,system_prompt:$.systemPrompt||void 0,chat_jid:$.chatJid||void 0}),signal:$.signal});if(!j.ok){let Q=await j.json().catch(()=>({error:"Side prompt failed"}));throw Error(Q.error||`HTTP ${j.status}`)}let Z=null,Y=null;if(await iQ(j,(Q,q)=>{if($.onEvent?.(Q,q),Q==="side_prompt_thinking_delta")$.onThinkingDelta?.(q?.delta||"");else if(Q==="side_prompt_text_delta")$.onTextDelta?.(q?.delta||"");else if(Q==="side_prompt_done")Z=q;else if(Q==="side_prompt_error")Y=q}),Y){let Q=Error(Y?.error||"Side prompt failed");throw Q.payload=Y,Q}return Z}async function O6(_,$){let j=await fetch("/agent/whitelist",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({pattern:_,description:$})});if(!j.ok){let Z=await j.json().catch(()=>({error:"Failed to add to whitelist"}));throw Error(Z.error||`HTTP ${j.status}`)}return j.json()}async function D6(_,$="thought"){let j=`/agent/thought?turn_id=${encodeURIComponent(_)}&panel=${encodeURIComponent($)}`;return e0(j)}async function A6(_,$,j){return e0("/agent/thought/visibility",{method:"POST",body:JSON.stringify({turn_id:_,panel:$,expanded:Boolean(j)})})}function D_(_){return`/media/${_}`}function E6(_){return`/media/${_}/thumbnail`}async function _5(_){let $=await fetch(`/media/${_}/info`);if(!$.ok)throw Error("Failed to get media info");return $.json()}async function k6(_){let $=await fetch(`/media/${_}`);if(!$.ok)throw Error("Failed to load media text");return $.text()}async function Gq(_){let $=await fetch(`/media/${_}`);if(!$.ok)throw Error("Failed to load media blob");return $.blob()}async function E5(_="",$=2,j=!1){let Z=`/workspace/tree?path=${encodeURIComponent(_)}&depth=${$}&show_hidden=${j?"1":"0"}`;return e0(Z)}async function Xq(_=""){let $=`/workspace/branch?path=${encodeURIComponent(_||"")}`;return e0($)}async function k5(_,$=20000,j=null){let Z=j?`&mode=${encodeURIComponent(j)}`:"",Y=`/workspace/file?path=${encodeURIComponent(_)}&max=${$}${Z}`;return e0(Y)}async function Vq(_,$){return e0("/workspace/file",{method:"PUT",body:JSON.stringify({path:_,content:$})})}async function I6(_){return e0("/workspace/attach",{method:"POST",body:JSON.stringify({path:_})})}async function N8(_,$="",j={}){let Z=new FormData;Z.append("file",_);let Y=new URLSearchParams;if($)Y.set("path",$);if(j.overwrite)Y.set("overwrite","1");let Q=Y.toString(),q=Q?`/workspace/upload?${Q}`:"/workspace/upload",N=await fetch(""+q,{method:"POST",body:Z});if(!N.ok){let K=await N.json().catch(()=>({error:"Upload failed"})),G=Error(K.error||`HTTP ${N.status}`);throw G.status=N.status,G.code=K.code,G}return N.json()}async function M6(_,$,j=""){let Z=await fetch("/workspace/file",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({path:_,name:$,content:j})});if(!Z.ok){let Y=await Z.json().catch(()=>({error:"Create failed"})),Q=Error(Y.error||`HTTP ${Z.status}`);throw Q.status=Z.status,Q.code=Y.code,Q}return Z.json()}async function T6(_,$){let j=await fetch("/workspace/rename",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({path:_,name:$})});if(!j.ok){let Z=await j.json().catch(()=>({error:"Rename failed"})),Y=Error(Z.error||`HTTP ${j.status}`);throw Y.status=j.status,Y.code=Z.code,Y}return j.json()}async function x6(_,$){let j=await fetch("/workspace/move",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({path:_,target:$})});if(!j.ok){let Z=await j.json().catch(()=>({error:"Move failed"})),Y=Error(Z.error||`HTTP ${j.status}`);throw Y.status=j.status,Y.code=Z.code,Y}return j.json()}async function y6(_){let $=`/workspace/file?path=${encodeURIComponent(_||"")}`;return e0($,{method:"DELETE"})}async function I5(_,$=!1){return e0("/workspace/visibility",{method:"POST",body:JSON.stringify({visible:Boolean(_),show_hidden:Boolean($)})})}function K8(_){return`/workspace/raw?path=${encodeURIComponent(_)}`}function G8(_,$=!1){return`/workspace/download?${`path=${encodeURIComponent(_||"")}&show_hidden=${$?"1":"0"}`}`}class X8{constructor(_,$,j={}){this.onEvent=_,this.onStatusChange=$,this.chatJid=typeof j?.chatJid==="string"&&j.chatJid.trim()?j.chatJid.trim():null,this.eventSource=null,this.reconnectTimeout=null,this.reconnectDelay=1000,this.status="disconnected",this.reconnectAttempts=0,this.cooldownUntil=0,this.connecting=!1,this.lastActivityAt=0,this.staleCheckTimer=null,this.staleThresholdMs=70000}markActivity(){this.lastActivityAt=Date.now()}clearStaleMonitor(){if(this.staleCheckTimer)clearInterval(this.staleCheckTimer),this.staleCheckTimer=null}startStaleMonitor(){this.clearStaleMonitor(),this.staleCheckTimer=setInterval(()=>{if(this.status!=="connected")return;if(!this.lastActivityAt)return;if(Date.now()-this.lastActivityAt<=this.staleThresholdMs)return;console.warn("SSE connection went stale; forcing reconnect"),this.forceReconnect()},15000)}forceReconnect(){if(this.connecting=!1,this.eventSource)this.eventSource.close(),this.eventSource=null;this.clearStaleMonitor(),this.status="disconnected",this.onStatusChange("disconnected"),this.reconnectAttempts+=1,this.scheduleReconnect()}connect(){if(this.connecting)return;if(this.eventSource&&this.status==="connected")return;if(this.connecting=!0,this.eventSource)this.eventSource.close();this.clearStaleMonitor();let _=this.chatJid?`?chat_jid=${encodeURIComponent(this.chatJid)}`:"";this.eventSource=new EventSource("/sse/stream"+_);let $=(j)=>{this.eventSource.addEventListener(j,(Z)=>{this.markActivity(),this.onEvent(j,JSON.parse(Z.data))})};this.eventSource.onopen=()=>{this.connecting=!1,this.reconnectDelay=1000,this.reconnectAttempts=0,this.cooldownUntil=0,this.status="connected",this.markActivity(),this.startStaleMonitor(),this.onStatusChange("connected")},this.eventSource.onerror=()=>{this.connecting=!1,this.clearStaleMonitor(),this.status="disconnected",this.onStatusChange("disconnected"),this.reconnectAttempts+=1,this.scheduleReconnect()},this.eventSource.addEventListener("connected",()=>{this.markActivity(),console.log("SSE connected"),this.onEvent("connected",{})}),this.eventSource.addEventListener("heartbeat",()=>{this.markActivity()}),$("new_post"),$("new_reply"),$("agent_response"),$("interaction_updated"),$("interaction_deleted"),$("agent_status"),$("agent_steer_queued"),$("agent_followup_queued"),$("agent_followup_consumed"),$("agent_followup_removed"),$("workspace_update"),$("agent_draft"),$("agent_draft_delta"),$("agent_thought"),$("agent_thought_delta"),$("model_changed"),$("ui_theme"),["extension_ui_request","extension_ui_timeout","extension_ui_notify","extension_ui_status","extension_ui_working","extension_ui_widget","extension_ui_title","extension_ui_editor_text","extension_ui_error"].forEach($)}scheduleReconnect(){if(this.reconnectTimeout)clearTimeout(this.reconnectTimeout);let _=10,$=60000,j=Date.now();if(this.reconnectAttempts>=_)this.cooldownUntil=Math.max(this.cooldownUntil,j+$),this.reconnectAttempts=0;let Z=Math.max(this.cooldownUntil-j,0),Y=Math.max(this.reconnectDelay,Z);this.reconnectTimeout=setTimeout(()=>{console.log("Reconnecting SSE..."),this.connect()},Y),this.reconnectDelay=Math.min(this.reconnectDelay*2,30000)}reconnectIfNeeded(){let _=Date.now();if(this.status==="connected"){if(this.lastActivityAt&&_-this.lastActivityAt>this.staleThresholdMs)this.forceReconnect();return}if(this.cooldownUntil&&_<this.cooldownUntil)return;if(this.reconnectTimeout)clearTimeout(this.reconnectTimeout),this.reconnectTimeout=null;this.connect()}disconnect(){if(this.connecting=!1,this.clearStaleMonitor(),this.eventSource)this.eventSource.close(),this.eventSource=null;if(this.reconnectTimeout)clearTimeout(this.reconnectTimeout),this.reconnectTimeout=null}}class Z2{extensions=new Map;register(_){this.extensions.set(_.id,_)}unregister(_){this.extensions.delete(_)}resolve(_){let $,j=-1/0;for(let Z of this.extensions.values()){if(Z.placement!=="tabs")continue;if(!Z.canHandle)continue;try{let Y=Z.canHandle(_);if(Y===!1||Y===0)continue;let Q=Y===!0?0:typeof Y==="number"?Y:0;if(Q>j)j=Q,$=Z}catch(Y){console.warn(`[PaneRegistry] canHandle() error for "${Z.id}":`,Y)}}return $}list(){return Array.from(this.extensions.values())}getDockPanes(){return Array.from(this.extensions.values()).filter((_)=>_.placement==="dock")}getTabPanes(){return Array.from(this.extensions.values()).filter((_)=>_.placement==="tabs")}get(_){return this.extensions.get(_)}get size(){return this.extensions.size}}var i0=new Z2;var V8=null,P6=null;function Uq(){try{return`/static/dist/editor.bundle.js${new URL(import.meta.url).search||""}`}catch{return"/static/dist/editor.bundle.js"}}function Y2(){if(P6)return Promise.resolve(P6);if(!V8)V8=import(Uq()).then((_)=>{return P6=_,_}).catch((_)=>{throw V8=null,_});return V8}class Q2{container;context;real=null;disposed=!1;loadingEl;queuedDirtyCb=null;queuedSaveCb=null;queuedCloseCb=null;queuedViewStateCb=null;queuedViewState=null;constructor(_,$){this.container=_,this.context=$,this.loadingEl=document.createElement("div"),this.loadingEl.className="editor-pane",this.loadingEl.innerHTML=`
            <div class="editor-body">
                <div class="editor-status" style="padding: 2em; text-align: center; color: var(--text-secondary);">Loading editor…</div>
            </div>
        `,_.appendChild(this.loadingEl),this.load()}escapeHtml(_){let $=document.createElement("div");return $.textContent=_,$.innerHTML}async load(){try{let _=await Y2();if(this.disposed)return;if(this.loadingEl.parentNode)this.loadingEl.remove();if(this.real=new _.StandaloneEditorInstance(this.container,this.context),this.queuedDirtyCb&&this.real.onDirtyChange)this.real.onDirtyChange(this.queuedDirtyCb);if(this.queuedSaveCb&&this.real.onSaveRequest)this.real.onSaveRequest(this.queuedSaveCb);if(this.queuedCloseCb&&this.real.onClose)this.real.onClose(this.queuedCloseCb);if(this.queuedViewStateCb&&typeof this.real.onViewStateChange==="function")this.real.onViewStateChange(this.queuedViewStateCb);if(this.queuedViewState&&typeof this.real.restoreViewState==="function")requestAnimationFrame(()=>this.real?.restoreViewState?.(this.queuedViewState))}catch(_){if(this.disposed)return;console.error("[editor-loader] Failed to load editor bundle:",_),this.loadingEl.querySelector(".editor-status").textContent="Failed to load editor. Check console for details."}}getContent(){return this.real?.getContent()}isDirty(){return this.real?.isDirty()||!1}setContent(_,$){if(this.real?.setContent)this.real.setContent(_,$)}focus(){this.real?.focus()}resize(){this.real?.resize?.()}dispose(){if(this.disposed)return;if(this.disposed=!0,this.real)this.real.dispose(),this.real=null;this.container.innerHTML="",this.queuedDirtyCb=null,this.queuedSaveCb=null,this.queuedCloseCb=null,this.queuedViewStateCb=null}onDirtyChange(_){if(this.queuedDirtyCb=_,this.real?.onDirtyChange)this.real.onDirtyChange(_)}onSaveRequest(_){if(this.queuedSaveCb=_,this.real?.onSaveRequest)this.real.onSaveRequest(_)}onClose(_){if(this.queuedCloseCb=_,this.real?.onClose)this.real.onClose(_)}onViewStateChange(_){this.queuedViewStateCb=_,this.real?.onViewStateChange?.(_)}restoreViewState(_){this.queuedViewState=_,this.real?.restoreViewState?.(_)}getPath(){return this.real?.getPath?.()??this.context.path??""}setPath(_){this.real?.setPath?.(_)}}var C6={id:"editor",label:"Editor",icon:"edit",capabilities:["edit"],placement:"tabs",canHandle(_){if(!_.path)return!1;if(_.mode!=="edit")return!1;return 1},mount(_,$){return new Q2(_,$)}};function S6(){Y2().catch(()=>{})}var $5="piclaw://terminal";var Lq={yellow:"#9a6700",magenta:"#8250df",cyan:"#1b7c83",brightBlack:"#57606a",brightRed:"#cf222e",brightGreen:"#1a7f37",brightYellow:"#bf8700",brightBlue:"#0550ae",brightMagenta:"#6f42c1",brightCyan:"#0a7b83"},Wq={yellow:"#d29922",magenta:"#bc8cff",cyan:"#39c5cf",brightBlack:"#8b949e",brightRed:"#ff7b72",brightGreen:"#7ee787",brightYellow:"#e3b341",brightBlue:"#79c0ff",brightMagenta:"#d2a8ff",brightCyan:"#56d4dd"},U8=null,w6=null;function Bq(_){if(!_)return!1;return _.startsWith("data:application/wasm")||/(^|\/)ghostty-vt\.wasm(?:[?#].*)?$/.test(_)}async function zq(_){let $=globalThis.fetch?.bind(globalThis);if(!$)return await _();let j=new URL("/static/js/vendor/ghostty-vt.wasm",window.location.origin).href,Z=(Y,Q)=>{let q=Y instanceof Request?Y.url:Y instanceof URL?Y.href:String(Y);if(!Bq(q))return $(Y,Q);if(Y instanceof Request)return $(new Request(j,Y));return $(j,Q)};globalThis.fetch=Z;try{return await _()}finally{globalThis.fetch=$}}async function Fq(){let $=await import(new URL("/static/js/vendor/ghostty-web.js",window.location.origin).href);if(!U8)U8=zq(()=>Promise.resolve($.init?.())).catch((j)=>{throw U8=null,j});return await U8,$}async function Hq(){if(typeof document>"u"||!("fonts"in document)||!document.fonts)return;if(!w6)w6=Promise.allSettled([document.fonts.load('400 13px "FiraCode Nerd Font Mono"'),document.fonts.load('700 13px "FiraCode Nerd Font Mono"'),document.fonts.ready]).then(()=>{return}).catch(()=>{return});await w6}async function Jq(){let _=await fetch("/terminal/session",{method:"GET",credentials:"same-origin"}),$=await _.json().catch(()=>({}));if(!_.ok)throw Error($?.error||`HTTP ${_.status}`);return $}function Oq(_){return`${window.location.protocol==="https:"?"wss:":"ws:"}//${window.location.host}${_}`}function Dq(){if(typeof window>"u"||typeof document>"u")return!1;let{documentElement:_,body:$}=document,j=_?.getAttribute?.("data-theme")?.toLowerCase?.()||"";if(j==="dark")return!0;if(j==="light")return!1;if(_?.classList?.contains("dark")||$?.classList?.contains("dark"))return!0;if(_?.classList?.contains("light")||$?.classList?.contains("light"))return!1;return Boolean(window.matchMedia?.("(prefers-color-scheme: dark)")?.matches)}function t_(_,$=""){if(typeof document>"u")return $;return getComputedStyle(document.documentElement).getPropertyValue(_)?.trim()||$}function Aq(_,$){if(!_||!_.startsWith("#"))return _;let j=_.slice(1);if(j.length===3)return`#${j[0]}${j[0]}${j[1]}${j[1]}${j[2]}${j[2]}${$}`;if(j.length===6)return`#${j}${$}`;return _}function q2(){let _=Dq(),$=_?Wq:Lq,j=t_("--bg-primary",_?"#000000":"#ffffff"),Z=t_("--text-primary",_?"#e7e9ea":"#0f1419"),Y=t_("--text-secondary",_?"#71767b":"#536471"),Q=t_("--accent-color","#1d9bf0"),q=t_("--danger-color",_?"#ff7b72":"#cf222e"),N=t_("--success-color",_?"#7ee787":"#1a7f37"),K=t_("--bg-hover",_?"#1d1f23":"#e8ebed"),G=t_("--border-color",_?"#2f3336":"#eff3f4"),X=t_("--accent-soft-strong",Aq(Q,_?"47":"33"));return{background:j,foreground:Z,cursor:Q,cursorAccent:j,selectionBackground:X,selectionForeground:Z,black:K,red:q,green:N,yellow:$.yellow,blue:Q,magenta:$.magenta,cyan:$.cyan,white:Z,brightBlack:$.brightBlack,brightRed:$.brightRed,brightGreen:$.brightGreen,brightYellow:$.brightYellow,brightBlue:$.brightBlue,brightMagenta:$.brightMagenta,brightCyan:$.brightCyan,brightWhite:G}}class R6{container;disposed=!1;termEl;bodyEl;statusEl;terminal=null;fitAddon=null;socket=null;themeObserver=null;themeChangeListener=null;mediaQuery=null;mediaQueryListener=null;resizeObserver=null;dockResizeListener=null;windowResizeListener=null;resizeFrame=0;lastAppliedThemeSignature=null;lastResizeSignature=null;constructor(_,$){this.container=_,this.termEl=document.createElement("div"),this.termEl.className="terminal-pane-content",this.termEl.setAttribute("tabindex","0"),this.statusEl=document.createElement("span"),this.statusEl.className="terminal-pane-status",this.statusEl.textContent="Loading terminal…",this.bodyEl=document.createElement("div"),this.bodyEl.className="terminal-pane-body",this.bodyEl.innerHTML='<div class="terminal-placeholder">Bootstrapping ghostty-web…</div>',this.termEl.append(this.bodyEl),_.appendChild(this.termEl),this.bootstrapGhostty()}setStatus(_){this.statusEl.textContent=_,this.termEl.dataset.connectionStatus=_,this.termEl.setAttribute("aria-label",`Terminal ${_}`)}getResizeSignature(){try{let _=this.container?.getBoundingClientRect?.(),$=this.bodyEl?.getBoundingClientRect?.(),j=Number.isFinite(_?.width)?_.width:0,Z=Number.isFinite(_?.height)?_.height:0,Y=Number.isFinite($?.width)?$.width:0,Q=Number.isFinite($?.height)?$.height:0;return`${Math.round(j)}x${Math.round(Z)}:${Math.round(Y)}x${Math.round(Q)}`}catch{return"0x0:0x0"}}syncHostLayout(){let _=this.bodyEl.querySelector(".terminal-live-host");if(!(_ instanceof HTMLElement))return;let $=_.firstElementChild;if($ instanceof HTMLElement)$.style.width="100%",$.style.height="100%",$.style.maxWidth="100%",$.style.minWidth="0",$.style.display="block";let j=_.querySelector("canvas");if(j instanceof HTMLElement)j.style.display="block",j.style.maxWidth="none"}scheduleResize(){if(this.disposed)return;let _=this.getResizeSignature();if(this.lastResizeSignature===_)return;if(this.resizeFrame)cancelAnimationFrame(this.resizeFrame);this.resizeFrame=requestAnimationFrame(()=>{this.resizeFrame=0,this.lastResizeSignature=this.getResizeSignature(),this.resize()})}async bootstrapGhostty(){try{let _=await Fq();if(await Hq(),this.disposed)return;this.bodyEl.innerHTML="";let $=document.createElement("div");$.className="terminal-live-host",this.bodyEl.appendChild($);let j=new _.Terminal({cols:120,rows:30,cursorBlink:!0,fontFamily:'FiraCode Nerd Font Mono, ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", monospace',fontSize:13,theme:q2()}),Z=null;if(typeof _.FitAddon==="function")Z=new _.FitAddon,j.loadAddon?.(Z);await j.open($),this.syncHostLayout(),j.loadFonts?.(),Z?.observeResize?.(),this.terminal=j,this.fitAddon=Z,this.installThemeSync(),this.installResizeSync(),this.scheduleResize(),await this.connectBackend()}catch(_){if(console.error("[terminal-pane] Failed to bootstrap ghostty-web:",_),this.disposed)return;this.bodyEl.innerHTML='<div class="terminal-placeholder">Terminal failed to load. Check vendored assets and backend wiring.</div>',this.setStatus("Load failed")}}applyTheme(){if(!this.terminal)return;let _=q2(),$=JSON.stringify(_),j=this.lastAppliedThemeSignature!==null&&this.lastAppliedThemeSignature!==$;try{this.termEl.style.backgroundColor=_.background,this.bodyEl.style.backgroundColor=_.background;let Z=this.bodyEl.querySelector(".terminal-live-host");if(Z instanceof HTMLElement)Z.style.backgroundColor=_.background,Z.style.color=_.foreground;let Y=this.bodyEl.querySelector("canvas");if(Y instanceof HTMLElement)Y.style.backgroundColor=_.background,Y.style.color=_.foreground}catch{}try{if(this.terminal.options)this.terminal.options.theme=_}catch{}try{if(j&&this.terminal.reset)this.terminal.reset()}catch{}try{this.terminal.renderer?.setTheme?.(_),this.terminal.renderer?.clear?.()}catch{}try{this.terminal.loadFonts?.()}catch{}try{this.terminal.renderer?.remeasureFont?.()}catch{}try{if(this.terminal.wasmTerm&&this.terminal.renderer?.render)this.terminal.renderer.render(this.terminal.wasmTerm,!0,this.terminal.viewportY||0,this.terminal),this.terminal.renderer.render(this.terminal.wasmTerm,!1,this.terminal.viewportY||0,this.terminal)}catch{}try{this.resize()}catch{}try{if(j&&this.socket?.readyState===WebSocket.OPEN)this.socket.send(JSON.stringify({type:"input",data:"\f"}))}catch{}try{this.terminal.refresh?.()}catch{}this.lastAppliedThemeSignature=$}installThemeSync(){if(typeof window>"u"||typeof document>"u")return;let _=()=>requestAnimationFrame(()=>this.applyTheme());_();let $=()=>_();window.addEventListener("piclaw-theme-change",$),this.themeChangeListener=$;let j=window.matchMedia?.("(prefers-color-scheme: dark)"),Z=()=>_();if(j?.addEventListener)j.addEventListener("change",Z);else if(j?.addListener)j.addListener(Z);this.mediaQuery=j,this.mediaQueryListener=Z;let Y=typeof MutationObserver<"u"?new MutationObserver(()=>_()):null;if(Y?.observe(document.documentElement,{attributes:!0,attributeFilter:["class","data-theme","style"]}),document.body)Y?.observe(document.body,{attributes:!0,attributeFilter:["class","data-theme"]});this.themeObserver=Y}installResizeSync(){if(typeof window>"u")return;let _=()=>this.scheduleResize(),$=()=>this.scheduleResize();if(window.addEventListener("dock-resize",_),window.addEventListener("resize",$),this.dockResizeListener=_,this.windowResizeListener=$,typeof ResizeObserver<"u"){let j=new ResizeObserver(()=>{if(this.disposed)return;this.scheduleResize()});j.observe(this.container),this.resizeObserver=j}}async connectBackend(){let _=this.terminal;if(!_)return;try{let $=await Jq();if(this.disposed)return;if(!$?.enabled){_.write?.(`Terminal backend unavailable: ${$?.error||"disabled"}\r
`),this.setStatus("Unavailable");return}let j=new WebSocket(Oq($.ws_path||"/terminal/ws"));this.socket=j,this.setStatus("Connecting…"),_.onData?.((Z)=>{if(j.readyState===WebSocket.OPEN)j.send(JSON.stringify({type:"input",data:Z}))}),_.onResize?.(({cols:Z,rows:Y})=>{if(j.readyState===WebSocket.OPEN)j.send(JSON.stringify({type:"resize",cols:Z,rows:Y}))}),j.addEventListener("open",()=>{if(this.disposed)return;this.setStatus("Connected"),this.scheduleResize()}),j.addEventListener("message",(Z)=>{if(this.disposed)return;let Y=null;try{Y=JSON.parse(String(Z.data))}catch{Y={type:"output",data:String(Z.data)}}if(Y?.type==="output"&&typeof Y.data==="string"){_.write?.(Y.data);return}if(Y?.type==="exit")_.write?.(`\r
[terminal exited]\r
`),this.setStatus("Exited")}),j.addEventListener("close",()=>{if(this.disposed)return;this.setStatus("Disconnected")}),j.addEventListener("error",()=>{if(this.disposed)return;this.setStatus("Connection error")})}catch($){_.write?.(`Terminal backend unavailable: ${$ instanceof Error?$.message:String($)}\r
`),this.setStatus("Unavailable")}}sendResize(){if(!this.socket||this.socket.readyState!==WebSocket.OPEN||!this.fitAddon?.proposeDimensions)return;let _=this.fitAddon.proposeDimensions();if(!_)return;this.socket.send(JSON.stringify({type:"resize",cols:_.cols,rows:_.rows}))}getContent(){return}isDirty(){return!1}focus(){if(this.terminal?.focus){this.terminal.focus();return}this.termEl?.focus()}resize(){this.syncHostLayout();try{this.terminal?.renderer?.remeasureFont?.()}catch{}try{this.fitAddon?.fit?.()}catch{}try{this.terminal?.refresh?.()}catch{}this.syncHostLayout(),this.sendResize()}dispose(){if(this.disposed)return;this.disposed=!0;try{if(this.resizeFrame)cancelAnimationFrame(this.resizeFrame),this.resizeFrame=0}catch{}try{if(this.themeChangeListener)window.removeEventListener("piclaw-theme-change",this.themeChangeListener)}catch{}try{if(this.mediaQuery&&this.mediaQueryListener){if(this.mediaQuery.removeEventListener)this.mediaQuery.removeEventListener("change",this.mediaQueryListener);else if(this.mediaQuery.removeListener)this.mediaQuery.removeListener(this.mediaQueryListener)}}catch{}try{if(this.dockResizeListener)window.removeEventListener("dock-resize",this.dockResizeListener);if(this.windowResizeListener)window.removeEventListener("resize",this.windowResizeListener)}catch{}try{this.themeObserver?.disconnect?.()}catch{}try{this.resizeObserver?.disconnect?.()}catch{}try{this.socket?.close?.()}catch{}try{this.fitAddon?.dispose?.()}catch{}try{this.terminal?.dispose?.()}catch{}this.termEl?.remove()}}var u6={id:"terminal",label:"Terminal",icon:"terminal",capabilities:["terminal"],placement:"dock",mount(_,$){return new R6(_,$)}},f6={id:"terminal-tab",label:"Terminal",icon:"terminal",capabilities:["terminal"],placement:"tabs",canHandle(_){return _?.path==="piclaw://terminal"?1e4:!1},mount(_,$){return new R6(_,$)}};function e_(_={}){let $=_.window??(typeof window<"u"?window:null),j=_.navigator??(typeof navigator<"u"?navigator:null);if(j&&j.standalone===!0)return!0;if(!$||typeof $.matchMedia!=="function")return!1;return["(display-mode: standalone)","(display-mode: minimal-ui)","(display-mode: fullscreen)"].some((Y)=>{try{return Boolean($.matchMedia(Y)?.matches)}catch{return!1}})}function L8(_={}){let $=_.window??(typeof window<"u"?window:null),j=_.navigator??(typeof navigator<"u"?navigator:null);if(!$&&!j)return!1;let Z=String(j?.userAgent||""),Y=Number(j?.maxTouchPoints||0),Q=/Android|webOS|iPhone|iPad|iPod|Mobile|Windows Phone/i.test(Z),q=(()=>{if(!$||typeof $.matchMedia!=="function")return!1;try{return Boolean($.matchMedia("(pointer: coarse)")?.matches||$.matchMedia("(any-pointer: coarse)")?.matches)}catch{return!1}})();return Boolean(Q||Y>1||q)}function N2(_,$={}){if(e_($))return null;if(L8($))return{target:"_blank",features:void 0,mode:"tab"};return{target:Eq(_),features:"popup=yes,width=900,height=960,resizable=yes,scrollbars=yes",mode:"popup"}}function v6(_,$={}){let j=$.window??(typeof window<"u"?window:null);if(!j||!_)return null;try{return _.features?j.open("about:blank",_.target,_.features):j.open("about:blank",_.target)}catch{return null}}function b6(_,$={}){if(!_||!_.document)return;try{let j=String($.title||"Opening branch…"),Z=String($.message||"Preparing a new branch window…");_.document.title=j,_.document.body.innerHTML=`
            <div style="font-family: system-ui, sans-serif; padding: 24px; color: #222;">
                <h1 style="font-size: 18px; margin: 0 0 12px;">${j}</h1>
                <p style="margin: 0; line-height: 1.5;">${Z}</p>
            </div>
        `}catch{}}function g6(_,$){if(!_||!$)return;try{if(_.location&&typeof _.location.replace==="function"){_.location.replace(String($));return}_.location=String($)}catch{}}function m6(_){if(!_||typeof _.close!=="function")return;try{_.close()}catch{}}function _4(_,$,j={}){let Z=new URL(String(_||"http://localhost/")),Y=String($||"").trim()||"web:default";if(Z.searchParams.set("chat_jid",Y),Z.searchParams.delete("branch_loader"),Z.searchParams.delete("branch_source_chat_jid"),Z.searchParams.delete("pane_popout"),Z.searchParams.delete("pane_path"),Z.searchParams.delete("pane_label"),j.chatOnly!==!1)Z.searchParams.set("chat_only","1");return Z.toString()}function K2(_,$,j={}){let Z=new URL(String(_||"http://localhost/")),Y=String($||"").trim()||"web:default";if(Z.searchParams.set("branch_loader","1"),Z.searchParams.set("branch_source_chat_jid",Y),Z.searchParams.delete("chat_jid"),Z.searchParams.delete("pane_popout"),Z.searchParams.delete("pane_path"),Z.searchParams.delete("pane_label"),j.chatOnly!==!1)Z.searchParams.set("chat_only","1");return Z.toString()}function G2(_,$,j={}){let Z=new URL(String(_||"http://localhost/")),Y=String($||"").trim();if(!Y)return Z.toString();if(Z.searchParams.set("pane_popout","1"),Z.searchParams.set("pane_path",Y),j?.label)Z.searchParams.set("pane_label",String(j.label));else Z.searchParams.delete("pane_label");if(j?.chatJid)Z.searchParams.set("chat_jid",String(j.chatJid));let Q=j?.params&&typeof j.params==="object"?j.params:null;if(Q)for(let[q,N]of Object.entries(Q)){let K=String(q||"").trim();if(!K)continue;if(N===null||N===void 0||N==="")Z.searchParams.delete(K);else Z.searchParams.set(K,String(N))}return Z.searchParams.delete("chat_only"),Z.searchParams.delete("branch_loader"),Z.searchParams.delete("branch_source_chat_jid"),Z.toString()}function Eq(_){return`piclaw-chat-${String(_||"web:default").trim().toLowerCase().replace(/[^a-z0-9_-]+/g,"-")||"default"}`}function kq(_){return`piclaw-pane-${String(_||"pane").trim().toLowerCase().replace(/[^a-z0-9_-]+/g,"-")||"default"}`}function X2(_,$={}){if(e_($))return null;if(L8($))return{target:"_blank",features:void 0,mode:"tab"};return{target:kq(_),features:"popup=yes,width=1200,height=960,resizable=yes,scrollbars=yes",mode:"popup"}}function M5(_){let $=_ instanceof Error?_.message:String(_||"").trim(),j=String($||"").trim();if(!j)return"PiClaw could not open a new branch window.";let Z=j.toLowerCase();if(Z.includes("no stable turn boundary"))return"This chat is still in flight and does not yet have a stable turn boundary to fork from.";if(Z.includes("cannot fork a branch while the source chat is still active"))return"This chat is still active. Please wait for the current turn to settle, then try again.";if(Z.includes("cancelled"))return"Branch creation was cancelled before a new chat window could be opened.";if(Z.includes("did not return a chat id"))return"PiClaw created no usable branch id for the new window. Please try again.";if(Z.includes("failed to fork branch")||Z.includes("failed to fork chat branch"))return"PiClaw could not create the new branch. Please try again.";return j}function Iq(_){try{return JSON.parse(_)}catch{return null}}function Mq(_){if(typeof _==="string")return new TextEncoder().encode(_).byteLength;if(_ instanceof ArrayBuffer)return _.byteLength;if(ArrayBuffer.isView(_))return _.byteLength;if(_ instanceof Blob)return _.size;return 0}function Tq(_){if(typeof _==="string")return _.length;if(_ instanceof ArrayBuffer)return _.byteLength;if(_ instanceof Blob)return _.size;return Number(_?.size||0)}class p6{socket=null;disposed=!1;options;bytesIn=0;bytesOut=0;constructor(_){this.options=_}connect(){if(this.disposed)return;try{this.socket?.close?.()}catch{}let _=new WebSocket(this.options.url);_.binaryType=this.options.binaryType||"arraybuffer",_.addEventListener("open",()=>{if(this.disposed||this.socket!==_)return;this.options.onOpen?.()}),_.addEventListener("message",($)=>{if(this.disposed||this.socket!==_)return;let j=Tq($.data);if(this.bytesIn+=j,this.emitMetrics(),typeof $.data==="string"){let Z=this.options.parseControlMessage||Iq;this.options.onMessage?.({kind:"control",raw:$.data,payload:Z($.data)});return}this.options.onMessage?.({kind:"binary",data:$.data,size:j})}),_.addEventListener("close",()=>{if(this.socket===_)this.socket=null;if(this.disposed)return;this.options.onClose?.()}),_.addEventListener("error",()=>{if(this.disposed||this.socket!==_)return;this.options.onError?.()}),this.socket=_}send(_){if(this.disposed||!this.socket)return;let $=Mq(_);this.bytesOut+=$,this.emitMetrics(),this.socket.send(_)}sendControl(_){this.send(JSON.stringify(_??{}))}getMetrics(){return{bytesIn:this.bytesIn,bytesOut:this.bytesOut}}dispose(){if(this.disposed)return;this.disposed=!0;try{this.socket?.close?.()}catch{}this.socket=null}emitMetrics(){this.options.onMetrics?.(this.getMetrics())}}var T5=()=>{throw Error("Operation requires compiling with --exportRuntime")},xq=typeof BigUint64Array<"u",x5=Symbol();var yq=new TextDecoder("utf-16le",{fatal:!0});Object.hasOwn=Object.hasOwn||function(_,$){return Object.prototype.hasOwnProperty.call(_,$)};function V2(_,$){let j=new Uint32Array(_)[$+-4>>>2]>>>1,Z=new Uint16Array(_,$,j);if(j<=192)return String.fromCharCode(...Z);try{return yq.decode(Z)}catch{let Y="",Q=0;while(j-Q>1024)Y+=String.fromCharCode(...Z.subarray(Q,Q+=1024));return Y+String.fromCharCode(...Z.subarray(Q))}}function U2(_){let $={};function j(Y,Q){if(!Y)return"<yet unknown>";return V2(Y.buffer,Q)}let Z=_.env=_.env||{};return Z.abort=Z.abort||function(Q,q,N,K){let G=$.memory||Z.memory;throw Error(`abort: ${j(G,Q)} at ${j(G,q)}:${N}:${K}`)},Z.trace=Z.trace||function(Q,q,...N){let K=$.memory||Z.memory;console.log(`trace: ${j(K,Q)}${q?" ":""}${N.slice(0,q).join(", ")}`)},Z.seed=Z.seed||Date.now,_.Math=_.Math||Math,_.Date=_.Date||Date,$}function L2(_,$){let j=$.exports,Z=j.memory,Y=j.table,Q=j.__new||T5,q=j.__pin||T5,N=j.__unpin||T5,K=j.__collect||T5,G=j.__rtti_base,X=G?(B)=>B[G>>>2]:T5;_.__new=Q,_.__pin=q,_.__unpin=N,_.__collect=K;function V(B){let I=new Uint32Array(Z.buffer);if((B>>>=0)>=X(I))throw Error(`invalid id: ${B}`);return I[(G+4>>>2)+B]}function U(B){let I=V(B);if(!(I&7))throw Error(`not an array: ${B}, flags=${I}`);return I}function L(B){return 31-Math.clz32(B>>>6&31)}function F(B){if(B==null)return 0;let I=B.length,w=Q(I<<1,2),c=new Uint16Array(Z.buffer);for(let b=0,n=w>>>1;b<I;++b)c[n+b]=B.charCodeAt(b);return w}_.__newString=F;function J(B){if(B==null)return 0;let I=new Uint8Array(B),w=Q(I.length,1);return new Uint8Array(Z.buffer).set(I,w),w}_.__newArrayBuffer=J;function H(B){if(!B)return null;let I=Z.buffer;if(new Uint32Array(I)[B+-8>>>2]!==2)throw Error(`not a string: ${B}`);return V2(I,B)}_.__getString=H;function W(B,I,w){let c=Z.buffer;if(w)switch(B){case 2:return new Float32Array(c);case 3:return new Float64Array(c)}else switch(B){case 0:return new(I?Int8Array:Uint8Array)(c);case 1:return new(I?Int16Array:Uint16Array)(c);case 2:return new(I?Int32Array:Uint32Array)(c);case 3:return new(I?BigInt64Array:BigUint64Array)(c)}throw Error(`unsupported align: ${B}`)}function D(B,I=0){let w=I,c=U(B),b=L(c),n=typeof w!=="number",d=n?w.length:w,r=Q(d<<b,c&4?B:1),t;if(c&4)t=r;else{q(r);let a=Q(c&2?16:12,B);N(r);let _0=new Uint32Array(Z.buffer);if(_0[a+0>>>2]=r,_0[a+4>>>2]=r,_0[a+8>>>2]=d<<b,c&2)_0[a+12>>>2]=d;t=a}if(n){let a=W(b,c&2048,c&4096),_0=r>>>b;if(c&16384)for(let N0=0;N0<d;++N0)a[_0+N0]=w[N0];else a.set(w,_0)}return t}_.__newArray=D;function E(B){let I=new Uint32Array(Z.buffer),w=I[B+-8>>>2],c=U(w),b=L(c),n=c&4?B:I[B+4>>>2],d=c&2?I[B+12>>>2]:I[n+-4>>>2]>>>b;return W(b,c&2048,c&4096).subarray(n>>>=b,n+d)}_.__getArrayView=E;function C(B){let I=E(B),w=I.length,c=Array(w);for(let b=0;b<w;b++)c[b]=I[b];return c}_.__getArray=C;function P(B){let I=Z.buffer,w=new Uint32Array(I)[B+-4>>>2];return I.slice(B,B+w)}_.__getArrayBuffer=P;function v(B){if(!Y)throw Error("Operation requires compiling with --exportTable");let I=new Uint32Array(Z.buffer)[B>>>2];return Y.get(I)}_.__getFunction=v;function p(B,I,w){return new B(M(B,I,w))}function M(B,I,w){let c=Z.buffer,b=new Uint32Array(c);return new B(c,b[w+4>>>2],b[w+8>>>2]>>>I)}function k(B,I,w){_[`__get${I}`]=p.bind(null,B,w),_[`__get${I}View`]=M.bind(null,B,w)}if([Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array].forEach((B)=>{k(B,B.name,31-Math.clz32(B.BYTES_PER_ELEMENT))}),xq)[BigUint64Array,BigInt64Array].forEach((B)=>{k(B,B.name.slice(3),3)});return _.memory=_.memory||Z,_.table=_.table||Y,Cq(j,_)}function W2(_){return typeof Response<"u"&&_ instanceof Response}function Pq(_){return _ instanceof WebAssembly.Module}async function h6(_,$={}){if(W2(_=await _))return W8(_,$);let j=Pq(_)?_:await WebAssembly.compile(_),Z=U2($),Y=await WebAssembly.instantiate(j,$),Q=L2(Z,Y);return{module:j,instance:Y,exports:Q}}async function W8(_,$={}){if(!WebAssembly.instantiateStreaming)return h6(W2(_=await _)?_.arrayBuffer():_,$);let j=U2($),Z=await WebAssembly.instantiateStreaming(_,$),Y=L2(j,Z.instance);return{...Z,exports:Y}}function Cq(_,$={}){let j=_.__argumentsLength?(Z)=>{_.__argumentsLength.value=Z}:_.__setArgumentsLength||_.__setargc||(()=>{});for(let Z of Object.keys(_)){let Y=_[Z],Q=Z.split("."),q=$;while(Q.length>1){let G=Q.shift();if(!Object.hasOwn(q,G))q[G]={};q=q[G]}let N=Q[0],K=N.indexOf("#");if(K>=0){let G=N.substring(0,K),X=q[G];if(typeof X>"u"||!X.prototype){let V=function(...U){return V.wrap(V.prototype.constructor(0,...U))};if(V.prototype={valueOf(){return this[x5]}},V.wrap=function(U){return Object.create(V.prototype,{[x5]:{value:U,writable:!1}})},X)Object.getOwnPropertyNames(X).forEach((U)=>Object.defineProperty(V,U,Object.getOwnPropertyDescriptor(X,U)));q[G]=V}if(N=N.substring(K+1),q=q[G].prototype,/^(get|set):/.test(N)){if(!Object.hasOwn(q,N=N.substring(4))){let V=_[Z.replace("set:","get:")],U=_[Z.replace("get:","set:")];Object.defineProperty(q,N,{get(){return V(this[x5])},set(L){U(this[x5],L)},enumerable:!0})}}else if(N==="constructor")(q[N]=function(...V){return j(V.length),Y(...V)}).original=Y;else(q[N]=function(...V){return j(V.length),Y(this[x5],...V)}).original=Y}else if(/^(get|set):/.test(N)){if(!Object.hasOwn(q,N=N.substring(4)))Object.defineProperty(q,N,{get:_[Z.replace("set:","get:")],set:_[Z.replace("get:","set:")],enumerable:!0})}else if(typeof Y==="function"&&Y!==j)(q[N]=(...G)=>{return j(G.length),Y(...G)}).original=Y;else q[N]=Y}return $}var wq="/static/js/vendor/remote-display-decoder.wasm",B8=null;function B2(_){if(_ instanceof ArrayBuffer)return _;if(_.byteOffset===0&&_.byteLength===_.buffer.byteLength)return _.buffer;return _.slice().buffer}async function z2(){if(B8)return B8;return B8=(async()=>{try{let Z=function(Y,Q,q,N,K,G,X){let V=B2(Q),U=j.__pin(j.__newArrayBuffer(V));try{return j[Y](U,q,N,K,G,X.bitsPerPixel,X.bigEndian?1:0,X.trueColor?1:0,X.redMax,X.greenMax,X.blueMax,X.redShift,X.greenShift,X.blueShift)}finally{j.__unpin(U);try{j.__collect()}catch{}}},_=await fetch(wq,{credentials:"same-origin"});if(!_.ok)throw Error(`HTTP ${_.status}`);let j=(typeof W8==="function"?await W8(_,{}):await h6(await _.arrayBuffer(),{})).exports;for(let Y of["initFramebuffer","getFramebufferPtr","getFramebufferLen","getFramebufferWidth","getFramebufferHeight","processRawRect","processCopyRect","processRreRect","processHextileRect","processZrleTileData","decodeRawRectToRgba"])if(typeof j[Y]!=="function")throw Error(`${Y} export is missing.`);return{initFramebuffer(Y,Q){j.initFramebuffer(Y,Q)},getFramebuffer(){let Y=j.getFramebufferPtr(),Q=j.getFramebufferLen();return new Uint8ClampedArray(new Uint8Array(j.memory.buffer,Y,Q).slice().buffer)},getFramebufferWidth(){return j.getFramebufferWidth()},getFramebufferHeight(){return j.getFramebufferHeight()},processRawRect(Y,Q,q,N,K,G){return Z("processRawRect",Y,Q,q,N,K,G)},processCopyRect(Y,Q,q,N,K,G){return j.processCopyRect(Y,Q,q,N,K,G)},processRreRect(Y,Q,q,N,K,G){return Z("processRreRect",Y,Q,q,N,K,G)},processHextileRect(Y,Q,q,N,K,G){return Z("processHextileRect",Y,Q,q,N,K,G)},processZrleTileData(Y,Q,q,N,K,G){return Z("processZrleTileData",Y,Q,q,N,K,G)},decodeRawRectToRgba(Y,Q,q,N){let K=B2(Y),G=j.__pin(j.__newArrayBuffer(K));try{let X=j.__pin(j.decodeRawRectToRgba(G,Q,q,N.bitsPerPixel,N.bigEndian?1:0,N.trueColor?1:0,N.redMax,N.greenMax,N.blueMax,N.redShift,N.greenShift,N.blueShift));try{return new Uint8ClampedArray(j.__getArrayBuffer(X))}finally{j.__unpin(X)}}finally{j.__unpin(G);try{j.__collect?.()}catch{}}}}}catch(_){return console.warn("[remote-display] Failed to load WASM pipeline, using JS fallback.",_),null}})(),B8}function j5(_,$,j){return Math.max($,Math.min(j,_))}function z8(_,$,j){let Z=new Uint8Array(6),Y=j5(Math.floor(Number($||0)),0,65535),Q=j5(Math.floor(Number(j||0)),0,65535);return Z[0]=5,Z[1]=j5(Math.floor(Number(_||0)),0,255),Z[2]=Y>>8&255,Z[3]=Y&255,Z[4]=Q>>8&255,Z[5]=Q&255,Z}function l6(_){switch(Number(_)){case 0:return 1;case 1:return 2;case 2:return 4;default:return 0}}function F2(_,$,j,Z,Y){let Q=Math.max(1,Math.floor(Number(Z||0))),q=Math.max(1,Math.floor(Number(Y||0))),N=Math.max(1,Number(j?.width||0)),K=Math.max(1,Number(j?.height||0)),G=(Number(_||0)-Number(j?.left||0))/N,X=(Number($||0)-Number(j?.top||0))/K;return{x:j5(Math.floor(G*Q),0,Math.max(0,Q-1)),y:j5(Math.floor(X*q),0,Math.max(0,q-1))}}function H2(_,$,j,Z=0){let Y=Number(_)<0?8:16,Q=j5(Number(Z||0)|Y,0,255);return[z8(Q,$,j),z8(Number(Z||0),$,j)]}function J2(_,$){let j=new Uint8Array(8),Z=Math.max(0,Math.min(4294967295,Number($||0)>>>0));return j[0]=4,j[1]=_?1:0,j[4]=Z>>>24&255,j[5]=Z>>>16&255,j[6]=Z>>>8&255,j[7]=Z&255,j}function y5(_){if(typeof _!=="string")return null;return _.length>0?_:null}function O2(_,$,j,Z){let Y=Math.max(1,Math.floor(Number(_||0))),Q=Math.max(1,Math.floor(Number($||0))),q=Math.max(1,Math.floor(Number(j||0))),N=Math.max(1,Math.floor(Number(Z||0))),K=Math.min(Y/q,Q/N);if(!Number.isFinite(K)||K<=0)return 1;return Math.max(0.01,K)}var c6={Backspace:65288,Tab:65289,Enter:65293,Escape:65307,Insert:65379,Delete:65535,Home:65360,End:65367,PageUp:65365,PageDown:65366,ArrowLeft:65361,ArrowUp:65362,ArrowRight:65363,ArrowDown:65364,Shift:65505,ShiftLeft:65505,ShiftRight:65506,Control:65507,ControlLeft:65507,ControlRight:65508,Alt:65513,AltLeft:65513,AltRight:65514,Meta:65515,MetaLeft:65515,MetaRight:65516,Super:65515,Super_L:65515,Super_R:65516,CapsLock:65509,NumLock:65407,ScrollLock:65300,Pause:65299,PrintScreen:65377,ContextMenu:65383,Menu:65383," ":32};for(let _=1;_<=12;_+=1)c6[`F${_}`]=65470+(_-1);function n6(_){let $=[_?.key,_?.code];for(let Q of $)if(Q&&Object.prototype.hasOwnProperty.call(c6,Q))return c6[Q];let j=String(_?.key||""),Z=j?j.codePointAt(0):null,Y=Z==null?0:Z>65535?2:1;if(Z!=null&&j.length===Y){if(Z<=255)return Z;return(16777216|Z)>>>0}return null}var M1=Uint8Array,N_=Uint16Array,_$=Int32Array,F8=new M1([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),H8=new M1([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),s6=new M1([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),k2=function(_,$){var j=new N_(31);for(var Z=0;Z<31;++Z)j[Z]=$+=1<<_[Z-1];var Y=new _$(j[30]);for(var Z=1;Z<30;++Z)for(var Q=j[Z];Q<j[Z+1];++Q)Y[Q]=Q-j[Z]<<5|Z;return{b:j,r:Y}},I2=k2(F8,2),M2=I2.b,a6=I2.r;M2[28]=258,a6[258]=28;var T2=k2(H8,0),Rq=T2.b,D2=T2.r,t6=new N_(32768);for(n0=0;n0<32768;++n0)v_=(n0&43690)>>1|(n0&21845)<<1,v_=(v_&52428)>>2|(v_&13107)<<2,v_=(v_&61680)>>4|(v_&3855)<<4,t6[n0]=((v_&65280)>>8|(v_&255)<<8)>>1;var v_,n0,b_=function(_,$,j){var Z=_.length,Y=0,Q=new N_($);for(;Y<Z;++Y)if(_[Y])++Q[_[Y]-1];var q=new N_($);for(Y=1;Y<$;++Y)q[Y]=q[Y-1]+Q[Y-1]<<1;var N;if(j){N=new N_(1<<$);var K=15-$;for(Y=0;Y<Z;++Y)if(_[Y]){var G=Y<<4|_[Y],X=$-_[Y],V=q[_[Y]-1]++<<X;for(var U=V|(1<<X)-1;V<=U;++V)N[t6[V]>>K]=G}}else{N=new N_(Z);for(Y=0;Y<Z;++Y)if(_[Y])N[Y]=t6[q[_[Y]-1]++]>>15-_[Y]}return N},F4=new M1(288);for(n0=0;n0<144;++n0)F4[n0]=8;var n0;for(n0=144;n0<256;++n0)F4[n0]=9;var n0;for(n0=256;n0<280;++n0)F4[n0]=7;var n0;for(n0=280;n0<288;++n0)F4[n0]=8;var n0,w5=new M1(32);for(n0=0;n0<32;++n0)w5[n0]=5;var n0,uq=b_(F4,9,0),fq=b_(F4,9,1),vq=b_(w5,5,0),bq=b_(w5,5,1),d6=function(_){var $=_[0];for(var j=1;j<_.length;++j)if(_[j]>$)$=_[j];return $},C_=function(_,$,j){var Z=$/8|0;return(_[Z]|_[Z+1]<<8)>>($&7)&j},i6=function(_,$){var j=$/8|0;return(_[j]|_[j+1]<<8|_[j+2]<<16)>>($&7)},$$=function(_){return(_+7)/8|0},S5=function(_,$,j){if($==null||$<0)$=0;if(j==null||j>_.length)j=_.length;return new M1(_.subarray($,j))};var gq=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],Y_=function(_,$,j){var Z=Error($||gq[_]);if(Z.code=_,Error.captureStackTrace)Error.captureStackTrace(Z,Y_);if(!j)throw Z;return Z},mq=function(_,$,j,Z){var Y=_.length,Q=Z?Z.length:0;if(!Y||$.f&&!$.l)return j||new M1(0);var q=!j,N=q||$.i!=2,K=$.i;if(q)j=new M1(Y*3);var G=function(M0){var Z0=j.length;if(M0>Z0){var A0=new M1(Math.max(Z0*2,M0));A0.set(j),j=A0}},X=$.f||0,V=$.p||0,U=$.b||0,L=$.l,F=$.d,J=$.m,H=$.n,W=Y*8;do{if(!L){X=C_(_,V,1);var D=C_(_,V+1,3);if(V+=3,!D){var E=$$(V)+4,C=_[E-4]|_[E-3]<<8,P=E+C;if(P>Y){if(K)Y_(0);break}if(N)G(U+C);j.set(_.subarray(E,P),U),$.b=U+=C,$.p=V=P*8,$.f=X;continue}else if(D==1)L=fq,F=bq,J=9,H=5;else if(D==2){var v=C_(_,V,31)+257,p=C_(_,V+10,15)+4,M=v+C_(_,V+5,31)+1;V+=14;var k=new M1(M),B=new M1(19);for(var I=0;I<p;++I)B[s6[I]]=C_(_,V+I*3,7);V+=p*3;var w=d6(B),c=(1<<w)-1,b=b_(B,w,1);for(var I=0;I<M;){var n=b[C_(_,V,c)];V+=n&15;var E=n>>4;if(E<16)k[I++]=E;else{var d=0,r=0;if(E==16)r=3+C_(_,V,3),V+=2,d=k[I-1];else if(E==17)r=3+C_(_,V,7),V+=3;else if(E==18)r=11+C_(_,V,127),V+=7;while(r--)k[I++]=d}}var t=k.subarray(0,v),a=k.subarray(v);J=d6(t),H=d6(a),L=b_(t,J,1),F=b_(a,H,1)}else Y_(1);if(V>W){if(K)Y_(0);break}}if(N)G(U+131072);var _0=(1<<J)-1,N0=(1<<H)-1,G0=V;for(;;G0=V){var d=L[i6(_,V)&_0],k0=d>>4;if(V+=d&15,V>W){if(K)Y_(0);break}if(!d)Y_(2);if(k0<256)j[U++]=k0;else if(k0==256){G0=V,L=null;break}else{var J0=k0-254;if(k0>264){var I=k0-257,X0=F8[I];J0=C_(_,V,(1<<X0)-1)+M2[I],V+=X0}var x0=F[i6(_,V)&N0],B0=x0>>4;if(!x0)Y_(3);V+=x0&15;var a=Rq[B0];if(B0>3){var X0=H8[B0];a+=i6(_,V)&(1<<X0)-1,V+=X0}if(V>W){if(K)Y_(0);break}if(N)G(U+131072);var D0=U+J0;if(U<a){var S0=Q-a,z0=Math.min(a,D0);if(S0+U<0)Y_(3);for(;U<z0;++U)j[U]=Z[S0+U]}for(;U<D0;++U)j[U]=j[U-a]}}if($.l=L,$.p=G0,$.b=U,$.f=X,L)X=1,$.m=J,$.d=F,$.n=H}while(!X);return U!=j.length&&q?S5(j,0,U):j.subarray(0,U)},$4=function(_,$,j){j<<=$&7;var Z=$/8|0;_[Z]|=j,_[Z+1]|=j>>8},P5=function(_,$,j){j<<=$&7;var Z=$/8|0;_[Z]|=j,_[Z+1]|=j>>8,_[Z+2]|=j>>16},r6=function(_,$){var j=[];for(var Z=0;Z<_.length;++Z)if(_[Z])j.push({s:Z,f:_[Z]});var Y=j.length,Q=j.slice();if(!Y)return{t:y2,l:0};if(Y==1){var q=new M1(j[0].s+1);return q[j[0].s]=1,{t:q,l:1}}j.sort(function(P,v){return P.f-v.f}),j.push({s:-1,f:25001});var N=j[0],K=j[1],G=0,X=1,V=2;j[0]={s:-1,f:N.f+K.f,l:N,r:K};while(X!=Y-1)N=j[j[G].f<j[V].f?G++:V++],K=j[G!=X&&j[G].f<j[V].f?G++:V++],j[X++]={s:-1,f:N.f+K.f,l:N,r:K};var U=Q[0].s;for(var Z=1;Z<Y;++Z)if(Q[Z].s>U)U=Q[Z].s;var L=new N_(U+1),F=e6(j[X-1],L,0);if(F>$){var Z=0,J=0,H=F-$,W=1<<H;Q.sort(function(v,p){return L[p.s]-L[v.s]||v.f-p.f});for(;Z<Y;++Z){var D=Q[Z].s;if(L[D]>$)J+=W-(1<<F-L[D]),L[D]=$;else break}J>>=H;while(J>0){var E=Q[Z].s;if(L[E]<$)J-=1<<$-L[E]++-1;else++Z}for(;Z>=0&&J;--Z){var C=Q[Z].s;if(L[C]==$)--L[C],++J}F=$}return{t:new M1(L),l:F}},e6=function(_,$,j){return _.s==-1?Math.max(e6(_.l,$,j+1),e6(_.r,$,j+1)):$[_.s]=j},A2=function(_){var $=_.length;while($&&!_[--$]);var j=new N_(++$),Z=0,Y=_[0],Q=1,q=function(K){j[Z++]=K};for(var N=1;N<=$;++N)if(_[N]==Y&&N!=$)++Q;else{if(!Y&&Q>2){for(;Q>138;Q-=138)q(32754);if(Q>2)q(Q>10?Q-11<<5|28690:Q-3<<5|12305),Q=0}else if(Q>3){q(Y),--Q;for(;Q>6;Q-=6)q(8304);if(Q>2)q(Q-3<<5|8208),Q=0}while(Q--)q(Y);Q=1,Y=_[N]}return{c:j.subarray(0,Z),n:$}},C5=function(_,$){var j=0;for(var Z=0;Z<$.length;++Z)j+=_[Z]*$[Z];return j},x2=function(_,$,j){var Z=j.length,Y=$$($+2);_[Y]=Z&255,_[Y+1]=Z>>8,_[Y+2]=_[Y]^255,_[Y+3]=_[Y+1]^255;for(var Q=0;Q<Z;++Q)_[Y+Q+4]=j[Q];return(Y+4+Z)*8},E2=function(_,$,j,Z,Y,Q,q,N,K,G,X){$4($,X++,j),++Y[256];var V=r6(Y,15),U=V.t,L=V.l,F=r6(Q,15),J=F.t,H=F.l,W=A2(U),D=W.c,E=W.n,C=A2(J),P=C.c,v=C.n,p=new N_(19);for(var M=0;M<D.length;++M)++p[D[M]&31];for(var M=0;M<P.length;++M)++p[P[M]&31];var k=r6(p,7),B=k.t,I=k.l,w=19;for(;w>4&&!B[s6[w-1]];--w);var c=G+5<<3,b=C5(Y,F4)+C5(Q,w5)+q,n=C5(Y,U)+C5(Q,J)+q+14+3*w+C5(p,B)+2*p[16]+3*p[17]+7*p[18];if(K>=0&&c<=b&&c<=n)return x2($,X,_.subarray(K,K+G));var d,r,t,a;if($4($,X,1+(n<b)),X+=2,n<b){d=b_(U,L,0),r=U,t=b_(J,H,0),a=J;var _0=b_(B,I,0);$4($,X,E-257),$4($,X+5,v-1),$4($,X+10,w-4),X+=14;for(var M=0;M<w;++M)$4($,X+3*M,B[s6[M]]);X+=3*w;var N0=[D,P];for(var G0=0;G0<2;++G0){var k0=N0[G0];for(var M=0;M<k0.length;++M){var J0=k0[M]&31;if($4($,X,_0[J0]),X+=B[J0],J0>15)$4($,X,k0[M]>>5&127),X+=k0[M]>>12}}}else d=uq,r=F4,t=vq,a=w5;for(var M=0;M<N;++M){var X0=Z[M];if(X0>255){var J0=X0>>18&31;if(P5($,X,d[J0+257]),X+=r[J0+257],J0>7)$4($,X,X0>>23&31),X+=F8[J0];var x0=X0&31;if(P5($,X,t[x0]),X+=a[x0],x0>3)P5($,X,X0>>5&8191),X+=H8[x0]}else P5($,X,d[X0]),X+=r[X0]}return P5($,X,d[256]),X+r[256]},pq=new _$([65540,131080,131088,131104,262176,1048704,1048832,2114560,2117632]),y2=new M1(0),hq=function(_,$,j,Z,Y,Q){var q=Q.z||_.length,N=new M1(Z+q+5*(1+Math.ceil(q/7000))+Y),K=N.subarray(Z,N.length-Y),G=Q.l,X=(Q.r||0)&7;if($){if(X)K[0]=Q.r>>3;var V=pq[$-1],U=V>>13,L=V&8191,F=(1<<j)-1,J=Q.p||new N_(32768),H=Q.h||new N_(F+1),W=Math.ceil(j/3),D=2*W,E=function(v0){return(_[v0]^_[v0+1]<<W^_[v0+2]<<D)&F},C=new _$(25000),P=new N_(288),v=new N_(32),p=0,M=0,k=Q.i||0,B=0,I=Q.w||0,w=0;for(;k+2<q;++k){var c=E(k),b=k&32767,n=H[c];if(J[b]=n,H[c]=b,I<=k){var d=q-k;if((p>7000||B>24576)&&(d>423||!G)){X=E2(_,K,0,C,P,v,M,B,w,k-w,X),B=p=M=0,w=k;for(var r=0;r<286;++r)P[r]=0;for(var r=0;r<30;++r)v[r]=0}var t=2,a=0,_0=L,N0=b-n&32767;if(d>2&&c==E(k-N0)){var G0=Math.min(U,d)-1,k0=Math.min(32767,k),J0=Math.min(258,d);while(N0<=k0&&--_0&&b!=n){if(_[k+t]==_[k+t-N0]){var X0=0;for(;X0<J0&&_[k+X0]==_[k+X0-N0];++X0);if(X0>t){if(t=X0,a=N0,X0>G0)break;var x0=Math.min(N0,X0-2),B0=0;for(var r=0;r<x0;++r){var D0=k-N0+r&32767,S0=J[D0],z0=D0-S0&32767;if(z0>B0)B0=z0,n=D0}}}b=n,n=J[b],N0+=b-n&32767}}if(a){C[B++]=268435456|a6[t]<<18|D2[a];var M0=a6[t]&31,Z0=D2[a]&31;M+=F8[M0]+H8[Z0],++P[257+M0],++v[Z0],I=k+t,++p}else C[B++]=_[k],++P[_[k]]}}for(k=Math.max(k,I);k<q;++k)C[B++]=_[k],++P[_[k]];if(X=E2(_,K,G,C,P,v,M,B,w,k-w,X),!G)Q.r=X&7|K[X/8|0]<<3,X-=7,Q.h=H,Q.p=J,Q.i=k,Q.w=I}else{for(var k=Q.w||0;k<q+G;k+=65535){var A0=k+65535;if(A0>=q)K[X/8|0]=G,A0=q;X=x2(K,X+1,_.subarray(k,A0))}Q.i=q}return S5(N,0,Z+$$(X)+Y)};var P2=function(){var _=1,$=0;return{p:function(j){var Z=_,Y=$,Q=j.length|0;for(var q=0;q!=Q;){var N=Math.min(q+2655,Q);for(;q<N;++q)Y+=Z+=j[q];Z=(Z&65535)+15*(Z>>16),Y=(Y&65535)+15*(Y>>16)}_=Z,$=Y},d:function(){return _%=65521,$%=65521,(_&255)<<24|(_&65280)<<8|($&255)<<8|$>>8}}},cq=function(_,$,j,Z,Y){if(!Y){if(Y={l:1},$.dictionary){var Q=$.dictionary.subarray(-32768),q=new M1(Q.length+_.length);q.set(Q),q.set(_,Q.length),_=q,Y.w=Q.length}}return hq(_,$.level==null?6:$.level,$.mem==null?Y.l?Math.ceil(Math.max(8,Math.min(13,Math.log(_.length)))*1.5):20:12+$.mem,j,Z,Y)};var C2=function(_,$,j){for(;j;++$)_[$]=j,j>>>=8};var lq=function(_,$){var j=$.level,Z=j==0?0:j<6?1:j==9?3:2;if(_[0]=120,_[1]=Z<<6|($.dictionary&&32),_[1]|=31-(_[0]<<8|_[1])%31,$.dictionary){var Y=P2();Y.p($.dictionary),C2(_,2,Y.d())}},nq=function(_,$){if((_[0]&15)!=8||_[0]>>4>7||(_[0]<<8|_[1])%31)Y_(6,"invalid zlib data");if((_[1]>>5&1)==+!$)Y_(6,"invalid zlib data: "+(_[1]&32?"need":"unexpected")+" dictionary");return(_[1]>>3&4)+2};var o6=function(){function _($,j){if(typeof $=="function")j=$,$={};this.ondata=j;var Z=$&&$.dictionary&&$.dictionary.subarray(-32768);if(this.s={i:0,b:Z?Z.length:0},this.o=new M1(32768),this.p=new M1(0),Z)this.o.set(Z)}return _.prototype.e=function($){if(!this.ondata)Y_(5);if(this.d)Y_(4);if(!this.p.length)this.p=$;else if($.length){var j=new M1(this.p.length+$.length);j.set(this.p),j.set($,this.p.length),this.p=j}},_.prototype.c=function($){this.s.i=+(this.d=$||!1);var j=this.s.b,Z=mq(this.p,this.s,this.o);this.ondata(S5(Z,j,this.s.b),this.d),this.o=S5(Z,this.s.b-32768),this.s.b=this.o.length,this.p=S5(this.p,this.s.p/8|0),this.s.p&=7},_.prototype.push=function($,j){this.e($),this.c(j)},_}();function S2(_,$){if(!$)$={};var j=P2();j.p(_);var Z=cq(_,$,$.dictionary?6:2,4);return lq(Z,$),C2(Z,Z.length-4,j.d()),Z}var w2=function(){function _($,j){o6.call(this,$,j),this.v=$&&$.dictionary?2:1}return _.prototype.push=function($,j){if(o6.prototype.e.call(this,$),this.v){if(this.p.length<6&&!j)return;this.p=this.p.subarray(nq(this.p,this.v-1)),this.v=0}if(j){if(this.p.length<4)Y_(6,"invalid zlib data");this.p=this.p.subarray(0,-4)}o6.prototype.c.call(this,j)},_}();var dq=typeof TextDecoder<"u"&&new TextDecoder,iq=0;try{dq.decode(y2,{stream:!0}),iq=1}catch(_){}var rq=[58,50,42,34,26,18,10,2,60,52,44,36,28,20,12,4,62,54,46,38,30,22,14,6,64,56,48,40,32,24,16,8,57,49,41,33,25,17,9,1,59,51,43,35,27,19,11,3,61,53,45,37,29,21,13,5,63,55,47,39,31,23,15,7],oq=[40,8,48,16,56,24,64,32,39,7,47,15,55,23,63,31,38,6,46,14,54,22,62,30,37,5,45,13,53,21,61,29,36,4,44,12,52,20,60,28,35,3,43,11,51,19,59,27,34,2,42,10,50,18,58,26,33,1,41,9,49,17,57,25],sq=[32,1,2,3,4,5,4,5,6,7,8,9,8,9,10,11,12,13,12,13,14,15,16,17,16,17,18,19,20,21,20,21,22,23,24,25,24,25,26,27,28,29,28,29,30,31,32,1],aq=[16,7,20,21,29,12,28,17,1,15,23,26,5,18,31,10,2,8,24,14,32,27,3,9,19,13,30,6,22,11,4,25],tq=[57,49,41,33,25,17,9,1,58,50,42,34,26,18,10,2,59,51,43,35,27,19,11,3,60,52,44,36,63,55,47,39,31,23,15,7,62,54,46,38,30,22,14,6,61,53,45,37,29,21,13,5,28,20,12,4],eq=[14,17,11,24,1,5,3,28,15,6,21,10,23,19,12,4,26,8,16,7,27,20,13,2,41,52,31,37,47,55,30,40,51,45,33,48,44,49,39,56,34,53,46,42,50,36,29,32],_N=[1,1,2,2,2,2,2,2,1,2,2,2,2,2,2,1],$N=[[[14,4,13,1,2,15,11,8,3,10,6,12,5,9,0,7],[0,15,7,4,14,2,13,1,10,6,12,11,9,5,3,8],[4,1,14,8,13,6,2,11,15,12,9,7,3,10,5,0],[15,12,8,2,4,9,1,7,5,11,3,14,10,0,6,13]],[[15,1,8,14,6,11,3,4,9,7,2,13,12,0,5,10],[3,13,4,7,15,2,8,14,12,0,1,10,6,9,11,5],[0,14,7,11,10,4,13,1,5,8,12,6,9,3,2,15],[13,8,10,1,3,15,4,2,11,6,7,12,0,5,14,9]],[[10,0,9,14,6,3,15,5,1,13,12,7,11,4,2,8],[13,7,0,9,3,4,6,10,2,8,5,14,12,11,15,1],[13,6,4,9,8,15,3,0,11,1,2,12,5,10,14,7],[1,10,13,0,6,9,8,7,4,15,14,3,11,5,2,12]],[[7,13,14,3,0,6,9,10,1,2,8,5,11,12,4,15],[13,8,11,5,6,15,0,3,4,7,2,12,1,10,14,9],[10,6,9,0,12,11,7,13,15,1,3,14,5,2,8,4],[3,15,0,6,10,1,13,8,9,4,5,11,12,7,2,14]],[[2,12,4,1,7,10,11,6,8,5,3,15,13,0,14,9],[14,11,2,12,4,7,13,1,5,0,15,10,3,9,8,6],[4,2,1,11,10,13,7,8,15,9,12,5,6,3,0,14],[11,8,12,7,1,14,2,13,6,15,0,9,10,4,5,3]],[[12,1,10,15,9,2,6,8,0,13,3,4,14,7,5,11],[10,15,4,2,7,12,9,5,6,1,13,14,0,11,3,8],[9,14,15,5,2,8,12,3,7,0,4,10,1,13,11,6],[4,3,2,12,9,5,15,10,11,14,1,7,6,0,8,13]],[[4,11,2,14,15,0,8,13,3,12,9,7,5,10,6,1],[13,0,11,7,4,9,1,10,14,3,5,12,2,15,8,6],[1,4,11,13,12,3,7,14,10,15,6,8,0,5,9,2],[6,11,13,8,1,4,10,7,9,5,0,15,14,2,3,12]],[[13,2,8,4,6,15,11,1,10,9,3,14,5,0,12,7],[1,15,13,8,10,3,7,4,12,5,6,11,0,14,9,2],[7,11,4,1,9,12,14,2,0,6,10,13,15,3,5,8],[2,1,14,7,4,10,8,13,15,12,9,0,3,5,6,11]]],f2=new Uint8Array(256);for(let _=0;_<256;_+=1){let $=0;for(let j=0;j<8;j+=1)$=$<<1|_>>j&1;f2[_]=$}function v2(_){if(_ instanceof Uint8Array)return _;if(_ instanceof ArrayBuffer)return new Uint8Array(_);if(ArrayBuffer.isView(_))return new Uint8Array(_.buffer,_.byteOffset,_.byteLength);return new Uint8Array(0)}function b2(_){let $=0n,j=v2(_);for(let Z of j)$=$<<8n|BigInt(Z);return $}function jN(_,$){let j=new Uint8Array($),Z=BigInt(_);for(let Y=$-1;Y>=0;Y-=1)j[Y]=Number(Z&0xffn),Z>>=8n;return j}function Z5(_,$,j){let Z=0n;for(let Y of $){let Q=BigInt(_)>>BigInt(j-Y)&1n;Z=Z<<1n|Q}return Z}function R2(_,$){let j=28n,Z=(1n<<j)-1n,Y=BigInt($%28);return(_<<Y|_>>j-Y)&Z}function ZN(_){let $=Z5(b2(_),tq,64),j=$>>28n&0x0fffffffn,Z=$&0x0fffffffn,Y=[];for(let Q of _N){j=R2(j,Q),Z=R2(Z,Q);let q=j<<28n|Z;Y.push(Z5(q,eq,56))}return Y}function YN(_){let $=0n;for(let j=0;j<8;j+=1){let Z=BigInt((7-j)*6),Y=Number(_>>Z&0x3fn),Q=(Y&32)>>4|Y&1,q=Y>>1&15;$=$<<4n|BigInt($N[j][Q][q])}return $}function QN(_,$){let j=Z5(_,sq,32)^BigInt($),Z=YN(j);return Z5(Z,aq,32)}function u2(_,$){let j=ZN($),Z=Z5(b2(_),rq,64),Y=Z>>32n&0xffffffffn,Q=Z&0xffffffffn;for(let N of j){let K=Q,G=(Y^QN(Q,N))&0xffffffffn;Y=K,Q=G}let q=Q<<32n|Y;return jN(Z5(q,oq,64),8)}function qN(_){let $=String(_??""),j=new Uint8Array(8);for(let Z=0;Z<8;Z+=1){let Y=Z<$.length?$.charCodeAt(Z)&255:0;j[Z]=f2[Y]}return j}function g2(_,$){let j=v2($);if(j.byteLength!==16)throw Error(`Invalid VNC auth challenge length ${j.byteLength}; expected 16 bytes.`);let Z=qN(_),Y=new Uint8Array(16);return Y.set(u2(j.slice(0,8),Z),0),Y.set(u2(j.slice(8,16),Z),8),Y}var S_="vnc";function NN(_){return Number(_)}function KN(_){let $=Array.isArray(_)?_:typeof _==="string"?_.split(",").map((Y)=>Y.trim()).filter((Y)=>Y.length>0):[],j=[],Z=new Set;for(let Y of $){let Q=NN(Y);if(!Number.isFinite(Q))continue;let q=Number(Q);if(!Z.has(q))j.push(q),Z.add(q)}if(j.length>0)return j;return[5,2,1,0,-223]}function q5(_){if(_ instanceof Uint8Array)return _;if(_ instanceof ArrayBuffer)return new Uint8Array(_);if(ArrayBuffer.isView(_))return new Uint8Array(_.buffer,_.byteOffset,_.byteLength);return new Uint8Array(0)}function GN(_,$){let j=q5(_),Z=q5($);if(!j.byteLength)return new Uint8Array(Z);if(!Z.byteLength)return new Uint8Array(j);let Y=new Uint8Array(j.byteLength+Z.byteLength);return Y.set(j,0),Y.set(Z,j.byteLength),Y}function XN(_){let $=0;for(let Y of _||[])$+=Y?.byteLength||0;let j=new Uint8Array($),Z=0;for(let Y of _||[]){let Q=q5(Y);j.set(Q,Z),Z+=Q.byteLength}return j}function VN(){return(_)=>{let $=q5(_);try{let j=[],Z=new w2((Y)=>{j.push(new Uint8Array(Y))});if(Z.push($,!0),Z.err)throw Error(Z.msg||"zlib decompression error");return XN(j)}catch(j){try{let Z=S2($);return Z instanceof Uint8Array?Z:new Uint8Array(Z)}catch(Z){let Y=Z instanceof Error?Z.message:"unexpected EOF";throw Error(`unexpected EOF: ${Y}`)}}}}function UN(_){return new TextEncoder().encode(String(_||""))}function Y5(_){return new TextDecoder().decode(q5(_))}function LN(_){let $=/^RFB (\d{3})\.(\d{3})\n$/.exec(String(_||""));if(!$)return null;return{major:parseInt($[1],10),minor:parseInt($[2],10),text:$[0]}}function WN(_){if(!_)return`RFB 003.008
`;if(_.major>3||_.minor>=8)return`RFB 003.008
`;if(_.minor>=7)return`RFB 003.007
`;return`RFB 003.003
`}function m2(_,$=0){return{bitsPerPixel:_.getUint8($),depth:_.getUint8($+1),bigEndian:_.getUint8($+2)===1,trueColor:_.getUint8($+3)===1,redMax:_.getUint16($+4,!1),greenMax:_.getUint16($+6,!1),blueMax:_.getUint16($+8,!1),redShift:_.getUint8($+10),greenShift:_.getUint8($+11),blueShift:_.getUint8($+12)}}function BN(_){let $=new ArrayBuffer(20),j=new DataView($);return j.setUint8(0,0),j.setUint8(1,0),j.setUint8(2,0),j.setUint8(3,0),j.setUint8(4,_.bitsPerPixel),j.setUint8(5,_.depth),j.setUint8(6,_.bigEndian?1:0),j.setUint8(7,_.trueColor?1:0),j.setUint16(8,_.redMax,!1),j.setUint16(10,_.greenMax,!1),j.setUint16(12,_.blueMax,!1),j.setUint8(14,_.redShift),j.setUint8(15,_.greenShift),j.setUint8(16,_.blueShift),new Uint8Array($)}function zN(_){let $=Array.isArray(_)?_:[],j=new ArrayBuffer(4+$.length*4),Z=new DataView(j);Z.setUint8(0,2),Z.setUint8(1,0),Z.setUint16(2,$.length,!1);let Y=4;for(let Q of $)Z.setInt32(Y,Number(Q||0),!1),Y+=4;return new Uint8Array(j)}function p2(_,$,j,Z=0,Y=0){let Q=new ArrayBuffer(10),q=new DataView(Q);return q.setUint8(0,3),q.setUint8(1,_?1:0),q.setUint16(2,Z,!1),q.setUint16(4,Y,!1),q.setUint16(6,Math.max(0,$||0),!1),q.setUint16(8,Math.max(0,j||0),!1),new Uint8Array(Q)}function Q5(_,$){let j=Number($||0);if(j<=0)return 0;if(j===255)return _&255;return Math.max(0,Math.min(255,Math.round((_||0)*255/j)))}function c2(_,$,j,Z){if(j===1)return _[$];if(j===2)return Z?(_[$]<<8|_[$+1])>>>0:(_[$]|_[$+1]<<8)>>>0;if(j===3)return Z?(_[$]<<16|_[$+1]<<8|_[$+2])>>>0:(_[$]|_[$+1]<<8|_[$+2]<<16)>>>0;if(j===4)return Z?(_[$]<<24>>>0|_[$+1]<<16|_[$+2]<<8|_[$+3])>>>0:(_[$]|_[$+1]<<8|_[$+2]<<16|_[$+3]<<24>>>0)>>>0;return 0}function FN(_,$,j,Z){let Y=Z||N5,Q=q5(_),q=Math.max(1,Math.floor(Number(Y.bitsPerPixel||0)/8)),N=Math.max(0,$||0)*Math.max(0,j||0)*q;if(Q.byteLength<N)throw Error(`Incomplete raw rectangle payload: expected ${N} byte(s), got ${Q.byteLength}`);if(!Y.trueColor)throw Error("Indexed-colour VNC framebuffers are not supported yet.");let K=new Uint8ClampedArray(Math.max(0,$||0)*Math.max(0,j||0)*4),G=0,X=0;for(let V=0;V<Math.max(0,$||0)*Math.max(0,j||0);V+=1){let U=c2(Q,G,q,Y.bigEndian),L=Q5(U>>>Y.redShift&Y.redMax,Y.redMax),F=Q5(U>>>Y.greenShift&Y.greenMax,Y.greenMax),J=Q5(U>>>Y.blueShift&Y.blueMax,Y.blueMax);K[X]=L,K[X+1]=F,K[X+2]=J,K[X+3]=255,G+=q,X+=4}return K}function j4(_,$,j){let Z=j||N5,Y=Math.max(1,Math.floor(Number(Z.bitsPerPixel||0)/8));if(_.byteLength<$+Y)return null;let Q=c2(_,$,Y,Z.bigEndian);return{rgba:[Q5(Q>>>Z.redShift&Z.redMax,Z.redMax),Q5(Q>>>Z.greenShift&Z.greenMax,Z.greenMax),Q5(Q>>>Z.blueShift&Z.blueMax,Z.blueMax),255],bytesPerPixel:Y}}function H4(_,$,j,Z,Y,Q,q){if(!q)return;for(let N=0;N<Q;N+=1)for(let K=0;K<Y;K+=1){let G=((Z+N)*$+(j+K))*4;_[G]=q[0],_[G+1]=q[1],_[G+2]=q[2],_[G+3]=q[3]}}function l2(_,$,j,Z,Y,Q,q){for(let N=0;N<Q;N+=1){let K=N*Y*4,G=((Z+N)*$+j)*4;_.set(q.subarray(K,K+Y*4),G)}}function h2(_,$){let j=$,Z=1;while(!0){if(_.byteLength<j+1)return null;let Y=_[j++];if(Z+=Y,Y!==255)break}return{consumed:j-$,runLength:Z}}function HN(_,$,j,Z,Y,Q,q){let N=Y||N5,K=Math.max(1,Math.floor(Number(N.bitsPerPixel||0)/8));if(_.byteLength<$+4)return null;let G=new DataView(_.buffer,_.byteOffset+$,4).getUint32(0,!1);if(_.byteLength<$+4+G)return null;let X=_.slice($+4,$+4+G),V;try{V=q(X)}catch{return{consumed:4+G,skipped:!0}}let U=0,L=new Uint8ClampedArray(Math.max(0,j||0)*Math.max(0,Z||0)*4);for(let F=0;F<Z;F+=64){let J=Math.min(64,Z-F);for(let H=0;H<j;H+=64){let W=Math.min(64,j-H);if(V.byteLength<U+1)return null;let D=V[U++],E=D&127,C=(D&128)!==0;if(!C&&E===0){let P=W*J*K;if(V.byteLength<U+P)return null;let v=Q(V.slice(U,U+P),W,J,N);U+=P,l2(L,j,H,F,W,J,v);continue}if(!C&&E===1){let P=j4(V,U,N);if(!P)return null;U+=P.bytesPerPixel,H4(L,j,H,F,W,J,P.rgba);continue}if(!C&&E>1&&E<=16){let P=[];for(let k=0;k<E;k+=1){let B=j4(V,U,N);if(!B)return null;U+=B.bytesPerPixel,P.push(B.rgba)}let v=E<=2?1:E<=4?2:4,p=Math.ceil(W*v/8),M=p*J;if(V.byteLength<U+M)return null;for(let k=0;k<J;k+=1){let B=U+k*p;for(let I=0;I<W;I+=1){let w=I*v,c=B+(w>>3),b=8-v-(w&7),n=V[c]>>b&(1<<v)-1;H4(L,j,H+I,F+k,1,1,P[n])}}U+=M;continue}if(C&&E===0){let P=0,v=0;while(v<J){let p=j4(V,U,N);if(!p)return null;U+=p.bytesPerPixel;let M=h2(V,U);if(!M)return null;U+=M.consumed;for(let k=0;k<M.runLength;k+=1)if(H4(L,j,H+P,F+v,1,1,p.rgba),P+=1,P>=W){if(P=0,v+=1,v>=J)break}}continue}if(C&&E>0){let P=[];for(let M=0;M<E;M+=1){let k=j4(V,U,N);if(!k)return null;U+=k.bytesPerPixel,P.push(k.rgba)}let v=0,p=0;while(p<J){if(V.byteLength<U+1)return null;let M=V[U++],k=M,B=1;if(M&128){k=M&127;let w=h2(V,U);if(!w)return null;U+=w.consumed,B=w.runLength}let I=P[k];if(!I)return null;for(let w=0;w<B;w+=1)if(H4(L,j,H+v,F+p,1,1,I),v+=1,v>=W){if(v=0,p+=1,p>=J)break}}continue}return{consumed:4+G,skipped:!0}}}return{consumed:4+G,rgba:L,decompressed:V}}function JN(_,$,j,Z,Y){let Q=Y||N5,q=Math.max(1,Math.floor(Number(Q.bitsPerPixel||0)/8));if(_.byteLength<$+4+q)return null;let K=new DataView(_.buffer,_.byteOffset+$,_.byteLength-$).getUint32(0,!1),G=4+q+K*(q+8);if(_.byteLength<$+G)return null;let X=$+4,V=j4(_,X,Q);if(!V)return null;X+=V.bytesPerPixel;let U=new Uint8ClampedArray(Math.max(0,j||0)*Math.max(0,Z||0)*4);H4(U,j,0,0,j,Z,V.rgba);for(let L=0;L<K;L+=1){let F=j4(_,X,Q);if(!F)return null;if(X+=F.bytesPerPixel,_.byteLength<X+8)return null;let J=new DataView(_.buffer,_.byteOffset+X,8),H=J.getUint16(0,!1),W=J.getUint16(2,!1),D=J.getUint16(4,!1),E=J.getUint16(6,!1);X+=8,H4(U,j,H,W,D,E,F.rgba)}return{consumed:X-$,rgba:U}}function ON(_,$,j,Z,Y,Q){let q=Y||N5,N=Math.max(1,Math.floor(Number(q.bitsPerPixel||0)/8)),K=new Uint8ClampedArray(Math.max(0,j||0)*Math.max(0,Z||0)*4),G=$,X=[0,0,0,255],V=[255,255,255,255];for(let U=0;U<Z;U+=16){let L=Math.min(16,Z-U);for(let F=0;F<j;F+=16){let J=Math.min(16,j-F);if(_.byteLength<G+1)return null;let H=_[G++];if(H&1){let W=J*L*N;if(_.byteLength<G+W)return null;let D=Q(_.slice(G,G+W),J,L,q);G+=W,l2(K,j,F,U,J,L,D);continue}if(H&2){let W=j4(_,G,q);if(!W)return null;X=W.rgba,G+=W.bytesPerPixel}if(H4(K,j,F,U,J,L,X),H&4){let W=j4(_,G,q);if(!W)return null;V=W.rgba,G+=W.bytesPerPixel}if(H&8){if(_.byteLength<G+1)return null;let W=_[G++];for(let D=0;D<W;D+=1){let E=V;if(H&16){let B=j4(_,G,q);if(!B)return null;E=B.rgba,G+=B.bytesPerPixel}if(_.byteLength<G+2)return null;let C=_[G++],P=_[G++],v=C>>4,p=C&15,M=(P>>4)+1,k=(P&15)+1;H4(K,j,F+v,U+p,M,k,E)}}}}return{consumed:G-$,rgba:K}}var N5={bitsPerPixel:32,depth:24,bigEndian:!1,trueColor:!0,redMax:255,greenMax:255,blueMax:255,redShift:16,greenShift:8,blueShift:0};class J8{protocol=S_;constructor(_={}){this.shared=_.shared!==!1,this.decodeRawRect=typeof _.decodeRawRect==="function"?_.decodeRawRect:FN,this.pipeline=_.pipeline||null,this.encodings=KN(_.encodings||null),this.state="version",this.buffer=new Uint8Array(0),this.serverVersion=null,this.clientVersionText=null,this.framebufferWidth=0,this.framebufferHeight=0,this.serverName="",this.serverPixelFormat=null,this.clientPixelFormat={...N5},this.password=typeof _.password==="string"&&_.password.length>0?_.password:null,this.inflateZrle=typeof _.inflateZrle==="function"?_.inflateZrle:VN()}receive(_){if(_)this.buffer=GN(this.buffer,_);let $=[],j=[],Z=!0;while(Z){if(Z=!1,this.state==="version"){if(this.buffer.byteLength<12)break;let Y=this.consume(12),Q=Y5(Y),q=LN(Q);if(!q)throw Error(`Unsupported RFB version banner: ${Q||"<empty>"}`);this.serverVersion=q,this.clientVersionText=WN(q),j.push(UN(this.clientVersionText)),$.push({type:"protocol-version",protocol:S_,server:q.text.trim(),client:this.clientVersionText.trim()}),this.state=q.minor>=7?"security-types":"security-type-33",Z=!0;continue}if(this.state==="security-types"){if(this.buffer.byteLength<1)break;let Y=this.buffer[0];if(Y===0){if(this.buffer.byteLength<5)break;let K=new DataView(this.buffer.buffer,this.buffer.byteOffset,this.buffer.byteLength).getUint32(1,!1);if(this.buffer.byteLength<5+K)break;this.consume(1);let G=Y5(this.consume(4+K).slice(4));throw Error(G||"VNC server rejected the connection.")}if(this.buffer.byteLength<1+Y)break;this.consume(1);let Q=Array.from(this.consume(Y));$.push({type:"security-types",protocol:S_,types:Q});let q=null;if(Q.includes(2)&&this.password!==null)q=2;else if(Q.includes(1))q=1;else if(Q.includes(2))throw Error("VNC password authentication is required. Enter a password and reconnect.");else throw Error(`Unsupported VNC security types: ${Q.join(", ")||"none"}. This viewer currently supports only "None" and password-based VNC auth.`);j.push(Uint8Array.of(q)),$.push({type:"security-selected",protocol:S_,securityType:q,label:q===2?"VNC Authentication":"None"}),this.state=q===2?"security-challenge":"security-result",Z=!0;continue}if(this.state==="security-type-33"){if(this.buffer.byteLength<4)break;let Q=new DataView(this.buffer.buffer,this.buffer.byteOffset,this.buffer.byteLength).getUint32(0,!1);if(this.consume(4),Q===0){if(this.buffer.byteLength<4)break;let N=new DataView(this.buffer.buffer,this.buffer.byteOffset,this.buffer.byteLength).getUint32(0,!1);if(this.buffer.byteLength<4+N)break;let K=Y5(this.consume(4+N).slice(4));throw Error(K||"VNC server rejected the connection.")}if(Q===2){if(this.password===null)throw Error("VNC password authentication is required. Enter a password and reconnect.");$.push({type:"security-selected",protocol:S_,securityType:2,label:"VNC Authentication"}),this.state="security-challenge",Z=!0;continue}if(Q!==1)throw Error(`Unsupported VNC security type ${Q}. This viewer currently supports only "None" and password-based VNC auth.`);$.push({type:"security-selected",protocol:S_,securityType:1,label:"None"}),j.push(Uint8Array.of(this.shared?1:0)),this.state="server-init",Z=!0;continue}if(this.state==="security-challenge"){if(this.buffer.byteLength<16)break;if(this.password===null)throw Error("VNC password authentication is required. Enter a password and reconnect.");let Y=this.consume(16);j.push(g2(this.password,Y)),this.state="security-result",Z=!0;continue}if(this.state==="security-result"){if(this.buffer.byteLength<4)break;let Q=new DataView(this.buffer.buffer,this.buffer.byteOffset,this.buffer.byteLength).getUint32(0,!1);if(this.consume(4),Q!==0){if(this.buffer.byteLength>=4){let q=new DataView(this.buffer.buffer,this.buffer.byteOffset,this.buffer.byteLength).getUint32(0,!1);if(this.buffer.byteLength>=4+q){let N=Y5(this.consume(4+q).slice(4));throw Error(N||"VNC authentication failed.")}}throw Error("VNC authentication failed.")}$.push({type:"security-result",protocol:S_,ok:!0}),j.push(Uint8Array.of(this.shared?1:0)),this.state="server-init",Z=!0;continue}if(this.state==="server-init"){if(this.buffer.byteLength<24)break;let Y=new DataView(this.buffer.buffer,this.buffer.byteOffset,this.buffer.byteLength),Q=Y.getUint16(0,!1),q=Y.getUint16(2,!1),N=m2(Y,4),K=Y.getUint32(20,!1);if(this.buffer.byteLength<24+K)break;let G=this.consume(24),X=new DataView(G.buffer,G.byteOffset,G.byteLength);if(this.framebufferWidth=X.getUint16(0,!1),this.framebufferHeight=X.getUint16(2,!1),this.serverPixelFormat=m2(X,4),this.serverName=Y5(this.consume(K)),this.state="connected",this.pipeline)this.pipeline.initFramebuffer(this.framebufferWidth,this.framebufferHeight);j.push(BN(this.clientPixelFormat)),j.push(zN(this.encodings)),j.push(p2(!1,this.framebufferWidth,this.framebufferHeight)),$.push({type:"display-init",protocol:S_,width:Q,height:q,name:this.serverName,pixelFormat:N}),Z=!0;continue}if(this.state==="connected"){if(this.buffer.byteLength<1)break;let Y=this.buffer[0];if(Y===0){if(this.buffer.byteLength<4)break;let q=new DataView(this.buffer.buffer,this.buffer.byteOffset,this.buffer.byteLength).getUint16(2,!1),N=4,K=[],G=!1,X=!!this.pipeline;for(let U=0;U<q;U+=1){if(this.buffer.byteLength<N+12){G=!0;break}let L=new DataView(this.buffer.buffer,this.buffer.byteOffset+N,12),F=L.getUint16(0,!1),J=L.getUint16(2,!1),H=L.getUint16(4,!1),W=L.getUint16(6,!1),D=L.getInt32(8,!1);if(N+=12,D===0){let E=Math.max(1,Math.floor(Number(this.clientPixelFormat.bitsPerPixel||0)/8)),C=H*W*E;if(this.buffer.byteLength<N+C){G=!0;break}let P=this.buffer.slice(N,N+C);if(N+=C,X)this.pipeline.processRawRect(P,F,J,H,W,this.clientPixelFormat),K.push({kind:"pipeline",x:F,y:J,width:H,height:W});else K.push({kind:"rgba",x:F,y:J,width:H,height:W,rgba:this.decodeRawRect(P,H,W,this.clientPixelFormat)});continue}if(D===2){let E=JN(this.buffer,N,H,W,this.clientPixelFormat);if(!E){G=!0;break}if(X){let C=this.buffer.slice(N,N+E.consumed);this.pipeline.processRreRect(C,F,J,H,W,this.clientPixelFormat),K.push({kind:"pipeline",x:F,y:J,width:H,height:W})}else K.push({kind:"rgba",x:F,y:J,width:H,height:W,rgba:E.rgba});N+=E.consumed;continue}if(D===1){if(this.buffer.byteLength<N+4){G=!0;break}let E=new DataView(this.buffer.buffer,this.buffer.byteOffset+N,4),C=E.getUint16(0,!1),P=E.getUint16(2,!1);if(N+=4,X)this.pipeline.processCopyRect(F,J,H,W,C,P),K.push({kind:"pipeline",x:F,y:J,width:H,height:W});else K.push({kind:"copy",x:F,y:J,width:H,height:W,srcX:C,srcY:P});continue}if(D===16){let E=HN(this.buffer,N,H,W,this.clientPixelFormat,this.decodeRawRect,this.inflateZrle);if(!E){G=!0;break}if(N+=E.consumed,E.skipped)continue;if(X&&E.decompressed)this.pipeline.processZrleTileData(E.decompressed,F,J,H,W,this.clientPixelFormat),K.push({kind:"pipeline",x:F,y:J,width:H,height:W});else K.push({kind:"rgba",x:F,y:J,width:H,height:W,rgba:E.rgba});continue}if(D===5){let E=ON(this.buffer,N,H,W,this.clientPixelFormat,this.decodeRawRect);if(!E){G=!0;break}if(X){let C=this.buffer.slice(N,N+E.consumed);this.pipeline.processHextileRect(C,F,J,H,W,this.clientPixelFormat),K.push({kind:"pipeline",x:F,y:J,width:H,height:W})}else K.push({kind:"rgba",x:F,y:J,width:H,height:W,rgba:E.rgba});N+=E.consumed;continue}if(D===-223){if(this.framebufferWidth=H,this.framebufferHeight=W,X)this.pipeline.initFramebuffer(H,W);K.push({kind:"resize",x:F,y:J,width:H,height:W});continue}throw Error(`Unsupported VNC rectangle encoding ${D}. This viewer currently supports ZRLE, Hextile, RRE, CopyRect, raw rectangles, and DesktopSize only.`)}if(G)break;this.consume(N);let V={type:"framebuffer-update",protocol:S_,width:this.framebufferWidth,height:this.framebufferHeight,rects:K};if(X)V.framebuffer=this.pipeline.getFramebuffer();$.push(V),j.push(p2(!0,this.framebufferWidth,this.framebufferHeight)),Z=!0;continue}if(Y===2){this.consume(1),$.push({type:"bell",protocol:S_}),Z=!0;continue}if(Y===3){if(this.buffer.byteLength<8)break;let q=new DataView(this.buffer.buffer,this.buffer.byteOffset,this.buffer.byteLength).getUint32(4,!1);if(this.buffer.byteLength<8+q)break;this.consume(8);let N=Y5(this.consume(q));$.push({type:"clipboard",protocol:S_,text:N}),Z=!0;continue}throw Error(`Unsupported VNC server message type ${Y}.`)}}return{events:$,outgoing:j}}consume(_){let $=this.buffer.slice(0,_);return this.buffer=this.buffer.slice(_),$}}var Z4="piclaw://vnc";function DN(_){let $=String(_||"");if($===Z4)return null;if(!$.startsWith(`${Z4}/`))return null;let j=$.slice(`${Z4}/`.length).trim();if(!j)return null;try{return decodeURIComponent(j)}catch{return j}}function f4(_){return String(_||"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}async function AN(_=null){let $=_?`/vnc/session?target=${encodeURIComponent(_)}`:"/vnc/session",j=await fetch($,{credentials:"same-origin"}),Z=await j.json().catch(()=>({}));if(!j.ok)throw Error(Z?.error||`HTTP ${j.status}`);return Z}async function EN(_){let $=`/vnc/handoff?target=${encodeURIComponent(String(_||"").trim())}`,j=await fetch($,{method:"POST",credentials:"same-origin"}),Z=await j.json().catch(()=>({}));if(!j.ok)throw Error(Z?.error||`HTTP ${j.status}`);return Z?.handoff||null}function kN(_,$=null){let j=window.location.protocol==="https:"?"wss:":"ws:",Z=new URL(`${j}//${window.location.host}/vnc/ws`);if(Z.searchParams.set("target",String(_||"")),$)Z.searchParams.set("handoff",String($));return Z.toString()}function IN(_,$){let j=String(_||"").trim(),Z=Math.floor(Number($||0));if(!j||!Number.isFinite(Z)||Z<=0||Z>65535)return null;return`${j.includes(":")&&!j.startsWith("[")?`[${j}]`:j}:${Z}`}function MN(_){if(typeof window>"u")return null;try{let $=new URL(window.location.href),j=$.searchParams.get(_)?.trim()||"";if(!j)return null;return $.searchParams.delete(_),window.history?.replaceState?.(window.history.state,document.title,$.toString()),j}catch{return null}}class n2{container;root;statusEl;bodyEl;metricsEl;targetSubtitleEl;socketBoundary=null;protocol=null;disposed=!1;targetId=null;targetLabel=null;bytesIn=0;bytesOut=0;canvas=null;canvasCtx=null;displayPlaceholderEl=null;displayInfoEl=null;displayMetaEl=null;displayStageEl=null;chromeEl=null;sessionShellEl=null;resizeObserver=null;displayScale=null;readOnly=!1;pointerButtonMask=0;pressedKeysyms=new Map;passwordInputEl=null;authPassword=null;directHostInputEl=null;directPortInputEl=null;directPasswordInputEl=null;hasRenderedFrame=!1;frameTimeoutId=null;reconnectTimerId=null;reconnectAttempts=0;rawFallbackAttempted=!1;protocolRecovering=!1;pendingHandoffToken=null;constructor(_,$){this.container=_,this.targetId=DN($?.path),this.targetLabel=this.targetId||null,this.pendingHandoffToken=MN("vnc_handoff"),this.root=document.createElement("div"),this.root.className="vnc-pane-shell",this.root.style.cssText="display:flex;flex-direction:column;width:100%;height:100%;background:var(--bg-primary);color:var(--text-primary);",this.targetSubtitleEl=null,this.statusEl=document.createElement("div"),this.statusEl.style.cssText="display:none;",this.statusEl.textContent="",this.bodyEl=document.createElement("div"),this.bodyEl.style.cssText="flex:1;min-height:0;display:flex;align-items:stretch;justify-content:stretch;padding:12px;",this.metricsEl=document.createElement("div"),this.metricsEl.style.cssText="display:none;",this.updateMetrics(),this.root.append(this.statusEl,this.bodyEl),this.container.appendChild(this.root),this.load()}setStatus(_){this.statusEl.textContent=String(_||"")}setSessionChromeVisible(_){if(this.chromeEl)this.chromeEl.style.display=_?"grid":"none";if(this.sessionShellEl?.style)this.sessionShellEl.style.gridTemplateRows=_?"auto minmax(0,1fr)":"1fr";if(this.displayStageEl?.style)this.displayStageEl.style.padding=_?"12px":"0",this.displayStageEl.style.border=_?"1px solid var(--border-color)":"none",this.displayStageEl.style.borderRadius=_?"16px":"0",this.displayStageEl.style.background=_?"#0a0a0a":"#000";if(this.displayPlaceholderEl?.style)this.displayPlaceholderEl.style.display=_&&!this.hasRenderedFrame?"block":"none"}clearReconnectTimer(){if(this.reconnectTimerId)clearTimeout(this.reconnectTimerId),this.reconnectTimerId=null}scheduleReconnect(){if(this.disposed||!this.targetId)return;this.clearReconnectTimer();let _=Math.min(8000,1500+this.reconnectAttempts*1000);this.reconnectAttempts+=1,this.reconnectTimerId=setTimeout(()=>{if(this.reconnectTimerId=null,this.disposed||!this.targetId)return;this.connectSocket()},_)}updateMetrics(){this.metricsEl.textContent=`Transport bytes — in: ${this.bytesIn} / out: ${this.bytesOut}`}applyMetrics(_){this.bytesIn=Number(_?.bytesIn||0),this.bytesOut=Number(_?.bytesOut||0),this.updateMetrics()}openTargetTab(_,$){if(this.targetId=String(_||"").trim()||null,this.targetLabel=String($||_||"").trim()||this.targetId||"VNC",this.targetId)this.renderTargetSession({direct_connect_enabled:!0,target:{id:this.targetId,label:this.targetLabel,read_only:!1,direct_connect:!0}}),this.setStatus("Connecting…"),this.updateDisplayInfo("Connecting…"),this.updateDisplayMeta("connecting");this.load()}requestPanePopout(_,$){this.container.dispatchEvent(new CustomEvent("pane:popout",{bubbles:!0,detail:{path:_,label:$}}))}resetLiveSession(){this.clearReconnectTimer(),this.reconnectAttempts=0,this.protocol=null;try{this.socketBoundary?.dispose?.()}catch{}this.socketBoundary=null;try{this.resizeObserver?.disconnect?.()}catch{}if(this.resizeObserver=null,this.canvas=null,this.canvasCtx=null,this.displayPlaceholderEl=null,this.displayInfoEl=null,this.displayMetaEl=null,this.displayStageEl=null,this.displayScale=null,this.passwordInputEl=null,this.directHostInputEl=null,this.directPortInputEl=null,this.directPasswordInputEl=null,this.hasRenderedFrame=!1,this.rawFallbackAttempted=!1,this.protocolRecovering=!1,this.frameTimeoutId)clearTimeout(this.frameTimeoutId),this.frameTimeoutId=null;this.pressedKeysyms.clear()}renderTargets(_){this.resetLiveSession();let $=Array.isArray(_?.targets)?_.targets:[],j=Boolean(_?.direct_connect_enabled);this.bodyEl.innerHTML=`
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
                        ${$.map((Y)=>`
                            <div style="text-align:left;padding:16px;border:1px solid var(--border-color);border-radius:14px;background:var(--bg-secondary);color:inherit;display:flex;flex-direction:column;gap:12px;">
                                <div>
                                    <div style="font-weight:600;margin-bottom:6px;">${f4(Y.label||Y.id)}</div>
                                    <div style="font:12px var(--font-family-mono, monospace);color:var(--text-secondary);">${f4(Y.id)}</div>
                                    <div style="margin-top:8px;font-size:12px;color:var(--text-secondary);">${Y.readOnly?"Read-only target":"Interactive target"}</div>
                                </div>
                                <div style="display:flex;flex-wrap:wrap;gap:8px;">
                                    <button type="button" data-target-open-tab="${f4(Y.id)}" data-target-label="${f4(Y.label||Y.id)}" style="padding:8px 12px;border:1px solid var(--border-color);border-radius:10px;background:var(--bg-primary);cursor:pointer;color:inherit;">Connect</button>
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
        `,this.directHostInputEl=this.bodyEl.querySelector("[data-vnc-direct-host]"),this.directPortInputEl=this.bodyEl.querySelector("[data-vnc-direct-port]"),this.directPasswordInputEl=this.bodyEl.querySelector("[data-vnc-direct-password]");let Z=()=>{let Y=IN(this.directHostInputEl?.value,this.directPortInputEl?.value);if(!Y)return;this.authPassword=y5(this.directPasswordInputEl?this.directPasswordInputEl.value:this.authPassword),this.openTargetTab(Y,Y)};this.directHostInputEl?.addEventListener("keydown",(Y)=>{if(Y.key!=="Enter")return;Y.preventDefault(),Z()}),this.directPortInputEl?.addEventListener("keydown",(Y)=>{if(Y.key!=="Enter")return;Y.preventDefault(),Z()}),this.directPasswordInputEl?.addEventListener("keydown",(Y)=>{if(Y.key!=="Enter")return;Y.preventDefault(),Z()}),this.bodyEl.querySelector("[data-direct-open-tab]")?.addEventListener("click",()=>Z());for(let Y of Array.from(this.bodyEl.querySelectorAll("[data-target-open-tab]")))Y.addEventListener("click",()=>{let Q=Y.getAttribute("data-target-open-tab"),q=Y.getAttribute("data-target-label")||Q||"VNC";if(!Q)return;this.openTargetTab(Q,q)})}renderTargetSession(_){this.resetLiveSession();let $=_?.target||{},j=$?.label||this.targetId||"VNC target";if(this.targetLabel=j,this.readOnly=Boolean($.read_only),this.pointerButtonMask=0,this.hasRenderedFrame=!1,this.pressedKeysyms.clear(),this.bodyEl.innerHTML=`
            <div data-vnc-session-shell style="width:100%;height:100%;min-height:0;display:grid;grid-template-rows:auto minmax(0,1fr);gap:12px;">
                <div data-vnc-session-chrome style="padding:10px 12px;border:1px solid var(--border-color);border-radius:14px;background:var(--bg-secondary);display:grid;gap:10px;">
                    <div style="display:grid;gap:4px;min-width:0;">
                        <div style="font:12px var(--font-family-mono, monospace);color:var(--text-secondary);white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">${f4($.id||this.targetId||"")} · ${$.read_only?"read-only":"interactive"} · websocket → TCP proxy</div>
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
                        <div style="font-weight:700;font-size:18px;margin-bottom:8px;">${f4(j)}</div>
                        <div style="font-size:13px;color:#b7b7b7;">Waiting for the VNC/RFB handshake and first framebuffer update…</div>
                    </div>
                </div>
            </div>
        `,this.sessionShellEl=this.bodyEl.querySelector("[data-vnc-session-shell]"),this.chromeEl=this.bodyEl.querySelector("[data-vnc-session-chrome]"),this.displayStageEl=this.bodyEl.querySelector("[data-display-stage]"),this.canvas=this.bodyEl.querySelector("[data-display-canvas]"),this.displayPlaceholderEl=this.bodyEl.querySelector("[data-display-placeholder]"),this.displayInfoEl=this.bodyEl.querySelector("[data-display-info]"),this.displayMetaEl=this.bodyEl.querySelector("[data-display-meta]"),this.canvasCtx=this.canvas?.getContext?.("2d",{alpha:!1})||null,this.canvasCtx)this.canvasCtx.imageSmoothingEnabled=!0,this.canvasCtx.imageSmoothingQuality="high";if(this.updateDisplayInfo("Waiting for VNC protocol negotiation…"),this.updateDisplayMeta(),this.setSessionChromeVisible(!0),this.attachDisplayResizeObserver(),this.attachCanvasPointerHandlers(),this.attachCanvasKeyboardHandlers(),this.passwordInputEl=this.bodyEl.querySelector("[data-vnc-password]"),this.passwordInputEl&&this.authPassword!==null)this.passwordInputEl.value=this.authPassword;this.passwordInputEl?.addEventListener("input",()=>{this.authPassword=y5(this.passwordInputEl.value)}),this.passwordInputEl?.addEventListener("keydown",(Q)=>{if(Q.key!=="Enter")return;Q.preventDefault(),this.connectSocket()}),this.bodyEl.querySelector("[data-vnc-reconnect]")?.addEventListener("click",()=>{this.authPassword=y5(this.passwordInputEl?this.passwordInputEl.value:this.authPassword),this.connectSocket()}),this.bodyEl.querySelector("[data-open-target-picker]")?.addEventListener("click",()=>{this.openTargetTab("","VNC")})}updateDisplayInfo(_){if(this.displayInfoEl)this.displayInfoEl.textContent=String(_||"")}updateDisplayMeta(_=""){if(!this.displayMetaEl)return;let $=this.protocol?.state?`state=${this.protocol.state}`:"state=idle",j=this.protocol?.framebufferWidth&&this.protocol?.framebufferHeight?`${this.protocol.framebufferWidth}×${this.protocol.framebufferHeight}`:"pending",Z=this.protocol?.serverName?` · name=${this.protocol.serverName}`:"",Y=this.displayScale?` · scale=${Math.round(this.displayScale*100)}%`:"",Q=_?` · ${_}`:"";this.displayMetaEl.textContent=`${$} · framebuffer=${j}${Z}${Y}${Q}`}ensureCanvasSize(_,$,j={}){if(!this.canvas||!this.canvasCtx||!_||!$)return;if(this.canvas.width!==_||this.canvas.height!==$)this.canvas.width=_,this.canvas.height=$;let Z=j?.reveal===!0;if(this.canvas.style.display=Z||this.hasRenderedFrame?"block":"none",this.canvas.style.aspectRatio=`${_} / ${$}`,this.displayPlaceholderEl)this.displayPlaceholderEl.style.display=Z||this.hasRenderedFrame?"none":"";this.updateCanvasScale()}attachDisplayResizeObserver(){if(!this.displayStageEl||typeof ResizeObserver>"u")return;try{this.resizeObserver?.disconnect?.()}catch{}this.resizeObserver=new ResizeObserver(()=>{this.updateCanvasScale()}),this.resizeObserver.observe(this.displayStageEl)}updateCanvasScale(){if(!this.canvas||!this.displayStageEl||!this.canvas.width||!this.canvas.height)return;requestAnimationFrame(()=>{if(!this.canvas||!this.displayStageEl)return;let _=this.displayStageEl.getBoundingClientRect?.(),$=Math.max(1,Math.floor(_?.width||this.displayStageEl.clientWidth||0)-32),j=Math.max(1,Math.floor(_?.height||this.displayStageEl.clientHeight||0)-32);if(!$||!j)return;let Z=O2($,j,this.canvas.width,this.canvas.height);this.displayScale=Z,this.canvas.style.width=`${Math.max(1,Math.round(this.canvas.width*Z))}px`,this.canvas.style.height=`${Math.max(1,Math.round(this.canvas.height*Z))}px`,this.updateDisplayMeta()})}getFramebufferPointFromEvent(_){if(!this.canvas||!this.protocol?.framebufferWidth||!this.protocol?.framebufferHeight)return null;let $=this.canvas.getBoundingClientRect?.();if(!$||!$.width||!$.height)return null;return F2(_.clientX,_.clientY,$,this.protocol.framebufferWidth,this.protocol.framebufferHeight)}sendPointerEvent(_,$,j){if(!this.socketBoundary||!this.protocol||this.protocol.state!=="connected")return;this.socketBoundary.send(z8(_,$,j))}attachCanvasPointerHandlers(){if(!this.canvas||this.readOnly)return;this.canvas.style.cursor="crosshair",this.canvas.style.touchAction="none",this.canvas.addEventListener("contextmenu",(_)=>{_.preventDefault()}),this.canvas.addEventListener("pointermove",(_)=>{let $=this.getFramebufferPointFromEvent(_);if(!$)return;this.sendPointerEvent(this.pointerButtonMask,$.x,$.y)}),this.canvas.addEventListener("pointerdown",(_)=>{let $=this.getFramebufferPointFromEvent(_);if(!$)return;_.preventDefault(),this.canvas?.focus?.();try{this.canvas?.setPointerCapture?.(_.pointerId)}catch{}this.pointerButtonMask|=l6(_.button),this.sendPointerEvent(this.pointerButtonMask,$.x,$.y)}),this.canvas.addEventListener("pointerup",(_)=>{let $=this.getFramebufferPointFromEvent(_);if(!$)return;_.preventDefault(),this.pointerButtonMask&=~l6(_.button),this.sendPointerEvent(this.pointerButtonMask,$.x,$.y);try{this.canvas?.releasePointerCapture?.(_.pointerId)}catch{}}),this.canvas.addEventListener("pointercancel",(_)=>{let $=this.getFramebufferPointFromEvent(_)||{x:0,y:0};this.pointerButtonMask=0,this.sendPointerEvent(0,$.x,$.y);try{this.canvas?.releasePointerCapture?.(_.pointerId)}catch{}}),this.canvas.addEventListener("wheel",(_)=>{let $=this.getFramebufferPointFromEvent(_);if(!$)return;_.preventDefault();for(let j of H2(_.deltaY,$.x,$.y,this.pointerButtonMask))this.socketBoundary?.send?.(j)},{passive:!1})}sendKeyEvent(_,$){if(!this.socketBoundary||!this.protocol||this.protocol.state!=="connected")return;this.socketBoundary.send(J2(_,$))}releasePressedKeys(){for(let _ of this.pressedKeysyms.values())this.sendKeyEvent(!1,_);this.pressedKeysyms.clear()}attachCanvasKeyboardHandlers(){if(!this.canvas||this.readOnly)return;this.canvas.addEventListener("keydown",(_)=>{let $=n6(_);if($==null)return;if(_.repeat&&this.pressedKeysyms.has(_.code||_.key)){_.preventDefault();return}_.preventDefault();let j=_.code||_.key;this.pressedKeysyms.set(j,$),this.sendKeyEvent(!0,$)}),this.canvas.addEventListener("keyup",(_)=>{let $=_.code||_.key,j=this.pressedKeysyms.get($)??n6(_);if(j==null)return;_.preventDefault(),this.pressedKeysyms.delete($),this.sendKeyEvent(!1,j)}),this.canvas.addEventListener("blur",()=>{this.releasePressedKeys()})}drawRgbaRect(_){if(!this.canvasCtx||!this.canvas)return;this.ensureCanvasSize(this.canvas.width||_.width,this.canvas.height||_.height,{reveal:!0});let $=new ImageData(_.rgba,_.width,_.height);this.canvasCtx.putImageData($,_.x,_.y),this.hasRenderedFrame=!0}copyCanvasRect(_){if(!this.canvasCtx||!this.canvas)return;this.ensureCanvasSize(this.canvas.width||_.width,this.canvas.height||_.height,{reveal:!0});let $=this.canvasCtx.getImageData(_.srcX,_.srcY,_.width,_.height);this.canvasCtx.putImageData($,_.x,_.y),this.hasRenderedFrame=!0}scheduleRawFallbackTimeout(){if(this.frameTimeoutId)clearTimeout(this.frameTimeoutId),this.frameTimeoutId=null;if(this.rawFallbackAttempted||this.protocolRecovering)return;this.frameTimeoutId=setTimeout(()=>{if(this.hasRenderedFrame||this.rawFallbackAttempted||this.protocolRecovering)return;if(this.protocol&&this.socketBoundary)this.rawFallbackAttempted=!0,this.protocolRecovering=!0,this.setStatus("No framebuffer update yet; retrying with RAW encoding."),this.updateDisplayInfo("No framebuffer update yet. Retrying with RAW encoding."),this.updateDisplayMeta("reconnect-encoding-fallback"),this.connectWithEncodings("0")},2200)}applyRemoteDisplayEvent(_){if(!_)return;switch(_.type){case"protocol-version":this.setStatus(`Negotiated ${_.protocol.toUpperCase()} ${_.server} → ${_.client}.`),this.updateDisplayInfo(`Negotiated ${_.server} → ${_.client}.`),this.updateDisplayMeta();return;case"security-types":this.setStatus(`Server offered security types: ${_.types.join(", ")||"none"}.`),this.updateDisplayInfo(`Security types: ${_.types.join(", ")||"none"}.`),this.updateDisplayMeta();return;case"security-selected":this.setStatus(`Using ${_.protocol.toUpperCase()} security type ${_.label}.`),this.updateDisplayInfo(`Security: ${_.label}.`),this.updateDisplayMeta();return;case"security-result":this.setStatus("Security negotiation complete. Waiting for server init…"),this.updateDisplayInfo("Security negotiation complete. Waiting for server init…"),this.updateDisplayMeta();return;case"display-init":this.ensureCanvasSize(_.width,_.height),this.setSessionChromeVisible(!1),this.setStatus(`Connected to ${this.targetLabel||this.targetId||"target"} — waiting for first framebuffer update (${_.width}×${_.height}).`),this.updateDisplayInfo(`Connected to ${_.name||this.targetLabel||this.targetId||"remote display"}. Waiting for first framebuffer update…`),this.updateDisplayMeta("awaiting-frame"),this.scheduleRawFallbackTimeout();return;case"framebuffer-update":if(this.frameTimeoutId)clearTimeout(this.frameTimeoutId),this.frameTimeoutId=null;let $=!1,j=(_.rects||[]).some((Z)=>Z.kind==="pipeline");if(_.framebuffer&&_.framebuffer.length>0&&_.width>0&&_.height>0&&j){this.ensureCanvasSize(_.width,_.height,{reveal:!0});for(let Y of _.rects||[])if(Y.kind==="resize")this.ensureCanvasSize(Y.width,Y.height);let Z=this.canvas?.getContext("2d",{alpha:!1});if(Z){let Y=new ImageData(new Uint8ClampedArray(_.framebuffer),_.width,_.height);Z.putImageData(Y,0,0),$=!0}}else for(let Z of _.rects||[]){if(Z.kind==="resize"){this.ensureCanvasSize(Z.width,Z.height);continue}if(Z.kind==="copy"){this.ensureCanvasSize(_.width,_.height,{reveal:!0}),this.copyCanvasRect(Z),$=!0;continue}if(Z.kind==="rgba")this.ensureCanvasSize(_.width,_.height,{reveal:!0}),this.drawRgbaRect(Z),$=!0}if($||this.hasRenderedFrame)this.protocolRecovering=!1,this.setStatus(`Rendering live framebuffer — ${_.width}×${_.height}.`),this.updateDisplayInfo(`Framebuffer update applied (${(_.rects||[]).length} rect${(_.rects||[]).length===1?"":"s"}).`),this.updateDisplayMeta();else this.setStatus(`Connected to ${this.targetLabel||this.targetId||"target"} — waiting for painted framebuffer data.`),this.updateDisplayInfo(`Framebuffer update received, but no paintable rects yet (${(_.rects||[]).length} rect${(_.rects||[]).length===1?"":"s"}).`),this.updateDisplayMeta("awaiting-frame"),this.scheduleRawFallbackTimeout();return;case"clipboard":this.setStatus("Remote clipboard updated."),this.updateDisplayInfo(`Clipboard text received (${_.text.length} chars).`),this.updateDisplayMeta();return;case"bell":this.setStatus("Remote display bell received."),this.updateDisplayInfo("Remote display bell received."),this.updateDisplayMeta();return}}async handleSocketMessage(_){if(_?.kind==="control"){let j=_.payload;if(j?.type==="vnc.error"){this.setStatus(`Proxy error: ${j.error||"Unknown error"}`),this.updateDisplayInfo(`Proxy error: ${j.error||"Unknown error"}`),this.updateDisplayMeta("proxy-error");return}if(j?.type==="vnc.connected"){let Z=j?.target?.label||this.targetLabel||this.targetId;this.setStatus(`Connected to ${Z}. Waiting for VNC/RFB data…`),this.updateDisplayInfo(`Connected to ${Z}. Waiting for VNC handshake…`),this.updateDisplayMeta();return}if(j?.type==="pong")return;return}let $=this.protocol||(this.protocol=new J8);try{let j=_.data instanceof Blob?await _.data.arrayBuffer():_.data,Z=$.receive(j);for(let Y of Z.outgoing||[])this.socketBoundary?.send?.(Y);for(let Y of Z.events||[])this.applyRemoteDisplayEvent(Y)}catch(j){let Z=j?.message||"Unknown error";if(this.setSessionChromeVisible(!0),this.setStatus(`Display protocol error: ${Z}`),this.updateDisplayInfo(`Display protocol error: ${Z}`),this.updateDisplayMeta("protocol-error"),this.frameTimeoutId)clearTimeout(this.frameTimeoutId),this.frameTimeoutId=null;if(!this.rawFallbackAttempted&&!this.protocolRecovering&&/unexpected eof|zlib|decompress|protocol|buffer|undefined|not an object|reading '0'/i.test(Z))this.rawFallbackAttempted=!0,this.protocolRecovering=!0,this.connectWithEncodings("0")}}async connectSocket(_=null){if(!this.targetId||this.disposed)return;if(this.clearReconnectTimer(),this.protocolRecovering&&_==null)this.protocolRecovering=!1;try{this.socketBoundary?.dispose?.()}catch{}if(_==null)this.rawFallbackAttempted=!1,this.protocolRecovering=!1;let $=this.pendingHandoffToken||null,j=_==null?null:String(_).trim(),Z=await z2(),Y={};if(Z)Y.pipeline=Z,Y.decodeRawRect=(N,K,G,X)=>Z.decodeRawRectToRgba(N,K,G,X);let Q=y5(this.authPassword);if(Q!==null)Y.password=Q;if(j)Y.encodings=j;let q=Boolean(this.canvas&&this.hasRenderedFrame);if(this.protocol=new J8(Y),this.hasRenderedFrame=q,this.frameTimeoutId=null,this.canvas)this.canvas.style.display=q?"block":"none";if(this.displayPlaceholderEl)this.displayPlaceholderEl.style.display=q?"none":"";this.socketBoundary=new p6({url:kN(this.targetId,$),binaryType:"arraybuffer",onOpen:()=>{if($&&this.pendingHandoffToken===$)this.pendingHandoffToken=null;this.reconnectAttempts=0,this.setStatus(`Connected to proxy for ${this.targetId}. Waiting for VNC/RFB data…`),this.updateDisplayInfo("WebSocket proxy connected. Waiting for handshake…"),this.updateDisplayMeta(),this.socketBoundary?.sendControl?.({type:"ping"})},onMetrics:(N)=>{this.applyMetrics(N)},onMessage:(N)=>{this.handleSocketMessage(N)},onClose:()=>{if(this.setSessionChromeVisible(!0),this.frameTimeoutId)clearTimeout(this.frameTimeoutId),this.frameTimeoutId=null;if(this.disposed)return;if(this.bytesIn>0||this.hasRenderedFrame||this.reconnectAttempts>0){this.setStatus("Remote display connection lost. Reconnecting…"),this.updateDisplayInfo("Remote display transport closed. Attempting to reconnect…"),this.updateDisplayMeta("reconnecting"),this.scheduleReconnect();return}this.setStatus(this.bytesIn>0?`Proxy closed after receiving ${this.bytesIn} byte(s).`:"Proxy closed."),this.updateDisplayInfo(this.bytesIn>0?"Remote display transport closed after receiving data.":"Remote display transport closed."),this.updateDisplayMeta("closed")},onError:()=>{if(this.setSessionChromeVisible(!0),this.bytesIn>0||this.hasRenderedFrame||this.reconnectAttempts>0){this.setStatus("WebSocket proxy connection failed. Reconnecting…"),this.updateDisplayInfo("WebSocket proxy connection failed. Attempting to reconnect…"),this.updateDisplayMeta("socket-reconnecting"),this.scheduleReconnect();return}this.setStatus("WebSocket proxy connection failed."),this.updateDisplayInfo("WebSocket proxy connection failed."),this.updateDisplayMeta("socket-error")}}),this.socketBoundary.connect()}connectWithEncodings(_){return this.connectSocket(_)}async load(){this.setStatus("");try{let _=await AN(this.targetId);if(!_?.enabled){this.renderTargets(_),this.setStatus("");return}if(!this.targetId){this.renderTargets(_),this.setStatus("");return}this.renderTargetSession(_),await this.connectSocket()}catch(_){this.resetLiveSession(),this.bodyEl.innerHTML=`
                <div style="max-width:620px;text-align:center;padding:28px;border:1px dashed var(--border-color);border-radius:14px;background:var(--bg-secondary);">
                    <div style="font-size:32px;margin-bottom:10px;">⚠️</div>
                    <div style="font-weight:600;margin-bottom:6px;">Failed to load VNC session</div>
                    <div style="color:var(--text-secondary);font-size:13px;line-height:1.5;">${f4(_?.message||"Unknown error")}</div>
                </div>
            `,this.setStatus(`Session load failed: ${_?.message||"Unknown error"}`)}}async preparePopoutTransfer(){if(!this.targetId)return null;let _=await EN(this.targetId),$=typeof _?.token==="string"?_.token.trim():"";if(!$)throw Error("No live VNC session is available to transfer.");return{vnc_handoff:$}}getContent(){return}isDirty(){return!1}focus(){this.canvas?.focus?.(),this.root?.focus?.()}resize(){this.updateCanvasScale()}dispose(){if(this.disposed)return;this.disposed=!0,this.resetLiveSession(),this.root?.remove?.()}}var j$={id:"vnc-viewer",label:"VNC",icon:"display",capabilities:["preview"],placement:"tabs",canHandle(_){let $=String(_?.path||"");return $===Z4||$.startsWith(`${Z4}/`)?9000:!1},mount(_,$){return new n2(_,$)}};function K_(_){if(typeof window>"u"||!window.localStorage)return null;try{return window.localStorage.getItem(_)}catch{return null}}function Q1(_,$){if(typeof window>"u"||!window.localStorage)return;try{window.localStorage.setItem(_,$)}catch{}}function K5(_,$=!1){let j=K_(_);if(j===null)return $;return j==="true"}function R5(_,$=null){let j=K_(_);if(j===null)return $;let Z=parseInt(j,10);return Number.isFinite(Z)?Z:$}var Q$="piclaw_theme",D8="piclaw_tint",r2="piclaw_chat_themes",f5={bgPrimary:"#ffffff",bgSecondary:"#f7f9fa",bgHover:"#e8ebed",textPrimary:"#0f1419",textSecondary:"#536471",borderColor:"#eff3f4",accent:"#1d9bf0",accentHover:"#1a8cd8",danger:"#f4212e",success:"#00ba7c"},o2={bgPrimary:"#000000",bgSecondary:"#16181c",bgHover:"#1d1f23",textPrimary:"#e7e9ea",textSecondary:"#71767b",borderColor:"#2f3336",accent:"#1d9bf0",accentHover:"#1a8cd8",danger:"#f4212e",success:"#00ba7c"},d2={default:{label:"Default",mode:"auto",light:f5,dark:o2},tango:{label:"Tango",mode:"light",light:{bgPrimary:"#f6f5f4",bgSecondary:"#efedeb",bgHover:"#e5e3e1",textPrimary:"#2e3436",textSecondary:"#5c6466",borderColor:"#d3d7cf",accent:"#3465a4",accentHover:"#2c5890",danger:"#cc0000",success:"#4e9a06"}},xterm:{label:"XTerm",mode:"dark",dark:{bgPrimary:"#000000",bgSecondary:"#0a0a0a",bgHover:"#121212",textPrimary:"#d0d0d0",textSecondary:"#8a8a8a",borderColor:"#1f1f1f",accent:"#00a2ff",accentHover:"#0086d1",danger:"#ff5f5f",success:"#5fff87"}},monokai:{label:"Monokai",mode:"dark",dark:{bgPrimary:"#272822",bgSecondary:"#2f2f2f",bgHover:"#3a3a3a",textPrimary:"#f8f8f2",textSecondary:"#cfcfc2",borderColor:"#3e3d32",accent:"#f92672",accentHover:"#e81560",danger:"#f92672",success:"#a6e22e"}},"monokai-pro":{label:"Monokai Pro",mode:"dark",dark:{bgPrimary:"#2d2a2e",bgSecondary:"#363237",bgHover:"#403a40",textPrimary:"#fcfcfa",textSecondary:"#c1c0c0",borderColor:"#444046",accent:"#ff6188",accentHover:"#f74f7e",danger:"#ff4f5e",success:"#a9dc76"}},ristretto:{label:"Ristretto",mode:"dark",dark:{bgPrimary:"#2c2525",bgSecondary:"#362d2d",bgHover:"#403535",textPrimary:"#f4f1ef",textSecondary:"#cbbdb8",borderColor:"#4a3c3c",accent:"#ff9f43",accentHover:"#f28a2e",danger:"#ff5f56",success:"#a9dc76"}},dracula:{label:"Dracula",mode:"dark",dark:{bgPrimary:"#282a36",bgSecondary:"#303445",bgHover:"#3a3f52",textPrimary:"#f8f8f2",textSecondary:"#c5c8d6",borderColor:"#44475a",accent:"#bd93f9",accentHover:"#a87ded",danger:"#ff5555",success:"#50fa7b"}},catppuccin:{label:"Catppuccin",mode:"dark",dark:{bgPrimary:"#1e1e2e",bgSecondary:"#24273a",bgHover:"#2c2f41",textPrimary:"#cdd6f4",textSecondary:"#a6adc8",borderColor:"#313244",accent:"#89b4fa",accentHover:"#74a0f5",danger:"#f38ba8",success:"#a6e3a1"}},nord:{label:"Nord",mode:"dark",dark:{bgPrimary:"#2e3440",bgSecondary:"#3b4252",bgHover:"#434c5e",textPrimary:"#eceff4",textSecondary:"#d8dee9",borderColor:"#4c566a",accent:"#88c0d0",accentHover:"#78a9c0",danger:"#bf616a",success:"#a3be8c"}},gruvbox:{label:"Gruvbox",mode:"dark",dark:{bgPrimary:"#282828",bgSecondary:"#32302f",bgHover:"#3c3836",textPrimary:"#ebdbb2",textSecondary:"#bdae93",borderColor:"#3c3836",accent:"#d79921",accentHover:"#c28515",danger:"#fb4934",success:"#b8bb26"}},solarized:{label:"Solarized",mode:"auto",light:{bgPrimary:"#fdf6e3",bgSecondary:"#f5efdc",bgHover:"#eee8d5",textPrimary:"#586e75",textSecondary:"#657b83",borderColor:"#e0d8c6",accent:"#268bd2",accentHover:"#1f78b3",danger:"#dc322f",success:"#859900"},dark:{bgPrimary:"#002b36",bgSecondary:"#073642",bgHover:"#0b3c4a",textPrimary:"#eee8d5",textSecondary:"#93a1a1",borderColor:"#18424a",accent:"#268bd2",accentHover:"#1f78b3",danger:"#dc322f",success:"#859900"}},tokyo:{label:"Tokyo",mode:"dark",dark:{bgPrimary:"#1a1b26",bgSecondary:"#24283b",bgHover:"#2f3549",textPrimary:"#c0caf5",textSecondary:"#9aa5ce",borderColor:"#414868",accent:"#7aa2f7",accentHover:"#6b92e6",danger:"#f7768e",success:"#9ece6a"}},miasma:{label:"Miasma",mode:"dark",dark:{bgPrimary:"#1f1f23",bgSecondary:"#29292f",bgHover:"#33333a",textPrimary:"#e5e5e5",textSecondary:"#b4b4b4",borderColor:"#3d3d45",accent:"#c9739c",accentHover:"#b8618c",danger:"#e06c75",success:"#98c379"}},github:{label:"GitHub",mode:"auto",light:{bgPrimary:"#ffffff",bgSecondary:"#f6f8fa",bgHover:"#eaeef2",textPrimary:"#24292f",textSecondary:"#57606a",borderColor:"#d0d7de",accent:"#0969da",accentHover:"#0550ae",danger:"#cf222e",success:"#1a7f37"},dark:{bgPrimary:"#0d1117",bgSecondary:"#161b22",bgHover:"#21262d",textPrimary:"#c9d1d9",textSecondary:"#8b949e",borderColor:"#30363d",accent:"#2f81f7",accentHover:"#1f6feb",danger:"#f85149",success:"#3fb950"}},gotham:{label:"Gotham",mode:"dark",dark:{bgPrimary:"#0b0f14",bgSecondary:"#111720",bgHover:"#18212b",textPrimary:"#cbd6e2",textSecondary:"#9bb0c3",borderColor:"#1f2a37",accent:"#5ccfe6",accentHover:"#48b8ce",danger:"#d26937",success:"#2aa889"}}},TN=["--bg-primary","--bg-secondary","--bg-hover","--text-primary","--text-secondary","--border-color","--accent-color","--accent-hover","--accent-contrast-text","--accent-soft","--accent-soft-strong","--danger-color","--success-color","--search-highlight-color"],v4={theme:"default",tint:null},s2="light",Z$=!1;function A8(_){let $=String(_||"").trim().toLowerCase();if(!$)return"default";if($==="solarized-dark"||$==="solarized-light")return"solarized";if($==="github-dark"||$==="github-light")return"github";if($==="tokyo-night")return"tokyo";return $}function X5(_){if(!_)return null;let $=String(_).trim();if(!$)return null;let j=$.startsWith("#")?$.slice(1):$;if(!/^[0-9a-fA-F]{3}$/.test(j)&&!/^[0-9a-fA-F]{6}$/.test(j))return null;let Z=j.length===3?j.split("").map((Q)=>Q+Q).join(""):j,Y=parseInt(Z,16);return{r:Y>>16&255,g:Y>>8&255,b:Y&255,hex:`#${Z.toLowerCase()}`}}function xN(_){if(!_||typeof document>"u")return null;let $=String(_).trim();if(!$)return null;let j=document.createElement("div");if(j.style.color="",j.style.color=$,!j.style.color)return null;let Z=j.style.color;try{if(document.body)j.style.display="none",document.body.appendChild(j),Z=getComputedStyle(j).color||j.style.color,document.body.removeChild(j)}catch{}let Y=Z.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/i);if(!Y)return null;let Q=parseInt(Y[1],10),q=parseInt(Y[2],10),N=parseInt(Y[3],10);if(![Q,q,N].every((G)=>Number.isFinite(G)))return null;let K=`#${[Q,q,N].map((G)=>G.toString(16).padStart(2,"0")).join("")}`;return{r:Q,g:q,b:N,hex:K}}function a2(_){return X5(_)||xN(_)}function u5(_,$,j){let Z=Math.round(_.r+($.r-_.r)*j),Y=Math.round(_.g+($.g-_.g)*j),Q=Math.round(_.b+($.b-_.b)*j);return`rgb(${Z} ${Y} ${Q})`}function Y$(_,$){return`rgba(${_.r}, ${_.g}, ${_.b}, ${$})`}function yN(_){let $=_.r/255,j=_.g/255,Z=_.b/255,Y=$<=0.03928?$/12.92:Math.pow(($+0.055)/1.055,2.4),Q=j<=0.03928?j/12.92:Math.pow((j+0.055)/1.055,2.4),q=Z<=0.03928?Z/12.92:Math.pow((Z+0.055)/1.055,2.4);return 0.2126*Y+0.7152*Q+0.0722*q}function PN(_){return yN(_)>0.4?"#000000":"#ffffff"}function t2(){if(typeof window>"u")return"light";try{return window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}catch{return"light"}}function q$(_){return d2[_]||d2.default}function CN(_){return _.mode==="auto"?t2():_.mode}function e2(_,$){let j=q$(_);if($==="dark"&&j.dark)return j.dark;if($==="light"&&j.light)return j.light;return j.dark||j.light||f5}function _7(_,$,j){let Z=a2($);if(!Z)return _;let Y=X5(_.bgPrimary),Q=X5(_.bgSecondary),q=X5(_.bgHover),N=X5(_.borderColor);if(!Y||!Q||!q||!N)return _;let G=X5(j==="dark"?"#ffffff":"#000000");return{..._,bgPrimary:u5(Y,Z,0.08),bgSecondary:u5(Q,Z,0.12),bgHover:u5(q,Z,0.16),borderColor:u5(N,Z,0.08),accent:Z.hex,accentHover:G?u5(Z,G,0.18):Z.hex}}function SN(_,$){if(typeof document>"u")return;let j=document.documentElement,Z=_.accent,Y=a2(Z),Q=Y?Y$(Y,$==="dark"?0.35:0.2):_.searchHighlight||_.searchHighlightColor,q=Y?Y$(Y,$==="dark"?0.16:0.12):"rgba(29, 155, 240, 0.12)",N=Y?Y$(Y,$==="dark"?0.28:0.2):"rgba(29, 155, 240, 0.2)",K=Y?PN(Y):$==="dark"?"#000000":"#ffffff",G={"--bg-primary":_.bgPrimary,"--bg-secondary":_.bgSecondary,"--bg-hover":_.bgHover,"--text-primary":_.textPrimary,"--text-secondary":_.textSecondary,"--border-color":_.borderColor,"--accent-color":Z,"--accent-hover":_.accentHover||Z,"--accent-soft":q,"--accent-soft-strong":N,"--accent-contrast-text":K,"--danger-color":_.danger||f5.danger,"--success-color":_.success||f5.success,"--search-highlight-color":Q||"rgba(29, 155, 240, 0.2)"};Object.entries(G).forEach(([X,V])=>{if(V)j.style.setProperty(X,V)})}function wN(){if(typeof document>"u")return;let _=document.documentElement;TN.forEach(($)=>_.style.removeProperty($))}function G5(_,$={}){if(typeof document>"u")return null;let j=typeof $.id==="string"&&$.id.trim()?$.id.trim():null,Z=j?document.getElementById(j):document.querySelector(`meta[name="${_}"]`);if(!Z)Z=document.createElement("meta"),document.head.appendChild(Z);if(Z.setAttribute("name",_),j)Z.setAttribute("id",j);return Z}function i2(_){let $=A8(v4?.theme||"default"),j=v4?.tint?String(v4.tint).trim():null,Z=e2($,_);if($==="default"&&j)Z=_7(Z,j,_);if(Z?.bgPrimary)return Z.bgPrimary;return _==="dark"?o2.bgPrimary:f5.bgPrimary}function RN(_,$){if(typeof document>"u")return;let j=G5("theme-color",{id:"dynamic-theme-color"});if(j&&_)j.removeAttribute("media"),j.setAttribute("content",_);let Z=G5("theme-color",{id:"theme-color-light"});if(Z)Z.setAttribute("media","(prefers-color-scheme: light)"),Z.setAttribute("content",i2("light"));let Y=G5("theme-color",{id:"theme-color-dark"});if(Y)Y.setAttribute("media","(prefers-color-scheme: dark)"),Y.setAttribute("content",i2("dark"));let Q=G5("msapplication-TileColor");if(Q&&_)Q.setAttribute("content",_);let q=G5("msapplication-navbutton-color");if(q&&_)q.setAttribute("content",_);let N=G5("apple-mobile-web-app-status-bar-style");if(N)N.setAttribute("content",$==="dark"?"black-translucent":"default")}function uN(){if(typeof window>"u")return;let _={...v4,mode:s2};window.dispatchEvent(new CustomEvent("piclaw-theme-change",{detail:_}))}function $7(){try{let _=K_(r2);if(!_)return{};let $=JSON.parse(_);return typeof $==="object"&&$!==null?$:{}}catch{return{}}}function fN(_,$,j){let Z=$7();if(!$&&!j)delete Z[_];else Z[_]={theme:$||"default",tint:j||null};Q1(r2,JSON.stringify(Z))}function vN(_){if(!_)return null;return $7()[_]||null}function j7(){if(typeof window>"u")return"web:default";try{let $=new URL(window.location.href).searchParams.get("chat_jid");return $&&$.trim()?$.trim():"web:default"}catch{return"web:default"}}function N$(_,$={}){if(typeof window>"u"||typeof document>"u")return;let j=A8(_?.theme||"default"),Z=_?.tint?String(_.tint).trim():null,Y=q$(j),Q=CN(Y),q=e2(j,Q);v4={theme:j,tint:Z},s2=Q;let N=document.documentElement;N.dataset.theme=Q,N.dataset.colorTheme=j,N.dataset.tint=Z?String(Z):"",N.style.colorScheme=Q;let K=q;if(j==="default"&&Z)K=_7(q,Z,Q);if(j==="default"&&!Z)wN();else SN(K,Q);if(RN(K.bgPrimary,Q),uN(),$.persist!==!1)if(Q1(Q$,j),Z)Q1(D8,Z);else Q1(D8,"")}function O8(){if(q$(v4.theme).mode!=="auto")return;N$(v4,{persist:!1})}function Z7(){if(typeof window>"u")return()=>{};let _=j7(),$=vN(_),j=$?A8($.theme||"default"):A8(K_(Q$)||"default"),Z=$?$.tint?String($.tint).trim():null:(()=>{let Y=K_(D8);return Y?Y.trim():null})();if(N$({theme:j,tint:Z},{persist:!1}),window.matchMedia&&!Z$){let Y=window.matchMedia("(prefers-color-scheme: dark)");if(Y.addEventListener)Y.addEventListener("change",O8);else if(Y.addListener)Y.addListener(O8);return Z$=!0,()=>{if(Y.removeEventListener)Y.removeEventListener("change",O8);else if(Y.removeListener)Y.removeListener(O8);Z$=!1}}return()=>{}}function Y7(_){if(!_||typeof _!=="object")return;let $=_.chat_jid||_.chatJid||j7(),j=_.theme??_.name??_.colorTheme,Z=_.tint??null;if(fN($,j||"default",Z),N$({theme:j||"default",tint:Z},{persist:!1}),!$||$==="web:default")Q1(Q$,j||"default"),Q1(D8,Z||"")}function Q7(){if(typeof document>"u")return"light";let _=document.documentElement?.dataset?.theme;if(_==="dark"||_==="light")return _;return t2()}var E8=/#(\w+)/g,bN=new Set(["strong","em","b","i","u","s","br","p","ul","ol","li","blockquote","ruby","rt","rp","span"]),gN=new Set(["a","abbr","blockquote","br","code","div","em","hr","h1","h2","h3","h4","h5","h6","i","img","kbd","li","mark","ol","p","pre","ruby","rt","rp","s","span","strong","sub","sup","table","tbody","td","th","thead","tr","u","ul","math","semantics","mrow","mi","mn","mo","mtext","mspace","msup","msub","msubsup","mfrac","msqrt","mroot","mtable","mtr","mtd","annotation"]),mN=new Set(["class","style","title","role","aria-hidden","aria-label","aria-expanded","aria-live","data-mermaid","data-hashtag"]),pN={a:new Set(["href","target","rel"]),img:new Set(["src","alt","title"])},hN=new Set(["http:","https:","mailto:",""]);function K$(_){return String(_||"").replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/'/g,"&#39;")}function b4(_,$={}){if(!_)return null;let j=String(_).trim();if(!j)return null;if(j.startsWith("#")||j.startsWith("/"))return j;if(j.startsWith("data:")){if($.allowDataImage&&/^data:image\//i.test(j))return j;return null}if(j.startsWith("blob:"))return j;try{let Z=new URL(j,typeof window<"u"?window.location.origin:"http://localhost");if(!hN.has(Z.protocol))return null;return Z.href}catch{return null}}function q7(_,$={}){if(!_)return"";let j=new DOMParser().parseFromString(_,"text/html"),Z=[],Y=j.createTreeWalker(j.body,NodeFilter.SHOW_ELEMENT),Q;while(Q=Y.nextNode())Z.push(Q);for(let q of Z){let N=q.tagName.toLowerCase();if(!gN.has(N)){let G=q.parentNode;if(!G)continue;while(q.firstChild)G.insertBefore(q.firstChild,q);G.removeChild(q);continue}let K=pN[N]||new Set;for(let G of Array.from(q.attributes)){let X=G.name.toLowerCase(),V=G.value;if(X.startsWith("on")){q.removeAttribute(G.name);continue}if(X.startsWith("data-")||X.startsWith("aria-"))continue;if(K.has(X)||mN.has(X)){if(X==="href"){let U=b4(V);if(!U)q.removeAttribute(G.name);else if(q.setAttribute(G.name,U),N==="a"&&!q.getAttribute("rel"))q.setAttribute("rel","noopener noreferrer")}else if(X==="src"){let U=N==="img"&&typeof $.rewriteImageSrc==="function"?$.rewriteImageSrc(V):V,L=b4(U,{allowDataImage:N==="img"});if(!L)q.removeAttribute(G.name);else q.setAttribute(G.name,L)}continue}q.removeAttribute(G.name)}}return j.body.innerHTML}function N7(_){if(!_)return _;let $=_.replace(/</g,"&lt;").replace(/>/g,"&gt;");return new DOMParser().parseFromString($,"text/html").documentElement.textContent}function k8(_,$=2){if(!_)return _;let j=_;for(let Z=0;Z<$;Z+=1){let Y=N7(j);if(Y===j)break;j=Y}return j}function cN(_){if(!_)return{text:"",blocks:[]};let j=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),Z=[],Y=[],Q=!1,q=[];for(let N of j){if(!Q&&N.trim().match(/^```mermaid\s*$/i)){Q=!0,q=[];continue}if(Q&&N.trim().match(/^```\s*$/)){let K=Z.length;Z.push(q.join(`
`)),Y.push(`@@MERMAID_BLOCK_${K}@@`),Q=!1,q=[];continue}if(Q)q.push(N);else Y.push(N)}if(Q)Y.push("```mermaid"),Y.push(...q);return{text:Y.join(`
`),blocks:Z}}function lN(_){if(!_)return _;return k8(_,5)}function nN(_){let $=new TextEncoder().encode(String(_||"")),j="";for(let Z of $)j+=String.fromCharCode(Z);return btoa(j)}function dN(_){let $=atob(String(_||"")),j=new Uint8Array($.length);for(let Z=0;Z<$.length;Z+=1)j[Z]=$.charCodeAt(Z);return new TextDecoder().decode(j)}function iN(_,$){if(!_||!$||$.length===0)return _;return _.replace(/@@MERMAID_BLOCK_(\d+)@@/g,(j,Z)=>{let Y=Number(Z),Q=$[Y]??"",q=lN(Q);return`<div class="mermaid-container" data-mermaid="${nN(q)}"><div class="mermaid-loading">Loading diagram...</div></div>`})}function K7(_){if(!_)return _;return _.replace(/<code>([\s\S]*?)<\/code>/gi,($,j)=>{if(j.includes(`
`))return`
\`\`\`
${j}
\`\`\`
`;return`\`${j}\``})}var rN={span:new Set(["title","class","lang","dir"])};function oN(_,$){let j=rN[_];if(!j||!$)return"";let Z=[],Y=/([a-zA-Z_:][\w:.-]*)(?:\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s"'`=<>]+)))?/g,Q;while(Q=Y.exec($)){let q=(Q[1]||"").toLowerCase();if(!q||q.startsWith("on")||!j.has(q))continue;let N=Q[2]??Q[3]??Q[4]??"";Z.push(` ${q}="${K$(N)}"`)}return Z.join("")}function G7(_){if(!_)return _;return _.replace(/&lt;([\s\S]*?)&gt;/g,($,j)=>{let Z=j.trim(),Y=Z.startsWith("/"),Q=Y?Z.slice(1).trim():Z,N=Q.endsWith("/")?Q.slice(0,-1).trim():Q,[K=""]=N.split(/\s+/,1),G=K.toLowerCase();if(!G||!bN.has(G))return $;if(G==="br")return Y?"":"<br>";if(Y)return`</${G}>`;let X=N.slice(K.length).trim(),V=oN(G,X);return`<${G}${V}>`})}function X7(_){if(!_)return _;let $=(j)=>j.replace(/&amp;lt;/g,"&lt;").replace(/&amp;gt;/g,"&gt;").replace(/&amp;quot;/g,"&quot;").replace(/&amp;#39;/g,"&#39;").replace(/&amp;amp;/g,"&amp;");return _.replace(/<pre><code>([\s\S]*?)<\/code><\/pre>/g,(j,Z)=>`<pre><code>${$(Z)}</code></pre>`).replace(/<code>([\s\S]*?)<\/code>/g,(j,Z)=>`<code>${$(Z)}</code>`)}function V7(_){if(!_)return _;let $=new DOMParser().parseFromString(_,"text/html"),j=$.createTreeWalker($.body,NodeFilter.SHOW_TEXT),Z=(Q)=>Q.replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&quot;/g,'"').replace(/&#39;/g,"'").replace(/&amp;/g,"&"),Y;while(Y=j.nextNode()){if(!Y.nodeValue)continue;let Q=Z(Y.nodeValue);if(Q!==Y.nodeValue)Y.nodeValue=Q}return $.body.innerHTML}function sN(_){if(!window.katex)return _;let $=(q)=>N7(q).replace(/&gt;/g,">").replace(/&lt;/g,"<").replace(/&amp;/g,"&").replace(/<br\s*\/?\s*>/gi,`
`),j=(q)=>{let N=[],K=q.replace(/<pre\b[^>]*>\s*<code\b[^>]*>[\s\S]*?<\/code>\s*<\/pre>/gi,(G)=>{let X=N.length;return N.push(G),`@@CODE_BLOCK_${X}@@`});return K=K.replace(/<code\b[^>]*>[\s\S]*?<\/code>/gi,(G)=>{let X=N.length;return N.push(G),`@@CODE_INLINE_${X}@@`}),{html:K,blocks:N}},Z=(q,N)=>{if(!N.length)return q;return q.replace(/@@CODE_(?:BLOCK|INLINE)_(\d+)@@/g,(K,G)=>{let X=Number(G);return N[X]??""})},Y=j(_),Q=Y.html;return Q=Q.replace(/(^|\n|<br\s*\/?\s*>|<p>|<\/p>)\s*\$\$([\s\S]+?)\$\$\s*(?=\n|<br\s*\/?\s*>|<\/p>|$)/gi,(q,N,K)=>{try{let G=katex.renderToString($(K.trim()),{displayMode:!0,throwOnError:!1});return`${N}${G}`}catch(G){return`<span class="math-error" title="${K$(G.message)}">${q}</span>`}}),Q=Q.replace(/(^|[^\\$])\$(?!\s)([^\n$]+?)\$/g,(q,N,K)=>{if(/\s$/.test(K))return q;try{let G=katex.renderToString($(K),{displayMode:!1,throwOnError:!1});return`${N}${G}`}catch(G){return`${N}<span class="math-error" title="${K$(G.message)}">$${K}$</span>`}}),Z(Q,Y.blocks)}function aN(_){if(!_)return _;let $=new DOMParser().parseFromString(_,"text/html"),j=$.createTreeWalker($.body,NodeFilter.SHOW_TEXT),Z=[],Y;while(Y=j.nextNode())Z.push(Y);for(let Q of Z){let q=Q.nodeValue;if(!q)continue;if(E8.lastIndex=0,!E8.test(q))continue;E8.lastIndex=0;let N=Q.parentElement;if(N&&(N.closest("a")||N.closest("code")||N.closest("pre")))continue;let K=q.split(E8);if(K.length<=1)continue;let G=$.createDocumentFragment();K.forEach((X,V)=>{if(V%2===1){let U=$.createElement("a");U.setAttribute("href","#"),U.className="hashtag",U.setAttribute("data-hashtag",X),U.textContent=`#${X}`,G.appendChild(U)}else G.appendChild($.createTextNode(X))}),Q.parentNode?.replaceChild(G,Q)}return $.body.innerHTML}function tN(_){if(!_)return _;let j=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),Z=[],Y=!1;for(let Q of j){if(!Y&&Q.trim().match(/^```(?:math|katex|latex)\s*$/i)){Y=!0,Z.push("$$");continue}if(Y&&Q.trim().match(/^```\s*$/)){Y=!1,Z.push("$$");continue}Z.push(Q)}return Z.join(`
`)}function eN(_){let $=tN(_||""),{text:j,blocks:Z}=cN($),Y=k8(j,2),q=K7(Y).replace(/</g,"&lt;");return{safeHtml:G7(q),mermaidBlocks:Z}}function G_(_,$,j={}){if(!_)return"";let{safeHtml:Z,mermaidBlocks:Y}=eN(_),Q=window.marked?marked.parse(Z,{headerIds:!1,mangle:!1}):Z.replace(/\n/g,"<br>");return Q=X7(Q),Q=V7(Q),Q=sN(Q),Q=aN(Q),Q=iN(Q,Y),Q=q7(Q,j),Q}function v5(_){if(!_)return"";let $=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`),j=k8($,2),Y=K7(j).replace(/</g,"&lt;").replace(/>/g,"&gt;"),Q=G7(Y),q=window.marked?marked.parse(Q):Q.replace(/\n/g,"<br>");return q=X7(q),q=V7(q),q=q7(q),q}function _K(_,$=6){return _.replace(/<polyline\b([^>]*)\bpoints="([^"]+)"([^>]*)\/?\s*>/g,(j,Z,Y,Q)=>{let q=Y.trim().split(/\s+/).map((K)=>{let[G,X]=K.split(",").map(Number);return{x:G,y:X}});if(q.length<3)return`<polyline${Z}points="${Y}"${Q}/>`;let N=[`M ${q[0].x},${q[0].y}`];for(let K=1;K<q.length-1;K++){let G=q[K-1],X=q[K],V=q[K+1],U=X.x-G.x,L=X.y-G.y,F=V.x-X.x,J=V.y-X.y,H=Math.sqrt(U*U+L*L),W=Math.sqrt(F*F+J*J),D=Math.min($,H/2,W/2);if(D<0.5){N.push(`L ${X.x},${X.y}`);continue}let E=X.x-U/H*D,C=X.y-L/H*D,P=X.x+F/W*D,v=X.y+J/W*D,M=U*J-L*F>0?1:0;N.push(`L ${E},${C}`),N.push(`A ${D},${D} 0 0 ${M} ${P},${v}`)}return N.push(`L ${q[q.length-1].x},${q[q.length-1].y}`),`<path${Z}d="${N.join(" ")}"${Q}/>`})}async function Y4(_){if(!window.beautifulMermaid)return;let{renderMermaid:$,THEMES:j}=window.beautifulMermaid,Y=Q7()==="dark"?j["tokyo-night"]:j["github-light"],Q=_.querySelectorAll(".mermaid-container[data-mermaid]");for(let q of Q)try{let N=q.dataset.mermaid,K=dN(N||""),G=k8(K,2),X=await $(G,{...Y,transparent:!0});X=_K(X),q.innerHTML=X,q.removeAttribute("data-mermaid")}catch(N){console.error("Mermaid render error:",N);let K=document.createElement("pre");K.className="mermaid-error",K.textContent=`Diagram error: ${N.message}`,q.innerHTML="",q.appendChild(K),q.removeAttribute("data-mermaid")}}function U7(_){let $=new Date(_);if(Number.isNaN($.getTime()))return _;let Z=new Date-$,Y=Z/1000,Q=86400000;if(Z<Q){if(Y<60)return"just now";if(Y<3600)return`${Math.floor(Y/60)}m`;return`${Math.floor(Y/3600)}h`}if(Z<5*Q){let K=$.toLocaleDateString(void 0,{weekday:"short"}),G=$.toLocaleTimeString(void 0,{hour:"2-digit",minute:"2-digit"});return`${K} ${G}`}let q=$.toLocaleDateString(void 0,{month:"short",day:"numeric"}),N=$.toLocaleTimeString(void 0,{hour:"2-digit",minute:"2-digit"});return`${q} ${N}`}function b5(_){if(!Number.isFinite(_))return"0";return Math.round(_).toLocaleString()}function A_(_){if(_<1024)return _+" B";if(_<1048576)return(_/1024).toFixed(1)+" KB";return(_/1048576).toFixed(1)+" MB"}function g4(_){let $=new Date(_);if(Number.isNaN($.getTime()))return _;return $.toLocaleString()}function J4(_){return String(_||"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}function $K(_,$){let j=String(_||"").trim();if(!j)return j;if(/^[a-zA-Z][a-zA-Z\d+.-]*:/.test(j)||j.startsWith("#")||j.startsWith("data:")||j.startsWith("blob:"))return j;let Z=j.match(/^([^?#]*)(\?[^#]*)?(#.*)?$/),Y=Z?.[1]||j,Q=Z?.[2]||"",q=Z?.[3]||"",N=String($||"").split("/").slice(0,-1).join("/"),G=Y.startsWith("/")?Y:`${N?`${N}/`:""}${Y}`,X=[];for(let U of G.split("/")){if(!U||U===".")continue;if(U===".."){if(X.length>0)X.pop();continue}X.push(U)}let V=X.join("/");return`${K8(V)}${Q}${q}`}function g5(_){return _?.preview||null}function jK(_){let $=String(_||""),j=Math.max($.lastIndexOf("/"),$.lastIndexOf("\\")),Z=j>=0?$.slice(j+1):$,Y=Z.lastIndexOf(".");if(Y<=0||Y===Z.length-1)return"none";return Z.slice(Y+1)}function ZK(_){if(!_)return"unknown";if(_.kind==="image")return"image";if(_.kind==="text")return _.content_type==="text/markdown"?"markdown":"text";if(_.kind==="binary")return"binary";return String(_.kind||"unknown")}function YK(_,$){let j=$?.path||_?.path||"",Z=[];if($?.content_type)Z.push(`<span><strong>type:</strong> ${J4($.content_type)}</span>`);if(typeof $?.size==="number")Z.push(`<span><strong>size:</strong> ${J4(A_($.size))}</span>`);if($?.mtime)Z.push(`<span><strong>modified:</strong> ${J4(g4($.mtime))}</span>`);if(Z.push(`<span><strong>kind:</strong> ${J4(ZK($))}</span>`),Z.push(`<span><strong>extension:</strong> ${J4(jK(j))}</span>`),j)Z.push(`<span><strong>path:</strong> ${J4(j)}</span>`);if($?.truncated)Z.push("<span><strong>content:</strong> truncated</span>");return`<div class="workspace-preview-meta workspace-preview-meta-inline">${Z.join("")}</div>`}function QK(_){let $=g5(_);if(!$)return'<div class="workspace-preview-text">No preview available.</div>';let j=YK(_,$);if($.kind==="image"){let Z=$.url||($.path?K8($.path):"");return`${j}
            <div class="workspace-preview-image">
                <img src="${J4(Z)}" alt="preview" />
            </div>
        `}if($.kind==="text"){if($.content_type==="text/markdown"){let Z=G_($.text||"",null,{rewriteImageSrc:(Y)=>$K(Y,$.path||_?.path)});return`${j}<div class="workspace-preview-text">${Z}</div>`}return`${j}<pre class="workspace-preview-text"><code>${J4($.text||"")}</code></pre>`}if($.kind==="binary")return`${j}<div class="workspace-preview-text">Binary file — download to view.</div>`;return`${j}<div class="workspace-preview-text">No preview available.</div>`}class G${constructor(_,$){this.container=_,this.context=$,this.disposed=!1,this.host=document.createElement("div"),this.host.className="workspace-preview-render-host",this.host.tabIndex=0,this.container.appendChild(this.host),this.render()}render(){if(this.disposed)return;this.host.innerHTML=QK(this.context)}getContent(){let _=g5(this.context);return typeof _?.text==="string"?_.text:void 0}isDirty(){return!1}setContent(_,$){let j=g5(this.context);if(j&&j.kind==="text"){if(j.text=_,$!==void 0)j.mtime=$}if(this.context.content=_,$!==void 0)this.context.mtime=$;this.render()}focus(){this.host?.focus?.()}dispose(){if(this.disposed)return;this.disposed=!0,this.host?.remove(),this.container.innerHTML=""}}var X$={id:"workspace-markdown-preview",label:"Workspace Markdown Preview",icon:"preview",capabilities:["preview","readonly"],placement:"tabs",canHandle(_){let $=g5(_);if(_?.mode!=="view")return!1;if(!$||$.kind!=="text")return!1;return $.content_type==="text/markdown"?20:!1},mount(_,$){return new G$(_,$)}},V$={id:"workspace-preview-default",label:"Workspace Preview",icon:"preview",capabilities:["preview","readonly"],placement:"tabs",canHandle(_){if(_?.mode!=="view")return!1;return g5(_)||_?.path?1:!1},mount(_,$){return new G$(_,$)}};var qK=new Set([".docx",".doc",".odt",".rtf",".xlsx",".xls",".ods",".csv",".pptx",".ppt",".odp"]),NK={".docx":"Word Document",".doc":"Word (Legacy)",".odt":"OpenDocument Text",".rtf":"Rich Text",".xlsx":"Excel Spreadsheet",".xls":"Excel (Legacy)",".ods":"OpenDocument Spreadsheet",".csv":"CSV Data",".pptx":"PowerPoint",".ppt":"PowerPoint (Legacy)",".odp":"OpenDocument Presentation"},KK={".docx":"\uD83D\uDCDD",".doc":"\uD83D\uDCDD",".odt":"\uD83D\uDCDD",".rtf":"\uD83D\uDCDD",".xlsx":"\uD83D\uDCCA",".xls":"\uD83D\uDCCA",".ods":"\uD83D\uDCCA",".csv":"\uD83D\uDCCA",".pptx":"\uD83D\uDCFD️",".ppt":"\uD83D\uDCFD️",".odp":"\uD83D\uDCFD️"};function W7(_){if(!_)return"";let $=_.lastIndexOf(".");if($<0)return"";return _.slice($).toLowerCase()}function L7(_){return _.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}class B7{container;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Z=j.split("/").pop()||"document",Y=W7(j),Q=KK[Y]||"\uD83D\uDCC4",q=NK[Y]||"Office Document",N=document.createElement("div");N.style.cssText="width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:var(--bg-primary,#1a1a1a);",N.innerHTML=`
            <div style="text-align:center;max-width:360px;padding:24px;">
                <div style="font-size:56px;margin-bottom:12px;">${Q}</div>
                <div style="font-size:14px;font-weight:600;color:var(--text-primary,#e0e0e0);margin-bottom:4px;word-break:break-word;">${L7(Z)}</div>
                <div style="font-size:11px;color:var(--text-secondary,#888);margin-bottom:20px;">${L7(q)}</div>
                <button id="ov-open-tab" style="padding:8px 20px;background:var(--accent-color,#1d9bf0);color:var(--accent-contrast-text,#fff);
                    border:none;border-radius:5px;font-size:13px;font-weight:500;cursor:pointer;
                    transition:background 0.15s;"
                    onmouseenter="this.style.background='var(--accent-hover,#1a8cd8)'"
                    onmouseleave="this.style.background='var(--accent-color,#1d9bf0)'">
                    Open in Tab
                </button>
            </div>
        `,_.appendChild(N);let K=N.querySelector("#ov-open-tab");if(K)K.addEventListener("click",()=>{let G=new CustomEvent("office-viewer:open-tab",{bubbles:!0,detail:{path:j}});_.dispatchEvent(G)})}getContent(){return}isDirty(){return!1}focus(){}resize(){}dispose(){if(this.disposed)return;this.disposed=!0,this.container.innerHTML=""}}class z7{container;iframe=null;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Z=j.split("/").pop()||"document",Y=`/workspace/raw?path=${encodeURIComponent(j)}`,Q=`/office-viewer/?url=${encodeURIComponent(Y)}&name=${encodeURIComponent(Z)}`;this.iframe=document.createElement("iframe"),this.iframe.src=Q,this.iframe.style.cssText="width:100%;height:100%;border:none;background:#1e1e1e;",_.appendChild(this.iframe)}getContent(){return}isDirty(){return!1}focus(){this.iframe?.focus()}resize(){}dispose(){if(this.disposed)return;if(this.disposed=!0,this.iframe)this.iframe.src="about:blank",this.iframe=null;this.container.innerHTML=""}}var U$={id:"office-viewer",label:"Office Viewer",icon:"file-text",capabilities:["readonly","preview"],placement:"tabs",canHandle(_){let $=W7(_?.path);if(!$||!qK.has($))return!1;return 50},mount(_,$){if($?.mode==="view")return new B7(_,$);return new z7(_,$)}};var GK=/\.(csv|tsv)$/i;function F7(_){return _.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}class H7{container;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Z=j.split("/").pop()||"table.csv",Y=j.toLowerCase().endsWith(".tsv")?"TSV Table":"CSV Table",Q=document.createElement("div");Q.style.cssText="width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:var(--bg-primary,#1a1a1a);",Q.innerHTML=`
            <div style="text-align:center;max-width:360px;padding:24px;">
                <div style="font-size:56px;margin-bottom:12px;">\uD83D\uDCCA</div>
                <div style="font-size:14px;font-weight:600;color:var(--text-primary,#e0e0e0);margin-bottom:4px;word-break:break-word;">${F7(Z)}</div>
                <div style="font-size:11px;color:var(--text-secondary,#888);margin-bottom:20px;">${F7(Y)}</div>
                <button id="csv-open-tab" style="padding:8px 20px;background:var(--accent-color,#1d9bf0);color:var(--accent-contrast-text,#fff);
                    border:none;border-radius:5px;font-size:13px;font-weight:500;cursor:pointer;
                    transition:background 0.15s;"
                    onmouseenter="this.style.background='var(--accent-hover,#1a8cd8)'"
                    onmouseleave="this.style.background='var(--accent-color,#1d9bf0)'">
                    Open in Tab
                </button>
            </div>
        `,_.appendChild(Q);let q=Q.querySelector("#csv-open-tab");if(q)q.addEventListener("click",()=>{let N=new CustomEvent("csv-viewer:open-tab",{bubbles:!0,detail:{path:j}});_.dispatchEvent(N)})}getContent(){return}isDirty(){return!1}focus(){}resize(){}dispose(){if(this.disposed)return;this.disposed=!0,this.container.innerHTML=""}}class J7{container;iframe=null;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Z=`/csv-viewer/?path=${encodeURIComponent(j)}`;this.iframe=document.createElement("iframe"),this.iframe.src=Z,this.iframe.style.cssText="width:100%;height:100%;border:none;background:var(--bg-primary,#000);",_.appendChild(this.iframe)}getContent(){return}isDirty(){return!1}focus(){this.iframe?.focus()}resize(){}dispose(){if(this.disposed)return;if(this.disposed=!0,this.iframe)this.iframe.src="about:blank",this.iframe=null;this.container.innerHTML=""}}var L$={id:"csv-viewer",label:"CSV Viewer",icon:"table",capabilities:["readonly","preview"],placement:"tabs",canHandle(_){let $=_?.path||"";if(!GK.test($))return!1;return 55},mount(_,$){if($?.mode==="view")return new H7(_,$);return new J7(_,$)}};var XK=/\.pdf$/i;function VK(_){return _.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}class O7{container;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Z=j.split("/").pop()||"document.pdf",Y=document.createElement("div");Y.style.cssText="width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:var(--bg-primary,#1a1a1a);",Y.innerHTML=`
            <div style="text-align:center;max-width:360px;padding:24px;">
                <div style="font-size:56px;margin-bottom:12px;">\uD83D\uDCC4</div>
                <div style="font-size:14px;font-weight:600;color:var(--text-primary,#e0e0e0);margin-bottom:4px;word-break:break-word;">${VK(Z)}</div>
                <div style="font-size:11px;color:var(--text-secondary,#888);margin-bottom:20px;">PDF Document</div>
                <button id="pdf-open-tab" style="padding:8px 20px;background:var(--accent-color,#1d9bf0);color:var(--accent-contrast-text,#fff);
                    border:none;border-radius:5px;font-size:13px;font-weight:500;cursor:pointer;
                    transition:background 0.15s;"
                    onmouseenter="this.style.background='var(--accent-hover,#1a8cd8)'"
                    onmouseleave="this.style.background='var(--accent-color,#1d9bf0)'">
                    Open in Tab
                </button>
            </div>
        `,_.appendChild(Y);let Q=Y.querySelector("#pdf-open-tab");if(Q)Q.addEventListener("click",()=>{let q=new CustomEvent("pdf-viewer:open-tab",{bubbles:!0,detail:{path:j}});_.dispatchEvent(q)})}getContent(){return}isDirty(){return!1}focus(){}resize(){}dispose(){if(this.disposed)return;this.disposed=!0,this.container.innerHTML=""}}class D7{container;iframe=null;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Z=`/pdf-viewer/?path=${encodeURIComponent(j)}`;this.iframe=document.createElement("iframe"),this.iframe.src=Z,this.iframe.style.cssText="width:100%;height:100%;border:none;background:#1e1e1e;",_.appendChild(this.iframe)}getContent(){return}isDirty(){return!1}focus(){this.iframe?.focus()}resize(){}dispose(){if(this.disposed)return;if(this.disposed=!0,this.iframe)this.iframe.src="about:blank",this.iframe=null;this.container.innerHTML=""}}var W$={id:"pdf-viewer",label:"PDF Viewer",icon:"file-text",capabilities:["readonly","preview"],placement:"tabs",canHandle(_){let $=_?.path||"";if(!XK.test($))return!1;return 52},mount(_,$){if($?.mode==="view")return new O7(_,$);return new D7(_,$)}};var UK=/\.(png|jpe?g|gif|webp|bmp|ico|svg)$/i;function B$(_){return _.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}class A7{container;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Z=j.split("/").pop()||"image",Y=`/workspace/raw?path=${encodeURIComponent(j)}`,Q=document.createElement("div");Q.style.cssText="width:100%;height:100%;display:flex;flex-direction:column;background:var(--bg-primary,#1a1a1a);",Q.innerHTML=`
            <div style="flex:1;min-height:0;display:flex;align-items:center;justify-content:center;overflow:hidden;padding:16px;">
                <img src="${B$(Y)}" alt="${B$(Z)}" style="max-width:100%;max-height:100%;object-fit:contain;border-radius:4px;" />
            </div>
            <div style="display:flex;align-items:center;justify-content:space-between;padding:8px 16px;border-top:1px solid var(--border-color,#333);flex-shrink:0;">
                <div style="font-size:12px;color:var(--text-secondary,#888);overflow:hidden;text-overflow:ellipsis;white-space:nowrap;min-width:0;">${B$(Z)}</div>
                <button id="img-open-tab" style="padding:5px 14px;background:var(--accent-color,#1d9bf0);color:var(--accent-contrast-text,#fff);
                    border:none;border-radius:4px;font-size:12px;font-weight:500;cursor:pointer;flex-shrink:0;
                    transition:background 0.15s;"
                    onmouseenter="this.style.background='var(--accent-hover,#1a8cd8)'"
                    onmouseleave="this.style.background='var(--accent-color,#1d9bf0)'">
                    Open in Tab
                </button>
            </div>
        `,_.appendChild(Q);let q=Q.querySelector("#img-open-tab");if(q)q.addEventListener("click",()=>{let N=new CustomEvent("image-viewer:open-tab",{bubbles:!0,detail:{path:j}});_.dispatchEvent(N)})}getContent(){return}isDirty(){return!1}focus(){}resize(){}dispose(){if(this.disposed)return;this.disposed=!0,this.container.innerHTML=""}}class E7{container;iframe=null;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Z=`/image-viewer/?path=${encodeURIComponent(j)}`;this.iframe=document.createElement("iframe"),this.iframe.src=Z,this.iframe.style.cssText="width:100%;height:100%;border:none;background:var(--bg-primary,#000);",_.appendChild(this.iframe)}getContent(){return}isDirty(){return!1}focus(){this.iframe?.focus()}resize(){}dispose(){if(this.disposed)return;if(this.disposed=!0,this.iframe)this.iframe.src="about:blank",this.iframe=null;this.container.innerHTML=""}}var z$={id:"image-viewer",label:"Image Viewer",icon:"image",capabilities:["readonly","preview"],placement:"tabs",canHandle(_){let $=_?.path||"";if(!UK.test($))return!1;return 48},mount(_,$){if($?.mode==="view")return new A7(_,$);return new E7(_,$)}};var LK=/\.(mp4|m4v|mov|webm|ogv)$/i;function WK(_){return _.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}class k7{container;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Z=j.split("/").pop()||"video.mp4",Y=document.createElement("div");Y.style.cssText="width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:var(--bg-primary,#1a1a1a);",Y.innerHTML=`
            <div style="text-align:center;max-width:360px;padding:24px;">
                <div style="font-size:56px;margin-bottom:12px;">\uD83C\uDFAC</div>
                <div style="font-size:14px;font-weight:600;color:var(--text-primary,#e0e0e0);margin-bottom:4px;word-break:break-word;">${WK(Z)}</div>
                <div style="font-size:11px;color:var(--text-secondary,#888);margin-bottom:20px;">Video File</div>
                <button id="video-open-tab" style="padding:8px 20px;background:var(--accent-color,#1d9bf0);color:var(--accent-contrast-text,#fff);
                    border:none;border-radius:5px;font-size:13px;font-weight:500;cursor:pointer;
                    transition:background 0.15s;"
                    onmouseenter="this.style.background='var(--accent-hover,#1a8cd8)'"
                    onmouseleave="this.style.background='var(--accent-color,#1d9bf0)'">
                    Open in Tab
                </button>
            </div>
        `,_.appendChild(Y);let Q=Y.querySelector("#video-open-tab");if(Q)Q.addEventListener("click",()=>{let q=new CustomEvent("video-viewer:open-tab",{bubbles:!0,detail:{path:j}});_.dispatchEvent(q)})}getContent(){return}isDirty(){return!1}focus(){}resize(){}dispose(){if(this.disposed)return;this.disposed=!0,this.container.innerHTML=""}}class I7{container;iframe=null;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Z=`/video-viewer/?path=${encodeURIComponent(j)}`;this.iframe=document.createElement("iframe"),this.iframe.src=Z,this.iframe.style.cssText="width:100%;height:100%;border:none;background:#111;",_.appendChild(this.iframe)}getContent(){return}isDirty(){return!1}focus(){this.iframe?.focus()}resize(){}dispose(){if(this.disposed)return;if(this.disposed=!0,this.iframe)this.iframe.src="about:blank",this.iframe=null;this.container.innerHTML=""}}var F$={id:"video-viewer",label:"Video Viewer",icon:"play-circle",capabilities:["readonly","preview"],placement:"tabs",canHandle(_){let $=_?.path||"";if(!LK.test($))return!1;return 54},mount(_,$){if($?.mode==="view")return new k7(_,$);return new I7(_,$)}};function BK(_){if(!_)return!1;let $=_.toLowerCase();return $.endsWith(".drawio")||$.endsWith(".drawio.xml")||$.endsWith(".drawio.svg")||$.endsWith(".drawio.png")}function zK(_){return _.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}var H$='<mxfile host="app.diagrams.net"><diagram id="page-1" name="Page-1"><mxGraphModel dx="1260" dy="720" grid="1" gridSize="10" guides="1" tooltips="1" connect="1" arrows="1" fold="1" page="1" pageScale="1" pageWidth="850" pageHeight="1100" math="0" shadow="0"><root><mxCell id="0"/><mxCell id="1" parent="0"/></root></mxGraphModel></diagram></mxfile>';function M7(_){let $=String(_||"").trim();return $?$:H$}function FK(_){let $=String(_||"").toLowerCase();if($.endsWith(".drawio.svg")||$.endsWith(".svg"))return"xmlsvg";if($.endsWith(".drawio.png")||$.endsWith(".png"))return"xmlpng";return"xml"}function HK(_){let $="",j=32768;for(let Z=0;Z<_.length;Z+=j)$+=String.fromCharCode(..._.subarray(Z,Z+j));return btoa($)}function JK(_,$="*"){try{let j=(Q)=>{let q=_.parent||_.opener;if(!q)return!1;return q.postMessage(JSON.stringify({event:"workspace-export",...Q}),$),!0},Z=_.EditorUi;if(Z?.prototype&&!Z.prototype.__piclawWorkspaceSavePatched){let Q=Z.prototype.saveData;Z.prototype.saveData=function(q,N,K,G,X,V){try{if(q&&K!=null&&j({filename:q,format:N,data:K,mimeType:G,base64Encoded:Boolean(X),defaultMode:V}))return}catch(U){console.warn("[drawio-pane] saveData intercept failed, falling back to native save",U)}return Q.apply(this,arguments)},Z.prototype.__piclawWorkspaceSavePatched=!0}let Y=_.App;if(Y?.prototype&&!Y.prototype.__piclawExportPatched){let Q=Y.prototype.exportFile;Y.prototype.exportFile=function(q,N,K,G,X,V){try{if(N&&j({filename:N,data:q,mimeType:K,base64Encoded:Boolean(G),mode:X,folderId:V}))return}catch(U){console.warn("[drawio-pane] export intercept failed, falling back to native export",U)}return Q.apply(this,arguments)},Y.prototype.__piclawExportPatched=!0}return Boolean(Z?.prototype&&Z.prototype.__piclawWorkspaceSavePatched||Y?.prototype&&Y.prototype.__piclawExportPatched)}catch{return!1}}async function T7(_,$){let j=new Uint8Array(await _.arrayBuffer());return`data:${_.headers.get("Content-Type")||$};base64,${HK(j)}`}class x7{container;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Z=j.split("/").pop()||"diagram.drawio",Y=document.createElement("div");Y.style.cssText="width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:var(--bg-primary,#1a1a1a);",Y.innerHTML=`
            <div style="text-align:center;max-width:360px;padding:24px;">
                <div style="font-size:56px;margin-bottom:12px;">\uD83D\uDCD0</div>
                <div style="font-size:14px;font-weight:600;color:var(--text-primary,#e0e0e0);margin-bottom:4px;word-break:break-word;">${zK(Z)}</div>
                <div style="font-size:11px;color:var(--text-secondary,#888);margin-bottom:20px;">Draw.io Diagram</div>
                <button id="drawio-open-tab" style="padding:8px 20px;background:var(--accent-color,#1d9bf0);color:var(--accent-contrast-text,#fff);
                    border:none;border-radius:5px;font-size:13px;font-weight:500;cursor:pointer;
                    transition:background 0.15s;"
                    onmouseenter="this.style.background='var(--accent-hover,#1a8cd8)'"
                    onmouseleave="this.style.background='var(--accent-color,#1d9bf0)'">
                    Edit in Tab
                </button>
            </div>
        `,_.appendChild(Y);let Q=Y.querySelector("#drawio-open-tab");if(Q)Q.addEventListener("click",()=>{let q=new CustomEvent("drawio:open-tab",{bubbles:!0,detail:{path:j}});_.dispatchEvent(q)})}getContent(){return}isDirty(){return!1}focus(){}resize(){}dispose(){if(this.disposed)return;this.disposed=!0,this.container.innerHTML=""}}class y7{container;iframe=null;overlay=null;disposed=!1;filePath;fileName;format;xmlData="";fileLoaded=!1;editorReady=!1;loadSent=!1;saveChain=Promise.resolve();onMessageBound;constructor(_,$){this.container=_,this.filePath=$.path||"",this.fileName=this.filePath.split("/").pop()||"diagram.drawio",this.format=FK(this.filePath),this.onMessageBound=this.onMessage.bind(this);let j=document.createElement("div");j.style.cssText="position:relative;width:100%;height:100%;background:#1e1e1e;",this.overlay=document.createElement("div"),this.overlay.style.cssText="position:absolute;inset:0;display:flex;align-items:center;justify-content:center;color:#999;font:14px system-ui,sans-serif;z-index:1;pointer-events:none;",this.overlay.textContent="Loading draw.io editor…",j.appendChild(this.overlay);let Y=`/drawio/index.html?embed=1&proto=json&spin=1&modified=0&noSaveBtn=1&noExitBtn=1&saveAndExit=0&libraries=0&ui=dark&dark=${window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?"1":"0"}`;this.iframe=document.createElement("iframe"),this.iframe.src=Y,this.iframe.style.cssText="width:100%;height:100%;border:none;background:#1e1e1e;position:relative;z-index:0;",this.iframe.addEventListener("load",()=>{let Q=()=>{if(!this.iframe?.contentWindow||this.disposed)return;if(JK(this.iframe.contentWindow))return;setTimeout(Q,250)};Q()}),j.appendChild(this.iframe),_.appendChild(j),window.addEventListener("message",this.onMessageBound),this.loadFile()}async loadFile(){if(!this.filePath){this.xmlData=H$,this.fileLoaded=!0,this.trySendLoad();return}try{let _=await fetch(`/workspace/raw?path=${encodeURIComponent(this.filePath)}`);if(_.ok)if(this.format==="xmlsvg")this.xmlData=await T7(_,"image/svg+xml");else if(this.format==="xmlpng")this.xmlData=await T7(_,"image/png");else this.xmlData=M7(await _.text());else if(_.status===404)this.xmlData=H$;else throw Error(`HTTP ${_.status}`);this.fileLoaded=!0,this.trySendLoad()}catch(_){if(this.overlay)this.overlay.textContent=`Failed to load: ${_ instanceof Error?_.message:String(_)}`}}trySendLoad(){if(this.disposed||this.loadSent||!this.editorReady||!this.fileLoaded||!this.iframe?.contentWindow)return;if(this.loadSent=!0,this.iframe.contentWindow.postMessage(JSON.stringify({action:"load",xml:this.format==="xml"?M7(this.xmlData):this.xmlData,autosave:1,saveAndExit:"0",noSaveBtn:"1",noExitBtn:"1",title:this.fileName}),"*"),this.overlay)this.overlay.style.display="none"}queueSave(_,$){if(!this.filePath)return;this.saveChain=this.saveChain.then(async()=>{let j=await fetch("/drawio/save",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({path:this.filePath,format:_.format||this.format,xml:_.xml,data:_.data,mimeType:_.mimeType,filename:_.filename,base64Encoded:_.base64Encoded})});if(!j.ok)throw Error(`HTTP ${j.status}`);if($&&this.iframe?.contentWindow)this.iframe.contentWindow.postMessage(JSON.stringify({action:"status",message:"Saved",modified:!1}),"*")}).catch((j)=>{if(console.error("[drawio-pane] save failed:",j),this.overlay)this.overlay.style.display="flex",this.overlay.textContent=`Save failed: ${j instanceof Error?j.message:String(j)}`})}onMessage(_){if(this.disposed||_.source!==this.iframe?.contentWindow)return;let $;try{$=typeof _.data==="string"?JSON.parse(_.data):_.data}catch{return}switch($?.event){case"init":this.editorReady=!0,this.trySendLoad();break;case"autosave":if(this.format==="xml"){if(typeof $.xml==="string")this.queueSave({xml:$.xml,format:"xml"},!1)}else if(typeof $.xml==="string")this.xmlData=$.xml;break;case"save":if(this.format==="xml"){if(typeof $.xml==="string")this.queueSave({xml:$.xml,format:"xml"},!0)}else if(typeof $.xml==="string"&&this.iframe?.contentWindow)this.xmlData=$.xml,this.iframe.contentWindow.postMessage(JSON.stringify({action:"export",format:this.format,xml:$.xml,spinKey:"export"}),"*");break;case"export":if(typeof $.data==="string")this.queueSave({data:$.data,format:this.format,xml:typeof $.xml==="string"?$.xml:void 0},!0);break;case"workspace-export":if(typeof $.data==="string")this.queueSave({data:$.data,xml:typeof $.xml==="string"?$.xml:void 0,mimeType:typeof $.mimeType==="string"?$.mimeType:void 0,filename:typeof $.filename==="string"?$.filename:void 0,base64Encoded:Boolean($.base64Encoded),format:this.format},!0);break;case"exit":default:break}}getContent(){return}isDirty(){return!1}focus(){this.iframe?.focus()}resize(){}dispose(){if(this.disposed)return;if(this.disposed=!0,window.removeEventListener("message",this.onMessageBound),this.iframe)this.iframe.src="about:blank",this.iframe=null;this.overlay=null,this.container.innerHTML=""}}var J$={id:"drawio-editor",label:"Draw.io Editor",icon:"git-merge",capabilities:["edit","preview"],placement:"tabs",canHandle(_){if(!BK(_?.path))return!1;return 60},mount(_,$){if($?.mode==="view")return new x7(_,$);return new y7(_,$)}};var OK=/\.mindmap\.ya?ml$/i,O$=String(Date.now());function P7(){let _=document.documentElement?.dataset?.theme;if(_==="dark")return!0;if(_==="light")return!1;try{return!!window.matchMedia?.("(prefers-color-scheme: dark)")?.matches}catch{return!1}}function D$(_){let $=_.split("?")[0];if(document.querySelector(`script[data-src="${$}"]`))return Promise.resolve();let Z=document.querySelector(`script[src="${$}"]`);if(Z)Z.remove();return new Promise((Y,Q)=>{let q=document.createElement("script");q.src=_,q.dataset.src=$,q.onload=()=>Y(),q.onerror=()=>Q(Error(`Failed to load ${_}`)),document.head.appendChild(q)})}function DK(_){if(document.querySelector(`link[href="${_}"]`))return;let $=document.createElement("link");$.rel="stylesheet",$.href=_,document.head.appendChild($)}function AK(_){let $=document.createElementNS("http://www.w3.org/2000/svg","svg");$.id="mindmap-svg",$.setAttribute("width","100%"),$.setAttribute("height","100%"),$.style.cssText="display:block;position:absolute;inset:0;",_.appendChild($);let j=document.createElement("div");j.id="toolbar",j.className="mindmap-toolbar",j.innerHTML=`
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
    `,_.appendChild(j);let Z=document.createElement("div");Z.id="context-menu",Z.className="context-menu hidden",Z.innerHTML=`
        <button data-action="cut">Cut</button>
        <button data-action="copy">Copy</button>
        <button data-action="paste">Paste</button>
        <hr/>
        <button data-action="add-child">Add child</button>
        <button data-action="add-sibling">Add sibling</button>
        <hr/>
        <button data-action="delete">Delete</button>
    `,_.appendChild(Z)}class C7{container;constructor(_,$){this.container=_;let j=$.path||"",Z=j.split("/").pop()||"mindmap",Y=document.createElement("div");Y.style.cssText="width:100%;height:100%;display:flex;flex-direction:column;background:var(--bg-primary);",Y.innerHTML=`
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
            </div>`,_.appendChild(Y),Y.querySelector("#mm-open-tab")?.addEventListener("click",()=>{_.dispatchEvent(new CustomEvent("mindmap:open-tab",{bubbles:!0,detail:{path:j}}))})}getContent(){return}isDirty(){return!1}focus(){}resize(){}dispose(){this.container.innerHTML=""}}class S7{container;filePath;dirty=!1;dirtyCallback=null;disposed=!1;mindmapEl=null;pendingContent=null;lastContent="";themeListener=()=>{window.__mindmapEditor?.setTheme?.(P7())};constructor(_,$){this.container=_,this.filePath=$.path||"",this.init($.content)}async resolveInitialContent(_){if(_!==void 0)return _;if(!this.filePath)return"";try{return(await(await fetch(`/workspace/file?path=${encodeURIComponent(this.filePath)}&max=1000000&mode=edit`)).json())?.text||""}catch{return""}}async init(_){let $=await this.resolveInitialContent(_);if(this.disposed)return;if(this.lastContent=$,DK("/static/css/mindmap.css"),await Promise.all([D$("/static/js/vendor/d3-mindmap.min.js?v="+O$),D$("/static/js/vendor/js-yaml.min.js?v="+O$)]),this.disposed)return;this.mindmapEl=document.createElement("div"),this.mindmapEl.id="mindmap-container",this.mindmapEl.tabIndex=-1,this.mindmapEl.style.cssText="width:100%;height:100%;overflow:hidden;position:relative;outline:none;",this.container.appendChild(this.mindmapEl),AK(this.mindmapEl);let j=P7(),Z=this.filePath.replace(/\/[^/]+$/,"")||"/";try{if(await D$("/static/js/vendor/mindmap-editor.js?v="+O$),this.disposed)return;let Y=window.__mindmapEditor;if(!Y)throw Error("__mindmapEditor not found");if(Y.mount({content:$,isDark:j,onEdit:(Q)=>{this.lastContent=Q,this.dirty=!0,this.dirtyCallback?.(!0),this.saveToWorkspace(Q)},resolveImagePath:(Q)=>{if(Q.startsWith("data:")||Q.startsWith("http"))return Q;return`/workspace/raw?path=${encodeURIComponent(Z+"/"+Q)}`}}),this.pendingContent!==null)Y.update(this.pendingContent),this.lastContent=this.pendingContent,this.pendingContent=null;window.addEventListener("piclaw-theme-change",this.themeListener)}catch(Y){if(console.error("[mindmap] Failed to load mindmap renderer:",Y),this.mindmapEl)this.mindmapEl.innerHTML='<div style="padding:24px;color:var(--text-secondary);">Failed to load mindmap editor.</div>'}}async saveToWorkspace(_){if(!this.filePath)return;try{let $=await fetch("/workspace/file",{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({path:this.filePath,content:_})});if(!$.ok)throw Error(`HTTP ${$.status}`);this.dirty=!1,this.dirtyCallback?.(!1)}catch($){console.error("[mindmap] Save failed:",$)}}getContent(){return}isDirty(){return this.dirty}setContent(_,$){if(_===this.lastContent)return;let j=window.__mindmapEditor;if(j?.update)j.update(_);else this.pendingContent=_;this.lastContent=_,this.dirty=!1,this.dirtyCallback?.(!1)}focus(){this.mindmapEl?.focus()}resize(){window.dispatchEvent(new Event("resize"))}onDirtyChange(_){this.dirtyCallback=_}dispose(){if(this.disposed)return;this.disposed=!0,window.removeEventListener("piclaw-theme-change",this.themeListener),window.__mindmapEditor?.destroy(),this.pendingContent=null,this.container.innerHTML=""}}var A$={id:"mindmap-editor",label:"Mindmap Editor",icon:"mindmap",capabilities:["edit","preview"],placement:"tabs",canHandle(_){let $=_?.path||"";if(!OK.test($))return!1;return 50},mount(_,$){if($?.mode==="view")return new C7(_,$);return new S7(_,$)}};var EK=/\.kanban\.md$/i,kK=String(Date.now());function w7(){let _=document.documentElement?.dataset?.theme;if(_==="dark")return!0;if(_==="light")return!1;try{return!!window.matchMedia?.("(prefers-color-scheme: dark)")?.matches}catch{return!1}}function IK(){let _=window;if(_.preact)return;_.preact={h:Y8,render:z4,Component:o4,createContext:r3},_.preactHooks={useState:m,useEffect:g,useCallback:x,useRef:y,useMemo:m0,useReducer:K6,useContext:a3,useLayoutEffect:D5,useImperativeHandle:s3,useErrorBoundary:e3,useDebugValue:t3},_.htm={bind:()=>z}}function MK(_){let $=_.split("?")[0];if(document.querySelector(`script[data-src="${$}"]`))return Promise.resolve();let Z=document.querySelector(`script[src="${$}"]`);if(Z)Z.remove();return new Promise((Y,Q)=>{let q=document.createElement("script");q.src=_,q.dataset.src=$,q.onload=()=>Y(),q.onerror=()=>Q(Error(`Failed to load ${_}`)),document.head.appendChild(q)})}function TK(_){if(document.querySelector(`link[href="${_}"]`))return;let $=document.createElement("link");$.rel="stylesheet",$.href=_,document.head.appendChild($)}class R7{container;constructor(_,$){this.container=_;let j=$.path||"",Z=j.split("/").pop()||"kanban",Y=document.createElement("div");Y.style.cssText="width:100%;height:100%;display:flex;flex-direction:column;background:var(--bg-primary);",Y.innerHTML=`
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
        `,_.appendChild(Y),Y.querySelector("#kb-open-tab")?.addEventListener("click",()=>{_.dispatchEvent(new CustomEvent("kanban:open-tab",{bubbles:!0,detail:{path:j}}))})}getContent(){return}isDirty(){return!1}focus(){}resize(){}dispose(){this.container.innerHTML=""}}class u7{container;filePath;dirty=!1;dirtyCallback=null;disposed=!1;boardEl=null;pendingContent=null;lastContent="";themeListener=()=>{window.__kanbanEditor?.setTheme?.(w7())};constructor(_,$){this.container=_,this.filePath=$.path||"",this.init($.content)}async resolveInitialContent(_){if(_!==void 0)return _;if(!this.filePath)return"";try{return(await(await fetch(`/workspace/file?path=${encodeURIComponent(this.filePath)}&max=1000000&mode=edit`)).json())?.text||""}catch{return""}}async init(_){let $=await this.resolveInitialContent(_);if(this.disposed)return;this.lastContent=$,TK("/static/css/kanban.css"),this.boardEl=document.createElement("div"),this.boardEl.id="kanban-container",this.boardEl.style.cssText="width:100%;height:100%;overflow:auto;position:relative;",this.container.appendChild(this.boardEl);let j=w7();try{if(IK(),await MK("/static/js/vendor/kanban-editor.js?v="+kK),this.disposed)return;let Z=window.__kanbanEditor;if(!Z)throw Error("__kanbanEditor not found");if(Z.mount(this.boardEl,{content:$,isDark:j,onEdit:(Y)=>{this.lastContent=Y,this.dirty=!0,this.dirtyCallback?.(!0),this.saveToWorkspace(Y)}}),this.pendingContent!==null)Z.update(this.pendingContent),this.lastContent=this.pendingContent,this.pendingContent=null;window.addEventListener("piclaw-theme-change",this.themeListener)}catch(Z){if(console.error("[kanban] Failed to load kanban renderer:",Z),this.boardEl)this.boardEl.innerHTML='<div style="padding:24px;color:var(--text-secondary);">Failed to load kanban editor.</div>'}}async saveToWorkspace(_){if(!this.filePath)return;try{let $=await fetch("/workspace/file",{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({path:this.filePath,content:_})});if(!$.ok)throw Error(`HTTP ${$.status}`);this.dirty=!1,this.dirtyCallback?.(!1)}catch($){console.error("[kanban] Save failed:",$)}}getContent(){return}isDirty(){return this.dirty}setContent(_,$){if(_===this.lastContent)return;let j=window.__kanbanEditor;if(j?.update)j.update(_);else this.pendingContent=_;this.lastContent=_,this.dirty=!1,this.dirtyCallback?.(!1)}focus(){this.boardEl?.focus()}resize(){}onDirtyChange(_){this.dirtyCallback=_}dispose(){if(this.disposed)return;this.disposed=!0,window.removeEventListener("piclaw-theme-change",this.themeListener),window.__kanbanEditor?.destroy(),this.pendingContent=null,this.container.innerHTML=""}}var E$={id:"kanban-editor",label:"Kanban Board",icon:"kanban",capabilities:["edit","preview"],placement:"tabs",canHandle(_){let $=_?.path||"";if(!EK.test($))return!1;return 50},mount(_,$){if($?.mode==="view")return new R7(_,$);return new u7(_,$)}};class f7{tabs=new Map;activeId=null;mruOrder=[];listeners=new Set;onChange(_){return this.listeners.add(_),()=>this.listeners.delete(_)}notify(){let _=this.getTabs(),$=this.activeId;for(let j of this.listeners)try{j(_,$)}catch(Z){console.warn("[tab-store] Change listener failed:",Z)}}open(_,$){let j=this.tabs.get(_);if(!j)j={id:_,label:$||_.split("/").pop()||_,path:_,dirty:!1,pinned:!1},this.tabs.set(_,j);return this.activate(_),j}activate(_){if(!this.tabs.has(_))return;this.activeId=_,this.mruOrder=[_,...this.mruOrder.filter(($)=>$!==_)],this.notify()}close(_){if(!this.tabs.get(_))return!1;if(this.tabs.delete(_),this.mruOrder=this.mruOrder.filter((j)=>j!==_),this.activeId===_)this.activeId=this.mruOrder[0]||null;return this.notify(),!0}closeOthers(_){for(let[$,j]of this.tabs)if($!==_&&!j.pinned)this.tabs.delete($),this.mruOrder=this.mruOrder.filter((Z)=>Z!==$);if(this.activeId&&!this.tabs.has(this.activeId))this.activeId=_;this.notify()}closeAll(){for(let[_,$]of this.tabs)if(!$.pinned)this.tabs.delete(_),this.mruOrder=this.mruOrder.filter((j)=>j!==_);if(this.activeId&&!this.tabs.has(this.activeId))this.activeId=this.mruOrder[0]||null;this.notify()}setDirty(_,$){let j=this.tabs.get(_);if(!j||j.dirty===$)return;j.dirty=$,this.notify()}togglePin(_){let $=this.tabs.get(_);if(!$)return;$.pinned=!$.pinned,this.notify()}saveViewState(_,$){let j=this.tabs.get(_);if(j)j.viewState=$}getViewState(_){return this.tabs.get(_)?.viewState}rename(_,$,j){let Z=this.tabs.get(_);if(!Z)return;if(this.tabs.delete(_),Z.id=$,Z.path=$,Z.label=j||$.split("/").pop()||$,this.tabs.set($,Z),this.mruOrder=this.mruOrder.map((Y)=>Y===_?$:Y),this.activeId===_)this.activeId=$;this.notify()}getTabs(){return Array.from(this.tabs.values())}getActiveId(){return this.activeId}getActive(){return this.activeId?this.tabs.get(this.activeId)||null:null}get(_){return this.tabs.get(_)}get size(){return this.tabs.size}hasUnsaved(){for(let _ of this.tabs.values())if(_.dirty)return!0;return!1}getDirtyTabs(){return Array.from(this.tabs.values()).filter((_)=>_.dirty)}nextTab(){let _=this.getTabs();if(_.length<=1)return;let $=_.findIndex((Z)=>Z.id===this.activeId),j=_[($+1)%_.length];this.activate(j.id)}prevTab(){let _=this.getTabs();if(_.length<=1)return;let $=_.findIndex((Z)=>Z.id===this.activeId),j=_[($-1+_.length)%_.length];this.activate(j.id)}mruSwitch(){if(this.mruOrder.length>1)this.activate(this.mruOrder[1])}}var _1=new f7;function v7(){let[_,$]=m(!1),[j,Z]=m("default"),Y=y(!1);g(()=>{let K=K5("notificationsEnabled",!1);if(Y.current=K,$(K),typeof Notification<"u")Z(Notification.permission)},[]),g(()=>{Y.current=_},[_]);let Q=x(()=>{if(typeof Notification>"u")return Promise.resolve("denied");try{let K=Notification.requestPermission();if(K&&typeof K.then==="function")return K;return Promise.resolve(K)}catch{return Promise.resolve("default")}},[]),q=x(async()=>{if(typeof window>"u"||typeof Notification>"u")return;if(!window.isSecureContext){alert("Notifications require a secure context (HTTPS or installed app).");return}if(Notification.permission==="denied"){Z("denied"),alert("Browser notifications are blocked. Enable them in your browser settings.");return}if(Notification.permission==="default"){let G=await Q();if(Z(G||"default"),G!=="granted"){Y.current=!1,$(!1),Q1("notificationsEnabled","false");return}}let K=!Y.current;Y.current=K,$(K),Q1("notificationsEnabled",String(K))},[Q]),N=x((K,G)=>{if(!Y.current)return!1;if(typeof Notification>"u")return!1;if(Notification.permission!=="granted")return!1;try{let X=new Notification(K,{body:G});return X.onclick=()=>{try{window.focus()}catch{}},!0}catch{return!1}},[]);return{notificationsEnabled:_,notificationPermission:j,toggleNotifications:q,notify:N}}var m5=(_)=>{let $=new Set;return(_||[]).filter((j)=>{if(!j||$.has(j.id))return!1;return $.add(j.id),!0})};function b7({preserveTimelineScroll:_,preserveTimelineScrollTop:$,chatJid:j=null}){let[Z,Y]=m(null),[Q,q]=m(!1),N=y(!1),K=y(null),G=y(!1),X=y(null),V=y(null),U=y(0);g(()=>{N.current=Q},[Q]),g(()=>{V.current=Z},[Z]),g(()=>{U.current+=1,X.current=null,G.current=!1,N.current=!1,q(!1)},[j]);let L=x(async(H=null)=>{let W=U.current;try{if(H){let D=await X6(H,50,0,j);if(W!==U.current)return;Y(D.posts),q(!1)}else{let D=await u4(10,null,j);if(W!==U.current)return;Y(D.posts),q(D.has_more)}}catch(D){if(W!==U.current)return;console.error("Failed to load posts:",D)}},[j]),F=x(async()=>{let H=U.current;try{let W=await u4(10,null,j);if(H!==U.current)return;Y((D)=>{if(!D||D.length===0)return W.posts;return m5([...W.posts,...D])}),q((D)=>D||W.has_more)}catch(W){if(H!==U.current)return;console.error("Failed to refresh timeline:",W)}},[j]),J=x(async(H={})=>{let W=U.current,D=V.current;if(!D||D.length===0)return;if(G.current)return;let{preserveScroll:E=!0,preserveMode:C="top",allowRepeat:P=!1}=H,v=(k)=>{if(!E){k();return}if(C==="top")$(k);else _(k)},M=D.slice().sort((k,B)=>k.id-B.id)[0]?.id;if(!Number.isFinite(M))return;if(!P&&X.current===M)return;G.current=!0,X.current=M;try{let k=await u4(10,M,j);if(W!==U.current)return;if(k.posts.length>0)v(()=>{Y((B)=>m5([...k.posts,...B||[]])),q(k.has_more)});else q(!1)}catch(k){if(W!==U.current)return;console.error("Failed to load more posts:",k)}finally{if(W===U.current)G.current=!1}},[j,_,$]);return g(()=>{K.current=J},[J]),{posts:Z,setPosts:Y,hasMore:Q,setHasMore:q,hasMoreRef:N,loadPosts:L,refreshTimeline:F,loadMore:J,loadMoreRef:K,loadingMoreRef:G,lastBeforeIdRef:X}}function g7(){let[_,$]=m(null),[j,Z]=m({text:"",totalLines:0}),[Y,Q]=m(""),[q,N]=m({text:"",totalLines:0}),[K,G]=m(null),[X,V]=m(null),[U,L]=m(null),F=y(null),J=y(0),H=y(!1),W=y(""),D=y(""),E=y(null),C=y(null),P=y(null),v=y(null),p=y(!1),M=y(!1);return{agentStatus:_,setAgentStatus:$,agentDraft:j,setAgentDraft:Z,agentPlan:Y,setAgentPlan:Q,agentThought:q,setAgentThought:N,pendingRequest:K,setPendingRequest:G,currentTurnId:X,setCurrentTurnId:V,steerQueuedTurnId:U,setSteerQueuedTurnId:L,lastAgentEventRef:F,lastSilenceNoticeRef:J,isAgentRunningRef:H,draftBufferRef:W,thoughtBufferRef:D,pendingRequestRef:E,stalledPostIdRef:C,currentTurnIdRef:P,steerQueuedTurnIdRef:v,thoughtExpandedRef:p,draftExpandedRef:M}}function m7({appShellRef:_,sidebarWidthRef:$,editorWidthRef:j,dockHeightRef:Z}){let Y=y((X)=>{X.preventDefault();let V=_.current;if(!V)return;let U=X.clientX,L=$.current||280,F=X.currentTarget;F.classList.add("dragging"),V.classList.add("sidebar-resizing"),document.body.style.cursor="col-resize",document.body.style.userSelect="none";let J=U,H=(D)=>{J=D.clientX;let E=Math.min(Math.max(L+(D.clientX-U),160),600);V.style.setProperty("--sidebar-width",`${E}px`),$.current=E},W=()=>{let D=Math.min(Math.max(L+(J-U),160),600);$.current=D,F.classList.remove("dragging"),V.classList.remove("sidebar-resizing"),document.body.style.cursor="",document.body.style.userSelect="",Q1("sidebarWidth",String(Math.round(D))),document.removeEventListener("mousemove",H),document.removeEventListener("mouseup",W)};document.addEventListener("mousemove",H),document.addEventListener("mouseup",W)}).current,Q=y((X)=>{X.preventDefault();let V=_.current;if(!V)return;let U=X.touches[0];if(!U)return;let L=U.clientX,F=$.current||280,J=X.currentTarget;J.classList.add("dragging"),V.classList.add("sidebar-resizing"),document.body.style.userSelect="none";let H=(D)=>{let E=D.touches[0];if(!E)return;D.preventDefault();let C=Math.min(Math.max(F+(E.clientX-L),160),600);V.style.setProperty("--sidebar-width",`${C}px`),$.current=C},W=()=>{J.classList.remove("dragging"),V.classList.remove("sidebar-resizing"),document.body.style.userSelect="",Q1("sidebarWidth",String(Math.round($.current||F))),document.removeEventListener("touchmove",H),document.removeEventListener("touchend",W),document.removeEventListener("touchcancel",W)};document.addEventListener("touchmove",H,{passive:!1}),document.addEventListener("touchend",W),document.addEventListener("touchcancel",W)}).current,q=y((X)=>{X.preventDefault();let V=_.current;if(!V)return;let U=X.clientX,L=j.current||$.current||280,F=X.currentTarget;F.classList.add("dragging"),document.body.style.cursor="col-resize",document.body.style.userSelect="none";let J=U,H=(D)=>{J=D.clientX;let E=Math.min(Math.max(L+(D.clientX-U),200),800);V.style.setProperty("--editor-width",`${E}px`),j.current=E},W=()=>{let D=Math.min(Math.max(L+(J-U),200),800);j.current=D,F.classList.remove("dragging"),document.body.style.cursor="",document.body.style.userSelect="",Q1("editorWidth",String(Math.round(D))),document.removeEventListener("mousemove",H),document.removeEventListener("mouseup",W)};document.addEventListener("mousemove",H),document.addEventListener("mouseup",W)}).current,N=y((X)=>{X.preventDefault();let V=_.current;if(!V)return;let U=X.touches[0];if(!U)return;let L=U.clientX,F=j.current||$.current||280,J=X.currentTarget;J.classList.add("dragging"),document.body.style.userSelect="none";let H=(D)=>{let E=D.touches[0];if(!E)return;D.preventDefault();let C=Math.min(Math.max(F+(E.clientX-L),200),800);V.style.setProperty("--editor-width",`${C}px`),j.current=C},W=()=>{J.classList.remove("dragging"),document.body.style.userSelect="",Q1("editorWidth",String(Math.round(j.current||F))),document.removeEventListener("touchmove",H),document.removeEventListener("touchend",W),document.removeEventListener("touchcancel",W)};document.addEventListener("touchmove",H,{passive:!1}),document.addEventListener("touchend",W),document.addEventListener("touchcancel",W)}).current,K=y((X)=>{X.preventDefault();let V=_.current;if(!V)return;let U=X.clientY,L=Z?.current||200,F=X.currentTarget;F.classList.add("dragging"),document.body.style.cursor="row-resize",document.body.style.userSelect="none";let J=U,H=(D)=>{J=D.clientY;let E=Math.min(Math.max(L-(D.clientY-U),100),window.innerHeight*0.5);if(V.style.setProperty("--dock-height",`${E}px`),Z)Z.current=E;window.dispatchEvent(new CustomEvent("dock-resize"))},W=()=>{let D=Math.min(Math.max(L-(J-U),100),window.innerHeight*0.5);if(Z)Z.current=D;F.classList.remove("dragging"),document.body.style.cursor="",document.body.style.userSelect="",Q1("dockHeight",String(Math.round(D))),window.dispatchEvent(new CustomEvent("dock-resize")),document.removeEventListener("mousemove",H),document.removeEventListener("mouseup",W)};document.addEventListener("mousemove",H),document.addEventListener("mouseup",W)}).current,G=y((X)=>{X.preventDefault();let V=_.current;if(!V)return;let U=X.touches[0];if(!U)return;let L=U.clientY,F=Z?.current||200,J=X.currentTarget;J.classList.add("dragging"),document.body.style.userSelect="none";let H=(D)=>{let E=D.touches[0];if(!E)return;D.preventDefault();let C=Math.min(Math.max(F-(E.clientY-L),100),window.innerHeight*0.5);if(V.style.setProperty("--dock-height",`${C}px`),Z)Z.current=C;window.dispatchEvent(new CustomEvent("dock-resize"))},W=()=>{J.classList.remove("dragging"),document.body.style.userSelect="",Q1("dockHeight",String(Math.round(Z?.current||F))),window.dispatchEvent(new CustomEvent("dock-resize")),document.removeEventListener("touchmove",H),document.removeEventListener("touchend",W),document.removeEventListener("touchcancel",W)};document.addEventListener("touchmove",H,{passive:!1}),document.addEventListener("touchend",W),document.addEventListener("touchcancel",W)}).current;return{handleSplitterMouseDown:Y,handleSplitterTouchStart:Q,handleEditorSplitterMouseDown:q,handleEditorSplitterTouchStart:N,handleDockSplitterMouseDown:K,handleDockSplitterTouchStart:G}}function xK(_,$,j,Z){if(!(_ instanceof Map)||_.size===0||!$||!j)return _;let Y=!1,Q=new Map;for(let[q,N]of _.entries()){let K=q;if(Z==="dir"){if(q===$)K=j,Y=!0;else if(q.startsWith(`${$}/`))K=`${j}${q.slice($.length)}`,Y=!0}else if(q===$)K=j,Y=!0;Q.set(K,N)}return Y?Q:_}function p7({onTabClosed:_}={}){let $=y(_);$.current=_;let[j,Z]=m(()=>_1.getTabs()),[Y,Q]=m(()=>_1.getActiveId()),[q,N]=m(()=>_1.getTabs().length>0);g(()=>{return _1.onChange((M,k)=>{Z(M),Q(k),N(M.length>0)})},[]);let[K,G]=m(()=>new Set),[X,V]=m(()=>new Map),U=x((M)=>{G((k)=>{let B=new Set(k);if(B.has(M))B.delete(M);else B.add(M);return B})},[]),L=x((M)=>{G((k)=>{if(!k.has(M))return k;let B=new Set(k);return B.delete(M),B})},[]),F=x((M)=>{V((k)=>{if(!k.has(M))return k;let B=new Map(k);return B.delete(M),B})},[]),J=x((M,k={})=>{if(!M)return;let B=typeof k?.paneOverrideId==="string"&&k.paneOverrideId.trim()?k.paneOverrideId.trim():null,I={path:M,mode:"edit"};try{if(!(B?i0.get(B):i0.resolve(I))){if(!i0.get("editor")){console.warn(`[openEditor] No pane handler for: ${M}`);return}}}catch(c){console.warn(`[openEditor] paneRegistry.resolve() error for "${M}":`,c)}let w=typeof k?.label==="string"&&k.label.trim()?k.label.trim():void 0;if(_1.open(M,w),B)V((c)=>{if(c.get(M)===B)return c;let b=new Map(c);return b.set(M,B),b})},[]),H=x(()=>{let M=_1.getActiveId();if(M){let k=_1.get(M);if(k?.dirty){if(!window.confirm(`"${k.label}" has unsaved changes. Close anyway?`))return}_1.close(M),L(M),F(M),$.current?.(M)}},[F,L]),W=x((M)=>{let k=_1.get(M);if(k?.dirty){if(!window.confirm(`"${k.label}" has unsaved changes. Close anyway?`))return}_1.close(M),L(M),F(M),$.current?.(M)},[F,L]),D=x((M)=>{_1.activate(M)},[]),E=x((M)=>{let k=_1.getTabs().filter((w)=>w.id!==M&&!w.pinned),B=k.filter((w)=>w.dirty).length;if(B>0){if(!window.confirm(`${B} unsaved tab${B>1?"s":""} will be closed. Continue?`))return}let I=k.map((w)=>w.id);_1.closeOthers(M),I.forEach((w)=>{L(w),F(w),$.current?.(w)})},[F,L]),C=x(()=>{let M=_1.getTabs().filter((I)=>!I.pinned),k=M.filter((I)=>I.dirty).length;if(k>0){if(!window.confirm(`${k} unsaved tab${k>1?"s":""} will be closed. Continue?`))return}let B=M.map((I)=>I.id);_1.closeAll(),B.forEach((I)=>{L(I),F(I),$.current?.(I)})},[F,L]),P=x((M)=>{_1.togglePin(M)},[]),v=x((M)=>{if(!M)return;V((k)=>{if(k.get(M)==="editor")return k;let B=new Map(k);return B.set(M,"editor"),B}),_1.activate(M)},[]),p=x(()=>{let M=_1.getActiveId();if(M)window.dispatchEvent(new CustomEvent("workspace-reveal-path",{detail:{path:M}}))},[]);return g(()=>{let M=(k)=>{let{oldPath:B,newPath:I,type:w}=k.detail||{};if(!B||!I)return;if(w==="dir"){for(let c of _1.getTabs())if(c.path===B||c.path.startsWith(`${B}/`)){let b=`${I}${c.path.slice(B.length)}`;_1.rename(c.id,b)}}else _1.rename(B,I);V((c)=>xK(c,B,I,w))};return window.addEventListener("workspace-file-renamed",M),()=>window.removeEventListener("workspace-file-renamed",M)},[]),g(()=>{let M=(k)=>{if(_1.hasUnsaved())k.preventDefault(),k.returnValue=""};return window.addEventListener("beforeunload",M),()=>window.removeEventListener("beforeunload",M)},[]),{editorOpen:q,tabStripTabs:j,tabStripActiveId:Y,previewTabs:K,tabPaneOverrides:X,openEditor:J,closeEditor:H,handleTabClose:W,handleTabActivate:D,handleTabCloseOthers:E,handleTabCloseAll:C,handleTabTogglePin:P,handleTabTogglePreview:U,handleTabEditSource:v,revealInExplorer:p}}function k$(_,$){try{if(typeof window>"u")return $;let j=window.__PICLAW_SILENCE||{},Z=`__PICLAW_SILENCE_${_.toUpperCase()}_MS`,Y=j[_]??window[Z],Q=Number(Y);return Number.isFinite(Q)?Q:$}catch{return $}}var h7=k$("warning",30000),c7=k$("finalize",120000),l7=k$("refresh",30000),n7=30000;function d7(_){let $={};return(_?.agents||[]).forEach((j)=>{$[j.id]=j}),$}function i7(){if(/iPad|iPhone/.test(navigator.userAgent))return!0;return navigator.platform==="MacIntel"&&navigator.maxTouchPoints>1}function r7(_=30000){let[,$]=m(0);g(()=>{let j=setInterval(()=>$((Z)=>Z+1),_);return()=>clearInterval(j)},[_])}function o7(_,$=160){let j=String(_||"").replace(/\r\n/g,`
`);if(!j)return 0;return j.split(`
`).reduce((Z,Y)=>Z+Math.max(1,Math.ceil(Y.length/$)),0)}async function s7(_){let{panelKey:$,expanded:j,currentTurnIdRef:Z,thoughtExpandedRef:Y,draftExpandedRef:Q,setAgentThoughtVisibility:q,getAgentThought:N,thoughtBufferRef:K,draftBufferRef:G,setAgentThought:X,setAgentDraft:V}=_;if($!=="thought"&&$!=="draft")return;let U=Z.current;if($==="thought"){if(Y.current=j,U)try{await q(U,"thought",j)}catch(L){console.warn("Failed to update thought visibility:",L)}if(!j)return;try{let L=U?await N(U,"thought"):null;if(L?.text)K.current=L.text;X((F)=>({...F||{text:"",totalLines:0},fullText:K.current||F?.fullText||"",totalLines:Number.isFinite(L?.total_lines)?L.total_lines:F?.totalLines||0}))}catch(L){console.warn("Failed to fetch full thought:",L)}return}if(Q.current=j,U)try{await q(U,"draft",j)}catch(L){console.warn("Failed to update draft visibility:",L)}if(!j)return;try{let L=U?await N(U,"draft"):null;if(L?.text)G.current=L.text;V((F)=>({...F||{text:"",totalLines:0},fullText:G.current||F?.fullText||"",totalLines:Number.isFinite(L?.total_lines)?L.total_lines:F?.totalLines||0}))}catch(L){console.warn("Failed to fetch full draft:",L)}}function yK(_){if(!_||typeof _!=="object")return null;let $=_.started_at??_.startedAt;if(typeof $!=="string"||!$)return null;let j=Date.parse($);return Number.isFinite(j)?j:null}function O4(_){if(!_||typeof _!=="object")return!1;let $=_.intent_key??_.intentKey;return _.type==="intent"&&$==="compaction"}function I8(_){if(!_||typeof _!=="object")return"";let $=_.title;if(typeof $==="string"&&$.trim())return $.trim();let j=_.status;if(typeof j==="string"&&j.trim())return j.trim();return O4(_)?"Compacting context":"Working..."}function PK(_){let $=Math.max(0,Math.floor(_/1000)),j=$%60,Z=Math.floor($/60)%60,Y=Math.floor($/3600);if(Y>0)return`${Y}:${String(Z).padStart(2,"0")}:${String(j).padStart(2,"0")}`;return`${Z}:${String(j).padStart(2,"0")}`}function M8(_,$=Date.now()){let j=yK(_);if(j===null)return null;return PK(Math.max(0,$-j))}function p5(_){return typeof _==="string"}function a7(_){return typeof _==="string"&&_.trim().length>0}function I$(_){if(!Array.isArray(_))return[];return _.filter(($)=>a7($?.chat_jid)&&a7($?.agent_name))}function t7(_){if(!Array.isArray(_))return[];return _.filter(($)=>p5($?.chat_jid)&&p5($?.agent_name))}function e7(_,$,j){if(!Array.isArray($)||$.length===0)return Array.isArray(_)?_:[];let Z=new Map;if(Array.isArray(_)){for(let q of _)if(p5(q?.chat_jid))Z.set(q.chat_jid,q)}let Y=$.map((q)=>{if(!p5(q?.chat_jid))return q;let N=Z.get(q.chat_jid);return N?{...q,...N,is_active:N.is_active??q.is_active}:q}),Q=p5(j)?j:"";return Y.sort((q,N)=>{if(q.chat_jid===Q&&N.chat_jid!==Q)return-1;if(N.chat_jid===Q&&q.chat_jid!==Q)return 1;let K=Boolean(q.archived_at),G=Boolean(N.archived_at);if(K!==G)return K?1:-1;if(Boolean(q.is_active)!==Boolean(N.is_active))return q.is_active?-1:1;return String(q.chat_jid).localeCompare(String(N.chat_jid))}),Y}var CK={hasModel:!1,model:void 0,hasThinkingLevel:!1,thinkingLevel:null,hasSupportsThinking:!1,supportsThinking:!1,hasProviderUsage:!1,providerUsage:null};function _9(_){if(!_||typeof _!=="object")return CK;let $=_.model??_.current;return{hasModel:$!==void 0,model:$,hasThinkingLevel:_.thinking_level!==void 0,thinkingLevel:_.thinking_level??null,hasSupportsThinking:_.supports_thinking!==void 0,supportsThinking:Boolean(_.supports_thinking),hasProviderUsage:_.provider_usage!==void 0,providerUsage:_.provider_usage??null}}function $9(_){let j=(Array.isArray(_)?_:[]).find((Z)=>Z?.id==="default");return{name:j?.name,avatarUrl:j?.avatar_url}}function j9(_,$){if(!_||typeof _!=="object")return null;let j=_.agent_id;if(!j)return null;let Z=String(j),Y=_.agent_name,Q=_.agent_avatar;if(!Y&&Q===void 0)return null;let q=$||{id:Z},N=q.name||null,K=q.avatar_url??q.avatarUrl??q.avatar??null,G=!1,X=!1;if(Y&&Y!==q.name)N=Y,G=!0;if(Q!==void 0){let V=typeof Q==="string"?Q.trim():null,U=typeof K==="string"?K.trim():null,L=V||null;if(L!==(U||null))K=L,X=!0}if(!G&&!X)return null;return{agentId:Z,nameChanged:G,avatarChanged:X,resolvedName:N,resolvedAvatar:K}}function Z9(_,$){let j=typeof $?.name==="string"&&$.name.trim()?$.name.trim():"You",Z=typeof $?.avatar_url==="string"?$.avatar_url.trim():null,Y=typeof $?.avatar_background==="string"&&$.avatar_background.trim()?$.avatar_background.trim():null;if(_.name===j&&_.avatar_url===Z&&_.avatar_background===Y)return _;return{name:j,avatar_url:Z,avatar_background:Y}}function Y9(_,$){if(!$||typeof $!=="object")return _;let j=$.user_name??$.userName,Z=$.user_avatar??$.userAvatar,Y=$.user_avatar_background??$.userAvatarBackground;if(j===void 0&&Z===void 0&&Y===void 0)return _;let Q=typeof j==="string"&&j.trim()?j.trim():_.name||"You",q=Z===void 0?_.avatar_url:typeof Z==="string"&&Z.trim()?Z.trim():null,N=Y===void 0?_.avatar_background:typeof Y==="string"&&Y.trim()?Y.trim():null;if(_.name===Q&&_.avatar_url===q&&_.avatar_background===N)return _;return{name:Q,avatar_url:q,avatar_background:N}}function SK(_){if(!_?.data?.is_bot_message)return!1;let $=_.data.content;return $==="Queued as a follow-up (one-at-a-time)."||$==="⁣"}function Q9(_,$){if(!_||!Array.isArray(_))return _;let j=new Set($||[]),Z=_.filter((Y)=>!j.has(Y?.id)&&!SK(Y));return Z.length===_.length?_:Z}function q9(_,$){let j=$||new Set;return Array.isArray(_)?_.map((Z)=>({...Z})).filter((Z)=>!j.has(Z.row_id)):[]}function N9(_,$){if(!Array.isArray(_)||!Array.isArray($))return!1;return _.length===$.length&&_.every((j,Z)=>j?.row_id===$[Z]?.row_id)}function D4(_,$){let j=Array.isArray(_)&&$!=null?_.filter((Z)=>Z?.row_id!==$):Array.isArray(_)?[..._]:[];return{items:j,remainingQueueCount:j.length}}function K9(_,$){let j=Array.isArray(_)?_:[],Z=$?.row_id,Y=$?.content;if(Z==null||typeof Y!=="string"||!Y.trim())return j;if(j.some((Q)=>Q?.row_id===Z))return j;return[...j,{row_id:Z,content:Y,timestamp:$?.timestamp||null,thread_id:$?.thread_id??null}]}function G9(_){if(!_||typeof _!=="object")return!1;if(_.queued==="followup"||_.queued==="steer")return!0;let $=_.command;return Boolean($&&typeof $==="object"&&($.queued_followup||$.queued_steer))}async function X9(_){let{getAgents:$,setAgents:j,setUserProfile:Z,applyBranding:Y}=_;try{let Q=await $();j(d7(Q));let q=Q?.user||{};Z((K)=>Z9(K,q));let N=$9(Q?.agents);Y(N.name,N.avatarUrl)}catch(Q){console.warn("Failed to load agents:",Q)}}function V9(_){let{payload:$,agentsRef:j,setAgents:Z,applyBranding:Y}=_,Q=j9($,$?.agent_id?j.current?.[String($.agent_id)]||{id:String($.agent_id)}:null);if(!Q)return;if(Z((q)=>{let K={...q[Q.agentId]||{id:Q.agentId}};if(Q.nameChanged)K.name=Q.resolvedName;if(Q.avatarChanged)K.avatar_url=Q.resolvedAvatar;return{...q,[Q.agentId]:K}}),Q.agentId==="default")Y(Q.resolvedName,Q.resolvedAvatar,Q.avatarChanged?Date.now():null)}function U9(_){let{payload:$,setUserProfile:j}=_;j((Z)=>Y9(Z,$))}function L9(_){let{payload:$,setActiveModel:j,setActiveThinkingLevel:Z,setSupportsThinking:Y,setActiveModelUsage:Q}=_,q=_9($);if(q.hasModel)j(q.model);if(q.hasThinkingLevel)Z(q.thinkingLevel);if(q.hasSupportsThinking)Y(q.supportsThinking);if(q.hasProviderUsage)Q(q.providerUsage)}function W9(_){let{currentChatJid:$,getAgentModels:j,activeChatJidRef:Z,applyModelState:Y}=_,Q=$;j(Q).then((q)=>{if(Z.current!==Q)return;if(q)Y(q)}).catch(()=>{})}function B9(_){let{currentChatJid:$,getActiveChatAgents:j,getChatBranches:Z,activeChatJidRef:Y,setActiveChatAgents:Q}=_,q=$;Promise.all([j().catch(()=>({chats:[]})),Z(null,{includeArchived:!0}).catch(()=>({chats:[]}))]).then(([N,K])=>{if(Y.current!==q)return;let G=I$(N?.chats),X=I$(K?.chats);Q(e7(G,X,q))}).catch(()=>{if(Y.current!==q)return;Q([])})}function z9(_){let{currentRootChatJid:$,getChatBranches:j,setCurrentChatBranches:Z}=_;j($).then((Y)=>{Z(t7(Y?.chats))}).catch(()=>{})}function F9(_){let{response:$,refreshActiveChatAgents:j,refreshCurrentChatBranches:Z,refreshContextUsage:Y,refreshAutoresearchStatus:Q,refreshQueueState:q}=_;if(!$||typeof $!=="object")return;if(j(),Z(),Y(),Q(),G9($))q()}function M$(_){if(!Array.isArray(_?.content))return null;return _.content.find((j)=>j?.type==="status_panel"&&j?.panel)?.panel||null}function H9(_,$){let j=new Map(_),Z=M$($);if(typeof $?.key==="string"&&$.key&&Z)j.set($.key,Z);else j.delete("autoresearch");return j}function J9(_,$){let j=typeof $?.key==="string"?$.key:"";if(!j)return _;let Z=new Map(_),Y=M$($);if($?.options?.remove||!Y)Z.delete(j);else Z.set(j,Y);return Z}function O9(_){if(_?.options?.remove)return!0;return M$(_)?.state!=="running"}function T$(_,$){return`${_}:${$}`}function D9(_,$,j){let Z=T$($,j);if(_.has(Z))return _;let Y=new Set(_);return Y.add(Z),Y}function A9(_,$){if(!_.has($))return _;let j=new Set(_);return j.delete($),j}function T8(_,$){if(_.size===0)return _;let j=`${$}:`,Z=new Set(Array.from(_).filter((Y)=>!String(Y).startsWith(j)));return Z.size===_.size?_:Z}async function E9(_){let $=typeof _.action?.action_type==="string"?_.action.action_type:"",j=typeof _.action?.key==="string"?_.action.key:"";if($==="autoresearch.stop")return await _.stopAutoresearch(_.currentChatJid,{generateReport:!0}),{refreshAutoresearchStatus:!0};if($==="autoresearch.dismiss")return await _.dismissAutoresearch(_.currentChatJid),{refreshAutoresearchStatus:!0};if($==="autoresearch.copy_tmux"){let Z=typeof _.panel?.tmux_command==="string"?_.panel.tmux_command.trim():"";if(!Z)throw Error("No tmux command available.");return await _.writeClipboard(Z),{refreshAutoresearchStatus:!1,toast:{title:"Copied",detail:"tmux command copied to clipboard.",kind:"success"}}}throw Error(`Unsupported panel action: ${$||j}`)}function g_(_){return!_?.currentHashtag&&!_?.searchQuery&&!_?.searchOpen}function k9(_,$,j){return Boolean($&&j&&(_==="new_post"||_==="new_reply"||_==="agent_response"))}function x$(_,$){return _&&$}function I9(_,$){if(!Array.isArray(_)||_.length===0)return[$];if(_.some((j)=>j?.id===$?.id))return _;return[..._,$]}function M9(_,$){if(!Array.isArray(_))return _;if(!_.some((j)=>j?.id===$?.id))return _;return _.map((j)=>j?.id===$?.id?$:j)}function T9(_,$){if(!Array.isArray(_))return _;let j=Array.isArray($)?$:[];if(j.length===0)return _;let Z=new Set(j),Y=_.filter((Q)=>!Z.has(Q?.id));return Y.length===_.length?_:Y}function x9(_){let{currentChatJid:$,queueRefreshGenRef:j,activeChatJidRef:Z,dismissedQueueRowIdsRef:Y,getAgentQueueState:Q,setFollowupQueueItems:q,clearQueuedSteerStateIfStale:N}=_,K=++j.current,G=$;Q(G).then((X)=>{if(K!==j.current)return;if(Z.current!==G)return;let V=Y.current,U=q9(X?.items,V);if(U.length){q((L)=>N9(L,U)?L:U);return}V.clear(),N(0),q((L)=>L.length===0?L:[])}).catch(()=>{if(K!==j.current)return;if(Z.current!==G)return;q((X)=>X.length===0?X:[])})}async function y9(_){let{currentChatJid:$,activeChatJidRef:j,getAgentContext:Z,setContextUsage:Y}=_,Q=$;try{let q=await Z(Q);if(j.current!==Q)return;if(q)Y(q)}catch(q){if(j.current!==Q)return;console.warn("Failed to fetch agent context:",q)}}async function P9(_){let{currentChatJid:$,activeChatJidRef:j,getAutoresearchStatus:Z,setExtensionStatusPanels:Y,setPendingExtensionPanelActions:Q}=_,q=$;try{let N=await Z(q);if(j.current!==q)return;Y((K)=>H9(K,N)),Q((K)=>T8(K,"autoresearch"))}catch(N){if(j.current!==q)return;console.warn("Failed to fetch autoresearch status:",N)}}function C9(_){let{refreshModelState:$,refreshActiveChatAgents:j,refreshCurrentChatBranches:Z,refreshQueueState:Y,refreshContextUsage:Q,refreshAutoresearchStatus:q}=_;$(),j(),Z(),Y(),Q(),q()}function S9(_){let{viewStateRef:$,refreshTimeline:j,refreshModelAndQueueState:Z}=_;if(g_($.current))j();Z()}function w9(_){let{readStoredNumber:$,sidebarWidthRef:j,shellElement:Z,minWidth:Y=160,maxWidth:Q=600,fallbackWidth:q=280}=_,N=$("sidebarWidth",null),K=Number.isFinite(N)?Math.min(Math.max(Number(N),Y),Q):q;if(j.current=K,Z)Z.style.setProperty("--sidebar-width",`${K}px`);return K}async function R9(_){let{currentHashtag:$,searchQuery:j,searchScope:Z,currentChatJid:Y,currentRootChatJid:Q,loadPosts:q,searchPosts:N,setPosts:K,setHasMore:G,scrollToBottom:X,isCancelled:V,scheduleRaf:U=(J)=>requestAnimationFrame(J),scheduleTimeout:L=(J,H)=>{setTimeout(J,H)}}=_,F=()=>{if(V())return;U(()=>{if(V())return;L(()=>{if(V())return;X()},0)})};if($){await q($);return}if(j){try{let J=await N(j,50,0,Y,Z,Q);if(V())return;K(Array.isArray(J?.results)?J.results:[]),G(!1)}catch(J){if(V())return;console.error("Failed to search:",J),K([]),G(!1)}return}try{await q(),F()}catch(J){if(V())return;console.error("Failed to load timeline:",J)}}function wK(_){let{refreshModelAndQueueState:$,refreshModelState:j,refreshActiveChatAgents:Z,refreshCurrentChatBranches:Y,refreshQueueState:Q,intervalMs:q=60000,scheduleInterval:N=(X,V)=>setInterval(X,V),clearScheduledInterval:K=(X)=>clearInterval(X)}=_;$();let G=N(()=>{j(),Z(),Y(),Q()},q);return()=>{K(G)}}function u9(_){let{getAgents:$,setAgents:j,setUserProfile:Z,applyBranding:Y,readStoredNumber:Q,sidebarWidthRef:q,appShellRef:N,currentChatJid:K,currentRootChatJid:G,getAgentModels:X,getActiveChatAgents:V,getChatBranches:U,activeChatJidRef:L,setActiveChatAgents:F,setCurrentChatBranches:J,setActiveModel:H,setActiveThinkingLevel:W,setSupportsThinking:D,setActiveModelUsage:E,agentsRef:C,refreshQueueState:P,refreshContextUsage:v,refreshAutoresearchStatus:p}=_,M=x(async()=>{await X9({getAgents:$,setAgents:j,setUserProfile:Z,applyBranding:Y})},[Y,$,j,Z]);g(()=>{M(),w9({readStoredNumber:Q,sidebarWidthRef:q,shellElement:N.current})},[N,M,Q,q]);let k=x((d)=>{V9({payload:d,agentsRef:C,setAgents:j,applyBranding:Y})},[C,Y,j]),B=x((d)=>{U9({payload:d,setUserProfile:Z})},[Z]),I=x((d)=>{L9({payload:d,setActiveModel:H,setActiveThinkingLevel:W,setSupportsThinking:D,setActiveModelUsage:E})},[H,E,W,D]),w=x(()=>{W9({currentChatJid:K,getAgentModels:X,activeChatJidRef:L,applyModelState:I})},[L,I,K,X]),c=x(()=>{B9({currentChatJid:K,getActiveChatAgents:V,getChatBranches:U,activeChatJidRef:L,setActiveChatAgents:F})},[L,K,V,U,F]),b=x(()=>{z9({currentRootChatJid:G,getChatBranches:U,setCurrentChatBranches:J})},[G,U,J]),n=x(()=>{C9({refreshModelState:w,refreshActiveChatAgents:c,refreshCurrentChatBranches:b,refreshQueueState:P,refreshContextUsage:v,refreshAutoresearchStatus:p})},[c,p,v,b,w,P]);return g(()=>wK({refreshModelAndQueueState:n,refreshModelState:w,refreshActiveChatAgents:c,refreshCurrentChatBranches:b,refreshQueueState:P}),[c,b,n,w,P]),{updateAgentProfile:k,updateUserProfile:B,applyModelState:I,refreshModelState:w,refreshActiveChatAgents:c,refreshCurrentChatBranches:b,refreshModelAndQueueState:n}}function f9(_){let $=String(_||"").trim();if(!$.startsWith("/btw"))return null;let j=$.slice(4).trim();if(!j)return{type:"help"};if(j==="clear"||j==="close")return{type:"clear"};return{type:"ask",question:j}}function v9(_){return String(_||"").trim()||"web:default"}function b9(_){if(!_)return!1;let $=String(_.answer||"").trim();return _.status!=="running"&&Boolean($)}function g9(_){if(!_)return!1;return _.status!=="running"}function m9(_){let $=String(_?.question||"").trim(),j=String(_?.answer||"").trim();if(!$&&!j)return"";return["BTW side conversation",$?`Question: ${$}`:null,j?`Answer:
${j}`:null].filter(Boolean).join(`

`)}function p9(_){let{btwAbortRef:$,setBtwSession:j}=_;if($.current)$.current.abort(),$.current=null;j(null)}async function h9(_){let{question:$,currentChatJid:j,streamSidePrompt:Z,resolveBtwChatJid:Y,showIntentToast:Q,btwAbortRef:q,setBtwSession:N}=_,K=String($||"").trim();if(!K)return Q("BTW needs a question","Usage: /btw <question>","warning"),!0;if(q.current)q.current.abort();let G=new AbortController;q.current=G,N({question:K,answer:"",thinking:"",error:null,model:null,status:"running"});try{let X=await Z(K,{signal:G.signal,chatJid:Y(j),systemPrompt:"Answer the user briefly and directly. This is a side conversation that should not affect the main chat until explicitly injected.",onEvent:(V)=>{if(V==="side_prompt_start")N((U)=>U?{...U,status:"running"}:U)},onThinkingDelta:(V)=>{N((U)=>U?{...U,thinking:`${U.thinking||""}${V||""}`}:U)},onTextDelta:(V)=>{N((U)=>U?{...U,answer:`${U.answer||""}${V||""}`}:U)}});if(q.current!==G)return!0;N((V)=>V?{...V,answer:X?.result||V.answer||"",thinking:X?.thinking||V.thinking||"",model:X?.model||null,status:"success",error:null}:V)}catch(X){if(G.signal.aborted)return!0;N((V)=>V?{...V,status:"error",error:X?.payload?.error||X?.message||"BTW request failed."}:V)}finally{if(q.current===G)q.current=null}return!0}async function c9(_){let{content:$,parseBtwCommand:j,closeBtwPanel:Z,runBtwPrompt:Y,showIntentToast:Q}=_,q=j($);if(!q)return!1;if(q.type==="help")return Q("BTW usage","Use /btw <question> to open a side conversation.","info",4000),!0;if(q.type==="clear")return Z(),Q("BTW cleared","Closed the side conversation panel.","info"),!0;if(q.type==="ask")return await Y(q.question),!0;return!1}async function l9(_){let{btwSession:$,buildBtwInjectionText:j,isComposeBoxAgentActive:Z,currentChatJid:Y,sendAgentMessage:Q,handleMessageResponse:q,showIntentToast:N}=_,K=j($);if(!K)return!1;try{let G=await Q("default",K,null,[],Z?"queue":null,Y);return q(G),N(G?.queued==="followup"?"BTW queued":"BTW injected",G?.queued==="followup"?"The BTW summary was queued as a follow-up because the agent is busy.":"The BTW summary was sent to the main chat.","info",3500),!0}catch(G){return N("BTW inject failed",G?.message||"Could not inject BTW answer into chat.","warning"),!1}}function RK(_){let $=_?.artifact||{},j=$.kind||_?.kind||null;if(j!=="html"&&j!=="svg")return null;if(j==="html"){let Y=typeof $.html==="string"?$.html:typeof _?.html==="string"?_.html:"";return Y?{kind:j,html:Y}:null}let Z=typeof $.svg==="string"?$.svg:typeof _?.svg==="string"?_.svg:"";return Z?{kind:j,svg:Z}:null}function uK(_){let $=_?.artifact&&typeof _.artifact==="object"?_.artifact:{},j=typeof $.svg==="string"?$.svg:typeof _?.svg==="string"?_.svg:"",Z=typeof $.html==="string"?$.html:typeof _?.html==="string"?_.html:typeof _?.w==="string"?_.w:typeof _?.content==="string"?_.content:"",Q=($.kind||_?.kind||null)==="svg"||j?"svg":"html";if(Q==="svg")return j?{kind:Q,svg:j}:{kind:Q};return Z?{kind:Q,html:Z}:{kind:Q}}function A4(_){return typeof _==="number"&&Number.isFinite(_)?_:null}function f0(_){return typeof _==="string"&&_.trim()?_.trim():null}function d9(_,$=!1){let Z=(Array.isArray(_)?_:$?["interactive"]:[]).filter((Y)=>typeof Y==="string").map((Y)=>Y.trim().toLowerCase()).filter(Boolean);return Array.from(new Set(Z))}var i9="__PICLAW_WIDGET_HOST__:";function n9(_){return JSON.stringify(_).replace(/</g,"\\u003c").replace(/>/g,"\\u003e").replace(/&/g,"\\u0026").replace(/\u2028/g,"\\u2028").replace(/\u2029/g,"\\u2029")}function y$(_,$){if(!_||_.type!=="generated_widget")return null;let j=RK(_);if(!j)return null;return{title:_.title||_.name||"Generated widget",subtitle:typeof _.subtitle==="string"?_.subtitle:"",description:_.description||_.subtitle||"",originPostId:Number.isFinite($?.id)?$.id:null,originChatJid:typeof $?.chat_jid==="string"?$.chat_jid:null,widgetId:_.widget_id||_.id||null,artifact:j,capabilities:d9(_.capabilities,_.interactive===!0),source:"timeline",status:"final"}}function r9(_){if(!_||typeof _!=="object")return null;let $=uK(_),j=f0(_?.widget_id)||f0(_?.widgetId)||f0(_?.tool_call_id)||f0(_?.toolCallId),Z=f0(_?.tool_call_id)||f0(_?.toolCallId),Y=f0(_?.turn_id)||f0(_?.turnId),Q=f0(_?.title)||f0(_?.name)||"Generated widget",q=f0(_?.subtitle)||"",N=f0(_?.description)||q,K=f0(_?.status),G=K==="loading"||K==="streaming"||K==="final"||K==="error"?K:"streaming";return{title:Q,subtitle:q,description:N,originPostId:A4(_?.origin_post_id)??A4(_?.originPostId),originChatJid:f0(_?.origin_chat_jid)||f0(_?.originChatJid)||f0(_?.chat_jid)||null,widgetId:j,artifact:$,capabilities:d9(_?.capabilities,!0),source:"live",status:G,turnId:Y,toolCallId:Z,width:A4(_?.width),height:A4(_?.height),error:f0(_?.error)}}function o9(_){return y$(_,null)!==null}function X_(_){let $=f0(_?.toolCallId)||f0(_?.tool_call_id);if($)return $;let j=f0(_?.widgetId)||f0(_?.widget_id);if(j)return j;let Z=A4(_?.originPostId)??A4(_?.origin_post_id);if(Z!==null)return`post:${Z}`;return null}function s9(_){let j=(_?.artifact||{}).kind||_?.kind||null,Y=(Array.isArray(_?.capabilities)?_.capabilities:[]).some((Q)=>typeof Q==="string"&&Q.trim().toLowerCase()==="interactive");return j==="html"&&(_?.source==="live"||Y)}function a9(_){return s9(_)?"allow-downloads allow-scripts":"allow-downloads"}function x8(_){return{title:f0(_?.title)||"Generated widget",widgetId:f0(_?.widgetId)||f0(_?.widget_id),toolCallId:f0(_?.toolCallId)||f0(_?.tool_call_id),turnId:f0(_?.turnId)||f0(_?.turn_id),capabilities:Array.isArray(_?.capabilities)?_.capabilities:[],source:_?.source==="live"?"live":"timeline",status:f0(_?.status)||"final"}}function y8(_){return{...x8(_),subtitle:f0(_?.subtitle)||"",description:f0(_?.description)||"",error:f0(_?.error)||null,width:A4(_?.width),height:A4(_?.height),runtimeState:_?.runtimeState&&typeof _.runtimeState==="object"?_.runtimeState:null}}function P8(_){return`${i9}${JSON.stringify(y8(_))}`}function t9(_){if(typeof _==="string"&&_.trim())return _.trim();if(!_||typeof _!=="object")return null;let $=f0(_.text)||f0(_.content)||f0(_.message)||f0(_.prompt)||f0(_.value);if($)return $;let j=_.data;if(typeof j==="string"&&j.trim())return j.trim();if(j&&typeof j==="object"){let Z=f0(j.text)||f0(j.content)||f0(j.message)||f0(j.prompt)||f0(j.value);if(Z)return Z}return null}function e9(_){if(!_||typeof _!=="object")return!1;return _.close===!0||_.dismiss===!0||_.closeAfterSubmit===!0}function _j(_){let $=f0(_?.status);if($==="loading"||$==="streaming")return"Widget is loading…";if($==="error")return f0(_?.error)||"Widget failed to load.";return"Widget artifact is missing or unsupported."}function fK(_){let $=x8(_);return`<script>
(function () {
  const meta = ${n9($)};
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

  const windowNamePrefix = ${n9(i9)};
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
</script>`}function $j(_){let $=_?.artifact||{},j=$.kind||_?.kind||null,Z=typeof $.html==="string"?$.html:typeof _?.html==="string"?_.html:"",Y=typeof $.svg==="string"?$.svg:typeof _?.svg==="string"?_.svg:"",Q=typeof _?.title==="string"&&_.title.trim()?_.title.trim():"Generated widget",q=j==="svg"?Y:Z;if(!q)return"";let N=s9(_),K=["default-src 'none'","img-src data: blob: https: http:","style-src 'unsafe-inline'","font-src data: https: http:","media-src data: blob: https: http:","connect-src 'none'","frame-src 'none'",N?"script-src 'unsafe-inline'":"script-src 'none'","object-src 'none'","base-uri 'none'","form-action 'none'"].join("; "),G=j==="svg"?`<div class="widget-svg-shell">${q}</div>`:q,X=N?fK(_):"";return`<!doctype html>
<html>
<head>
<meta charset="utf-8" />
<meta http-equiv="Content-Security-Policy" content="${K}" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<title>${Q.replace(/[<&>]/g,"")}</title>
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
</html>`}function P$(_){return String(_||"").trim()||"web:default"}function jj({remainingQueueCount:_=0,currentTurnId:$=null,isAgentTurnActive:j=!1}={}){return Number(_||0)<=0&&!$&&!j}function vK(_,$){let j=X_(_);return Boolean(_&&j===$)}function V5(_,$,j){if(!vK(_,$))return _;return{..._,runtimeState:{..._?.runtimeState&&typeof _.runtimeState==="object"?_.runtimeState:{},...j}}}function Zj(_,$){return{..._,openedAt:$}}function Yj(_){let $=X_(_);return{nextWidget:null,dismissedSessionKey:_?.source==="live"&&$?$:null}}function Qj(_,$,j){let Z=r9({...$,...$&&$.status?{}:{status:j.fallbackStatus||"streaming"}});if(!Z)return _;let Y=X_(Z);if(Y&&j.dismissedSessionKeys?.has(Y))return _;let Q=X_(_),q=Boolean(Y&&Q&&Y===Q),N={...q&&_?.artifact?_.artifact:{},...Z.artifact||{}};return{...q&&_?_:{},...Z,artifact:N,source:"live",originChatJid:Z.originChatJid||j.currentChatJid,openedAt:q&&_?.openedAt?_.openedAt:j.updatedAt,liveUpdatedAt:j.updatedAt}}function qj(_,$){if(!_||_?.source!=="live")return _||null;let j=X_($),Z=X_(_);if(j&&Z&&j!==Z)return _;return null}function Nj(_,$,j){return V5(_,$,{lastEventKind:j.kind,lastEventPayload:j.payload||null,lastSubmitAt:j.submittedAt,lastHostUpdate:{type:"submit_pending",submittedAt:j.submittedAt,preview:j.submissionText||null}})}function C$(_,$,j){if(j.errorMessage)return V5(_,$,{lastHostUpdate:{type:"submit_failed",submittedAt:j.submittedAt,preview:j.submissionText,error:j.errorMessage}});return V5(_,$,{lastHostUpdate:{type:j.queued==="followup"?"submit_queued":"submit_sent",submittedAt:j.submittedAt,preview:j.submissionText,queued:j.queued||null}})}function Kj(_,$,j){return V5(_,$,{lastEventKind:j.kind,lastEventPayload:j.payload||null,...j.kind==="widget.ready"?{readyAt:j.eventAt,lastHostUpdate:{type:"ready_ack",at:j.eventAt}}:{},...j.kind==="widget.request_refresh"?{lastRefreshRequestAt:j.eventAt,refreshCount:j.nextRefreshCount,lastHostUpdate:{type:j.shouldBuildDashboard?"refresh_building":"refresh_ack",at:j.eventAt,count:j.nextRefreshCount,echo:j.payload||null}}:{}})}function Gj(_,$,j){return V5(_,$,{dashboard:j.dashboard,lastHostUpdate:{type:"refresh_dashboard",at:j.at,count:j.count,echo:j.echo||null}})}function Xj(_,$,j){return V5(_,$,{lastHostUpdate:{type:"refresh_failed",at:j.at,count:j.count,error:j.errorMessage}})}function U5(_,$){let j=$?.row_id;if(j==null||typeof j!=="string"&&typeof j!=="number")return null;let Z=D4(_,j);return{rowId:j,items:Z.items,remainingQueueCount:Z.remainingQueueCount}}function S$(_){if(_==="steer")return{title:"Failed to steer message",detail:"The queued message could not be sent as steering."};return{title:"Failed to remove message",detail:"The queued message could not be removed."}}function E4(_){return _.status==="fulfilled"?_.value:null}function C8(_){return Math.max(0,Math.min(100,_))}function Vj(_){let $=Array.isArray(_.timelinePayload?.posts)?_.timelinePayload.posts:Array.isArray(_.rawPosts)?_.rawPosts:[],j=$.length?$[$.length-1]:null,Z=$.filter((H)=>H?.data?.is_bot_message).length,Y=$.filter((H)=>!H?.data?.is_bot_message).length,Q=Number(_.queuePayload?.count??_.followupQueueItems?.length??0)||0,q=Array.isArray(_.activeChatsPayload?.chats)?_.activeChatsPayload.chats.length:Array.isArray(_.activeChatAgents)?_.activeChatAgents.length:0,N=Array.isArray(_.branchesPayload?.chats)?_.branchesPayload.chats.length:Array.isArray(_.currentChatBranches)?_.currentChatBranches.length:0,K=Number(_.contextPayload?.percent??_.contextUsage?.percent??0)||0,G=Number(_.contextPayload?.tokens??_.contextUsage?.tokens??0)||0,X=Number(_.contextPayload?.contextWindow??_.contextUsage?.contextWindow??0)||0,V=_.modelsPayload?.current??_.activeModel??null,U=_.modelsPayload?.thinking_level??_.activeThinkingLevel??null,L=_.modelsPayload?.supports_thinking??_.supportsThinking,F=_.statusPayload?.status||(_.isAgentTurnActive?"active":"idle"),J=_.statusPayload?.data?.type||_.statusPayload?.type||null;return{generatedAt:_.generatedAt,request:_.request,chat:{currentChatJid:_.currentChatJid,rootChatJid:_.currentRootChatJid,activeChats:q,branches:N},agent:{status:F,phase:J,running:Boolean(_.isAgentTurnActive)},model:{current:V,thinkingLevel:U,supportsThinking:Boolean(L)},context:{tokens:G,contextWindow:X,percent:K},queue:{count:Q},timeline:{loadedPosts:$.length,botPosts:Z,userPosts:Y,latestPostId:j?.id??null,latestTimestamp:j?.timestamp??null},bars:[{key:"context",label:"Context",value:C8(Math.round(K))},{key:"queue",label:"Queue",value:C8(Q*18)},{key:"activeChats",label:"Active chats",value:C8(q*12)},{key:"posts",label:"Timeline load",value:C8($.length*5)}]}}function Uj(_){if(_==="followup")return{title:"Widget submission queued",detail:"The widget message was queued because the agent is busy.",kind:"info",durationMs:3500};return{title:"Widget submission sent",detail:"The widget message was sent to the chat.",kind:"info",durationMs:3500}}function Lj(_){return{title:"Widget submission failed",detail:_||"Could not send the widget message.",kind:"warning",durationMs:5000}}function Wj(_,$){return{shouldBuildDashboard:Boolean(_?.buildDashboard||_?.dashboardKind==="internal-state"),nextRefreshCount:Number($||0)+1}}function Bj(){return{title:"Dashboard built",detail:"Live dashboard state pushed into the widget.",kind:"info",durationMs:3000}}function zj(_){return{title:"Dashboard build failed",detail:_||"Could not build dashboard.",kind:"warning",durationMs:5000}}function Fj(){return{title:"Widget refresh requested",detail:"The widget received a host acknowledgement update.",kind:"info",durationMs:3000}}async function Hj(_){let{requestPayload:$=null,currentChatJid:j,currentRootChatJid:Z,getAgentStatus:Y,getAgentContext:Q,getAgentQueueState:q,getAgentModels:N,getActiveChatAgents:K,getChatBranches:G,getTimeline:X,rawPosts:V,activeChatAgents:U,currentChatBranches:L,contextUsage:F,followupQueueItems:J,activeModel:H,activeThinkingLevel:W,supportsThinking:D,isAgentTurnActive:E}=_,[C,P,v,p,M,k,B]=await Promise.allSettled([Y(j),Q(j),q(j),N(j),K(),G(Z),X(20,null,j)]);return Vj({generatedAt:new Date().toISOString(),request:$,currentChatJid:j,currentRootChatJid:Z,statusPayload:E4(C),contextPayload:E4(P),queuePayload:E4(v),modelsPayload:E4(p),activeChatsPayload:E4(M),branchesPayload:E4(k),timelinePayload:E4(B),rawPosts:V,activeChatAgents:U,currentChatBranches:L,contextUsage:F,followupQueueItems:J,activeModel:H,activeThinkingLevel:W,supportsThinking:D,isAgentTurnActive:E})}function Jj(_){let{queuedItem:$,followupQueueItemsRef:j,dismissedQueueRowIdsRef:Z,currentChatJid:Y,refreshQueueState:Q,setFollowupQueueItems:q,showIntentToast:N,steerAgentQueueItem:K}=_,G=U5(j.current,$);if(!G)return;let{rowId:X}=G;Z.current.add(X),q((V)=>D4(V,X).items),K(X,P$(Y)).then(()=>{Q()}).catch((V)=>{console.warn("[queue] Failed to steer queued item:",V);let U=S$("steer");N(U.title,U.detail,"warning"),Z.current.delete(X),Q()})}function Oj(_){let{queuedItem:$,followupQueueItemsRef:j,dismissedQueueRowIdsRef:Z,currentChatJid:Y,refreshQueueState:Q,setFollowupQueueItems:q,showIntentToast:N,clearQueuedSteerStateIfStale:K,removeAgentQueueItem:G}=_,X=U5(j.current,$);if(!X)return;let{rowId:V}=X;Z.current.add(V),K?.(X.remainingQueueCount),q((U)=>D4(U,V).items),G(V,P$(Y)).then(()=>{Q()}).catch((U)=>{console.warn("[queue] Failed to remove queued item:",U);let L=S$("remove");N(L.title,L.detail,"warning"),Z.current.delete(V),Q()})}function Dj(_){let{widget:$,dismissedLiveWidgetKeysRef:j,setFloatingWidget:Z}=_;if(!$||typeof $!=="object")return;let Y=X_($);if(Y)j.current.delete(Y);Z(Zj($,new Date().toISOString()))}function Aj(_){let{dismissedLiveWidgetKeysRef:$,setFloatingWidget:j}=_;j((Z)=>{let Y=Yj(Z);if(Y.dismissedSessionKey)$.current.add(Y.dismissedSessionKey);return Y.nextWidget})}function Ej(_){let{event:$,widget:j,currentChatJid:Z,isComposeBoxAgentActive:Y,setFloatingWidget:Q,handleCloseFloatingWidget:q,handleMessageResponse:N,showIntentToast:K,sendAgentMessage:G,buildFloatingWidgetDashboardSnapshot:X}=_,V=typeof $?.kind==="string"?$.kind:"",U=X_(j);if(!V||!U)return;if(V==="widget.close"){q();return}if(V==="widget.submit"){let L=t9($?.payload),F=e9($?.payload),J=new Date().toISOString();if(Q((H)=>Nj(H,U,{kind:V,payload:$?.payload||null,submittedAt:J,submissionText:L})),!L){if(K("Widget submission received","The widget submitted data without a message payload yet.","info",3500),F)q();return}(async()=>{try{let H=await G("default",L,null,[],Y?"queue":null,Z);N(H),Q((D)=>C$(D,U,{submittedAt:J,submissionText:L,queued:H?.queued||null}));let W=Uj(H?.queued);if(K(W.title,W.detail,W.kind,W.durationMs),F)q()}catch(H){Q((D)=>C$(D,U,{submittedAt:J,submissionText:L,errorMessage:H?.message||"Could not send the widget message."}));let W=Lj(H?.message);K(W.title,W.detail,W.kind,W.durationMs)}})();return}if(V==="widget.ready"||V==="widget.request_refresh"){let L=new Date().toISOString(),F=Wj($?.payload||null,j?.runtimeState?.refreshCount);if(Q((J)=>Kj(J,U,{kind:V,payload:$?.payload||null,eventAt:L,nextRefreshCount:F.nextRefreshCount,shouldBuildDashboard:F.shouldBuildDashboard})),V==="widget.request_refresh")if(F.shouldBuildDashboard)(async()=>{try{let J=await X($?.payload||null);Q((W)=>Gj(W,U,{dashboard:J,at:new Date().toISOString(),count:F.nextRefreshCount,echo:$?.payload||null}));let H=Bj();K(H.title,H.detail,H.kind,H.durationMs)}catch(J){Q((W)=>Xj(W,U,{errorMessage:J?.message||"Could not build dashboard.",at:new Date().toISOString(),count:F.nextRefreshCount}));let H=zj(J?.message);K(H.title,H.detail,H.kind,H.durationMs)}})();else{let J=Fj();K(J.title,J.detail,J.kind,J.durationMs)}}}function bK(_){let{dismissedLiveWidgetKeysRef:$,setFloatingWidget:j}=_;$.current.clear(),j(null)}function kj(_){let{currentChatJid:$,currentRootChatJid:j,isComposeBoxAgentActive:Z,showIntentToast:Y,setPendingExtensionPanelActions:Q,refreshAutoresearchStatus:q,stopAutoresearch:N,dismissAutoresearch:K,streamSidePrompt:G,btwAbortRef:X,btwSession:V,setBtwSession:U,sendAgentMessage:L,handleMessageResponse:F,dismissedLiveWidgetKeysRef:J,setFloatingWidget:H,getAgentStatus:W,getAgentContext:D,getAgentQueueState:E,getAgentModels:C,getActiveChatAgents:P,getChatBranches:v,getTimeline:p,rawPosts:M,activeChatAgents:k,currentChatBranches:B,contextUsage:I,followupQueueItemsRef:w,activeModel:c,activeThinkingLevel:b,supportsThinking:n,isAgentTurnActive:d}=_,r=x(async(B0,D0)=>{let S0=typeof B0?.key==="string"?B0.key:"",z0=typeof D0?.key==="string"?D0.key:"",M0=T$(S0,z0);if(!S0||!z0)return;Q((Z0)=>D9(Z0,S0,z0));try{let Z0=await E9({panel:B0,action:D0,currentChatJid:$,stopAutoresearch:N,dismissAutoresearch:K,writeClipboard:(A0)=>navigator.clipboard.writeText(A0)});if(Z0.refreshAutoresearchStatus)q();if(Z0.toast)Y(Z0.toast.title,Z0.toast.detail,Z0.toast.kind,Z0.toast.durationMs)}catch(Z0){Y("Panel action failed",Z0?.message||"Could not complete that action.","warning")}finally{Q((Z0)=>A9(Z0,M0))}},[$,K,q,Q,Y,N]),t=x(()=>{p9({btwAbortRef:X,setBtwSession:U})},[X,U]),a=x(async(B0)=>{return await h9({question:B0,currentChatJid:$,streamSidePrompt:G,resolveBtwChatJid:v9,showIntentToast:Y,btwAbortRef:X,setBtwSession:U})},[X,$,U,Y,G]),_0=x(async({content:B0})=>{return await c9({content:B0,parseBtwCommand:f9,closeBtwPanel:t,runBtwPrompt:a,showIntentToast:Y})},[t,a,Y]),N0=x(()=>{if(V?.question)a(V.question)},[V,a]),G0=x(async()=>{await l9({btwSession:V,buildBtwInjectionText:m9,isComposeBoxAgentActive:Z,currentChatJid:$,sendAgentMessage:L,handleMessageResponse:F,showIntentToast:Y})},[V,$,F,Z,L,Y]),k0=x(async(B0=null)=>{return Hj({requestPayload:B0,currentChatJid:$,currentRootChatJid:j,getAgentStatus:W,getAgentContext:D,getAgentQueueState:E,getAgentModels:C,getActiveChatAgents:P,getChatBranches:v,getTimeline:p,rawPosts:M,activeChatAgents:k,currentChatBranches:B,contextUsage:I,followupQueueItems:w.current,activeModel:c,activeThinkingLevel:b,supportsThinking:n,isAgentTurnActive:d})},[k,c,b,I,B,$,j,w,P,D,C,E,W,v,p,d,M,n]),J0=x((B0)=>{Dj({widget:B0,dismissedLiveWidgetKeysRef:J,setFloatingWidget:H})},[J,H]),X0=x(()=>{Aj({dismissedLiveWidgetKeysRef:J,setFloatingWidget:H})},[J,H]),x0=x((B0,D0)=>{Ej({event:B0,widget:D0,currentChatJid:$,isComposeBoxAgentActive:Z,setFloatingWidget:H,handleCloseFloatingWidget:X0,handleMessageResponse:F,showIntentToast:Y,sendAgentMessage:L,buildFloatingWidgetDashboardSnapshot:k0})},[k0,$,X0,F,Z,L,H,Y]);return g(()=>{bK({dismissedLiveWidgetKeysRef:J,setFloatingWidget:H})},[$,J,H]),{handleExtensionPanelAction:r,closeBtwPanel:t,handleBtwIntercept:_0,handleBtwRetry:N0,handleBtwInject:G0,handleOpenFloatingWidget:J0,handleCloseFloatingWidget:X0,handleFloatingWidgetEvent:x0}}function Ij(_,$){if(typeof _!=="string")return{kind:"ignore"};let j=_.trim();if(!j)return{kind:"toast",title:"No file selected",detail:"Use a valid file path from a file pill.",level:"warning"};if(!$.editorOpen)return{kind:"toast",title:"Editor pane is not open",detail:"Open the editor pane to open files from pills.",level:"warning"};if(/^[a-z][a-z0-9+.-]*:/i.test(j))return{kind:"toast",title:"Cannot open external path from file pill",detail:"Use an in-workspace file path.",level:"warning"};try{if(!$.resolvePane({path:j,mode:"edit"}))return{kind:"toast",title:"No editor available",detail:`No editor can open: ${j}`,level:"warning"}}catch{return{kind:"toast",title:"No editor available",detail:`No editor can open: ${j}`,level:"warning"}}return{kind:"open",path:j}}function w$(_,$){if(typeof $!=="string")return Array.isArray(_)?_:[];let j=$.trim();if(!j)return Array.isArray(_)?_:[];let Z=Array.isArray(_)?_:[];if(Z.includes(j))return Z;return[...Z,j]}function R$(_,$){let j=Array.isArray(_)?_:[];if(typeof $!=="string")return j;let Z=$.trim();if(!Z)return j;if(!j.includes(Z))return j;return j.filter((Y)=>Y!==Z)}function u$(_){if(!Array.isArray(_))return[];let $=[],j=new Set;for(let Z of _){if(typeof Z!=="string")continue;let Y=Z.trim();if(!Y||j.has(Y))continue;j.add(Y),$.push(Y)}return $}async function Mj(_){let{hashtag:$,setCurrentHashtag:j,setPosts:Z,loadPosts:Y}=_;j($),Z(null),await Y($)}async function Tj(_){let{setCurrentHashtag:$,setSearchQuery:j,setPosts:Z,loadPosts:Y}=_;$(null),j(null),Z(null),await Y()}async function xj(_){let{query:$,scope:j,currentChatJid:Z,currentRootChatJid:Y,searchPosts:Q,setSearchScope:q,setSearchQuery:N,setCurrentHashtag:K,setPosts:G,setHasMore:X}=_,V=typeof $==="string"?$.trim():"";if(!V)return;let U=j==="root"||j==="all"?j:"current";q(U),N(V),K(null),G(null);try{let L=await Q(V,50,0,Z,U,Y);G(Array.isArray(L?.results)?L.results:[]),X(!1)}catch(L){console.error("Failed to search:",L),G([])}}async function yj(_){let{post:$,posts:j,currentChatJid:Z,deletePost:Y,preserveTimelineScrollTop:Q,setPosts:q,setRemovingPostIds:N,hasMoreRef:K,loadMoreRef:G,confirm:X=(W)=>window.confirm(W),showAlert:V=(W)=>alert(W),scheduleTimeout:U=(W,D)=>{setTimeout(W,D)}}=_;if(!$)return;let L=$.id,F=typeof $?.chat_jid==="string"&&$.chat_jid.trim()?$.chat_jid.trim():Z,J=j?.filter((W)=>W?.data?.thread_id===L&&W?.id!==L).length||0;if(J>0){if(!X(`Delete this message and its ${J} replies?`))return}let H=(W)=>{if(!W.length)return;N((D)=>{let E=new Set(D);return W.forEach((C)=>E.add(C)),E}),U(()=>{if(Q(()=>{q((D)=>D?D.filter((E)=>!W.includes(E.id)):D)}),N((D)=>{let E=new Set(D);return W.forEach((C)=>E.delete(C)),E}),K.current)G.current?.({preserveScroll:!0,preserveMode:"top"})},180)};try{let W=await Y(L,J>0,F);if(W?.ids?.length)H(W.ids)}catch(W){let D=W instanceof Error?W.message:String(W||"");if(J===0&&D.includes("Replies exist")){if(!X("Delete this message and its replies?"))return;let C=await Y(L,!0,F);if(C?.ids?.length)H(C.ids);return}console.error("Failed to delete post:",W),V(`Failed to delete message: ${D}`)}}async function Pj(_){let{id:$,targetChatJid:j,currentChatJid:Z,getThread:Y,setPosts:Q,getElementById:q=(V)=>document.getElementById(V),scheduleRaf:N=(V)=>requestAnimationFrame(V),scheduleTimeout:K=(V,U)=>{setTimeout(V,U)}}=_,G=(V)=>{V.scrollIntoView({behavior:"smooth",block:"center"}),V.classList.add("post-highlight"),K(()=>V.classList.remove("post-highlight"),2000)},X=q(`post-${$}`);if(X){G(X);return}try{let V=typeof j==="string"&&j.trim()?j.trim():Z,L=(await Y($,V))?.thread?.[0];if(!L)return;Q((F)=>{if(!F)return[L];if(F.some((J)=>J.id===L.id))return F;return[...F,L]}),N(()=>{K(()=>{let F=q(`post-${$}`);if(F)G(F)},50)})}catch(V){console.error("[scrollToMessage] Failed to fetch message",$,V)}}function gK(_){if(typeof _==="string"&&_.trim())return _.trim();return"Could not send your message."}function Cj(_){let{setIntentToast:$,intentToastTimerRef:j,editorOpen:Z,openEditor:Y,resolvePane:Q,tabStripActiveId:q,setFileRefs:N,setMessageRefs:K,currentChatJid:G,getThread:X,setPosts:V}=_,U=x(()=>{if(j.current)clearTimeout(j.current),j.current=null;$(null)},[j,$]);g(()=>{return()=>{U()}},[U]);let L=x((B)=>{N((I)=>w$(I,B))},[N]),F=x((B)=>{N((I)=>R$(I,B))},[N]),J=x(()=>{N([])},[N]),H=x((B)=>{N(u$(B))},[N]),W=x((B,I=null,w="info",c=3000)=>{U(),$({title:B,detail:I||null,kind:w||"info"}),j.current=setTimeout(()=>{$((b)=>b?.title===B?null:b)},c)},[U,j,$]),D=x((B)=>{let I=Ij(B,{editorOpen:Z,resolvePane:Q});if(I.kind==="open"){Y(I.path);return}if(I.kind==="toast")W(I.title,I.detail,I.level)},[Z,Y,Q,W]),E=x(()=>{let B=q;if(B)L(B)},[L,q]),C=x((B)=>{K((I)=>w$(I,B))},[K]),P=x(async(B,I=null)=>{await Pj({id:B,targetChatJid:I,currentChatJid:G,getThread:X,setPosts:V})},[G,X,V]),v=x((B)=>{K((I)=>R$(I,B))},[K]),p=x(()=>{K([])},[K]),M=x((B)=>{K(u$(B))},[K]),k=x((B)=>{W("Compose failed",gK(B),"error",5000)},[W]);return{clearIntentToast:U,addFileRef:L,removeFileRef:F,clearFileRefs:J,setFileRefsFromCompose:H,showIntentToast:W,openFileFromPill:D,attachActiveEditorFile:E,addMessageRef:C,scrollToMessage:P,removeMessageRef:v,clearMessageRefs:p,setMessageRefsFromCompose:M,handleComposeSubmitError:k}}function mK(_){let{setExtensionStatusPanels:$,setPendingExtensionPanelActions:j}=_;$(new Map),j(new Set)}function Sj(_){let{currentChatJid:$,currentRootChatJid:j,currentHashtag:Z,searchQuery:Y,searchScope:Q,loadPosts:q,searchPosts:N,setPosts:K,setHasMore:G,scrollToBottom:X,setExtensionStatusPanels:V,setPendingExtensionPanelActions:U,paneStateOwnerChatJidRef:L,chatPaneStateByChatRef:F,snapshotCurrentChatPaneState:J,restoreChatPaneState:H,dismissedQueueRowIdsRef:W,refreshQueueState:D,refreshAgentStatus:E,refreshContextUsage:C,viewStateRef:P,refreshTimeline:v,refreshModelAndQueueState:p,setFloatingWidget:M,dismissedLiveWidgetKeysRef:k}=_;g(()=>{mK({setExtensionStatusPanels:V,setPendingExtensionPanelActions:U})},[$,V,U]),g(()=>{let w=!1;return R9({currentHashtag:Z,searchQuery:Y,searchScope:Q,currentChatJid:$,currentRootChatJid:j,loadPosts:q,searchPosts:N,setPosts:K,setHasMore:G,scrollToBottom:X,isCancelled:()=>w}),()=>{w=!0}},[$,Z,Y,Q,j,q,X,N,G,K]),g(()=>{let w=L.current||$;F.current.set(w,J())},[F,$,L,J]),g(()=>{let w=L.current||$;if(w===$)return;F.current.set(w,J()),L.current=$,W.current.clear(),H(F.current.get($)||null),D(),E(),C()},[F,$,W,L,E,C,D,H,J]);let B=x(()=>{S9({viewStateRef:P,refreshTimeline:v,refreshModelAndQueueState:p})},[p,v,P]),I=x((w,c="streaming")=>{let b=new Date().toISOString();M((n)=>Qj(n,w,{fallbackStatus:c,currentChatJid:$,dismissedSessionKeys:k.current,updatedAt:b}))},[$,k,M]);return{refreshCurrentView:B,applyLiveGeneratedWidgetUpdate:I}}function wj({handleSseEvent:_,handleConnectionStatusChange:$,loadPosts:j,onWake:Z,chatJid:Y}){let Q=y(_);Q.current=_;let q=y($);q.current=$;let N=y(j);N.current=j;let K=y(Z);K.current=Z,g(()=>{let G=new X8((V,U)=>Q.current(V,U),(V)=>q.current(V),{chatJid:Y});G.connect();let X=()=>{G.reconnectIfNeeded();let V=typeof document<"u"?document:null;if(!V||V.visibilityState==="visible")K.current?.()};return window.addEventListener("focus",X),document.addEventListener("visibilitychange",X),()=>{window.removeEventListener("focus",X),document.removeEventListener("visibilitychange",X),G.disconnect()}},[Y])}function pK(_,$){return Number.isFinite($)?Number($):_?_.replace(/\r\n/g,`
`).split(`
`).length:0}function S8(_,$){return{text:_,totalLines:pK(_,$)}}function f$(_,$){return{text:$?.text||"",totalLines:o7(_),fullText:_}}function Rj(_,$,j){return j==="replace"?$:`${_||""}${$}`}function uj(_,$){let j=_||"";if($?.reset)j="";if($?.delta)j+=String($.delta);return j}function fj(_,$){let j=_||"";if($?.reset)j="";if(typeof $?.delta==="string")j+=$.delta;return j}function m4(_,$){return Boolean(_)&&Boolean($)&&_!==$}function L5(_,$){return Boolean(_)&&!Boolean($)}function vj(_,$){return _||$||null}function w8(_){return _?.turn_id||_?.turnId||null}function W5(_){if(typeof _?.text!=="string"||!_.text)return null;let $=Number.isFinite(_?.totalLines)?Number(_.totalLines):Number.isFinite(_?.total_lines)?Number(_.total_lines):0;return{text:_.text,totalLines:$}}function v$(_,$){return typeof _?.text==="string"&&_.text.length>=$.length}function bj(_){switch(_){case"generated_widget_open":return{kind:"update",fallbackStatus:"loading",shouldAdoptTurn:!0};case"generated_widget_delta":return{kind:"update",fallbackStatus:"streaming",shouldAdoptTurn:!0};case"generated_widget_final":return{kind:"update",fallbackStatus:"final",shouldAdoptTurn:!0};case"generated_widget_error":return{kind:"update",fallbackStatus:"error",shouldAdoptTurn:!1};case"generated_widget_close":return{kind:"close",fallbackStatus:null,shouldAdoptTurn:!1};default:return{kind:null,fallbackStatus:null,shouldAdoptTurn:!1}}}function hK(_,$){return typeof _?.chat_jid==="string"&&_.chat_jid.trim()?_.chat_jid.trim():$}function gj(_,$,j){return{isStatusPanelWidgetEvent:_==="extension_ui_widget"&&$?.options?.surface==="status-panel",eventChatJid:hK($,j),panelKey:typeof $?.key==="string"?$.key:""}}function mj(_,$){if(_==="extension_ui_notify"&&typeof $?.message==="string")return{title:$.message,detail:null,kind:typeof $?.type==="string"&&$.type.trim()?$.type:"info"};if(_==="extension_ui_error"&&typeof $?.error==="string")return{title:"Extension UI error",detail:$.error,kind:"error",durationMs:5000};return null}var cK=new Set(["extension_ui_request","extension_ui_timeout","extension_ui_notify","extension_ui_status","extension_ui_working","extension_ui_widget","extension_ui_title","extension_ui_editor_text","extension_ui_error"]);function pj(_){return cK.has(String(_||"").trim())}function lK(_){let $=String(_||"").trim();if(!$.startsWith("extension_ui_"))return"piclaw-extension-ui";return`piclaw-extension-ui:${$.slice(13).replace(/_/g,"-")}`}function b$(_,$,j=globalThis.window){if(!j||typeof j.dispatchEvent!=="function"||typeof CustomEvent>"u")return!1;let Z={type:_,payload:$};return j.dispatchEvent(new CustomEvent("piclaw-extension-ui",{detail:Z})),j.dispatchEvent(new CustomEvent(lK(_),{detail:Z})),!0}function hj(_,$,j){let Z=$?.turn_id,Y=$?.chat_jid,Q=typeof Y==="string"&&Y.trim()?Y.trim():null,q=_==="connected"||_==="workspace_update";return{turnId:Z,eventChatJid:Q,isGlobalUiEvent:q,isCurrentChatEvent:Q?Q===j:q}}function cj(_){return _==="agent_draft_delta"||_==="agent_thought_delta"||_==="agent_draft"||_==="agent_thought"}function lj(_,$,j){let{currentChatJid:Z,updateAgentProfile:Y,updateUserProfile:Q,currentTurnIdRef:q,activeChatJidRef:N,pendingRequestRef:K,draftBufferRef:G,thoughtBufferRef:X,steerQueuedTurnIdRef:V,thoughtExpandedRef:U,draftExpandedRef:L,draftThrottleRef:F,thoughtThrottleRef:J,viewStateRef:H,followupQueueItemsRef:W,dismissedQueueRowIdsRef:D,scrollToBottomRef:E,hasMoreRef:C,loadMoreRef:P,lastAgentResponseRef:v,wasAgentActiveRef:p,setActiveTurn:M,applyLiveGeneratedWidgetUpdate:k,setFloatingWidget:B,clearLastActivityFlag:I,handleUiVersionDrift:w,setAgentStatus:c,setAgentDraft:b,setAgentPlan:n,setAgentThought:d,setPendingRequest:r,clearAgentRunState:t,getAgentStatus:a,noteAgentActivity:_0,showLastActivity:N0,refreshTimeline:G0,refreshModelAndQueueState:k0,refreshActiveChatAgents:J0,refreshCurrentChatBranches:X0,notifyForFinalResponse:x0,setContextUsage:B0,refreshContextUsage:D0,refreshQueueState:S0,setFollowupQueueItems:z0,clearQueuedSteerStateIfStale:M0,setSteerQueuedTurnId:Z0,applyModelState:A0,getAgentContext:v0,setExtensionStatusPanels:h0,setPendingExtensionPanelActions:d0,refreshActiveEditorFromWorkspace:c0,showIntentToast:w0,removeStalledPost:b0,setPosts:s0,preserveTimelineScrollTop:r0}=j,{turnId:U0,isCurrentChatEvent:C0}=hj(_,$,Z);if(C0)Y($),Q($);if(_==="ui_theme"){Y7($);return}let t0=bj(_);if(t0.kind==="update"){if(!C0)return;if(t0.shouldAdoptTurn&&L5(U0,q.current))M(U0);k($,t0.fallbackStatus||"streaming");return}if(t0.kind==="close"){if(!C0)return;B((h)=>qj(h,$));return}if(_?.startsWith("agent_")&&!cj(_))I();if(_==="connected"){if(w($?.app_asset_version))return;c(null),b({text:"",totalLines:0}),n(""),d({text:"",totalLines:0}),r(null),K.current=null,t();let h=Z;if(a(h).then((i)=>{if(N.current!==h)return;if(!i||i.status!=="active"||!i.data)return;let H0=i.data,T0=w8(H0);if(T0)M(T0);_0({clearSilence:!0}),N0(H0);let y0=W5(i.thought);if(y0)X.current=y0.text,d(y0);let V0=W5(i.draft);if(V0)G.current=V0.text,b(V0)}).catch((i)=>{console.warn("Failed to fetch agent status:",i)}),g_(H.current))G0();k0();return}if(_==="agent_status"){if(!C0){if($?.type==="done"||$?.type==="error")J0(),X0();return}if($.type==="done"||$.type==="error"){if(m4(U0,q.current))return;if($.type==="done"){if(x0(U0||q.current),g_(H.current))G0();if($.context_usage)B0($.context_usage)}if(D0(),p.current=!1,t(),D.current.clear(),J0(),S0(),b({text:"",totalLines:0}),n(""),d({text:"",totalLines:0}),r(null),$.type==="error")c({type:"error",title:$.title||"Agent error"}),setTimeout(()=>c(null),8000);else c(null)}else{if(U0)M(U0);if(_0({running:!0,clearSilence:!0}),$.type==="thinking")G.current="",X.current="",b({text:"",totalLines:0}),n(""),d({text:"",totalLines:0});c((h)=>{if(h&&h.type===$.type&&h.title===$.title)return h;return $})}return}if(_==="agent_steer_queued"){if(!C0)return;if(m4(U0,q.current))return;let h=vj(U0,q.current);if(!h)return;V.current=h,Z0(h);return}if(_==="agent_followup_queued"){if(!C0)return;z0((h)=>K9(h,$)),S0();return}if(_==="agent_followup_consumed"){if(!C0)return;let h=U5(W.current,$);if(h)M0(h.remainingQueueCount),z0((i)=>D4(i,h.rowId).items);if(S0(),g_(H.current))G0();return}if(_==="agent_followup_removed"){if(!C0)return;let h=U5(W.current,$);if(h)D.current.add(h.rowId),M0(h.remainingQueueCount),z0((i)=>D4(i,h.rowId).items);S0();return}if(_==="agent_draft_delta"){if(!C0)return;if(m4(U0,q.current))return;if(L5(U0,q.current))M(U0);_0({running:!0,clearSilence:!0}),G.current=uj(G.current,$);let h=Date.now();if(!F.current||h-F.current>=100){F.current=h;let i=G.current;if(L.current)b((H0)=>f$(i,H0));else b(S8(i,null))}return}if(_==="agent_draft"){if(!C0)return;if(m4(U0,q.current))return;if(L5(U0,q.current))M(U0);_0({running:!0,clearSilence:!0});let h=$.text||"",i=$.mode||($.kind==="plan"?"replace":"append");if($.kind==="plan")n((H0)=>Rj(H0,h,i));else if(!L.current)G.current=h,b(S8(h,$.total_lines));return}if(_==="agent_thought_delta"){if(!C0)return;if(m4(U0,q.current))return;if(L5(U0,q.current))M(U0);_0({running:!0,clearSilence:!0}),X.current=fj(X.current,$);let h=Date.now();if(U.current&&(!J.current||h-J.current>=100)){J.current=h;let i=X.current;d((H0)=>f$(i,H0))}return}if(_==="agent_thought"){if(!C0)return;if(m4(U0,q.current))return;if(L5(U0,q.current))M(U0);_0({running:!0,clearSilence:!0});let h=$.text||"";if(!U.current)X.current=h,d(S8(h,$.total_lines));return}if(_==="model_changed"){if(!C0)return;A0($);let h=Z;v0(h).then((i)=>{if(N.current!==h)return;if(i)B0(i)}).catch(()=>{});return}let s=gj(_,$,Z);if(s.isStatusPanelWidgetEvent){if(s.eventChatJid!==Z)return;if(!s.panelKey)return;if(h0((h)=>J9(h,$)),O9($))d0((h)=>T8(h,s.panelKey));b$(_,$);return}if(_==="workspace_update"){if(typeof window<"u")window.dispatchEvent(new CustomEvent("workspace-update",{detail:$}));c0($?.updates);return}if(pj(_)){if(!C0)return;b$(_,$);let h=mj(_,$);if(h)w0(h.title,h.detail,h.kind,h.durationMs);return}let q0=g_(H.current);if(_==="agent_response"){if(!C0)return;b0(),v.current={post:$,turnId:q.current}}if(k9(_,C0,q0))s0((h)=>I9(h,$)),E.current?.();if(_==="interaction_updated"){if(!x$(C0,q0))return;s0((h)=>M9(h,$))}if(_==="interaction_deleted"){if(!x$(C0,q0))return;let h=$?.ids||[];if(h.length){if(r0(()=>{s0((i)=>T9(i,h))}),C.current)P.current?.({preserveScroll:!0,preserveMode:"top"})}}}function nj(_){let{serverVersion:$,currentAppAssetVersion:j,staleUiVersionRef:Z,staleUiReloadScheduledRef:Y,tabStoreHasUnsaved:Q,isAgentRunningRef:q,pendingRequestRef:N,showIntentToast:K}=_,G=typeof $==="string"&&$.trim()?$.trim():null;if(!G||!j||G===j)return!1;if(Z.current===G)return!0;Z.current=G;let X=typeof document<"u"?String(document.querySelector(".compose-box textarea")?.value||"").trim():"";if(!Q()&&!X&&!q.current&&!N.current&&!Y.current)return Y.current=!0,K("Updating UI…","Reloading to apply the latest interface after restart.","info",2500),window.setTimeout(()=>{try{window.location.reload()}catch{Y.current=!1}},350),!0;return K("New UI available","Reload this page to apply the latest interface update.","warning",8000),!0}function g$(_){let{currentHashtag:$,searchQuery:j,searchOpen:Z}=_||{};return!$&&!j&&!Z}function dj(_){let{status:$,setConnectionStatus:j,setAgentStatus:Z,setAgentDraft:Y,setAgentPlan:Q,setAgentThought:q,setPendingRequest:N,pendingRequestRef:K,clearAgentRunState:G,hasConnectedOnceRef:X,viewStateRef:V,refreshTimeline:U,refreshAgentStatus:L,refreshQueueState:F,refreshContextUsage:J}=_;if(j($),$!=="connected"){Z(null),Y({text:"",totalLines:0}),Q(""),q({text:"",totalLines:0}),N(null),K.current=null,G();return}if(!X.current){if(X.current=!0,g$(V.current))U();L(),F(),J();return}if(g$(V.current))U();L(),F(),J()}function ij(_){let{viewStateRef:$,isAgentActive:j,refreshTimeline:Z,refreshQueueState:Y,refreshAgentStatus:Q,refreshContextUsage:q,refreshAutoresearchStatus:N}=_,K=g$($.current);if(j){if(K)Z();Y(),Q(),q(),N();return}if(K)Z();Q(),q(),N()}var nK=["(display-mode: standalone)","(display-mode: minimal-ui)","(display-mode: fullscreen)"];function rj(_,$={}){let j=$.window??(typeof window<"u"?window:null),Z=$.navigator??(typeof navigator<"u"?navigator:null);if(!j||typeof _!=="function")return()=>{};let Y=()=>{_(e_({window:j,navigator:Z}))};Y();let q=nK.map((N)=>{try{return j.matchMedia?.(N)??null}catch{return null}}).filter(Boolean).map((N)=>{if(typeof N.addEventListener==="function")return N.addEventListener("change",Y),()=>N.removeEventListener("change",Y);if(typeof N.addListener==="function")return N.addListener(Y),()=>N.removeListener(Y);return()=>{}});return j.addEventListener?.("focus",Y),j.addEventListener?.("pageshow",Y),()=>{for(let N of q)N();j.removeEventListener?.("focus",Y),j.removeEventListener?.("pageshow",Y)}}function oj(_,$={}){let j=$.window??(typeof window<"u"?window:null),Z=$.document??(typeof document<"u"?document:null);if(!j||!Z||typeof _!=="function")return()=>{};let Y=()=>{if(Z.visibilityState&&Z.visibilityState!=="visible")return;_()};return j.addEventListener?.("focus",Y),j.addEventListener?.("pageshow",Y),Z.addEventListener?.("visibilitychange",Y),()=>{j.removeEventListener?.("focus",Y),j.removeEventListener?.("pageshow",Y),Z.removeEventListener?.("visibilitychange",Y)}}function dK(_){return _?15000:60000}function sj(_){let{currentChatJid:$,posts:j,scrollToMessage:Z,handleConnectionStatusChange:Y,loadPosts:Q,refreshCurrentView:q,updateAgentProfile:N,updateUserProfile:K,currentTurnIdRef:G,activeChatJidRef:X,pendingRequestRef:V,draftBufferRef:U,thoughtBufferRef:L,steerQueuedTurnIdRef:F,thoughtExpandedRef:J,draftExpandedRef:H,draftThrottleRef:W,thoughtThrottleRef:D,viewStateRef:E,followupQueueItemsRef:C,dismissedQueueRowIdsRef:P,scrollToBottomRef:v,hasMoreRef:p,loadMoreRef:M,lastAgentResponseRef:k,wasAgentActiveRef:B,setActiveTurn:I,applyLiveGeneratedWidgetUpdate:w,setFloatingWidget:c,clearLastActivityFlag:b,handleUiVersionDrift:n,setAgentStatus:d,setAgentDraft:r,setAgentPlan:t,setAgentThought:a,setPendingRequest:_0,clearAgentRunState:N0,getAgentStatus:G0,noteAgentActivity:k0,showLastActivity:J0,refreshTimeline:X0,refreshModelAndQueueState:x0,refreshActiveChatAgents:B0,refreshCurrentChatBranches:D0,notifyForFinalResponse:S0,setContextUsage:z0,refreshContextUsage:M0,refreshQueueState:Z0,setFollowupQueueItems:A0,clearQueuedSteerStateIfStale:v0,setSteerQueuedTurnId:h0,applyModelState:d0,getAgentContext:c0,setExtensionStatusPanels:w0,setPendingExtensionPanelActions:b0,refreshActiveEditorFromWorkspace:s0,showIntentToast:r0,removeStalledPost:U0,setPosts:C0,preserveTimelineScrollTop:t0,finalizeStalledResponse:s,connectionStatus:q0,agentStatus:h,refreshAgentStatus:i,refreshAutoresearchStatus:H0}=_,T0=x((V0,P0)=>{lj(V0,P0,{currentChatJid:$,updateAgentProfile:N,updateUserProfile:K,currentTurnIdRef:G,activeChatJidRef:X,pendingRequestRef:V,draftBufferRef:U,thoughtBufferRef:L,steerQueuedTurnIdRef:F,thoughtExpandedRef:J,draftExpandedRef:H,draftThrottleRef:W,thoughtThrottleRef:D,viewStateRef:E,followupQueueItemsRef:C,dismissedQueueRowIdsRef:P,scrollToBottomRef:v,hasMoreRef:p,loadMoreRef:M,lastAgentResponseRef:k,wasAgentActiveRef:B,setActiveTurn:I,applyLiveGeneratedWidgetUpdate:w,setFloatingWidget:c,clearLastActivityFlag:b,handleUiVersionDrift:n,setAgentStatus:d,setAgentDraft:r,setAgentPlan:t,setAgentThought:a,setPendingRequest:_0,clearAgentRunState:N0,getAgentStatus:G0,noteAgentActivity:k0,showLastActivity:J0,refreshTimeline:X0,refreshModelAndQueueState:x0,refreshActiveChatAgents:B0,refreshCurrentChatBranches:D0,notifyForFinalResponse:S0,setContextUsage:z0,refreshContextUsage:M0,refreshQueueState:Z0,setFollowupQueueItems:A0,clearQueuedSteerStateIfStale:v0,setSteerQueuedTurnId:h0,applyModelState:d0,getAgentContext:c0,setExtensionStatusPanels:w0,setPendingExtensionPanelActions:b0,refreshActiveEditorFromWorkspace:s0,showIntentToast:r0,removeStalledPost:U0,setPosts:C0,preserveTimelineScrollTop:t0})},[X,w,d0,N0,b,v0,$,G,P,U,H,W,C,c0,G0,n,p,k,M,k0,S0,V,t0,B0,s0,M0,D0,x0,Z0,X0,U0,v,I,r,t,d,a,z0,w0,c,A0,b0,_0,C0,h0,r0,J0,F,L,J,D,N,K,E,B]);g(()=>{if(typeof window>"u")return;let V0=window.__PICLAW_TEST_API||{};return V0.emit=T0,V0.reset=()=>{U0(),N0(),d(null),r({text:"",totalLines:0}),t(""),a({text:"",totalLines:0}),_0(null)},V0.finalize=()=>s(),window.__PICLAW_TEST_API=V0,()=>{if(window.__PICLAW_TEST_API===V0)window.__PICLAW_TEST_API=void 0}},[N0,s,T0,U0,r,t,d,a,_0]),wj({handleSseEvent:T0,handleConnectionStatusChange:Y,loadPosts:Q,onWake:q,chatJid:$}),g(()=>{if(!j||j.length===0)return;let V0=location.hash;if(!V0||!V0.startsWith("#msg-"))return;let P0=V0.slice(5);Z(P0),history.replaceState(null,"",location.pathname+location.search)},[j,Z]);let y0=h!==null;g(()=>{if(q0!=="connected")return;let V0=dK(y0),P0=setInterval(()=>{ij({viewStateRef:E,isAgentActive:y0,refreshTimeline:X0,refreshQueueState:Z0,refreshAgentStatus:i,refreshContextUsage:M0,refreshAutoresearchStatus:H0})},V0);return()=>clearInterval(P0)},[q0,y0,i,H0,M0,Z0,X0,E]),g(()=>{return oj(()=>{i(),M0(),Z0(),H0()})},[i,H0,M0,Z0])}async function aj(_){let{currentChatJid:$,getAgentStatus:j,activeChatJidRef:Z,wasAgentActiveRef:Y,viewStateRef:Q,refreshTimeline:q,clearAgentRunState:N,agentStatusRef:K,pendingRequestRef:G,thoughtBufferRef:X,draftBufferRef:V,setAgentStatus:U,setAgentDraft:L,setAgentPlan:F,setAgentThought:J,setPendingRequest:H,setActiveTurn:W,noteAgentActivity:D,clearLastActivityFlag:E}=_,C=$;try{let P=await j(C);if(Z.current!==C)return null;if(!P||P.status!=="active"||!P.data){if(Y.current&&g_(Q.current))q();return Y.current=!1,N(),K.current=null,U(null),L({text:"",totalLines:0}),F(""),J({text:"",totalLines:0}),H(null),G.current=null,P??null}Y.current=!0;let v=P.data;K.current=v;let p=w8(v);if(p)W(p);D({running:!0,clearSilence:!0}),E(),U(v);let M=W5(P.thought);if(M)J((B)=>{if(v$(B,M.text))return B;return X.current=M.text,M});let k=W5(P.draft);if(k)L((B)=>{if(v$(B,k.text))return B;return V.current=k.text,k});return P}catch(P){return console.warn("Failed to fetch agent status:",P),null}}async function tj(_){let{isAgentRunningRef:$,pendingRequestRef:j,currentTurnIdRef:Z,silentRecoveryRef:Y,silenceRefreshMs:Q,viewStateRef:q,refreshTimeline:N,refreshQueueState:K,refreshAgentStatus:G,now:X=()=>Date.now()}=_;if(!$.current)return null;if(j.current)return null;let V=Z.current||null,U=Y.current,L=X();if(U.inFlight)return null;if(U.turnId===V&&L-U.lastAttemptAt<Q)return null;U.inFlight=!0,U.lastAttemptAt=L,U.turnId=V;try{if(g_(q.current))await N();return await K(),await G()}finally{U.inFlight=!1}}function ej(_){let{isAgentRunningRef:$,pendingRequestRef:j,lastAgentEventRef:Z,lastSilenceNoticeRef:Y,agentStatusRef:Q,silenceWarningMs:q,silenceFinalizeMs:N,silenceRefreshMs:K,isCompactionStatus:G,setAgentStatus:X,reconcileSilentTurn:V,now:U=()=>Date.now()}=_;if(!$.current)return;if(j.current)return;let L=Z.current;if(!L)return;let F=U(),J=F-L,H=G(Q.current);if(J>=N){if(!H)X({type:"waiting",title:"Re-syncing after a quiet period…"});V();return}if(J>=q&&F-Y.current>=K){if(!H){let W=Math.floor(J/1000);X({type:"waiting",title:`Waiting for model… No events for ${W}s`})}Y.current=F,V()}}function _Z(_){let{isAgentRunningRef:$,lastSilenceNoticeRef:j,lastAgentEventRef:Z,currentTurnIdRef:Y,thoughtExpandedRef:Q,draftExpandedRef:q,draftBufferRef:N,thoughtBufferRef:K,pendingRequestRef:G,lastAgentResponseRef:X,stalledPostIdRef:V,scrollToBottomRef:U,setCurrentTurnId:L,setAgentDraft:F,setAgentPlan:J,setAgentThought:H,setPendingRequest:W,setAgentStatus:D,setPosts:E,dedupePosts:C,now:P=()=>Date.now(),nowIso:v=()=>new Date().toISOString()}=_;if(!$.current)return;$.current=!1,j.current=0,Z.current=null,Y.current=null,L(null),Q.current=!1,q.current=!1;let p=(N.current||"").trim();if(N.current="",K.current="",F({text:"",totalLines:0}),J(""),H({text:"",totalLines:0}),W(null),G.current=null,X.current=null,!p){D({type:"error",title:"Response stalled - No content received"});return}let k=`${p}${`

⚠️ Response may be incomplete - the model stopped responding`}`,B=P(),I=v(),w={id:B,timestamp:I,data:{type:"agent_response",content:k,agent_id:"default",is_local_stall:!0}};V.current=B,E((c)=>c?C([...c,w]):[w]),U.current?.(),D(null)}function iK(_){return Math.min(1000,Math.max(100,Math.floor(_/2)))}function $Z(_){let{currentChatJid:$,activeChatJidRef:j,queueRefreshGenRef:Z,dismissedQueueRowIdsRef:Y,getAgentQueueState:Q,setFollowupQueueItems:q,clearQueuedSteerStateIfStale:N,getAgentContext:K,setContextUsage:G,getAutoresearchStatus:X,setExtensionStatusPanels:V,setPendingExtensionPanelActions:U,getAgentStatus:L,wasAgentActiveRef:F,viewStateRef:J,refreshTimeline:H,clearAgentRunState:W,agentStatusRef:D,pendingRequestRef:E,thoughtBufferRef:C,draftBufferRef:P,setAgentStatus:v,setAgentDraft:p,setAgentPlan:M,setAgentThought:k,setPendingRequest:B,setActiveTurn:I,noteAgentActivity:w,clearLastActivityFlag:c,isAgentRunningRef:b,currentTurnIdRef:n,silentRecoveryRef:d,silenceRefreshMs:r,lastAgentEventRef:t,lastSilenceNoticeRef:a,silenceWarningMs:_0,silenceFinalizeMs:N0,isCompactionStatus:G0,serverVersionContext:k0,setConnectionStatus:J0,setPendingRequestForConnection:X0,hasConnectedOnceRef:x0}=_,B0=x(()=>{x9({currentChatJid:$,queueRefreshGenRef:Z,activeChatJidRef:j,dismissedQueueRowIdsRef:Y,getAgentQueueState:Q,setFollowupQueueItems:q,clearQueuedSteerStateIfStale:N})},[j,N,$,Y,Q,Z,q]),D0=x(async()=>{await y9({currentChatJid:$,activeChatJidRef:j,getAgentContext:K,setContextUsage:G})},[j,$,K,G]),S0=x(async()=>{await P9({currentChatJid:$,activeChatJidRef:j,getAutoresearchStatus:X,setExtensionStatusPanels:V,setPendingExtensionPanelActions:U})},[j,$,X,V,U]),z0=x(async()=>{return await aj({currentChatJid:$,getAgentStatus:L,activeChatJidRef:j,wasAgentActiveRef:F,viewStateRef:J,refreshTimeline:H,clearAgentRunState:W,agentStatusRef:D,pendingRequestRef:E,thoughtBufferRef:C,draftBufferRef:P,setAgentStatus:v,setAgentDraft:p,setAgentPlan:M,setAgentThought:k,setPendingRequest:B,setActiveTurn:I,noteAgentActivity:w,clearLastActivityFlag:c})},[j,D,W,c,$,P,L,w,E,H,I,p,M,v,k,B,C,J,F]),M0=x(async()=>{return await tj({isAgentRunningRef:b,pendingRequestRef:E,currentTurnIdRef:n,silentRecoveryRef:d,silenceRefreshMs:r,viewStateRef:J,refreshTimeline:H,refreshQueueState:B0,refreshAgentStatus:z0})},[n,b,E,z0,B0,H,r,d,J]);g(()=>{let v0=iK(_0),h0=setInterval(()=>{ej({isAgentRunningRef:b,pendingRequestRef:E,lastAgentEventRef:t,lastSilenceNoticeRef:a,agentStatusRef:D,silenceWarningMs:_0,silenceFinalizeMs:N0,silenceRefreshMs:r,isCompactionStatus:G0,setAgentStatus:v,reconcileSilentTurn:M0})},v0);return()=>clearInterval(h0)},[D,b,G0,t,a,E,M0,v,N0,r,_0]);let Z0=x((v0)=>{return nj({serverVersion:v0,...k0})},[k0]),A0=x((v0)=>{dj({status:v0,setConnectionStatus:J0,setAgentStatus:v,setAgentDraft:p,setAgentPlan:M,setAgentThought:k,setPendingRequest:X0,pendingRequestRef:E,clearAgentRunState:W,hasConnectedOnceRef:x0,viewStateRef:J,refreshTimeline:H,refreshAgentStatus:z0,refreshQueueState:B0,refreshContextUsage:D0})},[W,x0,E,z0,D0,B0,H,p,M,v,k,J0,X0,J]);return{refreshQueueState:B0,refreshContextUsage:D0,refreshAutoresearchStatus:S0,refreshAgentStatus:z0,handleUiVersionDrift:Z0,handleConnectionStatusChange:A0}}function jZ(_={}){return e_(_)&&L8(_)}function rK(_={}){let $=_.window??(typeof window<"u"?window:null),j=Number($?.visualViewport?.height||0);if(Number.isFinite(j)&&j>0)return Math.round(j);let Z=Number($?.innerHeight||0);if(Number.isFinite(Z)&&Z>0)return Math.round(Z);return null}function oK(_={},$={}){if(!jZ(_))return null;let j=_.window??(typeof window<"u"?window:null),Z=_.document??(typeof document<"u"?document:null);if(!j||!Z?.documentElement)return null;let Y=rK({window:j});if(Y&&Y>0)Z.documentElement.style.setProperty("--app-height",`${Y}px`);if($.resetScroll===!0){try{if(typeof j.scrollTo==="function")j.scrollTo(0,0)}catch{}try{if(Z.scrollingElement)Z.scrollingElement.scrollTop=0,Z.scrollingElement.scrollLeft=0;if(Z.documentElement)Z.documentElement.scrollTop=0,Z.documentElement.scrollLeft=0;if(Z.body)Z.body.scrollTop=0,Z.body.scrollLeft=0}catch{}}return Y}function ZZ(_={}){if(!jZ(_))return()=>{};let $=_.window??(typeof window<"u"?window:null),j=_.document??(typeof document<"u"?document:null);if(!$||!j)return()=>{};let Z=0,Y=new Set,Q=()=>{if(Z)$.cancelAnimationFrame?.(Z),Z=0;for(let V of Y)$.clearTimeout?.(V);Y.clear()},q=()=>{Z=0,oK({window:$,document:j})},N=()=>{if(Z)$.cancelAnimationFrame?.(Z);Z=$.requestAnimationFrame?.(q)??0},K=()=>{N();for(let V of[80,220,420]){let U=$.setTimeout?.(()=>{Y.delete(U),N()},V);if(U!=null)Y.add(U)}},G=()=>{if(j.visibilityState&&j.visibilityState!=="visible")return;K()},X=$.visualViewport;return K(),$.addEventListener("focus",K),$.addEventListener("pageshow",K),$.addEventListener("resize",K),$.addEventListener("orientationchange",K),j.addEventListener("visibilitychange",G),j.addEventListener("focusin",K,!0),X?.addEventListener?.("resize",K),X?.addEventListener?.("scroll",K),()=>{Q(),$.removeEventListener("focus",K),$.removeEventListener("pageshow",K),$.removeEventListener("resize",K),$.removeEventListener("orientationchange",K),j.removeEventListener("visibilitychange",G),j.removeEventListener("focusin",K,!0),X?.removeEventListener?.("resize",K),X?.removeEventListener?.("scroll",K)}}function sK(_,$){if(typeof window<"u")console.warn(`[app] API export missing: ${_}. Using fallback behavior.`);return async()=>$}function l1(_,$,j){let Z=_?.[$];return typeof Z==="function"?Z:sK($,j)}function YZ(_,$={}){let j=$.document??(typeof document<"u"?document:null);if(!j)return()=>{};let Z=_?.openTab,Y=_?.popOutPane,Q=(K)=>{let G=K?.detail?.path,X=typeof K?.detail?.label==="string"&&K.detail.label.trim()?K.detail.label.trim():void 0;if(G)Z?.(G,X)},q=(K)=>{let G=K?.detail?.path,X=typeof K?.detail?.label==="string"&&K.detail.label.trim()?K.detail.label.trim():void 0;if(G)Y?.(G,X)},N=["office-viewer:open-tab","drawio:open-tab","csv-viewer:open-tab","pdf-viewer:open-tab","image-viewer:open-tab","video-viewer:open-tab","vnc:open-tab"];return N.forEach((K)=>j.addEventListener(K,Q)),j.addEventListener("pane:popout",q),()=>{N.forEach((K)=>j.removeEventListener(K,Q)),j.removeEventListener("pane:popout",q)}}function QZ(_,$={}){let j=$.document??(typeof document<"u"?document:null);if(!j)return()=>{};let Z=(Y)=>{if(Y?.ctrlKey&&Y.key==="`")Y.preventDefault?.(),_?.()};return j.addEventListener("keydown",Z),()=>j.removeEventListener("keydown",Z)}function qZ(_,$={}){let j=$.document??(typeof document<"u"?document:null);if(!j)return()=>{};let Z=_?.toggleZenMode,Y=_?.exitZenMode,Q=typeof _?.isZenModeActive==="function"?_.isZenModeActive:()=>Boolean(_?.zenMode),q=(N)=>{if(N?.ctrlKey&&N.shiftKey&&(N.key==="Z"||N.key==="z")){N.preventDefault?.(),Z?.();return}if(N?.key==="Escape"&&Q())N.preventDefault?.(),Y?.()};return j.addEventListener("keydown",q),()=>j.removeEventListener("keydown",q)}function NZ(_,$){let j=Array.isArray(_)?_:[];return j.find((Z)=>Z?.id===$)||j[0]||null}function KZ(_,$){if(!$||!_||typeof _.get!=="function")return null;return _.get($)||null}function GZ(_,$,j){return _||$?.label||j||"Pane"}function XZ(_,$,j){let Z=Array.isArray(_)?_.length:0,Y=Boolean(j&&$?.has?.(j));return Z>1||Y}function VZ(_,$){let j=typeof _==="string"?_:"";return j===$||j.startsWith(`${$}/`)}function UZ(_,$,j,Z){return _===$&&!j||Z}function LZ(_,$,j,Z,Y){return _||!$&&(j||Z&&Y)}function R8(_){let $=m$(_);return $?`@${$}`:""}function m$(_){return String(_||"").trim().toLowerCase().replace(/[^a-z0-9_-]+/g,"-").replace(/^-+|-+$/g,"").replace(/-{2,}/g,"-")}function u8(_,$=""){let j=String(_||""),Z=m$(j),Y=m$($);if(!j.trim())return{normalized:Z,handle:"",canSubmit:!1,kind:"error",message:"Enter a branch handle."};if(!Z)return{normalized:Z,handle:"",canSubmit:!1,kind:"error",message:"Handle must contain at least one letter or number."};let Q=`@${Z}`;if(Z===Y)return{normalized:Z,handle:Q,canSubmit:!1,kind:"info",message:`Already using ${Q}.`};if(Z!==j.trim())return{normalized:Z,handle:Q,canSubmit:!0,kind:"info",message:`Will save as ${Q}. Letters, numbers, - and _ are allowed; leading @ is optional.`};return{normalized:Z,handle:Q,canSubmit:!0,kind:"success",message:`Saving as ${Q}.`}}function WZ(_,$){let j=typeof _?.agent_name==="string"&&_.agent_name.trim()?R8(_.agent_name):String($||"").trim(),Z=typeof _?.chat_jid==="string"&&_.chat_jid.trim()?_.chat_jid.trim():String($||"").trim();return`${j} — ${Z} • current branch`}function aK(_,$={}){let j=[],Z=typeof $.currentChatJid==="string"?$.currentChatJid.trim():"",Y=typeof _?.chat_jid==="string"?_.chat_jid.trim():"";if(Z&&Y===Z)j.push("current");if(_?.archived_at)j.push("archived");else if(_?.is_active)j.push("active");return j}function f8(_,$={}){let j=R8(_?.agent_name)||String(_?.chat_jid||"").trim(),Z=typeof _?.chat_jid==="string"&&_.chat_jid.trim()?_.chat_jid.trim():"unknown-chat",Y=aK(_,$);return Y.length>0?`${j} — ${Z} • ${Y.join(" • ")}`:`${j} — ${Z}`}function BZ(_,$,j){let Z=R8(_),Y=R8($),Q=String(j||"").trim();if(Z&&Y&&Z!==Y)return`Restored archived ${Z} as ${Y} because ${Z} is already in use.`;if(Y)return`Restored ${Y}.`;if(Z)return`Restored ${Z}.`;return`Restored ${Q||"branch"}.`}var tK="piclaw_btw_session",FZ=900,zZ="__piclawRenameBranchFormLock__";function eK(){try{return import.meta.url}catch{return null}}function p$(_){let $=typeof _==="string"?_.trim().toLowerCase():"";return $==="1"||$==="true"||$==="yes"}function v8(_,$,j=""){let Z=_?.get?.($);return Z&&Z.trim()?Z.trim():j}function HZ(_={}){let $=_.importMetaUrl===void 0?eK():_.importMetaUrl,j=_.document===void 0?typeof document<"u"?document:null:_.document,Z=_.origin===void 0?typeof window<"u"?window.location.origin:"http://localhost":_.origin||"http://localhost";try{let Y=$?new URL($).searchParams.get("v"):null;if(Y&&Y.trim())return Y.trim()}catch{}try{let Q=Array.from(j?.querySelectorAll?.('script[type="module"][src]')||[]).find((K)=>String(K?.getAttribute?.("src")||"").includes("/static/dist/app.bundle.js"))?.getAttribute?.("src")||"";if(!Q)return null;let N=new URL(Q,Z).searchParams.get("v");return N&&N.trim()?N.trim():null}catch{return null}}function JZ(_={}){let $=_.window===void 0?typeof window<"u"?window:null:_.window;if(!$)return null;let j=$[zZ];if(j&&typeof j==="object")return j;let Z={inFlight:!1,cooldownUntil:0};return $[zZ]=Z,Z}function OZ(_){if(_==="root")return"Branch family";if(_==="all")return"All chats";return"Current branch"}function DZ(_={}){let $=typeof _.readItem==="function"?_.readItem:K_,j=_.storageKey||tK,Z=$(j);if(!Z)return null;try{let Y=JSON.parse(Z);if(!Y||typeof Y!=="object")return null;let Q=typeof Y.question==="string"?Y.question:"",q=typeof Y.answer==="string"?Y.answer:"",N=typeof Y.thinking==="string"?Y.thinking:"",K=typeof Y.error==="string"&&Y.error.trim()?Y.error:null,G=Y.status==="running"?"error":Y.status==="success"||Y.status==="error"?Y.status:"success";return{question:Q,answer:q,thinking:N,error:G==="error"?K||"BTW stream interrupted. You can retry.":K,model:null,status:G}}catch{return null}}function AZ(_,$={}){let j=$.defaultChatJid||"web:default",Z=v8(_,"chat_jid",j),Y=p$(_?.get?.("chat_only")||_?.get?.("chat-only")),Q=p$(_?.get?.("pane_popout")),q=v8(_,"pane_path"),N=v8(_,"pane_label"),K=p$(_?.get?.("branch_loader")),G=v8(_,"branch_source_chat_jid",Z);return{currentChatJid:Z,chatOnlyMode:Y,panePopoutMode:Q,panePopoutPath:q,panePopoutLabel:N,branchLoaderMode:K,branchLoaderSourceChatJid:G}}function EZ(_){let{hasWindow:$=typeof window<"u",currentBranchRecord:j,renameBranchInFlight:Z,renameBranchLockUntil:Y,getFormLock:Q,setRenameBranchNameDraft:q,setIsRenameBranchFormOpen:N,now:K=Date.now()}=_;if(!$||!j?.chat_jid)return!1;let G=Q?.()||null;if(!G)return!1;if(Z||K<Number(Y||0)||G.inFlight||K<Number(G.cooldownUntil||0))return!1;return q?.(j.agent_name||""),N?.(!0),!0}function kZ(_){let{setIsRenameBranchFormOpen:$,setRenameBranchNameDraft:j}=_;$?.(!1),j?.("")}async function IZ(_){let{hasWindow:$=typeof window<"u",currentBranchRecord:j,nextName:Z,openRenameForm:Y,renameBranchInFlightRef:Q,renameBranchLockUntilRef:q,getFormLock:N,setIsRenamingBranch:K,renameChatBranch:G,refreshActiveChatAgents:X,refreshCurrentChatBranches:V,showIntentToast:U,closeRenameForm:L,now:F=()=>Date.now()}=_;if(!$||!j?.chat_jid)return!1;if(typeof Z!=="string")return Y?.(),!1;let J=F(),H=N?.()||null;if(!H)return!1;if(Q.current||J<Number(q.current||0)||H.inFlight||J<Number(H.cooldownUntil||0))return!1;Q.current=!0,H.inFlight=!0,K?.(!0);try{let W=j.agent_name||"",D=u8(Z,W);if(!D.canSubmit)return U?.("Could not rename branch",D.message||"Enter a valid branch handle.","warning",4000),!1;let E=D.normalized||W,C=await G(j.chat_jid,{agentName:E});await Promise.allSettled([X?.(),V?.()]);let P=C?.branch?.agent_name||E||W;return U?.("Branch renamed",`@${P}`,"info",3500),L?.(),!0}catch(W){let D=W instanceof Error?W.message:String(W||"Could not rename branch."),E=/already in use/i.test(D||"")?`${D} Switch to or restore that existing session from the session manager.`:D;return U?.("Could not rename branch",E||"Could not rename branch.","warning",5000),!1}finally{Q.current=!1,K?.(!1);let W=F()+FZ;q.current=W;let D=N?.()||null;if(D)D.inFlight=!1,D.cooldownUntil=W}}async function MZ(_){let{hasWindow:$=typeof window<"u",targetChatJid:j=null,currentChatJid:Z,currentBranchRecord:Y,currentChatBranches:Q=[],activeChatAgents:q=[],pruneChatBranch:N,refreshActiveChatAgents:K,refreshCurrentChatBranches:G,showIntentToast:X,baseHref:V,chatOnlyMode:U,navigate:L,confirm:F=(v)=>window.confirm(v)}=_;if(!$)return!1;let J=typeof j==="string"&&j.trim()?j.trim():"",H=typeof Z==="string"&&Z.trim()?Z.trim():"",W=J||Y?.chat_jid||H;if(!W)return X?.("Could not prune branch","No active session is selected yet.","warning",4000),!1;let D=(Y?.chat_jid===W?Y:null)||Q.find((v)=>v?.chat_jid===W)||q.find((v)=>v?.chat_jid===W)||null;if(D?.chat_jid===(D?.root_chat_jid||D?.chat_jid))return X?.("Cannot prune branch","The root chat branch cannot be pruned.","warning",4000),!1;let C=`@${D?.agent_name||W}${D?.chat_jid?` — ${D.chat_jid}`:""}`;if(!F(`Prune ${C}?

This archives the branch agent and removes it from the branch picker. Chat history is preserved.`))return!1;try{await N(W),await Promise.allSettled([K?.(),G?.()]);let v=D?.root_chat_jid||"web:default";X?.("Branch pruned",`${C} has been archived.`,"info",3000);let p=_4(V,v,{chatOnly:U});return L?.(p),!0}catch(v){let p=v instanceof Error?v.message:String(v||"Could not prune branch.");return X?.("Could not prune branch",p||"Could not prune branch.","warning",5000),!1}}async function TZ(_){let{targetChatJid:$,restoreChatBranch:j,currentChatBranches:Z=[],refreshActiveChatAgents:Y,refreshCurrentChatBranches:Q,showIntentToast:q,baseHref:N,chatOnlyMode:K,navigate:G}=_,X=typeof $==="string"?$.trim():"";if(!X||typeof j!=="function")return!1;try{let V=Z.find((W)=>W?.chat_jid===X)||null,U=await j(X);await Promise.allSettled([Y?.(),Q?.()]);let L=U?.branch,F=typeof L?.chat_jid==="string"&&L.chat_jid.trim()?L.chat_jid.trim():X,J=BZ(V?.agent_name,L?.agent_name,F);q?.("Branch restored",J,"info",4200);let H=_4(N,F,{chatOnly:K});return G?.(H),!0}catch(V){let U=V instanceof Error?V.message:String(V||"Could not restore branch.");return q?.("Could not restore branch",U||"Could not restore branch.","warning",5000),!1}}async function xZ(_){let{branchLoaderSourceChatJid:$,forkChatBranch:j,setBranchLoaderState:Z,navigate:Y,baseHref:Q,isCancelled:q=()=>!1}=_;try{Z?.({status:"running",message:"Preparing a new chat branch…"});let N=await j($);if(q())return!1;let K=N?.branch,G=typeof K?.chat_jid==="string"&&K.chat_jid.trim()?K.chat_jid.trim():null;if(!G)throw Error("Branch fork did not return a chat id.");let X=_4(Q,G,{chatOnly:!0});return Y?.(X,{replace:!0}),!0}catch(N){if(q())return!1;return Z?.({status:"error",message:M5(N)}),!1}}function yZ(_){let{hasWindow:$=typeof window<"u",nextChatJid:j,currentChatJid:Z,chatOnlyMode:Y,currentHref:Q,navigate:q}=_;if(!$)return!1;let N=typeof j==="string"?j.trim():"";if(!N||N===Z)return!1;let K=_4(Q,N,{chatOnly:Y});return q?.(K),!0}async function PZ(_){let{panePath:$,tabStripActiveId:j,editorInstanceRef:Z,dockInstanceRef:Y,terminalTabPath:Q}=_,N=(typeof j==="string"?j.trim():"")===$?Z.current:$===Q?Y.current:null;if(typeof N?.preparePopoutTransfer!=="function")return null;return await N.preparePopoutTransfer()}function CZ(_){let{panePath:$,terminalTabPath:j,dockVisible:Z,resolveTab:Y,closeTab:Q,setDockVisible:q}=_,N=Y($);if(N&&!N.dirty){Q($);return}if($===j&&Z)q(!1)}function SZ(_){let{hasWindow:$=typeof window<"u",editorOpen:j,shellElement:Z,editorWidthRef:Y,dockHeightRef:Q,sidebarWidthRef:q,readStoredNumber:N}=_;if(!j||!$||!Z)return;if(!Y.current){let K=N("editorWidth",null),G=q.current||280;Y.current=Number.isFinite(K)?Number(K):G}if(Z.style.setProperty("--editor-width",`${Y.current}px`),!Q.current){let K=N("dockHeight",null);Q.current=Number.isFinite(K)?Number(K):200}Z.style.setProperty("--dock-height",`${Q.current}px`)}async function wZ(_){let{currentChatJid:$,chatOnlyMode:j,forkChatBranch:Z,refreshActiveChatAgents:Y,refreshCurrentChatBranches:Q,showIntentToast:q,navigate:N,baseHref:K}=_;try{let X=(await Z($))?.branch,V=typeof X?.chat_jid==="string"&&X.chat_jid.trim()?X.chat_jid.trim():null;if(!V)throw Error("Branch fork did not return a chat id.");await Promise.allSettled([Y?.(),Q?.()]);let U=X?.agent_name?`@${X.agent_name}`:V;q?.("New branch created",`Switched to ${U}.`,"info",2500);let L=_4(K,V,{chatOnly:j});return N?.(L),!0}catch(G){return q?.("Could not create branch",M5(G),"warning",5000),!1}}async function RZ(_){let{hasWindow:$=typeof window<"u",isWebAppMode:j=!1,path:Z,label:Y,showIntentToast:Q,resolveSourceTransfer:q,closeSourcePaneIfTransferred:N,currentChatJid:K,baseHref:G}=_;if(!$||j)return!1;let X=typeof Z==="string"&&Z.trim()?Z.trim():"";if(!X)return!1;let V=X2(X);if(!V)return Q?.("Could not open pane window","Opening pane windows is unavailable in standalone webapp mode.","warning",5000),!1;let U=v6(V);if(!U)return Q?.("Could not open pane window","The browser blocked opening a new tab or window.","warning",5000),!1;b6(U,{title:typeof Y==="string"&&Y.trim()?`Opening ${Y}…`:"Opening pane…",message:"Preparing a standalone pane window. This should only take a moment."});try{let L=await q?.(X),F=G2(G,X,{label:typeof Y==="string"&&Y.trim()?Y.trim():void 0,chatJid:K,params:L});return g6(U,F),N?.(X),!0}catch(L){m6(U);let F=L instanceof Error?L.message:"Could not transfer pane state to the new window.";return Q?.("Could not open pane window",F,"warning",5000),!1}}async function uZ(_){let{hasWindow:$=typeof window<"u",isWebAppMode:j=!1,currentChatJid:Z,currentRootChatJid:Y,forkChatBranch:Q,getActiveChatAgents:q,getChatBranches:N,setActiveChatAgents:K,setCurrentChatBranches:G,showIntentToast:X,baseHref:V}=_;if(!$||j)return!1;let U=N2(Z);if(!U)return X?.("Could not open branch window","Opening branch windows is unavailable in standalone webapp mode.","warning",5000),!1;if(U.mode==="tab"){let F=K2(V,Z,{chatOnly:!0});if(!window.open(F,U.target))return X?.("Could not open branch window","The browser blocked opening a new tab or window.","warning",5000),!1;return!0}let L=v6(U);if(!L)return X?.("Could not open branch window","The browser blocked opening a new tab or window.","warning",5000),!1;b6(L,{title:"Opening branch…",message:"Preparing a new chat branch. This should only take a moment."});try{let J=(await Q(Z))?.branch,H=typeof J?.chat_jid==="string"&&J.chat_jid.trim()?J.chat_jid.trim():null;if(!H)throw Error("Branch fork did not return a chat id.");try{let D=await q?.();K?.(Array.isArray(D?.chats)?D.chats:[])}catch{}try{let D=await N?.(Y);G?.(Array.isArray(D?.chats)?D.chats:[])}catch{}let W=_4(V,H,{chatOnly:!0});return g6(L,W),!0}catch(F){return m6(L),X?.("Could not open branch window",M5(F),"error",5000),!1}}function _G(_){_(($)=>!$)}function $G(_){let{nextChatJid:$,currentChatJid:j,chatOnlyMode:Z,navigate:Y,hasWindow:Q=typeof window<"u",currentHref:q=Q?window.location.href:"http://localhost/"}=_;return yZ({hasWindow:Q,nextChatJid:$,currentChatJid:j,chatOnlyMode:Z,currentHref:q,navigate:Y})}function jG(_){let{currentBranchRecord:$,renameBranchInFlight:j,renameBranchLockUntil:Z,getFormLock:Y,setRenameBranchNameDraft:Q,setIsRenameBranchFormOpen:q,hasWindow:N=typeof window<"u"}=_;return EZ({hasWindow:N,currentBranchRecord:$,renameBranchInFlight:j,renameBranchLockUntil:Z,getFormLock:Y,setRenameBranchNameDraft:Q,setIsRenameBranchFormOpen:q})}function ZG(_){kZ(_)}async function YG(_){let{hasWindow:$=typeof window<"u",...j}=_;await IZ({hasWindow:$,...j})}async function QG(_){let{hasWindow:$=typeof window<"u",baseHref:j=$?window.location.href:"http://localhost/",...Z}=_;await MZ({hasWindow:$,baseHref:j,...Z})}async function qG(_){let{hasWindow:$=typeof window<"u",baseHref:j=$?window.location.href:"http://localhost/",...Z}=_;await TZ({baseHref:j,...Z})}function NG(_){let{branchLoaderMode:$,branchLoaderSourceChatJid:j,forkChatBranch:Z,setBranchLoaderState:Y,navigate:Q,hasWindow:q=typeof window<"u",baseHref:N=q?window.location.href:"http://localhost/",runBranchLoaderImpl:K=xZ}=_;if(!$||!q)return;let G=!1;return K({branchLoaderSourceChatJid:j,forkChatBranch:Z,setBranchLoaderState:Y,navigate:Q,baseHref:N,isCancelled:()=>G}),()=>{G=!0}}async function KG(_){let{hasWindow:$=typeof window<"u",baseHref:j=$?window.location.href:"http://localhost/",...Z}=_;await wZ({baseHref:j,...Z})}async function GG(_){let{isWebAppMode:$,path:j,label:Z,showIntentToast:Y,currentChatJid:Q,tabStripActiveId:q,editorInstanceRef:N,dockInstanceRef:K,terminalTabPath:G,dockVisible:X,resolveTab:V,closeTab:U,setDockVisible:L,hasWindow:F=typeof window<"u",baseHref:J=F?window.location.href:"http://localhost/"}=_;await RZ({hasWindow:F,isWebAppMode:$,path:j,label:Z,showIntentToast:Y,currentChatJid:Q,baseHref:J,resolveSourceTransfer:(H)=>PZ({panePath:H,tabStripActiveId:q,editorInstanceRef:N,dockInstanceRef:K,terminalTabPath:G}),closeSourcePaneIfTransferred:(H)=>{CZ({panePath:H,terminalTabPath:G,dockVisible:X,resolveTab:V,closeTab:U,setDockVisible:L})}})}function XG(_){let{openEditor:$,popOutPane:j,watchPaneOpenEventsImpl:Z=YZ}=_;return Z({openTab:(Y,Q)=>$(Y,Q?{label:Q}:void 0),popOutPane:(Y,Q)=>{j(Y,Q)}})}async function VG(_){let{hasWindow:$=typeof window<"u",baseHref:j=$?window.location.href:"http://localhost/",...Z}=_;await uZ({hasWindow:$,baseHref:j,...Z})}function UG(_){let{hasWindow:$=typeof window<"u",...j}=_;SZ({hasWindow:$,...j})}function fZ(_){let{setWorkspaceOpen:$,currentChatJid:j,chatOnlyMode:Z,navigate:Y,currentBranchRecord:Q,renameBranchInFlightRef:q,renameBranchLockUntilRef:N,getFormLock:K,setRenameBranchNameDraft:G,setIsRenameBranchFormOpen:X,setIsRenamingBranch:V,renameChatBranch:U,refreshActiveChatAgents:L,refreshCurrentChatBranches:F,showIntentToast:J,currentChatBranches:H,activeChatAgents:W,pruneChatBranch:D,restoreChatBranch:E,branchLoaderMode:C,branchLoaderSourceChatJid:P,forkChatBranch:v,setBranchLoaderState:p,currentRootChatJid:M,isWebAppMode:k,getActiveChatAgents:B,getChatBranches:I,setActiveChatAgents:w,setCurrentChatBranches:c,openEditor:b,tabStripActiveId:n,editorInstanceRef:d,dockInstanceRef:r,terminalTabPath:t,dockVisible:a,resolveTab:_0,closeTab:N0,setDockVisible:G0,editorOpen:k0,shellElement:J0,editorWidthRef:X0,dockHeightRef:x0,sidebarWidthRef:B0,readStoredNumber:D0}=_,S0=x(()=>{_G($)},[$]),z0=x((b0)=>{$G({nextChatJid:b0,currentChatJid:j,chatOnlyMode:Z,navigate:Y})},[Z,j,Y]),M0=x(()=>{jG({currentBranchRecord:Q,renameBranchInFlight:q.current,renameBranchLockUntil:N.current,getFormLock:K,setRenameBranchNameDraft:G,setIsRenameBranchFormOpen:X})},[Q,K,q,N,X,G]),Z0=x(()=>{ZG({setIsRenameBranchFormOpen:X,setRenameBranchNameDraft:G})},[X,G]),A0=x(async(b0)=>{await YG({currentBranchRecord:Q,nextName:b0,openRenameForm:M0,renameBranchInFlightRef:q,renameBranchLockUntilRef:N,getFormLock:K,setIsRenamingBranch:V,renameChatBranch:U,refreshActiveChatAgents:L,refreshCurrentChatBranches:F,showIntentToast:J,closeRenameForm:Z0})},[Z0,Q,K,M0,L,F,q,N,U,V,J]),v0=x(async(b0=null)=>{await QG({targetChatJid:b0,currentChatJid:j,currentBranchRecord:Q,currentChatBranches:H,activeChatAgents:W,pruneChatBranch:D,refreshActiveChatAgents:L,refreshCurrentChatBranches:F,showIntentToast:J,chatOnlyMode:Z,navigate:Y})},[W,Z,Q,H,j,Y,D,L,F,J]),h0=x(async(b0)=>{await qG({targetChatJid:b0,restoreChatBranch:E,currentChatBranches:H,refreshActiveChatAgents:L,refreshCurrentChatBranches:F,showIntentToast:J,chatOnlyMode:Z,navigate:Y})},[Z,H,Y,L,F,E,J]);g(()=>NG({branchLoaderMode:C,branchLoaderSourceChatJid:P,forkChatBranch:v,setBranchLoaderState:p,navigate:Y}),[C,P,v,Y,p]);let d0=x(async()=>{await KG({currentChatJid:j,chatOnlyMode:Z,forkChatBranch:v,refreshActiveChatAgents:L,refreshCurrentChatBranches:F,showIntentToast:J,navigate:Y})},[Z,j,v,Y,L,F,J]),c0=x(async(b0,s0)=>{await GG({isWebAppMode:k,path:b0,label:s0,showIntentToast:J,currentChatJid:j,tabStripActiveId:n,editorInstanceRef:d,dockInstanceRef:r,terminalTabPath:t,dockVisible:a,resolveTab:_0,closeTab:N0,setDockVisible:G0})},[N0,j,r,a,d,k,_0,G0,J,n,t]);g(()=>XG({openEditor:b,popOutPane:(b0,s0)=>{c0(b0,s0)}}),[c0,b]);let w0=x(async()=>{await VG({isWebAppMode:k,currentChatJid:j,currentRootChatJid:M,forkChatBranch:v,getActiveChatAgents:B,getChatBranches:I,setActiveChatAgents:w,setCurrentChatBranches:c,showIntentToast:J})},[j,M,v,B,I,k,w,c,J]);return g(()=>{UG({editorOpen:k0,shellElement:J0,editorWidthRef:X0,dockHeightRef:x0,sidebarWidthRef:B0,readStoredNumber:D0})},[x0,k0,X0,D0,J0,B0]),{toggleWorkspace:S0,handleBranchPickerChange:z0,openRenameCurrentBranchForm:M0,closeRenameCurrentBranchForm:Z0,handleRenameCurrentBranch:A0,handlePruneCurrentBranch:v0,handleRestoreBranch:h0,handleCreateSessionFromCompose:d0,handlePopOutPane:c0,handlePopOutChat:w0}}function b8(_){return _?{..._}:{text:"",totalLines:0}}function vZ(_){return Array.isArray(_)?_.map(($)=>({...$})):[]}function LG(_){return{inFlight:Boolean(_?.inFlight),lastAttemptAt:Number(_?.lastAttemptAt||0),turnId:typeof _?.turnId==="string"?_.turnId:null}}function WG(){return{agentStatus:null,agentDraft:{text:"",totalLines:0},agentPlan:"",agentThought:{text:"",totalLines:0},pendingRequest:null,currentTurnId:null,steerQueuedTurnId:null,isAgentTurnActive:!1,followupQueueItems:[],activeModel:null,activeThinkingLevel:null,supportsThinking:!1,activeModelUsage:null,contextUsage:null,isAgentRunning:!1,wasAgentActive:!1,draftBuffer:"",thoughtBuffer:"",lastAgentEvent:null,lastSilenceNotice:0,lastAgentResponse:null,currentTurnIdRef:null,steerQueuedTurnIdRef:null,thoughtExpanded:!1,draftExpanded:!1,agentStatusRef:null,silentRecovery:{inFlight:!1,lastAttemptAt:0,turnId:null}}}function bZ(_){return{agentStatus:_.agentStatus,agentDraft:b8(_.agentDraft),agentPlan:_.agentPlan||"",agentThought:b8(_.agentThought),pendingRequest:_.pendingRequest,currentTurnId:_.currentTurnId||null,steerQueuedTurnId:_.steerQueuedTurnId||null,isAgentTurnActive:Boolean(_.isAgentTurnActive),followupQueueItems:vZ(_.followupQueueItems),activeModel:_.activeModel,activeThinkingLevel:_.activeThinkingLevel,supportsThinking:Boolean(_.supportsThinking),activeModelUsage:_.activeModelUsage,contextUsage:_.contextUsage,isAgentRunning:Boolean(_.isAgentRunning),wasAgentActive:Boolean(_.wasAgentActive),draftBuffer:_.draftBuffer||"",thoughtBuffer:_.thoughtBuffer||"",lastAgentEvent:_.lastAgentEvent||null,lastSilenceNotice:Number(_.lastSilenceNotice||0),lastAgentResponse:_.lastAgentResponse||null,currentTurnIdRef:_.currentTurnIdRef||null,steerQueuedTurnIdRef:_.steerQueuedTurnIdRef||null,thoughtExpanded:Boolean(_.thoughtExpanded),draftExpanded:Boolean(_.draftExpanded),agentStatusRef:_.agentStatusRef||null,silentRecovery:LG(_.silentRecovery)}}function gZ(_){let $=_.snapshot||WG(),{refs:j,setters:Z}=_;return _.clearLastActivityTimer?.(),j.isAgentRunningRef.current=Boolean($.isAgentRunning),j.wasAgentActiveRef.current=Boolean($.wasAgentActive),Z.setIsAgentTurnActive(Boolean($.isAgentTurnActive)),j.lastAgentEventRef.current=$.lastAgentEvent||null,j.lastSilenceNoticeRef.current=Number($.lastSilenceNotice||0),j.draftBufferRef.current=$.draftBuffer||"",j.thoughtBufferRef.current=$.thoughtBuffer||"",j.pendingRequestRef.current=$.pendingRequest||null,j.lastAgentResponseRef.current=$.lastAgentResponse||null,j.currentTurnIdRef.current=$.currentTurnIdRef||null,j.steerQueuedTurnIdRef.current=$.steerQueuedTurnIdRef||null,j.agentStatusRef.current=$.agentStatusRef||null,j.silentRecoveryRef.current=$.silentRecovery||{inFlight:!1,lastAttemptAt:0,turnId:null},j.thoughtExpandedRef.current=Boolean($.thoughtExpanded),j.draftExpandedRef.current=Boolean($.draftExpanded),Z.setAgentStatus($.agentStatus||null),Z.setAgentDraft(b8($.agentDraft)),Z.setAgentPlan($.agentPlan||""),Z.setAgentThought(b8($.agentThought)),Z.setPendingRequest($.pendingRequest||null),Z.setCurrentTurnId($.currentTurnId||null),Z.setSteerQueuedTurnId($.steerQueuedTurnId||null),Z.setFollowupQueueItems(vZ($.followupQueueItems)),Z.setActiveModel($.activeModel||null),Z.setActiveThinkingLevel($.activeThinkingLevel||null),Z.setSupportsThinking(Boolean($.supportsThinking)),Z.setActiveModelUsage($.activeModelUsage??null),Z.setContextUsage($.contextUsage??null),$}function BG(_){return jj(_)}function mZ(_){let{isAgentTurnActive:$,steerQueuedTurnId:j,currentTurnId:Z,steerQueuedTurnIdRef:Y,setSteerQueuedTurnId:Q,agentStatus:q,agentDraft:N,agentPlan:K,agentThought:G,pendingRequest:X,pendingRequestRef:V,followupQueueItems:U,activeModel:L,activeThinkingLevel:F,supportsThinking:J,activeModelUsage:H,contextUsage:W,isAgentRunningRef:D,wasAgentActiveRef:E,draftBufferRef:C,thoughtBufferRef:P,lastAgentEventRef:v,lastSilenceNoticeRef:p,lastAgentResponseRef:M,currentTurnIdRef:k,thoughtExpandedRef:B,draftExpandedRef:I,agentStatusRef:w,silentRecoveryRef:c,clearLastActivityTimer:b,setIsAgentTurnActive:n,setAgentStatus:d,setAgentDraft:r,setAgentPlan:t,setAgentThought:a,setPendingRequest:_0,setCurrentTurnId:N0,setFollowupQueueItems:G0,setActiveModel:k0,setActiveThinkingLevel:J0,setSupportsThinking:X0,setActiveModelUsage:x0,setContextUsage:B0,lastNotifiedIdRef:D0,agentsRef:S0,notify:z0}=_,M0=x((d0)=>{if(!BG({remainingQueueCount:d0,steerQueuedTurnId:Y.current,currentTurnId:k.current,isAgentTurnActive:$}))return;Y.current=null,Q(null)},[$,k,Q,Y]),Z0=x(()=>bZ({agentStatus:q,agentDraft:N,agentPlan:K,agentThought:G,pendingRequest:X,currentTurnId:Z,steerQueuedTurnId:j,isAgentTurnActive:$,followupQueueItems:U,activeModel:L,activeThinkingLevel:F,supportsThinking:J,activeModelUsage:H,contextUsage:W,isAgentRunning:D.current,wasAgentActive:E.current,draftBuffer:C.current,thoughtBuffer:P.current,lastAgentEvent:v.current,lastSilenceNotice:p.current,lastAgentResponse:M.current,currentTurnIdRef:k.current,steerQueuedTurnIdRef:Y.current,thoughtExpanded:B.current,draftExpanded:I.current,agentStatusRef:w.current,silentRecovery:c.current}),[L,H,F,N,K,q,G,W,Z,U,$,X,j,J,D,E,C,P,v,p,M,k,Y,B,I,w,c]),A0=x((d0)=>{gZ({snapshot:d0,clearLastActivityTimer:b,refs:{isAgentRunningRef:D,wasAgentActiveRef:E,lastAgentEventRef:v,lastSilenceNoticeRef:p,draftBufferRef:C,thoughtBufferRef:P,pendingRequestRef:V,lastAgentResponseRef:M,currentTurnIdRef:k,steerQueuedTurnIdRef:Y,agentStatusRef:w,silentRecoveryRef:c,thoughtExpandedRef:B,draftExpandedRef:I},setters:{setIsAgentTurnActive:n,setAgentStatus:d,setAgentDraft:r,setAgentPlan:t,setAgentThought:a,setPendingRequest:_0,setCurrentTurnId:N0,setSteerQueuedTurnId:Q,setFollowupQueueItems:G0,setActiveModel:k0,setActiveThinkingLevel:J0,setSupportsThinking:X0,setActiveModelUsage:x0,setContextUsage:B0}})},[w,b,k,C,I,D,v,M,p,V,k0,x0,J0,r,t,d,a,B0,N0,G0,n,_0,Q,X0,c,Y,P,B,E]),v0=x((d0)=>{if(!d0)return;if(k.current===d0)return;k.current=d0,c.current={inFlight:!1,lastAttemptAt:0,turnId:d0},N0(d0),Y.current=null,Q(null),C.current="",P.current="",r({text:"",totalLines:0}),t(""),a({text:"",totalLines:0}),_0(null),V.current=null,M.current=null,B.current=!1,I.current=!1},[k,C,I,M,V,r,t,a,N0,_0,Q,c,Y,P,B]),h0=x((d0)=>{if(typeof document<"u"){let t0=typeof document.hasFocus==="function"?document.hasFocus():!0;if(!document.hidden&&t0)return}let c0=M.current;if(!c0||!c0.post)return;if(d0&&c0.turnId&&c0.turnId!==d0)return;let w0=c0.post;if(w0.id&&D0.current===w0.id)return;let b0=String(w0?.data?.content||"").trim();if(!b0)return;D0.current=w0.id||D0.current,M.current=null;let s0=b0.replace(/\s+/g," ").slice(0,200),r0=S0.current||{},C0=(w0?.data?.agent_id?r0[w0.data.agent_id]:null)?.name||"Pi";z0(C0,s0)},[S0,M,D0,z0]);return{clearQueuedSteerStateIfStale:M0,snapshotCurrentChatPaneState:Z0,restoreChatPaneState:A0,setActiveTurn:v0,notifyForFinalResponse:h0}}var zG=400,h$=60,pZ=220,c$="mdPreviewHeight";function FG(){try{let _=localStorage.getItem(c$),$=_?Number(_):NaN;return Number.isFinite($)&&$>=h$?$:pZ}catch{return pZ}}function g8({getContent:_,path:$,onClose:j}){let[Z,Y]=m(""),[Q,q]=m(FG),N=y(null),K=y(null),G=y(""),X=y(_);return X.current=_,g(()=>{let L=()=>{let J=X.current?.()||"";if(J===G.current)return;G.current=J;try{let H=G_(J,null,{sanitize:!1});Y(H)}catch{Y('<p style="color:var(--text-secondary)">Preview unavailable</p>')}};L();let F=setInterval(L,zG);return()=>clearInterval(F)},[]),g(()=>{if(N.current&&Z)Y4(N.current).catch(()=>{})},[Z]),z`
        <div
            class="md-preview-splitter"
            onMouseDown=${(L)=>{L.preventDefault();let F=L.clientY,J=K.current?.offsetHeight||Q,H=K.current?.parentElement,W=H?H.offsetHeight*0.7:500,D=L.currentTarget;D.classList.add("dragging"),document.body.style.cursor="row-resize",document.body.style.userSelect="none";let E=(P)=>{let v=Math.min(Math.max(J-(P.clientY-F),h$),W);q(v)},C=()=>{D.classList.remove("dragging"),document.body.style.cursor="",document.body.style.userSelect="";try{localStorage.setItem(c$,String(Math.round(K.current?.offsetHeight||Q)))}catch{}document.removeEventListener("mousemove",E),document.removeEventListener("mouseup",C)};document.addEventListener("mousemove",E),document.addEventListener("mouseup",C)}}
            onTouchStart=${(L)=>{L.preventDefault();let F=L.touches[0];if(!F)return;let J=F.clientY,H=K.current?.offsetHeight||Q,W=K.current?.parentElement,D=W?W.offsetHeight*0.7:500,E=L.currentTarget;E.classList.add("dragging"),document.body.style.userSelect="none";let C=(v)=>{let p=v.touches[0];if(!p)return;v.preventDefault();let M=Math.min(Math.max(H-(p.clientY-J),h$),D);q(M)},P=()=>{E.classList.remove("dragging"),document.body.style.userSelect="";try{localStorage.setItem(c$,String(Math.round(K.current?.offsetHeight||Q)))}catch{}document.removeEventListener("touchmove",C),document.removeEventListener("touchend",P),document.removeEventListener("touchcancel",P)};document.addEventListener("touchmove",C,{passive:!1}),document.addEventListener("touchend",P),document.addEventListener("touchcancel",P)}}
        ></div>
        <div class="md-preview-panel" ref=${K} style=${{height:Q+"px"}}>
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
                dangerouslySetInnerHTML=${{__html:Z}}
            />
        </div>
    `}function hZ(_){if(_.branchLoaderMode)return"branch-loader";if(_.panePopoutMode)return"pane-popout";return"main"}function HG(_){return _==="error"?"Could not open branch window":"Opening branch…"}function cZ(_){return z`
    <div class="app-shell chat-only">
      <div class="container" style=${{display:"flex",alignItems:"center",justifyContent:"center",minHeight:"100vh",padding:"24px"}}>
        <div class="card" style=${{width:"min(560px, 100%)",padding:"24px"}}>
          <h1 style=${{margin:"0 0 12px",fontSize:"1.1rem"}}>
            ${HG(_.status)}
          </h1>
          <p style=${{margin:0,lineHeight:1.6}}>${_.message}</p>
        </div>
      </div>
    </div>
  `}function lZ(_){let{appShellRef:$,editorOpen:j,hidePanePopoutControls:Z,panePopoutHasMenuActions:Y,panePopoutTitle:Q,tabStripTabs:q,tabStripActiveId:N,handleTabActivate:K,previewTabs:G,handleTabTogglePreview:X,editorContainerRef:V,getPaneContent:U,panePopoutPath:L}=_;return z`
    <div class=${`app-shell pane-popout${j?" editor-open":""}`} ref=${$}>
      <div class="editor-pane-container pane-popout-container">
        ${j&&!Z&&z`
          <div class="pane-popout-controls" role="toolbar" aria-label="Pane window controls">
            ${Y?z`
                <details class="pane-popout-controls-menu">
                  <summary class="pane-popout-controls-trigger" aria-label="Pane window controls">
                    <span class="pane-popout-controls-title">${Q}</span>
                    <svg viewBox="0 0 16 16" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                      <polyline points="4.5 6.5 8 10 11.5 6.5" />
                    </svg>
                  </summary>
                  <div class="pane-popout-controls-panel">
                    ${q.length>1&&z`
                      <div class="pane-popout-controls-section">
                        <div class="pane-popout-controls-section-title">Open panes</div>
                        <div class="pane-popout-controls-list">
                          ${q.map((F)=>z`
                            <button
                              type="button"
                              class=${`pane-popout-controls-item${F.id===N?" active":""}`}
                              onClick=${(J)=>{K(F.id),J.currentTarget.closest("details")?.removeAttribute("open")}}
                            >
                              ${F.label}
                            </button>
                          `)}
                        </div>
                      </div>
                    `}
                    ${N&&G.has(N)&&z`
                      <button
                        type="button"
                        class="pane-popout-controls-action"
                        onClick=${(F)=>{X(N),F.currentTarget.closest("details")?.removeAttribute("open")}}
                      >
                        Hide preview
                      </button>
                    `}
                  </div>
                </details>
              `:z`
                <div class="pane-popout-controls-label" aria-label=${Q}>${Q}</div>
              `}
          </div>
        `}
        ${j?z`<div class="editor-pane-host" ref=${V}></div>`:z`
            <div class="card" style=${{margin:"24px",padding:"24px",maxWidth:"640px"}}>
              <h1 style=${{margin:"0 0 12px",fontSize:"1.1rem"}}>Opening pane…</h1>
              <p style=${{margin:0,lineHeight:1.6}}>${L||"No pane path provided."}</p>
            </div>
          `}
        ${j&&N&&G.has(N)&&z`
          <${g8}
            getContent=${U}
            path=${N}
            onClose=${()=>X(N)}
          />
        `}
      </div>
    </div>
  `}function m8(_){return String(_||"").toLowerCase().replace(/^@/,"").replace(/\s+/g," ").trim()}function JG(_,$){let j=m8(_),Z=m8($);if(!Z)return!1;return j.startsWith(Z)||j.includes(Z)}function l$(_){if(!_)return!1;if(_.isComposing)return!1;if(_.ctrlKey||_.metaKey||_.altKey)return!1;return typeof _.key==="string"&&_.key.length===1&&/\S/.test(_.key)}function n$(_,$,j=Date.now(),Z=700){let Y=_&&typeof _==="object"?_:{value:"",updatedAt:0},Q=String($||"").trim().toLowerCase();if(!Q)return{value:"",updatedAt:j};return{value:!Y.value||!Number.isFinite(Y.updatedAt)||j-Y.updatedAt>Z?Q:`${Y.value}${Q}`,updatedAt:j}}function OG(_,$){let j=Math.max(0,Number(_)||0);if(j<=0)return[];let Y=((Number.isInteger($)?$:0)%j+j)%j,Q=[];for(let q=0;q<j;q+=1)Q.push((Y+q)%j);return Q}function DG(_,$,j=0,Z=(Y)=>Y){let Y=m8($);if(!Y)return-1;let Q=Array.isArray(_)?_:[],q=OG(Q.length,j),N=Q.map((K)=>m8(Z(K)));for(let K of q)if(N[K].startsWith(Y))return K;for(let K of q)if(N[K].includes(Y))return K;return-1}function d$(_,$,j=-1,Z=(Y)=>Y){let Y=Array.isArray(_)?_:[];if(j>=0&&j<Y.length){let Q=Z(Y[j]);if(JG(Q,$))return j}return DG(Y,$,0,Z)}function p8(_){return String(_||"").trim().toLowerCase()}function i$(_){let $=String(_||"").match(/^@([a-zA-Z0-9_-]*)$/);if(!$)return null;return p8($[1]||"")}function AG(_){let $=new Set,j=[];for(let Z of Array.isArray(_)?_:[]){let Y=p8(Z?.agent_name);if(!Y||$.has(Y))continue;$.add(Y),j.push(Z)}return j}function nZ(_,$,j={}){let Z=i$($);if(Z==null)return[];let Y=typeof j?.currentChatJid==="string"?j.currentChatJid:null;return AG(_).filter((Q)=>{if(Y&&Q?.chat_jid===Y)return!1;return p8(Q?.agent_name).startsWith(Z)})}function r$(_){let $=p8(_);return $?`@${$} `:""}function dZ(_,$,j={}){if(!_||_.isComposing)return!1;if(j.searchMode)return!1;if(!j.showSessionSwitcherButton)return!1;if(_.ctrlKey||_.metaKey||_.altKey)return!1;if(_.key!=="@")return!1;return String($||"")===""}function w_({prefix:_="file",label:$,title:j,onRemove:Z,onClick:Y,removeTitle:Q="Remove",icon:q="file"}){let N=`${_}-file-pill`,K=`${_}-file-name`,G=`${_}-file-remove`,X=q==="message"?z`<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
      </svg>`:z`<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
        <polyline points="14 2 14 8 20 8"/>
      </svg>`;return z`
    <span class=${N} title=${j||$} onClick=${Y}>
      ${X}
      <span class=${K}>${$}</span>
      ${Z&&z`
        <button
          class=${G}
          onClick=${(V)=>{V.preventDefault(),V.stopPropagation(),Z()}}
          title=${Q}
          type="button"
        >
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M18 6L6 18M6 6l12 12"/>
          </svg>
        </button>
      `}
    </span>
  `}var EG=[{name:"/model",description:"Select model or list available models"},{name:"/cycle-model",description:"Cycle to the next available model"},{name:"/thinking",description:"Show or set thinking level"},{name:"/cycle-thinking",description:"Cycle thinking level"},{name:"/theme",description:"Set UI theme (no name to show available themes)"},{name:"/tint",description:"Tint default light/dark UI (usage: /tint #hex or /tint off)"},{name:"/btw",description:"Open a side conversation panel without interrupting the main chat"},{name:"/state",description:"Show current session state"},{name:"/stats",description:"Show session token and cost stats"},{name:"/context",description:"Show context window usage"},{name:"/last",description:"Show last assistant response"},{name:"/compact",description:"Manually compact the session"},{name:"/auto-compact",description:"Toggle auto-compaction"},{name:"/auto-retry",description:"Toggle auto-retry"},{name:"/abort",description:"Abort the current response"},{name:"/abort-retry",description:"Abort retry backoff"},{name:"/abort-bash",description:"Abort running bash command"},{name:"/shell",description:"Run a shell command and return output"},{name:"/bash",description:"Run a shell command and add output to context"},{name:"/queue",description:"Queue a follow-up message (one-at-a-time)"},{name:"/queue-all",description:"Queue a follow-up message (batch all)"},{name:"/steer",description:"Steer the current response"},{name:"/steering-mode",description:"Set steering mode (all|one)"},{name:"/followup-mode",description:"Set follow-up mode (all|one)"},{name:"/session-name",description:"Set or show the session name"},{name:"/new-session",description:"Start a new session"},{name:"/switch-session",description:"Switch to a session file"},{name:"/fork",description:"Fork from a previous message"},{name:"/forks",description:"List forkable messages"},{name:"/tree",description:"List the session tree"},{name:"/label",description:"Set or clear a label on a tree entry"},{name:"/labels",description:"List labeled entries"},{name:"/agent-name",description:"Set or show the agent display name"},{name:"/agent-avatar",description:"Set or show the agent avatar URL"},{name:"/user-name",description:"Set or show your display name"},{name:"/user-avatar",description:"Set or show your avatar URL"},{name:"/user-github",description:"Set name/avatar from GitHub profile"},{name:"/export-html",description:"Export session to HTML"},{name:"/passkey",description:"Manage passkeys (enrol/list/delete)"},{name:"/totp",description:"Show a TOTP enrolment QR code"},{name:"/qr",description:"Generate a QR code for text or URL"},{name:"/search",description:"Search notes and skills in the workspace"},{name:"/restart",description:"Restart the agent and stop subprocesses"},{name:"/commands",description:"List available commands"}];function kG({usage:_,onCompact:$}){let j=Math.min(100,Math.max(0,_.percent||0)),Z=_.tokens,Y=_.contextWindow,Q="Compact context",N=`${Z!=null?`Context: ${iZ(Z)} / ${iZ(Y)} tokens (${j.toFixed(0)}%)`:`Context: ${j.toFixed(0)}%`} — ${"Compact context"}`,K=9,G=2*Math.PI*9,X=j/100*G,V=j>90?"var(--context-red, #ef4444)":j>75?"var(--context-amber, #f59e0b)":"var(--context-green, #22c55e)";return z`
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
    `}function iZ(_){if(_==null)return"?";if(_>=1e6)return(_/1e6).toFixed(1)+"M";if(_>=1000)return(_/1000).toFixed(0)+"K";return String(_)}function IG(_){if(!_)return{content:_,fileRefs:[]};let j=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),Z=-1;for(let G=0;G<j.length;G+=1)if(j[G].trim()==="Files:"&&j[G+1]&&/^\s*-\s+/.test(j[G+1])){Z=G;break}if(Z===-1)return{content:_,fileRefs:[]};let Y=[],Q=Z+1;for(;Q<j.length;Q+=1){let G=j[Q];if(/^\s*-\s+/.test(G))Y.push(G.replace(/^\s*-\s+/,"").trim());else if(!G.trim())break;else break}if(Y.length===0)return{content:_,fileRefs:[]};let q=j.slice(0,Z),N=j.slice(Q);return{content:[...q,...N].join(`
`).replace(/\n{3,}/g,`

`).trim(),fileRefs:Y}}function MG(_){if(!_)return{content:_,messageRefs:[]};let j=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),Z=-1;for(let G=0;G<j.length;G+=1)if(j[G].trim()==="Referenced messages:"&&j[G+1]&&/^\s*-\s+/.test(j[G+1])){Z=G;break}if(Z===-1)return{content:_,messageRefs:[]};let Y=[],Q=Z+1;for(;Q<j.length;Q+=1){let G=j[Q];if(/^\s*-\s+/.test(G)){let X=G.replace(/^\s*-\s+/,"").trim().match(/^message:(\S+)$/i);if(X)Y.push(X[1])}else if(!G.trim())break;else break}if(Y.length===0)return{content:_,messageRefs:[]};let q=j.slice(0,Z),N=j.slice(Q);return{content:[...q,...N].join(`
`).replace(/\n{3,}/g,`

`).trim(),messageRefs:Y}}function TG(_){let $=IG(_||""),j=MG($.content||"");return{text:j.content||"",fileRefs:$.fileRefs,messageRefs:j.messageRefs}}function o$({items:_=[],onInjectQueuedFollowup:$,onRemoveQueuedFollowup:j,onOpenFilePill:Z}){if(!Array.isArray(_)||_.length===0)return null;return z`
        <div class="compose-queue-stack">
            ${_.map((Y)=>{let Q=typeof Y?.content==="string"?Y.content:"",q=TG(Q);if(!q.text.trim()&&q.fileRefs.length===0&&q.messageRefs.length===0)return null;return z`
                    <div class="compose-queue-stack-item" role="listitem">
                        <div class="compose-queue-stack-content" title=${Q}>
                            ${q.text.trim()&&z`<div class="compose-queue-stack-text">${q.text}</div>`}
                            ${(q.messageRefs.length>0||q.fileRefs.length>0)&&z`
                                <div class="compose-queue-stack-refs">
                                    ${q.messageRefs.map((N)=>z`
                                        <${w_}
                                            key=${"queue-msg-"+N}
                                            prefix="compose"
                                            label=${"msg:"+N}
                                            title=${"Message reference: "+N}
                                            icon="message"
                                        />
                                    `)}
                                    ${q.fileRefs.map((N)=>{let K=N.split("/").pop()||N;return z`
                                            <${w_}
                                                key=${"queue-file-"+N}
                                                prefix="compose"
                                                label=${K}
                                                title=${N}
                                                onClick=${()=>Z?.(N)}
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
                                onClick=${()=>$?.(Y)}
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
                                onClick=${()=>j?.(Y)}
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
    `}function rZ({onPost:_,onFocus:$,searchMode:j,searchScope:Z="current",onSearch:Y,onSearchScopeChange:Q,onEnterSearch:q,onExitSearch:N,fileRefs:K=[],onRemoveFileRef:G,onClearFileRefs:X,messageRefs:V=[],onRemoveMessageRef:U,onClearMessageRefs:L,activeModel:F=null,modelUsage:J=null,thinkingLevel:H=null,supportsThinking:W=!1,contextUsage:D=null,onContextCompact:E,notificationsEnabled:C=!1,notificationPermission:P="default",onToggleNotifications:v,onModelChange:p,onModelStateChange:M,activeEditorPath:k=null,onAttachEditorFile:B,onOpenFilePill:I,followupQueueItems:w=[],onInjectQueuedFollowup:c,onRemoveQueuedFollowup:b,onSubmitIntercept:n,onMessageResponse:d,onPopOutChat:r,isAgentActive:t=!1,activeChatAgents:a=[],currentChatJid:_0="web:default",connectionStatus:N0="connected",onSetFileRefs:G0,onSetMessageRefs:k0,onSubmitError:J0,onSwitchChat:X0,onRenameSession:x0,isRenameSessionInProgress:B0=!1,onCreateSession:D0,onDeleteSession:S0,onRestoreSession:z0,showQueueStack:M0=!0,statusNotice:Z0=null}){let[A0,v0]=m(""),[h0,d0]=m(""),[c0,w0]=m([]),[b0,s0]=m(!1),[r0,U0]=m([]),[C0,t0]=m(0),[s,q0]=m(!1),[h,i]=m([]),[H0,T0]=m(0),[y0,V0]=m(!1),[P0,l0]=m(!1),[O0,g0]=m(!1),[I0,Y0]=m(!1),[S,e]=m([]),[F0,E0]=m(0),[o0,Z1]=m(0),[q1,u1]=m(!1),[n1,E_]=m(0),[d1,S1]=m(null),[b1,f1]=m(()=>Date.now()),$1=y(null),g1=y(null),m_=y(null),V_=y(null),p_=y(null),R_=y(null),J1=y(null),i1=y(null),O1=y({value:"",updatedAt:0}),V1=y(0),L1=y(!1),Q_=200,q_=(O)=>{let R=new Set,l=[];for(let j0 of O||[]){if(typeof j0!=="string")continue;let R0=j0.trim();if(!R0||R.has(R0))continue;R.add(R0),l.push(R0)}return l},T1=()=>{let O=K_("piclaw_compose_history");if(!O)return[];try{let R=JSON.parse(O);if(!Array.isArray(R))return[];return q_(R)}catch{return[]}},m1=(O)=>{Q1("piclaw_compose_history",JSON.stringify(O))},U1=y(T1()),E1=y(-1),r1=y(""),p1=A0.trim()||c0.length>0||K.length>0||V.length>0,h_=typeof window<"u"&&typeof navigator<"u"&&Boolean(navigator.geolocation)&&Boolean(window.isSecureContext),k_=typeof window<"u"&&typeof Notification<"u",c_=typeof window<"u"?Boolean(window.isSecureContext):!1,Q4=k_&&c_&&P!=="denied",L_=P==="granted"&&C,I_=O4(Z0),k4=I8(Z0),I4=typeof Z0?.detail==="string"&&Z0.detail.trim()?Z0.detail.trim():"",Y1=I_?M8(Z0,b1):null,D1=L_?"Disable notifications":"Enable notifications",q4=c0.length>0||K.length>0||V.length>0,o1=N0==="disconnected"?"Reconnecting":String(N0||"Connecting").replace(/[-_]+/g," ").replace(/^./,(O)=>O.toUpperCase()),W_=N0==="disconnected"?"Reconnecting":`Connection: ${o1}`,h1=(Array.isArray(a)?a:[]).filter((O)=>!O?.archived_at),F1=(()=>{for(let O of Array.isArray(a)?a:[]){let R=typeof O?.chat_jid==="string"?O.chat_jid.trim():"";if(R&&R===_0)return O}return null})(),x1=Boolean(F1&&F1.chat_jid===(F1.root_chat_jid||F1.chat_jid)),N1=m0(()=>{let O=new Set,R=[];for(let l of Array.isArray(a)?a:[]){let j0=typeof l?.chat_jid==="string"?l.chat_jid.trim():"";if(!j0||j0===_0||O.has(j0))continue;if(!(typeof l?.agent_name==="string"?l.agent_name.trim():""))continue;O.add(j0),R.push(l)}return R},[a,_0]),s1=N1.length>0,a1=s1&&typeof X0==="function",t1=s1&&typeof z0==="function",u_=Boolean(B0||L1.current),w1=!j&&typeof x0==="function"&&!u_,y1=!j&&typeof D0==="function",e1=!j&&typeof S0==="function"&&!x1,M_=!j&&(a1||t1||w1||y1||e1),W1=F||"",B_=W&&H?` (${H})`:"",K1=B_.trim()?`${H}`:"",T_=typeof J?.hint_short==="string"?J.hint_short.trim():"",z_=[K1||null,T_||null].filter(Boolean).join(" • "),M4=[W1?`Current model: ${W1}${B_}`:null,J?.plan?`Plan: ${J.plan}`:null,T_||null,J?.primary?.reset_description||null,J?.secondary?.reset_description||null].filter(Boolean),p4=P0?"Switching model…":M4.join(" • ")||`Current model: ${W1}${B_} (tap to open model picker)`,x_=(O)=>{if(!O||typeof O!=="object")return;let R=O.model??O.current;if(typeof M==="function")M({model:R??null,thinking_level:O.thinking_level??null,supports_thinking:O.supports_thinking,provider_usage:O.provider_usage??null});if(R&&typeof p==="function")p(R)},f_=(O)=>{let R=O||$1.current;if(!R)return;R.style.height="auto",R.style.height=`${R.scrollHeight}px`,R.style.overflowY="hidden"},T4=(O)=>{if(!O.startsWith("/")||O.includes(`
`)){q0(!1),U0([]);return}let R=O.toLowerCase().split(" ")[0];if(R.length<1){q0(!1),U0([]);return}let l=EG.filter((j0)=>j0.name.startsWith(R)||j0.name.replace(/-/g,"").startsWith(R.replace(/-/g,"")));if(l.length>0&&!(l.length===1&&l[0].name===R))V0(!1),i([]),U0(l),t0(0),q0(!0);else q0(!1),U0([])},l_=(O)=>{let R=A0,l=R.indexOf(" "),j0=l>=0?R.slice(l):"",R0=O.name+j0;v0(R0),q0(!1),U0([]),requestAnimationFrame(()=>{let B1=$1.current;if(!B1)return;let A1=R0.length;B1.selectionStart=A1,B1.selectionEnd=A1,B1.focus()})},h4=(O)=>{if(i$(O)==null){V0(!1),i([]);return}let R=nZ(h1,O,{currentChatJid:_0});if(R.length>0&&!(R.length===1&&r$(R[0].agent_name).trim().toLowerCase()===String(O||"").trim().toLowerCase()))q0(!1),U0([]),i(R),T0(0),V0(!0);else V0(!1),i([])},N4=(O)=>{let R=r$(O?.agent_name);if(!R)return;v0(R),V0(!1),i([]),requestAnimationFrame(()=>{let l=$1.current;if(!l)return;let j0=R.length;l.selectionStart=j0,l.selectionEnd=j0,l.focus()})},K4=()=>{if(j||!a1&&!t1&&!w1&&!y1&&!e1)return!1;return O1.current={value:"",updatedAt:0},g0(!1),q0(!1),U0([]),V0(!1),i([]),Y0(!0),!0},F_=(O)=>{if(O?.preventDefault?.(),O?.stopPropagation?.(),j||!a1&&!t1&&!w1&&!y1&&!e1)return;if(I0){O1.current={value:"",updatedAt:0},Y0(!1);return}K4()},c4=(O)=>{let R=typeof O==="string"?O.trim():"";if(Y0(!1),!R||R===_0){requestAnimationFrame(()=>$1.current?.focus());return}X0?.(R)},l4=async(O)=>{let R=typeof O==="string"?O.trim():"";if(Y0(!1),!R||typeof z0!=="function"){requestAnimationFrame(()=>$1.current?.focus());return}try{await z0(R)}catch(l){console.warn("Failed to restore session:",l),requestAnimationFrame(()=>$1.current?.focus())}},z5=(O)=>{let l=(Array.isArray(O)?O:[]).findIndex((j0)=>!j0?.disabled);return l>=0?l:0},H1=m0(()=>{let O=[];for(let R of N1){let l=Boolean(R?.archived_at),j0=typeof R?.agent_name==="string"?R.agent_name.trim():"",R0=typeof R?.chat_jid==="string"?R.chat_jid.trim():"";if(!j0||!R0)continue;O.push({type:"session",key:`session:${R0}`,label:`@${j0} — ${R0}${R?.is_active?" active":""}${l?" archived":""}`,chat:R,disabled:l?!t1:!a1})}if(y1)O.push({type:"action",key:"action:new",label:"New session",action:"new",disabled:!1});if(w1)O.push({type:"action",key:"action:rename",label:"Rename current session",action:"rename",disabled:u_});if(e1)O.push({type:"action",key:"action:delete",label:"Delete current session",action:"delete",disabled:!1});return O},[N1,t1,a1,y1,w1,e1,u_]),G4=async(O)=>{if(O?.preventDefault)O.preventDefault();if(O?.stopPropagation)O.stopPropagation();if(typeof x0!=="function"||B0||L1.current)return;L1.current=!0,Y0(!1);try{await x0()}catch(R){console.warn("Failed to rename session:",R)}finally{L1.current=!1}requestAnimationFrame(()=>$1.current?.focus())},n4=async()=>{if(typeof D0!=="function")return;Y0(!1);try{await D0()}catch(O){console.warn("Failed to create session:",O)}requestAnimationFrame(()=>$1.current?.focus())},y_=async()=>{if(typeof S0!=="function")return;Y0(!1);try{await S0(_0)}catch(O){console.warn("Failed to delete session:",O)}requestAnimationFrame(()=>$1.current?.focus())},__=(O)=>{if(j)d0(O);else v0(O),T4(O),h4(O);requestAnimationFrame(()=>f_())},n_=(O)=>{let R=j?h0:A0,l=R&&!R.endsWith(`
`)?`
`:"",j0=`${R}${l}${O}`.trimStart();__(j0)},x4=(O)=>{let R=O?.command?.model_label;if(R)return R;let l=O?.command?.message;if(typeof l==="string"){let j0=l.match(/•\s+([^\n]+?)\s+\(current\)/);if(j0?.[1])return j0[1].trim()}return null},y4=async(O)=>{if(j||P0)return;l0(!0);try{let R=await e4("default",O,null,[],null,_0),l=x4(R);x_({model:l??F??null,thinking_level:R?.command?.thinking_level,supports_thinking:R?.command?.supports_thinking});try{let j0=await A5(_0);if(j0)x_(j0)}catch{}return _?.(),!0}catch(R){return console.error("Failed to switch model:",R),alert("Failed to switch model: "+R.message),!1}finally{l0(!1)}},d4=async()=>{await y4("/cycle-model")},P4=async(O)=>{if(!O||P0)return;if(await y4(`/model ${O}`))g0(!1)},X4=(O)=>{if(!O||O.disabled)return;if(O.type==="session"){let R=O.chat;if(R?.archived_at)l4(R.chat_jid);else c4(R.chat_jid);return}if(O.type==="action"){if(O.action==="new"){n4();return}if(O.action==="rename"){G4();return}if(O.action==="delete")y_()}},F5=(O)=>{O.preventDefault(),O.stopPropagation(),O1.current={value:"",updatedAt:0},Y0(!1),g0((R)=>!R)},V4=async()=>{if(j)return;E?.(),await H_("/compact",null,{includeMedia:!1,includeFileRefs:!1,includeMessageRefs:!1,clearAfterSubmit:!1,recordHistory:!1})},C4=(O)=>{if(O==="queue"||O==="steer"||O==="auto")return O;return t?"queue":void 0},H_=async(O,R,l={})=>{let{includeMedia:j0=!0,includeFileRefs:R0=!0,includeMessageRefs:B1=!0,clearAfterSubmit:A1=!0,recordHistory:R1=!0}=l||{},d_=typeof O==="string"?O:O&&typeof O?.target?.value==="string"?O.target.value:A0,S4=typeof d_==="string"?d_:"";if(!S4.trim()&&(j0?c0.length===0:!0)&&(R0?K.length===0:!0)&&(B1?V.length===0:!0))return;q0(!1),U0([]),V0(!1),i([]),Y0(!1),S1(null);let i4=j0?[...c0]:[],w4=R0?[...K]:[],j_=B1?[...V]:[],i_=S4.trim();if(R1&&i_){let U4=U1.current,I1=q_(U4.filter((H5)=>H5!==i_));if(I1.push(i_),I1.length>200)I1.splice(0,I1.length-200);U1.current=I1,m1(I1),E1.current=-1,r1.current=""}let i8=()=>{if(j0)w0([...i4]);if(R0)G0?.(w4);if(B1)k0?.(j_);v0(i_),requestAnimationFrame(()=>f_())};if(A1)v0(""),w0([]),X?.(),L?.();(async()=>{try{if(await n?.({content:i_,submitMode:R,fileRefs:w4,messageRefs:j_,mediaFiles:i4})){_?.();return}let I1=[];for(let Z_ of i4){let L4=await H6(Z_);I1.push(L4.id)}let H5=w4.length?`Files:
${w4.map((Z_)=>`- ${Z_}`).join(`
`)}`:"",r8=j_.length?`Referenced messages:
${j_.map((Z_)=>`- message:${Z_}`).join(`
`)}`:"",d5=I1.length?`Attachments:
${I1.map((Z_,L4)=>{let r4=i4[L4]?.name||`attachment-${L4+1}`;return`- attachment:${Z_} (${r4})`}).join(`
`)}`:"",o8=[i_,H5,r8,d5].filter(Boolean).join(`

`),R4=await e4("default",o8,null,I1,C4(R),_0);if(d?.(R4),R4?.command){x_({model:R4.command.model_label??F??null,thinking_level:R4.command.thinking_level,supports_thinking:R4.command.supports_thinking});try{let Z_=await A5(_0);if(Z_)x_(Z_)}catch{}}_?.()}catch(U4){if(A1)i8();let I1=U4?.message||"Failed to send message.";S1(I1),J0?.(I1),console.error("Failed to post:",U4)}})()},A=(O)=>{c?.(O)},T=x((O)=>{if(j||!O0&&!I0||O?.isComposing)return!1;let R=()=>{O.preventDefault?.(),O.stopPropagation?.()},l=()=>{O1.current={value:"",updatedAt:0}};if(O.key==="Escape"){if(R(),l(),O0)g0(!1);if(I0)Y0(!1);return!0}if(O0){if(O.key==="ArrowDown"){if(R(),l(),S.length>0)E0((j0)=>(j0+1)%S.length);return!0}if(O.key==="ArrowUp"){if(R(),l(),S.length>0)E0((j0)=>(j0-1+S.length)%S.length);return!0}if((O.key==="Enter"||O.key==="Tab")&&S.length>0)return R(),l(),P4(S[Math.max(0,Math.min(F0,S.length-1))]),!0;if(l$(O)&&S.length>0){R();let j0=n$(O1.current,O.key);O1.current=j0;let R0=d$(S,j0.value,F0,(B1)=>B1);if(R0>=0)E0(R0);return!0}}if(I0){if(O.key==="ArrowDown"){if(R(),l(),H1.length>0)Z1((j0)=>(j0+1)%H1.length);return!0}if(O.key==="ArrowUp"){if(R(),l(),H1.length>0)Z1((j0)=>(j0-1+H1.length)%H1.length);return!0}if((O.key==="Enter"||O.key==="Tab")&&H1.length>0)return R(),l(),X4(H1[Math.max(0,Math.min(o0,H1.length-1))]),!0;if(l$(O)&&H1.length>0){R();let j0=n$(O1.current,O.key);O1.current=j0;let R0=d$(H1,j0.value,o0,(B1)=>B1.label);if(R0>=0)Z1(R0);return!0}}return!1},[j,O0,I0,S,F0,H1,o0,P4]),f=(O)=>{if(O.isComposing)return;if(j&&O.key==="Escape"){O.preventDefault(),d0(""),N?.();return}if(T(O))return;let R=$1.current?.value??(j?h0:A0);if(dZ(O,R,{searchMode:j,showSessionSwitcherButton:M_})){O.preventDefault(),K4();return}if(y0&&h.length>0){let l=$1.current?.value??(j?h0:A0);if(!String(l||"").match(/^@([a-zA-Z0-9_-]*)$/))V0(!1),i([]);else{if(O.key==="ArrowDown"){O.preventDefault(),T0((j0)=>(j0+1)%h.length);return}if(O.key==="ArrowUp"){O.preventDefault(),T0((j0)=>(j0-1+h.length)%h.length);return}if(O.key==="Tab"||O.key==="Enter"){O.preventDefault(),N4(h[H0]);return}if(O.key==="Escape"){O.preventDefault(),V0(!1),i([]);return}}}if(s&&r0.length>0){let l=$1.current?.value??(j?h0:A0);if(!String(l||"").startsWith("/"))q0(!1),U0([]);else{if(O.key==="ArrowDown"){O.preventDefault(),t0((j0)=>(j0+1)%r0.length);return}if(O.key==="ArrowUp"){O.preventDefault(),t0((j0)=>(j0-1+r0.length)%r0.length);return}if(O.key==="Tab"){O.preventDefault(),l_(r0[C0]);return}if(O.key==="Enter"&&!O.shiftKey){if(!R.includes(" ")){O.preventDefault();let R0=r0[C0];q0(!1),U0([]),H_(R0.name);return}}if(O.key==="Escape"){O.preventDefault(),q0(!1),U0([]);return}}}if(!j&&(O.key==="ArrowUp"||O.key==="ArrowDown")&&!O.metaKey&&!O.ctrlKey&&!O.altKey&&!O.shiftKey){let l=$1.current;if(!l)return;let j0=l.value||"",R0=l.selectionStart===0&&l.selectionEnd===0,B1=l.selectionStart===j0.length&&l.selectionEnd===j0.length;if(O.key==="ArrowUp"&&R0||O.key==="ArrowDown"&&B1){let A1=U1.current;if(!A1.length)return;O.preventDefault();let R1=E1.current;if(O.key==="ArrowUp"){if(R1===-1)r1.current=j0,R1=A1.length-1;else if(R1>0)R1-=1;E1.current=R1,__(A1[R1]||"")}else{if(R1===-1)return;if(R1<A1.length-1)R1+=1,E1.current=R1,__(A1[R1]||"");else E1.current=-1,__(r1.current||""),r1.current=""}requestAnimationFrame(()=>{let d_=$1.current;if(!d_)return;let S4=d_.value.length;d_.selectionStart=S4,d_.selectionEnd=S4});return}}if(O.key==="Enter"&&!O.shiftKey&&(O.ctrlKey||O.metaKey)){if(O.preventDefault(),j){if(R.trim())Y?.(R.trim(),Z)}else H_(R,"steer");return}if(O.key==="Enter"&&!O.shiftKey)if(O.preventDefault(),j){if(R.trim())Y?.(R.trim(),Z)}else H_(R)},u=(O)=>{let R=Array.from(O||[]).filter((l)=>l instanceof File&&!String(l.name||"").startsWith(".DS_Store"));if(!R.length)return;w0((l)=>[...l,...R]),S1(null)},o=(O)=>{u(O.target.files),O.target.value=""},Q0=(O)=>{if(j)return;O.preventDefault(),O.stopPropagation(),V1.current+=1,s0(!0)},L0=(O)=>{if(j)return;if(O.preventDefault(),O.stopPropagation(),V1.current=Math.max(0,V1.current-1),V1.current===0)s0(!1)},W0=(O)=>{if(j)return;if(O.preventDefault(),O.stopPropagation(),O.dataTransfer)O.dataTransfer.dropEffect="copy";s0(!0)},$0=(O)=>{if(j)return;O.preventDefault(),O.stopPropagation(),V1.current=0,s0(!1),u(O.dataTransfer?.files||[])},u0=(O)=>{if(j)return;let R=O.clipboardData?.items;if(!R||!R.length)return;let l=[];for(let j0 of R){if(j0.kind!=="file")continue;let R0=j0.getAsFile?.();if(R0)l.push(R0)}if(l.length>0)O.preventDefault(),u(l)},k1=(O)=>{w0((R)=>R.filter((l,j0)=>j0!==O))},J_=()=>{S1(null),w0([]),X?.(),L?.()},$_=()=>{if(!navigator.geolocation){alert("Geolocation is not available in this browser.");return}navigator.geolocation.getCurrentPosition((O)=>{let{latitude:R,longitude:l,accuracy:j0}=O.coords,R0=`${R.toFixed(5)}, ${l.toFixed(5)}`,B1=Number.isFinite(j0)?` ±${Math.round(j0)}m`:"",A1=`https://maps.google.com/?q=${R},${l}`,R1=`Location: ${R0}${B1} ${A1}`;n_(R1)},(O)=>{let R=O?.message||"Unable to retrieve location.";alert(`Location error: ${R}`)},{enableHighAccuracy:!0,timeout:1e4,maximumAge:0})};g(()=>{if(!O0)return;O1.current={value:"",updatedAt:0},u1(!0),A5(_0).then((O)=>{let R=Array.isArray(O?.models)?O.models.filter((l)=>typeof l==="string"&&l.trim().length>0):[];R.sort((l,j0)=>l.localeCompare(j0,void 0,{sensitivity:"base"})),e(R),x_(O)}).catch((O)=>{console.warn("Failed to load model list:",O),e([])}).finally(()=>{u1(!1)})},[O0,F]),g(()=>{if(j)g0(!1),Y0(!1),q0(!1),U0([]),V0(!1),i([])},[j]),g(()=>{if(I0&&!M_)Y0(!1)},[I0,M_]),g(()=>{if(!O0)return;let O=S.findIndex((R)=>R===F);E0(O>=0?O:0)},[O0,S,F]),g(()=>{if(!I0)return;Z1(z5(H1)),O1.current={value:"",updatedAt:0}},[I0,_0]),g(()=>{if(!O0)return;let O=(R)=>{let l=V_.current,j0=p_.current,R0=R.target;if(l&&l.contains(R0))return;if(j0&&j0.contains(R0))return;g0(!1)};return document.addEventListener("pointerdown",O),()=>document.removeEventListener("pointerdown",O)},[O0]),g(()=>{if(!I0)return;let O=(R)=>{let l=R_.current,j0=J1.current,R0=R.target;if(l&&l.contains(R0))return;if(j0&&j0.contains(R0))return;Y0(!1)};return document.addEventListener("pointerdown",O),()=>document.removeEventListener("pointerdown",O)},[I0]),g(()=>{if(j||!O0&&!I0)return;let O=(R)=>{T(R)};return document.addEventListener("keydown",O,!0),()=>document.removeEventListener("keydown",O,!0)},[j,O0,I0,T]),g(()=>{if(!O0)return;let O=V_.current;O?.focus?.(),O?.querySelector?.(".compose-model-popup-item.active")?.scrollIntoView?.({block:"nearest"})},[O0,F0,S]),g(()=>{if(!I0)return;let O=R_.current;O?.focus?.(),O?.querySelector?.(".compose-model-popup-item.active")?.scrollIntoView?.({block:"nearest"})},[I0,o0,H1.length]),g(()=>{let O=()=>{let B1=i1.current?.clientWidth||0;E_((A1)=>A1===B1?A1:B1)};O();let R=i1.current,l=0,j0=()=>{if(l)cancelAnimationFrame(l);l=requestAnimationFrame(()=>{l=0,O()})},R0=null;if(R&&typeof ResizeObserver<"u")R0=new ResizeObserver(()=>j0()),R0.observe(R);if(typeof window<"u")window.addEventListener("resize",j0);return()=>{if(l)cancelAnimationFrame(l);if(R0?.disconnect?.(),typeof window<"u")window.removeEventListener("resize",j0)}},[j,F,F1?.agent_name,M_,D?.percent]);let n5=(O)=>{let R=O.target.value;if(S1(null),I0)Y0(!1);f_(O.target),__(R)};return g(()=>{requestAnimationFrame(()=>f_())},[A0,h0,j]),g(()=>{if(!I_)return;f1(Date.now());let O=setInterval(()=>f1(Date.now()),1000);return()=>clearInterval(O)},[I_,Z0?.started_at,Z0?.startedAt]),g(()=>{if(j)return;h4(A0)},[h1,_0,A0,j]),z`
        <div class="compose-box">
            ${M0&&!j&&z`
                <${o$}
                    items=${w}
                    onInjectQueuedFollowup=${A}
                    onRemoveQueuedFollowup=${b}
                    onOpenFilePill=${I}
                />
            `}
            ${Z0&&z`
                <div
                    class=${`compose-inline-status${I_?" compaction":""}`}
                    role="status"
                    aria-live="polite"
                    title=${I4||""}
                >
                    <div class="compose-inline-status-row">
                        <span class="compose-inline-status-dot" aria-hidden="true"></span>
                        <span class="compose-inline-status-title">${k4}</span>
                        ${Y1&&z`<span class="compose-inline-status-elapsed">${Y1}</span>`}
                    </div>
                    ${I4&&z`<div class="compose-inline-status-detail">${I4}</div>`}
                </div>
            `}
            ${d1&&z`
                <div class="compose-submit-error compose-submit-error-top" role="status" aria-live="polite">${d1}</div>
            `}
            <div
                class=${`compose-input-wrapper${b0?" drag-active":""}`}
                onDragEnter=${Q0}
                onDragOver=${W0}
                onDragLeave=${L0}
                onDrop=${$0}
            >
                <div class="compose-input-main">
                    ${q4&&z`
                        <div class="compose-file-refs">
                            ${V.map((O)=>{return z`
                                    <${w_}
                                        key=${"msg-"+O}
                                        prefix="compose"
                                        label=${"msg:"+O}
                                        title=${"Message reference: "+O}
                                        removeTitle="Remove reference"
                                        icon="message"
                                        onRemove=${()=>U?.(O)}
                                    />
                                `})}
                            ${K.map((O)=>{let R=O.split("/").pop()||O;return z`
                                    <${w_}
                                        prefix="compose"
                                        label=${R}
                                        title=${O}
                                        onClick=${()=>I?.(O)}
                                        removeTitle="Remove file"
                                        onRemove=${()=>G?.(O)}
                                    />
                                `})}
                            ${c0.map((O,R)=>{let l=O?.name||`attachment-${R+1}`;return z`
                                    <${w_}
                                        key=${l+R}
                                        prefix="compose"
                                        label=${l}
                                        title=${l}
                                        removeTitle="Remove attachment"
                                        onRemove=${()=>k1(R)}
                                    />
                                `})}
                            <button
                                type="button"
                                class="compose-clear-attachments-btn"
                                onClick=${J_}
                                title="Clear all attachments and references"
                                aria-label="Clear all attachments and references"
                            >
                                Clear all
                            </button>
                        </div>
                    `}
                    ${!j&&typeof r==="function"&&z`
                        <button
                            type="button"
                            class="compose-popout-btn"
                            onClick=${()=>r?.()}
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
                        ref=${$1}
                        placeholder=${j?"Search (Enter to run)...":"Message (Enter to send, Shift+Enter for newline)..."}
                        value=${j?h0:A0}
                        onInput=${n5}
                        onKeyDown=${f}
                        onPaste=${u0}
                        onFocus=${$}
                        onClick=${$}
                        rows="1"
                    />
                    ${y0&&h.length>0&&z`
                        <div class="slash-autocomplete" ref=${m_}>
                            ${h.map((O,R)=>z`
                                <div
                                    key=${O.chat_jid||O.agent_name}
                                    class=${`slash-item${R===H0?" active":""}`}
                                    onMouseDown=${(l)=>{l.preventDefault(),N4(O)}}
                                    onMouseEnter=${()=>T0(R)}
                                >
                                    <span class="slash-name">@${O.agent_name}</span>
                                    <span class="slash-desc">${O.chat_jid||"Active agent"}</span>
                                </div>
                            `)}
                        </div>
                    `}
                    ${s&&r0.length>0&&z`
                        <div class="slash-autocomplete" ref=${g1}>
                            ${r0.map((O,R)=>z`
                                <div
                                    key=${O.name}
                                    class=${`slash-item${R===C0?" active":""}`}
                                    onMouseDown=${(l)=>{l.preventDefault(),l_(O)}}
                                    onMouseEnter=${()=>t0(R)}
                                >
                                    <span class="slash-name">${O.name}</span>
                                    <span class="slash-desc">${O.description}</span>
                                </div>
                            `)}
                        </div>
                    `}
                    ${O0&&!j&&z`
                        <div class="compose-model-popup" ref=${V_} tabIndex="-1" onKeyDown=${T}>
                            <div class="compose-model-popup-title">Select model</div>
                            <div class="compose-model-popup-menu" role="menu" aria-label="Model picker">
                                ${q1&&z`
                                    <div class="compose-model-popup-empty">Loading models…</div>
                                `}
                                ${!q1&&S.length===0&&z`
                                    <div class="compose-model-popup-empty">No models available.</div>
                                `}
                                ${!q1&&S.map((O,R)=>z`
                                    <button
                                        key=${O}
                                        type="button"
                                        role="menuitem"
                                        class=${`compose-model-popup-item${F0===R?" active":""}${F===O?" current-model":""}`}
                                        onClick=${()=>{P4(O)}}
                                        disabled=${P0}
                                    >
                                        ${O}
                                    </button>
                                `)}
                            </div>
                            <div class="compose-model-popup-actions">
                                <button
                                    type="button"
                                    class="compose-model-popup-btn"
                                    onClick=${()=>{d4()}}
                                    disabled=${P0}
                                >
                                    Next model
                                </button>
                            </div>
                        </div>
                    `}
                    ${I0&&!j&&z`
                        <div class="compose-model-popup" ref=${R_} tabIndex="-1" onKeyDown=${T}>
                            <div class="compose-model-popup-title">Manage sessions & agents</div>
                            <div class="compose-model-popup-menu" role="menu" aria-label="Sessions and agents">
                                ${z`
                                    <div class="compose-model-popup-item current" role="note" aria-live="polite">
                                        ${(()=>{return WZ(F1,_0)})()}
                                    </div>
                                `}
                                ${!s1&&z`
                                    <div class="compose-model-popup-empty">No other sessions yet.</div>
                                `}
                                ${s1&&N1.map((O,R)=>{let l=Boolean(O.archived_at),R0=O.chat_jid!==(O.root_chat_jid||O.chat_jid)&&!O.is_active&&!l&&typeof S0==="function",B1=f8(O,{currentChatJid:_0});return z`
                                        <div key=${O.chat_jid} class=${`compose-model-popup-item-row${l?" archived":""}`}>
                                            <button
                                                type="button"
                                                role="menuitem"
                                                class=${`compose-model-popup-item${l?" archived":""}${o0===R?" active":""}`}
                                                onClick=${()=>{if(l){l4(O.chat_jid);return}c4(O.chat_jid)}}
                                                disabled=${l?!t1:!a1}
                                                title=${l?`Restore archived ${`@${O.agent_name}`}`:`Switch to ${`@${O.agent_name}`}`}
                                            >
                                                ${B1}
                                            </button>
                                            ${R0&&z`
                                                <button
                                                    type="button"
                                                    class="compose-model-popup-item-delete"
                                                    title="Delete this branch"
                                                    aria-label=${`Delete @${O.agent_name}`}
                                                    onClick=${(A1)=>{A1.stopPropagation(),Y0(!1),S0(O.chat_jid)}}
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
                            ${(y1||w1||e1)&&z`
                                <div class="compose-model-popup-actions">
                                    ${y1&&z`
                                        <button
                                            type="button"
                                            class=${`compose-model-popup-btn primary${H1.findIndex((O)=>O.key==="action:new")===o0?" active":""}`}
                                            onClick=${()=>{n4()}}
                                            title="Create a new agent/session branch from this chat"
                                        >
                                            New
                                        </button>
                                    `}
                                    ${w1&&z`
                                        <button
                                            type="button"
                                            class=${`compose-model-popup-btn${H1.findIndex((O)=>O.key==="action:rename")===o0?" active":""}`}
                                            onClick=${(O)=>{G4(O)}}
                                            title="Rename the current branch handle"
                                            disabled=${u_}
                                        >
                                            Rename current…
                                        </button>
                                    `}
                                    ${e1&&z`
                                        <button
                                            type="button"
                                            class=${`compose-model-popup-btn danger${H1.findIndex((O)=>O.key==="action:delete")===o0?" active":""}`}
                                            onClick=${()=>{y_()}}
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
                <div class="compose-footer" ref=${i1}>
                    ${!j&&F&&z`
                    <div class="compose-meta-row">
                        ${!j&&F&&z`
                            <div class="compose-model-meta">
                                <button
                                    ref=${p_}
                                    type="button"
                                    class="compose-model-hint compose-model-hint-btn"
                                    title=${p4}
                                    aria-label="Open model picker"
                                    onClick=${F5}
                                    disabled=${P0}
                                >
                                    ${P0?"Switching…":W1}
                                </button>
                                <div class="compose-model-meta-subline">
                                    ${!P0&&z_&&z`
                                        <span class="compose-model-usage-hint" title=${p4}>
                                            ${z_}
                                        </span>
                                    `}
                                </div>
                            </div>
                        `}
                        ${!j&&D&&D.percent!=null&&z`
                            <${kG} usage=${D} onCompact=${V4} />
                        `}
                    </div>
                    `}
                    <div class="compose-actions ${j?"search-mode":""}">
                    ${M_&&z`
                        ${F1?.agent_name&&z`
                            <button
                                type="button"
                                class="compose-current-agent-label active"
                                title=${F1.chat_jid||_0}
                                aria-label=${`Manage sessions for @${F1.agent_name}`}
                                onClick=${F_}
                            >@${F1.agent_name}</button>
                        `}
                        <button
                            ref=${J1}
                            type="button"
                            class=${`icon-btn compose-mention-btn${I0?" active":""}`}
                            onClick=${F_}
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
                    ${j&&z`
                        <label class="compose-search-scope-wrap" title="Search scope">
                            <span class="compose-search-scope-label">Scope</span>
                            <select
                                class="compose-search-scope-select"
                                value=${Z}
                                onChange=${(O)=>Q?.(O.currentTarget.value)}
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
                    ${h_&&!j&&z`
                        <button
                            class="icon-btn location-btn"
                            onClick=${$_}
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
                    ${Q4&&!j&&z`
                        <button
                            class=${`icon-btn notification-btn${L_?" active":""}`}
                            onClick=${v}
                            title=${D1}
                            type="button"
                        >
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M18 8a6 6 0 1 0-12 0c0 7-3 9-3 9h18s-3-2-3-9" />
                                <path d="M13.73 21a2 2 0 0 1-3.46 0" />
                            </svg>
                        </button>
                    `}
                    ${!j&&z`
                        ${k&&B&&z`
                            <button
                                class="icon-btn attach-editor-btn"
                                onClick=${B}
                                title=${`Attach open file: ${k}`}
                                type="button"
                                disabled=${K.includes(k)}
                            >
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"/><polyline points="13 2 13 9 20 9"/></svg>
                            </button>
                        `}
                        <label class="icon-btn" title="Attach file">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>
                            <input type="file" multiple hidden onChange=${o} />
                        </label>
                    `}
                    ${(N0!=="connected"||!j)&&z`
                        <div class="compose-send-stack">
                            ${N0!=="connected"&&z`
                                <span class="compose-connection-status connection-status ${N0}" title=${W_}>
                                    ${o1}
                                </span>
                            `}
                            ${!j&&z`
                                <button 
                                    class="icon-btn send-btn" 
                                    type="button"
                                    onClick=${()=>{H_()}}
                                    disabled=${!p1}
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
    `}function oZ({session:_,onClose:$,onInject:j,onRetry:Z}){let Y=y(null),Q=y(null),q=_?.thinking?v5(_.thinking):"",N=_?.answer?G_(_.answer,null,{sanitize:!1}):"";if(g(()=>{if(Y.current&&q)Y4(Y.current).catch(()=>{})},[q]),g(()=>{if(Q.current&&N)Y4(Q.current).catch(()=>{})},[N]),!_)return null;let K=_.status==="running",G=Boolean(String(_.answer||"").trim()),X=Boolean(String(_.thinking||"").trim()),V=b9(_),U=g9(_),L=!K&&G,F=K?"Thinking…":_.status==="error"?"Error":"Done";return z`
        <section class="btw-panel" aria-label="BTW side conversation">
            <div class="btw-panel-header">
                <div class="btw-panel-title-wrap">
                    <span class="btw-panel-title">Question</span>
                    <span class=${`btw-panel-status btw-panel-status-${_.status||"idle"}`}>${F}</span>
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
            ${X&&z`
                <details class="btw-block btw-thinking" open=${K?!0:void 0}>
                    <summary>Thinking</summary>
                    <div
                        class="btw-thinking-body post-content"
                        ref=${Y}
                        dangerouslySetInnerHTML=${{__html:q}}
                    ></div>
                </details>
            `}
            ${V&&z`
                <div class="btw-block btw-answer">
                    <div class="btw-answer-label">Answer</div>
                    <div
                        class="btw-answer-body post-content"
                        ref=${Q}
                        dangerouslySetInnerHTML=${{__html:N}}
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
                        <button class="btw-btn btw-btn-primary" onClick=${()=>j?.()} disabled=${!L}>
                            Inject into chat
                        </button>
                    </div>
                </div>
            `}
        </section>
    `}function sZ({widget:_,onClose:$,onWidgetEvent:j}){let Z=y(null),Y=y(!1),Q=m0(()=>$j(_),[_?.artifact?.kind,_?.artifact?.html,_?.artifact?.svg,_?.widgetId,_?.toolCallId,_?.turnId,_?.title]);if(g(()=>{if(!_)return;let W=(D)=>{if(D.key==="Escape")$?.()};return document.addEventListener("keydown",W),()=>document.removeEventListener("keydown",W)},[_,$]),g(()=>{Y.current=!1},[Q]),g(()=>{if(!_)return;let W=Z.current;if(!W)return;let D=(p)=>{let M=P8(_),k=p==="widget.init"?x8(_):y8(_);try{W.name=M}catch{}try{W.contentWindow?.postMessage({__piclawGeneratedWidgetHost:!0,type:p,widgetId:_?.widgetId||null,toolCallId:_?.toolCallId||null,turnId:_?.turnId||null,payload:k},"*")}catch{}},E=()=>{D("widget.init"),D("widget.update")},C=()=>{Y.current=!0,E()};W.addEventListener("load",C);let v=[0,40,120,300,800].map((p)=>setTimeout(E,p));return()=>{W.removeEventListener("load",C),v.forEach((p)=>clearTimeout(p))}},[Q,_?.widgetId,_?.toolCallId,_?.turnId]),g(()=>{if(!_)return;let W=Z.current;if(!W?.contentWindow)return;let D=P8(_),E=y8(_);try{W.name=D}catch{}try{W.contentWindow.postMessage({__piclawGeneratedWidgetHost:!0,type:"widget.update",widgetId:_?.widgetId||null,toolCallId:_?.toolCallId||null,turnId:_?.turnId||null,payload:E},"*")}catch{}return},[_?.widgetId,_?.toolCallId,_?.turnId,_?.status,_?.subtitle,_?.description,_?.error,_?.width,_?.height,_?.runtimeState]),g(()=>{if(!_)return;let W=(D)=>{let E=D?.data;if(!E||E.__piclawGeneratedWidget!==!0)return;let C=Z.current,P=X_(_),v=X_({widgetId:E.widgetId,toolCallId:E.toolCallId});if(v&&P&&v!==P)return;if(!v&&C?.contentWindow&&D.source!==C.contentWindow)return;j?.(E,_)};return window.addEventListener("message",W),()=>window.removeEventListener("message",W)},[_,j]),!_)return null;let N=(_?.artifact||{}).kind||_?.kind||"html",K=typeof _?.title==="string"&&_.title.trim()?_.title.trim():"Generated widget",G=typeof _?.subtitle==="string"&&_.subtitle.trim()?_.subtitle.trim():"",X=_?.source==="live"?"live":"timeline",V=typeof _?.status==="string"&&_.status.trim()?_.status.trim():"final",U=X==="live"?`Live widget • ${V.toUpperCase()}`:_?.originPostId?`Message #${_.originPostId}`:"Timeline launch",L=typeof _?.description==="string"&&_.description.trim()?_.description.trim():"",F=!Q,J=_j(_),H=a9(_);return z`
        <div class="floating-widget-backdrop" onClick=${()=>$?.()}>
            <section
                class="floating-widget-pane"
                aria-label=${K}
                onClick=${(W)=>W.stopPropagation()}
            >
                <div class="floating-widget-header">
                    <div class="floating-widget-heading">
                        <div class="floating-widget-eyebrow">${U} • ${N.toUpperCase()}</div>
                        <div class="floating-widget-title">${K}</div>
                        ${(G||L)&&z`
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
                    ${F?z`<div class="floating-widget-empty">${J}</div>`:z`
                            <iframe
                                ref=${Z}
                                class="floating-widget-frame"
                                title=${K}
                                name=${P8(_)}
                                sandbox=${H}
                                referrerpolicy="no-referrer"
                                srcdoc=${Q}
                            ></iframe>
                        `}
                </div>
            </section>
        </div>
    `}var aZ="PiClaw";function s$(_,$,j=!1){let Z=_||"PiClaw",Y=Z.charAt(0).toUpperCase(),Q=["#FF6B6B","#4ECDC4","#45B7D1","#FFA07A","#98D8C8","#F7DC6F","#BB8FCE","#85C1E2","#F8B195","#6C5CE7","#00B894","#FDCB6E","#E17055","#74B9FF","#A29BFE","#FD79A8","#00CEC9","#FFEAA7","#DFE6E9","#FF7675","#55EFC4","#81ECEC","#FAB1A0","#74B9FF","#A29BFE","#FD79A8"],q=Y.charCodeAt(0)%Q.length,N=Q[q],K=Z.trim().toLowerCase(),G=typeof $==="string"?$.trim():"",X=G?G:null,V=j||K==="PiClaw".toLowerCase()||K==="pi";return{letter:Y,color:N,image:X||(V?"/static/icon-192.png":null)}}function tZ(_,$){if(!_)return"PiClaw";let j=$[_]?.name||_;return j?j.charAt(0).toUpperCase()+j.slice(1):"PiClaw"}function eZ(_,$){if(!_)return null;let j=$[_]||{};return j.avatar_url||j.avatarUrl||j.avatar||null}function _Y(_){if(!_)return null;if(typeof document<"u"){let Q=document.documentElement,q=Q?.dataset?.colorTheme||"",N=Q?.dataset?.tint||"",K=getComputedStyle(Q).getPropertyValue("--accent-color")?.trim();if(K&&(N||q&&q!=="default"))return K}let $=["#4ECDC4","#FF6B6B","#45B7D1","#BB8FCE","#FDCB6E","#00B894","#74B9FF","#FD79A8","#81ECEC","#FFA07A"],j=String(_),Z=0;for(let Q=0;Q<j.length;Q+=1)Z=(Z*31+j.charCodeAt(Q))%2147483647;let Y=Math.abs(Z)%$.length;return $[Y]}var xG=z`
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <rect x="9" y="9" width="10" height="10" rx="2"></rect>
        <path d="M7 15H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2v1"></path>
    </svg>
`;function a$({status:_,draft:$,plan:j,thought:Z,pendingRequest:Y,intent:Q,extensionPanels:q=[],pendingPanelActions:N=new Set,onExtensionPanelAction:K,turnId:G,steerQueued:X,onPanelToggle:V,showCorePanels:U=!0,showExtensionPanels:L=!0}){let H=(s)=>{if(!s)return{text:"",totalLines:0,fullText:""};if(typeof s==="string"){let H0=s,T0=H0?H0.replace(/\r\n/g,`
`).split(`
`).length:0;return{text:H0,totalLines:T0,fullText:H0}}let q0=s.text||"",h=s.fullText||s.full_text||q0,i=Number.isFinite(s.totalLines)?s.totalLines:h?h.replace(/\r\n/g,`
`).split(`
`).length:0;return{text:q0,totalLines:i,fullText:h}},W=160,D=(s)=>String(s||"").replace(/<\/?internal>/gi,""),E=(s)=>{if(!s)return 1;return Math.max(1,Math.ceil(s.length/160))},C=(s,q0,h)=>{let i=(s||"").replace(/\r\n/g,`
`).replace(/\r/g,`
`);if(!i)return{text:"",omitted:0,totalLines:Number.isFinite(h)?h:0,visibleLines:0};let H0=i.split(`
`),T0=H0.length>q0?H0.slice(0,q0).join(`
`):i,y0=Number.isFinite(h)?h:H0.reduce((l0,O0)=>l0+E(O0),0),V0=T0?T0.split(`
`).reduce((l0,O0)=>l0+E(O0),0):0,P0=Math.max(y0-V0,0);return{text:T0,omitted:P0,totalLines:y0,visibleLines:V0}},P=H(j),v=H(Z),p=H($),M=Boolean(P.text)||P.totalLines>0,k=Boolean(v.text)||v.totalLines>0,B=Boolean(p.fullText?.trim()||p.text?.trim()),I=Boolean(_||B||M||k||Y||Q),w=Array.isArray(q)&&q.length>0;if((!U||!I)&&(!L||!w))return null;let[c,b]=m(new Set),[n,d]=m(null),[r,t]=m(()=>Date.now()),a=(s)=>b((q0)=>{let h=new Set(q0),i=!h.has(s);if(i)h.add(s);else h.delete(s);if(typeof V==="function")V(s,i);return h});g(()=>{b(new Set),d(null)},[G]);let _0=O4(_);g(()=>{if(!_0)return;t(Date.now());let s=setInterval(()=>t(Date.now()),1000);return()=>clearInterval(s)},[_0,_?.started_at,_?.startedAt]);let N0=_?.turn_id||G,G0=_Y(N0),k0=X?"turn-dot turn-dot-queued":"turn-dot",J0=(s)=>s,X0=Boolean(_?.last_activity||_?.lastActivity),x0=(s)=>s==="warning"?"#f59e0b":s==="error"?"var(--danger-color)":s==="success"?"var(--success-color)":G0,B0=Q?.kind||"info",D0=x0(B0),S0=x0(_?.kind||(_0?"warning":"info")),z0="",M0=_?.title,Z0=_?.status;if(_?.type==="plan")z0=M0?`Planning: ${M0}`:"Planning...";else if(_?.type==="tool_call")z0=M0?`Running: ${M0}`:"Running tool...";else if(_?.type==="tool_status")z0=M0?`${M0}: ${Z0||"Working..."}`:Z0||"Working...";else if(_?.type==="error")z0=M0||"Agent error";else z0=M0||Z0||"Working...";if(X0)z0="Last activity just now";let A0=({panelTitle:s,text:q0,fullText:h,totalLines:i,maxLines:H0,titleClass:T0,panelKey:y0})=>{let V0=c.has(y0),P0=h||q0||"",l0=y0==="thought"||y0==="draft"?D(P0):P0,O0=typeof H0==="number",g0=V0&&O0,I0=O0?C(l0,H0,i):{text:l0||"",omitted:0,totalLines:Number.isFinite(i)?i:0};if(!l0&&!(Number.isFinite(I0.totalLines)&&I0.totalLines>0))return null;let Y0=`agent-thinking-body${O0?" agent-thinking-body-collapsible":""}`,S=O0?`--agent-thinking-collapsed-lines: ${H0};`:"";return z`
            <div
                class="agent-thinking"
                data-expanded=${V0?"true":"false"}
                data-collapsible=${O0?"true":"false"}
                style=${G0?`--turn-color: ${G0};`:""}
            >
                <div class="agent-thinking-title ${T0||""}">
                    ${G0&&z`<span class=${k0} aria-hidden="true"></span>`}
                    ${s}
                    ${g0&&z`
                        <button
                            class="agent-thinking-close"
                            aria-label=${`Close ${s} panel`}
                            onClick=${()=>a(y0)}
                        >
                            ×
                        </button>
                    `}
                </div>
                <div
                    class=${Y0}
                    style=${S}
                    dangerouslySetInnerHTML=${{__html:v5(l0)}}
                />
                ${!V0&&I0.omitted>0&&z`
                    <button class="agent-thinking-truncation" onClick=${()=>a(y0)}>
                        ▸ ${I0.omitted} more lines
                    </button>
                `}
                ${V0&&I0.omitted>0&&z`
                    <button class="agent-thinking-truncation" onClick=${()=>a(y0)}>
                        ▴ show less
                    </button>
                `}
            </div>
        `},v0=Y?.tool_call?.title,h0=v0?`Awaiting approval: ${v0}`:"Awaiting approval",d0=_0?M8(_,r):null,c0=(s,q0,h=null)=>{let i=I8(s);return z`
            <div
                class="agent-thinking agent-thinking-intent"
                aria-live="polite"
                style=${q0?`--turn-color: ${q0};`:""}
                title=${s?.detail||""}
            >
                <div class="agent-thinking-title intent">
                    ${q0&&z`<span class=${k0} aria-hidden="true"></span>`}
                    <span class="agent-thinking-title-text">${i}</span>
                    ${h&&z`<span class="agent-status-elapsed">${h}</span>`}
                </div>
                ${s.detail&&z`<div class="agent-thinking-body">${s.detail}</div>`}
            </div>
        `},w0=(s,q0,h,i,H0,T0,y0,V0=8,P0=8)=>{let l0=Math.max(H0-i,0.000000001),O0=Math.max(q0-V0*2,1),g0=Math.max(h-P0*2,1),I0=Math.max(y0-T0,1),Y0=y0===T0?q0/2:V0+(s.run-T0)/I0*O0,S=P0+(g0-(s.value-i)/l0*g0);return{x:Y0,y:S}},b0=(s,q0,h,i,H0,T0,y0,V0=8,P0=8)=>{if(!Array.isArray(s)||s.length===0)return"";return s.map((l0,O0)=>{let{x:g0,y:I0}=w0(l0,q0,h,i,H0,T0,y0,V0,P0);return`${O0===0?"M":"L"} ${g0.toFixed(2)} ${I0.toFixed(2)}`}).join(" ")},s0=(s,q0="")=>{if(!Number.isFinite(s))return"—";return`${Math.abs(s)>=100?s.toFixed(0):s.toFixed(2).replace(/\.0+$/,"").replace(/(\.\d*[1-9])0+$/,"$1")}${q0}`},r0=["var(--accent-color)","var(--success-color)","var(--warning-color, #f59e0b)","var(--danger-color)"],U0=(s,q0)=>{let h=r0;if(!Array.isArray(h)||h.length===0)return"var(--accent-color)";if(h.length===1||!Number.isFinite(q0)||q0<=1)return h[0];let H0=Math.max(0,Math.min(Number.isFinite(s)?s:0,q0-1))/Math.max(1,q0-1)*(h.length-1),T0=Math.floor(H0),y0=Math.min(h.length-1,T0+1),V0=H0-T0,P0=h[T0],l0=h[y0];if(!l0||T0===y0||V0<=0.001)return P0;if(V0>=0.999)return l0;let O0=Math.round((1-V0)*1000)/10,g0=Math.round(V0*1000)/10;return`color-mix(in oklab, ${P0} ${O0}%, ${l0} ${g0}%)`},C0=(s,q0="autoresearch")=>{let h=Array.isArray(s)?s.map((Y0)=>({...Y0,points:Array.isArray(Y0?.points)?Y0.points.filter((S)=>Number.isFinite(S?.value)&&Number.isFinite(S?.run)):[]})).filter((Y0)=>Y0.points.length>0):[],i=h.map((Y0,S)=>({...Y0,color:U0(S,h.length)}));if(i.length===0)return null;let H0=320,T0=120,y0=i.flatMap((Y0)=>Y0.points),V0=y0.map((Y0)=>Y0.value),P0=y0.map((Y0)=>Y0.run),l0=Math.min(...V0),O0=Math.max(...V0),g0=Math.min(...P0),I0=Math.max(...P0);return z`
            <div class="agent-series-chart agent-series-chart-combined">
                <div class="agent-series-chart-header">
                    <span class="agent-series-chart-title">Tracked variables</span>
                    <span class="agent-series-chart-value">${i.length} series</span>
                </div>
                <div class="agent-series-chart-plot">
                    <svg class="agent-series-chart-svg" viewBox=${`0 0 ${H0} ${T0}`} preserveAspectRatio="none" aria-hidden="true">
                        ${i.map((Y0)=>{let S=Y0?.key||Y0?.label||"series",e=n?.panelKey===q0&&n?.seriesKey===S;return z`
                                <g key=${S}>
                                    <path
                                        class=${`agent-series-chart-line${e?" is-hovered":""}`}
                                        d=${b0(Y0.points,H0,T0,l0,O0,g0,I0)}
                                        style=${`--agent-series-color: ${Y0.color};`}
                                        onMouseEnter=${()=>d({panelKey:q0,seriesKey:S})}
                                        onMouseLeave=${()=>d((F0)=>F0?.panelKey===q0&&F0?.seriesKey===S?null:F0)}
                                    ></path>
                                </g>
                            `})}
                    </svg>
                    <div class="agent-series-chart-points-layer">
                        ${i.flatMap((Y0)=>{let S=typeof Y0?.unit==="string"?Y0.unit:"",e=Y0?.key||Y0?.label||"series";return Y0.points.map((F0,E0)=>{let o0=w0(F0,H0,T0,l0,O0,g0,I0);return z`
                                    <button
                                        key=${`${e}-point-${E0}`}
                                        type="button"
                                        class="agent-series-chart-point-hit"
                                        style=${`--agent-series-color: ${Y0.color}; left:${o0.x/H0*100}%; top:${o0.y/T0*100}%;`}
                                        onMouseEnter=${()=>d({panelKey:q0,seriesKey:e,run:F0.run,value:F0.value,unit:S})}
                                        onMouseLeave=${()=>d((Z1)=>Z1?.panelKey===q0?null:Z1)}
                                        onFocus=${()=>d({panelKey:q0,seriesKey:e,run:F0.run,value:F0.value,unit:S})}
                                        onBlur=${()=>d((Z1)=>Z1?.panelKey===q0?null:Z1)}
                                        aria-label=${`${Y0?.label||"Series"} ${s0(F0.value,S)} at run ${F0.run}`}
                                    >
                                        <span class="agent-series-chart-point"></span>
                                    </button>
                                `})})}
                    </div>
                </div>
                <div class="agent-series-legend">
                    ${i.map((Y0)=>{let S=Y0.points[Y0.points.length-1]?.value,e=typeof Y0?.unit==="string"?Y0.unit:"",F0=Y0?.key||Y0?.label||"series",E0=n?.panelKey===q0&&n?.seriesKey===F0?n:null,o0=E0&&Number.isFinite(E0.value)?E0.value:S,Z1=E0&&typeof E0.unit==="string"?E0.unit:e,q1=E0&&Number.isFinite(E0.run)?E0.run:null;return z`
                            <div key=${`${F0}-legend`} class=${`agent-series-legend-item${E0?" is-hovered":""}`} style=${`--agent-series-color: ${Y0.color};`}>
                                <span class="agent-series-legend-swatch" style=${`--agent-series-color: ${Y0.color};`}></span>
                                <span class="agent-series-legend-label">${Y0?.label||"Series"}</span>
                                ${q1!==null&&z`<span class="agent-series-legend-run">run ${q1}</span>`}
                                <span class="agent-series-legend-value">${s0(o0,Z1)}</span>
                            </div>
                        `})}
                </div>
            </div>
        `},t0=(s)=>{if(!s)return null;let q0=typeof s?.key==="string"?s.key:`panel-${Math.random()}`,h=c.has(q0),i=s?.title||"Extension status",H0=s?.collapsed_text||"",T0=String(s?.state||"").replace(/[-_]+/g," ").replace(/^./,(e)=>e.toUpperCase()),y0=x0(s?.state==="completed"?"success":s?.state==="failed"?"error":s?.state==="stopped"?"warning":"info"),V0=typeof s?.detail_markdown==="string"?s.detail_markdown.trim():"",P0=typeof s?.last_run_text==="string"?s.last_run_text.trim():"",l0=typeof s?.tmux_command==="string"?s.tmux_command.trim():"",O0=Array.isArray(s?.series)?s.series:[],g0=Array.isArray(s?.actions)?s.actions:[],I0=Boolean(V0||l0),Y0=Boolean(V0||O0.length>0||l0),S=[i,H0].filter(Boolean).join(" — ");return z`
            <div
                class="agent-thinking agent-thinking-intent agent-thinking-autoresearch"
                aria-live="polite"
                data-expanded=${h?"true":"false"}
                style=${y0?`--turn-color: ${y0};`:""}
                title=${!h?S||i:""}
            >
                <div class="agent-thinking-header agent-thinking-header-inline">
                    <button
                        class="agent-thinking-title intent agent-thinking-title-clickable"
                        type="button"
                        onClick=${()=>Y0?a(q0):null}
                    >
                        ${y0&&z`<span class=${k0} aria-hidden="true"></span>`}
                        <span class="agent-thinking-title-text">${i}</span>
                        ${H0&&z`<span class="agent-thinking-title-meta">${H0}</span>`}
                    </button>
                    ${(g0.length>0||Y0&&!h)&&z`
                        <div class="agent-thinking-tools-inline">
                            ${g0.length>0&&z`
                                <div class="agent-thinking-actions agent-thinking-actions-inline">
                                    ${g0.map((e)=>{let F0=`${q0}:${e?.key||""}`,E0=N?.has?.(F0);return z`
                                            <button
                                                key=${F0}
                                                class=${`agent-thinking-action-btn${e?.tone==="danger"?" danger":""}`}
                                                onClick=${()=>K?.(s,e)}
                                                disabled=${Boolean(E0)}
                                            >
                                                ${E0?"Working…":e?.label||"Run"}
                                            </button>
                                        `})}
                                </div>
                            `}
                            ${Y0&&!h&&z`
                                <button
                                    class="agent-thinking-corner-toggle agent-thinking-corner-toggle-inline"
                                    type="button"
                                    aria-label=${`Expand ${i}`}
                                    title="Expand details"
                                    onClick=${()=>a(q0)}
                                >
                                    <svg viewBox="0 0 16 16" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                        <polyline points="4 10 8 6 12 10"></polyline>
                                    </svg>
                                </button>
                            `}
                        </div>
                    `}
                </div>
                ${Y0&&h&&z`
                    <button
                        class="agent-thinking-corner-toggle"
                        type="button"
                        aria-label=${`Collapse ${i}`}
                        title="Collapse details"
                        onClick=${()=>a(q0)}
                    >
                        <svg viewBox="0 0 16 16" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                            <polyline points="4 6 8 10 12 6"></polyline>
                        </svg>
                    </button>
                `}
                ${h&&z`
                    <div class=${`agent-thinking-autoresearch-layout${I0?"":" chart-only"}`}>
                        ${I0&&z`
                            <div class="agent-thinking-autoresearch-meta-stack">
                                ${V0&&z`
                                    <div
                                        class="agent-thinking-body agent-thinking-autoresearch-detail"
                                        dangerouslySetInnerHTML=${{__html:v5(V0)}}
                                    />
                                `}
                                ${l0&&z`
                                    <div class="agent-series-chart-command">
                                        <div class="agent-series-chart-command-header">
                                            <span>Attach to session</span>
                                        </div>
                                        <div class="agent-series-chart-command-shell">
                                            <pre class="agent-series-chart-command-code">${l0}</pre>
                                            <button
                                                type="button"
                                                class="agent-series-chart-command-copy"
                                                aria-label="Copy tmux command"
                                                title="Copy tmux command"
                                                onClick=${()=>K?.(s,{key:"copy_tmux",action_type:"autoresearch.copy_tmux",label:"Copy tmux"})}
                                            >
                                                ${xG}
                                            </button>
                                        </div>
                                    </div>
                                `}
                            </div>
                        `}
                        ${O0.length>0?z`
                                <div class="agent-series-chart-stack">
                                    ${C0(O0,q0)}
                                    ${P0&&z`<div class="agent-series-chart-note">${P0}</div>`}
                                </div>
                            `:z`<div class="agent-thinking-body agent-thinking-autoresearch-summary">Variable history will appear after the first completed run.</div>`}
                    </div>
                `}
            </div>
        `};return z`
        <div class="agent-status-panel">
            ${U&&Q&&c0(Q,D0)}
            ${L&&Array.isArray(q)&&q.map((s)=>t0(s))}
            ${U&&_?.type==="intent"&&c0(_,S0,d0)}
            ${U&&Y&&z`
                <div class="agent-status agent-status-request" aria-live="polite" style=${G0?`--turn-color: ${G0};`:""}>
                    <span class=${k0} aria-hidden="true"></span>
                    <div class="agent-status-spinner"></div>
                    <span class="agent-status-text">${h0}</span>
                </div>
            `}
            ${U&&M&&A0({panelTitle:J0("Planning"),text:P.text,fullText:P.fullText,totalLines:P.totalLines,panelKey:"plan"})}
            ${U&&k&&A0({panelTitle:J0("Thoughts"),text:v.text,fullText:v.fullText,totalLines:v.totalLines,maxLines:8,titleClass:"thought",panelKey:"thought"})}
            ${U&&B&&A0({panelTitle:J0("Draft"),text:p.text,fullText:p.fullText,totalLines:p.totalLines,maxLines:8,titleClass:"thought",panelKey:"draft"})}
            ${U&&_&&_?.type!=="intent"&&z`
                <div class=${`agent-status${X0?" agent-status-last-activity":""}${_?.type==="error"?" agent-status-error":""}`} aria-live="polite" style=${G0?`--turn-color: ${G0};`:""}>
                    ${G0&&z`<span class=${k0} aria-hidden="true"></span>`}
                    ${_?.type==="error"?z`<span class="agent-status-error-icon" aria-hidden="true">⚠</span>`:!X0&&z`<div class="agent-status-spinner"></div>`}
                    <span class="agent-status-text">${z0}</span>
                </div>
            `}
        </div>
    `}function $Y({request:_,onRespond:$}){if(!_)return null;let{request_id:j,tool_call:Z,options:Y,chat_jid:Q}=_,q=Z?.title||"Agent Request",N=Z?.kind||"other",K=Z?.rawInput||{},G=K.command||K.commands&&K.commands[0]||null,X=K.diff||null,V=K.fileName||K.path||null,U=Z?.description||K.description||K.explanation||null,F=(Array.isArray(Z?.locations)?Z.locations:[]).map((E)=>E?.path).filter((E)=>Boolean(E)),J=Array.from(new Set([V,...F].filter(Boolean)));console.log("AgentRequestModal:",{request_id:j,tool_call:Z,options:Y});let H=async(E)=>{try{await q8(j,E,Q||null),$()}catch(C){console.error("Failed to respond to agent request:",C)}},W=async()=>{try{await O6(q,`Auto-approved: ${q}`),await q8(j,"approved",Q||null),$()}catch(E){console.error("Failed to add to whitelist:",E)}},D=Y&&Y.length>0;return z`
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
                ${(U||G||X||J.length>0)&&z`
                    <div class="agent-request-body">
                        ${U&&z`
                            <div class="agent-request-description">${U}</div>
                        `}
                        ${J.length>0&&z`
                            <div class="agent-request-files">
                                <div class="agent-request-subtitle">Files</div>
                                <ul>
                                    ${J.map((E,C)=>z`<li key=${C}>${E}</li>`)}
                                </ul>
                            </div>
                        `}
                        ${G&&z`
                            <pre class="agent-request-command">${G}</pre>
                        `}
                        ${X&&z`
                            <details class="agent-request-diff">
                                <summary>Proposed diff</summary>
                                <pre>${X}</pre>
                            </details>
                        `}
                    </div>
                `}
                <div class="agent-request-actions">
                    ${D?Y.map((E)=>z`
                            <button 
                                key=${E.optionId||E.id||String(E)}
                                class="agent-request-btn ${E.kind==="allow_once"||E.kind==="allow_always"?"primary":""}"
                                onClick=${()=>H(E.optionId||E.id||E)}
                            >
                                ${E.name||E.label||E.optionId||E.id||String(E)}
                            </button>
                        `):z`
                        <button class="agent-request-btn primary" onClick=${()=>H("approved")}>
                            Allow
                        </button>
                        <button class="agent-request-btn" onClick=${()=>H("denied")}>
                            Deny
                        </button>
                        <button class="agent-request-btn always-allow" onClick=${W}>
                            Always Allow This
                        </button>
                    `}
                </div>
            </div>
        </div>
    `}var yG=new Set(["application/json","application/xml","text/csv","text/html","text/markdown","text/plain","text/xml"]),PG=new Set(["text/markdown"]),CG=new Set(["application/msword","application/rtf","application/vnd.ms-excel","application/vnd.ms-powerpoint","application/vnd.oasis.opendocument.presentation","application/vnd.oasis.opendocument.spreadsheet","application/vnd.oasis.opendocument.text","application/vnd.openxmlformats-officedocument.presentationml.presentation","application/vnd.openxmlformats-officedocument.spreadsheetml.sheet","application/vnd.openxmlformats-officedocument.wordprocessingml.document"]),SG=new Set(["application/vnd.jgraph.mxfile"]);function h5(_){return typeof _==="string"?_.trim().toLowerCase():""}function wG(_){let $=h5(_);return!!$&&($.endsWith(".drawio")||$.endsWith(".drawio.xml")||$.endsWith(".drawio.svg")||$.endsWith(".drawio.png"))}function RG(_){let $=h5(_);return!!$&&$.endsWith(".pdf")}function uG(_){let $=h5(_);return!!$&&($.endsWith(".docx")||$.endsWith(".doc")||$.endsWith(".odt")||$.endsWith(".rtf")||$.endsWith(".xlsx")||$.endsWith(".xls")||$.endsWith(".ods")||$.endsWith(".pptx")||$.endsWith(".ppt")||$.endsWith(".odp"))}function c5(_,$){let j=h5(_);if(wG($)||SG.has(j))return"drawio";if(RG($)||j==="application/pdf")return"pdf";if(uG($)||CG.has(j))return"office";if(!j)return"unsupported";if(j.startsWith("image/"))return"image";if(yG.has(j)||j.startsWith("text/"))return"text";return"unsupported"}function jY(_){let $=h5(_);return PG.has($)}function ZY(_){switch(_){case"image":return"Image preview";case"pdf":return"PDF preview";case"office":return"Office viewer";case"drawio":return"Draw.io preview (read-only)";case"text":return"Text preview";default:return"Preview unavailable"}}function fG(_){let j=String(_||"").trim().match(/^#([0-9a-f]{3}|[0-9a-f]{6})$/i);if(!j)return null;let Z=j[1].length===3?j[1].split("").map((Y)=>`${Y}${Y}`).join(""):j[1];return{r:parseInt(Z.slice(0,2),16),g:parseInt(Z.slice(2,4),16),b:parseInt(Z.slice(4,6),16)}}function vG(_){let j=String(_||"").trim().match(/^rgba?\((\d+)[,\s]+(\d+)[,\s]+(\d+)/i);if(!j)return null;let Z=Number(j[1]),Y=Number(j[2]),Q=Number(j[3]);if(![Z,Y,Q].every((q)=>Number.isFinite(q)))return null;return{r:Z,g:Y,b:Q}}function YY(_){return fG(_)||vG(_)}function h8(_){let $=(Q)=>{let q=Q/255;return q<=0.03928?q/12.92:((q+0.055)/1.055)**2.4},j=$(_.r),Z=$(_.g),Y=$(_.b);return 0.2126*j+0.7152*Z+0.0722*Y}function bG(_,$){let j=Math.max(h8(_),h8($)),Z=Math.min(h8(_),h8($));return(j+0.05)/(Z+0.05)}function gG(_,$,j="#ffffff"){let Z=YY(_);if(!Z)return j;let Y=j,Q=-1;for(let q of $){let N=YY(q);if(!N)continue;let K=bG(Z,N);if(K>Q)Y=q,Q=K}return Y}function t$(){let _=getComputedStyle(document.documentElement),$=(F,J)=>{for(let H of F){let W=_.getPropertyValue(H).trim();if(W)return W}return J},j=$(["--text-primary","--color-text"],"#0f1419"),Z=$(["--text-secondary","--color-text-muted"],"#536471"),Y=$(["--bg-primary","--color-bg-primary"],"#ffffff"),Q=$(["--bg-secondary","--color-bg-secondary"],"#f7f9fa"),q=$(["--bg-hover","--bg-tertiary","--color-bg-tertiary"],"#e8ebed"),N=$(["--accent-color","--color-accent"],"#1d9bf0"),K=$(["--success-color","--color-success"],"#00ba7c"),G=$(["--warning-color","--color-warning","--accent-color"],"#f0b429"),X=$(["--danger-color","--color-error"],"#f4212e"),V=$(["--border-color","--color-border"],"#eff3f4"),U=$(["--font-family"],"system-ui, sans-serif"),L=gG(N,[j,Y],j);return{fg:j,fgMuted:Z,bgPrimary:Y,bg:Q,bgEmphasis:q,accent:N,good:K,warning:G,attention:X,border:V,fontFamily:U,buttonTextColor:L}}function QY(){let{fg:_,fgMuted:$,bg:j,bgEmphasis:Z,accent:Y,good:Q,warning:q,attention:N,border:K,fontFamily:G}=t$();return{fontFamily:G,containerStyles:{default:{backgroundColor:j,foregroundColors:{default:{default:_,subtle:$},accent:{default:Y,subtle:Y},good:{default:Q,subtle:Q},warning:{default:q,subtle:q},attention:{default:N,subtle:N}}},emphasis:{backgroundColor:Z,foregroundColors:{default:{default:_,subtle:$},accent:{default:Y,subtle:Y},good:{default:Q,subtle:Q},warning:{default:q,subtle:q},attention:{default:N,subtle:N}}}},actions:{actionsOrientation:"horizontal",actionAlignment:"left",buttonSpacing:8,maxActions:5,showCard:{actionMode:"inline"},spacing:"default"},adaptiveCard:{allowCustomStyle:!1},spacing:{small:4,default:8,medium:12,large:16,extraLarge:24,padding:12},separator:{lineThickness:1,lineColor:K},fontSizes:{small:12,default:14,medium:16,large:18,extraLarge:22},fontWeights:{lighter:300,default:400,bolder:600},imageSizes:{small:40,medium:80,large:120},textBlock:{headingLevel:2}}}var mG=new Set(["1.0","1.1","1.2","1.3","1.4","1.5","1.6"]),qY=!1,c8=null,NY=!1;function e$(_){_.querySelector(".adaptive-card-notice")?.remove()}function pG(_,$,j="error"){e$(_);let Z=document.createElement("div");Z.className=`adaptive-card-notice adaptive-card-notice-${j}`,Z.textContent=$,_.appendChild(Z)}function hG(_,$=(j)=>G_(j,null)){let j=typeof _==="string"?_:String(_??"");if(!j.trim())return{outputHtml:"",didProcess:!1};return{outputHtml:$(j),didProcess:!0}}function cG(_=($)=>G_($,null)){return($,j)=>{try{let Z=hG($,_);j.outputHtml=Z.outputHtml,j.didProcess=Z.didProcess}catch(Z){console.error("[adaptive-card] Failed to process markdown:",Z),j.outputHtml=String($??""),j.didProcess=!1}}}function lG(_){if(NY||!_?.AdaptiveCard)return;_.AdaptiveCard.onProcessMarkdown=cG(),NY=!0}async function nG(){if(qY)return;if(c8)return c8;return c8=new Promise((_,$)=>{let j=document.createElement("script");j.src="/static/js/vendor/adaptivecards.min.js",j.onload=()=>{qY=!0,_()},j.onerror=()=>$(Error("Failed to load adaptivecards SDK")),document.head.appendChild(j)}),c8}function dG(){return globalThis.AdaptiveCards}function iG(_){if(!_||typeof _!=="object")return!1;let $=_;return $.type==="adaptive_card"&&typeof $.card_id==="string"&&typeof $.schema_version==="string"&&typeof $.payload==="object"&&$.payload!==null}function rG(_){return mG.has(_)}function $3(_){if(!Array.isArray(_))return[];return _.filter(iG)}function oG(_){let $=(typeof _?.getJsonTypeName==="function"?_.getJsonTypeName():"")||_?.constructor?.name||"Unknown",j=(typeof _?.title==="string"?_.title:"")||"",Z=(typeof _?.url==="string"?_.url:"")||void 0,Y=_?.data??void 0;return{type:$,title:j,data:Y,url:Z,raw:_}}function _3(_){if(_==null)return"";if(typeof _==="string")return _.trim();if(typeof _==="number")return String(_);if(typeof _==="boolean")return _?"yes":"no";if(Array.isArray(_))return _.map(($)=>_3($)).filter(Boolean).join(", ");if(typeof _==="object")return Object.entries(_).map(([j,Z])=>`${j}: ${_3(Z)}`).filter((j)=>!j.endsWith(": ")).join(", ");return String(_).trim()}function sG(_,$,j){if($==null)return $;if(_==="Input.Toggle"){if(typeof $==="boolean"){if($)return j?.valueOn??"true";return j?.valueOff??"false"}return typeof $==="string"?$:String($)}if(_==="Input.ChoiceSet"){if(Array.isArray($))return $.join(",");return typeof $==="string"?$:String($)}if(Array.isArray($))return $.join(", ");if(typeof $==="object")return _3($);return typeof $==="string"?$:String($)}function aG(_,$){if(!_||typeof _!=="object")return _;if(!$||typeof $!=="object"||Array.isArray($))return _;let j=$,Z=(Y)=>{if(Array.isArray(Y))return Y.map((N)=>Z(N));if(!Y||typeof Y!=="object")return Y;let q={...Y};if(typeof q.id==="string"&&q.id in j&&String(q.type||"").startsWith("Input."))q.value=sG(q.type,j[q.id],q);for(let[N,K]of Object.entries(q))if(Array.isArray(K)||K&&typeof K==="object")q[N]=Z(K);return q};return Z(_)}function tG(_){_.classList.add("adaptive-card-readonly");for(let $ of Array.from(_.querySelectorAll("input, textarea, select, button"))){let j=$;try{j.setAttribute("aria-disabled","true")}catch{}try{j.setAttribute("tabindex","-1")}catch{}if("disabled"in j)try{j.disabled=!0}catch{}if("readOnly"in j)try{j.readOnly=!0}catch{}}}function eG(_){if(typeof _!=="string"||!_.trim())return"";let $=new Date(_);if(Number.isNaN($.getTime()))return"";return new Intl.DateTimeFormat(void 0,{month:"short",day:"numeric",hour:"numeric",minute:"2-digit"}).format($)}function _X(_){if(_.state==="active")return null;let $=_.state==="completed"?"Submitted":_.state==="cancelled"?"Cancelled":"Failed",j=_.last_submission&&typeof _.last_submission==="object"?_.last_submission:null,Z=j&&typeof j.title==="string"?j.title.trim():"",Y=eG(_.completed_at||j?.submitted_at),Q=[Z||null,Y||null].filter(Boolean).join(" · ")||null;return{label:$,detail:Q}}async function KY(_,$,j){if(!rG($.schema_version))return console.warn(`[adaptive-card] Unsupported schema version ${$.schema_version} for card ${$.card_id}`),!1;try{await nG()}catch(Z){return console.error("[adaptive-card] Failed to load SDK:",Z),!1}try{let Z=dG();lG(Z);let Y=new Z.AdaptiveCard,Q=t$();Y.hostConfig=new Z.HostConfig(QY());let q=$.last_submission&&typeof $.last_submission==="object"?$.last_submission.data:void 0,N=$.state==="active"?$.payload:aG($.payload,q);Y.parse(N),Y.onExecuteAction=(X)=>{let V=oG(X);if(j?.onAction)e$(_),_.classList.add("adaptive-card-busy"),Promise.resolve(j.onAction(V)).catch((U)=>{console.error("[adaptive-card] Action failed:",U);let L=U instanceof Error?U.message:String(U||"Action failed.");pG(_,L||"Action failed.","error")}).finally(()=>{_.classList.remove("adaptive-card-busy")});else console.log("[adaptive-card] Action executed (not wired yet):",V)};let K=Y.render();if(!K)return console.warn(`[adaptive-card] Card ${$.card_id} rendered to null`),!1;_.classList.add("adaptive-card-container"),_.style.setProperty("--adaptive-card-button-text-color",Q.buttonTextColor);let G=_X($);if(G){_.classList.add("adaptive-card-finished");let X=document.createElement("div");X.className=`adaptive-card-status adaptive-card-status-${$.state}`;let V=document.createElement("span");if(V.className="adaptive-card-status-label",V.textContent=G.label,X.appendChild(V),G.detail){let U=document.createElement("span");U.className="adaptive-card-status-detail",U.textContent=G.detail,X.appendChild(U)}_.appendChild(X)}if(e$(_),_.appendChild(K),G)tG(K);return!0}catch(Z){return console.error(`[adaptive-card] Failed to render card ${$.card_id}:`,Z),!1}}function l5(_){if(_==null)return"";if(typeof _==="string")return _.trim();if(typeof _==="number")return String(_);if(typeof _==="boolean")return _?"yes":"no";if(Array.isArray(_))return _.map(($)=>l5($)).filter(Boolean).join(", ");if(typeof _==="object")return Object.entries(_).filter(([$])=>!$.startsWith("__")).map(([$,j])=>`${$}: ${l5(j)}`).filter(($)=>!$.endsWith(": ")).join(", ");return String(_).trim()}function GY(_){if(typeof _!=="object"||_==null||Array.isArray(_))return[];return Object.entries(_).filter(([$])=>!$.startsWith("__")).map(([$,j])=>({key:$,value:l5(j)})).filter(($)=>$.value)}function $X(_){if(!_||typeof _!=="object")return!1;let $=_;return $.type==="adaptive_card_submission"&&typeof $.card_id==="string"&&typeof $.source_post_id==="number"&&typeof $.submitted_at==="string"}function j3(_){if(!Array.isArray(_))return[];return _.filter($X)}function XY(_){let $=String(_.title||_.card_id||"card").trim()||"card",j=_.data;if(j==null)return`Card submission: ${$}`;if(typeof j==="string"||typeof j==="number"||typeof j==="boolean"){let Z=l5(j);return Z?`Card submission: ${$} — ${Z}`:`Card submission: ${$}`}if(typeof j==="object"){let Y=GY(j).map(({key:Q,value:q})=>`${Q}: ${q}`);return Y.length>0?`Card submission: ${$} — ${Y.join(", ")}`:`Card submission: ${$}`}return`Card submission: ${$}`}function VY(_){let $=String(_.title||_.card_id||"Card submission").trim()||"Card submission",j=GY(_.data),Z=j.length>0?j.slice(0,2).map(({key:Q,value:q})=>`${Q}: ${q}`).join(", "):l5(_.data)||null,Y=j.length;return{title:$,summary:Z,fields:j,fieldCount:Y,submittedAt:_.submitted_at}}function B5({children:_,className:$=""}){let j=y(null);return g(()=>{if(typeof document>"u")return;let Z=document.createElement("div");if($)Z.className=$;return document.body.appendChild(Z),j.current=Z,()=>{try{z4(null,Z)}finally{if(Z.remove(),j.current===Z)j.current=null}}},[$]),D5(()=>{let Z=j.current;if(!Z)return;return z4(_,Z),()=>{z4(null,Z)}},[_]),null}function jX(_){let $=_?.metadata?.size;return[{label:"Type",value:_?.content_type||"application/octet-stream"},{label:"Size",value:typeof $==="number"?A_($):null},{label:"Added",value:_?.created_at?g4(_.created_at):null}].filter((Z)=>Z.value)}function ZX(_,$,j){let Z=encodeURIComponent($||`attachment-${_}`),Y=encodeURIComponent(String(_));if(j==="pdf")return`/pdf-viewer/?media=${Y}&name=${Z}#media=${Y}&name=${Z}`;if(j==="office"){let Q=D_(_);return`/office-viewer/?url=${encodeURIComponent(Q)}&name=${Z}`}if(j==="drawio")return`/drawio/edit.html?media=${Y}&name=${Z}&readonly=1#media=${Y}&name=${Z}&readonly=1`;return null}function UY({mediaId:_,info:$,onClose:j}){let Z=$?.filename||`attachment-${_}`,Y=m0(()=>c5($?.content_type,Z),[$?.content_type,Z]),Q=ZY(Y),q=m0(()=>jY($?.content_type),[$?.content_type]),[N,K]=m(Y==="text"),[G,X]=m(""),[V,U]=m(null),L=y(null),F=m0(()=>jX($),[$]),J=m0(()=>ZX(_,Z,Y),[_,Z,Y]),H=m0(()=>{if(!q||!G)return"";return G_(G)},[q,G]);return g(()=>{let W=(D)=>{if(D.key==="Escape")j()};return document.addEventListener("keydown",W),()=>document.removeEventListener("keydown",W)},[j]),g(()=>{if(!L.current||!H)return;Y4(L.current);return},[H]),g(()=>{let W=!1;async function D(){if(Y!=="text"){K(!1),U(null);return}K(!0),U(null);try{let E=await k6(_);if(!W)X(E)}catch{if(!W)U("Failed to load text preview.")}finally{if(!W)K(!1)}}return D(),()=>{W=!0}},[_,Y]),z`
        <${B5} className="attachment-preview-portal-root">
            <div class="image-modal attachment-preview-modal" onClick=${j}>
                <div class="attachment-preview-shell" onClick=${(W)=>{W.stopPropagation()}}>
                    <div class="attachment-preview-header">
                        <div class="attachment-preview-heading">
                            <div class="attachment-preview-title">${Z}</div>
                            <div class="attachment-preview-subtitle">${Q}</div>
                        </div>
                        <div class="attachment-preview-header-actions">
                            ${J&&z`
                                <a
                                    href=${J}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    class="attachment-preview-download"
                                    onClick=${(W)=>W.stopPropagation()}
                                >
                                    Open in Tab
                                </a>
                            `}
                            <a
                                href=${D_(_)}
                                download=${Z}
                                class="attachment-preview-download"
                                onClick=${(W)=>W.stopPropagation()}
                            >
                                Download
                            </a>
                            <button class="attachment-preview-close" type="button" onClick=${j}>Close</button>
                        </div>
                    </div>
                    <div class="attachment-preview-body">
                        ${N&&z`<div class="attachment-preview-state">Loading preview…</div>`}
                        ${!N&&V&&z`<div class="attachment-preview-state">${V}</div>`}
                        ${!N&&!V&&Y==="image"&&z`
                            <img class="attachment-preview-image" src=${D_(_)} alt=${Z} />
                        `}
                        ${!N&&!V&&(Y==="pdf"||Y==="office"||Y==="drawio")&&J&&z`
                            <iframe class="attachment-preview-frame" src=${J} title=${Z}></iframe>
                        `}
                        ${!N&&!V&&Y==="drawio"&&z`
                            <div class="attachment-preview-readonly-note">Draw.io preview is read-only. Editing tools are disabled in this preview.</div>
                        `}
                        ${!N&&!V&&Y==="text"&&q&&z`
                            <div
                                ref=${L}
                                class="attachment-preview-markdown post-content"
                                dangerouslySetInnerHTML=${{__html:H}}
                            />
                        `}
                        ${!N&&!V&&Y==="text"&&!q&&z`
                            <pre class="attachment-preview-text">${G}</pre>
                        `}
                        ${!N&&!V&&Y==="unsupported"&&z`
                            <div class="attachment-preview-state">
                                Preview is not available for this file type yet. You can still download it directly.
                            </div>
                        `}
                    </div>
                    <div class="attachment-preview-meta">
                        ${F.map((W)=>z`
                            <div class="attachment-preview-meta-item" key=${W.label}>
                                <span class="attachment-preview-meta-label">${W.label}</span>
                                <span class="attachment-preview-meta-value">${W.value}</span>
                            </div>
                        `)}
                    </div>
                </div>
            </div>
        </${B5}>
    `}function LY({src:_,onClose:$}){return g(()=>{let j=(Z)=>{if(Z.key==="Escape")$()};return document.addEventListener("keydown",j),()=>document.removeEventListener("keydown",j)},[$]),z`
        <${B5} className="image-modal-portal-root">
            <div class="image-modal" onClick=${$}>
                <img src=${_} alt="Full size" />
            </div>
        </${B5}>
    `}function YX({mediaId:_,onPreview:$}){let[j,Z]=m(null);if(g(()=>{_5(_).then(Z).catch(()=>{})},[_]),!j)return null;let Y=j.filename||"file",Q=j.metadata?.size,q=Q?A_(Q):"",K=c5(j.content_type,j.filename)==="unsupported"?"Details":"Preview";return z`
        <div class="file-attachment" onClick=${(G)=>G.stopPropagation()}>
            <a href=${D_(_)} download=${Y} class="file-attachment-main">
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
                        ${q&&z`<span class="file-size">${q}</span>`}
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
                ${K}
            </button>
        </div>
    `}function QX({attachment:_,onPreview:$}){let j=Number(_?.id),[Z,Y]=m(null);g(()=>{if(!Number.isFinite(j))return;_5(j).then(Y).catch(()=>{});return},[j]);let Q=Z?.filename||_.label||`attachment-${_.id}`,q=Number.isFinite(j)?D_(j):null,K=c5(Z?.content_type,Z?.filename||_?.label)==="unsupported"?"Details":"Preview";return z`
        <span class="attachment-pill" title=${Q}>
            ${q?z`
                    <a href=${q} download=${Q} class="attachment-pill-main" onClick=${(G)=>G.stopPropagation()}>
                        <${w_}
                            prefix="post"
                            label=${_.label}
                            title=${Q}
                        />
                    </a>
                `:z`
                    <${w_}
                        prefix="post"
                        label=${_.label}
                        title=${Q}
                    />
                `}
            ${Number.isFinite(j)&&Z&&z`
                <button
                    class="attachment-pill-preview"
                    type="button"
                    title=${K}
                    onClick=${(G)=>{G.preventDefault(),G.stopPropagation(),$?.({mediaId:j,info:Z})}}
                >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8S1 12 1 12z"/>
                        <circle cx="12" cy="12" r="3"/>
                    </svg>
                </button>
            `}
        </span>
    `}function l8({annotations:_}){if(!_)return null;let{audience:$,priority:j,lastModified:Z}=_,Y=Z?g4(Z):null;return z`
        <div class="content-annotations">
            ${$&&$.length>0&&z`
                <span class="content-annotation">Audience: ${$.join(", ")}</span>
            `}
            ${typeof j==="number"&&z`
                <span class="content-annotation">Priority: ${j}</span>
            `}
            ${Y&&z`
                <span class="content-annotation">Updated: ${Y}</span>
            `}
        </div>
    `}function qX({block:_}){let $=_.title||_.name||_.uri,j=_.description,Z=_.size?A_(_.size):"",Y=_.mime_type||"",Q=GX(Y),q=b4(_.uri);return z`
        <a
            href=${q||"#"}
            class="resource-link"
            target=${q?"_blank":void 0}
            rel=${q?"noopener noreferrer":void 0}
            onClick=${(N)=>N.stopPropagation()}>
            <div class="resource-link-main">
                <div class="resource-link-header">
                    <span class="resource-link-icon-inline">${Q}</span>
                    <div class="resource-link-title">${$}</div>
                </div>
                ${j&&z`<div class="resource-link-description">${j}</div>`}
                <div class="resource-link-meta">
                    ${Y&&z`<span>${Y}</span>`}
                    ${Z&&z`<span>${Z}</span>`}
                </div>
            </div>
            <div class="resource-link-icon">↗</div>
        </a>
    `}function NX({block:_}){let[$,j]=m(!1),Z=_.uri||"Embedded resource",Y=_.text||"",Q=Boolean(_.data),q=_.mime_type||"";return z`
        <div class="resource-embed">
            <button class="resource-embed-toggle" onClick=${(N)=>{N.preventDefault(),N.stopPropagation(),j(!$)}}>
                ${$?"▼":"▶"} ${Z}
            </button>
            ${$&&z`
                ${Y&&z`<pre class="resource-embed-content">${Y}</pre>`}
                ${Q&&z`
                    <div class="resource-embed-blob">
                        <span class="resource-embed-blob-label">Embedded blob</span>
                        ${q&&z`<span class="resource-embed-blob-meta">${q}</span>`}
                        <button class="resource-embed-blob-btn" onClick=${(N)=>{N.preventDefault(),N.stopPropagation();let K=new Blob([Uint8Array.from(atob(_.data),(V)=>V.charCodeAt(0))],{type:q||"application/octet-stream"}),G=URL.createObjectURL(K),X=document.createElement("a");X.href=G,X.download=Z.split("/").pop()||"resource",X.click(),URL.revokeObjectURL(G)}}>Download</button>
                    </div>
                `}
            `}
        </div>
    `}function KX({block:_,post:$,onOpenWidget:j}){if(!_)return null;let Z=y$(_,$),Y=o9(_),Q=Z?.artifact?.kind||_?.artifact?.kind||_?.kind||null,q=Z?.title||_.title||_.name||"Generated widget",N=Z?.description||_.description||_.subtitle||"",K=_.open_label||"Open widget",G=(X)=>{if(X.preventDefault(),X.stopPropagation(),!Z)return;j?.(Z)};return z`
        <div class="generated-widget-launch" onClick=${(X)=>X.stopPropagation()}>
            <div class="generated-widget-launch-header">
                <div class="generated-widget-launch-eyebrow">Generated widget${Q?` • ${String(Q).toUpperCase()}`:""}</div>
                <div class="generated-widget-launch-title">${q}</div>
            </div>
            ${N&&z`<div class="generated-widget-launch-description">${N}</div>`}
            <div class="generated-widget-launch-actions">
                <button
                    class="generated-widget-launch-btn"
                    type="button"
                    disabled=${!Y}
                    onClick=${G}
                    title=${Y?"Open widget in a floating pane":"Unsupported widget artifact"}
                >
                    ${K}
                </button>
                <span class="generated-widget-launch-note">
                    ${Y?"Opens in a dismissible floating pane.":"This widget artifact is missing or unsupported."}
                </span>
            </div>
        </div>
    `}function GX(_){if(!_)return"\uD83D\uDCCE";if(_.startsWith("image/"))return"\uD83D\uDDBC️";if(_.startsWith("audio/"))return"\uD83C\uDFB5";if(_.startsWith("video/"))return"\uD83C\uDFAC";if(_.includes("pdf"))return"\uD83D\uDCC4";if(_.includes("zip")||_.includes("gzip"))return"\uD83D\uDDDC️";if(_.startsWith("text/"))return"\uD83D\uDCC4";return"\uD83D\uDCCE"}function XX({preview:_}){let $=b4(_.url),j=b4(_.image,{allowDataImage:!0}),Z=j?`background-image: url('${j}')`:"",Y=_.site_name;if(!Y&&$)try{Y=new URL($).hostname}catch{Y=$}return z`
        <a
            href=${$||"#"}
            class="link-preview ${j?"has-image":""}"
            target=${$?"_blank":void 0}
            rel=${$?"noopener noreferrer":void 0}
            onClick=${(Q)=>Q.stopPropagation()}
            style=${Z}>
            <div class="link-preview-overlay">
                <div class="link-preview-site">${Y||""}</div>
                <div class="link-preview-title">${_.title}</div>
                ${_.description&&z`
                    <div class="link-preview-description">${_.description}</div>
                `}
            </div>
        </a>
    `}function VX(_,$){return typeof _==="string"?_:""}var UX=1800,LX=`
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <rect x="9" y="9" width="10" height="10" rx="2"></rect>
        <path d="M7 15H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2v1"></path>
    </svg>`,WX=`
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <path d="M20 6L9 17l-5-5"></path>
    </svg>`,BX=`
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <circle cx="12" cy="12" r="9"></circle>
        <path d="M9 9l6 6M15 9l-6 6"></path>
    </svg>`;async function zX(_){let $=typeof _==="string"?_:"";if(!$)return!1;if(navigator.clipboard?.writeText)try{return await navigator.clipboard.writeText($),!0}catch{}try{let j=document.createElement("textarea");j.value=$,j.setAttribute("readonly",""),j.style.position="fixed",j.style.opacity="0",j.style.pointerEvents="none",document.body.appendChild(j),j.select(),j.setSelectionRange(0,j.value.length);let Z=document.execCommand("copy");return document.body.removeChild(j),Z}catch{return!1}}function FX(_){if(!_)return()=>{};let $=Array.from(_.querySelectorAll("pre")).filter((Q)=>Q.querySelector("code"));if($.length===0)return()=>{};let j=new Map,Z=[],Y=(Q,q)=>{let N=q||"idle";if(Q.dataset.copyState=N,N==="success")Q.innerHTML=WX,Q.setAttribute("aria-label","Copied"),Q.setAttribute("title","Copied"),Q.classList.add("is-success"),Q.classList.remove("is-error");else if(N==="error")Q.innerHTML=BX,Q.setAttribute("aria-label","Copy failed"),Q.setAttribute("title","Copy failed"),Q.classList.add("is-error"),Q.classList.remove("is-success");else Q.innerHTML=LX,Q.setAttribute("aria-label","Copy code"),Q.setAttribute("title","Copy code"),Q.classList.remove("is-success","is-error")};return $.forEach((Q)=>{let q=document.createElement("div");q.className="post-code-block",Q.parentNode?.insertBefore(q,Q),q.appendChild(Q);let N=document.createElement("button");N.type="button",N.className="post-code-copy-btn",Y(N,"idle"),q.appendChild(N);let K=async(G)=>{G.preventDefault(),G.stopPropagation();let V=Q.querySelector("code")?.textContent||"",U=await zX(V);Y(N,U?"success":"error");let L=j.get(N);if(L)clearTimeout(L);let F=setTimeout(()=>{Y(N,"idle"),j.delete(N)},UX);j.set(N,F)};N.addEventListener("click",K),Z.push(()=>{N.removeEventListener("click",K);let G=j.get(N);if(G)clearTimeout(G);if(q.parentNode)q.parentNode.insertBefore(Q,q),q.remove()})}),()=>{Z.forEach((Q)=>Q())}}function HX(_){if(!_)return{content:_,fileRefs:[]};let j=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),Z=-1;for(let G=0;G<j.length;G+=1)if(j[G].trim()==="Files:"&&j[G+1]&&/^\s*-\s+/.test(j[G+1])){Z=G;break}if(Z===-1)return{content:_,fileRefs:[]};let Y=[],Q=Z+1;for(;Q<j.length;Q+=1){let G=j[Q];if(/^\s*-\s+/.test(G))Y.push(G.replace(/^\s*-\s+/,"").trim());else if(!G.trim())break;else break}if(Y.length===0)return{content:_,fileRefs:[]};let q=j.slice(0,Z),N=j.slice(Q),K=[...q,...N].join(`
`);return K=K.replace(/\n{3,}/g,`

`).trim(),{content:K,fileRefs:Y}}function JX(_){if(!_)return{content:_,messageRefs:[]};let j=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),Z=-1;for(let G=0;G<j.length;G+=1)if(j[G].trim()==="Referenced messages:"&&j[G+1]&&/^\s*-\s+/.test(j[G+1])){Z=G;break}if(Z===-1)return{content:_,messageRefs:[]};let Y=[],Q=Z+1;for(;Q<j.length;Q+=1){let G=j[Q];if(/^\s*-\s+/.test(G)){let V=G.replace(/^\s*-\s+/,"").trim().match(/^message:(\S+)$/i);if(V)Y.push(V[1])}else if(!G.trim())break;else break}if(Y.length===0)return{content:_,messageRefs:[]};let q=j.slice(0,Z),N=j.slice(Q),K=[...q,...N].join(`
`);return K=K.replace(/\n{3,}/g,`

`).trim(),{content:K,messageRefs:Y}}function OX(_){if(!_)return{content:_,attachments:[]};let j=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),Z=-1;for(let G=0;G<j.length;G+=1){let X=j[G].trim();if((X==="Images:"||X==="Attachments:")&&j[G+1]&&/^\s*-\s+/.test(j[G+1])){Z=G;break}}if(Z===-1)return{content:_,attachments:[]};let Y=[],Q=Z+1;for(;Q<j.length;Q+=1){let G=j[Q];if(/^\s*-\s+/.test(G)){let X=G.replace(/^\s*-\s+/,"").trim(),V=X.match(/^attachment:([^\s)]+)\s*(?:\((.+)\))?$/i)||X.match(/^attachment:([^\s]+)\s+(.+)$/i);if(V){let U=V[1],L=(V[2]||"").trim()||U;Y.push({id:U,label:L,raw:X})}else Y.push({id:null,label:X,raw:X})}else if(!G.trim())break;else break}if(Y.length===0)return{content:_,attachments:[]};let q=j.slice(0,Z),N=j.slice(Q),K=[...q,...N].join(`
`);return K=K.replace(/\n{3,}/g,`

`).trim(),{content:K,attachments:Y}}function DX(_){return _.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function AX(_,$){if(!_||!$)return _;let j=String($).trim().split(/\s+/).filter(Boolean);if(j.length===0)return _;let Z=j.map(DX).sort((X,V)=>V.length-X.length),Y=new RegExp(`(${Z.join("|")})`,"gi"),Q=new RegExp(`^(${Z.join("|")})$`,"i"),q=new DOMParser().parseFromString(_,"text/html"),N=q.createTreeWalker(q.body,NodeFilter.SHOW_TEXT),K=[],G;while(G=N.nextNode())K.push(G);for(let X of K){let V=X.nodeValue;if(!V||!Y.test(V)){Y.lastIndex=0;continue}Y.lastIndex=0;let U=X.parentElement;if(U&&U.closest("code, pre, script, style"))continue;let L=V.split(Y).filter((J)=>J!=="");if(L.length===0)continue;let F=q.createDocumentFragment();for(let J of L)if(Q.test(J)){let H=q.createElement("mark");H.className="search-highlight-term",H.textContent=J,F.appendChild(H)}else F.appendChild(q.createTextNode(J));X.parentNode.replaceChild(F,X)}return q.body.innerHTML}function WY({post:_,onClick:$,onHashtagClick:j,onMessageRef:Z,onScrollToMessage:Y,agentName:Q,agentAvatarUrl:q,userName:N,userAvatarUrl:K,userAvatarBackground:G,onDelete:X,isThreadReply:V,isThreadPrev:U,isThreadNext:L,isRemoving:F,highlightQuery:J,onFileRef:H,onOpenWidget:W}){let[D,E]=m(null),C=y(null),P=_.data,v=P.type==="agent_response",p=N||"You",M=v?Q||aZ:p,k=v?s$(Q,q,!0):s$(p,K),B=typeof G==="string"?G.trim().toLowerCase():"",I=!v&&k.image&&(B==="clear"||B==="transparent"),w=v&&Boolean(k.image),c=`background-color: ${I||w?"transparent":k.color}`,b=P.content_meta,n=Boolean(b?.truncated),d=Boolean(b?.preview),r=n&&!d,t=n?{originalLength:Number.isFinite(b?.original_length)?b.original_length:P.content?P.content.length:0,maxLength:Number.isFinite(b?.max_length)?b.max_length:0}:null,a=P.content_blocks||[],_0=P.media_ids||[],N0=VX(P.content,P.link_previews),{content:G0,fileRefs:k0}=HX(N0),{content:J0,messageRefs:X0}=JX(G0),{content:x0,attachments:B0}=OX(J0);N0=x0;let D0=$3(a),S0=j3(a),z0=D0.length===1&&typeof D0[0]?.fallback_text==="string"?D0[0].fallback_text.trim():"",M0=S0.length===1?XY(S0[0]).trim():"",Z0=Boolean(z0)&&N0?.trim()===z0||Boolean(M0)&&N0?.trim()===M0,A0=Boolean(N0)&&!r&&!Z0,v0=typeof J==="string"?J.trim():"",h0=m0(()=>{if(!N0||Z0)return"";let S=G_(N0,j);return v0?AX(S,v0):S},[N0,Z0,v0]),d0=(S,e)=>{S.stopPropagation(),E(D_(e))},[c0,w0]=m(null),b0=(S)=>{w0(S)},s0=(S)=>{S.stopPropagation(),X?.(_)},r0=(S,e)=>{let F0=new Set;if(!S||e.length===0)return{content:S,usedIds:F0};return{content:S.replace(/attachment:([^\s)"']+)/g,(o0,Z1,q1,u1)=>{let n1=Z1.replace(/^\/+/,""),d1=e.find((b1)=>b1.name&&b1.name.toLowerCase()===n1.toLowerCase()&&!F0.has(b1.id))||e.find((b1)=>!F0.has(b1.id));if(!d1)return o0;if(F0.add(d1.id),u1.slice(Math.max(0,q1-2),q1)==="](")return`/media/${d1.id}`;return d1.name||"attachment"}),usedIds:F0}},U0=[],C0=[],t0=[],s=[],q0=[],h=[],i=[],H0=0;if(a.length>0)a.forEach((S)=>{if(S?.type==="text"&&S.annotations)i.push(S.annotations);if(S?.type==="generated_widget")h.push(S);else if(S?.type==="resource_link")s.push(S);else if(S?.type==="resource")q0.push(S);else if(S?.type==="file"){let e=_0[H0++];if(e)C0.push(e),t0.push({id:e,name:S?.name||S?.filename||S?.title})}else if(S?.type==="image"||!S?.type){let e=_0[H0++];if(e){let F0=typeof S?.mime_type==="string"?S.mime_type:void 0;U0.push({id:e,annotations:S?.annotations,mimeType:F0}),t0.push({id:e,name:S?.name||S?.filename||S?.title})}}});else if(_0.length>0){let S=B0.length>0;_0.forEach((e,F0)=>{let E0=B0[F0]||null;if(t0.push({id:e,name:E0?.label||null}),S)C0.push(e);else U0.push({id:e,annotations:null})})}if(B0.length>0)B0.forEach((S)=>{if(!S?.id)return;let e=t0.find((F0)=>String(F0.id)===String(S.id));if(e&&!e.name)e.name=S.label});let{content:T0,usedIds:y0}=r0(N0,t0);N0=T0;let V0=U0.filter(({id:S})=>!y0.has(S)),P0=C0.filter((S)=>!y0.has(S)),l0=B0.length>0?B0.map((S,e)=>({id:S.id||`attachment-${e+1}`,label:S.label||`attachment-${e+1}`})):t0.map((S,e)=>({id:S.id,label:S.name||`attachment-${e+1}`})),O0=m0(()=>$3(a),[a]),g0=m0(()=>j3(a),[a]),I0=m0(()=>{return O0.map((S)=>`${S.card_id}:${S.state}`).join("|")},[O0]);g(()=>{if(!C.current)return;return Y4(C.current),FX(C.current)},[h0]);let Y0=y(null);return g(()=>{if(!Y0.current||O0.length===0)return;let S=Y0.current;S.innerHTML="";for(let e of O0){let F0=document.createElement("div");S.appendChild(F0),KY(F0,e,{onAction:async(E0)=>{if(E0.type==="Action.OpenUrl"){let o0=b4(E0.url||"");if(!o0)throw Error("Invalid URL");window.open(o0,"_blank","noopener,noreferrer");return}if(E0.type==="Action.Submit"){await J6({post_id:_.id,thread_id:P.thread_id||_.id,chat_jid:_.chat_jid||null,card_id:e.card_id,action:{type:E0.type,title:E0.title||"",data:E0.data}});return}console.warn("[post] unsupported adaptive card action:",E0.type,E0)}}).catch((E0)=>{console.error("[post] adaptive card render error:",E0),F0.textContent=e.fallback_text||"Card failed to render."})}},[I0,_.id]),z`
        <div id=${`post-${_.id}`} class="post ${v?"agent-post":""} ${V?"thread-reply":""} ${U?"thread-prev":""} ${L?"thread-next":""} ${F?"removing":""}" onClick=${$}>
            <div class="post-avatar ${v?"agent-avatar":""} ${k.image?"has-image":""}" style=${c}>
                ${k.image?z`<img src=${k.image} alt=${M} />`:k.letter}
            </div>
            <div class="post-body">
                <button
                    class="post-delete-btn"
                    type="button"
                    title="Delete message"
                    aria-label="Delete message"
                    onClick=${s0}
                >
                    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <path d="M18 6L6 18M6 6l12 12" />
                    </svg>
                </button>
                <div class="post-meta">
                    <span class="post-author">${M}</span>
                    <a class="post-time" href=${`#msg-${_.id}`} onClick=${(S)=>{if(S.preventDefault(),S.stopPropagation(),Z)Z(_.id)}}>${U7(_.timestamp)}</a>
                </div>
                ${r&&t&&z`
                    <div class="post-content truncated">
                        <div class="truncated-title">Message too large to display.</div>
                        <div class="truncated-meta">
                            Original length: ${b5(t.originalLength)} chars
                            ${t.maxLength?z` • Display limit: ${b5(t.maxLength)} chars`:""}
                        </div>
                    </div>
                `}
                ${d&&t&&z`
                    <div class="post-content preview">
                        <div class="truncated-title">Preview truncated.</div>
                        <div class="truncated-meta">
                            Showing first ${b5(t.maxLength)} of ${b5(t.originalLength)} chars. Download full text below.
                        </div>
                    </div>
                `}
                ${(k0.length>0||X0.length>0||l0.length>0)&&z`
                    <div class="post-file-refs">
                        ${X0.map((S)=>{let e=(F0)=>{if(F0.preventDefault(),F0.stopPropagation(),Y)Y(S,_.chat_jid||null);else{let E0=document.getElementById("post-"+S);if(E0)E0.scrollIntoView({behavior:"smooth",block:"center"}),E0.classList.add("post-highlight"),setTimeout(()=>E0.classList.remove("post-highlight"),2000)}};return z`
                                <a href=${`#msg-${S}`} class="post-msg-pill-link" onClick=${e}>
                                    <${w_}
                                        prefix="post"
                                        label=${"msg:"+S}
                                        title=${"Message "+S}
                                        icon="message"
                                        onClick=${e}
                                    />
                                </a>
                            `})}
                        ${k0.map((S)=>{let e=S.split("/").pop()||S;return z`
                                <${w_}
                                    prefix="post"
                                    label=${e}
                                    title=${S}
                                    onClick=${()=>H?.(S)}
                                />
                            `})}
                        ${l0.map((S)=>z`
                            <${QX}
                                key=${S.id}
                                attachment=${S}
                                onPreview=${b0}
                            />
                        `)}
                    </div>
                `}
                ${A0&&z`
                    <div 
                        ref=${C}
                        class="post-content"
                        dangerouslySetInnerHTML=${{__html:h0}}
                        onClick=${(S)=>{if(S.target.classList.contains("hashtag")){S.preventDefault(),S.stopPropagation();let e=S.target.dataset.hashtag;if(e)j?.(e)}else if(S.target.tagName==="IMG")S.preventDefault(),S.stopPropagation(),E(S.target.src)}}
                    />
                `}
                ${O0.length>0&&z`
                    <div ref=${Y0} class="post-adaptive-cards" />
                `}
                ${g0.length>0&&z`
                    <div class="post-adaptive-card-submissions">
                        ${g0.map((S,e)=>{let F0=VY(S),E0=`${S.card_id}-${e}`;return z`
                                <div key=${E0} class="adaptive-card-submission-receipt">
                                    <div class="adaptive-card-submission-header">
                                        <span class="adaptive-card-submission-icon" aria-hidden="true">✓</span>
                                        <div class="adaptive-card-submission-title-wrap">
                                            <span class="adaptive-card-submission-title">Submitted</span>
                                            <span class="adaptive-card-submission-title-action">${F0.title}</span>
                                        </div>
                                    </div>
                                    ${F0.fields.length>0&&z`
                                        <div class="adaptive-card-submission-fields">
                                            ${F0.fields.map((o0)=>z`
                                                <span class="adaptive-card-submission-field" title=${`${o0.key}: ${o0.value}`}>
                                                    <span class="adaptive-card-submission-field-key">${o0.key}</span>
                                                    <span class="adaptive-card-submission-field-sep">:</span>
                                                    <span class="adaptive-card-submission-field-value">${o0.value}</span>
                                                </span>
                                            `)}
                                        </div>
                                    `}
                                    <div class="adaptive-card-submission-meta">
                                        Submitted ${g4(F0.submittedAt)}
                                    </div>
                                </div>
                            `})}
                    </div>
                `}
                ${h.length>0&&z`
                    <div class="generated-widget-launches">
                        ${h.map((S,e)=>z`
                            <${KX}
                                key=${S.widget_id||S.id||`${_.id}-widget-${e}`}
                                block=${S}
                                post=${_}
                                onOpenWidget=${W}
                            />
                        `)}
                    </div>
                `}
                ${i.length>0&&z`
                    ${i.map((S,e)=>z`
                        <${l8} key=${e} annotations=${S} />
                    `)}
                `}
                ${V0.length>0&&z`
                    <div class="media-preview">
                        ${V0.map(({id:S,mimeType:e})=>{let E0=typeof e==="string"&&e.toLowerCase().startsWith("image/svg")?D_(S):E6(S);return z`
                                <img 
                                    key=${S} 
                                    src=${E0} 
                                    alt="Media" 
                                    loading="lazy"
                                    onClick=${(o0)=>d0(o0,S)}
                                />
                            `})}
                    </div>
                `}
                ${V0.length>0&&z`
                    ${V0.map(({annotations:S},e)=>z`
                        ${S&&z`<${l8} key=${e} annotations=${S} />`}
                    `)}
                `}
                ${P0.length>0&&z`
                    <div class="file-attachments">
                        ${P0.map((S)=>z`
                            <${YX} key=${S} mediaId=${S} onPreview=${b0} />
                        `)}
                    </div>
                `}
                ${s.length>0&&z`
                    <div class="resource-links">
                        ${s.map((S,e)=>z`
                            <div key=${e}>
                                <${qX} block=${S} />
                                <${l8} annotations=${S.annotations} />
                            </div>
                        `)}
                    </div>
                `}
                ${q0.length>0&&z`
                    <div class="resource-embeds">
                        ${q0.map((S,e)=>z`
                            <div key=${e}>
                                <${NX} block=${S} />
                                <${l8} annotations=${S.annotations} />
                            </div>
                        `)}
                    </div>
                `}
                ${P.link_previews?.length>0&&z`
                    <div class="link-previews">
                        ${P.link_previews.map((S,e)=>z`
                            <${XX} key=${e} preview=${S} />
                        `)}
                    </div>
                `}
            </div>
        </div>
        ${D&&z`<${LY} src=${D} onClose=${()=>E(null)} />`}
        ${c0&&z`
            <${UY}
                mediaId=${c0.mediaId}
                info=${c0.info}
                onClose=${()=>w0(null)}
            />
        `}
    `}function BY({posts:_,hasMore:$,onLoadMore:j,onPostClick:Z,onHashtagClick:Y,onMessageRef:Q,onScrollToMessage:q,onFileRef:N,onOpenWidget:K,emptyMessage:G,timelineRef:X,agents:V,user:U,onDeletePost:L,reverse:F=!0,removingPostIds:J,searchQuery:H}){let[W,D]=m(!1),E=y(null),C=typeof IntersectionObserver<"u",P=x(async()=>{if(!j||!$||W)return;D(!0);try{await j({preserveScroll:!0,preserveMode:"top"})}finally{D(!1)}},[$,W,j]),v=x((b)=>{let{scrollTop:n,scrollHeight:d,clientHeight:r}=b.target,t=F?d-r-n:n,a=Math.max(300,r);if(t<a)P()},[F,P]);g(()=>{if(!C)return;let b=E.current,n=X?.current;if(!b||!n)return;let d=300,r=new IntersectionObserver((t)=>{for(let a of t){if(!a.isIntersecting)continue;P()}},{root:n,rootMargin:`${d}px 0px ${d}px 0px`,threshold:0});return r.observe(b),()=>r.disconnect()},[C,$,j,X,P]);let p=y(P);if(p.current=P,g(()=>{if(C)return;if(!X?.current)return;let{scrollTop:b,scrollHeight:n,clientHeight:d}=X.current,r=F?n-d-b:b,t=Math.max(300,d);if(r<t)p.current?.()},[C,_,$,F,X]),g(()=>{if(!X?.current)return;if(!$||W)return;let{scrollTop:b,scrollHeight:n,clientHeight:d}=X.current,r=F?n-d-b:b,t=Math.max(300,d);if(n<=d+1||r<t)p.current?.()},[_,$,W,F,X]),!_)return z`<div class="loading"><div class="spinner"></div></div>`;if(_.length===0)return z`
            <div class="timeline" ref=${X}>
                <div class="timeline-content">
                    <div style="padding: var(--spacing-xl); text-align: center; color: var(--text-secondary)">
                        ${G||"No messages yet. Start a conversation!"}
                    </div>
                </div>
            </div>
        `;let M=_.slice().sort((b,n)=>b.id-n.id),k=(b)=>{let n=b?.data?.thread_id;if(n===null||n===void 0||n==="")return null;let d=Number(n);return Number.isFinite(d)?d:null},B=new Map;for(let b=0;b<M.length;b+=1){let n=M[b],d=Number(n?.id),r=k(n);if(r!==null){let t=B.get(r)||{anchorIndex:-1,replyIndexes:[]};t.replyIndexes.push(b),B.set(r,t)}else if(Number.isFinite(d)){let t=B.get(d)||{anchorIndex:-1,replyIndexes:[]};t.anchorIndex=b,B.set(d,t)}}let I=new Map;for(let[b,n]of B.entries()){let d=new Set;if(n.anchorIndex>=0)d.add(n.anchorIndex);for(let r of n.replyIndexes)d.add(r);I.set(b,Array.from(d).sort((r,t)=>r-t))}let w=M.map((b,n)=>{let d=k(b);if(d===null)return{hasThreadPrev:!1,hasThreadNext:!1};let r=I.get(d);if(!r||r.length===0)return{hasThreadPrev:!1,hasThreadNext:!1};let t=r.indexOf(n);if(t<0)return{hasThreadPrev:!1,hasThreadNext:!1};return{hasThreadPrev:t>0,hasThreadNext:t<r.length-1}}),c=z`<div class="timeline-sentinel" ref=${E}></div>`;return z`
        <div class="timeline ${F?"reverse":"normal"}" ref=${X} onScroll=${v}>
            <div class="timeline-content">
                ${F?c:null}
                ${M.map((b,n)=>{let d=Boolean(b.data?.thread_id&&b.data.thread_id!==b.id),r=J?.has?.(b.id),t=w[n]||{};return z`
                    <${WY}
                        key=${b.id}
                        post=${b}
                        isThreadReply=${d}
                        isThreadPrev=${t.hasThreadPrev}
                        isThreadNext=${t.hasThreadNext}
                        isRemoving=${r}
                        highlightQuery=${H}
                        agentName=${tZ(b.data?.agent_id,V||{})}
                        agentAvatarUrl=${eZ(b.data?.agent_id,V||{})}
                        userName=${U?.name||U?.user_name}
                        userAvatarUrl=${U?.avatar_url||U?.avatarUrl||U?.avatar}
                        userAvatarBackground=${U?.avatar_background||U?.avatarBackground}
                        onClick=${()=>Z?.(b)}
                        onHashtagClick=${Y}
                        onMessageRef=${Q}
                        onScrollToMessage=${q}
                        onFileRef=${N}
                        onOpenWidget=${K}
                        onDelete=${L}
                    />
                `})}
                ${F?null:c}
            </div>
        </div>
    `}var n8="workspaceExplorerScale",EX=["compact","default","comfortable"],kX=new Set(EX),IX={compact:{indentPx:14},default:{indentPx:16},comfortable:{indentPx:18}};function zY(_,$="default"){if(typeof _!=="string")return $;let j=_.trim().toLowerCase();return kX.has(j)?j:$}function Z3(){if(typeof window>"u")return{width:0,isTouch:!1};let _=Number(window.innerWidth)||0,$=Boolean(window.matchMedia?.("(pointer: coarse)")?.matches),j=Boolean(window.matchMedia?.("(hover: none)")?.matches),Z=Number(globalThis.navigator?.maxTouchPoints||0)>0;return{width:_,isTouch:$||Z&&j}}function MX(_={}){let $=Math.max(0,Number(_.width)||0);if(Boolean(_.isTouch))return"comfortable";if($>0&&$<1180)return"comfortable";return"default"}function TX(_,$={}){if(Boolean($.isTouch)&&_==="compact")return"default";return _}function Y3(_={}){let $=MX(_),j=_.stored?zY(_.stored,$):$;return TX(j,_)}function FY(_){return IX[zY(_)]}function xX(_){if(!_||_.kind!=="text")return!1;let $=Number(_.size);return!Number.isFinite($)||$<=262144}function Q3(_,$){let j=String(_||"").trim();if(!j||j.endsWith("/"))return!1;if(typeof $!=="function")return!1;let Z=$({path:j,mode:"edit"});if(!Z||typeof Z!=="object")return!1;return Z.id!=="editor"}function HY(_,$,j={}){let Z=j.resolvePane;if(Q3(_,Z))return!0;return xX($)}var yX=60000,AY=(_)=>{if(!_||!_.name)return!1;if(_.path===".")return!1;return _.name.startsWith(".")};function PX(_){let $=String(_||"").trim();if(!$||$.endsWith("/"))return!1;return Q3($,(j)=>i0.resolve(j))}function EY(_,$,j,Z=0,Y=[]){if(!j&&AY(_))return Y;if(!_)return Y;if(Y.push({node:_,depth:Z}),_.type==="dir"&&_.children&&$.has(_.path))for(let Q of _.children)EY(Q,$,j,Z+1,Y);return Y}function JY(_,$,j){if(!_)return"";let Z=[],Y=(Q)=>{if(!j&&AY(Q))return;if(Z.push(Q.type==="dir"?`d:${Q.path}`:`f:${Q.path}`),Q.children&&$?.has(Q.path))for(let q of Q.children)Y(q)};return Y(_),Z.join("|")}function G3(_,$){if(!$)return null;if(!_)return $;if(_.path!==$.path||_.type!==$.type)return $;let j=Array.isArray(_.children)?_.children:null,Z=Array.isArray($.children)?$.children:null;if(!Z)return _;let Y=j?new Map(j.map((N)=>[N?.path,N])):new Map,Q=!j||j.length!==Z.length,q=Z.map((N)=>{let K=G3(Y.get(N.path),N);if(K!==Y.get(N.path))Q=!0;return K});return Q?{...$,children:q}:_}function N3(_,$,j){if(!_)return _;if(_.path===$)return G3(_,j);if(!Array.isArray(_.children))return _;let Z=!1,Y=_.children.map((Q)=>{let q=N3(Q,$,j);if(q!==Q)Z=!0;return q});return Z?{..._,children:Y}:_}var kY=4,q3=14,CX=8,SX=16;function IY(_){if(!_)return 0;if(_.type==="file"){let Z=Math.max(0,Number(_.size)||0);return _.__bytes=Z,Z}let $=Array.isArray(_.children)?_.children:[],j=0;for(let Z of $)j+=IY(Z);return _.__bytes=j,j}function MY(_,$=0){let j=Math.max(0,Number(_?.__bytes??_?.size??0)),Z={name:_?.name||_?.path||".",path:_?.path||".",size:j,children:[]};if(!_||_.type!=="dir"||$>=kY)return Z;let Y=Array.isArray(_.children)?_.children:[],Q=[];for(let N of Y){let K=Math.max(0,Number(N?.__bytes??N?.size??0));if(K<=0)continue;if(N.type==="dir")Q.push({kind:"dir",node:N,size:K});else Q.push({kind:"file",name:N.name,path:N.path,size:K})}Q.sort((N,K)=>K.size-N.size);let q=Q;if(Q.length>q3){let N=Q.slice(0,q3-1),K=Q.slice(q3-1),G=K.reduce((X,V)=>X+V.size,0);N.push({kind:"other",name:`+${K.length} more`,path:`${Z.path}/[other]`,size:G}),q=N}return Z.children=q.map((N)=>{if(N.kind==="dir")return MY(N.node,$+1);return{name:N.name,path:N.path,size:N.size,children:[]}}),Z}function OY(){if(typeof window>"u"||typeof document>"u")return!1;let{documentElement:_,body:$}=document,j=_?.getAttribute?.("data-theme")?.toLowerCase?.()||"";if(j==="dark")return!0;if(j==="light")return!1;if(_?.classList?.contains("dark")||$?.classList?.contains("dark"))return!0;if(_?.classList?.contains("light")||$?.classList?.contains("light"))return!1;return Boolean(window.matchMedia?.("(prefers-color-scheme: dark)")?.matches)}function TY(_,$,j){let Z=((_+Math.PI/2)*180/Math.PI+360)%360,Y=j?Math.max(30,70-$*10):Math.max(34,66-$*8),Q=j?Math.min(70,45+$*5):Math.min(60,42+$*4);return`hsl(${Z.toFixed(1)} ${Y}% ${Q}%)`}function d8(_,$,j,Z){return{x:_+j*Math.cos(Z),y:$+j*Math.sin(Z)}}function X3(_,$,j,Z,Y,Q){let q=Math.PI*2-0.0001,N=Q-Y>q?Y+q:Q,K=d8(_,$,Z,Y),G=d8(_,$,Z,N),X=d8(_,$,j,N),V=d8(_,$,j,Y),U=N-Y>Math.PI?1:0;return[`M ${K.x.toFixed(3)} ${K.y.toFixed(3)}`,`A ${Z} ${Z} 0 ${U} 1 ${G.x.toFixed(3)} ${G.y.toFixed(3)}`,`L ${X.x.toFixed(3)} ${X.y.toFixed(3)}`,`A ${j} ${j} 0 ${U} 0 ${V.x.toFixed(3)} ${V.y.toFixed(3)}`,"Z"].join(" ")}var xY={1:[26,46],2:[48,68],3:[70,90],4:[92,112]};function yY(_,$,j){let Z=[],Y=[],Q=Math.max(0,Number($)||0),q=(N,K,G,X)=>{let V=Array.isArray(N?.children)?N.children:[];if(!V.length)return;let U=Math.max(0,Number(N.size)||0);if(U<=0)return;let L=G-K,F=K;V.forEach((J,H)=>{let W=Math.max(0,Number(J.size)||0);if(W<=0)return;let D=W/U,E=F,C=H===V.length-1?G:F+L*D;if(F=C,C-E<0.003)return;let P=xY[X];if(P){let v=TY(E,X,j);if(Z.push({key:J.path,path:J.path,label:J.name,size:W,color:v,depth:X,startAngle:E,endAngle:C,innerRadius:P[0],outerRadius:P[1],d:X3(120,120,P[0],P[1],E,C)}),X===1)Y.push({key:J.path,name:J.name,size:W,pct:Q>0?W/Q*100:0,color:v})}if(X<kY)q(J,E,C,X+1)})};return q(_,-Math.PI/2,Math.PI*3/2,1),{segments:Z,legend:Y}}function K3(_,$){if(!_||!$)return null;if(_.path===$)return _;let j=Array.isArray(_.children)?_.children:[];for(let Z of j){let Y=K3(Z,$);if(Y)return Y}return null}function PY(_,$,j,Z){if(!j||j<=0)return{segments:[],legend:[]};let Y=xY[1];if(!Y)return{segments:[],legend:[]};let Q=-Math.PI/2,q=Math.PI*3/2,N=TY(Q,1,Z),G=`${$||"."}/[files]`;return{segments:[{key:G,path:G,label:_,size:j,color:N,depth:1,startAngle:Q,endAngle:q,innerRadius:Y[0],outerRadius:Y[1],d:X3(120,120,Y[0],Y[1],Q,q)}],legend:[{key:G,name:_,size:j,pct:100,color:N}]}}function DY(_,$=!1,j=!1){if(!_)return null;let Z=IY(_),Y=MY(_,0),Q=Y.size||Z,{segments:q,legend:N}=yY(Y,Q,j);if(!q.length&&Q>0){let K=PY("[files]",Y.path,Q,j);q=K.segments,N=K.legend}return{root:Y,totalSize:Q,segments:q,legend:N,truncated:$,isDarkTheme:j}}function wX({payload:_}){if(!_)return null;let[$,j]=m(null),[Z,Y]=m(_?.root?.path||"."),[Q,q]=m(()=>[_?.root?.path||"."]),[N,K]=m(!1);g(()=>{let B=_?.root?.path||".";Y(B),q([B]),j(null)},[_?.root?.path,_?.totalSize]),g(()=>{if(!Z)return;K(!0);let B=setTimeout(()=>K(!1),180);return()=>clearTimeout(B)},[Z]);let G=m0(()=>{return K3(_.root,Z)||_.root},[_?.root,Z]),X=G?.size||_.totalSize||0,{segments:V,legend:U}=m0(()=>{let B=yY(G,X,_.isDarkTheme);if(B.segments.length>0)return B;if(X<=0)return B;let I=G?.children?.length?"Total":"[files]";return PY(I,G?.path||_?.root?.path||".",X,_.isDarkTheme)},[G,X,_.isDarkTheme,_?.root?.path]),[L,F]=m(V),J=y(new Map),H=y(0);g(()=>{let B=J.current,I=new Map(V.map((n)=>[n.key,n])),w=performance.now(),c=220,b=(n)=>{let d=Math.min(1,(n-w)/220),r=d*(2-d),t=V.map((a)=>{let N0=B.get(a.key)||{startAngle:a.startAngle,endAngle:a.startAngle,innerRadius:a.innerRadius,outerRadius:a.innerRadius},G0=(B0,D0)=>B0+(D0-B0)*r,k0=G0(N0.startAngle,a.startAngle),J0=G0(N0.endAngle,a.endAngle),X0=G0(N0.innerRadius,a.innerRadius),x0=G0(N0.outerRadius,a.outerRadius);return{...a,d:X3(120,120,X0,x0,k0,J0)}});if(F(t),d<1)H.current=requestAnimationFrame(b)};if(H.current)cancelAnimationFrame(H.current);return H.current=requestAnimationFrame(b),J.current=I,()=>{if(H.current)cancelAnimationFrame(H.current)}},[V]);let W=L.length?L:V,D=X>0?A_(X):"0 B",E=G?.name||"",P=(E&&E!=="."?E:"Total")||"Total",v=D,p=Q.length>1,M=(B)=>{if(!B?.path)return;let I=K3(_.root,B.path);if(!I||!Array.isArray(I.children)||I.children.length===0)return;q((w)=>[...w,I.path]),Y(I.path),j(null)},k=()=>{if(!p)return;q((B)=>{let I=B.slice(0,-1);return Y(I[I.length-1]||_?.root?.path||"."),I}),j(null)};return z`
        <div class="workspace-folder-starburst">
            <svg viewBox="0 0 240 240" class=${`workspace-folder-starburst-svg${N?" is-zooming":""}`} role="img"
                aria-label=${`Folder sizes for ${G?.path||_?.root?.path||"."}`}
                data-segments=${W.length}
                data-base-size=${X}>
                ${W.map((B)=>z`
                    <path
                        key=${B.key}
                        d=${B.d}
                        fill=${B.color}
                        stroke="var(--bg-primary)"
                        stroke-width="1"
                        class=${`workspace-folder-starburst-segment${$?.key===B.key?" is-hovered":""}`}
                        onMouseEnter=${()=>j(B)}
                        onMouseLeave=${()=>j(null)}
                        onTouchStart=${()=>j(B)}
                        onTouchEnd=${()=>j(null)}
                        onClick=${()=>M(B)}
                    >
                        <title>${B.label} — ${A_(B.size)}</title>
                    </path>
                `)}
                <g
                    class=${`workspace-folder-starburst-center-hit${p?" is-drill":""}`}
                    onClick=${k}
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
                    <text x="120" y="114" text-anchor="middle" class="workspace-folder-starburst-total-label">${P}</text>
                    <text x="120" y="130" text-anchor="middle" class="workspace-folder-starburst-total-value">${v}</text>
                </g>
            </svg>
            ${U.length>0&&z`
                <div class="workspace-folder-starburst-legend">
                    ${U.slice(0,8).map((B)=>z`
                        <div key=${B.key} class="workspace-folder-starburst-legend-item">
                            <span class="workspace-folder-starburst-swatch" style=${`background:${B.color}`}></span>
                            <span class="workspace-folder-starburst-name" title=${B.name}>${B.name}</span>
                            <span class="workspace-folder-starburst-size">${A_(B.size)}</span>
                            <span class="workspace-folder-starburst-pct">${B.pct.toFixed(1)}%</span>
                        </div>
                    `)}
                </div>
            `}
            ${_.truncated&&z`
                <div class="workspace-folder-starburst-note">Preview is truncated by tree depth/entry limits.</div>
            `}
        </div>
    `}function RX({mediaId:_}){let[$,j]=m(null);if(g(()=>{if(!_)return;_5(_).then(j).catch(()=>{})},[_]),!$)return null;let Z=$.filename||"file",Y=$.metadata?.size?A_($.metadata.size):"";return z`
        <a href=${D_(_)} download=${Z} class="file-attachment"
            onClick=${(Q)=>Q.stopPropagation()}>
            <svg class="file-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                <polyline points="14 2 14 8 20 8"/>
                <line x1="16" y1="13" x2="8" y2="13"/>
                <line x1="16" y1="17" x2="8" y2="17"/>
                <polyline points="10 9 9 9 8 9"/>
            </svg>
            <div class="file-info">
                <span class="file-name">${Z}</span>
                ${Y&&z`<span class="file-size">${Y}</span>`}
            </div>
            <svg class="download-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                <polyline points="7 10 12 15 17 10"/>
                <line x1="12" y1="15" x2="12" y2="3"/>
            </svg>
        </a>
    `}function CY({onFileSelect:_,visible:$=!0,active:j=void 0,onOpenEditor:Z,onOpenTerminalTab:Y,onOpenVncTab:Q,onToggleTerminal:q,terminalVisible:N=!1}){let[K,G]=m(null),[X,V]=m(new Set(["."])),[U,L]=m(null),[F,J]=m(null),[H,W]=m(""),[D,E]=m(null),[C,P]=m(null),[v,p]=m(!0),[M,k]=m(!1),[B,I]=m(null),[w,c]=m(()=>K5("workspaceShowHidden",!1)),[b,n]=m(!1),[d,r]=m(null),[t,a]=m(null),[_0,N0]=m(null),[G0,k0]=m(!1),[J0,X0]=m(null),[x0,B0]=m(()=>OY()),[D0,S0]=m(()=>Y3({stored:K_(n8),...Z3()})),[z0,M0]=m(!1),Z0=y(X),A0=y(""),v0=y(null),h0=y(0),d0=y(new Set),c0=y(null),w0=y(new Map),b0=y(_),s0=y(Z),r0=y(null),U0=y(null),C0=y(null),t0=y(null),s=y(null),q0=y(null),h=y("."),i=y(null),H0=y({path:null,dragging:!1,startX:0,startY:0}),T0=y({path:null,dragging:!1,startX:0,startY:0}),y0=y({path:null,timer:0}),V0=y(!1),P0=y(0),l0=y(new Map),O0=y(null),g0=y(null),I0=y(null),Y0=y(null),S=y(null),e=y(null),F0=y(w),E0=y($),o0=y(j??$),Z1=y(0),q1=y(_0),u1=y(b),n1=y(d),E_=y(null),d1=y({x:0,y:0}),S1=y(0),b1=y(null),f1=y(U),$1=y(F),g1=y(null),m_=y(D);b0.current=_,s0.current=Z,g(()=>{Z0.current=X},[X]),g(()=>{F0.current=w},[w]),g(()=>{E0.current=$},[$]),g(()=>{o0.current=j??$},[j,$]),g(()=>{q1.current=_0},[_0]),g(()=>{if(typeof window>"u")return;let A=()=>{S0(Y3({stored:K_(n8),...Z3()}))};A();let T=()=>A(),f=()=>A(),u=($0)=>{if(!$0||$0.key===null||$0.key===n8)A()};window.addEventListener("resize",T),window.addEventListener("focus",f),window.addEventListener("storage",u);let o=window.matchMedia?.("(pointer: coarse)"),Q0=window.matchMedia?.("(hover: none)"),L0=($0,u0)=>{if(!$0)return;if($0.addEventListener)$0.addEventListener("change",u0);else if($0.addListener)$0.addListener(u0)},W0=($0,u0)=>{if(!$0)return;if($0.removeEventListener)$0.removeEventListener("change",u0);else if($0.removeListener)$0.removeListener(u0)};return L0(o,T),L0(Q0,T),()=>{window.removeEventListener("resize",T),window.removeEventListener("focus",f),window.removeEventListener("storage",u),W0(o,T),W0(Q0,T)}},[]),g(()=>{let A=(T)=>{let f=T?.detail?.path;if(!f)return;let u=f.split("/"),o=[];for(let Q0=1;Q0<u.length;Q0++)o.push(u.slice(0,Q0).join("/"));if(o.length)V((Q0)=>{let L0=new Set(Q0);L0.add(".");for(let W0 of o)L0.add(W0);return L0});L(f),requestAnimationFrame(()=>{let Q0=document.querySelector(`[data-path="${CSS.escape(f)}"]`);if(Q0)Q0.scrollIntoView({block:"nearest",behavior:"smooth"})})};return window.addEventListener("workspace-reveal-path",A),()=>window.removeEventListener("workspace-reveal-path",A)},[]),g(()=>{u1.current=b},[b]),g(()=>{n1.current=d},[d]),g(()=>{f1.current=U},[U]),g(()=>{$1.current=F},[F]),g(()=>{m_.current=D},[D]),g(()=>{if(typeof window>"u"||typeof document>"u")return;let A=()=>B0(OY());A();let T=window.matchMedia?.("(prefers-color-scheme: dark)"),f=()=>A();if(T?.addEventListener)T.addEventListener("change",f);else if(T?.addListener)T.addListener(f);let u=typeof MutationObserver<"u"?new MutationObserver(()=>A()):null;if(u?.observe(document.documentElement,{attributes:!0,attributeFilter:["class","data-theme"]}),document.body)u?.observe(document.body,{attributes:!0,attributeFilter:["class","data-theme"]});return()=>{if(T?.removeEventListener)T.removeEventListener("change",f);else if(T?.removeListener)T.removeListener(f);u?.disconnect()}},[]),g(()=>{if(!F)return;let A=s.current;if(!A)return;let T=requestAnimationFrame(()=>{try{A.focus(),A.select()}catch{}});return()=>cancelAnimationFrame(T)},[F]),g(()=>{if(!z0)return;let A=(f)=>{let u=f?.target;if(!(u instanceof Element))return;if(S.current?.contains(u))return;if(e.current?.contains(u))return;M0(!1)},T=(f)=>{if(f?.key==="Escape")M0(!1),e.current?.focus?.()};return document.addEventListener("mousedown",A),document.addEventListener("touchstart",A,{passive:!0}),document.addEventListener("keydown",T),()=>{document.removeEventListener("mousedown",A),document.removeEventListener("touchstart",A),document.removeEventListener("keydown",T)}},[z0]);let V_=async(A,T={})=>{let f=Boolean(T?.autoOpen),u=String(A||"").trim();k(!0),E(null),P(null);try{let o=await k5(u,20000);if(f&&u&&HY(u,o,{resolvePane:(Q0)=>i0.resolve(Q0)}))return s0.current?.(u,o),o;return E(o),o}catch(o){let Q0={error:o.message||"Failed to load preview"};return E(Q0),Q0}finally{k(!1)}};r0.current=V_;let p_=async()=>{if(!E0.current)return;try{let A=await E5("",1,F0.current),T=JY(A.root,Z0.current,F0.current);if(T===A0.current){p(!1);return}if(A0.current=T,v0.current=A.root,!h0.current)h0.current=requestAnimationFrame(()=>{h0.current=0,G((f)=>G3(f,v0.current)),p(!1)})}catch(A){I(A.message||"Failed to load workspace"),p(!1)}},R_=async(A)=>{if(!A)return;if(d0.current.has(A))return;d0.current.add(A);try{let T=await E5(A,1,F0.current);G((f)=>N3(f,A,T.root))}catch(T){I(T.message||"Failed to load workspace")}finally{d0.current.delete(A)}};U0.current=R_;let J1=x(()=>{let A=U;if(!A)return".";let T=w0.current?.get(A);if(T&&T.type==="dir")return T.path;if(A==="."||!A.includes("/"))return".";let f=A.split("/");return f.pop(),f.join("/")||"."},[U]),i1=x((A)=>{let T=A?.closest?.(".workspace-row");if(!T)return null;let f=T.dataset.path,u=T.dataset.type;if(!f)return null;if(u==="dir")return f;if(f.includes("/")){let o=f.split("/");return o.pop(),o.join("/")||"."}return"."},[]),O1=x((A)=>{return i1(A?.target||null)},[i1]),V1=x((A)=>{q1.current=A,N0(A)},[]),L1=x(()=>{let A=y0.current;if(A?.timer)clearTimeout(A.timer);y0.current={path:null,timer:0}},[]),Q_=x((A)=>{if(!A||A==="."){L1();return}let T=w0.current?.get(A);if(!T||T.type!=="dir"){L1();return}if(Z0.current?.has(A)){L1();return}if(y0.current?.path===A)return;L1();let f=setTimeout(()=>{y0.current={path:null,timer:0},U0.current?.(A),V((u)=>{let o=new Set(u);return o.add(A),o})},600);y0.current={path:A,timer:f}},[L1]),q_=x((A,T)=>{if(d1.current={x:A,y:T},S1.current)return;S1.current=requestAnimationFrame(()=>{S1.current=0;let f=E_.current;if(!f)return;let u=d1.current;f.style.transform=`translate(${u.x+12}px, ${u.y+12}px)`})},[]),T1=x((A)=>{if(!A)return;let f=(w0.current?.get(A)?.name||A.split("/").pop()||A).trim();if(!f)return;a({path:A,label:f})},[]),m1=x(()=>{if(a(null),S1.current)cancelAnimationFrame(S1.current),S1.current=0;if(E_.current)E_.current.style.transform="translate(-9999px, -9999px)"},[]),U1=x((A)=>{if(!A)return".";let T=w0.current?.get(A);if(T&&T.type==="dir")return T.path;if(A==="."||!A.includes("/"))return".";let f=A.split("/");return f.pop(),f.join("/")||"."},[]),E1=x(()=>{J(null),W("")},[]),r1=x((A)=>{if(!A)return;let f=(w0.current?.get(A)?.name||A.split("/").pop()||A).trim();if(!f||A===".")return;J(A),W(f)},[]),p1=x(async()=>{let A=$1.current;if(!A)return;let T=(H||"").trim();if(!T){E1();return}let f=w0.current?.get(A),u=(f?.name||A.split("/").pop()||A).trim();if(T===u){E1();return}try{let Q0=(await T6(A,T))?.path||A,L0=A.includes("/")?A.split("/").slice(0,-1).join("/")||".":".";if(E1(),I(null),window.dispatchEvent(new CustomEvent("workspace-file-renamed",{detail:{oldPath:A,newPath:Q0,type:f?.type||"file"}})),f?.type==="dir")V((W0)=>{let $0=new Set;for(let u0 of W0)if(u0===A)$0.add(Q0);else if(u0.startsWith(`${A}/`))$0.add(`${Q0}${u0.slice(A.length)}`);else $0.add(u0);return $0});if(L(Q0),f?.type==="dir")E(null),k(!1),P(null);else r0.current?.(Q0);U0.current?.(L0)}catch(o){I(o?.message||"Failed to rename file")}},[E1,H]),h_=x(async(A)=>{let u=A||".";for(let o=0;o<50;o+=1){let L0=`untitled${o===0?"":`-${o}`}.md`;try{let $0=(await M6(u,L0,""))?.path||(u==="."?L0:`${u}/${L0}`);if(u&&u!==".")V((u0)=>new Set([...u0,u]));L($0),I(null),U0.current?.(u),r0.current?.($0);return}catch(W0){if(W0?.status===409||W0?.code==="file_exists")continue;I(W0?.message||"Failed to create file");return}}I("Failed to create file (untitled name already in use).")},[]),k_=x((A)=>{if(A?.stopPropagation?.(),G0)return;let T=U1(f1.current);h_(T)},[G0,U1,h_]);g(()=>{if(typeof window>"u")return;let A=(T)=>{let f=T?.detail?.updates||[];if(!Array.isArray(f)||f.length===0)return;G((W0)=>{let $0=W0;for(let u0 of f){if(!u0?.root)continue;if(!$0||u0.path==="."||!u0.path)$0=u0.root;else $0=N3($0,u0.path,u0.root)}if($0)A0.current=JY($0,Z0.current,F0.current);return p(!1),$0});let u=f1.current;if(Boolean(u)&&f.some((W0)=>{let $0=W0?.path||"";if(!$0||$0===".")return!0;return u===$0||u.startsWith(`${$0}/`)||$0.startsWith(`${u}/`)}))l0.current.clear();if(!u||!m_.current)return;let Q0=w0.current?.get(u);if(Q0&&Q0.type==="dir")return;if(f.some((W0)=>{let $0=W0?.path||"";if(!$0||$0===".")return!0;return u===$0||u.startsWith(`${$0}/`)}))r0.current?.(u)};return window.addEventListener("workspace-update",A),()=>window.removeEventListener("workspace-update",A)},[]),c0.current=p_;let c_=y(()=>{if(typeof window>"u")return;let A=window.matchMedia("(min-width: 1024px) and (orientation: landscape)"),T=o0.current??E0.current,f=document.visibilityState!=="hidden"&&(T||A.matches&&E0.current);I5(f,F0.current).catch(()=>{})}).current,U_=y(0),Q4=y(()=>{if(U_.current)clearTimeout(U_.current);U_.current=setTimeout(()=>{U_.current=0,c_()},250)}).current;g(()=>{if(E0.current)c0.current?.();Q4()},[$,j]),g(()=>{c0.current(),c_();let A=setInterval(()=>c0.current(),yX),T=R5("previewHeight",null),f=Number.isFinite(T)?Math.min(Math.max(T,80),600):280;if(P0.current=f,C0.current)C0.current.style.setProperty("--preview-height",`${f}px`);let u=window.matchMedia("(min-width: 1024px) and (orientation: landscape)"),o=()=>Q4();if(u.addEventListener)u.addEventListener("change",o);else if(u.addListener)u.addListener(o);return document.addEventListener("visibilitychange",o),()=>{if(clearInterval(A),h0.current)cancelAnimationFrame(h0.current),h0.current=0;if(u.removeEventListener)u.removeEventListener("change",o);else if(u.removeListener)u.removeListener(o);if(document.removeEventListener("visibilitychange",o),U_.current)clearTimeout(U_.current),U_.current=0;if(i.current)clearTimeout(i.current),i.current=null;I5(!1,F0.current).catch(()=>{})}},[]);let L_=m0(()=>EY(K,X,w),[K,X,w]),I_=m0(()=>new Map(L_.map((A)=>[A.node.path,A.node])),[L_]),k4=m0(()=>FY(D0),[D0]);w0.current=I_;let Y1=(U?w0.current.get(U):null)?.type==="dir";g(()=>{if(!U||!Y1){X0(null),O0.current=null,g0.current=null;return}let A=U,T=`${w?"hidden":"visible"}:${U}`,f=l0.current,u=f.get(T);if(u?.root){f.delete(T),f.set(T,u);let L0=DY(u.root,Boolean(u.truncated),x0);if(L0)O0.current=L0,g0.current=U,X0({loading:!1,error:null,payload:L0});return}let o=O0.current,Q0=g0.current;X0({loading:!0,error:null,payload:Q0===U?o:null}),E5(U,CX,w).then((L0)=>{if(f1.current!==A)return;let W0={root:L0?.root,truncated:Boolean(L0?.truncated)};f.delete(T),f.set(T,W0);while(f.size>SX){let u0=f.keys().next().value;if(!u0)break;f.delete(u0)}let $0=DY(W0.root,W0.truncated,x0);O0.current=$0,g0.current=U,X0({loading:!1,error:null,payload:$0})}).catch((L0)=>{if(f1.current!==A)return;X0({loading:!1,error:L0?.message||"Failed to load folder size chart",payload:Q0===U?o:null})})},[U,Y1,w,x0]);let D1=Boolean(D&&D.kind==="text"&&!Y1&&(!D.size||D.size<=262144)),q4=D1?"Open in editor":D?.size>262144?"File too large to edit":"File is not editable",o1=Boolean(U&&U!=="."),W_=Boolean(U&&!Y1),h1=Boolean(U&&!Y1),F1=U&&Y1?G8(U,w):null,x1=x(()=>M0(!1),[]),N1=x(async(A)=>{x1();try{await A?.()}catch(T){console.warn("[workspace-explorer] Header menu action failed:",T)}},[x1]);g(()=>{let A=I0.current;if(Y0.current)Y0.current.dispose(),Y0.current=null;if(!A)return;if(A.innerHTML="",!U||Y1||!D||D.error)return;let T={path:U,content:typeof D.text==="string"?D.text:void 0,mtime:D.mtime,size:D.size,preview:D,mode:"view"},f=i0.resolve(T)||i0.get("workspace-preview-default");if(!f)return;let u=f.mount(A,T);return Y0.current=u,()=>{if(Y0.current===u)u.dispose(),Y0.current=null;A.innerHTML=""}},[U,Y1,D]);let s1=(A)=>{let T=A?.target;if(T instanceof Element)return T;return T?.parentElement||null},a1=(A)=>{return Boolean(A?.closest?.(".workspace-node-icon, .workspace-label-text"))},t1=y((A)=>{let T=s1(A),f=T?.closest?.("[data-path]");if(!f)return;let u=f.dataset.path;if(!u||u===".")return;let o=Boolean(T?.closest?.("button"))||Boolean(T?.closest?.("a"))||Boolean(T?.closest?.("input")),Q0=Boolean(T?.closest?.(".workspace-caret"));if(o||Q0)return;if($1.current===u)return;r1(u)}).current,u_=y((A)=>{if(V0.current){V0.current=!1;return}let T=s1(A),f=T?.closest?.("[data-path]");if(t0.current?.focus?.(),!f)return;let u=f.dataset.path,o=f.dataset.type,Q0=Boolean(T?.closest?.(".workspace-caret")),L0=Boolean(T?.closest?.("button"))||Boolean(T?.closest?.("a"))||Boolean(T?.closest?.("input")),W0=f1.current===u,$0=$1.current;if($0){if($0===u)return;E1()}let u0=o==="file"&&g1.current===u&&!Q0&&!L0;if(o==="dir"){if(g1.current=null,L(u),E(null),P(null),k(!1),!Z0.current.has(u))U0.current?.(u);if(W0&&!Q0)return;V((J_)=>{let $_=new Set(J_);if($_.has(u))$_.delete(u);else $_.add(u);return $_})}else{g1.current=null,L(u);let k1=w0.current.get(u);if(k1)b0.current?.(k1.path,k1);if(!L0&&!Q0&&PX(u))s0.current?.(u,m_.current);else{let $_=!L0&&!Q0;r0.current?.(u,{autoOpen:$_})}}}).current,w1=y(()=>{A0.current="",c0.current(),Array.from(Z0.current||[]).filter((T)=>T&&T!==".").forEach((T)=>U0.current?.(T))}).current,y1=y(()=>{g1.current=null,L(null),E(null),P(null),k(!1)}).current,e1=y(()=>{c((A)=>{let T=!A;if(typeof window<"u")Q1("workspaceShowHidden",String(T));return F0.current=T,I5(!0,T).catch(()=>{}),A0.current="",c0.current?.(),Array.from(Z0.current||[]).filter((u)=>u&&u!==".").forEach((u)=>U0.current?.(u)),T})}).current,M_=y((A)=>{if(s1(A)?.closest?.("[data-path]"))return;y1()}).current,W1=x(async(A)=>{if(!A)return;let T=A.split("/").pop()||A;if(!window.confirm(`Delete "${T}"? This cannot be undone.`))return;try{await y6(A);let u=A.includes("/")?A.split("/").slice(0,-1).join("/")||".":".";if(f1.current===A)y1();U0.current?.(u),I(null)}catch(u){E((o)=>({...o||{},error:u.message||"Failed to delete file"}))}},[y1]),B_=x((A)=>{let T=t0.current;if(!T||!A||typeof CSS>"u"||typeof CSS.escape!=="function")return;T.querySelector(`[data-path="${CSS.escape(A)}"]`)?.scrollIntoView?.({block:"nearest"})},[]),K1=x((A)=>{let T=L_;if(!T||T.length===0)return;let f=U?T.findIndex((u)=>u.node.path===U):-1;if(A.key==="ArrowDown"){A.preventDefault();let u=Math.min(f+1,T.length-1),o=T[u];if(!o)return;if(L(o.node.path),o.node.type!=="dir")b0.current?.(o.node.path,o.node),r0.current?.(o.node.path);else E(null),k(!1),P(null);B_(o.node.path);return}if(A.key==="ArrowUp"){A.preventDefault();let u=f<=0?0:f-1,o=T[u];if(!o)return;if(L(o.node.path),o.node.type!=="dir")b0.current?.(o.node.path,o.node),r0.current?.(o.node.path);else E(null),k(!1),P(null);B_(o.node.path);return}if(A.key==="ArrowRight"&&f>=0){let u=T[f];if(u?.node?.type==="dir"&&!X.has(u.node.path))A.preventDefault(),U0.current?.(u.node.path),V((o)=>new Set([...o,u.node.path]));return}if(A.key==="ArrowLeft"&&f>=0){let u=T[f];if(u?.node?.type==="dir"&&X.has(u.node.path))A.preventDefault(),V((o)=>{let Q0=new Set(o);return Q0.delete(u.node.path),Q0});return}if(A.key==="Enter"&&f>=0){A.preventDefault();let u=T[f];if(!u)return;let o=u.node.path;if(u.node.type==="dir"){if(!Z0.current.has(o))U0.current?.(o);V((L0)=>{let W0=new Set(L0);if(W0.has(o))W0.delete(o);else W0.add(o);return W0}),E(null),P(null),k(!1)}else b0.current?.(o,u.node),r0.current?.(o);return}if((A.key==="Delete"||A.key==="Backspace")&&f>=0){let u=T[f];if(!u||u.node.type==="dir")return;A.preventDefault(),W1(u.node.path);return}if(A.key==="Escape")A.preventDefault(),y1()},[y1,W1,X,L_,B_,U]),T_=x((A)=>{let T=s1(A),f=T?.closest?.(".workspace-row");if(!f)return;let u=f.dataset.type,o=f.dataset.path;if(!o||o===".")return;if($1.current===o)return;let Q0=A?.touches?.[0];if(!Q0)return;if(H0.current={path:a1(T)?o:null,dragging:!1,startX:Q0.clientX,startY:Q0.clientY},u!=="file")return;if(i.current)clearTimeout(i.current);i.current=setTimeout(()=>{if(i.current=null,H0.current?.dragging)return;W1(o)},600)},[W1]),z_=x(()=>{if(i.current)clearTimeout(i.current),i.current=null;let A=H0.current;if(A?.dragging&&A.path){let T=q1.current||J1(),f=b1.current;if(typeof f==="function")f(A.path,T)}H0.current={path:null,dragging:!1,startX:0,startY:0},Z1.current=0,n(!1),r(null),V1(null),L1(),m1()},[J1,m1,V1,L1]),M4=x((A)=>{let T=H0.current,f=A?.touches?.[0];if(!f||!T?.path){if(i.current)clearTimeout(i.current),i.current=null;return}let u=Math.abs(f.clientX-T.startX),o=Math.abs(f.clientY-T.startY),Q0=u>8||o>8;if(Q0&&i.current)clearTimeout(i.current),i.current=null;if(!T.dragging&&Q0)T.dragging=!0,n(!0),r("move"),T1(T.path);if(T.dragging){A.preventDefault(),q_(f.clientX,f.clientY);let L0=document.elementFromPoint(f.clientX,f.clientY),W0=i1(L0)||J1();if(q1.current!==W0)V1(W0);Q_(W0)}},[i1,J1,T1,q_,V1,Q_]),p4=y((A)=>{A.preventDefault();let T=C0.current;if(!T)return;let f=A.clientY,u=P0.current||280,o=A.currentTarget;o.classList.add("dragging"),document.body.style.cursor="row-resize",document.body.style.userSelect="none";let Q0=f,L0=($0)=>{Q0=$0.clientY;let u0=T.clientHeight-80,k1=Math.min(Math.max(u-($0.clientY-f),80),u0);T.style.setProperty("--preview-height",`${k1}px`),P0.current=k1},W0=()=>{let $0=T.clientHeight-80,u0=Math.min(Math.max(u-(Q0-f),80),$0);P0.current=u0,o.classList.remove("dragging"),document.body.style.cursor="",document.body.style.userSelect="",Q1("previewHeight",String(Math.round(u0))),document.removeEventListener("mousemove",L0),document.removeEventListener("mouseup",W0)};document.addEventListener("mousemove",L0),document.addEventListener("mouseup",W0)}).current,x_=y((A)=>{A.preventDefault();let T=C0.current;if(!T)return;let f=A.touches[0];if(!f)return;let u=f.clientY,o=P0.current||280,Q0=A.currentTarget;Q0.classList.add("dragging"),document.body.style.userSelect="none";let L0=($0)=>{let u0=$0.touches[0];if(!u0)return;$0.preventDefault();let k1=T.clientHeight-80,J_=Math.min(Math.max(o-(u0.clientY-u),80),k1);T.style.setProperty("--preview-height",`${J_}px`),P0.current=J_},W0=()=>{Q0.classList.remove("dragging"),document.body.style.userSelect="",Q1("previewHeight",String(Math.round(P0.current||o))),document.removeEventListener("touchmove",L0),document.removeEventListener("touchend",W0),document.removeEventListener("touchcancel",W0)};document.addEventListener("touchmove",L0,{passive:!1}),document.addEventListener("touchend",W0),document.addEventListener("touchcancel",W0)}).current,f_=async()=>{if(!U)return;try{let A=await I6(U);if(A.media_id)P(A.media_id)}catch(A){E((T)=>({...T||{},error:A.message||"Failed to attach"}))}},T4=async()=>{if(!U||Y1)return;await W1(U)},l_=(A)=>{return Array.from(A?.dataTransfer?.types||[]).includes("Files")},h4=x((A)=>{if(!l_(A))return;if(A.preventDefault(),Z1.current+=1,!u1.current)n(!0);r("upload");let T=O1(A)||J1();V1(T),Q_(T)},[J1,O1,V1,Q_]),N4=x((A)=>{if(!l_(A))return;if(A.preventDefault(),A.dataTransfer)A.dataTransfer.dropEffect="copy";if(!u1.current)n(!0);if(n1.current!=="upload")r("upload");let T=O1(A)||J1();if(q1.current!==T)V1(T);Q_(T)},[J1,O1,V1,Q_]),K4=x((A)=>{if(!l_(A))return;if(A.preventDefault(),Z1.current=Math.max(0,Z1.current-1),Z1.current===0)n(!1),r(null),V1(null),L1()},[V1,L1]),F_=x(async(A,T=".")=>{let f=Array.from(A||[]);if(f.length===0)return;let u=T&&T!==""?T:".",o=u!=="."?u:"workspace root";k0(!0);try{let Q0=null;for(let L0 of f)try{Q0=await N8(L0,u)}catch(W0){let $0=W0?.status,u0=W0?.code;if($0===409||u0==="file_exists"){let k1=L0?.name||"file";if(!window.confirm(`"${k1}" already exists in ${o}. Overwrite?`))continue;Q0=await N8(L0,u,{overwrite:!0})}else throw W0}if(Q0?.path)g1.current=Q0.path,L(Q0.path),r0.current?.(Q0.path);U0.current?.(u)}catch(Q0){I(Q0.message||"Failed to upload file")}finally{k0(!1)}},[]),c4=x(async(A,T)=>{if(!A)return;let f=w0.current?.get(A);if(!f)return;let u=T&&T!==""?T:".",o=A.includes("/")?A.split("/").slice(0,-1).join("/")||".":".";if(u===o)return;try{let L0=(await x6(A,u))?.path||A;if(f.type==="dir")V((W0)=>{let $0=new Set;for(let u0 of W0)if(u0===A)$0.add(L0);else if(u0.startsWith(`${A}/`))$0.add(`${L0}${u0.slice(A.length)}`);else $0.add(u0);return $0});if(L(L0),f.type==="dir")E(null),k(!1),P(null);else r0.current?.(L0);U0.current?.(o),U0.current?.(u)}catch(Q0){I(Q0?.message||"Failed to move entry")}},[]);b1.current=c4;let l4=x(async(A)=>{if(!l_(A))return;A.preventDefault(),Z1.current=0,n(!1),r(null),N0(null),L1();let T=Array.from(A?.dataTransfer?.files||[]);if(T.length===0)return;let f=q1.current||O1(A)||J1();await F_(T,f)},[J1,O1,F_]),z5=x((A)=>{if(A?.stopPropagation?.(),G0)return;let T=A?.currentTarget?.dataset?.uploadTarget||".";h.current=T,q0.current?.click()},[G0]),H1=x(()=>{if(G0)return;let A=f1.current,T=A?w0.current?.get(A):null;h.current=T?.type==="dir"?T.path:".",q0.current?.click()},[G0]),G4=x(()=>{N1(()=>k_(null))},[N1,k_]),n4=x(()=>{N1(()=>H1())},[N1,H1]),y_=x(()=>{N1(()=>w1())},[N1,w1]),__=x(()=>{N1(()=>e1())},[N1,e1]),n_=x(()=>{if(!U||!D1)return;N1(()=>s0.current?.(U,D))},[N1,U,D1,D]),x4=x(()=>{if(!U||U===".")return;N1(()=>r1(U))},[N1,U,r1]),y4=x(()=>{if(!U||Y1)return;N1(()=>T4())},[N1,U,Y1,T4]),d4=x(()=>{if(!U||Y1)return;N1(()=>f_())},[N1,U,Y1,f_]),P4=x(()=>{if(!F1)return;if(x1(),typeof window<"u")window.open(F1,"_blank","noopener")},[x1,F1]),X4=x(()=>{x1(),Y?.()},[x1,Y]),F5=x(()=>{x1(),Q?.()},[x1,Q]),V4=x(()=>{x1(),q?.()},[x1,q]),C4=x((A)=>{if(!A||A.button!==0)return;let T=A.currentTarget;if(!T||!T.dataset)return;let f=T.dataset.path;if(!f||f===".")return;if($1.current===f)return;let u=s1(A);if(u?.closest?.("button, a, input, .workspace-caret"))return;if(!a1(u))return;A.preventDefault(),T0.current={path:f,dragging:!1,startX:A.clientX,startY:A.clientY};let o=(L0)=>{let W0=T0.current;if(!W0?.path)return;let $0=Math.abs(L0.clientX-W0.startX),u0=Math.abs(L0.clientY-W0.startY),k1=$0>4||u0>4;if(!W0.dragging&&k1)W0.dragging=!0,V0.current=!0,n(!0),r("move"),T1(W0.path),q_(L0.clientX,L0.clientY),document.body.style.userSelect="none",document.body.style.cursor="grabbing";if(W0.dragging){L0.preventDefault(),q_(L0.clientX,L0.clientY);let J_=document.elementFromPoint(L0.clientX,L0.clientY),$_=i1(J_)||J1();if(q1.current!==$_)V1($_);Q_($_)}},Q0=()=>{document.removeEventListener("mousemove",o),document.removeEventListener("mouseup",Q0);let L0=T0.current;if(L0?.dragging&&L0.path){let W0=q1.current||J1(),$0=b1.current;if(typeof $0==="function")$0(L0.path,W0)}T0.current={path:null,dragging:!1,startX:0,startY:0},Z1.current=0,n(!1),r(null),V1(null),L1(),m1(),document.body.style.userSelect="",document.body.style.cursor="",setTimeout(()=>{V0.current=!1},0)};document.addEventListener("mousemove",o),document.addEventListener("mouseup",Q0)},[i1,J1,T1,q_,m1,V1,Q_,L1]),H_=x(async(A)=>{let T=Array.from(A?.target?.files||[]);if(T.length===0)return;let f=h.current||".";if(await F_(T,f),h.current=".",A?.target)A.target.value=""},[F_]);return z`
        <aside
            class=${`workspace-sidebar${b?" workspace-drop-active":""}`}
            data-workspace-scale=${D0}
            ref=${C0}
            onDragEnter=${h4}
            onDragOver=${N4}
            onDragLeave=${K4}
            onDrop=${l4}
        >
            <input type="file" multiple style="display:none" ref=${q0} onChange=${H_} />
            <div class="workspace-header">
                <div class="workspace-header-left">
                    <div class="workspace-menu-wrap">
                        <button
                            ref=${e}
                            class=${`workspace-menu-button${z0?" active":""}`}
                            onClick=${(A)=>{A.stopPropagation(),M0((T)=>!T)}}
                            title="Workspace actions"
                            aria-label="Workspace actions"
                            aria-haspopup="menu"
                            aria-expanded=${z0?"true":"false"}
                        >
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                <line x1="4" y1="7" x2="20" y2="7" />
                                <line x1="4" y1="12" x2="20" y2="12" />
                                <line x1="4" y1="17" x2="20" y2="17" />
                            </svg>
                        </button>
                        ${z0&&z`
                            <div class="workspace-menu-dropdown" ref=${S} role="menu" aria-label="Workspace options">
                                <button class="workspace-menu-item" role="menuitem" onClick=${G4} disabled=${G0}>New file</button>
                                <button class="workspace-menu-item" role="menuitem" onClick=${n4} disabled=${G0}>Upload files</button>
                                <button class="workspace-menu-item" role="menuitem" onClick=${y_}>Refresh tree</button>
                                <button class=${`workspace-menu-item${w?" active":""}`} role="menuitem" onClick=${__}>
                                    ${w?"Hide hidden files":"Show hidden files"}
                                </button>

                                ${U&&z`<div class="workspace-menu-separator"></div>`}
                                ${U&&!Y1&&z`
                                    <button class="workspace-menu-item" role="menuitem" onClick=${n_} disabled=${!D1}>Open in editor</button>
                                `}
                                ${o1&&z`
                                    <button class="workspace-menu-item" role="menuitem" onClick=${x4}>Rename selected</button>
                                `}
                                ${h1&&z`
                                    <button class="workspace-menu-item" role="menuitem" onClick=${d4}>Download selected file</button>
                                `}
                                ${F1&&z`
                                    <button class="workspace-menu-item" role="menuitem" onClick=${P4}>Download selected folder (zip)</button>
                                `}
                                ${W_&&z`
                                    <button class="workspace-menu-item danger" role="menuitem" onClick=${y4}>Delete selected file</button>
                                `}

                                ${(Y||Q||q)&&z`<div class="workspace-menu-separator"></div>`}
                                ${Y&&z`
                                    <button class="workspace-menu-item" role="menuitem" onClick=${X4}>
                                        Open terminal in tab
                                    </button>
                                `}
                                ${Q&&z`
                                    <button class="workspace-menu-item" role="menuitem" onClick=${F5}>
                                        Open VNC in tab
                                    </button>
                                `}
                                ${q&&z`
                                    <button class="workspace-menu-item" role="menuitem" onClick=${V4}>
                                        ${N?"Hide terminal dock":"Show terminal dock"}
                                    </button>
                                `}
                            </div>
                        `}
                    </div>
                    <span>Workspace</span>
                </div>
                <div class="workspace-header-actions">
                    <button class="workspace-create" onClick=${k_} title="New file" disabled=${G0}>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                            stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                            <line x1="12" y1="5" x2="12" y2="19" />
                            <line x1="5" y1="12" x2="19" y2="12" />
                        </svg>
                    </button>
                    <button class="workspace-refresh" onClick=${w1} title="Refresh">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"
                            stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                            <circle cx="12" cy="12" r="8.5" stroke-dasharray="42 12" stroke-dashoffset="6"
                                transform="rotate(75 12 12)" />
                            <polyline points="21 3 21 9 15 9" />
                        </svg>
                    </button>
                </div>
            </div>
            <div class="workspace-tree" onClick=${M_}>
                ${G0&&z`<div class="workspace-drop-hint">Uploading…</div>`}
                ${v&&z`<div class="workspace-loading">Loading…</div>`}
                ${B&&z`<div class="workspace-error">${B}</div>`}
                ${K&&z`
                    <div
                        class="workspace-tree-list"
                        ref=${t0}
                        tabIndex="0"
                        onClick=${u_}
                        onDblClick=${t1}
                        onKeyDown=${K1}
                        onTouchStart=${T_}
                        onTouchEnd=${z_}
                        onTouchMove=${M4}
                        onTouchCancel=${z_}
                    >
                        ${L_.map(({node:A,depth:T})=>{let f=A.type==="dir",u=A.path===U,o=A.path===F,Q0=f&&X.has(A.path),L0=_0&&A.path===_0,W0=Array.isArray(A.children)&&A.children.length>0?A.children.length:Number(A.child_count)||0;return z`
                                <div
                                    key=${A.path}
                                    class=${`workspace-row${u?" selected":""}${L0?" drop-target":""}`}
                                    style=${{paddingLeft:`${8+T*k4.indentPx}px`}}
                                    data-path=${A.path}
                                    data-type=${A.type}
                                    onMouseDown=${C4}
                                >
                                    <span class="workspace-caret" aria-hidden="true">
                                        ${f?Q0?z`<svg viewBox="0 0 12 12"><polygon points="1,2 11,2 6,11"/></svg>`:z`<svg viewBox="0 0 12 12"><polygon points="2,1 11,6 2,11"/></svg>`:null}
                                    </span>
                                    <svg class=${`workspace-node-icon${f?" folder":""}`}
                                        viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                        stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                        aria-hidden="true">
                                        ${f?z`<path d="M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>`:z`<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/>`}
                                    </svg>
                                    ${o?z`
                                            <input
                                                class="workspace-rename-input"
                                                ref=${s}
                                                value=${H}
                                                onInput=${($0)=>W($0?.target?.value||"")}
                                                onKeyDown=${($0)=>{if($0.key==="Enter")$0.preventDefault(),p1();else if($0.key==="Escape")$0.preventDefault(),E1()}}
                                                onBlur=${E1}
                                                onClick=${($0)=>$0.stopPropagation()}
                                            />
                                        `:z`<span class="workspace-label"><span class="workspace-label-text">${A.name}</span></span>`}
                                    ${f&&!Q0&&W0>0&&z`
                                        <span class="workspace-count">${W0}</span>
                                    `}
                                    ${f&&z`
                                        <button
                                            class="workspace-folder-upload"
                                            data-upload-target=${A.path}
                                            title="Upload files to this folder"
                                            onClick=${z5}
                                            disabled=${G0}
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
                <div class="workspace-preview-splitter-h" onMouseDown=${p4} onTouchStart=${x_}></div>
                <div class="workspace-preview">
                    <div class="workspace-preview-header">
                        <span class="workspace-preview-title">${U}</span>
                        <div class="workspace-preview-actions">
                            <button class="workspace-create" onClick=${k_} title="New file" disabled=${G0}>
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                    stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                    <line x1="12" y1="5" x2="12" y2="19" />
                                    <line x1="5" y1="12" x2="19" y2="12" />
                                </svg>
                            </button>
                            ${!Y1&&z`
                                <button
                                    class="workspace-download workspace-edit"
                                    onClick=${()=>D1&&s0.current?.(U,D)}
                                    title=${q4}
                                    disabled=${!D1}
                                >
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                        stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                        <path d="M12 20h9" />
                                        <path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4Z" />
                                    </svg>
                                </button>
                                <button
                                    class="workspace-download workspace-delete"
                                    onClick=${T4}
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
                            ${Y1?z`
                                    <button class="workspace-download" onClick=${H1}
                                        title="Upload files to this folder" disabled=${G0}>
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                            stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                                            <polyline points="7 8 12 3 17 8"/>
                                            <line x1="12" y1="3" x2="12" y2="15"/>
                                        </svg>
                                    </button>
                                    <a class="workspace-download" href=${G8(U,w)}
                                        title="Download folder as zip" onClick=${(A)=>A.stopPropagation()}>
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                            stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                                            <polyline points="7 10 12 15 17 10"/>
                                            <line x1="12" y1="15" x2="12" y2="3"/>
                                        </svg>
                                    </a>`:z`<button class="workspace-download" onClick=${f_} title="Download">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                        stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                                        <polyline points="7 10 12 15 17 10"/>
                                        <line x1="12" y1="15" x2="12" y2="3"/>
                                    </svg>
                                </button>`}
                        </div>
                    </div>
                    ${M&&z`<div class="workspace-loading">Loading preview…</div>`}
                    ${D?.error&&z`<div class="workspace-error">${D.error}</div>`}
                    ${Y1&&z`
                        <div class="workspace-preview-text">Folder selected — create file, upload files, or download as zip.</div>
                        ${J0?.loading&&z`<div class="workspace-loading">Loading folder size preview…</div>`}
                        ${J0?.error&&z`<div class="workspace-error">${J0.error}</div>`}
                        ${J0?.payload&&J0.payload.segments?.length>0&&z`
                            <${wX} payload=${J0.payload} />
                        `}
                        ${J0?.payload&&(!J0.payload.segments||J0.payload.segments.length===0)&&z`
                            <div class="workspace-preview-text">No file size data available for this folder yet.</div>
                        `}
                    `}
                    ${D&&!D.error&&!Y1&&z`
                        <div class="workspace-preview-body" ref=${I0}></div>
                    `}
                    ${C&&z`
                        <div class="workspace-download-card">
                            <${RX} mediaId=${C} />
                        </div>
                    `}
                </div>
            `}
            ${t&&z`
                <div class="workspace-drag-ghost" ref=${E_}>${t.label}</div>
            `}
        </aside>
    `}var uX=new Set(["kanban-editor","mindmap-editor"]);function fX(_,$,j){let Z=String(_||"").trim();if(!Z)return null;if($)return $;if(typeof j!=="function")return null;return j({path:Z,mode:"edit"})?.id||null}function SY(_,$,j){let Z=fX(_,$,j);return Z!=null&&uX.has(Z)}var vX=/\.(docx?|xlsx?|pptx?|odt|ods|odp|rtf)$/i,bX=/\.(csv|tsv)$/i,gX=/\.pdf$/i,mX=/\.(png|jpe?g|gif|webp|bmp|ico|svg)$/i,wY=/\.drawio(\.xml|\.svg|\.png)?$/i;function RY({tabs:_,activeId:$,onActivate:j,onClose:Z,onCloseOthers:Y,onCloseAll:Q,onTogglePin:q,onTogglePreview:N,onEditSource:K,previewTabs:G,paneOverrides:X,onToggleDock:V,dockVisible:U,onToggleZen:L,zenMode:F,onPopOutTab:J}){let[H,W]=m(null),D=y(null);g(()=>{if(!H)return;let B=(I)=>{if(I.type==="keydown"&&I.key!=="Escape")return;W(null)};return document.addEventListener("click",B),document.addEventListener("keydown",B),()=>{document.removeEventListener("click",B),document.removeEventListener("keydown",B)}},[H]),g(()=>{let B=(I)=>{if(I.ctrlKey&&I.key==="Tab"){if(I.preventDefault(),!_.length)return;let w=_.findIndex((c)=>c.id===$);if(I.shiftKey){let c=_[(w-1+_.length)%_.length];j?.(c.id)}else{let c=_[(w+1)%_.length];j?.(c.id)}return}if((I.ctrlKey||I.metaKey)&&I.key==="w"){let w=document.querySelector(".editor-pane");if(w&&w.contains(document.activeElement)){if(I.preventDefault(),$)Z?.($)}}};return document.addEventListener("keydown",B),()=>document.removeEventListener("keydown",B)},[_,$,j,Z]);let E=x((B,I)=>{if(B.button===1){B.preventDefault(),Z?.(I);return}if(B.button===0)j?.(I)},[j,Z]),C=x((B,I)=>{B.preventDefault(),W({id:I,x:B.clientX,y:B.clientY})},[]),P=x((B)=>{B.preventDefault(),B.stopPropagation()},[]),v=x((B,I)=>{B.preventDefault(),B.stopPropagation(),Z?.(I)},[Z]);g(()=>{if(!$||!D.current)return;let B=D.current.querySelector(".tab-item.active");if(B)B.scrollIntoView({block:"nearest",inline:"nearest",behavior:"smooth"})},[$]);let p=x((B)=>{if(!(X instanceof Map))return null;return X.get(B)||null},[X]),M=m0(()=>_.find((B)=>B.id===H?.id)||null,[H?.id,_]),k=m0(()=>{let B=H?.id;if(!B)return!1;return SY(B,p(B),(I)=>i0.resolve(I))},[H?.id,p]);if(!_.length)return null;return z`
        <div class="tab-strip" ref=${D} role="tablist">
            ${_.map((B)=>z`
                <div
                    key=${B.id}
                    class=${`tab-item${B.id===$?" active":""}${B.dirty?" dirty":""}${B.pinned?" pinned":""}`}
                    role="tab"
                    aria-selected=${B.id===$}
                    title=${B.path}
                    onMouseDown=${(I)=>E(I,B.id)}
                    onContextMenu=${(I)=>C(I,B.id)}
                >
                    ${B.pinned&&z`
                        <span class="tab-pin-icon" aria-label="Pinned">
                            <svg viewBox="0 0 16 16" width="10" height="10" fill="currentColor">
                                <path d="M4.456.734a1.75 1.75 0 0 1 2.826.504l.613 1.327a3.1 3.1 0 0 0 2.084 1.707l2.454.584c1.332.317 1.8 1.972.832 2.94L11.06 10l3.72 3.72a.75.75 0 1 1-1.06 1.06L10 11.06l-2.204 2.205c-.968.968-2.623.5-2.94-.832l-.584-2.454a3.1 3.1 0 0 0-1.707-2.084l-1.327-.613a1.75 1.75 0 0 1-.504-2.826z"/>
                            </svg>
                        </span>
                    `}
                    <span class="tab-label">${B.label}</span>
                    <button
                        type="button"
                        class="tab-close"
                        onMouseDown=${P}
                        onClick=${(I)=>v(I,B.id)}
                        title=${B.dirty?"Unsaved changes":"Close"}
                        aria-label=${B.dirty?"Unsaved changes":`Close ${B.label}`}
                    >
                        ${B.dirty?z`<span class="tab-dirty-dot" aria-hidden="true"></span>`:z`<svg viewBox="0 0 16 16" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" aria-hidden="true" focusable="false" style=${{pointerEvents:"none"}}>
                                <line x1="4" y1="4" x2="12" y2="12" style=${{pointerEvents:"none"}}/>
                                <line x1="12" y1="4" x2="4" y2="12" style=${{pointerEvents:"none"}}/>
                            </svg>`}
                    </button>
                </div>
            `)}
            ${V&&z`
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
            ${L&&z`
                <button
                    class=${`tab-strip-zen-toggle${F?" active":""}`}
                    onClick=${L}
                    title=${`${F?"Exit":"Enter"} zen mode (Ctrl+Shift+Z)`}
                    aria-label=${`${F?"Exit":"Enter"} zen mode`}
                    aria-pressed=${F?"true":"false"}
                >
                    <svg viewBox="0 0 16 16" width="14" height="14" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                        ${F?z`<polyline points="4 8 1.5 8 1.5 1.5 14.5 1.5 14.5 8 12 8"/><polyline points="4 8 1.5 8 1.5 14.5 14.5 14.5 14.5 8 12 8"/>`:z`<polyline points="5.5 1.5 1.5 1.5 1.5 5.5"/><polyline points="10.5 1.5 14.5 1.5 14.5 5.5"/><polyline points="5.5 14.5 1.5 14.5 1.5 10.5"/><polyline points="10.5 14.5 14.5 14.5 14.5 10.5"/>`}
                    </svg>
                </button>
            `}
        </div>
        ${H&&z`
            <div class="tab-context-menu" style=${{left:H.x+"px",top:H.y+"px"}}>
                <button onClick=${()=>{Z?.(H.id),W(null)}}>Close</button>
                <button onClick=${()=>{Y?.(H.id),W(null)}}>Close Others</button>
                <button onClick=${()=>{Q?.(),W(null)}}>Close All</button>
                <hr />
                <button onClick=${()=>{q?.(H.id),W(null)}}>
                    ${M?.pinned?"Unpin":"Pin"}
                </button>
                ${k&&K&&z`
                    <button onClick=${()=>{K(H.id),W(null)}}>Edit Source</button>
                `}
                ${J&&z`
                    <button onClick=${()=>{let B=_.find((I)=>I.id===H.id);J(H.id,B?.label),W(null)}}>Open in Window</button>
                `}
                ${N&&/\.(md|mdx|markdown)$/i.test(H.id)&&z`
                    <hr />
                    <button onClick=${()=>{N(H.id),W(null)}}>
                        ${G?.has(H.id)?"Hide Preview":"Preview"}
                    </button>
                `}
                ${vX.test(H.id)&&z`
                    <hr />
                    <button onClick=${()=>{let B="/workspace/raw?path="+encodeURIComponent(H.id),I=H.id.split("/").pop()||"document",w="/office-viewer/?url="+encodeURIComponent(B)+"&name="+encodeURIComponent(I);window.open(w,"_blank","noopener"),W(null)}}>Open in New Tab</button>
                `}
                ${bX.test(H.id)&&z`
                    <hr />
                    <button onClick=${()=>{let B="/csv-viewer/?path="+encodeURIComponent(H.id);window.open(B,"_blank","noopener"),W(null)}}>Open in New Tab</button>
                `}
                ${gX.test(H.id)&&z`
                    <hr />
                    <button onClick=${()=>{let B="/workspace/raw?path="+encodeURIComponent(H.id);window.open(B,"_blank","noopener"),W(null)}}>Open in New Tab</button>
                `}
                ${mX.test(H.id)&&!wY.test(H.id)&&z`
                    <hr />
                    <button onClick=${()=>{let B="/image-viewer/?path="+encodeURIComponent(H.id);window.open(B,"_blank","noopener"),W(null)}}>Open in New Tab</button>
                `}
                ${wY.test(H.id)&&z`
                    <hr />
                    <button onClick=${()=>{let B="/drawio/edit?path="+encodeURIComponent(H.id);window.open(B,"_blank","noopener"),W(null)}}>Open in New Tab</button>
                `}
            </div>
        `}
    `}function pX(_){let{workspaceOpen:$,editorOpen:j,chatOnlyMode:Z,zenMode:Y}=_;return`app-shell${$?"":" workspace-collapsed"}${j?" editor-open":""}${Z?" chat-only":""}${Y?" zen-mode":""}`}function uY(_){let{appShellRef:$,workspaceOpen:j,editorOpen:Z,chatOnlyMode:Y,zenMode:Q,isRenameBranchFormOpen:q,closeRenameCurrentBranchForm:N,handleRenameCurrentBranch:K,renameBranchNameDraft:G,renameBranchNameInputRef:X,setRenameBranchNameDraft:V,renameBranchDraftState:U,isRenamingBranch:L,addFileRef:F,openEditor:J,openTerminalTab:H,openVncTab:W,hasDockPanes:D,toggleDock:E,dockVisible:C,handleSplitterMouseDown:P,handleSplitterTouchStart:v,showEditorPaneContainer:p,tabStripTabs:M,tabStripActiveId:k,handleTabActivate:B,handleTabClose:I,handleTabCloseOthers:w,handleTabCloseAll:c,handleTabTogglePin:b,handleTabTogglePreview:n,handleTabEditSource:d,previewTabs:r,tabPaneOverrides:t,toggleZenMode:a,handlePopOutPane:_0,isWebAppMode:N0,editorContainerRef:G0,editorInstanceRef:k0,handleDockSplitterMouseDown:J0,handleDockSplitterTouchStart:X0,TERMINAL_TAB_PATH:x0,dockContainerRef:B0,handleEditorSplitterMouseDown:D0,handleEditorSplitterTouchStart:S0,searchQuery:z0,isIOSDevice:M0,currentBranchRecord:Z0,currentChatJid:A0,currentChatBranches:v0,handleBranchPickerChange:h0,formatBranchPickerLabel:d0,openRenameCurrentBranchForm:c0,handlePruneCurrentBranch:w0,currentHashtag:b0,handleBackToTimeline:s0,activeSearchScopeLabel:r0,posts:U0,isMainTimelineView:C0,hasMore:t0,loadMore:s,timelineRef:q0,handleHashtagClick:h,addMessageRef:i,scrollToMessage:H0,openFileFromPill:T0,handleDeletePost:y0,handleOpenFloatingWidget:V0,agents:P0,userProfile:l0,removingPostIds:O0,agentStatus:g0,isCompactionStatus:I0,agentDraft:Y0,agentPlan:S,agentThought:e,pendingRequest:F0,intentToast:E0,currentTurnId:o0,steerQueued:Z1,handlePanelToggle:q1,btwSession:u1,closeBtwPanel:n1,handleBtwRetry:E_,handleBtwInject:d1,floatingWidget:S1,handleCloseFloatingWidget:b1,handleFloatingWidgetEvent:f1,extensionStatusPanels:$1,pendingExtensionPanelActions:g1,handleExtensionPanelAction:m_,searchOpen:V_,followupQueueItems:p_,handleInjectQueuedFollowup:R_,handleRemoveQueuedFollowup:J1,viewStateRef:i1,loadPosts:O1,scrollToBottom:V1,searchScope:L1,handleSearch:Q_,setSearchScope:q_,enterSearchMode:T1,exitSearchMode:m1,fileRefs:U1,removeFileRef:E1,clearFileRefs:r1,setFileRefsFromCompose:p1,messageRefs:h_,removeMessageRef:k_,clearMessageRefs:c_,setMessageRefsFromCompose:U_,handleCreateSessionFromCompose:Q4,handleRestoreBranch:L_,attachActiveEditorFile:I_,followupQueueCount:k4,handleBtwIntercept:I4,handleMessageResponse:Y1,handleComposeSubmitError:D1,handlePopOutChat:q4,isComposeBoxAgentActive:o1,activeChatAgents:W_,connectionStatus:h1,activeModel:F1,activeModelUsage:x1,activeThinkingLevel:N1,supportsThinking:s1,contextUsage:a1,notificationsEnabled:t1,notificationPermission:u_,handleToggleNotifications:w1,setActiveModel:y1,applyModelState:e1,setPendingRequest:M_,pendingRequestRef:W1,toggleWorkspace:B_}=_;return z`
    <div class=${pX({workspaceOpen:j,editorOpen:Z,chatOnlyMode:Y,zenMode:Q})} ref=${$}>
      ${q&&z`
        <div class="rename-branch-overlay" onPointerDown=${(K1)=>{if(K1.target===K1.currentTarget)N()}}>
          <form
            class="rename-branch-panel"
            onSubmit=${(K1)=>{K1.preventDefault(),K(G)}}
          >
            <div class="rename-branch-title">Rename branch handle</div>
            <input
              ref=${X}
              value=${G}
              onInput=${(K1)=>{let T_=K1.currentTarget?.value??"";V(String(T_))}}
              onKeyDown=${(K1)=>{if(K1.key==="Escape")K1.preventDefault(),N()}}
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
                onClick=${N}
                disabled=${L}
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      `}
      ${!Y&&z`
        <${CY}
          onFileSelect=${F}
          visible=${j}
          active=${j||Z}
          onOpenEditor=${J}
          onOpenTerminalTab=${H}
          onOpenVncTab=${W}
          onToggleTerminal=${D?E:void 0}
          terminalVisible=${Boolean(D&&C)}
        />
        <button
          class=${`workspace-toggle-tab${j?" open":" closed"}`}
          onClick=${B_}
          title=${j?"Hide workspace":"Show workspace"}
          aria-label=${j?"Hide workspace":"Show workspace"}
        >
          <svg class="workspace-toggle-tab-icon" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <polyline points="6 3 11 8 6 13" />
          </svg>
        </button>
        <div class="workspace-splitter" onMouseDown=${P} onTouchStart=${v}></div>
      `}
      ${p&&z`
        <div class="editor-pane-container">
          ${Q&&z`<div class="zen-hover-zone"></div>`}
          ${Z&&z`
            <${RY}
              tabs=${M}
              activeId=${k}
              onActivate=${B}
              onClose=${I}
              onCloseOthers=${w}
              onCloseAll=${c}
              onTogglePin=${b}
              onTogglePreview=${n}
              onEditSource=${d}
              previewTabs=${r}
              paneOverrides=${t}
              onToggleDock=${D?E:void 0}
              dockVisible=${D&&C}
              onToggleZen=${a}
              zenMode=${Q}
              onPopOutTab=${N0?void 0:_0}
            />
          `}
          ${Z&&z`<div class="editor-pane-host" ref=${G0}></div>`}
          ${Z&&k&&r.has(k)&&z`
            <${g8}
              getContent=${()=>k0.current?.getContent?.()}
              path=${k}
              onClose=${()=>n(k)}
            />
          `}
          ${D&&C&&z`<div class="dock-splitter" onMouseDown=${J0} onTouchStart=${X0}></div>`}
          ${D&&z`<div class=${`dock-panel${C?"":" hidden"}`}>
            <div class="dock-panel-header">
              <span class="dock-panel-title">Terminal</span>
              <div class="dock-panel-actions">
                ${!N0&&z`
                  <button class="dock-panel-action" onClick=${()=>_0(x0,"Terminal")} title="Open terminal in window" aria-label="Open terminal in window">
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
            <div class="dock-panel-body" ref=${B0}></div>
          </div>`}
        </div>
        <div class="editor-splitter" onMouseDown=${D0} onTouchStart=${S0}></div>
      `}
      <div class="container">
        ${z0&&M0()&&z`<div class="search-results-spacer"></div>`}
        ${Y&&z`
          <div class="chat-window-header">
            <div class="chat-window-header-main">
              <span class="chat-window-header-title">
                ${Z0?.agent_name?`@${Z0.agent_name}`:A0}
              </span>
              <span class="chat-window-header-subtitle">${Z0?.chat_jid||A0}</span>
            </div>
            <div class="chat-window-header-actions">
              ${v0.length>1&&z`
                <label class="chat-window-branch-picker-wrap">
                  <span class="chat-window-branch-picker-label">Branch</span>
                  <select
                    class="chat-window-branch-picker"
                    value=${A0}
                    onChange=${(K1)=>h0(K1.currentTarget.value)}
                  >
                    ${v0.map((K1)=>z`
                      <option key=${K1.chat_jid} value=${K1.chat_jid}>
                        ${d0(K1,{currentChatJid:A0})}
                      </option>
                    `)}
                  </select>
                </label>
              `}
              ${Z0?.chat_jid&&z`
                <button
                  class="chat-window-header-button"
                  type="button"
                  onClick=${c0}
                  title=${L?"Renaming branch…":"Rename this branch"}
                  aria-label="Rename this branch"
                  disabled=${L}
                >
                  ${L?"Renaming…":"Rename"}
                </button>
              `}
              ${Z0?.chat_jid&&Z0.chat_jid!==(Z0.root_chat_jid||Z0.chat_jid)&&z`
                <button
                  class="chat-window-header-button"
                  type="button"
                  onClick=${w0}
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
        ${(b0||z0)&&z`
          <div class="hashtag-header">
            <button class="back-btn" onClick=${s0}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
            </button>
            <span>${b0?`#${b0}`:`Search: ${z0} · ${r0}`}</span>
          </div>
        `}
        <${BY}
          posts=${U0}
          hasMore=${C0?t0:!1}
          onLoadMore=${C0?s:void 0}
          timelineRef=${q0}
          onHashtagClick=${h}
          onMessageRef=${i}
          onScrollToMessage=${H0}
          onFileRef=${T0}
          onPostClick=${void 0}
          onDeletePost=${y0}
          onOpenWidget=${V0}
          emptyMessage=${b0?`No posts with #${b0}`:z0?`No results for "${z0}"`:void 0}
          agents=${P0}
          user=${l0}
          reverse=${C0}
          removingPostIds=${O0}
          searchQuery=${z0}
        />
        <${a$}
          status=${I0(g0)?null:g0}
          draft=${Y0}
          plan=${S}
          thought=${e}
          pendingRequest=${F0}
          intent=${E0}
          turnId=${o0}
          steerQueued=${Z1}
          onPanelToggle=${q1}
          showExtensionPanels=${!1}
        />
        <${oZ}
          session=${u1}
          onClose=${n1}
          onRetry=${E_}
          onInject=${d1}
        />
        <${sZ}
          widget=${S1}
          onClose=${b1}
          onWidgetEvent=${f1}
        />
        <${a$}
          extensionPanels=${Array.from($1.values())}
          pendingPanelActions=${g1}
          onExtensionPanelAction=${m_}
          turnId=${o0}
          steerQueued=${Z1}
          onPanelToggle=${q1}
          showCorePanels=${!1}
        />
        <${o$}
          items=${V_?[]:p_}
          onInjectQueuedFollowup=${R_}
          onRemoveQueuedFollowup=${J1}
          onOpenFilePill=${T0}
        />
        <${rZ}
          onPost=${()=>{let{searchQuery:K1,searchOpen:T_}=i1.current||{};if(!K1&&!T_)O1(),V1()}}
          onFocus=${V1}
          searchMode=${V_}
          searchScope=${L1}
          onSearch=${Q_}
          onSearchScopeChange=${q_}
          onEnterSearch=${T1}
          onExitSearch=${m1}
          fileRefs=${U1}
          onRemoveFileRef=${E1}
          onClearFileRefs=${r1}
          onSetFileRefs=${p1}
          messageRefs=${h_}
          onRemoveMessageRef=${k_}
          onClearMessageRefs=${c_}
          onSetMessageRefs=${U_}
          onSwitchChat=${h0}
          onRenameSession=${K}
          isRenameSessionInProgress=${L}
          onCreateSession=${Q4}
          onDeleteSession=${w0}
          onRestoreSession=${L_}
          activeEditorPath=${Y?null:k}
          onAttachEditorFile=${Y?void 0:I_}
          onOpenFilePill=${T0}
          followupQueueCount=${k4}
          followupQueueItems=${p_}
          showQueueStack=${!1}
          onInjectQueuedFollowup=${R_}
          onRemoveQueuedFollowup=${J1}
          onSubmitIntercept=${I4}
          onMessageResponse=${Y1}
          onSubmitError=${D1}
          onPopOutChat=${N0?void 0:q4}
          isAgentActive=${o1}
          activeChatAgents=${W_}
          currentChatJid=${A0}
          connectionStatus=${h1}
          activeModel=${F1}
          modelUsage=${x1}
          thinkingLevel=${N1}
          supportsThinking=${s1}
          contextUsage=${a1}
          notificationsEnabled=${t1}
          notificationPermission=${u_}
          onToggleNotifications=${w1}
          onModelChange=${y1}
          onModelStateChange=${e1}
          statusNotice=${I0(g0)?g0:null}
        />
        <${$Y}
          request=${F0}
          onRespond=${()=>{M_(null),W1.current=null}}
        />
      </div>
    </div>
  `}var hX=HZ(),fY=V6,cX=L6,lX=z6,nX=D6,dX=A6,V3=F6,U3=l1(v1,"getAgentContext",null),iX=l1(v1,"getAutoresearchStatus",null),rX=l1(v1,"stopAutoresearch",{status:"ok"}),oX=l1(v1,"dismissAutoresearch",{status:"ok"}),vY=l1(v1,"getAgentModels",{current:null,models:[]}),bY=l1(v1,"getActiveChatAgents",{chats:[]}),L3=l1(v1,"getChatBranches",{chats:[]}),sX=l1(v1,"renameChatBranch",null),aX=l1(v1,"pruneChatBranch",null),tX=l1(v1,"restoreChatBranch",null),gY=l1(v1,"getAgentQueueState",{count:0}),mY=l1(v1,"steerAgentQueueItem",{removed:!1,queued:"steer"}),pY=l1(v1,"removeAgentQueueItem",{removed:!1}),eX=l1(v1,"streamSidePrompt",null);if(window.marked)marked.setOptions({breaks:!0,gfm:!0});i0.register(C6);i0.register(V$);i0.register(X$);i0.register(U$);i0.register(L$);i0.register(W$);i0.register(z$);i0.register(F$);i0.register(J$);i0.register(A$);i0.register(E$);i0.register(j$);S6();i0.register(u6);i0.register(f6);function _V({locationParams:_,navigate:$}){let{currentChatJid:j,chatOnlyMode:Z,panePopoutMode:Y,panePopoutPath:Q,panePopoutLabel:q,branchLoaderMode:N,branchLoaderSourceChatJid:K}=m0(()=>AZ(_),[_]),[G,X]=m("disconnected"),[V,U]=m(()=>e_()),[L,F]=m(null),[J,H]=m(null),[W,D]=m(!1),[E,C]=m("current"),[P,v]=m([]),[p,M]=m([]),[k,B]=m(null),{agentStatus:I,setAgentStatus:w,agentDraft:c,setAgentDraft:b,agentPlan:n,setAgentPlan:d,agentThought:r,setAgentThought:t,pendingRequest:a,setPendingRequest:_0,currentTurnId:N0,setCurrentTurnId:G0,steerQueuedTurnId:k0,setSteerQueuedTurnId:J0,lastAgentEventRef:X0,lastSilenceNoticeRef:x0,isAgentRunningRef:B0,draftBufferRef:D0,thoughtBufferRef:S0,pendingRequestRef:z0,stalledPostIdRef:M0,currentTurnIdRef:Z0,steerQueuedTurnIdRef:A0,thoughtExpandedRef:v0,draftExpandedRef:h0}=g7(),[d0,c0]=m({}),[w0,b0]=m(null),[s0,r0]=m(null),[U0,C0]=m(!1),[t0,s]=m(null),[q0,h]=m([]),[i,H0]=m([]),[T0,y0]=m(null),[V0,P0]=m(()=>new Map),[l0,O0]=m(()=>new Set),[g0,I0]=m([]),[Y0,S]=m(!1),[e,F0]=m(()=>DZ()),[E0,o0]=m(null),Z1=y(new Set),q1=m0(()=>q0.find((K0)=>K0?.chat_jid===j)||null,[q0,j]),u1=m0(()=>i.find((K0)=>K0?.chat_jid===j)||q1||null,[q1,i,j]),n1=u1?.root_chat_jid||q1?.root_chat_jid||j,E_=OZ(E),[d1,S1]=m(()=>({status:N?"running":"idle",message:N?"Preparing a new chat branch…":""})),b1=g0.length,f1=y(new Set),$1=y([]),g1=y(new Set),m_=y(0),V_=y({inFlight:!1,lastAttemptAt:0,turnId:null});f1.current=new Set(g0.map((K0)=>K0.row_id)),$1.current=g0;let{notificationsEnabled:p_,notificationPermission:R_,toggleNotifications:J1,notify:i1}=v7(),[O1,V1]=m(()=>new Set),[L1,Q_]=m(()=>K5("workspaceOpen",!0)),q_=y(null),{editorOpen:T1,tabStripTabs:m1,tabStripActiveId:U1,previewTabs:E1,tabPaneOverrides:r1,openEditor:p1,closeEditor:h_,handleTabClose:k_,handleTabActivate:c_,handleTabCloseOthers:U_,handleTabCloseAll:Q4,handleTabTogglePin:L_,handleTabTogglePreview:I_,handleTabEditSource:k4,revealInExplorer:I4}=p7({onTabClosed:(K0)=>q_.current?.(K0)}),Y1=y(null),D1=y(null),q4=y(null),o1=y(null),W_=i0.getDockPanes().length>0,[h1,F1]=m(!1),x1=x(()=>F1((K0)=>!K0),[]),N1=x(()=>{p1($5,{label:"Terminal"})},[p1]),s1=x(()=>{p1(Z4,{label:"VNC"})},[p1]),a1=m0(()=>NZ(m1,U1),[U1,m1]),t1=m0(()=>KZ(r1,U1),[r1,U1]),u_=m0(()=>GZ(q,a1,Q),[a1,q,Q]),w1=m0(()=>XZ(m1,E1,U1),[E1,U1,m1]),y1=m0(()=>VZ(Q,Z4),[Q]),e1=m0(()=>UZ(Q,$5,w1,y1),[y1,w1,Q]),M_=LZ(Y,Z,T1,W_,h1),[W1,B_]=m(!1),K1=y(!1),T_=x(()=>{if(!T1||Z)return;if(K1.current=h1,h1)F1(!1);B_(!0)},[T1,Z,h1]),z_=x(()=>{if(!W1)return;if(B_(!1),K1.current)F1(!0),K1.current=!1},[W1]),M4=x(()=>{if(W1)z_();else T_()},[W1,T_,z_]);g(()=>{if(W1&&!T1)z_()},[W1,T1,z_]),g(()=>{if(!Y||!Q)return;if(_1.getActiveId()===Q)return;p1(Q,q?{label:q}:void 0)},[p1,q,Y,Q]),g(()=>{let K0=Y1.current;if(!K0)return;if(D1.current)D1.current.dispose(),D1.current=null;let p0=U1;if(!p0)return;let j1={path:p0,mode:"edit"},P1=(t1?i0.get(t1):null)||i0.resolve(j1)||i0.get("editor");if(!P1){K0.innerHTML='<div style="padding:2em;color:var(--text-secondary);text-align:center;">No editor available for this file.</div>';return}let a0=P1.mount(K0,j1);D1.current=a0,a0.onDirtyChange?.((C1)=>{_1.setDirty(p0,C1)}),a0.onSaveRequest?.(()=>{}),a0.onClose?.(()=>{h_()});let O_=_1.getViewState(p0);if(O_&&typeof a0.restoreViewState==="function")requestAnimationFrame(()=>a0.restoreViewState(O_));if(typeof a0.onViewStateChange==="function")a0.onViewStateChange((C1)=>{_1.saveViewState(p0,C1)});return requestAnimationFrame(()=>a0.focus()),()=>{if(D1.current===a0)a0.dispose(),D1.current=null}},[U1,t1,h_]);let p4=x(async(K0)=>{let p0=typeof U1==="string"?U1.trim():"",j1=D1.current;if(!p0||!j1?.setContent)return;if(typeof j1.isDirty==="function"&&j1.isDirty())return;if(!(Array.isArray(K0)&&K0.length>0?K0.some((a0)=>{let O_=Array.isArray(a0?.changed_paths)?a0.changed_paths.map((c1)=>typeof c1==="string"?c1.trim():"").filter(Boolean):[];if(O_.length>0)return O_.some((c1)=>c1==="."||c1===p0);let C1=typeof a0?.path==="string"?a0.path.trim():"";return!C1||C1==="."||C1===p0}):!0))return;try{let a0=await k5(p0,1e6,"edit"),O_=typeof a0?.text==="string"?a0.text:"",C1=typeof a0?.mtime==="string"&&a0.mtime.trim()?a0.mtime.trim():new Date().toISOString();j1.setContent(O_,C1)}catch(a0){console.warn("[workspace_update] Failed to refresh active pane:",a0)}},[U1]);g(()=>{let K0=q4.current;if(o1.current)o1.current.dispose(),o1.current=null;if(!K0||!W_||!h1)return;let p0=i0.getDockPanes()[0];if(!p0){K0.innerHTML='<div class="terminal-placeholder">No dock pane available.</div>';return}let j1=p0.mount(K0,{mode:"view"});return o1.current=j1,requestAnimationFrame(()=>j1.focus?.()),()=>{if(o1.current===j1)j1.dispose(),o1.current=null}},[W_,h1]);let[x_,f_]=m({name:"You",avatar_url:null,avatar_background:null}),T4=y(null),l_=y(!1),h4=y(!1),N4=y(!1),K4=y(null),F_=y(j),c4=y(new Map),l4=y(j),z5=y(0),H1=y(0),G4=y({}),n4=y({name:null,avatar_url:null}),y_=y({currentHashtag:null,searchQuery:null,searchOpen:!1}),__=y(null),n_=y(null),x4=y(0),y4=y(0),d4=y(0),P4=y(null),X4=y(null),F5=y(null),V4=y(null),C4=y(0),H_=y({title:null,avatarBase:null}),A=y(null),T=y(!1),[f,u]=m(!1),o=y(0),[Q0,L0]=m(!1),[W0,$0]=m(""),u0=m0(()=>u8(W0,u1?.agent_name||""),[u1?.agent_name,W0]),k1=y(null);r7(30000),g(()=>{if(!Q0)return;requestAnimationFrame(()=>{if(Q0)k1.current?.focus(),k1.current?.select?.()})},[Q0]),g(()=>{return Z7()},[]),g(()=>{return rj(U)},[]),g(()=>{Q1("workspaceOpen",String(L1))},[L1]),g(()=>{return ZZ()},[]),g(()=>{if(!e){Q1(BTW_SESSION_KEY,"");return}Q1(BTW_SESSION_KEY,JSON.stringify({question:e.question||"",answer:e.answer||"",thinking:e.thinking||"",error:e.error||null,status:e.status||"success"}))},[e]),g(()=>{G4.current=d0||{}},[d0]),g(()=>{F_.current=j},[j]),g(()=>{n4.current=x_||{name:"You",avatar_url:null,avatar_background:null}},[x_]);let J_=x((K0,p0,j1=null)=>{if(typeof document>"u")return;let P1=(K0||"").trim()||"PiClaw";if(H_.current.title!==P1){document.title=P1;let s_=document.querySelector('meta[name="apple-mobile-web-app-title"]');if(s_&&s_.getAttribute("content")!==P1)s_.setAttribute("content",P1);H_.current.title=P1}let a0=document.getElementById("dynamic-favicon");if(!a0)return;let O_=a0.getAttribute("data-default")||a0.getAttribute("href")||"/favicon.ico",C1=p0||O_,c1=p0?`${C1}|${j1||""}`:C1;if(H_.current.avatarBase!==c1){let s_=p0?`${C1}${C1.includes("?")?"&":"?"}v=${j1||Date.now()}`:C1;a0.setAttribute("href",s_),H_.current.avatarBase=c1}},[]),{addFileRef:$_,removeFileRef:n5,clearFileRefs:O,setFileRefsFromCompose:R,showIntentToast:l,openFileFromPill:j0,attachActiveEditorFile:R0,addMessageRef:B1,scrollToMessage:A1,removeMessageRef:R1,clearMessageRefs:d_,setMessageRefsFromCompose:S4,handleComposeSubmitError:i4}=Cj({setIntentToast:B,intentToastTimerRef:A,editorOpen:T1,openEditor:p1,resolvePane:(K0)=>i0.resolve(K0),tabStripActiveId:U1,setFileRefs:v,setMessageRefs:M,currentChatJid:j,getThread:U6,setPosts:P_});q_.current=n5;let w4=x((K0={})=>{let p0=Date.now();if(X0.current=p0,K0.running)B0.current=!0,S((j1)=>j1?j1:!0);if(K0.clearSilence)x0.current=0},[S]),j_=x(()=>{if(V4.current)clearTimeout(V4.current),V4.current=null;C4.current=0},[]);g(()=>()=>{j_()},[j_]);let i_=x(()=>{j_(),w((K0)=>{if(!K0)return K0;if(!(K0.last_activity||K0.lastActivity))return K0;let{last_activity:p0,lastActivity:j1,...P1}=K0;return P1})},[j_]),i8=x((K0)=>{if(!K0)return;j_();let p0=Date.now();C4.current=p0,w({type:K0.type||"active",last_activity:!0}),V4.current=setTimeout(()=>{if(C4.current!==p0)return;w((j1)=>{if(!j1||!(j1.last_activity||j1.lastActivity))return j1;return null})},n7)},[j_]),U4=x(()=>{B0.current=!1,S(!1),X0.current=null,x0.current=0,D0.current="",S0.current="",z0.current=null,X4.current=null,Z0.current=null,A0.current=null,K4.current=null,V_.current={inFlight:!1,lastAttemptAt:0,turnId:null},j_(),G0(null),J0(null),v0.current=!1,h0.current=!1},[j_,G0,J0,S]),{clearQueuedSteerStateIfStale:I1,snapshotCurrentChatPaneState:H5,restoreChatPaneState:r8,setActiveTurn:d5,notifyForFinalResponse:o8}=mZ({isAgentTurnActive:Y0,steerQueuedTurnId:k0,currentTurnId:N0,steerQueuedTurnIdRef:A0,setSteerQueuedTurnId:J0,agentStatus:I,agentDraft:c,agentPlan:n,agentThought:r,pendingRequest:a,pendingRequestRef:z0,followupQueueItems:g0,activeModel:w0,activeThinkingLevel:s0,supportsThinking:U0,activeModelUsage:t0,contextUsage:T0,isAgentRunningRef:B0,wasAgentActiveRef:N4,draftBufferRef:D0,thoughtBufferRef:S0,lastAgentEventRef:X0,lastSilenceNoticeRef:x0,lastAgentResponseRef:X4,currentTurnIdRef:Z0,thoughtExpandedRef:v0,draftExpandedRef:h0,agentStatusRef:K4,silentRecoveryRef:V_,clearLastActivityTimer:j_,setIsAgentTurnActive:S,setAgentStatus:w,setAgentDraft:b,setAgentPlan:d,setAgentThought:t,setPendingRequest:_0,setCurrentTurnId:G0,setFollowupQueueItems:I0,setActiveModel:b0,setActiveThinkingLevel:r0,setSupportsThinking:C0,setActiveModelUsage:s,setContextUsage:y0,lastNotifiedIdRef:P4,agentsRef:G4,notify:i1}),R4=x(async(K0,p0)=>{await s7({panelKey:K0,expanded:p0,currentTurnIdRef:Z0,thoughtExpandedRef:v0,draftExpandedRef:h0,setAgentThoughtVisibility:dX,getAgentThought:nX,thoughtBufferRef:S0,draftBufferRef:D0,setAgentThought:t,setAgentDraft:b})},[]),Z_=y(null),L4=x(()=>{let K0=__.current;if(!K0)return;if(!(Math.abs(K0.scrollTop)>150))K0.scrollTop=0},[]);Z_.current=L4;let W3=x((K0)=>{let p0=__.current;if(!p0||typeof K0!=="function"){K0?.();return}let{currentHashtag:j1,searchQuery:P1,searchOpen:a0}=y_.current||{},O_=!((P1||a0)&&!j1),C1=O_?p0.scrollHeight-p0.scrollTop:p0.scrollTop;K0(),requestAnimationFrame(()=>{let c1=__.current;if(!c1)return;if(O_){let s_=Math.max(c1.scrollHeight-C1,0);c1.scrollTop=s_}else{let s_=Math.max(c1.scrollHeight-c1.clientHeight,0),SQ=Math.min(C1,s_);c1.scrollTop=SQ}})},[]),r4=x((K0)=>{let p0=__.current;if(!p0||typeof K0!=="function"){K0?.();return}let j1=p0.scrollTop;K0(),requestAnimationFrame(()=>{let P1=__.current;if(!P1)return;let a0=Math.max(P1.scrollHeight-P1.clientHeight,0);P1.scrollTop=Math.min(j1,a0)})},[]),B3=x((K0)=>Q9(K0,f1.current),[]),{posts:s8,setPosts:P_,hasMore:hY,setHasMore:z3,hasMoreRef:F3,loadPosts:r_,refreshTimeline:a8,loadMore:cY,loadMoreRef:H3}=b7({preserveTimelineScroll:W3,preserveTimelineScrollTop:r4,chatJid:j}),i5=m0(()=>B3(s8),[s8,g0,B3]),lY=x(()=>{let K0=M0.current;if(!K0)return;P_((p0)=>p0?p0.filter((j1)=>j1.id!==K0):p0),M0.current=null},[P_]),{handleSplitterMouseDown:nY,handleSplitterTouchStart:dY,handleEditorSplitterMouseDown:iY,handleEditorSplitterTouchStart:rY,handleDockSplitterMouseDown:oY,handleDockSplitterTouchStart:sY}=m7({appShellRef:n_,sidebarWidthRef:x4,editorWidthRef:y4,dockHeightRef:d4}),aY=x(()=>{_Z({isAgentRunningRef:B0,lastSilenceNoticeRef:x0,lastAgentEventRef:X0,currentTurnIdRef:Z0,thoughtExpandedRef:v0,draftExpandedRef:h0,draftBufferRef:D0,thoughtBufferRef:S0,pendingRequestRef:z0,lastAgentResponseRef:X4,stalledPostIdRef:M0,scrollToBottomRef:Z_,setCurrentTurnId:G0,setAgentDraft:b,setAgentPlan:d,setAgentThought:t,setPendingRequest:_0,setAgentStatus:w,setPosts:P_,dedupePosts:m5})},[G0]);g(()=>{y_.current={currentHashtag:L,searchQuery:J,searchOpen:W}},[L,J,W]);let{refreshQueueState:o_,refreshContextUsage:J5,refreshAutoresearchStatus:O5,refreshAgentStatus:J3,handleUiVersionDrift:tY,handleConnectionStatusChange:eY}=$Z({currentChatJid:j,activeChatJidRef:F_,queueRefreshGenRef:m_,dismissedQueueRowIdsRef:g1,getAgentQueueState:gY,setFollowupQueueItems:I0,clearQueuedSteerStateIfStale:I1,getAgentContext:U3,setContextUsage:y0,getAutoresearchStatus:iX,setExtensionStatusPanels:P0,setPendingExtensionPanelActions:O0,getAgentStatus:V3,wasAgentActiveRef:N4,viewStateRef:y_,refreshTimeline:a8,clearAgentRunState:U4,agentStatusRef:K4,pendingRequestRef:z0,thoughtBufferRef:S0,draftBufferRef:D0,setAgentStatus:w,setAgentDraft:b,setAgentPlan:d,setAgentThought:t,setPendingRequest:_0,setActiveTurn:d5,noteAgentActivity:w4,clearLastActivityFlag:i_,isAgentRunningRef:B0,currentTurnIdRef:Z0,silentRecoveryRef:V_,silenceRefreshMs:l7,lastAgentEventRef:X0,lastSilenceNoticeRef:x0,silenceWarningMs:h7,silenceFinalizeMs:c7,isCompactionStatus:O4,serverVersionContext:{currentAppAssetVersion:hX,staleUiVersionRef:T4,staleUiReloadScheduledRef:l_,tabStoreHasUnsaved:()=>_1.hasUnsaved(),isAgentRunningRef:B0,pendingRequestRef:z0,showIntentToast:l},setConnectionStatus:X,setPendingRequestForConnection:_0,hasConnectedOnceRef:h4}),_Q=x(async(K0)=>{await Mj({hashtag:K0,setCurrentHashtag:F,setPosts:P_,loadPosts:r_})},[r_]),$Q=x(async()=>{await Tj({setCurrentHashtag:F,setSearchQuery:H,setPosts:P_,loadPosts:r_})},[r_]),jQ=x(async(K0,p0=E)=>{await xj({query:K0,scope:p0,currentChatJid:j,currentRootChatJid:n1,searchPosts:fY,setSearchScope:C,setSearchQuery:H,setCurrentHashtag:F,setPosts:P_,setHasMore:z3})},[j,n1,E]),ZQ=x(()=>{D(!0),H(null),F(null),C("current"),P_([])},[]),YQ=x(()=>{D(!1),H(null),r_()},[r_]),jV=x(()=>{},[]),QQ=!L&&!J&&!W,qQ=x(async(K0)=>{await yj({post:K0,posts:i5,currentChatJid:j,deletePost:cX,preserveTimelineScrollTop:r4,setPosts:P_,setRemovingPostIds:V1,hasMoreRef:F3,loadMoreRef:H3})},[j,i5,r4]),{updateAgentProfile:NQ,updateUserProfile:KQ,applyModelState:O3,refreshModelState:ZV,refreshActiveChatAgents:r5,refreshCurrentChatBranches:o5,refreshModelAndQueueState:D3}=u9({getAgents:lX,setAgents:c0,setUserProfile:f_,applyBranding:J_,readStoredNumber:R5,sidebarWidthRef:x4,appShellRef:n_,currentChatJid:j,currentRootChatJid:n1,getAgentModels:vY,getActiveChatAgents:bY,getChatBranches:L3,activeChatJidRef:F_,setActiveChatAgents:h,setCurrentChatBranches:H0,setActiveModel:b0,setActiveThinkingLevel:r0,setSupportsThinking:C0,setActiveModelUsage:s,agentsRef:G4,refreshQueueState:o_,refreshContextUsage:J5,refreshAutoresearchStatus:O5}),A3=Y0||I!==null,GQ=x((K0)=>{Jj({queuedItem:K0,followupQueueItemsRef:$1,dismissedQueueRowIdsRef:g1,currentChatJid:j,refreshQueueState:o_,setFollowupQueueItems:I0,showIntentToast:l,steerAgentQueueItem:mY,removeAgentQueueItem:pY})},[j,o_,I0,l]),XQ=x((K0)=>{Oj({queuedItem:K0,followupQueueItemsRef:$1,dismissedQueueRowIdsRef:g1,currentChatJid:j,refreshQueueState:o_,setFollowupQueueItems:I0,showIntentToast:l,clearQueuedSteerStateIfStale:I1,steerAgentQueueItem:mY,removeAgentQueueItem:pY})},[I1,j,o_,I0,l]),E3=x((K0)=>{F9({response:K0,refreshActiveChatAgents:r5,refreshCurrentChatBranches:o5,refreshContextUsage:J5,refreshAutoresearchStatus:O5,refreshQueueState:o_})},[r5,O5,o5,J5,o_]),{handleExtensionPanelAction:VQ,closeBtwPanel:UQ,handleBtwIntercept:LQ,handleBtwRetry:WQ,handleBtwInject:BQ,handleOpenFloatingWidget:zQ,handleCloseFloatingWidget:FQ,handleFloatingWidgetEvent:HQ}=kj({currentChatJid:j,currentRootChatJid:n1,isComposeBoxAgentActive:A3,showIntentToast:l,setPendingExtensionPanelActions:O0,refreshAutoresearchStatus:O5,stopAutoresearch:rX,dismissAutoresearch:oX,streamSidePrompt:eX,btwAbortRef:F5,btwSession:e,setBtwSession:F0,sendAgentMessage:e4,handleMessageResponse:E3,dismissedLiveWidgetKeysRef:Z1,setFloatingWidget:o0,getAgentStatus:V3,getAgentContext:U3,getAgentQueueState:gY,getAgentModels:vY,getActiveChatAgents:bY,getChatBranches:L3,getTimeline:u4,rawPosts:s8,activeChatAgents:q0,currentChatBranches:i,contextUsage:T0,followupQueueItemsRef:$1,activeModel:w0,activeThinkingLevel:s0,supportsThinking:U0,isAgentTurnActive:Y0}),{refreshCurrentView:JQ,applyLiveGeneratedWidgetUpdate:OQ}=Sj({currentChatJid:j,currentRootChatJid:n1,currentHashtag:L,searchQuery:J,searchScope:E,loadPosts:r_,searchPosts:fY,setPosts:P_,setHasMore:z3,scrollToBottom:L4,setExtensionStatusPanels:P0,setPendingExtensionPanelActions:O0,paneStateOwnerChatJidRef:l4,chatPaneStateByChatRef:c4,snapshotCurrentChatPaneState:H5,restoreChatPaneState:r8,dismissedQueueRowIdsRef:g1,refreshQueueState:o_,refreshAgentStatus:J3,refreshContextUsage:J5,viewStateRef:y_,refreshTimeline:a8,refreshModelAndQueueState:D3,setFloatingWidget:o0,dismissedLiveWidgetKeysRef:Z1});sj({currentChatJid:j,posts:i5,scrollToMessage:A1,handleConnectionStatusChange:eY,loadPosts:r_,refreshCurrentView:JQ,updateAgentProfile:NQ,updateUserProfile:KQ,currentTurnIdRef:Z0,activeChatJidRef:F_,pendingRequestRef:z0,draftBufferRef:D0,thoughtBufferRef:S0,steerQueuedTurnIdRef:A0,thoughtExpandedRef:v0,draftExpandedRef:h0,draftThrottleRef:z5,thoughtThrottleRef:H1,viewStateRef:y_,followupQueueItemsRef:$1,dismissedQueueRowIdsRef:g1,scrollToBottomRef:Z_,hasMoreRef:F3,loadMoreRef:H3,lastAgentResponseRef:X4,wasAgentActiveRef:N4,setActiveTurn:d5,applyLiveGeneratedWidgetUpdate:OQ,setFloatingWidget:o0,clearLastActivityFlag:i_,handleUiVersionDrift:tY,setAgentStatus:w,setAgentDraft:b,setAgentPlan:d,setAgentThought:t,setPendingRequest:_0,clearAgentRunState:U4,getAgentStatus:V3,noteAgentActivity:w4,showLastActivity:i8,refreshTimeline:a8,refreshModelAndQueueState:D3,refreshActiveChatAgents:r5,refreshCurrentChatBranches:o5,notifyForFinalResponse:o8,setContextUsage:y0,refreshContextUsage:J5,refreshQueueState:o_,setFollowupQueueItems:I0,clearQueuedSteerStateIfStale:I1,setSteerQueuedTurnId:J0,applyModelState:O3,getAgentContext:U3,setExtensionStatusPanels:P0,setPendingExtensionPanelActions:O0,refreshActiveEditorFromWorkspace:p4,showIntentToast:l,removeStalledPost:lY,setPosts:P_,preserveTimelineScrollTop:r4,finalizeStalledResponse:aY,connectionStatus:G,agentStatus:I,refreshAgentStatus:J3,refreshAutoresearchStatus:O5});let{toggleWorkspace:DQ,handleBranchPickerChange:AQ,openRenameCurrentBranchForm:EQ,closeRenameCurrentBranchForm:kQ,handleRenameCurrentBranch:IQ,handlePruneCurrentBranch:MQ,handleRestoreBranch:TQ,handleCreateSessionFromCompose:xQ,handlePopOutPane:yQ,handlePopOutChat:PQ}=fZ({setWorkspaceOpen:Q_,currentChatJid:j,chatOnlyMode:Z,navigate:$,currentBranchRecord:u1,renameBranchInFlightRef:T,renameBranchLockUntilRef:o,getFormLock:JZ,setRenameBranchNameDraft:$0,setIsRenameBranchFormOpen:L0,setIsRenamingBranch:u,renameChatBranch:sX,refreshActiveChatAgents:r5,refreshCurrentChatBranches:o5,showIntentToast:l,currentChatBranches:i,activeChatAgents:q0,pruneChatBranch:aX,restoreChatBranch:tX,branchLoaderMode:N,branchLoaderSourceChatJid:K,forkChatBranch:B6,setBranchLoaderState:S1,currentRootChatJid:n1,isWebAppMode:V,getActiveChatAgents:W6,getChatBranches:L3,setActiveChatAgents:h,setCurrentChatBranches:H0,openEditor:p1,tabStripActiveId:U1,editorInstanceRef:D1,dockInstanceRef:o1,terminalTabPath:$5,dockVisible:h1,resolveTab:(K0)=>_1.get(K0),closeTab:k_,setDockVisible:F1,editorOpen:T1,shellElement:n_.current,editorWidthRef:y4,dockHeightRef:d4,sidebarWidthRef:x4,readStoredNumber:R5});g(()=>{if(!W_||Z)return;return QZ(x1)},[x1,W_,Z]),g(()=>{if(Z)return;return qZ({toggleZenMode:M4,exitZenMode:z_,zenMode:W1,isZenModeActive:()=>W1})},[M4,z_,W1,Z]);let CQ=Boolean(k0&&k0===(I?.turn_id||N0)),k3=hZ({branchLoaderMode:N,panePopoutMode:Y});if(k3==="branch-loader")return cZ(d1);if(k3==="pane-popout")return lZ({appShellRef:n_,editorOpen:T1,hidePanePopoutControls:e1,panePopoutHasMenuActions:w1,panePopoutTitle:u_,tabStripTabs:m1,tabStripActiveId:U1,handleTabActivate:c_,previewTabs:E1,handleTabTogglePreview:I_,editorContainerRef:Y1,getPaneContent:()=>D1.current?.getContent?.(),panePopoutPath:Q});return uY({appShellRef:n_,workspaceOpen:L1,editorOpen:T1,chatOnlyMode:Z,zenMode:W1,isRenameBranchFormOpen:Q0,closeRenameCurrentBranchForm:kQ,handleRenameCurrentBranch:IQ,renameBranchNameDraft:W0,renameBranchNameInputRef:k1,setRenameBranchNameDraft:$0,renameBranchDraftState:u0,isRenamingBranch:f,addFileRef:$_,openEditor:p1,openTerminalTab:N1,openVncTab:s1,hasDockPanes:W_,toggleDock:x1,dockVisible:h1,handleSplitterMouseDown:nY,handleSplitterTouchStart:dY,showEditorPaneContainer:M_,tabStripTabs:m1,tabStripActiveId:U1,handleTabActivate:c_,handleTabClose:k_,handleTabCloseOthers:U_,handleTabCloseAll:Q4,handleTabTogglePin:L_,handleTabTogglePreview:I_,handleTabEditSource:k4,previewTabs:E1,tabPaneOverrides:r1,toggleZenMode:M4,handlePopOutPane:yQ,isWebAppMode:V,editorContainerRef:Y1,editorInstanceRef:D1,handleDockSplitterMouseDown:oY,handleDockSplitterTouchStart:sY,TERMINAL_TAB_PATH:$5,dockContainerRef:q4,handleEditorSplitterMouseDown:iY,handleEditorSplitterTouchStart:rY,searchQuery:J,isIOSDevice:i7,currentBranchRecord:u1,currentChatJid:j,currentChatBranches:i,handleBranchPickerChange:AQ,formatBranchPickerLabel:f8,openRenameCurrentBranchForm:EQ,handlePruneCurrentBranch:MQ,currentHashtag:L,handleBackToTimeline:$Q,activeSearchScopeLabel:E_,posts:i5,isMainTimelineView:QQ,hasMore:hY,loadMore:cY,timelineRef:__,handleHashtagClick:_Q,addMessageRef:B1,scrollToMessage:A1,openFileFromPill:j0,handleDeletePost:qQ,handleOpenFloatingWidget:zQ,agents:d0,userProfile:x_,removingPostIds:O1,agentStatus:I,isCompactionStatus:O4,agentDraft:c,agentPlan:n,agentThought:r,pendingRequest:a,intentToast:k,currentTurnId:N0,steerQueued:CQ,handlePanelToggle:R4,btwSession:e,closeBtwPanel:UQ,handleBtwRetry:WQ,handleBtwInject:BQ,floatingWidget:E0,handleCloseFloatingWidget:FQ,handleFloatingWidgetEvent:HQ,extensionStatusPanels:V0,pendingExtensionPanelActions:l0,handleExtensionPanelAction:VQ,searchOpen:W,followupQueueItems:g0,handleInjectQueuedFollowup:GQ,handleRemoveQueuedFollowup:XQ,viewStateRef:y_,loadPosts:r_,scrollToBottom:L4,searchScope:E,handleSearch:jQ,setSearchScope:C,enterSearchMode:ZQ,exitSearchMode:YQ,fileRefs:P,removeFileRef:n5,clearFileRefs:O,setFileRefsFromCompose:R,messageRefs:p,removeMessageRef:R1,clearMessageRefs:d_,setMessageRefsFromCompose:S4,handleCreateSessionFromCompose:xQ,handleRestoreBranch:TQ,attachActiveEditorFile:R0,followupQueueCount:b1,handleBtwIntercept:LQ,handleMessageResponse:E3,handleComposeSubmitError:i4,handlePopOutChat:PQ,isComposeBoxAgentActive:A3,activeChatAgents:q0,connectionStatus:G,activeModel:w0,activeModelUsage:t0,activeThinkingLevel:s0,supportsThinking:U0,contextUsage:T0,notificationsEnabled:p_,notificationPermission:R_,handleToggleNotifications:J1,setActiveModel:b0,applyModelState:O3,setPendingRequest:_0,pendingRequestRef:z0,toggleWorkspace:DQ})}function $V(){let[_,$]=m(()=>typeof window>"u"?"http://localhost/":window.location.href);g(()=>{if(typeof window>"u")return;let Y=()=>$(window.location.href);return window.addEventListener("popstate",Y),()=>window.removeEventListener("popstate",Y)},[]);let j=x((Y,Q={})=>{if(typeof window>"u")return;let{replace:q=!1}=Q||{},N=new URL(String(Y||""),window.location.href).toString();if(q)window.history.replaceState(null,"",N);else window.history.pushState(null,"",N);$(window.location.href)},[]),Z=m0(()=>new URL(_).searchParams,[_]);return z`<${_V} locationParams=${Z} navigate=${j} />`}z4(z`<${$V} />`,document.getElementById("app"));

//# debugId=665454A39AA9F21264756E2164756E21
//# sourceMappingURL=app.bundle.js.map
