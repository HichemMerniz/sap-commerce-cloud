import './polyfills.server.mjs';
import {
  AddToCartComponent,
  AddToCartModule
} from "./chunk-G3WOJNYK.mjs";
import {
  CONSIGNMENT_TRACKING_NORMALIZER,
  DownloadOrderInvoicesEvent,
  ORDER_HISTORY_NORMALIZER,
  ORDER_NORMALIZER,
  ORDER_RETURNS_NORMALIZER,
  ORDER_RETURN_REQUEST_INPUT_SERIALIZER,
  ORDER_RETURN_REQUEST_NORMALIZER,
  OrderConfirmationOrderEntriesContextToken,
  OrderDetailsOrderEntriesContextToken,
  OrderFacade,
  OrderHistoryFacade,
  OrderOutlets,
  OrderPlacedEvent,
  OrderReturnRequestFacade,
  REORDER_ORDER_NORMALIZER,
  REPLENISHMENT_ORDER_FORM_SERIALIZER,
  REPLENISHMENT_ORDER_HISTORY_NORMALIZER,
  REPLENISHMENT_ORDER_NORMALIZER,
  ReorderOrderFacade,
  ReplenishmentOrderHistoryFacade,
  ReplenishmentOrderScheduledEvent,
  ScheduledReplenishmentOrderFacade,
  USE_MY_ACCOUNT_V2_ORDER,
  billingAddressCard,
  deliveryAddressCard,
  deliveryModeCard,
  paymentMethodCard
} from "./chunk-6BD7AOKI.mjs";
import {
  UserRegisterFacade
} from "./chunk-NLXOS75N.mjs";
import {
  ActiveCartFacade,
  CartOutlets,
  CartValidationStatusCode,
  MultiCartFacade,
  ORDER_ENTRY_PROMOTIONS_NORMALIZER,
  OrderEntriesSource,
  PromotionLocation
} from "./chunk-3NCZ7TRR.mjs";
import {
  AddToHomeScreenBannerComponent,
  CardComponent,
  CardModule,
  CmsComponentData,
  CustomFormValidators,
  DIALOG_TYPE,
  DatePickerModule,
  DefaultValueAccessor,
  FileDownloadService,
  FocusDirective,
  FormControlName,
  FormErrorsComponent,
  FormErrorsModule,
  FormGroupDirective,
  FormsModule,
  ICON_TYPE,
  IconComponent,
  IconModule,
  ItemCounterComponent,
  ItemCounterModule,
  KeyboardFocusModule,
  LaunchDialogService,
  ListNavigationModule,
  MediaComponent,
  MediaModule,
  MessageComponent,
  MessageComponentModule,
  NgControlStatus,
  NgControlStatusGroup,
  NgSelectModule,
  OutletContextData,
  OutletDirective,
  OutletModule,
  OutletPosition,
  OutletService,
  PaginationComponent,
  PaginationModule,
  PasswordVisibilityToggleDirective,
  PasswordVisibilityToggleModule,
  PromotionsComponent,
  PromotionsModule,
  PwaModule,
  ReactiveFormsModule,
  RequiredValidator,
  SortingComponent,
  SortingModule,
  SpinnerComponent,
  SpinnerModule,
  UntypedFormBuilder,
  UntypedFormControl,
  UntypedFormGroup,
  Validators,
  provideOutlet,
  ɵNgNoValidate
} from "./chunk-JOGQIABG.mjs";
import {
  Actions,
  AuthGuard,
  AuthService,
  CommandService,
  CommandStrategy,
  ConverterService,
  CxDatePipe,
  EffectsModule,
  EventService,
  FeatureDirective,
  FeaturesConfigModule,
  GlobalMessageService,
  GlobalMessageType,
  I18nModule,
  InterceptorUtil,
  LanguageService,
  LoggerService,
  MODULE_INITIALIZER,
  OCC_CART_ID_CURRENT,
  OCC_USER_ID_ANONYMOUS,
  OCC_USER_ID_CURRENT,
  OccEndpointsService,
  PROCESS_FEATURE,
  PRODUCT_NORMALIZER,
  Router,
  RouterLink,
  RouterLinkActive,
  RouterModule,
  RoutingService,
  SemanticPathService,
  Store,
  StoreModule,
  TimeUtils,
  TranslatePipe,
  TranslationService,
  USE_CLIENT_TOKEN,
  UrlModule,
  UrlPipe,
  UserIdService,
  backOff,
  createEffect,
  createFeatureSelector,
  createSelector,
  facadeFactory,
  isJaloError,
  isNotUndefined,
  normalizeHttpError,
  ofType,
  process_selectors,
  provideDefaultConfig,
  provideDefaultConfigFactory,
  select,
  siteContextGroup_actions,
  utilsGroup
} from "./chunk-AFAMYKVR.mjs";
import {
  AsyncPipe,
  BehaviorSubject,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  CommonModule,
  Component,
  ComponentFactoryResolver$1,
  EMPTY,
  ElementRef,
  HostBinding,
  HostListener,
  HttpClient,
  HttpHeaders,
  Injectable,
  InjectionToken,
  Input,
  NgClass,
  NgForOf,
  NgIf,
  NgModule,
  NgTemplateOutlet,
  Optional,
  SlicePipe,
  Subscription,
  ViewChild,
  ViewContainerRef,
  auditTime,
  catchError,
  combineLatest,
  concatMap,
  distinctUntilChanged,
  filter,
  first,
  formatCurrency,
  getCurrencySymbol,
  inject,
  map,
  of,
  setClassMetadata,
  shareReplay,
  skip,
  startWith,
  switchMap,
  take,
  tap,
  using,
  withLatestFrom,
  ɵɵInheritDefinitionFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMap,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainer,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵgetInheritedFactory,
  ɵɵhostProperty,
  ɵɵinject,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵpipeBind3,
  ɵɵproperty,
  ɵɵpropertyInterpolate,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵpureFunction2,
  ɵɵpureFunction3,
  ɵɵpureFunction4,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵviewQuery
} from "./chunk-3LP6MEWW.mjs";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-JBYB2SS7.mjs";

// node_modules/@spartacus/order/fesm2022/spartacus-order-core.mjs
var OrderHistoryAdapter = class {
};
var _OrderHistoryConnector = class _OrderHistoryConnector {
  constructor(adapter) {
    this.adapter = adapter;
  }
  get(userId, orderCode) {
    return this.adapter.load(userId, orderCode);
  }
  getHistory(userId, pageSize, currentPage, sort) {
    return this.adapter.loadHistory(userId, pageSize, currentPage, sort);
  }
  getConsignmentTracking(orderCode, consignmentCode, userId) {
    return this.adapter.getConsignmentTracking(orderCode, consignmentCode, userId);
  }
  cancel(userId, orderCode, cancelRequestInput) {
    return this.adapter.cancel(userId, orderCode, cancelRequestInput);
  }
  return(userId, returnRequestInput) {
    return this.adapter.createReturnRequest(userId, returnRequestInput);
  }
  getReturnRequestDetail(userId, returnRequestCode) {
    return this.adapter.loadReturnRequestDetail(userId, returnRequestCode);
  }
  getReturnRequestList(userId, pageSize, currentPage, sort) {
    return this.adapter.loadReturnRequestList(userId, pageSize, currentPage, sort);
  }
  cancelReturnRequest(userId, returnRequestCode, returnRequestModification) {
    return this.adapter.cancelReturnRequest(userId, returnRequestCode, returnRequestModification);
  }
};
_OrderHistoryConnector.\u0275fac = function OrderHistoryConnector_Factory(t) {
  return new (t || _OrderHistoryConnector)(\u0275\u0275inject(OrderHistoryAdapter));
};
_OrderHistoryConnector.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
  token: _OrderHistoryConnector,
  factory: _OrderHistoryConnector.\u0275fac
});
var OrderHistoryConnector = _OrderHistoryConnector;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OrderHistoryConnector, [{
    type: Injectable
  }], () => [{
    type: OrderHistoryAdapter
  }], null);
})();
var OrderAdapter = class {
};
var _OrderConnector = class _OrderConnector {
  constructor(adapter) {
    this.adapter = adapter;
  }
  placeOrder(userId, cartId, termsChecked) {
    return this.adapter.placeOrder(userId, cartId, termsChecked);
  }
};
_OrderConnector.\u0275fac = function OrderConnector_Factory(t) {
  return new (t || _OrderConnector)(\u0275\u0275inject(OrderAdapter));
};
_OrderConnector.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
  token: _OrderConnector,
  factory: _OrderConnector.\u0275fac
});
var OrderConnector = _OrderConnector;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OrderConnector, [{
    type: Injectable
  }], () => [{
    type: OrderAdapter
  }], null);
})();
var ReorderOrderAdapter = class {
};
var _ReorderOrderConnector = class _ReorderOrderConnector {
  constructor(adapter) {
    this.adapter = adapter;
  }
  reorder(orderId, userId) {
    return this.adapter.reorder(orderId, userId);
  }
};
_ReorderOrderConnector.\u0275fac = function ReorderOrderConnector_Factory(t) {
  return new (t || _ReorderOrderConnector)(\u0275\u0275inject(ReorderOrderAdapter));
};
_ReorderOrderConnector.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
  token: _ReorderOrderConnector,
  factory: _ReorderOrderConnector.\u0275fac
});
var ReorderOrderConnector = _ReorderOrderConnector;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ReorderOrderConnector, [{
    type: Injectable
  }], () => [{
    type: ReorderOrderAdapter
  }], null);
})();
var ReplenishmentOrderHistoryAdapter = class {
};
var _ReplenishmentOrderHistoryConnector = class _ReplenishmentOrderHistoryConnector {
  constructor(adapter) {
    this.adapter = adapter;
  }
  load(userId, replenishmentOrderCode) {
    return this.adapter.load(userId, replenishmentOrderCode);
  }
  loadReplenishmentDetailsHistory(userId, replenishmentOrderCode, pageSize, currentPage, sort) {
    return this.adapter.loadReplenishmentDetailsHistory(userId, replenishmentOrderCode, pageSize, currentPage, sort);
  }
  cancelReplenishmentOrder(userId, replenishmentOrderCode) {
    return this.adapter.cancelReplenishmentOrder(userId, replenishmentOrderCode);
  }
  loadHistory(userId, pageSize, currentPage, sort) {
    return this.adapter.loadHistory(userId, pageSize, currentPage, sort);
  }
};
_ReplenishmentOrderHistoryConnector.\u0275fac = function ReplenishmentOrderHistoryConnector_Factory(t) {
  return new (t || _ReplenishmentOrderHistoryConnector)(\u0275\u0275inject(ReplenishmentOrderHistoryAdapter));
};
_ReplenishmentOrderHistoryConnector.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
  token: _ReplenishmentOrderHistoryConnector,
  factory: _ReplenishmentOrderHistoryConnector.\u0275fac
});
var ReplenishmentOrderHistoryConnector = _ReplenishmentOrderHistoryConnector;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ReplenishmentOrderHistoryConnector, [{
    type: Injectable
  }], () => [{
    type: ReplenishmentOrderHistoryAdapter
  }], null);
})();
var ScheduledReplenishmentOrderAdapter = class {
};
var _ScheduledReplenishmentOrderConnector = class _ScheduledReplenishmentOrderConnector {
  constructor(adapter) {
    this.adapter = adapter;
  }
  scheduleReplenishmentOrder(cartId, scheduleReplenishmentForm, termsChecked, userId) {
    return this.adapter.scheduleReplenishmentOrder(cartId, scheduleReplenishmentForm, termsChecked, userId);
  }
};
_ScheduledReplenishmentOrderConnector.\u0275fac = function ScheduledReplenishmentOrderConnector_Factory(t) {
  return new (t || _ScheduledReplenishmentOrderConnector)(\u0275\u0275inject(ScheduledReplenishmentOrderAdapter));
};
_ScheduledReplenishmentOrderConnector.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
  token: _ScheduledReplenishmentOrderConnector,
  factory: _ScheduledReplenishmentOrderConnector.\u0275fac
});
var ScheduledReplenishmentOrderConnector = _ScheduledReplenishmentOrderConnector;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ScheduledReplenishmentOrderConnector, [{
    type: Injectable
  }], () => [{
    type: ScheduledReplenishmentOrderAdapter
  }], null);
})();
var LOAD_CONSIGNMENT_TRACKING = "[Order] Load Consignment Tracking";
var LOAD_CONSIGNMENT_TRACKING_FAIL = "[Order] Load Consignment Tracking Fail";
var LOAD_CONSIGNMENT_TRACKING_SUCCESS = "[Order] Load Consignment Tracking Success";
var CLEAR_CONSIGNMENT_TRACKING = "[Order] Clear Consignment Tracking";
var LoadConsignmentTracking = class {
  constructor(payload) {
    this.payload = payload;
    this.type = LOAD_CONSIGNMENT_TRACKING;
  }
};
var LoadConsignmentTrackingFail = class {
  constructor(payload) {
    this.payload = payload;
    this.type = LOAD_CONSIGNMENT_TRACKING_FAIL;
  }
};
var LoadConsignmentTrackingSuccess = class {
  constructor(payload) {
    this.payload = payload;
    this.type = LOAD_CONSIGNMENT_TRACKING_SUCCESS;
  }
};
var ClearConsignmentTracking = class {
  constructor() {
    this.type = CLEAR_CONSIGNMENT_TRACKING;
  }
};
var ORDER_FEATURE = "order";
var CANCEL_ORDER_PROCESS_ID = "cancelOrder";
var CANCEL_RETURN_PROCESS_ID = "cancelReturn";
var CANCEL_REPLENISHMENT_ORDER_PROCESS_ID = "cancelReplenishmentOrder";
var ORDERS = "[Order] User Orders";
var RETURN_REQUESTS = "[Order] Order Return Requests";
var RETURN_REQUEST_DETAILS = "[Order] Return Request Details";
var ORDER_DETAILS = "[Order] User Order Details";
var REPLENISHMENT_ORDERS = "[Order] User Replenishment Orders";
var REPLENISHMENT_ORDER_DETAILS = "[Order] User Replenishment Order Details";
var CONSIGNMENT_TRACKING_BY_ID_ENTITIES = "consignment-tracking-by-id-entities";
var ORDER_BY_ID_ENTITIES = "order-by-id-entities";
function getConsignmentTrackingByIdEntityKey(orderCode, consignmentCode) {
  return `${orderCode},${consignmentCode}`;
}
var LOAD_ORDER_DETAILS = "[Order] Load Order Details";
var LOAD_ORDER_DETAILS_FAIL = "[Order] Load Order Details Fail";
var LOAD_ORDER_DETAILS_SUCCESS = "[Order] Load Order Details Success";
var CLEAR_ORDER_DETAILS = "[Order] Clear Order Details";
var CANCEL_ORDER = "[Order] Cancel Order";
var CANCEL_ORDER_FAIL = "[Order] Cancel Order Fail";
var CANCEL_ORDER_SUCCESS = "[Order] Cancel Order Success";
var RESET_CANCEL_ORDER_PROCESS = "[Order] Reset Cancel Order Process";
var LoadOrderDetails = class extends utilsGroup.LoaderLoadAction {
  constructor(payload) {
    super(ORDER_DETAILS);
    this.payload = payload;
    this.type = LOAD_ORDER_DETAILS;
  }
};
var LoadOrderDetailsFail = class extends utilsGroup.LoaderFailAction {
  constructor(payload) {
    super(ORDER_DETAILS, payload);
    this.payload = payload;
    this.type = LOAD_ORDER_DETAILS_FAIL;
  }
};
var LoadOrderDetailsSuccess = class extends utilsGroup.LoaderSuccessAction {
  constructor(payload) {
    super(ORDER_DETAILS);
    this.payload = payload;
    this.type = LOAD_ORDER_DETAILS_SUCCESS;
  }
};
var ClearOrderDetails = class extends utilsGroup.LoaderResetAction {
  constructor() {
    super(ORDER_DETAILS);
    this.type = CLEAR_ORDER_DETAILS;
  }
};
var CancelOrder = class extends utilsGroup.EntityLoadAction {
  constructor(payload) {
    super(PROCESS_FEATURE, CANCEL_ORDER_PROCESS_ID);
    this.payload = payload;
    this.type = CANCEL_ORDER;
  }
};
var CancelOrderFail = class extends utilsGroup.EntityFailAction {
  constructor(payload) {
    super(PROCESS_FEATURE, CANCEL_ORDER_PROCESS_ID, payload);
    this.payload = payload;
    this.type = CANCEL_ORDER_FAIL;
  }
};
var CancelOrderSuccess = class extends utilsGroup.EntitySuccessAction {
  constructor() {
    super(PROCESS_FEATURE, CANCEL_ORDER_PROCESS_ID);
    this.type = CANCEL_ORDER_SUCCESS;
  }
};
var ResetCancelOrderProcess = class extends utilsGroup.EntityLoaderResetAction {
  constructor() {
    super(PROCESS_FEATURE, CANCEL_ORDER_PROCESS_ID);
    this.type = RESET_CANCEL_ORDER_PROCESS;
  }
};
var CREATE_ORDER_RETURN_REQUEST = "[Order] Create Order Return Request";
var CREATE_ORDER_RETURN_REQUEST_FAIL = "[Order] Create Order Return Request Fail";
var CREATE_ORDER_RETURN_REQUEST_SUCCESS = "[Order] Create Order Return Request Success";
var LOAD_ORDER_RETURN_REQUEST = "[Order] Load Order Return Request details";
var LOAD_ORDER_RETURN_REQUEST_FAIL = "[Order] Load Order Return Request details Fail";
var LOAD_ORDER_RETURN_REQUEST_SUCCESS = "[Order] Load Order Return Request details Success";
var CANCEL_ORDER_RETURN_REQUEST = "[Order] Cancel Order Return Request";
var CANCEL_ORDER_RETURN_REQUEST_FAIL = "[Order] Cancel Order Return Request Fail";
var CANCEL_ORDER_RETURN_REQUEST_SUCCESS = "[Order] Cancel Order Return Request Success";
var LOAD_ORDER_RETURN_REQUEST_LIST = "[Order] Load User Order Return Request List";
var LOAD_ORDER_RETURN_REQUEST_LIST_FAIL = "[Order] Load User Order Return Request List Fail";
var LOAD_ORDER_RETURN_REQUEST_LIST_SUCCESS = "[Order] Load User Order Return Request List Success";
var CLEAR_ORDER_RETURN_REQUEST = "[Order] Clear Order Return Request Details";
var CLEAR_ORDER_RETURN_REQUEST_LIST = "[Order] Clear Order Return Request List";
var RESET_CANCEL_RETURN_PROCESS = "[Order] Reset Cancel Return Request Process";
var CreateOrderReturnRequest = class extends utilsGroup.LoaderLoadAction {
  constructor(payload) {
    super(RETURN_REQUEST_DETAILS);
    this.payload = payload;
    this.type = CREATE_ORDER_RETURN_REQUEST;
  }
};
var CreateOrderReturnRequestFail = class extends utilsGroup.LoaderFailAction {
  constructor(payload) {
    super(RETURN_REQUEST_DETAILS, payload);
    this.payload = payload;
    this.type = CREATE_ORDER_RETURN_REQUEST_FAIL;
  }
};
var CreateOrderReturnRequestSuccess = class extends utilsGroup.LoaderSuccessAction {
  constructor(payload) {
    super(RETURN_REQUEST_DETAILS);
    this.payload = payload;
    this.type = CREATE_ORDER_RETURN_REQUEST_SUCCESS;
  }
};
var LoadOrderReturnRequest = class extends utilsGroup.LoaderLoadAction {
  constructor(payload) {
    super(RETURN_REQUEST_DETAILS);
    this.payload = payload;
    this.type = LOAD_ORDER_RETURN_REQUEST;
  }
};
var LoadOrderReturnRequestFail = class extends utilsGroup.LoaderFailAction {
  constructor(payload) {
    super(RETURN_REQUEST_DETAILS, payload);
    this.payload = payload;
    this.type = LOAD_ORDER_RETURN_REQUEST_FAIL;
  }
};
var LoadOrderReturnRequestSuccess = class extends utilsGroup.LoaderSuccessAction {
  constructor(payload) {
    super(RETURN_REQUEST_DETAILS);
    this.payload = payload;
    this.type = LOAD_ORDER_RETURN_REQUEST_SUCCESS;
  }
};
var CancelOrderReturnRequest = class extends utilsGroup.EntityLoadAction {
  constructor(payload) {
    super(PROCESS_FEATURE, CANCEL_RETURN_PROCESS_ID);
    this.payload = payload;
    this.type = CANCEL_ORDER_RETURN_REQUEST;
  }
};
var CancelOrderReturnRequestFail = class extends utilsGroup.EntityFailAction {
  constructor(payload) {
    super(PROCESS_FEATURE, CANCEL_RETURN_PROCESS_ID, payload);
    this.payload = payload;
    this.type = CANCEL_ORDER_RETURN_REQUEST_FAIL;
  }
};
var CancelOrderReturnRequestSuccess = class extends utilsGroup.EntitySuccessAction {
  constructor() {
    super(PROCESS_FEATURE, CANCEL_RETURN_PROCESS_ID);
    this.type = CANCEL_ORDER_RETURN_REQUEST_SUCCESS;
  }
};
var LoadOrderReturnRequestList = class extends utilsGroup.LoaderLoadAction {
  constructor(payload) {
    super(RETURN_REQUESTS);
    this.payload = payload;
    this.type = LOAD_ORDER_RETURN_REQUEST_LIST;
  }
};
var LoadOrderReturnRequestListFail = class extends utilsGroup.LoaderFailAction {
  constructor(payload) {
    super(RETURN_REQUESTS, payload);
    this.payload = payload;
    this.type = LOAD_ORDER_RETURN_REQUEST_LIST_FAIL;
  }
};
var LoadOrderReturnRequestListSuccess = class extends utilsGroup.LoaderSuccessAction {
  constructor(payload) {
    super(RETURN_REQUESTS);
    this.payload = payload;
    this.type = LOAD_ORDER_RETURN_REQUEST_LIST_SUCCESS;
  }
};
var ClearOrderReturnRequest = class extends utilsGroup.LoaderResetAction {
  constructor() {
    super(RETURN_REQUEST_DETAILS);
    this.type = CLEAR_ORDER_RETURN_REQUEST;
  }
};
var ClearOrderReturnRequestList = class extends utilsGroup.LoaderResetAction {
  constructor() {
    super(RETURN_REQUESTS);
    this.type = CLEAR_ORDER_RETURN_REQUEST_LIST;
  }
};
var ResetCancelReturnProcess = class extends utilsGroup.EntityLoaderResetAction {
  constructor() {
    super(PROCESS_FEATURE, CANCEL_RETURN_PROCESS_ID);
    this.type = RESET_CANCEL_RETURN_PROCESS;
  }
};
var LOAD_USER_ORDERS = "[Order] Load User Orders";
var LOAD_USER_ORDERS_FAIL = "[Order] Load User Orders Fail";
var LOAD_USER_ORDERS_SUCCESS = "[Order] Load User Orders Success";
var CLEAR_USER_ORDERS = "[Order] Clear User Orders";
var LoadUserOrders = class extends utilsGroup.LoaderLoadAction {
  constructor(payload) {
    super(ORDERS);
    this.payload = payload;
    this.type = LOAD_USER_ORDERS;
  }
};
var LoadUserOrdersFail = class extends utilsGroup.LoaderFailAction {
  constructor(payload) {
    super(ORDERS, payload);
    this.payload = payload;
    this.type = LOAD_USER_ORDERS_FAIL;
  }
};
var LoadUserOrdersSuccess = class extends utilsGroup.LoaderSuccessAction {
  constructor(payload) {
    super(ORDERS);
    this.payload = payload;
    this.type = LOAD_USER_ORDERS_SUCCESS;
  }
};
var ClearUserOrders = class extends utilsGroup.LoaderResetAction {
  constructor() {
    super(ORDERS);
    this.type = CLEAR_USER_ORDERS;
  }
};
var LOAD_REPLENISHMENT_ORDER_DETAILS = "[Order] Load Replenishment Order Details";
var LOAD_REPLENISHMENT_ORDER_DETAILS_SUCCESS = "[Order] Load Replenishment Order Details Success";
var LOAD_REPLENISHMENT_ORDER_DETAILS_FAIL = "[Order] Load Replenishment Order Details Fail";
var ClEAR_REPLENISHMENT_ORDER_DETAILS = "[Order] Clear Replenishment Order Details";
var CANCEL_REPLENISHMENT_ORDER = "[Order] Cancel Replenishment Order";
var CANCEL_REPLENISHMENT_ORDER_SUCCESS = "[Order] Cancel Replenishment Order Success";
var CANCEL_REPLENISHMENT_ORDER_FAIL = "[Order] Cancel Replenishment Order Fail";
var CLEAR_CANCEL_REPLENISHMENT_ORDER = "[Order] Clear Cancel Replenishment Order";
var LoadReplenishmentOrderDetails = class extends utilsGroup.LoaderLoadAction {
  constructor(payload) {
    super(REPLENISHMENT_ORDER_DETAILS);
    this.payload = payload;
    this.type = LOAD_REPLENISHMENT_ORDER_DETAILS;
  }
};
var LoadReplenishmentOrderDetailsSuccess = class extends utilsGroup.LoaderSuccessAction {
  constructor(payload) {
    super(REPLENISHMENT_ORDER_DETAILS);
    this.payload = payload;
    this.type = LOAD_REPLENISHMENT_ORDER_DETAILS_SUCCESS;
  }
};
var LoadReplenishmentOrderDetailsFail = class extends utilsGroup.LoaderFailAction {
  constructor(payload) {
    super(REPLENISHMENT_ORDER_DETAILS, payload);
    this.payload = payload;
    this.type = LOAD_REPLENISHMENT_ORDER_DETAILS_FAIL;
  }
};
var ClearReplenishmentOrderDetails = class extends utilsGroup.LoaderResetAction {
  constructor() {
    super(REPLENISHMENT_ORDER_DETAILS);
    this.type = ClEAR_REPLENISHMENT_ORDER_DETAILS;
  }
};
var CancelReplenishmentOrder = class extends utilsGroup.EntityLoadAction {
  constructor(payload) {
    super(PROCESS_FEATURE, CANCEL_REPLENISHMENT_ORDER_PROCESS_ID);
    this.payload = payload;
    this.type = CANCEL_REPLENISHMENT_ORDER;
  }
};
var CancelReplenishmentOrderSuccess = class extends utilsGroup.EntitySuccessAction {
  constructor(payload) {
    super(PROCESS_FEATURE, CANCEL_REPLENISHMENT_ORDER_PROCESS_ID);
    this.payload = payload;
    this.type = CANCEL_REPLENISHMENT_ORDER_SUCCESS;
  }
};
var CancelReplenishmentOrderFail = class extends utilsGroup.EntityFailAction {
  constructor(payload) {
    super(PROCESS_FEATURE, CANCEL_REPLENISHMENT_ORDER_PROCESS_ID, payload);
    this.payload = payload;
    this.type = CANCEL_REPLENISHMENT_ORDER_FAIL;
  }
};
var ClearCancelReplenishmentOrder = class extends utilsGroup.EntityLoaderResetAction {
  constructor() {
    super(PROCESS_FEATURE, CANCEL_REPLENISHMENT_ORDER_PROCESS_ID);
    this.type = CLEAR_CANCEL_REPLENISHMENT_ORDER;
  }
};
var LOAD_USER_REPLENISHMENT_ORDERS = "[Order] Load User Replenishment Orders";
var LOAD_USER_REPLENISHMENT_ORDERS_FAIL = "[Order] Load User Replenishment Orders Fail";
var LOAD_USER_REPLENISHMENT_ORDERS_SUCCESS = "[Order] Load User Replenishment Orders Success";
var CLEAR_USER_REPLENISHMENT_ORDERS = "[Order] Clear User Replenishment Orders";
var LoadUserReplenishmentOrders = class extends utilsGroup.LoaderLoadAction {
  constructor(payload) {
    super(REPLENISHMENT_ORDERS);
    this.payload = payload;
    this.type = LOAD_USER_REPLENISHMENT_ORDERS;
  }
};
var LoadUserReplenishmentOrdersFail = class extends utilsGroup.LoaderFailAction {
  constructor(payload) {
    super(REPLENISHMENT_ORDERS, payload);
    this.payload = payload;
    this.type = LOAD_USER_REPLENISHMENT_ORDERS_FAIL;
  }
};
var LoadUserReplenishmentOrdersSuccess = class extends utilsGroup.LoaderSuccessAction {
  constructor(payload) {
    super(REPLENISHMENT_ORDERS);
    this.payload = payload;
    this.type = LOAD_USER_REPLENISHMENT_ORDERS_SUCCESS;
  }
};
var ClearUserReplenishmentOrders = class extends utilsGroup.LoaderResetAction {
  constructor() {
    super(REPLENISHMENT_ORDERS);
    this.type = CLEAR_USER_REPLENISHMENT_ORDERS;
  }
};
var LOAD_CONSIGNMENT_TRACKING_BY_ID = "[Order] Load Consignment Tracking By ID Data";
var LOAD_CONSIGNMENT_TRACKING_BY_ID_FAIL = "[Order] Load  Consignment Tracking By ID Data Fail";
var LOAD_CONSIGNMENT_TRACKING_BY_ID_SUCCESS = "[Order] Load Consignment Tracking By ID Data Success";
var LoadConsignmentTrackingById = class extends utilsGroup.EntityLoadAction {
  constructor(payload) {
    super(CONSIGNMENT_TRACKING_BY_ID_ENTITIES, getConsignmentTrackingByIdEntityKey(payload.orderCode, payload.consignmentCode));
    this.payload = payload;
    this.type = LOAD_CONSIGNMENT_TRACKING_BY_ID;
  }
};
var LoadConsignmentTrackingByIdFail = class extends utilsGroup.EntityFailAction {
  constructor(payload) {
    super(CONSIGNMENT_TRACKING_BY_ID_ENTITIES, getConsignmentTrackingByIdEntityKey(payload.orderCode, payload.consignmentCode), payload.error);
    this.payload = payload;
    this.type = LOAD_CONSIGNMENT_TRACKING_BY_ID_FAIL;
  }
};
var LoadConsignmentTrackingByIdSuccess = class extends utilsGroup.EntitySuccessAction {
  constructor(payload) {
    super(CONSIGNMENT_TRACKING_BY_ID_ENTITIES, getConsignmentTrackingByIdEntityKey(payload.orderCode, payload.consignmentCode));
    this.payload = payload;
    this.type = LOAD_CONSIGNMENT_TRACKING_BY_ID_SUCCESS;
  }
};
var LOAD_ORDER_BY_ID = "[Order] Load Order By ID Data";
var LOAD_ORDER_BY_ID_FAIL = "[Order] Load Order By ID Data Fail";
var LOAD_ORDER_BY_ID_SUCCESS = "[Order] Load Order By ID Data Success";
var LoadOrderById = class extends utilsGroup.EntityLoadAction {
  constructor(payload) {
    super(ORDER_BY_ID_ENTITIES, payload.code);
    this.payload = payload;
    this.type = LOAD_ORDER_BY_ID;
  }
};
var LoadOrderByIdFail = class extends utilsGroup.EntityFailAction {
  constructor(payload) {
    super(ORDER_BY_ID_ENTITIES, payload.code, payload.error);
    this.payload = payload;
    this.type = LOAD_ORDER_BY_ID_FAIL;
  }
};
var LoadOrderByIdSuccess = class extends utilsGroup.EntitySuccessAction {
  constructor(payload) {
    super(ORDER_BY_ID_ENTITIES, payload.code ?? "");
    this.payload = payload;
    this.type = LOAD_ORDER_BY_ID_SUCCESS;
  }
};
var getOrderState = createFeatureSelector(ORDER_FEATURE);
var getConsignmentTrackingState = createSelector(getOrderState, (state) => state.consignmentTracking);
var getConsignmentTracking = createSelector(getConsignmentTrackingState, (state) => state.tracking);
var getOrderDetailState = createSelector(getOrderState, (state) => state.orderDetail);
var getOrderDetails = createSelector(getOrderDetailState, (state) => utilsGroup.loaderValueSelector(state));
var getOrderDetailsLoading = createSelector(getOrderDetailState, (state) => utilsGroup.loaderLoadingSelector(state));
var getOrderReturnRequestState = createSelector(getOrderState, (state) => state.orderReturn);
var getOrderReturnRequest = createSelector(getOrderReturnRequestState, (state) => utilsGroup.loaderValueSelector(state));
var getOrderReturnRequestLoading = createSelector(getOrderReturnRequestState, (state) => utilsGroup.loaderLoadingSelector(state));
var getOrderReturnRequestSuccess = createSelector(getOrderReturnRequestState, (state) => utilsGroup.loaderSuccessSelector(state) && !utilsGroup.loaderLoadingSelector(state));
var getOrderReturnRequestListState = createSelector(getOrderState, (state) => state.orderReturnList);
var getOrderReturnRequestList = createSelector(getOrderReturnRequestListState, (state) => utilsGroup.loaderValueSelector(state));
var getOrdersState = createSelector(getOrderState, (state) => state.orders);
var getOrdersLoaded = createSelector(getOrdersState, (state) => utilsGroup.loaderSuccessSelector(state));
var getOrders = createSelector(getOrdersState, (state) => utilsGroup.loaderValueSelector(state));
var getReplenishmentOrderState = createSelector(getOrderState, (state) => state.replenishmentOrder);
var getReplenishmentOrderDetailsValue = createSelector(getReplenishmentOrderState, (state) => utilsGroup.loaderValueSelector(state));
var getReplenishmentOrderDetailsLoading = createSelector(getReplenishmentOrderState, (state) => utilsGroup.loaderLoadingSelector(state));
var getReplenishmentOrderDetailsSuccess = createSelector(getReplenishmentOrderState, (state) => utilsGroup.loaderSuccessSelector(state));
var getReplenishmentOrderDetailsError = createSelector(getReplenishmentOrderState, (state) => utilsGroup.loaderErrorSelector(state));
var getReplenishmentOrdersState = createSelector(getOrderState, (state) => state.replenishmentOrders);
var getReplenishmentOrders = createSelector(getReplenishmentOrdersState, (state) => utilsGroup.loaderValueSelector(state));
var getReplenishmentOrdersLoading = createSelector(getReplenishmentOrdersState, (state) => utilsGroup.loaderLoadingSelector(state));
var getReplenishmentOrdersError = createSelector(getReplenishmentOrdersState, (state) => utilsGroup.loaderErrorSelector(state));
var getReplenishmentOrdersSuccess = createSelector(getReplenishmentOrdersState, (state) => utilsGroup.loaderSuccessSelector(state));
var getConsignmentTrackingByIdEntities = createSelector(getOrderState, (state) => state.consignmentTrackingById);
var getConsignmentTrackingByIdEntity = (orderCode, consignmentCode) => createSelector(getConsignmentTrackingByIdEntities, (state) => utilsGroup.entityLoaderStateSelector(state, getConsignmentTrackingByIdEntityKey(orderCode, consignmentCode)));
var getConsignmentTrackingById = (orderCode, consignmentCode) => {
  return createSelector(getConsignmentTrackingByIdEntity(orderCode, consignmentCode), (consignmentTrackingByIdState) => utilsGroup.loaderValueSelector(consignmentTrackingByIdState));
};
var getOrderByIdEntities = createSelector(getOrderState, (state) => state.orderById);
var getOrderByIdEntity = (code) => createSelector(getOrderByIdEntities, (state) => utilsGroup.entityLoaderStateSelector(state, code));
var getOrderById = (code) => {
  return createSelector(getOrderByIdEntity(code), (orderByIDState) => utilsGroup.loaderValueSelector(orderByIDState));
};
var _OrderHistoryService = class _OrderHistoryService {
  constructor(store, processStateStore, userIdService, routingService) {
    this.store = store;
    this.processStateStore = processStateStore;
    this.userIdService = userIdService;
    this.routingService = routingService;
  }
  /**
   * Returns an order's detail
   */
  getOrderDetails() {
    return this.store.pipe(select(getOrderDetails));
  }
  /**
   * Retrieves order's details
   *
   * @param orderCode an order code
   */
  loadOrderDetails(orderCode) {
    this.userIdService.takeUserId().subscribe((userId) => {
      this.store.dispatch(new LoadOrderDetails({
        userId,
        orderCode
      }));
    });
  }
  /**
   * Clears order's details
   */
  clearOrderDetails() {
    this.store.dispatch(new ClearOrderDetails());
  }
  /**
   * Returns order history list
   */
  getOrderHistoryList(pageSize) {
    return this.store.pipe(select(getOrdersState), tap((orderListState) => {
      const attemptedLoad = orderListState.loading || orderListState.success || orderListState.error;
      if (!attemptedLoad) {
        this.loadOrderList(pageSize);
      }
    }), map((orderListState) => orderListState.value));
  }
  /**
   * Returns a loaded flag for order history list
   */
  getOrderHistoryListLoaded() {
    return this.store.pipe(select(getOrdersLoaded));
  }
  /**
   * Retrieves an order list
   * @param pageSize page size
   * @param currentPage current page
   * @param sort sort
   */
  loadOrderList(pageSize, currentPage, sort) {
    this.userIdService.takeUserId(true).subscribe({
      next: (userId) => {
        let replenishmentOrderCode;
        this.routingService.getRouterState().pipe(take(1)).subscribe((data) => {
          replenishmentOrderCode = data?.state?.params?.replenishmentOrderCode;
        }).unsubscribe();
        this.store.dispatch(new LoadUserOrders({
          userId,
          pageSize,
          currentPage,
          sort,
          replenishmentOrderCode
        }));
      },
      error: () => {
      }
    });
  }
  /**
   * Cleaning order list
   */
  clearOrderList() {
    this.store.dispatch(new ClearUserOrders());
  }
  /**
   *  Returns a consignment tracking detail
   */
  getConsignmentTracking() {
    return this.store.pipe(select(getConsignmentTracking));
  }
  /**
   * Retrieves consignment tracking details
   * @param orderCode an order code
   * @param consignmentCode a consignment code
   */
  loadConsignmentTracking(orderCode, consignmentCode) {
    this.userIdService.takeUserId().subscribe((userId) => {
      this.store.dispatch(new LoadConsignmentTracking({
        userId,
        orderCode,
        consignmentCode
      }));
    });
  }
  /**
   * Cleaning consignment tracking
   */
  clearConsignmentTracking() {
    this.store.dispatch(new ClearConsignmentTracking());
  }
  /*
   * Cancel an order
   */
  cancelOrder(orderCode, cancelRequestInput) {
    this.userIdService.takeUserId().subscribe((userId) => {
      this.store.dispatch(new CancelOrder({
        userId,
        orderCode,
        cancelRequestInput
      }));
    });
  }
  /**
   * Returns the cancel order loading flag
   */
  getCancelOrderLoading() {
    return this.processStateStore.pipe(select(process_selectors.getProcessLoadingFactory(CANCEL_ORDER_PROCESS_ID)));
  }
  /**
   * Returns the cancel order success flag
   */
  getCancelOrderSuccess() {
    return this.processStateStore.pipe(select(process_selectors.getProcessSuccessFactory(CANCEL_ORDER_PROCESS_ID)));
  }
  /**
   * Resets the cancel order process flags
   */
  resetCancelOrderProcessState() {
    return this.store.dispatch(new ResetCancelOrderProcess());
  }
  /**
   * Returns the order details loading flag
   */
  getOrderDetailsLoading() {
    return this.store.pipe(select(getOrderDetailsLoading));
  }
};
_OrderHistoryService.\u0275fac = function OrderHistoryService_Factory(t) {
  return new (t || _OrderHistoryService)(\u0275\u0275inject(Store), \u0275\u0275inject(Store), \u0275\u0275inject(UserIdService), \u0275\u0275inject(RoutingService));
};
_OrderHistoryService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
  token: _OrderHistoryService,
  factory: _OrderHistoryService.\u0275fac
});
var OrderHistoryService = _OrderHistoryService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OrderHistoryService, [{
    type: Injectable
  }], () => [{
    type: Store
  }, {
    type: Store
  }, {
    type: UserIdService
  }, {
    type: RoutingService
  }], null);
})();
var _OrderReturnRequestService = class _OrderReturnRequestService {
  constructor(store, processStateStore, userIdService) {
    this.store = store;
    this.processStateStore = processStateStore;
    this.userIdService = userIdService;
  }
  /**
   * Create order return request
   * @param orderCode an order code
   * @param returnRequestInput order return request entry input
   */
  createOrderReturnRequest(returnRequestInput) {
    this.userIdService.takeUserId().subscribe((userId) => {
      this.store.dispatch(new CreateOrderReturnRequest({
        userId,
        returnRequestInput
      }));
    });
  }
  /**
   * Return an order return request
   */
  getOrderReturnRequest() {
    return this.store.pipe(select(getOrderReturnRequest));
  }
  /**
   * Gets order return request list
   */
  getOrderReturnRequestList(pageSize) {
    return this.store.pipe(select(getOrderReturnRequestListState), tap((returnListState) => {
      const attemptedLoad = returnListState.loading || returnListState.success || returnListState.error;
      if (!attemptedLoad) {
        this.loadOrderReturnRequestList(pageSize);
      }
    }), map((returnListState) => returnListState.value));
  }
  /**
   * Loads order return request detail
   * @param returnRequestCode
   */
  loadOrderReturnRequestDetail(returnRequestCode) {
    this.userIdService.takeUserId().subscribe((userId) => {
      this.store.dispatch(new LoadOrderReturnRequest({
        userId,
        returnRequestCode
      }));
    });
  }
  /**
   * Loads order return request list
   * @param pageSize page size
   * @param currentPage current page
   * @param sort sort
   */
  loadOrderReturnRequestList(pageSize, currentPage, sort) {
    this.userIdService.takeUserId(true).subscribe({
      next: (userId) => {
        this.store.dispatch(new LoadOrderReturnRequestList({
          userId,
          pageSize,
          currentPage,
          sort
        }));
      },
      error: () => {
      }
    });
  }
  /**
   * Cleaning order return request list
   */
  clearOrderReturnRequestList() {
    this.store.dispatch(new ClearOrderReturnRequestList());
  }
  /**
   * Get the order return request loading flag
   */
  getReturnRequestLoading() {
    return this.store.pipe(select(getOrderReturnRequestLoading));
  }
  /**
   * Get the order return request success flag
   */
  getReturnRequestSuccess() {
    return this.store.pipe(select(getOrderReturnRequestSuccess));
  }
  /**
   * Cleaning order return request details
   */
  clearOrderReturnRequestDetail() {
    this.store.dispatch(new ClearOrderReturnRequest());
  }
  /*
   * Cancel order return request
   */
  cancelOrderReturnRequest(returnRequestCode, returnRequestModification) {
    this.userIdService.takeUserId().subscribe((userId) => {
      this.store.dispatch(new CancelOrderReturnRequest({
        userId,
        returnRequestCode,
        returnRequestModification
      }));
    });
  }
  /**
   * Returns the cancel return request loading flag
   */
  getCancelReturnRequestLoading() {
    return this.processStateStore.pipe(select(process_selectors.getProcessLoadingFactory(CANCEL_RETURN_PROCESS_ID)));
  }
  /**
   * Returns the cancel return request success flag
   */
  getCancelReturnRequestSuccess() {
    return this.processStateStore.pipe(select(process_selectors.getProcessSuccessFactory(CANCEL_RETURN_PROCESS_ID)));
  }
  /**
   * Resets the cancel return request process flags
   */
  resetCancelReturnRequestProcessState() {
    return this.store.dispatch(new ResetCancelReturnProcess());
  }
};
_OrderReturnRequestService.\u0275fac = function OrderReturnRequestService_Factory(t) {
  return new (t || _OrderReturnRequestService)(\u0275\u0275inject(Store), \u0275\u0275inject(Store), \u0275\u0275inject(UserIdService));
};
_OrderReturnRequestService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
  token: _OrderReturnRequestService,
  factory: _OrderReturnRequestService.\u0275fac
});
var OrderReturnRequestService = _OrderReturnRequestService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OrderReturnRequestService, [{
    type: Injectable
  }], () => [{
    type: Store
  }, {
    type: Store
  }, {
    type: UserIdService
  }], null);
})();
var _OrderService = class _OrderService {
  constructor(activeCartFacade, userIdService, commandService, orderConnector, eventService) {
    this.activeCartFacade = activeCartFacade;
    this.userIdService = userIdService;
    this.commandService = commandService;
    this.orderConnector = orderConnector;
    this.eventService = eventService;
    this.placedOrder$ = new BehaviorSubject(void 0);
    this.placeOrderCommand = this.commandService.create((payload) => this.checkoutPreconditions().pipe(switchMap(([userId, cartId]) => this.orderConnector.placeOrder(userId, cartId, payload).pipe(tap((order) => {
      this.placedOrder$.next(order);
      this.eventService.dispatch({
        userId,
        cartId,
        /**
         * As we know the cart is not anonymous (precondition checked),
         * we can safely use the cartId, which is actually the cart.code.
         */
        cartCode: cartId,
        order
      }, OrderPlacedEvent);
    })))), {
      strategy: CommandStrategy.CancelPrevious
    });
  }
  /**
   * Performs the necessary checkout preconditions.
   */
  checkoutPreconditions() {
    return combineLatest([this.userIdService.takeUserId(), this.activeCartFacade.takeActiveCartId(), this.activeCartFacade.isGuestCart()]).pipe(take(1), map(([userId, cartId, isGuestCart]) => {
      if (!userId || !cartId || userId === OCC_USER_ID_ANONYMOUS && !isGuestCart) {
        throw new Error("Checkout conditions not met");
      }
      return [userId, cartId];
    }));
  }
  placeOrder(termsChecked) {
    return this.placeOrderCommand.execute(termsChecked);
  }
  getOrderDetails() {
    return this.placedOrder$.asObservable();
  }
  clearPlacedOrder() {
    this.placedOrder$.next(void 0);
  }
  setPlacedOrder(order) {
    this.placedOrder$.next(order);
  }
  getPickupEntries() {
    return this.getOrderDetails().pipe(map((order) => order?.entries?.filter((entry) => entry.deliveryPointOfService !== void 0) || []));
  }
  getDeliveryEntries() {
    return this.getOrderDetails().pipe(map((order) => order?.entries?.filter((entry) => entry.deliveryPointOfService === void 0) || []));
  }
};
_OrderService.\u0275fac = function OrderService_Factory(t) {
  return new (t || _OrderService)(\u0275\u0275inject(ActiveCartFacade), \u0275\u0275inject(UserIdService), \u0275\u0275inject(CommandService), \u0275\u0275inject(OrderConnector), \u0275\u0275inject(EventService));
};
_OrderService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
  token: _OrderService,
  factory: _OrderService.\u0275fac
});
var OrderService = _OrderService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OrderService, [{
    type: Injectable
  }], () => [{
    type: ActiveCartFacade
  }, {
    type: UserIdService
  }, {
    type: CommandService
  }, {
    type: OrderConnector
  }, {
    type: EventService
  }], null);
})();
var _ReorderOrderService = class _ReorderOrderService {
  constructor(commandService, reorderOrderConnector, userIdService, activeCartFacade, multiCartFacade) {
    this.commandService = commandService;
    this.reorderOrderConnector = reorderOrderConnector;
    this.userIdService = userIdService;
    this.activeCartFacade = activeCartFacade;
    this.multiCartFacade = multiCartFacade;
    this.reorderCommand = this.commandService.create(({
      orderId
    }) => this.reorderPreconditions().pipe(switchMap((userId) => this.reorderOrderConnector.reorder(orderId, userId))), {
      strategy: CommandStrategy.CancelPrevious
    });
  }
  /**
   * Create cart from an existing order
   */
  reorder(orderId) {
    return this.reorderCommand.execute({
      orderId
    });
  }
  reorderPreconditions() {
    return combineLatest([this.userIdService.takeUserId(), this.activeCartFacade.getActiveCartId()]).pipe(take(1), map(([userId, cartId]) => {
      if (!userId) {
        throw new Error("Must be logged in to reorder");
      }
      if (cartId) {
        this.multiCartFacade.deleteCart(cartId, userId);
      }
      return userId;
    }));
  }
};
_ReorderOrderService.\u0275fac = function ReorderOrderService_Factory(t) {
  return new (t || _ReorderOrderService)(\u0275\u0275inject(CommandService), \u0275\u0275inject(ReorderOrderConnector), \u0275\u0275inject(UserIdService), \u0275\u0275inject(ActiveCartFacade), \u0275\u0275inject(MultiCartFacade));
};
_ReorderOrderService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
  token: _ReorderOrderService,
  factory: _ReorderOrderService.\u0275fac
});
var ReorderOrderService = _ReorderOrderService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ReorderOrderService, [{
    type: Injectable
  }], () => [{
    type: CommandService
  }, {
    type: ReorderOrderConnector
  }, {
    type: UserIdService
  }, {
    type: ActiveCartFacade
  }, {
    type: MultiCartFacade
  }], null);
})();
var _ReplenishmentOrderHistoryService = class _ReplenishmentOrderHistoryService {
  constructor(store, processStateStore, userIdService) {
    this.store = store;
    this.processStateStore = processStateStore;
    this.userIdService = userIdService;
  }
  /**
   * Returns replenishment order details for a given 'current' user
   *
   * @param replenishmentOrderCode a replenishment order code
   */
  loadReplenishmentOrderDetails(replenishmentOrderCode) {
    this.userIdService.takeUserId(true).subscribe({
      next: (userId) => {
        this.store.dispatch(new LoadReplenishmentOrderDetails({
          userId,
          replenishmentOrderCode
        }));
      },
      error: () => {
      }
    });
  }
  /**
   * Returns a replenishment order details
   */
  getReplenishmentOrderDetails() {
    return this.store.pipe(select(getReplenishmentOrderDetailsValue));
  }
  /**
   * Returns a replenishment order details loading flag
   */
  getReplenishmentOrderDetailsLoading() {
    return this.store.pipe(select(getReplenishmentOrderDetailsLoading));
  }
  /**
   * Returns a replenishment order details success flag
   */
  getReplenishmentOrderDetailsSuccess() {
    return this.store.pipe(select(getReplenishmentOrderDetailsSuccess));
  }
  /**
   * Returns a replenishment order details error flag
   */
  getReplenishmentOrderDetailsError() {
    return this.store.pipe(select(getReplenishmentOrderDetailsError));
  }
  /**
   * Clears the replenishment orders details state
   */
  clearReplenishmentOrderDetails() {
    this.store.dispatch(new ClearReplenishmentOrderDetails());
  }
  /**
   * Cancels a specific replenishment order for a given 'current' user
   *
   * @param replenishmentOrderCode a replenishment order code
   */
  cancelReplenishmentOrder(replenishmentOrderCode) {
    this.userIdService.takeUserId(true).subscribe({
      next: (userId) => {
        this.store.dispatch(new CancelReplenishmentOrder({
          userId,
          replenishmentOrderCode
        }));
      },
      error: () => {
      }
    });
  }
  /**
   * Returns the cancel replenishment order loading flag
   */
  getCancelReplenishmentOrderLoading() {
    return this.processStateStore.pipe(select(process_selectors.getProcessLoadingFactory(CANCEL_REPLENISHMENT_ORDER_PROCESS_ID)));
  }
  /**
   * Returns the cancel replenishment order success flag
   */
  getCancelReplenishmentOrderSuccess() {
    return this.processStateStore.pipe(select(process_selectors.getProcessSuccessFactory(CANCEL_REPLENISHMENT_ORDER_PROCESS_ID)));
  }
  /**
   * Returns the cancel replenishment order error flag
   */
  getCancelReplenishmentOrderError() {
    return this.processStateStore.pipe(select(process_selectors.getProcessErrorFactory(CANCEL_REPLENISHMENT_ORDER_PROCESS_ID)));
  }
  /**
   * Clears the cancel replenishment order processing state
   */
  clearCancelReplenishmentOrderProcessState() {
    this.store.dispatch(new ClearCancelReplenishmentOrder());
  }
  /**
   * Returns replenishment order history list
   */
  getReplenishmentOrderHistoryList(pageSize) {
    return this.store.pipe(select(getReplenishmentOrdersState), tap((replenishmentOrderListState) => {
      const attemptedLoad = replenishmentOrderListState.loading || replenishmentOrderListState.success || replenishmentOrderListState.error;
      if (!attemptedLoad) {
        this.loadReplenishmentOrderList(pageSize);
      }
    }), map((replenishmentOrderListState) => replenishmentOrderListState.value));
  }
  /**
   * Returns a loading flag for replenishment order history list
   */
  getReplenishmentOrderHistoryListLoading() {
    return this.store.pipe(select(getReplenishmentOrdersLoading));
  }
  /**
   * Returns a error flag for replenishment order history list
   */
  getReplenishmentOrderHistoryListError() {
    return this.store.pipe(select(getReplenishmentOrdersError));
  }
  /**
   * Returns a success flag for replenishment order history list
   */
  getReplenishmentOrderHistoryListSuccess() {
    return this.store.pipe(select(getReplenishmentOrdersSuccess));
  }
  /**
   * Retrieves a replenishment order list
   * @param pageSize page size
   * @param currentPage current page
   * @param sort sort
   */
  loadReplenishmentOrderList(pageSize, currentPage, sort) {
    this.userIdService.takeUserId(true).subscribe({
      next: (userId) => {
        this.store.dispatch(new LoadUserReplenishmentOrders({
          userId,
          pageSize,
          currentPage,
          sort
        }));
      },
      error: () => {
      }
    });
  }
  /**
   * Cleaning replenishment order list
   */
  clearReplenishmentOrderList() {
    this.store.dispatch(new ClearUserReplenishmentOrders());
  }
};
_ReplenishmentOrderHistoryService.\u0275fac = function ReplenishmentOrderHistoryService_Factory(t) {
  return new (t || _ReplenishmentOrderHistoryService)(\u0275\u0275inject(Store), \u0275\u0275inject(Store), \u0275\u0275inject(UserIdService));
};
_ReplenishmentOrderHistoryService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
  token: _ReplenishmentOrderHistoryService,
  factory: _ReplenishmentOrderHistoryService.\u0275fac
});
var ReplenishmentOrderHistoryService = _ReplenishmentOrderHistoryService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ReplenishmentOrderHistoryService, [{
    type: Injectable
  }], () => [{
    type: Store
  }, {
    type: Store
  }, {
    type: UserIdService
  }], null);
})();
var _ScheduledReplenishmentOrderService = class _ScheduledReplenishmentOrderService {
  constructor(activeCartFacade, userIdService, commandService, scheduledReplenishmentOrderConnector, eventService, orderFacade) {
    this.activeCartFacade = activeCartFacade;
    this.userIdService = userIdService;
    this.commandService = commandService;
    this.scheduledReplenishmentOrderConnector = scheduledReplenishmentOrderConnector;
    this.eventService = eventService;
    this.orderFacade = orderFacade;
    this.scheduleReplenishmentOrderCommand = this.commandService.create(({
      form,
      termsChecked
    }) => this.checkoutPreconditions().pipe(switchMap(([userId, cartId]) => this.scheduledReplenishmentOrderConnector.scheduleReplenishmentOrder(cartId, form, termsChecked, userId).pipe(tap((replenishmentOrder) => {
      this.orderFacade.setPlacedOrder(replenishmentOrder);
      this.eventService.dispatch({
        userId,
        cartId,
        /**
         * As we know the cart is not anonymous (precondition checked),
         * we can safely use the cartId, which is actually the cart.code.
         */
        cartCode: cartId,
        replenishmentOrder
      }, ReplenishmentOrderScheduledEvent);
    })))), {
      strategy: CommandStrategy.CancelPrevious
    });
  }
  checkoutPreconditions() {
    return combineLatest([this.userIdService.takeUserId(), this.activeCartFacade.takeActiveCartId(), this.activeCartFacade.isGuestCart()]).pipe(take(1), map(([userId, cartId, isGuestCart]) => {
      if (!userId || !cartId || userId === OCC_USER_ID_ANONYMOUS && !isGuestCart) {
        throw new Error("Order conditions not met");
      }
      return [userId, cartId];
    }));
  }
  /**
   * Schedule a replenishment order
   */
  scheduleReplenishmentOrder(scheduleReplenishmentForm, termsChecked) {
    return this.scheduleReplenishmentOrderCommand.execute({
      termsChecked,
      form: scheduleReplenishmentForm
    });
  }
};
_ScheduledReplenishmentOrderService.\u0275fac = function ScheduledReplenishmentOrderService_Factory(t) {
  return new (t || _ScheduledReplenishmentOrderService)(\u0275\u0275inject(ActiveCartFacade), \u0275\u0275inject(UserIdService), \u0275\u0275inject(CommandService), \u0275\u0275inject(ScheduledReplenishmentOrderConnector), \u0275\u0275inject(EventService), \u0275\u0275inject(OrderFacade));
};
_ScheduledReplenishmentOrderService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
  token: _ScheduledReplenishmentOrderService,
  factory: _ScheduledReplenishmentOrderService.\u0275fac
});
var ScheduledReplenishmentOrderService = _ScheduledReplenishmentOrderService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ScheduledReplenishmentOrderService, [{
    type: Injectable
  }], () => [{
    type: ActiveCartFacade
  }, {
    type: UserIdService
  }, {
    type: CommandService
  }, {
    type: ScheduledReplenishmentOrderConnector
  }, {
    type: EventService
  }, {
    type: OrderFacade
  }], null);
})();
var _ConsignmentTrackingByIdEffects = class _ConsignmentTrackingByIdEffects {
  constructor() {
    this.logger = inject(LoggerService);
    this.actions$ = inject(Actions);
    this.orderConnector = inject(OrderHistoryConnector);
    this.loadConsignmentTrackingById$ = createEffect(() => this.actions$.pipe(ofType(LOAD_CONSIGNMENT_TRACKING_BY_ID), map((action) => action.payload), switchMap((payload) => {
      return this.orderConnector.getConsignmentTracking(payload.orderCode, payload.consignmentCode, payload.userId).pipe(map((tracking) => new LoadConsignmentTrackingByIdSuccess({
        orderCode: payload.orderCode,
        consignmentCode: payload.consignmentCode,
        consignmentTracking: tracking
      })), catchError((error) => of(new LoadConsignmentTrackingByIdFail({
        orderCode: payload.orderCode,
        consignmentCode: payload.consignmentCode,
        error: normalizeHttpError(error, this.logger)
      }))));
    })));
  }
};
_ConsignmentTrackingByIdEffects.\u0275fac = function ConsignmentTrackingByIdEffects_Factory(t) {
  return new (t || _ConsignmentTrackingByIdEffects)();
};
_ConsignmentTrackingByIdEffects.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
  token: _ConsignmentTrackingByIdEffects,
  factory: _ConsignmentTrackingByIdEffects.\u0275fac
});
var ConsignmentTrackingByIdEffects = _ConsignmentTrackingByIdEffects;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ConsignmentTrackingByIdEffects, [{
    type: Injectable
  }], null, null);
})();
var _ConsignmentTrackingEffects = class _ConsignmentTrackingEffects {
  constructor(actions$, orderConnector) {
    this.actions$ = actions$;
    this.orderConnector = orderConnector;
    this.logger = inject(LoggerService);
    this.loadConsignmentTracking$ = createEffect(() => this.actions$.pipe(ofType(LOAD_CONSIGNMENT_TRACKING), map((action) => action.payload), switchMap((payload) => {
      return this.orderConnector.getConsignmentTracking(payload.orderCode, payload.consignmentCode, payload.userId).pipe(map((tracking) => new LoadConsignmentTrackingSuccess(tracking)), catchError((error) => of(new LoadConsignmentTrackingFail(normalizeHttpError(error, this.logger)))));
    })));
  }
};
_ConsignmentTrackingEffects.\u0275fac = function ConsignmentTrackingEffects_Factory(t) {
  return new (t || _ConsignmentTrackingEffects)(\u0275\u0275inject(Actions), \u0275\u0275inject(OrderHistoryConnector));
};
_ConsignmentTrackingEffects.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
  token: _ConsignmentTrackingEffects,
  factory: _ConsignmentTrackingEffects.\u0275fac
});
var ConsignmentTrackingEffects = _ConsignmentTrackingEffects;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ConsignmentTrackingEffects, [{
    type: Injectable
  }], () => [{
    type: Actions
  }, {
    type: OrderHistoryConnector
  }], null);
})();
var _OrderByIdEffect = class _OrderByIdEffect {
  constructor() {
    this.logger = inject(LoggerService);
    this.actions$ = inject(Actions);
    this.orderConnector = inject(OrderHistoryConnector);
    this.loadOrderById$ = createEffect(() => this.actions$.pipe(ofType(LOAD_ORDER_BY_ID), map((action) => action.payload), concatMap(({
      userId,
      code
    }) => {
      return this.orderConnector.get(userId, code).pipe(map((order) => {
        return new LoadOrderByIdSuccess(order);
      }), catchError((error) => {
        return of(new LoadOrderByIdFail({
          code,
          error: normalizeHttpError(error, this.logger)
        }));
      }));
    })));
  }
};
_OrderByIdEffect.\u0275fac = function OrderByIdEffect_Factory(t) {
  return new (t || _OrderByIdEffect)();
};
_OrderByIdEffect.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
  token: _OrderByIdEffect,
  factory: _OrderByIdEffect.\u0275fac
});
var OrderByIdEffect = _OrderByIdEffect;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OrderByIdEffect, [{
    type: Injectable
  }], null, null);
})();
var _OrderDetailsEffect = class _OrderDetailsEffect {
  constructor(actions$, orderConnector, globalMessageService, userIdService, store) {
    this.actions$ = actions$;
    this.orderConnector = orderConnector;
    this.globalMessageService = globalMessageService;
    this.userIdService = userIdService;
    this.store = store;
    this.logger = inject(LoggerService);
    this.loadOrderDetails$ = createEffect(() => this.actions$.pipe(ofType(LOAD_ORDER_DETAILS), map((action) => action.payload), switchMap((payload) => {
      return this.orderConnector.get(payload.userId, payload.orderCode).pipe(map((order) => {
        return new LoadOrderDetailsSuccess(order);
      }), catchError((error) => of(new LoadOrderDetailsFail(normalizeHttpError(error, this.logger)))));
    })));
    this.cancelOrder$ = createEffect(() => this.actions$.pipe(ofType(CANCEL_ORDER), map((action) => action.payload), switchMap((payload) => {
      return this.orderConnector.cancel(payload.userId, payload.orderCode, payload.cancelRequestInput).pipe(map(() => new CancelOrderSuccess()), catchError((error) => {
        error.error?.errors.forEach((err) => this.globalMessageService.add(err.message, GlobalMessageType.MSG_TYPE_ERROR));
        return of(new CancelOrderFail(normalizeHttpError(error, this.logger)));
      }));
    })));
    this.resetOrderDetails$ = createEffect(() => this.actions$.pipe(ofType(siteContextGroup_actions.LANGUAGE_CHANGE, siteContextGroup_actions.CURRENCY_CHANGE), withLatestFrom(this.userIdService.getUserId(), this.store.pipe(filter((store2) => !!store2.order?.orderDetail), map((state) => state.order.orderDetail.value?.code))), switchMap(([, userId, orderCode]) => {
      if (orderCode) {
        return this.orderConnector.get(userId, orderCode).pipe(map((order) => {
          return new LoadOrderDetailsSuccess(order);
        }), catchError((error) => of(new LoadOrderDetailsFail(normalizeHttpError(error, this.logger)))));
      }
      return EMPTY;
    })));
  }
};
_OrderDetailsEffect.\u0275fac = function OrderDetailsEffect_Factory(t) {
  return new (t || _OrderDetailsEffect)(\u0275\u0275inject(Actions), \u0275\u0275inject(OrderHistoryConnector), \u0275\u0275inject(GlobalMessageService), \u0275\u0275inject(UserIdService), \u0275\u0275inject(Store));
};
_OrderDetailsEffect.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
  token: _OrderDetailsEffect,
  factory: _OrderDetailsEffect.\u0275fac
});
var OrderDetailsEffect = _OrderDetailsEffect;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OrderDetailsEffect, [{
    type: Injectable
  }], () => [{
    type: Actions
  }, {
    type: OrderHistoryConnector
  }, {
    type: GlobalMessageService
  }, {
    type: UserIdService
  }, {
    type: Store
  }], null);
})();
var _OrderReturnRequestEffect = class _OrderReturnRequestEffect {
  constructor(actions$, orderConnector) {
    this.actions$ = actions$;
    this.orderConnector = orderConnector;
    this.logger = inject(LoggerService);
    this.createReturnRequest$ = createEffect(() => this.actions$.pipe(ofType(CREATE_ORDER_RETURN_REQUEST), map((action) => action.payload), switchMap((payload) => {
      return this.orderConnector.return(payload.userId, payload.returnRequestInput).pipe(map((returnRequest) => new CreateOrderReturnRequestSuccess(returnRequest)), catchError((error) => of(new CreateOrderReturnRequestFail(normalizeHttpError(error, this.logger)))));
    })));
    this.loadReturnRequest$ = createEffect(() => this.actions$.pipe(ofType(LOAD_ORDER_RETURN_REQUEST), map((action) => action.payload), switchMap((payload) => {
      return this.orderConnector.getReturnRequestDetail(payload.userId, payload.returnRequestCode).pipe(map((returnRequest) => new LoadOrderReturnRequestSuccess(returnRequest)), catchError((error) => of(new LoadOrderReturnRequestFail(normalizeHttpError(error, this.logger)))));
    })));
    this.cancelReturnRequest$ = createEffect(() => this.actions$.pipe(ofType(CANCEL_ORDER_RETURN_REQUEST), map((action) => action.payload), switchMap((payload) => {
      return this.orderConnector.cancelReturnRequest(payload.userId, payload.returnRequestCode, payload.returnRequestModification).pipe(map(() => new CancelOrderReturnRequestSuccess()), catchError((error) => of(new CancelOrderReturnRequestFail(normalizeHttpError(error, this.logger)))));
    })));
    this.loadReturnRequestList$ = createEffect(() => this.actions$.pipe(ofType(LOAD_ORDER_RETURN_REQUEST_LIST), map((action) => action.payload), switchMap((payload) => {
      return this.orderConnector.getReturnRequestList(payload.userId, payload.pageSize, payload.currentPage, payload.sort).pipe(map((returnRequestList) => new LoadOrderReturnRequestListSuccess(returnRequestList)), catchError((error) => of(new LoadOrderReturnRequestListFail(normalizeHttpError(error, this.logger)))));
    })));
  }
};
_OrderReturnRequestEffect.\u0275fac = function OrderReturnRequestEffect_Factory(t) {
  return new (t || _OrderReturnRequestEffect)(\u0275\u0275inject(Actions), \u0275\u0275inject(OrderHistoryConnector));
};
_OrderReturnRequestEffect.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
  token: _OrderReturnRequestEffect,
  factory: _OrderReturnRequestEffect.\u0275fac
});
var OrderReturnRequestEffect = _OrderReturnRequestEffect;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OrderReturnRequestEffect, [{
    type: Injectable
  }], () => [{
    type: Actions
  }, {
    type: OrderHistoryConnector
  }], null);
})();
var _OrdersEffect = class _OrdersEffect {
  constructor(actions$, orderConnector, replenishmentOrderConnector) {
    this.actions$ = actions$;
    this.orderConnector = orderConnector;
    this.replenishmentOrderConnector = replenishmentOrderConnector;
    this.logger = inject(LoggerService);
    this.loadUserOrders$ = createEffect(() => this.actions$.pipe(ofType(LOAD_USER_ORDERS), map((action) => action.payload), switchMap((payload) => {
      return (Boolean(payload.replenishmentOrderCode) ? this.replenishmentOrderConnector.loadReplenishmentDetailsHistory(payload.userId, payload.replenishmentOrderCode ?? "", payload.pageSize, payload.currentPage, payload.sort) : this.orderConnector.getHistory(payload.userId, payload.pageSize, payload.currentPage, payload.sort)).pipe(map((orders) => {
        return new LoadUserOrdersSuccess(orders);
      }), catchError((error) => of(new LoadUserOrdersFail(normalizeHttpError(error, this.logger)))));
    })));
    this.resetUserOrders$ = createEffect(() => this.actions$.pipe(ofType(siteContextGroup_actions.LANGUAGE_CHANGE), map(() => {
      return new ClearUserOrders();
    })));
  }
};
_OrdersEffect.\u0275fac = function OrdersEffect_Factory(t) {
  return new (t || _OrdersEffect)(\u0275\u0275inject(Actions), \u0275\u0275inject(OrderHistoryConnector), \u0275\u0275inject(ReplenishmentOrderHistoryConnector));
};
_OrdersEffect.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
  token: _OrdersEffect,
  factory: _OrdersEffect.\u0275fac
});
var OrdersEffect = _OrdersEffect;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OrdersEffect, [{
    type: Injectable
  }], () => [{
    type: Actions
  }, {
    type: OrderHistoryConnector
  }, {
    type: ReplenishmentOrderHistoryConnector
  }], null);
})();
var _ReplenishmentOrderDetailsEffect = class _ReplenishmentOrderDetailsEffect {
  constructor(actions$, replenishmentOrderConnector, globalMessageService) {
    this.actions$ = actions$;
    this.replenishmentOrderConnector = replenishmentOrderConnector;
    this.globalMessageService = globalMessageService;
    this.logger = inject(LoggerService);
    this.loadReplenishmentOrderDetails$ = createEffect(() => this.actions$.pipe(ofType(LOAD_REPLENISHMENT_ORDER_DETAILS), map((action) => action.payload), switchMap((payload) => {
      return this.replenishmentOrderConnector.load(payload.userId, payload.replenishmentOrderCode).pipe(map((replenishmentOrder) => {
        return new LoadReplenishmentOrderDetailsSuccess(replenishmentOrder);
      }), catchError((error) => of(new LoadReplenishmentOrderDetailsFail(normalizeHttpError(error, this.logger)))));
    })));
    this.cancelReplenishmentOrder$ = createEffect(() => this.actions$.pipe(ofType(CANCEL_REPLENISHMENT_ORDER), map((action) => action.payload), switchMap((payload) => {
      return this.replenishmentOrderConnector.cancelReplenishmentOrder(payload.userId, payload.replenishmentOrderCode).pipe(map((replenishmentOrder) => new CancelReplenishmentOrderSuccess(replenishmentOrder)), catchError((error) => {
        error?.error?.errors.forEach((err) => this.globalMessageService.add(err.message, GlobalMessageType.MSG_TYPE_ERROR));
        return of(new CancelReplenishmentOrderFail(normalizeHttpError(error, this.logger)));
      }));
    })));
  }
};
_ReplenishmentOrderDetailsEffect.\u0275fac = function ReplenishmentOrderDetailsEffect_Factory(t) {
  return new (t || _ReplenishmentOrderDetailsEffect)(\u0275\u0275inject(Actions), \u0275\u0275inject(ReplenishmentOrderHistoryConnector), \u0275\u0275inject(GlobalMessageService));
};
_ReplenishmentOrderDetailsEffect.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
  token: _ReplenishmentOrderDetailsEffect,
  factory: _ReplenishmentOrderDetailsEffect.\u0275fac
});
var ReplenishmentOrderDetailsEffect = _ReplenishmentOrderDetailsEffect;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ReplenishmentOrderDetailsEffect, [{
    type: Injectable
  }], () => [{
    type: Actions
  }, {
    type: ReplenishmentOrderHistoryConnector
  }, {
    type: GlobalMessageService
  }], null);
})();
var _ReplenishmentOrdersEffect = class _ReplenishmentOrdersEffect {
  constructor(actions$, replenishmentOrderConnector) {
    this.actions$ = actions$;
    this.replenishmentOrderConnector = replenishmentOrderConnector;
    this.logger = inject(LoggerService);
    this.loadUserReplenishmentOrders$ = createEffect(() => this.actions$.pipe(ofType(LOAD_USER_REPLENISHMENT_ORDERS), map((action) => action.payload), switchMap((payload) => {
      return this.replenishmentOrderConnector.loadHistory(payload.userId, payload.pageSize, payload.currentPage, payload.sort).pipe(map((orders) => {
        return new LoadUserReplenishmentOrdersSuccess(orders);
      }), catchError((error) => of(new LoadUserReplenishmentOrdersFail(normalizeHttpError(error, this.logger)))));
    })));
  }
};
_ReplenishmentOrdersEffect.\u0275fac = function ReplenishmentOrdersEffect_Factory(t) {
  return new (t || _ReplenishmentOrdersEffect)(\u0275\u0275inject(Actions), \u0275\u0275inject(ReplenishmentOrderHistoryConnector));
};
_ReplenishmentOrdersEffect.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
  token: _ReplenishmentOrdersEffect,
  factory: _ReplenishmentOrdersEffect.\u0275fac
});
var ReplenishmentOrdersEffect = _ReplenishmentOrdersEffect;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ReplenishmentOrdersEffect, [{
    type: Injectable
  }], () => [{
    type: Actions
  }, {
    type: ReplenishmentOrderHistoryConnector
  }], null);
})();
var effects = [OrdersEffect, OrderDetailsEffect, ConsignmentTrackingEffects, OrderReturnRequestEffect, ReplenishmentOrderDetailsEffect, ReplenishmentOrdersEffect, ConsignmentTrackingByIdEffects, OrderByIdEffect];
var initialStateOfConsignmentTrackingById = void 0;
function reducer$7(state = initialStateOfConsignmentTrackingById, action) {
  switch (action.type) {
    case LOAD_CONSIGNMENT_TRACKING_BY_ID_SUCCESS: {
      return action.payload.consignmentTracking ? action.payload.consignmentTracking : initialStateOfConsignmentTrackingById;
    }
    case LOAD_CONSIGNMENT_TRACKING_BY_ID_FAIL: {
      return initialStateOfConsignmentTrackingById;
    }
  }
  return state;
}
var initialStateOfOrderById = void 0;
function reducer$6(state = initialStateOfOrderById, action) {
  switch (action.type) {
    case LOAD_ORDER_BY_ID_SUCCESS: {
      return action.payload ? action.payload : initialStateOfOrderById;
    }
    case LOAD_ORDER_BY_ID_FAIL: {
      return initialStateOfOrderById;
    }
  }
  return state;
}
var initialState$5 = {
  tracking: {}
};
function reducer$5(state = initialState$5, action) {
  switch (action.type) {
    case LOAD_CONSIGNMENT_TRACKING_SUCCESS: {
      const tracking = action.payload;
      return {
        tracking
      };
    }
    case CLEAR_CONSIGNMENT_TRACKING: {
      return initialState$5;
    }
  }
  return state;
}
var initialState$4 = {};
function reducer$4(state = initialState$4, action) {
  switch (action.type) {
    case LOAD_ORDER_DETAILS_SUCCESS: {
      const order = action.payload;
      return order;
    }
  }
  return state;
}
var initialState$3 = {
  returnRequests: [],
  pagination: {},
  sorts: []
};
function reducer$3(state = initialState$3, action) {
  switch (action.type) {
    case LOAD_ORDER_RETURN_REQUEST_LIST_SUCCESS: {
      return action.payload ? action.payload : initialState$3;
    }
  }
  return state;
}
var initialState$2 = {
  orders: [],
  pagination: {},
  sorts: []
};
function reducer$2(state = initialState$2, action) {
  switch (action.type) {
    case LOAD_USER_ORDERS_SUCCESS: {
      return action.payload ? action.payload : initialState$2;
    }
    case LOAD_USER_ORDERS_FAIL: {
      return initialState$2;
    }
  }
  return state;
}
var initialState$1 = {};
function reducer$1(state = initialState$1, action) {
  switch (action.type) {
    case LOAD_REPLENISHMENT_ORDER_DETAILS_SUCCESS:
    case CANCEL_REPLENISHMENT_ORDER_SUCCESS: {
      return action.payload ? action.payload : initialState$1;
    }
    default: {
      return state;
    }
  }
}
var initialState = {
  replenishmentOrders: [],
  pagination: {},
  sorts: []
};
function reducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_USER_REPLENISHMENT_ORDERS_SUCCESS: {
      return action.payload ? action.payload : initialState;
    }
    case CANCEL_REPLENISHMENT_ORDER_SUCCESS: {
      const cancelledReplenishmentOrder = action.payload;
      const userReplenishmentOrders = [...state.replenishmentOrders ?? []];
      const index = userReplenishmentOrders.findIndex((replenishmentOrder) => replenishmentOrder.replenishmentOrderCode === cancelledReplenishmentOrder.replenishmentOrderCode);
      if (index === -1) {
        return initialState;
      } else {
        userReplenishmentOrders[index] = __spreadValues({}, cancelledReplenishmentOrder);
      }
      return __spreadProps(__spreadValues({}, state), {
        replenishmentOrders: userReplenishmentOrders
      });
    }
  }
  return state;
}
function getReducers() {
  return {
    orders: utilsGroup.loaderReducer(ORDERS, reducer$2),
    orderDetail: utilsGroup.loaderReducer(ORDER_DETAILS, reducer$4),
    replenishmentOrders: utilsGroup.loaderReducer(REPLENISHMENT_ORDERS, reducer),
    orderReturn: utilsGroup.loaderReducer(RETURN_REQUEST_DETAILS),
    orderReturnList: utilsGroup.loaderReducer(RETURN_REQUESTS, reducer$3),
    consignmentTracking: reducer$5,
    replenishmentOrder: utilsGroup.loaderReducer(REPLENISHMENT_ORDER_DETAILS, reducer$1),
    orderById: utilsGroup.entityLoaderReducer(ORDER_BY_ID_ENTITIES, reducer$6),
    consignmentTrackingById: utilsGroup.entityLoaderReducer(CONSIGNMENT_TRACKING_BY_ID_ENTITIES, reducer$7)
  };
}
var reducerToken = new InjectionToken("OrderReducers");
var reducerProvider = {
  provide: reducerToken,
  useFactory: getReducers
};
var _MyAccountV2OrderHistoryService = class _MyAccountV2OrderHistoryService {
  constructor() {
    this.orderReturnRequestService = inject(OrderReturnRequestService);
    this.store = inject(Store);
    this.userIdService = inject(UserIdService);
    this.orderHistoryService = inject(OrderHistoryService);
  }
  clearOrderList() {
    this.orderHistoryService.clearOrderList();
  }
  getOrderDetailsWithTracking(orderCode) {
    return this.getOrderDetails(orderCode).pipe(switchMap((order) => {
      const orderView = __spreadValues({}, order);
      orderView.consignments = [];
      const requests = (order.consignments ?? []).map((consignment) => {
        const consignmentView = __spreadValues({}, consignment);
        if (consignment.code && consignment.trackingID) {
          return this.getConsignmentTracking(order?.code ?? "", consignment.code).pipe(map((trackingInfo) => {
            consignmentView.consignmentTracking = trackingInfo;
            orderView.consignments?.push(consignmentView);
            return orderView;
          }));
        } else {
          orderView.consignments?.push(consignmentView);
          return of(orderView);
        }
      });
      if (requests === void 0 || requests.length < 1) {
        return of(orderView);
      }
      return combineLatest(requests).pipe(switchMap((orders) => {
        if (orders !== void 0) {
          return of(orders[0]);
        } else {
          return of(order);
        }
      }));
    }));
  }
  getOrderHistoryListWithDetails(pageSize) {
    const orderListView = {};
    return this.orderHistoryService.getOrderHistoryList(pageSize).pipe(switchMap((orderList) => {
      orderListView.pagination = orderList?.pagination;
      orderListView.sorts = orderList?.sorts;
      orderListView.orders = [];
      const requests = (orderList?.orders ?? []).map((order) => {
        const orderView = __spreadValues({}, order);
        return this.getOrderDetailsWithTracking(order?.code ?? "").pipe(map((orderDetail) => {
          orderView.returnable = orderDetail?.returnable;
          orderView.totalItems = orderDetail?.totalItems;
          orderView.entries = orderDetail?.entries;
          orderView.consignments = orderDetail?.consignments;
          orderView.unconsignedEntries = orderDetail?.unconsignedEntries;
          orderView.returnRequests = [];
          orderListView.orders?.push(orderView);
          return orderListView;
        }));
      });
      if (requests.length === 0) {
        requests.push(of(orderListView));
      }
      return combineLatest(requests);
    }), map((requests) => {
      if (requests !== void 0) {
        return requests[0];
      } else {
        return {};
      }
    }));
  }
  getOrderHistoryList(pageSize) {
    const orderHistoryListRequest = this.getOrderHistoryListWithDetails(pageSize);
    const returnRequestListRequest = this.orderReturnRequestService.getOrderReturnRequestList();
    return combineLatest([orderHistoryListRequest, returnRequestListRequest]).pipe(switchMap((responses) => {
      const returnRequests = responses?.[1]?.returnRequests;
      const orderHistory = responses?.[0];
      if (returnRequests && orderHistory?.orders) {
        if (orderHistory.pagination?.totalResults === 0) {
          return of(orderHistory);
        }
        return orderHistory.orders.map((order) => {
          const returnItems = returnRequests?.filter((returnItem) => returnItem.order?.code === order.code);
          if (returnItems) {
            order.returnRequests = returnItems;
          }
          return orderHistory;
        });
      } else {
        return of(orderHistory);
      }
    }));
  }
  getOrderDetailsValue(code) {
    return this.store.select(getOrderById(code)).pipe(filter((order) => Boolean(order)));
  }
  getOrderDetailsState(code) {
    return this.store.select(getOrderByIdEntity(code));
  }
  loadOrderDetails(code) {
    this.userIdService.takeUserId(true).subscribe({
      next: (userId) => this.store.dispatch(new LoadOrderById({
        userId,
        code
      }))
    });
  }
  getOrderDetails(code) {
    const loading$ = this.getOrderDetailsState(code).pipe(auditTime(0), tap((state) => {
      if (!(state.loading || state.success || state.error)) {
        this.loadOrderDetails(code);
      }
    }));
    return using(() => loading$.subscribe(), () => this.getOrderDetailsValue(code));
  }
  getConsignmentTrackingValue(orderCode, consignmentCode) {
    return this.store.select(getConsignmentTrackingById(orderCode, consignmentCode)).pipe(filter((tracking) => Boolean(tracking)));
  }
  getConsignmentTrackingState(orderCode, consignmentCode) {
    return this.store.select(getConsignmentTrackingByIdEntity(orderCode, consignmentCode));
  }
  loadConsignmentTracking(orderCode, consignmentCode) {
    this.userIdService.takeUserId(true).subscribe({
      next: (userId) => this.store.dispatch(new LoadConsignmentTrackingById({
        orderCode,
        consignmentCode,
        userId
      }))
    });
  }
  getConsignmentTracking(orderCode, consignmentCode) {
    const loading$ = this.getConsignmentTrackingState(orderCode, consignmentCode).pipe(auditTime(0), tap((state) => {
      if (!(state.loading || state.success || state.error)) {
        this.loadConsignmentTracking(orderCode, consignmentCode);
      }
    }));
    return using(() => loading$.subscribe(), () => this.getConsignmentTrackingValue(orderCode, consignmentCode));
  }
};
_MyAccountV2OrderHistoryService.\u0275fac = function MyAccountV2OrderHistoryService_Factory(t) {
  return new (t || _MyAccountV2OrderHistoryService)();
};
_MyAccountV2OrderHistoryService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
  token: _MyAccountV2OrderHistoryService,
  factory: _MyAccountV2OrderHistoryService.\u0275fac
});
var MyAccountV2OrderHistoryService = _MyAccountV2OrderHistoryService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MyAccountV2OrderHistoryService, [{
    type: Injectable
  }], null, null);
})();
var facadeProviders = [OrderReturnRequestService, {
  provide: OrderReturnRequestFacade,
  useExisting: OrderReturnRequestService
}, MyAccountV2OrderHistoryService, OrderHistoryService, {
  provide: OrderHistoryFacade,
  useExisting: OrderHistoryService
}, ReplenishmentOrderHistoryService, {
  provide: ReplenishmentOrderHistoryFacade,
  useExisting: ReplenishmentOrderHistoryService
}, ScheduledReplenishmentOrderService, {
  provide: ScheduledReplenishmentOrderFacade,
  useExisting: ScheduledReplenishmentOrderService
}, OrderService, {
  provide: OrderFacade,
  useExisting: OrderService
}, ReorderOrderService, {
  provide: ReorderOrderFacade,
  useExisting: ReorderOrderService
}];
var _OrderStoreModule = class _OrderStoreModule {
};
_OrderStoreModule.\u0275fac = function OrderStoreModule_Factory(t) {
  return new (t || _OrderStoreModule)();
};
_OrderStoreModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
  type: _OrderStoreModule
});
_OrderStoreModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
  providers: [reducerProvider],
  imports: [EffectsModule.forFeature(effects), StoreModule.forFeature(ORDER_FEATURE, reducerToken)]
});
var OrderStoreModule = _OrderStoreModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OrderStoreModule, [{
    type: NgModule,
    args: [{
      imports: [EffectsModule.forFeature(effects), StoreModule.forFeature(ORDER_FEATURE, reducerToken)],
      providers: [reducerProvider]
    }]
  }], null, null);
})();
var _OrderCoreModule = class _OrderCoreModule {
};
_OrderCoreModule.\u0275fac = function OrderCoreModule_Factory(t) {
  return new (t || _OrderCoreModule)();
};
_OrderCoreModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
  type: _OrderCoreModule
});
_OrderCoreModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
  providers: [...facadeProviders, OrderHistoryConnector, ReplenishmentOrderHistoryConnector, OrderConnector, ScheduledReplenishmentOrderConnector, ReorderOrderConnector],
  imports: [OrderStoreModule]
});
var OrderCoreModule = _OrderCoreModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OrderCoreModule, [{
    type: NgModule,
    args: [{
      imports: [OrderStoreModule],
      providers: [...facadeProviders, OrderHistoryConnector, ReplenishmentOrderHistoryConnector, OrderConnector, ScheduledReplenishmentOrderConnector, ReorderOrderConnector]
    }]
  }], null, null);
})();

// node_modules/@spartacus/pdf-invoices/fesm2022/spartacus-pdf-invoices-root.mjs
var PDF_INVOICES_FEATURE = "pdfInvoices";
var PDF_INVOICES_CORE_FEATURE = "pdfInvoicesCore";
function pdfInvoicesFacadeFactory() {
  return facadeFactory({
    facade: PDFInvoicesFacade,
    feature: PDF_INVOICES_FEATURE,
    methods: ["getInvoicesForOrder", "getInvoicePDF"]
  });
}
var _PDFInvoicesFacade = class _PDFInvoicesFacade {
};
_PDFInvoicesFacade.\u0275fac = function PDFInvoicesFacade_Factory(t) {
  return new (t || _PDFInvoicesFacade)();
};
_PDFInvoicesFacade.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
  token: _PDFInvoicesFacade,
  factory: () => pdfInvoicesFacadeFactory(),
  providedIn: "root"
});
var PDFInvoicesFacade = _PDFInvoicesFacade;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PDFInvoicesFacade, [{
    type: Injectable,
    args: [{
      providedIn: "root",
      useFactory: pdfInvoicesFacadeFactory
    }]
  }], null, null);
})();
var InvoicesFields;
(function(InvoicesFields2) {
  InvoicesFields2["BASIC"] = "BASIC";
  InvoicesFields2["DEFAULT"] = "DEFAULT";
  InvoicesFields2["FULL"] = "FULL";
})(InvoicesFields || (InvoicesFields = {}));
function defaultRequestedDeliveryDateComponentsConfig() {
  const config = {
    featureModules: {
      [PDF_INVOICES_FEATURE]: {
        cmsComponents: ["AccountOrderDetailsPDFInvoicesComponent"]
      },
      // by default core is bundled together with components
      [PDF_INVOICES_CORE_FEATURE]: PDF_INVOICES_FEATURE
    }
  };
  return config;
}
var _PDFInvoicesRootModule = class _PDFInvoicesRootModule {
};
_PDFInvoicesRootModule.\u0275fac = function PDFInvoicesRootModule_Factory(t) {
  return new (t || _PDFInvoicesRootModule)();
};
_PDFInvoicesRootModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
  type: _PDFInvoicesRootModule
});
_PDFInvoicesRootModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
  providers: [provideDefaultConfigFactory(defaultRequestedDeliveryDateComponentsConfig)]
});
var PDFInvoicesRootModule = _PDFInvoicesRootModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PDFInvoicesRootModule, [{
    type: NgModule,
    args: [{
      providers: [provideDefaultConfigFactory(defaultRequestedDeliveryDateComponentsConfig)]
    }]
  }], null, null);
})();

// node_modules/@spartacus/pdf-invoices/fesm2022/spartacus-pdf-invoices-components.mjs
var _c0 = (a0) => ({
  id: a0
});
function InvoicesListComponent_ng_container_0_ng_container_1_div_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 13)(1, "cx-pagination", 14);
    \u0275\u0275listener("viewPageEvent", function InvoicesListComponent_ng_container_0_ng_container_1_div_15_Template_cx_pagination_viewPageEvent_1_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.pageChange($event));
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("pagination", ctx_r1.pagination);
  }
}
function InvoicesListComponent_ng_container_0_ng_container_1_tr_35_button_31_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 23);
    \u0275\u0275pipe(1, "cxTranslate");
    \u0275\u0275listener("click", function InvoicesListComponent_ng_container_0_ng_container_1_tr_35_button_31_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r4);
      const invoice_r5 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.downloadPDFInvoice(invoice_r5.invoiceId, invoice_r5.externalSystemId));
    });
    \u0275\u0275element(2, "cx-icon", 10);
    \u0275\u0275pipe(3, "cxTranslate");
    \u0275\u0275element(4, "span", 24);
    \u0275\u0275pipe(5, "cxTranslate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const invoice_r5 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind2(1, 4, "pdfInvoices.invoicesTable.attachmentDescription", \u0275\u0275pureFunction1(11, _c0, invoice_r5.invoiceId)));
    \u0275\u0275advance(2);
    \u0275\u0275propertyInterpolate("title", \u0275\u0275pipeBind1(3, 7, "pdfInvoices.invoicesTable.download"));
    \u0275\u0275property("type", ctx_r1.ICON_TYPE.FILE);
    \u0275\u0275advance(2);
    \u0275\u0275property("innerText", \u0275\u0275pipeBind1(5, 9, "pdfInvoices.invoicesTable.download"));
  }
}
function InvoicesListComponent_ng_container_0_ng_container_1_tr_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr", 15)(1, "td", 16)(2, "div", 17);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "cxTranslate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 18);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "td", 19)(8, "div", 17);
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "cxTranslate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 18);
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "cxDate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "td", 20)(15, "div", 17);
    \u0275\u0275text(16);
    \u0275\u0275pipe(17, "cxTranslate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "div", 18);
    \u0275\u0275text(19);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "td", 20)(21, "div", 17);
    \u0275\u0275text(22);
    \u0275\u0275pipe(23, "cxTranslate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "div", 18);
    \u0275\u0275text(25);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(26, "td", 21)(27, "div", 17);
    \u0275\u0275text(28);
    \u0275\u0275pipe(29, "cxTranslate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "div", 18);
    \u0275\u0275template(31, InvoicesListComponent_ng_container_0_ng_container_1_tr_35_button_31_Template, 6, 13, "button", 22);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const invoice_r5 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 10, "pdfInvoices.invoicesTable.invoiceId"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", invoice_r5.invoiceId, " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(10, 12, "pdfInvoices.invoicesTable.createdAt"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(13, 14, invoice_r5.createdAt, "longDate"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(17, 17, "pdfInvoices.invoicesTable.netAmount"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", (invoice_r5.netAmount == null ? null : invoice_r5.netAmount.formattedValue) ? invoice_r5.netAmount == null ? null : invoice_r5.netAmount.formattedValue : (invoice_r5.netAmount == null ? null : invoice_r5.netAmount.currencyIso) + "\xA0" + (invoice_r5.netAmount == null ? null : invoice_r5.netAmount.value), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(23, 19, "pdfInvoices.invoicesTable.totalAmount"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", (invoice_r5.totalAmount == null ? null : invoice_r5.totalAmount.formattedValue) ? invoice_r5.totalAmount == null ? null : invoice_r5.totalAmount.formattedValue : (invoice_r5.totalAmount == null ? null : invoice_r5.totalAmount.currencyIso) + "\xA0" + (invoice_r5.totalAmount == null ? null : invoice_r5.totalAmount.value), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(29, 21, "pdfInvoices.invoicesTable.attachment"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", invoice_r5.invoiceId);
  }
}
function InvoicesListComponent_ng_container_0_ng_container_1_div_37_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 13)(1, "cx-pagination", 14);
    \u0275\u0275listener("viewPageEvent", function InvoicesListComponent_ng_container_0_ng_container_1_div_37_Template_cx_pagination_viewPageEvent_1_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.pageChange($event));
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("pagination", ctx_r1.pagination);
  }
}
function InvoicesListComponent_ng_container_0_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div")(2, "div", 1)(3, "h2");
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "cxTranslate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 2)(7, "div", 3)(8, "label", 4)(9, "span");
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "cxTranslate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "cx-sorting", 5);
    \u0275\u0275pipe(13, "cxTranslate");
    \u0275\u0275pipe(14, "cxTranslate");
    \u0275\u0275listener("sortListEvent", function InvoicesListComponent_ng_container_0_ng_container_1_Template_cx_sorting_sortListEvent_12_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.sortChange($event));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275template(15, InvoicesListComponent_ng_container_0_ng_container_1_div_15_Template, 2, 1, "div", 6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "table", 7);
    \u0275\u0275pipe(17, "cxTranslate");
    \u0275\u0275elementStart(18, "thead", 8)(19, "th", 9);
    \u0275\u0275text(20);
    \u0275\u0275pipe(21, "cxTranslate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "th", 9);
    \u0275\u0275text(23);
    \u0275\u0275pipe(24, "cxTranslate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "th", 9);
    \u0275\u0275text(26);
    \u0275\u0275pipe(27, "cxTranslate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "th", 9);
    \u0275\u0275text(29);
    \u0275\u0275pipe(30, "cxTranslate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "th", 9);
    \u0275\u0275element(32, "cx-icon", 10);
    \u0275\u0275pipe(33, "cxTranslate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(34, "tbody");
    \u0275\u0275template(35, InvoicesListComponent_ng_container_0_ng_container_1_tr_35_Template, 32, 23, "tr", 11);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(36, "div", 12);
    \u0275\u0275template(37, InvoicesListComponent_ng_container_0_ng_container_1_div_37_Template, 2, 1, "div", 6);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const invoicesList_r7 = \u0275\u0275nextContext().ngIf;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(5, 16, "pdfInvoices.invoicesTable.header"), " ");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(11, 18, "pdfInvoices.sortBy"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275propertyInterpolate("placeholder", \u0275\u0275pipeBind1(13, 20, "pdfInvoices.sortBy"));
    \u0275\u0275property("sortOptions", ctx_r1.sortOptions)("selectedOption", ctx_r1.sort)("ariaLabel", \u0275\u0275pipeBind1(14, 22, "pdfInvoices.sortInvoices"));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", invoicesList_r7.pagination && invoicesList_r7.pagination.totalPages && invoicesList_r7.pagination.totalPages > 1);
    \u0275\u0275advance();
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(17, 24, "pdfInvoices.invoicesTable.label"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(21, 26, "pdfInvoices.invoicesTable.invoiceId"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(24, 28, "pdfInvoices.invoicesTable.createdAt"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(27, 30, "pdfInvoices.invoicesTable.netAmount"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(30, 32, "pdfInvoices.invoicesTable.totalAmount"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275propertyInterpolate("title", \u0275\u0275pipeBind1(33, 34, "pdfInvoices.invoicesTable.attachment"));
    \u0275\u0275property("type", ctx_r1.ICON_TYPE.DOWNLOAD);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", invoicesList_r7.invoices);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", invoicesList_r7.pagination && invoicesList_r7.pagination.totalPages && invoicesList_r7.pagination.totalPages > 1);
  }
}
function InvoicesListComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, InvoicesListComponent_ng_container_0_ng_container_1_Template, 38, 36, "ng-container", 0);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const invoicesList_r7 = ctx.ngIf;
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", invoicesList_r7.pagination && invoicesList_r7.pagination.totalCount && invoicesList_r7.pagination.totalCount > 0);
  }
}
var _InvoicesListComponent = class _InvoicesListComponent {
  constructor(pdfInvoicesFacade, translationService, downloadService, languageService, globalMessageService) {
    this.pdfInvoicesFacade = pdfInvoicesFacade;
    this.translationService = translationService;
    this.downloadService = downloadService;
    this.languageService = languageService;
    this.globalMessageService = globalMessageService;
    this.ICON_TYPE = ICON_TYPE;
    this.PAGE_SIZE = 5;
    this.sort = "byInvoiceIdAsc";
    this.sortMapping = {
      byCreatedAtAsc: "invoiceDate:asc",
      byCreatedAtDesc: "invoiceDate:desc",
      byInvoiceIdAsc: "invoiceId:asc",
      byInvoiceIdDesc: "invoiceId:desc",
      byNetAmountAsc: "netAmount:asc",
      byNetAmountDesc: "netAmount:desc",
      byTotalAmountAsc: "totalAmount:asc",
      byTotalAmountDesc: "totalAmount:desc"
    };
    this._initQueryParams = {
      currentPage: 0,
      pageSize: this.PAGE_SIZE,
      fields: InvoicesFields.FULL,
      sort: this.sortMapping[this.sort]
      //backend supports sort codes like invoiceId:asc
    };
    this.queryParams$ = new BehaviorSubject(this._initQueryParams);
    this.invoicesList$ = this.queryParams$.pipe(switchMap((param) => this.pdfInvoicesFacade.getInvoicesForOrder(param)), tap((invoicesList) => this.pagination = {
      currentPage: invoicesList.pagination?.page,
      pageSize: invoicesList.pagination?.count,
      totalPages: invoicesList.pagination?.totalPages,
      totalResults: invoicesList.pagination?.totalCount,
      sort: this.sortMapping[this.sort]
    }), catchError((error) => {
      if (error && this.getNotEnabledError(error)?.length) {
        this.globalMessageService.add({
          key: "pdfInvoices.featureNotEnabled"
        }, GlobalMessageType.MSG_TYPE_ERROR);
      }
      return EMPTY;
    }));
    this.subscription = new Subscription();
  }
  ngOnInit() {
    this.subscription.add(this.languageService.getActive().pipe(skip(1)).subscribe(() => this.updateQueryParams({
      fields: InvoicesFields.FULL
    })));
    this.getSortOptions();
  }
  updateQueryParams(partialParams) {
    Object.keys(partialParams).forEach((key) => this._initQueryParams[key] = partialParams[key]);
    if (!partialParams.fields) {
      this._initQueryParams.fields = InvoicesFields.DEFAULT;
    }
    this.queryParams$.next(this._initQueryParams);
  }
  pageChange(currentPage) {
    this.updateQueryParams({
      currentPage
    });
  }
  sortChange(sortCode) {
    this.sort = sortCode;
    this.updateQueryParams({
      sort: this.sortMapping[sortCode],
      currentPage: 0
    });
  }
  downloadPDFInvoice(invoiceId, externalSystemId) {
    this.pdfInvoicesFacade.getInvoicePDF(invoiceId, externalSystemId).pipe(take(1)).subscribe({
      next: (data) => {
        const file = new Blob([data], {
          type: data.type
        });
        const url = URL.createObjectURL(file);
        this.downloadService.download(url, `${invoiceId}.pdf`);
      }
    });
  }
  getSortOptions() {
    this.sortOptions = [];
    Object.keys(this.sortMapping).forEach((sortKey) => this.sortOptions.push({
      code: sortKey,
      selected: false
    }));
    const translations = this.sortOptions.map((sort) => this.translationService.translate(`pdfInvoices.sorts.${sort.code}`));
    combineLatest(translations).pipe(take(1)).subscribe((translated) => this.sortOptions.forEach((sort, index) => sort.name = translated[index]));
  }
  getNotEnabledError(response) {
    return response?.details ? response.details.filter((error) => error?.type === "UnknownResourceError") : [];
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
};
_InvoicesListComponent.\u0275fac = function InvoicesListComponent_Factory(t) {
  return new (t || _InvoicesListComponent)(\u0275\u0275directiveInject(PDFInvoicesFacade), \u0275\u0275directiveInject(TranslationService), \u0275\u0275directiveInject(FileDownloadService), \u0275\u0275directiveInject(LanguageService), \u0275\u0275directiveInject(GlobalMessageService));
};
_InvoicesListComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
  type: _InvoicesListComponent,
  selectors: [["cx-invoices-list"]],
  decls: 2,
  vars: 3,
  consts: [[4, "ngIf"], [1, "cx-invoices-list-header"], [1, "cx-invoices-list-body"], [1, "cx-invoices-list-sort", "top"], [1, "cx-invoices-list-form-group", "form-group"], ["ariaControls", "cx-invoices-list-table", 3, "sortListEvent", "sortOptions", "selectedOption", "placeholder", "ariaLabel"], ["class", "cx-invoices-list-pagination", 4, "ngIf"], ["id", "cx-invoices-list-table", 1, "table", "cx-invoices-list-table"], [1, "cx-invoices-list-thead-mobile"], ["scope", "col"], [1, "cx-invoices-list-attachment-icon", 3, "type", "title"], ["class", "cx-invoices-list-row", 4, "ngFor", "ngForOf"], [1, "cx-invoices-list-sort", "bottom"], [1, "cx-invoices-list-pagination"], [3, "viewPageEvent", "pagination"], [1, "cx-invoices-list-row"], [1, "cx-invoices-list-code"], [1, "cx-invoices-list-label"], [1, "cx-invoices-list-value"], [1, "cx-invoices-list-date"], [1, "cx-invoices-list-monetary"], [1, "cx-invoices-list-attachment"], ["class", "cx-invoices-list-attachment-btn", 3, "click", 4, "ngIf"], [1, "cx-invoices-list-attachment-btn", 3, "click"], [1, "cx-invoices-list-attachment-text", 3, "innerText"]],
  template: function InvoicesListComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275template(0, InvoicesListComponent_ng_container_0_Template, 2, 1, "ng-container", 0);
      \u0275\u0275pipe(1, "async");
    }
    if (rf & 2) {
      \u0275\u0275property("ngIf", \u0275\u0275pipeBind1(1, 1, ctx.invoicesList$));
    }
  },
  dependencies: [NgForOf, NgIf, SortingComponent, PaginationComponent, IconComponent, AsyncPipe, TranslatePipe, CxDatePipe],
  encapsulation: 2,
  changeDetection: 0
});
var InvoicesListComponent = _InvoicesListComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(InvoicesListComponent, [{
    type: Component,
    args: [{
      selector: "cx-invoices-list",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: `<ng-container *ngIf="invoicesList$ | async as invoicesList">
  <ng-container
    *ngIf="
      invoicesList.pagination &&
      invoicesList.pagination.totalCount &&
      invoicesList.pagination.totalCount > 0
    "
  >
    <div>
      <!-- HEADER -->
      <div class="cx-invoices-list-header">
        <h2>
          {{ 'pdfInvoices.invoicesTable.header' | cxTranslate }}
        </h2>
      </div>

      <!-- BODY -->
      <div class="cx-invoices-list-body">
        <div class="cx-invoices-list-sort top">
          <label class="cx-invoices-list-form-group form-group">
            <span>
              {{ 'pdfInvoices.sortBy' | cxTranslate }}
            </span>
            <cx-sorting
              [sortOptions]="sortOptions"
              (sortListEvent)="sortChange($event)"
              [selectedOption]="sort"
              placeholder="{{ 'pdfInvoices.sortBy' | cxTranslate }}"
              [ariaLabel]="'pdfInvoices.sortInvoices' | cxTranslate"
              ariaControls="cx-invoices-list-table"
            ></cx-sorting>
          </label>
          <div
            class="cx-invoices-list-pagination"
            *ngIf="
              invoicesList.pagination &&
              invoicesList.pagination.totalPages &&
              invoicesList.pagination.totalPages > 1
            "
          >
            <cx-pagination
              [pagination]="pagination"
              (viewPageEvent)="pageChange($event)"
            ></cx-pagination>
          </div>
        </div>

        <!-- TABLE -->
        <table
          id="cx-invoices-list-table"
          class="table cx-invoices-list-table"
          attr.aria-label="{{
            'pdfInvoices.invoicesTable.label' | cxTranslate
          }}"
        >
          <thead class="cx-invoices-list-thead-mobile">
            <th scope="col">
              {{ 'pdfInvoices.invoicesTable.invoiceId' | cxTranslate }}
            </th>
            <th scope="col">
              {{ 'pdfInvoices.invoicesTable.createdAt' | cxTranslate }}
            </th>
            <th scope="col">
              {{ 'pdfInvoices.invoicesTable.netAmount' | cxTranslate }}
            </th>
            <th scope="col">
              {{ 'pdfInvoices.invoicesTable.totalAmount' | cxTranslate }}
            </th>
            <th scope="col">
              <cx-icon
                [type]="ICON_TYPE.DOWNLOAD"
                class="cx-invoices-list-attachment-icon"
                title="{{
                  'pdfInvoices.invoicesTable.attachment' | cxTranslate
                }}"
              ></cx-icon>
            </th>
          </thead>
          <tbody>
            <tr
              *ngFor="let invoice of invoicesList.invoices"
              class="cx-invoices-list-row"
            >
              <td class="cx-invoices-list-code">
                <div class="cx-invoices-list-label">
                  {{ 'pdfInvoices.invoicesTable.invoiceId' | cxTranslate }}
                </div>
                <div class="cx-invoices-list-value">
                  {{ invoice.invoiceId }}
                </div>
              </td>
              <td class="cx-invoices-list-date">
                <div class="cx-invoices-list-label">
                  {{ 'pdfInvoices.invoicesTable.createdAt' | cxTranslate }}
                </div>
                <div class="cx-invoices-list-value">
                  {{ invoice.createdAt | cxDate: 'longDate' }}
                </div>
              </td>
              <td class="cx-invoices-list-monetary">
                <div class="cx-invoices-list-label">
                  {{ 'pdfInvoices.invoicesTable.netAmount' | cxTranslate }}
                </div>
                <div class="cx-invoices-list-value">
                  {{
                    invoice.netAmount?.formattedValue
                      ? invoice.netAmount?.formattedValue
                      : invoice.netAmount?.currencyIso +
                        '&nbsp;' +
                        invoice.netAmount?.value
                  }}
                </div>
              </td>
              <td class="cx-invoices-list-monetary">
                <div class="cx-invoices-list-label">
                  {{ 'pdfInvoices.invoicesTable.totalAmount' | cxTranslate }}
                </div>
                <div class="cx-invoices-list-value">
                  {{
                    invoice.totalAmount?.formattedValue
                      ? invoice.totalAmount?.formattedValue
                      : invoice.totalAmount?.currencyIso +
                        '&nbsp;' +
                        invoice.totalAmount?.value
                  }}
                </div>
              </td>
              <td class="cx-invoices-list-attachment">
                <div class="cx-invoices-list-label">
                  {{ 'pdfInvoices.invoicesTable.attachment' | cxTranslate }}
                </div>
                <div class="cx-invoices-list-value">
                  <button
                    *ngIf="invoice.invoiceId"
                    class="cx-invoices-list-attachment-btn"
                    (click)="
                      downloadPDFInvoice(
                        invoice.invoiceId,
                        invoice.externalSystemId
                      )
                    "
                    attr.aria-label="{{
                      'pdfInvoices.invoicesTable.attachmentDescription'
                        | cxTranslate
                          : {
                              id: invoice.invoiceId
                            }
                    }}"
                  >
                    <cx-icon
                      [type]="ICON_TYPE.FILE"
                      class="cx-invoices-list-attachment-icon"
                      title="{{
                        'pdfInvoices.invoicesTable.download' | cxTranslate
                      }}"
                    >
                    </cx-icon>
                    <span
                      class="cx-invoices-list-attachment-text"
                      [innerText]="
                        'pdfInvoices.invoicesTable.download' | cxTranslate
                      "
                    >
                    </span>
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>

        <!-- Select Form and Pagination Bottom -->
        <div class="cx-invoices-list-sort bottom">
          <div
            class="cx-invoices-list-pagination"
            *ngIf="
              invoicesList.pagination &&
              invoicesList.pagination.totalPages &&
              invoicesList.pagination.totalPages > 1
            "
          >
            <cx-pagination
              [pagination]="pagination"
              (viewPageEvent)="pageChange($event)"
            ></cx-pagination>
          </div>
        </div>
      </div>
    </div>
  </ng-container>
</ng-container>
`
    }]
  }], () => [{
    type: PDFInvoicesFacade
  }, {
    type: TranslationService
  }, {
    type: FileDownloadService
  }, {
    type: LanguageService
  }, {
    type: GlobalMessageService
  }], null);
})();
var _PDFInvoicesComponentsModule = class _PDFInvoicesComponentsModule {
};
_PDFInvoicesComponentsModule.\u0275fac = function PDFInvoicesComponentsModule_Factory(t) {
  return new (t || _PDFInvoicesComponentsModule)();
};
_PDFInvoicesComponentsModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
  type: _PDFInvoicesComponentsModule
});
_PDFInvoicesComponentsModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
  providers: [provideDefaultConfig({
    cmsComponents: {
      AccountOrderDetailsPDFInvoicesComponent: {
        component: InvoicesListComponent,
        guards: [AuthGuard]
      }
    }
  })],
  imports: [CommonModule, DatePickerModule, I18nModule, ReactiveFormsModule, ListNavigationModule, UrlModule, IconModule, MediaModule, SpinnerModule]
});
var PDFInvoicesComponentsModule = _PDFInvoicesComponentsModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PDFInvoicesComponentsModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, DatePickerModule, I18nModule, ReactiveFormsModule, ListNavigationModule, UrlModule, IconModule, MediaModule, SpinnerModule],
      declarations: [InvoicesListComponent],
      exports: [InvoicesListComponent],
      providers: [provideDefaultConfig({
        cmsComponents: {
          AccountOrderDetailsPDFInvoicesComponent: {
            component: InvoicesListComponent,
            guards: [AuthGuard]
          }
        }
      })]
    }]
  }], null, null);
})();

// node_modules/@spartacus/order/fesm2022/spartacus-order-components.mjs
var _c02 = (a0) => ({
  code: a0
});
var _c1 = (a0, a1) => ({
  cxRoute: a0,
  params: a1
});
function AmendOrderActionsComponent_button_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 4);
    \u0275\u0275listener("click", function AmendOrderActionsComponent_button_6_Template_button_click_0_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.continue($event));
    });
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "cxTranslate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "common.continue"), " ");
  }
}
function AmendOrderActionsComponent_button_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "button", 5);
    \u0275\u0275pipe(1, "cxTranslate");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "cxTranslate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(1, 2, "orderDetails.cancellationAndReturn.submitDescription"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 4, "orderDetails.cancellationAndReturn.submit"), " ");
  }
}
function CancelOrReturnItemsComponent_div_0_button_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 11);
    \u0275\u0275listener("click", function CancelOrReturnItemsComponent_div_0_button_1_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const form_r2 = \u0275\u0275nextContext().ngIf;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.setAll(form_r2));
    });
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "cxTranslate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "orderDetails.cancellationAndReturn.setAll"), " ");
  }
}
function CancelOrReturnItemsComponent_div_0_th_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 12);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "cxTranslate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "orderDetails.cancellationAndReturn.quantity"), " ");
  }
}
function CancelOrReturnItemsComponent_div_0_th_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 13);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "cxTranslate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "orderDetails.cancellationAndReturn.totalPrice"), " ");
  }
}
function CancelOrReturnItemsComponent_div_0_tr_20_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 28);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "cxTranslate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", \u0275\u0275pipeBind1(2, 2, "cartItems.id"), " ", item_r4.product.code, " ");
  }
}
function CancelOrReturnItemsComponent_div_0_tr_20_ng_container_8_div_1_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 33);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const variant_r5 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", variant_r5.name, ": ");
  }
}
function CancelOrReturnItemsComponent_div_0_tr_20_ng_container_8_div_1_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 25);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const variant_r5 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", variant_r5.value, " ");
  }
}
function CancelOrReturnItemsComponent_div_0_tr_20_ng_container_8_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 30);
    \u0275\u0275template(1, CancelOrReturnItemsComponent_div_0_tr_20_ng_container_8_div_1_div_1_Template, 2, 1, "div", 31)(2, CancelOrReturnItemsComponent_div_0_tr_20_ng_container_8_div_1_div_2_Template, 2, 1, "div", 32);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const variant_r5 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", variant_r5.name);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", variant_r5.value);
  }
}
function CancelOrReturnItemsComponent_div_0_tr_20_ng_container_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, CancelOrReturnItemsComponent_div_0_tr_20_ng_container_8_div_1_Template, 3, 2, "div", 29);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const item_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", item_r4.product.baseOptions[0] == null ? null : item_r4.product.baseOptions[0].selected == null ? null : item_r4.product.baseOptions[0].selected.variantOptionQualifiers);
  }
}
function CancelOrReturnItemsComponent_div_0_tr_20_td_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 34)(1, "div", 24);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "cxTranslate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 25);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 2, "orderDetails.cancellationAndReturn.itemPrice"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", item_r4.basePrice == null ? null : item_r4.basePrice.formattedValue, " ");
  }
}
function CancelOrReturnItemsComponent_div_0_tr_20_td_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 35)(1, "div", 36);
    \u0275\u0275pipe(2, "cxTranslate");
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "cxTranslate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 25);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r4 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275propertyInterpolate("title", \u0275\u0275pipeBind1(2, 3, "cartItems.quantityTitle"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 5, "orderDetails.cancellationAndReturn.quantity"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r2.getMaxAmendQuantity(item_r4), " ");
  }
}
function CancelOrReturnItemsComponent_div_0_tr_20_ng_container_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const item_r4 = \u0275\u0275nextContext().$implicit;
    const form_r2 = \u0275\u0275nextContext().ngIf;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.getControl(form_r2, item_r4).value, " ");
  }
}
function CancelOrReturnItemsComponent_div_0_tr_20_cx_item_counter_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "cx-item-counter", 37);
  }
  if (rf & 2) {
    const item_r4 = \u0275\u0275nextContext().$implicit;
    const form_r2 = \u0275\u0275nextContext().ngIf;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("min", 0)("max", ctx_r2.getMaxAmendQuantity(item_r4))("control", ctx_r2.getControl(form_r2, item_r4));
  }
}
function CancelOrReturnItemsComponent_div_0_tr_20_td_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 38)(1, "div", 24);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "cxTranslate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 25);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_7_0;
    const item_r4 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 2, "orderDetails.cancellationAndReturn.totalPrice"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate((tmp_7_0 = ctx_r2.getItemPrice(item_r4)) == null ? null : tmp_7_0.formattedValue);
  }
}
function CancelOrReturnItemsComponent_div_0_tr_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr", 14)(1, "td", 15)(2, "div", 16);
    \u0275\u0275element(3, "cx-media", 17);
    \u0275\u0275elementStart(4, "div", 18)(5, "div", 19);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275template(7, CancelOrReturnItemsComponent_div_0_tr_20_div_7_Template, 3, 4, "div", 20);
    \u0275\u0275elementEnd();
    \u0275\u0275template(8, CancelOrReturnItemsComponent_div_0_tr_20_ng_container_8_Template, 2, 1, "ng-container", 0);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(9, CancelOrReturnItemsComponent_div_0_tr_20_td_9_Template, 6, 4, "td", 21)(10, CancelOrReturnItemsComponent_div_0_tr_20_td_10_Template, 7, 7, "td", 22);
    \u0275\u0275elementStart(11, "td", 23)(12, "div", 24);
    \u0275\u0275text(13);
    \u0275\u0275pipe(14, "cxTranslate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "div", 25);
    \u0275\u0275template(16, CancelOrReturnItemsComponent_div_0_tr_20_ng_container_16_Template, 2, 1, "ng-container", 0)(17, CancelOrReturnItemsComponent_div_0_tr_20_cx_item_counter_17_Template, 1, 3, "cx-item-counter", 26);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(18, CancelOrReturnItemsComponent_div_0_tr_20_td_18_Template, 6, 4, "td", 27);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r4 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275property("container", item_r4.product.images == null ? null : item_r4.product.images.PRIMARY);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", item_r4.product.name, " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", item_r4.product.code);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", item_r4.product.baseOptions == null ? null : item_r4.product.baseOptions.length);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", item_r4.basePrice);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r2.isConfirmation);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(14, 10, ctx_r2.isCancellation() ? "orderDetails.cancellationAndReturn.cancelQty" : "orderDetails.cancellationAndReturn.returnQty"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r2.isConfirmation);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r2.isConfirmation);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.isConfirmation);
  }
}
function CancelOrReturnItemsComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275template(1, CancelOrReturnItemsComponent_div_0_button_1_Template, 3, 3, "button", 1);
    \u0275\u0275elementStart(2, "table", 2)(3, "caption", 3);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "cxTranslate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "thead")(7, "tr")(8, "th", 4);
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "cxTranslate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "th", 5);
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "cxTranslate");
    \u0275\u0275elementEnd();
    \u0275\u0275template(14, CancelOrReturnItemsComponent_div_0_th_14_Template, 3, 3, "th", 6);
    \u0275\u0275elementStart(15, "th", 7);
    \u0275\u0275text(16);
    \u0275\u0275pipe(17, "cxTranslate");
    \u0275\u0275elementEnd();
    \u0275\u0275template(18, CancelOrReturnItemsComponent_div_0_th_18_Template, 3, 3, "th", 8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "tbody", 9);
    \u0275\u0275template(20, CancelOrReturnItemsComponent_div_0_tr_20_Template, 19, 12, "tr", 10);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r2.isConfirmation);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(5, 8, "orderDetails.caption"), " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(10, 10, "orderDetails.cancellationAndReturn.item"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(13, 12, "orderDetails.cancellationAndReturn.itemPrice"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", !ctx_r2.isConfirmation);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(17, 14, ctx_r2.isCancellation() ? "orderDetails.cancellationAndReturn.cancelQty" : "orderDetails.cancellationAndReturn.returnQty"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r2.isConfirmation);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r2.entries);
  }
}
function CancelOrderConfirmationComponent_form_0_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function CancelOrderConfirmationComponent_form_0_cx_amend_order_items_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "cx-amend-order-items", 5);
  }
  if (rf & 2) {
    const entries_r4 = ctx.ngIf;
    \u0275\u0275property("entries", entries_r4)("isConfirmation", true);
  }
}
function CancelOrderConfirmationComponent_form_0_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function CancelOrderConfirmationComponent_form_0_ng_template_5_cx_amend_order_actions_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "cx-amend-order-actions", 7);
  }
  if (rf & 2) {
    const form_r2 = \u0275\u0275nextContext(2).ngIf;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("orderCode", ctx_r2.orderCode)("amendOrderForm", form_r2);
  }
}
function CancelOrderConfirmationComponent_form_0_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, CancelOrderConfirmationComponent_form_0_ng_template_5_cx_amend_order_actions_0_Template, 1, 2, "cx-amend-order-actions", 6);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngIf", ctx_r2.orderCode);
  }
}
function CancelOrderConfirmationComponent_form_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "form", 2);
    \u0275\u0275listener("ngSubmit", function CancelOrderConfirmationComponent_form_0_Template_form_ngSubmit_0_listener() {
      const form_r2 = \u0275\u0275restoreView(_r1).ngIf;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.submit(form_r2));
    });
    \u0275\u0275template(1, CancelOrderConfirmationComponent_form_0_ng_container_1_Template, 1, 0, "ng-container", 3)(2, CancelOrderConfirmationComponent_form_0_cx_amend_order_items_2_Template, 1, 2, "cx-amend-order-items", 4);
    \u0275\u0275pipe(3, "async");
    \u0275\u0275template(4, CancelOrderConfirmationComponent_form_0_ng_container_4_Template, 1, 0, "ng-container", 3)(5, CancelOrderConfirmationComponent_form_0_ng_template_5_Template, 1, 1, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const form_r2 = ctx.ngIf;
    const actions_r5 = \u0275\u0275reference(6);
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("formGroup", form_r2);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", actions_r5);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", \u0275\u0275pipeBind1(3, 4, ctx_r2.entries$));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngTemplateOutlet", actions_r5);
  }
}
function CancelOrderComponent_ng_container_0_cx_message_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "cx-message", 6);
    \u0275\u0275pipe(1, "cxTranslate");
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("text", \u0275\u0275pipeBind1(1, 3, "formErrors.cxNoSelectedItemToCancel"))("isVisibleCloseButton", false)("type", ctx_r0.globalMessageType.MSG_TYPE_ERROR);
  }
}
function CancelOrderComponent_ng_container_0_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function CancelOrderComponent_ng_container_0_cx_amend_order_items_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "cx-amend-order-items", 7);
  }
  if (rf & 2) {
    const entries_r2 = ctx.ngIf;
    \u0275\u0275property("entries", entries_r2);
  }
}
function CancelOrderComponent_ng_container_0_ng_container_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function CancelOrderComponent_ng_container_0_ng_template_7_cx_amend_order_actions_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "cx-amend-order-actions", 9);
  }
  if (rf & 2) {
    const form_r3 = \u0275\u0275nextContext(2).ngIf;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("orderCode", ctx_r0.orderCode)("amendOrderForm", form_r3);
  }
}
function CancelOrderComponent_ng_container_0_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, CancelOrderComponent_ng_container_0_ng_template_7_cx_amend_order_actions_0_Template, 1, 2, "cx-amend-order-actions", 8);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngIf", ctx_r0.orderCode);
  }
}
function CancelOrderComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, CancelOrderComponent_ng_container_0_cx_message_1_Template, 2, 5, "cx-message", 2)(2, CancelOrderComponent_ng_container_0_ng_container_2_Template, 1, 0, "ng-container", 3)(3, CancelOrderComponent_ng_container_0_cx_amend_order_items_3_Template, 1, 1, "cx-amend-order-items", 4);
    \u0275\u0275pipe(4, "async");
    \u0275\u0275element(5, "cx-form-errors", 5);
    \u0275\u0275template(6, CancelOrderComponent_ng_container_0_ng_container_6_Template, 1, 0, "ng-container", 3)(7, CancelOrderComponent_ng_container_0_ng_template_7_Template, 1, 1, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const form_r3 = ctx.ngIf;
    const actions_r4 = \u0275\u0275reference(8);
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !form_r3.get("entries").valid && form_r3.get("entries").touched);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", actions_r4);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", \u0275\u0275pipeBind1(4, 5, ctx_r0.entries$));
    \u0275\u0275advance(2);
    \u0275\u0275property("control", form_r3.get("entries"));
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", actions_r4);
  }
}
function ReturnOrderConfirmationComponent_form_0_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function ReturnOrderConfirmationComponent_form_0_cx_amend_order_items_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "cx-amend-order-items", 5);
  }
  if (rf & 2) {
    const entries_r4 = ctx.ngIf;
    \u0275\u0275property("entries", entries_r4)("isConfirmation", true);
  }
}
function ReturnOrderConfirmationComponent_form_0_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function ReturnOrderConfirmationComponent_form_0_ng_template_5_cx_amend_order_actions_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "cx-amend-order-actions", 7);
  }
  if (rf & 2) {
    const form_r2 = \u0275\u0275nextContext(2).ngIf;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("orderCode", ctx_r2.orderCode)("amendOrderForm", form_r2);
  }
}
function ReturnOrderConfirmationComponent_form_0_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, ReturnOrderConfirmationComponent_form_0_ng_template_5_cx_amend_order_actions_0_Template, 1, 2, "cx-amend-order-actions", 6);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngIf", ctx_r2.orderCode);
  }
}
function ReturnOrderConfirmationComponent_form_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "form", 2);
    \u0275\u0275listener("ngSubmit", function ReturnOrderConfirmationComponent_form_0_Template_form_ngSubmit_0_listener() {
      const form_r2 = \u0275\u0275restoreView(_r1).ngIf;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.submit(form_r2));
    });
    \u0275\u0275template(1, ReturnOrderConfirmationComponent_form_0_ng_container_1_Template, 1, 0, "ng-container", 3)(2, ReturnOrderConfirmationComponent_form_0_cx_amend_order_items_2_Template, 1, 2, "cx-amend-order-items", 4);
    \u0275\u0275pipe(3, "async");
    \u0275\u0275template(4, ReturnOrderConfirmationComponent_form_0_ng_container_4_Template, 1, 0, "ng-container", 3)(5, ReturnOrderConfirmationComponent_form_0_ng_template_5_Template, 1, 1, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const form_r2 = ctx.ngIf;
    const actions_r5 = \u0275\u0275reference(6);
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("formGroup", form_r2);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", actions_r5);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", \u0275\u0275pipeBind1(3, 4, ctx_r2.entries$));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngTemplateOutlet", actions_r5);
  }
}
function ReturnOrderComponent_ng_container_0_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function ReturnOrderComponent_ng_container_0_cx_amend_order_items_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "cx-amend-order-items", 5);
  }
  if (rf & 2) {
    const entries_r1 = ctx.ngIf;
    \u0275\u0275property("entries", entries_r1);
  }
}
function ReturnOrderComponent_ng_container_0_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function ReturnOrderComponent_ng_container_0_ng_template_6_cx_amend_order_actions_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "cx-amend-order-actions", 7);
  }
  if (rf & 2) {
    const form_r2 = \u0275\u0275nextContext(2).ngIf;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("orderCode", ctx_r2.orderCode)("amendOrderForm", form_r2);
  }
}
function ReturnOrderComponent_ng_container_0_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, ReturnOrderComponent_ng_container_0_ng_template_6_cx_amend_order_actions_0_Template, 1, 2, "cx-amend-order-actions", 6);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngIf", ctx_r2.orderCode);
  }
}
function ReturnOrderComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, ReturnOrderComponent_ng_container_0_ng_container_1_Template, 1, 0, "ng-container", 2)(2, ReturnOrderComponent_ng_container_0_cx_amend_order_items_2_Template, 1, 1, "cx-amend-order-items", 3);
    \u0275\u0275pipe(3, "async");
    \u0275\u0275element(4, "cx-form-errors", 4);
    \u0275\u0275template(5, ReturnOrderComponent_ng_container_0_ng_container_5_Template, 1, 0, "ng-container", 2)(6, ReturnOrderComponent_ng_container_0_ng_template_6_Template, 1, 1, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const form_r2 = ctx.ngIf;
    const actions_r4 = \u0275\u0275reference(7);
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", actions_r4);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", \u0275\u0275pipeBind1(3, 4, ctx_r2.entries$));
    \u0275\u0275advance(2);
    \u0275\u0275property("control", form_r2.get("entries"));
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", actions_r4);
  }
}
var _c2 = () => ({
  cxRoute: "orders"
});
var _c3 = (a0) => ({
  value: a0
});
var _c4 = (a0) => ({
  cxRoute: "orderDetails",
  params: a0
});
var _c5 = () => ({
  value: 1
});
var _c6 = (a0) => ({
  cxRoute: "orderReturn",
  params: a0
});
var _c7 = () => ({
  cxRoute: "home"
});
function MyAccountV2OrdersComponent_div_11_ng_container_1_ng_container_2_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15);
    \u0275\u0275pipe(1, "cxTranslate");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "cxTranslate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const order_r1 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(1, 2, "myAccountV2Orders.orderStatusLabel"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 4, "orderDetails.statusDisplay_" + order_r1.statusDisplay), " ");
  }
}
function MyAccountV2OrdersComponent_div_11_ng_container_1_ng_container_2_ng_container_9_span_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "cxTranslate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const order_r1 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" + ", \u0275\u0275pipeBind2(2, 1, "myAccountV2Orders.items", \u0275\u0275pureFunction1(4, _c3, order_r1.totalItems - 1)), " ");
  }
}
function MyAccountV2OrdersComponent_div_11_ng_container_1_ng_container_2_ng_container_9_span_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "cxTranslate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" + ", \u0275\u0275pipeBind2(2, 1, "myAccountV2Orders.item", \u0275\u0275pureFunction0(4, _c5)), " ");
  }
}
function MyAccountV2OrdersComponent_div_11_ng_container_1_ng_container_2_ng_container_9_span_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementStart(2, "a", 27);
    \u0275\u0275pipe(3, "cxUrl");
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "cxTranslate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const order_r1 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", " | ", "");
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", \u0275\u0275pipeBind1(3, 3, \u0275\u0275pureFunction1(7, _c6, order_r1)));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(5, 5, "myAccountV2Orders.returnOrder"), " ");
  }
}
function MyAccountV2OrdersComponent_div_11_ng_container_1_ng_container_2_ng_container_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 16)(2, "div", 17);
    \u0275\u0275element(3, "cx-media", 18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 19)(5, "div", 20)(6, "div", 21);
    \u0275\u0275text(7);
    \u0275\u0275template(8, MyAccountV2OrdersComponent_div_11_ng_container_1_ng_container_2_ng_container_9_span_8_Template, 3, 6, "span", 14)(9, MyAccountV2OrdersComponent_div_11_ng_container_1_ng_container_2_ng_container_9_span_9_Template, 3, 5, "span", 14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 22);
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "cxDate");
    \u0275\u0275pipe(13, "cxTranslate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "div", 23);
    \u0275\u0275text(15);
    \u0275\u0275pipe(16, "cxTranslate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "div", 24)(18, "div", 25);
    \u0275\u0275text(19);
    \u0275\u0275pipe(20, "cxTranslate");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(21, "div", 26)(22, "span")(23, "a", 27);
    \u0275\u0275pipe(24, "cxUrl");
    \u0275\u0275pipe(25, "cxTranslate");
    \u0275\u0275text(26);
    \u0275\u0275pipe(27, "cxTranslate");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(28, MyAccountV2OrdersComponent_div_11_ng_container_1_ng_container_2_ng_container_9_span_28_Template, 6, 9, "span", 14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const product_r2 = ctx.ngIf;
    const order_r1 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275property("container", product_r2.images == null ? null : product_r2.images.PRIMARY);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", product_r2.name, " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", order_r1.totalItems - 1 > 1);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", order_r1.totalItems - 1 === 1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(13, 14, "myAccountV2Orders.purchasedOn", \u0275\u0275pureFunction1(29, _c3, \u0275\u0275pipeBind2(12, 11, order_r1.placed, "d, MMMM, yyyy"))), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(16, 17, "myAccountV2Orders.orderedItems", \u0275\u0275pureFunction1(31, _c3, order_r1.totalItems)), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(20, 20, "myAccountV2Orders.totalPrice", \u0275\u0275pureFunction1(33, _c3, order_r1.total == null ? null : order_r1.total.formattedValue)), " ");
    \u0275\u0275advance(4);
    \u0275\u0275property("routerLink", \u0275\u0275pipeBind1(24, 23, \u0275\u0275pureFunction1(35, _c4, order_r1)));
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(25, 25, "myAccountV2Orders.orderDetailsLabel"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(27, 27, "myAccountV2Orders.orderDetails"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", order_r1.returnable);
  }
}
function MyAccountV2OrdersComponent_div_11_ng_container_1_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 9)(2, "div", 10);
    \u0275\u0275template(3, MyAccountV2OrdersComponent_div_11_ng_container_1_ng_container_2_div_3_Template, 4, 6, "div", 11);
    \u0275\u0275elementStart(4, "div", 12);
    \u0275\u0275pipe(5, "cxTranslate");
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "cxTranslate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 13);
    \u0275\u0275template(9, MyAccountV2OrdersComponent_div_11_ng_container_1_ng_container_2_ng_container_9_Template, 29, 37, "ng-container", 14);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const order_r1 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", order_r1.statusDisplay);
    \u0275\u0275advance();
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(5, 4, "myAccountV2OrderHistory.orderCodeLabel"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(7, 6, "myAccountV2Orders.orderNumber", \u0275\u0275pureFunction1(9, _c3, order_r1.code)), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r2.getProduct(order_r1));
  }
}
function MyAccountV2OrdersComponent_div_11_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 7);
    \u0275\u0275template(2, MyAccountV2OrdersComponent_div_11_ng_container_1_ng_container_2_Template, 10, 11, "ng-container", 8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const orderHistory_r4 = \u0275\u0275nextContext().ngIf;
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", orderHistory_r4.orders);
  }
}
function MyAccountV2OrdersComponent_div_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275template(1, MyAccountV2OrdersComponent_div_11_ng_container_1_Template, 3, 1, "ng-container", 6);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const orderHistory_r4 = ctx.ngIf;
    \u0275\u0275nextContext();
    const noOrder_r5 = \u0275\u0275reference(14);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", orderHistory_r4.pagination.totalResults > 0)("ngIfElse", noOrder_r5);
  }
}
function MyAccountV2OrdersComponent_ng_template_13_div_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 29)(1, "div");
    \u0275\u0275pipe(2, "cxTranslate");
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "cxTranslate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "a", 30);
    \u0275\u0275pipe(6, "cxUrl");
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "cxTranslate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(2, 4, "orderHistory.notFound"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 6, "orderHistory.noOrders"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", \u0275\u0275pipeBind1(6, 8, \u0275\u0275pureFunction0(12, _c7)));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(8, 10, "orderHistory.startShopping"));
  }
}
function MyAccountV2OrdersComponent_ng_template_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, MyAccountV2OrdersComponent_ng_template_13_div_0_Template, 9, 13, "div", 28);
    \u0275\u0275pipe(1, "async");
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    const loading_r6 = \u0275\u0275reference(16);
    \u0275\u0275property("ngIf", \u0275\u0275pipeBind1(1, 2, ctx_r2.isLoaded$))("ngIfElse", loading_r6);
  }
}
function MyAccountV2OrdersComponent_ng_template_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 31);
    \u0275\u0275element(1, "cx-spinner");
    \u0275\u0275elementEnd();
  }
}
function OrderDetailBillingComponent_div_0_div_1_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5);
    \u0275\u0275element(1, "cx-card", 6);
    \u0275\u0275pipe(2, "async");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const paymentDetails_r1 = \u0275\u0275nextContext().ngIf;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("content", \u0275\u0275pipeBind1(2, 1, ctx_r1.getPaymentMethodCard(paymentDetails_r1)));
  }
}
function OrderDetailBillingComponent_div_0_div_1_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5);
    \u0275\u0275element(1, "cx-card", 6);
    \u0275\u0275pipe(2, "async");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const paymentDetails_r1 = \u0275\u0275nextContext().ngIf;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("content", \u0275\u0275pipeBind1(2, 1, ctx_r1.getBillingAddressCard(paymentDetails_r1)));
  }
}
function OrderDetailBillingComponent_div_0_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3);
    \u0275\u0275template(1, OrderDetailBillingComponent_div_0_div_1_div_1_Template, 3, 3, "div", 4)(2, OrderDetailBillingComponent_div_0_div_1_div_2_Template, 3, 3, "div", 4);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const paymentDetails_r1 = ctx.ngIf;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isPaymentInfoCardFull(paymentDetails_r1));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", paymentDetails_r1 == null ? null : paymentDetails_r1.billingAddress);
  }
}
function OrderDetailBillingComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1);
    \u0275\u0275template(1, OrderDetailBillingComponent_div_0_div_1_Template, 3, 2, "div", 2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const order_r3 = ctx.ngIf;
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", order_r3.paymentInfo);
  }
}
var _c8 = (a0) => ({
  item: a0,
  readonly: true
});
function OrderOverviewComponent_div_0_ng_container_1_div_1_ng_container_1_ng_template_15_Template(rf, ctx) {
}
function OrderOverviewComponent_div_0_ng_container_1_div_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 7);
    \u0275\u0275element(2, "cx-card", 8);
    \u0275\u0275pipe(3, "async");
    \u0275\u0275element(4, "cx-card", 8);
    \u0275\u0275pipe(5, "async");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 7);
    \u0275\u0275element(7, "cx-card", 8);
    \u0275\u0275pipe(8, "cxDate");
    \u0275\u0275pipe(9, "async");
    \u0275\u0275element(10, "cx-card", 8);
    \u0275\u0275pipe(11, "async");
    \u0275\u0275element(12, "cx-card", 8);
    \u0275\u0275pipe(13, "cxDate");
    \u0275\u0275pipe(14, "async");
    \u0275\u0275template(15, OrderOverviewComponent_div_0_ng_container_1_div_1_ng_container_1_ng_template_15_Template, 0, 0, "ng-template", 9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const order_r1 = \u0275\u0275nextContext(3).ngIf;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("content", \u0275\u0275pipeBind1(3, 7, ctx_r1.getReplenishmentCodeCardContent(order_r1 == null ? null : order_r1.replenishmentOrderCode)));
    \u0275\u0275advance(2);
    \u0275\u0275property("content", \u0275\u0275pipeBind1(5, 9, ctx_r1.getReplenishmentActiveCardContent(order_r1 == null ? null : order_r1.active)));
    \u0275\u0275advance(3);
    \u0275\u0275property("content", \u0275\u0275pipeBind1(9, 13, ctx_r1.getReplenishmentStartOnCardContent(\u0275\u0275pipeBind1(8, 11, order_r1 == null ? null : order_r1.firstDate))));
    \u0275\u0275advance(3);
    \u0275\u0275property("content", \u0275\u0275pipeBind1(11, 15, ctx_r1.getReplenishmentFrequencyCardContent(order_r1 == null ? null : order_r1.trigger == null ? null : order_r1.trigger.displayTimeTable)));
    \u0275\u0275advance(2);
    \u0275\u0275property("content", \u0275\u0275pipeBind1(14, 19, ctx_r1.getReplenishmentNextDateCardContent(\u0275\u0275pipeBind1(13, 17, order_r1 == null ? null : order_r1.trigger == null ? null : order_r1.trigger.activationTime))));
    \u0275\u0275advance(3);
    \u0275\u0275property("cxOutlet", ctx_r1.cartOutlets.ORDER_OVERVIEW)("cxOutletContext", \u0275\u0275pureFunction1(21, _c8, order_r1));
  }
}
function OrderOverviewComponent_div_0_ng_container_1_div_1_ng_template_2_ng_template_8_Template(rf, ctx) {
}
function OrderOverviewComponent_div_0_ng_container_1_div_1_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7);
    \u0275\u0275element(1, "cx-card", 8);
    \u0275\u0275pipe(2, "async");
    \u0275\u0275element(3, "cx-card", 8);
    \u0275\u0275pipe(4, "cxDate");
    \u0275\u0275pipe(5, "async");
    \u0275\u0275element(6, "cx-card", 8);
    \u0275\u0275pipe(7, "async");
    \u0275\u0275template(8, OrderOverviewComponent_div_0_ng_container_1_div_1_ng_template_2_ng_template_8_Template, 0, 0, "ng-template", 9);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const order_r1 = \u0275\u0275nextContext(3).ngIf;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("content", \u0275\u0275pipeBind1(2, 5, ctx_r1.getOrderCodeCardContent(order_r1 == null ? null : order_r1.code)));
    \u0275\u0275advance(2);
    \u0275\u0275property("content", \u0275\u0275pipeBind1(5, 9, ctx_r1.getOrderCurrentDateCardContent(\u0275\u0275pipeBind1(4, 7, order_r1 == null ? null : order_r1.created))));
    \u0275\u0275advance(3);
    \u0275\u0275property("content", \u0275\u0275pipeBind1(7, 11, ctx_r1.getOrderStatusCardContent(order_r1.statusDisplay)));
    \u0275\u0275advance(2);
    \u0275\u0275property("cxOutlet", ctx_r1.cartOutlets.ORDER_OVERVIEW)("cxOutletContext", \u0275\u0275pureFunction1(13, _c8, order_r1));
  }
}
function OrderOverviewComponent_div_0_ng_container_1_div_1_ng_container_4_ng_container_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275element(1, "cx-card", 8);
    \u0275\u0275pipe(2, "async");
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const order_r1 = \u0275\u0275nextContext(4).ngIf;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("content", \u0275\u0275pipeBind1(2, 1, ctx_r1.getCostCenterCardContent(order_r1 == null ? null : order_r1.costCenter)));
  }
}
function OrderOverviewComponent_div_0_ng_container_1_div_1_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 7);
    \u0275\u0275element(2, "cx-card", 8);
    \u0275\u0275pipe(3, "async");
    \u0275\u0275element(4, "cx-card", 8);
    \u0275\u0275pipe(5, "async");
    \u0275\u0275template(6, OrderOverviewComponent_div_0_ng_container_1_div_1_ng_container_4_ng_container_6_Template, 3, 3, "ng-container", 3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const order_r1 = \u0275\u0275nextContext(3).ngIf;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("content", \u0275\u0275pipeBind1(3, 3, ctx_r1.getPurchaseOrderNumber(order_r1 == null ? null : order_r1.purchaseOrderNumber)));
    \u0275\u0275advance(2);
    \u0275\u0275property("content", \u0275\u0275pipeBind1(5, 5, ctx_r1.getMethodOfPaymentCardContent(order_r1.paymentInfo)));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", order_r1.costCenter);
  }
}
function OrderOverviewComponent_div_0_ng_container_1_div_1_ng_container_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275element(1, "cx-card", 8);
    \u0275\u0275pipe(2, "async");
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const order_r1 = \u0275\u0275nextContext(3).ngIf;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("content", \u0275\u0275pipeBind1(2, 1, ctx_r1.getAddressCardContent(order_r1 == null ? null : order_r1.deliveryAddress)));
  }
}
function OrderOverviewComponent_div_0_ng_container_1_div_1_ng_container_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275element(1, "cx-card", 8);
    \u0275\u0275pipe(2, "async");
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const order_r1 = \u0275\u0275nextContext(3).ngIf;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("content", \u0275\u0275pipeBind1(2, 1, ctx_r1.getDeliveryModeCardContent(order_r1 == null ? null : order_r1.deliveryMode)));
  }
}
function OrderOverviewComponent_div_0_ng_container_1_div_1_ng_container_8_div_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275element(1, "cx-card", 8);
    \u0275\u0275pipe(2, "async");
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const order_r1 = \u0275\u0275nextContext(5).ngIf;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("content", \u0275\u0275pipeBind1(2, 1, ctx_r1.getPaymentInfoCardContent(order_r1 == null ? null : order_r1.paymentInfo)));
  }
}
function OrderOverviewComponent_div_0_ng_container_1_div_1_ng_container_8_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7);
    \u0275\u0275template(1, OrderOverviewComponent_div_0_ng_container_1_div_1_ng_container_8_div_1_ng_container_1_Template, 3, 3, "ng-container", 3);
    \u0275\u0275element(2, "cx-card", 8);
    \u0275\u0275pipe(3, "async");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const order_r1 = \u0275\u0275nextContext(4).ngIf;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isPaymentInfoCardFull(order_r1 == null ? null : order_r1.paymentInfo));
    \u0275\u0275advance();
    \u0275\u0275property("content", \u0275\u0275pipeBind1(3, 2, ctx_r1.getBillingAddressCardContent(order_r1 == null ? null : order_r1.paymentInfo == null ? null : order_r1.paymentInfo.billingAddress)));
  }
}
function OrderOverviewComponent_div_0_ng_container_1_div_1_ng_container_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, OrderOverviewComponent_div_0_ng_container_1_div_1_ng_container_8_div_1_Template, 4, 4, "div", 10);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const order_r1 = \u0275\u0275nextContext(3).ngIf;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (order_r1 == null ? null : order_r1.paymentInfo == null ? null : order_r1.paymentInfo.billingAddress) || ctx_r1.isPaymentInfoCardFull(order_r1 == null ? null : order_r1.paymentInfo));
  }
}
function OrderOverviewComponent_div_0_ng_container_1_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5);
    \u0275\u0275template(1, OrderOverviewComponent_div_0_ng_container_1_div_1_ng_container_1_Template, 16, 23, "ng-container", 6)(2, OrderOverviewComponent_div_0_ng_container_1_div_1_ng_template_2_Template, 9, 15, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(4, OrderOverviewComponent_div_0_ng_container_1_div_1_ng_container_4_Template, 7, 7, "ng-container", 3);
    \u0275\u0275elementStart(5, "div", 7);
    \u0275\u0275template(6, OrderOverviewComponent_div_0_ng_container_1_div_1_ng_container_6_Template, 3, 3, "ng-container", 3)(7, OrderOverviewComponent_div_0_ng_container_1_div_1_ng_container_7_Template, 3, 3, "ng-container", 3);
    \u0275\u0275elementEnd();
    \u0275\u0275template(8, OrderOverviewComponent_div_0_ng_container_1_div_1_ng_container_8_Template, 2, 1, "ng-container", 3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const otherOrder_r3 = \u0275\u0275reference(3);
    const order_r1 = \u0275\u0275nextContext(2).ngIf;
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", order_r1.replenishmentOrderCode)("ngIfElse", otherOrder_r3);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", order_r1.purchaseOrderNumber || order_r1.purchaseOrderNumber === "");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", order_r1.deliveryAddress);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", order_r1.deliveryMode);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", order_r1.paymentInfo);
  }
}
function OrderOverviewComponent_div_0_ng_container_1_div_3_ng_template_9_Template(rf, ctx) {
}
function OrderOverviewComponent_div_0_ng_container_1_div_3_cx_order_detail_billing_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "cx-order-detail-billing");
  }
}
function OrderOverviewComponent_div_0_ng_container_1_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5)(1, "div", 11);
    \u0275\u0275element(2, "cx-card", 8);
    \u0275\u0275pipe(3, "async");
    \u0275\u0275element(4, "cx-card", 8);
    \u0275\u0275pipe(5, "cxDate");
    \u0275\u0275pipe(6, "async");
    \u0275\u0275element(7, "cx-card", 8);
    \u0275\u0275pipe(8, "async");
    \u0275\u0275template(9, OrderOverviewComponent_div_0_ng_container_1_div_3_ng_template_9_Template, 0, 0, "ng-template", 9);
    \u0275\u0275elementEnd();
    \u0275\u0275template(10, OrderOverviewComponent_div_0_ng_container_1_div_3_cx_order_detail_billing_10_Template, 1, 0, "cx-order-detail-billing", 3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const order_r1 = \u0275\u0275nextContext(2).ngIf;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("content", \u0275\u0275pipeBind1(3, 6, ctx_r1.getOrderCodeCardContent(order_r1 == null ? null : order_r1.code)));
    \u0275\u0275advance(2);
    \u0275\u0275property("content", \u0275\u0275pipeBind1(6, 10, ctx_r1.getOrderCurrentDateCardContent(\u0275\u0275pipeBind1(5, 8, order_r1 == null ? null : order_r1.created))));
    \u0275\u0275advance(3);
    \u0275\u0275property("content", \u0275\u0275pipeBind1(8, 12, ctx_r1.getOrderStatusCardContent(order_r1.statusDisplay)));
    \u0275\u0275advance(2);
    \u0275\u0275property("cxOutlet", ctx_r1.cartOutlets.ORDER_OVERVIEW)("cxOutletContext", \u0275\u0275pureFunction1(14, _c8, order_r1));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isPaymentInfoCardFull(order_r1 == null ? null : order_r1.paymentInfo) || (order_r1 == null ? null : order_r1.paymentInfo == null ? null : order_r1.paymentInfo.billingAddress));
  }
}
function OrderOverviewComponent_div_0_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, OrderOverviewComponent_div_0_ng_container_1_div_1_Template, 9, 6, "div", 4);
    \u0275\u0275pipe(2, "async");
    \u0275\u0275template(3, OrderOverviewComponent_div_0_ng_container_1_div_3_Template, 11, 16, "div", 4);
    \u0275\u0275pipe(4, "async");
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !\u0275\u0275pipeBind1(2, 2, ctx_r1.simple$));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", \u0275\u0275pipeBind1(4, 4, ctx_r1.simple$));
  }
}
function OrderOverviewComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2);
    \u0275\u0275template(1, OrderOverviewComponent_div_0_ng_container_1_Template, 5, 6, "ng-container", 3);
    \u0275\u0275pipe(2, "async");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !\u0275\u0275pipeBind1(2, 1, ctx_r1.isOrderLoading$));
  }
}
var _c9 = () => [];
var _c10 = (a0, a1) => ({
  items: a0,
  readonly: true,
  promotionLocation: a1
});
function OrderConfirmationItemsComponent_div_0_ng_template_5_Template(rf, ctx) {
}
function OrderConfirmationItemsComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1)(1, "h4", 2);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "cxTranslate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(4, "cx-promotions", 3);
    \u0275\u0275template(5, OrderConfirmationItemsComponent_div_0_ng_template_5_Template, 0, 0, "ng-template", 4);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const order_r1 = ctx.ngIf;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 4, "checkoutOrderConfirmation.orderItems"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("promotions", order_r1.appliedOrderPromotions || \u0275\u0275pureFunction0(6, _c9));
    \u0275\u0275advance();
    \u0275\u0275property("cxOutlet", ctx_r1.cartOutlets.CART_ITEM_LIST)("cxOutletContext", \u0275\u0275pureFunction2(7, _c10, order_r1.entries, ctx_r1.promotionLocation));
  }
}
var _c11 = (a0) => ({
  items: a0,
  readonly: true
});
function OrderConfirmationShippingComponent_div_0_ng_container_1_div_13_ng_template_1_Template(rf, ctx) {
}
function OrderConfirmationShippingComponent_div_0_ng_container_1_div_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9);
    \u0275\u0275template(1, OrderConfirmationShippingComponent_div_0_ng_container_1_div_13_ng_template_1_Template, 0, 0, "ng-template", 10);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("cxOutlet", ctx_r0.cartOutlets.CART_ITEM_LIST)("cxOutletContext", \u0275\u0275pureFunction1(2, _c11, ctx_r0.entries));
  }
}
function OrderConfirmationShippingComponent_div_0_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "h2", 3);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "cxTranslate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 4)(5, "div", 5)(6, "div", 6);
    \u0275\u0275element(7, "cx-card", 7);
    \u0275\u0275pipe(8, "async");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 5)(10, "div", 6);
    \u0275\u0275element(11, "cx-card", 7);
    \u0275\u0275pipe(12, "async");
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(13, OrderConfirmationShippingComponent_div_0_ng_container_1_div_13_Template, 2, 4, "div", 8);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const order_r2 = \u0275\u0275nextContext().ngIf;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 4, "checkoutMode.deliveryEntries"), " ");
    \u0275\u0275advance(5);
    \u0275\u0275property("content", \u0275\u0275pipeBind1(8, 6, ctx_r0.getDeliveryAddressCard(order_r2.deliveryAddress)));
    \u0275\u0275advance(4);
    \u0275\u0275property("content", \u0275\u0275pipeBind1(12, 8, ctx_r0.getDeliveryModeCard(order_r2.deliveryMode)));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r0.showItemList);
  }
}
function OrderConfirmationShippingComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1);
    \u0275\u0275template(1, OrderConfirmationShippingComponent_div_0_ng_container_1_Template, 14, 10, "ng-container", 2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.showItemList || (ctx_r0.entries == null ? null : ctx_r0.entries.length) > 0);
  }
}
var _c12 = (a0) => ({
  email: a0
});
function OrderConfirmationThankYouMessageComponent_ng_container_0_div_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275element(1, "cx-guest-register-form", 4);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const order_r1 = \u0275\u0275nextContext().ngIf;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("guid", ctx_r1.orderGuid)("email", order_r1.paymentInfo.billingAddress.email);
  }
}
function OrderConfirmationThankYouMessageComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 1)(2, "span", 2);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "cxTranslate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 3)(6, "h2");
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "cxTranslate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "p");
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "cxTranslate");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(12, OrderConfirmationThankYouMessageComponent_ng_container_0_div_12_Template, 2, 2, "div", 0);
    \u0275\u0275element(13, "cx-add-to-home-screen-banner");
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    let tmp_2_0;
    const order_r1 = ctx.ngIf;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2(" ", \u0275\u0275pipeBind1(4, 5, "checkoutOrderConfirmation.confirmationOfOrder"), " ", (tmp_2_0 = order_r1.replenishmentOrderCode) !== null && tmp_2_0 !== void 0 ? tmp_2_0 : order_r1.code, " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(8, 7, "checkoutOrderConfirmation.thankYou"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(11, 9, "checkoutOrderConfirmation.invoiceHasBeenSentByEmail"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.isGuestCustomer && ctx_r1.orderGuid && (order_r1 == null ? null : order_r1.paymentInfo == null ? null : order_r1.paymentInfo.billingAddress == null ? null : order_r1.paymentInfo.billingAddress.email));
  }
}
function OrderConfirmationTotalsComponent_div_0_ng_template_3_Template(rf, ctx) {
}
function OrderConfirmationTotalsComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1)(1, "div", 2)(2, "div", 3);
    \u0275\u0275template(3, OrderConfirmationTotalsComponent_div_0_ng_template_3_Template, 0, 0, "ng-template", 4);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const order_r1 = ctx.ngIf;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275property("cxOutlet", ctx_r1.cartOutlets.ORDER_SUMMARY)("cxOutletContext", order_r1);
  }
}
var _c13 = (a0) => ({
  cxRoute: "orderCancel",
  params: a0
});
function OrderDetailActionsComponent_ng_container_0_a_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 3);
    \u0275\u0275pipe(1, "cxUrl");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "cxTranslate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const order_r1 = \u0275\u0275nextContext().ngIf;
    \u0275\u0275property("routerLink", \u0275\u0275pipeBind1(1, 2, \u0275\u0275pureFunction1(6, _c13, order_r1)));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 4, "orderDetails.cancellationAndReturn.cancelAction"), " ");
  }
}
function OrderDetailActionsComponent_ng_container_0_a_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 3);
    \u0275\u0275pipe(1, "cxUrl");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "cxTranslate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const order_r1 = \u0275\u0275nextContext().ngIf;
    \u0275\u0275property("routerLink", \u0275\u0275pipeBind1(1, 2, \u0275\u0275pureFunction1(6, _c6, order_r1)));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 4, "orderDetails.cancellationAndReturn.returnAction"), " ");
  }
}
function OrderDetailActionsComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 1)(2, "div", 2)(3, "button", 3);
    \u0275\u0275pipe(4, "cxUrl");
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "cxTranslate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 2);
    \u0275\u0275template(8, OrderDetailActionsComponent_ng_container_0_a_8_Template, 4, 8, "a", 4)(9, OrderDetailActionsComponent_ng_container_0_a_9_Template, 4, 8, "a", 4);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const order_r1 = ctx.ngIf;
    \u0275\u0275advance(3);
    \u0275\u0275property("routerLink", \u0275\u0275pipeBind1(4, 4, \u0275\u0275pureFunction0(8, _c2)));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(6, 6, "common.back"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", order_r1.cancellable);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", order_r1.returnable);
  }
}
function MyAccountV2OrderDetailsActionsComponent_ng_container_0_span_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 8)(1, "button", 10);
    \u0275\u0275pipe(2, "cxUrl");
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "cxTranslate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", \u0275\u0275pipeBind1(2, 2, \u0275\u0275pureFunction1(6, _c13, ctx_r1.order)));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 4, "myAccountV2OrderDetails.cancelItems"), " ");
  }
}
function MyAccountV2OrderDetailsActionsComponent_ng_container_0_span_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 8)(1, "button", 11);
    \u0275\u0275pipe(2, "cxUrl");
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "cxTranslate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", \u0275\u0275pipeBind1(2, 2, \u0275\u0275pureFunction1(6, _c6, ctx_r1.order)));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 4, "myAccountV2OrderDetails.returnItems"), " ");
  }
}
function MyAccountV2OrderDetailsActionsComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 1)(2, "div", 2)(3, "span", 3)(4, "span", 4)(5, "button", 5);
    \u0275\u0275pipe(6, "cxUrl");
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "cxTranslate");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(9, "div", 6)(10, "span", 3);
    \u0275\u0275template(11, MyAccountV2OrderDetailsActionsComponent_ng_container_0_span_11_Template, 5, 8, "span", 7)(12, MyAccountV2OrderDetailsActionsComponent_ng_container_0_span_12_Template, 5, 8, "span", 7);
    \u0275\u0275elementStart(13, "span", 8)(14, "button", 9);
    \u0275\u0275listener("click", function MyAccountV2OrderDetailsActionsComponent_ng_container_0_Template_button_click_14_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.showDialog(ctx_r1.order));
    });
    \u0275\u0275text(15);
    \u0275\u0275pipe(16, "cxTranslate");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275property("routerLink", \u0275\u0275pipeBind1(6, 5, \u0275\u0275pureFunction0(11, _c2)));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(8, 7, "myAccountV2OrderDetails.viewAllOrders"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ctx_r1.order.cancellable);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.order.returnable);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(16, 9, "myAccountV2OrderDetails.downloadInvoices"), " ");
  }
}
function MyAccountV2DownloadInvoicesComponent_div_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "cxTranslate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "myAccountV2OrderDetails.noInvoices"), " ");
  }
}
function MyAccountV2DownloadInvoicesComponent_div_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11);
    \u0275\u0275element(1, "cx-spinner");
    \u0275\u0275elementEnd();
  }
}
var _c14 = ["element"];
function ConsignmentTrackingComponent_ng_container_0_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div")(1, "button", 1);
    \u0275\u0275listener("click", function ConsignmentTrackingComponent_ng_container_0_div_1_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.openTrackingDialog(ctx_r1.consignment));
    });
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "cxTranslate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 1, "orderDetails.consignmentTracking.action"), " ");
  }
}
function ConsignmentTrackingComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, ConsignmentTrackingComponent_ng_container_0_div_1_Template, 4, 3, "div", 0);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.consignmentStatus.includes(ctx_r1.consignment.status));
  }
}
var _c15 = (a0, a1) => ({
  item: a0,
  order: a1
});
var _c16 = (a0, a1, a2) => ({
  displayAddToCart: a0,
  addToCartString: a1,
  optionalBtn: a2
});
var _c17 = (a0, a1, a2) => ({
  items: a0,
  readonly: true,
  promotionLocation: a1,
  options: a2
});
function OrderConsignedEntriesComponent_div_0_ng_template_1_span_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "cxTranslate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const consignment_r1 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "orderDetails.deliveryStatus_" + (consignment_r1 == null ? null : consignment_r1.status)), " ");
  }
}
function OrderConsignedEntriesComponent_div_0_ng_template_1_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10)(1, "div");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "cxDate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const consignment_r1 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 1, consignment_r1 == null ? null : consignment_r1.statusDate));
  }
}
function OrderConsignedEntriesComponent_div_0_ng_template_1_cx_consignment_tracking_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "cx-consignment-tracking", 11);
  }
  if (rf & 2) {
    const consignment_r1 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("orderCode", ctx_r1.order.code)("consignment", consignment_r1);
  }
}
function OrderConsignedEntriesComponent_div_0_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5)(1, "div", 6);
    \u0275\u0275template(2, OrderConsignedEntriesComponent_div_0_ng_template_1_span_2_Template, 3, 3, "span", 7);
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, OrderConsignedEntriesComponent_div_0_ng_template_1_div_3_Template, 4, 3, "div", 8)(4, OrderConsignedEntriesComponent_div_0_ng_template_1_cx_consignment_tracking_4_Template, 1, 2, "cx-consignment-tracking", 9);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const consignment_r1 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", consignment_r1);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", consignment_r1 == null ? null : consignment_r1.statusDate);
    \u0275\u0275advance();
    \u0275\u0275property("cxFeature", "consignmentTracking");
  }
}
function OrderConsignedEntriesComponent_div_0_ng_template_3_Template(rf, ctx) {
}
function OrderConsignedEntriesComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2);
    \u0275\u0275template(1, OrderConsignedEntriesComponent_div_0_ng_template_1_Template, 5, 3, "ng-template", 3);
    \u0275\u0275elementStart(2, "div", 4);
    \u0275\u0275template(3, OrderConsignedEntriesComponent_div_0_ng_template_3_Template, 0, 0, "ng-template", 3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const consignment_r1 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    const addToCartBtn_r3 = \u0275\u0275reference(2);
    \u0275\u0275advance();
    \u0275\u0275property("cxOutlet", ctx_r1.OrderOutlets.ORDER_CONSIGNMENT)("cxOutletContext", \u0275\u0275pureFunction2(4, _c15, consignment_r1, ctx_r1.order));
    \u0275\u0275advance(2);
    \u0275\u0275property("cxOutlet", ctx_r1.CartOutlets.CART_ITEM_LIST)("cxOutletContext", \u0275\u0275pureFunction3(11, _c17, consignment_r1.entries, ctx_r1.promotionLocation, \u0275\u0275pureFunction3(7, _c16, ctx_r1.enableAddToCart, ctx_r1.buyItAgainTranslation, addToCartBtn_r3)));
  }
}
function OrderConsignedEntriesComponent_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "cx-add-to-cart", 12);
  }
  if (rf & 2) {
    const ctx_ir4 = ctx.$implicit;
    \u0275\u0275property("productCode", ctx_ir4.item.product == null ? null : ctx_ir4.item.product.code)("product", ctx_ir4.item.product)("showQuantity", false)("options", ctx_ir4.options)("pickupStore", ctx_ir4.item.deliveryPointOfService == null ? null : ctx_ir4.item.deliveryPointOfService.name);
  }
}
var _c18 = (a0) => ({
  showItemList: false,
  order: a0
});
function OrderDetailItemsComponent_ng_container_0_ng_container_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275element(1, "cx-promotions", 4);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const order_r1 = \u0275\u0275nextContext(2).ngIf;
    \u0275\u0275advance();
    \u0275\u0275property("promotions", order_r1.appliedOrderPromotions || \u0275\u0275pureFunction0(1, _c9));
  }
}
function OrderDetailItemsComponent_ng_container_0_ng_container_1_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "cxTranslate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "deliveryPointOfServiceDetails.itemsToBePickUp"), " ");
  }
}
function OrderDetailItemsComponent_ng_container_0_ng_container_1_cx_order_consigned_entries_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "cx-order-consigned-entries", 6);
    \u0275\u0275pipe(1, "async");
    \u0275\u0275pipe(2, "cxTranslate");
  }
  if (rf & 2) {
    const order_r1 = \u0275\u0275nextContext(2).ngIf;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("order", order_r1)("consignments", ctx_r1.pickupConsignments)("enableAddToCart", \u0275\u0275pipeBind1(1, 4, ctx_r1.enableAddToCart$))("buyItAgainTranslation", \u0275\u0275pipeBind1(2, 6, "addToCart.buyItAgain"));
  }
}
function OrderDetailItemsComponent_ng_container_0_ng_container_1_4_ng_template_0_Template(rf, ctx) {
}
function OrderDetailItemsComponent_ng_container_0_ng_container_1_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, OrderDetailItemsComponent_ng_container_0_ng_container_1_4_ng_template_0_Template, 0, 0, "ng-template", 7);
  }
  if (rf & 2) {
    const order_r1 = \u0275\u0275nextContext(2).ngIf;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("cxOutlet", ctx_r1.OrderOutlets.CONSIGNMENT_DELIVERY_INFO)("cxOutletContext", \u0275\u0275pureFunction1(2, _c18, order_r1));
  }
}
function OrderDetailItemsComponent_ng_container_0_ng_container_1_cx_order_consigned_entries_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "cx-order-consigned-entries", 6);
    \u0275\u0275pipe(1, "async");
    \u0275\u0275pipe(2, "cxTranslate");
  }
  if (rf & 2) {
    const order_r1 = \u0275\u0275nextContext(2).ngIf;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("order", order_r1)("consignments", ctx_r1.deliveryConsignments)("enableAddToCart", \u0275\u0275pipeBind1(1, 4, ctx_r1.enableAddToCart$))("buyItAgainTranslation", \u0275\u0275pipeBind1(2, 6, "addToCart.buyItAgain"));
  }
}
function OrderDetailItemsComponent_ng_container_0_ng_container_1_ng_container_7_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9)(1, "div", 10);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "cxTranslate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const order_r1 = \u0275\u0275nextContext(3).ngIf;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 1, "orderDetails.statusDisplay_" + (order_r1 == null ? null : order_r1.statusDisplay)), " ");
  }
}
function OrderDetailItemsComponent_ng_container_0_ng_container_1_ng_container_7_ng_container_2_h2_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h2", 13);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "cxTranslate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "checkoutMode.deliveryEntries"), " ");
  }
}
function OrderDetailItemsComponent_ng_container_0_ng_container_1_ng_container_7_ng_container_2_ng_template_4_Template(rf, ctx) {
}
function OrderDetailItemsComponent_ng_container_0_ng_container_1_ng_container_7_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, OrderDetailItemsComponent_ng_container_0_ng_container_1_ng_container_7_ng_container_2_h2_1_Template, 3, 3, "h2", 11);
    \u0275\u0275pipe(2, "async");
    \u0275\u0275elementStart(3, "div", 12);
    \u0275\u0275template(4, OrderDetailItemsComponent_ng_container_0_ng_container_1_ng_container_7_ng_container_2_ng_template_4_Template, 0, 0, "ng-template", 7);
    \u0275\u0275pipe(5, "async");
    \u0275\u0275pipe(6, "cxTranslate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    \u0275\u0275nextContext(3);
    const addToCartBtn_r3 = \u0275\u0275reference(4);
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", \u0275\u0275pipeBind1(2, 3, ctx_r1.groupCartItems$));
    \u0275\u0275advance(3);
    \u0275\u0275property("cxOutlet", ctx_r1.CartOutlets.CART_ITEM_LIST)("cxOutletContext", \u0275\u0275pureFunction3(13, _c17, ctx_r1.deliveryUnConsignedEntries, ctx_r1.promotionLocation, \u0275\u0275pureFunction3(9, _c16, \u0275\u0275pipeBind1(5, 5, ctx_r1.enableAddToCart$), \u0275\u0275pipeBind1(6, 7, "addToCart.buyItAgain"), addToCartBtn_r3)));
  }
}
function OrderDetailItemsComponent_ng_container_0_ng_container_1_ng_container_7_ng_container_3_ng_template_5_Template(rf, ctx) {
}
function OrderDetailItemsComponent_ng_container_0_ng_container_1_ng_container_7_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "h2", 13);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "cxTranslate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 12);
    \u0275\u0275template(5, OrderDetailItemsComponent_ng_container_0_ng_container_1_ng_container_7_ng_container_3_ng_template_5_Template, 0, 0, "ng-template", 7);
    \u0275\u0275pipe(6, "async");
    \u0275\u0275pipe(7, "cxTranslate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    \u0275\u0275nextContext(3);
    const addToCartBtn_r3 = \u0275\u0275reference(4);
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 3, "checkoutPickupInStore.heading"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("cxOutlet", ctx_r1.CartOutlets.CART_ITEM_LIST)("cxOutletContext", \u0275\u0275pureFunction3(13, _c17, ctx_r1.pickupUnconsignedEntries, ctx_r1.promotionLocation, \u0275\u0275pureFunction3(9, _c16, \u0275\u0275pipeBind1(6, 5, ctx_r1.enableAddToCart$), \u0275\u0275pipeBind1(7, 7, "addToCart.buyItAgain"), addToCartBtn_r3)));
  }
}
function OrderDetailItemsComponent_ng_container_0_ng_container_1_ng_container_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, OrderDetailItemsComponent_ng_container_0_ng_container_1_ng_container_7_div_1_Template, 4, 3, "div", 8)(2, OrderDetailItemsComponent_ng_container_0_ng_container_1_ng_container_7_ng_container_2_Template, 7, 17, "ng-container", 1)(3, OrderDetailItemsComponent_ng_container_0_ng_container_1_ng_container_7_ng_container_3_Template, 8, 17, "ng-container", 1);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const order_r1 = \u0275\u0275nextContext(2).ngIf;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", order_r1 == null ? null : order_r1.statusDisplay);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.deliveryUnConsignedEntries == null ? null : ctx_r1.deliveryUnConsignedEntries.length);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.pickupUnconsignedEntries == null ? null : ctx_r1.pickupUnconsignedEntries.length);
  }
}
function OrderDetailItemsComponent_ng_container_0_ng_container_1_ng_container_8_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9)(1, "div", 10);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "cxTranslate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const order_r1 = \u0275\u0275nextContext(3).ngIf;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 1, "orderDetails.statusDisplay_" + (order_r1 == null ? null : order_r1.statusDisplay)), " ");
  }
}
function OrderDetailItemsComponent_ng_container_0_ng_container_1_ng_container_8_ng_template_4_Template(rf, ctx) {
}
function OrderDetailItemsComponent_ng_container_0_ng_container_1_ng_container_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 14);
    \u0275\u0275template(2, OrderDetailItemsComponent_ng_container_0_ng_container_1_ng_container_8_div_2_Template, 4, 3, "div", 8);
    \u0275\u0275elementStart(3, "div", 12);
    \u0275\u0275template(4, OrderDetailItemsComponent_ng_container_0_ng_container_1_ng_container_8_ng_template_4_Template, 0, 0, "ng-template", 7);
    \u0275\u0275pipe(5, "async");
    \u0275\u0275pipe(6, "cxTranslate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const order_r1 = \u0275\u0275nextContext(2).ngIf;
    const addToCartBtn_r3 = \u0275\u0275reference(4);
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", order_r1 == null ? null : order_r1.statusDisplay);
    \u0275\u0275advance(2);
    \u0275\u0275property("cxOutlet", ctx_r1.CartOutlets.CART_ITEM_LIST)("cxOutletContext", \u0275\u0275pureFunction3(11, _c17, order_r1.entries, ctx_r1.promotionLocation, \u0275\u0275pureFunction3(7, _c16, \u0275\u0275pipeBind1(5, 3, ctx_r1.enableAddToCart$), \u0275\u0275pipeBind1(6, 5, "addToCart.buyItAgain"), addToCartBtn_r3)));
  }
}
function OrderDetailItemsComponent_ng_container_0_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, OrderDetailItemsComponent_ng_container_0_ng_container_1_ng_container_1_Template, 2, 2, "ng-container", 1)(2, OrderDetailItemsComponent_ng_container_0_ng_container_1_div_2_Template, 3, 3, "div", 2)(3, OrderDetailItemsComponent_ng_container_0_ng_container_1_cx_order_consigned_entries_3_Template, 3, 8, "cx-order-consigned-entries", 3)(4, OrderDetailItemsComponent_ng_container_0_ng_container_1_4_Template, 1, 4, null, 1);
    \u0275\u0275pipe(5, "async");
    \u0275\u0275template(6, OrderDetailItemsComponent_ng_container_0_ng_container_1_cx_order_consigned_entries_6_Template, 3, 8, "cx-order-consigned-entries", 3)(7, OrderDetailItemsComponent_ng_container_0_ng_container_1_ng_container_7_Template, 4, 3, "ng-container", 1)(8, OrderDetailItemsComponent_ng_container_0_ng_container_1_ng_container_8_Template, 7, 15, "ng-container", 1);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const order_r1 = \u0275\u0275nextContext().ngIf;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (order_r1.consignments == null ? null : order_r1.consignments.length) || (order_r1.unconsignedEntries == null ? null : order_r1.unconsignedEntries.length) || order_r1.replenishmentOrderCode);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.pickupConsignments == null ? null : ctx_r1.pickupConsignments.length);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.pickupConsignments);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.deliveryConsignments && ctx_r1.deliveryConsignments.length > 0 && \u0275\u0275pipeBind1(5, 7, ctx_r1.groupCartItems$));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.deliveryConsignments);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", order_r1 == null ? null : order_r1.unconsignedEntries == null ? null : order_r1.unconsignedEntries.length);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (order_r1 == null ? null : order_r1.entries) && (order_r1 == null ? null : order_r1.replenishmentOrderCode));
  }
}
function OrderDetailItemsComponent_ng_container_0_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "cx-add-to-cart", 15);
  }
  if (rf & 2) {
    const ctx_ir4 = ctx.$implicit;
    \u0275\u0275property("productCode", ctx_ir4.item.product == null ? null : ctx_ir4.item.product.code)("product", ctx_ir4.item.product)("showQuantity", false)("options", ctx_ir4.options)("pickupStore", ctx_ir4.item.deliveryPointOfService == null ? null : ctx_ir4.item.deliveryPointOfService.name);
  }
}
function OrderDetailItemsComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, OrderDetailItemsComponent_ng_container_0_ng_container_1_Template, 9, 9, "ng-container", 1);
    \u0275\u0275pipe(2, "async");
    \u0275\u0275template(3, OrderDetailItemsComponent_ng_container_0_ng_template_3_Template, 1, 5, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !\u0275\u0275pipeBind1(2, 1, ctx_r1.isOrderLoading$));
  }
}
function TrackingEventsComponent_ng_container_2_ng_container_9_ng_container_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "a", 17);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const consignmentTracking_r4 = \u0275\u0275nextContext(2).ngIf;
    \u0275\u0275advance();
    \u0275\u0275property("href", consignmentTracking_r4.trackingUrl, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(consignmentTracking_r4 == null ? null : consignmentTracking_r4.trackingID);
  }
}
function TrackingEventsComponent_ng_container_2_ng_container_9_ng_container_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "label");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const consignmentTracking_r4 = \u0275\u0275nextContext(2).ngIf;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", consignmentTracking_r4 == null ? null : consignmentTracking_r4.trackingID, " ");
  }
}
function TrackingEventsComponent_ng_container_2_ng_container_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 11)(2, "div", 12)(3, "div", 13)(4, "div", 14);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "cxTranslate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 15);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "cxDate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 13)(11, "div", 14);
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "cxTranslate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "div", 15);
    \u0275\u0275text(15);
    \u0275\u0275pipe(16, "cxDate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(17, "div", 12)(18, "div", 13)(19, "div", 14);
    \u0275\u0275text(20);
    \u0275\u0275pipe(21, "cxTranslate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "div", 15);
    \u0275\u0275text(23);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(24, "div", 13)(25, "div", 14);
    \u0275\u0275text(26);
    \u0275\u0275pipe(27, "cxTranslate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "div", 15);
    \u0275\u0275template(29, TrackingEventsComponent_ng_container_2_ng_container_9_ng_container_29_Template, 3, 2, "ng-container", 16)(30, TrackingEventsComponent_ng_container_2_ng_container_9_ng_container_30_Template, 3, 1, "ng-container", 16);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const consignmentTracking_r4 = \u0275\u0275nextContext().ngIf;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(6, 9, "orderDetails.consignmentTracking.dialog.shipped"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(9, 11, ctx_r2.shipDate, "medium"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(13, 14, "orderDetails.consignmentTracking.dialog.estimate"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(16, 16, consignmentTracking_r4 == null ? null : consignmentTracking_r4.targetArrivalDate, "medium"), " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(21, 19, "orderDetails.consignmentTracking.dialog.carrier"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", consignmentTracking_r4 == null ? null : consignmentTracking_r4.carrierDetails == null ? null : consignmentTracking_r4.carrierDetails.name, " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(27, 21, "orderDetails.consignmentTracking.dialog.trackingId"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", consignmentTracking_r4 == null ? null : consignmentTracking_r4.trackingUrl);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !(consignmentTracking_r4 == null ? null : consignmentTracking_r4.trackingUrl));
  }
}
function TrackingEventsComponent_ng_container_2_ng_container_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 18)(2, "div", 19);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "cxDate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 20);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 19);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 21);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const consignmentEvent_r5 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(4, 4, consignmentEvent_r5.eventDate, "medium"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", consignmentEvent_r5.referenceCode, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", consignmentEvent_r5.detail, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" location: ", consignmentEvent_r5.location, " ");
  }
}
function TrackingEventsComponent_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 5)(2, "div", 6);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "cxTranslate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 7);
    \u0275\u0275pipe(6, "cxTranslate");
    \u0275\u0275listener("click", function TrackingEventsComponent_ng_container_2_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.close("Cross click"));
    });
    \u0275\u0275elementStart(7, "span", 8);
    \u0275\u0275text(8, "\xD7");
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(9, TrackingEventsComponent_ng_container_2_ng_container_9_Template, 31, 23, "ng-container", 4);
    \u0275\u0275elementStart(10, "div", 9);
    \u0275\u0275template(11, TrackingEventsComponent_ng_container_2_ng_container_11_Template, 11, 7, "ng-container", 10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const consignmentTracking_r4 = ctx.ngIf;
    \u0275\u0275nextContext();
    const noTracking_r6 = \u0275\u0275reference(5);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 5, "orderDetails.consignmentTracking.dialog.header"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(6, 7, "common.close"));
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", (consignmentTracking_r4 == null ? null : consignmentTracking_r4.carrierDetails) && (consignmentTracking_r4 == null ? null : consignmentTracking_r4.trackingID))("ngIfElse", noTracking_r6);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", consignmentTracking_r4.trackingEvents);
  }
}
function TrackingEventsComponent_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 22)(1, "div", 15);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "cxTranslate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 1, "orderDetails.consignmentTracking.dialog.noTracking"), " ");
  }
}
function TrackingEventsComponent_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 23)(1, "div", 24)(2, "div", 25);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "cxTranslate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 26);
    \u0275\u0275pipe(6, "cxTranslate");
    \u0275\u0275listener("click", function TrackingEventsComponent_ng_template_6_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.close("Cross click"));
    });
    \u0275\u0275elementStart(7, "span", 8);
    \u0275\u0275text(8, "\xD7");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(9, "div", 27)(10, "div", 12)(11, "div", 28);
    \u0275\u0275element(12, "cx-spinner");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 2, "orderDetails.consignmentTracking.dialog.loadingHeader"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(6, 4, "common.close"));
  }
}
function MyAccountV2ConsignmentTrackingComponent_div_0_span_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "cxTranslate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "orderDetails.deliveryStatus_" + ctx_r0.consignment.status), " ");
  }
}
function MyAccountV2ConsignmentTrackingComponent_div_0_span_3_span_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "cxTranslate");
    \u0275\u0275elementStart(3, "a", 8);
    \u0275\u0275listener("click", function MyAccountV2ConsignmentTrackingComponent_div_0_span_3_span_1_Template_a_click_3_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.openTrackingDialog(ctx_r0.consignment));
    });
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 2, "orderDetails.consignmentTracking.dialog.trackingId"), ": ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r0.consignment.trackingID, " ");
  }
}
function MyAccountV2ConsignmentTrackingComponent_div_0_span_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 6);
    \u0275\u0275template(1, MyAccountV2ConsignmentTrackingComponent_div_0_span_3_span_1_Template, 5, 4, "span", 7);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275nextContext();
    const showNoTrackingMessage_r3 = \u0275\u0275reference(6);
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.consignment.trackingID)("ngIfElse", showNoTrackingMessage_r3);
  }
}
function MyAccountV2ConsignmentTrackingComponent_div_0_span_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 9);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "cxDate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, ctx_r0.consignment.statusDate), " ");
  }
}
function MyAccountV2ConsignmentTrackingComponent_div_0_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "a", 8);
    \u0275\u0275listener("click", function MyAccountV2ConsignmentTrackingComponent_div_0_ng_template_5_Template_a_click_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.openTrackingDialog(ctx_r0.consignment));
    });
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "cxTranslate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "orderDetails.consignmentTracking.action"), " ");
  }
}
function MyAccountV2ConsignmentTrackingComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2)(1, "span");
    \u0275\u0275template(2, MyAccountV2ConsignmentTrackingComponent_div_0_span_2_Template, 3, 3, "span", 3)(3, MyAccountV2ConsignmentTrackingComponent_div_0_span_3_Template, 2, 2, "span", 4);
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, MyAccountV2ConsignmentTrackingComponent_div_0_span_4_Template, 3, 3, "span", 5)(5, MyAccountV2ConsignmentTrackingComponent_div_0_ng_template_5_Template, 3, 3, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_3_0;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r0.consignment.status);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.consignmentStatus.includes((tmp_3_0 = ctx_r0.consignment.status) !== null && tmp_3_0 !== void 0 ? tmp_3_0 : ""));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.consignment == null ? null : ctx_r0.consignment.statusDate);
  }
}
function OrderDetailReorderComponent_ng_container_0_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 2)(2, "div", 3)(3, "button", 4, 0);
    \u0275\u0275listener("click", function OrderDetailReorderComponent_ng_container_0_ng_container_1_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r1);
      const order_r2 = \u0275\u0275nextContext().ngIf;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onReorderClick(order_r2));
    });
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "cxTranslate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(6, 1, "reorder.button"), " ");
  }
}
function OrderDetailReorderComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, OrderDetailReorderComponent_ng_container_0_ng_container_1_Template, 7, 3, "ng-container", 1);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const order_r2 = ctx.ngIf;
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", order_r2.code);
  }
}
var _c19 = (a0, a1, a2, a3) => ({
  quantity: a0,
  quantityAdded: a1,
  productCode: a2,
  productName: a3
});
function ReorderDialogComponent_ng_container_12_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 14)(2, "p");
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "cxTranslate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 15)(6, "div", 16)(7, "div", 17)(8, "button", 18);
    \u0275\u0275listener("click", function ReorderDialogComponent_ng_container_12_ng_container_1_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.close("Cancel creating cart from order"));
    });
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "cxTranslate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "button", 19);
    \u0275\u0275listener("click", function ReorderDialogComponent_ng_container_12_ng_container_1_Template_button_click_11_listener() {
      \u0275\u0275restoreView(_r1);
      const data_r3 = \u0275\u0275nextContext().ngIf;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.createCartFromOrder(data_r3.orderCode));
    });
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "cxTranslate");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 3, "reorder.dialog.areYouSureToReplaceCart"), " ");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(10, 5, "reorder.dialog.cancel"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(13, 7, "reorder.dialog.continue"), " ");
  }
}
function ReorderDialogComponent_ng_container_12_ng_template_3_ng_container_0_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "span", 20)(2, "span", 21);
    \u0275\u0275element(3, "cx-icon", 22);
    \u0275\u0275elementEnd();
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "cxTranslate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(3);
    \u0275\u0275property("type", ctx_r1.iconTypes.SUCCESS);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(5, 2, "reorder.dialog.messages.success"), " ");
  }
}
function ReorderDialogComponent_ng_container_12_ng_template_3_ng_container_0_ng_template_3_span_0_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "span", 21);
    \u0275\u0275element(2, "cx-icon", 24);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(6);
    \u0275\u0275advance(2);
    \u0275\u0275property("type", ctx_r1.iconTypes.INFO);
  }
}
function ReorderDialogComponent_ng_container_12_ng_template_3_ng_container_0_ng_template_3_span_0_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 21);
    \u0275\u0275element(1, "cx-icon", 25);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(6);
    \u0275\u0275advance();
    \u0275\u0275property("type", ctx_r1.iconTypes.ERROR);
  }
}
function ReorderDialogComponent_ng_container_12_ng_template_3_ng_container_0_ng_template_3_span_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 20);
    \u0275\u0275template(1, ReorderDialogComponent_ng_container_12_ng_template_3_ng_container_0_ng_template_3_span_0_ng_container_1_Template, 3, 1, "ng-container", 13)(2, ReorderDialogComponent_ng_container_12_ng_template_3_ng_container_0_ng_template_3_span_0_ng_template_2_Template, 2, 1, "ng-template", null, 3, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "cxTranslate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const cartModification_r4 = ctx.$implicit;
    const errorIcon_r5 = \u0275\u0275reference(3);
    const ctx_r1 = \u0275\u0275nextContext(5);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", cartModification_r4.statusCode === ctx_r1.cartValidationStatusCode.LOW_STOCK)("ngIfElse", errorIcon_r5);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(6, 3, "reorder.dialog.messages." + cartModification_r4.statusCode, \u0275\u0275pureFunction4(6, _c19, cartModification_r4.quantity, cartModification_r4.quantityAdded, cartModification_r4.entry.product.code, cartModification_r4.entry.product.name)), " ");
  }
}
function ReorderDialogComponent_ng_container_12_ng_template_3_ng_container_0_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, ReorderDialogComponent_ng_container_12_ng_template_3_ng_container_0_ng_template_3_span_0_Template, 7, 11, "span", 23);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275property("ngForOf", ctx_r1.cartModifications);
  }
}
function ReorderDialogComponent_ng_container_12_ng_template_3_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "p");
    \u0275\u0275template(2, ReorderDialogComponent_ng_container_12_ng_template_3_ng_container_0_ng_container_2_Template, 6, 4, "ng-container", 13)(3, ReorderDialogComponent_ng_container_12_ng_template_3_ng_container_0_ng_template_3_Template, 1, 1, "ng-template", null, 2, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const cartResponse_r6 = \u0275\u0275reference(4);
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", !(ctx_r1.cartModifications == null ? null : ctx_r1.cartModifications.length))("ngIfElse", cartResponse_r6);
  }
}
function ReorderDialogComponent_ng_container_12_ng_template_3_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 26);
    \u0275\u0275element(1, "cx-spinner");
    \u0275\u0275elementEnd();
  }
}
function ReorderDialogComponent_ng_container_12_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, ReorderDialogComponent_ng_container_12_ng_template_3_ng_container_0_Template, 5, 2, "ng-container", 13);
    \u0275\u0275pipe(1, "async");
    \u0275\u0275template(2, ReorderDialogComponent_ng_container_12_ng_template_3_ng_template_2_Template, 2, 0, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
  }
  if (rf & 2) {
    const loading_r7 = \u0275\u0275reference(3);
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngIf", !\u0275\u0275pipeBind1(1, 2, ctx_r1.loading$))("ngIfElse", loading_r7);
  }
}
function ReorderDialogComponent_ng_container_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, ReorderDialogComponent_ng_container_12_ng_container_1_Template, 14, 9, "ng-container", 13);
    \u0275\u0275pipe(2, "async");
    \u0275\u0275template(3, ReorderDialogComponent_ng_container_12_ng_template_3_Template, 4, 4, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const result_r8 = \u0275\u0275reference(4);
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", \u0275\u0275pipeBind1(2, 2, ctx_r1.showDecisionPrompt$))("ngIfElse", result_r8);
  }
}
function OrderDetailTotalsComponent_ng_container_0_ng_template_3_Template(rf, ctx) {
}
function OrderDetailTotalsComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 1)(2, "div", 2);
    \u0275\u0275template(3, OrderDetailTotalsComponent_ng_container_0_ng_template_3_Template, 0, 0, "ng-template", 3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const order_r1 = ctx.ngIf;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275property("cxOutlet", ctx_r1.CartOutlets.ORDER_SUMMARY)("cxOutletContext", order_r1);
  }
}
var _c20 = (a0, a1) => ({
  orderHistory: a0,
  replenishmentOrder: a1
});
var _c21 = (a0) => ({
  "cx-order-history-table-po": a0
});
function OrderHistoryComponent_ng_container_0_ng_container_1_h4_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h4");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "cxTranslate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "orderHistory.replenishmentHistory"), " ");
  }
}
function OrderHistoryComponent_ng_container_0_ng_container_1_h2_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h2");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "cxTranslate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "orderHistory.orderHistory"), " ");
  }
}
function OrderHistoryComponent_ng_container_0_ng_container_1_ng_container_6_div_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 17)(1, "cx-pagination", 18);
    \u0275\u0275listener("viewPageEvent", function OrderHistoryComponent_ng_container_0_ng_container_1_ng_container_6_div_10_Template_cx_pagination_viewPageEvent_1_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.pageChange($event));
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const type_r4 = \u0275\u0275nextContext(3).ngIf;
    \u0275\u0275advance();
    \u0275\u0275property("pagination", type_r4.orderHistory.pagination);
  }
}
function OrderHistoryComponent_ng_container_0_ng_container_1_ng_container_6_ng_container_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "th", 14);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "cxTranslate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "th", 14);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "cxTranslate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 2, "orderHistory.PONumber"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(6, 4, "orderHistory.costCenter"), " ");
  }
}
function OrderHistoryComponent_ng_container_0_ng_container_1_ng_container_6_tr_31_ng_container_8_a_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 22);
    \u0275\u0275pipe(1, "cxUrl");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const order_r6 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275property("routerLink", \u0275\u0275pipeBind1(1, 2, \u0275\u0275pureFunction1(4, _c4, order_r6)));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", order_r6.purchaseOrderNumber, "");
  }
}
function OrderHistoryComponent_ng_container_0_ng_container_1_ng_container_6_tr_31_ng_container_8_a_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 22);
    \u0275\u0275pipe(1, "cxUrl");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const order_r6 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275property("routerLink", \u0275\u0275pipeBind1(1, 2, \u0275\u0275pureFunction1(4, _c4, order_r6)));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", order_r6.costCenter == null ? null : order_r6.costCenter.name, "");
  }
}
function OrderHistoryComponent_ng_container_0_ng_container_1_ng_container_6_tr_31_ng_container_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "td", 26)(2, "div", 21);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "cxTranslate");
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, OrderHistoryComponent_ng_container_0_ng_container_1_ng_container_6_tr_31_ng_container_8_a_5_Template, 3, 6, "a", 27);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "td", 28)(7, "div", 21);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "cxTranslate");
    \u0275\u0275elementEnd();
    \u0275\u0275template(10, OrderHistoryComponent_ng_container_0_ng_container_1_ng_container_6_tr_31_ng_container_8_a_10_Template, 3, 6, "a", 27);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const order_r6 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 4, "orderHistory.PONumber"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", order_r6.purchaseOrderNumber);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(9, 6, "orderHistory.costCenter"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", order_r6.costCenter == null ? null : order_r6.costCenter.name);
  }
}
function OrderHistoryComponent_ng_container_0_ng_container_1_ng_container_6_tr_31_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr", 19);
    \u0275\u0275listener("click", function OrderHistoryComponent_ng_container_0_ng_container_1_ng_container_6_tr_31_Template_tr_click_0_listener() {
      const order_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.goToOrderDetail(order_r6));
    });
    \u0275\u0275elementStart(1, "td", 20)(2, "div", 21);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "cxTranslate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "a", 22);
    \u0275\u0275pipe(6, "cxUrl");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(8, OrderHistoryComponent_ng_container_0_ng_container_1_ng_container_6_tr_31_ng_container_8_Template, 11, 8, "ng-container", 2);
    \u0275\u0275elementStart(9, "td", 23)(10, "div", 21);
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "cxTranslate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "a", 22);
    \u0275\u0275pipe(14, "cxUrl");
    \u0275\u0275text(15);
    \u0275\u0275pipe(16, "cxDate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "td", 24)(18, "div", 21);
    \u0275\u0275text(19);
    \u0275\u0275pipe(20, "cxTranslate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "a", 22);
    \u0275\u0275pipe(22, "cxUrl");
    \u0275\u0275text(23);
    \u0275\u0275pipe(24, "cxTranslate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(25, "td", 25)(26, "div", 21);
    \u0275\u0275text(27);
    \u0275\u0275pipe(28, "cxTranslate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "a", 22);
    \u0275\u0275pipe(30, "cxUrl");
    \u0275\u0275text(31);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const order_r6 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 13, "orderHistory.orderId"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", \u0275\u0275pipeBind1(6, 15, \u0275\u0275pureFunction1(34, _c4, order_r6)));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", order_r6 == null ? null : order_r6.code, "");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.hasPONumber);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(12, 17, "orderHistory.date"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", \u0275\u0275pipeBind1(14, 19, \u0275\u0275pureFunction1(36, _c4, order_r6)));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(16, 21, order_r6 == null ? null : order_r6.placed, "longDate"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(20, 24, "orderHistory.status"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", \u0275\u0275pipeBind1(22, 26, \u0275\u0275pureFunction1(38, _c4, order_r6)));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(24, 28, "orderDetails.statusDisplay_" + (order_r6 == null ? null : order_r6.statusDisplay)), "");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(28, 30, "orderHistory.total"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", \u0275\u0275pipeBind1(30, 32, \u0275\u0275pureFunction1(40, _c4, order_r6)));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", order_r6 == null ? null : order_r6.total.formattedValue, "");
  }
}
function OrderHistoryComponent_ng_container_0_ng_container_1_ng_container_6_div_33_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 17)(1, "cx-pagination", 18);
    \u0275\u0275listener("viewPageEvent", function OrderHistoryComponent_ng_container_0_ng_container_1_ng_container_6_div_33_Template_cx_pagination_viewPageEvent_1_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.pageChange($event));
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const type_r4 = \u0275\u0275nextContext(3).ngIf;
    \u0275\u0275advance();
    \u0275\u0275property("pagination", type_r4.orderHistory.pagination);
  }
}
function OrderHistoryComponent_ng_container_0_ng_container_1_ng_container_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 6)(2, "label", 7)(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "cxTranslate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "cx-sorting", 8);
    \u0275\u0275pipe(7, "cxTranslate");
    \u0275\u0275pipe(8, "async");
    \u0275\u0275pipe(9, "cxTranslate");
    \u0275\u0275listener("sortListEvent", function OrderHistoryComponent_ng_container_0_ng_container_1_ng_container_6_Template_cx_sorting_sortListEvent_6_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.changeSortCode($event));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275template(10, OrderHistoryComponent_ng_container_0_ng_container_1_ng_container_6_div_10_Template, 2, 1, "div", 9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "table", 10)(12, "caption", 11);
    \u0275\u0275text(13);
    \u0275\u0275pipe(14, "cxTranslate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "thead", 12)(16, "tr", 13)(17, "th", 14);
    \u0275\u0275text(18);
    \u0275\u0275pipe(19, "cxTranslate");
    \u0275\u0275elementEnd();
    \u0275\u0275template(20, OrderHistoryComponent_ng_container_0_ng_container_1_ng_container_6_ng_container_20_Template, 7, 6, "ng-container", 2);
    \u0275\u0275elementStart(21, "th", 14);
    \u0275\u0275text(22);
    \u0275\u0275pipe(23, "cxTranslate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "th", 14);
    \u0275\u0275text(25);
    \u0275\u0275pipe(26, "cxTranslate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "th", 14);
    \u0275\u0275text(28);
    \u0275\u0275pipe(29, "cxTranslate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(30, "tbody");
    \u0275\u0275template(31, OrderHistoryComponent_ng_container_0_ng_container_1_ng_container_6_tr_31_Template, 32, 42, "tr", 15);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(32, "div", 16);
    \u0275\u0275template(33, OrderHistoryComponent_ng_container_0_ng_container_1_ng_container_6_div_33_Template, 2, 1, "div", 9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const type_r4 = \u0275\u0275nextContext(2).ngIf;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(5, 16, "orderHistory.sortBy"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275propertyInterpolate("placeholder", \u0275\u0275pipeBind1(7, 18, "orderHistory.sortBy"));
    \u0275\u0275property("sortOptions", type_r4.orderHistory.sorts)("sortLabels", \u0275\u0275pipeBind1(8, 20, ctx_r1.getSortLabels()))("selectedOption", type_r4.orderHistory.pagination.sort)("ariaLabel", \u0275\u0275pipeBind1(9, 22, "orderHistory.sortOrders"));
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", type_r4.orderHistory.pagination.totalPages > 1);
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(34, _c21, ctx_r1.hasPONumber));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(14, 24, "orderHistory.orderHistory"), " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(19, 26, "orderHistory.orderId"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.hasPONumber);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(23, 28, "orderHistory.date"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(26, 30, "orderHistory.status"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(29, 32, "orderHistory.total"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", type_r4.orderHistory.orders);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", type_r4.orderHistory.pagination.totalPages > 1);
  }
}
function OrderHistoryComponent_ng_container_0_ng_container_1_ng_template_7_div_0_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "cxTranslate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 1, "orderHistory.notFound"));
  }
}
function OrderHistoryComponent_ng_container_0_ng_container_1_ng_template_7_div_0_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "cxTranslate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "a", 30);
    \u0275\u0275pipe(4, "cxUrl");
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "cxTranslate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 3, "orderHistory.noOrders"));
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", \u0275\u0275pipeBind1(4, 5, \u0275\u0275pureFunction0(9, _c7)));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 7, "orderHistory.startShopping"));
  }
}
function OrderHistoryComponent_ng_container_0_ng_container_1_ng_template_7_div_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3)(1, "div");
    \u0275\u0275template(2, OrderHistoryComponent_ng_container_0_ng_container_1_ng_template_7_div_0_ng_container_2_Template, 4, 3, "ng-container", 5)(3, OrderHistoryComponent_ng_container_0_ng_container_1_ng_template_7_div_0_ng_template_3_Template, 7, 10, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const otherOrder_r8 = \u0275\u0275reference(4);
    const type_r4 = \u0275\u0275nextContext(3).ngIf;
    \u0275\u0275property("ngClass", type_r4.replenishmentOrder ? "cx-replenishment-details-order-history-no-order" : "cx-order-history-no-order");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", type_r4.replenishmentOrder)("ngIfElse", otherOrder_r8);
  }
}
function OrderHistoryComponent_ng_container_0_ng_container_1_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, OrderHistoryComponent_ng_container_0_ng_container_1_ng_template_7_div_0_Template, 5, 3, "div", 29);
    \u0275\u0275pipe(1, "async");
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("ngIf", \u0275\u0275pipeBind1(1, 1, ctx_r1.isLoaded$));
  }
}
function OrderHistoryComponent_ng_container_0_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div")(2, "div", 3);
    \u0275\u0275template(3, OrderHistoryComponent_ng_container_0_ng_container_1_h4_3_Template, 3, 3, "h4", 2)(4, OrderHistoryComponent_ng_container_0_ng_container_1_h2_4_Template, 3, 3, "h2", 2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 4);
    \u0275\u0275template(6, OrderHistoryComponent_ng_container_0_ng_container_1_ng_container_6_Template, 34, 36, "ng-container", 5)(7, OrderHistoryComponent_ng_container_0_ng_container_1_ng_template_7_Template, 2, 3, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const noOrder_r9 = \u0275\u0275reference(8);
    const type_r4 = \u0275\u0275nextContext().ngIf;
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", type_r4.replenishmentOrder ? "cx-replenishment-details-order-history-header" : "cx-order-history-header");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", type_r4.replenishmentOrder);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !type_r4.replenishmentOrder);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", type_r4.orderHistory.pagination.totalResults > 0)("ngIfElse", noOrder_r9);
  }
}
function OrderHistoryComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, OrderHistoryComponent_ng_container_0_ng_container_1_Template, 9, 5, "ng-container", 2);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const type_r4 = ctx.ngIf;
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", type_r4.orderHistory);
  }
}
var _c22 = (a0) => ({
  param: a0
});
function MyAccountV2ConsignmentEntriesComponent_ng_container_0_div_1_ng_container_7_ng_container_1_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "a", 7);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const tracking_r1 = \u0275\u0275nextContext().ngIf;
    \u0275\u0275advance();
    \u0275\u0275property("href", tracking_r1.trackingUrl, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(tracking_r1.trackingID);
  }
}
function MyAccountV2ConsignmentEntriesComponent_ng_container_0_div_1_ng_container_7_ng_container_1_ng_template_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const tracking_r1 = \u0275\u0275nextContext().ngIf;
    \u0275\u0275textInterpolate1(" ", tracking_r1.trackingID, " ");
  }
}
function MyAccountV2ConsignmentEntriesComponent_ng_container_0_div_1_ng_container_7_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "span");
    \u0275\u0275pipe(2, "cxTranslate");
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "cxTranslate");
    \u0275\u0275template(5, MyAccountV2ConsignmentEntriesComponent_ng_container_0_div_1_ng_container_7_ng_container_1_ng_container_5_Template, 3, 2, "ng-container", 5);
    \u0275\u0275text(6, " | ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span");
    \u0275\u0275pipe(8, "cxTranslate");
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "cxTranslate");
    \u0275\u0275pipe(11, "cxDate");
    \u0275\u0275elementEnd();
    \u0275\u0275template(12, MyAccountV2ConsignmentEntriesComponent_ng_container_0_div_1_ng_container_7_ng_container_1_ng_template_12_Template, 1, 1, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const tracking_r1 = ctx.ngIf;
    const showNumber_r2 = \u0275\u0275reference(13);
    \u0275\u0275advance();
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(2, 7, "orderDetails.consignmentTracking.dialog.trackingId"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 9, "orderDetails.consignmentTracking.dialog.trackingId"), ": ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", tracking_r1.trackingUrl)("ngIfElse", showNumber_r2);
    \u0275\u0275advance(2);
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(8, 11, "myAccountV2OrderHistory.estimateDeliveryLabel"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2(" ", \u0275\u0275pipeBind1(10, 13, "orderDetails.consignmentTracking.dialog.estimate"), ": ", \u0275\u0275pipeBind2(11, 15, tracking_r1.targetArrivalDate, "d, MMMM, yyyy"), " ");
  }
}
function MyAccountV2ConsignmentEntriesComponent_ng_container_0_div_1_ng_container_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, MyAccountV2ConsignmentEntriesComponent_ng_container_0_div_1_ng_container_7_ng_container_1_Template, 14, 18, "ng-container", 6);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const consignment_r3 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", consignment_r3.consignmentTracking);
  }
}
function MyAccountV2ConsignmentEntriesComponent_ng_container_0_div_1_ng_template_8_span_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275pipe(1, "cxTranslate");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "cxTranslate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const consignment_r3 = \u0275\u0275nextContext(3).$implicit;
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(1, 2, "myAccountV2OrderHistory.consignmentStatusLabel"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 4, "orderDetails.deliveryStatus_" + (consignment_r3 == null ? null : consignment_r3.status == null ? null : consignment_r3.status.toUpperCase())), " ");
  }
}
function MyAccountV2ConsignmentEntriesComponent_ng_container_0_div_1_ng_template_8_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275pipe(1, "cxTranslate");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "cxDate");
    \u0275\u0275pipe(4, "cxTranslate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const consignment_r3 = \u0275\u0275nextContext(3).$implicit;
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(1, 2, "myAccountV2OrderHistory.consignmentStatusDateLabel"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" | ", \u0275\u0275pipeBind2(4, 7, "myAccountV2OrderHistory.statusDate", \u0275\u0275pureFunction1(10, _c22, \u0275\u0275pipeBind2(3, 4, consignment_r3.statusDate, "d, MMMM, yyyy"))), " ");
  }
}
function MyAccountV2ConsignmentEntriesComponent_ng_container_0_div_1_ng_template_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, MyAccountV2ConsignmentEntriesComponent_ng_container_0_div_1_ng_template_8_span_0_Template, 4, 6, "span", 6)(1, MyAccountV2ConsignmentEntriesComponent_ng_container_0_div_1_ng_template_8_span_1_Template, 5, 12, "span", 6);
  }
  if (rf & 2) {
    const consignment_r3 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275property("ngIf", consignment_r3.status);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", consignment_r3.statusDate);
  }
}
function MyAccountV2ConsignmentEntriesComponent_ng_container_0_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4);
    \u0275\u0275pipe(1, "cxTranslate");
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275pipe(3, "cxTranslate");
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "cxTranslate");
    \u0275\u0275elementEnd();
    \u0275\u0275text(6, " | ");
    \u0275\u0275template(7, MyAccountV2ConsignmentEntriesComponent_ng_container_0_div_1_ng_container_7_Template, 2, 1, "ng-container", 5)(8, MyAccountV2ConsignmentEntriesComponent_ng_container_0_div_1_ng_template_8_Template, 2, 2, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const showLastUpdated_r4 = \u0275\u0275reference(9);
    const ctx_r4 = \u0275\u0275nextContext();
    const consignment_r3 = ctx_r4.$implicit;
    const i_r6 = ctx_r4.index;
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(1, 5, "myAccountV2OrderHistory.consignmentDetailLabel"));
    \u0275\u0275advance(2);
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(3, 7, "myAccountV2OrderHistory.consignmentNumberLabel"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(5, 9, "myAccountV2OrderHistory.consignmentCode", \u0275\u0275pureFunction1(12, _c22, i_r6 + 1)), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", consignment_r3.trackingID)("ngIfElse", showLastUpdated_r4);
  }
}
function MyAccountV2ConsignmentEntriesComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, MyAccountV2ConsignmentEntriesComponent_ng_container_0_div_1_Template, 10, 14, "div", 3);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const consignment_r3 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", consignment_r3);
  }
}
var _c23 = (a0) => ({
  count: a0
});
var _c24 = (a0) => ({
  cxRoute: "returnRequestDetails",
  params: a0
});
var _c25 = () => ({
  param: 1
});
function MyAccountV2OrderConsolidatedInformationComponent_div_0_div_2_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function MyAccountV2OrderConsolidatedInformationComponent_div_0_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "div", 10);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "cxTranslate");
    \u0275\u0275template(4, MyAccountV2OrderConsolidatedInformationComponent_div_0_div_2_ng_container_4_Template, 1, 0, "ng-container", 11);
    \u0275\u0275elementEnd();
    \u0275\u0275element(5, "cx-my-account-v2-consignment-entries", 12);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_6_0;
    let tmp_7_0;
    let tmp_8_0;
    const ctx_r0 = \u0275\u0275nextContext(2);
    const showManyItems_r2 = \u0275\u0275reference(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 5, "myAccountV2OrderHistory.deliveryPointOfServiceDetails.itemsToBePickUp"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngTemplateOutlet", showManyItems_r2)("ngTemplateOutletContext", \u0275\u0275pureFunction1(8, _c23, ctx_r0.getConsignmentsCount(ctx_r0.getPickupConsignments((tmp_6_0 = ctx_r0.order.consignments) !== null && tmp_6_0 !== void 0 ? tmp_6_0 : \u0275\u0275pureFunction0(7, _c9)))));
    \u0275\u0275advance();
    \u0275\u0275property("orderCode", (tmp_7_0 = ctx_r0.order.code) !== null && tmp_7_0 !== void 0 ? tmp_7_0 : "")("consignments", ctx_r0.getPickupConsignments((tmp_8_0 = ctx_r0.order.consignments) !== null && tmp_8_0 !== void 0 ? tmp_8_0 : \u0275\u0275pureFunction0(10, _c9)));
  }
}
function MyAccountV2OrderConsolidatedInformationComponent_div_0_div_3_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function MyAccountV2OrderConsolidatedInformationComponent_div_0_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "div", 10);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "cxTranslate");
    \u0275\u0275template(4, MyAccountV2OrderConsolidatedInformationComponent_div_0_div_3_ng_container_4_Template, 1, 0, "ng-container", 11);
    \u0275\u0275elementEnd();
    \u0275\u0275element(5, "cx-my-account-v2-consignment-entries", 12);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_6_0;
    let tmp_7_0;
    let tmp_8_0;
    const ctx_r0 = \u0275\u0275nextContext(2);
    const showManyItems_r2 = \u0275\u0275reference(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 5, "myAccountV2OrderHistory.checkoutMode.deliveryEntries"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngTemplateOutlet", showManyItems_r2)("ngTemplateOutletContext", \u0275\u0275pureFunction1(8, _c23, ctx_r0.getConsignmentsCount(ctx_r0.getDeliveryConsignments((tmp_6_0 = ctx_r0.order.consignments) !== null && tmp_6_0 !== void 0 ? tmp_6_0 : \u0275\u0275pureFunction0(7, _c9)))));
    \u0275\u0275advance();
    \u0275\u0275property("orderCode", (tmp_7_0 = ctx_r0.order.code) !== null && tmp_7_0 !== void 0 ? tmp_7_0 : "")("consignments", ctx_r0.getDeliveryConsignments((tmp_8_0 = ctx_r0.order.consignments) !== null && tmp_8_0 !== void 0 ? tmp_8_0 : \u0275\u0275pureFunction0(10, _c9)));
  }
}
function MyAccountV2OrderConsolidatedInformationComponent_div_0_div_4_div_1_div_1_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function MyAccountV2OrderConsolidatedInformationComponent_div_0_div_4_div_1_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "cxTranslate");
    \u0275\u0275template(3, MyAccountV2OrderConsolidatedInformationComponent_div_0_div_4_div_1_div_1_ng_container_3_Template, 1, 0, "ng-container", 11);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(4);
    const showManyItems_r2 = \u0275\u0275reference(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 3, "orderDetails.statusDisplay_" + ctx_r0.order.statusDisplay), " - ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngTemplateOutlet", showManyItems_r2)("ngTemplateOutletContext", \u0275\u0275pureFunction1(5, _c23, ctx_r0.getOrderEntriesCount(ctx_r0.order.unconsignedEntries)));
  }
}
function MyAccountV2OrderConsolidatedInformationComponent_div_0_div_4_div_1_ng_template_2_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function MyAccountV2OrderConsolidatedInformationComponent_div_0_div_4_div_1_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "cxTranslate");
    \u0275\u0275template(3, MyAccountV2OrderConsolidatedInformationComponent_div_0_div_4_div_1_ng_template_2_ng_container_3_Template, 1, 0, "ng-container", 11);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(4);
    const showManyItems_r2 = \u0275\u0275reference(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 3, "orderDetails.statusDisplay_" + ctx_r0.order.statusDisplay), " - ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngTemplateOutlet", showManyItems_r2)("ngTemplateOutletContext", \u0275\u0275pureFunction1(5, _c23, ctx_r0.getOrderEntriesCount(ctx_r0.order.unconsignedEntries)));
  }
}
function MyAccountV2OrderConsolidatedInformationComponent_div_0_div_4_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275template(1, MyAccountV2OrderConsolidatedInformationComponent_div_0_div_4_div_1_div_1_Template, 4, 7, "div", 14)(2, MyAccountV2OrderConsolidatedInformationComponent_div_0_div_4_div_1_ng_template_2_Template, 4, 7, "ng-template", null, 2, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const nonCritical_r3 = \u0275\u0275reference(3);
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.isStatusCritical(ctx_r0.order.statusDisplay))("ngIfElse", nonCritical_r3);
  }
}
function MyAccountV2OrderConsolidatedInformationComponent_div_0_div_4_div_2_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function MyAccountV2OrderConsolidatedInformationComponent_div_0_div_4_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "cxTranslate");
    \u0275\u0275template(3, MyAccountV2OrderConsolidatedInformationComponent_div_0_div_4_div_2_ng_container_3_Template, 1, 0, "ng-container", 11);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_7_0;
    const ctx_r0 = \u0275\u0275nextContext(3);
    const showManyItems_r2 = \u0275\u0275reference(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 3, "myAccountV2OrderHistory.checkoutMode.deliveryEntries"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngTemplateOutlet", showManyItems_r2)("ngTemplateOutletContext", \u0275\u0275pureFunction1(6, _c23, ctx_r0.getOrderEntriesCount(ctx_r0.getDeliveryUnconsignedEntries((tmp_7_0 = ctx_r0.order.unconsignedEntries) !== null && tmp_7_0 !== void 0 ? tmp_7_0 : \u0275\u0275pureFunction0(5, _c9)))));
  }
}
function MyAccountV2OrderConsolidatedInformationComponent_div_0_div_4_div_3_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function MyAccountV2OrderConsolidatedInformationComponent_div_0_div_4_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "cxTranslate");
    \u0275\u0275template(3, MyAccountV2OrderConsolidatedInformationComponent_div_0_div_4_div_3_ng_container_3_Template, 1, 0, "ng-container", 11);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_7_0;
    const ctx_r0 = \u0275\u0275nextContext(3);
    const showManyItems_r2 = \u0275\u0275reference(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 3, "myAccountV2OrderHistory.checkoutPickupInStore.heading"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngTemplateOutlet", showManyItems_r2)("ngTemplateOutletContext", \u0275\u0275pureFunction1(6, _c23, ctx_r0.getOrderEntriesCount(ctx_r0.getPickupUnconsignedEntries((tmp_7_0 = ctx_r0.order.unconsignedEntries) !== null && tmp_7_0 !== void 0 ? tmp_7_0 : \u0275\u0275pureFunction0(5, _c9)))));
  }
}
function MyAccountV2OrderConsolidatedInformationComponent_div_0_div_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275template(1, MyAccountV2OrderConsolidatedInformationComponent_div_0_div_4_div_1_Template, 4, 2, "div", 7)(2, MyAccountV2OrderConsolidatedInformationComponent_div_0_div_4_div_2_Template, 4, 8, "div", 13)(3, MyAccountV2OrderConsolidatedInformationComponent_div_0_div_4_div_3_Template, 4, 8, "div", 13);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_5_0;
    let tmp_6_0;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.order.statusDisplay);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.getOrderEntriesCount(ctx_r0.getDeliveryUnconsignedEntries((tmp_5_0 = ctx_r0.order.unconsignedEntries) !== null && tmp_5_0 !== void 0 ? tmp_5_0 : \u0275\u0275pureFunction0(3, _c9))) > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.getOrderEntriesCount(ctx_r0.getPickupUnconsignedEntries((tmp_6_0 = ctx_r0.order.unconsignedEntries) !== null && tmp_6_0 !== void 0 ? tmp_6_0 : \u0275\u0275pureFunction0(4, _c9))) > 0);
  }
}
function MyAccountV2OrderConsolidatedInformationComponent_div_0_div_5_a_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 18);
    \u0275\u0275pipe(1, "cxUrl");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const returnRequest_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("routerLink", \u0275\u0275pipeBind1(1, 2, \u0275\u0275pureFunction1(4, _c24, returnRequest_r4)));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", returnRequest_r4.rma, "");
  }
}
function MyAccountV2OrderConsolidatedInformationComponent_div_0_div_5_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const returnRequest_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275textInterpolate1(" ", returnRequest_r4.code, " ");
  }
}
function MyAccountV2OrderConsolidatedInformationComponent_div_0_div_5_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "cxDate");
    \u0275\u0275pipe(3, "cxTranslate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const creationTime_r5 = ctx.ngIf;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(3, 4, "myAccountV2OrderHistory.returnProcessed", \u0275\u0275pureFunction1(7, _c22, \u0275\u0275pipeBind2(2, 1, creationTime_r5, "d, MMMM, yyyy"))), " ");
  }
}
function MyAccountV2OrderConsolidatedInformationComponent_div_0_div_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "div", 15);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "cxTranslate");
    \u0275\u0275template(4, MyAccountV2OrderConsolidatedInformationComponent_div_0_div_5_a_4_Template, 3, 6, "a", 17);
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, MyAccountV2OrderConsolidatedInformationComponent_div_0_div_5_ng_template_5_Template, 1, 1, "ng-template", null, 3, \u0275\u0275templateRefExtractor)(7, MyAccountV2OrderConsolidatedInformationComponent_div_0_div_5_div_7_Template, 4, 9, "div", 13);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const returnRequest_r4 = ctx.$implicit;
    const showReturnCode_r6 = \u0275\u0275reference(6);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 4, "returnRequestList.returnRequestId"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", returnRequest_r4.rma)("ngIfElse", showReturnCode_r6);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", returnRequest_r4.creationTime);
  }
}
function MyAccountV2OrderConsolidatedInformationComponent_div_0_ng_container_7_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275element(1, "cx-media", 19);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const item_r7 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("container", item_r7.PRIMARY);
  }
}
function MyAccountV2OrderConsolidatedInformationComponent_div_0_ng_container_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, MyAccountV2OrderConsolidatedInformationComponent_div_0_ng_container_7_ng_container_1_Template, 2, 1, "ng-container", 8);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r0.getProductImages(ctx_r0.order.entries));
  }
}
function MyAccountV2OrderConsolidatedInformationComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5)(1, "div", 6);
    \u0275\u0275template(2, MyAccountV2OrderConsolidatedInformationComponent_div_0_div_2_Template, 6, 11, "div", 7)(3, MyAccountV2OrderConsolidatedInformationComponent_div_0_div_3_Template, 6, 11, "div", 7)(4, MyAccountV2OrderConsolidatedInformationComponent_div_0_div_4_Template, 4, 5, "div", 7)(5, MyAccountV2OrderConsolidatedInformationComponent_div_0_div_5_Template, 8, 6, "div", 8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 9);
    \u0275\u0275template(7, MyAccountV2OrderConsolidatedInformationComponent_div_0_ng_container_7_Template, 2, 1, "ng-container", 7);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_3_0;
    let tmp_4_0;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r0.getConsignmentsCount(ctx_r0.getPickupConsignments((tmp_3_0 = ctx_r0.order.consignments) !== null && tmp_3_0 !== void 0 ? tmp_3_0 : \u0275\u0275pureFunction0(5, _c9))) > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.getConsignmentsCount(ctx_r0.getDeliveryConsignments((tmp_4_0 = ctx_r0.order.consignments) !== null && tmp_4_0 !== void 0 ? tmp_4_0 : \u0275\u0275pureFunction0(6, _c9))) > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.getOrderEntriesCount(ctx_r0.order.unconsignedEntries) > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r0.order.returnRequests);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r0.order.entries);
  }
}
function MyAccountV2OrderConsolidatedInformationComponent_ng_template_1_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "cxTranslate");
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const count_r8 = \u0275\u0275nextContext().count;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(2, 1, "myAccountV2OrderHistory.items", \u0275\u0275pureFunction1(4, _c22, count_r8)), " ");
  }
}
function MyAccountV2OrderConsolidatedInformationComponent_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, MyAccountV2OrderConsolidatedInformationComponent_ng_template_1_ng_container_0_Template, 3, 6, "ng-container", 20);
  }
  if (rf & 2) {
    const count_r8 = ctx.count;
    \u0275\u0275nextContext();
    const showOneItem_r9 = \u0275\u0275reference(4);
    \u0275\u0275property("ngIf", count_r8 > 1)("ngIfElse", showOneItem_r9);
  }
}
function MyAccountV2OrderConsolidatedInformationComponent_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "cxTranslate");
  }
  if (rf & 2) {
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(1, 1, "myAccountV2OrderHistory.item", \u0275\u0275pureFunction0(4, _c25)), "\n");
  }
}
function MyAccountV2OrderHistoryComponent_div_0_ng_container_8_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 7)(2, "div", 8);
    \u0275\u0275pipe(3, "cxTranslate");
    \u0275\u0275listener("click", function MyAccountV2OrderHistoryComponent_div_0_ng_container_8_ng_container_1_Template_div_click_2_listener() {
      const order_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.goToOrderDetail(order_r2));
    });
    \u0275\u0275elementStart(4, "a", 9);
    \u0275\u0275pipe(5, "cxUrl");
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "cxTranslate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 10)(9, "span");
    \u0275\u0275pipe(10, "cxTranslate");
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "cxDate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "span");
    \u0275\u0275pipe(14, "cxTranslate");
    \u0275\u0275elementStart(15, "strong");
    \u0275\u0275text(16);
    \u0275\u0275pipe(17, "cxTranslate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275element(18, "cx-my-account-v2-order-consolidated-information", 11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const order_r2 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(3, 9, "myAccountV2OrderHistory.orderCodeLabel"));
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", \u0275\u0275pipeBind1(5, 11, \u0275\u0275pureFunction1(25, _c4, order_r2)));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2(" ", \u0275\u0275pipeBind1(7, 13, "orderHistory.orderId"), " ", order_r2 == null ? null : order_r2.code, "");
    \u0275\u0275advance(3);
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(10, 15, "myAccountV2OrderHistory.orderPlaced"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(12, 17, order_r2.placed, "d, MMMM, yyyy"), " | ");
    \u0275\u0275advance(2);
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(14, 20, "myAccountV2OrderHistory.totalPriceLabel"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(17, 22, "myAccountV2OrderHistory.totalPrice", \u0275\u0275pureFunction1(27, _c22, order_r2.total == null ? null : order_r2.total.formattedValue)), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("order", order_r2);
  }
}
function MyAccountV2OrderHistoryComponent_div_0_ng_container_8_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 12);
    \u0275\u0275pipe(1, "cxTranslate");
    \u0275\u0275elementStart(2, "cx-pagination", 13);
    \u0275\u0275listener("viewPageEvent", function MyAccountV2OrderHistoryComponent_div_0_ng_container_8_div_2_Template_cx_pagination_viewPageEvent_2_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.pageChange($event));
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const orderHistory_r5 = \u0275\u0275nextContext(2).ngIf;
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(1, 2, "myAccountV2OrderHistory.orderListPagination"));
    \u0275\u0275advance(2);
    \u0275\u0275property("pagination", orderHistory_r5.pagination);
  }
}
function MyAccountV2OrderHistoryComponent_div_0_ng_container_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, MyAccountV2OrderHistoryComponent_div_0_ng_container_8_ng_container_1_Template, 19, 29, "ng-container", 5)(2, MyAccountV2OrderHistoryComponent_div_0_ng_container_8_div_2_Template, 3, 4, "div", 6);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const orderHistory_r5 = \u0275\u0275nextContext().ngIf;
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", orderHistory_r5.orders);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", orderHistory_r5.pagination.totalPages > 1);
  }
}
function MyAccountV2OrderHistoryComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275pipe(1, "cxTranslate");
    \u0275\u0275elementStart(2, "div", 3)(3, "h2");
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "async");
    \u0275\u0275pipe(6, "cxTranslate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 4);
    \u0275\u0275template(8, MyAccountV2OrderHistoryComponent_div_0_ng_container_8_Template, 3, 2, "ng-container", 2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const orderHistory_r5 = ctx.ngIf;
    const ctx_r2 = \u0275\u0275nextContext();
    const noOrder_r6 = \u0275\u0275reference(3);
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(1, 4, "myAccountV2OrderHistory.orderListResults"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(6, 8, "myAccountV2OrderHistory.heading", \u0275\u0275pureFunction1(11, _c22, \u0275\u0275pipeBind1(5, 6, ctx_r2.tabTitleParam$))), " ");
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", orderHistory_r5.pagination.totalResults > 0)("ngIfElse", noOrder_r6);
  }
}
function MyAccountV2OrderHistoryComponent_ng_template_2_div_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "div");
    \u0275\u0275pipe(2, "cxTranslate");
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "cxTranslate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "a", 14);
    \u0275\u0275pipe(6, "cxUrl");
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "cxTranslate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(2, 4, "orderHistory.notFound"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 6, "orderHistory.noOrders"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", \u0275\u0275pipeBind1(6, 8, \u0275\u0275pureFunction0(12, _c7)));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(8, 10, "orderHistory.startShopping"));
  }
}
function MyAccountV2OrderHistoryComponent_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, MyAccountV2OrderHistoryComponent_ng_template_2_div_0_Template, 9, 13, "div", 2);
    \u0275\u0275pipe(1, "async");
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    const loading_r7 = \u0275\u0275reference(5);
    \u0275\u0275property("ngIf", \u0275\u0275pipeBind1(1, 2, ctx_r2.isLoaded$))("ngIfElse", loading_r7);
  }
}
function MyAccountV2OrderHistoryComponent_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15);
    \u0275\u0275element(1, "cx-spinner");
    \u0275\u0275elementEnd();
  }
}
var _c26 = () => ({
  cxRoute: "replenishmentOrders"
});
function ReplenishmentOrderCancellationComponent_div_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 2)(1, "button", 5, 0);
    \u0275\u0275listener("click", function ReplenishmentOrderCancellationComponent_div_6_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openDialog());
    });
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "cxTranslate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 1, "orderDetails.cancelReplenishment.title"), " ");
  }
}
var _c27 = (a0) => ({
  cxRoute: "replenishmentDetails",
  params: a0
});
function ReplenishmentOrderHistoryComponent_ng_container_0_ng_container_7_div_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 19)(1, "cx-pagination", 21);
    \u0275\u0275listener("viewPageEvent", function ReplenishmentOrderHistoryComponent_ng_container_0_ng_container_7_div_10_Template_cx_pagination_viewPageEvent_1_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.pageChange($event));
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const replenishmentOrders_r4 = \u0275\u0275nextContext(2).ngIf;
    \u0275\u0275advance();
    \u0275\u0275property("pagination", replenishmentOrders_r4.pagination);
  }
}
function ReplenishmentOrderHistoryComponent_ng_container_0_ng_container_7_tr_45_button_50_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 33, 1);
    \u0275\u0275listener("click", function ReplenishmentOrderHistoryComponent_ng_container_0_ng_container_7_tr_45_button_50_Template_button_click_0_listener($event) {
      \u0275\u0275restoreView(_r7);
      const order_r6 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.openDialog($event, order_r6 == null ? null : order_r6.replenishmentOrderCode));
    });
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "cxTranslate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 1, "orderHistory.cancel"), " ");
  }
}
function ReplenishmentOrderHistoryComponent_ng_container_0_ng_container_7_tr_45_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr", 22);
    \u0275\u0275listener("click", function ReplenishmentOrderHistoryComponent_ng_container_0_ng_container_7_tr_45_Template_tr_click_0_listener() {
      const order_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.goToOrderDetail(order_r6));
    });
    \u0275\u0275elementStart(1, "td", 23)(2, "div", 24);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "cxTranslate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "a", 25);
    \u0275\u0275pipe(6, "cxUrl");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "td", 26)(9, "div", 24);
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "cxTranslate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "a", 27);
    \u0275\u0275pipe(13, "cxUrl");
    \u0275\u0275text(14);
    \u0275\u0275pipe(15, "cxTranslate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "td", 26)(17, "div", 24);
    \u0275\u0275text(18);
    \u0275\u0275pipe(19, "cxTranslate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "a", 25);
    \u0275\u0275pipe(21, "cxUrl");
    \u0275\u0275text(22);
    \u0275\u0275pipe(23, "cxDate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(24, "td", 28)(25, "div", 24);
    \u0275\u0275text(26);
    \u0275\u0275pipe(27, "cxTranslate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "a", 25);
    \u0275\u0275pipe(29, "cxUrl");
    \u0275\u0275text(30);
    \u0275\u0275pipe(31, "slice");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(32, "td", 26)(33, "div", 24);
    \u0275\u0275text(34);
    \u0275\u0275pipe(35, "cxTranslate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "a", 29);
    \u0275\u0275pipe(37, "cxUrl");
    \u0275\u0275text(38);
    \u0275\u0275pipe(39, "cxDate");
    \u0275\u0275pipe(40, "cxTranslate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(41, "td", 30)(42, "div", 24);
    \u0275\u0275text(43);
    \u0275\u0275pipe(44, "cxTranslate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(45, "a", 25);
    \u0275\u0275pipe(46, "cxUrl");
    \u0275\u0275text(47);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(48, "td", 31);
    \u0275\u0275element(49, "div", 24);
    \u0275\u0275template(50, ReplenishmentOrderHistoryComponent_ng_container_0_ng_container_7_tr_45_button_50_Template, 4, 3, "button", 32);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const order_r6 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 19, "orderHistory.replenishmentOrderId"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", \u0275\u0275pipeBind1(6, 21, \u0275\u0275pureFunction1(57, _c27, order_r6)));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", order_r6 == null ? null : order_r6.replenishmentOrderCode, "");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(11, 23, "orderHistory.purchaseOrderNumber"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", \u0275\u0275pipeBind1(13, 25, \u0275\u0275pureFunction1(59, _c27, order_r6)));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", (order_r6 == null ? null : order_r6.purchaseOrderNumber == null ? null : order_r6.purchaseOrderNumber.length) > 0 ? order_r6 == null ? null : order_r6.purchaseOrderNumber : \u0275\u0275pipeBind1(15, 27, "orderHistory.emptyPurchaseOrderId"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(19, 29, "orderHistory.startOn"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", \u0275\u0275pipeBind1(21, 31, \u0275\u0275pureFunction1(61, _c27, order_r6)));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(23, 33, order_r6 == null ? null : order_r6.firstDate, "M/d/yyyy"), "");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(27, 36, "orderHistory.frequency"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", \u0275\u0275pipeBind1(29, 38, \u0275\u0275pureFunction1(63, _c27, order_r6)));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind3(31, 40, order_r6 == null ? null : order_r6.trigger.displayTimeTable, 0, -12), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(35, 44, "orderHistory.nextOrderDate"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", \u0275\u0275pipeBind1(37, 46, \u0275\u0275pureFunction1(65, _c27, order_r6)));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", (order_r6 == null ? null : order_r6.active) ? \u0275\u0275pipeBind2(39, 48, order_r6 == null ? null : order_r6.trigger.activationTime, "M/d/yyyy") : \u0275\u0275pipeBind1(40, 51, "orderHistory.cancelled"), " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(44, 53, "orderHistory.total"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", \u0275\u0275pipeBind1(46, 55, \u0275\u0275pureFunction1(67, _c27, order_r6)));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", order_r6 == null ? null : order_r6.totalPriceWithTax.formattedValue, "");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", order_r6 == null ? null : order_r6.active);
  }
}
function ReplenishmentOrderHistoryComponent_ng_container_0_ng_container_7_cx_pagination_48_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "cx-pagination", 21);
    \u0275\u0275listener("viewPageEvent", function ReplenishmentOrderHistoryComponent_ng_container_0_ng_container_7_cx_pagination_48_Template_cx_pagination_viewPageEvent_0_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.pageChange($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const replenishmentOrders_r4 = \u0275\u0275nextContext(2).ngIf;
    \u0275\u0275property("pagination", replenishmentOrders_r4.pagination);
  }
}
function ReplenishmentOrderHistoryComponent_ng_container_0_ng_container_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 7)(2, "label", 8)(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "cxTranslate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "cx-sorting", 9);
    \u0275\u0275pipe(7, "cxTranslate");
    \u0275\u0275pipe(8, "async");
    \u0275\u0275pipe(9, "cxTranslate");
    \u0275\u0275listener("sortListEvent", function ReplenishmentOrderHistoryComponent_ng_container_0_ng_container_7_Template_cx_sorting_sortListEvent_6_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.changeSortCode($event));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275template(10, ReplenishmentOrderHistoryComponent_ng_container_0_ng_container_7_div_10_Template, 2, 1, "div", 10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "table", 11)(12, "caption", 12);
    \u0275\u0275text(13);
    \u0275\u0275pipe(14, "cxTranslate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "thead", 13)(16, "th", 14)(17, "span", 15);
    \u0275\u0275text(18);
    \u0275\u0275pipe(19, "cxTranslate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "th", 14)(21, "span", 15);
    \u0275\u0275text(22);
    \u0275\u0275pipe(23, "cxTranslate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(24, "th", 14)(25, "span", 15);
    \u0275\u0275text(26);
    \u0275\u0275pipe(27, "cxTranslate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(28, "th", 14)(29, "span", 15);
    \u0275\u0275text(30);
    \u0275\u0275pipe(31, "cxTranslate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(32, "th", 14)(33, "span", 15);
    \u0275\u0275text(34);
    \u0275\u0275pipe(35, "cxTranslate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(36, "th", 16)(37, "span", 15);
    \u0275\u0275text(38);
    \u0275\u0275pipe(39, "cxTranslate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(40, "th", 14)(41, "span", 15);
    \u0275\u0275text(42);
    \u0275\u0275pipe(43, "cxTranslate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(44, "tbody");
    \u0275\u0275template(45, ReplenishmentOrderHistoryComponent_ng_container_0_ng_container_7_tr_45_Template, 51, 69, "tr", 17);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(46, "div", 18)(47, "div", 19);
    \u0275\u0275template(48, ReplenishmentOrderHistoryComponent_ng_container_0_ng_container_7_cx_pagination_48_Template, 1, 1, "cx-pagination", 20);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const replenishmentOrders_r4 = \u0275\u0275nextContext().ngIf;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 17, "orderHistory.sortBy"));
    \u0275\u0275advance(2);
    \u0275\u0275propertyInterpolate("placeholder", \u0275\u0275pipeBind1(7, 19, "orderHistory.sortBy"));
    \u0275\u0275property("sortOptions", replenishmentOrders_r4.sorts)("sortLabels", \u0275\u0275pipeBind1(8, 21, ctx_r1.getSortLabels()))("selectedOption", replenishmentOrders_r4.pagination.sort)("ariaLabel", \u0275\u0275pipeBind1(9, 23, "orderHistory.sortOrders"));
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", replenishmentOrders_r4.pagination.totalPages > 1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(14, 25, "orderHistory.orderHistory"), " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(19, 27, "orderHistory.replenishmentOrderId"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(23, 29, "orderHistory.purchaseOrderNumber"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(27, 31, "orderHistory.startOn"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(31, 33, "orderHistory.frequency"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(35, 35, "orderHistory.nextOrderDate"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(39, 37, "orderHistory.total"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(43, 39, "orderHistory.actions"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", replenishmentOrders_r4.replenishmentOrders);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", replenishmentOrders_r4.pagination.totalPages > 1);
  }
}
function ReplenishmentOrderHistoryComponent_ng_container_0_ng_template_8_div_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 35)(1, "div", 36)(2, "div");
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "cxTranslate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "a", 37);
    \u0275\u0275pipe(6, "cxUrl");
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "cxTranslate");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 3, "orderHistory.noReplenishmentOrders"));
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", \u0275\u0275pipeBind1(6, 5, \u0275\u0275pureFunction0(9, _c7)));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(8, 7, "orderHistory.startShopping"));
  }
}
function ReplenishmentOrderHistoryComponent_ng_container_0_ng_template_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, ReplenishmentOrderHistoryComponent_ng_container_0_ng_template_8_div_0_Template, 9, 10, "div", 34);
    \u0275\u0275pipe(1, "async");
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngIf", \u0275\u0275pipeBind1(1, 1, ctx_r1.isLoaded$));
  }
}
function ReplenishmentOrderHistoryComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 3)(2, "div", 4)(3, "h3");
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "cxTranslate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 5);
    \u0275\u0275template(7, ReplenishmentOrderHistoryComponent_ng_container_0_ng_container_7_Template, 49, 41, "ng-container", 6)(8, ReplenishmentOrderHistoryComponent_ng_container_0_ng_template_8_Template, 2, 3, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const replenishmentOrders_r4 = ctx.ngIf;
    const noOrder_r9 = \u0275\u0275reference(9);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(5, 3, "orderHistory.replenishmentOrderHistory"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", replenishmentOrders_r4.pagination.totalResults > 0)("ngIfElse", noOrder_r9);
  }
}
function ReturnRequestItemsComponent_table_0_tr_19_div_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 22);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const returnEntry_r1 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", returnEntry_r1.orderEntry == null ? null : returnEntry_r1.orderEntry.product.name, " ");
  }
}
function ReturnRequestItemsComponent_table_0_tr_19_div_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 23);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "cxTranslate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const returnEntry_r1 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", \u0275\u0275pipeBind1(2, 2, "cartItems.id"), " ", returnEntry_r1.orderEntry == null ? null : returnEntry_r1.orderEntry.product.code, " ");
  }
}
function ReturnRequestItemsComponent_table_0_tr_19_div_7_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 27);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const variant_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", variant_r2.name, ": ");
  }
}
function ReturnRequestItemsComponent_table_0_tr_19_div_7_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 20);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const variant_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", variant_r2.value, " ");
  }
}
function ReturnRequestItemsComponent_table_0_tr_19_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 24);
    \u0275\u0275template(1, ReturnRequestItemsComponent_table_0_tr_19_div_7_div_1_Template, 2, 1, "div", 25)(2, ReturnRequestItemsComponent_table_0_tr_19_div_7_div_2_Template, 2, 1, "div", 26);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const variant_r2 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", variant_r2.name);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", variant_r2.value);
  }
}
function ReturnRequestItemsComponent_table_0_tr_19_td_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 28)(1, "div", 19);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "cxTranslate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 20);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const returnEntry_r1 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 2, "returnRequest.itemPrice"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", returnEntry_r1.orderEntry == null ? null : returnEntry_r1.orderEntry.basePrice == null ? null : returnEntry_r1.orderEntry.basePrice.formattedValue, " ");
  }
}
function ReturnRequestItemsComponent_table_0_tr_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr", 9)(1, "td", 10)(2, "div", 11);
    \u0275\u0275element(3, "cx-media", 12);
    \u0275\u0275elementStart(4, "div", 13);
    \u0275\u0275template(5, ReturnRequestItemsComponent_table_0_tr_19_div_5_Template, 2, 1, "div", 14)(6, ReturnRequestItemsComponent_table_0_tr_19_div_6_Template, 3, 4, "div", 15)(7, ReturnRequestItemsComponent_table_0_tr_19_div_7_Template, 3, 2, "div", 16);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(8, ReturnRequestItemsComponent_table_0_tr_19_td_8_Template, 6, 4, "td", 17);
    \u0275\u0275elementStart(9, "td", 18)(10, "div", 19);
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "cxTranslate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div", 20);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "td", 21)(16, "div", 19);
    \u0275\u0275text(17);
    \u0275\u0275pipe(18, "cxTranslate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "div", 20);
    \u0275\u0275text(20);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const returnEntry_r1 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275property("container", returnEntry_r1.orderEntry == null ? null : returnEntry_r1.orderEntry.product.images == null ? null : returnEntry_r1.orderEntry.product.images.PRIMARY);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", returnEntry_r1.orderEntry == null ? null : returnEntry_r1.orderEntry.product.name);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", returnEntry_r1.orderEntry == null ? null : returnEntry_r1.orderEntry.product.code);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", returnEntry_r1.orderEntry == null ? null : returnEntry_r1.orderEntry.product.baseOptions[0] == null ? null : returnEntry_r1.orderEntry.product.baseOptions[0].selected == null ? null : returnEntry_r1.orderEntry.product.baseOptions[0].selected.variantOptionQualifiers);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", returnEntry_r1.orderEntry == null ? null : returnEntry_r1.orderEntry.basePrice);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(12, 9, "returnRequest.returnQty"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", returnEntry_r1.expectedQuantity, " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(18, 11, "returnRequest.total"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", returnEntry_r1.refundAmount == null ? null : returnEntry_r1.refundAmount.formattedValue, " ");
  }
}
function ReturnRequestItemsComponent_table_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "table", 1)(1, "caption", 2);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "cxTranslate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "thead")(5, "tr")(6, "th", 3);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "cxTranslate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "th", 4);
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "cxTranslate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "th", 5);
    \u0275\u0275text(13);
    \u0275\u0275pipe(14, "cxTranslate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "th", 6);
    \u0275\u0275text(16);
    \u0275\u0275pipe(17, "cxTranslate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(18, "tbody", 7);
    \u0275\u0275template(19, ReturnRequestItemsComponent_table_0_tr_19_Template, 21, 13, "tr", 8);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const returnRequest_r3 = ctx.ngIf;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 6, "returnRequest.caption"), " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(8, 8, "returnRequest.item"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(11, 10, "returnRequest.itemPrice"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(14, 12, "returnRequest.returnQty"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(17, 14, "returnRequest.total"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", returnRequest_r3.returnEntries);
  }
}
function ReturnRequestOverviewComponent_ng_container_0_button_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 9);
    \u0275\u0275pipe(1, "async");
    \u0275\u0275listener("click", function ReturnRequestOverviewComponent_ng_container_0_button_7_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const returnRequest_r4 = \u0275\u0275nextContext().ngIf;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.cancelReturn(returnRequest_r4.rma));
    });
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "cxTranslate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("disabled", \u0275\u0275pipeBind1(1, 2, ctx_r1.isCancelling$));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 4, "returnRequest.cancel"), " ");
  }
}
function ReturnRequestOverviewComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 1)(2, "div", 2)(3, "button", 3);
    \u0275\u0275listener("click", function ReturnRequestOverviewComponent_ng_container_0_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.back());
    });
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "cxTranslate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 2);
    \u0275\u0275template(7, ReturnRequestOverviewComponent_ng_container_0_button_7_Template, 4, 6, "button", 4);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 5)(9, "div", 6)(10, "div", 7);
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "cxTranslate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div", 8);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "div", 6)(16, "div", 7);
    \u0275\u0275text(17);
    \u0275\u0275pipe(18, "cxTranslate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "div", 8);
    \u0275\u0275text(20);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "div", 6)(22, "div", 7);
    \u0275\u0275text(23);
    \u0275\u0275pipe(24, "cxTranslate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "div", 8);
    \u0275\u0275text(26);
    \u0275\u0275pipe(27, "cxTranslate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const returnRequest_r4 = ctx.ngIf;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(5, 8, "common.back"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", returnRequest_r4.cancellable);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(12, 10, "returnRequest.returnRequestId"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(returnRequest_r4.rma);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(18, 12, "returnRequest.orderCode"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(returnRequest_r4.order == null ? null : returnRequest_r4.order.code);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(24, 14, "returnRequest.status"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(27, 16, "returnRequestList.statusDisplay_" + (returnRequest_r4 == null ? null : returnRequest_r4.status)), " ");
  }
}
function ReturnRequestTotalsComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 1)(2, "div", 2)(3, "h4");
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "cxTranslate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 3)(7, "div", 4);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "cxTranslate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 5);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div", 3)(13, "div", 4);
    \u0275\u0275text(14);
    \u0275\u0275pipe(15, "cxTranslate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "div", 5);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "div", 6)(19, "div", 4);
    \u0275\u0275text(20);
    \u0275\u0275pipe(21, "cxTranslate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "div", 5);
    \u0275\u0275text(23);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(24, "div", 7);
    \u0275\u0275text(25);
    \u0275\u0275pipe(26, "cxTranslate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const returnRequest_r1 = ctx.ngIf;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 8, "returnRequest.summary"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(9, 10, "returnRequest.subtotal"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", returnRequest_r1.subTotal == null ? null : returnRequest_r1.subTotal.formattedValue, " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(15, 12, "returnRequest.deliveryCode"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", returnRequest_r1.deliveryCost == null ? null : returnRequest_r1.deliveryCost.formattedValue, " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(21, 14, "returnRequest.estimatedRefund"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", returnRequest_r1.totalPrice == null ? null : returnRequest_r1.totalPrice.formattedValue, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(26, 16, "returnRequest.note"), " ");
  }
}
function OrderReturnRequestListComponent_ng_container_0_ng_container_3_tr_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 13)(2, "div", 14);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "cxTranslate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "a", 15);
    \u0275\u0275pipe(6, "cxUrl");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "td", 13)(9, "div", 14);
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "cxTranslate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "a", 15);
    \u0275\u0275pipe(13, "cxUrl");
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "td", 16)(16, "div", 14);
    \u0275\u0275text(17);
    \u0275\u0275pipe(18, "cxTranslate");
    \u0275\u0275elementEnd();
    \u0275\u0275text(19);
    \u0275\u0275pipe(20, "cxDate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "td", 17)(22, "div", 14);
    \u0275\u0275text(23);
    \u0275\u0275pipe(24, "cxTranslate");
    \u0275\u0275elementEnd();
    \u0275\u0275text(25);
    \u0275\u0275pipe(26, "cxTranslate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const return_r3 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 10, "returnRequestList.returnRequestId"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", \u0275\u0275pipeBind1(6, 12, \u0275\u0275pureFunction1(27, _c24, return_r3)));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", return_r3 == null ? null : return_r3.rma, "");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(11, 14, "returnRequestList.orderId"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", \u0275\u0275pipeBind1(13, 16, \u0275\u0275pureFunction1(29, _c4, return_r3 == null ? null : return_r3.order)));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", return_r3 == null ? null : return_r3.order == null ? null : return_r3.order.code, "");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(18, 18, "returnRequestList.date"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(20, 20, return_r3 == null ? null : return_r3.creationTime, "longDate"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(24, 23, "returnRequestList.status"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(26, 25, "returnRequestList.statusDisplay_" + (return_r3 == null ? null : return_r3.status)), " ");
  }
}
function OrderReturnRequestListComponent_ng_container_0_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 3)(2, "label", 4)(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "cxTranslate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "cx-sorting", 5);
    \u0275\u0275pipe(7, "async");
    \u0275\u0275pipe(8, "cxTranslate");
    \u0275\u0275listener("sortListEvent", function OrderReturnRequestListComponent_ng_container_0_ng_container_3_Template_cx_sorting_sortListEvent_6_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.changeSortCode($event));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 6)(10, "cx-pagination", 7);
    \u0275\u0275listener("viewPageEvent", function OrderReturnRequestListComponent_ng_container_0_ng_container_3_Template_cx_pagination_viewPageEvent_10_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.pageChange($event));
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(11, "table", 8)(12, "thead", 9)(13, "th", 10);
    \u0275\u0275text(14);
    \u0275\u0275pipe(15, "cxTranslate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "th", 10);
    \u0275\u0275text(17);
    \u0275\u0275pipe(18, "cxTranslate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "th", 10);
    \u0275\u0275text(20);
    \u0275\u0275pipe(21, "cxTranslate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "th", 10);
    \u0275\u0275text(23);
    \u0275\u0275pipe(24, "cxTranslate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(25, "tbody");
    \u0275\u0275template(26, OrderReturnRequestListComponent_ng_container_0_ng_container_3_tr_26_Template, 27, 31, "tr", 11);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(27, "div", 12)(28, "label", 4)(29, "span");
    \u0275\u0275text(30);
    \u0275\u0275pipe(31, "cxTranslate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "cx-sorting", 5);
    \u0275\u0275pipe(33, "async");
    \u0275\u0275pipe(34, "cxTranslate");
    \u0275\u0275listener("sortListEvent", function OrderReturnRequestListComponent_ng_container_0_ng_container_3_Template_cx_sorting_sortListEvent_32_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.changeSortCode($event));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(35, "div", 6)(36, "cx-pagination", 7);
    \u0275\u0275listener("viewPageEvent", function OrderReturnRequestListComponent_ng_container_0_ng_container_3_Template_cx_pagination_viewPageEvent_36_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.pageChange($event));
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const returnRequests_r4 = \u0275\u0275nextContext().ngIf;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 17, "returnRequestList.sortBy"));
    \u0275\u0275advance(2);
    \u0275\u0275property("sortOptions", returnRequests_r4.sorts)("sortLabels", \u0275\u0275pipeBind1(7, 19, ctx_r1.getSortLabels()))("selectedOption", returnRequests_r4.pagination.sort)("ariaLabel", \u0275\u0275pipeBind1(8, 21, "returnRequestList.sortReturns"));
    \u0275\u0275advance(4);
    \u0275\u0275property("pagination", returnRequests_r4.pagination);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(15, 23, "returnRequestList.returnRequestId"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(18, 25, "returnRequestList.orderId"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(21, 27, "returnRequestList.date"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(24, 29, "returnRequestList.status"));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", returnRequests_r4.returnRequests);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(31, 31, "returnRequestList.sortBy"));
    \u0275\u0275advance(2);
    \u0275\u0275property("sortOptions", returnRequests_r4.sorts)("sortLabels", \u0275\u0275pipeBind1(33, 33, ctx_r1.getSortLabels()))("selectedOption", returnRequests_r4.pagination.sort)("ariaLabel", \u0275\u0275pipeBind1(34, 35, "returnRequestList.sortReturns"));
    \u0275\u0275advance(4);
    \u0275\u0275property("pagination", returnRequests_r4.pagination);
  }
}
function OrderReturnRequestListComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 1)(2, "div", 2);
    \u0275\u0275template(3, OrderReturnRequestListComponent_ng_container_0_ng_container_3_Template, 37, 37, "ng-container", 0);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const returnRequests_r4 = ctx.ngIf;
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", returnRequests_r4.pagination.totalResults > 0);
  }
}
var _AmendOrderActionsComponent = class _AmendOrderActionsComponent {
  constructor(routingService) {
    this.routingService = routingService;
    this.styles = "row";
  }
  continue(event) {
    if (this.amendOrderForm.valid) {
      this.routingService.go({
        cxRoute: this.forwardRoute,
        params: {
          code: this.orderCode
        }
      });
    } else {
      this.amendOrderForm.markAllAsTouched();
      event.stopPropagation();
    }
  }
};
_AmendOrderActionsComponent.\u0275fac = function AmendOrderActionsComponent_Factory(t) {
  return new (t || _AmendOrderActionsComponent)(\u0275\u0275directiveInject(RoutingService));
};
_AmendOrderActionsComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
  type: _AmendOrderActionsComponent,
  selectors: [["cx-amend-order-actions"]],
  hostVars: 2,
  hostBindings: function AmendOrderActionsComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      \u0275\u0275classMap(ctx.styles);
    }
  },
  inputs: {
    orderCode: "orderCode",
    amendOrderForm: "amendOrderForm",
    backRoute: "backRoute",
    forwardRoute: "forwardRoute"
  },
  decls: 8,
  vars: 13,
  consts: [[1, "col-xs-12", "col-md-4", "col-lg-3"], [1, "btn", "btn-block", "btn-secondary", 3, "routerLink"], ["class", "btn btn-block btn-primary", 3, "click", 4, "ngIf"], ["class", "btn btn-block btn-primary", "type", "submit", 4, "ngIf"], [1, "btn", "btn-block", "btn-primary", 3, "click"], ["type", "submit", 1, "btn", "btn-block", "btn-primary"]],
  template: function AmendOrderActionsComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "a", 1);
      \u0275\u0275pipe(2, "cxUrl");
      \u0275\u0275text(3);
      \u0275\u0275pipe(4, "cxTranslate");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(5, "div", 0);
      \u0275\u0275template(6, AmendOrderActionsComponent_button_6_Template, 3, 3, "button", 2)(7, AmendOrderActionsComponent_button_7_Template, 4, 6, "button", 3);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275property("routerLink", \u0275\u0275pipeBind1(2, 4, \u0275\u0275pureFunction2(10, _c1, ctx.backRoute, \u0275\u0275pureFunction1(8, _c02, ctx.orderCode))));
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 6, "common.back"), " ");
      \u0275\u0275advance(3);
      \u0275\u0275property("ngIf", ctx.forwardRoute);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.forwardRoute);
    }
  },
  dependencies: [NgIf, RouterLink, UrlPipe, TranslatePipe],
  encapsulation: 2,
  changeDetection: 0
});
var AmendOrderActionsComponent = _AmendOrderActionsComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AmendOrderActionsComponent, [{
    type: Component,
    args: [{
      selector: "cx-amend-order-actions",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: `<div class="col-xs-12 col-md-4 col-lg-3">
  <a
    [routerLink]="
      {
        cxRoute: backRoute,
        params: { code: orderCode }
      } | cxUrl
    "
    class="btn btn-block btn-secondary"
  >
    {{ 'common.back' | cxTranslate }}
  </a>
</div>
<div class="col-xs-12 col-md-4 col-lg-3">
  <button
    *ngIf="forwardRoute"
    class="btn btn-block btn-primary"
    (click)="continue($event)"
  >
    {{ 'common.continue' | cxTranslate }}
  </button>

  <button
    *ngIf="!forwardRoute"
    class="btn btn-block btn-primary"
    type="submit"
    [attr.aria-label]="
      'orderDetails.cancellationAndReturn.submitDescription' | cxTranslate
    "
  >
    {{ 'orderDetails.cancellationAndReturn.submit' | cxTranslate }}
  </button>
</div>
`
    }]
  }], () => [{
    type: RoutingService
  }], {
    orderCode: [{
      type: Input
    }],
    amendOrderForm: [{
      type: Input
    }],
    backRoute: [{
      type: Input
    }],
    forwardRoute: [{
      type: Input
    }],
    styles: [{
      type: HostBinding,
      args: ["class"]
    }]
  });
})();
var _AmendOrderActionsModule = class _AmendOrderActionsModule {
};
_AmendOrderActionsModule.\u0275fac = function AmendOrderActionsModule_Factory(t) {
  return new (t || _AmendOrderActionsModule)();
};
_AmendOrderActionsModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
  type: _AmendOrderActionsModule
});
_AmendOrderActionsModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
  imports: [CommonModule, RouterModule, UrlModule, I18nModule]
});
var AmendOrderActionsModule = _AmendOrderActionsModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AmendOrderActionsModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, RouterModule, UrlModule, I18nModule],
      declarations: [AmendOrderActionsComponent],
      exports: [AmendOrderActionsComponent]
    }]
  }], null, null);
})();
var AmendOrderType;
(function(AmendOrderType2) {
  AmendOrderType2[AmendOrderType2["CANCEL"] = 0] = "CANCEL";
  AmendOrderType2[AmendOrderType2["RETURN"] = 1] = "RETURN";
})(AmendOrderType || (AmendOrderType = {}));
var _OrderDetailsService = class _OrderDetailsService {
  constructor(orderHistoryFacade, routingService) {
    this.orderHistoryFacade = orderHistoryFacade;
    this.routingService = routingService;
    this.orderCode$ = this.routingService.getRouterState().pipe(map((routingData) => routingData.state.params.orderCode), distinctUntilChanged());
    this.orderLoad$ = this.orderCode$.pipe(tap((orderCode) => {
      if (orderCode) {
        this.orderHistoryFacade.loadOrderDetails(orderCode);
      } else {
        this.orderHistoryFacade.clearOrderDetails();
      }
    }), shareReplay({
      bufferSize: 1,
      refCount: true
    }));
  }
  isOrderDetailsLoading() {
    return this.orderHistoryFacade.getOrderDetailsLoading();
  }
  getOrderDetails() {
    return this.orderLoad$.pipe(switchMap(() => this.orderHistoryFacade.getOrderDetails()));
  }
};
_OrderDetailsService.\u0275fac = function OrderDetailsService_Factory(t) {
  return new (t || _OrderDetailsService)(\u0275\u0275inject(OrderHistoryFacade), \u0275\u0275inject(RoutingService));
};
_OrderDetailsService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
  token: _OrderDetailsService,
  factory: _OrderDetailsService.\u0275fac,
  providedIn: "root"
});
var OrderDetailsService = _OrderDetailsService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OrderDetailsService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: OrderHistoryFacade
  }, {
    type: RoutingService
  }], null);
})();
function ValidateQuantityToCancel(control) {
  if (!control.value) {
    return null;
  }
  const quantity = Object.values(control.value).reduce((acc, val) => acc + val, 0);
  return quantity > 0 ? null : {
    cxNoSelectedItemToCancel: true
  };
}
var _OrderAmendService = class _OrderAmendService {
  constructor(orderDetailsService) {
    this.orderDetailsService = orderDetailsService;
  }
  /**
   * Returns entries with an amended quantity.
   */
  getAmendedEntries() {
    return this.getForm().pipe(switchMap((form) => {
      return this.getEntries().pipe(map((entries) => entries.filter((entry) => this.getFormControl(form, entry).value > 0)));
    }));
  }
  getOrder() {
    return this.orderDetailsService.getOrderDetails();
  }
  /**
   * returns the form with form data at runtime
   */
  getForm() {
    return this.getOrder().pipe(tap((order) => {
      if (!this.form || this.form.get("orderCode")?.value !== order.code) {
        this.buildForm(order);
      }
    }), map(() => this.form));
  }
  buildForm(order) {
    this.form = new UntypedFormGroup({});
    this.form.addControl("orderCode", new UntypedFormControl(order.code));
    const entryGroup = new UntypedFormGroup({}, {
      validators: [ValidateQuantityToCancel]
    });
    this.form.addControl("entries", entryGroup);
    (order.entries || []).forEach((entry) => {
      const key = entry?.entryNumber?.toString() ?? "";
      entryGroup.addControl(key, new UntypedFormControl(0, {
        validators: [Validators.min(0), Validators.max(this.getMaxAmendQuantity(entry))]
      }));
    });
  }
  getFormControl(form, entry) {
    return form.get("entries")?.get(entry.entryNumber?.toString() ?? "");
  }
  /**
   * As discussed, this calculation is moved to SPA side.
   * The calculation and validation should be in backend facade layer.
   */
  getAmendedPrice(entry) {
    const amendedQuantity = this.getFormControl(this.form, entry).value;
    const amendedPrice = Object.assign({}, entry.basePrice);
    amendedPrice.value = Math.round((entry.basePrice?.value ?? 0) * amendedQuantity * 100) / 100;
    amendedPrice.formattedValue = formatCurrency(
      amendedPrice.value,
      // TODO: user current language
      "en",
      getCurrencySymbol(amendedPrice.currencyIso ?? "", "narrow"),
      amendedPrice.currencyIso
    );
    return amendedPrice;
  }
  getMaxAmendQuantity(entry) {
    return (this.isCancellation() ? entry.cancellableQuantity : entry.returnableQuantity) || entry.quantity || 0;
  }
  isCancellation() {
    return this.amendType === AmendOrderType.CANCEL;
  }
};
_OrderAmendService.\u0275fac = function OrderAmendService_Factory(t) {
  return new (t || _OrderAmendService)(\u0275\u0275inject(OrderDetailsService));
};
_OrderAmendService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
  token: _OrderAmendService,
  factory: _OrderAmendService.\u0275fac
});
var OrderAmendService = _OrderAmendService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OrderAmendService, [{
    type: Injectable
  }], () => [{
    type: OrderDetailsService
  }], null);
})();
var _CancelOrReturnItemsComponent = class _CancelOrReturnItemsComponent {
  constructor(orderAmendService) {
    this.orderAmendService = orderAmendService;
    this.isConfirmation = false;
    this.form$ = this.orderAmendService.getForm();
  }
  getControl(form, entry) {
    const control = form.get("entries")?.get(entry.entryNumber?.toString() ?? "");
    return control;
  }
  setAll(form) {
    this.entries.forEach((entry) => this.getControl(form, entry).setValue(this.getMaxAmendQuantity(entry)));
  }
  getItemPrice(entry) {
    return this.orderAmendService.getAmendedPrice(entry);
  }
  getMaxAmendQuantity(entry) {
    return this.orderAmendService.getMaxAmendQuantity(entry);
  }
  isCancellation() {
    return this.orderAmendService.isCancellation();
  }
};
_CancelOrReturnItemsComponent.\u0275fac = function CancelOrReturnItemsComponent_Factory(t) {
  return new (t || _CancelOrReturnItemsComponent)(\u0275\u0275directiveInject(OrderAmendService));
};
_CancelOrReturnItemsComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
  type: _CancelOrReturnItemsComponent,
  selectors: [["cx-amend-order-items"]],
  inputs: {
    entries: "entries",
    isConfirmation: "isConfirmation"
  },
  decls: 2,
  vars: 3,
  consts: [[4, "ngIf"], ["class", "btn btn-link cx-action-link", 3, "click", 4, "ngIf"], [1, "cx-amend-order-items"], [1, "cx-visually-hidden"], ["role", "columnheader", 1, "cx-item-list-desc"], ["role", "columnheader", 1, "cx-item-list-price"], ["role", "columnheader", "class", "cx-item-list-amend-qty", 4, "ngIf"], ["role", "columnheader", 1, "cx-item-list-qty"], ["role", "columnheader", "class", "cx-item-list-total", 4, "ngIf"], [1, "cx-item-list-items"], ["class", "cx-item-list-row cx-amend-order-item-row", 4, "ngFor", "ngForOf"], [1, "btn", "btn-link", "cx-action-link", 3, "click"], ["role", "columnheader", 1, "cx-item-list-amend-qty"], ["role", "columnheader", 1, "cx-item-list-total"], [1, "cx-item-list-row", "cx-amend-order-item-row"], ["role", "cell"], [1, "cx-table-item-container"], ["format", "thumbnail", 3, "container"], [1, "cx-info"], [1, "cx-name"], ["class", "cx-code", 4, "ngIf"], ["role", "cell", "class", "cx-price", 4, "ngIf"], ["role", "cell", "class", "cx-request-qty", 4, "ngIf"], ["role", "cell", 1, "cx-quantity"], [1, "cx-mobile-header"], [1, "cx-value"], [3, "min", "max", "control", 4, "ngIf"], ["role", "cell", "class", "cx-total", 4, "ngIf"], [1, "cx-code"], ["class", "cx-property", 4, "ngFor", "ngForOf"], [1, "cx-property"], ["class", "cx-label", 4, "ngIf"], ["class", "cx-value", 4, "ngIf"], [1, "cx-label"], ["role", "cell", 1, "cx-price"], ["role", "cell", 1, "cx-request-qty"], [1, "cx-mobile-header", 3, "title"], [3, "min", "max", "control"], ["role", "cell", 1, "cx-total"]],
  template: function CancelOrReturnItemsComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275template(0, CancelOrReturnItemsComponent_div_0_Template, 21, 16, "div", 0);
      \u0275\u0275pipe(1, "async");
    }
    if (rf & 2) {
      \u0275\u0275property("ngIf", \u0275\u0275pipeBind1(1, 1, ctx.form$));
    }
  },
  dependencies: [NgForOf, NgIf, MediaComponent, ItemCounterComponent, AsyncPipe, TranslatePipe],
  encapsulation: 2,
  changeDetection: 0
});
var CancelOrReturnItemsComponent = _CancelOrReturnItemsComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CancelOrReturnItemsComponent, [{
    type: Component,
    args: [{
      selector: "cx-amend-order-items",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: `<div *ngIf="form$ | async as form">
  <button
    *ngIf="!isConfirmation"
    class="btn btn-link cx-action-link"
    (click)="setAll(form)"
  >
    {{ 'orderDetails.cancellationAndReturn.setAll' | cxTranslate }}
  </button>

  <table class="cx-amend-order-items">
    <caption class="cx-visually-hidden">
      {{
        'orderDetails.caption' | cxTranslate
      }}
    </caption>
    <thead>
      <tr>
        <th role="columnheader" class="cx-item-list-desc">
          {{ 'orderDetails.cancellationAndReturn.item' | cxTranslate }}
        </th>
        <th role="columnheader" class="cx-item-list-price">
          {{ 'orderDetails.cancellationAndReturn.itemPrice' | cxTranslate }}
        </th>
        <th
          *ngIf="!isConfirmation"
          role="columnheader"
          class="cx-item-list-amend-qty"
        >
          {{ 'orderDetails.cancellationAndReturn.quantity' | cxTranslate }}
        </th>
        <th role="columnheader" class="cx-item-list-qty">
          {{
            (isCancellation()
              ? 'orderDetails.cancellationAndReturn.cancelQty'
              : 'orderDetails.cancellationAndReturn.returnQty'
            ) | cxTranslate
          }}
        </th>
        <th
          *ngIf="isConfirmation"
          role="columnheader"
          class="cx-item-list-total"
        >
          {{ 'orderDetails.cancellationAndReturn.totalPrice' | cxTranslate }}
        </th>
      </tr>
    </thead>
    <tbody class="cx-item-list-items">
      <!--    TODO: This should be a separate component-->
      <tr
        *ngFor="let item of entries; let i = index"
        class="cx-item-list-row cx-amend-order-item-row"
      >
        <td role="cell">
          <div class="cx-table-item-container">
            <cx-media
              [container]="item.product.images?.PRIMARY"
              format="thumbnail"
            ></cx-media>

            <div class="cx-info">
              <div class="cx-name">
                {{ item.product.name }}
              </div>

              <div *ngIf="item.product.code" class="cx-code">
                {{ 'cartItems.id' | cxTranslate }} {{ item.product.code }}
              </div>
            </div>

            <ng-container *ngIf="item.product.baseOptions?.length">
              <div
                *ngFor="
                  let variant of item.product.baseOptions[0]?.selected
                    ?.variantOptionQualifiers
                "
                class="cx-property"
              >
                <div class="cx-label" *ngIf="variant.name">
                  {{ variant.name }}:
                </div>
                <div class="cx-value" *ngIf="variant.value">
                  {{ variant.value }}
                </div>
              </div>
            </ng-container>
          </div>
        </td>

        <td role="cell" class="cx-price" *ngIf="item.basePrice">
          <div class="cx-mobile-header">
            {{ 'orderDetails.cancellationAndReturn.itemPrice' | cxTranslate }}
          </div>
          <div class="cx-value">
            {{ item.basePrice?.formattedValue }}
          </div>
        </td>

        <td role="cell" *ngIf="!isConfirmation" class="cx-request-qty">
          <div
            class="cx-mobile-header"
            title="{{ 'cartItems.quantityTitle' | cxTranslate }}"
          >
            {{ 'orderDetails.cancellationAndReturn.quantity' | cxTranslate }}
          </div>
          <div class="cx-value">
            {{ getMaxAmendQuantity(item) }}
          </div>
        </td>

        <td role="cell" class="cx-quantity">
          <div class="cx-mobile-header">
            {{
              (isCancellation()
                ? 'orderDetails.cancellationAndReturn.cancelQty'
                : 'orderDetails.cancellationAndReturn.returnQty'
              ) | cxTranslate
            }}
          </div>
          <div class="cx-value">
            <ng-container *ngIf="isConfirmation">
              {{ getControl(form, item).value }}
            </ng-container>
            <cx-item-counter
              *ngIf="!isConfirmation"
              [min]="0"
              [max]="getMaxAmendQuantity(item)"
              [control]="getControl(form, item)"
            ></cx-item-counter>
          </div>
        </td>

        <td role="cell" *ngIf="isConfirmation" class="cx-total">
          <div class="cx-mobile-header">
            {{ 'orderDetails.cancellationAndReturn.totalPrice' | cxTranslate }}
          </div>
          <div class="cx-value">{{ getItemPrice(item)?.formattedValue }}</div>
        </td>
      </tr>
    </tbody>
  </table>
</div>
`
    }]
  }], () => [{
    type: OrderAmendService
  }], {
    entries: [{
      type: Input
    }],
    isConfirmation: [{
      type: Input
    }]
  });
})();
var _AmendOrderItemsModule = class _AmendOrderItemsModule {
};
_AmendOrderItemsModule.\u0275fac = function AmendOrderItemsModule_Factory(t) {
  return new (t || _AmendOrderItemsModule)();
};
_AmendOrderItemsModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
  type: _AmendOrderItemsModule
});
_AmendOrderItemsModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
  imports: [CommonModule, ReactiveFormsModule, I18nModule, MediaModule, ItemCounterModule, FormErrorsModule]
});
var AmendOrderItemsModule = _AmendOrderItemsModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AmendOrderItemsModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, ReactiveFormsModule, I18nModule, MediaModule, ItemCounterModule, FormErrorsModule],
      declarations: [CancelOrReturnItemsComponent],
      exports: [CancelOrReturnItemsComponent]
    }]
  }], null, null);
})();
var _CancelOrderConfirmationComponent = class _CancelOrderConfirmationComponent {
  constructor(orderAmendService) {
    this.orderAmendService = orderAmendService;
    this.form$ = this.orderAmendService.getForm().pipe(tap((form) => this.orderCode = form.value.orderCode));
    this.entries$ = this.orderAmendService.getAmendedEntries();
  }
  submit(form) {
    if (form.valid) {
      this.orderAmendService.save();
    } else {
      form.markAllAsTouched();
    }
  }
};
_CancelOrderConfirmationComponent.\u0275fac = function CancelOrderConfirmationComponent_Factory(t) {
  return new (t || _CancelOrderConfirmationComponent)(\u0275\u0275directiveInject(OrderAmendService));
};
_CancelOrderConfirmationComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
  type: _CancelOrderConfirmationComponent,
  selectors: [["cx-cancel-order-confirmation"]],
  decls: 2,
  vars: 3,
  consts: [["actions", ""], [3, "formGroup", "ngSubmit", 4, "ngIf"], [3, "ngSubmit", "formGroup"], [4, "ngTemplateOutlet"], [3, "entries", "isConfirmation", 4, "ngIf"], [3, "entries", "isConfirmation"], ["backRoute", "orderCancel", 3, "orderCode", "amendOrderForm", 4, "ngIf"], ["backRoute", "orderCancel", 3, "orderCode", "amendOrderForm"]],
  template: function CancelOrderConfirmationComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275template(0, CancelOrderConfirmationComponent_form_0_Template, 7, 6, "form", 1);
      \u0275\u0275pipe(1, "async");
    }
    if (rf & 2) {
      \u0275\u0275property("ngIf", \u0275\u0275pipeBind1(1, 1, ctx.form$));
    }
  },
  dependencies: [NgIf, NgTemplateOutlet, \u0275NgNoValidate, NgControlStatusGroup, FormGroupDirective, CancelOrReturnItemsComponent, AmendOrderActionsComponent, AsyncPipe],
  encapsulation: 2,
  changeDetection: 0
});
var CancelOrderConfirmationComponent = _CancelOrderConfirmationComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CancelOrderConfirmationComponent, [{
    type: Component,
    args: [{
      selector: "cx-cancel-order-confirmation",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: '<form\n  *ngIf="form$ | async as form"\n  [formGroup]="form"\n  (ngSubmit)="submit(form)"\n>\n  <ng-container *ngTemplateOutlet="actions"></ng-container>\n\n  <cx-amend-order-items\n    *ngIf="entries$ | async as entries"\n    [entries]="entries"\n    [isConfirmation]="true"\n  >\n  </cx-amend-order-items>\n\n  <ng-container *ngTemplateOutlet="actions"></ng-container>\n\n  <ng-template #actions>\n    <cx-amend-order-actions\n      *ngIf="orderCode"\n      [orderCode]="orderCode"\n      [amendOrderForm]="form"\n      backRoute="orderCancel"\n    ></cx-amend-order-actions>\n  </ng-template>\n</form>\n'
    }]
  }], () => [{
    type: OrderAmendService
  }], null);
})();
var _OrderCancellationService = class _OrderCancellationService extends OrderAmendService {
  constructor(orderDetailsService, orderHistoryFacade, routing, globalMessageService) {
    super(orderDetailsService);
    this.orderDetailsService = orderDetailsService;
    this.orderHistoryFacade = orderHistoryFacade;
    this.routing = routing;
    this.globalMessageService = globalMessageService;
    this.amendType = AmendOrderType.CANCEL;
  }
  /**
   * Return cancellable order entries.
   */
  getEntries() {
    return this.getOrder().pipe(filter((order) => !!order?.entries), map((order) => order.entries?.filter((entry) => entry.entryNumber !== -1 && entry.cancellableQuantity && entry.cancellableQuantity > 0) ?? []));
  }
  save() {
    const orderCode = this.form.value.orderCode;
    const entries = this.form.value.entries;
    const inputs = Object.keys(entries).filter((entryNumber) => entries[entryNumber] > 0).map((entryNumber) => ({
      orderEntryNumber: Number(entryNumber),
      quantity: entries[entryNumber]
    }));
    this.form.reset();
    this.orderHistoryFacade.cancelOrder(orderCode, {
      cancellationRequestEntryInputs: inputs
    });
    this.orderHistoryFacade.getCancelOrderSuccess().pipe(first(Boolean)).subscribe(() => this.afterSave(orderCode));
  }
  afterSave(orderCode) {
    this.orderHistoryFacade.resetCancelOrderProcessState();
    this.globalMessageService.add({
      key: "orderDetails.cancellationAndReturn.cancelSuccess",
      params: {
        orderCode
      }
    }, GlobalMessageType.MSG_TYPE_CONFIRMATION);
    this.routing.go({
      cxRoute: "orders"
    });
  }
};
_OrderCancellationService.\u0275fac = function OrderCancellationService_Factory(t) {
  return new (t || _OrderCancellationService)(\u0275\u0275inject(OrderDetailsService), \u0275\u0275inject(OrderHistoryFacade), \u0275\u0275inject(RoutingService), \u0275\u0275inject(GlobalMessageService));
};
_OrderCancellationService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
  token: _OrderCancellationService,
  factory: _OrderCancellationService.\u0275fac,
  providedIn: "root"
});
var OrderCancellationService = _OrderCancellationService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OrderCancellationService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: OrderDetailsService
  }, {
    type: OrderHistoryFacade
  }, {
    type: RoutingService
  }, {
    type: GlobalMessageService
  }], null);
})();
var _OrderCancellationGuard = class _OrderCancellationGuard {
  constructor(orderAmendService, semanticPathService, router) {
    this.orderAmendService = orderAmendService;
    this.semanticPathService = semanticPathService;
    this.router = router;
  }
  canActivate() {
    return this.orderAmendService.getForm().pipe(map((form) => {
      if (!form.valid) {
        return this.router.parseUrl(this.semanticPathService.get("orders") ?? "");
      } else {
        return true;
      }
    }));
  }
};
_OrderCancellationGuard.\u0275fac = function OrderCancellationGuard_Factory(t) {
  return new (t || _OrderCancellationGuard)(\u0275\u0275inject(OrderCancellationService), \u0275\u0275inject(SemanticPathService), \u0275\u0275inject(Router));
};
_OrderCancellationGuard.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
  token: _OrderCancellationGuard,
  factory: _OrderCancellationGuard.\u0275fac,
  providedIn: "root"
});
var OrderCancellationGuard = _OrderCancellationGuard;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OrderCancellationGuard, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: OrderCancellationService
  }, {
    type: SemanticPathService
  }, {
    type: Router
  }], null);
})();
var _CancelOrderConfirmationModule = class _CancelOrderConfirmationModule {
};
_CancelOrderConfirmationModule.\u0275fac = function CancelOrderConfirmationModule_Factory(t) {
  return new (t || _CancelOrderConfirmationModule)();
};
_CancelOrderConfirmationModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
  type: _CancelOrderConfirmationModule
});
_CancelOrderConfirmationModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
  providers: [provideDefaultConfig({
    cmsComponents: {
      CancelOrderConfirmationComponent: {
        component: CancelOrderConfirmationComponent,
        guards: [AuthGuard, OrderCancellationGuard],
        providers: [{
          provide: OrderAmendService,
          useExisting: OrderCancellationService
        }]
      }
    }
  })],
  imports: [CommonModule, ReactiveFormsModule, AmendOrderItemsModule, AmendOrderActionsModule]
});
var CancelOrderConfirmationModule = _CancelOrderConfirmationModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CancelOrderConfirmationModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, ReactiveFormsModule, AmendOrderItemsModule, AmendOrderActionsModule],
      providers: [provideDefaultConfig({
        cmsComponents: {
          CancelOrderConfirmationComponent: {
            component: CancelOrderConfirmationComponent,
            guards: [AuthGuard, OrderCancellationGuard],
            providers: [{
              provide: OrderAmendService,
              useExisting: OrderCancellationService
            }]
          }
        }
      })],
      declarations: [CancelOrderConfirmationComponent],
      exports: [CancelOrderConfirmationComponent]
    }]
  }], null, null);
})();
var _CancelOrderComponent = class _CancelOrderComponent {
  constructor(orderAmendService) {
    this.orderAmendService = orderAmendService;
    this.globalMessageType = GlobalMessageType;
    this.form$ = this.orderAmendService.getForm().pipe(tap((form) => this.orderCode = form.value.orderCode));
    this.entries$ = this.orderAmendService.getEntries();
  }
};
_CancelOrderComponent.\u0275fac = function CancelOrderComponent_Factory(t) {
  return new (t || _CancelOrderComponent)(\u0275\u0275directiveInject(OrderAmendService));
};
_CancelOrderComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
  type: _CancelOrderComponent,
  selectors: [["cx-cancel-order"]],
  decls: 2,
  vars: 3,
  consts: [["actions", ""], [4, "ngIf"], ["role", "alert", 3, "text", "isVisibleCloseButton", "type", 4, "ngIf"], [4, "ngTemplateOutlet"], [3, "entries", 4, "ngIf"], [3, "control"], ["role", "alert", 3, "text", "isVisibleCloseButton", "type"], [3, "entries"], ["backRoute", "orderDetails", "forwardRoute", "orderCancelConfirmation", 3, "orderCode", "amendOrderForm", 4, "ngIf"], ["backRoute", "orderDetails", "forwardRoute", "orderCancelConfirmation", 3, "orderCode", "amendOrderForm"]],
  template: function CancelOrderComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275template(0, CancelOrderComponent_ng_container_0_Template, 9, 7, "ng-container", 1);
      \u0275\u0275pipe(1, "async");
    }
    if (rf & 2) {
      \u0275\u0275property("ngIf", \u0275\u0275pipeBind1(1, 1, ctx.form$));
    }
  },
  dependencies: [NgIf, NgTemplateOutlet, CancelOrReturnItemsComponent, AmendOrderActionsComponent, FormErrorsComponent, MessageComponent, AsyncPipe, TranslatePipe],
  encapsulation: 2,
  changeDetection: 0
});
var CancelOrderComponent = _CancelOrderComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CancelOrderComponent, [{
    type: Component,
    args: [{
      selector: "cx-cancel-order",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: `<ng-container *ngIf="form$ | async as form">
  <cx-message
    role="alert"
    *ngIf="!form.get('entries').valid && form.get('entries').touched"
    [text]="'formErrors.cxNoSelectedItemToCancel' | cxTranslate"
    [isVisibleCloseButton]="false"
    [type]="globalMessageType.MSG_TYPE_ERROR"
  >
  </cx-message>
  <ng-container *ngTemplateOutlet="actions"></ng-container>
  <cx-amend-order-items *ngIf="entries$ | async as entries" [entries]="entries">
  </cx-amend-order-items>

  <cx-form-errors [control]="form.get('entries')"></cx-form-errors>

  <ng-container *ngTemplateOutlet="actions"></ng-container>

  <ng-template #actions>
    <cx-amend-order-actions
      *ngIf="orderCode"
      [orderCode]="orderCode"
      [amendOrderForm]="form"
      backRoute="orderDetails"
      forwardRoute="orderCancelConfirmation"
    ></cx-amend-order-actions>
  </ng-template>
</ng-container>
`
    }]
  }], () => [{
    type: OrderAmendService
  }], null);
})();
var _CancelOrderModule = class _CancelOrderModule {
};
_CancelOrderModule.\u0275fac = function CancelOrderModule_Factory(t) {
  return new (t || _CancelOrderModule)();
};
_CancelOrderModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
  type: _CancelOrderModule
});
_CancelOrderModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
  providers: [provideDefaultConfig({
    cmsComponents: {
      CancelOrderComponent: {
        component: CancelOrderComponent,
        guards: [AuthGuard],
        providers: [{
          provide: OrderAmendService,
          useExisting: OrderCancellationService
        }]
      }
    }
  })],
  imports: [CommonModule, I18nModule, AmendOrderItemsModule, AmendOrderActionsModule, FormErrorsModule, MessageComponentModule]
});
var CancelOrderModule = _CancelOrderModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CancelOrderModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, I18nModule, AmendOrderItemsModule, AmendOrderActionsModule, FormErrorsModule, MessageComponentModule],
      providers: [provideDefaultConfig({
        cmsComponents: {
          CancelOrderComponent: {
            component: CancelOrderComponent,
            guards: [AuthGuard],
            providers: [{
              provide: OrderAmendService,
              useExisting: OrderCancellationService
            }]
          }
        }
      })],
      declarations: [CancelOrderComponent],
      exports: [CancelOrderComponent]
    }]
  }], null, null);
})();
var _OrderCancellationModule = class _OrderCancellationModule {
};
_OrderCancellationModule.\u0275fac = function OrderCancellationModule_Factory(t) {
  return new (t || _OrderCancellationModule)();
};
_OrderCancellationModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
  type: _OrderCancellationModule
});
_OrderCancellationModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
  imports: [CancelOrderModule, CancelOrderConfirmationModule]
});
var OrderCancellationModule = _OrderCancellationModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OrderCancellationModule, [{
    type: NgModule,
    args: [{
      imports: [CancelOrderModule, CancelOrderConfirmationModule]
    }]
  }], null, null);
})();
var _OrderReturnService = class _OrderReturnService extends OrderAmendService {
  constructor(orderDetailsService, returnRequestService, routing, globalMessageService) {
    super(orderDetailsService);
    this.orderDetailsService = orderDetailsService;
    this.returnRequestService = returnRequestService;
    this.routing = routing;
    this.globalMessageService = globalMessageService;
    this.amendType = AmendOrderType.RETURN;
  }
  getEntries() {
    return this.getOrder().pipe(filter((order) => !!order.entries), map((order) => order.entries?.filter((entry) => entry.entryNumber !== -1 && entry.returnableQuantity && entry.returnableQuantity > 0) ?? []));
  }
  save() {
    const orderCode = this.form.value.orderCode;
    const entries = this.form.value.entries;
    const inputs = Object.keys(entries).filter((entryNumber) => entries[entryNumber] > 0).map((entryNumber) => ({
      orderEntryNumber: Number(entryNumber),
      quantity: entries[entryNumber]
    }));
    this.form.reset();
    this.returnRequestService.createOrderReturnRequest({
      orderCode,
      returnRequestEntryInputs: inputs
    });
    this.returnRequestService.getReturnRequestSuccess().pipe(first(Boolean)).subscribe(() => this.afterSave());
  }
  afterSave() {
    this.returnRequestService.getOrderReturnRequest().pipe(first((r) => !!r)).subscribe((returnRequest) => {
      const rma = returnRequest.rma;
      this.globalMessageService.add({
        key: "orderDetails.cancellationAndReturn.returnSuccess",
        params: {
          rma
        }
      }, GlobalMessageType.MSG_TYPE_CONFIRMATION);
      this.routing.go({
        cxRoute: "returnRequestDetails",
        params: {
          rma
        }
      });
    });
  }
};
_OrderReturnService.\u0275fac = function OrderReturnService_Factory(t) {
  return new (t || _OrderReturnService)(\u0275\u0275inject(OrderDetailsService), \u0275\u0275inject(OrderReturnRequestFacade), \u0275\u0275inject(RoutingService), \u0275\u0275inject(GlobalMessageService));
};
_OrderReturnService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
  token: _OrderReturnService,
  factory: _OrderReturnService.\u0275fac,
  providedIn: "root"
});
var OrderReturnService = _OrderReturnService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OrderReturnService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: OrderDetailsService
  }, {
    type: OrderReturnRequestFacade
  }, {
    type: RoutingService
  }, {
    type: GlobalMessageService
  }], null);
})();
var _OrderReturnGuard = class _OrderReturnGuard {
  constructor(orderAmendService, semanticPathService, router) {
    this.orderAmendService = orderAmendService;
    this.semanticPathService = semanticPathService;
    this.router = router;
  }
  canActivate() {
    return this.orderAmendService.getForm().pipe(map((form) => {
      if (!form.valid) {
        return this.router.parseUrl(this.semanticPathService.get("orders") ?? "");
      } else {
        return true;
      }
    }));
  }
};
_OrderReturnGuard.\u0275fac = function OrderReturnGuard_Factory(t) {
  return new (t || _OrderReturnGuard)(\u0275\u0275inject(OrderReturnService), \u0275\u0275inject(SemanticPathService), \u0275\u0275inject(Router));
};
_OrderReturnGuard.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
  token: _OrderReturnGuard,
  factory: _OrderReturnGuard.\u0275fac,
  providedIn: "root"
});
var OrderReturnGuard = _OrderReturnGuard;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OrderReturnGuard, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: OrderReturnService
  }, {
    type: SemanticPathService
  }, {
    type: Router
  }], null);
})();
var _ReturnOrderConfirmationComponent = class _ReturnOrderConfirmationComponent {
  constructor(orderAmendService) {
    this.orderAmendService = orderAmendService;
    this.form$ = this.orderAmendService.getForm().pipe(tap((form) => this.orderCode = form.value.orderCode));
    this.entries$ = this.orderAmendService.getAmendedEntries();
  }
  submit(form) {
    form.disable();
    this.orderAmendService.save();
  }
};
_ReturnOrderConfirmationComponent.\u0275fac = function ReturnOrderConfirmationComponent_Factory(t) {
  return new (t || _ReturnOrderConfirmationComponent)(\u0275\u0275directiveInject(OrderAmendService));
};
_ReturnOrderConfirmationComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
  type: _ReturnOrderConfirmationComponent,
  selectors: [["cx-return-order-confirmation"]],
  decls: 2,
  vars: 3,
  consts: [["actions", ""], [3, "formGroup", "ngSubmit", 4, "ngIf"], [3, "ngSubmit", "formGroup"], [4, "ngTemplateOutlet"], [3, "entries", "isConfirmation", 4, "ngIf"], [3, "entries", "isConfirmation"], ["backRoute", "orderReturn", 3, "orderCode", "amendOrderForm", 4, "ngIf"], ["backRoute", "orderReturn", 3, "orderCode", "amendOrderForm"]],
  template: function ReturnOrderConfirmationComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275template(0, ReturnOrderConfirmationComponent_form_0_Template, 7, 6, "form", 1);
      \u0275\u0275pipe(1, "async");
    }
    if (rf & 2) {
      \u0275\u0275property("ngIf", \u0275\u0275pipeBind1(1, 1, ctx.form$));
    }
  },
  dependencies: [NgIf, NgTemplateOutlet, CancelOrReturnItemsComponent, \u0275NgNoValidate, NgControlStatusGroup, FormGroupDirective, AmendOrderActionsComponent, AsyncPipe],
  encapsulation: 2,
  changeDetection: 0
});
var ReturnOrderConfirmationComponent = _ReturnOrderConfirmationComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ReturnOrderConfirmationComponent, [{
    type: Component,
    args: [{
      selector: "cx-return-order-confirmation",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: '<form\n  *ngIf="form$ | async as form"\n  [formGroup]="form"\n  (ngSubmit)="submit(form)"\n>\n  <ng-container *ngTemplateOutlet="actions"></ng-container>\n\n  <cx-amend-order-items\n    *ngIf="entries$ | async as entries"\n    [entries]="entries"\n    [isConfirmation]="true"\n  >\n  </cx-amend-order-items>\n\n  <ng-container *ngTemplateOutlet="actions"></ng-container>\n\n  <ng-template #actions>\n    <cx-amend-order-actions\n      *ngIf="orderCode"\n      [orderCode]="orderCode"\n      [amendOrderForm]="form"\n      backRoute="orderReturn"\n    ></cx-amend-order-actions>\n  </ng-template>\n</form>\n'
    }]
  }], () => [{
    type: OrderAmendService
  }], null);
})();
var _ReturnOrderConfirmationModule = class _ReturnOrderConfirmationModule {
};
_ReturnOrderConfirmationModule.\u0275fac = function ReturnOrderConfirmationModule_Factory(t) {
  return new (t || _ReturnOrderConfirmationModule)();
};
_ReturnOrderConfirmationModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
  type: _ReturnOrderConfirmationModule
});
_ReturnOrderConfirmationModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
  providers: [provideDefaultConfig({
    cmsComponents: {
      ReturnOrderConfirmationComponent: {
        component: ReturnOrderConfirmationComponent,
        guards: [AuthGuard, OrderReturnGuard],
        providers: [{
          provide: OrderAmendService,
          useExisting: OrderReturnService
        }]
      }
    }
  })],
  imports: [CommonModule, AmendOrderItemsModule, I18nModule, ReactiveFormsModule, AmendOrderActionsModule]
});
var ReturnOrderConfirmationModule = _ReturnOrderConfirmationModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ReturnOrderConfirmationModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, AmendOrderItemsModule, I18nModule, ReactiveFormsModule, AmendOrderActionsModule],
      providers: [provideDefaultConfig({
        cmsComponents: {
          ReturnOrderConfirmationComponent: {
            component: ReturnOrderConfirmationComponent,
            guards: [AuthGuard, OrderReturnGuard],
            providers: [{
              provide: OrderAmendService,
              useExisting: OrderReturnService
            }]
          }
        }
      })],
      declarations: [ReturnOrderConfirmationComponent],
      exports: [ReturnOrderConfirmationComponent]
    }]
  }], null, null);
})();
var _ReturnOrderComponent = class _ReturnOrderComponent {
  constructor(orderAmendService) {
    this.orderAmendService = orderAmendService;
    this.form$ = this.orderAmendService.getForm().pipe(tap((form) => this.orderCode = form.value.orderCode));
    this.entries$ = this.orderAmendService.getEntries();
  }
};
_ReturnOrderComponent.\u0275fac = function ReturnOrderComponent_Factory(t) {
  return new (t || _ReturnOrderComponent)(\u0275\u0275directiveInject(OrderAmendService));
};
_ReturnOrderComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
  type: _ReturnOrderComponent,
  selectors: [["cx-return-order"]],
  decls: 2,
  vars: 3,
  consts: [["actions", ""], [4, "ngIf"], [4, "ngTemplateOutlet"], [3, "entries", 4, "ngIf"], [3, "control"], [3, "entries"], ["backRoute", "orderDetails", "forwardRoute", "orderReturnConfirmation", 3, "orderCode", "amendOrderForm", 4, "ngIf"], ["backRoute", "orderDetails", "forwardRoute", "orderReturnConfirmation", 3, "orderCode", "amendOrderForm"]],
  template: function ReturnOrderComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275template(0, ReturnOrderComponent_ng_container_0_Template, 8, 6, "ng-container", 1);
      \u0275\u0275pipe(1, "async");
    }
    if (rf & 2) {
      \u0275\u0275property("ngIf", \u0275\u0275pipeBind1(1, 1, ctx.form$));
    }
  },
  dependencies: [NgIf, NgTemplateOutlet, CancelOrReturnItemsComponent, AmendOrderActionsComponent, FormErrorsComponent, AsyncPipe],
  encapsulation: 2,
  changeDetection: 0
});
var ReturnOrderComponent = _ReturnOrderComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ReturnOrderComponent, [{
    type: Component,
    args: [{
      selector: "cx-return-order",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: `<ng-container *ngIf="form$ | async as form">
  <ng-container *ngTemplateOutlet="actions"></ng-container>

  <cx-amend-order-items *ngIf="entries$ | async as entries" [entries]="entries">
  </cx-amend-order-items>

  <cx-form-errors [control]="form.get('entries')"></cx-form-errors>

  <ng-container *ngTemplateOutlet="actions"></ng-container>

  <ng-template #actions>
    <cx-amend-order-actions
      *ngIf="orderCode"
      [orderCode]="orderCode"
      [amendOrderForm]="form"
      backRoute="orderDetails"
      forwardRoute="orderReturnConfirmation"
    ></cx-amend-order-actions>
  </ng-template>
</ng-container>
`
    }]
  }], () => [{
    type: OrderAmendService
  }], null);
})();
var _ReturnOrderModule = class _ReturnOrderModule {
};
_ReturnOrderModule.\u0275fac = function ReturnOrderModule_Factory(t) {
  return new (t || _ReturnOrderModule)();
};
_ReturnOrderModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
  type: _ReturnOrderModule
});
_ReturnOrderModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
  providers: [provideDefaultConfig({
    cmsComponents: {
      ReturnOrderComponent: {
        component: ReturnOrderComponent,
        guards: [AuthGuard],
        providers: [{
          provide: OrderAmendService,
          useExisting: OrderReturnService
        }]
      }
    }
  })],
  imports: [CommonModule, AmendOrderItemsModule, AmendOrderActionsModule, FormErrorsModule]
});
var ReturnOrderModule = _ReturnOrderModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ReturnOrderModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, AmendOrderItemsModule, AmendOrderActionsModule, FormErrorsModule],
      providers: [provideDefaultConfig({
        cmsComponents: {
          ReturnOrderComponent: {
            component: ReturnOrderComponent,
            guards: [AuthGuard],
            providers: [{
              provide: OrderAmendService,
              useExisting: OrderReturnService
            }]
          }
        }
      })],
      declarations: [ReturnOrderComponent],
      exports: [ReturnOrderComponent]
    }]
  }], null, null);
})();
var _OrderReturnModule = class _OrderReturnModule {
};
_OrderReturnModule.\u0275fac = function OrderReturnModule_Factory(t) {
  return new (t || _OrderReturnModule)();
};
_OrderReturnModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
  type: _OrderReturnModule
});
_OrderReturnModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
  imports: [ReturnOrderModule, ReturnOrderConfirmationModule]
});
var OrderReturnModule = _OrderReturnModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OrderReturnModule, [{
    type: NgModule,
    args: [{
      imports: [ReturnOrderModule, ReturnOrderConfirmationModule]
    }]
  }], null, null);
})();
var _OrderConfirmationGuard = class _OrderConfirmationGuard {
  constructor(orderFacade, router, semanticPathService) {
    this.orderFacade = orderFacade;
    this.router = router;
    this.semanticPathService = semanticPathService;
  }
  canActivate() {
    return this.orderFacade.getOrderDetails().pipe(map((orderDetails) => {
      if (orderDetails && Object.keys(orderDetails).length !== 0) {
        return true;
      } else {
        return this.router.parseUrl(this.semanticPathService.get("orders") ?? "");
      }
    }));
  }
};
_OrderConfirmationGuard.\u0275fac = function OrderConfirmationGuard_Factory(t) {
  return new (t || _OrderConfirmationGuard)(\u0275\u0275inject(OrderFacade), \u0275\u0275inject(Router), \u0275\u0275inject(SemanticPathService));
};
_OrderConfirmationGuard.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
  token: _OrderConfirmationGuard,
  factory: _OrderConfirmationGuard.\u0275fac,
  providedIn: "root"
});
var OrderConfirmationGuard = _OrderConfirmationGuard;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OrderConfirmationGuard, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: OrderFacade
  }, {
    type: Router
  }, {
    type: SemanticPathService
  }], null);
})();
var _MyAccountV2OrdersComponent = class _MyAccountV2OrdersComponent {
  constructor() {
    this.service = inject(MyAccountV2OrderHistoryService);
    this.PAGE_SIZE = 3;
    this.orders$ = this.service.getOrderHistoryList(this.PAGE_SIZE).pipe(tap(() => this.isLoaded$.next(true)));
    this.isLoaded$ = new BehaviorSubject(false);
  }
  getProduct(order) {
    if (order.entries) {
      for (const entry of order.entries) {
        if (entry.product && entry.product.name && entry.product.images) {
          return entry.product;
        }
      }
      return order.entries[0].product;
    }
  }
  ngOnDestroy() {
    this.isLoaded$.next(false);
    this.service.clearOrderList();
  }
};
_MyAccountV2OrdersComponent.\u0275fac = function MyAccountV2OrdersComponent_Factory(t) {
  return new (t || _MyAccountV2OrdersComponent)();
};
_MyAccountV2OrdersComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
  type: _MyAccountV2OrdersComponent,
  selectors: [["cx-my-account-v2-orders"]],
  decls: 17,
  vars: 20,
  consts: [["noOrder", ""], ["loading", ""], [1, "cx-my-account-view-header"], [1, "cx-my-account-view-heading"], [1, "cx-my-account-view-show-more"], ["id", "show-more-orders", 1, "btn-link", "cx-action-link", 3, "routerLink"], [4, "ngIf", "ngIfElse"], [1, "cx-my-account-view-body"], [4, "ngFor", "ngForOf"], [1, "cx-my-account-view-order"], [1, "cx-my-account-view-order-header"], ["class", "cx-my-account-view-status", 4, "ngIf"], [1, "cx-my-account-view-code"], [1, "cx-my-account-view-order-body"], [4, "ngIf"], [1, "cx-my-account-view-status"], [1, "cx-my-account-view-order-column-1"], [1, "cx-my-account-view-order-column-1-image"], ["format", "thumbnail", "role", "presentation", 1, "cx-my-account-view-order-img", 3, "container"], [1, "cx-my-account-view-order-column-1-details"], [1, "cx-my-account-view-order-column-1-details-top"], [1, "cx-my-account-view-product-name"], [1, "cx-my-account-view-purchased-on"], [1, "cx-my-account-view-item-count"], [1, "cx-my-account-view-order-column-1-details-bottom"], [1, "cx-my-account-view-total-price"], [1, "cx-my-account-view-order-column-2"], [1, "btn-link", "cx-action-link", 3, "routerLink"], ["class", "cx-my-account-no-order", 4, "ngIf", "ngIfElse"], [1, "cx-my-account-no-order"], ["routerLinkActive", "active", 1, "cx-no-order", 3, "routerLink"], [1, "cx-spinner"]],
  template: function MyAccountV2OrdersComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 2)(1, "div", 3);
      \u0275\u0275pipe(2, "cxTranslate");
      \u0275\u0275text(3);
      \u0275\u0275pipe(4, "cxTranslate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "div", 4)(6, "a", 5);
      \u0275\u0275pipe(7, "cxUrl");
      \u0275\u0275pipe(8, "cxTranslate");
      \u0275\u0275text(9);
      \u0275\u0275pipe(10, "cxTranslate");
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(11, MyAccountV2OrdersComponent_div_11_Template, 2, 2, "div", 6);
      \u0275\u0275pipe(12, "async");
      \u0275\u0275template(13, MyAccountV2OrdersComponent_ng_template_13_Template, 2, 4, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(15, MyAccountV2OrdersComponent_ng_template_15_Template, 2, 0, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
    }
    if (rf & 2) {
      const noOrder_r5 = \u0275\u0275reference(14);
      \u0275\u0275advance();
      \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(2, 7, "myAccountV2OrderHistory.orderListResults"));
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 9, "myAccountV2Orders.heading"), " ");
      \u0275\u0275advance(3);
      \u0275\u0275property("routerLink", \u0275\u0275pipeBind1(7, 11, \u0275\u0275pureFunction0(19, _c2)));
      \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(8, 13, "myAccountV2Orders.showMore"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(10, 15, "myAccountV2Orders.showMore"), " ");
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", \u0275\u0275pipeBind1(12, 17, ctx.orders$))("ngIfElse", noOrder_r5);
    }
  },
  dependencies: [NgForOf, NgIf, RouterLink, RouterLinkActive, SpinnerComponent, MediaComponent, AsyncPipe, UrlPipe, TranslatePipe, CxDatePipe],
  encapsulation: 2
});
var MyAccountV2OrdersComponent = _MyAccountV2OrdersComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MyAccountV2OrdersComponent, [{
    type: Component,
    args: [{
      selector: "cx-my-account-v2-orders",
      template: `<div class="cx-my-account-view-header">
  <!-- HEADER -->
  <div
    class="cx-my-account-view-heading"
    [attr.aria-label]="'myAccountV2OrderHistory.orderListResults' | cxTranslate"
  >
    {{ 'myAccountV2Orders.heading' | cxTranslate }}
  </div>

  <!-- SHOW MORE -->
  <div class="cx-my-account-view-show-more">
    <a
      id="show-more-orders"
      [attr.aria-label]="'myAccountV2Orders.showMore' | cxTranslate"
      class="btn-link cx-action-link"
      [routerLink]="
        {
          cxRoute: 'orders'
        } | cxUrl
      "
    >
      {{ 'myAccountV2Orders.showMore' | cxTranslate }}
    </a>
  </div>
</div>

<div *ngIf="orders$ | async as orderHistory; else noOrder">
  <!-- BODY -->
  <ng-container *ngIf="orderHistory.pagination.totalResults > 0; else noOrder">
    <div class="cx-my-account-view-body">
      <ng-container *ngFor="let order of orderHistory.orders">
        <div class="cx-my-account-view-order">
          <div class="cx-my-account-view-order-header">
            <div
              class="cx-my-account-view-status"
              *ngIf="order.statusDisplay"
              [attr.aria-label]="
                'myAccountV2Orders.orderStatusLabel' | cxTranslate
              "
            >
              {{
                'orderDetails.statusDisplay_' + order.statusDisplay
                  | cxTranslate
              }}
            </div>
            <div
              class="cx-my-account-view-code"
              [attr.aria-label]="
                'myAccountV2OrderHistory.orderCodeLabel' | cxTranslate
              "
            >
              {{
                'myAccountV2Orders.orderNumber'
                  | cxTranslate: { value: order.code }
              }}
            </div>
          </div>
          <div class="cx-my-account-view-order-body">
            <ng-container *ngIf="getProduct(order) as product">
              <div class="cx-my-account-view-order-column-1">
                <div class="cx-my-account-view-order-column-1-image">
                  <cx-media
                    [container]="product.images?.PRIMARY"
                    class="cx-my-account-view-order-img"
                    format="thumbnail"
                    role="presentation"
                  ></cx-media>
                </div>
                <div class="cx-my-account-view-order-column-1-details">
                  <div class="cx-my-account-view-order-column-1-details-top">
                    <div class="cx-my-account-view-product-name">
                      {{ product.name }}
                      <span *ngIf="order.totalItems - 1 > 1">
                        +
                        {{
                          'myAccountV2Orders.items'
                            | cxTranslate: { value: order.totalItems - 1 }
                        }}
                      </span>
                      <span *ngIf="order.totalItems - 1 === 1">
                        +
                        {{
                          'myAccountV2Orders.item' | cxTranslate: { value: 1 }
                        }}
                      </span>
                    </div>
                    <div class="cx-my-account-view-purchased-on">
                      {{
                        'myAccountV2Orders.purchasedOn'
                          | cxTranslate
                            : {
                                value: order.placed | cxDate: 'd, MMMM, yyyy'
                              }
                      }}
                    </div>
                    <div class="cx-my-account-view-item-count">
                      {{
                        'myAccountV2Orders.orderedItems'
                          | cxTranslate: { value: order.totalItems }
                      }}
                    </div>
                  </div>
                  <div class="cx-my-account-view-order-column-1-details-bottom">
                    <div class="cx-my-account-view-total-price">
                      {{
                        'myAccountV2Orders.totalPrice'
                          | cxTranslate: { value: order.total?.formattedValue }
                      }}
                    </div>
                  </div>
                </div>
              </div>
              <div class="cx-my-account-view-order-column-2">
                <!-- order details -->
                <span>
                  <a
                    class="btn-link cx-action-link"
                    [attr.aria-label]="
                      'myAccountV2Orders.orderDetailsLabel' | cxTranslate
                    "
                    [routerLink]="
                      {
                        cxRoute: 'orderDetails',
                        params: order
                      } | cxUrl
                    "
                  >
                    {{ 'myAccountV2Orders.orderDetails' | cxTranslate }}
                  </a>
                </span>
                <!-- return order -->
                <span *ngIf="order.returnable">
                  {{ ' | '
                  }}<a
                    class="btn-link cx-action-link"
                    [routerLink]="
                      {
                        cxRoute: 'orderReturn',
                        params: order
                      } | cxUrl
                    "
                  >
                    {{ 'myAccountV2Orders.returnOrder' | cxTranslate }}
                  </a>
                </span>
              </div>
            </ng-container>
          </div>
        </div>
      </ng-container>
    </div>
  </ng-container>
</div>
<!-- NO ORDER CONTAINER -->
<ng-template #noOrder>
  <div class="cx-my-account-no-order" *ngIf="isLoaded$ | async; else loading">
    <div [attr.aria-label]="'orderHistory.notFound' | cxTranslate">
      {{ 'orderHistory.noOrders' | cxTranslate }}
    </div>
    <a
      [routerLink]="{ cxRoute: 'home' } | cxUrl"
      routerLinkActive="active"
      class="cx-no-order"
      >{{ 'orderHistory.startShopping' | cxTranslate }}</a
    >
  </div>
</ng-template>

<!-- ORDER HISTORY DATA STILL LOADING -->
<ng-template #loading>
  <div class="cx-spinner">
    <cx-spinner></cx-spinner>
  </div>
</ng-template>
`
    }]
  }], null, null);
})();
var _MyAccountV2OrdersModule = class _MyAccountV2OrdersModule {
};
_MyAccountV2OrdersModule.\u0275fac = function MyAccountV2OrdersModule_Factory(t) {
  return new (t || _MyAccountV2OrdersModule)();
};
_MyAccountV2OrdersModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
  type: _MyAccountV2OrdersModule
});
_MyAccountV2OrdersModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
  providers: [provideDefaultConfig({
    cmsComponents: {
      MyAccountViewOrderComponent: {
        component: MyAccountV2OrdersComponent,
        guards: [AuthGuard]
      }
    }
  })],
  imports: [CommonModule, RouterModule, FormsModule, SpinnerModule, UrlModule, I18nModule, MediaModule]
});
var MyAccountV2OrdersModule = _MyAccountV2OrdersModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MyAccountV2OrdersModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, RouterModule, FormsModule, SpinnerModule, UrlModule, I18nModule, MediaModule],
      declarations: [MyAccountV2OrdersComponent],
      exports: [MyAccountV2OrdersComponent],
      providers: [provideDefaultConfig({
        cmsComponents: {
          MyAccountViewOrderComponent: {
            component: MyAccountV2OrdersComponent,
            guards: [AuthGuard]
          }
        }
      })]
    }]
  }], null, null);
})();
var _OrderDetailBillingComponent = class _OrderDetailBillingComponent {
  constructor(orderDetailsService, translationService) {
    this.orderDetailsService = orderDetailsService;
    this.translationService = translationService;
    this.order$ = this.orderDetailsService.getOrderDetails();
  }
  getPaymentMethodCard(paymentDetails) {
    return combineLatest([this.translationService.translate("paymentForm.payment"), this.translationService.translate("paymentCard.expires", {
      month: paymentDetails.expiryMonth,
      year: paymentDetails.expiryYear
    })]).pipe(map(([textTitle, textExpires]) => paymentMethodCard(textTitle, textExpires, paymentDetails)));
  }
  getBillingAddressCard(paymentDetails) {
    return combineLatest([this.translationService.translate("paymentForm.billingAddress"), this.translationService.translate("addressCard.billTo")]).pipe(map(([billingAddress, billTo]) => billingAddressCard(billingAddress, billTo, paymentDetails)));
  }
  isPaymentInfoCardFull(payment) {
    return !!payment?.cardNumber && !!payment?.expiryMonth && !!payment?.expiryYear;
  }
};
_OrderDetailBillingComponent.\u0275fac = function OrderDetailBillingComponent_Factory(t) {
  return new (t || _OrderDetailBillingComponent)(\u0275\u0275directiveInject(OrderDetailsService), \u0275\u0275directiveInject(TranslationService));
};
_OrderDetailBillingComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
  type: _OrderDetailBillingComponent,
  selectors: [["cx-order-detail-billing"]],
  decls: 2,
  vars: 3,
  consts: [["class", "cx-order-items", 4, "ngIf"], [1, "cx-order-items"], ["class", "cx-review-summary", 4, "ngIf"], [1, "cx-review-summary"], ["class", "cx-review-summary-card cx-review-summary-payment-card", 4, "ngIf"], [1, "cx-review-summary-card", "cx-review-summary-payment-card"], [3, "content"]],
  template: function OrderDetailBillingComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275template(0, OrderDetailBillingComponent_div_0_Template, 2, 1, "div", 0);
      \u0275\u0275pipe(1, "async");
    }
    if (rf & 2) {
      \u0275\u0275property("ngIf", \u0275\u0275pipeBind1(1, 1, ctx.order$));
    }
  },
  dependencies: [CardComponent, NgIf, AsyncPipe],
  encapsulation: 2,
  changeDetection: 0
});
var OrderDetailBillingComponent = _OrderDetailBillingComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OrderDetailBillingComponent, [{
    type: Component,
    args: [{
      selector: "cx-order-detail-billing",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: '<div class="cx-order-items" *ngIf="order$ | async as order">\n  <div class="cx-review-summary" *ngIf="order.paymentInfo as paymentDetails">\n    <div\n      class="cx-review-summary-card cx-review-summary-payment-card"\n      *ngIf="isPaymentInfoCardFull(paymentDetails)"\n    >\n      <cx-card\n        [content]="getPaymentMethodCard(paymentDetails) | async"\n      ></cx-card>\n    </div>\n    <div\n      class="cx-review-summary-card cx-review-summary-payment-card"\n      *ngIf="paymentDetails?.billingAddress"\n    >\n      <cx-card\n        [content]="getBillingAddressCard(paymentDetails) | async"\n      ></cx-card>\n    </div>\n  </div>\n</div>\n'
    }]
  }], () => [{
    type: OrderDetailsService
  }, {
    type: TranslationService
  }], null);
})();
var _OrderOverviewComponent = class _OrderOverviewComponent {
  constructor(translation, orderDetailsService, component) {
    this.translation = translation;
    this.orderDetailsService = orderDetailsService;
    this.component = component;
    this.cartOutlets = CartOutlets;
    this.order$ = this.orderDetailsService.getOrderDetails();
    this.isOrderLoading$ = typeof this.orderDetailsService.isOrderDetailsLoading === "function" ? this.orderDetailsService.isOrderDetailsLoading() : of(false);
    this.simple$ = this.component.data$.pipe(map((data) => data.simple));
  }
  getReplenishmentCodeCardContent(orderCode) {
    return this.translation.translate("orderDetails.replenishmentId").pipe(filter(() => Boolean(orderCode)), map((textTitle) => ({
      title: textTitle,
      text: [orderCode]
    })));
  }
  getReplenishmentActiveCardContent(active) {
    return combineLatest([this.translation.translate("orderDetails.status"), this.translation.translate("orderDetails.active"), this.translation.translate("orderDetails.cancelled")]).pipe(map(([textTitle, textActive, textCancelled]) => ({
      title: textTitle,
      text: [active ? textActive : textCancelled]
    })));
  }
  getReplenishmentStartOnCardContent(isoDate) {
    return this.translation.translate("orderDetails.startOn").pipe(filter(() => Boolean(isoDate)), map((textTitle) => {
      return {
        title: textTitle,
        text: [isoDate]
      };
    }));
  }
  getReplenishmentFrequencyCardContent(frequency) {
    return this.translation.translate("orderDetails.frequency").pipe(filter(() => Boolean(frequency)), map((textTitle) => ({
      title: textTitle,
      text: [frequency]
    })));
  }
  getReplenishmentNextDateCardContent(isoDate) {
    return this.translation.translate("orderDetails.nextOrderDate").pipe(filter(() => Boolean(isoDate)), map((textTitle) => {
      return {
        title: textTitle,
        text: [isoDate]
      };
    }));
  }
  getOrderCodeCardContent(orderCode) {
    return this.translation.translate("orderDetails.orderNumber").pipe(filter(() => Boolean(orderCode)), map((textTitle) => ({
      title: textTitle,
      text: [orderCode]
    })));
  }
  getOrderCurrentDateCardContent(isoDate) {
    return this.translation.translate("orderDetails.placedOn").pipe(filter(() => Boolean(isoDate)), map((textTitle) => {
      return {
        title: textTitle,
        text: [isoDate]
      };
    }));
  }
  getOrderStatusCardContent(status) {
    return combineLatest([this.translation.translate("orderDetails.status"), this.translation.translate("orderDetails.statusDisplay_" + status)]).pipe(map(([textTitle, textStatus]) => ({
      title: textTitle,
      text: [textStatus]
    })));
  }
  getPurchaseOrderNumber(poNumber) {
    return combineLatest([this.translation.translate("orderDetails.purchaseOrderNumber"), this.translation.translate("orderDetails.emptyPurchaseOrderId")]).pipe(map(([textTitle, noneTextTitle]) => ({
      title: textTitle,
      text: [poNumber ? poNumber : noneTextTitle]
    })));
  }
  getMethodOfPaymentCardContent(hasPaymentInfo) {
    return combineLatest([this.translation.translate("orderDetails.methodOfPayment"), this.translation.translate("paymentTypes.paymentType_ACCOUNT"), this.translation.translate("paymentTypes.paymentType_CARD")]).pipe(map(([textTitle, textAccount, textCard]) => ({
      title: textTitle,
      text: [Boolean(hasPaymentInfo) ? textCard : textAccount]
    })));
  }
  getCostCenterCardContent(costCenter) {
    return this.translation.translate("orderDetails.costCenter").pipe(filter(() => Boolean(costCenter)), map((textTitle) => ({
      title: textTitle,
      textBold: costCenter?.name,
      text: ["(" + costCenter?.unit?.name + ")"]
    })));
  }
  getAddressCardContent(deliveryAddress) {
    return this.translation.translate("addressCard.shipTo").pipe(filter(() => Boolean(deliveryAddress)), map((textTitle) => {
      const formattedAddress = this.normalizeFormattedAddress(deliveryAddress.formattedAddress ?? "");
      return {
        title: textTitle,
        textBold: `${deliveryAddress.firstName} ${deliveryAddress.lastName}`,
        text: [formattedAddress, deliveryAddress.country?.name]
      };
    }));
  }
  getDeliveryModeCardContent(deliveryMode) {
    return this.translation.translate("orderDetails.shippingMethod").pipe(filter(() => Boolean(deliveryMode)), map((textTitle) => ({
      title: textTitle,
      textBold: deliveryMode.name,
      text: [deliveryMode.description, deliveryMode.deliveryCost?.formattedValue ? deliveryMode.deliveryCost?.formattedValue : ""]
    })));
  }
  getPaymentInfoCardContent(payment) {
    return combineLatest([this.translation.translate("paymentForm.payment"), this.translation.translate("paymentCard.expires", {
      month: Boolean(payment) ? payment.expiryMonth : "",
      year: Boolean(payment) ? payment.expiryYear : ""
    })]).pipe(filter(() => Boolean(payment)), map(([textTitle, textExpires]) => paymentMethodCard(textTitle, textExpires, payment)));
  }
  isPaymentInfoCardFull(payment) {
    return !!payment?.cardNumber && !!payment?.expiryMonth && !!payment?.expiryYear;
  }
  getBillingAddressCardContent(billingAddress) {
    return this.translation.translate("paymentForm.billingAddress").pipe(filter(() => Boolean(billingAddress)), map((textTitle) => ({
      title: textTitle,
      textBold: `${billingAddress.firstName} ${billingAddress.lastName}`,
      text: [billingAddress.formattedAddress, billingAddress.country?.name]
    })));
  }
  normalizeFormattedAddress(formattedAddress) {
    const addresses = formattedAddress.split(",").map((address) => address.trim());
    return addresses.filter(Boolean).join(", ");
  }
};
_OrderOverviewComponent.\u0275fac = function OrderOverviewComponent_Factory(t) {
  return new (t || _OrderOverviewComponent)(\u0275\u0275directiveInject(TranslationService), \u0275\u0275directiveInject(OrderDetailsService), \u0275\u0275directiveInject(CmsComponentData));
};
_OrderOverviewComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
  type: _OrderOverviewComponent,
  selectors: [["cx-order-overview"]],
  decls: 2,
  vars: 3,
  consts: [["otherOrder", ""], ["class", "cx-order-summary", 4, "ngIf"], [1, "cx-order-summary"], [4, "ngIf"], ["class", "container", 4, "ngIf"], [1, "container"], [4, "ngIf", "ngIfElse"], [1, "cx-summary-card"], [3, "content"], [3, "cxOutlet", "cxOutletContext"], ["class", "cx-summary-card", 4, "ngIf"], [1, "cx-order-details-cards"]],
  template: function OrderOverviewComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275template(0, OrderOverviewComponent_div_0_Template, 3, 3, "div", 1);
      \u0275\u0275pipe(1, "async");
    }
    if (rf & 2) {
      \u0275\u0275property("ngIf", \u0275\u0275pipeBind1(1, 1, ctx.order$));
    }
  },
  dependencies: [CardComponent, NgIf, OutletDirective, OrderDetailBillingComponent, AsyncPipe, CxDatePipe],
  encapsulation: 2,
  changeDetection: 0
});
var OrderOverviewComponent = _OrderOverviewComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OrderOverviewComponent, [{
    type: Component,
    args: [{
      selector: "cx-order-overview",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: `<div class="cx-order-summary" *ngIf="order$ | async as order">
  <ng-container *ngIf="!(isOrderLoading$ | async)">
    <div *ngIf="!(simple$ | async)" class="container">
      <ng-container *ngIf="order.replenishmentOrderCode; else otherOrder">
        <div class="cx-summary-card">
          <cx-card
            [content]="
              getReplenishmentCodeCardContent(order?.replenishmentOrderCode)
                | async
            "
          ></cx-card>

          <cx-card
            [content]="getReplenishmentActiveCardContent(order?.active) | async"
          ></cx-card>
        </div>

        <div class="cx-summary-card">
          <cx-card
            [content]="
              getReplenishmentStartOnCardContent(order?.firstDate | cxDate)
                | async
            "
          ></cx-card>

          <cx-card
            [content]="
              getReplenishmentFrequencyCardContent(
                order?.trigger?.displayTimeTable
              ) | async
            "
          ></cx-card>

          <cx-card
            [content]="
              getReplenishmentNextDateCardContent(
                order?.trigger?.activationTime | cxDate
              ) | async
            "
          ></cx-card>

          <ng-template
            [cxOutlet]="cartOutlets.ORDER_OVERVIEW"
            [cxOutletContext]="{ item: order, readonly: true }"
          >
          </ng-template>
        </div>
      </ng-container>

      <ng-template #otherOrder>
        <div class="cx-summary-card">
          <cx-card
            [content]="getOrderCodeCardContent(order?.code) | async"
          ></cx-card>

          <cx-card
            [content]="
              getOrderCurrentDateCardContent(order?.created | cxDate) | async
            "
          ></cx-card>

          <cx-card
            [content]="getOrderStatusCardContent(order.statusDisplay) | async"
          ></cx-card>

          <ng-template
            [cxOutlet]="cartOutlets.ORDER_OVERVIEW"
            [cxOutletContext]="{ item: order, readonly: true }"
          >
          </ng-template>
        </div>
      </ng-template>

      <ng-container
        *ngIf="order.purchaseOrderNumber || order.purchaseOrderNumber === ''"
      >
        <div class="cx-summary-card">
          <cx-card
            [content]="
              getPurchaseOrderNumber(order?.purchaseOrderNumber) | async
            "
          ></cx-card>

          <cx-card
            [content]="getMethodOfPaymentCardContent(order.paymentInfo) | async"
          ></cx-card>

          <ng-container *ngIf="order.costCenter">
            <cx-card
              [content]="getCostCenterCardContent(order?.costCenter) | async"
            ></cx-card>
          </ng-container>
        </div>
      </ng-container>

      <div class="cx-summary-card">
        <ng-container *ngIf="order.deliveryAddress">
          <cx-card
            [content]="getAddressCardContent(order?.deliveryAddress) | async"
          ></cx-card>
        </ng-container>

        <ng-container *ngIf="order.deliveryMode">
          <cx-card
            [content]="getDeliveryModeCardContent(order?.deliveryMode) | async"
          ></cx-card>
        </ng-container>
      </div>

      <ng-container *ngIf="order.paymentInfo">
        <div
          class="cx-summary-card"
          *ngIf="
            order?.paymentInfo?.billingAddress ||
            isPaymentInfoCardFull(order?.paymentInfo)
          "
        >
          <ng-container *ngIf="isPaymentInfoCardFull(order?.paymentInfo)">
            <cx-card
              [content]="getPaymentInfoCardContent(order?.paymentInfo) | async"
            ></cx-card>
          </ng-container>

          <cx-card
            [content]="
              getBillingAddressCardContent(order?.paymentInfo?.billingAddress)
                | async
            "
          ></cx-card>
        </div>
      </ng-container>
    </div>

    <div *ngIf="simple$ | async" class="container">
      <div class="cx-order-details-cards">
        <cx-card
          [content]="getOrderCodeCardContent(order?.code) | async"
        ></cx-card>

        <cx-card
          [content]="
            getOrderCurrentDateCardContent(order?.created | cxDate) | async
          "
        ></cx-card>

        <cx-card
          [content]="getOrderStatusCardContent(order.statusDisplay) | async"
        ></cx-card>

        <ng-template
          [cxOutlet]="cartOutlets.ORDER_OVERVIEW"
          [cxOutletContext]="{ item: order, readonly: true }"
        >
        </ng-template>
      </div>
      <cx-order-detail-billing
        *ngIf="
          isPaymentInfoCardFull(order?.paymentInfo) ||
          order?.paymentInfo?.billingAddress
        "
      ></cx-order-detail-billing>
    </div>
  </ng-container>
</div>
`
    }]
  }], () => [{
    type: TranslationService
  }, {
    type: OrderDetailsService
  }, {
    type: CmsComponentData
  }], null);
})();
var _OrderConfirmationOrderEntriesContext = class _OrderConfirmationOrderEntriesContext {
  constructor(orderFacade) {
    this.orderFacade = orderFacade;
    this.type = OrderEntriesSource.ORDER_CONFIRMATION;
  }
  getEntries() {
    return this.orderFacade.getOrderDetails().pipe(map((order) => order?.entries ?? []));
  }
};
_OrderConfirmationOrderEntriesContext.\u0275fac = function OrderConfirmationOrderEntriesContext_Factory(t) {
  return new (t || _OrderConfirmationOrderEntriesContext)(\u0275\u0275inject(OrderFacade));
};
_OrderConfirmationOrderEntriesContext.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
  token: _OrderConfirmationOrderEntriesContext,
  factory: _OrderConfirmationOrderEntriesContext.\u0275fac,
  providedIn: "root"
});
var OrderConfirmationOrderEntriesContext = _OrderConfirmationOrderEntriesContext;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OrderConfirmationOrderEntriesContext, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: OrderFacade
  }], null);
})();
var _OrderConfirmationItemsComponent = class _OrderConfirmationItemsComponent {
  constructor(orderFacade) {
    this.orderFacade = orderFacade;
    this.cartOutlets = CartOutlets;
    this.promotionLocation = PromotionLocation.Checkout;
    this.order$ = this.orderFacade.getOrderDetails();
  }
  ngOnDestroy() {
    this.orderFacade.clearPlacedOrder();
  }
};
_OrderConfirmationItemsComponent.\u0275fac = function OrderConfirmationItemsComponent_Factory(t) {
  return new (t || _OrderConfirmationItemsComponent)(\u0275\u0275directiveInject(OrderFacade));
};
_OrderConfirmationItemsComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
  type: _OrderConfirmationItemsComponent,
  selectors: [["cx-order-confirmation-items"]],
  decls: 2,
  vars: 3,
  consts: [["class", "cx-order-items container", 4, "ngIf"], [1, "cx-order-items", "container"], [1, "cx-order-items-header"], [3, "promotions"], [3, "cxOutlet", "cxOutletContext"]],
  template: function OrderConfirmationItemsComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275template(0, OrderConfirmationItemsComponent_div_0_Template, 6, 10, "div", 0);
      \u0275\u0275pipe(1, "async");
    }
    if (rf & 2) {
      \u0275\u0275property("ngIf", \u0275\u0275pipeBind1(1, 1, ctx.order$));
    }
  },
  dependencies: [NgIf, PromotionsComponent, OutletDirective, AsyncPipe, TranslatePipe],
  encapsulation: 2,
  changeDetection: 0
});
var OrderConfirmationItemsComponent = _OrderConfirmationItemsComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OrderConfirmationItemsComponent, [{
    type: Component,
    args: [{
      selector: "cx-order-confirmation-items",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: `<div class="cx-order-items container" *ngIf="order$ | async as order">
  <h4 class="cx-order-items-header">
    {{ 'checkoutOrderConfirmation.orderItems' | cxTranslate }}
  </h4>

  <cx-promotions
    [promotions]="order.appliedOrderPromotions || []"
  ></cx-promotions>

  <ng-template
    [cxOutlet]="cartOutlets.CART_ITEM_LIST"
    [cxOutletContext]="{
      items: order.entries,
      readonly: true,
      promotionLocation: promotionLocation
    }"
  >
  </ng-template>
</div>
`
    }]
  }], () => [{
    type: OrderFacade
  }], null);
})();
var _OrderConfirmationShippingComponent = class _OrderConfirmationShippingComponent {
  constructor(orderFacade, translationService, cd, outlet) {
    this.orderFacade = orderFacade;
    this.translationService = translationService;
    this.cd = cd;
    this.outlet = outlet;
    this.showItemList = true;
    this.cartOutlets = CartOutlets;
    this.order$ = this.orderFacade.getOrderDetails().pipe(tap((order) => {
      this.entries = order?.entries?.filter((entry) => !entry.deliveryPointOfService);
    }));
    this.subscription = new Subscription();
  }
  ngOnInit() {
    this.subscription.add(this.outlet?.context$.subscribe((context) => {
      if (context.showItemList !== void 0) {
        this.showItemList = context.showItemList;
      }
      if (context.order) {
        this.order$ = of(context.order);
      }
      this.cd.markForCheck();
    }));
  }
  getDeliveryAddressCard(deliveryAddress, countryName) {
    return combineLatest([this.translationService.translate("addressCard.shipTo"), this.translationService.translate("addressCard.phoneNumber"), this.translationService.translate("addressCard.mobileNumber")]).pipe(map(([textTitle, textPhone, textMobile]) => deliveryAddressCard(textTitle, textPhone, textMobile, deliveryAddress, countryName)));
  }
  getDeliveryModeCard(deliveryMode) {
    return combineLatest([this.translationService.translate("checkoutMode.deliveryMethod")]).pipe(map(([textTitle]) => deliveryModeCard(textTitle, deliveryMode)));
  }
  ngOnDestroy() {
    this.subscription?.unsubscribe();
  }
};
_OrderConfirmationShippingComponent.\u0275fac = function OrderConfirmationShippingComponent_Factory(t) {
  return new (t || _OrderConfirmationShippingComponent)(\u0275\u0275directiveInject(OrderFacade), \u0275\u0275directiveInject(TranslationService), \u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(OutletContextData, 8));
};
_OrderConfirmationShippingComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
  type: _OrderConfirmationShippingComponent,
  selectors: [["cx-order-confirmation-shipping"]],
  inputs: {
    showItemList: "showItemList"
  },
  decls: 2,
  vars: 3,
  consts: [["class", "cx-order-items", 4, "ngIf"], [1, "cx-order-items"], [4, "ngIf"], [1, "cx-review-header"], [1, "cx-review-summary", "cx-review-shipping-summary"], [1, "cx-review-summary-card-container"], [1, "cx-review-summary-card", "cx-review-card-address"], [3, "content"], ["class", "cx-review-cart-item", 4, "ngIf"], [1, "cx-review-cart-item"], [3, "cxOutlet", "cxOutletContext"]],
  template: function OrderConfirmationShippingComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275template(0, OrderConfirmationShippingComponent_div_0_Template, 2, 1, "div", 0);
      \u0275\u0275pipe(1, "async");
    }
    if (rf & 2) {
      \u0275\u0275property("ngIf", \u0275\u0275pipeBind1(1, 1, ctx.order$));
    }
  },
  dependencies: [NgIf, CardComponent, OutletDirective, AsyncPipe, TranslatePipe],
  encapsulation: 2,
  changeDetection: 0
});
var OrderConfirmationShippingComponent = _OrderConfirmationShippingComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OrderConfirmationShippingComponent, [{
    type: Component,
    args: [{
      selector: "cx-order-confirmation-shipping",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: `<div class="cx-order-items" *ngIf="order$ | async as order">
  <ng-container *ngIf="!showItemList || entries?.length > 0">
    <h2 class="cx-review-header">
      {{ 'checkoutMode.deliveryEntries' | cxTranslate }}
    </h2>

    <div class="cx-review-summary cx-review-shipping-summary">
      <!-- DELIVERY ADDRESS SECTION -->
      <div class="cx-review-summary-card-container">
        <div class="cx-review-summary-card cx-review-card-address">
          <cx-card
            [content]="getDeliveryAddressCard(order.deliveryAddress) | async"
          ></cx-card>
        </div>
      </div>

      <!-- DELIVERY MODE SECTION -->
      <div class="cx-review-summary-card-container">
        <div class="cx-review-summary-card cx-review-card-address">
          <cx-card
            [content]="getDeliveryModeCard(order.deliveryMode) | async"
          ></cx-card>
        </div>
      </div>
    </div>

    <!-- CART ITEM SECTION -->
    <div *ngIf="showItemList" class="cx-review-cart-item">
      <ng-template
        [cxOutlet]="cartOutlets.CART_ITEM_LIST"
        [cxOutletContext]="{
          items: entries,
          readonly: true
        }"
      >
      </ng-template>
    </div>
  </ng-container>
</div>
`
    }]
  }], () => [{
    type: OrderFacade
  }, {
    type: TranslationService
  }, {
    type: ChangeDetectorRef
  }, {
    type: OutletContextData,
    decorators: [{
      type: Optional
    }]
  }], {
    showItemList: [{
      type: Input
    }]
  });
})();
var _OrderGuestRegisterFormComponent = class _OrderGuestRegisterFormComponent {
  constructor(userRegisterFacade, routingService, authService, fb) {
    this.userRegisterFacade = userRegisterFacade;
    this.routingService = routingService;
    this.authService = authService;
    this.fb = fb;
    this.guestRegisterForm = this.fb.group({
      password: ["", [Validators.required, CustomFormValidators.passwordValidator]],
      passwordconf: ["", Validators.required]
    }, {
      validators: CustomFormValidators.passwordsMustMatch("password", "passwordconf")
    });
  }
  submit() {
    if (this.guestRegisterForm.valid) {
      this.userRegisterFacade.registerGuest(this.guid, this.guestRegisterForm.value.password);
      if (!this.subscription) {
        this.subscription = this.authService.isUserLoggedIn().subscribe((isLoggedIn) => {
          if (isLoggedIn) {
            this.routingService.go({
              cxRoute: "home"
            });
          }
        });
      }
    } else {
      this.guestRegisterForm.markAllAsTouched();
    }
  }
  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
};
_OrderGuestRegisterFormComponent.\u0275fac = function OrderGuestRegisterFormComponent_Factory(t) {
  return new (t || _OrderGuestRegisterFormComponent)(\u0275\u0275directiveInject(UserRegisterFacade), \u0275\u0275directiveInject(RoutingService), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(UntypedFormBuilder));
};
_OrderGuestRegisterFormComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
  type: _OrderGuestRegisterFormComponent,
  selectors: [["cx-guest-register-form"]],
  inputs: {
    guid: "guid",
    email: "email"
  },
  decls: 30,
  vars: 33,
  consts: [[1, "register-guest"], [1, "col-md-6", "col-lg-4"], [3, "ngSubmit", "formGroup"], [1, "form-group"], [1, "label-content"], ["required", "true", "type", "password", "name", "password", "formControlName", "password", "cxPasswordVisibilitySwitch", "", 1, "form-control", 3, "placeholder"], [3, "control"], ["required", "true", "type", "password", "name", "passwordconf", "formControlName", "passwordconf", "cxPasswordVisibilitySwitch", "", 1, "form-control", 3, "placeholder"], ["type", "submit", 1, "btn", "btn-block", "btn-primary"]],
  template: function OrderGuestRegisterFormComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h3");
      \u0275\u0275text(3);
      \u0275\u0275pipe(4, "cxTranslate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "p");
      \u0275\u0275text(6);
      \u0275\u0275pipe(7, "cxTranslate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "form", 2);
      \u0275\u0275listener("ngSubmit", function OrderGuestRegisterFormComponent_Template_form_ngSubmit_8_listener() {
        return ctx.submit();
      });
      \u0275\u0275elementStart(9, "div", 3)(10, "label")(11, "span", 4);
      \u0275\u0275text(12);
      \u0275\u0275pipe(13, "cxTranslate");
      \u0275\u0275elementEnd();
      \u0275\u0275element(14, "input", 5);
      \u0275\u0275pipe(15, "cxTranslate");
      \u0275\u0275pipe(16, "cxTranslate");
      \u0275\u0275element(17, "cx-form-errors", 6);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(18, "div", 3)(19, "label")(20, "span", 4);
      \u0275\u0275text(21);
      \u0275\u0275pipe(22, "cxTranslate");
      \u0275\u0275elementEnd();
      \u0275\u0275element(23, "input", 7);
      \u0275\u0275pipe(24, "cxTranslate");
      \u0275\u0275pipe(25, "cxTranslate");
      \u0275\u0275element(26, "cx-form-errors", 6);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(27, "button", 8);
      \u0275\u0275text(28);
      \u0275\u0275pipe(29, "cxTranslate");
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 12, "checkoutOrderConfirmation.createAccount"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(7, 14, "checkoutOrderConfirmation.createAccountForNext", \u0275\u0275pureFunction1(31, _c12, ctx.email)), " ");
      \u0275\u0275advance(2);
      \u0275\u0275property("formGroup", ctx.guestRegisterForm);
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(13, 17, "register.password.label"));
      \u0275\u0275advance(2);
      \u0275\u0275propertyInterpolate("placeholder", \u0275\u0275pipeBind1(15, 19, "register.password.placeholder"));
      \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(16, 21, "register.password.placeholder"));
      \u0275\u0275advance(3);
      \u0275\u0275property("control", ctx.guestRegisterForm.get("password"));
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(22, 23, "register.confirmPassword.label"));
      \u0275\u0275advance(2);
      \u0275\u0275propertyInterpolate("placeholder", \u0275\u0275pipeBind1(24, 25, "register.confirmPassword.placeholder"));
      \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(25, 27, "register.confirmPassword.placeholder"));
      \u0275\u0275advance(3);
      \u0275\u0275property("control", ctx.guestRegisterForm.get("passwordconf"));
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(29, 29, "common.submit"), " ");
    }
  },
  dependencies: [\u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, RequiredValidator, FormGroupDirective, FormControlName, FormErrorsComponent, PasswordVisibilityToggleDirective, TranslatePipe],
  encapsulation: 2
});
var OrderGuestRegisterFormComponent = _OrderGuestRegisterFormComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OrderGuestRegisterFormComponent, [{
    type: Component,
    args: [{
      selector: "cx-guest-register-form",
      template: `<div class="register-guest">
  <div class="col-md-6 col-lg-4">
    <h3>{{ 'checkoutOrderConfirmation.createAccount' | cxTranslate }}</h3>
    <p>
      {{
        'checkoutOrderConfirmation.createAccountForNext'
          | cxTranslate: { email: email }
      }}
    </p>

    <form (ngSubmit)="submit()" [formGroup]="guestRegisterForm">
      <div class="form-group">
        <label>
          <span class="label-content">{{
            'register.password.label' | cxTranslate
          }}</span>
          <input
            required="true"
            class="form-control"
            type="password"
            name="password"
            placeholder="{{ 'register.password.placeholder' | cxTranslate }}"
            formControlName="password"
            [attr.aria-label]="'register.password.placeholder' | cxTranslate"
            cxPasswordVisibilitySwitch
          />
          <cx-form-errors
            [control]="guestRegisterForm.get('password')"
          ></cx-form-errors>
        </label>
      </div>

      <div class="form-group">
        <label>
          <span class="label-content">{{
            'register.confirmPassword.label' | cxTranslate
          }}</span>
          <input
            required="true"
            class="form-control"
            type="password"
            name="passwordconf"
            placeholder="{{
              'register.confirmPassword.placeholder' | cxTranslate
            }}"
            formControlName="passwordconf"
            [attr.aria-label]="
              'register.confirmPassword.placeholder' | cxTranslate
            "
            cxPasswordVisibilitySwitch
          />
          <cx-form-errors
            [control]="guestRegisterForm.get('passwordconf')"
          ></cx-form-errors>
        </label>
      </div>

      <button type="submit" class="btn btn-block btn-primary">
        {{ 'common.submit' | cxTranslate }}
      </button>
    </form>
  </div>
</div>
`
    }]
  }], () => [{
    type: UserRegisterFacade
  }, {
    type: RoutingService
  }, {
    type: AuthService
  }, {
    type: UntypedFormBuilder
  }], {
    guid: [{
      type: Input
    }],
    email: [{
      type: Input
    }]
  });
})();
var _OrderConfirmationThankYouMessageComponent = class _OrderConfirmationThankYouMessageComponent {
  constructor(orderFacade, globalMessageService, translationService) {
    this.orderFacade = orderFacade;
    this.globalMessageService = globalMessageService;
    this.translationService = translationService;
    this.isGuestCustomer = false;
  }
  ngOnInit() {
    this.order$ = this.orderFacade.getOrderDetails().pipe(tap((order) => {
      this.isGuestCustomer = order && "guestCustomer" in order ? order.guestCustomer ?? false : false;
      this.orderGuid = order?.guid;
    }));
  }
  ngAfterViewInit() {
    this.addThankYouMessage();
  }
  ngOnDestroy() {
    this.orderFacade.clearPlacedOrder();
  }
  addThankYouMessage() {
    this.getThankYouAssistiveMessage().pipe(take(1)).subscribe(([order, confirmationOfOrderMessage, thankYouMessage, invoiceHasBeenSentByEmailMessage]) => {
      const code = order.replenishmentOrderCode ?? order.code;
      const message = `${confirmationOfOrderMessage} ${code}. ${thankYouMessage} ${invoiceHasBeenSentByEmailMessage}`;
      this.globalMessageService.add(message, GlobalMessageType.MSG_TYPE_ASSISTIVE);
    });
  }
  getThankYouAssistiveMessage() {
    const confirmationOfOrderMessage$ = this.translationService.translate("checkoutOrderConfirmation.confirmationOfOrder");
    const thankYouMessage$ = this.translationService.translate("checkoutOrderConfirmation.thankYou");
    const invoiceHasBeenSentByEmailMessage$ = this.translationService.translate("checkoutOrderConfirmation.invoiceHasBeenSentByEmail");
    return this.order$.pipe(filter((order) => !!order), withLatestFrom(confirmationOfOrderMessage$, thankYouMessage$, invoiceHasBeenSentByEmailMessage$));
  }
};
_OrderConfirmationThankYouMessageComponent.\u0275fac = function OrderConfirmationThankYouMessageComponent_Factory(t) {
  return new (t || _OrderConfirmationThankYouMessageComponent)(\u0275\u0275directiveInject(OrderFacade), \u0275\u0275directiveInject(GlobalMessageService), \u0275\u0275directiveInject(TranslationService));
};
_OrderConfirmationThankYouMessageComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
  type: _OrderConfirmationThankYouMessageComponent,
  selectors: [["cx-order-confirmation-thank-you-message"]],
  decls: 2,
  vars: 3,
  consts: [[4, "ngIf"], [1, "cx-page-header"], [1, "cx-page-title"], [1, "cx-order-confirmation-message"], [3, "guid", "email"]],
  template: function OrderConfirmationThankYouMessageComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275template(0, OrderConfirmationThankYouMessageComponent_ng_container_0_Template, 14, 11, "ng-container", 0);
      \u0275\u0275pipe(1, "async");
    }
    if (rf & 2) {
      \u0275\u0275property("ngIf", \u0275\u0275pipeBind1(1, 1, ctx.order$));
    }
  },
  dependencies: [NgIf, AddToHomeScreenBannerComponent, OrderGuestRegisterFormComponent, AsyncPipe, TranslatePipe],
  encapsulation: 2,
  changeDetection: 0
});
var OrderConfirmationThankYouMessageComponent = _OrderConfirmationThankYouMessageComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OrderConfirmationThankYouMessageComponent, [{
    type: Component,
    args: [{
      selector: "cx-order-confirmation-thank-you-message",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: `<ng-container *ngIf="order$ | async as order">
  <div class="cx-page-header">
    <span class="cx-page-title">
      {{ 'checkoutOrderConfirmation.confirmationOfOrder' | cxTranslate }}
      {{ order.replenishmentOrderCode ?? order.code }}
    </span>
  </div>

  <div class="cx-order-confirmation-message">
    <h2>{{ 'checkoutOrderConfirmation.thankYou' | cxTranslate }}</h2>
    <p>
      {{ 'checkoutOrderConfirmation.invoiceHasBeenSentByEmail' | cxTranslate }}
    </p>
  </div>
  <div
    *ngIf="
      isGuestCustomer && orderGuid && order?.paymentInfo?.billingAddress?.email
    "
  >
    <cx-guest-register-form
      [guid]="orderGuid"
      [email]="order.paymentInfo.billingAddress.email"
    ></cx-guest-register-form>
  </div>

  <cx-add-to-home-screen-banner></cx-add-to-home-screen-banner>
</ng-container>
`
    }]
  }], () => [{
    type: OrderFacade
  }, {
    type: GlobalMessageService
  }, {
    type: TranslationService
  }], null);
})();
var _OrderConfirmationTotalsComponent = class _OrderConfirmationTotalsComponent {
  constructor(orderFacade) {
    this.orderFacade = orderFacade;
    this.cartOutlets = CartOutlets;
    this.order$ = this.orderFacade.getOrderDetails();
  }
  ngOnDestroy() {
    this.orderFacade.clearPlacedOrder();
  }
};
_OrderConfirmationTotalsComponent.\u0275fac = function OrderConfirmationTotalsComponent_Factory(t) {
  return new (t || _OrderConfirmationTotalsComponent)(\u0275\u0275directiveInject(OrderFacade));
};
_OrderConfirmationTotalsComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
  type: _OrderConfirmationTotalsComponent,
  selectors: [["cx-order-confirmation-totals"]],
  decls: 2,
  vars: 3,
  consts: [["class", "cx-order-summary container", 4, "ngIf"], [1, "cx-order-summary", "container"], [1, "row", "justify-content-end"], [1, "col-sm-12", "col-md-6", "col-lg-5", "col-xl-4"], [3, "cxOutlet", "cxOutletContext"]],
  template: function OrderConfirmationTotalsComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275template(0, OrderConfirmationTotalsComponent_div_0_Template, 4, 2, "div", 0);
      \u0275\u0275pipe(1, "async");
    }
    if (rf & 2) {
      \u0275\u0275property("ngIf", \u0275\u0275pipeBind1(1, 1, ctx.order$));
    }
  },
  dependencies: [NgIf, OutletDirective, AsyncPipe],
  encapsulation: 2,
  changeDetection: 0
});
var OrderConfirmationTotalsComponent = _OrderConfirmationTotalsComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OrderConfirmationTotalsComponent, [{
    type: Component,
    args: [{
      selector: "cx-order-confirmation-totals",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: '<div class="cx-order-summary container" *ngIf="order$ | async as order">\n  <div class="row justify-content-end">\n    <div class="col-sm-12 col-md-6 col-lg-5 col-xl-4">\n      <ng-template\n        [cxOutlet]="cartOutlets.ORDER_SUMMARY"\n        [cxOutletContext]="order"\n      >\n      </ng-template>\n    </div>\n  </div>\n</div>\n'
    }]
  }], () => [{
    type: OrderFacade
  }], null);
})();
var orderConfirmationComponents = [OrderConfirmationItemsComponent, OrderConfirmationThankYouMessageComponent, OrderConfirmationTotalsComponent, OrderGuestRegisterFormComponent, OrderConfirmationShippingComponent];
var _OrderConfirmationModule = class _OrderConfirmationModule {
};
_OrderConfirmationModule.\u0275fac = function OrderConfirmationModule_Factory(t) {
  return new (t || _OrderConfirmationModule)();
};
_OrderConfirmationModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
  type: _OrderConfirmationModule
});
_OrderConfirmationModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
  providers: [provideDefaultConfig({
    cmsComponents: {
      OrderConfirmationThankMessageComponent: {
        component: OrderConfirmationThankYouMessageComponent,
        guards: [OrderConfirmationGuard]
      },
      ReplenishmentConfirmationMessageComponent: {
        component: OrderConfirmationThankYouMessageComponent,
        guards: [OrderConfirmationGuard]
      },
      OrderConfirmationItemsComponent: {
        component: OrderConfirmationItemsComponent,
        guards: [OrderConfirmationGuard]
      },
      ReplenishmentConfirmationItemsComponent: {
        component: OrderConfirmationItemsComponent,
        guards: [OrderConfirmationGuard]
      },
      OrderConfirmationTotalsComponent: {
        component: OrderConfirmationTotalsComponent,
        guards: [OrderConfirmationGuard]
      },
      ReplenishmentConfirmationTotalsComponent: {
        component: OrderConfirmationTotalsComponent,
        guards: [OrderConfirmationGuard]
      },
      OrderConfirmationOverviewComponent: {
        component: OrderOverviewComponent,
        providers: [{
          provide: OrderDetailsService,
          useExisting: OrderFacade
        }],
        guards: [OrderConfirmationGuard]
      },
      ReplenishmentConfirmationOverviewComponent: {
        component: OrderOverviewComponent,
        providers: [{
          provide: OrderDetailsService,
          useExisting: OrderFacade
        }],
        guards: [OrderConfirmationGuard]
      },
      OrderConfirmationShippingComponent: {
        component: OrderConfirmationShippingComponent,
        guards: [OrderConfirmationGuard]
      },
      OrderConfirmationBillingComponent: {
        component: OrderDetailBillingComponent,
        providers: [{
          provide: OrderDetailsService,
          useExisting: OrderFacade
        }],
        guards: [OrderConfirmationGuard]
      }
    }
  }), {
    provide: OrderConfirmationOrderEntriesContextToken,
    useExisting: OrderConfirmationOrderEntriesContext
  }, provideOutlet({
    id: OrderOutlets.CONSIGNMENT_DELIVERY_INFO,
    component: OrderConfirmationShippingComponent
  })],
  imports: [CommonModule, CardModule, PwaModule, PromotionsModule, I18nModule, ReactiveFormsModule, FormErrorsModule, OutletModule.forChild(), PasswordVisibilityToggleModule]
});
var OrderConfirmationModule = _OrderConfirmationModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OrderConfirmationModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, CardModule, PwaModule, PromotionsModule, I18nModule, ReactiveFormsModule, FormErrorsModule, OutletModule.forChild(), PasswordVisibilityToggleModule],
      providers: [provideDefaultConfig({
        cmsComponents: {
          OrderConfirmationThankMessageComponent: {
            component: OrderConfirmationThankYouMessageComponent,
            guards: [OrderConfirmationGuard]
          },
          ReplenishmentConfirmationMessageComponent: {
            component: OrderConfirmationThankYouMessageComponent,
            guards: [OrderConfirmationGuard]
          },
          OrderConfirmationItemsComponent: {
            component: OrderConfirmationItemsComponent,
            guards: [OrderConfirmationGuard]
          },
          ReplenishmentConfirmationItemsComponent: {
            component: OrderConfirmationItemsComponent,
            guards: [OrderConfirmationGuard]
          },
          OrderConfirmationTotalsComponent: {
            component: OrderConfirmationTotalsComponent,
            guards: [OrderConfirmationGuard]
          },
          ReplenishmentConfirmationTotalsComponent: {
            component: OrderConfirmationTotalsComponent,
            guards: [OrderConfirmationGuard]
          },
          OrderConfirmationOverviewComponent: {
            component: OrderOverviewComponent,
            providers: [{
              provide: OrderDetailsService,
              useExisting: OrderFacade
            }],
            guards: [OrderConfirmationGuard]
          },
          ReplenishmentConfirmationOverviewComponent: {
            component: OrderOverviewComponent,
            providers: [{
              provide: OrderDetailsService,
              useExisting: OrderFacade
            }],
            guards: [OrderConfirmationGuard]
          },
          OrderConfirmationShippingComponent: {
            component: OrderConfirmationShippingComponent,
            guards: [OrderConfirmationGuard]
          },
          OrderConfirmationBillingComponent: {
            component: OrderDetailBillingComponent,
            providers: [{
              provide: OrderDetailsService,
              useExisting: OrderFacade
            }],
            guards: [OrderConfirmationGuard]
          }
        }
      }), {
        provide: OrderConfirmationOrderEntriesContextToken,
        useExisting: OrderConfirmationOrderEntriesContext
      }, provideOutlet({
        id: OrderOutlets.CONSIGNMENT_DELIVERY_INFO,
        component: OrderConfirmationShippingComponent
      })],
      declarations: [...orderConfirmationComponents],
      exports: [...orderConfirmationComponents]
    }]
  }], null, null);
})();
var _OrderDetailActionsComponent = class _OrderDetailActionsComponent {
  constructor(orderDetailsService) {
    this.orderDetailsService = orderDetailsService;
    this.order$ = this.orderDetailsService.getOrderDetails();
  }
};
_OrderDetailActionsComponent.\u0275fac = function OrderDetailActionsComponent_Factory(t) {
  return new (t || _OrderDetailActionsComponent)(\u0275\u0275directiveInject(OrderDetailsService));
};
_OrderDetailActionsComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
  type: _OrderDetailActionsComponent,
  selectors: [["cx-order-details-actions"]],
  decls: 2,
  vars: 3,
  consts: [[4, "ngIf"], [1, "cx-nav", "row"], [1, "col-xs-12", "col-md-4", "col-lg-3"], [1, "btn", "btn-block", "btn-secondary", 3, "routerLink"], ["class", "btn btn-block btn-secondary", 3, "routerLink", 4, "ngIf"]],
  template: function OrderDetailActionsComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275template(0, OrderDetailActionsComponent_ng_container_0_Template, 10, 9, "ng-container", 0);
      \u0275\u0275pipe(1, "async");
    }
    if (rf & 2) {
      \u0275\u0275property("ngIf", \u0275\u0275pipeBind1(1, 1, ctx.order$));
    }
  },
  dependencies: [NgIf, RouterLink, AsyncPipe, TranslatePipe, UrlPipe],
  encapsulation: 2
});
var OrderDetailActionsComponent = _OrderDetailActionsComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OrderDetailActionsComponent, [{
    type: Component,
    args: [{
      selector: "cx-order-details-actions",
      template: `<ng-container *ngIf="order$ | async as order">
  <div class="cx-nav row">
    <div class="col-xs-12 col-md-4 col-lg-3">
      <button
        [routerLink]="{ cxRoute: 'orders' } | cxUrl"
        class="btn btn-block btn-secondary"
      >
        {{ 'common.back' | cxTranslate }}
      </button>
    </div>

    <div class="col-xs-12 col-md-4 col-lg-3">
      <a
        *ngIf="order.cancellable"
        [routerLink]="
          {
            cxRoute: 'orderCancel',
            params: order
          } | cxUrl
        "
        class="btn btn-block btn-secondary"
      >
        {{ 'orderDetails.cancellationAndReturn.cancelAction' | cxTranslate }}
      </a>

      <a
        *ngIf="order.returnable"
        [routerLink]="
          {
            cxRoute: 'orderReturn',
            params: order
          } | cxUrl
        "
        class="btn btn-block btn-secondary"
      >
        {{ 'orderDetails.cancellationAndReturn.returnAction' | cxTranslate }}
      </a>
    </div>
  </div>
</ng-container>
`
    }]
  }], () => [{
    type: OrderDetailsService
  }], null);
})();
var _MyAccountV2OrderDetailsActionsComponent = class _MyAccountV2OrderDetailsActionsComponent extends OrderDetailActionsComponent {
  constructor() {
    super(...arguments);
    this.eventService = inject(EventService);
  }
  ngOnInit() {
    this.order$.subscribe((order) => {
      this.order = order;
    });
  }
  showDialog(order) {
    const newEvent = new DownloadOrderInvoicesEvent();
    newEvent.order = order;
    this.eventService.dispatch(newEvent);
  }
};
_MyAccountV2OrderDetailsActionsComponent.\u0275fac = /* @__PURE__ */ (() => {
  let \u0275MyAccountV2OrderDetailsActionsComponent_BaseFactory;
  return function MyAccountV2OrderDetailsActionsComponent_Factory(t) {
    return (\u0275MyAccountV2OrderDetailsActionsComponent_BaseFactory || (\u0275MyAccountV2OrderDetailsActionsComponent_BaseFactory = \u0275\u0275getInheritedFactory(_MyAccountV2OrderDetailsActionsComponent)))(t || _MyAccountV2OrderDetailsActionsComponent);
  };
})();
_MyAccountV2OrderDetailsActionsComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
  type: _MyAccountV2OrderDetailsActionsComponent,
  selectors: [["cx-my-account-v2-order-details-actions"]],
  features: [\u0275\u0275InheritDefinitionFeature],
  decls: 1,
  vars: 1,
  consts: [[4, "ngIf"], [1, "cx-order-details-actions", "row"], [1, "cx-view-all-orders"], [1, "col-xs-12", "col-md-4", "col-lg-3"], [1, "cx-action-button-left"], ["id", "view-all-orders-btn", 1, "btn", "btn-block", "btn-secondary", 3, "routerLink"], [1, "cx-other-actions"], ["class", "cx-action-button", 4, "ngIf"], [1, "cx-action-button"], ["id", "download-invoices-btn", 1, "btn", "btn-block", "btn-secondary", 3, "click"], ["id", "cancel-items-btn", 1, "btn", "btn-block", "btn-secondary", 3, "routerLink"], ["id", "return-items-btn", 1, "btn", "btn-block", "btn-secondary", 3, "routerLink"]],
  template: function MyAccountV2OrderDetailsActionsComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275template(0, MyAccountV2OrderDetailsActionsComponent_ng_container_0_Template, 17, 12, "ng-container", 0);
    }
    if (rf & 2) {
      \u0275\u0275property("ngIf", ctx.order);
    }
  },
  dependencies: [NgIf, RouterLink, TranslatePipe, UrlPipe],
  encapsulation: 2
});
var MyAccountV2OrderDetailsActionsComponent = _MyAccountV2OrderDetailsActionsComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MyAccountV2OrderDetailsActionsComponent, [{
    type: Component,
    args: [{
      selector: "cx-my-account-v2-order-details-actions",
      template: `<ng-container *ngIf="order">
  <div class="cx-order-details-actions row">
    <div class="cx-view-all-orders">
      <span class="col-xs-12 col-md-4 col-lg-3">
        <span class="cx-action-button-left">
          <button
            id="view-all-orders-btn"
            [routerLink]="{ cxRoute: 'orders' } | cxUrl"
            class="btn btn-block btn-secondary"
          >
            {{ 'myAccountV2OrderDetails.viewAllOrders' | cxTranslate }}
          </button>
        </span>
      </span>
    </div>
    <div class="cx-other-actions">
      <span class="col-xs-12 col-md-4 col-lg-3">
        <span *ngIf="order.cancellable" class="cx-action-button">
          <button
            id="cancel-items-btn"
            [routerLink]="
              {
                cxRoute: 'orderCancel',
                params: order
              } | cxUrl
            "
            class="btn btn-block btn-secondary"
          >
            {{ 'myAccountV2OrderDetails.cancelItems' | cxTranslate }}
          </button>
        </span>
        <span *ngIf="order.returnable" class="cx-action-button">
          <button
            id="return-items-btn"
            [routerLink]="
              {
                cxRoute: 'orderReturn',
                params: order
              } | cxUrl
            "
            class="btn btn-block btn-secondary"
          >
            {{ 'myAccountV2OrderDetails.returnItems' | cxTranslate }}
          </button>
        </span>
        <span class="cx-action-button">
          <button
            id="download-invoices-btn"
            class="btn btn-block btn-secondary"
            (click)="showDialog(order)"
          >
            {{ 'myAccountV2OrderDetails.downloadInvoices' | cxTranslate }}
          </button>
        </span>
      </span>
    </div>
  </div>
</ng-container>
`
    }]
  }], null, null);
})();
var _MyAccountV2DownloadInvoicesComponent = class _MyAccountV2DownloadInvoicesComponent {
  constructor() {
    this.OrderOutlets = OrderOutlets;
    this.invoiceCount = void 0;
    this.iconTypes = ICON_TYPE;
    this.focusConfig = {
      trap: true,
      block: true,
      autofocus: true,
      focusOnEscape: true
    };
    this.launchDialogService = inject(LaunchDialogService);
    this.cdr = inject(ChangeDetectorRef);
  }
  ngAfterViewChecked() {
    this.cdr.detectChanges();
    if (this.invoiceComponent && this.invoiceComponent.pagination !== void 0) {
      this.invoiceCount = this.invoiceComponent.pagination.totalResults;
    }
  }
  close(reason, _message) {
    this.launchDialogService.closeDialog(reason);
  }
};
_MyAccountV2DownloadInvoicesComponent.\u0275fac = function MyAccountV2DownloadInvoicesComponent_Factory(t) {
  return new (t || _MyAccountV2DownloadInvoicesComponent)();
};
_MyAccountV2DownloadInvoicesComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
  type: _MyAccountV2DownloadInvoicesComponent,
  selectors: [["cx-my-account-v2-download-invoices"]],
  viewQuery: function MyAccountV2DownloadInvoicesComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(InvoicesListComponent, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.invoiceComponent = _t.first);
    }
  },
  decls: 14,
  vars: 10,
  consts: [[1, "cx-modal-container", 3, "esc", "cxFocus"], [1, "cx-modal-content"], [1, "cx-dialog-header", "modal-header"], [1, "cx-dialog-title", "modal-title"], ["type", "button", 1, "close", 3, "click"], ["aria-hidden", "true"], [3, "type"], [1, "cx-dialog-body", "modal-body"], ["id", "noInvoice", 4, "ngIf"], ["class", "cx-spinner", 4, "ngIf"], ["id", "noInvoice"], [1, "cx-spinner"]],
  template: function MyAccountV2DownloadInvoicesComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275listener("esc", function MyAccountV2DownloadInvoicesComponent_Template_div_esc_0_listener() {
        return ctx.close("Escape clicked");
      });
      \u0275\u0275elementStart(1, "div", 1)(2, "div", 2)(3, "div", 3);
      \u0275\u0275text(4);
      \u0275\u0275pipe(5, "cxTranslate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "button", 4);
      \u0275\u0275pipe(7, "cxTranslate");
      \u0275\u0275listener("click", function MyAccountV2DownloadInvoicesComponent_Template_button_click_6_listener() {
        return ctx.close("Close download invoices dialog");
      });
      \u0275\u0275elementStart(8, "span", 5);
      \u0275\u0275element(9, "cx-icon", 6);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(10, "div", 7);
      \u0275\u0275element(11, "cx-invoices-list");
      \u0275\u0275template(12, MyAccountV2DownloadInvoicesComponent_div_12_Template, 3, 3, "div", 8)(13, MyAccountV2DownloadInvoicesComponent_div_13_Template, 2, 0, "div", 9);
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275property("cxFocus", ctx.focusConfig);
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(5, 6, "myAccountV2OrderDetails.downloadInvoices"), " ");
      \u0275\u0275advance(2);
      \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(7, 8, "addToCart.closeModal"));
      \u0275\u0275advance(3);
      \u0275\u0275property("type", ctx.iconTypes.CLOSE);
      \u0275\u0275advance(3);
      \u0275\u0275property("ngIf", ctx.invoiceCount === 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.invoiceCount === void 0);
    }
  },
  dependencies: [NgIf, FocusDirective, IconComponent, SpinnerComponent, InvoicesListComponent, TranslatePipe],
  encapsulation: 2,
  changeDetection: 0
});
var MyAccountV2DownloadInvoicesComponent = _MyAccountV2DownloadInvoicesComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MyAccountV2DownloadInvoicesComponent, [{
    type: Component,
    args: [{
      selector: "cx-my-account-v2-download-invoices",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: `<div
  [cxFocus]="focusConfig"
  (esc)="close('Escape clicked')"
  class="cx-modal-container"
>
  <div class="cx-modal-content">
    <div class="cx-dialog-header modal-header">
      <div class="cx-dialog-title modal-title">
        {{ 'myAccountV2OrderDetails.downloadInvoices' | cxTranslate }}
      </div>
      <button
        type="button"
        class="close"
        attr.aria-label="{{ 'addToCart.closeModal' | cxTranslate }}"
        (click)="close('Close download invoices dialog')"
      >
        <span aria-hidden="true">
          <cx-icon [type]="iconTypes.CLOSE"></cx-icon>
        </span>
      </button>
    </div>

    <div class="cx-dialog-body modal-body">
      <cx-invoices-list> </cx-invoices-list>
      <div id="noInvoice" *ngIf="invoiceCount === 0">
        {{ 'myAccountV2OrderDetails.noInvoices' | cxTranslate }}
      </div>
      <div *ngIf="invoiceCount === undefined" class="cx-spinner">
        <cx-spinner></cx-spinner>
      </div>
    </div>
  </div>
</div>
`
    }]
  }], null, {
    invoiceComponent: [{
      type: ViewChild,
      args: [InvoicesListComponent, {
        static: false
      }]
    }]
  });
})();
var defaultMyAccountV2DownloadInvoicesLayoutConfig = {
  launch: {
    DOWNLOAD_ORDER_INVOICES: {
      inlineRoot: true,
      component: MyAccountV2DownloadInvoicesComponent,
      dialogType: DIALOG_TYPE.DIALOG
    }
  }
};
var _MyAccountV2DownloadInvoicesEventListener = class _MyAccountV2DownloadInvoicesEventListener {
  constructor() {
    this.subscription = new Subscription();
    this.eventService = inject(EventService);
    this.launchDialogService = inject(LaunchDialogService);
    this.onDownloadInvoices();
  }
  onDownloadInvoices() {
    this.subscription.add(this.eventService.get(DownloadOrderInvoicesEvent).subscribe((event) => {
      this.openDialog(event);
    }));
  }
  openDialog(event) {
    const dialog = this.launchDialogService.openDialog("DOWNLOAD_ORDER_INVOICES", void 0, void 0, event.order);
    if (dialog) {
      dialog.pipe(take(1)).subscribe();
    }
  }
  ngOnDestroy() {
    this.subscription?.unsubscribe();
  }
};
_MyAccountV2DownloadInvoicesEventListener.\u0275fac = function MyAccountV2DownloadInvoicesEventListener_Factory(t) {
  return new (t || _MyAccountV2DownloadInvoicesEventListener)();
};
_MyAccountV2DownloadInvoicesEventListener.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
  token: _MyAccountV2DownloadInvoicesEventListener,
  factory: _MyAccountV2DownloadInvoicesEventListener.\u0275fac,
  providedIn: "root"
});
var MyAccountV2DownloadInvoicesEventListener = _MyAccountV2DownloadInvoicesEventListener;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MyAccountV2DownloadInvoicesEventListener, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();
var _MyAccountV2DownloadInvoicesModule = class _MyAccountV2DownloadInvoicesModule {
  constructor() {
    this.downloadInvoicesDialogEventListener = inject(MyAccountV2DownloadInvoicesEventListener);
  }
};
_MyAccountV2DownloadInvoicesModule.\u0275fac = function MyAccountV2DownloadInvoicesModule_Factory(t) {
  return new (t || _MyAccountV2DownloadInvoicesModule)();
};
_MyAccountV2DownloadInvoicesModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
  type: _MyAccountV2DownloadInvoicesModule
});
_MyAccountV2DownloadInvoicesModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
  providers: [provideDefaultConfig(defaultMyAccountV2DownloadInvoicesLayoutConfig)],
  imports: [CommonModule, KeyboardFocusModule, IconModule, I18nModule, PaginationModule, SortingModule, SpinnerModule, PDFInvoicesComponentsModule]
});
var MyAccountV2DownloadInvoicesModule = _MyAccountV2DownloadInvoicesModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MyAccountV2DownloadInvoicesModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, KeyboardFocusModule, IconModule, I18nModule, PaginationModule, SortingModule, SpinnerModule, PDFInvoicesComponentsModule],
      providers: [provideDefaultConfig(defaultMyAccountV2DownloadInvoicesLayoutConfig)],
      exports: [MyAccountV2DownloadInvoicesComponent],
      declarations: [MyAccountV2DownloadInvoicesComponent]
    }]
  }], null, null);
})();
var completedValues = ["DELIVERY_COMPLETED", "PICKUP_COMPLETE"];
var cancelledValues = ["CANCELLED"];
var _MyAccountV2OrderConsignmentsService = class _MyAccountV2OrderConsignmentsService {
  getGroupedConsignments(order, pickup) {
    const consignments = pickup ? order.consignments?.filter((consignment) => consignment.deliveryPointOfService !== void 0) : order.consignments?.filter((consignment) => consignment.deliveryPointOfService === void 0);
    return this.groupConsignments(consignments);
  }
  getUnconsignedEntries(order, pickup) {
    if (order.replenishmentOrderCode) {
      return [];
    }
    return pickup ? order.unconsignedEntries?.filter((entry) => entry.deliveryPointOfService !== void 0) : order.unconsignedEntries?.filter((entry) => entry.deliveryPointOfService === void 0);
  }
  groupConsignments(consignments) {
    const grouped = consignments?.reduce((result, current) => {
      const key = this.getStatusGroupKey(current.status || "");
      result[key] = result[key] || [];
      result[key].push(current);
      return result;
    }, {});
    return grouped ? [...grouped[1] || [], ...grouped[0] || [], ...grouped[-1] || []] : void 0;
  }
  /**
   * complete: 0
   * processing: 1
   * cancel: -1
   */
  getStatusGroupKey(status) {
    if (completedValues.includes(status)) {
      return 0;
    }
    if (cancelledValues.includes(status)) {
      return -1;
    }
    return 1;
  }
};
_MyAccountV2OrderConsignmentsService.\u0275fac = function MyAccountV2OrderConsignmentsService_Factory(t) {
  return new (t || _MyAccountV2OrderConsignmentsService)();
};
_MyAccountV2OrderConsignmentsService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
  token: _MyAccountV2OrderConsignmentsService,
  factory: _MyAccountV2OrderConsignmentsService.\u0275fac,
  providedIn: "root"
});
var MyAccountV2OrderConsignmentsService = _MyAccountV2OrderConsignmentsService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MyAccountV2OrderConsignmentsService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var _ConsignmentTrackingComponent = class _ConsignmentTrackingComponent {
  constructor(orderHistoryFacade, launchDialogService, vcr) {
    this.orderHistoryFacade = orderHistoryFacade;
    this.launchDialogService = launchDialogService;
    this.vcr = vcr;
    this.consignmentStatus = ["SHIPPED", "IN_TRANSIT", "DELIVERY_COMPLETED", "DELIVERY_REJECTED", "DELIVERING"];
  }
  ngOnInit() {
    this.consignmentTracking$ = this.orderHistoryFacade.getConsignmentTracking();
  }
  openTrackingDialog(consignment) {
    if (consignment.code) {
      this.orderHistoryFacade.loadConsignmentTracking(this.orderCode, consignment.code);
    }
    const modalInstanceData = {
      tracking$: this.consignmentTracking$,
      shipDate: consignment.statusDate
    };
    const dialog = this.launchDialogService.openDialog("CONSIGNMENT_TRACKING", this.element, this.vcr, modalInstanceData);
    if (dialog) {
      dialog.pipe(take(1)).subscribe();
    }
  }
  ngOnDestroy() {
    this.orderHistoryFacade.clearConsignmentTracking();
  }
};
_ConsignmentTrackingComponent.\u0275fac = function ConsignmentTrackingComponent_Factory(t) {
  return new (t || _ConsignmentTrackingComponent)(\u0275\u0275directiveInject(OrderHistoryFacade), \u0275\u0275directiveInject(LaunchDialogService), \u0275\u0275directiveInject(ViewContainerRef));
};
_ConsignmentTrackingComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
  type: _ConsignmentTrackingComponent,
  selectors: [["cx-consignment-tracking"]],
  viewQuery: function ConsignmentTrackingComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(_c14, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.element = _t.first);
    }
  },
  inputs: {
    consignment: "consignment",
    orderCode: "orderCode"
  },
  decls: 1,
  vars: 1,
  consts: [[4, "ngIf"], ["type", "button", 1, "btn", "btn-secondary", "btn-track", 3, "click"]],
  template: function ConsignmentTrackingComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275template(0, ConsignmentTrackingComponent_ng_container_0_Template, 2, 1, "ng-container", 0);
    }
    if (rf & 2) {
      \u0275\u0275property("ngIf", ctx.consignment && ctx.consignment.status);
    }
  },
  dependencies: [NgIf, TranslatePipe],
  encapsulation: 2,
  changeDetection: 0
});
var ConsignmentTrackingComponent = _ConsignmentTrackingComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ConsignmentTrackingComponent, [{
    type: Component,
    args: [{
      selector: "cx-consignment-tracking",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: `<ng-container *ngIf="consignment && consignment.status">
  <div *ngIf="consignmentStatus.includes(consignment.status)">
    <button
      (click)="openTrackingDialog(consignment)"
      class="btn btn-secondary btn-track"
      type="button"
    >
      {{ 'orderDetails.consignmentTracking.action' | cxTranslate }}
    </button>
  </div>
</ng-container>
`
    }]
  }], () => [{
    type: OrderHistoryFacade
  }, {
    type: LaunchDialogService
  }, {
    type: ViewContainerRef
  }], {
    element: [{
      type: ViewChild,
      args: ["element"]
    }],
    consignment: [{
      type: Input
    }],
    orderCode: [{
      type: Input
    }]
  });
})();
var _OrderConsignedEntriesComponent = class _OrderConsignedEntriesComponent {
  constructor() {
    this.promotionLocation = PromotionLocation.Order;
    this.OrderOutlets = OrderOutlets;
    this.CartOutlets = CartOutlets;
  }
};
_OrderConsignedEntriesComponent.\u0275fac = function OrderConsignedEntriesComponent_Factory(t) {
  return new (t || _OrderConsignedEntriesComponent)();
};
_OrderConsignedEntriesComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
  type: _OrderConsignedEntriesComponent,
  selectors: [["cx-order-consigned-entries"]],
  inputs: {
    consignments: "consignments",
    order: "order",
    enableAddToCart: "enableAddToCart",
    buyItAgainTranslation: "buyItAgainTranslation"
  },
  decls: 3,
  vars: 1,
  consts: [["addToCartBtn", ""], ["class", "cx-list row", 4, "ngFor", "ngForOf"], [1, "cx-list", "row"], [3, "cxOutlet", "cxOutletContext"], [1, "cx-list-item", "col-12"], [1, "cx-list-header", "col-12"], [1, "cx-list-status"], [4, "ngIf"], ["class", "cx-list-date", 4, "ngIf"], [3, "orderCode", "consignment", 4, "cxFeature"], [1, "cx-list-date"], [3, "orderCode", "consignment"], [1, "add-to-cart", 3, "productCode", "product", "showQuantity", "options", "pickupStore"]],
  template: function OrderConsignedEntriesComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275template(0, OrderConsignedEntriesComponent_div_0_Template, 4, 15, "div", 1)(1, OrderConsignedEntriesComponent_ng_template_1_Template, 1, 5, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
    }
    if (rf & 2) {
      \u0275\u0275property("ngForOf", ctx.consignments);
    }
  },
  dependencies: [NgForOf, NgIf, FeatureDirective, OutletDirective, AddToCartComponent, ConsignmentTrackingComponent, TranslatePipe, CxDatePipe],
  encapsulation: 2
});
var OrderConsignedEntriesComponent = _OrderConsignedEntriesComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OrderConsignedEntriesComponent, [{
    type: Component,
    args: [{
      selector: "cx-order-consigned-entries",
      template: `<div *ngFor="let consignment of consignments" class="cx-list row">
  <ng-template
    [cxOutlet]="OrderOutlets.ORDER_CONSIGNMENT"
    [cxOutletContext]="{ item: consignment, order: order }"
  >
    <div class="cx-list-header col-12">
      <div class="cx-list-status">
        <span *ngIf="consignment">
          {{
            'orderDetails.deliveryStatus_' + consignment?.status | cxTranslate
          }}
        </span>
      </div>
      <div *ngIf="consignment?.statusDate" class="cx-list-date">
        <div>{{ consignment?.statusDate | cxDate }}</div>
      </div>

      <cx-consignment-tracking
        [orderCode]="order.code"
        [consignment]="consignment"
        *cxFeature="'consignmentTracking'"
      >
      </cx-consignment-tracking>
    </div>
  </ng-template>
  <div class="cx-list-item col-12">
    <ng-template
      [cxOutlet]="CartOutlets.CART_ITEM_LIST"
      [cxOutletContext]="{
        items: consignment.entries,
        readonly: true,
        promotionLocation: promotionLocation,
        options: {
          displayAddToCart: enableAddToCart,
          addToCartString: buyItAgainTranslation,
          optionalBtn: addToCartBtn
        }
      }"
    >
    </ng-template>
  </div>
</div>

<ng-template let-ctx #addToCartBtn>
  <cx-add-to-cart
    [productCode]="ctx.item.product?.code"
    [product]="ctx.item.product"
    [showQuantity]="false"
    [options]="ctx.options"
    [pickupStore]="ctx.item.deliveryPointOfService?.name"
    class="add-to-cart"
  >
  </cx-add-to-cart>
</ng-template>
`
    }]
  }], null, {
    consignments: [{
      type: Input
    }],
    order: [{
      type: Input
    }],
    enableAddToCart: [{
      type: Input
    }],
    buyItAgainTranslation: [{
      type: Input
    }]
  });
})();
var _OrderDetailItemsComponent = class _OrderDetailItemsComponent {
  constructor(orderDetailsService, component) {
    this.orderDetailsService = orderDetailsService;
    this.component = component;
    this.orderConsignmentsService = inject(MyAccountV2OrderConsignmentsService);
    this.OrderOutlets = OrderOutlets;
    this.CartOutlets = CartOutlets;
    this.promotionLocation = PromotionLocation.Order;
    this.order$ = this.orderDetailsService.getOrderDetails().pipe(tap((order) => {
      this.pickupConsignments = this.getGroupedConsignments(order, true);
      this.deliveryConsignments = this.getGroupedConsignments(order, false);
      this.pickupUnconsignedEntries = this.getUnconsignedEntries(order, true);
      this.deliveryUnConsignedEntries = this.getUnconsignedEntries(order, false);
    }));
    this.enableAddToCart$ = this.component.data$.pipe(map((data) => data.enableAddToCart));
    this.isOrderLoading$ = typeof this.orderDetailsService.isOrderDetailsLoading === "function" ? this.orderDetailsService.isOrderDetailsLoading() : of(false);
    this.groupCartItems$ = this.component.data$.pipe(map((data) => data.groupCartItems));
  }
  getGroupedConsignments(order, pickup) {
    return this.orderConsignmentsService.getGroupedConsignments(order, pickup);
  }
  getUnconsignedEntries(order, pickup) {
    return this.orderConsignmentsService.getUnconsignedEntries(order, pickup);
  }
};
_OrderDetailItemsComponent.\u0275fac = function OrderDetailItemsComponent_Factory(t) {
  return new (t || _OrderDetailItemsComponent)(\u0275\u0275directiveInject(OrderDetailsService), \u0275\u0275directiveInject(CmsComponentData));
};
_OrderDetailItemsComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
  type: _OrderDetailItemsComponent,
  selectors: [["cx-order-details-items"]],
  decls: 2,
  vars: 3,
  consts: [["addToCartBtn", ""], [4, "ngIf"], ["class", "cx-pickup-order-consigned-entries-header", 4, "ngIf"], [3, "order", "consignments", "enableAddToCart", "buyItAgainTranslation", 4, "ngIf"], [3, "promotions"], [1, "cx-pickup-order-consigned-entries-header"], [3, "order", "consignments", "enableAddToCart", "buyItAgainTranslation"], [3, "cxOutlet", "cxOutletContext"], ["class", "cx-list-header", 4, "ngIf"], [1, "cx-list-header"], [1, "cx-list-status"], ["class", "cx-review-header", 4, "ngIf"], [1, "cx-list-item"], [1, "cx-review-header"], [1, "cx-list"], [1, "add-to-cart", 3, "productCode", "product", "showQuantity", "options", "pickupStore"]],
  template: function OrderDetailItemsComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275template(0, OrderDetailItemsComponent_ng_container_0_Template, 5, 3, "ng-container", 1);
      \u0275\u0275pipe(1, "async");
    }
    if (rf & 2) {
      \u0275\u0275property("ngIf", \u0275\u0275pipeBind1(1, 1, ctx.order$));
    }
  },
  dependencies: [NgIf, PromotionsComponent, OutletDirective, AddToCartComponent, OrderConsignedEntriesComponent, AsyncPipe, TranslatePipe],
  encapsulation: 2
});
var OrderDetailItemsComponent = _OrderDetailItemsComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OrderDetailItemsComponent, [{
    type: Component,
    args: [{
      selector: "cx-order-details-items",
      template: `<ng-container *ngIf="order$ | async as order">
  <ng-container *ngIf="!(isOrderLoading$ | async)">
    <ng-container
      *ngIf="
        order.consignments?.length ||
        order.unconsignedEntries?.length ||
        order.replenishmentOrderCode
      "
    >
      <cx-promotions
        [promotions]="order.appliedOrderPromotions || []"
      ></cx-promotions>
    </ng-container>

    <!-- pickup consigned entries -->
    <div
      *ngIf="pickupConsignments?.length"
      class="cx-pickup-order-consigned-entries-header"
    >
      {{ 'deliveryPointOfServiceDetails.itemsToBePickUp' | cxTranslate }}
    </div>
    <cx-order-consigned-entries
      *ngIf="pickupConsignments"
      [order]="order"
      [consignments]="pickupConsignments"
      [enableAddToCart]="enableAddToCart$ | async"
      [buyItAgainTranslation]="'addToCart.buyItAgain' | cxTranslate"
    ></cx-order-consigned-entries>

    <!-- delivery consignment address and delivery mode -->
    <ng-template
      *ngIf="
        deliveryConsignments &&
        deliveryConsignments.length > 0 &&
        (groupCartItems$ | async)
      "
      [cxOutlet]="OrderOutlets.CONSIGNMENT_DELIVERY_INFO"
      [cxOutletContext]="{
        showItemList: false,
        order: order
      }"
    >
    </ng-template>

    <!-- delivery consigned entries -->
    <cx-order-consigned-entries
      *ngIf="deliveryConsignments"
      [order]="order"
      [consignments]="deliveryConsignments"
      [enableAddToCart]="enableAddToCart$ | async"
      [buyItAgainTranslation]="'addToCart.buyItAgain' | cxTranslate"
    ></cx-order-consigned-entries>

    <!-- unconsigned entries -->
    <ng-container *ngIf="order?.unconsignedEntries?.length">
      <div *ngIf="order?.statusDisplay" class="cx-list-header">
        <div class="cx-list-status">
          {{
            'orderDetails.statusDisplay_' + order?.statusDisplay | cxTranslate
          }}
        </div>
      </div>
      <!-- delivery unconsigned entries -->
      <ng-container *ngIf="deliveryUnConsignedEntries?.length">
        <h2 *ngIf="groupCartItems$ | async" class="cx-review-header">
          {{ 'checkoutMode.deliveryEntries' | cxTranslate }}
        </h2>
        <div class="cx-list-item">
          <ng-template
            [cxOutlet]="CartOutlets.CART_ITEM_LIST"
            [cxOutletContext]="{
              items: deliveryUnConsignedEntries,
              readonly: true,
              promotionLocation: promotionLocation,
              options: {
                displayAddToCart: enableAddToCart$ | async,
                addToCartString: 'addToCart.buyItAgain' | cxTranslate,
                optionalBtn: addToCartBtn
              }
            }"
          >
          </ng-template>
        </div>
      </ng-container>
      <!-- pickup unconsigned entries, b2b does not have pickup items -->
      <ng-container *ngIf="pickupUnconsignedEntries?.length">
        <h2 class="cx-review-header">
          {{ 'checkoutPickupInStore.heading' | cxTranslate }}
        </h2>
        <div class="cx-list-item">
          <ng-template
            [cxOutlet]="CartOutlets.CART_ITEM_LIST"
            [cxOutletContext]="{
              items: pickupUnconsignedEntries,
              readonly: true,
              promotionLocation: promotionLocation,
              options: {
                displayAddToCart: enableAddToCart$ | async,
                addToCartString: 'addToCart.buyItAgain' | cxTranslate,
                optionalBtn: addToCartBtn
              }
            }"
          >
          </ng-template>
        </div>
      </ng-container>
    </ng-container>

    <!-- replenishment other entries -->
    <ng-container *ngIf="order?.entries && order?.replenishmentOrderCode">
      <div class="cx-list">
        <div *ngIf="order?.statusDisplay" class="cx-list-header">
          <div class="cx-list-status">
            {{
              'orderDetails.statusDisplay_' + order?.statusDisplay | cxTranslate
            }}
          </div>
        </div>
        <div class="cx-list-item">
          <ng-template
            [cxOutlet]="CartOutlets.CART_ITEM_LIST"
            [cxOutletContext]="{
              items: order.entries,
              readonly: true,
              promotionLocation: promotionLocation,
              options: {
                displayAddToCart: enableAddToCart$ | async,
                addToCartString: 'addToCart.buyItAgain' | cxTranslate,
                optionalBtn: addToCartBtn
              }
            }"
          >
          </ng-template>
        </div>
      </div>
    </ng-container>
  </ng-container>

  <ng-template let-ctx #addToCartBtn>
    <cx-add-to-cart
      [productCode]="ctx.item.product?.code"
      [product]="ctx.item.product"
      [showQuantity]="false"
      [options]="ctx.options"
      [pickupStore]="ctx.item.deliveryPointOfService?.name"
      class="add-to-cart"
    >
    </cx-add-to-cart>
  </ng-template>
</ng-container>
`
    }]
  }], () => [{
    type: OrderDetailsService
  }, {
    type: CmsComponentData
  }], null);
})();
var _TrackingEventsComponent = class _TrackingEventsComponent {
  handleClick(event) {
    if (event.target.tagName === this.el.nativeElement.tagName) {
      this.close("Cross click");
    }
  }
  constructor(orderHistoryFacade, launchDialogService, el) {
    this.orderHistoryFacade = orderHistoryFacade;
    this.launchDialogService = launchDialogService;
    this.el = el;
    this.subscription = new Subscription();
    this.focusConfig = {
      trap: true,
      block: true,
      autofocus: "button",
      focusOnEscape: true
    };
  }
  ngOnInit() {
    this.subscription.add(this.launchDialogService.data$.subscribe((data) => {
      if (data) {
        this.init(data.tracking$, data.shipDate);
      }
    }));
  }
  ngOnDestroy() {
    this.orderHistoryFacade.clearConsignmentTracking();
    this.subscription?.unsubscribe();
  }
  init(tracking$, shipDate) {
    this.tracking$ = tracking$;
    this.shipDate = shipDate;
  }
  close(reason) {
    this.launchDialogService.closeDialog(reason);
  }
};
_TrackingEventsComponent.\u0275fac = function TrackingEventsComponent_Factory(t) {
  return new (t || _TrackingEventsComponent)(\u0275\u0275directiveInject(OrderHistoryFacade), \u0275\u0275directiveInject(LaunchDialogService), \u0275\u0275directiveInject(ElementRef));
};
_TrackingEventsComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
  type: _TrackingEventsComponent,
  selectors: [["cx-tracking-events"]],
  hostBindings: function TrackingEventsComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275listener("click", function TrackingEventsComponent_click_HostBindingHandler($event) {
        return ctx.handleClick($event);
      });
    }
  },
  decls: 8,
  vars: 5,
  consts: [["noTracking", ""], ["loading", ""], [1, "cx-consignment-tracking-dialog", 3, "esc", "cxFocus"], [1, "cx-consignment-tracking-container"], [4, "ngIf", "ngIfElse"], [1, "cx-modal-header"], [1, "cx-consignment-tracking-title", "modal-title"], ["type", "button", 1, "close", 3, "click"], ["aria-hidden", "true"], [1, "cx-tracking-events", "modal-body"], [4, "ngFor", "ngForOf"], [1, "cx-shipment-heading"], [1, "row"], [1, "col-sm-12", "col-md-6"], [1, "cx-shipment-title"], [1, "cx-shipment-content"], [4, "ngIf"], ["target", "_blank", "rel", "noopener noreferrer", 3, "href"], [1, "cx-tracking-event-body"], [1, "cx-tracking-event-content"], [1, "cx-tracking-event-title"], [1, "cx-tracking-event-city"], [1, "cx-no-tracking-heading"], [1, "cx-tracking-loading"], [1, "header", "modal-header"], [1, "title", "modal-title"], ["type", "button", 1, "close", "btn-dismiss", 3, "click"], [1, "body", "modal-body"], [1, "col-sm-12"]],
  template: function TrackingEventsComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "div", 2);
      \u0275\u0275listener("esc", function TrackingEventsComponent_Template_div_esc_0_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.close("Escape clicked"));
      });
      \u0275\u0275elementStart(1, "div", 3);
      \u0275\u0275template(2, TrackingEventsComponent_ng_container_2_Template, 12, 9, "ng-container", 4);
      \u0275\u0275pipe(3, "async");
      \u0275\u0275template(4, TrackingEventsComponent_ng_template_4_Template, 4, 3, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(6, TrackingEventsComponent_ng_template_6_Template, 13, 6, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      const loading_r8 = \u0275\u0275reference(7);
      \u0275\u0275property("cxFocus", ctx.focusConfig);
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", \u0275\u0275pipeBind1(3, 3, ctx.tracking$))("ngIfElse", loading_r8);
    }
  },
  dependencies: [NgForOf, NgIf, SpinnerComponent, FocusDirective, AsyncPipe, TranslatePipe, CxDatePipe],
  encapsulation: 2,
  changeDetection: 0
});
var TrackingEventsComponent = _TrackingEventsComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TrackingEventsComponent, [{
    type: Component,
    args: [{
      selector: "cx-tracking-events",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: `<div
  class="cx-consignment-tracking-dialog"
  [cxFocus]="focusConfig"
  (esc)="close('Escape clicked')"
>
  <div class="cx-consignment-tracking-container">
    <ng-container
      *ngIf="tracking$ | async as consignmentTracking; else loading"
    >
      <!-- Modal Header -->
      <div class="cx-modal-header">
        <div class="cx-consignment-tracking-title modal-title">
          {{ 'orderDetails.consignmentTracking.dialog.header' | cxTranslate }}
        </div>
        <button
          type="button"
          class="close"
          [attr.aria-label]="'common.close' | cxTranslate"
          (click)="close('Cross click')"
        >
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <!-- Modal Body -->
      <!-- shipment header -->
      <ng-container
        *ngIf="
          consignmentTracking?.carrierDetails &&
            consignmentTracking?.trackingID;
          else noTracking
        "
      >
        <div class="cx-shipment-heading">
          <div class="row">
            <div class="col-sm-12 col-md-6">
              <div class="cx-shipment-title">
                {{
                  'orderDetails.consignmentTracking.dialog.shipped'
                    | cxTranslate
                }}
              </div>
              <div class="cx-shipment-content">
                {{ shipDate | cxDate: 'medium' }}
              </div>
            </div>
            <div class="col-sm-12 col-md-6">
              <div class="cx-shipment-title">
                {{
                  'orderDetails.consignmentTracking.dialog.estimate'
                    | cxTranslate
                }}
              </div>
              <div class="cx-shipment-content">
                {{ consignmentTracking?.targetArrivalDate | cxDate: 'medium' }}
              </div>
            </div>
          </div>

          <div class="row">
            <div class="col-sm-12 col-md-6">
              <div class="cx-shipment-title">
                {{
                  'orderDetails.consignmentTracking.dialog.carrier'
                    | cxTranslate
                }}
              </div>
              <div class="cx-shipment-content">
                {{ consignmentTracking?.carrierDetails?.name }}
              </div>
            </div>
            <div class="col-sm-12 col-md-6">
              <div class="cx-shipment-title">
                {{
                  'orderDetails.consignmentTracking.dialog.trackingId'
                    | cxTranslate
                }}
              </div>
              <div class="cx-shipment-content">
                <ng-container *ngIf="consignmentTracking?.trackingUrl">
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    [href]="consignmentTracking.trackingUrl"
                    >{{ consignmentTracking?.trackingID }}</a
                  >
                </ng-container>
                <ng-container *ngIf="!consignmentTracking?.trackingUrl">
                  <label>
                    {{ consignmentTracking?.trackingID }}
                  </label>
                </ng-container>
              </div>
            </div>
          </div>
        </div>
      </ng-container>

      <!-- tracking events -->
      <div class="cx-tracking-events modal-body">
        <ng-container
          *ngFor="let consignmentEvent of consignmentTracking.trackingEvents"
        >
          <div class="cx-tracking-event-body">
            <div class="cx-tracking-event-content">
              {{ consignmentEvent.eventDate | cxDate: 'medium' }}
            </div>
            <div class="cx-tracking-event-title">
              {{ consignmentEvent.referenceCode }}
            </div>
            <div class="cx-tracking-event-content">
              {{ consignmentEvent.detail }}
            </div>
            <div class="cx-tracking-event-city">
              location: {{ consignmentEvent.location }}
            </div>
          </div>
        </ng-container>
      </div>
    </ng-container>

    <ng-template #noTracking>
      <div class="cx-no-tracking-heading">
        <div class="cx-shipment-content">
          {{
            'orderDetails.consignmentTracking.dialog.noTracking' | cxTranslate
          }}
        </div>
      </div>
    </ng-template>

    <ng-template #loading>
      <div class="cx-tracking-loading">
        <div class="header modal-header">
          <div class="title modal-title">
            {{
              'orderDetails.consignmentTracking.dialog.loadingHeader'
                | cxTranslate
            }}
          </div>
          <button
            type="button"
            class="close btn-dismiss"
            [attr.aria-label]="'common.close' | cxTranslate"
            (click)="close('Cross click')"
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <!-- Modal Body -->
        <div class="body modal-body">
          <div class="row">
            <div class="col-sm-12">
              <cx-spinner></cx-spinner>
            </div>
          </div>
        </div>
      </div>
    </ng-template>
  </div>
</div>
`
    }]
  }], () => [{
    type: OrderHistoryFacade
  }, {
    type: LaunchDialogService
  }, {
    type: ElementRef
  }], {
    handleClick: [{
      type: HostListener,
      args: ["click", ["$event"]]
    }]
  });
})();
var _MyAccountV2ConsignmentTrackingComponent = class _MyAccountV2ConsignmentTrackingComponent extends ConsignmentTrackingComponent {
  constructor() {
    super(...arguments);
    this.componentClass = "cx-list-header col-12";
    this.outlet = inject(OutletContextData);
  }
  ngOnInit() {
    this.outlet?.context$.subscribe((context) => {
      this.consignment = context.item;
    });
    this.outlet?.context$.subscribe((context) => {
      this.orderCode = context?.order?.code ?? "";
    });
    super.ngOnInit();
  }
};
_MyAccountV2ConsignmentTrackingComponent.\u0275fac = /* @__PURE__ */ (() => {
  let \u0275MyAccountV2ConsignmentTrackingComponent_BaseFactory;
  return function MyAccountV2ConsignmentTrackingComponent_Factory(t) {
    return (\u0275MyAccountV2ConsignmentTrackingComponent_BaseFactory || (\u0275MyAccountV2ConsignmentTrackingComponent_BaseFactory = \u0275\u0275getInheritedFactory(_MyAccountV2ConsignmentTrackingComponent)))(t || _MyAccountV2ConsignmentTrackingComponent);
  };
})();
_MyAccountV2ConsignmentTrackingComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
  type: _MyAccountV2ConsignmentTrackingComponent,
  selectors: [["cx-my-account-v2-consignment-tracking"]],
  hostVars: 1,
  hostBindings: function MyAccountV2ConsignmentTrackingComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      \u0275\u0275hostProperty("className", ctx.componentClass);
    }
  },
  features: [\u0275\u0275InheritDefinitionFeature],
  decls: 1,
  vars: 1,
  consts: [["showNoTrackingMessage", ""], ["class", "cx-list-status", 4, "ngIf"], [1, "cx-list-status"], [4, "ngIf"], ["class", "cx-item-list-tracking-id", 4, "ngIf"], ["class", "cx-consignment-status-date", 4, "ngIf"], [1, "cx-item-list-tracking-id"], [4, "ngIf", "ngIfElse"], [1, "cx-tracking-id-link", 3, "click"], [1, "cx-consignment-status-date"]],
  template: function MyAccountV2ConsignmentTrackingComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275template(0, MyAccountV2ConsignmentTrackingComponent_div_0_Template, 7, 3, "div", 1);
    }
    if (rf & 2) {
      \u0275\u0275property("ngIf", ctx.consignment);
    }
  },
  dependencies: [NgIf, TranslatePipe, CxDatePipe],
  encapsulation: 2
});
var MyAccountV2ConsignmentTrackingComponent = _MyAccountV2ConsignmentTrackingComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MyAccountV2ConsignmentTrackingComponent, [{
    type: Component,
    args: [{
      selector: "cx-my-account-v2-consignment-tracking",
      template: `<div *ngIf="consignment" class="cx-list-status">
  <span>
    <span *ngIf="consignment.status">
      {{ 'orderDetails.deliveryStatus_' + consignment.status | cxTranslate }}
    </span>
    <span
      *ngIf="consignmentStatus.includes(consignment.status ?? '')"
      class="cx-item-list-tracking-id"
    >
      <span *ngIf="consignment.trackingID; else showNoTrackingMessage">
        {{
          'orderDetails.consignmentTracking.dialog.trackingId' | cxTranslate
        }}:
        <a
          class="cx-tracking-id-link"
          (click)="openTrackingDialog(consignment)"
        >
          {{ consignment.trackingID }}
        </a>
      </span>
    </span>
  </span>
  <span *ngIf="consignment?.statusDate" class="cx-consignment-status-date">
    {{ consignment.statusDate | cxDate }}
  </span>
  <ng-template #showNoTrackingMessage>
    <a class="cx-tracking-id-link" (click)="openTrackingDialog(consignment)">
      {{ 'orderDetails.consignmentTracking.action' | cxTranslate }}
    </a>
  </ng-template>
</div>
`
    }]
  }], null, {
    componentClass: [{
      type: HostBinding,
      args: ["className"]
    }]
  });
})();
var defaultConsignmentTrackingLayoutConfig = {
  launch: {
    CONSIGNMENT_TRACKING: {
      inlineRoot: true,
      component: TrackingEventsComponent,
      dialogType: DIALOG_TYPE.DIALOG
    }
  }
};
var _OrderDetailReorderComponent = class _OrderDetailReorderComponent {
  constructor(orderDetailsService, launchDialogService, vcr) {
    this.orderDetailsService = orderDetailsService;
    this.launchDialogService = launchDialogService;
    this.vcr = vcr;
    this.subscription = new Subscription();
  }
  ngOnInit() {
    this.order$ = this.orderDetailsService.getOrderDetails();
  }
  onReorderClick(order) {
    this.launchDialog(order.code);
  }
  launchDialog(orderCode) {
    const dialog = this.launchDialogService.openDialog("REORDER", this.element, this.vcr, {
      orderCode
    });
    if (dialog) {
      this.subscription.add(dialog.pipe(take(1)).subscribe());
    }
  }
  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
};
_OrderDetailReorderComponent.\u0275fac = function OrderDetailReorderComponent_Factory(t) {
  return new (t || _OrderDetailReorderComponent)(\u0275\u0275directiveInject(OrderDetailsService), \u0275\u0275directiveInject(LaunchDialogService), \u0275\u0275directiveInject(ViewContainerRef));
};
_OrderDetailReorderComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
  type: _OrderDetailReorderComponent,
  selectors: [["cx-order-details-reorder"]],
  viewQuery: function OrderDetailReorderComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(_c14, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.element = _t.first);
    }
  },
  decls: 2,
  vars: 3,
  consts: [["element", ""], [4, "ngIf"], [1, "cx-nav", "row"], [1, "col-xs-12", "col-md-10", "col-lg-8"], [1, "btn", "btn-primary", 3, "click"]],
  template: function OrderDetailReorderComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275template(0, OrderDetailReorderComponent_ng_container_0_Template, 2, 1, "ng-container", 1);
      \u0275\u0275pipe(1, "async");
    }
    if (rf & 2) {
      \u0275\u0275property("ngIf", \u0275\u0275pipeBind1(1, 1, ctx.order$));
    }
  },
  dependencies: [NgIf, AsyncPipe, TranslatePipe],
  encapsulation: 2,
  changeDetection: 0
});
var OrderDetailReorderComponent = _OrderDetailReorderComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OrderDetailReorderComponent, [{
    type: Component,
    args: [{
      selector: "cx-order-details-reorder",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: `<ng-container *ngIf="order$ | async as order">
  <ng-container *ngIf="order.code">
    <div class="cx-nav row">
      <div class="col-xs-12 col-md-10 col-lg-8">
        <button
          #element
          class="btn btn-primary"
          (click)="onReorderClick(order)"
        >
          {{ 'reorder.button' | cxTranslate }}
        </button>
      </div>
    </div>
  </ng-container>
</ng-container>
`
    }]
  }], () => [{
    type: OrderDetailsService
  }, {
    type: LaunchDialogService
  }, {
    type: ViewContainerRef
  }], {
    element: [{
      type: ViewChild,
      args: ["element"]
    }]
  });
})();
var _ReorderDialogComponent = class _ReorderDialogComponent {
  constructor(launchDialogService, reorderOrderFacade, multiCartFacade) {
    this.launchDialogService = launchDialogService;
    this.reorderOrderFacade = reorderOrderFacade;
    this.multiCartFacade = multiCartFacade;
    this.iconTypes = ICON_TYPE;
    this.focusConfig = {
      trap: true,
      block: true,
      autofocus: true,
      focusOnEscape: true
    };
    this.loading$ = new BehaviorSubject(false);
    this.showDecisionPrompt$ = new BehaviorSubject(true);
    this.data$ = this.launchDialogService.data$;
  }
  createCartFromOrder(orderCode) {
    this.showDecisionPrompt$.next(false);
    this.loading$.next(true);
    this.reorderOrderFacade.reorder(orderCode).subscribe((cartModificationList) => {
      this.multiCartFacade.reloadCart(OCC_CART_ID_CURRENT);
      this.cartModifications = cartModificationList.cartModifications;
      this.loading$.next(false);
    });
  }
  close(reason) {
    this.launchDialogService.closeDialog(reason);
  }
  get cartValidationStatusCode() {
    return CartValidationStatusCode;
  }
};
_ReorderDialogComponent.\u0275fac = function ReorderDialogComponent_Factory(t) {
  return new (t || _ReorderDialogComponent)(\u0275\u0275directiveInject(LaunchDialogService), \u0275\u0275directiveInject(ReorderOrderFacade), \u0275\u0275directiveInject(MultiCartFacade));
};
_ReorderDialogComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
  type: _ReorderDialogComponent,
  selectors: [["cx-reorder-dialog"]],
  decls: 14,
  vars: 11,
  consts: [["result", ""], ["loading", ""], ["cartResponse", ""], ["errorIcon", ""], [1, "cx-modal-container", 3, "esc", "cxFocus"], [1, "cx-modal-content"], [1, "cx-dialog-header", "modal-header"], [1, "cx-dialog-title", "modal-title"], ["type", "button", 1, "close", 3, "click"], ["aria-hidden", "true"], [3, "type"], [1, "cx-dialog-body", "modal-body"], [4, "ngIf"], [4, "ngIf", "ngIfElse"], [1, "cx-reorder-dialog-areyousure-section"], [1, "cx-reorder-dialog-footer"], [1, "row"], [1, "col-12"], [1, "btn", "btn-action", 3, "click"], [1, "btn", "btn-primary", 3, "click"], [1, "cx-cart-mod-entry-container"], [1, "alert-icon"], [1, "success", 3, "type"], ["class", "cx-cart-mod-entry-container", 4, "ngFor", "ngForOf"], [1, "warning", 3, "type"], [1, "error", 3, "type"], [1, "cx-spinner"]],
  template: function ReorderDialogComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 4);
      \u0275\u0275listener("esc", function ReorderDialogComponent_Template_div_esc_0_listener() {
        return ctx.close("Escape clicked");
      });
      \u0275\u0275elementStart(1, "div", 5);
      \u0275\u0275elementContainerStart(2);
      \u0275\u0275elementStart(3, "div", 6)(4, "div", 7);
      \u0275\u0275text(5);
      \u0275\u0275pipe(6, "cxTranslate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "button", 8);
      \u0275\u0275pipe(8, "cxTranslate");
      \u0275\u0275listener("click", function ReorderDialogComponent_Template_button_click_7_listener() {
        return ctx.close("Close reorder result dialog");
      });
      \u0275\u0275elementStart(9, "span", 9);
      \u0275\u0275element(10, "cx-icon", 10);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementContainerEnd();
      \u0275\u0275elementStart(11, "div", 11);
      \u0275\u0275template(12, ReorderDialogComponent_ng_container_12_Template, 5, 4, "ng-container", 12);
      \u0275\u0275pipe(13, "async");
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275property("cxFocus", ctx.focusConfig);
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(6, 5, "reorder.dialog.reorderProducts"), " ");
      \u0275\u0275advance(2);
      \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(8, 7, "addToCart.closeModal"));
      \u0275\u0275advance(3);
      \u0275\u0275property("type", ctx.iconTypes.CLOSE);
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", \u0275\u0275pipeBind1(13, 9, ctx.data$));
    }
  },
  dependencies: [NgForOf, NgIf, SpinnerComponent, FocusDirective, IconComponent, AsyncPipe, TranslatePipe],
  encapsulation: 2,
  changeDetection: 0
});
var ReorderDialogComponent = _ReorderDialogComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ReorderDialogComponent, [{
    type: Component,
    args: [{
      selector: "cx-reorder-dialog",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: `<div
  [cxFocus]="focusConfig"
  (esc)="close('Escape clicked')"
  class="cx-modal-container"
>
  <div class="cx-modal-content">
    <ng-container>
      <div class="cx-dialog-header modal-header">
        <div class="cx-dialog-title modal-title">
          {{ 'reorder.dialog.reorderProducts' | cxTranslate }}
        </div>
        <button
          type="button"
          class="close"
          attr.aria-label="{{ 'addToCart.closeModal' | cxTranslate }}"
          (click)="close('Close reorder result dialog')"
        >
          <span aria-hidden="true">
            <cx-icon [type]="iconTypes.CLOSE"></cx-icon>
          </span>
        </button>
      </div>
    </ng-container>

    <!-- Modal Body -->
    <div class="cx-dialog-body modal-body">
      <ng-container *ngIf="data$ | async as data">
        <ng-container *ngIf="showDecisionPrompt$ | async; else result">
          <div class="cx-reorder-dialog-areyousure-section">
            <p>
              {{ 'reorder.dialog.areYouSureToReplaceCart' | cxTranslate }}
            </p>
            <div class="cx-reorder-dialog-footer">
              <div class="row">
                <div class="col-12">
                  <button
                    class="btn btn-action"
                    (click)="close('Cancel creating cart from order')"
                  >
                    {{ 'reorder.dialog.cancel' | cxTranslate }}
                  </button>
                  <button
                    class="btn btn-primary"
                    (click)="createCartFromOrder(data.orderCode)"
                  >
                    {{ 'reorder.dialog.continue' | cxTranslate }}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </ng-container>
        <ng-template #result>
          <ng-container *ngIf="!(loading$ | async); else loading">
            <p>
              <ng-container
                *ngIf="!cartModifications?.length; else cartResponse"
              >
                <span class="cx-cart-mod-entry-container">
                  <span class="alert-icon">
                    <cx-icon
                      class="success"
                      [type]="iconTypes.SUCCESS"
                    ></cx-icon>
                  </span>
                  {{ 'reorder.dialog.messages.success' | cxTranslate }}
                </span>
              </ng-container>
              <ng-template #cartResponse>
                <span
                  *ngFor="let cartModification of cartModifications"
                  class="cx-cart-mod-entry-container"
                >
                  <ng-container
                    *ngIf="
                      cartModification.statusCode ===
                        cartValidationStatusCode.LOW_STOCK;
                      else errorIcon
                    "
                  >
                    <span class="alert-icon">
                      <cx-icon
                        class="warning"
                        [type]="iconTypes.INFO"
                      ></cx-icon>
                    </span>
                  </ng-container>
                  <ng-template #errorIcon>
                    <span class="alert-icon">
                      <cx-icon class="error" [type]="iconTypes.ERROR"></cx-icon>
                    </span>
                  </ng-template>
                  <span>
                    {{
                      'reorder.dialog.messages.' + cartModification.statusCode
                        | cxTranslate
                          : {
                              quantity: cartModification.quantity,
                              quantityAdded: cartModification.quantityAdded,
                              productCode: cartModification.entry.product.code,
                              productName: cartModification.entry.product.name
                            }
                    }}
                  </span>
                </span>
              </ng-template>
            </p>
          </ng-container>
          <ng-template #loading>
            <div class="cx-spinner">
              <cx-spinner></cx-spinner>
            </div>
          </ng-template>
        </ng-template>
      </ng-container>
    </div>
  </div>
</div>
`
    }]
  }], () => [{
    type: LaunchDialogService
  }, {
    type: ReorderOrderFacade
  }, {
    type: MultiCartFacade
  }], null);
})();
var _OrderDetailTotalsComponent = class _OrderDetailTotalsComponent {
  constructor(orderDetailsService) {
    this.orderDetailsService = orderDetailsService;
    this.CartOutlets = CartOutlets;
  }
  ngOnInit() {
    this.order$ = this.orderDetailsService.getOrderDetails();
  }
};
_OrderDetailTotalsComponent.\u0275fac = function OrderDetailTotalsComponent_Factory(t) {
  return new (t || _OrderDetailTotalsComponent)(\u0275\u0275directiveInject(OrderDetailsService));
};
_OrderDetailTotalsComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
  type: _OrderDetailTotalsComponent,
  selectors: [["cx-order-details-totals"]],
  decls: 2,
  vars: 3,
  consts: [[4, "ngIf"], [1, "row", "justify-content-end"], [1, "cx-summary", "col-sm-12", "col-md-6", "col-lg-5", "col-xl-4"], [3, "cxOutlet", "cxOutletContext"]],
  template: function OrderDetailTotalsComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275template(0, OrderDetailTotalsComponent_ng_container_0_Template, 4, 2, "ng-container", 0);
      \u0275\u0275pipe(1, "async");
    }
    if (rf & 2) {
      \u0275\u0275property("ngIf", \u0275\u0275pipeBind1(1, 1, ctx.order$));
    }
  },
  dependencies: [NgIf, OutletDirective, AsyncPipe],
  encapsulation: 2
});
var OrderDetailTotalsComponent = _OrderDetailTotalsComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OrderDetailTotalsComponent, [{
    type: Component,
    args: [{
      selector: "cx-order-details-totals",
      template: '<ng-container *ngIf="order$ | async as order">\n  <div class="row justify-content-end">\n    <div class="cx-summary col-sm-12 col-md-6 col-lg-5 col-xl-4">\n      <ng-template\n        [cxOutlet]="CartOutlets.ORDER_SUMMARY"\n        [cxOutletContext]="order"\n      >\n      </ng-template>\n    </div>\n  </div>\n</ng-container>\n'
    }]
  }], () => [{
    type: OrderDetailsService
  }], null);
})();
var defaultReorderLayoutConfig = {
  launch: {
    REORDER: {
      inline: true,
      component: ReorderDialogComponent,
      dialogType: DIALOG_TYPE.DIALOG
    }
  }
};
function registerOrderOutletFactory() {
  const isMyAccountV2 = inject(USE_MY_ACCOUNT_V2_ORDER);
  const outletService = inject(OutletService);
  const componentFactoryResolver = inject(ComponentFactoryResolver$1);
  return () => {
    const config = {
      component: MyAccountV2ConsignmentTrackingComponent,
      id: OrderOutlets.ORDER_CONSIGNMENT,
      position: OutletPosition.REPLACE
    };
    if (isMyAccountV2) {
      const template = componentFactoryResolver.resolveComponentFactory(config.component);
      outletService.add(config.id, template, config.position);
    }
  };
}
var myAccountV2CmsMapping$1 = {
  cmsComponents: {
    AccountOrderDetailsActionsComponent: {
      component: MyAccountV2OrderDetailsActionsComponent
      //guards: inherited from standard config,
    }
  }
};
var moduleComponents$2 = [OrderOverviewComponent, OrderDetailActionsComponent, OrderDetailItemsComponent, OrderDetailTotalsComponent, OrderDetailBillingComponent, TrackingEventsComponent, ConsignmentTrackingComponent, OrderConsignedEntriesComponent, OrderDetailReorderComponent, ReorderDialogComponent, MyAccountV2OrderDetailsActionsComponent, MyAccountV2ConsignmentTrackingComponent];
var _OrderDetailsModule = class _OrderDetailsModule {
};
_OrderDetailsModule.\u0275fac = function OrderDetailsModule_Factory(t) {
  return new (t || _OrderDetailsModule)();
};
_OrderDetailsModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
  type: _OrderDetailsModule
});
_OrderDetailsModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
  providers: [provideDefaultConfig({
    cmsComponents: {
      AccountOrderDetailsActionsComponent: {
        component: OrderDetailActionsComponent,
        guards: [AuthGuard]
      },
      AccountOrderDetailsItemsComponent: {
        component: OrderDetailItemsComponent,
        guards: [AuthGuard],
        data: {
          enableAddToCart: true
        }
      },
      AccountOrderDetailsGroupedItemsComponent: {
        component: OrderDetailItemsComponent,
        guards: [AuthGuard],
        data: {
          enableAddToCart: true,
          groupCartItems: true
        }
      },
      AccountOrderDetailsTotalsComponent: {
        component: OrderDetailTotalsComponent,
        guards: [AuthGuard]
      },
      AccountOrderDetailsOverviewComponent: {
        component: OrderOverviewComponent,
        guards: [AuthGuard]
      },
      AccountOrderDetailsSimpleOverviewComponent: {
        component: OrderOverviewComponent,
        guards: [AuthGuard],
        data: {
          simple: true
        }
      },
      AccountOrderDetailsReorderComponent: {
        component: OrderDetailReorderComponent,
        guards: [AuthGuard]
      }
    },
    features: {
      consignmentTracking: "1.2"
    }
  }), provideDefaultConfig(defaultConsignmentTrackingLayoutConfig), provideDefaultConfig(defaultReorderLayoutConfig), provideDefaultConfigFactory(() => inject(USE_MY_ACCOUNT_V2_ORDER) ? myAccountV2CmsMapping$1 : {}), {
    provide: MODULE_INITIALIZER,
    useFactory: registerOrderOutletFactory,
    multi: true
  }],
  imports: [CardModule, CommonModule, I18nModule, FeaturesConfigModule, PromotionsModule, UrlModule, SpinnerModule, RouterModule, OutletModule, AddToCartModule, KeyboardFocusModule, IconModule, MyAccountV2DownloadInvoicesModule]
});
var OrderDetailsModule = _OrderDetailsModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OrderDetailsModule, [{
    type: NgModule,
    args: [{
      imports: [CardModule, CommonModule, I18nModule, FeaturesConfigModule, PromotionsModule, UrlModule, SpinnerModule, RouterModule, OutletModule, AddToCartModule, KeyboardFocusModule, IconModule, MyAccountV2DownloadInvoicesModule],
      providers: [provideDefaultConfig({
        cmsComponents: {
          AccountOrderDetailsActionsComponent: {
            component: OrderDetailActionsComponent,
            guards: [AuthGuard]
          },
          AccountOrderDetailsItemsComponent: {
            component: OrderDetailItemsComponent,
            guards: [AuthGuard],
            data: {
              enableAddToCart: true
            }
          },
          AccountOrderDetailsGroupedItemsComponent: {
            component: OrderDetailItemsComponent,
            guards: [AuthGuard],
            data: {
              enableAddToCart: true,
              groupCartItems: true
            }
          },
          AccountOrderDetailsTotalsComponent: {
            component: OrderDetailTotalsComponent,
            guards: [AuthGuard]
          },
          AccountOrderDetailsOverviewComponent: {
            component: OrderOverviewComponent,
            guards: [AuthGuard]
          },
          AccountOrderDetailsSimpleOverviewComponent: {
            component: OrderOverviewComponent,
            guards: [AuthGuard],
            data: {
              simple: true
            }
          },
          AccountOrderDetailsReorderComponent: {
            component: OrderDetailReorderComponent,
            guards: [AuthGuard]
          }
        },
        features: {
          consignmentTracking: "1.2"
        }
      }), provideDefaultConfig(defaultConsignmentTrackingLayoutConfig), provideDefaultConfig(defaultReorderLayoutConfig), provideDefaultConfigFactory(() => inject(USE_MY_ACCOUNT_V2_ORDER) ? myAccountV2CmsMapping$1 : {}), {
        provide: MODULE_INITIALIZER,
        useFactory: registerOrderOutletFactory,
        multi: true
      }],
      declarations: [...moduleComponents$2],
      exports: [...moduleComponents$2]
    }]
  }], null, null);
})();
var _OrderHistoryComponent = class _OrderHistoryComponent {
  constructor(routing, orderHistoryFacade, translation, replenishmentOrderHistoryFacade) {
    this.routing = routing;
    this.orderHistoryFacade = orderHistoryFacade;
    this.translation = translation;
    this.replenishmentOrderHistoryFacade = replenishmentOrderHistoryFacade;
    this.PAGE_SIZE = 5;
    this.orders$ = this.orderHistoryFacade.getOrderHistoryList(this.PAGE_SIZE).pipe(tap((orders) => {
      this.setOrderHistoryParams(orders);
    }));
    this.hasReplenishmentOrder$ = this.replenishmentOrderHistoryFacade.getReplenishmentOrderDetails().pipe(map((order) => order && Object.keys(order).length !== 0));
    this.isLoaded$ = this.orderHistoryFacade.getOrderHistoryListLoaded();
    this.tabTitleParam$ = this.orders$.pipe(map((order) => order?.pagination?.totalResults), filter(isNotUndefined), take(1));
  }
  setOrderHistoryParams(orders) {
    if (orders?.pagination?.sort) {
      this.sortType = orders.pagination.sort;
    }
    this.hasPONumber = orders?.orders?.[0]?.purchaseOrderNumber !== void 0;
  }
  ngOnDestroy() {
    this.orderHistoryFacade.clearOrderList();
  }
  changeSortCode(sortCode) {
    const event = {
      sortCode,
      currentPage: 0
    };
    this.sortType = sortCode;
    this.fetchOrders(event);
  }
  pageChange(page) {
    const event = {
      sortCode: this.sortType,
      currentPage: page
    };
    this.fetchOrders(event);
  }
  goToOrderDetail(order) {
    this.routing.go({
      cxRoute: "orderDetails",
      params: order
    });
  }
  getSortLabels() {
    return combineLatest([this.translation.translate("sorting.date"), this.translation.translate("sorting.orderNumber")]).pipe(map(([textByDate, textByOrderNumber]) => {
      return {
        byDate: textByDate,
        byOrderNumber: textByOrderNumber
      };
    }));
  }
  fetchOrders(event) {
    this.orderHistoryFacade.loadOrderList(this.PAGE_SIZE, event.currentPage, event.sortCode);
  }
};
_OrderHistoryComponent.\u0275fac = function OrderHistoryComponent_Factory(t) {
  return new (t || _OrderHistoryComponent)(\u0275\u0275directiveInject(RoutingService), \u0275\u0275directiveInject(OrderHistoryFacade), \u0275\u0275directiveInject(TranslationService), \u0275\u0275directiveInject(ReplenishmentOrderHistoryFacade));
};
_OrderHistoryComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
  type: _OrderHistoryComponent,
  selectors: [["cx-order-history"]],
  decls: 3,
  vars: 8,
  consts: [["noOrder", ""], ["otherOrder", ""], [4, "ngIf"], [3, "ngClass"], [1, "cx-order-history-body"], [4, "ngIf", "ngIfElse"], [1, "cx-order-history-sort", "top"], [1, "cx-order-history-form-group", "form-group"], ["ariaControls", "order-history-table", 3, "sortListEvent", "sortOptions", "sortLabels", "selectedOption", "placeholder", "ariaLabel"], ["class", "cx-order-history-pagination", 4, "ngIf"], ["role", "table", "id", "order-history-table", 1, "table", "cx-order-history-table", 3, "ngClass"], [1, "cx-visually-hidden"], [1, "cx-order-history-thead-mobile"], ["role", "row"], ["role", "columnheader"], ["role", "row", 3, "click", 4, "ngFor", "ngForOf"], [1, "cx-order-history-sort", "bottom"], [1, "cx-order-history-pagination"], [3, "viewPageEvent", "pagination"], ["role", "row", 3, "click"], ["role", "cell", 1, "cx-order-history-code"], [1, "cx-order-history-label"], [1, "cx-order-history-value", 3, "routerLink"], ["role", "cell", 1, "cx-order-history-placed"], ["role", "cell", 1, "cx-order-history-status"], ["role", "cell", 1, "cx-order-history-total"], ["role", "cell", 1, "cx-order-history-po"], ["class", "cx-order-history-value", 3, "routerLink", 4, "ngIf"], ["role", "cell", 1, "cx-order-history-cost-center"], [3, "ngClass", 4, "ngIf"], ["routerLinkActive", "active", 1, "btn", "btn-primary", "btn-block", 3, "routerLink"]],
  template: function OrderHistoryComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275template(0, OrderHistoryComponent_ng_container_0_Template, 2, 1, "ng-container", 2);
      \u0275\u0275pipe(1, "async");
      \u0275\u0275pipe(2, "async");
    }
    if (rf & 2) {
      \u0275\u0275property("ngIf", \u0275\u0275pureFunction2(5, _c20, \u0275\u0275pipeBind1(1, 1, ctx.orders$), \u0275\u0275pipeBind1(2, 3, ctx.hasReplenishmentOrder$)));
    }
  },
  dependencies: [NgClass, NgForOf, NgIf, RouterLink, RouterLinkActive, SortingComponent, PaginationComponent, AsyncPipe, UrlPipe, TranslatePipe, CxDatePipe],
  encapsulation: 2,
  changeDetection: 0
});
var OrderHistoryComponent = _OrderHistoryComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OrderHistoryComponent, [{
    type: Component,
    args: [{
      selector: "cx-order-history",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: `<ng-container
  *ngIf="{
    orderHistory: orders$ | async,
    replenishmentOrder: hasReplenishmentOrder$ | async
  } as type"
>
  <ng-container *ngIf="type.orderHistory">
    <div>
      <!-- HEADER -->
      <div
        [ngClass]="
          type.replenishmentOrder
            ? 'cx-replenishment-details-order-history-header'
            : 'cx-order-history-header'
        "
      >
        <h4 *ngIf="type.replenishmentOrder">
          {{ 'orderHistory.replenishmentHistory' | cxTranslate }}
        </h4>
        <h2 *ngIf="!type.replenishmentOrder">
          {{ 'orderHistory.orderHistory' | cxTranslate }}
        </h2>
      </div>

      <!-- BODY -->
      <div class="cx-order-history-body">
        <ng-container
          *ngIf="type.orderHistory.pagination.totalResults > 0; else noOrder"
        >
          <!-- Select Form and Pagination Top -->
          <div class="cx-order-history-sort top">
            <label class="cx-order-history-form-group form-group"
              ><span>
                {{ 'orderHistory.sortBy' | cxTranslate }}
              </span>
              <cx-sorting
                [sortOptions]="type.orderHistory.sorts"
                [sortLabels]="getSortLabels() | async"
                (sortListEvent)="changeSortCode($event)"
                [selectedOption]="type.orderHistory.pagination.sort"
                placeholder="{{ 'orderHistory.sortBy' | cxTranslate }}"
                [ariaLabel]="'orderHistory.sortOrders' | cxTranslate"
                ariaControls="order-history-table"
              ></cx-sorting>
            </label>
            <div
              *ngIf="type.orderHistory.pagination.totalPages > 1"
              class="cx-order-history-pagination"
            >
              <cx-pagination
                [pagination]="type.orderHistory.pagination"
                (viewPageEvent)="pageChange($event)"
              ></cx-pagination>
            </div>
          </div>

          <table
            role="table"
            id="order-history-table"
            class="table cx-order-history-table"
            [ngClass]="{ 'cx-order-history-table-po': hasPONumber }"
          >
            <caption class="cx-visually-hidden">
              {{
                'orderHistory.orderHistory' | cxTranslate
              }}
            </caption>
            <thead class="cx-order-history-thead-mobile">
              <tr role="row">
                <th role="columnheader">
                  {{ 'orderHistory.orderId' | cxTranslate }}
                </th>
                <ng-container *ngIf="hasPONumber">
                  <th role="columnheader">
                    {{ 'orderHistory.PONumber' | cxTranslate }}
                  </th>
                  <th role="columnheader">
                    {{ 'orderHistory.costCenter' | cxTranslate }}
                  </th>
                </ng-container>
                <th role="columnheader">
                  {{ 'orderHistory.date' | cxTranslate }}
                </th>
                <th role="columnheader">
                  {{ 'orderHistory.status' | cxTranslate }}
                </th>
                <th role="columnheader">
                  {{ 'orderHistory.total' | cxTranslate }}
                </th>
              </tr>
            </thead>
            <tbody>
              <tr
                role="row"
                *ngFor="let order of type.orderHistory.orders"
                (click)="goToOrderDetail(order)"
              >
                <td role="cell" class="cx-order-history-code">
                  <div class="cx-order-history-label">
                    {{ 'orderHistory.orderId' | cxTranslate }}
                  </div>
                  <a
                    [routerLink]="
                      {
                        cxRoute: 'orderDetails',
                        params: order
                      } | cxUrl
                    "
                    class="cx-order-history-value"
                  >
                    {{ order?.code }}</a
                  >
                </td>
                <ng-container *ngIf="hasPONumber">
                  <td role="cell" class="cx-order-history-po">
                    <div class="cx-order-history-label">
                      {{ 'orderHistory.PONumber' | cxTranslate }}
                    </div>
                    <a
                      *ngIf="order.purchaseOrderNumber"
                      [routerLink]="
                        {
                          cxRoute: 'orderDetails',
                          params: order
                        } | cxUrl
                      "
                      class="cx-order-history-value"
                    >
                      {{ order.purchaseOrderNumber }}</a
                    >
                  </td>
                  <td role="cell" class="cx-order-history-cost-center">
                    <div class="cx-order-history-label">
                      {{ 'orderHistory.costCenter' | cxTranslate }}
                    </div>
                    <a
                      *ngIf="order.costCenter?.name"
                      [routerLink]="
                        {
                          cxRoute: 'orderDetails',
                          params: order
                        } | cxUrl
                      "
                      class="cx-order-history-value"
                    >
                      {{ order.costCenter?.name }}</a
                    >
                  </td>
                </ng-container>

                <td role="cell" class="cx-order-history-placed">
                  <div class="cx-order-history-label">
                    {{ 'orderHistory.date' | cxTranslate }}
                  </div>
                  <a
                    [routerLink]="
                      {
                        cxRoute: 'orderDetails',
                        params: order
                      } | cxUrl
                    "
                    class="cx-order-history-value"
                    >{{ order?.placed | cxDate: 'longDate' }}</a
                  >
                </td>
                <td role="cell" class="cx-order-history-status">
                  <div class="cx-order-history-label">
                    {{ 'orderHistory.status' | cxTranslate }}
                  </div>
                  <a
                    [routerLink]="
                      {
                        cxRoute: 'orderDetails',
                        params: order
                      } | cxUrl
                    "
                    class="cx-order-history-value"
                  >
                    {{
                      'orderDetails.statusDisplay_' + order?.statusDisplay
                        | cxTranslate
                    }}</a
                  >
                </td>
                <td role="cell" class="cx-order-history-total">
                  <div class="cx-order-history-label">
                    {{ 'orderHistory.total' | cxTranslate }}
                  </div>
                  <a
                    [routerLink]="
                      {
                        cxRoute: 'orderDetails',
                        params: order
                      } | cxUrl
                    "
                    class="cx-order-history-value"
                  >
                    {{ order?.total.formattedValue }}</a
                  >
                </td>
              </tr>
            </tbody>
          </table>

          <!-- Select Form and Pagination Bottom -->
          <div class="cx-order-history-sort bottom">
            <div
              *ngIf="type.orderHistory.pagination.totalPages > 1"
              class="cx-order-history-pagination"
            >
              <cx-pagination
                [pagination]="type.orderHistory.pagination"
                (viewPageEvent)="pageChange($event)"
              ></cx-pagination>
            </div>
          </div>
        </ng-container>

        <!-- NO ORDER CONTAINER -->
        <ng-template #noOrder>
          <div
            *ngIf="isLoaded$ | async"
            [ngClass]="
              type.replenishmentOrder
                ? 'cx-replenishment-details-order-history-no-order'
                : 'cx-order-history-no-order'
            "
          >
            <div>
              <ng-container *ngIf="type.replenishmentOrder; else otherOrder">
                <div>{{ 'orderHistory.notFound' | cxTranslate }}</div>
              </ng-container>

              <ng-template #otherOrder>
                <div>{{ 'orderHistory.noOrders' | cxTranslate }}</div>
                <a
                  [routerLink]="{ cxRoute: 'home' } | cxUrl"
                  routerLinkActive="active"
                  class="btn btn-primary btn-block"
                  >{{ 'orderHistory.startShopping' | cxTranslate }}</a
                >
              </ng-template>
            </div>
          </div>
        </ng-template>
      </div>
    </div>
  </ng-container>
</ng-container>
`
    }]
  }], () => [{
    type: RoutingService
  }, {
    type: OrderHistoryFacade
  }, {
    type: TranslationService
  }, {
    type: ReplenishmentOrderHistoryFacade
  }], null);
})();
var OrderCriticalStatus;
(function(OrderCriticalStatus2) {
  OrderCriticalStatus2["CANCELLED"] = "CANCELLED";
  OrderCriticalStatus2["ERROR"] = "ERROR";
  OrderCriticalStatus2["REJECTED"] = "REJECTED";
})(OrderCriticalStatus || (OrderCriticalStatus = {}));
var _MyAccountV2ConsignmentEntriesComponent = class _MyAccountV2ConsignmentEntriesComponent {
  getConsignmentNumber(code) {
    if (code) {
      const consignmentNumber = Number(code.split("_")[1]);
      if (!isNaN(consignmentNumber)) {
        return (consignmentNumber + 1).toString();
      }
    }
    return code;
  }
};
_MyAccountV2ConsignmentEntriesComponent.\u0275fac = function MyAccountV2ConsignmentEntriesComponent_Factory(t) {
  return new (t || _MyAccountV2ConsignmentEntriesComponent)();
};
_MyAccountV2ConsignmentEntriesComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
  type: _MyAccountV2ConsignmentEntriesComponent,
  selectors: [["cx-my-account-v2-consignment-entries"]],
  inputs: {
    consignments: "consignments",
    orderCode: "orderCode"
  },
  decls: 1,
  vars: 1,
  consts: [["showLastUpdated", ""], ["showNumber", ""], [4, "ngFor", "ngForOf"], ["class", "cx-consignment-info", 4, "ngIf"], [1, "cx-consignment-info"], [4, "ngIf", "ngIfElse"], [4, "ngIf"], ["target", "_blank", "rel", "noopener noreferrer", 1, "cx-tracking-id", 3, "href"]],
  template: function MyAccountV2ConsignmentEntriesComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275template(0, MyAccountV2ConsignmentEntriesComponent_ng_container_0_Template, 2, 1, "ng-container", 2);
    }
    if (rf & 2) {
      \u0275\u0275property("ngForOf", ctx.consignments);
    }
  },
  dependencies: [NgForOf, NgIf, TranslatePipe, CxDatePipe],
  encapsulation: 2,
  changeDetection: 0
});
var MyAccountV2ConsignmentEntriesComponent = _MyAccountV2ConsignmentEntriesComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MyAccountV2ConsignmentEntriesComponent, [{
    type: Component,
    args: [{
      selector: "cx-my-account-v2-consignment-entries",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: `<ng-container *ngFor="let consignment of consignments; index as i">
  <!--
example:
Consignment 1 | In Process | Last Updated: 13, September, 2023
Consignment 2 | Tracking Number: 5657474 | Estimated Delivery: 22, September, 2023
  -->
  <div
    class="cx-consignment-info"
    [attr.aria-label]="
      'myAccountV2OrderHistory.consignmentDetailLabel' | cxTranslate
    "
    *ngIf="consignment"
  >
    <span
      [attr.aria-label]="
        'myAccountV2OrderHistory.consignmentNumberLabel' | cxTranslate
      "
    >
      {{
        'myAccountV2OrderHistory.consignmentCode'
          | cxTranslate: { param: i + 1 }
      }}
    </span>
    |
    <ng-container *ngIf="consignment.trackingID; else showLastUpdated">
      <ng-container *ngIf="consignment.consignmentTracking as tracking">
        <span
          [attr.aria-label]="
            'orderDetails.consignmentTracking.dialog.trackingId' | cxTranslate
          "
        >
          {{
            'orderDetails.consignmentTracking.dialog.trackingId' | cxTranslate
          }}:
          <ng-container *ngIf="tracking.trackingUrl; else showNumber">
            <a
              class="cx-tracking-id"
              target="_blank"
              rel="noopener noreferrer"
              [href]="tracking.trackingUrl"
              >{{ tracking.trackingID }}</a
            >
          </ng-container>
          |
        </span>
        <span
          [attr.aria-label]="
            'myAccountV2OrderHistory.estimateDeliveryLabel' | cxTranslate
          "
        >
          {{
            'orderDetails.consignmentTracking.dialog.estimate' | cxTranslate
          }}:
          {{ tracking.targetArrivalDate | cxDate: 'd, MMMM, yyyy' }}
        </span>
        <ng-template #showNumber>
          {{ tracking.trackingID }}
        </ng-template>
      </ng-container>
    </ng-container>
    <ng-template #showLastUpdated>
      <span
        [attr.aria-label]="
          'myAccountV2OrderHistory.consignmentStatusLabel' | cxTranslate
        "
        *ngIf="consignment.status"
      >
        {{
          'orderDetails.deliveryStatus_' + consignment?.status?.toUpperCase()
            | cxTranslate
        }}
      </span>
      <span
        *ngIf="consignment.statusDate"
        [attr.aria-label]="
          'myAccountV2OrderHistory.consignmentStatusDateLabel' | cxTranslate
        "
      >
        |
        {{
          'myAccountV2OrderHistory.statusDate'
            | cxTranslate
              : { param: consignment.statusDate | cxDate: 'd, MMMM, yyyy' }
        }}
      </span>
    </ng-template>
  </div>
</ng-container>
`
    }]
  }], null, {
    consignments: [{
      type: Input
    }],
    orderCode: [{
      type: Input
    }]
  });
})();
var _MyAccountV2OrderConsolidatedInformationComponent = class _MyAccountV2OrderConsolidatedInformationComponent {
  constructor() {
    this.orderConsignmentsService = inject(MyAccountV2OrderConsignmentsService);
    this.criticalStatuses = Object.values(OrderCriticalStatus);
    this.IMAGE_COUNT = 4;
  }
  getConsignmentsCount(consignments) {
    let count = 0;
    if (consignments) {
      for (const consignment of consignments) {
        if (consignment.entries) {
          count = count + consignment.entries.length;
        }
      }
    }
    return count;
  }
  getOrderEntriesCount(orderEntries) {
    return orderEntries?.length ?? 0;
  }
  isStatusCritical(status) {
    return this.criticalStatuses.includes(status.toUpperCase());
  }
  getPickupConsignments(consignments) {
    const orderDetail = {};
    orderDetail.consignments = consignments;
    return this.orderConsignmentsService.getGroupedConsignments(orderDetail, true) ?? [];
  }
  getDeliveryConsignments(consignments) {
    const orderDetail = {};
    orderDetail.consignments = consignments;
    return this.orderConsignmentsService.getGroupedConsignments(orderDetail, false) ?? [];
  }
  getDeliveryUnconsignedEntries(unconsignedEntries) {
    const orderDetail = {};
    orderDetail.unconsignedEntries = unconsignedEntries;
    return this.orderConsignmentsService.getUnconsignedEntries(orderDetail, false) ?? [];
  }
  getPickupUnconsignedEntries(unconsignedEntries) {
    const orderDetail = {};
    orderDetail.unconsignedEntries = unconsignedEntries;
    return this.orderConsignmentsService.getUnconsignedEntries(orderDetail, true) ?? [];
  }
  getProductImages(entries) {
    const images = [];
    let index = 0;
    for (const item of entries) {
      if (item.product?.images) {
        if (index >= this.IMAGE_COUNT) {
          break;
        }
        index++;
        images.push(item.product?.images);
      }
    }
    return images;
  }
};
_MyAccountV2OrderConsolidatedInformationComponent.\u0275fac = function MyAccountV2OrderConsolidatedInformationComponent_Factory(t) {
  return new (t || _MyAccountV2OrderConsolidatedInformationComponent)();
};
_MyAccountV2OrderConsolidatedInformationComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
  type: _MyAccountV2OrderConsolidatedInformationComponent,
  selectors: [["cx-my-account-v2-order-consolidated-information"]],
  inputs: {
    order: "order"
  },
  decls: 5,
  vars: 1,
  consts: [["showManyItems", ""], ["showOneItem", ""], ["nonCritical", ""], ["showReturnCode", ""], ["class", "cx-consolidated-order-info", 4, "ngIf"], [1, "cx-consolidated-order-info"], [1, "cx-order-info"], [4, "ngIf"], [4, "ngFor", "ngForOf"], [1, "cx-order-images-container"], [1, "cx-order-status"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [3, "orderCode", "consignments"], ["class", "cx-consignment-info", 4, "ngIf"], ["class", "cx-order-status-critical", 4, "ngIf", "ngIfElse"], [1, "cx-order-status-critical"], [1, "cx-consignment-info"], ["class", "cx-order-status-critical-link", 3, "routerLink", 4, "ngIf", "ngIfElse"], [1, "cx-order-status-critical-link", 3, "routerLink"], ["format", "thumbnail", "role", "presentation", 1, "cx-order-img", 3, "container"], [4, "ngIf", "ngIfElse"]],
  template: function MyAccountV2OrderConsolidatedInformationComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275template(0, MyAccountV2OrderConsolidatedInformationComponent_div_0_Template, 8, 7, "div", 4)(1, MyAccountV2OrderConsolidatedInformationComponent_ng_template_1_Template, 1, 2, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(3, MyAccountV2OrderConsolidatedInformationComponent_ng_template_3_Template, 2, 5, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
    }
    if (rf & 2) {
      \u0275\u0275property("ngIf", ctx.order);
    }
  },
  dependencies: [NgForOf, NgIf, NgTemplateOutlet, RouterLink, MediaComponent, MyAccountV2ConsignmentEntriesComponent, UrlPipe, TranslatePipe, CxDatePipe],
  encapsulation: 2,
  changeDetection: 0
});
var MyAccountV2OrderConsolidatedInformationComponent = _MyAccountV2OrderConsolidatedInformationComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MyAccountV2OrderConsolidatedInformationComponent, [{
    type: Component,
    args: [{
      selector: "cx-my-account-v2-order-consolidated-information",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: `<div class="cx-consolidated-order-info" *ngIf="order">
  <div class="cx-order-info">
    <!-- pickup consigned entries 
  eg: To Be Picked Up - 3 Items
  -->
    <div
      *ngIf="
        getConsignmentsCount(getPickupConsignments(order.consignments ?? [])) >
        0
      "
    >
      <div class="cx-order-status">
        {{
          'myAccountV2OrderHistory.deliveryPointOfServiceDetails.itemsToBePickUp'
            | cxTranslate
        }}
        <ng-container
          *ngTemplateOutlet="
            showManyItems;
            context: {
              count: getConsignmentsCount(
                getPickupConsignments(order.consignments ?? [])
              )
            }
          "
        ></ng-container>
      </div>
      <cx-my-account-v2-consignment-entries
        [orderCode]="order.code ?? ''"
        [consignments]="getPickupConsignments(order.consignments ?? [])"
      ></cx-my-account-v2-consignment-entries>
    </div>

    <!-- delivery consigned entries
  eg: To Be Shipped - 6 Items
  -->
    <div
      *ngIf="
        getConsignmentsCount(
          getDeliveryConsignments(order.consignments ?? [])
        ) > 0
      "
    >
      <!--heading taken from feature-libs/order/components/order-confirmation/order-confirmation-shipping/order-confirmation-shipping.component.html-->
      <!--instead of [cxOutlet]="OrderOutlets.CONSIGNMENT_DELIVERY_INFO"-->
      <div class="cx-order-status">
        {{
          'myAccountV2OrderHistory.checkoutMode.deliveryEntries' | cxTranslate
        }}
        <ng-container
          *ngTemplateOutlet="
            showManyItems;
            context: {
              count: getConsignmentsCount(
                getDeliveryConsignments(order.consignments ?? [])
              )
            }
          "
        ></ng-container>
      </div>
      <cx-my-account-v2-consignment-entries
        [orderCode]="order.code ?? ''"
        [consignments]="getDeliveryConsignments(order.consignments ?? [])"
      ></cx-my-account-v2-consignment-entries>
    </div>

    <!-- unconsigned entries 
  eg: Some_Status - 1 Item
  -->
    <div *ngIf="getOrderEntriesCount(order.unconsignedEntries) > 0">
      <div *ngIf="order.statusDisplay">
        <div
          class="cx-order-status-critical"
          *ngIf="isStatusCritical(order.statusDisplay); else nonCritical"
        >
          {{
            'orderDetails.statusDisplay_' + order.statusDisplay | cxTranslate
          }}
          -
          <ng-container
            *ngTemplateOutlet="
              showManyItems;
              context: { count: getOrderEntriesCount(order.unconsignedEntries) }
            "
          ></ng-container>
        </div>
        <ng-template #nonCritical>
          <div class="cx-order-status">
            {{
              'orderDetails.statusDisplay_' + order.statusDisplay | cxTranslate
            }}
            -
            <ng-container
              *ngTemplateOutlet="
                showManyItems;
                context: {
                  count: getOrderEntriesCount(order.unconsignedEntries)
                }
              "
            ></ng-container>
          </div>
        </ng-template>
      </div>

      <!-- delivery unconsigned entries 
      eg: To Be Shipped - 6 Items //showing this is in extra information format
    -->
      <div
        class="cx-consignment-info"
        *ngIf="
          getOrderEntriesCount(
            getDeliveryUnconsignedEntries(order.unconsignedEntries ?? [])
          ) > 0
        "
      >
        {{
          'myAccountV2OrderHistory.checkoutMode.deliveryEntries' | cxTranslate
        }}
        <ng-container
          *ngTemplateOutlet="
            showManyItems;
            context: {
              count: getOrderEntriesCount(
                getDeliveryUnconsignedEntries(order.unconsignedEntries ?? [])
              )
            }
          "
        ></ng-container>
      </div>

      <!-- pickup unconsigned entries, b2b does not have pickup items
      eg: To Be Picked Up - 7 Items //showing this is as an extra information format
    -->
      <div
        class="cx-consignment-info"
        *ngIf="
          getOrderEntriesCount(
            getPickupUnconsignedEntries(order.unconsignedEntries ?? [])
          ) > 0
        "
      >
        {{
          'myAccountV2OrderHistory.checkoutPickupInStore.heading' | cxTranslate
        }}
        <ng-container
          *ngTemplateOutlet="
            showManyItems;
            context: {
              count: getOrderEntriesCount(
                getPickupUnconsignedEntries(order.unconsignedEntries ?? [])
              )
            }
          "
        ></ng-container>
      </div>
    </div>

    <!--return request details
  eg: Returned: 2 Items
      Return Processed: 15, September, 2022
  -->
    <div *ngFor="let returnRequest of order.returnRequests">
      <div class="cx-order-status-critical">
        {{ 'returnRequestList.returnRequestId' | cxTranslate }}
        <a
          *ngIf="returnRequest.rma; else showReturnCode"
          [routerLink]="
            {
              cxRoute: 'returnRequestDetails',
              params: returnRequest
            } | cxUrl
          "
          class="cx-order-status-critical-link"
        >
          {{ returnRequest.rma }}</a
        >
      </div>
      <ng-template #showReturnCode>
        {{ returnRequest.code }}
      </ng-template>
      <div
        class="cx-consignment-info"
        *ngIf="returnRequest.creationTime as creationTime"
      >
        {{
          'myAccountV2OrderHistory.returnProcessed'
            | cxTranslate: { param: creationTime | cxDate: 'd, MMMM, yyyy' }
        }}
      </div>
    </div>
  </div>
  <div class="cx-order-images-container">
    <ng-container *ngIf="order.entries">
      <ng-container *ngFor="let item of getProductImages(order.entries)">
        <cx-media
          [container]="item.PRIMARY"
          class="cx-order-img"
          format="thumbnail"
          role="presentation"
        ></cx-media>
      </ng-container>
    </ng-container>
  </div>
</div>

<ng-template #showManyItems let-count="count">
  <ng-container *ngIf="count > 1; else showOneItem">
    {{ 'myAccountV2OrderHistory.items' | cxTranslate: { param: count } }}
  </ng-container>
</ng-template>
<ng-template #showOneItem>
  {{ 'myAccountV2OrderHistory.item' | cxTranslate: { param: 1 } }}
</ng-template>
`
    }]
  }], null, {
    order: [{
      type: Input
    }]
  });
})();
var _MyAccountV2OrderHistoryComponent = class _MyAccountV2OrderHistoryComponent extends OrderHistoryComponent {
  constructor() {
    super(...arguments);
    this.service = inject(MyAccountV2OrderHistoryService);
    this.ITEMS_PER_PAGE = 5;
    this.isLoaded$ = new BehaviorSubject(false);
    this.orders$ = this.service.getOrderHistoryList(this.ITEMS_PER_PAGE).pipe(tap((orders) => {
      this.isLoaded$.next(true);
      super.setOrderHistoryParams(orders);
    }));
  }
  pageChange(page) {
    this.isLoaded$.next(false);
    this.service.clearOrderList();
    super.pageChange(page);
  }
};
_MyAccountV2OrderHistoryComponent.\u0275fac = /* @__PURE__ */ (() => {
  let \u0275MyAccountV2OrderHistoryComponent_BaseFactory;
  return function MyAccountV2OrderHistoryComponent_Factory(t) {
    return (\u0275MyAccountV2OrderHistoryComponent_BaseFactory || (\u0275MyAccountV2OrderHistoryComponent_BaseFactory = \u0275\u0275getInheritedFactory(_MyAccountV2OrderHistoryComponent)))(t || _MyAccountV2OrderHistoryComponent);
  };
})();
_MyAccountV2OrderHistoryComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
  type: _MyAccountV2OrderHistoryComponent,
  selectors: [["cx-my-account-v2-order-history"]],
  features: [\u0275\u0275InheritDefinitionFeature],
  decls: 6,
  vars: 4,
  consts: [["noOrder", ""], ["loading", ""], [4, "ngIf", "ngIfElse"], [1, "cx-my-account-v2-order-history-header"], [1, "cx-my-account-v2-order-history-body"], [4, "ngFor", "ngForOf"], ["class", "cx-order-history-pagination", 4, "ngIf"], [1, "cx-each-order"], [1, "cx-my-account-v2-order-history-code", 3, "click"], [3, "routerLink"], [1, "cx-my-account-v2-order-summary"], [3, "order"], [1, "cx-order-history-pagination"], [3, "viewPageEvent", "pagination"], ["routerLinkActive", "active", 1, "cx-no-order", 3, "routerLink"], [1, "cx-spinner"]],
  template: function MyAccountV2OrderHistoryComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275template(0, MyAccountV2OrderHistoryComponent_div_0_Template, 9, 13, "div", 2);
      \u0275\u0275pipe(1, "async");
      \u0275\u0275template(2, MyAccountV2OrderHistoryComponent_ng_template_2_Template, 2, 4, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(4, MyAccountV2OrderHistoryComponent_ng_template_4_Template, 2, 0, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
    }
    if (rf & 2) {
      const noOrder_r6 = \u0275\u0275reference(3);
      \u0275\u0275property("ngIf", \u0275\u0275pipeBind1(1, 2, ctx.orders$))("ngIfElse", noOrder_r6);
    }
  },
  dependencies: [NgForOf, NgIf, RouterLink, RouterLinkActive, PaginationComponent, SpinnerComponent, MyAccountV2OrderConsolidatedInformationComponent, AsyncPipe, UrlPipe, TranslatePipe, CxDatePipe],
  encapsulation: 2
});
var MyAccountV2OrderHistoryComponent = _MyAccountV2OrderHistoryComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MyAccountV2OrderHistoryComponent, [{
    type: Component,
    args: [{
      selector: "cx-my-account-v2-order-history",
      template: `<div
  *ngIf="orders$ | async as orderHistory; else noOrder"
  [attr.aria-label]="'myAccountV2OrderHistory.orderListResults' | cxTranslate"
>
  <!-- HEADER -->
  <div class="cx-my-account-v2-order-history-header">
    <h2>
      {{
        'myAccountV2OrderHistory.heading'
          | cxTranslate: { param: tabTitleParam$ | async }
      }}
    </h2>
  </div>
  <!--BODY-->
  <div class="cx-my-account-v2-order-history-body">
    <ng-container
      *ngIf="orderHistory.pagination.totalResults > 0; else noOrder"
    >
      <ng-container *ngFor="let order of orderHistory.orders">
        <div class="cx-each-order">
          <!--eg: Order # 12345-->
          <div
            class="cx-my-account-v2-order-history-code"
            [attr.aria-label]="
              'myAccountV2OrderHistory.orderCodeLabel' | cxTranslate
            "
            (click)="goToOrderDetail(order)"
          >
            <a
              [routerLink]="
                {
                  cxRoute: 'orderDetails',
                  params: order
                } | cxUrl
              "
            >
              {{ 'orderHistory.orderId' | cxTranslate }} {{ order?.code }}</a
            >
          </div>

          <!--eg: 12,October,2022 | Total Price: $12.00-->
          <div class="cx-my-account-v2-order-summary">
            <span
              [attr.aria-label]="
                'myAccountV2OrderHistory.orderPlaced' | cxTranslate
              "
            >
              {{ order.placed | cxDate: 'd, MMMM, yyyy' }} |
            </span>
            <span
              [attr.aria-label]="
                'myAccountV2OrderHistory.totalPriceLabel' | cxTranslate
              "
            >
              <strong>
                {{
                  'myAccountV2OrderHistory.totalPrice'
                    | cxTranslate: { param: order.total?.formattedValue }
                }}
              </strong>
            </span>
          </div>

          <!--eg: Display consolidated order information-->
          <cx-my-account-v2-order-consolidated-information [order]="order">
          </cx-my-account-v2-order-consolidated-information>
        </div>
      </ng-container>

      <!-- PAGINATION -->
      <div
        *ngIf="orderHistory.pagination.totalPages > 1"
        class="cx-order-history-pagination"
        [attr.aria-label]="
          'myAccountV2OrderHistory.orderListPagination' | cxTranslate
        "
      >
        <cx-pagination
          [pagination]="orderHistory.pagination"
          (viewPageEvent)="pageChange($event)"
        ></cx-pagination>
      </div>
    </ng-container>
  </div>
</div>

<!-- NO ORDER CONTAINER -->
<ng-template #noOrder>
  <div *ngIf="isLoaded$ | async; else loading">
    <div [attr.aria-label]="'orderHistory.notFound' | cxTranslate">
      {{ 'orderHistory.noOrders' | cxTranslate }}
    </div>
    <a
      [routerLink]="{ cxRoute: 'home' } | cxUrl"
      routerLinkActive="active"
      class="cx-no-order"
      >{{ 'orderHistory.startShopping' | cxTranslate }}</a
    >
  </div>
</ng-template>

<!-- ORDER HISTORY DATA STILL LOADING -->
<ng-template #loading>
  <div class="cx-spinner">
    <cx-spinner></cx-spinner>
  </div>
</ng-template>
`
    }]
  }], null, null);
})();
var myAccountV2CmsMapping = {
  cmsComponents: {
    AccountOrderHistoryComponent: {
      component: MyAccountV2OrderHistoryComponent
      //guards: inherited from standard config,
    }
  }
};
var moduleComponents$1 = [MyAccountV2OrderHistoryComponent, MyAccountV2OrderConsolidatedInformationComponent, MyAccountV2ConsignmentEntriesComponent];
var _OrderHistoryModule = class _OrderHistoryModule {
};
_OrderHistoryModule.\u0275fac = function OrderHistoryModule_Factory(t) {
  return new (t || _OrderHistoryModule)();
};
_OrderHistoryModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
  type: _OrderHistoryModule
});
_OrderHistoryModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
  providers: [provideDefaultConfig({
    cmsComponents: {
      AccountOrderHistoryComponent: {
        component: OrderHistoryComponent,
        guards: [AuthGuard]
      }
    }
  }), provideDefaultConfigFactory(() => inject(USE_MY_ACCOUNT_V2_ORDER) ? myAccountV2CmsMapping : {})],
  imports: [CommonModule, RouterModule, FormsModule, NgSelectModule, ListNavigationModule, UrlModule, I18nModule, SpinnerModule, MediaModule]
});
var OrderHistoryModule = _OrderHistoryModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OrderHistoryModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, RouterModule, FormsModule, NgSelectModule, ListNavigationModule, UrlModule, I18nModule, SpinnerModule, MediaModule],
      declarations: [OrderHistoryComponent, ...moduleComponents$1],
      exports: [OrderHistoryComponent, ...moduleComponents$1],
      providers: [provideDefaultConfig({
        cmsComponents: {
          AccountOrderHistoryComponent: {
            component: OrderHistoryComponent,
            guards: [AuthGuard]
          }
        }
      }), provideDefaultConfigFactory(() => inject(USE_MY_ACCOUNT_V2_ORDER) ? myAccountV2CmsMapping : {})]
    }]
  }], null, null);
})();
var _OrderDetailsOrderEntriesContext = class _OrderDetailsOrderEntriesContext {
  constructor(orderHistoryFacade) {
    this.orderHistoryFacade = orderHistoryFacade;
    this.type = OrderEntriesSource.ORDER_DETAILS;
  }
  getEntries() {
    return this.orderHistoryFacade.getOrderDetails().pipe(map((order) => order?.entries ?? []));
  }
};
_OrderDetailsOrderEntriesContext.\u0275fac = function OrderDetailsOrderEntriesContext_Factory(t) {
  return new (t || _OrderDetailsOrderEntriesContext)(\u0275\u0275inject(OrderHistoryFacade));
};
_OrderDetailsOrderEntriesContext.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
  token: _OrderDetailsOrderEntriesContext,
  factory: _OrderDetailsOrderEntriesContext.\u0275fac,
  providedIn: "root"
});
var OrderDetailsOrderEntriesContext = _OrderDetailsOrderEntriesContext;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OrderDetailsOrderEntriesContext, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: OrderHistoryFacade
  }], null);
})();
var _ReplenishmentOrderCancellationDialogComponent = class _ReplenishmentOrderCancellationDialogComponent {
  handleClick(event) {
    if (event.target.tagName === this.el.nativeElement.tagName) {
      this.close("Cross click");
    }
  }
  constructor(replenishmentOrderHistoryFacade, globalMessageService, launchDialogService, el) {
    this.replenishmentOrderHistoryFacade = replenishmentOrderHistoryFacade;
    this.globalMessageService = globalMessageService;
    this.launchDialogService = launchDialogService;
    this.el = el;
    this.subscription = new Subscription();
    this.iconTypes = ICON_TYPE;
    this.focusConfig = {
      trap: true,
      block: true,
      autofocus: "button",
      focusOnEscape: true
    };
  }
  ngOnInit() {
    this.subscription.add(combineLatest([this.replenishmentOrderHistoryFacade.getReplenishmentOrderDetails().pipe(startWith(null)), this.launchDialogService.data$]).subscribe(([replenishmentOrder, code]) => {
      this.replenishmentOrderCode = code || replenishmentOrder?.replenishmentOrderCode;
    }));
    this.subscription.add(this.replenishmentOrderHistoryFacade.getCancelReplenishmentOrderSuccess().subscribe((value) => this.onSuccess(value)));
  }
  onSuccess(value) {
    if (value) {
      this.launchDialogService.closeDialog("Successffully cancelled replenishment");
      this.globalMessageService.add({
        key: "orderDetails.cancelReplenishment.cancelSuccess",
        params: {
          replenishmentOrderCode: this.replenishmentOrderCode
        }
      }, GlobalMessageType.MSG_TYPE_CONFIRMATION);
    }
    this.replenishmentOrderHistoryFacade.clearCancelReplenishmentOrderProcessState();
  }
  close(reason) {
    this.launchDialogService.closeDialog(reason);
  }
  cancelReplenishment() {
    this.replenishmentOrderHistoryFacade.cancelReplenishmentOrder(this.replenishmentOrderCode);
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
};
_ReplenishmentOrderCancellationDialogComponent.\u0275fac = function ReplenishmentOrderCancellationDialogComponent_Factory(t) {
  return new (t || _ReplenishmentOrderCancellationDialogComponent)(\u0275\u0275directiveInject(ReplenishmentOrderHistoryFacade), \u0275\u0275directiveInject(GlobalMessageService), \u0275\u0275directiveInject(LaunchDialogService), \u0275\u0275directiveInject(ElementRef));
};
_ReplenishmentOrderCancellationDialogComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
  type: _ReplenishmentOrderCancellationDialogComponent,
  selectors: [["cx-replenishment-order-cancellation-dialog"]],
  hostBindings: function ReplenishmentOrderCancellationDialogComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275listener("click", function ReplenishmentOrderCancellationDialogComponent_click_HostBindingHandler($event) {
        return ctx.handleClick($event);
      });
    }
  },
  decls: 23,
  vars: 17,
  consts: [[1, "cx-cancel-replenishment-dialog-foreground", 3, "esc", "cxFocus"], [1, "cx-cancel-replenishment-dialog-content"], [1, "cx-cancel-replenishment-dialog-header"], ["type", "button", 1, "close", 3, "click"], ["aria-hidden", "true"], [3, "type"], [1, "cx-cancel-replenishment-dialog-description"], [1, "cx-cancel-replenishment-dialog-body"], [1, "cx-cancel-replenishment-btns", "row"], [1, "col-md-6"], [1, "btn", "btn-block", "btn-secondary", 3, "click"], [1, "btn", "btn-block", "btn-primary", 3, "click"]],
  template: function ReplenishmentOrderCancellationDialogComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275listener("esc", function ReplenishmentOrderCancellationDialogComponent_Template_div_esc_0_listener() {
        return ctx.close("Escape clicked");
      });
      \u0275\u0275elementStart(1, "div", 1)(2, "div", 2)(3, "h3");
      \u0275\u0275text(4);
      \u0275\u0275pipe(5, "cxTranslate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "button", 3);
      \u0275\u0275pipe(7, "cxTranslate");
      \u0275\u0275listener("click", function ReplenishmentOrderCancellationDialogComponent_Template_button_click_6_listener() {
        return ctx.close("Cross click");
      });
      \u0275\u0275elementStart(8, "span", 4);
      \u0275\u0275element(9, "cx-icon", 5);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(10, "div", 6);
      \u0275\u0275text(11);
      \u0275\u0275pipe(12, "cxTranslate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(13, "div", 7)(14, "div", 8)(15, "div", 9)(16, "button", 10);
      \u0275\u0275listener("click", function ReplenishmentOrderCancellationDialogComponent_Template_button_click_16_listener() {
        return ctx.close("Close Replenishment Dialog");
      });
      \u0275\u0275text(17);
      \u0275\u0275pipe(18, "cxTranslate");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(19, "div", 9)(20, "button", 11);
      \u0275\u0275listener("click", function ReplenishmentOrderCancellationDialogComponent_Template_button_click_20_listener() {
        return ctx.cancelReplenishment();
      });
      \u0275\u0275text(21);
      \u0275\u0275pipe(22, "cxTranslate");
      \u0275\u0275elementEnd()()()()()();
    }
    if (rf & 2) {
      \u0275\u0275property("cxFocus", ctx.focusConfig);
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(5, 7, "orderDetails.cancelReplenishment.title"), " ");
      \u0275\u0275advance(2);
      \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(7, 9, "common.close"));
      \u0275\u0275advance(3);
      \u0275\u0275property("type", ctx.iconTypes.CLOSE);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(12, 11, "orderDetails.cancelReplenishment.description"), " ");
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(18, 13, "orderDetails.cancelReplenishment.reject"), " ");
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(22, 15, "orderDetails.cancelReplenishment.accept"), " ");
    }
  },
  dependencies: [IconComponent, FocusDirective, TranslatePipe],
  encapsulation: 2,
  changeDetection: 0
});
var ReplenishmentOrderCancellationDialogComponent = _ReplenishmentOrderCancellationDialogComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ReplenishmentOrderCancellationDialogComponent, [{
    type: Component,
    args: [{
      selector: "cx-replenishment-order-cancellation-dialog",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: `<div
  [cxFocus]="focusConfig"
  (esc)="close('Escape clicked')"
  class="cx-cancel-replenishment-dialog-foreground"
>
  <div class="cx-cancel-replenishment-dialog-content">
    <div class="cx-cancel-replenishment-dialog-header">
      <h3>
        {{ 'orderDetails.cancelReplenishment.title' | cxTranslate }}
      </h3>
      <button
        type="button"
        class="close"
        [attr.aria-label]="'common.close' | cxTranslate"
        (click)="close('Cross click')"
      >
        <span aria-hidden="true">
          <cx-icon [type]="iconTypes.CLOSE"></cx-icon>
        </span>
      </button>
    </div>
    <div class="cx-cancel-replenishment-dialog-description">
      {{ 'orderDetails.cancelReplenishment.description' | cxTranslate }}
    </div>

    <div class="cx-cancel-replenishment-dialog-body">
      <div class="cx-cancel-replenishment-btns row">
        <div class="col-md-6">
          <button
            class="btn btn-block btn-secondary"
            (click)="close('Close Replenishment Dialog')"
          >
            {{ 'orderDetails.cancelReplenishment.reject' | cxTranslate }}
          </button>
        </div>
        <div class="col-md-6">
          <button
            class="btn btn-block btn-primary"
            (click)="cancelReplenishment()"
          >
            {{ 'orderDetails.cancelReplenishment.accept' | cxTranslate }}
          </button>
        </div>
      </div>
    </div>
  </div>
</div>
`
    }]
  }], () => [{
    type: ReplenishmentOrderHistoryFacade
  }, {
    type: GlobalMessageService
  }, {
    type: LaunchDialogService
  }, {
    type: ElementRef
  }], {
    handleClick: [{
      type: HostListener,
      args: ["click", ["$event"]]
    }]
  });
})();
var _ReplenishmentOrderCancellationDialogModule = class _ReplenishmentOrderCancellationDialogModule {
};
_ReplenishmentOrderCancellationDialogModule.\u0275fac = function ReplenishmentOrderCancellationDialogModule_Factory(t) {
  return new (t || _ReplenishmentOrderCancellationDialogModule)();
};
_ReplenishmentOrderCancellationDialogModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
  type: _ReplenishmentOrderCancellationDialogModule
});
_ReplenishmentOrderCancellationDialogModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
  imports: [CommonModule, I18nModule, IconModule, KeyboardFocusModule]
});
var ReplenishmentOrderCancellationDialogModule = _ReplenishmentOrderCancellationDialogModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ReplenishmentOrderCancellationDialogModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, I18nModule, IconModule, KeyboardFocusModule],
      declarations: [ReplenishmentOrderCancellationDialogComponent],
      exports: [ReplenishmentOrderCancellationDialogComponent]
    }]
  }], null, null);
})();
var defaultReplenishmentOrderCancellationLayoutConfig = {
  launch: {
    REPLENISHMENT_ORDER: {
      inline: true,
      component: ReplenishmentOrderCancellationDialogComponent,
      dialogType: DIALOG_TYPE.DIALOG
    }
  }
};
var _ReplenishmentOrderCancellationComponent = class _ReplenishmentOrderCancellationComponent {
  constructor(replenishmentOrderHistoryFacade, vcr, launchDialogService) {
    this.replenishmentOrderHistoryFacade = replenishmentOrderHistoryFacade;
    this.vcr = vcr;
    this.launchDialogService = launchDialogService;
    this.subscription = new Subscription();
    this.replenishmentOrder$ = this.replenishmentOrderHistoryFacade.getReplenishmentOrderDetails();
  }
  openDialog() {
    const dialog = this.launchDialogService.openDialog("REPLENISHMENT_ORDER", this.element, this.vcr);
    if (dialog) {
      this.subscription.add(dialog.pipe(take(1)).subscribe());
    }
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
    this.replenishmentOrderHistoryFacade.clearReplenishmentOrderDetails();
  }
};
_ReplenishmentOrderCancellationComponent.\u0275fac = function ReplenishmentOrderCancellationComponent_Factory(t) {
  return new (t || _ReplenishmentOrderCancellationComponent)(\u0275\u0275directiveInject(ReplenishmentOrderHistoryFacade), \u0275\u0275directiveInject(ViewContainerRef), \u0275\u0275directiveInject(LaunchDialogService));
};
_ReplenishmentOrderCancellationComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
  type: _ReplenishmentOrderCancellationComponent,
  selectors: [["cx-replenishment-order-cancellation"]],
  viewQuery: function ReplenishmentOrderCancellationComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(_c14, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.element = _t.first);
    }
  },
  decls: 8,
  vars: 10,
  consts: [["element", ""], [1, "cx-cancel-replenishment-btns", "row"], [1, "col-xs-12", "col-md-5", "col-lg-4"], [1, "btn", "btn-block", "btn-secondary", 3, "routerLink"], ["class", "col-xs-12 col-md-5 col-lg-4", 4, "ngIf"], [1, "btn", "btn-block", "btn-secondary", 3, "click"]],
  template: function ReplenishmentOrderCancellationComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 1)(1, "div", 2)(2, "a", 3);
      \u0275\u0275pipe(3, "cxUrl");
      \u0275\u0275text(4);
      \u0275\u0275pipe(5, "cxTranslate");
      \u0275\u0275elementEnd()();
      \u0275\u0275template(6, ReplenishmentOrderCancellationComponent_div_6_Template, 5, 3, "div", 4);
      \u0275\u0275pipe(7, "async");
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      let tmp_2_0;
      \u0275\u0275advance(2);
      \u0275\u0275property("routerLink", \u0275\u0275pipeBind1(3, 3, \u0275\u0275pureFunction0(9, _c26)));
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(5, 5, "common.back"), " ");
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", (tmp_2_0 = \u0275\u0275pipeBind1(7, 7, ctx.replenishmentOrder$)) == null ? null : tmp_2_0.active);
    }
  },
  dependencies: [NgIf, RouterLink, AsyncPipe, TranslatePipe, UrlPipe],
  encapsulation: 2
});
var ReplenishmentOrderCancellationComponent = _ReplenishmentOrderCancellationComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ReplenishmentOrderCancellationComponent, [{
    type: Component,
    args: [{
      selector: "cx-replenishment-order-cancellation",
      template: `<div class="cx-cancel-replenishment-btns row">
  <div class="col-xs-12 col-md-5 col-lg-4">
    <a
      class="btn btn-block btn-secondary"
      [routerLink]="
        {
          cxRoute: 'replenishmentOrders'
        } | cxUrl
      "
    >
      {{ 'common.back' | cxTranslate }}
    </a>
  </div>
  <div
    *ngIf="(replenishmentOrder$ | async)?.active"
    class="col-xs-12 col-md-5 col-lg-4"
  >
    <button #element class="btn btn-block btn-secondary" (click)="openDialog()">
      {{ 'orderDetails.cancelReplenishment.title' | cxTranslate }}
    </button>
  </div>
</div>
`
    }]
  }], () => [{
    type: ReplenishmentOrderHistoryFacade
  }, {
    type: ViewContainerRef
  }, {
    type: LaunchDialogService
  }], {
    element: [{
      type: ViewChild,
      args: ["element"]
    }]
  });
})();
var _ReplenishmentOrderDetailsService = class _ReplenishmentOrderDetailsService {
  constructor(routingService, replenishmentOrderHistoryFacade) {
    this.routingService = routingService;
    this.replenishmentOrderHistoryFacade = replenishmentOrderHistoryFacade;
    this.replenishmentOrderCode$ = this.routingService.getRouterState().pipe(map((routingData) => routingData.state.params.replenishmentOrderCode), distinctUntilChanged());
    this.replenishmentOrderLoad$ = this.replenishmentOrderCode$.pipe(tap((replenishmentOrderCode) => {
      if (Boolean(replenishmentOrderCode)) {
        this.replenishmentOrderHistoryFacade.loadReplenishmentOrderDetails(replenishmentOrderCode);
      } else {
        this.replenishmentOrderHistoryFacade.clearReplenishmentOrderDetails();
      }
    }), shareReplay({
      bufferSize: 1,
      refCount: true
    }));
  }
  getOrderDetails() {
    return this.replenishmentOrderLoad$.pipe(switchMap((_) => this.replenishmentOrderHistoryFacade.getReplenishmentOrderDetails()));
  }
};
_ReplenishmentOrderDetailsService.\u0275fac = function ReplenishmentOrderDetailsService_Factory(t) {
  return new (t || _ReplenishmentOrderDetailsService)(\u0275\u0275inject(RoutingService), \u0275\u0275inject(ReplenishmentOrderHistoryFacade));
};
_ReplenishmentOrderDetailsService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
  token: _ReplenishmentOrderDetailsService,
  factory: _ReplenishmentOrderDetailsService.\u0275fac,
  providedIn: "root"
});
var ReplenishmentOrderDetailsService = _ReplenishmentOrderDetailsService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ReplenishmentOrderDetailsService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: RoutingService
  }, {
    type: ReplenishmentOrderHistoryFacade
  }], null);
})();
var moduleComponents = [ReplenishmentOrderCancellationComponent];
var _ReplenishmentOrderDetailsModule = class _ReplenishmentOrderDetailsModule {
};
_ReplenishmentOrderDetailsModule.\u0275fac = function ReplenishmentOrderDetailsModule_Factory(t) {
  return new (t || _ReplenishmentOrderDetailsModule)();
};
_ReplenishmentOrderDetailsModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
  type: _ReplenishmentOrderDetailsModule
});
_ReplenishmentOrderDetailsModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
  providers: [provideDefaultConfig(defaultReplenishmentOrderCancellationLayoutConfig), provideDefaultConfig({
    cmsComponents: {
      ReplenishmentDetailItemsComponent: {
        component: OrderDetailItemsComponent,
        providers: [{
          provide: OrderDetailsService,
          useExisting: ReplenishmentOrderDetailsService
        }]
      },
      ReplenishmentDetailTotalsComponent: {
        component: OrderDetailTotalsComponent,
        providers: [{
          provide: OrderDetailsService,
          useExisting: ReplenishmentOrderDetailsService
        }]
      },
      ReplenishmentDetailShippingComponent: {
        component: OrderOverviewComponent,
        providers: [{
          provide: OrderDetailsService,
          useExisting: ReplenishmentOrderDetailsService
        }]
      },
      ReplenishmentDetailActionsComponent: {
        component: ReplenishmentOrderCancellationComponent
      },
      ReplenishmentDetailOrderHistoryComponent: {
        component: OrderHistoryComponent
      }
    }
  })],
  imports: [CardModule, CommonModule, I18nModule, PromotionsModule, UrlModule, ReplenishmentOrderCancellationDialogModule, SpinnerModule, ListNavigationModule, RouterModule]
});
var ReplenishmentOrderDetailsModule = _ReplenishmentOrderDetailsModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ReplenishmentOrderDetailsModule, [{
    type: NgModule,
    args: [{
      imports: [CardModule, CommonModule, I18nModule, PromotionsModule, UrlModule, ReplenishmentOrderCancellationDialogModule, SpinnerModule, ListNavigationModule, RouterModule],
      providers: [provideDefaultConfig(defaultReplenishmentOrderCancellationLayoutConfig), provideDefaultConfig({
        cmsComponents: {
          ReplenishmentDetailItemsComponent: {
            component: OrderDetailItemsComponent,
            providers: [{
              provide: OrderDetailsService,
              useExisting: ReplenishmentOrderDetailsService
            }]
          },
          ReplenishmentDetailTotalsComponent: {
            component: OrderDetailTotalsComponent,
            providers: [{
              provide: OrderDetailsService,
              useExisting: ReplenishmentOrderDetailsService
            }]
          },
          ReplenishmentDetailShippingComponent: {
            component: OrderOverviewComponent,
            providers: [{
              provide: OrderDetailsService,
              useExisting: ReplenishmentOrderDetailsService
            }]
          },
          ReplenishmentDetailActionsComponent: {
            component: ReplenishmentOrderCancellationComponent
          },
          ReplenishmentDetailOrderHistoryComponent: {
            component: OrderHistoryComponent
          }
        }
      })],
      declarations: [...moduleComponents],
      exports: [...moduleComponents]
    }]
  }], null, null);
})();
var _ReplenishmentOrderHistoryComponent = class _ReplenishmentOrderHistoryComponent {
  constructor(routing, replenishmentOrderHistoryFacade, translation, vcr, launchDialogService) {
    this.routing = routing;
    this.replenishmentOrderHistoryFacade = replenishmentOrderHistoryFacade;
    this.translation = translation;
    this.vcr = vcr;
    this.launchDialogService = launchDialogService;
    this.subscription = new Subscription();
    this.PAGE_SIZE = 5;
    this.replenishmentOrders$ = this.replenishmentOrderHistoryFacade.getReplenishmentOrderHistoryList(this.PAGE_SIZE).pipe(tap((replenishmentOrders) => {
      if (replenishmentOrders?.pagination?.sort) {
        this.sortType = replenishmentOrders.pagination.sort;
      }
    }));
    this.isLoaded$ = this.replenishmentOrderHistoryFacade.getReplenishmentOrderHistoryListSuccess();
  }
  changeSortCode(sortCode) {
    const event = {
      sortCode,
      currentPage: 0
    };
    this.sortType = sortCode;
    this.fetchReplenishmentOrders(event);
  }
  pageChange(page) {
    const event = {
      sortCode: this.sortType,
      currentPage: page
    };
    this.fetchReplenishmentOrders(event);
  }
  goToOrderDetail(order) {
    this.routing.go({
      cxRoute: "replenishmentDetails",
      params: order
    });
  }
  getSortLabels() {
    return combineLatest([this.translation.translate("sorting.date"), this.translation.translate("sorting.replenishmentNumber"), this.translation.translate("sorting.nextOrderDate")]).pipe(map(([textByDate, textByOrderNumber, textbyNextOrderDate]) => {
      return {
        byDate: textByDate,
        byReplenishmentNumber: textByOrderNumber,
        byNextOrderDate: textbyNextOrderDate
      };
    }));
  }
  openDialog(event, replenishmentOrderCode) {
    const dialog = this.launchDialogService.openDialog("REPLENISHMENT_ORDER", this.element, this.vcr, replenishmentOrderCode);
    if (dialog) {
      this.subscription.add(dialog.pipe(take(1)).subscribe());
    }
    event.stopPropagation();
  }
  fetchReplenishmentOrders(event) {
    this.replenishmentOrderHistoryFacade.loadReplenishmentOrderList(this.PAGE_SIZE, event.currentPage, event.sortCode);
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
    this.replenishmentOrderHistoryFacade.clearReplenishmentOrderList();
  }
};
_ReplenishmentOrderHistoryComponent.\u0275fac = function ReplenishmentOrderHistoryComponent_Factory(t) {
  return new (t || _ReplenishmentOrderHistoryComponent)(\u0275\u0275directiveInject(RoutingService), \u0275\u0275directiveInject(ReplenishmentOrderHistoryFacade), \u0275\u0275directiveInject(TranslationService), \u0275\u0275directiveInject(ViewContainerRef), \u0275\u0275directiveInject(LaunchDialogService));
};
_ReplenishmentOrderHistoryComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
  type: _ReplenishmentOrderHistoryComponent,
  selectors: [["cx-replenishment-order-history"]],
  viewQuery: function ReplenishmentOrderHistoryComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(_c14, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.element = _t.first);
    }
  },
  decls: 2,
  vars: 3,
  consts: [["noOrder", ""], ["element", ""], [4, "ngIf"], [1, "container"], [1, "cx-replenishment-order-history-header"], [1, "cx-replenishment-order-history-body"], [4, "ngIf", "ngIfElse"], [1, "cx-replenishment-order-history-sort", "top", "row"], [1, "cx-replenishment-order-history-form-group", "form-group", "col-sm-12", "col-md-4", "col-lg-4"], ["ariaControls", "replenishment-order-history-table", 3, "sortListEvent", "sortOptions", "sortLabels", "selectedOption", "placeholder", "ariaLabel"], ["class", "cx-replenishment-order-history-pagination", 4, "ngIf"], ["id", "replenishment-order-history-table", "role", "table", 1, "table", "cx-replenishment-order-history-table"], [1, "cx-visually-hidden"], [1, "cx-replenishment-order-history-thead-mobile"], ["scope", "col"], [1, "cx-replenishment-order-history-ellipses"], ["scope", "col", 1, "cx-replenishment-order-history-total"], ["role", "row", 3, "click", 4, "ngFor", "ngForOf"], [1, "cx-replenishment-order-history-sort", "bottom", "row"], [1, "cx-replenishment-order-history-pagination"], [3, "pagination", "viewPageEvent", 4, "ngIf"], [3, "viewPageEvent", "pagination"], ["role", "row", 3, "click"], ["role", "cell", 1, "cx-replenishment-order-history-code"], [1, "d-md-none", "cx-replenishment-order-history-label"], [1, "cx-replenishment-order-history-value", 3, "routerLink"], ["role", "cell"], [1, "cx-replenishment-order-history-value", "cx-purchase-order-number", 3, "routerLink"], ["role", "cell", 1, "cx-replenishment-order-history-frequency"], [1, "cx-replenishment-order-history-value", "cx-next-order-date", 3, "routerLink"], [1, "cx-replenishment-order-history-total"], ["role", "cell", 1, "cx-replenishment-order-history-cancel"], ["class", "cx-order-cancel btn btn-secondary", 3, "click", 4, "ngIf"], [1, "cx-order-cancel", "btn", "btn-secondary", 3, "click"], ["class", "cx-replenishment-order-history-no-order row", 4, "ngIf"], [1, "cx-replenishment-order-history-no-order", "row"], [1, "col-sm-12", "col-md-6", "col-lg-4"], ["routerLinkActive", "active", 1, "btn", "btn-primary", "btn-block", 3, "routerLink"]],
  template: function ReplenishmentOrderHistoryComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275template(0, ReplenishmentOrderHistoryComponent_ng_container_0_Template, 10, 5, "ng-container", 2);
      \u0275\u0275pipe(1, "async");
    }
    if (rf & 2) {
      \u0275\u0275property("ngIf", \u0275\u0275pipeBind1(1, 1, ctx.replenishmentOrders$));
    }
  },
  dependencies: [NgForOf, NgIf, RouterLink, RouterLinkActive, SortingComponent, PaginationComponent, AsyncPipe, SlicePipe, UrlPipe, TranslatePipe, CxDatePipe],
  encapsulation: 2,
  changeDetection: 0
});
var ReplenishmentOrderHistoryComponent = _ReplenishmentOrderHistoryComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ReplenishmentOrderHistoryComponent, [{
    type: Component,
    args: [{
      selector: "cx-replenishment-order-history",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: `<ng-container *ngIf="replenishmentOrders$ | async as replenishmentOrders">
  <div class="container">
    <!-- HEADER -->
    <div class="cx-replenishment-order-history-header">
      <h3>
        {{ 'orderHistory.replenishmentOrderHistory' | cxTranslate }}
      </h3>
    </div>

    <!-- BODY -->
    <div class="cx-replenishment-order-history-body">
      <ng-container
        *ngIf="replenishmentOrders.pagination.totalResults > 0; else noOrder"
      >
        <!-- Select Form and Pagination Top -->
        <div class="cx-replenishment-order-history-sort top row">
          <label
            class="
              cx-replenishment-order-history-form-group
              form-group
              col-sm-12 col-md-4 col-lg-4
            "
          >
            <span>{{ 'orderHistory.sortBy' | cxTranslate }}</span>
            <cx-sorting
              [sortOptions]="replenishmentOrders.sorts"
              [sortLabels]="getSortLabels() | async"
              (sortListEvent)="changeSortCode($event)"
              [selectedOption]="replenishmentOrders.pagination.sort"
              placeholder="{{ 'orderHistory.sortBy' | cxTranslate }}"
              [ariaLabel]="'orderHistory.sortOrders' | cxTranslate"
              ariaControls="replenishment-order-history-table"
            ></cx-sorting>
          </label>
          <div
            class="cx-replenishment-order-history-pagination"
            *ngIf="replenishmentOrders.pagination.totalPages > 1"
          >
            <cx-pagination
              [pagination]="replenishmentOrders.pagination"
              (viewPageEvent)="pageChange($event)"
            ></cx-pagination>
          </div>
        </div>
        <!-- TABLE -->
        <table
          id="replenishment-order-history-table"
          class="table cx-replenishment-order-history-table"
          role="table"
        >
          <caption class="cx-visually-hidden">
            {{
              'orderHistory.orderHistory' | cxTranslate
            }}
          </caption>
          <thead class="cx-replenishment-order-history-thead-mobile">
            <th scope="col">
              <span class="cx-replenishment-order-history-ellipses">
                {{ 'orderHistory.replenishmentOrderId' | cxTranslate }}
              </span>
            </th>
            <th scope="col">
              <span class="cx-replenishment-order-history-ellipses">
                {{ 'orderHistory.purchaseOrderNumber' | cxTranslate }}
              </span>
            </th>
            <th scope="col">
              <span class="cx-replenishment-order-history-ellipses">
                {{ 'orderHistory.startOn' | cxTranslate }}
              </span>
            </th>
            <th scope="col">
              <span class="cx-replenishment-order-history-ellipses">
                {{ 'orderHistory.frequency' | cxTranslate }}
              </span>
            </th>
            <th scope="col">
              <span class="cx-replenishment-order-history-ellipses">
                {{ 'orderHistory.nextOrderDate' | cxTranslate }}
              </span>
            </th>
            <th scope="col" class="cx-replenishment-order-history-total">
              <span class="cx-replenishment-order-history-ellipses">
                {{ 'orderHistory.total' | cxTranslate }}
              </span>
            </th>
            <th scope="col">
              <span class="cx-replenishment-order-history-ellipses">
                {{ 'orderHistory.actions' | cxTranslate }}
              </span>
            </th>
          </thead>
          <tbody>
            <tr
              role="row"
              *ngFor="let order of replenishmentOrders.replenishmentOrders"
              (click)="goToOrderDetail(order)"
            >
              <td class="cx-replenishment-order-history-code" role="cell">
                <div class="d-md-none cx-replenishment-order-history-label">
                  {{ 'orderHistory.replenishmentOrderId' | cxTranslate }}
                </div>
                <a
                  [routerLink]="
                    {
                      cxRoute: 'replenishmentDetails',
                      params: order
                    } | cxUrl
                  "
                  class="cx-replenishment-order-history-value"
                >
                  {{ order?.replenishmentOrderCode }}</a
                >
              </td>
              <td role="cell">
                <div class="d-md-none cx-replenishment-order-history-label">
                  {{ 'orderHistory.purchaseOrderNumber' | cxTranslate }}
                </div>
                <a
                  [routerLink]="
                    {
                      cxRoute: 'replenishmentDetails',
                      params: order
                    } | cxUrl
                  "
                  class="
                    cx-replenishment-order-history-value
                    cx-purchase-order-number
                  "
                >
                  {{
                    order?.purchaseOrderNumber?.length > 0
                      ? order?.purchaseOrderNumber
                      : ('orderHistory.emptyPurchaseOrderId' | cxTranslate)
                  }}
                </a>
              </td>
              <td role="cell">
                <div class="d-md-none cx-replenishment-order-history-label">
                  {{ 'orderHistory.startOn' | cxTranslate }}
                </div>
                <a
                  [routerLink]="
                    {
                      cxRoute: 'replenishmentDetails',
                      params: order
                    } | cxUrl
                  "
                  class="cx-replenishment-order-history-value"
                >
                  {{ order?.firstDate | cxDate: 'M/d/yyyy' }}</a
                >
              </td>
              <td class="cx-replenishment-order-history-frequency" role="cell">
                <div class="d-md-none cx-replenishment-order-history-label">
                  {{ 'orderHistory.frequency' | cxTranslate }}
                </div>
                <a
                  [routerLink]="
                    {
                      cxRoute: 'replenishmentDetails',
                      params: order
                    } | cxUrl
                  "
                  class="cx-replenishment-order-history-value"
                >
                  {{ order?.trigger.displayTimeTable | slice: 0:-12 }}
                </a>
              </td>
              <td role="cell">
                <div class="d-md-none cx-replenishment-order-history-label">
                  {{ 'orderHistory.nextOrderDate' | cxTranslate }}
                </div>

                <a
                  [routerLink]="
                    {
                      cxRoute: 'replenishmentDetails',
                      params: order
                    } | cxUrl
                  "
                  class="
                    cx-replenishment-order-history-value cx-next-order-date
                  "
                >
                  {{
                    order?.active
                      ? (order?.trigger.activationTime | cxDate: 'M/d/yyyy')
                      : ('orderHistory.cancelled' | cxTranslate)
                  }}
                </a>
              </td>
              <td class="cx-replenishment-order-history-total">
                <div class="d-md-none cx-replenishment-order-history-label">
                  {{ 'orderHistory.total' | cxTranslate }}
                </div>
                <a
                  [routerLink]="
                    {
                      cxRoute: 'replenishmentDetails',
                      params: order
                    } | cxUrl
                  "
                  class="cx-replenishment-order-history-value"
                >
                  {{ order?.totalPriceWithTax.formattedValue }}</a
                >
              </td>
              <td class="cx-replenishment-order-history-cancel" role="cell">
                <div
                  class="d-md-none cx-replenishment-order-history-label"
                ></div>
                <button
                  (click)="openDialog($event, order?.replenishmentOrderCode)"
                  class="cx-order-cancel btn btn-secondary"
                  #element
                  *ngIf="order?.active"
                >
                  {{ 'orderHistory.cancel' | cxTranslate }}
                </button>
              </td>
            </tr>
          </tbody>
        </table>
        <!-- Select Form and Pagination Bottom -->
        <div class="cx-replenishment-order-history-sort bottom row">
          <div class="cx-replenishment-order-history-pagination">
            <cx-pagination
              [pagination]="replenishmentOrders.pagination"
              (viewPageEvent)="pageChange($event)"
              *ngIf="replenishmentOrders.pagination.totalPages > 1"
            ></cx-pagination>
          </div>
        </div>
      </ng-container>

      <!-- NO ORDER CONTAINER -->
      <ng-template #noOrder>
        <div
          class="cx-replenishment-order-history-no-order row"
          *ngIf="isLoaded$ | async"
        >
          <div class="col-sm-12 col-md-6 col-lg-4">
            <div>{{ 'orderHistory.noReplenishmentOrders' | cxTranslate }}</div>
            <a
              [routerLink]="{ cxRoute: 'home' } | cxUrl"
              routerLinkActive="active"
              class="btn btn-primary btn-block"
              >{{ 'orderHistory.startShopping' | cxTranslate }}</a
            >
          </div>
        </div>
      </ng-template>
    </div>
  </div>
</ng-container>
`
    }]
  }], () => [{
    type: RoutingService
  }, {
    type: ReplenishmentOrderHistoryFacade
  }, {
    type: TranslationService
  }, {
    type: ViewContainerRef
  }, {
    type: LaunchDialogService
  }], {
    element: [{
      type: ViewChild,
      args: ["element"]
    }]
  });
})();
var _ReplenishmentOrderHistoryModule = class _ReplenishmentOrderHistoryModule {
};
_ReplenishmentOrderHistoryModule.\u0275fac = function ReplenishmentOrderHistoryModule_Factory(t) {
  return new (t || _ReplenishmentOrderHistoryModule)();
};
_ReplenishmentOrderHistoryModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
  type: _ReplenishmentOrderHistoryModule
});
_ReplenishmentOrderHistoryModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
  providers: [provideDefaultConfig(defaultReplenishmentOrderCancellationLayoutConfig), provideDefaultConfig({
    cmsComponents: {
      AccountReplenishmentHistoryComponent: {
        component: ReplenishmentOrderHistoryComponent,
        guards: [AuthGuard]
      }
    }
  })],
  imports: [CommonModule, RouterModule, ListNavigationModule, UrlModule, I18nModule]
});
var ReplenishmentOrderHistoryModule = _ReplenishmentOrderHistoryModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ReplenishmentOrderHistoryModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, RouterModule, ListNavigationModule, UrlModule, I18nModule],
      providers: [provideDefaultConfig(defaultReplenishmentOrderCancellationLayoutConfig), provideDefaultConfig({
        cmsComponents: {
          AccountReplenishmentHistoryComponent: {
            component: ReplenishmentOrderHistoryComponent,
            guards: [AuthGuard]
          }
        }
      })],
      declarations: [ReplenishmentOrderHistoryComponent],
      exports: [ReplenishmentOrderHistoryComponent]
    }]
  }], null, null);
})();
var _ReturnRequestService = class _ReturnRequestService {
  constructor(routingService, returnRequestService, globalMessageService) {
    this.routingService = routingService;
    this.returnRequestService = returnRequestService;
    this.globalMessageService = globalMessageService;
  }
  get isCancelling$() {
    return this.returnRequestService.getCancelReturnRequestLoading();
  }
  get isCancelSuccess$() {
    return this.returnRequestService.getCancelReturnRequestSuccess();
  }
  getReturnRequest() {
    return combineLatest([this.routingService.getRouterState(), this.returnRequestService.getOrderReturnRequest(), this.returnRequestService.getReturnRequestLoading()]).pipe(map(([routingState, returnRequest, isLoading]) => [routingState.state.params["returnCode"], returnRequest, isLoading]), filter(([returnCode]) => Boolean(returnCode)), tap(([returnCode, returnRequest, isLoading]) => {
      if ((returnRequest === void 0 || returnRequest.rma !== returnCode) && !isLoading) {
        this.returnRequestService.loadOrderReturnRequestDetail(returnCode);
      }
    }), map(([_, returnRequest]) => returnRequest), filter((returnRequest) => Boolean(returnRequest)), distinctUntilChanged());
  }
  clearReturnRequest() {
    this.returnRequestService.clearOrderReturnRequestDetail();
  }
  cancelReturnRequest(returnRequestCode) {
    this.returnRequestService.cancelOrderReturnRequest(returnRequestCode, {
      status: "CANCELLING"
    });
  }
  cancelSuccess(rma) {
    this.returnRequestService.resetCancelReturnRequestProcessState();
    this.globalMessageService.add({
      key: "returnRequest.cancelSuccess",
      params: {
        rma
      }
    }, GlobalMessageType.MSG_TYPE_CONFIRMATION);
    this.routingService.go({
      cxRoute: "orders"
    });
  }
  backToList() {
    this.routingService.go({
      cxRoute: "orders"
    }, {
      state: {
        activeTab: 1
      }
    });
  }
};
_ReturnRequestService.\u0275fac = function ReturnRequestService_Factory(t) {
  return new (t || _ReturnRequestService)(\u0275\u0275inject(RoutingService), \u0275\u0275inject(OrderReturnRequestFacade), \u0275\u0275inject(GlobalMessageService));
};
_ReturnRequestService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
  token: _ReturnRequestService,
  factory: _ReturnRequestService.\u0275fac,
  providedIn: "root"
});
var ReturnRequestService = _ReturnRequestService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ReturnRequestService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: RoutingService
  }, {
    type: OrderReturnRequestFacade
  }, {
    type: GlobalMessageService
  }], null);
})();
var _ReturnRequestItemsComponent = class _ReturnRequestItemsComponent {
  constructor(returnRequestService) {
    this.returnRequestService = returnRequestService;
    this.returnRequest$ = this.returnRequestService.getReturnRequest();
  }
};
_ReturnRequestItemsComponent.\u0275fac = function ReturnRequestItemsComponent_Factory(t) {
  return new (t || _ReturnRequestItemsComponent)(\u0275\u0275directiveInject(ReturnRequestService));
};
_ReturnRequestItemsComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
  type: _ReturnRequestItemsComponent,
  selectors: [["cx-return-request-items"]],
  decls: 2,
  vars: 3,
  consts: [["class", "cx-return-request-items", 4, "ngIf"], [1, "cx-return-request-items"], [1, "cx-visually-hidden"], ["role", "columnheader", 1, "cx-item-list-desc"], ["role", "columnheader", 1, "cx-item-list-price"], ["role", "columnheader", 1, "cx-item-list-qty"], ["role", "columnheader", 1, "cx-item-list-total"], [1, "cx-item-list-items"], ["class", "cx-item-list-row cx-return-request-item-row", 4, "ngFor", "ngForOf"], [1, "cx-item-list-row", "cx-return-request-item-row"], ["role", "cell"], [1, "cx-table-item-container"], ["format", "thumbnail", 3, "container"], [1, "cx-info"], ["class", "cx-name", 4, "ngIf"], ["class", "cx-code", 4, "ngIf"], ["class", "cx-property", 4, "ngFor", "ngForOf"], ["role", "cell", "class", "cx-price", 4, "ngIf"], ["role", "cell", 1, "cx-quantity"], [1, "cx-mobile-header"], [1, "cx-value"], ["role", "cell", 1, "cx-total"], [1, "cx-name"], [1, "cx-code"], [1, "cx-property"], ["class", "cx-label", 4, "ngIf"], ["class", "cx-value", 4, "ngIf"], [1, "cx-label"], ["role", "cell", 1, "cx-price"]],
  template: function ReturnRequestItemsComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275template(0, ReturnRequestItemsComponent_table_0_Template, 20, 16, "table", 0);
      \u0275\u0275pipe(1, "async");
    }
    if (rf & 2) {
      \u0275\u0275property("ngIf", \u0275\u0275pipeBind1(1, 1, ctx.returnRequest$));
    }
  },
  dependencies: [NgForOf, NgIf, MediaComponent, AsyncPipe, TranslatePipe],
  encapsulation: 2,
  changeDetection: 0
});
var ReturnRequestItemsComponent = _ReturnRequestItemsComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ReturnRequestItemsComponent, [{
    type: Component,
    args: [{
      selector: "cx-return-request-items",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: `<table
  class="cx-return-request-items"
  *ngIf="returnRequest$ | async as returnRequest"
>
  <caption class="cx-visually-hidden">
    {{
      'returnRequest.caption' | cxTranslate
    }}
  </caption>
  <thead>
    <tr>
      <th role="columnheader" class="cx-item-list-desc">
        {{ 'returnRequest.item' | cxTranslate }}
      </th>
      <th role="columnheader" class="cx-item-list-price">
        {{ 'returnRequest.itemPrice' | cxTranslate }}
      </th>
      <th role="columnheader" class="cx-item-list-qty">
        {{ 'returnRequest.returnQty' | cxTranslate }}
      </th>
      <th role="columnheader" class="cx-item-list-total">
        {{ 'returnRequest.total' | cxTranslate }}
      </th>
    </tr>
  </thead>

  <tbody class="cx-item-list-items">
    <!-- TODO: This should be a separate component-->
    <tr
      class="cx-item-list-row cx-return-request-item-row"
      *ngFor="let returnEntry of returnRequest.returnEntries; let i = index"
    >
      <td role="cell">
        <!-- Item Image -->
        <div class="cx-table-item-container">
          <cx-media
            [container]="returnEntry.orderEntry?.product.images?.PRIMARY"
            format="thumbnail"
          ></cx-media>
          <!-- Item Description -->
          <div class="cx-info">
            <div *ngIf="returnEntry.orderEntry?.product.name" class="cx-name">
              {{ returnEntry.orderEntry?.product.name }}
            </div>
            <div *ngIf="returnEntry.orderEntry?.product.code" class="cx-code">
              {{ 'cartItems.id' | cxTranslate }}
              {{ returnEntry.orderEntry?.product.code }}
            </div>
            <!-- Variants -->
            <div
              *ngFor="
                let variant of (returnEntry.orderEntry?.product.baseOptions)[0]
                  ?.selected?.variantOptionQualifiers
              "
              class="cx-property"
            >
              <div class="cx-label" *ngIf="variant.name">
                {{ variant.name }}:
              </div>
              <div class="cx-value" *ngIf="variant.value">
                {{ variant.value }}
              </div>
            </div>
          </div>
        </div>
      </td>
      <!-- Item Price -->
      <td
        role="cell"
        class="cx-price"
        *ngIf="returnEntry.orderEntry?.basePrice"
      >
        <div class="cx-mobile-header">
          {{ 'returnRequest.itemPrice' | cxTranslate }}
        </div>
        <div class="cx-value">
          {{ returnEntry.orderEntry?.basePrice?.formattedValue }}
        </div>
      </td>
      <!-- return Quantity -->
      <td role="cell" class="cx-quantity">
        <div class="cx-mobile-header">
          {{ 'returnRequest.returnQty' | cxTranslate }}
        </div>
        <div class="cx-value">
          {{ returnEntry.expectedQuantity }}
        </div>
      </td>
      <!-- Total Price -->
      <td role="cell" class="cx-total">
        <div class="cx-mobile-header">
          {{ 'returnRequest.total' | cxTranslate }}
        </div>
        <div class="cx-value">
          {{ returnEntry.refundAmount?.formattedValue }}
        </div>
      </td>
    </tr>
  </tbody>
</table>
`
    }]
  }], () => [{
    type: ReturnRequestService
  }], null);
})();
var _ReturnRequestOverviewComponent = class _ReturnRequestOverviewComponent {
  constructor(returnRequestService) {
    this.returnRequestService = returnRequestService;
    this.returnRequest$ = this.returnRequestService.getReturnRequest().pipe(tap((returnRequest) => this.rma = returnRequest.rma ?? ""));
    this.isCancelling$ = this.returnRequestService.isCancelling$;
  }
  ngOnInit() {
    this.subscription = this.returnRequestService.isCancelSuccess$.subscribe((success) => {
      if (success) {
        this.returnRequestService.cancelSuccess(this.rma);
      }
    });
  }
  cancelReturn(returnRequestCode) {
    this.returnRequestService.cancelReturnRequest(returnRequestCode);
  }
  back() {
    this.returnRequestService.backToList();
  }
  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
};
_ReturnRequestOverviewComponent.\u0275fac = function ReturnRequestOverviewComponent_Factory(t) {
  return new (t || _ReturnRequestOverviewComponent)(\u0275\u0275directiveInject(ReturnRequestService));
};
_ReturnRequestOverviewComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
  type: _ReturnRequestOverviewComponent,
  selectors: [["cx-return-request-overview"]],
  decls: 2,
  vars: 3,
  consts: [[4, "ngIf"], [1, "cx-nav", "row"], [1, "col-xs-12", "col-md-4", "col-lg-3"], [1, "btn", "btn-block", "btn-secondary", 3, "click"], ["class", "btn btn-block btn-primary", 3, "disabled", "click", 4, "ngIf"], [1, "cx-header", "row"], [1, "cx-detail", "col-sm-12", "col-md-4"], [1, "cx-detail-label"], [1, "cx-detail-value"], [1, "btn", "btn-block", "btn-primary", 3, "click", "disabled"]],
  template: function ReturnRequestOverviewComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275template(0, ReturnRequestOverviewComponent_ng_container_0_Template, 28, 18, "ng-container", 0);
      \u0275\u0275pipe(1, "async");
    }
    if (rf & 2) {
      \u0275\u0275property("ngIf", \u0275\u0275pipeBind1(1, 1, ctx.returnRequest$));
    }
  },
  dependencies: [NgIf, AsyncPipe, TranslatePipe],
  encapsulation: 2,
  changeDetection: 0
});
var ReturnRequestOverviewComponent = _ReturnRequestOverviewComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ReturnRequestOverviewComponent, [{
    type: Component,
    args: [{
      selector: "cx-return-request-overview",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: `<ng-container *ngIf="returnRequest$ | async as returnRequest">
  <div class="cx-nav row">
    <div class="col-xs-12 col-md-4 col-lg-3">
      <button (click)="back()" class="btn btn-block btn-secondary">
        {{ 'common.back' | cxTranslate }}
      </button>
    </div>

    <div class="col-xs-12 col-md-4 col-lg-3">
      <button
        *ngIf="returnRequest.cancellable"
        class="btn btn-block btn-primary"
        (click)="cancelReturn(returnRequest.rma)"
        [disabled]="isCancelling$ | async"
      >
        {{ 'returnRequest.cancel' | cxTranslate }}
      </button>
    </div>
  </div>
  <div class="cx-header row">
    <div class="cx-detail col-sm-12 col-md-4">
      <div class="cx-detail-label">
        {{ 'returnRequest.returnRequestId' | cxTranslate }}
      </div>
      <div class="cx-detail-value">{{ returnRequest.rma }}</div>
    </div>
    <div class="cx-detail col-sm-12 col-md-4">
      <div class="cx-detail-label">
        {{ 'returnRequest.orderCode' | cxTranslate }}
      </div>
      <div class="cx-detail-value">{{ returnRequest.order?.code }}</div>
    </div>
    <div class="cx-detail col-sm-12 col-md-4">
      <div class="cx-detail-label">
        {{ 'returnRequest.status' | cxTranslate }}
      </div>
      <div class="cx-detail-value">
        {{
          'returnRequestList.statusDisplay_' + returnRequest?.status
            | cxTranslate
        }}
      </div>
    </div>
  </div>
</ng-container>
`
    }]
  }], () => [{
    type: ReturnRequestService
  }], null);
})();
var _ReturnRequestTotalsComponent = class _ReturnRequestTotalsComponent {
  constructor(returnRequestService) {
    this.returnRequestService = returnRequestService;
    this.returnRequest$ = this.returnRequestService.getReturnRequest();
  }
  ngOnDestroy() {
    this.returnRequestService.clearReturnRequest();
  }
};
_ReturnRequestTotalsComponent.\u0275fac = function ReturnRequestTotalsComponent_Factory(t) {
  return new (t || _ReturnRequestTotalsComponent)(\u0275\u0275directiveInject(ReturnRequestService));
};
_ReturnRequestTotalsComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
  type: _ReturnRequestTotalsComponent,
  selectors: [["cx-return-request-totals"]],
  decls: 2,
  vars: 3,
  consts: [[4, "ngIf"], [1, "row", "justify-content-end"], [1, "cx-summary", "col-sm-12", "col-md-6", "col-lg-5", "col-xl-4"], [1, "cx-summary-row"], [1, "col-6", "cx-summary-label"], [1, "col-6", "cx-summary-amount"], [1, "cx-summary-row", "cx-summary-total"], [1, "cx-summary-row", "cx-footnote"]],
  template: function ReturnRequestTotalsComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275template(0, ReturnRequestTotalsComponent_ng_container_0_Template, 27, 18, "ng-container", 0);
      \u0275\u0275pipe(1, "async");
    }
    if (rf & 2) {
      \u0275\u0275property("ngIf", \u0275\u0275pipeBind1(1, 1, ctx.returnRequest$));
    }
  },
  dependencies: [NgIf, AsyncPipe, TranslatePipe],
  encapsulation: 2,
  changeDetection: 0
});
var ReturnRequestTotalsComponent = _ReturnRequestTotalsComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ReturnRequestTotalsComponent, [{
    type: Component,
    args: [{
      selector: "cx-return-request-totals",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: `<ng-container *ngIf="returnRequest$ | async as returnRequest">
  <div class="row justify-content-end">
    <div class="cx-summary col-sm-12 col-md-6 col-lg-5 col-xl-4">
      <h4>{{ 'returnRequest.summary' | cxTranslate }}</h4>
      <div class="cx-summary-row">
        <div class="col-6 cx-summary-label">
          {{ 'returnRequest.subtotal' | cxTranslate }}
        </div>
        <div class="col-6 cx-summary-amount">
          {{ returnRequest.subTotal?.formattedValue }}
        </div>
      </div>
      <div class="cx-summary-row">
        <div class="col-6 cx-summary-label">
          {{ 'returnRequest.deliveryCode' | cxTranslate }}
        </div>
        <div class="col-6 cx-summary-amount">
          {{ returnRequest.deliveryCost?.formattedValue }}
        </div>
      </div>
      <div class="cx-summary-row cx-summary-total">
        <div class="col-6 cx-summary-label">
          {{ 'returnRequest.estimatedRefund' | cxTranslate }}
        </div>
        <div class="col-6 cx-summary-amount">
          {{ returnRequest.totalPrice?.formattedValue }}
        </div>
      </div>
      <div class="cx-summary-row cx-footnote">
        {{ 'returnRequest.note' | cxTranslate }}
      </div>
    </div>
  </div>
</ng-container>
`
    }]
  }], () => [{
    type: ReturnRequestService
  }], null);
})();
var components = [ReturnRequestOverviewComponent, ReturnRequestItemsComponent, ReturnRequestTotalsComponent];
var _ReturnRequestDetailModule = class _ReturnRequestDetailModule {
};
_ReturnRequestDetailModule.\u0275fac = function ReturnRequestDetailModule_Factory(t) {
  return new (t || _ReturnRequestDetailModule)();
};
_ReturnRequestDetailModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
  type: _ReturnRequestDetailModule
});
_ReturnRequestDetailModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
  providers: [provideDefaultConfig({
    cmsComponents: {
      ReturnRequestOverviewComponent: {
        component: ReturnRequestOverviewComponent
      },
      ReturnRequestItemsComponent: {
        component: ReturnRequestItemsComponent
      },
      ReturnRequestTotalsComponent: {
        component: ReturnRequestTotalsComponent
      }
    }
  })],
  imports: [CommonModule, RouterModule, UrlModule, I18nModule, MediaModule]
});
var ReturnRequestDetailModule = _ReturnRequestDetailModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ReturnRequestDetailModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, RouterModule, UrlModule, I18nModule, MediaModule],
      providers: [provideDefaultConfig({
        cmsComponents: {
          ReturnRequestOverviewComponent: {
            component: ReturnRequestOverviewComponent
          },
          ReturnRequestItemsComponent: {
            component: ReturnRequestItemsComponent
          },
          ReturnRequestTotalsComponent: {
            component: ReturnRequestTotalsComponent
          }
        }
      })],
      declarations: [...components],
      exports: [...components]
    }]
  }], null, null);
})();
var _OrderReturnRequestListComponent = class _OrderReturnRequestListComponent {
  constructor(returnRequestService, translation) {
    this.returnRequestService = returnRequestService;
    this.translation = translation;
    this.PAGE_SIZE = 5;
    this.returnRequests$ = this.returnRequestService.getOrderReturnRequestList(this.PAGE_SIZE).pipe(tap((requestList) => {
      if (requestList?.pagination?.sort) {
        this.sortType = requestList.pagination.sort;
      }
    }));
    this.tabTitleParam$ = this.returnRequests$.pipe(map((returnRequests) => returnRequests?.pagination?.totalResults), filter(isNotUndefined), take(1));
  }
  ngOnDestroy() {
    this.returnRequestService.clearOrderReturnRequestList();
  }
  changeSortCode(sortCode) {
    const event = {
      sortCode,
      currentPage: 0
    };
    this.sortType = sortCode;
    this.fetchReturnRequests(event);
  }
  pageChange(page) {
    const event = {
      sortCode: this.sortType,
      currentPage: page
    };
    this.fetchReturnRequests(event);
  }
  getSortLabels() {
    return combineLatest([this.translation.translate("sorting.date"), this.translation.translate("sorting.rma")]).pipe(map(([textByDate, textByRma]) => {
      return {
        byDate: textByDate,
        byRMA: textByRma
      };
    }));
  }
  fetchReturnRequests(event) {
    this.returnRequestService.loadOrderReturnRequestList(this.PAGE_SIZE, event.currentPage, event.sortCode);
  }
};
_OrderReturnRequestListComponent.\u0275fac = function OrderReturnRequestListComponent_Factory(t) {
  return new (t || _OrderReturnRequestListComponent)(\u0275\u0275directiveInject(OrderReturnRequestFacade), \u0275\u0275directiveInject(TranslationService));
};
_OrderReturnRequestListComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
  type: _OrderReturnRequestListComponent,
  selectors: [["cx-order-return-request-list"]],
  decls: 2,
  vars: 3,
  consts: [[4, "ngIf"], [1, "container"], [1, "cx-order-history-body"], [1, "cx-order-history-sort", "top"], [1, "cx-order-history-form-group", "form-group"], ["ariaControls", "order-return-table", 3, "sortListEvent", "sortOptions", "sortLabels", "selectedOption", "ariaLabel"], [1, "cx-order-history-pagination"], [3, "viewPageEvent", "pagination"], ["id", "order-return-table", 1, "table", "cx-order-history-table"], [1, "cx-order-history-thead-mobile"], ["scope", "col"], [4, "ngFor", "ngForOf"], [1, "cx-order-history-sort", "bottom"], [1, "cx-order-history-code"], [1, "cx-order-history-label"], [1, "cx-order-history-value", 3, "routerLink"], [1, "cx-order-history-placed"], [1, "cx-order-history-status"]],
  template: function OrderReturnRequestListComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275template(0, OrderReturnRequestListComponent_ng_container_0_Template, 4, 1, "ng-container", 0);
      \u0275\u0275pipe(1, "async");
    }
    if (rf & 2) {
      \u0275\u0275property("ngIf", \u0275\u0275pipeBind1(1, 1, ctx.returnRequests$));
    }
  },
  dependencies: [NgForOf, NgIf, RouterLink, SortingComponent, PaginationComponent, AsyncPipe, UrlPipe, TranslatePipe, CxDatePipe],
  encapsulation: 2,
  changeDetection: 0
});
var OrderReturnRequestListComponent = _OrderReturnRequestListComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OrderReturnRequestListComponent, [{
    type: Component,
    args: [{
      selector: "cx-order-return-request-list",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: `<ng-container *ngIf="returnRequests$ | async as returnRequests">
  <div class="container">
    <!-- BODY -->
    <div class="cx-order-history-body">
      <ng-container *ngIf="returnRequests.pagination.totalResults > 0">
        <!-- Select Form and Pagination Top -->
        <div class="cx-order-history-sort top">
          <label class="cx-order-history-form-group form-group"
            ><span>{{ 'returnRequestList.sortBy' | cxTranslate }}</span>
            <cx-sorting
              [sortOptions]="returnRequests.sorts"
              [sortLabels]="getSortLabels() | async"
              (sortListEvent)="changeSortCode($event)"
              [selectedOption]="returnRequests.pagination.sort"
              [ariaLabel]="'returnRequestList.sortReturns' | cxTranslate"
              ariaControls="order-return-table"
            ></cx-sorting>
          </label>
          <div class="cx-order-history-pagination">
            <cx-pagination
              [pagination]="returnRequests.pagination"
              (viewPageEvent)="pageChange($event)"
            ></cx-pagination>
          </div>
        </div>
        <!-- TABLE -->
        <table id="order-return-table" class="table cx-order-history-table">
          <thead class="cx-order-history-thead-mobile">
            <th scope="col">
              {{ 'returnRequestList.returnRequestId' | cxTranslate }}
            </th>
            <th scope="col">{{ 'returnRequestList.orderId' | cxTranslate }}</th>
            <th scope="col">
              {{ 'returnRequestList.date' | cxTranslate }}
            </th>
            <th scope="col">{{ 'returnRequestList.status' | cxTranslate }}</th>
          </thead>
          <tbody>
            <tr *ngFor="let return of returnRequests.returnRequests">
              <td class="cx-order-history-code">
                <div class="cx-order-history-label">
                  {{ 'returnRequestList.returnRequestId' | cxTranslate }}
                </div>
                <a
                  [routerLink]="
                    {
                      cxRoute: 'returnRequestDetails',
                      params: return
                    } | cxUrl
                  "
                  class="cx-order-history-value"
                >
                  {{ return?.rma }}</a
                >
              </td>
              <td class="cx-order-history-code">
                <div class="cx-order-history-label">
                  {{ 'returnRequestList.orderId' | cxTranslate }}
                </div>
                <a
                  [routerLink]="
                    {
                      cxRoute: 'orderDetails',
                      params: return?.order
                    } | cxUrl
                  "
                  class="cx-order-history-value"
                >
                  {{ return?.order?.code }}</a
                >
              </td>

              <td class="cx-order-history-placed">
                <div class="cx-order-history-label">
                  {{ 'returnRequestList.date' | cxTranslate }}
                </div>
                {{ return?.creationTime | cxDate: 'longDate' }}
              </td>
              <td class="cx-order-history-status">
                <div class="cx-order-history-label">
                  {{ 'returnRequestList.status' | cxTranslate }}
                </div>
                {{
                  'returnRequestList.statusDisplay_' + return?.status
                    | cxTranslate
                }}
              </td>
            </tr>
          </tbody>
        </table>
        <!-- Select Form and Pagination Bottom -->
        <div class="cx-order-history-sort bottom">
          <label class="cx-order-history-form-group form-group"
            ><span>{{ 'returnRequestList.sortBy' | cxTranslate }}</span>
            <cx-sorting
              [sortOptions]="returnRequests.sorts"
              [sortLabels]="getSortLabels() | async"
              (sortListEvent)="changeSortCode($event)"
              [selectedOption]="returnRequests.pagination.sort"
              [ariaLabel]="'returnRequestList.sortReturns' | cxTranslate"
              ariaControls="order-return-table"
            ></cx-sorting>
          </label>
          <div class="cx-order-history-pagination">
            <cx-pagination
              [pagination]="returnRequests.pagination"
              (viewPageEvent)="pageChange($event)"
            ></cx-pagination>
          </div>
        </div>
      </ng-container>
    </div>
  </div>
</ng-container>
`
    }]
  }], () => [{
    type: OrderReturnRequestFacade
  }, {
    type: TranslationService
  }], null);
})();
var _ReturnRequestListModule = class _ReturnRequestListModule {
};
_ReturnRequestListModule.\u0275fac = function ReturnRequestListModule_Factory(t) {
  return new (t || _ReturnRequestListModule)();
};
_ReturnRequestListModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
  type: _ReturnRequestListModule
});
_ReturnRequestListModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
  providers: [provideDefaultConfig({
    cmsComponents: {
      OrderReturnRequestListComponent: {
        component: OrderReturnRequestListComponent,
        guards: [AuthGuard]
      }
    }
  })],
  imports: [CommonModule, RouterModule, ListNavigationModule, UrlModule, I18nModule]
});
var ReturnRequestListModule = _ReturnRequestListModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ReturnRequestListModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, RouterModule, ListNavigationModule, UrlModule, I18nModule],
      providers: [provideDefaultConfig({
        cmsComponents: {
          OrderReturnRequestListComponent: {
            component: OrderReturnRequestListComponent,
            guards: [AuthGuard]
          }
        }
      })],
      declarations: [OrderReturnRequestListComponent],
      exports: [OrderReturnRequestListComponent]
    }]
  }], null, null);
})();
var _OrderComponentsModule = class _OrderComponentsModule {
};
_OrderComponentsModule.\u0275fac = function OrderComponentsModule_Factory(t) {
  return new (t || _OrderComponentsModule)();
};
_OrderComponentsModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
  type: _OrderComponentsModule
});
_OrderComponentsModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
  providers: [{
    provide: OrderDetailsOrderEntriesContextToken,
    useExisting: OrderDetailsOrderEntriesContext
  }],
  imports: [OrderHistoryModule, OrderDetailsModule, ReplenishmentOrderDetailsModule, OrderCancellationModule, OrderReturnModule, ReplenishmentOrderHistoryModule, ReturnRequestListModule, ReturnRequestDetailModule, OrderConfirmationModule, MyAccountV2OrdersModule]
});
var OrderComponentsModule = _OrderComponentsModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OrderComponentsModule, [{
    type: NgModule,
    args: [{
      imports: [OrderHistoryModule, OrderDetailsModule, ReplenishmentOrderDetailsModule, OrderCancellationModule, OrderReturnModule, ReplenishmentOrderHistoryModule, ReturnRequestListModule, ReturnRequestDetailModule, OrderConfirmationModule, MyAccountV2OrdersModule],
      providers: [{
        provide: OrderDetailsOrderEntriesContextToken,
        useExisting: OrderDetailsOrderEntriesContext
      }]
    }]
  }], null, null);
})();

// node_modules/@spartacus/order/fesm2022/spartacus-order-occ.mjs
var _OccOrderNormalizer = class _OccOrderNormalizer {
  constructor(converter) {
    this.converter = converter;
  }
  convert(source, target) {
    if (target === void 0) {
      target = __spreadValues({}, source);
    }
    if (source.entries) {
      target.entries = source.entries.map((entry) => this.convertOrderEntry(entry, source.code, source.appliedProductPromotions));
    }
    if (source.consignments) {
      target.consignments = source.consignments.map((consignment) => __spreadProps(__spreadValues({}, consignment), {
        entries: consignment.entries?.map((entry) => __spreadProps(__spreadValues({}, entry), {
          orderEntry: this.convertOrderEntry(entry.orderEntry, source.code, source.appliedProductPromotions)
        }))
      }));
    }
    if (source.unconsignedEntries) {
      target.unconsignedEntries = source.unconsignedEntries.map((entry) => this.convertOrderEntry(entry, source.code, source.appliedProductPromotions));
    }
    return target;
  }
  convertOrderEntry(source, code, promotions) {
    return __spreadProps(__spreadValues({}, source), {
      product: this.converter.convert(source?.product, PRODUCT_NORMALIZER),
      orderCode: code,
      promotions: this.converter.convert({
        item: source,
        promotions
      }, ORDER_ENTRY_PROMOTIONS_NORMALIZER)
    });
  }
};
_OccOrderNormalizer.\u0275fac = function OccOrderNormalizer_Factory(t) {
  return new (t || _OccOrderNormalizer)(\u0275\u0275inject(ConverterService));
};
_OccOrderNormalizer.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
  token: _OccOrderNormalizer,
  factory: _OccOrderNormalizer.\u0275fac,
  providedIn: "root"
});
var OccOrderNormalizer = _OccOrderNormalizer;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OccOrderNormalizer, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: ConverterService
  }], null);
})();
var _OccReplenishmentOrderNormalizer = class _OccReplenishmentOrderNormalizer {
  constructor(converter) {
    this.converter = converter;
  }
  convert(source, target) {
    if (target === void 0) {
      target = __spreadValues({}, source);
    }
    if (source.entries) {
      target.entries = source.entries.map((entry) => __spreadProps(__spreadValues({}, entry), {
        product: this.converter.convert(entry.product, PRODUCT_NORMALIZER),
        promotions: this.converter.convert({
          item: entry,
          promotions: source.appliedProductPromotions
        }, ORDER_ENTRY_PROMOTIONS_NORMALIZER)
      }));
    }
    return target;
  }
};
_OccReplenishmentOrderNormalizer.\u0275fac = function OccReplenishmentOrderNormalizer_Factory(t) {
  return new (t || _OccReplenishmentOrderNormalizer)(\u0275\u0275inject(ConverterService));
};
_OccReplenishmentOrderNormalizer.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
  token: _OccReplenishmentOrderNormalizer,
  factory: _OccReplenishmentOrderNormalizer.\u0275fac,
  providedIn: "root"
});
var OccReplenishmentOrderNormalizer = _OccReplenishmentOrderNormalizer;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OccReplenishmentOrderNormalizer, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: ConverterService
  }], null);
})();
var _OccReturnRequestNormalizer = class _OccReturnRequestNormalizer {
  constructor(converter) {
    this.converter = converter;
  }
  convert(source, target) {
    if (target === void 0) {
      target = __spreadValues({}, source);
    }
    if (source.returnEntries) {
      target.returnEntries = source.returnEntries.map((entry) => __spreadProps(__spreadValues({}, entry), {
        orderEntry: this.convertOrderEntry(entry.orderEntry)
      }));
    }
    return target;
  }
  convertOrderEntry(source) {
    return __spreadProps(__spreadValues({}, source), {
      product: this.converter.convert(source?.product, PRODUCT_NORMALIZER)
    });
  }
};
_OccReturnRequestNormalizer.\u0275fac = function OccReturnRequestNormalizer_Factory(t) {
  return new (t || _OccReturnRequestNormalizer)(\u0275\u0275inject(ConverterService));
};
_OccReturnRequestNormalizer.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
  token: _OccReturnRequestNormalizer,
  factory: _OccReturnRequestNormalizer.\u0275fac,
  providedIn: "root"
});
var OccReturnRequestNormalizer = _OccReturnRequestNormalizer;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OccReturnRequestNormalizer, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: ConverterService
  }], null);
})();
var _OccScheduledReplenishmentOrderFormSerializer = class _OccScheduledReplenishmentOrderFormSerializer {
  convert(source, target) {
    if (target === void 0) {
      target = __spreadValues({}, source);
    }
    if (source.replenishmentStartDate) {
      target.replenishmentStartDate = this.convertDate(source.replenishmentStartDate);
    }
    return target;
  }
  /**
   * Adds the current timestamp (including timezone offset) to a date string in the format YYYY-mm-dd
   * @Example
   * Converts 2021-10-15 to 2021-10-15T15:38:05-05:00
   */
  convertDate(date) {
    const localTime = (/* @__PURE__ */ new Date()).toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
      hourCycle: "h23"
    });
    return `${date}T${localTime}:00${TimeUtils.getLocalTimezoneOffset()}`;
  }
};
_OccScheduledReplenishmentOrderFormSerializer.\u0275fac = function OccScheduledReplenishmentOrderFormSerializer_Factory(t) {
  return new (t || _OccScheduledReplenishmentOrderFormSerializer)();
};
_OccScheduledReplenishmentOrderFormSerializer.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
  token: _OccScheduledReplenishmentOrderFormSerializer,
  factory: _OccScheduledReplenishmentOrderFormSerializer.\u0275fac,
  providedIn: "root"
});
var OccScheduledReplenishmentOrderFormSerializer = _OccScheduledReplenishmentOrderFormSerializer;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OccScheduledReplenishmentOrderFormSerializer, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var CONTENT_TYPE_JSON_HEADER = {
  "Content-Type": "application/json"
};
var _OccOrderHistoryAdapter = class _OccOrderHistoryAdapter {
  constructor(http, occEndpoints, converter) {
    this.http = http;
    this.occEndpoints = occEndpoints;
    this.converter = converter;
    this.logger = inject(LoggerService);
  }
  load(userId, orderCode) {
    const url = this.occEndpoints.buildUrl("orderDetail", {
      urlParams: {
        userId,
        orderId: orderCode
      }
    });
    let headers = new HttpHeaders();
    if (userId === OCC_USER_ID_ANONYMOUS) {
      headers = InterceptorUtil.createHeader(USE_CLIENT_TOKEN, true, headers);
    }
    return this.http.get(url, {
      headers
    }).pipe(this.converter.pipeable(ORDER_NORMALIZER));
  }
  loadHistory(userId, pageSize, currentPage, sort) {
    const params = {};
    if (pageSize) {
      params["pageSize"] = pageSize.toString();
    }
    if (currentPage) {
      params["currentPage"] = currentPage.toString();
    }
    if (sort) {
      params["sort"] = sort.toString();
    }
    const url = this.occEndpoints.buildUrl("orderHistory", {
      urlParams: {
        userId
      },
      queryParams: params
    });
    return this.http.get(url).pipe(this.converter.pipeable(ORDER_HISTORY_NORMALIZER));
  }
  getConsignmentTracking(orderCode, consignmentCode, userId = OCC_USER_ID_CURRENT) {
    const url = this.occEndpoints.buildUrl("consignmentTracking", {
      urlParams: {
        userId,
        orderCode,
        consignmentCode
      }
    });
    return this.http.get(url).pipe(this.converter.pipeable(CONSIGNMENT_TRACKING_NORMALIZER));
  }
  cancel(userId, orderCode, cancelRequestInput) {
    const url = this.occEndpoints.buildUrl("cancelOrder", {
      urlParams: {
        userId,
        orderId: orderCode
      }
    });
    const headers = new HttpHeaders(__spreadValues({}, CONTENT_TYPE_JSON_HEADER));
    return this.http.post(url, cancelRequestInput, {
      headers
    }).pipe(catchError((error) => {
      throw normalizeHttpError(error, this.logger);
    }));
  }
  createReturnRequest(userId, returnRequestInput) {
    const url = this.occEndpoints.buildUrl("returnOrder", {
      urlParams: {
        userId
      }
    });
    const headers = new HttpHeaders(__spreadValues({}, CONTENT_TYPE_JSON_HEADER));
    returnRequestInput = this.converter.convert(returnRequestInput, ORDER_RETURN_REQUEST_INPUT_SERIALIZER);
    return this.http.post(url, returnRequestInput, {
      headers
    }).pipe(catchError((error) => {
      throw normalizeHttpError(error, this.logger);
    }), this.converter.pipeable(ORDER_RETURN_REQUEST_NORMALIZER));
  }
  loadReturnRequestList(userId, pageSize, currentPage, sort) {
    const params = {};
    if (pageSize) {
      params["pageSize"] = pageSize.toString();
    }
    if (currentPage) {
      params["currentPage"] = currentPage.toString();
    }
    if (sort) {
      params["sort"] = sort.toString();
    }
    const url = this.occEndpoints.buildUrl("orderReturns", {
      urlParams: {
        userId
      },
      queryParams: params
    });
    return this.http.get(url).pipe(this.converter.pipeable(ORDER_RETURNS_NORMALIZER));
  }
  loadReturnRequestDetail(userId, returnRequestCode) {
    const url = this.occEndpoints.buildUrl("orderReturnDetail", {
      urlParams: {
        userId,
        returnRequestCode
      }
    });
    return this.http.get(url).pipe(this.converter.pipeable(ORDER_RETURN_REQUEST_NORMALIZER));
  }
  cancelReturnRequest(userId, returnRequestCode, returnRequestModification) {
    const url = this.occEndpoints.buildUrl("cancelReturn", {
      urlParams: {
        userId,
        returnRequestCode
      }
    });
    const headers = new HttpHeaders(__spreadValues({}, CONTENT_TYPE_JSON_HEADER));
    return this.http.patch(url, returnRequestModification, {
      headers
    }).pipe(catchError((error) => {
      throw normalizeHttpError(error, this.logger);
    }));
  }
};
_OccOrderHistoryAdapter.\u0275fac = function OccOrderHistoryAdapter_Factory(t) {
  return new (t || _OccOrderHistoryAdapter)(\u0275\u0275inject(HttpClient), \u0275\u0275inject(OccEndpointsService), \u0275\u0275inject(ConverterService));
};
_OccOrderHistoryAdapter.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
  token: _OccOrderHistoryAdapter,
  factory: _OccOrderHistoryAdapter.\u0275fac
});
var OccOrderHistoryAdapter = _OccOrderHistoryAdapter;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OccOrderHistoryAdapter, [{
    type: Injectable
  }], () => [{
    type: HttpClient
  }, {
    type: OccEndpointsService
  }, {
    type: ConverterService
  }], null);
})();
var _OccOrderAdapter = class _OccOrderAdapter {
  constructor(http, occEndpoints, converter) {
    this.http = http;
    this.occEndpoints = occEndpoints;
    this.converter = converter;
    this.logger = inject(LoggerService);
  }
  placeOrder(userId, cartId, termsChecked) {
    let headers = new HttpHeaders({
      "Content-Type": "application/x-www-form-urlencoded"
    });
    if (userId === OCC_USER_ID_ANONYMOUS) {
      headers = InterceptorUtil.createHeader(USE_CLIENT_TOKEN, true, headers);
    }
    return this.http.post(this.getPlaceOrderEndpoint(userId, cartId, termsChecked.toString()), {}, {
      headers
    }).pipe(catchError((error) => {
      throw normalizeHttpError(error, this.logger);
    }), backOff({
      shouldRetry: isJaloError
    }), this.converter.pipeable(ORDER_NORMALIZER));
  }
  getPlaceOrderEndpoint(userId, cartId, termsChecked) {
    return this.occEndpoints.buildUrl("placeOrder", {
      urlParams: {
        userId
      },
      queryParams: {
        cartId,
        termsChecked
      }
    });
  }
};
_OccOrderAdapter.\u0275fac = function OccOrderAdapter_Factory(t) {
  return new (t || _OccOrderAdapter)(\u0275\u0275inject(HttpClient), \u0275\u0275inject(OccEndpointsService), \u0275\u0275inject(ConverterService));
};
_OccOrderAdapter.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
  token: _OccOrderAdapter,
  factory: _OccOrderAdapter.\u0275fac
});
var OccOrderAdapter = _OccOrderAdapter;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OccOrderAdapter, [{
    type: Injectable
  }], () => [{
    type: HttpClient
  }, {
    type: OccEndpointsService
  }, {
    type: ConverterService
  }], null);
})();
var _OccReplenishmentOrderHistoryAdapter = class _OccReplenishmentOrderHistoryAdapter {
  constructor(http, occEndpoints, converter) {
    this.http = http;
    this.occEndpoints = occEndpoints;
    this.converter = converter;
  }
  load(userId, replenishmentOrderCode) {
    return this.http.get(this.occEndpoints.buildUrl("replenishmentOrderDetails", {
      urlParams: {
        userId,
        replenishmentOrderCode
      }
    })).pipe(this.converter.pipeable(REPLENISHMENT_ORDER_NORMALIZER));
  }
  loadReplenishmentDetailsHistory(userId, replenishmentOrderCode, pageSize, currentPage, sort) {
    const params = {};
    if (pageSize) {
      params["pageSize"] = pageSize.toString();
    }
    if (currentPage) {
      params["currentPage"] = currentPage.toString();
    }
    if (sort) {
      params["sort"] = sort.toString();
    }
    return this.http.get(this.occEndpoints.buildUrl("replenishmentOrderDetailsHistory", {
      urlParams: {
        userId,
        replenishmentOrderCode
      },
      queryParams: params
    })).pipe(this.converter.pipeable(ORDER_HISTORY_NORMALIZER));
  }
  cancelReplenishmentOrder(userId, replenishmentOrderCode) {
    const headers = new HttpHeaders().set("Content-Type", "application/json");
    return this.http.patch(this.occEndpoints.buildUrl("cancelReplenishmentOrder", {
      urlParams: {
        userId,
        replenishmentOrderCode
      }
    }), {}, {
      headers
    }).pipe(this.converter.pipeable(REPLENISHMENT_ORDER_NORMALIZER));
  }
  loadHistory(userId, pageSize, currentPage, sort) {
    const params = {};
    if (pageSize) {
      params["pageSize"] = pageSize.toString();
    }
    if (currentPage) {
      params["currentPage"] = currentPage.toString();
    }
    if (sort) {
      params["sort"] = sort.toString();
    }
    const url = this.occEndpoints.buildUrl("replenishmentOrderHistory", {
      urlParams: {
        userId
      },
      queryParams: params
    });
    return this.http.get(url).pipe(this.converter.pipeable(REPLENISHMENT_ORDER_HISTORY_NORMALIZER));
  }
};
_OccReplenishmentOrderHistoryAdapter.\u0275fac = function OccReplenishmentOrderHistoryAdapter_Factory(t) {
  return new (t || _OccReplenishmentOrderHistoryAdapter)(\u0275\u0275inject(HttpClient), \u0275\u0275inject(OccEndpointsService), \u0275\u0275inject(ConverterService));
};
_OccReplenishmentOrderHistoryAdapter.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
  token: _OccReplenishmentOrderHistoryAdapter,
  factory: _OccReplenishmentOrderHistoryAdapter.\u0275fac
});
var OccReplenishmentOrderHistoryAdapter = _OccReplenishmentOrderHistoryAdapter;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OccReplenishmentOrderHistoryAdapter, [{
    type: Injectable
  }], () => [{
    type: HttpClient
  }, {
    type: OccEndpointsService
  }, {
    type: ConverterService
  }], null);
})();
var _OccScheduledReplenishmentOrderAdapter = class _OccScheduledReplenishmentOrderAdapter {
  constructor(http, occEndpoints, converter) {
    this.http = http;
    this.occEndpoints = occEndpoints;
    this.converter = converter;
    this.logger = inject(LoggerService);
  }
  scheduleReplenishmentOrder(cartId, scheduleReplenishmentForm, termsChecked, userId) {
    scheduleReplenishmentForm = this.converter.convert(scheduleReplenishmentForm, REPLENISHMENT_ORDER_FORM_SERIALIZER);
    const headers = new HttpHeaders().set("Content-Type", "application/json");
    return this.http.post(this.getScheduleReplenishmentOrderEndpoint(userId, cartId, termsChecked.toString()), scheduleReplenishmentForm, {
      headers
    }).pipe(catchError((error) => {
      throw normalizeHttpError(error, this.logger);
    }), backOff({
      shouldRetry: isJaloError
    }), this.converter.pipeable(REPLENISHMENT_ORDER_NORMALIZER));
  }
  getScheduleReplenishmentOrderEndpoint(userId, cartId, termsChecked) {
    return this.occEndpoints.buildUrl("scheduleReplenishmentOrder", {
      urlParams: {
        userId
      },
      queryParams: {
        cartId,
        termsChecked
      }
    });
  }
};
_OccScheduledReplenishmentOrderAdapter.\u0275fac = function OccScheduledReplenishmentOrderAdapter_Factory(t) {
  return new (t || _OccScheduledReplenishmentOrderAdapter)(\u0275\u0275inject(HttpClient), \u0275\u0275inject(OccEndpointsService), \u0275\u0275inject(ConverterService));
};
_OccScheduledReplenishmentOrderAdapter.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
  token: _OccScheduledReplenishmentOrderAdapter,
  factory: _OccScheduledReplenishmentOrderAdapter.\u0275fac
});
var OccScheduledReplenishmentOrderAdapter = _OccScheduledReplenishmentOrderAdapter;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OccScheduledReplenishmentOrderAdapter, [{
    type: Injectable
  }], () => [{
    type: HttpClient
  }, {
    type: OccEndpointsService
  }, {
    type: ConverterService
  }], null);
})();
var _OccReorderOrderNormalizer = class _OccReorderOrderNormalizer {
  convert(source, target) {
    if (target === void 0) {
      target = __spreadValues({}, source);
    }
    return target;
  }
};
_OccReorderOrderNormalizer.\u0275fac = function OccReorderOrderNormalizer_Factory(t) {
  return new (t || _OccReorderOrderNormalizer)();
};
_OccReorderOrderNormalizer.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
  token: _OccReorderOrderNormalizer,
  factory: _OccReorderOrderNormalizer.\u0275fac,
  providedIn: "root"
});
var OccReorderOrderNormalizer = _OccReorderOrderNormalizer;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OccReorderOrderNormalizer, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var _OccReorderOrderAdapter = class _OccReorderOrderAdapter {
  constructor(http, occEndpoints, converter) {
    this.http = http;
    this.occEndpoints = occEndpoints;
    this.converter = converter;
    this.logger = inject(LoggerService);
  }
  reorder(orderId, userId) {
    const headers = new HttpHeaders().set("Content-Type", "application/json");
    return this.http.post(this.getReorderOrderEndpoint(orderId, userId), {}, {
      headers
    }).pipe(catchError((error) => {
      throw normalizeHttpError(error, this.logger);
    }), this.converter.pipeable(REORDER_ORDER_NORMALIZER));
  }
  getReorderOrderEndpoint(orderCode, userId) {
    return this.occEndpoints.buildUrl("reorder", {
      urlParams: {
        userId
      },
      queryParams: {
        orderCode
      }
    });
  }
};
_OccReorderOrderAdapter.\u0275fac = function OccReorderOrderAdapter_Factory(t) {
  return new (t || _OccReorderOrderAdapter)(\u0275\u0275inject(HttpClient), \u0275\u0275inject(OccEndpointsService), \u0275\u0275inject(ConverterService));
};
_OccReorderOrderAdapter.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
  token: _OccReorderOrderAdapter,
  factory: _OccReorderOrderAdapter.\u0275fac
});
var OccReorderOrderAdapter = _OccReorderOrderAdapter;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OccReorderOrderAdapter, [{
    type: Injectable
  }], () => [{
    type: HttpClient
  }, {
    type: OccEndpointsService
  }, {
    type: ConverterService
  }], null);
})();
var defaultOccOrderConfig = {
  backend: {
    occ: {
      endpoints: {
        /* eslint-disable max-len */
        orderHistory: "users/${userId}/orders",
        orderDetail: "users/${userId}/orders/${orderId}?fields=FULL",
        consignmentTracking: "users/${userId}/orders/${orderCode}/consignments/${consignmentCode}/tracking",
        cancelOrder: "users/${userId}/orders/${orderId}/cancellation",
        returnOrder: "users/${userId}/orderReturns?fields=BASIC,returnEntries(BASIC,refundAmount(formattedValue),orderEntry(basePrice(formattedValue),product(name,code,baseOptions,images(DEFAULT,galleryIndex)))),deliveryCost(formattedValue),totalPrice(formattedValue),subTotal(formattedValue)",
        orderReturns: "users/${userId}/orderReturns?fields=BASIC",
        orderReturnDetail: "users/${userId}/orderReturns/${returnRequestCode}?fields=BASIC,returnEntries(BASIC,refundAmount(formattedValue),orderEntry(basePrice(formattedValue),product(name,code,baseOptions,images(DEFAULT,galleryIndex)))),deliveryCost(formattedValue),totalPrice(formattedValue),subTotal(formattedValue)",
        cancelReturn: "users/${userId}/orderReturns/${returnRequestCode}",
        /* eslint-enable */
        /** scheduled replenishment endpoints start */
        replenishmentOrderDetails: "users/${userId}/replenishmentOrders/${replenishmentOrderCode}?fields=FULL,costCenter(FULL),purchaseOrderNumber,paymentType,user",
        replenishmentOrderDetailsHistory: "users/${userId}/replenishmentOrders/${replenishmentOrderCode}/orders",
        cancelReplenishmentOrder: "users/${userId}/replenishmentOrders/${replenishmentOrderCode}?fields=FULL,costCenter(FULL),purchaseOrderNumber,paymentType,user",
        replenishmentOrderHistory: "users/${userId}/replenishmentOrders?fields=FULL,replenishmentOrders(FULL, purchaseOrderNumber)",
        /** scheduled replenishment endpoints end */
        /** placing an order endpoints start **/
        placeOrder: "users/${userId}/orders?fields=FULL"
        /** placing an order endpoints end **/
      }
    }
  }
};
var _OrderOccModule = class _OrderOccModule {
};
_OrderOccModule.\u0275fac = function OrderOccModule_Factory(t) {
  return new (t || _OrderOccModule)();
};
_OrderOccModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
  type: _OrderOccModule
});
_OrderOccModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
  providers: [provideDefaultConfig(defaultOccOrderConfig), {
    provide: OrderHistoryAdapter,
    useClass: OccOrderHistoryAdapter
  }, {
    provide: ReplenishmentOrderHistoryAdapter,
    useClass: OccReplenishmentOrderHistoryAdapter
  }, {
    provide: OrderAdapter,
    useClass: OccOrderAdapter
  }, {
    provide: ScheduledReplenishmentOrderAdapter,
    useClass: OccScheduledReplenishmentOrderAdapter
  }, {
    provide: ReorderOrderAdapter,
    useClass: OccReorderOrderAdapter
  }, {
    provide: ORDER_RETURN_REQUEST_NORMALIZER,
    useExisting: OccReturnRequestNormalizer,
    multi: true
  }, {
    provide: ORDER_NORMALIZER,
    useExisting: OccOrderNormalizer,
    multi: true
  }, {
    provide: REPLENISHMENT_ORDER_NORMALIZER,
    useExisting: OccReplenishmentOrderNormalizer,
    multi: true
  }, {
    provide: REPLENISHMENT_ORDER_FORM_SERIALIZER,
    useExisting: OccScheduledReplenishmentOrderFormSerializer,
    multi: true
  }, {
    provide: REORDER_ORDER_NORMALIZER,
    useExisting: OccReorderOrderNormalizer,
    multi: true
  }],
  imports: [CommonModule]
});
var OrderOccModule = _OrderOccModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OrderOccModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule],
      providers: [provideDefaultConfig(defaultOccOrderConfig), {
        provide: OrderHistoryAdapter,
        useClass: OccOrderHistoryAdapter
      }, {
        provide: ReplenishmentOrderHistoryAdapter,
        useClass: OccReplenishmentOrderHistoryAdapter
      }, {
        provide: OrderAdapter,
        useClass: OccOrderAdapter
      }, {
        provide: ScheduledReplenishmentOrderAdapter,
        useClass: OccScheduledReplenishmentOrderAdapter
      }, {
        provide: ReorderOrderAdapter,
        useClass: OccReorderOrderAdapter
      }, {
        provide: ORDER_RETURN_REQUEST_NORMALIZER,
        useExisting: OccReturnRequestNormalizer,
        multi: true
      }, {
        provide: ORDER_NORMALIZER,
        useExisting: OccOrderNormalizer,
        multi: true
      }, {
        provide: REPLENISHMENT_ORDER_NORMALIZER,
        useExisting: OccReplenishmentOrderNormalizer,
        multi: true
      }, {
        provide: REPLENISHMENT_ORDER_FORM_SERIALIZER,
        useExisting: OccScheduledReplenishmentOrderFormSerializer,
        multi: true
      }, {
        provide: REORDER_ORDER_NORMALIZER,
        useExisting: OccReorderOrderNormalizer,
        multi: true
      }]
    }]
  }], null, null);
})();

// node_modules/@spartacus/order/fesm2022/spartacus-order.mjs
var _OrderModule = class _OrderModule {
};
_OrderModule.\u0275fac = function OrderModule_Factory(t) {
  return new (t || _OrderModule)();
};
_OrderModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
  type: _OrderModule
});
_OrderModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
  imports: [OrderCoreModule, OrderOccModule, OrderComponentsModule]
});
var OrderModule = _OrderModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OrderModule, [{
    type: NgModule,
    args: [{
      imports: [OrderCoreModule, OrderOccModule, OrderComponentsModule]
    }]
  }], null, null);
})();
export {
  OrderModule
};
//# sourceMappingURL=chunk-W6FTQ6GZ.mjs.map
