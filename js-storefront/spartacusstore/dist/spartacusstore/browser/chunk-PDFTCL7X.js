import {
  PersonalizationConfig
} from "./chunk-Z7B5IKWQ.js";
import {
  CmsService,
  EMPTY,
  Injectable,
  LoggerService,
  NgModule,
  filter,
  inject,
  isDevMode,
  map,
  setClassMetadata,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵinject
} from "./chunk-RJVZANIA.js";

// node_modules/@spartacus/tracking/fesm2022/spartacus-tracking-personalization-core.mjs
var _PersonalizationCoreModule = class _PersonalizationCoreModule {
};
_PersonalizationCoreModule.\u0275fac = function PersonalizationCoreModule_Factory(t) {
  return new (t || _PersonalizationCoreModule)();
};
_PersonalizationCoreModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
  type: _PersonalizationCoreModule
});
_PersonalizationCoreModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({});
var PersonalizationCoreModule = _PersonalizationCoreModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PersonalizationCoreModule, [{
    type: NgModule,
    args: [{}]
  }], null, null);
})();
var _PersonalizationContextService = class _PersonalizationContextService {
  constructor(config, cmsService) {
    this.config = config;
    this.cmsService = cmsService;
    this.logger = inject(LoggerService);
  }
  getPersonalizationContext() {
    if (!this.config.personalization?.context) {
      if (isDevMode()) {
        this.logger.warn(`There is no context configured in Personalization.`);
      }
      return EMPTY;
    } else {
      const context = this.config.personalization.context;
      return this.cmsService.getCurrentPage().pipe(filter(Boolean), map((page) => page.slots?.[context.slotPosition]), filter(Boolean), map((slot) => {
        const scriptComponent = slot.components?.find((i) => i.uid === context.componentId);
        return this.buildPersonalizationContext(scriptComponent?.properties?.script?.data);
      }));
    }
  }
  buildPersonalizationContext(data) {
    if (data) {
      const context = JSON.parse(atob(data));
      context.actions.forEach((action) => {
        Object.keys(action).forEach((key) => {
          action[key] = atob(action[key]);
        });
      });
      for (let i = 0; i < context.segments.length; i++) {
        context.segments[i] = atob(context.segments[i]);
      }
      return context;
    }
  }
};
_PersonalizationContextService.\u0275fac = function PersonalizationContextService_Factory(t) {
  return new (t || _PersonalizationContextService)(\u0275\u0275inject(PersonalizationConfig), \u0275\u0275inject(CmsService));
};
_PersonalizationContextService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
  token: _PersonalizationContextService,
  factory: _PersonalizationContextService.\u0275fac,
  providedIn: "root"
});
var PersonalizationContextService = _PersonalizationContextService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PersonalizationContextService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: PersonalizationConfig
  }, {
    type: CmsService
  }], null);
})();

// node_modules/@spartacus/tracking/fesm2022/spartacus-tracking-personalization.mjs
var _PersonalizationModule = class _PersonalizationModule {
};
_PersonalizationModule.\u0275fac = function PersonalizationModule_Factory(t) {
  return new (t || _PersonalizationModule)();
};
_PersonalizationModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
  type: _PersonalizationModule
});
_PersonalizationModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
  imports: [PersonalizationCoreModule]
});
var PersonalizationModule = _PersonalizationModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PersonalizationModule, [{
    type: NgModule,
    args: [{
      imports: [PersonalizationCoreModule]
    }]
  }], null, null);
})();
export {
  PersonalizationModule
};
//# sourceMappingURL=chunk-PDFTCL7X.js.map
