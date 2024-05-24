import {
  CxEvent,
  EventService,
  GlobalMessageService,
  GlobalMessageType,
  Injectable,
  LogoutEvent,
  NgModule,
  Subscription,
  facadeFactory,
  provideDefaultConfigFactory,
  setClassMetadata,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵinject
} from "./chunk-RJVZANIA.js";

// node_modules/@spartacus/user/fesm2022/spartacus-user-account-root.mjs
var _UserAccountEventListener = class _UserAccountEventListener {
  constructor(eventService, globalMessageService) {
    this.eventService = eventService;
    this.globalMessageService = globalMessageService;
    this.subscriptions = new Subscription();
    this.onAuth();
  }
  /**
   * Registers events for the auth events.
   */
  onAuth() {
    this.subscriptions.add(this.eventService.get(LogoutEvent).subscribe(() => {
      this.globalMessageService.add({
        key: "authMessages.signedOutSuccessfully"
      }, GlobalMessageType.MSG_TYPE_CONFIRMATION);
    }));
  }
  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }
};
_UserAccountEventListener.\u0275fac = function UserAccountEventListener_Factory(t) {
  return new (t || _UserAccountEventListener)(\u0275\u0275inject(EventService), \u0275\u0275inject(GlobalMessageService));
};
_UserAccountEventListener.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
  token: _UserAccountEventListener,
  factory: _UserAccountEventListener.\u0275fac,
  providedIn: "root"
});
var UserAccountEventListener = _UserAccountEventListener;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UserAccountEventListener, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: EventService
  }, {
    type: GlobalMessageService
  }], null);
})();
var _UserAccountEventModule = class _UserAccountEventModule {
  constructor(_userAccountEventListener) {
  }
};
_UserAccountEventModule.\u0275fac = function UserAccountEventModule_Factory(t) {
  return new (t || _UserAccountEventModule)(\u0275\u0275inject(UserAccountEventListener));
};
_UserAccountEventModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
  type: _UserAccountEventModule
});
_UserAccountEventModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({});
var UserAccountEventModule = _UserAccountEventModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UserAccountEventModule, [{
    type: NgModule,
    args: [{}]
  }], () => [{
    type: UserAccountEventListener
  }], null);
})();
var USER_ACCOUNT_FEATURE = "userAccount";
var USER_ACCOUNT_CORE_FEATURE = "userAccountCore";
function defaultUserAccountComponentsConfig() {
  const config = {
    featureModules: {
      [USER_ACCOUNT_FEATURE]: {
        cmsComponents: ["LoginComponent", "ReturningCustomerLoginComponent", "ReturningCustomerRegisterComponent", "MyAccountViewUserComponent"]
      },
      // by default core is bundled together with components
      [USER_ACCOUNT_CORE_FEATURE]: USER_ACCOUNT_FEATURE
    }
  };
  return config;
}
var _UserAccountRootModule = class _UserAccountRootModule {
};
_UserAccountRootModule.\u0275fac = function UserAccountRootModule_Factory(t) {
  return new (t || _UserAccountRootModule)();
};
_UserAccountRootModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
  type: _UserAccountRootModule
});
_UserAccountRootModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
  providers: [provideDefaultConfigFactory(defaultUserAccountComponentsConfig)],
  imports: [UserAccountEventModule]
});
var UserAccountRootModule = _UserAccountRootModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UserAccountRootModule, [{
    type: NgModule,
    args: [{
      imports: [UserAccountEventModule],
      providers: [provideDefaultConfigFactory(defaultUserAccountComponentsConfig)]
    }]
  }], null, null);
})();
var _UserAccountFacade = class _UserAccountFacade {
};
_UserAccountFacade.\u0275fac = function UserAccountFacade_Factory(t) {
  return new (t || _UserAccountFacade)();
};
_UserAccountFacade.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
  token: _UserAccountFacade,
  factory: () => (() => facadeFactory({
    facade: _UserAccountFacade,
    feature: USER_ACCOUNT_CORE_FEATURE,
    methods: ["get", "getById"]
  }))(),
  providedIn: "root"
});
var UserAccountFacade = _UserAccountFacade;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UserAccountFacade, [{
    type: Injectable,
    args: [{
      providedIn: "root",
      useFactory: () => facadeFactory({
        facade: UserAccountFacade,
        feature: USER_ACCOUNT_CORE_FEATURE,
        methods: ["get", "getById"]
      })
    }]
  }], null, null);
})();
var UserAccountEvent = class extends CxEvent {
};
var _UserAccountChangedEvent = class _UserAccountChangedEvent extends UserAccountEvent {
};
_UserAccountChangedEvent.type = "UserAccountChangedEvent";
var UserAccountChangedEvent = _UserAccountChangedEvent;

export {
  USER_ACCOUNT_FEATURE,
  UserAccountRootModule,
  UserAccountFacade,
  UserAccountChangedEvent
};
//# sourceMappingURL=chunk-NWLDJIE7.js.map
