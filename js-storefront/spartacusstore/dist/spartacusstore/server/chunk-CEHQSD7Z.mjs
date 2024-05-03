import './polyfills.server.mjs';
import{Fb as h,W as A,X as T}from"./chunk-5IJ5Z3N4.mjs";import{D as f,E as y,Fa as R,Ia as I,cc as c,u as v,z as C}from"./chunk-QG3PMDLA.mjs";import{Ea as s,Fa as E,Ha as o,Ja as d,Ra as u,a as p}from"./chunk-JSDTXUAI.mjs";var N={cart:{validation:{enabled:!1},selectiveCart:{enabled:!1}}},O={routing:{routes:{cart:{paths:["cart"]}}}},x=Symbol("ORDER_ENTRIES_CONTEXT"),r=class extends R{},J=(()=>{let e=class e extends r{};e.type="CreateCartEvent";let t=e;return t})(),tt=(()=>{let e=class e extends r{};e.type="CreateCartSuccessEvent";let t=e;return t})(),et=(()=>{let e=class e extends r{};e.type="CreateCartFailEvent";let t=e;return t})(),nt=(()=>{let e=class e extends r{};e.type="CartAddEntryEvent";let t=e;return t})(),rt=(()=>{let e=class e extends r{};e.type="CartAddEntrySuccessEvent";let t=e;return t})(),it=(()=>{let e=class e extends r{};e.type="CartAddEntryFailEvent";let t=e;return t})(),st=(()=>{let e=class e extends r{};e.type="CartRemoveEntryFailEvent";let t=e;return t})(),ot=(()=>{let e=class e extends r{};e.type="CartRemoveEntrySuccessEvent";let t=e;return t})(),ct=(()=>{let e=class e extends r{};e.type="CartUpdateEntrySuccessEvent";let t=e;return t})(),at=(()=>{let e=class e extends r{};e.type="CartUpdateEntryFailEvent";let t=e;return t})(),dt=(()=>{let e=class e extends R{};e.type="CartUiEventAddToCart";let t=e;return t})(),lt=(()=>{let e=class e extends r{};e.type="MergeCartSuccessEvent";let t=e;return t})(),S=(()=>{let e=class e extends r{};e.type="LoadCartEvent";let t=e;return t})(),M=(()=>{let e=class e extends r{};e.type="RemoveCartEvent";let t=e;return t})(),Et=(()=>{let e=class e extends r{};e.type="DeleteCartEvent";let t=e;return t})(),ut=(()=>{let e=class e extends r{};e.type="DeleteCartSuccessEvent";let t=e;return t})(),ft=(()=>{let e=class e extends r{};e.type="DeleteCartFailEvent";let t=e;return t})(),D=(()=>{let e=class e extends r{};e.type="AddCartVoucherEvent";let t=e;return t})(),Rt=(()=>{let e=class e extends D{};e.type="AddCartVoucherSuccessEvent";let t=e;return t})(),pt=(()=>{let e=class e extends D{};e.type="AddCartVoucherFailEvent";let t=e;return t})(),m=(()=>{let e=class e extends r{};e.type="RemoveCartVoucherEvent";let t=e;return t})(),vt=(()=>{let e=class e extends m{};e.type="RemoveCartVoucherSuccessEvent";let t=e;return t})(),Ct=(()=>{let e=class e extends m{};e.type="RemoveCartVoucherFailEvent";let t=e;return t})(),g="cartBase",a="cartBaseCore",L="miniCart",b="addToCart",w=(()=>{let e=class e{};e.\u0275fac=function(n){return new(n||e)},e.\u0275prov=s({token:e,factory:()=>c({facade:e,feature:a,methods:["getCart","getCarts","getCartEntity","isStable","createCart","mergeToCurrentCart","loadCart","getEntries","getLastEntry","addEntry","addEntries","removeEntry","updateEntry","getEntry","assignEmail","removeCart","deleteCart","reloadCart","getCartIdByType"],async:!0}),providedIn:"root"});let t=e;return t})(),F=(()=>{let e=class e{constructor(i,n){this.eventService=i,this.multiCartFacade=n,this.subscriptions=new p,this.onCartBaseAction()}onCartBaseAction(){this.subscriptions.add(this.eventService.get(S).subscribe(({userId:i,cartId:n})=>{i&&n&&this.multiCartFacade.loadCart({userId:i,cartId:n})})),this.subscriptions.add(this.eventService.get(M).subscribe(({cartId:i})=>{this.multiCartFacade.removeCart(i)}))}ngOnDestroy(){this.subscriptions.unsubscribe()}};e.\u0275fac=function(n){return new(n||e)(d(I),d(w))},e.\u0275prov=s({token:e,factory:e.\u0275fac,providedIn:"root"});let t=e;return t})(),k=(()=>{let e=class e{constructor(i){}};e.\u0275fac=function(n){return new(n||e)(d(F))},e.\u0275mod=u({type:e}),e.\u0275inj=E({});let t=e;return t})(),U=new o("ActiveCartOrderEntriesContext");function V(){return{featureModules:{[g]:{cmsComponents:["CartApplyCouponComponent","CartComponent","CartProceedToCheckoutComponent","CartTotalsComponent","SaveForLaterComponent","ClearCartComponent"]},[L]:{cmsComponents:["MiniCartComponent"]},[b]:{cmsComponents:["ProductAddToCartComponent"]},[a]:g}}}var yt=(()=>{let e=class e{};e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=u({type:e}),e.\u0275inj=E({providers:[y(V),f(N),f(O)],imports:[k,v.forChild([{path:null,canActivate:[T],component:A,data:{cxRoute:"cart",cxContext:{[x]:U}}}])]});let t=e;return t})(),It=(()=>{let e=class e{};e.\u0275fac=function(n){return new(n||e)},e.\u0275prov=s({token:e,factory:function(n){let l=null;return n?l=new(n||e):l=d(C),l},providedIn:"root"});let t=e;return t})(),At=(()=>{let e=class e extends h{};e.type="CartPageEvent";let t=e;return t})(),Tt=(()=>{let e=class e{};e.\u0275fac=function(n){return new(n||e)},e.\u0275prov=s({token:e,factory:()=>c({facade:e,feature:a,methods:["getActive","takeActive","getActiveCartId","takeActiveCartId","getEntries","getLastEntry","getLoading","isStable","addEntry","removeEntry","updateEntry","getEntry","addEmail","getAssignedUser","isGuestCart","addEntries","requireLoadedCart","reloadActiveCart","hasPickupItems","hasDeliveryItems","getPickupEntries","getDeliveryEntries"],async:!0}),providedIn:"root"});let t=e;return t})(),ht=(()=>{let e=class e{};e.\u0275fac=function(n){return new(n||e)},e.\u0275prov=s({token:e,factory:()=>c({facade:e,feature:a,methods:["validateCart","getValidationResults"]}),providedIn:"root"});let t=e;return t})(),gt=(()=>{let e=class e{};e.\u0275fac=function(n){return new(n||e)},e.\u0275prov=s({token:e,factory:()=>c({facade:e,feature:a,methods:["addVoucher","removeVoucher","getAddVoucherResultError","getAddVoucherResultSuccess","getAddVoucherResultLoading","resetAddVoucherProcessingState"],async:!0}),providedIn:"root"});let t=e;return t})(),Dt=(()=>{let e=class e{};e.\u0275fac=function(n){return new(n||e)},e.\u0275prov=s({token:e,factory:()=>c({facade:e,feature:a,methods:["getCart","getEntries","isStable","addEntry","removeEntry","updateEntry","getEntry"],async:!0}),providedIn:"root"});let t=e;return t})(),mt=(()=>{let e=class e{};e.\u0275fac=function(n){return new(n||e)},e.\u0275prov=s({token:e,factory:e.\u0275fac});let t=e;return t})(),j=function(t){return t.ITEM="cx-cart-item",t.LIST_ITEM="cx-cart-item-list-row",t.ITEM_DETAILS="cx-cart-item.details",t.ITEM_CONFIGURATOR_ISSUES="cx-configurator-issues-notification",t.ITEM_BUNDLE_DETAILS="cx-cart-item.bundle-details",t.ITEM_DELIVERY_DETAILS="cx-cart-item.delivery-details",t.ORDER_SUMMARY="cx-order-summary",t.CART_ITEM_LIST="cx-cart-item-list",t.ADD_TO_CART_CONTAINER="cx-add-to-cart-container",t.PICKUP_INFO="cx-pickup-info",t.ADD_TO_CART_PICKUP_OPTION="cx-add-to-cart-pickup-option",t.DELIVERY_MODE="cx-delivery-mode",t.ORDER_OVERVIEW="cx-order-overview",t}(j||{}),_=function(t){return t.ActiveCart="CART",t.Checkout="CHECKOUT",t.Order="ORDER",t.SaveForLater="SAVE_FOR_LATER",t.SavedCart="SAVED_CART",t}(_||{}),K=function(t){return t.ACTIVE="Active",t.WISH_LIST="WishList",t.SELECTIVE="Selective",t.NEW_CREATED="NewCreated",t}(K||{}),W=function(t){return t.NO_STOCK="noStock",t.LOW_STOCK="lowStock",t.REVIEW_CONFIGURATION="reviewConfiguration",t.PRICING_ERROR="pricingError",t.UNRESOLVABLE_ISSUES="unresolvableIssues",t}(W||{}),P=function(t){return t.ACTIVE_CART="ACTIVE_CART",t.NEW_SAVED_CART="NEW_SAVED_CART",t.QUICK_ORDER="QUICK_ORDER",t.SAVED_CART="SAVED_CART",t.ORDER_CONFIRMATION="ORDER_CONFIRMATION",t.ORDER_DETAILS="ORDER_DETAILS",t.UNIT_ORDER_DETAILS="UNIT_ORDER_DETAILS",t}(P||{}),z=function(t){return t.SUCCESS="success",t.LOW_STOCK="lowStock",t.NO_STOCK="noStock",t.UNKNOWN_IDENTIFIER="unknownIdentifier",t.UNKNOWN_ERROR="unknownError",t.LIMIT_EXCEEDED="limitExceeded",t}(z||{}),Nt=new o("CartNormalizer"),Ot=new o("OrderEntryPromotionsNormalizer"),xt=new o("CartModificationNormalizer"),St=new o("SaveCartNormalizer"),Mt=new o("CartVoucherNormalizer");export{x as a,r as b,J as c,tt as d,et as e,nt as f,rt as g,it as h,st as i,ot as j,ct as k,at as l,dt as m,lt as n,S as o,M as p,Et as q,ut as r,ft as s,D as t,Rt as u,pt as v,m as w,vt as x,Ct as y,g as z,L as A,b as B,w as C,U as D,yt as E,It as F,At as G,Tt as H,ht as I,gt as J,Dt as K,mt as L,j as M,_ as N,K as O,W as P,P as Q,z as R,Nt as S,Ot as T,xt as U,Mt as V};
