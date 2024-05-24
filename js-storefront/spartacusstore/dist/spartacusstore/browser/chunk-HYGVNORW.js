import {
  UserAccountFacade
} from "./chunk-NWLDJIE7.js";
import {
  ICON_TYPE,
  LaunchDialogService,
  PageComponentModule
} from "./chunk-TEI6YMHW.js";
import {
  APP_INITIALIZER,
  AuthHttpHeaderService,
  AuthMultisiteIsolationService,
  AuthRedirectService,
  AuthService,
  AuthStorageService,
  BehaviorSubject,
  CURRENCY_CONTEXT_ID,
  CommonModule,
  Config,
  CurrencyService,
  FeatureModulesService,
  GlobalMessageService,
  GlobalMessageType,
  HTTP_INTERCEPTORS,
  Inject,
  Injectable,
  InterceptorUtil,
  LANGUAGE_CONTEXT_ID,
  LanguageService,
  Location,
  NgModule,
  OAuthLibWrapperService,
  OCC_HTTP_TOKEN,
  OCC_USER_ID_ANONYMOUS,
  OCC_USER_ID_CONSTANTS,
  OCC_USER_ID_CURRENT,
  OccEndpointsService,
  RoutingService,
  SiteContextConfig,
  Store,
  USE_CUSTOMER_SUPPORT_AGENT_TOKEN,
  UserIdService,
  WindowRef,
  __async,
  __spreadValues,
  __superGet,
  authGroup_actions,
  combineLatest,
  concatMap,
  facadeFactory,
  from,
  getContextParameterDefault,
  lastValueFrom,
  map,
  of,
  provideDefaultConfig,
  setClassMetadata,
  switchMap,
  take,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵgetInheritedFactory,
  ɵɵinject
} from "./chunk-RJVZANIA.js";

