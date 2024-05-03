import './polyfills.server.mjs';
import{Q as F,R as he,a as te}from"./chunk-CEHQSD7Z.mjs";import{B as Je,C as Ze,D as et,Db as ee,F as q,M as de,Ma as ve,Nb as at,O as fe,P as tt,Z as it,b as We,c as O,d as se,e as pe,f as ce,i as U,k as me,mb as ot,n as le,na as xe,nb as _e,o as ue,oa as nt,qa as ge,r as He,ra as rt,s as Ke,w as Ye,x as Xe}from"./chunk-5IJ5Z3N4.mjs";import{Bb as ae,D as Y,Ka as qe,Kb as J,La as ze,Vb as $,Wb as Z,ab as X,u as Ge,vb as Qe,z as Ue}from"./chunk-QG3PMDLA.mjs";import{Cd as K,Dc as m,Ea as L,Ec as f,Fa as D,Fc as I,Ic as A,Ja as M,Jb as Me,L as re,Ob as v,Pb as $e,Qa as b,Qb as s,Ra as T,Ub as Ve,Wb as p,X as oe,Xb as c,Yb as E,Za as h,Zb as P,_a as y,_b as B,a as Ie,ac as C,cc as _,dc as l,f as Se,fb as W,g as De,ga as Te,jc as Ne,kc as Pe,lc as Be,mc as R,nc as d,oc as Oe,pc as x,pd as je,q as k,qd as w,rd as Le,sd as Re,td as Ae,va as we,vb as a,vc as ke,vd as G,wa as Q,wb as g,x as j,y as be,yc as H,za as Fe}from"./chunk-JSDTXUAI.mjs";import{a as V,b as N}from"./chunk-GHFNAT2I.mjs";var ie=(()=>{let e=class e{};e.\u0275fac=function(n){return new(n||e)},e.\u0275prov=L({token:e,factory:function(n){let o=null;return n?o=new(n||e):o=M(Ue),o},providedIn:"root"});let i=e;return i})(),z=function(i){return i.FILE_NAME="fileName",i.DATE_TIME="dateTime",i}(z||{}),xt={cartImportExport:{file:{separator:","},import:{fileValidity:{maxSize:1,maxEntries:{[F.NEW_SAVED_CART]:100,[F.SAVED_CART]:100,[F.ACTIVE_CART]:10,[F.QUICK_ORDER]:10},allowedTypes:["application/vnd.openxmlformats-officedocument.spreadsheetml.sheet","application/vnd.ms-excel","text/csv",".csv"]},cartNameGeneration:{source:z.FILE_NAME}},export:{additionalColumns:[{name:{key:"name"},value:"product.name"},{name:{key:"price"},value:"totalPrice.formattedValue"}],messageEnabled:!0,downloadDelay:1e3,maxEntries:1e3,fileOptions:{fileName:"cart",extension:"csv",type:"text/csv"}}}},pt=(()=>{let e=class e{static forRoot(){return{ngModule:e,providers:[Y(xt)]}}};e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=T({type:e}),e.\u0275inj=D({});let i=e;return i})();function vt(i,e){if(i&1){let r=C();p(0,"button",1),_("click",function(){let n=h(r).ngIf,o=l();return y(o.exportCsv(n))}),d(1),m(2,"cxTranslate"),c()}i&2&&(a(),x(" ",f(2,1,"exportEntries.exportProductToCsv"),`
`))}var _t=["open"];function ht(i,e){if(i&1){let r=C();p(0,"button",1),_("click",function(){let n=h(r).ngIf,o=l();return y(o.openDialog(n))}),d(1),m(2,"cxTranslate"),c()}i&2&&(a(),x(" ",f(2,1,"importEntries.importProducts"),`
`))}function yt(i,e){if(i&1){let r=C();p(0,"form",1),_("submit",function(){h(r);let n=l();return y(n.formSubmitSubject$.next(void 0))}),p(1,"p",2),d(2),m(3,"cxTranslate"),c(),p(4,"p"),d(5),m(6,"cxTranslate"),c(),p(7,"label")(8,"cx-file-upload",3),d(9),m(10,"cxTranslate"),c(),E(11,"cx-form-errors",4),c(),p(12,"div",5)(13,"button",6),_("click",function(){h(r);let n=l();return y(n.close("Close Import Products Dialog"))}),d(14),m(15,"cxTranslate"),c(),p(16,"button",7),d(17),m(18,"cxTranslate"),c()()()}if(i&2){let r,t=l();s("formGroup",t.form),a(2),x(" ",f(3,10,"importEntriesDialog.importProductsSubtitle")," "),a(3),x(" ",f(6,12,"importEntriesDialog.importProductFileDetails")," "),a(3),s("formControl",t.form.get("file"))("accept",t.allowedTypes),a(),x(" ",f(10,14,"importEntriesDialog.selectFile")," "),a(2),s("control",t.form.get("file")),a(3),x(" ",f(15,16,"importEntriesDialog.cancel")," "),a(2),s("disabled",((r=t.form.get("file"))==null?null:r.status)==="PENDING"),a(),x(" ",f(18,18,"importEntriesDialog.upload")," ")}}var ye=i=>({count:i});function Et(i,e){if(i&1&&(P(0),d(1),m(2,"cxTranslate"),B()),i&2){let r=l(2);a(),x(" ",I(2,1,"importEntriesDialog.summary.loaded",r.summary)," ")}}function Ct(i,e){if(i&1&&(P(0),d(1),m(2,"cxTranslate"),B()),i&2){let r=l(2);a(),x(" ",I(2,1,"importEntriesDialog.summary.loadedToCart",r.summary)," ")}}function It(i,e){if(i&1&&(p(0,"p",9),v(1,Et,3,4,"ng-container",10)(2,Ct,3,4,"ng-container",11),c()),i&2){let r=l();s("ngSwitch",r.type),a(),s("ngSwitchCase",r.orderEntriesSource.QUICK_ORDER)}}function St(i,e){if(i&1&&(p(0,"p"),d(1),m(2,"cxTranslate"),c()),i&2){let r=l();a(),x(" ",I(2,1,"importEntriesDialog.summary.loading",r.summary)," ")}}function Dt(i,e){if(i&1&&(p(0,"p",12),E(1,"cx-icon",13),d(2),m(3,"cxTranslate"),c()),i&2){let r=l();a(),s("type",r.iconTypes.SUCCESS),a(),x(" ",I(3,2,"importEntriesDialog.summary.successes",r.summary),`
`)}}function bt(i,e){if(i&1&&(p(0,"li"),d(1),m(2,"cxTranslate"),c()),i&2){let r=e.$implicit;a(),x(" ",I(2,1,"importEntriesDialog.summary.messages."+r.statusCode,r)," ")}}function Tt(i,e){if(i&1&&(p(0,"ul"),v(1,bt,3,4,"li",18),c()),i&2){let r=l(2);a(),s("ngForOf",r.summary.warningMessages)}}function wt(i,e){if(i&1){let r=C();p(0,"div",14)(1,"p"),E(2,"cx-icon",15),d(3),m(4,"cxTranslate"),p(5,"button",16),_("click",function(){h(r);let n=l();return y(n.toggleWarningList())}),d(6),m(7,"cxTranslate"),c()(),v(8,Tt,2,1,"ul",17),c()}if(i&2){let r=l();a(2),s("type",r.iconTypes.ERROR),a(),x(" ",I(4,4,"importEntriesDialog.summary.warning",H(9,ye,r.summary.warningMessages.length))," "),a(3),x(" ",f(7,7,r.warningDetailsOpened?"importEntriesDialog.summary.hide":"importEntriesDialog.summary.show")," "),a(2),s("ngIf",r.warningDetailsOpened)}}function Ft(i,e){if(i&1&&(p(0,"li"),d(1),m(2,"cxTranslate"),c()),i&2){let r=e.$implicit;a(),x(" ",I(2,1,"importEntriesDialog.summary.messages."+r.statusCode,r)," ")}}function Mt(i,e){if(i&1&&(p(0,"ul"),v(1,Ft,3,4,"li",18),c()),i&2){let r=l(2);a(),s("ngForOf",r.summary.errorMessages)}}function $t(i,e){if(i&1){let r=C();p(0,"div",19)(1,"p"),E(2,"cx-icon",20),d(3),m(4,"cxTranslate"),p(5,"button",16),_("click",function(){h(r);let n=l();return y(n.toggleErrorList())}),d(6),m(7,"cxTranslate"),c()(),v(8,Mt,2,1,"ul",17),c()}if(i&2){let r=l();a(2),s("type",r.iconTypes.RESET),a(),x(" ",I(4,4,"importEntriesDialog.summary.error",H(9,ye,r.summary.errorMessages.length))," "),a(3),x(" ",f(7,7,r.errorDetailsOpened?"importEntriesDialog.summary.hide":"importEntriesDialog.summary.show")," "),a(2),s("ngIf",r.errorDetailsOpened)}}function Vt(i,e){if(i&1){let r=C();p(0,"button",21),_("click",function(){h(r);let n=l();return y(n.close("Close Import Products Dialog"))}),d(1),m(2,"cxTranslate"),c()}i&2&&(a(),x(" ",f(2,1,"importEntriesDialog.close")," "))}function Nt(i,e){i&1&&(p(0,"p"),d(1),m(2,"cxTranslate"),c()),i&2&&(a(),Oe(f(2,1,"importEntriesDialog.summary.info")))}function Pt(i,e){if(i&1){let r=C();p(0,"form",1),_("submit",function(){h(r);let n=l();return y(n.formSubmitSubject$.next(void 0))}),p(1,"p",2),d(2),m(3,"cxTranslate"),c(),p(4,"p"),d(5),m(6,"cxTranslate"),c(),p(7,"label")(8,"cx-file-upload",3),_("update",function(){h(r);let n=l();return y(n.updateCartName())}),d(9),m(10,"cxTranslate"),c(),E(11,"cx-form-errors",4),c(),p(12,"div",5)(13,"label")(14,"span",6),d(15),m(16,"cxTranslate"),c(),E(17,"input",7)(18,"cx-form-errors",8),c()(),p(19,"div",5)(20,"label")(21,"span",6),d(22),m(23,"cxTranslate"),p(24,"span",9),d(25),m(26,"cxTranslate"),c()(),E(27,"textarea",10)(28,"cx-form-errors",8),p(29,"p",11),d(30),m(31,"cxTranslate"),c()()(),p(32,"div",12)(33,"button",13),_("click",function(){h(r);let n=l();return y(n.close("Close Import Products Dialog"))}),d(34),m(35,"cxTranslate"),c(),p(36,"button",14),d(37),m(38,"cxTranslate"),c()()()}if(i&2){let r,t=l();s("formGroup",t.form),a(2),x(" ",f(3,18,"importEntriesDialog.importProductsNewSavedCartSubtitle")," "),a(3),x(" ",f(6,20,"importEntriesDialog.importProductFileDetails")," "),a(3),s("formControl",t.form.get("file"))("accept",t.allowedTypes),a(),x(" ",f(10,22,"importEntriesDialog.selectFile")," "),a(2),s("control",t.form.get("file")),a(4),x(" ",f(16,24,"importEntriesDialog.savedCartName")," "),a(2),s("maxLength",t.nameMaxLength),a(),s("control",t.form.get("name")),a(4),x(" ",f(23,26,"importEntriesDialog.savedCartDescription")," "),a(3),x(" (",f(26,28,"importEntriesDialog.optional"),") "),a(2),s("maxLength",t.descriptionMaxLength),a(),s("control",t.form.get("description")),a(2),x(" ",I(31,30,"importEntriesDialog.charactersLeft",H(37,ye,t.descriptionsCharacterLeft))," "),a(4),x(" ",f(35,33,"importEntriesDialog.cancel")," "),a(2),s("disabled",((r=t.form.get("file"))==null?null:r.status)==="PENDING"),a(),x(" ",f(38,35,"importEntriesDialog.upload")," ")}}function Bt(i,e){if(i&1){let r=C();p(0,"cx-import-to-new-saved-cart-form",12),_("submitEvent",function(n){h(r);let o=l(2).ngIf,u=l();return y(u.importProducts(o,n))}),c()}if(i&2){let r=l(2).ngIf;s("type",r.type)}}function Ot(i,e){if(i&1){let r=C();p(0,"cx-import-entries-form",12),_("submitEvent",function(n){h(r);let o=l(2).ngIf,u=l();return y(u.importProducts(o,n))}),c()}if(i&2){let r=l(2).ngIf;s("type",r.type)}}function kt(i,e){if(i&1&&(P(0),v(1,Bt,1,1,"cx-import-to-new-saved-cart-form",11)(2,Ot,1,1,"ng-template",null,1,A),B()),i&2){let r=R(3),t=l().ngIf,n=l();a(),s("ngIf",n.isNewCartForm(t))("ngIfElse",r)}}function jt(i,e){if(i&1){let r=C();p(0,"cx-import-entries-summary",13),m(1,"async"),_("closeEvent",function(){h(r);let n=l(2);return y(n.close("Close Import Products Dialog"))}),c()}if(i&2){let r=l().ngIf,t=l();s("summary",f(1,2,t.summary$))("type",r.type)}}function Lt(i,e){if(i&1&&(P(0),v(1,kt,4,2,"ng-container",10)(2,jt,2,4,"ng-template",null,0,A),B()),i&2){let r=R(3),t=l();a(),s("ngIf",t.formState)("ngIfElse",r)}}function Rt(i,e){i&1&&E(0,"cx-import-order-entries")}function At(i,e){i&1&&E(0,"cx-export-order-entries")}var Gt=(()=>{let e=class e{constructor(t,n,o,u){this.exportCsvFileService=t,this.importExportConfig=n,this.globalMessageService=o,this.translationService=u,this.columns=[{name:{key:"code"},value:"product.code"},{name:{key:"quantity"},value:"quantity"},...this.exportConfig?.additionalColumns??[]]}get exportConfig(){return this.importExportConfig.cartImportExport?.export}get separator(){return this.importExportConfig.cartImportExport?.file.separator}downloadCsv(t){this.getResolvedEntries(t).pipe(oe(1)).subscribe(n=>this.download(n))}resolveValue(t,n){return t.split(".").reduce((o,u)=>o?o[u]:"",n)?.toString()??""}resolveValues(t){return t.map(n=>this.columns.map(o=>this.resolveValue(o.value,n)))}getTranslatedColumnHeaders(){return be(this.columns.map(t=>this.translationService.translate(`exportEntries.columnNames.${t.name.key}`)))}displayExportMessage(){this.globalMessageService.add({key:"exportEntries.exportMessage"},qe.MSG_TYPE_INFO)}limitValues(t){return this.exportConfig?.maxEntries?t.splice(0,this.exportConfig?.maxEntries):t}getResolvedEntries(t){let n=this.limitValues(this.resolveValues(t));return this.getTranslatedColumnHeaders().pipe(j(o=>[o,...n]))}download(t){this.exportConfig?.messageEnabled&&this.displayExportMessage(),setTimeout(()=>{this.exportConfig!==void 0&&this.separator!==void 0&&this.exportCsvFileService.download(t,this.separator,this.exportConfig.fileOptions)},this.exportConfig?.downloadDelay??0)}};e.\u0275fac=function(n){return new(n||e)(M(ot),M(ie),M(ze),M(Qe))},e.\u0275prov=L({token:e,factory:e.\u0275fac,providedIn:"root"});let i=e;return i})(),ct=(()=>{let e=class e{constructor(t,n){this.exportEntriesService=t,this.contextService=n,this.styles="container",this.orderEntriesContext$=this.contextService.get(te),this.entries$=this.orderEntriesContext$.pipe(Q(o=>o?.getEntries?.()??k(void 0)))}exportCsv(t){this.exportEntriesService.downloadCsv(t)}};e.\u0275fac=function(n){return new(n||e)(g(Gt),g(ee))},e.\u0275cmp=b({type:e,selectors:[["cx-export-order-entries"]],hostVars:2,hostBindings:function(n,o){n&2&&Ve(o.styles)},decls:3,vars:5,consts:[["class","btn btn-tertiary cx-export-btn",3,"click",4,"ngIf"],[1,"btn","btn-tertiary","cx-export-btn",3,"click"]],template:function(n,o){if(n&1&&(v(0,vt,3,3,"button",0),m(1,"async"),m(2,"async")),n&2){let u;s("ngIf",((u=f(1,1,o.entries$))==null?null:u.length)>0&&f(2,3,o.entries$))}},dependencies:[w,G,$],encapsulation:2,changeDetection:0});let i=e;return i})(),Ee=(()=>{let e=class e{};e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=T({type:e}),e.\u0275inj=D({imports:[K,Ge,Z,ae,X.withConfig({cmsComponents:{ExportOrderEntriesComponent:{component:ct}}})]});let i=e;return i})(),mt=(()=>{let e=class e{constructor(t,n){this.launchDialogService=t,this.contextService=n,this.subscription=new Ie,this.orderEntriesContext$=this.contextService.get(te)}openDialog(t){this.launchDialogService.openDialogAndSubscribe("IMPORT_TO_CART",this.element,{orderEntriesContext:t})}};e.\u0275fac=function(n){return new(n||e)(g(q),g(ee))},e.\u0275cmp=b({type:e,selectors:[["cx-import-order-entries"]],viewQuery:function(n,o){if(n&1&&Ne(_t,5),n&2){let u;Pe(u=Be())&&(o.element=u.first)}},decls:2,vars:3,consts:[["class","btn btn-tertiary cx-import-btn",3,"click",4,"ngIf"],[1,"btn","btn-tertiary","cx-import-btn",3,"click"]],template:function(n,o){n&1&&(v(0,ht,3,3,"button",0),m(1,"async")),n&2&&s("ngIf",f(1,1,o.orderEntriesContext$))},dependencies:[w,G,$],encapsulation:2,changeDetection:0});let i=e;return i})(),lt=(()=>{let e=class e{constructor(){}csvDataToProduct(t){return t.map(n=>({productCode:n[0],quantity:Number(n[1])}))}isDataParsableToProducts(t){let n=new RegExp(/(?:\s|^)\d+(?=\s|$)/);return t.length>0&&t.every(o=>n.test(o[1]))}};e.\u0275fac=function(n){return new(n||e)},e.\u0275prov=L({token:e,factory:e.\u0275fac,providedIn:"root"});let i=e;return i})(),ut=(()=>{let e=class e{constructor(t,n,o,u,S){this.launchDialogService=t,this.importToCartService=n,this.importCsvService=o,this.filesFormValidators=u,this.importExportConfig=S,this.formSubmitSubject$=new Se,this.submitEvent=new W}ngOnInit(){this.form=this.buildForm(),this.formSubmitSubject$.pipe(Fe(()=>{this.form.invalid&&(this.form.markAllAsTouched(),at.deepUpdateValueAndValidity(this.form))}),Q(()=>this.form.statusChanges.pipe(we(this.form.get("file")?.status),re(t=>t!=="PENDING"),oe(1))),re(t=>t==="VALID")).subscribe(()=>{this.save()})}close(t){this.launchDialogService.closeDialog(t)}save(){let t=this.form.get("file")?.value?.[0];this.separator!==void 0&&this.importCsvService.loadFile(t,this.separator).subscribe(n=>{this.submitEvent.emit({products:this.importToCartService.csvDataToProduct(n)})})}buildForm(){let t=new ce({});return t.setControl("file",new U("",[O.required,this.filesFormValidators.maxSize(this.maxSize)],[n=>this.separator!==void 0?this.importCsvService.validateFile(n.value[0],{separator:this.separator,isDataParsable:this.importToCartService.isDataParsableToProducts,maxEntries:this.maxEntries}):k(null)])),t}get allowedTypes(){return this.importExportConfig.cartImportExport?.import?.fileValidity?.allowedTypes}get maxSize(){return this.importExportConfig.cartImportExport?.import?.fileValidity?.maxSize}get maxEntries(){return this.importExportConfig.cartImportExport?.import?.fileValidity?.maxEntries?.[this.type]}get separator(){return this.importExportConfig.cartImportExport?.file.separator}};e.\u0275fac=function(n){return new(n||e)(g(q),g(lt),g(_e),g(ve),g(ie))},e.\u0275cmp=b({type:e,selectors:[["cx-import-entries-form"]],inputs:{type:"type"},outputs:{submitEvent:"submitEvent"},decls:1,vars:1,consts:[[3,"formGroup","submit",4,"ngIf"],[3,"submit","formGroup"],[1,"cx-import-entries-subtitle"],[3,"formControl","accept"],["prefix","formErrors.file",3,"control"],[1,"cx-import-entries-footer"],["type","button",1,"btn","btn-secondary",3,"click"],["type","submit",1,"btn","btn-primary",3,"disabled"]],template:function(n,o){n&1&&v(0,yt,19,20,"form",0),n&2&&s("ngIf",o.form)},dependencies:[w,me,se,pe,le,ue,xe,ge,$],encapsulation:2,changeDetection:0});let i=e;return i})(),Ut=(()=>{let e=class e{constructor(){this.iconTypes=de,this.orderEntriesSource=F,this.warningDetailsOpened=!1,this.errorDetailsOpened=!1,this.closeEvent=new W}close(t){this.closeEvent.emit(t)}toggleWarningList(){this.warningDetailsOpened=!this.warningDetailsOpened}toggleErrorList(){this.errorDetailsOpened=!this.errorDetailsOpened}};e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=b({type:e,selectors:[["cx-import-entries-summary"]],inputs:{type:"type",summary:"summary"},outputs:{closeEvent:"closeEvent"},decls:11,vars:7,consts:[["loading",""],["info",""],[1,"cx-import-entries-summary-status"],[3,"ngSwitch",4,"ngIf","ngIfElse"],["class","cx-import-entries-summary-successes",4,"ngIf"],["class","cx-import-entries-summary-warnings",4,"ngIf"],["class","cx-import-entries-summary-errors",4,"ngIf"],[1,"cx-import-entries-summary-footer"],["class","btn btn-secondary","type","button",3,"click",4,"ngIf","ngIfElse"],[3,"ngSwitch"],[4,"ngSwitchCase"],[4,"ngSwitchDefault"],[1,"cx-import-entries-summary-successes"],[1,"success",3,"type"],[1,"cx-import-entries-summary-warnings"],[1,"warning",3,"type"],[1,"btn","btn-tertiary",3,"click"],[4,"ngIf"],[4,"ngFor","ngForOf"],[1,"cx-import-entries-summary-errors"],[1,"error",3,"type"],["type","button",1,"btn","btn-secondary",3,"click"]],template:function(n,o){if(n&1&&(p(0,"div",2),v(1,It,3,2,"p",3)(2,St,3,4,"ng-template",null,0,A),c(),v(4,Dt,4,5,"p",4)(5,wt,9,11,"div",5)(6,$t,9,11,"div",6),p(7,"div",7),v(8,Vt,3,3,"button",8)(9,Nt,3,3,"ng-template",null,1,A),c()),n&2){let u=R(3),S=R(10);a(),s("ngIf",!o.summary.loading)("ngIfElse",u),a(3),s("ngIf",o.summary.successesCount>0),a(),s("ngIf",o.summary.warningMessages.length>0),a(),s("ngIf",o.summary.errorMessages.length>0),a(2),s("ngIf",!o.summary.loading)("ngIfElse",S)}},dependencies:[je,w,Le,Re,Ae,fe,$],encapsulation:2,changeDetection:0});let i=e;return i})(),qt=(()=>{let e=class e extends ut{get descriptionsCharacterLeft(){return this.descriptionMaxLength-(this.form.get("description")?.value?.length||0)}constructor(t,n,o,u,S,ne){super(t,n,o,u,S),this.launchDialogService=t,this.importToCartService=n,this.importCsvService=o,this.filesFormValidators=u,this.importExportConfig=S,this.datePipe=ne,this.descriptionMaxLength=250,this.nameMaxLength=50,this.submitEvent=new W}save(){let t=this.form.get("file")?.value?.[0];this.separator!==void 0&&this.importCsvService.loadFile(t,this.separator).subscribe(n=>{this.submitEvent.emit({products:this.importToCartService.csvDataToProduct(n),savedCartInfo:{name:this.form.get("name")?.value,description:this.form.get("description")?.value}})})}buildForm(){let t=new ce({});return t.setControl("file",new U("",[O.required,this.filesFormValidators.maxSize(this.maxSize)],[n=>this.separator!==void 0?this.importCsvService.validateFile(n.value[0],{separator:this.separator,isDataParsable:this.importToCartService.isDataParsableToProducts,maxEntries:this.maxEntries}):k(null)])),t.setControl("name",new U("",[O.required,O.maxLength(this.nameMaxLength)])),t.setControl("description",new U("",[O.maxLength(this.descriptionMaxLength)])),t}updateCartName(){let t=this.form.get("name");if(t&&!t?.value&&this.cartNameGeneration?.source)switch(this.cartNameGeneration.source){case z.FILE_NAME:{this.setFieldValueByFileName(t);break}case z.DATE_TIME:{this.setFieldValueByDatetime(t);break}default:break}}setFieldValueByFileName(t){let n=this.form.get("file")?.value?.[0]?.name?.replace(/\.[^/.]+$/,"");t.setValue(n)}setFieldValueByDatetime(t){let n=new Date,o=this.cartNameGeneration?.fromDateOptions,u=o?.mask,S=o?.prefix??"",ne=o?.suffix??"",ft=u?this.datePipe.transform(n,u):this.datePipe.transform(n);t.setValue(`${S}${ft}${ne}`)}get cartNameGeneration(){return this.importExportConfig.cartImportExport?.import?.cartNameGeneration}};e.\u0275fac=function(n){return new(n||e)(g(q),g(lt),g(_e),g(ve),g(ie),g(J))},e.\u0275cmp=b({type:e,selectors:[["cx-import-to-new-saved-cart-form"]],outputs:{submitEvent:"submitEvent"},features:[ke([J]),Me],decls:1,vars:1,consts:[[3,"formGroup","submit",4,"ngIf"],[3,"submit","formGroup"],[1,"cx-import-entries-subtitle"],[3,"update","formControl","accept"],["prefix","formErrors.file",3,"control"],[1,"cx-import-entries-row"],[1,"cx-import-entries-label","label-content"],["formControlName","name","required","","type","text",1,"form-control",3,"maxLength"],[3,"control"],[1,"cx-import-entries-label-optional"],["formControlName","description","rows","5",1,"form-control",3,"maxLength"],[1,"cx-import-entries-input-hint"],[1,"cx-import-entries-footer"],["type","button",1,"btn","btn-secondary",3,"click"],["type","submit",1,"btn","btn-primary",3,"disabled"]],template:function(n,o){n&1&&v(0,Pt,39,39,"form",0),n&2&&s("ngIf",o.form)},dependencies:[w,me,We,se,pe,Ke,le,ue,He,xe,ge,$],encapsulation:2,changeDetection:0});let i=e;return i})(),zt=(()=>{let e=class e{constructor(t){this.launchDialogService=t,this.iconTypes=de,this.focusConfig={trap:!0,block:!0,autofocus:"button",focusOnEscape:!0},this.formState=!0,this.summary$=new De({loading:!1,cartName:"",count:0,total:0,successesCount:0,warningMessages:[],errorMessages:[]}),this.context$=this.launchDialogService.data$.pipe(j(n=>n.orderEntriesContext))}isNewCartForm(t){return t.type===F.NEW_SAVED_CART}close(t){this.launchDialogService.closeDialog(t)}importProducts(t,{products:n,savedCartInfo:o}){this.formState=!1,this.summary$.next(N(V({},this.summary$.value),{loading:!0,total:n.length,cartName:o?.name})),t.addEntries(n,o).pipe(Te(()=>{this.summary$.next(N(V({},this.summary$.value),{loading:!1}))})).subscribe(u=>{this.populateSummary(u)})}populateSummary(t){t.statusCode===he.SUCCESS?this.summary$.next(N(V({},this.summary$.value),{count:this.summary$.value.count+1,successesCount:this.summary$.value.successesCount+1})):t.statusCode===he.LOW_STOCK?this.summary$.next(N(V({},this.summary$.value),{count:this.summary$.value.count+1,warningMessages:[...this.summary$.value.warningMessages,t]})):this.summary$.next(N(V({},this.summary$.value),{count:this.summary$.value.count+1,errorMessages:[...this.summary$.value.errorMessages,t]}))}};e.\u0275fac=function(n){return new(n||e)(g(q))},e.\u0275cmp=b({type:e,selectors:[["cx-import-entries-dialog"]],decls:14,vars:14,consts:[["importSummary",""],["reducedForm",""],[1,"cx-import-entries-dialog",3,"esc","cxFocus"],[1,"cx-import-entries-container"],[1,"modal-header","cx-import-entries-header"],[1,"cx-import-entries-title","modal-title"],["type","button",1,"cx-import-entries-close","close",3,"click","disabled"],["aria-hidden","true"],[3,"type"],[4,"ngIf"],[4,"ngIf","ngIfElse"],[3,"type","submitEvent",4,"ngIf","ngIfElse"],[3,"submitEvent","type"],[3,"closeEvent","summary","type"]],template:function(n,o){if(n&1&&(p(0,"div",2),_("esc",function(){return o.close("Escape clicked")}),p(1,"div",3)(2,"div",4),P(3),p(4,"div",5),d(5),m(6,"cxTranslate"),c(),B(),p(7,"button",6),m(8,"async"),m(9,"cxTranslate"),_("click",function(){return o.close("Close Import Products Dialog")}),p(10,"span",7),E(11,"cx-icon",8),c()()(),v(12,Lt,4,2,"ng-container",9),m(13,"async"),c()()),n&2){let u;s("cxFocus",o.focusConfig),a(5),x(" ",f(6,6,"importEntriesDialog.importProducts")," "),a(2),s("disabled",(u=f(8,8,o.summary$))==null?null:u.loading),$e("aria-label",f(9,10,"importEntriesDialog.close")),a(4),s("type",o.iconTypes.CLOSE),a(),s("ngIf",f(13,12,o.context$))}},dependencies:[w,fe,Je,ut,Ut,qt,G,$],encapsulation:2,changeDetection:0});let i=e;return i})(),Qt={launch:{IMPORT_TO_CART:{inlineRoot:!0,component:zt,dialogType:et.DIALOG}}},Ce=(()=>{let e=class e{};e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=T({type:e}),e.\u0275inj=D({providers:[Y(Qt)],imports:[K,Ye,Xe,nt,tt,Ze,rt,Z,X.withConfig({cmsComponents:{ImportOrderEntriesComponent:{component:mt}}})]});let i=e;return i})(),Wt=(()=>{let e=class e{constructor(t){this.contextService=t,this.context$=this.contextService.get(te),this.shouldDisplayImport$=this.context$.pipe(j(n=>!!n?.addEntries)),this.shouldDisplayExport$=this.context$.pipe(Q(n=>n?.getEntries?.()??k([])),j(n=>!!n?.length))}};e.\u0275fac=function(n){return new(n||e)(g(ee))},e.\u0275cmp=b({type:e,selectors:[["cx-import-export-order-entries"]],decls:4,vars:6,consts:[[4,"ngIf"]],template:function(n,o){n&1&&(v(0,Rt,1,0,"cx-import-order-entries",0),m(1,"async"),v(2,At,1,0,"cx-export-order-entries",0),m(3,"async")),n&2&&(s("ngIf",f(1,2,o.shouldDisplayImport$)),a(2),s("ngIf",f(3,4,o.shouldDisplayExport$)))},dependencies:[mt,ct,w,G],encapsulation:2,changeDetection:0});let i=e;return i})(),dt=(()=>{let e=class e{};e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=T({type:e}),e.\u0275inj=D({imports:[it,X.withConfig({cmsComponents:{ImportExportOrderEntriesComponent:{component:Wt}}}),Z,ae,Ce,Ee,K]});let i=e;return i})();var Ci=(()=>{let e=class e{};e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=T({type:e}),e.\u0275inj=D({imports:[pt.forRoot(),Ee,Ce,dt]});let i=e;return i})();export{Ci as ImportExportModule};
