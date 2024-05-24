import './polyfills.server.mjs';
import {
  QuickOrderFacade,
  QuickOrderOrderEntriesContextToken,
  defaultQuickOrderConfig
} from "./chunk-GTQWAD6G.mjs";
import {
  ActiveCartFacade,
  CartAddEntryFailEvent,
  CartAddEntrySuccessEvent,
  OrderEntriesSource,
  ProductImportStatus
} from "./chunk-3NCZ7TRR.mjs";
import {
  AtMessageModule,
  CmsComponentData,
  DefaultValueAccessor,
  FormControlName,
  FormErrorsComponent,
  FormErrorsModule,
  FormGroupDirective,
  ICON_TYPE,
  IconComponent,
  IconModule,
  ItemCounterComponent,
  ItemCounterModule,
  MediaComponent,
  MediaModule,
  MessageComponent,
  MessageComponentModule,
  NgControlStatus,
  NgControlStatusGroup,
  NumberValueAccessor,
  ProgressButtonComponent,
  ProgressButtonModule,
  ReactiveFormsModule,
  RequiredValidator,
  UntypedFormBuilder,
  UntypedFormControl,
  UntypedFormGroup,
  Validators,
  ɵNgNoValidate
} from "./chunk-JOGQIABG.mjs";
import {
  BASE_SITE_CONTEXT_ID,
  Config,
  EventService,
  GlobalMessageService,
  GlobalMessageType,
  HttpErrorModel,
  I18nModule,
  LoggerService,
  ProductConnector,
  ProductSearchConnector,
  RouterLink,
  RouterModule,
  SiteContextParamsService,
  StatePersistenceService,
  StorageSyncType,
  TranslatePipe,
  UrlModule,
  UrlPipe,
  WindowRef,
  provideDefaultConfig
} from "./chunk-AFAMYKVR.mjs";
import {
  AsyncPipe,
  BehaviorSubject,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  CommonModule,
  Component,
  Injectable,
  Input,
  KeyValuePipe,
  NgClass,
  NgForOf,
  NgIf,
  NgModule,
  Subject,
  Subscription,
  ViewChild,
  catchError,
  combineLatest,
  debounceTime,
  distinctUntilChanged,
  filter,
  first,
  inject,
  isDevMode,
  map,
  merge,
  mergeAll,
  of,
  setClassMetadata,
  switchMap,
  take,
  tap,
  timer,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵinject,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpropertyInterpolate,
  ɵɵpureFunction1,
  ɵɵpureFunction2,
  ɵɵpureFunction3,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeHtml,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵviewQuery
} from "./chunk-3LP6MEWW.mjs";
import "./chunk-JBYB2SS7.mjs";

// node_modules/@spartacus/cart/fesm2022/spartacus-cart-quick-order-core.mjs
var _QuickOrderService = class _QuickOrderService {
  constructor(activeCartService, config, eventService, productSearchConnector) {
    this.activeCartService = activeCartService;
    this.config = config;
    this.eventService = eventService;
    this.productSearchConnector = productSearchConnector;
    this.productAdded$ = new Subject();
    this.entries$ = new BehaviorSubject([]);
    this.softDeletedEntries$ = new BehaviorSubject({});
    this.nonPurchasableProductError$ = new BehaviorSubject(null);
    this.hardDeleteTimeout = this.config.quickOrder?.list?.hardDeleteTimeout || 7e3;
    this.quickOrderListLimit = 0;
    this.clearDeleteTimeouts = {};
  }
  ngOnDestroy() {
    this.clearDeletedEntries();
  }
  /**
   * Get entries
   */
  getEntries() {
    return this.entries$;
  }
  /**
   * Search products using query
   */
  searchProducts(query, maxProducts) {
    if (this.productSearchConnector) {
      const searchConfig = {
        pageSize: maxProducts || defaultQuickOrderConfig.quickOrder?.searchForm?.maxProducts
      };
      return this.productSearchConnector.search(query, searchConfig).pipe(map((searchPage) => searchPage.products || []));
    } else {
      return of([]);
    }
  }
  /**
   * Clear a list of added entries
   */
  clearList() {
    this.entries$.next([]);
  }
  /**
   * Get information about the possibility to add the next product
   */
  canAdd(code, productData) {
    if (code && productData) {
      return of(this.isProductOnTheList(code) || !this.isLimitExceeded(code, productData));
    } else if (code) {
      return of(this.isProductOnTheList(code) || !this.isLimitExceeded());
    } else {
      return of(!this.isLimitExceeded());
    }
  }
  /**
   * Set quick order list limit property
   */
  setListLimit(limit) {
    this.quickOrderListLimit = limit;
  }
  /**
   * Load a list of entries
   */
  loadEntries(entries = []) {
    this.entries$.next(entries);
  }
  /**
   * Load a list of entries
   */
  updateEntryQuantity(entryIndex, quantity) {
    const entries = this.entries$.getValue() || [];
    entries[entryIndex].quantity = quantity;
    this.entries$.next(entries);
  }
  /**
   * Delete single entry from the list
   */
  softDeleteEntry(index) {
    this.entries$.pipe(take(1)).subscribe((entries) => {
      const entriesList = entries;
      this.addSoftEntryDeletion(entriesList[index], true);
      entriesList.splice(index, 1);
      this.entries$.next(entriesList);
    });
  }
  /**
   * Add product to the quick order list
   */
  addProduct(product, quantity = 1) {
    const entry = this.generateOrderEntry(product, quantity);
    this.addEntry(entry);
  }
  /**
   * Return product added subject
   */
  getProductAdded() {
    return this.productAdded$;
  }
  /**
   * Set product added subject
   */
  setProductAdded(productCode) {
    this.productAdded$.next(productCode);
  }
  /**
   * Adding to cart all products from the list
   */
  addToCart() {
    let entries = [];
    const events = [];
    const subscription = this.eventService.get(CartAddEntrySuccessEvent).subscribe((cartEvent) => {
      if (cartEvent.quantityAdded === 0 || !!cartEvent.quantityAdded && cartEvent.quantityAdded < cartEvent.quantity) {
        events.push(this.createQuickOrderResultEvent(cartEvent));
      }
    });
    subscription.add(this.eventService.get(CartAddEntryFailEvent).subscribe((cartEvent) => {
      events.push(this.createQuickOrderResultEvent(cartEvent));
    }));
    return this.getEntries().pipe(first(), switchMap((elements) => {
      entries = elements;
      this.activeCartService.addEntries(elements);
      this.clearList();
      return this.activeCartService.isStable();
    }), filter((isStable) => isStable), map(() => [entries, events]), tap(() => subscription.unsubscribe()));
  }
  /**
   * Return soft deleted entries
   */
  getSoftDeletedEntries() {
    return this.softDeletedEntries$;
  }
  /**
   * Restore soft deleted entry
   */
  restoreSoftDeletedEntry(productCode) {
    const entry = this.getSoftDeletedEntry(productCode);
    this.addEntry(entry);
    this.hardDeleteEntry(productCode);
  }
  /**
   * Clear deleted entry from the list
   */
  hardDeleteEntry(productCode) {
    const entry = this.getSoftDeletedEntry(productCode);
    const deletedEntries = this.softDeletedEntries$.getValue();
    if (entry) {
      delete deletedEntries[productCode];
      this.softDeletedEntries$.next(deletedEntries);
    }
    this.clearDeleteTimeout(productCode);
  }
  /**
   * Clear all deleted entries and timeout subscriptions
   */
  clearDeletedEntries() {
    Object.values(this.clearDeleteTimeouts).forEach((subscription) => subscription.unsubscribe());
    this.softDeletedEntries$.next({});
    this.clearDeleteTimeouts = {};
  }
  /**
   *  Return non purchasable product error
   */
  getNonPurchasableProductError() {
    return this.nonPurchasableProductError$;
  }
  /**
   * Set error that selected product is not purchasable
   */
  setNonPurchasableProductError(product) {
    this.nonPurchasableProductError$.next(product);
  }
  /**
   * Clear not purchasable product error
   */
  clearNonPurchasableProductError() {
    this.nonPurchasableProductError$.next(null);
  }
  /**
   * Add soft deleted entry to the cached list
   */
  addSoftEntryDeletion(entry, clearTimeout = true) {
    const deletedEntries = this.softDeletedEntries$.getValue();
    const productCode = entry?.product?.code;
    if (productCode) {
      deletedEntries[productCode] = entry;
      this.softDeletedEntries$.next(deletedEntries);
      if (clearTimeout) {
        const subscription = timer(this.hardDeleteTimeout).subscribe(() => {
          this.hardDeleteEntry(productCode);
        });
        this.clearDeleteTimeouts[productCode] = subscription;
      }
    }
  }
  /**
   * Get soft deletion entry
   */
  getSoftDeletedEntry(productCode) {
    const deletedEntries = this.softDeletedEntries$.getValue();
    return deletedEntries[productCode];
  }
  /**
   * Generate Order Entry from Product
   */
  generateOrderEntry(product, quantity) {
    return {
      basePrice: product.price,
      product,
      quantity,
      totalPrice: product.price
    };
  }
  /**
   * Add single entry to the list
   */
  addEntry(entry) {
    if (entry?.product?.code && !this.isProductOnTheList(entry.product.code) && this.isLimitExceeded()) {
      return;
    }
    const entries = this.entries$.getValue() || [];
    const entryStockLevel = entry.product?.stock?.stockLevel;
    if (entryStockLevel && entry.quantity && entry.quantity > entryStockLevel) {
      entry.quantity = entryStockLevel;
    }
    if (entry.product?.code && this.isProductOnTheList(entry.product.code)) {
      const entryIndex = entries.findIndex((item) => item.product?.code === entry.product?.code);
      const quantity = entries[entryIndex].quantity;
      if (quantity && entry.quantity) {
        entries[entryIndex].quantity = quantity + entry?.quantity;
        const newQuantity = entries[entryIndex].quantity;
        if (newQuantity && entryStockLevel && newQuantity > entryStockLevel) {
          entries[entryIndex].quantity = entryStockLevel;
        }
        this.entries$.next([...entries]);
      }
    } else {
      this.entries$.next([...entries, ...[entry]]);
    }
    this.productAdded$.next(entry.product?.code);
  }
  /**
   * Verify if product is already on the list
   */
  isProductOnTheList(productCode) {
    const entries = this.entries$.getValue() || [];
    return !!entries.find((item) => item.product?.code === productCode);
  }
  isLimitExceeded(code, productsData) {
    const entries = this.entries$.getValue() || [];
    const missingProductIndex = code && productsData ? this.getMissingProductIndex(entries, code, productsData) : 0;
    return entries.length + (missingProductIndex || 0) >= this.quickOrderListLimit;
  }
  /**
   * Get the index of the missing product in the productsData array identified by code
   * from the entries array.
   */
  getMissingProductIndex(entries, code, productsData) {
    const missingProducts = productsData?.filter((product) => !entries.map((entry) => entry.product?.code).includes(product.productCode)) || [];
    return missingProducts.findIndex((product) => product.productCode === code);
  }
  createQuickOrderResultEvent(cartEvent) {
    const evt = {
      productCode: cartEvent.productCode,
      quantity: cartEvent.quantity
    };
    if ("entry" in cartEvent) {
      evt.entry = cartEvent.entry;
    }
    if ("quantityAdded" in cartEvent) {
      evt.quantityAdded = cartEvent.quantityAdded;
    }
    if ("error" in cartEvent && cartEvent.error instanceof HttpErrorModel) {
      evt.error = cartEvent.error;
    }
    if (evt.error?.details?.length) {
      const isOutOfStock = evt.error?.details.some((e) => e.type === "InsufficientStockError");
      evt.quantityAdded = isOutOfStock ? 0 : evt.quantity;
    }
    return evt;
  }
  clearDeleteTimeout(productCode) {
    const clearMessageTimout = this.clearDeleteTimeouts[productCode];
    if (clearMessageTimout) {
      clearMessageTimout.unsubscribe();
      delete this.clearDeleteTimeouts[productCode];
    }
  }
};
_QuickOrderService.\u0275fac = function QuickOrderService_Factory(t) {
  return new (t || _QuickOrderService)(\u0275\u0275inject(ActiveCartFacade), \u0275\u0275inject(Config), \u0275\u0275inject(EventService), \u0275\u0275inject(ProductSearchConnector));
};
_QuickOrderService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
  token: _QuickOrderService,
  factory: _QuickOrderService.\u0275fac
});
var QuickOrderService = _QuickOrderService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(QuickOrderService, [{
    type: Injectable
  }], () => [{
    type: ActiveCartFacade
  }, {
    type: Config
  }, {
    type: EventService
  }, {
    type: ProductSearchConnector
  }], null);
})();
var facadeProviders = [QuickOrderService, {
  provide: QuickOrderFacade,
  useExisting: QuickOrderService
}];
var _QuickOrderStatePersistenceService = class _QuickOrderStatePersistenceService {
  constructor(quickOrderService, siteContextParamsService, statePersistenceService) {
    this.quickOrderService = quickOrderService;
    this.siteContextParamsService = siteContextParamsService;
    this.statePersistenceService = statePersistenceService;
    this.subscription = new Subscription();
    this.key = "quick-order";
  }
  /**
   * Initializes the synchronization between state and browser storage.
   */
  initSync() {
    this.subscription.add(this.statePersistenceService.syncWithStorage({
      key: this.key,
      state$: this.quickOrderService.getEntries(),
      context$: this.siteContextParamsService.getValues([BASE_SITE_CONTEXT_ID]),
      storageType: StorageSyncType.SESSION_STORAGE,
      onRead: (state) => this.onRead(state)
    }));
  }
  onRead(state) {
    if (state) {
      this.quickOrderService.loadEntries(state);
    }
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
};
_QuickOrderStatePersistenceService.\u0275fac = function QuickOrderStatePersistenceService_Factory(t) {
  return new (t || _QuickOrderStatePersistenceService)(\u0275\u0275inject(QuickOrderFacade), \u0275\u0275inject(SiteContextParamsService), \u0275\u0275inject(StatePersistenceService));
};
_QuickOrderStatePersistenceService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
  token: _QuickOrderStatePersistenceService,
  factory: _QuickOrderStatePersistenceService.\u0275fac,
  providedIn: "root"
});
var QuickOrderStatePersistenceService = _QuickOrderStatePersistenceService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(QuickOrderStatePersistenceService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: QuickOrderFacade
  }, {
    type: SiteContextParamsService
  }, {
    type: StatePersistenceService
  }], null);
})();
var _QuickOrderCoreModule = class _QuickOrderCoreModule {
  static forRoot() {
    return {
      ngModule: _QuickOrderCoreModule
    };
  }
};
_QuickOrderCoreModule.\u0275fac = function QuickOrderCoreModule_Factory(t) {
  return new (t || _QuickOrderCoreModule)();
};
_QuickOrderCoreModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
  type: _QuickOrderCoreModule
});
_QuickOrderCoreModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
  providers: [...facadeProviders, QuickOrderStatePersistenceService]
});
var QuickOrderCoreModule = _QuickOrderCoreModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(QuickOrderCoreModule, [{
    type: NgModule,
    args: [{
      providers: [...facadeProviders, QuickOrderStatePersistenceService]
    }]
  }], null, null);
})();

