var B9=Object.defineProperty;var L9=(_)=>_;function Q9(_,$){this[_]=L9.bind(null,$)}var U9=(_,$)=>{for(var j in $)B9(_,j,{get:$[j],enumerable:!0,configurable:!0,set:Q9.bind($,j)})};var F9=((_)=>typeof require<"u"?require:typeof Proxy<"u"?new Proxy(_,{get:($,j)=>(typeof require<"u"?require:$)[j]}):_)(function(_){if(typeof require<"u")return require.apply(this,arguments);throw Error('Dynamic require of "'+_+'" is not supported')});var l2,t_,q3,J9,p$,e1,O3,B3,L3,w4,E4,y4,H9,c2={},h2=[],D9=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,n2=Array.isArray;function x$(_,$){for(var j in $)_[j]=$[j];return _}function P4(_){_&&_.parentNode&&_.parentNode.removeChild(_)}function Q3(_,$,j){var Z,N,K,z={};for(K in $)K=="key"?Z=$[K]:K=="ref"?N=$[K]:z[K]=$[K];if(arguments.length>2&&(z.children=arguments.length>3?l2.call(arguments,2):j),typeof _=="function"&&_.defaultProps!=null)for(K in _.defaultProps)z[K]===void 0&&(z[K]=_.defaultProps[K]);return m2(_,z,Z,N,null)}function m2(_,$,j,Z,N){var K={type:_,props:$,key:j,ref:Z,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:N==null?++q3:N,__i:-1,__u:0};return N==null&&t_.vnode!=null&&t_.vnode(K),K}function d2(_){return _.children}function g2(_,$){this.props=_,this.context=$}function z2(_,$){if($==null)return _.__?z2(_.__,_.__i+1):null;for(var j;$<_.__k.length;$++)if((j=_.__k[$])!=null&&j.__e!=null)return j.__e;return typeof _.type=="function"?z2(_):null}function E9(_){if(_.__P&&_.__d){var $=_.__v,j=$.__e,Z=[],N=[],K=x$({},$);K.__v=$.__v+1,t_.vnode&&t_.vnode(K),M4(_.__P,K,$,_.__n,_.__P.namespaceURI,32&$.__u?[j]:null,Z,j==null?z2($):j,!!(32&$.__u),N),K.__v=$.__v,K.__.__k[K.__i]=K,H3(Z,K,N),$.__e=$.__=null,K.__e!=j&&U3(K)}}function U3(_){if((_=_.__)!=null&&_.__c!=null)return _.__e=_.__c.base=null,_.__k.some(function($){if($!=null&&$.__e!=null)return _.__e=_.__c.base=$.__e}),U3(_)}function _3(_){(!_.__d&&(_.__d=!0)&&p$.push(_)&&!i2.__r++||e1!=t_.debounceRendering)&&((e1=t_.debounceRendering)||O3)(i2)}function i2(){try{for(var _,$=1;p$.length;)p$.length>$&&p$.sort(B3),_=p$.shift(),$=p$.length,E9(_)}finally{p$.length=i2.__r=0}}function F3(_,$,j,Z,N,K,z,W,q,V,B){var Y,U,C,m,v,R,E,F=Z&&Z.__k||h2,S=$.length;for(q=y9(j,$,F,q,S),Y=0;Y<S;Y++)(C=j.__k[Y])!=null&&(U=C.__i!=-1&&F[C.__i]||c2,C.__i=Y,R=M4(_,C,U,N,K,z,W,q,V,B),m=C.__e,C.ref&&U.ref!=C.ref&&(U.ref&&C4(U.ref,null,C),B.push(C.ref,C.__c||m,C)),v==null&&m!=null&&(v=m),(E=!!(4&C.__u))||U.__k===C.__k?q=J3(C,q,_,E):typeof C.type=="function"&&R!==void 0?q=R:m&&(q=m.nextSibling),C.__u&=-7);return j.__e=v,q}function y9(_,$,j,Z,N){var K,z,W,q,V,B=j.length,Y=B,U=0;for(_.__k=Array(N),K=0;K<N;K++)(z=$[K])!=null&&typeof z!="boolean"&&typeof z!="function"?(typeof z=="string"||typeof z=="number"||typeof z=="bigint"||z.constructor==String?z=_.__k[K]=m2(null,z,null,null,null):n2(z)?z=_.__k[K]=m2(d2,{children:z},null,null,null):z.constructor===void 0&&z.__b>0?z=_.__k[K]=m2(z.type,z.props,z.key,z.ref?z.ref:null,z.__v):_.__k[K]=z,q=K+U,z.__=_,z.__b=_.__b+1,W=null,(V=z.__i=k9(z,j,q,Y))!=-1&&(Y--,(W=j[V])&&(W.__u|=2)),W==null||W.__v==null?(V==-1&&(N>B?U--:N<B&&U++),typeof z.type!="function"&&(z.__u|=4)):V!=q&&(V==q-1?U--:V==q+1?U++:(V>q?U--:U++,z.__u|=4))):_.__k[K]=null;if(Y)for(K=0;K<B;K++)(W=j[K])!=null&&(2&W.__u)==0&&(W.__e==Z&&(Z=z2(W)),E3(W,W));return Z}function J3(_,$,j,Z){var N,K;if(typeof _.type=="function"){for(N=_.__k,K=0;N&&K<N.length;K++)N[K]&&(N[K].__=_,$=J3(N[K],$,j,Z));return $}_.__e!=$&&(Z&&($&&_.type&&!$.parentNode&&($=z2(_)),j.insertBefore(_.__e,$||null)),$=_.__e);do $=$&&$.nextSibling;while($!=null&&$.nodeType==8);return $}function k9(_,$,j,Z){var N,K,z,W=_.key,q=_.type,V=$[j],B=V!=null&&(2&V.__u)==0;if(V===null&&W==null||B&&W==V.key&&q==V.type)return j;if(Z>(B?1:0)){for(N=j-1,K=j+1;N>=0||K<$.length;)if((V=$[z=N>=0?N--:K++])!=null&&(2&V.__u)==0&&W==V.key&&q==V.type)return z}return-1}function $3(_,$,j){$[0]=="-"?_.setProperty($,j==null?"":j):_[$]=j==null?"":typeof j!="number"||D9.test($)?j:j+"px"}function u2(_,$,j,Z,N){var K,z;_:if($=="style")if(typeof j=="string")_.style.cssText=j;else{if(typeof Z=="string"&&(_.style.cssText=Z=""),Z)for($ in Z)j&&$ in j||$3(_.style,$,"");if(j)for($ in j)Z&&j[$]==Z[$]||$3(_.style,$,j[$])}else if($[0]=="o"&&$[1]=="n")K=$!=($=$.replace(L3,"$1")),z=$.toLowerCase(),$=z in _||$=="onFocusOut"||$=="onFocusIn"?z.slice(2):$.slice(2),_.l||(_.l={}),_.l[$+K]=j,j?Z?j.u=Z.u:(j.u=w4,_.addEventListener($,K?y4:E4,K)):_.removeEventListener($,K?y4:E4,K);else{if(N=="http://www.w3.org/2000/svg")$=$.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if($!="width"&&$!="height"&&$!="href"&&$!="list"&&$!="form"&&$!="tabIndex"&&$!="download"&&$!="rowSpan"&&$!="colSpan"&&$!="role"&&$!="popover"&&$ in _)try{_[$]=j==null?"":j;break _}catch(W){}typeof j=="function"||(j==null||j===!1&&$[4]!="-"?_.removeAttribute($):_.setAttribute($,$=="popover"&&j==1?"":j))}}function j3(_){return function($){if(this.l){var j=this.l[$.type+_];if($.t==null)$.t=w4++;else if($.t<j.u)return;return j(t_.event?t_.event($):$)}}}function M4(_,$,j,Z,N,K,z,W,q,V){var B,Y,U,C,m,v,R,E,F,S,M,i,t,N_,l,K_=$.type;if($.constructor!==void 0)return null;128&j.__u&&(q=!!(32&j.__u),K=[W=$.__e=j.__e]),(B=t_.__b)&&B($);_:if(typeof K_=="function")try{if(E=$.props,F=K_.prototype&&K_.prototype.render,S=(B=K_.contextType)&&Z[B.__c],M=B?S?S.props.value:B.__:Z,j.__c?R=(Y=$.__c=j.__c).__=Y.__E:(F?$.__c=Y=new K_(E,M):($.__c=Y=new g2(E,M),Y.constructor=K_,Y.render=w9),S&&S.sub(Y),Y.state||(Y.state={}),Y.__n=Z,U=Y.__d=!0,Y.__h=[],Y._sb=[]),F&&Y.__s==null&&(Y.__s=Y.state),F&&K_.getDerivedStateFromProps!=null&&(Y.__s==Y.state&&(Y.__s=x$({},Y.__s)),x$(Y.__s,K_.getDerivedStateFromProps(E,Y.__s))),C=Y.props,m=Y.state,Y.__v=$,U)F&&K_.getDerivedStateFromProps==null&&Y.componentWillMount!=null&&Y.componentWillMount(),F&&Y.componentDidMount!=null&&Y.__h.push(Y.componentDidMount);else{if(F&&K_.getDerivedStateFromProps==null&&E!==C&&Y.componentWillReceiveProps!=null&&Y.componentWillReceiveProps(E,M),$.__v==j.__v||!Y.__e&&Y.shouldComponentUpdate!=null&&Y.shouldComponentUpdate(E,Y.__s,M)===!1){$.__v!=j.__v&&(Y.props=E,Y.state=Y.__s,Y.__d=!1),$.__e=j.__e,$.__k=j.__k,$.__k.some(function(h){h&&(h.__=$)}),h2.push.apply(Y.__h,Y._sb),Y._sb=[],Y.__h.length&&z.push(Y);break _}Y.componentWillUpdate!=null&&Y.componentWillUpdate(E,Y.__s,M),F&&Y.componentDidUpdate!=null&&Y.__h.push(function(){Y.componentDidUpdate(C,m,v)})}if(Y.context=M,Y.props=E,Y.__P=_,Y.__e=!1,i=t_.__r,t=0,F)Y.state=Y.__s,Y.__d=!1,i&&i($),B=Y.render(Y.props,Y.state,Y.context),h2.push.apply(Y.__h,Y._sb),Y._sb=[];else do Y.__d=!1,i&&i($),B=Y.render(Y.props,Y.state,Y.context),Y.state=Y.__s;while(Y.__d&&++t<25);Y.state=Y.__s,Y.getChildContext!=null&&(Z=x$(x$({},Z),Y.getChildContext())),F&&!U&&Y.getSnapshotBeforeUpdate!=null&&(v=Y.getSnapshotBeforeUpdate(C,m)),N_=B!=null&&B.type===d2&&B.key==null?D3(B.props.children):B,W=F3(_,n2(N_)?N_:[N_],$,j,Z,N,K,z,W,q,V),Y.base=$.__e,$.__u&=-161,Y.__h.length&&z.push(Y),R&&(Y.__E=Y.__=null)}catch(h){if($.__v=null,q||K!=null)if(h.then){for($.__u|=q?160:128;W&&W.nodeType==8&&W.nextSibling;)W=W.nextSibling;K[K.indexOf(W)]=null,$.__e=W}else{for(l=K.length;l--;)P4(K[l]);k4($)}else $.__e=j.__e,$.__k=j.__k,h.then||k4($);t_.__e(h,$,j)}else K==null&&$.__v==j.__v?($.__k=j.__k,$.__e=j.__e):W=$.__e=A9(j.__e,$,j,Z,N,K,z,q,V);return(B=t_.diffed)&&B($),128&$.__u?void 0:W}function k4(_){_&&(_.__c&&(_.__c.__e=!0),_.__k&&_.__k.some(k4))}function H3(_,$,j){for(var Z=0;Z<j.length;Z++)C4(j[Z],j[++Z],j[++Z]);t_.__c&&t_.__c($,_),_.some(function(N){try{_=N.__h,N.__h=[],_.some(function(K){K.call(N)})}catch(K){t_.__e(K,N.__v)}})}function D3(_){return typeof _!="object"||_==null||_.__b>0?_:n2(_)?_.map(D3):x$({},_)}function A9(_,$,j,Z,N,K,z,W,q){var V,B,Y,U,C,m,v,R=j.props||c2,E=$.props,F=$.type;if(F=="svg"?N="http://www.w3.org/2000/svg":F=="math"?N="http://www.w3.org/1998/Math/MathML":N||(N="http://www.w3.org/1999/xhtml"),K!=null){for(V=0;V<K.length;V++)if((C=K[V])&&"setAttribute"in C==!!F&&(F?C.localName==F:C.nodeType==3)){_=C,K[V]=null;break}}if(_==null){if(F==null)return document.createTextNode(E);_=document.createElementNS(N,F,E.is&&E),W&&(t_.__m&&t_.__m($,K),W=!1),K=null}if(F==null)R===E||W&&_.data==E||(_.data=E);else{if(K=K&&l2.call(_.childNodes),!W&&K!=null)for(R={},V=0;V<_.attributes.length;V++)R[(C=_.attributes[V]).name]=C.value;for(V in R)C=R[V],V=="dangerouslySetInnerHTML"?Y=C:V=="children"||(V in E)||V=="value"&&("defaultValue"in E)||V=="checked"&&("defaultChecked"in E)||u2(_,V,null,C,N);for(V in E)C=E[V],V=="children"?U=C:V=="dangerouslySetInnerHTML"?B=C:V=="value"?m=C:V=="checked"?v=C:W&&typeof C!="function"||R[V]===C||u2(_,V,C,R[V],N);if(B)W||Y&&(B.__html==Y.__html||B.__html==_.innerHTML)||(_.innerHTML=B.__html),$.__k=[];else if(Y&&(_.innerHTML=""),F3($.type=="template"?_.content:_,n2(U)?U:[U],$,j,Z,F=="foreignObject"?"http://www.w3.org/1999/xhtml":N,K,z,K?K[0]:j.__k&&z2(j,0),W,q),K!=null)for(V=K.length;V--;)P4(K[V]);W||(V="value",F=="progress"&&m==null?_.removeAttribute("value"):m!=null&&(m!==_[V]||F=="progress"&&!m||F=="option"&&m!=R[V])&&u2(_,V,m,R[V],N),V="checked",v!=null&&v!=_[V]&&u2(_,V,v,R[V],N))}return _}function C4(_,$,j){try{if(typeof _=="function"){var Z=typeof _.__u=="function";Z&&_.__u(),Z&&$==null||(_.__u=_($))}else _.current=$}catch(N){t_.__e(N,j)}}function E3(_,$,j){var Z,N;if(t_.unmount&&t_.unmount(_),(Z=_.ref)&&(Z.current&&Z.current!=_.__e||C4(Z,null,$)),(Z=_.__c)!=null){if(Z.componentWillUnmount)try{Z.componentWillUnmount()}catch(K){t_.__e(K,$)}Z.base=Z.__P=null}if(Z=_.__k)for(N=0;N<Z.length;N++)Z[N]&&E3(Z[N],$,j||typeof _.type!="function");j||P4(_.__e),_.__c=_.__=_.__e=void 0}function w9(_,$,j){return this.constructor(_,j)}function y3(_,$,j){var Z,N,K,z;$==document&&($=document.documentElement),t_.__&&t_.__(_,$),N=(Z=typeof j=="function")?null:j&&j.__k||$.__k,K=[],z=[],M4($,_=(!Z&&j||$).__k=Q3(d2,null,[_]),N||c2,c2,$.namespaceURI,!Z&&j?[j]:N?null:$.firstChild?l2.call($.childNodes):null,K,!Z&&j?j:N?N.__e:$.firstChild,Z,z),H3(K,_,z)}l2=h2.slice,t_={__e:function(_,$,j,Z){for(var N,K,z;$=$.__;)if((N=$.__c)&&!N.__)try{if((K=N.constructor)&&K.getDerivedStateFromError!=null&&(N.setState(K.getDerivedStateFromError(_)),z=N.__d),N.componentDidCatch!=null&&(N.componentDidCatch(_,Z||{}),z=N.__d),z)return N.__E=N}catch(W){_=W}throw _}},q3=0,J9=function(_){return _!=null&&_.constructor===void 0},g2.prototype.setState=function(_,$){var j;j=this.__s!=null&&this.__s!=this.state?this.__s:this.__s=x$({},this.state),typeof _=="function"&&(_=_(x$({},j),this.props)),_&&x$(j,_),_!=null&&this.__v&&($&&this._sb.push($),_3(this))},g2.prototype.forceUpdate=function(_){this.__v&&(this.__e=!0,_&&this.__h.push(_),_3(this))},g2.prototype.render=d2,p$=[],O3=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,B3=function(_,$){return _.__v.__b-$.__v.__b},i2.__r=0,L3=/(PointerCapture)$|Capture$/i,w4=0,E4=j3(!1),y4=j3(!0),H9=0;var F2,q0,D4,Z3,J2=0,k3=[],V0=t_,N3=V0.__b,K3=V0.__r,z3=V0.diffed,Y3=V0.__c,G3=V0.unmount,W3=V0.__;function I4(_,$){V0.__h&&V0.__h(q0,_,J2||$),J2=0;var j=q0.__H||(q0.__H={__:[],__h:[]});return _>=j.__.length&&j.__.push({}),j.__[_]}function T(_){return J2=1,P9(w3,_)}function P9(_,$,j){var Z=I4(F2++,2);if(Z.t=_,!Z.__c&&(Z.__=[j?j($):w3(void 0,$),function(W){var q=Z.__N?Z.__N[0]:Z.__[0],V=Z.t(q,W);q!==V&&(Z.__N=[V,Z.__[1]],Z.__c.setState({}))}],Z.__c=q0,!q0.__f)){var N=function(W,q,V){if(!Z.__c.__H)return!0;var B=Z.__c.__H.__.filter(function(U){return U.__c});if(B.every(function(U){return!U.__N}))return!K||K.call(this,W,q,V);var Y=Z.__c.props!==W;return B.some(function(U){if(U.__N){var C=U.__[0];U.__=U.__N,U.__N=void 0,C!==U.__[0]&&(Y=!0)}}),K&&K.call(this,W,q,V)||Y};q0.__f=!0;var{shouldComponentUpdate:K,componentWillUpdate:z}=q0;q0.componentWillUpdate=function(W,q,V){if(this.__e){var B=K;K=void 0,N(W,q,V),K=B}z&&z.call(this,W,q,V)},q0.shouldComponentUpdate=N}return Z.__N||Z.__}function f(_,$){var j=I4(F2++,3);!V0.__s&&A3(j.__H,$)&&(j.__=_,j.u=$,q0.__H.__h.push(j))}function D(_){return J2=5,l_(function(){return{current:_}},[])}function l_(_,$){var j=I4(F2++,7);return A3(j.__H,$)&&(j.__=_(),j.__H=$,j.__h=_),j.__}function y(_,$){return J2=8,l_(function(){return _},$)}function M9(){for(var _;_=k3.shift();){var $=_.__H;if(_.__P&&$)try{$.__h.some(p2),$.__h.some(A4),$.__h=[]}catch(j){$.__h=[],V0.__e(j,_.__v)}}}V0.__b=function(_){q0=null,N3&&N3(_)},V0.__=function(_,$){_&&$.__k&&$.__k.__m&&(_.__m=$.__k.__m),W3&&W3(_,$)},V0.__r=function(_){K3&&K3(_),F2=0;var $=(q0=_.__c).__H;$&&(D4===q0?($.__h=[],q0.__h=[],$.__.some(function(j){j.__N&&(j.__=j.__N),j.u=j.__N=void 0})):($.__h.some(p2),$.__h.some(A4),$.__h=[],F2=0)),D4=q0},V0.diffed=function(_){z3&&z3(_);var $=_.__c;$&&$.__H&&($.__H.__h.length&&(k3.push($)!==1&&Z3===V0.requestAnimationFrame||((Z3=V0.requestAnimationFrame)||C9)(M9)),$.__H.__.some(function(j){j.u&&(j.__H=j.u),j.u=void 0})),D4=q0=null},V0.__c=function(_,$){$.some(function(j){try{j.__h.some(p2),j.__h=j.__h.filter(function(Z){return!Z.__||A4(Z)})}catch(Z){$.some(function(N){N.__h&&(N.__h=[])}),$=[],V0.__e(Z,j.__v)}}),Y3&&Y3(_,$)},V0.unmount=function(_){G3&&G3(_);var $,j=_.__c;j&&j.__H&&(j.__H.__.some(function(Z){try{p2(Z)}catch(N){$=N}}),j.__H=void 0,$&&V0.__e($,j.__v))};var X3=typeof requestAnimationFrame=="function";function C9(_){var $,j=function(){clearTimeout(Z),X3&&cancelAnimationFrame($),setTimeout(_)},Z=setTimeout(j,35);X3&&($=requestAnimationFrame(j))}function p2(_){var $=q0,j=_.__c;typeof j=="function"&&(_.__c=void 0,j()),q0=$}function A4(_){var $=q0;_.__c=_.__(),q0=$}function A3(_,$){return!_||_.length!==$.length||$.some(function(j,Z){return j!==_[Z]})}function w3(_,$){return typeof $=="function"?$(_):$}var P3=function(_,$,j,Z){var N;$[0]=0;for(var K=1;K<$.length;K++){var z=$[K++],W=$[K]?($[0]|=z?1:2,j[$[K++]]):$[++K];z===3?Z[0]=W:z===4?Z[1]=Object.assign(Z[1]||{},W):z===5?(Z[1]=Z[1]||{})[$[++K]]=W:z===6?Z[1][$[++K]]+=W+"":z?(N=_.apply(W,P3(_,W,j,["",null])),Z.push(N),W[0]?$[0]|=2:($[K-2]=0,$[K]=N)):Z.push(W)}return Z},V3=new Map;function I9(_){var $=V3.get(this);return $||($=new Map,V3.set(this,$)),($=P3(this,$.get(_)||($.set(_,$=function(j){for(var Z,N,K=1,z="",W="",q=[0],V=function(U){K===1&&(U||(z=z.replace(/^\s*\n\s*|\s*\n\s*$/g,"")))?q.push(0,U,z):K===3&&(U||z)?(q.push(3,U,z),K=2):K===2&&z==="..."&&U?q.push(4,U,0):K===2&&z&&!U?q.push(5,0,!0,z):K>=5&&((z||!U&&K===5)&&(q.push(K,0,z,N),K=6),U&&(q.push(K,U,0,N),K=6)),z=""},B=0;B<j.length;B++){B&&(K===1&&V(),V(B));for(var Y=0;Y<j[B].length;Y++)Z=j[B][Y],K===1?Z==="<"?(V(),q=[q],K=3):z+=Z:K===4?z==="--"&&Z===">"?(K=1,z=""):z=Z+z[0]:W?Z===W?W="":z+=Z:Z==='"'||Z==="'"?W=Z:Z===">"?(V(),K=1):K&&(Z==="="?(K=5,N=z,z=""):Z==="/"&&(K<5||j[B][Y+1]===">")?(V(),K===3&&(q=q[0]),K=q,(q=q[0]).push(2,0,K),K=0):Z===" "||Z==="\t"||Z===`
`||Z==="\r"?(V(),K=2):z+=Z),K===3&&z==="!--"&&(K=4,q=q[0])}return V(),q}(_)),$),arguments,[])).length>1?$:$[0]}var L=I9.bind(Q3);var K$={};U9(K$,{uploadWorkspaceFile:()=>r2,uploadMedia:()=>u4,updateWorkspaceFile:()=>l9,submitAdaptiveCardAction:()=>m4,streamSidePrompt:()=>c9,steerAgentQueueItem:()=>p9,setWorkspaceVisibility:()=>y2,setAgentThoughtVisibility:()=>c4,sendPeerAgentMessage:()=>v9,sendAgentMessage:()=>Y2,searchPosts:()=>S4,respondToAgentRequest:()=>o2,renameWorkspaceFile:()=>s4,renameChatBranch:()=>f9,removeAgentQueueItem:()=>g9,pruneChatBranch:()=>R9,moveWorkspaceEntry:()=>o4,getWorkspaceTree:()=>E2,getWorkspaceRawUrl:()=>a2,getWorkspaceFile:()=>l4,getWorkspaceDownloadUrl:()=>t2,getWorkspaceBranch:()=>i9,getTimeline:()=>H2,getThumbnailUrl:()=>h4,getThread:()=>x4,getPostsByHashtag:()=>b4,getMediaUrl:()=>N$,getMediaText:()=>i4,getMediaInfo:()=>G2,getMediaBlob:()=>h9,getChatBranches:()=>T9,getAgents:()=>R4,getAgentThought:()=>p4,getAgentStatus:()=>v4,getAgentQueueState:()=>m9,getAgentModels:()=>D2,getAgentContext:()=>u9,getActiveChatAgents:()=>f4,forkChatBranch:()=>s2,deleteWorkspaceFile:()=>r4,deletePost:()=>T4,createWorkspaceFile:()=>d4,createReply:()=>x9,createPost:()=>S9,attachWorkspaceFile:()=>n4,addToWhitelist:()=>g4,SSEClient:()=>e2});async function g_(_,$={}){let j=await fetch(""+_,{...$,headers:{"Content-Type":"application/json",...$.headers}});if(!j.ok){let Z=await j.json().catch(()=>({error:"Unknown error"}));throw Error(Z.error||`HTTP ${j.status}`)}return j.json()}function M3(_){let $=String(_||"").split(`
`),j="message",Z=[];for(let K of $)if(K.startsWith("event:"))j=K.slice(6).trim()||"message";else if(K.startsWith("data:"))Z.push(K.slice(5).trim());let N=Z.join(`
`);if(!N)return null;try{return{event:j,data:JSON.parse(N)}}catch{return{event:j,data:N}}}async function b9(_,$){if(!_.body)throw Error("Missing event stream body");let j=_.body.getReader(),Z=new TextDecoder,N="";while(!0){let{value:z,done:W}=await j.read();if(W)break;N+=Z.decode(z,{stream:!0});let q=N.split(`

`);N=q.pop()||"";for(let V of q){let B=M3(V);if(B)$(B.event,B.data)}}N+=Z.decode();let K=M3(N);if(K)$(K.event,K.data)}async function H2(_=10,$=null,j=null){let Z=`/timeline?limit=${_}`;if($)Z+=`&before=${$}`;if(j)Z+=`&chat_jid=${encodeURIComponent(j)}`;return g_(Z)}async function b4(_,$=50,j=0,Z=null){let N=Z?`&chat_jid=${encodeURIComponent(Z)}`:"";return g_(`/hashtag/${encodeURIComponent(_)}?limit=${$}&offset=${j}${N}`)}async function S4(_,$=50,j=0,Z=null,N="current",K=null){let z=Z?`&chat_jid=${encodeURIComponent(Z)}`:"",W=N?`&scope=${encodeURIComponent(N)}`:"",q=K?`&root_chat_jid=${encodeURIComponent(K)}`:"";return g_(`/search?q=${encodeURIComponent(_)}&limit=${$}&offset=${j}${z}${W}${q}`)}async function x4(_,$=null){let j=$?`?chat_jid=${encodeURIComponent($)}`:"";return g_(`/thread/${_}${j}`)}async function S9(_,$=[],j=null){let Z=j?`?chat_jid=${encodeURIComponent(j)}`:"";return g_(`/post${Z}`,{method:"POST",body:JSON.stringify({content:_,media_ids:$})})}async function x9(_,$,j=[],Z=null){let N=Z?`?chat_jid=${encodeURIComponent(Z)}`:"";return g_(`/post/reply${N}`,{method:"POST",body:JSON.stringify({thread_id:_,content:$,media_ids:j})})}async function T4(_,$=!1,j=null){let Z=j?`&chat_jid=${encodeURIComponent(j)}`:"",N=`/post/${_}?cascade=${$?"true":"false"}${Z}`;return g_(N,{method:"DELETE"})}async function Y2(_,$,j=null,Z=[],N=null,K=null){let z=K?`?chat_jid=${encodeURIComponent(K)}`:"";return g_(`/agent/${_}/message${z}`,{method:"POST",body:JSON.stringify({content:$,thread_id:j,media_ids:Z,mode:N})})}async function f4(){return g_("/agent/active-chats")}async function T9(_=null){let $=_?`?root_chat_jid=${encodeURIComponent(_)}`:"";return g_(`/agent/branches${$}`)}async function s2(_,$={}){return g_("/agent/branch-fork",{method:"POST",body:JSON.stringify({source_chat_jid:_,...$?.agentName?{agent_name:$.agentName}:{},...$?.displayName?{display_name:$.displayName}:{}})})}async function f9(_,$={}){return g_("/agent/branch-rename",{method:"POST",body:JSON.stringify({chat_jid:_,...$&&Object.prototype.hasOwnProperty.call($,"agentName")?{agent_name:$.agentName}:{},...$&&Object.prototype.hasOwnProperty.call($,"displayName")?{display_name:$.displayName}:{}})})}async function R9(_){return g_("/agent/branch-prune",{method:"POST",body:JSON.stringify({chat_jid:_})})}async function v9(_,$,j,Z="auto",N={}){let K={source_chat_jid:_,content:j,mode:Z,...N?.sourceAgentName?{source_agent_name:N.sourceAgentName}:{},...N?.targetBy==="agent_name"?{target_agent_name:$}:{target_chat_jid:$}};return g_("/agent/peer-message",{method:"POST",body:JSON.stringify(K)})}async function R4(){return g_("/agent/roster")}async function v4(_=null){let $=_?`?chat_jid=${encodeURIComponent(_)}`:"";return g_(`/agent/status${$}`)}async function u9(_=null){let $=_?`?chat_jid=${encodeURIComponent(_)}`:"";return g_(`/agent/context${$}`)}async function m9(_=null){let $=_?`?chat_jid=${encodeURIComponent(_)}`:"";return g_(`/agent/queue-state${$}`)}async function g9(_,$=null){let j=await fetch("/agent/queue-remove",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({row_id:_,chat_jid:$||void 0})});if(!j.ok){let Z=await j.json().catch(()=>({error:"Failed to remove queued item"}));throw Error(Z.error||`HTTP ${j.status}`)}return j.json()}async function p9(_,$=null){let j=await fetch("/agent/queue-steer",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({row_id:_,chat_jid:$||void 0})});if(!j.ok){let Z=await j.json().catch(()=>({error:"Failed to steer queued item"}));throw Error(Z.error||`HTTP ${j.status}`)}return j.json()}async function D2(_=null){let $=_?`?chat_jid=${encodeURIComponent(_)}`:"";return g_(`/agent/models${$}`)}async function u4(_){let $=new FormData;$.append("file",_);let j=await fetch("/media/upload",{method:"POST",body:$});if(!j.ok){let Z=await j.json().catch(()=>({error:"Upload failed"}));throw Error(Z.error||`HTTP ${j.status}`)}return j.json()}async function o2(_,$,j=null){let Z=await fetch("/agent/respond",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({request_id:_,outcome:$,chat_jid:j||void 0})});if(!Z.ok){let N=await Z.json().catch(()=>({error:"Failed to respond"}));throw Error(N.error||`HTTP ${Z.status}`)}return Z.json()}async function m4(_){let $=await fetch("/agent/card-action",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(_)});if(!$.ok){let j=await $.json().catch(()=>({error:"Adaptive Card action failed"}));throw Error(j.error||`HTTP ${$.status}`)}return $.json()}async function c9(_,$={}){let j=await fetch("/agent/side-prompt/stream",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({prompt:_,system_prompt:$.systemPrompt||void 0,chat_jid:$.chatJid||void 0}),signal:$.signal});if(!j.ok){let K=await j.json().catch(()=>({error:"Side prompt failed"}));throw Error(K.error||`HTTP ${j.status}`)}let Z=null,N=null;if(await b9(j,(K,z)=>{if($.onEvent?.(K,z),K==="side_prompt_thinking_delta")$.onThinkingDelta?.(z?.delta||"");else if(K==="side_prompt_text_delta")$.onTextDelta?.(z?.delta||"");else if(K==="side_prompt_done")Z=z;else if(K==="side_prompt_error")N=z}),N){let K=Error(N?.error||"Side prompt failed");throw K.payload=N,K}return Z}async function g4(_,$){let j=await fetch("/agent/whitelist",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({pattern:_,description:$})});if(!j.ok){let Z=await j.json().catch(()=>({error:"Failed to add to whitelist"}));throw Error(Z.error||`HTTP ${j.status}`)}return j.json()}async function p4(_,$="thought"){let j=`/agent/thought?turn_id=${encodeURIComponent(_)}&panel=${encodeURIComponent($)}`;return g_(j)}async function c4(_,$,j){return g_("/agent/thought/visibility",{method:"POST",body:JSON.stringify({turn_id:_,panel:$,expanded:Boolean(j)})})}function N$(_){return`/media/${_}`}function h4(_){return`/media/${_}/thumbnail`}async function G2(_){let $=await fetch(`/media/${_}/info`);if(!$.ok)throw Error("Failed to get media info");return $.json()}async function i4(_){let $=await fetch(`/media/${_}`);if(!$.ok)throw Error("Failed to load media text");return $.text()}async function h9(_){let $=await fetch(`/media/${_}`);if(!$.ok)throw Error("Failed to load media blob");return $.blob()}async function E2(_="",$=2,j=!1){let Z=`/workspace/tree?path=${encodeURIComponent(_)}&depth=${$}&show_hidden=${j?"1":"0"}`;return g_(Z)}async function i9(_=""){let $=`/workspace/branch?path=${encodeURIComponent(_||"")}`;return g_($)}async function l4(_,$=20000,j=null){let Z=j?`&mode=${encodeURIComponent(j)}`:"",N=`/workspace/file?path=${encodeURIComponent(_)}&max=${$}${Z}`;return g_(N)}async function l9(_,$){return g_("/workspace/file",{method:"PUT",body:JSON.stringify({path:_,content:$})})}async function n4(_){return g_("/workspace/attach",{method:"POST",body:JSON.stringify({path:_})})}async function r2(_,$="",j={}){let Z=new FormData;Z.append("file",_);let N=new URLSearchParams;if($)N.set("path",$);if(j.overwrite)N.set("overwrite","1");let K=N.toString(),z=K?`/workspace/upload?${K}`:"/workspace/upload",W=await fetch(""+z,{method:"POST",body:Z});if(!W.ok){let q=await W.json().catch(()=>({error:"Upload failed"})),V=Error(q.error||`HTTP ${W.status}`);throw V.status=W.status,V.code=q.code,V}return W.json()}async function d4(_,$,j=""){let Z=await fetch("/workspace/file",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({path:_,name:$,content:j})});if(!Z.ok){let N=await Z.json().catch(()=>({error:"Create failed"})),K=Error(N.error||`HTTP ${Z.status}`);throw K.status=Z.status,K.code=N.code,K}return Z.json()}async function s4(_,$){let j=await fetch("/workspace/rename",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({path:_,name:$})});if(!j.ok){let Z=await j.json().catch(()=>({error:"Rename failed"})),N=Error(Z.error||`HTTP ${j.status}`);throw N.status=j.status,N.code=Z.code,N}return j.json()}async function o4(_,$){let j=await fetch("/workspace/move",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({path:_,target:$})});if(!j.ok){let Z=await j.json().catch(()=>({error:"Move failed"})),N=Error(Z.error||`HTTP ${j.status}`);throw N.status=j.status,N.code=Z.code,N}return j.json()}async function r4(_){let $=`/workspace/file?path=${encodeURIComponent(_||"")}`;return g_($,{method:"DELETE"})}async function y2(_,$=!1){return g_("/workspace/visibility",{method:"POST",body:JSON.stringify({visible:Boolean(_),show_hidden:Boolean($)})})}function a2(_){return`/workspace/raw?path=${encodeURIComponent(_)}`}function t2(_,$=!1){return`/workspace/download?${`path=${encodeURIComponent(_||"")}&show_hidden=${$?"1":"0"}`}`}class e2{constructor(_,$,j={}){this.onEvent=_,this.onStatusChange=$,this.chatJid=typeof j?.chatJid==="string"&&j.chatJid.trim()?j.chatJid.trim():null,this.eventSource=null,this.reconnectTimeout=null,this.reconnectDelay=1000,this.status="disconnected",this.reconnectAttempts=0,this.cooldownUntil=0,this.connecting=!1}connect(){if(this.connecting)return;if(this.eventSource&&this.status==="connected")return;if(this.connecting=!0,this.eventSource)this.eventSource.close();let _=this.chatJid?`?chat_jid=${encodeURIComponent(this.chatJid)}`:"";this.eventSource=new EventSource("/sse/stream"+_),this.eventSource.onopen=()=>{this.connecting=!1,this.reconnectDelay=1000,this.reconnectAttempts=0,this.cooldownUntil=0,this.status="connected",this.onStatusChange("connected")},this.eventSource.onerror=()=>{this.connecting=!1,this.status="disconnected",this.onStatusChange("disconnected"),this.reconnectAttempts+=1,this.scheduleReconnect()},this.eventSource.addEventListener("connected",()=>{console.log("SSE connected"),this.onEvent("connected",{})}),this.eventSource.addEventListener("new_post",($)=>{this.onEvent("new_post",JSON.parse($.data))}),this.eventSource.addEventListener("new_reply",($)=>{this.onEvent("new_reply",JSON.parse($.data))}),this.eventSource.addEventListener("agent_response",($)=>{this.onEvent("agent_response",JSON.parse($.data))}),this.eventSource.addEventListener("interaction_updated",($)=>{this.onEvent("interaction_updated",JSON.parse($.data))}),this.eventSource.addEventListener("interaction_deleted",($)=>{this.onEvent("interaction_deleted",JSON.parse($.data))}),this.eventSource.addEventListener("agent_status",($)=>{this.onEvent("agent_status",JSON.parse($.data))}),this.eventSource.addEventListener("agent_steer_queued",($)=>{this.onEvent("agent_steer_queued",JSON.parse($.data))}),this.eventSource.addEventListener("agent_followup_queued",($)=>{this.onEvent("agent_followup_queued",JSON.parse($.data))}),this.eventSource.addEventListener("agent_followup_consumed",($)=>{this.onEvent("agent_followup_consumed",JSON.parse($.data))}),this.eventSource.addEventListener("agent_followup_removed",($)=>{this.onEvent("agent_followup_removed",JSON.parse($.data))}),this.eventSource.addEventListener("workspace_update",($)=>{this.onEvent("workspace_update",JSON.parse($.data))}),["extension_ui_request","extension_ui_timeout","extension_ui_notify","extension_ui_status","extension_ui_working","extension_ui_widget","extension_ui_title","extension_ui_editor_text","extension_ui_error"].forEach(($)=>{this.eventSource.addEventListener($,(j)=>{this.onEvent($,JSON.parse(j.data))})}),this.eventSource.addEventListener("agent_draft",($)=>{this.onEvent("agent_draft",JSON.parse($.data))}),this.eventSource.addEventListener("agent_draft_delta",($)=>{this.onEvent("agent_draft_delta",JSON.parse($.data))}),this.eventSource.addEventListener("agent_thought",($)=>{this.onEvent("agent_thought",JSON.parse($.data))}),this.eventSource.addEventListener("agent_thought_delta",($)=>{this.onEvent("agent_thought_delta",JSON.parse($.data))}),this.eventSource.addEventListener("model_changed",($)=>{this.onEvent("model_changed",JSON.parse($.data))}),this.eventSource.addEventListener("ui_theme",($)=>{this.onEvent("ui_theme",JSON.parse($.data))})}scheduleReconnect(){if(this.reconnectTimeout)clearTimeout(this.reconnectTimeout);let _=10,$=60000,j=Date.now();if(this.reconnectAttempts>=_)this.cooldownUntil=Math.max(this.cooldownUntil,j+$),this.reconnectAttempts=0;let Z=Math.max(this.cooldownUntil-j,0),N=Math.max(this.reconnectDelay,Z);this.reconnectTimeout=setTimeout(()=>{console.log("Reconnecting SSE..."),this.connect()},N),this.reconnectDelay=Math.min(this.reconnectDelay*2,30000)}reconnectIfNeeded(){if(this.status==="connected")return;let _=Date.now();if(this.cooldownUntil&&_<this.cooldownUntil)return;if(this.reconnectTimeout)clearTimeout(this.reconnectTimeout),this.reconnectTimeout=null;this.connect()}disconnect(){if(this.connecting=!1,this.eventSource)this.eventSource.close(),this.eventSource=null;if(this.reconnectTimeout)clearTimeout(this.reconnectTimeout),this.reconnectTimeout=null}}function z$(_){if(typeof window>"u"||!window.localStorage)return null;try{return window.localStorage.getItem(_)}catch{return null}}function _0(_,$){if(typeof window>"u"||!window.localStorage)return;try{window.localStorage.setItem(_,$)}catch{}}function W2(_,$=!1){let j=z$(_);if(j===null)return $;return j==="true"}function X2(_,$=null){let j=z$(_);if(j===null)return $;let Z=parseInt(j,10);return Number.isFinite(Z)?Z:$}function _4(_){return String(_||"").trim().toLowerCase()}function a4(_){let $=String(_||"").match(/^@([a-zA-Z0-9_-]*)$/);if(!$)return null;return _4($[1]||"")}function C3(_){let $=new Set,j=[];for(let Z of Array.isArray(_)?_:[]){let N=_4(Z?.agent_name);if(!N||$.has(N))continue;$.add(N),j.push(Z)}return j}function I3(_,$,j={}){let Z=a4($);if(Z==null)return[];let N=typeof j?.currentChatJid==="string"?j.currentChatJid:null;return C3(_).filter((K)=>{if(N&&K?.chat_jid===N)return!1;return _4(K?.agent_name).startsWith(Z)})}function t4(_){let $=_4(_);return $?`@${$} `:""}function b3(_,$={}){let j=typeof $?.currentChatJid==="string"?$.currentChatJid:null,Z=Number.isFinite($?.limit)?Math.max(0,$.limit):4;return C3(_).filter((N)=>!(j&&N?.chat_jid===j)).slice(0,Z)}function S3({footerWidth:_=0,visibleAgentCount:$=0,hasContextIndicator:j=!1}={}){let Z=Number(_||0),N=Math.max(0,Math.min(Number($||0),4));if(!Number.isFinite(Z)||Z<=0)return!1;if(N<=0)return!1;let K=460+N*68+(j?40:0);return Z>=K}function U$({prefix:_="file",label:$,title:j,onRemove:Z,onClick:N,removeTitle:K="Remove",icon:z="file"}){let W=`${_}-file-pill`,q=`${_}-file-name`,V=`${_}-file-remove`,B=z==="message"?L`<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
      </svg>`:L`<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
        <polyline points="14 2 14 8 20 8"/>
      </svg>`;return L`
    <span class=${W} title=${j||$} onClick=${N}>
      ${B}
      <span class=${q}>${$}</span>
      ${Z&&L`
        <button
          class=${V}
          onClick=${(Y)=>{Y.preventDefault(),Y.stopPropagation(),Z()}}
          title=${K}
          type="button"
        >
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M18 6L6 18M6 6l12 12"/>
          </svg>
        </button>
      `}
    </span>
  `}var n9=[{name:"/model",description:"Select model or list available models"},{name:"/cycle-model",description:"Cycle to the next available model"},{name:"/thinking",description:"Show or set thinking level"},{name:"/cycle-thinking",description:"Cycle thinking level"},{name:"/theme",description:"Set UI theme (use /theme list for options)"},{name:"/tint",description:"Tint default light/dark UI (usage: /tint #hex or /tint off)"},{name:"/test-card",description:"Emit a built-in Adaptive Card test message (/test-card list for variants)"},{name:"/btw",description:"Open a side conversation panel without interrupting the main chat"},{name:"/state",description:"Show current session state"},{name:"/stats",description:"Show session token and cost stats"},{name:"/context",description:"Show context window usage"},{name:"/last",description:"Show last assistant response"},{name:"/compact",description:"Manually compact the session"},{name:"/auto-compact",description:"Toggle auto-compaction"},{name:"/auto-retry",description:"Toggle auto-retry"},{name:"/abort",description:"Abort the current response"},{name:"/abort-retry",description:"Abort retry backoff"},{name:"/abort-bash",description:"Abort running bash command"},{name:"/shell",description:"Run a shell command and return output"},{name:"/bash",description:"Run a shell command and add output to context"},{name:"/queue",description:"Queue a follow-up message (one-at-a-time)"},{name:"/queue-all",description:"Queue a follow-up message (batch all)"},{name:"/steer",description:"Steer the current response"},{name:"/steering-mode",description:"Set steering mode (all|one)"},{name:"/followup-mode",description:"Set follow-up mode (all|one)"},{name:"/session-name",description:"Set or show the session name"},{name:"/new-session",description:"Start a new session"},{name:"/switch-session",description:"Switch to a session file"},{name:"/fork",description:"Fork from a previous message"},{name:"/forks",description:"List forkable messages"},{name:"/tree",description:"List the session tree"},{name:"/label",description:"Set or clear a label on a tree entry"},{name:"/labels",description:"List labeled entries"},{name:"/agent-name",description:"Set or show the agent display name"},{name:"/agent-avatar",description:"Set or show the agent avatar URL"},{name:"/user-name",description:"Set or show your display name"},{name:"/user-avatar",description:"Set or show your avatar URL"},{name:"/user-github",description:"Set name/avatar from GitHub profile"},{name:"/export-html",description:"Export session to HTML"},{name:"/passkey",description:"Manage passkeys (enrol/list/delete)"},{name:"/totp",description:"Show a TOTP enrolment QR code"},{name:"/qr",description:"Generate a QR code for text or URL"},{name:"/search",description:"Search notes and skills in the workspace"},{name:"/restart",description:"Restart the agent and stop subprocesses"},{name:"/commands",description:"List available commands"}];function d9({usage:_}){let $=Math.min(100,Math.max(0,_.percent||0)),j=_.tokens,Z=_.contextWindow,N=j!=null?`Context: ${x3(j)} / ${x3(Z)} tokens (${$.toFixed(0)}%)`:`Context: ${$.toFixed(0)}%`,K=7,z=2*Math.PI*7,W=$/100*z,q=$>90?"var(--context-red, #ef4444)":$>75?"var(--context-amber, #f59e0b)":"var(--context-green, #22c55e)";return L`
        <span class="compose-context-pie icon-btn" title=${N}>
            <svg width="16" height="16" viewBox="0 0 20 20">
                <circle cx="10" cy="10" r=${7}
                    fill="none"
                    stroke="var(--context-track, rgba(128,128,128,0.2))"
                    stroke-width="2.5" />
                <circle cx="10" cy="10" r=${7}
                    fill="none"
                    stroke=${q}
                    stroke-width="2.5"
                    stroke-dasharray=${`${W} ${z}`}
                    stroke-linecap="round"
                    transform="rotate(-90 10 10)" />
            </svg>
        </span>
    `}function x3(_){if(_==null)return"?";if(_>=1e6)return(_/1e6).toFixed(1)+"M";if(_>=1000)return(_/1000).toFixed(0)+"K";return String(_)}function T3({onPost:_,onFocus:$,searchMode:j,searchScope:Z="current",onSearch:N,onSearchScopeChange:K,onEnterSearch:z,onExitSearch:W,fileRefs:q=[],onRemoveFileRef:V,onClearFileRefs:B,messageRefs:Y=[],onRemoveMessageRef:U,onClearMessageRefs:C,activeModel:m=null,modelUsage:v=null,thinkingLevel:R=null,supportsThinking:E=!1,contextUsage:F=null,notificationsEnabled:S=!1,notificationPermission:M="default",onToggleNotifications:i,onModelChange:t,onModelStateChange:N_,activeEditorPath:l=null,onAttachEditorFile:K_,onOpenFilePill:h,followupQueueItems:B_=[],onInjectQueuedFollowup:c_,onRemoveQueuedFollowup:o,onSubmitIntercept:d,onMessageResponse:z_,onPopOutChat:$_,isAgentActive:Y_=!1,activeChatAgents:M_=[],currentChatJid:Q_="web:default",connectionStatus:A_="connected",onSetFileRefs:U_,onSetMessageRefs:R_,onSubmitError:v_}){let[W_,I_]=T(""),[S_,O0]=T(""),[X_,__]=T([]),[C_,G_]=T(!1),[D_,y_]=T([]),[n_,d_]=T(0),[s_,H_]=T(!1),[x_,T_]=T([]),[N0,b_]=T(0),[D0,o_]=T(!1),[K0,i0]=T(!1),[U0,f_]=T(!1),[B0,r_]=T([]),[z0,E0]=T(!1),[h_,y0]=T(0),[P0,L_]=T(null),I=D(null),e=D(null),k_=D(null),w_=D(null),Y0=D(null),f0=D(null),M0=D(0),L0=200,k0=(Q)=>{let b=new Set,x=[];for(let n of Q||[]){if(typeof n!=="string")continue;let V_=n.trim();if(!V_||b.has(V_))continue;b.add(V_),x.push(V_)}return x},r0=()=>{let Q=z$("piclaw_compose_history");if(!Q)return[];try{let b=JSON.parse(Q);if(!Array.isArray(b))return[];return k0(b)}catch{return[]}},G$=(Q)=>{_0("piclaw_compose_history",JSON.stringify(Q))},W$=D(r0()),C0=D(-1),R0=D(""),h$=W_.trim()||X_.length>0||q.length>0||Y.length>0,l0=typeof window<"u"&&typeof navigator<"u"&&Boolean(navigator.geolocation)&&Boolean(window.isSecureContext),A0=typeof window<"u"&&typeof Notification<"u",I$=typeof window<"u"?Boolean(window.isSecureContext):!1,x0=A0&&I$&&M!=="denied",$2=M==="granted"&&S,v0=$2?"Disable notifications":"Enable notifications",i$=X_.length>0||q.length>0||Y.length>0,i_=b3(M_,{currentChatJid:Q_,limit:4}),J$=i_.length>0,H$=!j&&S3({footerWidth:h_,visibleAgentCount:i_.length,hasContextIndicator:Boolean(F&&F.percent!=null)}),G0=m||"",F0=E&&R?` (${R})`:"",a0=F0.trim()?`${R}`:"",D$=typeof v?.hint_short==="string"?v.hint_short.trim():"",E$=[a0||null,D$||null].filter(Boolean).join(" • "),l$=[G0?`Current model: ${G0}${F0}`:null,v?.plan?`Plan: ${v.plan}`:null,D$||null,v?.primary?.reset_description||null,v?.secondary?.reset_description||null].filter(Boolean),R$=K0?"Switching model…":l$.join(" • ")||`Current model: ${G0}${F0} (tap to open model picker)`,$0=(Q)=>{if(!Q||typeof Q!=="object")return;let b=Q.model??Q.current;if(typeof N_==="function")N_({model:b??null,thinking_level:Q.thinking_level??null,supports_thinking:Q.supports_thinking,provider_usage:Q.provider_usage??null});if(b&&typeof t==="function")t(b)},V$=(Q)=>{let b=Q||I.current;if(!b)return;b.style.height="auto",b.style.height=`${b.scrollHeight}px`,b.style.overflowY="hidden"},y$=(Q)=>{if(!Q)return{content:Q,fileRefs:[]};let x=Q.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),n=-1;for(let j_=0;j_<x.length;j_+=1)if(x[j_].trim()==="Files:"&&x[j_+1]&&/^\s*-\s+/.test(x[j_+1])){n=j_;break}if(n===-1)return{content:Q,fileRefs:[]};let V_=[],E_=n+1;for(;E_<x.length;E_+=1){let j_=x[E_];if(/^\s*-\s+/.test(j_))V_.push(j_.replace(/^\s*-\s+/,"").trim());else if(!j_.trim())break;else break}if(V_.length===0)return{content:Q,fileRefs:[]};let P_=x.slice(0,n),J0=x.slice(E_);return{content:[...P_,...J0].join(`
`).replace(/\n{3,}/g,`

`).trim(),fileRefs:V_}},I0=(Q)=>{if(!Q)return{content:Q,messageRefs:[]};let x=Q.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),n=-1;for(let j_=0;j_<x.length;j_+=1)if(x[j_].trim()==="Referenced messages:"&&x[j_+1]&&/^\s*-\s+/.test(x[j_+1])){n=j_;break}if(n===-1)return{content:Q,messageRefs:[]};let V_=[],E_=n+1;for(;E_<x.length;E_+=1){let j_=x[E_];if(/^\s*-\s+/.test(j_)){let _$=j_.replace(/^\s*-\s+/,"").trim().match(/^message:(\S+)$/i);if(_$)V_.push(_$[1])}else if(!j_.trim())break;else break}if(V_.length===0)return{content:Q,messageRefs:[]};let P_=x.slice(0,n),J0=x.slice(E_);return{content:[...P_,...J0].join(`
`).replace(/\n{3,}/g,`

`).trim(),messageRefs:V_}},u0=(Q)=>{let b=y$(Q||""),x=I0(b.content||"");return{text:x.content||"",fileRefs:b.fileRefs,messageRefs:x.messageRefs}},j2=(Q)=>{if(!Q.startsWith("/")||Q.includes(`
`)){H_(!1),y_([]);return}let b=Q.toLowerCase().split(" ")[0];if(b.length<1){H_(!1),y_([]);return}let x=n9.filter((n)=>n.name.startsWith(b)||n.name.replace(/-/g,"").startsWith(b.replace(/-/g,"")));if(x.length>0&&!(x.length===1&&x[0].name===b))o_(!1),T_([]),y_(x),d_(0),H_(!0);else H_(!1),y_([])},b0=(Q)=>{let b=W_,x=b.indexOf(" "),n=x>=0?b.slice(x):"",V_=Q.name+n;I_(V_),H_(!1),y_([]),requestAnimationFrame(()=>{let E_=I.current;if(!E_)return;let P_=V_.length;E_.selectionStart=P_,E_.selectionEnd=P_,E_.focus()})},n$=(Q)=>{if(a4(Q)==null){o_(!1),T_([]);return}let b=I3(M_,Q,{currentChatJid:Q_});if(b.length>0&&!(b.length===1&&t4(b[0].agent_name).trim().toLowerCase()===String(Q||"").trim().toLowerCase()))H_(!1),y_([]),T_(b),b_(0),o_(!0);else o_(!1),T_([])},q$=(Q)=>{let b=t4(Q?.agent_name);if(!b)return;I_(b),o_(!1),T_([]),requestAnimationFrame(()=>{let x=I.current;if(!x)return;let n=b.length;x.selectionStart=n,x.selectionEnd=n,x.focus()})},O$=(Q)=>{if(j)O0(Q);else I_(Q),j2(Q),n$(Q);requestAnimationFrame(()=>V$())},Z2=(Q)=>{let b=j?S_:W_,x=b&&!b.endsWith(`
`)?`
`:"",n=`${b}${x}${Q}`.trimStart();O$(n)},O2=(Q)=>{let b=Q?.command?.model_label;if(b)return b;let x=Q?.command?.message;if(typeof x==="string"){let n=x.match(/•\s+([^\n]+?)\s+\(current\)/);if(n?.[1])return n[1].trim()}return null},u_=async(Q)=>{if(j||K0)return;i0(!0);try{let b=await Y2("default",Q,null,[],null,Q_),x=O2(b);$0({model:x??m??null,thinking_level:b?.command?.thinking_level,supports_thinking:b?.command?.supports_thinking});try{let n=await D2(Q_);if(n)$0(n)}catch{}return _?.(),!0}catch(b){return console.error("Failed to switch model:",b),alert("Failed to switch model: "+b.message),!1}finally{i0(!1)}},S0=async()=>{await u_("/cycle-model")},m0=async(Q)=>{if(!Q||K0)return;if(await u_(`/model ${Q}`))f_(!1)},d$=(Q)=>{Q.preventDefault(),Q.stopPropagation(),f_((b)=>!b)},s$=(Q)=>{if(Q==="queue"||Q==="steer"||Q==="auto")return Q;return Y_?"queue":null},k$=async(Q,b,x={})=>{let{includeMedia:n=!0,includeFileRefs:V_=!0,includeMessageRefs:E_=!0,clearAfterSubmit:P_=!0,recordHistory:J0=!0}=x||{},p0=typeof Q==="string"?Q:Q&&typeof Q?.target?.value==="string"?Q.target.value:W_,j_=typeof p0==="string"?p0:"";if(!j_.trim()&&(n?X_.length===0:!0)&&(V_?q.length===0:!0)&&(E_?Y.length===0:!0))return;H_(!1),y_([]),o_(!1),T_([]),L_(null);let _$=n?[...X_]:[],u$=V_?[...q]:[],L$=E_?[...Y]:[],$$=j_.trim();if(J0&&$$){let S$=W$.current,W0=k0(S$.filter((r$)=>r$!==$$));if(W0.push($$),W0.length>200)W0.splice(0,W0.length-200);W$.current=W0,G$(W0),C0.current=-1,R0.current=""}let B2=()=>{if(n)__([..._$]);if(V_)U_?.(u$);if(E_)R_?.(L$);I_($$),requestAnimationFrame(()=>V$())};if(P_)I_(""),__([]),B?.(),C?.();(async()=>{try{if(await d?.({content:$$,submitMode:b,fileRefs:u$,messageRefs:L$,mediaFiles:_$})){_?.();return}let W0=[];for(let Z0 of _$){let d0=await u4(Z0);W0.push(d0.id)}let r$=u$.length?`Files:
${u$.map((Z0)=>`- ${Z0}`).join(`
`)}`:"",n0=L$.length?`Referenced messages:
${L$.map((Z0)=>`- message:${Z0}`).join(`
`)}`:"",c0=W0.length?`Images:
${W0.map((Z0,d0)=>{let g$=_$[d0]?.name||`attachment-${d0+1}`;return`- attachment:${Z0} (${g$})`}).join(`
`)}`:"",m$=[$$,r$,n0,c0].filter(Boolean).join(`

`),M$=await Y2("default",m$,null,W0,s$(b),Q_);if(z_?.(M$),M$?.command){$0({model:M$.command.model_label??m??null,thinking_level:M$.command.thinking_level,supports_thinking:M$.command.supports_thinking});try{let Z0=await D2(Q_);if(Z0)$0(Z0)}catch{}}_?.()}catch(S$){if(P_)B2();let W0=S$?.message||"Failed to send message.";L_(W0),v_?.(W0),console.error("Failed to post:",S$)}})()},A$=(Q)=>{c_?.(Q)},g0=(Q)=>{if(Q.isComposing)return;if(j&&Q.key==="Escape"){Q.preventDefault(),O0(""),W?.();return}if(D0&&x_.length>0){let b=I.current?.value??(j?S_:W_);if(!String(b||"").match(/^@([a-zA-Z0-9_-]*)$/))o_(!1),T_([]);else{if(Q.key==="ArrowDown"){Q.preventDefault(),b_((x)=>(x+1)%x_.length);return}if(Q.key==="ArrowUp"){Q.preventDefault(),b_((x)=>(x-1+x_.length)%x_.length);return}if(Q.key==="Tab"||Q.key==="Enter"){Q.preventDefault(),q$(x_[N0]);return}if(Q.key==="Escape"){Q.preventDefault(),o_(!1),T_([]);return}}}if(s_&&D_.length>0){let b=I.current?.value??(j?S_:W_);if(!String(b||"").startsWith("/"))H_(!1),y_([]);else{if(Q.key==="ArrowDown"){Q.preventDefault(),d_((x)=>(x+1)%D_.length);return}if(Q.key==="ArrowUp"){Q.preventDefault(),d_((x)=>(x-1+D_.length)%D_.length);return}if(Q.key==="Tab"){Q.preventDefault(),b0(D_[n_]);return}if(Q.key==="Enter"&&!Q.shiftKey){if(!(I.current?.value??(j?S_:W_)).includes(" ")){Q.preventDefault();let V_=D_[n_];H_(!1),y_([]),k$(V_.name);return}}if(Q.key==="Escape"){Q.preventDefault(),H_(!1),y_([]);return}}}if(!j&&(Q.key==="ArrowUp"||Q.key==="ArrowDown")&&!Q.metaKey&&!Q.ctrlKey&&!Q.altKey&&!Q.shiftKey){let b=I.current;if(!b)return;let x=b.value||"",n=b.selectionStart===0&&b.selectionEnd===0,V_=b.selectionStart===x.length&&b.selectionEnd===x.length;if(Q.key==="ArrowUp"&&n||Q.key==="ArrowDown"&&V_){let E_=W$.current;if(!E_.length)return;Q.preventDefault();let P_=C0.current;if(Q.key==="ArrowUp"){if(P_===-1)R0.current=x,P_=E_.length-1;else if(P_>0)P_-=1;C0.current=P_,O$(E_[P_]||"")}else{if(P_===-1)return;if(P_<E_.length-1)P_+=1,C0.current=P_,O$(E_[P_]||"");else C0.current=-1,O$(R0.current||""),R0.current=""}requestAnimationFrame(()=>{let J0=I.current;if(!J0)return;let p0=J0.value.length;J0.selectionStart=p0,J0.selectionEnd=p0});return}}if(Q.key==="Enter"&&!Q.shiftKey&&(Q.ctrlKey||Q.metaKey)){Q.preventDefault();let b=I.current?.value??(j?S_:W_);if(j){if(b.trim())N?.(b.trim(),Z)}else k$(b,"steer");return}if(Q.key==="Enter"&&!Q.shiftKey){Q.preventDefault();let b=I.current?.value??(j?S_:W_);if(j){if(b.trim())N?.(b.trim(),Z)}else k$(b)}},j0=(Q)=>{let b=Array.from(Q||[]).filter((x)=>x&&x.type&&x.type.startsWith("image/"));if(!b.length)return;__((x)=>[...x,...b]),L_(null)},Q0=(Q)=>{j0(Q.target.files),Q.target.value=""},B$=(Q)=>{if(j)return;Q.preventDefault(),Q.stopPropagation(),M0.current+=1,G_(!0)},b$=(Q)=>{if(j)return;if(Q.preventDefault(),Q.stopPropagation(),M0.current=Math.max(0,M0.current-1),M0.current===0)G_(!1)},o$=(Q)=>{if(j)return;if(Q.preventDefault(),Q.stopPropagation(),Q.dataTransfer)Q.dataTransfer.dropEffect="copy";G_(!0)},w$=(Q)=>{if(j)return;Q.preventDefault(),Q.stopPropagation(),M0.current=0,G_(!1),j0(Q.dataTransfer?.files||[])},t0=(Q)=>{if(j)return;let b=Q.clipboardData?.items;if(!b||!b.length)return;let x=[];for(let n of b){if(n.kind!=="file")continue;let V_=n.getAsFile?.();if(V_)x.push(V_)}if(x.length>0)Q.preventDefault(),j0(x)},v$=(Q)=>{__((b)=>b.filter((x,n)=>n!==Q))},e0=()=>{L_(null),__([]),B?.(),C?.()},w0=()=>{if(!navigator.geolocation){alert("Geolocation is not available in this browser.");return}navigator.geolocation.getCurrentPosition((Q)=>{let{latitude:b,longitude:x,accuracy:n}=Q.coords,V_=`${b.toFixed(5)}, ${x.toFixed(5)}`,E_=Number.isFinite(n)?` ±${Math.round(n)}m`:"",P_=`https://maps.google.com/?q=${b},${x}`,J0=`Location: ${V_}${E_} ${P_}`;Z2(J0)},(Q)=>{let b=Q?.message||"Unable to retrieve location.";alert(`Location error: ${b}`)},{enableHighAccuracy:!0,timeout:1e4,maximumAge:0})};f(()=>{if(!U0)return;E0(!0),D2(Q_).then((Q)=>{let b=Array.isArray(Q?.models)?Q.models.filter((x)=>typeof x==="string"&&x.trim().length>0):[];b.sort((x,n)=>x.localeCompare(n,void 0,{sensitivity:"base"})),r_(b),$0(Q)}).catch((Q)=>{console.warn("Failed to load model list:",Q),r_([])}).finally(()=>{E0(!1)})},[U0,m]),f(()=>{if(j)f_(!1),H_(!1),y_([]),o_(!1),T_([])},[j]),f(()=>{if(!U0)return;let Q=(b)=>{let x=w_.current,n=Y0.current,V_=b.target;if(x&&x.contains(V_))return;if(n&&n.contains(V_))return;f_(!1)};return document.addEventListener("pointerdown",Q),()=>document.removeEventListener("pointerdown",Q)},[U0]),f(()=>{let Q=()=>{let E_=f0.current?.clientWidth||0;y0((P_)=>P_===E_?P_:E_)};Q();let b=f0.current,x=0,n=()=>{if(x)cancelAnimationFrame(x);x=requestAnimationFrame(()=>{x=0,Q()})},V_=null;if(b&&typeof ResizeObserver<"u")V_=new ResizeObserver(()=>n()),V_.observe(b);if(typeof window<"u")window.addEventListener("resize",n);return()=>{if(x)cancelAnimationFrame(x);if(V_?.disconnect?.(),typeof window<"u")window.removeEventListener("resize",n)}},[j,m,i_.length,F?.percent]);let P$=(Q)=>{let b=Q.target.value;L_(null),V$(Q.target),O$(b)};return f(()=>{requestAnimationFrame(()=>V$())},[W_,S_,j]),f(()=>{if(j)return;n$(W_)},[M_,Q_,W_,j]),L`
        <div class="compose-box">
            ${!j&&B_.length>0&&L`
                <div class="compose-queue-stack">
                    ${B_.map((Q)=>{let b=typeof Q?.content==="string"?Q.content:"",x=u0(b);if(!x.text.trim()&&x.fileRefs.length===0&&x.messageRefs.length===0)return null;return L`
                            <div class="compose-queue-stack-item" role="listitem">
                                <div class="compose-queue-stack-content" title=${b}>
                                    ${x.text.trim()&&L`
                                        <div class="compose-queue-stack-text">${x.text}</div>
                                    `}
                                    ${(x.messageRefs.length>0||x.fileRefs.length>0)&&L`
                                        <div class="compose-queue-stack-refs">
                                            ${x.messageRefs.map((n)=>L`
                                                <${U$}
                                                    key=${"queue-msg-"+n}
                                                    prefix="compose"
                                                    label=${"msg:"+n}
                                                    title=${"Message reference: "+n}
                                                    icon="message"
                                                />
                                            `)}
                                            ${x.fileRefs.map((n)=>{let V_=n.split("/").pop()||n;return L`
                                                    <${U$}
                                                        key=${"queue-file-"+n}
                                                        prefix="compose"
                                                        label=${V_}
                                                        title=${n}
                                                        onClick=${()=>h?.(n)}
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
                                        onClick=${()=>A$(Q)}
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
                                        onClick=${()=>o?.(Q)}
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
                class=${`compose-input-wrapper${C_?" drag-active":""}`}
                onDragEnter=${B$}
                onDragOver=${o$}
                onDragLeave=${b$}
                onDrop=${w$}
            >
                <div class="compose-input-main">
                    ${P0&&!i$&&L`
                        <div class="compose-submit-error compose-submit-error-top" role="status" aria-live="polite">${P0}</div>
                    `}
                    ${i$&&L`
                        <div class="compose-file-refs">
                            ${P0&&L`
                                <div class="compose-submit-error" role="status" aria-live="polite">${P0}</div>
                            `}
                            ${Y.map((Q)=>{return L`
                                    <${U$}
                                        key=${"msg-"+Q}
                                        prefix="compose"
                                        label=${"msg:"+Q}
                                        title=${"Message reference: "+Q}
                                        removeTitle="Remove reference"
                                        icon="message"
                                        onRemove=${()=>U?.(Q)}
                                    />
                                `})}
                            ${q.map((Q)=>{let b=Q.split("/").pop()||Q;return L`
                                    <${U$}
                                        prefix="compose"
                                        label=${b}
                                        title=${Q}
                                        onClick=${()=>h?.(Q)}
                                        removeTitle="Remove file"
                                        onRemove=${()=>V?.(Q)}
                                    />
                                `})}
                            ${X_.map((Q,b)=>{let x=Q?.name||`attachment-${b+1}`;return L`
                                    <${U$}
                                        key=${x+b}
                                        prefix="compose"
                                        label=${x}
                                        title=${x}
                                        removeTitle="Remove attachment"
                                        onRemove=${()=>v$(b)}
                                    />
                                `})}
                            <button
                                type="button"
                                class="compose-clear-attachments-btn"
                                onClick=${e0}
                                title="Clear all attachments and references"
                                aria-label="Clear all attachments and references"
                            >
                                Clear all
                            </button>
                        </div>
                    `}
                    ${!j&&typeof $_==="function"&&L`
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
                        ref=${I}
                        placeholder=${j?"Search (Enter to run)...":"Message (Enter to send, Shift+Enter for newline)..."}
                        value=${j?S_:W_}
                        onInput=${P$}
                        onKeyDown=${g0}
                        onPaste=${t0}
                        onFocus=${$}
                        onClick=${$}
                        rows="1"
                    />
                    ${D0&&x_.length>0&&L`
                        <div class="slash-autocomplete" ref=${k_}>
                            ${x_.map((Q,b)=>L`
                                <div
                                    key=${Q.chat_jid||Q.agent_name}
                                    class=${`slash-item${b===N0?" active":""}`}
                                    onMouseDown=${(x)=>{x.preventDefault(),q$(Q)}}
                                    onMouseEnter=${()=>b_(b)}
                                >
                                    <span class="slash-name">@${Q.agent_name}</span>
                                    <span class="slash-desc">${Q.display_name||Q.chat_jid||"Active agent"}</span>
                                </div>
                            `)}
                        </div>
                    `}
                    ${s_&&D_.length>0&&L`
                        <div class="slash-autocomplete" ref=${e}>
                            ${D_.map((Q,b)=>L`
                                <div
                                    key=${Q.name}
                                    class=${`slash-item${b===n_?" active":""}`}
                                    onMouseDown=${(x)=>{x.preventDefault(),b0(Q)}}
                                    onMouseEnter=${()=>d_(b)}
                                >
                                    <span class="slash-name">${Q.name}</span>
                                    <span class="slash-desc">${Q.description}</span>
                                </div>
                            `)}
                        </div>
                    `}
                    ${U0&&!j&&L`
                        <div class="compose-model-popup" ref=${w_}>
                            <div class="compose-model-popup-title">Select model</div>
                            <div class="compose-model-popup-menu" role="menu" aria-label="Model picker">
                                ${z0&&L`
                                    <div class="compose-model-popup-empty">Loading models…</div>
                                `}
                                ${!z0&&B0.length===0&&L`
                                    <div class="compose-model-popup-empty">No models available.</div>
                                `}
                                ${!z0&&B0.map((Q)=>L`
                                    <button
                                        key=${Q}
                                        type="button"
                                        role="menuitem"
                                        class=${`compose-model-popup-item${m===Q?" active":""}`}
                                        onClick=${()=>{m0(Q)}}
                                        disabled=${K0}
                                    >
                                        ${Q}
                                    </button>
                                `)}
                            </div>
                            <div class="compose-model-popup-actions">
                                <button
                                    type="button"
                                    class="compose-model-popup-btn"
                                    onClick=${()=>{S0()}}
                                    disabled=${K0}
                                >
                                    Next model
                                </button>
                            </div>
                        </div>
                    `}
                </div>
                <div class="compose-footer" ref=${f0}>
                    ${!j&&m&&L`
                    <div class="compose-meta-row">
                        ${!j&&m&&L`
                            <div class="compose-model-meta">
                                <button
                                    ref=${Y0}
                                    type="button"
                                    class="compose-model-hint compose-model-hint-btn"
                                    title=${R$}
                                    aria-label="Open model picker"
                                    onClick=${d$}
                                    disabled=${K0}
                                >
                                    ${K0?"Switching…":G0}
                                </button>
                                <div class="compose-model-meta-subline">
                                    ${!K0&&E$&&L`
                                        <span class="compose-model-usage-hint" title=${R$}>
                                            ${E$}
                                        </span>
                                    `}
                                </div>
                            </div>
                        `}
                    </div>
                    `}
                    <div class="compose-actions ${j?"search-mode":""}">
                        ${A_!=="connected"&&L`
                            <span class="compose-connection-status connection-status ${A_}" title=${A_==="disconnected"?"Reconnecting...":`Connection: ${A_}`}>
                                ${A_==="disconnected"?"Reconnecting...":A_}
                            </span>
                        `}
                    ${H$&&L`
                        <div class="compose-agent-hints compose-agent-hints-inline" title="Active chat agents you can mention with @name">
                            <span class="compose-agent-hints-label">Agents</span>
                            ${i_.map((Q)=>L`
                                <button
                                    key=${Q.chat_jid||Q.agent_name}
                                    type="button"
                                    class=${`compose-agent-chip${Q.is_active?" active":""}`}
                                    onClick=${()=>q$(Q)}
                                    title=${`${Q.display_name||Q.chat_jid||"Active agent"} — insert @${Q.agent_name}`}
                                >
                                    <span class="compose-agent-chip-handle">@${Q.agent_name}</span>
                                </button>
                            `)}
                        </div>
                    `}
                    ${!j&&F&&F.percent!=null&&L`
                        <${d9} usage=${F} />
                    `}
                    ${j&&L`
                        <label class="compose-search-scope-wrap" title="Search scope">
                            <span class="compose-search-scope-label">Scope</span>
                            <select
                                class="compose-search-scope-select"
                                value=${Z}
                                onChange=${(Q)=>K?.(Q.currentTarget.value)}
                            >
                                <option value="current">Current</option>
                                <option value="root">Branch family</option>
                                <option value="all">All chats</option>
                            </select>
                        </label>
                    `}
                    <button
                        class="icon-btn search-toggle"
                        onClick=${j?W:z}
                        title=${j?"Close search":"Search"}
                    >
                        ${j?L`
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M18 6L6 18M6 6l12 12"/>
                            </svg>
                        `:L`
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <circle cx="11" cy="11" r="8"/>
                                <path d="M21 21l-4.35-4.35"/>
                            </svg>
                        `}
                    </button>
                    ${l0&&!j&&L`
                        <button
                            class="icon-btn location-btn"
                            onClick=${w0}
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
                    ${x0&&!j&&L`
                        <button
                            class=${`icon-btn notification-btn${$2?" active":""}`}
                            onClick=${i}
                            title=${v0}
                            type="button"
                        >
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M18 8a6 6 0 1 0-12 0c0 7-3 9-3 9h18s-3-2-3-9" />
                                <path d="M13.73 21a2 2 0 0 1-3.46 0" />
                            </svg>
                        </button>
                    `}
                    ${!j&&L`
                        ${l&&K_&&L`
                            <button
                                class="icon-btn attach-editor-btn"
                                onClick=${K_}
                                title=${`Attach open file: ${l}`}
                                type="button"
                                disabled=${q.includes(l)}
                            >
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"/><polyline points="13 2 13 9 20 9"/></svg>
                            </button>
                        `}
                        <label class="icon-btn" title="Attach image">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>
                            <input type="file" accept="image/*" multiple hidden onChange=${Q0} />
                        </label>
                        <button 
                            class="icon-btn send-btn" 
                            type="button"
                            onClick=${()=>{k$()}}
                            disabled=${!h$}
                            title="Send (Enter)"
                        >
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/></svg>
                        </button>
                    `}
                </div>
            </div>
        </div>
        </div>
    `}var v3="piclaw_theme",$1="piclaw_tint",A2={bgPrimary:"#ffffff",bgSecondary:"#f7f9fa",bgHover:"#e8ebed",textPrimary:"#0f1419",textSecondary:"#536471",borderColor:"#eff3f4",accent:"#1d9bf0",accentHover:"#1a8cd8",danger:"#f4212e",success:"#00ba7c"},u3={bgPrimary:"#000000",bgSecondary:"#16181c",bgHover:"#1d1f23",textPrimary:"#e7e9ea",textSecondary:"#71767b",borderColor:"#2f3336",accent:"#1d9bf0",accentHover:"#1a8cd8",danger:"#f4212e",success:"#00ba7c"},f3={default:{label:"Default",mode:"auto",light:A2,dark:u3},tango:{label:"Tango",mode:"light",light:{bgPrimary:"#f6f5f4",bgSecondary:"#efedeb",bgHover:"#e5e3e1",textPrimary:"#2e3436",textSecondary:"#5c6466",borderColor:"#d3d7cf",accent:"#3465a4",accentHover:"#2c5890",danger:"#cc0000",success:"#4e9a06"}},xterm:{label:"XTerm",mode:"dark",dark:{bgPrimary:"#000000",bgSecondary:"#0a0a0a",bgHover:"#121212",textPrimary:"#d0d0d0",textSecondary:"#8a8a8a",borderColor:"#1f1f1f",accent:"#00a2ff",accentHover:"#0086d1",danger:"#ff5f5f",success:"#5fff87"}},monokai:{label:"Monokai",mode:"dark",dark:{bgPrimary:"#272822",bgSecondary:"#2f2f2f",bgHover:"#3a3a3a",textPrimary:"#f8f8f2",textSecondary:"#cfcfc2",borderColor:"#3e3d32",accent:"#f92672",accentHover:"#e81560",danger:"#f92672",success:"#a6e22e"}},"monokai-pro":{label:"Monokai Pro",mode:"dark",dark:{bgPrimary:"#2d2a2e",bgSecondary:"#363237",bgHover:"#403a40",textPrimary:"#fcfcfa",textSecondary:"#c1c0c0",borderColor:"#444046",accent:"#ff6188",accentHover:"#f74f7e",danger:"#ff4f5e",success:"#a9dc76"}},ristretto:{label:"Ristretto",mode:"dark",dark:{bgPrimary:"#2c2525",bgSecondary:"#362d2d",bgHover:"#403535",textPrimary:"#f4f1ef",textSecondary:"#cbbdb8",borderColor:"#4a3c3c",accent:"#ff9f43",accentHover:"#f28a2e",danger:"#ff5f56",success:"#a9dc76"}},dracula:{label:"Dracula",mode:"dark",dark:{bgPrimary:"#282a36",bgSecondary:"#303445",bgHover:"#3a3f52",textPrimary:"#f8f8f2",textSecondary:"#c5c8d6",borderColor:"#44475a",accent:"#bd93f9",accentHover:"#a87ded",danger:"#ff5555",success:"#50fa7b"}},catppuccin:{label:"Catppuccin",mode:"dark",dark:{bgPrimary:"#1e1e2e",bgSecondary:"#24273a",bgHover:"#2c2f41",textPrimary:"#cdd6f4",textSecondary:"#a6adc8",borderColor:"#313244",accent:"#89b4fa",accentHover:"#74a0f5",danger:"#f38ba8",success:"#a6e3a1"}},nord:{label:"Nord",mode:"dark",dark:{bgPrimary:"#2e3440",bgSecondary:"#3b4252",bgHover:"#434c5e",textPrimary:"#eceff4",textSecondary:"#d8dee9",borderColor:"#4c566a",accent:"#88c0d0",accentHover:"#78a9c0",danger:"#bf616a",success:"#a3be8c"}},gruvbox:{label:"Gruvbox",mode:"dark",dark:{bgPrimary:"#282828",bgSecondary:"#32302f",bgHover:"#3c3836",textPrimary:"#ebdbb2",textSecondary:"#bdae93",borderColor:"#3c3836",accent:"#d79921",accentHover:"#c28515",danger:"#fb4934",success:"#b8bb26"}},solarized:{label:"Solarized",mode:"auto",light:{bgPrimary:"#fdf6e3",bgSecondary:"#f5efdc",bgHover:"#eee8d5",textPrimary:"#586e75",textSecondary:"#657b83",borderColor:"#e0d8c6",accent:"#268bd2",accentHover:"#1f78b3",danger:"#dc322f",success:"#859900"},dark:{bgPrimary:"#002b36",bgSecondary:"#073642",bgHover:"#0b3c4a",textPrimary:"#eee8d5",textSecondary:"#93a1a1",borderColor:"#18424a",accent:"#268bd2",accentHover:"#1f78b3",danger:"#dc322f",success:"#859900"}},tokyo:{label:"Tokyo",mode:"dark",dark:{bgPrimary:"#1a1b26",bgSecondary:"#24283b",bgHover:"#2f3549",textPrimary:"#c0caf5",textSecondary:"#9aa5ce",borderColor:"#414868",accent:"#7aa2f7",accentHover:"#6b92e6",danger:"#f7768e",success:"#9ece6a"}},miasma:{label:"Miasma",mode:"dark",dark:{bgPrimary:"#1f1f23",bgSecondary:"#29292f",bgHover:"#33333a",textPrimary:"#e5e5e5",textSecondary:"#b4b4b4",borderColor:"#3d3d45",accent:"#c9739c",accentHover:"#b8618c",danger:"#e06c75",success:"#98c379"}},github:{label:"GitHub",mode:"auto",light:{bgPrimary:"#ffffff",bgSecondary:"#f6f8fa",bgHover:"#eaeef2",textPrimary:"#24292f",textSecondary:"#57606a",borderColor:"#d0d7de",accent:"#0969da",accentHover:"#0550ae",danger:"#cf222e",success:"#1a7f37"},dark:{bgPrimary:"#0d1117",bgSecondary:"#161b22",bgHover:"#21262d",textPrimary:"#c9d1d9",textSecondary:"#8b949e",borderColor:"#30363d",accent:"#2f81f7",accentHover:"#1f6feb",danger:"#f85149",success:"#3fb950"}},gotham:{label:"Gotham",mode:"dark",dark:{bgPrimary:"#0b0f14",bgSecondary:"#111720",bgHover:"#18212b",textPrimary:"#cbd6e2",textSecondary:"#9bb0c3",borderColor:"#1f2a37",accent:"#5ccfe6",accentHover:"#48b8ce",danger:"#d26937",success:"#2aa889"}}},s9=["--bg-primary","--bg-secondary","--bg-hover","--text-primary","--text-secondary","--border-color","--accent-color","--accent-hover","--accent-contrast-text","--accent-soft","--accent-soft-strong","--danger-color","--success-color","--search-highlight-color"],a$={theme:"default",tint:null},m3="light",e4=!1;function j1(_){let $=String(_||"").trim().toLowerCase();if(!$)return"default";if($==="solarized-dark"||$==="solarized-light")return"solarized";if($==="github-dark"||$==="github-light")return"github";if($==="tokyo-night")return"tokyo";return $}function q2(_){if(!_)return null;let $=String(_).trim();if(!$)return null;let j=$.startsWith("#")?$.slice(1):$;if(!/^[0-9a-fA-F]{3}$/.test(j)&&!/^[0-9a-fA-F]{6}$/.test(j))return null;let Z=j.length===3?j.split("").map((K)=>K+K).join(""):j,N=parseInt(Z,16);return{r:N>>16&255,g:N>>8&255,b:N&255,hex:`#${Z.toLowerCase()}`}}function o9(_){if(!_||typeof document>"u")return null;let $=String(_).trim();if(!$)return null;let j=document.createElement("div");if(j.style.color="",j.style.color=$,!j.style.color)return null;let Z=j.style.color;try{if(document.body)j.style.display="none",document.body.appendChild(j),Z=getComputedStyle(j).color||j.style.color,document.body.removeChild(j)}catch{}let N=Z.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/i);if(!N)return null;let K=parseInt(N[1],10),z=parseInt(N[2],10),W=parseInt(N[3],10);if(![K,z,W].every((V)=>Number.isFinite(V)))return null;let q=`#${[K,z,W].map((V)=>V.toString(16).padStart(2,"0")).join("")}`;return{r:K,g:z,b:W,hex:q}}function g3(_){return q2(_)||o9(_)}function k2(_,$,j){let Z=Math.round(_.r+($.r-_.r)*j),N=Math.round(_.g+($.g-_.g)*j),K=Math.round(_.b+($.b-_.b)*j);return`rgb(${Z} ${N} ${K})`}function _1(_,$){return`rgba(${_.r}, ${_.g}, ${_.b}, ${$})`}function r9(_){let $=_.r/255,j=_.g/255,Z=_.b/255,N=$<=0.03928?$/12.92:Math.pow(($+0.055)/1.055,2.4),K=j<=0.03928?j/12.92:Math.pow((j+0.055)/1.055,2.4),z=Z<=0.03928?Z/12.92:Math.pow((Z+0.055)/1.055,2.4);return 0.2126*N+0.7152*K+0.0722*z}function a9(_){return r9(_)>0.4?"#000000":"#ffffff"}function p3(){if(typeof window>"u")return"light";try{return window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}catch{return"light"}}function Z1(_){return f3[_]||f3.default}function t9(_){return _.mode==="auto"?p3():_.mode}function c3(_,$){let j=Z1(_);if($==="dark"&&j.dark)return j.dark;if($==="light"&&j.light)return j.light;return j.dark||j.light||A2}function h3(_,$,j){let Z=g3($);if(!Z)return _;let N=q2(_.bgPrimary),K=q2(_.bgSecondary),z=q2(_.bgHover),W=q2(_.borderColor);if(!N||!K||!z||!W)return _;let V=q2(j==="dark"?"#ffffff":"#000000");return{..._,bgPrimary:k2(N,Z,0.08),bgSecondary:k2(K,Z,0.12),bgHover:k2(z,Z,0.16),borderColor:k2(W,Z,0.08),accent:Z.hex,accentHover:V?k2(Z,V,0.18):Z.hex}}function e9(_,$){if(typeof document>"u")return;let j=document.documentElement,Z=_.accent,N=g3(Z),K=N?_1(N,$==="dark"?0.35:0.2):_.searchHighlight||_.searchHighlightColor,z=N?_1(N,$==="dark"?0.16:0.12):"rgba(29, 155, 240, 0.12)",W=N?_1(N,$==="dark"?0.28:0.2):"rgba(29, 155, 240, 0.2)",q=N?a9(N):$==="dark"?"#000000":"#ffffff",V={"--bg-primary":_.bgPrimary,"--bg-secondary":_.bgSecondary,"--bg-hover":_.bgHover,"--text-primary":_.textPrimary,"--text-secondary":_.textSecondary,"--border-color":_.borderColor,"--accent-color":Z,"--accent-hover":_.accentHover||Z,"--accent-soft":z,"--accent-soft-strong":W,"--accent-contrast-text":q,"--danger-color":_.danger||A2.danger,"--success-color":_.success||A2.success,"--search-highlight-color":K||"rgba(29, 155, 240, 0.2)"};Object.entries(V).forEach(([B,Y])=>{if(Y)j.style.setProperty(B,Y)})}function _7(){if(typeof document>"u")return;let _=document.documentElement;s9.forEach(($)=>_.style.removeProperty($))}function V2(_,$={}){if(typeof document>"u")return null;let j=typeof $.id==="string"&&$.id.trim()?$.id.trim():null,Z=j?document.getElementById(j):document.querySelector(`meta[name="${_}"]`);if(!Z)Z=document.createElement("meta"),document.head.appendChild(Z);if(Z.setAttribute("name",_),j)Z.setAttribute("id",j);return Z}function R3(_){let $=j1(a$?.theme||"default"),j=a$?.tint?String(a$.tint).trim():null,Z=c3($,_);if($==="default"&&j)Z=h3(Z,j,_);if(Z?.bgPrimary)return Z.bgPrimary;return _==="dark"?u3.bgPrimary:A2.bgPrimary}function $7(_,$){if(typeof document>"u")return;let j=V2("theme-color",{id:"dynamic-theme-color"});if(j&&_)j.removeAttribute("media"),j.setAttribute("content",_);let Z=V2("theme-color",{id:"theme-color-light"});if(Z)Z.setAttribute("media","(prefers-color-scheme: light)"),Z.setAttribute("content",R3("light"));let N=V2("theme-color",{id:"theme-color-dark"});if(N)N.setAttribute("media","(prefers-color-scheme: dark)"),N.setAttribute("content",R3("dark"));let K=V2("msapplication-TileColor");if(K&&_)K.setAttribute("content",_);let z=V2("msapplication-navbutton-color");if(z&&_)z.setAttribute("content",_);let W=V2("apple-mobile-web-app-status-bar-style");if(W)W.setAttribute("content",$==="dark"?"black-translucent":"default")}function j7(){if(typeof window>"u")return;let _={...a$,mode:m3};window.dispatchEvent(new CustomEvent("piclaw-theme-change",{detail:_}))}function N1(_,$={}){if(typeof window>"u"||typeof document>"u")return;let j=j1(_?.theme||"default"),Z=_?.tint?String(_.tint).trim():null,N=Z1(j),K=t9(N),z=c3(j,K);a$={theme:j,tint:Z},m3=K;let W=document.documentElement;W.dataset.theme=K,W.dataset.colorTheme=j,W.dataset.tint=Z?String(Z):"",W.style.colorScheme=K;let q=z;if(j==="default"&&Z)q=h3(z,Z,K);if(j==="default"&&!Z)_7();else e9(q,K);if($7(q.bgPrimary,K),j7(),$.persist!==!1)if(_0(v3,j),Z)_0($1,Z);else _0($1,"")}function $4(){if(Z1(a$.theme).mode!=="auto")return;N1(a$,{persist:!1})}function i3(){if(typeof window>"u")return()=>{};let _=j1(z$(v3)||"default"),$=z$($1),j=$?$.trim():null;if(N1({theme:_,tint:j},{persist:!1}),window.matchMedia&&!e4){let Z=window.matchMedia("(prefers-color-scheme: dark)");if(Z.addEventListener)Z.addEventListener("change",$4);else if(Z.addListener)Z.addListener($4);return e4=!0,()=>{if(Z.removeEventListener)Z.removeEventListener("change",$4);else if(Z.removeListener)Z.removeListener($4);e4=!1}}return()=>{}}function l3(_){if(!_||typeof _!=="object")return;let $=_.chat_jid||_.chatJid;if($&&$!=="web:default")return;let j=_.theme??_.name??_.colorTheme,Z=_.tint??null;N1({theme:j||"default",tint:Z},{persist:!0})}function n3(){if(typeof document>"u")return"light";let _=document.documentElement?.dataset?.theme;if(_==="dark"||_==="light")return _;return p3()}var j4=/#(\w+)/g,Z7=new Set(["strong","em","b","i","u","s","br","p","ul","ol","li","blockquote","ruby","rt","rp","span"]),N7=new Set(["a","abbr","blockquote","br","code","div","em","hr","h1","h2","h3","h4","h5","h6","i","img","kbd","li","mark","ol","p","pre","ruby","rt","rp","s","span","strong","sub","sup","table","tbody","td","th","thead","tr","u","ul","math","semantics","mrow","mi","mn","mo","mtext","mspace","msup","msub","msubsup","mfrac","msqrt","mroot","mtable","mtr","mtd","annotation"]),K7=new Set(["class","style","title","role","aria-hidden","aria-label","aria-expanded","aria-live","data-mermaid","data-hashtag"]),z7={a:new Set(["href","target","rel"]),img:new Set(["src","alt","title"])},Y7=new Set(["http:","https:","mailto:",""]);function K1(_){return String(_||"").replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/'/g,"&#39;")}function t$(_,$={}){if(!_)return null;let j=String(_).trim();if(!j)return null;if(j.startsWith("#")||j.startsWith("/"))return j;if(j.startsWith("data:")){if($.allowDataImage&&/^data:image\//i.test(j))return j;return null}if(j.startsWith("blob:"))return j;try{let Z=new URL(j,typeof window<"u"?window.location.origin:"http://localhost");if(!Y7.has(Z.protocol))return null;return Z.href}catch{return null}}function d3(_,$={}){if(!_)return"";let j=new DOMParser().parseFromString(_,"text/html"),Z=[],N=j.createTreeWalker(j.body,NodeFilter.SHOW_ELEMENT),K;while(K=N.nextNode())Z.push(K);for(let z of Z){let W=z.tagName.toLowerCase();if(!N7.has(W)){let V=z.parentNode;if(!V)continue;while(z.firstChild)V.insertBefore(z.firstChild,z);V.removeChild(z);continue}let q=z7[W]||new Set;for(let V of Array.from(z.attributes)){let B=V.name.toLowerCase(),Y=V.value;if(B.startsWith("on")){z.removeAttribute(V.name);continue}if(B.startsWith("data-")||B.startsWith("aria-"))continue;if(q.has(B)||K7.has(B)){if(B==="href"){let U=t$(Y);if(!U)z.removeAttribute(V.name);else if(z.setAttribute(V.name,U),W==="a"&&!z.getAttribute("rel"))z.setAttribute("rel","noopener noreferrer")}else if(B==="src"){let U=W==="img"&&typeof $.rewriteImageSrc==="function"?$.rewriteImageSrc(Y):Y,C=t$(U,{allowDataImage:W==="img"});if(!C)z.removeAttribute(V.name);else z.setAttribute(V.name,C)}continue}z.removeAttribute(V.name)}}return j.body.innerHTML}function s3(_){if(!_)return _;let $=_.replace(/</g,"&lt;").replace(/>/g,"&gt;");return new DOMParser().parseFromString($,"text/html").documentElement.textContent}function Z4(_,$=2){if(!_)return _;let j=_;for(let Z=0;Z<$;Z+=1){let N=s3(j);if(N===j)break;j=N}return j}function G7(_){if(!_)return{text:"",blocks:[]};let j=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),Z=[],N=[],K=!1,z=[];for(let W of j){if(!K&&W.trim().match(/^```mermaid\s*$/i)){K=!0,z=[];continue}if(K&&W.trim().match(/^```\s*$/)){let q=Z.length;Z.push(z.join(`
`)),N.push(`@@MERMAID_BLOCK_${q}@@`),K=!1,z=[];continue}if(K)z.push(W);else N.push(W)}if(K)N.push("```mermaid"),N.push(...z);return{text:N.join(`
`),blocks:Z}}function W7(_){if(!_)return _;return Z4(_,5)}function X7(_){let $=new TextEncoder().encode(String(_||"")),j="";for(let Z of $)j+=String.fromCharCode(Z);return btoa(j)}function V7(_){let $=atob(String(_||"")),j=new Uint8Array($.length);for(let Z=0;Z<$.length;Z+=1)j[Z]=$.charCodeAt(Z);return new TextDecoder().decode(j)}function q7(_,$){if(!_||!$||$.length===0)return _;return _.replace(/@@MERMAID_BLOCK_(\d+)@@/g,(j,Z)=>{let N=Number(Z),K=$[N]??"",z=W7(K);return`<div class="mermaid-container" data-mermaid="${X7(z)}"><div class="mermaid-loading">Loading diagram...</div></div>`})}function o3(_){if(!_)return _;return _.replace(/<code>([\s\S]*?)<\/code>/gi,($,j)=>{if(j.includes(`
`))return`
\`\`\`
${j}
\`\`\`
`;return`\`${j}\``})}var O7={span:new Set(["title","class","lang","dir"])};function B7(_,$){let j=O7[_];if(!j||!$)return"";let Z=[],N=/([a-zA-Z_:][\w:.-]*)(?:\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s"'`=<>]+)))?/g,K;while(K=N.exec($)){let z=(K[1]||"").toLowerCase();if(!z||z.startsWith("on")||!j.has(z))continue;let W=K[2]??K[3]??K[4]??"";Z.push(` ${z}="${K1(W)}"`)}return Z.join("")}function r3(_){if(!_)return _;return _.replace(/&lt;([\s\S]*?)&gt;/g,($,j)=>{let Z=j.trim(),N=Z.startsWith("/"),K=N?Z.slice(1).trim():Z,W=K.endsWith("/")?K.slice(0,-1).trim():K,[q=""]=W.split(/\s+/,1),V=q.toLowerCase();if(!V||!Z7.has(V))return $;if(V==="br")return N?"":"<br>";if(N)return`</${V}>`;let B=W.slice(q.length).trim(),Y=B7(V,B);return`<${V}${Y}>`})}function a3(_){if(!_)return _;let $=(j)=>j.replace(/&amp;lt;/g,"&lt;").replace(/&amp;gt;/g,"&gt;").replace(/&amp;quot;/g,"&quot;").replace(/&amp;#39;/g,"&#39;").replace(/&amp;amp;/g,"&amp;");return _.replace(/<pre><code>([\s\S]*?)<\/code><\/pre>/g,(j,Z)=>`<pre><code>${$(Z)}</code></pre>`).replace(/<code>([\s\S]*?)<\/code>/g,(j,Z)=>`<code>${$(Z)}</code>`)}function t3(_){if(!_)return _;let $=new DOMParser().parseFromString(_,"text/html"),j=$.createTreeWalker($.body,NodeFilter.SHOW_TEXT),Z=(K)=>K.replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&quot;/g,'"').replace(/&#39;/g,"'").replace(/&amp;/g,"&"),N;while(N=j.nextNode()){if(!N.nodeValue)continue;let K=Z(N.nodeValue);if(K!==N.nodeValue)N.nodeValue=K}return $.body.innerHTML}function L7(_){if(!window.katex)return _;let $=(z)=>s3(z).replace(/&gt;/g,">").replace(/&lt;/g,"<").replace(/&amp;/g,"&").replace(/<br\s*\/?\s*>/gi,`
`),j=(z)=>{let W=[],q=z.replace(/<pre\b[^>]*>\s*<code\b[^>]*>[\s\S]*?<\/code>\s*<\/pre>/gi,(V)=>{let B=W.length;return W.push(V),`@@CODE_BLOCK_${B}@@`});return q=q.replace(/<code\b[^>]*>[\s\S]*?<\/code>/gi,(V)=>{let B=W.length;return W.push(V),`@@CODE_INLINE_${B}@@`}),{html:q,blocks:W}},Z=(z,W)=>{if(!W.length)return z;return z.replace(/@@CODE_(?:BLOCK|INLINE)_(\d+)@@/g,(q,V)=>{let B=Number(V);return W[B]??""})},N=j(_),K=N.html;return K=K.replace(/(^|\n|<br\s*\/?\s*>|<p>|<\/p>)\s*\$\$([\s\S]+?)\$\$\s*(?=\n|<br\s*\/?\s*>|<\/p>|$)/gi,(z,W,q)=>{try{let V=katex.renderToString($(q.trim()),{displayMode:!0,throwOnError:!1});return`${W}${V}`}catch(V){return`<span class="math-error" title="${K1(V.message)}">${z}</span>`}}),K=K.replace(/(^|[^\\$])\$(?!\s)([^\n$]+?)\$/g,(z,W,q)=>{if(/\s$/.test(q))return z;try{let V=katex.renderToString($(q),{displayMode:!1,throwOnError:!1});return`${W}${V}`}catch(V){return`${W}<span class="math-error" title="${K1(V.message)}">$${q}$</span>`}}),Z(K,N.blocks)}function Q7(_){if(!_)return _;let $=new DOMParser().parseFromString(_,"text/html"),j=$.createTreeWalker($.body,NodeFilter.SHOW_TEXT),Z=[],N;while(N=j.nextNode())Z.push(N);for(let K of Z){let z=K.nodeValue;if(!z)continue;if(j4.lastIndex=0,!j4.test(z))continue;j4.lastIndex=0;let W=K.parentElement;if(W&&(W.closest("a")||W.closest("code")||W.closest("pre")))continue;let q=z.split(j4);if(q.length<=1)continue;let V=$.createDocumentFragment();q.forEach((B,Y)=>{if(Y%2===1){let U=$.createElement("a");U.setAttribute("href","#"),U.className="hashtag",U.setAttribute("data-hashtag",B),U.textContent=`#${B}`,V.appendChild(U)}else V.appendChild($.createTextNode(B))}),K.parentNode?.replaceChild(V,K)}return $.body.innerHTML}function U7(_){if(!_)return _;let j=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),Z=[],N=!1;for(let K of j){if(!N&&K.trim().match(/^```(?:math|katex|latex)\s*$/i)){N=!0,Z.push("$$");continue}if(N&&K.trim().match(/^```\s*$/)){N=!1,Z.push("$$");continue}Z.push(K)}return Z.join(`
`)}function o0(_,$,j={}){if(!_)return"";let Z=U7(_),{text:N,blocks:K}=G7(Z),z=Z4(N,2),q=o3(z).replace(/</g,"&lt;").replace(/>/g,"&gt;"),V=r3(q),B=window.marked?marked.parse(V,{headerIds:!1,mangle:!1}):V.replace(/\n/g,"<br>");return B=a3(B),B=t3(B),B=L7(B),B=Q7(B),B=q7(B,K),B=d3(B,j),B}function N4(_){if(!_)return"";let $=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`),j=Z4($,2),N=o3(j).replace(/</g,"&lt;").replace(/>/g,"&gt;"),K=r3(N),z=window.marked?marked.parse(K):K.replace(/\n/g,"<br>");return z=a3(z),z=t3(z),z=d3(z),z}async function T$(_){if(!window.beautifulMermaid)return;let{renderMermaid:$,THEMES:j}=window.beautifulMermaid,N=n3()==="dark"?j["tokyo-night"]:j["github-light"],K=_.querySelectorAll(".mermaid-container[data-mermaid]");for(let z of K)try{let W=z.dataset.mermaid,q=V7(W||""),V=Z4(q,2),B=await $(V,{...N,transparent:!0});z.innerHTML=B,z.removeAttribute("data-mermaid")}catch(W){console.error("Mermaid render error:",W);let q=document.createElement("pre");q.className="mermaid-error",q.textContent=`Diagram error: ${W.message}`,z.innerHTML="",z.appendChild(q),z.removeAttribute("data-mermaid")}}function e3(_){let $=String(_||"").trim();if(!$.startsWith("/btw"))return null;let j=$.slice(4).trim();if(!j)return{type:"help"};if(j==="clear"||j==="close")return{type:"clear"};return{type:"ask",question:j}}function _6(_){return String(_||"").trim()||"web:default"}function $6(_){if(!_)return!1;let $=String(_.answer||"").trim();return _.status!=="running"&&Boolean($)}function j6(_){if(!_)return!1;return _.status!=="running"}function Z6(_){let $=String(_?.question||"").trim(),j=String(_?.answer||"").trim();if(!$&&!j)return"";return["BTW side conversation",$?`Question: ${$}`:null,j?`Answer:
${j}`:null].filter(Boolean).join(`

`)}function N6({session:_,onClose:$,onInject:j,onRetry:Z}){let N=D(null),K=D(null),z=_?.thinking?N4(_.thinking):"",W=_?.answer?o0(_.answer,null,{sanitize:!1}):"";if(f(()=>{if(N.current&&z)T$(N.current).catch(()=>{})},[z]),f(()=>{if(K.current&&W)T$(K.current).catch(()=>{})},[W]),!_)return null;let q=_.status==="running",V=Boolean(String(_.answer||"").trim()),B=Boolean(String(_.thinking||"").trim()),Y=$6(_),U=j6(_),C=!q&&V,m=q?"Thinking…":_.status==="error"?"Error":"Done";return L`
        <section class="btw-panel" aria-label="BTW side conversation">
            <div class="btw-panel-header">
                <div class="btw-panel-title-wrap">
                    <span class="btw-panel-title">Question</span>
                    <span class=${`btw-panel-status btw-panel-status-${_.status||"idle"}`}>${m}</span>
                </div>
                <button class="btw-panel-close" onClick=${()=>$?.()} title="Close BTW" aria-label="Close BTW">
                    <svg viewBox="0 0 16 16" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round">
                        <line x1="4" y1="4" x2="12" y2="12"/>
                        <line x1="12" y1="4" x2="4" y2="12"/>
                    </svg>
                </button>
            </div>

            ${_.question&&L`<div class="btw-block btw-question">${_.question}</div>`}
            ${_.error&&L`<div class="btw-block btw-error">${_.error}</div>`}
            ${B&&L`
                <details class="btw-block btw-thinking" open=${q?!0:void 0}>
                    <summary>Thinking</summary>
                    <div
                        class="btw-thinking-body post-content"
                        ref=${N}
                        dangerouslySetInnerHTML=${{__html:z}}
                    ></div>
                </details>
            `}
            ${Y&&L`
                <div class="btw-block btw-answer">
                    <div class="btw-answer-label">Answer</div>
                    <div
                        class="btw-answer-body post-content"
                        ref=${K}
                        dangerouslySetInnerHTML=${{__html:W}}
                    ></div>
                </div>
            `}

            ${U&&L`
                <div class="btw-panel-footer">
                    <div class="btw-panel-footer-left">
                        ${_.question&&L`
                            <button class="btw-btn btw-btn-secondary" onClick=${()=>Z?.()}>
                                Retry
                            </button>
                        `}
                    </div>
                    <div class="btw-panel-footer-right">
                        <button class="btw-btn btw-btn-primary" onClick=${()=>j?.()} disabled=${!C}>
                            Inject into chat
                        </button>
                    </div>
                </div>
            `}
        </section>
    `}var K6="PiClaw";function z1(_,$,j=!1){let Z=_||"PiClaw",N=Z.charAt(0).toUpperCase(),K=["#FF6B6B","#4ECDC4","#45B7D1","#FFA07A","#98D8C8","#F7DC6F","#BB8FCE","#85C1E2","#F8B195","#6C5CE7","#00B894","#FDCB6E","#E17055","#74B9FF","#A29BFE","#FD79A8","#00CEC9","#FFEAA7","#DFE6E9","#FF7675","#55EFC4","#81ECEC","#FAB1A0","#74B9FF","#A29BFE","#FD79A8"],z=N.charCodeAt(0)%K.length,W=K[z],q=Z.trim().toLowerCase(),V=typeof $==="string"?$.trim():"",B=V?V:null,Y=j||q==="PiClaw".toLowerCase()||q==="pi";return{letter:N,color:W,image:B||(Y?"/static/icon-192.png":null)}}function z6(_,$){if(!_)return"PiClaw";let j=$[_]?.name||_;return j?j.charAt(0).toUpperCase()+j.slice(1):"PiClaw"}function Y6(_,$){if(!_)return null;let j=$[_]||{};return j.avatar_url||j.avatarUrl||j.avatar||null}function G6(_){if(!_)return null;if(typeof document<"u"){let K=document.documentElement,z=K?.dataset?.colorTheme||"",W=K?.dataset?.tint||"",q=getComputedStyle(K).getPropertyValue("--accent-color")?.trim();if(q&&(W||z&&z!=="default"))return q}let $=["#4ECDC4","#FF6B6B","#45B7D1","#BB8FCE","#FDCB6E","#00B894","#74B9FF","#FD79A8","#81ECEC","#FFA07A"],j=String(_),Z=0;for(let K=0;K<j.length;K+=1)Z=(Z*31+j.charCodeAt(K))%2147483647;let N=Math.abs(Z)%$.length;return $[N]}function F7(_){if(!_||typeof _!=="object")return null;let $=_.started_at??_.startedAt;if(typeof $!=="string"||!$)return null;let j=Date.parse($);return Number.isFinite(j)?j:null}function w2(_){if(!_||typeof _!=="object")return!1;let $=_.intent_key??_.intentKey;return _.type==="intent"&&$==="compaction"}function W6(_){if(!_||typeof _!=="object")return"";let $=_.title;if(typeof $==="string"&&$.trim())return $.trim();let j=_.status;if(typeof j==="string"&&j.trim())return j.trim();return w2(_)?"Compacting context":"Working..."}function J7(_){let $=Math.max(0,Math.floor(_/1000)),j=$%60,Z=Math.floor($/60)%60,N=Math.floor($/3600);if(N>0)return`${N}:${String(Z).padStart(2,"0")}:${String(j).padStart(2,"0")}`;return`${Z}:${String(j).padStart(2,"0")}`}function X6(_,$=Date.now()){let j=F7(_);if(j===null)return null;return J7(Math.max(0,$-j))}function V6({status:_,draft:$,plan:j,thought:Z,pendingRequest:N,intent:K,turnId:z,steerQueued:W,onPanelToggle:q}){let Y=(__)=>{if(!__)return{text:"",totalLines:0,fullText:""};if(typeof __==="string"){let y_=__,n_=y_?y_.replace(/\r\n/g,`
`).split(`
`).length:0;return{text:y_,totalLines:n_,fullText:y_}}let C_=__.text||"",G_=__.fullText||__.full_text||C_,D_=Number.isFinite(__.totalLines)?__.totalLines:G_?G_.replace(/\r\n/g,`
`).split(`
`).length:0;return{text:C_,totalLines:D_,fullText:G_}},U=160,C=(__)=>String(__||"").replace(/<\/?internal>/gi,""),m=(__)=>{if(!__)return 1;return Math.max(1,Math.ceil(__.length/160))},v=(__,C_,G_)=>{let D_=(__||"").replace(/\r\n/g,`
`).replace(/\r/g,`
`);if(!D_)return{text:"",omitted:0,totalLines:Number.isFinite(G_)?G_:0,visibleLines:0};let y_=D_.split(`
`),n_=y_.length>C_?y_.slice(0,C_).join(`
`):D_,d_=Number.isFinite(G_)?G_:y_.reduce((x_,T_)=>x_+m(T_),0),s_=n_?n_.split(`
`).reduce((x_,T_)=>x_+m(T_),0):0,H_=Math.max(d_-s_,0);return{text:n_,omitted:H_,totalLines:d_,visibleLines:s_}},R=Y(j),E=Y(Z),F=Y($),S=Boolean(R.text)||R.totalLines>0,M=Boolean(E.text)||E.totalLines>0,i=Boolean(F.fullText?.trim()||F.text?.trim());if(!_&&!i&&!S&&!M&&!N&&!K)return null;let[t,N_]=T(new Set),[l,K_]=T(()=>Date.now()),h=(__)=>N_((C_)=>{let G_=new Set(C_),D_=!G_.has(__);if(D_)G_.add(__);else G_.delete(__);if(typeof q==="function")q(__,D_);return G_});f(()=>{N_(new Set)},[z]);let B_=w2(_);f(()=>{if(!B_)return;K_(Date.now());let __=setInterval(()=>K_(Date.now()),1000);return()=>clearInterval(__)},[B_,_?.started_at,_?.startedAt]);let c_=_?.turn_id||z,o=G6(c_),d=W?"turn-dot turn-dot-queued":"turn-dot",z_=(__)=>__,$_=Boolean(_?.last_activity||_?.lastActivity),Y_=(__)=>__==="warning"?"#f59e0b":__==="error"?"var(--danger-color)":__==="success"?"var(--success-color)":o,M_=K?.kind||"info",Q_=Y_(M_),A_=Y_(_?.kind||(B_?"warning":"info")),U_="",R_=_?.title,v_=_?.status;if(_?.type==="plan")U_=R_?`Planning: ${R_}`:"Planning...";else if(_?.type==="tool_call")U_=R_?`Running: ${R_}`:"Running tool...";else if(_?.type==="tool_status")U_=R_?`${R_}: ${v_||"Working..."}`:v_||"Working...";else if(_?.type==="error")U_=R_||"Agent error";else U_=R_||v_||"Working...";if($_)U_="Last activity just now";let W_=({panelTitle:__,text:C_,fullText:G_,totalLines:D_,maxLines:y_,titleClass:n_,panelKey:d_})=>{let s_=t.has(d_),H_=G_||C_||"",x_=d_==="thought"||d_==="draft"?C(H_):H_,T_=typeof y_==="number",N0=s_&&T_,b_=T_?v(x_,y_,D_):{text:x_||"",omitted:0,totalLines:Number.isFinite(D_)?D_:0};if(!x_&&!(Number.isFinite(b_.totalLines)&&b_.totalLines>0))return null;let D0=`agent-thinking-body${T_?" agent-thinking-body-collapsible":""}`,o_=T_?`--agent-thinking-collapsed-lines: ${y_};`:"";return L`
            <div
                class="agent-thinking"
                data-expanded=${s_?"true":"false"}
                data-collapsible=${T_?"true":"false"}
                style=${o?`--turn-color: ${o};`:""}
            >
                <div class="agent-thinking-title ${n_||""}">
                    ${o&&L`<span class=${d} aria-hidden="true"></span>`}
                    ${__}
                    ${N0&&L`
                        <button
                            class="agent-thinking-close"
                            aria-label=${`Close ${__} panel`}
                            onClick=${()=>h(d_)}
                        >
                            ×
                        </button>
                    `}
                </div>
                <div
                    class=${D0}
                    style=${o_}
                    dangerouslySetInnerHTML=${{__html:N4(x_)}}
                />
                ${!s_&&b_.omitted>0&&L`
                    <button class="agent-thinking-truncation" onClick=${()=>h(d_)}>
                        ▸ ${b_.omitted} more lines
                    </button>
                `}
                ${s_&&b_.omitted>0&&L`
                    <button class="agent-thinking-truncation" onClick=${()=>h(d_)}>
                        ▴ show less
                    </button>
                `}
            </div>
        `},I_=N?.tool_call?.title,S_=I_?`Awaiting approval: ${I_}`:"Awaiting approval",O0=B_?X6(_,l):null,X_=(__,C_,G_=null)=>{let D_=W6(__);return L`
            <div
                class="agent-thinking agent-thinking-intent"
                aria-live="polite"
                style=${C_?`--turn-color: ${C_};`:""}
                title=${__?.detail||""}
            >
                <div class="agent-thinking-title intent">
                    ${C_&&L`<span class=${d} aria-hidden="true"></span>`}
                    <span class="agent-thinking-title-text">${D_}</span>
                    ${G_&&L`<span class="agent-status-elapsed">${G_}</span>`}
                </div>
                ${__.detail&&L`<div class="agent-thinking-body">${__.detail}</div>`}
            </div>
        `};return L`
        <div class="agent-status-panel">
            ${K&&X_(K,Q_)}
            ${_?.type==="intent"&&X_(_,A_,O0)}
            ${N&&L`
                <div class="agent-status agent-status-request" aria-live="polite" style=${o?`--turn-color: ${o};`:""}>
                    <span class=${d} aria-hidden="true"></span>
                    <div class="agent-status-spinner"></div>
                    <span class="agent-status-text">${S_}</span>
                </div>
            `}
            ${S&&W_({panelTitle:z_("Planning"),text:R.text,fullText:R.fullText,totalLines:R.totalLines,panelKey:"plan"})}
            ${M&&W_({panelTitle:z_("Thoughts"),text:E.text,fullText:E.fullText,totalLines:E.totalLines,maxLines:8,titleClass:"thought",panelKey:"thought"})}
            ${i&&W_({panelTitle:z_("Draft"),text:F.text,fullText:F.fullText,totalLines:F.totalLines,maxLines:8,titleClass:"thought",panelKey:"draft"})}
            ${_&&_?.type!=="intent"&&L`
                <div class=${`agent-status${$_?" agent-status-last-activity":""}${_?.type==="error"?" agent-status-error":""}`} aria-live="polite" style=${o?`--turn-color: ${o};`:""}>
                    ${o&&L`<span class=${d} aria-hidden="true"></span>`}
                    ${_?.type==="error"?L`<span class="agent-status-error-icon" aria-hidden="true">⚠</span>`:!$_&&L`<div class="agent-status-spinner"></div>`}
                    <span class="agent-status-text">${U_}</span>
                </div>
            `}
        </div>
    `}function q6({request:_,onRespond:$}){if(!_)return null;let{request_id:j,tool_call:Z,options:N,chat_jid:K}=_,z=Z?.title||"Agent Request",W=Z?.kind||"other",q=Z?.rawInput||{},V=q.command||q.commands&&q.commands[0]||null,B=q.diff||null,Y=q.fileName||q.path||null,U=Z?.description||q.description||q.explanation||null,m=(Array.isArray(Z?.locations)?Z.locations:[]).map((S)=>S?.path).filter((S)=>Boolean(S)),v=Array.from(new Set([Y,...m].filter(Boolean)));console.log("AgentRequestModal:",{request_id:j,tool_call:Z,options:N});let R=async(S)=>{try{await o2(j,S,K||null),$()}catch(M){console.error("Failed to respond to agent request:",M)}},E=async()=>{try{await g4(z,`Auto-approved: ${z}`),await o2(j,"approved",K||null),$()}catch(S){console.error("Failed to add to whitelist:",S)}},F=N&&N.length>0;return L`
        <div class="agent-request-modal">
            <div class="agent-request-content">
                <div class="agent-request-header">
                    <div class="agent-request-icon">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                        </svg>
                    </div>
                    <div class="agent-request-title">${z}</div>
                </div>
                ${(U||V||B||v.length>0)&&L`
                    <div class="agent-request-body">
                        ${U&&L`
                            <div class="agent-request-description">${U}</div>
                        `}
                        ${v.length>0&&L`
                            <div class="agent-request-files">
                                <div class="agent-request-subtitle">Files</div>
                                <ul>
                                    ${v.map((S,M)=>L`<li key=${M}>${S}</li>`)}
                                </ul>
                            </div>
                        `}
                        ${V&&L`
                            <pre class="agent-request-command">${V}</pre>
                        `}
                        ${B&&L`
                            <details class="agent-request-diff">
                                <summary>Proposed diff</summary>
                                <pre>${B}</pre>
                            </details>
                        `}
                    </div>
                `}
                <div class="agent-request-actions">
                    ${F?N.map((S)=>L`
                            <button 
                                key=${S.optionId||S.id||String(S)}
                                class="agent-request-btn ${S.kind==="allow_once"||S.kind==="allow_always"?"primary":""}"
                                onClick=${()=>R(S.optionId||S.id||S)}
                            >
                                ${S.name||S.label||S.optionId||S.id||String(S)}
                            </button>
                        `):L`
                        <button class="agent-request-btn primary" onClick=${()=>R("approved")}>
                            Allow
                        </button>
                        <button class="agent-request-btn" onClick=${()=>R("denied")}>
                            Deny
                        </button>
                        <button class="agent-request-btn always-allow" onClick=${E}>
                            Always Allow This
                        </button>
                    `}
                </div>
            </div>
        </div>
    `}function O6(_){let $=new Date(_);if(Number.isNaN($.getTime()))return _;let Z=new Date-$,N=Z/1000,K=86400000;if(Z<K){if(N<60)return"just now";if(N<3600)return`${Math.floor(N/60)}m`;return`${Math.floor(N/3600)}h`}if(Z<5*K){let q=$.toLocaleDateString(void 0,{weekday:"short"}),V=$.toLocaleTimeString(void 0,{hour:"2-digit",minute:"2-digit"});return`${q} ${V}`}let z=$.toLocaleDateString(void 0,{month:"short",day:"numeric"}),W=$.toLocaleTimeString(void 0,{hour:"2-digit",minute:"2-digit"});return`${z} ${W}`}function P2(_){if(!Number.isFinite(_))return"0";return Math.round(_).toLocaleString()}function Y$(_){if(_<1024)return _+" B";if(_<1048576)return(_/1024).toFixed(1)+" KB";return(_/1048576).toFixed(1)+" MB"}function e$(_){let $=new Date(_);if(Number.isNaN($.getTime()))return _;return $.toLocaleString()}var H7=new Set(["application/json","application/xml","text/csv","text/html","text/markdown","text/plain","text/xml"]),D7=new Set(["text/markdown"]),E7=new Set(["application/msword","application/rtf","application/vnd.ms-excel","application/vnd.ms-powerpoint","application/vnd.oasis.opendocument.presentation","application/vnd.oasis.opendocument.spreadsheet","application/vnd.oasis.opendocument.text","application/vnd.openxmlformats-officedocument.presentationml.presentation","application/vnd.openxmlformats-officedocument.spreadsheetml.sheet","application/vnd.openxmlformats-officedocument.wordprocessingml.document"]),y7=new Set(["application/vnd.jgraph.mxfile"]);function M2(_){return typeof _==="string"?_.trim().toLowerCase():""}function k7(_){let $=M2(_);return!!$&&($.endsWith(".drawio")||$.endsWith(".drawio.xml")||$.endsWith(".drawio.svg")||$.endsWith(".drawio.png"))}function A7(_){let $=M2(_);return!!$&&$.endsWith(".pdf")}function w7(_){let $=M2(_);return!!$&&($.endsWith(".docx")||$.endsWith(".doc")||$.endsWith(".odt")||$.endsWith(".rtf")||$.endsWith(".xlsx")||$.endsWith(".xls")||$.endsWith(".ods")||$.endsWith(".pptx")||$.endsWith(".ppt")||$.endsWith(".odp"))}function C2(_,$){let j=M2(_);if(k7($)||y7.has(j))return"drawio";if(A7($)||j==="application/pdf")return"pdf";if(w7($)||E7.has(j))return"office";if(!j)return"unsupported";if(j.startsWith("image/"))return"image";if(H7.has(j)||j.startsWith("text/"))return"text";return"unsupported"}function B6(_){let $=M2(_);return D7.has($)}function L6(_){switch(_){case"image":return"Image preview";case"pdf":return"PDF preview";case"office":return"Office viewer";case"drawio":return"Draw.io preview (read-only)";case"text":return"Text preview";default:return"Preview unavailable"}}function P7(_){let j=String(_||"").trim().match(/^#([0-9a-f]{3}|[0-9a-f]{6})$/i);if(!j)return null;let Z=j[1].length===3?j[1].split("").map((N)=>`${N}${N}`).join(""):j[1];return{r:parseInt(Z.slice(0,2),16),g:parseInt(Z.slice(2,4),16),b:parseInt(Z.slice(4,6),16)}}function M7(_){let j=String(_||"").trim().match(/^rgba?\((\d+)[,\s]+(\d+)[,\s]+(\d+)/i);if(!j)return null;let Z=Number(j[1]),N=Number(j[2]),K=Number(j[3]);if(![Z,N,K].every((z)=>Number.isFinite(z)))return null;return{r:Z,g:N,b:K}}function Q6(_){return P7(_)||M7(_)}function K4(_){let $=(K)=>{let z=K/255;return z<=0.03928?z/12.92:((z+0.055)/1.055)**2.4},j=$(_.r),Z=$(_.g),N=$(_.b);return 0.2126*j+0.7152*Z+0.0722*N}function C7(_,$){let j=Math.max(K4(_),K4($)),Z=Math.min(K4(_),K4($));return(j+0.05)/(Z+0.05)}function I7(_,$,j="#ffffff"){let Z=Q6(_);if(!Z)return j;let N=j,K=-1;for(let z of $){let W=Q6(z);if(!W)continue;let q=C7(Z,W);if(q>K)N=z,K=q}return N}function Y1(){let _=getComputedStyle(document.documentElement),$=(m,v)=>{for(let R of m){let E=_.getPropertyValue(R).trim();if(E)return E}return v},j=$(["--text-primary","--color-text"],"#0f1419"),Z=$(["--text-secondary","--color-text-muted"],"#536471"),N=$(["--bg-primary","--color-bg-primary"],"#ffffff"),K=$(["--bg-secondary","--color-bg-secondary"],"#f7f9fa"),z=$(["--bg-hover","--bg-tertiary","--color-bg-tertiary"],"#e8ebed"),W=$(["--accent-color","--color-accent"],"#1d9bf0"),q=$(["--success-color","--color-success"],"#00ba7c"),V=$(["--warning-color","--color-warning","--accent-color"],"#f0b429"),B=$(["--danger-color","--color-error"],"#f4212e"),Y=$(["--border-color","--color-border"],"#eff3f4"),U=$(["--font-family"],"system-ui, sans-serif"),C=I7(W,[j,N],j);return{fg:j,fgMuted:Z,bgPrimary:N,bg:K,bgEmphasis:z,accent:W,good:q,warning:V,attention:B,border:Y,fontFamily:U,buttonTextColor:C}}function U6(){let{fg:_,fgMuted:$,bg:j,bgEmphasis:Z,accent:N,good:K,warning:z,attention:W,border:q,fontFamily:V}=Y1();return{fontFamily:V,containerStyles:{default:{backgroundColor:j,foregroundColors:{default:{default:_,subtle:$},accent:{default:N,subtle:N},good:{default:K,subtle:K},warning:{default:z,subtle:z},attention:{default:W,subtle:W}}},emphasis:{backgroundColor:Z,foregroundColors:{default:{default:_,subtle:$},accent:{default:N,subtle:N},good:{default:K,subtle:K},warning:{default:z,subtle:z},attention:{default:W,subtle:W}}}},actions:{actionsOrientation:"horizontal",actionAlignment:"left",buttonSpacing:8,maxActions:5,showCard:{actionMode:"inline"},spacing:"default"},adaptiveCard:{allowCustomStyle:!1},spacing:{small:4,default:8,medium:12,large:16,extraLarge:24,padding:12},separator:{lineThickness:1,lineColor:q},fontSizes:{small:12,default:14,medium:16,large:18,extraLarge:22},fontWeights:{lighter:300,default:400,bolder:600},imageSizes:{small:40,medium:80,large:120},textBlock:{headingLevel:2}}}var b7=new Set(["1.0","1.1","1.2","1.3","1.4","1.5","1.6"]),F6=!1,z4=null,J6=!1;function G1(_){_.querySelector(".adaptive-card-notice")?.remove()}function S7(_,$,j="error"){G1(_);let Z=document.createElement("div");Z.className=`adaptive-card-notice adaptive-card-notice-${j}`,Z.textContent=$,_.appendChild(Z)}function x7(_,$=(j)=>o0(j,null)){let j=typeof _==="string"?_:String(_??"");if(!j.trim())return{outputHtml:"",didProcess:!1};return{outputHtml:$(j),didProcess:!0}}function T7(_=($)=>o0($,null)){return($,j)=>{try{let Z=x7($,_);j.outputHtml=Z.outputHtml,j.didProcess=Z.didProcess}catch(Z){console.error("[adaptive-card] Failed to process markdown:",Z),j.outputHtml=String($??""),j.didProcess=!1}}}function f7(_){if(J6||!_?.AdaptiveCard)return;_.AdaptiveCard.onProcessMarkdown=T7(),J6=!0}async function R7(){if(F6)return;if(z4)return z4;return z4=new Promise((_,$)=>{let j=document.createElement("script");j.src="/static/js/vendor/adaptivecards.min.js",j.onload=()=>{F6=!0,_()},j.onerror=()=>$(Error("Failed to load adaptivecards SDK")),document.head.appendChild(j)}),z4}function v7(){return globalThis.AdaptiveCards}function u7(_){if(!_||typeof _!=="object")return!1;let $=_;return $.type==="adaptive_card"&&typeof $.card_id==="string"&&typeof $.schema_version==="string"&&typeof $.payload==="object"&&$.payload!==null}function m7(_){return b7.has(_)}function X1(_){if(!Array.isArray(_))return[];return _.filter(u7)}function g7(_){let $=typeof _?.toJSON==="function"?_.toJSON():null,j=(typeof _?.getJsonTypeName==="function"?_.getJsonTypeName():"")||_?.constructor?.name||$?.type||"Unknown",Z=(typeof _?.title==="string"?_.title:"")||(typeof $?.title==="string"?$.title:"")||"",N=(typeof _?.url==="string"?_.url:"")||(typeof $?.url==="string"?$.url:"")||void 0,K=_?.data??$?.data;return{type:j,title:Z,data:K,url:N,raw:_}}function W1(_){if(_==null)return"";if(typeof _==="string")return _.trim();if(typeof _==="number")return String(_);if(typeof _==="boolean")return _?"yes":"no";if(Array.isArray(_))return _.map(($)=>W1($)).filter(Boolean).join(", ");if(typeof _==="object")return Object.entries(_).map(([j,Z])=>`${j}: ${W1(Z)}`).filter((j)=>!j.endsWith(": ")).join(", ");return String(_).trim()}function p7(_,$,j){if($==null)return $;if(_==="Input.Toggle"){if(typeof $==="boolean"){if($)return j?.valueOn??"true";return j?.valueOff??"false"}return typeof $==="string"?$:String($)}if(_==="Input.ChoiceSet"){if(Array.isArray($))return $.join(",");return typeof $==="string"?$:String($)}if(Array.isArray($))return $.join(", ");if(typeof $==="object")return W1($);return typeof $==="string"?$:String($)}function c7(_,$){if(!_||typeof _!=="object")return _;if(!$||typeof $!=="object"||Array.isArray($))return _;let j=$,Z=(N)=>{if(Array.isArray(N))return N.map((W)=>Z(W));if(!N||typeof N!=="object")return N;let z={...N};if(typeof z.id==="string"&&z.id in j&&String(z.type||"").startsWith("Input."))z.value=p7(z.type,j[z.id],z);for(let[W,q]of Object.entries(z))if(Array.isArray(q)||q&&typeof q==="object")z[W]=Z(q);return z};return Z(_)}function h7(_){_.classList.add("adaptive-card-readonly");for(let $ of Array.from(_.querySelectorAll("input, textarea, select, button"))){let j=$;try{j.setAttribute("aria-disabled","true")}catch{}try{j.setAttribute("tabindex","-1")}catch{}if("disabled"in j)try{j.disabled=!0}catch{}if("readOnly"in j)try{j.readOnly=!0}catch{}}}function i7(_){if(typeof _!=="string"||!_.trim())return"";let $=new Date(_);if(Number.isNaN($.getTime()))return"";return new Intl.DateTimeFormat(void 0,{month:"short",day:"numeric",hour:"numeric",minute:"2-digit"}).format($)}function l7(_){if(_.state==="active")return null;let $=_.state==="completed"?"Submitted":_.state==="cancelled"?"Cancelled":"Failed",j=_.last_submission&&typeof _.last_submission==="object"?_.last_submission:null,Z=j&&typeof j.title==="string"?j.title.trim():"",N=i7(_.completed_at||j?.submitted_at),K=[Z||null,N||null].filter(Boolean).join(" · ")||null;return{label:$,detail:K}}async function H6(_,$,j){if(!m7($.schema_version))return console.warn(`[adaptive-card] Unsupported schema version ${$.schema_version} for card ${$.card_id}`),!1;try{await R7()}catch(Z){return console.error("[adaptive-card] Failed to load SDK:",Z),!1}try{let Z=v7();f7(Z);let N=new Z.AdaptiveCard,K=Y1();N.hostConfig=new Z.HostConfig(U6());let z=$.last_submission&&typeof $.last_submission==="object"?$.last_submission.data:void 0,W=$.state==="active"?$.payload:c7($.payload,z);N.parse(W),N.onExecuteAction=(B)=>{let Y=g7(B);if(j?.onAction)G1(_),_.classList.add("adaptive-card-busy"),Promise.resolve(j.onAction(Y)).catch((U)=>{console.error("[adaptive-card] Action failed:",U);let C=U instanceof Error?U.message:String(U||"Action failed.");S7(_,C||"Action failed.","error")}).finally(()=>{_.classList.remove("adaptive-card-busy")});else console.log("[adaptive-card] Action executed (not wired yet):",Y)};let q=N.render();if(!q)return console.warn(`[adaptive-card] Card ${$.card_id} rendered to null`),!1;_.classList.add("adaptive-card-container"),_.style.setProperty("--adaptive-card-button-text-color",K.buttonTextColor);let V=l7($);if(V){_.classList.add("adaptive-card-finished");let B=document.createElement("div");B.className=`adaptive-card-status adaptive-card-status-${$.state}`;let Y=document.createElement("span");if(Y.className="adaptive-card-status-label",Y.textContent=V.label,B.appendChild(Y),V.detail){let U=document.createElement("span");U.className="adaptive-card-status-detail",U.textContent=V.detail,B.appendChild(U)}_.appendChild(B)}if(G1(_),_.appendChild(q),V)h7(q);return!0}catch(Z){return console.error(`[adaptive-card] Failed to render card ${$.card_id}:`,Z),!1}}function I2(_){if(_==null)return"";if(typeof _==="string")return _.trim();if(typeof _==="number")return String(_);if(typeof _==="boolean")return _?"yes":"no";if(Array.isArray(_))return _.map(($)=>I2($)).filter(Boolean).join(", ");if(typeof _==="object")return Object.entries(_).filter(([$])=>!$.startsWith("__")).map(([$,j])=>`${$}: ${I2(j)}`).filter(($)=>!$.endsWith(": ")).join(", ");return String(_).trim()}function D6(_){if(typeof _!=="object"||_==null||Array.isArray(_))return[];return Object.entries(_).filter(([$])=>!$.startsWith("__")).map(([$,j])=>({key:$,value:I2(j)})).filter(($)=>$.value)}function n7(_){if(!_||typeof _!=="object")return!1;let $=_;return $.type==="adaptive_card_submission"&&typeof $.card_id==="string"&&typeof $.source_post_id==="number"&&typeof $.submitted_at==="string"}function V1(_){if(!Array.isArray(_))return[];return _.filter(n7)}function E6(_){let $=String(_.title||_.card_id||"card").trim()||"card",j=_.data;if(j==null)return`Card submission: ${$}`;if(typeof j==="string"||typeof j==="number"||typeof j==="boolean"){let Z=I2(j);return Z?`Card submission: ${$} — ${Z}`:`Card submission: ${$}`}if(typeof j==="object"){let N=D6(j).slice(0,4).map(({key:K,value:z})=>`${K}: ${z}`);return N.length>0?`Card submission: ${$} — ${N.join(", ")}`:`Card submission: ${$}`}return`Card submission: ${$}`}function y6(_){let $=String(_.title||_.card_id||"Card submission").trim()||"Card submission",j=D6(_.data),Z=j.length>0?j.slice(0,2).map(({key:z,value:W})=>`${z}: ${W}`).join(", "):I2(_.data)||null,N=j.length,K=Math.max(N-4,0);return{title:$,summary:Z,fields:j.slice(0,4),fieldCount:N,hiddenFieldCount:K,submittedAt:_.submitted_at}}function d7(_){let $=_?.metadata?.size;return[{label:"Type",value:_?.content_type||"application/octet-stream"},{label:"Size",value:typeof $==="number"?Y$($):null},{label:"Added",value:_?.created_at?e$(_.created_at):null}].filter((Z)=>Z.value)}function s7(_,$,j){let Z=encodeURIComponent($||`attachment-${_}`),N=encodeURIComponent(String(_));if(j==="pdf")return`/pdf-viewer/?media=${N}&name=${Z}#media=${N}&name=${Z}`;if(j==="office"){let K=N$(_);return`/office-viewer/?url=${encodeURIComponent(K)}&name=${Z}`}if(j==="drawio")return`/drawio/edit.html?media=${N}&name=${Z}&readonly=1#media=${N}&name=${Z}&readonly=1`;return null}function k6({mediaId:_,info:$,onClose:j}){let Z=$?.filename||`attachment-${_}`,N=l_(()=>C2($?.content_type,Z),[$?.content_type,Z]),K=L6(N),z=l_(()=>B6($?.content_type),[$?.content_type]),[W,q]=T(N==="text"),[V,B]=T(""),[Y,U]=T(null),C=D(null),m=l_(()=>d7($),[$]),v=l_(()=>s7(_,Z,N),[_,Z,N]),R=l_(()=>{if(!z||!V)return"";return o0(V)},[z,V]);return f(()=>{let E=(F)=>{if(F.key==="Escape")j()};return document.addEventListener("keydown",E),()=>document.removeEventListener("keydown",E)},[j]),f(()=>{if(!C.current||!R)return;T$(C.current);return},[R]),f(()=>{let E=!1;async function F(){if(N!=="text"){q(!1),U(null);return}q(!0),U(null);try{let S=await i4(_);if(!E)B(S)}catch{if(!E)U("Failed to load text preview.")}finally{if(!E)q(!1)}}return F(),()=>{E=!0}},[_,N]),L`
        <div class="image-modal attachment-preview-modal" onClick=${j}>
            <div class="attachment-preview-shell" onClick=${(E)=>{E.stopPropagation()}}>
                <div class="attachment-preview-header">
                    <div class="attachment-preview-heading">
                        <div class="attachment-preview-title">${Z}</div>
                        <div class="attachment-preview-subtitle">${K}</div>
                    </div>
                    <div class="attachment-preview-header-actions">
                        ${v&&L`
                            <a
                                href=${v}
                                target="_blank"
                                rel="noopener noreferrer"
                                class="attachment-preview-download"
                                onClick=${(E)=>E.stopPropagation()}
                            >
                                Open in Tab
                            </a>
                        `}
                        <a
                            href=${N$(_)}
                            download=${Z}
                            class="attachment-preview-download"
                            onClick=${(E)=>E.stopPropagation()}
                        >
                            Download
                        </a>
                        <button class="attachment-preview-close" type="button" onClick=${j}>Close</button>
                    </div>
                </div>
                <div class="attachment-preview-body">
                    ${W&&L`<div class="attachment-preview-state">Loading preview…</div>`}
                    ${!W&&Y&&L`<div class="attachment-preview-state">${Y}</div>`}
                    ${!W&&!Y&&N==="image"&&L`
                        <img class="attachment-preview-image" src=${N$(_)} alt=${Z} />
                    `}
                    ${!W&&!Y&&(N==="pdf"||N==="office"||N==="drawio")&&v&&L`
                        <iframe class="attachment-preview-frame" src=${v} title=${Z}></iframe>
                    `}
                    ${!W&&!Y&&N==="drawio"&&L`
                        <div class="attachment-preview-readonly-note">Draw.io preview is read-only. Editing tools are disabled in this preview.</div>
                    `}
                    ${!W&&!Y&&N==="text"&&z&&L`
                        <div
                            ref=${C}
                            class="attachment-preview-markdown post-content"
                            dangerouslySetInnerHTML=${{__html:R}}
                        />
                    `}
                    ${!W&&!Y&&N==="text"&&!z&&L`
                        <pre class="attachment-preview-text">${V}</pre>
                    `}
                    ${!W&&!Y&&N==="unsupported"&&L`
                        <div class="attachment-preview-state">
                            Preview is not available for this file type yet. You can still download it directly.
                        </div>
                    `}
                </div>
                <div class="attachment-preview-meta">
                    ${m.map((E)=>L`
                        <div class="attachment-preview-meta-item" key=${E.label}>
                            <span class="attachment-preview-meta-label">${E.label}</span>
                            <span class="attachment-preview-meta-value">${E.value}</span>
                        </div>
                    `)}
                </div>
            </div>
        </div>
    `}function A6({src:_,onClose:$}){return f(()=>{let j=(Z)=>{if(Z.key==="Escape")$()};return document.addEventListener("keydown",j),()=>document.removeEventListener("keydown",j)},[$]),L`
        <div class="image-modal" onClick=${$}>
            <img src=${_} alt="Full size" />
        </div>
    `}function o7({mediaId:_,onPreview:$}){let[j,Z]=T(null);if(f(()=>{G2(_).then(Z).catch(()=>{})},[_]),!j)return null;let N=j.filename||"file",K=j.metadata?.size,z=K?Y$(K):"",q=C2(j.content_type,j.filename)==="unsupported"?"Details":"Preview";return L`
        <div class="file-attachment" onClick=${(V)=>V.stopPropagation()}>
            <a href=${N$(_)} download=${N} class="file-attachment-main">
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
                        ${z&&L`<span class="file-size">${z}</span>`}
                        ${j.content_type&&L`<span class="file-size">${j.content_type}</span>`}
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
                onClick=${(V)=>{V.preventDefault(),V.stopPropagation(),$?.({mediaId:_,info:j})}}
            >
                ${q}
            </button>
        </div>
    `}function r7({attachment:_,onPreview:$}){let j=Number(_?.id),[Z,N]=T(null);f(()=>{if(!Number.isFinite(j))return;G2(j).then(N).catch(()=>{});return},[j]);let K=Z?.filename||_.label||`attachment-${_.id}`,z=Number.isFinite(j)?N$(j):null,q=C2(Z?.content_type,Z?.filename||_?.label)==="unsupported"?"Details":"Preview";return L`
        <span class="attachment-pill" title=${K}>
            ${z?L`
                    <a href=${z} download=${K} class="attachment-pill-main" onClick=${(V)=>V.stopPropagation()}>
                        <${U$}
                            prefix="post"
                            label=${_.label}
                            title=${K}
                        />
                    </a>
                `:L`
                    <${U$}
                        prefix="post"
                        label=${_.label}
                        title=${K}
                    />
                `}
            ${Number.isFinite(j)&&Z&&L`
                <button
                    class="attachment-pill-preview"
                    type="button"
                    title=${q}
                    onClick=${(V)=>{V.preventDefault(),V.stopPropagation(),$?.({mediaId:j,info:Z})}}
                >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8S1 12 1 12z"/>
                        <circle cx="12" cy="12" r="3"/>
                    </svg>
                </button>
            `}
        </span>
    `}function Y4({annotations:_}){if(!_)return null;let{audience:$,priority:j,lastModified:Z}=_,N=Z?e$(Z):null;return L`
        <div class="content-annotations">
            ${$&&$.length>0&&L`
                <span class="content-annotation">Audience: ${$.join(", ")}</span>
            `}
            ${typeof j==="number"&&L`
                <span class="content-annotation">Priority: ${j}</span>
            `}
            ${N&&L`
                <span class="content-annotation">Updated: ${N}</span>
            `}
        </div>
    `}function a7({block:_}){let $=_.title||_.name||_.uri,j=_.description,Z=_.size?Y$(_.size):"",N=_.mime_type||"",K=e7(N),z=t$(_.uri);return L`
        <a
            href=${z||"#"}
            class="resource-link"
            target=${z?"_blank":void 0}
            rel=${z?"noopener noreferrer":void 0}
            onClick=${(W)=>W.stopPropagation()}>
            <div class="resource-link-main">
                <div class="resource-link-header">
                    <span class="resource-link-icon-inline">${K}</span>
                    <div class="resource-link-title">${$}</div>
                </div>
                ${j&&L`<div class="resource-link-description">${j}</div>`}
                <div class="resource-link-meta">
                    ${N&&L`<span>${N}</span>`}
                    ${Z&&L`<span>${Z}</span>`}
                </div>
            </div>
            <div class="resource-link-icon">↗</div>
        </a>
    `}function t7({block:_}){let[$,j]=T(!1),Z=_.uri||"Embedded resource",N=_.text||"",K=Boolean(_.data),z=_.mime_type||"";return L`
        <div class="resource-embed">
            <button class="resource-embed-toggle" onClick=${(W)=>{W.preventDefault(),W.stopPropagation(),j(!$)}}>
                ${$?"▼":"▶"} ${Z}
            </button>
            ${$&&L`
                ${N&&L`<pre class="resource-embed-content">${N}</pre>`}
                ${K&&L`
                    <div class="resource-embed-blob">
                        <span class="resource-embed-blob-label">Embedded blob</span>
                        ${z&&L`<span class="resource-embed-blob-meta">${z}</span>`}
                        <button class="resource-embed-blob-btn" onClick=${(W)=>{W.preventDefault(),W.stopPropagation();let q=new Blob([Uint8Array.from(atob(_.data),(Y)=>Y.charCodeAt(0))],{type:z||"application/octet-stream"}),V=URL.createObjectURL(q),B=document.createElement("a");B.href=V,B.download=Z.split("/").pop()||"resource",B.click(),URL.revokeObjectURL(V)}}>Download</button>
                    </div>
                `}
            `}
        </div>
    `}function e7(_){if(!_)return"\uD83D\uDCCE";if(_.startsWith("image/"))return"\uD83D\uDDBC️";if(_.startsWith("audio/"))return"\uD83C\uDFB5";if(_.startsWith("video/"))return"\uD83C\uDFAC";if(_.includes("pdf"))return"\uD83D\uDCC4";if(_.includes("zip")||_.includes("gzip"))return"\uD83D\uDDDC️";if(_.startsWith("text/"))return"\uD83D\uDCC4";return"\uD83D\uDCCE"}function _5({preview:_}){let $=t$(_.url),j=t$(_.image,{allowDataImage:!0}),Z=j?`background-image: url('${j}')`:"",N=_.site_name;if(!N&&$)try{N=new URL($).hostname}catch{N=$}return L`
        <a
            href=${$||"#"}
            class="link-preview ${j?"has-image":""}"
            target=${$?"_blank":void 0}
            rel=${$?"noopener noreferrer":void 0}
            onClick=${(K)=>K.stopPropagation()}
            style=${Z}>
            <div class="link-preview-overlay">
                <div class="link-preview-site">${N||""}</div>
                <div class="link-preview-title">${_.title}</div>
                ${_.description&&L`
                    <div class="link-preview-description">${_.description}</div>
                `}
            </div>
        </a>
    `}function $5(_,$){return typeof _==="string"?_:""}var j5=1800,Z5=`
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <rect x="9" y="9" width="10" height="10" rx="2"></rect>
        <path d="M7 15H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2v1"></path>
    </svg>`,N5=`
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <path d="M20 6L9 17l-5-5"></path>
    </svg>`,K5=`
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <circle cx="12" cy="12" r="9"></circle>
        <path d="M9 9l6 6M15 9l-6 6"></path>
    </svg>`;async function z5(_){let $=typeof _==="string"?_:"";if(!$)return!1;if(navigator.clipboard?.writeText)try{return await navigator.clipboard.writeText($),!0}catch{}try{let j=document.createElement("textarea");j.value=$,j.setAttribute("readonly",""),j.style.position="fixed",j.style.opacity="0",j.style.pointerEvents="none",document.body.appendChild(j),j.select(),j.setSelectionRange(0,j.value.length);let Z=document.execCommand("copy");return document.body.removeChild(j),Z}catch{return!1}}function Y5(_){if(!_)return()=>{};let $=Array.from(_.querySelectorAll("pre")).filter((K)=>K.querySelector("code"));if($.length===0)return()=>{};let j=new Map,Z=[],N=(K,z)=>{let W=z||"idle";if(K.dataset.copyState=W,W==="success")K.innerHTML=N5,K.setAttribute("aria-label","Copied"),K.setAttribute("title","Copied"),K.classList.add("is-success"),K.classList.remove("is-error");else if(W==="error")K.innerHTML=K5,K.setAttribute("aria-label","Copy failed"),K.setAttribute("title","Copy failed"),K.classList.add("is-error"),K.classList.remove("is-success");else K.innerHTML=Z5,K.setAttribute("aria-label","Copy code"),K.setAttribute("title","Copy code"),K.classList.remove("is-success","is-error")};return $.forEach((K)=>{let z=document.createElement("div");z.className="post-code-block",K.parentNode?.insertBefore(z,K),z.appendChild(K);let W=document.createElement("button");W.type="button",W.className="post-code-copy-btn",N(W,"idle"),z.appendChild(W);let q=async(V)=>{V.preventDefault(),V.stopPropagation();let Y=K.querySelector("code")?.textContent||"",U=await z5(Y);N(W,U?"success":"error");let C=j.get(W);if(C)clearTimeout(C);let m=setTimeout(()=>{N(W,"idle"),j.delete(W)},j5);j.set(W,m)};W.addEventListener("click",q),Z.push(()=>{W.removeEventListener("click",q);let V=j.get(W);if(V)clearTimeout(V);if(z.parentNode)z.parentNode.insertBefore(K,z),z.remove()})}),()=>{Z.forEach((K)=>K())}}function G5(_){if(!_)return{content:_,fileRefs:[]};let j=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),Z=-1;for(let V=0;V<j.length;V+=1)if(j[V].trim()==="Files:"&&j[V+1]&&/^\s*-\s+/.test(j[V+1])){Z=V;break}if(Z===-1)return{content:_,fileRefs:[]};let N=[],K=Z+1;for(;K<j.length;K+=1){let V=j[K];if(/^\s*-\s+/.test(V))N.push(V.replace(/^\s*-\s+/,"").trim());else if(!V.trim())break;else break}if(N.length===0)return{content:_,fileRefs:[]};let z=j.slice(0,Z),W=j.slice(K),q=[...z,...W].join(`
`);return q=q.replace(/\n{3,}/g,`

`).trim(),{content:q,fileRefs:N}}function W5(_){if(!_)return{content:_,messageRefs:[]};let j=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),Z=-1;for(let V=0;V<j.length;V+=1)if(j[V].trim()==="Referenced messages:"&&j[V+1]&&/^\s*-\s+/.test(j[V+1])){Z=V;break}if(Z===-1)return{content:_,messageRefs:[]};let N=[],K=Z+1;for(;K<j.length;K+=1){let V=j[K];if(/^\s*-\s+/.test(V)){let Y=V.replace(/^\s*-\s+/,"").trim().match(/^message:(\S+)$/i);if(Y)N.push(Y[1])}else if(!V.trim())break;else break}if(N.length===0)return{content:_,messageRefs:[]};let z=j.slice(0,Z),W=j.slice(K),q=[...z,...W].join(`
`);return q=q.replace(/\n{3,}/g,`

`).trim(),{content:q,messageRefs:N}}function X5(_){if(!_)return{content:_,attachments:[]};let j=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),Z=-1;for(let V=0;V<j.length;V+=1)if(j[V].trim()==="Images:"&&j[V+1]&&/^\s*-\s+/.test(j[V+1])){Z=V;break}if(Z===-1)return{content:_,attachments:[]};let N=[],K=Z+1;for(;K<j.length;K+=1){let V=j[K];if(/^\s*-\s+/.test(V)){let B=V.replace(/^\s*-\s+/,"").trim(),Y=B.match(/^attachment:([^\s)]+)\s*(?:\((.+)\))?$/i)||B.match(/^attachment:([^\s]+)\s+(.+)$/i);if(Y){let U=Y[1],C=(Y[2]||"").trim()||U;N.push({id:U,label:C,raw:B})}else N.push({id:null,label:B,raw:B})}else if(!V.trim())break;else break}if(N.length===0)return{content:_,attachments:[]};let z=j.slice(0,Z),W=j.slice(K),q=[...z,...W].join(`
`);return q=q.replace(/\n{3,}/g,`

`).trim(),{content:q,attachments:N}}function V5(_){return _.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function q5(_,$){if(!_||!$)return _;let j=String($).trim().split(/\s+/).filter(Boolean);if(j.length===0)return _;let Z=j.map(V5).sort((B,Y)=>Y.length-B.length),N=new RegExp(`(${Z.join("|")})`,"gi"),K=new RegExp(`^(${Z.join("|")})$`,"i"),z=new DOMParser().parseFromString(_,"text/html"),W=z.createTreeWalker(z.body,NodeFilter.SHOW_TEXT),q=[],V;while(V=W.nextNode())q.push(V);for(let B of q){let Y=B.nodeValue;if(!Y||!N.test(Y)){N.lastIndex=0;continue}N.lastIndex=0;let U=B.parentElement;if(U&&U.closest("code, pre, script, style"))continue;let C=Y.split(N).filter((v)=>v!=="");if(C.length===0)continue;let m=z.createDocumentFragment();for(let v of C)if(K.test(v)){let R=z.createElement("mark");R.className="search-highlight-term",R.textContent=v,m.appendChild(R)}else m.appendChild(z.createTextNode(v));B.parentNode.replaceChild(m,B)}return z.body.innerHTML}function w6({post:_,onClick:$,onHashtagClick:j,onMessageRef:Z,onScrollToMessage:N,agentName:K,agentAvatarUrl:z,userName:W,userAvatarUrl:q,userAvatarBackground:V,onDelete:B,isThreadReply:Y,isThreadPrev:U,isThreadNext:C,isRemoving:m,highlightQuery:v,onFileRef:R}){let[E,F]=T(null),S=D(null),M=_.data,i=M.type==="agent_response",t=W||"You",N_=i?K||K6:t,l=i?z1(K,z,!0):z1(t,q),K_=typeof V==="string"?V.trim().toLowerCase():"",h=!i&&l.image&&(K_==="clear"||K_==="transparent"),B_=i&&Boolean(l.image),c_=`background-color: ${h||B_?"transparent":l.color}`,o=M.content_meta,d=Boolean(o?.truncated),z_=Boolean(o?.preview),$_=d&&!z_,Y_=d?{originalLength:Number.isFinite(o?.original_length)?o.original_length:M.content?M.content.length:0,maxLength:Number.isFinite(o?.max_length)?o.max_length:0}:null,M_=M.content_blocks||[],Q_=M.media_ids||[],A_=$5(M.content,M.link_previews),{content:U_,fileRefs:R_}=G5(A_),{content:v_,messageRefs:W_}=W5(U_),{content:I_,attachments:S_}=X5(v_);A_=I_;let O0=X1(M_),X_=V1(M_),__=O0.length===1&&typeof O0[0]?.fallback_text==="string"?O0[0].fallback_text.trim():"",C_=X_.length===1?E6(X_[0]).trim():"",G_=Boolean(__)&&A_?.trim()===__||Boolean(C_)&&A_?.trim()===C_,D_=Boolean(A_)&&!$_&&!G_,y_=typeof v==="string"?v.trim():"",n_=l_(()=>{if(!A_||G_)return"";let I=o0(A_,j);return y_?q5(I,y_):I},[A_,G_,y_]),d_=(I,e)=>{I.stopPropagation(),F(N$(e))},[s_,H_]=T(null),x_=(I)=>{H_(I)},T_=(I)=>{I.stopPropagation(),B?.(_)},N0=(I,e)=>{let k_=new Set;if(!I||e.length===0)return{content:I,usedIds:k_};return{content:I.replace(/attachment:([^\s)"']+)/g,(Y0,f0,M0,L0)=>{let k0=f0.replace(/^\/+/,""),G$=e.find((C0)=>C0.name&&C0.name.toLowerCase()===k0.toLowerCase()&&!k_.has(C0.id))||e.find((C0)=>!k_.has(C0.id));if(!G$)return Y0;if(k_.add(G$.id),L0.slice(Math.max(0,M0-2),M0)==="](")return`/media/${G$.id}`;return G$.name||"attachment"}),usedIds:k_}},b_=[],D0=[],o_=[],K0=[],i0=[],U0=[],f_=0;if(M_.length>0)M_.forEach((I)=>{if(I?.type==="text"&&I.annotations)U0.push(I.annotations);if(I?.type==="resource_link")K0.push(I);else if(I?.type==="resource")i0.push(I);else if(I?.type==="file"){let e=Q_[f_++];if(e)D0.push(e),o_.push({id:e,name:I?.name||I?.filename||I?.title})}else if(I?.type==="image"||!I?.type){let e=Q_[f_++];if(e){let k_=typeof I?.mime_type==="string"?I.mime_type:void 0;b_.push({id:e,annotations:I?.annotations,mimeType:k_}),o_.push({id:e,name:I?.name||I?.filename||I?.title})}}});else if(Q_.length>0)Q_.forEach((I)=>{b_.push({id:I,annotations:null}),o_.push({id:I,name:null})});if(S_.length>0)S_.forEach((I)=>{if(!I?.id)return;let e=o_.find((k_)=>String(k_.id)===String(I.id));if(e&&!e.name)e.name=I.label});let{content:B0,usedIds:r_}=N0(A_,o_);A_=B0;let z0=b_.filter(({id:I})=>!r_.has(I)),E0=D0.filter((I)=>!r_.has(I)),h_=S_.length>0?S_.map((I,e)=>({id:I.id||`attachment-${e+1}`,label:I.label||`attachment-${e+1}`})):o_.map((I,e)=>({id:I.id,label:I.name||`attachment-${e+1}`})),y0=l_(()=>X1(M_),[M_]),P0=l_(()=>V1(M_),[M_]);f(()=>{if(!S.current)return;return T$(S.current),Y5(S.current)},[n_]);let L_=D(null);return f(()=>{if(!L_.current||y0.length===0)return;let I=L_.current;I.innerHTML="";for(let e of y0){let k_=document.createElement("div");I.appendChild(k_),H6(k_,e,{onAction:async(w_)=>{if(w_.type==="Action.OpenUrl"){let Y0=t$(w_.url||"");if(!Y0)throw Error("Invalid URL");window.open(Y0,"_blank","noopener,noreferrer");return}if(w_.type==="Action.Submit"){await m4({post_id:_.id,thread_id:M.thread_id||_.id,chat_jid:_.chat_jid||null,card_id:e.card_id,action:{type:w_.type,title:w_.title||"",data:w_.data}});return}console.warn("[post] unsupported adaptive card action:",w_.type,w_)}}).catch((w_)=>{console.error("[post] adaptive card render error:",w_),k_.textContent=e.fallback_text||"Card failed to render."})}},[y0,M.thread_id,_.id]),L`
        <div id=${`post-${_.id}`} class="post ${i?"agent-post":""} ${Y?"thread-reply":""} ${U?"thread-prev":""} ${C?"thread-next":""} ${m?"removing":""}" onClick=${$}>
            <div class="post-avatar ${i?"agent-avatar":""} ${l.image?"has-image":""}" style=${c_}>
                ${l.image?L`<img src=${l.image} alt=${N_} />`:l.letter}
            </div>
            <div class="post-body">
                <button
                    class="post-delete-btn"
                    type="button"
                    title="Delete message"
                    aria-label="Delete message"
                    onClick=${T_}
                >
                    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <path d="M18 6L6 18M6 6l12 12" />
                    </svg>
                </button>
                <div class="post-meta">
                    <span class="post-author">${N_}</span>
                    <a class="post-time" href=${`#msg-${_.id}`} onClick=${(I)=>{if(I.preventDefault(),I.stopPropagation(),Z)Z(_.id)}}>${O6(_.timestamp)}</a>
                </div>
                ${$_&&Y_&&L`
                    <div class="post-content truncated">
                        <div class="truncated-title">Message too large to display.</div>
                        <div class="truncated-meta">
                            Original length: ${P2(Y_.originalLength)} chars
                            ${Y_.maxLength?L` • Display limit: ${P2(Y_.maxLength)} chars`:""}
                        </div>
                    </div>
                `}
                ${z_&&Y_&&L`
                    <div class="post-content preview">
                        <div class="truncated-title">Preview truncated.</div>
                        <div class="truncated-meta">
                            Showing first ${P2(Y_.maxLength)} of ${P2(Y_.originalLength)} chars. Download full text below.
                        </div>
                    </div>
                `}
                ${(R_.length>0||W_.length>0||h_.length>0)&&L`
                    <div class="post-file-refs">
                        ${W_.map((I)=>{let e=(k_)=>{if(k_.preventDefault(),k_.stopPropagation(),N)N(I,_.chat_jid||null);else{let w_=document.getElementById("post-"+I);if(w_)w_.scrollIntoView({behavior:"smooth",block:"center"}),w_.classList.add("post-highlight"),setTimeout(()=>w_.classList.remove("post-highlight"),2000)}};return L`
                                <a href=${`#msg-${I}`} class="post-msg-pill-link" onClick=${e}>
                                    <${U$}
                                        prefix="post"
                                        label=${"msg:"+I}
                                        title=${"Message "+I}
                                        icon="message"
                                        onClick=${e}
                                    />
                                </a>
                            `})}
                        ${R_.map((I)=>{let e=I.split("/").pop()||I;return L`
                                <${U$}
                                    prefix="post"
                                    label=${e}
                                    title=${I}
                                    onClick=${()=>R?.(I)}
                                />
                            `})}
                        ${h_.map((I)=>L`
                            <${r7}
                                key=${I.id}
                                attachment=${I}
                                onPreview=${x_}
                            />
                        `)}
                    </div>
                `}
                ${D_&&L`
                    <div 
                        ref=${S}
                        class="post-content"
                        dangerouslySetInnerHTML=${{__html:n_}}
                        onClick=${(I)=>{if(I.target.classList.contains("hashtag")){I.preventDefault(),I.stopPropagation();let e=I.target.dataset.hashtag;if(e)j?.(e)}else if(I.target.tagName==="IMG")I.preventDefault(),I.stopPropagation(),F(I.target.src)}}
                    />
                `}
                ${y0.length>0&&L`
                    <div ref=${L_} class="post-adaptive-cards" />
                `}
                ${P0.length>0&&L`
                    <div class="post-adaptive-card-submissions">
                        ${P0.map((I,e)=>{let k_=y6(I);return L`
                                <div key=${`${I.card_id}-${e}`} class="adaptive-card-submission-receipt">
                                    <div class="adaptive-card-submission-header">
                                        <span class="adaptive-card-submission-icon" aria-hidden="true">✓</span>
                                        <div class="adaptive-card-submission-title-wrap">
                                            <span class="adaptive-card-submission-title">Submitted</span>
                                            <span class="adaptive-card-submission-title-action">${k_.title}</span>
                                        </div>
                                    </div>
                                    ${k_.summary&&L`
                                        <div class="adaptive-card-submission-summary">${k_.summary}</div>
                                    `}
                                    ${k_.fields.length>0&&L`
                                        <div class="adaptive-card-submission-fields">
                                            ${k_.fields.map((w_)=>L`
                                                <span class="adaptive-card-submission-field" title=${`${w_.key}: ${w_.value}`}>
                                                    <span class="adaptive-card-submission-field-key">${w_.key}</span>
                                                    <span class="adaptive-card-submission-field-sep">:</span>
                                                    <span class="adaptive-card-submission-field-value">${w_.value}</span>
                                                </span>
                                            `)}
                                            ${k_.hiddenFieldCount>0&&L`
                                                <span class="adaptive-card-submission-field adaptive-card-submission-field-more">+${k_.hiddenFieldCount} more</span>
                                            `}
                                        </div>
                                    `}
                                    <div class="adaptive-card-submission-meta">
                                        Submitted ${e$(k_.submittedAt)}
                                    </div>
                                </div>
                            `})}
                    </div>
                `}
                ${U0.length>0&&L`
                    ${U0.map((I,e)=>L`
                        <${Y4} key=${e} annotations=${I} />
                    `)}
                `}
                ${z0.length>0&&L`
                    <div class="media-preview">
                        ${z0.map(({id:I,mimeType:e})=>{let w_=typeof e==="string"&&e.toLowerCase().startsWith("image/svg")?N$(I):h4(I);return L`
                                <img 
                                    key=${I} 
                                    src=${w_} 
                                    alt="Media" 
                                    loading="lazy"
                                    onClick=${(Y0)=>d_(Y0,I)}
                                />
                            `})}
                    </div>
                `}
                ${z0.length>0&&L`
                    ${z0.map(({annotations:I},e)=>L`
                        ${I&&L`<${Y4} key=${e} annotations=${I} />`}
                    `)}
                `}
                ${E0.length>0&&L`
                    <div class="file-attachments">
                        ${E0.map((I)=>L`
                            <${o7} key=${I} mediaId=${I} onPreview=${x_} />
                        `)}
                    </div>
                `}
                ${K0.length>0&&L`
                    <div class="resource-links">
                        ${K0.map((I,e)=>L`
                            <div key=${e}>
                                <${a7} block=${I} />
                                <${Y4} annotations=${I.annotations} />
                            </div>
                        `)}
                    </div>
                `}
                ${i0.length>0&&L`
                    <div class="resource-embeds">
                        ${i0.map((I,e)=>L`
                            <div key=${e}>
                                <${t7} block=${I} />
                                <${Y4} annotations=${I.annotations} />
                            </div>
                        `)}
                    </div>
                `}
                ${M.link_previews?.length>0&&L`
                    <div class="link-previews">
                        ${M.link_previews.map((I,e)=>L`
                            <${_5} key=${e} preview=${I} />
                        `)}
                    </div>
                `}
            </div>
        </div>
        ${E&&L`<${A6} src=${E} onClose=${()=>F(null)} />`}
        ${s_&&L`
            <${k6}
                mediaId=${s_.mediaId}
                info=${s_.info}
                onClose=${()=>H_(null)}
            />
        `}
    `}function P6({posts:_,hasMore:$,onLoadMore:j,onPostClick:Z,onHashtagClick:N,onMessageRef:K,onScrollToMessage:z,onFileRef:W,emptyMessage:q,timelineRef:V,agents:B,user:Y,onDeletePost:U,reverse:C=!0,removingPostIds:m,searchQuery:v}){let[R,E]=T(!1),F=D(null),S=typeof IntersectionObserver<"u",M=y(async()=>{if(!j||!$||R)return;E(!0);try{await j({preserveScroll:!0,preserveMode:"top"})}finally{E(!1)}},[$,R,j]),i=y((o)=>{let{scrollTop:d,scrollHeight:z_,clientHeight:$_}=o.target,Y_=C?z_-$_-d:d,M_=Math.max(300,$_);if(Y_<M_)M()},[C,M]);f(()=>{if(!S)return;let o=F.current,d=V?.current;if(!o||!d)return;let z_=300,$_=new IntersectionObserver((Y_)=>{for(let M_ of Y_){if(!M_.isIntersecting)continue;M()}},{root:d,rootMargin:`${z_}px 0px ${z_}px 0px`,threshold:0});return $_.observe(o),()=>$_.disconnect()},[S,$,j,V,M]);let t=D(M);if(t.current=M,f(()=>{if(S)return;if(!V?.current)return;let{scrollTop:o,scrollHeight:d,clientHeight:z_}=V.current,$_=C?d-z_-o:o,Y_=Math.max(300,z_);if($_<Y_)t.current?.()},[S,_,$,C,V]),f(()=>{if(!V?.current)return;if(!$||R)return;let{scrollTop:o,scrollHeight:d,clientHeight:z_}=V.current,$_=C?d-z_-o:o,Y_=Math.max(300,z_);if(d<=z_+1||$_<Y_)t.current?.()},[_,$,R,C,V]),!_)return L`<div class="loading"><div class="spinner"></div></div>`;if(_.length===0)return L`
            <div class="timeline" ref=${V}>
                <div class="timeline-content">
                    <div style="padding: var(--spacing-xl); text-align: center; color: var(--text-secondary)">
                        ${q||"No messages yet. Start a conversation!"}
                    </div>
                </div>
            </div>
        `;let N_=_.slice().sort((o,d)=>o.id-d.id),l=(o)=>{let d=o?.data?.thread_id;if(d===null||d===void 0||d==="")return null;let z_=Number(d);return Number.isFinite(z_)?z_:null},K_=new Map;for(let o=0;o<N_.length;o+=1){let d=N_[o],z_=Number(d?.id),$_=l(d);if($_!==null){let Y_=K_.get($_)||{anchorIndex:-1,replyIndexes:[]};Y_.replyIndexes.push(o),K_.set($_,Y_)}else if(Number.isFinite(z_)){let Y_=K_.get(z_)||{anchorIndex:-1,replyIndexes:[]};Y_.anchorIndex=o,K_.set(z_,Y_)}}let h=new Map;for(let[o,d]of K_.entries()){let z_=new Set;if(d.anchorIndex>=0)z_.add(d.anchorIndex);for(let $_ of d.replyIndexes)z_.add($_);h.set(o,Array.from(z_).sort(($_,Y_)=>$_-Y_))}let B_=N_.map((o,d)=>{let z_=l(o);if(z_===null)return{hasThreadPrev:!1,hasThreadNext:!1};let $_=h.get(z_);if(!$_||$_.length===0)return{hasThreadPrev:!1,hasThreadNext:!1};let Y_=$_.indexOf(d);if(Y_<0)return{hasThreadPrev:!1,hasThreadNext:!1};return{hasThreadPrev:Y_>0,hasThreadNext:Y_<$_.length-1}}),c_=L`<div class="timeline-sentinel" ref=${F}></div>`;return L`
        <div class="timeline ${C?"reverse":"normal"}" ref=${V} onScroll=${i}>
            <div class="timeline-content">
                ${C?c_:null}
                ${N_.map((o,d)=>{let z_=Boolean(o.data?.thread_id&&o.data.thread_id!==o.id),$_=m?.has?.(o.id),Y_=B_[d]||{};return L`
                    <${w6}
                        key=${o.id}
                        post=${o}
                        isThreadReply=${z_}
                        isThreadPrev=${Y_.hasThreadPrev}
                        isThreadNext=${Y_.hasThreadNext}
                        isRemoving=${$_}
                        highlightQuery=${v}
                        agentName=${z6(o.data?.agent_id,B||{})}
                        agentAvatarUrl=${Y6(o.data?.agent_id,B||{})}
                        userName=${Y?.name||Y?.user_name}
                        userAvatarUrl=${Y?.avatar_url||Y?.avatarUrl||Y?.avatar}
                        userAvatarBackground=${Y?.avatar_background||Y?.avatarBackground}
                        onClick=${()=>Z?.(o)}
                        onHashtagClick=${N}
                        onMessageRef=${K}
                        onScrollToMessage=${z}
                        onFileRef=${W}
                        onDelete=${U}
                    />
                `})}
                ${C?null:c_}
            </div>
        </div>
    `}class M6{extensions=new Map;register(_){this.extensions.set(_.id,_)}unregister(_){this.extensions.delete(_)}resolve(_){let $,j=-1/0;for(let Z of this.extensions.values()){if(Z.placement!=="tabs")continue;if(!Z.canHandle)continue;try{let N=Z.canHandle(_);if(N===!1||N===0)continue;let K=N===!0?0:typeof N==="number"?N:0;if(K>j)j=K,$=Z}catch(N){console.warn(`[PaneRegistry] canHandle() error for "${Z.id}":`,N)}}return $}list(){return Array.from(this.extensions.values())}getDockPanes(){return Array.from(this.extensions.values()).filter((_)=>_.placement==="dock")}getTabPanes(){return Array.from(this.extensions.values()).filter((_)=>_.placement==="tabs")}get(_){return this.extensions.get(_)}get size(){return this.extensions.size}}var e_=new M6;var G4=null,q1=null;function C6(){if(q1)return Promise.resolve(q1);if(!G4)G4=import("/static/dist/editor.bundle.js").then((_)=>{return q1=_,_}).catch((_)=>{throw G4=null,_});return G4}class I6{container;context;real=null;disposed=!1;loadingEl;queuedDirtyCb=null;queuedSaveCb=null;queuedCloseCb=null;queuedViewStateCb=null;queuedViewState=null;constructor(_,$){this.container=_,this.context=$,this.loadingEl=document.createElement("div"),this.loadingEl.className="editor-pane",this.loadingEl.innerHTML=`
            <div class="editor-body">
                <div class="editor-status" style="padding: 2em; text-align: center; color: var(--text-secondary);">Loading editor…</div>
            </div>
        `,_.appendChild(this.loadingEl),this.load()}escapeHtml(_){let $=document.createElement("div");return $.textContent=_,$.innerHTML}async load(){try{let _=await C6();if(this.disposed)return;if(this.loadingEl.parentNode)this.loadingEl.remove();if(this.real=new _.StandaloneEditorInstance(this.container,this.context),this.queuedDirtyCb&&this.real.onDirtyChange)this.real.onDirtyChange(this.queuedDirtyCb);if(this.queuedSaveCb&&this.real.onSaveRequest)this.real.onSaveRequest(this.queuedSaveCb);if(this.queuedCloseCb&&this.real.onClose)this.real.onClose(this.queuedCloseCb);if(this.queuedViewStateCb&&typeof this.real.onViewStateChange==="function")this.real.onViewStateChange(this.queuedViewStateCb);if(this.queuedViewState&&typeof this.real.restoreViewState==="function")requestAnimationFrame(()=>this.real?.restoreViewState?.(this.queuedViewState))}catch(_){if(this.disposed)return;console.error("[editor-loader] Failed to load editor bundle:",_),this.loadingEl.querySelector(".editor-status").textContent="Failed to load editor. Check console for details."}}getContent(){return this.real?.getContent()}isDirty(){return this.real?.isDirty()||!1}setContent(_,$){if(this.real?.setContent)this.real.setContent(_,$)}focus(){this.real?.focus()}resize(){this.real?.resize?.()}dispose(){if(this.disposed)return;if(this.disposed=!0,this.real)this.real.dispose(),this.real=null;this.container.innerHTML="",this.queuedDirtyCb=null,this.queuedSaveCb=null,this.queuedCloseCb=null,this.queuedViewStateCb=null}onDirtyChange(_){if(this.queuedDirtyCb=_,this.real?.onDirtyChange)this.real.onDirtyChange(_)}onSaveRequest(_){if(this.queuedSaveCb=_,this.real?.onSaveRequest)this.real.onSaveRequest(_)}onClose(_){if(this.queuedCloseCb=_,this.real?.onClose)this.real.onClose(_)}onViewStateChange(_){this.queuedViewStateCb=_,this.real?.onViewStateChange?.(_)}restoreViewState(_){this.queuedViewState=_,this.real?.restoreViewState?.(_)}getPath(){return this.real?.getPath?.()??this.context.path??""}setPath(_){this.real?.setPath?.(_)}}var O1={id:"editor",label:"Editor",icon:"edit",capabilities:["edit"],placement:"tabs",canHandle(_){if(!_.path)return!1;if(_.mode!=="edit")return!1;return 1},mount(_,$){return new I6(_,$)}};function B1(){C6().catch(()=>{})}var Q1="piclaw://terminal";var O5={yellow:"#9a6700",magenta:"#8250df",cyan:"#1b7c83",brightBlack:"#57606a",brightRed:"#cf222e",brightGreen:"#1a7f37",brightYellow:"#bf8700",brightBlue:"#0550ae",brightMagenta:"#6f42c1",brightCyan:"#0a7b83"},B5={yellow:"#d29922",magenta:"#bc8cff",cyan:"#39c5cf",brightBlack:"#8b949e",brightRed:"#ff7b72",brightGreen:"#7ee787",brightYellow:"#e3b341",brightBlue:"#79c0ff",brightMagenta:"#d2a8ff",brightCyan:"#56d4dd"},W4=null,L1=null;function L5(_){if(!_)return!1;return _.startsWith("data:application/wasm")||/(^|\/)ghostty-vt\.wasm(?:[?#].*)?$/.test(_)}async function Q5(_){let $=globalThis.fetch?.bind(globalThis);if(!$)return await _();let j=new URL("/static/js/vendor/ghostty-vt.wasm",window.location.origin).href,Z=(N,K)=>{let z=N instanceof Request?N.url:N instanceof URL?N.href:String(N);if(!L5(z))return $(N,K);if(N instanceof Request)return $(new Request(j,N));return $(j,K)};globalThis.fetch=Z;try{return await _()}finally{globalThis.fetch=$}}async function U5(){let $=await import(new URL("/static/js/vendor/ghostty-web.js",window.location.origin).href);if(!W4)W4=Q5(()=>Promise.resolve($.init?.())).catch((j)=>{throw W4=null,j});return await W4,$}async function F5(){if(typeof document>"u"||!("fonts"in document)||!document.fonts)return;if(!L1)L1=Promise.allSettled([document.fonts.load('400 13px "FiraCode Nerd Font Mono"'),document.fonts.load('700 13px "FiraCode Nerd Font Mono"'),document.fonts.ready]).then(()=>{return}).catch(()=>{return});await L1}async function J5(){let _=await fetch("/terminal/session",{method:"GET",credentials:"same-origin"}),$=await _.json().catch(()=>({}));if(!_.ok)throw Error($?.error||`HTTP ${_.status}`);return $}function H5(_){return`${window.location.protocol==="https:"?"wss:":"ws:"}//${window.location.host}${_}`}function D5(){if(typeof window>"u"||typeof document>"u")return!1;let{documentElement:_,body:$}=document,j=_?.getAttribute?.("data-theme")?.toLowerCase?.()||"";if(j==="dark")return!0;if(j==="light")return!1;if(_?.classList?.contains("dark")||$?.classList?.contains("dark"))return!0;if(_?.classList?.contains("light")||$?.classList?.contains("light"))return!1;return Boolean(window.matchMedia?.("(prefers-color-scheme: dark)")?.matches)}function f$(_,$=""){if(typeof document>"u")return $;return getComputedStyle(document.documentElement).getPropertyValue(_)?.trim()||$}function E5(_,$){if(!_||!_.startsWith("#"))return _;let j=_.slice(1);if(j.length===3)return`#${j[0]}${j[0]}${j[1]}${j[1]}${j[2]}${j[2]}${$}`;if(j.length===6)return`#${j}${$}`;return _}function b6(){let _=D5(),$=_?B5:O5,j=f$("--bg-primary",_?"#000000":"#ffffff"),Z=f$("--text-primary",_?"#e7e9ea":"#0f1419"),N=f$("--text-secondary",_?"#71767b":"#536471"),K=f$("--accent-color","#1d9bf0"),z=f$("--danger-color",_?"#ff7b72":"#cf222e"),W=f$("--success-color",_?"#7ee787":"#1a7f37"),q=f$("--bg-hover",_?"#1d1f23":"#e8ebed"),V=f$("--border-color",_?"#2f3336":"#eff3f4"),B=f$("--accent-soft-strong",E5(K,_?"47":"33"));return{background:j,foreground:Z,cursor:K,cursorAccent:j,selectionBackground:B,selectionForeground:Z,black:q,red:z,green:W,yellow:$.yellow,blue:K,magenta:$.magenta,cyan:$.cyan,white:Z,brightBlack:$.brightBlack,brightRed:$.brightRed,brightGreen:$.brightGreen,brightYellow:$.brightYellow,brightBlue:$.brightBlue,brightMagenta:$.brightMagenta,brightCyan:$.brightCyan,brightWhite:V}}class U1{container;disposed=!1;termEl;bodyEl;statusEl;terminal=null;fitAddon=null;socket=null;themeObserver=null;themeChangeListener=null;mediaQuery=null;mediaQueryListener=null;resizeObserver=null;dockResizeListener=null;windowResizeListener=null;resizeFrame=0;lastAppliedThemeSignature=null;lastResizeSignature=null;constructor(_,$){this.container=_,this.termEl=document.createElement("div"),this.termEl.className="terminal-pane-content",this.termEl.setAttribute("tabindex","0"),this.statusEl=document.createElement("span"),this.statusEl.className="terminal-pane-status",this.statusEl.textContent="Loading terminal…",this.bodyEl=document.createElement("div"),this.bodyEl.className="terminal-pane-body",this.bodyEl.innerHTML='<div class="terminal-placeholder">Bootstrapping ghostty-web…</div>',this.termEl.append(this.bodyEl),_.appendChild(this.termEl),this.bootstrapGhostty()}setStatus(_){this.statusEl.textContent=_,this.termEl.dataset.connectionStatus=_,this.termEl.setAttribute("aria-label",`Terminal ${_}`)}getResizeSignature(){try{let _=this.container?.getBoundingClientRect?.(),$=this.bodyEl?.getBoundingClientRect?.(),j=Number.isFinite(_?.width)?_.width:0,Z=Number.isFinite(_?.height)?_.height:0,N=Number.isFinite($?.width)?$.width:0,K=Number.isFinite($?.height)?$.height:0;return`${Math.round(j)}x${Math.round(Z)}:${Math.round(N)}x${Math.round(K)}`}catch{return"0x0:0x0"}}syncHostLayout(){let _=this.bodyEl.querySelector(".terminal-live-host");if(!(_ instanceof HTMLElement))return;let $=_.firstElementChild;if($ instanceof HTMLElement)$.style.width="100%",$.style.height="100%",$.style.maxWidth="100%",$.style.minWidth="0",$.style.display="block";let j=_.querySelector("canvas");if(j instanceof HTMLElement)j.style.display="block",j.style.maxWidth="none"}scheduleResize(){if(this.disposed)return;let _=this.getResizeSignature();if(this.lastResizeSignature===_)return;if(this.resizeFrame)cancelAnimationFrame(this.resizeFrame);this.resizeFrame=requestAnimationFrame(()=>{this.resizeFrame=0,this.lastResizeSignature=this.getResizeSignature(),this.resize()})}async bootstrapGhostty(){try{let _=await U5();if(await F5(),this.disposed)return;this.bodyEl.innerHTML="";let $=document.createElement("div");$.className="terminal-live-host",this.bodyEl.appendChild($);let j=new _.Terminal({cols:120,rows:30,cursorBlink:!0,fontFamily:'FiraCode Nerd Font Mono, ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", monospace',fontSize:13,theme:b6()}),Z=null;if(typeof _.FitAddon==="function")Z=new _.FitAddon,j.loadAddon?.(Z);await j.open($),this.syncHostLayout(),j.loadFonts?.(),Z?.observeResize?.(),this.terminal=j,this.fitAddon=Z,this.installThemeSync(),this.installResizeSync(),this.scheduleResize(),await this.connectBackend()}catch(_){if(console.error("[terminal-pane] Failed to bootstrap ghostty-web:",_),this.disposed)return;this.bodyEl.innerHTML='<div class="terminal-placeholder">Terminal failed to load. Check vendored assets and backend wiring.</div>',this.setStatus("Load failed")}}applyTheme(){if(!this.terminal)return;let _=b6(),$=JSON.stringify(_),j=this.lastAppliedThemeSignature!==null&&this.lastAppliedThemeSignature!==$;try{this.termEl.style.backgroundColor=_.background,this.bodyEl.style.backgroundColor=_.background;let Z=this.bodyEl.querySelector(".terminal-live-host");if(Z instanceof HTMLElement)Z.style.backgroundColor=_.background,Z.style.color=_.foreground;let N=this.bodyEl.querySelector("canvas");if(N instanceof HTMLElement)N.style.backgroundColor=_.background,N.style.color=_.foreground}catch{}try{if(this.terminal.options)this.terminal.options.theme=_}catch{}try{if(j&&this.terminal.reset)this.terminal.reset()}catch{}try{this.terminal.renderer?.setTheme?.(_),this.terminal.renderer?.clear?.()}catch{}try{this.terminal.loadFonts?.()}catch{}try{this.terminal.renderer?.remeasureFont?.()}catch{}try{if(this.terminal.wasmTerm&&this.terminal.renderer?.render)this.terminal.renderer.render(this.terminal.wasmTerm,!0,this.terminal.viewportY||0,this.terminal),this.terminal.renderer.render(this.terminal.wasmTerm,!1,this.terminal.viewportY||0,this.terminal)}catch{}try{this.resize()}catch{}try{if(j&&this.socket?.readyState===WebSocket.OPEN)this.socket.send(JSON.stringify({type:"input",data:"\f"}))}catch{}try{this.terminal.refresh?.()}catch{}this.lastAppliedThemeSignature=$}installThemeSync(){if(typeof window>"u"||typeof document>"u")return;let _=()=>requestAnimationFrame(()=>this.applyTheme());_();let $=()=>_();window.addEventListener("piclaw-theme-change",$),this.themeChangeListener=$;let j=window.matchMedia?.("(prefers-color-scheme: dark)"),Z=()=>_();if(j?.addEventListener)j.addEventListener("change",Z);else if(j?.addListener)j.addListener(Z);this.mediaQuery=j,this.mediaQueryListener=Z;let N=typeof MutationObserver<"u"?new MutationObserver(()=>_()):null;if(N?.observe(document.documentElement,{attributes:!0,attributeFilter:["class","data-theme","style"]}),document.body)N?.observe(document.body,{attributes:!0,attributeFilter:["class","data-theme"]});this.themeObserver=N}installResizeSync(){if(typeof window>"u")return;let _=()=>this.scheduleResize(),$=()=>this.scheduleResize();if(window.addEventListener("dock-resize",_),window.addEventListener("resize",$),this.dockResizeListener=_,this.windowResizeListener=$,typeof ResizeObserver<"u"){let j=new ResizeObserver(()=>{if(this.disposed)return;this.scheduleResize()});j.observe(this.container),this.resizeObserver=j}}async connectBackend(){let _=this.terminal;if(!_)return;try{let $=await J5();if(this.disposed)return;if(!$?.enabled){_.write?.(`Terminal backend unavailable: ${$?.error||"disabled"}\r
`),this.setStatus("Unavailable");return}let j=new WebSocket(H5($.ws_path||"/terminal/ws"));this.socket=j,this.setStatus("Connecting…"),_.onData?.((Z)=>{if(j.readyState===WebSocket.OPEN)j.send(JSON.stringify({type:"input",data:Z}))}),_.onResize?.(({cols:Z,rows:N})=>{if(j.readyState===WebSocket.OPEN)j.send(JSON.stringify({type:"resize",cols:Z,rows:N}))}),j.addEventListener("open",()=>{if(this.disposed)return;this.setStatus("Connected"),this.scheduleResize()}),j.addEventListener("message",(Z)=>{if(this.disposed)return;let N=null;try{N=JSON.parse(String(Z.data))}catch{N={type:"output",data:String(Z.data)}}if(N?.type==="output"&&typeof N.data==="string"){_.write?.(N.data);return}if(N?.type==="exit")_.write?.(`\r
[terminal exited]\r
`),this.setStatus("Exited")}),j.addEventListener("close",()=>{if(this.disposed)return;this.setStatus("Disconnected")}),j.addEventListener("error",()=>{if(this.disposed)return;this.setStatus("Connection error")})}catch($){_.write?.(`Terminal backend unavailable: ${$ instanceof Error?$.message:String($)}\r
`),this.setStatus("Unavailable")}}sendResize(){if(!this.socket||this.socket.readyState!==WebSocket.OPEN||!this.fitAddon?.proposeDimensions)return;let _=this.fitAddon.proposeDimensions();if(!_)return;this.socket.send(JSON.stringify({type:"resize",cols:_.cols,rows:_.rows}))}getContent(){return}isDirty(){return!1}focus(){if(this.terminal?.focus){this.terminal.focus();return}this.termEl?.focus()}resize(){this.syncHostLayout();try{this.terminal?.renderer?.remeasureFont?.()}catch{}try{this.fitAddon?.fit?.()}catch{}try{this.terminal?.refresh?.()}catch{}this.syncHostLayout(),this.sendResize()}dispose(){if(this.disposed)return;this.disposed=!0;try{if(this.resizeFrame)cancelAnimationFrame(this.resizeFrame),this.resizeFrame=0}catch{}try{if(this.themeChangeListener)window.removeEventListener("piclaw-theme-change",this.themeChangeListener)}catch{}try{if(this.mediaQuery&&this.mediaQueryListener){if(this.mediaQuery.removeEventListener)this.mediaQuery.removeEventListener("change",this.mediaQueryListener);else if(this.mediaQuery.removeListener)this.mediaQuery.removeListener(this.mediaQueryListener)}}catch{}try{if(this.dockResizeListener)window.removeEventListener("dock-resize",this.dockResizeListener);if(this.windowResizeListener)window.removeEventListener("resize",this.windowResizeListener)}catch{}try{this.themeObserver?.disconnect?.()}catch{}try{this.resizeObserver?.disconnect?.()}catch{}try{this.socket?.close?.()}catch{}try{this.fitAddon?.dispose?.()}catch{}try{this.terminal?.dispose?.()}catch{}this.termEl?.remove()}}var F1={id:"terminal",label:"Terminal",icon:"terminal",capabilities:["terminal"],placement:"dock",mount(_,$){return new U1(_,$)}},J1={id:"terminal-tab",label:"Terminal",icon:"terminal",capabilities:["terminal"],placement:"tabs",canHandle(_){return _?.path==="piclaw://terminal"?1e4:!1},mount(_,$){return new U1(_,$)}};function c$(_){return String(_||"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}function y5(_,$){let j=String(_||"").trim();if(!j)return j;if(/^[a-zA-Z][a-zA-Z\d+.-]*:/.test(j)||j.startsWith("#")||j.startsWith("data:")||j.startsWith("blob:"))return j;let Z=j.match(/^([^?#]*)(\?[^#]*)?(#.*)?$/),N=Z?.[1]||j,K=Z?.[2]||"",z=Z?.[3]||"",W=String($||"").split("/").slice(0,-1).join("/"),V=N.startsWith("/")?N:`${W?`${W}/`:""}${N}`,B=[];for(let U of V.split("/")){if(!U||U===".")continue;if(U===".."){if(B.length>0)B.pop();continue}B.push(U)}let Y=B.join("/");return`${a2(Y)}${K}${z}`}function b2(_){return _?.preview||null}function k5(_){let $=String(_||""),j=Math.max($.lastIndexOf("/"),$.lastIndexOf("\\")),Z=j>=0?$.slice(j+1):$,N=Z.lastIndexOf(".");if(N<=0||N===Z.length-1)return"none";return Z.slice(N+1)}function A5(_){if(!_)return"unknown";if(_.kind==="image")return"image";if(_.kind==="text")return _.content_type==="text/markdown"?"markdown":"text";if(_.kind==="binary")return"binary";return String(_.kind||"unknown")}function w5(_,$){let j=$?.path||_?.path||"",Z=[];if($?.content_type)Z.push(`<span><strong>type:</strong> ${c$($.content_type)}</span>`);if(typeof $?.size==="number")Z.push(`<span><strong>size:</strong> ${c$(Y$($.size))}</span>`);if($?.mtime)Z.push(`<span><strong>modified:</strong> ${c$(e$($.mtime))}</span>`);if(Z.push(`<span><strong>kind:</strong> ${c$(A5($))}</span>`),Z.push(`<span><strong>extension:</strong> ${c$(k5(j))}</span>`),j)Z.push(`<span><strong>path:</strong> ${c$(j)}</span>`);if($?.truncated)Z.push("<span><strong>content:</strong> truncated</span>");return`<div class="workspace-preview-meta workspace-preview-meta-inline">${Z.join("")}</div>`}function P5(_){let $=b2(_);if(!$)return'<div class="workspace-preview-text">No preview available.</div>';let j=w5(_,$);if($.kind==="image"){let Z=$.url||($.path?a2($.path):"");return`${j}
            <div class="workspace-preview-image">
                <img src="${c$(Z)}" alt="preview" />
            </div>
        `}if($.kind==="text"){if($.content_type==="text/markdown"){let Z=o0($.text||"",null,{rewriteImageSrc:(N)=>y5(N,$.path||_?.path)});return`${j}<div class="workspace-preview-text">${Z}</div>`}return`${j}<pre class="workspace-preview-text"><code>${c$($.text||"")}</code></pre>`}if($.kind==="binary")return`${j}<div class="workspace-preview-text">Binary file — download to view.</div>`;return`${j}<div class="workspace-preview-text">No preview available.</div>`}class H1{constructor(_,$){this.container=_,this.context=$,this.disposed=!1,this.host=document.createElement("div"),this.host.className="workspace-preview-render-host",this.host.tabIndex=0,this.container.appendChild(this.host),this.render()}render(){if(this.disposed)return;this.host.innerHTML=P5(this.context)}getContent(){let _=b2(this.context);return typeof _?.text==="string"?_.text:void 0}isDirty(){return!1}setContent(_,$){let j=b2(this.context);if(j&&j.kind==="text"){if(j.text=_,$!==void 0)j.mtime=$}if(this.context.content=_,$!==void 0)this.context.mtime=$;this.render()}focus(){this.host?.focus?.()}dispose(){if(this.disposed)return;this.disposed=!0,this.host?.remove(),this.container.innerHTML=""}}var D1={id:"workspace-markdown-preview",label:"Workspace Markdown Preview",icon:"preview",capabilities:["preview","readonly"],placement:"tabs",canHandle(_){let $=b2(_);if(_?.mode!=="view")return!1;if(!$||$.kind!=="text")return!1;return $.content_type==="text/markdown"?20:!1},mount(_,$){return new H1(_,$)}},E1={id:"workspace-preview-default",label:"Workspace Preview",icon:"preview",capabilities:["preview","readonly"],placement:"tabs",canHandle(_){if(_?.mode!=="view")return!1;return b2(_)||_?.path?1:!1},mount(_,$){return new H1(_,$)}};var M5=new Set([".docx",".doc",".odt",".rtf",".xlsx",".xls",".ods",".csv",".pptx",".ppt",".odp"]),C5={".docx":"Word Document",".doc":"Word (Legacy)",".odt":"OpenDocument Text",".rtf":"Rich Text",".xlsx":"Excel Spreadsheet",".xls":"Excel (Legacy)",".ods":"OpenDocument Spreadsheet",".csv":"CSV Data",".pptx":"PowerPoint",".ppt":"PowerPoint (Legacy)",".odp":"OpenDocument Presentation"},I5={".docx":"\uD83D\uDCDD",".doc":"\uD83D\uDCDD",".odt":"\uD83D\uDCDD",".rtf":"\uD83D\uDCDD",".xlsx":"\uD83D\uDCCA",".xls":"\uD83D\uDCCA",".ods":"\uD83D\uDCCA",".csv":"\uD83D\uDCCA",".pptx":"\uD83D\uDCFD️",".ppt":"\uD83D\uDCFD️",".odp":"\uD83D\uDCFD️"};function x6(_){if(!_)return"";let $=_.lastIndexOf(".");if($<0)return"";return _.slice($).toLowerCase()}function S6(_){return _.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}class T6{container;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Z=j.split("/").pop()||"document",N=x6(j),K=I5[N]||"\uD83D\uDCC4",z=C5[N]||"Office Document",W=document.createElement("div");W.style.cssText="width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:var(--bg-primary,#1a1a1a);",W.innerHTML=`
            <div style="text-align:center;max-width:360px;padding:24px;">
                <div style="font-size:56px;margin-bottom:12px;">${K}</div>
                <div style="font-size:14px;font-weight:600;color:var(--text-primary,#e0e0e0);margin-bottom:4px;word-break:break-word;">${S6(Z)}</div>
                <div style="font-size:11px;color:var(--text-secondary,#888);margin-bottom:20px;">${S6(z)}</div>
                <button id="ov-open-tab" style="padding:8px 20px;background:var(--accent-color,#1d9bf0);color:var(--accent-contrast-text,#fff);
                    border:none;border-radius:5px;font-size:13px;font-weight:500;cursor:pointer;
                    transition:background 0.15s;"
                    onmouseenter="this.style.background='var(--accent-hover,#1a8cd8)'"
                    onmouseleave="this.style.background='var(--accent-color,#1d9bf0)'">
                    Open in Tab
                </button>
            </div>
        `,_.appendChild(W);let q=W.querySelector("#ov-open-tab");if(q)q.addEventListener("click",()=>{let V=new CustomEvent("office-viewer:open-tab",{bubbles:!0,detail:{path:j}});_.dispatchEvent(V)})}getContent(){return}isDirty(){return!1}focus(){}resize(){}dispose(){if(this.disposed)return;this.disposed=!0,this.container.innerHTML=""}}class f6{container;iframe=null;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Z=j.split("/").pop()||"document",N=`/workspace/raw?path=${encodeURIComponent(j)}`,K=`/office-viewer/?url=${encodeURIComponent(N)}&name=${encodeURIComponent(Z)}`;this.iframe=document.createElement("iframe"),this.iframe.src=K,this.iframe.style.cssText="width:100%;height:100%;border:none;background:#1e1e1e;",_.appendChild(this.iframe)}getContent(){return}isDirty(){return!1}focus(){this.iframe?.focus()}resize(){}dispose(){if(this.disposed)return;if(this.disposed=!0,this.iframe)this.iframe.src="about:blank",this.iframe=null;this.container.innerHTML=""}}var y1={id:"office-viewer",label:"Office Viewer",icon:"file-text",capabilities:["readonly","preview"],placement:"tabs",canHandle(_){let $=x6(_?.path);if(!$||!M5.has($))return!1;return 50},mount(_,$){if($?.mode==="view")return new T6(_,$);return new f6(_,$)}};var b5=/\.(csv|tsv)$/i;class R6{container;iframe=null;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Z=`/csv-viewer/?path=${encodeURIComponent(j)}`;this.iframe=document.createElement("iframe"),this.iframe.src=Z,this.iframe.style.cssText="width:100%;height:100%;border:none;background:var(--bg-primary,#000);",_.appendChild(this.iframe)}getContent(){return}isDirty(){return!1}focus(){this.iframe?.focus()}resize(){}dispose(){if(this.disposed)return;if(this.disposed=!0,this.iframe)this.iframe.src="about:blank",this.iframe=null;this.container.innerHTML=""}}var k1={id:"csv-viewer",label:"CSV Viewer",icon:"table",capabilities:["readonly","preview"],placement:"tabs",canHandle(_){let $=_?.path||"";if(!b5.test($))return!1;return 55},mount(_,$){return new R6(_,$)}};var S5=/\.pdf$/i;function x5(_){return _.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}class v6{container;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Z=j.split("/").pop()||"document.pdf",N=document.createElement("div");N.style.cssText="width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:var(--bg-primary,#1a1a1a);",N.innerHTML=`
            <div style="text-align:center;max-width:360px;padding:24px;">
                <div style="font-size:56px;margin-bottom:12px;">\uD83D\uDCC4</div>
                <div style="font-size:14px;font-weight:600;color:var(--text-primary,#e0e0e0);margin-bottom:4px;word-break:break-word;">${x5(Z)}</div>
                <div style="font-size:11px;color:var(--text-secondary,#888);margin-bottom:20px;">PDF Document</div>
                <button id="pdf-open-tab" style="padding:8px 20px;background:var(--accent-color,#1d9bf0);color:var(--accent-contrast-text,#fff);
                    border:none;border-radius:5px;font-size:13px;font-weight:500;cursor:pointer;
                    transition:background 0.15s;"
                    onmouseenter="this.style.background='var(--accent-hover,#1a8cd8)'"
                    onmouseleave="this.style.background='var(--accent-color,#1d9bf0)'">
                    Open in Tab
                </button>
            </div>
        `,_.appendChild(N);let K=N.querySelector("#pdf-open-tab");if(K)K.addEventListener("click",()=>{let z=new CustomEvent("pdf-viewer:open-tab",{bubbles:!0,detail:{path:j}});_.dispatchEvent(z)})}getContent(){return}isDirty(){return!1}focus(){}resize(){}dispose(){if(this.disposed)return;this.disposed=!0,this.container.innerHTML=""}}class u6{container;iframe=null;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Z=`/pdf-viewer/?path=${encodeURIComponent(j)}`;this.iframe=document.createElement("iframe"),this.iframe.src=Z,this.iframe.style.cssText="width:100%;height:100%;border:none;background:#1e1e1e;",_.appendChild(this.iframe)}getContent(){return}isDirty(){return!1}focus(){this.iframe?.focus()}resize(){}dispose(){if(this.disposed)return;if(this.disposed=!0,this.iframe)this.iframe.src="about:blank",this.iframe=null;this.container.innerHTML=""}}var A1={id:"pdf-viewer",label:"PDF Viewer",icon:"file-text",capabilities:["readonly","preview"],placement:"tabs",canHandle(_){let $=_?.path||"";if(!S5.test($))return!1;return 52},mount(_,$){if($?.mode==="view")return new v6(_,$);return new u6(_,$)}};var T5=/\.(png|jpe?g|gif|webp|bmp|ico|svg)$/i;function w1(_){return _.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}class m6{container;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Z=j.split("/").pop()||"image",N=`/workspace/raw?path=${encodeURIComponent(j)}`,K=document.createElement("div");K.style.cssText="width:100%;height:100%;display:flex;flex-direction:column;background:var(--bg-primary,#1a1a1a);",K.innerHTML=`
            <div style="flex:1;min-height:0;display:flex;align-items:center;justify-content:center;overflow:hidden;padding:16px;">
                <img src="${w1(N)}" alt="${w1(Z)}" style="max-width:100%;max-height:100%;object-fit:contain;border-radius:4px;" />
            </div>
            <div style="display:flex;align-items:center;justify-content:space-between;padding:8px 16px;border-top:1px solid var(--border-color,#333);flex-shrink:0;">
                <div style="font-size:12px;color:var(--text-secondary,#888);overflow:hidden;text-overflow:ellipsis;white-space:nowrap;min-width:0;">${w1(Z)}</div>
                <button id="img-open-tab" style="padding:5px 14px;background:var(--accent-color,#1d9bf0);color:var(--accent-contrast-text,#fff);
                    border:none;border-radius:4px;font-size:12px;font-weight:500;cursor:pointer;flex-shrink:0;
                    transition:background 0.15s;"
                    onmouseenter="this.style.background='var(--accent-hover,#1a8cd8)'"
                    onmouseleave="this.style.background='var(--accent-color,#1d9bf0)'">
                    Open in Tab
                </button>
            </div>
        `,_.appendChild(K);let z=K.querySelector("#img-open-tab");if(z)z.addEventListener("click",()=>{let W=new CustomEvent("image-viewer:open-tab",{bubbles:!0,detail:{path:j}});_.dispatchEvent(W)})}getContent(){return}isDirty(){return!1}focus(){}resize(){}dispose(){if(this.disposed)return;this.disposed=!0,this.container.innerHTML=""}}class g6{container;iframe=null;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Z=`/image-viewer/?path=${encodeURIComponent(j)}`;this.iframe=document.createElement("iframe"),this.iframe.src=Z,this.iframe.style.cssText="width:100%;height:100%;border:none;background:var(--bg-primary,#000);",_.appendChild(this.iframe)}getContent(){return}isDirty(){return!1}focus(){this.iframe?.focus()}resize(){}dispose(){if(this.disposed)return;if(this.disposed=!0,this.iframe)this.iframe.src="about:blank",this.iframe=null;this.container.innerHTML=""}}var P1={id:"image-viewer",label:"Image Viewer",icon:"image",capabilities:["readonly","preview"],placement:"tabs",canHandle(_){let $=_?.path||"";if(!T5.test($))return!1;return 48},mount(_,$){if($?.mode==="view")return new m6(_,$);return new g6(_,$)}};function f5(_){if(!_)return!1;let $=_.toLowerCase();return $.endsWith(".drawio")||$.endsWith(".drawio.xml")||$.endsWith(".drawio.svg")||$.endsWith(".drawio.png")}function R5(_){return _.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}var M1='<mxfile host="app.diagrams.net"><diagram id="page-1" name="Page-1"><mxGraphModel dx="1260" dy="720" grid="1" gridSize="10" guides="1" tooltips="1" connect="1" arrows="1" fold="1" page="1" pageScale="1" pageWidth="850" pageHeight="1100" math="0" shadow="0"><root><mxCell id="0"/><mxCell id="1" parent="0"/></root></mxGraphModel></diagram></mxfile>';function p6(_){let $=String(_||"").trim();return $?$:M1}function v5(_){let $=String(_||"").toLowerCase();if($.endsWith(".drawio.svg")||$.endsWith(".svg"))return"xmlsvg";if($.endsWith(".drawio.png")||$.endsWith(".png"))return"xmlpng";return"xml"}function u5(_){let $="",j=32768;for(let Z=0;Z<_.length;Z+=j)$+=String.fromCharCode(..._.subarray(Z,Z+j));return btoa($)}function m5(_,$="*"){try{let j=(K)=>{let z=_.parent||_.opener;if(!z)return!1;return z.postMessage(JSON.stringify({event:"workspace-export",...K}),$),!0},Z=_.EditorUi;if(Z?.prototype&&!Z.prototype.__piclawWorkspaceSavePatched){let K=Z.prototype.saveData;Z.prototype.saveData=function(z,W,q,V,B,Y){try{if(z&&q!=null&&j({filename:z,format:W,data:q,mimeType:V,base64Encoded:Boolean(B),defaultMode:Y}))return}catch(U){console.warn("[drawio-pane] saveData intercept failed, falling back to native save",U)}return K.apply(this,arguments)},Z.prototype.__piclawWorkspaceSavePatched=!0}let N=_.App;if(N?.prototype&&!N.prototype.__piclawExportPatched){let K=N.prototype.exportFile;N.prototype.exportFile=function(z,W,q,V,B,Y){try{if(W&&j({filename:W,data:z,mimeType:q,base64Encoded:Boolean(V),mode:B,folderId:Y}))return}catch(U){console.warn("[drawio-pane] export intercept failed, falling back to native export",U)}return K.apply(this,arguments)},N.prototype.__piclawExportPatched=!0}return Boolean(Z?.prototype&&Z.prototype.__piclawWorkspaceSavePatched||N?.prototype&&N.prototype.__piclawExportPatched)}catch{return!1}}async function c6(_,$){let j=new Uint8Array(await _.arrayBuffer());return`data:${_.headers.get("Content-Type")||$};base64,${u5(j)}`}class h6{container;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Z=j.split("/").pop()||"diagram.drawio",N=document.createElement("div");N.style.cssText="width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:var(--bg-primary,#1a1a1a);",N.innerHTML=`
            <div style="text-align:center;max-width:360px;padding:24px;">
                <div style="font-size:56px;margin-bottom:12px;">\uD83D\uDCD0</div>
                <div style="font-size:14px;font-weight:600;color:var(--text-primary,#e0e0e0);margin-bottom:4px;word-break:break-word;">${R5(Z)}</div>
                <div style="font-size:11px;color:var(--text-secondary,#888);margin-bottom:20px;">Draw.io Diagram</div>
                <button id="drawio-open-tab" style="padding:8px 20px;background:var(--accent-color,#1d9bf0);color:var(--accent-contrast-text,#fff);
                    border:none;border-radius:5px;font-size:13px;font-weight:500;cursor:pointer;
                    transition:background 0.15s;"
                    onmouseenter="this.style.background='var(--accent-hover,#1a8cd8)'"
                    onmouseleave="this.style.background='var(--accent-color,#1d9bf0)'">
                    Edit in Tab
                </button>
            </div>
        `,_.appendChild(N);let K=N.querySelector("#drawio-open-tab");if(K)K.addEventListener("click",()=>{let z=new CustomEvent("drawio:open-tab",{bubbles:!0,detail:{path:j}});_.dispatchEvent(z)})}getContent(){return}isDirty(){return!1}focus(){}resize(){}dispose(){if(this.disposed)return;this.disposed=!0,this.container.innerHTML=""}}class i6{container;iframe=null;overlay=null;disposed=!1;filePath;fileName;format;xmlData="";fileLoaded=!1;editorReady=!1;loadSent=!1;saveChain=Promise.resolve();onMessageBound;constructor(_,$){this.container=_,this.filePath=$.path||"",this.fileName=this.filePath.split("/").pop()||"diagram.drawio",this.format=v5(this.filePath),this.onMessageBound=this.onMessage.bind(this);let j=document.createElement("div");j.style.cssText="position:relative;width:100%;height:100%;background:#1e1e1e;",this.overlay=document.createElement("div"),this.overlay.style.cssText="position:absolute;inset:0;display:flex;align-items:center;justify-content:center;color:#999;font:14px system-ui,sans-serif;z-index:1;pointer-events:none;",this.overlay.textContent="Loading draw.io editor…",j.appendChild(this.overlay);let N=`/drawio/index.html?embed=1&proto=json&spin=1&modified=0&noSaveBtn=1&noExitBtn=1&saveAndExit=0&ui=dark&dark=${window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?"1":"0"}`;this.iframe=document.createElement("iframe"),this.iframe.src=N,this.iframe.style.cssText="width:100%;height:100%;border:none;background:#1e1e1e;position:relative;z-index:0;",this.iframe.addEventListener("load",()=>{let K=()=>{if(!this.iframe?.contentWindow||this.disposed)return;if(m5(this.iframe.contentWindow))return;setTimeout(K,250)};K()}),j.appendChild(this.iframe),_.appendChild(j),window.addEventListener("message",this.onMessageBound),this.loadFile()}async loadFile(){if(!this.filePath){this.xmlData=M1,this.fileLoaded=!0,this.trySendLoad();return}try{let _=await fetch(`/workspace/raw?path=${encodeURIComponent(this.filePath)}`);if(_.ok)if(this.format==="xmlsvg")this.xmlData=await c6(_,"image/svg+xml");else if(this.format==="xmlpng")this.xmlData=await c6(_,"image/png");else this.xmlData=p6(await _.text());else if(_.status===404)this.xmlData=M1;else throw Error(`HTTP ${_.status}`);this.fileLoaded=!0,this.trySendLoad()}catch(_){if(this.overlay)this.overlay.textContent=`Failed to load: ${_ instanceof Error?_.message:String(_)}`}}trySendLoad(){if(this.disposed||this.loadSent||!this.editorReady||!this.fileLoaded||!this.iframe?.contentWindow)return;if(this.loadSent=!0,this.iframe.contentWindow.postMessage(JSON.stringify({action:"load",xml:this.format==="xml"?p6(this.xmlData):this.xmlData,autosave:1,saveAndExit:"0",noSaveBtn:"1",noExitBtn:"1",title:this.fileName}),"*"),this.overlay)this.overlay.style.display="none"}queueSave(_,$){if(!this.filePath)return;this.saveChain=this.saveChain.then(async()=>{let j=await fetch("/drawio/save",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({path:this.filePath,format:_.format||this.format,xml:_.xml,data:_.data,mimeType:_.mimeType,filename:_.filename,base64Encoded:_.base64Encoded})});if(!j.ok)throw Error(`HTTP ${j.status}`);if($&&this.iframe?.contentWindow)this.iframe.contentWindow.postMessage(JSON.stringify({action:"status",message:"Saved",modified:!1}),"*")}).catch((j)=>{if(console.error("[drawio-pane] save failed:",j),this.overlay)this.overlay.style.display="flex",this.overlay.textContent=`Save failed: ${j instanceof Error?j.message:String(j)}`})}onMessage(_){if(this.disposed||_.source!==this.iframe?.contentWindow)return;let $;try{$=typeof _.data==="string"?JSON.parse(_.data):_.data}catch{return}switch($?.event){case"init":this.editorReady=!0,this.trySendLoad();break;case"autosave":if(this.format==="xml"){if(typeof $.xml==="string")this.queueSave({xml:$.xml,format:"xml"},!1)}else if(typeof $.xml==="string")this.xmlData=$.xml;break;case"save":if(this.format==="xml"){if(typeof $.xml==="string")this.queueSave({xml:$.xml,format:"xml"},!0)}else if(typeof $.xml==="string"&&this.iframe?.contentWindow)this.xmlData=$.xml,this.iframe.contentWindow.postMessage(JSON.stringify({action:"export",format:this.format,xml:$.xml,spinKey:"export"}),"*");break;case"export":if(typeof $.data==="string")this.queueSave({data:$.data,format:this.format,xml:typeof $.xml==="string"?$.xml:void 0},!0);break;case"workspace-export":if(typeof $.data==="string")this.queueSave({data:$.data,xml:typeof $.xml==="string"?$.xml:void 0,mimeType:typeof $.mimeType==="string"?$.mimeType:void 0,filename:typeof $.filename==="string"?$.filename:void 0,base64Encoded:Boolean($.base64Encoded),format:this.format},!0);break;case"exit":default:break}}getContent(){return}isDirty(){return!1}focus(){this.iframe?.focus()}resize(){}dispose(){if(this.disposed)return;if(this.disposed=!0,window.removeEventListener("message",this.onMessageBound),this.iframe)this.iframe.src="about:blank",this.iframe=null;this.overlay=null,this.container.innerHTML=""}}var C1={id:"drawio-editor",label:"Draw.io Editor",icon:"git-merge",capabilities:["edit","preview"],placement:"tabs",canHandle(_){if(!f5(_?.path))return!1;return 60},mount(_,$){if($?.mode==="view")return new h6(_,$);return new i6(_,$)}};class l6{tabs=new Map;activeId=null;mruOrder=[];listeners=new Set;onChange(_){return this.listeners.add(_),()=>this.listeners.delete(_)}notify(){let _=this.getTabs(),$=this.activeId;for(let j of this.listeners)try{j(_,$)}catch{}}open(_,$){let j=this.tabs.get(_);if(!j)j={id:_,label:$||_.split("/").pop()||_,path:_,dirty:!1,pinned:!1},this.tabs.set(_,j);return this.activate(_),j}activate(_){if(!this.tabs.has(_))return;this.activeId=_,this.mruOrder=[_,...this.mruOrder.filter(($)=>$!==_)],this.notify()}close(_){if(!this.tabs.get(_))return!1;if(this.tabs.delete(_),this.mruOrder=this.mruOrder.filter((j)=>j!==_),this.activeId===_)this.activeId=this.mruOrder[0]||null;return this.notify(),!0}closeOthers(_){for(let[$,j]of this.tabs)if($!==_&&!j.pinned)this.tabs.delete($),this.mruOrder=this.mruOrder.filter((Z)=>Z!==$);if(this.activeId&&!this.tabs.has(this.activeId))this.activeId=_;this.notify()}closeAll(){for(let[_,$]of this.tabs)if(!$.pinned)this.tabs.delete(_),this.mruOrder=this.mruOrder.filter((j)=>j!==_);if(this.activeId&&!this.tabs.has(this.activeId))this.activeId=this.mruOrder[0]||null;this.notify()}setDirty(_,$){let j=this.tabs.get(_);if(!j||j.dirty===$)return;j.dirty=$,this.notify()}togglePin(_){let $=this.tabs.get(_);if(!$)return;$.pinned=!$.pinned,this.notify()}saveViewState(_,$){let j=this.tabs.get(_);if(j)j.viewState=$}getViewState(_){return this.tabs.get(_)?.viewState}rename(_,$,j){let Z=this.tabs.get(_);if(!Z)return;if(this.tabs.delete(_),Z.id=$,Z.path=$,Z.label=j||$.split("/").pop()||$,this.tabs.set($,Z),this.mruOrder=this.mruOrder.map((N)=>N===_?$:N),this.activeId===_)this.activeId=$;this.notify()}getTabs(){return Array.from(this.tabs.values())}getActiveId(){return this.activeId}getActive(){return this.activeId?this.tabs.get(this.activeId)||null:null}get(_){return this.tabs.get(_)}get size(){return this.tabs.size}hasUnsaved(){for(let _ of this.tabs.values())if(_.dirty)return!0;return!1}getDirtyTabs(){return Array.from(this.tabs.values()).filter((_)=>_.dirty)}nextTab(){let _=this.getTabs();if(_.length<=1)return;let $=_.findIndex((Z)=>Z.id===this.activeId),j=_[($+1)%_.length];this.activate(j.id)}prevTab(){let _=this.getTabs();if(_.length<=1)return;let $=_.findIndex((Z)=>Z.id===this.activeId),j=_[($-1+_.length)%_.length];this.activate(j.id)}mruSwitch(){if(this.mruOrder.length>1)this.activate(this.mruOrder[1])}}var p_=new l6;var X4="workspaceExplorerScale",g5=["compact","default","comfortable"],p5=new Set(g5),c5={compact:{indentPx:14},default:{indentPx:16},comfortable:{indentPx:18}};function n6(_,$="default"){if(typeof _!=="string")return $;let j=_.trim().toLowerCase();return p5.has(j)?j:$}function I1(){if(typeof window>"u")return{width:0,isTouch:!1};let _=Number(window.innerWidth)||0,$=Boolean(window.matchMedia?.("(pointer: coarse)")?.matches),j=Boolean(window.matchMedia?.("(hover: none)")?.matches),Z=Number(globalThis.navigator?.maxTouchPoints||0)>0;return{width:_,isTouch:$||Z&&j}}function h5(_={}){let $=Math.max(0,Number(_.width)||0);if(Boolean(_.isTouch))return"comfortable";if($>0&&$<1180)return"comfortable";return"default"}function i5(_,$={}){if(Boolean($.isTouch)&&_==="compact")return"default";return _}function b1(_={}){let $=h5(_),j=_.stored?n6(_.stored,$):$;return i5(j,_)}function d6(_){return c5[n6(_)]}var l5=60000,a6=(_)=>{if(!_||!_.name)return!1;if(_.path===".")return!1;return _.name.startsWith(".")};function t6(_,$,j,Z=0,N=[]){if(!j&&a6(_))return N;if(!_)return N;if(N.push({node:_,depth:Z}),_.type==="dir"&&_.children&&$.has(_.path))for(let K of _.children)t6(K,$,j,Z+1,N);return N}function s6(_,$,j){if(!_)return"";let Z=[],N=(K)=>{if(!j&&a6(K))return;if(Z.push(K.type==="dir"?`d:${K.path}`:`f:${K.path}`),K.children&&$?.has(K.path))for(let z of K.children)N(z)};return N(_),Z.join("|")}function f1(_,$){if(!$)return null;if(!_)return $;if(_.path!==$.path||_.type!==$.type)return $;let j=Array.isArray(_.children)?_.children:null,Z=Array.isArray($.children)?$.children:null;if(!Z)return _;let N=j?new Map(j.map((W)=>[W?.path,W])):new Map,K=!j||j.length!==Z.length,z=Z.map((W)=>{let q=f1(N.get(W.path),W);if(q!==N.get(W.path))K=!0;return q});return K?{...$,children:z}:_}function x1(_,$,j){if(!_)return _;if(_.path===$)return f1(_,j);if(!Array.isArray(_.children))return _;let Z=!1,N=_.children.map((K)=>{let z=x1(K,$,j);if(z!==K)Z=!0;return z});return Z?{..._,children:N}:_}var e6=4,S1=14,n5=8,d5=16;function _8(_){if(!_)return 0;if(_.type==="file"){let Z=Math.max(0,Number(_.size)||0);return _.__bytes=Z,Z}let $=Array.isArray(_.children)?_.children:[],j=0;for(let Z of $)j+=_8(Z);return _.__bytes=j,j}function $8(_,$=0){let j=Math.max(0,Number(_?.__bytes??_?.size??0)),Z={name:_?.name||_?.path||".",path:_?.path||".",size:j,children:[]};if(!_||_.type!=="dir"||$>=e6)return Z;let N=Array.isArray(_.children)?_.children:[],K=[];for(let W of N){let q=Math.max(0,Number(W?.__bytes??W?.size??0));if(q<=0)continue;if(W.type==="dir")K.push({kind:"dir",node:W,size:q});else K.push({kind:"file",name:W.name,path:W.path,size:q})}K.sort((W,q)=>q.size-W.size);let z=K;if(K.length>S1){let W=K.slice(0,S1-1),q=K.slice(S1-1),V=q.reduce((B,Y)=>B+Y.size,0);W.push({kind:"other",name:`+${q.length} more`,path:`${Z.path}/[other]`,size:V}),z=W}return Z.children=z.map((W)=>{if(W.kind==="dir")return $8(W.node,$+1);return{name:W.name,path:W.path,size:W.size,children:[]}}),Z}function o6(){if(typeof window>"u"||typeof document>"u")return!1;let{documentElement:_,body:$}=document,j=_?.getAttribute?.("data-theme")?.toLowerCase?.()||"";if(j==="dark")return!0;if(j==="light")return!1;if(_?.classList?.contains("dark")||$?.classList?.contains("dark"))return!0;if(_?.classList?.contains("light")||$?.classList?.contains("light"))return!1;return Boolean(window.matchMedia?.("(prefers-color-scheme: dark)")?.matches)}function j8(_,$,j){let Z=((_+Math.PI/2)*180/Math.PI+360)%360,N=j?Math.max(30,70-$*10):Math.max(34,66-$*8),K=j?Math.min(70,45+$*5):Math.min(60,42+$*4);return`hsl(${Z.toFixed(1)} ${N}% ${K}%)`}function V4(_,$,j,Z){return{x:_+j*Math.cos(Z),y:$+j*Math.sin(Z)}}function R1(_,$,j,Z,N,K){let z=Math.PI*2-0.0001,W=K-N>z?N+z:K,q=V4(_,$,Z,N),V=V4(_,$,Z,W),B=V4(_,$,j,W),Y=V4(_,$,j,N),U=W-N>Math.PI?1:0;return[`M ${q.x.toFixed(3)} ${q.y.toFixed(3)}`,`A ${Z} ${Z} 0 ${U} 1 ${V.x.toFixed(3)} ${V.y.toFixed(3)}`,`L ${B.x.toFixed(3)} ${B.y.toFixed(3)}`,`A ${j} ${j} 0 ${U} 0 ${Y.x.toFixed(3)} ${Y.y.toFixed(3)}`,"Z"].join(" ")}var Z8={1:[26,46],2:[48,68],3:[70,90],4:[92,112]};function N8(_,$,j){let Z=[],N=[],K=Math.max(0,Number($)||0),z=(W,q,V,B)=>{let Y=Array.isArray(W?.children)?W.children:[];if(!Y.length)return;let U=Math.max(0,Number(W.size)||0);if(U<=0)return;let C=V-q,m=q;Y.forEach((v,R)=>{let E=Math.max(0,Number(v.size)||0);if(E<=0)return;let F=E/U,S=m,M=R===Y.length-1?V:m+C*F;if(m=M,M-S<0.003)return;let i=Z8[B];if(i){let t=j8(S,B,j);if(Z.push({key:v.path,path:v.path,label:v.name,size:E,color:t,depth:B,startAngle:S,endAngle:M,innerRadius:i[0],outerRadius:i[1],d:R1(120,120,i[0],i[1],S,M)}),B===1)N.push({key:v.path,name:v.name,size:E,pct:K>0?E/K*100:0,color:t})}if(B<e6)z(v,S,M,B+1)})};return z(_,-Math.PI/2,Math.PI*3/2,1),{segments:Z,legend:N}}function T1(_,$){if(!_||!$)return null;if(_.path===$)return _;let j=Array.isArray(_.children)?_.children:[];for(let Z of j){let N=T1(Z,$);if(N)return N}return null}function K8(_,$,j,Z){if(!j||j<=0)return{segments:[],legend:[]};let N=Z8[1];if(!N)return{segments:[],legend:[]};let K=-Math.PI/2,z=Math.PI*3/2,W=j8(K,1,Z),V=`${$||"."}/[files]`;return{segments:[{key:V,path:V,label:_,size:j,color:W,depth:1,startAngle:K,endAngle:z,innerRadius:N[0],outerRadius:N[1],d:R1(120,120,N[0],N[1],K,z)}],legend:[{key:V,name:_,size:j,pct:100,color:W}]}}function r6(_,$=!1,j=!1){if(!_)return null;let Z=_8(_),N=$8(_,0),K=N.size||Z,{segments:z,legend:W}=N8(N,K,j);if(!z.length&&K>0){let q=K8("[files]",N.path,K,j);z=q.segments,W=q.legend}return{root:N,totalSize:K,segments:z,legend:W,truncated:$,isDarkTheme:j}}function s5({payload:_}){if(!_)return null;let[$,j]=T(null),[Z,N]=T(_?.root?.path||"."),[K,z]=T(()=>[_?.root?.path||"."]),[W,q]=T(!1);f(()=>{let h=_?.root?.path||".";N(h),z([h]),j(null)},[_?.root?.path,_?.totalSize]),f(()=>{if(!Z)return;q(!0);let h=setTimeout(()=>q(!1),180);return()=>clearTimeout(h)},[Z]);let V=l_(()=>{return T1(_.root,Z)||_.root},[_?.root,Z]),B=V?.size||_.totalSize||0,{segments:Y,legend:U}=l_(()=>{let h=N8(V,B,_.isDarkTheme);if(h.segments.length>0)return h;if(B<=0)return h;let B_=V?.children?.length?"Total":"[files]";return K8(B_,V?.path||_?.root?.path||".",B,_.isDarkTheme)},[V,B,_.isDarkTheme,_?.root?.path]),[C,m]=T(Y),v=D(new Map),R=D(0);f(()=>{let h=v.current,B_=new Map(Y.map((z_)=>[z_.key,z_])),c_=performance.now(),o=220,d=(z_)=>{let $_=Math.min(1,(z_-c_)/220),Y_=$_*(2-$_),M_=Y.map((Q_)=>{let U_=h.get(Q_.key)||{startAngle:Q_.startAngle,endAngle:Q_.startAngle,innerRadius:Q_.innerRadius,outerRadius:Q_.innerRadius},R_=(O0,X_)=>O0+(X_-O0)*Y_,v_=R_(U_.startAngle,Q_.startAngle),W_=R_(U_.endAngle,Q_.endAngle),I_=R_(U_.innerRadius,Q_.innerRadius),S_=R_(U_.outerRadius,Q_.outerRadius);return{...Q_,d:R1(120,120,I_,S_,v_,W_)}});if(m(M_),$_<1)R.current=requestAnimationFrame(d)};if(R.current)cancelAnimationFrame(R.current);return R.current=requestAnimationFrame(d),v.current=B_,()=>{if(R.current)cancelAnimationFrame(R.current)}},[Y]);let E=C.length?C:Y,F=B>0?Y$(B):"0 B",S=V?.name||"",i=(S&&S!=="."?S:"Total")||"Total",t=F,N_=K.length>1,l=(h)=>{if(!h?.path)return;let B_=T1(_.root,h.path);if(!B_||!Array.isArray(B_.children)||B_.children.length===0)return;z((c_)=>[...c_,B_.path]),N(B_.path),j(null)},K_=()=>{if(!N_)return;z((h)=>{let B_=h.slice(0,-1);return N(B_[B_.length-1]||_?.root?.path||"."),B_}),j(null)};return L`
        <div class="workspace-folder-starburst">
            <svg viewBox="0 0 240 240" class=${`workspace-folder-starburst-svg${W?" is-zooming":""}`} role="img"
                aria-label=${`Folder sizes for ${V?.path||_?.root?.path||"."}`}
                data-segments=${E.length}
                data-base-size=${B}>
                ${E.map((h)=>L`
                    <path
                        key=${h.key}
                        d=${h.d}
                        fill=${h.color}
                        stroke="var(--bg-primary)"
                        stroke-width="1"
                        class=${`workspace-folder-starburst-segment${$?.key===h.key?" is-hovered":""}`}
                        onMouseEnter=${()=>j(h)}
                        onMouseLeave=${()=>j(null)}
                        onTouchStart=${()=>j(h)}
                        onTouchEnd=${()=>j(null)}
                        onClick=${()=>l(h)}
                    >
                        <title>${h.label} — ${Y$(h.size)}</title>
                    </path>
                `)}
                <g
                    class=${`workspace-folder-starburst-center-hit${N_?" is-drill":""}`}
                    onClick=${K_}
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
                    <text x="120" y="130" text-anchor="middle" class="workspace-folder-starburst-total-value">${t}</text>
                </g>
            </svg>
            ${U.length>0&&L`
                <div class="workspace-folder-starburst-legend">
                    ${U.slice(0,8).map((h)=>L`
                        <div key=${h.key} class="workspace-folder-starburst-legend-item">
                            <span class="workspace-folder-starburst-swatch" style=${`background:${h.color}`}></span>
                            <span class="workspace-folder-starburst-name" title=${h.name}>${h.name}</span>
                            <span class="workspace-folder-starburst-size">${Y$(h.size)}</span>
                            <span class="workspace-folder-starburst-pct">${h.pct.toFixed(1)}%</span>
                        </div>
                    `)}
                </div>
            `}
            ${_.truncated&&L`
                <div class="workspace-folder-starburst-note">Preview is truncated by tree depth/entry limits.</div>
            `}
        </div>
    `}function o5({mediaId:_}){let[$,j]=T(null);if(f(()=>{if(!_)return;G2(_).then(j).catch(()=>{})},[_]),!$)return null;let Z=$.filename||"file",N=$.metadata?.size?Y$($.metadata.size):"";return L`
        <a href=${N$(_)} download=${Z} class="file-attachment"
            onClick=${(K)=>K.stopPropagation()}>
            <svg class="file-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                <polyline points="14 2 14 8 20 8"/>
                <line x1="16" y1="13" x2="8" y2="13"/>
                <line x1="16" y1="17" x2="8" y2="17"/>
                <polyline points="10 9 9 9 8 9"/>
            </svg>
            <div class="file-info">
                <span class="file-name">${Z}</span>
                ${N&&L`<span class="file-size">${N}</span>`}
            </div>
            <svg class="download-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                <polyline points="7 10 12 15 17 10"/>
                <line x1="12" y1="15" x2="12" y2="3"/>
            </svg>
        </a>
    `}function z8({onFileSelect:_,visible:$=!0,active:j=void 0,onOpenEditor:Z,onOpenTerminalTab:N,onToggleTerminal:K,terminalVisible:z=!1}){let[W,q]=T(null),[V,B]=T(new Set(["."])),[Y,U]=T(null),[C,m]=T(null),[v,R]=T(""),[E,F]=T(null),[S,M]=T(null),[i,t]=T(!0),[N_,l]=T(!1),[K_,h]=T(null),[B_,c_]=T(()=>W2("workspaceShowHidden",!1)),[o,d]=T(!1),[z_,$_]=T(null),[Y_,M_]=T(null),[Q_,A_]=T(null),[U_,R_]=T(!1),[v_,W_]=T(null),[I_,S_]=T(()=>o6()),[O0,X_]=T(()=>b1({stored:z$(X4),...I1()})),[__,C_]=T(!1),G_=D(V),D_=D(""),y_=D(null),n_=D(0),d_=D(new Set),s_=D(null),H_=D(new Map),x_=D(_),T_=D(Z),N0=D(null),b_=D(null),D0=D(null),o_=D(null),K0=D(null),i0=D(null),U0=D("."),f_=D(null),B0=D({path:null,dragging:!1,startX:0,startY:0}),r_=D({path:null,dragging:!1,startX:0,startY:0}),z0=D({path:null,timer:0}),E0=D(!1),h_=D(0),y0=D(new Map),P0=D(null),L_=D(null),I=D(null),e=D(null),k_=D(null),w_=D(null),Y0=D(B_),f0=D($),M0=D(j??$),L0=D(0),k0=D(Q_),r0=D(o),G$=D(z_),W$=D(null),C0=D({x:0,y:0}),R0=D(0),h$=D(null),l0=D(Y),A0=D(C),I$=D(null),X$=D(null),x0=D(E);x_.current=_,T_.current=Z,f(()=>{G_.current=V},[V]),f(()=>{Y0.current=B_},[B_]),f(()=>{f0.current=$},[$]),f(()=>{M0.current=j??$},[j,$]),f(()=>{k0.current=Q_},[Q_]),f(()=>{if(typeof window>"u")return;let O=()=>{X_(b1({stored:z$(X4),...I1()}))};O();let J=()=>O(),A=()=>O(),k=(u)=>{if(!u||u.key===null||u.key===X4)O()};window.addEventListener("resize",J),window.addEventListener("focus",A),window.addEventListener("storage",k);let g=window.matchMedia?.("(pointer: coarse)"),s=window.matchMedia?.("(hover: none)"),r=(u,q_)=>{if(!u)return;if(u.addEventListener)u.addEventListener("change",q_);else if(u.addListener)u.addListener(q_)},a=(u,q_)=>{if(!u)return;if(u.removeEventListener)u.removeEventListener("change",q_);else if(u.removeListener)u.removeListener(q_)};return r(g,J),r(s,J),()=>{window.removeEventListener("resize",J),window.removeEventListener("focus",A),window.removeEventListener("storage",k),a(g,J),a(s,J)}},[]),f(()=>{let O=(J)=>{let A=J?.detail?.path;if(!A)return;let k=A.split("/"),g=[];for(let s=1;s<k.length;s++)g.push(k.slice(0,s).join("/"));if(g.length)B((s)=>{let r=new Set(s);r.add(".");for(let a of g)r.add(a);return r});U(A),requestAnimationFrame(()=>{let s=document.querySelector(`[data-path="${CSS.escape(A)}"]`);if(s)s.scrollIntoView({block:"nearest",behavior:"smooth"})})};return window.addEventListener("workspace-reveal-path",O),()=>window.removeEventListener("workspace-reveal-path",O)},[]),f(()=>{r0.current=o},[o]),f(()=>{G$.current=z_},[z_]),f(()=>{l0.current=Y},[Y]),f(()=>{A0.current=C},[C]),f(()=>{x0.current=E},[E]),f(()=>{if(typeof window>"u"||typeof document>"u")return;let O=()=>S_(o6());O();let J=window.matchMedia?.("(prefers-color-scheme: dark)"),A=()=>O();if(J?.addEventListener)J.addEventListener("change",A);else if(J?.addListener)J.addListener(A);let k=typeof MutationObserver<"u"?new MutationObserver(()=>O()):null;if(k?.observe(document.documentElement,{attributes:!0,attributeFilter:["class","data-theme"]}),document.body)k?.observe(document.body,{attributes:!0,attributeFilter:["class","data-theme"]});return()=>{if(J?.removeEventListener)J.removeEventListener("change",A);else if(J?.removeListener)J.removeListener(A);k?.disconnect()}},[]),f(()=>{if(!C)return;let O=K0.current;if(!O)return;let J=requestAnimationFrame(()=>{try{O.focus(),O.select()}catch{}});return()=>cancelAnimationFrame(J)},[C]),f(()=>{if(!__)return;let O=(A)=>{let k=A?.target;if(!(k instanceof Element))return;if(k_.current?.contains(k))return;if(w_.current?.contains(k))return;C_(!1)},J=(A)=>{if(A?.key==="Escape")C_(!1),w_.current?.focus?.()};return document.addEventListener("mousedown",O),document.addEventListener("touchstart",O,{passive:!0}),document.addEventListener("keydown",J),()=>{document.removeEventListener("mousedown",O),document.removeEventListener("touchstart",O),document.removeEventListener("keydown",J)}},[__]);let $2=async(O)=>{l(!0),F(null),M(null);try{let J=await l4(O,20000);F(J)}catch(J){F({error:J.message||"Failed to load preview"})}finally{l(!1)}};N0.current=$2;let v0=async()=>{if(!f0.current)return;try{let O=await E2("",1,Y0.current),J=s6(O.root,G_.current,Y0.current);if(J===D_.current){t(!1);return}if(D_.current=J,y_.current=O.root,!n_.current)n_.current=requestAnimationFrame(()=>{n_.current=0,q((A)=>f1(A,y_.current)),t(!1)})}catch(O){h(O.message||"Failed to load workspace"),t(!1)}},i$=async(O)=>{if(!O)return;if(d_.current.has(O))return;d_.current.add(O);try{let J=await E2(O,1,Y0.current);q((A)=>x1(A,O,J.root))}catch(J){h(J.message||"Failed to load workspace")}finally{d_.current.delete(O)}};b_.current=i$;let i_=y(()=>{let O=Y;if(!O)return".";let J=H_.current?.get(O);if(J&&J.type==="dir")return J.path;if(O==="."||!O.includes("/"))return".";let A=O.split("/");return A.pop(),A.join("/")||"."},[Y]),J$=y((O)=>{let J=O?.closest?.(".workspace-row");if(!J)return null;let A=J.dataset.path,k=J.dataset.type;if(!A)return null;if(k==="dir")return A;if(A.includes("/")){let g=A.split("/");return g.pop(),g.join("/")||"."}return"."},[]),H$=y((O)=>{return J$(O?.target||null)},[J$]),G0=y((O)=>{k0.current=O,A_(O)},[]),F0=y(()=>{let O=z0.current;if(O?.timer)clearTimeout(O.timer);z0.current={path:null,timer:0}},[]),a0=y((O)=>{if(!O||O==="."){F0();return}let J=H_.current?.get(O);if(!J||J.type!=="dir"){F0();return}if(G_.current?.has(O)){F0();return}if(z0.current?.path===O)return;F0();let A=setTimeout(()=>{z0.current={path:null,timer:0},b_.current?.(O),B((k)=>{let g=new Set(k);return g.add(O),g})},600);z0.current={path:O,timer:A}},[F0]),D$=y((O,J)=>{if(C0.current={x:O,y:J},R0.current)return;R0.current=requestAnimationFrame(()=>{R0.current=0;let A=W$.current;if(!A)return;let k=C0.current;A.style.transform=`translate(${k.x+12}px, ${k.y+12}px)`})},[]),E$=y((O)=>{if(!O)return;let A=(H_.current?.get(O)?.name||O.split("/").pop()||O).trim();if(!A)return;M_({path:O,label:A})},[]),l$=y(()=>{if(M_(null),R0.current)cancelAnimationFrame(R0.current),R0.current=0;if(W$.current)W$.current.style.transform="translate(-9999px, -9999px)"},[]),R$=y((O)=>{if(!O)return".";let J=H_.current?.get(O);if(J&&J.type==="dir")return J.path;if(O==="."||!O.includes("/"))return".";let A=O.split("/");return A.pop(),A.join("/")||"."},[]),$0=y(()=>{m(null),R("")},[]),V$=y((O)=>{if(!O)return;let A=(H_.current?.get(O)?.name||O.split("/").pop()||O).trim();if(!A||O===".")return;m(O),R(A)},[]),y$=y(async()=>{let O=A0.current;if(!O)return;let J=(v||"").trim();if(!J){$0();return}let A=H_.current?.get(O),k=(A?.name||O.split("/").pop()||O).trim();if(J===k){$0();return}try{let s=(await s4(O,J))?.path||O,r=O.includes("/")?O.split("/").slice(0,-1).join("/")||".":".";if($0(),h(null),window.dispatchEvent(new CustomEvent("workspace-file-renamed",{detail:{oldPath:O,newPath:s,type:A?.type||"file"}})),A?.type==="dir")B((a)=>{let u=new Set;for(let q_ of a)if(q_===O)u.add(s);else if(q_.startsWith(`${O}/`))u.add(`${s}${q_.slice(O.length)}`);else u.add(q_);return u});if(U(s),A?.type==="dir")F(null),l(!1),M(null);else N0.current?.(s);b_.current?.(r)}catch(g){h(g?.message||"Failed to rename file")}},[$0,v]),I0=y(async(O)=>{let k=O||".";for(let g=0;g<50;g+=1){let r=`untitled${g===0?"":`-${g}`}.md`;try{let u=(await d4(k,r,""))?.path||(k==="."?r:`${k}/${r}`);if(k&&k!==".")B((q_)=>new Set([...q_,k]));U(u),h(null),b_.current?.(k),N0.current?.(u);return}catch(a){if(a?.status===409||a?.code==="file_exists")continue;h(a?.message||"Failed to create file");return}}h("Failed to create file (untitled name already in use).")},[]),u0=y((O)=>{if(O?.stopPropagation?.(),U_)return;let J=R$(l0.current);I0(J)},[U_,R$,I0]);f(()=>{if(typeof window>"u")return;let O=(J)=>{let A=J?.detail?.updates||[];if(!Array.isArray(A)||A.length===0)return;q((a)=>{let u=a;for(let q_ of A){if(!q_?.root)continue;if(!u||q_.path==="."||!q_.path)u=q_.root;else u=x1(u,q_.path,q_.root)}if(u)D_.current=s6(u,G_.current,Y0.current);return t(!1),u});let k=l0.current;if(Boolean(k)&&A.some((a)=>{let u=a?.path||"";if(!u||u===".")return!0;return k===u||k.startsWith(`${u}/`)||u.startsWith(`${k}/`)}))y0.current.clear();if(!k||!x0.current)return;let s=H_.current?.get(k);if(s&&s.type==="dir")return;if(A.some((a)=>{let u=a?.path||"";if(!u||u===".")return!0;return k===u||k.startsWith(`${u}/`)}))N0.current?.(k)};return window.addEventListener("workspace-update",O),()=>window.removeEventListener("workspace-update",O)},[]),s_.current=v0;let j2=D(()=>{if(typeof window>"u")return;let O=window.matchMedia("(min-width: 1024px) and (orientation: landscape)"),J=M0.current??f0.current,A=document.visibilityState!=="hidden"&&(J||O.matches&&f0.current);y2(A,Y0.current).catch(()=>{})}).current,b0=D(0),n$=D(()=>{if(b0.current)clearTimeout(b0.current);b0.current=setTimeout(()=>{b0.current=0,j2()},250)}).current;f(()=>{if(f0.current)s_.current?.();n$()},[$,j]),f(()=>{s_.current(),j2();let O=setInterval(()=>s_.current(),l5),J=X2("previewHeight",null),A=Number.isFinite(J)?Math.min(Math.max(J,80),600):280;if(h_.current=A,D0.current)D0.current.style.setProperty("--preview-height",`${A}px`);let k=window.matchMedia("(min-width: 1024px) and (orientation: landscape)"),g=()=>n$();if(k.addEventListener)k.addEventListener("change",g);else if(k.addListener)k.addListener(g);return document.addEventListener("visibilitychange",g),()=>{if(clearInterval(O),n_.current)cancelAnimationFrame(n_.current),n_.current=0;if(k.removeEventListener)k.removeEventListener("change",g);else if(k.removeListener)k.removeListener(g);if(document.removeEventListener("visibilitychange",g),b0.current)clearTimeout(b0.current),b0.current=0;if(f_.current)clearTimeout(f_.current),f_.current=null;y2(!1,Y0.current).catch(()=>{})}},[]);let q$=l_(()=>t6(W,V,B_),[W,V,B_]),O$=l_(()=>new Map(q$.map((O)=>[O.node.path,O.node])),[q$]),Z2=l_(()=>d6(O0),[O0]);H_.current=O$;let u_=(Y?H_.current.get(Y):null)?.type==="dir";f(()=>{if(!Y||!u_){W_(null),P0.current=null,L_.current=null;return}let O=Y,J=`${B_?"hidden":"visible"}:${Y}`,A=y0.current,k=A.get(J);if(k?.root){A.delete(J),A.set(J,k);let r=r6(k.root,Boolean(k.truncated),I_);if(r)P0.current=r,L_.current=Y,W_({loading:!1,error:null,payload:r});return}let g=P0.current,s=L_.current;W_({loading:!0,error:null,payload:s===Y?g:null}),E2(Y,n5,B_).then((r)=>{if(l0.current!==O)return;let a={root:r?.root,truncated:Boolean(r?.truncated)};A.delete(J),A.set(J,a);while(A.size>d5){let q_=A.keys().next().value;if(!q_)break;A.delete(q_)}let u=r6(a.root,a.truncated,I_);P0.current=u,L_.current=Y,W_({loading:!1,error:null,payload:u})}).catch((r)=>{if(l0.current!==O)return;W_({loading:!1,error:r?.message||"Failed to load folder size chart",payload:s===Y?g:null})})},[Y,u_,B_,I_]);let S0=Boolean(E&&E.kind==="text"&&!u_&&(!E.size||E.size<=262144)),m0=S0?"Open in editor":E?.size>262144?"File too large to edit":"File is not editable",d$=Boolean(Y&&Y!=="."),s$=Boolean(Y&&!u_),k$=Boolean(Y&&!u_),A$=Y&&u_?t2(Y,B_):null,g0=y(()=>C_(!1),[]),j0=y(async(O)=>{g0();try{await O?.()}catch{}},[g0]);f(()=>{let O=I.current;if(e.current)e.current.dispose(),e.current=null;if(!O)return;if(O.innerHTML="",!Y||u_||!E||E.error)return;let J={path:Y,content:typeof E.text==="string"?E.text:void 0,mtime:E.mtime,size:E.size,preview:E,mode:"view"},A=e_.resolve(J)||e_.get("workspace-preview-default");if(!A)return;let k=A.mount(O,J);return e.current=k,()=>{if(e.current===k)k.dispose(),e.current=null;O.innerHTML=""}},[Y,u_,E]);let Q0=(O)=>{let J=O?.target;if(J instanceof Element)return J;return J?.parentElement||null},B$=(O)=>{return Boolean(O?.closest?.(".workspace-node-icon, .workspace-label-text"))},b$=D((O)=>{if(X$.current)clearTimeout(X$.current),X$.current=null;let A=Q0(O)?.closest?.("[data-path]");if(!A)return;let k=A.dataset.path;if(A.dataset.type==="dir"||!k)return;if(A0.current===k)$0();T_.current?.(k)}).current,o$=D((O)=>{if(E0.current){E0.current=!1;return}let J=Q0(O),A=J?.closest?.("[data-path]");if(o_.current?.focus?.(),!A)return;let k=A.dataset.path,g=A.dataset.type,s=Boolean(J?.closest?.(".workspace-caret")),r=Boolean(J?.closest?.("button"))||Boolean(J?.closest?.("a"))||Boolean(J?.closest?.("input")),a=l0.current===k,u=A0.current;if(u){if(u===k)return;$0()}let q_=g==="file"&&I$.current===k&&!s&&!r;if(a&&!s&&!r&&k!=="."&&!q_){if(X$.current)clearTimeout(X$.current);X$.current=setTimeout(()=>{X$.current=null,V$(k)},350);return}if(g==="dir"){if(I$.current=null,U(k),F(null),M(null),l(!1),!G_.current.has(k))b_.current?.(k);if(a&&!s)return;B((C$)=>{let X0=new Set(C$);if(X0.has(k))X0.delete(k);else X0.add(k);return X0})}else{I$.current=null,U(k);let H0=H_.current.get(k);if(H0)x_.current?.(H0.path,H0);N0.current?.(k)}}).current,w$=D(()=>{D_.current="",s_.current(),Array.from(G_.current||[]).filter((J)=>J&&J!==".").forEach((J)=>b_.current?.(J))}).current,t0=D(()=>{I$.current=null,U(null),F(null),M(null),l(!1)}).current,v$=D(()=>{c_((O)=>{let J=!O;if(typeof window<"u")_0("workspaceShowHidden",String(J));return Y0.current=J,y2(!0,J).catch(()=>{}),D_.current="",s_.current?.(),Array.from(G_.current||[]).filter((k)=>k&&k!==".").forEach((k)=>b_.current?.(k)),J})}).current,e0=D((O)=>{if(Q0(O)?.closest?.("[data-path]"))return;t0()}).current,w0=y(async(O)=>{if(!O)return;let J=O.split("/").pop()||O;if(!window.confirm(`Delete "${J}"? This cannot be undone.`))return;try{await r4(O);let k=O.includes("/")?O.split("/").slice(0,-1).join("/")||".":".";if(l0.current===O)t0();b_.current?.(k),h(null)}catch(k){F((g)=>({...g||{},error:k.message||"Failed to delete file"}))}},[t0]),P$=y((O)=>{let J=o_.current;if(!J||!O||typeof CSS>"u"||typeof CSS.escape!=="function")return;J.querySelector(`[data-path="${CSS.escape(O)}"]`)?.scrollIntoView?.({block:"nearest"})},[]),Q=y((O)=>{let J=q$;if(!J||J.length===0)return;let A=Y?J.findIndex((k)=>k.node.path===Y):-1;if(O.key==="ArrowDown"){O.preventDefault();let k=Math.min(A+1,J.length-1),g=J[k];if(!g)return;if(U(g.node.path),g.node.type!=="dir")x_.current?.(g.node.path,g.node),N0.current?.(g.node.path);else F(null),l(!1),M(null);P$(g.node.path);return}if(O.key==="ArrowUp"){O.preventDefault();let k=A<=0?0:A-1,g=J[k];if(!g)return;if(U(g.node.path),g.node.type!=="dir")x_.current?.(g.node.path,g.node),N0.current?.(g.node.path);else F(null),l(!1),M(null);P$(g.node.path);return}if(O.key==="ArrowRight"&&A>=0){let k=J[A];if(k?.node?.type==="dir"&&!V.has(k.node.path))O.preventDefault(),b_.current?.(k.node.path),B((g)=>new Set([...g,k.node.path]));return}if(O.key==="ArrowLeft"&&A>=0){let k=J[A];if(k?.node?.type==="dir"&&V.has(k.node.path))O.preventDefault(),B((g)=>{let s=new Set(g);return s.delete(k.node.path),s});return}if(O.key==="Enter"&&A>=0){O.preventDefault();let k=J[A];if(!k)return;let g=k.node.path;if(k.node.type==="dir"){if(!G_.current.has(g))b_.current?.(g);B((r)=>{let a=new Set(r);if(a.has(g))a.delete(g);else a.add(g);return a}),F(null),M(null),l(!1)}else x_.current?.(g,k.node),N0.current?.(g);return}if((O.key==="Delete"||O.key==="Backspace")&&A>=0){let k=J[A];if(!k||k.node.type==="dir")return;O.preventDefault(),w0(k.node.path);return}if(O.key==="Escape")O.preventDefault(),t0()},[t0,w0,V,q$,P$,Y]),b=y((O)=>{let J=Q0(O),A=J?.closest?.(".workspace-row");if(!A)return;let k=A.dataset.type,g=A.dataset.path;if(!g||g===".")return;if(A0.current===g)return;let s=O?.touches?.[0];if(!s)return;if(B0.current={path:B$(J)?g:null,dragging:!1,startX:s.clientX,startY:s.clientY},k!=="file")return;if(f_.current)clearTimeout(f_.current);f_.current=setTimeout(()=>{if(f_.current=null,B0.current?.dragging)return;w0(g)},600)},[w0]),x=y(()=>{if(f_.current)clearTimeout(f_.current),f_.current=null;let O=B0.current;if(O?.dragging&&O.path){let J=k0.current||i_(),A=h$.current;if(typeof A==="function")A(O.path,J)}B0.current={path:null,dragging:!1,startX:0,startY:0},L0.current=0,d(!1),$_(null),G0(null),F0(),l$()},[i_,l$,G0,F0]),n=y((O)=>{let J=B0.current,A=O?.touches?.[0];if(!A||!J?.path){if(f_.current)clearTimeout(f_.current),f_.current=null;return}let k=Math.abs(A.clientX-J.startX),g=Math.abs(A.clientY-J.startY),s=k>8||g>8;if(s&&f_.current)clearTimeout(f_.current),f_.current=null;if(!J.dragging&&s)J.dragging=!0,d(!0),$_("move"),E$(J.path);if(J.dragging){O.preventDefault(),D$(A.clientX,A.clientY);let r=document.elementFromPoint(A.clientX,A.clientY),a=J$(r)||i_();if(k0.current!==a)G0(a);a0(a)}},[J$,i_,E$,D$,G0,a0]),V_=D((O)=>{O.preventDefault();let J=D0.current;if(!J)return;let A=O.clientY,k=h_.current||280,g=O.currentTarget;g.classList.add("dragging"),document.body.style.cursor="row-resize",document.body.style.userSelect="none";let s=A,r=(u)=>{s=u.clientY;let q_=J.clientHeight-80,H0=Math.min(Math.max(k-(u.clientY-A),80),q_);J.style.setProperty("--preview-height",`${H0}px`),h_.current=H0},a=()=>{let u=J.clientHeight-80,q_=Math.min(Math.max(k-(s-A),80),u);h_.current=q_,g.classList.remove("dragging"),document.body.style.cursor="",document.body.style.userSelect="",_0("previewHeight",String(Math.round(q_))),document.removeEventListener("mousemove",r),document.removeEventListener("mouseup",a)};document.addEventListener("mousemove",r),document.addEventListener("mouseup",a)}).current,E_=D((O)=>{O.preventDefault();let J=D0.current;if(!J)return;let A=O.touches[0];if(!A)return;let k=A.clientY,g=h_.current||280,s=O.currentTarget;s.classList.add("dragging"),document.body.style.userSelect="none";let r=(u)=>{let q_=u.touches[0];if(!q_)return;u.preventDefault();let H0=J.clientHeight-80,C$=Math.min(Math.max(g-(q_.clientY-k),80),H0);J.style.setProperty("--preview-height",`${C$}px`),h_.current=C$},a=()=>{s.classList.remove("dragging"),document.body.style.userSelect="",_0("previewHeight",String(Math.round(h_.current||g))),document.removeEventListener("touchmove",r),document.removeEventListener("touchend",a),document.removeEventListener("touchcancel",a)};document.addEventListener("touchmove",r,{passive:!1}),document.addEventListener("touchend",a),document.addEventListener("touchcancel",a)}).current,P_=async()=>{if(!Y)return;try{let O=await n4(Y);if(O.media_id)M(O.media_id)}catch(O){F((J)=>({...J||{},error:O.message||"Failed to attach"}))}},J0=async()=>{if(!Y||u_)return;await w0(Y)},p0=(O)=>{return Array.from(O?.dataTransfer?.types||[]).includes("Files")},j_=y((O)=>{if(!p0(O))return;if(O.preventDefault(),L0.current+=1,!r0.current)d(!0);$_("upload");let J=H$(O)||i_();G0(J),a0(J)},[i_,H$,G0,a0]),_$=y((O)=>{if(!p0(O))return;if(O.preventDefault(),O.dataTransfer)O.dataTransfer.dropEffect="copy";if(!r0.current)d(!0);if(G$.current!=="upload")$_("upload");let J=H$(O)||i_();if(k0.current!==J)G0(J);a0(J)},[i_,H$,G0,a0]),u$=y((O)=>{if(!p0(O))return;if(O.preventDefault(),L0.current=Math.max(0,L0.current-1),L0.current===0)d(!1),$_(null),G0(null),F0()},[G0,F0]),L$=y(async(O,J=".")=>{let A=Array.from(O||[]);if(A.length===0)return;let k=J&&J!==""?J:".",g=k!=="."?k:"workspace root";R_(!0);try{let s=null;for(let r of A)try{s=await r2(r,k)}catch(a){let u=a?.status,q_=a?.code;if(u===409||q_==="file_exists"){let H0=r?.name||"file";if(!window.confirm(`"${H0}" already exists in ${g}. Overwrite?`))continue;s=await r2(r,k,{overwrite:!0})}else throw a}if(s?.path)I$.current=s.path,U(s.path),N0.current?.(s.path);b_.current?.(k)}catch(s){h(s.message||"Failed to upload file")}finally{R_(!1)}},[]),$$=y(async(O,J)=>{if(!O)return;let A=H_.current?.get(O);if(!A)return;let k=J&&J!==""?J:".",g=O.includes("/")?O.split("/").slice(0,-1).join("/")||".":".";if(k===g)return;try{let r=(await o4(O,k))?.path||O;if(A.type==="dir")B((a)=>{let u=new Set;for(let q_ of a)if(q_===O)u.add(r);else if(q_.startsWith(`${O}/`))u.add(`${r}${q_.slice(O.length)}`);else u.add(q_);return u});if(U(r),A.type==="dir")F(null),l(!1),M(null);else N0.current?.(r);b_.current?.(g),b_.current?.(k)}catch(s){h(s?.message||"Failed to move entry")}},[]);h$.current=$$;let B2=y(async(O)=>{if(!p0(O))return;O.preventDefault(),L0.current=0,d(!1),$_(null),A_(null),F0();let J=Array.from(O?.dataTransfer?.files||[]);if(J.length===0)return;let A=k0.current||H$(O)||i_();await L$(J,A)},[i_,H$,L$]),S$=y((O)=>{if(O?.stopPropagation?.(),U_)return;let J=O?.currentTarget?.dataset?.uploadTarget||".";U0.current=J,i0.current?.click()},[U_]),W0=y(()=>{if(U_)return;let O=l0.current,J=O?H_.current?.get(O):null;U0.current=J?.type==="dir"?J.path:".",i0.current?.click()},[U_]),r$=y(()=>{j0(()=>u0(null))},[j0,u0]),n0=y(()=>{j0(()=>W0())},[j0,W0]),c0=y(()=>{j0(()=>w$())},[j0,w$]),m$=y(()=>{j0(()=>v$())},[j0,v$]),M$=y(()=>{if(!Y||!S0)return;j0(()=>T_.current?.(Y,E))},[j0,Y,S0,E]),Z0=y(()=>{if(!Y||Y===".")return;j0(()=>V$(Y))},[j0,Y,V$]),d0=y(()=>{if(!Y||u_)return;j0(()=>J0())},[j0,Y,u_,J0]),L2=y(()=>{if(!Y||u_)return;j0(()=>P_())},[j0,Y,u_,P_]),g$=y(()=>{if(!A$)return;if(g0(),typeof window<"u")window.open(A$,"_blank","noopener")},[g0,A$]),T2=y(()=>{g0(),N?.()},[g0,N]),Q$=y(()=>{g0(),K?.()},[g0,K]),f2=y((O)=>{if(!O||O.button!==0)return;let J=O.currentTarget;if(!J||!J.dataset)return;let A=J.dataset.path;if(!A||A===".")return;if(A0.current===A)return;let k=Q0(O);if(k?.closest?.("button, a, input, .workspace-caret"))return;if(!B$(k))return;O.preventDefault(),r_.current={path:A,dragging:!1,startX:O.clientX,startY:O.clientY};let g=(r)=>{let a=r_.current;if(!a?.path)return;let u=Math.abs(r.clientX-a.startX),q_=Math.abs(r.clientY-a.startY),H0=u>4||q_>4;if(!a.dragging&&H0)a.dragging=!0,E0.current=!0,d(!0),$_("move"),E$(a.path),D$(r.clientX,r.clientY),document.body.style.userSelect="none",document.body.style.cursor="grabbing";if(a.dragging){r.preventDefault(),D$(r.clientX,r.clientY);let C$=document.elementFromPoint(r.clientX,r.clientY),X0=J$(C$)||i_();if(k0.current!==X0)G0(X0);a0(X0)}},s=()=>{document.removeEventListener("mousemove",g),document.removeEventListener("mouseup",s);let r=r_.current;if(r?.dragging&&r.path){let a=k0.current||i_(),u=h$.current;if(typeof u==="function")u(r.path,a)}r_.current={path:null,dragging:!1,startX:0,startY:0},L0.current=0,d(!1),$_(null),G0(null),F0(),l$(),document.body.style.userSelect="",document.body.style.cursor="",setTimeout(()=>{E0.current=!1},0)};document.addEventListener("mousemove",g),document.addEventListener("mouseup",s)},[J$,i_,E$,D$,l$,G0,a0,F0]),q4=y(async(O)=>{let J=Array.from(O?.target?.files||[]);if(J.length===0)return;let A=U0.current||".";if(await L$(J,A),U0.current=".",O?.target)O.target.value=""},[L$]);return L`
        <aside
            class=${`workspace-sidebar${o?" workspace-drop-active":""}`}
            data-workspace-scale=${O0}
            ref=${D0}
            onDragEnter=${j_}
            onDragOver=${_$}
            onDragLeave=${u$}
            onDrop=${B2}
        >
            <input type="file" multiple style="display:none" ref=${i0} onChange=${q4} />
            <div class="workspace-header">
                <div class="workspace-header-left">
                    <span>Workspace</span>
                    <div class="workspace-menu-wrap">
                        <button
                            ref=${w_}
                            class=${`workspace-menu-button${__?" active":""}`}
                            onClick=${(O)=>{O.stopPropagation(),C_((J)=>!J)}}
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
                        ${__&&L`
                            <div class="workspace-menu-dropdown" ref=${k_} role="menu" aria-label="Workspace options">
                                <button class="workspace-menu-item" role="menuitem" onClick=${r$} disabled=${U_}>New file</button>
                                <button class="workspace-menu-item" role="menuitem" onClick=${n0} disabled=${U_}>Upload files</button>
                                <button class="workspace-menu-item" role="menuitem" onClick=${c0}>Refresh tree</button>
                                <button class=${`workspace-menu-item${B_?" active":""}`} role="menuitem" onClick=${m$}>
                                    ${B_?"Hide hidden files":"Show hidden files"}
                                </button>

                                ${Y&&L`<div class="workspace-menu-separator"></div>`}
                                ${Y&&!u_&&L`
                                    <button class="workspace-menu-item" role="menuitem" onClick=${M$} disabled=${!S0}>Open in editor</button>
                                `}
                                ${d$&&L`
                                    <button class="workspace-menu-item" role="menuitem" onClick=${Z0}>Rename selected</button>
                                `}
                                ${k$&&L`
                                    <button class="workspace-menu-item" role="menuitem" onClick=${L2}>Download selected file</button>
                                `}
                                ${A$&&L`
                                    <button class="workspace-menu-item" role="menuitem" onClick=${g$}>Download selected folder (zip)</button>
                                `}
                                ${s$&&L`
                                    <button class="workspace-menu-item danger" role="menuitem" onClick=${d0}>Delete selected file</button>
                                `}

                                ${(N||K)&&L`<div class="workspace-menu-separator"></div>`}
                                ${N&&L`
                                    <button class="workspace-menu-item" role="menuitem" onClick=${T2}>
                                        Open terminal in tab
                                    </button>
                                `}
                                ${K&&L`
                                    <button class="workspace-menu-item" role="menuitem" onClick=${Q$}>
                                        ${z?"Hide terminal dock":"Show terminal dock"}
                                    </button>
                                `}
                            </div>
                        `}
                    </div>
                </div>
                <div class="workspace-header-actions">
                    <button class="workspace-create" onClick=${u0} title="New file" disabled=${U_}>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                            stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                            <line x1="12" y1="5" x2="12" y2="19" />
                            <line x1="5" y1="12" x2="19" y2="12" />
                        </svg>
                    </button>
                    <button class="workspace-refresh" onClick=${w$} title="Refresh">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"
                            stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                            <circle cx="12" cy="12" r="8.5" stroke-dasharray="42 12" stroke-dashoffset="6"
                                transform="rotate(75 12 12)" />
                            <polyline points="21 3 21 9 15 9" />
                        </svg>
                    </button>
                </div>
            </div>
            <div class="workspace-tree" onClick=${e0}>
                ${U_&&L`<div class="workspace-drop-hint">Uploading…</div>`}
                ${i&&L`<div class="workspace-loading">Loading…</div>`}
                ${K_&&L`<div class="workspace-error">${K_}</div>`}
                ${W&&L`
                    <div
                        class="workspace-tree-list"
                        ref=${o_}
                        tabIndex="0"
                        onClick=${o$}
                        onDblClick=${b$}
                        onKeyDown=${Q}
                        onTouchStart=${b}
                        onTouchEnd=${x}
                        onTouchMove=${n}
                        onTouchCancel=${x}
                    >
                        ${q$.map(({node:O,depth:J})=>{let A=O.type==="dir",k=O.path===Y,g=O.path===C,s=A&&V.has(O.path),r=Q_&&O.path===Q_,a=Array.isArray(O.children)&&O.children.length>0?O.children.length:Number(O.child_count)||0;return L`
                                <div
                                    key=${O.path}
                                    class=${`workspace-row${k?" selected":""}${r?" drop-target":""}`}
                                    style=${{paddingLeft:`${8+J*Z2.indentPx}px`}}
                                    data-path=${O.path}
                                    data-type=${O.type}
                                    onMouseDown=${f2}
                                >
                                    <span class="workspace-caret" aria-hidden="true">
                                        ${A?s?L`<svg viewBox="0 0 12 12"><polygon points="1,2 11,2 6,11"/></svg>`:L`<svg viewBox="0 0 12 12"><polygon points="2,1 11,6 2,11"/></svg>`:null}
                                    </span>
                                    <svg class=${`workspace-node-icon${A?" folder":""}`}
                                        viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                        stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                        aria-hidden="true">
                                        ${A?L`<path d="M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>`:L`<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/>`}
                                    </svg>
                                    ${g?L`
                                            <input
                                                class="workspace-rename-input"
                                                ref=${K0}
                                                value=${v}
                                                onInput=${(u)=>R(u?.target?.value||"")}
                                                onKeyDown=${(u)=>{if(u.key==="Enter")u.preventDefault(),y$();else if(u.key==="Escape")u.preventDefault(),$0()}}
                                                onBlur=${$0}
                                                onClick=${(u)=>u.stopPropagation()}
                                            />
                                        `:L`<span class="workspace-label"><span class="workspace-label-text">${O.name}</span></span>`}
                                    ${A&&!s&&a>0&&L`
                                        <span class="workspace-count">${a}</span>
                                    `}
                                    ${A&&L`
                                        <button
                                            class="workspace-folder-upload"
                                            data-upload-target=${O.path}
                                            title="Upload files to this folder"
                                            onClick=${S$}
                                            disabled=${U_}
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
            ${Y&&L`
                <div class="workspace-preview-splitter-h" onMouseDown=${V_} onTouchStart=${E_}></div>
                <div class="workspace-preview">
                    <div class="workspace-preview-header">
                        <span class="workspace-preview-title">${Y}</span>
                        <div class="workspace-preview-actions">
                            <button class="workspace-create" onClick=${u0} title="New file" disabled=${U_}>
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                    stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                    <line x1="12" y1="5" x2="12" y2="19" />
                                    <line x1="5" y1="12" x2="19" y2="12" />
                                </svg>
                            </button>
                            ${!u_&&L`
                                <button
                                    class="workspace-download workspace-edit"
                                    onClick=${()=>S0&&T_.current?.(Y,E)}
                                    title=${m0}
                                    disabled=${!S0}
                                >
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                        stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                        <path d="M12 20h9" />
                                        <path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4Z" />
                                    </svg>
                                </button>
                                <button
                                    class="workspace-download workspace-delete"
                                    onClick=${J0}
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
                            ${u_?L`
                                    <button class="workspace-download" onClick=${W0}
                                        title="Upload files to this folder" disabled=${U_}>
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                            stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                                            <polyline points="7 8 12 3 17 8"/>
                                            <line x1="12" y1="3" x2="12" y2="15"/>
                                        </svg>
                                    </button>
                                    <a class="workspace-download" href=${t2(Y,B_)}
                                        title="Download folder as zip" onClick=${(O)=>O.stopPropagation()}>
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                            stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                                            <polyline points="7 10 12 15 17 10"/>
                                            <line x1="12" y1="15" x2="12" y2="3"/>
                                        </svg>
                                    </a>`:L`<button class="workspace-download" onClick=${P_} title="Download">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                        stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                                        <polyline points="7 10 12 15 17 10"/>
                                        <line x1="12" y1="15" x2="12" y2="3"/>
                                    </svg>
                                </button>`}
                        </div>
                    </div>
                    ${N_&&L`<div class="workspace-loading">Loading preview…</div>`}
                    ${E?.error&&L`<div class="workspace-error">${E.error}</div>`}
                    ${u_&&L`
                        <div class="workspace-preview-text">Folder selected — create file, upload files, or download as zip.</div>
                        ${v_?.loading&&L`<div class="workspace-loading">Loading folder size preview…</div>`}
                        ${v_?.error&&L`<div class="workspace-error">${v_.error}</div>`}
                        ${v_?.payload&&v_.payload.segments?.length>0&&L`
                            <${s5} payload=${v_.payload} />
                        `}
                        ${v_?.payload&&(!v_.payload.segments||v_.payload.segments.length===0)&&L`
                            <div class="workspace-preview-text">No file size data available for this folder yet.</div>
                        `}
                    `}
                    ${E&&!E.error&&!u_&&L`
                        <div class="workspace-preview-body" ref=${I}></div>
                    `}
                    ${S&&L`
                        <div class="workspace-download-card">
                            <${o5} mediaId=${S} />
                        </div>
                    `}
                </div>
            `}
            ${Y_&&L`
                <div class="workspace-drag-ghost" ref=${W$}>${Y_.label}</div>
            `}
        </aside>
    `}var r5=/\.(docx?|xlsx?|pptx?|odt|ods|odp|rtf)$/i,a5=/\.(csv|tsv)$/i,t5=/\.pdf$/i,e5=/\.(png|jpe?g|gif|webp|bmp|ico|svg)$/i,Y8=/\.drawio(\.xml|\.svg|\.png)?$/i;function G8({tabs:_,activeId:$,onActivate:j,onClose:Z,onCloseOthers:N,onCloseAll:K,onTogglePin:z,onTogglePreview:W,previewTabs:q,onToggleDock:V,dockVisible:B}){let[Y,U]=T(null),C=D(null);f(()=>{if(!Y)return;let F=(S)=>{if(S.type==="keydown"&&S.key!=="Escape")return;U(null)};return document.addEventListener("click",F),document.addEventListener("keydown",F),()=>{document.removeEventListener("click",F),document.removeEventListener("keydown",F)}},[Y]),f(()=>{let F=(S)=>{if(S.ctrlKey&&S.key==="Tab"){if(S.preventDefault(),!_.length)return;let M=_.findIndex((i)=>i.id===$);if(S.shiftKey){let i=_[(M-1+_.length)%_.length];j?.(i.id)}else{let i=_[(M+1)%_.length];j?.(i.id)}return}if((S.ctrlKey||S.metaKey)&&S.key==="w"){let M=document.querySelector(".editor-pane");if(M&&M.contains(document.activeElement)){if(S.preventDefault(),$)Z?.($)}}};return document.addEventListener("keydown",F),()=>document.removeEventListener("keydown",F)},[_,$,j,Z]);let m=y((F,S)=>{if(F.button===1){F.preventDefault(),Z?.(S);return}if(F.button===0)j?.(S)},[j,Z]),v=y((F,S)=>{F.preventDefault(),U({id:S,x:F.clientX,y:F.clientY})},[]),R=y((F)=>{F.preventDefault(),F.stopPropagation()},[]),E=y((F,S)=>{F.preventDefault(),F.stopPropagation(),Z?.(S)},[Z]);if(f(()=>{if(!$||!C.current)return;let F=C.current.querySelector(".tab-item.active");if(F)F.scrollIntoView({block:"nearest",inline:"nearest",behavior:"smooth"})},[$]),!_.length)return null;return L`
        <div class="tab-strip" ref=${C} role="tablist">
            ${_.map((F)=>L`
                <div
                    key=${F.id}
                    class=${`tab-item${F.id===$?" active":""}${F.dirty?" dirty":""}${F.pinned?" pinned":""}`}
                    role="tab"
                    aria-selected=${F.id===$}
                    title=${F.path}
                    onMouseDown=${(S)=>m(S,F.id)}
                    onContextMenu=${(S)=>v(S,F.id)}
                >
                    ${F.pinned&&L`
                        <span class="tab-pin-icon" aria-label="Pinned">
                            <svg viewBox="0 0 16 16" width="10" height="10" fill="currentColor">
                                <path d="M4.456.734a1.75 1.75 0 0 1 2.826.504l.613 1.327a3.1 3.1 0 0 0 2.084 1.707l2.454.584c1.332.317 1.8 1.972.832 2.94L11.06 10l3.72 3.72a.75.75 0 1 1-1.06 1.06L10 11.06l-2.204 2.205c-.968.968-2.623.5-2.94-.832l-.584-2.454a3.1 3.1 0 0 0-1.707-2.084l-1.327-.613a1.75 1.75 0 0 1-.504-2.826z"/>
                            </svg>
                        </span>
                    `}
                    <span class="tab-label">${F.label}</span>
                    <button
                        type="button"
                        class="tab-close"
                        onMouseDown=${R}
                        onClick=${(S)=>E(S,F.id)}
                        title=${F.dirty?"Unsaved changes":"Close"}
                        aria-label=${F.dirty?"Unsaved changes":`Close ${F.label}`}
                    >
                        ${F.dirty?L`<span class="tab-dirty-dot" aria-hidden="true"></span>`:L`<svg viewBox="0 0 16 16" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" aria-hidden="true" focusable="false" style=${{pointerEvents:"none"}}>
                                <line x1="4" y1="4" x2="12" y2="12" style=${{pointerEvents:"none"}}/>
                                <line x1="12" y1="4" x2="4" y2="12" style=${{pointerEvents:"none"}}/>
                            </svg>`}
                    </button>
                </div>
            `)}
            ${V&&L`
                <div class="tab-strip-spacer"></div>
                <button
                    class=${`tab-strip-dock-toggle${B?" active":""}`}
                    onClick=${V}
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
        ${Y&&L`
            <div class="tab-context-menu" style=${{left:Y.x+"px",top:Y.y+"px"}}>
                <button onClick=${()=>{Z?.(Y.id),U(null)}}>Close</button>
                <button onClick=${()=>{N?.(Y.id),U(null)}}>Close Others</button>
                <button onClick=${()=>{K?.(),U(null)}}>Close All</button>
                <hr />
                <button onClick=${()=>{z?.(Y.id),U(null)}}>
                    ${_.find((F)=>F.id===Y.id)?.pinned?"Unpin":"Pin"}
                </button>
                ${W&&/\.(md|mdx|markdown)$/i.test(Y.id)&&L`
                    <hr />
                    <button onClick=${()=>{W(Y.id),U(null)}}>
                        ${q?.has(Y.id)?"Hide Preview":"Preview"}
                    </button>
                `}
                ${r5.test(Y.id)&&L`
                    <hr />
                    <button onClick=${()=>{let F="/workspace/raw?path="+encodeURIComponent(Y.id),S=Y.id.split("/").pop()||"document",M="/office-viewer/?url="+encodeURIComponent(F)+"&name="+encodeURIComponent(S);window.open(M,"_blank","noopener"),U(null)}}>Open in New Tab</button>
                `}
                ${a5.test(Y.id)&&L`
                    <hr />
                    <button onClick=${()=>{let F="/csv-viewer/?path="+encodeURIComponent(Y.id);window.open(F,"_blank","noopener"),U(null)}}>Open in New Tab</button>
                `}
                ${t5.test(Y.id)&&L`
                    <hr />
                    <button onClick=${()=>{let F="/workspace/raw?path="+encodeURIComponent(Y.id);window.open(F,"_blank","noopener"),U(null)}}>Open in New Tab</button>
                `}
                ${e5.test(Y.id)&&!Y8.test(Y.id)&&L`
                    <hr />
                    <button onClick=${()=>{let F="/image-viewer/?path="+encodeURIComponent(Y.id);window.open(F,"_blank","noopener"),U(null)}}>Open in New Tab</button>
                `}
                ${Y8.test(Y.id)&&L`
                    <hr />
                    <button onClick=${()=>{let F="/drawio/edit?path="+encodeURIComponent(Y.id);window.open(F,"_blank","noopener"),U(null)}}>Open in New Tab</button>
                `}
            </div>
        `}
    `}var _j=400,v1=60,W8=220,u1="mdPreviewHeight";function $j(){try{let _=localStorage.getItem(u1),$=_?Number(_):NaN;return Number.isFinite($)&&$>=v1?$:W8}catch{return W8}}function X8({getContent:_,path:$,onClose:j}){let[Z,N]=T(""),[K,z]=T($j),W=D(null),q=D(null),V=D(""),B=D(_);return B.current=_,f(()=>{let C=()=>{let v=B.current?.()||"";if(v===V.current)return;V.current=v;try{let R=o0(v,null,{sanitize:!1});N(R)}catch{N('<p style="color:var(--text-secondary)">Preview unavailable</p>')}};C();let m=setInterval(C,_j);return()=>clearInterval(m)},[]),f(()=>{if(W.current&&Z)T$(W.current).catch(()=>{})},[Z]),L`
        <div
            class="md-preview-splitter"
            onMouseDown=${(C)=>{C.preventDefault();let m=C.clientY,v=q.current?.offsetHeight||K,R=q.current?.parentElement,E=R?R.offsetHeight*0.7:500,F=C.currentTarget;F.classList.add("dragging"),document.body.style.cursor="row-resize",document.body.style.userSelect="none";let S=(i)=>{let t=Math.min(Math.max(v-(i.clientY-m),v1),E);z(t)},M=()=>{F.classList.remove("dragging"),document.body.style.cursor="",document.body.style.userSelect="";try{localStorage.setItem(u1,String(Math.round(q.current?.offsetHeight||K)))}catch{}document.removeEventListener("mousemove",S),document.removeEventListener("mouseup",M)};document.addEventListener("mousemove",S),document.addEventListener("mouseup",M)}}
            onTouchStart=${(C)=>{C.preventDefault();let m=C.touches[0];if(!m)return;let v=m.clientY,R=q.current?.offsetHeight||K,E=q.current?.parentElement,F=E?E.offsetHeight*0.7:500,S=C.currentTarget;S.classList.add("dragging"),document.body.style.userSelect="none";let M=(t)=>{let N_=t.touches[0];if(!N_)return;t.preventDefault();let l=Math.min(Math.max(R-(N_.clientY-v),v1),F);z(l)},i=()=>{S.classList.remove("dragging"),document.body.style.userSelect="";try{localStorage.setItem(u1,String(Math.round(q.current?.offsetHeight||K)))}catch{}document.removeEventListener("touchmove",M),document.removeEventListener("touchend",i),document.removeEventListener("touchcancel",i)};document.addEventListener("touchmove",M,{passive:!1}),document.addEventListener("touchend",i),document.addEventListener("touchcancel",i)}}
        ></div>
        <div class="md-preview-panel" ref=${q} style=${{height:K+"px"}}>
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
                ref=${W}
                dangerouslySetInnerHTML=${{__html:Z}}
            />
        </div>
    `}function V8({handleSseEvent:_,handleConnectionStatusChange:$,loadPosts:j,onWake:Z,chatJid:N}){let K=D(_);K.current=_;let z=D($);z.current=$;let W=D(j);W.current=j;let q=D(Z);q.current=Z,f(()=>{W.current();let V=new e2((Y,U)=>K.current(Y,U),(Y)=>z.current(Y),{chatJid:N});V.connect();let B=()=>{V.reconnectIfNeeded();let Y=typeof document<"u"?document:null;if(!Y||Y.visibilityState==="visible")q.current?.()};return window.addEventListener("focus",B),document.addEventListener("visibilitychange",B),()=>{window.removeEventListener("focus",B),document.removeEventListener("visibilitychange",B),V.disconnect()}},[N])}function q8(){let[_,$]=T(!1),[j,Z]=T("default"),N=D(!1);f(()=>{let q=W2("notificationsEnabled",!1);if(N.current=q,$(q),typeof Notification<"u")Z(Notification.permission)},[]),f(()=>{N.current=_},[_]);let K=y(()=>{if(typeof Notification>"u")return Promise.resolve("denied");try{let q=Notification.requestPermission();if(q&&typeof q.then==="function")return q;return Promise.resolve(q)}catch{return Promise.resolve("default")}},[]),z=y(async()=>{if(typeof window>"u"||typeof Notification>"u")return;if(!window.isSecureContext){alert("Notifications require a secure context (HTTPS or installed app).");return}if(Notification.permission==="denied"){Z("denied"),alert("Browser notifications are blocked. Enable them in your browser settings.");return}if(Notification.permission==="default"){let V=await K();if(Z(V||"default"),V!=="granted"){N.current=!1,$(!1),_0("notificationsEnabled","false");return}}let q=!N.current;N.current=q,$(q),_0("notificationsEnabled",String(q))},[K]),W=y((q,V)=>{if(!N.current)return!1;if(typeof Notification>"u")return!1;if(Notification.permission!=="granted")return!1;try{let B=new Notification(q,{body:V});return B.onclick=()=>{try{window.focus()}catch{}},!0}catch{return!1}},[]);return{notificationsEnabled:_,notificationPermission:j,toggleNotifications:z,notify:W}}var S2=(_)=>{let $=new Set;return(_||[]).filter((j)=>{if(!j||$.has(j.id))return!1;return $.add(j.id),!0})};function O8({preserveTimelineScroll:_,preserveTimelineScrollTop:$,chatJid:j=null}){let[Z,N]=T(null),[K,z]=T(!1),W=D(!1),q=D(null),V=D(!1),B=D(null),Y=D(null),U=D(0);f(()=>{W.current=K},[K]),f(()=>{Y.current=Z},[Z]),f(()=>{U.current+=1,Y.current=null,B.current=null,V.current=!1,W.current=!1,N(null),z(!1)},[j]);let C=y(async(R=null)=>{let E=U.current;try{if(R){let F=await b4(R,50,0,j);if(E!==U.current)return;N(F.posts),z(!1)}else{let F=await H2(10,null,j);if(E!==U.current)return;N(F.posts),z(F.has_more)}}catch(F){if(E!==U.current)return;console.error("Failed to load posts:",F)}},[j]),m=y(async()=>{let R=U.current;try{let E=await H2(10,null,j);if(R!==U.current)return;N((F)=>{if(!F||F.length===0)return E.posts;return S2([...E.posts,...F])}),z((F)=>F||E.has_more)}catch(E){if(R!==U.current)return;console.error("Failed to refresh timeline:",E)}},[j]),v=y(async(R={})=>{let E=U.current,F=Y.current;if(!F||F.length===0)return;if(V.current)return;let{preserveScroll:S=!0,preserveMode:M="top",allowRepeat:i=!1}=R,t=(K_)=>{if(!S){K_();return}if(M==="top")$(K_);else _(K_)},l=F.slice().sort((K_,h)=>K_.id-h.id)[0]?.id;if(!Number.isFinite(l))return;if(!i&&B.current===l)return;V.current=!0,B.current=l;try{let K_=await H2(10,l,j);if(E!==U.current)return;if(K_.posts.length>0)t(()=>{N((h)=>S2([...K_.posts,...h||[]])),z(K_.has_more)});else z(!1)}catch(K_){if(E!==U.current)return;console.error("Failed to load more posts:",K_)}finally{if(E===U.current)V.current=!1}},[j,_,$]);return f(()=>{q.current=v},[v]),{posts:Z,setPosts:N,hasMore:K,setHasMore:z,hasMoreRef:W,loadPosts:C,refreshTimeline:m,loadMore:v,loadMoreRef:q,loadingMoreRef:V,lastBeforeIdRef:B}}function B8(){let[_,$]=T(null),[j,Z]=T({text:"",totalLines:0}),[N,K]=T(""),[z,W]=T({text:"",totalLines:0}),[q,V]=T(null),[B,Y]=T(null),[U,C]=T(null),m=D(null),v=D(0),R=D(!1),E=D(""),F=D(""),S=D(null),M=D(null),i=D(null),t=D(null),N_=D(!1),l=D(!1);return{agentStatus:_,setAgentStatus:$,agentDraft:j,setAgentDraft:Z,agentPlan:N,setAgentPlan:K,agentThought:z,setAgentThought:W,pendingRequest:q,setPendingRequest:V,currentTurnId:B,setCurrentTurnId:Y,steerQueuedTurnId:U,setSteerQueuedTurnId:C,lastAgentEventRef:m,lastSilenceNoticeRef:v,isAgentRunningRef:R,draftBufferRef:E,thoughtBufferRef:F,pendingRequestRef:S,stalledPostIdRef:M,currentTurnIdRef:i,steerQueuedTurnIdRef:t,thoughtExpandedRef:N_,draftExpandedRef:l}}function L8({appShellRef:_,sidebarWidthRef:$,editorWidthRef:j,dockHeightRef:Z}){let N=D((B)=>{B.preventDefault();let Y=_.current;if(!Y)return;let U=B.clientX,C=$.current||280,m=B.currentTarget;m.classList.add("dragging"),Y.classList.add("sidebar-resizing"),document.body.style.cursor="col-resize",document.body.style.userSelect="none";let v=U,R=(F)=>{v=F.clientX;let S=Math.min(Math.max(C+(F.clientX-U),160),600);Y.style.setProperty("--sidebar-width",`${S}px`),$.current=S},E=()=>{let F=Math.min(Math.max(C+(v-U),160),600);$.current=F,m.classList.remove("dragging"),Y.classList.remove("sidebar-resizing"),document.body.style.cursor="",document.body.style.userSelect="",_0("sidebarWidth",String(Math.round(F))),document.removeEventListener("mousemove",R),document.removeEventListener("mouseup",E)};document.addEventListener("mousemove",R),document.addEventListener("mouseup",E)}).current,K=D((B)=>{B.preventDefault();let Y=_.current;if(!Y)return;let U=B.touches[0];if(!U)return;let C=U.clientX,m=$.current||280,v=B.currentTarget;v.classList.add("dragging"),Y.classList.add("sidebar-resizing"),document.body.style.userSelect="none";let R=(F)=>{let S=F.touches[0];if(!S)return;F.preventDefault();let M=Math.min(Math.max(m+(S.clientX-C),160),600);Y.style.setProperty("--sidebar-width",`${M}px`),$.current=M},E=()=>{v.classList.remove("dragging"),Y.classList.remove("sidebar-resizing"),document.body.style.userSelect="",_0("sidebarWidth",String(Math.round($.current||m))),document.removeEventListener("touchmove",R),document.removeEventListener("touchend",E),document.removeEventListener("touchcancel",E)};document.addEventListener("touchmove",R,{passive:!1}),document.addEventListener("touchend",E),document.addEventListener("touchcancel",E)}).current,z=D((B)=>{B.preventDefault();let Y=_.current;if(!Y)return;let U=B.clientX,C=j.current||$.current||280,m=B.currentTarget;m.classList.add("dragging"),document.body.style.cursor="col-resize",document.body.style.userSelect="none";let v=U,R=(F)=>{v=F.clientX;let S=Math.min(Math.max(C+(F.clientX-U),200),800);Y.style.setProperty("--editor-width",`${S}px`),j.current=S},E=()=>{let F=Math.min(Math.max(C+(v-U),200),800);j.current=F,m.classList.remove("dragging"),document.body.style.cursor="",document.body.style.userSelect="",_0("editorWidth",String(Math.round(F))),document.removeEventListener("mousemove",R),document.removeEventListener("mouseup",E)};document.addEventListener("mousemove",R),document.addEventListener("mouseup",E)}).current,W=D((B)=>{B.preventDefault();let Y=_.current;if(!Y)return;let U=B.touches[0];if(!U)return;let C=U.clientX,m=j.current||$.current||280,v=B.currentTarget;v.classList.add("dragging"),document.body.style.userSelect="none";let R=(F)=>{let S=F.touches[0];if(!S)return;F.preventDefault();let M=Math.min(Math.max(m+(S.clientX-C),200),800);Y.style.setProperty("--editor-width",`${M}px`),j.current=M},E=()=>{v.classList.remove("dragging"),document.body.style.userSelect="",_0("editorWidth",String(Math.round(j.current||m))),document.removeEventListener("touchmove",R),document.removeEventListener("touchend",E),document.removeEventListener("touchcancel",E)};document.addEventListener("touchmove",R,{passive:!1}),document.addEventListener("touchend",E),document.addEventListener("touchcancel",E)}).current,q=D((B)=>{B.preventDefault();let Y=_.current;if(!Y)return;let U=B.clientY,C=Z?.current||200,m=B.currentTarget;m.classList.add("dragging"),document.body.style.cursor="row-resize",document.body.style.userSelect="none";let v=U,R=(F)=>{v=F.clientY;let S=Math.min(Math.max(C-(F.clientY-U),100),window.innerHeight*0.5);if(Y.style.setProperty("--dock-height",`${S}px`),Z)Z.current=S;window.dispatchEvent(new CustomEvent("dock-resize"))},E=()=>{let F=Math.min(Math.max(C-(v-U),100),window.innerHeight*0.5);if(Z)Z.current=F;m.classList.remove("dragging"),document.body.style.cursor="",document.body.style.userSelect="",_0("dockHeight",String(Math.round(F))),window.dispatchEvent(new CustomEvent("dock-resize")),document.removeEventListener("mousemove",R),document.removeEventListener("mouseup",E)};document.addEventListener("mousemove",R),document.addEventListener("mouseup",E)}).current,V=D((B)=>{B.preventDefault();let Y=_.current;if(!Y)return;let U=B.touches[0];if(!U)return;let C=U.clientY,m=Z?.current||200,v=B.currentTarget;v.classList.add("dragging"),document.body.style.userSelect="none";let R=(F)=>{let S=F.touches[0];if(!S)return;F.preventDefault();let M=Math.min(Math.max(m-(S.clientY-C),100),window.innerHeight*0.5);if(Y.style.setProperty("--dock-height",`${M}px`),Z)Z.current=M;window.dispatchEvent(new CustomEvent("dock-resize"))},E=()=>{v.classList.remove("dragging"),document.body.style.userSelect="",_0("dockHeight",String(Math.round(Z?.current||m))),window.dispatchEvent(new CustomEvent("dock-resize")),document.removeEventListener("touchmove",R),document.removeEventListener("touchend",E),document.removeEventListener("touchcancel",E)};document.addEventListener("touchmove",R,{passive:!1}),document.addEventListener("touchend",E),document.addEventListener("touchcancel",E)}).current;return{handleSplitterMouseDown:N,handleSplitterTouchStart:K,handleEditorSplitterMouseDown:z,handleEditorSplitterTouchStart:W,handleDockSplitterMouseDown:q,handleDockSplitterTouchStart:V}}function Q8({onTabClosed:_}={}){let $=D(_);$.current=_;let[j,Z]=T(()=>p_.getTabs()),[N,K]=T(()=>p_.getActiveId()),[z,W]=T(()=>p_.getTabs().length>0);f(()=>{return p_.onChange((M,i)=>{Z(M),K(i),W(M.length>0)})},[]);let[q,V]=T(()=>new Set),B=y((M)=>{V((i)=>{let t=new Set(i);if(t.has(M))t.delete(M);else t.add(M);return t})},[]),Y=y((M)=>{V((i)=>{if(!i.has(M))return i;let t=new Set(i);return t.delete(M),t})},[]),U=y((M,i={})=>{if(!M)return;let t={path:M,mode:"edit"};try{if(!e_.resolve(t)){if(!e_.get("editor")){console.warn(`[openEditor] No pane handler for: ${M}`);return}}}catch(l){console.warn(`[openEditor] paneRegistry.resolve() error for "${M}":`,l)}let N_=typeof i?.label==="string"&&i.label.trim()?i.label.trim():void 0;p_.open(M,N_)},[]),C=y(()=>{let M=p_.getActiveId();if(M){let i=p_.get(M);if(i?.dirty){if(!window.confirm(`"${i.label}" has unsaved changes. Close anyway?`))return}p_.close(M),Y(M),$.current?.(M)}},[Y]),m=y((M)=>{let i=p_.get(M);if(i?.dirty){if(!window.confirm(`"${i.label}" has unsaved changes. Close anyway?`))return}p_.close(M),Y(M),$.current?.(M)},[Y]),v=y((M)=>{p_.activate(M)},[]),R=y((M)=>{let i=p_.getTabs().filter((l)=>l.id!==M&&!l.pinned),t=i.filter((l)=>l.dirty).length;if(t>0){if(!window.confirm(`${t} unsaved tab${t>1?"s":""} will be closed. Continue?`))return}let N_=i.map((l)=>l.id);p_.closeOthers(M),N_.forEach((l)=>{Y(l),$.current?.(l)})},[Y]),E=y(()=>{let M=p_.getTabs().filter((N_)=>!N_.pinned),i=M.filter((N_)=>N_.dirty).length;if(i>0){if(!window.confirm(`${i} unsaved tab${i>1?"s":""} will be closed. Continue?`))return}let t=M.map((N_)=>N_.id);p_.closeAll(),t.forEach((N_)=>{Y(N_),$.current?.(N_)})},[Y]),F=y((M)=>{p_.togglePin(M)},[]),S=y(()=>{let M=p_.getActiveId();if(M)window.dispatchEvent(new CustomEvent("workspace-reveal-path",{detail:{path:M}}))},[]);return f(()=>{let M=(i)=>{let{oldPath:t,newPath:N_,type:l}=i.detail||{};if(!t||!N_)return;if(l==="dir"){for(let K_ of p_.getTabs())if(K_.path===t||K_.path.startsWith(`${t}/`)){let h=`${N_}${K_.path.slice(t.length)}`;p_.rename(K_.id,h)}}else p_.rename(t,N_)};return window.addEventListener("workspace-file-renamed",M),()=>window.removeEventListener("workspace-file-renamed",M)},[]),f(()=>{let M=(i)=>{if(p_.hasUnsaved())i.preventDefault(),i.returnValue=""};return window.addEventListener("beforeunload",M),()=>window.removeEventListener("beforeunload",M)},[]),{editorOpen:z,tabStripTabs:j,tabStripActiveId:N,previewTabs:q,openEditor:U,closeEditor:C,handleTabClose:m,handleTabActivate:v,handleTabCloseOthers:R,handleTabCloseAll:E,handleTabTogglePin:F,handleTabTogglePreview:B,revealInExplorer:S}}function m1(_,$){try{if(typeof window>"u")return $;let j=window.__PICLAW_SILENCE||{},Z=`__PICLAW_SILENCE_${_.toUpperCase()}_MS`,N=j[_]??window[Z],K=Number(N);return Number.isFinite(K)?K:$}catch{return $}}var g1=m1("warning",30000),U8=m1("finalize",120000),p1=m1("refresh",30000),F8=30000;function J8(_){let $={};return(_?.agents||[]).forEach((j)=>{$[j.id]=j}),$}function H8(){if(/iPad|iPhone/.test(navigator.userAgent))return!0;return navigator.platform==="MacIntel"&&navigator.maxTouchPoints>1}function D8(_=30000){let[,$]=T(0);f(()=>{let j=setInterval(()=>$((Z)=>Z+1),_);return()=>clearInterval(j)},[_])}function c1(_,$=160){let j=String(_||"").replace(/\r\n/g,`
`);if(!j)return 0;return j.split(`
`).reduce((Z,N)=>Z+Math.max(1,Math.ceil(N.length/$)),0)}function E8(_,$){if(typeof _!=="string")return{kind:"ignore"};let j=_.trim();if(!j)return{kind:"toast",title:"No file selected",detail:"Use a valid file path from a file pill.",level:"warning"};if(!$.editorOpen)return{kind:"toast",title:"Editor pane is not open",detail:"Open the editor pane to open files from pills.",level:"warning"};if(/^[a-z][a-z0-9+.-]*:/i.test(j))return{kind:"toast",title:"Cannot open external path from file pill",detail:"Use an in-workspace file path.",level:"warning"};try{if(!$.resolvePane({path:j,mode:"edit"}))return{kind:"toast",title:"No editor available",detail:`No editor can open: ${j}`,level:"warning"}}catch{return{kind:"toast",title:"No editor available",detail:`No editor can open: ${j}`,level:"warning"}}return{kind:"open",path:j}}function _2(_={}){let $=_.window??(typeof window<"u"?window:null),j=_.navigator??(typeof navigator<"u"?navigator:null);if(j&&j.standalone===!0)return!0;if(!$||typeof $.matchMedia!=="function")return!1;return["(display-mode: standalone)","(display-mode: minimal-ui)","(display-mode: fullscreen)"].some((N)=>{try{return Boolean($.matchMedia(N)?.matches)}catch{return!1}})}function h1(_={}){let $=_.window??(typeof window<"u"?window:null),j=_.navigator??(typeof navigator<"u"?navigator:null);if(!$&&!j)return!1;let Z=String(j?.userAgent||""),N=Number(j?.maxTouchPoints||0),K=/Android|webOS|iPhone|iPad|iPod|Mobile|Windows Phone/i.test(Z),z=(()=>{if(!$||typeof $.matchMedia!=="function")return!1;try{return Boolean($.matchMedia("(pointer: coarse)")?.matches||$.matchMedia("(any-pointer: coarse)")?.matches)}catch{return!1}})();return Boolean(K||N>1||z)}function y8(_,$={}){if(_2($))return null;if(h1($))return{target:"_blank",features:void 0,mode:"tab"};return{target:jj(_),features:"popup=yes,width=900,height=960,resizable=yes,scrollbars=yes",mode:"popup"}}function k8(_,$={}){let j=$.window??(typeof window<"u"?window:null);if(!j||!_)return null;try{return _.features?j.open("about:blank",_.target,_.features):j.open("about:blank",_.target)}catch{return null}}function A8(_,$={}){if(!_||!_.document)return;try{let j=String($.title||"Opening branch…"),Z=String($.message||"Preparing a new branch window…");_.document.title=j,_.document.body.innerHTML=`
            <div style="font-family: system-ui, sans-serif; padding: 24px; color: #222;">
                <h1 style="font-size: 18px; margin: 0 0 12px;">${j}</h1>
                <p style="margin: 0; line-height: 1.5;">${Z}</p>
            </div>
        `}catch{}}function w8(_,$){if(!_||!$)return;try{if(_.location&&typeof _.location.replace==="function"){_.location.replace(String($));return}_.location=String($)}catch{}}function P8(_){if(!_||typeof _.close!=="function")return;try{_.close()}catch{}}function x2(_,$,j={}){let Z=new URL(String(_||"http://localhost/")),N=String($||"").trim()||"web:default";if(Z.searchParams.set("chat_jid",N),Z.searchParams.delete("branch_loader"),Z.searchParams.delete("branch_source_chat_jid"),j.chatOnly!==!1)Z.searchParams.set("chat_only","1");return Z.toString()}function M8(_,$,j={}){let Z=new URL(String(_||"http://localhost/")),N=String($||"").trim()||"web:default";if(Z.searchParams.set("branch_loader","1"),Z.searchParams.set("branch_source_chat_jid",N),j.chatOnly!==!1)Z.searchParams.set("chat_only","1");return Z.toString()}function jj(_){return`piclaw-chat-${String(_||"web:default").trim().toLowerCase().replace(/[^a-z0-9_-]+/g,"-")||"default"}`}function i1(_){let $=_ instanceof Error?_.message:String(_||"").trim(),j=String($||"").trim();if(!j)return"PiClaw could not open a new branch window.";let Z=j.toLowerCase();if(Z.includes("no stable turn boundary"))return"This chat is still in flight and does not yet have a stable turn boundary to fork from.";if(Z.includes("cannot fork a branch while the source chat is still active"))return"This chat is still active. Please wait for the current turn to settle, then try again.";if(Z.includes("cancelled"))return"Branch creation was cancelled before a new chat window could be opened.";if(Z.includes("did not return a chat id"))return"PiClaw created no usable branch id for the new window. Please try again.";if(Z.includes("failed to fork branch")||Z.includes("failed to fork chat branch"))return"PiClaw could not create the new branch. Please try again.";return j}function l1(_){return String(_||"").trim()||"web:default"}function C8({remainingQueueCount:_=0,currentTurnId:$=null,isAgentTurnActive:j=!1}={}){return Number(_||0)<=0&&!$&&!j}function I8(_={}){return _2(_)&&h1(_)}function Zj(_={}){let $=_.window??(typeof window<"u"?window:null),j=Number($?.visualViewport?.height||0);if(Number.isFinite(j)&&j>0)return Math.round(j);let Z=Number($?.innerHeight||0);if(Number.isFinite(Z)&&Z>0)return Math.round(Z);return null}function Nj(_={},$={}){if(!I8(_))return null;let j=_.window??(typeof window<"u"?window:null),Z=_.document??(typeof document<"u"?document:null);if(!j||!Z?.documentElement)return null;let N=Zj({window:j});if(N&&N>0)Z.documentElement.style.setProperty("--app-height",`${N}px`);if($.resetScroll===!0){try{if(typeof j.scrollTo==="function")j.scrollTo(0,0)}catch{}try{if(Z.scrollingElement)Z.scrollingElement.scrollTop=0,Z.scrollingElement.scrollLeft=0;if(Z.documentElement)Z.documentElement.scrollTop=0,Z.documentElement.scrollLeft=0;if(Z.body)Z.body.scrollTop=0,Z.body.scrollLeft=0}catch{}}return N}function b8(_={}){if(!I8(_))return()=>{};let $=_.window??(typeof window<"u"?window:null),j=_.document??(typeof document<"u"?document:null);if(!$||!j)return()=>{};let Z=0,N=new Set,K=()=>{if(Z)$.cancelAnimationFrame?.(Z),Z=0;for(let Y of N)$.clearTimeout?.(Y);N.clear()},z=()=>{Z=0,Nj({window:$,document:j})},W=()=>{if(Z)$.cancelAnimationFrame?.(Z);Z=$.requestAnimationFrame?.(z)??0},q=()=>{W();for(let Y of[80,220,420]){let U=$.setTimeout?.(()=>{N.delete(U),W()},Y);if(U!=null)N.add(U)}},V=()=>{if(j.visibilityState&&j.visibilityState!=="visible")return;q()},B=$.visualViewport;return q(),$.addEventListener("focus",q),$.addEventListener("pageshow",q),$.addEventListener("resize",q),$.addEventListener("orientationchange",q),j.addEventListener("visibilitychange",V),j.addEventListener("focusin",q,!0),B?.addEventListener?.("resize",q),B?.addEventListener?.("scroll",q),()=>{K(),$.removeEventListener("focus",q),$.removeEventListener("pageshow",q),$.removeEventListener("resize",q),$.removeEventListener("orientationchange",q),j.removeEventListener("visibilitychange",V),j.removeEventListener("focusin",q,!0),B?.removeEventListener?.("resize",q),B?.removeEventListener?.("scroll",q)}}function Kj(_,$){if(typeof window<"u")console.warn(`[app] API export missing: ${_}. Using fallback behavior.`);return async()=>$}function F$(_,$,j){let Z=_?.[$];return typeof Z==="function"?Z:Kj($,j)}var zj=new Set(["extension_ui_request","extension_ui_timeout","extension_ui_notify","extension_ui_status","extension_ui_working","extension_ui_widget","extension_ui_title","extension_ui_editor_text","extension_ui_error"]);function S8(_){return zj.has(String(_||"").trim())}function Yj(_){let $=String(_||"").trim();if(!$.startsWith("extension_ui_"))return"piclaw-extension-ui";return`piclaw-extension-ui:${$.slice(13).replace(/_/g,"-")}`}function x8(_,$,j=globalThis.window){if(!j||typeof j.dispatchEvent!=="function"||typeof CustomEvent>"u")return!1;let Z={type:_,payload:$};return j.dispatchEvent(new CustomEvent("piclaw-extension-ui",{detail:Z})),j.dispatchEvent(new CustomEvent(Yj(_),{detail:Z})),!0}var Gj=["(display-mode: standalone)","(display-mode: minimal-ui)","(display-mode: fullscreen)"];function T8(_,$={}){let j=$.window??(typeof window<"u"?window:null),Z=$.navigator??(typeof navigator<"u"?navigator:null);if(!j||typeof _!=="function")return()=>{};let N=()=>{_(_2({window:j,navigator:Z}))};N();let z=Gj.map((W)=>{try{return j.matchMedia?.(W)??null}catch{return null}}).filter(Boolean).map((W)=>{if(typeof W.addEventListener==="function")return W.addEventListener("change",N),()=>W.removeEventListener("change",N);if(typeof W.addListener==="function")return W.addListener(N),()=>W.removeListener(N);return()=>{}});return j.addEventListener?.("focus",N),j.addEventListener?.("pageshow",N),()=>{for(let W of z)W();j.removeEventListener?.("focus",N),j.removeEventListener?.("pageshow",N)}}function f8(_,$={}){let j=$.window??(typeof window<"u"?window:null),Z=$.document??(typeof document<"u"?document:null);if(!j||!Z||typeof _!=="function")return()=>{};let N=()=>{if(Z.visibilityState&&Z.visibilityState!=="visible")return;_()};return j.addEventListener?.("focus",N),j.addEventListener?.("pageshow",N),Z.addEventListener?.("visibilitychange",N),()=>{j.removeEventListener?.("focus",N),j.removeEventListener?.("pageshow",N),Z.removeEventListener?.("visibilitychange",N)}}var d1="piclaw_btw_session";function Wj(_){if(_==="root")return"Branch family";if(_==="all")return"All chats";return"Current branch"}function Xj(){let _=z$(d1);if(!_)return null;try{let $=JSON.parse(_);if(!$||typeof $!=="object")return null;let j=typeof $.question==="string"?$.question:"",Z=typeof $.answer==="string"?$.answer:"",N=typeof $.thinking==="string"?$.thinking:"",K=typeof $.error==="string"&&$.error.trim()?$.error:null,z=$.status==="running"?"error":$.status==="success"||$.status==="error"?$.status:"success";return{question:j,answer:Z,thinking:N,error:z==="error"?K||"BTW stream interrupted. You can retry.":K,model:null,status:z}}catch{return null}}var R8=S4,v8=T4,Vj=R4,u8=p4,m8=c4,g8=v4,n1=F$(K$,"getAgentContext",null),qj=F$(K$,"getAgentModels",{current:null,models:[]}),Oj=F$(K$,"getActiveChatAgents",{chats:[]}),p8=F$(K$,"getChatBranches",{chats:[]}),Bj=F$(K$,"renameChatBranch",null),Lj=F$(K$,"pruneChatBranch",null),Qj=F$(K$,"getAgentQueueState",{count:0}),Uj=F$(K$,"steerAgentQueueItem",{removed:!1,queued:"steer"}),Fj=F$(K$,"removeAgentQueueItem",{removed:!1}),Jj=F$(K$,"streamSidePrompt",null);if(window.marked)marked.setOptions({breaks:!0,gfm:!0});e_.register(O1);e_.register(E1);e_.register(D1);e_.register(y1);e_.register(k1);e_.register(A1);e_.register(P1);e_.register(C1);B1();e_.register(F1);e_.register(J1);function Hj({locationParams:_}){let $=l_(()=>{let X=_.get("chat_jid");return X&&X.trim()?X.trim():"web:default"},[_]),j=l_(()=>{let X=(_.get("chat_only")||_.get("chat-only")||"").trim().toLowerCase();return X==="1"||X==="true"||X==="yes"},[_]),Z=l_(()=>{let X=(_.get("branch_loader")||"").trim().toLowerCase();return X==="1"||X==="true"||X==="yes"},[_]),N=l_(()=>{let X=_.get("branch_source_chat_jid");return X&&X.trim()?X.trim():$},[$,_]),[K,z]=T("disconnected"),[W,q]=T(()=>_2()),[V,B]=T(null),[Y,U]=T(null),[C,m]=T(!1),[v,R]=T("current"),[E,F]=T([]),[S,M]=T([]),[i,t]=T(null),{agentStatus:N_,setAgentStatus:l,agentDraft:K_,setAgentDraft:h,agentPlan:B_,setAgentPlan:c_,agentThought:o,setAgentThought:d,pendingRequest:z_,setPendingRequest:$_,currentTurnId:Y_,setCurrentTurnId:M_,steerQueuedTurnId:Q_,setSteerQueuedTurnId:A_,lastAgentEventRef:U_,lastSilenceNoticeRef:R_,isAgentRunningRef:v_,draftBufferRef:W_,thoughtBufferRef:I_,pendingRequestRef:S_,stalledPostIdRef:O0,currentTurnIdRef:X_,steerQueuedTurnIdRef:__,thoughtExpandedRef:C_,draftExpandedRef:G_}=B8(),[D_,y_]=T({}),[n_,d_]=T(null),[s_,H_]=T(null),[x_,T_]=T(!1),[N0,b_]=T(null),[D0,o_]=T([]),[K0,i0]=T([]),[U0,f_]=T(null),[B0,r_]=T([]),[z0,E0]=T(!1),[h_,y0]=T(()=>Xj()),P0=l_(()=>D0.find((X)=>X?.chat_jid===$)||null,[D0,$]),L_=l_(()=>K0.find((X)=>X?.chat_jid===$)||P0||null,[P0,K0,$]),I=L_?.root_chat_jid||P0?.root_chat_jid||$,e=Wj(v),[k_,w_]=T(()=>({status:Z?"running":"idle",message:Z?"Preparing a new chat branch…":""})),Y0=B0.length,f0=D(new Set),M0=D([]),L0=D(new Set),k0=D(0),r0=D({inFlight:!1,lastAttemptAt:0,turnId:null});f0.current=new Set(B0.map((X)=>X.row_id)),M0.current=B0;let{notificationsEnabled:G$,notificationPermission:W$,toggleNotifications:C0,notify:R0}=q8(),[h$,l0]=T(()=>new Set),[A0,I$]=T(()=>W2("workspaceOpen",!0)),X$=D(null),{editorOpen:x0,tabStripTabs:$2,tabStripActiveId:v0,previewTabs:i$,openEditor:i_,closeEditor:J$,handleTabClose:H$,handleTabActivate:G0,handleTabCloseOthers:F0,handleTabCloseAll:a0,handleTabTogglePin:D$,handleTabTogglePreview:E$,revealInExplorer:l$}=Q8({onTabClosed:(X)=>X$.current?.(X)}),R$=D(null),$0=D(null),V$=D(null),y$=D(null),I0=e_.getDockPanes().length>0,[u0,j2]=T(!1),b0=y(()=>j2((X)=>!X),[]),n$=y(()=>{i_(Q1,{label:"Terminal"})},[i_]),q$=!j&&(x0||I0&&u0);f(()=>{let X=R$.current;if(!X)return;if($0.current)$0.current.dispose(),$0.current=null;let G=v0;if(!G)return;let H={path:G,mode:"edit"},P=e_.resolve(H)||e_.get("editor");if(!P){X.innerHTML='<div style="padding:2em;color:var(--text-secondary);text-align:center;">No editor available for this file.</div>';return}let w=P.mount(X,H);$0.current=w,w.onDirtyChange?.((Z_)=>{p_.setDirty(G,Z_)}),w.onSaveRequest?.(()=>{}),w.onClose?.(()=>{J$()});let p=p_.getViewState(G);if(p&&typeof w.restoreViewState==="function")requestAnimationFrame(()=>w.restoreViewState(p));if(typeof w.onViewStateChange==="function")w.onViewStateChange((Z_)=>{p_.saveViewState(G,Z_)});return requestAnimationFrame(()=>w.focus()),()=>{if($0.current===w)w.dispose(),$0.current=null}},[v0,J$]),f(()=>{let X=(G)=>{let H=G.detail?.path;if(H)i_(H)};return document.addEventListener("office-viewer:open-tab",X),document.addEventListener("drawio:open-tab",X),document.addEventListener("pdf-viewer:open-tab",X),document.addEventListener("image-viewer:open-tab",X),()=>{document.removeEventListener("office-viewer:open-tab",X),document.removeEventListener("drawio:open-tab",X),document.removeEventListener("pdf-viewer:open-tab",X),document.removeEventListener("image-viewer:open-tab",X)}},[i_]),f(()=>{let X=V$.current;if(y$.current)y$.current.dispose(),y$.current=null;if(!X||!I0||!u0)return;let G=e_.getDockPanes()[0];if(!G){X.innerHTML='<div class="terminal-placeholder">No dock pane available.</div>';return}let H=G.mount(X,{mode:"view"});return y$.current=H,requestAnimationFrame(()=>H.focus?.()),()=>{if(y$.current===H)H.dispose(),y$.current=null}},[I0,u0]);let[O$,Z2]=T({name:"You",avatar_url:null,avatar_background:null}),O2=D(!1),u_=D(!1),S0=D(null),m0=D($),d$=D(new Map),s$=D($),k$=D(0),A$=D(0),g0=D({}),j0=D({name:null,avatar_url:null}),Q0=D({currentHashtag:null,searchQuery:null}),B$=D(null),b$=D(null),o$=D(0),w$=D(0),t0=D(0),v$=D(null),e0=D(null),w0=D(null),P$=D(null),Q=D(0),b=D({title:null,avatarBase:null}),x=D(null),n=y(()=>{if(x.current)clearTimeout(x.current),x.current=null;t(null)},[]);D8(30000),f(()=>{return i3()},[]),f(()=>{return T8(q)},[]),f(()=>{_0("workspaceOpen",String(A0))},[A0]),f(()=>{return b8()},[]),f(()=>{return()=>{n()}},[n]),f(()=>{if(!h_){_0(d1,"");return}_0(d1,JSON.stringify({question:h_.question||"",answer:h_.answer||"",thinking:h_.thinking||"",error:h_.error||null,status:h_.status||"success"}))},[h_]),f(()=>{g0.current=D_||{}},[D_]),f(()=>{m0.current=$},[$]),f(()=>{j0.current=O$||{name:"You",avatar_url:null,avatar_background:null}},[O$]);let V_=y((X,G,H=null)=>{if(typeof document>"u")return;let P=(X||"").trim()||"PiClaw";if(b.current.title!==P){document.title=P;let c=document.querySelector('meta[name="apple-mobile-web-app-title"]');if(c&&c.getAttribute("content")!==P)c.setAttribute("content",P);b.current.title=P}let w=document.getElementById("dynamic-favicon");if(!w)return;let p=w.getAttribute("data-default")||w.getAttribute("href")||"/favicon.ico",Z_=G||p,F_=G?`${Z_}|${H||""}`:Z_;if(b.current.avatarBase!==F_){let c=G?`${Z_}${Z_.includes("?")?"&":"?"}v=${H||Date.now()}`:Z_;w.setAttribute("href",c),b.current.avatarBase=F_}},[]),E_=y((X)=>{if(!X)return;F((G)=>G.includes(X)?G:[...G,X])},[]),P_=y((X)=>{F((G)=>G.filter((H)=>H!==X))},[]);X$.current=P_;let J0=y(()=>{F([])},[]),p0=y((X)=>{if(!Array.isArray(X)){F([]);return}let G=[],H=new Set;for(let P of X){if(typeof P!=="string"||!P.trim())continue;let w=P.trim();if(H.has(w))continue;H.add(w),G.push(w)}F(G)},[]),j_=y((X,G=null,H="info",P=3000)=>{n(),t({title:X,detail:G||null,kind:H||"info"}),x.current=setTimeout(()=>{t((w)=>w?.title===X?null:w)},P)},[n]),_$=y((X)=>{let G=E8(X,{editorOpen:x0,resolvePane:(H)=>e_.resolve(H)});if(G.kind==="open"){i_(G.path);return}if(G.kind==="toast")j_(G.title,G.detail,G.level)},[x0,i_,j_]),u$=y(()=>{let X=v0;if(X)E_(X)},[v0,E_]),L$=y((X)=>{if(!X)return;M((G)=>G.includes(X)?G:[...G,X])},[]),$$=y(async(X,G=null)=>{let H=(w)=>{w.scrollIntoView({behavior:"smooth",block:"center"}),w.classList.add("post-highlight"),setTimeout(()=>w.classList.remove("post-highlight"),2000)},P=document.getElementById("post-"+X);if(P){H(P);return}try{let w=typeof G==="string"&&G.trim()?G.trim():$,Z_=(await x4(X,w))?.thread?.[0];if(!Z_)return;u((F_)=>{if(!F_)return[Z_];if(F_.some((c)=>c.id===Z_.id))return F_;return[...F_,Z_]}),requestAnimationFrame(()=>{setTimeout(()=>{let F_=document.getElementById("post-"+X);if(F_)H(F_)},50)})}catch(w){console.error("[scrollToMessage] Failed to fetch message",X,w)}},[$]),B2=y((X)=>{M((G)=>G.filter((H)=>H!==X))},[]),S$=y(()=>{M([])},[]),W0=y((X)=>{if(!Array.isArray(X)){M([]);return}let G=[],H=new Set;for(let P of X){if(typeof P!=="string"||!P.trim())continue;let w=P.trim();if(H.has(w))continue;H.add(w),G.push(w)}M(G)},[]),r$=y((X)=>{let G=typeof X==="string"&&X.trim()?X.trim():"Could not send your message.";j_("Compose failed",G,"error",5000)},[j_]),n0=y((X={})=>{let G=Date.now();if(U_.current=G,X.running)v_.current=!0,E0((H)=>H?H:!0);if(X.clearSilence)R_.current=0},[E0]),c0=y(()=>{if(P$.current)clearTimeout(P$.current),P$.current=null;Q.current=0},[]);f(()=>()=>{c0()},[c0]);let m$=y(()=>{c0(),l((X)=>{if(!X)return X;if(!(X.last_activity||X.lastActivity))return X;let{last_activity:G,lastActivity:H,...P}=X;return P})},[c0]),M$=y((X)=>{if(!X)return;c0();let G=Date.now();Q.current=G,l({type:X.type||"active",last_activity:!0}),P$.current=setTimeout(()=>{if(Q.current!==G)return;l((H)=>{if(!H||!(H.last_activity||H.lastActivity))return H;return null})},F8)},[c0]),Z0=y(()=>{v_.current=!1,E0(!1),U_.current=null,R_.current=0,W_.current="",I_.current="",S_.current=null,e0.current=null,X_.current=null,__.current=null,S0.current=null,r0.current={inFlight:!1,lastAttemptAt:0,turnId:null},c0(),M_(null),A_(null),C_.current=!1,G_.current=!1},[c0,M_,A_,E0]),d0=y((X)=>{if(!C8({remainingQueueCount:X,currentTurnId:X_.current,isAgentTurnActive:z0}))return;__.current=null,A_(null)},[z0,A_]),L2=y(()=>({agentStatus:null,agentDraft:{text:"",totalLines:0},agentPlan:"",agentThought:{text:"",totalLines:0},pendingRequest:null,currentTurnId:null,steerQueuedTurnId:null,isAgentTurnActive:!1,followupQueueItems:[],activeModel:null,activeThinkingLevel:null,supportsThinking:!1,activeModelUsage:null,contextUsage:null,isAgentRunning:!1,wasAgentActive:!1,draftBuffer:"",thoughtBuffer:"",lastAgentEvent:null,lastSilenceNotice:0,lastAgentResponse:null,currentTurnIdRef:null,steerQueuedTurnIdRef:null,thoughtExpanded:!1,draftExpanded:!1,agentStatusRef:null,silentRecovery:{inFlight:!1,lastAttemptAt:0,turnId:null}}),[]),g$=y(()=>({agentStatus:N_,agentDraft:K_?{...K_}:{text:"",totalLines:0},agentPlan:B_||"",agentThought:o?{...o}:{text:"",totalLines:0},pendingRequest:z_,currentTurnId:Y_,steerQueuedTurnId:Q_,isAgentTurnActive:Boolean(z0),followupQueueItems:Array.isArray(B0)?B0.map((X)=>({...X})):[],activeModel:n_,activeThinkingLevel:s_,supportsThinking:Boolean(x_),activeModelUsage:N0,contextUsage:U0,isAgentRunning:Boolean(v_.current),wasAgentActive:Boolean(u_.current),draftBuffer:W_.current||"",thoughtBuffer:I_.current||"",lastAgentEvent:U_.current||null,lastSilenceNotice:R_.current||0,lastAgentResponse:e0.current||null,currentTurnIdRef:X_.current||null,steerQueuedTurnIdRef:__.current||null,thoughtExpanded:Boolean(C_.current),draftExpanded:Boolean(G_.current),agentStatusRef:S0.current||null,silentRecovery:{...r0.current||{inFlight:!1,lastAttemptAt:0,turnId:null}}}),[n_,N0,s_,K_,B_,N_,o,U0,Y_,B0,z0,z_,Q_,x_]),T2=y((X)=>{let G=X||L2();c0(),v_.current=Boolean(G.isAgentRunning),u_.current=Boolean(G.wasAgentActive),E0(Boolean(G.isAgentTurnActive)),U_.current=G.lastAgentEvent||null,R_.current=Number(G.lastSilenceNotice||0),W_.current=G.draftBuffer||"",I_.current=G.thoughtBuffer||"",S_.current=G.pendingRequest||null,e0.current=G.lastAgentResponse||null,X_.current=G.currentTurnIdRef||null,__.current=G.steerQueuedTurnIdRef||null,S0.current=G.agentStatusRef||null,r0.current=G.silentRecovery||{inFlight:!1,lastAttemptAt:0,turnId:null},C_.current=Boolean(G.thoughtExpanded),G_.current=Boolean(G.draftExpanded),l(G.agentStatus||null),h(G.agentDraft?{...G.agentDraft}:{text:"",totalLines:0}),c_(G.agentPlan||""),d(G.agentThought?{...G.agentThought}:{text:"",totalLines:0}),$_(G.pendingRequest||null),M_(G.currentTurnId||null),A_(G.steerQueuedTurnId||null),r_(Array.isArray(G.followupQueueItems)?G.followupQueueItems.map((H)=>({...H})):[]),d_(G.activeModel||null),H_(G.activeThinkingLevel||null),T_(Boolean(G.supportsThinking)),b_(G.activeModelUsage??null),f_(G.contextUsage??null)},[c0,L2,M_,r_,E0,A_]),Q$=y((X)=>{if(!X)return;if(X_.current===X)return;X_.current=X,r0.current={inFlight:!1,lastAttemptAt:0,turnId:X},M_(X),__.current=null,A_(null),W_.current="",I_.current="",h({text:"",totalLines:0}),c_(""),d({text:"",totalLines:0}),$_(null),S_.current=null,e0.current=null,C_.current=!1,G_.current=!1},[M_,A_]),f2=y((X)=>{if(typeof document<"u"){let c=typeof document.hasFocus==="function"?document.hasFocus():!0;if(!document.hidden&&c)return}let G=e0.current;if(!G||!G.post)return;if(X&&G.turnId&&G.turnId!==X)return;let H=G.post;if(H.id&&v$.current===H.id)return;let P=String(H?.data?.content||"").trim();if(!P)return;v$.current=H.id||v$.current,e0.current=null;let w=P.replace(/\s+/g," ").slice(0,200),p=g0.current||{},F_=(H?.data?.agent_id?p[H.data.agent_id]:null)?.name||"Pi";R0(F_,w)},[R0]),q4=y(async(X,G)=>{if(X!=="thought"&&X!=="draft")return;let H=X_.current;if(X==="thought"){if(C_.current=G,H)try{await m8(H,"thought",G)}catch(P){console.warn("Failed to update thought visibility:",P)}if(!G)return;try{let P=H?await u8(H,"thought"):null;if(P?.text)I_.current=P.text;d((w)=>({...w||{text:"",totalLines:0},fullText:I_.current||w?.fullText||"",totalLines:Number.isFinite(P?.total_lines)?P.total_lines:w?.totalLines||0}))}catch(P){console.warn("Failed to fetch full thought:",P)}return}if(G_.current=G,H)try{await m8(H,"draft",G)}catch(P){console.warn("Failed to update draft visibility:",P)}if(!G)return;try{let P=H?await u8(H,"draft"):null;if(P?.text)W_.current=P.text;h((w)=>({...w||{text:"",totalLines:0},fullText:W_.current||w?.fullText||"",totalLines:Number.isFinite(P?.total_lines)?P.total_lines:w?.totalLines||0}))}catch(P){console.warn("Failed to fetch full draft:",P)}},[]),O=D(null),J=y(()=>{let X=B$.current;if(!X)return;if(!(Math.abs(X.scrollTop)>150))X.scrollTop=0},[]);O.current=J;let A=y((X)=>{let G=B$.current;if(!G||typeof X!=="function"){X?.();return}let{currentHashtag:H,searchQuery:P}=Q0.current||{},w=!(P&&!H),p=w?G.scrollHeight-G.scrollTop:G.scrollTop;X(),requestAnimationFrame(()=>{let Z_=B$.current;if(!Z_)return;if(w){let F_=Math.max(Z_.scrollHeight-p,0);Z_.scrollTop=F_}else{let F_=Math.max(Z_.scrollHeight-Z_.clientHeight,0),c=Math.min(p,F_);Z_.scrollTop=c}})},[]),k=y((X)=>{let G=B$.current;if(!G||typeof X!=="function"){X?.();return}let H=G.scrollTop;X(),requestAnimationFrame(()=>{let P=B$.current;if(!P)return;let w=Math.max(P.scrollHeight-P.clientHeight,0);P.scrollTop=Math.min(H,w)})},[]),g="Queued as a follow-up (one-at-a-time).",s="⁣",r=y((X)=>{if(!X||!Array.isArray(X))return X;let G=f0.current,H=new Set(G),P=X.filter((w)=>{if(H.has(w?.id))return!1;if(w?.data?.is_bot_message){let p=w?.data?.content;if(p===g||p===s)return!1}return!0});return P.length===X.length?X:P},[]),{posts:a,setPosts:u,hasMore:q_,setHasMore:H0,hasMoreRef:C$,loadPosts:X0,refreshTimeline:T0,loadMore:c8,loadMoreRef:O4}=O8({preserveTimelineScroll:A,preserveTimelineScrollTop:k,chatJid:$}),N2=l_(()=>r(a),[a,B0,r]),R2=y(()=>{let X=O0.current;if(!X)return;u((G)=>G?G.filter((H)=>H.id!==X):G),O0.current=null},[u]),{handleSplitterMouseDown:h8,handleSplitterTouchStart:i8,handleEditorSplitterMouseDown:l8,handleEditorSplitterTouchStart:n8,handleDockSplitterMouseDown:d8,handleDockSplitterTouchStart:s8}=L8({appShellRef:b$,sidebarWidthRef:o$,editorWidthRef:w$,dockHeightRef:t0}),s1=y(()=>{if(!v_.current)return;v_.current=!1,R_.current=0,U_.current=null,X_.current=null,M_(null),C_.current=!1,G_.current=!1;let X=(W_.current||"").trim();if(W_.current="",I_.current="",h({text:"",totalLines:0}),c_(""),d({text:"",totalLines:0}),$_(null),S_.current=null,e0.current=null,!X){l({type:"error",title:"Response stalled - No content received"});return}let H=`${X}${`

⚠️ Response may be incomplete - the model stopped responding`}`,P=Date.now(),w=new Date().toISOString(),p={id:P,timestamp:w,data:{type:"agent_response",content:H,agent_id:"default",is_local_stall:!0}};O0.current=P,u((Z_)=>Z_?S2([...Z_,p]):[p]),O.current?.(),l(null)},[M_]);f(()=>{Q0.current={currentHashtag:V,searchQuery:Y}},[V,Y]);let m_=y(()=>{let X=++k0.current,G=$;Qj(G).then((H)=>{if(X!==k0.current)return;if(m0.current!==G)return;let P=L0.current,w=Array.isArray(H?.items)?H.items.map((p)=>({...p})).filter((p)=>!P.has(p.row_id)):[];if(w.length){r_((p)=>{if(p.length===w.length&&p.every((Z_,F_)=>Z_.row_id===w[F_].row_id))return p;return w});return}P.clear(),d0(0),r_((p)=>p.length===0?p:[])}).catch(()=>{if(X!==k0.current)return;if(m0.current!==G)return;r_((H)=>H.length===0?H:[])})},[d0,$,r_]),j$=y(async()=>{let X=$;try{let G=await n1(X);if(m0.current!==X)return;if(G)f_(G)}catch(G){if(m0.current!==X)return;console.warn("Failed to fetch agent context:",G)}},[$]),Z$=y(async()=>{let X=$;try{let G=await g8(X);if(m0.current!==X)return null;if(!G||G.status!=="active"||!G.data){if(u_.current){let{currentHashtag:w,searchQuery:p}=Q0.current||{};if(!w&&!p)T0()}return u_.current=!1,Z0(),S0.current=null,l(null),h({text:"",totalLines:0}),c_(""),d({text:"",totalLines:0}),$_(null),S_.current=null,G??null}u_.current=!0;let H=G.data;S0.current=H;let P=H.turn_id||H.turnId;if(P)Q$(P);if(n0({running:!0,clearSilence:!0}),m$(),l(H),G.thought&&G.thought.text)d((w)=>{if(w&&w.text&&w.text.length>=G.thought.text.length)return w;return I_.current=G.thought.text,{text:G.thought.text,totalLines:G.thought.totalLines||0}});if(G.draft&&G.draft.text)h((w)=>{if(w&&w.text&&w.text.length>=G.draft.text.length)return w;return W_.current=G.draft.text,{text:G.draft.text,totalLines:G.draft.totalLines||0}});return G}catch(G){return console.warn("Failed to fetch agent status:",G),null}},[Z0,m$,n0,T0,Q$]),B4=y(async()=>{if(!v_.current)return null;if(S_.current)return null;let X=X_.current||null,G=r0.current,H=Date.now();if(G.inFlight)return null;if(G.turnId===X&&H-G.lastAttemptAt<p1)return null;G.inFlight=!0,G.lastAttemptAt=H,G.turnId=X;try{let{currentHashtag:P,searchQuery:w}=Q0.current||{};if(!P&&!w)await T0();return await m_(),await Z$()}finally{G.inFlight=!1}},[Z$,m_,T0]);f(()=>{let X=Math.min(1000,Math.max(100,Math.floor(g1/2))),G=setInterval(()=>{if(!v_.current)return;if(S_.current)return;let H=U_.current;if(!H)return;let P=Date.now(),w=P-H,p=w2(S0.current);if(w>=U8){if(!p)l({type:"waiting",title:"Re-syncing after a quiet period…"});B4();return}if(w>=g1){if(P-R_.current>=p1){if(!p){let Z_=Math.floor(w/1000);l({type:"waiting",title:`Waiting for model… No events for ${Z_}s`})}R_.current=P,B4()}}},X);return()=>clearInterval(G)},[B4]);let o8=y((X)=>{if(z(X),X!=="connected"){l(null),h({text:"",totalLines:0}),c_(""),d({text:"",totalLines:0}),$_(null),S_.current=null,Z0();return}if(!O2.current){O2.current=!0,Z$(),j$();return}let{currentHashtag:G,searchQuery:H}=Q0.current;if(!G&&!H)T0();Z$(),m_(),j$()},[Z0,T0,Z$,m_,j$]),r8=y(async(X)=>{B(X),u(null),await X0(X)},[X0]),a8=y(async()=>{B(null),U(null),u(null),await X0()},[X0]),t8=y(async(X,G=v)=>{if(!X||!X.trim())return;let H=G==="root"||G==="all"?G:"current";R(H),U(X.trim()),B(null),u(null);try{let P=await R8(X.trim(),50,0,$,H,I);u(P.results),H0(!1)}catch(P){console.error("Failed to search:",P),u([])}},[$,I,v]),e8=y(()=>{m(!0),U(null),B(null),R("current"),u([])},[]),_9=y(()=>{m(!1),U(null),X0()},[X0]),Ej=y(()=>{},[]),$9=y(async(X)=>{if(!X)return;let G=X.id,H=typeof X?.chat_jid==="string"&&X.chat_jid.trim()?X.chat_jid.trim():$,P=N2?.filter((p)=>p?.data?.thread_id===G&&p?.id!==G).length||0;if(P>0){if(!window.confirm(`Delete this message and its ${P} replies?`))return}let w=(p)=>{if(!p.length)return;l0((F_)=>{let c=new Set(F_);return p.forEach((O_)=>c.add(O_)),c}),setTimeout(()=>{if(k(()=>{u((F_)=>F_?F_.filter((c)=>!p.includes(c.id)):F_)}),l0((F_)=>{let c=new Set(F_);return p.forEach((O_)=>c.delete(O_)),c}),C$.current)O4.current?.({preserveScroll:!0,preserveMode:"top"})},180)};try{let p=await v8(G,P>0,H);if(p?.ids?.length)w(p.ids)}catch(p){let Z_=p?.message||"";if(P===0&&Z_.includes("Replies exist")){if(!window.confirm("Delete this message and its replies?"))return;let c=await v8(G,!0,H);if(c?.ids?.length)w(c.ids);return}console.error("Failed to delete post:",p),alert(`Failed to delete message: ${Z_}`)}},[$,N2,k]),o1=y(async()=>{try{let X=await Vj();y_(J8(X));let G=X?.user||{};Z2((P)=>{let w=typeof G.name==="string"&&G.name.trim()?G.name.trim():"You",p=typeof G.avatar_url==="string"?G.avatar_url.trim():null,Z_=typeof G.avatar_background==="string"&&G.avatar_background.trim()?G.avatar_background.trim():null;if(P.name===w&&P.avatar_url===p&&P.avatar_background===Z_)return P;return{name:w,avatar_url:p,avatar_background:Z_}});let H=(X?.agents||[]).find((P)=>P.id==="default");V_(H?.name,H?.avatar_url)}catch(X){console.warn("Failed to load agents:",X)}try{let X=$,G=await n1(X);if(m0.current!==X)return;if(G)f_(G)}catch{}},[V_,$]);f(()=>{o1();let X=X2("sidebarWidth",null),G=Number.isFinite(X)?Math.min(Math.max(X,160),600):280;if(o$.current=G,b$.current)b$.current.style.setProperty("--sidebar-width",`${G}px`)},[o1]);let L4=z0||N_!==null,r1=y((X)=>{if(!X||typeof X!=="object")return;let G=X.agent_id;if(!G)return;let{agent_name:H,agent_avatar:P}=X;if(!H&&P===void 0)return;let w=g0.current?.[G]||{id:G},p=w.name||null,Z_=w.avatar_url??w.avatarUrl??w.avatar??null,F_=!1,c=!1;if(H&&H!==w.name)p=H,c=!0;if(P!==void 0){let O_=typeof P==="string"?P.trim():null,a_=typeof Z_==="string"?Z_.trim():null,J_=O_||null;if(J_!==(a_||null))Z_=J_,F_=!0}if(!c&&!F_)return;if(y_((O_)=>{let J_={...O_[G]||{id:G}};if(c)J_.name=p;if(F_)J_.avatar_url=Z_;return{...O_,[G]:J_}}),G==="default")V_(p,Z_,F_?Date.now():null)},[V_]),a1=y((X)=>{if(!X||typeof X!=="object")return;let G=X.user_name??X.userName,H=X.user_avatar??X.userAvatar,P=X.user_avatar_background??X.userAvatarBackground;if(G===void 0&&H===void 0&&P===void 0)return;Z2((w)=>{let p=typeof G==="string"&&G.trim()?G.trim():w.name||"You",Z_=H===void 0?w.avatar_url:typeof H==="string"&&H.trim()?H.trim():null,F_=P===void 0?w.avatar_background:typeof P==="string"&&P.trim()?P.trim():null;if(w.name===p&&w.avatar_url===Z_&&w.avatar_background===F_)return w;return{name:p,avatar_url:Z_,avatar_background:F_}})},[]),Q4=y((X)=>{if(!X||typeof X!=="object")return;let G=X.model??X.current;if(G!==void 0)d_(G);if(X.thinking_level!==void 0)H_(X.thinking_level??null);if(X.supports_thinking!==void 0)T_(Boolean(X.supports_thinking));if(X.provider_usage!==void 0)b_(X.provider_usage??null)},[]),Q2=y(()=>{let X=$;qj(X).then((G)=>{if(m0.current!==X)return;if(G)Q4(G)}).catch(()=>{})},[Q4,$]),s0=y(()=>{Oj().then((X)=>{let G=Array.isArray(X?.chats)?X.chats.filter((H)=>H&&typeof H.agent_name==="string"&&H.agent_name.trim()):[];o_(G)}).catch(()=>{})},[]),h0=y(()=>{p8(I).then((X)=>{let G=Array.isArray(X?.chats)?X.chats.filter((H)=>H&&typeof H.chat_jid==="string"&&typeof H.agent_name==="string"):[];i0(G)}).catch(()=>{})},[I]),j9=y((X)=>{let G=X?.row_id;if(G==null)return;L0.current.add(G),r_((H)=>H.filter((P)=>P?.row_id!==G)),Uj(G,l1($)).then(()=>{m_()}).catch((H)=>{console.warn("[queue] Failed to steer queued item:",H),j_("Failed to steer message","The queued message could not be sent as steering.","warning"),L0.current.delete(G),m_()})},[$,m_,r_,j_]),Z9=y((X)=>{let G=X?.row_id;if(G==null)return;let H=M0.current.filter((P)=>P?.row_id!==G).length;L0.current.add(G),d0(H),r_((P)=>P.filter((w)=>w?.row_id!==G)),Fj(G,l1($)).then(()=>{m_()}).catch((P)=>{console.warn("[queue] Failed to remove queued item:",P),j_("Failed to remove message","The queued message could not be removed.","warning"),L0.current.delete(G),m_()})},[d0,$,m_,r_,j_]),U4=y((X)=>{if(!X||typeof X!=="object")return;if(s0(),h0(),X?.queued==="followup"||X?.queued==="steer"){m_();return}let G=X?.command;if(G&&typeof G==="object"&&(G?.queued_followup||G?.queued_steer))m_()},[s0,h0,m_]),F4=y(()=>{if(w0.current)w0.current.abort(),w0.current=null;y0(null)},[]),v2=y(async(X)=>{let G=String(X||"").trim();if(!G)return j_("BTW needs a question","Usage: /btw <question>","warning"),!0;if(w0.current)w0.current.abort();let H=new AbortController;w0.current=H,y0({question:G,answer:"",thinking:"",error:null,model:null,status:"running"});try{let P=await Jj(G,{signal:H.signal,chatJid:_6($),systemPrompt:"Answer the user briefly and directly. This is a side conversation that should not affect the main chat until explicitly injected.",onEvent:(w,p)=>{if(w==="side_prompt_start")y0((Z_)=>Z_?{...Z_,status:"running"}:Z_)},onThinkingDelta:(w)=>{y0((p)=>p?{...p,thinking:`${p.thinking||""}${w||""}`}:p)},onTextDelta:(w)=>{y0((p)=>p?{...p,answer:`${p.answer||""}${w||""}`}:p)}});if(w0.current!==H)return!0;y0((w)=>w?{...w,answer:P?.result||w.answer||"",thinking:P?.thinking||w.thinking||"",model:P?.model||null,status:"success",error:null}:w)}catch(P){if(H.signal.aborted)return!0;y0((w)=>w?{...w,status:"error",error:P?.payload?.error||P?.message||"BTW request failed."}:w)}finally{if(w0.current===H)w0.current=null}return!0},[$,j_]),N9=y(async({content:X})=>{let G=e3(X);if(!G)return!1;if(G.type==="help")return j_("BTW usage","Use /btw <question> to open a side conversation.","info",4000),!0;if(G.type==="clear")return F4(),j_("BTW cleared","Closed the side conversation panel.","info"),!0;if(G.type==="ask")return await v2(G.question),!0;return!1},[F4,v2,j_]),K9=y(()=>{if(h_?.question)v2(h_.question)},[h_,v2]),z9=y(async()=>{let X=Z6(h_);if(!X)return;try{let G=await Y2("default",X,null,[],L4?"queue":null,$);U4(G),j_(G?.queued==="followup"?"BTW queued":"BTW injected",G?.queued==="followup"?"The BTW summary was queued as a follow-up because the agent is busy.":"The BTW summary was sent to the main chat.","info",3500)}catch(G){j_("BTW inject failed",G?.message||"Could not inject BTW answer into chat.","warning")}},[h_,U4,L4,j_]),U2=y(()=>{Q2(),s0(),h0(),m_(),j$()},[Q2,s0,h0,m_,j$]);f(()=>{U2();let X=setInterval(()=>{Q2(),s0(),h0(),m_()},60000);return()=>clearInterval(X)},[U2,Q2,s0,h0,m_]),f(()=>{h0()},[h0]),f(()=>{let X=!1;if(u(null),V)return X0(V),()=>{X=!0};if(Y)return R8(Y,50,0,$,v,I).then((G)=>{if(X)return;u(G.results),H0(!1)}).catch((G)=>{if(X)return;console.error("Failed to search:",G),u([]),H0(!1)}),()=>{X=!0};return X0(),()=>{X=!0}},[$,V,Y,v,I,X0,H0,u]),f(()=>{let X=s$.current||$;d$.current.set(X,g$())},[$,g$]),f(()=>{let X=s$.current||$;if(X===$)return;d$.current.set(X,g$()),s$.current=$,L0.current.clear(),T2(d$.current.get($)||null),m_(),Z$(),j$()},[$,Z$,j$,m_,T2,g$]);let Y9=y(()=>{let{currentHashtag:X,searchQuery:G}=Q0.current||{};if(!X&&!G)T0();U2()},[U2,T0]),J4=y((X,G)=>{let H=G?.turn_id,P=typeof G?.chat_jid==="string"&&G.chat_jid.trim()?G.chat_jid.trim():null,p=P?P===$:X==="connected"||X==="workspace_update";if(p)r1(G),a1(G);if(X==="ui_theme"){l3(G);return}if(X?.startsWith("agent_")){if(!(X==="agent_draft_delta"||X==="agent_thought_delta"||X==="agent_draft"||X==="agent_thought"))m$()}if(X==="connected"){l(null),h({text:"",totalLines:0}),c_(""),d({text:"",totalLines:0}),$_(null),S_.current=null,Z0();let c=$;g8(c).then((J_)=>{if(m0.current!==c)return;if(!J_||J_.status!=="active"||!J_.data)return;let K2=J_.data,t1=K2.turn_id||K2.turnId;if(t1)Q$(t1);if(n0({clearSilence:!0}),M$(K2),J_.thought&&J_.thought.text)I_.current=J_.thought.text,d({text:J_.thought.text,totalLines:J_.thought.totalLines||0});if(J_.draft&&J_.draft.text)W_.current=J_.draft.text,h({text:J_.draft.text,totalLines:J_.draft.totalLines||0})}).catch((J_)=>{console.warn("Failed to fetch agent status:",J_)});let{currentHashtag:O_,searchQuery:a_}=Q0.current||{};if(!O_&&!a_)T0();U2();return}if(X==="agent_status"){if(!p){if(G?.type==="done"||G?.type==="error")s0(),h0();return}if(G.type==="done"||G.type==="error"){if(H&&X_.current&&H!==X_.current)return;if(G.type==="done"){f2(H||X_.current);let{currentHashtag:c,searchQuery:O_}=Q0.current||{};if(!c&&!O_)T0();if(G.context_usage)f_(G.context_usage)}if(u_.current=!1,Z0(),L0.current.clear(),s0(),m_(),h({text:"",totalLines:0}),c_(""),d({text:"",totalLines:0}),$_(null),G.type==="error")l({type:"error",title:G.title||"Agent error"}),setTimeout(()=>l(null),8000);else l(null)}else{if(H)Q$(H);if(n0({running:!0,clearSilence:!0}),G.type==="thinking")W_.current="",I_.current="",h({text:"",totalLines:0}),c_(""),d({text:"",totalLines:0});S0.current=G,l((c)=>{if(c&&c.type===G.type&&c.title===G.title)return c;return G})}return}if(X==="agent_steer_queued"){if(!p)return;if(H&&X_.current&&H!==X_.current)return;let c=H||X_.current;if(!c)return;__.current=c,A_(c);return}if(X==="agent_followup_queued"){if(!p)return;let c=G?.row_id,O_=G?.content;if(c!=null&&typeof O_==="string"&&O_.trim())r_((a_)=>{if(a_.some((J_)=>J_?.row_id===c))return a_;return[...a_,{row_id:c,content:O_,timestamp:G?.timestamp||null,thread_id:G?.thread_id??null}]});m_();return}if(X==="agent_followup_consumed"){if(!p)return;let c=G?.row_id;if(c!=null){let O_=M0.current.filter((a_)=>a_.row_id!==c).length;d0(O_),r_((a_)=>a_.filter((J_)=>J_.row_id!==c))}m_(),T0();return}if(X==="agent_followup_removed"){if(!p)return;let c=G?.row_id;if(c!=null){let O_=M0.current.filter((a_)=>a_.row_id!==c).length;L0.current.add(c),d0(O_),r_((a_)=>a_.filter((J_)=>J_.row_id!==c))}m_();return}if(X==="agent_draft_delta"){if(!p)return;if(H&&X_.current&&H!==X_.current)return;if(H&&!X_.current)Q$(H);if(n0({running:!0,clearSilence:!0}),G?.reset)W_.current="";if(G?.delta)W_.current+=G.delta;let c=Date.now();if(!k$.current||c-k$.current>=100){k$.current=c;let O_=W_.current,a_=c1(O_);if(G_.current)h((J_)=>({text:J_?.text||"",totalLines:a_,fullText:O_}));else h({text:O_,totalLines:a_})}return}if(X==="agent_draft"){if(!p)return;if(H&&X_.current&&H!==X_.current)return;if(H&&!X_.current)Q$(H);n0({running:!0,clearSilence:!0});let c=G.text||"",O_=G.mode||(G.kind==="plan"?"replace":"append"),a_=Number.isFinite(G.total_lines)?G.total_lines:c?c.replace(/\r\n/g,`
`).split(`
`).length:0;if(G.kind==="plan")if(O_==="replace")c_(c);else c_((J_)=>(J_||"")+c);else if(!G_.current)W_.current=c,h({text:c,totalLines:a_});return}if(X==="agent_thought_delta"){if(!p)return;if(H&&X_.current&&H!==X_.current)return;if(H&&!X_.current)Q$(H);if(n0({running:!0,clearSilence:!0}),G?.reset)I_.current="";if(typeof G?.delta==="string")I_.current+=G.delta;let c=Date.now();if(C_.current&&(!A$.current||c-A$.current>=100)){A$.current=c;let O_=I_.current;d((a_)=>({text:a_?.text||"",totalLines:c1(O_),fullText:O_}))}return}if(X==="agent_thought"){if(!p)return;if(H&&X_.current&&H!==X_.current)return;if(H&&!X_.current)Q$(H);n0({running:!0,clearSilence:!0});let c=G.text||"",O_=Number.isFinite(G.total_lines)?G.total_lines:c?c.replace(/\r\n/g,`
`).split(`
`).length:0;if(!C_.current)I_.current=c,d({text:c,totalLines:O_});return}if(X==="model_changed"){if(!p)return;if(G?.model!==void 0)d_(G.model);if(G?.thinking_level!==void 0)H_(G.thinking_level??null);if(G?.supports_thinking!==void 0)T_(Boolean(G.supports_thinking));let c=$;n1(c).then((O_)=>{if(m0.current!==c)return;if(O_)f_(O_)}).catch(()=>{});return}if(X==="workspace_update"){if(typeof window<"u")window.dispatchEvent(new CustomEvent("workspace-update",{detail:G}));return}if(S8(X)){if(!p)return;if(x8(X,G),X==="extension_ui_notify"&&typeof G?.message==="string")j_(G.message,null,G?.type||"info");if(X==="extension_ui_error"&&typeof G?.error==="string")j_("Extension UI error",G.error,"error",5000);return}let{currentHashtag:Z_,searchQuery:F_}=Q0.current;if(X==="agent_response"){if(!p)return;R2(),e0.current={post:G,turnId:X_.current}}if(!Z_&&!F_&&p&&(X==="new_post"||X==="new_reply"||X==="agent_response"))u((c)=>{if(!c)return[G];if(c.some((O_)=>O_.id===G.id))return c;return[...c,G]}),O.current?.();if(X==="interaction_updated"){if(!p)return;u((c)=>{if(!c)return c;if(!c.some((O_)=>O_.id===G.id))return c;return c.map((O_)=>O_.id===G.id?G:O_)})}if(X==="interaction_deleted"){if(!p)return;let c=G?.ids||[];if(c.length){k(()=>{u((J_)=>J_?J_.filter((K2)=>!c.includes(K2.id)):J_)});let{currentHashtag:O_,searchQuery:a_}=Q0.current;if(C$.current&&!O_&&!a_)O4.current?.({preserveScroll:!0,preserveMode:"top"})}}},[Z0,m$,$,O4,n0,f2,k,s0,h0,T0,R2,Q$,M$,r1,a1,Q2,m_,r_]);f(()=>{if(typeof window>"u")return;let X=window.__PICLAW_TEST_API||{};return X.emit=J4,X.reset=()=>{R2(),Z0(),l(null),h({text:"",totalLines:0}),c_(""),d({text:"",totalLines:0}),$_(null)},X.finalize=()=>s1(),window.__PICLAW_TEST_API=X,()=>{if(window.__PICLAW_TEST_API===X)window.__PICLAW_TEST_API=void 0}},[Z0,s1,J4,R2]),V8({handleSseEvent:J4,handleConnectionStatusChange:o8,loadPosts:X0,onWake:Y9,chatJid:$}),f(()=>{if(!N2||N2.length===0)return;let X=location.hash;if(!X||!X.startsWith("#msg-"))return;let G=X.slice(5);$$(G),history.replaceState(null,"",location.pathname+location.search)},[N2,$$]);let H4=N_!==null;f(()=>{if(K!=="connected")return;let G=setInterval(()=>{let{currentHashtag:H,searchQuery:P}=Q0.current||{},w=!H&&!P;if(H4){if(w)T0();m_(),Z$(),j$()}else{if(w)T0();Z$(),j$()}},H4?15000:60000);return()=>clearInterval(G)},[K,H4,Z$,j$,m_,T0]),f(()=>{return f8(()=>{Z$(),j$(),m_()})},[Z$,j$,m_]);let G9=y(()=>{I$((X)=>!X)},[]),W9=y((X)=>{if(typeof window>"u")return;let G=String(X||"").trim();if(!G||G===$)return;let H=x2(window.location.href,G,{chatOnly:j});window.location.assign(H)},[j,$]),X9=y(async()=>{if(typeof window>"u"||!L_?.chat_jid)return;let X=L_.agent_name||"",G=L_.display_name||"",H=window.prompt("Branch display name",G);if(H===null)return;let P=window.prompt("Agent handle (without @)",X);if(P===null)return;try{let w=await Bj(L_.chat_jid,{displayName:H,agentName:P});await Promise.allSettled([s0(),h0()]);let p=w?.branch?.agent_name||String(P||"").trim()||X;j_("Branch renamed",`This chat is now @${p}.`,"info",3500)}catch(w){let p=w instanceof Error?w.message:String(w||"Could not rename branch.");j_("Could not rename branch",p||"Could not rename branch.","warning",5000)}},[L_,s0,h0,j_]),V9=y(async()=>{if(typeof window>"u"||!L_?.chat_jid)return;if(L_.chat_jid===(L_.root_chat_jid||L_.chat_jid)){j_("Cannot prune branch","The root chat branch cannot be pruned.","warning",4000);return}let G=L_.display_name||`@${L_.agent_name||L_.chat_jid}`;if(!window.confirm(`Prune ${G}?

This archives the branch agent and removes it from the branch picker. Chat history is preserved.`))return;try{await Lj(L_.chat_jid),await Promise.allSettled([s0(),h0()]);let P=L_.root_chat_jid||"web:default";j_("Branch pruned",`${G} has been archived.`,"info",3000);let w=x2(window.location.href,P,{chatOnly:j});window.location.assign(w)}catch(P){let w=P instanceof Error?P.message:String(P||"Could not prune branch.");j_("Could not prune branch",w||"Could not prune branch.","warning",5000)}},[j,L_,s0,h0,j_]);f(()=>{if(!Z||typeof window>"u")return;let X=!1;return(async()=>{try{w_({status:"running",message:"Preparing a new chat branch…"});let G=await s2(N);if(X)return;let H=G?.branch,P=typeof H?.chat_jid==="string"&&H.chat_jid.trim()?H.chat_jid.trim():null;if(!P)throw Error("Branch fork did not return a chat id.");let w=x2(window.location.href,P,{chatOnly:!0});window.location.replace(w)}catch(G){if(X)return;w_({status:"error",message:i1(G)})}})(),()=>{X=!0}},[Z,N]);let q9=y(async()=>{if(typeof window>"u"||W)return;let X=y8($);if(!X){j_("Could not open branch window","Opening branch windows is unavailable in standalone webapp mode.","warning",5000);return}if(X.mode==="tab"){let H=M8(window.location.href,$,{chatOnly:!0});if(!window.open(H,X.target))j_("Could not open branch window","The browser blocked opening a new tab or window.","warning",5000);return}let G=k8(X);if(!G){j_("Could not open branch window","The browser blocked opening a new tab or window.","warning",5000);return}A8(G,{title:"Opening branch…",message:"Preparing a new chat branch. This should only take a moment."});try{let P=(await s2($))?.branch,w=typeof P?.chat_jid==="string"&&P.chat_jid.trim()?P.chat_jid.trim():null;if(!w)throw Error("Branch fork did not return a chat id.");try{let Z_=await f4();o_(Array.isArray(Z_?.chats)?Z_.chats:[])}catch{}try{let Z_=await p8(I);i0(Array.isArray(Z_?.chats)?Z_.chats:[])}catch{}let p=x2(window.location.href,w,{chatOnly:!0});w8(G,p)}catch(H){P8(G),j_("Could not open branch window",i1(H),"error",5000)}},[$,I,W,j_]);f(()=>{if(!x0)return;if(typeof window>"u")return;let X=b$.current;if(!X)return;if(!w$.current){let G=X2("editorWidth",null),H=o$.current||280;w$.current=Number.isFinite(G)?G:H}if(X.style.setProperty("--editor-width",`${w$.current}px`),!t0.current){let G=X2("dockHeight",null);t0.current=Number.isFinite(G)?G:200}X.style.setProperty("--dock-height",`${t0.current}px`)},[x0]),f(()=>{if(!I0||j)return;let X=(G)=>{if(G.ctrlKey&&G.key==="`")G.preventDefault(),b0()};return document.addEventListener("keydown",X),()=>document.removeEventListener("keydown",X)},[b0,I0,j]);let O9=Boolean(Q_&&Q_===(N_?.turn_id||Y_));if(Z)return L`
            <div class="app-shell chat-only">
                <div class="container" style=${{display:"flex",alignItems:"center",justifyContent:"center",minHeight:"100vh",padding:"24px"}}>
                    <div class="card" style=${{width:"min(560px, 100%)",padding:"24px"}}>
                        <h1 style=${{margin:"0 0 12px",fontSize:"1.1rem"}}>
                            ${k_.status==="error"?"Could not open branch window":"Opening branch…"}
                        </h1>
                        <p style=${{margin:0,lineHeight:1.6}}>${k_.message}</p>
                    </div>
                </div>
            </div>
        `;return L`
        <div class=${`app-shell${A0?"":" workspace-collapsed"}${x0?" editor-open":""}${j?" chat-only":""}`} ref=${b$}>
            ${!j&&L`
                <${z8}
                    onFileSelect=${E_}
                    visible=${A0}
                    active=${A0||x0}
                    onOpenEditor=${i_}
                    onOpenTerminalTab=${n$}
                    onToggleTerminal=${I0?b0:void 0}
                    terminalVisible=${Boolean(I0&&u0)}
                />
                <button
                    class=${`workspace-toggle-tab${A0?" open":" closed"}`}
                    onClick=${G9}
                    title=${A0?"Hide workspace":"Show workspace"}
                    aria-label=${A0?"Hide workspace":"Show workspace"}
                >
                    <svg class="workspace-toggle-tab-icon" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                        <polyline points="6 3 11 8 6 13" />
                    </svg>
                </button>
                <div class="workspace-splitter" onMouseDown=${h8} onTouchStart=${i8}></div>
            `}
            ${q$&&L`
                <div class="editor-pane-container">
                    ${x0&&L`
                        <${G8}
                            tabs=${$2}
                            activeId=${v0}
                            onActivate=${G0}
                            onClose=${H$}
                            onCloseOthers=${F0}
                            onCloseAll=${a0}
                            onTogglePin=${D$}
                            onTogglePreview=${E$}
                            previewTabs=${i$}
                            onToggleDock=${I0?b0:void 0}
                            dockVisible=${I0&&u0}
                        />
                    `}
                    ${x0&&L`<div class="editor-pane-host" ref=${R$}></div>`}
                    ${x0&&v0&&i$.has(v0)&&L`
                        <${X8}
                            getContent=${()=>$0.current?.getContent?.()}
                            path=${v0}
                            onClose=${()=>E$(v0)}
                        />
                    `}
                    ${I0&&u0&&L`<div class="dock-splitter" onMouseDown=${d8} onTouchStart=${s8}></div>`}
                    ${I0&&L`<div class=${`dock-panel${u0?"":" hidden"}`}>
                        <div class="dock-panel-header">
                            <span class="dock-panel-title">Terminal</span>
                            <button class="dock-panel-close" onClick=${b0} title="Hide terminal (Ctrl+\`)" aria-label="Hide terminal">
                                <svg viewBox="0 0 16 16" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round">
                                    <line x1="4" y1="4" x2="12" y2="12"/>
                                    <line x1="12" y1="4" x2="4" y2="12"/>
                                </svg>
                            </button>
                        </div>
                        <div class="dock-panel-body" ref=${V$}></div>
                    </div>`}
                </div>
                <div class="editor-splitter" onMouseDown=${l8} onTouchStart=${n8}></div>
            `}
            <div class="container">
                ${Y&&H8()&&L`<div class="search-results-spacer"></div>`}
                ${j&&L`
                    <div class="chat-window-header">
                        <div class="chat-window-header-main">
                            <span class="chat-window-header-title">
                                ${L_?.display_name||L_?.agent_name?`@${L_?.agent_name||$}`:$}
                            </span>
                            <span class="chat-window-header-subtitle">${L_?.display_name||$}</span>
                        </div>
                        <div class="chat-window-header-actions">
                            ${K0.length>1&&L`
                                <label class="chat-window-branch-picker-wrap">
                                    <span class="chat-window-branch-picker-label">Branch</span>
                                    <select
                                        class="chat-window-branch-picker"
                                        value=${$}
                                        onChange=${(X)=>W9(X.currentTarget.value)}
                                    >
                                        ${K0.map((X)=>L`
                                            <option key=${X.chat_jid} value=${X.chat_jid}>
                                                ${`@${X.agent_name}${X.display_name?` — ${X.display_name}`:""}${X.is_active?" • active":""}`}
                                            </option>
                                        `)}
                                    </select>
                                </label>
                            `}
                            ${L_?.chat_jid&&L`
                                <button
                                    class="chat-window-header-button"
                                    type="button"
                                    onClick=${X9}
                                    title="Rename this branch"
                                    aria-label="Rename this branch"
                                >
                                    Rename
                                </button>
                            `}
                            ${L_?.chat_jid&&L_.chat_jid!==(L_.root_chat_jid||L_.chat_jid)&&L`
                                <button
                                    class="chat-window-header-button"
                                    type="button"
                                    onClick=${V9}
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
                ${(V||Y)&&L`
                    <div class="hashtag-header">
                        <button class="back-btn" onClick=${a8}>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
                        </button>
                        <span>${V?`#${V}`:`Search: ${Y} · ${e}`}</span>
                    </div>
                `}
                <${P6}
                    posts=${N2}
                    hasMore=${q_}
                    onLoadMore=${c8}
                    timelineRef=${B$}
                    onHashtagClick=${r8}
                    onMessageRef=${L$}
                    onScrollToMessage=${$$}
                    onFileRef=${_$}
                    onPostClick=${void 0}
                    onDeletePost=${$9}
                    emptyMessage=${V?`No posts with #${V}`:Y?`No results for "${Y}"`:void 0}
                    agents=${D_}
                    user=${O$}
                    reverse=${!(Y&&!V)}
                    removingPostIds=${h$}
                    searchQuery=${Y}
                />
                <${V6}
                    status=${N_}
                    draft=${K_}
                    plan=${B_}
                    thought=${o}
                    pendingRequest=${z_}
                    intent=${i}
                    turnId=${Y_}
                    steerQueued=${O9}
                    onPanelToggle=${q4}
                />
                <${N6}
                    session=${h_}
                    onClose=${F4}
                    onRetry=${K9}
                    onInject=${z9}
                />
                <${T3}
                    onPost=${()=>{X0(),J()}}
                    onFocus=${J}
                    searchMode=${C}
                    searchScope=${v}
                    onSearch=${t8}
                    onSearchScopeChange=${R}
                    onEnterSearch=${e8}
                    onExitSearch=${_9}
                    fileRefs=${E}
                    onRemoveFileRef=${P_}
                    onClearFileRefs=${J0}
                    onSetFileRefs=${p0}
                    messageRefs=${S}
                    onRemoveMessageRef=${B2}
                    onClearMessageRefs=${S$}
                    onSetMessageRefs=${W0}
                    activeEditorPath=${j?null:v0}
                    onAttachEditorFile=${j?void 0:u$}
                    onOpenFilePill=${_$}
                    followupQueueCount=${Y0}
                    followupQueueItems=${B0}
                    onInjectQueuedFollowup=${j9}
                    onRemoveQueuedFollowup=${Z9}
                    onSubmitIntercept=${N9}
                    onMessageResponse=${U4}
                    onSubmitError=${r$}
                    onPopOutChat=${W?void 0:q9}
                    isAgentActive=${L4}
                    activeChatAgents=${D0}
                    currentChatJid=${$}
                    connectionStatus=${K}
                    activeModel=${n_}
                    modelUsage=${N0}
                    thinkingLevel=${s_}
                    supportsThinking=${x_}
                    contextUsage=${U0}
                    notificationsEnabled=${G$}
                    notificationPermission=${W$}
                    onToggleNotifications=${C0}
                    onModelChange=${d_}
                    onModelStateChange=${Q4}
                />
                <${q6}
                    request=${z_}
                    onRespond=${()=>{$_(null),S_.current=null}}
                />
            </div>
        </div>
    `}function Dj(){let _=typeof window>"u"?new URLSearchParams:new URL(window.location.href).searchParams;return L`<${Hj} locationParams=${_} />`}y3(L`<${Dj} />`,document.getElementById("app"));

//# debugId=C1B659F926511EFF64756E2164756E21
//# sourceMappingURL=app.bundle.js.map