// node_modules/@spartacus/asm/fesm2022/spartacus-asm-root.mjs
var _AsmConfig = class _AsmConfig {
};
_AsmConfig.\u0275fac = function AsmConfig_Factory(t) {
  return new (t || _AsmConfig)();
};
_AsmConfig.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
  token: _AsmConfig,
  factory: function AsmConfig_Factory(t) {
    let r = null;
    if (t) {
      r = new (t || _AsmConfig)();
    } else {
      r = \u0275\u0275inject(Config);
    }
    return r;
  },
  providedIn: "root"
});
var AsmConfig = _AsmConfig;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AsmConfig, [{
    type: Injectable,
    args: [{
      providedIn: "root",
      useExisting: Config
    }]
  }], null, null);
})();
var ASM_ENABLED_LOCAL_STORAGE_KEY = "asm_enabled";
var _AsmEnablerService = class _AsmEnablerService {
  constructor(location, winRef, launchDialogService, featureModules) {
    this.location = location;
    this.winRef = winRef;
    this.launchDialogService = launchDialogService;
    this.featureModules = featureModules;
  }
  /**
   * Loads the ASM UI if needed. The ASM UI will be added based on the
   * existence of a URL parameter or previous usage given by local storage.
   */
  load() {
    if (this.isEnabled()) {
      this.addUi();
    }
  }
  /**
   * Indicates whether the ASM module is enabled.
   */
  isEnabled() {
    if (this.isLaunched() && !this.isUsedBefore()) {
      if (this.winRef.localStorage) {
        this.winRef.localStorage.setItem(ASM_ENABLED_LOCAL_STORAGE_KEY, "true");
      }
    }
    return this.isLaunched() || this.isUsedBefore() || this.isEmulateInURL();
  }
  /**
   * Indicates whether ASM is launched through the URL,
   * using the asm flag in the URL.
   */
  isLaunched() {
    const params = this.location.path().split("?")[1];
    return !!params && params.split("&").includes("asm=true");
  }
  /**
   * check whether try to emulate customer from deeplink
   * */
  isEmulateInURL() {
    return this.location.path().indexOf("assisted-service/emulate?") > 0;
  }
  /**
   * Evaluates local storage where we persist the usage of ASM.
   */
  isUsedBefore() {
    if (this.winRef.localStorage) {
      return this.winRef.localStorage.getItem(ASM_ENABLED_LOCAL_STORAGE_KEY) === "true";
    } else {
      return false;
    }
  }
  /**
   * Adds the ASM UI by using the `cx-storefront` outlet.
   */
  addUi() {
    this.featureModules.resolveFeature("asm").subscribe(() => this.launchDialogService.launch(
      "ASM"
      /* LAUNCH_CALLER.ASM */
    ));
  }
};
_AsmEnablerService.\u0275fac = function AsmEnablerService_Factory(t) {
  return new (t || _AsmEnablerService)(\u0275\u0275inject(Location), \u0275\u0275inject(WindowRef), \u0275\u0275inject(LaunchDialogService), \u0275\u0275inject(FeatureModulesService));
};
_AsmEnablerService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
  token: _AsmEnablerService,
  factory: _AsmEnablerService.\u0275fac,
  providedIn: "root"
});
var AsmEnablerService = _AsmEnablerService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AsmEnablerService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: Location
  }, {
    type: WindowRef
  }, {
    type: LaunchDialogService
  }, {
    type: FeatureModulesService
  }], null);
})();
var _AsmLoaderModule = class _AsmLoaderModule {
};
_AsmLoaderModule.\u0275fac = function AsmLoaderModule_Factory(t) {
  return new (t || _AsmLoaderModule)();
};
_AsmLoaderModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
  type: _AsmLoaderModule
});
_AsmLoaderModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
  providers: [{
    provide: APP_INITIALIZER,
    useFactory: asmFactory,
    deps: [AsmEnablerService],
    multi: true
  }],
  imports: [CommonModule, PageComponentModule]
});
var AsmLoaderModule = _AsmLoaderModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AsmLoaderModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, PageComponentModule],
      providers: [{
        provide: APP_INITIALIZER,
        useFactory: asmFactory,
        deps: [AsmEnablerService],
        multi: true
      }]
    }]
  }], null, null);
})();
function asmFactory(asmEnablerService) {
  const isReady = () => {
    asmEnablerService.load();
  };
  return isReady;
}
var CustomerListColumnActionType;
(function(CustomerListColumnActionType2) {
  CustomerListColumnActionType2["START_SESSION"] = "START_SESSION";
  CustomerListColumnActionType2["ORDER_HISTORY"] = "ORDER_HISTORY";
  CustomerListColumnActionType2["ACTIVE_CART"] = "ACTIVE_CART";
})(CustomerListColumnActionType || (CustomerListColumnActionType = {}));
var defaultAsmConfig = {
  asm: {
    agentSessionTimer: {
      startingDelayInSeconds: 600
    },
    customerSearch: {
      maxResults: 20
    },
    customerList: {
      pageSize: 5,
      showAvatar: true,
      columns: [{
        headerLocalizationKey: "asm.customerList.tableHeader.customer",
        renderer: (customer) => {
          return customer?.name ?? "";
        },
        actionType: CustomerListColumnActionType.START_SESSION
      }, {
        headerLocalizationKey: "asm.customerList.tableHeader.email",
        renderer: (customer) => {
          return customer?.uid ?? "";
        }
      }, {
        headerLocalizationKey: "asm.customerList.tableHeader.phone",
        renderer: (customer) => {
          return customer?.defaultAddress?.phone ?? "";
        }
      }, {
        headerLocalizationKey: "asm.customerList.tableHeader.account",
        renderer: (customer) => {
          return customer?.orgUnit?.name ?? "";
        }
      }, {
        headerLocalizationKey: "asm.customerList.tableHeader.cart",
        icon: {
          symbol: ICON_TYPE.CART,
          captionLocalizationKey: "asm.customerList.tableHeader.cart"
        },
        actionType: CustomerListColumnActionType.ACTIVE_CART
      }, {
        headerLocalizationKey: "asm.customerList.tableHeader.order",
        icon: {
          symbol: ICON_TYPE.ORDER,
          captionLocalizationKey: "asm.customerList.tableHeader.order"
        },
        actionType: CustomerListColumnActionType.ORDER_HISTORY
      }]
    },
    userIdHttpHeader: {
      enable: true
    }
  }
};
var _UserIdHttpHeaderInterceptor = class _UserIdHttpHeaderInterceptor {
  constructor(config, userIdService, userIdConstants) {
    this.config = config;
    this.userIdService = userIdService;
    this.userIdConstants = userIdConstants;
    this.userIdHeader = "sap-commerce-cloud-user-id";
    this.uniqueUserIdConstants = new Set(Object.values(userIdConstants));
  }
  intercept(httpRequest, next) {
    if (!this.config.asm?.userIdHttpHeader?.enable) {
      return next.handle(httpRequest);
    }
    const asmContext = httpRequest.context.get(OCC_HTTP_TOKEN);
    let userIdObservable;
    if (typeof asmContext.sendUserIdAsHeader === "string") {
      userIdObservable = of(asmContext.sendUserIdAsHeader);
    } else if (asmContext.sendUserIdAsHeader) {
      userIdObservable = this.userIdService.takeUserId().pipe(map((userId) => this.uniqueUserIdConstants.has(userId) ? void 0 : userId));
    } else {
      return next.handle(httpRequest);
    }
    return userIdObservable.pipe(concatMap((userId) => {
      if (userId) {
        const request = httpRequest.clone({
          headers: httpRequest.headers.set(this.userIdHeader, userId)
        });
        return next.handle(request);
      } else {
        return next.handle(httpRequest);
      }
    }));
  }
};
_UserIdHttpHeaderInterceptor.\u0275fac = function UserIdHttpHeaderInterceptor_Factory(t) {
  return new (t || _UserIdHttpHeaderInterceptor)(\u0275\u0275inject(Config), \u0275\u0275inject(UserIdService), \u0275\u0275inject(OCC_USER_ID_CONSTANTS));
};
_UserIdHttpHeaderInterceptor.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
  token: _UserIdHttpHeaderInterceptor,
  factory: _UserIdHttpHeaderInterceptor.\u0275fac,
  providedIn: "root"
});
var UserIdHttpHeaderInterceptor = _UserIdHttpHeaderInterceptor;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UserIdHttpHeaderInterceptor, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: Config
  }, {
    type: UserIdService
  }, {
    type: void 0,
    decorators: [{
      type: Inject,
      args: [OCC_USER_ID_CONSTANTS]
    }]
  }], null);
})();
var TokenTarget;
(function(TokenTarget2) {
  TokenTarget2["CSAgent"] = "CSAgent";
  TokenTarget2["User"] = "User";
})(TokenTarget || (TokenTarget = {}));
var _AsmAuthStorageService = class _AsmAuthStorageService extends AuthStorageService {
  constructor() {
    super(...arguments);
    this._tokenTarget$ = new BehaviorSubject(TokenTarget.User);
  }
  /**
   * Get target user for current auth token.
   *
   * @return observable with TokenTarget
   */
  getTokenTarget() {
    return this._tokenTarget$;
  }
  /**
   * Set new token target.
   *
   * @param tokenTarget
   */
  setTokenTarget(tokenTarget) {
    this._tokenTarget$.next(tokenTarget);
  }
  /**
   * Get token for previously user session, when it was interrupted by CS agent login.
   *
   * @return previously logged in user token.
   */
  getEmulatedUserToken() {
    return this.emulatedUserToken;
  }
  /**
   * Save user token on CS agent login.
   *
   * @param token
   */
  setEmulatedUserToken(token) {
    this.emulatedUserToken = token;
  }
  /**
   * Change token target to CS Agent.
   */
  switchTokenTargetToCSAgent() {
    this._tokenTarget$.next(TokenTarget.CSAgent);
  }
  /**
   * Change token target to user.
   */
  switchTokenTargetToUser() {
    this._tokenTarget$.next(TokenTarget.User);
  }
  /**
   * When we start emulation from the UI (not by ASM login) we can't restore user session on cs agent logout.
   * Only available solution is to drop session we could restore, to avoid account hijack.
   */
  clearEmulatedUserToken() {
    this.emulatedUserToken = void 0;
  }
};
_AsmAuthStorageService.\u0275fac = /* @__PURE__ */ (() => {
  let \u0275AsmAuthStorageService_BaseFactory;
  return function AsmAuthStorageService_Factory(t) {
    return (\u0275AsmAuthStorageService_BaseFactory || (\u0275AsmAuthStorageService_BaseFactory = \u0275\u0275getInheritedFactory(_AsmAuthStorageService)))(t || _AsmAuthStorageService);
  };
})();
_AsmAuthStorageService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
  token: _AsmAuthStorageService,
  factory: _AsmAuthStorageService.\u0275fac,
  providedIn: "root"
});
var AsmAuthStorageService = _AsmAuthStorageService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AsmAuthStorageService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var _CsAgentAuthService = class _CsAgentAuthService {
  constructor(authService, authStorageService, userIdService, oAuthLibWrapperService, store, userAccountFacade) {
    this.authService = authService;
    this.authStorageService = authStorageService;
    this.userIdService = userIdService;
    this.oAuthLibWrapperService = oAuthLibWrapperService;
    this.store = store;
    this.userAccountFacade = userAccountFacade;
  }
  /**
   * Loads access token for a customer support agent.
   * @param userId
   * @param password
   */
  authorizeCustomerSupportAgent(userId, password) {
    return __async(this, null, function* () {
      let userToken;
      let customerId;
      this.userAccountFacade.get().subscribe((user) => customerId = user?.customerId).unsubscribe();
      this.authStorageService.getToken().subscribe((token) => userToken = token).unsubscribe();
      this.authStorageService.switchTokenTargetToCSAgent();
      try {
        yield this.oAuthLibWrapperService.authorizeWithPasswordFlow(userId, password);
        this.store.dispatch(new authGroup_actions.Logout());
        if (customerId !== void 0 && userToken !== void 0) {
          this.userIdService.setUserId(customerId);
          this.authStorageService.setEmulatedUserToken(userToken);
          this.store.dispatch(new authGroup_actions.Login());
        } else {
          this.userIdService.setUserId(OCC_USER_ID_ANONYMOUS);
          this.authStorageService.clearEmulatedUserToken();
        }
      } catch {
        this.authStorageService.switchTokenTargetToUser();
      }
    });
  }
  /**
   * Starts an ASM customer emulation session.
   * A customer emulation session is stopped by calling logout().
   * @param customerId
   */
  startCustomerEmulationSession(customerId) {
    this.authStorageService.clearEmulatedUserToken();
    this.store.dispatch(new authGroup_actions.Logout());
    this.userIdService.setUserId(customerId);
    this.store.dispatch(new authGroup_actions.Login());
  }
  /**
   * Check if CS agent is currently logged in.
   *
   * @returns observable emitting true when CS agent is logged in or false when not.
   */
  isCustomerSupportAgentLoggedIn() {
    return combineLatest([this.authStorageService.getToken(), this.authStorageService.getTokenTarget()]).pipe(map(([token, tokenTarget]) => Boolean(token?.access_token && tokenTarget === TokenTarget.CSAgent)));
  }
  /**
   * Utility function to determine if customer is emulated.
   *
   * @returns observable emitting true when there is active emulation session or false when not.
   */
  isCustomerEmulated() {
    return this.userIdService.isEmulated();
  }
  /**
   * Returns the customer support agent's token loading status
   */
  getCustomerSupportAgentTokenLoading() {
    return of(false);
  }
  /**
   * Logout a customer support agent.
   */
  logoutCustomerSupportAgent() {
    return __async(this, null, function* () {
      const emulatedToken = this.authStorageService.getEmulatedUserToken();
      let isCustomerEmulated;
      this.userIdService.isEmulated().subscribe((emulated) => isCustomerEmulated = emulated).unsubscribe();
      yield this.oAuthLibWrapperService.revokeAndLogout();
      this.store.dispatch({
        type: "[Auth] Logout Customer Support Agent"
      });
      this.authStorageService.setTokenTarget(TokenTarget.User);
      if (isCustomerEmulated && emulatedToken) {
        this.store.dispatch(new authGroup_actions.Logout());
        this.authStorageService.setToken(emulatedToken);
        this.userIdService.setUserId(OCC_USER_ID_CURRENT);
        this.authStorageService.clearEmulatedUserToken();
        this.store.dispatch(new authGroup_actions.Login());
      } else {
        this.authService.logout();
      }
    });
  }
};
_CsAgentAuthService.\u0275fac = function CsAgentAuthService_Factory(t) {
  return new (t || _CsAgentAuthService)(\u0275\u0275inject(AuthService), \u0275\u0275inject(AsmAuthStorageService), \u0275\u0275inject(UserIdService), \u0275\u0275inject(OAuthLibWrapperService), \u0275\u0275inject(Store), \u0275\u0275inject(UserAccountFacade));
};
_CsAgentAuthService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
  token: _CsAgentAuthService,
  factory: _CsAgentAuthService.\u0275fac,
  providedIn: "root"
});
var CsAgentAuthService = _CsAgentAuthService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CsAgentAuthService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: AuthService
  }, {
    type: AsmAuthStorageService
  }, {
    type: UserIdService
  }, {
    type: OAuthLibWrapperService
  }, {
    type: Store
  }, {
    type: UserAccountFacade
  }], null);
})();
var _AsmAuthHttpHeaderService = class _AsmAuthHttpHeaderService extends AuthHttpHeaderService {
  constructor(authService, authStorageService, csAgentAuthService, oAuthLibWrapperService, routingService, globalMessageService, occEndpointsService, authRedirectService) {
    super(authService, authStorageService, oAuthLibWrapperService, routingService, occEndpointsService, globalMessageService, authRedirectService);
    this.authService = authService;
    this.authStorageService = authStorageService;
    this.csAgentAuthService = csAgentAuthService;
    this.oAuthLibWrapperService = oAuthLibWrapperService;
    this.routingService = routingService;
    this.globalMessageService = globalMessageService;
    this.occEndpointsService = occEndpointsService;
    this.authRedirectService = authRedirectService;
  }
  /**
   * Checks if the authorization header should be added to the request
   *
   *  @override
   */
  shouldAddAuthorizationHeader(request) {
    return super.shouldAddAuthorizationHeader(request) || this.isCSAgentTokenRequest(request);
  }
  /**
   * @override
   *
   * Checks if particular request should be handled by this service.
   */
  shouldCatchError(request) {
    return super.shouldCatchError(request) || this.isCSAgentTokenRequest(request);
  }
  /**
   * @override
   *
   * Adds `Authorization` header to occ and CS agent requests.
   * For CS agent requests also removes the `cx-use-csagent-token` header (to avoid problems with CORS).
   */
  alterRequest(request, token) {
    const hasAuthorizationHeader = !!this.getAuthorizationHeader(request);
    const isCSAgentRequest = this.isCSAgentTokenRequest(request);
    let req = super.alterRequest(request, token);
    if (!hasAuthorizationHeader && isCSAgentRequest) {
      req = request.clone({
        setHeaders: __spreadValues({}, this.createAuthorizationHeader(token))
      });
      return InterceptorUtil.removeHeader(USE_CUSTOMER_SUPPORT_AGENT_TOKEN, req);
    }
    return req;
  }
  isCSAgentTokenRequest(request) {
    const isRequestWithCSAgentToken = InterceptorUtil.getInterceptorParam(USE_CUSTOMER_SUPPORT_AGENT_TOKEN, request.headers);
    return Boolean(isRequestWithCSAgentToken);
  }
  /**
   * @override
   *
   * On backend errors indicating expired `refresh_token` we need to logout
   * currently logged in user and CS agent.
   */
  handleExpiredRefreshToken() {
    this.csAgentAuthService.isCustomerSupportAgentLoggedIn().pipe(take(1)).subscribe((csAgentLoggedIn) => {
      if (csAgentLoggedIn) {
        this.authService.setLogoutProgress(true);
        this.csAgentAuthService.logoutCustomerSupportAgent();
        this.globalMessageService.add({
          key: "asm.csagentTokenExpired"
        }, GlobalMessageType.MSG_TYPE_ERROR);
      } else {
        super.handleExpiredRefreshToken();
      }
    });
  }
};
_AsmAuthHttpHeaderService.\u0275fac = function AsmAuthHttpHeaderService_Factory(t) {
  return new (t || _AsmAuthHttpHeaderService)(\u0275\u0275inject(AuthService), \u0275\u0275inject(AuthStorageService), \u0275\u0275inject(CsAgentAuthService), \u0275\u0275inject(OAuthLibWrapperService), \u0275\u0275inject(RoutingService), \u0275\u0275inject(GlobalMessageService), \u0275\u0275inject(OccEndpointsService), \u0275\u0275inject(AuthRedirectService));
};
_AsmAuthHttpHeaderService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
  token: _AsmAuthHttpHeaderService,
  factory: _AsmAuthHttpHeaderService.\u0275fac,
  providedIn: "root"
});
var AsmAuthHttpHeaderService = _AsmAuthHttpHeaderService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AsmAuthHttpHeaderService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: AuthService
  }, {
    type: AuthStorageService
  }, {
    type: CsAgentAuthService
  }, {
    type: OAuthLibWrapperService
  }, {
    type: RoutingService
  }, {
    type: GlobalMessageService
  }, {
    type: OccEndpointsService
  }, {
    type: AuthRedirectService
  }], null);
})();
var _AsmAuthService = class _AsmAuthService extends AuthService {
  constructor(store, userIdService, oAuthLibWrapperService, authStorageService, authRedirectService, globalMessageService, routingService, authMultisiteIsolationService) {
    super(store, userIdService, oAuthLibWrapperService, authStorageService, authRedirectService, routingService, authMultisiteIsolationService);
    this.store = store;
    this.userIdService = userIdService;
    this.oAuthLibWrapperService = oAuthLibWrapperService;
    this.authStorageService = authStorageService;
    this.authRedirectService = authRedirectService;
    this.globalMessageService = globalMessageService;
    this.routingService = routingService;
    this.authMultisiteIsolationService = authMultisiteIsolationService;
  }
  canUserLogin() {
    let tokenTarget;
    let token;
    this.authStorageService.getToken().subscribe((tok) => token = tok).unsubscribe();
    this.authStorageService.getTokenTarget().subscribe((tokTarget) => tokenTarget = tokTarget).unsubscribe();
    return !(Boolean(token?.access_token) && tokenTarget === TokenTarget.CSAgent);
  }
  warnAboutLoggedCSAgent() {
    this.globalMessageService.add({
      key: "asm.auth.agentLoggedInError"
    }, GlobalMessageType.MSG_TYPE_ERROR);
  }
  /**
   * Loads a new user token with Resource Owner Password Flow when CS agent is not logged in.
   * @param userId
   * @param password
   */
  loginWithCredentials(userId, password) {
    return __async(this, null, function* () {
      if (this.canUserLogin()) {
        yield __superGet(_AsmAuthService.prototype, this, "loginWithCredentials").call(this, userId, password);
      } else {
        this.warnAboutLoggedCSAgent();
      }
    });
  }
  /**
   * Initialize Implicit/Authorization Code flow by redirecting to OAuth server when CS agent is not logged in.
   */
  loginWithRedirect() {
    if (this.canUserLogin()) {
      super.loginWithRedirect();
      return true;
    } else {
      this.warnAboutLoggedCSAgent();
      return false;
    }
  }
  /**
   * Revokes tokens and clears state for logged user (tokens, userId).
   * To perform logout it is best to use `logout` method. Use this method with caution.
   */
  coreLogout() {
    return lastValueFrom(this.userIdService.isEmulated().pipe(take(1), switchMap((isEmulated) => {
      if (isEmulated) {
        this.authStorageService.clearEmulatedUserToken();
        this.userIdService.clearUserId();
        this.store.dispatch(new authGroup_actions.Logout());
        return of(true);
      } else {
        return from(super.coreLogout());
      }
    })));
  }
  /**
   * Returns `true` if user is logged in or being emulated.
   */
  isUserLoggedIn() {
    return combineLatest([this.authStorageService.getToken(), this.userIdService.isEmulated(), this.authStorageService.getTokenTarget()]).pipe(map(([token, isEmulated, tokenTarget]) => Boolean(token?.access_token) && (tokenTarget === TokenTarget.User || tokenTarget === TokenTarget.CSAgent && isEmulated)));
  }
};
_AsmAuthService.\u0275fac = function AsmAuthService_Factory(t) {
  return new (t || _AsmAuthService)(\u0275\u0275inject(Store), \u0275\u0275inject(UserIdService), \u0275\u0275inject(OAuthLibWrapperService), \u0275\u0275inject(AsmAuthStorageService), \u0275\u0275inject(AuthRedirectService), \u0275\u0275inject(GlobalMessageService), \u0275\u0275inject(RoutingService), \u0275\u0275inject(AuthMultisiteIsolationService));
};
_AsmAuthService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
  token: _AsmAuthService,
  factory: _AsmAuthService.\u0275fac,
  providedIn: "root"
});
var AsmAuthService = _AsmAuthService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AsmAuthService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: Store
  }, {
    type: UserIdService
  }, {
    type: OAuthLibWrapperService
  }, {
    type: AsmAuthStorageService
  }, {
    type: AuthRedirectService
  }, {
    type: GlobalMessageService
  }, {
    type: RoutingService
  }, {
    type: AuthMultisiteIsolationService
  }], null);
})();
var _AsmRootModule = class _AsmRootModule {
};
_AsmRootModule.\u0275fac = function AsmRootModule_Factory(t) {
  return new (t || _AsmRootModule)();
};
_AsmRootModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
  type: _AsmRootModule
});
_AsmRootModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
  providers: [provideDefaultConfig(defaultAsmConfig), {
    provide: AuthStorageService,
    useExisting: AsmAuthStorageService
  }, {
    provide: AuthService,
    useExisting: AsmAuthService
  }, {
    provide: AuthHttpHeaderService,
    useExisting: AsmAuthHttpHeaderService
  }, {
    provide: HTTP_INTERCEPTORS,
    useExisting: UserIdHttpHeaderInterceptor,
    multi: true
  }],
  imports: [AsmLoaderModule]
});
var AsmRootModule = _AsmRootModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AsmRootModule, [{
    type: NgModule,
    args: [{
      imports: [AsmLoaderModule],
      providers: [provideDefaultConfig(defaultAsmConfig), {
        provide: AuthStorageService,
        useExisting: AsmAuthStorageService
      }, {
        provide: AuthService,
        useExisting: AsmAuthService
      }, {
        provide: AuthHttpHeaderService,
        useExisting: AsmAuthHttpHeaderService
      }, {
        provide: HTTP_INTERCEPTORS,
        useExisting: UserIdHttpHeaderInterceptor,
        multi: true
      }]
    }]
  }], null, null);
})();
var ASM_FEATURE = "asm";
var _AsmBindCartFacade = class _AsmBindCartFacade {
};
_AsmBindCartFacade.\u0275fac = function AsmBindCartFacade_Factory(t) {
  return new (t || _AsmBindCartFacade)();
};
_AsmBindCartFacade.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
  token: _AsmBindCartFacade,
  factory: () => (() => facadeFactory({
    facade: _AsmBindCartFacade,
    feature: ASM_FEATURE,
    methods: ["bindCart"]
  }))(),
  providedIn: "root"
});
var AsmBindCartFacade = _AsmBindCartFacade;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AsmBindCartFacade, [{
    type: Injectable,
    args: [{
      providedIn: "root",
      useFactory: () => facadeFactory({
        facade: AsmBindCartFacade,
        feature: ASM_FEATURE,
        methods: ["bindCart"]
      })
    }]
  }], null, null);
})();
var _AsmCreateCustomerFacade = class _AsmCreateCustomerFacade {
};
_AsmCreateCustomerFacade.\u0275fac = function AsmCreateCustomerFacade_Factory(t) {
  return new (t || _AsmCreateCustomerFacade)();
};
_AsmCreateCustomerFacade.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
  token: _AsmCreateCustomerFacade,
  factory: () => (() => facadeFactory({
    facade: _AsmCreateCustomerFacade,
    feature: ASM_FEATURE,
    methods: ["createCustomer"]
  }))(),
  providedIn: "root"
});
var AsmCreateCustomerFacade = _AsmCreateCustomerFacade;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AsmCreateCustomerFacade, [{
    type: Injectable,
    args: [{
      providedIn: "root",
      useFactory: () => facadeFactory({
        facade: AsmCreateCustomerFacade,
        feature: ASM_FEATURE,
        methods: ["createCustomer"]
      })
    }]
  }], null, null);
})();
var _AsmCustomerListFacade = class _AsmCustomerListFacade {
};
_AsmCustomerListFacade.\u0275fac = function AsmCustomerListFacade_Factory(t) {
  return new (t || _AsmCustomerListFacade)();
};
_AsmCustomerListFacade.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
  token: _AsmCustomerListFacade,
  factory: () => (() => facadeFactory({
    facade: _AsmCustomerListFacade,
    feature: ASM_FEATURE,
    methods: ["getCustomerLists", "getCustomerListsState", "customerListCustomersSearch", "getCustomerListCustomersSearchResults", "getCustomerListCustomersSearchResultsLoading", "customerListCustomersSearchReset", "getCustomerListCustomersSearchResultsError"]
  }))(),
  providedIn: "root"
});
var AsmCustomerListFacade = _AsmCustomerListFacade;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AsmCustomerListFacade, [{
    type: Injectable,
    args: [{
      providedIn: "root",
      useFactory: () => facadeFactory({
        facade: AsmCustomerListFacade,
        feature: ASM_FEATURE,
        methods: ["getCustomerLists", "getCustomerListsState", "customerListCustomersSearch", "getCustomerListCustomersSearchResults", "getCustomerListCustomersSearchResultsLoading", "customerListCustomersSearchReset", "getCustomerListCustomersSearchResultsError"]
      })
    }]
  }], null, null);
})();
var _AsmDeepLinkService = class _AsmDeepLinkService {
  constructor(routingService, winRef, asmEnablerService) {
    this.routingService = routingService;
    this.winRef = winRef;
    this.asmEnablerService = asmEnablerService;
    this.searchParams = new URLSearchParams(this.winRef?.location?.search);
  }
  /**
   * check whether try to emulate customer from deeplink
   */
  isEmulateInURL() {
    return this.asmEnablerService?.isEmulateInURL() || false;
  }
  /**
   * Returns a deep link parameter value if it is in the url.
   */
  getSearchParameter(key) {
    return this.searchParams.get(key) ?? void 0;
  }
  /**
   * Handles the navigation based on deep link parameters in the URL
   * or passed parameters.
   */
  handleNavigation(parameters = this.getParamsInUrl()) {
    if (parameters.cartType === "active") {
      this.routingService.go({
        cxRoute: "cart"
      });
    } else if (parameters.cartType === "saved" && parameters.cartId) {
      this.routingService.go("my-account/saved-cart/" + parameters.cartId);
    } else if (parameters.orderId) {
      this.routingService.go({
        cxRoute: "orderDetails",
        params: {
          code: parameters.orderId
        }
      });
    } else if (parameters.ticketId) {
      this.routingService.go({
        cxRoute: "supportTicketDetails",
        params: {
          ticketCode: parameters.ticketId
        }
      });
    }
  }
  /**
   * Returns valid deep link parameters in the url.
   */
  getParamsInUrl() {
    const params = {
      customerId: this.getSearchParameter("customerId"),
      orderId: this.getSearchParameter("orderId"),
      ticketId: this.getSearchParameter("ticketId"),
      cartId: this.getSearchParameter("cartId"),
      cartType: this.getSearchParameter("cartType")
    };
    return Object.fromEntries(Object.entries(params).filter(([_, v]) => !!v));
  }
};
_AsmDeepLinkService.\u0275fac = function AsmDeepLinkService_Factory(t) {
  return new (t || _AsmDeepLinkService)(\u0275\u0275inject(RoutingService), \u0275\u0275inject(WindowRef), \u0275\u0275inject(AsmEnablerService));
};
_AsmDeepLinkService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
  token: _AsmDeepLinkService,
  factory: _AsmDeepLinkService.\u0275fac,
  providedIn: "root"
});
var AsmDeepLinkService = _AsmDeepLinkService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AsmDeepLinkService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: RoutingService
  }, {
    type: WindowRef
  }, {
    type: AsmEnablerService
  }], null);
})();

