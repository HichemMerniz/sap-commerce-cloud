import './polyfills.server.mjs';
import {
  RestoreSavedCartSuccessEvent,
  SaveCartSuccessEvent
} from "./chunk-5AIHFPZ5.mjs";
import {
  OrderPlacedEvent
} from "./chunk-6BD7AOKI.mjs";
import {
  ActiveCartFacade,
  CART_BASE_FEATURE,
  DeleteCartEvent,
  LoadCartEvent,
  MergeCartSuccessEvent,
  MultiCartFacade,
  RemoveCartEvent
} from "./chunk-3NCZ7TRR.mjs";
import {
  Config,
  CurrencySetEvent,
  CxEvent,
  DeleteUserAddressEvent,
  EventService,
  GlobalMessageService,
  GlobalMessageType,
  LanguageSetEvent,
  LoadUserAddressesEvent,
  LoadUserPaymentMethodsEvent,
  LoginEvent,
  LogoutEvent,
  OCC_USER_ID_ANONYMOUS,
  RoutingService,
  Store,
  UpdateUserAddressEvent,
  UserAddressEvent,
  facadeFactory,
  provideDefaultConfig,
  provideDefaultConfigFactory,
  userGroup_actions
} from "./chunk-AFAMYKVR.mjs";
import {
  HTTP_INTERCEPTORS,
  HttpErrorResponse,
  Injectable,
  NgModule,
  Subscription,
  filter,
  map,
  merge,
  setClassMetadata,
  switchMap,
  take,
  tap,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵinject
} from "./chunk-3LP6MEWW.mjs";

