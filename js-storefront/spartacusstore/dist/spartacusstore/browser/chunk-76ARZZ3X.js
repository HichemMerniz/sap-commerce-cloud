import {
  ORDER_ENTRIES_CONTEXT
} from "./chunk-I4764JOB.js";
import {
  CmsPageGuard,
  PageLayoutComponent
} from "./chunk-TEI6YMHW.js";
import {
  Config,
  Injectable,
  InjectionToken,
  NgModule,
  RouterModule,
  facadeFactory,
  provideDefaultConfig,
  provideDefaultConfigFactory,
  setClassMetadata,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵinject
} from "./chunk-RJVZANIA.js";

// node_modules/@spartacus/cart/fesm2022/spartacus-cart-quick-order-root.mjs
var defaultQuickOrderConfig = {
  quickOrder: {
    searchForm: {
      displayProductImages: true,
      maxProducts: 5,
      minCharactersBeforeRequest: 3
    },
    list: {
      hardDeleteTimeout: 7e3
    }
  }
};
var _QuickOrderConfig = class _QuickOrderConfig {
};
_QuickOrderConfig.\u0275fac = function QuickOrderConfig_Factory(t) {
  return new (t || _QuickOrderConfig)();
};
_QuickOrderConfig.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
  token: _QuickOrderConfig,
  factory: function QuickOrderConfig_Factory(t) {
    let r = null;
    if (t) {
      r = new (t || _QuickOrderConfig)();
    } else {
      r = \u0275\u0275inject(Config);
    }
    return r;
  },
  providedIn: "root"
});
var QuickOrderConfig = _QuickOrderConfig;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(QuickOrderConfig, [{
    type: Injectable,
    args: [{
      providedIn: "root",
      useExisting: Config
    }]
  }], null, null);
})();
var CART_QUICK_ORDER_FEATURE = "cartQuickOrder";
var CART_QUICK_ORDER_CORE_FEATURE = "cartQuickOrderCore";
function quickOrderFacadeFactory() {
  return facadeFactory({
    facade: QuickOrderFacade,
    feature: CART_QUICK_ORDER_CORE_FEATURE,
    methods: ["addProduct", "addToCart", "clearList", "canAdd", "setListLimit", "getEntries", "getProductAdded", "loadEntries", "softDeleteEntry", "searchProducts", "setProductAdded", "updateEntryQuantity", "getSoftDeletedEntries", "restoreSoftDeletedEntry", "hardDeleteEntry", "clearDeletedEntries", "getNonPurchasableProductError", "setNonPurchasableProductError", "clearNonPurchasableProductError"]
  });
}
var _QuickOrderFacade = class _QuickOrderFacade {
};
_QuickOrderFacade.\u0275fac = function QuickOrderFacade_Factory(t) {
  return new (t || _QuickOrderFacade)();
};
_QuickOrderFacade.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
  token: _QuickOrderFacade,
  factory: () => quickOrderFacadeFactory(),
  providedIn: "root"
});
var QuickOrderFacade = _QuickOrderFacade;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(QuickOrderFacade, [{
    type: Injectable,
    args: [{
      providedIn: "root",
      useFactory: quickOrderFacadeFactory
    }]
  }], null, null);
})();
var QuickOrderOrderEntriesContextToken = new InjectionToken("QuickOrderOrderEntriesContext");
function defaultQuickOrderComponentsConfig() {
  const config = {
    featureModules: {
      [CART_QUICK_ORDER_FEATURE]: {
        cmsComponents: ["QuickOrderComponent", "CartQuickOrderFormComponent"]
      },
      // by default core is bundled together with components
      [CART_QUICK_ORDER_CORE_FEATURE]: CART_QUICK_ORDER_FEATURE
    }
  };
  return config;
}
var defaultQuickOrderRoutingConfig = {
  routing: {
    routes: {
      quickOrder: {
        paths: ["my-account/quick-order"]
      }
    }
  }
};
var _QuickOrderRootModule = class _QuickOrderRootModule {
};
_QuickOrderRootModule.\u0275fac = function QuickOrderRootModule_Factory(t) {
  return new (t || _QuickOrderRootModule)();
};
_QuickOrderRootModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
  type: _QuickOrderRootModule
});
_QuickOrderRootModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
  providers: [provideDefaultConfigFactory(defaultQuickOrderComponentsConfig), provideDefaultConfig(defaultQuickOrderRoutingConfig), provideDefaultConfig(defaultQuickOrderConfig)],
  imports: [RouterModule.forChild([{
    // @ts-ignore
    path: null,
    canActivate: [CmsPageGuard],
    component: PageLayoutComponent,
    data: {
      cxRoute: "quickOrder",
      cxContext: {
        [ORDER_ENTRIES_CONTEXT]: QuickOrderOrderEntriesContextToken
      }
    }
  }])]
});
var QuickOrderRootModule = _QuickOrderRootModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(QuickOrderRootModule, [{
    type: NgModule,
    args: [{
      imports: [RouterModule.forChild([{
        // @ts-ignore
        path: null,
        canActivate: [CmsPageGuard],
        component: PageLayoutComponent,
        data: {
          cxRoute: "quickOrder",
          cxContext: {
            [ORDER_ENTRIES_CONTEXT]: QuickOrderOrderEntriesContextToken
          }
        }
      }])],
      providers: [provideDefaultConfigFactory(defaultQuickOrderComponentsConfig), provideDefaultConfig(defaultQuickOrderRoutingConfig), provideDefaultConfig(defaultQuickOrderConfig)]
    }]
  }], null, null);
})();

export {
  defaultQuickOrderConfig,
  CART_QUICK_ORDER_FEATURE,
  QuickOrderFacade,
  QuickOrderOrderEntriesContextToken,
  QuickOrderRootModule
};
//# sourceMappingURL=chunk-76ARZZ3X.js.map
