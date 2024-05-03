import './polyfills.server.mjs';
import{a as i,b as f,z as g}from"./chunk-CEHQSD7Z.mjs";import{W as o,X as c}from"./chunk-5IJ5Z3N4.mjs";import{D as u,E as p,Oa as n,cc as S,u as v}from"./chunk-QG3PMDLA.mjs";import{Ea as d,Fa as C,Ha as r,Ra as l}from"./chunk-JSDTXUAI.mjs";var a=class extends f{},N=(()=>{let e=class e extends a{};e.type="SaveCartEvent";let t=e;return t})(),j=(()=>{let e=class e extends a{};e.type="SaveCartSuccessEvent";let t=e;return t})(),k=(()=>{let e=class e extends a{};e.type="SaveCartEvent";let t=e;return t})(),b=(()=>{let e=class e extends a{};e.type="RestoreSavedCartEvent";let t=e;return t})(),U=(()=>{let e=class e extends a{};e.type="RestoreSavedCartSuccessEvent";let t=e;return t})(),V=(()=>{let e=class e extends a{};e.type="RestoreSavedCartFailEvent";let t=e;return t})(),F=(()=>{let e=class e extends a{};e.type="EditSavedCartEvent";let t=e;return t})(),G=(()=>{let e=class e extends a{};e.type="EditSavedCartSuccessEvent";let t=e;return t})(),B=(()=>{let e=class e extends a{};e.type="EditSavedCartFailEvent";let t=e;return t})(),H=(()=>{let e=class e extends a{};e.type="CloneSavedCartEvent";let t=e;return t})(),X=(()=>{let e=class e extends a{};e.type="CloneSavedCartSuccessEvent";let t=e;return t})(),q=(()=>{let e=class e extends a{};e.type="CloneSavedCartFailEvent";let t=e;return t})(),m="cartSavedCart",E="cartSavedCartCore",z=(()=>{let e=class e{};e.\u0275fac=function(s){return new(s||e)},e.\u0275prov=d({token:e,factory:()=>S({facade:e,feature:E,methods:["editSavedCart","deleteSavedCart","getSavedCart","getSavedCartList","loadSavedCart","clearCloneSavedCart","clearRestoreSavedCart","clearSaveCart","clearSavedCarts","get","getList","getCloneSavedCartProcessError","getCloneSavedCartProcessLoading","getCloneSavedCartProcessSuccess","getRestoreSavedCartProcessError","getRestoreSavedCartProcessLoading","getRestoreSavedCartProcessSuccess","getSaveCartProcessError","getSaveCartProcessLoading","getSaveCartProcessSuccess","getSavedCartListProcess","getSavedCartListProcessLoading","isStable","cloneSavedCart","loadSavedCarts","restoreSavedCart","saveCart"],async:!0}),providedIn:"root"});let t=e;return t})(),x=function(t){return t.EDIT="edit",t.DELETE="delete",t.SAVE="save",t.RESTORE="restore",t}(x||{}),y=new r("SavedCartOrderEntriesContext"),R=new r("NewSavedCartOrderEntriesContext");function A(){return{featureModules:{[m]:{cmsComponents:["AddToSavedCartsComponent","AccountSavedCartHistoryComponent","SavedCartDetailsOverviewComponent","SavedCartDetailsItemsComponent","SavedCartDetailsActionComponent"],dependencies:[g]},[E]:m}}}var J=(()=>{let e=class e{};e.\u0275fac=function(s){return new(s||e)},e.\u0275mod=l({type:e}),e.\u0275inj=C({providers:[p(A),u({routing:{routes:{savedCarts:{paths:["my-account/saved-carts"]},savedCartsDetails:{paths:["my-account/saved-cart/:savedCartId"],paramsMapping:{savedCartId:"savedCartId"}}}}})],imports:[v.forChild([{path:null,canActivate:[n,c],component:o,data:{cxRoute:"savedCartsDetails",cxContext:{[i]:y}}},{path:null,canActivate:[n,c],component:o,data:{cxRoute:"savedCarts",cxContext:{[i]:R}}}])]});let t=e;return t})();export{N as a,j as b,k as c,b as d,U as e,V as f,F as g,G as h,B as i,H as j,X as k,q as l,m,z as n,x as o,y as p,R as q,J as r};
