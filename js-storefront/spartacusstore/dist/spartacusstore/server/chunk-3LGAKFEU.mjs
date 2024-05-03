import './polyfills.server.mjs';
import{c as Se}from"./chunk-U6ROWM2B.mjs";import{F as fe,M as z,Z as M}from"./chunk-5IJ5Z3N4.mjs";import{$ as P,D as b,Ka as x,La as W,Ma as _,O as re,P as se,S as h,T as U,W as ne,aa as k,ba as I,bc as ge,c as w,cc as g,db as ue,eb as de,ga as C,gb as he,ha as N,hb as le,ka as F,la as oe,ma as ae,ra as ce,sa as l,va as H,wa as $,ya as O,z as L}from"./chunk-QG3PMDLA.mjs";import{$a as q,Cd as ie,Ea as c,Fa as v,Ja as n,Nc as ee,Ra as p,Sd as A,T as J,X as D,g as B,jd as te,p as X,q as R,u as Z,wa as Q,x as E,y as j}from"./chunk-JSDTXUAI.mjs";import{a as Y,j as K,k as m}from"./chunk-GHFNAT2I.mjs";var Ke=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275prov=c({token:e,factory:function(r){let s=null;return r?s=new(r||e):s=n(L),s},providedIn:"root"});let t=e;return t})(),ve="asm_enabled",pe=(()=>{let e=class e{constructor(i,r,s,a){this.location=i,this.winRef=r,this.launchDialogService=s,this.featureModules=a}load(){this.isEnabled()&&this.addUi()}isEnabled(){return this.isLaunched()&&!this.isUsedBefore()&&this.winRef.localStorage&&this.winRef.localStorage.setItem(ve,"true"),this.isLaunched()||this.isUsedBefore()||this.isEmulateInURL()}isLaunched(){let i=this.location.path().split("?")[1];return!!i&&i.split("&").includes("asm=true")}isEmulateInURL(){return this.location.path().indexOf("assisted-service/emulate?")>0}isUsedBefore(){return this.winRef.localStorage?this.winRef.localStorage.getItem(ve)==="true":!1}addUi(){this.featureModules.resolveFeature("asm").subscribe(()=>this.launchDialogService.launch("ASM"))}};e.\u0275fac=function(r){return new(r||e)(n(te),n(P),n(fe),n(ge))},e.\u0275prov=c({token:e,factory:e.\u0275fac,providedIn:"root"});let t=e;return t})(),me=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=p({type:e}),e.\u0275inj=v({providers:[{provide:ee,useFactory:Re,deps:[pe],multi:!0}],imports:[ie,M]});let t=e;return t})();function Re(t){return()=>{t.load()}}var y=function(t){return t.START_SESSION="START_SESSION",t.ORDER_HISTORY="ORDER_HISTORY",t.ACTIVE_CART="ACTIVE_CART",t}(y||{}),Ee={asm:{agentSessionTimer:{startingDelayInSeconds:600},customerSearch:{maxResults:20},customerList:{pageSize:5,showAvatar:!0,columns:[{headerLocalizationKey:"asm.customerList.tableHeader.customer",renderer:t=>t?.name??"",actionType:y.START_SESSION},{headerLocalizationKey:"asm.customerList.tableHeader.email",renderer:t=>t?.uid??""},{headerLocalizationKey:"asm.customerList.tableHeader.phone",renderer:t=>t?.defaultAddress?.phone??""},{headerLocalizationKey:"asm.customerList.tableHeader.account",renderer:t=>t?.orgUnit?.name??""},{headerLocalizationKey:"asm.customerList.tableHeader.cart",icon:{symbol:z.CART,captionLocalizationKey:"asm.customerList.tableHeader.cart"},actionType:y.ACTIVE_CART},{headerLocalizationKey:"asm.customerList.tableHeader.order",icon:{symbol:z.ORDER,captionLocalizationKey:"asm.customerList.tableHeader.order"},actionType:y.ORDER_HISTORY}]},userIdHttpHeader:{enable:!0}}},Ae=(()=>{let e=class e{constructor(i,r,s){this.config=i,this.userIdService=r,this.userIdConstants=s,this.userIdHeader="sap-commerce-cloud-user-id",this.uniqueUserIdConstants=new Set(Object.values(s))}intercept(i,r){if(!this.config.asm?.userIdHttpHeader?.enable)return r.handle(i);let s=i.context.get(ue),a;if(typeof s.sendUserIdAsHeader=="string")a=R(s.sendUserIdAsHeader);else if(s.sendUserIdAsHeader)a=this.userIdService.takeUserId().pipe(E(o=>this.uniqueUserIdConstants.has(o)?void 0:o));else return r.handle(i);return a.pipe(J(o=>{if(o){let d=i.clone({headers:i.headers.set(this.userIdHeader,o)});return r.handle(d)}else return r.handle(i)}))}};e.\u0275fac=function(r){return new(r||e)(n(L),n(U),n(de))},e.\u0275prov=c({token:e,factory:e.\u0275fac,providedIn:"root"});let t=e;return t})(),u=function(t){return t.CSAgent="CSAgent",t.User="User",t}(u||{}),G=(()=>{let e=class e extends I{constructor(){super(...arguments),this._tokenTarget$=new B(u.User)}getTokenTarget(){return this._tokenTarget$}setTokenTarget(i){this._tokenTarget$.next(i)}getEmulatedUserToken(){return this.emulatedUserToken}setEmulatedUserToken(i){this.emulatedUserToken=i}switchTokenTargetToCSAgent(){this._tokenTarget$.next(u.CSAgent)}switchTokenTargetToUser(){this._tokenTarget$.next(u.User)}clearEmulatedUserToken(){this.emulatedUserToken=void 0}};e.\u0275fac=(()=>{let i;return function(s){return(i||(i=q(e)))(s||e)}})(),e.\u0275prov=c({token:e,factory:e.\u0275fac,providedIn:"root"});let t=e;return t})(),Le=(()=>{let e=class e{constructor(i,r,s,a,o,d){this.authService=i,this.authStorageService=r,this.userIdService=s,this.oAuthLibWrapperService=a,this.store=o,this.userAccountFacade=d}authorizeCustomerSupportAgent(i,r){return m(this,null,function*(){let s,a;this.userAccountFacade.get().subscribe(o=>a=o?.customerId).unsubscribe(),this.authStorageService.getToken().subscribe(o=>s=o).unsubscribe(),this.authStorageService.switchTokenTargetToCSAgent();try{yield this.oAuthLibWrapperService.authorizeWithPasswordFlow(i,r),this.store.dispatch(new h.Logout),a!==void 0&&s!==void 0?(this.userIdService.setUserId(a),this.authStorageService.setEmulatedUserToken(s),this.store.dispatch(new h.Login)):(this.userIdService.setUserId(se),this.authStorageService.clearEmulatedUserToken())}catch{this.authStorageService.switchTokenTargetToUser()}})}startCustomerEmulationSession(i){this.authStorageService.clearEmulatedUserToken(),this.store.dispatch(new h.Logout),this.userIdService.setUserId(i),this.store.dispatch(new h.Login)}isCustomerSupportAgentLoggedIn(){return j([this.authStorageService.getToken(),this.authStorageService.getTokenTarget()]).pipe(E(([i,r])=>!!(i?.access_token&&r===u.CSAgent)))}isCustomerEmulated(){return this.userIdService.isEmulated()}getCustomerSupportAgentTokenLoading(){return R(!1)}logoutCustomerSupportAgent(){return m(this,null,function*(){let i=this.authStorageService.getEmulatedUserToken(),r;this.userIdService.isEmulated().subscribe(s=>r=s).unsubscribe(),yield this.oAuthLibWrapperService.revokeAndLogout(),this.store.dispatch({type:"[Auth] Logout Customer Support Agent"}),this.authStorageService.setTokenTarget(u.User),r&&i?(this.store.dispatch(new h.Logout),this.authStorageService.setToken(i),this.userIdService.setUserId(re),this.authStorageService.clearEmulatedUserToken(),this.store.dispatch(new h.Login)):this.authService.logout()})}};e.\u0275fac=function(r){return new(r||e)(n(l),n(G),n(U),n(k),n(w),n(Se))},e.\u0275prov=c({token:e,factory:e.\u0275fac,providedIn:"root"});let t=e;return t})(),be=(()=>{let e=class e extends _{constructor(i,r,s,a,o,d,f,S){super(i,r,a,o,f,d,S),this.authService=i,this.authStorageService=r,this.csAgentAuthService=s,this.oAuthLibWrapperService=a,this.routingService=o,this.globalMessageService=d,this.occEndpointsService=f,this.authRedirectService=S}shouldAddAuthorizationHeader(i){return super.shouldAddAuthorizationHeader(i)||this.isCSAgentTokenRequest(i)}shouldCatchError(i){return super.shouldCatchError(i)||this.isCSAgentTokenRequest(i)}alterRequest(i,r){let s=!!this.getAuthorizationHeader(i),a=this.isCSAgentTokenRequest(i),o=super.alterRequest(i,r);return!s&&a?(o=i.clone({setHeaders:Y({},this.createAuthorizationHeader(r))}),$.removeHeader(H,o)):o}isCSAgentTokenRequest(i){return!!$.getInterceptorParam(H,i.headers)}handleExpiredRefreshToken(){this.csAgentAuthService.isCustomerSupportAgentLoggedIn().pipe(D(1)).subscribe(i=>{i?(this.authService.setLogoutProgress(!0),this.csAgentAuthService.logoutCustomerSupportAgent(),this.globalMessageService.add({key:"asm.csagentTokenExpired"},x.MSG_TYPE_ERROR)):super.handleExpiredRefreshToken()})}};e.\u0275fac=function(r){return new(r||e)(n(l),n(I),n(Le),n(k),n(C),n(W),n(O),n(N))},e.\u0275prov=c({token:e,factory:e.\u0275fac,providedIn:"root"});let t=e;return t})(),Ue=(()=>{let e=class e extends l{constructor(i,r,s,a,o,d,f,S){super(i,r,s,a,o,f,S),this.store=i,this.userIdService=r,this.oAuthLibWrapperService=s,this.authStorageService=a,this.authRedirectService=o,this.globalMessageService=d,this.routingService=f,this.authMultisiteIsolationService=S}canUserLogin(){let i,r;return this.authStorageService.getToken().subscribe(s=>r=s).unsubscribe(),this.authStorageService.getTokenTarget().subscribe(s=>i=s).unsubscribe(),!(r?.access_token&&i===u.CSAgent)}warnAboutLoggedCSAgent(){this.globalMessageService.add({key:"asm.auth.agentLoggedInError"},x.MSG_TYPE_ERROR)}loginWithCredentials(i,r){return m(this,null,function*(){this.canUserLogin()?yield K(e.prototype,this,"loginWithCredentials").call(this,i,r):this.warnAboutLoggedCSAgent()})}loginWithRedirect(){return this.canUserLogin()?(super.loginWithRedirect(),!0):(this.warnAboutLoggedCSAgent(),!1)}coreLogout(){return Z(this.userIdService.isEmulated().pipe(D(1),Q(i=>i?(this.authStorageService.clearEmulatedUserToken(),this.userIdService.clearUserId(),this.store.dispatch(new h.Logout),R(!0)):X(super.coreLogout()))))}isUserLoggedIn(){return j([this.authStorageService.getToken(),this.userIdService.isEmulated(),this.authStorageService.getTokenTarget()]).pipe(E(([i,r,s])=>!!i?.access_token&&(s===u.User||s===u.CSAgent&&r)))}};e.\u0275fac=function(r){return new(r||e)(n(w),n(U),n(k),n(G),n(N),n(W),n(C),n(ce))},e.\u0275prov=c({token:e,factory:e.\u0275fac,providedIn:"root"});let t=e;return t})(),Be=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=p({type:e}),e.\u0275inj=v({providers:[b(Ee),{provide:I,useExisting:G},{provide:l,useExisting:Ue},{provide:_,useExisting:be},{provide:A,useExisting:Ae,multi:!0}],imports:[me]});let t=e;return t})(),T="asm",Xe=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275prov=c({token:e,factory:()=>g({facade:e,feature:T,methods:["bindCart"]}),providedIn:"root"});let t=e;return t})(),Ze=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275prov=c({token:e,factory:()=>g({facade:e,feature:T,methods:["createCustomer"]}),providedIn:"root"});let t=e;return t})(),Je=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275prov=c({token:e,factory:()=>g({facade:e,feature:T,methods:["getCustomerLists","getCustomerListsState","customerListCustomersSearch","getCustomerListCustomersSearchResults","getCustomerListCustomersSearchResultsLoading","customerListCustomersSearchReset","getCustomerListCustomersSearchResultsError"]}),providedIn:"root"});let t=e;return t})(),Qe=(()=>{let e=class e{constructor(i,r,s){this.routingService=i,this.winRef=r,this.asmEnablerService=s,this.searchParams=new URLSearchParams(this.winRef?.location?.search)}isEmulateInURL(){return this.asmEnablerService?.isEmulateInURL()||!1}getSearchParameter(i){return this.searchParams.get(i)??void 0}handleNavigation(i=this.getParamsInUrl()){i.cartType==="active"?this.routingService.go({cxRoute:"cart"}):i.cartType==="saved"&&i.cartId?this.routingService.go("my-account/saved-cart/"+i.cartId):i.orderId?this.routingService.go({cxRoute:"orderDetails",params:{code:i.orderId}}):i.ticketId&&this.routingService.go({cxRoute:"supportTicketDetails",params:{ticketCode:i.ticketId}})}getParamsInUrl(){let i={customerId:this.getSearchParameter("customerId"),orderId:this.getSearchParameter("orderId"),ticketId:this.getSearchParameter("ticketId"),cartId:this.getSearchParameter("cartId"),cartType:this.getSearchParameter("cartType")};return Object.fromEntries(Object.entries(i).filter(([r,s])=>!!s))}};e.\u0275fac=function(r){return new(r||e)(n(C),n(P),n(pe))},e.\u0275prov=c({token:e,factory:e.\u0275fac,providedIn:"root"});let t=e;return t})();var V="asmCustomer360",ke="asmCustomer360Core",Ce=(()=>{let e=class e{constructor(i,r,s,a){this.languageService=i,this.currencyService=r,this.occEndpoints=s,this.config=a,this.activeLang=F(this.config,oe),this.activeCurr=F(this.config,ae),this.languageService.getActive().subscribe(o=>this.activeLang=o),this.currencyService.getActive().subscribe(o=>{this.activeCurr=o})}intercept(i,r){return i.url.includes(this.occEndpoints.getBaseUrl({prefix:!1,baseSite:!1}))&&i.url.includes("/assistedservicewebservices/")&&(i=i.clone({setParams:{lang:this.activeLang??"",curr:this.activeCurr??""}})),r.handle(i)}};e.\u0275fac=function(r){return new(r||e)(n(he),n(le),n(O),n(ne))},e.\u0275prov=c({token:e,factory:e.\u0275fac,providedIn:"root"});let t=e;return t})(),nt=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=p({type:e}),e.\u0275inj=v({providers:[b({featureModules:{[V]:{dependencies:[T]},[ke]:V}}),{provide:A,useExisting:Ce,multi:!0}],imports:[M]});let t=e;return t})(),ot=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275prov=c({token:e,factory:()=>g({facade:e,feature:V,methods:["get360Data"]}),providedIn:"root"});let t=e;return t})();var Oe=function(t){return t.REVIEW_LIST="c360ReviewList",t.STORE_LOCATION="c360StoreLocation",t.PRODUCT_INTEREST_LIST="c360CustomerProductInterestList",t.SUPPORT_TICKET_LIST="c360TicketList",t.CUSTOMER_PROFILE="c360CustomerProfile",t.ACTIVE_CART="c360Cart",t.SAVED_CART="c360SavedCart",t.OVERVIEW="c360Overview",t.ACTIVITY_LIST="c360ActivityList",t.COUPON_LIST="c360CouponList",t.PROMOTION_LIST="c360PromotionList",t.CUSTOMER_COUPON_LIST="c360CustomerCouponList",t}(Oe||{}),Me=function(t){return t.VISA="visa",t.MASTER="master",t.MASTERCARD_EUROCARD="mastercard_eurocard",t.DINERS="diners",t.AMEX="amex",t}(Me||{}),ye=function(t){return t.ARROW_LEFT="ArrowLeft",t.ARROW_RIGHT="ArrowRight",t.ARROW_DOWN="ArrowDown",t.ARROW_UP="ArrowUp",t.HOME="Home",t.END="End",t.PAGE_DOWN="PageDown",t.PAGE_UP="PageUp",t}(ye||{}),je=function(t){return t.NAVIGATE="NAVIGATE",t}(je||{});export{Ke as a,ve as b,pe as c,y as d,G as e,Le as f,Be as g,T as h,Xe as i,Ze as j,Je as k,Qe as l,V as m,nt as n,ot as o,Oe as p,Me as q,ye as r,je as s};
