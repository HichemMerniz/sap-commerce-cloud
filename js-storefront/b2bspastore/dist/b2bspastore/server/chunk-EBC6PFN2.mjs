import './polyfills.server.mjs';
import{E as c,dc as i,xc as f}from"./chunk-ICSRVU46.mjs";import{Ea as n,Fa as d,Ra as a}from"./chunk-JSDTXUAI.mjs";var u="userProfile",r="userProfileCore",p=(()=>{let e=class e{};e.\u0275fac=function(o){return new(o||e)},e.\u0275prov=n({token:e,factory:()=>i({facade:e,feature:r,methods:["get","update","close","getTitles"]}),providedIn:"root"});let t=e;return t})();function l(){return{featureModules:{[u]:{cmsComponents:["RegisterCustomerComponent","UpdateProfileComponent","UpdateEmailComponent","UpdatePasswordComponent","ForgotPasswordComponent","ResetPasswordComponent","CloseAccountComponent","AccountAddressBookComponent"]},[r]:u}}}var g=(()=>{let e=class e{};e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=a({type:e}),e.\u0275inj=d({providers:[c(l),{provide:f,useExisting:p}]});let t=e;return t})(),y=(()=>{let e=class e{};e.\u0275fac=function(o){return new(o||e)},e.\u0275prov=n({token:e,factory:()=>i({facade:e,feature:r,methods:["update"]}),providedIn:"root"});let t=e;return t})(),C=(()=>{let e=class e{};e.\u0275fac=function(o){return new(o||e)},e.\u0275prov=n({token:e,factory:()=>i({facade:e,feature:r,methods:["update","reset","requestForgotPasswordEmail"]}),providedIn:"root"});let t=e;return t})(),h=(()=>{let e=class e{};e.\u0275fac=function(o){return new(o||e)},e.\u0275prov=n({token:e,factory:()=>i({facade:e,feature:r,methods:["register","registerGuest","getTitles"]}),providedIn:"root"});let t=e;return t})();export{u as a,p as b,g as c,y as d,C as e,h as f};
