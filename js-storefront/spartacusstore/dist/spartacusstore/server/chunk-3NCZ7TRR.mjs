import './polyfills.server.mjs';
import {
  CmsPageGuard,
  PageEvent,
  PageLayoutComponent
} from "./chunk-JOGQIABG.mjs";
import {
  Config,
  CxEvent,
  EventService,
  RouterModule,
  facadeFactory,
  provideDefaultConfig,
  provideDefaultConfigFactory
} from "./chunk-AFAMYKVR.mjs";
import {
  Injectable,
  InjectionToken,
  NgModule,
  Subscription,
  setClassMetadata,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵinject
} from "./chunk-3LP6MEWW.mjs";

// node_modules/@spartacus/cart/fesm2022/spartacus-cart-base-root.mjs
var defaultCartConfig = {
  cart: {
    validation: {
      enabled: false
    },
    selectiveCart: {
      enabled: false
    }
  }
};
var defaultCartRoutingConfig = {
  routing: {
    routes: {
      cart: {
        paths: ["cart"]
      }
    }
  }
};
var ORDER_ENTRIES_CONTEXT = Symbol("ORDER_ENTRIES_CONTEXT");
var CartEvent = class extends CxEvent {
};
var _CreateCartEvent = class _CreateCartEvent extends CartEvent {
};
_CreateCartEvent.type = "CreateCartEvent";
var CreateCartEvent = _CreateCartEvent;
var _CreateCartSuccessEvent = class _CreateCartSuccessEvent extends CartEvent {
};
_CreateCartSuccessEvent.type = "CreateCartSuccessEvent";
var CreateCartSuccessEvent = _CreateCartSuccessEvent;
var _CreateCartFailEvent = class _CreateCartFailEvent extends CartEvent {
};
_CreateCartFailEvent.type = "CreateCartFailEvent";
var CreateCartFailEvent = _CreateCartFailEvent;
var _CartAddEntryEvent = class _CartAddEntryEvent extends CartEvent {
};
_CartAddEntryEvent.type = "CartAddEntryEvent";
var CartAddEntryEvent = _CartAddEntryEvent;
var _CartAddEntrySuccessEvent = class _CartAddEntrySuccessEvent extends CartEvent {
};
_CartAddEntrySuccessEvent.type = "CartAddEntrySuccessEvent";
var CartAddEntrySuccessEvent = _CartAddEntrySuccessEvent;
var _CartAddEntryFailEvent = class _CartAddEntryFailEvent extends CartEvent {
};
_CartAddEntryFailEvent.type = "CartAddEntryFailEvent";
var CartAddEntryFailEvent = _CartAddEntryFailEvent;
var _CartRemoveEntryFailEvent = class _CartRemoveEntryFailEvent extends CartEvent {
};
_CartRemoveEntryFailEvent.type = "CartRemoveEntryFailEvent";
var CartRemoveEntryFailEvent = _CartRemoveEntryFailEvent;
var _CartRemoveEntrySuccessEvent = class _CartRemoveEntrySuccessEvent extends CartEvent {
};
_CartRemoveEntrySuccessEvent.type = "CartRemoveEntrySuccessEvent";
var CartRemoveEntrySuccessEvent = _CartRemoveEntrySuccessEvent;
var _CartUpdateEntrySuccessEvent = class _CartUpdateEntrySuccessEvent extends CartEvent {
};
_CartUpdateEntrySuccessEvent.type = "CartUpdateEntrySuccessEvent";
var CartUpdateEntrySuccessEvent = _CartUpdateEntrySuccessEvent;
var _CartUpdateEntryFailEvent = class _CartUpdateEntryFailEvent extends CartEvent {
};
_CartUpdateEntryFailEvent.type = "CartUpdateEntryFailEvent";
var CartUpdateEntryFailEvent = _CartUpdateEntryFailEvent;
var _CartUiEventAddToCart = class _CartUiEventAddToCart extends CxEvent {
};
_CartUiEventAddToCart.type = "CartUiEventAddToCart";
var CartUiEventAddToCart = _CartUiEventAddToCart;
var _MergeCartSuccessEvent = class _MergeCartSuccessEvent extends CartEvent {
};
_MergeCartSuccessEvent.type = "MergeCartSuccessEvent";
var MergeCartSuccessEvent = _MergeCartSuccessEvent;
var _LoadCartEvent = class _LoadCartEvent extends CartEvent {
};
_LoadCartEvent.type = "LoadCartEvent";
var LoadCartEvent = _LoadCartEvent;
var _RemoveCartEvent = class _RemoveCartEvent extends CartEvent {
};
_RemoveCartEvent.type = "RemoveCartEvent";
var RemoveCartEvent = _RemoveCartEvent;
var _DeleteCartEvent = class _DeleteCartEvent extends CartEvent {
};
_DeleteCartEvent.type = "DeleteCartEvent";
var DeleteCartEvent = _DeleteCartEvent;
var _DeleteCartSuccessEvent = class _DeleteCartSuccessEvent extends CartEvent {
};
_DeleteCartSuccessEvent.type = "DeleteCartSuccessEvent";
var DeleteCartSuccessEvent = _DeleteCartSuccessEvent;
var _DeleteCartFailEvent = class _DeleteCartFailEvent extends CartEvent {
};
_DeleteCartFailEvent.type = "DeleteCartFailEvent";
var DeleteCartFailEvent = _DeleteCartFailEvent;
var _AddCartVoucherEvent = class _AddCartVoucherEvent extends CartEvent {
};
_AddCartVoucherEvent.type = "AddCartVoucherEvent";
var AddCartVoucherEvent = _AddCartVoucherEvent;
var _AddCartVoucherSuccessEvent = class _AddCartVoucherSuccessEvent extends AddCartVoucherEvent {
};
_AddCartVoucherSuccessEvent.type = "AddCartVoucherSuccessEvent";
var AddCartVoucherSuccessEvent = _AddCartVoucherSuccessEvent;
var _AddCartVoucherFailEvent = class _AddCartVoucherFailEvent extends AddCartVoucherEvent {
};
_AddCartVoucherFailEvent.type = "AddCartVoucherFailEvent";
var AddCartVoucherFailEvent = _AddCartVoucherFailEvent;
var _RemoveCartVoucherEvent = class _RemoveCartVoucherEvent extends CartEvent {
};
_RemoveCartVoucherEvent.type = "RemoveCartVoucherEvent";
var RemoveCartVoucherEvent = _RemoveCartVoucherEvent;
var _RemoveCartVoucherSuccessEvent = class _RemoveCartVoucherSuccessEvent extends RemoveCartVoucherEvent {
};
_RemoveCartVoucherSuccessEvent.type = "RemoveCartVoucherSuccessEvent";
var RemoveCartVoucherSuccessEvent = _RemoveCartVoucherSuccessEvent;
var _RemoveCartVoucherFailEvent = class _RemoveCartVoucherFailEvent extends RemoveCartVoucherEvent {
};
_RemoveCartVoucherFailEvent.type = "RemoveCartVoucherFailEvent";
var RemoveCartVoucherFailEvent = _RemoveCartVoucherFailEvent;
var CART_BASE_FEATURE = "cartBase";
var CART_BASE_CORE_FEATURE = "cartBaseCore";
var MINI_CART_FEATURE = "miniCart";
var ADD_TO_CART_FEATURE = "addToCart";
var _MultiCartFacade = class _MultiCartFacade {
};
_MultiCartFacade.\u0275fac = function MultiCartFacade_Factory(t) {
  return new (t || _MultiCartFacade)();
};
_MultiCartFacade.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
  token: _MultiCartFacade,
  factory: () => (() => facadeFactory({
    facade: _MultiCartFacade,
    feature: CART_BASE_CORE_FEATURE,
    methods: ["getCart", "getCarts", "getCartEntity", "isStable", "createCart", "mergeToCurrentCart", "loadCart", "getEntries", "getLastEntry", "addEntry", "addEntries", "removeEntry", "updateEntry", "getEntry", "assignEmail", "removeCart", "deleteCart", "reloadCart", "getCartIdByType"],
    async: true
  }))(),
  providedIn: "root"
});
var MultiCartFacade = _MultiCartFacade;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MultiCartFacade, [{
    type: Injectable,
    args: [{
      providedIn: "root",
      useFactory: () => facadeFactory({
        facade: MultiCartFacade,
        feature: CART_BASE_CORE_FEATURE,
        methods: ["getCart", "getCarts", "getCartEntity", "isStable", "createCart", "mergeToCurrentCart", "loadCart", "getEntries", "getLastEntry", "addEntry", "addEntries", "removeEntry", "updateEntry", "getEntry", "assignEmail", "removeCart", "deleteCart", "reloadCart", "getCartIdByType"],
        async: true
      })
    }]
  }], null, null);
})();
var _MultiCartEventListener = class _MultiCartEventListener {
  constructor(eventService, multiCartFacade) {
    this.eventService = eventService;
    this.multiCartFacade = multiCartFacade;
    this.subscriptions = new Subscription();
    this.onCartBaseAction();
  }
  /**
   * Registers events for the cart base actions.
   */
  onCartBaseAction() {
    this.subscriptions.add(this.eventService.get(LoadCartEvent).subscribe(({
      userId,
      cartId
    }) => {
      if (userId && cartId) {
        this.multiCartFacade.loadCart({
          userId,
          cartId
        });
      }
    }));
    this.subscriptions.add(this.eventService.get(RemoveCartEvent).subscribe(({
      cartId
    }) => {
      this.multiCartFacade.removeCart(cartId);
    }));
  }
  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }
};
_MultiCartEventListener.\u0275fac = function MultiCartEventListener_Factory(t) {
  return new (t || _MultiCartEventListener)(\u0275\u0275inject(EventService), \u0275\u0275inject(MultiCartFacade));
};
_MultiCartEventListener.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
  token: _MultiCartEventListener,
  factory: _MultiCartEventListener.\u0275fac,
  providedIn: "root"
});
var MultiCartEventListener = _MultiCartEventListener;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MultiCartEventListener, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: EventService
  }, {
    type: MultiCartFacade
  }], null);
})();
var _CartBaseEventModule = class _CartBaseEventModule {
  constructor(_multiCartEventListener) {
  }
};
_CartBaseEventModule.\u0275fac = function CartBaseEventModule_Factory(t) {
  return new (t || _CartBaseEventModule)(\u0275\u0275inject(MultiCartEventListener));
};
_CartBaseEventModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
  type: _CartBaseEventModule
});
_CartBaseEventModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({});
var CartBaseEventModule = _CartBaseEventModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CartBaseEventModule, [{
    type: NgModule,
    args: [{}]
  }], () => [{
    type: MultiCartEventListener
  }], null);
})();
var ActiveCartOrderEntriesContextToken = new InjectionToken("ActiveCartOrderEntriesContext");
function defaultCartComponentsConfig() {
  const config = {
    featureModules: {
      [CART_BASE_FEATURE]: {
        cmsComponents: ["CartApplyCouponComponent", "CartComponent", "CartProceedToCheckoutComponent", "CartTotalsComponent", "SaveForLaterComponent", "ClearCartComponent"]
      },
      [MINI_CART_FEATURE]: {
        cmsComponents: ["MiniCartComponent"]
      },
      [ADD_TO_CART_FEATURE]: {
        cmsComponents: ["ProductAddToCartComponent"]
      },
      // By default core is bundled together with components.
      // The cart lib should keep using this default.
      //
      // While the lazy loading configurations make it possible to
      // split the core part and the components part, it is required that
      // they stay together for the cart lib.  This compromise is required to
      // optimize performances by delaying the moment the cart lib is loaded and
      // making sure cart lib is loaded when needed.
      [CART_BASE_CORE_FEATURE]: CART_BASE_FEATURE
    }
  };
  return config;
}
var _CartBaseRootModule = class _CartBaseRootModule {
};
_CartBaseRootModule.\u0275fac = function CartBaseRootModule_Factory(t) {
  return new (t || _CartBaseRootModule)();
};
_CartBaseRootModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
  type: _CartBaseRootModule
});
_CartBaseRootModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
  providers: [provideDefaultConfigFactory(defaultCartComponentsConfig), provideDefaultConfig(defaultCartConfig), provideDefaultConfig(defaultCartRoutingConfig)],
  imports: [CartBaseEventModule, RouterModule.forChild([{
    // @ts-ignore
    path: null,
    canActivate: [CmsPageGuard],
    component: PageLayoutComponent,
    data: {
      cxRoute: "cart",
      cxContext: {
        [ORDER_ENTRIES_CONTEXT]: ActiveCartOrderEntriesContextToken
      }
    }
  }])]
});
var CartBaseRootModule = _CartBaseRootModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CartBaseRootModule, [{
    type: NgModule,
    args: [{
      imports: [CartBaseEventModule, RouterModule.forChild([{
        // @ts-ignore
        path: null,
        canActivate: [CmsPageGuard],
        component: PageLayoutComponent,
        data: {
          cxRoute: "cart",
          cxContext: {
            [ORDER_ENTRIES_CONTEXT]: ActiveCartOrderEntriesContextToken
          }
        }
      }])],
      providers: [provideDefaultConfigFactory(defaultCartComponentsConfig), provideDefaultConfig(defaultCartConfig), provideDefaultConfig(defaultCartRoutingConfig)]
    }]
  }], null, null);
})();
var _CartConfig = class _CartConfig {
};
_CartConfig.\u0275fac = function CartConfig_Factory(t) {
  return new (t || _CartConfig)();
};
_CartConfig.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
  token: _CartConfig,
  factory: function CartConfig_Factory(t) {
    let r = null;
    if (t) {
      r = new (t || _CartConfig)();
    } else {
      r = \u0275\u0275inject(Config);
    }
    return r;
  },
  providedIn: "root"
});
var CartConfig = _CartConfig;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CartConfig, [{
    type: Injectable,
    args: [{
      providedIn: "root",
      useExisting: Config
    }]
  }], null, null);
})();
var _CartPageEvent = class _CartPageEvent extends PageEvent {
};
_CartPageEvent.type = "CartPageEvent";
var CartPageEvent = _CartPageEvent;
var _ActiveCartFacade = class _ActiveCartFacade {
};
_ActiveCartFacade.\u0275fac = function ActiveCartFacade_Factory(t) {
  return new (t || _ActiveCartFacade)();
};
_ActiveCartFacade.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
  token: _ActiveCartFacade,
  factory: () => (() => facadeFactory({
    facade: _ActiveCartFacade,
    feature: CART_BASE_CORE_FEATURE,
    methods: ["getActive", "takeActive", "getActiveCartId", "takeActiveCartId", "getEntries", "getLastEntry", "getLoading", "isStable", "addEntry", "removeEntry", "updateEntry", "getEntry", "addEmail", "getAssignedUser", "isGuestCart", "addEntries", "requireLoadedCart", "reloadActiveCart", "hasPickupItems", "hasDeliveryItems", "getPickupEntries", "getDeliveryEntries"],
    async: true
  }))(),
  providedIn: "root"
});
var ActiveCartFacade = _ActiveCartFacade;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ActiveCartFacade, [{
    type: Injectable,
    args: [{
      providedIn: "root",
      useFactory: () => facadeFactory({
        facade: ActiveCartFacade,
        feature: CART_BASE_CORE_FEATURE,
        methods: ["getActive", "takeActive", "getActiveCartId", "takeActiveCartId", "getEntries", "getLastEntry", "getLoading", "isStable", "addEntry", "removeEntry", "updateEntry", "getEntry", "addEmail", "getAssignedUser", "isGuestCart", "addEntries", "requireLoadedCart", "reloadActiveCart", "hasPickupItems", "hasDeliveryItems", "getPickupEntries", "getDeliveryEntries"],
        async: true
      })
    }]
  }], null, null);
})();
var _CartValidationFacade = class _CartValidationFacade {
};
_CartValidationFacade.\u0275fac = function CartValidationFacade_Factory(t) {
  return new (t || _CartValidationFacade)();
};
_CartValidationFacade.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
  token: _CartValidationFacade,
  factory: () => (() => facadeFactory({
    facade: _CartValidationFacade,
    feature: CART_BASE_CORE_FEATURE,
    methods: ["validateCart", "getValidationResults"]
  }))(),
  providedIn: "root"
});
var CartValidationFacade = _CartValidationFacade;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CartValidationFacade, [{
    type: Injectable,
    args: [{
      providedIn: "root",
      useFactory: () => facadeFactory({
        facade: CartValidationFacade,
        feature: CART_BASE_CORE_FEATURE,
        methods: ["validateCart", "getValidationResults"]
      })
    }]
  }], null, null);
})();
var _CartVoucherFacade = class _CartVoucherFacade {
};
_CartVoucherFacade.\u0275fac = function CartVoucherFacade_Factory(t) {
  return new (t || _CartVoucherFacade)();
};
_CartVoucherFacade.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
  token: _CartVoucherFacade,
  factory: () => (() => facadeFactory({
    facade: _CartVoucherFacade,
    feature: CART_BASE_CORE_FEATURE,
    methods: ["addVoucher", "removeVoucher", "getAddVoucherResultError", "getAddVoucherResultSuccess", "getAddVoucherResultLoading", "resetAddVoucherProcessingState"],
    async: true
  }))(),
  providedIn: "root"
});
var CartVoucherFacade = _CartVoucherFacade;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CartVoucherFacade, [{
    type: Injectable,
    args: [{
      providedIn: "root",
      useFactory: () => facadeFactory({
        facade: CartVoucherFacade,
        feature: CART_BASE_CORE_FEATURE,
        methods: ["addVoucher", "removeVoucher", "getAddVoucherResultError", "getAddVoucherResultSuccess", "getAddVoucherResultLoading", "resetAddVoucherProcessingState"],
        async: true
      })
    }]
  }], null, null);
})();
var _SelectiveCartFacade = class _SelectiveCartFacade {
};
_SelectiveCartFacade.\u0275fac = function SelectiveCartFacade_Factory(t) {
  return new (t || _SelectiveCartFacade)();
};
_SelectiveCartFacade.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
  token: _SelectiveCartFacade,
  factory: () => (() => facadeFactory({
    facade: _SelectiveCartFacade,
    feature: CART_BASE_CORE_FEATURE,
    methods: ["getCart", "getEntries", "isStable", "addEntry", "removeEntry", "updateEntry", "getEntry"],
    async: true
  }))(),
  providedIn: "root"
});
var SelectiveCartFacade = _SelectiveCartFacade;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SelectiveCartFacade, [{
    type: Injectable,
    args: [{
      providedIn: "root",
      useFactory: () => facadeFactory({
        facade: SelectiveCartFacade,
        feature: CART_BASE_CORE_FEATURE,
        methods: ["getCart", "getEntries", "isStable", "addEntry", "removeEntry", "updateEntry", "getEntry"],
        async: true
      })
    }]
  }], null, null);
})();
var _CartItemContext = class _CartItemContext {
};
_CartItemContext.\u0275fac = function CartItemContext_Factory(t) {
  return new (t || _CartItemContext)();
};
_CartItemContext.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
  token: _CartItemContext,
  factory: _CartItemContext.\u0275fac
});
var CartItemContext = _CartItemContext;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CartItemContext, [{
    type: Injectable
  }], null, null);
})();
var CartOutlets;
(function(CartOutlets2) {
  CartOutlets2["ITEM"] = "cx-cart-item";
  CartOutlets2["LIST_ITEM"] = "cx-cart-item-list-row";
  CartOutlets2["ITEM_DETAILS"] = "cx-cart-item.details";
  CartOutlets2["ITEM_CONFIGURATOR_ISSUES"] = "cx-configurator-issues-notification";
  CartOutlets2["ITEM_BUNDLE_DETAILS"] = "cx-cart-item.bundle-details";
  CartOutlets2["ITEM_DELIVERY_DETAILS"] = "cx-cart-item.delivery-details";
  CartOutlets2["ORDER_SUMMARY"] = "cx-order-summary";
  CartOutlets2["CART_ITEM_LIST"] = "cx-cart-item-list";
  CartOutlets2["ADD_TO_CART_CONTAINER"] = "cx-add-to-cart-container";
  CartOutlets2["PICKUP_INFO"] = "cx-pickup-info";
  CartOutlets2["ADD_TO_CART_PICKUP_OPTION"] = "cx-add-to-cart-pickup-option";
  CartOutlets2["DELIVERY_MODE"] = "cx-delivery-mode";
  CartOutlets2["ORDER_OVERVIEW"] = "cx-order-overview";
})(CartOutlets || (CartOutlets = {}));
var PromotionLocation;
(function(PromotionLocation2) {
  PromotionLocation2["ActiveCart"] = "CART";
  PromotionLocation2["Checkout"] = "CHECKOUT";
  PromotionLocation2["Order"] = "ORDER";
  PromotionLocation2["SaveForLater"] = "SAVE_FOR_LATER";
  PromotionLocation2["SavedCart"] = "SAVED_CART";
})(PromotionLocation || (PromotionLocation = {}));
var CartType;
(function(CartType2) {
  CartType2["ACTIVE"] = "Active";
  CartType2["WISH_LIST"] = "WishList";
  CartType2["SELECTIVE"] = "Selective";
  CartType2["NEW_CREATED"] = "NewCreated";
})(CartType || (CartType = {}));
var CartValidationStatusCode;
(function(CartValidationStatusCode2) {
  CartValidationStatusCode2["NO_STOCK"] = "noStock";
  CartValidationStatusCode2["LOW_STOCK"] = "lowStock";
  CartValidationStatusCode2["REVIEW_CONFIGURATION"] = "reviewConfiguration";
  CartValidationStatusCode2["PRICING_ERROR"] = "pricingError";
  CartValidationStatusCode2["UNRESOLVABLE_ISSUES"] = "unresolvableIssues";
})(CartValidationStatusCode || (CartValidationStatusCode = {}));
var OrderEntriesSource;
(function(OrderEntriesSource2) {
  OrderEntriesSource2["ACTIVE_CART"] = "ACTIVE_CART";
  OrderEntriesSource2["NEW_SAVED_CART"] = "NEW_SAVED_CART";
  OrderEntriesSource2["QUICK_ORDER"] = "QUICK_ORDER";
  OrderEntriesSource2["SAVED_CART"] = "SAVED_CART";
  OrderEntriesSource2["ORDER_CONFIRMATION"] = "ORDER_CONFIRMATION";
  OrderEntriesSource2["ORDER_DETAILS"] = "ORDER_DETAILS";
  OrderEntriesSource2["UNIT_ORDER_DETAILS"] = "UNIT_ORDER_DETAILS";
})(OrderEntriesSource || (OrderEntriesSource = {}));
var ProductImportStatus;
(function(ProductImportStatus2) {
  ProductImportStatus2["SUCCESS"] = "success";
  ProductImportStatus2["LOW_STOCK"] = "lowStock";
  ProductImportStatus2["NO_STOCK"] = "noStock";
  ProductImportStatus2["UNKNOWN_IDENTIFIER"] = "unknownIdentifier";
  ProductImportStatus2["UNKNOWN_ERROR"] = "unknownError";
  ProductImportStatus2["LIMIT_EXCEEDED"] = "limitExceeded";
})(ProductImportStatus || (ProductImportStatus = {}));
var CART_NORMALIZER = new InjectionToken("CartNormalizer");
var ORDER_ENTRY_PROMOTIONS_NORMALIZER = new InjectionToken("OrderEntryPromotionsNormalizer");
var CART_MODIFICATION_NORMALIZER = new InjectionToken("CartModificationNormalizer");
var SAVE_CART_NORMALIZER = new InjectionToken("SaveCartNormalizer");
var CART_VOUCHER_NORMALIZER = new InjectionToken("CartVoucherNormalizer");

