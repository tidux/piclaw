var x5=Object.defineProperty;var T5=(_)=>_;function C5(_,$){this[_]=T5.bind(null,$)}var f5=(_,$)=>{for(var j in $)x5(_,j,{get:$[j],enumerable:!0,configurable:!0,set:C5.bind($,j)})};var W1,j0,a3,b5,r$,u3,t3,e3,_8,Z4,e1,_4,S5,X1={},L1=[],R5=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,U1=Array.isArray;function m$(_,$){for(var j in $)_[j]=$[j];return _}function N4(_){_&&_.parentNode&&_.parentNode.removeChild(_)}function $8(_,$,j){var Z,N,Y,z={};for(Y in $)Y=="key"?Z=$[Y]:Y=="ref"?N=$[Y]:z[Y]=$[Y];if(arguments.length>2&&(z.children=arguments.length>3?W1.call(arguments,2):j),typeof _=="function"&&_.defaultProps!=null)for(Y in _.defaultProps)z[Y]===void 0&&(z[Y]=_.defaultProps[Y]);return V1(_,z,Z,N,null)}function V1(_,$,j,Z,N){var Y={type:_,props:$,key:j,ref:Z,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:N==null?++a3:N,__i:-1,__u:0};return N==null&&j0.vnode!=null&&j0.vnode(Y),Y}function O1(_){return _.children}function q1(_,$){this.props=_,this.context=$}function k2(_,$){if($==null)return _.__?k2(_.__,_.__i+1):null;for(var j;$<_.__k.length;$++)if((j=_.__k[$])!=null&&j.__e!=null)return j.__e;return typeof _.type=="function"?k2(_):null}function v5(_){if(_.__P&&_.__d){var $=_.__v,j=$.__e,Z=[],N=[],Y=m$({},$);Y.__v=$.__v+1,j0.vnode&&j0.vnode(Y),Y4(_.__P,Y,$,_.__n,_.__P.namespaceURI,32&$.__u?[j]:null,Z,j==null?k2($):j,!!(32&$.__u),N),Y.__v=$.__v,Y.__.__k[Y.__i]=Y,Y8(Z,Y,N),$.__e=$.__=null,Y.__e!=j&&j8(Y)}}function j8(_){if((_=_.__)!=null&&_.__c!=null)return _.__e=_.__c.base=null,_.__k.some(function($){if($!=null&&$.__e!=null)return _.__e=_.__c.base=$.__e}),j8(_)}function m3(_){(!_.__d&&(_.__d=!0)&&r$.push(_)&&!B1.__r++||u3!=j0.debounceRendering)&&((u3=j0.debounceRendering)||t3)(B1)}function B1(){try{for(var _,$=1;r$.length;)r$.length>$&&r$.sort(e3),_=r$.shift(),$=r$.length,v5(_)}finally{r$.length=B1.__r=0}}function Z8(_,$,j,Z,N,Y,z,q,L,Q,B){var X,H,M,b,m,g,y,x=Z&&Z.__k||L1,h=$.length;for(L=u5(j,$,x,L,h),X=0;X<h;X++)(M=j.__k[X])!=null&&(H=M.__i!=-1&&x[M.__i]||X1,M.__i=X,g=Y4(_,M,H,N,Y,z,q,L,Q,B),b=M.__e,M.ref&&H.ref!=M.ref&&(H.ref&&z4(H.ref,null,M),B.push(M.ref,M.__c||b,M)),m==null&&b!=null&&(m=b),(y=!!(4&M.__u))||H.__k===M.__k?L=N8(M,L,_,y):typeof M.type=="function"&&g!==void 0?L=g:b&&(L=b.nextSibling),M.__u&=-7);return j.__e=m,L}function u5(_,$,j,Z,N){var Y,z,q,L,Q,B=j.length,X=B,H=0;for(_.__k=Array(N),Y=0;Y<N;Y++)(z=$[Y])!=null&&typeof z!="boolean"&&typeof z!="function"?(typeof z=="string"||typeof z=="number"||typeof z=="bigint"||z.constructor==String?z=_.__k[Y]=V1(null,z,null,null,null):U1(z)?z=_.__k[Y]=V1(O1,{children:z},null,null,null):z.constructor===void 0&&z.__b>0?z=_.__k[Y]=V1(z.type,z.props,z.key,z.ref?z.ref:null,z.__v):_.__k[Y]=z,L=Y+H,z.__=_,z.__b=_.__b+1,q=null,(Q=z.__i=m5(z,j,L,X))!=-1&&(X--,(q=j[Q])&&(q.__u|=2)),q==null||q.__v==null?(Q==-1&&(N>B?H--:N<B&&H++),typeof z.type!="function"&&(z.__u|=4)):Q!=L&&(Q==L-1?H--:Q==L+1?H++:(Q>L?H--:H++,z.__u|=4))):_.__k[Y]=null;if(X)for(Y=0;Y<B;Y++)(q=j[Y])!=null&&(2&q.__u)==0&&(q.__e==Z&&(Z=k2(q)),K8(q,q));return Z}function N8(_,$,j,Z){var N,Y;if(typeof _.type=="function"){for(N=_.__k,Y=0;N&&Y<N.length;Y++)N[Y]&&(N[Y].__=_,$=N8(N[Y],$,j,Z));return $}_.__e!=$&&(Z&&($&&_.type&&!$.parentNode&&($=k2(_)),j.insertBefore(_.__e,$||null)),$=_.__e);do $=$&&$.nextSibling;while($!=null&&$.nodeType==8);return $}function m5(_,$,j,Z){var N,Y,z,q=_.key,L=_.type,Q=$[j],B=Q!=null&&(2&Q.__u)==0;if(Q===null&&q==null||B&&q==Q.key&&L==Q.type)return j;if(Z>(B?1:0)){for(N=j-1,Y=j+1;N>=0||Y<$.length;)if((Q=$[z=N>=0?N--:Y++])!=null&&(2&Q.__u)==0&&q==Q.key&&L==Q.type)return z}return-1}function g3(_,$,j){$[0]=="-"?_.setProperty($,j==null?"":j):_[$]=j==null?"":typeof j!="number"||R5.test($)?j:j+"px"}function G1(_,$,j,Z,N){var Y,z;_:if($=="style")if(typeof j=="string")_.style.cssText=j;else{if(typeof Z=="string"&&(_.style.cssText=Z=""),Z)for($ in Z)j&&$ in j||g3(_.style,$,"");if(j)for($ in j)Z&&j[$]==Z[$]||g3(_.style,$,j[$])}else if($[0]=="o"&&$[1]=="n")Y=$!=($=$.replace(_8,"$1")),z=$.toLowerCase(),$=z in _||$=="onFocusOut"||$=="onFocusIn"?z.slice(2):$.slice(2),_.l||(_.l={}),_.l[$+Y]=j,j?Z?j.u=Z.u:(j.u=Z4,_.addEventListener($,Y?_4:e1,Y)):_.removeEventListener($,Y?_4:e1,Y);else{if(N=="http://www.w3.org/2000/svg")$=$.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if($!="width"&&$!="height"&&$!="href"&&$!="list"&&$!="form"&&$!="tabIndex"&&$!="download"&&$!="rowSpan"&&$!="colSpan"&&$!="role"&&$!="popover"&&$ in _)try{_[$]=j==null?"":j;break _}catch(q){}typeof j=="function"||(j==null||j===!1&&$[4]!="-"?_.removeAttribute($):_.setAttribute($,$=="popover"&&j==1?"":j))}}function p3(_){return function($){if(this.l){var j=this.l[$.type+_];if($.t==null)$.t=Z4++;else if($.t<j.u)return;return j(j0.event?j0.event($):$)}}}function Y4(_,$,j,Z,N,Y,z,q,L,Q){var B,X,H,M,b,m,g,y,x,h,E,S,s,e,o,j_=$.type;if($.constructor!==void 0)return null;128&j.__u&&(L=!!(32&j.__u),Y=[q=$.__e=j.__e]),(B=j0.__b)&&B($);_:if(typeof j_=="function")try{if(y=$.props,x=j_.prototype&&j_.prototype.render,h=(B=j_.contextType)&&Z[B.__c],E=B?h?h.props.value:B.__:Z,j.__c?g=(X=$.__c=j.__c).__=X.__E:(x?$.__c=X=new j_(y,E):($.__c=X=new q1(y,E),X.constructor=j_,X.render=p5),h&&h.sub(X),X.state||(X.state={}),X.__n=Z,H=X.__d=!0,X.__h=[],X._sb=[]),x&&X.__s==null&&(X.__s=X.state),x&&j_.getDerivedStateFromProps!=null&&(X.__s==X.state&&(X.__s=m$({},X.__s)),m$(X.__s,j_.getDerivedStateFromProps(y,X.__s))),M=X.props,b=X.state,X.__v=$,H)x&&j_.getDerivedStateFromProps==null&&X.componentWillMount!=null&&X.componentWillMount(),x&&X.componentDidMount!=null&&X.__h.push(X.componentDidMount);else{if(x&&j_.getDerivedStateFromProps==null&&y!==M&&X.componentWillReceiveProps!=null&&X.componentWillReceiveProps(y,E),$.__v==j.__v||!X.__e&&X.shouldComponentUpdate!=null&&X.shouldComponentUpdate(y,X.__s,E)===!1){$.__v!=j.__v&&(X.props=y,X.state=X.__s,X.__d=!1),$.__e=j.__e,$.__k=j.__k,$.__k.some(function(l){l&&(l.__=$)}),L1.push.apply(X.__h,X._sb),X._sb=[],X.__h.length&&z.push(X);break _}X.componentWillUpdate!=null&&X.componentWillUpdate(y,X.__s,E),x&&X.componentDidUpdate!=null&&X.__h.push(function(){X.componentDidUpdate(M,b,m)})}if(X.context=E,X.props=y,X.__P=_,X.__e=!1,S=j0.__r,s=0,x)X.state=X.__s,X.__d=!1,S&&S($),B=X.render(X.props,X.state,X.context),L1.push.apply(X.__h,X._sb),X._sb=[];else do X.__d=!1,S&&S($),B=X.render(X.props,X.state,X.context),X.state=X.__s;while(X.__d&&++s<25);X.state=X.__s,X.getChildContext!=null&&(Z=m$(m$({},Z),X.getChildContext())),x&&!H&&X.getSnapshotBeforeUpdate!=null&&(m=X.getSnapshotBeforeUpdate(M,b)),e=B!=null&&B.type===O1&&B.key==null?z8(B.props.children):B,q=Z8(_,U1(e)?e:[e],$,j,Z,N,Y,z,q,L,Q),X.base=$.__e,$.__u&=-161,X.__h.length&&z.push(X),g&&(X.__E=X.__=null)}catch(l){if($.__v=null,L||Y!=null)if(l.then){for($.__u|=L?160:128;q&&q.nodeType==8&&q.nextSibling;)q=q.nextSibling;Y[Y.indexOf(q)]=null,$.__e=q}else{for(o=Y.length;o--;)N4(Y[o]);$4($)}else $.__e=j.__e,$.__k=j.__k,l.then||$4($);j0.__e(l,$,j)}else Y==null&&$.__v==j.__v?($.__k=j.__k,$.__e=j.__e):q=$.__e=g5(j.__e,$,j,Z,N,Y,z,L,Q);return(B=j0.diffed)&&B($),128&$.__u?void 0:q}function $4(_){_&&(_.__c&&(_.__c.__e=!0),_.__k&&_.__k.some($4))}function Y8(_,$,j){for(var Z=0;Z<j.length;Z++)z4(j[Z],j[++Z],j[++Z]);j0.__c&&j0.__c($,_),_.some(function(N){try{_=N.__h,N.__h=[],_.some(function(Y){Y.call(N)})}catch(Y){j0.__e(Y,N.__v)}})}function z8(_){return typeof _!="object"||_==null||_.__b>0?_:U1(_)?_.map(z8):m$({},_)}function g5(_,$,j,Z,N,Y,z,q,L){var Q,B,X,H,M,b,m,g=j.props||X1,y=$.props,x=$.type;if(x=="svg"?N="http://www.w3.org/2000/svg":x=="math"?N="http://www.w3.org/1998/Math/MathML":N||(N="http://www.w3.org/1999/xhtml"),Y!=null){for(Q=0;Q<Y.length;Q++)if((M=Y[Q])&&"setAttribute"in M==!!x&&(x?M.localName==x:M.nodeType==3)){_=M,Y[Q]=null;break}}if(_==null){if(x==null)return document.createTextNode(y);_=document.createElementNS(N,x,y.is&&y),q&&(j0.__m&&j0.__m($,Y),q=!1),Y=null}if(x==null)g===y||q&&_.data==y||(_.data=y);else{if(Y=Y&&W1.call(_.childNodes),!q&&Y!=null)for(g={},Q=0;Q<_.attributes.length;Q++)g[(M=_.attributes[Q]).name]=M.value;for(Q in g)M=g[Q],Q=="dangerouslySetInnerHTML"?X=M:Q=="children"||(Q in y)||Q=="value"&&("defaultValue"in y)||Q=="checked"&&("defaultChecked"in y)||G1(_,Q,null,M,N);for(Q in y)M=y[Q],Q=="children"?H=M:Q=="dangerouslySetInnerHTML"?B=M:Q=="value"?b=M:Q=="checked"?m=M:q&&typeof M!="function"||g[Q]===M||G1(_,Q,M,g[Q],N);if(B)q||X&&(B.__html==X.__html||B.__html==_.innerHTML)||(_.innerHTML=B.__html),$.__k=[];else if(X&&(_.innerHTML=""),Z8($.type=="template"?_.content:_,U1(H)?H:[H],$,j,Z,x=="foreignObject"?"http://www.w3.org/1999/xhtml":N,Y,z,Y?Y[0]:j.__k&&k2(j,0),q,L),Y!=null)for(Q=Y.length;Q--;)N4(Y[Q]);q||(Q="value",x=="progress"&&b==null?_.removeAttribute("value"):b!=null&&(b!==_[Q]||x=="progress"&&!b||x=="option"&&b!=g[Q])&&G1(_,Q,b,g[Q],N),Q="checked",m!=null&&m!=_[Q]&&G1(_,Q,m,g[Q],N))}return _}function z4(_,$,j){try{if(typeof _=="function"){var Z=typeof _.__u=="function";Z&&_.__u(),Z&&$==null||(_.__u=_($))}else _.current=$}catch(N){j0.__e(N,j)}}function K8(_,$,j){var Z,N;if(j0.unmount&&j0.unmount(_),(Z=_.ref)&&(Z.current&&Z.current!=_.__e||z4(Z,null,$)),(Z=_.__c)!=null){if(Z.componentWillUnmount)try{Z.componentWillUnmount()}catch(Y){j0.__e(Y,$)}Z.base=Z.__P=null}if(Z=_.__k)for(N=0;N<Z.length;N++)Z[N]&&K8(Z[N],$,j||typeof _.type!="function");j||N4(_.__e),_.__c=_.__=_.__e=void 0}function p5(_,$,j){return this.constructor(_,j)}function G8(_,$,j){var Z,N,Y,z;$==document&&($=document.documentElement),j0.__&&j0.__(_,$),N=(Z=typeof j=="function")?null:j&&j.__k||$.__k,Y=[],z=[],Y4($,_=(!Z&&j||$).__k=$8(O1,null,[_]),N||X1,X1,$.namespaceURI,!Z&&j?[j]:N?null:$.firstChild?W1.call($.childNodes):null,Y,!Z&&j?j:N?N.__e:$.firstChild,Z,z),Y8(Y,_,z)}W1=L1.slice,j0={__e:function(_,$,j,Z){for(var N,Y,z;$=$.__;)if((N=$.__c)&&!N.__)try{if((Y=N.constructor)&&Y.getDerivedStateFromError!=null&&(N.setState(Y.getDerivedStateFromError(_)),z=N.__d),N.componentDidCatch!=null&&(N.componentDidCatch(_,Z||{}),z=N.__d),z)return N.__E=N}catch(q){_=q}throw _}},a3=0,b5=function(_){return _!=null&&_.constructor===void 0},q1.prototype.setState=function(_,$){var j;j=this.__s!=null&&this.__s!=this.state?this.__s:this.__s=m$({},this.state),typeof _=="function"&&(_=_(m$({},j),this.props)),_&&m$(j,_),_!=null&&this.__v&&($&&this._sb.push($),m3(this))},q1.prototype.forceUpdate=function(_){this.__v&&(this.__e=!0,_&&this.__h.push(_),m3(this))},q1.prototype.render=O1,r$=[],t3=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,e3=function(_,$){return _.__v.__b-$.__v.__b},B1.__r=0,_8=/(PointerCapture)$|Capture$/i,Z4=0,e1=p3(!1),_4=p3(!0),S5=0;var l2,O0,t1,c3,n2=0,V8=[],U0=j0,h3=U0.__b,i3=U0.__r,l3=U0.diffed,n3=U0.__c,d3=U0.unmount,s3=U0.__;function K4(_,$){U0.__h&&U0.__h(O0,_,n2||$),n2=0;var j=O0.__H||(O0.__H={__:[],__h:[]});return _>=j.__.length&&j.__.push({}),j.__[_]}function v(_){return n2=1,c5(Q8,_)}function c5(_,$,j){var Z=K4(l2++,2);if(Z.t=_,!Z.__c&&(Z.__=[j?j($):Q8(void 0,$),function(q){var L=Z.__N?Z.__N[0]:Z.__[0],Q=Z.t(L,q);L!==Q&&(Z.__N=[Q,Z.__[1]],Z.__c.setState({}))}],Z.__c=O0,!O0.__f)){var N=function(q,L,Q){if(!Z.__c.__H)return!0;var B=Z.__c.__H.__.filter(function(H){return H.__c});if(B.every(function(H){return!H.__N}))return!Y||Y.call(this,q,L,Q);var X=Z.__c.props!==q;return B.some(function(H){if(H.__N){var M=H.__[0];H.__=H.__N,H.__N=void 0,M!==H.__[0]&&(X=!0)}}),Y&&Y.call(this,q,L,Q)||X};O0.__f=!0;var{shouldComponentUpdate:Y,componentWillUpdate:z}=O0;O0.componentWillUpdate=function(q,L,Q){if(this.__e){var B=Y;Y=void 0,N(q,L,Q),Y=B}z&&z.call(this,q,L,Q)},O0.shouldComponentUpdate=N}return Z.__N||Z.__}function R(_,$){var j=K4(l2++,3);!U0.__s&&q8(j.__H,$)&&(j.__=_,j.u=$,O0.__H.__h.push(j))}function P(_){return n2=5,v_(function(){return{current:_}},[])}function v_(_,$){var j=K4(l2++,7);return q8(j.__H,$)&&(j.__=_(),j.__H=$,j.__h=_),j.__}function I(_,$){return n2=8,v_(function(){return _},$)}function h5(){for(var _;_=V8.shift();){var $=_.__H;if(_.__P&&$)try{$.__h.some(Q1),$.__h.some(j4),$.__h=[]}catch(j){$.__h=[],U0.__e(j,_.__v)}}}U0.__b=function(_){O0=null,h3&&h3(_)},U0.__=function(_,$){_&&$.__k&&$.__k.__m&&(_.__m=$.__k.__m),s3&&s3(_,$)},U0.__r=function(_){i3&&i3(_),l2=0;var $=(O0=_.__c).__H;$&&(t1===O0?($.__h=[],O0.__h=[],$.__.some(function(j){j.__N&&(j.__=j.__N),j.u=j.__N=void 0})):($.__h.some(Q1),$.__h.some(j4),$.__h=[],l2=0)),t1=O0},U0.diffed=function(_){l3&&l3(_);var $=_.__c;$&&$.__H&&($.__H.__h.length&&(V8.push($)!==1&&c3===U0.requestAnimationFrame||((c3=U0.requestAnimationFrame)||i5)(h5)),$.__H.__.some(function(j){j.u&&(j.__H=j.u),j.u=void 0})),t1=O0=null},U0.__c=function(_,$){$.some(function(j){try{j.__h.some(Q1),j.__h=j.__h.filter(function(Z){return!Z.__||j4(Z)})}catch(Z){$.some(function(N){N.__h&&(N.__h=[])}),$=[],U0.__e(Z,j.__v)}}),n3&&n3(_,$)},U0.unmount=function(_){d3&&d3(_);var $,j=_.__c;j&&j.__H&&(j.__H.__.some(function(Z){try{Q1(Z)}catch(N){$=N}}),j.__H=void 0,$&&U0.__e($,j.__v))};var o3=typeof requestAnimationFrame=="function";function i5(_){var $,j=function(){clearTimeout(Z),o3&&cancelAnimationFrame($),setTimeout(_)},Z=setTimeout(j,35);o3&&($=requestAnimationFrame(j))}function Q1(_){var $=O0,j=_.__c;typeof j=="function"&&(_.__c=void 0,j()),O0=$}function j4(_){var $=O0;_.__c=_.__(),O0=$}function q8(_,$){return!_||_.length!==$.length||$.some(function(j,Z){return j!==_[Z]})}function Q8(_,$){return typeof $=="function"?$(_):$}var X8=function(_,$,j,Z){var N;$[0]=0;for(var Y=1;Y<$.length;Y++){var z=$[Y++],q=$[Y]?($[0]|=z?1:2,j[$[Y++]]):$[++Y];z===3?Z[0]=q:z===4?Z[1]=Object.assign(Z[1]||{},q):z===5?(Z[1]=Z[1]||{})[$[++Y]]=q:z===6?Z[1][$[++Y]]+=q+"":z?(N=_.apply(q,X8(_,q,j,["",null])),Z.push(N),q[0]?$[0]|=2:($[Y-2]=0,$[Y]=N)):Z.push(q)}return Z},r3=new Map;function l5(_){var $=r3.get(this);return $||($=new Map,r3.set(this,$)),($=X8(this,$.get(_)||($.set(_,$=function(j){for(var Z,N,Y=1,z="",q="",L=[0],Q=function(H){Y===1&&(H||(z=z.replace(/^\s*\n\s*|\s*\n\s*$/g,"")))?L.push(0,H,z):Y===3&&(H||z)?(L.push(3,H,z),Y=2):Y===2&&z==="..."&&H?L.push(4,H,0):Y===2&&z&&!H?L.push(5,0,!0,z):Y>=5&&((z||!H&&Y===5)&&(L.push(Y,0,z,N),Y=6),H&&(L.push(Y,H,0,N),Y=6)),z=""},B=0;B<j.length;B++){B&&(Y===1&&Q(),Q(B));for(var X=0;X<j[B].length;X++)Z=j[B][X],Y===1?Z==="<"?(Q(),L=[L],Y=3):z+=Z:Y===4?z==="--"&&Z===">"?(Y=1,z=""):z=Z+z[0]:q?Z===q?q="":z+=Z:Z==='"'||Z==="'"?q=Z:Z===">"?(Q(),Y=1):Y&&(Z==="="?(Y=5,N=z,z=""):Z==="/"&&(Y<5||j[B][X+1]===">")?(Q(),Y===3&&(L=L[0]),Y=L,(L=L[0]).push(2,0,Y),Y=0):Z===" "||Z==="\t"||Z===`
`||Z==="\r"?(Q(),Y=2):z+=Z),Y===3&&z==="!--"&&(Y=4,L=L[0])}return Q(),L}(_)),$),arguments,[])).length>1?$:$[0]}var W=l5.bind($8);var e0={};f5(e0,{uploadWorkspaceFile:()=>H1,uploadMedia:()=>W4,updateWorkspaceFile:()=>K7,submitAdaptiveCardAction:()=>U4,streamSidePrompt:()=>N7,steerAgentQueueItem:()=>Z7,setWorkspaceVisibility:()=>r2,setAgentThoughtVisibility:()=>H4,sendPeerAgentMessage:()=>e5,sendAgentMessage:()=>Q2,searchPosts:()=>V4,restoreChatBranch:()=>t5,respondToAgentRequest:()=>F1,renameWorkspaceFile:()=>k4,renameChatBranch:()=>r5,removeAgentQueueItem:()=>j7,pruneChatBranch:()=>a5,moveWorkspaceEntry:()=>P4,getWorkspaceTree:()=>o2,getWorkspaceRawUrl:()=>D1,getWorkspaceFile:()=>E4,getWorkspaceDownloadUrl:()=>J1,getWorkspaceBranch:()=>z7,getTimeline:()=>q2,getThumbnailUrl:()=>D4,getThread:()=>q4,getPostsByHashtag:()=>G4,getMediaUrl:()=>L$,getMediaText:()=>J4,getMediaInfo:()=>P2,getMediaBlob:()=>Y7,getChatBranches:()=>o5,getAgents:()=>L4,getAgentThought:()=>F4,getAgentStatus:()=>B4,getAgentQueueState:()=>$7,getAgentModels:()=>s2,getAgentContext:()=>_7,getActiveChatAgents:()=>X4,forkChatBranch:()=>d2,deleteWorkspaceFile:()=>M4,deletePost:()=>Q4,createWorkspaceFile:()=>y4,createReply:()=>s5,createPost:()=>d5,attachWorkspaceFile:()=>A4,addToWhitelist:()=>O4,SSEClient:()=>E1});async function u_(_,$={}){let j=await fetch(""+_,{...$,headers:{"Content-Type":"application/json",...$.headers}});if(!j.ok){let Z=await j.json().catch(()=>({error:"Unknown error"}));throw Error(Z.error||`HTTP ${j.status}`)}return j.json()}function L8(_){let $=String(_||"").split(`
`),j="message",Z=[];for(let Y of $)if(Y.startsWith("event:"))j=Y.slice(6).trim()||"message";else if(Y.startsWith("data:"))Z.push(Y.slice(5).trim());let N=Z.join(`
`);if(!N)return null;try{return{event:j,data:JSON.parse(N)}}catch{return{event:j,data:N}}}async function n5(_,$){if(!_.body)throw Error("Missing event stream body");let j=_.body.getReader(),Z=new TextDecoder,N="";while(!0){let{value:z,done:q}=await j.read();if(q)break;N+=Z.decode(z,{stream:!0});let L=N.split(`

`);N=L.pop()||"";for(let Q of L){let B=L8(Q);if(B)$(B.event,B.data)}}N+=Z.decode();let Y=L8(N);if(Y)$(Y.event,Y.data)}async function q2(_=10,$=null,j=null){let Z=`/timeline?limit=${_}`;if($)Z+=`&before=${$}`;if(j)Z+=`&chat_jid=${encodeURIComponent(j)}`;return u_(Z)}async function G4(_,$=50,j=0,Z=null){let N=Z?`&chat_jid=${encodeURIComponent(Z)}`:"";return u_(`/hashtag/${encodeURIComponent(_)}?limit=${$}&offset=${j}${N}`)}async function V4(_,$=50,j=0,Z=null,N="current",Y=null){let z=Z?`&chat_jid=${encodeURIComponent(Z)}`:"",q=N?`&scope=${encodeURIComponent(N)}`:"",L=Y?`&root_chat_jid=${encodeURIComponent(Y)}`:"";return u_(`/search?q=${encodeURIComponent(_)}&limit=${$}&offset=${j}${z}${q}${L}`)}async function q4(_,$=null){let j=$?`?chat_jid=${encodeURIComponent($)}`:"";return u_(`/thread/${_}${j}`)}async function d5(_,$=[],j=null){let Z=j?`?chat_jid=${encodeURIComponent(j)}`:"";return u_(`/post${Z}`,{method:"POST",body:JSON.stringify({content:_,media_ids:$})})}async function s5(_,$,j=[],Z=null){let N=Z?`?chat_jid=${encodeURIComponent(Z)}`:"";return u_(`/post/reply${N}`,{method:"POST",body:JSON.stringify({thread_id:_,content:$,media_ids:j})})}async function Q4(_,$=!1,j=null){let Z=j?`&chat_jid=${encodeURIComponent(j)}`:"",N=`/post/${_}?cascade=${$?"true":"false"}${Z}`;return u_(N,{method:"DELETE"})}async function Q2(_,$,j=null,Z=[],N=null,Y=null){let z=Y?`?chat_jid=${encodeURIComponent(Y)}`:"";return u_(`/agent/${_}/message${z}`,{method:"POST",body:JSON.stringify({content:$,thread_id:j,media_ids:Z,mode:N})})}async function X4(){return u_("/agent/active-chats")}async function o5(_=null,$={}){let j=new URLSearchParams;if(_)j.set("root_chat_jid",String(_));if($?.includeArchived)j.set("include_archived","1");let Z=j.toString()?`?${j.toString()}`:"";return u_(`/agent/branches${Z}`)}async function d2(_,$={}){return u_("/agent/branch-fork",{method:"POST",body:JSON.stringify({source_chat_jid:_,...$?.agentName?{agent_name:$.agentName}:{},...$?.displayName?{display_name:$.displayName}:{}})})}async function r5(_,$={}){return u_("/agent/branch-rename",{method:"POST",body:JSON.stringify({chat_jid:_,...$&&Object.prototype.hasOwnProperty.call($,"agentName")?{agent_name:$.agentName}:{},...$&&Object.prototype.hasOwnProperty.call($,"displayName")?{display_name:$.displayName}:{}})})}async function a5(_){return u_("/agent/branch-prune",{method:"POST",body:JSON.stringify({chat_jid:_})})}async function t5(_,$={}){return u_("/agent/branch-restore",{method:"POST",body:JSON.stringify({chat_jid:_,...$&&Object.prototype.hasOwnProperty.call($,"agentName")?{agent_name:$.agentName}:{},...$&&Object.prototype.hasOwnProperty.call($,"displayName")?{display_name:$.displayName}:{}})})}async function e5(_,$,j,Z="auto",N={}){let Y={source_chat_jid:_,content:j,mode:Z,...N?.sourceAgentName?{source_agent_name:N.sourceAgentName}:{},...N?.targetBy==="agent_name"?{target_agent_name:$}:{target_chat_jid:$}};return u_("/agent/peer-message",{method:"POST",body:JSON.stringify(Y)})}async function L4(){return u_("/agent/roster")}async function B4(_=null){let $=_?`?chat_jid=${encodeURIComponent(_)}`:"";return u_(`/agent/status${$}`)}async function _7(_=null){let $=_?`?chat_jid=${encodeURIComponent(_)}`:"";return u_(`/agent/context${$}`)}async function $7(_=null){let $=_?`?chat_jid=${encodeURIComponent(_)}`:"";return u_(`/agent/queue-state${$}`)}async function j7(_,$=null){let j=await fetch("/agent/queue-remove",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({row_id:_,chat_jid:$||void 0})});if(!j.ok){let Z=await j.json().catch(()=>({error:"Failed to remove queued item"}));throw Error(Z.error||`HTTP ${j.status}`)}return j.json()}async function Z7(_,$=null){let j=await fetch("/agent/queue-steer",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({row_id:_,chat_jid:$||void 0})});if(!j.ok){let Z=await j.json().catch(()=>({error:"Failed to steer queued item"}));throw Error(Z.error||`HTTP ${j.status}`)}return j.json()}async function s2(_=null){let $=_?`?chat_jid=${encodeURIComponent(_)}`:"";return u_(`/agent/models${$}`)}async function W4(_){let $=new FormData;$.append("file",_);let j=await fetch("/media/upload",{method:"POST",body:$});if(!j.ok){let Z=await j.json().catch(()=>({error:"Upload failed"}));throw Error(Z.error||`HTTP ${j.status}`)}return j.json()}async function F1(_,$,j=null){let Z=await fetch("/agent/respond",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({request_id:_,outcome:$,chat_jid:j||void 0})});if(!Z.ok){let N=await Z.json().catch(()=>({error:"Failed to respond"}));throw Error(N.error||`HTTP ${Z.status}`)}return Z.json()}async function U4(_){let $=await fetch("/agent/card-action",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(_)});if(!$.ok){let j=await $.json().catch(()=>({error:"Adaptive Card action failed"}));throw Error(j.error||`HTTP ${$.status}`)}return $.json()}async function N7(_,$={}){let j=await fetch("/agent/side-prompt/stream",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({prompt:_,system_prompt:$.systemPrompt||void 0,chat_jid:$.chatJid||void 0}),signal:$.signal});if(!j.ok){let Y=await j.json().catch(()=>({error:"Side prompt failed"}));throw Error(Y.error||`HTTP ${j.status}`)}let Z=null,N=null;if(await n5(j,(Y,z)=>{if($.onEvent?.(Y,z),Y==="side_prompt_thinking_delta")$.onThinkingDelta?.(z?.delta||"");else if(Y==="side_prompt_text_delta")$.onTextDelta?.(z?.delta||"");else if(Y==="side_prompt_done")Z=z;else if(Y==="side_prompt_error")N=z}),N){let Y=Error(N?.error||"Side prompt failed");throw Y.payload=N,Y}return Z}async function O4(_,$){let j=await fetch("/agent/whitelist",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({pattern:_,description:$})});if(!j.ok){let Z=await j.json().catch(()=>({error:"Failed to add to whitelist"}));throw Error(Z.error||`HTTP ${j.status}`)}return j.json()}async function F4(_,$="thought"){let j=`/agent/thought?turn_id=${encodeURIComponent(_)}&panel=${encodeURIComponent($)}`;return u_(j)}async function H4(_,$,j){return u_("/agent/thought/visibility",{method:"POST",body:JSON.stringify({turn_id:_,panel:$,expanded:Boolean(j)})})}function L$(_){return`/media/${_}`}function D4(_){return`/media/${_}/thumbnail`}async function P2(_){let $=await fetch(`/media/${_}/info`);if(!$.ok)throw Error("Failed to get media info");return $.json()}async function J4(_){let $=await fetch(`/media/${_}`);if(!$.ok)throw Error("Failed to load media text");return $.text()}async function Y7(_){let $=await fetch(`/media/${_}`);if(!$.ok)throw Error("Failed to load media blob");return $.blob()}async function o2(_="",$=2,j=!1){let Z=`/workspace/tree?path=${encodeURIComponent(_)}&depth=${$}&show_hidden=${j?"1":"0"}`;return u_(Z)}async function z7(_=""){let $=`/workspace/branch?path=${encodeURIComponent(_||"")}`;return u_($)}async function E4(_,$=20000,j=null){let Z=j?`&mode=${encodeURIComponent(j)}`:"",N=`/workspace/file?path=${encodeURIComponent(_)}&max=${$}${Z}`;return u_(N)}async function K7(_,$){return u_("/workspace/file",{method:"PUT",body:JSON.stringify({path:_,content:$})})}async function A4(_){return u_("/workspace/attach",{method:"POST",body:JSON.stringify({path:_})})}async function H1(_,$="",j={}){let Z=new FormData;Z.append("file",_);let N=new URLSearchParams;if($)N.set("path",$);if(j.overwrite)N.set("overwrite","1");let Y=N.toString(),z=Y?`/workspace/upload?${Y}`:"/workspace/upload",q=await fetch(""+z,{method:"POST",body:Z});if(!q.ok){let L=await q.json().catch(()=>({error:"Upload failed"})),Q=Error(L.error||`HTTP ${q.status}`);throw Q.status=q.status,Q.code=L.code,Q}return q.json()}async function y4(_,$,j=""){let Z=await fetch("/workspace/file",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({path:_,name:$,content:j})});if(!Z.ok){let N=await Z.json().catch(()=>({error:"Create failed"})),Y=Error(N.error||`HTTP ${Z.status}`);throw Y.status=Z.status,Y.code=N.code,Y}return Z.json()}async function k4(_,$){let j=await fetch("/workspace/rename",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({path:_,name:$})});if(!j.ok){let Z=await j.json().catch(()=>({error:"Rename failed"})),N=Error(Z.error||`HTTP ${j.status}`);throw N.status=j.status,N.code=Z.code,N}return j.json()}async function P4(_,$){let j=await fetch("/workspace/move",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({path:_,target:$})});if(!j.ok){let Z=await j.json().catch(()=>({error:"Move failed"})),N=Error(Z.error||`HTTP ${j.status}`);throw N.status=j.status,N.code=Z.code,N}return j.json()}async function M4(_){let $=`/workspace/file?path=${encodeURIComponent(_||"")}`;return u_($,{method:"DELETE"})}async function r2(_,$=!1){return u_("/workspace/visibility",{method:"POST",body:JSON.stringify({visible:Boolean(_),show_hidden:Boolean($)})})}function D1(_){return`/workspace/raw?path=${encodeURIComponent(_)}`}function J1(_,$=!1){return`/workspace/download?${`path=${encodeURIComponent(_||"")}&show_hidden=${$?"1":"0"}`}`}class E1{constructor(_,$,j={}){this.onEvent=_,this.onStatusChange=$,this.chatJid=typeof j?.chatJid==="string"&&j.chatJid.trim()?j.chatJid.trim():null,this.eventSource=null,this.reconnectTimeout=null,this.reconnectDelay=1000,this.status="disconnected",this.reconnectAttempts=0,this.cooldownUntil=0,this.connecting=!1,this.lastActivityAt=0,this.staleCheckTimer=null,this.staleThresholdMs=70000}markActivity(){this.lastActivityAt=Date.now()}clearStaleMonitor(){if(this.staleCheckTimer)clearInterval(this.staleCheckTimer),this.staleCheckTimer=null}startStaleMonitor(){this.clearStaleMonitor(),this.staleCheckTimer=setInterval(()=>{if(this.status!=="connected")return;if(!this.lastActivityAt)return;if(Date.now()-this.lastActivityAt<=this.staleThresholdMs)return;console.warn("SSE connection went stale; forcing reconnect"),this.forceReconnect()},15000)}forceReconnect(){if(this.connecting=!1,this.eventSource)this.eventSource.close(),this.eventSource=null;this.clearStaleMonitor(),this.status="disconnected",this.onStatusChange("disconnected"),this.reconnectAttempts+=1,this.scheduleReconnect()}connect(){if(this.connecting)return;if(this.eventSource&&this.status==="connected")return;if(this.connecting=!0,this.eventSource)this.eventSource.close();this.clearStaleMonitor();let _=this.chatJid?`?chat_jid=${encodeURIComponent(this.chatJid)}`:"";this.eventSource=new EventSource("/sse/stream"+_);let $=(j)=>{this.eventSource.addEventListener(j,(Z)=>{this.markActivity(),this.onEvent(j,JSON.parse(Z.data))})};this.eventSource.onopen=()=>{this.connecting=!1,this.reconnectDelay=1000,this.reconnectAttempts=0,this.cooldownUntil=0,this.status="connected",this.markActivity(),this.startStaleMonitor(),this.onStatusChange("connected")},this.eventSource.onerror=()=>{this.connecting=!1,this.clearStaleMonitor(),this.status="disconnected",this.onStatusChange("disconnected"),this.reconnectAttempts+=1,this.scheduleReconnect()},this.eventSource.addEventListener("connected",()=>{this.markActivity(),console.log("SSE connected"),this.onEvent("connected",{})}),this.eventSource.addEventListener("heartbeat",()=>{this.markActivity()}),$("new_post"),$("new_reply"),$("agent_response"),$("interaction_updated"),$("interaction_deleted"),$("agent_status"),$("agent_steer_queued"),$("agent_followup_queued"),$("agent_followup_consumed"),$("agent_followup_removed"),$("workspace_update"),$("agent_draft"),$("agent_draft_delta"),$("agent_thought"),$("agent_thought_delta"),$("model_changed"),$("ui_theme"),["extension_ui_request","extension_ui_timeout","extension_ui_notify","extension_ui_status","extension_ui_working","extension_ui_widget","extension_ui_title","extension_ui_editor_text","extension_ui_error"].forEach($)}scheduleReconnect(){if(this.reconnectTimeout)clearTimeout(this.reconnectTimeout);let _=10,$=60000,j=Date.now();if(this.reconnectAttempts>=_)this.cooldownUntil=Math.max(this.cooldownUntil,j+$),this.reconnectAttempts=0;let Z=Math.max(this.cooldownUntil-j,0),N=Math.max(this.reconnectDelay,Z);this.reconnectTimeout=setTimeout(()=>{console.log("Reconnecting SSE..."),this.connect()},N),this.reconnectDelay=Math.min(this.reconnectDelay*2,30000)}reconnectIfNeeded(){let _=Date.now();if(this.status==="connected"){if(this.lastActivityAt&&_-this.lastActivityAt>this.staleThresholdMs)this.forceReconnect();return}if(this.cooldownUntil&&_<this.cooldownUntil)return;if(this.reconnectTimeout)clearTimeout(this.reconnectTimeout),this.reconnectTimeout=null;this.connect()}disconnect(){if(this.connecting=!1,this.clearStaleMonitor(),this.eventSource)this.eventSource.close(),this.eventSource=null;if(this.reconnectTimeout)clearTimeout(this.reconnectTimeout),this.reconnectTimeout=null}}function _$(_){if(typeof window>"u"||!window.localStorage)return null;try{return window.localStorage.getItem(_)}catch{return null}}function o_(_,$){if(typeof window>"u"||!window.localStorage)return;try{window.localStorage.setItem(_,$)}catch{}}function M2(_,$=!1){let j=_$(_);if(j===null)return $;return j==="true"}function I2(_,$=null){let j=_$(_);if(j===null)return $;let Z=parseInt(j,10);return Number.isFinite(Z)?Z:$}function A1(_){return String(_||"").trim().toLowerCase()}function I4(_){let $=String(_||"").match(/^@([a-zA-Z0-9_-]*)$/);if(!$)return null;return A1($[1]||"")}function B8(_){let $=new Set,j=[];for(let Z of Array.isArray(_)?_:[]){let N=A1(Z?.agent_name);if(!N||$.has(N))continue;$.add(N),j.push(Z)}return j}function W8(_,$,j={}){let Z=I4($);if(Z==null)return[];let N=typeof j?.currentChatJid==="string"?j.currentChatJid:null;return B8(_).filter((Y)=>{if(N&&Y?.chat_jid===N)return!1;return A1(Y?.agent_name).startsWith(Z)})}function w4(_){let $=A1(_);return $?`@${$} `:""}function U8(_,$={}){let j=typeof $?.currentChatJid==="string"?$.currentChatJid:null,Z=Number.isFinite($?.limit)?Math.max(0,$.limit):4;return B8(_).filter((N)=>!(j&&N?.chat_jid===j)).slice(0,Z)}function O8({footerWidth:_=0,visibleAgentCount:$=0,hasContextIndicator:j=!1}={}){let Z=Number(_||0),N=Math.max(0,Math.min(Number($||0),4));if(!Number.isFinite(Z)||Z<=0)return!1;if(N<=0)return!1;let Y=460+N*68+(j?40:0);return Z>=Y}function J$({prefix:_="file",label:$,title:j,onRemove:Z,onClick:N,removeTitle:Y="Remove",icon:z="file"}){let q=`${_}-file-pill`,L=`${_}-file-name`,Q=`${_}-file-remove`,B=z==="message"?W`<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
      </svg>`:W`<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
        <polyline points="14 2 14 8 20 8"/>
      </svg>`;return W`
    <span class=${q} title=${j||$} onClick=${N}>
      ${B}
      <span class=${L}>${$}</span>
      ${Z&&W`
        <button
          class=${Q}
          onClick=${(X)=>{X.preventDefault(),X.stopPropagation(),Z()}}
          title=${Y}
          type="button"
        >
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M18 6L6 18M6 6l12 12"/>
          </svg>
        </button>
      `}
    </span>
  `}var G7=[{name:"/model",description:"Select model or list available models"},{name:"/cycle-model",description:"Cycle to the next available model"},{name:"/thinking",description:"Show or set thinking level"},{name:"/cycle-thinking",description:"Cycle thinking level"},{name:"/theme",description:"Set UI theme (no name to show available themes)"},{name:"/tint",description:"Tint default light/dark UI (usage: /tint #hex or /tint off)"},{name:"/btw",description:"Open a side conversation panel without interrupting the main chat"},{name:"/state",description:"Show current session state"},{name:"/stats",description:"Show session token and cost stats"},{name:"/context",description:"Show context window usage"},{name:"/last",description:"Show last assistant response"},{name:"/compact",description:"Manually compact the session"},{name:"/auto-compact",description:"Toggle auto-compaction"},{name:"/auto-retry",description:"Toggle auto-retry"},{name:"/abort",description:"Abort the current response"},{name:"/abort-retry",description:"Abort retry backoff"},{name:"/abort-bash",description:"Abort running bash command"},{name:"/shell",description:"Run a shell command and return output"},{name:"/bash",description:"Run a shell command and add output to context"},{name:"/queue",description:"Queue a follow-up message (one-at-a-time)"},{name:"/queue-all",description:"Queue a follow-up message (batch all)"},{name:"/steer",description:"Steer the current response"},{name:"/steering-mode",description:"Set steering mode (all|one)"},{name:"/followup-mode",description:"Set follow-up mode (all|one)"},{name:"/session-name",description:"Set or show the session name"},{name:"/new-session",description:"Start a new session"},{name:"/switch-session",description:"Switch to a session file"},{name:"/fork",description:"Fork from a previous message"},{name:"/forks",description:"List forkable messages"},{name:"/tree",description:"List the session tree"},{name:"/label",description:"Set or clear a label on a tree entry"},{name:"/labels",description:"List labeled entries"},{name:"/agent-name",description:"Set or show the agent display name"},{name:"/agent-avatar",description:"Set or show the agent avatar URL"},{name:"/user-name",description:"Set or show your display name"},{name:"/user-avatar",description:"Set or show your avatar URL"},{name:"/user-github",description:"Set name/avatar from GitHub profile"},{name:"/export-html",description:"Export session to HTML"},{name:"/passkey",description:"Manage passkeys (enrol/list/delete)"},{name:"/totp",description:"Show a TOTP enrolment QR code"},{name:"/qr",description:"Generate a QR code for text or URL"},{name:"/search",description:"Search notes and skills in the workspace"},{name:"/restart",description:"Restart the agent and stop subprocesses"},{name:"/commands",description:"List available commands"}];function V7({usage:_,onCompact:$}){let j=Math.min(100,Math.max(0,_.percent||0)),Z=_.tokens,N=_.contextWindow,Y="Compact context",q=`${Z!=null?`Context: ${F8(Z)} / ${F8(N)} tokens (${j.toFixed(0)}%)`:`Context: ${j.toFixed(0)}%`} — ${"Compact context"}`,L=9,Q=2*Math.PI*9,B=j/100*Q,X=j>90?"var(--context-red, #ef4444)":j>75?"var(--context-amber, #f59e0b)":"var(--context-green, #22c55e)";return W`
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
                    stroke=${X}
                    stroke-width="2.5"
                    stroke-dasharray=${`${B} ${Q}`}
                    stroke-linecap="round"
                    transform="rotate(-90 12 12)" />
            </svg>
        </button>
    `}function F8(_){if(_==null)return"?";if(_>=1e6)return(_/1e6).toFixed(1)+"M";if(_>=1000)return(_/1000).toFixed(0)+"K";return String(_)}function H8({onPost:_,onFocus:$,searchMode:j,searchScope:Z="current",onSearch:N,onSearchScopeChange:Y,onEnterSearch:z,onExitSearch:q,fileRefs:L=[],onRemoveFileRef:Q,onClearFileRefs:B,messageRefs:X=[],onRemoveMessageRef:H,onClearMessageRefs:M,activeModel:b=null,modelUsage:m=null,thinkingLevel:g=null,supportsThinking:y=!1,contextUsage:x=null,onContextCompact:h,notificationsEnabled:E=!1,notificationPermission:S="default",onToggleNotifications:s,onModelChange:e,onModelStateChange:o,activeEditorPath:j_=null,onAttachEditorFile:l,onOpenFilePill:Q_,followupQueueItems:a_=[],onInjectQueuedFollowup:c_,onRemoveQueuedFollowup:r,onSubmitIntercept:N_,onMessageResponse:__,onPopOutChat:X_,isAgentActive:G_=!1,activeChatAgents:L_=[],currentChatJid:U_="web:default",connectionStatus:Y_="connected",onSetFileRefs:m_,onSetMessageRefs:T_,onSubmitError:A_,onSwitchChat:y_,onRenameSession:G0,isRenameSessionInProgress:V0=!1,onCreateSession:V_,onDeleteSession:$_,onRestoreSession:H_}){let[Z_,D_]=v(""),[C_,h_]=v(""),[i_,g_]=v([]),[l_,f_]=v(!1),[M_,k_]=v([]),[p_,Z0]=v(0),[M0,P_]=v(!1),[A0,n_]=v([]),[b_,N0]=v(0),[_0,d_]=v(!1),[Y0,S_]=v(!1),[F0,b0]=v(!1),[E_,$0]=v(!1),[S0,I_]=v([]),[C,t]=v(!1),[O_,w_]=v(0),[t_,H0]=v(null),x_=P(null),R0=P(null),j$=P(null),Z$=P(null),C0=P(null),T$=P(null),D0=P(null),l0=P(null),n0=P(0),v0=P(!1),N$=200,O2=(K)=>{let O=new Set,D=[];for(let T of K||[]){if(typeof T!=="string")continue;let p=T.trim();if(!p||O.has(p))continue;O.add(p),D.push(p)}return D},F2=()=>{let K=_$("piclaw_compose_history");if(!K)return[];try{let O=JSON.parse(K);if(!Array.isArray(O))return[];return O2(O)}catch{return[]}},y0=(K)=>{o_("piclaw_compose_history",JSON.stringify(K))},J0=P(F2()),z0=P(-1),c0=P(""),K0=Z_.trim()||i_.length>0||L.length>0||X.length>0,I0=typeof window<"u"&&typeof navigator<"u"&&Boolean(navigator.geolocation)&&Boolean(window.isSecureContext),Y$=typeof window<"u"&&typeof Notification<"u",C$=typeof window<"u"?Boolean(window.isSecureContext):!1,c$=Y$&&C$&&S!=="denied",_2=S==="granted"&&E,d0=_2?"Disable notifications":"Enable notifications",$2=i_.length>0||L.length>0||X.length>0,j2=Y_==="disconnected"?"Reconnecting":String(Y_||"Connecting").replace(/[-_]+/g," ").replace(/^./,(K)=>K.toUpperCase()),z$=Y_==="disconnected"?"Reconnecting":`Connection: ${j2}`,U$=(Array.isArray(L_)?L_:[]).filter((K)=>!K?.archived_at),s0=U8(U$,{currentChatJid:U_,limit:4}),Q0=!j&&O8({footerWidth:O_,visibleAgentCount:s0.length,hasContextIndicator:Boolean(x&&x.percent!=null)}),s_=(()=>{for(let K of Array.isArray(L_)?L_:[]){let O=typeof K?.chat_jid==="string"?K.chat_jid.trim():"";if(O&&O===U_)return K}return null})(),O$=Boolean(s_&&s_.chat_jid===(s_.root_chat_jid||s_.chat_jid)),E$=(()=>{let K=new Set,O=[];for(let D of Array.isArray(L_)?L_:[]){let T=typeof D?.chat_jid==="string"?D.chat_jid.trim():"";if(!T||T===U_||K.has(T))continue;if(!(typeof D?.agent_name==="string"?D.agent_name.trim():""))continue;K.add(T),O.push(D)}return O})(),h$=E$.length>0,H2=h$&&typeof y_==="function",J_=h$&&typeof H_==="function",K$=Boolean(V0||v0.current),A$=!j&&typeof G0==="function"&&!K$,f$=!j&&typeof V_==="function",o0=!j&&typeof $_==="function"&&!O$,b$=!j&&(H2||J_||A$||f$||o0),r0=b||"",u0=y&&g?` (${g})`:"",X0=u0.trim()?`${g}`:"",m0=typeof m?.hint_short==="string"?m.hint_short.trim():"",a0=[X0||null,m0||null].filter(Boolean).join(" • "),f0=[r0?`Current model: ${r0}${u0}`:null,m?.plan?`Plan: ${m.plan}`:null,m0||null,m?.primary?.reset_description||null,m?.secondary?.reset_description||null].filter(Boolean),i$=Y0?"Switching model…":f0.join(" • ")||`Current model: ${r0}${u0} (tap to open model picker)`,t0=(K)=>{if(!K||typeof K!=="object")return;let O=K.model??K.current;if(typeof o==="function")o({model:O??null,thinking_level:K.thinking_level??null,supports_thinking:K.supports_thinking,provider_usage:K.provider_usage??null});if(O&&typeof e==="function")e(O)},h0=(K)=>{let O=K||x_.current;if(!O)return;O.style.height="auto",O.style.height=`${O.scrollHeight}px`,O.style.overflowY="hidden"},l$=(K)=>{if(!K)return{content:K,fileRefs:[]};let D=K.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),T=-1;for(let F_=0;F_<D.length;F_+=1)if(D[F_].trim()==="Files:"&&D[F_+1]&&/^\s*-\s+/.test(D[F_+1])){T=F_;break}if(T===-1)return{content:K,fileRefs:[]};let p=[],u=T+1;for(;u<D.length;u+=1){let F_=D[u];if(/^\s*-\s+/.test(F_))p.push(F_.replace(/^\s*-\s+/,"").trim());else if(!F_.trim())break;else break}if(p.length===0)return{content:K,fileRefs:[]};let a=D.slice(0,T),B_=D.slice(u);return{content:[...a,...B_].join(`
`).replace(/\n{3,}/g,`

`).trim(),fileRefs:p}},Z2=(K)=>{if(!K)return{content:K,messageRefs:[]};let D=K.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),T=-1;for(let F_=0;F_<D.length;F_+=1)if(D[F_].trim()==="Referenced messages:"&&D[F_+1]&&/^\s*-\s+/.test(D[F_+1])){T=F_;break}if(T===-1)return{content:K,messageRefs:[]};let p=[],u=T+1;for(;u<D.length;u+=1){let F_=D[u];if(/^\s*-\s+/.test(F_)){let D$=F_.replace(/^\s*-\s+/,"").trim().match(/^message:(\S+)$/i);if(D$)p.push(D$[1])}else if(!F_.trim())break;else break}if(p.length===0)return{content:K,messageRefs:[]};let a=D.slice(0,T),B_=D.slice(u);return{content:[...a,...B_].join(`
`).replace(/\n{3,}/g,`

`).trim(),messageRefs:p}},S$=(K)=>{let O=l$(K||""),D=Z2(O.content||"");return{text:D.content||"",fileRefs:O.fileRefs,messageRefs:D.messageRefs}},E0=(K)=>{if(!K.startsWith("/")||K.includes(`
`)){P_(!1),k_([]);return}let O=K.toLowerCase().split(" ")[0];if(O.length<1){P_(!1),k_([]);return}let D=G7.filter((T)=>T.name.startsWith(O)||T.name.replace(/-/g,"").startsWith(O.replace(/-/g,"")));if(D.length>0&&!(D.length===1&&D[0].name===O))d_(!1),n_([]),k_(D),Z0(0),P_(!0);else P_(!1),k_([])},F$=(K)=>{let O=Z_,D=O.indexOf(" "),T=D>=0?O.slice(D):"",p=K.name+T;D_(p),P_(!1),k_([]),requestAnimationFrame(()=>{let u=x_.current;if(!u)return;let a=p.length;u.selectionStart=a,u.selectionEnd=a,u.focus()})},y$=(K)=>{if(I4(K)==null){d_(!1),n_([]);return}let O=W8(U$,K,{currentChatJid:U_});if(O.length>0&&!(O.length===1&&w4(O[0].agent_name).trim().toLowerCase()===String(K||"").trim().toLowerCase()))P_(!1),k_([]),n_(O),N0(0),d_(!0);else d_(!1),n_([])},k$=(K)=>{let O=w4(K?.agent_name);if(!O)return;D_(O),d_(!1),n_([]),requestAnimationFrame(()=>{let D=x_.current;if(!D)return;let T=O.length;D.selectionStart=T,D.selectionEnd=T,D.focus()})},R$=(K)=>{if(K?.preventDefault?.(),K?.stopPropagation?.(),j||!H2&&!J_&&!A$&&!f$&&!o0)return;b0(!1),P_(!1),k_([]),d_(!1),n_([]),$0((O)=>!O)},n$=(K)=>{let O=typeof K==="string"?K.trim():"";if($0(!1),!O||O===U_){requestAnimationFrame(()=>x_.current?.focus());return}y_?.(O)},N2=async(K)=>{let O=typeof K==="string"?K.trim():"";if($0(!1),!O||typeof H_!=="function"){requestAnimationFrame(()=>x_.current?.focus());return}try{await H_(O)}catch(D){console.warn("Failed to restore session:",D),requestAnimationFrame(()=>x_.current?.focus())}},i0=(K)=>{let O=typeof K?.chat_jid==="string"?K.chat_jid.trim():"";if(O&&typeof y_==="function"){y_(O);return}k$(K)},g0=async(K)=>{if(K?.preventDefault)K.preventDefault();if(K?.stopPropagation)K.stopPropagation();if(typeof G0!=="function"||V0||v0.current)return;v0.current=!0,$0(!1);try{await G0()}catch(O){console.warn("Failed to rename session:",O)}finally{v0.current=!1}requestAnimationFrame(()=>x_.current?.focus())},H$=async()=>{if(typeof V_!=="function")return;$0(!1);try{await V_()}catch(K){console.warn("Failed to create session:",K)}requestAnimationFrame(()=>x_.current?.focus())},Y2=async()=>{if(typeof $_!=="function")return;$0(!1);try{await $_(U_)}catch(K){console.warn("Failed to delete session:",K)}requestAnimationFrame(()=>x_.current?.focus())},G$=(K)=>{if(j)h_(K);else D_(K),E0(K),y$(K);requestAnimationFrame(()=>h0())},d$=(K)=>{let O=j?C_:Z_,D=O&&!O.endsWith(`
`)?`
`:"",T=`${O}${D}${K}`.trimStart();G$(T)},P$=(K)=>{let O=K?.command?.model_label;if(O)return O;let D=K?.command?.message;if(typeof D==="string"){let T=D.match(/•\s+([^\n]+?)\s+\(current\)/);if(T?.[1])return T[1].trim()}return null},v$=async(K)=>{if(j||Y0)return;S_(!0);try{let O=await Q2("default",K,null,[],null,U_),D=P$(O);t0({model:D??b??null,thinking_level:O?.command?.thinking_level,supports_thinking:O?.command?.supports_thinking});try{let T=await s2(U_);if(T)t0(T)}catch{}return _?.(),!0}catch(O){return console.error("Failed to switch model:",O),alert("Failed to switch model: "+O.message),!1}finally{S_(!1)}},z2=async()=>{await v$("/cycle-model")},D2=async(K)=>{if(!K||Y0)return;if(await v$(`/model ${K}`))b0(!1)},M$=(K)=>{K.preventDefault(),K.stopPropagation(),$0(!1),b0((O)=>!O)},s$=async()=>{if(j)return;h?.(),await I$("/compact",null,{includeMedia:!1,includeFileRefs:!1,includeMessageRefs:!1,clearAfterSubmit:!1,recordHistory:!1})},K2=(K)=>{if(K==="queue"||K==="steer"||K==="auto")return K;return G_?"queue":null},I$=async(K,O,D={})=>{let{includeMedia:T=!0,includeFileRefs:p=!0,includeMessageRefs:u=!0,clearAfterSubmit:a=!0,recordHistory:B_=!0}=D||{},k0=typeof K==="string"?K:K&&typeof K?.target?.value==="string"?K.target.value:Z_,F_=typeof k0==="string"?k0:"";if(!F_.trim()&&(T?i_.length===0:!0)&&(p?L.length===0:!0)&&(u?X.length===0:!0))return;P_(!1),k_([]),d_(!1),n_([]),$0(!1),H0(null);let D$=T?[...i_]:[],w$=p?[...L]:[],E2=u?[...X]:[],V$=F_.trim();if(B_&&V$){let V2=J0.current,w0=O2(V2.filter((u$)=>u$!==V$));if(w0.push(V$),w0.length>200)w0.splice(0,w0.length-200);J0.current=w0,y0(w0),z0.current=-1,c0.current=""}let h1=()=>{if(T)g_([...D$]);if(p)m_?.(w$);if(u)T_?.(E2);D_(V$),requestAnimationFrame(()=>h0())};if(a)D_(""),g_([]),B?.(),M?.();(async()=>{try{if(await N_?.({content:V$,submitMode:O,fileRefs:w$,messageRefs:E2,mediaFiles:D$})){_?.();return}let w0=[];for(let q0 of D$){let L0=await W4(q0);w0.push(L0.id)}let u$=w$.length?`Files:
${w$.map((q0)=>`- ${q0}`).join(`
`)}`:"",W0=E2.length?`Referenced messages:
${E2.map((q0)=>`- message:${q0}`).join(`
`)}`:"",i1=w0.length?`Attachments:
${w0.map((q0,L0)=>{let u2=D$[L0]?.name||`attachment-${L0+1}`;return`- attachment:${q0} (${u2})`}).join(`
`)}`:"",A2=[V$,u$,W0,i1].filter(Boolean).join(`

`),o$=await Q2("default",A2,null,w0,K2(O),U_);if(__?.(o$),o$?.command){t0({model:o$.command.model_label??b??null,thinking_level:o$.command.thinking_level,supports_thinking:o$.command.supports_thinking});try{let q0=await s2(U_);if(q0)t0(q0)}catch{}}_?.()}catch(V2){if(a)h1();let w0=V2?.message||"Failed to send message.";H0(w0),A_?.(w0),console.error("Failed to post:",V2)}})()},T2=(K)=>{c_?.(K)},C2=(K)=>{if(K.isComposing)return;if(j&&K.key==="Escape"){K.preventDefault(),h_(""),q?.();return}if(!j&&E_&&K.key==="Escape"){K.preventDefault(),$0(!1);return}if(_0&&A0.length>0){let O=x_.current?.value??(j?C_:Z_);if(!String(O||"").match(/^@([a-zA-Z0-9_-]*)$/))d_(!1),n_([]);else{if(K.key==="ArrowDown"){K.preventDefault(),N0((D)=>(D+1)%A0.length);return}if(K.key==="ArrowUp"){K.preventDefault(),N0((D)=>(D-1+A0.length)%A0.length);return}if(K.key==="Tab"||K.key==="Enter"){K.preventDefault(),k$(A0[b_]);return}if(K.key==="Escape"){K.preventDefault(),d_(!1),n_([]);return}}}if(M0&&M_.length>0){let O=x_.current?.value??(j?C_:Z_);if(!String(O||"").startsWith("/"))P_(!1),k_([]);else{if(K.key==="ArrowDown"){K.preventDefault(),Z0((D)=>(D+1)%M_.length);return}if(K.key==="ArrowUp"){K.preventDefault(),Z0((D)=>(D-1+M_.length)%M_.length);return}if(K.key==="Tab"){K.preventDefault(),F$(M_[p_]);return}if(K.key==="Enter"&&!K.shiftKey){if(!(x_.current?.value??(j?C_:Z_)).includes(" ")){K.preventDefault();let p=M_[p_];P_(!1),k_([]),I$(p.name);return}}if(K.key==="Escape"){K.preventDefault(),P_(!1),k_([]);return}}}if(!j&&(K.key==="ArrowUp"||K.key==="ArrowDown")&&!K.metaKey&&!K.ctrlKey&&!K.altKey&&!K.shiftKey){let O=x_.current;if(!O)return;let D=O.value||"",T=O.selectionStart===0&&O.selectionEnd===0,p=O.selectionStart===D.length&&O.selectionEnd===D.length;if(K.key==="ArrowUp"&&T||K.key==="ArrowDown"&&p){let u=J0.current;if(!u.length)return;K.preventDefault();let a=z0.current;if(K.key==="ArrowUp"){if(a===-1)c0.current=D,a=u.length-1;else if(a>0)a-=1;z0.current=a,G$(u[a]||"")}else{if(a===-1)return;if(a<u.length-1)a+=1,z0.current=a,G$(u[a]||"");else z0.current=-1,G$(c0.current||""),c0.current=""}requestAnimationFrame(()=>{let B_=x_.current;if(!B_)return;let k0=B_.value.length;B_.selectionStart=k0,B_.selectionEnd=k0});return}}if(K.key==="Enter"&&!K.shiftKey&&(K.ctrlKey||K.metaKey)){K.preventDefault();let O=x_.current?.value??(j?C_:Z_);if(j){if(O.trim())N?.(O.trim(),Z)}else I$(O,"steer");return}if(K.key==="Enter"&&!K.shiftKey){K.preventDefault();let O=x_.current?.value??(j?C_:Z_);if(j){if(O.trim())N?.(O.trim(),Z)}else I$(O)}},z_=(K)=>{let O=Array.from(K||[]).filter((D)=>D instanceof File&&!String(D.name||"").startsWith(".DS_Store"));if(!O.length)return;g_((D)=>[...D,...O]),H0(null)},J2=(K)=>{z_(K.target.files),K.target.value=""},f2=(K)=>{if(j)return;K.preventDefault(),K.stopPropagation(),n0.current+=1,f_(!0)},b2=(K)=>{if(j)return;if(K.preventDefault(),K.stopPropagation(),n0.current=Math.max(0,n0.current-1),n0.current===0)f_(!1)},G2=(K)=>{if(j)return;if(K.preventDefault(),K.stopPropagation(),K.dataTransfer)K.dataTransfer.dropEffect="copy";f_(!0)},S2=(K)=>{if(j)return;K.preventDefault(),K.stopPropagation(),n0.current=0,f_(!1),z_(K.dataTransfer?.files||[])},R2=(K)=>{if(j)return;let O=K.clipboardData?.items;if(!O||!O.length)return;let D=[];for(let T of O){if(T.kind!=="file")continue;let p=T.getAsFile?.();if(p)D.push(p)}if(D.length>0)K.preventDefault(),z_(D)},v2=(K)=>{g_((O)=>O.filter((D,T)=>T!==K))},U=()=>{H0(null),g_([]),B?.(),M?.()},J=()=>{if(!navigator.geolocation){alert("Geolocation is not available in this browser.");return}navigator.geolocation.getCurrentPosition((K)=>{let{latitude:O,longitude:D,accuracy:T}=K.coords,p=`${O.toFixed(5)}, ${D.toFixed(5)}`,u=Number.isFinite(T)?` ±${Math.round(T)}m`:"",a=`https://maps.google.com/?q=${O},${D}`,B_=`Location: ${p}${u} ${a}`;d$(B_)},(K)=>{let O=K?.message||"Unable to retrieve location.";alert(`Location error: ${O}`)},{enableHighAccuracy:!0,timeout:1e4,maximumAge:0})};R(()=>{if(!F0)return;t(!0),s2(U_).then((K)=>{let O=Array.isArray(K?.models)?K.models.filter((D)=>typeof D==="string"&&D.trim().length>0):[];O.sort((D,T)=>D.localeCompare(T,void 0,{sensitivity:"base"})),I_(O),t0(K)}).catch((K)=>{console.warn("Failed to load model list:",K),I_([])}).finally(()=>{t(!1)})},[F0,b]),R(()=>{if(j)b0(!1),$0(!1),P_(!1),k_([]),d_(!1),n_([])},[j]),R(()=>{if(E_&&!b$)$0(!1)},[E_,b$]),R(()=>{if(!F0)return;let K=(O)=>{let D=Z$.current,T=C0.current,p=O.target;if(D&&D.contains(p))return;if(T&&T.contains(p))return;b0(!1)};return document.addEventListener("pointerdown",K),()=>document.removeEventListener("pointerdown",K)},[F0]),R(()=>{if(!E_)return;let K=(O)=>{let D=T$.current,T=D0.current,p=O.target;if(D&&D.contains(p))return;if(T&&T.contains(p))return;$0(!1)};return document.addEventListener("pointerdown",K),()=>document.removeEventListener("pointerdown",K)},[E_]),R(()=>{let K=()=>{let u=l0.current?.clientWidth||0;w_((a)=>a===u?a:u)};K();let O=l0.current,D=0,T=()=>{if(D)cancelAnimationFrame(D);D=requestAnimationFrame(()=>{D=0,K()})},p=null;if(O&&typeof ResizeObserver<"u")p=new ResizeObserver(()=>T()),p.observe(O);if(typeof window<"u")window.addEventListener("resize",T);return()=>{if(D)cancelAnimationFrame(D);if(p?.disconnect?.(),typeof window<"u")window.removeEventListener("resize",T)}},[j,b,s0.length,x?.percent]);let w=(K)=>{let O=K.target.value;if(H0(null),E_)$0(!1);h0(K.target),G$(O)};return R(()=>{requestAnimationFrame(()=>h0())},[Z_,C_,j]),R(()=>{if(j)return;y$(Z_)},[U$,U_,Z_,j]),W`
        <div class="compose-box">
            ${!j&&a_.length>0&&W`
                <div class="compose-queue-stack">
                    ${a_.map((K)=>{let O=typeof K?.content==="string"?K.content:"",D=S$(O);if(!D.text.trim()&&D.fileRefs.length===0&&D.messageRefs.length===0)return null;return W`
                            <div class="compose-queue-stack-item" role="listitem">
                                <div class="compose-queue-stack-content" title=${O}>
                                    ${D.text.trim()&&W`
                                        <div class="compose-queue-stack-text">${D.text}</div>
                                    `}
                                    ${(D.messageRefs.length>0||D.fileRefs.length>0)&&W`
                                        <div class="compose-queue-stack-refs">
                                            ${D.messageRefs.map((T)=>W`
                                                <${J$}
                                                    key=${"queue-msg-"+T}
                                                    prefix="compose"
                                                    label=${"msg:"+T}
                                                    title=${"Message reference: "+T}
                                                    icon="message"
                                                />
                                            `)}
                                            ${D.fileRefs.map((T)=>{let p=T.split("/").pop()||T;return W`
                                                    <${J$}
                                                        key=${"queue-file-"+T}
                                                        prefix="compose"
                                                        label=${p}
                                                        title=${T}
                                                        onClick=${()=>Q_?.(T)}
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
                                        onClick=${()=>T2(K)}
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
                                        onClick=${()=>r?.(K)}
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
                class=${`compose-input-wrapper${l_?" drag-active":""}`}
                onDragEnter=${f2}
                onDragOver=${G2}
                onDragLeave=${b2}
                onDrop=${S2}
            >
                <div class="compose-input-main">
                    ${t_&&!$2&&W`
                        <div class="compose-submit-error compose-submit-error-top" role="status" aria-live="polite">${t_}</div>
                    `}
                    ${$2&&W`
                        <div class="compose-file-refs">
                            ${t_&&W`
                                <div class="compose-submit-error" role="status" aria-live="polite">${t_}</div>
                            `}
                            ${X.map((K)=>{return W`
                                    <${J$}
                                        key=${"msg-"+K}
                                        prefix="compose"
                                        label=${"msg:"+K}
                                        title=${"Message reference: "+K}
                                        removeTitle="Remove reference"
                                        icon="message"
                                        onRemove=${()=>H?.(K)}
                                    />
                                `})}
                            ${L.map((K)=>{let O=K.split("/").pop()||K;return W`
                                    <${J$}
                                        prefix="compose"
                                        label=${O}
                                        title=${K}
                                        onClick=${()=>Q_?.(K)}
                                        removeTitle="Remove file"
                                        onRemove=${()=>Q?.(K)}
                                    />
                                `})}
                            ${i_.map((K,O)=>{let D=K?.name||`attachment-${O+1}`;return W`
                                    <${J$}
                                        key=${D+O}
                                        prefix="compose"
                                        label=${D}
                                        title=${D}
                                        removeTitle="Remove attachment"
                                        onRemove=${()=>v2(O)}
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
                    ${!j&&typeof X_==="function"&&W`
                        <button
                            type="button"
                            class="compose-popout-btn"
                            onClick=${()=>X_?.()}
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
                        ref=${x_}
                        placeholder=${j?"Search (Enter to run)...":"Message (Enter to send, Shift+Enter for newline)..."}
                        value=${j?C_:Z_}
                        onInput=${w}
                        onKeyDown=${C2}
                        onPaste=${R2}
                        onFocus=${$}
                        onClick=${$}
                        rows="1"
                    />
                    ${_0&&A0.length>0&&W`
                        <div class="slash-autocomplete" ref=${j$}>
                            ${A0.map((K,O)=>W`
                                <div
                                    key=${K.chat_jid||K.agent_name}
                                    class=${`slash-item${O===b_?" active":""}`}
                                    onMouseDown=${(D)=>{D.preventDefault(),k$(K)}}
                                    onMouseEnter=${()=>N0(O)}
                                >
                                    <span class="slash-name">@${K.agent_name}</span>
                                    <span class="slash-desc">${K.chat_jid||"Active agent"}</span>
                                </div>
                            `)}
                        </div>
                    `}
                    ${M0&&M_.length>0&&W`
                        <div class="slash-autocomplete" ref=${R0}>
                            ${M_.map((K,O)=>W`
                                <div
                                    key=${K.name}
                                    class=${`slash-item${O===p_?" active":""}`}
                                    onMouseDown=${(D)=>{D.preventDefault(),F$(K)}}
                                    onMouseEnter=${()=>Z0(O)}
                                >
                                    <span class="slash-name">${K.name}</span>
                                    <span class="slash-desc">${K.description}</span>
                                </div>
                            `)}
                        </div>
                    `}
                    ${F0&&!j&&W`
                        <div class="compose-model-popup" ref=${Z$}>
                            <div class="compose-model-popup-title">Select model</div>
                            <div class="compose-model-popup-menu" role="menu" aria-label="Model picker">
                                ${C&&W`
                                    <div class="compose-model-popup-empty">Loading models…</div>
                                `}
                                ${!C&&S0.length===0&&W`
                                    <div class="compose-model-popup-empty">No models available.</div>
                                `}
                                ${!C&&S0.map((K)=>W`
                                    <button
                                        key=${K}
                                        type="button"
                                        role="menuitem"
                                        class=${`compose-model-popup-item${b===K?" active":""}`}
                                        onClick=${()=>{D2(K)}}
                                        disabled=${Y0}
                                    >
                                        ${K}
                                    </button>
                                `)}
                            </div>
                            <div class="compose-model-popup-actions">
                                <button
                                    type="button"
                                    class="compose-model-popup-btn"
                                    onClick=${()=>{z2()}}
                                    disabled=${Y0}
                                >
                                    Next model
                                </button>
                            </div>
                        </div>
                    `}
                    ${E_&&!j&&W`
                        <div class="compose-model-popup" ref=${T$}>
                            <div class="compose-model-popup-title">Manage sessions & agents</div>
                            <div class="compose-model-popup-menu" role="menu" aria-label="Sessions and agents">
                                ${W`
                                    <div class="compose-model-popup-item current" role="note" aria-live="polite">
                                        ${(()=>{let K=typeof s_?.agent_name==="string"&&s_.agent_name.trim()?`@${s_.agent_name.trim()}`:U_,O=typeof s_?.chat_jid==="string"&&s_.chat_jid.trim()?s_.chat_jid.trim():U_;return`${K} — ${O} • current`})()}
                                    </div>
                                `}
                                ${!h$&&W`
                                    <div class="compose-model-popup-empty">No other sessions yet.</div>
                                `}
                                ${h$&&E$.map((K)=>{let O=Boolean(K.archived_at),T=K.chat_jid!==(K.root_chat_jid||K.chat_jid)&&!K.is_active&&!O&&typeof $_==="function",p=`@${K.agent_name} — ${K.chat_jid}${K.is_active?" • active":""}${O?" • archived":""}`;return W`
                                        <div key=${K.chat_jid} class=${`compose-model-popup-item-row${O?" archived":""}`}>
                                            <button
                                                type="button"
                                                role="menuitem"
                                                class=${`compose-model-popup-item${O?" archived":""}`}
                                                onClick=${()=>{if(O){N2(K.chat_jid);return}n$(K.chat_jid)}}
                                                disabled=${O?!J_:!H2}
                                                title=${O?"Restore this archived branch":"Switch to this session"}
                                            >
                                                ${p}
                                            </button>
                                            ${T&&W`
                                                <button
                                                    type="button"
                                                    class="compose-model-popup-item-delete"
                                                    title="Delete this branch"
                                                    aria-label=${`Delete @${K.agent_name}`}
                                                    onClick=${(u)=>{u.stopPropagation(),$0(!1),$_(K.chat_jid)}}
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
                            ${(f$||A$||o0)&&W`
                                <div class="compose-model-popup-actions">
                                    ${f$&&W`
                                        <button
                                            type="button"
                                            class="compose-model-popup-btn primary"
                                            onClick=${()=>{H$()}}
                                            title="Create a new agent/session branch from this chat"
                                        >
                                            New
                                        </button>
                                    `}
                                    ${A$&&W`
                                        <button
                                            type="button"
                                            class="compose-model-popup-btn"
                                            onClick=${(K)=>{g0(K)}}
                                            title="Rename current branch name and agent handle"
                                            disabled=${K$}
                                        >
                                            Rename current…
                                        </button>
                                    `}
                                    ${o0&&W`
                                        <button
                                            type="button"
                                            class="compose-model-popup-btn danger"
                                            onClick=${()=>{Y2()}}
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
                <div class="compose-footer" ref=${l0}>
                    ${!j&&b&&W`
                    <div class="compose-meta-row">
                        ${!j&&b&&W`
                            <div class="compose-model-meta">
                                <button
                                    ref=${C0}
                                    type="button"
                                    class="compose-model-hint compose-model-hint-btn"
                                    title=${i$}
                                    aria-label="Open model picker"
                                    onClick=${M$}
                                    disabled=${Y0}
                                >
                                    ${Y0?"Switching…":r0}
                                </button>
                                <div class="compose-model-meta-subline">
                                    ${!Y0&&a0&&W`
                                        <span class="compose-model-usage-hint" title=${i$}>
                                            ${a0}
                                        </span>
                                    `}
                                </div>
                            </div>
                        `}
                        ${!j&&x&&x.percent!=null&&W`
                            <${V7} usage=${x} onCompact=${s$} />
                        `}
                    </div>
                    `}
                    <div class="compose-actions ${j?"search-mode":""}">
                    ${Q0&&W`
                        <div class="compose-agent-hints compose-agent-hints-inline" title="Active chat agents you can mention with @name">
                            ${s0.map((K)=>W`
                                <button
                                    key=${K.chat_jid||K.agent_name}
                                    type="button"
                                    class="compose-agent-chip"
                                    onClick=${()=>i0(K)}
                                    title=${`${K.chat_jid||"Active agent"} — switch to @${K.agent_name}`}
                                >
                                    <span class="compose-agent-chip-handle">@${K.agent_name}</span>
                                </button>
                            `)}
                        </div>
                    `}
                    ${b$&&W`
                        ${s_?.agent_name&&W`
                            <span
                                class="compose-current-agent-label"
                                title=${s_.chat_jid||U_}
                                onClick=${R$}
                            >@${s_.agent_name}</span>
                        `}
                        <button
                            ref=${D0}
                            type="button"
                            class=${`icon-btn compose-mention-btn${E_?" active":""}`}
                            onClick=${R$}
                            title=${E_?"Hide session manager":"Manage Sessions/Agents"}
                            aria-label="Manage Sessions/Agents"
                            aria-expanded=${E_?"true":"false"}
                        >
                            <svg class="compose-mention-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false">
                                <circle cx="12" cy="12" r="4.25" />
                                <path d="M16.25 7.75v5.4a2.1 2.1 0 0 0 4.2 0V12a8.45 8.45 0 1 0-4.2 7.33" />
                            </svg>
                        </button>
                    `}
                    ${j&&W`
                        <label class="compose-search-scope-wrap" title="Search scope">
                            <span class="compose-search-scope-label">Scope</span>
                            <select
                                class="compose-search-scope-select"
                                value=${Z}
                                onChange=${(K)=>Y?.(K.currentTarget.value)}
                            >
                                <option value="current">Current</option>
                                <option value="root">Branch family</option>
                                <option value="all">All chats</option>
                            </select>
                        </label>
                    `}
                    <button
                        class="icon-btn search-toggle"
                        onClick=${j?q:z}
                        title=${j?"Close search":"Search"}
                    >
                        ${j?W`
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M18 6L6 18M6 6l12 12"/>
                            </svg>
                        `:W`
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <circle cx="11" cy="11" r="8"/>
                                <path d="M21 21l-4.35-4.35"/>
                            </svg>
                        `}
                    </button>
                    ${I0&&!j&&W`
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
                    ${c$&&!j&&W`
                        <button
                            class=${`icon-btn notification-btn${_2?" active":""}`}
                            onClick=${s}
                            title=${d0}
                            type="button"
                        >
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M18 8a6 6 0 1 0-12 0c0 7-3 9-3 9h18s-3-2-3-9" />
                                <path d="M13.73 21a2 2 0 0 1-3.46 0" />
                            </svg>
                        </button>
                    `}
                    ${!j&&W`
                        ${j_&&l&&W`
                            <button
                                class="icon-btn attach-editor-btn"
                                onClick=${l}
                                title=${`Attach open file: ${j_}`}
                                type="button"
                                disabled=${L.includes(j_)}
                            >
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"/><polyline points="13 2 13 9 20 9"/></svg>
                            </button>
                        `}
                        <label class="icon-btn" title="Attach file">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>
                            <input type="file" multiple hidden onChange=${J2} />
                        </label>
                    `}
                    ${(Y_!=="connected"||!j)&&W`
                        <div class="compose-send-stack">
                            ${Y_!=="connected"&&W`
                                <span class="compose-connection-status connection-status ${Y_}" title=${z$}>
                                    ${j2}
                                </span>
                            `}
                            ${!j&&W`
                                <button 
                                    class="icon-btn send-btn" 
                                    type="button"
                                    onClick=${()=>{I$()}}
                                    disabled=${!K0}
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
    `}var C4="piclaw_theme",k1="piclaw_tint",E8="piclaw_chat_themes",t2={bgPrimary:"#ffffff",bgSecondary:"#f7f9fa",bgHover:"#e8ebed",textPrimary:"#0f1419",textSecondary:"#536471",borderColor:"#eff3f4",accent:"#1d9bf0",accentHover:"#1a8cd8",danger:"#f4212e",success:"#00ba7c"},A8={bgPrimary:"#000000",bgSecondary:"#16181c",bgHover:"#1d1f23",textPrimary:"#e7e9ea",textSecondary:"#71767b",borderColor:"#2f3336",accent:"#1d9bf0",accentHover:"#1a8cd8",danger:"#f4212e",success:"#00ba7c"},D8={default:{label:"Default",mode:"auto",light:t2,dark:A8},tango:{label:"Tango",mode:"light",light:{bgPrimary:"#f6f5f4",bgSecondary:"#efedeb",bgHover:"#e5e3e1",textPrimary:"#2e3436",textSecondary:"#5c6466",borderColor:"#d3d7cf",accent:"#3465a4",accentHover:"#2c5890",danger:"#cc0000",success:"#4e9a06"}},xterm:{label:"XTerm",mode:"dark",dark:{bgPrimary:"#000000",bgSecondary:"#0a0a0a",bgHover:"#121212",textPrimary:"#d0d0d0",textSecondary:"#8a8a8a",borderColor:"#1f1f1f",accent:"#00a2ff",accentHover:"#0086d1",danger:"#ff5f5f",success:"#5fff87"}},monokai:{label:"Monokai",mode:"dark",dark:{bgPrimary:"#272822",bgSecondary:"#2f2f2f",bgHover:"#3a3a3a",textPrimary:"#f8f8f2",textSecondary:"#cfcfc2",borderColor:"#3e3d32",accent:"#f92672",accentHover:"#e81560",danger:"#f92672",success:"#a6e22e"}},"monokai-pro":{label:"Monokai Pro",mode:"dark",dark:{bgPrimary:"#2d2a2e",bgSecondary:"#363237",bgHover:"#403a40",textPrimary:"#fcfcfa",textSecondary:"#c1c0c0",borderColor:"#444046",accent:"#ff6188",accentHover:"#f74f7e",danger:"#ff4f5e",success:"#a9dc76"}},ristretto:{label:"Ristretto",mode:"dark",dark:{bgPrimary:"#2c2525",bgSecondary:"#362d2d",bgHover:"#403535",textPrimary:"#f4f1ef",textSecondary:"#cbbdb8",borderColor:"#4a3c3c",accent:"#ff9f43",accentHover:"#f28a2e",danger:"#ff5f56",success:"#a9dc76"}},dracula:{label:"Dracula",mode:"dark",dark:{bgPrimary:"#282a36",bgSecondary:"#303445",bgHover:"#3a3f52",textPrimary:"#f8f8f2",textSecondary:"#c5c8d6",borderColor:"#44475a",accent:"#bd93f9",accentHover:"#a87ded",danger:"#ff5555",success:"#50fa7b"}},catppuccin:{label:"Catppuccin",mode:"dark",dark:{bgPrimary:"#1e1e2e",bgSecondary:"#24273a",bgHover:"#2c2f41",textPrimary:"#cdd6f4",textSecondary:"#a6adc8",borderColor:"#313244",accent:"#89b4fa",accentHover:"#74a0f5",danger:"#f38ba8",success:"#a6e3a1"}},nord:{label:"Nord",mode:"dark",dark:{bgPrimary:"#2e3440",bgSecondary:"#3b4252",bgHover:"#434c5e",textPrimary:"#eceff4",textSecondary:"#d8dee9",borderColor:"#4c566a",accent:"#88c0d0",accentHover:"#78a9c0",danger:"#bf616a",success:"#a3be8c"}},gruvbox:{label:"Gruvbox",mode:"dark",dark:{bgPrimary:"#282828",bgSecondary:"#32302f",bgHover:"#3c3836",textPrimary:"#ebdbb2",textSecondary:"#bdae93",borderColor:"#3c3836",accent:"#d79921",accentHover:"#c28515",danger:"#fb4934",success:"#b8bb26"}},solarized:{label:"Solarized",mode:"auto",light:{bgPrimary:"#fdf6e3",bgSecondary:"#f5efdc",bgHover:"#eee8d5",textPrimary:"#586e75",textSecondary:"#657b83",borderColor:"#e0d8c6",accent:"#268bd2",accentHover:"#1f78b3",danger:"#dc322f",success:"#859900"},dark:{bgPrimary:"#002b36",bgSecondary:"#073642",bgHover:"#0b3c4a",textPrimary:"#eee8d5",textSecondary:"#93a1a1",borderColor:"#18424a",accent:"#268bd2",accentHover:"#1f78b3",danger:"#dc322f",success:"#859900"}},tokyo:{label:"Tokyo",mode:"dark",dark:{bgPrimary:"#1a1b26",bgSecondary:"#24283b",bgHover:"#2f3549",textPrimary:"#c0caf5",textSecondary:"#9aa5ce",borderColor:"#414868",accent:"#7aa2f7",accentHover:"#6b92e6",danger:"#f7768e",success:"#9ece6a"}},miasma:{label:"Miasma",mode:"dark",dark:{bgPrimary:"#1f1f23",bgSecondary:"#29292f",bgHover:"#33333a",textPrimary:"#e5e5e5",textSecondary:"#b4b4b4",borderColor:"#3d3d45",accent:"#c9739c",accentHover:"#b8618c",danger:"#e06c75",success:"#98c379"}},github:{label:"GitHub",mode:"auto",light:{bgPrimary:"#ffffff",bgSecondary:"#f6f8fa",bgHover:"#eaeef2",textPrimary:"#24292f",textSecondary:"#57606a",borderColor:"#d0d7de",accent:"#0969da",accentHover:"#0550ae",danger:"#cf222e",success:"#1a7f37"},dark:{bgPrimary:"#0d1117",bgSecondary:"#161b22",bgHover:"#21262d",textPrimary:"#c9d1d9",textSecondary:"#8b949e",borderColor:"#30363d",accent:"#2f81f7",accentHover:"#1f6feb",danger:"#f85149",success:"#3fb950"}},gotham:{label:"Gotham",mode:"dark",dark:{bgPrimary:"#0b0f14",bgSecondary:"#111720",bgHover:"#18212b",textPrimary:"#cbd6e2",textSecondary:"#9bb0c3",borderColor:"#1f2a37",accent:"#5ccfe6",accentHover:"#48b8ce",danger:"#d26937",success:"#2aa889"}}},q7=["--bg-primary","--bg-secondary","--bg-hover","--text-primary","--text-secondary","--border-color","--accent-color","--accent-hover","--accent-contrast-text","--accent-soft","--accent-soft-strong","--danger-color","--success-color","--search-highlight-color"],X2={theme:"default",tint:null},y8="light",x4=!1;function P1(_){let $=String(_||"").trim().toLowerCase();if(!$)return"default";if($==="solarized-dark"||$==="solarized-light")return"solarized";if($==="github-dark"||$==="github-light")return"github";if($==="tokyo-night")return"tokyo";return $}function x2(_){if(!_)return null;let $=String(_).trim();if(!$)return null;let j=$.startsWith("#")?$.slice(1):$;if(!/^[0-9a-fA-F]{3}$/.test(j)&&!/^[0-9a-fA-F]{6}$/.test(j))return null;let Z=j.length===3?j.split("").map((Y)=>Y+Y).join(""):j,N=parseInt(Z,16);return{r:N>>16&255,g:N>>8&255,b:N&255,hex:`#${Z.toLowerCase()}`}}function Q7(_){if(!_||typeof document>"u")return null;let $=String(_).trim();if(!$)return null;let j=document.createElement("div");if(j.style.color="",j.style.color=$,!j.style.color)return null;let Z=j.style.color;try{if(document.body)j.style.display="none",document.body.appendChild(j),Z=getComputedStyle(j).color||j.style.color,document.body.removeChild(j)}catch{}let N=Z.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/i);if(!N)return null;let Y=parseInt(N[1],10),z=parseInt(N[2],10),q=parseInt(N[3],10);if(![Y,z,q].every((Q)=>Number.isFinite(Q)))return null;let L=`#${[Y,z,q].map((Q)=>Q.toString(16).padStart(2,"0")).join("")}`;return{r:Y,g:z,b:q,hex:L}}function k8(_){return x2(_)||Q7(_)}function a2(_,$,j){let Z=Math.round(_.r+($.r-_.r)*j),N=Math.round(_.g+($.g-_.g)*j),Y=Math.round(_.b+($.b-_.b)*j);return`rgb(${Z} ${N} ${Y})`}function T4(_,$){return`rgba(${_.r}, ${_.g}, ${_.b}, ${$})`}function X7(_){let $=_.r/255,j=_.g/255,Z=_.b/255,N=$<=0.03928?$/12.92:Math.pow(($+0.055)/1.055,2.4),Y=j<=0.03928?j/12.92:Math.pow((j+0.055)/1.055,2.4),z=Z<=0.03928?Z/12.92:Math.pow((Z+0.055)/1.055,2.4);return 0.2126*N+0.7152*Y+0.0722*z}function L7(_){return X7(_)>0.4?"#000000":"#ffffff"}function P8(){if(typeof window>"u")return"light";try{return window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}catch{return"light"}}function f4(_){return D8[_]||D8.default}function B7(_){return _.mode==="auto"?P8():_.mode}function M8(_,$){let j=f4(_);if($==="dark"&&j.dark)return j.dark;if($==="light"&&j.light)return j.light;return j.dark||j.light||t2}function I8(_,$,j){let Z=k8($);if(!Z)return _;let N=x2(_.bgPrimary),Y=x2(_.bgSecondary),z=x2(_.bgHover),q=x2(_.borderColor);if(!N||!Y||!z||!q)return _;let Q=x2(j==="dark"?"#ffffff":"#000000");return{..._,bgPrimary:a2(N,Z,0.08),bgSecondary:a2(Y,Z,0.12),bgHover:a2(z,Z,0.16),borderColor:a2(q,Z,0.08),accent:Z.hex,accentHover:Q?a2(Z,Q,0.18):Z.hex}}function W7(_,$){if(typeof document>"u")return;let j=document.documentElement,Z=_.accent,N=k8(Z),Y=N?T4(N,$==="dark"?0.35:0.2):_.searchHighlight||_.searchHighlightColor,z=N?T4(N,$==="dark"?0.16:0.12):"rgba(29, 155, 240, 0.12)",q=N?T4(N,$==="dark"?0.28:0.2):"rgba(29, 155, 240, 0.2)",L=N?L7(N):$==="dark"?"#000000":"#ffffff",Q={"--bg-primary":_.bgPrimary,"--bg-secondary":_.bgSecondary,"--bg-hover":_.bgHover,"--text-primary":_.textPrimary,"--text-secondary":_.textSecondary,"--border-color":_.borderColor,"--accent-color":Z,"--accent-hover":_.accentHover||Z,"--accent-soft":z,"--accent-soft-strong":q,"--accent-contrast-text":L,"--danger-color":_.danger||t2.danger,"--success-color":_.success||t2.success,"--search-highlight-color":Y||"rgba(29, 155, 240, 0.2)"};Object.entries(Q).forEach(([B,X])=>{if(X)j.style.setProperty(B,X)})}function U7(){if(typeof document>"u")return;let _=document.documentElement;q7.forEach(($)=>_.style.removeProperty($))}function w2(_,$={}){if(typeof document>"u")return null;let j=typeof $.id==="string"&&$.id.trim()?$.id.trim():null,Z=j?document.getElementById(j):document.querySelector(`meta[name="${_}"]`);if(!Z)Z=document.createElement("meta"),document.head.appendChild(Z);if(Z.setAttribute("name",_),j)Z.setAttribute("id",j);return Z}function J8(_){let $=P1(X2?.theme||"default"),j=X2?.tint?String(X2.tint).trim():null,Z=M8($,_);if($==="default"&&j)Z=I8(Z,j,_);if(Z?.bgPrimary)return Z.bgPrimary;return _==="dark"?A8.bgPrimary:t2.bgPrimary}function O7(_,$){if(typeof document>"u")return;let j=w2("theme-color",{id:"dynamic-theme-color"});if(j&&_)j.removeAttribute("media"),j.setAttribute("content",_);let Z=w2("theme-color",{id:"theme-color-light"});if(Z)Z.setAttribute("media","(prefers-color-scheme: light)"),Z.setAttribute("content",J8("light"));let N=w2("theme-color",{id:"theme-color-dark"});if(N)N.setAttribute("media","(prefers-color-scheme: dark)"),N.setAttribute("content",J8("dark"));let Y=w2("msapplication-TileColor");if(Y&&_)Y.setAttribute("content",_);let z=w2("msapplication-navbutton-color");if(z&&_)z.setAttribute("content",_);let q=w2("apple-mobile-web-app-status-bar-style");if(q)q.setAttribute("content",$==="dark"?"black-translucent":"default")}function F7(){if(typeof window>"u")return;let _={...X2,mode:y8};window.dispatchEvent(new CustomEvent("piclaw-theme-change",{detail:_}))}function w8(){try{let _=_$(E8);if(!_)return{};let $=JSON.parse(_);return typeof $==="object"&&$!==null?$:{}}catch{return{}}}function H7(_,$,j){let Z=w8();if(!$&&!j)delete Z[_];else Z[_]={theme:$||"default",tint:j||null};o_(E8,JSON.stringify(Z))}function D7(_){if(!_)return null;return w8()[_]||null}function x8(){if(typeof window>"u")return"web:default";try{let $=new URL(window.location.href).searchParams.get("chat_jid");return $&&$.trim()?$.trim():"web:default"}catch{return"web:default"}}function b4(_,$={}){if(typeof window>"u"||typeof document>"u")return;let j=P1(_?.theme||"default"),Z=_?.tint?String(_.tint).trim():null,N=f4(j),Y=B7(N),z=M8(j,Y);X2={theme:j,tint:Z},y8=Y;let q=document.documentElement;q.dataset.theme=Y,q.dataset.colorTheme=j,q.dataset.tint=Z?String(Z):"",q.style.colorScheme=Y;let L=z;if(j==="default"&&Z)L=I8(z,Z,Y);if(j==="default"&&!Z)U7();else W7(L,Y);if(O7(L.bgPrimary,Y),F7(),$.persist!==!1)if(o_(C4,j),Z)o_(k1,Z);else o_(k1,"")}function y1(){if(f4(X2.theme).mode!=="auto")return;b4(X2,{persist:!1})}function T8(){if(typeof window>"u")return()=>{};let _=x8(),$=D7(_),j=$?P1($.theme||"default"):P1(_$(C4)||"default"),Z=$?$.tint?String($.tint).trim():null:(()=>{let N=_$(k1);return N?N.trim():null})();if(b4({theme:j,tint:Z},{persist:!1}),window.matchMedia&&!x4){let N=window.matchMedia("(prefers-color-scheme: dark)");if(N.addEventListener)N.addEventListener("change",y1);else if(N.addListener)N.addListener(y1);return x4=!0,()=>{if(N.removeEventListener)N.removeEventListener("change",y1);else if(N.removeListener)N.removeListener(y1);x4=!1}}return()=>{}}function C8(_){if(!_||typeof _!=="object")return;let $=_.chat_jid||_.chatJid||x8(),j=_.theme??_.name??_.colorTheme,Z=_.tint??null;if(H7($,j||"default",Z),b4({theme:j||"default",tint:Z},{persist:!1}),!$||$==="web:default")o_(C4,j||"default"),o_(k1,Z||"")}function f8(){if(typeof document>"u")return"light";let _=document.documentElement?.dataset?.theme;if(_==="dark"||_==="light")return _;return P8()}var M1=/#(\w+)/g,J7=new Set(["strong","em","b","i","u","s","br","p","ul","ol","li","blockquote","ruby","rt","rp","span"]),E7=new Set(["a","abbr","blockquote","br","code","div","em","hr","h1","h2","h3","h4","h5","h6","i","img","kbd","li","mark","ol","p","pre","ruby","rt","rp","s","span","strong","sub","sup","table","tbody","td","th","thead","tr","u","ul","math","semantics","mrow","mi","mn","mo","mtext","mspace","msup","msub","msubsup","mfrac","msqrt","mroot","mtable","mtr","mtd","annotation"]),A7=new Set(["class","style","title","role","aria-hidden","aria-label","aria-expanded","aria-live","data-mermaid","data-hashtag"]),y7={a:new Set(["href","target","rel"]),img:new Set(["src","alt","title"])},k7=new Set(["http:","https:","mailto:",""]);function S4(_){return String(_||"").replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/'/g,"&#39;")}function L2(_,$={}){if(!_)return null;let j=String(_).trim();if(!j)return null;if(j.startsWith("#")||j.startsWith("/"))return j;if(j.startsWith("data:")){if($.allowDataImage&&/^data:image\//i.test(j))return j;return null}if(j.startsWith("blob:"))return j;try{let Z=new URL(j,typeof window<"u"?window.location.origin:"http://localhost");if(!k7.has(Z.protocol))return null;return Z.href}catch{return null}}function b8(_,$={}){if(!_)return"";let j=new DOMParser().parseFromString(_,"text/html"),Z=[],N=j.createTreeWalker(j.body,NodeFilter.SHOW_ELEMENT),Y;while(Y=N.nextNode())Z.push(Y);for(let z of Z){let q=z.tagName.toLowerCase();if(!E7.has(q)){let Q=z.parentNode;if(!Q)continue;while(z.firstChild)Q.insertBefore(z.firstChild,z);Q.removeChild(z);continue}let L=y7[q]||new Set;for(let Q of Array.from(z.attributes)){let B=Q.name.toLowerCase(),X=Q.value;if(B.startsWith("on")){z.removeAttribute(Q.name);continue}if(B.startsWith("data-")||B.startsWith("aria-"))continue;if(L.has(B)||A7.has(B)){if(B==="href"){let H=L2(X);if(!H)z.removeAttribute(Q.name);else if(z.setAttribute(Q.name,H),q==="a"&&!z.getAttribute("rel"))z.setAttribute("rel","noopener noreferrer")}else if(B==="src"){let H=q==="img"&&typeof $.rewriteImageSrc==="function"?$.rewriteImageSrc(X):X,M=L2(H,{allowDataImage:q==="img"});if(!M)z.removeAttribute(Q.name);else z.setAttribute(Q.name,M)}continue}z.removeAttribute(Q.name)}}return j.body.innerHTML}function S8(_){if(!_)return _;let $=_.replace(/</g,"&lt;").replace(/>/g,"&gt;");return new DOMParser().parseFromString($,"text/html").documentElement.textContent}function I1(_,$=2){if(!_)return _;let j=_;for(let Z=0;Z<$;Z+=1){let N=S8(j);if(N===j)break;j=N}return j}function P7(_){if(!_)return{text:"",blocks:[]};let j=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),Z=[],N=[],Y=!1,z=[];for(let q of j){if(!Y&&q.trim().match(/^```mermaid\s*$/i)){Y=!0,z=[];continue}if(Y&&q.trim().match(/^```\s*$/)){let L=Z.length;Z.push(z.join(`
`)),N.push(`@@MERMAID_BLOCK_${L}@@`),Y=!1,z=[];continue}if(Y)z.push(q);else N.push(q)}if(Y)N.push("```mermaid"),N.push(...z);return{text:N.join(`
`),blocks:Z}}function M7(_){if(!_)return _;return I1(_,5)}function I7(_){let $=new TextEncoder().encode(String(_||"")),j="";for(let Z of $)j+=String.fromCharCode(Z);return btoa(j)}function w7(_){let $=atob(String(_||"")),j=new Uint8Array($.length);for(let Z=0;Z<$.length;Z+=1)j[Z]=$.charCodeAt(Z);return new TextDecoder().decode(j)}function x7(_,$){if(!_||!$||$.length===0)return _;return _.replace(/@@MERMAID_BLOCK_(\d+)@@/g,(j,Z)=>{let N=Number(Z),Y=$[N]??"",z=M7(Y);return`<div class="mermaid-container" data-mermaid="${I7(z)}"><div class="mermaid-loading">Loading diagram...</div></div>`})}function R8(_){if(!_)return _;return _.replace(/<code>([\s\S]*?)<\/code>/gi,($,j)=>{if(j.includes(`
`))return`
\`\`\`
${j}
\`\`\`
`;return`\`${j}\``})}var T7={span:new Set(["title","class","lang","dir"])};function C7(_,$){let j=T7[_];if(!j||!$)return"";let Z=[],N=/([a-zA-Z_:][\w:.-]*)(?:\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s"'`=<>]+)))?/g,Y;while(Y=N.exec($)){let z=(Y[1]||"").toLowerCase();if(!z||z.startsWith("on")||!j.has(z))continue;let q=Y[2]??Y[3]??Y[4]??"";Z.push(` ${z}="${S4(q)}"`)}return Z.join("")}function v8(_){if(!_)return _;return _.replace(/&lt;([\s\S]*?)&gt;/g,($,j)=>{let Z=j.trim(),N=Z.startsWith("/"),Y=N?Z.slice(1).trim():Z,q=Y.endsWith("/")?Y.slice(0,-1).trim():Y,[L=""]=q.split(/\s+/,1),Q=L.toLowerCase();if(!Q||!J7.has(Q))return $;if(Q==="br")return N?"":"<br>";if(N)return`</${Q}>`;let B=q.slice(L.length).trim(),X=C7(Q,B);return`<${Q}${X}>`})}function u8(_){if(!_)return _;let $=(j)=>j.replace(/&amp;lt;/g,"&lt;").replace(/&amp;gt;/g,"&gt;").replace(/&amp;quot;/g,"&quot;").replace(/&amp;#39;/g,"&#39;").replace(/&amp;amp;/g,"&amp;");return _.replace(/<pre><code>([\s\S]*?)<\/code><\/pre>/g,(j,Z)=>`<pre><code>${$(Z)}</code></pre>`).replace(/<code>([\s\S]*?)<\/code>/g,(j,Z)=>`<code>${$(Z)}</code>`)}function m8(_){if(!_)return _;let $=new DOMParser().parseFromString(_,"text/html"),j=$.createTreeWalker($.body,NodeFilter.SHOW_TEXT),Z=(Y)=>Y.replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&quot;/g,'"').replace(/&#39;/g,"'").replace(/&amp;/g,"&"),N;while(N=j.nextNode()){if(!N.nodeValue)continue;let Y=Z(N.nodeValue);if(Y!==N.nodeValue)N.nodeValue=Y}return $.body.innerHTML}function f7(_){if(!window.katex)return _;let $=(z)=>S8(z).replace(/&gt;/g,">").replace(/&lt;/g,"<").replace(/&amp;/g,"&").replace(/<br\s*\/?\s*>/gi,`
`),j=(z)=>{let q=[],L=z.replace(/<pre\b[^>]*>\s*<code\b[^>]*>[\s\S]*?<\/code>\s*<\/pre>/gi,(Q)=>{let B=q.length;return q.push(Q),`@@CODE_BLOCK_${B}@@`});return L=L.replace(/<code\b[^>]*>[\s\S]*?<\/code>/gi,(Q)=>{let B=q.length;return q.push(Q),`@@CODE_INLINE_${B}@@`}),{html:L,blocks:q}},Z=(z,q)=>{if(!q.length)return z;return z.replace(/@@CODE_(?:BLOCK|INLINE)_(\d+)@@/g,(L,Q)=>{let B=Number(Q);return q[B]??""})},N=j(_),Y=N.html;return Y=Y.replace(/(^|\n|<br\s*\/?\s*>|<p>|<\/p>)\s*\$\$([\s\S]+?)\$\$\s*(?=\n|<br\s*\/?\s*>|<\/p>|$)/gi,(z,q,L)=>{try{let Q=katex.renderToString($(L.trim()),{displayMode:!0,throwOnError:!1});return`${q}${Q}`}catch(Q){return`<span class="math-error" title="${S4(Q.message)}">${z}</span>`}}),Y=Y.replace(/(^|[^\\$])\$(?!\s)([^\n$]+?)\$/g,(z,q,L)=>{if(/\s$/.test(L))return z;try{let Q=katex.renderToString($(L),{displayMode:!1,throwOnError:!1});return`${q}${Q}`}catch(Q){return`${q}<span class="math-error" title="${S4(Q.message)}">$${L}$</span>`}}),Z(Y,N.blocks)}function b7(_){if(!_)return _;let $=new DOMParser().parseFromString(_,"text/html"),j=$.createTreeWalker($.body,NodeFilter.SHOW_TEXT),Z=[],N;while(N=j.nextNode())Z.push(N);for(let Y of Z){let z=Y.nodeValue;if(!z)continue;if(M1.lastIndex=0,!M1.test(z))continue;M1.lastIndex=0;let q=Y.parentElement;if(q&&(q.closest("a")||q.closest("code")||q.closest("pre")))continue;let L=z.split(M1);if(L.length<=1)continue;let Q=$.createDocumentFragment();L.forEach((B,X)=>{if(X%2===1){let H=$.createElement("a");H.setAttribute("href","#"),H.className="hashtag",H.setAttribute("data-hashtag",B),H.textContent=`#${B}`,Q.appendChild(H)}else Q.appendChild($.createTextNode(B))}),Y.parentNode?.replaceChild(Q,Y)}return $.body.innerHTML}function S7(_){if(!_)return _;let j=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),Z=[],N=!1;for(let Y of j){if(!N&&Y.trim().match(/^```(?:math|katex|latex)\s*$/i)){N=!0,Z.push("$$");continue}if(N&&Y.trim().match(/^```\s*$/)){N=!1,Z.push("$$");continue}Z.push(Y)}return Z.join(`
`)}function $$(_,$,j={}){if(!_)return"";let Z=S7(_),{text:N,blocks:Y}=P7(Z),z=I1(N,2),L=R8(z).replace(/</g,"&lt;").replace(/>/g,"&gt;"),Q=v8(L),B=window.marked?marked.parse(Q,{headerIds:!1,mangle:!1}):Q.replace(/\n/g,"<br>");return B=u8(B),B=m8(B),B=f7(B),B=b7(B),B=x7(B,Y),B=b8(B,j),B}function w1(_){if(!_)return"";let $=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`),j=I1($,2),N=R8(j).replace(/</g,"&lt;").replace(/>/g,"&gt;"),Y=v8(N),z=window.marked?marked.parse(Y):Y.replace(/\n/g,"<br>");return z=u8(z),z=m8(z),z=b8(z),z}function R7(_,$=6){return _.replace(/<polyline\b([^>]*)\bpoints="([^"]+)"([^>]*)\/?\s*>/g,(j,Z,N,Y)=>{let z=N.trim().split(/\s+/).map((L)=>{let[Q,B]=L.split(",").map(Number);return{x:Q,y:B}});if(z.length<3)return`<polyline${Z}points="${N}"${Y}/>`;let q=[`M ${z[0].x},${z[0].y}`];for(let L=1;L<z.length-1;L++){let Q=z[L-1],B=z[L],X=z[L+1],H=B.x-Q.x,M=B.y-Q.y,b=X.x-B.x,m=X.y-B.y,g=Math.sqrt(H*H+M*M),y=Math.sqrt(b*b+m*m),x=Math.min($,g/2,y/2);if(x<0.5){q.push(`L ${B.x},${B.y}`);continue}let h=B.x-H/g*x,E=B.y-M/g*x,S=B.x+b/y*x,s=B.y+m/y*x,o=H*m-M*b>0?1:0;q.push(`L ${h},${E}`),q.push(`A ${x},${x} 0 0 ${o} ${S},${s}`)}return q.push(`L ${z[z.length-1].x},${z[z.length-1].y}`),`<path${Z}d="${q.join(" ")}"${Y}/>`})}async function g$(_){if(!window.beautifulMermaid)return;let{renderMermaid:$,THEMES:j}=window.beautifulMermaid,N=f8()==="dark"?j["tokyo-night"]:j["github-light"],Y=_.querySelectorAll(".mermaid-container[data-mermaid]");for(let z of Y)try{let q=z.dataset.mermaid,L=w7(q||""),Q=I1(L,2),B=await $(Q,{...N,transparent:!0});B=R7(B),z.innerHTML=B,z.removeAttribute("data-mermaid")}catch(q){console.error("Mermaid render error:",q);let L=document.createElement("pre");L.className="mermaid-error",L.textContent=`Diagram error: ${q.message}`,z.innerHTML="",z.appendChild(L),z.removeAttribute("data-mermaid")}}function g8(_){let $=String(_||"").trim();if(!$.startsWith("/btw"))return null;let j=$.slice(4).trim();if(!j)return{type:"help"};if(j==="clear"||j==="close")return{type:"clear"};return{type:"ask",question:j}}function p8(_){return String(_||"").trim()||"web:default"}function c8(_){if(!_)return!1;let $=String(_.answer||"").trim();return _.status!=="running"&&Boolean($)}function h8(_){if(!_)return!1;return _.status!=="running"}function i8(_){let $=String(_?.question||"").trim(),j=String(_?.answer||"").trim();if(!$&&!j)return"";return["BTW side conversation",$?`Question: ${$}`:null,j?`Answer:
${j}`:null].filter(Boolean).join(`

`)}function l8({session:_,onClose:$,onInject:j,onRetry:Z}){let N=P(null),Y=P(null),z=_?.thinking?w1(_.thinking):"",q=_?.answer?$$(_.answer,null,{sanitize:!1}):"";if(R(()=>{if(N.current&&z)g$(N.current).catch(()=>{})},[z]),R(()=>{if(Y.current&&q)g$(Y.current).catch(()=>{})},[q]),!_)return null;let L=_.status==="running",Q=Boolean(String(_.answer||"").trim()),B=Boolean(String(_.thinking||"").trim()),X=c8(_),H=h8(_),M=!L&&Q,b=L?"Thinking…":_.status==="error"?"Error":"Done";return W`
        <section class="btw-panel" aria-label="BTW side conversation">
            <div class="btw-panel-header">
                <div class="btw-panel-title-wrap">
                    <span class="btw-panel-title">Question</span>
                    <span class=${`btw-panel-status btw-panel-status-${_.status||"idle"}`}>${b}</span>
                </div>
                <button class="btw-panel-close" onClick=${()=>$?.()} title="Close BTW" aria-label="Close BTW">
                    <svg viewBox="0 0 16 16" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round">
                        <line x1="4" y1="4" x2="12" y2="12"/>
                        <line x1="12" y1="4" x2="4" y2="12"/>
                    </svg>
                </button>
            </div>

            ${_.question&&W`<div class="btw-block btw-question">${_.question}</div>`}
            ${_.error&&W`<div class="btw-block btw-error">${_.error}</div>`}
            ${B&&W`
                <details class="btw-block btw-thinking" open=${L?!0:void 0}>
                    <summary>Thinking</summary>
                    <div
                        class="btw-thinking-body post-content"
                        ref=${N}
                        dangerouslySetInnerHTML=${{__html:z}}
                    ></div>
                </details>
            `}
            ${X&&W`
                <div class="btw-block btw-answer">
                    <div class="btw-answer-label">Answer</div>
                    <div
                        class="btw-answer-body post-content"
                        ref=${Y}
                        dangerouslySetInnerHTML=${{__html:q}}
                    ></div>
                </div>
            `}

            ${H&&W`
                <div class="btw-panel-footer">
                    <div class="btw-panel-footer-left">
                        ${_.question&&W`
                            <button class="btw-btn btw-btn-secondary" onClick=${()=>Z?.()}>
                                Retry
                            </button>
                        `}
                    </div>
                    <div class="btw-panel-footer-right">
                        <button class="btw-btn btw-btn-primary" onClick=${()=>j?.()} disabled=${!M}>
                            Inject into chat
                        </button>
                    </div>
                </div>
            `}
        </section>
    `}function v7(_){let $=_?.artifact||{},j=$.kind||_?.kind||null;if(j!=="html"&&j!=="svg")return null;if(j==="html"){let N=typeof $.html==="string"?$.html:typeof _?.html==="string"?_.html:"";return N?{kind:j,html:N}:null}let Z=typeof $.svg==="string"?$.svg:typeof _?.svg==="string"?_.svg:"";return Z?{kind:j,svg:Z}:null}function u7(_){let $=_?.artifact&&typeof _.artifact==="object"?_.artifact:{},j=typeof $.svg==="string"?$.svg:typeof _?.svg==="string"?_.svg:"",Z=typeof $.html==="string"?$.html:typeof _?.html==="string"?_.html:typeof _?.w==="string"?_.w:typeof _?.content==="string"?_.content:"",Y=($.kind||_?.kind||null)==="svg"||j?"svg":"html";if(Y==="svg")return j?{kind:Y,svg:j}:{kind:Y};return Z?{kind:Y,html:Z}:{kind:Y}}function a$(_){return typeof _==="number"&&Number.isFinite(_)?_:null}function q_(_){return typeof _==="string"&&_.trim()?_.trim():null}function d8(_,$=!1){let Z=(Array.isArray(_)?_:$?["interactive"]:[]).filter((N)=>typeof N==="string").map((N)=>N.trim().toLowerCase()).filter(Boolean);return Array.from(new Set(Z))}var s8="__PICLAW_WIDGET_HOST__:";function n8(_){return JSON.stringify(_).replace(/</g,"\\u003c").replace(/>/g,"\\u003e").replace(/&/g,"\\u0026").replace(/\u2028/g,"\\u2028").replace(/\u2029/g,"\\u2029")}function R4(_,$){if(!_||_.type!=="generated_widget")return null;let j=v7(_);if(!j)return null;return{title:_.title||_.name||"Generated widget",subtitle:typeof _.subtitle==="string"?_.subtitle:"",description:_.description||_.subtitle||"",originPostId:Number.isFinite($?.id)?$.id:null,originChatJid:typeof $?.chat_jid==="string"?$.chat_jid:null,widgetId:_.widget_id||_.id||null,artifact:j,capabilities:d8(_.capabilities,_.interactive===!0),source:"timeline",status:"final"}}function o8(_){if(!_||typeof _!=="object")return null;let $=u7(_),j=q_(_?.widget_id)||q_(_?.widgetId)||q_(_?.tool_call_id)||q_(_?.toolCallId),Z=q_(_?.tool_call_id)||q_(_?.toolCallId),N=q_(_?.turn_id)||q_(_?.turnId),Y=q_(_?.title)||q_(_?.name)||"Generated widget",z=q_(_?.subtitle)||"",q=q_(_?.description)||z,L=q_(_?.status),Q=L==="loading"||L==="streaming"||L==="final"||L==="error"?L:"streaming";return{title:Y,subtitle:z,description:q,originPostId:a$(_?.origin_post_id)??a$(_?.originPostId),originChatJid:q_(_?.origin_chat_jid)||q_(_?.originChatJid)||q_(_?.chat_jid)||null,widgetId:j,artifact:$,capabilities:d8(_?.capabilities,!0),source:"live",status:Q,turnId:N,toolCallId:Z,width:a$(_?.width),height:a$(_?.height),error:q_(_?.error)}}function r8(_){return R4(_,null)!==null}function T0(_){let $=q_(_?.toolCallId)||q_(_?.tool_call_id);if($)return $;let j=q_(_?.widgetId)||q_(_?.widget_id);if(j)return j;let Z=a$(_?.originPostId)??a$(_?.origin_post_id);if(Z!==null)return`post:${Z}`;return null}function a8(_){let j=(_?.artifact||{}).kind||_?.kind||null,N=(Array.isArray(_?.capabilities)?_.capabilities:[]).some((Y)=>typeof Y==="string"&&Y.trim().toLowerCase()==="interactive");return j==="html"&&(_?.source==="live"||N)}function t8(_){return a8(_)?"allow-downloads allow-scripts":"allow-downloads"}function x1(_){return{title:q_(_?.title)||"Generated widget",widgetId:q_(_?.widgetId)||q_(_?.widget_id),toolCallId:q_(_?.toolCallId)||q_(_?.tool_call_id),turnId:q_(_?.turnId)||q_(_?.turn_id),capabilities:Array.isArray(_?.capabilities)?_.capabilities:[],source:_?.source==="live"?"live":"timeline",status:q_(_?.status)||"final"}}function T1(_){return{...x1(_),subtitle:q_(_?.subtitle)||"",description:q_(_?.description)||"",error:q_(_?.error)||null,width:a$(_?.width),height:a$(_?.height),runtimeState:_?.runtimeState&&typeof _.runtimeState==="object"?_.runtimeState:null}}function C1(_){return`${s8}${JSON.stringify(T1(_))}`}function e8(_){if(typeof _==="string"&&_.trim())return _.trim();if(!_||typeof _!=="object")return null;let $=q_(_.text)||q_(_.content)||q_(_.message)||q_(_.prompt)||q_(_.value);if($)return $;let j=_.data;if(typeof j==="string"&&j.trim())return j.trim();if(j&&typeof j==="object"){let Z=q_(j.text)||q_(j.content)||q_(j.message)||q_(j.prompt)||q_(j.value);if(Z)return Z}return null}function _6(_){if(!_||typeof _!=="object")return!1;return _.close===!0||_.dismiss===!0||_.closeAfterSubmit===!0}function $6(_){let $=q_(_?.status);if($==="loading"||$==="streaming")return"Widget is loading…";if($==="error")return q_(_?.error)||"Widget failed to load.";return"Widget artifact is missing or unsupported."}function m7(_){let $=x1(_);return`<script>
(function () {
  const meta = ${n8($)};
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

  const windowNamePrefix = ${n8(s8)};
  let lastWindowName = null;
  function applyHostEnvelope(data) {
    if (!data) return;
    window.piclawWidget.lastHostMessage = data;
    if (data.type === 'widget.init' || data.type === 'widget.update' || data.type === 'widget.complete' || data.type === 'widget.error') {
      window.piclawWidget.hostState = data.payload || null;
    }
    window.dispatchEvent(new CustomEvent('piclaw:widget-message', { detail: data }));
  }

  function readWindowNameState() {
    try {
      const raw = window.name || '';
      if (!raw || raw === lastWindowName || !raw.startsWith(windowNamePrefix)) return;
      lastWindowName = raw;
      const payload = JSON.parse(raw.slice(windowNamePrefix.length));
      applyHostEnvelope({
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
    applyHostEnvelope(data);
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
</script>`}function j6(_){let $=_?.artifact||{},j=$.kind||_?.kind||null,Z=typeof $.html==="string"?$.html:typeof _?.html==="string"?_.html:"",N=typeof $.svg==="string"?$.svg:typeof _?.svg==="string"?_.svg:"",Y=typeof _?.title==="string"&&_.title.trim()?_.title.trim():"Generated widget",z=j==="svg"?N:Z;if(!z)return"";let q=a8(_),L=["default-src 'none'","img-src data: blob: https: http:","style-src 'unsafe-inline'","font-src data: https: http:","media-src data: blob: https: http:","connect-src 'none'","frame-src 'none'",q?"script-src 'unsafe-inline'":"script-src 'none'","object-src 'none'","base-uri 'none'","form-action 'none'"].join("; "),Q=j==="svg"?`<div class="widget-svg-shell">${z}</div>`:z,B=q?m7(_):"";return`<!doctype html>
<html>
<head>
<meta charset="utf-8" />
<meta http-equiv="Content-Security-Policy" content="${L}" />
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
${B}
</head>
<body>${Q}</body>
</html>`}function Z6({widget:_,onClose:$,onWidgetEvent:j}){let Z=P(null),N=P(!1),Y=v_(()=>j6(_),[_]);if(R(()=>{if(!_)return;let y=(x)=>{if(x.key==="Escape")$?.()};return document.addEventListener("keydown",y),()=>document.removeEventListener("keydown",y)},[_,$]),R(()=>{N.current=!1},[Y]),R(()=>{if(!_)return;let y=Z.current;if(!y)return;let x=(e)=>{try{let o=C1(_);if(y.name=o,y.contentWindow)y.contentWindow.name=o;y.contentWindow?.postMessage({__piclawGeneratedWidgetHost:!0,type:e,widgetId:_?.widgetId||null,toolCallId:_?.toolCallId||null,turnId:_?.turnId||null,payload:e==="widget.init"?x1(_):T1(_)},"*")}catch{}},h=()=>{x("widget.init"),x("widget.update")},E=()=>{N.current=!0,h()};y.addEventListener("load",E);let s=[0,40,120,300,800].map((e)=>setTimeout(h,e));return()=>{y.removeEventListener("load",E),s.forEach((e)=>clearTimeout(e))}},[_,Y]),R(()=>{if(!_)return;let y=Z.current;if(!y?.contentWindow)return;try{let x=C1(_);y.name=x,y.contentWindow.name=x,y.contentWindow.postMessage({__piclawGeneratedWidgetHost:!0,type:"widget.update",widgetId:_?.widgetId||null,toolCallId:_?.toolCallId||null,turnId:_?.turnId||null,payload:T1(_)},"*")}catch{}return},[_]),R(()=>{if(!_)return;let y=(x)=>{let h=Z.current;if(!h?.contentWindow||x.source!==h.contentWindow)return;let E=x?.data;if(!E||E.__piclawGeneratedWidget!==!0)return;let S=T0({widgetId:E.widgetId,toolCallId:E.toolCallId}),s=T0(_);if(S&&s&&S!==s)return;j?.(E,_)};return window.addEventListener("message",y),()=>window.removeEventListener("message",y)},[_,j]),!_)return null;let q=(_?.artifact||{}).kind||_?.kind||"html",L=typeof _?.title==="string"&&_.title.trim()?_.title.trim():"Generated widget",Q=typeof _?.subtitle==="string"&&_.subtitle.trim()?_.subtitle.trim():"",B=_?.source==="live"?"live":"timeline",X=typeof _?.status==="string"&&_.status.trim()?_.status.trim():"final",H=B==="live"?`Live widget • ${X.toUpperCase()}`:_?.originPostId?`Message #${_.originPostId}`:"Timeline launch",M=typeof _?.description==="string"&&_.description.trim()?_.description.trim():"",b=!Y,m=$6(_),g=t8(_);return W`
        <div class="floating-widget-backdrop" onClick=${()=>$?.()}>
            <section
                class="floating-widget-pane"
                aria-label=${L}
                onClick=${(y)=>y.stopPropagation()}
            >
                <div class="floating-widget-header">
                    <div class="floating-widget-heading">
                        <div class="floating-widget-eyebrow">${H} • ${q.toUpperCase()}</div>
                        <div class="floating-widget-title">${L}</div>
                        ${(Q||M)&&W`
                            <div class="floating-widget-subtitle">${Q||M}</div>
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
                    ${b?W`<div class="floating-widget-empty">${m}</div>`:W`
                            <iframe
                                ref=${Z}
                                class="floating-widget-frame"
                                title=${L}
                                name=${C1(_)}
                                sandbox=${g}
                                referrerpolicy="no-referrer"
                                srcdoc=${Y}
                            ></iframe>
                        `}
                </div>
            </section>
        </div>
    `}var N6="PiClaw";function v4(_,$,j=!1){let Z=_||"PiClaw",N=Z.charAt(0).toUpperCase(),Y=["#FF6B6B","#4ECDC4","#45B7D1","#FFA07A","#98D8C8","#F7DC6F","#BB8FCE","#85C1E2","#F8B195","#6C5CE7","#00B894","#FDCB6E","#E17055","#74B9FF","#A29BFE","#FD79A8","#00CEC9","#FFEAA7","#DFE6E9","#FF7675","#55EFC4","#81ECEC","#FAB1A0","#74B9FF","#A29BFE","#FD79A8"],z=N.charCodeAt(0)%Y.length,q=Y[z],L=Z.trim().toLowerCase(),Q=typeof $==="string"?$.trim():"",B=Q?Q:null,X=j||L==="PiClaw".toLowerCase()||L==="pi";return{letter:N,color:q,image:B||(X?"/static/icon-192.png":null)}}function Y6(_,$){if(!_)return"PiClaw";let j=$[_]?.name||_;return j?j.charAt(0).toUpperCase()+j.slice(1):"PiClaw"}function z6(_,$){if(!_)return null;let j=$[_]||{};return j.avatar_url||j.avatarUrl||j.avatar||null}function K6(_){if(!_)return null;if(typeof document<"u"){let Y=document.documentElement,z=Y?.dataset?.colorTheme||"",q=Y?.dataset?.tint||"",L=getComputedStyle(Y).getPropertyValue("--accent-color")?.trim();if(L&&(q||z&&z!=="default"))return L}let $=["#4ECDC4","#FF6B6B","#45B7D1","#BB8FCE","#FDCB6E","#00B894","#74B9FF","#FD79A8","#81ECEC","#FFA07A"],j=String(_),Z=0;for(let Y=0;Y<j.length;Y+=1)Z=(Z*31+j.charCodeAt(Y))%2147483647;let N=Math.abs(Z)%$.length;return $[N]}function g7(_){if(!_||typeof _!=="object")return null;let $=_.started_at??_.startedAt;if(typeof $!=="string"||!$)return null;let j=Date.parse($);return Number.isFinite(j)?j:null}function e2(_){if(!_||typeof _!=="object")return!1;let $=_.intent_key??_.intentKey;return _.type==="intent"&&$==="compaction"}function G6(_){if(!_||typeof _!=="object")return"";let $=_.title;if(typeof $==="string"&&$.trim())return $.trim();let j=_.status;if(typeof j==="string"&&j.trim())return j.trim();return e2(_)?"Compacting context":"Working..."}function p7(_){let $=Math.max(0,Math.floor(_/1000)),j=$%60,Z=Math.floor($/60)%60,N=Math.floor($/3600);if(N>0)return`${N}:${String(Z).padStart(2,"0")}:${String(j).padStart(2,"0")}`;return`${Z}:${String(j).padStart(2,"0")}`}function V6(_,$=Date.now()){let j=g7(_);if(j===null)return null;return p7(Math.max(0,$-j))}function q6({status:_,draft:$,plan:j,thought:Z,pendingRequest:N,intent:Y,turnId:z,steerQueued:q,onPanelToggle:L}){let X=($_)=>{if(!$_)return{text:"",totalLines:0,fullText:""};if(typeof $_==="string"){let C_=$_,h_=C_?C_.replace(/\r\n/g,`
`).split(`
`).length:0;return{text:C_,totalLines:h_,fullText:C_}}let H_=$_.text||"",Z_=$_.fullText||$_.full_text||H_,D_=Number.isFinite($_.totalLines)?$_.totalLines:Z_?Z_.replace(/\r\n/g,`
`).split(`
`).length:0;return{text:H_,totalLines:D_,fullText:Z_}},H=160,M=($_)=>String($_||"").replace(/<\/?internal>/gi,""),b=($_)=>{if(!$_)return 1;return Math.max(1,Math.ceil($_.length/160))},m=($_,H_,Z_)=>{let D_=($_||"").replace(/\r\n/g,`
`).replace(/\r/g,`
`);if(!D_)return{text:"",omitted:0,totalLines:Number.isFinite(Z_)?Z_:0,visibleLines:0};let C_=D_.split(`
`),h_=C_.length>H_?C_.slice(0,H_).join(`
`):D_,i_=Number.isFinite(Z_)?Z_:C_.reduce((f_,M_)=>f_+b(M_),0),g_=h_?h_.split(`
`).reduce((f_,M_)=>f_+b(M_),0):0,l_=Math.max(i_-g_,0);return{text:h_,omitted:l_,totalLines:i_,visibleLines:g_}},g=X(j),y=X(Z),x=X($),h=Boolean(g.text)||g.totalLines>0,E=Boolean(y.text)||y.totalLines>0,S=Boolean(x.fullText?.trim()||x.text?.trim());if(!_&&!S&&!h&&!E&&!N&&!Y)return null;let[s,e]=v(new Set),[o,j_]=v(()=>Date.now()),l=($_)=>e((H_)=>{let Z_=new Set(H_),D_=!Z_.has($_);if(D_)Z_.add($_);else Z_.delete($_);if(typeof L==="function")L($_,D_);return Z_});R(()=>{e(new Set)},[z]);let Q_=e2(_);R(()=>{if(!Q_)return;j_(Date.now());let $_=setInterval(()=>j_(Date.now()),1000);return()=>clearInterval($_)},[Q_,_?.started_at,_?.startedAt]);let a_=_?.turn_id||z,c_=K6(a_),r=q?"turn-dot turn-dot-queued":"turn-dot",N_=($_)=>$_,__=Boolean(_?.last_activity||_?.lastActivity),X_=($_)=>$_==="warning"?"#f59e0b":$_==="error"?"var(--danger-color)":$_==="success"?"var(--success-color)":c_,G_=Y?.kind||"info",L_=X_(G_),U_=X_(_?.kind||(Q_?"warning":"info")),Y_="",m_=_?.title,T_=_?.status;if(_?.type==="plan")Y_=m_?`Planning: ${m_}`:"Planning...";else if(_?.type==="tool_call")Y_=m_?`Running: ${m_}`:"Running tool...";else if(_?.type==="tool_status")Y_=m_?`${m_}: ${T_||"Working..."}`:T_||"Working...";else if(_?.type==="error")Y_=m_||"Agent error";else Y_=m_||T_||"Working...";if(__)Y_="Last activity just now";let A_=({panelTitle:$_,text:H_,fullText:Z_,totalLines:D_,maxLines:C_,titleClass:h_,panelKey:i_})=>{let g_=s.has(i_),l_=Z_||H_||"",f_=i_==="thought"||i_==="draft"?M(l_):l_,M_=typeof C_==="number",k_=g_&&M_,p_=M_?m(f_,C_,D_):{text:f_||"",omitted:0,totalLines:Number.isFinite(D_)?D_:0};if(!f_&&!(Number.isFinite(p_.totalLines)&&p_.totalLines>0))return null;let Z0=`agent-thinking-body${M_?" agent-thinking-body-collapsible":""}`,M0=M_?`--agent-thinking-collapsed-lines: ${C_};`:"";return W`
            <div
                class="agent-thinking"
                data-expanded=${g_?"true":"false"}
                data-collapsible=${M_?"true":"false"}
                style=${c_?`--turn-color: ${c_};`:""}
            >
                <div class="agent-thinking-title ${h_||""}">
                    ${c_&&W`<span class=${r} aria-hidden="true"></span>`}
                    ${$_}
                    ${k_&&W`
                        <button
                            class="agent-thinking-close"
                            aria-label=${`Close ${$_} panel`}
                            onClick=${()=>l(i_)}
                        >
                            ×
                        </button>
                    `}
                </div>
                <div
                    class=${Z0}
                    style=${M0}
                    dangerouslySetInnerHTML=${{__html:w1(f_)}}
                />
                ${!g_&&p_.omitted>0&&W`
                    <button class="agent-thinking-truncation" onClick=${()=>l(i_)}>
                        ▸ ${p_.omitted} more lines
                    </button>
                `}
                ${g_&&p_.omitted>0&&W`
                    <button class="agent-thinking-truncation" onClick=${()=>l(i_)}>
                        ▴ show less
                    </button>
                `}
            </div>
        `},y_=N?.tool_call?.title,G0=y_?`Awaiting approval: ${y_}`:"Awaiting approval",V0=Q_?V6(_,o):null,V_=($_,H_,Z_=null)=>{let D_=G6($_);return W`
            <div
                class="agent-thinking agent-thinking-intent"
                aria-live="polite"
                style=${H_?`--turn-color: ${H_};`:""}
                title=${$_?.detail||""}
            >
                <div class="agent-thinking-title intent">
                    ${H_&&W`<span class=${r} aria-hidden="true"></span>`}
                    <span class="agent-thinking-title-text">${D_}</span>
                    ${Z_&&W`<span class="agent-status-elapsed">${Z_}</span>`}
                </div>
                ${$_.detail&&W`<div class="agent-thinking-body">${$_.detail}</div>`}
            </div>
        `};return W`
        <div class="agent-status-panel">
            ${Y&&V_(Y,L_)}
            ${_?.type==="intent"&&V_(_,U_,V0)}
            ${N&&W`
                <div class="agent-status agent-status-request" aria-live="polite" style=${c_?`--turn-color: ${c_};`:""}>
                    <span class=${r} aria-hidden="true"></span>
                    <div class="agent-status-spinner"></div>
                    <span class="agent-status-text">${G0}</span>
                </div>
            `}
            ${h&&A_({panelTitle:N_("Planning"),text:g.text,fullText:g.fullText,totalLines:g.totalLines,panelKey:"plan"})}
            ${E&&A_({panelTitle:N_("Thoughts"),text:y.text,fullText:y.fullText,totalLines:y.totalLines,maxLines:8,titleClass:"thought",panelKey:"thought"})}
            ${S&&A_({panelTitle:N_("Draft"),text:x.text,fullText:x.fullText,totalLines:x.totalLines,maxLines:8,titleClass:"thought",panelKey:"draft"})}
            ${_&&_?.type!=="intent"&&W`
                <div class=${`agent-status${__?" agent-status-last-activity":""}${_?.type==="error"?" agent-status-error":""}`} aria-live="polite" style=${c_?`--turn-color: ${c_};`:""}>
                    ${c_&&W`<span class=${r} aria-hidden="true"></span>`}
                    ${_?.type==="error"?W`<span class="agent-status-error-icon" aria-hidden="true">⚠</span>`:!__&&W`<div class="agent-status-spinner"></div>`}
                    <span class="agent-status-text">${Y_}</span>
                </div>
            `}
        </div>
    `}function Q6({request:_,onRespond:$}){if(!_)return null;let{request_id:j,tool_call:Z,options:N,chat_jid:Y}=_,z=Z?.title||"Agent Request",q=Z?.kind||"other",L=Z?.rawInput||{},Q=L.command||L.commands&&L.commands[0]||null,B=L.diff||null,X=L.fileName||L.path||null,H=Z?.description||L.description||L.explanation||null,b=(Array.isArray(Z?.locations)?Z.locations:[]).map((h)=>h?.path).filter((h)=>Boolean(h)),m=Array.from(new Set([X,...b].filter(Boolean)));console.log("AgentRequestModal:",{request_id:j,tool_call:Z,options:N});let g=async(h)=>{try{await F1(j,h,Y||null),$()}catch(E){console.error("Failed to respond to agent request:",E)}},y=async()=>{try{await O4(z,`Auto-approved: ${z}`),await F1(j,"approved",Y||null),$()}catch(h){console.error("Failed to add to whitelist:",h)}},x=N&&N.length>0;return W`
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
                ${(H||Q||B||m.length>0)&&W`
                    <div class="agent-request-body">
                        ${H&&W`
                            <div class="agent-request-description">${H}</div>
                        `}
                        ${m.length>0&&W`
                            <div class="agent-request-files">
                                <div class="agent-request-subtitle">Files</div>
                                <ul>
                                    ${m.map((h,E)=>W`<li key=${E}>${h}</li>`)}
                                </ul>
                            </div>
                        `}
                        ${Q&&W`
                            <pre class="agent-request-command">${Q}</pre>
                        `}
                        ${B&&W`
                            <details class="agent-request-diff">
                                <summary>Proposed diff</summary>
                                <pre>${B}</pre>
                            </details>
                        `}
                    </div>
                `}
                <div class="agent-request-actions">
                    ${x?N.map((h)=>W`
                            <button 
                                key=${h.optionId||h.id||String(h)}
                                class="agent-request-btn ${h.kind==="allow_once"||h.kind==="allow_always"?"primary":""}"
                                onClick=${()=>g(h.optionId||h.id||h)}
                            >
                                ${h.name||h.label||h.optionId||h.id||String(h)}
                            </button>
                        `):W`
                        <button class="agent-request-btn primary" onClick=${()=>g("approved")}>
                            Allow
                        </button>
                        <button class="agent-request-btn" onClick=${()=>g("denied")}>
                            Deny
                        </button>
                        <button class="agent-request-btn always-allow" onClick=${y}>
                            Always Allow This
                        </button>
                    `}
                </div>
            </div>
        </div>
    `}function X6(_){let $=new Date(_);if(Number.isNaN($.getTime()))return _;let Z=new Date-$,N=Z/1000,Y=86400000;if(Z<Y){if(N<60)return"just now";if(N<3600)return`${Math.floor(N/60)}m`;return`${Math.floor(N/3600)}h`}if(Z<5*Y){let L=$.toLocaleDateString(void 0,{weekday:"short"}),Q=$.toLocaleTimeString(void 0,{hour:"2-digit",minute:"2-digit"});return`${L} ${Q}`}let z=$.toLocaleDateString(void 0,{month:"short",day:"numeric"}),q=$.toLocaleTimeString(void 0,{hour:"2-digit",minute:"2-digit"});return`${z} ${q}`}function _1(_){if(!Number.isFinite(_))return"0";return Math.round(_).toLocaleString()}function B$(_){if(_<1024)return _+" B";if(_<1048576)return(_/1024).toFixed(1)+" KB";return(_/1048576).toFixed(1)+" MB"}function B2(_){let $=new Date(_);if(Number.isNaN($.getTime()))return _;return $.toLocaleString()}var c7=new Set(["application/json","application/xml","text/csv","text/html","text/markdown","text/plain","text/xml"]),h7=new Set(["text/markdown"]),i7=new Set(["application/msword","application/rtf","application/vnd.ms-excel","application/vnd.ms-powerpoint","application/vnd.oasis.opendocument.presentation","application/vnd.oasis.opendocument.spreadsheet","application/vnd.oasis.opendocument.text","application/vnd.openxmlformats-officedocument.presentationml.presentation","application/vnd.openxmlformats-officedocument.spreadsheetml.sheet","application/vnd.openxmlformats-officedocument.wordprocessingml.document"]),l7=new Set(["application/vnd.jgraph.mxfile"]);function $1(_){return typeof _==="string"?_.trim().toLowerCase():""}function n7(_){let $=$1(_);return!!$&&($.endsWith(".drawio")||$.endsWith(".drawio.xml")||$.endsWith(".drawio.svg")||$.endsWith(".drawio.png"))}function d7(_){let $=$1(_);return!!$&&$.endsWith(".pdf")}function s7(_){let $=$1(_);return!!$&&($.endsWith(".docx")||$.endsWith(".doc")||$.endsWith(".odt")||$.endsWith(".rtf")||$.endsWith(".xlsx")||$.endsWith(".xls")||$.endsWith(".ods")||$.endsWith(".pptx")||$.endsWith(".ppt")||$.endsWith(".odp"))}function j1(_,$){let j=$1(_);if(n7($)||l7.has(j))return"drawio";if(d7($)||j==="application/pdf")return"pdf";if(s7($)||i7.has(j))return"office";if(!j)return"unsupported";if(j.startsWith("image/"))return"image";if(c7.has(j)||j.startsWith("text/"))return"text";return"unsupported"}function L6(_){let $=$1(_);return h7.has($)}function B6(_){switch(_){case"image":return"Image preview";case"pdf":return"PDF preview";case"office":return"Office viewer";case"drawio":return"Draw.io preview (read-only)";case"text":return"Text preview";default:return"Preview unavailable"}}function o7(_){let j=String(_||"").trim().match(/^#([0-9a-f]{3}|[0-9a-f]{6})$/i);if(!j)return null;let Z=j[1].length===3?j[1].split("").map((N)=>`${N}${N}`).join(""):j[1];return{r:parseInt(Z.slice(0,2),16),g:parseInt(Z.slice(2,4),16),b:parseInt(Z.slice(4,6),16)}}function r7(_){let j=String(_||"").trim().match(/^rgba?\((\d+)[,\s]+(\d+)[,\s]+(\d+)/i);if(!j)return null;let Z=Number(j[1]),N=Number(j[2]),Y=Number(j[3]);if(![Z,N,Y].every((z)=>Number.isFinite(z)))return null;return{r:Z,g:N,b:Y}}function W6(_){return o7(_)||r7(_)}function f1(_){let $=(Y)=>{let z=Y/255;return z<=0.03928?z/12.92:((z+0.055)/1.055)**2.4},j=$(_.r),Z=$(_.g),N=$(_.b);return 0.2126*j+0.7152*Z+0.0722*N}function a7(_,$){let j=Math.max(f1(_),f1($)),Z=Math.min(f1(_),f1($));return(j+0.05)/(Z+0.05)}function t7(_,$,j="#ffffff"){let Z=W6(_);if(!Z)return j;let N=j,Y=-1;for(let z of $){let q=W6(z);if(!q)continue;let L=a7(Z,q);if(L>Y)N=z,Y=L}return N}function u4(){let _=getComputedStyle(document.documentElement),$=(b,m)=>{for(let g of b){let y=_.getPropertyValue(g).trim();if(y)return y}return m},j=$(["--text-primary","--color-text"],"#0f1419"),Z=$(["--text-secondary","--color-text-muted"],"#536471"),N=$(["--bg-primary","--color-bg-primary"],"#ffffff"),Y=$(["--bg-secondary","--color-bg-secondary"],"#f7f9fa"),z=$(["--bg-hover","--bg-tertiary","--color-bg-tertiary"],"#e8ebed"),q=$(["--accent-color","--color-accent"],"#1d9bf0"),L=$(["--success-color","--color-success"],"#00ba7c"),Q=$(["--warning-color","--color-warning","--accent-color"],"#f0b429"),B=$(["--danger-color","--color-error"],"#f4212e"),X=$(["--border-color","--color-border"],"#eff3f4"),H=$(["--font-family"],"system-ui, sans-serif"),M=t7(q,[j,N],j);return{fg:j,fgMuted:Z,bgPrimary:N,bg:Y,bgEmphasis:z,accent:q,good:L,warning:Q,attention:B,border:X,fontFamily:H,buttonTextColor:M}}function U6(){let{fg:_,fgMuted:$,bg:j,bgEmphasis:Z,accent:N,good:Y,warning:z,attention:q,border:L,fontFamily:Q}=u4();return{fontFamily:Q,containerStyles:{default:{backgroundColor:j,foregroundColors:{default:{default:_,subtle:$},accent:{default:N,subtle:N},good:{default:Y,subtle:Y},warning:{default:z,subtle:z},attention:{default:q,subtle:q}}},emphasis:{backgroundColor:Z,foregroundColors:{default:{default:_,subtle:$},accent:{default:N,subtle:N},good:{default:Y,subtle:Y},warning:{default:z,subtle:z},attention:{default:q,subtle:q}}}},actions:{actionsOrientation:"horizontal",actionAlignment:"left",buttonSpacing:8,maxActions:5,showCard:{actionMode:"inline"},spacing:"default"},adaptiveCard:{allowCustomStyle:!1},spacing:{small:4,default:8,medium:12,large:16,extraLarge:24,padding:12},separator:{lineThickness:1,lineColor:L},fontSizes:{small:12,default:14,medium:16,large:18,extraLarge:22},fontWeights:{lighter:300,default:400,bolder:600},imageSizes:{small:40,medium:80,large:120},textBlock:{headingLevel:2}}}var e7=new Set(["1.0","1.1","1.2","1.3","1.4","1.5","1.6"]),O6=!1,b1=null,F6=!1;function m4(_){_.querySelector(".adaptive-card-notice")?.remove()}function _j(_,$,j="error"){m4(_);let Z=document.createElement("div");Z.className=`adaptive-card-notice adaptive-card-notice-${j}`,Z.textContent=$,_.appendChild(Z)}function $j(_,$=(j)=>$$(j,null)){let j=typeof _==="string"?_:String(_??"");if(!j.trim())return{outputHtml:"",didProcess:!1};return{outputHtml:$(j),didProcess:!0}}function jj(_=($)=>$$($,null)){return($,j)=>{try{let Z=$j($,_);j.outputHtml=Z.outputHtml,j.didProcess=Z.didProcess}catch(Z){console.error("[adaptive-card] Failed to process markdown:",Z),j.outputHtml=String($??""),j.didProcess=!1}}}function Zj(_){if(F6||!_?.AdaptiveCard)return;_.AdaptiveCard.onProcessMarkdown=jj(),F6=!0}async function Nj(){if(O6)return;if(b1)return b1;return b1=new Promise((_,$)=>{let j=document.createElement("script");j.src="/static/js/vendor/adaptivecards.min.js",j.onload=()=>{O6=!0,_()},j.onerror=()=>$(Error("Failed to load adaptivecards SDK")),document.head.appendChild(j)}),b1}function Yj(){return globalThis.AdaptiveCards}function zj(_){if(!_||typeof _!=="object")return!1;let $=_;return $.type==="adaptive_card"&&typeof $.card_id==="string"&&typeof $.schema_version==="string"&&typeof $.payload==="object"&&$.payload!==null}function Kj(_){return e7.has(_)}function p4(_){if(!Array.isArray(_))return[];return _.filter(zj)}function Gj(_){let $=(typeof _?.getJsonTypeName==="function"?_.getJsonTypeName():"")||_?.constructor?.name||"Unknown",j=(typeof _?.title==="string"?_.title:"")||"",Z=(typeof _?.url==="string"?_.url:"")||void 0,N=_?.data??void 0;return{type:$,title:j,data:N,url:Z,raw:_}}function g4(_){if(_==null)return"";if(typeof _==="string")return _.trim();if(typeof _==="number")return String(_);if(typeof _==="boolean")return _?"yes":"no";if(Array.isArray(_))return _.map(($)=>g4($)).filter(Boolean).join(", ");if(typeof _==="object")return Object.entries(_).map(([j,Z])=>`${j}: ${g4(Z)}`).filter((j)=>!j.endsWith(": ")).join(", ");return String(_).trim()}function Vj(_,$,j){if($==null)return $;if(_==="Input.Toggle"){if(typeof $==="boolean"){if($)return j?.valueOn??"true";return j?.valueOff??"false"}return typeof $==="string"?$:String($)}if(_==="Input.ChoiceSet"){if(Array.isArray($))return $.join(",");return typeof $==="string"?$:String($)}if(Array.isArray($))return $.join(", ");if(typeof $==="object")return g4($);return typeof $==="string"?$:String($)}function qj(_,$){if(!_||typeof _!=="object")return _;if(!$||typeof $!=="object"||Array.isArray($))return _;let j=$,Z=(N)=>{if(Array.isArray(N))return N.map((q)=>Z(q));if(!N||typeof N!=="object")return N;let z={...N};if(typeof z.id==="string"&&z.id in j&&String(z.type||"").startsWith("Input."))z.value=Vj(z.type,j[z.id],z);for(let[q,L]of Object.entries(z))if(Array.isArray(L)||L&&typeof L==="object")z[q]=Z(L);return z};return Z(_)}function Qj(_){_.classList.add("adaptive-card-readonly");for(let $ of Array.from(_.querySelectorAll("input, textarea, select, button"))){let j=$;try{j.setAttribute("aria-disabled","true")}catch{}try{j.setAttribute("tabindex","-1")}catch{}if("disabled"in j)try{j.disabled=!0}catch{}if("readOnly"in j)try{j.readOnly=!0}catch{}}}function Xj(_){if(typeof _!=="string"||!_.trim())return"";let $=new Date(_);if(Number.isNaN($.getTime()))return"";return new Intl.DateTimeFormat(void 0,{month:"short",day:"numeric",hour:"numeric",minute:"2-digit"}).format($)}function Lj(_){if(_.state==="active")return null;let $=_.state==="completed"?"Submitted":_.state==="cancelled"?"Cancelled":"Failed",j=_.last_submission&&typeof _.last_submission==="object"?_.last_submission:null,Z=j&&typeof j.title==="string"?j.title.trim():"",N=Xj(_.completed_at||j?.submitted_at),Y=[Z||null,N||null].filter(Boolean).join(" · ")||null;return{label:$,detail:Y}}async function H6(_,$,j){if(!Kj($.schema_version))return console.warn(`[adaptive-card] Unsupported schema version ${$.schema_version} for card ${$.card_id}`),!1;try{await Nj()}catch(Z){return console.error("[adaptive-card] Failed to load SDK:",Z),!1}try{let Z=Yj();Zj(Z);let N=new Z.AdaptiveCard,Y=u4();N.hostConfig=new Z.HostConfig(U6());let z=$.last_submission&&typeof $.last_submission==="object"?$.last_submission.data:void 0,q=$.state==="active"?$.payload:qj($.payload,z);N.parse(q),N.onExecuteAction=(B)=>{let X=Gj(B);if(j?.onAction)m4(_),_.classList.add("adaptive-card-busy"),Promise.resolve(j.onAction(X)).catch((H)=>{console.error("[adaptive-card] Action failed:",H);let M=H instanceof Error?H.message:String(H||"Action failed.");_j(_,M||"Action failed.","error")}).finally(()=>{_.classList.remove("adaptive-card-busy")});else console.log("[adaptive-card] Action executed (not wired yet):",X)};let L=N.render();if(!L)return console.warn(`[adaptive-card] Card ${$.card_id} rendered to null`),!1;_.classList.add("adaptive-card-container"),_.style.setProperty("--adaptive-card-button-text-color",Y.buttonTextColor);let Q=Lj($);if(Q){_.classList.add("adaptive-card-finished");let B=document.createElement("div");B.className=`adaptive-card-status adaptive-card-status-${$.state}`;let X=document.createElement("span");if(X.className="adaptive-card-status-label",X.textContent=Q.label,B.appendChild(X),Q.detail){let H=document.createElement("span");H.className="adaptive-card-status-detail",H.textContent=Q.detail,B.appendChild(H)}_.appendChild(B)}if(m4(_),_.appendChild(L),Q)Qj(L);return!0}catch(Z){return console.error(`[adaptive-card] Failed to render card ${$.card_id}:`,Z),!1}}function Z1(_){if(_==null)return"";if(typeof _==="string")return _.trim();if(typeof _==="number")return String(_);if(typeof _==="boolean")return _?"yes":"no";if(Array.isArray(_))return _.map(($)=>Z1($)).filter(Boolean).join(", ");if(typeof _==="object")return Object.entries(_).filter(([$])=>!$.startsWith("__")).map(([$,j])=>`${$}: ${Z1(j)}`).filter(($)=>!$.endsWith(": ")).join(", ");return String(_).trim()}function D6(_){if(typeof _!=="object"||_==null||Array.isArray(_))return[];return Object.entries(_).filter(([$])=>!$.startsWith("__")).map(([$,j])=>({key:$,value:Z1(j)})).filter(($)=>$.value)}function Bj(_){if(!_||typeof _!=="object")return!1;let $=_;return $.type==="adaptive_card_submission"&&typeof $.card_id==="string"&&typeof $.source_post_id==="number"&&typeof $.submitted_at==="string"}function c4(_){if(!Array.isArray(_))return[];return _.filter(Bj)}function J6(_){let $=String(_.title||_.card_id||"card").trim()||"card",j=_.data;if(j==null)return`Card submission: ${$}`;if(typeof j==="string"||typeof j==="number"||typeof j==="boolean"){let Z=Z1(j);return Z?`Card submission: ${$} — ${Z}`:`Card submission: ${$}`}if(typeof j==="object"){let N=D6(j).map(({key:Y,value:z})=>`${Y}: ${z}`);return N.length>0?`Card submission: ${$} — ${N.join(", ")}`:`Card submission: ${$}`}return`Card submission: ${$}`}function E6(_){let $=String(_.title||_.card_id||"Card submission").trim()||"Card submission",j=D6(_.data),Z=j.length>0?j.slice(0,2).map(({key:Y,value:z})=>`${Y}: ${z}`).join(", "):Z1(_.data)||null,N=j.length;return{title:$,summary:Z,fields:j,fieldCount:N,submittedAt:_.submitted_at}}function Wj(_){let $=_?.metadata?.size;return[{label:"Type",value:_?.content_type||"application/octet-stream"},{label:"Size",value:typeof $==="number"?B$($):null},{label:"Added",value:_?.created_at?B2(_.created_at):null}].filter((Z)=>Z.value)}function Uj(_,$,j){let Z=encodeURIComponent($||`attachment-${_}`),N=encodeURIComponent(String(_));if(j==="pdf")return`/pdf-viewer/?media=${N}&name=${Z}#media=${N}&name=${Z}`;if(j==="office"){let Y=L$(_);return`/office-viewer/?url=${encodeURIComponent(Y)}&name=${Z}`}if(j==="drawio")return`/drawio/edit.html?media=${N}&name=${Z}&readonly=1#media=${N}&name=${Z}&readonly=1`;return null}function A6({mediaId:_,info:$,onClose:j}){let Z=$?.filename||`attachment-${_}`,N=v_(()=>j1($?.content_type,Z),[$?.content_type,Z]),Y=B6(N),z=v_(()=>L6($?.content_type),[$?.content_type]),[q,L]=v(N==="text"),[Q,B]=v(""),[X,H]=v(null),M=P(null),b=v_(()=>Wj($),[$]),m=v_(()=>Uj(_,Z,N),[_,Z,N]),g=v_(()=>{if(!z||!Q)return"";return $$(Q)},[z,Q]);return R(()=>{let y=(x)=>{if(x.key==="Escape")j()};return document.addEventListener("keydown",y),()=>document.removeEventListener("keydown",y)},[j]),R(()=>{if(!M.current||!g)return;g$(M.current);return},[g]),R(()=>{let y=!1;async function x(){if(N!=="text"){L(!1),H(null);return}L(!0),H(null);try{let h=await J4(_);if(!y)B(h)}catch{if(!y)H("Failed to load text preview.")}finally{if(!y)L(!1)}}return x(),()=>{y=!0}},[_,N]),W`
        <div class="image-modal attachment-preview-modal" onClick=${j}>
            <div class="attachment-preview-shell" onClick=${(y)=>{y.stopPropagation()}}>
                <div class="attachment-preview-header">
                    <div class="attachment-preview-heading">
                        <div class="attachment-preview-title">${Z}</div>
                        <div class="attachment-preview-subtitle">${Y}</div>
                    </div>
                    <div class="attachment-preview-header-actions">
                        ${m&&W`
                            <a
                                href=${m}
                                target="_blank"
                                rel="noopener noreferrer"
                                class="attachment-preview-download"
                                onClick=${(y)=>y.stopPropagation()}
                            >
                                Open in Tab
                            </a>
                        `}
                        <a
                            href=${L$(_)}
                            download=${Z}
                            class="attachment-preview-download"
                            onClick=${(y)=>y.stopPropagation()}
                        >
                            Download
                        </a>
                        <button class="attachment-preview-close" type="button" onClick=${j}>Close</button>
                    </div>
                </div>
                <div class="attachment-preview-body">
                    ${q&&W`<div class="attachment-preview-state">Loading preview…</div>`}
                    ${!q&&X&&W`<div class="attachment-preview-state">${X}</div>`}
                    ${!q&&!X&&N==="image"&&W`
                        <img class="attachment-preview-image" src=${L$(_)} alt=${Z} />
                    `}
                    ${!q&&!X&&(N==="pdf"||N==="office"||N==="drawio")&&m&&W`
                        <iframe class="attachment-preview-frame" src=${m} title=${Z}></iframe>
                    `}
                    ${!q&&!X&&N==="drawio"&&W`
                        <div class="attachment-preview-readonly-note">Draw.io preview is read-only. Editing tools are disabled in this preview.</div>
                    `}
                    ${!q&&!X&&N==="text"&&z&&W`
                        <div
                            ref=${M}
                            class="attachment-preview-markdown post-content"
                            dangerouslySetInnerHTML=${{__html:g}}
                        />
                    `}
                    ${!q&&!X&&N==="text"&&!z&&W`
                        <pre class="attachment-preview-text">${Q}</pre>
                    `}
                    ${!q&&!X&&N==="unsupported"&&W`
                        <div class="attachment-preview-state">
                            Preview is not available for this file type yet. You can still download it directly.
                        </div>
                    `}
                </div>
                <div class="attachment-preview-meta">
                    ${b.map((y)=>W`
                        <div class="attachment-preview-meta-item" key=${y.label}>
                            <span class="attachment-preview-meta-label">${y.label}</span>
                            <span class="attachment-preview-meta-value">${y.value}</span>
                        </div>
                    `)}
                </div>
            </div>
        </div>
    `}function y6({src:_,onClose:$}){return R(()=>{let j=(Z)=>{if(Z.key==="Escape")$()};return document.addEventListener("keydown",j),()=>document.removeEventListener("keydown",j)},[$]),W`
        <div class="image-modal" onClick=${$}>
            <img src=${_} alt="Full size" />
        </div>
    `}function Oj({mediaId:_,onPreview:$}){let[j,Z]=v(null);if(R(()=>{P2(_).then(Z).catch(()=>{})},[_]),!j)return null;let N=j.filename||"file",Y=j.metadata?.size,z=Y?B$(Y):"",L=j1(j.content_type,j.filename)==="unsupported"?"Details":"Preview";return W`
        <div class="file-attachment" onClick=${(Q)=>Q.stopPropagation()}>
            <a href=${L$(_)} download=${N} class="file-attachment-main">
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
                        ${z&&W`<span class="file-size">${z}</span>`}
                        ${j.content_type&&W`<span class="file-size">${j.content_type}</span>`}
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
                onClick=${(Q)=>{Q.preventDefault(),Q.stopPropagation(),$?.({mediaId:_,info:j})}}
            >
                ${L}
            </button>
        </div>
    `}function Fj({attachment:_,onPreview:$}){let j=Number(_?.id),[Z,N]=v(null);R(()=>{if(!Number.isFinite(j))return;P2(j).then(N).catch(()=>{});return},[j]);let Y=Z?.filename||_.label||`attachment-${_.id}`,z=Number.isFinite(j)?L$(j):null,L=j1(Z?.content_type,Z?.filename||_?.label)==="unsupported"?"Details":"Preview";return W`
        <span class="attachment-pill" title=${Y}>
            ${z?W`
                    <a href=${z} download=${Y} class="attachment-pill-main" onClick=${(Q)=>Q.stopPropagation()}>
                        <${J$}
                            prefix="post"
                            label=${_.label}
                            title=${Y}
                        />
                    </a>
                `:W`
                    <${J$}
                        prefix="post"
                        label=${_.label}
                        title=${Y}
                    />
                `}
            ${Number.isFinite(j)&&Z&&W`
                <button
                    class="attachment-pill-preview"
                    type="button"
                    title=${L}
                    onClick=${(Q)=>{Q.preventDefault(),Q.stopPropagation(),$?.({mediaId:j,info:Z})}}
                >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8S1 12 1 12z"/>
                        <circle cx="12" cy="12" r="3"/>
                    </svg>
                </button>
            `}
        </span>
    `}function S1({annotations:_}){if(!_)return null;let{audience:$,priority:j,lastModified:Z}=_,N=Z?B2(Z):null;return W`
        <div class="content-annotations">
            ${$&&$.length>0&&W`
                <span class="content-annotation">Audience: ${$.join(", ")}</span>
            `}
            ${typeof j==="number"&&W`
                <span class="content-annotation">Priority: ${j}</span>
            `}
            ${N&&W`
                <span class="content-annotation">Updated: ${N}</span>
            `}
        </div>
    `}function Hj({block:_}){let $=_.title||_.name||_.uri,j=_.description,Z=_.size?B$(_.size):"",N=_.mime_type||"",Y=Ej(N),z=L2(_.uri);return W`
        <a
            href=${z||"#"}
            class="resource-link"
            target=${z?"_blank":void 0}
            rel=${z?"noopener noreferrer":void 0}
            onClick=${(q)=>q.stopPropagation()}>
            <div class="resource-link-main">
                <div class="resource-link-header">
                    <span class="resource-link-icon-inline">${Y}</span>
                    <div class="resource-link-title">${$}</div>
                </div>
                ${j&&W`<div class="resource-link-description">${j}</div>`}
                <div class="resource-link-meta">
                    ${N&&W`<span>${N}</span>`}
                    ${Z&&W`<span>${Z}</span>`}
                </div>
            </div>
            <div class="resource-link-icon">↗</div>
        </a>
    `}function Dj({block:_}){let[$,j]=v(!1),Z=_.uri||"Embedded resource",N=_.text||"",Y=Boolean(_.data),z=_.mime_type||"";return W`
        <div class="resource-embed">
            <button class="resource-embed-toggle" onClick=${(q)=>{q.preventDefault(),q.stopPropagation(),j(!$)}}>
                ${$?"▼":"▶"} ${Z}
            </button>
            ${$&&W`
                ${N&&W`<pre class="resource-embed-content">${N}</pre>`}
                ${Y&&W`
                    <div class="resource-embed-blob">
                        <span class="resource-embed-blob-label">Embedded blob</span>
                        ${z&&W`<span class="resource-embed-blob-meta">${z}</span>`}
                        <button class="resource-embed-blob-btn" onClick=${(q)=>{q.preventDefault(),q.stopPropagation();let L=new Blob([Uint8Array.from(atob(_.data),(X)=>X.charCodeAt(0))],{type:z||"application/octet-stream"}),Q=URL.createObjectURL(L),B=document.createElement("a");B.href=Q,B.download=Z.split("/").pop()||"resource",B.click(),URL.revokeObjectURL(Q)}}>Download</button>
                    </div>
                `}
            `}
        </div>
    `}function Jj({block:_,post:$,onOpenWidget:j}){if(!_)return null;let Z=R4(_,$),N=r8(_),Y=Z?.artifact?.kind||_?.artifact?.kind||_?.kind||null,z=Z?.title||_.title||_.name||"Generated widget",q=Z?.description||_.description||_.subtitle||"",L=_.open_label||"Open widget",Q=(B)=>{if(B.preventDefault(),B.stopPropagation(),!Z)return;j?.(Z)};return W`
        <div class="generated-widget-launch" onClick=${(B)=>B.stopPropagation()}>
            <div class="generated-widget-launch-header">
                <div class="generated-widget-launch-eyebrow">Generated widget${Y?` • ${String(Y).toUpperCase()}`:""}</div>
                <div class="generated-widget-launch-title">${z}</div>
            </div>
            ${q&&W`<div class="generated-widget-launch-description">${q}</div>`}
            <div class="generated-widget-launch-actions">
                <button
                    class="generated-widget-launch-btn"
                    type="button"
                    disabled=${!N}
                    onClick=${Q}
                    title=${N?"Open widget in a floating pane":"Unsupported widget artifact"}
                >
                    ${L}
                </button>
                <span class="generated-widget-launch-note">
                    ${N?"Opens in a dismissible floating pane.":"This widget artifact is missing or unsupported."}
                </span>
            </div>
        </div>
    `}function Ej(_){if(!_)return"\uD83D\uDCCE";if(_.startsWith("image/"))return"\uD83D\uDDBC️";if(_.startsWith("audio/"))return"\uD83C\uDFB5";if(_.startsWith("video/"))return"\uD83C\uDFAC";if(_.includes("pdf"))return"\uD83D\uDCC4";if(_.includes("zip")||_.includes("gzip"))return"\uD83D\uDDDC️";if(_.startsWith("text/"))return"\uD83D\uDCC4";return"\uD83D\uDCCE"}function Aj({preview:_}){let $=L2(_.url),j=L2(_.image,{allowDataImage:!0}),Z=j?`background-image: url('${j}')`:"",N=_.site_name;if(!N&&$)try{N=new URL($).hostname}catch{N=$}return W`
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
                ${_.description&&W`
                    <div class="link-preview-description">${_.description}</div>
                `}
            </div>
        </a>
    `}function yj(_,$){return typeof _==="string"?_:""}var kj=1800,Pj=`
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <rect x="9" y="9" width="10" height="10" rx="2"></rect>
        <path d="M7 15H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2v1"></path>
    </svg>`,Mj=`
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <path d="M20 6L9 17l-5-5"></path>
    </svg>`,Ij=`
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <circle cx="12" cy="12" r="9"></circle>
        <path d="M9 9l6 6M15 9l-6 6"></path>
    </svg>`;async function wj(_){let $=typeof _==="string"?_:"";if(!$)return!1;if(navigator.clipboard?.writeText)try{return await navigator.clipboard.writeText($),!0}catch{}try{let j=document.createElement("textarea");j.value=$,j.setAttribute("readonly",""),j.style.position="fixed",j.style.opacity="0",j.style.pointerEvents="none",document.body.appendChild(j),j.select(),j.setSelectionRange(0,j.value.length);let Z=document.execCommand("copy");return document.body.removeChild(j),Z}catch{return!1}}function xj(_){if(!_)return()=>{};let $=Array.from(_.querySelectorAll("pre")).filter((Y)=>Y.querySelector("code"));if($.length===0)return()=>{};let j=new Map,Z=[],N=(Y,z)=>{let q=z||"idle";if(Y.dataset.copyState=q,q==="success")Y.innerHTML=Mj,Y.setAttribute("aria-label","Copied"),Y.setAttribute("title","Copied"),Y.classList.add("is-success"),Y.classList.remove("is-error");else if(q==="error")Y.innerHTML=Ij,Y.setAttribute("aria-label","Copy failed"),Y.setAttribute("title","Copy failed"),Y.classList.add("is-error"),Y.classList.remove("is-success");else Y.innerHTML=Pj,Y.setAttribute("aria-label","Copy code"),Y.setAttribute("title","Copy code"),Y.classList.remove("is-success","is-error")};return $.forEach((Y)=>{let z=document.createElement("div");z.className="post-code-block",Y.parentNode?.insertBefore(z,Y),z.appendChild(Y);let q=document.createElement("button");q.type="button",q.className="post-code-copy-btn",N(q,"idle"),z.appendChild(q);let L=async(Q)=>{Q.preventDefault(),Q.stopPropagation();let X=Y.querySelector("code")?.textContent||"",H=await wj(X);N(q,H?"success":"error");let M=j.get(q);if(M)clearTimeout(M);let b=setTimeout(()=>{N(q,"idle"),j.delete(q)},kj);j.set(q,b)};q.addEventListener("click",L),Z.push(()=>{q.removeEventListener("click",L);let Q=j.get(q);if(Q)clearTimeout(Q);if(z.parentNode)z.parentNode.insertBefore(Y,z),z.remove()})}),()=>{Z.forEach((Y)=>Y())}}function Tj(_){if(!_)return{content:_,fileRefs:[]};let j=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),Z=-1;for(let Q=0;Q<j.length;Q+=1)if(j[Q].trim()==="Files:"&&j[Q+1]&&/^\s*-\s+/.test(j[Q+1])){Z=Q;break}if(Z===-1)return{content:_,fileRefs:[]};let N=[],Y=Z+1;for(;Y<j.length;Y+=1){let Q=j[Y];if(/^\s*-\s+/.test(Q))N.push(Q.replace(/^\s*-\s+/,"").trim());else if(!Q.trim())break;else break}if(N.length===0)return{content:_,fileRefs:[]};let z=j.slice(0,Z),q=j.slice(Y),L=[...z,...q].join(`
`);return L=L.replace(/\n{3,}/g,`

`).trim(),{content:L,fileRefs:N}}function Cj(_){if(!_)return{content:_,messageRefs:[]};let j=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),Z=-1;for(let Q=0;Q<j.length;Q+=1)if(j[Q].trim()==="Referenced messages:"&&j[Q+1]&&/^\s*-\s+/.test(j[Q+1])){Z=Q;break}if(Z===-1)return{content:_,messageRefs:[]};let N=[],Y=Z+1;for(;Y<j.length;Y+=1){let Q=j[Y];if(/^\s*-\s+/.test(Q)){let X=Q.replace(/^\s*-\s+/,"").trim().match(/^message:(\S+)$/i);if(X)N.push(X[1])}else if(!Q.trim())break;else break}if(N.length===0)return{content:_,messageRefs:[]};let z=j.slice(0,Z),q=j.slice(Y),L=[...z,...q].join(`
`);return L=L.replace(/\n{3,}/g,`

`).trim(),{content:L,messageRefs:N}}function fj(_){if(!_)return{content:_,attachments:[]};let j=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),Z=-1;for(let Q=0;Q<j.length;Q+=1){let B=j[Q].trim();if((B==="Images:"||B==="Attachments:")&&j[Q+1]&&/^\s*-\s+/.test(j[Q+1])){Z=Q;break}}if(Z===-1)return{content:_,attachments:[]};let N=[],Y=Z+1;for(;Y<j.length;Y+=1){let Q=j[Y];if(/^\s*-\s+/.test(Q)){let B=Q.replace(/^\s*-\s+/,"").trim(),X=B.match(/^attachment:([^\s)]+)\s*(?:\((.+)\))?$/i)||B.match(/^attachment:([^\s]+)\s+(.+)$/i);if(X){let H=X[1],M=(X[2]||"").trim()||H;N.push({id:H,label:M,raw:B})}else N.push({id:null,label:B,raw:B})}else if(!Q.trim())break;else break}if(N.length===0)return{content:_,attachments:[]};let z=j.slice(0,Z),q=j.slice(Y),L=[...z,...q].join(`
`);return L=L.replace(/\n{3,}/g,`

`).trim(),{content:L,attachments:N}}function bj(_){return _.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function Sj(_,$){if(!_||!$)return _;let j=String($).trim().split(/\s+/).filter(Boolean);if(j.length===0)return _;let Z=j.map(bj).sort((B,X)=>X.length-B.length),N=new RegExp(`(${Z.join("|")})`,"gi"),Y=new RegExp(`^(${Z.join("|")})$`,"i"),z=new DOMParser().parseFromString(_,"text/html"),q=z.createTreeWalker(z.body,NodeFilter.SHOW_TEXT),L=[],Q;while(Q=q.nextNode())L.push(Q);for(let B of L){let X=B.nodeValue;if(!X||!N.test(X)){N.lastIndex=0;continue}N.lastIndex=0;let H=B.parentElement;if(H&&H.closest("code, pre, script, style"))continue;let M=X.split(N).filter((m)=>m!=="");if(M.length===0)continue;let b=z.createDocumentFragment();for(let m of M)if(Y.test(m)){let g=z.createElement("mark");g.className="search-highlight-term",g.textContent=m,b.appendChild(g)}else b.appendChild(z.createTextNode(m));B.parentNode.replaceChild(b,B)}return z.body.innerHTML}function k6({post:_,onClick:$,onHashtagClick:j,onMessageRef:Z,onScrollToMessage:N,agentName:Y,agentAvatarUrl:z,userName:q,userAvatarUrl:L,userAvatarBackground:Q,onDelete:B,isThreadReply:X,isThreadPrev:H,isThreadNext:M,isRemoving:b,highlightQuery:m,onFileRef:g,onOpenWidget:y}){let[x,h]=v(null),E=P(null),S=_.data,s=S.type==="agent_response",e=q||"You",o=s?Y||N6:e,j_=s?v4(Y,z,!0):v4(e,L),l=typeof Q==="string"?Q.trim().toLowerCase():"",Q_=!s&&j_.image&&(l==="clear"||l==="transparent"),a_=s&&Boolean(j_.image),c_=`background-color: ${Q_||a_?"transparent":j_.color}`,r=S.content_meta,N_=Boolean(r?.truncated),__=Boolean(r?.preview),X_=N_&&!__,G_=N_?{originalLength:Number.isFinite(r?.original_length)?r.original_length:S.content?S.content.length:0,maxLength:Number.isFinite(r?.max_length)?r.max_length:0}:null,L_=S.content_blocks||[],U_=S.media_ids||[],Y_=yj(S.content,S.link_previews),{content:m_,fileRefs:T_}=Tj(Y_),{content:A_,messageRefs:y_}=Cj(m_),{content:G0,attachments:V0}=fj(A_);Y_=G0;let V_=p4(L_),$_=c4(L_),H_=V_.length===1&&typeof V_[0]?.fallback_text==="string"?V_[0].fallback_text.trim():"",Z_=$_.length===1?J6($_[0]).trim():"",D_=Boolean(H_)&&Y_?.trim()===H_||Boolean(Z_)&&Y_?.trim()===Z_,C_=Boolean(Y_)&&!X_&&!D_,h_=typeof m==="string"?m.trim():"",i_=v_(()=>{if(!Y_||D_)return"";let C=$$(Y_,j);return h_?Sj(C,h_):C},[Y_,D_,h_]),g_=(C,t)=>{C.stopPropagation(),h(L$(t))},[l_,f_]=v(null),M_=(C)=>{f_(C)},k_=(C)=>{C.stopPropagation(),B?.(_)},p_=(C,t)=>{let O_=new Set;if(!C||t.length===0)return{content:C,usedIds:O_};return{content:C.replace(/attachment:([^\s)"']+)/g,(t_,H0,x_,R0)=>{let j$=H0.replace(/^\/+/,""),C0=t.find((D0)=>D0.name&&D0.name.toLowerCase()===j$.toLowerCase()&&!O_.has(D0.id))||t.find((D0)=>!O_.has(D0.id));if(!C0)return t_;if(O_.add(C0.id),R0.slice(Math.max(0,x_-2),x_)==="](")return`/media/${C0.id}`;return C0.name||"attachment"}),usedIds:O_}},Z0=[],M0=[],P_=[],A0=[],n_=[],b_=[],N0=[],_0=0;if(L_.length>0)L_.forEach((C)=>{if(C?.type==="text"&&C.annotations)N0.push(C.annotations);if(C?.type==="generated_widget")b_.push(C);else if(C?.type==="resource_link")A0.push(C);else if(C?.type==="resource")n_.push(C);else if(C?.type==="file"){let t=U_[_0++];if(t)M0.push(t),P_.push({id:t,name:C?.name||C?.filename||C?.title})}else if(C?.type==="image"||!C?.type){let t=U_[_0++];if(t){let O_=typeof C?.mime_type==="string"?C.mime_type:void 0;Z0.push({id:t,annotations:C?.annotations,mimeType:O_}),P_.push({id:t,name:C?.name||C?.filename||C?.title})}}});else if(U_.length>0){let C=V0.length>0;U_.forEach((t,O_)=>{let w_=V0[O_]||null;if(P_.push({id:t,name:w_?.label||null}),C)M0.push(t);else Z0.push({id:t,annotations:null})})}if(V0.length>0)V0.forEach((C)=>{if(!C?.id)return;let t=P_.find((O_)=>String(O_.id)===String(C.id));if(t&&!t.name)t.name=C.label});let{content:d_,usedIds:Y0}=p_(Y_,P_);Y_=d_;let S_=Z0.filter(({id:C})=>!Y0.has(C)),F0=M0.filter((C)=>!Y0.has(C)),b0=V0.length>0?V0.map((C,t)=>({id:C.id||`attachment-${t+1}`,label:C.label||`attachment-${t+1}`})):P_.map((C,t)=>({id:C.id,label:C.name||`attachment-${t+1}`})),E_=v_(()=>p4(L_),[L_]),$0=v_(()=>c4(L_),[L_]),S0=v_(()=>{return E_.map((C)=>`${C.card_id}:${C.state}`).join("|")},[E_]);R(()=>{if(!E.current)return;return g$(E.current),xj(E.current)},[i_]);let I_=P(null);return R(()=>{if(!I_.current||E_.length===0)return;let C=I_.current;C.innerHTML="";for(let t of E_){let O_=document.createElement("div");C.appendChild(O_),H6(O_,t,{onAction:async(w_)=>{if(w_.type==="Action.OpenUrl"){let t_=L2(w_.url||"");if(!t_)throw Error("Invalid URL");window.open(t_,"_blank","noopener,noreferrer");return}if(w_.type==="Action.Submit"){await U4({post_id:_.id,thread_id:S.thread_id||_.id,chat_jid:_.chat_jid||null,card_id:t.card_id,action:{type:w_.type,title:w_.title||"",data:w_.data}});return}console.warn("[post] unsupported adaptive card action:",w_.type,w_)}}).catch((w_)=>{console.error("[post] adaptive card render error:",w_),O_.textContent=t.fallback_text||"Card failed to render."})}},[S0,_.id]),W`
        <div id=${`post-${_.id}`} class="post ${s?"agent-post":""} ${X?"thread-reply":""} ${H?"thread-prev":""} ${M?"thread-next":""} ${b?"removing":""}" onClick=${$}>
            <div class="post-avatar ${s?"agent-avatar":""} ${j_.image?"has-image":""}" style=${c_}>
                ${j_.image?W`<img src=${j_.image} alt=${o} />`:j_.letter}
            </div>
            <div class="post-body">
                <button
                    class="post-delete-btn"
                    type="button"
                    title="Delete message"
                    aria-label="Delete message"
                    onClick=${k_}
                >
                    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <path d="M18 6L6 18M6 6l12 12" />
                    </svg>
                </button>
                <div class="post-meta">
                    <span class="post-author">${o}</span>
                    <a class="post-time" href=${`#msg-${_.id}`} onClick=${(C)=>{if(C.preventDefault(),C.stopPropagation(),Z)Z(_.id)}}>${X6(_.timestamp)}</a>
                </div>
                ${X_&&G_&&W`
                    <div class="post-content truncated">
                        <div class="truncated-title">Message too large to display.</div>
                        <div class="truncated-meta">
                            Original length: ${_1(G_.originalLength)} chars
                            ${G_.maxLength?W` • Display limit: ${_1(G_.maxLength)} chars`:""}
                        </div>
                    </div>
                `}
                ${__&&G_&&W`
                    <div class="post-content preview">
                        <div class="truncated-title">Preview truncated.</div>
                        <div class="truncated-meta">
                            Showing first ${_1(G_.maxLength)} of ${_1(G_.originalLength)} chars. Download full text below.
                        </div>
                    </div>
                `}
                ${(T_.length>0||y_.length>0||b0.length>0)&&W`
                    <div class="post-file-refs">
                        ${y_.map((C)=>{let t=(O_)=>{if(O_.preventDefault(),O_.stopPropagation(),N)N(C,_.chat_jid||null);else{let w_=document.getElementById("post-"+C);if(w_)w_.scrollIntoView({behavior:"smooth",block:"center"}),w_.classList.add("post-highlight"),setTimeout(()=>w_.classList.remove("post-highlight"),2000)}};return W`
                                <a href=${`#msg-${C}`} class="post-msg-pill-link" onClick=${t}>
                                    <${J$}
                                        prefix="post"
                                        label=${"msg:"+C}
                                        title=${"Message "+C}
                                        icon="message"
                                        onClick=${t}
                                    />
                                </a>
                            `})}
                        ${T_.map((C)=>{let t=C.split("/").pop()||C;return W`
                                <${J$}
                                    prefix="post"
                                    label=${t}
                                    title=${C}
                                    onClick=${()=>g?.(C)}
                                />
                            `})}
                        ${b0.map((C)=>W`
                            <${Fj}
                                key=${C.id}
                                attachment=${C}
                                onPreview=${M_}
                            />
                        `)}
                    </div>
                `}
                ${C_&&W`
                    <div 
                        ref=${E}
                        class="post-content"
                        dangerouslySetInnerHTML=${{__html:i_}}
                        onClick=${(C)=>{if(C.target.classList.contains("hashtag")){C.preventDefault(),C.stopPropagation();let t=C.target.dataset.hashtag;if(t)j?.(t)}else if(C.target.tagName==="IMG")C.preventDefault(),C.stopPropagation(),h(C.target.src)}}
                    />
                `}
                ${E_.length>0&&W`
                    <div ref=${I_} class="post-adaptive-cards" />
                `}
                ${$0.length>0&&W`
                    <div class="post-adaptive-card-submissions">
                        ${$0.map((C,t)=>{let O_=E6(C),w_=`${C.card_id}-${t}`;return W`
                                <div key=${w_} class="adaptive-card-submission-receipt">
                                    <div class="adaptive-card-submission-header">
                                        <span class="adaptive-card-submission-icon" aria-hidden="true">✓</span>
                                        <div class="adaptive-card-submission-title-wrap">
                                            <span class="adaptive-card-submission-title">Submitted</span>
                                            <span class="adaptive-card-submission-title-action">${O_.title}</span>
                                        </div>
                                    </div>
                                    ${O_.fields.length>0&&W`
                                        <div class="adaptive-card-submission-fields">
                                            ${O_.fields.map((t_)=>W`
                                                <span class="adaptive-card-submission-field" title=${`${t_.key}: ${t_.value}`}>
                                                    <span class="adaptive-card-submission-field-key">${t_.key}</span>
                                                    <span class="adaptive-card-submission-field-sep">:</span>
                                                    <span class="adaptive-card-submission-field-value">${t_.value}</span>
                                                </span>
                                            `)}
                                        </div>
                                    `}
                                    <div class="adaptive-card-submission-meta">
                                        Submitted ${B2(O_.submittedAt)}
                                    </div>
                                </div>
                            `})}
                    </div>
                `}
                ${b_.length>0&&W`
                    <div class="generated-widget-launches">
                        ${b_.map((C,t)=>W`
                            <${Jj}
                                key=${C.widget_id||C.id||`${_.id}-widget-${t}`}
                                block=${C}
                                post=${_}
                                onOpenWidget=${y}
                            />
                        `)}
                    </div>
                `}
                ${N0.length>0&&W`
                    ${N0.map((C,t)=>W`
                        <${S1} key=${t} annotations=${C} />
                    `)}
                `}
                ${S_.length>0&&W`
                    <div class="media-preview">
                        ${S_.map(({id:C,mimeType:t})=>{let w_=typeof t==="string"&&t.toLowerCase().startsWith("image/svg")?L$(C):D4(C);return W`
                                <img 
                                    key=${C} 
                                    src=${w_} 
                                    alt="Media" 
                                    loading="lazy"
                                    onClick=${(t_)=>g_(t_,C)}
                                />
                            `})}
                    </div>
                `}
                ${S_.length>0&&W`
                    ${S_.map(({annotations:C},t)=>W`
                        ${C&&W`<${S1} key=${t} annotations=${C} />`}
                    `)}
                `}
                ${F0.length>0&&W`
                    <div class="file-attachments">
                        ${F0.map((C)=>W`
                            <${Oj} key=${C} mediaId=${C} onPreview=${M_} />
                        `)}
                    </div>
                `}
                ${A0.length>0&&W`
                    <div class="resource-links">
                        ${A0.map((C,t)=>W`
                            <div key=${t}>
                                <${Hj} block=${C} />
                                <${S1} annotations=${C.annotations} />
                            </div>
                        `)}
                    </div>
                `}
                ${n_.length>0&&W`
                    <div class="resource-embeds">
                        ${n_.map((C,t)=>W`
                            <div key=${t}>
                                <${Dj} block=${C} />
                                <${S1} annotations=${C.annotations} />
                            </div>
                        `)}
                    </div>
                `}
                ${S.link_previews?.length>0&&W`
                    <div class="link-previews">
                        ${S.link_previews.map((C,t)=>W`
                            <${Aj} key=${t} preview=${C} />
                        `)}
                    </div>
                `}
            </div>
        </div>
        ${x&&W`<${y6} src=${x} onClose=${()=>h(null)} />`}
        ${l_&&W`
            <${A6}
                mediaId=${l_.mediaId}
                info=${l_.info}
                onClose=${()=>f_(null)}
            />
        `}
    `}function P6({posts:_,hasMore:$,onLoadMore:j,onPostClick:Z,onHashtagClick:N,onMessageRef:Y,onScrollToMessage:z,onFileRef:q,onOpenWidget:L,emptyMessage:Q,timelineRef:B,agents:X,user:H,onDeletePost:M,reverse:b=!0,removingPostIds:m,searchQuery:g}){let[y,x]=v(!1),h=P(null),E=typeof IntersectionObserver<"u",S=I(async()=>{if(!j||!$||y)return;x(!0);try{await j({preserveScroll:!0,preserveMode:"top"})}finally{x(!1)}},[$,y,j]),s=I((r)=>{let{scrollTop:N_,scrollHeight:__,clientHeight:X_}=r.target,G_=b?__-X_-N_:N_,L_=Math.max(300,X_);if(G_<L_)S()},[b,S]);R(()=>{if(!E)return;let r=h.current,N_=B?.current;if(!r||!N_)return;let __=300,X_=new IntersectionObserver((G_)=>{for(let L_ of G_){if(!L_.isIntersecting)continue;S()}},{root:N_,rootMargin:`${__}px 0px ${__}px 0px`,threshold:0});return X_.observe(r),()=>X_.disconnect()},[E,$,j,B,S]);let e=P(S);if(e.current=S,R(()=>{if(E)return;if(!B?.current)return;let{scrollTop:r,scrollHeight:N_,clientHeight:__}=B.current,X_=b?N_-__-r:r,G_=Math.max(300,__);if(X_<G_)e.current?.()},[E,_,$,b,B]),R(()=>{if(!B?.current)return;if(!$||y)return;let{scrollTop:r,scrollHeight:N_,clientHeight:__}=B.current,X_=b?N_-__-r:r,G_=Math.max(300,__);if(N_<=__+1||X_<G_)e.current?.()},[_,$,y,b,B]),!_)return W`<div class="loading"><div class="spinner"></div></div>`;if(_.length===0)return W`
            <div class="timeline" ref=${B}>
                <div class="timeline-content">
                    <div style="padding: var(--spacing-xl); text-align: center; color: var(--text-secondary)">
                        ${Q||"No messages yet. Start a conversation!"}
                    </div>
                </div>
            </div>
        `;let o=_.slice().sort((r,N_)=>r.id-N_.id),j_=(r)=>{let N_=r?.data?.thread_id;if(N_===null||N_===void 0||N_==="")return null;let __=Number(N_);return Number.isFinite(__)?__:null},l=new Map;for(let r=0;r<o.length;r+=1){let N_=o[r],__=Number(N_?.id),X_=j_(N_);if(X_!==null){let G_=l.get(X_)||{anchorIndex:-1,replyIndexes:[]};G_.replyIndexes.push(r),l.set(X_,G_)}else if(Number.isFinite(__)){let G_=l.get(__)||{anchorIndex:-1,replyIndexes:[]};G_.anchorIndex=r,l.set(__,G_)}}let Q_=new Map;for(let[r,N_]of l.entries()){let __=new Set;if(N_.anchorIndex>=0)__.add(N_.anchorIndex);for(let X_ of N_.replyIndexes)__.add(X_);Q_.set(r,Array.from(__).sort((X_,G_)=>X_-G_))}let a_=o.map((r,N_)=>{let __=j_(r);if(__===null)return{hasThreadPrev:!1,hasThreadNext:!1};let X_=Q_.get(__);if(!X_||X_.length===0)return{hasThreadPrev:!1,hasThreadNext:!1};let G_=X_.indexOf(N_);if(G_<0)return{hasThreadPrev:!1,hasThreadNext:!1};return{hasThreadPrev:G_>0,hasThreadNext:G_<X_.length-1}}),c_=W`<div class="timeline-sentinel" ref=${h}></div>`;return W`
        <div class="timeline ${b?"reverse":"normal"}" ref=${B} onScroll=${s}>
            <div class="timeline-content">
                ${b?c_:null}
                ${o.map((r,N_)=>{let __=Boolean(r.data?.thread_id&&r.data.thread_id!==r.id),X_=m?.has?.(r.id),G_=a_[N_]||{};return W`
                    <${k6}
                        key=${r.id}
                        post=${r}
                        isThreadReply=${__}
                        isThreadPrev=${G_.hasThreadPrev}
                        isThreadNext=${G_.hasThreadNext}
                        isRemoving=${X_}
                        highlightQuery=${g}
                        agentName=${Y6(r.data?.agent_id,X||{})}
                        agentAvatarUrl=${z6(r.data?.agent_id,X||{})}
                        userName=${H?.name||H?.user_name}
                        userAvatarUrl=${H?.avatar_url||H?.avatarUrl||H?.avatar}
                        userAvatarBackground=${H?.avatar_background||H?.avatarBackground}
                        onClick=${()=>Z?.(r)}
                        onHashtagClick=${N}
                        onMessageRef=${Y}
                        onScrollToMessage=${z}
                        onFileRef=${q}
                        onOpenWidget=${L}
                        onDelete=${M}
                    />
                `})}
                ${b?null:c_}
            </div>
        </div>
    `}class M6{extensions=new Map;register(_){this.extensions.set(_.id,_)}unregister(_){this.extensions.delete(_)}resolve(_){let $,j=-1/0;for(let Z of this.extensions.values()){if(Z.placement!=="tabs")continue;if(!Z.canHandle)continue;try{let N=Z.canHandle(_);if(N===!1||N===0)continue;let Y=N===!0?0:typeof N==="number"?N:0;if(Y>j)j=Y,$=Z}catch(N){console.warn(`[PaneRegistry] canHandle() error for "${Z.id}":`,N)}}return $}list(){return Array.from(this.extensions.values())}getDockPanes(){return Array.from(this.extensions.values()).filter((_)=>_.placement==="dock")}getTabPanes(){return Array.from(this.extensions.values()).filter((_)=>_.placement==="tabs")}get(_){return this.extensions.get(_)}get size(){return this.extensions.size}}var e_=new M6;var R1=null,h4=null;function Rj(){try{return`/static/dist/editor.bundle.js${new URL(import.meta.url).search||""}`}catch{return"/static/dist/editor.bundle.js"}}function I6(){if(h4)return Promise.resolve(h4);if(!R1)R1=import(Rj()).then((_)=>{return h4=_,_}).catch((_)=>{throw R1=null,_});return R1}class w6{container;context;real=null;disposed=!1;loadingEl;queuedDirtyCb=null;queuedSaveCb=null;queuedCloseCb=null;queuedViewStateCb=null;queuedViewState=null;constructor(_,$){this.container=_,this.context=$,this.loadingEl=document.createElement("div"),this.loadingEl.className="editor-pane",this.loadingEl.innerHTML=`
            <div class="editor-body">
                <div class="editor-status" style="padding: 2em; text-align: center; color: var(--text-secondary);">Loading editor…</div>
            </div>
        `,_.appendChild(this.loadingEl),this.load()}escapeHtml(_){let $=document.createElement("div");return $.textContent=_,$.innerHTML}async load(){try{let _=await I6();if(this.disposed)return;if(this.loadingEl.parentNode)this.loadingEl.remove();if(this.real=new _.StandaloneEditorInstance(this.container,this.context),this.queuedDirtyCb&&this.real.onDirtyChange)this.real.onDirtyChange(this.queuedDirtyCb);if(this.queuedSaveCb&&this.real.onSaveRequest)this.real.onSaveRequest(this.queuedSaveCb);if(this.queuedCloseCb&&this.real.onClose)this.real.onClose(this.queuedCloseCb);if(this.queuedViewStateCb&&typeof this.real.onViewStateChange==="function")this.real.onViewStateChange(this.queuedViewStateCb);if(this.queuedViewState&&typeof this.real.restoreViewState==="function")requestAnimationFrame(()=>this.real?.restoreViewState?.(this.queuedViewState))}catch(_){if(this.disposed)return;console.error("[editor-loader] Failed to load editor bundle:",_),this.loadingEl.querySelector(".editor-status").textContent="Failed to load editor. Check console for details."}}getContent(){return this.real?.getContent()}isDirty(){return this.real?.isDirty()||!1}setContent(_,$){if(this.real?.setContent)this.real.setContent(_,$)}focus(){this.real?.focus()}resize(){this.real?.resize?.()}dispose(){if(this.disposed)return;if(this.disposed=!0,this.real)this.real.dispose(),this.real=null;this.container.innerHTML="",this.queuedDirtyCb=null,this.queuedSaveCb=null,this.queuedCloseCb=null,this.queuedViewStateCb=null}onDirtyChange(_){if(this.queuedDirtyCb=_,this.real?.onDirtyChange)this.real.onDirtyChange(_)}onSaveRequest(_){if(this.queuedSaveCb=_,this.real?.onSaveRequest)this.real.onSaveRequest(_)}onClose(_){if(this.queuedCloseCb=_,this.real?.onClose)this.real.onClose(_)}onViewStateChange(_){this.queuedViewStateCb=_,this.real?.onViewStateChange?.(_)}restoreViewState(_){this.queuedViewState=_,this.real?.restoreViewState?.(_)}getPath(){return this.real?.getPath?.()??this.context.path??""}setPath(_){this.real?.setPath?.(_)}}var i4={id:"editor",label:"Editor",icon:"edit",capabilities:["edit"],placement:"tabs",canHandle(_){if(!_.path)return!1;if(_.mode!=="edit")return!1;return 1},mount(_,$){return new w6(_,$)}};function l4(){I6().catch(()=>{})}var d4="piclaw://terminal";var vj={yellow:"#9a6700",magenta:"#8250df",cyan:"#1b7c83",brightBlack:"#57606a",brightRed:"#cf222e",brightGreen:"#1a7f37",brightYellow:"#bf8700",brightBlue:"#0550ae",brightMagenta:"#6f42c1",brightCyan:"#0a7b83"},uj={yellow:"#d29922",magenta:"#bc8cff",cyan:"#39c5cf",brightBlack:"#8b949e",brightRed:"#ff7b72",brightGreen:"#7ee787",brightYellow:"#e3b341",brightBlue:"#79c0ff",brightMagenta:"#d2a8ff",brightCyan:"#56d4dd"},v1=null,n4=null;function mj(_){if(!_)return!1;return _.startsWith("data:application/wasm")||/(^|\/)ghostty-vt\.wasm(?:[?#].*)?$/.test(_)}async function gj(_){let $=globalThis.fetch?.bind(globalThis);if(!$)return await _();let j=new URL("/static/js/vendor/ghostty-vt.wasm",window.location.origin).href,Z=(N,Y)=>{let z=N instanceof Request?N.url:N instanceof URL?N.href:String(N);if(!mj(z))return $(N,Y);if(N instanceof Request)return $(new Request(j,N));return $(j,Y)};globalThis.fetch=Z;try{return await _()}finally{globalThis.fetch=$}}async function pj(){let $=await import(new URL("/static/js/vendor/ghostty-web.js",window.location.origin).href);if(!v1)v1=gj(()=>Promise.resolve($.init?.())).catch((j)=>{throw v1=null,j});return await v1,$}async function cj(){if(typeof document>"u"||!("fonts"in document)||!document.fonts)return;if(!n4)n4=Promise.allSettled([document.fonts.load('400 13px "FiraCode Nerd Font Mono"'),document.fonts.load('700 13px "FiraCode Nerd Font Mono"'),document.fonts.ready]).then(()=>{return}).catch(()=>{return});await n4}async function hj(){let _=await fetch("/terminal/session",{method:"GET",credentials:"same-origin"}),$=await _.json().catch(()=>({}));if(!_.ok)throw Error($?.error||`HTTP ${_.status}`);return $}function ij(_){return`${window.location.protocol==="https:"?"wss:":"ws:"}//${window.location.host}${_}`}function lj(){if(typeof window>"u"||typeof document>"u")return!1;let{documentElement:_,body:$}=document,j=_?.getAttribute?.("data-theme")?.toLowerCase?.()||"";if(j==="dark")return!0;if(j==="light")return!1;if(_?.classList?.contains("dark")||$?.classList?.contains("dark"))return!0;if(_?.classList?.contains("light")||$?.classList?.contains("light"))return!1;return Boolean(window.matchMedia?.("(prefers-color-scheme: dark)")?.matches)}function p$(_,$=""){if(typeof document>"u")return $;return getComputedStyle(document.documentElement).getPropertyValue(_)?.trim()||$}function nj(_,$){if(!_||!_.startsWith("#"))return _;let j=_.slice(1);if(j.length===3)return`#${j[0]}${j[0]}${j[1]}${j[1]}${j[2]}${j[2]}${$}`;if(j.length===6)return`#${j}${$}`;return _}function x6(){let _=lj(),$=_?uj:vj,j=p$("--bg-primary",_?"#000000":"#ffffff"),Z=p$("--text-primary",_?"#e7e9ea":"#0f1419"),N=p$("--text-secondary",_?"#71767b":"#536471"),Y=p$("--accent-color","#1d9bf0"),z=p$("--danger-color",_?"#ff7b72":"#cf222e"),q=p$("--success-color",_?"#7ee787":"#1a7f37"),L=p$("--bg-hover",_?"#1d1f23":"#e8ebed"),Q=p$("--border-color",_?"#2f3336":"#eff3f4"),B=p$("--accent-soft-strong",nj(Y,_?"47":"33"));return{background:j,foreground:Z,cursor:Y,cursorAccent:j,selectionBackground:B,selectionForeground:Z,black:L,red:z,green:q,yellow:$.yellow,blue:Y,magenta:$.magenta,cyan:$.cyan,white:Z,brightBlack:$.brightBlack,brightRed:$.brightRed,brightGreen:$.brightGreen,brightYellow:$.brightYellow,brightBlue:$.brightBlue,brightMagenta:$.brightMagenta,brightCyan:$.brightCyan,brightWhite:Q}}class s4{container;disposed=!1;termEl;bodyEl;statusEl;terminal=null;fitAddon=null;socket=null;themeObserver=null;themeChangeListener=null;mediaQuery=null;mediaQueryListener=null;resizeObserver=null;dockResizeListener=null;windowResizeListener=null;resizeFrame=0;lastAppliedThemeSignature=null;lastResizeSignature=null;constructor(_,$){this.container=_,this.termEl=document.createElement("div"),this.termEl.className="terminal-pane-content",this.termEl.setAttribute("tabindex","0"),this.statusEl=document.createElement("span"),this.statusEl.className="terminal-pane-status",this.statusEl.textContent="Loading terminal…",this.bodyEl=document.createElement("div"),this.bodyEl.className="terminal-pane-body",this.bodyEl.innerHTML='<div class="terminal-placeholder">Bootstrapping ghostty-web…</div>',this.termEl.append(this.bodyEl),_.appendChild(this.termEl),this.bootstrapGhostty()}setStatus(_){this.statusEl.textContent=_,this.termEl.dataset.connectionStatus=_,this.termEl.setAttribute("aria-label",`Terminal ${_}`)}getResizeSignature(){try{let _=this.container?.getBoundingClientRect?.(),$=this.bodyEl?.getBoundingClientRect?.(),j=Number.isFinite(_?.width)?_.width:0,Z=Number.isFinite(_?.height)?_.height:0,N=Number.isFinite($?.width)?$.width:0,Y=Number.isFinite($?.height)?$.height:0;return`${Math.round(j)}x${Math.round(Z)}:${Math.round(N)}x${Math.round(Y)}`}catch{return"0x0:0x0"}}syncHostLayout(){let _=this.bodyEl.querySelector(".terminal-live-host");if(!(_ instanceof HTMLElement))return;let $=_.firstElementChild;if($ instanceof HTMLElement)$.style.width="100%",$.style.height="100%",$.style.maxWidth="100%",$.style.minWidth="0",$.style.display="block";let j=_.querySelector("canvas");if(j instanceof HTMLElement)j.style.display="block",j.style.maxWidth="none"}scheduleResize(){if(this.disposed)return;let _=this.getResizeSignature();if(this.lastResizeSignature===_)return;if(this.resizeFrame)cancelAnimationFrame(this.resizeFrame);this.resizeFrame=requestAnimationFrame(()=>{this.resizeFrame=0,this.lastResizeSignature=this.getResizeSignature(),this.resize()})}async bootstrapGhostty(){try{let _=await pj();if(await cj(),this.disposed)return;this.bodyEl.innerHTML="";let $=document.createElement("div");$.className="terminal-live-host",this.bodyEl.appendChild($);let j=new _.Terminal({cols:120,rows:30,cursorBlink:!0,fontFamily:'FiraCode Nerd Font Mono, ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", monospace',fontSize:13,theme:x6()}),Z=null;if(typeof _.FitAddon==="function")Z=new _.FitAddon,j.loadAddon?.(Z);await j.open($),this.syncHostLayout(),j.loadFonts?.(),Z?.observeResize?.(),this.terminal=j,this.fitAddon=Z,this.installThemeSync(),this.installResizeSync(),this.scheduleResize(),await this.connectBackend()}catch(_){if(console.error("[terminal-pane] Failed to bootstrap ghostty-web:",_),this.disposed)return;this.bodyEl.innerHTML='<div class="terminal-placeholder">Terminal failed to load. Check vendored assets and backend wiring.</div>',this.setStatus("Load failed")}}applyTheme(){if(!this.terminal)return;let _=x6(),$=JSON.stringify(_),j=this.lastAppliedThemeSignature!==null&&this.lastAppliedThemeSignature!==$;try{this.termEl.style.backgroundColor=_.background,this.bodyEl.style.backgroundColor=_.background;let Z=this.bodyEl.querySelector(".terminal-live-host");if(Z instanceof HTMLElement)Z.style.backgroundColor=_.background,Z.style.color=_.foreground;let N=this.bodyEl.querySelector("canvas");if(N instanceof HTMLElement)N.style.backgroundColor=_.background,N.style.color=_.foreground}catch{}try{if(this.terminal.options)this.terminal.options.theme=_}catch{}try{if(j&&this.terminal.reset)this.terminal.reset()}catch{}try{this.terminal.renderer?.setTheme?.(_),this.terminal.renderer?.clear?.()}catch{}try{this.terminal.loadFonts?.()}catch{}try{this.terminal.renderer?.remeasureFont?.()}catch{}try{if(this.terminal.wasmTerm&&this.terminal.renderer?.render)this.terminal.renderer.render(this.terminal.wasmTerm,!0,this.terminal.viewportY||0,this.terminal),this.terminal.renderer.render(this.terminal.wasmTerm,!1,this.terminal.viewportY||0,this.terminal)}catch{}try{this.resize()}catch{}try{if(j&&this.socket?.readyState===WebSocket.OPEN)this.socket.send(JSON.stringify({type:"input",data:"\f"}))}catch{}try{this.terminal.refresh?.()}catch{}this.lastAppliedThemeSignature=$}installThemeSync(){if(typeof window>"u"||typeof document>"u")return;let _=()=>requestAnimationFrame(()=>this.applyTheme());_();let $=()=>_();window.addEventListener("piclaw-theme-change",$),this.themeChangeListener=$;let j=window.matchMedia?.("(prefers-color-scheme: dark)"),Z=()=>_();if(j?.addEventListener)j.addEventListener("change",Z);else if(j?.addListener)j.addListener(Z);this.mediaQuery=j,this.mediaQueryListener=Z;let N=typeof MutationObserver<"u"?new MutationObserver(()=>_()):null;if(N?.observe(document.documentElement,{attributes:!0,attributeFilter:["class","data-theme","style"]}),document.body)N?.observe(document.body,{attributes:!0,attributeFilter:["class","data-theme"]});this.themeObserver=N}installResizeSync(){if(typeof window>"u")return;let _=()=>this.scheduleResize(),$=()=>this.scheduleResize();if(window.addEventListener("dock-resize",_),window.addEventListener("resize",$),this.dockResizeListener=_,this.windowResizeListener=$,typeof ResizeObserver<"u"){let j=new ResizeObserver(()=>{if(this.disposed)return;this.scheduleResize()});j.observe(this.container),this.resizeObserver=j}}async connectBackend(){let _=this.terminal;if(!_)return;try{let $=await hj();if(this.disposed)return;if(!$?.enabled){_.write?.(`Terminal backend unavailable: ${$?.error||"disabled"}\r
`),this.setStatus("Unavailable");return}let j=new WebSocket(ij($.ws_path||"/terminal/ws"));this.socket=j,this.setStatus("Connecting…"),_.onData?.((Z)=>{if(j.readyState===WebSocket.OPEN)j.send(JSON.stringify({type:"input",data:Z}))}),_.onResize?.(({cols:Z,rows:N})=>{if(j.readyState===WebSocket.OPEN)j.send(JSON.stringify({type:"resize",cols:Z,rows:N}))}),j.addEventListener("open",()=>{if(this.disposed)return;this.setStatus("Connected"),this.scheduleResize()}),j.addEventListener("message",(Z)=>{if(this.disposed)return;let N=null;try{N=JSON.parse(String(Z.data))}catch{N={type:"output",data:String(Z.data)}}if(N?.type==="output"&&typeof N.data==="string"){_.write?.(N.data);return}if(N?.type==="exit")_.write?.(`\r
[terminal exited]\r
`),this.setStatus("Exited")}),j.addEventListener("close",()=>{if(this.disposed)return;this.setStatus("Disconnected")}),j.addEventListener("error",()=>{if(this.disposed)return;this.setStatus("Connection error")})}catch($){_.write?.(`Terminal backend unavailable: ${$ instanceof Error?$.message:String($)}\r
`),this.setStatus("Unavailable")}}sendResize(){if(!this.socket||this.socket.readyState!==WebSocket.OPEN||!this.fitAddon?.proposeDimensions)return;let _=this.fitAddon.proposeDimensions();if(!_)return;this.socket.send(JSON.stringify({type:"resize",cols:_.cols,rows:_.rows}))}getContent(){return}isDirty(){return!1}focus(){if(this.terminal?.focus){this.terminal.focus();return}this.termEl?.focus()}resize(){this.syncHostLayout();try{this.terminal?.renderer?.remeasureFont?.()}catch{}try{this.fitAddon?.fit?.()}catch{}try{this.terminal?.refresh?.()}catch{}this.syncHostLayout(),this.sendResize()}dispose(){if(this.disposed)return;this.disposed=!0;try{if(this.resizeFrame)cancelAnimationFrame(this.resizeFrame),this.resizeFrame=0}catch{}try{if(this.themeChangeListener)window.removeEventListener("piclaw-theme-change",this.themeChangeListener)}catch{}try{if(this.mediaQuery&&this.mediaQueryListener){if(this.mediaQuery.removeEventListener)this.mediaQuery.removeEventListener("change",this.mediaQueryListener);else if(this.mediaQuery.removeListener)this.mediaQuery.removeListener(this.mediaQueryListener)}}catch{}try{if(this.dockResizeListener)window.removeEventListener("dock-resize",this.dockResizeListener);if(this.windowResizeListener)window.removeEventListener("resize",this.windowResizeListener)}catch{}try{this.themeObserver?.disconnect?.()}catch{}try{this.resizeObserver?.disconnect?.()}catch{}try{this.socket?.close?.()}catch{}try{this.fitAddon?.dispose?.()}catch{}try{this.terminal?.dispose?.()}catch{}this.termEl?.remove()}}var o4={id:"terminal",label:"Terminal",icon:"terminal",capabilities:["terminal"],placement:"dock",mount(_,$){return new s4(_,$)}},r4={id:"terminal-tab",label:"Terminal",icon:"terminal",capabilities:["terminal"],placement:"tabs",canHandle(_){return _?.path==="piclaw://terminal"?1e4:!1},mount(_,$){return new s4(_,$)}};function t$(_){return String(_||"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}function dj(_,$){let j=String(_||"").trim();if(!j)return j;if(/^[a-zA-Z][a-zA-Z\d+.-]*:/.test(j)||j.startsWith("#")||j.startsWith("data:")||j.startsWith("blob:"))return j;let Z=j.match(/^([^?#]*)(\?[^#]*)?(#.*)?$/),N=Z?.[1]||j,Y=Z?.[2]||"",z=Z?.[3]||"",q=String($||"").split("/").slice(0,-1).join("/"),Q=N.startsWith("/")?N:`${q?`${q}/`:""}${N}`,B=[];for(let H of Q.split("/")){if(!H||H===".")continue;if(H===".."){if(B.length>0)B.pop();continue}B.push(H)}let X=B.join("/");return`${D1(X)}${Y}${z}`}function N1(_){return _?.preview||null}function sj(_){let $=String(_||""),j=Math.max($.lastIndexOf("/"),$.lastIndexOf("\\")),Z=j>=0?$.slice(j+1):$,N=Z.lastIndexOf(".");if(N<=0||N===Z.length-1)return"none";return Z.slice(N+1)}function oj(_){if(!_)return"unknown";if(_.kind==="image")return"image";if(_.kind==="text")return _.content_type==="text/markdown"?"markdown":"text";if(_.kind==="binary")return"binary";return String(_.kind||"unknown")}function rj(_,$){let j=$?.path||_?.path||"",Z=[];if($?.content_type)Z.push(`<span><strong>type:</strong> ${t$($.content_type)}</span>`);if(typeof $?.size==="number")Z.push(`<span><strong>size:</strong> ${t$(B$($.size))}</span>`);if($?.mtime)Z.push(`<span><strong>modified:</strong> ${t$(B2($.mtime))}</span>`);if(Z.push(`<span><strong>kind:</strong> ${t$(oj($))}</span>`),Z.push(`<span><strong>extension:</strong> ${t$(sj(j))}</span>`),j)Z.push(`<span><strong>path:</strong> ${t$(j)}</span>`);if($?.truncated)Z.push("<span><strong>content:</strong> truncated</span>");return`<div class="workspace-preview-meta workspace-preview-meta-inline">${Z.join("")}</div>`}function aj(_){let $=N1(_);if(!$)return'<div class="workspace-preview-text">No preview available.</div>';let j=rj(_,$);if($.kind==="image"){let Z=$.url||($.path?D1($.path):"");return`${j}
            <div class="workspace-preview-image">
                <img src="${t$(Z)}" alt="preview" />
            </div>
        `}if($.kind==="text"){if($.content_type==="text/markdown"){let Z=$$($.text||"",null,{rewriteImageSrc:(N)=>dj(N,$.path||_?.path)});return`${j}<div class="workspace-preview-text">${Z}</div>`}return`${j}<pre class="workspace-preview-text"><code>${t$($.text||"")}</code></pre>`}if($.kind==="binary")return`${j}<div class="workspace-preview-text">Binary file — download to view.</div>`;return`${j}<div class="workspace-preview-text">No preview available.</div>`}class a4{constructor(_,$){this.container=_,this.context=$,this.disposed=!1,this.host=document.createElement("div"),this.host.className="workspace-preview-render-host",this.host.tabIndex=0,this.container.appendChild(this.host),this.render()}render(){if(this.disposed)return;this.host.innerHTML=aj(this.context)}getContent(){let _=N1(this.context);return typeof _?.text==="string"?_.text:void 0}isDirty(){return!1}setContent(_,$){let j=N1(this.context);if(j&&j.kind==="text"){if(j.text=_,$!==void 0)j.mtime=$}if(this.context.content=_,$!==void 0)this.context.mtime=$;this.render()}focus(){this.host?.focus?.()}dispose(){if(this.disposed)return;this.disposed=!0,this.host?.remove(),this.container.innerHTML=""}}var t4={id:"workspace-markdown-preview",label:"Workspace Markdown Preview",icon:"preview",capabilities:["preview","readonly"],placement:"tabs",canHandle(_){let $=N1(_);if(_?.mode!=="view")return!1;if(!$||$.kind!=="text")return!1;return $.content_type==="text/markdown"?20:!1},mount(_,$){return new a4(_,$)}},e4={id:"workspace-preview-default",label:"Workspace Preview",icon:"preview",capabilities:["preview","readonly"],placement:"tabs",canHandle(_){if(_?.mode!=="view")return!1;return N1(_)||_?.path?1:!1},mount(_,$){return new a4(_,$)}};var tj=new Set([".docx",".doc",".odt",".rtf",".xlsx",".xls",".ods",".csv",".pptx",".ppt",".odp"]),ej={".docx":"Word Document",".doc":"Word (Legacy)",".odt":"OpenDocument Text",".rtf":"Rich Text",".xlsx":"Excel Spreadsheet",".xls":"Excel (Legacy)",".ods":"OpenDocument Spreadsheet",".csv":"CSV Data",".pptx":"PowerPoint",".ppt":"PowerPoint (Legacy)",".odp":"OpenDocument Presentation"},_Z={".docx":"\uD83D\uDCDD",".doc":"\uD83D\uDCDD",".odt":"\uD83D\uDCDD",".rtf":"\uD83D\uDCDD",".xlsx":"\uD83D\uDCCA",".xls":"\uD83D\uDCCA",".ods":"\uD83D\uDCCA",".csv":"\uD83D\uDCCA",".pptx":"\uD83D\uDCFD️",".ppt":"\uD83D\uDCFD️",".odp":"\uD83D\uDCFD️"};function C6(_){if(!_)return"";let $=_.lastIndexOf(".");if($<0)return"";return _.slice($).toLowerCase()}function T6(_){return _.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}class f6{container;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Z=j.split("/").pop()||"document",N=C6(j),Y=_Z[N]||"\uD83D\uDCC4",z=ej[N]||"Office Document",q=document.createElement("div");q.style.cssText="width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:var(--bg-primary,#1a1a1a);",q.innerHTML=`
            <div style="text-align:center;max-width:360px;padding:24px;">
                <div style="font-size:56px;margin-bottom:12px;">${Y}</div>
                <div style="font-size:14px;font-weight:600;color:var(--text-primary,#e0e0e0);margin-bottom:4px;word-break:break-word;">${T6(Z)}</div>
                <div style="font-size:11px;color:var(--text-secondary,#888);margin-bottom:20px;">${T6(z)}</div>
                <button id="ov-open-tab" style="padding:8px 20px;background:var(--accent-color,#1d9bf0);color:var(--accent-contrast-text,#fff);
                    border:none;border-radius:5px;font-size:13px;font-weight:500;cursor:pointer;
                    transition:background 0.15s;"
                    onmouseenter="this.style.background='var(--accent-hover,#1a8cd8)'"
                    onmouseleave="this.style.background='var(--accent-color,#1d9bf0)'">
                    Open in Tab
                </button>
            </div>
        `,_.appendChild(q);let L=q.querySelector("#ov-open-tab");if(L)L.addEventListener("click",()=>{let Q=new CustomEvent("office-viewer:open-tab",{bubbles:!0,detail:{path:j}});_.dispatchEvent(Q)})}getContent(){return}isDirty(){return!1}focus(){}resize(){}dispose(){if(this.disposed)return;this.disposed=!0,this.container.innerHTML=""}}class b6{container;iframe=null;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Z=j.split("/").pop()||"document",N=`/workspace/raw?path=${encodeURIComponent(j)}`,Y=`/office-viewer/?url=${encodeURIComponent(N)}&name=${encodeURIComponent(Z)}`;this.iframe=document.createElement("iframe"),this.iframe.src=Y,this.iframe.style.cssText="width:100%;height:100%;border:none;background:#1e1e1e;",_.appendChild(this.iframe)}getContent(){return}isDirty(){return!1}focus(){this.iframe?.focus()}resize(){}dispose(){if(this.disposed)return;if(this.disposed=!0,this.iframe)this.iframe.src="about:blank",this.iframe=null;this.container.innerHTML=""}}var _3={id:"office-viewer",label:"Office Viewer",icon:"file-text",capabilities:["readonly","preview"],placement:"tabs",canHandle(_){let $=C6(_?.path);if(!$||!tj.has($))return!1;return 50},mount(_,$){if($?.mode==="view")return new f6(_,$);return new b6(_,$)}};var $Z=/\.(csv|tsv)$/i;function S6(_){return _.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}class R6{container;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Z=j.split("/").pop()||"table.csv",N=j.toLowerCase().endsWith(".tsv")?"TSV Table":"CSV Table",Y=document.createElement("div");Y.style.cssText="width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:var(--bg-primary,#1a1a1a);",Y.innerHTML=`
            <div style="text-align:center;max-width:360px;padding:24px;">
                <div style="font-size:56px;margin-bottom:12px;">\uD83D\uDCCA</div>
                <div style="font-size:14px;font-weight:600;color:var(--text-primary,#e0e0e0);margin-bottom:4px;word-break:break-word;">${S6(Z)}</div>
                <div style="font-size:11px;color:var(--text-secondary,#888);margin-bottom:20px;">${S6(N)}</div>
                <button id="csv-open-tab" style="padding:8px 20px;background:var(--accent-color,#1d9bf0);color:var(--accent-contrast-text,#fff);
                    border:none;border-radius:5px;font-size:13px;font-weight:500;cursor:pointer;
                    transition:background 0.15s;"
                    onmouseenter="this.style.background='var(--accent-hover,#1a8cd8)'"
                    onmouseleave="this.style.background='var(--accent-color,#1d9bf0)'">
                    Open in Tab
                </button>
            </div>
        `,_.appendChild(Y);let z=Y.querySelector("#csv-open-tab");if(z)z.addEventListener("click",()=>{let q=new CustomEvent("csv-viewer:open-tab",{bubbles:!0,detail:{path:j}});_.dispatchEvent(q)})}getContent(){return}isDirty(){return!1}focus(){}resize(){}dispose(){if(this.disposed)return;this.disposed=!0,this.container.innerHTML=""}}class v6{container;iframe=null;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Z=`/csv-viewer/?path=${encodeURIComponent(j)}`;this.iframe=document.createElement("iframe"),this.iframe.src=Z,this.iframe.style.cssText="width:100%;height:100%;border:none;background:var(--bg-primary,#000);",_.appendChild(this.iframe)}getContent(){return}isDirty(){return!1}focus(){this.iframe?.focus()}resize(){}dispose(){if(this.disposed)return;if(this.disposed=!0,this.iframe)this.iframe.src="about:blank",this.iframe=null;this.container.innerHTML=""}}var $3={id:"csv-viewer",label:"CSV Viewer",icon:"table",capabilities:["readonly","preview"],placement:"tabs",canHandle(_){let $=_?.path||"";if(!$Z.test($))return!1;return 55},mount(_,$){if($?.mode==="view")return new R6(_,$);return new v6(_,$)}};var jZ=/\.pdf$/i;function ZZ(_){return _.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}class u6{container;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Z=j.split("/").pop()||"document.pdf",N=document.createElement("div");N.style.cssText="width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:var(--bg-primary,#1a1a1a);",N.innerHTML=`
            <div style="text-align:center;max-width:360px;padding:24px;">
                <div style="font-size:56px;margin-bottom:12px;">\uD83D\uDCC4</div>
                <div style="font-size:14px;font-weight:600;color:var(--text-primary,#e0e0e0);margin-bottom:4px;word-break:break-word;">${ZZ(Z)}</div>
                <div style="font-size:11px;color:var(--text-secondary,#888);margin-bottom:20px;">PDF Document</div>
                <button id="pdf-open-tab" style="padding:8px 20px;background:var(--accent-color,#1d9bf0);color:var(--accent-contrast-text,#fff);
                    border:none;border-radius:5px;font-size:13px;font-weight:500;cursor:pointer;
                    transition:background 0.15s;"
                    onmouseenter="this.style.background='var(--accent-hover,#1a8cd8)'"
                    onmouseleave="this.style.background='var(--accent-color,#1d9bf0)'">
                    Open in Tab
                </button>
            </div>
        `,_.appendChild(N);let Y=N.querySelector("#pdf-open-tab");if(Y)Y.addEventListener("click",()=>{let z=new CustomEvent("pdf-viewer:open-tab",{bubbles:!0,detail:{path:j}});_.dispatchEvent(z)})}getContent(){return}isDirty(){return!1}focus(){}resize(){}dispose(){if(this.disposed)return;this.disposed=!0,this.container.innerHTML=""}}class m6{container;iframe=null;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Z=`/pdf-viewer/?path=${encodeURIComponent(j)}`;this.iframe=document.createElement("iframe"),this.iframe.src=Z,this.iframe.style.cssText="width:100%;height:100%;border:none;background:#1e1e1e;",_.appendChild(this.iframe)}getContent(){return}isDirty(){return!1}focus(){this.iframe?.focus()}resize(){}dispose(){if(this.disposed)return;if(this.disposed=!0,this.iframe)this.iframe.src="about:blank",this.iframe=null;this.container.innerHTML=""}}var j3={id:"pdf-viewer",label:"PDF Viewer",icon:"file-text",capabilities:["readonly","preview"],placement:"tabs",canHandle(_){let $=_?.path||"";if(!jZ.test($))return!1;return 52},mount(_,$){if($?.mode==="view")return new u6(_,$);return new m6(_,$)}};var NZ=/\.(png|jpe?g|gif|webp|bmp|ico|svg)$/i;function Z3(_){return _.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}class g6{container;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Z=j.split("/").pop()||"image",N=`/workspace/raw?path=${encodeURIComponent(j)}`,Y=document.createElement("div");Y.style.cssText="width:100%;height:100%;display:flex;flex-direction:column;background:var(--bg-primary,#1a1a1a);",Y.innerHTML=`
            <div style="flex:1;min-height:0;display:flex;align-items:center;justify-content:center;overflow:hidden;padding:16px;">
                <img src="${Z3(N)}" alt="${Z3(Z)}" style="max-width:100%;max-height:100%;object-fit:contain;border-radius:4px;" />
            </div>
            <div style="display:flex;align-items:center;justify-content:space-between;padding:8px 16px;border-top:1px solid var(--border-color,#333);flex-shrink:0;">
                <div style="font-size:12px;color:var(--text-secondary,#888);overflow:hidden;text-overflow:ellipsis;white-space:nowrap;min-width:0;">${Z3(Z)}</div>
                <button id="img-open-tab" style="padding:5px 14px;background:var(--accent-color,#1d9bf0);color:var(--accent-contrast-text,#fff);
                    border:none;border-radius:4px;font-size:12px;font-weight:500;cursor:pointer;flex-shrink:0;
                    transition:background 0.15s;"
                    onmouseenter="this.style.background='var(--accent-hover,#1a8cd8)'"
                    onmouseleave="this.style.background='var(--accent-color,#1d9bf0)'">
                    Open in Tab
                </button>
            </div>
        `,_.appendChild(Y);let z=Y.querySelector("#img-open-tab");if(z)z.addEventListener("click",()=>{let q=new CustomEvent("image-viewer:open-tab",{bubbles:!0,detail:{path:j}});_.dispatchEvent(q)})}getContent(){return}isDirty(){return!1}focus(){}resize(){}dispose(){if(this.disposed)return;this.disposed=!0,this.container.innerHTML=""}}class p6{container;iframe=null;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Z=`/image-viewer/?path=${encodeURIComponent(j)}`;this.iframe=document.createElement("iframe"),this.iframe.src=Z,this.iframe.style.cssText="width:100%;height:100%;border:none;background:var(--bg-primary,#000);",_.appendChild(this.iframe)}getContent(){return}isDirty(){return!1}focus(){this.iframe?.focus()}resize(){}dispose(){if(this.disposed)return;if(this.disposed=!0,this.iframe)this.iframe.src="about:blank",this.iframe=null;this.container.innerHTML=""}}var N3={id:"image-viewer",label:"Image Viewer",icon:"image",capabilities:["readonly","preview"],placement:"tabs",canHandle(_){let $=_?.path||"";if(!NZ.test($))return!1;return 48},mount(_,$){if($?.mode==="view")return new g6(_,$);return new p6(_,$)}};var YZ=/\.(mp4|m4v|mov|webm|ogv)$/i;function zZ(_){return _.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}class c6{container;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Z=j.split("/").pop()||"video.mp4",N=document.createElement("div");N.style.cssText="width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:var(--bg-primary,#1a1a1a);",N.innerHTML=`
            <div style="text-align:center;max-width:360px;padding:24px;">
                <div style="font-size:56px;margin-bottom:12px;">\uD83C\uDFAC</div>
                <div style="font-size:14px;font-weight:600;color:var(--text-primary,#e0e0e0);margin-bottom:4px;word-break:break-word;">${zZ(Z)}</div>
                <div style="font-size:11px;color:var(--text-secondary,#888);margin-bottom:20px;">Video File</div>
                <button id="video-open-tab" style="padding:8px 20px;background:var(--accent-color,#1d9bf0);color:var(--accent-contrast-text,#fff);
                    border:none;border-radius:5px;font-size:13px;font-weight:500;cursor:pointer;
                    transition:background 0.15s;"
                    onmouseenter="this.style.background='var(--accent-hover,#1a8cd8)'"
                    onmouseleave="this.style.background='var(--accent-color,#1d9bf0)'">
                    Open in Tab
                </button>
            </div>
        `,_.appendChild(N);let Y=N.querySelector("#video-open-tab");if(Y)Y.addEventListener("click",()=>{let z=new CustomEvent("video-viewer:open-tab",{bubbles:!0,detail:{path:j}});_.dispatchEvent(z)})}getContent(){return}isDirty(){return!1}focus(){}resize(){}dispose(){if(this.disposed)return;this.disposed=!0,this.container.innerHTML=""}}class h6{container;iframe=null;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Z=`/video-viewer/?path=${encodeURIComponent(j)}`;this.iframe=document.createElement("iframe"),this.iframe.src=Z,this.iframe.style.cssText="width:100%;height:100%;border:none;background:#111;",_.appendChild(this.iframe)}getContent(){return}isDirty(){return!1}focus(){this.iframe?.focus()}resize(){}dispose(){if(this.disposed)return;if(this.disposed=!0,this.iframe)this.iframe.src="about:blank",this.iframe=null;this.container.innerHTML=""}}var Y3={id:"video-viewer",label:"Video Viewer",icon:"play-circle",capabilities:["readonly","preview"],placement:"tabs",canHandle(_){let $=_?.path||"";if(!YZ.test($))return!1;return 54},mount(_,$){if($?.mode==="view")return new c6(_,$);return new h6(_,$)}};function KZ(_){if(!_)return!1;let $=_.toLowerCase();return $.endsWith(".drawio")||$.endsWith(".drawio.xml")||$.endsWith(".drawio.svg")||$.endsWith(".drawio.png")}function GZ(_){return _.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}var z3='<mxfile host="app.diagrams.net"><diagram id="page-1" name="Page-1"><mxGraphModel dx="1260" dy="720" grid="1" gridSize="10" guides="1" tooltips="1" connect="1" arrows="1" fold="1" page="1" pageScale="1" pageWidth="850" pageHeight="1100" math="0" shadow="0"><root><mxCell id="0"/><mxCell id="1" parent="0"/></root></mxGraphModel></diagram></mxfile>';function i6(_){let $=String(_||"").trim();return $?$:z3}function VZ(_){let $=String(_||"").toLowerCase();if($.endsWith(".drawio.svg")||$.endsWith(".svg"))return"xmlsvg";if($.endsWith(".drawio.png")||$.endsWith(".png"))return"xmlpng";return"xml"}function qZ(_){let $="",j=32768;for(let Z=0;Z<_.length;Z+=j)$+=String.fromCharCode(..._.subarray(Z,Z+j));return btoa($)}function QZ(_,$="*"){try{let j=(Y)=>{let z=_.parent||_.opener;if(!z)return!1;return z.postMessage(JSON.stringify({event:"workspace-export",...Y}),$),!0},Z=_.EditorUi;if(Z?.prototype&&!Z.prototype.__piclawWorkspaceSavePatched){let Y=Z.prototype.saveData;Z.prototype.saveData=function(z,q,L,Q,B,X){try{if(z&&L!=null&&j({filename:z,format:q,data:L,mimeType:Q,base64Encoded:Boolean(B),defaultMode:X}))return}catch(H){console.warn("[drawio-pane] saveData intercept failed, falling back to native save",H)}return Y.apply(this,arguments)},Z.prototype.__piclawWorkspaceSavePatched=!0}let N=_.App;if(N?.prototype&&!N.prototype.__piclawExportPatched){let Y=N.prototype.exportFile;N.prototype.exportFile=function(z,q,L,Q,B,X){try{if(q&&j({filename:q,data:z,mimeType:L,base64Encoded:Boolean(Q),mode:B,folderId:X}))return}catch(H){console.warn("[drawio-pane] export intercept failed, falling back to native export",H)}return Y.apply(this,arguments)},N.prototype.__piclawExportPatched=!0}return Boolean(Z?.prototype&&Z.prototype.__piclawWorkspaceSavePatched||N?.prototype&&N.prototype.__piclawExportPatched)}catch{return!1}}async function l6(_,$){let j=new Uint8Array(await _.arrayBuffer());return`data:${_.headers.get("Content-Type")||$};base64,${qZ(j)}`}class n6{container;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Z=j.split("/").pop()||"diagram.drawio",N=document.createElement("div");N.style.cssText="width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:var(--bg-primary,#1a1a1a);",N.innerHTML=`
            <div style="text-align:center;max-width:360px;padding:24px;">
                <div style="font-size:56px;margin-bottom:12px;">\uD83D\uDCD0</div>
                <div style="font-size:14px;font-weight:600;color:var(--text-primary,#e0e0e0);margin-bottom:4px;word-break:break-word;">${GZ(Z)}</div>
                <div style="font-size:11px;color:var(--text-secondary,#888);margin-bottom:20px;">Draw.io Diagram</div>
                <button id="drawio-open-tab" style="padding:8px 20px;background:var(--accent-color,#1d9bf0);color:var(--accent-contrast-text,#fff);
                    border:none;border-radius:5px;font-size:13px;font-weight:500;cursor:pointer;
                    transition:background 0.15s;"
                    onmouseenter="this.style.background='var(--accent-hover,#1a8cd8)'"
                    onmouseleave="this.style.background='var(--accent-color,#1d9bf0)'">
                    Edit in Tab
                </button>
            </div>
        `,_.appendChild(N);let Y=N.querySelector("#drawio-open-tab");if(Y)Y.addEventListener("click",()=>{let z=new CustomEvent("drawio:open-tab",{bubbles:!0,detail:{path:j}});_.dispatchEvent(z)})}getContent(){return}isDirty(){return!1}focus(){}resize(){}dispose(){if(this.disposed)return;this.disposed=!0,this.container.innerHTML=""}}class d6{container;iframe=null;overlay=null;disposed=!1;filePath;fileName;format;xmlData="";fileLoaded=!1;editorReady=!1;loadSent=!1;saveChain=Promise.resolve();onMessageBound;constructor(_,$){this.container=_,this.filePath=$.path||"",this.fileName=this.filePath.split("/").pop()||"diagram.drawio",this.format=VZ(this.filePath),this.onMessageBound=this.onMessage.bind(this);let j=document.createElement("div");j.style.cssText="position:relative;width:100%;height:100%;background:#1e1e1e;",this.overlay=document.createElement("div"),this.overlay.style.cssText="position:absolute;inset:0;display:flex;align-items:center;justify-content:center;color:#999;font:14px system-ui,sans-serif;z-index:1;pointer-events:none;",this.overlay.textContent="Loading draw.io editor…",j.appendChild(this.overlay);let N=`/drawio/index.html?embed=1&proto=json&spin=1&modified=0&noSaveBtn=1&noExitBtn=1&saveAndExit=0&ui=dark&dark=${window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?"1":"0"}`;this.iframe=document.createElement("iframe"),this.iframe.src=N,this.iframe.style.cssText="width:100%;height:100%;border:none;background:#1e1e1e;position:relative;z-index:0;",this.iframe.addEventListener("load",()=>{let Y=()=>{if(!this.iframe?.contentWindow||this.disposed)return;if(QZ(this.iframe.contentWindow))return;setTimeout(Y,250)};Y()}),j.appendChild(this.iframe),_.appendChild(j),window.addEventListener("message",this.onMessageBound),this.loadFile()}async loadFile(){if(!this.filePath){this.xmlData=z3,this.fileLoaded=!0,this.trySendLoad();return}try{let _=await fetch(`/workspace/raw?path=${encodeURIComponent(this.filePath)}`);if(_.ok)if(this.format==="xmlsvg")this.xmlData=await l6(_,"image/svg+xml");else if(this.format==="xmlpng")this.xmlData=await l6(_,"image/png");else this.xmlData=i6(await _.text());else if(_.status===404)this.xmlData=z3;else throw Error(`HTTP ${_.status}`);this.fileLoaded=!0,this.trySendLoad()}catch(_){if(this.overlay)this.overlay.textContent=`Failed to load: ${_ instanceof Error?_.message:String(_)}`}}trySendLoad(){if(this.disposed||this.loadSent||!this.editorReady||!this.fileLoaded||!this.iframe?.contentWindow)return;if(this.loadSent=!0,this.iframe.contentWindow.postMessage(JSON.stringify({action:"load",xml:this.format==="xml"?i6(this.xmlData):this.xmlData,autosave:1,saveAndExit:"0",noSaveBtn:"1",noExitBtn:"1",title:this.fileName}),"*"),this.overlay)this.overlay.style.display="none"}queueSave(_,$){if(!this.filePath)return;this.saveChain=this.saveChain.then(async()=>{let j=await fetch("/drawio/save",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({path:this.filePath,format:_.format||this.format,xml:_.xml,data:_.data,mimeType:_.mimeType,filename:_.filename,base64Encoded:_.base64Encoded})});if(!j.ok)throw Error(`HTTP ${j.status}`);if($&&this.iframe?.contentWindow)this.iframe.contentWindow.postMessage(JSON.stringify({action:"status",message:"Saved",modified:!1}),"*")}).catch((j)=>{if(console.error("[drawio-pane] save failed:",j),this.overlay)this.overlay.style.display="flex",this.overlay.textContent=`Save failed: ${j instanceof Error?j.message:String(j)}`})}onMessage(_){if(this.disposed||_.source!==this.iframe?.contentWindow)return;let $;try{$=typeof _.data==="string"?JSON.parse(_.data):_.data}catch{return}switch($?.event){case"init":this.editorReady=!0,this.trySendLoad();break;case"autosave":if(this.format==="xml"){if(typeof $.xml==="string")this.queueSave({xml:$.xml,format:"xml"},!1)}else if(typeof $.xml==="string")this.xmlData=$.xml;break;case"save":if(this.format==="xml"){if(typeof $.xml==="string")this.queueSave({xml:$.xml,format:"xml"},!0)}else if(typeof $.xml==="string"&&this.iframe?.contentWindow)this.xmlData=$.xml,this.iframe.contentWindow.postMessage(JSON.stringify({action:"export",format:this.format,xml:$.xml,spinKey:"export"}),"*");break;case"export":if(typeof $.data==="string")this.queueSave({data:$.data,format:this.format,xml:typeof $.xml==="string"?$.xml:void 0},!0);break;case"workspace-export":if(typeof $.data==="string")this.queueSave({data:$.data,xml:typeof $.xml==="string"?$.xml:void 0,mimeType:typeof $.mimeType==="string"?$.mimeType:void 0,filename:typeof $.filename==="string"?$.filename:void 0,base64Encoded:Boolean($.base64Encoded),format:this.format},!0);break;case"exit":default:break}}getContent(){return}isDirty(){return!1}focus(){this.iframe?.focus()}resize(){}dispose(){if(this.disposed)return;if(this.disposed=!0,window.removeEventListener("message",this.onMessageBound),this.iframe)this.iframe.src="about:blank",this.iframe=null;this.overlay=null,this.container.innerHTML=""}}var K3={id:"drawio-editor",label:"Draw.io Editor",icon:"git-merge",capabilities:["edit","preview"],placement:"tabs",canHandle(_){if(!KZ(_?.path))return!1;return 60},mount(_,$){if($?.mode==="view")return new n6(_,$);return new d6(_,$)}};class s6{tabs=new Map;activeId=null;mruOrder=[];listeners=new Set;onChange(_){return this.listeners.add(_),()=>this.listeners.delete(_)}notify(){let _=this.getTabs(),$=this.activeId;for(let j of this.listeners)try{j(_,$)}catch{}}open(_,$){let j=this.tabs.get(_);if(!j)j={id:_,label:$||_.split("/").pop()||_,path:_,dirty:!1,pinned:!1},this.tabs.set(_,j);return this.activate(_),j}activate(_){if(!this.tabs.has(_))return;this.activeId=_,this.mruOrder=[_,...this.mruOrder.filter(($)=>$!==_)],this.notify()}close(_){if(!this.tabs.get(_))return!1;if(this.tabs.delete(_),this.mruOrder=this.mruOrder.filter((j)=>j!==_),this.activeId===_)this.activeId=this.mruOrder[0]||null;return this.notify(),!0}closeOthers(_){for(let[$,j]of this.tabs)if($!==_&&!j.pinned)this.tabs.delete($),this.mruOrder=this.mruOrder.filter((Z)=>Z!==$);if(this.activeId&&!this.tabs.has(this.activeId))this.activeId=_;this.notify()}closeAll(){for(let[_,$]of this.tabs)if(!$.pinned)this.tabs.delete(_),this.mruOrder=this.mruOrder.filter((j)=>j!==_);if(this.activeId&&!this.tabs.has(this.activeId))this.activeId=this.mruOrder[0]||null;this.notify()}setDirty(_,$){let j=this.tabs.get(_);if(!j||j.dirty===$)return;j.dirty=$,this.notify()}togglePin(_){let $=this.tabs.get(_);if(!$)return;$.pinned=!$.pinned,this.notify()}saveViewState(_,$){let j=this.tabs.get(_);if(j)j.viewState=$}getViewState(_){return this.tabs.get(_)?.viewState}rename(_,$,j){let Z=this.tabs.get(_);if(!Z)return;if(this.tabs.delete(_),Z.id=$,Z.path=$,Z.label=j||$.split("/").pop()||$,this.tabs.set($,Z),this.mruOrder=this.mruOrder.map((N)=>N===_?$:N),this.activeId===_)this.activeId=$;this.notify()}getTabs(){return Array.from(this.tabs.values())}getActiveId(){return this.activeId}getActive(){return this.activeId?this.tabs.get(this.activeId)||null:null}get(_){return this.tabs.get(_)}get size(){return this.tabs.size}hasUnsaved(){for(let _ of this.tabs.values())if(_.dirty)return!0;return!1}getDirtyTabs(){return Array.from(this.tabs.values()).filter((_)=>_.dirty)}nextTab(){let _=this.getTabs();if(_.length<=1)return;let $=_.findIndex((Z)=>Z.id===this.activeId),j=_[($+1)%_.length];this.activate(j.id)}prevTab(){let _=this.getTabs();if(_.length<=1)return;let $=_.findIndex((Z)=>Z.id===this.activeId),j=_[($-1+_.length)%_.length];this.activate(j.id)}mruSwitch(){if(this.mruOrder.length>1)this.activate(this.mruOrder[1])}}var r_=new s6;var u1="workspaceExplorerScale",XZ=["compact","default","comfortable"],LZ=new Set(XZ),BZ={compact:{indentPx:14},default:{indentPx:16},comfortable:{indentPx:18}};function o6(_,$="default"){if(typeof _!=="string")return $;let j=_.trim().toLowerCase();return LZ.has(j)?j:$}function G3(){if(typeof window>"u")return{width:0,isTouch:!1};let _=Number(window.innerWidth)||0,$=Boolean(window.matchMedia?.("(pointer: coarse)")?.matches),j=Boolean(window.matchMedia?.("(hover: none)")?.matches),Z=Number(globalThis.navigator?.maxTouchPoints||0)>0;return{width:_,isTouch:$||Z&&j}}function WZ(_={}){let $=Math.max(0,Number(_.width)||0);if(Boolean(_.isTouch))return"comfortable";if($>0&&$<1180)return"comfortable";return"default"}function UZ(_,$={}){if(Boolean($.isTouch)&&_==="compact")return"default";return _}function V3(_={}){let $=WZ(_),j=_.stored?o6(_.stored,$):$;return UZ(j,_)}function r6(_){return BZ[o6(_)]}var OZ=60000,_9=(_)=>{if(!_||!_.name)return!1;if(_.path===".")return!1;return _.name.startsWith(".")};function $9(_,$,j,Z=0,N=[]){if(!j&&_9(_))return N;if(!_)return N;if(N.push({node:_,depth:Z}),_.type==="dir"&&_.children&&$.has(_.path))for(let Y of _.children)$9(Y,$,j,Z+1,N);return N}function a6(_,$,j){if(!_)return"";let Z=[],N=(Y)=>{if(!j&&_9(Y))return;if(Z.push(Y.type==="dir"?`d:${Y.path}`:`f:${Y.path}`),Y.children&&$?.has(Y.path))for(let z of Y.children)N(z)};return N(_),Z.join("|")}function L3(_,$){if(!$)return null;if(!_)return $;if(_.path!==$.path||_.type!==$.type)return $;let j=Array.isArray(_.children)?_.children:null,Z=Array.isArray($.children)?$.children:null;if(!Z)return _;let N=j?new Map(j.map((q)=>[q?.path,q])):new Map,Y=!j||j.length!==Z.length,z=Z.map((q)=>{let L=L3(N.get(q.path),q);if(L!==N.get(q.path))Y=!0;return L});return Y?{...$,children:z}:_}function Q3(_,$,j){if(!_)return _;if(_.path===$)return L3(_,j);if(!Array.isArray(_.children))return _;let Z=!1,N=_.children.map((Y)=>{let z=Q3(Y,$,j);if(z!==Y)Z=!0;return z});return Z?{..._,children:N}:_}var j9=4,q3=14,FZ=8,HZ=16;function Z9(_){if(!_)return 0;if(_.type==="file"){let Z=Math.max(0,Number(_.size)||0);return _.__bytes=Z,Z}let $=Array.isArray(_.children)?_.children:[],j=0;for(let Z of $)j+=Z9(Z);return _.__bytes=j,j}function N9(_,$=0){let j=Math.max(0,Number(_?.__bytes??_?.size??0)),Z={name:_?.name||_?.path||".",path:_?.path||".",size:j,children:[]};if(!_||_.type!=="dir"||$>=j9)return Z;let N=Array.isArray(_.children)?_.children:[],Y=[];for(let q of N){let L=Math.max(0,Number(q?.__bytes??q?.size??0));if(L<=0)continue;if(q.type==="dir")Y.push({kind:"dir",node:q,size:L});else Y.push({kind:"file",name:q.name,path:q.path,size:L})}Y.sort((q,L)=>L.size-q.size);let z=Y;if(Y.length>q3){let q=Y.slice(0,q3-1),L=Y.slice(q3-1),Q=L.reduce((B,X)=>B+X.size,0);q.push({kind:"other",name:`+${L.length} more`,path:`${Z.path}/[other]`,size:Q}),z=q}return Z.children=z.map((q)=>{if(q.kind==="dir")return N9(q.node,$+1);return{name:q.name,path:q.path,size:q.size,children:[]}}),Z}function t6(){if(typeof window>"u"||typeof document>"u")return!1;let{documentElement:_,body:$}=document,j=_?.getAttribute?.("data-theme")?.toLowerCase?.()||"";if(j==="dark")return!0;if(j==="light")return!1;if(_?.classList?.contains("dark")||$?.classList?.contains("dark"))return!0;if(_?.classList?.contains("light")||$?.classList?.contains("light"))return!1;return Boolean(window.matchMedia?.("(prefers-color-scheme: dark)")?.matches)}function Y9(_,$,j){let Z=((_+Math.PI/2)*180/Math.PI+360)%360,N=j?Math.max(30,70-$*10):Math.max(34,66-$*8),Y=j?Math.min(70,45+$*5):Math.min(60,42+$*4);return`hsl(${Z.toFixed(1)} ${N}% ${Y}%)`}function m1(_,$,j,Z){return{x:_+j*Math.cos(Z),y:$+j*Math.sin(Z)}}function B3(_,$,j,Z,N,Y){let z=Math.PI*2-0.0001,q=Y-N>z?N+z:Y,L=m1(_,$,Z,N),Q=m1(_,$,Z,q),B=m1(_,$,j,q),X=m1(_,$,j,N),H=q-N>Math.PI?1:0;return[`M ${L.x.toFixed(3)} ${L.y.toFixed(3)}`,`A ${Z} ${Z} 0 ${H} 1 ${Q.x.toFixed(3)} ${Q.y.toFixed(3)}`,`L ${B.x.toFixed(3)} ${B.y.toFixed(3)}`,`A ${j} ${j} 0 ${H} 0 ${X.x.toFixed(3)} ${X.y.toFixed(3)}`,"Z"].join(" ")}var z9={1:[26,46],2:[48,68],3:[70,90],4:[92,112]};function K9(_,$,j){let Z=[],N=[],Y=Math.max(0,Number($)||0),z=(q,L,Q,B)=>{let X=Array.isArray(q?.children)?q.children:[];if(!X.length)return;let H=Math.max(0,Number(q.size)||0);if(H<=0)return;let M=Q-L,b=L;X.forEach((m,g)=>{let y=Math.max(0,Number(m.size)||0);if(y<=0)return;let x=y/H,h=b,E=g===X.length-1?Q:b+M*x;if(b=E,E-h<0.003)return;let S=z9[B];if(S){let s=Y9(h,B,j);if(Z.push({key:m.path,path:m.path,label:m.name,size:y,color:s,depth:B,startAngle:h,endAngle:E,innerRadius:S[0],outerRadius:S[1],d:B3(120,120,S[0],S[1],h,E)}),B===1)N.push({key:m.path,name:m.name,size:y,pct:Y>0?y/Y*100:0,color:s})}if(B<j9)z(m,h,E,B+1)})};return z(_,-Math.PI/2,Math.PI*3/2,1),{segments:Z,legend:N}}function X3(_,$){if(!_||!$)return null;if(_.path===$)return _;let j=Array.isArray(_.children)?_.children:[];for(let Z of j){let N=X3(Z,$);if(N)return N}return null}function G9(_,$,j,Z){if(!j||j<=0)return{segments:[],legend:[]};let N=z9[1];if(!N)return{segments:[],legend:[]};let Y=-Math.PI/2,z=Math.PI*3/2,q=Y9(Y,1,Z),Q=`${$||"."}/[files]`;return{segments:[{key:Q,path:Q,label:_,size:j,color:q,depth:1,startAngle:Y,endAngle:z,innerRadius:N[0],outerRadius:N[1],d:B3(120,120,N[0],N[1],Y,z)}],legend:[{key:Q,name:_,size:j,pct:100,color:q}]}}function e6(_,$=!1,j=!1){if(!_)return null;let Z=Z9(_),N=N9(_,0),Y=N.size||Z,{segments:z,legend:q}=K9(N,Y,j);if(!z.length&&Y>0){let L=G9("[files]",N.path,Y,j);z=L.segments,q=L.legend}return{root:N,totalSize:Y,segments:z,legend:q,truncated:$,isDarkTheme:j}}function DZ({payload:_}){if(!_)return null;let[$,j]=v(null),[Z,N]=v(_?.root?.path||"."),[Y,z]=v(()=>[_?.root?.path||"."]),[q,L]=v(!1);R(()=>{let l=_?.root?.path||".";N(l),z([l]),j(null)},[_?.root?.path,_?.totalSize]),R(()=>{if(!Z)return;L(!0);let l=setTimeout(()=>L(!1),180);return()=>clearTimeout(l)},[Z]);let Q=v_(()=>{return X3(_.root,Z)||_.root},[_?.root,Z]),B=Q?.size||_.totalSize||0,{segments:X,legend:H}=v_(()=>{let l=K9(Q,B,_.isDarkTheme);if(l.segments.length>0)return l;if(B<=0)return l;let Q_=Q?.children?.length?"Total":"[files]";return G9(Q_,Q?.path||_?.root?.path||".",B,_.isDarkTheme)},[Q,B,_.isDarkTheme,_?.root?.path]),[M,b]=v(X),m=P(new Map),g=P(0);R(()=>{let l=m.current,Q_=new Map(X.map((N_)=>[N_.key,N_])),a_=performance.now(),c_=220,r=(N_)=>{let __=Math.min(1,(N_-a_)/220),X_=__*(2-__),G_=X.map((L_)=>{let Y_=l.get(L_.key)||{startAngle:L_.startAngle,endAngle:L_.startAngle,innerRadius:L_.innerRadius,outerRadius:L_.innerRadius},m_=(V0,V_)=>V0+(V_-V0)*X_,T_=m_(Y_.startAngle,L_.startAngle),A_=m_(Y_.endAngle,L_.endAngle),y_=m_(Y_.innerRadius,L_.innerRadius),G0=m_(Y_.outerRadius,L_.outerRadius);return{...L_,d:B3(120,120,y_,G0,T_,A_)}});if(b(G_),__<1)g.current=requestAnimationFrame(r)};if(g.current)cancelAnimationFrame(g.current);return g.current=requestAnimationFrame(r),m.current=Q_,()=>{if(g.current)cancelAnimationFrame(g.current)}},[X]);let y=M.length?M:X,x=B>0?B$(B):"0 B",h=Q?.name||"",S=(h&&h!=="."?h:"Total")||"Total",s=x,e=Y.length>1,o=(l)=>{if(!l?.path)return;let Q_=X3(_.root,l.path);if(!Q_||!Array.isArray(Q_.children)||Q_.children.length===0)return;z((a_)=>[...a_,Q_.path]),N(Q_.path),j(null)},j_=()=>{if(!e)return;z((l)=>{let Q_=l.slice(0,-1);return N(Q_[Q_.length-1]||_?.root?.path||"."),Q_}),j(null)};return W`
        <div class="workspace-folder-starburst">
            <svg viewBox="0 0 240 240" class=${`workspace-folder-starburst-svg${q?" is-zooming":""}`} role="img"
                aria-label=${`Folder sizes for ${Q?.path||_?.root?.path||"."}`}
                data-segments=${y.length}
                data-base-size=${B}>
                ${y.map((l)=>W`
                    <path
                        key=${l.key}
                        d=${l.d}
                        fill=${l.color}
                        stroke="var(--bg-primary)"
                        stroke-width="1"
                        class=${`workspace-folder-starburst-segment${$?.key===l.key?" is-hovered":""}`}
                        onMouseEnter=${()=>j(l)}
                        onMouseLeave=${()=>j(null)}
                        onTouchStart=${()=>j(l)}
                        onTouchEnd=${()=>j(null)}
                        onClick=${()=>o(l)}
                    >
                        <title>${l.label} — ${B$(l.size)}</title>
                    </path>
                `)}
                <g
                    class=${`workspace-folder-starburst-center-hit${e?" is-drill":""}`}
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
                    <text x="120" y="114" text-anchor="middle" class="workspace-folder-starburst-total-label">${S}</text>
                    <text x="120" y="130" text-anchor="middle" class="workspace-folder-starburst-total-value">${s}</text>
                </g>
            </svg>
            ${H.length>0&&W`
                <div class="workspace-folder-starburst-legend">
                    ${H.slice(0,8).map((l)=>W`
                        <div key=${l.key} class="workspace-folder-starburst-legend-item">
                            <span class="workspace-folder-starburst-swatch" style=${`background:${l.color}`}></span>
                            <span class="workspace-folder-starburst-name" title=${l.name}>${l.name}</span>
                            <span class="workspace-folder-starburst-size">${B$(l.size)}</span>
                            <span class="workspace-folder-starburst-pct">${l.pct.toFixed(1)}%</span>
                        </div>
                    `)}
                </div>
            `}
            ${_.truncated&&W`
                <div class="workspace-folder-starburst-note">Preview is truncated by tree depth/entry limits.</div>
            `}
        </div>
    `}function JZ({mediaId:_}){let[$,j]=v(null);if(R(()=>{if(!_)return;P2(_).then(j).catch(()=>{})},[_]),!$)return null;let Z=$.filename||"file",N=$.metadata?.size?B$($.metadata.size):"";return W`
        <a href=${L$(_)} download=${Z} class="file-attachment"
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
                ${N&&W`<span class="file-size">${N}</span>`}
            </div>
            <svg class="download-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                <polyline points="7 10 12 15 17 10"/>
                <line x1="12" y1="15" x2="12" y2="3"/>
            </svg>
        </a>
    `}function V9({onFileSelect:_,visible:$=!0,active:j=void 0,onOpenEditor:Z,onOpenTerminalTab:N,onToggleTerminal:Y,terminalVisible:z=!1}){let[q,L]=v(null),[Q,B]=v(new Set(["."])),[X,H]=v(null),[M,b]=v(null),[m,g]=v(""),[y,x]=v(null),[h,E]=v(null),[S,s]=v(!0),[e,o]=v(!1),[j_,l]=v(null),[Q_,a_]=v(()=>M2("workspaceShowHidden",!1)),[c_,r]=v(!1),[N_,__]=v(null),[X_,G_]=v(null),[L_,U_]=v(null),[Y_,m_]=v(!1),[T_,A_]=v(null),[y_,G0]=v(()=>t6()),[V0,V_]=v(()=>V3({stored:_$(u1),...G3()})),[$_,H_]=v(!1),Z_=P(Q),D_=P(""),C_=P(null),h_=P(0),i_=P(new Set),g_=P(null),l_=P(new Map),f_=P(_),M_=P(Z),k_=P(null),p_=P(null),Z0=P(null),M0=P(null),P_=P(null),A0=P(null),n_=P("."),b_=P(null),N0=P({path:null,dragging:!1,startX:0,startY:0}),_0=P({path:null,dragging:!1,startX:0,startY:0}),d_=P({path:null,timer:0}),Y0=P(!1),S_=P(0),F0=P(new Map),b0=P(null),E_=P(null),$0=P(null),S0=P(null),I_=P(null),C=P(null),t=P(Q_),O_=P($),w_=P(j??$),t_=P(0),H0=P(L_),x_=P(c_),R0=P(N_),j$=P(null),Z$=P({x:0,y:0}),C0=P(0),T$=P(null),D0=P(X),l0=P(M),n0=P(null),v0=P(null),N$=P(y);f_.current=_,M_.current=Z,R(()=>{Z_.current=Q},[Q]),R(()=>{t.current=Q_},[Q_]),R(()=>{O_.current=$},[$]),R(()=>{w_.current=j??$},[j,$]),R(()=>{H0.current=L_},[L_]),R(()=>{if(typeof window>"u")return;let U=()=>{V_(V3({stored:_$(u1),...G3()}))};U();let J=()=>U(),w=()=>U(),K=(u)=>{if(!u||u.key===null||u.key===u1)U()};window.addEventListener("resize",J),window.addEventListener("focus",w),window.addEventListener("storage",K);let O=window.matchMedia?.("(pointer: coarse)"),D=window.matchMedia?.("(hover: none)"),T=(u,a)=>{if(!u)return;if(u.addEventListener)u.addEventListener("change",a);else if(u.addListener)u.addListener(a)},p=(u,a)=>{if(!u)return;if(u.removeEventListener)u.removeEventListener("change",a);else if(u.removeListener)u.removeListener(a)};return T(O,J),T(D,J),()=>{window.removeEventListener("resize",J),window.removeEventListener("focus",w),window.removeEventListener("storage",K),p(O,J),p(D,J)}},[]),R(()=>{let U=(J)=>{let w=J?.detail?.path;if(!w)return;let K=w.split("/"),O=[];for(let D=1;D<K.length;D++)O.push(K.slice(0,D).join("/"));if(O.length)B((D)=>{let T=new Set(D);T.add(".");for(let p of O)T.add(p);return T});H(w),requestAnimationFrame(()=>{let D=document.querySelector(`[data-path="${CSS.escape(w)}"]`);if(D)D.scrollIntoView({block:"nearest",behavior:"smooth"})})};return window.addEventListener("workspace-reveal-path",U),()=>window.removeEventListener("workspace-reveal-path",U)},[]),R(()=>{x_.current=c_},[c_]),R(()=>{R0.current=N_},[N_]),R(()=>{D0.current=X},[X]),R(()=>{l0.current=M},[M]),R(()=>{N$.current=y},[y]),R(()=>{if(typeof window>"u"||typeof document>"u")return;let U=()=>G0(t6());U();let J=window.matchMedia?.("(prefers-color-scheme: dark)"),w=()=>U();if(J?.addEventListener)J.addEventListener("change",w);else if(J?.addListener)J.addListener(w);let K=typeof MutationObserver<"u"?new MutationObserver(()=>U()):null;if(K?.observe(document.documentElement,{attributes:!0,attributeFilter:["class","data-theme"]}),document.body)K?.observe(document.body,{attributes:!0,attributeFilter:["class","data-theme"]});return()=>{if(J?.removeEventListener)J.removeEventListener("change",w);else if(J?.removeListener)J.removeListener(w);K?.disconnect()}},[]),R(()=>{if(!M)return;let U=P_.current;if(!U)return;let J=requestAnimationFrame(()=>{try{U.focus(),U.select()}catch{}});return()=>cancelAnimationFrame(J)},[M]),R(()=>{if(!$_)return;let U=(w)=>{let K=w?.target;if(!(K instanceof Element))return;if(I_.current?.contains(K))return;if(C.current?.contains(K))return;H_(!1)},J=(w)=>{if(w?.key==="Escape")H_(!1),C.current?.focus?.()};return document.addEventListener("mousedown",U),document.addEventListener("touchstart",U,{passive:!0}),document.addEventListener("keydown",J),()=>{document.removeEventListener("mousedown",U),document.removeEventListener("touchstart",U),document.removeEventListener("keydown",J)}},[$_]);let O2=async(U)=>{o(!0),x(null),E(null);try{let J=await E4(U,20000);x(J)}catch(J){x({error:J.message||"Failed to load preview"})}finally{o(!1)}};k_.current=O2;let F2=async()=>{if(!O_.current)return;try{let U=await o2("",1,t.current),J=a6(U.root,Z_.current,t.current);if(J===D_.current){s(!1);return}if(D_.current=J,C_.current=U.root,!h_.current)h_.current=requestAnimationFrame(()=>{h_.current=0,L((w)=>L3(w,C_.current)),s(!1)})}catch(U){l(U.message||"Failed to load workspace"),s(!1)}},y0=async(U)=>{if(!U)return;if(i_.current.has(U))return;i_.current.add(U);try{let J=await o2(U,1,t.current);L((w)=>Q3(w,U,J.root))}catch(J){l(J.message||"Failed to load workspace")}finally{i_.current.delete(U)}};p_.current=y0;let J0=I(()=>{let U=X;if(!U)return".";let J=l_.current?.get(U);if(J&&J.type==="dir")return J.path;if(U==="."||!U.includes("/"))return".";let w=U.split("/");return w.pop(),w.join("/")||"."},[X]),z0=I((U)=>{let J=U?.closest?.(".workspace-row");if(!J)return null;let w=J.dataset.path,K=J.dataset.type;if(!w)return null;if(K==="dir")return w;if(w.includes("/")){let O=w.split("/");return O.pop(),O.join("/")||"."}return"."},[]),c0=I((U)=>{return z0(U?.target||null)},[z0]),K0=I((U)=>{H0.current=U,U_(U)},[]),I0=I(()=>{let U=d_.current;if(U?.timer)clearTimeout(U.timer);d_.current={path:null,timer:0}},[]),Y$=I((U)=>{if(!U||U==="."){I0();return}let J=l_.current?.get(U);if(!J||J.type!=="dir"){I0();return}if(Z_.current?.has(U)){I0();return}if(d_.current?.path===U)return;I0();let w=setTimeout(()=>{d_.current={path:null,timer:0},p_.current?.(U),B((K)=>{let O=new Set(K);return O.add(U),O})},600);d_.current={path:U,timer:w}},[I0]),C$=I((U,J)=>{if(Z$.current={x:U,y:J},C0.current)return;C0.current=requestAnimationFrame(()=>{C0.current=0;let w=j$.current;if(!w)return;let K=Z$.current;w.style.transform=`translate(${K.x+12}px, ${K.y+12}px)`})},[]),e$=I((U)=>{if(!U)return;let w=(l_.current?.get(U)?.name||U.split("/").pop()||U).trim();if(!w)return;G_({path:U,label:w})},[]),c$=I(()=>{if(G_(null),C0.current)cancelAnimationFrame(C0.current),C0.current=0;if(j$.current)j$.current.style.transform="translate(-9999px, -9999px)"},[]),_2=I((U)=>{if(!U)return".";let J=l_.current?.get(U);if(J&&J.type==="dir")return J.path;if(U==="."||!U.includes("/"))return".";let w=U.split("/");return w.pop(),w.join("/")||"."},[]),d0=I(()=>{b(null),g("")},[]),$2=I((U)=>{if(!U)return;let w=(l_.current?.get(U)?.name||U.split("/").pop()||U).trim();if(!w||U===".")return;b(U),g(w)},[]),j2=I(async()=>{let U=l0.current;if(!U)return;let J=(m||"").trim();if(!J){d0();return}let w=l_.current?.get(U),K=(w?.name||U.split("/").pop()||U).trim();if(J===K){d0();return}try{let D=(await k4(U,J))?.path||U,T=U.includes("/")?U.split("/").slice(0,-1).join("/")||".":".";if(d0(),l(null),window.dispatchEvent(new CustomEvent("workspace-file-renamed",{detail:{oldPath:U,newPath:D,type:w?.type||"file"}})),w?.type==="dir")B((p)=>{let u=new Set;for(let a of p)if(a===U)u.add(D);else if(a.startsWith(`${U}/`))u.add(`${D}${a.slice(U.length)}`);else u.add(a);return u});if(H(D),w?.type==="dir")x(null),o(!1),E(null);else k_.current?.(D);p_.current?.(T)}catch(O){l(O?.message||"Failed to rename file")}},[d0,m]),z$=I(async(U)=>{let K=U||".";for(let O=0;O<50;O+=1){let T=`untitled${O===0?"":`-${O}`}.md`;try{let u=(await y4(K,T,""))?.path||(K==="."?T:`${K}/${T}`);if(K&&K!==".")B((a)=>new Set([...a,K]));H(u),l(null),p_.current?.(K),k_.current?.(u);return}catch(p){if(p?.status===409||p?.code==="file_exists")continue;l(p?.message||"Failed to create file");return}}l("Failed to create file (untitled name already in use).")},[]),U$=I((U)=>{if(U?.stopPropagation?.(),Y_)return;let J=_2(D0.current);z$(J)},[Y_,_2,z$]);R(()=>{if(typeof window>"u")return;let U=(J)=>{let w=J?.detail?.updates||[];if(!Array.isArray(w)||w.length===0)return;L((p)=>{let u=p;for(let a of w){if(!a?.root)continue;if(!u||a.path==="."||!a.path)u=a.root;else u=Q3(u,a.path,a.root)}if(u)D_.current=a6(u,Z_.current,t.current);return s(!1),u});let K=D0.current;if(Boolean(K)&&w.some((p)=>{let u=p?.path||"";if(!u||u===".")return!0;return K===u||K.startsWith(`${u}/`)||u.startsWith(`${K}/`)}))F0.current.clear();if(!K||!N$.current)return;let D=l_.current?.get(K);if(D&&D.type==="dir")return;if(w.some((p)=>{let u=p?.path||"";if(!u||u===".")return!0;return K===u||K.startsWith(`${u}/`)}))k_.current?.(K)};return window.addEventListener("workspace-update",U),()=>window.removeEventListener("workspace-update",U)},[]),g_.current=F2;let s0=P(()=>{if(typeof window>"u")return;let U=window.matchMedia("(min-width: 1024px) and (orientation: landscape)"),J=w_.current??O_.current,w=document.visibilityState!=="hidden"&&(J||U.matches&&O_.current);r2(w,t.current).catch(()=>{})}).current,Q0=P(0),s_=P(()=>{if(Q0.current)clearTimeout(Q0.current);Q0.current=setTimeout(()=>{Q0.current=0,s0()},250)}).current;R(()=>{if(O_.current)g_.current?.();s_()},[$,j]),R(()=>{g_.current(),s0();let U=setInterval(()=>g_.current(),OZ),J=I2("previewHeight",null),w=Number.isFinite(J)?Math.min(Math.max(J,80),600):280;if(S_.current=w,Z0.current)Z0.current.style.setProperty("--preview-height",`${w}px`);let K=window.matchMedia("(min-width: 1024px) and (orientation: landscape)"),O=()=>s_();if(K.addEventListener)K.addEventListener("change",O);else if(K.addListener)K.addListener(O);return document.addEventListener("visibilitychange",O),()=>{if(clearInterval(U),h_.current)cancelAnimationFrame(h_.current),h_.current=0;if(K.removeEventListener)K.removeEventListener("change",O);else if(K.removeListener)K.removeListener(O);if(document.removeEventListener("visibilitychange",O),Q0.current)clearTimeout(Q0.current),Q0.current=0;if(b_.current)clearTimeout(b_.current),b_.current=null;r2(!1,t.current).catch(()=>{})}},[]);let O$=v_(()=>$9(q,Q,Q_),[q,Q,Q_]),E$=v_(()=>new Map(O$.map((U)=>[U.node.path,U.node])),[O$]),h$=v_(()=>r6(V0),[V0]);l_.current=E$;let J_=(X?l_.current.get(X):null)?.type==="dir";R(()=>{if(!X||!J_){A_(null),b0.current=null,E_.current=null;return}let U=X,J=`${Q_?"hidden":"visible"}:${X}`,w=F0.current,K=w.get(J);if(K?.root){w.delete(J),w.set(J,K);let T=e6(K.root,Boolean(K.truncated),y_);if(T)b0.current=T,E_.current=X,A_({loading:!1,error:null,payload:T});return}let O=b0.current,D=E_.current;A_({loading:!0,error:null,payload:D===X?O:null}),o2(X,FZ,Q_).then((T)=>{if(D0.current!==U)return;let p={root:T?.root,truncated:Boolean(T?.truncated)};w.delete(J),w.set(J,p);while(w.size>HZ){let a=w.keys().next().value;if(!a)break;w.delete(a)}let u=e6(p.root,p.truncated,y_);b0.current=u,E_.current=X,A_({loading:!1,error:null,payload:u})}).catch((T)=>{if(D0.current!==U)return;A_({loading:!1,error:T?.message||"Failed to load folder size chart",payload:D===X?O:null})})},[X,J_,Q_,y_]);let K$=Boolean(y&&y.kind==="text"&&!J_&&(!y.size||y.size<=262144)),A$=K$?"Open in editor":y?.size>262144?"File too large to edit":"File is not editable",f$=Boolean(X&&X!=="."),o0=Boolean(X&&!J_),b$=Boolean(X&&!J_),r0=X&&J_?J1(X,Q_):null,u0=I(()=>H_(!1),[]),X0=I(async(U)=>{u0();try{await U?.()}catch{}},[u0]);R(()=>{let U=$0.current;if(S0.current)S0.current.dispose(),S0.current=null;if(!U)return;if(U.innerHTML="",!X||J_||!y||y.error)return;let J={path:X,content:typeof y.text==="string"?y.text:void 0,mtime:y.mtime,size:y.size,preview:y,mode:"view"},w=e_.resolve(J)||e_.get("workspace-preview-default");if(!w)return;let K=w.mount(U,J);return S0.current=K,()=>{if(S0.current===K)K.dispose(),S0.current=null;U.innerHTML=""}},[X,J_,y]);let m0=(U)=>{let J=U?.target;if(J instanceof Element)return J;return J?.parentElement||null},a0=(U)=>{return Boolean(U?.closest?.(".workspace-node-icon, .workspace-label-text"))},f0=P((U)=>{if(v0.current)clearTimeout(v0.current),v0.current=null;let w=m0(U)?.closest?.("[data-path]");if(!w)return;let K=w.dataset.path;if(w.dataset.type==="dir"||!K)return;if(l0.current===K)d0();M_.current?.(K)}).current,i$=P((U)=>{if(Y0.current){Y0.current=!1;return}let J=m0(U),w=J?.closest?.("[data-path]");if(M0.current?.focus?.(),!w)return;let K=w.dataset.path,O=w.dataset.type,D=Boolean(J?.closest?.(".workspace-caret")),T=Boolean(J?.closest?.("button"))||Boolean(J?.closest?.("a"))||Boolean(J?.closest?.("input")),p=D0.current===K,u=l0.current;if(u){if(u===K)return;d0()}let a=O==="file"&&n0.current===K&&!D&&!T;if(p&&!D&&!T&&K!=="."&&!a){if(v0.current)clearTimeout(v0.current);v0.current=setTimeout(()=>{v0.current=null,$2(K)},350);return}if(O==="dir"){if(n0.current=null,H(K),x(null),E(null),o(!1),!Z_.current.has(K))p_.current?.(K);if(p&&!D)return;B((k0)=>{let F_=new Set(k0);if(F_.has(K))F_.delete(K);else F_.add(K);return F_})}else{n0.current=null,H(K);let B_=l_.current.get(K);if(B_)f_.current?.(B_.path,B_);k_.current?.(K)}}).current,t0=P(()=>{D_.current="",g_.current(),Array.from(Z_.current||[]).filter((J)=>J&&J!==".").forEach((J)=>p_.current?.(J))}).current,h0=P(()=>{n0.current=null,H(null),x(null),E(null),o(!1)}).current,l$=P(()=>{a_((U)=>{let J=!U;if(typeof window<"u")o_("workspaceShowHidden",String(J));return t.current=J,r2(!0,J).catch(()=>{}),D_.current="",g_.current?.(),Array.from(Z_.current||[]).filter((K)=>K&&K!==".").forEach((K)=>p_.current?.(K)),J})}).current,Z2=P((U)=>{if(m0(U)?.closest?.("[data-path]"))return;h0()}).current,S$=I(async(U)=>{if(!U)return;let J=U.split("/").pop()||U;if(!window.confirm(`Delete "${J}"? This cannot be undone.`))return;try{await M4(U);let K=U.includes("/")?U.split("/").slice(0,-1).join("/")||".":".";if(D0.current===U)h0();p_.current?.(K),l(null)}catch(K){x((O)=>({...O||{},error:K.message||"Failed to delete file"}))}},[h0]),E0=I((U)=>{let J=M0.current;if(!J||!U||typeof CSS>"u"||typeof CSS.escape!=="function")return;J.querySelector(`[data-path="${CSS.escape(U)}"]`)?.scrollIntoView?.({block:"nearest"})},[]),F$=I((U)=>{let J=O$;if(!J||J.length===0)return;let w=X?J.findIndex((K)=>K.node.path===X):-1;if(U.key==="ArrowDown"){U.preventDefault();let K=Math.min(w+1,J.length-1),O=J[K];if(!O)return;if(H(O.node.path),O.node.type!=="dir")f_.current?.(O.node.path,O.node),k_.current?.(O.node.path);else x(null),o(!1),E(null);E0(O.node.path);return}if(U.key==="ArrowUp"){U.preventDefault();let K=w<=0?0:w-1,O=J[K];if(!O)return;if(H(O.node.path),O.node.type!=="dir")f_.current?.(O.node.path,O.node),k_.current?.(O.node.path);else x(null),o(!1),E(null);E0(O.node.path);return}if(U.key==="ArrowRight"&&w>=0){let K=J[w];if(K?.node?.type==="dir"&&!Q.has(K.node.path))U.preventDefault(),p_.current?.(K.node.path),B((O)=>new Set([...O,K.node.path]));return}if(U.key==="ArrowLeft"&&w>=0){let K=J[w];if(K?.node?.type==="dir"&&Q.has(K.node.path))U.preventDefault(),B((O)=>{let D=new Set(O);return D.delete(K.node.path),D});return}if(U.key==="Enter"&&w>=0){U.preventDefault();let K=J[w];if(!K)return;let O=K.node.path;if(K.node.type==="dir"){if(!Z_.current.has(O))p_.current?.(O);B((T)=>{let p=new Set(T);if(p.has(O))p.delete(O);else p.add(O);return p}),x(null),E(null),o(!1)}else f_.current?.(O,K.node),k_.current?.(O);return}if((U.key==="Delete"||U.key==="Backspace")&&w>=0){let K=J[w];if(!K||K.node.type==="dir")return;U.preventDefault(),S$(K.node.path);return}if(U.key==="Escape")U.preventDefault(),h0()},[h0,S$,Q,O$,E0,X]),y$=I((U)=>{let J=m0(U),w=J?.closest?.(".workspace-row");if(!w)return;let K=w.dataset.type,O=w.dataset.path;if(!O||O===".")return;if(l0.current===O)return;let D=U?.touches?.[0];if(!D)return;if(N0.current={path:a0(J)?O:null,dragging:!1,startX:D.clientX,startY:D.clientY},K!=="file")return;if(b_.current)clearTimeout(b_.current);b_.current=setTimeout(()=>{if(b_.current=null,N0.current?.dragging)return;S$(O)},600)},[S$]),k$=I(()=>{if(b_.current)clearTimeout(b_.current),b_.current=null;let U=N0.current;if(U?.dragging&&U.path){let J=H0.current||J0(),w=T$.current;if(typeof w==="function")w(U.path,J)}N0.current={path:null,dragging:!1,startX:0,startY:0},t_.current=0,r(!1),__(null),K0(null),I0(),c$()},[J0,c$,K0,I0]),R$=I((U)=>{let J=N0.current,w=U?.touches?.[0];if(!w||!J?.path){if(b_.current)clearTimeout(b_.current),b_.current=null;return}let K=Math.abs(w.clientX-J.startX),O=Math.abs(w.clientY-J.startY),D=K>8||O>8;if(D&&b_.current)clearTimeout(b_.current),b_.current=null;if(!J.dragging&&D)J.dragging=!0,r(!0),__("move"),e$(J.path);if(J.dragging){U.preventDefault(),C$(w.clientX,w.clientY);let T=document.elementFromPoint(w.clientX,w.clientY),p=z0(T)||J0();if(H0.current!==p)K0(p);Y$(p)}},[z0,J0,e$,C$,K0,Y$]),n$=P((U)=>{U.preventDefault();let J=Z0.current;if(!J)return;let w=U.clientY,K=S_.current||280,O=U.currentTarget;O.classList.add("dragging"),document.body.style.cursor="row-resize",document.body.style.userSelect="none";let D=w,T=(u)=>{D=u.clientY;let a=J.clientHeight-80,B_=Math.min(Math.max(K-(u.clientY-w),80),a);J.style.setProperty("--preview-height",`${B_}px`),S_.current=B_},p=()=>{let u=J.clientHeight-80,a=Math.min(Math.max(K-(D-w),80),u);S_.current=a,O.classList.remove("dragging"),document.body.style.cursor="",document.body.style.userSelect="",o_("previewHeight",String(Math.round(a))),document.removeEventListener("mousemove",T),document.removeEventListener("mouseup",p)};document.addEventListener("mousemove",T),document.addEventListener("mouseup",p)}).current,N2=P((U)=>{U.preventDefault();let J=Z0.current;if(!J)return;let w=U.touches[0];if(!w)return;let K=w.clientY,O=S_.current||280,D=U.currentTarget;D.classList.add("dragging"),document.body.style.userSelect="none";let T=(u)=>{let a=u.touches[0];if(!a)return;u.preventDefault();let B_=J.clientHeight-80,k0=Math.min(Math.max(O-(a.clientY-K),80),B_);J.style.setProperty("--preview-height",`${k0}px`),S_.current=k0},p=()=>{D.classList.remove("dragging"),document.body.style.userSelect="",o_("previewHeight",String(Math.round(S_.current||O))),document.removeEventListener("touchmove",T),document.removeEventListener("touchend",p),document.removeEventListener("touchcancel",p)};document.addEventListener("touchmove",T,{passive:!1}),document.addEventListener("touchend",p),document.addEventListener("touchcancel",p)}).current,i0=async()=>{if(!X)return;try{let U=await A4(X);if(U.media_id)E(U.media_id)}catch(U){x((J)=>({...J||{},error:U.message||"Failed to attach"}))}},g0=async()=>{if(!X||J_)return;await S$(X)},H$=(U)=>{return Array.from(U?.dataTransfer?.types||[]).includes("Files")},Y2=I((U)=>{if(!H$(U))return;if(U.preventDefault(),t_.current+=1,!x_.current)r(!0);__("upload");let J=c0(U)||J0();K0(J),Y$(J)},[J0,c0,K0,Y$]),G$=I((U)=>{if(!H$(U))return;if(U.preventDefault(),U.dataTransfer)U.dataTransfer.dropEffect="copy";if(!x_.current)r(!0);if(R0.current!=="upload")__("upload");let J=c0(U)||J0();if(H0.current!==J)K0(J);Y$(J)},[J0,c0,K0,Y$]),d$=I((U)=>{if(!H$(U))return;if(U.preventDefault(),t_.current=Math.max(0,t_.current-1),t_.current===0)r(!1),__(null),K0(null),I0()},[K0,I0]),P$=I(async(U,J=".")=>{let w=Array.from(U||[]);if(w.length===0)return;let K=J&&J!==""?J:".",O=K!=="."?K:"workspace root";m_(!0);try{let D=null;for(let T of w)try{D=await H1(T,K)}catch(p){let u=p?.status,a=p?.code;if(u===409||a==="file_exists"){let B_=T?.name||"file";if(!window.confirm(`"${B_}" already exists in ${O}. Overwrite?`))continue;D=await H1(T,K,{overwrite:!0})}else throw p}if(D?.path)n0.current=D.path,H(D.path),k_.current?.(D.path);p_.current?.(K)}catch(D){l(D.message||"Failed to upload file")}finally{m_(!1)}},[]),v$=I(async(U,J)=>{if(!U)return;let w=l_.current?.get(U);if(!w)return;let K=J&&J!==""?J:".",O=U.includes("/")?U.split("/").slice(0,-1).join("/")||".":".";if(K===O)return;try{let T=(await P4(U,K))?.path||U;if(w.type==="dir")B((p)=>{let u=new Set;for(let a of p)if(a===U)u.add(T);else if(a.startsWith(`${U}/`))u.add(`${T}${a.slice(U.length)}`);else u.add(a);return u});if(H(T),w.type==="dir")x(null),o(!1),E(null);else k_.current?.(T);p_.current?.(O),p_.current?.(K)}catch(D){l(D?.message||"Failed to move entry")}},[]);T$.current=v$;let z2=I(async(U)=>{if(!H$(U))return;U.preventDefault(),t_.current=0,r(!1),__(null),U_(null),I0();let J=Array.from(U?.dataTransfer?.files||[]);if(J.length===0)return;let w=H0.current||c0(U)||J0();await P$(J,w)},[J0,c0,P$]),D2=I((U)=>{if(U?.stopPropagation?.(),Y_)return;let J=U?.currentTarget?.dataset?.uploadTarget||".";n_.current=J,A0.current?.click()},[Y_]),M$=I(()=>{if(Y_)return;let U=D0.current,J=U?l_.current?.get(U):null;n_.current=J?.type==="dir"?J.path:".",A0.current?.click()},[Y_]),s$=I(()=>{X0(()=>U$(null))},[X0,U$]),K2=I(()=>{X0(()=>M$())},[X0,M$]),I$=I(()=>{X0(()=>t0())},[X0,t0]),T2=I(()=>{X0(()=>l$())},[X0,l$]),C2=I(()=>{if(!X||!K$)return;X0(()=>M_.current?.(X,y))},[X0,X,K$,y]),z_=I(()=>{if(!X||X===".")return;X0(()=>$2(X))},[X0,X,$2]),J2=I(()=>{if(!X||J_)return;X0(()=>g0())},[X0,X,J_,g0]),f2=I(()=>{if(!X||J_)return;X0(()=>i0())},[X0,X,J_,i0]),b2=I(()=>{if(!r0)return;if(u0(),typeof window<"u")window.open(r0,"_blank","noopener")},[u0,r0]),G2=I(()=>{u0(),N?.()},[u0,N]),S2=I(()=>{u0(),Y?.()},[u0,Y]),R2=I((U)=>{if(!U||U.button!==0)return;let J=U.currentTarget;if(!J||!J.dataset)return;let w=J.dataset.path;if(!w||w===".")return;if(l0.current===w)return;let K=m0(U);if(K?.closest?.("button, a, input, .workspace-caret"))return;if(!a0(K))return;U.preventDefault(),_0.current={path:w,dragging:!1,startX:U.clientX,startY:U.clientY};let O=(T)=>{let p=_0.current;if(!p?.path)return;let u=Math.abs(T.clientX-p.startX),a=Math.abs(T.clientY-p.startY),B_=u>4||a>4;if(!p.dragging&&B_)p.dragging=!0,Y0.current=!0,r(!0),__("move"),e$(p.path),C$(T.clientX,T.clientY),document.body.style.userSelect="none",document.body.style.cursor="grabbing";if(p.dragging){T.preventDefault(),C$(T.clientX,T.clientY);let k0=document.elementFromPoint(T.clientX,T.clientY),F_=z0(k0)||J0();if(H0.current!==F_)K0(F_);Y$(F_)}},D=()=>{document.removeEventListener("mousemove",O),document.removeEventListener("mouseup",D);let T=_0.current;if(T?.dragging&&T.path){let p=H0.current||J0(),u=T$.current;if(typeof u==="function")u(T.path,p)}_0.current={path:null,dragging:!1,startX:0,startY:0},t_.current=0,r(!1),__(null),K0(null),I0(),c$(),document.body.style.userSelect="",document.body.style.cursor="",setTimeout(()=>{Y0.current=!1},0)};document.addEventListener("mousemove",O),document.addEventListener("mouseup",D)},[z0,J0,e$,C$,c$,K0,Y$,I0]),v2=I(async(U)=>{let J=Array.from(U?.target?.files||[]);if(J.length===0)return;let w=n_.current||".";if(await P$(J,w),n_.current=".",U?.target)U.target.value=""},[P$]);return W`
        <aside
            class=${`workspace-sidebar${c_?" workspace-drop-active":""}`}
            data-workspace-scale=${V0}
            ref=${Z0}
            onDragEnter=${Y2}
            onDragOver=${G$}
            onDragLeave=${d$}
            onDrop=${z2}
        >
            <input type="file" multiple style="display:none" ref=${A0} onChange=${v2} />
            <div class="workspace-header">
                <div class="workspace-header-left">
                    <div class="workspace-menu-wrap">
                        <button
                            ref=${C}
                            class=${`workspace-menu-button${$_?" active":""}`}
                            onClick=${(U)=>{U.stopPropagation(),H_((J)=>!J)}}
                            title="Workspace actions"
                            aria-label="Workspace actions"
                            aria-haspopup="menu"
                            aria-expanded=${$_?"true":"false"}
                        >
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                <line x1="4" y1="7" x2="20" y2="7" />
                                <line x1="4" y1="12" x2="20" y2="12" />
                                <line x1="4" y1="17" x2="20" y2="17" />
                            </svg>
                        </button>
                        ${$_&&W`
                            <div class="workspace-menu-dropdown" ref=${I_} role="menu" aria-label="Workspace options">
                                <button class="workspace-menu-item" role="menuitem" onClick=${s$} disabled=${Y_}>New file</button>
                                <button class="workspace-menu-item" role="menuitem" onClick=${K2} disabled=${Y_}>Upload files</button>
                                <button class="workspace-menu-item" role="menuitem" onClick=${I$}>Refresh tree</button>
                                <button class=${`workspace-menu-item${Q_?" active":""}`} role="menuitem" onClick=${T2}>
                                    ${Q_?"Hide hidden files":"Show hidden files"}
                                </button>

                                ${X&&W`<div class="workspace-menu-separator"></div>`}
                                ${X&&!J_&&W`
                                    <button class="workspace-menu-item" role="menuitem" onClick=${C2} disabled=${!K$}>Open in editor</button>
                                `}
                                ${f$&&W`
                                    <button class="workspace-menu-item" role="menuitem" onClick=${z_}>Rename selected</button>
                                `}
                                ${b$&&W`
                                    <button class="workspace-menu-item" role="menuitem" onClick=${f2}>Download selected file</button>
                                `}
                                ${r0&&W`
                                    <button class="workspace-menu-item" role="menuitem" onClick=${b2}>Download selected folder (zip)</button>
                                `}
                                ${o0&&W`
                                    <button class="workspace-menu-item danger" role="menuitem" onClick=${J2}>Delete selected file</button>
                                `}

                                ${(N||Y)&&W`<div class="workspace-menu-separator"></div>`}
                                ${N&&W`
                                    <button class="workspace-menu-item" role="menuitem" onClick=${G2}>
                                        Open terminal in tab
                                    </button>
                                `}
                                ${Y&&W`
                                    <button class="workspace-menu-item" role="menuitem" onClick=${S2}>
                                        ${z?"Hide terminal dock":"Show terminal dock"}
                                    </button>
                                `}
                            </div>
                        `}
                    </div>
                    <span>Workspace</span>
                </div>
                <div class="workspace-header-actions">
                    <button class="workspace-create" onClick=${U$} title="New file" disabled=${Y_}>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                            stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                            <line x1="12" y1="5" x2="12" y2="19" />
                            <line x1="5" y1="12" x2="19" y2="12" />
                        </svg>
                    </button>
                    <button class="workspace-refresh" onClick=${t0} title="Refresh">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"
                            stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                            <circle cx="12" cy="12" r="8.5" stroke-dasharray="42 12" stroke-dashoffset="6"
                                transform="rotate(75 12 12)" />
                            <polyline points="21 3 21 9 15 9" />
                        </svg>
                    </button>
                </div>
            </div>
            <div class="workspace-tree" onClick=${Z2}>
                ${Y_&&W`<div class="workspace-drop-hint">Uploading…</div>`}
                ${S&&W`<div class="workspace-loading">Loading…</div>`}
                ${j_&&W`<div class="workspace-error">${j_}</div>`}
                ${q&&W`
                    <div
                        class="workspace-tree-list"
                        ref=${M0}
                        tabIndex="0"
                        onClick=${i$}
                        onDblClick=${f0}
                        onKeyDown=${F$}
                        onTouchStart=${y$}
                        onTouchEnd=${k$}
                        onTouchMove=${R$}
                        onTouchCancel=${k$}
                    >
                        ${O$.map(({node:U,depth:J})=>{let w=U.type==="dir",K=U.path===X,O=U.path===M,D=w&&Q.has(U.path),T=L_&&U.path===L_,p=Array.isArray(U.children)&&U.children.length>0?U.children.length:Number(U.child_count)||0;return W`
                                <div
                                    key=${U.path}
                                    class=${`workspace-row${K?" selected":""}${T?" drop-target":""}`}
                                    style=${{paddingLeft:`${8+J*h$.indentPx}px`}}
                                    data-path=${U.path}
                                    data-type=${U.type}
                                    onMouseDown=${R2}
                                >
                                    <span class="workspace-caret" aria-hidden="true">
                                        ${w?D?W`<svg viewBox="0 0 12 12"><polygon points="1,2 11,2 6,11"/></svg>`:W`<svg viewBox="0 0 12 12"><polygon points="2,1 11,6 2,11"/></svg>`:null}
                                    </span>
                                    <svg class=${`workspace-node-icon${w?" folder":""}`}
                                        viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                        stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                        aria-hidden="true">
                                        ${w?W`<path d="M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>`:W`<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/>`}
                                    </svg>
                                    ${O?W`
                                            <input
                                                class="workspace-rename-input"
                                                ref=${P_}
                                                value=${m}
                                                onInput=${(u)=>g(u?.target?.value||"")}
                                                onKeyDown=${(u)=>{if(u.key==="Enter")u.preventDefault(),j2();else if(u.key==="Escape")u.preventDefault(),d0()}}
                                                onBlur=${d0}
                                                onClick=${(u)=>u.stopPropagation()}
                                            />
                                        `:W`<span class="workspace-label"><span class="workspace-label-text">${U.name}</span></span>`}
                                    ${w&&!D&&p>0&&W`
                                        <span class="workspace-count">${p}</span>
                                    `}
                                    ${w&&W`
                                        <button
                                            class="workspace-folder-upload"
                                            data-upload-target=${U.path}
                                            title="Upload files to this folder"
                                            onClick=${D2}
                                            disabled=${Y_}
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
            ${X&&W`
                <div class="workspace-preview-splitter-h" onMouseDown=${n$} onTouchStart=${N2}></div>
                <div class="workspace-preview">
                    <div class="workspace-preview-header">
                        <span class="workspace-preview-title">${X}</span>
                        <div class="workspace-preview-actions">
                            <button class="workspace-create" onClick=${U$} title="New file" disabled=${Y_}>
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                    stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                    <line x1="12" y1="5" x2="12" y2="19" />
                                    <line x1="5" y1="12" x2="19" y2="12" />
                                </svg>
                            </button>
                            ${!J_&&W`
                                <button
                                    class="workspace-download workspace-edit"
                                    onClick=${()=>K$&&M_.current?.(X,y)}
                                    title=${A$}
                                    disabled=${!K$}
                                >
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                        stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                        <path d="M12 20h9" />
                                        <path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4Z" />
                                    </svg>
                                </button>
                                <button
                                    class="workspace-download workspace-delete"
                                    onClick=${g0}
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
                            ${J_?W`
                                    <button class="workspace-download" onClick=${M$}
                                        title="Upload files to this folder" disabled=${Y_}>
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                            stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                                            <polyline points="7 8 12 3 17 8"/>
                                            <line x1="12" y1="3" x2="12" y2="15"/>
                                        </svg>
                                    </button>
                                    <a class="workspace-download" href=${J1(X,Q_)}
                                        title="Download folder as zip" onClick=${(U)=>U.stopPropagation()}>
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                            stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                                            <polyline points="7 10 12 15 17 10"/>
                                            <line x1="12" y1="15" x2="12" y2="3"/>
                                        </svg>
                                    </a>`:W`<button class="workspace-download" onClick=${i0} title="Download">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                        stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                                        <polyline points="7 10 12 15 17 10"/>
                                        <line x1="12" y1="15" x2="12" y2="3"/>
                                    </svg>
                                </button>`}
                        </div>
                    </div>
                    ${e&&W`<div class="workspace-loading">Loading preview…</div>`}
                    ${y?.error&&W`<div class="workspace-error">${y.error}</div>`}
                    ${J_&&W`
                        <div class="workspace-preview-text">Folder selected — create file, upload files, or download as zip.</div>
                        ${T_?.loading&&W`<div class="workspace-loading">Loading folder size preview…</div>`}
                        ${T_?.error&&W`<div class="workspace-error">${T_.error}</div>`}
                        ${T_?.payload&&T_.payload.segments?.length>0&&W`
                            <${DZ} payload=${T_.payload} />
                        `}
                        ${T_?.payload&&(!T_.payload.segments||T_.payload.segments.length===0)&&W`
                            <div class="workspace-preview-text">No file size data available for this folder yet.</div>
                        `}
                    `}
                    ${y&&!y.error&&!J_&&W`
                        <div class="workspace-preview-body" ref=${$0}></div>
                    `}
                    ${h&&W`
                        <div class="workspace-download-card">
                            <${JZ} mediaId=${h} />
                        </div>
                    `}
                </div>
            `}
            ${X_&&W`
                <div class="workspace-drag-ghost" ref=${j$}>${X_.label}</div>
            `}
        </aside>
    `}var EZ=/\.(docx?|xlsx?|pptx?|odt|ods|odp|rtf)$/i,AZ=/\.(csv|tsv)$/i,yZ=/\.pdf$/i,kZ=/\.(png|jpe?g|gif|webp|bmp|ico|svg)$/i,q9=/\.drawio(\.xml|\.svg|\.png)?$/i;function Q9({tabs:_,activeId:$,onActivate:j,onClose:Z,onCloseOthers:N,onCloseAll:Y,onTogglePin:z,onTogglePreview:q,previewTabs:L,onToggleDock:Q,dockVisible:B,onToggleZen:X,zenMode:H}){let[M,b]=v(null),m=P(null);R(()=>{if(!M)return;let E=(S)=>{if(S.type==="keydown"&&S.key!=="Escape")return;b(null)};return document.addEventListener("click",E),document.addEventListener("keydown",E),()=>{document.removeEventListener("click",E),document.removeEventListener("keydown",E)}},[M]),R(()=>{let E=(S)=>{if(S.ctrlKey&&S.key==="Tab"){if(S.preventDefault(),!_.length)return;let s=_.findIndex((e)=>e.id===$);if(S.shiftKey){let e=_[(s-1+_.length)%_.length];j?.(e.id)}else{let e=_[(s+1)%_.length];j?.(e.id)}return}if((S.ctrlKey||S.metaKey)&&S.key==="w"){let s=document.querySelector(".editor-pane");if(s&&s.contains(document.activeElement)){if(S.preventDefault(),$)Z?.($)}}};return document.addEventListener("keydown",E),()=>document.removeEventListener("keydown",E)},[_,$,j,Z]);let g=I((E,S)=>{if(E.button===1){E.preventDefault(),Z?.(S);return}if(E.button===0)j?.(S)},[j,Z]),y=I((E,S)=>{E.preventDefault(),b({id:S,x:E.clientX,y:E.clientY})},[]),x=I((E)=>{E.preventDefault(),E.stopPropagation()},[]),h=I((E,S)=>{E.preventDefault(),E.stopPropagation(),Z?.(S)},[Z]);if(R(()=>{if(!$||!m.current)return;let E=m.current.querySelector(".tab-item.active");if(E)E.scrollIntoView({block:"nearest",inline:"nearest",behavior:"smooth"})},[$]),!_.length)return null;return W`
        <div class="tab-strip" ref=${m} role="tablist">
            ${_.map((E)=>W`
                <div
                    key=${E.id}
                    class=${`tab-item${E.id===$?" active":""}${E.dirty?" dirty":""}${E.pinned?" pinned":""}`}
                    role="tab"
                    aria-selected=${E.id===$}
                    title=${E.path}
                    onMouseDown=${(S)=>g(S,E.id)}
                    onContextMenu=${(S)=>y(S,E.id)}
                >
                    ${E.pinned&&W`
                        <span class="tab-pin-icon" aria-label="Pinned">
                            <svg viewBox="0 0 16 16" width="10" height="10" fill="currentColor">
                                <path d="M4.456.734a1.75 1.75 0 0 1 2.826.504l.613 1.327a3.1 3.1 0 0 0 2.084 1.707l2.454.584c1.332.317 1.8 1.972.832 2.94L11.06 10l3.72 3.72a.75.75 0 1 1-1.06 1.06L10 11.06l-2.204 2.205c-.968.968-2.623.5-2.94-.832l-.584-2.454a3.1 3.1 0 0 0-1.707-2.084l-1.327-.613a1.75 1.75 0 0 1-.504-2.826z"/>
                            </svg>
                        </span>
                    `}
                    <span class="tab-label">${E.label}</span>
                    <button
                        type="button"
                        class="tab-close"
                        onMouseDown=${x}
                        onClick=${(S)=>h(S,E.id)}
                        title=${E.dirty?"Unsaved changes":"Close"}
                        aria-label=${E.dirty?"Unsaved changes":`Close ${E.label}`}
                    >
                        ${E.dirty?W`<span class="tab-dirty-dot" aria-hidden="true"></span>`:W`<svg viewBox="0 0 16 16" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" aria-hidden="true" focusable="false" style=${{pointerEvents:"none"}}>
                                <line x1="4" y1="4" x2="12" y2="12" style=${{pointerEvents:"none"}}/>
                                <line x1="12" y1="4" x2="4" y2="12" style=${{pointerEvents:"none"}}/>
                            </svg>`}
                    </button>
                </div>
            `)}
            ${Q&&W`
                <div class="tab-strip-spacer"></div>
                <button
                    class=${`tab-strip-dock-toggle${B?" active":""}`}
                    onClick=${Q}
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
            ${X&&W`
                <button
                    class=${`tab-strip-zen-toggle${H?" active":""}`}
                    onClick=${X}
                    title=${`${H?"Exit":"Enter"} zen mode (Ctrl+Shift+Z)`}
                    aria-label=${`${H?"Exit":"Enter"} zen mode`}
                    aria-pressed=${H?"true":"false"}
                >
                    <svg viewBox="0 0 16 16" width="14" height="14" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                        ${H?W`<polyline points="4 8 1.5 8 1.5 1.5 14.5 1.5 14.5 8 12 8"/><polyline points="4 8 1.5 8 1.5 14.5 14.5 14.5 14.5 8 12 8"/>`:W`<polyline points="5.5 1.5 1.5 1.5 1.5 5.5"/><polyline points="10.5 1.5 14.5 1.5 14.5 5.5"/><polyline points="5.5 14.5 1.5 14.5 1.5 10.5"/><polyline points="10.5 14.5 14.5 14.5 14.5 10.5"/>`}
                    </svg>
                </button>
            `}
        </div>
        ${M&&W`
            <div class="tab-context-menu" style=${{left:M.x+"px",top:M.y+"px"}}>
                <button onClick=${()=>{Z?.(M.id),b(null)}}>Close</button>
                <button onClick=${()=>{N?.(M.id),b(null)}}>Close Others</button>
                <button onClick=${()=>{Y?.(),b(null)}}>Close All</button>
                <hr />
                <button onClick=${()=>{z?.(M.id),b(null)}}>
                    ${_.find((E)=>E.id===M.id)?.pinned?"Unpin":"Pin"}
                </button>
                ${q&&/\.(md|mdx|markdown)$/i.test(M.id)&&W`
                    <hr />
                    <button onClick=${()=>{q(M.id),b(null)}}>
                        ${L?.has(M.id)?"Hide Preview":"Preview"}
                    </button>
                `}
                ${EZ.test(M.id)&&W`
                    <hr />
                    <button onClick=${()=>{let E="/workspace/raw?path="+encodeURIComponent(M.id),S=M.id.split("/").pop()||"document",s="/office-viewer/?url="+encodeURIComponent(E)+"&name="+encodeURIComponent(S);window.open(s,"_blank","noopener"),b(null)}}>Open in New Tab</button>
                `}
                ${AZ.test(M.id)&&W`
                    <hr />
                    <button onClick=${()=>{let E="/csv-viewer/?path="+encodeURIComponent(M.id);window.open(E,"_blank","noopener"),b(null)}}>Open in New Tab</button>
                `}
                ${yZ.test(M.id)&&W`
                    <hr />
                    <button onClick=${()=>{let E="/workspace/raw?path="+encodeURIComponent(M.id);window.open(E,"_blank","noopener"),b(null)}}>Open in New Tab</button>
                `}
                ${kZ.test(M.id)&&!q9.test(M.id)&&W`
                    <hr />
                    <button onClick=${()=>{let E="/image-viewer/?path="+encodeURIComponent(M.id);window.open(E,"_blank","noopener"),b(null)}}>Open in New Tab</button>
                `}
                ${q9.test(M.id)&&W`
                    <hr />
                    <button onClick=${()=>{let E="/drawio/edit?path="+encodeURIComponent(M.id);window.open(E,"_blank","noopener"),b(null)}}>Open in New Tab</button>
                `}
            </div>
        `}
    `}var PZ=400,W3=60,X9=220,U3="mdPreviewHeight";function MZ(){try{let _=localStorage.getItem(U3),$=_?Number(_):NaN;return Number.isFinite($)&&$>=W3?$:X9}catch{return X9}}function L9({getContent:_,path:$,onClose:j}){let[Z,N]=v(""),[Y,z]=v(MZ),q=P(null),L=P(null),Q=P(""),B=P(_);return B.current=_,R(()=>{let M=()=>{let m=B.current?.()||"";if(m===Q.current)return;Q.current=m;try{let g=$$(m,null,{sanitize:!1});N(g)}catch{N('<p style="color:var(--text-secondary)">Preview unavailable</p>')}};M();let b=setInterval(M,PZ);return()=>clearInterval(b)},[]),R(()=>{if(q.current&&Z)g$(q.current).catch(()=>{})},[Z]),W`
        <div
            class="md-preview-splitter"
            onMouseDown=${(M)=>{M.preventDefault();let b=M.clientY,m=L.current?.offsetHeight||Y,g=L.current?.parentElement,y=g?g.offsetHeight*0.7:500,x=M.currentTarget;x.classList.add("dragging"),document.body.style.cursor="row-resize",document.body.style.userSelect="none";let h=(S)=>{let s=Math.min(Math.max(m-(S.clientY-b),W3),y);z(s)},E=()=>{x.classList.remove("dragging"),document.body.style.cursor="",document.body.style.userSelect="";try{localStorage.setItem(U3,String(Math.round(L.current?.offsetHeight||Y)))}catch{}document.removeEventListener("mousemove",h),document.removeEventListener("mouseup",E)};document.addEventListener("mousemove",h),document.addEventListener("mouseup",E)}}
            onTouchStart=${(M)=>{M.preventDefault();let b=M.touches[0];if(!b)return;let m=b.clientY,g=L.current?.offsetHeight||Y,y=L.current?.parentElement,x=y?y.offsetHeight*0.7:500,h=M.currentTarget;h.classList.add("dragging"),document.body.style.userSelect="none";let E=(s)=>{let e=s.touches[0];if(!e)return;s.preventDefault();let o=Math.min(Math.max(g-(e.clientY-m),W3),x);z(o)},S=()=>{h.classList.remove("dragging"),document.body.style.userSelect="";try{localStorage.setItem(U3,String(Math.round(L.current?.offsetHeight||Y)))}catch{}document.removeEventListener("touchmove",E),document.removeEventListener("touchend",S),document.removeEventListener("touchcancel",S)};document.addEventListener("touchmove",E,{passive:!1}),document.addEventListener("touchend",S),document.addEventListener("touchcancel",S)}}
        ></div>
        <div class="md-preview-panel" ref=${L} style=${{height:Y+"px"}}>
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
    `}function B9({handleSseEvent:_,handleConnectionStatusChange:$,loadPosts:j,onWake:Z,chatJid:N}){let Y=P(_);Y.current=_;let z=P($);z.current=$;let q=P(j);q.current=j;let L=P(Z);L.current=Z,R(()=>{q.current();let Q=new E1((X,H)=>Y.current(X,H),(X)=>z.current(X),{chatJid:N});Q.connect();let B=()=>{Q.reconnectIfNeeded();let X=typeof document<"u"?document:null;if(!X||X.visibilityState==="visible")L.current?.()};return window.addEventListener("focus",B),document.addEventListener("visibilitychange",B),()=>{window.removeEventListener("focus",B),document.removeEventListener("visibilitychange",B),Q.disconnect()}},[N])}function W9(){let[_,$]=v(!1),[j,Z]=v("default"),N=P(!1);R(()=>{let L=M2("notificationsEnabled",!1);if(N.current=L,$(L),typeof Notification<"u")Z(Notification.permission)},[]),R(()=>{N.current=_},[_]);let Y=I(()=>{if(typeof Notification>"u")return Promise.resolve("denied");try{let L=Notification.requestPermission();if(L&&typeof L.then==="function")return L;return Promise.resolve(L)}catch{return Promise.resolve("default")}},[]),z=I(async()=>{if(typeof window>"u"||typeof Notification>"u")return;if(!window.isSecureContext){alert("Notifications require a secure context (HTTPS or installed app).");return}if(Notification.permission==="denied"){Z("denied"),alert("Browser notifications are blocked. Enable them in your browser settings.");return}if(Notification.permission==="default"){let Q=await Y();if(Z(Q||"default"),Q!=="granted"){N.current=!1,$(!1),o_("notificationsEnabled","false");return}}let L=!N.current;N.current=L,$(L),o_("notificationsEnabled",String(L))},[Y]),q=I((L,Q)=>{if(!N.current)return!1;if(typeof Notification>"u")return!1;if(Notification.permission!=="granted")return!1;try{let B=new Notification(L,{body:Q});return B.onclick=()=>{try{window.focus()}catch{}},!0}catch{return!1}},[]);return{notificationsEnabled:_,notificationPermission:j,toggleNotifications:z,notify:q}}var Y1=(_)=>{let $=new Set;return(_||[]).filter((j)=>{if(!j||$.has(j.id))return!1;return $.add(j.id),!0})};function U9({preserveTimelineScroll:_,preserveTimelineScrollTop:$,chatJid:j=null}){let[Z,N]=v(null),[Y,z]=v(!1),q=P(!1),L=P(null),Q=P(!1),B=P(null),X=P(null),H=P(0);R(()=>{q.current=Y},[Y]),R(()=>{X.current=Z},[Z]),R(()=>{H.current+=1,X.current=null,B.current=null,Q.current=!1,q.current=!1,N(null),z(!1)},[j]);let M=I(async(g=null)=>{let y=H.current;try{if(g){let x=await G4(g,50,0,j);if(y!==H.current)return;N(x.posts),z(!1)}else{let x=await q2(10,null,j);if(y!==H.current)return;N(x.posts),z(x.has_more)}}catch(x){if(y!==H.current)return;console.error("Failed to load posts:",x)}},[j]),b=I(async()=>{let g=H.current;try{let y=await q2(10,null,j);if(g!==H.current)return;N((x)=>{if(!x||x.length===0)return y.posts;return Y1([...y.posts,...x])}),z((x)=>x||y.has_more)}catch(y){if(g!==H.current)return;console.error("Failed to refresh timeline:",y)}},[j]),m=I(async(g={})=>{let y=H.current,x=X.current;if(!x||x.length===0)return;if(Q.current)return;let{preserveScroll:h=!0,preserveMode:E="top",allowRepeat:S=!1}=g,s=(j_)=>{if(!h){j_();return}if(E==="top")$(j_);else _(j_)},o=x.slice().sort((j_,l)=>j_.id-l.id)[0]?.id;if(!Number.isFinite(o))return;if(!S&&B.current===o)return;Q.current=!0,B.current=o;try{let j_=await q2(10,o,j);if(y!==H.current)return;if(j_.posts.length>0)s(()=>{N((l)=>Y1([...j_.posts,...l||[]])),z(j_.has_more)});else z(!1)}catch(j_){if(y!==H.current)return;console.error("Failed to load more posts:",j_)}finally{if(y===H.current)Q.current=!1}},[j,_,$]);return R(()=>{L.current=m},[m]),{posts:Z,setPosts:N,hasMore:Y,setHasMore:z,hasMoreRef:q,loadPosts:M,refreshTimeline:b,loadMore:m,loadMoreRef:L,loadingMoreRef:Q,lastBeforeIdRef:B}}function O9(){let[_,$]=v(null),[j,Z]=v({text:"",totalLines:0}),[N,Y]=v(""),[z,q]=v({text:"",totalLines:0}),[L,Q]=v(null),[B,X]=v(null),[H,M]=v(null),b=P(null),m=P(0),g=P(!1),y=P(""),x=P(""),h=P(null),E=P(null),S=P(null),s=P(null),e=P(!1),o=P(!1);return{agentStatus:_,setAgentStatus:$,agentDraft:j,setAgentDraft:Z,agentPlan:N,setAgentPlan:Y,agentThought:z,setAgentThought:q,pendingRequest:L,setPendingRequest:Q,currentTurnId:B,setCurrentTurnId:X,steerQueuedTurnId:H,setSteerQueuedTurnId:M,lastAgentEventRef:b,lastSilenceNoticeRef:m,isAgentRunningRef:g,draftBufferRef:y,thoughtBufferRef:x,pendingRequestRef:h,stalledPostIdRef:E,currentTurnIdRef:S,steerQueuedTurnIdRef:s,thoughtExpandedRef:e,draftExpandedRef:o}}function F9({appShellRef:_,sidebarWidthRef:$,editorWidthRef:j,dockHeightRef:Z}){let N=P((B)=>{B.preventDefault();let X=_.current;if(!X)return;let H=B.clientX,M=$.current||280,b=B.currentTarget;b.classList.add("dragging"),X.classList.add("sidebar-resizing"),document.body.style.cursor="col-resize",document.body.style.userSelect="none";let m=H,g=(x)=>{m=x.clientX;let h=Math.min(Math.max(M+(x.clientX-H),160),600);X.style.setProperty("--sidebar-width",`${h}px`),$.current=h},y=()=>{let x=Math.min(Math.max(M+(m-H),160),600);$.current=x,b.classList.remove("dragging"),X.classList.remove("sidebar-resizing"),document.body.style.cursor="",document.body.style.userSelect="",o_("sidebarWidth",String(Math.round(x))),document.removeEventListener("mousemove",g),document.removeEventListener("mouseup",y)};document.addEventListener("mousemove",g),document.addEventListener("mouseup",y)}).current,Y=P((B)=>{B.preventDefault();let X=_.current;if(!X)return;let H=B.touches[0];if(!H)return;let M=H.clientX,b=$.current||280,m=B.currentTarget;m.classList.add("dragging"),X.classList.add("sidebar-resizing"),document.body.style.userSelect="none";let g=(x)=>{let h=x.touches[0];if(!h)return;x.preventDefault();let E=Math.min(Math.max(b+(h.clientX-M),160),600);X.style.setProperty("--sidebar-width",`${E}px`),$.current=E},y=()=>{m.classList.remove("dragging"),X.classList.remove("sidebar-resizing"),document.body.style.userSelect="",o_("sidebarWidth",String(Math.round($.current||b))),document.removeEventListener("touchmove",g),document.removeEventListener("touchend",y),document.removeEventListener("touchcancel",y)};document.addEventListener("touchmove",g,{passive:!1}),document.addEventListener("touchend",y),document.addEventListener("touchcancel",y)}).current,z=P((B)=>{B.preventDefault();let X=_.current;if(!X)return;let H=B.clientX,M=j.current||$.current||280,b=B.currentTarget;b.classList.add("dragging"),document.body.style.cursor="col-resize",document.body.style.userSelect="none";let m=H,g=(x)=>{m=x.clientX;let h=Math.min(Math.max(M+(x.clientX-H),200),800);X.style.setProperty("--editor-width",`${h}px`),j.current=h},y=()=>{let x=Math.min(Math.max(M+(m-H),200),800);j.current=x,b.classList.remove("dragging"),document.body.style.cursor="",document.body.style.userSelect="",o_("editorWidth",String(Math.round(x))),document.removeEventListener("mousemove",g),document.removeEventListener("mouseup",y)};document.addEventListener("mousemove",g),document.addEventListener("mouseup",y)}).current,q=P((B)=>{B.preventDefault();let X=_.current;if(!X)return;let H=B.touches[0];if(!H)return;let M=H.clientX,b=j.current||$.current||280,m=B.currentTarget;m.classList.add("dragging"),document.body.style.userSelect="none";let g=(x)=>{let h=x.touches[0];if(!h)return;x.preventDefault();let E=Math.min(Math.max(b+(h.clientX-M),200),800);X.style.setProperty("--editor-width",`${E}px`),j.current=E},y=()=>{m.classList.remove("dragging"),document.body.style.userSelect="",o_("editorWidth",String(Math.round(j.current||b))),document.removeEventListener("touchmove",g),document.removeEventListener("touchend",y),document.removeEventListener("touchcancel",y)};document.addEventListener("touchmove",g,{passive:!1}),document.addEventListener("touchend",y),document.addEventListener("touchcancel",y)}).current,L=P((B)=>{B.preventDefault();let X=_.current;if(!X)return;let H=B.clientY,M=Z?.current||200,b=B.currentTarget;b.classList.add("dragging"),document.body.style.cursor="row-resize",document.body.style.userSelect="none";let m=H,g=(x)=>{m=x.clientY;let h=Math.min(Math.max(M-(x.clientY-H),100),window.innerHeight*0.5);if(X.style.setProperty("--dock-height",`${h}px`),Z)Z.current=h;window.dispatchEvent(new CustomEvent("dock-resize"))},y=()=>{let x=Math.min(Math.max(M-(m-H),100),window.innerHeight*0.5);if(Z)Z.current=x;b.classList.remove("dragging"),document.body.style.cursor="",document.body.style.userSelect="",o_("dockHeight",String(Math.round(x))),window.dispatchEvent(new CustomEvent("dock-resize")),document.removeEventListener("mousemove",g),document.removeEventListener("mouseup",y)};document.addEventListener("mousemove",g),document.addEventListener("mouseup",y)}).current,Q=P((B)=>{B.preventDefault();let X=_.current;if(!X)return;let H=B.touches[0];if(!H)return;let M=H.clientY,b=Z?.current||200,m=B.currentTarget;m.classList.add("dragging"),document.body.style.userSelect="none";let g=(x)=>{let h=x.touches[0];if(!h)return;x.preventDefault();let E=Math.min(Math.max(b-(h.clientY-M),100),window.innerHeight*0.5);if(X.style.setProperty("--dock-height",`${E}px`),Z)Z.current=E;window.dispatchEvent(new CustomEvent("dock-resize"))},y=()=>{m.classList.remove("dragging"),document.body.style.userSelect="",o_("dockHeight",String(Math.round(Z?.current||b))),window.dispatchEvent(new CustomEvent("dock-resize")),document.removeEventListener("touchmove",g),document.removeEventListener("touchend",y),document.removeEventListener("touchcancel",y)};document.addEventListener("touchmove",g,{passive:!1}),document.addEventListener("touchend",y),document.addEventListener("touchcancel",y)}).current;return{handleSplitterMouseDown:N,handleSplitterTouchStart:Y,handleEditorSplitterMouseDown:z,handleEditorSplitterTouchStart:q,handleDockSplitterMouseDown:L,handleDockSplitterTouchStart:Q}}function H9({onTabClosed:_}={}){let $=P(_);$.current=_;let[j,Z]=v(()=>r_.getTabs()),[N,Y]=v(()=>r_.getActiveId()),[z,q]=v(()=>r_.getTabs().length>0);R(()=>{return r_.onChange((E,S)=>{Z(E),Y(S),q(E.length>0)})},[]);let[L,Q]=v(()=>new Set),B=I((E)=>{Q((S)=>{let s=new Set(S);if(s.has(E))s.delete(E);else s.add(E);return s})},[]),X=I((E)=>{Q((S)=>{if(!S.has(E))return S;let s=new Set(S);return s.delete(E),s})},[]),H=I((E,S={})=>{if(!E)return;let s={path:E,mode:"edit"};try{if(!e_.resolve(s)){if(!e_.get("editor")){console.warn(`[openEditor] No pane handler for: ${E}`);return}}}catch(o){console.warn(`[openEditor] paneRegistry.resolve() error for "${E}":`,o)}let e=typeof S?.label==="string"&&S.label.trim()?S.label.trim():void 0;r_.open(E,e)},[]),M=I(()=>{let E=r_.getActiveId();if(E){let S=r_.get(E);if(S?.dirty){if(!window.confirm(`"${S.label}" has unsaved changes. Close anyway?`))return}r_.close(E),X(E),$.current?.(E)}},[X]),b=I((E)=>{let S=r_.get(E);if(S?.dirty){if(!window.confirm(`"${S.label}" has unsaved changes. Close anyway?`))return}r_.close(E),X(E),$.current?.(E)},[X]),m=I((E)=>{r_.activate(E)},[]),g=I((E)=>{let S=r_.getTabs().filter((o)=>o.id!==E&&!o.pinned),s=S.filter((o)=>o.dirty).length;if(s>0){if(!window.confirm(`${s} unsaved tab${s>1?"s":""} will be closed. Continue?`))return}let e=S.map((o)=>o.id);r_.closeOthers(E),e.forEach((o)=>{X(o),$.current?.(o)})},[X]),y=I(()=>{let E=r_.getTabs().filter((e)=>!e.pinned),S=E.filter((e)=>e.dirty).length;if(S>0){if(!window.confirm(`${S} unsaved tab${S>1?"s":""} will be closed. Continue?`))return}let s=E.map((e)=>e.id);r_.closeAll(),s.forEach((e)=>{X(e),$.current?.(e)})},[X]),x=I((E)=>{r_.togglePin(E)},[]),h=I(()=>{let E=r_.getActiveId();if(E)window.dispatchEvent(new CustomEvent("workspace-reveal-path",{detail:{path:E}}))},[]);return R(()=>{let E=(S)=>{let{oldPath:s,newPath:e,type:o}=S.detail||{};if(!s||!e)return;if(o==="dir"){for(let j_ of r_.getTabs())if(j_.path===s||j_.path.startsWith(`${s}/`)){let l=`${e}${j_.path.slice(s.length)}`;r_.rename(j_.id,l)}}else r_.rename(s,e)};return window.addEventListener("workspace-file-renamed",E),()=>window.removeEventListener("workspace-file-renamed",E)},[]),R(()=>{let E=(S)=>{if(r_.hasUnsaved())S.preventDefault(),S.returnValue=""};return window.addEventListener("beforeunload",E),()=>window.removeEventListener("beforeunload",E)},[]),{editorOpen:z,tabStripTabs:j,tabStripActiveId:N,previewTabs:L,openEditor:H,closeEditor:M,handleTabClose:b,handleTabActivate:m,handleTabCloseOthers:g,handleTabCloseAll:y,handleTabTogglePin:x,handleTabTogglePreview:B,revealInExplorer:h}}function O3(_,$){try{if(typeof window>"u")return $;let j=window.__PICLAW_SILENCE||{},Z=`__PICLAW_SILENCE_${_.toUpperCase()}_MS`,N=j[_]??window[Z],Y=Number(N);return Number.isFinite(Y)?Y:$}catch{return $}}var F3=O3("warning",30000),D9=O3("finalize",120000),H3=O3("refresh",30000),J9=30000;function E9(_){let $={};return(_?.agents||[]).forEach((j)=>{$[j.id]=j}),$}function A9(){if(/iPad|iPhone/.test(navigator.userAgent))return!0;return navigator.platform==="MacIntel"&&navigator.maxTouchPoints>1}function y9(_=30000){let[,$]=v(0);R(()=>{let j=setInterval(()=>$((Z)=>Z+1),_);return()=>clearInterval(j)},[_])}function D3(_,$=160){let j=String(_||"").replace(/\r\n/g,`
`);if(!j)return 0;return j.split(`
`).reduce((Z,N)=>Z+Math.max(1,Math.ceil(N.length/$)),0)}function k9(_,$){if(typeof _!=="string")return{kind:"ignore"};let j=_.trim();if(!j)return{kind:"toast",title:"No file selected",detail:"Use a valid file path from a file pill.",level:"warning"};if(!$.editorOpen)return{kind:"toast",title:"Editor pane is not open",detail:"Open the editor pane to open files from pills.",level:"warning"};if(/^[a-z][a-z0-9+.-]*:/i.test(j))return{kind:"toast",title:"Cannot open external path from file pill",detail:"Use an in-workspace file path.",level:"warning"};try{if(!$.resolvePane({path:j,mode:"edit"}))return{kind:"toast",title:"No editor available",detail:`No editor can open: ${j}`,level:"warning"}}catch{return{kind:"toast",title:"No editor available",detail:`No editor can open: ${j}`,level:"warning"}}return{kind:"open",path:j}}function W2(_={}){let $=_.window??(typeof window<"u"?window:null),j=_.navigator??(typeof navigator<"u"?navigator:null);if(j&&j.standalone===!0)return!0;if(!$||typeof $.matchMedia!=="function")return!1;return["(display-mode: standalone)","(display-mode: minimal-ui)","(display-mode: fullscreen)"].some((N)=>{try{return Boolean($.matchMedia(N)?.matches)}catch{return!1}})}function J3(_={}){let $=_.window??(typeof window<"u"?window:null),j=_.navigator??(typeof navigator<"u"?navigator:null);if(!$&&!j)return!1;let Z=String(j?.userAgent||""),N=Number(j?.maxTouchPoints||0),Y=/Android|webOS|iPhone|iPad|iPod|Mobile|Windows Phone/i.test(Z),z=(()=>{if(!$||typeof $.matchMedia!=="function")return!1;try{return Boolean($.matchMedia("(pointer: coarse)")?.matches||$.matchMedia("(any-pointer: coarse)")?.matches)}catch{return!1}})();return Boolean(Y||N>1||z)}function P9(_,$={}){if(W2($))return null;if(J3($))return{target:"_blank",features:void 0,mode:"tab"};return{target:IZ(_),features:"popup=yes,width=900,height=960,resizable=yes,scrollbars=yes",mode:"popup"}}function M9(_,$={}){let j=$.window??(typeof window<"u"?window:null);if(!j||!_)return null;try{return _.features?j.open("about:blank",_.target,_.features):j.open("about:blank",_.target)}catch{return null}}function I9(_,$={}){if(!_||!_.document)return;try{let j=String($.title||"Opening branch…"),Z=String($.message||"Preparing a new branch window…");_.document.title=j,_.document.body.innerHTML=`
            <div style="font-family: system-ui, sans-serif; padding: 24px; color: #222;">
                <h1 style="font-size: 18px; margin: 0 0 12px;">${j}</h1>
                <p style="margin: 0; line-height: 1.5;">${Z}</p>
            </div>
        `}catch{}}function w9(_,$){if(!_||!$)return;try{if(_.location&&typeof _.location.replace==="function"){_.location.replace(String($));return}_.location=String($)}catch{}}function x9(_){if(!_||typeof _.close!=="function")return;try{_.close()}catch{}}function U2(_,$,j={}){let Z=new URL(String(_||"http://localhost/")),N=String($||"").trim()||"web:default";if(Z.searchParams.set("chat_jid",N),Z.searchParams.delete("branch_loader"),Z.searchParams.delete("branch_source_chat_jid"),j.chatOnly!==!1)Z.searchParams.set("chat_only","1");return Z.toString()}function T9(_,$,j={}){let Z=new URL(String(_||"http://localhost/")),N=String($||"").trim()||"web:default";if(Z.searchParams.set("branch_loader","1"),Z.searchParams.set("branch_source_chat_jid",N),j.chatOnly!==!1)Z.searchParams.set("chat_only","1");return Z.toString()}function IZ(_){return`piclaw-chat-${String(_||"web:default").trim().toLowerCase().replace(/[^a-z0-9_-]+/g,"-")||"default"}`}function g1(_){let $=_ instanceof Error?_.message:String(_||"").trim(),j=String($||"").trim();if(!j)return"PiClaw could not open a new branch window.";let Z=j.toLowerCase();if(Z.includes("no stable turn boundary"))return"This chat is still in flight and does not yet have a stable turn boundary to fork from.";if(Z.includes("cannot fork a branch while the source chat is still active"))return"This chat is still active. Please wait for the current turn to settle, then try again.";if(Z.includes("cancelled"))return"Branch creation was cancelled before a new chat window could be opened.";if(Z.includes("did not return a chat id"))return"PiClaw created no usable branch id for the new window. Please try again.";if(Z.includes("failed to fork branch")||Z.includes("failed to fork chat branch"))return"PiClaw could not create the new branch. Please try again.";return j}function E3(_){return String(_||"").trim()||"web:default"}function C9({remainingQueueCount:_=0,currentTurnId:$=null,isAgentTurnActive:j=!1}={}){return Number(_||0)<=0&&!$&&!j}function f9(_={}){return W2(_)&&J3(_)}function wZ(_={}){let $=_.window??(typeof window<"u"?window:null),j=Number($?.visualViewport?.height||0);if(Number.isFinite(j)&&j>0)return Math.round(j);let Z=Number($?.innerHeight||0);if(Number.isFinite(Z)&&Z>0)return Math.round(Z);return null}function xZ(_={},$={}){if(!f9(_))return null;let j=_.window??(typeof window<"u"?window:null),Z=_.document??(typeof document<"u"?document:null);if(!j||!Z?.documentElement)return null;let N=wZ({window:j});if(N&&N>0)Z.documentElement.style.setProperty("--app-height",`${N}px`);if($.resetScroll===!0){try{if(typeof j.scrollTo==="function")j.scrollTo(0,0)}catch{}try{if(Z.scrollingElement)Z.scrollingElement.scrollTop=0,Z.scrollingElement.scrollLeft=0;if(Z.documentElement)Z.documentElement.scrollTop=0,Z.documentElement.scrollLeft=0;if(Z.body)Z.body.scrollTop=0,Z.body.scrollLeft=0}catch{}}return N}function b9(_={}){if(!f9(_))return()=>{};let $=_.window??(typeof window<"u"?window:null),j=_.document??(typeof document<"u"?document:null);if(!$||!j)return()=>{};let Z=0,N=new Set,Y=()=>{if(Z)$.cancelAnimationFrame?.(Z),Z=0;for(let X of N)$.clearTimeout?.(X);N.clear()},z=()=>{Z=0,xZ({window:$,document:j})},q=()=>{if(Z)$.cancelAnimationFrame?.(Z);Z=$.requestAnimationFrame?.(z)??0},L=()=>{q();for(let X of[80,220,420]){let H=$.setTimeout?.(()=>{N.delete(H),q()},X);if(H!=null)N.add(H)}},Q=()=>{if(j.visibilityState&&j.visibilityState!=="visible")return;L()},B=$.visualViewport;return L(),$.addEventListener("focus",L),$.addEventListener("pageshow",L),$.addEventListener("resize",L),$.addEventListener("orientationchange",L),j.addEventListener("visibilitychange",Q),j.addEventListener("focusin",L,!0),B?.addEventListener?.("resize",L),B?.addEventListener?.("scroll",L),()=>{Y(),$.removeEventListener("focus",L),$.removeEventListener("pageshow",L),$.removeEventListener("resize",L),$.removeEventListener("orientationchange",L),j.removeEventListener("visibilitychange",Q),j.removeEventListener("focusin",L,!0),B?.removeEventListener?.("resize",L),B?.removeEventListener?.("scroll",L)}}function TZ(_,$){if(typeof window<"u")console.warn(`[app] API export missing: ${_}. Using fallback behavior.`);return async()=>$}function W$(_,$,j){let Z=_?.[$];return typeof Z==="function"?Z:TZ($,j)}var CZ=new Set(["extension_ui_request","extension_ui_timeout","extension_ui_notify","extension_ui_status","extension_ui_working","extension_ui_widget","extension_ui_title","extension_ui_editor_text","extension_ui_error"]);function S9(_){return CZ.has(String(_||"").trim())}function fZ(_){let $=String(_||"").trim();if(!$.startsWith("extension_ui_"))return"piclaw-extension-ui";return`piclaw-extension-ui:${$.slice(13).replace(/_/g,"-")}`}function R9(_,$,j=globalThis.window){if(!j||typeof j.dispatchEvent!=="function"||typeof CustomEvent>"u")return!1;let Z={type:_,payload:$};return j.dispatchEvent(new CustomEvent("piclaw-extension-ui",{detail:Z})),j.dispatchEvent(new CustomEvent(fZ(_),{detail:Z})),!0}var bZ=["(display-mode: standalone)","(display-mode: minimal-ui)","(display-mode: fullscreen)"];function v9(_,$={}){let j=$.window??(typeof window<"u"?window:null),Z=$.navigator??(typeof navigator<"u"?navigator:null);if(!j||typeof _!=="function")return()=>{};let N=()=>{_(W2({window:j,navigator:Z}))};N();let z=bZ.map((q)=>{try{return j.matchMedia?.(q)??null}catch{return null}}).filter(Boolean).map((q)=>{if(typeof q.addEventListener==="function")return q.addEventListener("change",N),()=>q.removeEventListener("change",N);if(typeof q.addListener==="function")return q.addListener(N),()=>q.removeListener(N);return()=>{}});return j.addEventListener?.("focus",N),j.addEventListener?.("pageshow",N),()=>{for(let q of z)q();j.removeEventListener?.("focus",N),j.removeEventListener?.("pageshow",N)}}function u9(_,$={}){let j=$.window??(typeof window<"u"?window:null),Z=$.document??(typeof document<"u"?document:null);if(!j||!Z||typeof _!=="function")return()=>{};let N=()=>{if(Z.visibilityState&&Z.visibilityState!=="visible")return;_()};return j.addEventListener?.("focus",N),j.addEventListener?.("pageshow",N),Z.addEventListener?.("visibilitychange",N),()=>{j.removeEventListener?.("focus",N),j.removeEventListener?.("pageshow",N),Z.removeEventListener?.("visibilitychange",N)}}var y3="piclaw_btw_session",SZ=900,RZ="__piclawRenameBranchPromptLock__",m9=()=>{if(typeof window>"u")return null;let _=window,$=RZ,j=_[$];if(j&&typeof j==="object")return j;let Z={inFlight:!1,cooldownUntil:0};return _[$]=Z,Z};function vZ(_){if(_==="root")return"Branch family";if(_==="all")return"All chats";return"Current branch"}function uZ(){let _=_$(y3);if(!_)return null;try{let $=JSON.parse(_);if(!$||typeof $!=="object")return null;let j=typeof $.question==="string"?$.question:"",Z=typeof $.answer==="string"?$.answer:"",N=typeof $.thinking==="string"?$.thinking:"",Y=typeof $.error==="string"&&$.error.trim()?$.error:null,z=$.status==="running"?"error":$.status==="success"||$.status==="error"?$.status:"success";return{question:j,answer:Z,thinking:N,error:z==="error"?Y||"BTW stream interrupted. You can retry.":Y,model:null,status:z}}catch{return null}}var g9=V4,p9=Q4,mZ=L4,c9=F4,h9=H4,A3=B4,p1=W$(e0,"getAgentContext",null),i9=W$(e0,"getAgentModels",{current:null,models:[]}),l9=W$(e0,"getActiveChatAgents",{chats:[]}),c1=W$(e0,"getChatBranches",{chats:[]}),gZ=W$(e0,"renameChatBranch",null),pZ=W$(e0,"pruneChatBranch",null),n9=W$(e0,"restoreChatBranch",null),d9=W$(e0,"getAgentQueueState",{count:0}),cZ=W$(e0,"steerAgentQueueItem",{removed:!1,queued:"steer"}),hZ=W$(e0,"removeAgentQueueItem",{removed:!1}),iZ=W$(e0,"streamSidePrompt",null);if(window.marked)marked.setOptions({breaks:!0,gfm:!0});e_.register(i4);e_.register(e4);e_.register(t4);e_.register(_3);e_.register($3);e_.register(j3);e_.register(N3);e_.register(Y3);e_.register(K3);l4();e_.register(o4);e_.register(r4);function lZ({locationParams:_}){let $=v_(()=>{let V=_.get("chat_jid");return V&&V.trim()?V.trim():"web:default"},[_]),j=v_(()=>{let V=(_.get("chat_only")||_.get("chat-only")||"").trim().toLowerCase();return V==="1"||V==="true"||V==="yes"},[_]),Z=v_(()=>{let V=(_.get("branch_loader")||"").trim().toLowerCase();return V==="1"||V==="true"||V==="yes"},[_]),N=v_(()=>{let V=_.get("branch_source_chat_jid");return V&&V.trim()?V.trim():$},[$,_]),[Y,z]=v("disconnected"),[q,L]=v(()=>W2()),[Q,B]=v(null),[X,H]=v(null),[M,b]=v(!1),[m,g]=v("current"),[y,x]=v([]),[h,E]=v([]),[S,s]=v(null),{agentStatus:e,setAgentStatus:o,agentDraft:j_,setAgentDraft:l,agentPlan:Q_,setAgentPlan:a_,agentThought:c_,setAgentThought:r,pendingRequest:N_,setPendingRequest:__,currentTurnId:X_,setCurrentTurnId:G_,steerQueuedTurnId:L_,setSteerQueuedTurnId:U_,lastAgentEventRef:Y_,lastSilenceNoticeRef:m_,isAgentRunningRef:T_,draftBufferRef:A_,thoughtBufferRef:y_,pendingRequestRef:G0,stalledPostIdRef:V0,currentTurnIdRef:V_,steerQueuedTurnIdRef:$_,thoughtExpandedRef:H_,draftExpandedRef:Z_}=O9(),[D_,C_]=v({}),[h_,i_]=v(null),[g_,l_]=v(null),[f_,M_]=v(!1),[k_,p_]=v(null),[Z0,M0]=v([]),[P_,A0]=v([]),[n_,b_]=v(null),[N0,_0]=v([]),[d_,Y0]=v(!1),[S_,F0]=v(()=>uZ()),[b0,E_]=v(null),$0=P(new Set),S0=v_(()=>Z0.find((V)=>V?.chat_jid===$)||null,[Z0,$]),I_=v_(()=>P_.find((V)=>V?.chat_jid===$)||S0||null,[S0,P_,$]),C=I_?.root_chat_jid||S0?.root_chat_jid||$,t=vZ(m),[O_,w_]=v(()=>({status:Z?"running":"idle",message:Z?"Preparing a new chat branch…":""})),t_=N0.length,H0=P(new Set),x_=P([]),R0=P(new Set),j$=P(0),Z$=P({inFlight:!1,lastAttemptAt:0,turnId:null});H0.current=new Set(N0.map((V)=>V.row_id)),x_.current=N0;let{notificationsEnabled:C0,notificationPermission:T$,toggleNotifications:D0,notify:l0}=W9(),[n0,v0]=v(()=>new Set),[N$,O2]=v(()=>M2("workspaceOpen",!0)),F2=P(null),{editorOpen:y0,tabStripTabs:J0,tabStripActiveId:z0,previewTabs:c0,openEditor:K0,closeEditor:I0,handleTabClose:Y$,handleTabActivate:C$,handleTabCloseOthers:e$,handleTabCloseAll:c$,handleTabTogglePin:_2,handleTabTogglePreview:d0,revealInExplorer:$2}=H9({onTabClosed:(V)=>F2.current?.(V)}),j2=P(null),z$=P(null),U$=P(null),s0=P(null),Q0=e_.getDockPanes().length>0,[s_,O$]=v(!1),E$=I(()=>O$((V)=>!V),[]),h$=I(()=>{K0(d4,{label:"Terminal"})},[K0]),H2=!j&&(y0||Q0&&s_),[J_,K$]=v(!1),A$=P(!1),f$=I(()=>{if(!y0||j)return;if(A$.current=s_,s_)O$(!1);K$(!0)},[y0,j,s_]),o0=I(()=>{if(!J_)return;if(K$(!1),A$.current)O$(!0),A$.current=!1},[J_]),b$=I(()=>{if(J_)o0();else f$()},[J_,f$,o0]);R(()=>{if(J_&&!y0)o0()},[J_,y0,o0]),R(()=>{let V=j2.current;if(!V)return;if(z$.current)z$.current.dispose(),z$.current=null;let G=z0;if(!G)return;let F={path:G,mode:"edit"},A=e_.resolve(F)||e_.get("editor");if(!A){V.innerHTML='<div style="padding:2em;color:var(--text-secondary);text-align:center;">No editor available for this file.</div>';return}let k=A.mount(V,F);z$.current=k,k.onDirtyChange?.((n)=>{r_.setDirty(G,n)}),k.onSaveRequest?.(()=>{}),k.onClose?.(()=>{I0()});let f=r_.getViewState(G);if(f&&typeof k.restoreViewState==="function")requestAnimationFrame(()=>k.restoreViewState(f));if(typeof k.onViewStateChange==="function")k.onViewStateChange((n)=>{r_.saveViewState(G,n)});return requestAnimationFrame(()=>k.focus()),()=>{if(z$.current===k)k.dispose(),z$.current=null}},[z0,I0]),R(()=>{let V=(G)=>{let F=G.detail?.path;if(F)K0(F)};return document.addEventListener("office-viewer:open-tab",V),document.addEventListener("drawio:open-tab",V),document.addEventListener("csv-viewer:open-tab",V),document.addEventListener("pdf-viewer:open-tab",V),document.addEventListener("image-viewer:open-tab",V),document.addEventListener("video-viewer:open-tab",V),()=>{document.removeEventListener("office-viewer:open-tab",V),document.removeEventListener("drawio:open-tab",V),document.removeEventListener("csv-viewer:open-tab",V),document.removeEventListener("pdf-viewer:open-tab",V),document.removeEventListener("image-viewer:open-tab",V),document.removeEventListener("video-viewer:open-tab",V)}},[K0]),R(()=>{let V=U$.current;if(s0.current)s0.current.dispose(),s0.current=null;if(!V||!Q0||!s_)return;let G=e_.getDockPanes()[0];if(!G){V.innerHTML='<div class="terminal-placeholder">No dock pane available.</div>';return}let F=G.mount(V,{mode:"view"});return s0.current=F,requestAnimationFrame(()=>F.focus?.()),()=>{if(s0.current===F)F.dispose(),s0.current=null}},[Q0,s_]);let[r0,u0]=v({name:"You",avatar_url:null,avatar_background:null}),X0=P(!1),m0=P(!1),a0=P(null),f0=P($),i$=P(new Map),t0=P($),h0=P(0),l$=P(0),Z2=P({}),S$=P({name:null,avatar_url:null}),E0=P({currentHashtag:null,searchQuery:null,searchOpen:!1}),F$=P(null),y$=P(null),k$=P(0),R$=P(0),n$=P(0),N2=P(null),i0=P(null),g0=P(null),H$=P(null),Y2=P(0),G$=P({title:null,avatarBase:null}),d$=P(null),P$=P(!1),[v$,z2]=v(!1),D2=P(0),M$=I(()=>{if(d$.current)clearTimeout(d$.current),d$.current=null;s(null)},[]);y9(30000),R(()=>{return T8()},[]),R(()=>{return v9(L)},[]),R(()=>{o_("workspaceOpen",String(N$))},[N$]),R(()=>{return b9()},[]),R(()=>{return()=>{M$()}},[M$]),R(()=>{if(!S_){o_(y3,"");return}o_(y3,JSON.stringify({question:S_.question||"",answer:S_.answer||"",thinking:S_.thinking||"",error:S_.error||null,status:S_.status||"success"}))},[S_]),R(()=>{Z2.current=D_||{}},[D_]),R(()=>{f0.current=$},[$]),R(()=>{S$.current=r0||{name:"You",avatar_url:null,avatar_background:null}},[r0]);let s$=I((V,G,F=null)=>{if(typeof document>"u")return;let A=(V||"").trim()||"PiClaw";if(G$.current.title!==A){document.title=A;let i=document.querySelector('meta[name="apple-mobile-web-app-title"]');if(i&&i.getAttribute("content")!==A)i.setAttribute("content",A);G$.current.title=A}let k=document.getElementById("dynamic-favicon");if(!k)return;let f=k.getAttribute("data-default")||k.getAttribute("href")||"/favicon.ico",n=G||f,d=G?`${n}|${F||""}`:n;if(G$.current.avatarBase!==d){let i=G?`${n}${n.includes("?")?"&":"?"}v=${F||Date.now()}`:n;k.setAttribute("href",i),G$.current.avatarBase=d}},[]),K2=I((V)=>{if(!V)return;x((G)=>G.includes(V)?G:[...G,V])},[]),I$=I((V)=>{x((G)=>G.filter((F)=>F!==V))},[]);F2.current=I$;let T2=I(()=>{x([])},[]),C2=I((V)=>{if(!Array.isArray(V)){x([]);return}let G=[],F=new Set;for(let A of V){if(typeof A!=="string"||!A.trim())continue;let k=A.trim();if(F.has(k))continue;F.add(k),G.push(k)}x(G)},[]),z_=I((V,G=null,F="info",A=3000)=>{M$(),s({title:V,detail:G||null,kind:F||"info"}),d$.current=setTimeout(()=>{s((k)=>k?.title===V?null:k)},A)},[M$]),J2=I((V)=>{let G=k9(V,{editorOpen:y0,resolvePane:(F)=>e_.resolve(F)});if(G.kind==="open"){K0(G.path);return}if(G.kind==="toast")z_(G.title,G.detail,G.level)},[y0,K0,z_]),f2=I(()=>{let V=z0;if(V)K2(V)},[z0,K2]),b2=I((V)=>{if(!V)return;E((G)=>G.includes(V)?G:[...G,V])},[]),G2=I(async(V,G=null)=>{let F=(k)=>{k.scrollIntoView({behavior:"smooth",block:"center"}),k.classList.add("post-highlight"),setTimeout(()=>k.classList.remove("post-highlight"),2000)},A=document.getElementById("post-"+V);if(A){F(A);return}try{let k=typeof G==="string"&&G.trim()?G.trim():$,n=(await q4(V,k))?.thread?.[0];if(!n)return;W0((d)=>{if(!d)return[n];if(d.some((i)=>i.id===n.id))return d;return[...d,n]}),requestAnimationFrame(()=>{setTimeout(()=>{let d=document.getElementById("post-"+V);if(d)F(d)},50)})}catch(k){console.error("[scrollToMessage] Failed to fetch message",V,k)}},[$]),S2=I((V)=>{E((G)=>G.filter((F)=>F!==V))},[]),R2=I(()=>{E([])},[]),v2=I((V)=>{if(!Array.isArray(V)){E([]);return}let G=[],F=new Set;for(let A of V){if(typeof A!=="string"||!A.trim())continue;let k=A.trim();if(F.has(k))continue;F.add(k),G.push(k)}E(G)},[]),U=I((V)=>{let G=typeof V==="string"&&V.trim()?V.trim():"Could not send your message.";z_("Compose failed",G,"error",5000)},[z_]),J=I((V={})=>{let G=Date.now();if(Y_.current=G,V.running)T_.current=!0,Y0((F)=>F?F:!0);if(V.clearSilence)m_.current=0},[Y0]),w=I(()=>{if(H$.current)clearTimeout(H$.current),H$.current=null;Y2.current=0},[]);R(()=>()=>{w()},[w]);let K=I(()=>{w(),o((V)=>{if(!V)return V;if(!(V.last_activity||V.lastActivity))return V;let{last_activity:G,lastActivity:F,...A}=V;return A})},[w]),O=I((V)=>{if(!V)return;w();let G=Date.now();Y2.current=G,o({type:V.type||"active",last_activity:!0}),H$.current=setTimeout(()=>{if(Y2.current!==G)return;o((F)=>{if(!F||!(F.last_activity||F.lastActivity))return F;return null})},J9)},[w]),D=I(()=>{T_.current=!1,Y0(!1),Y_.current=null,m_.current=0,A_.current="",y_.current="",G0.current=null,i0.current=null,V_.current=null,$_.current=null,a0.current=null,Z$.current={inFlight:!1,lastAttemptAt:0,turnId:null},w(),G_(null),U_(null),H_.current=!1,Z_.current=!1},[w,G_,U_,Y0]),T=I((V)=>{if(!C9({remainingQueueCount:V,currentTurnId:V_.current,isAgentTurnActive:d_}))return;$_.current=null,U_(null)},[d_,U_]),p=I(()=>({agentStatus:null,agentDraft:{text:"",totalLines:0},agentPlan:"",agentThought:{text:"",totalLines:0},pendingRequest:null,currentTurnId:null,steerQueuedTurnId:null,isAgentTurnActive:!1,followupQueueItems:[],activeModel:null,activeThinkingLevel:null,supportsThinking:!1,activeModelUsage:null,contextUsage:null,isAgentRunning:!1,wasAgentActive:!1,draftBuffer:"",thoughtBuffer:"",lastAgentEvent:null,lastSilenceNotice:0,lastAgentResponse:null,currentTurnIdRef:null,steerQueuedTurnIdRef:null,thoughtExpanded:!1,draftExpanded:!1,agentStatusRef:null,silentRecovery:{inFlight:!1,lastAttemptAt:0,turnId:null}}),[]),u=I(()=>({agentStatus:e,agentDraft:j_?{...j_}:{text:"",totalLines:0},agentPlan:Q_||"",agentThought:c_?{...c_}:{text:"",totalLines:0},pendingRequest:N_,currentTurnId:X_,steerQueuedTurnId:L_,isAgentTurnActive:Boolean(d_),followupQueueItems:Array.isArray(N0)?N0.map((V)=>({...V})):[],activeModel:h_,activeThinkingLevel:g_,supportsThinking:Boolean(f_),activeModelUsage:k_,contextUsage:n_,isAgentRunning:Boolean(T_.current),wasAgentActive:Boolean(m0.current),draftBuffer:A_.current||"",thoughtBuffer:y_.current||"",lastAgentEvent:Y_.current||null,lastSilenceNotice:m_.current||0,lastAgentResponse:i0.current||null,currentTurnIdRef:V_.current||null,steerQueuedTurnIdRef:$_.current||null,thoughtExpanded:Boolean(H_.current),draftExpanded:Boolean(Z_.current),agentStatusRef:a0.current||null,silentRecovery:{...Z$.current||{inFlight:!1,lastAttemptAt:0,turnId:null}}}),[h_,k_,g_,j_,Q_,e,c_,n_,X_,N0,d_,N_,L_,f_]),a=I((V)=>{let G=V||p();w(),T_.current=Boolean(G.isAgentRunning),m0.current=Boolean(G.wasAgentActive),Y0(Boolean(G.isAgentTurnActive)),Y_.current=G.lastAgentEvent||null,m_.current=Number(G.lastSilenceNotice||0),A_.current=G.draftBuffer||"",y_.current=G.thoughtBuffer||"",G0.current=G.pendingRequest||null,i0.current=G.lastAgentResponse||null,V_.current=G.currentTurnIdRef||null,$_.current=G.steerQueuedTurnIdRef||null,a0.current=G.agentStatusRef||null,Z$.current=G.silentRecovery||{inFlight:!1,lastAttemptAt:0,turnId:null},H_.current=Boolean(G.thoughtExpanded),Z_.current=Boolean(G.draftExpanded),o(G.agentStatus||null),l(G.agentDraft?{...G.agentDraft}:{text:"",totalLines:0}),a_(G.agentPlan||""),r(G.agentThought?{...G.agentThought}:{text:"",totalLines:0}),__(G.pendingRequest||null),G_(G.currentTurnId||null),U_(G.steerQueuedTurnId||null),_0(Array.isArray(G.followupQueueItems)?G.followupQueueItems.map((F)=>({...F})):[]),i_(G.activeModel||null),l_(G.activeThinkingLevel||null),M_(Boolean(G.supportsThinking)),p_(G.activeModelUsage??null),b_(G.contextUsage??null)},[w,p,G_,_0,Y0,U_]),B_=I((V)=>{if(!V)return;if(V_.current===V)return;V_.current=V,Z$.current={inFlight:!1,lastAttemptAt:0,turnId:V},G_(V),$_.current=null,U_(null),A_.current="",y_.current="",l({text:"",totalLines:0}),a_(""),r({text:"",totalLines:0}),__(null),G0.current=null,i0.current=null,H_.current=!1,Z_.current=!1},[G_,U_]),k0=I((V)=>{if(typeof document<"u"){let i=typeof document.hasFocus==="function"?document.hasFocus():!0;if(!document.hidden&&i)return}let G=i0.current;if(!G||!G.post)return;if(V&&G.turnId&&G.turnId!==V)return;let F=G.post;if(F.id&&N2.current===F.id)return;let A=String(F?.data?.content||"").trim();if(!A)return;N2.current=F.id||N2.current,i0.current=null;let k=A.replace(/\s+/g," ").slice(0,200),f=Z2.current||{},d=(F?.data?.agent_id?f[F.data.agent_id]:null)?.name||"Pi";l0(d,k)},[l0]),F_=I(async(V,G)=>{if(V!=="thought"&&V!=="draft")return;let F=V_.current;if(V==="thought"){if(H_.current=G,F)try{await h9(F,"thought",G)}catch(A){console.warn("Failed to update thought visibility:",A)}if(!G)return;try{let A=F?await c9(F,"thought"):null;if(A?.text)y_.current=A.text;r((k)=>({...k||{text:"",totalLines:0},fullText:y_.current||k?.fullText||"",totalLines:Number.isFinite(A?.total_lines)?A.total_lines:k?.totalLines||0}))}catch(A){console.warn("Failed to fetch full thought:",A)}return}if(Z_.current=G,F)try{await h9(F,"draft",G)}catch(A){console.warn("Failed to update draft visibility:",A)}if(!G)return;try{let A=F?await c9(F,"draft"):null;if(A?.text)A_.current=A.text;l((k)=>({...k||{text:"",totalLines:0},fullText:A_.current||k?.fullText||"",totalLines:Number.isFinite(A?.total_lines)?A.total_lines:k?.totalLines||0}))}catch(A){console.warn("Failed to fetch full draft:",A)}},[]),D$=P(null),w$=I(()=>{let V=F$.current;if(!V)return;if(!(Math.abs(V.scrollTop)>150))V.scrollTop=0},[]);D$.current=w$;let E2=I((V)=>{let G=F$.current;if(!G||typeof V!=="function"){V?.();return}let{currentHashtag:F,searchQuery:A,searchOpen:k}=E0.current||{},f=!((A||k)&&!F),n=f?G.scrollHeight-G.scrollTop:G.scrollTop;V(),requestAnimationFrame(()=>{let d=F$.current;if(!d)return;if(f){let i=Math.max(d.scrollHeight-n,0);d.scrollTop=i}else{let i=Math.max(d.scrollHeight-d.clientHeight,0),c=Math.min(n,i);d.scrollTop=c}})},[]),V$=I((V)=>{let G=F$.current;if(!G||typeof V!=="function"){V?.();return}let F=G.scrollTop;V(),requestAnimationFrame(()=>{let A=F$.current;if(!A)return;let k=Math.max(A.scrollHeight-A.clientHeight,0);A.scrollTop=Math.min(F,k)})},[]),h1="Queued as a follow-up (one-at-a-time).",V2="⁣",w0=I((V)=>{if(!V||!Array.isArray(V))return V;let G=H0.current,F=new Set(G),A=V.filter((k)=>{if(F.has(k?.id))return!1;if(k?.data?.is_bot_message){let f=k?.data?.content;if(f===h1||f===V2)return!1}return!0});return A.length===V.length?V:A},[]),{posts:u$,setPosts:W0,hasMore:i1,setHasMore:A2,hasMoreRef:o$,loadPosts:q0,refreshTimeline:L0,loadMore:k3,loadMoreRef:u2}=U9({preserveTimelineScroll:E2,preserveTimelineScrollTop:V$,chatJid:$}),y2=v_(()=>w0(u$),[u$,N0,w0]),z1=I(()=>{let V=V0.current;if(!V)return;W0((G)=>G?G.filter((F)=>F.id!==V):G),V0.current=null},[W0]),{handleSplitterMouseDown:s9,handleSplitterTouchStart:o9,handleEditorSplitterMouseDown:r9,handleEditorSplitterTouchStart:a9,handleDockSplitterMouseDown:t9,handleDockSplitterTouchStart:e9}=F9({appShellRef:y$,sidebarWidthRef:k$,editorWidthRef:R$,dockHeightRef:n$}),P3=I(()=>{if(!T_.current)return;T_.current=!1,m_.current=0,Y_.current=null,V_.current=null,G_(null),H_.current=!1,Z_.current=!1;let V=(A_.current||"").trim();if(A_.current="",y_.current="",l({text:"",totalLines:0}),a_(""),r({text:"",totalLines:0}),__(null),G0.current=null,i0.current=null,!V){o({type:"error",title:"Response stalled - No content received"});return}let F=`${V}${`

⚠️ Response may be incomplete - the model stopped responding`}`,A=Date.now(),k=new Date().toISOString(),f={id:A,timestamp:k,data:{type:"agent_response",content:F,agent_id:"default",is_local_stall:!0}};V0.current=A,W0((n)=>n?Y1([...n,f]):[f]),D$.current?.(),o(null)},[G_]);R(()=>{E0.current={currentHashtag:Q,searchQuery:X,searchOpen:M}},[Q,X,M]);let R_=I(()=>{let V=++j$.current,G=$;d9(G).then((F)=>{if(V!==j$.current)return;if(f0.current!==G)return;let A=R0.current,k=Array.isArray(F?.items)?F.items.map((f)=>({...f})).filter((f)=>!A.has(f.row_id)):[];if(k.length){_0((f)=>{if(f.length===k.length&&f.every((n,d)=>n.row_id===k[d].row_id))return f;return k});return}A.clear(),T(0),_0((f)=>f.length===0?f:[])}).catch(()=>{if(V!==j$.current)return;if(f0.current!==G)return;_0((F)=>F.length===0?F:[])})},[T,$,_0]),q$=I(async()=>{let V=$;try{let G=await p1(V);if(f0.current!==V)return;if(G)b_(G)}catch(G){if(f0.current!==V)return;console.warn("Failed to fetch agent context:",G)}},[$]),Q$=I(async()=>{let V=$;try{let G=await A3(V);if(f0.current!==V)return null;if(!G||G.status!=="active"||!G.data){if(m0.current){let{currentHashtag:k,searchQuery:f,searchOpen:n}=E0.current||{};if(!k&&!f&&!n)L0()}return m0.current=!1,D(),a0.current=null,o(null),l({text:"",totalLines:0}),a_(""),r({text:"",totalLines:0}),__(null),G0.current=null,G??null}m0.current=!0;let F=G.data;a0.current=F;let A=F.turn_id||F.turnId;if(A)B_(A);if(J({running:!0,clearSilence:!0}),K(),o(F),G.thought&&G.thought.text)r((k)=>{if(k&&k.text&&k.text.length>=G.thought.text.length)return k;return y_.current=G.thought.text,{text:G.thought.text,totalLines:G.thought.totalLines||0}});if(G.draft&&G.draft.text)l((k)=>{if(k&&k.text&&k.text.length>=G.draft.text.length)return k;return A_.current=G.draft.text,{text:G.draft.text,totalLines:G.draft.totalLines||0}});return G}catch(G){return console.warn("Failed to fetch agent status:",G),null}},[D,K,J,L0,B_]),l1=I(async()=>{if(!T_.current)return null;if(G0.current)return null;let V=V_.current||null,G=Z$.current,F=Date.now();if(G.inFlight)return null;if(G.turnId===V&&F-G.lastAttemptAt<H3)return null;G.inFlight=!0,G.lastAttemptAt=F,G.turnId=V;try{let{currentHashtag:A,searchQuery:k,searchOpen:f}=E0.current||{};if(!A&&!k&&!f)await L0();return await R_(),await Q$()}finally{G.inFlight=!1}},[Q$,R_,L0]);R(()=>{let V=Math.min(1000,Math.max(100,Math.floor(F3/2))),G=setInterval(()=>{if(!T_.current)return;if(G0.current)return;let F=Y_.current;if(!F)return;let A=Date.now(),k=A-F,f=e2(a0.current);if(k>=D9){if(!f)o({type:"waiting",title:"Re-syncing after a quiet period…"});l1();return}if(k>=F3){if(A-m_.current>=H3){if(!f){let n=Math.floor(k/1000);o({type:"waiting",title:`Waiting for model… No events for ${n}s`})}m_.current=A,l1()}}},V);return()=>clearInterval(G)},[l1]);let _5=I((V)=>{if(z(V),V!=="connected"){o(null),l({text:"",totalLines:0}),a_(""),r({text:"",totalLines:0}),__(null),G0.current=null,D();return}if(!X0.current){X0.current=!0;let{currentHashtag:k,searchQuery:f,searchOpen:n}=E0.current||{};if(!k&&!f&&!n)L0();Q$(),R_(),q$();return}let{currentHashtag:G,searchQuery:F,searchOpen:A}=E0.current;if(!G&&!F&&!A)L0();Q$(),R_(),q$()},[D,L0,Q$,R_,q$]),$5=I(async(V)=>{B(V),W0(null),await q0(V)},[q0]),j5=I(async()=>{B(null),H(null),W0(null),await q0()},[q0]),Z5=I(async(V,G=m)=>{if(!V||!V.trim())return;let F=G==="root"||G==="all"?G:"current";g(F),H(V.trim()),B(null),W0(null);try{let A=await g9(V.trim(),50,0,$,F,C);W0(A.results),A2(!1)}catch(A){console.error("Failed to search:",A),W0([])}},[$,C,m]),N5=I(()=>{b(!0),H(null),B(null),g("current"),W0([])},[]),Y5=I(()=>{b(!1),H(null),q0()},[q0]),dZ=I(()=>{},[]),n1=!Q&&!X&&!M,z5=I(async(V)=>{if(!V)return;let G=V.id,F=typeof V?.chat_jid==="string"&&V.chat_jid.trim()?V.chat_jid.trim():$,A=y2?.filter((f)=>f?.data?.thread_id===G&&f?.id!==G).length||0;if(A>0){if(!window.confirm(`Delete this message and its ${A} replies?`))return}let k=(f)=>{if(!f.length)return;v0((d)=>{let i=new Set(d);return f.forEach((c)=>i.add(c)),i}),setTimeout(()=>{if(V$(()=>{W0((d)=>d?d.filter((i)=>!f.includes(i.id)):d)}),v0((d)=>{let i=new Set(d);return f.forEach((c)=>i.delete(c)),i}),o$.current)u2.current?.({preserveScroll:!0,preserveMode:"top"})},180)};try{let f=await p9(G,A>0,F);if(f?.ids?.length)k(f.ids)}catch(f){let n=f?.message||"";if(A===0&&n.includes("Replies exist")){if(!window.confirm("Delete this message and its replies?"))return;let i=await p9(G,!0,F);if(i?.ids?.length)k(i.ids);return}console.error("Failed to delete post:",f),alert(`Failed to delete message: ${n}`)}},[$,y2,V$]),M3=I(async()=>{try{let V=await mZ();C_(E9(V));let G=V?.user||{};u0((A)=>{let k=typeof G.name==="string"&&G.name.trim()?G.name.trim():"You",f=typeof G.avatar_url==="string"?G.avatar_url.trim():null,n=typeof G.avatar_background==="string"&&G.avatar_background.trim()?G.avatar_background.trim():null;if(A.name===k&&A.avatar_url===f&&A.avatar_background===n)return A;return{name:k,avatar_url:f,avatar_background:n}});let F=(V?.agents||[]).find((A)=>A.id==="default");s$(F?.name,F?.avatar_url)}catch(V){console.warn("Failed to load agents:",V)}try{let V=$,G=await p1(V);if(f0.current!==V)return;if(G)b_(G)}catch{}},[s$,$]);R(()=>{M3();let V=I2("sidebarWidth",null),G=Number.isFinite(V)?Math.min(Math.max(V,160),600):280;if(k$.current=G,y$.current)y$.current.style.setProperty("--sidebar-width",`${G}px`)},[M3]);let m2=d_||e!==null,I3=I((V)=>{if(!V||typeof V!=="object")return;let G=V.agent_id;if(!G)return;let{agent_name:F,agent_avatar:A}=V;if(!F&&A===void 0)return;let k=Z2.current?.[G]||{id:G},f=k.name||null,n=k.avatar_url??k.avatarUrl??k.avatar??null,d=!1,i=!1;if(F&&F!==k.name)f=F,i=!0;if(A!==void 0){let c=typeof A==="string"?A.trim():null,K_=typeof n==="string"?n.trim():null,W_=c||null;if(W_!==(K_||null))n=W_,d=!0}if(!i&&!d)return;if(C_((c)=>{let W_={...c[G]||{id:G}};if(i)W_.name=f;if(d)W_.avatar_url=n;return{...c,[G]:W_}}),G==="default")s$(f,n,d?Date.now():null)},[s$]),w3=I((V)=>{if(!V||typeof V!=="object")return;let G=V.user_name??V.userName,F=V.user_avatar??V.userAvatar,A=V.user_avatar_background??V.userAvatarBackground;if(G===void 0&&F===void 0&&A===void 0)return;u0((k)=>{let f=typeof G==="string"&&G.trim()?G.trim():k.name||"You",n=F===void 0?k.avatar_url:typeof F==="string"&&F.trim()?F.trim():null,d=A===void 0?k.avatar_background:typeof A==="string"&&A.trim()?A.trim():null;if(k.name===f&&k.avatar_url===n&&k.avatar_background===d)return k;return{name:f,avatar_url:n,avatar_background:d}})},[]),d1=I((V)=>{if(!V||typeof V!=="object")return;let G=V.model??V.current;if(G!==void 0)i_(G);if(V.thinking_level!==void 0)l_(V.thinking_level??null);if(V.supports_thinking!==void 0)M_(Boolean(V.supports_thinking));if(V.provider_usage!==void 0)p_(V.provider_usage??null)},[]),g2=I(()=>{let V=$;i9(V).then((G)=>{if(f0.current!==V)return;if(G)d1(G)}).catch(()=>{})},[d1,$]),x0=I(()=>{let V=$,G=(F)=>Array.isArray(F)?F.filter((A)=>A&&typeof A.chat_jid==="string"&&typeof A.agent_name==="string"&&A.agent_name.trim()):[];Promise.all([l9().catch(()=>({chats:[]})),c1(null,{includeArchived:!0}).catch(()=>({chats:[]}))]).then(([F,A])=>{if(f0.current!==V)return;let k=G(F?.chats),f=G(A?.chats);if(f.length===0){M0(k);return}let n=new Map(k.map((i)=>[i.chat_jid,i])),d=f.map((i)=>{let c=n.get(i.chat_jid);return c?{...i,...c,is_active:c.is_active??i.is_active}:i});d.sort((i,c)=>{if(i.chat_jid===V&&c.chat_jid!==V)return-1;if(c.chat_jid===V&&i.chat_jid!==V)return 1;let K_=Boolean(i.archived_at),W_=Boolean(c.archived_at);if(K_!==W_)return K_?1:-1;if(Boolean(i.is_active)!==Boolean(c.is_active))return i.is_active?-1:1;return String(i.chat_jid).localeCompare(String(c.chat_jid))}),M0(d)}).catch(()=>{if(f0.current!==V)return;M0([])})},[$]),P0=I(()=>{c1(C).then((V)=>{let G=Array.isArray(V?.chats)?V.chats.filter((F)=>F&&typeof F.chat_jid==="string"&&typeof F.agent_name==="string"):[];A0(G)}).catch(()=>{})},[C]),K5=I((V)=>{let G=V?.row_id;if(G==null)return;R0.current.add(G),_0((F)=>F.filter((A)=>A?.row_id!==G)),cZ(G,E3($)).then(()=>{R_()}).catch((F)=>{console.warn("[queue] Failed to steer queued item:",F),z_("Failed to steer message","The queued message could not be sent as steering.","warning"),R0.current.delete(G),R_()})},[$,R_,_0,z_]),G5=I((V)=>{let G=V?.row_id;if(G==null)return;let F=x_.current.filter((A)=>A?.row_id!==G).length;R0.current.add(G),T(F),_0((A)=>A.filter((k)=>k?.row_id!==G)),hZ(G,E3($)).then(()=>{R_()}).catch((A)=>{console.warn("[queue] Failed to remove queued item:",A),z_("Failed to remove message","The queued message could not be removed.","warning"),R0.current.delete(G),R_()})},[T,$,R_,_0,z_]),p2=I((V)=>{if(!V||typeof V!=="object")return;if(x0(),P0(),V?.queued==="followup"||V?.queued==="steer"){R_();return}let G=V?.command;if(G&&typeof G==="object"&&(G?.queued_followup||G?.queued_steer))R_()},[x0,P0,R_]),s1=I(()=>{if(g0.current)g0.current.abort(),g0.current=null;F0(null)},[]),K1=I(async(V)=>{let G=String(V||"").trim();if(!G)return z_("BTW needs a question","Usage: /btw <question>","warning"),!0;if(g0.current)g0.current.abort();let F=new AbortController;g0.current=F,F0({question:G,answer:"",thinking:"",error:null,model:null,status:"running"});try{let A=await iZ(G,{signal:F.signal,chatJid:p8($),systemPrompt:"Answer the user briefly and directly. This is a side conversation that should not affect the main chat until explicitly injected.",onEvent:(k,f)=>{if(k==="side_prompt_start")F0((n)=>n?{...n,status:"running"}:n)},onThinkingDelta:(k)=>{F0((f)=>f?{...f,thinking:`${f.thinking||""}${k||""}`}:f)},onTextDelta:(k)=>{F0((f)=>f?{...f,answer:`${f.answer||""}${k||""}`}:f)}});if(g0.current!==F)return!0;F0((k)=>k?{...k,answer:A?.result||k.answer||"",thinking:A?.thinking||k.thinking||"",model:A?.model||null,status:"success",error:null}:k)}catch(A){if(F.signal.aborted)return!0;F0((k)=>k?{...k,status:"error",error:A?.payload?.error||A?.message||"BTW request failed."}:k)}finally{if(g0.current===F)g0.current=null}return!0},[$,z_]),V5=I(async({content:V})=>{let G=g8(V);if(!G)return!1;if(G.type==="help")return z_("BTW usage","Use /btw <question> to open a side conversation.","info",4000),!0;if(G.type==="clear")return s1(),z_("BTW cleared","Closed the side conversation panel.","info"),!0;if(G.type==="ask")return await K1(G.question),!0;return!1},[s1,K1,z_]),q5=I(()=>{if(S_?.question)K1(S_.question)},[S_,K1]),Q5=I(async()=>{let V=i8(S_);if(!V)return;try{let G=await Q2("default",V,null,[],m2?"queue":null,$);p2(G),z_(G?.queued==="followup"?"BTW queued":"BTW injected",G?.queued==="followup"?"The BTW summary was queued as a follow-up because the agent is busy.":"The BTW summary was sent to the main chat.","info",3500)}catch(G){z_("BTW inject failed",G?.message||"Could not inject BTW answer into chat.","warning")}},[S_,p2,m2,z_]),x3=I(async(V=null)=>{let[G,F,A,k,f,n,d]=await Promise.allSettled([A3($),p1($),d9($),i9($),l9(),c1(C),q2(20,null,$)]),i=G.status==="fulfilled"?G.value:null,c=F.status==="fulfilled"?F.value:null,K_=A.status==="fulfilled"?A.value:null,W_=k.status==="fulfilled"?k.value:null,p0=f.status==="fulfilled"?f.value:null,B0=n.status==="fulfilled"?n.value:null,x$=d.status==="fulfilled"?d.value:null,X$=Array.isArray(x$?.posts)?x$.posts:Array.isArray(u$)?u$:[],b3=X$.length?X$[X$.length-1]:null,D5=X$.filter((a1)=>a1?.data?.is_bot_message).length,J5=X$.filter((a1)=>!a1?.data?.is_bot_message).length,S3=Number(K_?.count??x_.current.length??0)||0,R3=Array.isArray(p0?.chats)?p0.chats.length:Z0.length,E5=Array.isArray(B0?.chats)?B0.chats.length:P_.length,v3=Number(c?.percent??n_?.percent??0)||0,A5=Number(c?.tokens??n_?.tokens??0)||0,y5=Number(c?.contextWindow??n_?.contextWindow??0)||0,k5=W_?.current??h_??null,P5=W_?.thinking_level??g_??null,M5=W_?.supports_thinking??f_,I5=i?.status||(d_?"active":"idle"),w5=i?.data?.type||i?.type||null;return{generatedAt:new Date().toISOString(),request:V,chat:{currentChatJid:$,rootChatJid:C,activeChats:R3,branches:E5},agent:{status:I5,phase:w5,running:Boolean(d_)},model:{current:k5,thinkingLevel:P5,supportsThinking:Boolean(M5)},context:{tokens:A5,contextWindow:y5,percent:v3},queue:{count:S3},timeline:{loadedPosts:X$.length,botPosts:D5,userPosts:J5,latestPostId:b3?.id??null,latestTimestamp:b3?.timestamp??null},bars:[{key:"context",label:"Context",value:Math.max(0,Math.min(100,Math.round(v3)))},{key:"queue",label:"Queue",value:Math.max(0,Math.min(100,S3*18))},{key:"activeChats",label:"Active chats",value:Math.max(0,Math.min(100,R3*12))},{key:"posts",label:"Timeline load",value:Math.max(0,Math.min(100,X$.length*5))}]}},[Z0,h_,g_,n_,P_,$,C,d_,u$,f_]),c2=I(()=>{g2(),x0(),P0(),R_(),q$()},[g2,x0,P0,R_,q$]);R(()=>{c2();let V=setInterval(()=>{g2(),x0(),P0(),R_()},60000);return()=>clearInterval(V)},[c2,g2,x0,P0,R_]),R(()=>{P0()},[P0]),R(()=>{let V=!1;W0(null);let G=()=>{if(V)return;requestAnimationFrame(()=>{if(V)return;w$()})};if(Q)return q0(Q),()=>{V=!0};if(X)return g9(X,50,0,$,m,C).then((F)=>{if(V)return;W0(F.results),A2(!1)}).catch((F)=>{if(V)return;console.error("Failed to search:",F),W0([]),A2(!1)}),()=>{V=!0};return q0().then(()=>{G()}).catch((F)=>{if(V)return;console.error("Failed to load timeline:",F)}),()=>{V=!0}},[$,Q,X,m,C,q0,w$,A2,W0]),R(()=>{let V=t0.current||$;i$.current.set(V,u())},[$,u]),R(()=>{let V=t0.current||$;if(V===$)return;i$.current.set(V,u()),t0.current=$,R0.current.clear(),a(i$.current.get($)||null),R_(),Q$(),q$()},[$,Q$,q$,R_,a,u]);let X5=I(()=>{let{currentHashtag:V,searchQuery:G,searchOpen:F}=E0.current||{};if(!V&&!G&&!F)L0();c2()},[c2,L0]),h2=I((V,G="streaming")=>{let F=o8({...V,...V&&V.status?{}:{status:G}});if(!F)return;let A=T0(F);if(A&&$0.current.has(A))return;E_((k)=>{let f=T0(k),n=Boolean(A&&f&&A===f),d={...n&&k?.artifact?k.artifact:{},...F.artifact||{}};return{...n&&k?k:{},...F,artifact:d,source:"live",originChatJid:F.originChatJid||$,openedAt:n&&k?.openedAt?k.openedAt:new Date().toISOString(),liveUpdatedAt:new Date().toISOString()}})},[$]),o1=I((V,G)=>{let F=G?.turn_id,A=typeof G?.chat_jid==="string"&&G.chat_jid.trim()?G.chat_jid.trim():null,f=A?A===$:V==="connected"||V==="workspace_update";if(f)I3(G),w3(G);if(V==="ui_theme"){C8(G);return}if(V==="generated_widget_open"){if(!f)return;if(F&&!V_.current)B_(F);h2(G,"loading");return}if(V==="generated_widget_delta"){if(!f)return;if(F&&!V_.current)B_(F);h2(G,"streaming");return}if(V==="generated_widget_final"){if(!f)return;if(F&&!V_.current)B_(F);h2(G,"final");return}if(V==="generated_widget_error"){if(!f)return;h2(G,"error");return}if(V==="generated_widget_close"){if(!f)return;let c=T0(G);E_((K_)=>{if(!K_||K_?.source!=="live")return K_;let W_=T0(K_);if(c&&W_&&c!==W_)return K_;return null});return}if(V?.startsWith("agent_")){if(!(V==="agent_draft_delta"||V==="agent_thought_delta"||V==="agent_draft"||V==="agent_thought"))K()}if(V==="connected"){o(null),l({text:"",totalLines:0}),a_(""),r({text:"",totalLines:0}),__(null),G0.current=null,D();let c=$;A3(c).then((B0)=>{if(f0.current!==c)return;if(!B0||B0.status!=="active"||!B0.data)return;let x$=B0.data,X$=x$.turn_id||x$.turnId;if(X$)B_(X$);if(J({clearSilence:!0}),O(x$),B0.thought&&B0.thought.text)y_.current=B0.thought.text,r({text:B0.thought.text,totalLines:B0.thought.totalLines||0});if(B0.draft&&B0.draft.text)A_.current=B0.draft.text,l({text:B0.draft.text,totalLines:B0.draft.totalLines||0})}).catch((B0)=>{console.warn("Failed to fetch agent status:",B0)});let{currentHashtag:K_,searchQuery:W_,searchOpen:p0}=E0.current||{};if(!K_&&!W_&&!p0)L0();c2();return}if(V==="agent_status"){if(!f){if(G?.type==="done"||G?.type==="error")x0(),P0();return}if(G.type==="done"||G.type==="error"){if(F&&V_.current&&F!==V_.current)return;if(G.type==="done"){k0(F||V_.current);let{currentHashtag:c,searchQuery:K_,searchOpen:W_}=E0.current||{};if(!c&&!K_&&!W_)L0();if(G.context_usage)b_(G.context_usage)}if(m0.current=!1,D(),R0.current.clear(),x0(),R_(),l({text:"",totalLines:0}),a_(""),r({text:"",totalLines:0}),__(null),G.type==="error")o({type:"error",title:G.title||"Agent error"}),setTimeout(()=>o(null),8000);else o(null)}else{if(F)B_(F);if(J({running:!0,clearSilence:!0}),G.type==="thinking")A_.current="",y_.current="",l({text:"",totalLines:0}),a_(""),r({text:"",totalLines:0});a0.current=G,o((c)=>{if(c&&c.type===G.type&&c.title===G.title)return c;return G})}return}if(V==="agent_steer_queued"){if(!f)return;if(F&&V_.current&&F!==V_.current)return;let c=F||V_.current;if(!c)return;$_.current=c,U_(c);return}if(V==="agent_followup_queued"){if(!f)return;let c=G?.row_id,K_=G?.content;if(c!=null&&typeof K_==="string"&&K_.trim())_0((W_)=>{if(W_.some((p0)=>p0?.row_id===c))return W_;return[...W_,{row_id:c,content:K_,timestamp:G?.timestamp||null,thread_id:G?.thread_id??null}]});R_();return}if(V==="agent_followup_consumed"){if(!f)return;let c=G?.row_id;if(c!=null){let B0=x_.current.filter((x$)=>x$.row_id!==c).length;T(B0),_0((x$)=>x$.filter((X$)=>X$.row_id!==c))}R_();let{currentHashtag:K_,searchQuery:W_,searchOpen:p0}=E0.current||{};if(!K_&&!W_&&!p0)L0();return}if(V==="agent_followup_removed"){if(!f)return;let c=G?.row_id;if(c!=null){let K_=x_.current.filter((W_)=>W_.row_id!==c).length;R0.current.add(c),T(K_),_0((W_)=>W_.filter((p0)=>p0.row_id!==c))}R_();return}if(V==="agent_draft_delta"){if(!f)return;if(F&&V_.current&&F!==V_.current)return;if(F&&!V_.current)B_(F);if(J({running:!0,clearSilence:!0}),G?.reset)A_.current="";if(G?.delta)A_.current+=G.delta;let c=Date.now();if(!h0.current||c-h0.current>=100){h0.current=c;let K_=A_.current,W_=D3(K_);if(Z_.current)l((p0)=>({text:p0?.text||"",totalLines:W_,fullText:K_}));else l({text:K_,totalLines:W_})}return}if(V==="agent_draft"){if(!f)return;if(F&&V_.current&&F!==V_.current)return;if(F&&!V_.current)B_(F);J({running:!0,clearSilence:!0});let c=G.text||"",K_=G.mode||(G.kind==="plan"?"replace":"append"),W_=Number.isFinite(G.total_lines)?G.total_lines:c?c.replace(/\r\n/g,`
`).split(`
`).length:0;if(G.kind==="plan")if(K_==="replace")a_(c);else a_((p0)=>(p0||"")+c);else if(!Z_.current)A_.current=c,l({text:c,totalLines:W_});return}if(V==="agent_thought_delta"){if(!f)return;if(F&&V_.current&&F!==V_.current)return;if(F&&!V_.current)B_(F);if(J({running:!0,clearSilence:!0}),G?.reset)y_.current="";if(typeof G?.delta==="string")y_.current+=G.delta;let c=Date.now();if(H_.current&&(!l$.current||c-l$.current>=100)){l$.current=c;let K_=y_.current;r((W_)=>({text:W_?.text||"",totalLines:D3(K_),fullText:K_}))}return}if(V==="agent_thought"){if(!f)return;if(F&&V_.current&&F!==V_.current)return;if(F&&!V_.current)B_(F);J({running:!0,clearSilence:!0});let c=G.text||"",K_=Number.isFinite(G.total_lines)?G.total_lines:c?c.replace(/\r\n/g,`
`).split(`
`).length:0;if(!H_.current)y_.current=c,r({text:c,totalLines:K_});return}if(V==="model_changed"){if(!f)return;if(G?.model!==void 0)i_(G.model);if(G?.thinking_level!==void 0)l_(G.thinking_level??null);if(G?.supports_thinking!==void 0)M_(Boolean(G.supports_thinking));let c=$;p1(c).then((K_)=>{if(f0.current!==c)return;if(K_)b_(K_)}).catch(()=>{});return}if(V==="workspace_update"){if(typeof window<"u")window.dispatchEvent(new CustomEvent("workspace-update",{detail:G}));return}if(S9(V)){if(!f)return;if(R9(V,G),V==="extension_ui_notify"&&typeof G?.message==="string")z_(G.message,null,G?.type||"info");if(V==="extension_ui_error"&&typeof G?.error==="string")z_("Extension UI error",G.error,"error",5000);return}let{currentHashtag:n,searchQuery:d,searchOpen:i}=E0.current;if(V==="agent_response"){if(!f)return;z1(),i0.current={post:G,turnId:V_.current}}if(!n&&!d&&!i&&f&&(V==="new_post"||V==="new_reply"||V==="agent_response"))W0((c)=>{if(!c)return[G];if(c.some((K_)=>K_.id===G.id))return c;return[...c,G]}),D$.current?.();if(V==="interaction_updated"){if(!f)return;if(n||d||i)return;W0((c)=>{if(!c)return c;if(!c.some((K_)=>K_.id===G.id))return c;return c.map((K_)=>K_.id===G.id?G:K_)})}if(V==="interaction_deleted"){if(!f)return;if(n||d||i)return;let c=G?.ids||[];if(c.length){if(V$(()=>{W0((K_)=>K_?K_.filter((W_)=>!c.includes(W_.id)):K_)}),o$.current)u2.current?.({preserveScroll:!0,preserveMode:"top"})}}},[h2,D,K,$,u2,J,k0,V$,x0,P0,L0,z1,B_,O,I3,w3,g2,R_,_0]);R(()=>{if(typeof window>"u")return;let V=window.__PICLAW_TEST_API||{};return V.emit=o1,V.reset=()=>{z1(),D(),o(null),l({text:"",totalLines:0}),a_(""),r({text:"",totalLines:0}),__(null)},V.finalize=()=>P3(),window.__PICLAW_TEST_API=V,()=>{if(window.__PICLAW_TEST_API===V)window.__PICLAW_TEST_API=void 0}},[D,P3,o1,z1]),B9({handleSseEvent:o1,handleConnectionStatusChange:_5,loadPosts:q0,onWake:X5,chatJid:$}),R(()=>{if(!y2||y2.length===0)return;let V=location.hash;if(!V||!V.startsWith("#msg-"))return;let G=V.slice(5);G2(G),history.replaceState(null,"",location.pathname+location.search)},[y2,G2]);let r1=e!==null;R(()=>{if(Y!=="connected")return;let G=setInterval(()=>{let{currentHashtag:F,searchQuery:A,searchOpen:k}=E0.current||{},f=!F&&!A&&!k;if(r1){if(f)L0();R_(),Q$(),q$()}else{if(f)L0();Q$(),q$()}},r1?15000:60000);return()=>clearInterval(G)},[Y,r1,Q$,q$,R_,L0]),R(()=>{return u9(()=>{Q$(),q$(),R_()})},[Q$,q$,R_]);let L5=I(()=>{O2((V)=>!V)},[]),T3=I((V)=>{if(typeof window>"u")return;let G=String(V||"").trim();if(!G||G===$)return;let F=U2(window.location.href,G,{chatOnly:j});window.location.assign(F)},[j,$]),C3=I(async()=>{if(typeof window>"u"||!I_?.chat_jid)return;let V=Date.now(),G=m9();if(!G)return;if(P$.current||V<D2.current||G.inFlight||V<G.cooldownUntil)return;P$.current=!0,G.inFlight=!0,z2(!0);try{let F=I_.display_name||I_.agent_name||"",A=window.prompt("Agent name",F);if(A===null)return;let k=A.trim(),f=k.toLowerCase().replace(/[^a-z0-9_-]+/g,"-").replace(/^-+|-+$/g,"").replace(/-{2,}/g,"-")||I_.agent_name||"",n=await gZ(I_.chat_jid,{displayName:k,agentName:f});await Promise.allSettled([x0(),P0()]);let d=n?.branch?.agent_name||f||I_.agent_name||"",i=n?.branch?.display_name||k||d;z_("Branch renamed",`${i} (@${d})`,"info",3500)}catch(F){let A=F instanceof Error?F.message:String(F||"Could not rename branch."),k=/already in use/i.test(A||"")?`${A} Switch to or restore that existing session from the session manager.`:A;z_("Could not rename branch",k||"Could not rename branch.","warning",5000)}finally{P$.current=!1,z2(!1);let F=Date.now()+SZ;D2.current=F;let A=m9();if(A)A.inFlight=!1,A.cooldownUntil=F}},[I_,x0,P0,z2,z_]),f3=I(async(V=null)=>{if(typeof window>"u")return;let G=typeof V==="string"&&V.trim()?V.trim():"",F=typeof $==="string"&&$.trim()?$.trim():"",A=G||I_?.chat_jid||F;if(!A){z_("Could not prune branch","No active session is selected yet.","warning",4000);return}let k=(I_?.chat_jid===A?I_:null)||P_.find((i)=>i?.chat_jid===A)||Z0.find((i)=>i?.chat_jid===A)||null;if(k?.chat_jid===(k?.root_chat_jid||k?.chat_jid)){z_("Cannot prune branch","The root chat branch cannot be pruned.","warning",4000);return}let n=`@${k?.agent_name||A}${k?.chat_jid?` — ${k.chat_jid}`:""}`;if(!window.confirm(`Prune ${n}?

This archives the branch agent and removes it from the branch picker. Chat history is preserved.`))return;try{await pZ(A),await Promise.allSettled([x0(),P0()]);let i=k?.root_chat_jid||"web:default";z_("Branch pruned",`${n} has been archived.`,"info",3000);let c=U2(window.location.href,i,{chatOnly:j});window.location.assign(c)}catch(i){let c=i instanceof Error?i.message:String(i||"Could not prune branch.");z_("Could not prune branch",c||"Could not prune branch.","warning",5000)}},[Z0,j,I_,P_,$,x0,P0,z_]),B5=I(async(V)=>{let G=typeof V==="string"?V.trim():"";if(!G||typeof n9!=="function")return;try{let F=await n9(G);await Promise.allSettled([x0(),P0()]);let A=F?.branch,k=typeof A?.chat_jid==="string"&&A.chat_jid.trim()?A.chat_jid.trim():G,f=typeof A?.agent_name==="string"&&A.agent_name.trim()?`@${A.agent_name.trim()}`:k;z_("Branch restored",`Restored ${f}.`,"info",3200);let n=U2(window.location.href,k,{chatOnly:j});window.location.assign(n)}catch(F){let A=F instanceof Error?F.message:String(F||"Could not restore branch.");z_("Could not restore branch",A||"Could not restore branch.","warning",5000)}},[j,x0,P0,z_]);R(()=>{if(!Z||typeof window>"u")return;let V=!1;return(async()=>{try{w_({status:"running",message:"Preparing a new chat branch…"});let G=await d2(N);if(V)return;let F=G?.branch,A=typeof F?.chat_jid==="string"&&F.chat_jid.trim()?F.chat_jid.trim():null;if(!A)throw Error("Branch fork did not return a chat id.");let k=U2(window.location.href,A,{chatOnly:!0});window.location.replace(k)}catch(G){if(V)return;w_({status:"error",message:g1(G)})}})(),()=>{V=!0}},[Z,N]);let W5=I((V)=>{if(!V||typeof V!=="object")return;let G=T0(V);if(G)$0.current.delete(G);E_({...V,openedAt:new Date().toISOString()})},[]),i2=I(()=>{E_((V)=>{let G=T0(V);if(V?.source==="live"&&G)$0.current.add(G);return null})},[]),U5=I((V,G)=>{let F=typeof V?.kind==="string"?V.kind:"",A=T0(G);if(!F||!A)return;if(F==="widget.close"){i2();return}if(F==="widget.submit"){let k=e8(V?.payload),f=_6(V?.payload),n=new Date().toISOString();if(E_((d)=>{let i=T0(d);if(!d||i!==A)return d;return{...d,runtimeState:{...d.runtimeState||{},lastEventKind:F,lastEventPayload:V?.payload||null,lastSubmitAt:n,lastHostUpdate:{type:"submit_pending",submittedAt:n,preview:k||null}}}}),!k){if(z_("Widget submission received","The widget submitted data without a message payload yet.","info",3500),f)i2();return}(async()=>{try{let d=await Q2("default",k,null,[],m2?"queue":null,$);if(p2(d),E_((i)=>{let c=T0(i);if(!i||c!==A)return i;return{...i,runtimeState:{...i.runtimeState||{},lastHostUpdate:{type:d?.queued==="followup"?"submit_queued":"submit_sent",submittedAt:n,preview:k,queued:d?.queued||null}}}}),z_(d?.queued==="followup"?"Widget submission queued":"Widget submission sent",d?.queued==="followup"?"The widget message was queued because the agent is busy.":"The widget message was sent to the chat.","info",3500),f)i2()}catch(d){E_((i)=>{let c=T0(i);if(!i||c!==A)return i;return{...i,runtimeState:{...i.runtimeState||{},lastHostUpdate:{type:"submit_failed",submittedAt:n,preview:k,error:d?.message||"Could not send the widget message."}}}}),z_("Widget submission failed",d?.message||"Could not send the widget message.","warning",5000)}})();return}if(F==="widget.ready"||F==="widget.request_refresh"){let k=new Date().toISOString(),f=Boolean(V?.payload?.buildDashboard||V?.payload?.dashboardKind==="internal-state"),n=Number(G?.runtimeState?.refreshCount||0)+1;if(E_((d)=>{let i=T0(d);if(!d||i!==A)return d;return{...d,runtimeState:{...d.runtimeState||{},lastEventKind:F,lastEventPayload:V?.payload||null,...F==="widget.ready"?{readyAt:k,lastHostUpdate:{type:"ready_ack",at:k}}:{},...F==="widget.request_refresh"?{lastRefreshRequestAt:k,refreshCount:n,lastHostUpdate:{type:f?"refresh_building":"refresh_ack",at:k,count:n,echo:V?.payload||null}}:{}}}}),F==="widget.request_refresh")if(f)(async()=>{try{let d=await x3(V?.payload||null);E_((i)=>{let c=T0(i);if(!i||c!==A)return i;return{...i,runtimeState:{...i.runtimeState||{},dashboard:d,lastHostUpdate:{type:"refresh_dashboard",at:new Date().toISOString(),count:n,echo:V?.payload||null}}}}),z_("Dashboard built","Live dashboard state pushed into the widget.","info",3000)}catch(d){E_((i)=>{let c=T0(i);if(!i||c!==A)return i;return{...i,runtimeState:{...i.runtimeState||{},lastHostUpdate:{type:"refresh_failed",at:new Date().toISOString(),count:n,error:d?.message||"Could not build dashboard."}}}}),z_("Dashboard build failed",d?.message||"Could not build dashboard.","warning",5000)}})();else z_("Widget refresh requested","The widget received a host acknowledgement update.","info",3000)}},[x3,$,i2,p2,m2,z_]);R(()=>{$0.current.clear(),E_(null)},[$]);let O5=I(async()=>{if(typeof window>"u")return;try{let G=(await d2($))?.branch,F=typeof G?.chat_jid==="string"&&G.chat_jid.trim()?G.chat_jid.trim():null;if(!F)throw Error("Branch fork did not return a chat id.");await Promise.allSettled([x0(),P0()]);let A=G?.agent_name?`@${G.agent_name}`:F;z_("New branch created",`Switched to ${A}.`,"info",2500);let k=U2(window.location.href,F,{chatOnly:j});window.location.assign(k)}catch(V){z_("Could not create branch",g1(V),"warning",5000)}},[j,$,x0,P0,z_]),F5=I(async()=>{if(typeof window>"u"||q)return;let V=P9($);if(!V){z_("Could not open branch window","Opening branch windows is unavailable in standalone webapp mode.","warning",5000);return}if(V.mode==="tab"){let F=T9(window.location.href,$,{chatOnly:!0});if(!window.open(F,V.target))z_("Could not open branch window","The browser blocked opening a new tab or window.","warning",5000);return}let G=M9(V);if(!G){z_("Could not open branch window","The browser blocked opening a new tab or window.","warning",5000);return}I9(G,{title:"Opening branch…",message:"Preparing a new chat branch. This should only take a moment."});try{let A=(await d2($))?.branch,k=typeof A?.chat_jid==="string"&&A.chat_jid.trim()?A.chat_jid.trim():null;if(!k)throw Error("Branch fork did not return a chat id.");try{let n=await X4();M0(Array.isArray(n?.chats)?n.chats:[])}catch{}try{let n=await c1(C);A0(Array.isArray(n?.chats)?n.chats:[])}catch{}let f=U2(window.location.href,k,{chatOnly:!0});w9(G,f)}catch(F){x9(G),z_("Could not open branch window",g1(F),"error",5000)}},[$,C,q,z_]);R(()=>{if(!y0)return;if(typeof window>"u")return;let V=y$.current;if(!V)return;if(!R$.current){let G=I2("editorWidth",null),F=k$.current||280;R$.current=Number.isFinite(G)?G:F}if(V.style.setProperty("--editor-width",`${R$.current}px`),!n$.current){let G=I2("dockHeight",null);n$.current=Number.isFinite(G)?G:200}V.style.setProperty("--dock-height",`${n$.current}px`)},[y0]),R(()=>{if(!Q0||j)return;let V=(G)=>{if(G.ctrlKey&&G.key==="`")G.preventDefault(),E$()};return document.addEventListener("keydown",V),()=>document.removeEventListener("keydown",V)},[E$,Q0,j]),R(()=>{if(j)return;let V=(G)=>{if(G.ctrlKey&&G.shiftKey&&(G.key==="Z"||G.key==="z")){G.preventDefault(),b$();return}if(G.key==="Escape"&&J_)G.preventDefault(),o0()};return document.addEventListener("keydown",V),()=>document.removeEventListener("keydown",V)},[b$,o0,J_,j]);let H5=Boolean(L_&&L_===(e?.turn_id||X_));if(Z)return W`
            <div class="app-shell chat-only">
                <div class="container" style=${{display:"flex",alignItems:"center",justifyContent:"center",minHeight:"100vh",padding:"24px"}}>
                    <div class="card" style=${{width:"min(560px, 100%)",padding:"24px"}}>
                        <h1 style=${{margin:"0 0 12px",fontSize:"1.1rem"}}>
                            ${O_.status==="error"?"Could not open branch window":"Opening branch…"}
                        </h1>
                        <p style=${{margin:0,lineHeight:1.6}}>${O_.message}</p>
                    </div>
                </div>
            </div>
        `;return W`
        <div class=${`app-shell${N$?"":" workspace-collapsed"}${y0?" editor-open":""}${j?" chat-only":""}${J_?" zen-mode":""}`} ref=${y$}>
            ${!j&&W`
                <${V9}
                    onFileSelect=${K2}
                    visible=${N$}
                    active=${N$||y0}
                    onOpenEditor=${K0}
                    onOpenTerminalTab=${h$}
                    onToggleTerminal=${Q0?E$:void 0}
                    terminalVisible=${Boolean(Q0&&s_)}
                />
                <button
                    class=${`workspace-toggle-tab${N$?" open":" closed"}`}
                    onClick=${L5}
                    title=${N$?"Hide workspace":"Show workspace"}
                    aria-label=${N$?"Hide workspace":"Show workspace"}
                >
                    <svg class="workspace-toggle-tab-icon" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                        <polyline points="6 3 11 8 6 13" />
                    </svg>
                </button>
                <div class="workspace-splitter" onMouseDown=${s9} onTouchStart=${o9}></div>
            `}
            ${H2&&W`
                <div class="editor-pane-container">
                    ${J_&&W`<div class="zen-hover-zone"></div>`}
                    ${y0&&W`
                        <${Q9}
                            tabs=${J0}
                            activeId=${z0}
                            onActivate=${C$}
                            onClose=${Y$}
                            onCloseOthers=${e$}
                            onCloseAll=${c$}
                            onTogglePin=${_2}
                            onTogglePreview=${d0}
                            previewTabs=${c0}
                            onToggleDock=${Q0?E$:void 0}
                            dockVisible=${Q0&&s_}
                            onToggleZen=${b$}
                            zenMode=${J_}
                        />
                    `}
                    ${y0&&W`<div class="editor-pane-host" ref=${j2}></div>`}
                    ${y0&&z0&&c0.has(z0)&&W`
                        <${L9}
                            getContent=${()=>z$.current?.getContent?.()}
                            path=${z0}
                            onClose=${()=>d0(z0)}
                        />
                    `}
                    ${Q0&&s_&&W`<div class="dock-splitter" onMouseDown=${t9} onTouchStart=${e9}></div>`}
                    ${Q0&&W`<div class=${`dock-panel${s_?"":" hidden"}`}>
                        <div class="dock-panel-header">
                            <span class="dock-panel-title">Terminal</span>
                            <button class="dock-panel-close" onClick=${E$} title="Hide terminal (Ctrl+\`)" aria-label="Hide terminal">
                                <svg viewBox="0 0 16 16" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round">
                                    <line x1="4" y1="4" x2="12" y2="12"/>
                                    <line x1="12" y1="4" x2="4" y2="12"/>
                                </svg>
                            </button>
                        </div>
                        <div class="dock-panel-body" ref=${U$}></div>
                    </div>`}
                </div>
                <div class="editor-splitter" onMouseDown=${r9} onTouchStart=${a9}></div>
            `}
            <div class="container">
                ${X&&A9()&&W`<div class="search-results-spacer"></div>`}
                ${j&&W`
                    <div class="chat-window-header">
                        <div class="chat-window-header-main">
                            <span class="chat-window-header-title">
                                ${I_?.agent_name?`@${I_.agent_name}`:$}
                            </span>
                            <span class="chat-window-header-subtitle">${I_?.chat_jid||$}</span>
                        </div>
                        <div class="chat-window-header-actions">
                            ${P_.length>1&&W`
                                <label class="chat-window-branch-picker-wrap">
                                    <span class="chat-window-branch-picker-label">Branch</span>
                                    <select
                                        class="chat-window-branch-picker"
                                        value=${$}
                                        onChange=${(V)=>T3(V.currentTarget.value)}
                                    >
                                        ${P_.map((V)=>W`
                                            <option key=${V.chat_jid} value=${V.chat_jid}>
                                                ${`@${V.agent_name} — ${V.chat_jid}${V.is_active?" • active":""}`}
                                            </option>
                                        `)}
                                    </select>
                                </label>
                            `}
                            ${I_?.chat_jid&&W`
                                <button
                                    class="chat-window-header-button"
                                    type="button"
                                    onClick=${C3}
                                    title=${v$?"Renaming branch…":"Rename this branch"}
                                    aria-label="Rename this branch"
                                    disabled=${v$}
                                >
                                    ${v$?"Renaming…":"Rename"}
                                </button>
                            `}
                            ${I_?.chat_jid&&I_.chat_jid!==(I_.root_chat_jid||I_.chat_jid)&&W`
                                <button
                                    class="chat-window-header-button"
                                    type="button"
                                    onClick=${f3}
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
                ${(Q||X)&&W`
                    <div class="hashtag-header">
                        <button class="back-btn" onClick=${j5}>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
                        </button>
                        <span>${Q?`#${Q}`:`Search: ${X} · ${t}`}</span>
                    </div>
                `}
                <${P6}
                    posts=${y2}
                    hasMore=${n1?i1:!1}
                    onLoadMore=${n1?k3:void 0}
                    timelineRef=${F$}
                    onHashtagClick=${$5}
                    onMessageRef=${b2}
                    onScrollToMessage=${G2}
                    onFileRef=${J2}
                    onPostClick=${void 0}
                    onDeletePost=${z5}
                    onOpenWidget=${W5}
                    emptyMessage=${Q?`No posts with #${Q}`:X?`No results for "${X}"`:void 0}
                    agents=${D_}
                    user=${r0}
                    reverse=${n1}
                    removingPostIds=${n0}
                    searchQuery=${X}
                />
                <${q6}
                    status=${e}
                    draft=${j_}
                    plan=${Q_}
                    thought=${c_}
                    pendingRequest=${N_}
                    intent=${S}
                    turnId=${X_}
                    steerQueued=${H5}
                    onPanelToggle=${F_}
                />
                <${l8}
                    session=${S_}
                    onClose=${s1}
                    onRetry=${q5}
                    onInject=${Q5}
                />
                <${Z6}
                    widget=${b0}
                    onClose=${i2}
                    onWidgetEvent=${U5}
                />
                <${H8}
                    onPost=${()=>{let{searchQuery:V,searchOpen:G}=E0.current||{};if(!V&&!G)q0(),w$()}}
                    onFocus=${w$}
                    searchMode=${M}
                    searchScope=${m}
                    onSearch=${Z5}
                    onSearchScopeChange=${g}
                    onEnterSearch=${N5}
                    onExitSearch=${Y5}
                    fileRefs=${y}
                    onRemoveFileRef=${I$}
                    onClearFileRefs=${T2}
                    onSetFileRefs=${C2}
                    messageRefs=${h}
                    onRemoveMessageRef=${S2}
                    onClearMessageRefs=${R2}
                    onSetMessageRefs=${v2}
                    onSwitchChat=${T3}
                    onRenameSession=${C3}
                    isRenameSessionInProgress=${v$}
                    onCreateSession=${O5}
                    onDeleteSession=${f3}
                    onRestoreSession=${B5}
                    activeEditorPath=${j?null:z0}
                    onAttachEditorFile=${j?void 0:f2}
                    onOpenFilePill=${J2}
                    followupQueueCount=${t_}
                    followupQueueItems=${N0}
                    onInjectQueuedFollowup=${K5}
                    onRemoveQueuedFollowup=${G5}
                    onSubmitIntercept=${V5}
                    onMessageResponse=${p2}
                    onSubmitError=${U}
                    onPopOutChat=${q?void 0:F5}
                    isAgentActive=${m2}
                    activeChatAgents=${Z0}
                    currentChatJid=${$}
                    connectionStatus=${Y}
                    activeModel=${h_}
                    modelUsage=${k_}
                    thinkingLevel=${g_}
                    supportsThinking=${f_}
                    contextUsage=${n_}
                    notificationsEnabled=${C0}
                    notificationPermission=${T$}
                    onToggleNotifications=${D0}
                    onModelChange=${i_}
                    onModelStateChange=${d1}
                />
                <${Q6}
                    request=${N_}
                    onRespond=${()=>{__(null),G0.current=null}}
                />
            </div>
        </div>
    `}function nZ(){let _=typeof window>"u"?new URLSearchParams:new URL(window.location.href).searchParams;return W`<${lZ} locationParams=${_} />`}G8(W`<${nZ} />`,document.getElementById("app"));

//# debugId=C927CC31D1864F3364756E2164756E21
//# sourceMappingURL=app.bundle.js.map
