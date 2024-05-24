import {
  CART_BASE_FEATURE,
  ORDER_ENTRIES_CONTEXT
} from "./chunk-I4764JOB.js";
import {
  CmsPageGuard,
  PageLayoutComponent,
  getAddressNumbers
} from "./chunk-TEI6YMHW.js";
import {
  AuthGuard,
  CxEvent,
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
  ɵɵdefineNgModule
} from "./chunk-RJVZANIA.js";

// node_modules/@spartacus/order/fesm2022/spartacus-order-root.mjs
var OrderEvent = class extends CxEvent {
};
var _OrderPlacedEvent = class _OrderPlacedEvent extends OrderEvent {
};
_OrderPlacedEvent.type = "OrderPlacedEvent";
var OrderPlacedEvent = _OrderPlacedEvent;
var _ReplenishmentOrderScheduledEvent = class _ReplenishmentOrderScheduledEvent extends OrderEvent {
};
_ReplenishmentOrderScheduledEvent.type = "ReplenishmentOrderScheduledEvent";
var ReplenishmentOrderScheduledEvent = _ReplenishmentOrderScheduledEvent;
var _DownloadOrderInvoicesEvent = class _DownloadOrderInvoicesEvent extends CxEvent {
};
_DownloadOrderInvoicesEvent.type = "DownloadOrderInvoicesEvent";
var DownloadOrderInvoicesEvent = _DownloadOrderInvoicesEvent;
var ORDER_FEATURE = "order";
var ORDER_CORE_FEATURE = "orderCore";
function orderHistoryFacadeFactory() {
  return facadeFactory({
    facade: OrderHistoryFacade,
    feature: ORDER_CORE_FEATURE,
    methods: ["getOrderDetails", "loadOrderDetails", "clearOrderDetails", "getOrderHistoryList", "getOrderHistoryListLoaded", "loadOrderList", "clearOrderList", "getConsignmentTracking", "loadConsignmentTracking", "clearConsignmentTracking", "cancelOrder", "getCancelOrderLoading", "getCancelOrderSuccess", "resetCancelOrderProcessState", "getOrderDetailsLoading"],
    async: true
  });
}
var _OrderHistoryFacade = class _OrderHistoryFacade {
};
_OrderHistoryFacade.\u0275fac = function OrderHistoryFacade_Factory(t) {
  return new (t || _OrderHistoryFacade)();
};
_OrderHistoryFacade.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
  token: _OrderHistoryFacade,
  factory: () => orderHistoryFacadeFactory(),
  providedIn: "root"
});
var OrderHistoryFacade = _OrderHistoryFacade;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OrderHistoryFacade, [{
    type: Injectable,
    args: [{
      providedIn: "root",
      useFactory: orderHistoryFacadeFactory
    }]
  }], null, null);
})();
function orderReturnRequestFacadeFactory() {
  return facadeFactory({
    facade: OrderReturnRequestFacade,
    feature: ORDER_CORE_FEATURE,
    methods: ["createOrderReturnRequest", "getOrderReturnRequest", "getOrderReturnRequestList", "loadOrderReturnRequestDetail", "loadOrderReturnRequestList", "clearOrderReturnRequestList", "getReturnRequestLoading", "getReturnRequestSuccess", "clearOrderReturnRequestDetail", "cancelOrderReturnRequest", "getCancelReturnRequestLoading", "getCancelReturnRequestSuccess", "resetCancelReturnRequestProcessState"],
    async: true
  });
}
var _OrderReturnRequestFacade = class _OrderReturnRequestFacade {
};
_OrderReturnRequestFacade.\u0275fac = function OrderReturnRequestFacade_Factory(t) {
  return new (t || _OrderReturnRequestFacade)();
};
_OrderReturnRequestFacade.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
  token: _OrderReturnRequestFacade,
  factory: () => orderReturnRequestFacadeFactory(),
  providedIn: "root"
});
var OrderReturnRequestFacade = _OrderReturnRequestFacade;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OrderReturnRequestFacade, [{
    type: Injectable,
    args: [{
      providedIn: "root",
      useFactory: orderReturnRequestFacadeFactory
    }]
  }], null, null);
})();
var _OrderFacade = class _OrderFacade {
};
_OrderFacade.\u0275fac = function OrderFacade_Factory(t) {
  return new (t || _OrderFacade)();
};
_OrderFacade.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
  token: _OrderFacade,
  factory: () => (() => facadeFactory({
    facade: _OrderFacade,
    feature: ORDER_CORE_FEATURE,
    methods: ["getOrderDetails", "clearPlacedOrder", "setPlacedOrder", "placeOrder", "getPickupEntries", "getDeliveryEntries"]
  }))(),
  providedIn: "root"
});
var OrderFacade = _OrderFacade;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OrderFacade, [{
    type: Injectable,
    args: [{
      providedIn: "root",
      useFactory: () => facadeFactory({
        facade: OrderFacade,
        feature: ORDER_CORE_FEATURE,
        methods: ["getOrderDetails", "clearPlacedOrder", "setPlacedOrder", "placeOrder", "getPickupEntries", "getDeliveryEntries"]
      })
    }]
  }], null, null);
})();
var _ReorderOrderFacade = class _ReorderOrderFacade {
};
_ReorderOrderFacade.\u0275fac = function ReorderOrderFacade_Factory(t) {
  return new (t || _ReorderOrderFacade)();
};
_ReorderOrderFacade.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
  token: _ReorderOrderFacade,
  factory: () => (() => facadeFactory({
    facade: _ReorderOrderFacade,
    feature: ORDER_CORE_FEATURE,
    methods: ["reorder"]
  }))(),
  providedIn: "root"
});
var ReorderOrderFacade = _ReorderOrderFacade;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ReorderOrderFacade, [{
    type: Injectable,
    args: [{
      providedIn: "root",
      useFactory: () => facadeFactory({
        facade: ReorderOrderFacade,
        feature: ORDER_CORE_FEATURE,
        methods: ["reorder"]
      })
    }]
  }], null, null);
})();
function replenishmentOrderHistoryFacadeFactory() {
  return facadeFactory({
    facade: ReplenishmentOrderHistoryFacade,
    feature: ORDER_CORE_FEATURE,
    methods: ["loadReplenishmentOrderDetails", "getReplenishmentOrderDetails", "getReplenishmentOrderDetailsLoading", "getReplenishmentOrderDetailsSuccess", "getReplenishmentOrderDetailsError", "clearReplenishmentOrderDetails", "cancelReplenishmentOrder", "getCancelReplenishmentOrderLoading", "getCancelReplenishmentOrderSuccess", "getCancelReplenishmentOrderError", "clearCancelReplenishmentOrderProcessState", "getReplenishmentOrderHistoryList", "getReplenishmentOrderHistoryListLoading", "getReplenishmentOrderHistoryListError", "getReplenishmentOrderHistoryListSuccess", "loadReplenishmentOrderList", "clearReplenishmentOrderList"],
    async: true
  });
}
var _ReplenishmentOrderHistoryFacade = class _ReplenishmentOrderHistoryFacade {
};
_ReplenishmentOrderHistoryFacade.\u0275fac = function ReplenishmentOrderHistoryFacade_Factory(t) {
  return new (t || _ReplenishmentOrderHistoryFacade)();
};
_ReplenishmentOrderHistoryFacade.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
  token: _ReplenishmentOrderHistoryFacade,
  factory: () => replenishmentOrderHistoryFacadeFactory(),
  providedIn: "root"
});
var ReplenishmentOrderHistoryFacade = _ReplenishmentOrderHistoryFacade;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ReplenishmentOrderHistoryFacade, [{
    type: Injectable,
    args: [{
      providedIn: "root",
      useFactory: replenishmentOrderHistoryFacadeFactory
    }]
  }], null, null);
})();
var _ScheduledReplenishmentOrderFacade = class _ScheduledReplenishmentOrderFacade {
};
_ScheduledReplenishmentOrderFacade.\u0275fac = function ScheduledReplenishmentOrderFacade_Factory(t) {
  return new (t || _ScheduledReplenishmentOrderFacade)();
};
_ScheduledReplenishmentOrderFacade.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
  token: _ScheduledReplenishmentOrderFacade,
  factory: () => (() => facadeFactory({
    facade: _ScheduledReplenishmentOrderFacade,
    feature: ORDER_CORE_FEATURE,
    methods: ["scheduleReplenishmentOrder"]
  }))(),
  providedIn: "root"
});
var ScheduledReplenishmentOrderFacade = _ScheduledReplenishmentOrderFacade;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ScheduledReplenishmentOrderFacade, [{
    type: Injectable,
    args: [{
      providedIn: "root",
      useFactory: () => facadeFactory({
        facade: ScheduledReplenishmentOrderFacade,
        feature: ORDER_CORE_FEATURE,
        methods: ["scheduleReplenishmentOrder"]
      })
    }]
  }], null, null);
})();
var OrderOutlets;
(function(OrderOutlets2) {
  OrderOutlets2["ORDER_CONSIGNMENT"] = "cx-order-consignment";
  OrderOutlets2["CONSIGNMENT_DELIVERY_INFO"] = "cx-order-consignment-delivery-info";
})(OrderOutlets || (OrderOutlets = {}));
var DaysOfWeek;
(function(DaysOfWeek2) {
  DaysOfWeek2["MONDAY"] = "MONDAY";
  DaysOfWeek2["TUESDAY"] = "TUESDAY";
  DaysOfWeek2["WEDNESDAY"] = "WEDNESDAY";
  DaysOfWeek2["THURSDAY"] = "THURSDAY";
  DaysOfWeek2["FRIDAY"] = "FRIDAY";
  DaysOfWeek2["SATURDAY"] = "SATURDAY";
  DaysOfWeek2["SUNDAY"] = "SUNDAY";
})(DaysOfWeek || (DaysOfWeek = {}));
var ORDER_TYPE;
(function(ORDER_TYPE2) {
  ORDER_TYPE2["PLACE_ORDER"] = "PLACE_ORDER";
  ORDER_TYPE2["SCHEDULE_REPLENISHMENT_ORDER"] = "SCHEDULE_REPLENISHMENT_ORDER";
})(ORDER_TYPE || (ORDER_TYPE = {}));
var defaultOrderRoutingConfig = {
  routing: {
    routes: {
      orders: {
        paths: ["my-account/orders"]
      },
      orderDetails: {
        paths: ["my-account/order/:orderCode"],
        paramsMapping: {
          orderCode: "code"
        }
      },
      orderGuest: {
        paths: ["guest/order/:orderCode"],
        paramsMapping: {
          orderCode: "code"
        }
      },
      orderReturn: {
        paths: ["my-account/order/return/:orderCode"],
        paramsMapping: {
          orderCode: "code"
        }
      },
      orderReturnConfirmation: {
        paths: ["my-account/order/return/confirmation/:orderCode"],
        paramsMapping: {
          orderCode: "code"
        }
      },
      orderCancel: {
        paths: ["my-account/order/cancel/:orderCode"],
        paramsMapping: {
          orderCode: "code"
        }
      },
      orderCancelConfirmation: {
        paths: ["my-account/order/cancel/confirmation/:orderCode"],
        paramsMapping: {
          orderCode: "code"
        }
      },
      returnRequestDetails: {
        paths: ["my-account/return-request/:returnCode"],
        paramsMapping: {
          returnCode: "rma"
        }
      },
      replenishmentOrders: {
        paths: ["my-account/my-replenishments"]
      },
      replenishmentDetails: {
        paths: ["my-account/my-replenishment/:replenishmentOrderCode"],
        paramsMapping: {
          replenishmentOrderCode: "replenishmentOrderCode"
        }
      },
      replenishmentConfirmation: {
        paths: ["replenishment/confirmation"]
      },
      orderConfirmation: {
        paths: ["order-confirmation"]
      }
    }
  }
};
var OrderDetailsOrderEntriesContextToken = new InjectionToken("OrderDetailsOrderEntriesContext");
var OrderConfirmationOrderEntriesContextToken = new InjectionToken("OrderConfirmationOrderEntriesContext");
var USE_MY_ACCOUNT_V2_ORDER = new InjectionToken("feature flag to enable enhanced UI for Order related pages under My-Account", {
  providedIn: "root",
  factory: () => false
});
function defaultOrderComponentsConfig() {
  const config = {
    featureModules: {
      [ORDER_FEATURE]: {
        cmsComponents: ["CancelOrderComponent", "CancelOrderConfirmationComponent", "ReturnOrderComponent", "ReturnOrderConfirmationComponent", "AccountOrderDetailsActionsComponent", "AccountOrderDetailsItemsComponent", "AccountOrderDetailsTotalsComponent", "AccountOrderDetailsOverviewComponent", "AccountOrderDetailsBillingComponent", "AccountOrderDetailsGroupedItemsComponent", "AccountOrderDetailsSimpleOverviewComponent", "AccountOrderHistoryComponent", "ReplenishmentDetailItemsComponent", "AccountOrderDetailsReorderComponent", "ReplenishmentDetailTotalsComponent", "ReplenishmentDetailShippingComponent", "ReplenishmentDetailActionsComponent", "ReplenishmentDetailOrderHistoryComponent", "AccountReplenishmentHistoryComponent", "ReturnRequestOverviewComponent", "ReturnRequestItemsComponent", "ReturnRequestTotalsComponent", "OrderReturnRequestListComponent", "OrderConfirmationThankMessageComponent", "OrderConfirmationItemsComponent", "OrderConfirmationTotalsComponent", "OrderConfirmationOverviewComponent", "OrderConfirmationShippingComponent", "OrderConfirmationBillingComponent", "OrderConfirmationContinueButtonComponent", "ReplenishmentConfirmationMessageComponent", "ReplenishmentConfirmationOverviewComponent", "ReplenishmentConfirmationItemsComponent", "ReplenishmentConfirmationTotalsComponent", "MyAccountViewOrderComponent"],
        dependencies: [CART_BASE_FEATURE]
      },
      // by default core is bundled together with components
      [ORDER_CORE_FEATURE]: ORDER_FEATURE
    }
  };
  return config;
}
var _OrderRootModule = class _OrderRootModule {
};
_OrderRootModule.\u0275fac = function OrderRootModule_Factory(t) {
  return new (t || _OrderRootModule)();
};
_OrderRootModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
  type: _OrderRootModule
});
_OrderRootModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
  providers: [provideDefaultConfigFactory(defaultOrderComponentsConfig), provideDefaultConfig(defaultOrderRoutingConfig)],
  imports: [RouterModule.forChild([{
    // @ts-ignore
    path: null,
    canActivate: [AuthGuard, CmsPageGuard],
    component: PageLayoutComponent,
    data: {
      pageLabel: "order",
      cxRoute: "orderGuest"
    }
  }, {
    // @ts-ignore
    path: null,
    canActivate: [AuthGuard, CmsPageGuard],
    component: PageLayoutComponent,
    data: {
      cxRoute: "orderDetails",
      cxContext: {
        [ORDER_ENTRIES_CONTEXT]: OrderDetailsOrderEntriesContextToken
      }
    }
  }, {
    // @ts-ignore
    path: null,
    canActivate: [CmsPageGuard],
    component: PageLayoutComponent,
    data: {
      cxRoute: "orderCancel"
    }
  }, {
    // @ts-ignore
    path: null,
    canActivate: [CmsPageGuard],
    component: PageLayoutComponent,
    data: {
      cxRoute: "orderCancelConfirmation"
    }
  }, {
    // @ts-ignore
    path: null,
    canActivate: [CmsPageGuard],
    component: PageLayoutComponent,
    data: {
      cxRoute: "orderReturn"
    }
  }, {
    // @ts-ignore
    path: null,
    canActivate: [CmsPageGuard],
    component: PageLayoutComponent,
    data: {
      cxRoute: "orderReturnConfirmation"
    }
  }, {
    // @ts-ignore
    path: null,
    canActivate: [AuthGuard, CmsPageGuard],
    component: PageLayoutComponent,
    data: {
      cxRoute: "orders"
    }
  }, {
    // @ts-ignore
    path: null,
    canActivate: [AuthGuard, CmsPageGuard],
    component: PageLayoutComponent,
    data: {
      cxRoute: "replenishmentDetails"
    }
  }, {
    // @ts-ignore
    path: null,
    canActivate: [AuthGuard, CmsPageGuard],
    component: PageLayoutComponent,
    data: {
      cxRoute: "replenishmentOrders"
    }
  }, {
    // @ts-ignore
    path: null,
    canActivate: [AuthGuard, CmsPageGuard],
    component: PageLayoutComponent,
    data: {
      cxRoute: "returnRequestDetails"
    }
  }, {
    // @ts-ignore
    path: null,
    canActivate: [CmsPageGuard],
    component: PageLayoutComponent,
    data: {
      cxRoute: "orderConfirmation",
      cxContext: {
        [ORDER_ENTRIES_CONTEXT]: OrderConfirmationOrderEntriesContextToken
      }
    }
  }])]
});
var OrderRootModule = _OrderRootModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OrderRootModule, [{
    type: NgModule,
    args: [{
      imports: [RouterModule.forChild([{
        // @ts-ignore
        path: null,
        canActivate: [AuthGuard, CmsPageGuard],
        component: PageLayoutComponent,
        data: {
          pageLabel: "order",
          cxRoute: "orderGuest"
        }
      }, {
        // @ts-ignore
        path: null,
        canActivate: [AuthGuard, CmsPageGuard],
        component: PageLayoutComponent,
        data: {
          cxRoute: "orderDetails",
          cxContext: {
            [ORDER_ENTRIES_CONTEXT]: OrderDetailsOrderEntriesContextToken
          }
        }
      }, {
        // @ts-ignore
        path: null,
        canActivate: [CmsPageGuard],
        component: PageLayoutComponent,
        data: {
          cxRoute: "orderCancel"
        }
      }, {
        // @ts-ignore
        path: null,
        canActivate: [CmsPageGuard],
        component: PageLayoutComponent,
        data: {
          cxRoute: "orderCancelConfirmation"
        }
      }, {
        // @ts-ignore
        path: null,
        canActivate: [CmsPageGuard],
        component: PageLayoutComponent,
        data: {
          cxRoute: "orderReturn"
        }
      }, {
        // @ts-ignore
        path: null,
        canActivate: [CmsPageGuard],
        component: PageLayoutComponent,
        data: {
          cxRoute: "orderReturnConfirmation"
        }
      }, {
        // @ts-ignore
        path: null,
        canActivate: [AuthGuard, CmsPageGuard],
        component: PageLayoutComponent,
        data: {
          cxRoute: "orders"
        }
      }, {
        // @ts-ignore
        path: null,
        canActivate: [AuthGuard, CmsPageGuard],
        component: PageLayoutComponent,
        data: {
          cxRoute: "replenishmentDetails"
        }
      }, {
        // @ts-ignore
        path: null,
        canActivate: [AuthGuard, CmsPageGuard],
        component: PageLayoutComponent,
        data: {
          cxRoute: "replenishmentOrders"
        }
      }, {
        // @ts-ignore
        path: null,
        canActivate: [AuthGuard, CmsPageGuard],
        component: PageLayoutComponent,
        data: {
          cxRoute: "returnRequestDetails"
        }
      }, {
        // @ts-ignore
        path: null,
        canActivate: [CmsPageGuard],
        component: PageLayoutComponent,
        data: {
          cxRoute: "orderConfirmation",
          cxContext: {
            [ORDER_ENTRIES_CONTEXT]: OrderConfirmationOrderEntriesContextToken
          }
        }
      }])],
      providers: [provideDefaultConfigFactory(defaultOrderComponentsConfig), provideDefaultConfig(defaultOrderRoutingConfig)]
    }]
  }], null, null);
})();
var ORDER_NORMALIZER = new InjectionToken("OrderNormalizer");
var REPLENISHMENT_ORDER_NORMALIZER = new InjectionToken("ReplenishmentOrderNormalizer");
var REORDER_ORDER_NORMALIZER = new InjectionToken("ReorderOrderNormalizer");
var ORDER_HISTORY_NORMALIZER = new InjectionToken("OrderHistoryNormalizer");
var CONSIGNMENT_TRACKING_NORMALIZER = new InjectionToken("ConsignmentTrackingNormalizer");
var ORDER_RETURN_REQUEST_NORMALIZER = new InjectionToken("OrderReturnRequestNormalizer");
var ORDER_RETURN_REQUEST_INPUT_SERIALIZER = new InjectionToken("OrderReturnRequestInputSerializer");
var ORDER_RETURNS_NORMALIZER = new InjectionToken("OrderReturnsNormalizer");
var REPLENISHMENT_ORDER_HISTORY_NORMALIZER = new InjectionToken("ReplenishmentOrderHistoryNormalizer");
var REPLENISHMENT_ORDER_FORM_SERIALIZER = new InjectionToken("ReplenishmentOrderFormSerializer");
function deliveryAddressCard(textTitle, textPhone, textMobile, deliveryAddress, countryName) {
  if (!countryName) {
    countryName = deliveryAddress?.country?.name;
  }
  let region = "";
  if (deliveryAddress && deliveryAddress.region && deliveryAddress.region.isocode) {
    region = deliveryAddress.region.isocode + ", ";
  }
  const numbers = getAddressNumbers(deliveryAddress, textPhone, textMobile);
  let fullName;
  if (deliveryAddress.firstName && deliveryAddress.lastName) {
    fullName = deliveryAddress.firstName + " " + deliveryAddress.lastName;
  } else if (deliveryAddress.firstName) {
    fullName = deliveryAddress.firstName;
  } else if (deliveryAddress.lastName) {
    fullName = deliveryAddress.lastName;
  }
  return {
    title: textTitle,
    textBold: fullName,
    text: [deliveryAddress.line1, deliveryAddress.line2, deliveryAddress.town + ", " + region + countryName, deliveryAddress.postalCode, numbers]
  };
}
function deliveryModeCard(textTitle, deliveryMode) {
  return {
    title: textTitle,
    textBold: deliveryMode.name,
    text: [deliveryMode.description, deliveryMode.deliveryCost?.formattedValue ? deliveryMode.deliveryCost?.formattedValue : ""]
  };
}
function paymentMethodCard(textTitle, textExpires, paymentDetails) {
  return {
    title: textTitle,
    text: [paymentDetails.cardType?.name, paymentDetails.accountHolderName, paymentDetails.cardNumber, textExpires]
  };
}
function billingAddressCard(textTitle, textBillTo, paymentDetails) {
  const region = paymentDetails.billingAddress?.region?.isocode ? paymentDetails.billingAddress?.region?.isocode + ", " : "";
  return {
    title: textTitle,
    text: [textBillTo, paymentDetails.billingAddress?.firstName + " " + paymentDetails.billingAddress?.lastName, paymentDetails.billingAddress?.line1, paymentDetails.billingAddress?.town + ", " + region + paymentDetails.billingAddress?.country?.isocode, paymentDetails.billingAddress?.postalCode]
  };
}

