import{Nf as h,e as d,na as s,oa as r,od as u,oe as f,pe as g,qa as o,re as p,te as l,ue as v,wa as c}from"./chunk-ST632LWR.js";var C=(()=>{let e=class e{constructor(n,i){this.eventService=n,this.globalMessageService=i,this.subscriptions=new d,this.onAuth()}onAuth(){this.subscriptions.add(this.eventService.get(g).subscribe(()=>{this.globalMessageService.add({key:"authMessages.signedOutSuccessfully"},l.MSG_TYPE_CONFIRMATION)}))}ngOnDestroy(){this.subscriptions.unsubscribe()}};e.\u0275fac=function(i){return new(i||e)(o(p),o(v))},e.\u0275prov=s({token:e,factory:e.\u0275fac,providedIn:"root"});let t=e;return t})(),M=(()=>{let e=class e{constructor(n){}};e.\u0275fac=function(i){return new(i||e)(o(C))},e.\u0275mod=c({type:e}),e.\u0275inj=r({});let t=e;return t})(),m="userAccount",y="userAccountCore";function b(){return{featureModules:{[m]:{cmsComponents:["LoginComponent","ReturningCustomerLoginComponent","ReturningCustomerRegisterComponent","MyAccountViewUserComponent"]},[y]:m}}}var E=(()=>{let e=class e{};e.\u0275fac=function(i){return new(i||e)},e.\u0275mod=c({type:e}),e.\u0275inj=r({providers:[u(b)],imports:[M]});let t=e;return t})(),F=(()=>{let e=class e{};e.\u0275fac=function(i){return new(i||e)},e.\u0275prov=s({token:e,factory:()=>h({facade:e,feature:y,methods:["get","getById"]}),providedIn:"root"});let t=e;return t})(),a=class extends f{},N=(()=>{let e=class e extends a{};e.type="UserAccountChangedEvent";let t=e;return t})();export{m as a,E as b,F as c,N as d};
