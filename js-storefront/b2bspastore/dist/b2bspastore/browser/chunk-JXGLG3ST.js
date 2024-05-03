import{c as X}from"./chunk-7SH4YGLV.js";import{c as $,d as J}from"./chunk-4YEDMUBT.js";import{b as K,d as W,e as B,f as V}from"./chunk-ID6NLOKH.js";import"./chunk-VAXL2NXV.js";import{Ce as Z,Dc as x,Ed as A,Ke as z,L as d,Nd as H,P as N,Pc as k,Ye as Q,a as l,be as M,de as I,fa as w,fe as C,he as q,ia as E,le as u,na as p,nd as O,oa as f,pa as g,qa as n,ra as b,re as G,uf as D,v as y,vf as S,wa as v,wf as Y,xc as m,zc as P}from"./chunk-ST632LWR.js";var L=new g("UserProfileNormalizer"),ie=new g("UserProfileSerializer"),Se=new g("UserSerializer"),se=new g("UserSignUpSerializer"),oe=new g("TitleNormalizer"),U=class{},j=(()=>{let t=class t{constructor(e){this.userProfileAdapter=e}update(e,r){return this.userProfileAdapter.update(e,r)}register(e){return this.userProfileAdapter.register(e)}registerGuest(e,r){return this.userProfileAdapter.registerGuest(e,r)}requestForgotPasswordEmail(e){return this.userProfileAdapter.requestForgotPasswordEmail(e)}resetPassword(e,r){return this.userProfileAdapter.resetPassword(e,r)}updateEmail(e,r,o){return this.userProfileAdapter.updateEmail(e,r,o)}updatePassword(e,r,o){return this.userProfileAdapter.updatePassword(e,r,o)}remove(e){return this.userProfileAdapter.close(e)}getTitles(){return this.userProfileAdapter.loadTitles()}};t.\u0275fac=function(r){return new(r||t)(n(U))},t.\u0275prov=p({token:t,factory:t.\u0275fac});let i=t;return i})(),_=(()=>{let t=class t{constructor(e,r,o){this.userIdService=e,this.userProfileConnector=r,this.command=o,this.updateCommand=this.command.create(s=>this.userIdService.takeUserId(!0).pipe(w(c=>this.userProfileConnector.updateEmail(c,s.password,s.newUid))),{strategy:D.Queue})}update(e,r){return this.updateCommand.execute({password:e,newUid:r})}};t.\u0275fac=function(r){return new(r||t)(n(A),n(j),n(S))},t.\u0275prov=p({token:t,factory:t.\u0275fac});let i=t;return i})(),ee=(()=>{let t=class t{constructor(e,r,o){this.userProfileConnector=e,this.userIdService=r,this.command=o,this.updateCommand=this.command.create(s=>this.userIdService.takeUserId(!0).pipe(N(1),w(c=>this.userProfileConnector.updatePassword(c,s.oldPassword,s.newPassword)))),this.resetCommand=this.command.create(s=>this.userProfileConnector.resetPassword(s.token,s.password)),this.requestForgotPasswordEmailCommand=this.command.create(s=>this.userProfileConnector.requestForgotPasswordEmail(s.email))}update(e,r){return this.updateCommand.execute({oldPassword:e,newPassword:r})}reset(e,r){return this.resetCommand.execute({token:e,password:r})}requestForgotPasswordEmail(e){return this.requestForgotPasswordEmailCommand.execute({email:e})}};t.\u0275fac=function(r){return new(r||t)(n(j),n(A),n(S))},t.\u0275prov=p({token:t,factory:t.\u0275fac});let i=t;return i})(),T=(()=>{let t=class t{constructor(e,r,o,s,c,a,h){this.userAccountService=e,this.authService=r,this.userProfileConnector=o,this.eventService=s,this.userIdService=c,this.query=a,this.command=h,this.updateCommand=this.command.create(R=>this.userIdService.takeUserId(!0).pipe(w(de=>this.userProfileConnector.update(de,R.details).pipe(E(()=>{this.eventService.dispatch({user:R.details},J)})))),{strategy:D.Queue}),this.closeCommand=this.command.create(()=>this.userIdService.takeUserId(!0).pipe(w(R=>this.userProfileConnector.remove(R).pipe(E(()=>this.authService.logout()))))),this.titleQuery=this.query.create(()=>this.userProfileConnector.getTitles(),{reloadOn:[Q]})}get(){return this.userAccountService.get()}update(e){return this.updateCommand.execute({details:e})}close(){return this.closeCommand.execute(void 0)}getTitles(){return this.titleQuery.get().pipe(y(e=>e??[]))}};t.\u0275fac=function(r){return new(r||t)(n($),n(M),n(j),n(G),n(A),n(Y),n(S))},t.\u0275prov=p({token:t,factory:t.\u0275fac});let i=t;return i})(),te=(()=>{let t=class t{constructor(e,r,o,s,c){this.userProfile=e,this.userConnector=r,this.authService=o,this.command=s,this.store=c,this.registerCommand=this.command.create(({user:a})=>this.userConnector.register(a).pipe(E(()=>{this.store.dispatch(new Z.RegisterUserSuccess)}))),this.registerGuestCommand=this.command.create(a=>this.userConnector.registerGuest(a.guid,a.password).pipe(E(h=>{this.authService.loginWithCredentials(h.uid,a.password)})))}register(e){return this.registerCommand.execute({user:e})}registerGuest(e,r){return this.registerGuestCommand.execute({guid:e,password:r})}getTitles(){return this.userProfile.getTitles()}};t.\u0275fac=function(r){return new(r||t)(n(T),n(j),n(M),n(S),n(k))},t.\u0275prov=p({token:t,factory:t.\u0275fac});let i=t;return i})(),pe=[_,ee,T,te,{provide:W,useExisting:_},{provide:B,useExisting:ee},{provide:K,useExisting:T},{provide:V,useExisting:te}],ne=(()=>{let t=class t{};t.\u0275fac=function(r){return new(r||t)},t.\u0275mod=v({type:t}),t.\u0275inj=f({providers:[j,...pe]});let i=t;return i})();var he={backend:{occ:{endpoints:{userRegister:"users",userForgotPassword:"forgottenpasswordtokens",userResetPassword:"resetpassword",userUpdateLoginId:"users/${userId}/login",userUpdatePassword:"users/${userId}/password",titles:"titles"}}}},ce={"Content-Type":"application/json"},F={"Content-Type":"application/x-www-form-urlencoded"},le=(()=>{let t=class t{constructor(e,r,o){this.http=e,this.occEndpoints=r,this.converter=o,this.logger=b(H)}update(e,r){let o=this.occEndpoints.isConfigured("userUpdateProfile")?"userUpdateProfile":"user",s=this.occEndpoints.buildUrl(o,{urlParams:{userId:e}});return r=this.converter.convert(r,ie),this.http.patch(s,r).pipe(d(c=>{throw u(c,this.logger)}))}register(e){let r=this.occEndpoints.buildUrl("userRegister"),o=new m(l({},ce));return o=C.createHeader(I,!0,o),e=this.converter.convert(e,se),this.http.post(r,e,{headers:o}).pipe(d(s=>{throw u(s,this.logger)}),this.converter.pipeable(L))}registerGuest(e,r){let o=this.occEndpoints.buildUrl("userRegister"),s=new m(l({},F));s=C.createHeader(I,!0,s);let c=new P().set("guid",e).set("password",r);return this.http.post(o,c,{headers:s}).pipe(d(a=>{throw u(a,this.logger)}),this.converter.pipeable(L))}requestForgotPasswordEmail(e){let r=this.occEndpoints.buildUrl("userForgotPassword"),o=new P().set("userId",e),s=new m(l({},F));return s=C.createHeader(I,!0,s),this.http.post(r,o,{headers:s}).pipe(d(c=>{throw u(c,this.logger)}))}resetPassword(e,r){let o=this.occEndpoints.buildUrl("userResetPassword"),s=new m(l({},ce));return s=C.createHeader(I,!0,s),this.http.post(o,{token:e,newPassword:r},{headers:s}).pipe(d(c=>{throw u(c,this.logger)}))}updateEmail(e,r,o){let s=this.occEndpoints.buildUrl("userUpdateLoginId",{urlParams:{userId:e}}),c=new P().set("password",r).set("newLogin",o),a=new m(l({},F));return this.http.put(s,c,{headers:a}).pipe(d(h=>{throw u(h,this.logger)}))}updatePassword(e,r,o){let s=this.occEndpoints.buildUrl("userUpdatePassword",{urlParams:{userId:e}}),c=new P().set("old",r).set("new",o),a=new m(l({},F));return this.http.put(s,c,{headers:a}).pipe(d(h=>{throw u(h,this.logger)}))}close(e){let r=this.occEndpoints.isConfigured("userCloseAccount")?"userCloseAccount":"user",o=this.occEndpoints.buildUrl(r,{urlParams:{userId:e}});return this.http.delete(o).pipe(d(s=>{throw u(s,this.logger)}))}loadTitles(){let e=this.occEndpoints.buildUrl("titles");return this.http.get(e).pipe(d(r=>{throw u(r,this.logger)}),y(r=>r.titles??[]),this.converter.pipeableMany(oe))}};t.\u0275fac=function(r){return new(r||t)(n(x),n(q),n(z))},t.\u0275prov=p({token:t,factory:t.\u0275fac});let i=t;return i})(),ae=(()=>{let t=class t{};t.\u0275fac=function(r){return new(r||t)},t.\u0275mod=v({type:t}),t.\u0275inj=f({providers:[O(he),{provide:U,useClass:le}]});let i=t;return i})();var Oe=(()=>{let t=class t{};t.\u0275fac=function(r){return new(r||t)},t.\u0275mod=v({type:t}),t.\u0275inj=f({imports:[ne,ae,X]});let i=t;return i})();export{Oe as UserProfileModule};