// node_modules/@spartacus/checkout/fesm2022/spartacus-checkout-base-root.mjs
var DeliveryModePreferences;
(function(DeliveryModePreferences2) {
  DeliveryModePreferences2["FREE"] = "FREE";
  DeliveryModePreferences2["LEAST_EXPENSIVE"] = "LEAST_EXPENSIVE";
  DeliveryModePreferences2["MOST_EXPENSIVE"] = "MOST_EXPENSIVE";
})(DeliveryModePreferences || (DeliveryModePreferences = {}));
var _CheckoutConfig = class _CheckoutConfig {
};
_CheckoutConfig.\u0275fac = function CheckoutConfig_Factory(t) {
  return new (t || _CheckoutConfig)();
};
_CheckoutConfig.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
  token: _CheckoutConfig,
  factory: function CheckoutConfig_Factory(t) {
    let r = null;
    if (t) {
      r = new (t || _CheckoutConfig)();
    } else {
      r = \u0275\u0275inject(Config);
    }
    return r;
  },
  providedIn: "root"
});
var CheckoutConfig = _CheckoutConfig;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CheckoutConfig, [{
    type: Injectable,
    args: [{
      providedIn: "root",
      useExisting: Config
    }]
  }], null, null);
})();
var defaultCheckoutConfig = {
  checkout: {
    steps: [{
      id: "deliveryAddress",
      name: "checkoutProgress.deliveryAddress",
      routeName: "checkoutDeliveryAddress",
      type: [
        "deliveryAddress"
        /* CheckoutStepType.DELIVERY_ADDRESS */
      ]
    }, {
      id: "deliveryMode",
      name: "checkoutProgress.deliveryMode",
      routeName: "checkoutDeliveryMode",
      type: [
        "deliveryMode"
        /* CheckoutStepType.DELIVERY_MODE */
      ]
    }, {
      id: "paymentDetails",
      name: "checkoutProgress.paymentDetails",
      routeName: "checkoutPaymentDetails",
      type: [
        "paymentDetails"
        /* CheckoutStepType.PAYMENT_DETAILS */
      ]
    }, {
      id: "reviewOrder",
      name: "checkoutProgress.reviewOrder",
      routeName: "checkoutReviewOrder",
      type: [
        "reviewOrder"
        /* CheckoutStepType.REVIEW_ORDER */
      ]
    }],
    express: false,
    defaultDeliveryMode: [DeliveryModePreferences.FREE],
    guest: false
  }
};
var defaultCheckoutRoutingConfig = {
  routing: {
    routes: {
      checkoutLogin: {
        paths: ["checkout-login"],
        authFlow: true
      },
      checkout: {
        paths: ["checkout"]
      },
      checkoutDeliveryAddress: {
        paths: ["checkout/delivery-address"]
      },
      checkoutDeliveryMode: {
        paths: ["checkout/delivery-mode"]
      },
      checkoutPaymentDetails: {
        paths: ["checkout/payment-details"]
      },
      checkoutReviewOrder: {
        paths: ["checkout/review-order"]
      }
    }
  }
};
var _CheckoutQueryReloadEvent = class _CheckoutQueryReloadEvent extends CxEvent {
};
_CheckoutQueryReloadEvent.type = "CheckoutQueryReloadEvent";
var CheckoutQueryReloadEvent = _CheckoutQueryReloadEvent;
var _CheckoutQueryResetEvent = class _CheckoutQueryResetEvent extends CxEvent {
};
_CheckoutQueryResetEvent.type = "CheckoutQueryResetEvent";
var CheckoutQueryResetEvent = _CheckoutQueryResetEvent;
var CheckoutEvent = class extends CxEvent {
};
var CheckoutDeliveryAddressEvent = class extends CheckoutEvent {
};
var _CheckoutDeliveryAddressCreatedEvent = class _CheckoutDeliveryAddressCreatedEvent extends CheckoutDeliveryAddressEvent {
};
_CheckoutDeliveryAddressCreatedEvent.type = "CheckoutDeliveryAddressCreatedEvent";
var CheckoutDeliveryAddressCreatedEvent = _CheckoutDeliveryAddressCreatedEvent;
var _CheckoutDeliveryAddressSetEvent = class _CheckoutDeliveryAddressSetEvent extends CheckoutDeliveryAddressEvent {
};
_CheckoutDeliveryAddressSetEvent.type = "CheckoutDeliveryAddressSetEvent";
var CheckoutDeliveryAddressSetEvent = _CheckoutDeliveryAddressSetEvent;
var _CheckoutDeliveryAddressClearedEvent = class _CheckoutDeliveryAddressClearedEvent extends CheckoutDeliveryAddressEvent {
};
_CheckoutDeliveryAddressClearedEvent.type = "CheckoutDeliveryAddressClearedEvent";
var CheckoutDeliveryAddressClearedEvent = _CheckoutDeliveryAddressClearedEvent;
var CheckoutDeliveryModeEvent = class extends CheckoutEvent {
};
var _CheckoutDeliveryModeSetEvent = class _CheckoutDeliveryModeSetEvent extends CheckoutDeliveryModeEvent {
};
_CheckoutDeliveryModeSetEvent.type = "CheckoutDeliveryModeSetEvent";
var CheckoutDeliveryModeSetEvent = _CheckoutDeliveryModeSetEvent;
var _CheckoutDeliveryModeClearedEvent = class _CheckoutDeliveryModeClearedEvent extends CheckoutDeliveryModeEvent {
};
_CheckoutDeliveryModeClearedEvent.type = "CheckoutDeliveryModeClearedEvent";
var CheckoutDeliveryModeClearedEvent = _CheckoutDeliveryModeClearedEvent;
var _CheckoutDeliveryModeClearedErrorEvent = class _CheckoutDeliveryModeClearedErrorEvent extends CheckoutDeliveryModeEvent {
};
_CheckoutDeliveryModeClearedErrorEvent.type = "CheckoutDeliveryModeClearedErrorEvent";
var CheckoutDeliveryModeClearedErrorEvent = _CheckoutDeliveryModeClearedErrorEvent;
var _CheckoutSupportedDeliveryModesQueryReloadEvent = class _CheckoutSupportedDeliveryModesQueryReloadEvent extends CheckoutDeliveryModeEvent {
};
_CheckoutSupportedDeliveryModesQueryReloadEvent.type = "CheckoutSupportedDeliveryModesQueryReloadEvent";
var CheckoutSupportedDeliveryModesQueryReloadEvent = _CheckoutSupportedDeliveryModesQueryReloadEvent;
var _CheckoutSupportedDeliveryModesQueryResetEvent = class _CheckoutSupportedDeliveryModesQueryResetEvent extends CheckoutDeliveryModeEvent {
};
_CheckoutSupportedDeliveryModesQueryResetEvent.type = "CheckoutSupportedDeliveryModesQueryResetEvent";
var CheckoutSupportedDeliveryModesQueryResetEvent = _CheckoutSupportedDeliveryModesQueryResetEvent;
var CheckoutPaymentDetailsEvent = class extends CheckoutEvent {
};
var _CheckoutPaymentDetailsCreatedEvent = class _CheckoutPaymentDetailsCreatedEvent extends CheckoutPaymentDetailsEvent {
};
_CheckoutPaymentDetailsCreatedEvent.type = "CheckoutPaymentDetailsCreatedEvent";
var CheckoutPaymentDetailsCreatedEvent = _CheckoutPaymentDetailsCreatedEvent;
var _CheckoutPaymentDetailsSetEvent = class _CheckoutPaymentDetailsSetEvent extends CheckoutPaymentDetailsEvent {
};
_CheckoutPaymentDetailsSetEvent.type = "CheckoutPaymentDetailsSetEvent";
var CheckoutPaymentDetailsSetEvent = _CheckoutPaymentDetailsSetEvent;
var _CheckoutPaymentCardTypesQueryReloadEvent = class _CheckoutPaymentCardTypesQueryReloadEvent extends CheckoutPaymentDetailsEvent {
};
_CheckoutPaymentCardTypesQueryReloadEvent.type = "CheckoutPaymentCardTypesQueryReloadEvent";
var CheckoutPaymentCardTypesQueryReloadEvent = _CheckoutPaymentCardTypesQueryReloadEvent;
var _CheckoutPaymentCardTypesQueryResetEvent = class _CheckoutPaymentCardTypesQueryResetEvent extends CheckoutPaymentDetailsEvent {
};
_CheckoutPaymentCardTypesQueryResetEvent.type = "CheckoutPaymentCardTypesQueryResetEvent";
var CheckoutPaymentCardTypesQueryResetEvent = _CheckoutPaymentCardTypesQueryResetEvent;
var _CheckoutQueryEventListener = class _CheckoutQueryEventListener {
  constructor(eventService) {
    this.eventService = eventService;
    this.subscriptions = new Subscription();
    this.onCheckoutQueryReload();
    this.onCheckoutQueryReset();
  }
  onCheckoutQueryReload() {
    this.subscriptions.add(merge(this.eventService.get(LanguageSetEvent), this.eventService.get(CurrencySetEvent)).subscribe(() => {
      this.eventService.dispatch({}, CheckoutQueryReloadEvent);
    }));
  }
  onCheckoutQueryReset() {
    this.subscriptions.add(merge(this.eventService.get(LogoutEvent), this.eventService.get(LoginEvent), this.eventService.get(SaveCartSuccessEvent), this.eventService.get(RestoreSavedCartSuccessEvent), this.eventService.get(MergeCartSuccessEvent), this.eventService.get(OrderPlacedEvent)).subscribe(() => {
      this.eventService.dispatch({}, CheckoutQueryResetEvent);
    }));
  }
  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }
};
_CheckoutQueryEventListener.\u0275fac = function CheckoutQueryEventListener_Factory(t) {
  return new (t || _CheckoutQueryEventListener)(\u0275\u0275inject(EventService));
};
_CheckoutQueryEventListener.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
  token: _CheckoutQueryEventListener,
  factory: _CheckoutQueryEventListener.\u0275fac,
  providedIn: "root"
});
var CheckoutQueryEventListener = _CheckoutQueryEventListener;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CheckoutQueryEventListener, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: EventService
  }], null);
})();
var CHECKOUT_FEATURE = "checkout";
var CHECKOUT_CORE_FEATURE = "checkoutCore";
var _CheckoutDeliveryAddressFacade = class _CheckoutDeliveryAddressFacade {
};
_CheckoutDeliveryAddressFacade.\u0275fac = function CheckoutDeliveryAddressFacade_Factory(t) {
  return new (t || _CheckoutDeliveryAddressFacade)();
};
_CheckoutDeliveryAddressFacade.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
  token: _CheckoutDeliveryAddressFacade,
  factory: () => (() => facadeFactory({
    facade: _CheckoutDeliveryAddressFacade,
    feature: CHECKOUT_CORE_FEATURE,
    methods: ["getDeliveryAddressState", "createAndSetAddress", "setDeliveryAddress", "clearCheckoutDeliveryAddress"],
    // TODO:#deprecation-checkout - remove once we remove ngrx
    async: true
  }))(),
  providedIn: "root"
});
var CheckoutDeliveryAddressFacade = _CheckoutDeliveryAddressFacade;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CheckoutDeliveryAddressFacade, [{
    type: Injectable,
    args: [{
      providedIn: "root",
      useFactory: () => facadeFactory({
        facade: CheckoutDeliveryAddressFacade,
        feature: CHECKOUT_CORE_FEATURE,
        methods: ["getDeliveryAddressState", "createAndSetAddress", "setDeliveryAddress", "clearCheckoutDeliveryAddress"],
        // TODO:#deprecation-checkout - remove once we remove ngrx
        async: true
      })
    }]
  }], null, null);
})();
var _CheckoutDeliveryAddressEventListener = class _CheckoutDeliveryAddressEventListener {
  constructor(checkoutDeliveryAddressFacade, eventService, globalMessageService, activeCartFacade) {
    this.checkoutDeliveryAddressFacade = checkoutDeliveryAddressFacade;
    this.eventService = eventService;
    this.globalMessageService = globalMessageService;
    this.activeCartFacade = activeCartFacade;
    this.subscriptions = new Subscription();
    this.onDeliveryAddressCreated();
    this.onDeliveryAddressSet();
    this.onDeliveryAddressCleared();
    this.onUserAddressChange();
    this.onCartDeleted();
  }
  /**
   * Registers listeners for the User address events.
   */
  onUserAddressChange() {
    this.subscriptions.add(this.eventService.get(UserAddressEvent).pipe(filter((event) => event instanceof UpdateUserAddressEvent || event instanceof DeleteUserAddressEvent), switchMap(({
      userId
    }) => this.activeCartFacade.takeActiveCartId().pipe(map((cartId) => ({
      cartId,
      userId
    }))))).subscribe(({
      cartId,
      userId
    }) => {
      this.checkoutDeliveryAddressFacade.clearCheckoutDeliveryAddress();
      this.eventService.dispatch({
        cartId,
        userId
      }, CheckoutSupportedDeliveryModesQueryResetEvent);
    }));
  }
  onDeliveryAddressCreated() {
    this.subscriptions.add(this.eventService.get(CheckoutDeliveryAddressCreatedEvent).subscribe(({
      cartId,
      userId
    }) => {
      if (userId !== OCC_USER_ID_ANONYMOUS) {
        this.eventService.dispatch({
          userId
        }, LoadUserAddressesEvent);
      }
      this.globalMessageService.add({
        key: "addressForm.userAddressAddSuccess"
      }, GlobalMessageType.MSG_TYPE_CONFIRMATION);
      this.eventService.dispatch({
        userId,
        cartId
      }, CheckoutSupportedDeliveryModesQueryResetEvent);
      this.eventService.dispatch({}, CheckoutQueryResetEvent);
    }));
  }
  onDeliveryAddressSet() {
    this.subscriptions.add(this.eventService.get(CheckoutDeliveryAddressSetEvent).subscribe(({
      userId,
      cartId
    }) => {
      this.eventService.dispatch({
        userId,
        cartId
      }, CheckoutSupportedDeliveryModesQueryResetEvent);
      this.eventService.dispatch({}, CheckoutQueryResetEvent);
    }));
  }
  onDeliveryAddressCleared() {
    this.subscriptions.add(this.eventService.get(CheckoutDeliveryAddressClearedEvent).subscribe(() => this.eventService.dispatch({}, CheckoutQueryResetEvent)));
  }
  onCartDeleted() {
    this.subscriptions.add(this.eventService.get(DeleteCartEvent).subscribe(() => this.eventService.dispatch({}, CheckoutQueryResetEvent)));
  }
  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }
};
_CheckoutDeliveryAddressEventListener.\u0275fac = function CheckoutDeliveryAddressEventListener_Factory(t) {
  return new (t || _CheckoutDeliveryAddressEventListener)(\u0275\u0275inject(CheckoutDeliveryAddressFacade), \u0275\u0275inject(EventService), \u0275\u0275inject(GlobalMessageService), \u0275\u0275inject(ActiveCartFacade));
};
_CheckoutDeliveryAddressEventListener.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
  token: _CheckoutDeliveryAddressEventListener,
  factory: _CheckoutDeliveryAddressEventListener.\u0275fac,
  providedIn: "root"
});
var CheckoutDeliveryAddressEventListener = _CheckoutDeliveryAddressEventListener;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CheckoutDeliveryAddressEventListener, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: CheckoutDeliveryAddressFacade
  }, {
    type: EventService
  }, {
    type: GlobalMessageService
  }, {
    type: ActiveCartFacade
  }], null);
})();
var _CheckoutDeliveryModeEventListener = class _CheckoutDeliveryModeEventListener {
  constructor(eventService) {
    this.eventService = eventService;
    this.subscriptions = new Subscription();
    this.onDeliveryModeSet();
    this.onDeliveryModeCleared();
    this.onDeliveryModeClearedError();
    this.onDeliveryModeReset();
    this.onGetSupportedDeliveryModesQueryReload();
    this.onGetSupportedDeliveryModesQueryReset();
  }
  onDeliveryModeSet() {
    this.subscriptions.add(this.eventService.get(CheckoutDeliveryModeSetEvent).subscribe(({
      userId,
      cartId,
      cartCode
    }) => {
      this.eventService.dispatch({}, CheckoutQueryResetEvent);
      this.eventService.dispatch({
        userId,
        cartId,
        cartCode
      }, LoadCartEvent);
    }));
  }
  onDeliveryModeCleared() {
    this.subscriptions.add(this.eventService.get(CheckoutDeliveryModeClearedEvent).subscribe(({
      userId,
      cartId,
      cartCode
    }) => {
      this.eventService.dispatch({}, CheckoutQueryResetEvent);
      this.eventService.dispatch({
        userId,
        cartId,
        cartCode
      }, LoadCartEvent);
    }));
  }
  onDeliveryModeClearedError() {
    this.subscriptions.add(this.eventService.get(CheckoutDeliveryModeClearedErrorEvent).subscribe(({
      userId,
      cartId,
      cartCode
    }) => {
      this.eventService.dispatch({}, CheckoutQueryResetEvent);
      this.eventService.dispatch({
        userId,
        cartId,
        cartCode
      }, LoadCartEvent);
    }));
  }
  /**
   * Registers listeners for the delivery mode clear event.
   * This is needed for when `CheckoutSupportedDeliveryModesQueryResetEvent` is dispatched
   * as we need to update the user's cart when the delivery mode is cleared from the backend checkout details.
   */
  onDeliveryModeReset() {
    this.subscriptions.add(this.eventService.get(CheckoutSupportedDeliveryModesQueryResetEvent).subscribe(({
      userId,
      cartId
    }) => this.eventService.dispatch({
      userId,
      cartId,
      /**
       * As we know the cart is not anonymous (precondition checked),
       * we can safely use the cartId, which is actually the cart.code.
       */
      cartCode: cartId
    }, LoadCartEvent)));
  }
  onGetSupportedDeliveryModesQueryReload() {
    this.subscriptions.add(merge(this.eventService.get(LanguageSetEvent), this.eventService.get(CurrencySetEvent)).subscribe(() => {
      this.eventService.dispatch({}, CheckoutSupportedDeliveryModesQueryReloadEvent);
    }));
  }
  onGetSupportedDeliveryModesQueryReset() {
    this.subscriptions.add(merge(this.eventService.get(LogoutEvent), this.eventService.get(LoginEvent)).subscribe(() => {
      this.eventService.dispatch({}, CheckoutSupportedDeliveryModesQueryResetEvent);
    }));
  }
  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }
};
_CheckoutDeliveryModeEventListener.\u0275fac = function CheckoutDeliveryModeEventListener_Factory(t) {
  return new (t || _CheckoutDeliveryModeEventListener)(\u0275\u0275inject(EventService));
};
_CheckoutDeliveryModeEventListener.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
  token: _CheckoutDeliveryModeEventListener,
  factory: _CheckoutDeliveryModeEventListener.\u0275fac,
  providedIn: "root"
});
var CheckoutDeliveryModeEventListener = _CheckoutDeliveryModeEventListener;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CheckoutDeliveryModeEventListener, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: EventService
  }], null);
})();
var _CheckoutPaymentEventListener = class _CheckoutPaymentEventListener {
  constructor(eventService, globalMessageService) {
    this.eventService = eventService;
    this.globalMessageService = globalMessageService;
    this.subscriptions = new Subscription();
    this.onPaymentCreated();
    this.onPaymentSet();
    this.onGetCardTypesQueryReload();
  }
  onPaymentCreated() {
    this.subscriptions.add(this.eventService.get(CheckoutPaymentDetailsCreatedEvent).subscribe(({
      userId
    }) => {
      if (userId !== OCC_USER_ID_ANONYMOUS) {
        this.eventService.dispatch({
          userId
        }, LoadUserPaymentMethodsEvent);
      }
      this.globalMessageService.add({
        key: "paymentForm.paymentAddedSuccessfully"
      }, GlobalMessageType.MSG_TYPE_CONFIRMATION);
      this.eventService.dispatch({}, CheckoutQueryResetEvent);
    }));
  }
  onPaymentSet() {
    this.subscriptions.add(this.eventService.get(CheckoutPaymentDetailsSetEvent).subscribe(() => {
      this.eventService.dispatch({}, CheckoutQueryResetEvent);
    }));
  }
  onGetCardTypesQueryReload() {
    this.subscriptions.add(merge(this.eventService.get(LanguageSetEvent), this.eventService.get(CurrencySetEvent)).subscribe(() => {
      this.eventService.dispatch({}, CheckoutPaymentCardTypesQueryReloadEvent);
    }));
  }
  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }
};
_CheckoutPaymentEventListener.\u0275fac = function CheckoutPaymentEventListener_Factory(t) {
  return new (t || _CheckoutPaymentEventListener)(\u0275\u0275inject(EventService), \u0275\u0275inject(GlobalMessageService));
};
_CheckoutPaymentEventListener.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
  token: _CheckoutPaymentEventListener,
  factory: _CheckoutPaymentEventListener.\u0275fac,
  providedIn: "root"
});
var CheckoutPaymentEventListener = _CheckoutPaymentEventListener;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CheckoutPaymentEventListener, [{
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
var _CheckoutPlaceOrderEventListener = class _CheckoutPlaceOrderEventListener {
  constructor(eventService) {
    this.eventService = eventService;
    this.subscriptions = new Subscription();
    this.onOrderPlaced();
  }
  onOrderPlaced() {
    this.subscriptions.add(this.eventService.get(OrderPlacedEvent).subscribe(({
      userId,
      cartId,
      cartCode
    }) => {
      this.eventService.dispatch({
        userId,
        cartId,
        cartCode
      }, RemoveCartEvent);
      this.eventService.dispatch({}, CheckoutQueryResetEvent);
    }));
  }
  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }
};
_CheckoutPlaceOrderEventListener.\u0275fac = function CheckoutPlaceOrderEventListener_Factory(t) {
  return new (t || _CheckoutPlaceOrderEventListener)(\u0275\u0275inject(EventService));
};
_CheckoutPlaceOrderEventListener.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
  token: _CheckoutPlaceOrderEventListener,
  factory: _CheckoutPlaceOrderEventListener.\u0275fac,
  providedIn: "root"
});
var CheckoutPlaceOrderEventListener = _CheckoutPlaceOrderEventListener;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CheckoutPlaceOrderEventListener, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: EventService
  }], null);
})();
var _CheckoutLegacyStoreEventListener = class _CheckoutLegacyStoreEventListener {
  constructor(eventService, store) {
    this.eventService = eventService;
    this.store = store;
    this.subscriptions = new Subscription();
    this.onUserAddressAction();
    this.onUserPaymentAction();
  }
  /**
   * Registers events for the user address actions.
   */
  onUserAddressAction() {
    this.subscriptions.add(this.eventService.get(LoadUserAddressesEvent).subscribe(({
      userId
    }) => {
      this.store.dispatch(new userGroup_actions.LoadUserAddresses(userId));
    }));
  }
  /**
   * Registers events for the user payment actions.
   */
  onUserPaymentAction() {
    this.subscriptions.add(this.eventService.get(LoadUserPaymentMethodsEvent).subscribe(({
      userId
    }) => {
      this.store.dispatch(
        /**
         * TODO:#deprecation-checkout We have to keep this here, since the user payment feature is still ngrx-based.
         * Remove once it is switched from ngrx to c&q.
         * We should dispatch an event, which will load the userPayment$ query.
         */
        new userGroup_actions.LoadUserPaymentMethods(userId)
      );
    }));
  }
  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }
};
_CheckoutLegacyStoreEventListener.\u0275fac = function CheckoutLegacyStoreEventListener_Factory(t) {
  return new (t || _CheckoutLegacyStoreEventListener)(\u0275\u0275inject(EventService), \u0275\u0275inject(Store));
};
_CheckoutLegacyStoreEventListener.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
  token: _CheckoutLegacyStoreEventListener,
  factory: _CheckoutLegacyStoreEventListener.\u0275fac,
  providedIn: "root"
});
var CheckoutLegacyStoreEventListener = _CheckoutLegacyStoreEventListener;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CheckoutLegacyStoreEventListener, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: EventService
  }, {
    type: Store
  }], null);
})();
var _CheckoutEventModule = class _CheckoutEventModule {
  constructor(_checkoutQueryEventListener, _checkoutDeliveryAddressEventListener, _checkoutDeliveryModeEventListener, _checkoutPaymentEventListener, _checkoutPlaceOrderEventListener, _checkoutLegacyStoreEventListener) {
  }
};
_CheckoutEventModule.\u0275fac = function CheckoutEventModule_Factory(t) {
  return new (t || _CheckoutEventModule)(\u0275\u0275inject(CheckoutQueryEventListener), \u0275\u0275inject(CheckoutDeliveryAddressEventListener), \u0275\u0275inject(CheckoutDeliveryModeEventListener), \u0275\u0275inject(CheckoutPaymentEventListener), \u0275\u0275inject(CheckoutPlaceOrderEventListener), \u0275\u0275inject(CheckoutLegacyStoreEventListener));
};
_CheckoutEventModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
  type: _CheckoutEventModule
});
_CheckoutEventModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({});
var CheckoutEventModule = _CheckoutEventModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CheckoutEventModule, [{
    type: NgModule,
    args: [{}]
  }], () => [{
    type: CheckoutQueryEventListener
  }, {
    type: CheckoutDeliveryAddressEventListener
  }, {
    type: CheckoutDeliveryModeEventListener
  }, {
    type: CheckoutPaymentEventListener
  }, {
    type: CheckoutPlaceOrderEventListener
  }, {
    type: CheckoutLegacyStoreEventListener
  }], null);
})();
var _CheckoutCartInterceptor = class _CheckoutCartInterceptor {
  constructor(routingService, multiCartFacade) {
    this.routingService = routingService;
    this.multiCartFacade = multiCartFacade;
  }
  intercept(request, next) {
    return this.routingService.getRouterState().pipe(take(1), switchMap((state) => {
      return next.handle(request).pipe(tap({
        error: (response) => {
          if (response instanceof HttpErrorResponse && this.isUserInCheckoutRoute(state.state?.semanticRoute)) {
            if (this.isCartNotFoundError(response)) {
              this.routingService.go({
                cxRoute: "cart"
              });
              const cartCode = this.getCartIdFromError(response);
              if (cartCode) {
                this.multiCartFacade.reloadCart(cartCode);
              }
            }
          }
        }
      }));
    }));
  }
  /**
   * Returns true if the parameter semantic route is part of "checkout"
   * Checkout semantic routes:
   * checkout
   * checkoutPaymentType
   * CheckoutDeliveryAddress
   * checkoutDeliveryMode
   * checkoutPaymentDetails
   * checkoutReviewOrder
   * checkoutLogin
   * @param semanticRoute
   */
  isUserInCheckoutRoute(semanticRoute) {
    return semanticRoute?.toLowerCase().startsWith("checkout") ?? false;
  }
  /**
   * Checks of the error is for a cart not found, i.e. the cart doesn't exist anymore
   *
   * @param response
   */
  isCartNotFoundError(response) {
    return response.status === 400 && response.error?.errors?.[0]?.type === "CartError" && response.error?.errors?.[0]?.reason === "notFound";
  }
  getCartIdFromError(response) {
    return response.error?.errors?.[0]?.subject;
  }
};
_CheckoutCartInterceptor.\u0275fac = function CheckoutCartInterceptor_Factory(t) {
  return new (t || _CheckoutCartInterceptor)(\u0275\u0275inject(RoutingService), \u0275\u0275inject(MultiCartFacade));
};
_CheckoutCartInterceptor.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
  token: _CheckoutCartInterceptor,
  factory: _CheckoutCartInterceptor.\u0275fac,
  providedIn: "root"
});
var CheckoutCartInterceptor = _CheckoutCartInterceptor;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CheckoutCartInterceptor, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: RoutingService
  }, {
    type: MultiCartFacade
  }], null);
})();
var interceptors = [{
  provide: HTTP_INTERCEPTORS,
  useExisting: CheckoutCartInterceptor,
  multi: true
}];
var CHECKOUT_BASE_CMS_COMPONENTS = ["CheckoutOrchestrator", "CheckoutOrderSummary", "CheckoutProgress", "CheckoutProgressMobileBottom", "CheckoutProgressMobileTop", "CheckoutDeliveryMode", "CheckoutPaymentDetails", "CheckoutPlaceOrder", "CheckoutReviewOrder", "CheckoutReviewPayment", "CheckoutReviewShipping", "CheckoutReviewOverview", "CheckoutDeliveryAddress", "GuestCheckoutLoginComponent"];
function defaultCheckoutComponentsConfig() {
  const config = {
    featureModules: {
      [CHECKOUT_FEATURE]: {
        cmsComponents: CHECKOUT_BASE_CMS_COMPONENTS,
        dependencies: [CART_BASE_FEATURE]
      },
      // by default core is bundled together with components
      [CHECKOUT_CORE_FEATURE]: CHECKOUT_FEATURE
    }
  };
  return config;
}
var _CheckoutRootModule = class _CheckoutRootModule {
};
_CheckoutRootModule.\u0275fac = function CheckoutRootModule_Factory(t) {
  return new (t || _CheckoutRootModule)();
};
_CheckoutRootModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
  type: _CheckoutRootModule
});
_CheckoutRootModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
  providers: [...interceptors, provideDefaultConfig(defaultCheckoutRoutingConfig), provideDefaultConfig(defaultCheckoutConfig), provideDefaultConfigFactory(defaultCheckoutComponentsConfig)],
  imports: [CheckoutEventModule]
});
var CheckoutRootModule = _CheckoutRootModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CheckoutRootModule, [{
    type: NgModule,
    args: [{
      imports: [CheckoutEventModule],
      providers: [...interceptors, provideDefaultConfig(defaultCheckoutRoutingConfig), provideDefaultConfig(defaultCheckoutConfig), provideDefaultConfigFactory(defaultCheckoutComponentsConfig)]
    }]
  }], null, null);
})();
var _CheckoutDeliveryModesFacade = class _CheckoutDeliveryModesFacade {
};
_CheckoutDeliveryModesFacade.\u0275fac = function CheckoutDeliveryModesFacade_Factory(t) {
  return new (t || _CheckoutDeliveryModesFacade)();
};
_CheckoutDeliveryModesFacade.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
  token: _CheckoutDeliveryModesFacade,
  factory: () => (() => facadeFactory({
    facade: _CheckoutDeliveryModesFacade,
    feature: CHECKOUT_CORE_FEATURE,
    methods: ["getSupportedDeliveryModesState", "getSupportedDeliveryModes", "setDeliveryMode", "getSelectedDeliveryModeState", "clearCheckoutDeliveryMode"],
    // TODO:#deprecation-checkout - remove once we remove ngrx
    async: true
  }))(),
  providedIn: "root"
});
var CheckoutDeliveryModesFacade = _CheckoutDeliveryModesFacade;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CheckoutDeliveryModesFacade, [{
    type: Injectable,
    args: [{
      providedIn: "root",
      useFactory: () => facadeFactory({
        facade: CheckoutDeliveryModesFacade,
        feature: CHECKOUT_CORE_FEATURE,
        methods: ["getSupportedDeliveryModesState", "getSupportedDeliveryModes", "setDeliveryMode", "getSelectedDeliveryModeState", "clearCheckoutDeliveryMode"],
        // TODO:#deprecation-checkout - remove once we remove ngrx
        async: true
      })
    }]
  }], null, null);
})();
var _CheckoutPaymentFacade = class _CheckoutPaymentFacade {
};
_CheckoutPaymentFacade.\u0275fac = function CheckoutPaymentFacade_Factory(t) {
  return new (t || _CheckoutPaymentFacade)();
};
_CheckoutPaymentFacade.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
  token: _CheckoutPaymentFacade,
  factory: () => (() => facadeFactory({
    facade: _CheckoutPaymentFacade,
    feature: CHECKOUT_CORE_FEATURE,
    methods: ["getPaymentCardTypesState", "getPaymentCardTypes", "getPaymentDetailsState", "createPaymentDetails", "setPaymentDetails"],
    // TODO:#deprecation-checkout - remove once we remove ngrx
    async: true
  }))(),
  providedIn: "root"
});
var CheckoutPaymentFacade = _CheckoutPaymentFacade;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CheckoutPaymentFacade, [{
    type: Injectable,
    args: [{
      providedIn: "root",
      useFactory: () => facadeFactory({
        facade: CheckoutPaymentFacade,
        feature: CHECKOUT_CORE_FEATURE,
        methods: ["getPaymentCardTypesState", "getPaymentCardTypes", "getPaymentDetailsState", "createPaymentDetails", "setPaymentDetails"],
        // TODO:#deprecation-checkout - remove once we remove ngrx
        async: true
      })
    }]
  }], null, null);
})();
var _CheckoutQueryFacade = class _CheckoutQueryFacade {
};
_CheckoutQueryFacade.\u0275fac = function CheckoutQueryFacade_Factory(t) {
  return new (t || _CheckoutQueryFacade)();
};
_CheckoutQueryFacade.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
  token: _CheckoutQueryFacade,
  factory: () => (() => facadeFactory({
    facade: _CheckoutQueryFacade,
    feature: CHECKOUT_CORE_FEATURE,
    methods: ["getCheckoutDetailsState"]
  }))(),
  providedIn: "root"
});
var CheckoutQueryFacade = _CheckoutQueryFacade;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CheckoutQueryFacade, [{
    type: Injectable,
    args: [{
      providedIn: "root",
      useFactory: () => facadeFactory({
        facade: CheckoutQueryFacade,
        feature: CHECKOUT_CORE_FEATURE,
        methods: ["getCheckoutDetailsState"]
      })
    }]
  }], null, null);
})();

export {
  DeliveryModePreferences,
  CheckoutConfig,
  CheckoutQueryReloadEvent,
  CheckoutQueryResetEvent,
  CheckoutDeliveryAddressCreatedEvent,
  CheckoutDeliveryAddressSetEvent,
  CheckoutDeliveryAddressClearedEvent,
  CheckoutDeliveryModeSetEvent,
  CheckoutDeliveryModeClearedEvent,
  CheckoutDeliveryModeClearedErrorEvent,
  CheckoutSupportedDeliveryModesQueryReloadEvent,
  CheckoutSupportedDeliveryModesQueryResetEvent,
  CheckoutPaymentDetailsCreatedEvent,
  CheckoutPaymentDetailsSetEvent,
  CheckoutPaymentCardTypesQueryReloadEvent,
  CheckoutPaymentCardTypesQueryResetEvent,
  CHECKOUT_FEATURE,
  CheckoutDeliveryAddressFacade,
  CheckoutRootModule,
  CheckoutDeliveryModesFacade,
  CheckoutPaymentFacade,
  CheckoutQueryFacade
};
//# sourceMappingURL=chunk-XILTBMBX.mjs.map
