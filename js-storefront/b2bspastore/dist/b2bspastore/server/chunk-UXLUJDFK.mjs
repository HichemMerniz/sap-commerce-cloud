import './polyfills.server.mjs';
import{c as O,d as We}from"./chunk-ADLYYZ7J.mjs";import{Q as Be,V as Pe,_ as Y,b as Ee,c as Q,d as je,da as $e,e as De,f as Te,i as Z,k as Re,na as Ge,o as ke,oa as Ve,ob as He,r as Le,s as Ne,sa as Oe,ta as qe,w as Ae,x as Ue}from"./chunk-AVNHB76C.mjs";import{Bb as k,Cb as L,D as h,Da as xe,Ha as Ce,Ia as be,La as Me,Ma as V,Ob as Fe,Pa as Se,Qa as z,U as he,Wb as N,Xb as A,aa as G,ab as we,da as ye,p as ve,s as D,ta as R,u as T,za as Ie}from"./chunk-ICSRVU46.mjs";import{$a as re,Ba as ne,Cd as j,Dc as s,Ea as g,Ec as a,Fa as u,Fc as me,Ha as H,Ic as fe,Ja as l,Jb as se,Ka as oe,Ob as I,Pb as ae,Qa as M,Qb as p,Ra as m,Rd as ge,S as ie,Sb as ce,Wb as d,Xb as c,Yb as v,Zb as w,_b as F,cc as pe,g as _,gc as W,mc as de,nc as f,oc as x,p as ee,pc as C,q as te,qc as le,qd as E,vb as r,vd as $,wa as P,wb as S,xc as b,yc as ue,za as q}from"./chunk-JSDTXUAI.mjs";import"./chunk-GHFNAT2I.mjs";var et=()=>({cxRoute:"forgotPassword"});function tt(t,e){t&1&&v(0,"cx-spinner",8)}var it=()=>({cxRoute:"register"}),nt=()=>({cxRoute:"checkoutLogin"});function ot(t,e){t&1&&(w(0),d(1,"a",3),s(2,"cxUrl"),f(3),s(4,"cxTranslate"),c(),F()),t&2&&(r(),p("routerLink",a(2,2,b(6,it))),r(2),x(a(4,4,"loginForm.register")))}function rt(t,e){t&1&&(w(0),d(1,"a",4),s(2,"cxUrl"),f(3),s(4,"cxTranslate"),c(),F()),t&2&&(r(),p("routerLink",a(2,2,b(6,nt))),r(2),x(a(4,4,"loginForm.guestCheckout")))}var st=t=>({name:t}),at=()=>({cxRoute:"login"});function ct(t,e){if(t&1&&(w(0),d(1,"div",2),f(2),s(3,"cxTranslate"),c(),v(4,"cx-page-slot",3),F()),t&2){let B=e.ngIf;r(2),C(" ",me(3,1,"miniLogin.userGreeting",ue(4,st,B.name))," ")}}function pt(t,e){t&1&&(d(0,"a",4),s(1,"cxUrl"),f(2),s(3,"cxTranslate"),c()),t&2&&(p("routerLink",a(1,2,b(6,at))),r(2),x(a(3,4,"miniLogin.signInRegister")))}var dt=()=>({cxRoute:"logout"});function lt(t,e){if(t&1&&(w(0),d(1,"div",2),f(2),c(),d(3,"a",3),s(4,"cxUrl"),f(5),s(6,"cxTranslate"),c(),F()),t&2){let B=e.ngIf;r(2),le("",B.title,"",B.name,""),r(),p("routerLink",a(4,4,b(8,dt))),r(2),C("",a(6,6,"myAccountV2User.signOut")," ")}}var J=(()=>{let e=class e{constructor(n,i,o){this.auth=n,this.globalMessage=i,this.winRef=o,this.busy$=new _(!1),this.isUpdating$=this.busy$.pipe(q(y=>{let X=this.winRef.nativeWindow?.history?.state?.newUid;X&&this.form.patchValue({userId:X}),y===!0?this.form.disable():this.form.enable()})),this.form=new Te({userId:new Z("",[Q.required,He.emailValidator]),password:new Z("",Q.required)})}login(){if(!this.form.valid){this.form.markAllAsTouched();return}this.busy$.next(!0),ee(this.auth.loginWithCredentials(this.form.value.userId.toLowerCase(),this.form.value.password)).pipe(ne(this.auth.isUserLoggedIn()),q(([n,i])=>this.onSuccess(i))).subscribe()}onSuccess(n){n&&(this.globalMessage.remove(Me.MSG_TYPE_ERROR),this.form.reset()),this.busy$.next(!1)}};e.\u0275fac=function(i){return new(i||e)(l(R),l(V),l(G))},e.\u0275prov=g({token:e,factory:e.\u0275fac});let t=e;return t})(),ut=(()=>{let e=class e{constructor(n){this.service=n,this.form=this.service.form,this.isUpdating$=this.service.isUpdating$,this.style=!0}onSubmit(){this.service.login()}};e.\u0275fac=function(i){return new(i||e)(S(J))},e.\u0275cmp=M({type:e,selectors:[["cx-login-form"]],hostVars:2,hostBindings:function(i,o){i&2&&ce("user-form",o.style)},decls:25,vars:32,consts:[["class","overlay",4,"ngIf"],[3,"ngSubmit","formGroup"],[1,"label-content"],["required","true","type","email","formControlName","userId",1,"form-control",3,"placeholder"],[3,"control"],["required","true","type","password","formControlName","password","cxPasswordVisibilitySwitch","",1,"form-control",3,"placeholder"],[1,"btn-link",3,"routerLink"],["type","submit",1,"btn","btn-block","btn-primary",3,"disabled"],[1,"overlay"]],template:function(i,o){i&1&&(I(0,tt,1,0,"cx-spinner",0),s(1,"async"),d(2,"form",1),pe("ngSubmit",function(){return o.onSubmit()}),d(3,"label")(4,"span",2),f(5),s(6,"cxTranslate"),c(),v(7,"input",3),s(8,"cxTranslate"),v(9,"cx-form-errors",4),c(),d(10,"label")(11,"span",2),f(12),s(13,"cxTranslate"),c(),v(14,"input",5),s(15,"cxTranslate"),s(16,"cxTranslate"),v(17,"cx-form-errors",4),c(),d(18,"a",6),s(19,"cxUrl"),f(20),s(21,"cxTranslate"),c(),d(22,"button",7),f(23),s(24,"cxTranslate"),c()()),i&2&&(p("ngIf",a(1,13,o.isUpdating$)),r(2),p("formGroup",o.form),r(3),x(a(6,15,"loginForm.emailAddress.label")),r(2),W("placeholder",a(8,17,"loginForm.emailAddress.placeholder")),r(2),p("control",o.form.get("userId")),r(3),x(a(13,19,"loginForm.password.label")),r(2),W("placeholder",a(15,21,"loginForm.password.placeholder")),ae("aria-label",a(16,23,"loginForm.password.placeholder")),r(3),p("control",o.form.get("password")),r(),p("routerLink",a(19,25,b(31,et))),r(2),C(" ",a(21,27,"loginForm.forgotPassword")," "),r(2),p("disabled",o.form.disabled),r(),C(" ",a(24,29,"loginForm.signIn")," "))},dependencies:[E,Re,Ee,je,De,Ne,ke,Le,D,Ge,Be,Oe,$,k,N],encapsulation:2,changeDetection:0});let t=e;return t})(),mt=(()=>{let e=class e{};e.\u0275fac=function(i){return new(i||e)},e.\u0275mod=m({type:e}),e.\u0275inj=u({providers:[h({cmsComponents:{ReturningCustomerLoginComponent:{component:ut,guards:[z],providers:[{provide:J,useClass:J,deps:[R,V,G]}]}}})],imports:[j,Ae,Ue,T,L,A,Ve,$e,qe]});let t=e;return t})(),ft=(()=>{let e=class e{constructor(n){this.activatedRoute=n,this.loginAsGuest=!1}ngOnInit(){this.loginAsGuest=this.activatedRoute.snapshot.queryParams.forced}};e.\u0275fac=function(i){return new(i||e)(S(ve))},e.\u0275cmp=M({type:e,selectors:[["cx-login-register"]],decls:6,vars:5,consts:[[1,"register"],[1,"cx-section-title"],[4,"ngIf"],[1,"btn","btn-block","btn-secondary","btn-register",3,"routerLink"],[1,"btn","btn-block","btn-secondary","btn-guest",3,"routerLink"]],template:function(i,o){i&1&&(d(0,"div",0)(1,"p",1),f(2),s(3,"cxTranslate"),c(),I(4,ot,5,7,"ng-container",2)(5,rt,5,7,"ng-container",2),c()),i&2&&(r(2),C(" ",a(3,3,"loginForm.dontHaveAccount")," "),r(2),p("ngIf",!o.loginAsGuest),r(),p("ngIf",o.loginAsGuest))},dependencies:[E,D,k,N],encapsulation:2});let t=e;return t})(),gt=(()=>{let e=class e{};e.\u0275fac=function(i){return new(i||e)},e.\u0275mod=m({type:e}),e.\u0275inj=u({providers:[h({cmsComponents:{ReturningCustomerRegisterComponent:{component:ft,guards:[z]}}})],imports:[j,T,L,Y,A]});let t=e;return t})(),Qe=(()=>{let e=class e{constructor(n,i){this.auth=n,this.userAccount=i}ngOnInit(){this.user$=this.auth.isUserLoggedIn().pipe(P(n=>n?this.userAccount.get():te(void 0)))}};e.\u0275fac=function(i){return new(i||e)(S(R),S(O))},e.\u0275cmp=M({type:e,selectors:[["cx-login"]],decls:4,vars:4,consts:[["login",""],[4,"ngIf","ngIfElse"],[1,"cx-login-greet"],["id","account-nav","position","HeaderLinks"],["role","link",3,"routerLink"]],template:function(i,o){if(i&1&&(I(0,ct,5,6,"ng-container",1),s(1,"async"),I(2,pt,4,7,"ng-template",null,0,fe)),i&2){let y=de(3);p("ngIf",a(1,2,o.user$))("ngIfElse",y)}},dependencies:[E,D,Pe,$,k,N],encapsulation:2});let t=e;return t})(),vt=(()=>{let e=class e{};e.\u0275fac=function(i){return new(i||e)},e.\u0275mod=m({type:e}),e.\u0275inj=u({providers:[h({cmsComponents:{LoginComponent:{component:Qe}}})],imports:[j,T,L,Y,A]});let t=e;return t})(),ht=(()=>{let e=class e extends Qe{};e.\u0275fac=(()=>{let n;return function(o){return(n||(n=re(e)))(o||e)}})(),e.\u0275cmp=M({type:e,selectors:[["cx-my-account-v2-user"]],features:[se],decls:3,vars:3,consts:[[1,"cx-my-account-v2-user"],[4,"ngIf"],[1,"cx-name"],[1,"cx-sign-out",3,"routerLink"]],template:function(i,o){i&1&&(d(0,"div",0),I(1,lt,7,9,"ng-container",1),s(2,"async"),c()),i&2&&(r(),p("ngIf",a(2,1,o.user$)))},dependencies:[E,D,$,k,N],encapsulation:2});let t=e;return t})(),yt=(()=>{let e=class e{};e.\u0275fac=function(i){return new(i||e)},e.\u0275mod=m({type:e}),e.\u0275inj=u({providers:[h({cmsComponents:{MyAccountViewUserComponent:{component:ht,guards:[Se]}}})],imports:[j,T,L,A]});let t=e;return t})(),Ze=(()=>{let e=class e{};e.\u0275fac=function(i){return new(i||e)},e.\u0275mod=m({type:e}),e.\u0275inj=u({imports:[vt,mt,gt,yt]});let t=e;return t})();var Je=new H("UserAccountNormalizer"),Vt=new H("UserAccountSerializer"),U=class{},Ke=(()=>{let e=class e{constructor(n){this.adapter=n}get(n){return this.adapter.load(n)}};e.\u0275fac=function(i){return new(i||e)(l(U))},e.\u0275prov=g({token:e,factory:e.\u0275fac});let t=e;return t})(),Ye=(()=>{let e=class e{constructor(n,i,o){this.userAccountConnector=n,this.userIdService=i,this.query=o,this.userQuery=this.query.create(()=>this.userIdService.takeUserId(!0).pipe(P(y=>this.userAccountConnector.get(y))),{reloadOn:[We],resetOn:[be,Ce]})}getById(n){return this.userAccountConnector.get(n)}get(){return this.userQuery.get()}};e.\u0275fac=function(i){return new(i||e)(l(Ke),l(he),l(Fe))},e.\u0275prov=g({token:e,factory:e.\u0275fac});let t=e;return t})(),It=[Ye,{provide:O,useExisting:Ye}],Xe=(()=>{let e=class e{};e.\u0275fac=function(i){return new(i||e)},e.\u0275mod=m({type:e}),e.\u0275inj=u({providers:[Ke,...It]});let t=e;return t})();var xt={backend:{occ:{endpoints:{user:"users/${userId}"}}}},Ct=(()=>{let e=class e{constructor(n,i,o){this.http=n,this.occEndpoints=i,this.converter=o,this.logger=oe(ye)}load(n){let i=this.occEndpoints.buildUrl("user",{urlParams:{userId:n}});return this.http.get(i).pipe(ie(o=>{throw xe(o,this.logger)}),this.converter.pipeable(Je))}};e.\u0275fac=function(i){return new(i||e)(l(ge),l(Ie),l(we))},e.\u0275prov=g({token:e,factory:e.\u0275fac});let t=e;return t})(),_e=(()=>{let e=class e{};e.\u0275fac=function(i){return new(i||e)},e.\u0275mod=m({type:e}),e.\u0275inj=u({providers:[h(xt),{provide:U,useClass:Ct}]});let t=e;return t})();var ei=(()=>{let e=class e{};e.\u0275fac=function(i){return new(i||e)},e.\u0275mod=m({type:e}),e.\u0275inj=u({imports:[Xe,_e,Ze]});let t=e;return t})();export{ei as UserAccountModule};