// node_modules/@spartacus/cart/fesm2022/spartacus-cart-quick-order-components.mjs
function CartQuickOrderFormComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 1);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "cxTranslate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 2)(5, "form", 3);
    \u0275\u0275listener("ngSubmit", function CartQuickOrderFormComponent_ng_container_0_Template_form_ngSubmit_5_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.applyQuickOrder());
    });
    \u0275\u0275elementStart(6, "div", 4)(7, "span", 5)(8, "label", 6);
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "cxTranslate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(11, "input", 7);
    \u0275\u0275pipe(12, "cxTranslate");
    \u0275\u0275pipe(13, "cxTranslate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "span", 8)(15, "label", 6);
    \u0275\u0275text(16);
    \u0275\u0275pipe(17, "cxTranslate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(18, "input", 9);
    \u0275\u0275pipe(19, "cxTranslate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "button", 10);
    \u0275\u0275pipe(21, "async");
    \u0275\u0275pipe(22, "async");
    \u0275\u0275pipe(23, "cxTranslate");
    \u0275\u0275text(24);
    \u0275\u0275pipe(25, "cxTranslate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(26, "cx-form-errors", 11)(27, "cx-form-errors", 11);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 14, "quickOrderCartForm.title"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("formGroup", ctx_r1.quickOrderForm);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(10, 16, "quickOrderCartForm.productCodeLabel"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275propertyInterpolate("placeholder", \u0275\u0275pipeBind1(12, 18, "quickOrderCartForm.productCodePlaceholder"));
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(13, 20, "quickOrderCartForm.entryProductCode"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(17, 22, "quickOrderCartForm.quantityLabel"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(19, 24, "quickOrderCartForm.quantity"));
    \u0275\u0275advance(2);
    \u0275\u0275classProp("disabled", \u0275\u0275pipeBind1(21, 26, ctx_r1.cartIsLoading$));
    \u0275\u0275property("disabled", \u0275\u0275pipeBind1(22, 28, ctx_r1.cartIsLoading$));
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(23, 30, "quickOrderCartForm.addToCart"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(25, 32, "quickOrderCartForm.add"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("control", ctx_r1.quickOrderForm.get("productCode"));
    \u0275\u0275advance();
    \u0275\u0275property("control", ctx_r1.quickOrderForm.get("quantity"));
  }
}
var _c0 = (a0) => ({
  limit: a0
});
var _c1 = (a0) => ({
  count: a0
});
var _c2 = (a0) => ({
  id: a0
});
function QuickOrderFormComponent_button_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 8);
    \u0275\u0275pipe(1, "cxTranslate");
    \u0275\u0275listener("click", function QuickOrderFormComponent_button_6_Template_button_click_0_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.clear($event));
    })("keydown.enter", function QuickOrderFormComponent_button_6_Template_button_keydown_enter_0_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.clear($event));
    });
    \u0275\u0275element(2, "cx-icon", 9);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(1, 2, "common.reset"));
    \u0275\u0275advance(2);
    \u0275\u0275property("type", ctx_r2.iconTypes.RESET);
  }
}
function QuickOrderFormComponent_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "button", 10);
    \u0275\u0275pipe(1, "cxTranslate");
    \u0275\u0275element(2, "cx-icon", 9);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(1, 2, "common.search"));
    \u0275\u0275advance(2);
    \u0275\u0275property("type", ctx_r2.iconTypes.SEARCH);
  }
}
function QuickOrderFormComponent_span_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 11);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "cxTranslate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "quickOrderForm.listLimitReached"), " ");
  }
}
function QuickOrderFormComponent_div_11_ul_1_li_1_cx_media_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "cx-media", 23);
  }
  if (rf & 2) {
    const product_r5 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("alt", product_r5.name)("container", product_r5.images == null ? null : product_r5.images.PRIMARY);
  }
}
function QuickOrderFormComponent_div_11_ul_1_li_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li", 17)(1, "button", 18);
    \u0275\u0275listener("blur", function QuickOrderFormComponent_div_11_ul_1_li_1_Template_button_blur_1_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.onBlur($event));
    })("mousedown", function QuickOrderFormComponent_div_11_ul_1_li_1_Template_button_mousedown_1_listener($event) {
      const product_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.add(product_r5, $event));
    })("keydown.arrowdown", function QuickOrderFormComponent_div_11_ul_1_li_1_Template_button_keydown_arrowdown_1_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.focusNextChild($event));
    })("keydown.arrowup", function QuickOrderFormComponent_div_11_ul_1_li_1_Template_button_keydown_arrowup_1_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.focusPreviousChild($event));
    })("keydown.enter", function QuickOrderFormComponent_div_11_ul_1_li_1_Template_button_keydown_enter_1_listener($event) {
      const product_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.add(product_r5, $event));
    })("keydown.escape", function QuickOrderFormComponent_div_11_ul_1_li_1_Template_button_keydown_escape_1_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.clear($event));
    });
    \u0275\u0275template(2, QuickOrderFormComponent_div_11_ul_1_li_1_cx_media_2_Template, 1, 2, "cx-media", 19);
    \u0275\u0275element(3, "div", 20);
    \u0275\u0275elementStart(4, "span", 21);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "cxTranslate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span", 22);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const product_r5 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275classProp("has-media", ctx_r2.config == null ? null : ctx_r2.config.quickOrder == null ? null : ctx_r2.config.quickOrder.searchForm == null ? null : ctx_r2.config.quickOrder.searchForm.displayProductImages);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.config == null ? null : ctx_r2.config.quickOrder == null ? null : ctx_r2.config.quickOrder.searchForm == null ? null : ctx_r2.config.quickOrder.searchForm.displayProductImages);
    \u0275\u0275advance();
    \u0275\u0275property("innerHTML", product_r5.name, \u0275\u0275sanitizeHtml);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(6, 6, "quickOrderForm.id", \u0275\u0275pureFunction1(9, _c2, product_r5.code)), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(product_r5.price == null ? null : product_r5.price.formattedValue);
  }
}
function QuickOrderFormComponent_div_11_ul_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ul", 15);
    \u0275\u0275template(1, QuickOrderFormComponent_div_11_ul_1_li_1_Template, 9, 11, "li", 16);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r2.results);
  }
}
function QuickOrderFormComponent_div_11_span_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 24);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "cxTranslate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "quickOrderForm.noResults"), " ");
  }
}
function QuickOrderFormComponent_div_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12);
    \u0275\u0275template(1, QuickOrderFormComponent_div_11_ul_1_Template, 2, 1, "ul", 13)(2, QuickOrderFormComponent_div_11_span_2_Template, 3, 3, "span", 14);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.results.length);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.noResults);
  }
}
var _c3 = ["cx-quick-order-item", ""];
var _c4 = (a0, a1) => ({
  disabled: a0,
  "img-missing": a1
});
var _c5 = (a0) => ({
  cxRoute: "product",
  params: a0
});
var _c6 = (a0) => ({
  disabled: a0
});
function QuickOrderTableComponent_table_0_tr_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "tr", 10);
  }
  if (rf & 2) {
    const entry_r1 = ctx.$implicit;
    const i_r2 = ctx.index;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275property("entry", entry_r1)("index", i_r2)("loading", ctx_r2.loading);
  }
}
function QuickOrderTableComponent_table_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "table", 1)(1, "caption", 2);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "cxTranslate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "thead")(5, "tr", 3)(6, "th", 4);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "cxTranslate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "th", 5);
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "cxTranslate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "th", 6);
    \u0275\u0275text(13);
    \u0275\u0275pipe(14, "cxTranslate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "th", 7);
    \u0275\u0275text(16);
    \u0275\u0275pipe(17, "cxTranslate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(18, "tbody", 8);
    \u0275\u0275template(19, QuickOrderTableComponent_table_0_tr_19_Template, 1, 3, "tr", 9);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 6, "quickOrderTable.caption"), " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(8, 8, "quickOrderTable.product"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(11, 10, "quickOrderTable.price"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(14, 12, "quickOrderTable.quantity"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(17, 14, "quickOrderTable.actions"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r2.entries);
  }
}
var _c7 = ["quickOrderForm"];
var _c8 = (a0) => ({
  name: a0
});
var _c9 = (a0, a1) => ({
  name: a0,
  code: a1
});
var _c10 = (a0, a1, a2) => ({
  name: a0,
  code: a1,
  quantityAdded: a2
});
function QuickOrderComponent_ng_container_1_ng_container_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275element(1, "cx-message", 3);
    \u0275\u0275pipe(2, "cxTranslate");
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const entries_r1 = \u0275\u0275nextContext(2).ngIf;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("text", \u0275\u0275pipeBind2(2, 3, "quickOrderList.errors.listIsFull", \u0275\u0275pureFunction1(6, _c1, entries_r1.length)))("isVisibleCloseButton", false)("type", ctx_r1.globalMessageType.MSG_TYPE_ERROR);
  }
}
function QuickOrderComponent_ng_container_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, QuickOrderComponent_ng_container_1_ng_container_1_ng_container_1_Template, 3, 8, "ng-container", 2);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    let tmp_3_0;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.quickOrderForm == null ? null : ctx_r1.quickOrderForm.form == null ? null : (tmp_3_0 = ctx_r1.quickOrderForm.form.get("product")) == null ? null : tmp_3_0.dirty);
  }
}
function QuickOrderComponent_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, QuickOrderComponent_ng_container_1_ng_container_1_Template, 2, 1, "ng-container", 2);
    \u0275\u0275pipe(2, "async");
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !\u0275\u0275pipeBind1(2, 1, ctx_r1.canAddProduct()));
  }
}
function QuickOrderComponent_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "cx-message", 4);
    \u0275\u0275pipe(2, "cxTranslate");
    \u0275\u0275listener("closeMessage", function QuickOrderComponent_ng_container_3_Template_cx_message_closeMessage_1_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.clearAddToCartInformation());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("text", \u0275\u0275pipeBind1(2, 2, "quickOrderList.informations.addProductBeforeAddingToCart"))("type", ctx_r1.globalMessageType.MSG_TYPE_ERROR);
  }
}
function QuickOrderComponent_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "cx-message", 5);
    \u0275\u0275pipe(2, "cxTranslate");
    \u0275\u0275listener("closeMessage", function QuickOrderComponent_ng_container_5_Template_cx_message_closeMessage_1_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.clearNonPurchasableError());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const nonPurchasableError_r5 = ctx.ngIf;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("text", \u0275\u0275pipeBind2(2, 2, "quickOrderList.errors.nonPurchasableError", \u0275\u0275pureFunction1(5, _c8, nonPurchasableError_r5.name)))("type", ctx_r1.globalMessageType.MSG_TYPE_ERROR);
  }
}
function QuickOrderComponent_ng_container_7_cx_message_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "cx-message", 7);
    \u0275\u0275pipe(1, "cxTranslate");
    \u0275\u0275pipe(2, "cxTranslate");
    \u0275\u0275pipe(3, "cxTranslate");
    \u0275\u0275listener("buttonAction", function QuickOrderComponent_ng_container_7_cx_message_1_Template_cx_message_buttonAction_0_listener() {
      const deletedEntry_r7 = \u0275\u0275restoreView(_r6).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.undoDeletion(deletedEntry_r7.value));
    })("closeMessage", function QuickOrderComponent_ng_container_7_cx_message_1_Template_cx_message_closeMessage_0_listener() {
      const deletedEntry_r7 = \u0275\u0275restoreView(_r6).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.clearDeletion(deletedEntry_r7.value));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const deletedEntry_r7 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("actionButtonText", \u0275\u0275pipeBind1(1, 4, "quickOrderList.undo"))("actionButtonMessage", \u0275\u0275pipeBind2(2, 6, "quickOrderList.revokeUndo", \u0275\u0275pureFunction1(12, _c8, deletedEntry_r7.value.product == null ? null : deletedEntry_r7.value.product.name)))("text", \u0275\u0275pipeBind2(3, 9, "quickOrderList.productWasDeleted", \u0275\u0275pureFunction1(14, _c8, deletedEntry_r7.value.product == null ? null : deletedEntry_r7.value.product.name)))("type", ctx_r1.globalMessageType.MSG_TYPE_CONFIRMATION);
  }
}
function QuickOrderComponent_ng_container_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, QuickOrderComponent_ng_container_7_cx_message_1_Template, 4, 16, "cx-message", 6);
    \u0275\u0275pipe(2, "keyvalue");
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const deletedEntries_r8 = ctx.ngIf;
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", \u0275\u0275pipeBind1(2, 1, deletedEntries_r8));
  }
}
function QuickOrderComponent_ng_container_9_cx_message_1_li_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 13)(1, "span");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "cxTranslate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const error_r10 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(3, 1, "quickOrderList.errors.productIsOutOfStock", \u0275\u0275pureFunction2(4, _c9, error_r10.entry.product.name, error_r10.entry.product.code)), " ");
  }
}
function QuickOrderComponent_ng_container_9_cx_message_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "cx-message", 9);
    \u0275\u0275pipe(1, "cxTranslate");
    \u0275\u0275pipe(2, "cxTranslate");
    \u0275\u0275listener("closeMessage", function QuickOrderComponent_ng_container_9_cx_message_1_Template_cx_message_closeMessage_0_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.clearErrors());
    });
    \u0275\u0275elementStart(3, "ul", 10);
    \u0275\u0275template(4, QuickOrderComponent_ng_container_9_cx_message_1_li_4_Template, 4, 7, "li", 11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 12);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "cxTranslate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const errors_r11 = \u0275\u0275nextContext().ngIf;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("accordionText", \u0275\u0275pipeBind1(1, 5, "quickOrderList.errors.reviewErrors"))("text", \u0275\u0275pipeBind1(2, 7, "quickOrderList.errorProceedingToCart"))("type", ctx_r1.globalMessageType.MSG_TYPE_ERROR);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngForOf", errors_r11);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(7, 9, "quickOrderList.errors.outOfStockErrorFound", \u0275\u0275pureFunction1(12, _c1, errors_r11.length)), " ");
  }
}
function QuickOrderComponent_ng_container_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, QuickOrderComponent_ng_container_9_cx_message_1_Template, 8, 14, "cx-message", 8);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const errors_r11 = ctx.ngIf;
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", errors_r11.length);
  }
}
function QuickOrderComponent_ng_container_11_cx_message_1_li_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 18)(1, "span");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "cxTranslate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const warning_r13 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(3, 1, "quickOrderList.warnings.productWasReduced", \u0275\u0275pureFunction3(4, _c10, warning_r13.entry.product.name, warning_r13.entry.product.code, warning_r13.quantityAdded)), " ");
  }
}
function QuickOrderComponent_ng_container_11_cx_message_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "cx-message", 15);
    \u0275\u0275pipe(1, "cxTranslate");
    \u0275\u0275pipe(2, "cxTranslate");
    \u0275\u0275listener("closeMessage", function QuickOrderComponent_ng_container_11_cx_message_1_Template_cx_message_closeMessage_0_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.clearWarnings());
    });
    \u0275\u0275elementStart(3, "ul", 16);
    \u0275\u0275template(4, QuickOrderComponent_ng_container_11_cx_message_1_li_4_Template, 4, 8, "li", 17);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 12);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "cxTranslate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const warnings_r14 = \u0275\u0275nextContext().ngIf;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("accordionText", \u0275\u0275pipeBind1(1, 5, "quickOrderList.warnings.reviewWarnings"))("text", \u0275\u0275pipeBind1(2, 7, "quickOrderList.warningProceedingToCart"))("type", ctx_r1.globalMessageType.MSG_TYPE_WARNING);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngForOf", warnings_r14);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(7, 9, "quickOrderList.warnings.reduceWarningFound", \u0275\u0275pureFunction1(12, _c1, warnings_r14.length)), " ");
  }
}
function QuickOrderComponent_ng_container_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, QuickOrderComponent_ng_container_11_cx_message_1_Template, 8, 14, "cx-message", 14);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const warnings_r14 = ctx.ngIf;
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", warnings_r14.length);
  }
}
function QuickOrderComponent_ng_container_13_cx_message_1_li_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 23)(1, "span");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "cxTranslate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const entry_r16 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(3, 1, "quickOrderList.successes.productAddedToCart", \u0275\u0275pureFunction2(4, _c9, entry_r16.product.name, entry_r16.product.code)));
  }
}
function QuickOrderComponent_ng_container_13_cx_message_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "cx-message", 20);
    \u0275\u0275pipe(1, "cxTranslate");
    \u0275\u0275listener("closeMessage", function QuickOrderComponent_ng_container_13_cx_message_1_Template_cx_message_closeMessage_0_listener() {
      \u0275\u0275restoreView(_r15);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.clearSuccesses());
    });
    \u0275\u0275elementStart(2, "ul", 21);
    \u0275\u0275template(3, QuickOrderComponent_ng_container_13_cx_message_1_li_3_Template, 4, 7, "li", 22);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 12);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "cxTranslate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const successes_r17 = \u0275\u0275nextContext().ngIf;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("text", \u0275\u0275pipeBind1(1, 4, "quickOrderList.successfullyAddedToCart"))("type", ctx_r1.globalMessageType.MSG_TYPE_CONFIRMATION);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", successes_r17);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(6, 6, "quickOrderList.successes.addedToCartFound", \u0275\u0275pureFunction1(9, _c1, successes_r17.length)), " ");
  }
}
function QuickOrderComponent_ng_container_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, QuickOrderComponent_ng_container_13_cx_message_1_Template, 7, 11, "cx-message", 19);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const successes_r17 = ctx.ngIf;
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", successes_r17.length);
  }
}
function QuickOrderComponent_ng_container_15_ng_container_1_button_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 33);
    \u0275\u0275pipe(1, "async");
    \u0275\u0275pipe(2, "cxTranslate");
    \u0275\u0275listener("click", function QuickOrderComponent_ng_container_15_ng_container_1_button_16_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r19);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.clear());
    });
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "cxTranslate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("disabled", !\u0275\u0275pipeBind1(1, 3, ctx_r1.isCartStable$));
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(2, 5, "quickOrderList.emptyList"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 7, "quickOrderList.emptyList"), " ");
  }
}
function QuickOrderComponent_ng_container_15_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 24)(2, "h2");
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "cxTranslate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p");
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "cxTranslate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 25);
    \u0275\u0275element(9, "cx-quick-order-form", 26, 0);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 27);
    \u0275\u0275element(12, "cx-quick-order-table", 28);
    \u0275\u0275pipe(13, "async");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "div", 29)(15, "div", 30);
    \u0275\u0275template(16, QuickOrderComponent_ng_container_15_ng_container_1_button_16_Template, 5, 9, "button", 31);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "div", 30)(18, "cx-progress-button", 32);
    \u0275\u0275pipe(19, "cxTranslate");
    \u0275\u0275pipe(20, "async");
    \u0275\u0275listener("clickEvent", function QuickOrderComponent_ng_container_15_ng_container_1_Template_cx_progress_button_clickEvent_18_listener() {
      const entries_r20 = \u0275\u0275restoreView(_r18).ngIf;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.addToCart(entries_r20));
    });
    \u0275\u0275text(21);
    \u0275\u0275pipe(22, "cxTranslate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const entries_r20 = ctx.ngIf;
    const quickOrderListLimit_r21 = \u0275\u0275nextContext().ngIf;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 11, "quickOrderList.header"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(7, 13, "quickOrderList.subHeader", \u0275\u0275pureFunction1(24, _c0, quickOrderListLimit_r21)), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("limit", quickOrderListLimit_r21);
    \u0275\u0275advance(3);
    \u0275\u0275property("entries", entries_r20)("loading", !\u0275\u0275pipeBind1(13, 16, ctx_r1.isCartStable$));
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", entries_r20.length);
    \u0275\u0275advance(2);
    \u0275\u0275classMap("btn-block add-button");
    \u0275\u0275property("ariaLabel", \u0275\u0275pipeBind1(19, 18, "quickOrderList.addToCart"))("loading", !\u0275\u0275pipeBind1(20, 20, ctx_r1.isCartStable$));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(22, 22, "quickOrderList.addToCart"), " ");
  }
}
function QuickOrderComponent_ng_container_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, QuickOrderComponent_ng_container_15_ng_container_1_Template, 23, 26, "ng-container", 2);
    \u0275\u0275pipe(2, "async");
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", \u0275\u0275pipeBind1(2, 1, ctx_r1.entries$));
  }
}
var _CartQuickOrderFormComponent = class _CartQuickOrderFormComponent {
  constructor(activeCartService, eventService, formBuilder, globalMessageService) {
    this.activeCartService = activeCartService;
    this.eventService = eventService;
    this.formBuilder = formBuilder;
    this.globalMessageService = globalMessageService;
    this.cartIsLoading$ = this.activeCartService.isStable().pipe(map((loaded) => !loaded));
    this.cart$ = this.activeCartService.getActive();
    this.min = 1;
    this.subscription = new Subscription();
    this.cartEventsSubscription = new Subscription();
    this.minQuantityValue = 1;
  }
  ngOnInit() {
    this.buildForm();
    this.watchQuantityChange();
  }
  ngOnDestroy() {
    this.subscription?.unsubscribe();
    this.cartEventsSubscription?.unsubscribe();
  }
  applyQuickOrder() {
    if (this.quickOrderForm.invalid) {
      this.quickOrderForm.markAllAsTouched();
      return;
    }
    const productCode = this.quickOrderForm.get("productCode")?.value;
    const quantity = this.quickOrderForm.get("quantity")?.value;
    this.watchAddEntrySuccessEvent();
    this.watchAddEntryFailEvent();
    if (productCode && quantity) {
      this.activeCartService.addEntry(productCode, quantity);
    }
  }
  buildForm() {
    this.quickOrderForm = this.formBuilder.group({
      productCode: ["", [Validators.required]],
      quantity: [this.minQuantityValue, {
        updateOn: "blur",
        validators: [Validators.required]
      }]
    });
  }
  watchQuantityChange() {
    this.subscription.add(this.quickOrderForm.get("quantity")?.valueChanges.subscribe((value) => this.quickOrderForm.get("quantity")?.setValue(this.getValidCount(value), {
      emitEvent: false
    })));
  }
  watchAddEntrySuccessEvent() {
    this.cartEventsSubscription.add(this.eventService.get(CartAddEntrySuccessEvent).pipe(first()).subscribe((data) => {
      let key = "quickOrderCartForm.stockLevelReached";
      let productTranslation;
      let messageType = GlobalMessageType.MSG_TYPE_WARNING;
      if (data.quantityAdded) {
        key = data.quantityAdded > 1 ? "quickOrderCartForm.entriesWereAdded" : "quickOrderCartForm.entryWasAdded";
        productTranslation = data.quantityAdded > 1 ? "quickOrderCartForm.products" : "quickOrderCartForm.product";
        messageType = GlobalMessageType.MSG_TYPE_CONFIRMATION;
      }
      this.globalMessageService.add({
        key,
        params: {
          product: data?.entry?.product?.name || productTranslation,
          quantity: data.quantityAdded
        }
      }, messageType);
      this.resetForm();
    }));
  }
  watchAddEntryFailEvent() {
    this.cartEventsSubscription.add(this.eventService.get(CartAddEntryFailEvent).pipe(first()).subscribe(() => {
      this.globalMessageService.add({
        key: "quickOrderCartForm.noResults"
      }, GlobalMessageType.MSG_TYPE_ERROR);
    }));
  }
  getValidCount(value) {
    if (value < this.min || !value) {
      value = this.min;
    }
    return value;
  }
  resetForm() {
    this.quickOrderForm.reset();
  }
};
_CartQuickOrderFormComponent.\u0275fac = function CartQuickOrderFormComponent_Factory(t) {
  return new (t || _CartQuickOrderFormComponent)(\u0275\u0275directiveInject(ActiveCartFacade), \u0275\u0275directiveInject(EventService), \u0275\u0275directiveInject(UntypedFormBuilder), \u0275\u0275directiveInject(GlobalMessageService));
};
_CartQuickOrderFormComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
  type: _CartQuickOrderFormComponent,
  selectors: [["cx-cart-quick-order-form"]],
  decls: 2,
  vars: 3,
  consts: [[4, "ngIf"], [1, "cx-cart-quick-order-form-title"], [1, "form-group"], [3, "ngSubmit", "formGroup"], [1, "cx-cart-quick-order-form-container"], [1, "cx-cart-quick-order-form-productID"], [1, "cx-cart-quick-order-form-label"], ["aria-required", "true", "formControlName", "productCode", "required", "true", "type", "text", 1, "form-control", "input-product-code", 3, "placeholder"], [1, "cx-cart-quick-order-form-qty"], ["aria-required", "true", "formControlName", "quantity", "required", "true", "type", "number", 1, "form-control", "input-quantity"], ["type", "submit", 1, "btn", "btn-block", "btn-secondary", "apply-quick-order-button", 3, "disabled"], [3, "control"]],
  template: function CartQuickOrderFormComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275template(0, CartQuickOrderFormComponent_ng_container_0_Template, 28, 34, "ng-container", 0);
      \u0275\u0275pipe(1, "async");
    }
    if (rf & 2) {
      \u0275\u0275property("ngIf", \u0275\u0275pipeBind1(1, 1, ctx.cart$));
    }
  },
  dependencies: [NgIf, \u0275NgNoValidate, DefaultValueAccessor, NumberValueAccessor, NgControlStatus, NgControlStatusGroup, RequiredValidator, FormGroupDirective, FormControlName, FormErrorsComponent, AsyncPipe, TranslatePipe],
  encapsulation: 2,
  changeDetection: 0
});
var CartQuickOrderFormComponent = _CartQuickOrderFormComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CartQuickOrderFormComponent, [{
    type: Component,
    args: [{
      selector: "cx-cart-quick-order-form",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: `<ng-container *ngIf="cart$ | async as cart">
  <div class="cx-cart-quick-order-form-title">
    {{ 'quickOrderCartForm.title' | cxTranslate }}
  </div>
  <div class="form-group">
    <form (ngSubmit)="applyQuickOrder()" [formGroup]="quickOrderForm">
      <div class="cx-cart-quick-order-form-container">
        <span class="cx-cart-quick-order-form-productID">
          <label class="cx-cart-quick-order-form-label">
            {{ 'quickOrderCartForm.productCodeLabel' | cxTranslate }}
          </label>
          <input
            [attr.aria-label]="
              'quickOrderCartForm.entryProductCode' | cxTranslate
            "
            aria-required="true"
            class="form-control input-product-code"
            formControlName="productCode"
            required="true"
            placeholder="{{
              'quickOrderCartForm.productCodePlaceholder' | cxTranslate
            }}"
            type="text"
          />
        </span>

        <span class="cx-cart-quick-order-form-qty">
          <label class="cx-cart-quick-order-form-label">
            {{ 'quickOrderCartForm.quantityLabel' | cxTranslate }}
          </label>
          <input
            [attr.aria-label]="'quickOrderCartForm.quantity' | cxTranslate"
            aria-required="true"
            class="form-control input-quantity"
            formControlName="quantity"
            required="true"
            type="number"
          />
        </span>
        <button
          [attr.aria-label]="'quickOrderCartForm.addToCart' | cxTranslate"
          [class.disabled]="cartIsLoading$ | async"
          [disabled]="cartIsLoading$ | async"
          class="btn btn-block btn-secondary apply-quick-order-button"
          type="submit"
        >
          {{ 'quickOrderCartForm.add' | cxTranslate }}
        </button>
        <cx-form-errors
          [control]="quickOrderForm.get('productCode')"
        ></cx-form-errors>
        <cx-form-errors
          [control]="quickOrderForm.get('quantity')"
        ></cx-form-errors>
      </div>
    </form></div
></ng-container>
`
    }]
  }], () => [{
    type: ActiveCartFacade
  }, {
    type: EventService
  }, {
    type: UntypedFormBuilder
  }, {
    type: GlobalMessageService
  }], null);
})();
var _CartQuickOrderFormModule = class _CartQuickOrderFormModule {
};
_CartQuickOrderFormModule.\u0275fac = function CartQuickOrderFormModule_Factory(t) {
  return new (t || _CartQuickOrderFormModule)();
};
_CartQuickOrderFormModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
  type: _CartQuickOrderFormModule
});
_CartQuickOrderFormModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
  providers: [provideDefaultConfig({
    cmsComponents: {
      CartQuickOrderFormComponent: {
        component: CartQuickOrderFormComponent
      }
    }
  })],
  imports: [CommonModule, ReactiveFormsModule, I18nModule, FormErrorsModule]
});
var CartQuickOrderFormModule = _CartQuickOrderFormModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CartQuickOrderFormModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, ReactiveFormsModule, I18nModule, FormErrorsModule],
      providers: [provideDefaultConfig({
        cmsComponents: {
          CartQuickOrderFormComponent: {
            component: CartQuickOrderFormComponent
          }
        }
      })],
      declarations: [CartQuickOrderFormComponent],
      exports: [CartQuickOrderFormComponent]
    }]
  }], null, null);
})();
var _QuickOrderOrderEntriesContext = class _QuickOrderOrderEntriesContext {
  constructor(quickOrderService, productConnector) {
    this.quickOrderService = quickOrderService;
    this.productConnector = productConnector;
    this.type = OrderEntriesSource.QUICK_ORDER;
    this.logger = inject(LoggerService);
  }
  getEntries() {
    return this.quickOrderService.getEntries();
  }
  addEntries(productsData) {
    return merge(productsData.map((productData) => this.quickOrderService.canAdd(productData.productCode, productsData).pipe(switchMap((canAdd) => {
      if (canAdd) {
        return this.productConnector.get(productData.productCode).pipe(filter((product) => !!product), tap((product) => {
          this.quickOrderService.addProduct(product, productData.quantity);
        }), map((product) => this.handleResults(product, productData)), catchError((response) => {
          return of(this.handleErrors(response, productData.productCode));
        }));
      } else {
        return of({
          productCode: productData.productCode,
          statusCode: ProductImportStatus.LIMIT_EXCEEDED
        });
      }
    })))).pipe(mergeAll(), take(productsData.length));
  }
  handleResults(product, productData) {
    if (product.stock?.stockLevel && productData.quantity > product.stock.stockLevel) {
      return {
        productCode: productData.productCode,
        productName: product?.name,
        statusCode: ProductImportStatus.LOW_STOCK,
        quantity: productData.quantity,
        quantityAdded: product.stock.stockLevel
      };
    } else if (product.stock?.stockLevelStatus === "outOfStock") {
      return {
        productCode: productData.productCode,
        statusCode: ProductImportStatus.NO_STOCK,
        productName: product?.name
      };
    } else {
      return {
        productCode: productData.productCode,
        statusCode: ProductImportStatus.SUCCESS
      };
    }
  }
  handleErrors(response, productCode) {
    if (response?.error?.errors[0].type === "UnknownIdentifierError") {
      return {
        productCode,
        statusCode: ProductImportStatus.UNKNOWN_IDENTIFIER
      };
    } else {
      if (isDevMode()) {
        this.logger.warn("Unrecognized cart add entry action type while mapping messages", response);
      }
      return {
        productCode,
        statusCode: ProductImportStatus.UNKNOWN_ERROR
      };
    }
  }
};
_QuickOrderOrderEntriesContext.\u0275fac = function QuickOrderOrderEntriesContext_Factory(t) {
  return new (t || _QuickOrderOrderEntriesContext)(\u0275\u0275inject(QuickOrderFacade), \u0275\u0275inject(ProductConnector));
};
_QuickOrderOrderEntriesContext.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
  token: _QuickOrderOrderEntriesContext,
  factory: _QuickOrderOrderEntriesContext.\u0275fac,
  providedIn: "root"
});
var QuickOrderOrderEntriesContext = _QuickOrderOrderEntriesContext;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(QuickOrderOrderEntriesContext, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: QuickOrderFacade
  }, {
    type: ProductConnector
  }], null);
})();
var SEARCH_BOX_ACTIVE_CLASS = "quick-order-searchbox-is-active";
var _QuickOrderFormComponent = class _QuickOrderFormComponent {
  constructor(config, cd, quickOrderService, winRef) {
    this.config = config;
    this.cd = cd;
    this.quickOrderService = quickOrderService;
    this.winRef = winRef;
    this.iconTypes = ICON_TYPE;
    this.isSearching = false;
    this.noResults = false;
    this.results = [];
    this.subscription = new Subscription();
    this.searchSubscription = new Subscription();
  }
  ngOnInit() {
    this.buildForm();
    this.subscription.add(this.watchProductAdd());
    this.subscription.add(this.watchQueryChange());
  }
  onBlur(event) {
    setTimeout(() => {
      if (!this.isSuggestionFocused()) {
        this.blurSuggestionBox(event);
      }
    });
  }
  clear(event) {
    event?.preventDefault();
    if (this.isResultsBoxOpen()) {
      this.toggleBodyClass(SEARCH_BOX_ACTIVE_CLASS, false);
    }
    const product = this.form.get("product")?.value;
    if (!!product) {
      this.form.reset();
    }
    this.close();
    this.cd?.detectChanges();
  }
  add(product, event) {
    event?.preventDefault();
    if (product.multidimensional) {
      this.quickOrderService.setNonPurchasableProductError(product);
      this.clear();
      return;
    } else {
      this.quickOrderService.clearNonPurchasableProductError();
    }
    this.quickOrderService.addProduct(product);
  }
  addProduct(event) {
    this.quickOrderService.canAdd().pipe(take(1)).subscribe((canAdd) => {
      if (canAdd) {
        if (this.results.length === 1) {
          this.add(this.results[0], event);
        } else if (this.getFocusedIndex() !== -1) {
          const product = this.results[this.getFocusedIndex()];
          this.add(product, event);
        }
      }
    });
  }
  focusNextChild(event) {
    event.preventDefault();
    if (!this.results.length) {
      return;
    }
    const [results, focusedIndex] = [this.getResultElements(), this.getFocusedIndex()];
    if (results.length) {
      if (focusedIndex >= results.length - 1) {
        results[0].focus();
      } else {
        results[focusedIndex + 1].focus();
      }
    }
  }
  focusPreviousChild(event) {
    event.preventDefault();
    if (!this.results.length) {
      return;
    }
    const [results, focusedIndex] = [this.getResultElements(), this.getFocusedIndex()];
    if (results.length) {
      if (focusedIndex < 1) {
        results[results.length - 1].focus();
      } else {
        results[focusedIndex - 1].focus();
      }
    }
  }
  isResultsBoxOpen() {
    return this.winRef ? !!this.winRef.document.querySelector(`.${SEARCH_BOX_ACTIVE_CLASS}`) : false;
  }
  canAddProduct() {
    return this.quickOrderService.canAdd();
  }
  open() {
    this.toggleBodyClass(SEARCH_BOX_ACTIVE_CLASS, true);
  }
  // Return result list as HTMLElement array
  getResultElements() {
    if (this.winRef) {
      return Array.from(this.winRef.document.querySelectorAll(".quick-order-results-products > li button"));
    } else {
      return [];
    }
  }
  blurSuggestionBox(event) {
    this.toggleBodyClass(SEARCH_BOX_ACTIVE_CLASS, false);
    if (event && event.target) {
      event.target.blur();
    }
  }
  // Return focused element as HTMLElement
  getFocusedElement() {
    if (this.winRef) {
      return this.winRef.document.activeElement;
    }
  }
  getFocusedIndex() {
    return this.getResultElements().indexOf(this.getFocusedElement());
  }
  isSuggestionFocused() {
    return this.getResultElements().includes(this.getFocusedElement());
  }
  toggleBodyClass(className, add) {
    if (this.winRef) {
      if (add === void 0) {
        this.winRef.document.body.classList.toggle(className);
      } else {
        add ? this.winRef.document.body.classList.add(className) : this.winRef.document.body.classList.remove(className);
      }
    }
  }
  buildForm() {
    const form = new UntypedFormGroup({});
    form.setControl("product", new UntypedFormControl(null));
    this.form = form;
  }
  isEmpty(string) {
    return string?.trim() === "" || string == null;
  }
  watchQueryChange() {
    return this.form.valueChanges.pipe(distinctUntilChanged(), debounceTime(300), filter((value) => {
      if (this.config?.quickOrder?.searchForm) {
        if (this.isEmpty(value.product)) {
          this.clear();
          return false;
        }
        return !!value.product && value.product.length >= this.config.quickOrder?.searchForm?.minCharactersBeforeRequest;
      }
      return value;
    })).subscribe((value) => {
      this.searchProducts(value.product);
    });
  }
  searchProducts(query) {
    this.searchSubscription.add(this.canAddProduct().pipe(filter(Boolean), switchMap(() => this.quickOrderService.searchProducts(query, this.config?.quickOrder?.searchForm?.maxProducts).pipe(take(1)))).subscribe((products) => {
      this.results = products;
      if (this.results.length) {
        this.noResults = false;
        this.open();
      } else {
        this.noResults = true;
      }
      this.cd?.detectChanges();
    }));
  }
  clearResults() {
    this.results = [];
  }
  close() {
    this.resetSearchSubscription();
    this.clearResults();
    this.noResults = false;
  }
  resetSearchSubscription() {
    this.searchSubscription.unsubscribe();
    this.searchSubscription = new Subscription();
  }
  watchProductAdd() {
    return this.quickOrderService.getProductAdded().subscribe(() => this.clear());
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
};
_QuickOrderFormComponent.\u0275fac = function QuickOrderFormComponent_Factory(t) {
  return new (t || _QuickOrderFormComponent)(\u0275\u0275directiveInject(Config), \u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(QuickOrderFacade), \u0275\u0275directiveInject(WindowRef));
};
_QuickOrderFormComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
  type: _QuickOrderFormComponent,
  selectors: [["cx-quick-order-form"]],
  inputs: {
    limit: "limit"
  },
  decls: 16,
  vars: 28,
  consts: [["searchIcon", ""], [1, "quick-order-form-container", 3, "formGroup"], ["role", "search", 1, "quick-order-form-input"], ["aria-controls", "quick-order-search-results", "aria-describedby", "quickOrderFormInitialDescription", "formControlName", "product", "type", "text", 1, "form-control", 3, "blur", "focus", "keydown.arrowdown", "keydown.arrowup", "keydown.enter", "keydown.escape", "placeholder"], ["class", "quick-order-form-reset-icon", 3, "click", "keydown.enter", 4, "ngIf", "ngIfElse"], ["class", "list-limit-reached-text", "role", "alert", 4, "ngIf"], ["class", "quick-order-results", "role", "dialog", "id", "quick-order-search-results", 4, "ngIf"], ["aria-live", "polite", "id", "quickOrderFormInitialDescription", "aria-atomic", "true", 1, "cx-visually-hidden"], [1, "quick-order-form-reset-icon", 3, "click", "keydown.enter"], [3, "type"], ["tabindex", "-1", 1, "quick-order-form-search-icon"], ["role", "alert", 1, "list-limit-reached-text"], ["role", "dialog", "id", "quick-order-search-results", 1, "quick-order-results"], ["class", "quick-order-results-products", "role", "listbox", 4, "ngIf"], ["class", "quick-order-no-results", 4, "ngIf"], ["role", "listbox", 1, "quick-order-results-products"], ["class", "quick-order-results-product-container", 4, "ngFor", "ngForOf"], [1, "quick-order-results-product-container"], ["role", "option", 1, "quick-order-results-product", 3, "blur", "mousedown", "keydown.arrowdown", "keydown.arrowup", "keydown.enter", "keydown.escape"], ["class", "media", "format", "thumbnail", "role", "presentation", 3, "alt", "container", 4, "ngIf"], [1, "name", 3, "innerHTML"], [1, "id"], [1, "price"], ["format", "thumbnail", "role", "presentation", 1, "media", 3, "alt", "container"], [1, "quick-order-no-results"]],
  template: function QuickOrderFormComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "form", 1)(1, "div", 2);
      \u0275\u0275pipe(2, "cxTranslate");
      \u0275\u0275elementStart(3, "input", 3);
      \u0275\u0275pipe(4, "cxTranslate");
      \u0275\u0275pipe(5, "cxTranslate");
      \u0275\u0275listener("blur", function QuickOrderFormComponent_Template_input_blur_3_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onBlur($event));
      })("focus", function QuickOrderFormComponent_Template_input_focus_3_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.open());
      })("keydown.arrowdown", function QuickOrderFormComponent_Template_input_keydown_arrowdown_3_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.focusNextChild($event));
      })("keydown.arrowup", function QuickOrderFormComponent_Template_input_keydown_arrowup_3_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.focusPreviousChild($event));
      })("keydown.enter", function QuickOrderFormComponent_Template_input_keydown_enter_3_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.addProduct($event));
      })("keydown.escape", function QuickOrderFormComponent_Template_input_keydown_escape_3_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.clear($event));
      });
      \u0275\u0275elementEnd();
      \u0275\u0275template(6, QuickOrderFormComponent_button_6_Template, 3, 4, "button", 4)(7, QuickOrderFormComponent_ng_template_7_Template, 3, 4, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(9, QuickOrderFormComponent_span_9_Template, 3, 3, "span", 5);
      \u0275\u0275pipe(10, "async");
      \u0275\u0275elementEnd();
      \u0275\u0275template(11, QuickOrderFormComponent_div_11_Template, 3, 2, "div", 6);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(12, "label", 7);
      \u0275\u0275text(13);
      \u0275\u0275pipe(14, "cxTranslate");
      \u0275\u0275pipe(15, "cxTranslate");
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      let tmp_5_0;
      let tmp_7_0;
      const searchIcon_r6 = \u0275\u0275reference(8);
      \u0275\u0275property("formGroup", ctx.form);
      \u0275\u0275advance();
      \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(2, 10, "quickOrderForm.quickOrderSearch"));
      \u0275\u0275advance(2);
      \u0275\u0275propertyInterpolate("placeholder", \u0275\u0275pipeBind1(4, 12, "quickOrderForm.placeholder"));
      \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind2(5, 14, "quickOrderForm.searchBoxLabel", \u0275\u0275pureFunction1(24, _c0, ctx.limit)));
      \u0275\u0275advance(3);
      \u0275\u0275property("ngIf", (tmp_5_0 = ctx.form.get("product")) == null ? null : tmp_5_0.value)("ngIfElse", searchIcon_r6);
      \u0275\u0275advance(3);
      \u0275\u0275property("ngIf", !\u0275\u0275pipeBind1(10, 17, ctx.canAddProduct()) && ((tmp_7_0 = ctx.form.get("product")) == null ? null : tmp_7_0.dirty));
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.isResultsBoxOpen());
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate2(" ", ctx.results.length ? \u0275\u0275pipeBind2(14, 19, "quickOrderForm.productsResults", \u0275\u0275pureFunction1(26, _c1, ctx.results.length)) : "", " ", \u0275\u0275pipeBind1(15, 22, "quickOrderForm.initialDescription"), "\n");
    }
  },
  dependencies: [NgForOf, NgIf, IconComponent, MediaComponent, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, AsyncPipe, TranslatePipe],
  encapsulation: 2,
  changeDetection: 0
});
var QuickOrderFormComponent = _QuickOrderFormComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(QuickOrderFormComponent, [{
    type: Component,
    args: [{
      selector: "cx-quick-order-form",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: `<form [formGroup]="form" class="quick-order-form-container">
  <div
    class="quick-order-form-input"
    role="search"
    [attr.aria-label]="'quickOrderForm.quickOrderSearch' | cxTranslate"
  >
    <input
      (blur)="onBlur($event)"
      (focus)="open()"
      (keydown.arrowdown)="focusNextChild($event)"
      (keydown.arrowup)="focusPreviousChild($event)"
      (keydown.enter)="addProduct($event)"
      (keydown.escape)="clear($event)"
      [attr.aria-label]="
        'quickOrderForm.searchBoxLabel' | cxTranslate: { limit: limit }
      "
      aria-controls="quick-order-search-results"
      aria-describedby="quickOrderFormInitialDescription"
      class="form-control"
      formControlName="product"
      placeholder="{{ 'quickOrderForm.placeholder' | cxTranslate }}"
      type="text"
    />

    <button
      *ngIf="form.get('product')?.value; else searchIcon"
      (click)="clear($event)"
      (keydown.enter)="clear($event)"
      [attr.aria-label]="'common.reset' | cxTranslate"
      class="quick-order-form-reset-icon"
    >
      <cx-icon [type]="iconTypes.RESET"></cx-icon>
    </button>

    <ng-template #searchIcon>
      <button
        [attr.aria-label]="'common.search' | cxTranslate"
        class="quick-order-form-search-icon"
        tabindex="-1"
      >
        <cx-icon [type]="iconTypes.SEARCH"></cx-icon>
      </button>
    </ng-template>

    <span
      *ngIf="!(canAddProduct() | async) && form.get('product')?.dirty"
      class="list-limit-reached-text"
      role="alert"
    >
      {{ 'quickOrderForm.listLimitReached' | cxTranslate }}
    </span>
  </div>

  <div
    *ngIf="isResultsBoxOpen()"
    class="quick-order-results"
    role="dialog"
    id="quick-order-search-results"
  >
    <ul
      *ngIf="results.length"
      class="quick-order-results-products"
      role="listbox"
    >
      <li
        *ngFor="let product of results; let i = index"
        class="quick-order-results-product-container"
      >
        <button
          (blur)="onBlur($event)"
          (mousedown)="add(product, $event)"
          (keydown.arrowdown)="focusNextChild($event)"
          (keydown.arrowup)="focusPreviousChild($event)"
          (keydown.enter)="add(product, $event)"
          (keydown.escape)="clear($event)"
          [class.has-media]="
            config?.quickOrder?.searchForm?.displayProductImages
          "
          class="quick-order-results-product"
          role="option"
        >
          <cx-media
            *ngIf="config?.quickOrder?.searchForm?.displayProductImages"
            [alt]="product.name"
            [container]="product.images?.PRIMARY"
            class="media"
            format="thumbnail"
            role="presentation"
          ></cx-media>
          <div class="name" [innerHTML]="product.name"></div>
          <span class="id">
            {{
              'quickOrderForm.id'
                | cxTranslate
                  : {
                      id: product.code
                    }
            }}
          </span>
          <span class="price">{{ product.price?.formattedValue }}</span>
        </button>
      </li>
    </ul>

    <span *ngIf="noResults" class="quick-order-no-results">
      {{ 'quickOrderForm.noResults' | cxTranslate }}
    </span>
  </div>
</form>

<label
  aria-live="polite"
  id="quickOrderFormInitialDescription"
  aria-atomic="true"
  class="cx-visually-hidden"
>
  {{
    results.length
      ? ('quickOrderForm.productsResults'
        | cxTranslate: { count: results.length })
      : ''
  }}
  {{ 'quickOrderForm.initialDescription' | cxTranslate }}
</label>
`
    }]
  }], () => [{
    type: Config
  }, {
    type: ChangeDetectorRef
  }, {
    type: QuickOrderFacade
  }, {
    type: WindowRef
  }], {
    limit: [{
      type: Input
    }]
  });
})();
var _QuickOrderItemComponent = class _QuickOrderItemComponent {
  get entry() {
    return this._entry;
  }
  set entry(value) {
    this._entry = value;
    this.quantityControl = new UntypedFormControl(this.entry.quantity, {
      updateOn: "blur"
    });
  }
  constructor(cd, quickOrderService) {
    this.cd = cd;
    this.quickOrderService = quickOrderService;
    this.loading = false;
    this.subscription = new Subscription();
  }
  ngOnInit() {
    this.subscription.add(this.quantityControl.valueChanges.subscribe(() => {
      this.quickOrderService.updateEntryQuantity(this.index, this.quantityControl.value);
    }));
    this.subscription.add(this.watchProductAdd());
  }
  removeEntry() {
    this.quickOrderService.softDeleteEntry(this.index);
    this.cd.detectChanges();
  }
  watchProductAdd() {
    return this.quickOrderService.getProductAdded().subscribe((productCode) => {
      if (productCode === this.entry.product?.code) {
        this.quantityControl = new UntypedFormControl(this.entry.quantity);
        this.cd.detectChanges();
      }
    });
  }
  ngOnDestroy() {
    this.subscription?.unsubscribe();
  }
};
_QuickOrderItemComponent.\u0275fac = function QuickOrderItemComponent_Factory(t) {
  return new (t || _QuickOrderItemComponent)(\u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(QuickOrderFacade));
};
_QuickOrderItemComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
  type: _QuickOrderItemComponent,
  selectors: [["", "cx-quick-order-item", ""], ["cx-quick-order-item"]],
  inputs: {
    entry: "entry",
    index: "index",
    loading: "loading"
  },
  attrs: _c3,
  decls: 30,
  vars: 41,
  consts: [["role", "cell"], [1, "cx-table-item-container"], ["tabindex", "-1", 3, "ngClass", "routerLink"], ["format", "cartIcon", 3, "container", "alt"], [1, "cx-info"], [1, "cx-name"], [1, "cx-link", 3, "ngClass", "routerLink"], [1, "cx-code"], ["role", "cell", 1, "cx-price"], [1, "cx-mobile-header"], [1, "cx-value"], ["role", "cell", 1, "cx-quantity"], [3, "control", "max", "readonly"], ["role", "cell", 1, "cx-actions"], [1, "btn", "btn-tertiary", 3, "click", "disabled"]],
  template: function QuickOrderItemComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "td", 0)(1, "div", 1)(2, "a", 2);
      \u0275\u0275pipe(3, "cxUrl");
      \u0275\u0275element(4, "cx-media", 3);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "div", 4)(6, "div", 5)(7, "a", 6);
      \u0275\u0275pipe(8, "cxUrl");
      \u0275\u0275text(9);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(10, "div", 7);
      \u0275\u0275text(11);
      \u0275\u0275pipe(12, "cxTranslate");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(13, "td", 8)(14, "div", 9);
      \u0275\u0275text(15);
      \u0275\u0275pipe(16, "cxTranslate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(17, "div", 10);
      \u0275\u0275text(18);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(19, "td", 11)(20, "div", 9);
      \u0275\u0275text(21);
      \u0275\u0275pipe(22, "cxTranslate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(23, "div", 10);
      \u0275\u0275element(24, "cx-item-counter", 12);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(25, "td", 13)(26, "button", 14);
      \u0275\u0275pipe(27, "cxTranslate");
      \u0275\u0275listener("click", function QuickOrderItemComponent_Template_button_click_26_listener() {
        return ctx.removeEntry();
      });
      \u0275\u0275text(28);
      \u0275\u0275pipe(29, "cxTranslate");
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(2);
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction2(32, _c4, ctx.loading, !(ctx.entry == null ? null : ctx.entry.product == null ? null : ctx.entry.product.images == null ? null : ctx.entry.product.images.PRIMARY)))("routerLink", \u0275\u0275pipeBind1(3, 18, \u0275\u0275pureFunction1(35, _c5, ctx.entry.product)));
      \u0275\u0275advance(2);
      \u0275\u0275property("container", ctx.entry == null ? null : ctx.entry.product == null ? null : ctx.entry.product.images == null ? null : ctx.entry.product.images.PRIMARY)("alt", ctx.entry == null ? null : ctx.entry.product == null ? null : ctx.entry.product.name);
      \u0275\u0275advance(3);
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(37, _c6, ctx.loading))("routerLink", \u0275\u0275pipeBind1(8, 20, \u0275\u0275pureFunction1(39, _c5, ctx.entry.product)));
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1("", (ctx.entry.product == null ? null : ctx.entry.product.name) || "-", " ");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate2(" ", \u0275\u0275pipeBind1(12, 22, "quickOrderTable.id"), " ", ctx.entry.product == null ? null : ctx.entry.product.code, " ");
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(16, 24, "quickOrderTable.itemPrice"), " ");
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", (ctx.entry.basePrice == null ? null : ctx.entry.basePrice.formattedValue) || "-", " ");
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(22, 26, "quickOrderTable.qty"), " ");
      \u0275\u0275advance(3);
      \u0275\u0275property("control", ctx.quantityControl)("max", ctx.entry.product == null ? null : ctx.entry.product.stock == null ? null : ctx.entry.product.stock.stockLevel)("readonly", ctx.loading);
      \u0275\u0275advance(2);
      \u0275\u0275property("disabled", ctx.loading);
      \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(27, 28, "common.remove"));
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(29, 30, "common.remove"), " ");
    }
  },
  dependencies: [NgClass, ItemCounterComponent, MediaComponent, RouterLink, TranslatePipe, UrlPipe],
  encapsulation: 2,
  changeDetection: 0
});
var QuickOrderItemComponent = _QuickOrderItemComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(QuickOrderItemComponent, [{
    type: Component,
    args: [{
      selector: "[cx-quick-order-item], cx-quick-order-item",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: `<td role="cell">
  <div class="cx-table-item-container">
    <a
      [ngClass]="{
        disabled: loading,
        'img-missing': !entry?.product?.images?.PRIMARY
      }"
      [routerLink]="{ cxRoute: 'product', params: entry.product } | cxUrl"
      tabindex="-1"
    >
      <cx-media
        [container]="entry?.product?.images?.PRIMARY"
        [alt]="entry?.product?.name"
        format="cartIcon"
      ></cx-media>
    </a>
    <div class="cx-info">
      <div class="cx-name">
        <a
          [ngClass]="{ disabled: loading }"
          [routerLink]="{ cxRoute: 'product', params: entry.product } | cxUrl"
          class="cx-link"
          >{{ entry.product?.name || '-' }}
        </a>
      </div>

      <div class="cx-code">
        {{ 'quickOrderTable.id' | cxTranslate }} {{ entry.product?.code }}
      </div>
    </div>
  </div>
</td>

<td role="cell" class="cx-price">
  <div class="cx-mobile-header">
    {{ 'quickOrderTable.itemPrice' | cxTranslate }}
  </div>
  <div class="cx-value">
    {{ entry.basePrice?.formattedValue || '-' }}
  </div>
</td>

<td role="cell" class="cx-quantity">
  <div class="cx-mobile-header">
    {{ 'quickOrderTable.qty' | cxTranslate }}
  </div>
  <div class="cx-value">
    <cx-item-counter
      [control]="quantityControl"
      [max]="entry.product?.stock?.stockLevel"
      [readonly]="loading"
    ></cx-item-counter>
  </div>
</td>

<td role="cell" class="cx-actions">
  <button
    (click)="removeEntry()"
    [attr.aria-label]="'common.remove' | cxTranslate"
    [disabled]="loading"
    class="btn btn-tertiary"
  >
    {{ 'common.remove' | cxTranslate }}
  </button>
</td>
`
    }]
  }], () => [{
    type: ChangeDetectorRef
  }, {
    type: QuickOrderFacade
  }], {
    entry: [{
      type: Input,
      args: ["entry"]
    }],
    index: [{
      type: Input
    }],
    loading: [{
      type: Input
    }]
  });
})();
var _QuickOrderTableComponent = class _QuickOrderTableComponent {
  constructor() {
    this.entries = [];
    this.loading = false;
  }
};
_QuickOrderTableComponent.\u0275fac = function QuickOrderTableComponent_Factory(t) {
  return new (t || _QuickOrderTableComponent)();
};
_QuickOrderTableComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
  type: _QuickOrderTableComponent,
  selectors: [["cx-quick-order-table"]],
  inputs: {
    entries: "entries",
    loading: "loading"
  },
  decls: 1,
  vars: 1,
  consts: [["class", "cx-quick-order-table-wrapper", "role", "table", 4, "ngIf"], ["role", "table", 1, "cx-quick-order-table-wrapper"], [1, "cx-visually-hidden"], ["role", "row", 1, "cx-item-list-header", "cx-quick-order-table-header"], ["role", "columnheader", 1, "cx-item-list-desc"], ["role", "columnheader", 1, "cx-item-list-price"], ["role", "columnheader", 1, "cx-item-list-qty"], ["role", "columnheader", 1, "cx-item-list-actions"], [1, "cx-item-list-items"], ["cx-quick-order-item", "", "class", "cx-item-list-row cx-quick-order-table-row", 3, "entry", "index", "loading", 4, "ngFor", "ngForOf"], ["cx-quick-order-item", "", 1, "cx-item-list-row", "cx-quick-order-table-row", 3, "entry", "index", "loading"]],
  template: function QuickOrderTableComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275template(0, QuickOrderTableComponent_table_0_Template, 20, 16, "table", 0);
    }
    if (rf & 2) {
      \u0275\u0275property("ngIf", (ctx.entries == null ? null : ctx.entries.length) > 0);
    }
  },
  dependencies: [NgForOf, NgIf, QuickOrderItemComponent, TranslatePipe],
  encapsulation: 2,
  changeDetection: 0
});
var QuickOrderTableComponent = _QuickOrderTableComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(QuickOrderTableComponent, [{
    type: Component,
    args: [{
      selector: "cx-quick-order-table",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: `<table
  *ngIf="entries?.length > 0"
  class="cx-quick-order-table-wrapper"
  role="table"
>
  <caption class="cx-visually-hidden">
    {{
      'quickOrderTable.caption' | cxTranslate
    }}
  </caption>
  <thead>
    <tr role="row" class="cx-item-list-header cx-quick-order-table-header">
      <th role="columnheader" class="cx-item-list-desc">
        {{ 'quickOrderTable.product' | cxTranslate }}
      </th>
      <th role="columnheader" class="cx-item-list-price">
        {{ 'quickOrderTable.price' | cxTranslate }}
      </th>
      <th role="columnheader" class="cx-item-list-qty">
        {{ 'quickOrderTable.quantity' | cxTranslate }}
      </th>
      <th role="columnheader" class="cx-item-list-actions">
        {{ 'quickOrderTable.actions' | cxTranslate }}
      </th>
    </tr>
  </thead>
  <tbody class="cx-item-list-items">
    <tr
      cx-quick-order-item
      class="cx-item-list-row cx-quick-order-table-row"
      *ngFor="let entry of entries; let i = index"
      [entry]="entry"
      [index]="i"
      [loading]="loading"
    ></tr>
  </tbody>
</table>
`
    }]
  }], null, {
    entries: [{
      type: Input
    }],
    loading: [{
      type: Input
    }]
  });
})();
var _QuickOrderComponent = class _QuickOrderComponent {
  constructor(activeCartService, component, globalMessageService, quickOrderService, quickOrderStatePersistenceService) {
    this.activeCartService = activeCartService;
    this.component = component;
    this.globalMessageService = globalMessageService;
    this.quickOrderService = quickOrderService;
    this.quickOrderStatePersistenceService = quickOrderStatePersistenceService;
    this.quickOrderListLimit$ = this.component.data$.pipe(map((data) => data.quickOrderListLimit), tap((limit) => {
      if (!!limit) {
        this.quickOrderService.setListLimit(limit);
      }
    }));
    this.isCartStable$ = combineLatest([this.activeCartService.getActiveCartId(), this.activeCartService.isStable()]).pipe(map(([activeCartId, isStable]) => !activeCartId ? true : isStable));
    this.globalMessageType = GlobalMessageType;
    this.cartErrors$ = new BehaviorSubject([]);
    this.cartWarnings$ = new BehaviorSubject([]);
    this.cartSuccesses$ = new BehaviorSubject([]);
    this.showAddToCartInformation$ = new BehaviorSubject(false);
    this.nonPurchasableProductError$ = new BehaviorSubject(null);
  }
  ngOnInit() {
    this.cartId$ = this.activeCartService.getActiveCartId();
    this.entries$ = this.quickOrderService.getEntries();
    this.quickOrderStatePersistenceService.initSync();
  }
  ngOnDestroy() {
    this.quickOrderService.clearDeletedEntries();
  }
  get errors$() {
    return this.cartErrors$.asObservable();
  }
  get warnings$() {
    return this.cartWarnings$.asObservable();
  }
  get successes$() {
    return this.cartSuccesses$.asObservable();
  }
  get nonPurchasableError$() {
    return this.quickOrderService.getNonPurchasableProductError();
  }
  get addToCartInformation$() {
    return this.showAddToCartInformation$.asObservable();
  }
  get softDeletedEntries$() {
    return this.quickOrderService.getSoftDeletedEntries();
  }
  clear() {
    this.quickOrderService.clearList();
    this.globalMessageService.add({
      key: "quickOrderTable.listCleared"
    }, GlobalMessageType.MSG_TYPE_INFO);
  }
  addToCart(orderEntries) {
    if (!orderEntries.length) {
      this.showAddToCartInformation$.next(true);
      return;
    }
    this.clearStatuses();
    this.quickOrderService.addToCart().pipe(first()).subscribe(([entries, errors]) => {
      errors.forEach((err) => {
        if (!err.entry) {
          err.entry = orderEntries.find((e) => e.product?.code === err.productCode);
        }
      });
      this.extractErrors(errors);
      this.extractWarnings(errors);
      if (!errors.length) {
        this.showAddedToCartSuccessMessage();
      } else {
        this.extractSuccesses(errors, entries);
      }
    });
  }
  clearErrors() {
    this.cartErrors$.next([]);
  }
  clearWarnings() {
    this.cartWarnings$.next([]);
  }
  clearSuccesses() {
    this.cartSuccesses$.next([]);
  }
  clearAddToCartInformation() {
    this.showAddToCartInformation$.next(false);
  }
  undoDeletion(entry) {
    if (entry.product?.code) {
      this.quickOrderService.restoreSoftDeletedEntry(entry.product.code);
    }
  }
  clearDeletion(entry) {
    if (entry.product?.code) {
      this.quickOrderService.hardDeleteEntry(entry.product.code);
    }
  }
  clearNonPurchasableError() {
    this.quickOrderService.clearNonPurchasableProductError();
  }
  canAddProduct() {
    return this.quickOrderService.canAdd();
  }
  extractErrors(errors) {
    const noAddedEntries = errors.filter((error) => error.quantityAdded === 0);
    this.setErrors(noAddedEntries);
  }
  extractWarnings(errors) {
    const warnings = errors.filter((error) => error.quantityAdded !== 0);
    this.setWarnings(warnings);
  }
  extractSuccesses(errors, entries) {
    const successAddedEntries = [];
    entries.forEach((entry) => {
      const element = errors.find((error) => error.productCode === entry.product?.code);
      if (!element) {
        successAddedEntries.push(entry);
      }
    });
    this.setSuccesses(successAddedEntries);
  }
  clearStatuses() {
    this.clearErrors();
    this.clearWarnings();
    this.clearSuccesses();
  }
  showAddedToCartSuccessMessage() {
    this.globalMessageService.add({
      key: "quickOrderTable.addedtoCart"
    }, GlobalMessageType.MSG_TYPE_CONFIRMATION);
  }
  setErrors(errors) {
    this.cartErrors$.next(errors);
  }
  setWarnings(warnings) {
    this.cartWarnings$.next(warnings);
  }
  setSuccesses(entries) {
    this.cartSuccesses$.next(entries);
  }
};
_QuickOrderComponent.\u0275fac = function QuickOrderComponent_Factory(t) {
  return new (t || _QuickOrderComponent)(\u0275\u0275directiveInject(ActiveCartFacade), \u0275\u0275directiveInject(CmsComponentData), \u0275\u0275directiveInject(GlobalMessageService), \u0275\u0275directiveInject(QuickOrderFacade), \u0275\u0275directiveInject(QuickOrderStatePersistenceService));
};
_QuickOrderComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
  type: _QuickOrderComponent,
  selectors: [["cx-quick-order"]],
  viewQuery: function QuickOrderComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(_c7, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.quickOrderForm = _t.first);
    }
  },
  decls: 17,
  vars: 24,
  consts: [["quickOrderForm", ""], ["aria-atomic", "true", "aria-live", "assertive", "aria-relevant", "additions", 1, "quick-order-message-container"], [4, "ngIf"], [1, "quick-order-list-limit-message", 3, "text", "isVisibleCloseButton", "type"], [1, "quick-order-add-to-cart-information-message", 3, "closeMessage", "text", "type"], [1, "quick-order-non-purchasable-product-error-message", 3, "closeMessage", "text", "type"], ["class", "quick-order-deletions-message", 3, "actionButtonText", "actionButtonMessage", "text", "type", "buttonAction", "closeMessage", 4, "ngFor", "ngForOf"], [1, "quick-order-deletions-message", 3, "buttonAction", "closeMessage", "actionButtonText", "actionButtonMessage", "text", "type"], ["class", "quick-order-errors-message", 3, "accordionText", "text", "type", "closeMessage", 4, "ngIf"], [1, "quick-order-errors-message", 3, "closeMessage", "accordionText", "text", "type"], [1, "quick-order-errors"], ["class", "quick-order-error-item", 4, "ngFor", "ngForOf"], [1, "cx-visually-hidden"], [1, "quick-order-error-item"], ["class", "quick-order-warnings-message", 3, "accordionText", "text", "type", "closeMessage", 4, "ngIf"], [1, "quick-order-warnings-message", 3, "closeMessage", "accordionText", "text", "type"], [1, "quick-order-warnings"], ["class", "quick-order-warning-item", 4, "ngFor", "ngForOf"], [1, "quick-order-warning-item"], ["class", "quick-order-successes-message", 3, "text", "type", "closeMessage", 4, "ngIf"], [1, "quick-order-successes-message", 3, "closeMessage", "text", "type"], [1, "quick-order-successes"], ["class", "quick-order-success-item", 4, "ngFor", "ngForOf"], [1, "quick-order-success-item"], [1, "quick-order-header"], [1, "quick-order-form-body"], [3, "limit"], [1, "quick-order-table-body"], [3, "entries", "loading"], [1, "quick-order-footer", "row"], [1, "col-xs-12", "col-md-5", "col-lg-3"], ["class", "btn btn-block btn-secondary clear-button", "type", "button", 3, "disabled", "click", 4, "ngIf"], [3, "clickEvent", "ariaLabel", "loading"], ["type", "button", 1, "btn", "btn-block", "btn-secondary", "clear-button", 3, "click", "disabled"]],
  template: function QuickOrderComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 1);
      \u0275\u0275template(1, QuickOrderComponent_ng_container_1_Template, 3, 3, "ng-container", 2);
      \u0275\u0275pipe(2, "async");
      \u0275\u0275template(3, QuickOrderComponent_ng_container_3_Template, 3, 4, "ng-container", 2);
      \u0275\u0275pipe(4, "async");
      \u0275\u0275template(5, QuickOrderComponent_ng_container_5_Template, 3, 7, "ng-container", 2);
      \u0275\u0275pipe(6, "async");
      \u0275\u0275template(7, QuickOrderComponent_ng_container_7_Template, 3, 3, "ng-container", 2);
      \u0275\u0275pipe(8, "async");
      \u0275\u0275template(9, QuickOrderComponent_ng_container_9_Template, 2, 1, "ng-container", 2);
      \u0275\u0275pipe(10, "async");
      \u0275\u0275template(11, QuickOrderComponent_ng_container_11_Template, 2, 1, "ng-container", 2);
      \u0275\u0275pipe(12, "async");
      \u0275\u0275template(13, QuickOrderComponent_ng_container_13_Template, 2, 1, "ng-container", 2);
      \u0275\u0275pipe(14, "async");
      \u0275\u0275elementEnd();
      \u0275\u0275template(15, QuickOrderComponent_ng_container_15_Template, 3, 3, "ng-container", 2);
      \u0275\u0275pipe(16, "async");
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", \u0275\u0275pipeBind1(2, 8, ctx.entries$));
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", \u0275\u0275pipeBind1(4, 10, ctx.addToCartInformation$));
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", \u0275\u0275pipeBind1(6, 12, ctx.nonPurchasableError$));
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", \u0275\u0275pipeBind1(8, 14, ctx.softDeletedEntries$));
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", \u0275\u0275pipeBind1(10, 16, ctx.errors$));
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", \u0275\u0275pipeBind1(12, 18, ctx.warnings$));
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", \u0275\u0275pipeBind1(14, 20, ctx.successes$));
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", \u0275\u0275pipeBind1(16, 22, ctx.quickOrderListLimit$));
    }
  },
  dependencies: [NgForOf, NgIf, MessageComponent, ProgressButtonComponent, QuickOrderFormComponent, QuickOrderTableComponent, AsyncPipe, KeyValuePipe, TranslatePipe],
  encapsulation: 2,
  changeDetection: 0
});
var QuickOrderComponent = _QuickOrderComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(QuickOrderComponent, [{
    type: Component,
    args: [{
      selector: "cx-quick-order",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: `<div
  aria-atomic="true"
  aria-live="assertive"
  aria-relevant="additions"
  class="quick-order-message-container"
>
  <ng-container *ngIf="entries$ | async as entries">
    <ng-container *ngIf="!(canAddProduct() | async)">
      <ng-container *ngIf="quickOrderForm?.form?.get('product')?.dirty">
        <cx-message
          [text]="
            'quickOrderList.errors.listIsFull'
              | cxTranslate: { count: entries.length }
          "
          [isVisibleCloseButton]="false"
          [type]="globalMessageType.MSG_TYPE_ERROR"
          class="quick-order-list-limit-message"
        >
        </cx-message>
      </ng-container>
    </ng-container>
  </ng-container>

  <ng-container *ngIf="addToCartInformation$ | async">
    <cx-message
      (closeMessage)="clearAddToCartInformation()"
      [text]="
        'quickOrderList.informations.addProductBeforeAddingToCart' | cxTranslate
      "
      [type]="globalMessageType.MSG_TYPE_ERROR"
      class="quick-order-add-to-cart-information-message"
    >
    </cx-message>
  </ng-container>

  <ng-container *ngIf="nonPurchasableError$ | async as nonPurchasableError">
    <cx-message
      (closeMessage)="clearNonPurchasableError()"
      [text]="
        'quickOrderList.errors.nonPurchasableError'
          | cxTranslate: { name: nonPurchasableError.name }
      "
      [type]="globalMessageType.MSG_TYPE_ERROR"
      class="quick-order-non-purchasable-product-error-message"
    >
    </cx-message>
  </ng-container>

  <ng-container *ngIf="softDeletedEntries$ | async as deletedEntries">
    <cx-message
      *ngFor="let deletedEntry of deletedEntries | keyvalue"
      (buttonAction)="undoDeletion(deletedEntry.value)"
      (closeMessage)="clearDeletion(deletedEntry.value)"
      [actionButtonText]="'quickOrderList.undo' | cxTranslate"
      [actionButtonMessage]="
        'quickOrderList.revokeUndo'
          | cxTranslate: { name: deletedEntry.value.product?.name }
      "
      [text]="
        'quickOrderList.productWasDeleted'
          | cxTranslate: { name: deletedEntry.value.product?.name }
      "
      [type]="globalMessageType.MSG_TYPE_CONFIRMATION"
      class="quick-order-deletions-message"
    >
    </cx-message>
  </ng-container>

  <ng-container *ngIf="errors$ | async as errors">
    <cx-message
      *ngIf="errors.length"
      (closeMessage)="clearErrors()"
      [accordionText]="'quickOrderList.errors.reviewErrors' | cxTranslate"
      [text]="'quickOrderList.errorProceedingToCart' | cxTranslate"
      [type]="globalMessageType.MSG_TYPE_ERROR"
      class="quick-order-errors-message"
    >
      <ul class="quick-order-errors">
        <li *ngFor="let error of errors" class="quick-order-error-item">
          <span>
            {{
              'quickOrderList.errors.productIsOutOfStock'
                | cxTranslate
                  : {
                      name: error.entry.product.name,
                      code: error.entry.product.code
                    }
            }}
          </span>
        </li>
      </ul>
      <div class="cx-visually-hidden">
        {{
          'quickOrderList.errors.outOfStockErrorFound'
            | cxTranslate: { count: errors.length }
        }}
      </div>
    </cx-message>
  </ng-container>

  <ng-container *ngIf="warnings$ | async as warnings">
    <cx-message
      *ngIf="warnings.length"
      (closeMessage)="clearWarnings()"
      [accordionText]="'quickOrderList.warnings.reviewWarnings' | cxTranslate"
      [text]="'quickOrderList.warningProceedingToCart' | cxTranslate"
      [type]="globalMessageType.MSG_TYPE_WARNING"
      class="quick-order-warnings-message"
    >
      <ul class="quick-order-warnings">
        <li *ngFor="let warning of warnings" class="quick-order-warning-item">
          <span>
            {{
              'quickOrderList.warnings.productWasReduced'
                | cxTranslate
                  : {
                      name: warning.entry.product.name,
                      code: warning.entry.product.code,
                      quantityAdded: warning.quantityAdded
                    }
            }}
          </span>
        </li>
      </ul>
      <div class="cx-visually-hidden">
        {{
          'quickOrderList.warnings.reduceWarningFound'
            | cxTranslate: { count: warnings.length }
        }}
      </div>
    </cx-message>
  </ng-container>

  <ng-container *ngIf="successes$ | async as successes">
    <cx-message
      *ngIf="successes.length"
      (closeMessage)="clearSuccesses()"
      [text]="'quickOrderList.successfullyAddedToCart' | cxTranslate"
      [type]="globalMessageType.MSG_TYPE_CONFIRMATION"
      class="quick-order-successes-message"
    >
      <ul class="quick-order-successes">
        <li *ngFor="let entry of successes" class="quick-order-success-item">
          <span>{{
            'quickOrderList.successes.productAddedToCart'
              | cxTranslate
                : {
                    name: entry.product.name,
                    code: entry.product.code
                  }
          }}</span>
        </li>
      </ul>
      <div class="cx-visually-hidden">
        {{
          'quickOrderList.successes.addedToCartFound'
            | cxTranslate: { count: successes.length }
        }}
      </div>
    </cx-message>
  </ng-container>
</div>

<ng-container *ngIf="quickOrderListLimit$ | async as quickOrderListLimit">
  <ng-container *ngIf="entries$ | async as entries">
    <div class="quick-order-header">
      <h2>
        {{ 'quickOrderList.header' | cxTranslate }}
      </h2>
      <p>
        {{
          'quickOrderList.subHeader'
            | cxTranslate: { limit: quickOrderListLimit }
        }}
      </p>
    </div>

    <div class="quick-order-form-body">
      <cx-quick-order-form #quickOrderForm [limit]="quickOrderListLimit">
      </cx-quick-order-form>
    </div>

    <div class="quick-order-table-body">
      <cx-quick-order-table
        [entries]="entries"
        [loading]="!(isCartStable$ | async)"
      ></cx-quick-order-table>
    </div>

    <div class="quick-order-footer row">
      <div class="col-xs-12 col-md-5 col-lg-3">
        <button
          *ngIf="entries.length"
          (click)="clear()"
          [attr.aria-label]="'quickOrderList.emptyList' | cxTranslate"
          [disabled]="!(isCartStable$ | async)"
          class="btn btn-block btn-secondary clear-button"
          type="button"
        >
          {{ 'quickOrderList.emptyList' | cxTranslate }}
        </button>
      </div>

      <div class="col-xs-12 col-md-5 col-lg-3">
        <cx-progress-button
          (clickEvent)="addToCart(entries)"
          [ariaLabel]="'quickOrderList.addToCart' | cxTranslate"
          [class]="'btn-block add-button'"
          [loading]="!(isCartStable$ | async)"
        >
          {{ 'quickOrderList.addToCart' | cxTranslate }}
        </cx-progress-button>
      </div>
    </div>
  </ng-container>
</ng-container>
`
    }]
  }], () => [{
    type: ActiveCartFacade
  }, {
    type: CmsComponentData
  }, {
    type: GlobalMessageService
  }, {
    type: QuickOrderFacade
  }, {
    type: QuickOrderStatePersistenceService
  }], {
    quickOrderForm: [{
      type: ViewChild,
      args: ["quickOrderForm"]
    }]
  });
})();
var _QuickOrderListModule = class _QuickOrderListModule {
};
_QuickOrderListModule.\u0275fac = function QuickOrderListModule_Factory(t) {
  return new (t || _QuickOrderListModule)();
};
_QuickOrderListModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
  type: _QuickOrderListModule
});
_QuickOrderListModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
  providers: [provideDefaultConfig({
    cmsComponents: {
      QuickOrderComponent: {
        component: QuickOrderComponent,
        data: {
          quickOrderListLimit: 10
        }
      }
    }
  })],
  imports: [AtMessageModule, CommonModule, FormErrorsModule, I18nModule, IconModule, ItemCounterModule, MediaModule, MessageComponentModule, ProgressButtonModule, ReactiveFormsModule, RouterModule, UrlModule]
});
var QuickOrderListModule = _QuickOrderListModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(QuickOrderListModule, [{
    type: NgModule,
    args: [{
      imports: [AtMessageModule, CommonModule, FormErrorsModule, I18nModule, IconModule, ItemCounterModule, MediaModule, MessageComponentModule, ProgressButtonModule, ReactiveFormsModule, RouterModule, UrlModule],
      providers: [provideDefaultConfig({
        cmsComponents: {
          QuickOrderComponent: {
            component: QuickOrderComponent,
            data: {
              quickOrderListLimit: 10
            }
          }
        }
      })],
      declarations: [QuickOrderComponent, QuickOrderFormComponent, QuickOrderItemComponent, QuickOrderTableComponent],
      exports: [QuickOrderComponent, QuickOrderFormComponent, QuickOrderItemComponent, QuickOrderTableComponent]
    }]
  }], null, null);
})();
var _QuickOrderComponentsModule = class _QuickOrderComponentsModule {
};
_QuickOrderComponentsModule.\u0275fac = function QuickOrderComponentsModule_Factory(t) {
  return new (t || _QuickOrderComponentsModule)();
};
_QuickOrderComponentsModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
  type: _QuickOrderComponentsModule
});
_QuickOrderComponentsModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
  providers: [{
    provide: QuickOrderOrderEntriesContextToken,
    useExisting: QuickOrderOrderEntriesContext
  }],
  imports: [RouterModule, QuickOrderListModule, CartQuickOrderFormModule]
});
var QuickOrderComponentsModule = _QuickOrderComponentsModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(QuickOrderComponentsModule, [{
    type: NgModule,
    args: [{
      imports: [RouterModule, QuickOrderListModule, CartQuickOrderFormModule],
      providers: [{
        provide: QuickOrderOrderEntriesContextToken,
        useExisting: QuickOrderOrderEntriesContext
      }]
    }]
  }], null, null);
})();

// node_modules/@spartacus/cart/fesm2022/spartacus-cart-quick-order.mjs
var _QuickOrderModule = class _QuickOrderModule {
};
_QuickOrderModule.\u0275fac = function QuickOrderModule_Factory(t) {
  return new (t || _QuickOrderModule)();
};
_QuickOrderModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
  type: _QuickOrderModule
});
_QuickOrderModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
  imports: [QuickOrderCoreModule, QuickOrderComponentsModule]
});
var QuickOrderModule = _QuickOrderModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(QuickOrderModule, [{
    type: NgModule,
    args: [{
      imports: [QuickOrderCoreModule, QuickOrderComponentsModule]
    }]
  }], null, null);
})();
export {
  QuickOrderModule
};
//# sourceMappingURL=chunk-FSZXOQNP.mjs.map
