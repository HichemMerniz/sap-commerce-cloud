import {
  Injectable,
  NgModule,
  facadeFactory,
  provideDefaultConfig,
  provideDefaultConfigFactory,
  setClassMetadata,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule
} from "./chunk-RJVZANIA.js";

// node_modules/@spartacus/storefinder/fesm2022/spartacus-storefinder-root.mjs
var GOOGLE_MAPS_DEVELOPMENT_KEY_CONFIG = "cx-development";
var defaultStoreFinderLayoutConfig = {
  layoutSlots: {
    StoreFinderPageTemplate: {
      slots: ["MiddleContent", "SideContent"]
    }
  }
};
var STORE_FINDER_FEATURE = "storeFinder";
var _StoreFinderFacade = class _StoreFinderFacade {
};
_StoreFinderFacade.\u0275fac = function StoreFinderFacade_Factory(t) {
  return new (t || _StoreFinderFacade)();
};
_StoreFinderFacade.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
  token: _StoreFinderFacade,
  factory: () => (() => facadeFactory({
    facade: _StoreFinderFacade,
    feature: STORE_FINDER_FEATURE,
    methods: ["getStoresLoading", "getStoresLoaded", "getFindStoresEntities", "getViewAllStoresLoading", "getViewAllStoresEntities", "findStoresAction", "viewAllStores", "viewStoreById", "callFindStoresAction", "getStoreLatitude", "getStoreLongitude", "getDirections", "getFindStoreEntityById"],
    async: true
  }))(),
  providedIn: "root"
});
var StoreFinderFacade = _StoreFinderFacade;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StoreFinderFacade, [{
    type: Injectable,
    args: [{
      providedIn: "root",
      useFactory: () => facadeFactory({
        facade: StoreFinderFacade,
        feature: STORE_FINDER_FEATURE,
        methods: ["getStoresLoading", "getStoresLoaded", "getFindStoresEntities", "getViewAllStoresLoading", "getViewAllStoresEntities", "findStoresAction", "viewAllStores", "viewStoreById", "callFindStoresAction", "getStoreLatitude", "getStoreLongitude", "getDirections", "getFindStoreEntityById"],
        async: true
      })
    }]
  }], null, null);
})();
var StoreFinderOutlets;
(function(StoreFinderOutlets2) {
  StoreFinderOutlets2["PREFERRED_STORE"] = "cx-pick-up-in-store-make-my-store";
})(StoreFinderOutlets || (StoreFinderOutlets = {}));
function defaultStoreFinderComponentsConfig() {
  const config = {
    featureModules: {
      [STORE_FINDER_FEATURE]: {
        cmsComponents: ["StoreFinderComponent"]
      }
    }
  };
  return config;
}
var _StoreFinderRootModule = class _StoreFinderRootModule {
};
_StoreFinderRootModule.\u0275fac = function StoreFinderRootModule_Factory(t) {
  return new (t || _StoreFinderRootModule)();
};
_StoreFinderRootModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
  type: _StoreFinderRootModule
});
_StoreFinderRootModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
  providers: [provideDefaultConfig(defaultStoreFinderLayoutConfig), provideDefaultConfigFactory(defaultStoreFinderComponentsConfig)]
});
var StoreFinderRootModule = _StoreFinderRootModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StoreFinderRootModule, [{
    type: NgModule,
    args: [{
      declarations: [],
      providers: [provideDefaultConfig(defaultStoreFinderLayoutConfig), provideDefaultConfigFactory(defaultStoreFinderComponentsConfig)]
    }]
  }], null, null);
})();

export {
  GOOGLE_MAPS_DEVELOPMENT_KEY_CONFIG,
  STORE_FINDER_FEATURE,
  StoreFinderOutlets,
  StoreFinderRootModule
};
//# sourceMappingURL=chunk-BT6IY3QP.js.map