export {
  OrderPlacedEvent,
  ReplenishmentOrderScheduledEvent,
  DownloadOrderInvoicesEvent,
  ORDER_FEATURE,
  OrderHistoryFacade,
  OrderReturnRequestFacade,
  OrderFacade,
  ReorderOrderFacade,
  ReplenishmentOrderHistoryFacade,
  ScheduledReplenishmentOrderFacade,
  OrderOutlets,
  OrderDetailsOrderEntriesContextToken,
  OrderConfirmationOrderEntriesContextToken,
  USE_MY_ACCOUNT_V2_ORDER,
  OrderRootModule,
  ORDER_NORMALIZER,
  REPLENISHMENT_ORDER_NORMALIZER,
  REORDER_ORDER_NORMALIZER,
  ORDER_HISTORY_NORMALIZER,
  CONSIGNMENT_TRACKING_NORMALIZER,
  ORDER_RETURN_REQUEST_NORMALIZER,
  ORDER_RETURN_REQUEST_INPUT_SERIALIZER,
  ORDER_RETURNS_NORMALIZER,
  REPLENISHMENT_ORDER_HISTORY_NORMALIZER,
  REPLENISHMENT_ORDER_FORM_SERIALIZER,
  deliveryAddressCard,
  deliveryModeCard,
  paymentMethodCard,
  billingAddressCard
};
//# sourceMappingURL=chunk-KOYJT3XI.js.map
