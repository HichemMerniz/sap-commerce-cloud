import './polyfills.server.mjs';
import {
  Config,
  LoggerService,
  OccEndpointsService,
  WindowRef,
  provideDefaultConfig,
  provideDefaultConfigFactory
} from "./chunk-AFAMYKVR.mjs";
import {
  HTTP_INTERCEPTORS,
  HttpResponse,
  Injectable,
  NgModule,
  inject,
  isDevMode,
  setClassMetadata,
  tap,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵinject
} from "./chunk-3LP6MEWW.mjs";

// node_modules/@spartacus/tracking/fesm2022/spartacus-tracking-personalization-root.mjs
var _PersonalizationConfig = class _PersonalizationConfig {
};
_PersonalizationConfig.\u0275fac = function PersonalizationConfig_Factory(t) {
  return new (t || _PersonalizationConfig)();
};
_PersonalizationConfig.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
  token: _PersonalizationConfig,
  factory: function PersonalizationConfig_Factory(t) {
    let r = null;
    if (t) {
      r = new (t || _PersonalizationConfig)();
    } else {
      r = \u0275\u0275inject(Config);
    }
    return r;
  },
  providedIn: "root"
});
var PersonalizationConfig = _PersonalizationConfig;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PersonalizationConfig, [{
    type: Injectable,
    args: [{
      providedIn: "root",
      useExisting: Config
    }]
  }], null, null);
})();
var PERSONALIZATION_FEATURE = "personalization";
var defaultPersonalizationConfig = {
  personalization: {
    enabled: false,
    httpHeaderName: {
      id: "Occ-Personalization-Id",
      timestamp: "Occ-Personalization-Time"
    },
    context: {
      slotPosition: "PlaceholderContentSlot",
      componentId: "PersonalizationScriptComponent"
    }
  }
};
var _OccPersonalizationIdInterceptor = class _OccPersonalizationIdInterceptor {
  constructor(config, occEndpoints, winRef) {
    this.config = config;
    this.occEndpoints = occEndpoints;
    this.winRef = winRef;
    this.enabled = false;
    this.PERSONALIZATION_ID_KEY = "personalization-id";
    this.logger = inject(LoggerService);
    if (this.winRef.isBrowser()) {
      this.enabled = this.winRef.localStorage && this.config.personalization?.enabled || false;
      if (this.enabled) {
        if (!this.config.personalization?.httpHeaderName && isDevMode()) {
          this.logger.warn(`There is no httpHeaderName configured in Personalization`);
        }
        this.requestHeader = this.config.personalization?.httpHeaderName?.id.toLowerCase();
        this.personalizationId = this.winRef.localStorage?.getItem(this.PERSONALIZATION_ID_KEY);
      } else if (this.winRef.localStorage?.getItem(this.PERSONALIZATION_ID_KEY)) {
        this.winRef.localStorage.removeItem(this.PERSONALIZATION_ID_KEY);
      }
    }
  }
  intercept(request, next) {
    if (!this.enabled) {
      return next.handle(request);
    }
    if (this.requestHeader && this.personalizationId && request.url.includes(this.occEndpoints.getBaseUrl())) {
      request = request.clone({
        setHeaders: {
          [this.requestHeader]: this.personalizationId
        }
      });
    }
    return next.handle(request).pipe(tap((event) => {
      if (event instanceof HttpResponse && this.requestHeader && event.headers.keys().includes(this.requestHeader)) {
        const receivedId = event.headers.get(this.requestHeader);
        if (this.personalizationId !== receivedId) {
          this.personalizationId = receivedId;
          if (this.personalizationId) {
            this.winRef.localStorage?.setItem(this.PERSONALIZATION_ID_KEY, this.personalizationId);
          }
        }
      }
    }));
  }
};
_OccPersonalizationIdInterceptor.\u0275fac = function OccPersonalizationIdInterceptor_Factory(t) {
  return new (t || _OccPersonalizationIdInterceptor)(\u0275\u0275inject(PersonalizationConfig), \u0275\u0275inject(OccEndpointsService), \u0275\u0275inject(WindowRef));
};
_OccPersonalizationIdInterceptor.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
  token: _OccPersonalizationIdInterceptor,
  factory: _OccPersonalizationIdInterceptor.\u0275fac,
  providedIn: "root"
});
var OccPersonalizationIdInterceptor = _OccPersonalizationIdInterceptor;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OccPersonalizationIdInterceptor, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: PersonalizationConfig
  }, {
    type: OccEndpointsService
  }, {
    type: WindowRef
  }], null);
})();
var _OccPersonalizationTimeInterceptor = class _OccPersonalizationTimeInterceptor {
  constructor(config, occEndpoints, winRef) {
    this.config = config;
    this.occEndpoints = occEndpoints;
    this.winRef = winRef;
    this.enabled = false;
    this.PERSONALIZATION_TIME_KEY = "personalization-time";
    this.logger = inject(LoggerService);
    if (this.winRef.isBrowser()) {
      this.enabled = this.winRef.localStorage && this.config.personalization?.enabled || false;
      if (this.enabled) {
        if (!this.config.personalization?.httpHeaderName && isDevMode()) {
          this.logger.warn(`There is no httpHeaderName configured in Personalization`);
        }
        this.requestHeader = this.config.personalization?.httpHeaderName?.timestamp.toLowerCase();
        this.timestamp = this.winRef.localStorage?.getItem(this.PERSONALIZATION_TIME_KEY);
      } else if (this.winRef.localStorage?.getItem(this.PERSONALIZATION_TIME_KEY)) {
        this.winRef.localStorage.removeItem(this.PERSONALIZATION_TIME_KEY);
      }
    }
  }
  intercept(request, next) {
    if (!this.enabled) {
      return next.handle(request);
    }
    if (this.requestHeader && this.timestamp && request.url.includes(this.occEndpoints.getBaseUrl())) {
      request = request.clone({
        setHeaders: {
          [this.requestHeader]: this.timestamp
        }
      });
    }
    return next.handle(request).pipe(tap((event) => {
      if (event instanceof HttpResponse && this.requestHeader && event.headers.keys().includes(this.requestHeader)) {
        const receivedTimestamp = event.headers.get(this.requestHeader);
        if (this.timestamp !== receivedTimestamp) {
          this.timestamp = receivedTimestamp;
          if (this.timestamp) {
            this.winRef.localStorage?.setItem(this.PERSONALIZATION_TIME_KEY, this.timestamp);
          }
        }
      }
    }));
  }
};
_OccPersonalizationTimeInterceptor.\u0275fac = function OccPersonalizationTimeInterceptor_Factory(t) {
  return new (t || _OccPersonalizationTimeInterceptor)(\u0275\u0275inject(PersonalizationConfig), \u0275\u0275inject(OccEndpointsService), \u0275\u0275inject(WindowRef));
};
_OccPersonalizationTimeInterceptor.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
  token: _OccPersonalizationTimeInterceptor,
  factory: _OccPersonalizationTimeInterceptor.\u0275fac,
  providedIn: "root"
});
var OccPersonalizationTimeInterceptor = _OccPersonalizationTimeInterceptor;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OccPersonalizationTimeInterceptor, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: PersonalizationConfig
  }, {
    type: OccEndpointsService
  }, {
    type: WindowRef
  }], null);
})();
var interceptors = [{
  provide: HTTP_INTERCEPTORS,
  useExisting: OccPersonalizationIdInterceptor,
  multi: true
}, {
  provide: HTTP_INTERCEPTORS,
  useExisting: OccPersonalizationTimeInterceptor,
  multi: true
}];
function defaultPersonalizationComponentsConfig() {
  const config = {
    featureModules: {
      [PERSONALIZATION_FEATURE]: {
        cmsComponents: ["PersonalizationScriptComponent"]
      }
    }
  };
  return config;
}
var _PersonalizationRootModule = class _PersonalizationRootModule {
};
_PersonalizationRootModule.\u0275fac = function PersonalizationRootModule_Factory(t) {
  return new (t || _PersonalizationRootModule)();
};
_PersonalizationRootModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
  type: _PersonalizationRootModule
});
_PersonalizationRootModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
  providers: [...interceptors, provideDefaultConfig(defaultPersonalizationConfig), provideDefaultConfigFactory(defaultPersonalizationComponentsConfig)]
});
var PersonalizationRootModule = _PersonalizationRootModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PersonalizationRootModule, [{
    type: NgModule,
    args: [{
      providers: [...interceptors, provideDefaultConfig(defaultPersonalizationConfig), provideDefaultConfigFactory(defaultPersonalizationComponentsConfig)]
    }]
  }], null, null);
})();

export {
  PersonalizationConfig,
  PERSONALIZATION_FEATURE,
  PersonalizationRootModule
};
//# sourceMappingURL=chunk-TYM3EBH2.mjs.map