export {
  ORDER_ENTRIES_CONTEXT,
  CartEvent,
  CreateCartEvent,
  CreateCartSuccessEvent,
  CreateCartFailEvent,
  CartAddEntryEvent,
  CartAddEntrySuccessEvent,
  CartAddEntryFailEvent,
  CartRemoveEntryFailEvent,
  CartRemoveEntrySuccessEvent,
  CartUpdateEntrySuccessEvent,
  CartUpdateEntryFailEvent,
  CartUiEventAddToCart,
  MergeCartSuccessEvent,
  LoadCartEvent,
  RemoveCartEvent,
  DeleteCartEvent,
  DeleteCartSuccessEvent,
  DeleteCartFailEvent,
  AddCartVoucherEvent,
  AddCartVoucherSuccessEvent,
  AddCartVoucherFailEvent,
  RemoveCartVoucherEvent,
  RemoveCartVoucherSuccessEvent,
  RemoveCartVoucherFailEvent,
  CART_BASE_FEATURE,
  MINI_CART_FEATURE,
  ADD_TO_CART_FEATURE,
  MultiCartFacade,
  ActiveCartOrderEntriesContextToken,
  CartBaseRootModule,
  CartConfig,
  CartPageEvent,
  ActiveCartFacade,
  CartValidationFacade,
  CartVoucherFacade,
  SelectiveCartFacade,
  CartItemContext,
  CartOutlets,
  PromotionLocation,
  CartType,
  CartValidationStatusCode,
  OrderEntriesSource,
  ProductImportStatus,
  CART_NORMALIZER,
  ORDER_ENTRY_PROMOTIONS_NORMALIZER,
  CART_MODIFICATION_NORMALIZER,
  CART_VOUCHER_NORMALIZER
};
//# sourceMappingURL=chunk-3NCZ7TRR.mjs.map