// node_modules/@spartacus/asm/fesm2022/spartacus-asm-customer-360-root.mjs
var ASM_CUSTOMER_360_FEATURE = "asmCustomer360";
var ASM_CUSTOMER_360_CORE_FEATURE = "asmCustomer360Core";
var _SiteContextInterceptor = class _SiteContextInterceptor {
  constructor(languageService, currencyService, occEndpoints, config) {
    this.languageService = languageService;
    this.currencyService = currencyService;
    this.occEndpoints = occEndpoints;
    this.config = config;
    this.activeLang = getContextParameterDefault(this.config, LANGUAGE_CONTEXT_ID);
    this.activeCurr = getContextParameterDefault(this.config, CURRENCY_CONTEXT_ID);
    this.languageService.getActive().subscribe((data) => this.activeLang = data);
    this.currencyService.getActive().subscribe((data) => {
      this.activeCurr = data;
    });
  }
  intercept(request, next) {
    if (request.url.includes(this.occEndpoints.getBaseUrl({
      prefix: false,
      baseSite: false
    })) && request.url.includes("/assistedservicewebservices/")) {
      request = request.clone({
        setParams: {
          lang: this.activeLang ?? "",
          curr: this.activeCurr ?? ""
        }
      });
    }
    return next.handle(request);
  }
};
_SiteContextInterceptor.\u0275fac = function SiteContextInterceptor_Factory(t) {
  return new (t || _SiteContextInterceptor)(\u0275\u0275inject(LanguageService), \u0275\u0275inject(CurrencyService), \u0275\u0275inject(OccEndpointsService), \u0275\u0275inject(SiteContextConfig));
};
_SiteContextInterceptor.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
  token: _SiteContextInterceptor,
  factory: _SiteContextInterceptor.\u0275fac,
  providedIn: "root"
});
var SiteContextInterceptor = _SiteContextInterceptor;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SiteContextInterceptor, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: LanguageService
  }, {
    type: CurrencyService
  }, {
    type: OccEndpointsService
  }, {
    type: SiteContextConfig
  }], null);
})();
var _AsmCustomer360RootModule = class _AsmCustomer360RootModule {
};
_AsmCustomer360RootModule.\u0275fac = function AsmCustomer360RootModule_Factory(t) {
  return new (t || _AsmCustomer360RootModule)();
};
_AsmCustomer360RootModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
  type: _AsmCustomer360RootModule
});
_AsmCustomer360RootModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
  providers: [provideDefaultConfig({
    featureModules: {
      [ASM_CUSTOMER_360_FEATURE]: {
        dependencies: [ASM_FEATURE]
      },
      [ASM_CUSTOMER_360_CORE_FEATURE]: ASM_CUSTOMER_360_FEATURE
    }
  }), {
    provide: HTTP_INTERCEPTORS,
    useExisting: SiteContextInterceptor,
    multi: true
  }],
  imports: [PageComponentModule]
});
var AsmCustomer360RootModule = _AsmCustomer360RootModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AsmCustomer360RootModule, [{
    type: NgModule,
    args: [{
      imports: [PageComponentModule],
      providers: [provideDefaultConfig({
        featureModules: {
          [ASM_CUSTOMER_360_FEATURE]: {
            dependencies: [ASM_FEATURE]
          },
          [ASM_CUSTOMER_360_CORE_FEATURE]: ASM_CUSTOMER_360_FEATURE
        }
      }), {
        provide: HTTP_INTERCEPTORS,
        useExisting: SiteContextInterceptor,
        multi: true
      }]
    }]
  }], null, null);
})();
var _AsmCustomer360Facade = class _AsmCustomer360Facade {
};
_AsmCustomer360Facade.\u0275fac = function AsmCustomer360Facade_Factory(t) {
  return new (t || _AsmCustomer360Facade)();
};
_AsmCustomer360Facade.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
  token: _AsmCustomer360Facade,
  factory: () => (() => facadeFactory({
    facade: _AsmCustomer360Facade,
    feature: ASM_CUSTOMER_360_FEATURE,
    methods: ["get360Data"]
  }))(),
  providedIn: "root"
});
var AsmCustomer360Facade = _AsmCustomer360Facade;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AsmCustomer360Facade, [{
    type: Injectable,
    args: [{
      providedIn: "root",
      useFactory: () => facadeFactory({
        facade: AsmCustomer360Facade,
        feature: ASM_CUSTOMER_360_FEATURE,
        methods: ["get360Data"]
      })
    }]
  }], null, null);
})();
var AsmCustomer360Type;
(function(AsmCustomer360Type2) {
  AsmCustomer360Type2["REVIEW_LIST"] = "c360ReviewList";
  AsmCustomer360Type2["STORE_LOCATION"] = "c360StoreLocation";
  AsmCustomer360Type2["PRODUCT_INTEREST_LIST"] = "c360CustomerProductInterestList";
  AsmCustomer360Type2["SUPPORT_TICKET_LIST"] = "c360TicketList";
  AsmCustomer360Type2["CUSTOMER_PROFILE"] = "c360CustomerProfile";
  AsmCustomer360Type2["ACTIVE_CART"] = "c360Cart";
  AsmCustomer360Type2["SAVED_CART"] = "c360SavedCart";
  AsmCustomer360Type2["OVERVIEW"] = "c360Overview";
  AsmCustomer360Type2["ACTIVITY_LIST"] = "c360ActivityList";
  AsmCustomer360Type2["COUPON_LIST"] = "c360CouponList";
  AsmCustomer360Type2["PROMOTION_LIST"] = "c360PromotionList";
  AsmCustomer360Type2["CUSTOMER_COUPON_LIST"] = "c360CustomerCouponList";
})(AsmCustomer360Type || (AsmCustomer360Type = {}));
var PaymentCardCode;
(function(PaymentCardCode2) {
  PaymentCardCode2["VISA"] = "visa";
  PaymentCardCode2["MASTER"] = "master";
  PaymentCardCode2["MASTERCARD_EUROCARD"] = "mastercard_eurocard";
  PaymentCardCode2["DINERS"] = "diners";
  PaymentCardCode2["AMEX"] = "amex";
})(PaymentCardCode || (PaymentCardCode = {}));
var KeyBoardEventCode;
(function(KeyBoardEventCode2) {
  KeyBoardEventCode2["ARROW_LEFT"] = "ArrowLeft";
  KeyBoardEventCode2["ARROW_RIGHT"] = "ArrowRight";
  KeyBoardEventCode2["ARROW_DOWN"] = "ArrowDown";
  KeyBoardEventCode2["ARROW_UP"] = "ArrowUp";
  KeyBoardEventCode2["HOME"] = "Home";
  KeyBoardEventCode2["END"] = "End";
  KeyBoardEventCode2["PAGE_DOWN"] = "PageDown";
  KeyBoardEventCode2["PAGE_UP"] = "PageUp";
})(KeyBoardEventCode || (KeyBoardEventCode = {}));
var AsmDialogActionType;
(function(AsmDialogActionType2) {
  AsmDialogActionType2["NAVIGATE"] = "NAVIGATE";
})(AsmDialogActionType || (AsmDialogActionType = {}));

export {
  AsmConfig,
  ASM_ENABLED_LOCAL_STORAGE_KEY,
  AsmEnablerService,
  CustomerListColumnActionType,
  AsmAuthStorageService,
  CsAgentAuthService,
  AsmRootModule,
  ASM_FEATURE,
  AsmBindCartFacade,
  AsmCreateCustomerFacade,
  AsmCustomerListFacade,
  AsmDeepLinkService,
  ASM_CUSTOMER_360_FEATURE,
  AsmCustomer360RootModule,
  AsmCustomer360Facade,
  AsmCustomer360Type,
  PaymentCardCode,
  KeyBoardEventCode,
  AsmDialogActionType
};
//# sourceMappingURL=chunk-HYGVNORW.js.map
