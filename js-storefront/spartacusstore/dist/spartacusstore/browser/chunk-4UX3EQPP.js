import {
  CART_BASE_FEATURE
} from "./chunk-I4764JOB.js";
import {
  Injectable,
  NgModule,
  facadeFactory,
  provideDefaultConfigFactory,
  setClassMetadata,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule
} from "./chunk-RJVZANIA.js";

// node_modules/@spartacus/cart/fesm2022/spartacus-cart-wish-list-root.mjs
var CART_WISH_LIST_FEATURE = "cartWishList";
var CART_WISH_LIST_CORE_FEATURE = "cartWishListCore";
var ADD_TO_WISHLIST_FEATURE = "addToWishList";
var _WishListFacade = class _WishListFacade {
};
_WishListFacade.\u0275fac = function WishListFacade_Factory(t) {
  return new (t || _WishListFacade)();
};
_WishListFacade.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
  token: _WishListFacade,
  factory: () => (() => facadeFactory({
    facade: _WishListFacade,
    feature: CART_WISH_LIST_CORE_FEATURE,
    methods: ["createWishList", "getWishList", "loadWishList", "addEntry", "removeEntry", "getWishListLoading"],
    async: true
  }))(),
  providedIn: "root"
});
var WishListFacade = _WishListFacade;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(WishListFacade, [{
    type: Injectable,
    args: [{
      providedIn: "root",
      useFactory: () => facadeFactory({
        facade: WishListFacade,
        feature: CART_WISH_LIST_CORE_FEATURE,
        methods: ["createWishList", "getWishList", "loadWishList", "addEntry", "removeEntry", "getWishListLoading"],
        async: true
      })
    }]
  }], null, null);
})();
function defaultCartWishListComponentsConfig() {
  const config = {
    featureModules: {
      [CART_WISH_LIST_FEATURE]: {
        cmsComponents: ["WishListComponent"],
        dependencies: [CART_BASE_FEATURE]
      },
      [ADD_TO_WISHLIST_FEATURE]: {
        cmsComponents: ["AddToWishListComponent"]
      },
      // by default core is bundled together with components
      [CART_WISH_LIST_CORE_FEATURE]: CART_WISH_LIST_FEATURE
    }
  };
  return config;
}
var _WishListRootModule = class _WishListRootModule {
};
_WishListRootModule.\u0275fac = function WishListRootModule_Factory(t) {
  return new (t || _WishListRootModule)();
};
_WishListRootModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
  type: _WishListRootModule
});
_WishListRootModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
  providers: [provideDefaultConfigFactory(defaultCartWishListComponentsConfig)]
});
var WishListRootModule = _WishListRootModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(WishListRootModule, [{
    type: NgModule,
    args: [{
      providers: [provideDefaultConfigFactory(defaultCartWishListComponentsConfig)]
    }]
  }], null, null);
})();

export {
  CART_WISH_LIST_FEATURE,
  ADD_TO_WISHLIST_FEATURE,
  WishListFacade,
  WishListRootModule
};
//# sourceMappingURL=chunk-4UX3EQPP.js.map
