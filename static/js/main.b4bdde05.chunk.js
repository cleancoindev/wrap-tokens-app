(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{216:function(e,t,n){},218:function(e,t,n){},230:function(e,t){},253:function(e,t){},255:function(e,t){},332:function(e,t){},334:function(e,t){},366:function(e,t){},371:function(e,t){},373:function(e,t){},380:function(e,t){},393:function(e,t){},476:function(e,t,n){"use strict";n.r(t);var r=n(2),a=n(4),s=n.n(a),c=n(206),u=n.n(c),i=(n(216),n(80)),o=n(79),p=n(0),l=n.n(p),f=n(16),b=n(6),d=n(78),x=n(15),y=(n(218),n(41)),h=n.n(y),m=[{constant:!0,inputs:[],name:"name",outputs:[{name:"",type:"string"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{name:"_spender",type:"address"},{name:"_value",type:"uint256"}],name:"approve",outputs:[{name:"",type:"bool"}],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[],name:"totalSupply",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{name:"_from",type:"address"},{name:"_to",type:"address"},{name:"_value",type:"uint256"}],name:"transferFrom",outputs:[{name:"",type:"bool"}],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[],name:"decimals",outputs:[{name:"",type:"uint8"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[{name:"_owner",type:"address"}],name:"balanceOf",outputs:[{name:"balance",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"symbol",outputs:[{name:"",type:"string"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{name:"_to",type:"address"},{name:"_value",type:"uint256"}],name:"transfer",outputs:[{name:"",type:"bool"}],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[{name:"_owner",type:"address"},{name:"_spender",type:"address"}],name:"allowance",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{payable:!0,stateMutability:"payable",type:"fallback"},{anonymous:!1,inputs:[{indexed:!0,name:"owner",type:"address"},{indexed:!0,name:"spender",type:"address"},{indexed:!1,name:"value",type:"uint256"}],name:"Approval",type:"event"},{anonymous:!1,inputs:[{indexed:!0,name:"from",type:"address"},{indexed:!0,name:"to",type:"address"},{indexed:!1,name:"value",type:"uint256"}],name:"Transfer",type:"event"}],j=[{constant:!0,inputs:[{name:"_owner",type:"address"},{name:"_id",type:"uint256"}],name:"balanceOf",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[{name:"_interfaceId",type:"bytes4"}],name:"supportsInterface",outputs:[{name:"",type:"bool"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"name",outputs:[{name:"",type:"string"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[{name:"_id",type:"uint256"}],name:"uri",outputs:[{name:"",type:"string"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{name:"_from",type:"address"},{name:"_to",type:"address"},{name:"_ids",type:"uint256[]"},{name:"_values",type:"uint256[]"},{name:"_data",type:"bytes"}],name:"safeBatchTransferFrom",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[{name:"_owners",type:"address[]"},{name:"_ids",type:"uint256[]"}],name:"balanceOfBatch",outputs:[{name:"",type:"uint256[]"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{name:"_update",type:"string"},{name:"_id",type:"uint256"}],name:"update",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{name:"uri",type:"string"}],name:"setBaseURI",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[],name:"renounceOwnership",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{name:"_initialSupplies",type:"uint256[]"},{name:"_to",type:"address[]"},{name:"_name",type:"string"}],name:"batchCreate",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[],name:"owner",outputs:[{name:"",type:"address"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"totalTokenTypes",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"isOwner",outputs:[{name:"",type:"bool"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"symbol",outputs:[{name:"",type:"string"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{name:"_operator",type:"address"},{name:"_approved",type:"bool"}],name:"setApprovalForAll",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[],name:"nonce",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[{name:"_id",type:"uint256"}],name:"totalSupply",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[{name:"_id",type:"uint256"}],name:"tokenURI",outputs:[{name:"",type:"string"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{name:"_initialSupply",type:"uint256"},{name:"_to",type:"address"},{name:"_name",type:"string"}],name:"create",outputs:[{name:"_id",type:"uint256"}],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[],name:"baseTokenURI",outputs:[{name:"",type:"string"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[{name:"_owner",type:"address"},{name:"_operator",type:"address"}],name:"isApprovedForAll",outputs:[{name:"",type:"bool"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{name:"_from",type:"address"},{name:"_to",type:"address"},{name:"_id",type:"uint256"},{name:"_value",type:"uint256"},{name:"_data",type:"bytes"}],name:"safeTransferFrom",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{name:"newOwner",type:"address"}],name:"transferOwnership",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{anonymous:!1,inputs:[{indexed:!1,name:"_value",type:"string"},{indexed:!0,name:"_id",type:"uint256"}],name:"CreationName",type:"event"},{anonymous:!1,inputs:[{indexed:!1,name:"_value",type:"string"},{indexed:!0,name:"_id",type:"uint256"}],name:"Update",type:"event"},{anonymous:!1,inputs:[{indexed:!0,name:"previousOwner",type:"address"},{indexed:!0,name:"newOwner",type:"address"}],name:"OwnershipTransferred",type:"event"},{anonymous:!1,inputs:[{indexed:!0,name:"_operator",type:"address"},{indexed:!0,name:"_from",type:"address"},{indexed:!0,name:"_to",type:"address"},{indexed:!1,name:"_id",type:"uint256"},{indexed:!1,name:"_value",type:"uint256"}],name:"TransferSingle",type:"event"},{anonymous:!1,inputs:[{indexed:!0,name:"_operator",type:"address"},{indexed:!0,name:"_from",type:"address"},{indexed:!0,name:"_to",type:"address"},{indexed:!1,name:"_ids",type:"uint256[]"},{indexed:!1,name:"_values",type:"uint256[]"}],name:"TransferBatch",type:"event"},{anonymous:!1,inputs:[{indexed:!0,name:"_owner",type:"address"},{indexed:!0,name:"_operator",type:"address"},{indexed:!1,name:"_approved",type:"bool"}],name:"ApprovalForAll",type:"event"},{anonymous:!1,inputs:[{indexed:!1,name:"_value",type:"string"},{indexed:!0,name:"_id",type:"uint256"}],name:"URI",type:"event"}],v=h.a.utils,w=v.toBN,O=v.fromWei,k=v.toWei,C=null,g={1:"mainnet",3:"ropsten",4:"rinkeby",5:"goerli",42:"kovan",1337:"local",122:"fuse",80001:"mumbai",137:"matic",99:"core",77:"sokol",100:"xdai",74:"idchain",56:"bsc",97:"bsctest"},E=null;function R(){return _.apply(this,arguments)}function _(){return(_=Object(b.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!C){e.next=2;break}return e.abrupt("return",C);case 2:return E=h.a.givenProvider,e.abrupt("return",C=E?new h.a(E):null);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function M(){return A.apply(this,arguments)}function A(){return(A=Object(b.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,R();case 2:if(t=e.sent){e.next=5;break}return e.abrupt("return",null);case 5:return e.next=7,t.eth.getChainId();case 7:return e.abrupt("return",e.sent);case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function S(e){return h.a.utils.isAddress(e)}function L(e){return/^[0-9]+$/.test(e)&&w(e).lt(w(2).pow(w(256)))}function T(e){return/^[0-9]+$/.test(e)&&w(e).lt(w(2).pow(w(160)))}function N(e){return/^[0-9]+(\.[0-9]+)?$/.test(e)}var F=new Map,I=new Map;function B(e){return U.apply(this,arguments)}function U(){return(U=Object(b.a)(l.a.mark((function e(t){var n,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(n=F.get(t))){e.next=5;break}return e.abrupt("return",n);case 5:return e.next=7,fetch(t);case 7:return r=e.sent,n=r.json(),F.set(t,n),e.next=12,n;case 12:return e.abrupt("return",e.sent);case 13:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function W(e){return D.apply(this,arguments)}function D(){return(D=Object(b.a)(l.a.mark((function e(t){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(n=I.get(t))){e.next=5;break}return e.abrupt("return",n);case 5:return e.next=7,B(t);case 7:return n=e.sent,I.set(t,n),e.abrupt("return",n);case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function P(e){var t=Object.assign({},e);return Object(r.jsx)("span",{className:"Address",children:Object(r.jsx)("input",{type:"text",maxLength:42,size:50,value:t.value?t.value:"",onChange:t.onChange,className:S(t.value)?"":"error"})})}function $(e){var t=Object.assign({},e);return Object(r.jsx)("span",{className:"Uint256",children:Object(r.jsx)("input",{type:"text",maxLength:78,size:92,value:t.value,onChange:t.onChange,className:L(t.value)?"":"error"})})}function z(e){var t=Object.assign({},e);return Object(r.jsx)("span",{className:"WrappedERC20",children:Object(r.jsx)("input",{type:"text",maxLength:49,size:56,value:t.value,onChange:t.onChange,className:T(t.value)?"":"error"})})}function q(e){var t=Object.assign({},e);return Object(r.jsx)("span",{className:"Amount",children:Object(r.jsx)("input",{type:"text",value:t.value?t.value:"",onChange:t.onChange,className:N(t.value)?"":"error"})})}var J=function(){var e=Object(a.useState)(!0),t=Object(f.a)(e,2),n=t[0],s=t[1];function c(){return u.apply(this,arguments)}function u(){return(u=Object(b.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:try{window.ethereum.enable().catch((function(){}))}catch(n){}return e.next=3,R();case 3:return t=e.sent,E().then((function(e){s(0!==e.length)})),e.abrupt("return",t);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function p(){return y.apply(this,arguments)}function y(){return(y=Object(b.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,W("abis.json");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function v(){return C.apply(this,arguments)}function C(){return(C=Object(b.a)(l.a.mark((function e(){var t,n,r,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.all([W("addresses.json"),M()]);case 2:return t=e.sent,n=Object(f.a)(t,2),r=n[0],a=n[1],e.abrupt("return",g[a]?r[g[a]]:null);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function E(){return _.apply(this,arguments)}function _(){return(_=Object(b.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,R();case 2:return t=e.sent,e.abrupt("return",t?t.eth.getAccounts():null);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function A(e,t,n,r,a){return F.apply(this,arguments)}function F(){return(F=Object(b.a)(l.a.mark((function e(t,n,r,a,s){var c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=a||{},e.next=3,E();case 3:return c=e.sent[0],e.abrupt("return",n.bind(t).apply(void 0,Object(o.a)(r)).estimateGas(Object(i.a)({gas:"1000000",from:c},a)).then((function(e){var u=String(Math.floor(1.15*Number(e))+24e3);return null!==s?n.bind(t).apply(void 0,Object(o.a)(r)).send(Object(i.a)({gas:u,from:c},a),s):n.bind(t).apply(void 0,Object(o.a)(r)).send(Object(i.a)({gas:u,from:c},a))})));case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(r.jsx)(d.a,{children:Object(r.jsx)("div",{className:"App",children:Object(r.jsxs)("header",{className:"App-header",children:[Object(r.jsxs)("ul",{className:"header",children:[Object(r.jsx)("li",{children:Object(r.jsx)(d.b,{exact:!0,to:"/",children:"ERC20 \u2192 ERC1155"})}),Object(r.jsx)("li",{children:Object(r.jsx)(d.b,{to:"/erc1155toErc20",children:"ERC1155 \u2192 ERC20"})})]}),Object(r.jsx)("p",{style:{marginTop:0},children:Object(r.jsxs)("small",{children:[Object(r.jsx)("a",{href:"https://github.com/vporton/wrap-tokens",children:"Docs and source"})," ","|"," ",Object(r.jsx)("a",{href:"https://portonvictor.org",children:"Author"})," ","|"," ",Object(r.jsx)("a",{href:"https://gitcoin.co/grants/1865/convert-erc-1155-erc-20-need-021224376-eth",children:"Donate"})]})}),Object(r.jsx)("p",{style:{display:n?"none":"block",fontSize:"50%",color:"red",fontWeight:"bold"},children:"Please connect to an Ethereum account!"}),Object(r.jsxs)("div",{className:"content",children:[Object(r.jsx)(x.a,{exact:!0,path:"/",component:function(){var e=Object(a.useState)(""),t=Object(f.a)(e,2),n=t[0],u=t[1],i=Object(a.useState)(""),o=Object(f.a)(i,2),d=o[0],x=o[1],y=Object(a.useState)(""),j=Object(f.a)(y,2),C=j[0],g=j[1],R=Object(a.useState)(""),_=Object(f.a)(R,2),M=_[0],L=_[1],F=Object(a.useState)(""),I=Object(f.a)(F,2),B=I[0],U=I[1],D=Object(a.useState)(""),$=Object(f.a)(D,2),J=$[0],G=$[1],H=Object(a.useState)(""),K=Object(f.a)(H,2),Q=K[0],V=K[1],X=Object(a.useState)(""),Y=Object(f.a)(X,2),Z=Y[0],ee=Y[1],te=Object(a.useState)(!1),ne=Object(f.a)(te,2),re=ne[0],ae=ne[1],se=[null,null,null,null,null];function ce(e,t,n){return ue.apply(this,arguments)}function ue(){return(ue=Object(b.a)(l.a.mark((function e(t,n,r){var a,s,u,i,o,f;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(console.log("connectEvents"),S(t)){e.next=3;break}return e.abrupt("return");case 3:return e.next=5,c();case 5:if(null!==(a=e.sent)){e.next=8;break}return e.abrupt("return");case 8:return a.eth.clearSubscriptions(),e.next=11,E();case 11:if(s=e.sent[0]){e.next=14;break}return e.abrupt("return");case 14:if(!S(n)){e.next=21;break}return e.next=17,p();case 17:u=e.sent.ERC1155LockedERC20,i=new a.eth.Contract(u,n),se[0]=i.events.TransferSingle({filter:{_to:s}},Object(b.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,pe();case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))),se[1]=i.events.TransferBatch({filter:{_to:s}},Object(b.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,pe();case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)}))));case 21:if(!S(t)){e.next=29;break}return e.next=24,W("erc20-abi.json");case 24:o=e.sent,f=new a.eth.Contract(o,t),se[2]=f.events.Transfer({filter:{to:s}},Object(b.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ie();case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))),se[3]=f.events.Transfer({filter:{from:s}},Object(b.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ie();case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))),se[4]=f.events.Approval({filter:{owner:s,spender:M}},Object(b.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fe();case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)}))));case 29:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function ie(){return oe.apply(this,arguments)}function oe(){return(oe=Object(b.a)(l.a.mark((function e(){var t,r,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!S(n)){e.next=20;break}return e.next=3,c();case 3:if(null===(t=e.sent)){e.next=16;break}return r=new t.eth.Contract(m,n),e.next=8,E();case 8:if(a=e.sent[0]){e.next=12;break}return s(!1),e.abrupt("return");case 12:r.methods.balanceOf(a).call().then((function(e){U(e)})).catch((function(){U("")})),r.methods.symbol().call().then((function(e){G(e)})).catch((function(){G("")})),e.next=18;break;case 16:U(""),G("");case 18:e.next=22;break;case 20:U(""),G("");case 22:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function pe(){return le.apply(this,arguments)}function le(){return(le=Object(b.a)(l.a.mark((function e(){var t,n,r,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!S(C)||!T(d)){e.next=22;break}return e.next=3,p();case 3:if(!(t=e.sent.ERC1155LockedERC20)){e.next=20;break}return e.next=7,c();case 7:if(null===(n=e.sent)){e.next=19;break}return r=new n.eth.Contract(t,C),e.next=12,E();case 12:if(a=e.sent[0]){e.next=16;break}return s(!1),e.abrupt("return");case 16:T(d)?r.methods.balanceOf(a,d).call().then((function(e){V(e)})).catch((function(e){V("")})):V(""),e.next=20;break;case 19:V("");case 20:e.next=23;break;case 22:V("");case 23:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function fe(){return be.apply(this,arguments)}function be(){return(be=Object(b.a)(l.a.mark((function e(){var t,r,a,s,u,i;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!S(M)){e.next=29;break}return e.next=3,c();case 3:if(null===(t=e.sent)){e.next=26;break}return e.next=7,E();case 7:if(r=e.sent[0]){e.next=11;break}return ae(!1),e.abrupt("return");case 11:return e.prev=11,a=new t.eth.Contract(m,n),e.next=15,a.methods.allowance(r,M).call();case 15:s=e.sent,u=w(s),i=w(2).pow(w(128)),ae(!u.lt(i)),e.next=24;break;case 21:e.prev=21,e.t0=e.catch(11),ae(!1);case 24:e.next=27;break;case 26:ae(!1);case 27:e.next=30;break;case 29:ae(!1);case 30:case"end":return e.stop()}}),e,null,[[11,21]])})))).apply(this,arguments)}function de(){return(de=Object(b.a)(l.a.mark((function e(){var t,r,a,u,i,o,f,b,d,x;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!S(C)||!S(n)){e.next=36;break}return e.next=3,p();case 3:return t=e.sent.ERC1155LockedERC20,e.next=6,W("erc20-abi.json");case 6:return r=e.sent,e.next=9,c();case 9:if(null===(a=e.sent)){e.next=36;break}return e.prev=11,u=new a.eth.Contract(t,C),i=new a.eth.Contract(r,n),e.next=16,E();case 16:if(o=e.sent[0]){e.next=20;break}return s(!1),e.abrupt("return");case 20:return e.next=22,i.methods.allowance(o,C).call();case 22:if(f=e.sent,b=w(f),d=w(2).pow(w(128)),!b.lt(d)){e.next=29;break}return x=w(2).pow(w(256)).sub(w(1)),e.next=29,A(i,i.methods.approve,[C,x.toString()],{from:o},null);case 29:return e.next=31,A(u,u.methods.borrowERC20,[n,k(Z),o,o,[]],{from:o},null).catch((function(e){return alert(e.message)}));case 31:e.next=36;break;case 33:e.prev=33,e.t0=e.catch(11),alert(e.t0.message);case 36:case"end":return e.stop()}}),e,null,[[11,33]])})))).apply(this,arguments)}function xe(){return(xe=Object(b.a)(l.a.mark((function e(){var t,r,a,u,i;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!S(n)){e.next=25;break}return e.next=3,W("erc20-abi.json");case 3:return t=e.sent,e.next=6,c();case 6:if(null===(r=e.sent)){e.next=25;break}return e.prev=8,a=new r.eth.Contract(t,n),e.next=12,E();case 12:if(u=e.sent[0]){e.next=16;break}return s(!1),e.abrupt("return");case 16:return i=w(2).pow(w(256)).sub(w(1)),e.next=19,A(a,a.methods.approve,[M,i],{from:u},null);case 19:e.next=25;break;case 21:return e.prev=21,e.t0=e.catch(8),alert(e.t0.message),e.abrupt("return");case 25:case"end":return e.stop()}}),e,null,[[8,21]])})))).apply(this,arguments)}function ye(){return(ye=Object(b.a)(l.a.mark((function e(){var t,r,a,u;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!S(C)||!S(n)){e.next=23;break}return e.next=3,p();case 3:return t=e.sent.ERC1155LockedERC20,e.next=6,c();case 6:if(null===(r=e.sent)){e.next=23;break}return e.prev=8,a=new r.eth.Contract(t,C),e.next=12,E();case 12:if(u=e.sent[0]){e.next=16;break}return s(!1),e.abrupt("return");case 16:return e.next=18,A(a,a.methods.returnToERC20,[n,k(Z),u],{from:u},null);case 18:e.next=23;break;case 20:e.prev=20,e.t0=e.catch(8),alert(e.t0.message);case 23:case"end":return e.stop()}}),e,null,[[8,20]])})))).apply(this,arguments)}return window.ethereum&&(window.ethereum.on("chainChanged",function(){var e=Object(b.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v().then((function(e){e&&(g(e.ERC1155LockedERC20.address),L(e.ERC1155OverERC20.address))}));case 2:return e.next=4,pe();case 4:return e.next=6,ie();case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),window.ethereum.on("accountsChanged",function(){var e=Object(b.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!S(n)){e.next=4;break}return s(0!==t.length),e.next=4,ie();case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())),Object(a.useEffect)((function(){function e(){return(e=Object(b.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fe();case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[M]),Object(a.useEffect)((function(){function e(){return(e=Object(b.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="",S(n)?(t=w(n).toString(),x(t)):x(""),e.next=4,ie();case 4:return e.next=6,fe();case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[n]),Object(a.useEffect)((function(){function e(){return(e=Object(b.a)(l.a.mark((function e(){var t,n,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return T(d)?(t=h.a.utils.toHex(d),n=t.replace(/^0x/,"0x"+"0".repeat(42-t.length)),r=h.a.utils.toChecksumAddress(n),u(r)):u(""),e.next=3,pe();case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[d]),Object(a.useEffect)((function(){function e(){return(e=Object(b.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ce(n,C,d);case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[n,C,d]),Object(a.useEffect)((function(){function e(){return(e=Object(b.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,pe();case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[C]),v().then((function(e){e&&(g(e.ERC1155LockedERC20.address),L(e.ERC1155OverERC20.address))})),Object(r.jsxs)("div",{children:[Object(r.jsxs)("p",{children:["ERC-20 token address:"," ",Object(r.jsx)(P,{value:n,onChange:function(){var e=Object(b.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u(t.target.value);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()})," ",Object(r.jsxs)("span",{style:{display:re?"none":"inline"},children:[Object(r.jsx)("button",{onClick:function(){return xe.apply(this,arguments)},disabled:!S(n),children:"Approve for ERC-1155"}),"\xa0",Object(r.jsx)("span",{style:{cursor:"help"},title:"Allow the ERC-1155 wrapper contract to transfer funds for you (only when you explicitly request a transfer).",children:"\u24d8"})]}),Object(r.jsx)("small",{style:{display:re?"inline":"none"},children:"(approved for ERC-1155 wrapper)"})]}),Object(r.jsxs)("p",{children:["ERC-1155 ",Object(r.jsx)("small",{children:"(has bug)"})," wrapper contract address:"," ",Object(r.jsx)("code",{className:"address",children:M})]}),Object(r.jsxs)("p",{children:["ERC-1155 token ID:"," ",Object(r.jsx)(z,{value:d,onChange:function(){var e=Object(b.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x(t.target.value);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()})]}),Object(r.jsxs)("p",{children:["ERC-1155 locker contract address:"," ",Object(r.jsx)(P,{value:C,onChange:function(){var e=Object(b.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g(t.target.value);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}),Object(r.jsx)("br",{}),Object(r.jsx)("span",{style:{color:"red"},children:"(Be sure to use only trustworthy locker contracts!)"})]}),Object(r.jsxs)("p",{children:["Amount on ERC-20:"," ",Object(r.jsx)("span",{children:""===B?"\u2013":O(B)})," ",Object(r.jsx)("span",{children:J})]}),Object(r.jsxs)("p",{children:["Amount locked in ERC-1155:"," ",Object(r.jsx)("span",{children:""===Q?"\u2013":O(Q)})]}),Object(r.jsxs)("p",{children:["Amount:"," ",Object(r.jsx)(q,{value:Z,onChange:function(e){return ee(e.target.value)}})," ",Object(r.jsx)("input",{type:"button",value:"Lock ERC-20 in ERC-1155",onClick:function(){return de.apply(this,arguments)},disabled:!S(n)||!N(Z)})," ",Object(r.jsx)("input",{type:"button",value:"Unlock ERC-1155 to ERC-20",onClick:function(){return ye.apply(this,arguments)},disabled:!S(n)||!N(Z)})]}),Object(r.jsx)("p",{children:"Locking/unlocking is 1/1 swap."})]})}}),Object(r.jsx)(x.a,{path:"/erc1155toErc20",component:function(){var e=Object(a.useState)(""),t=Object(f.a)(e,2),n=t[0],u=t[1],i=Object(a.useState)(""),o=Object(f.a)(i,2),d=o[0],x=o[1],y=Object(a.useState)(!1),h=Object(f.a)(y,2),m=h[0],w=h[1],C=Object(a.useState)(""),g=Object(f.a)(C,2),R=g[0],_=g[1],M=Object(a.useState)(""),T=Object(f.a)(M,2),N=T[0],F=T[1],I=Object(a.useState)(""),B=Object(f.a)(I,2),U=B[0],W=B[1],D=Object(a.useState)(""),z=Object(f.a)(D,2),J=z[0],G=z[1],H=Object(a.useState)(""),K=Object(f.a)(H,2),Q=K[0],V=K[1];function X(){return Y.apply(this,arguments)}function Y(){return(Y=Object(b.a)(l.a.mark((function e(){var t,r,a,s,u,i;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!S(n)||!L(d)){e.next=20;break}return e.next=3,c();case 3:if(null===(t=e.sent)){e.next=20;break}return e.next=7,p();case 7:return r=e.sent.ERC20Registry,e.next=10,v();case 10:return a=e.sent.ERC20Registry.address,s=new t.eth.Contract(r,a),e.next=14,s.methods.getWrapper(n,d).call();case 14:return u=e.sent,_(/^0x0+$/.test(u)?"":u),e.next=18,s.methods.getLocker(n,d).call();case 18:i=e.sent,F(/^0x0+$/.test(i)?"":i);case 20:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function Z(){return ee.apply(this,arguments)}function ee(){return(ee=Object(b.a)(l.a.mark((function e(){var t,r,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!S(n)||!L(d)){e.next=18;break}return e.next=3,c();case 3:if(null===(t=e.sent)){e.next=15;break}return r=new t.eth.Contract(j,n),e.next=8,E();case 8:if(a=e.sent[0]){e.next=12;break}return s(!1),e.abrupt("return");case 12:r.methods.balanceOf(a,d).call().then((function(e){W(e)})).catch((function(){W("")})),e.next=16;break;case 15:W("");case 16:e.next=19;break;case 18:W("");case 19:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function te(){return ne.apply(this,arguments)}function ne(){return(ne=Object(b.a)(l.a.mark((function e(){var t,n,r,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!S(N)){e.next=22;break}return e.next=3,p();case 3:if(!(t=e.sent.ERC20LockedERC1155)){e.next=20;break}return e.next=7,c();case 7:if(null===(n=e.sent)){e.next=19;break}return r=new n.eth.Contract(t,N),e.next=12,E();case 12:if(a=e.sent[0]){e.next=16;break}return s(!1),e.abrupt("return");case 16:r.methods.balanceOf(a).call().then((function(e){V(e)})).catch((function(e){V("")})),e.next=20;break;case 19:V("");case 20:e.next=23;break;case 22:V("");case 23:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function re(){return ae.apply(this,arguments)}function ae(){return(ae=Object(b.a)(l.a.mark((function e(){var t,r,a,s;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!S(n)||""===R){e.next=27;break}return e.next=3,c();case 3:if(null===(t=e.sent)){e.next=24;break}return e.next=7,E();case 7:if(r=e.sent[0]){e.next=11;break}return w(!1),e.abrupt("return");case 11:return e.prev=11,a=new t.eth.Contract(j,n),e.next=15,a.methods.isApprovedForAll(r,R).call();case 15:s=e.sent,w(s),e.next=22;break;case 19:e.prev=19,e.t0=e.catch(11),w(!1);case 22:e.next=25;break;case 24:w(!1);case 25:e.next=28;break;case 27:w(!1);case 28:case"end":return e.stop()}}),e,null,[[11,19]])})))).apply(this,arguments)}function se(){return(se=Object(b.a)(l.a.mark((function e(){var t,r,a,s,u;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c();case 2:return t=e.sent,e.next=5,p();case 5:return r=e.sent.ERC20Registry,e.next=8,E();case 8:return a=e.sent[0],e.next=11,v();case 11:return s=e.sent.ERC20Registry.address,u=new t.eth.Contract(r,s),e.next=15,A(u,u.methods.registerWrapper,[n,d],{from:a},null).catch((function(e){return alert(e.message)})).then(function(){var e=Object(b.a)(l.a.mark((function e(t){var r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t;case 2:return e.next=4,u.methods.getWrapper(n,d).call();case 4:r=e.sent,_(r);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());case 15:e.sent;case 16:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function ce(){return(ce=Object(b.a)(l.a.mark((function e(){var t,r,a,s,u;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c();case 2:return t=e.sent,e.next=5,p();case 5:return r=e.sent.ERC20Registry,e.next=8,E();case 8:return a=e.sent[0],e.next=11,v();case 11:return s=e.sent.ERC20Registry.address,u=new t.eth.Contract(r,s),e.next=15,A(u,u.methods.registerLocker,[n,d],{from:a},null).catch((function(e){return alert(e.message)})).then(function(){var e=Object(b.a)(l.a.mark((function e(t){var r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t;case 2:return e.next=4,u.methods.getLocker(n,d).call();case 4:r=e.sent,F(r);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());case 15:e.sent;case 16:case"end":return e.stop()}}),e)})))).apply(this,arguments)}Object(a.useEffect)((function(){function e(){return(e=Object(b.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,X();case 2:return e.next=4,Z();case 4:return e.next=6,ie();case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[n,d]),Object(a.useEffect)((function(){function e(){return(e=Object(b.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,re();case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[n,R]),Object(a.useEffect)((function(){function e(){return(e=Object(b.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ie();case 2:return e.next=4,te();case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[N]);var ue=[null,null,null,null,null];function ie(){return oe.apply(this,arguments)}function oe(){return(oe=Object(b.a)(l.a.mark((function e(){var t,r,a,s,u;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("connectEvents2"),e.next=3,c();case 3:if(null!==(t=e.sent)){e.next=6;break}return e.abrupt("return");case 6:return t.eth.clearSubscriptions(),e.next=9,E();case 9:if(r=e.sent[0]){e.next=12;break}return e.abrupt("return");case 12:if(console.log("lockerContract2",N),!S(N)){e.next=20;break}return e.next=16,p();case 16:a=e.sent.ERC20LockedERC1155,s=new t.eth.Contract(a,N),ue[0]=s.events.Transfer({filter:{to:r}},Object(b.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,te();case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))),ue[1]=s.events.Transfer({filter:{from:r}},Object(b.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,te();case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)}))));case 20:try{u=new t.eth.Contract(j,n),ue[2]=u.events.TransferSingle({filter:{_to:r}},Object(b.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Z();case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))),ue[3]=u.events.TransferSingle({filter:{_from:r}},Object(b.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Z();case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))),ue[4]=u.events.ApprovalForAll({filter:{account:r,operator:R}},Object(b.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,re();case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)}))))}catch(i){}case 21:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function pe(){return(pe=Object(b.a)(l.a.mark((function e(){var t,r,a,u,i;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!S(N)){e.next=30;break}return e.next=3,p();case 3:return t=e.sent.ERC20LockedERC1155,e.next=6,c();case 6:if(null===(r=e.sent)){e.next=30;break}return e.prev=8,a=new r.eth.Contract(t,N),u=new r.eth.Contract(j,n),e.next=13,E();case 13:if(i=e.sent[0]){e.next=17;break}return s(!1),e.abrupt("return");case 17:return e.next=19,u.methods.isApprovedForAll(i,N).call();case 19:if(e.sent){e.next=23;break}return e.next=23,A(u,u.methods.setApprovalForAll,[N,!0],{from:i},null);case 23:return e.next=25,A(a,a.methods.borrowERC1155,[k(J),i,i,[]],{from:i},null).catch((function(e){return alert(e.message)}));case 25:e.next=30;break;case 27:e.prev=27,e.t0=e.catch(8),alert(e.t0.message);case 30:case"end":return e.stop()}}),e,null,[[8,27]])})))).apply(this,arguments)}function le(){return(le=Object(b.a)(l.a.mark((function e(){var t,r,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!S(N)){e.next=21;break}return e.next=3,c();case 3:if(null===(t=e.sent)){e.next=21;break}return e.prev=5,r=new t.eth.Contract(j,n),e.next=9,E();case 9:if(a=e.sent[0]){e.next=13;break}return s(!1),e.abrupt("return");case 13:return e.next=15,A(r,r.methods.setApprovalForAll,[R,!0],{from:a},null);case 15:e.next=21;break;case 17:return e.prev=17,e.t0=e.catch(5),alert(e.t0.message),e.abrupt("return");case 21:case"end":return e.stop()}}),e,null,[[5,17]])})))).apply(this,arguments)}function fe(){return(fe=Object(b.a)(l.a.mark((function e(){var t,n,r,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p();case 2:if(t=e.sent.ERC20LockedERC1155,!S(N)){e.next=23;break}return e.next=6,c();case 6:if(null===(n=e.sent)){e.next=23;break}return e.prev=8,r=new n.eth.Contract(t,N),e.next=12,E();case 12:if(a=e.sent[0]){e.next=16;break}return s(!1),e.abrupt("return");case 16:return e.next=18,A(r,r.methods.returnToERC1155,[k(J),a,[]],{from:a},null);case 18:e.next=23;break;case 20:e.prev=20,e.t0=e.catch(8),alert(e.t0.message);case 23:case"end":return e.stop()}}),e,null,[[8,20]])})))).apply(this,arguments)}return Object(r.jsxs)("div",{children:[Object(r.jsxs)("p",{children:["ERC-1155 contract:"," ",Object(r.jsx)(P,{value:n,onChange:function(){var e=Object(b.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u(t.target.value);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()})," ",Object(r.jsxs)("span",{style:{display:m?"none":"inline"},children:[Object(r.jsx)("button",{onClick:function(){return le.apply(this,arguments)},disabled:""===R||m,children:"Approve for ERC-20"}),"\xa0",Object(r.jsx)("span",{style:{cursor:"help"},title:"Allow the ERC-20 wrapper contract to transfer funds for you (only when you explicitly request a transfer).",children:"\u24d8"})]}),Object(r.jsx)("small",{style:{display:m?"inline":"none"},children:"(approved for ERC-20 wrapper)"})]}),Object(r.jsxs)("p",{children:["ERC-1155 token ID:"," ",Object(r.jsx)($,{value:d,onChange:function(){var e=Object(b.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x(t.target.value);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()})]}),Object(r.jsxs)("p",{children:["Wrapper contract:"," ",Object(r.jsx)("code",{className:"address",children:R})," ",Object(r.jsx)("button",{onClick:function(){return se.apply(this,arguments)},style:{display:""!==R?"none":"inline"},disabled:!S(n)||!L(d),children:"Create"})]}),Object(r.jsxs)("p",{children:["Locker contract:"," ",Object(r.jsx)("code",{className:"address",children:N})," ",Object(r.jsx)("button",{onClick:function(){return ce.apply(this,arguments)},style:{display:""!==N?"none":"inline"},disabled:!S(n)||!L(d),children:"Create"})]}),Object(r.jsxs)("p",{children:["Amount on ERC-1155:"," ",Object(r.jsx)("span",{children:""===U?"\u2013":O(U)})]}),Object(r.jsxs)("p",{children:["Amount locked in ERC-20:"," ",Object(r.jsx)("span",{children:""===Q?"\u2013":O(Q)})]}),Object(r.jsxs)("p",{children:["Amount:"," ",Object(r.jsx)(q,{value:J,onChange:function(e){return G(e.target.value)}})," ",Object(r.jsx)("input",{type:"button",value:"Lock ERC-1155 in ERC-20",onClick:function(){return pe.apply(this,arguments)},disabled:!S(N)})," ",Object(r.jsx)("input",{type:"button",value:"Unlock ERC-1155 in ERC-20",onClick:function(){return fe.apply(this,arguments)},disabled:!S(N)})]}),Object(r.jsx)("p",{children:"Locking/unlocking is 1/1 swap."})]})}})]})]})})})},G=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,480)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,s=t.getLCP,c=t.getTTFB;n(e),r(e),a(e),s(e),c(e)}))};u.a.render(Object(r.jsx)(s.a.StrictMode,{children:Object(r.jsx)(J,{})}),document.getElementById("root")),document.title="Convert ERC-1155 \u2194 ERC-20",G()}},[[476,1,2]]]);
//# sourceMappingURL=main.b4bdde05.chunk.js.map