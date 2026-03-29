var lq=Object.defineProperty;var nq=(_)=>_;function dq(_,$){this[_]=nq.bind(null,$)}var iq=(_,$)=>{for(var j in $)lq(_,j,{get:$[j],enumerable:!0,configurable:!0,set:dq.bind($,j)})};var q8,X1,l3,rq,J4,S3,n3,d3,i3,G6,Y6,q6,r3,j8={},Z8=[],oq=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,Q8=Array.isArray;function Y4(_,$){for(var j in $)_[j]=$[j];return _}function X6(_){_&&_.parentNode&&_.parentNode.removeChild(_)}function N8(_,$,j){var Z,Y,q,Q={};for(q in $)q=="key"?Z=$[q]:q=="ref"?Y=$[q]:Q[q]=$[q];if(arguments.length>2&&(Q.children=arguments.length>3?q8.call(arguments,2):j),typeof _=="function"&&_.defaultProps!=null)for(q in _.defaultProps)Q[q]===void 0&&(Q[q]=_.defaultProps[q]);return _8(_,Q,Z,Y,null)}function _8(_,$,j,Z,Y){var q={type:_,props:$,key:j,ref:Z,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:Y==null?++l3:Y,__i:-1,__u:0};return Y==null&&X1.vnode!=null&&X1.vnode(q),q}function K8(_){return _.children}function _5(_,$){this.props=_,this.context=$}function $5(_,$){if($==null)return _.__?$5(_.__,_.__i+1):null;for(var j;$<_.__k.length;$++)if((j=_.__k[$])!=null&&j.__e!=null)return j.__e;return typeof _.type=="function"?$5(_):null}function sq(_){if(_.__P&&_.__d){var $=_.__v,j=$.__e,Z=[],Y=[],q=Y4({},$);q.__v=$.__v+1,X1.vnode&&X1.vnode(q),V6(_.__P,q,$,_.__n,_.__P.namespaceURI,32&$.__u?[j]:null,Z,j==null?$5($):j,!!(32&$.__u),Y),q.__v=$.__v,q.__.__k[q.__i]=q,t3(Z,q,Y),$.__e=$.__=null,q.__e!=j&&o3(q)}}function o3(_){if((_=_.__)!=null&&_.__c!=null)return _.__e=_.__c.base=null,_.__k.some(function($){if($!=null&&$.__e!=null)return _.__e=_.__c.base=$.__e}),o3(_)}function Q6(_){(!_.__d&&(_.__d=!0)&&J4.push(_)&&!Y8.__r++||S3!=X1.debounceRendering)&&((S3=X1.debounceRendering)||n3)(Y8)}function Y8(){try{for(var _,$=1;J4.length;)J4.length>$&&J4.sort(d3),_=J4.shift(),$=J4.length,sq(_)}finally{J4.length=Y8.__r=0}}function s3(_,$,j,Z,Y,q,Q,N,K,G,V){var X,U,L,H,O,J,W,D=Z&&Z.__k||Z8,E=$.length;for(K=aq(j,$,D,K,E),X=0;X<E;X++)(L=j.__k[X])!=null&&(U=L.__i!=-1&&D[L.__i]||j8,L.__i=X,J=V6(_,L,U,Y,q,Q,N,K,G,V),H=L.__e,L.ref&&U.ref!=L.ref&&(U.ref&&U6(U.ref,null,L),V.push(L.ref,L.__c||H,L)),O==null&&H!=null&&(O=H),(W=!!(4&L.__u))||U.__k===L.__k?K=a3(L,K,_,W):typeof L.type=="function"&&J!==void 0?K=J:H&&(K=H.nextSibling),L.__u&=-7);return j.__e=O,K}function aq(_,$,j,Z,Y){var q,Q,N,K,G,V=j.length,X=V,U=0;for(_.__k=Array(Y),q=0;q<Y;q++)(Q=$[q])!=null&&typeof Q!="boolean"&&typeof Q!="function"?(typeof Q=="string"||typeof Q=="number"||typeof Q=="bigint"||Q.constructor==String?Q=_.__k[q]=_8(null,Q,null,null,null):Q8(Q)?Q=_.__k[q]=_8(K8,{children:Q},null,null,null):Q.constructor===void 0&&Q.__b>0?Q=_.__k[q]=_8(Q.type,Q.props,Q.key,Q.ref?Q.ref:null,Q.__v):_.__k[q]=Q,K=q+U,Q.__=_,Q.__b=_.__b+1,N=null,(G=Q.__i=tq(Q,j,K,X))!=-1&&(X--,(N=j[G])&&(N.__u|=2)),N==null||N.__v==null?(G==-1&&(Y>V?U--:Y<V&&U++),typeof Q.type!="function"&&(Q.__u|=4)):G!=K&&(G==K-1?U--:G==K+1?U++:(G>K?U--:U++,Q.__u|=4))):_.__k[q]=null;if(X)for(q=0;q<V;q++)(N=j[q])!=null&&(2&N.__u)==0&&(N.__e==Z&&(Z=$5(N)),_2(N,N));return Z}function a3(_,$,j,Z){var Y,q;if(typeof _.type=="function"){for(Y=_.__k,q=0;Y&&q<Y.length;q++)Y[q]&&(Y[q].__=_,$=a3(Y[q],$,j,Z));return $}_.__e!=$&&(Z&&($&&_.type&&!$.parentNode&&($=$5(_)),j.insertBefore(_.__e,$||null)),$=_.__e);do $=$&&$.nextSibling;while($!=null&&$.nodeType==8);return $}function tq(_,$,j,Z){var Y,q,Q,N=_.key,K=_.type,G=$[j],V=G!=null&&(2&G.__u)==0;if(G===null&&N==null||V&&N==G.key&&K==G.type)return j;if(Z>(V?1:0)){for(Y=j-1,q=j+1;Y>=0||q<$.length;)if((G=$[Q=Y>=0?Y--:q++])!=null&&(2&G.__u)==0&&N==G.key&&K==G.type)return Q}return-1}function w3(_,$,j){$[0]=="-"?_.setProperty($,j==null?"":j):_[$]=j==null?"":typeof j!="number"||oq.test($)?j:j+"px"}function e5(_,$,j,Z,Y){var q,Q;_:if($=="style")if(typeof j=="string")_.style.cssText=j;else{if(typeof Z=="string"&&(_.style.cssText=Z=""),Z)for($ in Z)j&&$ in j||w3(_.style,$,"");if(j)for($ in j)Z&&j[$]==Z[$]||w3(_.style,$,j[$])}else if($[0]=="o"&&$[1]=="n")q=$!=($=$.replace(i3,"$1")),Q=$.toLowerCase(),$=Q in _||$=="onFocusOut"||$=="onFocusIn"?Q.slice(2):$.slice(2),_.l||(_.l={}),_.l[$+q]=j,j?Z?j.u=Z.u:(j.u=G6,_.addEventListener($,q?q6:Y6,q)):_.removeEventListener($,q?q6:Y6,q);else{if(Y=="http://www.w3.org/2000/svg")$=$.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if($!="width"&&$!="height"&&$!="href"&&$!="list"&&$!="form"&&$!="tabIndex"&&$!="download"&&$!="rowSpan"&&$!="colSpan"&&$!="role"&&$!="popover"&&$ in _)try{_[$]=j==null?"":j;break _}catch(N){}typeof j=="function"||(j==null||j===!1&&$[4]!="-"?_.removeAttribute($):_.setAttribute($,$=="popover"&&j==1?"":j))}}function R3(_){return function($){if(this.l){var j=this.l[$.type+_];if($.t==null)$.t=G6++;else if($.t<j.u)return;return j(X1.event?X1.event($):$)}}}function V6(_,$,j,Z,Y,q,Q,N,K,G){var V,X,U,L,H,O,J,W,D,E,R,P,m,c,x,M=$.type;if($.constructor!==void 0)return null;128&j.__u&&(K=!!(32&j.__u),q=[N=$.__e=j.__e]),(V=X1.__b)&&V($);_:if(typeof M=="function")try{if(W=$.props,D=M.prototype&&M.prototype.render,E=(V=M.contextType)&&Z[V.__c],R=V?E?E.props.value:V.__:Z,j.__c?J=(X=$.__c=j.__c).__=X.__E:(D?$.__c=X=new M(W,R):($.__c=X=new _5(W,R),X.constructor=M,X.render=_Q),E&&E.sub(X),X.state||(X.state={}),X.__n=Z,U=X.__d=!0,X.__h=[],X._sb=[]),D&&X.__s==null&&(X.__s=X.state),D&&M.getDerivedStateFromProps!=null&&(X.__s==X.state&&(X.__s=Y4({},X.__s)),Y4(X.__s,M.getDerivedStateFromProps(W,X.__s))),L=X.props,H=X.state,X.__v=$,U)D&&M.getDerivedStateFromProps==null&&X.componentWillMount!=null&&X.componentWillMount(),D&&X.componentDidMount!=null&&X.__h.push(X.componentDidMount);else{if(D&&M.getDerivedStateFromProps==null&&W!==L&&X.componentWillReceiveProps!=null&&X.componentWillReceiveProps(W,R),$.__v==j.__v||!X.__e&&X.shouldComponentUpdate!=null&&X.shouldComponentUpdate(W,X.__s,R)===!1){$.__v!=j.__v&&(X.props=W,X.state=X.__s,X.__d=!1),$.__e=j.__e,$.__k=j.__k,$.__k.some(function(z){z&&(z.__=$)}),Z8.push.apply(X.__h,X._sb),X._sb=[],X.__h.length&&Q.push(X);break _}X.componentWillUpdate!=null&&X.componentWillUpdate(W,X.__s,R),D&&X.componentDidUpdate!=null&&X.__h.push(function(){X.componentDidUpdate(L,H,O)})}if(X.context=R,X.props=W,X.__P=_,X.__e=!1,P=X1.__r,m=0,D)X.state=X.__s,X.__d=!1,P&&P($),V=X.render(X.props,X.state,X.context),Z8.push.apply(X.__h,X._sb),X._sb=[];else do X.__d=!1,P&&P($),V=X.render(X.props,X.state,X.context),X.state=X.__s;while(X.__d&&++m<25);X.state=X.__s,X.getChildContext!=null&&(Z=Y4(Y4({},Z),X.getChildContext())),D&&!U&&X.getSnapshotBeforeUpdate!=null&&(O=X.getSnapshotBeforeUpdate(L,H)),c=V!=null&&V.type===K8&&V.key==null?e3(V.props.children):V,N=s3(_,Q8(c)?c:[c],$,j,Z,Y,q,Q,N,K,G),X.base=$.__e,$.__u&=-161,X.__h.length&&Q.push(X),J&&(X.__E=X.__=null)}catch(z){if($.__v=null,K||q!=null)if(z.then){for($.__u|=K?160:128;N&&N.nodeType==8&&N.nextSibling;)N=N.nextSibling;q[q.indexOf(N)]=null,$.__e=N}else{for(x=q.length;x--;)X6(q[x]);N6($)}else $.__e=j.__e,$.__k=j.__k,z.then||N6($);X1.__e(z,$,j)}else q==null&&$.__v==j.__v?($.__k=j.__k,$.__e=j.__e):N=$.__e=eq(j.__e,$,j,Z,Y,q,Q,K,G);return(V=X1.diffed)&&V($),128&$.__u?void 0:N}function N6(_){_&&(_.__c&&(_.__c.__e=!0),_.__k&&_.__k.some(N6))}function t3(_,$,j){for(var Z=0;Z<j.length;Z++)U6(j[Z],j[++Z],j[++Z]);X1.__c&&X1.__c($,_),_.some(function(Y){try{_=Y.__h,Y.__h=[],_.some(function(q){q.call(Y)})}catch(q){X1.__e(q,Y.__v)}})}function e3(_){return typeof _!="object"||_==null||_.__b>0?_:Q8(_)?_.map(e3):Y4({},_)}function eq(_,$,j,Z,Y,q,Q,N,K){var G,V,X,U,L,H,O,J=j.props||j8,W=$.props,D=$.type;if(D=="svg"?Y="http://www.w3.org/2000/svg":D=="math"?Y="http://www.w3.org/1998/Math/MathML":Y||(Y="http://www.w3.org/1999/xhtml"),q!=null){for(G=0;G<q.length;G++)if((L=q[G])&&"setAttribute"in L==!!D&&(D?L.localName==D:L.nodeType==3)){_=L,q[G]=null;break}}if(_==null){if(D==null)return document.createTextNode(W);_=document.createElementNS(Y,D,W.is&&W),N&&(X1.__m&&X1.__m($,q),N=!1),q=null}if(D==null)J===W||N&&_.data==W||(_.data=W);else{if(q=q&&q8.call(_.childNodes),!N&&q!=null)for(J={},G=0;G<_.attributes.length;G++)J[(L=_.attributes[G]).name]=L.value;for(G in J)L=J[G],G=="dangerouslySetInnerHTML"?X=L:G=="children"||(G in W)||G=="value"&&("defaultValue"in W)||G=="checked"&&("defaultChecked"in W)||e5(_,G,null,L,Y);for(G in W)L=W[G],G=="children"?U=L:G=="dangerouslySetInnerHTML"?V=L:G=="value"?H=L:G=="checked"?O=L:N&&typeof L!="function"||J[G]===L||e5(_,G,L,J[G],Y);if(V)N||X&&(V.__html==X.__html||V.__html==_.innerHTML)||(_.innerHTML=V.__html),$.__k=[];else if(X&&(_.innerHTML=""),s3($.type=="template"?_.content:_,Q8(U)?U:[U],$,j,Z,D=="foreignObject"?"http://www.w3.org/1999/xhtml":Y,q,Q,q?q[0]:j.__k&&$5(j,0),N,K),q!=null)for(G=q.length;G--;)X6(q[G]);N||(G="value",D=="progress"&&H==null?_.removeAttribute("value"):H!=null&&(H!==_[G]||D=="progress"&&!H||D=="option"&&H!=J[G])&&e5(_,G,H,J[G],Y),G="checked",O!=null&&O!=_[G]&&e5(_,G,O,J[G],Y))}return _}function U6(_,$,j){try{if(typeof _=="function"){var Z=typeof _.__u=="function";Z&&_.__u(),Z&&$==null||(_.__u=_($))}else _.current=$}catch(Y){X1.__e(Y,j)}}function _2(_,$,j){var Z,Y;if(X1.unmount&&X1.unmount(_),(Z=_.ref)&&(Z.current&&Z.current!=_.__e||U6(Z,null,$)),(Z=_.__c)!=null){if(Z.componentWillUnmount)try{Z.componentWillUnmount()}catch(q){X1.__e(q,$)}Z.base=Z.__P=null}if(Z=_.__k)for(Y=0;Y<Z.length;Y++)Z[Y]&&_2(Z[Y],$,j||typeof _.type!="function");j||X6(_.__e),_.__c=_.__=_.__e=void 0}function _Q(_,$,j){return this.constructor(_,j)}function D4(_,$,j){var Z,Y,q,Q;$==document&&($=document.documentElement),X1.__&&X1.__(_,$),Y=(Z=typeof j=="function")?null:j&&j.__k||$.__k,q=[],Q=[],V6($,_=(!Z&&j||$).__k=N8(K8,null,[_]),Y||j8,j8,$.namespaceURI,!Z&&j?[j]:Y?null:$.firstChild?q8.call($.childNodes):null,q,!Z&&j?j:Y?Y.__e:$.firstChild,Z,Q),t3(q,_,Q)}function $2(_){function $(j){var Z,Y;return this.getChildContext||(Z=new Set,(Y={})[$.__c]=this,this.getChildContext=function(){return Y},this.componentWillUnmount=function(){Z=null},this.shouldComponentUpdate=function(q){this.props.value!=q.value&&Z.forEach(function(Q){Q.__e=!0,Q6(Q)})},this.sub=function(q){Z.add(q);var Q=q.componentWillUnmount;q.componentWillUnmount=function(){Z&&Z.delete(q),Q&&Q.call(q)}}),j.children}return $.__c="__cC"+r3++,$.__=_,$.Provider=$.__l=($.Consumer=function(j,Z){return j.children(Z)}).contextType=$,$}q8=Z8.slice,X1={__e:function(_,$,j,Z){for(var Y,q,Q;$=$.__;)if((Y=$.__c)&&!Y.__)try{if((q=Y.constructor)&&q.getDerivedStateFromError!=null&&(Y.setState(q.getDerivedStateFromError(_)),Q=Y.__d),Y.componentDidCatch!=null&&(Y.componentDidCatch(_,Z||{}),Q=Y.__d),Q)return Y.__E=Y}catch(N){_=N}throw _}},l3=0,rq=function(_){return _!=null&&_.constructor===void 0},_5.prototype.setState=function(_,$){var j;j=this.__s!=null&&this.__s!=this.state?this.__s:this.__s=Y4({},this.state),typeof _=="function"&&(_=_(Y4({},j),this.props)),_&&Y4(j,_),_!=null&&this.__v&&($&&this._sb.push($),Q6(this))},_5.prototype.forceUpdate=function(_){this.__v&&(this.__e=!0,_&&this.__h.push(_),Q6(this))},_5.prototype.render=K8,J4=[],n3=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,d3=function(_,$){return _.__v.__b-$.__v.__b},Y8.__r=0,i3=/(PointerCapture)$|Capture$/i,G6=0,Y6=R3(!1),q6=R3(!0),r3=0;var O4,G1,Z6,u3,j5=0,j2=[],B1=X1,f3=B1.__b,v3=B1.__r,b3=B1.diffed,g3=B1.__c,m3=B1.unmount,p3=B1.__;function Z5(_,$){B1.__h&&B1.__h(G1,_,j5||$),j5=0;var j=G1.__H||(G1.__H={__:[],__h:[]});return _>=j.__.length&&j.__.push({}),j.__[_]}function g(_){return j5=1,L6(N2,_)}function L6(_,$,j){var Z=Z5(O4++,2);if(Z.t=_,!Z.__c&&(Z.__=[j?j($):N2(void 0,$),function(N){var K=Z.__N?Z.__N[0]:Z.__[0],G=Z.t(K,N);K!==G&&(Z.__N=[G,Z.__[1]],Z.__c.setState({}))}],Z.__c=G1,!G1.__f)){var Y=function(N,K,G){if(!Z.__c.__H)return!0;var V=Z.__c.__H.__.filter(function(U){return U.__c});if(V.every(function(U){return!U.__N}))return!q||q.call(this,N,K,G);var X=Z.__c.props!==N;return V.some(function(U){if(U.__N){var L=U.__[0];U.__=U.__N,U.__N=void 0,L!==U.__[0]&&(X=!0)}}),q&&q.call(this,N,K,G)||X};G1.__f=!0;var{shouldComponentUpdate:q,componentWillUpdate:Q}=G1;G1.componentWillUpdate=function(N,K,G){if(this.__e){var V=q;q=void 0,Y(N,K,G),q=V}Q&&Q.call(this,N,K,G)},G1.shouldComponentUpdate=Y}return Z.__N||Z.__}function v(_,$){var j=Z5(O4++,3);!B1.__s&&W6(j.__H,$)&&(j.__=_,j.u=$,G1.__H.__h.push(j))}function I5(_,$){var j=Z5(O4++,4);!B1.__s&&W6(j.__H,$)&&(j.__=_,j.u=$,G1.__h.push(j))}function T(_){return j5=5,v0(function(){return{current:_}},[])}function Z2(_,$,j){j5=6,I5(function(){if(typeof _=="function"){var Z=_($());return function(){_(null),Z&&typeof Z=="function"&&Z()}}if(_)return _.current=$(),function(){return _.current=null}},j==null?j:j.concat(_))}function v0(_,$){var j=Z5(O4++,7);return W6(j.__H,$)&&(j.__=_(),j.__H=$,j.__h=_),j.__}function C(_,$){return j5=8,v0(function(){return _},$)}function Y2(_){var $=G1.context[_.__c],j=Z5(O4++,9);return j.c=_,$?(j.__==null&&(j.__=!0,$.sub(G1)),$.props.value):_.__}function q2(_,$){B1.useDebugValue&&B1.useDebugValue($?$(_):_)}function Q2(_){var $=Z5(O4++,10),j=g();return $.__=_,G1.componentDidCatch||(G1.componentDidCatch=function(Z,Y){$.__&&$.__(Z,Y),j[1](Z)}),[j[0],function(){j[1](void 0)}]}function $Q(){for(var _;_=j2.shift();){var $=_.__H;if(_.__P&&$)try{$.__h.some($8),$.__h.some(K6),$.__h=[]}catch(j){$.__h=[],B1.__e(j,_.__v)}}}B1.__b=function(_){G1=null,f3&&f3(_)},B1.__=function(_,$){_&&$.__k&&$.__k.__m&&(_.__m=$.__k.__m),p3&&p3(_,$)},B1.__r=function(_){v3&&v3(_),O4=0;var $=(G1=_.__c).__H;$&&(Z6===G1?($.__h=[],G1.__h=[],$.__.some(function(j){j.__N&&(j.__=j.__N),j.u=j.__N=void 0})):($.__h.some($8),$.__h.some(K6),$.__h=[],O4=0)),Z6=G1},B1.diffed=function(_){b3&&b3(_);var $=_.__c;$&&$.__H&&($.__H.__h.length&&(j2.push($)!==1&&u3===B1.requestAnimationFrame||((u3=B1.requestAnimationFrame)||jQ)($Q)),$.__H.__.some(function(j){j.u&&(j.__H=j.u),j.u=void 0})),Z6=G1=null},B1.__c=function(_,$){$.some(function(j){try{j.__h.some($8),j.__h=j.__h.filter(function(Z){return!Z.__||K6(Z)})}catch(Z){$.some(function(Y){Y.__h&&(Y.__h=[])}),$=[],B1.__e(Z,j.__v)}}),g3&&g3(_,$)},B1.unmount=function(_){m3&&m3(_);var $,j=_.__c;j&&j.__H&&(j.__H.__.some(function(Z){try{$8(Z)}catch(Y){$=Y}}),j.__H=void 0,$&&B1.__e($,j.__v))};var h3=typeof requestAnimationFrame=="function";function jQ(_){var $,j=function(){clearTimeout(Z),h3&&cancelAnimationFrame($),setTimeout(_)},Z=setTimeout(j,35);h3&&($=requestAnimationFrame(j))}function $8(_){var $=G1,j=_.__c;typeof j=="function"&&(_.__c=void 0,j()),G1=$}function K6(_){var $=G1;_.__c=_.__(),G1=$}function W6(_,$){return!_||_.length!==$.length||$.some(function(j,Z){return j!==_[Z]})}function N2(_,$){return typeof $=="function"?$(_):$}var K2=function(_,$,j,Z){var Y;$[0]=0;for(var q=1;q<$.length;q++){var Q=$[q++],N=$[q]?($[0]|=Q?1:2,j[$[q++]]):$[++q];Q===3?Z[0]=N:Q===4?Z[1]=Object.assign(Z[1]||{},N):Q===5?(Z[1]=Z[1]||{})[$[++q]]=N:Q===6?Z[1][$[++q]]+=N+"":Q?(Y=_.apply(N,K2(_,N,j,["",null])),Z.push(Y),N[0]?$[0]|=2:($[q-2]=0,$[q]=Y)):Z.push(N)}return Z},c3=new Map;function ZQ(_){var $=c3.get(this);return $||($=new Map,c3.set(this,$)),($=K2(this,$.get(_)||($.set(_,$=function(j){for(var Z,Y,q=1,Q="",N="",K=[0],G=function(U){q===1&&(U||(Q=Q.replace(/^\s*\n\s*|\s*\n\s*$/g,"")))?K.push(0,U,Q):q===3&&(U||Q)?(K.push(3,U,Q),q=2):q===2&&Q==="..."&&U?K.push(4,U,0):q===2&&Q&&!U?K.push(5,0,!0,Q):q>=5&&((Q||!U&&q===5)&&(K.push(q,0,Q,Y),q=6),U&&(K.push(q,U,0,Y),q=6)),Q=""},V=0;V<j.length;V++){V&&(q===1&&G(),G(V));for(var X=0;X<j[V].length;X++)Z=j[V][X],q===1?Z==="<"?(G(),K=[K],q=3):Q+=Z:q===4?Q==="--"&&Z===">"?(q=1,Q=""):Q=Z+Q[0]:N?Z===N?N="":Q+=Z:Z==='"'||Z==="'"?N=Z:Z===">"?(G(),q=1):q&&(Z==="="?(q=5,Y=Q,Q=""):Z==="/"&&(q<5||j[V][X+1]===">")?(G(),q===3&&(K=K[0]),q=K,(K=K[0]).push(2,0,q),q=0):Z===" "||Z==="\t"||Z===`
`||Z==="\r"?(G(),q=2):Q+=Z),q===3&&Q==="!--"&&(q=4,K=K[0])}return G(),K}(_)),$),arguments,[])).length>1?$:$[0]}var B=ZQ.bind(N8);var m1={};iq(m1,{uploadWorkspaceFile:()=>X8,uploadMedia:()=>A6,updateWorkspaceFile:()=>AQ,submitAdaptiveCardAction:()=>E6,streamSidePrompt:()=>JQ,stopAutoresearch:()=>WQ,steerAgentQueueItem:()=>HQ,setWorkspaceVisibility:()=>P5,setAgentThoughtVisibility:()=>I6,sendPeerAgentMessage:()=>VQ,sendAgentMessage:()=>Y5,searchPosts:()=>z6,restoreChatBranch:()=>XQ,respondToAgentRequest:()=>G8,renameWorkspaceFile:()=>P6,renameChatBranch:()=>KQ,removeAgentQueueItem:()=>FQ,pruneChatBranch:()=>GQ,moveWorkspaceEntry:()=>S6,getWorkspaceTree:()=>C5,getWorkspaceRawUrl:()=>V8,getWorkspaceFile:()=>y5,getWorkspaceDownloadUrl:()=>U8,getWorkspaceBranch:()=>DQ,getTimeline:()=>g4,getThumbnailUrl:()=>x6,getThread:()=>F6,getPostsByHashtag:()=>B6,getMediaUrl:()=>M_,getMediaText:()=>T6,getMediaInfo:()=>q5,getMediaBlob:()=>OQ,getChatBranches:()=>NQ,getAutoresearchStatus:()=>LQ,getAgents:()=>O6,getAgentThought:()=>M6,getAgentStatus:()=>D6,getAgentQueueState:()=>zQ,getAgentModels:()=>T5,getAgentContext:()=>UQ,getActiveChatAgents:()=>J6,forkChatBranch:()=>x5,dismissAutoresearch:()=>BQ,deleteWorkspaceFile:()=>w6,deletePost:()=>H6,createWorkspaceFile:()=>y6,createReply:()=>QQ,createPost:()=>qQ,attachWorkspaceFile:()=>C6,addToWhitelist:()=>k6,SSEClient:()=>L8});async function o0(_,$={}){let j=await fetch(""+_,{...$,headers:{"Content-Type":"application/json",...$.headers}});if(!j.ok){let Z=await j.json().catch(()=>({error:"Unknown error"}));throw Error(Z.error||`HTTP ${j.status}`)}return j.json()}function G2(_){let $=String(_||"").split(`
`),j="message",Z=[];for(let q of $)if(q.startsWith("event:"))j=q.slice(6).trim()||"message";else if(q.startsWith("data:"))Z.push(q.slice(5).trim());let Y=Z.join(`
`);if(!Y)return null;try{return{event:j,data:JSON.parse(Y)}}catch{return{event:j,data:Y}}}async function YQ(_,$){if(!_.body)throw Error("Missing event stream body");let j=_.body.getReader(),Z=new TextDecoder,Y="";while(!0){let{value:Q,done:N}=await j.read();if(N)break;Y+=Z.decode(Q,{stream:!0});let K=Y.split(`

`);Y=K.pop()||"";for(let G of K){let V=G2(G);if(V)$(V.event,V.data)}}Y+=Z.decode();let q=G2(Y);if(q)$(q.event,q.data)}async function g4(_=10,$=null,j=null){let Z=`/timeline?limit=${_}`;if($)Z+=`&before=${$}`;if(j)Z+=`&chat_jid=${encodeURIComponent(j)}`;return o0(Z)}async function B6(_,$=50,j=0,Z=null){let Y=Z?`&chat_jid=${encodeURIComponent(Z)}`:"";return o0(`/hashtag/${encodeURIComponent(_)}?limit=${$}&offset=${j}${Y}`)}async function z6(_,$=50,j=0,Z=null,Y="current",q=null){let Q=Z?`&chat_jid=${encodeURIComponent(Z)}`:"",N=Y?`&scope=${encodeURIComponent(Y)}`:"",K=q?`&root_chat_jid=${encodeURIComponent(q)}`:"";return o0(`/search?q=${encodeURIComponent(_)}&limit=${$}&offset=${j}${Q}${N}${K}`)}async function F6(_,$=null){let j=$?`?chat_jid=${encodeURIComponent($)}`:"";return o0(`/thread/${_}${j}`)}async function qQ(_,$=[],j=null){let Z=j?`?chat_jid=${encodeURIComponent(j)}`:"";return o0(`/post${Z}`,{method:"POST",body:JSON.stringify({content:_,media_ids:$})})}async function QQ(_,$,j=[],Z=null){let Y=Z?`?chat_jid=${encodeURIComponent(Z)}`:"";return o0(`/post/reply${Y}`,{method:"POST",body:JSON.stringify({thread_id:_,content:$,media_ids:j})})}async function H6(_,$=!1,j=null){let Z=j?`&chat_jid=${encodeURIComponent(j)}`:"",Y=`/post/${_}?cascade=${$?"true":"false"}${Z}`;return o0(Y,{method:"DELETE"})}async function Y5(_,$,j=null,Z=[],Y=null,q=null){let Q=q?`?chat_jid=${encodeURIComponent(q)}`:"",N={content:$,thread_id:j,media_ids:Z};if(Y==="auto"||Y==="queue"||Y==="steer")N.mode=Y;return o0(`/agent/${_}/message${Q}`,{method:"POST",body:JSON.stringify(N)})}async function J6(){return o0("/agent/active-chats")}async function NQ(_=null,$={}){let j=new URLSearchParams;if(_)j.set("root_chat_jid",String(_));if($?.includeArchived)j.set("include_archived","1");let Z=j.toString()?`?${j.toString()}`:"";return o0(`/agent/branches${Z}`)}async function x5(_,$={}){return o0("/agent/branch-fork",{method:"POST",body:JSON.stringify({source_chat_jid:_,...$?.agentName?{agent_name:$.agentName}:{}})})}async function KQ(_,$={}){return o0("/agent/branch-rename",{method:"POST",body:JSON.stringify({chat_jid:_,...$&&Object.prototype.hasOwnProperty.call($,"agentName")?{agent_name:$.agentName}:{}})})}async function GQ(_){return o0("/agent/branch-prune",{method:"POST",body:JSON.stringify({chat_jid:_})})}async function XQ(_,$={}){return o0("/agent/branch-restore",{method:"POST",body:JSON.stringify({chat_jid:_,...$&&Object.prototype.hasOwnProperty.call($,"agentName")?{agent_name:$.agentName}:{}})})}async function VQ(_,$,j,Z="auto",Y={}){let q={source_chat_jid:_,content:j,mode:Z,...Y?.sourceAgentName?{source_agent_name:Y.sourceAgentName}:{},...Y?.targetBy==="agent_name"?{target_agent_name:$}:{target_chat_jid:$}};return o0("/agent/peer-message",{method:"POST",body:JSON.stringify(q)})}async function O6(){return o0("/agent/roster")}async function D6(_=null){let $=_?`?chat_jid=${encodeURIComponent(_)}`:"";return o0(`/agent/status${$}`)}async function UQ(_=null){let $=_?`?chat_jid=${encodeURIComponent(_)}`:"";return o0(`/agent/context${$}`)}async function LQ(_=null){let $=_?`?chat_jid=${encodeURIComponent(_)}`:"";return o0(`/agent/autoresearch/status${$}`)}async function WQ(_=null,$={}){return o0("/agent/autoresearch/stop",{method:"POST",body:JSON.stringify({chat_jid:_||void 0,generate_report:$?.generateReport!==!1})})}async function BQ(_=null){return o0("/agent/autoresearch/dismiss",{method:"POST",body:JSON.stringify({chat_jid:_||void 0})})}async function zQ(_=null){let $=_?`?chat_jid=${encodeURIComponent(_)}`:"";return o0(`/agent/queue-state${$}`)}async function FQ(_,$=null){let j=await fetch("/agent/queue-remove",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({row_id:_,chat_jid:$||void 0})});if(!j.ok){let Z=await j.json().catch(()=>({error:"Failed to remove queued item"}));throw Error(Z.error||`HTTP ${j.status}`)}return j.json()}async function HQ(_,$=null){let j=await fetch("/agent/queue-steer",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({row_id:_,chat_jid:$||void 0})});if(!j.ok){let Z=await j.json().catch(()=>({error:"Failed to steer queued item"}));throw Error(Z.error||`HTTP ${j.status}`)}return j.json()}async function T5(_=null){let $=_?`?chat_jid=${encodeURIComponent(_)}`:"";return o0(`/agent/models${$}`)}async function A6(_){let $=new FormData;$.append("file",_);let j=await fetch("/media/upload",{method:"POST",body:$});if(!j.ok){let Z=await j.json().catch(()=>({error:"Upload failed"}));throw Error(Z.error||`HTTP ${j.status}`)}return j.json()}async function G8(_,$,j=null){let Z=await fetch("/agent/respond",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({request_id:_,outcome:$,chat_jid:j||void 0})});if(!Z.ok){let Y=await Z.json().catch(()=>({error:"Failed to respond"}));throw Error(Y.error||`HTTP ${Z.status}`)}return Z.json()}async function E6(_){let $=await fetch("/agent/card-action",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(_)});if(!$.ok){let j=await $.json().catch(()=>({error:"Adaptive Card action failed"}));throw Error(j.error||`HTTP ${$.status}`)}return $.json()}async function JQ(_,$={}){let j=await fetch("/agent/side-prompt/stream",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({prompt:_,system_prompt:$.systemPrompt||void 0,chat_jid:$.chatJid||void 0}),signal:$.signal});if(!j.ok){let q=await j.json().catch(()=>({error:"Side prompt failed"}));throw Error(q.error||`HTTP ${j.status}`)}let Z=null,Y=null;if(await YQ(j,(q,Q)=>{if($.onEvent?.(q,Q),q==="side_prompt_thinking_delta")$.onThinkingDelta?.(Q?.delta||"");else if(q==="side_prompt_text_delta")$.onTextDelta?.(Q?.delta||"");else if(q==="side_prompt_done")Z=Q;else if(q==="side_prompt_error")Y=Q}),Y){let q=Error(Y?.error||"Side prompt failed");throw q.payload=Y,q}return Z}async function k6(_,$){let j=await fetch("/agent/whitelist",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({pattern:_,description:$})});if(!j.ok){let Z=await j.json().catch(()=>({error:"Failed to add to whitelist"}));throw Error(Z.error||`HTTP ${j.status}`)}return j.json()}async function M6(_,$="thought"){let j=`/agent/thought?turn_id=${encodeURIComponent(_)}&panel=${encodeURIComponent($)}`;return o0(j)}async function I6(_,$,j){return o0("/agent/thought/visibility",{method:"POST",body:JSON.stringify({turn_id:_,panel:$,expanded:Boolean(j)})})}function M_(_){return`/media/${_}`}function x6(_){return`/media/${_}/thumbnail`}async function q5(_){let $=await fetch(`/media/${_}/info`);if(!$.ok)throw Error("Failed to get media info");return $.json()}async function T6(_){let $=await fetch(`/media/${_}`);if(!$.ok)throw Error("Failed to load media text");return $.text()}async function OQ(_){let $=await fetch(`/media/${_}`);if(!$.ok)throw Error("Failed to load media blob");return $.blob()}async function C5(_="",$=2,j=!1){let Z=`/workspace/tree?path=${encodeURIComponent(_)}&depth=${$}&show_hidden=${j?"1":"0"}`;return o0(Z)}async function DQ(_=""){let $=`/workspace/branch?path=${encodeURIComponent(_||"")}`;return o0($)}async function y5(_,$=20000,j=null){let Z=j?`&mode=${encodeURIComponent(j)}`:"",Y=`/workspace/file?path=${encodeURIComponent(_)}&max=${$}${Z}`;return o0(Y)}async function AQ(_,$){return o0("/workspace/file",{method:"PUT",body:JSON.stringify({path:_,content:$})})}async function C6(_){return o0("/workspace/attach",{method:"POST",body:JSON.stringify({path:_})})}async function X8(_,$="",j={}){let Z=new FormData;Z.append("file",_);let Y=new URLSearchParams;if($)Y.set("path",$);if(j.overwrite)Y.set("overwrite","1");let q=Y.toString(),Q=q?`/workspace/upload?${q}`:"/workspace/upload",N=await fetch(""+Q,{method:"POST",body:Z});if(!N.ok){let K=await N.json().catch(()=>({error:"Upload failed"})),G=Error(K.error||`HTTP ${N.status}`);throw G.status=N.status,G.code=K.code,G}return N.json()}async function y6(_,$,j=""){let Z=await fetch("/workspace/file",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({path:_,name:$,content:j})});if(!Z.ok){let Y=await Z.json().catch(()=>({error:"Create failed"})),q=Error(Y.error||`HTTP ${Z.status}`);throw q.status=Z.status,q.code=Y.code,q}return Z.json()}async function P6(_,$){let j=await fetch("/workspace/rename",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({path:_,name:$})});if(!j.ok){let Z=await j.json().catch(()=>({error:"Rename failed"})),Y=Error(Z.error||`HTTP ${j.status}`);throw Y.status=j.status,Y.code=Z.code,Y}return j.json()}async function S6(_,$){let j=await fetch("/workspace/move",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({path:_,target:$})});if(!j.ok){let Z=await j.json().catch(()=>({error:"Move failed"})),Y=Error(Z.error||`HTTP ${j.status}`);throw Y.status=j.status,Y.code=Z.code,Y}return j.json()}async function w6(_){let $=`/workspace/file?path=${encodeURIComponent(_||"")}`;return o0($,{method:"DELETE"})}async function P5(_,$=!1){return o0("/workspace/visibility",{method:"POST",body:JSON.stringify({visible:Boolean(_),show_hidden:Boolean($)})})}function V8(_){return`/workspace/raw?path=${encodeURIComponent(_)}`}function U8(_,$=!1){return`/workspace/download?${`path=${encodeURIComponent(_||"")}&show_hidden=${$?"1":"0"}`}`}class L8{constructor(_,$,j={}){this.onEvent=_,this.onStatusChange=$,this.chatJid=typeof j?.chatJid==="string"&&j.chatJid.trim()?j.chatJid.trim():null,this.eventSource=null,this.reconnectTimeout=null,this.reconnectDelay=1000,this.status="disconnected",this.reconnectAttempts=0,this.cooldownUntil=0,this.connecting=!1,this.lastActivityAt=0,this.staleCheckTimer=null,this.staleThresholdMs=70000}markActivity(){this.lastActivityAt=Date.now()}clearStaleMonitor(){if(this.staleCheckTimer)clearInterval(this.staleCheckTimer),this.staleCheckTimer=null}startStaleMonitor(){this.clearStaleMonitor(),this.staleCheckTimer=setInterval(()=>{if(this.status!=="connected")return;if(!this.lastActivityAt)return;if(Date.now()-this.lastActivityAt<=this.staleThresholdMs)return;console.warn("SSE connection went stale; forcing reconnect"),this.forceReconnect()},15000)}forceReconnect(){if(this.connecting=!1,this.eventSource)this.eventSource.close(),this.eventSource=null;this.clearStaleMonitor(),this.status="disconnected",this.onStatusChange("disconnected"),this.reconnectAttempts+=1,this.scheduleReconnect()}connect(){if(this.connecting)return;if(this.eventSource&&this.status==="connected")return;if(this.connecting=!0,this.eventSource)this.eventSource.close();this.clearStaleMonitor();let _=this.chatJid?`?chat_jid=${encodeURIComponent(this.chatJid)}`:"";this.eventSource=new EventSource("/sse/stream"+_);let $=(j)=>{this.eventSource.addEventListener(j,(Z)=>{this.markActivity(),this.onEvent(j,JSON.parse(Z.data))})};this.eventSource.onopen=()=>{this.connecting=!1,this.reconnectDelay=1000,this.reconnectAttempts=0,this.cooldownUntil=0,this.status="connected",this.markActivity(),this.startStaleMonitor(),this.onStatusChange("connected")},this.eventSource.onerror=()=>{this.connecting=!1,this.clearStaleMonitor(),this.status="disconnected",this.onStatusChange("disconnected"),this.reconnectAttempts+=1,this.scheduleReconnect()},this.eventSource.addEventListener("connected",()=>{this.markActivity(),console.log("SSE connected"),this.onEvent("connected",{})}),this.eventSource.addEventListener("heartbeat",()=>{this.markActivity()}),$("new_post"),$("new_reply"),$("agent_response"),$("interaction_updated"),$("interaction_deleted"),$("agent_status"),$("agent_steer_queued"),$("agent_followup_queued"),$("agent_followup_consumed"),$("agent_followup_removed"),$("workspace_update"),$("agent_draft"),$("agent_draft_delta"),$("agent_thought"),$("agent_thought_delta"),$("model_changed"),$("ui_theme"),["extension_ui_request","extension_ui_timeout","extension_ui_notify","extension_ui_status","extension_ui_working","extension_ui_widget","extension_ui_title","extension_ui_editor_text","extension_ui_error"].forEach($)}scheduleReconnect(){if(this.reconnectTimeout)clearTimeout(this.reconnectTimeout);let _=10,$=60000,j=Date.now();if(this.reconnectAttempts>=_)this.cooldownUntil=Math.max(this.cooldownUntil,j+$),this.reconnectAttempts=0;let Z=Math.max(this.cooldownUntil-j,0),Y=Math.max(this.reconnectDelay,Z);this.reconnectTimeout=setTimeout(()=>{console.log("Reconnecting SSE..."),this.connect()},Y),this.reconnectDelay=Math.min(this.reconnectDelay*2,30000)}reconnectIfNeeded(){let _=Date.now();if(this.status==="connected"){if(this.lastActivityAt&&_-this.lastActivityAt>this.staleThresholdMs)this.forceReconnect();return}if(this.cooldownUntil&&_<this.cooldownUntil)return;if(this.reconnectTimeout)clearTimeout(this.reconnectTimeout),this.reconnectTimeout=null;this.connect()}disconnect(){if(this.connecting=!1,this.clearStaleMonitor(),this.eventSource)this.eventSource.close(),this.eventSource=null;if(this.reconnectTimeout)clearTimeout(this.reconnectTimeout),this.reconnectTimeout=null}}class X2{extensions=new Map;register(_){this.extensions.set(_.id,_)}unregister(_){this.extensions.delete(_)}resolve(_){let $,j=-1/0;for(let Z of this.extensions.values()){if(Z.placement!=="tabs")continue;if(!Z.canHandle)continue;try{let Y=Z.canHandle(_);if(Y===!1||Y===0)continue;let q=Y===!0?0:typeof Y==="number"?Y:0;if(q>j)j=q,$=Z}catch(Y){console.warn(`[PaneRegistry] canHandle() error for "${Z.id}":`,Y)}}return $}list(){return Array.from(this.extensions.values())}getDockPanes(){return Array.from(this.extensions.values()).filter((_)=>_.placement==="dock")}getTabPanes(){return Array.from(this.extensions.values()).filter((_)=>_.placement==="tabs")}get(_){return this.extensions.get(_)}get size(){return this.extensions.size}}var c0=new X2;var W8=null,R6=null;function EQ(){try{return`/static/dist/editor.bundle.js${new URL(import.meta.url).search||""}`}catch{return"/static/dist/editor.bundle.js"}}function V2(){if(R6)return Promise.resolve(R6);if(!W8)W8=import(EQ()).then((_)=>{return R6=_,_}).catch((_)=>{throw W8=null,_});return W8}class U2{container;context;real=null;disposed=!1;loadingEl;queuedDirtyCb=null;queuedSaveCb=null;queuedCloseCb=null;queuedViewStateCb=null;queuedViewState=null;constructor(_,$){this.container=_,this.context=$,this.loadingEl=document.createElement("div"),this.loadingEl.className="editor-pane",this.loadingEl.innerHTML=`
            <div class="editor-body">
                <div class="editor-status" style="padding: 2em; text-align: center; color: var(--text-secondary);">Loading editor…</div>
            </div>
        `,_.appendChild(this.loadingEl),this.load()}escapeHtml(_){let $=document.createElement("div");return $.textContent=_,$.innerHTML}async load(){try{let _=await V2();if(this.disposed)return;if(this.loadingEl.parentNode)this.loadingEl.remove();if(this.real=new _.StandaloneEditorInstance(this.container,this.context),this.queuedDirtyCb&&this.real.onDirtyChange)this.real.onDirtyChange(this.queuedDirtyCb);if(this.queuedSaveCb&&this.real.onSaveRequest)this.real.onSaveRequest(this.queuedSaveCb);if(this.queuedCloseCb&&this.real.onClose)this.real.onClose(this.queuedCloseCb);if(this.queuedViewStateCb&&typeof this.real.onViewStateChange==="function")this.real.onViewStateChange(this.queuedViewStateCb);if(this.queuedViewState&&typeof this.real.restoreViewState==="function")requestAnimationFrame(()=>this.real?.restoreViewState?.(this.queuedViewState))}catch(_){if(this.disposed)return;console.error("[editor-loader] Failed to load editor bundle:",_),this.loadingEl.querySelector(".editor-status").textContent="Failed to load editor. Check console for details."}}getContent(){return this.real?.getContent()}isDirty(){return this.real?.isDirty()||!1}setContent(_,$){if(this.real?.setContent)this.real.setContent(_,$)}focus(){this.real?.focus()}resize(){this.real?.resize?.()}dispose(){if(this.disposed)return;if(this.disposed=!0,this.real)this.real.dispose(),this.real=null;this.container.innerHTML="",this.queuedDirtyCb=null,this.queuedSaveCb=null,this.queuedCloseCb=null,this.queuedViewStateCb=null}onDirtyChange(_){if(this.queuedDirtyCb=_,this.real?.onDirtyChange)this.real.onDirtyChange(_)}onSaveRequest(_){if(this.queuedSaveCb=_,this.real?.onSaveRequest)this.real.onSaveRequest(_)}onClose(_){if(this.queuedCloseCb=_,this.real?.onClose)this.real.onClose(_)}onViewStateChange(_){this.queuedViewStateCb=_,this.real?.onViewStateChange?.(_)}restoreViewState(_){this.queuedViewState=_,this.real?.restoreViewState?.(_)}getPath(){return this.real?.getPath?.()??this.context.path??""}setPath(_){this.real?.setPath?.(_)}}var u6={id:"editor",label:"Editor",icon:"edit",capabilities:["edit"],placement:"tabs",canHandle(_){if(!_.path)return!1;if(_.mode!=="edit")return!1;return 1},mount(_,$){return new U2(_,$)}};function f6(){V2().catch(()=>{})}var Q5="piclaw://terminal";var kQ={yellow:"#9a6700",magenta:"#8250df",cyan:"#1b7c83",brightBlack:"#57606a",brightRed:"#cf222e",brightGreen:"#1a7f37",brightYellow:"#bf8700",brightBlue:"#0550ae",brightMagenta:"#6f42c1",brightCyan:"#0a7b83"},MQ={yellow:"#d29922",magenta:"#bc8cff",cyan:"#39c5cf",brightBlack:"#8b949e",brightRed:"#ff7b72",brightGreen:"#7ee787",brightYellow:"#e3b341",brightBlue:"#79c0ff",brightMagenta:"#d2a8ff",brightCyan:"#56d4dd"},B8=null,v6=null;function IQ(_){if(!_)return!1;return _.startsWith("data:application/wasm")||/(^|\/)ghostty-vt\.wasm(?:[?#].*)?$/.test(_)}async function xQ(_){let $=globalThis.fetch?.bind(globalThis);if(!$)return await _();let j=new URL("/static/js/vendor/ghostty-vt.wasm",window.location.origin).href,Z=(Y,q)=>{let Q=Y instanceof Request?Y.url:Y instanceof URL?Y.href:String(Y);if(!IQ(Q))return $(Y,q);if(Y instanceof Request)return $(new Request(j,Y));return $(j,q)};globalThis.fetch=Z;try{return await _()}finally{globalThis.fetch=$}}async function TQ(){let $=await import(new URL("/static/js/vendor/ghostty-web.js",window.location.origin).href);if(!B8)B8=xQ(()=>Promise.resolve($.init?.())).catch((j)=>{throw B8=null,j});return await B8,$}async function CQ(){if(typeof document>"u"||!("fonts"in document)||!document.fonts)return;if(!v6)v6=Promise.allSettled([document.fonts.load('400 13px "FiraCode Nerd Font Mono"'),document.fonts.load('700 13px "FiraCode Nerd Font Mono"'),document.fonts.ready]).then(()=>{return}).catch(()=>{return});await v6}async function yQ(){let _=await fetch("/terminal/session",{method:"GET",credentials:"same-origin"}),$=await _.json().catch(()=>({}));if(!_.ok)throw Error($?.error||`HTTP ${_.status}`);return $}function PQ(_){return`${window.location.protocol==="https:"?"wss:":"ws:"}//${window.location.host}${_}`}function SQ(){if(typeof window>"u"||typeof document>"u")return!1;let{documentElement:_,body:$}=document,j=_?.getAttribute?.("data-theme")?.toLowerCase?.()||"";if(j==="dark")return!0;if(j==="light")return!1;if(_?.classList?.contains("dark")||$?.classList?.contains("dark"))return!0;if(_?.classList?.contains("light")||$?.classList?.contains("light"))return!1;return Boolean(window.matchMedia?.("(prefers-color-scheme: dark)")?.matches)}function q4(_,$=""){if(typeof document>"u")return $;return getComputedStyle(document.documentElement).getPropertyValue(_)?.trim()||$}function wQ(_,$){if(!_||!_.startsWith("#"))return _;let j=_.slice(1);if(j.length===3)return`#${j[0]}${j[0]}${j[1]}${j[1]}${j[2]}${j[2]}${$}`;if(j.length===6)return`#${j}${$}`;return _}function L2(){let _=SQ(),$=_?MQ:kQ,j=q4("--bg-primary",_?"#000000":"#ffffff"),Z=q4("--text-primary",_?"#e7e9ea":"#0f1419"),Y=q4("--text-secondary",_?"#71767b":"#536471"),q=q4("--accent-color","#1d9bf0"),Q=q4("--danger-color",_?"#ff7b72":"#cf222e"),N=q4("--success-color",_?"#7ee787":"#1a7f37"),K=q4("--bg-hover",_?"#1d1f23":"#e8ebed"),G=q4("--border-color",_?"#2f3336":"#eff3f4"),V=q4("--accent-soft-strong",wQ(q,_?"47":"33"));return{background:j,foreground:Z,cursor:q,cursorAccent:j,selectionBackground:V,selectionForeground:Z,black:K,red:Q,green:N,yellow:$.yellow,blue:q,magenta:$.magenta,cyan:$.cyan,white:Z,brightBlack:$.brightBlack,brightRed:$.brightRed,brightGreen:$.brightGreen,brightYellow:$.brightYellow,brightBlue:$.brightBlue,brightMagenta:$.brightMagenta,brightCyan:$.brightCyan,brightWhite:G}}class b6{container;disposed=!1;termEl;bodyEl;statusEl;terminal=null;fitAddon=null;socket=null;themeObserver=null;themeChangeListener=null;mediaQuery=null;mediaQueryListener=null;resizeObserver=null;dockResizeListener=null;windowResizeListener=null;resizeFrame=0;lastAppliedThemeSignature=null;lastResizeSignature=null;constructor(_,$){this.container=_,this.termEl=document.createElement("div"),this.termEl.className="terminal-pane-content",this.termEl.setAttribute("tabindex","0"),this.statusEl=document.createElement("span"),this.statusEl.className="terminal-pane-status",this.statusEl.textContent="Loading terminal…",this.bodyEl=document.createElement("div"),this.bodyEl.className="terminal-pane-body",this.bodyEl.innerHTML='<div class="terminal-placeholder">Bootstrapping ghostty-web…</div>',this.termEl.append(this.bodyEl),_.appendChild(this.termEl),this.bootstrapGhostty()}setStatus(_){this.statusEl.textContent=_,this.termEl.dataset.connectionStatus=_,this.termEl.setAttribute("aria-label",`Terminal ${_}`)}getResizeSignature(){try{let _=this.container?.getBoundingClientRect?.(),$=this.bodyEl?.getBoundingClientRect?.(),j=Number.isFinite(_?.width)?_.width:0,Z=Number.isFinite(_?.height)?_.height:0,Y=Number.isFinite($?.width)?$.width:0,q=Number.isFinite($?.height)?$.height:0;return`${Math.round(j)}x${Math.round(Z)}:${Math.round(Y)}x${Math.round(q)}`}catch{return"0x0:0x0"}}syncHostLayout(){let _=this.bodyEl.querySelector(".terminal-live-host");if(!(_ instanceof HTMLElement))return;let $=_.firstElementChild;if($ instanceof HTMLElement)$.style.width="100%",$.style.height="100%",$.style.maxWidth="100%",$.style.minWidth="0",$.style.display="block";let j=_.querySelector("canvas");if(j instanceof HTMLElement)j.style.display="block",j.style.maxWidth="none"}scheduleResize(){if(this.disposed)return;let _=this.getResizeSignature();if(this.lastResizeSignature===_)return;if(this.resizeFrame)cancelAnimationFrame(this.resizeFrame);this.resizeFrame=requestAnimationFrame(()=>{this.resizeFrame=0,this.lastResizeSignature=this.getResizeSignature(),this.resize()})}async bootstrapGhostty(){try{let _=await TQ();if(await CQ(),this.disposed)return;this.bodyEl.innerHTML="";let $=document.createElement("div");$.className="terminal-live-host",this.bodyEl.appendChild($);let j=new _.Terminal({cols:120,rows:30,cursorBlink:!0,fontFamily:'FiraCode Nerd Font Mono, ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", monospace',fontSize:13,theme:L2()}),Z=null;if(typeof _.FitAddon==="function")Z=new _.FitAddon,j.loadAddon?.(Z);await j.open($),this.syncHostLayout(),j.loadFonts?.(),Z?.observeResize?.(),this.terminal=j,this.fitAddon=Z,this.installThemeSync(),this.installResizeSync(),this.scheduleResize(),await this.connectBackend()}catch(_){if(console.error("[terminal-pane] Failed to bootstrap ghostty-web:",_),this.disposed)return;this.bodyEl.innerHTML='<div class="terminal-placeholder">Terminal failed to load. Check vendored assets and backend wiring.</div>',this.setStatus("Load failed")}}applyTheme(){if(!this.terminal)return;let _=L2(),$=JSON.stringify(_),j=this.lastAppliedThemeSignature!==null&&this.lastAppliedThemeSignature!==$;try{this.termEl.style.backgroundColor=_.background,this.bodyEl.style.backgroundColor=_.background;let Z=this.bodyEl.querySelector(".terminal-live-host");if(Z instanceof HTMLElement)Z.style.backgroundColor=_.background,Z.style.color=_.foreground;let Y=this.bodyEl.querySelector("canvas");if(Y instanceof HTMLElement)Y.style.backgroundColor=_.background,Y.style.color=_.foreground}catch{}try{if(this.terminal.options)this.terminal.options.theme=_}catch{}try{if(j&&this.terminal.reset)this.terminal.reset()}catch{}try{this.terminal.renderer?.setTheme?.(_),this.terminal.renderer?.clear?.()}catch{}try{this.terminal.loadFonts?.()}catch{}try{this.terminal.renderer?.remeasureFont?.()}catch{}try{if(this.terminal.wasmTerm&&this.terminal.renderer?.render)this.terminal.renderer.render(this.terminal.wasmTerm,!0,this.terminal.viewportY||0,this.terminal),this.terminal.renderer.render(this.terminal.wasmTerm,!1,this.terminal.viewportY||0,this.terminal)}catch{}try{this.resize()}catch{}try{if(j&&this.socket?.readyState===WebSocket.OPEN)this.socket.send(JSON.stringify({type:"input",data:"\f"}))}catch{}try{this.terminal.refresh?.()}catch{}this.lastAppliedThemeSignature=$}installThemeSync(){if(typeof window>"u"||typeof document>"u")return;let _=()=>requestAnimationFrame(()=>this.applyTheme());_();let $=()=>_();window.addEventListener("piclaw-theme-change",$),this.themeChangeListener=$;let j=window.matchMedia?.("(prefers-color-scheme: dark)"),Z=()=>_();if(j?.addEventListener)j.addEventListener("change",Z);else if(j?.addListener)j.addListener(Z);this.mediaQuery=j,this.mediaQueryListener=Z;let Y=typeof MutationObserver<"u"?new MutationObserver(()=>_()):null;if(Y?.observe(document.documentElement,{attributes:!0,attributeFilter:["class","data-theme","style"]}),document.body)Y?.observe(document.body,{attributes:!0,attributeFilter:["class","data-theme"]});this.themeObserver=Y}installResizeSync(){if(typeof window>"u")return;let _=()=>this.scheduleResize(),$=()=>this.scheduleResize();if(window.addEventListener("dock-resize",_),window.addEventListener("resize",$),this.dockResizeListener=_,this.windowResizeListener=$,typeof ResizeObserver<"u"){let j=new ResizeObserver(()=>{if(this.disposed)return;this.scheduleResize()});j.observe(this.container),this.resizeObserver=j}}async connectBackend(){let _=this.terminal;if(!_)return;try{let $=await yQ();if(this.disposed)return;if(!$?.enabled){_.write?.(`Terminal backend unavailable: ${$?.error||"disabled"}\r
`),this.setStatus("Unavailable");return}let j=new WebSocket(PQ($.ws_path||"/terminal/ws"));this.socket=j,this.setStatus("Connecting…"),_.onData?.((Z)=>{if(j.readyState===WebSocket.OPEN)j.send(JSON.stringify({type:"input",data:Z}))}),_.onResize?.(({cols:Z,rows:Y})=>{if(j.readyState===WebSocket.OPEN)j.send(JSON.stringify({type:"resize",cols:Z,rows:Y}))}),j.addEventListener("open",()=>{if(this.disposed)return;this.setStatus("Connected"),this.scheduleResize()}),j.addEventListener("message",(Z)=>{if(this.disposed)return;let Y=null;try{Y=JSON.parse(String(Z.data))}catch{Y={type:"output",data:String(Z.data)}}if(Y?.type==="output"&&typeof Y.data==="string"){_.write?.(Y.data);return}if(Y?.type==="exit")_.write?.(`\r
[terminal exited]\r
`),this.setStatus("Exited")}),j.addEventListener("close",()=>{if(this.disposed)return;this.setStatus("Disconnected")}),j.addEventListener("error",()=>{if(this.disposed)return;this.setStatus("Connection error")})}catch($){_.write?.(`Terminal backend unavailable: ${$ instanceof Error?$.message:String($)}\r
`),this.setStatus("Unavailable")}}sendResize(){if(!this.socket||this.socket.readyState!==WebSocket.OPEN||!this.fitAddon?.proposeDimensions)return;let _=this.fitAddon.proposeDimensions();if(!_)return;this.socket.send(JSON.stringify({type:"resize",cols:_.cols,rows:_.rows}))}getContent(){return}isDirty(){return!1}focus(){if(this.terminal?.focus){this.terminal.focus();return}this.termEl?.focus()}resize(){this.syncHostLayout();try{this.terminal?.renderer?.remeasureFont?.()}catch{}try{this.fitAddon?.fit?.()}catch{}try{this.terminal?.refresh?.()}catch{}this.syncHostLayout(),this.sendResize()}dispose(){if(this.disposed)return;this.disposed=!0;try{if(this.resizeFrame)cancelAnimationFrame(this.resizeFrame),this.resizeFrame=0}catch{}try{if(this.themeChangeListener)window.removeEventListener("piclaw-theme-change",this.themeChangeListener)}catch{}try{if(this.mediaQuery&&this.mediaQueryListener){if(this.mediaQuery.removeEventListener)this.mediaQuery.removeEventListener("change",this.mediaQueryListener);else if(this.mediaQuery.removeListener)this.mediaQuery.removeListener(this.mediaQueryListener)}}catch{}try{if(this.dockResizeListener)window.removeEventListener("dock-resize",this.dockResizeListener);if(this.windowResizeListener)window.removeEventListener("resize",this.windowResizeListener)}catch{}try{this.themeObserver?.disconnect?.()}catch{}try{this.resizeObserver?.disconnect?.()}catch{}try{this.socket?.close?.()}catch{}try{this.fitAddon?.dispose?.()}catch{}try{this.terminal?.dispose?.()}catch{}this.termEl?.remove()}}var g6={id:"terminal",label:"Terminal",icon:"terminal",capabilities:["terminal"],placement:"dock",mount(_,$){return new b6(_,$)}},m6={id:"terminal-tab",label:"Terminal",icon:"terminal",capabilities:["terminal"],placement:"tabs",canHandle(_){return _?.path==="piclaw://terminal"?1e4:!1},mount(_,$){return new b6(_,$)}};function Q4(_={}){let $=_.window??(typeof window<"u"?window:null),j=_.navigator??(typeof navigator<"u"?navigator:null);if(j&&j.standalone===!0)return!0;if(!$||typeof $.matchMedia!=="function")return!1;return["(display-mode: standalone)","(display-mode: minimal-ui)","(display-mode: fullscreen)"].some((Y)=>{try{return Boolean($.matchMedia(Y)?.matches)}catch{return!1}})}function z8(_={}){let $=_.window??(typeof window<"u"?window:null),j=_.navigator??(typeof navigator<"u"?navigator:null);if(!$&&!j)return!1;let Z=String(j?.userAgent||""),Y=Number(j?.maxTouchPoints||0),q=/Android|webOS|iPhone|iPad|iPod|Mobile|Windows Phone/i.test(Z),Q=(()=>{if(!$||typeof $.matchMedia!=="function")return!1;try{return Boolean($.matchMedia("(pointer: coarse)")?.matches||$.matchMedia("(any-pointer: coarse)")?.matches)}catch{return!1}})();return Boolean(q||Y>1||Q)}function W2(_,$={}){if(Q4($))return null;if(z8($))return{target:"_blank",features:void 0,mode:"tab"};return{target:RQ(_),features:"popup=yes,width=900,height=960,resizable=yes,scrollbars=yes",mode:"popup"}}function p6(_,$={}){let j=$.window??(typeof window<"u"?window:null);if(!j||!_)return null;try{return _.features?j.open("about:blank",_.target,_.features):j.open("about:blank",_.target)}catch{return null}}function h6(_,$={}){if(!_||!_.document)return;try{let j=String($.title||"Opening branch…"),Z=String($.message||"Preparing a new branch window…");_.document.title=j,_.document.body.innerHTML=`
            <div style="font-family: system-ui, sans-serif; padding: 24px; color: #222;">
                <h1 style="font-size: 18px; margin: 0 0 12px;">${j}</h1>
                <p style="margin: 0; line-height: 1.5;">${Z}</p>
            </div>
        `}catch{}}function c6(_,$){if(!_||!$)return;try{if(_.location&&typeof _.location.replace==="function"){_.location.replace(String($));return}_.location=String($)}catch{}}function l6(_){if(!_||typeof _.close!=="function")return;try{_.close()}catch{}}function N4(_,$,j={}){let Z=new URL(String(_||"http://localhost/")),Y=String($||"").trim()||"web:default";if(Z.searchParams.set("chat_jid",Y),Z.searchParams.delete("branch_loader"),Z.searchParams.delete("branch_source_chat_jid"),Z.searchParams.delete("pane_popout"),Z.searchParams.delete("pane_path"),Z.searchParams.delete("pane_label"),j.chatOnly!==!1)Z.searchParams.set("chat_only","1");return Z.toString()}function B2(_,$,j={}){let Z=new URL(String(_||"http://localhost/")),Y=String($||"").trim()||"web:default";if(Z.searchParams.set("branch_loader","1"),Z.searchParams.set("branch_source_chat_jid",Y),Z.searchParams.delete("chat_jid"),Z.searchParams.delete("pane_popout"),Z.searchParams.delete("pane_path"),Z.searchParams.delete("pane_label"),j.chatOnly!==!1)Z.searchParams.set("chat_only","1");return Z.toString()}function z2(_,$,j={}){let Z=new URL(String(_||"http://localhost/")),Y=String($||"").trim();if(!Y)return Z.toString();if(Z.searchParams.set("pane_popout","1"),Z.searchParams.set("pane_path",Y),j?.label)Z.searchParams.set("pane_label",String(j.label));else Z.searchParams.delete("pane_label");if(j?.chatJid)Z.searchParams.set("chat_jid",String(j.chatJid));let q=j?.params&&typeof j.params==="object"?j.params:null;if(q)for(let[Q,N]of Object.entries(q)){let K=String(Q||"").trim();if(!K)continue;if(N===null||N===void 0||N==="")Z.searchParams.delete(K);else Z.searchParams.set(K,String(N))}return Z.searchParams.delete("chat_only"),Z.searchParams.delete("branch_loader"),Z.searchParams.delete("branch_source_chat_jid"),Z.toString()}function RQ(_){return`piclaw-chat-${String(_||"web:default").trim().toLowerCase().replace(/[^a-z0-9_-]+/g,"-")||"default"}`}function uQ(_){return`piclaw-pane-${String(_||"pane").trim().toLowerCase().replace(/[^a-z0-9_-]+/g,"-")||"default"}`}function F2(_,$={}){if(Q4($))return null;if(z8($))return{target:"_blank",features:void 0,mode:"tab"};return{target:uQ(_),features:"popup=yes,width=1200,height=960,resizable=yes,scrollbars=yes",mode:"popup"}}function S5(_){let $=_ instanceof Error?_.message:String(_||"").trim(),j=String($||"").trim();if(!j)return"PiClaw could not open a new branch window.";let Z=j.toLowerCase();if(Z.includes("no stable turn boundary"))return"This chat is still in flight and does not yet have a stable turn boundary to fork from.";if(Z.includes("cannot fork a branch while the source chat is still active"))return"This chat is still active. Please wait for the current turn to settle, then try again.";if(Z.includes("cancelled"))return"Branch creation was cancelled before a new chat window could be opened.";if(Z.includes("did not return a chat id"))return"PiClaw created no usable branch id for the new window. Please try again.";if(Z.includes("failed to fork branch")||Z.includes("failed to fork chat branch"))return"PiClaw could not create the new branch. Please try again.";return j}function fQ(_){try{return JSON.parse(_)}catch{return null}}function vQ(_){if(typeof _==="string")return new TextEncoder().encode(_).byteLength;if(_ instanceof ArrayBuffer)return _.byteLength;if(ArrayBuffer.isView(_))return _.byteLength;if(_ instanceof Blob)return _.size;return 0}function bQ(_){if(typeof _==="string")return _.length;if(_ instanceof ArrayBuffer)return _.byteLength;if(_ instanceof Blob)return _.size;return Number(_?.size||0)}class n6{socket=null;disposed=!1;options;bytesIn=0;bytesOut=0;constructor(_){this.options=_}connect(){if(this.disposed)return;try{this.socket?.close?.()}catch{}let _=new WebSocket(this.options.url);_.binaryType=this.options.binaryType||"arraybuffer",_.addEventListener("open",()=>{if(this.disposed||this.socket!==_)return;this.options.onOpen?.()}),_.addEventListener("message",($)=>{if(this.disposed||this.socket!==_)return;let j=bQ($.data);if(this.bytesIn+=j,this.emitMetrics(),typeof $.data==="string"){let Z=this.options.parseControlMessage||fQ;this.options.onMessage?.({kind:"control",raw:$.data,payload:Z($.data)});return}this.options.onMessage?.({kind:"binary",data:$.data,size:j})}),_.addEventListener("close",()=>{if(this.socket===_)this.socket=null;if(this.disposed)return;this.options.onClose?.()}),_.addEventListener("error",()=>{if(this.disposed||this.socket!==_)return;this.options.onError?.()}),this.socket=_}send(_){if(this.disposed||!this.socket)return;let $=vQ(_);this.bytesOut+=$,this.emitMetrics(),this.socket.send(_)}sendControl(_){this.send(JSON.stringify(_??{}))}getMetrics(){return{bytesIn:this.bytesIn,bytesOut:this.bytesOut}}dispose(){if(this.disposed)return;this.disposed=!0;try{this.socket?.close?.()}catch{}this.socket=null}emitMetrics(){this.options.onMetrics?.(this.getMetrics())}}var w5=()=>{throw Error("Operation requires compiling with --exportRuntime")},gQ=typeof BigUint64Array<"u",R5=Symbol();var mQ=new TextDecoder("utf-16le",{fatal:!0});Object.hasOwn=Object.hasOwn||function(_,$){return Object.prototype.hasOwnProperty.call(_,$)};function H2(_,$){let j=new Uint32Array(_)[$+-4>>>2]>>>1,Z=new Uint16Array(_,$,j);if(j<=192)return String.fromCharCode(...Z);try{return mQ.decode(Z)}catch{let Y="",q=0;while(j-q>1024)Y+=String.fromCharCode(...Z.subarray(q,q+=1024));return Y+String.fromCharCode(...Z.subarray(q))}}function J2(_){let $={};function j(Y,q){if(!Y)return"<yet unknown>";return H2(Y.buffer,q)}let Z=_.env=_.env||{};return Z.abort=Z.abort||function(q,Q,N,K){let G=$.memory||Z.memory;throw Error(`abort: ${j(G,q)} at ${j(G,Q)}:${N}:${K}`)},Z.trace=Z.trace||function(q,Q,...N){let K=$.memory||Z.memory;console.log(`trace: ${j(K,q)}${Q?" ":""}${N.slice(0,Q).join(", ")}`)},Z.seed=Z.seed||Date.now,_.Math=_.Math||Math,_.Date=_.Date||Date,$}function O2(_,$){let j=$.exports,Z=j.memory,Y=j.table,q=j.__new||w5,Q=j.__pin||w5,N=j.__unpin||w5,K=j.__collect||w5,G=j.__rtti_base,V=G?(z)=>z[G>>>2]:w5;_.__new=q,_.__pin=Q,_.__unpin=N,_.__collect=K;function X(z){let k=new Uint32Array(Z.buffer);if((z>>>=0)>=V(k))throw Error(`invalid id: ${z}`);return k[(G+4>>>2)+z]}function U(z){let k=X(z);if(!(k&7))throw Error(`not an array: ${z}, flags=${k}`);return k}function L(z){return 31-Math.clz32(z>>>6&31)}function H(z){if(z==null)return 0;let k=z.length,u=q(k<<1,2),n=new Uint16Array(Z.buffer);for(let b=0,d=u>>>1;b<k;++b)n[d+b]=z.charCodeAt(b);return u}_.__newString=H;function O(z){if(z==null)return 0;let k=new Uint8Array(z),u=q(k.length,1);return new Uint8Array(Z.buffer).set(k,u),u}_.__newArrayBuffer=O;function J(z){if(!z)return null;let k=Z.buffer;if(new Uint32Array(k)[z+-8>>>2]!==2)throw Error(`not a string: ${z}`);return H2(k,z)}_.__getString=J;function W(z,k,u){let n=Z.buffer;if(u)switch(z){case 2:return new Float32Array(n);case 3:return new Float64Array(n)}else switch(z){case 0:return new(k?Int8Array:Uint8Array)(n);case 1:return new(k?Int16Array:Uint16Array)(n);case 2:return new(k?Int32Array:Uint32Array)(n);case 3:return new(k?BigInt64Array:BigUint64Array)(n)}throw Error(`unsupported align: ${z}`)}function D(z,k=0){let u=k,n=U(z),b=L(n),d=typeof u!=="number",i=d?u.length:u,a=q(i<<b,n&4?z:1),j0;if(n&4)j0=a;else{Q(a);let e=q(n&2?16:12,z);N(a);let N0=new Uint32Array(Z.buffer);if(N0[e+0>>>2]=a,N0[e+4>>>2]=a,N0[e+8>>>2]=i<<b,n&2)N0[e+12>>>2]=i;j0=e}if(d){let e=W(b,n&2048,n&4096),N0=a>>>b;if(n&16384)for(let U0=0;U0<i;++U0)e[N0+U0]=u[U0];else e.set(u,N0)}return j0}_.__newArray=D;function E(z){let k=new Uint32Array(Z.buffer),u=k[z+-8>>>2],n=U(u),b=L(n),d=n&4?z:k[z+4>>>2],i=n&2?k[z+12>>>2]:k[d+-4>>>2]>>>b;return W(b,n&2048,n&4096).subarray(d>>>=b,d+i)}_.__getArrayView=E;function R(z){let k=E(z),u=k.length,n=Array(u);for(let b=0;b<u;b++)n[b]=k[b];return n}_.__getArray=R;function P(z){let k=Z.buffer,u=new Uint32Array(k)[z+-4>>>2];return k.slice(z,z+u)}_.__getArrayBuffer=P;function m(z){if(!Y)throw Error("Operation requires compiling with --exportTable");let k=new Uint32Array(Z.buffer)[z>>>2];return Y.get(k)}_.__getFunction=m;function c(z,k,u){return new z(x(z,k,u))}function x(z,k,u){let n=Z.buffer,b=new Uint32Array(n);return new z(n,b[u+4>>>2],b[u+8>>>2]>>>k)}function M(z,k,u){_[`__get${k}`]=c.bind(null,z,u),_[`__get${k}View`]=x.bind(null,z,u)}if([Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array].forEach((z)=>{M(z,z.name,31-Math.clz32(z.BYTES_PER_ELEMENT))}),gQ)[BigUint64Array,BigInt64Array].forEach((z)=>{M(z,z.name.slice(3),3)});return _.memory=_.memory||Z,_.table=_.table||Y,hQ(j,_)}function D2(_){return typeof Response<"u"&&_ instanceof Response}function pQ(_){return _ instanceof WebAssembly.Module}async function d6(_,$={}){if(D2(_=await _))return F8(_,$);let j=pQ(_)?_:await WebAssembly.compile(_),Z=J2($),Y=await WebAssembly.instantiate(j,$),q=O2(Z,Y);return{module:j,instance:Y,exports:q}}async function F8(_,$={}){if(!WebAssembly.instantiateStreaming)return d6(D2(_=await _)?_.arrayBuffer():_,$);let j=J2($),Z=await WebAssembly.instantiateStreaming(_,$),Y=O2(j,Z.instance);return{...Z,exports:Y}}function hQ(_,$={}){let j=_.__argumentsLength?(Z)=>{_.__argumentsLength.value=Z}:_.__setArgumentsLength||_.__setargc||(()=>{});for(let Z of Object.keys(_)){let Y=_[Z],q=Z.split("."),Q=$;while(q.length>1){let G=q.shift();if(!Object.hasOwn(Q,G))Q[G]={};Q=Q[G]}let N=q[0],K=N.indexOf("#");if(K>=0){let G=N.substring(0,K),V=Q[G];if(typeof V>"u"||!V.prototype){let X=function(...U){return X.wrap(X.prototype.constructor(0,...U))};if(X.prototype={valueOf(){return this[R5]}},X.wrap=function(U){return Object.create(X.prototype,{[R5]:{value:U,writable:!1}})},V)Object.getOwnPropertyNames(V).forEach((U)=>Object.defineProperty(X,U,Object.getOwnPropertyDescriptor(V,U)));Q[G]=X}if(N=N.substring(K+1),Q=Q[G].prototype,/^(get|set):/.test(N)){if(!Object.hasOwn(Q,N=N.substring(4))){let X=_[Z.replace("set:","get:")],U=_[Z.replace("get:","set:")];Object.defineProperty(Q,N,{get(){return X(this[R5])},set(L){U(this[R5],L)},enumerable:!0})}}else if(N==="constructor")(Q[N]=function(...X){return j(X.length),Y(...X)}).original=Y;else(Q[N]=function(...X){return j(X.length),Y(this[R5],...X)}).original=Y}else if(/^(get|set):/.test(N)){if(!Object.hasOwn(Q,N=N.substring(4)))Object.defineProperty(Q,N,{get:_[Z.replace("set:","get:")],set:_[Z.replace("get:","set:")],enumerable:!0})}else if(typeof Y==="function"&&Y!==j)(Q[N]=(...G)=>{return j(G.length),Y(...G)}).original=Y;else Q[N]=Y}return $}var lQ="/static/js/vendor/remote-display-decoder.wasm",H8=null;function A2(_){if(_ instanceof ArrayBuffer)return _;if(_.byteOffset===0&&_.byteLength===_.buffer.byteLength)return _.buffer;return _.slice().buffer}async function E2(){if(H8)return H8;return H8=(async()=>{try{let Z=function(Y,q,Q,N,K,G,V){let X=A2(q),U=j.__pin(j.__newArrayBuffer(X));try{return j[Y](U,Q,N,K,G,V.bitsPerPixel,V.bigEndian?1:0,V.trueColor?1:0,V.redMax,V.greenMax,V.blueMax,V.redShift,V.greenShift,V.blueShift)}finally{j.__unpin(U);try{j.__collect()}catch{}}},_=await fetch(lQ,{credentials:"same-origin"});if(!_.ok)throw Error(`HTTP ${_.status}`);let j=(typeof F8==="function"?await F8(_,{}):await d6(await _.arrayBuffer(),{})).exports;for(let Y of["initFramebuffer","getFramebufferPtr","getFramebufferLen","getFramebufferWidth","getFramebufferHeight","processRawRect","processCopyRect","processRreRect","processHextileRect","processZrleTileData","decodeRawRectToRgba"])if(typeof j[Y]!=="function")throw Error(`${Y} export is missing.`);return{initFramebuffer(Y,q){j.initFramebuffer(Y,q)},getFramebuffer(){let Y=j.getFramebufferPtr(),q=j.getFramebufferLen();return new Uint8ClampedArray(new Uint8Array(j.memory.buffer,Y,q).slice().buffer)},getFramebufferWidth(){return j.getFramebufferWidth()},getFramebufferHeight(){return j.getFramebufferHeight()},processRawRect(Y,q,Q,N,K,G){return Z("processRawRect",Y,q,Q,N,K,G)},processCopyRect(Y,q,Q,N,K,G){return j.processCopyRect(Y,q,Q,N,K,G)},processRreRect(Y,q,Q,N,K,G){return Z("processRreRect",Y,q,Q,N,K,G)},processHextileRect(Y,q,Q,N,K,G){return Z("processHextileRect",Y,q,Q,N,K,G)},processZrleTileData(Y,q,Q,N,K,G){return Z("processZrleTileData",Y,q,Q,N,K,G)},decodeRawRectToRgba(Y,q,Q,N){let K=A2(Y),G=j.__pin(j.__newArrayBuffer(K));try{let V=j.__pin(j.decodeRawRectToRgba(G,q,Q,N.bitsPerPixel,N.bigEndian?1:0,N.trueColor?1:0,N.redMax,N.greenMax,N.blueMax,N.redShift,N.greenShift,N.blueShift));try{return new Uint8ClampedArray(j.__getArrayBuffer(V))}finally{j.__unpin(V)}}finally{j.__unpin(G);try{j.__collect?.()}catch{}}}}}catch(_){return console.warn("[remote-display] Failed to load WASM pipeline, using JS fallback.",_),null}})(),H8}function N5(_,$,j){return Math.max($,Math.min(j,_))}function J8(_,$,j){let Z=new Uint8Array(6),Y=N5(Math.floor(Number($||0)),0,65535),q=N5(Math.floor(Number(j||0)),0,65535);return Z[0]=5,Z[1]=N5(Math.floor(Number(_||0)),0,255),Z[2]=Y>>8&255,Z[3]=Y&255,Z[4]=q>>8&255,Z[5]=q&255,Z}function r6(_){switch(Number(_)){case 0:return 1;case 1:return 2;case 2:return 4;default:return 0}}function k2(_,$,j,Z,Y){let q=Math.max(1,Math.floor(Number(Z||0))),Q=Math.max(1,Math.floor(Number(Y||0))),N=Math.max(1,Number(j?.width||0)),K=Math.max(1,Number(j?.height||0)),G=(Number(_||0)-Number(j?.left||0))/N,V=(Number($||0)-Number(j?.top||0))/K;return{x:N5(Math.floor(G*q),0,Math.max(0,q-1)),y:N5(Math.floor(V*Q),0,Math.max(0,Q-1))}}function M2(_,$,j,Z=0){let Y=Number(_)<0?8:16,q=N5(Number(Z||0)|Y,0,255);return[J8(q,$,j),J8(Number(Z||0),$,j)]}function I2(_,$){let j=new Uint8Array(8),Z=Math.max(0,Math.min(4294967295,Number($||0)>>>0));return j[0]=4,j[1]=_?1:0,j[4]=Z>>>24&255,j[5]=Z>>>16&255,j[6]=Z>>>8&255,j[7]=Z&255,j}function u5(_){if(typeof _!=="string")return null;return _.length>0?_:null}function x2(_,$,j,Z){let Y=Math.max(1,Math.floor(Number(_||0))),q=Math.max(1,Math.floor(Number($||0))),Q=Math.max(1,Math.floor(Number(j||0))),N=Math.max(1,Math.floor(Number(Z||0))),K=Math.min(Y/Q,q/N);if(!Number.isFinite(K)||K<=0)return 1;return Math.max(0.01,K)}var i6={Backspace:65288,Tab:65289,Enter:65293,Escape:65307,Insert:65379,Delete:65535,Home:65360,End:65367,PageUp:65365,PageDown:65366,ArrowLeft:65361,ArrowUp:65362,ArrowRight:65363,ArrowDown:65364,Shift:65505,ShiftLeft:65505,ShiftRight:65506,Control:65507,ControlLeft:65507,ControlRight:65508,Alt:65513,AltLeft:65513,AltRight:65514,Meta:65515,MetaLeft:65515,MetaRight:65516,Super:65515,Super_L:65515,Super_R:65516,CapsLock:65509,NumLock:65407,ScrollLock:65300,Pause:65299,PrintScreen:65377,ContextMenu:65383,Menu:65383," ":32};for(let _=1;_<=12;_+=1)i6[`F${_}`]=65470+(_-1);function o6(_){let $=[_?.key,_?.code];for(let q of $)if(q&&Object.prototype.hasOwnProperty.call(i6,q))return i6[q];let j=String(_?.key||""),Z=j?j.codePointAt(0):null,Y=Z==null?0:Z>65535?2:1;if(Z!=null&&j.length===Y){if(Z<=255)return Z;return(16777216|Z)>>>0}return null}var y1=Uint8Array,U_=Uint16Array,Y$=Int32Array,O8=new y1([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),D8=new y1([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),_$=new y1([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),P2=function(_,$){var j=new U_(31);for(var Z=0;Z<31;++Z)j[Z]=$+=1<<_[Z-1];var Y=new Y$(j[30]);for(var Z=1;Z<30;++Z)for(var q=j[Z];q<j[Z+1];++q)Y[q]=q-j[Z]<<5|Z;return{b:j,r:Y}},S2=P2(O8,2),w2=S2.b,$$=S2.r;w2[28]=258,$$[258]=28;var R2=P2(D8,0),nQ=R2.b,T2=R2.r,j$=new U_(32768);for(h0=0;h0<32768;++h0)n_=(h0&43690)>>1|(h0&21845)<<1,n_=(n_&52428)>>2|(n_&13107)<<2,n_=(n_&61680)>>4|(n_&3855)<<4,j$[h0]=((n_&65280)>>8|(n_&255)<<8)>>1;var n_,h0,d_=function(_,$,j){var Z=_.length,Y=0,q=new U_($);for(;Y<Z;++Y)if(_[Y])++q[_[Y]-1];var Q=new U_($);for(Y=1;Y<$;++Y)Q[Y]=Q[Y-1]+q[Y-1]<<1;var N;if(j){N=new U_(1<<$);var K=15-$;for(Y=0;Y<Z;++Y)if(_[Y]){var G=Y<<4|_[Y],V=$-_[Y],X=Q[_[Y]-1]++<<V;for(var U=X|(1<<V)-1;X<=U;++X)N[j$[X]>>K]=G}}else{N=new U_(Z);for(Y=0;Y<Z;++Y)if(_[Y])N[Y]=j$[Q[_[Y]-1]++]>>15-_[Y]}return N},A4=new y1(288);for(h0=0;h0<144;++h0)A4[h0]=8;var h0;for(h0=144;h0<256;++h0)A4[h0]=9;var h0;for(h0=256;h0<280;++h0)A4[h0]=7;var h0;for(h0=280;h0<288;++h0)A4[h0]=8;var h0,g5=new y1(32);for(h0=0;h0<32;++h0)g5[h0]=5;var h0,dQ=d_(A4,9,0),iQ=d_(A4,9,1),rQ=d_(g5,5,0),oQ=d_(g5,5,1),s6=function(_){var $=_[0];for(var j=1;j<_.length;++j)if(_[j]>$)$=_[j];return $},v_=function(_,$,j){var Z=$/8|0;return(_[Z]|_[Z+1]<<8)>>($&7)&j},a6=function(_,$){var j=$/8|0;return(_[j]|_[j+1]<<8|_[j+2]<<16)>>($&7)},q$=function(_){return(_+7)/8|0},b5=function(_,$,j){if($==null||$<0)$=0;if(j==null||j>_.length)j=_.length;return new y1(_.subarray($,j))};var sQ=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],N_=function(_,$,j){var Z=Error($||sQ[_]);if(Z.code=_,Error.captureStackTrace)Error.captureStackTrace(Z,N_);if(!j)throw Z;return Z},aQ=function(_,$,j,Z){var Y=_.length,q=Z?Z.length:0;if(!Y||$.f&&!$.l)return j||new y1(0);var Q=!j,N=Q||$.i!=2,K=$.i;if(Q)j=new y1(Y*3);var G=function(f0){var Q0=j.length;if(f0>Q0){var M0=new y1(Math.max(Q0*2,f0));M0.set(j),j=M0}},V=$.f||0,X=$.p||0,U=$.b||0,L=$.l,H=$.d,O=$.m,J=$.n,W=Y*8;do{if(!L){V=v_(_,X,1);var D=v_(_,X+1,3);if(X+=3,!D){var E=q$(X)+4,R=_[E-4]|_[E-3]<<8,P=E+R;if(P>Y){if(K)N_(0);break}if(N)G(U+R);j.set(_.subarray(E,P),U),$.b=U+=R,$.p=X=P*8,$.f=V;continue}else if(D==1)L=iQ,H=oQ,O=9,J=5;else if(D==2){var m=v_(_,X,31)+257,c=v_(_,X+10,15)+4,x=m+v_(_,X+5,31)+1;X+=14;var M=new y1(x),z=new y1(19);for(var k=0;k<c;++k)z[_$[k]]=v_(_,X+k*3,7);X+=c*3;var u=s6(z),n=(1<<u)-1,b=d_(z,u,1);for(var k=0;k<x;){var d=b[v_(_,X,n)];X+=d&15;var E=d>>4;if(E<16)M[k++]=E;else{var i=0,a=0;if(E==16)a=3+v_(_,X,3),X+=2,i=M[k-1];else if(E==17)a=3+v_(_,X,7),X+=3;else if(E==18)a=11+v_(_,X,127),X+=7;while(a--)M[k++]=i}}var j0=M.subarray(0,m),e=M.subarray(m);O=s6(j0),J=s6(e),L=d_(j0,O,1),H=d_(e,J,1)}else N_(1);if(X>W){if(K)N_(0);break}}if(N)G(U+131072);var N0=(1<<O)-1,U0=(1<<J)-1,L0=X;for(;;L0=X){var i=L[a6(_,X)&N0],C0=i>>4;if(X+=i&15,X>W){if(K)N_(0);break}if(!i)N_(2);if(C0<256)j[U++]=C0;else if(C0==256){L0=X,L=null;break}else{var O0=C0-254;if(C0>264){var k=C0-257,B0=O8[k];O0=v_(_,X,(1<<B0)-1)+w2[k],X+=B0}var u0=H[a6(_,X)&U0],J0=u0>>4;if(!u0)N_(3);X+=u0&15;var e=nQ[J0];if(J0>3){var B0=D8[J0];e+=a6(_,X)&(1<<B0)-1,X+=B0}if(X>W){if(K)N_(0);break}if(N)G(U+131072);var y0=U+O0;if(U<e){var b0=q-e,F0=Math.min(e,y0);if(b0+U<0)N_(3);for(;U<F0;++U)j[U]=Z[b0+U]}for(;U<y0;++U)j[U]=j[U-e]}}if($.l=L,$.p=L0,$.b=U,$.f=V,L)V=1,$.m=O,$.d=H,$.n=J}while(!V);return U!=j.length&&Q?b5(j,0,U):j.subarray(0,U)},K4=function(_,$,j){j<<=$&7;var Z=$/8|0;_[Z]|=j,_[Z+1]|=j>>8},f5=function(_,$,j){j<<=$&7;var Z=$/8|0;_[Z]|=j,_[Z+1]|=j>>8,_[Z+2]|=j>>16},t6=function(_,$){var j=[];for(var Z=0;Z<_.length;++Z)if(_[Z])j.push({s:Z,f:_[Z]});var Y=j.length,q=j.slice();if(!Y)return{t:f2,l:0};if(Y==1){var Q=new y1(j[0].s+1);return Q[j[0].s]=1,{t:Q,l:1}}j.sort(function(P,m){return P.f-m.f}),j.push({s:-1,f:25001});var N=j[0],K=j[1],G=0,V=1,X=2;j[0]={s:-1,f:N.f+K.f,l:N,r:K};while(V!=Y-1)N=j[j[G].f<j[X].f?G++:X++],K=j[G!=V&&j[G].f<j[X].f?G++:X++],j[V++]={s:-1,f:N.f+K.f,l:N,r:K};var U=q[0].s;for(var Z=1;Z<Y;++Z)if(q[Z].s>U)U=q[Z].s;var L=new U_(U+1),H=Z$(j[V-1],L,0);if(H>$){var Z=0,O=0,J=H-$,W=1<<J;q.sort(function(m,c){return L[c.s]-L[m.s]||m.f-c.f});for(;Z<Y;++Z){var D=q[Z].s;if(L[D]>$)O+=W-(1<<H-L[D]),L[D]=$;else break}O>>=J;while(O>0){var E=q[Z].s;if(L[E]<$)O-=1<<$-L[E]++-1;else++Z}for(;Z>=0&&O;--Z){var R=q[Z].s;if(L[R]==$)--L[R],++O}H=$}return{t:new y1(L),l:H}},Z$=function(_,$,j){return _.s==-1?Math.max(Z$(_.l,$,j+1),Z$(_.r,$,j+1)):$[_.s]=j},C2=function(_){var $=_.length;while($&&!_[--$]);var j=new U_(++$),Z=0,Y=_[0],q=1,Q=function(K){j[Z++]=K};for(var N=1;N<=$;++N)if(_[N]==Y&&N!=$)++q;else{if(!Y&&q>2){for(;q>138;q-=138)Q(32754);if(q>2)Q(q>10?q-11<<5|28690:q-3<<5|12305),q=0}else if(q>3){Q(Y),--q;for(;q>6;q-=6)Q(8304);if(q>2)Q(q-3<<5|8208),q=0}while(q--)Q(Y);q=1,Y=_[N]}return{c:j.subarray(0,Z),n:$}},v5=function(_,$){var j=0;for(var Z=0;Z<$.length;++Z)j+=_[Z]*$[Z];return j},u2=function(_,$,j){var Z=j.length,Y=q$($+2);_[Y]=Z&255,_[Y+1]=Z>>8,_[Y+2]=_[Y]^255,_[Y+3]=_[Y+1]^255;for(var q=0;q<Z;++q)_[Y+q+4]=j[q];return(Y+4+Z)*8},y2=function(_,$,j,Z,Y,q,Q,N,K,G,V){K4($,V++,j),++Y[256];var X=t6(Y,15),U=X.t,L=X.l,H=t6(q,15),O=H.t,J=H.l,W=C2(U),D=W.c,E=W.n,R=C2(O),P=R.c,m=R.n,c=new U_(19);for(var x=0;x<D.length;++x)++c[D[x]&31];for(var x=0;x<P.length;++x)++c[P[x]&31];var M=t6(c,7),z=M.t,k=M.l,u=19;for(;u>4&&!z[_$[u-1]];--u);var n=G+5<<3,b=v5(Y,A4)+v5(q,g5)+Q,d=v5(Y,U)+v5(q,O)+Q+14+3*u+v5(c,z)+2*c[16]+3*c[17]+7*c[18];if(K>=0&&n<=b&&n<=d)return u2($,V,_.subarray(K,K+G));var i,a,j0,e;if(K4($,V,1+(d<b)),V+=2,d<b){i=d_(U,L,0),a=U,j0=d_(O,J,0),e=O;var N0=d_(z,k,0);K4($,V,E-257),K4($,V+5,m-1),K4($,V+10,u-4),V+=14;for(var x=0;x<u;++x)K4($,V+3*x,z[_$[x]]);V+=3*u;var U0=[D,P];for(var L0=0;L0<2;++L0){var C0=U0[L0];for(var x=0;x<C0.length;++x){var O0=C0[x]&31;if(K4($,V,N0[O0]),V+=z[O0],O0>15)K4($,V,C0[x]>>5&127),V+=C0[x]>>12}}}else i=dQ,a=A4,j0=rQ,e=g5;for(var x=0;x<N;++x){var B0=Z[x];if(B0>255){var O0=B0>>18&31;if(f5($,V,i[O0+257]),V+=a[O0+257],O0>7)K4($,V,B0>>23&31),V+=O8[O0];var u0=B0&31;if(f5($,V,j0[u0]),V+=e[u0],u0>3)f5($,V,B0>>5&8191),V+=D8[u0]}else f5($,V,i[B0]),V+=a[B0]}return f5($,V,i[256]),V+a[256]},tQ=new Y$([65540,131080,131088,131104,262176,1048704,1048832,2114560,2117632]),f2=new y1(0),eQ=function(_,$,j,Z,Y,q){var Q=q.z||_.length,N=new y1(Z+Q+5*(1+Math.ceil(Q/7000))+Y),K=N.subarray(Z,N.length-Y),G=q.l,V=(q.r||0)&7;if($){if(V)K[0]=q.r>>3;var X=tQ[$-1],U=X>>13,L=X&8191,H=(1<<j)-1,O=q.p||new U_(32768),J=q.h||new U_(H+1),W=Math.ceil(j/3),D=2*W,E=function(l0){return(_[l0]^_[l0+1]<<W^_[l0+2]<<D)&H},R=new Y$(25000),P=new U_(288),m=new U_(32),c=0,x=0,M=q.i||0,z=0,k=q.w||0,u=0;for(;M+2<Q;++M){var n=E(M),b=M&32767,d=J[n];if(O[b]=d,J[n]=b,k<=M){var i=Q-M;if((c>7000||z>24576)&&(i>423||!G)){V=y2(_,K,0,R,P,m,x,z,u,M-u,V),z=c=x=0,u=M;for(var a=0;a<286;++a)P[a]=0;for(var a=0;a<30;++a)m[a]=0}var j0=2,e=0,N0=L,U0=b-d&32767;if(i>2&&n==E(M-U0)){var L0=Math.min(U,i)-1,C0=Math.min(32767,M),O0=Math.min(258,i);while(U0<=C0&&--N0&&b!=d){if(_[M+j0]==_[M+j0-U0]){var B0=0;for(;B0<O0&&_[M+B0]==_[M+B0-U0];++B0);if(B0>j0){if(j0=B0,e=U0,B0>L0)break;var u0=Math.min(U0,B0-2),J0=0;for(var a=0;a<u0;++a){var y0=M-U0+a&32767,b0=O[y0],F0=y0-b0&32767;if(F0>J0)J0=F0,d=y0}}}b=d,d=O[b],U0+=b-d&32767}}if(e){R[z++]=268435456|$$[j0]<<18|T2[e];var f0=$$[j0]&31,Q0=T2[e]&31;x+=O8[f0]+D8[Q0],++P[257+f0],++m[Q0],k=M+j0,++c}else R[z++]=_[M],++P[_[M]]}}for(M=Math.max(M,k);M<Q;++M)R[z++]=_[M],++P[_[M]];if(V=y2(_,K,G,R,P,m,x,z,u,M-u,V),!G)q.r=V&7|K[V/8|0]<<3,V-=7,q.h=J,q.p=O,q.i=M,q.w=k}else{for(var M=q.w||0;M<Q+G;M+=65535){var M0=M+65535;if(M0>=Q)K[V/8|0]=G,M0=Q;V=u2(K,V+1,_.subarray(M,M0))}q.i=Q}return b5(N,0,Z+q$(V)+Y)};var v2=function(){var _=1,$=0;return{p:function(j){var Z=_,Y=$,q=j.length|0;for(var Q=0;Q!=q;){var N=Math.min(Q+2655,q);for(;Q<N;++Q)Y+=Z+=j[Q];Z=(Z&65535)+15*(Z>>16),Y=(Y&65535)+15*(Y>>16)}_=Z,$=Y},d:function(){return _%=65521,$%=65521,(_&255)<<24|(_&65280)<<8|($&255)<<8|$>>8}}},_N=function(_,$,j,Z,Y){if(!Y){if(Y={l:1},$.dictionary){var q=$.dictionary.subarray(-32768),Q=new y1(q.length+_.length);Q.set(q),Q.set(_,q.length),_=Q,Y.w=q.length}}return eQ(_,$.level==null?6:$.level,$.mem==null?Y.l?Math.ceil(Math.max(8,Math.min(13,Math.log(_.length)))*1.5):20:12+$.mem,j,Z,Y)};var b2=function(_,$,j){for(;j;++$)_[$]=j,j>>>=8};var $N=function(_,$){var j=$.level,Z=j==0?0:j<6?1:j==9?3:2;if(_[0]=120,_[1]=Z<<6|($.dictionary&&32),_[1]|=31-(_[0]<<8|_[1])%31,$.dictionary){var Y=v2();Y.p($.dictionary),b2(_,2,Y.d())}},jN=function(_,$){if((_[0]&15)!=8||_[0]>>4>7||(_[0]<<8|_[1])%31)N_(6,"invalid zlib data");if((_[1]>>5&1)==+!$)N_(6,"invalid zlib data: "+(_[1]&32?"need":"unexpected")+" dictionary");return(_[1]>>3&4)+2};var e6=function(){function _($,j){if(typeof $=="function")j=$,$={};this.ondata=j;var Z=$&&$.dictionary&&$.dictionary.subarray(-32768);if(this.s={i:0,b:Z?Z.length:0},this.o=new y1(32768),this.p=new y1(0),Z)this.o.set(Z)}return _.prototype.e=function($){if(!this.ondata)N_(5);if(this.d)N_(4);if(!this.p.length)this.p=$;else if($.length){var j=new y1(this.p.length+$.length);j.set(this.p),j.set($,this.p.length),this.p=j}},_.prototype.c=function($){this.s.i=+(this.d=$||!1);var j=this.s.b,Z=aQ(this.p,this.s,this.o);this.ondata(b5(Z,j,this.s.b),this.d),this.o=b5(Z,this.s.b-32768),this.s.b=this.o.length,this.p=b5(this.p,this.s.p/8|0),this.s.p&=7},_.prototype.push=function($,j){this.e($),this.c(j)},_}();function g2(_,$){if(!$)$={};var j=v2();j.p(_);var Z=_N(_,$,$.dictionary?6:2,4);return $N(Z,$),b2(Z,Z.length-4,j.d()),Z}var m2=function(){function _($,j){e6.call(this,$,j),this.v=$&&$.dictionary?2:1}return _.prototype.push=function($,j){if(e6.prototype.e.call(this,$),this.v){if(this.p.length<6&&!j)return;this.p=this.p.subarray(jN(this.p,this.v-1)),this.v=0}if(j){if(this.p.length<4)N_(6,"invalid zlib data");this.p=this.p.subarray(0,-4)}e6.prototype.c.call(this,j)},_}();var ZN=typeof TextDecoder<"u"&&new TextDecoder,YN=0;try{ZN.decode(f2,{stream:!0}),YN=1}catch(_){}var qN=[58,50,42,34,26,18,10,2,60,52,44,36,28,20,12,4,62,54,46,38,30,22,14,6,64,56,48,40,32,24,16,8,57,49,41,33,25,17,9,1,59,51,43,35,27,19,11,3,61,53,45,37,29,21,13,5,63,55,47,39,31,23,15,7],QN=[40,8,48,16,56,24,64,32,39,7,47,15,55,23,63,31,38,6,46,14,54,22,62,30,37,5,45,13,53,21,61,29,36,4,44,12,52,20,60,28,35,3,43,11,51,19,59,27,34,2,42,10,50,18,58,26,33,1,41,9,49,17,57,25],NN=[32,1,2,3,4,5,4,5,6,7,8,9,8,9,10,11,12,13,12,13,14,15,16,17,16,17,18,19,20,21,20,21,22,23,24,25,24,25,26,27,28,29,28,29,30,31,32,1],KN=[16,7,20,21,29,12,28,17,1,15,23,26,5,18,31,10,2,8,24,14,32,27,3,9,19,13,30,6,22,11,4,25],GN=[57,49,41,33,25,17,9,1,58,50,42,34,26,18,10,2,59,51,43,35,27,19,11,3,60,52,44,36,63,55,47,39,31,23,15,7,62,54,46,38,30,22,14,6,61,53,45,37,29,21,13,5,28,20,12,4],XN=[14,17,11,24,1,5,3,28,15,6,21,10,23,19,12,4,26,8,16,7,27,20,13,2,41,52,31,37,47,55,30,40,51,45,33,48,44,49,39,56,34,53,46,42,50,36,29,32],VN=[1,1,2,2,2,2,2,2,1,2,2,2,2,2,2,1],UN=[[[14,4,13,1,2,15,11,8,3,10,6,12,5,9,0,7],[0,15,7,4,14,2,13,1,10,6,12,11,9,5,3,8],[4,1,14,8,13,6,2,11,15,12,9,7,3,10,5,0],[15,12,8,2,4,9,1,7,5,11,3,14,10,0,6,13]],[[15,1,8,14,6,11,3,4,9,7,2,13,12,0,5,10],[3,13,4,7,15,2,8,14,12,0,1,10,6,9,11,5],[0,14,7,11,10,4,13,1,5,8,12,6,9,3,2,15],[13,8,10,1,3,15,4,2,11,6,7,12,0,5,14,9]],[[10,0,9,14,6,3,15,5,1,13,12,7,11,4,2,8],[13,7,0,9,3,4,6,10,2,8,5,14,12,11,15,1],[13,6,4,9,8,15,3,0,11,1,2,12,5,10,14,7],[1,10,13,0,6,9,8,7,4,15,14,3,11,5,2,12]],[[7,13,14,3,0,6,9,10,1,2,8,5,11,12,4,15],[13,8,11,5,6,15,0,3,4,7,2,12,1,10,14,9],[10,6,9,0,12,11,7,13,15,1,3,14,5,2,8,4],[3,15,0,6,10,1,13,8,9,4,5,11,12,7,2,14]],[[2,12,4,1,7,10,11,6,8,5,3,15,13,0,14,9],[14,11,2,12,4,7,13,1,5,0,15,10,3,9,8,6],[4,2,1,11,10,13,7,8,15,9,12,5,6,3,0,14],[11,8,12,7,1,14,2,13,6,15,0,9,10,4,5,3]],[[12,1,10,15,9,2,6,8,0,13,3,4,14,7,5,11],[10,15,4,2,7,12,9,5,6,1,13,14,0,11,3,8],[9,14,15,5,2,8,12,3,7,0,4,10,1,13,11,6],[4,3,2,12,9,5,15,10,11,14,1,7,6,0,8,13]],[[4,11,2,14,15,0,8,13,3,12,9,7,5,10,6,1],[13,0,11,7,4,9,1,10,14,3,5,12,2,15,8,6],[1,4,11,13,12,3,7,14,10,15,6,8,0,5,9,2],[6,11,13,8,1,4,10,7,9,5,0,15,14,2,3,12]],[[13,2,8,4,6,15,11,1,10,9,3,14,5,0,12,7],[1,15,13,8,10,3,7,4,12,5,6,11,0,14,9,2],[7,11,4,1,9,12,14,2,0,6,10,13,15,3,5,8],[2,1,14,7,4,10,8,13,15,12,9,0,3,5,6,11]]],c2=new Uint8Array(256);for(let _=0;_<256;_+=1){let $=0;for(let j=0;j<8;j+=1)$=$<<1|_>>j&1;c2[_]=$}function l2(_){if(_ instanceof Uint8Array)return _;if(_ instanceof ArrayBuffer)return new Uint8Array(_);if(ArrayBuffer.isView(_))return new Uint8Array(_.buffer,_.byteOffset,_.byteLength);return new Uint8Array(0)}function n2(_){let $=0n,j=l2(_);for(let Z of j)$=$<<8n|BigInt(Z);return $}function LN(_,$){let j=new Uint8Array($),Z=BigInt(_);for(let Y=$-1;Y>=0;Y-=1)j[Y]=Number(Z&0xffn),Z>>=8n;return j}function K5(_,$,j){let Z=0n;for(let Y of $){let q=BigInt(_)>>BigInt(j-Y)&1n;Z=Z<<1n|q}return Z}function p2(_,$){let j=28n,Z=(1n<<j)-1n,Y=BigInt($%28);return(_<<Y|_>>j-Y)&Z}function WN(_){let $=K5(n2(_),GN,64),j=$>>28n&0x0fffffffn,Z=$&0x0fffffffn,Y=[];for(let q of VN){j=p2(j,q),Z=p2(Z,q);let Q=j<<28n|Z;Y.push(K5(Q,XN,56))}return Y}function BN(_){let $=0n;for(let j=0;j<8;j+=1){let Z=BigInt((7-j)*6),Y=Number(_>>Z&0x3fn),q=(Y&32)>>4|Y&1,Q=Y>>1&15;$=$<<4n|BigInt(UN[j][q][Q])}return $}function zN(_,$){let j=K5(_,NN,32)^BigInt($),Z=BN(j);return K5(Z,KN,32)}function h2(_,$){let j=WN($),Z=K5(n2(_),qN,64),Y=Z>>32n&0xffffffffn,q=Z&0xffffffffn;for(let N of j){let K=q,G=(Y^zN(q,N))&0xffffffffn;Y=K,q=G}let Q=q<<32n|Y;return LN(K5(Q,QN,64),8)}function FN(_){let $=String(_??""),j=new Uint8Array(8);for(let Z=0;Z<8;Z+=1){let Y=Z<$.length?$.charCodeAt(Z)&255:0;j[Z]=c2[Y]}return j}function d2(_,$){let j=l2($);if(j.byteLength!==16)throw Error(`Invalid VNC auth challenge length ${j.byteLength}; expected 16 bytes.`);let Z=FN(_),Y=new Uint8Array(16);return Y.set(h2(j.slice(0,8),Z),0),Y.set(h2(j.slice(8,16),Z),8),Y}var b_="vnc";function HN(_){return Number(_)}function JN(_){let $=Array.isArray(_)?_:typeof _==="string"?_.split(",").map((Y)=>Y.trim()).filter((Y)=>Y.length>0):[],j=[],Z=new Set;for(let Y of $){let q=HN(Y);if(!Number.isFinite(q))continue;let Q=Number(q);if(!Z.has(Q))j.push(Q),Z.add(Q)}if(j.length>0)return j;return[5,2,1,0,-223]}function V5(_){if(_ instanceof Uint8Array)return _;if(_ instanceof ArrayBuffer)return new Uint8Array(_);if(ArrayBuffer.isView(_))return new Uint8Array(_.buffer,_.byteOffset,_.byteLength);return new Uint8Array(0)}function ON(_,$){let j=V5(_),Z=V5($);if(!j.byteLength)return new Uint8Array(Z);if(!Z.byteLength)return new Uint8Array(j);let Y=new Uint8Array(j.byteLength+Z.byteLength);return Y.set(j,0),Y.set(Z,j.byteLength),Y}function DN(_){let $=0;for(let Y of _||[])$+=Y?.byteLength||0;let j=new Uint8Array($),Z=0;for(let Y of _||[]){let q=V5(Y);j.set(q,Z),Z+=q.byteLength}return j}function AN(){return(_)=>{let $=V5(_);try{let j=[],Z=new m2((Y)=>{j.push(new Uint8Array(Y))});if(Z.push($,!0),Z.err)throw Error(Z.msg||"zlib decompression error");return DN(j)}catch(j){try{let Z=g2($);return Z instanceof Uint8Array?Z:new Uint8Array(Z)}catch(Z){let Y=Z instanceof Error?Z.message:"unexpected EOF";throw Error(`unexpected EOF: ${Y}`)}}}}function EN(_){return new TextEncoder().encode(String(_||""))}function G5(_){return new TextDecoder().decode(V5(_))}function kN(_){let $=/^RFB (\d{3})\.(\d{3})\n$/.exec(String(_||""));if(!$)return null;return{major:parseInt($[1],10),minor:parseInt($[2],10),text:$[0]}}function MN(_){if(!_)return`RFB 003.008
`;if(_.major>3||_.minor>=8)return`RFB 003.008
`;if(_.minor>=7)return`RFB 003.007
`;return`RFB 003.003
`}function i2(_,$=0){return{bitsPerPixel:_.getUint8($),depth:_.getUint8($+1),bigEndian:_.getUint8($+2)===1,trueColor:_.getUint8($+3)===1,redMax:_.getUint16($+4,!1),greenMax:_.getUint16($+6,!1),blueMax:_.getUint16($+8,!1),redShift:_.getUint8($+10),greenShift:_.getUint8($+11),blueShift:_.getUint8($+12)}}function IN(_){let $=new ArrayBuffer(20),j=new DataView($);return j.setUint8(0,0),j.setUint8(1,0),j.setUint8(2,0),j.setUint8(3,0),j.setUint8(4,_.bitsPerPixel),j.setUint8(5,_.depth),j.setUint8(6,_.bigEndian?1:0),j.setUint8(7,_.trueColor?1:0),j.setUint16(8,_.redMax,!1),j.setUint16(10,_.greenMax,!1),j.setUint16(12,_.blueMax,!1),j.setUint8(14,_.redShift),j.setUint8(15,_.greenShift),j.setUint8(16,_.blueShift),new Uint8Array($)}function xN(_){let $=Array.isArray(_)?_:[],j=new ArrayBuffer(4+$.length*4),Z=new DataView(j);Z.setUint8(0,2),Z.setUint8(1,0),Z.setUint16(2,$.length,!1);let Y=4;for(let q of $)Z.setInt32(Y,Number(q||0),!1),Y+=4;return new Uint8Array(j)}function r2(_,$,j,Z=0,Y=0){let q=new ArrayBuffer(10),Q=new DataView(q);return Q.setUint8(0,3),Q.setUint8(1,_?1:0),Q.setUint16(2,Z,!1),Q.setUint16(4,Y,!1),Q.setUint16(6,Math.max(0,$||0),!1),Q.setUint16(8,Math.max(0,j||0),!1),new Uint8Array(q)}function X5(_,$){let j=Number($||0);if(j<=0)return 0;if(j===255)return _&255;return Math.max(0,Math.min(255,Math.round((_||0)*255/j)))}function s2(_,$,j,Z){if(j===1)return _[$];if(j===2)return Z?(_[$]<<8|_[$+1])>>>0:(_[$]|_[$+1]<<8)>>>0;if(j===3)return Z?(_[$]<<16|_[$+1]<<8|_[$+2])>>>0:(_[$]|_[$+1]<<8|_[$+2]<<16)>>>0;if(j===4)return Z?(_[$]<<24>>>0|_[$+1]<<16|_[$+2]<<8|_[$+3])>>>0:(_[$]|_[$+1]<<8|_[$+2]<<16|_[$+3]<<24>>>0)>>>0;return 0}function TN(_,$,j,Z){let Y=Z||U5,q=V5(_),Q=Math.max(1,Math.floor(Number(Y.bitsPerPixel||0)/8)),N=Math.max(0,$||0)*Math.max(0,j||0)*Q;if(q.byteLength<N)throw Error(`Incomplete raw rectangle payload: expected ${N} byte(s), got ${q.byteLength}`);if(!Y.trueColor)throw Error("Indexed-colour VNC framebuffers are not supported yet.");let K=new Uint8ClampedArray(Math.max(0,$||0)*Math.max(0,j||0)*4),G=0,V=0;for(let X=0;X<Math.max(0,$||0)*Math.max(0,j||0);X+=1){let U=s2(q,G,Q,Y.bigEndian),L=X5(U>>>Y.redShift&Y.redMax,Y.redMax),H=X5(U>>>Y.greenShift&Y.greenMax,Y.greenMax),O=X5(U>>>Y.blueShift&Y.blueMax,Y.blueMax);K[V]=L,K[V+1]=H,K[V+2]=O,K[V+3]=255,G+=Q,V+=4}return K}function G4(_,$,j){let Z=j||U5,Y=Math.max(1,Math.floor(Number(Z.bitsPerPixel||0)/8));if(_.byteLength<$+Y)return null;let q=s2(_,$,Y,Z.bigEndian);return{rgba:[X5(q>>>Z.redShift&Z.redMax,Z.redMax),X5(q>>>Z.greenShift&Z.greenMax,Z.greenMax),X5(q>>>Z.blueShift&Z.blueMax,Z.blueMax),255],bytesPerPixel:Y}}function E4(_,$,j,Z,Y,q,Q){if(!Q)return;for(let N=0;N<q;N+=1)for(let K=0;K<Y;K+=1){let G=((Z+N)*$+(j+K))*4;_[G]=Q[0],_[G+1]=Q[1],_[G+2]=Q[2],_[G+3]=Q[3]}}function a2(_,$,j,Z,Y,q,Q){for(let N=0;N<q;N+=1){let K=N*Y*4,G=((Z+N)*$+j)*4;_.set(Q.subarray(K,K+Y*4),G)}}function o2(_,$){let j=$,Z=1;while(!0){if(_.byteLength<j+1)return null;let Y=_[j++];if(Z+=Y,Y!==255)break}return{consumed:j-$,runLength:Z}}function CN(_,$,j,Z,Y,q,Q){let N=Y||U5,K=Math.max(1,Math.floor(Number(N.bitsPerPixel||0)/8));if(_.byteLength<$+4)return null;let G=new DataView(_.buffer,_.byteOffset+$,4).getUint32(0,!1);if(_.byteLength<$+4+G)return null;let V=_.slice($+4,$+4+G),X;try{X=Q(V)}catch{return{consumed:4+G,skipped:!0}}let U=0,L=new Uint8ClampedArray(Math.max(0,j||0)*Math.max(0,Z||0)*4);for(let H=0;H<Z;H+=64){let O=Math.min(64,Z-H);for(let J=0;J<j;J+=64){let W=Math.min(64,j-J);if(X.byteLength<U+1)return null;let D=X[U++],E=D&127,R=(D&128)!==0;if(!R&&E===0){let P=W*O*K;if(X.byteLength<U+P)return null;let m=q(X.slice(U,U+P),W,O,N);U+=P,a2(L,j,J,H,W,O,m);continue}if(!R&&E===1){let P=G4(X,U,N);if(!P)return null;U+=P.bytesPerPixel,E4(L,j,J,H,W,O,P.rgba);continue}if(!R&&E>1&&E<=16){let P=[];for(let M=0;M<E;M+=1){let z=G4(X,U,N);if(!z)return null;U+=z.bytesPerPixel,P.push(z.rgba)}let m=E<=2?1:E<=4?2:4,c=Math.ceil(W*m/8),x=c*O;if(X.byteLength<U+x)return null;for(let M=0;M<O;M+=1){let z=U+M*c;for(let k=0;k<W;k+=1){let u=k*m,n=z+(u>>3),b=8-m-(u&7),d=X[n]>>b&(1<<m)-1;E4(L,j,J+k,H+M,1,1,P[d])}}U+=x;continue}if(R&&E===0){let P=0,m=0;while(m<O){let c=G4(X,U,N);if(!c)return null;U+=c.bytesPerPixel;let x=o2(X,U);if(!x)return null;U+=x.consumed;for(let M=0;M<x.runLength;M+=1)if(E4(L,j,J+P,H+m,1,1,c.rgba),P+=1,P>=W){if(P=0,m+=1,m>=O)break}}continue}if(R&&E>0){let P=[];for(let x=0;x<E;x+=1){let M=G4(X,U,N);if(!M)return null;U+=M.bytesPerPixel,P.push(M.rgba)}let m=0,c=0;while(c<O){if(X.byteLength<U+1)return null;let x=X[U++],M=x,z=1;if(x&128){M=x&127;let u=o2(X,U);if(!u)return null;U+=u.consumed,z=u.runLength}let k=P[M];if(!k)return null;for(let u=0;u<z;u+=1)if(E4(L,j,J+m,H+c,1,1,k),m+=1,m>=W){if(m=0,c+=1,c>=O)break}}continue}return{consumed:4+G,skipped:!0}}}return{consumed:4+G,rgba:L,decompressed:X}}function yN(_,$,j,Z,Y){let q=Y||U5,Q=Math.max(1,Math.floor(Number(q.bitsPerPixel||0)/8));if(_.byteLength<$+4+Q)return null;let K=new DataView(_.buffer,_.byteOffset+$,_.byteLength-$).getUint32(0,!1),G=4+Q+K*(Q+8);if(_.byteLength<$+G)return null;let V=$+4,X=G4(_,V,q);if(!X)return null;V+=X.bytesPerPixel;let U=new Uint8ClampedArray(Math.max(0,j||0)*Math.max(0,Z||0)*4);E4(U,j,0,0,j,Z,X.rgba);for(let L=0;L<K;L+=1){let H=G4(_,V,q);if(!H)return null;if(V+=H.bytesPerPixel,_.byteLength<V+8)return null;let O=new DataView(_.buffer,_.byteOffset+V,8),J=O.getUint16(0,!1),W=O.getUint16(2,!1),D=O.getUint16(4,!1),E=O.getUint16(6,!1);V+=8,E4(U,j,J,W,D,E,H.rgba)}return{consumed:V-$,rgba:U}}function PN(_,$,j,Z,Y,q){let Q=Y||U5,N=Math.max(1,Math.floor(Number(Q.bitsPerPixel||0)/8)),K=new Uint8ClampedArray(Math.max(0,j||0)*Math.max(0,Z||0)*4),G=$,V=[0,0,0,255],X=[255,255,255,255];for(let U=0;U<Z;U+=16){let L=Math.min(16,Z-U);for(let H=0;H<j;H+=16){let O=Math.min(16,j-H);if(_.byteLength<G+1)return null;let J=_[G++];if(J&1){let W=O*L*N;if(_.byteLength<G+W)return null;let D=q(_.slice(G,G+W),O,L,Q);G+=W,a2(K,j,H,U,O,L,D);continue}if(J&2){let W=G4(_,G,Q);if(!W)return null;V=W.rgba,G+=W.bytesPerPixel}if(E4(K,j,H,U,O,L,V),J&4){let W=G4(_,G,Q);if(!W)return null;X=W.rgba,G+=W.bytesPerPixel}if(J&8){if(_.byteLength<G+1)return null;let W=_[G++];for(let D=0;D<W;D+=1){let E=X;if(J&16){let z=G4(_,G,Q);if(!z)return null;E=z.rgba,G+=z.bytesPerPixel}if(_.byteLength<G+2)return null;let R=_[G++],P=_[G++],m=R>>4,c=R&15,x=(P>>4)+1,M=(P&15)+1;E4(K,j,H+m,U+c,x,M,E)}}}}return{consumed:G-$,rgba:K}}var U5={bitsPerPixel:32,depth:24,bigEndian:!1,trueColor:!0,redMax:255,greenMax:255,blueMax:255,redShift:16,greenShift:8,blueShift:0};class A8{protocol=b_;constructor(_={}){this.shared=_.shared!==!1,this.decodeRawRect=typeof _.decodeRawRect==="function"?_.decodeRawRect:TN,this.pipeline=_.pipeline||null,this.encodings=JN(_.encodings||null),this.state="version",this.buffer=new Uint8Array(0),this.serverVersion=null,this.clientVersionText=null,this.framebufferWidth=0,this.framebufferHeight=0,this.serverName="",this.serverPixelFormat=null,this.clientPixelFormat={...U5},this.password=typeof _.password==="string"&&_.password.length>0?_.password:null,this.inflateZrle=typeof _.inflateZrle==="function"?_.inflateZrle:AN()}receive(_){if(_)this.buffer=ON(this.buffer,_);let $=[],j=[],Z=!0;while(Z){if(Z=!1,this.state==="version"){if(this.buffer.byteLength<12)break;let Y=this.consume(12),q=G5(Y),Q=kN(q);if(!Q)throw Error(`Unsupported RFB version banner: ${q||"<empty>"}`);this.serverVersion=Q,this.clientVersionText=MN(Q),j.push(EN(this.clientVersionText)),$.push({type:"protocol-version",protocol:b_,server:Q.text.trim(),client:this.clientVersionText.trim()}),this.state=Q.minor>=7?"security-types":"security-type-33",Z=!0;continue}if(this.state==="security-types"){if(this.buffer.byteLength<1)break;let Y=this.buffer[0];if(Y===0){if(this.buffer.byteLength<5)break;let K=new DataView(this.buffer.buffer,this.buffer.byteOffset,this.buffer.byteLength).getUint32(1,!1);if(this.buffer.byteLength<5+K)break;this.consume(1);let G=G5(this.consume(4+K).slice(4));throw Error(G||"VNC server rejected the connection.")}if(this.buffer.byteLength<1+Y)break;this.consume(1);let q=Array.from(this.consume(Y));$.push({type:"security-types",protocol:b_,types:q});let Q=null;if(q.includes(2)&&this.password!==null)Q=2;else if(q.includes(1))Q=1;else if(q.includes(2))throw Error("VNC password authentication is required. Enter a password and reconnect.");else throw Error(`Unsupported VNC security types: ${q.join(", ")||"none"}. This viewer currently supports only "None" and password-based VNC auth.`);j.push(Uint8Array.of(Q)),$.push({type:"security-selected",protocol:b_,securityType:Q,label:Q===2?"VNC Authentication":"None"}),this.state=Q===2?"security-challenge":"security-result",Z=!0;continue}if(this.state==="security-type-33"){if(this.buffer.byteLength<4)break;let q=new DataView(this.buffer.buffer,this.buffer.byteOffset,this.buffer.byteLength).getUint32(0,!1);if(this.consume(4),q===0){if(this.buffer.byteLength<4)break;let N=new DataView(this.buffer.buffer,this.buffer.byteOffset,this.buffer.byteLength).getUint32(0,!1);if(this.buffer.byteLength<4+N)break;let K=G5(this.consume(4+N).slice(4));throw Error(K||"VNC server rejected the connection.")}if(q===2){if(this.password===null)throw Error("VNC password authentication is required. Enter a password and reconnect.");$.push({type:"security-selected",protocol:b_,securityType:2,label:"VNC Authentication"}),this.state="security-challenge",Z=!0;continue}if(q!==1)throw Error(`Unsupported VNC security type ${q}. This viewer currently supports only "None" and password-based VNC auth.`);$.push({type:"security-selected",protocol:b_,securityType:1,label:"None"}),j.push(Uint8Array.of(this.shared?1:0)),this.state="server-init",Z=!0;continue}if(this.state==="security-challenge"){if(this.buffer.byteLength<16)break;if(this.password===null)throw Error("VNC password authentication is required. Enter a password and reconnect.");let Y=this.consume(16);j.push(d2(this.password,Y)),this.state="security-result",Z=!0;continue}if(this.state==="security-result"){if(this.buffer.byteLength<4)break;let q=new DataView(this.buffer.buffer,this.buffer.byteOffset,this.buffer.byteLength).getUint32(0,!1);if(this.consume(4),q!==0){if(this.buffer.byteLength>=4){let Q=new DataView(this.buffer.buffer,this.buffer.byteOffset,this.buffer.byteLength).getUint32(0,!1);if(this.buffer.byteLength>=4+Q){let N=G5(this.consume(4+Q).slice(4));throw Error(N||"VNC authentication failed.")}}throw Error("VNC authentication failed.")}$.push({type:"security-result",protocol:b_,ok:!0}),j.push(Uint8Array.of(this.shared?1:0)),this.state="server-init",Z=!0;continue}if(this.state==="server-init"){if(this.buffer.byteLength<24)break;let Y=new DataView(this.buffer.buffer,this.buffer.byteOffset,this.buffer.byteLength),q=Y.getUint16(0,!1),Q=Y.getUint16(2,!1),N=i2(Y,4),K=Y.getUint32(20,!1);if(this.buffer.byteLength<24+K)break;let G=this.consume(24),V=new DataView(G.buffer,G.byteOffset,G.byteLength);if(this.framebufferWidth=V.getUint16(0,!1),this.framebufferHeight=V.getUint16(2,!1),this.serverPixelFormat=i2(V,4),this.serverName=G5(this.consume(K)),this.state="connected",this.pipeline)this.pipeline.initFramebuffer(this.framebufferWidth,this.framebufferHeight);j.push(IN(this.clientPixelFormat)),j.push(xN(this.encodings)),j.push(r2(!1,this.framebufferWidth,this.framebufferHeight)),$.push({type:"display-init",protocol:b_,width:q,height:Q,name:this.serverName,pixelFormat:N}),Z=!0;continue}if(this.state==="connected"){if(this.buffer.byteLength<1)break;let Y=this.buffer[0];if(Y===0){if(this.buffer.byteLength<4)break;let Q=new DataView(this.buffer.buffer,this.buffer.byteOffset,this.buffer.byteLength).getUint16(2,!1),N=4,K=[],G=!1,V=!!this.pipeline;for(let U=0;U<Q;U+=1){if(this.buffer.byteLength<N+12){G=!0;break}let L=new DataView(this.buffer.buffer,this.buffer.byteOffset+N,12),H=L.getUint16(0,!1),O=L.getUint16(2,!1),J=L.getUint16(4,!1),W=L.getUint16(6,!1),D=L.getInt32(8,!1);if(N+=12,D===0){let E=Math.max(1,Math.floor(Number(this.clientPixelFormat.bitsPerPixel||0)/8)),R=J*W*E;if(this.buffer.byteLength<N+R){G=!0;break}let P=this.buffer.slice(N,N+R);if(N+=R,V)this.pipeline.processRawRect(P,H,O,J,W,this.clientPixelFormat),K.push({kind:"pipeline",x:H,y:O,width:J,height:W});else K.push({kind:"rgba",x:H,y:O,width:J,height:W,rgba:this.decodeRawRect(P,J,W,this.clientPixelFormat)});continue}if(D===2){let E=yN(this.buffer,N,J,W,this.clientPixelFormat);if(!E){G=!0;break}if(V){let R=this.buffer.slice(N,N+E.consumed);this.pipeline.processRreRect(R,H,O,J,W,this.clientPixelFormat),K.push({kind:"pipeline",x:H,y:O,width:J,height:W})}else K.push({kind:"rgba",x:H,y:O,width:J,height:W,rgba:E.rgba});N+=E.consumed;continue}if(D===1){if(this.buffer.byteLength<N+4){G=!0;break}let E=new DataView(this.buffer.buffer,this.buffer.byteOffset+N,4),R=E.getUint16(0,!1),P=E.getUint16(2,!1);if(N+=4,V)this.pipeline.processCopyRect(H,O,J,W,R,P),K.push({kind:"pipeline",x:H,y:O,width:J,height:W});else K.push({kind:"copy",x:H,y:O,width:J,height:W,srcX:R,srcY:P});continue}if(D===16){let E=CN(this.buffer,N,J,W,this.clientPixelFormat,this.decodeRawRect,this.inflateZrle);if(!E){G=!0;break}if(N+=E.consumed,E.skipped)continue;if(V&&E.decompressed)this.pipeline.processZrleTileData(E.decompressed,H,O,J,W,this.clientPixelFormat),K.push({kind:"pipeline",x:H,y:O,width:J,height:W});else K.push({kind:"rgba",x:H,y:O,width:J,height:W,rgba:E.rgba});continue}if(D===5){let E=PN(this.buffer,N,J,W,this.clientPixelFormat,this.decodeRawRect);if(!E){G=!0;break}if(V){let R=this.buffer.slice(N,N+E.consumed);this.pipeline.processHextileRect(R,H,O,J,W,this.clientPixelFormat),K.push({kind:"pipeline",x:H,y:O,width:J,height:W})}else K.push({kind:"rgba",x:H,y:O,width:J,height:W,rgba:E.rgba});N+=E.consumed;continue}if(D===-223){if(this.framebufferWidth=J,this.framebufferHeight=W,V)this.pipeline.initFramebuffer(J,W);K.push({kind:"resize",x:H,y:O,width:J,height:W});continue}throw Error(`Unsupported VNC rectangle encoding ${D}. This viewer currently supports ZRLE, Hextile, RRE, CopyRect, raw rectangles, and DesktopSize only.`)}if(G)break;this.consume(N);let X={type:"framebuffer-update",protocol:b_,width:this.framebufferWidth,height:this.framebufferHeight,rects:K};if(V)X.framebuffer=this.pipeline.getFramebuffer();$.push(X),j.push(r2(!0,this.framebufferWidth,this.framebufferHeight)),Z=!0;continue}if(Y===2){this.consume(1),$.push({type:"bell",protocol:b_}),Z=!0;continue}if(Y===3){if(this.buffer.byteLength<8)break;let Q=new DataView(this.buffer.buffer,this.buffer.byteOffset,this.buffer.byteLength).getUint32(4,!1);if(this.buffer.byteLength<8+Q)break;this.consume(8);let N=G5(this.consume(Q));$.push({type:"clipboard",protocol:b_,text:N}),Z=!0;continue}throw Error(`Unsupported VNC server message type ${Y}.`)}}return{events:$,outgoing:j}}consume(_){let $=this.buffer.slice(0,_);return this.buffer=this.buffer.slice(_),$}}var X4="piclaw://vnc";function SN(_){let $=String(_||"");if($===X4)return null;if(!$.startsWith(`${X4}/`))return null;let j=$.slice(`${X4}/`.length).trim();if(!j)return null;try{return decodeURIComponent(j)}catch{return j}}function m4(_){return String(_||"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}async function wN(_=null){let $=_?`/vnc/session?target=${encodeURIComponent(_)}`:"/vnc/session",j=await fetch($,{credentials:"same-origin"}),Z=await j.json().catch(()=>({}));if(!j.ok)throw Error(Z?.error||`HTTP ${j.status}`);return Z}async function RN(_){let $=`/vnc/handoff?target=${encodeURIComponent(String(_||"").trim())}`,j=await fetch($,{method:"POST",credentials:"same-origin"}),Z=await j.json().catch(()=>({}));if(!j.ok)throw Error(Z?.error||`HTTP ${j.status}`);return Z?.handoff||null}function uN(_,$=null){let j=window.location.protocol==="https:"?"wss:":"ws:",Z=new URL(`${j}//${window.location.host}/vnc/ws`);if(Z.searchParams.set("target",String(_||"")),$)Z.searchParams.set("handoff",String($));return Z.toString()}function fN(_,$){let j=String(_||"").trim(),Z=Math.floor(Number($||0));if(!j||!Number.isFinite(Z)||Z<=0||Z>65535)return null;return`${j.includes(":")&&!j.startsWith("[")?`[${j}]`:j}:${Z}`}function vN(_){if(typeof window>"u")return null;try{let $=new URL(window.location.href),j=$.searchParams.get(_)?.trim()||"";if(!j)return null;return $.searchParams.delete(_),window.history?.replaceState?.(window.history.state,document.title,$.toString()),j}catch{return null}}class t2{container;root;statusEl;bodyEl;metricsEl;targetSubtitleEl;socketBoundary=null;protocol=null;disposed=!1;targetId=null;targetLabel=null;bytesIn=0;bytesOut=0;canvas=null;canvasCtx=null;displayPlaceholderEl=null;displayInfoEl=null;displayMetaEl=null;displayStageEl=null;chromeEl=null;sessionShellEl=null;resizeObserver=null;displayScale=null;readOnly=!1;pointerButtonMask=0;pressedKeysyms=new Map;passwordInputEl=null;authPassword=null;directHostInputEl=null;directPortInputEl=null;directPasswordInputEl=null;hasRenderedFrame=!1;frameTimeoutId=null;reconnectTimerId=null;reconnectAttempts=0;rawFallbackAttempted=!1;protocolRecovering=!1;pendingHandoffToken=null;constructor(_,$){this.container=_,this.targetId=SN($?.path),this.targetLabel=this.targetId||null,this.pendingHandoffToken=vN("vnc_handoff"),this.root=document.createElement("div"),this.root.className="vnc-pane-shell",this.root.style.cssText="display:flex;flex-direction:column;width:100%;height:100%;background:var(--bg-primary);color:var(--text-primary);",this.targetSubtitleEl=null,this.statusEl=document.createElement("div"),this.statusEl.style.cssText="display:none;",this.statusEl.textContent="",this.bodyEl=document.createElement("div"),this.bodyEl.style.cssText="flex:1;min-height:0;display:flex;align-items:stretch;justify-content:stretch;padding:12px;",this.metricsEl=document.createElement("div"),this.metricsEl.style.cssText="display:none;",this.updateMetrics(),this.root.append(this.statusEl,this.bodyEl),this.container.appendChild(this.root),this.load()}setStatus(_){this.statusEl.textContent=String(_||"")}setSessionChromeVisible(_){if(this.chromeEl)this.chromeEl.style.display=_?"grid":"none";if(this.sessionShellEl?.style)this.sessionShellEl.style.gridTemplateRows=_?"auto minmax(0,1fr)":"1fr";if(this.displayStageEl?.style)this.displayStageEl.style.padding=_?"12px":"0",this.displayStageEl.style.border=_?"1px solid var(--border-color)":"none",this.displayStageEl.style.borderRadius=_?"16px":"0",this.displayStageEl.style.background=_?"#0a0a0a":"#000";if(this.displayPlaceholderEl?.style)this.displayPlaceholderEl.style.display=_&&!this.hasRenderedFrame?"block":"none"}clearReconnectTimer(){if(this.reconnectTimerId)clearTimeout(this.reconnectTimerId),this.reconnectTimerId=null}scheduleReconnect(){if(this.disposed||!this.targetId)return;this.clearReconnectTimer();let _=Math.min(8000,1500+this.reconnectAttempts*1000);this.reconnectAttempts+=1,this.reconnectTimerId=setTimeout(()=>{if(this.reconnectTimerId=null,this.disposed||!this.targetId)return;this.connectSocket()},_)}updateMetrics(){this.metricsEl.textContent=`Transport bytes — in: ${this.bytesIn} / out: ${this.bytesOut}`}applyMetrics(_){this.bytesIn=Number(_?.bytesIn||0),this.bytesOut=Number(_?.bytesOut||0),this.updateMetrics()}openTargetTab(_,$){if(this.targetId=String(_||"").trim()||null,this.targetLabel=String($||_||"").trim()||this.targetId||"VNC",this.targetId)this.renderTargetSession({direct_connect_enabled:!0,target:{id:this.targetId,label:this.targetLabel,read_only:!1,direct_connect:!0}}),this.setStatus("Connecting…"),this.updateDisplayInfo("Connecting…"),this.updateDisplayMeta("connecting");this.load()}requestPanePopout(_,$){this.container.dispatchEvent(new CustomEvent("pane:popout",{bubbles:!0,detail:{path:_,label:$}}))}resetLiveSession(){this.clearReconnectTimer(),this.reconnectAttempts=0,this.protocol=null;try{this.socketBoundary?.dispose?.()}catch{}this.socketBoundary=null;try{this.resizeObserver?.disconnect?.()}catch{}if(this.resizeObserver=null,this.canvas=null,this.canvasCtx=null,this.displayPlaceholderEl=null,this.displayInfoEl=null,this.displayMetaEl=null,this.displayStageEl=null,this.displayScale=null,this.passwordInputEl=null,this.directHostInputEl=null,this.directPortInputEl=null,this.directPasswordInputEl=null,this.hasRenderedFrame=!1,this.rawFallbackAttempted=!1,this.protocolRecovering=!1,this.frameTimeoutId)clearTimeout(this.frameTimeoutId),this.frameTimeoutId=null;this.pressedKeysyms.clear()}renderTargets(_){this.resetLiveSession();let $=Array.isArray(_?.targets)?_.targets:[],j=Boolean(_?.direct_connect_enabled);this.bodyEl.innerHTML=`
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
                                    <div style="font-weight:600;margin-bottom:6px;">${m4(Y.label||Y.id)}</div>
                                    <div style="font:12px var(--font-family-mono, monospace);color:var(--text-secondary);">${m4(Y.id)}</div>
                                    <div style="margin-top:8px;font-size:12px;color:var(--text-secondary);">${Y.readOnly?"Read-only target":"Interactive target"}</div>
                                </div>
                                <div style="display:flex;flex-wrap:wrap;gap:8px;">
                                    <button type="button" data-target-open-tab="${m4(Y.id)}" data-target-label="${m4(Y.label||Y.id)}" style="padding:8px 12px;border:1px solid var(--border-color);border-radius:10px;background:var(--bg-primary);cursor:pointer;color:inherit;">Connect</button>
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
        `,this.directHostInputEl=this.bodyEl.querySelector("[data-vnc-direct-host]"),this.directPortInputEl=this.bodyEl.querySelector("[data-vnc-direct-port]"),this.directPasswordInputEl=this.bodyEl.querySelector("[data-vnc-direct-password]");let Z=()=>{let Y=fN(this.directHostInputEl?.value,this.directPortInputEl?.value);if(!Y)return;this.authPassword=u5(this.directPasswordInputEl?this.directPasswordInputEl.value:this.authPassword),this.openTargetTab(Y,Y)};this.directHostInputEl?.addEventListener("keydown",(Y)=>{if(Y.key!=="Enter")return;Y.preventDefault(),Z()}),this.directPortInputEl?.addEventListener("keydown",(Y)=>{if(Y.key!=="Enter")return;Y.preventDefault(),Z()}),this.directPasswordInputEl?.addEventListener("keydown",(Y)=>{if(Y.key!=="Enter")return;Y.preventDefault(),Z()}),this.bodyEl.querySelector("[data-direct-open-tab]")?.addEventListener("click",()=>Z());for(let Y of Array.from(this.bodyEl.querySelectorAll("[data-target-open-tab]")))Y.addEventListener("click",()=>{let q=Y.getAttribute("data-target-open-tab"),Q=Y.getAttribute("data-target-label")||q||"VNC";if(!q)return;this.openTargetTab(q,Q)})}renderTargetSession(_){this.resetLiveSession();let $=_?.target||{},j=$?.label||this.targetId||"VNC target";if(this.targetLabel=j,this.readOnly=Boolean($.read_only),this.pointerButtonMask=0,this.hasRenderedFrame=!1,this.pressedKeysyms.clear(),this.bodyEl.innerHTML=`
            <div data-vnc-session-shell style="width:100%;height:100%;min-height:0;display:grid;grid-template-rows:auto minmax(0,1fr);gap:12px;">
                <div data-vnc-session-chrome style="padding:10px 12px;border:1px solid var(--border-color);border-radius:14px;background:var(--bg-secondary);display:grid;gap:10px;">
                    <div style="display:grid;gap:4px;min-width:0;">
                        <div style="font:12px var(--font-family-mono, monospace);color:var(--text-secondary);white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">${m4($.id||this.targetId||"")} · ${$.read_only?"read-only":"interactive"} · websocket → TCP proxy</div>
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
                        <div style="font-weight:700;font-size:18px;margin-bottom:8px;">${m4(j)}</div>
                        <div style="font-size:13px;color:#b7b7b7;">Waiting for the VNC/RFB handshake and first framebuffer update…</div>
                    </div>
                </div>
            </div>
        `,this.sessionShellEl=this.bodyEl.querySelector("[data-vnc-session-shell]"),this.chromeEl=this.bodyEl.querySelector("[data-vnc-session-chrome]"),this.displayStageEl=this.bodyEl.querySelector("[data-display-stage]"),this.canvas=this.bodyEl.querySelector("[data-display-canvas]"),this.displayPlaceholderEl=this.bodyEl.querySelector("[data-display-placeholder]"),this.displayInfoEl=this.bodyEl.querySelector("[data-display-info]"),this.displayMetaEl=this.bodyEl.querySelector("[data-display-meta]"),this.canvasCtx=this.canvas?.getContext?.("2d",{alpha:!1})||null,this.canvasCtx)this.canvasCtx.imageSmoothingEnabled=!0,this.canvasCtx.imageSmoothingQuality="high";if(this.updateDisplayInfo("Waiting for VNC protocol negotiation…"),this.updateDisplayMeta(),this.setSessionChromeVisible(!0),this.attachDisplayResizeObserver(),this.attachCanvasPointerHandlers(),this.attachCanvasKeyboardHandlers(),this.passwordInputEl=this.bodyEl.querySelector("[data-vnc-password]"),this.passwordInputEl&&this.authPassword!==null)this.passwordInputEl.value=this.authPassword;this.passwordInputEl?.addEventListener("input",()=>{this.authPassword=u5(this.passwordInputEl.value)}),this.passwordInputEl?.addEventListener("keydown",(q)=>{if(q.key!=="Enter")return;q.preventDefault(),this.connectSocket()}),this.bodyEl.querySelector("[data-vnc-reconnect]")?.addEventListener("click",()=>{this.authPassword=u5(this.passwordInputEl?this.passwordInputEl.value:this.authPassword),this.connectSocket()}),this.bodyEl.querySelector("[data-open-target-picker]")?.addEventListener("click",()=>{this.openTargetTab("","VNC")})}updateDisplayInfo(_){if(this.displayInfoEl)this.displayInfoEl.textContent=String(_||"")}updateDisplayMeta(_=""){if(!this.displayMetaEl)return;let $=this.protocol?.state?`state=${this.protocol.state}`:"state=idle",j=this.protocol?.framebufferWidth&&this.protocol?.framebufferHeight?`${this.protocol.framebufferWidth}×${this.protocol.framebufferHeight}`:"pending",Z=this.protocol?.serverName?` · name=${this.protocol.serverName}`:"",Y=this.displayScale?` · scale=${Math.round(this.displayScale*100)}%`:"",q=_?` · ${_}`:"";this.displayMetaEl.textContent=`${$} · framebuffer=${j}${Z}${Y}${q}`}ensureCanvasSize(_,$,j={}){if(!this.canvas||!this.canvasCtx||!_||!$)return;if(this.canvas.width!==_||this.canvas.height!==$)this.canvas.width=_,this.canvas.height=$;let Z=j?.reveal===!0;if(this.canvas.style.display=Z||this.hasRenderedFrame?"block":"none",this.canvas.style.aspectRatio=`${_} / ${$}`,this.displayPlaceholderEl)this.displayPlaceholderEl.style.display=Z||this.hasRenderedFrame?"none":"";this.updateCanvasScale()}attachDisplayResizeObserver(){if(!this.displayStageEl||typeof ResizeObserver>"u")return;try{this.resizeObserver?.disconnect?.()}catch{}this.resizeObserver=new ResizeObserver(()=>{this.updateCanvasScale()}),this.resizeObserver.observe(this.displayStageEl)}updateCanvasScale(){if(!this.canvas||!this.displayStageEl||!this.canvas.width||!this.canvas.height)return;requestAnimationFrame(()=>{if(!this.canvas||!this.displayStageEl)return;let _=this.displayStageEl.getBoundingClientRect?.(),$=Math.max(1,Math.floor(_?.width||this.displayStageEl.clientWidth||0)-32),j=Math.max(1,Math.floor(_?.height||this.displayStageEl.clientHeight||0)-32);if(!$||!j)return;let Z=x2($,j,this.canvas.width,this.canvas.height);this.displayScale=Z,this.canvas.style.width=`${Math.max(1,Math.round(this.canvas.width*Z))}px`,this.canvas.style.height=`${Math.max(1,Math.round(this.canvas.height*Z))}px`,this.updateDisplayMeta()})}getFramebufferPointFromEvent(_){if(!this.canvas||!this.protocol?.framebufferWidth||!this.protocol?.framebufferHeight)return null;let $=this.canvas.getBoundingClientRect?.();if(!$||!$.width||!$.height)return null;return k2(_.clientX,_.clientY,$,this.protocol.framebufferWidth,this.protocol.framebufferHeight)}sendPointerEvent(_,$,j){if(!this.socketBoundary||!this.protocol||this.protocol.state!=="connected")return;this.socketBoundary.send(J8(_,$,j))}attachCanvasPointerHandlers(){if(!this.canvas||this.readOnly)return;this.canvas.style.cursor="crosshair",this.canvas.style.touchAction="none",this.canvas.addEventListener("contextmenu",(_)=>{_.preventDefault()}),this.canvas.addEventListener("pointermove",(_)=>{let $=this.getFramebufferPointFromEvent(_);if(!$)return;this.sendPointerEvent(this.pointerButtonMask,$.x,$.y)}),this.canvas.addEventListener("pointerdown",(_)=>{let $=this.getFramebufferPointFromEvent(_);if(!$)return;_.preventDefault(),this.canvas?.focus?.();try{this.canvas?.setPointerCapture?.(_.pointerId)}catch{}this.pointerButtonMask|=r6(_.button),this.sendPointerEvent(this.pointerButtonMask,$.x,$.y)}),this.canvas.addEventListener("pointerup",(_)=>{let $=this.getFramebufferPointFromEvent(_);if(!$)return;_.preventDefault(),this.pointerButtonMask&=~r6(_.button),this.sendPointerEvent(this.pointerButtonMask,$.x,$.y);try{this.canvas?.releasePointerCapture?.(_.pointerId)}catch{}}),this.canvas.addEventListener("pointercancel",(_)=>{let $=this.getFramebufferPointFromEvent(_)||{x:0,y:0};this.pointerButtonMask=0,this.sendPointerEvent(0,$.x,$.y);try{this.canvas?.releasePointerCapture?.(_.pointerId)}catch{}}),this.canvas.addEventListener("wheel",(_)=>{let $=this.getFramebufferPointFromEvent(_);if(!$)return;_.preventDefault();for(let j of M2(_.deltaY,$.x,$.y,this.pointerButtonMask))this.socketBoundary?.send?.(j)},{passive:!1})}sendKeyEvent(_,$){if(!this.socketBoundary||!this.protocol||this.protocol.state!=="connected")return;this.socketBoundary.send(I2(_,$))}releasePressedKeys(){for(let _ of this.pressedKeysyms.values())this.sendKeyEvent(!1,_);this.pressedKeysyms.clear()}attachCanvasKeyboardHandlers(){if(!this.canvas||this.readOnly)return;this.canvas.addEventListener("keydown",(_)=>{let $=o6(_);if($==null)return;if(_.repeat&&this.pressedKeysyms.has(_.code||_.key)){_.preventDefault();return}_.preventDefault();let j=_.code||_.key;this.pressedKeysyms.set(j,$),this.sendKeyEvent(!0,$)}),this.canvas.addEventListener("keyup",(_)=>{let $=_.code||_.key,j=this.pressedKeysyms.get($)??o6(_);if(j==null)return;_.preventDefault(),this.pressedKeysyms.delete($),this.sendKeyEvent(!1,j)}),this.canvas.addEventListener("blur",()=>{this.releasePressedKeys()})}drawRgbaRect(_){if(!this.canvasCtx||!this.canvas)return;this.ensureCanvasSize(this.canvas.width||_.width,this.canvas.height||_.height,{reveal:!0});let $=new ImageData(_.rgba,_.width,_.height);this.canvasCtx.putImageData($,_.x,_.y),this.hasRenderedFrame=!0}copyCanvasRect(_){if(!this.canvasCtx||!this.canvas)return;this.ensureCanvasSize(this.canvas.width||_.width,this.canvas.height||_.height,{reveal:!0});let $=this.canvasCtx.getImageData(_.srcX,_.srcY,_.width,_.height);this.canvasCtx.putImageData($,_.x,_.y),this.hasRenderedFrame=!0}scheduleRawFallbackTimeout(){if(this.frameTimeoutId)clearTimeout(this.frameTimeoutId),this.frameTimeoutId=null;if(this.rawFallbackAttempted||this.protocolRecovering)return;this.frameTimeoutId=setTimeout(()=>{if(this.hasRenderedFrame||this.rawFallbackAttempted||this.protocolRecovering)return;if(this.protocol&&this.socketBoundary)this.rawFallbackAttempted=!0,this.protocolRecovering=!0,this.setStatus("No framebuffer update yet; retrying with RAW encoding."),this.updateDisplayInfo("No framebuffer update yet. Retrying with RAW encoding."),this.updateDisplayMeta("reconnect-encoding-fallback"),this.connectWithEncodings("0")},2200)}applyRemoteDisplayEvent(_){if(!_)return;switch(_.type){case"protocol-version":this.setStatus(`Negotiated ${_.protocol.toUpperCase()} ${_.server} → ${_.client}.`),this.updateDisplayInfo(`Negotiated ${_.server} → ${_.client}.`),this.updateDisplayMeta();return;case"security-types":this.setStatus(`Server offered security types: ${_.types.join(", ")||"none"}.`),this.updateDisplayInfo(`Security types: ${_.types.join(", ")||"none"}.`),this.updateDisplayMeta();return;case"security-selected":this.setStatus(`Using ${_.protocol.toUpperCase()} security type ${_.label}.`),this.updateDisplayInfo(`Security: ${_.label}.`),this.updateDisplayMeta();return;case"security-result":this.setStatus("Security negotiation complete. Waiting for server init…"),this.updateDisplayInfo("Security negotiation complete. Waiting for server init…"),this.updateDisplayMeta();return;case"display-init":this.ensureCanvasSize(_.width,_.height),this.setSessionChromeVisible(!1),this.setStatus(`Connected to ${this.targetLabel||this.targetId||"target"} — waiting for first framebuffer update (${_.width}×${_.height}).`),this.updateDisplayInfo(`Connected to ${_.name||this.targetLabel||this.targetId||"remote display"}. Waiting for first framebuffer update…`),this.updateDisplayMeta("awaiting-frame"),this.scheduleRawFallbackTimeout();return;case"framebuffer-update":if(this.frameTimeoutId)clearTimeout(this.frameTimeoutId),this.frameTimeoutId=null;let $=!1,j=(_.rects||[]).some((Z)=>Z.kind==="pipeline");if(_.framebuffer&&_.framebuffer.length>0&&_.width>0&&_.height>0&&j){this.ensureCanvasSize(_.width,_.height,{reveal:!0});for(let Y of _.rects||[])if(Y.kind==="resize")this.ensureCanvasSize(Y.width,Y.height);let Z=this.canvas?.getContext("2d",{alpha:!1});if(Z){let Y=new ImageData(new Uint8ClampedArray(_.framebuffer),_.width,_.height);Z.putImageData(Y,0,0),$=!0}}else for(let Z of _.rects||[]){if(Z.kind==="resize"){this.ensureCanvasSize(Z.width,Z.height);continue}if(Z.kind==="copy"){this.ensureCanvasSize(_.width,_.height,{reveal:!0}),this.copyCanvasRect(Z),$=!0;continue}if(Z.kind==="rgba")this.ensureCanvasSize(_.width,_.height,{reveal:!0}),this.drawRgbaRect(Z),$=!0}if($||this.hasRenderedFrame)this.protocolRecovering=!1,this.setStatus(`Rendering live framebuffer — ${_.width}×${_.height}.`),this.updateDisplayInfo(`Framebuffer update applied (${(_.rects||[]).length} rect${(_.rects||[]).length===1?"":"s"}).`),this.updateDisplayMeta();else this.setStatus(`Connected to ${this.targetLabel||this.targetId||"target"} — waiting for painted framebuffer data.`),this.updateDisplayInfo(`Framebuffer update received, but no paintable rects yet (${(_.rects||[]).length} rect${(_.rects||[]).length===1?"":"s"}).`),this.updateDisplayMeta("awaiting-frame"),this.scheduleRawFallbackTimeout();return;case"clipboard":this.setStatus("Remote clipboard updated."),this.updateDisplayInfo(`Clipboard text received (${_.text.length} chars).`),this.updateDisplayMeta();return;case"bell":this.setStatus("Remote display bell received."),this.updateDisplayInfo("Remote display bell received."),this.updateDisplayMeta();return}}async handleSocketMessage(_){if(_?.kind==="control"){let j=_.payload;if(j?.type==="vnc.error"){this.setStatus(`Proxy error: ${j.error||"Unknown error"}`),this.updateDisplayInfo(`Proxy error: ${j.error||"Unknown error"}`),this.updateDisplayMeta("proxy-error");return}if(j?.type==="vnc.connected"){let Z=j?.target?.label||this.targetLabel||this.targetId;this.setStatus(`Connected to ${Z}. Waiting for VNC/RFB data…`),this.updateDisplayInfo(`Connected to ${Z}. Waiting for VNC handshake…`),this.updateDisplayMeta();return}if(j?.type==="pong")return;return}let $=this.protocol||(this.protocol=new A8);try{let j=_.data instanceof Blob?await _.data.arrayBuffer():_.data,Z=$.receive(j);for(let Y of Z.outgoing||[])this.socketBoundary?.send?.(Y);for(let Y of Z.events||[])this.applyRemoteDisplayEvent(Y)}catch(j){let Z=j?.message||"Unknown error";if(this.setSessionChromeVisible(!0),this.setStatus(`Display protocol error: ${Z}`),this.updateDisplayInfo(`Display protocol error: ${Z}`),this.updateDisplayMeta("protocol-error"),this.frameTimeoutId)clearTimeout(this.frameTimeoutId),this.frameTimeoutId=null;if(!this.rawFallbackAttempted&&!this.protocolRecovering&&/unexpected eof|zlib|decompress|protocol|buffer|undefined|not an object|reading '0'/i.test(Z))this.rawFallbackAttempted=!0,this.protocolRecovering=!0,this.connectWithEncodings("0")}}async connectSocket(_=null){if(!this.targetId||this.disposed)return;if(this.clearReconnectTimer(),this.protocolRecovering&&_==null)this.protocolRecovering=!1;try{this.socketBoundary?.dispose?.()}catch{}if(_==null)this.rawFallbackAttempted=!1,this.protocolRecovering=!1;let $=this.pendingHandoffToken||null,j=_==null?null:String(_).trim(),Z=await E2(),Y={};if(Z)Y.pipeline=Z,Y.decodeRawRect=(N,K,G,V)=>Z.decodeRawRectToRgba(N,K,G,V);let q=u5(this.authPassword);if(q!==null)Y.password=q;if(j)Y.encodings=j;let Q=Boolean(this.canvas&&this.hasRenderedFrame);if(this.protocol=new A8(Y),this.hasRenderedFrame=Q,this.frameTimeoutId=null,this.canvas)this.canvas.style.display=Q?"block":"none";if(this.displayPlaceholderEl)this.displayPlaceholderEl.style.display=Q?"none":"";this.socketBoundary=new n6({url:uN(this.targetId,$),binaryType:"arraybuffer",onOpen:()=>{if($&&this.pendingHandoffToken===$)this.pendingHandoffToken=null;this.reconnectAttempts=0,this.setStatus(`Connected to proxy for ${this.targetId}. Waiting for VNC/RFB data…`),this.updateDisplayInfo("WebSocket proxy connected. Waiting for handshake…"),this.updateDisplayMeta(),this.socketBoundary?.sendControl?.({type:"ping"})},onMetrics:(N)=>{this.applyMetrics(N)},onMessage:(N)=>{this.handleSocketMessage(N)},onClose:()=>{if(this.setSessionChromeVisible(!0),this.frameTimeoutId)clearTimeout(this.frameTimeoutId),this.frameTimeoutId=null;if(this.disposed)return;if(this.bytesIn>0||this.hasRenderedFrame||this.reconnectAttempts>0){this.setStatus("Remote display connection lost. Reconnecting…"),this.updateDisplayInfo("Remote display transport closed. Attempting to reconnect…"),this.updateDisplayMeta("reconnecting"),this.scheduleReconnect();return}this.setStatus(this.bytesIn>0?`Proxy closed after receiving ${this.bytesIn} byte(s).`:"Proxy closed."),this.updateDisplayInfo(this.bytesIn>0?"Remote display transport closed after receiving data.":"Remote display transport closed."),this.updateDisplayMeta("closed")},onError:()=>{if(this.setSessionChromeVisible(!0),this.bytesIn>0||this.hasRenderedFrame||this.reconnectAttempts>0){this.setStatus("WebSocket proxy connection failed. Reconnecting…"),this.updateDisplayInfo("WebSocket proxy connection failed. Attempting to reconnect…"),this.updateDisplayMeta("socket-reconnecting"),this.scheduleReconnect();return}this.setStatus("WebSocket proxy connection failed."),this.updateDisplayInfo("WebSocket proxy connection failed."),this.updateDisplayMeta("socket-error")}}),this.socketBoundary.connect()}connectWithEncodings(_){return this.connectSocket(_)}async load(){this.setStatus("");try{let _=await wN(this.targetId);if(!_?.enabled){this.renderTargets(_),this.setStatus("");return}if(!this.targetId){this.renderTargets(_),this.setStatus("");return}this.renderTargetSession(_),await this.connectSocket()}catch(_){this.resetLiveSession(),this.bodyEl.innerHTML=`
                <div style="max-width:620px;text-align:center;padding:28px;border:1px dashed var(--border-color);border-radius:14px;background:var(--bg-secondary);">
                    <div style="font-size:32px;margin-bottom:10px;">⚠️</div>
                    <div style="font-weight:600;margin-bottom:6px;">Failed to load VNC session</div>
                    <div style="color:var(--text-secondary);font-size:13px;line-height:1.5;">${m4(_?.message||"Unknown error")}</div>
                </div>
            `,this.setStatus(`Session load failed: ${_?.message||"Unknown error"}`)}}async preparePopoutTransfer(){if(!this.targetId)return null;let _=await RN(this.targetId),$=typeof _?.token==="string"?_.token.trim():"";if(!$)throw Error("No live VNC session is available to transfer.");return{vnc_handoff:$}}getContent(){return}isDirty(){return!1}focus(){this.canvas?.focus?.(),this.root?.focus?.()}resize(){this.updateCanvasScale()}dispose(){if(this.disposed)return;this.disposed=!0,this.resetLiveSession(),this.root?.remove?.()}}var Q$={id:"vnc-viewer",label:"VNC",icon:"display",capabilities:["preview"],placement:"tabs",canHandle(_){let $=String(_?.path||"");return $===X4||$.startsWith(`${X4}/`)?9000:!1},mount(_,$){return new t2(_,$)}};function L_(_){if(typeof window>"u"||!window.localStorage)return null;try{return window.localStorage.getItem(_)}catch{return null}}function Y1(_,$){if(typeof window>"u"||!window.localStorage)return;try{window.localStorage.setItem(_,$)}catch{}}function L5(_,$=!1){let j=L_(_);if(j===null)return $;return j==="true"}function m5(_,$=null){let j=L_(_);if(j===null)return $;let Z=parseInt(j,10);return Number.isFinite(Z)?Z:$}var G$="piclaw_theme",k8="piclaw_tint",$7="piclaw_chat_themes",h5={bgPrimary:"#ffffff",bgSecondary:"#f7f9fa",bgHover:"#e8ebed",textPrimary:"#0f1419",textSecondary:"#536471",borderColor:"#eff3f4",accent:"#1d9bf0",accentHover:"#1a8cd8",danger:"#f4212e",success:"#00ba7c"},j7={bgPrimary:"#000000",bgSecondary:"#16181c",bgHover:"#1d1f23",textPrimary:"#e7e9ea",textSecondary:"#71767b",borderColor:"#2f3336",accent:"#1d9bf0",accentHover:"#1a8cd8",danger:"#f4212e",success:"#00ba7c"},e2={default:{label:"Default",mode:"auto",light:h5,dark:j7},tango:{label:"Tango",mode:"light",light:{bgPrimary:"#f6f5f4",bgSecondary:"#efedeb",bgHover:"#e5e3e1",textPrimary:"#2e3436",textSecondary:"#5c6466",borderColor:"#d3d7cf",accent:"#3465a4",accentHover:"#2c5890",danger:"#cc0000",success:"#4e9a06"}},xterm:{label:"XTerm",mode:"dark",dark:{bgPrimary:"#000000",bgSecondary:"#0a0a0a",bgHover:"#121212",textPrimary:"#d0d0d0",textSecondary:"#8a8a8a",borderColor:"#1f1f1f",accent:"#00a2ff",accentHover:"#0086d1",danger:"#ff5f5f",success:"#5fff87"}},monokai:{label:"Monokai",mode:"dark",dark:{bgPrimary:"#272822",bgSecondary:"#2f2f2f",bgHover:"#3a3a3a",textPrimary:"#f8f8f2",textSecondary:"#cfcfc2",borderColor:"#3e3d32",accent:"#f92672",accentHover:"#e81560",danger:"#f92672",success:"#a6e22e"}},"monokai-pro":{label:"Monokai Pro",mode:"dark",dark:{bgPrimary:"#2d2a2e",bgSecondary:"#363237",bgHover:"#403a40",textPrimary:"#fcfcfa",textSecondary:"#c1c0c0",borderColor:"#444046",accent:"#ff6188",accentHover:"#f74f7e",danger:"#ff4f5e",success:"#a9dc76"}},ristretto:{label:"Ristretto",mode:"dark",dark:{bgPrimary:"#2c2525",bgSecondary:"#362d2d",bgHover:"#403535",textPrimary:"#f4f1ef",textSecondary:"#cbbdb8",borderColor:"#4a3c3c",accent:"#ff9f43",accentHover:"#f28a2e",danger:"#ff5f56",success:"#a9dc76"}},dracula:{label:"Dracula",mode:"dark",dark:{bgPrimary:"#282a36",bgSecondary:"#303445",bgHover:"#3a3f52",textPrimary:"#f8f8f2",textSecondary:"#c5c8d6",borderColor:"#44475a",accent:"#bd93f9",accentHover:"#a87ded",danger:"#ff5555",success:"#50fa7b"}},catppuccin:{label:"Catppuccin",mode:"dark",dark:{bgPrimary:"#1e1e2e",bgSecondary:"#24273a",bgHover:"#2c2f41",textPrimary:"#cdd6f4",textSecondary:"#a6adc8",borderColor:"#313244",accent:"#89b4fa",accentHover:"#74a0f5",danger:"#f38ba8",success:"#a6e3a1"}},nord:{label:"Nord",mode:"dark",dark:{bgPrimary:"#2e3440",bgSecondary:"#3b4252",bgHover:"#434c5e",textPrimary:"#eceff4",textSecondary:"#d8dee9",borderColor:"#4c566a",accent:"#88c0d0",accentHover:"#78a9c0",danger:"#bf616a",success:"#a3be8c"}},gruvbox:{label:"Gruvbox",mode:"dark",dark:{bgPrimary:"#282828",bgSecondary:"#32302f",bgHover:"#3c3836",textPrimary:"#ebdbb2",textSecondary:"#bdae93",borderColor:"#3c3836",accent:"#d79921",accentHover:"#c28515",danger:"#fb4934",success:"#b8bb26"}},solarized:{label:"Solarized",mode:"auto",light:{bgPrimary:"#fdf6e3",bgSecondary:"#f5efdc",bgHover:"#eee8d5",textPrimary:"#586e75",textSecondary:"#657b83",borderColor:"#e0d8c6",accent:"#268bd2",accentHover:"#1f78b3",danger:"#dc322f",success:"#859900"},dark:{bgPrimary:"#002b36",bgSecondary:"#073642",bgHover:"#0b3c4a",textPrimary:"#eee8d5",textSecondary:"#93a1a1",borderColor:"#18424a",accent:"#268bd2",accentHover:"#1f78b3",danger:"#dc322f",success:"#859900"}},tokyo:{label:"Tokyo",mode:"dark",dark:{bgPrimary:"#1a1b26",bgSecondary:"#24283b",bgHover:"#2f3549",textPrimary:"#c0caf5",textSecondary:"#9aa5ce",borderColor:"#414868",accent:"#7aa2f7",accentHover:"#6b92e6",danger:"#f7768e",success:"#9ece6a"}},miasma:{label:"Miasma",mode:"dark",dark:{bgPrimary:"#1f1f23",bgSecondary:"#29292f",bgHover:"#33333a",textPrimary:"#e5e5e5",textSecondary:"#b4b4b4",borderColor:"#3d3d45",accent:"#c9739c",accentHover:"#b8618c",danger:"#e06c75",success:"#98c379"}},github:{label:"GitHub",mode:"auto",light:{bgPrimary:"#ffffff",bgSecondary:"#f6f8fa",bgHover:"#eaeef2",textPrimary:"#24292f",textSecondary:"#57606a",borderColor:"#d0d7de",accent:"#0969da",accentHover:"#0550ae",danger:"#cf222e",success:"#1a7f37"},dark:{bgPrimary:"#0d1117",bgSecondary:"#161b22",bgHover:"#21262d",textPrimary:"#c9d1d9",textSecondary:"#8b949e",borderColor:"#30363d",accent:"#2f81f7",accentHover:"#1f6feb",danger:"#f85149",success:"#3fb950"}},gotham:{label:"Gotham",mode:"dark",dark:{bgPrimary:"#0b0f14",bgSecondary:"#111720",bgHover:"#18212b",textPrimary:"#cbd6e2",textSecondary:"#9bb0c3",borderColor:"#1f2a37",accent:"#5ccfe6",accentHover:"#48b8ce",danger:"#d26937",success:"#2aa889"}}},bN=["--bg-primary","--bg-secondary","--bg-hover","--text-primary","--text-secondary","--border-color","--accent-color","--accent-hover","--accent-contrast-text","--accent-soft","--accent-soft-strong","--danger-color","--success-color","--search-highlight-color"],p4={theme:"default",tint:null},Z7="light",N$=!1;function M8(_){let $=String(_||"").trim().toLowerCase();if(!$)return"default";if($==="solarized-dark"||$==="solarized-light")return"solarized";if($==="github-dark"||$==="github-light")return"github";if($==="tokyo-night")return"tokyo";return $}function B5(_){if(!_)return null;let $=String(_).trim();if(!$)return null;let j=$.startsWith("#")?$.slice(1):$;if(!/^[0-9a-fA-F]{3}$/.test(j)&&!/^[0-9a-fA-F]{6}$/.test(j))return null;let Z=j.length===3?j.split("").map((q)=>q+q).join(""):j,Y=parseInt(Z,16);return{r:Y>>16&255,g:Y>>8&255,b:Y&255,hex:`#${Z.toLowerCase()}`}}function gN(_){if(!_||typeof document>"u")return null;let $=String(_).trim();if(!$)return null;let j=document.createElement("div");if(j.style.color="",j.style.color=$,!j.style.color)return null;let Z=j.style.color;try{if(document.body)j.style.display="none",document.body.appendChild(j),Z=getComputedStyle(j).color||j.style.color,document.body.removeChild(j)}catch{}let Y=Z.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/i);if(!Y)return null;let q=parseInt(Y[1],10),Q=parseInt(Y[2],10),N=parseInt(Y[3],10);if(![q,Q,N].every((G)=>Number.isFinite(G)))return null;let K=`#${[q,Q,N].map((G)=>G.toString(16).padStart(2,"0")).join("")}`;return{r:q,g:Q,b:N,hex:K}}function Y7(_){return B5(_)||gN(_)}function p5(_,$,j){let Z=Math.round(_.r+($.r-_.r)*j),Y=Math.round(_.g+($.g-_.g)*j),q=Math.round(_.b+($.b-_.b)*j);return`rgb(${Z} ${Y} ${q})`}function K$(_,$){return`rgba(${_.r}, ${_.g}, ${_.b}, ${$})`}function mN(_){let $=_.r/255,j=_.g/255,Z=_.b/255,Y=$<=0.03928?$/12.92:Math.pow(($+0.055)/1.055,2.4),q=j<=0.03928?j/12.92:Math.pow((j+0.055)/1.055,2.4),Q=Z<=0.03928?Z/12.92:Math.pow((Z+0.055)/1.055,2.4);return 0.2126*Y+0.7152*q+0.0722*Q}function pN(_){return mN(_)>0.4?"#000000":"#ffffff"}function q7(){if(typeof window>"u")return"light";try{return window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}catch{return"light"}}function X$(_){return e2[_]||e2.default}function hN(_){return _.mode==="auto"?q7():_.mode}function Q7(_,$){let j=X$(_);if($==="dark"&&j.dark)return j.dark;if($==="light"&&j.light)return j.light;return j.dark||j.light||h5}function N7(_,$,j){let Z=Y7($);if(!Z)return _;let Y=B5(_.bgPrimary),q=B5(_.bgSecondary),Q=B5(_.bgHover),N=B5(_.borderColor);if(!Y||!q||!Q||!N)return _;let G=B5(j==="dark"?"#ffffff":"#000000");return{..._,bgPrimary:p5(Y,Z,0.08),bgSecondary:p5(q,Z,0.12),bgHover:p5(Q,Z,0.16),borderColor:p5(N,Z,0.08),accent:Z.hex,accentHover:G?p5(Z,G,0.18):Z.hex}}function cN(_,$){if(typeof document>"u")return;let j=document.documentElement,Z=_.accent,Y=Y7(Z),q=Y?K$(Y,$==="dark"?0.35:0.2):_.searchHighlight||_.searchHighlightColor,Q=Y?K$(Y,$==="dark"?0.16:0.12):"rgba(29, 155, 240, 0.12)",N=Y?K$(Y,$==="dark"?0.28:0.2):"rgba(29, 155, 240, 0.2)",K=Y?pN(Y):$==="dark"?"#000000":"#ffffff",G={"--bg-primary":_.bgPrimary,"--bg-secondary":_.bgSecondary,"--bg-hover":_.bgHover,"--text-primary":_.textPrimary,"--text-secondary":_.textSecondary,"--border-color":_.borderColor,"--accent-color":Z,"--accent-hover":_.accentHover||Z,"--accent-soft":Q,"--accent-soft-strong":N,"--accent-contrast-text":K,"--danger-color":_.danger||h5.danger,"--success-color":_.success||h5.success,"--search-highlight-color":q||"rgba(29, 155, 240, 0.2)"};Object.entries(G).forEach(([V,X])=>{if(X)j.style.setProperty(V,X)})}function lN(){if(typeof document>"u")return;let _=document.documentElement;bN.forEach(($)=>_.style.removeProperty($))}function W5(_,$={}){if(typeof document>"u")return null;let j=typeof $.id==="string"&&$.id.trim()?$.id.trim():null,Z=j?document.getElementById(j):document.querySelector(`meta[name="${_}"]`);if(!Z)Z=document.createElement("meta"),document.head.appendChild(Z);if(Z.setAttribute("name",_),j)Z.setAttribute("id",j);return Z}function _7(_){let $=M8(p4?.theme||"default"),j=p4?.tint?String(p4.tint).trim():null,Z=Q7($,_);if($==="default"&&j)Z=N7(Z,j,_);if(Z?.bgPrimary)return Z.bgPrimary;return _==="dark"?j7.bgPrimary:h5.bgPrimary}function nN(_,$){if(typeof document>"u")return;let j=W5("theme-color",{id:"dynamic-theme-color"});if(j&&_)j.removeAttribute("media"),j.setAttribute("content",_);let Z=W5("theme-color",{id:"theme-color-light"});if(Z)Z.setAttribute("media","(prefers-color-scheme: light)"),Z.setAttribute("content",_7("light"));let Y=W5("theme-color",{id:"theme-color-dark"});if(Y)Y.setAttribute("media","(prefers-color-scheme: dark)"),Y.setAttribute("content",_7("dark"));let q=W5("msapplication-TileColor");if(q&&_)q.setAttribute("content",_);let Q=W5("msapplication-navbutton-color");if(Q&&_)Q.setAttribute("content",_);let N=W5("apple-mobile-web-app-status-bar-style");if(N)N.setAttribute("content",$==="dark"?"black-translucent":"default")}function dN(){if(typeof window>"u")return;let _={...p4,mode:Z7};window.dispatchEvent(new CustomEvent("piclaw-theme-change",{detail:_}))}function K7(){try{let _=L_($7);if(!_)return{};let $=JSON.parse(_);return typeof $==="object"&&$!==null?$:{}}catch{return{}}}function iN(_,$,j){let Z=K7();if(!$&&!j)delete Z[_];else Z[_]={theme:$||"default",tint:j||null};Y1($7,JSON.stringify(Z))}function rN(_){if(!_)return null;return K7()[_]||null}function G7(){if(typeof window>"u")return"web:default";try{let $=new URL(window.location.href).searchParams.get("chat_jid");return $&&$.trim()?$.trim():"web:default"}catch{return"web:default"}}function V$(_,$={}){if(typeof window>"u"||typeof document>"u")return;let j=M8(_?.theme||"default"),Z=_?.tint?String(_.tint).trim():null,Y=X$(j),q=hN(Y),Q=Q7(j,q);p4={theme:j,tint:Z},Z7=q;let N=document.documentElement;N.dataset.theme=q,N.dataset.colorTheme=j,N.dataset.tint=Z?String(Z):"",N.style.colorScheme=q;let K=Q;if(j==="default"&&Z)K=N7(Q,Z,q);if(j==="default"&&!Z)lN();else cN(K,q);if(nN(K.bgPrimary,q),dN(),$.persist!==!1)if(Y1(G$,j),Z)Y1(k8,Z);else Y1(k8,"")}function E8(){if(X$(p4.theme).mode!=="auto")return;V$(p4,{persist:!1})}function X7(){if(typeof window>"u")return()=>{};let _=G7(),$=rN(_),j=$?M8($.theme||"default"):M8(L_(G$)||"default"),Z=$?$.tint?String($.tint).trim():null:(()=>{let Y=L_(k8);return Y?Y.trim():null})();if(V$({theme:j,tint:Z},{persist:!1}),window.matchMedia&&!N$){let Y=window.matchMedia("(prefers-color-scheme: dark)");if(Y.addEventListener)Y.addEventListener("change",E8);else if(Y.addListener)Y.addListener(E8);return N$=!0,()=>{if(Y.removeEventListener)Y.removeEventListener("change",E8);else if(Y.removeListener)Y.removeListener(E8);N$=!1}}return()=>{}}function V7(_){if(!_||typeof _!=="object")return;let $=_.chat_jid||_.chatJid||G7(),j=_.theme??_.name??_.colorTheme,Z=_.tint??null;if(iN($,j||"default",Z),V$({theme:j||"default",tint:Z},{persist:!1}),!$||$==="web:default")Y1(G$,j||"default"),Y1(k8,Z||"")}function U7(){if(typeof document>"u")return"light";let _=document.documentElement?.dataset?.theme;if(_==="dark"||_==="light")return _;return q7()}var I8=/#(\w+)/g,oN=new Set(["strong","em","b","i","u","s","br","p","ul","ol","li","blockquote","ruby","rt","rp","span"]),sN=new Set(["a","abbr","blockquote","br","code","div","em","hr","h1","h2","h3","h4","h5","h6","i","img","kbd","li","mark","ol","p","pre","ruby","rt","rp","s","span","strong","sub","sup","table","tbody","td","th","thead","tr","u","ul","math","semantics","mrow","mi","mn","mo","mtext","mspace","msup","msub","msubsup","mfrac","msqrt","mroot","mtable","mtr","mtd","annotation"]),aN=new Set(["class","style","title","role","aria-hidden","aria-label","aria-expanded","aria-live","data-mermaid","data-hashtag"]),tN={a:new Set(["href","target","rel"]),img:new Set(["src","alt","title"])},eN=new Set(["http:","https:","mailto:",""]);function U$(_){return String(_||"").replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/'/g,"&#39;")}function h4(_,$={}){if(!_)return null;let j=String(_).trim();if(!j)return null;if(j.startsWith("#")||j.startsWith("/"))return j;if(j.startsWith("data:")){if($.allowDataImage&&/^data:image\//i.test(j))return j;return null}if(j.startsWith("blob:"))return j;try{let Z=new URL(j,typeof window<"u"?window.location.origin:"http://localhost");if(!eN.has(Z.protocol))return null;return Z.href}catch{return null}}function L7(_,$={}){if(!_)return"";let j=new DOMParser().parseFromString(_,"text/html"),Z=[],Y=j.createTreeWalker(j.body,NodeFilter.SHOW_ELEMENT),q;while(q=Y.nextNode())Z.push(q);for(let Q of Z){let N=Q.tagName.toLowerCase();if(!sN.has(N)){let G=Q.parentNode;if(!G)continue;while(Q.firstChild)G.insertBefore(Q.firstChild,Q);G.removeChild(Q);continue}let K=tN[N]||new Set;for(let G of Array.from(Q.attributes)){let V=G.name.toLowerCase(),X=G.value;if(V.startsWith("on")){Q.removeAttribute(G.name);continue}if(V.startsWith("data-")||V.startsWith("aria-"))continue;if(K.has(V)||aN.has(V)){if(V==="href"){let U=h4(X);if(!U)Q.removeAttribute(G.name);else if(Q.setAttribute(G.name,U),N==="a"&&!Q.getAttribute("rel"))Q.setAttribute("rel","noopener noreferrer")}else if(V==="src"){let U=N==="img"&&typeof $.rewriteImageSrc==="function"?$.rewriteImageSrc(X):X,L=h4(U,{allowDataImage:N==="img"});if(!L)Q.removeAttribute(G.name);else Q.setAttribute(G.name,L)}continue}Q.removeAttribute(G.name)}}return j.body.innerHTML}function W7(_){if(!_)return _;let $=_.replace(/</g,"&lt;").replace(/>/g,"&gt;");return new DOMParser().parseFromString($,"text/html").documentElement.textContent}function x8(_,$=2){if(!_)return _;let j=_;for(let Z=0;Z<$;Z+=1){let Y=W7(j);if(Y===j)break;j=Y}return j}function _K(_){if(!_)return{text:"",blocks:[]};let j=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),Z=[],Y=[],q=!1,Q=[];for(let N of j){if(!q&&N.trim().match(/^```mermaid\s*$/i)){q=!0,Q=[];continue}if(q&&N.trim().match(/^```\s*$/)){let K=Z.length;Z.push(Q.join(`
`)),Y.push(`@@MERMAID_BLOCK_${K}@@`),q=!1,Q=[];continue}if(q)Q.push(N);else Y.push(N)}if(q)Y.push("```mermaid"),Y.push(...Q);return{text:Y.join(`
`),blocks:Z}}function $K(_){if(!_)return _;return x8(_,5)}function jK(_){let $=new TextEncoder().encode(String(_||"")),j="";for(let Z of $)j+=String.fromCharCode(Z);return btoa(j)}function ZK(_){let $=atob(String(_||"")),j=new Uint8Array($.length);for(let Z=0;Z<$.length;Z+=1)j[Z]=$.charCodeAt(Z);return new TextDecoder().decode(j)}function YK(_,$){if(!_||!$||$.length===0)return _;return _.replace(/@@MERMAID_BLOCK_(\d+)@@/g,(j,Z)=>{let Y=Number(Z),q=$[Y]??"",Q=$K(q);return`<div class="mermaid-container" data-mermaid="${jK(Q)}"><div class="mermaid-loading">Loading diagram...</div></div>`})}function B7(_){if(!_)return _;return _.replace(/<code>([\s\S]*?)<\/code>/gi,($,j)=>{if(j.includes(`
`))return`
\`\`\`
${j}
\`\`\`
`;return`\`${j}\``})}var qK={span:new Set(["title","class","lang","dir"])};function QK(_,$){let j=qK[_];if(!j||!$)return"";let Z=[],Y=/([a-zA-Z_:][\w:.-]*)(?:\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s"'`=<>]+)))?/g,q;while(q=Y.exec($)){let Q=(q[1]||"").toLowerCase();if(!Q||Q.startsWith("on")||!j.has(Q))continue;let N=q[2]??q[3]??q[4]??"";Z.push(` ${Q}="${U$(N)}"`)}return Z.join("")}function z7(_){if(!_)return _;return _.replace(/&lt;([\s\S]*?)&gt;/g,($,j)=>{let Z=j.trim(),Y=Z.startsWith("/"),q=Y?Z.slice(1).trim():Z,N=q.endsWith("/")?q.slice(0,-1).trim():q,[K=""]=N.split(/\s+/,1),G=K.toLowerCase();if(!G||!oN.has(G))return $;if(G==="br")return Y?"":"<br>";if(Y)return`</${G}>`;let V=N.slice(K.length).trim(),X=QK(G,V);return`<${G}${X}>`})}function F7(_){if(!_)return _;let $=(j)=>j.replace(/&amp;lt;/g,"&lt;").replace(/&amp;gt;/g,"&gt;").replace(/&amp;quot;/g,"&quot;").replace(/&amp;#39;/g,"&#39;").replace(/&amp;amp;/g,"&amp;");return _.replace(/<pre><code>([\s\S]*?)<\/code><\/pre>/g,(j,Z)=>`<pre><code>${$(Z)}</code></pre>`).replace(/<code>([\s\S]*?)<\/code>/g,(j,Z)=>`<code>${$(Z)}</code>`)}function H7(_){if(!_)return _;let $=new DOMParser().parseFromString(_,"text/html"),j=$.createTreeWalker($.body,NodeFilter.SHOW_TEXT),Z=(q)=>q.replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&quot;/g,'"').replace(/&#39;/g,"'").replace(/&amp;/g,"&"),Y;while(Y=j.nextNode()){if(!Y.nodeValue)continue;let q=Z(Y.nodeValue);if(q!==Y.nodeValue)Y.nodeValue=q}return $.body.innerHTML}function NK(_){if(!window.katex)return _;let $=(Q)=>W7(Q).replace(/&gt;/g,">").replace(/&lt;/g,"<").replace(/&amp;/g,"&").replace(/<br\s*\/?\s*>/gi,`
`),j=(Q)=>{let N=[],K=Q.replace(/<pre\b[^>]*>\s*<code\b[^>]*>[\s\S]*?<\/code>\s*<\/pre>/gi,(G)=>{let V=N.length;return N.push(G),`@@CODE_BLOCK_${V}@@`});return K=K.replace(/<code\b[^>]*>[\s\S]*?<\/code>/gi,(G)=>{let V=N.length;return N.push(G),`@@CODE_INLINE_${V}@@`}),{html:K,blocks:N}},Z=(Q,N)=>{if(!N.length)return Q;return Q.replace(/@@CODE_(?:BLOCK|INLINE)_(\d+)@@/g,(K,G)=>{let V=Number(G);return N[V]??""})},Y=j(_),q=Y.html;return q=q.replace(/(^|\n|<br\s*\/?\s*>|<p>|<\/p>)\s*\$\$([\s\S]+?)\$\$\s*(?=\n|<br\s*\/?\s*>|<\/p>|$)/gi,(Q,N,K)=>{try{let G=katex.renderToString($(K.trim()),{displayMode:!0,throwOnError:!1});return`${N}${G}`}catch(G){return`<span class="math-error" title="${U$(G.message)}">${Q}</span>`}}),q=q.replace(/(^|[^\\$])\$(?!\s)([^\n$]+?)\$/g,(Q,N,K)=>{if(/\s$/.test(K))return Q;try{let G=katex.renderToString($(K),{displayMode:!1,throwOnError:!1});return`${N}${G}`}catch(G){return`${N}<span class="math-error" title="${U$(G.message)}">$${K}$</span>`}}),Z(q,Y.blocks)}function KK(_){if(!_)return _;let $=new DOMParser().parseFromString(_,"text/html"),j=$.createTreeWalker($.body,NodeFilter.SHOW_TEXT),Z=[],Y;while(Y=j.nextNode())Z.push(Y);for(let q of Z){let Q=q.nodeValue;if(!Q)continue;if(I8.lastIndex=0,!I8.test(Q))continue;I8.lastIndex=0;let N=q.parentElement;if(N&&(N.closest("a")||N.closest("code")||N.closest("pre")))continue;let K=Q.split(I8);if(K.length<=1)continue;let G=$.createDocumentFragment();K.forEach((V,X)=>{if(X%2===1){let U=$.createElement("a");U.setAttribute("href","#"),U.className="hashtag",U.setAttribute("data-hashtag",V),U.textContent=`#${V}`,G.appendChild(U)}else G.appendChild($.createTextNode(V))}),q.parentNode?.replaceChild(G,q)}return $.body.innerHTML}function GK(_){if(!_)return _;let j=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),Z=[],Y=!1;for(let q of j){if(!Y&&q.trim().match(/^```(?:math|katex|latex)\s*$/i)){Y=!0,Z.push("$$");continue}if(Y&&q.trim().match(/^```\s*$/)){Y=!1,Z.push("$$");continue}Z.push(q)}return Z.join(`
`)}function XK(_){let $=GK(_||""),{text:j,blocks:Z}=_K($),Y=x8(j,2),Q=B7(Y).replace(/</g,"&lt;");return{safeHtml:z7(Q),mermaidBlocks:Z}}function W_(_,$,j={}){if(!_)return"";let{safeHtml:Z,mermaidBlocks:Y}=XK(_),q=window.marked?marked.parse(Z,{headerIds:!1,mangle:!1}):Z.replace(/\n/g,"<br>");return q=F7(q),q=H7(q),q=NK(q),q=KK(q),q=YK(q,Y),q=L7(q,j),q}function c5(_){if(!_)return"";let $=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`),j=x8($,2),Y=B7(j).replace(/</g,"&lt;").replace(/>/g,"&gt;"),q=z7(Y),Q=window.marked?marked.parse(q):q.replace(/\n/g,"<br>");return Q=F7(Q),Q=H7(Q),Q=L7(Q),Q}function VK(_,$=6){return _.replace(/<polyline\b([^>]*)\bpoints="([^"]+)"([^>]*)\/?\s*>/g,(j,Z,Y,q)=>{let Q=Y.trim().split(/\s+/).map((K)=>{let[G,V]=K.split(",").map(Number);return{x:G,y:V}});if(Q.length<3)return`<polyline${Z}points="${Y}"${q}/>`;let N=[`M ${Q[0].x},${Q[0].y}`];for(let K=1;K<Q.length-1;K++){let G=Q[K-1],V=Q[K],X=Q[K+1],U=V.x-G.x,L=V.y-G.y,H=X.x-V.x,O=X.y-V.y,J=Math.sqrt(U*U+L*L),W=Math.sqrt(H*H+O*O),D=Math.min($,J/2,W/2);if(D<0.5){N.push(`L ${V.x},${V.y}`);continue}let E=V.x-U/J*D,R=V.y-L/J*D,P=V.x+H/W*D,m=V.y+O/W*D,x=U*O-L*H>0?1:0;N.push(`L ${E},${R}`),N.push(`A ${D},${D} 0 0 ${x} ${P},${m}`)}return N.push(`L ${Q[Q.length-1].x},${Q[Q.length-1].y}`),`<path${Z}d="${N.join(" ")}"${q}/>`})}async function V4(_){if(!window.beautifulMermaid)return;let{renderMermaid:$,THEMES:j}=window.beautifulMermaid,Y=U7()==="dark"?j["tokyo-night"]:j["github-light"],q=_.querySelectorAll(".mermaid-container[data-mermaid]");for(let Q of q)try{let N=Q.dataset.mermaid,K=ZK(N||""),G=x8(K,2),V=await $(G,{...Y,transparent:!0});V=VK(V),Q.innerHTML=V,Q.removeAttribute("data-mermaid")}catch(N){console.error("Mermaid render error:",N);let K=document.createElement("pre");K.className="mermaid-error",K.textContent=`Diagram error: ${N.message}`,Q.innerHTML="",Q.appendChild(K),Q.removeAttribute("data-mermaid")}}function J7(_){let $=new Date(_);if(Number.isNaN($.getTime()))return _;let Z=new Date-$,Y=Z/1000,q=86400000;if(Z<q){if(Y<60)return"just now";if(Y<3600)return`${Math.floor(Y/60)}m`;return`${Math.floor(Y/3600)}h`}if(Z<5*q){let K=$.toLocaleDateString(void 0,{weekday:"short"}),G=$.toLocaleTimeString(void 0,{hour:"2-digit",minute:"2-digit"});return`${K} ${G}`}let Q=$.toLocaleDateString(void 0,{month:"short",day:"numeric"}),N=$.toLocaleTimeString(void 0,{hour:"2-digit",minute:"2-digit"});return`${Q} ${N}`}function l5(_){if(!Number.isFinite(_))return"0";return Math.round(_).toLocaleString()}function I_(_){if(_<1024)return _+" B";if(_<1048576)return(_/1024).toFixed(1)+" KB";return(_/1048576).toFixed(1)+" MB"}function c4(_){let $=new Date(_);if(Number.isNaN($.getTime()))return _;return $.toLocaleString()}function k4(_){return String(_||"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}function UK(_,$){let j=String(_||"").trim();if(!j)return j;if(/^[a-zA-Z][a-zA-Z\d+.-]*:/.test(j)||j.startsWith("#")||j.startsWith("data:")||j.startsWith("blob:"))return j;let Z=j.match(/^([^?#]*)(\?[^#]*)?(#.*)?$/),Y=Z?.[1]||j,q=Z?.[2]||"",Q=Z?.[3]||"",N=String($||"").split("/").slice(0,-1).join("/"),G=Y.startsWith("/")?Y:`${N?`${N}/`:""}${Y}`,V=[];for(let U of G.split("/")){if(!U||U===".")continue;if(U===".."){if(V.length>0)V.pop();continue}V.push(U)}let X=V.join("/");return`${V8(X)}${q}${Q}`}function n5(_){return _?.preview||null}function LK(_){let $=String(_||""),j=Math.max($.lastIndexOf("/"),$.lastIndexOf("\\")),Z=j>=0?$.slice(j+1):$,Y=Z.lastIndexOf(".");if(Y<=0||Y===Z.length-1)return"none";return Z.slice(Y+1)}function WK(_){if(!_)return"unknown";if(_.kind==="image")return"image";if(_.kind==="text")return _.content_type==="text/markdown"?"markdown":"text";if(_.kind==="binary")return"binary";return String(_.kind||"unknown")}function BK(_,$){let j=$?.path||_?.path||"",Z=[];if($?.content_type)Z.push(`<span><strong>type:</strong> ${k4($.content_type)}</span>`);if(typeof $?.size==="number")Z.push(`<span><strong>size:</strong> ${k4(I_($.size))}</span>`);if($?.mtime)Z.push(`<span><strong>modified:</strong> ${k4(c4($.mtime))}</span>`);if(Z.push(`<span><strong>kind:</strong> ${k4(WK($))}</span>`),Z.push(`<span><strong>extension:</strong> ${k4(LK(j))}</span>`),j)Z.push(`<span><strong>path:</strong> ${k4(j)}</span>`);if($?.truncated)Z.push("<span><strong>content:</strong> truncated</span>");return`<div class="workspace-preview-meta workspace-preview-meta-inline">${Z.join("")}</div>`}function zK(_){let $=n5(_);if(!$)return'<div class="workspace-preview-text">No preview available.</div>';let j=BK(_,$);if($.kind==="image"){let Z=$.url||($.path?V8($.path):"");return`${j}
            <div class="workspace-preview-image">
                <img src="${k4(Z)}" alt="preview" />
            </div>
        `}if($.kind==="text"){if($.content_type==="text/markdown"){let Z=W_($.text||"",null,{rewriteImageSrc:(Y)=>UK(Y,$.path||_?.path)});return`${j}<div class="workspace-preview-text">${Z}</div>`}return`${j}<pre class="workspace-preview-text"><code>${k4($.text||"")}</code></pre>`}if($.kind==="binary")return`${j}<div class="workspace-preview-text">Binary file — download to view.</div>`;return`${j}<div class="workspace-preview-text">No preview available.</div>`}class L${constructor(_,$){this.container=_,this.context=$,this.disposed=!1,this.host=document.createElement("div"),this.host.className="workspace-preview-render-host",this.host.tabIndex=0,this.container.appendChild(this.host),this.render()}render(){if(this.disposed)return;this.host.innerHTML=zK(this.context)}getContent(){let _=n5(this.context);return typeof _?.text==="string"?_.text:void 0}isDirty(){return!1}setContent(_,$){let j=n5(this.context);if(j&&j.kind==="text"){if(j.text=_,$!==void 0)j.mtime=$}if(this.context.content=_,$!==void 0)this.context.mtime=$;this.render()}focus(){this.host?.focus?.()}dispose(){if(this.disposed)return;this.disposed=!0,this.host?.remove(),this.container.innerHTML=""}}var W$={id:"workspace-markdown-preview",label:"Workspace Markdown Preview",icon:"preview",capabilities:["preview","readonly"],placement:"tabs",canHandle(_){let $=n5(_);if(_?.mode!=="view")return!1;if(!$||$.kind!=="text")return!1;return $.content_type==="text/markdown"?20:!1},mount(_,$){return new L$(_,$)}},B$={id:"workspace-preview-default",label:"Workspace Preview",icon:"preview",capabilities:["preview","readonly"],placement:"tabs",canHandle(_){if(_?.mode!=="view")return!1;return n5(_)||_?.path?1:!1},mount(_,$){return new L$(_,$)}};var FK=new Set([".docx",".doc",".odt",".rtf",".xlsx",".xls",".ods",".csv",".pptx",".ppt",".odp"]),HK={".docx":"Word Document",".doc":"Word (Legacy)",".odt":"OpenDocument Text",".rtf":"Rich Text",".xlsx":"Excel Spreadsheet",".xls":"Excel (Legacy)",".ods":"OpenDocument Spreadsheet",".csv":"CSV Data",".pptx":"PowerPoint",".ppt":"PowerPoint (Legacy)",".odp":"OpenDocument Presentation"},JK={".docx":"\uD83D\uDCDD",".doc":"\uD83D\uDCDD",".odt":"\uD83D\uDCDD",".rtf":"\uD83D\uDCDD",".xlsx":"\uD83D\uDCCA",".xls":"\uD83D\uDCCA",".ods":"\uD83D\uDCCA",".csv":"\uD83D\uDCCA",".pptx":"\uD83D\uDCFD️",".ppt":"\uD83D\uDCFD️",".odp":"\uD83D\uDCFD️"};function D7(_){if(!_)return"";let $=_.lastIndexOf(".");if($<0)return"";return _.slice($).toLowerCase()}function O7(_){return _.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}class A7{container;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Z=j.split("/").pop()||"document",Y=D7(j),q=JK[Y]||"\uD83D\uDCC4",Q=HK[Y]||"Office Document",N=document.createElement("div");N.style.cssText="width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:var(--bg-primary,#1a1a1a);",N.innerHTML=`
            <div style="text-align:center;max-width:360px;padding:24px;">
                <div style="font-size:56px;margin-bottom:12px;">${q}</div>
                <div style="font-size:14px;font-weight:600;color:var(--text-primary,#e0e0e0);margin-bottom:4px;word-break:break-word;">${O7(Z)}</div>
                <div style="font-size:11px;color:var(--text-secondary,#888);margin-bottom:20px;">${O7(Q)}</div>
                <button id="ov-open-tab" style="padding:8px 20px;background:var(--accent-color,#1d9bf0);color:var(--accent-contrast-text,#fff);
                    border:none;border-radius:5px;font-size:13px;font-weight:500;cursor:pointer;
                    transition:background 0.15s;"
                    onmouseenter="this.style.background='var(--accent-hover,#1a8cd8)'"
                    onmouseleave="this.style.background='var(--accent-color,#1d9bf0)'">
                    Open in Tab
                </button>
            </div>
        `,_.appendChild(N);let K=N.querySelector("#ov-open-tab");if(K)K.addEventListener("click",()=>{let G=new CustomEvent("office-viewer:open-tab",{bubbles:!0,detail:{path:j}});_.dispatchEvent(G)})}getContent(){return}isDirty(){return!1}focus(){}resize(){}dispose(){if(this.disposed)return;this.disposed=!0,this.container.innerHTML=""}}class E7{container;iframe=null;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Z=j.split("/").pop()||"document",Y=`/workspace/raw?path=${encodeURIComponent(j)}`,q=`/office-viewer/?url=${encodeURIComponent(Y)}&name=${encodeURIComponent(Z)}`;this.iframe=document.createElement("iframe"),this.iframe.src=q,this.iframe.style.cssText="width:100%;height:100%;border:none;background:#1e1e1e;",_.appendChild(this.iframe)}getContent(){return}isDirty(){return!1}focus(){this.iframe?.focus()}resize(){}dispose(){if(this.disposed)return;if(this.disposed=!0,this.iframe)this.iframe.src="about:blank",this.iframe=null;this.container.innerHTML=""}}var z$={id:"office-viewer",label:"Office Viewer",icon:"file-text",capabilities:["readonly","preview"],placement:"tabs",canHandle(_){let $=D7(_?.path);if(!$||!FK.has($))return!1;return 50},mount(_,$){if($?.mode==="view")return new A7(_,$);return new E7(_,$)}};var OK=/\.(csv|tsv)$/i;function k7(_){return _.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}class M7{container;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Z=j.split("/").pop()||"table.csv",Y=j.toLowerCase().endsWith(".tsv")?"TSV Table":"CSV Table",q=document.createElement("div");q.style.cssText="width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:var(--bg-primary,#1a1a1a);",q.innerHTML=`
            <div style="text-align:center;max-width:360px;padding:24px;">
                <div style="font-size:56px;margin-bottom:12px;">\uD83D\uDCCA</div>
                <div style="font-size:14px;font-weight:600;color:var(--text-primary,#e0e0e0);margin-bottom:4px;word-break:break-word;">${k7(Z)}</div>
                <div style="font-size:11px;color:var(--text-secondary,#888);margin-bottom:20px;">${k7(Y)}</div>
                <button id="csv-open-tab" style="padding:8px 20px;background:var(--accent-color,#1d9bf0);color:var(--accent-contrast-text,#fff);
                    border:none;border-radius:5px;font-size:13px;font-weight:500;cursor:pointer;
                    transition:background 0.15s;"
                    onmouseenter="this.style.background='var(--accent-hover,#1a8cd8)'"
                    onmouseleave="this.style.background='var(--accent-color,#1d9bf0)'">
                    Open in Tab
                </button>
            </div>
        `,_.appendChild(q);let Q=q.querySelector("#csv-open-tab");if(Q)Q.addEventListener("click",()=>{let N=new CustomEvent("csv-viewer:open-tab",{bubbles:!0,detail:{path:j}});_.dispatchEvent(N)})}getContent(){return}isDirty(){return!1}focus(){}resize(){}dispose(){if(this.disposed)return;this.disposed=!0,this.container.innerHTML=""}}class I7{container;iframe=null;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Z=`/csv-viewer/?path=${encodeURIComponent(j)}`;this.iframe=document.createElement("iframe"),this.iframe.src=Z,this.iframe.style.cssText="width:100%;height:100%;border:none;background:var(--bg-primary,#000);",_.appendChild(this.iframe)}getContent(){return}isDirty(){return!1}focus(){this.iframe?.focus()}resize(){}dispose(){if(this.disposed)return;if(this.disposed=!0,this.iframe)this.iframe.src="about:blank",this.iframe=null;this.container.innerHTML=""}}var F$={id:"csv-viewer",label:"CSV Viewer",icon:"table",capabilities:["readonly","preview"],placement:"tabs",canHandle(_){let $=_?.path||"";if(!OK.test($))return!1;return 55},mount(_,$){if($?.mode==="view")return new M7(_,$);return new I7(_,$)}};var DK=/\.pdf$/i;function AK(_){return _.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}class x7{container;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Z=j.split("/").pop()||"document.pdf",Y=document.createElement("div");Y.style.cssText="width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:var(--bg-primary,#1a1a1a);",Y.innerHTML=`
            <div style="text-align:center;max-width:360px;padding:24px;">
                <div style="font-size:56px;margin-bottom:12px;">\uD83D\uDCC4</div>
                <div style="font-size:14px;font-weight:600;color:var(--text-primary,#e0e0e0);margin-bottom:4px;word-break:break-word;">${AK(Z)}</div>
                <div style="font-size:11px;color:var(--text-secondary,#888);margin-bottom:20px;">PDF Document</div>
                <button id="pdf-open-tab" style="padding:8px 20px;background:var(--accent-color,#1d9bf0);color:var(--accent-contrast-text,#fff);
                    border:none;border-radius:5px;font-size:13px;font-weight:500;cursor:pointer;
                    transition:background 0.15s;"
                    onmouseenter="this.style.background='var(--accent-hover,#1a8cd8)'"
                    onmouseleave="this.style.background='var(--accent-color,#1d9bf0)'">
                    Open in Tab
                </button>
            </div>
        `,_.appendChild(Y);let q=Y.querySelector("#pdf-open-tab");if(q)q.addEventListener("click",()=>{let Q=new CustomEvent("pdf-viewer:open-tab",{bubbles:!0,detail:{path:j}});_.dispatchEvent(Q)})}getContent(){return}isDirty(){return!1}focus(){}resize(){}dispose(){if(this.disposed)return;this.disposed=!0,this.container.innerHTML=""}}class T7{container;iframe=null;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Z=`/pdf-viewer/?path=${encodeURIComponent(j)}`;this.iframe=document.createElement("iframe"),this.iframe.src=Z,this.iframe.style.cssText="width:100%;height:100%;border:none;background:#1e1e1e;",_.appendChild(this.iframe)}getContent(){return}isDirty(){return!1}focus(){this.iframe?.focus()}resize(){}dispose(){if(this.disposed)return;if(this.disposed=!0,this.iframe)this.iframe.src="about:blank",this.iframe=null;this.container.innerHTML=""}}var H$={id:"pdf-viewer",label:"PDF Viewer",icon:"file-text",capabilities:["readonly","preview"],placement:"tabs",canHandle(_){let $=_?.path||"";if(!DK.test($))return!1;return 52},mount(_,$){if($?.mode==="view")return new x7(_,$);return new T7(_,$)}};var EK=/\.(png|jpe?g|gif|webp|bmp|ico|svg)$/i;function J$(_){return _.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}class C7{container;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Z=j.split("/").pop()||"image",Y=`/workspace/raw?path=${encodeURIComponent(j)}`,q=document.createElement("div");q.style.cssText="width:100%;height:100%;display:flex;flex-direction:column;background:var(--bg-primary,#1a1a1a);",q.innerHTML=`
            <div style="flex:1;min-height:0;display:flex;align-items:center;justify-content:center;overflow:hidden;padding:16px;">
                <img src="${J$(Y)}" alt="${J$(Z)}" style="max-width:100%;max-height:100%;object-fit:contain;border-radius:4px;" />
            </div>
            <div style="display:flex;align-items:center;justify-content:space-between;padding:8px 16px;border-top:1px solid var(--border-color,#333);flex-shrink:0;">
                <div style="font-size:12px;color:var(--text-secondary,#888);overflow:hidden;text-overflow:ellipsis;white-space:nowrap;min-width:0;">${J$(Z)}</div>
                <button id="img-open-tab" style="padding:5px 14px;background:var(--accent-color,#1d9bf0);color:var(--accent-contrast-text,#fff);
                    border:none;border-radius:4px;font-size:12px;font-weight:500;cursor:pointer;flex-shrink:0;
                    transition:background 0.15s;"
                    onmouseenter="this.style.background='var(--accent-hover,#1a8cd8)'"
                    onmouseleave="this.style.background='var(--accent-color,#1d9bf0)'">
                    Open in Tab
                </button>
            </div>
        `,_.appendChild(q);let Q=q.querySelector("#img-open-tab");if(Q)Q.addEventListener("click",()=>{let N=new CustomEvent("image-viewer:open-tab",{bubbles:!0,detail:{path:j}});_.dispatchEvent(N)})}getContent(){return}isDirty(){return!1}focus(){}resize(){}dispose(){if(this.disposed)return;this.disposed=!0,this.container.innerHTML=""}}class y7{container;iframe=null;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Z=`/image-viewer/?path=${encodeURIComponent(j)}`;this.iframe=document.createElement("iframe"),this.iframe.src=Z,this.iframe.style.cssText="width:100%;height:100%;border:none;background:var(--bg-primary,#000);",_.appendChild(this.iframe)}getContent(){return}isDirty(){return!1}focus(){this.iframe?.focus()}resize(){}dispose(){if(this.disposed)return;if(this.disposed=!0,this.iframe)this.iframe.src="about:blank",this.iframe=null;this.container.innerHTML=""}}var O$={id:"image-viewer",label:"Image Viewer",icon:"image",capabilities:["readonly","preview"],placement:"tabs",canHandle(_){let $=_?.path||"";if(!EK.test($))return!1;return 48},mount(_,$){if($?.mode==="view")return new C7(_,$);return new y7(_,$)}};var kK=/\.(mp4|m4v|mov|webm|ogv)$/i;function MK(_){return _.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}class P7{container;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Z=j.split("/").pop()||"video.mp4",Y=document.createElement("div");Y.style.cssText="width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:var(--bg-primary,#1a1a1a);",Y.innerHTML=`
            <div style="text-align:center;max-width:360px;padding:24px;">
                <div style="font-size:56px;margin-bottom:12px;">\uD83C\uDFAC</div>
                <div style="font-size:14px;font-weight:600;color:var(--text-primary,#e0e0e0);margin-bottom:4px;word-break:break-word;">${MK(Z)}</div>
                <div style="font-size:11px;color:var(--text-secondary,#888);margin-bottom:20px;">Video File</div>
                <button id="video-open-tab" style="padding:8px 20px;background:var(--accent-color,#1d9bf0);color:var(--accent-contrast-text,#fff);
                    border:none;border-radius:5px;font-size:13px;font-weight:500;cursor:pointer;
                    transition:background 0.15s;"
                    onmouseenter="this.style.background='var(--accent-hover,#1a8cd8)'"
                    onmouseleave="this.style.background='var(--accent-color,#1d9bf0)'">
                    Open in Tab
                </button>
            </div>
        `,_.appendChild(Y);let q=Y.querySelector("#video-open-tab");if(q)q.addEventListener("click",()=>{let Q=new CustomEvent("video-viewer:open-tab",{bubbles:!0,detail:{path:j}});_.dispatchEvent(Q)})}getContent(){return}isDirty(){return!1}focus(){}resize(){}dispose(){if(this.disposed)return;this.disposed=!0,this.container.innerHTML=""}}class S7{container;iframe=null;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Z=`/video-viewer/?path=${encodeURIComponent(j)}`;this.iframe=document.createElement("iframe"),this.iframe.src=Z,this.iframe.style.cssText="width:100%;height:100%;border:none;background:#111;",_.appendChild(this.iframe)}getContent(){return}isDirty(){return!1}focus(){this.iframe?.focus()}resize(){}dispose(){if(this.disposed)return;if(this.disposed=!0,this.iframe)this.iframe.src="about:blank",this.iframe=null;this.container.innerHTML=""}}var D$={id:"video-viewer",label:"Video Viewer",icon:"play-circle",capabilities:["readonly","preview"],placement:"tabs",canHandle(_){let $=_?.path||"";if(!kK.test($))return!1;return 54},mount(_,$){if($?.mode==="view")return new P7(_,$);return new S7(_,$)}};function IK(_){if(!_)return!1;let $=_.toLowerCase();return $.endsWith(".drawio")||$.endsWith(".drawio.xml")||$.endsWith(".drawio.svg")||$.endsWith(".drawio.png")}function xK(_){return _.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}var A$='<mxfile host="app.diagrams.net"><diagram id="page-1" name="Page-1"><mxGraphModel dx="1260" dy="720" grid="1" gridSize="10" guides="1" tooltips="1" connect="1" arrows="1" fold="1" page="1" pageScale="1" pageWidth="850" pageHeight="1100" math="0" shadow="0"><root><mxCell id="0"/><mxCell id="1" parent="0"/></root></mxGraphModel></diagram></mxfile>';function w7(_){let $=String(_||"").trim();return $?$:A$}function TK(_){let $=String(_||"").toLowerCase();if($.endsWith(".drawio.svg")||$.endsWith(".svg"))return"xmlsvg";if($.endsWith(".drawio.png")||$.endsWith(".png"))return"xmlpng";return"xml"}function CK(_){let $="",j=32768;for(let Z=0;Z<_.length;Z+=j)$+=String.fromCharCode(..._.subarray(Z,Z+j));return btoa($)}function yK(_,$="*"){try{let j=(q)=>{let Q=_.parent||_.opener;if(!Q)return!1;return Q.postMessage(JSON.stringify({event:"workspace-export",...q}),$),!0},Z=_.EditorUi;if(Z?.prototype&&!Z.prototype.__piclawWorkspaceSavePatched){let q=Z.prototype.saveData;Z.prototype.saveData=function(Q,N,K,G,V,X){try{if(Q&&K!=null&&j({filename:Q,format:N,data:K,mimeType:G,base64Encoded:Boolean(V),defaultMode:X}))return}catch(U){console.warn("[drawio-pane] saveData intercept failed, falling back to native save",U)}return q.apply(this,arguments)},Z.prototype.__piclawWorkspaceSavePatched=!0}let Y=_.App;if(Y?.prototype&&!Y.prototype.__piclawExportPatched){let q=Y.prototype.exportFile;Y.prototype.exportFile=function(Q,N,K,G,V,X){try{if(N&&j({filename:N,data:Q,mimeType:K,base64Encoded:Boolean(G),mode:V,folderId:X}))return}catch(U){console.warn("[drawio-pane] export intercept failed, falling back to native export",U)}return q.apply(this,arguments)},Y.prototype.__piclawExportPatched=!0}return Boolean(Z?.prototype&&Z.prototype.__piclawWorkspaceSavePatched||Y?.prototype&&Y.prototype.__piclawExportPatched)}catch{return!1}}async function R7(_,$){let j=new Uint8Array(await _.arrayBuffer());return`data:${_.headers.get("Content-Type")||$};base64,${CK(j)}`}class u7{container;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Z=j.split("/").pop()||"diagram.drawio",Y=document.createElement("div");Y.style.cssText="width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:var(--bg-primary,#1a1a1a);",Y.innerHTML=`
            <div style="text-align:center;max-width:360px;padding:24px;">
                <div style="font-size:56px;margin-bottom:12px;">\uD83D\uDCD0</div>
                <div style="font-size:14px;font-weight:600;color:var(--text-primary,#e0e0e0);margin-bottom:4px;word-break:break-word;">${xK(Z)}</div>
                <div style="font-size:11px;color:var(--text-secondary,#888);margin-bottom:20px;">Draw.io Diagram</div>
                <button id="drawio-open-tab" style="padding:8px 20px;background:var(--accent-color,#1d9bf0);color:var(--accent-contrast-text,#fff);
                    border:none;border-radius:5px;font-size:13px;font-weight:500;cursor:pointer;
                    transition:background 0.15s;"
                    onmouseenter="this.style.background='var(--accent-hover,#1a8cd8)'"
                    onmouseleave="this.style.background='var(--accent-color,#1d9bf0)'">
                    Edit in Tab
                </button>
            </div>
        `,_.appendChild(Y);let q=Y.querySelector("#drawio-open-tab");if(q)q.addEventListener("click",()=>{let Q=new CustomEvent("drawio:open-tab",{bubbles:!0,detail:{path:j}});_.dispatchEvent(Q)})}getContent(){return}isDirty(){return!1}focus(){}resize(){}dispose(){if(this.disposed)return;this.disposed=!0,this.container.innerHTML=""}}class f7{container;iframe=null;overlay=null;disposed=!1;filePath;fileName;format;xmlData="";fileLoaded=!1;editorReady=!1;loadSent=!1;saveChain=Promise.resolve();onMessageBound;constructor(_,$){this.container=_,this.filePath=$.path||"",this.fileName=this.filePath.split("/").pop()||"diagram.drawio",this.format=TK(this.filePath),this.onMessageBound=this.onMessage.bind(this);let j=document.createElement("div");j.style.cssText="position:relative;width:100%;height:100%;background:#1e1e1e;",this.overlay=document.createElement("div"),this.overlay.style.cssText="position:absolute;inset:0;display:flex;align-items:center;justify-content:center;color:#999;font:14px system-ui,sans-serif;z-index:1;pointer-events:none;",this.overlay.textContent="Loading draw.io editor…",j.appendChild(this.overlay);let Y=`/drawio/index.html?embed=1&proto=json&spin=1&modified=0&noSaveBtn=1&noExitBtn=1&saveAndExit=0&libraries=0&ui=dark&dark=${window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?"1":"0"}`;this.iframe=document.createElement("iframe"),this.iframe.src=Y,this.iframe.style.cssText="width:100%;height:100%;border:none;background:#1e1e1e;position:relative;z-index:0;",this.iframe.addEventListener("load",()=>{let q=()=>{if(!this.iframe?.contentWindow||this.disposed)return;if(yK(this.iframe.contentWindow))return;setTimeout(q,250)};q()}),j.appendChild(this.iframe),_.appendChild(j),window.addEventListener("message",this.onMessageBound),this.loadFile()}async loadFile(){if(!this.filePath){this.xmlData=A$,this.fileLoaded=!0,this.trySendLoad();return}try{let _=await fetch(`/workspace/raw?path=${encodeURIComponent(this.filePath)}`);if(_.ok)if(this.format==="xmlsvg")this.xmlData=await R7(_,"image/svg+xml");else if(this.format==="xmlpng")this.xmlData=await R7(_,"image/png");else this.xmlData=w7(await _.text());else if(_.status===404)this.xmlData=A$;else throw Error(`HTTP ${_.status}`);this.fileLoaded=!0,this.trySendLoad()}catch(_){if(this.overlay)this.overlay.textContent=`Failed to load: ${_ instanceof Error?_.message:String(_)}`}}trySendLoad(){if(this.disposed||this.loadSent||!this.editorReady||!this.fileLoaded||!this.iframe?.contentWindow)return;if(this.loadSent=!0,this.iframe.contentWindow.postMessage(JSON.stringify({action:"load",xml:this.format==="xml"?w7(this.xmlData):this.xmlData,autosave:1,saveAndExit:"0",noSaveBtn:"1",noExitBtn:"1",title:this.fileName}),"*"),this.overlay)this.overlay.style.display="none"}queueSave(_,$){if(!this.filePath)return;this.saveChain=this.saveChain.then(async()=>{let j=await fetch("/drawio/save",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({path:this.filePath,format:_.format||this.format,xml:_.xml,data:_.data,mimeType:_.mimeType,filename:_.filename,base64Encoded:_.base64Encoded})});if(!j.ok)throw Error(`HTTP ${j.status}`);if($&&this.iframe?.contentWindow)this.iframe.contentWindow.postMessage(JSON.stringify({action:"status",message:"Saved",modified:!1}),"*")}).catch((j)=>{if(console.error("[drawio-pane] save failed:",j),this.overlay)this.overlay.style.display="flex",this.overlay.textContent=`Save failed: ${j instanceof Error?j.message:String(j)}`})}onMessage(_){if(this.disposed||_.source!==this.iframe?.contentWindow)return;let $;try{$=typeof _.data==="string"?JSON.parse(_.data):_.data}catch{return}switch($?.event){case"init":this.editorReady=!0,this.trySendLoad();break;case"autosave":if(this.format==="xml"){if(typeof $.xml==="string")this.queueSave({xml:$.xml,format:"xml"},!1)}else if(typeof $.xml==="string")this.xmlData=$.xml;break;case"save":if(this.format==="xml"){if(typeof $.xml==="string")this.queueSave({xml:$.xml,format:"xml"},!0)}else if(typeof $.xml==="string"&&this.iframe?.contentWindow)this.xmlData=$.xml,this.iframe.contentWindow.postMessage(JSON.stringify({action:"export",format:this.format,xml:$.xml,spinKey:"export"}),"*");break;case"export":if(typeof $.data==="string")this.queueSave({data:$.data,format:this.format,xml:typeof $.xml==="string"?$.xml:void 0},!0);break;case"workspace-export":if(typeof $.data==="string")this.queueSave({data:$.data,xml:typeof $.xml==="string"?$.xml:void 0,mimeType:typeof $.mimeType==="string"?$.mimeType:void 0,filename:typeof $.filename==="string"?$.filename:void 0,base64Encoded:Boolean($.base64Encoded),format:this.format},!0);break;case"exit":default:break}}getContent(){return}isDirty(){return!1}focus(){this.iframe?.focus()}resize(){}dispose(){if(this.disposed)return;if(this.disposed=!0,window.removeEventListener("message",this.onMessageBound),this.iframe)this.iframe.src="about:blank",this.iframe=null;this.overlay=null,this.container.innerHTML=""}}var E$={id:"drawio-editor",label:"Draw.io Editor",icon:"git-merge",capabilities:["edit","preview"],placement:"tabs",canHandle(_){if(!IK(_?.path))return!1;return 60},mount(_,$){if($?.mode==="view")return new u7(_,$);return new f7(_,$)}};var PK=/\.mindmap\.ya?ml$/i,k$=String(Date.now());function v7(){let _=document.documentElement?.dataset?.theme;if(_==="dark")return!0;if(_==="light")return!1;try{return!!window.matchMedia?.("(prefers-color-scheme: dark)")?.matches}catch{return!1}}function M$(_){let $=_.split("?")[0];if(document.querySelector(`script[data-src="${$}"]`))return Promise.resolve();let Z=document.querySelector(`script[src="${$}"]`);if(Z)Z.remove();return new Promise((Y,q)=>{let Q=document.createElement("script");Q.src=_,Q.dataset.src=$,Q.onload=()=>Y(),Q.onerror=()=>q(Error(`Failed to load ${_}`)),document.head.appendChild(Q)})}function SK(_){if(document.querySelector(`link[href="${_}"]`))return;let $=document.createElement("link");$.rel="stylesheet",$.href=_,document.head.appendChild($)}function wK(_){let $=document.createElementNS("http://www.w3.org/2000/svg","svg");$.id="mindmap-svg",$.setAttribute("width","100%"),$.setAttribute("height","100%"),$.style.cssText="display:block;position:absolute;inset:0;",_.appendChild($);let j=document.createElement("div");j.id="toolbar",j.className="mindmap-toolbar",j.innerHTML=`
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
    `,_.appendChild(Z)}class b7{container;constructor(_,$){this.container=_;let j=$.path||"",Z=j.split("/").pop()||"mindmap",Y=document.createElement("div");Y.style.cssText="width:100%;height:100%;display:flex;flex-direction:column;background:var(--bg-primary);",Y.innerHTML=`
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
            </div>`,_.appendChild(Y),Y.querySelector("#mm-open-tab")?.addEventListener("click",()=>{_.dispatchEvent(new CustomEvent("mindmap:open-tab",{bubbles:!0,detail:{path:j}}))})}getContent(){return}isDirty(){return!1}focus(){}resize(){}dispose(){this.container.innerHTML=""}}class g7{container;filePath;dirty=!1;dirtyCallback=null;disposed=!1;mindmapEl=null;pendingContent=null;lastContent="";themeListener=()=>{window.__mindmapEditor?.setTheme?.(v7())};constructor(_,$){this.container=_,this.filePath=$.path||"",this.init($.content)}async resolveInitialContent(_){if(_!==void 0)return _;if(!this.filePath)return"";try{return(await(await fetch(`/workspace/file?path=${encodeURIComponent(this.filePath)}&max=1000000&mode=edit`)).json())?.text||""}catch{return""}}async init(_){let $=await this.resolveInitialContent(_);if(this.disposed)return;if(this.lastContent=$,SK("/static/css/mindmap.css"),await Promise.all([M$("/static/js/vendor/d3-mindmap.min.js?v="+k$),M$("/static/js/vendor/js-yaml.min.js?v="+k$)]),this.disposed)return;this.mindmapEl=document.createElement("div"),this.mindmapEl.id="mindmap-container",this.mindmapEl.tabIndex=-1,this.mindmapEl.style.cssText="width:100%;height:100%;overflow:hidden;position:relative;outline:none;",this.container.appendChild(this.mindmapEl),wK(this.mindmapEl);let j=v7(),Z=this.filePath.replace(/\/[^/]+$/,"")||"/";try{if(await M$("/static/js/vendor/mindmap-editor.js?v="+k$),this.disposed)return;let Y=window.__mindmapEditor;if(!Y)throw Error("__mindmapEditor not found");if(Y.mount({content:$,isDark:j,onEdit:(q)=>{this.lastContent=q,this.dirty=!0,this.dirtyCallback?.(!0),this.saveToWorkspace(q)},resolveImagePath:(q)=>{if(q.startsWith("data:")||q.startsWith("http"))return q;return`/workspace/raw?path=${encodeURIComponent(Z+"/"+q)}`}}),this.pendingContent!==null)Y.update(this.pendingContent),this.lastContent=this.pendingContent,this.pendingContent=null;window.addEventListener("piclaw-theme-change",this.themeListener)}catch(Y){if(console.error("[mindmap] Failed to load mindmap renderer:",Y),this.mindmapEl)this.mindmapEl.innerHTML='<div style="padding:24px;color:var(--text-secondary);">Failed to load mindmap editor.</div>'}}async saveToWorkspace(_){if(!this.filePath)return;try{let $=await fetch("/workspace/file",{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({path:this.filePath,content:_})});if(!$.ok)throw Error(`HTTP ${$.status}`);this.dirty=!1,this.dirtyCallback?.(!1)}catch($){console.error("[mindmap] Save failed:",$)}}getContent(){return}isDirty(){return this.dirty}setContent(_,$){if(_===this.lastContent)return;let j=window.__mindmapEditor;if(j?.update)j.update(_);else this.pendingContent=_;this.lastContent=_,this.dirty=!1,this.dirtyCallback?.(!1)}focus(){this.mindmapEl?.focus()}resize(){window.dispatchEvent(new Event("resize"))}onDirtyChange(_){this.dirtyCallback=_}dispose(){if(this.disposed)return;this.disposed=!0,window.removeEventListener("piclaw-theme-change",this.themeListener),window.__mindmapEditor?.destroy(),this.pendingContent=null,this.container.innerHTML=""}}var I$={id:"mindmap-editor",label:"Mindmap Editor",icon:"mindmap",capabilities:["edit","preview"],placement:"tabs",canHandle(_){let $=_?.path||"";if(!PK.test($))return!1;return 50},mount(_,$){if($?.mode==="view")return new b7(_,$);return new g7(_,$)}};var RK=/\.kanban\.md$/i,uK=String(Date.now());function m7(){let _=document.documentElement?.dataset?.theme;if(_==="dark")return!0;if(_==="light")return!1;try{return!!window.matchMedia?.("(prefers-color-scheme: dark)")?.matches}catch{return!1}}function fK(){let _=window;if(_.preact)return;_.preact={h:N8,render:D4,Component:_5,createContext:$2},_.preactHooks={useState:g,useEffect:v,useCallback:C,useRef:T,useMemo:v0,useReducer:L6,useContext:Y2,useLayoutEffect:I5,useImperativeHandle:Z2,useErrorBoundary:Q2,useDebugValue:q2},_.htm={bind:()=>B}}function vK(_){let $=_.split("?")[0];if(document.querySelector(`script[data-src="${$}"]`))return Promise.resolve();let Z=document.querySelector(`script[src="${$}"]`);if(Z)Z.remove();return new Promise((Y,q)=>{let Q=document.createElement("script");Q.src=_,Q.dataset.src=$,Q.onload=()=>Y(),Q.onerror=()=>q(Error(`Failed to load ${_}`)),document.head.appendChild(Q)})}function bK(_){if(document.querySelector(`link[href="${_}"]`))return;let $=document.createElement("link");$.rel="stylesheet",$.href=_,document.head.appendChild($)}class p7{container;constructor(_,$){this.container=_;let j=$.path||"",Z=j.split("/").pop()||"kanban",Y=document.createElement("div");Y.style.cssText="width:100%;height:100%;display:flex;flex-direction:column;background:var(--bg-primary);",Y.innerHTML=`
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
        `,_.appendChild(Y),Y.querySelector("#kb-open-tab")?.addEventListener("click",()=>{_.dispatchEvent(new CustomEvent("kanban:open-tab",{bubbles:!0,detail:{path:j}}))})}getContent(){return}isDirty(){return!1}focus(){}resize(){}dispose(){this.container.innerHTML=""}}class h7{container;filePath;dirty=!1;dirtyCallback=null;disposed=!1;boardEl=null;pendingContent=null;lastContent="";themeListener=()=>{window.__kanbanEditor?.setTheme?.(m7())};constructor(_,$){this.container=_,this.filePath=$.path||"",this.init($.content)}async resolveInitialContent(_){if(_!==void 0)return _;if(!this.filePath)return"";try{return(await(await fetch(`/workspace/file?path=${encodeURIComponent(this.filePath)}&max=1000000&mode=edit`)).json())?.text||""}catch{return""}}async init(_){let $=await this.resolveInitialContent(_);if(this.disposed)return;this.lastContent=$,bK("/static/css/kanban.css"),this.boardEl=document.createElement("div"),this.boardEl.id="kanban-container",this.boardEl.style.cssText="width:100%;height:100%;overflow:auto;position:relative;",this.container.appendChild(this.boardEl);let j=m7();try{if(fK(),await vK("/static/js/vendor/kanban-editor.js?v="+uK),this.disposed)return;let Z=window.__kanbanEditor;if(!Z)throw Error("__kanbanEditor not found");if(Z.mount(this.boardEl,{content:$,isDark:j,onEdit:(Y)=>{this.lastContent=Y,this.dirty=!0,this.dirtyCallback?.(!0),this.saveToWorkspace(Y)}}),this.pendingContent!==null)Z.update(this.pendingContent),this.lastContent=this.pendingContent,this.pendingContent=null;window.addEventListener("piclaw-theme-change",this.themeListener)}catch(Z){if(console.error("[kanban] Failed to load kanban renderer:",Z),this.boardEl)this.boardEl.innerHTML='<div style="padding:24px;color:var(--text-secondary);">Failed to load kanban editor.</div>'}}async saveToWorkspace(_){if(!this.filePath)return;try{let $=await fetch("/workspace/file",{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({path:this.filePath,content:_})});if(!$.ok)throw Error(`HTTP ${$.status}`);this.dirty=!1,this.dirtyCallback?.(!1)}catch($){console.error("[kanban] Save failed:",$)}}getContent(){return}isDirty(){return this.dirty}setContent(_,$){if(_===this.lastContent)return;let j=window.__kanbanEditor;if(j?.update)j.update(_);else this.pendingContent=_;this.lastContent=_,this.dirty=!1,this.dirtyCallback?.(!1)}focus(){this.boardEl?.focus()}resize(){}onDirtyChange(_){this.dirtyCallback=_}dispose(){if(this.disposed)return;this.disposed=!0,window.removeEventListener("piclaw-theme-change",this.themeListener),window.__kanbanEditor?.destroy(),this.pendingContent=null,this.container.innerHTML=""}}var x$={id:"kanban-editor",label:"Kanban Board",icon:"kanban",capabilities:["edit","preview"],placement:"tabs",canHandle(_){let $=_?.path||"";if(!RK.test($))return!1;return 50},mount(_,$){if($?.mode==="view")return new p7(_,$);return new h7(_,$)}};class c7{tabs=new Map;activeId=null;mruOrder=[];listeners=new Set;onChange(_){return this.listeners.add(_),()=>this.listeners.delete(_)}notify(){let _=this.getTabs(),$=this.activeId;for(let j of this.listeners)try{j(_,$)}catch(Z){console.warn("[tab-store] Change listener failed:",Z)}}open(_,$){let j=this.tabs.get(_);if(!j)j={id:_,label:$||_.split("/").pop()||_,path:_,dirty:!1,pinned:!1},this.tabs.set(_,j);return this.activate(_),j}activate(_){if(!this.tabs.has(_))return;this.activeId=_,this.mruOrder=[_,...this.mruOrder.filter(($)=>$!==_)],this.notify()}close(_){if(!this.tabs.get(_))return!1;if(this.tabs.delete(_),this.mruOrder=this.mruOrder.filter((j)=>j!==_),this.activeId===_)this.activeId=this.mruOrder[0]||null;return this.notify(),!0}closeOthers(_){for(let[$,j]of this.tabs)if($!==_&&!j.pinned)this.tabs.delete($),this.mruOrder=this.mruOrder.filter((Z)=>Z!==$);if(this.activeId&&!this.tabs.has(this.activeId))this.activeId=_;this.notify()}closeAll(){for(let[_,$]of this.tabs)if(!$.pinned)this.tabs.delete(_),this.mruOrder=this.mruOrder.filter((j)=>j!==_);if(this.activeId&&!this.tabs.has(this.activeId))this.activeId=this.mruOrder[0]||null;this.notify()}setDirty(_,$){let j=this.tabs.get(_);if(!j||j.dirty===$)return;j.dirty=$,this.notify()}togglePin(_){let $=this.tabs.get(_);if(!$)return;$.pinned=!$.pinned,this.notify()}saveViewState(_,$){let j=this.tabs.get(_);if(j)j.viewState=$}getViewState(_){return this.tabs.get(_)?.viewState}rename(_,$,j){let Z=this.tabs.get(_);if(!Z)return;if(this.tabs.delete(_),Z.id=$,Z.path=$,Z.label=j||$.split("/").pop()||$,this.tabs.set($,Z),this.mruOrder=this.mruOrder.map((Y)=>Y===_?$:Y),this.activeId===_)this.activeId=$;this.notify()}getTabs(){return Array.from(this.tabs.values())}getActiveId(){return this.activeId}getActive(){return this.activeId?this.tabs.get(this.activeId)||null:null}get(_){return this.tabs.get(_)}get size(){return this.tabs.size}hasUnsaved(){for(let _ of this.tabs.values())if(_.dirty)return!0;return!1}getDirtyTabs(){return Array.from(this.tabs.values()).filter((_)=>_.dirty)}nextTab(){let _=this.getTabs();if(_.length<=1)return;let $=_.findIndex((Z)=>Z.id===this.activeId),j=_[($+1)%_.length];this.activate(j.id)}prevTab(){let _=this.getTabs();if(_.length<=1)return;let $=_.findIndex((Z)=>Z.id===this.activeId),j=_[($-1+_.length)%_.length];this.activate(j.id)}mruSwitch(){if(this.mruOrder.length>1)this.activate(this.mruOrder[1])}}var s0=new c7;function l7(){let[_,$]=g(!1),[j,Z]=g("default"),Y=T(!1);v(()=>{let K=L5("notificationsEnabled",!1);if(Y.current=K,$(K),typeof Notification<"u")Z(Notification.permission)},[]),v(()=>{Y.current=_},[_]);let q=C(()=>{if(typeof Notification>"u")return Promise.resolve("denied");try{let K=Notification.requestPermission();if(K&&typeof K.then==="function")return K;return Promise.resolve(K)}catch{return Promise.resolve("default")}},[]),Q=C(async()=>{if(typeof window>"u"||typeof Notification>"u")return;if(!window.isSecureContext){alert("Notifications require a secure context (HTTPS or installed app).");return}if(Notification.permission==="denied"){Z("denied"),alert("Browser notifications are blocked. Enable them in your browser settings.");return}if(Notification.permission==="default"){let G=await q();if(Z(G||"default"),G!=="granted"){Y.current=!1,$(!1),Y1("notificationsEnabled","false");return}}let K=!Y.current;Y.current=K,$(K),Y1("notificationsEnabled",String(K))},[q]),N=C((K,G)=>{if(!Y.current)return!1;if(typeof Notification>"u")return!1;if(Notification.permission!=="granted")return!1;try{let V=new Notification(K,{body:G});return V.onclick=()=>{try{window.focus()}catch{}},!0}catch{return!1}},[]);return{notificationsEnabled:_,notificationPermission:j,toggleNotifications:Q,notify:N}}var d5=(_)=>{let $=new Set;return(_||[]).filter((j)=>{if(!j||$.has(j.id))return!1;return $.add(j.id),!0})};function n7({preserveTimelineScroll:_,preserveTimelineScrollTop:$,chatJid:j=null}){let[Z,Y]=g(null),[q,Q]=g(!1),N=T(!1),K=T(null),G=T(!1),V=T(null),X=T(null),U=T(0);v(()=>{N.current=q},[q]),v(()=>{X.current=Z},[Z]),v(()=>{U.current+=1,V.current=null,G.current=!1,N.current=!1,Q(!1)},[j]);let L=C(async(J=null)=>{let W=U.current;try{if(J){let D=await B6(J,50,0,j);if(W!==U.current)return;Y(D.posts),Q(!1)}else{let D=await g4(10,null,j);if(W!==U.current)return;Y(D.posts),Q(D.has_more)}}catch(D){if(W!==U.current)return;console.error("Failed to load posts:",D)}},[j]),H=C(async()=>{let J=U.current;try{let W=await g4(10,null,j);if(J!==U.current)return;Y((D)=>{if(!D||D.length===0)return W.posts;return d5([...W.posts,...D])}),Q((D)=>D||W.has_more)}catch(W){if(J!==U.current)return;console.error("Failed to refresh timeline:",W)}},[j]),O=C(async(J={})=>{let W=U.current,D=X.current;if(!D||D.length===0)return;if(G.current)return;let{preserveScroll:E=!0,preserveMode:R="top",allowRepeat:P=!1}=J,m=(M)=>{if(!E){M();return}if(R==="top")$(M);else _(M)},x=D.slice().sort((M,z)=>M.id-z.id)[0]?.id;if(!Number.isFinite(x))return;if(!P&&V.current===x)return;G.current=!0,V.current=x;try{let M=await g4(10,x,j);if(W!==U.current)return;if(M.posts.length>0)m(()=>{Y((z)=>d5([...M.posts,...z||[]])),Q(M.has_more)});else Q(!1)}catch(M){if(W!==U.current)return;console.error("Failed to load more posts:",M)}finally{if(W===U.current)G.current=!1}},[j,_,$]);return v(()=>{K.current=O},[O]),{posts:Z,setPosts:Y,hasMore:q,setHasMore:Q,hasMoreRef:N,loadPosts:L,refreshTimeline:H,loadMore:O,loadMoreRef:K,loadingMoreRef:G,lastBeforeIdRef:V}}function d7(){let[_,$]=g(null),[j,Z]=g({text:"",totalLines:0}),[Y,q]=g(""),[Q,N]=g({text:"",totalLines:0}),[K,G]=g(null),[V,X]=g(null),[U,L]=g(null),H=T(null),O=T(0),J=T(!1),W=T(""),D=T(""),E=T(null),R=T(null),P=T(null),m=T(null),c=T(!1),x=T(!1);return{agentStatus:_,setAgentStatus:$,agentDraft:j,setAgentDraft:Z,agentPlan:Y,setAgentPlan:q,agentThought:Q,setAgentThought:N,pendingRequest:K,setPendingRequest:G,currentTurnId:V,setCurrentTurnId:X,steerQueuedTurnId:U,setSteerQueuedTurnId:L,lastAgentEventRef:H,lastSilenceNoticeRef:O,isAgentRunningRef:J,draftBufferRef:W,thoughtBufferRef:D,pendingRequestRef:E,stalledPostIdRef:R,currentTurnIdRef:P,steerQueuedTurnIdRef:m,thoughtExpandedRef:c,draftExpandedRef:x}}function i7({appShellRef:_,sidebarWidthRef:$,editorWidthRef:j,dockHeightRef:Z}){let Y=T((V)=>{V.preventDefault();let X=_.current;if(!X)return;let U=V.clientX,L=$.current||280,H=V.currentTarget;H.classList.add("dragging"),X.classList.add("sidebar-resizing"),document.body.style.cursor="col-resize",document.body.style.userSelect="none";let O=U,J=(D)=>{O=D.clientX;let E=Math.min(Math.max(L+(D.clientX-U),160),600);X.style.setProperty("--sidebar-width",`${E}px`),$.current=E},W=()=>{let D=Math.min(Math.max(L+(O-U),160),600);$.current=D,H.classList.remove("dragging"),X.classList.remove("sidebar-resizing"),document.body.style.cursor="",document.body.style.userSelect="",Y1("sidebarWidth",String(Math.round(D))),document.removeEventListener("mousemove",J),document.removeEventListener("mouseup",W)};document.addEventListener("mousemove",J),document.addEventListener("mouseup",W)}).current,q=T((V)=>{V.preventDefault();let X=_.current;if(!X)return;let U=V.touches[0];if(!U)return;let L=U.clientX,H=$.current||280,O=V.currentTarget;O.classList.add("dragging"),X.classList.add("sidebar-resizing"),document.body.style.userSelect="none";let J=(D)=>{let E=D.touches[0];if(!E)return;D.preventDefault();let R=Math.min(Math.max(H+(E.clientX-L),160),600);X.style.setProperty("--sidebar-width",`${R}px`),$.current=R},W=()=>{O.classList.remove("dragging"),X.classList.remove("sidebar-resizing"),document.body.style.userSelect="",Y1("sidebarWidth",String(Math.round($.current||H))),document.removeEventListener("touchmove",J),document.removeEventListener("touchend",W),document.removeEventListener("touchcancel",W)};document.addEventListener("touchmove",J,{passive:!1}),document.addEventListener("touchend",W),document.addEventListener("touchcancel",W)}).current,Q=T((V)=>{V.preventDefault();let X=_.current;if(!X)return;let U=V.clientX,L=j.current||$.current||280,H=V.currentTarget;H.classList.add("dragging"),document.body.style.cursor="col-resize",document.body.style.userSelect="none";let O=U,J=(D)=>{O=D.clientX;let E=Math.min(Math.max(L+(D.clientX-U),200),800);X.style.setProperty("--editor-width",`${E}px`),j.current=E},W=()=>{let D=Math.min(Math.max(L+(O-U),200),800);j.current=D,H.classList.remove("dragging"),document.body.style.cursor="",document.body.style.userSelect="",Y1("editorWidth",String(Math.round(D))),document.removeEventListener("mousemove",J),document.removeEventListener("mouseup",W)};document.addEventListener("mousemove",J),document.addEventListener("mouseup",W)}).current,N=T((V)=>{V.preventDefault();let X=_.current;if(!X)return;let U=V.touches[0];if(!U)return;let L=U.clientX,H=j.current||$.current||280,O=V.currentTarget;O.classList.add("dragging"),document.body.style.userSelect="none";let J=(D)=>{let E=D.touches[0];if(!E)return;D.preventDefault();let R=Math.min(Math.max(H+(E.clientX-L),200),800);X.style.setProperty("--editor-width",`${R}px`),j.current=R},W=()=>{O.classList.remove("dragging"),document.body.style.userSelect="",Y1("editorWidth",String(Math.round(j.current||H))),document.removeEventListener("touchmove",J),document.removeEventListener("touchend",W),document.removeEventListener("touchcancel",W)};document.addEventListener("touchmove",J,{passive:!1}),document.addEventListener("touchend",W),document.addEventListener("touchcancel",W)}).current,K=T((V)=>{V.preventDefault();let X=_.current;if(!X)return;let U=V.clientY,L=Z?.current||200,H=V.currentTarget;H.classList.add("dragging"),document.body.style.cursor="row-resize",document.body.style.userSelect="none";let O=U,J=(D)=>{O=D.clientY;let E=Math.min(Math.max(L-(D.clientY-U),100),window.innerHeight*0.5);if(X.style.setProperty("--dock-height",`${E}px`),Z)Z.current=E;window.dispatchEvent(new CustomEvent("dock-resize"))},W=()=>{let D=Math.min(Math.max(L-(O-U),100),window.innerHeight*0.5);if(Z)Z.current=D;H.classList.remove("dragging"),document.body.style.cursor="",document.body.style.userSelect="",Y1("dockHeight",String(Math.round(D))),window.dispatchEvent(new CustomEvent("dock-resize")),document.removeEventListener("mousemove",J),document.removeEventListener("mouseup",W)};document.addEventListener("mousemove",J),document.addEventListener("mouseup",W)}).current,G=T((V)=>{V.preventDefault();let X=_.current;if(!X)return;let U=V.touches[0];if(!U)return;let L=U.clientY,H=Z?.current||200,O=V.currentTarget;O.classList.add("dragging"),document.body.style.userSelect="none";let J=(D)=>{let E=D.touches[0];if(!E)return;D.preventDefault();let R=Math.min(Math.max(H-(E.clientY-L),100),window.innerHeight*0.5);if(X.style.setProperty("--dock-height",`${R}px`),Z)Z.current=R;window.dispatchEvent(new CustomEvent("dock-resize"))},W=()=>{O.classList.remove("dragging"),document.body.style.userSelect="",Y1("dockHeight",String(Math.round(Z?.current||H))),window.dispatchEvent(new CustomEvent("dock-resize")),document.removeEventListener("touchmove",J),document.removeEventListener("touchend",W),document.removeEventListener("touchcancel",W)};document.addEventListener("touchmove",J,{passive:!1}),document.addEventListener("touchend",W),document.addEventListener("touchcancel",W)}).current;return{handleSplitterMouseDown:Y,handleSplitterTouchStart:q,handleEditorSplitterMouseDown:Q,handleEditorSplitterTouchStart:N,handleDockSplitterMouseDown:K,handleDockSplitterTouchStart:G}}function gK(_,$,j,Z){if(!(_ instanceof Map)||_.size===0||!$||!j)return _;let Y=!1,q=new Map;for(let[Q,N]of _.entries()){let K=Q;if(Z==="dir"){if(Q===$)K=j,Y=!0;else if(Q.startsWith(`${$}/`))K=`${j}${Q.slice($.length)}`,Y=!0}else if(Q===$)K=j,Y=!0;q.set(K,N)}return Y?q:_}function r7({onTabClosed:_}={}){let $=T(_);$.current=_;let[j,Z]=g(()=>s0.getTabs()),[Y,q]=g(()=>s0.getActiveId()),[Q,N]=g(()=>s0.getTabs().length>0);v(()=>{return s0.onChange((x,M)=>{Z(x),q(M),N(x.length>0)})},[]);let[K,G]=g(()=>new Set),[V,X]=g(()=>new Map),U=C((x)=>{G((M)=>{let z=new Set(M);if(z.has(x))z.delete(x);else z.add(x);return z})},[]),L=C((x)=>{G((M)=>{if(!M.has(x))return M;let z=new Set(M);return z.delete(x),z})},[]),H=C((x)=>{X((M)=>{if(!M.has(x))return M;let z=new Map(M);return z.delete(x),z})},[]),O=C((x,M={})=>{if(!x)return;let z=typeof M?.paneOverrideId==="string"&&M.paneOverrideId.trim()?M.paneOverrideId.trim():null,k={path:x,mode:"edit"};try{if(!(z?c0.get(z):c0.resolve(k))){if(!c0.get("editor")){console.warn(`[openEditor] No pane handler for: ${x}`);return}}}catch(n){console.warn(`[openEditor] paneRegistry.resolve() error for "${x}":`,n)}let u=typeof M?.label==="string"&&M.label.trim()?M.label.trim():void 0;if(s0.open(x,u),z)X((n)=>{if(n.get(x)===z)return n;let b=new Map(n);return b.set(x,z),b})},[]),J=C(()=>{let x=s0.getActiveId();if(x){let M=s0.get(x);if(M?.dirty){if(!window.confirm(`"${M.label}" has unsaved changes. Close anyway?`))return}s0.close(x),L(x),H(x),$.current?.(x)}},[H,L]),W=C((x)=>{let M=s0.get(x);if(M?.dirty){if(!window.confirm(`"${M.label}" has unsaved changes. Close anyway?`))return}s0.close(x),L(x),H(x),$.current?.(x)},[H,L]),D=C((x)=>{s0.activate(x)},[]),E=C((x)=>{let M=s0.getTabs().filter((u)=>u.id!==x&&!u.pinned),z=M.filter((u)=>u.dirty).length;if(z>0){if(!window.confirm(`${z} unsaved tab${z>1?"s":""} will be closed. Continue?`))return}let k=M.map((u)=>u.id);s0.closeOthers(x),k.forEach((u)=>{L(u),H(u),$.current?.(u)})},[H,L]),R=C(()=>{let x=s0.getTabs().filter((k)=>!k.pinned),M=x.filter((k)=>k.dirty).length;if(M>0){if(!window.confirm(`${M} unsaved tab${M>1?"s":""} will be closed. Continue?`))return}let z=x.map((k)=>k.id);s0.closeAll(),z.forEach((k)=>{L(k),H(k),$.current?.(k)})},[H,L]),P=C((x)=>{s0.togglePin(x)},[]),m=C((x)=>{if(!x)return;X((M)=>{if(M.get(x)==="editor")return M;let z=new Map(M);return z.set(x,"editor"),z}),s0.activate(x)},[]),c=C(()=>{let x=s0.getActiveId();if(x)window.dispatchEvent(new CustomEvent("workspace-reveal-path",{detail:{path:x}}))},[]);return v(()=>{let x=(M)=>{let{oldPath:z,newPath:k,type:u}=M.detail||{};if(!z||!k)return;if(u==="dir"){for(let n of s0.getTabs())if(n.path===z||n.path.startsWith(`${z}/`)){let b=`${k}${n.path.slice(z.length)}`;s0.rename(n.id,b)}}else s0.rename(z,k);X((n)=>gK(n,z,k,u))};return window.addEventListener("workspace-file-renamed",x),()=>window.removeEventListener("workspace-file-renamed",x)},[]),v(()=>{let x=(M)=>{if(s0.hasUnsaved())M.preventDefault(),M.returnValue=""};return window.addEventListener("beforeunload",x),()=>window.removeEventListener("beforeunload",x)},[]),{editorOpen:Q,tabStripTabs:j,tabStripActiveId:Y,previewTabs:K,tabPaneOverrides:V,openEditor:O,closeEditor:J,handleTabClose:W,handleTabActivate:D,handleTabCloseOthers:E,handleTabCloseAll:R,handleTabTogglePin:P,handleTabTogglePreview:U,handleTabEditSource:m,revealInExplorer:c}}function T$(_,$){try{if(typeof window>"u")return $;let j=window.__PICLAW_SILENCE||{},Z=`__PICLAW_SILENCE_${_.toUpperCase()}_MS`,Y=j[_]??window[Z],q=Number(Y);return Number.isFinite(q)?q:$}catch{return $}}var C$=T$("warning",30000),o7=T$("finalize",120000),y$=T$("refresh",30000),s7=30000;function a7(_){let $={};return(_?.agents||[]).forEach((j)=>{$[j.id]=j}),$}function t7(){if(/iPad|iPhone/.test(navigator.userAgent))return!0;return navigator.platform==="MacIntel"&&navigator.maxTouchPoints>1}function e7(_=30000){let[,$]=g(0);v(()=>{let j=setInterval(()=>$((Z)=>Z+1),_);return()=>clearInterval(j)},[_])}function _9(_,$=160){let j=String(_||"").replace(/\r\n/g,`
`);if(!j)return 0;return j.split(`
`).reduce((Z,Y)=>Z+Math.max(1,Math.ceil(Y.length/$)),0)}async function $9(_){let{panelKey:$,expanded:j,currentTurnIdRef:Z,thoughtExpandedRef:Y,draftExpandedRef:q,setAgentThoughtVisibility:Q,getAgentThought:N,thoughtBufferRef:K,draftBufferRef:G,setAgentThought:V,setAgentDraft:X}=_;if($!=="thought"&&$!=="draft")return;let U=Z.current;if($==="thought"){if(Y.current=j,U)try{await Q(U,"thought",j)}catch(L){console.warn("Failed to update thought visibility:",L)}if(!j)return;try{let L=U?await N(U,"thought"):null;if(L?.text)K.current=L.text;V((H)=>({...H||{text:"",totalLines:0},fullText:K.current||H?.fullText||"",totalLines:Number.isFinite(L?.total_lines)?L.total_lines:H?.totalLines||0}))}catch(L){console.warn("Failed to fetch full thought:",L)}return}if(q.current=j,U)try{await Q(U,"draft",j)}catch(L){console.warn("Failed to update draft visibility:",L)}if(!j)return;try{let L=U?await N(U,"draft"):null;if(L?.text)G.current=L.text;X((H)=>({...H||{text:"",totalLines:0},fullText:G.current||H?.fullText||"",totalLines:Number.isFinite(L?.total_lines)?L.total_lines:H?.totalLines||0}))}catch(L){console.warn("Failed to fetch full draft:",L)}}function P$(_){return String(_||"").trim()||"web:default"}function j9({remainingQueueCount:_=0,currentTurnId:$=null,isAgentTurnActive:j=!1}={}){return Number(_||0)<=0&&!$&&!j}function mK(_){if(!_||typeof _!=="object")return null;let $=_.started_at??_.startedAt;if(typeof $!=="string"||!$)return null;let j=Date.parse($);return Number.isFinite(j)?j:null}function M4(_){if(!_||typeof _!=="object")return!1;let $=_.intent_key??_.intentKey;return _.type==="intent"&&$==="compaction"}function T8(_){if(!_||typeof _!=="object")return"";let $=_.title;if(typeof $==="string"&&$.trim())return $.trim();let j=_.status;if(typeof j==="string"&&j.trim())return j.trim();return M4(_)?"Compacting context":"Working..."}function pK(_){let $=Math.max(0,Math.floor(_/1000)),j=$%60,Z=Math.floor($/60)%60,Y=Math.floor($/3600);if(Y>0)return`${Y}:${String(Z).padStart(2,"0")}:${String(j).padStart(2,"0")}`;return`${Z}:${String(j).padStart(2,"0")}`}function C8(_,$=Date.now()){let j=mK(_);if(j===null)return null;return pK(Math.max(0,$-j))}function i5(_){return typeof _==="string"}function Z9(_){return typeof _==="string"&&_.trim().length>0}function S$(_){if(!Array.isArray(_))return[];return _.filter(($)=>Z9($?.chat_jid)&&Z9($?.agent_name))}function Y9(_){if(!Array.isArray(_))return[];return _.filter(($)=>i5($?.chat_jid)&&i5($?.agent_name))}function q9(_,$,j){if(!Array.isArray($)||$.length===0)return Array.isArray(_)?_:[];let Z=new Map;if(Array.isArray(_)){for(let Q of _)if(i5(Q?.chat_jid))Z.set(Q.chat_jid,Q)}let Y=$.map((Q)=>{if(!i5(Q?.chat_jid))return Q;let N=Z.get(Q.chat_jid);return N?{...Q,...N,is_active:N.is_active??Q.is_active}:Q}),q=i5(j)?j:"";return Y.sort((Q,N)=>{if(Q.chat_jid===q&&N.chat_jid!==q)return-1;if(N.chat_jid===q&&Q.chat_jid!==q)return 1;let K=Boolean(Q.archived_at),G=Boolean(N.archived_at);if(K!==G)return K?1:-1;if(Boolean(Q.is_active)!==Boolean(N.is_active))return Q.is_active?-1:1;return String(Q.chat_jid).localeCompare(String(N.chat_jid))}),Y}var hK={hasModel:!1,model:void 0,hasThinkingLevel:!1,thinkingLevel:null,hasSupportsThinking:!1,supportsThinking:!1,hasProviderUsage:!1,providerUsage:null};function Q9(_){if(!_||typeof _!=="object")return hK;let $=_.model??_.current;return{hasModel:$!==void 0,model:$,hasThinkingLevel:_.thinking_level!==void 0,thinkingLevel:_.thinking_level??null,hasSupportsThinking:_.supports_thinking!==void 0,supportsThinking:Boolean(_.supports_thinking),hasProviderUsage:_.provider_usage!==void 0,providerUsage:_.provider_usage??null}}function N9(_){let j=(Array.isArray(_)?_:[]).find((Z)=>Z?.id==="default");return{name:j?.name,avatarUrl:j?.avatar_url}}function K9(_,$){if(!_||typeof _!=="object")return null;let j=_.agent_id;if(!j)return null;let Z=String(j),Y=_.agent_name,q=_.agent_avatar;if(!Y&&q===void 0)return null;let Q=$||{id:Z},N=Q.name||null,K=Q.avatar_url??Q.avatarUrl??Q.avatar??null,G=!1,V=!1;if(Y&&Y!==Q.name)N=Y,G=!0;if(q!==void 0){let X=typeof q==="string"?q.trim():null,U=typeof K==="string"?K.trim():null,L=X||null;if(L!==(U||null))K=L,V=!0}if(!G&&!V)return null;return{agentId:Z,nameChanged:G,avatarChanged:V,resolvedName:N,resolvedAvatar:K}}function G9(_,$){let j=typeof $?.name==="string"&&$.name.trim()?$.name.trim():"You",Z=typeof $?.avatar_url==="string"?$.avatar_url.trim():null,Y=typeof $?.avatar_background==="string"&&$.avatar_background.trim()?$.avatar_background.trim():null;if(_.name===j&&_.avatar_url===Z&&_.avatar_background===Y)return _;return{name:j,avatar_url:Z,avatar_background:Y}}function X9(_,$){if(!$||typeof $!=="object")return _;let j=$.user_name??$.userName,Z=$.user_avatar??$.userAvatar,Y=$.user_avatar_background??$.userAvatarBackground;if(j===void 0&&Z===void 0&&Y===void 0)return _;let q=typeof j==="string"&&j.trim()?j.trim():_.name||"You",Q=Z===void 0?_.avatar_url:typeof Z==="string"&&Z.trim()?Z.trim():null,N=Y===void 0?_.avatar_background:typeof Y==="string"&&Y.trim()?Y.trim():null;if(_.name===q&&_.avatar_url===Q&&_.avatar_background===N)return _;return{name:q,avatar_url:Q,avatar_background:N}}function cK(_){if(!_?.data?.is_bot_message)return!1;let $=_.data.content;return $==="Queued as a follow-up (one-at-a-time)."||$==="⁣"}function V9(_,$){if(!_||!Array.isArray(_))return _;let j=new Set($||[]),Z=_.filter((Y)=>!j.has(Y?.id)&&!cK(Y));return Z.length===_.length?_:Z}function U9(_,$){let j=$||new Set;return Array.isArray(_)?_.map((Z)=>({...Z})).filter((Z)=>!j.has(Z.row_id)):[]}function L9(_,$){if(!Array.isArray(_)||!Array.isArray($))return!1;return _.length===$.length&&_.every((j,Z)=>j?.row_id===$[Z]?.row_id)}function I4(_,$){let j=Array.isArray(_)&&$!=null?_.filter((Z)=>Z?.row_id!==$):Array.isArray(_)?[..._]:[];return{items:j,remainingQueueCount:j.length}}function W9(_,$){let j=Array.isArray(_)?_:[],Z=$?.row_id,Y=$?.content;if(Z==null||typeof Y!=="string"||!Y.trim())return j;if(j.some((q)=>q?.row_id===Z))return j;return[...j,{row_id:Z,content:Y,timestamp:$?.timestamp||null,thread_id:$?.thread_id??null}]}function B9(_){if(!_||typeof _!=="object")return!1;if(_.queued==="followup"||_.queued==="steer")return!0;let $=_.command;return Boolean($&&typeof $==="object"&&($.queued_followup||$.queued_steer))}async function z9(_){let{getAgents:$,setAgents:j,setUserProfile:Z,applyBranding:Y}=_;try{let q=await $();j(a7(q));let Q=q?.user||{};Z((K)=>G9(K,Q));let N=N9(q?.agents);Y(N.name,N.avatarUrl)}catch(q){console.warn("Failed to load agents:",q)}}function F9(_){let{payload:$,agentsRef:j,setAgents:Z,applyBranding:Y}=_,q=K9($,$?.agent_id?j.current?.[String($.agent_id)]||{id:String($.agent_id)}:null);if(!q)return;if(Z((Q)=>{let K={...Q[q.agentId]||{id:q.agentId}};if(q.nameChanged)K.name=q.resolvedName;if(q.avatarChanged)K.avatar_url=q.resolvedAvatar;return{...Q,[q.agentId]:K}}),q.agentId==="default")Y(q.resolvedName,q.resolvedAvatar,q.avatarChanged?Date.now():null)}function H9(_){let{payload:$,setUserProfile:j}=_;j((Z)=>X9(Z,$))}function J9(_){let{payload:$,setActiveModel:j,setActiveThinkingLevel:Z,setSupportsThinking:Y,setActiveModelUsage:q}=_,Q=Q9($);if(Q.hasModel)j(Q.model);if(Q.hasThinkingLevel)Z(Q.thinkingLevel);if(Q.hasSupportsThinking)Y(Q.supportsThinking);if(Q.hasProviderUsage)q(Q.providerUsage)}function O9(_){let{currentChatJid:$,getAgentModels:j,activeChatJidRef:Z,applyModelState:Y}=_,q=$;j(q).then((Q)=>{if(Z.current!==q)return;if(Q)Y(Q)}).catch(()=>{})}function D9(_){let{currentChatJid:$,getActiveChatAgents:j,getChatBranches:Z,activeChatJidRef:Y,setActiveChatAgents:q}=_,Q=$;Promise.all([j().catch(()=>({chats:[]})),Z(null,{includeArchived:!0}).catch(()=>({chats:[]}))]).then(([N,K])=>{if(Y.current!==Q)return;let G=S$(N?.chats),V=S$(K?.chats);q(q9(G,V,Q))}).catch(()=>{if(Y.current!==Q)return;q([])})}function A9(_){let{currentRootChatJid:$,getChatBranches:j,setCurrentChatBranches:Z}=_;j($).then((Y)=>{Z(Y9(Y?.chats))}).catch(()=>{})}function E9(_){let{response:$,refreshActiveChatAgents:j,refreshCurrentChatBranches:Z,refreshContextUsage:Y,refreshAutoresearchStatus:q,refreshQueueState:Q}=_;if(!$||typeof $!=="object")return;if(j(),Z(),Y(),q(),B9($))Q()}function w$(_){if(!Array.isArray(_?.content))return null;return _.content.find((j)=>j?.type==="status_panel"&&j?.panel)?.panel||null}function k9(_,$){let j=new Map(_),Z=w$($);if(typeof $?.key==="string"&&$.key&&Z)j.set($.key,Z);else j.delete("autoresearch");return j}function M9(_,$){let j=typeof $?.key==="string"?$.key:"";if(!j)return _;let Z=new Map(_),Y=w$($);if($?.options?.remove||!Y)Z.delete(j);else Z.set(j,Y);return Z}function I9(_){if(_?.options?.remove)return!0;return w$(_)?.state!=="running"}function R$(_,$){return`${_}:${$}`}function x9(_,$,j){let Z=R$($,j);if(_.has(Z))return _;let Y=new Set(_);return Y.add(Z),Y}function T9(_,$){if(!_.has($))return _;let j=new Set(_);return j.delete($),j}function y8(_,$){if(_.size===0)return _;let j=`${$}:`,Z=new Set(Array.from(_).filter((Y)=>!String(Y).startsWith(j)));return Z.size===_.size?_:Z}async function C9(_){let $=typeof _.action?.action_type==="string"?_.action.action_type:"",j=typeof _.action?.key==="string"?_.action.key:"";if($==="autoresearch.stop")return await _.stopAutoresearch(_.currentChatJid,{generateReport:!0}),{refreshAutoresearchStatus:!0};if($==="autoresearch.dismiss")return await _.dismissAutoresearch(_.currentChatJid),{refreshAutoresearchStatus:!0};if($==="autoresearch.copy_tmux"){let Z=typeof _.panel?.tmux_command==="string"?_.panel.tmux_command.trim():"";if(!Z)throw Error("No tmux command available.");return await _.writeClipboard(Z),{refreshAutoresearchStatus:!1,toast:{title:"Copied",detail:"tmux command copied to clipboard.",kind:"success"}}}throw Error(`Unsupported panel action: ${$||j}`)}function i_(_){return!_?.currentHashtag&&!_?.searchQuery&&!_?.searchOpen}function y9(_,$,j){return Boolean($&&j&&(_==="new_post"||_==="new_reply"||_==="agent_response"))}function u$(_,$){return _&&$}function P9(_,$){if(!Array.isArray(_)||_.length===0)return[$];if(_.some((j)=>j?.id===$?.id))return _;return[..._,$]}function S9(_,$){if(!Array.isArray(_))return _;if(!_.some((j)=>j?.id===$?.id))return _;return _.map((j)=>j?.id===$?.id?$:j)}function w9(_,$){if(!Array.isArray(_))return _;let j=Array.isArray($)?$:[];if(j.length===0)return _;let Z=new Set(j),Y=_.filter((q)=>!Z.has(q?.id));return Y.length===_.length?_:Y}function R9(_){let{currentChatJid:$,queueRefreshGenRef:j,activeChatJidRef:Z,dismissedQueueRowIdsRef:Y,getAgentQueueState:q,setFollowupQueueItems:Q,clearQueuedSteerStateIfStale:N}=_,K=++j.current,G=$;q(G).then((V)=>{if(K!==j.current)return;if(Z.current!==G)return;let X=Y.current,U=U9(V?.items,X);if(U.length){Q((L)=>L9(L,U)?L:U);return}X.clear(),N(0),Q((L)=>L.length===0?L:[])}).catch(()=>{if(K!==j.current)return;if(Z.current!==G)return;Q((V)=>V.length===0?V:[])})}async function u9(_){let{currentChatJid:$,activeChatJidRef:j,getAgentContext:Z,setContextUsage:Y}=_,q=$;try{let Q=await Z(q);if(j.current!==q)return;if(Q)Y(Q)}catch(Q){if(j.current!==q)return;console.warn("Failed to fetch agent context:",Q)}}async function f9(_){let{currentChatJid:$,activeChatJidRef:j,getAutoresearchStatus:Z,setExtensionStatusPanels:Y,setPendingExtensionPanelActions:q}=_,Q=$;try{let N=await Z(Q);if(j.current!==Q)return;Y((K)=>k9(K,N)),q((K)=>y8(K,"autoresearch"))}catch(N){if(j.current!==Q)return;console.warn("Failed to fetch autoresearch status:",N)}}function v9(_){let{refreshModelState:$,refreshActiveChatAgents:j,refreshCurrentChatBranches:Z,refreshQueueState:Y,refreshContextUsage:q,refreshAutoresearchStatus:Q}=_;$(),j(),Z(),Y(),q(),Q()}function b9(_){let{viewStateRef:$,refreshTimeline:j,refreshModelAndQueueState:Z}=_;if(i_($.current))j();Z()}function g9(_){let{readStoredNumber:$,sidebarWidthRef:j,shellElement:Z,minWidth:Y=160,maxWidth:q=600,fallbackWidth:Q=280}=_,N=$("sidebarWidth",null),K=Number.isFinite(N)?Math.min(Math.max(Number(N),Y),q):Q;if(j.current=K,Z)Z.style.setProperty("--sidebar-width",`${K}px`);return K}async function m9(_){let{currentHashtag:$,searchQuery:j,searchScope:Z,currentChatJid:Y,currentRootChatJid:q,loadPosts:Q,searchPosts:N,setPosts:K,setHasMore:G,scrollToBottom:V,isCancelled:X,scheduleRaf:U=(O)=>requestAnimationFrame(O),scheduleTimeout:L=(O,J)=>{setTimeout(O,J)}}=_,H=()=>{if(X())return;U(()=>{if(X())return;L(()=>{if(X())return;V()},0)})};if($){await Q($);return}if(j){try{let O=await N(j,50,0,Y,Z,q);if(X())return;K(Array.isArray(O?.results)?O.results:[]),G(!1)}catch(O){if(X())return;console.error("Failed to search:",O),K([]),G(!1)}return}try{await Q(),H()}catch(O){if(X())return;console.error("Failed to load timeline:",O)}}function lK(_){let{refreshModelAndQueueState:$,refreshModelState:j,refreshActiveChatAgents:Z,refreshCurrentChatBranches:Y,refreshQueueState:q,intervalMs:Q=60000,scheduleInterval:N=(V,X)=>setInterval(V,X),clearScheduledInterval:K=(V)=>clearInterval(V)}=_;$();let G=N(()=>{j(),Z(),Y(),q()},Q);return()=>{K(G)}}function p9(_){let{getAgents:$,setAgents:j,setUserProfile:Z,applyBranding:Y,readStoredNumber:q,sidebarWidthRef:Q,appShellRef:N,currentChatJid:K,currentRootChatJid:G,getAgentModels:V,getActiveChatAgents:X,getChatBranches:U,activeChatJidRef:L,setActiveChatAgents:H,setCurrentChatBranches:O,setActiveModel:J,setActiveThinkingLevel:W,setSupportsThinking:D,setActiveModelUsage:E,agentsRef:R,refreshQueueState:P,refreshContextUsage:m,refreshAutoresearchStatus:c}=_,x=C(async()=>{await z9({getAgents:$,setAgents:j,setUserProfile:Z,applyBranding:Y})},[Y,$,j,Z]);v(()=>{x(),g9({readStoredNumber:q,sidebarWidthRef:Q,shellElement:N.current})},[N,x,q,Q]);let M=C((i)=>{F9({payload:i,agentsRef:R,setAgents:j,applyBranding:Y})},[R,Y,j]),z=C((i)=>{H9({payload:i,setUserProfile:Z})},[Z]),k=C((i)=>{J9({payload:i,setActiveModel:J,setActiveThinkingLevel:W,setSupportsThinking:D,setActiveModelUsage:E})},[J,E,W,D]),u=C(()=>{O9({currentChatJid:K,getAgentModels:V,activeChatJidRef:L,applyModelState:k})},[L,k,K,V]),n=C(()=>{D9({currentChatJid:K,getActiveChatAgents:X,getChatBranches:U,activeChatJidRef:L,setActiveChatAgents:H})},[L,K,X,U,H]),b=C(()=>{A9({currentRootChatJid:G,getChatBranches:U,setCurrentChatBranches:O})},[G,U,O]),d=C(()=>{v9({refreshModelState:u,refreshActiveChatAgents:n,refreshCurrentChatBranches:b,refreshQueueState:P,refreshContextUsage:m,refreshAutoresearchStatus:c})},[n,c,m,b,u,P]);return v(()=>lK({refreshModelAndQueueState:d,refreshModelState:u,refreshActiveChatAgents:n,refreshCurrentChatBranches:b,refreshQueueState:P}),[n,b,d,u,P]),{updateAgentProfile:M,updateUserProfile:z,applyModelState:k,refreshModelState:u,refreshActiveChatAgents:n,refreshCurrentChatBranches:b,refreshModelAndQueueState:d}}function h9(_){let $=String(_||"").trim();if(!$.startsWith("/btw"))return null;let j=$.slice(4).trim();if(!j)return{type:"help"};if(j==="clear"||j==="close")return{type:"clear"};return{type:"ask",question:j}}function c9(_){return String(_||"").trim()||"web:default"}function l9(_){if(!_)return!1;let $=String(_.answer||"").trim();return _.status!=="running"&&Boolean($)}function n9(_){if(!_)return!1;return _.status!=="running"}function d9(_){let $=String(_?.question||"").trim(),j=String(_?.answer||"").trim();if(!$&&!j)return"";return["BTW side conversation",$?`Question: ${$}`:null,j?`Answer:
${j}`:null].filter(Boolean).join(`

`)}function i9(_){let{btwAbortRef:$,setBtwSession:j}=_;if($.current)$.current.abort(),$.current=null;j(null)}async function r9(_){let{question:$,currentChatJid:j,streamSidePrompt:Z,resolveBtwChatJid:Y,showIntentToast:q,btwAbortRef:Q,setBtwSession:N}=_,K=String($||"").trim();if(!K)return q("BTW needs a question","Usage: /btw <question>","warning"),!0;if(Q.current)Q.current.abort();let G=new AbortController;Q.current=G,N({question:K,answer:"",thinking:"",error:null,model:null,status:"running"});try{let V=await Z(K,{signal:G.signal,chatJid:Y(j),systemPrompt:"Answer the user briefly and directly. This is a side conversation that should not affect the main chat until explicitly injected.",onEvent:(X)=>{if(X==="side_prompt_start")N((U)=>U?{...U,status:"running"}:U)},onThinkingDelta:(X)=>{N((U)=>U?{...U,thinking:`${U.thinking||""}${X||""}`}:U)},onTextDelta:(X)=>{N((U)=>U?{...U,answer:`${U.answer||""}${X||""}`}:U)}});if(Q.current!==G)return!0;N((X)=>X?{...X,answer:V?.result||X.answer||"",thinking:V?.thinking||X.thinking||"",model:V?.model||null,status:"success",error:null}:X)}catch(V){if(G.signal.aborted)return!0;N((X)=>X?{...X,status:"error",error:V?.payload?.error||V?.message||"BTW request failed."}:X)}finally{if(Q.current===G)Q.current=null}return!0}async function o9(_){let{content:$,parseBtwCommand:j,closeBtwPanel:Z,runBtwPrompt:Y,showIntentToast:q}=_,Q=j($);if(!Q)return!1;if(Q.type==="help")return q("BTW usage","Use /btw <question> to open a side conversation.","info",4000),!0;if(Q.type==="clear")return Z(),q("BTW cleared","Closed the side conversation panel.","info"),!0;if(Q.type==="ask")return await Y(Q.question),!0;return!1}async function s9(_){let{btwSession:$,buildBtwInjectionText:j,isComposeBoxAgentActive:Z,currentChatJid:Y,sendAgentMessage:q,handleMessageResponse:Q,showIntentToast:N}=_,K=j($);if(!K)return!1;try{let G=await q("default",K,null,[],Z?"queue":null,Y);return Q(G),N(G?.queued==="followup"?"BTW queued":"BTW injected",G?.queued==="followup"?"The BTW summary was queued as a follow-up because the agent is busy.":"The BTW summary was sent to the main chat.","info",3500),!0}catch(G){return N("BTW inject failed",G?.message||"Could not inject BTW answer into chat.","warning"),!1}}function nK(_){let $=_?.artifact||{},j=$.kind||_?.kind||null;if(j!=="html"&&j!=="svg")return null;if(j==="html"){let Y=typeof $.html==="string"?$.html:typeof _?.html==="string"?_.html:"";return Y?{kind:j,html:Y}:null}let Z=typeof $.svg==="string"?$.svg:typeof _?.svg==="string"?_.svg:"";return Z?{kind:j,svg:Z}:null}function dK(_){let $=_?.artifact&&typeof _.artifact==="object"?_.artifact:{},j=typeof $.svg==="string"?$.svg:typeof _?.svg==="string"?_.svg:"",Z=typeof $.html==="string"?$.html:typeof _?.html==="string"?_.html:typeof _?.w==="string"?_.w:typeof _?.content==="string"?_.content:"",q=($.kind||_?.kind||null)==="svg"||j?"svg":"html";if(q==="svg")return j?{kind:q,svg:j}:{kind:q};return Z?{kind:q,html:Z}:{kind:q}}function x4(_){return typeof _==="number"&&Number.isFinite(_)?_:null}function w0(_){return typeof _==="string"&&_.trim()?_.trim():null}function t9(_,$=!1){let Z=(Array.isArray(_)?_:$?["interactive"]:[]).filter((Y)=>typeof Y==="string").map((Y)=>Y.trim().toLowerCase()).filter(Boolean);return Array.from(new Set(Z))}var e9="__PICLAW_WIDGET_HOST__:";function a9(_){return JSON.stringify(_).replace(/</g,"\\u003c").replace(/>/g,"\\u003e").replace(/&/g,"\\u0026").replace(/\u2028/g,"\\u2028").replace(/\u2029/g,"\\u2029")}function f$(_,$){if(!_||_.type!=="generated_widget")return null;let j=nK(_);if(!j)return null;return{title:_.title||_.name||"Generated widget",subtitle:typeof _.subtitle==="string"?_.subtitle:"",description:_.description||_.subtitle||"",originPostId:Number.isFinite($?.id)?$.id:null,originChatJid:typeof $?.chat_jid==="string"?$.chat_jid:null,widgetId:_.widget_id||_.id||null,artifact:j,capabilities:t9(_.capabilities,_.interactive===!0),source:"timeline",status:"final"}}function _j(_){if(!_||typeof _!=="object")return null;let $=dK(_),j=w0(_?.widget_id)||w0(_?.widgetId)||w0(_?.tool_call_id)||w0(_?.toolCallId),Z=w0(_?.tool_call_id)||w0(_?.toolCallId),Y=w0(_?.turn_id)||w0(_?.turnId),q=w0(_?.title)||w0(_?.name)||"Generated widget",Q=w0(_?.subtitle)||"",N=w0(_?.description)||Q,K=w0(_?.status),G=K==="loading"||K==="streaming"||K==="final"||K==="error"?K:"streaming";return{title:q,subtitle:Q,description:N,originPostId:x4(_?.origin_post_id)??x4(_?.originPostId),originChatJid:w0(_?.origin_chat_jid)||w0(_?.originChatJid)||w0(_?.chat_jid)||null,widgetId:j,artifact:$,capabilities:t9(_?.capabilities,!0),source:"live",status:G,turnId:Y,toolCallId:Z,width:x4(_?.width),height:x4(_?.height),error:w0(_?.error)}}function $j(_){return f$(_,null)!==null}function B_(_){let $=w0(_?.toolCallId)||w0(_?.tool_call_id);if($)return $;let j=w0(_?.widgetId)||w0(_?.widget_id);if(j)return j;let Z=x4(_?.originPostId)??x4(_?.origin_post_id);if(Z!==null)return`post:${Z}`;return null}function jj(_){let j=(_?.artifact||{}).kind||_?.kind||null,Y=(Array.isArray(_?.capabilities)?_.capabilities:[]).some((q)=>typeof q==="string"&&q.trim().toLowerCase()==="interactive");return j==="html"&&(_?.source==="live"||Y)}function Zj(_){return jj(_)?"allow-downloads allow-scripts":"allow-downloads"}function P8(_){return{title:w0(_?.title)||"Generated widget",widgetId:w0(_?.widgetId)||w0(_?.widget_id),toolCallId:w0(_?.toolCallId)||w0(_?.tool_call_id),turnId:w0(_?.turnId)||w0(_?.turn_id),capabilities:Array.isArray(_?.capabilities)?_.capabilities:[],source:_?.source==="live"?"live":"timeline",status:w0(_?.status)||"final"}}function S8(_){return{...P8(_),subtitle:w0(_?.subtitle)||"",description:w0(_?.description)||"",error:w0(_?.error)||null,width:x4(_?.width),height:x4(_?.height),runtimeState:_?.runtimeState&&typeof _.runtimeState==="object"?_.runtimeState:null}}function w8(_){return`${e9}${JSON.stringify(S8(_))}`}function Yj(_){if(typeof _==="string"&&_.trim())return _.trim();if(!_||typeof _!=="object")return null;let $=w0(_.text)||w0(_.content)||w0(_.message)||w0(_.prompt)||w0(_.value);if($)return $;let j=_.data;if(typeof j==="string"&&j.trim())return j.trim();if(j&&typeof j==="object"){let Z=w0(j.text)||w0(j.content)||w0(j.message)||w0(j.prompt)||w0(j.value);if(Z)return Z}return null}function qj(_){if(!_||typeof _!=="object")return!1;return _.close===!0||_.dismiss===!0||_.closeAfterSubmit===!0}function Qj(_){let $=w0(_?.status);if($==="loading"||$==="streaming")return"Widget is loading…";if($==="error")return w0(_?.error)||"Widget failed to load.";return"Widget artifact is missing or unsupported."}function iK(_){let $=P8(_);return`<script>
(function () {
  const meta = ${a9($)};
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

  const windowNamePrefix = ${a9(e9)};
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
</script>`}function Nj(_){let $=_?.artifact||{},j=$.kind||_?.kind||null,Z=typeof $.html==="string"?$.html:typeof _?.html==="string"?_.html:"",Y=typeof $.svg==="string"?$.svg:typeof _?.svg==="string"?_.svg:"",q=typeof _?.title==="string"&&_.title.trim()?_.title.trim():"Generated widget",Q=j==="svg"?Y:Z;if(!Q)return"";let N=jj(_),K=["default-src 'none'","img-src data: blob: https: http:","style-src 'unsafe-inline'","font-src data: https: http:","media-src data: blob: https: http:","connect-src 'none'","frame-src 'none'",N?"script-src 'unsafe-inline'":"script-src 'none'","object-src 'none'","base-uri 'none'","form-action 'none'"].join("; "),G=j==="svg"?`<div class="widget-svg-shell">${Q}</div>`:Q,V=N?iK(_):"";return`<!doctype html>
<html>
<head>
<meta charset="utf-8" />
<meta http-equiv="Content-Security-Policy" content="${K}" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<title>${q.replace(/[<&>]/g,"")}</title>
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
${V}
</head>
<body>${G}</body>
</html>`}function rK(_,$){let j=B_(_);return Boolean(_&&j===$)}function z5(_,$,j){if(!rK(_,$))return _;return{..._,runtimeState:{..._?.runtimeState&&typeof _.runtimeState==="object"?_.runtimeState:{},...j}}}function Kj(_,$){return{..._,openedAt:$}}function Gj(_){let $=B_(_);return{nextWidget:null,dismissedSessionKey:_?.source==="live"&&$?$:null}}function Xj(_,$,j){let Z=_j({...$,...$&&$.status?{}:{status:j.fallbackStatus||"streaming"}});if(!Z)return _;let Y=B_(Z);if(Y&&j.dismissedSessionKeys?.has(Y))return _;let q=B_(_),Q=Boolean(Y&&q&&Y===q),N={...Q&&_?.artifact?_.artifact:{},...Z.artifact||{}};return{...Q&&_?_:{},...Z,artifact:N,source:"live",originChatJid:Z.originChatJid||j.currentChatJid,openedAt:Q&&_?.openedAt?_.openedAt:j.updatedAt,liveUpdatedAt:j.updatedAt}}function Vj(_,$){if(!_||_?.source!=="live")return _||null;let j=B_($),Z=B_(_);if(j&&Z&&j!==Z)return _;return null}function Uj(_,$,j){return z5(_,$,{lastEventKind:j.kind,lastEventPayload:j.payload||null,lastSubmitAt:j.submittedAt,lastHostUpdate:{type:"submit_pending",submittedAt:j.submittedAt,preview:j.submissionText||null}})}function v$(_,$,j){if(j.errorMessage)return z5(_,$,{lastHostUpdate:{type:"submit_failed",submittedAt:j.submittedAt,preview:j.submissionText,error:j.errorMessage}});return z5(_,$,{lastHostUpdate:{type:j.queued==="followup"?"submit_queued":"submit_sent",submittedAt:j.submittedAt,preview:j.submissionText,queued:j.queued||null}})}function Lj(_,$,j){return z5(_,$,{lastEventKind:j.kind,lastEventPayload:j.payload||null,...j.kind==="widget.ready"?{readyAt:j.eventAt,lastHostUpdate:{type:"ready_ack",at:j.eventAt}}:{},...j.kind==="widget.request_refresh"?{lastRefreshRequestAt:j.eventAt,refreshCount:j.nextRefreshCount,lastHostUpdate:{type:j.shouldBuildDashboard?"refresh_building":"refresh_ack",at:j.eventAt,count:j.nextRefreshCount,echo:j.payload||null}}:{}})}function Wj(_,$,j){return z5(_,$,{dashboard:j.dashboard,lastHostUpdate:{type:"refresh_dashboard",at:j.at,count:j.count,echo:j.echo||null}})}function Bj(_,$,j){return z5(_,$,{lastHostUpdate:{type:"refresh_failed",at:j.at,count:j.count,error:j.errorMessage}})}function F5(_,$){let j=$?.row_id;if(j==null||typeof j!=="string"&&typeof j!=="number")return null;let Z=I4(_,j);return{rowId:j,items:Z.items,remainingQueueCount:Z.remainingQueueCount}}function b$(_){if(_==="steer")return{title:"Failed to steer message",detail:"The queued message could not be sent as steering."};return{title:"Failed to remove message",detail:"The queued message could not be removed."}}function T4(_){return _.status==="fulfilled"?_.value:null}function R8(_){return Math.max(0,Math.min(100,_))}function zj(_){let $=Array.isArray(_.timelinePayload?.posts)?_.timelinePayload.posts:Array.isArray(_.rawPosts)?_.rawPosts:[],j=$.length?$[$.length-1]:null,Z=$.filter((J)=>J?.data?.is_bot_message).length,Y=$.filter((J)=>!J?.data?.is_bot_message).length,q=Number(_.queuePayload?.count??_.followupQueueItems?.length??0)||0,Q=Array.isArray(_.activeChatsPayload?.chats)?_.activeChatsPayload.chats.length:Array.isArray(_.activeChatAgents)?_.activeChatAgents.length:0,N=Array.isArray(_.branchesPayload?.chats)?_.branchesPayload.chats.length:Array.isArray(_.currentChatBranches)?_.currentChatBranches.length:0,K=Number(_.contextPayload?.percent??_.contextUsage?.percent??0)||0,G=Number(_.contextPayload?.tokens??_.contextUsage?.tokens??0)||0,V=Number(_.contextPayload?.contextWindow??_.contextUsage?.contextWindow??0)||0,X=_.modelsPayload?.current??_.activeModel??null,U=_.modelsPayload?.thinking_level??_.activeThinkingLevel??null,L=_.modelsPayload?.supports_thinking??_.supportsThinking,H=_.statusPayload?.status||(_.isAgentTurnActive?"active":"idle"),O=_.statusPayload?.data?.type||_.statusPayload?.type||null;return{generatedAt:_.generatedAt,request:_.request,chat:{currentChatJid:_.currentChatJid,rootChatJid:_.currentRootChatJid,activeChats:Q,branches:N},agent:{status:H,phase:O,running:Boolean(_.isAgentTurnActive)},model:{current:X,thinkingLevel:U,supportsThinking:Boolean(L)},context:{tokens:G,contextWindow:V,percent:K},queue:{count:q},timeline:{loadedPosts:$.length,botPosts:Z,userPosts:Y,latestPostId:j?.id??null,latestTimestamp:j?.timestamp??null},bars:[{key:"context",label:"Context",value:R8(Math.round(K))},{key:"queue",label:"Queue",value:R8(q*18)},{key:"activeChats",label:"Active chats",value:R8(Q*12)},{key:"posts",label:"Timeline load",value:R8($.length*5)}]}}function Fj(_){if(_==="followup")return{title:"Widget submission queued",detail:"The widget message was queued because the agent is busy.",kind:"info",durationMs:3500};return{title:"Widget submission sent",detail:"The widget message was sent to the chat.",kind:"info",durationMs:3500}}function Hj(_){return{title:"Widget submission failed",detail:_||"Could not send the widget message.",kind:"warning",durationMs:5000}}function Jj(_,$){return{shouldBuildDashboard:Boolean(_?.buildDashboard||_?.dashboardKind==="internal-state"),nextRefreshCount:Number($||0)+1}}function Oj(){return{title:"Dashboard built",detail:"Live dashboard state pushed into the widget.",kind:"info",durationMs:3000}}function Dj(_){return{title:"Dashboard build failed",detail:_||"Could not build dashboard.",kind:"warning",durationMs:5000}}function Aj(){return{title:"Widget refresh requested",detail:"The widget received a host acknowledgement update.",kind:"info",durationMs:3000}}async function Ej(_){let{requestPayload:$=null,currentChatJid:j,currentRootChatJid:Z,getAgentStatus:Y,getAgentContext:q,getAgentQueueState:Q,getAgentModels:N,getActiveChatAgents:K,getChatBranches:G,getTimeline:V,rawPosts:X,activeChatAgents:U,currentChatBranches:L,contextUsage:H,followupQueueItems:O,activeModel:J,activeThinkingLevel:W,supportsThinking:D,isAgentTurnActive:E}=_,[R,P,m,c,x,M,z]=await Promise.allSettled([Y(j),q(j),Q(j),N(j),K(),G(Z),V(20,null,j)]);return zj({generatedAt:new Date().toISOString(),request:$,currentChatJid:j,currentRootChatJid:Z,statusPayload:T4(R),contextPayload:T4(P),queuePayload:T4(m),modelsPayload:T4(c),activeChatsPayload:T4(x),branchesPayload:T4(M),timelinePayload:T4(z),rawPosts:X,activeChatAgents:U,currentChatBranches:L,contextUsage:H,followupQueueItems:O,activeModel:J,activeThinkingLevel:W,supportsThinking:D,isAgentTurnActive:E})}function kj(_){let{queuedItem:$,followupQueueItemsRef:j,dismissedQueueRowIdsRef:Z,currentChatJid:Y,refreshQueueState:q,setFollowupQueueItems:Q,showIntentToast:N,steerAgentQueueItem:K}=_,G=F5(j.current,$);if(!G)return;let{rowId:V}=G;Z.current.add(V),Q((X)=>I4(X,V).items),K(V,P$(Y)).then(()=>{q()}).catch((X)=>{console.warn("[queue] Failed to steer queued item:",X);let U=b$("steer");N(U.title,U.detail,"warning"),Z.current.delete(V),q()})}function Mj(_){let{queuedItem:$,followupQueueItemsRef:j,dismissedQueueRowIdsRef:Z,currentChatJid:Y,refreshQueueState:q,setFollowupQueueItems:Q,showIntentToast:N,clearQueuedSteerStateIfStale:K,removeAgentQueueItem:G}=_,V=F5(j.current,$);if(!V)return;let{rowId:X}=V;Z.current.add(X),K?.(V.remainingQueueCount),Q((U)=>I4(U,X).items),G(X,P$(Y)).then(()=>{q()}).catch((U)=>{console.warn("[queue] Failed to remove queued item:",U);let L=b$("remove");N(L.title,L.detail,"warning"),Z.current.delete(X),q()})}function Ij(_){let{widget:$,dismissedLiveWidgetKeysRef:j,setFloatingWidget:Z}=_;if(!$||typeof $!=="object")return;let Y=B_($);if(Y)j.current.delete(Y);Z(Kj($,new Date().toISOString()))}function xj(_){let{dismissedLiveWidgetKeysRef:$,setFloatingWidget:j}=_;j((Z)=>{let Y=Gj(Z);if(Y.dismissedSessionKey)$.current.add(Y.dismissedSessionKey);return Y.nextWidget})}function Tj(_){let{event:$,widget:j,currentChatJid:Z,isComposeBoxAgentActive:Y,setFloatingWidget:q,handleCloseFloatingWidget:Q,handleMessageResponse:N,showIntentToast:K,sendAgentMessage:G,buildFloatingWidgetDashboardSnapshot:V}=_,X=typeof $?.kind==="string"?$.kind:"",U=B_(j);if(!X||!U)return;if(X==="widget.close"){Q();return}if(X==="widget.submit"){let L=Yj($?.payload),H=qj($?.payload),O=new Date().toISOString();if(q((J)=>Uj(J,U,{kind:X,payload:$?.payload||null,submittedAt:O,submissionText:L})),!L){if(K("Widget submission received","The widget submitted data without a message payload yet.","info",3500),H)Q();return}(async()=>{try{let J=await G("default",L,null,[],Y?"queue":null,Z);N(J),q((D)=>v$(D,U,{submittedAt:O,submissionText:L,queued:J?.queued||null}));let W=Fj(J?.queued);if(K(W.title,W.detail,W.kind,W.durationMs),H)Q()}catch(J){q((D)=>v$(D,U,{submittedAt:O,submissionText:L,errorMessage:J?.message||"Could not send the widget message."}));let W=Hj(J?.message);K(W.title,W.detail,W.kind,W.durationMs)}})();return}if(X==="widget.ready"||X==="widget.request_refresh"){let L=new Date().toISOString(),H=Jj($?.payload||null,j?.runtimeState?.refreshCount);if(q((O)=>Lj(O,U,{kind:X,payload:$?.payload||null,eventAt:L,nextRefreshCount:H.nextRefreshCount,shouldBuildDashboard:H.shouldBuildDashboard})),X==="widget.request_refresh")if(H.shouldBuildDashboard)(async()=>{try{let O=await V($?.payload||null);q((W)=>Wj(W,U,{dashboard:O,at:new Date().toISOString(),count:H.nextRefreshCount,echo:$?.payload||null}));let J=Oj();K(J.title,J.detail,J.kind,J.durationMs)}catch(O){q((W)=>Bj(W,U,{errorMessage:O?.message||"Could not build dashboard.",at:new Date().toISOString(),count:H.nextRefreshCount}));let J=Dj(O?.message);K(J.title,J.detail,J.kind,J.durationMs)}})();else{let O=Aj();K(O.title,O.detail,O.kind,O.durationMs)}}}function oK(_){let{dismissedLiveWidgetKeysRef:$,setFloatingWidget:j}=_;$.current.clear(),j(null)}function Cj(_){let{currentChatJid:$,currentRootChatJid:j,isComposeBoxAgentActive:Z,showIntentToast:Y,setPendingExtensionPanelActions:q,refreshAutoresearchStatus:Q,stopAutoresearch:N,dismissAutoresearch:K,streamSidePrompt:G,btwAbortRef:V,btwSession:X,setBtwSession:U,sendAgentMessage:L,handleMessageResponse:H,dismissedLiveWidgetKeysRef:O,setFloatingWidget:J,getAgentStatus:W,getAgentContext:D,getAgentQueueState:E,getAgentModels:R,getActiveChatAgents:P,getChatBranches:m,getTimeline:c,rawPosts:x,activeChatAgents:M,currentChatBranches:z,contextUsage:k,followupQueueItemsRef:u,activeModel:n,activeThinkingLevel:b,supportsThinking:d,isAgentTurnActive:i}=_,a=C(async(J0,y0)=>{let b0=typeof J0?.key==="string"?J0.key:"",F0=typeof y0?.key==="string"?y0.key:"",f0=R$(b0,F0);if(!b0||!F0)return;q((Q0)=>x9(Q0,b0,F0));try{let Q0=await C9({panel:J0,action:y0,currentChatJid:$,stopAutoresearch:N,dismissAutoresearch:K,writeClipboard:(M0)=>navigator.clipboard.writeText(M0)});if(Q0.refreshAutoresearchStatus)Q();if(Q0.toast)Y(Q0.toast.title,Q0.toast.detail,Q0.toast.kind,Q0.toast.durationMs)}catch(Q0){Y("Panel action failed",Q0?.message||"Could not complete that action.","warning")}finally{q((Q0)=>T9(Q0,f0))}},[$,K,Q,q,Y,N]),j0=C(()=>{i9({btwAbortRef:V,setBtwSession:U})},[V,U]),e=C(async(J0)=>{return await r9({question:J0,currentChatJid:$,streamSidePrompt:G,resolveBtwChatJid:c9,showIntentToast:Y,btwAbortRef:V,setBtwSession:U})},[V,$,U,Y,G]),N0=C(async({content:J0})=>{return await o9({content:J0,parseBtwCommand:h9,closeBtwPanel:j0,runBtwPrompt:e,showIntentToast:Y})},[j0,e,Y]),U0=C(()=>{if(X?.question)e(X.question)},[X,e]),L0=C(async()=>{await s9({btwSession:X,buildBtwInjectionText:d9,isComposeBoxAgentActive:Z,currentChatJid:$,sendAgentMessage:L,handleMessageResponse:H,showIntentToast:Y})},[X,$,H,Z,L,Y]),C0=C(async(J0=null)=>{return Ej({requestPayload:J0,currentChatJid:$,currentRootChatJid:j,getAgentStatus:W,getAgentContext:D,getAgentQueueState:E,getAgentModels:R,getActiveChatAgents:P,getChatBranches:m,getTimeline:c,rawPosts:x,activeChatAgents:M,currentChatBranches:z,contextUsage:k,followupQueueItems:u.current,activeModel:n,activeThinkingLevel:b,supportsThinking:d,isAgentTurnActive:i})},[M,n,b,k,z,$,j,u,P,D,R,E,W,m,c,i,x,d]),O0=C((J0)=>{Ij({widget:J0,dismissedLiveWidgetKeysRef:O,setFloatingWidget:J})},[O,J]),B0=C(()=>{xj({dismissedLiveWidgetKeysRef:O,setFloatingWidget:J})},[O,J]),u0=C((J0,y0)=>{Tj({event:J0,widget:y0,currentChatJid:$,isComposeBoxAgentActive:Z,setFloatingWidget:J,handleCloseFloatingWidget:B0,handleMessageResponse:H,showIntentToast:Y,sendAgentMessage:L,buildFloatingWidgetDashboardSnapshot:C0})},[C0,$,B0,H,Z,L,J,Y]);return v(()=>{oK({dismissedLiveWidgetKeysRef:O,setFloatingWidget:J})},[$,O,J]),{handleExtensionPanelAction:a,closeBtwPanel:j0,handleBtwIntercept:N0,handleBtwRetry:U0,handleBtwInject:L0,handleOpenFloatingWidget:O0,handleCloseFloatingWidget:B0,handleFloatingWidgetEvent:u0}}function yj(_,$){if(typeof _!=="string")return{kind:"ignore"};let j=_.trim();if(!j)return{kind:"toast",title:"No file selected",detail:"Use a valid file path from a file pill.",level:"warning"};if(!$.editorOpen)return{kind:"toast",title:"Editor pane is not open",detail:"Open the editor pane to open files from pills.",level:"warning"};if(/^[a-z][a-z0-9+.-]*:/i.test(j))return{kind:"toast",title:"Cannot open external path from file pill",detail:"Use an in-workspace file path.",level:"warning"};try{if(!$.resolvePane({path:j,mode:"edit"}))return{kind:"toast",title:"No editor available",detail:`No editor can open: ${j}`,level:"warning"}}catch{return{kind:"toast",title:"No editor available",detail:`No editor can open: ${j}`,level:"warning"}}return{kind:"open",path:j}}function g$(_,$){if(typeof $!=="string")return Array.isArray(_)?_:[];let j=$.trim();if(!j)return Array.isArray(_)?_:[];let Z=Array.isArray(_)?_:[];if(Z.includes(j))return Z;return[...Z,j]}function m$(_,$){let j=Array.isArray(_)?_:[];if(typeof $!=="string")return j;let Z=$.trim();if(!Z)return j;if(!j.includes(Z))return j;return j.filter((Y)=>Y!==Z)}function p$(_){if(!Array.isArray(_))return[];let $=[],j=new Set;for(let Z of _){if(typeof Z!=="string")continue;let Y=Z.trim();if(!Y||j.has(Y))continue;j.add(Y),$.push(Y)}return $}async function Pj(_){let{hashtag:$,setCurrentHashtag:j,setPosts:Z,loadPosts:Y}=_;j($),Z(null),await Y($)}async function Sj(_){let{setCurrentHashtag:$,setSearchQuery:j,setPosts:Z,loadPosts:Y}=_;$(null),j(null),Z(null),await Y()}async function wj(_){let{query:$,scope:j,currentChatJid:Z,currentRootChatJid:Y,searchPosts:q,setSearchScope:Q,setSearchQuery:N,setCurrentHashtag:K,setPosts:G,setHasMore:V}=_,X=typeof $==="string"?$.trim():"";if(!X)return;let U=j==="root"||j==="all"?j:"current";Q(U),N(X),K(null),G(null);try{let L=await q(X,50,0,Z,U,Y);G(Array.isArray(L?.results)?L.results:[]),V(!1)}catch(L){console.error("Failed to search:",L),G([])}}async function Rj(_){let{post:$,posts:j,currentChatJid:Z,deletePost:Y,preserveTimelineScrollTop:q,setPosts:Q,setRemovingPostIds:N,hasMoreRef:K,loadMoreRef:G,confirm:V=(W)=>window.confirm(W),showAlert:X=(W)=>alert(W),scheduleTimeout:U=(W,D)=>{setTimeout(W,D)}}=_;if(!$)return;let L=$.id,H=typeof $?.chat_jid==="string"&&$.chat_jid.trim()?$.chat_jid.trim():Z,O=j?.filter((W)=>W?.data?.thread_id===L&&W?.id!==L).length||0;if(O>0){if(!V(`Delete this message and its ${O} replies?`))return}let J=(W)=>{if(!W.length)return;N((D)=>{let E=new Set(D);return W.forEach((R)=>E.add(R)),E}),U(()=>{if(q(()=>{Q((D)=>D?D.filter((E)=>!W.includes(E.id)):D)}),N((D)=>{let E=new Set(D);return W.forEach((R)=>E.delete(R)),E}),K.current)G.current?.({preserveScroll:!0,preserveMode:"top"})},180)};try{let W=await Y(L,O>0,H);if(W?.ids?.length)J(W.ids)}catch(W){let D=W instanceof Error?W.message:String(W||"");if(O===0&&D.includes("Replies exist")){if(!V("Delete this message and its replies?"))return;let R=await Y(L,!0,H);if(R?.ids?.length)J(R.ids);return}console.error("Failed to delete post:",W),X(`Failed to delete message: ${D}`)}}async function uj(_){let{id:$,targetChatJid:j,currentChatJid:Z,getThread:Y,setPosts:q,getElementById:Q=(X)=>document.getElementById(X),scheduleRaf:N=(X)=>requestAnimationFrame(X),scheduleTimeout:K=(X,U)=>{setTimeout(X,U)}}=_,G=(X)=>{X.scrollIntoView({behavior:"smooth",block:"center"}),X.classList.add("post-highlight"),K(()=>X.classList.remove("post-highlight"),2000)},V=Q(`post-${$}`);if(V){G(V);return}try{let X=typeof j==="string"&&j.trim()?j.trim():Z,L=(await Y($,X))?.thread?.[0];if(!L)return;q((H)=>{if(!H)return[L];if(H.some((O)=>O.id===L.id))return H;return[...H,L]}),N(()=>{K(()=>{let H=Q(`post-${$}`);if(H)G(H)},50)})}catch(X){console.error("[scrollToMessage] Failed to fetch message",$,X)}}function sK(_){if(typeof _==="string"&&_.trim())return _.trim();return"Could not send your message."}function fj(_){let{setIntentToast:$,intentToastTimerRef:j,editorOpen:Z,openEditor:Y,resolvePane:q,tabStripActiveId:Q,setFileRefs:N,setMessageRefs:K,currentChatJid:G,getThread:V,setPosts:X}=_,U=C(()=>{if(j.current)clearTimeout(j.current),j.current=null;$(null)},[j,$]);v(()=>{return()=>{U()}},[U]);let L=C((z)=>{N((k)=>g$(k,z))},[N]),H=C((z)=>{N((k)=>m$(k,z))},[N]),O=C(()=>{N([])},[N]),J=C((z)=>{N(p$(z))},[N]),W=C((z,k=null,u="info",n=3000)=>{U(),$({title:z,detail:k||null,kind:u||"info"}),j.current=setTimeout(()=>{$((b)=>b?.title===z?null:b)},n)},[U,j,$]),D=C((z)=>{let k=yj(z,{editorOpen:Z,resolvePane:q});if(k.kind==="open"){Y(k.path);return}if(k.kind==="toast")W(k.title,k.detail,k.level)},[Z,Y,q,W]),E=C(()=>{let z=Q;if(z)L(z)},[L,Q]),R=C((z)=>{K((k)=>g$(k,z))},[K]),P=C(async(z,k=null)=>{await uj({id:z,targetChatJid:k,currentChatJid:G,getThread:V,setPosts:X})},[G,V,X]),m=C((z)=>{K((k)=>m$(k,z))},[K]),c=C(()=>{K([])},[K]),x=C((z)=>{K(p$(z))},[K]),M=C((z)=>{W("Compose failed",sK(z),"error",5000)},[W]);return{clearIntentToast:U,addFileRef:L,removeFileRef:H,clearFileRefs:O,setFileRefsFromCompose:J,showIntentToast:W,openFileFromPill:D,attachActiveEditorFile:E,addMessageRef:R,scrollToMessage:P,removeMessageRef:m,clearMessageRefs:c,setMessageRefsFromCompose:x,handleComposeSubmitError:M}}function aK(_){let{setExtensionStatusPanels:$,setPendingExtensionPanelActions:j}=_;$(new Map),j(new Set)}function vj(_){let{currentChatJid:$,currentRootChatJid:j,currentHashtag:Z,searchQuery:Y,searchScope:q,loadPosts:Q,searchPosts:N,setPosts:K,setHasMore:G,scrollToBottom:V,setExtensionStatusPanels:X,setPendingExtensionPanelActions:U,paneStateOwnerChatJidRef:L,chatPaneStateByChatRef:H,snapshotCurrentChatPaneState:O,restoreChatPaneState:J,dismissedQueueRowIdsRef:W,refreshQueueState:D,refreshAgentStatus:E,refreshContextUsage:R,viewStateRef:P,refreshTimeline:m,refreshModelAndQueueState:c,setFloatingWidget:x,dismissedLiveWidgetKeysRef:M}=_;v(()=>{aK({setExtensionStatusPanels:X,setPendingExtensionPanelActions:U})},[$,X,U]),v(()=>{let u=!1;return m9({currentHashtag:Z,searchQuery:Y,searchScope:q,currentChatJid:$,currentRootChatJid:j,loadPosts:Q,searchPosts:N,setPosts:K,setHasMore:G,scrollToBottom:V,isCancelled:()=>u}),()=>{u=!0}},[$,Z,Y,q,j,Q,V,N,G,K]),v(()=>{let u=L.current||$;H.current.set(u,O())},[H,$,L,O]),v(()=>{let u=L.current||$;if(u===$)return;H.current.set(u,O()),L.current=$,W.current.clear(),J(H.current.get($)||null),D(),E(),R()},[H,$,W,L,E,R,D,J,O]);let z=C(()=>{b9({viewStateRef:P,refreshTimeline:m,refreshModelAndQueueState:c})},[c,m,P]),k=C((u,n="streaming")=>{let b=new Date().toISOString();x((d)=>Xj(d,u,{fallbackStatus:n,currentChatJid:$,dismissedSessionKeys:M.current,updatedAt:b}))},[$,M,x]);return{refreshCurrentView:z,applyLiveGeneratedWidgetUpdate:k}}function bj({handleSseEvent:_,handleConnectionStatusChange:$,loadPosts:j,onWake:Z,chatJid:Y}){let q=T(_);q.current=_;let Q=T($);Q.current=$;let N=T(j);N.current=j;let K=T(Z);K.current=Z,v(()=>{let G=new L8((X,U)=>q.current(X,U),(X)=>Q.current(X),{chatJid:Y});G.connect();let V=()=>{G.reconnectIfNeeded();let X=typeof document<"u"?document:null;if(!X||X.visibilityState==="visible")K.current?.()};return window.addEventListener("focus",V),document.addEventListener("visibilitychange",V),()=>{window.removeEventListener("focus",V),document.removeEventListener("visibilitychange",V),G.disconnect()}},[Y])}function tK(_,$){return Number.isFinite($)?Number($):_?_.replace(/\r\n/g,`
`).split(`
`).length:0}function u8(_,$){return{text:_,totalLines:tK(_,$)}}function h$(_,$){return{text:$?.text||"",totalLines:_9(_),fullText:_}}function gj(_,$,j){return j==="replace"?$:`${_||""}${$}`}function mj(_,$){let j=_||"";if($?.reset)j="";if($?.delta)j+=String($.delta);return j}function pj(_,$){let j=_||"";if($?.reset)j="";if(typeof $?.delta==="string")j+=$.delta;return j}function l4(_,$){return Boolean(_)&&Boolean($)&&_!==$}function H5(_,$){return Boolean(_)&&!Boolean($)}function hj(_,$){return _||$||null}function f8(_){return _?.turn_id||_?.turnId||null}function J5(_){if(typeof _?.text!=="string"||!_.text)return null;let $=Number.isFinite(_?.totalLines)?Number(_.totalLines):Number.isFinite(_?.total_lines)?Number(_.total_lines):0;return{text:_.text,totalLines:$}}function c$(_,$){return typeof _?.text==="string"&&_.text.length>=$.length}function cj(_){switch(_){case"generated_widget_open":return{kind:"update",fallbackStatus:"loading",shouldAdoptTurn:!0};case"generated_widget_delta":return{kind:"update",fallbackStatus:"streaming",shouldAdoptTurn:!0};case"generated_widget_final":return{kind:"update",fallbackStatus:"final",shouldAdoptTurn:!0};case"generated_widget_error":return{kind:"update",fallbackStatus:"error",shouldAdoptTurn:!1};case"generated_widget_close":return{kind:"close",fallbackStatus:null,shouldAdoptTurn:!1};default:return{kind:null,fallbackStatus:null,shouldAdoptTurn:!1}}}function eK(_,$){return typeof _?.chat_jid==="string"&&_.chat_jid.trim()?_.chat_jid.trim():$}function lj(_,$,j){return{isStatusPanelWidgetEvent:_==="extension_ui_widget"&&$?.options?.surface==="status-panel",eventChatJid:eK($,j),panelKey:typeof $?.key==="string"?$.key:""}}function nj(_,$){if(_==="extension_ui_notify"&&typeof $?.message==="string")return{title:$.message,detail:null,kind:typeof $?.type==="string"&&$.type.trim()?$.type:"info"};if(_==="extension_ui_error"&&typeof $?.error==="string")return{title:"Extension UI error",detail:$.error,kind:"error",durationMs:5000};return null}var _G=new Set(["extension_ui_request","extension_ui_timeout","extension_ui_notify","extension_ui_status","extension_ui_working","extension_ui_widget","extension_ui_title","extension_ui_editor_text","extension_ui_error"]);function dj(_){return _G.has(String(_||"").trim())}function $G(_){let $=String(_||"").trim();if(!$.startsWith("extension_ui_"))return"piclaw-extension-ui";return`piclaw-extension-ui:${$.slice(13).replace(/_/g,"-")}`}function l$(_,$,j=globalThis.window){if(!j||typeof j.dispatchEvent!=="function"||typeof CustomEvent>"u")return!1;let Z={type:_,payload:$};return j.dispatchEvent(new CustomEvent("piclaw-extension-ui",{detail:Z})),j.dispatchEvent(new CustomEvent($G(_),{detail:Z})),!0}function ij(_,$,j){let Z=$?.turn_id,Y=$?.chat_jid,q=typeof Y==="string"&&Y.trim()?Y.trim():null,Q=_==="connected"||_==="workspace_update";return{turnId:Z,eventChatJid:q,isGlobalUiEvent:Q,isCurrentChatEvent:q?q===j:Q}}function rj(_){return _==="agent_draft_delta"||_==="agent_thought_delta"||_==="agent_draft"||_==="agent_thought"}function oj(_,$,j){let{currentChatJid:Z,updateAgentProfile:Y,updateUserProfile:q,currentTurnIdRef:Q,activeChatJidRef:N,pendingRequestRef:K,draftBufferRef:G,thoughtBufferRef:V,steerQueuedTurnIdRef:X,thoughtExpandedRef:U,draftExpandedRef:L,draftThrottleRef:H,thoughtThrottleRef:O,viewStateRef:J,followupQueueItemsRef:W,dismissedQueueRowIdsRef:D,scrollToBottomRef:E,hasMoreRef:R,loadMoreRef:P,lastAgentResponseRef:m,wasAgentActiveRef:c,setActiveTurn:x,applyLiveGeneratedWidgetUpdate:M,setFloatingWidget:z,clearLastActivityFlag:k,handleUiVersionDrift:u,setAgentStatus:n,setAgentDraft:b,setAgentPlan:d,setAgentThought:i,setPendingRequest:a,clearAgentRunState:j0,getAgentStatus:e,noteAgentActivity:N0,showLastActivity:U0,refreshTimeline:L0,refreshModelAndQueueState:C0,refreshActiveChatAgents:O0,refreshCurrentChatBranches:B0,notifyForFinalResponse:u0,setContextUsage:J0,refreshContextUsage:y0,refreshQueueState:b0,setFollowupQueueItems:F0,clearQueuedSteerStateIfStale:f0,setSteerQueuedTurnId:Q0,applyModelState:M0,getAgentContext:l0,setExtensionStatusPanels:i0,setPendingExtensionPanelActions:H1,refreshActiveEditorFromWorkspace:_1,showIntentToast:p0,removeStalledPost:j1,setPosts:e0,preserveTimelineScrollTop:r0}=j,{turnId:X0,isCurrentChatEvent:P0}=ij(_,$,Z);if(P0)Y($),q($);if(_==="ui_theme"){V7($);return}let a0=cj(_);if(a0.kind==="update"){if(!P0)return;if(a0.shouldAdoptTurn&&H5(X0,Q.current))x(X0);M($,a0.fallbackStatus||"streaming");return}if(a0.kind==="close"){if(!P0)return;z((p)=>Vj(p,$));return}if(_?.startsWith("agent_")&&!rj(_))k();if(_==="connected"){if(u($?.app_asset_version))return;n(null),b({text:"",totalLines:0}),d(""),i({text:"",totalLines:0}),a(null),K.current=null,j0();let p=Z;if(e(p).then((l)=>{if(N.current!==p)return;if(!l||l.status!=="active"||!l.data)return;let z0=l.data,E0=f8(z0);if(E0)x(E0);N0({clearSilence:!0}),U0(z0);let I0=J5(l.thought);if(I0)V.current=I0.text,i(I0);let K0=J5(l.draft);if(K0)G.current=K0.text,b(K0)}).catch((l)=>{console.warn("Failed to fetch agent status:",l)}),i_(J.current))L0();C0();return}if(_==="agent_status"){if(!P0){if($?.type==="done"||$?.type==="error")O0(),B0();return}if($.type==="done"||$.type==="error"){if(l4(X0,Q.current))return;if($.type==="done"){if(u0(X0||Q.current),i_(J.current))L0();if($.context_usage)J0($.context_usage)}if(y0(),c.current=!1,j0(),D.current.clear(),O0(),b0(),b({text:"",totalLines:0}),d(""),i({text:"",totalLines:0}),a(null),$.type==="error")n({type:"error",title:$.title||"Agent error"}),setTimeout(()=>n(null),8000);else n(null)}else{if(X0)x(X0);if(N0({running:!0,clearSilence:!0}),$.type==="thinking")G.current="",V.current="",b({text:"",totalLines:0}),d(""),i({text:"",totalLines:0});n((p)=>{if(p&&p.type===$.type&&p.title===$.title)return p;return $})}return}if(_==="agent_steer_queued"){if(!P0)return;if(l4(X0,Q.current))return;let p=hj(X0,Q.current);if(!p)return;X.current=p,Q0(p);return}if(_==="agent_followup_queued"){if(!P0)return;F0((p)=>W9(p,$)),b0();return}if(_==="agent_followup_consumed"){if(!P0)return;let p=F5(W.current,$);if(p)f0(p.remainingQueueCount),F0((l)=>I4(l,p.rowId).items);if(b0(),i_(J.current))L0();return}if(_==="agent_followup_removed"){if(!P0)return;let p=F5(W.current,$);if(p)D.current.add(p.rowId),f0(p.remainingQueueCount),F0((l)=>I4(l,p.rowId).items);b0();return}if(_==="agent_draft_delta"){if(!P0)return;if(l4(X0,Q.current))return;if(H5(X0,Q.current))x(X0);N0({running:!0,clearSilence:!0}),G.current=mj(G.current,$);let p=Date.now();if(!H.current||p-H.current>=100){H.current=p;let l=G.current;if(L.current)b((z0)=>h$(l,z0));else b(u8(l,null))}return}if(_==="agent_draft"){if(!P0)return;if(l4(X0,Q.current))return;if(H5(X0,Q.current))x(X0);N0({running:!0,clearSilence:!0});let p=$.text||"",l=$.mode||($.kind==="plan"?"replace":"append");if($.kind==="plan")d((z0)=>gj(z0,p,l));else if(!L.current)G.current=p,b(u8(p,$.total_lines));return}if(_==="agent_thought_delta"){if(!P0)return;if(l4(X0,Q.current))return;if(H5(X0,Q.current))x(X0);N0({running:!0,clearSilence:!0}),V.current=pj(V.current,$);let p=Date.now();if(U.current&&(!O.current||p-O.current>=100)){O.current=p;let l=V.current;i((z0)=>h$(l,z0))}return}if(_==="agent_thought"){if(!P0)return;if(l4(X0,Q.current))return;if(H5(X0,Q.current))x(X0);N0({running:!0,clearSilence:!0});let p=$.text||"";if(!U.current)V.current=p,i(u8(p,$.total_lines));return}if(_==="model_changed"){if(!P0)return;M0($);let p=Z;l0(p).then((l)=>{if(N.current!==p)return;if(l)J0(l)}).catch(()=>{});return}let o=lj(_,$,Z);if(o.isStatusPanelWidgetEvent){if(o.eventChatJid!==Z)return;if(!o.panelKey)return;if(i0((p)=>M9(p,$)),I9($))H1((p)=>y8(p,o.panelKey));l$(_,$);return}if(_==="workspace_update"){if(typeof window<"u")window.dispatchEvent(new CustomEvent("workspace-update",{detail:$}));_1($?.updates);return}if(dj(_)){if(!P0)return;l$(_,$);let p=nj(_,$);if(p)p0(p.title,p.detail,p.kind,p.durationMs);return}let Y0=i_(J.current);if(_==="agent_response"){if(!P0)return;j1(),m.current={post:$,turnId:Q.current}}if(y9(_,P0,Y0))e0((p)=>P9(p,$)),E.current?.();if(_==="interaction_updated"){if(!u$(P0,Y0))return;e0((p)=>S9(p,$))}if(_==="interaction_deleted"){if(!u$(P0,Y0))return;let p=$?.ids||[];if(p.length){if(r0(()=>{e0((l)=>w9(l,p))}),R.current)P.current?.({preserveScroll:!0,preserveMode:"top"})}}}function sj(_){let{serverVersion:$,currentAppAssetVersion:j,staleUiVersionRef:Z,staleUiReloadScheduledRef:Y,tabStoreHasUnsaved:q,isAgentRunningRef:Q,pendingRequestRef:N,showIntentToast:K}=_,G=typeof $==="string"&&$.trim()?$.trim():null;if(!G||!j||G===j)return!1;if(Z.current===G)return!0;Z.current=G;let V=typeof document<"u"?String(document.querySelector(".compose-box textarea")?.value||"").trim():"";if(!q()&&!V&&!Q.current&&!N.current&&!Y.current)return Y.current=!0,K("Updating UI…","Reloading to apply the latest interface after restart.","info",2500),window.setTimeout(()=>{try{window.location.reload()}catch{Y.current=!1}},350),!0;return K("New UI available","Reload this page to apply the latest interface update.","warning",8000),!0}function n$(_){let{currentHashtag:$,searchQuery:j,searchOpen:Z}=_||{};return!$&&!j&&!Z}function aj(_){let{status:$,setConnectionStatus:j,setAgentStatus:Z,setAgentDraft:Y,setAgentPlan:q,setAgentThought:Q,setPendingRequest:N,pendingRequestRef:K,clearAgentRunState:G,hasConnectedOnceRef:V,viewStateRef:X,refreshTimeline:U,refreshAgentStatus:L,refreshQueueState:H,refreshContextUsage:O}=_;if(j($),$!=="connected"){Z(null),Y({text:"",totalLines:0}),q(""),Q({text:"",totalLines:0}),N(null),K.current=null,G();return}if(!V.current){if(V.current=!0,n$(X.current))U();L(),H(),O();return}if(n$(X.current))U();L(),H(),O()}function tj(_){let{viewStateRef:$,isAgentActive:j,refreshTimeline:Z,refreshQueueState:Y,refreshAgentStatus:q,refreshContextUsage:Q,refreshAutoresearchStatus:N}=_,K=n$($.current);if(j){if(K)Z();Y(),q(),Q(),N();return}if(K)Z();q(),Q(),N()}var jG=["(display-mode: standalone)","(display-mode: minimal-ui)","(display-mode: fullscreen)"];function ej(_,$={}){let j=$.window??(typeof window<"u"?window:null),Z=$.navigator??(typeof navigator<"u"?navigator:null);if(!j||typeof _!=="function")return()=>{};let Y=()=>{_(Q4({window:j,navigator:Z}))};Y();let Q=jG.map((N)=>{try{return j.matchMedia?.(N)??null}catch{return null}}).filter(Boolean).map((N)=>{if(typeof N.addEventListener==="function")return N.addEventListener("change",Y),()=>N.removeEventListener("change",Y);if(typeof N.addListener==="function")return N.addListener(Y),()=>N.removeListener(Y);return()=>{}});return j.addEventListener?.("focus",Y),j.addEventListener?.("pageshow",Y),()=>{for(let N of Q)N();j.removeEventListener?.("focus",Y),j.removeEventListener?.("pageshow",Y)}}function _Z(_,$={}){let j=$.window??(typeof window<"u"?window:null),Z=$.document??(typeof document<"u"?document:null);if(!j||!Z||typeof _!=="function")return()=>{};let Y=()=>{if(Z.visibilityState&&Z.visibilityState!=="visible")return;_()};return j.addEventListener?.("focus",Y),j.addEventListener?.("pageshow",Y),Z.addEventListener?.("visibilitychange",Y),()=>{j.removeEventListener?.("focus",Y),j.removeEventListener?.("pageshow",Y),Z.removeEventListener?.("visibilitychange",Y)}}function ZG(_){return _?15000:60000}function $Z(_){let{currentChatJid:$,posts:j,scrollToMessage:Z,handleConnectionStatusChange:Y,loadPosts:q,refreshCurrentView:Q,updateAgentProfile:N,updateUserProfile:K,currentTurnIdRef:G,activeChatJidRef:V,pendingRequestRef:X,draftBufferRef:U,thoughtBufferRef:L,steerQueuedTurnIdRef:H,thoughtExpandedRef:O,draftExpandedRef:J,draftThrottleRef:W,thoughtThrottleRef:D,viewStateRef:E,followupQueueItemsRef:R,dismissedQueueRowIdsRef:P,scrollToBottomRef:m,hasMoreRef:c,loadMoreRef:x,lastAgentResponseRef:M,wasAgentActiveRef:z,setActiveTurn:k,applyLiveGeneratedWidgetUpdate:u,setFloatingWidget:n,clearLastActivityFlag:b,handleUiVersionDrift:d,setAgentStatus:i,setAgentDraft:a,setAgentPlan:j0,setAgentThought:e,setPendingRequest:N0,clearAgentRunState:U0,getAgentStatus:L0,noteAgentActivity:C0,showLastActivity:O0,refreshTimeline:B0,refreshModelAndQueueState:u0,refreshActiveChatAgents:J0,refreshCurrentChatBranches:y0,notifyForFinalResponse:b0,setContextUsage:F0,refreshContextUsage:f0,refreshQueueState:Q0,setFollowupQueueItems:M0,clearQueuedSteerStateIfStale:l0,setSteerQueuedTurnId:i0,applyModelState:H1,getAgentContext:_1,setExtensionStatusPanels:p0,setPendingExtensionPanelActions:j1,refreshActiveEditorFromWorkspace:e0,showIntentToast:r0,removeStalledPost:X0,setPosts:P0,preserveTimelineScrollTop:a0,finalizeStalledResponse:o,connectionStatus:Y0,agentStatus:p,refreshAgentStatus:l,refreshAutoresearchStatus:z0}=_,E0=C((K0,x0)=>{oj(K0,x0,{currentChatJid:$,updateAgentProfile:N,updateUserProfile:K,currentTurnIdRef:G,activeChatJidRef:V,pendingRequestRef:X,draftBufferRef:U,thoughtBufferRef:L,steerQueuedTurnIdRef:H,thoughtExpandedRef:O,draftExpandedRef:J,draftThrottleRef:W,thoughtThrottleRef:D,viewStateRef:E,followupQueueItemsRef:R,dismissedQueueRowIdsRef:P,scrollToBottomRef:m,hasMoreRef:c,loadMoreRef:x,lastAgentResponseRef:M,wasAgentActiveRef:z,setActiveTurn:k,applyLiveGeneratedWidgetUpdate:u,setFloatingWidget:n,clearLastActivityFlag:b,handleUiVersionDrift:d,setAgentStatus:i,setAgentDraft:a,setAgentPlan:j0,setAgentThought:e,setPendingRequest:N0,clearAgentRunState:U0,getAgentStatus:L0,noteAgentActivity:C0,showLastActivity:O0,refreshTimeline:B0,refreshModelAndQueueState:u0,refreshActiveChatAgents:J0,refreshCurrentChatBranches:y0,notifyForFinalResponse:b0,setContextUsage:F0,refreshContextUsage:f0,refreshQueueState:Q0,setFollowupQueueItems:M0,clearQueuedSteerStateIfStale:l0,setSteerQueuedTurnId:i0,applyModelState:H1,getAgentContext:_1,setExtensionStatusPanels:p0,setPendingExtensionPanelActions:j1,refreshActiveEditorFromWorkspace:e0,showIntentToast:r0,removeStalledPost:X0,setPosts:P0,preserveTimelineScrollTop:a0})},[V,u,H1,U0,b,l0,$,G,P,U,J,W,R,_1,L0,d,c,M,x,C0,b0,X,a0,J0,e0,f0,y0,u0,Q0,B0,X0,m,k,a,j0,i,e,F0,p0,n,M0,j1,N0,P0,i0,r0,O0,H,L,O,D,N,K,E,z]);v(()=>{if(typeof window>"u")return;let K0=window.__PICLAW_TEST_API||{};return K0.emit=E0,K0.reset=()=>{X0(),U0(),i(null),a({text:"",totalLines:0}),j0(""),e({text:"",totalLines:0}),N0(null)},K0.finalize=()=>o(),window.__PICLAW_TEST_API=K0,()=>{if(window.__PICLAW_TEST_API===K0)window.__PICLAW_TEST_API=void 0}},[U0,o,E0,X0,a,j0,i,e,N0]),bj({handleSseEvent:E0,handleConnectionStatusChange:Y,loadPosts:q,onWake:Q,chatJid:$}),v(()=>{if(!j||j.length===0)return;let K0=location.hash;if(!K0||!K0.startsWith("#msg-"))return;let x0=K0.slice(5);Z(x0),history.replaceState(null,"",location.pathname+location.search)},[j,Z]);let I0=p!==null;v(()=>{if(Y0!=="connected")return;let K0=ZG(I0),x0=setInterval(()=>{tj({viewStateRef:E,isAgentActive:I0,refreshTimeline:B0,refreshQueueState:Q0,refreshAgentStatus:l,refreshContextUsage:f0,refreshAutoresearchStatus:z0})},K0);return()=>clearInterval(x0)},[Y0,I0,l,z0,f0,Q0,B0,E]),v(()=>{return _Z(()=>{l(),f0(),Q0(),z0()})},[l,z0,f0,Q0])}function jZ(_={}){return Q4(_)&&z8(_)}function YG(_={}){let $=_.window??(typeof window<"u"?window:null),j=Number($?.visualViewport?.height||0);if(Number.isFinite(j)&&j>0)return Math.round(j);let Z=Number($?.innerHeight||0);if(Number.isFinite(Z)&&Z>0)return Math.round(Z);return null}function qG(_={},$={}){if(!jZ(_))return null;let j=_.window??(typeof window<"u"?window:null),Z=_.document??(typeof document<"u"?document:null);if(!j||!Z?.documentElement)return null;let Y=YG({window:j});if(Y&&Y>0)Z.documentElement.style.setProperty("--app-height",`${Y}px`);if($.resetScroll===!0){try{if(typeof j.scrollTo==="function")j.scrollTo(0,0)}catch{}try{if(Z.scrollingElement)Z.scrollingElement.scrollTop=0,Z.scrollingElement.scrollLeft=0;if(Z.documentElement)Z.documentElement.scrollTop=0,Z.documentElement.scrollLeft=0;if(Z.body)Z.body.scrollTop=0,Z.body.scrollLeft=0}catch{}}return Y}function ZZ(_={}){if(!jZ(_))return()=>{};let $=_.window??(typeof window<"u"?window:null),j=_.document??(typeof document<"u"?document:null);if(!$||!j)return()=>{};let Z=0,Y=new Set,q=()=>{if(Z)$.cancelAnimationFrame?.(Z),Z=0;for(let X of Y)$.clearTimeout?.(X);Y.clear()},Q=()=>{Z=0,qG({window:$,document:j})},N=()=>{if(Z)$.cancelAnimationFrame?.(Z);Z=$.requestAnimationFrame?.(Q)??0},K=()=>{N();for(let X of[80,220,420]){let U=$.setTimeout?.(()=>{Y.delete(U),N()},X);if(U!=null)Y.add(U)}},G=()=>{if(j.visibilityState&&j.visibilityState!=="visible")return;K()},V=$.visualViewport;return K(),$.addEventListener("focus",K),$.addEventListener("pageshow",K),$.addEventListener("resize",K),$.addEventListener("orientationchange",K),j.addEventListener("visibilitychange",G),j.addEventListener("focusin",K,!0),V?.addEventListener?.("resize",K),V?.addEventListener?.("scroll",K),()=>{q(),$.removeEventListener("focus",K),$.removeEventListener("pageshow",K),$.removeEventListener("resize",K),$.removeEventListener("orientationchange",K),j.removeEventListener("visibilitychange",G),j.removeEventListener("focusin",K,!0),V?.removeEventListener?.("resize",K),V?.removeEventListener?.("scroll",K)}}function QG(_,$){if(typeof window<"u")console.warn(`[app] API export missing: ${_}. Using fallback behavior.`);return async()=>$}function r1(_,$,j){let Z=_?.[$];return typeof Z==="function"?Z:QG($,j)}function YZ(_,$={}){let j=$.document??(typeof document<"u"?document:null);if(!j)return()=>{};let Z=_?.openTab,Y=_?.popOutPane,q=(K)=>{let G=K?.detail?.path,V=typeof K?.detail?.label==="string"&&K.detail.label.trim()?K.detail.label.trim():void 0;if(G)Z?.(G,V)},Q=(K)=>{let G=K?.detail?.path,V=typeof K?.detail?.label==="string"&&K.detail.label.trim()?K.detail.label.trim():void 0;if(G)Y?.(G,V)},N=["office-viewer:open-tab","drawio:open-tab","csv-viewer:open-tab","pdf-viewer:open-tab","image-viewer:open-tab","video-viewer:open-tab","vnc:open-tab"];return N.forEach((K)=>j.addEventListener(K,q)),j.addEventListener("pane:popout",Q),()=>{N.forEach((K)=>j.removeEventListener(K,q)),j.removeEventListener("pane:popout",Q)}}function qZ(_,$={}){let j=$.document??(typeof document<"u"?document:null);if(!j)return()=>{};let Z=(Y)=>{if(Y?.ctrlKey&&Y.key==="`")Y.preventDefault?.(),_?.()};return j.addEventListener("keydown",Z),()=>j.removeEventListener("keydown",Z)}function QZ(_,$={}){let j=$.document??(typeof document<"u"?document:null);if(!j)return()=>{};let Z=_?.toggleZenMode,Y=_?.exitZenMode,q=typeof _?.isZenModeActive==="function"?_.isZenModeActive:()=>Boolean(_?.zenMode),Q=(N)=>{if(N?.ctrlKey&&N.shiftKey&&(N.key==="Z"||N.key==="z")){N.preventDefault?.(),Z?.();return}if(N?.key==="Escape"&&q())N.preventDefault?.(),Y?.()};return j.addEventListener("keydown",Q),()=>j.removeEventListener("keydown",Q)}function NZ(_,$){let j=Array.isArray(_)?_:[];return j.find((Z)=>Z?.id===$)||j[0]||null}function KZ(_,$){if(!$||!_||typeof _.get!=="function")return null;return _.get($)||null}function GZ(_,$,j){return _||$?.label||j||"Pane"}function XZ(_,$,j){let Z=Array.isArray(_)?_.length:0,Y=Boolean(j&&$?.has?.(j));return Z>1||Y}function VZ(_,$){let j=typeof _==="string"?_:"";return j===$||j.startsWith(`${$}/`)}function UZ(_,$,j,Z){return _===$&&!j||Z}function LZ(_,$,j,Z,Y){return _||!$&&(j||Z&&Y)}function v8(_){let $=d$(_);return $?`@${$}`:""}function d$(_){return String(_||"").trim().toLowerCase().replace(/[^a-z0-9_-]+/g,"-").replace(/^-+|-+$/g,"").replace(/-{2,}/g,"-")}function b8(_,$=""){let j=String(_||""),Z=d$(j),Y=d$($);if(!j.trim())return{normalized:Z,handle:"",canSubmit:!1,kind:"error",message:"Enter a branch handle."};if(!Z)return{normalized:Z,handle:"",canSubmit:!1,kind:"error",message:"Handle must contain at least one letter or number."};let q=`@${Z}`;if(Z===Y)return{normalized:Z,handle:q,canSubmit:!1,kind:"info",message:`Already using ${q}.`};if(Z!==j.trim())return{normalized:Z,handle:q,canSubmit:!0,kind:"info",message:`Will save as ${q}. Letters, numbers, - and _ are allowed; leading @ is optional.`};return{normalized:Z,handle:q,canSubmit:!0,kind:"success",message:`Saving as ${q}.`}}function WZ(_,$){let j=typeof _?.agent_name==="string"&&_.agent_name.trim()?v8(_.agent_name):String($||"").trim(),Z=typeof _?.chat_jid==="string"&&_.chat_jid.trim()?_.chat_jid.trim():String($||"").trim();return`${j} — ${Z} • current branch`}function NG(_,$={}){let j=[],Z=typeof $.currentChatJid==="string"?$.currentChatJid.trim():"",Y=typeof _?.chat_jid==="string"?_.chat_jid.trim():"";if(Z&&Y===Z)j.push("current");if(_?.archived_at)j.push("archived");else if(_?.is_active)j.push("active");return j}function g8(_,$={}){let j=v8(_?.agent_name)||String(_?.chat_jid||"").trim(),Z=typeof _?.chat_jid==="string"&&_.chat_jid.trim()?_.chat_jid.trim():"unknown-chat",Y=NG(_,$);return Y.length>0?`${j} — ${Z} • ${Y.join(" • ")}`:`${j} — ${Z}`}function BZ(_,$,j){let Z=v8(_),Y=v8($),q=String(j||"").trim();if(Z&&Y&&Z!==Y)return`Restored archived ${Z} as ${Y} because ${Z} is already in use.`;if(Y)return`Restored ${Y}.`;if(Z)return`Restored ${Z}.`;return`Restored ${q||"branch"}.`}var KG="piclaw_btw_session",FZ=900,zZ="__piclawRenameBranchFormLock__";function GG(){try{return import.meta.url}catch{return null}}function i$(_){let $=typeof _==="string"?_.trim().toLowerCase():"";return $==="1"||$==="true"||$==="yes"}function m8(_,$,j=""){let Z=_?.get?.($);return Z&&Z.trim()?Z.trim():j}function HZ(_={}){let $=_.importMetaUrl===void 0?GG():_.importMetaUrl,j=_.document===void 0?typeof document<"u"?document:null:_.document,Z=_.origin===void 0?typeof window<"u"?window.location.origin:"http://localhost":_.origin||"http://localhost";try{let Y=$?new URL($).searchParams.get("v"):null;if(Y&&Y.trim())return Y.trim()}catch{}try{let q=Array.from(j?.querySelectorAll?.('script[type="module"][src]')||[]).find((K)=>String(K?.getAttribute?.("src")||"").includes("/static/dist/app.bundle.js"))?.getAttribute?.("src")||"";if(!q)return null;let N=new URL(q,Z).searchParams.get("v");return N&&N.trim()?N.trim():null}catch{return null}}function r$(_={}){let $=_.window===void 0?typeof window<"u"?window:null:_.window;if(!$)return null;let j=$[zZ];if(j&&typeof j==="object")return j;let Z={inFlight:!1,cooldownUntil:0};return $[zZ]=Z,Z}function JZ(_){if(_==="root")return"Branch family";if(_==="all")return"All chats";return"Current branch"}function OZ(_={}){let $=typeof _.readItem==="function"?_.readItem:L_,j=_.storageKey||KG,Z=$(j);if(!Z)return null;try{let Y=JSON.parse(Z);if(!Y||typeof Y!=="object")return null;let q=typeof Y.question==="string"?Y.question:"",Q=typeof Y.answer==="string"?Y.answer:"",N=typeof Y.thinking==="string"?Y.thinking:"",K=typeof Y.error==="string"&&Y.error.trim()?Y.error:null,G=Y.status==="running"?"error":Y.status==="success"||Y.status==="error"?Y.status:"success";return{question:q,answer:Q,thinking:N,error:G==="error"?K||"BTW stream interrupted. You can retry.":K,model:null,status:G}}catch{return null}}function DZ(_,$={}){let j=$.defaultChatJid||"web:default",Z=m8(_,"chat_jid",j),Y=i$(_?.get?.("chat_only")||_?.get?.("chat-only")),q=i$(_?.get?.("pane_popout")),Q=m8(_,"pane_path"),N=m8(_,"pane_label"),K=i$(_?.get?.("branch_loader")),G=m8(_,"branch_source_chat_jid",Z);return{currentChatJid:Z,chatOnlyMode:Y,panePopoutMode:q,panePopoutPath:Q,panePopoutLabel:N,branchLoaderMode:K,branchLoaderSourceChatJid:G}}function AZ(_){let{hasWindow:$=typeof window<"u",currentBranchRecord:j,renameBranchInFlight:Z,renameBranchLockUntil:Y,getFormLock:q,setRenameBranchNameDraft:Q,setIsRenameBranchFormOpen:N,now:K=Date.now()}=_;if(!$||!j?.chat_jid)return!1;let G=q?.()||null;if(!G)return!1;if(Z||K<Number(Y||0)||G.inFlight||K<Number(G.cooldownUntil||0))return!1;return Q?.(j.agent_name||""),N?.(!0),!0}function EZ(_){let{setIsRenameBranchFormOpen:$,setRenameBranchNameDraft:j}=_;$?.(!1),j?.("")}async function kZ(_){let{hasWindow:$=typeof window<"u",currentBranchRecord:j,nextName:Z,openRenameForm:Y,renameBranchInFlightRef:q,renameBranchLockUntilRef:Q,getFormLock:N,setIsRenamingBranch:K,renameChatBranch:G,refreshActiveChatAgents:V,refreshCurrentChatBranches:X,showIntentToast:U,closeRenameForm:L,now:H=()=>Date.now()}=_;if(!$||!j?.chat_jid)return!1;if(typeof Z!=="string")return Y?.(),!1;let O=H(),J=N?.()||null;if(!J)return!1;if(q.current||O<Number(Q.current||0)||J.inFlight||O<Number(J.cooldownUntil||0))return!1;q.current=!0,J.inFlight=!0,K?.(!0);try{let W=j.agent_name||"",D=b8(Z,W);if(!D.canSubmit)return U?.("Could not rename branch",D.message||"Enter a valid branch handle.","warning",4000),!1;let E=D.normalized||W,R=await G(j.chat_jid,{agentName:E});await Promise.allSettled([V?.(),X?.()]);let P=R?.branch?.agent_name||E||W;return U?.("Branch renamed",`@${P}`,"info",3500),L?.(),!0}catch(W){let D=W instanceof Error?W.message:String(W||"Could not rename branch."),E=/already in use/i.test(D||"")?`${D} Switch to or restore that existing session from the session manager.`:D;return U?.("Could not rename branch",E||"Could not rename branch.","warning",5000),!1}finally{q.current=!1,K?.(!1);let W=H()+FZ;Q.current=W;let D=N?.()||null;if(D)D.inFlight=!1,D.cooldownUntil=W}}async function MZ(_){let{hasWindow:$=typeof window<"u",targetChatJid:j=null,currentChatJid:Z,currentBranchRecord:Y,currentChatBranches:q=[],activeChatAgents:Q=[],pruneChatBranch:N,refreshActiveChatAgents:K,refreshCurrentChatBranches:G,showIntentToast:V,baseHref:X,chatOnlyMode:U,navigate:L,confirm:H=(m)=>window.confirm(m)}=_;if(!$)return!1;let O=typeof j==="string"&&j.trim()?j.trim():"",J=typeof Z==="string"&&Z.trim()?Z.trim():"",W=O||Y?.chat_jid||J;if(!W)return V?.("Could not prune branch","No active session is selected yet.","warning",4000),!1;let D=(Y?.chat_jid===W?Y:null)||q.find((m)=>m?.chat_jid===W)||Q.find((m)=>m?.chat_jid===W)||null;if(D?.chat_jid===(D?.root_chat_jid||D?.chat_jid))return V?.("Cannot prune branch","The root chat branch cannot be pruned.","warning",4000),!1;let R=`@${D?.agent_name||W}${D?.chat_jid?` — ${D.chat_jid}`:""}`;if(!H(`Prune ${R}?

This archives the branch agent and removes it from the branch picker. Chat history is preserved.`))return!1;try{await N(W),await Promise.allSettled([K?.(),G?.()]);let m=D?.root_chat_jid||"web:default";V?.("Branch pruned",`${R} has been archived.`,"info",3000);let c=N4(X,m,{chatOnly:U});return L?.(c),!0}catch(m){let c=m instanceof Error?m.message:String(m||"Could not prune branch.");return V?.("Could not prune branch",c||"Could not prune branch.","warning",5000),!1}}async function IZ(_){let{targetChatJid:$,restoreChatBranch:j,currentChatBranches:Z=[],refreshActiveChatAgents:Y,refreshCurrentChatBranches:q,showIntentToast:Q,baseHref:N,chatOnlyMode:K,navigate:G}=_,V=typeof $==="string"?$.trim():"";if(!V||typeof j!=="function")return!1;try{let X=Z.find((W)=>W?.chat_jid===V)||null,U=await j(V);await Promise.allSettled([Y?.(),q?.()]);let L=U?.branch,H=typeof L?.chat_jid==="string"&&L.chat_jid.trim()?L.chat_jid.trim():V,O=BZ(X?.agent_name,L?.agent_name,H);Q?.("Branch restored",O,"info",4200);let J=N4(N,H,{chatOnly:K});return G?.(J),!0}catch(X){let U=X instanceof Error?X.message:String(X||"Could not restore branch.");return Q?.("Could not restore branch",U||"Could not restore branch.","warning",5000),!1}}async function xZ(_){let{branchLoaderSourceChatJid:$,forkChatBranch:j,setBranchLoaderState:Z,navigate:Y,baseHref:q,isCancelled:Q=()=>!1}=_;try{Z?.({status:"running",message:"Preparing a new chat branch…"});let N=await j($);if(Q())return!1;let K=N?.branch,G=typeof K?.chat_jid==="string"&&K.chat_jid.trim()?K.chat_jid.trim():null;if(!G)throw Error("Branch fork did not return a chat id.");let V=N4(q,G,{chatOnly:!0});return Y?.(V,{replace:!0}),!0}catch(N){if(Q())return!1;return Z?.({status:"error",message:S5(N)}),!1}}function TZ(_){let{hasWindow:$=typeof window<"u",nextChatJid:j,currentChatJid:Z,chatOnlyMode:Y,currentHref:q,navigate:Q}=_;if(!$)return!1;let N=typeof j==="string"?j.trim():"";if(!N||N===Z)return!1;let K=N4(q,N,{chatOnly:Y});return Q?.(K),!0}async function CZ(_){let{panePath:$,tabStripActiveId:j,editorInstanceRef:Z,dockInstanceRef:Y,terminalTabPath:q}=_,N=(typeof j==="string"?j.trim():"")===$?Z.current:$===q?Y.current:null;if(typeof N?.preparePopoutTransfer!=="function")return null;return await N.preparePopoutTransfer()}function yZ(_){let{panePath:$,terminalTabPath:j,dockVisible:Z,resolveTab:Y,closeTab:q,setDockVisible:Q}=_,N=Y($);if(N&&!N.dirty){q($);return}if($===j&&Z)Q(!1)}function PZ(_){let{hasWindow:$=typeof window<"u",editorOpen:j,shellElement:Z,editorWidthRef:Y,dockHeightRef:q,sidebarWidthRef:Q,readStoredNumber:N}=_;if(!j||!$||!Z)return;if(!Y.current){let K=N("editorWidth",null),G=Q.current||280;Y.current=Number.isFinite(K)?Number(K):G}if(Z.style.setProperty("--editor-width",`${Y.current}px`),!q.current){let K=N("dockHeight",null);q.current=Number.isFinite(K)?Number(K):200}Z.style.setProperty("--dock-height",`${q.current}px`)}async function SZ(_){let{currentChatJid:$,chatOnlyMode:j,forkChatBranch:Z,refreshActiveChatAgents:Y,refreshCurrentChatBranches:q,showIntentToast:Q,navigate:N,baseHref:K}=_;try{let V=(await Z($))?.branch,X=typeof V?.chat_jid==="string"&&V.chat_jid.trim()?V.chat_jid.trim():null;if(!X)throw Error("Branch fork did not return a chat id.");await Promise.allSettled([Y?.(),q?.()]);let U=V?.agent_name?`@${V.agent_name}`:X;Q?.("New branch created",`Switched to ${U}.`,"info",2500);let L=N4(K,X,{chatOnly:j});return N?.(L),!0}catch(G){return Q?.("Could not create branch",S5(G),"warning",5000),!1}}async function wZ(_){let{hasWindow:$=typeof window<"u",isWebAppMode:j=!1,path:Z,label:Y,showIntentToast:q,resolveSourceTransfer:Q,closeSourcePaneIfTransferred:N,currentChatJid:K,baseHref:G}=_;if(!$||j)return!1;let V=typeof Z==="string"&&Z.trim()?Z.trim():"";if(!V)return!1;let X=F2(V);if(!X)return q?.("Could not open pane window","Opening pane windows is unavailable in standalone webapp mode.","warning",5000),!1;let U=p6(X);if(!U)return q?.("Could not open pane window","The browser blocked opening a new tab or window.","warning",5000),!1;h6(U,{title:typeof Y==="string"&&Y.trim()?`Opening ${Y}…`:"Opening pane…",message:"Preparing a standalone pane window. This should only take a moment."});try{let L=await Q?.(V),H=z2(G,V,{label:typeof Y==="string"&&Y.trim()?Y.trim():void 0,chatJid:K,params:L});return c6(U,H),N?.(V),!0}catch(L){l6(U);let H=L instanceof Error?L.message:"Could not transfer pane state to the new window.";return q?.("Could not open pane window",H,"warning",5000),!1}}async function RZ(_){let{hasWindow:$=typeof window<"u",isWebAppMode:j=!1,currentChatJid:Z,currentRootChatJid:Y,forkChatBranch:q,getActiveChatAgents:Q,getChatBranches:N,setActiveChatAgents:K,setCurrentChatBranches:G,showIntentToast:V,baseHref:X}=_;if(!$||j)return!1;let U=W2(Z);if(!U)return V?.("Could not open branch window","Opening branch windows is unavailable in standalone webapp mode.","warning",5000),!1;if(U.mode==="tab"){let H=B2(X,Z,{chatOnly:!0});if(!window.open(H,U.target))return V?.("Could not open branch window","The browser blocked opening a new tab or window.","warning",5000),!1;return!0}let L=p6(U);if(!L)return V?.("Could not open branch window","The browser blocked opening a new tab or window.","warning",5000),!1;h6(L,{title:"Opening branch…",message:"Preparing a new chat branch. This should only take a moment."});try{let O=(await q(Z))?.branch,J=typeof O?.chat_jid==="string"&&O.chat_jid.trim()?O.chat_jid.trim():null;if(!J)throw Error("Branch fork did not return a chat id.");try{let D=await Q?.();K?.(Array.isArray(D?.chats)?D.chats:[])}catch{}try{let D=await N?.(Y);G?.(Array.isArray(D?.chats)?D.chats:[])}catch{}let W=N4(X,J,{chatOnly:!0});return c6(L,W),!0}catch(H){return l6(L),V?.("Could not open branch window",S5(H),"error",5000),!1}}function uZ(_){_(($)=>!$)}function fZ(_){let{nextChatJid:$,currentChatJid:j,chatOnlyMode:Z,navigate:Y,hasWindow:q=typeof window<"u",currentHref:Q=q?window.location.href:"http://localhost/"}=_;return TZ({hasWindow:q,nextChatJid:$,currentChatJid:j,chatOnlyMode:Z,currentHref:Q,navigate:Y})}function vZ(_){let{currentBranchRecord:$,renameBranchInFlight:j,renameBranchLockUntil:Z,getFormLock:Y,setRenameBranchNameDraft:q,setIsRenameBranchFormOpen:Q,hasWindow:N=typeof window<"u"}=_;return AZ({hasWindow:N,currentBranchRecord:$,renameBranchInFlight:j,renameBranchLockUntil:Z,getFormLock:Y,setRenameBranchNameDraft:q,setIsRenameBranchFormOpen:Q})}function bZ(_){EZ(_)}async function gZ(_){let{hasWindow:$=typeof window<"u",...j}=_;await kZ({hasWindow:$,...j})}async function mZ(_){let{hasWindow:$=typeof window<"u",baseHref:j=$?window.location.href:"http://localhost/",...Z}=_;await MZ({hasWindow:$,baseHref:j,...Z})}async function pZ(_){let{hasWindow:$=typeof window<"u",baseHref:j=$?window.location.href:"http://localhost/",...Z}=_;await IZ({baseHref:j,...Z})}function hZ(_){let{branchLoaderMode:$,branchLoaderSourceChatJid:j,forkChatBranch:Z,setBranchLoaderState:Y,navigate:q,hasWindow:Q=typeof window<"u",baseHref:N=Q?window.location.href:"http://localhost/",runBranchLoaderImpl:K=xZ}=_;if(!$||!Q)return;let G=!1;return K({branchLoaderSourceChatJid:j,forkChatBranch:Z,setBranchLoaderState:Y,navigate:q,baseHref:N,isCancelled:()=>G}),()=>{G=!0}}async function cZ(_){let{hasWindow:$=typeof window<"u",baseHref:j=$?window.location.href:"http://localhost/",...Z}=_;await SZ({baseHref:j,...Z})}async function lZ(_){let{isWebAppMode:$,path:j,label:Z,showIntentToast:Y,currentChatJid:q,tabStripActiveId:Q,editorInstanceRef:N,dockInstanceRef:K,terminalTabPath:G,dockVisible:V,resolveTab:X,closeTab:U,setDockVisible:L,hasWindow:H=typeof window<"u",baseHref:O=H?window.location.href:"http://localhost/"}=_;await wZ({hasWindow:H,isWebAppMode:$,path:j,label:Z,showIntentToast:Y,currentChatJid:q,baseHref:O,resolveSourceTransfer:(J)=>CZ({panePath:J,tabStripActiveId:Q,editorInstanceRef:N,dockInstanceRef:K,terminalTabPath:G}),closeSourcePaneIfTransferred:(J)=>{yZ({panePath:J,terminalTabPath:G,dockVisible:V,resolveTab:X,closeTab:U,setDockVisible:L})}})}function nZ(_){let{openEditor:$,popOutPane:j,watchPaneOpenEventsImpl:Z=YZ}=_;return Z({openTab:(Y,q)=>$(Y,q?{label:q}:void 0),popOutPane:(Y,q)=>{j(Y,q)}})}async function dZ(_){let{hasWindow:$=typeof window<"u",baseHref:j=$?window.location.href:"http://localhost/",...Z}=_;await RZ({hasWindow:$,baseHref:j,...Z})}function iZ(_){let{hasWindow:$=typeof window<"u",...j}=_;PZ({hasWindow:$,...j})}function p8(_){return _?{..._}:{text:"",totalLines:0}}function rZ(_){return Array.isArray(_)?_.map(($)=>({...$})):[]}function XG(_){return{inFlight:Boolean(_?.inFlight),lastAttemptAt:Number(_?.lastAttemptAt||0),turnId:typeof _?.turnId==="string"?_.turnId:null}}function VG(){return{agentStatus:null,agentDraft:{text:"",totalLines:0},agentPlan:"",agentThought:{text:"",totalLines:0},pendingRequest:null,currentTurnId:null,steerQueuedTurnId:null,isAgentTurnActive:!1,followupQueueItems:[],activeModel:null,activeThinkingLevel:null,supportsThinking:!1,activeModelUsage:null,contextUsage:null,isAgentRunning:!1,wasAgentActive:!1,draftBuffer:"",thoughtBuffer:"",lastAgentEvent:null,lastSilenceNotice:0,lastAgentResponse:null,currentTurnIdRef:null,steerQueuedTurnIdRef:null,thoughtExpanded:!1,draftExpanded:!1,agentStatusRef:null,silentRecovery:{inFlight:!1,lastAttemptAt:0,turnId:null}}}function oZ(_){return{agentStatus:_.agentStatus,agentDraft:p8(_.agentDraft),agentPlan:_.agentPlan||"",agentThought:p8(_.agentThought),pendingRequest:_.pendingRequest,currentTurnId:_.currentTurnId||null,steerQueuedTurnId:_.steerQueuedTurnId||null,isAgentTurnActive:Boolean(_.isAgentTurnActive),followupQueueItems:rZ(_.followupQueueItems),activeModel:_.activeModel,activeThinkingLevel:_.activeThinkingLevel,supportsThinking:Boolean(_.supportsThinking),activeModelUsage:_.activeModelUsage,contextUsage:_.contextUsage,isAgentRunning:Boolean(_.isAgentRunning),wasAgentActive:Boolean(_.wasAgentActive),draftBuffer:_.draftBuffer||"",thoughtBuffer:_.thoughtBuffer||"",lastAgentEvent:_.lastAgentEvent||null,lastSilenceNotice:Number(_.lastSilenceNotice||0),lastAgentResponse:_.lastAgentResponse||null,currentTurnIdRef:_.currentTurnIdRef||null,steerQueuedTurnIdRef:_.steerQueuedTurnIdRef||null,thoughtExpanded:Boolean(_.thoughtExpanded),draftExpanded:Boolean(_.draftExpanded),agentStatusRef:_.agentStatusRef||null,silentRecovery:XG(_.silentRecovery)}}function sZ(_){let $=_.snapshot||VG(),{refs:j,setters:Z}=_;return _.clearLastActivityTimer?.(),j.isAgentRunningRef.current=Boolean($.isAgentRunning),j.wasAgentActiveRef.current=Boolean($.wasAgentActive),Z.setIsAgentTurnActive(Boolean($.isAgentTurnActive)),j.lastAgentEventRef.current=$.lastAgentEvent||null,j.lastSilenceNoticeRef.current=Number($.lastSilenceNotice||0),j.draftBufferRef.current=$.draftBuffer||"",j.thoughtBufferRef.current=$.thoughtBuffer||"",j.pendingRequestRef.current=$.pendingRequest||null,j.lastAgentResponseRef.current=$.lastAgentResponse||null,j.currentTurnIdRef.current=$.currentTurnIdRef||null,j.steerQueuedTurnIdRef.current=$.steerQueuedTurnIdRef||null,j.agentStatusRef.current=$.agentStatusRef||null,j.silentRecoveryRef.current=$.silentRecovery||{inFlight:!1,lastAttemptAt:0,turnId:null},j.thoughtExpandedRef.current=Boolean($.thoughtExpanded),j.draftExpandedRef.current=Boolean($.draftExpanded),Z.setAgentStatus($.agentStatus||null),Z.setAgentDraft(p8($.agentDraft)),Z.setAgentPlan($.agentPlan||""),Z.setAgentThought(p8($.agentThought)),Z.setPendingRequest($.pendingRequest||null),Z.setCurrentTurnId($.currentTurnId||null),Z.setSteerQueuedTurnId($.steerQueuedTurnId||null),Z.setFollowupQueueItems(rZ($.followupQueueItems)),Z.setActiveModel($.activeModel||null),Z.setActiveThinkingLevel($.activeThinkingLevel||null),Z.setSupportsThinking(Boolean($.supportsThinking)),Z.setActiveModelUsage($.activeModelUsage??null),Z.setContextUsage($.contextUsage??null),$}var UG=400,o$=60,aZ=220,s$="mdPreviewHeight";function LG(){try{let _=localStorage.getItem(s$),$=_?Number(_):NaN;return Number.isFinite($)&&$>=o$?$:aZ}catch{return aZ}}function h8({getContent:_,path:$,onClose:j}){let[Z,Y]=g(""),[q,Q]=g(LG),N=T(null),K=T(null),G=T(""),V=T(_);return V.current=_,v(()=>{let L=()=>{let O=V.current?.()||"";if(O===G.current)return;G.current=O;try{let J=W_(O,null,{sanitize:!1});Y(J)}catch{Y('<p style="color:var(--text-secondary)">Preview unavailable</p>')}};L();let H=setInterval(L,UG);return()=>clearInterval(H)},[]),v(()=>{if(N.current&&Z)V4(N.current).catch(()=>{})},[Z]),B`
        <div
            class="md-preview-splitter"
            onMouseDown=${(L)=>{L.preventDefault();let H=L.clientY,O=K.current?.offsetHeight||q,J=K.current?.parentElement,W=J?J.offsetHeight*0.7:500,D=L.currentTarget;D.classList.add("dragging"),document.body.style.cursor="row-resize",document.body.style.userSelect="none";let E=(P)=>{let m=Math.min(Math.max(O-(P.clientY-H),o$),W);Q(m)},R=()=>{D.classList.remove("dragging"),document.body.style.cursor="",document.body.style.userSelect="";try{localStorage.setItem(s$,String(Math.round(K.current?.offsetHeight||q)))}catch{}document.removeEventListener("mousemove",E),document.removeEventListener("mouseup",R)};document.addEventListener("mousemove",E),document.addEventListener("mouseup",R)}}
            onTouchStart=${(L)=>{L.preventDefault();let H=L.touches[0];if(!H)return;let O=H.clientY,J=K.current?.offsetHeight||q,W=K.current?.parentElement,D=W?W.offsetHeight*0.7:500,E=L.currentTarget;E.classList.add("dragging"),document.body.style.userSelect="none";let R=(m)=>{let c=m.touches[0];if(!c)return;m.preventDefault();let x=Math.min(Math.max(J-(c.clientY-O),o$),D);Q(x)},P=()=>{E.classList.remove("dragging"),document.body.style.userSelect="";try{localStorage.setItem(s$,String(Math.round(K.current?.offsetHeight||q)))}catch{}document.removeEventListener("touchmove",R),document.removeEventListener("touchend",P),document.removeEventListener("touchcancel",P)};document.addEventListener("touchmove",R,{passive:!1}),document.addEventListener("touchend",P),document.addEventListener("touchcancel",P)}}
        ></div>
        <div class="md-preview-panel" ref=${K} style=${{height:q+"px"}}>
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
    `}function tZ(_){if(_.branchLoaderMode)return"branch-loader";if(_.panePopoutMode)return"pane-popout";return"main"}function WG(_){return _==="error"?"Could not open branch window":"Opening branch…"}function eZ(_){return B`
    <div class="app-shell chat-only">
      <div class="container" style=${{display:"flex",alignItems:"center",justifyContent:"center",minHeight:"100vh",padding:"24px"}}>
        <div class="card" style=${{width:"min(560px, 100%)",padding:"24px"}}>
          <h1 style=${{margin:"0 0 12px",fontSize:"1.1rem"}}>
            ${WG(_.status)}
          </h1>
          <p style=${{margin:0,lineHeight:1.6}}>${_.message}</p>
        </div>
      </div>
    </div>
  `}function _Y(_){let{appShellRef:$,editorOpen:j,hidePanePopoutControls:Z,panePopoutHasMenuActions:Y,panePopoutTitle:q,tabStripTabs:Q,tabStripActiveId:N,handleTabActivate:K,previewTabs:G,handleTabTogglePreview:V,editorContainerRef:X,getPaneContent:U,panePopoutPath:L}=_;return B`
    <div class=${`app-shell pane-popout${j?" editor-open":""}`} ref=${$}>
      <div class="editor-pane-container pane-popout-container">
        ${j&&!Z&&B`
          <div class="pane-popout-controls" role="toolbar" aria-label="Pane window controls">
            ${Y?B`
                <details class="pane-popout-controls-menu">
                  <summary class="pane-popout-controls-trigger" aria-label="Pane window controls">
                    <span class="pane-popout-controls-title">${q}</span>
                    <svg viewBox="0 0 16 16" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                      <polyline points="4.5 6.5 8 10 11.5 6.5" />
                    </svg>
                  </summary>
                  <div class="pane-popout-controls-panel">
                    ${Q.length>1&&B`
                      <div class="pane-popout-controls-section">
                        <div class="pane-popout-controls-section-title">Open panes</div>
                        <div class="pane-popout-controls-list">
                          ${Q.map((H)=>B`
                            <button
                              type="button"
                              class=${`pane-popout-controls-item${H.id===N?" active":""}`}
                              onClick=${(O)=>{K(H.id),O.currentTarget.closest("details")?.removeAttribute("open")}}
                            >
                              ${H.label}
                            </button>
                          `)}
                        </div>
                      </div>
                    `}
                    ${N&&G.has(N)&&B`
                      <button
                        type="button"
                        class="pane-popout-controls-action"
                        onClick=${(H)=>{V(N),H.currentTarget.closest("details")?.removeAttribute("open")}}
                      >
                        Hide preview
                      </button>
                    `}
                  </div>
                </details>
              `:B`
                <div class="pane-popout-controls-label" aria-label=${q}>${q}</div>
              `}
          </div>
        `}
        ${j?B`<div class="editor-pane-host" ref=${X}></div>`:B`
            <div class="card" style=${{margin:"24px",padding:"24px",maxWidth:"640px"}}>
              <h1 style=${{margin:"0 0 12px",fontSize:"1.1rem"}}>Opening pane…</h1>
              <p style=${{margin:0,lineHeight:1.6}}>${L||"No pane path provided."}</p>
            </div>
          `}
        ${j&&N&&G.has(N)&&B`
          <${h8}
            getContent=${U}
            path=${N}
            onClose=${()=>V(N)}
          />
        `}
      </div>
    </div>
  `}function c8(_){return String(_||"").toLowerCase().replace(/^@/,"").replace(/\s+/g," ").trim()}function BG(_,$){let j=c8(_),Z=c8($);if(!Z)return!1;return j.startsWith(Z)||j.includes(Z)}function a$(_){if(!_)return!1;if(_.isComposing)return!1;if(_.ctrlKey||_.metaKey||_.altKey)return!1;return typeof _.key==="string"&&_.key.length===1&&/\S/.test(_.key)}function t$(_,$,j=Date.now(),Z=700){let Y=_&&typeof _==="object"?_:{value:"",updatedAt:0},q=String($||"").trim().toLowerCase();if(!q)return{value:"",updatedAt:j};return{value:!Y.value||!Number.isFinite(Y.updatedAt)||j-Y.updatedAt>Z?q:`${Y.value}${q}`,updatedAt:j}}function zG(_,$){let j=Math.max(0,Number(_)||0);if(j<=0)return[];let Y=((Number.isInteger($)?$:0)%j+j)%j,q=[];for(let Q=0;Q<j;Q+=1)q.push((Y+Q)%j);return q}function FG(_,$,j=0,Z=(Y)=>Y){let Y=c8($);if(!Y)return-1;let q=Array.isArray(_)?_:[],Q=zG(q.length,j),N=q.map((K)=>c8(Z(K)));for(let K of Q)if(N[K].startsWith(Y))return K;for(let K of Q)if(N[K].includes(Y))return K;return-1}function e$(_,$,j=-1,Z=(Y)=>Y){let Y=Array.isArray(_)?_:[];if(j>=0&&j<Y.length){let q=Z(Y[j]);if(BG(q,$))return j}return FG(Y,$,0,Z)}function l8(_){return String(_||"").trim().toLowerCase()}function _3(_){let $=String(_||"").match(/^@([a-zA-Z0-9_-]*)$/);if(!$)return null;return l8($[1]||"")}function HG(_){let $=new Set,j=[];for(let Z of Array.isArray(_)?_:[]){let Y=l8(Z?.agent_name);if(!Y||$.has(Y))continue;$.add(Y),j.push(Z)}return j}function $Y(_,$,j={}){let Z=_3($);if(Z==null)return[];let Y=typeof j?.currentChatJid==="string"?j.currentChatJid:null;return HG(_).filter((q)=>{if(Y&&q?.chat_jid===Y)return!1;return l8(q?.agent_name).startsWith(Z)})}function $3(_){let $=l8(_);return $?`@${$} `:""}function jY(_,$,j={}){if(!_||_.isComposing)return!1;if(j.searchMode)return!1;if(!j.showSessionSwitcherButton)return!1;if(_.ctrlKey||_.metaKey||_.altKey)return!1;if(_.key!=="@")return!1;return String($||"")===""}function g_({prefix:_="file",label:$,title:j,onRemove:Z,onClick:Y,removeTitle:q="Remove",icon:Q="file"}){let N=`${_}-file-pill`,K=`${_}-file-name`,G=`${_}-file-remove`,V=Q==="message"?B`<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
      </svg>`:B`<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
        <polyline points="14 2 14 8 20 8"/>
      </svg>`;return B`
    <span class=${N} title=${j||$} onClick=${Y}>
      ${V}
      <span class=${K}>${$}</span>
      ${Z&&B`
        <button
          class=${G}
          onClick=${(X)=>{X.preventDefault(),X.stopPropagation(),Z()}}
          title=${q}
          type="button"
        >
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M18 6L6 18M6 6l12 12"/>
          </svg>
        </button>
      `}
    </span>
  `}var JG=[{name:"/model",description:"Select model or list available models"},{name:"/cycle-model",description:"Cycle to the next available model"},{name:"/thinking",description:"Show or set thinking level"},{name:"/cycle-thinking",description:"Cycle thinking level"},{name:"/theme",description:"Set UI theme (no name to show available themes)"},{name:"/tint",description:"Tint default light/dark UI (usage: /tint #hex or /tint off)"},{name:"/btw",description:"Open a side conversation panel without interrupting the main chat"},{name:"/state",description:"Show current session state"},{name:"/stats",description:"Show session token and cost stats"},{name:"/context",description:"Show context window usage"},{name:"/last",description:"Show last assistant response"},{name:"/compact",description:"Manually compact the session"},{name:"/auto-compact",description:"Toggle auto-compaction"},{name:"/auto-retry",description:"Toggle auto-retry"},{name:"/abort",description:"Abort the current response"},{name:"/abort-retry",description:"Abort retry backoff"},{name:"/abort-bash",description:"Abort running bash command"},{name:"/shell",description:"Run a shell command and return output"},{name:"/bash",description:"Run a shell command and add output to context"},{name:"/queue",description:"Queue a follow-up message (one-at-a-time)"},{name:"/queue-all",description:"Queue a follow-up message (batch all)"},{name:"/steer",description:"Steer the current response"},{name:"/steering-mode",description:"Set steering mode (all|one)"},{name:"/followup-mode",description:"Set follow-up mode (all|one)"},{name:"/session-name",description:"Set or show the session name"},{name:"/new-session",description:"Start a new session"},{name:"/switch-session",description:"Switch to a session file"},{name:"/fork",description:"Fork from a previous message"},{name:"/forks",description:"List forkable messages"},{name:"/tree",description:"List the session tree"},{name:"/label",description:"Set or clear a label on a tree entry"},{name:"/labels",description:"List labeled entries"},{name:"/agent-name",description:"Set or show the agent display name"},{name:"/agent-avatar",description:"Set or show the agent avatar URL"},{name:"/user-name",description:"Set or show your display name"},{name:"/user-avatar",description:"Set or show your avatar URL"},{name:"/user-github",description:"Set name/avatar from GitHub profile"},{name:"/export-html",description:"Export session to HTML"},{name:"/passkey",description:"Manage passkeys (enrol/list/delete)"},{name:"/totp",description:"Show a TOTP enrolment QR code"},{name:"/qr",description:"Generate a QR code for text or URL"},{name:"/search",description:"Search notes and skills in the workspace"},{name:"/restart",description:"Restart the agent and stop subprocesses"},{name:"/commands",description:"List available commands"}];function OG({usage:_,onCompact:$}){let j=Math.min(100,Math.max(0,_.percent||0)),Z=_.tokens,Y=_.contextWindow,q="Compact context",N=`${Z!=null?`Context: ${ZY(Z)} / ${ZY(Y)} tokens (${j.toFixed(0)}%)`:`Context: ${j.toFixed(0)}%`} — ${"Compact context"}`,K=9,G=2*Math.PI*9,V=j/100*G,X=j>90?"var(--context-red, #ef4444)":j>75?"var(--context-amber, #f59e0b)":"var(--context-green, #22c55e)";return B`
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
                    stroke=${X}
                    stroke-width="2.5"
                    stroke-dasharray=${`${V} ${G}`}
                    stroke-linecap="round"
                    transform="rotate(-90 12 12)" />
            </svg>
        </button>
    `}function ZY(_){if(_==null)return"?";if(_>=1e6)return(_/1e6).toFixed(1)+"M";if(_>=1000)return(_/1000).toFixed(0)+"K";return String(_)}function DG(_){if(!_)return{content:_,fileRefs:[]};let j=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),Z=-1;for(let G=0;G<j.length;G+=1)if(j[G].trim()==="Files:"&&j[G+1]&&/^\s*-\s+/.test(j[G+1])){Z=G;break}if(Z===-1)return{content:_,fileRefs:[]};let Y=[],q=Z+1;for(;q<j.length;q+=1){let G=j[q];if(/^\s*-\s+/.test(G))Y.push(G.replace(/^\s*-\s+/,"").trim());else if(!G.trim())break;else break}if(Y.length===0)return{content:_,fileRefs:[]};let Q=j.slice(0,Z),N=j.slice(q);return{content:[...Q,...N].join(`
`).replace(/\n{3,}/g,`

`).trim(),fileRefs:Y}}function AG(_){if(!_)return{content:_,messageRefs:[]};let j=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),Z=-1;for(let G=0;G<j.length;G+=1)if(j[G].trim()==="Referenced messages:"&&j[G+1]&&/^\s*-\s+/.test(j[G+1])){Z=G;break}if(Z===-1)return{content:_,messageRefs:[]};let Y=[],q=Z+1;for(;q<j.length;q+=1){let G=j[q];if(/^\s*-\s+/.test(G)){let V=G.replace(/^\s*-\s+/,"").trim().match(/^message:(\S+)$/i);if(V)Y.push(V[1])}else if(!G.trim())break;else break}if(Y.length===0)return{content:_,messageRefs:[]};let Q=j.slice(0,Z),N=j.slice(q);return{content:[...Q,...N].join(`
`).replace(/\n{3,}/g,`

`).trim(),messageRefs:Y}}function EG(_){let $=DG(_||""),j=AG($.content||"");return{text:j.content||"",fileRefs:$.fileRefs,messageRefs:j.messageRefs}}function j3({items:_=[],onInjectQueuedFollowup:$,onRemoveQueuedFollowup:j,onOpenFilePill:Z}){if(!Array.isArray(_)||_.length===0)return null;return B`
        <div class="compose-queue-stack">
            ${_.map((Y)=>{let q=typeof Y?.content==="string"?Y.content:"",Q=EG(q);if(!Q.text.trim()&&Q.fileRefs.length===0&&Q.messageRefs.length===0)return null;return B`
                    <div class="compose-queue-stack-item" role="listitem">
                        <div class="compose-queue-stack-content" title=${q}>
                            ${Q.text.trim()&&B`<div class="compose-queue-stack-text">${Q.text}</div>`}
                            ${(Q.messageRefs.length>0||Q.fileRefs.length>0)&&B`
                                <div class="compose-queue-stack-refs">
                                    ${Q.messageRefs.map((N)=>B`
                                        <${g_}
                                            key=${"queue-msg-"+N}
                                            prefix="compose"
                                            label=${"msg:"+N}
                                            title=${"Message reference: "+N}
                                            icon="message"
                                        />
                                    `)}
                                    ${Q.fileRefs.map((N)=>{let K=N.split("/").pop()||N;return B`
                                            <${g_}
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
    `}function YY({onPost:_,onFocus:$,searchMode:j,searchScope:Z="current",onSearch:Y,onSearchScopeChange:q,onEnterSearch:Q,onExitSearch:N,fileRefs:K=[],onRemoveFileRef:G,onClearFileRefs:V,messageRefs:X=[],onRemoveMessageRef:U,onClearMessageRefs:L,activeModel:H=null,modelUsage:O=null,thinkingLevel:J=null,supportsThinking:W=!1,contextUsage:D=null,onContextCompact:E,notificationsEnabled:R=!1,notificationPermission:P="default",onToggleNotifications:m,onModelChange:c,onModelStateChange:x,activeEditorPath:M=null,onAttachEditorFile:z,onOpenFilePill:k,followupQueueItems:u=[],onInjectQueuedFollowup:n,onRemoveQueuedFollowup:b,onSubmitIntercept:d,onMessageResponse:i,onPopOutChat:a,isAgentActive:j0=!1,activeChatAgents:e=[],currentChatJid:N0="web:default",connectionStatus:U0="connected",onSetFileRefs:L0,onSetMessageRefs:C0,onSubmitError:O0,onSwitchChat:B0,onRenameSession:u0,isRenameSessionInProgress:J0=!1,onCreateSession:y0,onDeleteSession:b0,onRestoreSession:F0,showQueueStack:f0=!0,statusNotice:Q0=null}){let[M0,l0]=g(""),[i0,H1]=g(""),[_1,p0]=g([]),[j1,e0]=g(!1),[r0,X0]=g([]),[P0,a0]=g(0),[o,Y0]=g(!1),[p,l]=g([]),[z0,E0]=g(0),[I0,K0]=g(!1),[x0,m0]=g(!1),[H0,R0]=g(!1),[D0,Z0]=g(!1),[y,t]=g([]),[W0,A0]=g(0),[n0,$1]=g(0),[q1,J1]=g(!1),[p1,x_]=g(0),[o1,w1]=g(null),[h1,v1]=g(()=>Date.now()),t0=T(null),c1=T(null),r_=T(null),s1=T(null),o_=T(null),m_=T(null),O1=T(null),l1=T(null),D1=T({value:"",updatedAt:0}),V1=T(0),U1=T(!1),K_=200,G_=(F)=>{let w=new Set,h=[];for(let $0 of F||[]){if(typeof $0!=="string")continue;let T0=$0.trim();if(!T0||w.has(T0))continue;w.add(T0),h.push(T0)}return h},x1=()=>{let F=L_("piclaw_compose_history");if(!F)return[];try{let w=JSON.parse(F);if(!Array.isArray(w))return[];return G_(w)}catch{return[]}},n1=(F)=>{Y1("piclaw_compose_history",JSON.stringify(F))},Q1=T(x1()),M1=T(-1),a1=T(""),b1=M0.trim()||_1.length>0||K.length>0||X.length>0,s_=typeof window<"u"&&typeof navigator<"u"&&Boolean(navigator.geolocation)&&Boolean(window.isSecureContext),z_=typeof window<"u"&&typeof Notification<"u",a_=typeof window<"u"?Boolean(window.isSecureContext):!1,U4=z_&&a_&&P!=="denied",H_=P==="granted"&&R,T_=M4(Q0),C4=T8(Q0),y4=typeof Q0?.detail==="string"&&Q0.detail.trim()?Q0.detail.trim():"",Z1=T_?C8(Q0,h1):null,A1=H_?"Disable notifications":"Enable notifications",L4=_1.length>0||K.length>0||X.length>0,t1=U0==="disconnected"?"Reconnecting":String(U0||"Connecting").replace(/[-_]+/g," ").replace(/^./,(F)=>F.toUpperCase()),J_=U0==="disconnected"?"Reconnecting":`Connection: ${t1}`,g1=(Array.isArray(e)?e:[]).filter((F)=>!F?.archived_at),z1=(()=>{for(let F of Array.isArray(e)?e:[]){let w=typeof F?.chat_jid==="string"?F.chat_jid.trim():"";if(w&&w===N0)return F}return null})(),P1=Boolean(z1&&z1.chat_jid===(z1.root_chat_jid||z1.chat_jid)),N1=v0(()=>{let F=new Set,w=[];for(let h of Array.isArray(e)?e:[]){let $0=typeof h?.chat_jid==="string"?h.chat_jid.trim():"";if(!$0||$0===N0||F.has($0))continue;if(!(typeof h?.agent_name==="string"?h.agent_name.trim():""))continue;F.add($0),w.push(h)}return w},[e,N0]),e1=N1.length>0,__=e1&&typeof B0==="function",$_=e1&&typeof F0==="function",p_=Boolean(J0||U1.current),R1=!j&&typeof u0==="function"&&!p_,S1=!j&&typeof y0==="function",j_=!j&&typeof b0==="function"&&!P1,C_=!j&&(__||$_||R1||S1||j_),L1=H||"",O_=W&&J?` (${J})`:"",K1=O_.trim()?`${J}`:"",y_=typeof O?.hint_short==="string"?O.hint_short.trim():"",D_=[K1||null,y_||null].filter(Boolean).join(" • "),P4=[L1?`Current model: ${L1}${O_}`:null,O?.plan?`Plan: ${O.plan}`:null,y_||null,O?.primary?.reset_description||null,O?.secondary?.reset_description||null].filter(Boolean),n4=x0?"Switching model…":P4.join(" • ")||`Current model: ${L1}${O_} (tap to open model picker)`,P_=(F)=>{if(!F||typeof F!=="object")return;let w=F.model??F.current;if(typeof x==="function")x({model:w??null,thinking_level:F.thinking_level??null,supports_thinking:F.supports_thinking,provider_usage:F.provider_usage??null});if(w&&typeof c==="function")c(w)},h_=(F)=>{let w=F||t0.current;if(!w)return;w.style.height="auto",w.style.height=`${w.scrollHeight}px`,w.style.overflowY="hidden"},S4=(F)=>{if(!F.startsWith("/")||F.includes(`
`)){Y0(!1),X0([]);return}let w=F.toLowerCase().split(" ")[0];if(w.length<1){Y0(!1),X0([]);return}let h=JG.filter(($0)=>$0.name.startsWith(w)||$0.name.replace(/-/g,"").startsWith(w.replace(/-/g,"")));if(h.length>0&&!(h.length===1&&h[0].name===w))K0(!1),l([]),X0(h),a0(0),Y0(!0);else Y0(!1),X0([])},t_=(F)=>{let w=M0,h=w.indexOf(" "),$0=h>=0?w.slice(h):"",T0=F.name+$0;l0(T0),Y0(!1),X0([]),requestAnimationFrame(()=>{let W1=t0.current;if(!W1)return;let E1=T0.length;W1.selectionStart=E1,W1.selectionEnd=E1,W1.focus()})},d4=(F)=>{if(_3(F)==null){K0(!1),l([]);return}let w=$Y(g1,F,{currentChatJid:N0});if(w.length>0&&!(w.length===1&&$3(w[0].agent_name).trim().toLowerCase()===String(F||"").trim().toLowerCase()))Y0(!1),X0([]),l(w),E0(0),K0(!0);else K0(!1),l([])},e_=(F)=>{let w=$3(F?.agent_name);if(!w)return;l0(w),K0(!1),l([]),requestAnimationFrame(()=>{let h=t0.current;if(!h)return;let $0=w.length;h.selectionStart=$0,h.selectionEnd=$0,h.focus()})},c_=()=>{if(j||!__&&!$_&&!R1&&!S1&&!j_)return!1;return D1.current={value:"",updatedAt:0},R0(!1),Y0(!1),X0([]),K0(!1),l([]),Z0(!0),!0},d1=(F)=>{if(F?.preventDefault?.(),F?.stopPropagation?.(),j||!__&&!$_&&!R1&&!S1&&!j_)return;if(D0){D1.current={value:"",updatedAt:0},Z0(!1);return}c_()},i4=(F)=>{let w=typeof F==="string"?F.trim():"";if(Z0(!1),!w||w===N0){requestAnimationFrame(()=>t0.current?.focus());return}B0?.(w)},r4=async(F)=>{let w=typeof F==="string"?F.trim():"";if(Z0(!1),!w||typeof F0!=="function"){requestAnimationFrame(()=>t0.current?.focus());return}try{await F0(w)}catch(h){console.warn("Failed to restore session:",h),requestAnimationFrame(()=>t0.current?.focus())}},D5=(F)=>{let h=(Array.isArray(F)?F:[]).findIndex(($0)=>!$0?.disabled);return h>=0?h:0},F1=v0(()=>{let F=[];for(let w of N1){let h=Boolean(w?.archived_at),$0=typeof w?.agent_name==="string"?w.agent_name.trim():"",T0=typeof w?.chat_jid==="string"?w.chat_jid.trim():"";if(!$0||!T0)continue;F.push({type:"session",key:`session:${T0}`,label:`@${$0} — ${T0}${w?.is_active?" active":""}${h?" archived":""}`,chat:w,disabled:h?!$_:!__})}if(S1)F.push({type:"action",key:"action:new",label:"New session",action:"new",disabled:!1});if(R1)F.push({type:"action",key:"action:rename",label:"Rename current session",action:"rename",disabled:p_});if(j_)F.push({type:"action",key:"action:delete",label:"Delete current session",action:"delete",disabled:!1});return F},[N1,$_,__,S1,R1,j_,p_]),W4=async(F)=>{if(F?.preventDefault)F.preventDefault();if(F?.stopPropagation)F.stopPropagation();if(typeof u0!=="function"||J0||U1.current)return;U1.current=!0,Z0(!1);try{await u0()}catch(w){console.warn("Failed to rename session:",w)}finally{U1.current=!1}requestAnimationFrame(()=>t0.current?.focus())},o4=async()=>{if(typeof y0!=="function")return;Z0(!1);try{await y0()}catch(F){console.warn("Failed to create session:",F)}requestAnimationFrame(()=>t0.current?.focus())},X_=async()=>{if(typeof b0!=="function")return;Z0(!1);try{await b0(N0)}catch(F){console.warn("Failed to delete session:",F)}requestAnimationFrame(()=>t0.current?.focus())},Z_=(F)=>{if(j)H1(F);else l0(F),S4(F),d4(F);requestAnimationFrame(()=>h_())},_4=(F)=>{let w=j?i0:M0,h=w&&!w.endsWith(`
`)?`
`:"",$0=`${w}${h}${F}`.trimStart();Z_($0)},w4=(F)=>{let w=F?.command?.model_label;if(w)return w;let h=F?.command?.message;if(typeof h==="string"){let $0=h.match(/•\s+([^\n]+?)\s+\(current\)/);if($0?.[1])return $0[1].trim()}return null},R4=async(F)=>{if(j||x0)return;m0(!0);try{let w=await Y5("default",F,null,[],null,N0),h=w4(w);P_({model:h??H??null,thinking_level:w?.command?.thinking_level,supports_thinking:w?.command?.supports_thinking});try{let $0=await T5(N0);if($0)P_($0)}catch{}return _?.(),!0}catch(w){return console.error("Failed to switch model:",w),alert("Failed to switch model: "+w.message),!1}finally{m0(!1)}},s4=async()=>{await R4("/cycle-model")},$4=async(F)=>{if(!F||x0)return;if(await R4(`/model ${F}`))R0(!1)},A_=(F)=>{if(!F||F.disabled)return;if(F.type==="session"){let w=F.chat;if(w?.archived_at)r4(w.chat_jid);else i4(w.chat_jid);return}if(F.type==="action"){if(F.action==="new"){o4();return}if(F.action==="rename"){W4();return}if(F.action==="delete")X_()}},A5=(F)=>{F.preventDefault(),F.stopPropagation(),D1.current={value:"",updatedAt:0},Z0(!1),R0((w)=>!w)},B4=async()=>{if(j)return;E?.(),await E_("/compact",null,{includeMedia:!1,includeFileRefs:!1,includeMessageRefs:!1,clearAfterSubmit:!1,recordHistory:!1})},u4=(F)=>{if(F==="queue"||F==="steer"||F==="auto")return F;return j0?"queue":void 0},E_=async(F,w,h={})=>{let{includeMedia:$0=!0,includeFileRefs:T0=!0,includeMessageRefs:W1=!0,clearAfterSubmit:E1=!0,recordHistory:u1=!0}=h||{},j4=typeof F==="string"?F:F&&typeof F?.target?.value==="string"?F.target.value:M0,f4=typeof j4==="string"?j4:"";if(!f4.trim()&&($0?_1.length===0:!0)&&(T0?K.length===0:!0)&&(W1?X.length===0:!0))return;Y0(!1),X0([]),K0(!1),l([]),Z0(!1),w1(null);let a4=$0?[..._1]:[],z4=T0?[...K]:[],i1=W1?[...X]:[],l_=f4.trim();if(u1&&l_){let S_=Q1.current,I1=G_(S_.filter((E5)=>E5!==l_));if(I1.push(l_),I1.length>200)I1.splice(0,I1.length-200);Q1.current=I1,n1(I1),M1.current=-1,a1.current=""}let s8=()=>{if($0)p0([...a4]);if(T0)L0?.(z4);if(W1)C0?.(i1);l0(l_),requestAnimationFrame(()=>h_())};if(E1)l0(""),p0([]),V?.(),L?.();(async()=>{try{if(await d?.({content:l_,submitMode:w,fileRefs:z4,messageRefs:i1,mediaFiles:a4})){_?.();return}let I1=[];for(let q_ of a4){let F4=await A6(q_);I1.push(F4.id)}let E5=z4.length?`Files:
${z4.map((q_)=>`- ${q_}`).join(`
`)}`:"",a8=i1.length?`Referenced messages:
${i1.map((q_)=>`- message:${q_}`).join(`
`)}`:"",k5=I1.length?`Attachments:
${I1.map((q_,F4)=>{let t4=a4[F4]?.name||`attachment-${F4+1}`;return`- attachment:${q_} (${t4})`}).join(`
`)}`:"",t8=[l_,E5,a8,k5].filter(Boolean).join(`

`),v4=await Y5("default",t8,null,I1,u4(w),N0);if(i?.(v4),v4?.command){P_({model:v4.command.model_label??H??null,thinking_level:v4.command.thinking_level,supports_thinking:v4.command.supports_thinking});try{let q_=await T5(N0);if(q_)P_(q_)}catch{}}_?.()}catch(S_){if(E1)s8();let I1=S_?.message||"Failed to send message.";w1(I1),O0?.(I1),console.error("Failed to post:",S_)}})()},A=(F)=>{n?.(F)},I=C((F)=>{if(j||!H0&&!D0||F?.isComposing)return!1;let w=()=>{F.preventDefault?.(),F.stopPropagation?.()},h=()=>{D1.current={value:"",updatedAt:0}};if(F.key==="Escape"){if(w(),h(),H0)R0(!1);if(D0)Z0(!1);return!0}if(H0){if(F.key==="ArrowDown"){if(w(),h(),y.length>0)A0(($0)=>($0+1)%y.length);return!0}if(F.key==="ArrowUp"){if(w(),h(),y.length>0)A0(($0)=>($0-1+y.length)%y.length);return!0}if((F.key==="Enter"||F.key==="Tab")&&y.length>0)return w(),h(),$4(y[Math.max(0,Math.min(W0,y.length-1))]),!0;if(a$(F)&&y.length>0){w();let $0=t$(D1.current,F.key);D1.current=$0;let T0=e$(y,$0.value,W0,(W1)=>W1);if(T0>=0)A0(T0);return!0}}if(D0){if(F.key==="ArrowDown"){if(w(),h(),F1.length>0)$1(($0)=>($0+1)%F1.length);return!0}if(F.key==="ArrowUp"){if(w(),h(),F1.length>0)$1(($0)=>($0-1+F1.length)%F1.length);return!0}if((F.key==="Enter"||F.key==="Tab")&&F1.length>0)return w(),h(),A_(F1[Math.max(0,Math.min(n0,F1.length-1))]),!0;if(a$(F)&&F1.length>0){w();let $0=t$(D1.current,F.key);D1.current=$0;let T0=e$(F1,$0.value,n0,(W1)=>W1.label);if(T0>=0)$1(T0);return!0}}return!1},[j,H0,D0,y,W0,F1,n0,$4]),f=(F)=>{if(F.isComposing)return;if(j&&F.key==="Escape"){F.preventDefault(),H1(""),N?.();return}if(I(F))return;let w=t0.current?.value??(j?i0:M0);if(jY(F,w,{searchMode:j,showSessionSwitcherButton:C_})){F.preventDefault(),c_();return}if(I0&&p.length>0){let h=t0.current?.value??(j?i0:M0);if(!String(h||"").match(/^@([a-zA-Z0-9_-]*)$/))K0(!1),l([]);else{if(F.key==="ArrowDown"){F.preventDefault(),E0(($0)=>($0+1)%p.length);return}if(F.key==="ArrowUp"){F.preventDefault(),E0(($0)=>($0-1+p.length)%p.length);return}if(F.key==="Tab"||F.key==="Enter"){F.preventDefault(),e_(p[z0]);return}if(F.key==="Escape"){F.preventDefault(),K0(!1),l([]);return}}}if(o&&r0.length>0){let h=t0.current?.value??(j?i0:M0);if(!String(h||"").startsWith("/"))Y0(!1),X0([]);else{if(F.key==="ArrowDown"){F.preventDefault(),a0(($0)=>($0+1)%r0.length);return}if(F.key==="ArrowUp"){F.preventDefault(),a0(($0)=>($0-1+r0.length)%r0.length);return}if(F.key==="Tab"){F.preventDefault(),t_(r0[P0]);return}if(F.key==="Enter"&&!F.shiftKey){if(!w.includes(" ")){F.preventDefault();let T0=r0[P0];Y0(!1),X0([]),E_(T0.name);return}}if(F.key==="Escape"){F.preventDefault(),Y0(!1),X0([]);return}}}if(!j&&(F.key==="ArrowUp"||F.key==="ArrowDown")&&!F.metaKey&&!F.ctrlKey&&!F.altKey&&!F.shiftKey){let h=t0.current;if(!h)return;let $0=h.value||"",T0=h.selectionStart===0&&h.selectionEnd===0,W1=h.selectionStart===$0.length&&h.selectionEnd===$0.length;if(F.key==="ArrowUp"&&T0||F.key==="ArrowDown"&&W1){let E1=Q1.current;if(!E1.length)return;F.preventDefault();let u1=M1.current;if(F.key==="ArrowUp"){if(u1===-1)a1.current=$0,u1=E1.length-1;else if(u1>0)u1-=1;M1.current=u1,Z_(E1[u1]||"")}else{if(u1===-1)return;if(u1<E1.length-1)u1+=1,M1.current=u1,Z_(E1[u1]||"");else M1.current=-1,Z_(a1.current||""),a1.current=""}requestAnimationFrame(()=>{let j4=t0.current;if(!j4)return;let f4=j4.value.length;j4.selectionStart=f4,j4.selectionEnd=f4});return}}if(F.key==="Enter"&&!F.shiftKey&&(F.ctrlKey||F.metaKey)){if(F.preventDefault(),j){if(w.trim())Y?.(w.trim(),Z)}else E_(w,"steer");return}if(F.key==="Enter"&&!F.shiftKey)if(F.preventDefault(),j){if(w.trim())Y?.(w.trim(),Z)}else E_(w)},S=(F)=>{let w=Array.from(F||[]).filter((h)=>h instanceof File&&!String(h.name||"").startsWith(".DS_Store"));if(!w.length)return;p0((h)=>[...h,...w]),w1(null)},r=(F)=>{S(F.target.files),F.target.value=""},q0=(F)=>{if(j)return;F.preventDefault(),F.stopPropagation(),V1.current+=1,e0(!0)},G0=(F)=>{if(j)return;if(F.preventDefault(),F.stopPropagation(),V1.current=Math.max(0,V1.current-1),V1.current===0)e0(!1)},V0=(F)=>{if(j)return;if(F.preventDefault(),F.stopPropagation(),F.dataTransfer)F.dataTransfer.dropEffect="copy";e0(!0)},_0=(F)=>{if(j)return;F.preventDefault(),F.stopPropagation(),V1.current=0,e0(!1),S(F.dataTransfer?.files||[])},S0=(F)=>{if(j)return;let w=F.clipboardData?.items;if(!w||!w.length)return;let h=[];for(let $0 of w){if($0.kind!=="file")continue;let T0=$0.getAsFile?.();if(T0)h.push(T0)}if(h.length>0)F.preventDefault(),S(h)},T1=(F)=>{p0((w)=>w.filter((h,$0)=>$0!==F))},k_=()=>{w1(null),p0([]),V?.(),L?.()},Y_=()=>{if(!navigator.geolocation){alert("Geolocation is not available in this browser.");return}navigator.geolocation.getCurrentPosition((F)=>{let{latitude:w,longitude:h,accuracy:$0}=F.coords,T0=`${w.toFixed(5)}, ${h.toFixed(5)}`,W1=Number.isFinite($0)?` ±${Math.round($0)}m`:"",E1=`https://maps.google.com/?q=${w},${h}`,u1=`Location: ${T0}${W1} ${E1}`;_4(u1)},(F)=>{let w=F?.message||"Unable to retrieve location.";alert(`Location error: ${w}`)},{enableHighAccuracy:!0,timeout:1e4,maximumAge:0})};v(()=>{if(!H0)return;D1.current={value:"",updatedAt:0},J1(!0),T5(N0).then((F)=>{let w=Array.isArray(F?.models)?F.models.filter((h)=>typeof h==="string"&&h.trim().length>0):[];w.sort((h,$0)=>h.localeCompare($0,void 0,{sensitivity:"base"})),t(w),P_(F)}).catch((F)=>{console.warn("Failed to load model list:",F),t([])}).finally(()=>{J1(!1)})},[H0,H]),v(()=>{if(j)R0(!1),Z0(!1),Y0(!1),X0([]),K0(!1),l([])},[j]),v(()=>{if(D0&&!C_)Z0(!1)},[D0,C_]),v(()=>{if(!H0)return;let F=y.findIndex((w)=>w===H);A0(F>=0?F:0)},[H0,y,H]),v(()=>{if(!D0)return;$1(D5(F1)),D1.current={value:"",updatedAt:0}},[D0,N0]),v(()=>{if(!H0)return;let F=(w)=>{let h=s1.current,$0=o_.current,T0=w.target;if(h&&h.contains(T0))return;if($0&&$0.contains(T0))return;R0(!1)};return document.addEventListener("pointerdown",F),()=>document.removeEventListener("pointerdown",F)},[H0]),v(()=>{if(!D0)return;let F=(w)=>{let h=m_.current,$0=O1.current,T0=w.target;if(h&&h.contains(T0))return;if($0&&$0.contains(T0))return;Z0(!1)};return document.addEventListener("pointerdown",F),()=>document.removeEventListener("pointerdown",F)},[D0]),v(()=>{if(j||!H0&&!D0)return;let F=(w)=>{I(w)};return document.addEventListener("keydown",F,!0),()=>document.removeEventListener("keydown",F,!0)},[j,H0,D0,I]),v(()=>{if(!H0)return;let F=s1.current;F?.focus?.(),F?.querySelector?.(".compose-model-popup-item.active")?.scrollIntoView?.({block:"nearest"})},[H0,W0,y]),v(()=>{if(!D0)return;let F=m_.current;F?.focus?.(),F?.querySelector?.(".compose-model-popup-item.active")?.scrollIntoView?.({block:"nearest"})},[D0,n0,F1.length]),v(()=>{let F=()=>{let W1=l1.current?.clientWidth||0;x_((E1)=>E1===W1?E1:W1)};F();let w=l1.current,h=0,$0=()=>{if(h)cancelAnimationFrame(h);h=requestAnimationFrame(()=>{h=0,F()})},T0=null;if(w&&typeof ResizeObserver<"u")T0=new ResizeObserver(()=>$0()),T0.observe(w);if(typeof window<"u")window.addEventListener("resize",$0);return()=>{if(h)cancelAnimationFrame(h);if(T0?.disconnect?.(),typeof window<"u")window.removeEventListener("resize",$0)}},[j,H,z1?.agent_name,C_,D?.percent]);let a5=(F)=>{let w=F.target.value;if(w1(null),D0)Z0(!1);h_(F.target),Z_(w)};return v(()=>{requestAnimationFrame(()=>h_())},[M0,i0,j]),v(()=>{if(!T_)return;v1(Date.now());let F=setInterval(()=>v1(Date.now()),1000);return()=>clearInterval(F)},[T_,Q0?.started_at,Q0?.startedAt]),v(()=>{if(j)return;d4(M0)},[g1,N0,M0,j]),B`
        <div class="compose-box">
            ${f0&&!j&&B`
                <${j3}
                    items=${u}
                    onInjectQueuedFollowup=${A}
                    onRemoveQueuedFollowup=${b}
                    onOpenFilePill=${k}
                />
            `}
            ${Q0&&B`
                <div
                    class=${`compose-inline-status${T_?" compaction":""}`}
                    role="status"
                    aria-live="polite"
                    title=${y4||""}
                >
                    <div class="compose-inline-status-row">
                        <span class="compose-inline-status-dot" aria-hidden="true"></span>
                        <span class="compose-inline-status-title">${C4}</span>
                        ${Z1&&B`<span class="compose-inline-status-elapsed">${Z1}</span>`}
                    </div>
                    ${y4&&B`<div class="compose-inline-status-detail">${y4}</div>`}
                </div>
            `}
            ${o1&&B`
                <div class="compose-submit-error compose-submit-error-top" role="status" aria-live="polite">${o1}</div>
            `}
            <div
                class=${`compose-input-wrapper${j1?" drag-active":""}`}
                onDragEnter=${q0}
                onDragOver=${V0}
                onDragLeave=${G0}
                onDrop=${_0}
            >
                <div class="compose-input-main">
                    ${L4&&B`
                        <div class="compose-file-refs">
                            ${X.map((F)=>{return B`
                                    <${g_}
                                        key=${"msg-"+F}
                                        prefix="compose"
                                        label=${"msg:"+F}
                                        title=${"Message reference: "+F}
                                        removeTitle="Remove reference"
                                        icon="message"
                                        onRemove=${()=>U?.(F)}
                                    />
                                `})}
                            ${K.map((F)=>{let w=F.split("/").pop()||F;return B`
                                    <${g_}
                                        prefix="compose"
                                        label=${w}
                                        title=${F}
                                        onClick=${()=>k?.(F)}
                                        removeTitle="Remove file"
                                        onRemove=${()=>G?.(F)}
                                    />
                                `})}
                            ${_1.map((F,w)=>{let h=F?.name||`attachment-${w+1}`;return B`
                                    <${g_}
                                        key=${h+w}
                                        prefix="compose"
                                        label=${h}
                                        title=${h}
                                        removeTitle="Remove attachment"
                                        onRemove=${()=>T1(w)}
                                    />
                                `})}
                            <button
                                type="button"
                                class="compose-clear-attachments-btn"
                                onClick=${k_}
                                title="Clear all attachments and references"
                                aria-label="Clear all attachments and references"
                            >
                                Clear all
                            </button>
                        </div>
                    `}
                    ${!j&&typeof a==="function"&&B`
                        <button
                            type="button"
                            class="compose-popout-btn"
                            onClick=${()=>a?.()}
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
                        placeholder=${j?"Search (Enter to run)...":"Message (Enter to send, Shift+Enter for newline)..."}
                        value=${j?i0:M0}
                        onInput=${a5}
                        onKeyDown=${f}
                        onPaste=${S0}
                        onFocus=${$}
                        onClick=${$}
                        rows="1"
                    />
                    ${I0&&p.length>0&&B`
                        <div class="slash-autocomplete" ref=${r_}>
                            ${p.map((F,w)=>B`
                                <div
                                    key=${F.chat_jid||F.agent_name}
                                    class=${`slash-item${w===z0?" active":""}`}
                                    onMouseDown=${(h)=>{h.preventDefault(),e_(F)}}
                                    onMouseEnter=${()=>E0(w)}
                                >
                                    <span class="slash-name">@${F.agent_name}</span>
                                    <span class="slash-desc">${F.chat_jid||"Active agent"}</span>
                                </div>
                            `)}
                        </div>
                    `}
                    ${o&&r0.length>0&&B`
                        <div class="slash-autocomplete" ref=${c1}>
                            ${r0.map((F,w)=>B`
                                <div
                                    key=${F.name}
                                    class=${`slash-item${w===P0?" active":""}`}
                                    onMouseDown=${(h)=>{h.preventDefault(),t_(F)}}
                                    onMouseEnter=${()=>a0(w)}
                                >
                                    <span class="slash-name">${F.name}</span>
                                    <span class="slash-desc">${F.description}</span>
                                </div>
                            `)}
                        </div>
                    `}
                    ${H0&&!j&&B`
                        <div class="compose-model-popup" ref=${s1} tabIndex="-1" onKeyDown=${I}>
                            <div class="compose-model-popup-title">Select model</div>
                            <div class="compose-model-popup-menu" role="menu" aria-label="Model picker">
                                ${q1&&B`
                                    <div class="compose-model-popup-empty">Loading models…</div>
                                `}
                                ${!q1&&y.length===0&&B`
                                    <div class="compose-model-popup-empty">No models available.</div>
                                `}
                                ${!q1&&y.map((F,w)=>B`
                                    <button
                                        key=${F}
                                        type="button"
                                        role="menuitem"
                                        class=${`compose-model-popup-item${W0===w?" active":""}${H===F?" current-model":""}`}
                                        onClick=${()=>{$4(F)}}
                                        disabled=${x0}
                                    >
                                        ${F}
                                    </button>
                                `)}
                            </div>
                            <div class="compose-model-popup-actions">
                                <button
                                    type="button"
                                    class="compose-model-popup-btn"
                                    onClick=${()=>{s4()}}
                                    disabled=${x0}
                                >
                                    Next model
                                </button>
                            </div>
                        </div>
                    `}
                    ${D0&&!j&&B`
                        <div class="compose-model-popup" ref=${m_} tabIndex="-1" onKeyDown=${I}>
                            <div class="compose-model-popup-title">Manage sessions & agents</div>
                            <div class="compose-model-popup-menu" role="menu" aria-label="Sessions and agents">
                                ${B`
                                    <div class="compose-model-popup-item current" role="note" aria-live="polite">
                                        ${(()=>{return WZ(z1,N0)})()}
                                    </div>
                                `}
                                ${!e1&&B`
                                    <div class="compose-model-popup-empty">No other sessions yet.</div>
                                `}
                                ${e1&&N1.map((F,w)=>{let h=Boolean(F.archived_at),T0=F.chat_jid!==(F.root_chat_jid||F.chat_jid)&&!F.is_active&&!h&&typeof b0==="function",W1=g8(F,{currentChatJid:N0});return B`
                                        <div key=${F.chat_jid} class=${`compose-model-popup-item-row${h?" archived":""}`}>
                                            <button
                                                type="button"
                                                role="menuitem"
                                                class=${`compose-model-popup-item${h?" archived":""}${n0===w?" active":""}`}
                                                onClick=${()=>{if(h){r4(F.chat_jid);return}i4(F.chat_jid)}}
                                                disabled=${h?!$_:!__}
                                                title=${h?`Restore archived ${`@${F.agent_name}`}`:`Switch to ${`@${F.agent_name}`}`}
                                            >
                                                ${W1}
                                            </button>
                                            ${T0&&B`
                                                <button
                                                    type="button"
                                                    class="compose-model-popup-item-delete"
                                                    title="Delete this branch"
                                                    aria-label=${`Delete @${F.agent_name}`}
                                                    onClick=${(E1)=>{E1.stopPropagation(),Z0(!1),b0(F.chat_jid)}}
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
                            ${(S1||R1||j_)&&B`
                                <div class="compose-model-popup-actions">
                                    ${S1&&B`
                                        <button
                                            type="button"
                                            class=${`compose-model-popup-btn primary${F1.findIndex((F)=>F.key==="action:new")===n0?" active":""}`}
                                            onClick=${()=>{o4()}}
                                            title="Create a new agent/session branch from this chat"
                                        >
                                            New
                                        </button>
                                    `}
                                    ${R1&&B`
                                        <button
                                            type="button"
                                            class=${`compose-model-popup-btn${F1.findIndex((F)=>F.key==="action:rename")===n0?" active":""}`}
                                            onClick=${(F)=>{W4(F)}}
                                            title="Rename the current branch handle"
                                            disabled=${p_}
                                        >
                                            Rename current…
                                        </button>
                                    `}
                                    ${j_&&B`
                                        <button
                                            type="button"
                                            class=${`compose-model-popup-btn danger${F1.findIndex((F)=>F.key==="action:delete")===n0?" active":""}`}
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
                <div class="compose-footer" ref=${l1}>
                    ${!j&&H&&B`
                    <div class="compose-meta-row">
                        ${!j&&H&&B`
                            <div class="compose-model-meta">
                                <button
                                    ref=${o_}
                                    type="button"
                                    class="compose-model-hint compose-model-hint-btn"
                                    title=${n4}
                                    aria-label="Open model picker"
                                    onClick=${A5}
                                    disabled=${x0}
                                >
                                    ${x0?"Switching…":L1}
                                </button>
                                <div class="compose-model-meta-subline">
                                    ${!x0&&D_&&B`
                                        <span class="compose-model-usage-hint" title=${n4}>
                                            ${D_}
                                        </span>
                                    `}
                                </div>
                            </div>
                        `}
                        ${!j&&D&&D.percent!=null&&B`
                            <${OG} usage=${D} onCompact=${B4} />
                        `}
                    </div>
                    `}
                    <div class="compose-actions ${j?"search-mode":""}">
                    ${C_&&B`
                        ${z1?.agent_name&&B`
                            <button
                                type="button"
                                class="compose-current-agent-label active"
                                title=${z1.chat_jid||N0}
                                aria-label=${`Manage sessions for @${z1.agent_name}`}
                                onClick=${d1}
                            >@${z1.agent_name}</button>
                        `}
                        <button
                            ref=${O1}
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
                                value=${Z}
                                onChange=${(F)=>q?.(F.currentTarget.value)}
                            >
                                <option value="current">Current</option>
                                <option value="root">Branch family</option>
                                <option value="all">All chats</option>
                            </select>
                        </label>
                    `}
                    <button
                        class="icon-btn search-toggle"
                        onClick=${j?N:Q}
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
                    ${s_&&!j&&B`
                        <button
                            class="icon-btn location-btn"
                            onClick=${Y_}
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
                    ${U4&&!j&&B`
                        <button
                            class=${`icon-btn notification-btn${H_?" active":""}`}
                            onClick=${m}
                            title=${A1}
                            type="button"
                        >
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M18 8a6 6 0 1 0-12 0c0 7-3 9-3 9h18s-3-2-3-9" />
                                <path d="M13.73 21a2 2 0 0 1-3.46 0" />
                            </svg>
                        </button>
                    `}
                    ${!j&&B`
                        ${M&&z&&B`
                            <button
                                class="icon-btn attach-editor-btn"
                                onClick=${z}
                                title=${`Attach open file: ${M}`}
                                type="button"
                                disabled=${K.includes(M)}
                            >
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"/><polyline points="13 2 13 9 20 9"/></svg>
                            </button>
                        `}
                        <label class="icon-btn" title="Attach file">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>
                            <input type="file" multiple hidden onChange=${r} />
                        </label>
                    `}
                    ${(U0!=="connected"||!j)&&B`
                        <div class="compose-send-stack">
                            ${U0!=="connected"&&B`
                                <span class="compose-connection-status connection-status ${U0}" title=${J_}>
                                    ${t1}
                                </span>
                            `}
                            ${!j&&B`
                                <button 
                                    class="icon-btn send-btn" 
                                    type="button"
                                    onClick=${()=>{E_()}}
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
    `}function qY({session:_,onClose:$,onInject:j,onRetry:Z}){let Y=T(null),q=T(null),Q=_?.thinking?c5(_.thinking):"",N=_?.answer?W_(_.answer,null,{sanitize:!1}):"";if(v(()=>{if(Y.current&&Q)V4(Y.current).catch(()=>{})},[Q]),v(()=>{if(q.current&&N)V4(q.current).catch(()=>{})},[N]),!_)return null;let K=_.status==="running",G=Boolean(String(_.answer||"").trim()),V=Boolean(String(_.thinking||"").trim()),X=l9(_),U=n9(_),L=!K&&G,H=K?"Thinking…":_.status==="error"?"Error":"Done";return B`
        <section class="btw-panel" aria-label="BTW side conversation">
            <div class="btw-panel-header">
                <div class="btw-panel-title-wrap">
                    <span class="btw-panel-title">Question</span>
                    <span class=${`btw-panel-status btw-panel-status-${_.status||"idle"}`}>${H}</span>
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
            ${V&&B`
                <details class="btw-block btw-thinking" open=${K?!0:void 0}>
                    <summary>Thinking</summary>
                    <div
                        class="btw-thinking-body post-content"
                        ref=${Y}
                        dangerouslySetInnerHTML=${{__html:Q}}
                    ></div>
                </details>
            `}
            ${X&&B`
                <div class="btw-block btw-answer">
                    <div class="btw-answer-label">Answer</div>
                    <div
                        class="btw-answer-body post-content"
                        ref=${q}
                        dangerouslySetInnerHTML=${{__html:N}}
                    ></div>
                </div>
            `}

            ${U&&B`
                <div class="btw-panel-footer">
                    <div class="btw-panel-footer-left">
                        ${_.question&&B`
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
    `}function QY({widget:_,onClose:$,onWidgetEvent:j}){let Z=T(null),Y=T(!1),q=v0(()=>Nj(_),[_?.artifact?.kind,_?.artifact?.html,_?.artifact?.svg,_?.widgetId,_?.toolCallId,_?.turnId,_?.title]);if(v(()=>{if(!_)return;let W=(D)=>{if(D.key==="Escape")$?.()};return document.addEventListener("keydown",W),()=>document.removeEventListener("keydown",W)},[_,$]),v(()=>{Y.current=!1},[q]),v(()=>{if(!_)return;let W=Z.current;if(!W)return;let D=(c)=>{let x=w8(_),M=c==="widget.init"?P8(_):S8(_);try{W.name=x}catch{}try{W.contentWindow?.postMessage({__piclawGeneratedWidgetHost:!0,type:c,widgetId:_?.widgetId||null,toolCallId:_?.toolCallId||null,turnId:_?.turnId||null,payload:M},"*")}catch{}},E=()=>{D("widget.init"),D("widget.update")},R=()=>{Y.current=!0,E()};W.addEventListener("load",R);let m=[0,40,120,300,800].map((c)=>setTimeout(E,c));return()=>{W.removeEventListener("load",R),m.forEach((c)=>clearTimeout(c))}},[q,_?.widgetId,_?.toolCallId,_?.turnId]),v(()=>{if(!_)return;let W=Z.current;if(!W?.contentWindow)return;let D=w8(_),E=S8(_);try{W.name=D}catch{}try{W.contentWindow.postMessage({__piclawGeneratedWidgetHost:!0,type:"widget.update",widgetId:_?.widgetId||null,toolCallId:_?.toolCallId||null,turnId:_?.turnId||null,payload:E},"*")}catch{}return},[_?.widgetId,_?.toolCallId,_?.turnId,_?.status,_?.subtitle,_?.description,_?.error,_?.width,_?.height,_?.runtimeState]),v(()=>{if(!_)return;let W=(D)=>{let E=D?.data;if(!E||E.__piclawGeneratedWidget!==!0)return;let R=Z.current,P=B_(_),m=B_({widgetId:E.widgetId,toolCallId:E.toolCallId});if(m&&P&&m!==P)return;if(!m&&R?.contentWindow&&D.source!==R.contentWindow)return;j?.(E,_)};return window.addEventListener("message",W),()=>window.removeEventListener("message",W)},[_,j]),!_)return null;let N=(_?.artifact||{}).kind||_?.kind||"html",K=typeof _?.title==="string"&&_.title.trim()?_.title.trim():"Generated widget",G=typeof _?.subtitle==="string"&&_.subtitle.trim()?_.subtitle.trim():"",V=_?.source==="live"?"live":"timeline",X=typeof _?.status==="string"&&_.status.trim()?_.status.trim():"final",U=V==="live"?`Live widget • ${X.toUpperCase()}`:_?.originPostId?`Message #${_.originPostId}`:"Timeline launch",L=typeof _?.description==="string"&&_.description.trim()?_.description.trim():"",H=!q,O=Qj(_),J=Zj(_);return B`
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
                    ${H?B`<div class="floating-widget-empty">${O}</div>`:B`
                            <iframe
                                ref=${Z}
                                class="floating-widget-frame"
                                title=${K}
                                name=${w8(_)}
                                sandbox=${J}
                                referrerpolicy="no-referrer"
                                srcdoc=${q}
                            ></iframe>
                        `}
                </div>
            </section>
        </div>
    `}var NY="PiClaw";function Z3(_,$,j=!1){let Z=_||"PiClaw",Y=Z.charAt(0).toUpperCase(),q=["#FF6B6B","#4ECDC4","#45B7D1","#FFA07A","#98D8C8","#F7DC6F","#BB8FCE","#85C1E2","#F8B195","#6C5CE7","#00B894","#FDCB6E","#E17055","#74B9FF","#A29BFE","#FD79A8","#00CEC9","#FFEAA7","#DFE6E9","#FF7675","#55EFC4","#81ECEC","#FAB1A0","#74B9FF","#A29BFE","#FD79A8"],Q=Y.charCodeAt(0)%q.length,N=q[Q],K=Z.trim().toLowerCase(),G=typeof $==="string"?$.trim():"",V=G?G:null,X=j||K==="PiClaw".toLowerCase()||K==="pi";return{letter:Y,color:N,image:V||(X?"/static/icon-192.png":null)}}function KY(_,$){if(!_)return"PiClaw";let j=$[_]?.name||_;return j?j.charAt(0).toUpperCase()+j.slice(1):"PiClaw"}function GY(_,$){if(!_)return null;let j=$[_]||{};return j.avatar_url||j.avatarUrl||j.avatar||null}function XY(_){if(!_)return null;if(typeof document<"u"){let q=document.documentElement,Q=q?.dataset?.colorTheme||"",N=q?.dataset?.tint||"",K=getComputedStyle(q).getPropertyValue("--accent-color")?.trim();if(K&&(N||Q&&Q!=="default"))return K}let $=["#4ECDC4","#FF6B6B","#45B7D1","#BB8FCE","#FDCB6E","#00B894","#74B9FF","#FD79A8","#81ECEC","#FFA07A"],j=String(_),Z=0;for(let q=0;q<j.length;q+=1)Z=(Z*31+j.charCodeAt(q))%2147483647;let Y=Math.abs(Z)%$.length;return $[Y]}var kG=B`
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <rect x="9" y="9" width="10" height="10" rx="2"></rect>
        <path d="M7 15H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2v1"></path>
    </svg>
`;function Y3({status:_,draft:$,plan:j,thought:Z,pendingRequest:Y,intent:q,extensionPanels:Q=[],pendingPanelActions:N=new Set,onExtensionPanelAction:K,turnId:G,steerQueued:V,onPanelToggle:X,showCorePanels:U=!0,showExtensionPanels:L=!0}){let J=(o)=>{if(!o)return{text:"",totalLines:0,fullText:""};if(typeof o==="string"){let z0=o,E0=z0?z0.replace(/\r\n/g,`
`).split(`
`).length:0;return{text:z0,totalLines:E0,fullText:z0}}let Y0=o.text||"",p=o.fullText||o.full_text||Y0,l=Number.isFinite(o.totalLines)?o.totalLines:p?p.replace(/\r\n/g,`
`).split(`
`).length:0;return{text:Y0,totalLines:l,fullText:p}},W=160,D=(o)=>String(o||"").replace(/<\/?internal>/gi,""),E=(o)=>{if(!o)return 1;return Math.max(1,Math.ceil(o.length/160))},R=(o,Y0,p)=>{let l=(o||"").replace(/\r\n/g,`
`).replace(/\r/g,`
`);if(!l)return{text:"",omitted:0,totalLines:Number.isFinite(p)?p:0,visibleLines:0};let z0=l.split(`
`),E0=z0.length>Y0?z0.slice(0,Y0).join(`
`):l,I0=Number.isFinite(p)?p:z0.reduce((m0,H0)=>m0+E(H0),0),K0=E0?E0.split(`
`).reduce((m0,H0)=>m0+E(H0),0):0,x0=Math.max(I0-K0,0);return{text:E0,omitted:x0,totalLines:I0,visibleLines:K0}},P=J(j),m=J(Z),c=J($),x=Boolean(P.text)||P.totalLines>0,M=Boolean(m.text)||m.totalLines>0,z=Boolean(c.fullText?.trim()||c.text?.trim()),k=Boolean(_||z||x||M||Y||q),u=Array.isArray(Q)&&Q.length>0;if((!U||!k)&&(!L||!u))return null;let[n,b]=g(new Set),[d,i]=g(null),[a,j0]=g(()=>Date.now()),e=(o)=>b((Y0)=>{let p=new Set(Y0),l=!p.has(o);if(l)p.add(o);else p.delete(o);if(typeof X==="function")X(o,l);return p});v(()=>{b(new Set),i(null)},[G]);let N0=M4(_);v(()=>{if(!N0)return;j0(Date.now());let o=setInterval(()=>j0(Date.now()),1000);return()=>clearInterval(o)},[N0,_?.started_at,_?.startedAt]);let U0=_?.turn_id||G,L0=XY(U0),C0=V?"turn-dot turn-dot-queued":"turn-dot",O0=(o)=>o,B0=Boolean(_?.last_activity||_?.lastActivity),u0=(o)=>o==="warning"?"#f59e0b":o==="error"?"var(--danger-color)":o==="success"?"var(--success-color)":L0,J0=q?.kind||"info",y0=u0(J0),b0=u0(_?.kind||(N0?"warning":"info")),F0="",f0=_?.title,Q0=_?.status;if(_?.type==="plan")F0=f0?`Planning: ${f0}`:"Planning...";else if(_?.type==="tool_call")F0=f0?`Running: ${f0}`:"Running tool...";else if(_?.type==="tool_status")F0=f0?`${f0}: ${Q0||"Working..."}`:Q0||"Working...";else if(_?.type==="error")F0=f0||"Agent error";else F0=f0||Q0||"Working...";if(B0)F0="Last activity just now";let M0=({panelTitle:o,text:Y0,fullText:p,totalLines:l,maxLines:z0,titleClass:E0,panelKey:I0})=>{let K0=n.has(I0),x0=p||Y0||"",m0=I0==="thought"||I0==="draft"?D(x0):x0,H0=typeof z0==="number",R0=K0&&H0,D0=H0?R(m0,z0,l):{text:m0||"",omitted:0,totalLines:Number.isFinite(l)?l:0};if(!m0&&!(Number.isFinite(D0.totalLines)&&D0.totalLines>0))return null;let Z0=`agent-thinking-body${H0?" agent-thinking-body-collapsible":""}`,y=H0?`--agent-thinking-collapsed-lines: ${z0};`:"";return B`
            <div
                class="agent-thinking"
                data-expanded=${K0?"true":"false"}
                data-collapsible=${H0?"true":"false"}
                style=${L0?`--turn-color: ${L0};`:""}
            >
                <div class="agent-thinking-title ${E0||""}">
                    ${L0&&B`<span class=${C0} aria-hidden="true"></span>`}
                    ${o}
                    ${R0&&B`
                        <button
                            class="agent-thinking-close"
                            aria-label=${`Close ${o} panel`}
                            onClick=${()=>e(I0)}
                        >
                            ×
                        </button>
                    `}
                </div>
                <div
                    class=${Z0}
                    style=${y}
                    dangerouslySetInnerHTML=${{__html:c5(m0)}}
                />
                ${!K0&&D0.omitted>0&&B`
                    <button class="agent-thinking-truncation" onClick=${()=>e(I0)}>
                        ▸ ${D0.omitted} more lines
                    </button>
                `}
                ${K0&&D0.omitted>0&&B`
                    <button class="agent-thinking-truncation" onClick=${()=>e(I0)}>
                        ▴ show less
                    </button>
                `}
            </div>
        `},l0=Y?.tool_call?.title,i0=l0?`Awaiting approval: ${l0}`:"Awaiting approval",H1=N0?C8(_,a):null,_1=(o,Y0,p=null)=>{let l=T8(o);return B`
            <div
                class="agent-thinking agent-thinking-intent"
                aria-live="polite"
                style=${Y0?`--turn-color: ${Y0};`:""}
                title=${o?.detail||""}
            >
                <div class="agent-thinking-title intent">
                    ${Y0&&B`<span class=${C0} aria-hidden="true"></span>`}
                    <span class="agent-thinking-title-text">${l}</span>
                    ${p&&B`<span class="agent-status-elapsed">${p}</span>`}
                </div>
                ${o.detail&&B`<div class="agent-thinking-body">${o.detail}</div>`}
            </div>
        `},p0=(o,Y0,p,l,z0,E0,I0,K0=8,x0=8)=>{let m0=Math.max(z0-l,0.000000001),H0=Math.max(Y0-K0*2,1),R0=Math.max(p-x0*2,1),D0=Math.max(I0-E0,1),Z0=I0===E0?Y0/2:K0+(o.run-E0)/D0*H0,y=x0+(R0-(o.value-l)/m0*R0);return{x:Z0,y}},j1=(o,Y0,p,l,z0,E0,I0,K0=8,x0=8)=>{if(!Array.isArray(o)||o.length===0)return"";return o.map((m0,H0)=>{let{x:R0,y:D0}=p0(m0,Y0,p,l,z0,E0,I0,K0,x0);return`${H0===0?"M":"L"} ${R0.toFixed(2)} ${D0.toFixed(2)}`}).join(" ")},e0=(o,Y0="")=>{if(!Number.isFinite(o))return"—";return`${Math.abs(o)>=100?o.toFixed(0):o.toFixed(2).replace(/\.0+$/,"").replace(/(\.\d*[1-9])0+$/,"$1")}${Y0}`},r0=["var(--accent-color)","var(--success-color)","var(--warning-color, #f59e0b)","var(--danger-color)"],X0=(o,Y0)=>{let p=r0;if(!Array.isArray(p)||p.length===0)return"var(--accent-color)";if(p.length===1||!Number.isFinite(Y0)||Y0<=1)return p[0];let z0=Math.max(0,Math.min(Number.isFinite(o)?o:0,Y0-1))/Math.max(1,Y0-1)*(p.length-1),E0=Math.floor(z0),I0=Math.min(p.length-1,E0+1),K0=z0-E0,x0=p[E0],m0=p[I0];if(!m0||E0===I0||K0<=0.001)return x0;if(K0>=0.999)return m0;let H0=Math.round((1-K0)*1000)/10,R0=Math.round(K0*1000)/10;return`color-mix(in oklab, ${x0} ${H0}%, ${m0} ${R0}%)`},P0=(o,Y0="autoresearch")=>{let p=Array.isArray(o)?o.map((Z0)=>({...Z0,points:Array.isArray(Z0?.points)?Z0.points.filter((y)=>Number.isFinite(y?.value)&&Number.isFinite(y?.run)):[]})).filter((Z0)=>Z0.points.length>0):[],l=p.map((Z0,y)=>({...Z0,color:X0(y,p.length)}));if(l.length===0)return null;let z0=320,E0=120,I0=l.flatMap((Z0)=>Z0.points),K0=I0.map((Z0)=>Z0.value),x0=I0.map((Z0)=>Z0.run),m0=Math.min(...K0),H0=Math.max(...K0),R0=Math.min(...x0),D0=Math.max(...x0);return B`
            <div class="agent-series-chart agent-series-chart-combined">
                <div class="agent-series-chart-header">
                    <span class="agent-series-chart-title">Tracked variables</span>
                    <span class="agent-series-chart-value">${l.length} series</span>
                </div>
                <div class="agent-series-chart-plot">
                    <svg class="agent-series-chart-svg" viewBox=${`0 0 ${z0} ${E0}`} preserveAspectRatio="none" aria-hidden="true">
                        ${l.map((Z0)=>{let y=Z0?.key||Z0?.label||"series",t=d?.panelKey===Y0&&d?.seriesKey===y;return B`
                                <g key=${y}>
                                    <path
                                        class=${`agent-series-chart-line${t?" is-hovered":""}`}
                                        d=${j1(Z0.points,z0,E0,m0,H0,R0,D0)}
                                        style=${`--agent-series-color: ${Z0.color};`}
                                        onMouseEnter=${()=>i({panelKey:Y0,seriesKey:y})}
                                        onMouseLeave=${()=>i((W0)=>W0?.panelKey===Y0&&W0?.seriesKey===y?null:W0)}
                                    ></path>
                                </g>
                            `})}
                    </svg>
                    <div class="agent-series-chart-points-layer">
                        ${l.flatMap((Z0)=>{let y=typeof Z0?.unit==="string"?Z0.unit:"",t=Z0?.key||Z0?.label||"series";return Z0.points.map((W0,A0)=>{let n0=p0(W0,z0,E0,m0,H0,R0,D0);return B`
                                    <button
                                        key=${`${t}-point-${A0}`}
                                        type="button"
                                        class="agent-series-chart-point-hit"
                                        style=${`--agent-series-color: ${Z0.color}; left:${n0.x/z0*100}%; top:${n0.y/E0*100}%;`}
                                        onMouseEnter=${()=>i({panelKey:Y0,seriesKey:t,run:W0.run,value:W0.value,unit:y})}
                                        onMouseLeave=${()=>i(($1)=>$1?.panelKey===Y0?null:$1)}
                                        onFocus=${()=>i({panelKey:Y0,seriesKey:t,run:W0.run,value:W0.value,unit:y})}
                                        onBlur=${()=>i(($1)=>$1?.panelKey===Y0?null:$1)}
                                        aria-label=${`${Z0?.label||"Series"} ${e0(W0.value,y)} at run ${W0.run}`}
                                    >
                                        <span class="agent-series-chart-point"></span>
                                    </button>
                                `})})}
                    </div>
                </div>
                <div class="agent-series-legend">
                    ${l.map((Z0)=>{let y=Z0.points[Z0.points.length-1]?.value,t=typeof Z0?.unit==="string"?Z0.unit:"",W0=Z0?.key||Z0?.label||"series",A0=d?.panelKey===Y0&&d?.seriesKey===W0?d:null,n0=A0&&Number.isFinite(A0.value)?A0.value:y,$1=A0&&typeof A0.unit==="string"?A0.unit:t,q1=A0&&Number.isFinite(A0.run)?A0.run:null;return B`
                            <div key=${`${W0}-legend`} class=${`agent-series-legend-item${A0?" is-hovered":""}`} style=${`--agent-series-color: ${Z0.color};`}>
                                <span class="agent-series-legend-swatch" style=${`--agent-series-color: ${Z0.color};`}></span>
                                <span class="agent-series-legend-label">${Z0?.label||"Series"}</span>
                                ${q1!==null&&B`<span class="agent-series-legend-run">run ${q1}</span>`}
                                <span class="agent-series-legend-value">${e0(n0,$1)}</span>
                            </div>
                        `})}
                </div>
            </div>
        `},a0=(o)=>{if(!o)return null;let Y0=typeof o?.key==="string"?o.key:`panel-${Math.random()}`,p=n.has(Y0),l=o?.title||"Extension status",z0=o?.collapsed_text||"",E0=String(o?.state||"").replace(/[-_]+/g," ").replace(/^./,(t)=>t.toUpperCase()),I0=u0(o?.state==="completed"?"success":o?.state==="failed"?"error":o?.state==="stopped"?"warning":"info"),K0=typeof o?.detail_markdown==="string"?o.detail_markdown.trim():"",x0=typeof o?.last_run_text==="string"?o.last_run_text.trim():"",m0=typeof o?.tmux_command==="string"?o.tmux_command.trim():"",H0=Array.isArray(o?.series)?o.series:[],R0=Array.isArray(o?.actions)?o.actions:[],D0=Boolean(K0||m0),Z0=Boolean(K0||H0.length>0||m0),y=[l,z0].filter(Boolean).join(" — ");return B`
            <div
                class="agent-thinking agent-thinking-intent agent-thinking-autoresearch"
                aria-live="polite"
                data-expanded=${p?"true":"false"}
                style=${I0?`--turn-color: ${I0};`:""}
                title=${!p?y||l:""}
            >
                <div class="agent-thinking-header agent-thinking-header-inline">
                    <button
                        class="agent-thinking-title intent agent-thinking-title-clickable"
                        type="button"
                        onClick=${()=>Z0?e(Y0):null}
                    >
                        ${I0&&B`<span class=${C0} aria-hidden="true"></span>`}
                        <span class="agent-thinking-title-text">${l}</span>
                        ${z0&&B`<span class="agent-thinking-title-meta">${z0}</span>`}
                    </button>
                    ${(R0.length>0||Z0&&!p)&&B`
                        <div class="agent-thinking-tools-inline">
                            ${R0.length>0&&B`
                                <div class="agent-thinking-actions agent-thinking-actions-inline">
                                    ${R0.map((t)=>{let W0=`${Y0}:${t?.key||""}`,A0=N?.has?.(W0);return B`
                                            <button
                                                key=${W0}
                                                class=${`agent-thinking-action-btn${t?.tone==="danger"?" danger":""}`}
                                                onClick=${()=>K?.(o,t)}
                                                disabled=${Boolean(A0)}
                                            >
                                                ${A0?"Working…":t?.label||"Run"}
                                            </button>
                                        `})}
                                </div>
                            `}
                            ${Z0&&!p&&B`
                                <button
                                    class="agent-thinking-corner-toggle agent-thinking-corner-toggle-inline"
                                    type="button"
                                    aria-label=${`Expand ${l}`}
                                    title="Expand details"
                                    onClick=${()=>e(Y0)}
                                >
                                    <svg viewBox="0 0 16 16" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                        <polyline points="4 10 8 6 12 10"></polyline>
                                    </svg>
                                </button>
                            `}
                        </div>
                    `}
                </div>
                ${Z0&&p&&B`
                    <button
                        class="agent-thinking-corner-toggle"
                        type="button"
                        aria-label=${`Collapse ${l}`}
                        title="Collapse details"
                        onClick=${()=>e(Y0)}
                    >
                        <svg viewBox="0 0 16 16" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                            <polyline points="4 6 8 10 12 6"></polyline>
                        </svg>
                    </button>
                `}
                ${p&&B`
                    <div class=${`agent-thinking-autoresearch-layout${D0?"":" chart-only"}`}>
                        ${D0&&B`
                            <div class="agent-thinking-autoresearch-meta-stack">
                                ${K0&&B`
                                    <div
                                        class="agent-thinking-body agent-thinking-autoresearch-detail"
                                        dangerouslySetInnerHTML=${{__html:c5(K0)}}
                                    />
                                `}
                                ${m0&&B`
                                    <div class="agent-series-chart-command">
                                        <div class="agent-series-chart-command-header">
                                            <span>Attach to session</span>
                                        </div>
                                        <div class="agent-series-chart-command-shell">
                                            <pre class="agent-series-chart-command-code">${m0}</pre>
                                            <button
                                                type="button"
                                                class="agent-series-chart-command-copy"
                                                aria-label="Copy tmux command"
                                                title="Copy tmux command"
                                                onClick=${()=>K?.(o,{key:"copy_tmux",action_type:"autoresearch.copy_tmux",label:"Copy tmux"})}
                                            >
                                                ${kG}
                                            </button>
                                        </div>
                                    </div>
                                `}
                            </div>
                        `}
                        ${H0.length>0?B`
                                <div class="agent-series-chart-stack">
                                    ${P0(H0,Y0)}
                                    ${x0&&B`<div class="agent-series-chart-note">${x0}</div>`}
                                </div>
                            `:B`<div class="agent-thinking-body agent-thinking-autoresearch-summary">Variable history will appear after the first completed run.</div>`}
                    </div>
                `}
            </div>
        `};return B`
        <div class="agent-status-panel">
            ${U&&q&&_1(q,y0)}
            ${L&&Array.isArray(Q)&&Q.map((o)=>a0(o))}
            ${U&&_?.type==="intent"&&_1(_,b0,H1)}
            ${U&&Y&&B`
                <div class="agent-status agent-status-request" aria-live="polite" style=${L0?`--turn-color: ${L0};`:""}>
                    <span class=${C0} aria-hidden="true"></span>
                    <div class="agent-status-spinner"></div>
                    <span class="agent-status-text">${i0}</span>
                </div>
            `}
            ${U&&x&&M0({panelTitle:O0("Planning"),text:P.text,fullText:P.fullText,totalLines:P.totalLines,panelKey:"plan"})}
            ${U&&M&&M0({panelTitle:O0("Thoughts"),text:m.text,fullText:m.fullText,totalLines:m.totalLines,maxLines:8,titleClass:"thought",panelKey:"thought"})}
            ${U&&z&&M0({panelTitle:O0("Draft"),text:c.text,fullText:c.fullText,totalLines:c.totalLines,maxLines:8,titleClass:"thought",panelKey:"draft"})}
            ${U&&_&&_?.type!=="intent"&&B`
                <div class=${`agent-status${B0?" agent-status-last-activity":""}${_?.type==="error"?" agent-status-error":""}`} aria-live="polite" style=${L0?`--turn-color: ${L0};`:""}>
                    ${L0&&B`<span class=${C0} aria-hidden="true"></span>`}
                    ${_?.type==="error"?B`<span class="agent-status-error-icon" aria-hidden="true">⚠</span>`:!B0&&B`<div class="agent-status-spinner"></div>`}
                    <span class="agent-status-text">${F0}</span>
                </div>
            `}
        </div>
    `}function VY({request:_,onRespond:$}){if(!_)return null;let{request_id:j,tool_call:Z,options:Y,chat_jid:q}=_,Q=Z?.title||"Agent Request",N=Z?.kind||"other",K=Z?.rawInput||{},G=K.command||K.commands&&K.commands[0]||null,V=K.diff||null,X=K.fileName||K.path||null,U=Z?.description||K.description||K.explanation||null,H=(Array.isArray(Z?.locations)?Z.locations:[]).map((E)=>E?.path).filter((E)=>Boolean(E)),O=Array.from(new Set([X,...H].filter(Boolean)));console.log("AgentRequestModal:",{request_id:j,tool_call:Z,options:Y});let J=async(E)=>{try{await G8(j,E,q||null),$()}catch(R){console.error("Failed to respond to agent request:",R)}},W=async()=>{try{await k6(Q,`Auto-approved: ${Q}`),await G8(j,"approved",q||null),$()}catch(E){console.error("Failed to add to whitelist:",E)}},D=Y&&Y.length>0;return B`
        <div class="agent-request-modal">
            <div class="agent-request-content">
                <div class="agent-request-header">
                    <div class="agent-request-icon">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                        </svg>
                    </div>
                    <div class="agent-request-title">${Q}</div>
                </div>
                ${(U||G||V||O.length>0)&&B`
                    <div class="agent-request-body">
                        ${U&&B`
                            <div class="agent-request-description">${U}</div>
                        `}
                        ${O.length>0&&B`
                            <div class="agent-request-files">
                                <div class="agent-request-subtitle">Files</div>
                                <ul>
                                    ${O.map((E,R)=>B`<li key=${R}>${E}</li>`)}
                                </ul>
                            </div>
                        `}
                        ${G&&B`
                            <pre class="agent-request-command">${G}</pre>
                        `}
                        ${V&&B`
                            <details class="agent-request-diff">
                                <summary>Proposed diff</summary>
                                <pre>${V}</pre>
                            </details>
                        `}
                    </div>
                `}
                <div class="agent-request-actions">
                    ${D?Y.map((E)=>B`
                            <button 
                                key=${E.optionId||E.id||String(E)}
                                class="agent-request-btn ${E.kind==="allow_once"||E.kind==="allow_always"?"primary":""}"
                                onClick=${()=>J(E.optionId||E.id||E)}
                            >
                                ${E.name||E.label||E.optionId||E.id||String(E)}
                            </button>
                        `):B`
                        <button class="agent-request-btn primary" onClick=${()=>J("approved")}>
                            Allow
                        </button>
                        <button class="agent-request-btn" onClick=${()=>J("denied")}>
                            Deny
                        </button>
                        <button class="agent-request-btn always-allow" onClick=${W}>
                            Always Allow This
                        </button>
                    `}
                </div>
            </div>
        </div>
    `}var MG=new Set(["application/json","application/xml","text/csv","text/html","text/markdown","text/plain","text/xml"]),IG=new Set(["text/markdown"]),xG=new Set(["application/msword","application/rtf","application/vnd.ms-excel","application/vnd.ms-powerpoint","application/vnd.oasis.opendocument.presentation","application/vnd.oasis.opendocument.spreadsheet","application/vnd.oasis.opendocument.text","application/vnd.openxmlformats-officedocument.presentationml.presentation","application/vnd.openxmlformats-officedocument.spreadsheetml.sheet","application/vnd.openxmlformats-officedocument.wordprocessingml.document"]),TG=new Set(["application/vnd.jgraph.mxfile"]);function r5(_){return typeof _==="string"?_.trim().toLowerCase():""}function CG(_){let $=r5(_);return!!$&&($.endsWith(".drawio")||$.endsWith(".drawio.xml")||$.endsWith(".drawio.svg")||$.endsWith(".drawio.png"))}function yG(_){let $=r5(_);return!!$&&$.endsWith(".pdf")}function PG(_){let $=r5(_);return!!$&&($.endsWith(".docx")||$.endsWith(".doc")||$.endsWith(".odt")||$.endsWith(".rtf")||$.endsWith(".xlsx")||$.endsWith(".xls")||$.endsWith(".ods")||$.endsWith(".pptx")||$.endsWith(".ppt")||$.endsWith(".odp"))}function o5(_,$){let j=r5(_);if(CG($)||TG.has(j))return"drawio";if(yG($)||j==="application/pdf")return"pdf";if(PG($)||xG.has(j))return"office";if(!j)return"unsupported";if(j.startsWith("image/"))return"image";if(MG.has(j)||j.startsWith("text/"))return"text";return"unsupported"}function UY(_){let $=r5(_);return IG.has($)}function LY(_){switch(_){case"image":return"Image preview";case"pdf":return"PDF preview";case"office":return"Office viewer";case"drawio":return"Draw.io preview (read-only)";case"text":return"Text preview";default:return"Preview unavailable"}}function SG(_){let j=String(_||"").trim().match(/^#([0-9a-f]{3}|[0-9a-f]{6})$/i);if(!j)return null;let Z=j[1].length===3?j[1].split("").map((Y)=>`${Y}${Y}`).join(""):j[1];return{r:parseInt(Z.slice(0,2),16),g:parseInt(Z.slice(2,4),16),b:parseInt(Z.slice(4,6),16)}}function wG(_){let j=String(_||"").trim().match(/^rgba?\((\d+)[,\s]+(\d+)[,\s]+(\d+)/i);if(!j)return null;let Z=Number(j[1]),Y=Number(j[2]),q=Number(j[3]);if(![Z,Y,q].every((Q)=>Number.isFinite(Q)))return null;return{r:Z,g:Y,b:q}}function WY(_){return SG(_)||wG(_)}function n8(_){let $=(q)=>{let Q=q/255;return Q<=0.03928?Q/12.92:((Q+0.055)/1.055)**2.4},j=$(_.r),Z=$(_.g),Y=$(_.b);return 0.2126*j+0.7152*Z+0.0722*Y}function RG(_,$){let j=Math.max(n8(_),n8($)),Z=Math.min(n8(_),n8($));return(j+0.05)/(Z+0.05)}function uG(_,$,j="#ffffff"){let Z=WY(_);if(!Z)return j;let Y=j,q=-1;for(let Q of $){let N=WY(Q);if(!N)continue;let K=RG(Z,N);if(K>q)Y=Q,q=K}return Y}function q3(){let _=getComputedStyle(document.documentElement),$=(H,O)=>{for(let J of H){let W=_.getPropertyValue(J).trim();if(W)return W}return O},j=$(["--text-primary","--color-text"],"#0f1419"),Z=$(["--text-secondary","--color-text-muted"],"#536471"),Y=$(["--bg-primary","--color-bg-primary"],"#ffffff"),q=$(["--bg-secondary","--color-bg-secondary"],"#f7f9fa"),Q=$(["--bg-hover","--bg-tertiary","--color-bg-tertiary"],"#e8ebed"),N=$(["--accent-color","--color-accent"],"#1d9bf0"),K=$(["--success-color","--color-success"],"#00ba7c"),G=$(["--warning-color","--color-warning","--accent-color"],"#f0b429"),V=$(["--danger-color","--color-error"],"#f4212e"),X=$(["--border-color","--color-border"],"#eff3f4"),U=$(["--font-family"],"system-ui, sans-serif"),L=uG(N,[j,Y],j);return{fg:j,fgMuted:Z,bgPrimary:Y,bg:q,bgEmphasis:Q,accent:N,good:K,warning:G,attention:V,border:X,fontFamily:U,buttonTextColor:L}}function BY(){let{fg:_,fgMuted:$,bg:j,bgEmphasis:Z,accent:Y,good:q,warning:Q,attention:N,border:K,fontFamily:G}=q3();return{fontFamily:G,containerStyles:{default:{backgroundColor:j,foregroundColors:{default:{default:_,subtle:$},accent:{default:Y,subtle:Y},good:{default:q,subtle:q},warning:{default:Q,subtle:Q},attention:{default:N,subtle:N}}},emphasis:{backgroundColor:Z,foregroundColors:{default:{default:_,subtle:$},accent:{default:Y,subtle:Y},good:{default:q,subtle:q},warning:{default:Q,subtle:Q},attention:{default:N,subtle:N}}}},actions:{actionsOrientation:"horizontal",actionAlignment:"left",buttonSpacing:8,maxActions:5,showCard:{actionMode:"inline"},spacing:"default"},adaptiveCard:{allowCustomStyle:!1},spacing:{small:4,default:8,medium:12,large:16,extraLarge:24,padding:12},separator:{lineThickness:1,lineColor:K},fontSizes:{small:12,default:14,medium:16,large:18,extraLarge:22},fontWeights:{lighter:300,default:400,bolder:600},imageSizes:{small:40,medium:80,large:120},textBlock:{headingLevel:2}}}var fG=new Set(["1.0","1.1","1.2","1.3","1.4","1.5","1.6"]),zY=!1,d8=null,FY=!1;function Q3(_){_.querySelector(".adaptive-card-notice")?.remove()}function vG(_,$,j="error"){Q3(_);let Z=document.createElement("div");Z.className=`adaptive-card-notice adaptive-card-notice-${j}`,Z.textContent=$,_.appendChild(Z)}function bG(_,$=(j)=>W_(j,null)){let j=typeof _==="string"?_:String(_??"");if(!j.trim())return{outputHtml:"",didProcess:!1};return{outputHtml:$(j),didProcess:!0}}function gG(_=($)=>W_($,null)){return($,j)=>{try{let Z=bG($,_);j.outputHtml=Z.outputHtml,j.didProcess=Z.didProcess}catch(Z){console.error("[adaptive-card] Failed to process markdown:",Z),j.outputHtml=String($??""),j.didProcess=!1}}}function mG(_){if(FY||!_?.AdaptiveCard)return;_.AdaptiveCard.onProcessMarkdown=gG(),FY=!0}async function pG(){if(zY)return;if(d8)return d8;return d8=new Promise((_,$)=>{let j=document.createElement("script");j.src="/static/js/vendor/adaptivecards.min.js",j.onload=()=>{zY=!0,_()},j.onerror=()=>$(Error("Failed to load adaptivecards SDK")),document.head.appendChild(j)}),d8}function hG(){return globalThis.AdaptiveCards}function cG(_){if(!_||typeof _!=="object")return!1;let $=_;return $.type==="adaptive_card"&&typeof $.card_id==="string"&&typeof $.schema_version==="string"&&typeof $.payload==="object"&&$.payload!==null}function lG(_){return fG.has(_)}function K3(_){if(!Array.isArray(_))return[];return _.filter(cG)}function nG(_){let $=(typeof _?.getJsonTypeName==="function"?_.getJsonTypeName():"")||_?.constructor?.name||"Unknown",j=(typeof _?.title==="string"?_.title:"")||"",Z=(typeof _?.url==="string"?_.url:"")||void 0,Y=_?.data??void 0;return{type:$,title:j,data:Y,url:Z,raw:_}}function N3(_){if(_==null)return"";if(typeof _==="string")return _.trim();if(typeof _==="number")return String(_);if(typeof _==="boolean")return _?"yes":"no";if(Array.isArray(_))return _.map(($)=>N3($)).filter(Boolean).join(", ");if(typeof _==="object")return Object.entries(_).map(([j,Z])=>`${j}: ${N3(Z)}`).filter((j)=>!j.endsWith(": ")).join(", ");return String(_).trim()}function dG(_,$,j){if($==null)return $;if(_==="Input.Toggle"){if(typeof $==="boolean"){if($)return j?.valueOn??"true";return j?.valueOff??"false"}return typeof $==="string"?$:String($)}if(_==="Input.ChoiceSet"){if(Array.isArray($))return $.join(",");return typeof $==="string"?$:String($)}if(Array.isArray($))return $.join(", ");if(typeof $==="object")return N3($);return typeof $==="string"?$:String($)}function iG(_,$){if(!_||typeof _!=="object")return _;if(!$||typeof $!=="object"||Array.isArray($))return _;let j=$,Z=(Y)=>{if(Array.isArray(Y))return Y.map((N)=>Z(N));if(!Y||typeof Y!=="object")return Y;let Q={...Y};if(typeof Q.id==="string"&&Q.id in j&&String(Q.type||"").startsWith("Input."))Q.value=dG(Q.type,j[Q.id],Q);for(let[N,K]of Object.entries(Q))if(Array.isArray(K)||K&&typeof K==="object")Q[N]=Z(K);return Q};return Z(_)}function rG(_){_.classList.add("adaptive-card-readonly");for(let $ of Array.from(_.querySelectorAll("input, textarea, select, button"))){let j=$;try{j.setAttribute("aria-disabled","true")}catch{}try{j.setAttribute("tabindex","-1")}catch{}if("disabled"in j)try{j.disabled=!0}catch{}if("readOnly"in j)try{j.readOnly=!0}catch{}}}function oG(_){if(typeof _!=="string"||!_.trim())return"";let $=new Date(_);if(Number.isNaN($.getTime()))return"";return new Intl.DateTimeFormat(void 0,{month:"short",day:"numeric",hour:"numeric",minute:"2-digit"}).format($)}function sG(_){if(_.state==="active")return null;let $=_.state==="completed"?"Submitted":_.state==="cancelled"?"Cancelled":"Failed",j=_.last_submission&&typeof _.last_submission==="object"?_.last_submission:null,Z=j&&typeof j.title==="string"?j.title.trim():"",Y=oG(_.completed_at||j?.submitted_at),q=[Z||null,Y||null].filter(Boolean).join(" · ")||null;return{label:$,detail:q}}async function HY(_,$,j){if(!lG($.schema_version))return console.warn(`[adaptive-card] Unsupported schema version ${$.schema_version} for card ${$.card_id}`),!1;try{await pG()}catch(Z){return console.error("[adaptive-card] Failed to load SDK:",Z),!1}try{let Z=hG();mG(Z);let Y=new Z.AdaptiveCard,q=q3();Y.hostConfig=new Z.HostConfig(BY());let Q=$.last_submission&&typeof $.last_submission==="object"?$.last_submission.data:void 0,N=$.state==="active"?$.payload:iG($.payload,Q);Y.parse(N),Y.onExecuteAction=(V)=>{let X=nG(V);if(j?.onAction)Q3(_),_.classList.add("adaptive-card-busy"),Promise.resolve(j.onAction(X)).catch((U)=>{console.error("[adaptive-card] Action failed:",U);let L=U instanceof Error?U.message:String(U||"Action failed.");vG(_,L||"Action failed.","error")}).finally(()=>{_.classList.remove("adaptive-card-busy")});else console.log("[adaptive-card] Action executed (not wired yet):",X)};let K=Y.render();if(!K)return console.warn(`[adaptive-card] Card ${$.card_id} rendered to null`),!1;_.classList.add("adaptive-card-container"),_.style.setProperty("--adaptive-card-button-text-color",q.buttonTextColor);let G=sG($);if(G){_.classList.add("adaptive-card-finished");let V=document.createElement("div");V.className=`adaptive-card-status adaptive-card-status-${$.state}`;let X=document.createElement("span");if(X.className="adaptive-card-status-label",X.textContent=G.label,V.appendChild(X),G.detail){let U=document.createElement("span");U.className="adaptive-card-status-detail",U.textContent=G.detail,V.appendChild(U)}_.appendChild(V)}if(Q3(_),_.appendChild(K),G)rG(K);return!0}catch(Z){return console.error(`[adaptive-card] Failed to render card ${$.card_id}:`,Z),!1}}function s5(_){if(_==null)return"";if(typeof _==="string")return _.trim();if(typeof _==="number")return String(_);if(typeof _==="boolean")return _?"yes":"no";if(Array.isArray(_))return _.map(($)=>s5($)).filter(Boolean).join(", ");if(typeof _==="object")return Object.entries(_).filter(([$])=>!$.startsWith("__")).map(([$,j])=>`${$}: ${s5(j)}`).filter(($)=>!$.endsWith(": ")).join(", ");return String(_).trim()}function JY(_){if(typeof _!=="object"||_==null||Array.isArray(_))return[];return Object.entries(_).filter(([$])=>!$.startsWith("__")).map(([$,j])=>({key:$,value:s5(j)})).filter(($)=>$.value)}function aG(_){if(!_||typeof _!=="object")return!1;let $=_;return $.type==="adaptive_card_submission"&&typeof $.card_id==="string"&&typeof $.source_post_id==="number"&&typeof $.submitted_at==="string"}function G3(_){if(!Array.isArray(_))return[];return _.filter(aG)}function OY(_){let $=String(_.title||_.card_id||"card").trim()||"card",j=_.data;if(j==null)return`Card submission: ${$}`;if(typeof j==="string"||typeof j==="number"||typeof j==="boolean"){let Z=s5(j);return Z?`Card submission: ${$} — ${Z}`:`Card submission: ${$}`}if(typeof j==="object"){let Y=JY(j).map(({key:q,value:Q})=>`${q}: ${Q}`);return Y.length>0?`Card submission: ${$} — ${Y.join(", ")}`:`Card submission: ${$}`}return`Card submission: ${$}`}function DY(_){let $=String(_.title||_.card_id||"Card submission").trim()||"Card submission",j=JY(_.data),Z=j.length>0?j.slice(0,2).map(({key:q,value:Q})=>`${q}: ${Q}`).join(", "):s5(_.data)||null,Y=j.length;return{title:$,summary:Z,fields:j,fieldCount:Y,submittedAt:_.submitted_at}}function O5({children:_,className:$=""}){let j=T(null);return v(()=>{if(typeof document>"u")return;let Z=document.createElement("div");if($)Z.className=$;return document.body.appendChild(Z),j.current=Z,()=>{try{D4(null,Z)}finally{if(Z.remove(),j.current===Z)j.current=null}}},[$]),I5(()=>{let Z=j.current;if(!Z)return;return D4(_,Z),()=>{D4(null,Z)}},[_]),null}function tG(_){let $=_?.metadata?.size;return[{label:"Type",value:_?.content_type||"application/octet-stream"},{label:"Size",value:typeof $==="number"?I_($):null},{label:"Added",value:_?.created_at?c4(_.created_at):null}].filter((Z)=>Z.value)}function eG(_,$,j){let Z=encodeURIComponent($||`attachment-${_}`),Y=encodeURIComponent(String(_));if(j==="pdf")return`/pdf-viewer/?media=${Y}&name=${Z}#media=${Y}&name=${Z}`;if(j==="office"){let q=M_(_);return`/office-viewer/?url=${encodeURIComponent(q)}&name=${Z}`}if(j==="drawio")return`/drawio/edit.html?media=${Y}&name=${Z}&readonly=1#media=${Y}&name=${Z}&readonly=1`;return null}function AY({mediaId:_,info:$,onClose:j}){let Z=$?.filename||`attachment-${_}`,Y=v0(()=>o5($?.content_type,Z),[$?.content_type,Z]),q=LY(Y),Q=v0(()=>UY($?.content_type),[$?.content_type]),[N,K]=g(Y==="text"),[G,V]=g(""),[X,U]=g(null),L=T(null),H=v0(()=>tG($),[$]),O=v0(()=>eG(_,Z,Y),[_,Z,Y]),J=v0(()=>{if(!Q||!G)return"";return W_(G)},[Q,G]);return v(()=>{let W=(D)=>{if(D.key==="Escape")j()};return document.addEventListener("keydown",W),()=>document.removeEventListener("keydown",W)},[j]),v(()=>{if(!L.current||!J)return;V4(L.current);return},[J]),v(()=>{let W=!1;async function D(){if(Y!=="text"){K(!1),U(null);return}K(!0),U(null);try{let E=await T6(_);if(!W)V(E)}catch{if(!W)U("Failed to load text preview.")}finally{if(!W)K(!1)}}return D(),()=>{W=!0}},[_,Y]),B`
        <${O5} className="attachment-preview-portal-root">
            <div class="image-modal attachment-preview-modal" onClick=${j}>
                <div class="attachment-preview-shell" onClick=${(W)=>{W.stopPropagation()}}>
                    <div class="attachment-preview-header">
                        <div class="attachment-preview-heading">
                            <div class="attachment-preview-title">${Z}</div>
                            <div class="attachment-preview-subtitle">${q}</div>
                        </div>
                        <div class="attachment-preview-header-actions">
                            ${O&&B`
                                <a
                                    href=${O}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    class="attachment-preview-download"
                                    onClick=${(W)=>W.stopPropagation()}
                                >
                                    Open in Tab
                                </a>
                            `}
                            <a
                                href=${M_(_)}
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
                        ${N&&B`<div class="attachment-preview-state">Loading preview…</div>`}
                        ${!N&&X&&B`<div class="attachment-preview-state">${X}</div>`}
                        ${!N&&!X&&Y==="image"&&B`
                            <img class="attachment-preview-image" src=${M_(_)} alt=${Z} />
                        `}
                        ${!N&&!X&&(Y==="pdf"||Y==="office"||Y==="drawio")&&O&&B`
                            <iframe class="attachment-preview-frame" src=${O} title=${Z}></iframe>
                        `}
                        ${!N&&!X&&Y==="drawio"&&B`
                            <div class="attachment-preview-readonly-note">Draw.io preview is read-only. Editing tools are disabled in this preview.</div>
                        `}
                        ${!N&&!X&&Y==="text"&&Q&&B`
                            <div
                                ref=${L}
                                class="attachment-preview-markdown post-content"
                                dangerouslySetInnerHTML=${{__html:J}}
                            />
                        `}
                        ${!N&&!X&&Y==="text"&&!Q&&B`
                            <pre class="attachment-preview-text">${G}</pre>
                        `}
                        ${!N&&!X&&Y==="unsupported"&&B`
                            <div class="attachment-preview-state">
                                Preview is not available for this file type yet. You can still download it directly.
                            </div>
                        `}
                    </div>
                    <div class="attachment-preview-meta">
                        ${H.map((W)=>B`
                            <div class="attachment-preview-meta-item" key=${W.label}>
                                <span class="attachment-preview-meta-label">${W.label}</span>
                                <span class="attachment-preview-meta-value">${W.value}</span>
                            </div>
                        `)}
                    </div>
                </div>
            </div>
        </${O5}>
    `}function EY({src:_,onClose:$}){return v(()=>{let j=(Z)=>{if(Z.key==="Escape")$()};return document.addEventListener("keydown",j),()=>document.removeEventListener("keydown",j)},[$]),B`
        <${O5} className="image-modal-portal-root">
            <div class="image-modal" onClick=${$}>
                <img src=${_} alt="Full size" />
            </div>
        </${O5}>
    `}function _X({mediaId:_,onPreview:$}){let[j,Z]=g(null);if(v(()=>{q5(_).then(Z).catch(()=>{})},[_]),!j)return null;let Y=j.filename||"file",q=j.metadata?.size,Q=q?I_(q):"",K=o5(j.content_type,j.filename)==="unsupported"?"Details":"Preview";return B`
        <div class="file-attachment" onClick=${(G)=>G.stopPropagation()}>
            <a href=${M_(_)} download=${Y} class="file-attachment-main">
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
                        ${Q&&B`<span class="file-size">${Q}</span>`}
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
    `}function $X({attachment:_,onPreview:$}){let j=Number(_?.id),[Z,Y]=g(null);v(()=>{if(!Number.isFinite(j))return;q5(j).then(Y).catch(()=>{});return},[j]);let q=Z?.filename||_.label||`attachment-${_.id}`,Q=Number.isFinite(j)?M_(j):null,K=o5(Z?.content_type,Z?.filename||_?.label)==="unsupported"?"Details":"Preview";return B`
        <span class="attachment-pill" title=${q}>
            ${Q?B`
                    <a href=${Q} download=${q} class="attachment-pill-main" onClick=${(G)=>G.stopPropagation()}>
                        <${g_}
                            prefix="post"
                            label=${_.label}
                            title=${q}
                        />
                    </a>
                `:B`
                    <${g_}
                        prefix="post"
                        label=${_.label}
                        title=${q}
                    />
                `}
            ${Number.isFinite(j)&&Z&&B`
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
    `}function i8({annotations:_}){if(!_)return null;let{audience:$,priority:j,lastModified:Z}=_,Y=Z?c4(Z):null;return B`
        <div class="content-annotations">
            ${$&&$.length>0&&B`
                <span class="content-annotation">Audience: ${$.join(", ")}</span>
            `}
            ${typeof j==="number"&&B`
                <span class="content-annotation">Priority: ${j}</span>
            `}
            ${Y&&B`
                <span class="content-annotation">Updated: ${Y}</span>
            `}
        </div>
    `}function jX({block:_}){let $=_.title||_.name||_.uri,j=_.description,Z=_.size?I_(_.size):"",Y=_.mime_type||"",q=qX(Y),Q=h4(_.uri);return B`
        <a
            href=${Q||"#"}
            class="resource-link"
            target=${Q?"_blank":void 0}
            rel=${Q?"noopener noreferrer":void 0}
            onClick=${(N)=>N.stopPropagation()}>
            <div class="resource-link-main">
                <div class="resource-link-header">
                    <span class="resource-link-icon-inline">${q}</span>
                    <div class="resource-link-title">${$}</div>
                </div>
                ${j&&B`<div class="resource-link-description">${j}</div>`}
                <div class="resource-link-meta">
                    ${Y&&B`<span>${Y}</span>`}
                    ${Z&&B`<span>${Z}</span>`}
                </div>
            </div>
            <div class="resource-link-icon">↗</div>
        </a>
    `}function ZX({block:_}){let[$,j]=g(!1),Z=_.uri||"Embedded resource",Y=_.text||"",q=Boolean(_.data),Q=_.mime_type||"";return B`
        <div class="resource-embed">
            <button class="resource-embed-toggle" onClick=${(N)=>{N.preventDefault(),N.stopPropagation(),j(!$)}}>
                ${$?"▼":"▶"} ${Z}
            </button>
            ${$&&B`
                ${Y&&B`<pre class="resource-embed-content">${Y}</pre>`}
                ${q&&B`
                    <div class="resource-embed-blob">
                        <span class="resource-embed-blob-label">Embedded blob</span>
                        ${Q&&B`<span class="resource-embed-blob-meta">${Q}</span>`}
                        <button class="resource-embed-blob-btn" onClick=${(N)=>{N.preventDefault(),N.stopPropagation();let K=new Blob([Uint8Array.from(atob(_.data),(X)=>X.charCodeAt(0))],{type:Q||"application/octet-stream"}),G=URL.createObjectURL(K),V=document.createElement("a");V.href=G,V.download=Z.split("/").pop()||"resource",V.click(),URL.revokeObjectURL(G)}}>Download</button>
                    </div>
                `}
            `}
        </div>
    `}function YX({block:_,post:$,onOpenWidget:j}){if(!_)return null;let Z=f$(_,$),Y=$j(_),q=Z?.artifact?.kind||_?.artifact?.kind||_?.kind||null,Q=Z?.title||_.title||_.name||"Generated widget",N=Z?.description||_.description||_.subtitle||"",K=_.open_label||"Open widget",G=(V)=>{if(V.preventDefault(),V.stopPropagation(),!Z)return;j?.(Z)};return B`
        <div class="generated-widget-launch" onClick=${(V)=>V.stopPropagation()}>
            <div class="generated-widget-launch-header">
                <div class="generated-widget-launch-eyebrow">Generated widget${q?` • ${String(q).toUpperCase()}`:""}</div>
                <div class="generated-widget-launch-title">${Q}</div>
            </div>
            ${N&&B`<div class="generated-widget-launch-description">${N}</div>`}
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
    `}function qX(_){if(!_)return"\uD83D\uDCCE";if(_.startsWith("image/"))return"\uD83D\uDDBC️";if(_.startsWith("audio/"))return"\uD83C\uDFB5";if(_.startsWith("video/"))return"\uD83C\uDFAC";if(_.includes("pdf"))return"\uD83D\uDCC4";if(_.includes("zip")||_.includes("gzip"))return"\uD83D\uDDDC️";if(_.startsWith("text/"))return"\uD83D\uDCC4";return"\uD83D\uDCCE"}function QX({preview:_}){let $=h4(_.url),j=h4(_.image,{allowDataImage:!0}),Z=j?`background-image: url('${j}')`:"",Y=_.site_name;if(!Y&&$)try{Y=new URL($).hostname}catch{Y=$}return B`
        <a
            href=${$||"#"}
            class="link-preview ${j?"has-image":""}"
            target=${$?"_blank":void 0}
            rel=${$?"noopener noreferrer":void 0}
            onClick=${(q)=>q.stopPropagation()}
            style=${Z}>
            <div class="link-preview-overlay">
                <div class="link-preview-site">${Y||""}</div>
                <div class="link-preview-title">${_.title}</div>
                ${_.description&&B`
                    <div class="link-preview-description">${_.description}</div>
                `}
            </div>
        </a>
    `}function NX(_,$){return typeof _==="string"?_:""}var KX=1800,GX=`
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <rect x="9" y="9" width="10" height="10" rx="2"></rect>
        <path d="M7 15H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2v1"></path>
    </svg>`,XX=`
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <path d="M20 6L9 17l-5-5"></path>
    </svg>`,VX=`
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <circle cx="12" cy="12" r="9"></circle>
        <path d="M9 9l6 6M15 9l-6 6"></path>
    </svg>`;async function UX(_){let $=typeof _==="string"?_:"";if(!$)return!1;if(navigator.clipboard?.writeText)try{return await navigator.clipboard.writeText($),!0}catch{}try{let j=document.createElement("textarea");j.value=$,j.setAttribute("readonly",""),j.style.position="fixed",j.style.opacity="0",j.style.pointerEvents="none",document.body.appendChild(j),j.select(),j.setSelectionRange(0,j.value.length);let Z=document.execCommand("copy");return document.body.removeChild(j),Z}catch{return!1}}function LX(_){if(!_)return()=>{};let $=Array.from(_.querySelectorAll("pre")).filter((q)=>q.querySelector("code"));if($.length===0)return()=>{};let j=new Map,Z=[],Y=(q,Q)=>{let N=Q||"idle";if(q.dataset.copyState=N,N==="success")q.innerHTML=XX,q.setAttribute("aria-label","Copied"),q.setAttribute("title","Copied"),q.classList.add("is-success"),q.classList.remove("is-error");else if(N==="error")q.innerHTML=VX,q.setAttribute("aria-label","Copy failed"),q.setAttribute("title","Copy failed"),q.classList.add("is-error"),q.classList.remove("is-success");else q.innerHTML=GX,q.setAttribute("aria-label","Copy code"),q.setAttribute("title","Copy code"),q.classList.remove("is-success","is-error")};return $.forEach((q)=>{let Q=document.createElement("div");Q.className="post-code-block",q.parentNode?.insertBefore(Q,q),Q.appendChild(q);let N=document.createElement("button");N.type="button",N.className="post-code-copy-btn",Y(N,"idle"),Q.appendChild(N);let K=async(G)=>{G.preventDefault(),G.stopPropagation();let X=q.querySelector("code")?.textContent||"",U=await UX(X);Y(N,U?"success":"error");let L=j.get(N);if(L)clearTimeout(L);let H=setTimeout(()=>{Y(N,"idle"),j.delete(N)},KX);j.set(N,H)};N.addEventListener("click",K),Z.push(()=>{N.removeEventListener("click",K);let G=j.get(N);if(G)clearTimeout(G);if(Q.parentNode)Q.parentNode.insertBefore(q,Q),Q.remove()})}),()=>{Z.forEach((q)=>q())}}function WX(_){if(!_)return{content:_,fileRefs:[]};let j=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),Z=-1;for(let G=0;G<j.length;G+=1)if(j[G].trim()==="Files:"&&j[G+1]&&/^\s*-\s+/.test(j[G+1])){Z=G;break}if(Z===-1)return{content:_,fileRefs:[]};let Y=[],q=Z+1;for(;q<j.length;q+=1){let G=j[q];if(/^\s*-\s+/.test(G))Y.push(G.replace(/^\s*-\s+/,"").trim());else if(!G.trim())break;else break}if(Y.length===0)return{content:_,fileRefs:[]};let Q=j.slice(0,Z),N=j.slice(q),K=[...Q,...N].join(`
`);return K=K.replace(/\n{3,}/g,`

`).trim(),{content:K,fileRefs:Y}}function BX(_){if(!_)return{content:_,messageRefs:[]};let j=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),Z=-1;for(let G=0;G<j.length;G+=1)if(j[G].trim()==="Referenced messages:"&&j[G+1]&&/^\s*-\s+/.test(j[G+1])){Z=G;break}if(Z===-1)return{content:_,messageRefs:[]};let Y=[],q=Z+1;for(;q<j.length;q+=1){let G=j[q];if(/^\s*-\s+/.test(G)){let X=G.replace(/^\s*-\s+/,"").trim().match(/^message:(\S+)$/i);if(X)Y.push(X[1])}else if(!G.trim())break;else break}if(Y.length===0)return{content:_,messageRefs:[]};let Q=j.slice(0,Z),N=j.slice(q),K=[...Q,...N].join(`
`);return K=K.replace(/\n{3,}/g,`

`).trim(),{content:K,messageRefs:Y}}function zX(_){if(!_)return{content:_,attachments:[]};let j=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),Z=-1;for(let G=0;G<j.length;G+=1){let V=j[G].trim();if((V==="Images:"||V==="Attachments:")&&j[G+1]&&/^\s*-\s+/.test(j[G+1])){Z=G;break}}if(Z===-1)return{content:_,attachments:[]};let Y=[],q=Z+1;for(;q<j.length;q+=1){let G=j[q];if(/^\s*-\s+/.test(G)){let V=G.replace(/^\s*-\s+/,"").trim(),X=V.match(/^attachment:([^\s)]+)\s*(?:\((.+)\))?$/i)||V.match(/^attachment:([^\s]+)\s+(.+)$/i);if(X){let U=X[1],L=(X[2]||"").trim()||U;Y.push({id:U,label:L,raw:V})}else Y.push({id:null,label:V,raw:V})}else if(!G.trim())break;else break}if(Y.length===0)return{content:_,attachments:[]};let Q=j.slice(0,Z),N=j.slice(q),K=[...Q,...N].join(`
`);return K=K.replace(/\n{3,}/g,`

`).trim(),{content:K,attachments:Y}}function FX(_){return _.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function HX(_,$){if(!_||!$)return _;let j=String($).trim().split(/\s+/).filter(Boolean);if(j.length===0)return _;let Z=j.map(FX).sort((V,X)=>X.length-V.length),Y=new RegExp(`(${Z.join("|")})`,"gi"),q=new RegExp(`^(${Z.join("|")})$`,"i"),Q=new DOMParser().parseFromString(_,"text/html"),N=Q.createTreeWalker(Q.body,NodeFilter.SHOW_TEXT),K=[],G;while(G=N.nextNode())K.push(G);for(let V of K){let X=V.nodeValue;if(!X||!Y.test(X)){Y.lastIndex=0;continue}Y.lastIndex=0;let U=V.parentElement;if(U&&U.closest("code, pre, script, style"))continue;let L=X.split(Y).filter((O)=>O!=="");if(L.length===0)continue;let H=Q.createDocumentFragment();for(let O of L)if(q.test(O)){let J=Q.createElement("mark");J.className="search-highlight-term",J.textContent=O,H.appendChild(J)}else H.appendChild(Q.createTextNode(O));V.parentNode.replaceChild(H,V)}return Q.body.innerHTML}function kY({post:_,onClick:$,onHashtagClick:j,onMessageRef:Z,onScrollToMessage:Y,agentName:q,agentAvatarUrl:Q,userName:N,userAvatarUrl:K,userAvatarBackground:G,onDelete:V,isThreadReply:X,isThreadPrev:U,isThreadNext:L,isRemoving:H,highlightQuery:O,onFileRef:J,onOpenWidget:W}){let[D,E]=g(null),R=T(null),P=_.data,m=P.type==="agent_response",c=N||"You",x=m?q||NY:c,M=m?Z3(q,Q,!0):Z3(c,K),z=typeof G==="string"?G.trim().toLowerCase():"",k=!m&&M.image&&(z==="clear"||z==="transparent"),u=m&&Boolean(M.image),n=`background-color: ${k||u?"transparent":M.color}`,b=P.content_meta,d=Boolean(b?.truncated),i=Boolean(b?.preview),a=d&&!i,j0=d?{originalLength:Number.isFinite(b?.original_length)?b.original_length:P.content?P.content.length:0,maxLength:Number.isFinite(b?.max_length)?b.max_length:0}:null,e=P.content_blocks||[],N0=P.media_ids||[],U0=NX(P.content,P.link_previews),{content:L0,fileRefs:C0}=WX(U0),{content:O0,messageRefs:B0}=BX(L0),{content:u0,attachments:J0}=zX(O0);U0=u0;let y0=K3(e),b0=G3(e),F0=y0.length===1&&typeof y0[0]?.fallback_text==="string"?y0[0].fallback_text.trim():"",f0=b0.length===1?OY(b0[0]).trim():"",Q0=Boolean(F0)&&U0?.trim()===F0||Boolean(f0)&&U0?.trim()===f0,M0=Boolean(U0)&&!a&&!Q0,l0=typeof O==="string"?O.trim():"",i0=v0(()=>{if(!U0||Q0)return"";let y=W_(U0,j);return l0?HX(y,l0):y},[U0,Q0,l0]),H1=(y,t)=>{y.stopPropagation(),E(M_(t))},[_1,p0]=g(null),j1=(y)=>{p0(y)},e0=(y)=>{y.stopPropagation(),V?.(_)},r0=(y,t)=>{let W0=new Set;if(!y||t.length===0)return{content:y,usedIds:W0};return{content:y.replace(/attachment:([^\s)"']+)/g,(n0,$1,q1,J1)=>{let p1=$1.replace(/^\/+/,""),o1=t.find((h1)=>h1.name&&h1.name.toLowerCase()===p1.toLowerCase()&&!W0.has(h1.id))||t.find((h1)=>!W0.has(h1.id));if(!o1)return n0;if(W0.add(o1.id),J1.slice(Math.max(0,q1-2),q1)==="](")return`/media/${o1.id}`;return o1.name||"attachment"}),usedIds:W0}},X0=[],P0=[],a0=[],o=[],Y0=[],p=[],l=[],z0=0;if(e.length>0)e.forEach((y)=>{if(y?.type==="text"&&y.annotations)l.push(y.annotations);if(y?.type==="generated_widget")p.push(y);else if(y?.type==="resource_link")o.push(y);else if(y?.type==="resource")Y0.push(y);else if(y?.type==="file"){let t=N0[z0++];if(t)P0.push(t),a0.push({id:t,name:y?.name||y?.filename||y?.title})}else if(y?.type==="image"||!y?.type){let t=N0[z0++];if(t){let W0=typeof y?.mime_type==="string"?y.mime_type:void 0;X0.push({id:t,annotations:y?.annotations,mimeType:W0}),a0.push({id:t,name:y?.name||y?.filename||y?.title})}}});else if(N0.length>0){let y=J0.length>0;N0.forEach((t,W0)=>{let A0=J0[W0]||null;if(a0.push({id:t,name:A0?.label||null}),y)P0.push(t);else X0.push({id:t,annotations:null})})}if(J0.length>0)J0.forEach((y)=>{if(!y?.id)return;let t=a0.find((W0)=>String(W0.id)===String(y.id));if(t&&!t.name)t.name=y.label});let{content:E0,usedIds:I0}=r0(U0,a0);U0=E0;let K0=X0.filter(({id:y})=>!I0.has(y)),x0=P0.filter((y)=>!I0.has(y)),m0=J0.length>0?J0.map((y,t)=>({id:y.id||`attachment-${t+1}`,label:y.label||`attachment-${t+1}`})):a0.map((y,t)=>({id:y.id,label:y.name||`attachment-${t+1}`})),H0=v0(()=>K3(e),[e]),R0=v0(()=>G3(e),[e]),D0=v0(()=>{return H0.map((y)=>`${y.card_id}:${y.state}`).join("|")},[H0]);v(()=>{if(!R.current)return;return V4(R.current),LX(R.current)},[i0]);let Z0=T(null);return v(()=>{if(!Z0.current||H0.length===0)return;let y=Z0.current;y.innerHTML="";for(let t of H0){let W0=document.createElement("div");y.appendChild(W0),HY(W0,t,{onAction:async(A0)=>{if(A0.type==="Action.OpenUrl"){let n0=h4(A0.url||"");if(!n0)throw Error("Invalid URL");window.open(n0,"_blank","noopener,noreferrer");return}if(A0.type==="Action.Submit"){await E6({post_id:_.id,thread_id:P.thread_id||_.id,chat_jid:_.chat_jid||null,card_id:t.card_id,action:{type:A0.type,title:A0.title||"",data:A0.data}});return}console.warn("[post] unsupported adaptive card action:",A0.type,A0)}}).catch((A0)=>{console.error("[post] adaptive card render error:",A0),W0.textContent=t.fallback_text||"Card failed to render."})}},[D0,_.id]),B`
        <div id=${`post-${_.id}`} class="post ${m?"agent-post":""} ${X?"thread-reply":""} ${U?"thread-prev":""} ${L?"thread-next":""} ${H?"removing":""}" onClick=${$}>
            <div class="post-avatar ${m?"agent-avatar":""} ${M.image?"has-image":""}" style=${n}>
                ${M.image?B`<img src=${M.image} alt=${x} />`:M.letter}
            </div>
            <div class="post-body">
                <button
                    class="post-delete-btn"
                    type="button"
                    title="Delete message"
                    aria-label="Delete message"
                    onClick=${e0}
                >
                    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <path d="M18 6L6 18M6 6l12 12" />
                    </svg>
                </button>
                <div class="post-meta">
                    <span class="post-author">${x}</span>
                    <a class="post-time" href=${`#msg-${_.id}`} onClick=${(y)=>{if(y.preventDefault(),y.stopPropagation(),Z)Z(_.id)}}>${J7(_.timestamp)}</a>
                </div>
                ${a&&j0&&B`
                    <div class="post-content truncated">
                        <div class="truncated-title">Message too large to display.</div>
                        <div class="truncated-meta">
                            Original length: ${l5(j0.originalLength)} chars
                            ${j0.maxLength?B` • Display limit: ${l5(j0.maxLength)} chars`:""}
                        </div>
                    </div>
                `}
                ${i&&j0&&B`
                    <div class="post-content preview">
                        <div class="truncated-title">Preview truncated.</div>
                        <div class="truncated-meta">
                            Showing first ${l5(j0.maxLength)} of ${l5(j0.originalLength)} chars. Download full text below.
                        </div>
                    </div>
                `}
                ${(C0.length>0||B0.length>0||m0.length>0)&&B`
                    <div class="post-file-refs">
                        ${B0.map((y)=>{let t=(W0)=>{if(W0.preventDefault(),W0.stopPropagation(),Y)Y(y,_.chat_jid||null);else{let A0=document.getElementById("post-"+y);if(A0)A0.scrollIntoView({behavior:"smooth",block:"center"}),A0.classList.add("post-highlight"),setTimeout(()=>A0.classList.remove("post-highlight"),2000)}};return B`
                                <a href=${`#msg-${y}`} class="post-msg-pill-link" onClick=${t}>
                                    <${g_}
                                        prefix="post"
                                        label=${"msg:"+y}
                                        title=${"Message "+y}
                                        icon="message"
                                        onClick=${t}
                                    />
                                </a>
                            `})}
                        ${C0.map((y)=>{let t=y.split("/").pop()||y;return B`
                                <${g_}
                                    prefix="post"
                                    label=${t}
                                    title=${y}
                                    onClick=${()=>J?.(y)}
                                />
                            `})}
                        ${m0.map((y)=>B`
                            <${$X}
                                key=${y.id}
                                attachment=${y}
                                onPreview=${j1}
                            />
                        `)}
                    </div>
                `}
                ${M0&&B`
                    <div 
                        ref=${R}
                        class="post-content"
                        dangerouslySetInnerHTML=${{__html:i0}}
                        onClick=${(y)=>{if(y.target.classList.contains("hashtag")){y.preventDefault(),y.stopPropagation();let t=y.target.dataset.hashtag;if(t)j?.(t)}else if(y.target.tagName==="IMG")y.preventDefault(),y.stopPropagation(),E(y.target.src)}}
                    />
                `}
                ${H0.length>0&&B`
                    <div ref=${Z0} class="post-adaptive-cards" />
                `}
                ${R0.length>0&&B`
                    <div class="post-adaptive-card-submissions">
                        ${R0.map((y,t)=>{let W0=DY(y),A0=`${y.card_id}-${t}`;return B`
                                <div key=${A0} class="adaptive-card-submission-receipt">
                                    <div class="adaptive-card-submission-header">
                                        <span class="adaptive-card-submission-icon" aria-hidden="true">✓</span>
                                        <div class="adaptive-card-submission-title-wrap">
                                            <span class="adaptive-card-submission-title">Submitted</span>
                                            <span class="adaptive-card-submission-title-action">${W0.title}</span>
                                        </div>
                                    </div>
                                    ${W0.fields.length>0&&B`
                                        <div class="adaptive-card-submission-fields">
                                            ${W0.fields.map((n0)=>B`
                                                <span class="adaptive-card-submission-field" title=${`${n0.key}: ${n0.value}`}>
                                                    <span class="adaptive-card-submission-field-key">${n0.key}</span>
                                                    <span class="adaptive-card-submission-field-sep">:</span>
                                                    <span class="adaptive-card-submission-field-value">${n0.value}</span>
                                                </span>
                                            `)}
                                        </div>
                                    `}
                                    <div class="adaptive-card-submission-meta">
                                        Submitted ${c4(W0.submittedAt)}
                                    </div>
                                </div>
                            `})}
                    </div>
                `}
                ${p.length>0&&B`
                    <div class="generated-widget-launches">
                        ${p.map((y,t)=>B`
                            <${YX}
                                key=${y.widget_id||y.id||`${_.id}-widget-${t}`}
                                block=${y}
                                post=${_}
                                onOpenWidget=${W}
                            />
                        `)}
                    </div>
                `}
                ${l.length>0&&B`
                    ${l.map((y,t)=>B`
                        <${i8} key=${t} annotations=${y} />
                    `)}
                `}
                ${K0.length>0&&B`
                    <div class="media-preview">
                        ${K0.map(({id:y,mimeType:t})=>{let A0=typeof t==="string"&&t.toLowerCase().startsWith("image/svg")?M_(y):x6(y);return B`
                                <img 
                                    key=${y} 
                                    src=${A0} 
                                    alt="Media" 
                                    loading="lazy"
                                    onClick=${(n0)=>H1(n0,y)}
                                />
                            `})}
                    </div>
                `}
                ${K0.length>0&&B`
                    ${K0.map(({annotations:y},t)=>B`
                        ${y&&B`<${i8} key=${t} annotations=${y} />`}
                    `)}
                `}
                ${x0.length>0&&B`
                    <div class="file-attachments">
                        ${x0.map((y)=>B`
                            <${_X} key=${y} mediaId=${y} onPreview=${j1} />
                        `)}
                    </div>
                `}
                ${o.length>0&&B`
                    <div class="resource-links">
                        ${o.map((y,t)=>B`
                            <div key=${t}>
                                <${jX} block=${y} />
                                <${i8} annotations=${y.annotations} />
                            </div>
                        `)}
                    </div>
                `}
                ${Y0.length>0&&B`
                    <div class="resource-embeds">
                        ${Y0.map((y,t)=>B`
                            <div key=${t}>
                                <${ZX} block=${y} />
                                <${i8} annotations=${y.annotations} />
                            </div>
                        `)}
                    </div>
                `}
                ${P.link_previews?.length>0&&B`
                    <div class="link-previews">
                        ${P.link_previews.map((y,t)=>B`
                            <${QX} key=${t} preview=${y} />
                        `)}
                    </div>
                `}
            </div>
        </div>
        ${D&&B`<${EY} src=${D} onClose=${()=>E(null)} />`}
        ${_1&&B`
            <${AY}
                mediaId=${_1.mediaId}
                info=${_1.info}
                onClose=${()=>p0(null)}
            />
        `}
    `}function MY({posts:_,hasMore:$,onLoadMore:j,onPostClick:Z,onHashtagClick:Y,onMessageRef:q,onScrollToMessage:Q,onFileRef:N,onOpenWidget:K,emptyMessage:G,timelineRef:V,agents:X,user:U,onDeletePost:L,reverse:H=!0,removingPostIds:O,searchQuery:J}){let[W,D]=g(!1),E=T(null),R=typeof IntersectionObserver<"u",P=C(async()=>{if(!j||!$||W)return;D(!0);try{await j({preserveScroll:!0,preserveMode:"top"})}finally{D(!1)}},[$,W,j]),m=C((b)=>{let{scrollTop:d,scrollHeight:i,clientHeight:a}=b.target,j0=H?i-a-d:d,e=Math.max(300,a);if(j0<e)P()},[H,P]);v(()=>{if(!R)return;let b=E.current,d=V?.current;if(!b||!d)return;let i=300,a=new IntersectionObserver((j0)=>{for(let e of j0){if(!e.isIntersecting)continue;P()}},{root:d,rootMargin:`${i}px 0px ${i}px 0px`,threshold:0});return a.observe(b),()=>a.disconnect()},[R,$,j,V,P]);let c=T(P);if(c.current=P,v(()=>{if(R)return;if(!V?.current)return;let{scrollTop:b,scrollHeight:d,clientHeight:i}=V.current,a=H?d-i-b:b,j0=Math.max(300,i);if(a<j0)c.current?.()},[R,_,$,H,V]),v(()=>{if(!V?.current)return;if(!$||W)return;let{scrollTop:b,scrollHeight:d,clientHeight:i}=V.current,a=H?d-i-b:b,j0=Math.max(300,i);if(d<=i+1||a<j0)c.current?.()},[_,$,W,H,V]),!_)return B`<div class="loading"><div class="spinner"></div></div>`;if(_.length===0)return B`
            <div class="timeline" ref=${V}>
                <div class="timeline-content">
                    <div style="padding: var(--spacing-xl); text-align: center; color: var(--text-secondary)">
                        ${G||"No messages yet. Start a conversation!"}
                    </div>
                </div>
            </div>
        `;let x=_.slice().sort((b,d)=>b.id-d.id),M=(b)=>{let d=b?.data?.thread_id;if(d===null||d===void 0||d==="")return null;let i=Number(d);return Number.isFinite(i)?i:null},z=new Map;for(let b=0;b<x.length;b+=1){let d=x[b],i=Number(d?.id),a=M(d);if(a!==null){let j0=z.get(a)||{anchorIndex:-1,replyIndexes:[]};j0.replyIndexes.push(b),z.set(a,j0)}else if(Number.isFinite(i)){let j0=z.get(i)||{anchorIndex:-1,replyIndexes:[]};j0.anchorIndex=b,z.set(i,j0)}}let k=new Map;for(let[b,d]of z.entries()){let i=new Set;if(d.anchorIndex>=0)i.add(d.anchorIndex);for(let a of d.replyIndexes)i.add(a);k.set(b,Array.from(i).sort((a,j0)=>a-j0))}let u=x.map((b,d)=>{let i=M(b);if(i===null)return{hasThreadPrev:!1,hasThreadNext:!1};let a=k.get(i);if(!a||a.length===0)return{hasThreadPrev:!1,hasThreadNext:!1};let j0=a.indexOf(d);if(j0<0)return{hasThreadPrev:!1,hasThreadNext:!1};return{hasThreadPrev:j0>0,hasThreadNext:j0<a.length-1}}),n=B`<div class="timeline-sentinel" ref=${E}></div>`;return B`
        <div class="timeline ${H?"reverse":"normal"}" ref=${V} onScroll=${m}>
            <div class="timeline-content">
                ${H?n:null}
                ${x.map((b,d)=>{let i=Boolean(b.data?.thread_id&&b.data.thread_id!==b.id),a=O?.has?.(b.id),j0=u[d]||{};return B`
                    <${kY}
                        key=${b.id}
                        post=${b}
                        isThreadReply=${i}
                        isThreadPrev=${j0.hasThreadPrev}
                        isThreadNext=${j0.hasThreadNext}
                        isRemoving=${a}
                        highlightQuery=${J}
                        agentName=${KY(b.data?.agent_id,X||{})}
                        agentAvatarUrl=${GY(b.data?.agent_id,X||{})}
                        userName=${U?.name||U?.user_name}
                        userAvatarUrl=${U?.avatar_url||U?.avatarUrl||U?.avatar}
                        userAvatarBackground=${U?.avatar_background||U?.avatarBackground}
                        onClick=${()=>Z?.(b)}
                        onHashtagClick=${Y}
                        onMessageRef=${q}
                        onScrollToMessage=${Q}
                        onFileRef=${N}
                        onOpenWidget=${K}
                        onDelete=${L}
                    />
                `})}
                ${H?null:n}
            </div>
        </div>
    `}var r8="workspaceExplorerScale",JX=["compact","default","comfortable"],OX=new Set(JX),DX={compact:{indentPx:14},default:{indentPx:16},comfortable:{indentPx:18}};function IY(_,$="default"){if(typeof _!=="string")return $;let j=_.trim().toLowerCase();return OX.has(j)?j:$}function X3(){if(typeof window>"u")return{width:0,isTouch:!1};let _=Number(window.innerWidth)||0,$=Boolean(window.matchMedia?.("(pointer: coarse)")?.matches),j=Boolean(window.matchMedia?.("(hover: none)")?.matches),Z=Number(globalThis.navigator?.maxTouchPoints||0)>0;return{width:_,isTouch:$||Z&&j}}function AX(_={}){let $=Math.max(0,Number(_.width)||0);if(Boolean(_.isTouch))return"comfortable";if($>0&&$<1180)return"comfortable";return"default"}function EX(_,$={}){if(Boolean($.isTouch)&&_==="compact")return"default";return _}function V3(_={}){let $=AX(_),j=_.stored?IY(_.stored,$):$;return EX(j,_)}function xY(_){return DX[IY(_)]}function kX(_){if(!_||_.kind!=="text")return!1;let $=Number(_.size);return!Number.isFinite($)||$<=262144}function U3(_,$){let j=String(_||"").trim();if(!j||j.endsWith("/"))return!1;if(typeof $!=="function")return!1;let Z=$({path:j,mode:"edit"});if(!Z||typeof Z!=="object")return!1;return Z.id!=="editor"}function TY(_,$,j={}){let Z=j.resolvePane;if(U3(_,Z))return!0;return kX($)}var MX=60000,SY=(_)=>{if(!_||!_.name)return!1;if(_.path===".")return!1;return _.name.startsWith(".")};function IX(_){let $=String(_||"").trim();if(!$||$.endsWith("/"))return!1;return U3($,(j)=>c0.resolve(j))}function wY(_,$,j,Z=0,Y=[]){if(!j&&SY(_))return Y;if(!_)return Y;if(Y.push({node:_,depth:Z}),_.type==="dir"&&_.children&&$.has(_.path))for(let q of _.children)wY(q,$,j,Z+1,Y);return Y}function CY(_,$,j){if(!_)return"";let Z=[],Y=(q)=>{if(!j&&SY(q))return;if(Z.push(q.type==="dir"?`d:${q.path}`:`f:${q.path}`),q.children&&$?.has(q.path))for(let Q of q.children)Y(Q)};return Y(_),Z.join("|")}function z3(_,$){if(!$)return null;if(!_)return $;if(_.path!==$.path||_.type!==$.type)return $;let j=Array.isArray(_.children)?_.children:null,Z=Array.isArray($.children)?$.children:null;if(!Z)return _;let Y=j?new Map(j.map((N)=>[N?.path,N])):new Map,q=!j||j.length!==Z.length,Q=Z.map((N)=>{let K=z3(Y.get(N.path),N);if(K!==Y.get(N.path))q=!0;return K});return q?{...$,children:Q}:_}function W3(_,$,j){if(!_)return _;if(_.path===$)return z3(_,j);if(!Array.isArray(_.children))return _;let Z=!1,Y=_.children.map((q)=>{let Q=W3(q,$,j);if(Q!==q)Z=!0;return Q});return Z?{..._,children:Y}:_}var RY=4,L3=14,xX=8,TX=16;function uY(_){if(!_)return 0;if(_.type==="file"){let Z=Math.max(0,Number(_.size)||0);return _.__bytes=Z,Z}let $=Array.isArray(_.children)?_.children:[],j=0;for(let Z of $)j+=uY(Z);return _.__bytes=j,j}function fY(_,$=0){let j=Math.max(0,Number(_?.__bytes??_?.size??0)),Z={name:_?.name||_?.path||".",path:_?.path||".",size:j,children:[]};if(!_||_.type!=="dir"||$>=RY)return Z;let Y=Array.isArray(_.children)?_.children:[],q=[];for(let N of Y){let K=Math.max(0,Number(N?.__bytes??N?.size??0));if(K<=0)continue;if(N.type==="dir")q.push({kind:"dir",node:N,size:K});else q.push({kind:"file",name:N.name,path:N.path,size:K})}q.sort((N,K)=>K.size-N.size);let Q=q;if(q.length>L3){let N=q.slice(0,L3-1),K=q.slice(L3-1),G=K.reduce((V,X)=>V+X.size,0);N.push({kind:"other",name:`+${K.length} more`,path:`${Z.path}/[other]`,size:G}),Q=N}return Z.children=Q.map((N)=>{if(N.kind==="dir")return fY(N.node,$+1);return{name:N.name,path:N.path,size:N.size,children:[]}}),Z}function yY(){if(typeof window>"u"||typeof document>"u")return!1;let{documentElement:_,body:$}=document,j=_?.getAttribute?.("data-theme")?.toLowerCase?.()||"";if(j==="dark")return!0;if(j==="light")return!1;if(_?.classList?.contains("dark")||$?.classList?.contains("dark"))return!0;if(_?.classList?.contains("light")||$?.classList?.contains("light"))return!1;return Boolean(window.matchMedia?.("(prefers-color-scheme: dark)")?.matches)}function vY(_,$,j){let Z=((_+Math.PI/2)*180/Math.PI+360)%360,Y=j?Math.max(30,70-$*10):Math.max(34,66-$*8),q=j?Math.min(70,45+$*5):Math.min(60,42+$*4);return`hsl(${Z.toFixed(1)} ${Y}% ${q}%)`}function o8(_,$,j,Z){return{x:_+j*Math.cos(Z),y:$+j*Math.sin(Z)}}function F3(_,$,j,Z,Y,q){let Q=Math.PI*2-0.0001,N=q-Y>Q?Y+Q:q,K=o8(_,$,Z,Y),G=o8(_,$,Z,N),V=o8(_,$,j,N),X=o8(_,$,j,Y),U=N-Y>Math.PI?1:0;return[`M ${K.x.toFixed(3)} ${K.y.toFixed(3)}`,`A ${Z} ${Z} 0 ${U} 1 ${G.x.toFixed(3)} ${G.y.toFixed(3)}`,`L ${V.x.toFixed(3)} ${V.y.toFixed(3)}`,`A ${j} ${j} 0 ${U} 0 ${X.x.toFixed(3)} ${X.y.toFixed(3)}`,"Z"].join(" ")}var bY={1:[26,46],2:[48,68],3:[70,90],4:[92,112]};function gY(_,$,j){let Z=[],Y=[],q=Math.max(0,Number($)||0),Q=(N,K,G,V)=>{let X=Array.isArray(N?.children)?N.children:[];if(!X.length)return;let U=Math.max(0,Number(N.size)||0);if(U<=0)return;let L=G-K,H=K;X.forEach((O,J)=>{let W=Math.max(0,Number(O.size)||0);if(W<=0)return;let D=W/U,E=H,R=J===X.length-1?G:H+L*D;if(H=R,R-E<0.003)return;let P=bY[V];if(P){let m=vY(E,V,j);if(Z.push({key:O.path,path:O.path,label:O.name,size:W,color:m,depth:V,startAngle:E,endAngle:R,innerRadius:P[0],outerRadius:P[1],d:F3(120,120,P[0],P[1],E,R)}),V===1)Y.push({key:O.path,name:O.name,size:W,pct:q>0?W/q*100:0,color:m})}if(V<RY)Q(O,E,R,V+1)})};return Q(_,-Math.PI/2,Math.PI*3/2,1),{segments:Z,legend:Y}}function B3(_,$){if(!_||!$)return null;if(_.path===$)return _;let j=Array.isArray(_.children)?_.children:[];for(let Z of j){let Y=B3(Z,$);if(Y)return Y}return null}function mY(_,$,j,Z){if(!j||j<=0)return{segments:[],legend:[]};let Y=bY[1];if(!Y)return{segments:[],legend:[]};let q=-Math.PI/2,Q=Math.PI*3/2,N=vY(q,1,Z),G=`${$||"."}/[files]`;return{segments:[{key:G,path:G,label:_,size:j,color:N,depth:1,startAngle:q,endAngle:Q,innerRadius:Y[0],outerRadius:Y[1],d:F3(120,120,Y[0],Y[1],q,Q)}],legend:[{key:G,name:_,size:j,pct:100,color:N}]}}function PY(_,$=!1,j=!1){if(!_)return null;let Z=uY(_),Y=fY(_,0),q=Y.size||Z,{segments:Q,legend:N}=gY(Y,q,j);if(!Q.length&&q>0){let K=mY("[files]",Y.path,q,j);Q=K.segments,N=K.legend}return{root:Y,totalSize:q,segments:Q,legend:N,truncated:$,isDarkTheme:j}}function CX({payload:_}){if(!_)return null;let[$,j]=g(null),[Z,Y]=g(_?.root?.path||"."),[q,Q]=g(()=>[_?.root?.path||"."]),[N,K]=g(!1);v(()=>{let z=_?.root?.path||".";Y(z),Q([z]),j(null)},[_?.root?.path,_?.totalSize]),v(()=>{if(!Z)return;K(!0);let z=setTimeout(()=>K(!1),180);return()=>clearTimeout(z)},[Z]);let G=v0(()=>{return B3(_.root,Z)||_.root},[_?.root,Z]),V=G?.size||_.totalSize||0,{segments:X,legend:U}=v0(()=>{let z=gY(G,V,_.isDarkTheme);if(z.segments.length>0)return z;if(V<=0)return z;let k=G?.children?.length?"Total":"[files]";return mY(k,G?.path||_?.root?.path||".",V,_.isDarkTheme)},[G,V,_.isDarkTheme,_?.root?.path]),[L,H]=g(X),O=T(new Map),J=T(0);v(()=>{let z=O.current,k=new Map(X.map((d)=>[d.key,d])),u=performance.now(),n=220,b=(d)=>{let i=Math.min(1,(d-u)/220),a=i*(2-i),j0=X.map((e)=>{let U0=z.get(e.key)||{startAngle:e.startAngle,endAngle:e.startAngle,innerRadius:e.innerRadius,outerRadius:e.innerRadius},L0=(J0,y0)=>J0+(y0-J0)*a,C0=L0(U0.startAngle,e.startAngle),O0=L0(U0.endAngle,e.endAngle),B0=L0(U0.innerRadius,e.innerRadius),u0=L0(U0.outerRadius,e.outerRadius);return{...e,d:F3(120,120,B0,u0,C0,O0)}});if(H(j0),i<1)J.current=requestAnimationFrame(b)};if(J.current)cancelAnimationFrame(J.current);return J.current=requestAnimationFrame(b),O.current=k,()=>{if(J.current)cancelAnimationFrame(J.current)}},[X]);let W=L.length?L:X,D=V>0?I_(V):"0 B",E=G?.name||"",P=(E&&E!=="."?E:"Total")||"Total",m=D,c=q.length>1,x=(z)=>{if(!z?.path)return;let k=B3(_.root,z.path);if(!k||!Array.isArray(k.children)||k.children.length===0)return;Q((u)=>[...u,k.path]),Y(k.path),j(null)},M=()=>{if(!c)return;Q((z)=>{let k=z.slice(0,-1);return Y(k[k.length-1]||_?.root?.path||"."),k}),j(null)};return B`
        <div class="workspace-folder-starburst">
            <svg viewBox="0 0 240 240" class=${`workspace-folder-starburst-svg${N?" is-zooming":""}`} role="img"
                aria-label=${`Folder sizes for ${G?.path||_?.root?.path||"."}`}
                data-segments=${W.length}
                data-base-size=${V}>
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
                        onClick=${()=>x(z)}
                    >
                        <title>${z.label} — ${I_(z.size)}</title>
                    </path>
                `)}
                <g
                    class=${`workspace-folder-starburst-center-hit${c?" is-drill":""}`}
                    onClick=${M}
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
                    <text x="120" y="130" text-anchor="middle" class="workspace-folder-starburst-total-value">${m}</text>
                </g>
            </svg>
            ${U.length>0&&B`
                <div class="workspace-folder-starburst-legend">
                    ${U.slice(0,8).map((z)=>B`
                        <div key=${z.key} class="workspace-folder-starburst-legend-item">
                            <span class="workspace-folder-starburst-swatch" style=${`background:${z.color}`}></span>
                            <span class="workspace-folder-starburst-name" title=${z.name}>${z.name}</span>
                            <span class="workspace-folder-starburst-size">${I_(z.size)}</span>
                            <span class="workspace-folder-starburst-pct">${z.pct.toFixed(1)}%</span>
                        </div>
                    `)}
                </div>
            `}
            ${_.truncated&&B`
                <div class="workspace-folder-starburst-note">Preview is truncated by tree depth/entry limits.</div>
            `}
        </div>
    `}function yX({mediaId:_}){let[$,j]=g(null);if(v(()=>{if(!_)return;q5(_).then(j).catch(()=>{})},[_]),!$)return null;let Z=$.filename||"file",Y=$.metadata?.size?I_($.metadata.size):"";return B`
        <a href=${M_(_)} download=${Z} class="file-attachment"
            onClick=${(q)=>q.stopPropagation()}>
            <svg class="file-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                <polyline points="14 2 14 8 20 8"/>
                <line x1="16" y1="13" x2="8" y2="13"/>
                <line x1="16" y1="17" x2="8" y2="17"/>
                <polyline points="10 9 9 9 8 9"/>
            </svg>
            <div class="file-info">
                <span class="file-name">${Z}</span>
                ${Y&&B`<span class="file-size">${Y}</span>`}
            </div>
            <svg class="download-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                <polyline points="7 10 12 15 17 10"/>
                <line x1="12" y1="15" x2="12" y2="3"/>
            </svg>
        </a>
    `}function pY({onFileSelect:_,visible:$=!0,active:j=void 0,onOpenEditor:Z,onOpenTerminalTab:Y,onOpenVncTab:q,onToggleTerminal:Q,terminalVisible:N=!1}){let[K,G]=g(null),[V,X]=g(new Set(["."])),[U,L]=g(null),[H,O]=g(null),[J,W]=g(""),[D,E]=g(null),[R,P]=g(null),[m,c]=g(!0),[x,M]=g(!1),[z,k]=g(null),[u,n]=g(()=>L5("workspaceShowHidden",!1)),[b,d]=g(!1),[i,a]=g(null),[j0,e]=g(null),[N0,U0]=g(null),[L0,C0]=g(!1),[O0,B0]=g(null),[u0,J0]=g(()=>yY()),[y0,b0]=g(()=>V3({stored:L_(r8),...X3()})),[F0,f0]=g(!1),Q0=T(V),M0=T(""),l0=T(null),i0=T(0),H1=T(new Set),_1=T(null),p0=T(new Map),j1=T(_),e0=T(Z),r0=T(null),X0=T(null),P0=T(null),a0=T(null),o=T(null),Y0=T(null),p=T("."),l=T(null),z0=T({path:null,dragging:!1,startX:0,startY:0}),E0=T({path:null,dragging:!1,startX:0,startY:0}),I0=T({path:null,timer:0}),K0=T(!1),x0=T(0),m0=T(new Map),H0=T(null),R0=T(null),D0=T(null),Z0=T(null),y=T(null),t=T(null),W0=T(u),A0=T($),n0=T(j??$),$1=T(0),q1=T(N0),J1=T(b),p1=T(i),x_=T(null),o1=T({x:0,y:0}),w1=T(0),h1=T(null),v1=T(U),t0=T(H),c1=T(null),r_=T(D);j1.current=_,e0.current=Z,v(()=>{Q0.current=V},[V]),v(()=>{W0.current=u},[u]),v(()=>{A0.current=$},[$]),v(()=>{n0.current=j??$},[j,$]),v(()=>{q1.current=N0},[N0]),v(()=>{if(typeof window>"u")return;let A=()=>{b0(V3({stored:L_(r8),...X3()}))};A();let I=()=>A(),f=()=>A(),S=(_0)=>{if(!_0||_0.key===null||_0.key===r8)A()};window.addEventListener("resize",I),window.addEventListener("focus",f),window.addEventListener("storage",S);let r=window.matchMedia?.("(pointer: coarse)"),q0=window.matchMedia?.("(hover: none)"),G0=(_0,S0)=>{if(!_0)return;if(_0.addEventListener)_0.addEventListener("change",S0);else if(_0.addListener)_0.addListener(S0)},V0=(_0,S0)=>{if(!_0)return;if(_0.removeEventListener)_0.removeEventListener("change",S0);else if(_0.removeListener)_0.removeListener(S0)};return G0(r,I),G0(q0,I),()=>{window.removeEventListener("resize",I),window.removeEventListener("focus",f),window.removeEventListener("storage",S),V0(r,I),V0(q0,I)}},[]),v(()=>{let A=(I)=>{let f=I?.detail?.path;if(!f)return;let S=f.split("/"),r=[];for(let q0=1;q0<S.length;q0++)r.push(S.slice(0,q0).join("/"));if(r.length)X((q0)=>{let G0=new Set(q0);G0.add(".");for(let V0 of r)G0.add(V0);return G0});L(f),requestAnimationFrame(()=>{let q0=document.querySelector(`[data-path="${CSS.escape(f)}"]`);if(q0)q0.scrollIntoView({block:"nearest",behavior:"smooth"})})};return window.addEventListener("workspace-reveal-path",A),()=>window.removeEventListener("workspace-reveal-path",A)},[]),v(()=>{J1.current=b},[b]),v(()=>{p1.current=i},[i]),v(()=>{v1.current=U},[U]),v(()=>{t0.current=H},[H]),v(()=>{r_.current=D},[D]),v(()=>{if(typeof window>"u"||typeof document>"u")return;let A=()=>J0(yY());A();let I=window.matchMedia?.("(prefers-color-scheme: dark)"),f=()=>A();if(I?.addEventListener)I.addEventListener("change",f);else if(I?.addListener)I.addListener(f);let S=typeof MutationObserver<"u"?new MutationObserver(()=>A()):null;if(S?.observe(document.documentElement,{attributes:!0,attributeFilter:["class","data-theme"]}),document.body)S?.observe(document.body,{attributes:!0,attributeFilter:["class","data-theme"]});return()=>{if(I?.removeEventListener)I.removeEventListener("change",f);else if(I?.removeListener)I.removeListener(f);S?.disconnect()}},[]),v(()=>{if(!H)return;let A=o.current;if(!A)return;let I=requestAnimationFrame(()=>{try{A.focus(),A.select()}catch{}});return()=>cancelAnimationFrame(I)},[H]),v(()=>{if(!F0)return;let A=(f)=>{let S=f?.target;if(!(S instanceof Element))return;if(y.current?.contains(S))return;if(t.current?.contains(S))return;f0(!1)},I=(f)=>{if(f?.key==="Escape")f0(!1),t.current?.focus?.()};return document.addEventListener("mousedown",A),document.addEventListener("touchstart",A,{passive:!0}),document.addEventListener("keydown",I),()=>{document.removeEventListener("mousedown",A),document.removeEventListener("touchstart",A),document.removeEventListener("keydown",I)}},[F0]);let s1=async(A,I={})=>{let f=Boolean(I?.autoOpen),S=String(A||"").trim();M(!0),E(null),P(null);try{let r=await y5(S,20000);if(f&&S&&TY(S,r,{resolvePane:(q0)=>c0.resolve(q0)}))return e0.current?.(S,r),r;return E(r),r}catch(r){let q0={error:r.message||"Failed to load preview"};return E(q0),q0}finally{M(!1)}};r0.current=s1;let o_=async()=>{if(!A0.current)return;try{let A=await C5("",1,W0.current),I=CY(A.root,Q0.current,W0.current);if(I===M0.current){c(!1);return}if(M0.current=I,l0.current=A.root,!i0.current)i0.current=requestAnimationFrame(()=>{i0.current=0,G((f)=>z3(f,l0.current)),c(!1)})}catch(A){k(A.message||"Failed to load workspace"),c(!1)}},m_=async(A)=>{if(!A)return;if(H1.current.has(A))return;H1.current.add(A);try{let I=await C5(A,1,W0.current);G((f)=>W3(f,A,I.root))}catch(I){k(I.message||"Failed to load workspace")}finally{H1.current.delete(A)}};X0.current=m_;let O1=C(()=>{let A=U;if(!A)return".";let I=p0.current?.get(A);if(I&&I.type==="dir")return I.path;if(A==="."||!A.includes("/"))return".";let f=A.split("/");return f.pop(),f.join("/")||"."},[U]),l1=C((A)=>{let I=A?.closest?.(".workspace-row");if(!I)return null;let f=I.dataset.path,S=I.dataset.type;if(!f)return null;if(S==="dir")return f;if(f.includes("/")){let r=f.split("/");return r.pop(),r.join("/")||"."}return"."},[]),D1=C((A)=>{return l1(A?.target||null)},[l1]),V1=C((A)=>{q1.current=A,U0(A)},[]),U1=C(()=>{let A=I0.current;if(A?.timer)clearTimeout(A.timer);I0.current={path:null,timer:0}},[]),K_=C((A)=>{if(!A||A==="."){U1();return}let I=p0.current?.get(A);if(!I||I.type!=="dir"){U1();return}if(Q0.current?.has(A)){U1();return}if(I0.current?.path===A)return;U1();let f=setTimeout(()=>{I0.current={path:null,timer:0},X0.current?.(A),X((S)=>{let r=new Set(S);return r.add(A),r})},600);I0.current={path:A,timer:f}},[U1]),G_=C((A,I)=>{if(o1.current={x:A,y:I},w1.current)return;w1.current=requestAnimationFrame(()=>{w1.current=0;let f=x_.current;if(!f)return;let S=o1.current;f.style.transform=`translate(${S.x+12}px, ${S.y+12}px)`})},[]),x1=C((A)=>{if(!A)return;let f=(p0.current?.get(A)?.name||A.split("/").pop()||A).trim();if(!f)return;e({path:A,label:f})},[]),n1=C(()=>{if(e(null),w1.current)cancelAnimationFrame(w1.current),w1.current=0;if(x_.current)x_.current.style.transform="translate(-9999px, -9999px)"},[]),Q1=C((A)=>{if(!A)return".";let I=p0.current?.get(A);if(I&&I.type==="dir")return I.path;if(A==="."||!A.includes("/"))return".";let f=A.split("/");return f.pop(),f.join("/")||"."},[]),M1=C(()=>{O(null),W("")},[]),a1=C((A)=>{if(!A)return;let f=(p0.current?.get(A)?.name||A.split("/").pop()||A).trim();if(!f||A===".")return;O(A),W(f)},[]),b1=C(async()=>{let A=t0.current;if(!A)return;let I=(J||"").trim();if(!I){M1();return}let f=p0.current?.get(A),S=(f?.name||A.split("/").pop()||A).trim();if(I===S){M1();return}try{let q0=(await P6(A,I))?.path||A,G0=A.includes("/")?A.split("/").slice(0,-1).join("/")||".":".";if(M1(),k(null),window.dispatchEvent(new CustomEvent("workspace-file-renamed",{detail:{oldPath:A,newPath:q0,type:f?.type||"file"}})),f?.type==="dir")X((V0)=>{let _0=new Set;for(let S0 of V0)if(S0===A)_0.add(q0);else if(S0.startsWith(`${A}/`))_0.add(`${q0}${S0.slice(A.length)}`);else _0.add(S0);return _0});if(L(q0),f?.type==="dir")E(null),M(!1),P(null);else r0.current?.(q0);X0.current?.(G0)}catch(r){k(r?.message||"Failed to rename file")}},[M1,J]),s_=C(async(A)=>{let S=A||".";for(let r=0;r<50;r+=1){let G0=`untitled${r===0?"":`-${r}`}.md`;try{let _0=(await y6(S,G0,""))?.path||(S==="."?G0:`${S}/${G0}`);if(S&&S!==".")X((S0)=>new Set([...S0,S]));L(_0),k(null),X0.current?.(S),r0.current?.(_0);return}catch(V0){if(V0?.status===409||V0?.code==="file_exists")continue;k(V0?.message||"Failed to create file");return}}k("Failed to create file (untitled name already in use).")},[]),z_=C((A)=>{if(A?.stopPropagation?.(),L0)return;let I=Q1(v1.current);s_(I)},[L0,Q1,s_]);v(()=>{if(typeof window>"u")return;let A=(I)=>{let f=I?.detail?.updates||[];if(!Array.isArray(f)||f.length===0)return;G((V0)=>{let _0=V0;for(let S0 of f){if(!S0?.root)continue;if(!_0||S0.path==="."||!S0.path)_0=S0.root;else _0=W3(_0,S0.path,S0.root)}if(_0)M0.current=CY(_0,Q0.current,W0.current);return c(!1),_0});let S=v1.current;if(Boolean(S)&&f.some((V0)=>{let _0=V0?.path||"";if(!_0||_0===".")return!0;return S===_0||S.startsWith(`${_0}/`)||_0.startsWith(`${S}/`)}))m0.current.clear();if(!S||!r_.current)return;let q0=p0.current?.get(S);if(q0&&q0.type==="dir")return;if(f.some((V0)=>{let _0=V0?.path||"";if(!_0||_0===".")return!0;return S===_0||S.startsWith(`${_0}/`)}))r0.current?.(S)};return window.addEventListener("workspace-update",A),()=>window.removeEventListener("workspace-update",A)},[]),_1.current=o_;let a_=T(()=>{if(typeof window>"u")return;let A=window.matchMedia("(min-width: 1024px) and (orientation: landscape)"),I=n0.current??A0.current,f=document.visibilityState!=="hidden"&&(I||A.matches&&A0.current);P5(f,W0.current).catch(()=>{})}).current,F_=T(0),U4=T(()=>{if(F_.current)clearTimeout(F_.current);F_.current=setTimeout(()=>{F_.current=0,a_()},250)}).current;v(()=>{if(A0.current)_1.current?.();U4()},[$,j]),v(()=>{_1.current(),a_();let A=setInterval(()=>_1.current(),MX),I=m5("previewHeight",null),f=Number.isFinite(I)?Math.min(Math.max(I,80),600):280;if(x0.current=f,P0.current)P0.current.style.setProperty("--preview-height",`${f}px`);let S=window.matchMedia("(min-width: 1024px) and (orientation: landscape)"),r=()=>U4();if(S.addEventListener)S.addEventListener("change",r);else if(S.addListener)S.addListener(r);return document.addEventListener("visibilitychange",r),()=>{if(clearInterval(A),i0.current)cancelAnimationFrame(i0.current),i0.current=0;if(S.removeEventListener)S.removeEventListener("change",r);else if(S.removeListener)S.removeListener(r);if(document.removeEventListener("visibilitychange",r),F_.current)clearTimeout(F_.current),F_.current=0;if(l.current)clearTimeout(l.current),l.current=null;P5(!1,W0.current).catch(()=>{})}},[]);let H_=v0(()=>wY(K,V,u),[K,V,u]),T_=v0(()=>new Map(H_.map((A)=>[A.node.path,A.node])),[H_]),C4=v0(()=>xY(y0),[y0]);p0.current=T_;let Z1=(U?p0.current.get(U):null)?.type==="dir";v(()=>{if(!U||!Z1){B0(null),H0.current=null,R0.current=null;return}let A=U,I=`${u?"hidden":"visible"}:${U}`,f=m0.current,S=f.get(I);if(S?.root){f.delete(I),f.set(I,S);let G0=PY(S.root,Boolean(S.truncated),u0);if(G0)H0.current=G0,R0.current=U,B0({loading:!1,error:null,payload:G0});return}let r=H0.current,q0=R0.current;B0({loading:!0,error:null,payload:q0===U?r:null}),C5(U,xX,u).then((G0)=>{if(v1.current!==A)return;let V0={root:G0?.root,truncated:Boolean(G0?.truncated)};f.delete(I),f.set(I,V0);while(f.size>TX){let S0=f.keys().next().value;if(!S0)break;f.delete(S0)}let _0=PY(V0.root,V0.truncated,u0);H0.current=_0,R0.current=U,B0({loading:!1,error:null,payload:_0})}).catch((G0)=>{if(v1.current!==A)return;B0({loading:!1,error:G0?.message||"Failed to load folder size chart",payload:q0===U?r:null})})},[U,Z1,u,u0]);let A1=Boolean(D&&D.kind==="text"&&!Z1&&(!D.size||D.size<=262144)),L4=A1?"Open in editor":D?.size>262144?"File too large to edit":"File is not editable",t1=Boolean(U&&U!=="."),J_=Boolean(U&&!Z1),g1=Boolean(U&&!Z1),z1=U&&Z1?U8(U,u):null,P1=C(()=>f0(!1),[]),N1=C(async(A)=>{P1();try{await A?.()}catch(I){console.warn("[workspace-explorer] Header menu action failed:",I)}},[P1]);v(()=>{let A=D0.current;if(Z0.current)Z0.current.dispose(),Z0.current=null;if(!A)return;if(A.innerHTML="",!U||Z1||!D||D.error)return;let I={path:U,content:typeof D.text==="string"?D.text:void 0,mtime:D.mtime,size:D.size,preview:D,mode:"view"},f=c0.resolve(I)||c0.get("workspace-preview-default");if(!f)return;let S=f.mount(A,I);return Z0.current=S,()=>{if(Z0.current===S)S.dispose(),Z0.current=null;A.innerHTML=""}},[U,Z1,D]);let e1=(A)=>{let I=A?.target;if(I instanceof Element)return I;return I?.parentElement||null},__=(A)=>{return Boolean(A?.closest?.(".workspace-node-icon, .workspace-label-text"))},$_=T((A)=>{let I=e1(A),f=I?.closest?.("[data-path]");if(!f)return;let S=f.dataset.path;if(!S||S===".")return;let r=Boolean(I?.closest?.("button"))||Boolean(I?.closest?.("a"))||Boolean(I?.closest?.("input")),q0=Boolean(I?.closest?.(".workspace-caret"));if(r||q0)return;if(t0.current===S)return;a1(S)}).current,p_=T((A)=>{if(K0.current){K0.current=!1;return}let I=e1(A),f=I?.closest?.("[data-path]");if(a0.current?.focus?.(),!f)return;let S=f.dataset.path,r=f.dataset.type,q0=Boolean(I?.closest?.(".workspace-caret")),G0=Boolean(I?.closest?.("button"))||Boolean(I?.closest?.("a"))||Boolean(I?.closest?.("input")),V0=v1.current===S,_0=t0.current;if(_0){if(_0===S)return;M1()}let S0=r==="file"&&c1.current===S&&!q0&&!G0;if(r==="dir"){if(c1.current=null,L(S),E(null),P(null),M(!1),!Q0.current.has(S))X0.current?.(S);if(V0&&!q0)return;X((k_)=>{let Y_=new Set(k_);if(Y_.has(S))Y_.delete(S);else Y_.add(S);return Y_})}else{c1.current=null,L(S);let T1=p0.current.get(S);if(T1)j1.current?.(T1.path,T1);if(!G0&&!q0&&IX(S))e0.current?.(S,r_.current);else{let Y_=!G0&&!q0;r0.current?.(S,{autoOpen:Y_})}}}).current,R1=T(()=>{M0.current="",_1.current(),Array.from(Q0.current||[]).filter((I)=>I&&I!==".").forEach((I)=>X0.current?.(I))}).current,S1=T(()=>{c1.current=null,L(null),E(null),P(null),M(!1)}).current,j_=T(()=>{n((A)=>{let I=!A;if(typeof window<"u")Y1("workspaceShowHidden",String(I));return W0.current=I,P5(!0,I).catch(()=>{}),M0.current="",_1.current?.(),Array.from(Q0.current||[]).filter((S)=>S&&S!==".").forEach((S)=>X0.current?.(S)),I})}).current,C_=T((A)=>{if(e1(A)?.closest?.("[data-path]"))return;S1()}).current,L1=C(async(A)=>{if(!A)return;let I=A.split("/").pop()||A;if(!window.confirm(`Delete "${I}"? This cannot be undone.`))return;try{await w6(A);let S=A.includes("/")?A.split("/").slice(0,-1).join("/")||".":".";if(v1.current===A)S1();X0.current?.(S),k(null)}catch(S){E((r)=>({...r||{},error:S.message||"Failed to delete file"}))}},[S1]),O_=C((A)=>{let I=a0.current;if(!I||!A||typeof CSS>"u"||typeof CSS.escape!=="function")return;I.querySelector(`[data-path="${CSS.escape(A)}"]`)?.scrollIntoView?.({block:"nearest"})},[]),K1=C((A)=>{let I=H_;if(!I||I.length===0)return;let f=U?I.findIndex((S)=>S.node.path===U):-1;if(A.key==="ArrowDown"){A.preventDefault();let S=Math.min(f+1,I.length-1),r=I[S];if(!r)return;if(L(r.node.path),r.node.type!=="dir")j1.current?.(r.node.path,r.node),r0.current?.(r.node.path);else E(null),M(!1),P(null);O_(r.node.path);return}if(A.key==="ArrowUp"){A.preventDefault();let S=f<=0?0:f-1,r=I[S];if(!r)return;if(L(r.node.path),r.node.type!=="dir")j1.current?.(r.node.path,r.node),r0.current?.(r.node.path);else E(null),M(!1),P(null);O_(r.node.path);return}if(A.key==="ArrowRight"&&f>=0){let S=I[f];if(S?.node?.type==="dir"&&!V.has(S.node.path))A.preventDefault(),X0.current?.(S.node.path),X((r)=>new Set([...r,S.node.path]));return}if(A.key==="ArrowLeft"&&f>=0){let S=I[f];if(S?.node?.type==="dir"&&V.has(S.node.path))A.preventDefault(),X((r)=>{let q0=new Set(r);return q0.delete(S.node.path),q0});return}if(A.key==="Enter"&&f>=0){A.preventDefault();let S=I[f];if(!S)return;let r=S.node.path;if(S.node.type==="dir"){if(!Q0.current.has(r))X0.current?.(r);X((G0)=>{let V0=new Set(G0);if(V0.has(r))V0.delete(r);else V0.add(r);return V0}),E(null),P(null),M(!1)}else j1.current?.(r,S.node),r0.current?.(r);return}if((A.key==="Delete"||A.key==="Backspace")&&f>=0){let S=I[f];if(!S||S.node.type==="dir")return;A.preventDefault(),L1(S.node.path);return}if(A.key==="Escape")A.preventDefault(),S1()},[S1,L1,V,H_,O_,U]),y_=C((A)=>{let I=e1(A),f=I?.closest?.(".workspace-row");if(!f)return;let S=f.dataset.type,r=f.dataset.path;if(!r||r===".")return;if(t0.current===r)return;let q0=A?.touches?.[0];if(!q0)return;if(z0.current={path:__(I)?r:null,dragging:!1,startX:q0.clientX,startY:q0.clientY},S!=="file")return;if(l.current)clearTimeout(l.current);l.current=setTimeout(()=>{if(l.current=null,z0.current?.dragging)return;L1(r)},600)},[L1]),D_=C(()=>{if(l.current)clearTimeout(l.current),l.current=null;let A=z0.current;if(A?.dragging&&A.path){let I=q1.current||O1(),f=h1.current;if(typeof f==="function")f(A.path,I)}z0.current={path:null,dragging:!1,startX:0,startY:0},$1.current=0,d(!1),a(null),V1(null),U1(),n1()},[O1,n1,V1,U1]),P4=C((A)=>{let I=z0.current,f=A?.touches?.[0];if(!f||!I?.path){if(l.current)clearTimeout(l.current),l.current=null;return}let S=Math.abs(f.clientX-I.startX),r=Math.abs(f.clientY-I.startY),q0=S>8||r>8;if(q0&&l.current)clearTimeout(l.current),l.current=null;if(!I.dragging&&q0)I.dragging=!0,d(!0),a("move"),x1(I.path);if(I.dragging){A.preventDefault(),G_(f.clientX,f.clientY);let G0=document.elementFromPoint(f.clientX,f.clientY),V0=l1(G0)||O1();if(q1.current!==V0)V1(V0);K_(V0)}},[l1,O1,x1,G_,V1,K_]),n4=T((A)=>{A.preventDefault();let I=P0.current;if(!I)return;let f=A.clientY,S=x0.current||280,r=A.currentTarget;r.classList.add("dragging"),document.body.style.cursor="row-resize",document.body.style.userSelect="none";let q0=f,G0=(_0)=>{q0=_0.clientY;let S0=I.clientHeight-80,T1=Math.min(Math.max(S-(_0.clientY-f),80),S0);I.style.setProperty("--preview-height",`${T1}px`),x0.current=T1},V0=()=>{let _0=I.clientHeight-80,S0=Math.min(Math.max(S-(q0-f),80),_0);x0.current=S0,r.classList.remove("dragging"),document.body.style.cursor="",document.body.style.userSelect="",Y1("previewHeight",String(Math.round(S0))),document.removeEventListener("mousemove",G0),document.removeEventListener("mouseup",V0)};document.addEventListener("mousemove",G0),document.addEventListener("mouseup",V0)}).current,P_=T((A)=>{A.preventDefault();let I=P0.current;if(!I)return;let f=A.touches[0];if(!f)return;let S=f.clientY,r=x0.current||280,q0=A.currentTarget;q0.classList.add("dragging"),document.body.style.userSelect="none";let G0=(_0)=>{let S0=_0.touches[0];if(!S0)return;_0.preventDefault();let T1=I.clientHeight-80,k_=Math.min(Math.max(r-(S0.clientY-S),80),T1);I.style.setProperty("--preview-height",`${k_}px`),x0.current=k_},V0=()=>{q0.classList.remove("dragging"),document.body.style.userSelect="",Y1("previewHeight",String(Math.round(x0.current||r))),document.removeEventListener("touchmove",G0),document.removeEventListener("touchend",V0),document.removeEventListener("touchcancel",V0)};document.addEventListener("touchmove",G0,{passive:!1}),document.addEventListener("touchend",V0),document.addEventListener("touchcancel",V0)}).current,h_=async()=>{if(!U)return;try{let A=await C6(U);if(A.media_id)P(A.media_id)}catch(A){E((I)=>({...I||{},error:A.message||"Failed to attach"}))}},S4=async()=>{if(!U||Z1)return;await L1(U)},t_=(A)=>{return Array.from(A?.dataTransfer?.types||[]).includes("Files")},d4=C((A)=>{if(!t_(A))return;if(A.preventDefault(),$1.current+=1,!J1.current)d(!0);a("upload");let I=D1(A)||O1();V1(I),K_(I)},[O1,D1,V1,K_]),e_=C((A)=>{if(!t_(A))return;if(A.preventDefault(),A.dataTransfer)A.dataTransfer.dropEffect="copy";if(!J1.current)d(!0);if(p1.current!=="upload")a("upload");let I=D1(A)||O1();if(q1.current!==I)V1(I);K_(I)},[O1,D1,V1,K_]),c_=C((A)=>{if(!t_(A))return;if(A.preventDefault(),$1.current=Math.max(0,$1.current-1),$1.current===0)d(!1),a(null),V1(null),U1()},[V1,U1]),d1=C(async(A,I=".")=>{let f=Array.from(A||[]);if(f.length===0)return;let S=I&&I!==""?I:".",r=S!=="."?S:"workspace root";C0(!0);try{let q0=null;for(let G0 of f)try{q0=await X8(G0,S)}catch(V0){let _0=V0?.status,S0=V0?.code;if(_0===409||S0==="file_exists"){let T1=G0?.name||"file";if(!window.confirm(`"${T1}" already exists in ${r}. Overwrite?`))continue;q0=await X8(G0,S,{overwrite:!0})}else throw V0}if(q0?.path)c1.current=q0.path,L(q0.path),r0.current?.(q0.path);X0.current?.(S)}catch(q0){k(q0.message||"Failed to upload file")}finally{C0(!1)}},[]),i4=C(async(A,I)=>{if(!A)return;let f=p0.current?.get(A);if(!f)return;let S=I&&I!==""?I:".",r=A.includes("/")?A.split("/").slice(0,-1).join("/")||".":".";if(S===r)return;try{let G0=(await S6(A,S))?.path||A;if(f.type==="dir")X((V0)=>{let _0=new Set;for(let S0 of V0)if(S0===A)_0.add(G0);else if(S0.startsWith(`${A}/`))_0.add(`${G0}${S0.slice(A.length)}`);else _0.add(S0);return _0});if(L(G0),f.type==="dir")E(null),M(!1),P(null);else r0.current?.(G0);X0.current?.(r),X0.current?.(S)}catch(q0){k(q0?.message||"Failed to move entry")}},[]);h1.current=i4;let r4=C(async(A)=>{if(!t_(A))return;A.preventDefault(),$1.current=0,d(!1),a(null),U0(null),U1();let I=Array.from(A?.dataTransfer?.files||[]);if(I.length===0)return;let f=q1.current||D1(A)||O1();await d1(I,f)},[O1,D1,d1]),D5=C((A)=>{if(A?.stopPropagation?.(),L0)return;let I=A?.currentTarget?.dataset?.uploadTarget||".";p.current=I,Y0.current?.click()},[L0]),F1=C(()=>{if(L0)return;let A=v1.current,I=A?p0.current?.get(A):null;p.current=I?.type==="dir"?I.path:".",Y0.current?.click()},[L0]),W4=C(()=>{N1(()=>z_(null))},[N1,z_]),o4=C(()=>{N1(()=>F1())},[N1,F1]),X_=C(()=>{N1(()=>R1())},[N1,R1]),Z_=C(()=>{N1(()=>j_())},[N1,j_]),_4=C(()=>{if(!U||!A1)return;N1(()=>e0.current?.(U,D))},[N1,U,A1,D]),w4=C(()=>{if(!U||U===".")return;N1(()=>a1(U))},[N1,U,a1]),R4=C(()=>{if(!U||Z1)return;N1(()=>S4())},[N1,U,Z1,S4]),s4=C(()=>{if(!U||Z1)return;N1(()=>h_())},[N1,U,Z1,h_]),$4=C(()=>{if(!z1)return;if(P1(),typeof window<"u")window.open(z1,"_blank","noopener")},[P1,z1]),A_=C(()=>{P1(),Y?.()},[P1,Y]),A5=C(()=>{P1(),q?.()},[P1,q]),B4=C(()=>{P1(),Q?.()},[P1,Q]),u4=C((A)=>{if(!A||A.button!==0)return;let I=A.currentTarget;if(!I||!I.dataset)return;let f=I.dataset.path;if(!f||f===".")return;if(t0.current===f)return;let S=e1(A);if(S?.closest?.("button, a, input, .workspace-caret"))return;if(!__(S))return;A.preventDefault(),E0.current={path:f,dragging:!1,startX:A.clientX,startY:A.clientY};let r=(G0)=>{let V0=E0.current;if(!V0?.path)return;let _0=Math.abs(G0.clientX-V0.startX),S0=Math.abs(G0.clientY-V0.startY),T1=_0>4||S0>4;if(!V0.dragging&&T1)V0.dragging=!0,K0.current=!0,d(!0),a("move"),x1(V0.path),G_(G0.clientX,G0.clientY),document.body.style.userSelect="none",document.body.style.cursor="grabbing";if(V0.dragging){G0.preventDefault(),G_(G0.clientX,G0.clientY);let k_=document.elementFromPoint(G0.clientX,G0.clientY),Y_=l1(k_)||O1();if(q1.current!==Y_)V1(Y_);K_(Y_)}},q0=()=>{document.removeEventListener("mousemove",r),document.removeEventListener("mouseup",q0);let G0=E0.current;if(G0?.dragging&&G0.path){let V0=q1.current||O1(),_0=h1.current;if(typeof _0==="function")_0(G0.path,V0)}E0.current={path:null,dragging:!1,startX:0,startY:0},$1.current=0,d(!1),a(null),V1(null),U1(),n1(),document.body.style.userSelect="",document.body.style.cursor="",setTimeout(()=>{K0.current=!1},0)};document.addEventListener("mousemove",r),document.addEventListener("mouseup",q0)},[l1,O1,x1,G_,n1,V1,K_,U1]),E_=C(async(A)=>{let I=Array.from(A?.target?.files||[]);if(I.length===0)return;let f=p.current||".";if(await d1(I,f),p.current=".",A?.target)A.target.value=""},[d1]);return B`
        <aside
            class=${`workspace-sidebar${b?" workspace-drop-active":""}`}
            data-workspace-scale=${y0}
            ref=${P0}
            onDragEnter=${d4}
            onDragOver=${e_}
            onDragLeave=${c_}
            onDrop=${r4}
        >
            <input type="file" multiple style="display:none" ref=${Y0} onChange=${E_} />
            <div class="workspace-header">
                <div class="workspace-header-left">
                    <div class="workspace-menu-wrap">
                        <button
                            ref=${t}
                            class=${`workspace-menu-button${F0?" active":""}`}
                            onClick=${(A)=>{A.stopPropagation(),f0((I)=>!I)}}
                            title="Workspace actions"
                            aria-label="Workspace actions"
                            aria-haspopup="menu"
                            aria-expanded=${F0?"true":"false"}
                        >
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                <line x1="4" y1="7" x2="20" y2="7" />
                                <line x1="4" y1="12" x2="20" y2="12" />
                                <line x1="4" y1="17" x2="20" y2="17" />
                            </svg>
                        </button>
                        ${F0&&B`
                            <div class="workspace-menu-dropdown" ref=${y} role="menu" aria-label="Workspace options">
                                <button class="workspace-menu-item" role="menuitem" onClick=${W4} disabled=${L0}>New file</button>
                                <button class="workspace-menu-item" role="menuitem" onClick=${o4} disabled=${L0}>Upload files</button>
                                <button class="workspace-menu-item" role="menuitem" onClick=${X_}>Refresh tree</button>
                                <button class=${`workspace-menu-item${u?" active":""}`} role="menuitem" onClick=${Z_}>
                                    ${u?"Hide hidden files":"Show hidden files"}
                                </button>

                                ${U&&B`<div class="workspace-menu-separator"></div>`}
                                ${U&&!Z1&&B`
                                    <button class="workspace-menu-item" role="menuitem" onClick=${_4} disabled=${!A1}>Open in editor</button>
                                `}
                                ${t1&&B`
                                    <button class="workspace-menu-item" role="menuitem" onClick=${w4}>Rename selected</button>
                                `}
                                ${g1&&B`
                                    <button class="workspace-menu-item" role="menuitem" onClick=${s4}>Download selected file</button>
                                `}
                                ${z1&&B`
                                    <button class="workspace-menu-item" role="menuitem" onClick=${$4}>Download selected folder (zip)</button>
                                `}
                                ${J_&&B`
                                    <button class="workspace-menu-item danger" role="menuitem" onClick=${R4}>Delete selected file</button>
                                `}

                                ${(Y||q||Q)&&B`<div class="workspace-menu-separator"></div>`}
                                ${Y&&B`
                                    <button class="workspace-menu-item" role="menuitem" onClick=${A_}>
                                        Open terminal in tab
                                    </button>
                                `}
                                ${q&&B`
                                    <button class="workspace-menu-item" role="menuitem" onClick=${A5}>
                                        Open VNC in tab
                                    </button>
                                `}
                                ${Q&&B`
                                    <button class="workspace-menu-item" role="menuitem" onClick=${B4}>
                                        ${N?"Hide terminal dock":"Show terminal dock"}
                                    </button>
                                `}
                            </div>
                        `}
                    </div>
                    <span>Workspace</span>
                </div>
                <div class="workspace-header-actions">
                    <button class="workspace-create" onClick=${z_} title="New file" disabled=${L0}>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                            stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                            <line x1="12" y1="5" x2="12" y2="19" />
                            <line x1="5" y1="12" x2="19" y2="12" />
                        </svg>
                    </button>
                    <button class="workspace-refresh" onClick=${R1} title="Refresh">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"
                            stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                            <circle cx="12" cy="12" r="8.5" stroke-dasharray="42 12" stroke-dashoffset="6"
                                transform="rotate(75 12 12)" />
                            <polyline points="21 3 21 9 15 9" />
                        </svg>
                    </button>
                </div>
            </div>
            <div class="workspace-tree" onClick=${C_}>
                ${L0&&B`<div class="workspace-drop-hint">Uploading…</div>`}
                ${m&&B`<div class="workspace-loading">Loading…</div>`}
                ${z&&B`<div class="workspace-error">${z}</div>`}
                ${K&&B`
                    <div
                        class="workspace-tree-list"
                        ref=${a0}
                        tabIndex="0"
                        onClick=${p_}
                        onDblClick=${$_}
                        onKeyDown=${K1}
                        onTouchStart=${y_}
                        onTouchEnd=${D_}
                        onTouchMove=${P4}
                        onTouchCancel=${D_}
                    >
                        ${H_.map(({node:A,depth:I})=>{let f=A.type==="dir",S=A.path===U,r=A.path===H,q0=f&&V.has(A.path),G0=N0&&A.path===N0,V0=Array.isArray(A.children)&&A.children.length>0?A.children.length:Number(A.child_count)||0;return B`
                                <div
                                    key=${A.path}
                                    class=${`workspace-row${S?" selected":""}${G0?" drop-target":""}`}
                                    style=${{paddingLeft:`${8+I*C4.indentPx}px`}}
                                    data-path=${A.path}
                                    data-type=${A.type}
                                    onMouseDown=${u4}
                                >
                                    <span class="workspace-caret" aria-hidden="true">
                                        ${f?q0?B`<svg viewBox="0 0 12 12"><polygon points="1,2 11,2 6,11"/></svg>`:B`<svg viewBox="0 0 12 12"><polygon points="2,1 11,6 2,11"/></svg>`:null}
                                    </span>
                                    <svg class=${`workspace-node-icon${f?" folder":""}`}
                                        viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                        stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                        aria-hidden="true">
                                        ${f?B`<path d="M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>`:B`<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/>`}
                                    </svg>
                                    ${r?B`
                                            <input
                                                class="workspace-rename-input"
                                                ref=${o}
                                                value=${J}
                                                onInput=${(_0)=>W(_0?.target?.value||"")}
                                                onKeyDown=${(_0)=>{if(_0.key==="Enter")_0.preventDefault(),b1();else if(_0.key==="Escape")_0.preventDefault(),M1()}}
                                                onBlur=${M1}
                                                onClick=${(_0)=>_0.stopPropagation()}
                                            />
                                        `:B`<span class="workspace-label"><span class="workspace-label-text">${A.name}</span></span>`}
                                    ${f&&!q0&&V0>0&&B`
                                        <span class="workspace-count">${V0}</span>
                                    `}
                                    ${f&&B`
                                        <button
                                            class="workspace-folder-upload"
                                            data-upload-target=${A.path}
                                            title="Upload files to this folder"
                                            onClick=${D5}
                                            disabled=${L0}
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
                <div class="workspace-preview-splitter-h" onMouseDown=${n4} onTouchStart=${P_}></div>
                <div class="workspace-preview">
                    <div class="workspace-preview-header">
                        <span class="workspace-preview-title">${U}</span>
                        <div class="workspace-preview-actions">
                            <button class="workspace-create" onClick=${z_} title="New file" disabled=${L0}>
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                    stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                    <line x1="12" y1="5" x2="12" y2="19" />
                                    <line x1="5" y1="12" x2="19" y2="12" />
                                </svg>
                            </button>
                            ${!Z1&&B`
                                <button
                                    class="workspace-download workspace-edit"
                                    onClick=${()=>A1&&e0.current?.(U,D)}
                                    title=${L4}
                                    disabled=${!A1}
                                >
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                        stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                        <path d="M12 20h9" />
                                        <path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4Z" />
                                    </svg>
                                </button>
                                <button
                                    class="workspace-download workspace-delete"
                                    onClick=${S4}
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
                                    <button class="workspace-download" onClick=${F1}
                                        title="Upload files to this folder" disabled=${L0}>
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                            stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                                            <polyline points="7 8 12 3 17 8"/>
                                            <line x1="12" y1="3" x2="12" y2="15"/>
                                        </svg>
                                    </button>
                                    <a class="workspace-download" href=${U8(U,u)}
                                        title="Download folder as zip" onClick=${(A)=>A.stopPropagation()}>
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                            stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                                            <polyline points="7 10 12 15 17 10"/>
                                            <line x1="12" y1="15" x2="12" y2="3"/>
                                        </svg>
                                    </a>`:B`<button class="workspace-download" onClick=${h_} title="Download">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                        stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                                        <polyline points="7 10 12 15 17 10"/>
                                        <line x1="12" y1="15" x2="12" y2="3"/>
                                    </svg>
                                </button>`}
                        </div>
                    </div>
                    ${x&&B`<div class="workspace-loading">Loading preview…</div>`}
                    ${D?.error&&B`<div class="workspace-error">${D.error}</div>`}
                    ${Z1&&B`
                        <div class="workspace-preview-text">Folder selected — create file, upload files, or download as zip.</div>
                        ${O0?.loading&&B`<div class="workspace-loading">Loading folder size preview…</div>`}
                        ${O0?.error&&B`<div class="workspace-error">${O0.error}</div>`}
                        ${O0?.payload&&O0.payload.segments?.length>0&&B`
                            <${CX} payload=${O0.payload} />
                        `}
                        ${O0?.payload&&(!O0.payload.segments||O0.payload.segments.length===0)&&B`
                            <div class="workspace-preview-text">No file size data available for this folder yet.</div>
                        `}
                    `}
                    ${D&&!D.error&&!Z1&&B`
                        <div class="workspace-preview-body" ref=${D0}></div>
                    `}
                    ${R&&B`
                        <div class="workspace-download-card">
                            <${yX} mediaId=${R} />
                        </div>
                    `}
                </div>
            `}
            ${j0&&B`
                <div class="workspace-drag-ghost" ref=${x_}>${j0.label}</div>
            `}
        </aside>
    `}var PX=new Set(["kanban-editor","mindmap-editor"]);function SX(_,$,j){let Z=String(_||"").trim();if(!Z)return null;if($)return $;if(typeof j!=="function")return null;return j({path:Z,mode:"edit"})?.id||null}function hY(_,$,j){let Z=SX(_,$,j);return Z!=null&&PX.has(Z)}var wX=/\.(docx?|xlsx?|pptx?|odt|ods|odp|rtf)$/i,RX=/\.(csv|tsv)$/i,uX=/\.pdf$/i,fX=/\.(png|jpe?g|gif|webp|bmp|ico|svg)$/i,cY=/\.drawio(\.xml|\.svg|\.png)?$/i;function lY({tabs:_,activeId:$,onActivate:j,onClose:Z,onCloseOthers:Y,onCloseAll:q,onTogglePin:Q,onTogglePreview:N,onEditSource:K,previewTabs:G,paneOverrides:V,onToggleDock:X,dockVisible:U,onToggleZen:L,zenMode:H,onPopOutTab:O}){let[J,W]=g(null),D=T(null);v(()=>{if(!J)return;let z=(k)=>{if(k.type==="keydown"&&k.key!=="Escape")return;W(null)};return document.addEventListener("click",z),document.addEventListener("keydown",z),()=>{document.removeEventListener("click",z),document.removeEventListener("keydown",z)}},[J]),v(()=>{let z=(k)=>{if(k.ctrlKey&&k.key==="Tab"){if(k.preventDefault(),!_.length)return;let u=_.findIndex((n)=>n.id===$);if(k.shiftKey){let n=_[(u-1+_.length)%_.length];j?.(n.id)}else{let n=_[(u+1)%_.length];j?.(n.id)}return}if((k.ctrlKey||k.metaKey)&&k.key==="w"){let u=document.querySelector(".editor-pane");if(u&&u.contains(document.activeElement)){if(k.preventDefault(),$)Z?.($)}}};return document.addEventListener("keydown",z),()=>document.removeEventListener("keydown",z)},[_,$,j,Z]);let E=C((z,k)=>{if(z.button===1){z.preventDefault(),Z?.(k);return}if(z.button===0)j?.(k)},[j,Z]),R=C((z,k)=>{z.preventDefault(),W({id:k,x:z.clientX,y:z.clientY})},[]),P=C((z)=>{z.preventDefault(),z.stopPropagation()},[]),m=C((z,k)=>{z.preventDefault(),z.stopPropagation(),Z?.(k)},[Z]);v(()=>{if(!$||!D.current)return;let z=D.current.querySelector(".tab-item.active");if(z)z.scrollIntoView({block:"nearest",inline:"nearest",behavior:"smooth"})},[$]);let c=C((z)=>{if(!(V instanceof Map))return null;return V.get(z)||null},[V]),x=v0(()=>_.find((z)=>z.id===J?.id)||null,[J?.id,_]),M=v0(()=>{let z=J?.id;if(!z)return!1;return hY(z,c(z),(k)=>c0.resolve(k))},[J?.id,c]);if(!_.length)return null;return B`
        <div class="tab-strip" ref=${D} role="tablist">
            ${_.map((z)=>B`
                <div
                    key=${z.id}
                    class=${`tab-item${z.id===$?" active":""}${z.dirty?" dirty":""}${z.pinned?" pinned":""}`}
                    role="tab"
                    aria-selected=${z.id===$}
                    title=${z.path}
                    onMouseDown=${(k)=>E(k,z.id)}
                    onContextMenu=${(k)=>R(k,z.id)}
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
                        onMouseDown=${P}
                        onClick=${(k)=>m(k,z.id)}
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
            ${X&&B`
                <div class="tab-strip-spacer"></div>
                <button
                    class=${`tab-strip-dock-toggle${U?" active":""}`}
                    onClick=${X}
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
                    class=${`tab-strip-zen-toggle${H?" active":""}`}
                    onClick=${L}
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
        ${J&&B`
            <div class="tab-context-menu" style=${{left:J.x+"px",top:J.y+"px"}}>
                <button onClick=${()=>{Z?.(J.id),W(null)}}>Close</button>
                <button onClick=${()=>{Y?.(J.id),W(null)}}>Close Others</button>
                <button onClick=${()=>{q?.(),W(null)}}>Close All</button>
                <hr />
                <button onClick=${()=>{Q?.(J.id),W(null)}}>
                    ${x?.pinned?"Unpin":"Pin"}
                </button>
                ${M&&K&&B`
                    <button onClick=${()=>{K(J.id),W(null)}}>Edit Source</button>
                `}
                ${O&&B`
                    <button onClick=${()=>{let z=_.find((k)=>k.id===J.id);O(J.id,z?.label),W(null)}}>Open in Window</button>
                `}
                ${N&&/\.(md|mdx|markdown)$/i.test(J.id)&&B`
                    <hr />
                    <button onClick=${()=>{N(J.id),W(null)}}>
                        ${G?.has(J.id)?"Hide Preview":"Preview"}
                    </button>
                `}
                ${wX.test(J.id)&&B`
                    <hr />
                    <button onClick=${()=>{let z="/workspace/raw?path="+encodeURIComponent(J.id),k=J.id.split("/").pop()||"document",u="/office-viewer/?url="+encodeURIComponent(z)+"&name="+encodeURIComponent(k);window.open(u,"_blank","noopener"),W(null)}}>Open in New Tab</button>
                `}
                ${RX.test(J.id)&&B`
                    <hr />
                    <button onClick=${()=>{let z="/csv-viewer/?path="+encodeURIComponent(J.id);window.open(z,"_blank","noopener"),W(null)}}>Open in New Tab</button>
                `}
                ${uX.test(J.id)&&B`
                    <hr />
                    <button onClick=${()=>{let z="/workspace/raw?path="+encodeURIComponent(J.id);window.open(z,"_blank","noopener"),W(null)}}>Open in New Tab</button>
                `}
                ${fX.test(J.id)&&!cY.test(J.id)&&B`
                    <hr />
                    <button onClick=${()=>{let z="/image-viewer/?path="+encodeURIComponent(J.id);window.open(z,"_blank","noopener"),W(null)}}>Open in New Tab</button>
                `}
                ${cY.test(J.id)&&B`
                    <hr />
                    <button onClick=${()=>{let z="/drawio/edit?path="+encodeURIComponent(J.id);window.open(z,"_blank","noopener"),W(null)}}>Open in New Tab</button>
                `}
            </div>
        `}
    `}function vX(_){let{workspaceOpen:$,editorOpen:j,chatOnlyMode:Z,zenMode:Y}=_;return`app-shell${$?"":" workspace-collapsed"}${j?" editor-open":""}${Z?" chat-only":""}${Y?" zen-mode":""}`}function nY(_){let{appShellRef:$,workspaceOpen:j,editorOpen:Z,chatOnlyMode:Y,zenMode:q,isRenameBranchFormOpen:Q,closeRenameCurrentBranchForm:N,handleRenameCurrentBranch:K,renameBranchNameDraft:G,renameBranchNameInputRef:V,setRenameBranchNameDraft:X,renameBranchDraftState:U,isRenamingBranch:L,addFileRef:H,openEditor:O,openTerminalTab:J,openVncTab:W,hasDockPanes:D,toggleDock:E,dockVisible:R,handleSplitterMouseDown:P,handleSplitterTouchStart:m,showEditorPaneContainer:c,tabStripTabs:x,tabStripActiveId:M,handleTabActivate:z,handleTabClose:k,handleTabCloseOthers:u,handleTabCloseAll:n,handleTabTogglePin:b,handleTabTogglePreview:d,handleTabEditSource:i,previewTabs:a,tabPaneOverrides:j0,toggleZenMode:e,handlePopOutPane:N0,isWebAppMode:U0,editorContainerRef:L0,editorInstanceRef:C0,handleDockSplitterMouseDown:O0,handleDockSplitterTouchStart:B0,TERMINAL_TAB_PATH:u0,dockContainerRef:J0,handleEditorSplitterMouseDown:y0,handleEditorSplitterTouchStart:b0,searchQuery:F0,isIOSDevice:f0,currentBranchRecord:Q0,currentChatJid:M0,currentChatBranches:l0,handleBranchPickerChange:i0,formatBranchPickerLabel:H1,openRenameCurrentBranchForm:_1,handlePruneCurrentBranch:p0,currentHashtag:j1,handleBackToTimeline:e0,activeSearchScopeLabel:r0,posts:X0,isMainTimelineView:P0,hasMore:a0,loadMore:o,timelineRef:Y0,handleHashtagClick:p,addMessageRef:l,scrollToMessage:z0,openFileFromPill:E0,handleDeletePost:I0,handleOpenFloatingWidget:K0,agents:x0,userProfile:m0,removingPostIds:H0,agentStatus:R0,isCompactionStatus:D0,agentDraft:Z0,agentPlan:y,agentThought:t,pendingRequest:W0,intentToast:A0,currentTurnId:n0,steerQueued:$1,handlePanelToggle:q1,btwSession:J1,closeBtwPanel:p1,handleBtwRetry:x_,handleBtwInject:o1,floatingWidget:w1,handleCloseFloatingWidget:h1,handleFloatingWidgetEvent:v1,extensionStatusPanels:t0,pendingExtensionPanelActions:c1,handleExtensionPanelAction:r_,searchOpen:s1,followupQueueItems:o_,handleInjectQueuedFollowup:m_,handleRemoveQueuedFollowup:O1,viewStateRef:l1,loadPosts:D1,scrollToBottom:V1,searchScope:U1,handleSearch:K_,setSearchScope:G_,enterSearchMode:x1,exitSearchMode:n1,fileRefs:Q1,removeFileRef:M1,clearFileRefs:a1,setFileRefsFromCompose:b1,messageRefs:s_,removeMessageRef:z_,clearMessageRefs:a_,setMessageRefsFromCompose:F_,handleCreateSessionFromCompose:U4,handleRestoreBranch:H_,attachActiveEditorFile:T_,followupQueueCount:C4,handleBtwIntercept:y4,handleMessageResponse:Z1,handleComposeSubmitError:A1,handlePopOutChat:L4,isComposeBoxAgentActive:t1,activeChatAgents:J_,connectionStatus:g1,activeModel:z1,activeModelUsage:P1,activeThinkingLevel:N1,supportsThinking:e1,contextUsage:__,notificationsEnabled:$_,notificationPermission:p_,handleToggleNotifications:R1,setActiveModel:S1,applyModelState:j_,setPendingRequest:C_,pendingRequestRef:L1,toggleWorkspace:O_}=_;return B`
    <div class=${vX({workspaceOpen:j,editorOpen:Z,chatOnlyMode:Y,zenMode:q})} ref=${$}>
      ${Q&&B`
        <div class="rename-branch-overlay" onPointerDown=${(K1)=>{if(K1.target===K1.currentTarget)N()}}>
          <form
            class="rename-branch-panel"
            onSubmit=${(K1)=>{K1.preventDefault(),K(G)}}
          >
            <div class="rename-branch-title">Rename branch handle</div>
            <input
              ref=${V}
              value=${G}
              onInput=${(K1)=>{let y_=K1.currentTarget?.value??"";X(String(y_))}}
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
      ${!Y&&B`
        <${pY}
          onFileSelect=${H}
          visible=${j}
          active=${j||Z}
          onOpenEditor=${O}
          onOpenTerminalTab=${J}
          onOpenVncTab=${W}
          onToggleTerminal=${D?E:void 0}
          terminalVisible=${Boolean(D&&R)}
        />
        <button
          class=${`workspace-toggle-tab${j?" open":" closed"}`}
          onClick=${O_}
          title=${j?"Hide workspace":"Show workspace"}
          aria-label=${j?"Hide workspace":"Show workspace"}
        >
          <svg class="workspace-toggle-tab-icon" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <polyline points="6 3 11 8 6 13" />
          </svg>
        </button>
        <div class="workspace-splitter" onMouseDown=${P} onTouchStart=${m}></div>
      `}
      ${c&&B`
        <div class="editor-pane-container">
          ${q&&B`<div class="zen-hover-zone"></div>`}
          ${Z&&B`
            <${lY}
              tabs=${x}
              activeId=${M}
              onActivate=${z}
              onClose=${k}
              onCloseOthers=${u}
              onCloseAll=${n}
              onTogglePin=${b}
              onTogglePreview=${d}
              onEditSource=${i}
              previewTabs=${a}
              paneOverrides=${j0}
              onToggleDock=${D?E:void 0}
              dockVisible=${D&&R}
              onToggleZen=${e}
              zenMode=${q}
              onPopOutTab=${U0?void 0:N0}
            />
          `}
          ${Z&&B`<div class="editor-pane-host" ref=${L0}></div>`}
          ${Z&&M&&a.has(M)&&B`
            <${h8}
              getContent=${()=>C0.current?.getContent?.()}
              path=${M}
              onClose=${()=>d(M)}
            />
          `}
          ${D&&R&&B`<div class="dock-splitter" onMouseDown=${O0} onTouchStart=${B0}></div>`}
          ${D&&B`<div class=${`dock-panel${R?"":" hidden"}`}>
            <div class="dock-panel-header">
              <span class="dock-panel-title">Terminal</span>
              <div class="dock-panel-actions">
                ${!U0&&B`
                  <button class="dock-panel-action" onClick=${()=>N0(u0,"Terminal")} title="Open terminal in window" aria-label="Open terminal in window">
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
            <div class="dock-panel-body" ref=${J0}></div>
          </div>`}
        </div>
        <div class="editor-splitter" onMouseDown=${y0} onTouchStart=${b0}></div>
      `}
      <div class="container">
        ${F0&&f0()&&B`<div class="search-results-spacer"></div>`}
        ${Y&&B`
          <div class="chat-window-header">
            <div class="chat-window-header-main">
              <span class="chat-window-header-title">
                ${Q0?.agent_name?`@${Q0.agent_name}`:M0}
              </span>
              <span class="chat-window-header-subtitle">${Q0?.chat_jid||M0}</span>
            </div>
            <div class="chat-window-header-actions">
              ${l0.length>1&&B`
                <label class="chat-window-branch-picker-wrap">
                  <span class="chat-window-branch-picker-label">Branch</span>
                  <select
                    class="chat-window-branch-picker"
                    value=${M0}
                    onChange=${(K1)=>i0(K1.currentTarget.value)}
                  >
                    ${l0.map((K1)=>B`
                      <option key=${K1.chat_jid} value=${K1.chat_jid}>
                        ${H1(K1,{currentChatJid:M0})}
                      </option>
                    `)}
                  </select>
                </label>
              `}
              ${Q0?.chat_jid&&B`
                <button
                  class="chat-window-header-button"
                  type="button"
                  onClick=${_1}
                  title=${L?"Renaming branch…":"Rename this branch"}
                  aria-label="Rename this branch"
                  disabled=${L}
                >
                  ${L?"Renaming…":"Rename"}
                </button>
              `}
              ${Q0?.chat_jid&&Q0.chat_jid!==(Q0.root_chat_jid||Q0.chat_jid)&&B`
                <button
                  class="chat-window-header-button"
                  type="button"
                  onClick=${p0}
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
        ${(j1||F0)&&B`
          <div class="hashtag-header">
            <button class="back-btn" onClick=${e0}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
            </button>
            <span>${j1?`#${j1}`:`Search: ${F0} · ${r0}`}</span>
          </div>
        `}
        <${MY}
          posts=${X0}
          hasMore=${P0?a0:!1}
          onLoadMore=${P0?o:void 0}
          timelineRef=${Y0}
          onHashtagClick=${p}
          onMessageRef=${l}
          onScrollToMessage=${z0}
          onFileRef=${E0}
          onPostClick=${void 0}
          onDeletePost=${I0}
          onOpenWidget=${K0}
          emptyMessage=${j1?`No posts with #${j1}`:F0?`No results for "${F0}"`:void 0}
          agents=${x0}
          user=${m0}
          reverse=${P0}
          removingPostIds=${H0}
          searchQuery=${F0}
        />
        <${Y3}
          status=${D0(R0)?null:R0}
          draft=${Z0}
          plan=${y}
          thought=${t}
          pendingRequest=${W0}
          intent=${A0}
          turnId=${n0}
          steerQueued=${$1}
          onPanelToggle=${q1}
          showExtensionPanels=${!1}
        />
        <${qY}
          session=${J1}
          onClose=${p1}
          onRetry=${x_}
          onInject=${o1}
        />
        <${QY}
          widget=${w1}
          onClose=${h1}
          onWidgetEvent=${v1}
        />
        <${Y3}
          extensionPanels=${Array.from(t0.values())}
          pendingPanelActions=${c1}
          onExtensionPanelAction=${r_}
          turnId=${n0}
          steerQueued=${$1}
          onPanelToggle=${q1}
          showCorePanels=${!1}
        />
        <${j3}
          items=${s1?[]:o_}
          onInjectQueuedFollowup=${m_}
          onRemoveQueuedFollowup=${O1}
          onOpenFilePill=${E0}
        />
        <${YY}
          onPost=${()=>{let{searchQuery:K1,searchOpen:y_}=l1.current||{};if(!K1&&!y_)D1(),V1()}}
          onFocus=${V1}
          searchMode=${s1}
          searchScope=${U1}
          onSearch=${K_}
          onSearchScopeChange=${G_}
          onEnterSearch=${x1}
          onExitSearch=${n1}
          fileRefs=${Q1}
          onRemoveFileRef=${M1}
          onClearFileRefs=${a1}
          onSetFileRefs=${b1}
          messageRefs=${s_}
          onRemoveMessageRef=${z_}
          onClearMessageRefs=${a_}
          onSetMessageRefs=${F_}
          onSwitchChat=${i0}
          onRenameSession=${K}
          isRenameSessionInProgress=${L}
          onCreateSession=${U4}
          onDeleteSession=${p0}
          onRestoreSession=${H_}
          activeEditorPath=${Y?null:M}
          onAttachEditorFile=${Y?void 0:T_}
          onOpenFilePill=${E0}
          followupQueueCount=${C4}
          followupQueueItems=${o_}
          showQueueStack=${!1}
          onInjectQueuedFollowup=${m_}
          onRemoveQueuedFollowup=${O1}
          onSubmitIntercept=${y4}
          onMessageResponse=${Z1}
          onSubmitError=${A1}
          onPopOutChat=${U0?void 0:L4}
          isAgentActive=${t1}
          activeChatAgents=${J_}
          currentChatJid=${M0}
          connectionStatus=${g1}
          activeModel=${z1}
          modelUsage=${P1}
          thinkingLevel=${N1}
          supportsThinking=${e1}
          contextUsage=${__}
          notificationsEnabled=${$_}
          notificationPermission=${p_}
          onToggleNotifications=${R1}
          onModelChange=${S1}
          onModelStateChange=${j_}
          statusNotice=${D0(R0)?R0:null}
        />
        <${VY}
          request=${W0}
          onRespond=${()=>{C_(null),L1.current=null}}
        />
      </div>
    </div>
  `}async function dY(_){let{currentChatJid:$,getAgentStatus:j,activeChatJidRef:Z,wasAgentActiveRef:Y,viewStateRef:q,refreshTimeline:Q,clearAgentRunState:N,agentStatusRef:K,pendingRequestRef:G,thoughtBufferRef:V,draftBufferRef:X,setAgentStatus:U,setAgentDraft:L,setAgentPlan:H,setAgentThought:O,setPendingRequest:J,setActiveTurn:W,noteAgentActivity:D,clearLastActivityFlag:E}=_,R=$;try{let P=await j(R);if(Z.current!==R)return null;if(!P||P.status!=="active"||!P.data){if(Y.current&&i_(q.current))Q();return Y.current=!1,N(),K.current=null,U(null),L({text:"",totalLines:0}),H(""),O({text:"",totalLines:0}),J(null),G.current=null,P??null}Y.current=!0;let m=P.data;K.current=m;let c=f8(m);if(c)W(c);D({running:!0,clearSilence:!0}),E(),U(m);let x=J5(P.thought);if(x)O((z)=>{if(c$(z,x.text))return z;return V.current=x.text,x});let M=J5(P.draft);if(M)L((z)=>{if(c$(z,M.text))return z;return X.current=M.text,M});return P}catch(P){return console.warn("Failed to fetch agent status:",P),null}}async function iY(_){let{isAgentRunningRef:$,pendingRequestRef:j,currentTurnIdRef:Z,silentRecoveryRef:Y,silenceRefreshMs:q,viewStateRef:Q,refreshTimeline:N,refreshQueueState:K,refreshAgentStatus:G,now:V=()=>Date.now()}=_;if(!$.current)return null;if(j.current)return null;let X=Z.current||null,U=Y.current,L=V();if(U.inFlight)return null;if(U.turnId===X&&L-U.lastAttemptAt<q)return null;U.inFlight=!0,U.lastAttemptAt=L,U.turnId=X;try{if(i_(Q.current))await N();return await K(),await G()}finally{U.inFlight=!1}}function rY(_){let{isAgentRunningRef:$,pendingRequestRef:j,lastAgentEventRef:Z,lastSilenceNoticeRef:Y,agentStatusRef:q,silenceWarningMs:Q,silenceFinalizeMs:N,silenceRefreshMs:K,isCompactionStatus:G,setAgentStatus:V,reconcileSilentTurn:X,now:U=()=>Date.now()}=_;if(!$.current)return;if(j.current)return;let L=Z.current;if(!L)return;let H=U(),O=H-L,J=G(q.current);if(O>=N){if(!J)V({type:"waiting",title:"Re-syncing after a quiet period…"});X();return}if(O>=Q&&H-Y.current>=K){if(!J){let W=Math.floor(O/1000);V({type:"waiting",title:`Waiting for model… No events for ${W}s`})}Y.current=H,X()}}function oY(_){let{isAgentRunningRef:$,lastSilenceNoticeRef:j,lastAgentEventRef:Z,currentTurnIdRef:Y,thoughtExpandedRef:q,draftExpandedRef:Q,draftBufferRef:N,thoughtBufferRef:K,pendingRequestRef:G,lastAgentResponseRef:V,stalledPostIdRef:X,scrollToBottomRef:U,setCurrentTurnId:L,setAgentDraft:H,setAgentPlan:O,setAgentThought:J,setPendingRequest:W,setAgentStatus:D,setPosts:E,dedupePosts:R,now:P=()=>Date.now(),nowIso:m=()=>new Date().toISOString()}=_;if(!$.current)return;$.current=!1,j.current=0,Z.current=null,Y.current=null,L(null),q.current=!1,Q.current=!1;let c=(N.current||"").trim();if(N.current="",K.current="",H({text:"",totalLines:0}),O(""),J({text:"",totalLines:0}),W(null),G.current=null,V.current=null,!c){D({type:"error",title:"Response stalled - No content received"});return}let M=`${c}${`

⚠️ Response may be incomplete - the model stopped responding`}`,z=P(),k=m(),u={id:z,timestamp:k,data:{type:"agent_response",content:M,agent_id:"default",is_local_stall:!0}};X.current=z,E((n)=>n?R([...n,u]):[u]),U.current?.(),D(null)}var bX=HZ(),sY=z6,gX=H6,mX=O6,pX=M6,hX=I6,H3=D6,J3=r1(m1,"getAgentContext",null),cX=r1(m1,"getAutoresearchStatus",null),lX=r1(m1,"stopAutoresearch",{status:"ok"}),nX=r1(m1,"dismissAutoresearch",{status:"ok"}),aY=r1(m1,"getAgentModels",{current:null,models:[]}),tY=r1(m1,"getActiveChatAgents",{chats:[]}),O3=r1(m1,"getChatBranches",{chats:[]}),dX=r1(m1,"renameChatBranch",null),iX=r1(m1,"pruneChatBranch",null),rX=r1(m1,"restoreChatBranch",null),eY=r1(m1,"getAgentQueueState",{count:0}),_q=r1(m1,"steerAgentQueueItem",{removed:!1,queued:"steer"}),$q=r1(m1,"removeAgentQueueItem",{removed:!1}),oX=r1(m1,"streamSidePrompt",null);if(window.marked)marked.setOptions({breaks:!0,gfm:!0});c0.register(u6);c0.register(B$);c0.register(W$);c0.register(z$);c0.register(F$);c0.register(H$);c0.register(O$);c0.register(D$);c0.register(E$);c0.register(I$);c0.register(x$);c0.register(Q$);f6();c0.register(g6);c0.register(m6);function sX({locationParams:_,navigate:$}){let{currentChatJid:j,chatOnlyMode:Z,panePopoutMode:Y,panePopoutPath:q,panePopoutLabel:Q,branchLoaderMode:N,branchLoaderSourceChatJid:K}=v0(()=>DZ(_),[_]),[G,V]=g("disconnected"),[X,U]=g(()=>Q4()),[L,H]=g(null),[O,J]=g(null),[W,D]=g(!1),[E,R]=g("current"),[P,m]=g([]),[c,x]=g([]),[M,z]=g(null),{agentStatus:k,setAgentStatus:u,agentDraft:n,setAgentDraft:b,agentPlan:d,setAgentPlan:i,agentThought:a,setAgentThought:j0,pendingRequest:e,setPendingRequest:N0,currentTurnId:U0,setCurrentTurnId:L0,steerQueuedTurnId:C0,setSteerQueuedTurnId:O0,lastAgentEventRef:B0,lastSilenceNoticeRef:u0,isAgentRunningRef:J0,draftBufferRef:y0,thoughtBufferRef:b0,pendingRequestRef:F0,stalledPostIdRef:f0,currentTurnIdRef:Q0,steerQueuedTurnIdRef:M0,thoughtExpandedRef:l0,draftExpandedRef:i0}=d7(),[H1,_1]=g({}),[p0,j1]=g(null),[e0,r0]=g(null),[X0,P0]=g(!1),[a0,o]=g(null),[Y0,p]=g([]),[l,z0]=g([]),[E0,I0]=g(null),[K0,x0]=g(()=>new Map),[m0,H0]=g(()=>new Set),[R0,D0]=g([]),[Z0,y]=g(!1),[t,W0]=g(()=>OZ()),[A0,n0]=g(null),$1=T(new Set),q1=v0(()=>Y0.find((s)=>s?.chat_jid===j)||null,[Y0,j]),J1=v0(()=>l.find((s)=>s?.chat_jid===j)||q1||null,[q1,l,j]),p1=J1?.root_chat_jid||q1?.root_chat_jid||j,x_=JZ(E),[o1,w1]=g(()=>({status:N?"running":"idle",message:N?"Preparing a new chat branch…":""})),h1=R0.length,v1=T(new Set),t0=T([]),c1=T(new Set),r_=T(0),s1=T({inFlight:!1,lastAttemptAt:0,turnId:null});v1.current=new Set(R0.map((s)=>s.row_id)),t0.current=R0;let{notificationsEnabled:o_,notificationPermission:m_,toggleNotifications:O1,notify:l1}=l7(),[D1,V1]=g(()=>new Set),[U1,K_]=g(()=>L5("workspaceOpen",!0)),G_=T(null),{editorOpen:x1,tabStripTabs:n1,tabStripActiveId:Q1,previewTabs:M1,tabPaneOverrides:a1,openEditor:b1,closeEditor:s_,handleTabClose:z_,handleTabActivate:a_,handleTabCloseOthers:F_,handleTabCloseAll:U4,handleTabTogglePin:H_,handleTabTogglePreview:T_,handleTabEditSource:C4,revealInExplorer:y4}=r7({onTabClosed:(s)=>G_.current?.(s)}),Z1=T(null),A1=T(null),L4=T(null),t1=T(null),J_=c0.getDockPanes().length>0,[g1,z1]=g(!1),P1=C(()=>z1((s)=>!s),[]),N1=C(()=>{b1(Q5,{label:"Terminal"})},[b1]),e1=C(()=>{b1(X4,{label:"VNC"})},[b1]),__=v0(()=>NZ(n1,Q1),[Q1,n1]),$_=v0(()=>KZ(a1,Q1),[a1,Q1]),p_=v0(()=>GZ(Q,__,q),[__,Q,q]),R1=v0(()=>XZ(n1,M1,Q1),[M1,Q1,n1]),S1=v0(()=>VZ(q,X4),[q]),j_=v0(()=>UZ(q,Q5,R1,S1),[S1,R1,q]),C_=LZ(Y,Z,x1,J_,g1),[L1,O_]=g(!1),K1=T(!1),y_=C(()=>{if(!x1||Z)return;if(K1.current=g1,g1)z1(!1);O_(!0)},[x1,Z,g1]),D_=C(()=>{if(!L1)return;if(O_(!1),K1.current)z1(!0),K1.current=!1},[L1]),P4=C(()=>{if(L1)D_();else y_()},[L1,y_,D_]);v(()=>{if(L1&&!x1)D_()},[L1,x1,D_]),v(()=>{if(!Y||!q)return;if(s0.getActiveId()===q)return;b1(q,Q?{label:Q}:void 0)},[b1,Q,Y,q]),v(()=>{let s=Z1.current;if(!s)return;if(A1.current)A1.current.dispose(),A1.current=null;let k0=Q1;if(!k0)return;let g0={path:k0,mode:"edit"},k1=($_?c0.get($_):null)||c0.resolve(g0)||c0.get("editor");if(!k1){s.innerHTML='<div style="padding:2em;color:var(--text-secondary);text-align:center;">No editor available for this file.</div>';return}let d0=k1.mount(s,g0);A1.current=d0,d0.onDirtyChange?.((C1)=>{s0.setDirty(k0,C1)}),d0.onSaveRequest?.(()=>{}),d0.onClose?.(()=>{s_()});let Q_=s0.getViewState(k0);if(Q_&&typeof d0.restoreViewState==="function")requestAnimationFrame(()=>d0.restoreViewState(Q_));if(typeof d0.onViewStateChange==="function")d0.onViewStateChange((C1)=>{s0.saveViewState(k0,C1)});return requestAnimationFrame(()=>d0.focus()),()=>{if(A1.current===d0)d0.dispose(),A1.current=null}},[Q1,$_,s_]);let n4=C(async(s)=>{let k0=typeof Q1==="string"?Q1.trim():"",g0=A1.current;if(!k0||!g0?.setContent)return;if(typeof g0.isDirty==="function"&&g0.isDirty())return;if(!(Array.isArray(s)&&s.length>0?s.some((d0)=>{let Q_=Array.isArray(d0?.changed_paths)?d0.changed_paths.map((f1)=>typeof f1==="string"?f1.trim():"").filter(Boolean):[];if(Q_.length>0)return Q_.some((f1)=>f1==="."||f1===k0);let C1=typeof d0?.path==="string"?d0.path.trim():"";return!C1||C1==="."||C1===k0}):!0))return;try{let d0=await y5(k0,1e6,"edit"),Q_=typeof d0?.text==="string"?d0.text:"",C1=typeof d0?.mtime==="string"&&d0.mtime.trim()?d0.mtime.trim():new Date().toISOString();g0.setContent(Q_,C1)}catch(d0){console.warn("[workspace_update] Failed to refresh active pane:",d0)}},[Q1]);v(()=>{let s=L4.current;if(t1.current)t1.current.dispose(),t1.current=null;if(!s||!J_||!g1)return;let k0=c0.getDockPanes()[0];if(!k0){s.innerHTML='<div class="terminal-placeholder">No dock pane available.</div>';return}let g0=k0.mount(s,{mode:"view"});return t1.current=g0,requestAnimationFrame(()=>g0.focus?.()),()=>{if(t1.current===g0)g0.dispose(),t1.current=null}},[J_,g1]);let[P_,h_]=g({name:"You",avatar_url:null,avatar_background:null}),S4=T(null),t_=T(!1),d4=T(!1),e_=T(!1),c_=T(null),d1=T(j),i4=T(new Map),r4=T(j),D5=T(0),F1=T(0),W4=T({}),o4=T({name:null,avatar_url:null}),X_=T({currentHashtag:null,searchQuery:null,searchOpen:!1}),Z_=T(null),_4=T(null),w4=T(0),R4=T(0),s4=T(0),$4=T(null),A_=T(null),A5=T(null),B4=T(null),u4=T(0),E_=T({title:null,avatarBase:null}),A=T(null),I=T(!1),[f,S]=g(!1),r=T(0),[q0,G0]=g(!1),[V0,_0]=g(""),S0=v0(()=>b8(V0,J1?.agent_name||""),[J1?.agent_name,V0]),T1=T(null);e7(30000),v(()=>{if(!q0)return;requestAnimationFrame(()=>{if(q0)T1.current?.focus(),T1.current?.select?.()})},[q0]),v(()=>{return X7()},[]),v(()=>{return ej(U)},[]),v(()=>{Y1("workspaceOpen",String(U1))},[U1]),v(()=>{return ZZ()},[]),v(()=>{if(!t){Y1(BTW_SESSION_KEY,"");return}Y1(BTW_SESSION_KEY,JSON.stringify({question:t.question||"",answer:t.answer||"",thinking:t.thinking||"",error:t.error||null,status:t.status||"success"}))},[t]),v(()=>{W4.current=H1||{}},[H1]),v(()=>{d1.current=j},[j]),v(()=>{o4.current=P_||{name:"You",avatar_url:null,avatar_background:null}},[P_]);let k_=C((s,k0,g0=null)=>{if(typeof document>"u")return;let k1=(s||"").trim()||"PiClaw";if(E_.current.title!==k1){document.title=k1;let f_=document.querySelector('meta[name="apple-mobile-web-app-title"]');if(f_&&f_.getAttribute("content")!==k1)f_.setAttribute("content",k1);E_.current.title=k1}let d0=document.getElementById("dynamic-favicon");if(!d0)return;let Q_=d0.getAttribute("data-default")||d0.getAttribute("href")||"/favicon.ico",C1=k0||Q_,f1=k0?`${C1}|${g0||""}`:C1;if(E_.current.avatarBase!==f1){let f_=k0?`${C1}${C1.includes("?")?"&":"?"}v=${g0||Date.now()}`:C1;d0.setAttribute("href",f_),E_.current.avatarBase=f1}},[]),{addFileRef:Y_,removeFileRef:a5,clearFileRefs:F,setFileRefsFromCompose:w,showIntentToast:h,openFileFromPill:$0,attachActiveEditorFile:T0,addMessageRef:W1,scrollToMessage:E1,removeMessageRef:u1,clearMessageRefs:j4,setMessageRefsFromCompose:f4,handleComposeSubmitError:a4}=fj({setIntentToast:z,intentToastTimerRef:A,editorOpen:x1,openEditor:b1,resolvePane:(s)=>c0.resolve(s),tabStripActiveId:Q1,setFileRefs:m,setMessageRefs:x,currentChatJid:j,getThread:F6,setPosts:w_});G_.current=a5;let z4=C((s={})=>{let k0=Date.now();if(B0.current=k0,s.running)J0.current=!0,y((g0)=>g0?g0:!0);if(s.clearSilence)u0.current=0},[y]),i1=C(()=>{if(B4.current)clearTimeout(B4.current),B4.current=null;u4.current=0},[]);v(()=>()=>{i1()},[i1]);let l_=C(()=>{i1(),u((s)=>{if(!s)return s;if(!(s.last_activity||s.lastActivity))return s;let{last_activity:k0,lastActivity:g0,...k1}=s;return k1})},[i1]),s8=C((s)=>{if(!s)return;i1();let k0=Date.now();u4.current=k0,u({type:s.type||"active",last_activity:!0}),B4.current=setTimeout(()=>{if(u4.current!==k0)return;u((g0)=>{if(!g0||!(g0.last_activity||g0.lastActivity))return g0;return null})},s7)},[i1]),S_=C(()=>{J0.current=!1,y(!1),B0.current=null,u0.current=0,y0.current="",b0.current="",F0.current=null,A_.current=null,Q0.current=null,M0.current=null,c_.current=null,s1.current={inFlight:!1,lastAttemptAt:0,turnId:null},i1(),L0(null),O0(null),l0.current=!1,i0.current=!1},[i1,L0,O0,y]),I1=C((s)=>{if(!j9({remainingQueueCount:s,currentTurnId:Q0.current,isAgentTurnActive:Z0}))return;M0.current=null,O0(null)},[Z0,O0]),E5=C(()=>oZ({agentStatus:k,agentDraft:n,agentPlan:d,agentThought:a,pendingRequest:e,currentTurnId:U0,steerQueuedTurnId:C0,isAgentTurnActive:Z0,followupQueueItems:R0,activeModel:p0,activeThinkingLevel:e0,supportsThinking:X0,activeModelUsage:a0,contextUsage:E0,isAgentRunning:J0.current,wasAgentActive:e_.current,draftBuffer:y0.current,thoughtBuffer:b0.current,lastAgentEvent:B0.current,lastSilenceNotice:u0.current,lastAgentResponse:A_.current,currentTurnIdRef:Q0.current,steerQueuedTurnIdRef:M0.current,thoughtExpanded:l0.current,draftExpanded:i0.current,agentStatusRef:c_.current,silentRecovery:s1.current}),[p0,a0,e0,n,d,k,a,E0,U0,R0,Z0,e,C0,X0]),a8=C((s)=>{sZ({snapshot:s,clearLastActivityTimer:i1,refs:{isAgentRunningRef:J0,wasAgentActiveRef:e_,lastAgentEventRef:B0,lastSilenceNoticeRef:u0,draftBufferRef:y0,thoughtBufferRef:b0,pendingRequestRef:F0,lastAgentResponseRef:A_,currentTurnIdRef:Q0,steerQueuedTurnIdRef:M0,agentStatusRef:c_,silentRecoveryRef:s1,thoughtExpandedRef:l0,draftExpandedRef:i0},setters:{setIsAgentTurnActive:y,setAgentStatus:u,setAgentDraft:b,setAgentPlan:i,setAgentThought:j0,setPendingRequest:N0,setCurrentTurnId:L0,setSteerQueuedTurnId:O0,setFollowupQueueItems:D0,setActiveModel:j1,setActiveThinkingLevel:r0,setSupportsThinking:P0,setActiveModelUsage:o,setContextUsage:I0}})},[i1,L0,D0,y,O0]),k5=C((s)=>{if(!s)return;if(Q0.current===s)return;Q0.current=s,s1.current={inFlight:!1,lastAttemptAt:0,turnId:s},L0(s),M0.current=null,O0(null),y0.current="",b0.current="",b({text:"",totalLines:0}),i(""),j0({text:"",totalLines:0}),N0(null),F0.current=null,A_.current=null,l0.current=!1,i0.current=!1},[L0,O0]),t8=C((s)=>{if(typeof document<"u"){let f_=typeof document.hasFocus==="function"?document.hasFocus():!0;if(!document.hidden&&f_)return}let k0=A_.current;if(!k0||!k0.post)return;if(s&&k0.turnId&&k0.turnId!==s)return;let g0=k0.post;if(g0.id&&$4.current===g0.id)return;let k1=String(g0?.data?.content||"").trim();if(!k1)return;$4.current=g0.id||$4.current,A_.current=null;let d0=k1.replace(/\s+/g," ").slice(0,200),Q_=W4.current||{},f1=(g0?.data?.agent_id?Q_[g0.data.agent_id]:null)?.name||"Pi";l1(f1,d0)},[l1]),v4=C(async(s,k0)=>{await $9({panelKey:s,expanded:k0,currentTurnIdRef:Q0,thoughtExpandedRef:l0,draftExpandedRef:i0,setAgentThoughtVisibility:hX,getAgentThought:pX,thoughtBufferRef:b0,draftBufferRef:y0,setAgentThought:j0,setAgentDraft:b})},[]),q_=T(null),F4=C(()=>{let s=Z_.current;if(!s)return;if(!(Math.abs(s.scrollTop)>150))s.scrollTop=0},[]);q_.current=F4;let D3=C((s)=>{let k0=Z_.current;if(!k0||typeof s!=="function"){s?.();return}let{currentHashtag:g0,searchQuery:k1,searchOpen:d0}=X_.current||{},Q_=!((k1||d0)&&!g0),C1=Q_?k0.scrollHeight-k0.scrollTop:k0.scrollTop;s(),requestAnimationFrame(()=>{let f1=Z_.current;if(!f1)return;if(Q_){let f_=Math.max(f1.scrollHeight-C1,0);f1.scrollTop=f_}else{let f_=Math.max(f1.scrollHeight-f1.clientHeight,0),cq=Math.min(C1,f_);f1.scrollTop=cq}})},[]),t4=C((s)=>{let k0=Z_.current;if(!k0||typeof s!=="function"){s?.();return}let g0=k0.scrollTop;s(),requestAnimationFrame(()=>{let k1=Z_.current;if(!k1)return;let d0=Math.max(k1.scrollHeight-k1.clientHeight,0);k1.scrollTop=Math.min(g0,d0)})},[]),A3=C((s)=>V9(s,v1.current),[]),{posts:e8,setPosts:w_,hasMore:jq,setHasMore:E3,hasMoreRef:k3,loadPosts:Z4,refreshTimeline:H4,loadMore:Zq,loadMoreRef:M3}=n7({preserveTimelineScroll:D3,preserveTimelineScrollTop:t4,chatJid:j}),t5=v0(()=>A3(e8),[e8,R0,A3]),Yq=C(()=>{let s=f0.current;if(!s)return;w_((k0)=>k0?k0.filter((g0)=>g0.id!==s):k0),f0.current=null},[w_]),{handleSplitterMouseDown:qq,handleSplitterTouchStart:Qq,handleEditorSplitterMouseDown:Nq,handleEditorSplitterTouchStart:Kq,handleDockSplitterMouseDown:Gq,handleDockSplitterTouchStart:Xq}=i7({appShellRef:_4,sidebarWidthRef:w4,editorWidthRef:R4,dockHeightRef:s4}),Vq=C(()=>{oY({isAgentRunningRef:J0,lastSilenceNoticeRef:u0,lastAgentEventRef:B0,currentTurnIdRef:Q0,thoughtExpandedRef:l0,draftExpandedRef:i0,draftBufferRef:y0,thoughtBufferRef:b0,pendingRequestRef:F0,lastAgentResponseRef:A_,stalledPostIdRef:f0,scrollToBottomRef:q_,setCurrentTurnId:L0,setAgentDraft:b,setAgentPlan:i,setAgentThought:j0,setPendingRequest:N0,setAgentStatus:u,setPosts:w_,dedupePosts:d5})},[L0]);v(()=>{X_.current={currentHashtag:L,searchQuery:O,searchOpen:W}},[L,O,W]);let V_=C(()=>{R9({currentChatJid:j,queueRefreshGenRef:r_,activeChatJidRef:d1,dismissedQueueRowIdsRef:c1,getAgentQueueState:eY,setFollowupQueueItems:D0,clearQueuedSteerStateIfStale:I1})},[I1,j]),b4=C(async()=>{await u9({currentChatJid:j,activeChatJidRef:d1,getAgentContext:J3,setContextUsage:I0})},[j]),M5=C(async()=>{await f9({currentChatJid:j,activeChatJidRef:d1,getAutoresearchStatus:cX,setExtensionStatusPanels:x0,setPendingExtensionPanelActions:H0})},[j]),e4=C(async()=>{return await dY({currentChatJid:j,getAgentStatus:H3,activeChatJidRef:d1,wasAgentActiveRef:e_,viewStateRef:X_,refreshTimeline:H4,clearAgentRunState:S_,agentStatusRef:c_,pendingRequestRef:F0,thoughtBufferRef:b0,draftBufferRef:y0,setAgentStatus:u,setAgentDraft:b,setAgentPlan:i,setAgentThought:j0,setPendingRequest:N0,setActiveTurn:k5,noteAgentActivity:z4,clearLastActivityFlag:l_})},[S_,l_,j,z4,H4,k5]),I3=C(async()=>{return await iY({isAgentRunningRef:J0,pendingRequestRef:F0,currentTurnIdRef:Q0,silentRecoveryRef:s1,silenceRefreshMs:y$,viewStateRef:X_,refreshTimeline:H4,refreshQueueState:V_,refreshAgentStatus:e4})},[e4,V_,H4]);v(()=>{let s=Math.min(1000,Math.max(100,Math.floor(C$/2))),k0=setInterval(()=>{rY({isAgentRunningRef:J0,pendingRequestRef:F0,lastAgentEventRef:B0,lastSilenceNoticeRef:u0,agentStatusRef:c_,silenceWarningMs:C$,silenceFinalizeMs:o7,silenceRefreshMs:y$,isCompactionStatus:M4,setAgentStatus:u,reconcileSilentTurn:I3})},s);return()=>clearInterval(k0)},[I3]);let Uq=C((s)=>{return sj({serverVersion:s,currentAppAssetVersion:bX,staleUiVersionRef:S4,staleUiReloadScheduledRef:t_,tabStoreHasUnsaved:()=>s0.hasUnsaved(),isAgentRunningRef:J0,pendingRequestRef:F0,showIntentToast:h})},[J0,F0,h]),Lq=C((s)=>{aj({status:s,setConnectionStatus:V,setAgentStatus:u,setAgentDraft:b,setAgentPlan:i,setAgentThought:j0,setPendingRequest:N0,pendingRequestRef:F0,clearAgentRunState:S_,hasConnectedOnceRef:d4,viewStateRef:X_,refreshTimeline:H4,refreshAgentStatus:e4,refreshQueueState:V_,refreshContextUsage:b4})},[S_,H4,e4,V_,b4]),Wq=C(async(s)=>{await Pj({hashtag:s,setCurrentHashtag:H,setPosts:w_,loadPosts:Z4})},[Z4]),Bq=C(async()=>{await Sj({setCurrentHashtag:H,setSearchQuery:J,setPosts:w_,loadPosts:Z4})},[Z4]),zq=C(async(s,k0=E)=>{await wj({query:s,scope:k0,currentChatJid:j,currentRootChatJid:p1,searchPosts:sY,setSearchScope:R,setSearchQuery:J,setCurrentHashtag:H,setPosts:w_,setHasMore:E3})},[j,p1,E]),Fq=C(()=>{D(!0),J(null),H(null),R("current"),w_([])},[]),Hq=C(()=>{D(!1),J(null),Z4()},[Z4]),tX=C(()=>{},[]),Jq=!L&&!O&&!W,Oq=C(async(s)=>{await Rj({post:s,posts:t5,currentChatJid:j,deletePost:gX,preserveTimelineScrollTop:t4,setPosts:w_,setRemovingPostIds:V1,hasMoreRef:k3,loadMoreRef:M3})},[j,t5,t4]),{updateAgentProfile:Dq,updateUserProfile:Aq,applyModelState:x3,refreshModelState:eX,refreshActiveChatAgents:R_,refreshCurrentChatBranches:u_,refreshModelAndQueueState:T3}=p9({getAgents:mX,setAgents:_1,setUserProfile:h_,applyBranding:k_,readStoredNumber:m5,sidebarWidthRef:w4,appShellRef:_4,currentChatJid:j,currentRootChatJid:p1,getAgentModels:aY,getActiveChatAgents:tY,getChatBranches:O3,activeChatJidRef:d1,setActiveChatAgents:p,setCurrentChatBranches:z0,setActiveModel:j1,setActiveThinkingLevel:r0,setSupportsThinking:P0,setActiveModelUsage:o,agentsRef:W4,refreshQueueState:V_,refreshContextUsage:b4,refreshAutoresearchStatus:M5}),C3=Z0||k!==null,Eq=C((s)=>{kj({queuedItem:s,followupQueueItemsRef:t0,dismissedQueueRowIdsRef:c1,currentChatJid:j,refreshQueueState:V_,setFollowupQueueItems:D0,showIntentToast:h,steerAgentQueueItem:_q,removeAgentQueueItem:$q})},[j,V_,D0,h]),kq=C((s)=>{Mj({queuedItem:s,followupQueueItemsRef:t0,dismissedQueueRowIdsRef:c1,currentChatJid:j,refreshQueueState:V_,setFollowupQueueItems:D0,showIntentToast:h,clearQueuedSteerStateIfStale:I1,steerAgentQueueItem:_q,removeAgentQueueItem:$q})},[I1,j,V_,D0,h]),y3=C((s)=>{E9({response:s,refreshActiveChatAgents:R_,refreshCurrentChatBranches:u_,refreshContextUsage:b4,refreshAutoresearchStatus:M5,refreshQueueState:V_})},[R_,M5,u_,b4,V_]),{handleExtensionPanelAction:Mq,closeBtwPanel:Iq,handleBtwIntercept:xq,handleBtwRetry:Tq,handleBtwInject:Cq,handleOpenFloatingWidget:yq,handleCloseFloatingWidget:Pq,handleFloatingWidgetEvent:Sq}=Cj({currentChatJid:j,currentRootChatJid:p1,isComposeBoxAgentActive:C3,showIntentToast:h,setPendingExtensionPanelActions:H0,refreshAutoresearchStatus:M5,stopAutoresearch:lX,dismissAutoresearch:nX,streamSidePrompt:oX,btwAbortRef:A5,btwSession:t,setBtwSession:W0,sendAgentMessage:Y5,handleMessageResponse:y3,dismissedLiveWidgetKeysRef:$1,setFloatingWidget:n0,getAgentStatus:H3,getAgentContext:J3,getAgentQueueState:eY,getAgentModels:aY,getActiveChatAgents:tY,getChatBranches:O3,getTimeline:g4,rawPosts:e8,activeChatAgents:Y0,currentChatBranches:l,contextUsage:E0,followupQueueItemsRef:t0,activeModel:p0,activeThinkingLevel:e0,supportsThinking:X0,isAgentTurnActive:Z0}),{refreshCurrentView:wq,applyLiveGeneratedWidgetUpdate:Rq}=vj({currentChatJid:j,currentRootChatJid:p1,currentHashtag:L,searchQuery:O,searchScope:E,loadPosts:Z4,searchPosts:sY,setPosts:w_,setHasMore:E3,scrollToBottom:F4,setExtensionStatusPanels:x0,setPendingExtensionPanelActions:H0,paneStateOwnerChatJidRef:r4,chatPaneStateByChatRef:i4,snapshotCurrentChatPaneState:E5,restoreChatPaneState:a8,dismissedQueueRowIdsRef:c1,refreshQueueState:V_,refreshAgentStatus:e4,refreshContextUsage:b4,viewStateRef:X_,refreshTimeline:H4,refreshModelAndQueueState:T3,setFloatingWidget:n0,dismissedLiveWidgetKeysRef:$1});$Z({currentChatJid:j,posts:t5,scrollToMessage:E1,handleConnectionStatusChange:Lq,loadPosts:Z4,refreshCurrentView:wq,updateAgentProfile:Dq,updateUserProfile:Aq,currentTurnIdRef:Q0,activeChatJidRef:d1,pendingRequestRef:F0,draftBufferRef:y0,thoughtBufferRef:b0,steerQueuedTurnIdRef:M0,thoughtExpandedRef:l0,draftExpandedRef:i0,draftThrottleRef:D5,thoughtThrottleRef:F1,viewStateRef:X_,followupQueueItemsRef:t0,dismissedQueueRowIdsRef:c1,scrollToBottomRef:q_,hasMoreRef:k3,loadMoreRef:M3,lastAgentResponseRef:A_,wasAgentActiveRef:e_,setActiveTurn:k5,applyLiveGeneratedWidgetUpdate:Rq,setFloatingWidget:n0,clearLastActivityFlag:l_,handleUiVersionDrift:Uq,setAgentStatus:u,setAgentDraft:b,setAgentPlan:i,setAgentThought:j0,setPendingRequest:N0,clearAgentRunState:S_,getAgentStatus:H3,noteAgentActivity:z4,showLastActivity:s8,refreshTimeline:H4,refreshModelAndQueueState:T3,refreshActiveChatAgents:R_,refreshCurrentChatBranches:u_,notifyForFinalResponse:t8,setContextUsage:I0,refreshContextUsage:b4,refreshQueueState:V_,setFollowupQueueItems:D0,clearQueuedSteerStateIfStale:I1,setSteerQueuedTurnId:O0,applyModelState:x3,getAgentContext:J3,setExtensionStatusPanels:x0,setPendingExtensionPanelActions:H0,refreshActiveEditorFromWorkspace:n4,showIntentToast:h,removeStalledPost:Yq,setPosts:w_,preserveTimelineScrollTop:t4,finalizeStalledResponse:Vq,connectionStatus:G,agentStatus:k,refreshAgentStatus:e4,refreshAutoresearchStatus:M5});let uq=C(()=>{uZ(K_)},[]),fq=C((s)=>{fZ({nextChatJid:s,currentChatJid:j,chatOnlyMode:Z,navigate:$})},[Z,j,$]),_6=C(()=>{vZ({currentBranchRecord:J1,renameBranchInFlight:I.current,renameBranchLockUntil:r.current,getFormLock:r$,setRenameBranchNameDraft:_0,setIsRenameBranchFormOpen:G0})},[J1]),$6=C(()=>{bZ({setIsRenameBranchFormOpen:G0,setRenameBranchNameDraft:_0})},[]),vq=C(async(s)=>{await gZ({currentBranchRecord:J1,nextName:s,openRenameForm:_6,renameBranchInFlightRef:I,renameBranchLockUntilRef:r,getFormLock:r$,setIsRenamingBranch:S,renameChatBranch:dX,refreshActiveChatAgents:R_,refreshCurrentChatBranches:u_,showIntentToast:h,closeRenameForm:$6})},[$6,J1,R_,u_,_6,S,h]),bq=C(async(s=null)=>{await mZ({targetChatJid:s,currentChatJid:j,currentBranchRecord:J1,currentChatBranches:l,activeChatAgents:Y0,pruneChatBranch:iX,refreshActiveChatAgents:R_,refreshCurrentChatBranches:u_,showIntentToast:h,chatOnlyMode:Z,navigate:$})},[Y0,Z,J1,l,j,$,R_,u_,h]),gq=C(async(s)=>{await pZ({targetChatJid:s,restoreChatBranch:rX,currentChatBranches:l,refreshActiveChatAgents:R_,refreshCurrentChatBranches:u_,showIntentToast:h,chatOnlyMode:Z,navigate:$})},[Z,l,$,R_,u_,h]);v(()=>hZ({branchLoaderMode:N,branchLoaderSourceChatJid:K,forkChatBranch:x5,setBranchLoaderState:w1,navigate:$}),[N,K,$]);let mq=C(async()=>{await cZ({currentChatJid:j,chatOnlyMode:Z,forkChatBranch:x5,refreshActiveChatAgents:R_,refreshCurrentChatBranches:u_,showIntentToast:h,navigate:$})},[Z,j,$,R_,u_,h]),j6=C(async(s,k0)=>{await lZ({isWebAppMode:X,path:s,label:k0,showIntentToast:h,currentChatJid:j,tabStripActiveId:Q1,editorInstanceRef:A1,dockInstanceRef:t1,terminalTabPath:Q5,dockVisible:g1,resolveTab:(g0)=>s0.get(g0),closeTab:z_,setDockVisible:z1})},[j,g1,z_,X,h,Q1]);v(()=>nZ({openEditor:b1,popOutPane:(s,k0)=>{j6(s,k0)}}),[j6,b1]);let pq=C(async()=>{await dZ({isWebAppMode:X,currentChatJid:j,currentRootChatJid:p1,forkChatBranch:x5,getActiveChatAgents:J6,getChatBranches:O3,setActiveChatAgents:p,setCurrentChatBranches:z0,showIntentToast:h})},[j,p1,X,h]);v(()=>{iZ({editorOpen:x1,shellElement:_4.current,editorWidthRef:R4,dockHeightRef:s4,sidebarWidthRef:w4,readStoredNumber:m5})},[x1]),v(()=>{if(!J_||Z)return;return qZ(P1)},[P1,J_,Z]),v(()=>{if(Z)return;return QZ({toggleZenMode:P4,exitZenMode:D_,zenMode:L1,isZenModeActive:()=>L1})},[P4,D_,L1,Z]);let hq=Boolean(C0&&C0===(k?.turn_id||U0)),P3=tZ({branchLoaderMode:N,panePopoutMode:Y});if(P3==="branch-loader")return eZ(o1);if(P3==="pane-popout")return _Y({appShellRef:_4,editorOpen:x1,hidePanePopoutControls:j_,panePopoutHasMenuActions:R1,panePopoutTitle:p_,tabStripTabs:n1,tabStripActiveId:Q1,handleTabActivate:a_,previewTabs:M1,handleTabTogglePreview:T_,editorContainerRef:Z1,getPaneContent:()=>A1.current?.getContent?.(),panePopoutPath:q});return nY({appShellRef:_4,workspaceOpen:U1,editorOpen:x1,chatOnlyMode:Z,zenMode:L1,isRenameBranchFormOpen:q0,closeRenameCurrentBranchForm:$6,handleRenameCurrentBranch:vq,renameBranchNameDraft:V0,renameBranchNameInputRef:T1,setRenameBranchNameDraft:_0,renameBranchDraftState:S0,isRenamingBranch:f,addFileRef:Y_,openEditor:b1,openTerminalTab:N1,openVncTab:e1,hasDockPanes:J_,toggleDock:P1,dockVisible:g1,handleSplitterMouseDown:qq,handleSplitterTouchStart:Qq,showEditorPaneContainer:C_,tabStripTabs:n1,tabStripActiveId:Q1,handleTabActivate:a_,handleTabClose:z_,handleTabCloseOthers:F_,handleTabCloseAll:U4,handleTabTogglePin:H_,handleTabTogglePreview:T_,handleTabEditSource:C4,previewTabs:M1,tabPaneOverrides:a1,toggleZenMode:P4,handlePopOutPane:j6,isWebAppMode:X,editorContainerRef:Z1,editorInstanceRef:A1,handleDockSplitterMouseDown:Gq,handleDockSplitterTouchStart:Xq,TERMINAL_TAB_PATH:Q5,dockContainerRef:L4,handleEditorSplitterMouseDown:Nq,handleEditorSplitterTouchStart:Kq,searchQuery:O,isIOSDevice:t7,currentBranchRecord:J1,currentChatJid:j,currentChatBranches:l,handleBranchPickerChange:fq,formatBranchPickerLabel:g8,openRenameCurrentBranchForm:_6,handlePruneCurrentBranch:bq,currentHashtag:L,handleBackToTimeline:Bq,activeSearchScopeLabel:x_,posts:t5,isMainTimelineView:Jq,hasMore:jq,loadMore:Zq,timelineRef:Z_,handleHashtagClick:Wq,addMessageRef:W1,scrollToMessage:E1,openFileFromPill:$0,handleDeletePost:Oq,handleOpenFloatingWidget:yq,agents:H1,userProfile:P_,removingPostIds:D1,agentStatus:k,isCompactionStatus:M4,agentDraft:n,agentPlan:d,agentThought:a,pendingRequest:e,intentToast:M,currentTurnId:U0,steerQueued:hq,handlePanelToggle:v4,btwSession:t,closeBtwPanel:Iq,handleBtwRetry:Tq,handleBtwInject:Cq,floatingWidget:A0,handleCloseFloatingWidget:Pq,handleFloatingWidgetEvent:Sq,extensionStatusPanels:K0,pendingExtensionPanelActions:m0,handleExtensionPanelAction:Mq,searchOpen:W,followupQueueItems:R0,handleInjectQueuedFollowup:Eq,handleRemoveQueuedFollowup:kq,viewStateRef:X_,loadPosts:Z4,scrollToBottom:F4,searchScope:E,handleSearch:zq,setSearchScope:R,enterSearchMode:Fq,exitSearchMode:Hq,fileRefs:P,removeFileRef:a5,clearFileRefs:F,setFileRefsFromCompose:w,messageRefs:c,removeMessageRef:u1,clearMessageRefs:j4,setMessageRefsFromCompose:f4,handleCreateSessionFromCompose:mq,handleRestoreBranch:gq,attachActiveEditorFile:T0,followupQueueCount:h1,handleBtwIntercept:xq,handleMessageResponse:y3,handleComposeSubmitError:a4,handlePopOutChat:pq,isComposeBoxAgentActive:C3,activeChatAgents:Y0,connectionStatus:G,activeModel:p0,activeModelUsage:a0,activeThinkingLevel:e0,supportsThinking:X0,contextUsage:E0,notificationsEnabled:o_,notificationPermission:m_,handleToggleNotifications:O1,setActiveModel:j1,applyModelState:x3,setPendingRequest:N0,pendingRequestRef:F0,toggleWorkspace:uq})}function aX(){let[_,$]=g(()=>typeof window>"u"?"http://localhost/":window.location.href);v(()=>{if(typeof window>"u")return;let Y=()=>$(window.location.href);return window.addEventListener("popstate",Y),()=>window.removeEventListener("popstate",Y)},[]);let j=C((Y,q={})=>{if(typeof window>"u")return;let{replace:Q=!1}=q||{},N=new URL(String(Y||""),window.location.href).toString();if(Q)window.history.replaceState(null,"",N);else window.history.pushState(null,"",N);$(window.location.href)},[]),Z=v0(()=>new URL(_).searchParams,[_]);return B`<${sX} locationParams=${Z} navigate=${j} />`}D4(B`<${aX} />`,document.getElementById("app"));

//# debugId=219787520BEEB4CA64756E2164756E21
//# sourceMappingURL=app.bundle.js.map
