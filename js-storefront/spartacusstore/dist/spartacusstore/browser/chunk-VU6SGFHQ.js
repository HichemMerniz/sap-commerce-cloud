import {
  APP_INITIALIZER,
  Config,
  FeatureModulesService,
  HTTP_INTERCEPTORS,
  Injectable,
  Location,
  NgModule,
  RoutingService,
  ScriptLoader,
  inject,
  provideDefaultConfig,
  setClassMetadata,
  switchMap,
  take,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵinject
} from "./chunk-RJVZANIA.js";

// node_modules/@spartacus/smartedit/fesm2022/spartacus-smartedit-root.mjs
var _SmartEditConfig = class _SmartEditConfig {
};
_SmartEditConfig.\u0275fac = function SmartEditConfig_Factory(t) {
  return new (t || _SmartEditConfig)();
};
_SmartEditConfig.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
  token: _SmartEditConfig,
  factory: function SmartEditConfig_Factory(t) {
    let r = null;
    if (t) {
      r = new (t || _SmartEditConfig)();
    } else {
      r = \u0275\u0275inject(Config);
    }
    return r;
  },
  providedIn: "root"
});
var SmartEditConfig = _SmartEditConfig;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SmartEditConfig, [{
    type: Injectable,
    args: [{
      providedIn: "root",
      useExisting: Config
    }]
  }], null, null);
})();
var SMART_EDIT_FEATURE = "smartEdit";
var _SmartEditLauncherService = class _SmartEditLauncherService {
  get cmsTicketId() {
    return this._cmsTicketId;
  }
  constructor(config, location, scriptLoader) {
    this.config = config;
    this.location = location;
    this.scriptLoader = scriptLoader;
    this.featureModulesService = inject(FeatureModulesService);
  }
  /**
   * load webApplicationInjector.js first when Spartacus launched inside SmartEdit
   */
  load() {
    if (this.isLaunchedInSmartEdit()) {
      this.featureModulesService.resolveFeature(SMART_EDIT_FEATURE).subscribe();
      this.scriptLoader?.embedScript({
        src: "assets/webApplicationInjector.js",
        params: void 0,
        attributes: {
          id: "text/smartedit-injector",
          "data-smartedit-allow-origin": this.config.smartEdit?.allowOrigin
        }
      });
    }
  }
  /**
   * Indicates whether Spartacus is launched in SmartEdit
   */
  isLaunchedInSmartEdit() {
    const path = this.location.path().split("?")[0];
    const params = this.location.path().split("?")[1];
    const cmsToken = params?.split("&").find((param) => param.startsWith("cmsTicketId="));
    this._cmsTicketId = cmsToken?.split("=")[1];
    return path.split("/").pop() === this.config.smartEdit?.storefrontPreviewRoute && !!this._cmsTicketId;
  }
};
_SmartEditLauncherService.\u0275fac = function SmartEditLauncherService_Factory(t) {
  return new (t || _SmartEditLauncherService)(\u0275\u0275inject(SmartEditConfig), \u0275\u0275inject(Location), \u0275\u0275inject(ScriptLoader));
};
_SmartEditLauncherService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
  token: _SmartEditLauncherService,
  factory: _SmartEditLauncherService.\u0275fac,
  providedIn: "root"
});
var SmartEditLauncherService = _SmartEditLauncherService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SmartEditLauncherService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: SmartEditConfig
  }, {
    type: Location
  }, {
    type: ScriptLoader
  }], null);
})();
var defaultSmartEditConfig = {
  smartEdit: {
    storefrontPreviewRoute: "cx-preview",
    allowOrigin: "localhost:9002"
  }
};
var _CmsTicketInterceptor = class _CmsTicketInterceptor {
  constructor(service) {
    this.service = service;
    this.routingService = inject(RoutingService);
  }
  intercept(request, next) {
    const cmsTicketId = this.service.cmsTicketId;
    if (!cmsTicketId) {
      return next.handle(request);
    }
    if (request.url.includes("/productList")) {
      return this.setRequestForProductListPage(request, next, cmsTicketId);
    }
    if (request.url.includes("/cms/") || request.url.includes("/products/")) {
      request = request.clone({
        setParams: {
          cmsTicketId
        }
      });
    }
    return next.handle(request);
  }
  setRequestForProductListPage(request, next, cmsTicketId) {
    return this.routingService.getPageContext().pipe(take(1), switchMap((pageContext) => {
      request = request.clone(!!pageContext.id ? {
        setParams: {
          cmsTicketId,
          categoryCode: pageContext.id
        }
      } : {
        setParams: {
          cmsTicketId
        }
      });
      return next.handle(request);
    }));
  }
};
_CmsTicketInterceptor.\u0275fac = function CmsTicketInterceptor_Factory(t) {
  return new (t || _CmsTicketInterceptor)(\u0275\u0275inject(SmartEditLauncherService));
};
_CmsTicketInterceptor.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
  token: _CmsTicketInterceptor,
  factory: _CmsTicketInterceptor.\u0275fac,
  providedIn: "root"
});
var CmsTicketInterceptor = _CmsTicketInterceptor;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CmsTicketInterceptor, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: SmartEditLauncherService
  }], null);
})();
var interceptors = [{
  provide: HTTP_INTERCEPTORS,
  useExisting: CmsTicketInterceptor,
  multi: true
}];
function smartEditFactory(smartEditLauncherService) {
  const isReady = () => {
    smartEditLauncherService.load();
  };
  return isReady;
}
var _SmartEditRootModule = class _SmartEditRootModule {
};
_SmartEditRootModule.\u0275fac = function SmartEditRootModule_Factory(t) {
  return new (t || _SmartEditRootModule)();
};
_SmartEditRootModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
  type: _SmartEditRootModule
});
_SmartEditRootModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
  providers: [...interceptors, provideDefaultConfig(defaultSmartEditConfig), {
    provide: APP_INITIALIZER,
    useFactory: smartEditFactory,
    deps: [SmartEditLauncherService],
    multi: true
  }]
});
var SmartEditRootModule = _SmartEditRootModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SmartEditRootModule, [{
    type: NgModule,
    args: [{
      providers: [...interceptors, provideDefaultConfig(defaultSmartEditConfig), {
        provide: APP_INITIALIZER,
        useFactory: smartEditFactory,
        deps: [SmartEditLauncherService],
        multi: true
      }]
    }]
  }], null, null);
})();

export {
  SmartEditConfig,
  SMART_EDIT_FEATURE,
  SmartEditRootModule
};
//# sourceMappingURL=chunk-VU6SGFHQ.js.map
