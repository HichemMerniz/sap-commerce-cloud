import{b as Rr}from"./chunk-64EE32CY.js";import{C as ot,F as kr,G as fe,H as P,I as At,J as Gr,K as Hr,O as S,P as Yr,R as K,c as mr,d as Tr,e as Dr,f as Fr,g as Mr,h as _r,i as br,j as Ur,k as wr,l as Or,n as Vr,q as ge,r as Ie,s as Se,t as $r,u as Lr,v as jr,w as Nr,x as xr,y as Pr}from"./chunk-LFKNHGJI.js";import{Eb as Ar}from"./chunk-XOYCCVJR.js";import{Ad as V,Bd as ar,Cd as q,Da as ue,Dd as Ce,E as We,Fe as Ee,Ge as gr,I as p,Id as cr,J as qe,L as _,Ld as st,M as tt,Mc as he,N as ze,Nc as tr,Nd as or,Oc as rt,P as f,Pc as R,Pd as dr,Qc as D,Rc as er,Rd as nt,S as m,Sc as rr,T as Ke,Tc as y,Uc as it,Vc as v,Wc as ir,Wd as ur,Y as Qe,Yb as Xe,Yd as x,Z as Je,Zd as hr,Ze as Ir,a as C,b as I,ba as oe,bd as sr,e as ft,fa as E,ff as j,ge as Cr,he as pr,i as Ye,ia as N,ie as lr,je as U,ka as g,ke as Er,le as z,na as l,oa as B,of as ve,pa as de,pe,pf as ct,q as O,qa as c,qe as vr,r as F,ra as et,re as L,se as le,sf as Sr,tc as Ze,tf as fr,u as Be,v as o,w as Z,wa as W,wd as d,wf as yr,x as M,yd as b,ye as at,zd as nr,ze as yt}from"./chunk-EVGLS3CH.js";var Xr="cart",h="[Multi Cart] Multi Cart Data",H="addVoucher",Xt="[Cart-entry] Add Entry",It="[Cart-entry] Add Entry Success",Zt="[Cart-entry] Add Entry Fail",Fe="[Cart-entry] Remove Entry",te="[Cart-entry] Remove Entry Success",Me="[Cart-entry] Remove Entry Fail",_e="[Cart-entry] Update Entry",ee="[Cart-entry] Update Entry Success",be="[Cart-entry] Update Entry Fail",ut=class extends d.EntityProcessesIncrementAction{constructor(t){super(h,t.cartId),this.payload=t,this.type=Xt}},ht=class extends d.EntityProcessesDecrementAction{constructor(t){super(h,t.cartId),this.payload=t,this.type=It}},Ct=class extends d.EntityProcessesDecrementAction{constructor(t){super(h,t.cartId),this.payload=t,this.type=Zt}},Rt=class extends d.EntityProcessesIncrementAction{constructor(t){super(h,t.cartId),this.payload=t,this.type=Fe}},mt=class extends d.EntityProcessesDecrementAction{constructor(t){super(h,t.cartId),this.payload=t,this.type=te}},Tt=class extends d.EntityProcessesDecrementAction{constructor(t){super(h,t.cartId),this.payload=t,this.type=Me}},Dt=class extends d.EntityProcessesIncrementAction{constructor(t){super(h,t.cartId),this.payload=t,this.type=_e}},Ft=class extends d.EntityProcessesDecrementAction{constructor(t){super(h,t.cartId),this.payload=t,this.type=ee}},Mt=class extends d.EntityProcessesDecrementAction{constructor(t){super(h,t.cartId),this.payload=t,this.type=be}},St="[Cart-voucher] Add Cart Vouchers",Ue="[Cart-voucher] Add Cart Voucher Fail",re="[Cart-voucher] Add Cart Voucher Success",Zr="[Cart-voucher] Reset Add Cart Voucher",ie="[Cart-voucher] Remove Cart Voucher",we="[Cart-voucher] Remove Cart Voucher Fail",se="[Cart-voucher] Remove Cart Voucher Success",_t=class extends d.EntityLoadAction{constructor(t){super(at,H),this.payload=t,this.type=St}},bt=class extends d.EntityFailAction{constructor(t){super(at,H,t.error),this.payload=t,this.type=Ue}},Ut=class extends d.EntitySuccessAction{constructor(t){super(at,H),this.payload=t,this.type=re}},wt=class extends d.EntityLoaderResetAction{constructor(){super(at,H),this.type=Zr}},Ot=class extends d.EntityProcessesIncrementAction{constructor(t){super(h,t.cartId),this.payload=t,this.type=ie}},Vt=class extends d.EntityProcessesDecrementAction{constructor(t){super(h,t.cartId),this.payload=t,this.type=we}},$t=class extends d.EntityProcessesDecrementAction{constructor(t){super(h,t.cartId),this.payload=t,this.type=se}},Q="[Cart] Create Cart",Oe="[Cart] Create Cart Fail",J="[Cart] Create Cart Success",pt="[Cart] Load Cart",ti="[Cart] Load Cart Fail",k="[Cart] Load Cart Success",Ve="[Cart] Load Carts Success",$e="[Cart] Add Email to Cart",ei="[Cart] Add Email to Cart Fail",ri="[Cart] Add Email to Cart Success",Le="[Cart] Merge Cart",je="[Cart] Merge Cart Success",ii="[Cart] Reset Cart Details",Ne="[Cart] Remove Cart",ne="[Cart] Delete Cart",ae="[Cart] Delete Cart Success",xe="[Cart] Delete Cart Fail",lt=class extends d.EntityLoadAction{constructor(t){super(h,t.tempCartId),this.payload=t,this.type=Q}},Lt=class extends d.EntityFailAction{constructor(t){super(h,t.tempCartId),this.payload=t,this.type=Oe}},jt=class extends d.EntitySuccessAction{constructor(t){super(h,t.cartId),this.payload=t,this.type=J}},Nt=class extends d.EntityProcessesIncrementAction{constructor(t){super(h,t.cartId),this.payload=t,this.type=$e}},xt=class extends d.EntityProcessesDecrementAction{constructor(t){super(h,t.cartId),this.payload=t,this.type=ei}},Pt=class extends d.EntityProcessesDecrementAction{constructor(t){super(h,t.cartId),this.payload=t,this.type=ri}},A=class extends d.EntityLoadAction{constructor(t){super(h,t.cartId),this.payload=t,this.type=pt}},Et=class extends d.EntityFailAction{constructor(t){super(h,t.cartId,t.error),this.payload=t,this.type=ti}},kt=class extends d.EntitySuccessAction{constructor(t){super(h,t.cartId),this.payload=t,this.type=k}},ye=class extends d.EntitySuccessAction{constructor(t){super(h,t.map($=>$?.code??"")),this.payload=t,this.type=Ve}},Gt=class{constructor(t){this.payload=t,this.type=Le}},Ht=class extends d.EntityRemoveAction{constructor(t){super(h,t.oldCartId),this.payload=t,this.type=je}},Yt=class extends d.ProcessesLoaderResetAction{constructor(){super(h),this.type=ii}},Y=class extends d.EntityRemoveAction{constructor(t){super(h,t.cartId),this.payload=t,this.type=Ne}},Bt=class{constructor(t){this.payload=t,this.type=ne}},Wt=class extends d.EntityRemoveAction{constructor(t){super(h,t.cartId),this.payload=t,this.type=ae}},qt=class{constructor(t){this.payload=t,this.type=xe}},si="[Cart] Cart Processes Increment",ni="[Cart] Cart Processes Decrement",zt="[Cart] Set Active Cart Id",Pe="[Cart] Clear Cart State",ke="[Cart] Set cart type index",Ge="[Cart] Set cart data",Kt=class extends d.EntityProcessesIncrementAction{constructor(t){super(h,t),this.payload=t,this.type=si}},vt=class extends d.EntityProcessesDecrementAction{constructor(t){super(h,t),this.payload=t,this.type=ni}},gt=class{constructor(t){this.payload=t,this.type=zt}},Qt=class extends d.EntityRemoveAllAction{constructor(){super(h),this.type=Pe}},w=class{constructor(t){this.payload=t,this.type=ke}},Ae=class extends d.EntitySuccessAction{constructor(t){super(h,t.cartId),this.payload=t,this.type=Ge}},Is=Object.freeze({__proto__:null,ADD_EMAIL_TO_CART:$e,ADD_EMAIL_TO_CART_FAIL:ei,ADD_EMAIL_TO_CART_SUCCESS:ri,AddEmailToCart:Nt,AddEmailToCartFail:xt,AddEmailToCartSuccess:Pt,CART_ADD_ENTRY:Xt,CART_ADD_ENTRY_FAIL:Zt,CART_ADD_ENTRY_SUCCESS:It,CART_ADD_VOUCHER:St,CART_ADD_VOUCHER_FAIL:Ue,CART_ADD_VOUCHER_SUCCESS:re,CART_PROCESSES_DECREMENT:ni,CART_PROCESSES_INCREMENT:si,CART_REMOVE_ENTRY:Fe,CART_REMOVE_ENTRY_FAIL:Me,CART_REMOVE_ENTRY_SUCCESS:te,CART_REMOVE_VOUCHER:ie,CART_REMOVE_VOUCHER_FAIL:we,CART_REMOVE_VOUCHER_SUCCESS:se,CART_RESET_ADD_VOUCHER:Zr,CART_UPDATE_ENTRY:_e,CART_UPDATE_ENTRY_FAIL:be,CART_UPDATE_ENTRY_SUCCESS:ee,CLEAR_CART_STATE:Pe,CREATE_CART:Q,CREATE_CART_FAIL:Oe,CREATE_CART_SUCCESS:J,CartAddEntry:ut,CartAddEntryFail:Ct,CartAddEntrySuccess:ht,CartAddVoucher:_t,CartAddVoucherFail:bt,CartAddVoucherSuccess:Ut,CartProcessesDecrement:vt,CartProcessesIncrement:Kt,CartRemoveEntry:Rt,CartRemoveEntryFail:Tt,CartRemoveEntrySuccess:mt,CartRemoveVoucher:Ot,CartRemoveVoucherFail:Vt,CartRemoveVoucherSuccess:$t,CartResetAddVoucher:wt,CartUpdateEntry:Dt,CartUpdateEntryFail:Mt,CartUpdateEntrySuccess:Ft,ClearCartState:Qt,CreateCart:lt,CreateCartFail:Lt,CreateCartSuccess:jt,DELETE_CART:ne,DELETE_CART_FAIL:xe,DELETE_CART_SUCCESS:ae,DeleteCart:Bt,DeleteCartFail:qt,DeleteCartSuccess:Wt,LOAD_CART:pt,LOAD_CARTS_SUCCESS:Ve,LOAD_CART_FAIL:ti,LOAD_CART_SUCCESS:k,LoadCart:A,LoadCartFail:Et,LoadCartSuccess:kt,LoadCartsSuccess:ye,MERGE_CART:Le,MERGE_CART_SUCCESS:je,MergeCart:Gt,MergeCartSuccess:Ht,REMOVE_CART:Ne,RESET_CART_DETAILS:ii,RemoveCart:Y,ResetCartDetails:Yt,SET_ACTIVE_CART_ID:zt,SET_CART_DATA:Ge,SET_CART_TYPE_INDEX:ke,SetActiveCartId:gt,SetCartData:Ae,SetCartTypeIndex:w}),Re=class{},ai=(()=>{let t=class t{constructor(e){this.adapter=e}add(e,r,s,n,a){return this.adapter.add(e,r,s,n,a)}update(e,r,s,n,a,u=!1){return this.adapter.update(e,r,s,n,a,u)}remove(e,r,s){return this.adapter.remove(e,r,s)}};t.\u0275fac=function(r){return new(r||t)(c(Re))},t.\u0275prov=l({token:t,factory:t.\u0275fac,providedIn:"root"});let i=t;return i})(),Ri=(()=>{let t=class t{constructor(e,r){this.actions$=e,this.cartEntryConnector=r,this.contextChange$=this.actions$.pipe(v(x.CURRENCY_CHANGE,x.LANGUAGE_CHANGE)),this.logger=et(st),this.addEntry$=y(()=>this.actions$.pipe(v(Xt),o(s=>s.payload),tt(s=>this.cartEntryConnector.add(s.userId,s.cartId,s.productCode,s.quantity,s.pickupStore).pipe(o(n=>new ht(C(C({},s),n))),_(n=>O([new Ct(I(C({},s),{error:U(n,this.logger)})),new A({cartId:s.cartId,userId:s.userId})])))),j(this.contextChange$))),this.removeEntry$=y(()=>this.actions$.pipe(v(Fe),o(s=>s.payload),tt(s=>this.cartEntryConnector.remove(s.userId,s.cartId,s.entryNumber).pipe(o(()=>new mt(C({},s))),_(n=>O([new Tt(I(C({},s),{error:U(n,this.logger)})),new A({cartId:s.cartId,userId:s.userId})])))),j(this.contextChange$))),this.updateEntry$=y(()=>this.actions$.pipe(v(_e),o(s=>s.payload),tt(s=>this.cartEntryConnector.update(s.userId,s.cartId,s.entryNumber,s.quantity,s.pickupStore,s.pickupToDelivery).pipe(o(()=>new Ft(C({},s))),_(n=>O([new Mt(I(C({},s),{error:U(n,this.logger)})),new A({cartId:s.cartId,userId:s.userId})])))),j(this.contextChange$)))}};t.\u0275fac=function(r){return new(r||t)(c(it),c(ai))},t.\u0275prov=l({token:t,factory:t.\u0275fac});let i=t;return i})(),me=class{},ci=(()=>{let t=class t{constructor(e){this.adapter=e}add(e,r,s){return this.adapter.add(e,r,s)}remove(e,r,s){return this.adapter.remove(e,r,s)}};t.\u0275fac=function(r){return new(r||t)(c(me))},t.\u0275prov=l({token:t,factory:t.\u0275fac,providedIn:"root"});let i=t;return i})(),mi=(()=>{let t=class t{constructor(e,r,s){this.actions$=e,this.cartVoucherConnector=r,this.messageService=s,this.logger=et(st),this.addCartVoucher$=y(()=>this.actions$.pipe(v(St),o(n=>n.payload),M(n=>this.cartVoucherConnector.add(n.userId,n.cartId,n.voucherId).pipe(o(()=>(this.showGlobalMessage("voucher.applyVoucherSuccess",n.voucherId,L.MSG_TYPE_CONFIRMATION),new Ut(C({},n)))),_(a=>O([new bt(I(C({},n),{error:U(a,this.logger)})),new vt(n.cartId),new A({userId:n.userId,cartId:n.cartId})])))))),this.removeCartVoucher$=y(()=>this.actions$.pipe(v(ie),o(n=>n.payload),M(n=>this.cartVoucherConnector.remove(n.userId,n.cartId,n.voucherId).pipe(o(()=>(this.showGlobalMessage("voucher.removeVoucherSuccess",n.voucherId,L.MSG_TYPE_INFO),new $t({userId:n.userId,cartId:n.cartId,voucherId:n.voucherId}))),_(a=>O([new Vt({error:U(a,this.logger),cartId:n.cartId,userId:n.userId,voucherId:n.voucherId}),new A({userId:n.userId,cartId:n.cartId})]))))))}showGlobalMessage(e,r,s){this.messageService.add({key:e,params:{voucherCode:r}},s)}};t.\u0275fac=function(r){return new(r||t)(c(it),c(ci),c(le))},t.\u0275prov=l({token:t,factory:t.\u0275fac});let i=t;return i})();function G(i,t){return t===b?i?.guid??"":i?.code??""}function oi(i=""){return i.startsWith("selectivecart")}function di(i){return i.reason==="notFound"&&i.subjectType==="cart"&&!oi(i.subject)}function Ti(i){return i.message==="coupon.already.redeemed"}function Di(i){return i.message==="coupon.invalid.code.provided"}function Fi(i){return i.type==="VoucherOperationError"}function Mi(i){return i.type==="CartError"||i.type==="CartAddressError"||i.type==="CartEntryError"||i.type==="CartEntryGroupError"}function Br(i){return i.startsWith("temp-")}function dt(i){return!i||typeof i=="object"&&Object.keys(i).length===0}function _i(i){return i?!!i.match(yr):!1}function bi(i,t){return i!==b&&t!==i}var ce=er(Xr),X=D(ce,i=>i.carts),ui=i=>D(X,t=>d.entityProcessesLoaderStateSelector(t,i)),He=i=>D(X,t=>d.entityValueSelector(t,i)),hi=i=>D(X,t=>d.entityIsStableSelector(t,i)),Ci=i=>D(X,t=>d.entityHasPendingProcessesSelector(t,i)),Jt=i=>D(He(i),t=>t&&t.entries?t.entries:[]),pi=(i,t)=>D(Jt(i),$=>$.find(e=>e.product?.code===t)),li=D(X,i=>Object.keys(i.entities).map(t=>d.entityValueSelector(i,t))),Ei=D(ce,i=>i.index),vi=i=>D(Ei,t=>t&&t[i]),Te=class{},gi=(()=>{let t=class t{constructor(e){this.adapter=e}loadAll(e){return this.adapter.loadAll(e)}load(e,r){return this.adapter.load(e,r)}create(e,r,s){return this.adapter.create(e,r,s)}delete(e,r){return this.adapter.delete(e,r)}save(e,r,s,n){return this.adapter.save(e,r,s,n)}addEmail(e,r,s){return this.adapter.addEmail(e,r,s)}};t.\u0275fac=function(r){return new(r||t)(c(Te))},t.\u0275prov=l({token:t,factory:t.\u0275fac,providedIn:"root"});let i=t;return i})(),Ui=(()=>{let t=class t{handleLoadCartError(e,r){if(r?.error?.errors){if(r.error.errors.filter(a=>a.reason==="invalid").length>0)return F(new A(C({},e)));if(r.error.errors.filter(a=>di(a)||a.reason==="UnknownResourceError").length>0)return F(new Y({cartId:e.cartId}))}return F(new Et(I(C({},e),{error:U(r,this.logger)})))}constructor(e,r,s){this.actions$=e,this.cartConnector=r,this.store=s,this.contextChange$=this.actions$.pipe(v(x.CURRENCY_CHANGE,x.LANGUAGE_CHANGE)),this.logger=et(st),this.loadCart$=y(()=>this.actions$.pipe(v(pt),o(n=>n.payload),Qe(n=>n.cartId),M(n=>n.pipe(E(a=>F(a).pipe(g(this.store.pipe(R(Ci(a.cartId)))))),p(([a,u])=>!u),o(([a])=>a),E(a=>this.cartConnector.load(a.userId,a.cartId).pipe(M(u=>{let T=[];return u?(T.push(new kt(I(C({},a),{cart:u,cartId:G(u,a.userId)}))),a.cartId===V&&T.push(new Y({cartId:V}))):T=[new Et(I(C({},a),{error:{}}))],T}),_(u=>this.handleLoadCartError(a,u)))))),j(this.contextChange$))),this.createCart$=y(()=>this.actions$.pipe(v(Q),o(n=>n.payload),M(n=>this.cartConnector.create(n.userId,n.oldCartId,n.toMergeCartGuid).pipe(E(a=>{let u=[];return n.oldCartId&&u.push(new Ht({extraData:n.extraData,userId:n.userId,tempCartId:n.tempCartId,cartId:G(a,n.userId),oldCartId:n.oldCartId})),[new jt(I(C({},n),{cart:a,cartId:G(a,n.userId)})),new Y({cartId:n.tempCartId}),...u]}),_(a=>F(new Lt(I(C({},n),{error:U(a,this.logger)})))))),j(this.contextChange$))),this.mergeCart$=y(()=>this.actions$.pipe(v(Le),o(n=>n.payload),E(n=>this.cartConnector.load(n.userId,V).pipe(o(a=>{if(a?.code!==n.cartId)return new lt({userId:n.userId,oldCartId:n.cartId,toMergeCartGuid:a?a.guid:void 0,extraData:n.extraData,tempCartId:n.tempCartId})}),p(nt))),j(this.contextChange$))),this.refresh$=y(()=>this.actions$.pipe(v(re),o(n=>n.payload),tt(n=>O([new vt(n.cartId),new A({userId:n.userId,cartId:n.cartId})])))),this.refreshWithoutProcesses$=y(()=>this.actions$.pipe(v(It,te,ee,se),o(n=>n.payload),o(n=>new A({userId:n.userId,cartId:n.cartId})))),this.resetCartDetailsOnSiteContextChange$=y(()=>this.actions$.pipe(v(x.LANGUAGE_CHANGE,x.CURRENCY_CHANGE),M(()=>[new Yt]))),this.addEmail$=y(()=>this.actions$.pipe(v($e),o(n=>n.payload),M(n=>this.cartConnector.addEmail(n.userId,n.cartId,n.email).pipe(M(()=>[new Pt(C({},n)),new A({userId:n.userId,cartId:n.cartId})]),_(a=>O([new xt(I(C({},n),{error:U(a,this.logger)})),new A({userId:n.userId,cartId:n.cartId})])))),j(this.contextChange$))),this.deleteCart$=y(()=>this.actions$.pipe(v(ne),o(n=>n.payload),M(n=>this.cartConnector.delete(n.userId,n.cartId).pipe(o(()=>new Wt(C({},n))),_(a=>O([new qt(I(C({},n),{error:U(a,this.logger)})),new A(C({},n))]))))))}};t.\u0275fac=function(r){return new(r||t)(c(it),c(gi),c(rt))},t.\u0275prov=l({token:t,factory:t.\u0275fac});let i=t;return i})(),Ii=(()=>{let t=class t{getActiveCartTypeOnLoadSuccess(e){if(e?.payload?.extraData?.active)return e.payload?.cart.saveTime?new w({cartType:S.ACTIVE,cartId:""}):new w({cartType:S.ACTIVE,cartId:e.meta.entityId})}};t.\u0275fac=function(r){return new(r||t)},t.\u0275prov=l({token:t,factory:t.\u0275fac});let i=t;return i})(),wi=(()=>{let t=class t{getActiveCartTypeOnLoad(e){if(e?.payload?.cartId===V)return new w({cartType:S.ACTIVE,cartId:""})}getActiveCartTypeOnLoadSuccess(e){return this.multiCartEffectsService.getActiveCartTypeOnLoadSuccess(e)}getActiveCartTypeOnCreate(e){if(e?.payload?.extraData?.active)return new w({cartType:S.ACTIVE,cartId:e.meta.entityId})}constructor(e,r){this.actions$=e,this.multiCartEffectsService=r,this.processesIncrement$=y(()=>this.actions$.pipe(v(St),o(s=>s.payload),o(s=>new Kt(s.cartId)))),this.setSelectiveId$=y(()=>this.actions$.pipe(v(k),o(s=>{switch(s.type){case k:{let n=s.payload;if(oi(n.cartId))return new w({cartType:S.SELECTIVE,cartId:n.cartId});break}}}),p(nt))),this.setActiveCartId$=y(()=>this.actions$.pipe(v(k,pt,J,Q,zt),o(s=>{switch(s.type){case pt:return this.getActiveCartTypeOnLoad(s);case k:return this.getActiveCartTypeOnLoadSuccess(s);case Q:return this.getActiveCartTypeOnCreate(s);case J:return new w({cartType:s?.payload?.extraData?.active?S.ACTIVE:S.NEW_CREATED,cartId:s.meta.entityId});case zt:return new w({cartType:S.ACTIVE,cartId:s.payload})}}),p(nt)))}};t.\u0275fac=function(r){return new(r||t)(c(it),c(Ii))},t.\u0275prov=l({token:t,factory:t.\u0275fac});let i=t;return i})(),Oi=[Ri,mi,Ui,wi],Wr={[S.ACTIVE]:""};function Vi(i=Wr,t){switch(t.type){case ke:return I(C({},i),{[t.payload.cartType]:t.payload.cartId});case Ne:case ae:return t.payload?.cartId===i[S.ACTIVE]?I(C({},i),{[S.ACTIVE]:""}):i;case Pe:return Wr}return i}var $i=void 0;function Li(i=$i,t){switch(t.type){case Ve:return t.payload;case k:case J:case Ge:return t.payload.cart}return i}function ji(i){return function(t,$){return $.type===ar.LOGOUT&&(t=void 0),i(t,$)}}var Ni=[ji],Si=new de("MultiCartReducers");function xi(){return{carts:d.entityProcessesLoaderReducer(h,Li),index:Vi}}var Pi={provide:Si,useFactory:xi},Ss=Object.freeze({__proto__:null,getCartEntitySelectorFactory:ui,getCartEntriesSelectorFactory:Jt,getCartEntrySelectorFactory:pi,getCartHasPendingProcessesSelectorFactory:Ci,getCartIdByTypeFactory:vi,getCartIsStableSelectorFactory:hi,getCartSelectorFactory:He,getCartTypeIndex:Ei,getCartsSelectorFactory:li,getMultiCartEntities:X,getMultiCartState:ce}),ki=(()=>{let t=class t{constructor(e,r,s){this.statePersistenceService=e,this.store=r,this.siteContextParamsService=s,this.subscription=new ft}initSync(){this.subscription.add(this.statePersistenceService.syncWithStorage({key:"cart",state$:this.getCartState(),context$:this.siteContextParamsService.getValues([ur]),storageType:Cr.LOCAL_STORAGE,onRead:e=>this.onRead(e)}))}getCartState(){return this.store.pipe(p(e=>!!e.cart),R(ce),p(e=>!!e),o(e=>e.index),Ke("Active"),o(e=>({active:e[S.ACTIVE]??""})))}onRead(e){this.store.dispatch(new Qt),e?this.store.dispatch(new gt(e.active)):this.store.dispatch(new gt(""))}ngOnDestroy(){this.subscription.unsubscribe()}};t.\u0275fac=function(r){return new(r||t)(c(pr),c(rt),c(Ir))},t.\u0275prov=l({token:t,factory:t.\u0275fac,providedIn:"root"});let i=t;return i})();function Gi(i,t){return()=>Be(t.getStable("context").pipe(N(()=>{i.initSync()})))}function Hi(){return t=>($,e)=>{let r=C({},$);return e.type==="@ngrx/store/init"&&(r.cart=I(C({},r.cart),{index:{[S.ACTIVE]:void 0}})),t(r,e)}}var Yi=(()=>{let t=class t{};t.\u0275fac=function(r){return new(r||t)},t.\u0275mod=W({type:t}),t.\u0275inj=B({providers:[{provide:gr,useFactory:Gi,deps:[ki,Er],multi:!0},{provide:tr,useFactory:Hi,multi:!0}]});let i=t;return i})(),De=class{},fi=(()=>{let t=class t{constructor(e){this.adapter=e}validate(e,r){return this.adapter.validate(e,r)}};t.\u0275fac=function(r){return new(r||t)(c(De))},t.\u0275prov=l({token:t,factory:t.\u0275fac,providedIn:"root"});let i=t;return i})(),Bi=(()=>{let t=class t{constructor(e,r,s,n){this.actionsSubject=e,this.event=r,this.activeCartService=s,this.stateEventService=n,this.register()}register(){this.registerCreateCart(),this.registerAddEntry(),this.registerRemoveEntry(),this.registerUpdateEntry(),this.registerDeleteCart(),this.registerAddCartVoucher(),this.registerRemoveCartVoucher(),this.registerMergeCartSuccess()}registerAddEntry(){this.registerMapped({action:Xt,event:Fr}),this.registerMapped({action:It,event:Mr}),this.registerMapped({action:Zt,event:_r})}registerRemoveEntry(){this.registerMapped({action:te,event:Ur}),this.registerMapped({action:Me,event:br})}registerUpdateEntry(){this.registerMapped({action:ee,event:wr}),this.registerMapped({action:be,event:Or})}registerMergeCartSuccess(){this.registerMapped({action:je,event:Vr})}registerCreateCart(){this.stateEventService.register({action:Q,event:mr}),this.stateEventService.register({action:J,event:Tr}),this.stateEventService.register({action:Oe,event:Dr})}registerDeleteCart(){this.stateEventService.register({action:ne,event:ge,factory:e=>z(ge,I(C({},e.payload),{cartCode:e.payload.cartId}))}),this.stateEventService.register({action:ae,event:Ie,factory:e=>z(Ie,I(C({},e.payload),{cartCode:e.payload.cartId}))}),this.stateEventService.register({action:xe,event:Se,factory:e=>z(Se,I(C({},e.payload),{cartCode:e.payload.cartId}))})}registerAddCartVoucher(){this.stateEventService.register({action:St,event:$r}),this.stateEventService.register({action:re,event:Lr}),this.stateEventService.register({action:Ue,event:jr})}registerRemoveCartVoucher(){this.stateEventService.register({action:ie,event:Nr}),this.stateEventService.register({action:se,event:xr}),this.stateEventService.register({action:we,event:Pr})}registerMapped(e){let r=this.getAction(e.action).pipe(E(s=>F(s).pipe(g(this.activeCartService.getActive(),this.activeCartService.getActiveCartId()))),p(([s,n,a])=>s.payload.cartId===a),o(([s,n])=>z(e.event,I(C({},s.payload),{cartCode:n.code,entry:s.payload.entry?s.payload.entry:n.entries?.[Number(s.payload.entryNumber)]}))));return this.event.register(e.event,r)}getAction(e){return this.actionsSubject.pipe(v(...[].concat(e)))}};t.\u0275fac=function(r){return new(r||t)(c(he),c(pe),c(P),c(vr))},t.\u0275prov=l({token:t,factory:t.\u0275fac,providedIn:"root"});let i=t;return i})(),Wi=(()=>{let t=class t{constructor(e){}};t.\u0275fac=function(r){return new(r||t)(c(Bi))},t.\u0275mod=W({type:t}),t.\u0275inj=B({});let i=t;return i})(),qi=(()=>{let t=class t{constructor(e){this.eventService=e,this.register()}register(){this.eventService.register(fe,this.buildCartPageEvent())}buildCartPageEvent(){return this.eventService.get(Ar).pipe(p(e=>e.semanticRoute==="cart"),o(e=>z(fe,{navigation:e})))}};t.\u0275fac=function(r){return new(r||t)(c(pe))},t.\u0275prov=l({token:t,factory:t.\u0275fac,providedIn:"root"});let i=t;return i})(),zi=(()=>{let t=class t{constructor(e){}};t.\u0275fac=function(r){return new(r||t)(c(qi))},t.\u0275mod=W({type:t}),t.\u0275inj=B({});let i=t;return i})(),qr=(()=>{let t=class t{constructor(e,r,s){this.multiCartFacade=e,this.userIdService=r,this.winRef=s,this.subscription=new ft,this.activeCartId$=this.userIdService.getUserId().pipe(f(1),E(()=>this.multiCartFacade.getCartIdByType(S.ACTIVE)),p(n=>n!==void 0),o(n=>n===""?V:n)),this.cartEntity$=this.activeCartId$.pipe(E(n=>this.multiCartFacade.getCartEntity(n))),this.shouldLoadCartOnCodeFlow=!0,this.checkInitLoad=void 0,this.initActiveCart(),this.detectUserChange()}initActiveCart(){let e=this.cartEntity$.pipe(o(s=>({cart:s.value,isStable:!s.loading&&s.processesCount===0,loaded:!!((s.error||s.success)&&!s.loading)})),p(({isStable:s,cart:n})=>s||dt(n))),r=e.pipe(g(this.activeCartId$,this.userIdService.getUserId()),N(([{cart:s,loaded:n,isStable:a},u,T])=>{a&&dt(s)&&!n&&!Br(u)&&this.shouldLoadCartOnCodeFlow&&this.load(u,T)}));this.activeCart$=qe(()=>r.subscribe(),()=>e).pipe(o(({cart:s})=>s||{}),m(),oe({bufferSize:1,refCount:!0}))}detectUserChange(){this.subscription.add(this.userIdService.getUserId().pipe(Je(),g(this.activeCartId$)).subscribe(([[e,r],s])=>{bi(r,e)&&this.loadOrMerge(s,r,e)})),this.isLoggedInWithCodeFlow()&&(this.shouldLoadCartOnCodeFlow=!1,this.subscription.add(this.userIdService.getUserId().pipe(g(this.activeCartId$)).subscribe(([e,r])=>{this.loadOrMerge(r,e,b),this.winRef?.localStorage?.removeItem(Ce)})))}getActive(){return this.activeCart$}takeActive(){return this.isStable().pipe(p(e=>e),E(()=>this.getActive()),p(e=>!!e),f(1))}getActiveCartId(){return this.activeCart$.pipe(g(this.userIdService.getUserId()),o(([e,r])=>G(e,r)),m())}takeActiveCartId(){return this.isStable().pipe(p(e=>e),E(()=>this.getActiveCartId()),p(e=>!!e),f(1))}getEntries(){return this.activeCartId$.pipe(E(e=>this.multiCartFacade.getEntries(e)),m())}getLastEntry(e){return this.activeCartId$.pipe(E(r=>this.multiCartFacade.getLastEntry(r,e)),m())}getLoading(){return this.cartEntity$.pipe(o(e=>!!e.loading),m())}isStable(){return this.activeCartId$.pipe(E(e=>this.multiCartFacade.isStable(e)))}load(e,r){r===b&&e===V||this.multiCartFacade.loadCart({userId:r,cartId:e,extraData:{active:!0}})}loadOrMerge(e,r,s){e===V||s!==b?this.multiCartFacade.loadCart({userId:r,cartId:e,extraData:{active:!0}}):Ee(this.isGuestCart())?this.guestCartMerge(e):this.multiCartFacade.mergeToCurrentCart({userId:r,cartId:e,extraData:{active:!0}})}guestCartMerge(e){this.getEntries().pipe(f(1)).subscribe(r=>{this.multiCartFacade.deleteCart(e,b),this.addEntriesGuestMerge(r)})}addEntriesGuestMerge(e){let r=e.map(s=>({productCode:s.product?.code??"",quantity:s.quantity??0}));this.requireLoadedCart(!0).pipe(g(this.userIdService.getUserId())).subscribe(([s,n])=>{this.multiCartFacade.addEntries(n,G(s,n),r)})}isCartCreating(e,r){return Br(r)&&(e.loading||e.success||e.error)}isLoggedInWithCodeFlow(){return!!this.winRef?.localStorage?.getItem(Ce)}requireLoadedCart(e=!1){this.checkInitLoad=this.checkInitLoad===void 0;let r=(e?this.cartEntity$.pipe(p(()=>!Ee(this.isGuestCart()))):this.cartEntity$).pipe(p(s=>!s.loading||!!this.checkInitLoad));return this.activeCartId$.pipe(g(r),p(([s,n])=>!this.isCartCreating(n,s)),o(([,s])=>s),f(1)).pipe(g(this.userIdService.getUserId()),N(([s,n])=>{dt(s.value)&&n!==b&&!s.loading&&this.load(V,n),this.checkInitLoad=!1}),E(()=>r),g(this.userIdService.getUserId()),p(([s,n])=>!!(n===b||s.success||s.error)),f(1)).pipe(N(([s,n])=>{dt(s.value)&&this.multiCartFacade.createCart({userId:n,extraData:{active:!0}})}),E(()=>r),p(s=>!!(s.success||s.error)),g(this.activeCartId$),p(([s,n])=>!this.isCartCreating(s,n)),o(([s])=>s.value),p(s=>!dt(s)),f(1))}addEntry(e,r,s){this.requireLoadedCart().pipe(g(this.userIdService.getUserId())).subscribe(([n,a])=>{this.multiCartFacade.addEntry(a,G(n,a),e,r,s)})}removeEntry(e){this.activeCartId$.pipe(g(this.userIdService.getUserId()),f(1)).subscribe(([r,s])=>{this.multiCartFacade.removeEntry(s,r,e.entryNumber)})}updateEntry(e,r,s,n=!1){this.activeCartId$.pipe(g(this.userIdService.getUserId()),f(1)).subscribe(([a,u])=>{this.multiCartFacade.updateEntry(u,a,e,r,s,n)})}getEntry(e){return this.activeCartId$.pipe(E(r=>this.multiCartFacade.getEntry(r,e)),m())}addEmail(e){this.activeCartId$.pipe(g(this.userIdService.getUserId()),f(1)).subscribe(([r,s])=>{this.multiCartFacade.assignEmail(r,s,e)})}getAssignedUser(){return this.activeCart$.pipe(o(e=>e.user))}isGuestCart(e){return e?F(this.isCartUserGuest(e)):this.activeCart$.pipe(o(r=>this.isCartUserGuest(r)),m())}isCartUserGuest(e){let r=e.user;return!!(r&&(r.name===nr||_i(r.uid?.split("|").slice(1).join("|"))))}addEntries(e){let r=e.map(s=>({productCode:s.product?.code??"",quantity:s.quantity??0}));this.requireLoadedCart().pipe(g(this.userIdService.getUserId())).subscribe(([s,n])=>{s&&this.multiCartFacade.addEntries(n,G(s,n),r)})}reloadActiveCart(){Z([this.getActiveCartId(),this.userIdService.takeUserId()]).pipe(f(1),o(([e,r])=>{this.multiCartFacade.loadCart({cartId:e,userId:r,extraData:{active:!0}})})).subscribe()}hasPickupItems(){return this.getActive().pipe(o(e=>e.pickupItemsQuantity?e.pickupItemsQuantity>0:!1))}hasDeliveryItems(){return this.getActive().pipe(o(e=>e.deliveryItemsQuantity?e.deliveryItemsQuantity>0:!1))}getPickupEntries(){return this.getEntries().pipe(o(e=>e.filter(r=>r.deliveryPointOfService!==void 0)))}getDeliveryEntries(){return this.getEntries().pipe(o(e=>e.filter(r=>r.deliveryPointOfService===void 0)))}ngOnDestroy(){this.subscription.unsubscribe()}};t.\u0275fac=function(r){return new(r||t)(c(ot),c(q),c(cr))},t.\u0275prov=l({token:t,factory:t.\u0275fac});let i=t;return i})(),yi=(()=>{let t=class t{constructor(e){this.routingService=e,this.NAVIGATION_SKIPS=2,this.navigationIdCount=0,this.subscription=new ft,this.cartValidationResult$=new Ye(1),this.checkForValidationResultClear$=this.routingService.getRouterState().pipe(g(this.cartValidationResult$),N(([r,s])=>{this.navigationIdCount+this.NAVIGATION_SKIPS<=r.navigationId&&s.length&&(this.cartValidationResult$.next([]),this.navigationIdCount=r.navigationId)})),this.setInitialState()}ngOnDestroy(){this.subscription.unsubscribe()}setInitialState(){this.setNavigationIdStep(),this.subscription.add(this.checkForValidationResultClear$.subscribe())}updateValidationResultAndRoutingId(e){this.cartValidationResult$.next(e),this.setNavigationIdStep()}setNavigationIdStep(){this.routingService.getRouterState().pipe(f(1)).subscribe(e=>this.navigationIdCount=e.navigationId)}};t.\u0275fac=function(r){return new(r||t)(c(dr))},t.\u0275prov=l({token:t,factory:t.\u0275fac,providedIn:"root"});let i=t;return i})(),zr=(()=>{let t=class t{constructor(e,r,s,n,a){this.cartValidationConnector=e,this.command=r,this.userIdService=s,this.activeCartFacade=n,this.cartValidationStateService=a,this.validateCartCommand=this.command.create(()=>Z([this.activeCartFacade.getActiveCartId(),this.userIdService.takeUserId(),this.activeCartFacade.isStable()]).pipe(p(([u,T,Ai])=>Ai),f(1),E(([u,T])=>this.cartValidationConnector.validate(u,T))),{strategy:Sr.CancelPrevious})}validateCart(){return this.validateCartCommand.execute()}getValidationResults(){return this.cartValidationStateService.cartValidationResult$}};t.\u0275fac=function(r){return new(r||t)(c(fi),c(fr),c(q),c(P),c(yi))},t.\u0275prov=l({token:t,factory:t.\u0275fac});let i=t;return i})(),Kr=(()=>{let t=class t{constructor(e,r,s){this.store=e,this.activeCartFacade=r,this.userIdService=s}addVoucher(e,r){this.combineUserAndCartId(r).subscribe(([s,n])=>this.store.dispatch(new _t({userId:s,cartId:n,voucherId:e})))}removeVoucher(e,r){this.combineUserAndCartId(r).subscribe(([s,n])=>this.store.dispatch(new Ot({userId:s,cartId:n,voucherId:e})))}getAddVoucherResultError(){return this.store.pipe(R(yt.getProcessErrorFactory(H)))}getAddVoucherResultSuccess(){return this.store.pipe(R(yt.getProcessSuccessFactory(H)))}getAddVoucherResultLoading(){return this.store.pipe(R(yt.getProcessLoadingFactory(H)))}resetAddVoucherProcessingState(){this.store.dispatch(new wt)}combineUserAndCartId(e){return e?this.userIdService.getUserId().pipe(f(1),o(r=>[r,e])):Z([this.userIdService.getUserId(),this.activeCartFacade.getActiveCartId()]).pipe(f(1))}};t.\u0275fac=function(r){return new(r||t)(c(rt),c(P),c(q))},t.\u0275prov=l({token:t,factory:t.\u0275fac});let i=t;return i})(),Qr=(()=>{let t=class t{constructor(e,r){this.store=e,this.userIdService=r}getCart(e){return this.store.pipe(R(He(e)))}getCarts(){return this.store.pipe(R(li))}getCartEntity(e){return this.store.pipe(R(ui(e)))}isStable(e){return this.store.pipe(R(hi(e)),ze(r=>r?We(0):F(void 0)),m())}generateTempCartId(){return`temp-${Math.random().toString(36).substring(2,11)}`}createCart({userId:e,oldCartId:r,toMergeCartGuid:s,extraData:n}){let a=this.generateTempCartId();return this.store.dispatch(new lt({extraData:n,userId:e,oldCartId:r,toMergeCartGuid:s,tempCartId:a})),this.getCartIdByType(n?.active?S.ACTIVE:S.NEW_CREATED).pipe(E(u=>this.getCart(u)),p(nt))}mergeToCurrentCart({userId:e,cartId:r,extraData:s}){let n=this.generateTempCartId();this.store.dispatch(new Gt({userId:e,cartId:r,extraData:s,tempCartId:n}))}loadCart({cartId:e,userId:r,extraData:s}){this.store.dispatch(new A({userId:r,cartId:e,extraData:s}))}getEntries(e){return this.store.pipe(R(Jt(e)))}getLastEntry(e,r){return this.store.pipe(R(Jt(e)),o(s=>{let n=s.filter(a=>a.product?.code===r);return n?n[n.length-1]:void 0}))}addEntry(e,r,s,n,a){this.store.dispatch(new ut({userId:e,cartId:r,productCode:s,quantity:n,pickupStore:a}))}addEntries(e,r,s){s.forEach(n=>{this.store.dispatch(new ut({userId:e,cartId:r,productCode:n.productCode,quantity:n.quantity}))})}removeEntry(e,r,s){this.store.dispatch(new Rt({userId:e,cartId:r,entryNumber:`${s}`}))}updateEntry(e,r,s,n,a,u=!1){n!==void 0&&n<=0?this.removeEntry(e,r,s):this.store.dispatch(new Dt({userId:e,cartId:r,pickupStore:a,pickupToDelivery:u,entryNumber:`${s}`,quantity:n}))}getEntry(e,r){return this.store.pipe(R(pi(e,r)))}assignEmail(e,r,s){this.store.dispatch(new Nt({userId:r,cartId:e,email:s}))}removeCart(e){this.store.dispatch(new Y({cartId:e}))}deleteCart(e,r){this.store.dispatch(new Bt({userId:r,cartId:e}))}reloadCart(e,r){this.userIdService.takeUserId().subscribe(s=>this.store.dispatch(new A({userId:s,cartId:e,extraData:r})))}getCartIdByType(e){return this.store.pipe(R(vi(e)),m())}};t.\u0275fac=function(r){return new(r||t)(c(rt),c(q))},t.\u0275prov=l({token:t,factory:t.\u0275fac});let i=t;return i})(),Jr=(()=>{let t=class t{constructor(e,r,s,n){this.userProfileFacade=e,this.multiCartFacade=r,this.baseSiteService=s,this.userIdService=n}getCart(){return this.selectiveCart$||(this.selectiveCart$=Z([this.getSelectiveCartId(),this.userProfileFacade.get(),this.userIdService.getUserId(),this.baseSiteService.getActive()]).pipe(m(),N(([e,r,s,n])=>{!e&&s!==b&&r?.customerId&&this.multiCartFacade.loadCart({userId:s,cartId:`selectivecart${n}${r.customerId}`})}),p(([e])=>!!e),E(([e])=>this.multiCartFacade.getCart(e)),oe({bufferSize:1,refCount:!0}))),this.selectiveCart$}getEntries(){return this.getSelectiveCartId().pipe(E(e=>this.multiCartFacade.getEntries(e)))}isStable(){return this.getSelectiveCartId().pipe(E(e=>this.multiCartFacade.isStable(e)))}addEntry(e,r){this.getSelectiveIdWithUserId().subscribe(([s,n])=>{this.multiCartFacade.addEntry(n,s,e,r)})}removeEntry(e){this.getSelectiveIdWithUserId().subscribe(([r,s])=>{this.multiCartFacade.removeEntry(s,r,e.entryNumber)})}updateEntry(e,r){this.getSelectiveIdWithUserId().subscribe(([s,n])=>{this.multiCartFacade.updateEntry(n,s,e,r)})}getEntry(e){return this.getSelectiveCartId().pipe(E(r=>this.multiCartFacade.getEntry(r,e)))}getSelectiveCartId(){return this.multiCartFacade.getCartIdByType(S.SELECTIVE)}getSelectiveIdWithUserId(){return this.getSelectiveCartId().pipe(m(),g(this.userIdService.getUserId()),f(1))}};t.\u0275fac=function(r){return new(r||t)(c(Rr),c(ot),c(hr),c(q))},t.\u0275prov=l({token:t,factory:t.\u0275fac});let i=t;return i})(),Ki=[qr,{provide:P,useExisting:qr},Kr,{provide:Gr,useExisting:Kr},Qr,{provide:ot,useExisting:Qr},Jr,{provide:Hr,useExisting:Jr},zr,{provide:At,useExisting:zr}],Qi=(()=>{let t=class t extends ct{constructor(){super(...arguments),this.responseStatus=ve.BAD_REQUEST}getPriority(){return 0}hasMatch(e){return super.hasMatch(e)&&this.getErrors(e).some(Mi)}handleError(e,r){this.handleCartNotFoundError(e,r),this.handleOtherCartErrors(e,r)}handleCartNotFoundError(e,r){this.getErrors(r).filter(s=>di(s)).forEach(()=>{this.globalMessageService.add({key:"httpHandlers.cartNotFound"},L.MSG_TYPE_ERROR)})}handleOtherCartErrors(e,r){this.getErrors(r).filter(s=>s.reason!=="notFound"||s.subjectType!=="cart").forEach(s=>{this.globalMessageService.add(s.message?s.message:{key:"httpHandlers.otherCartErrors"},L.MSG_TYPE_ERROR)})}getErrors(e){return(e.error?.errors||[]).filter(r=>r.type!=="JaloObjectNoLongerValidError")}};t.\u0275fac=(()=>{let e;return function(s){return(e||(e=ue(t)))(s||t)}})(),t.\u0275prov=l({token:t,factory:t.\u0275fac,providedIn:"root"});let i=t;return i})(),Ji=(()=>{let t=class t extends ct{constructor(){super(...arguments),this.responseStatus=ve.BAD_REQUEST}getPriority(){return 0}hasMatch(e){return super.hasMatch(e)&&this.getErrors(e).some(Fi)}handleError(e,r){this.handleVoucherExceededError(e,r),this.handleVoucherInvalidError(e,r)}handleVoucherExceededError(e,r){this.getErrors(r).filter(s=>Ti(s)).forEach(()=>{this.globalMessageService.add({key:"httpHandlers.voucherExceeded"},L.MSG_TYPE_ERROR)})}handleVoucherInvalidError(e,r){this.getErrors(r).filter(s=>Di(s)).forEach(()=>{this.globalMessageService.add({key:"httpHandlers.invalidCodeProvided"},L.MSG_TYPE_ERROR)})}getErrors(e){return(e.error?.errors||[]).filter(r=>r.type!=="JaloObjectNoLongerValidError")}};t.\u0275fac=(()=>{let e;return function(s){return(e||(e=ue(t)))(s||t)}})(),t.\u0275prov=l({token:t,factory:t.\u0275fac,providedIn:"root"});let i=t;return i})(),Xi=(()=>{let t=class t{};t.\u0275fac=function(r){return new(r||t)},t.\u0275mod=W({type:t}),t.\u0275inj=B({providers:[Pi,Ii],imports:[Ze,lr,rr.forFeature(Xr,Si,{metaReducers:Ni}),ir.forFeature(Oi)]});let i=t;return i})(),fs=(()=>{let t=class t{};t.\u0275fac=function(r){return new(r||t)},t.\u0275mod=W({type:t}),t.\u0275inj=B({providers:[gi,ai,ci,fi,...Ki,{provide:ct,useExisting:Qi,multi:!0},{provide:ct,useExisting:Ji,multi:!0}],imports:[Wi,Xi,Yi,zi]});let i=t;return i})(),ys=new de("CartValidationNormalizer"),Zi=(()=>{let t=class t{constructor(e){this.config=e}isSelectiveCartEnabled(){return!!this.config?.cart?.selectiveCart?.enabled}isCartValidationEnabled(){return!!this.config?.cart?.validation?.enabled}};t.\u0275fac=function(r){return new(r||t)(c(kr))},t.\u0275prov=l({token:t,factory:t.\u0275fac,providedIn:"root"});let i=t;return i})(),As=(()=>{let t=class t{constructor(e,r,s,n,a,u,T){this.cartValidationService=e,this.semanticPathService=r,this.router=s,this.globalMessageService=n,this.activeCartService=a,this.cartValidationStateService=u,this.cartConfigService=T,this.GLOBAL_MESSAGE_TIMEOUT=1e4}canActivate(){return this.cartConfigService.isCartValidationEnabled()?this.cartValidationService.validateCart().pipe(g(this.activeCartService.getEntries()),o(([e,r])=>{if(this.cartValidationStateService.updateValidationResultAndRoutingId(e.cartModifications??[]),e.cartModifications!==void 0&&e.cartModifications.length!==0){let s,n=e.cartModifications[0];return r.length===1&&r[0].product?.code===n.entry?.product?.code&&n.statusCode===Yr.NO_STOCK?s={key:"validation.cartEntryRemoved",params:{name:n.entry?.product?.name}}:s={key:"validation.cartEntriesChangeDuringCheckout"},this.globalMessageService.add(s,L.MSG_TYPE_ERROR,this.GLOBAL_MESSAGE_TIMEOUT),this.activeCartService.reloadActiveCart(),this.router.parseUrl(this.semanticPathService.get("cart")??"")}return!0})):F(!0)}};t.\u0275fac=function(r){return new(r||t)(c(At),c(or),c(sr),c(le),c(P),c(yi),c(Zi))},t.\u0275prov=l({token:t,factory:t.\u0275fac,providedIn:"root"});let i=t;return i})(),Rs=(()=>{let t=class t{constructor(e){this.actionsSubject=e,this.logger=et(st)}getResults(e){return this.actionsSubject.pipe(v(It,Zt),p(r=>r.payload.cartId===e),o(r=>this.mapMessages(r)))}mapMessages(e){let{productCode:r}=e.payload;if(e instanceof ht){let{quantity:s,quantityAdded:n,entry:a,statusCode:u}=e.payload;if(u===K.LOW_STOCK)return{productCode:r,statusCode:u,productName:a?.product?.name,quantity:s,quantityAdded:n};if(u===K.SUCCESS||u===K.NO_STOCK)return{productCode:r,statusCode:u,productName:a?.product?.name}}else if(e instanceof Ct){let{error:s}=e.payload;if(s?.details[0]?.type==="UnknownIdentifierError")return{productCode:r,statusCode:K.UNKNOWN_IDENTIFIER}}return Xe()&&this.logger.warn("Unrecognized cart add entry action type while mapping messages",e),{productCode:r,statusCode:K.UNKNOWN_ERROR}}};t.\u0275fac=function(r){return new(r||t)(c(he))},t.\u0275prov=l({token:t,factory:t.\u0275fac,providedIn:"root"});let i=t;return i})();export{h as a,Is as b,Re as c,me as d,G as e,oi as f,dt as g,Te as h,gi as i,Ss as j,De as k,fs as l,ys as m,Zi as n,As as o,Rs as p};
