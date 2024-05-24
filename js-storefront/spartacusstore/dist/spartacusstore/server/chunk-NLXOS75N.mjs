import './polyfills.server.mjs';
import {
  UserProfileFacadeTransitionalToken,
  facadeFactory,
  provideDefaultConfigFactory
} from "./chunk-AFAMYKVR.mjs";
import {
  Injectable,
  NgModule,
  setClassMetadata,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule
} from "./chunk-3LP6MEWW.mjs";

// node_modules/@spartacus/user/fesm2022/spartacus-user-profile-root.mjs
var USER_PROFILE_FEATURE = "userProfile";
var USER_PROFILE_CORE_FEATURE = "userProfileCore";
var _UserProfileFacade = class _UserProfileFacade {
};
_UserProfileFacade.\u0275fac = function UserProfileFacade_Factory(t) {
  return new (t || _UserProfileFacade)();
};
_UserProfileFacade.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
  token: _UserProfileFacade,
  factory: () => (() => facadeFactory({
    facade: _UserProfileFacade,
    feature: USER_PROFILE_CORE_FEATURE,
    methods: ["get", "update", "close", "getTitles"]
  }))(),
  providedIn: "root"
});
var UserProfileFacade = _UserProfileFacade;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UserProfileFacade, [{
    type: Injectable,
    args: [{
      providedIn: "root",
      useFactory: () => facadeFactory({
        facade: UserProfileFacade,
        feature: USER_PROFILE_CORE_FEATURE,
        methods: ["get", "update", "close", "getTitles"]
      })
    }]
  }], null, null);
})();
function defaultUserProfileComponentsConfig() {
  const config = {
    featureModules: {
      [USER_PROFILE_FEATURE]: {
        cmsComponents: ["RegisterCustomerComponent", "UpdateProfileComponent", "UpdateEmailComponent", "UpdatePasswordComponent", "ForgotPasswordComponent", "ResetPasswordComponent", "CloseAccountComponent", "AccountAddressBookComponent"]
      },
      // by default core is bundled together with components
      [USER_PROFILE_CORE_FEATURE]: USER_PROFILE_FEATURE
    }
  };
  return config;
}
var _UserProfileRootModule = class _UserProfileRootModule {
};
_UserProfileRootModule.\u0275fac = function UserProfileRootModule_Factory(t) {
  return new (t || _UserProfileRootModule)();
};
_UserProfileRootModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
  type: _UserProfileRootModule
});
_UserProfileRootModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
  providers: [provideDefaultConfigFactory(defaultUserProfileComponentsConfig), {
    provide: UserProfileFacadeTransitionalToken,
    useExisting: UserProfileFacade
  }]
});
var UserProfileRootModule = _UserProfileRootModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UserProfileRootModule, [{
    type: NgModule,
    args: [{
      providers: [provideDefaultConfigFactory(defaultUserProfileComponentsConfig), {
        provide: UserProfileFacadeTransitionalToken,
        useExisting: UserProfileFacade
      }]
    }]
  }], null, null);
})();
var _UserEmailFacade = class _UserEmailFacade {
};
_UserEmailFacade.\u0275fac = function UserEmailFacade_Factory(t) {
  return new (t || _UserEmailFacade)();
};
_UserEmailFacade.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
  token: _UserEmailFacade,
  factory: () => (() => facadeFactory({
    facade: _UserEmailFacade,
    feature: USER_PROFILE_CORE_FEATURE,
    methods: ["update"]
  }))(),
  providedIn: "root"
});
var UserEmailFacade = _UserEmailFacade;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UserEmailFacade, [{
    type: Injectable,
    args: [{
      providedIn: "root",
      useFactory: () => facadeFactory({
        facade: UserEmailFacade,
        feature: USER_PROFILE_CORE_FEATURE,
        methods: ["update"]
      })
    }]
  }], null, null);
})();
var _UserPasswordFacade = class _UserPasswordFacade {
};
_UserPasswordFacade.\u0275fac = function UserPasswordFacade_Factory(t) {
  return new (t || _UserPasswordFacade)();
};
_UserPasswordFacade.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
  token: _UserPasswordFacade,
  factory: () => (() => facadeFactory({
    facade: _UserPasswordFacade,
    feature: USER_PROFILE_CORE_FEATURE,
    methods: ["update", "reset", "requestForgotPasswordEmail"]
  }))(),
  providedIn: "root"
});
var UserPasswordFacade = _UserPasswordFacade;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UserPasswordFacade, [{
    type: Injectable,
    args: [{
      providedIn: "root",
      useFactory: () => facadeFactory({
        facade: UserPasswordFacade,
        feature: USER_PROFILE_CORE_FEATURE,
        methods: ["update", "reset", "requestForgotPasswordEmail"]
      })
    }]
  }], null, null);
})();
var _UserRegisterFacade = class _UserRegisterFacade {
};
_UserRegisterFacade.\u0275fac = function UserRegisterFacade_Factory(t) {
  return new (t || _UserRegisterFacade)();
};
_UserRegisterFacade.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
  token: _UserRegisterFacade,
  factory: () => (() => facadeFactory({
    facade: _UserRegisterFacade,
    feature: USER_PROFILE_CORE_FEATURE,
    methods: ["register", "registerGuest", "getTitles"]
  }))(),
  providedIn: "root"
});
var UserRegisterFacade = _UserRegisterFacade;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UserRegisterFacade, [{
    type: Injectable,
    args: [{
      providedIn: "root",
      useFactory: () => facadeFactory({
        facade: UserRegisterFacade,
        feature: USER_PROFILE_CORE_FEATURE,
        methods: ["register", "registerGuest", "getTitles"]
      })
    }]
  }], null, null);
})();

export {
  USER_PROFILE_FEATURE,
  UserProfileFacade,
  UserProfileRootModule,
  UserEmailFacade,
  UserPasswordFacade,
  UserRegisterFacade
};
//# sourceMappingURL=chunk-NLXOS75N.mjs.map
