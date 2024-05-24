import {
  CloneSavedCartEvent,
  CloneSavedCartFailEvent,
  CloneSavedCartSuccessEvent,
  EditSavedCartEvent,
  EditSavedCartFailEvent,
  EditSavedCartSuccessEvent,
  NewSavedCartOrderEntriesContextToken,
  RestoreSavedCartEvent,
  RestoreSavedCartFailEvent,
  RestoreSavedCartSuccessEvent,
  SaveCartEvent,
  SaveCartFailEvent,
  SaveCartSuccessEvent,
  SavedCartFacade,
  SavedCartFormType,
  SavedCartOrderEntriesContextToken
} from "./chunk-SRHF335G.js";
import {
  AddToCartComponent,
  AddToCartModule
} from "./chunk-3ULZ5TZK.js";
import {
  UserAccountFacade
} from "./chunk-NWLDJIE7.js";
import {
  CartConnector,
  MULTI_CART_DATA,
  ProductImportInfoService,
  cartGroup_actions,
  isSelectiveCart
} from "./chunk-MC5AHP6K.js";
import "./chunk-IOXUQC7Q.js";
import {
  ActiveCartFacade,
  CART_NORMALIZER,
  CartOutlets,
  CartType,
  DeleteCartEvent,
  DeleteCartFailEvent,
  DeleteCartSuccessEvent,
  MultiCartFacade,
  OrderEntriesSource,
  ProductImportStatus,
  PromotionLocation
} from "./chunk-I4764JOB.js";
import {
  CardComponent,
  CardModule,
  DIALOG_TYPE,
  DefaultValueAccessor,
  FocusDirective,
  FormControlName,
  FormErrorsComponent,
  FormErrorsModule,
  FormGroupDirective,
  FormUtils,
  FormsModule,
  ICON_TYPE,
  IconComponent,
  IconModule,
  KeyboardFocusModule,
  LaunchDialogService,
  ListNavigationModule,
  MediaModule,
  NgControlStatus,
  NgControlStatusGroup,
  OutletDirective,
  OutletModule,
  ReactiveFormsModule,
  RequiredValidator,
  SpinnerComponent,
  SpinnerModule,
  UntypedFormControl,
  UntypedFormGroup,
  Validators,
  ɵNgNoValidate
} from "./chunk-TEI6YMHW.js";
import {
  Actions,
  ActionsSubject,
  AsyncPipe,
  AuthGuard,
  AuthService,
  ChangeDetectionStrategy,
  CommonModule,
  Component,
  ConfigModule,
  ConverterService,
  CxDatePipe,
  EMPTY,
  EffectsModule,
  ElementRef,
  EventService,
  GlobalMessageService,
  GlobalMessageType,
  HostListener,
  HttpClient,
  I18nModule,
  Injectable,
  LoggerService,
  NgForOf,
  NgIf,
  NgModule,
  NgSwitch,
  NgSwitchCase,
  OccEndpointsService,
  PROCESS_FEATURE,
  RouterLink,
  RouterModule,
  RoutingService,
  StateEventService,
  Store,
  Subscription,
  TranslatePipe,
  TranslationService,
  UrlModule,
  UrlPipe,
  UserIdService,
  ViewChild,
  ViewContainerRef,
  __spreadProps,
  __spreadValues,
  catchError,
  combineLatest,
  createEffect,
  createFrom,
  debounce,
  distinctUntilChanged,
  every,
  filter,
  inject,
  map,
  merge,
  normalizeHttpError,
  observeOn,
  of,
  ofType,
  process_selectors,
  provideDefaultConfig,
  queueScheduler,
  select,
  setClassMetadata,
  shareReplay,
  startWith,
  switchMap,
  take,
  tap,
  utilsGroup,
  withLatestFrom,
  ɵɵadvance,
  ɵɵattribute,
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
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵpureFunction3,
  ɵɵpureFunction5,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵviewQuery
} from "./chunk-RJVZANIA.js";

// node_modules/@spartacus/cart/fesm2022/spartacus-cart-saved-cart-components.mjs
var _c0 = ["element"];
var _c1 = () => ({
  cxRoute: "savedCarts"
});
function AddToSavedCartComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 2)(2, "a", 3);
    \u0275\u0275pipe(3, "cxUrl");
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "cxTranslate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "a", 4, 0);
    \u0275\u0275pipe(9, "async");
    \u0275\u0275listener("click", function AddToSavedCartComponent_ng_container_0_Template_a_click_7_listener() {
      const cart_r2 = \u0275\u0275restoreView(_r1).ngIf;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.saveCart(cart_r2));
    });
    \u0275\u0275elementStart(10, "span");
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "cxTranslate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", \u0275\u0275pipeBind1(3, 5, \u0275\u0275pureFunction0(13, _c1)));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 7, "addToSavedCart.savedCarts"));
    \u0275\u0275advance(2);
    \u0275\u0275classProp("disabled", \u0275\u0275pipeBind1(9, 9, ctx_r2.disableSaveCartForLater$));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(12, 11, "addToSavedCart.saveCartForLater"));
  }
}
function SavedCartDetailsActionComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 2)(2, "div", 3)(3, "button", 4, 0);
    \u0275\u0275listener("click", function SavedCartDetailsActionComponent_ng_container_0_Template_button_click_3_listener() {
      const cart_r2 = \u0275\u0275restoreView(_r1).ngIf;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.openDialog(cart_r2, ctx_r2.savedCartFormType.DELETE));
    });
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "cxTranslate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 3)(8, "button", 5, 0);
    \u0275\u0275listener("click", function SavedCartDetailsActionComponent_ng_container_0_Template_button_click_8_listener() {
      const cart_r2 = \u0275\u0275restoreView(_r1).ngIf;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.openDialog(cart_r2, ctx_r2.savedCartFormType.RESTORE));
    });
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "cxTranslate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(6, 2, "savedCartDetails.deleteSavedCart"), " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(11, 4, "savedCartList.makeCartActive"), " ");
  }
}
var _c2 = (a0, a1, a2) => ({
  displayAddToCart: true,
  addToCartString: a0,
  optionalBtn: a1,
  cartType: a2
});
var _c3 = (a0, a1, a2, a3, a4) => ({
  cartId: a0,
  cartIsLoading: a1,
  items: a2,
  promotionLocation: a3,
  options: a4
});
function SavedCartDetailsItemsComponent_ng_container_0_ng_container_1_ng_template_4_Template(rf, ctx) {
}
function SavedCartDetailsItemsComponent_ng_container_0_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275element(1, "div", 4);
    \u0275\u0275pipe(2, "cxTranslate");
    \u0275\u0275elementStart(3, "div", 5);
    \u0275\u0275template(4, SavedCartDetailsItemsComponent_ng_container_0_ng_container_1_ng_template_4_Template, 0, 0, "ng-template", 6);
    \u0275\u0275pipe(5, "async");
    \u0275\u0275pipe(6, "async");
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const cart_r1 = \u0275\u0275nextContext().ngIf;
    const ctx_r1 = \u0275\u0275nextContext();
    const addToCartBtn_r3 = \u0275\u0275reference(5);
    \u0275\u0275advance();
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(2, 3, "common.loaded"));
    \u0275\u0275advance(3);
    \u0275\u0275property("cxOutlet", ctx_r1.CartOutlets.CART_ITEM_LIST)("cxOutletContext", \u0275\u0275pureFunction5(13, _c3, cart_r1.code, !\u0275\u0275pipeBind1(5, 5, ctx_r1.cartLoaded$), cart_r1.entries, ctx_r1.CartLocation.SavedCart, \u0275\u0275pureFunction3(9, _c2, \u0275\u0275pipeBind1(6, 7, ctx_r1.buyItAgainTranslation$), addToCartBtn_r3, ctx_r1.CartType.SELECTIVE)));
  }
}
function SavedCartDetailsItemsComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, SavedCartDetailsItemsComponent_ng_container_0_ng_container_1_Template, 7, 19, "ng-container", 3);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const cart_r1 = ctx.ngIf;
    \u0275\u0275nextContext();
    const emptyCartItems_r4 = \u0275\u0275reference(3);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (cart_r1 == null ? null : cart_r1.entries == null ? null : cart_r1.entries.length) > 0)("ngIfElse", emptyCartItems_r4);
  }
}
function SavedCartDetailsItemsComponent_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7);
    \u0275\u0275element(1, "cx-spinner");
    \u0275\u0275elementEnd();
  }
}
function SavedCartDetailsItemsComponent_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "cx-add-to-cart", 8);
  }
  if (rf & 2) {
    const ctx_ir5 = ctx.$implicit;
    \u0275\u0275property("productCode", ctx_ir5.item.product == null ? null : ctx_ir5.item.product.code)("product", ctx_ir5.item.product)("showQuantity", false)("options", ctx_ir5.options)("pickupStore", ctx_ir5.item.deliveryPointOfService == null ? null : ctx_ir5.item.deliveryPointOfService.name);
  }
}
function SavedCartDetailsOverviewComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 2)(2, "div", 3)(3, "div", 4)(4, "div", 5);
    \u0275\u0275element(5, "cx-card", 6);
    \u0275\u0275pipe(6, "async");
    \u0275\u0275elementStart(7, "button", 7, 0);
    \u0275\u0275pipe(9, "cxTranslate");
    \u0275\u0275listener("click", function SavedCartDetailsOverviewComponent_ng_container_0_Template_button_click_7_listener() {
      const cart_r2 = \u0275\u0275restoreView(_r1).ngIf;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.openDialog(cart_r2));
    });
    \u0275\u0275element(10, "cx-icon", 8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div", 9);
    \u0275\u0275element(12, "cx-card", 10);
    \u0275\u0275pipe(13, "async");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "div", 4);
    \u0275\u0275element(15, "cx-card", 6);
    \u0275\u0275pipe(16, "async");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "div", 4);
    \u0275\u0275element(18, "cx-card", 6);
    \u0275\u0275pipe(19, "cxDate");
    \u0275\u0275pipe(20, "async");
    \u0275\u0275element(21, "cx-card", 6);
    \u0275\u0275pipe(22, "async");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "div", 4);
    \u0275\u0275element(24, "cx-card", 6);
    \u0275\u0275pipe(25, "async");
    \u0275\u0275element(26, "cx-card", 6);
    \u0275\u0275pipe(27, "async");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const cart_r2 = ctx.ngIf;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275property("content", \u0275\u0275pipeBind1(6, 11, ctx_r2.getCartName(cart_r2 == null ? null : cart_r2.name)));
    \u0275\u0275advance(2);
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(9, 13, "savedCartDetails.editSavedCart"));
    \u0275\u0275advance(3);
    \u0275\u0275property("type", ctx_r2.iconTypes.PENCIL);
    \u0275\u0275advance(2);
    \u0275\u0275property("content", \u0275\u0275pipeBind1(13, 15, ctx_r2.getCartDescription(cart_r2 == null ? null : cart_r2.description)))("truncateText", true)("charactersLimit", 30);
    \u0275\u0275advance(3);
    \u0275\u0275property("content", \u0275\u0275pipeBind1(16, 17, ctx_r2.getCartId(cart_r2 == null ? null : cart_r2.code)));
    \u0275\u0275advance(3);
    \u0275\u0275property("content", \u0275\u0275pipeBind1(20, 21, ctx_r2.getDateSaved(\u0275\u0275pipeBind1(19, 19, cart_r2 == null ? null : cart_r2.saveTime))));
    \u0275\u0275advance(3);
    \u0275\u0275property("content", \u0275\u0275pipeBind1(22, 23, ctx_r2.getCartItems(cart_r2 == null ? null : cart_r2.totalItems)));
    \u0275\u0275advance(3);
    \u0275\u0275property("content", \u0275\u0275pipeBind1(25, 25, ctx_r2.getCartQuantity(cart_r2 == null ? null : cart_r2.totalUnitCount)));
    \u0275\u0275advance(2);
    \u0275\u0275property("content", \u0275\u0275pipeBind1(27, 27, ctx_r2.getCartTotal(cart_r2 == null ? null : cart_r2.totalPriceWithTax == null ? null : cart_r2.totalPriceWithTax.formattedValue)));
  }
}
var _c4 = (a0) => ({
  count: a0
});
var _c5 = (a0) => ({
  savedCartId: a0
});
var _c6 = (a0) => ({
  cxRoute: "savedCartsDetails",
  params: a0
});
function SavedCartListComponent_ng_container_0_ng_container_1_ng_container_7_tr_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr", 13);
    \u0275\u0275listener("click", function SavedCartListComponent_ng_container_0_ng_container_1_ng_container_7_tr_22_Template_tr_click_0_listener() {
      const savedCart_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r2.goToSavedCartDetails(savedCart_r2));
    });
    \u0275\u0275elementStart(1, "td", 14)(2, "div", 15);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "cxTranslate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "a", 16);
    \u0275\u0275pipe(6, "cxUrl");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "td", 17)(9, "div", 15);
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "cxTranslate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "a", 16);
    \u0275\u0275pipe(13, "cxUrl");
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "td", 18)(16, "div", 15);
    \u0275\u0275text(17);
    \u0275\u0275pipe(18, "cxTranslate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "a", 16);
    \u0275\u0275pipe(20, "cxUrl");
    \u0275\u0275text(21);
    \u0275\u0275pipe(22, "cxDate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "td", 19)(24, "div", 15);
    \u0275\u0275text(25);
    \u0275\u0275pipe(26, "cxTranslate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "a", 16);
    \u0275\u0275pipe(28, "cxUrl");
    \u0275\u0275text(29);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(30, "td", 20)(31, "div", 15);
    \u0275\u0275text(32);
    \u0275\u0275pipe(33, "cxTranslate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "a", 16);
    \u0275\u0275pipe(35, "cxUrl");
    \u0275\u0275text(36);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(37, "td", 21);
    \u0275\u0275element(38, "div", 15);
    \u0275\u0275elementStart(39, "button", 22, 2);
    \u0275\u0275listener("click", function SavedCartListComponent_ng_container_0_ng_container_1_ng_container_7_tr_22_Template_button_click_39_listener($event) {
      const savedCart_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r2.openDialog($event, savedCart_r2));
    });
    \u0275\u0275text(41);
    \u0275\u0275pipe(42, "cxTranslate");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const savedCart_r2 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 16, "savedCartList.cartName"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", \u0275\u0275pipeBind1(6, 18, \u0275\u0275pureFunction1(43, _c6, \u0275\u0275pureFunction1(41, _c5, savedCart_r2 == null ? null : savedCart_r2.code))));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", savedCart_r2 == null ? null : savedCart_r2.name, "");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(11, 20, "savedCartList.cartId"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", \u0275\u0275pipeBind1(13, 22, \u0275\u0275pureFunction1(47, _c6, \u0275\u0275pureFunction1(45, _c5, savedCart_r2 == null ? null : savedCart_r2.code))));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(savedCart_r2 == null ? null : savedCart_r2.code);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(18, 24, "savedCartList.dateSaved"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", \u0275\u0275pipeBind1(20, 26, \u0275\u0275pureFunction1(51, _c6, \u0275\u0275pureFunction1(49, _c5, savedCart_r2 == null ? null : savedCart_r2.code))));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(22, 28, savedCart_r2 == null ? null : savedCart_r2.saveTime, "longDate"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(26, 31, "savedCartList.quantity"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", \u0275\u0275pipeBind1(28, 33, \u0275\u0275pureFunction1(55, _c6, \u0275\u0275pureFunction1(53, _c5, savedCart_r2 == null ? null : savedCart_r2.code))));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", savedCart_r2 == null ? null : savedCart_r2.totalUnitCount, "");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(33, 35, "savedCartList.total"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", \u0275\u0275pipeBind1(35, 37, \u0275\u0275pureFunction1(59, _c6, \u0275\u0275pureFunction1(57, _c5, savedCart_r2 == null ? null : savedCart_r2.code))));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", savedCart_r2 == null ? null : savedCart_r2.totalPrice == null ? null : savedCart_r2.totalPrice.formattedValue, "");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(42, 39, "savedCartList.makeCartActive"), " ");
  }
}
function SavedCartListComponent_ng_container_0_ng_container_1_ng_container_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "table", 7)(2, "thead", 8)(3, "th", 9);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "cxTranslate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "th", 9);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "cxTranslate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "th", 9);
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "cxTranslate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "th", 10);
    \u0275\u0275text(13);
    \u0275\u0275pipe(14, "cxTranslate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "th", 11);
    \u0275\u0275text(16);
    \u0275\u0275pipe(17, "cxTranslate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "th", 9);
    \u0275\u0275text(19);
    \u0275\u0275pipe(20, "cxTranslate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "tbody");
    \u0275\u0275template(22, SavedCartListComponent_ng_container_0_ng_container_1_ng_container_7_tr_22_Template, 43, 61, "tr", 12);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const savedCarts_r4 = \u0275\u0275nextContext(2).ngIf;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(5, 7, "savedCartList.cartName"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(8, 9, "savedCartList.cartId"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(11, 11, "savedCartList.dateSaved"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(14, 13, "savedCartList.quantity"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(17, 15, "savedCartList.total"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(20, 17, "savedCartList.actions"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", savedCarts_r4);
  }
}
function SavedCartListComponent_ng_container_0_ng_container_1_ng_template_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 23)(1, "div", 24)(2, "div");
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "cxTranslate");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 1, "savedCartList.notFound"));
  }
}
function SavedCartListComponent_ng_container_0_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275element(1, "div", 5);
    \u0275\u0275pipe(2, "cxTranslate");
    \u0275\u0275elementStart(3, "div", 6)(4, "h2");
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "cxTranslate");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(7, SavedCartListComponent_ng_container_0_ng_container_1_ng_container_7_Template, 23, 19, "ng-container", 4)(8, SavedCartListComponent_ng_container_0_ng_container_1_ng_template_8_Template, 5, 3, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const noSavedCarts_r5 = \u0275\u0275reference(9);
    const savedCarts_r4 = \u0275\u0275nextContext().ngIf;
    \u0275\u0275advance();
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(2, 4, "common.loaded"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(6, 6, "savedCartList.savedCarts", \u0275\u0275pureFunction1(9, _c4, savedCarts_r4.length)), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", (savedCarts_r4 == null ? null : savedCarts_r4.length) > 0)("ngIfElse", noSavedCarts_r5);
  }
}
function SavedCartListComponent_ng_container_0_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 25);
    \u0275\u0275element(1, "cx-spinner");
    \u0275\u0275elementEnd();
  }
}
function SavedCartListComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, SavedCartListComponent_ng_container_0_ng_container_1_Template, 10, 11, "ng-container", 4);
    \u0275\u0275pipe(2, "async");
    \u0275\u0275template(3, SavedCartListComponent_ng_container_0_ng_template_3_Template, 2, 0, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const loading_r6 = \u0275\u0275reference(4);
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !\u0275\u0275pipeBind1(2, 2, ctx_r2.isLoading$))("ngIfElse", loading_r6);
  }
}
var _c7 = (a0) => ({
  name: a0
});
function SavedCartFormDialogComponent_ng_container_0_ng_container_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "cxTranslate");
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "savedCartDialog.editSavedCart"), " ");
  }
}
function SavedCartFormDialogComponent_ng_container_0_ng_container_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "cxTranslate");
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "savedCartDialog.deleteSavedCart"), " ");
  }
}
function SavedCartFormDialogComponent_ng_container_0_ng_container_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "cxTranslate");
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "savedCartDialog.saveForLater"), " ");
  }
}
function SavedCartFormDialogComponent_ng_container_0_ng_container_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "cxTranslate");
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "savedCartDialog.restoreSavedCart"), " ");
  }
}
function SavedCartFormDialogComponent_ng_container_0_ng_container_16_ng_container_35_div_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 25)(1, "label")(2, "span", 26);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "cxTranslate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(5, "input", 27);
    \u0275\u0275pipe(6, "cxTranslate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_7_0;
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 3, "savedCartDialog.nameOfCloneCart"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275propertyInterpolate("placeholder", \u0275\u0275pipeBind2(6, 5, "savedCartDialog.defaultCloneCartName", \u0275\u0275pureFunction1(8, _c7, (tmp_7_0 = ctx_r1.form.get("name")) == null ? null : tmp_7_0.value)));
    \u0275\u0275property("maxLength", ctx_r1.nameMaxLength);
  }
}
function SavedCartFormDialogComponent_ng_container_0_ng_container_16_ng_container_35_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 21)(2, "input", 22);
    \u0275\u0275listener("change", function SavedCartFormDialogComponent_ng_container_0_ng_container_16_ng_container_35_Template_input_change_2_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.toggleIsCloneSavedCart());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "label", 23);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "cxTranslate");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(6, SavedCartFormDialogComponent_ng_container_0_ng_container_16_ng_container_35_div_6_Template, 7, 10, "div", 24);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275property("checked", ctx_r1.isCloneSavedCart);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 3, "savedCartDialog.keepCopySavedCart"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.isCloneSavedCart);
  }
}
function SavedCartFormDialogComponent_ng_container_0_ng_container_16_ng_container_41_button_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 29);
    \u0275\u0275pipe(1, "async");
    \u0275\u0275pipe(2, "cxTranslate");
    \u0275\u0275listener("click", function SavedCartFormDialogComponent_ng_container_0_ng_container_16_ng_container_41_button_1_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.deleteCart(ctx_r1.cart.code));
    });
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "cxTranslate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275property("disabled", \u0275\u0275pipeBind1(1, 3, ctx_r1.isDisableDeleteButton$));
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(2, 5, "common.delete"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 7, "savedCartDialog.delete"), " ");
  }
}
function SavedCartFormDialogComponent_ng_container_0_ng_container_16_ng_container_41_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, SavedCartFormDialogComponent_ng_container_0_ng_container_16_ng_container_41_button_1_Template, 5, 9, "button", 28);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.cart.code);
  }
}
function SavedCartFormDialogComponent_ng_container_0_ng_container_16_ng_template_42_button_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 29);
    \u0275\u0275pipe(1, "async");
    \u0275\u0275pipe(2, "cxTranslate");
    \u0275\u0275listener("click", function SavedCartFormDialogComponent_ng_container_0_ng_container_16_ng_template_42_button_0_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.restoreSavedCart(ctx_r1.cart.code));
    });
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "cxTranslate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275property("disabled", \u0275\u0275pipeBind1(1, 3, ctx_r1.isDisableRestoreButton$));
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(2, 5, "common.restore"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 7, "savedCartDialog.restore"), " ");
  }
}
function SavedCartFormDialogComponent_ng_container_0_ng_container_16_ng_template_42_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, SavedCartFormDialogComponent_ng_container_0_ng_container_16_ng_template_42_button_0_Template, 5, 9, "button", 28);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("ngIf", ctx_r1.cart.code);
  }
}
function SavedCartFormDialogComponent_ng_container_0_ng_container_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "p", 14);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "cxTranslate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 15)(5, "div", 16)(6, "div", 17);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "cxTranslate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 18);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div", 16)(12, "div", 17);
    \u0275\u0275text(13);
    \u0275\u0275pipe(14, "cxTranslate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "div", 18);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "div", 16)(18, "div", 17);
    \u0275\u0275text(19);
    \u0275\u0275pipe(20, "cxTranslate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "div", 18);
    \u0275\u0275text(22);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "div", 16)(24, "div", 17);
    \u0275\u0275text(25);
    \u0275\u0275pipe(26, "cxTranslate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "div", 18);
    \u0275\u0275text(28);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(29, "div", 16)(30, "div", 17);
    \u0275\u0275text(31);
    \u0275\u0275pipe(32, "cxTranslate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "div", 18);
    \u0275\u0275text(34);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(35, SavedCartFormDialogComponent_ng_container_0_ng_container_16_ng_container_35_Template, 7, 5, "ng-container", 2);
    \u0275\u0275elementStart(36, "div", 19)(37, "button", 20);
    \u0275\u0275pipe(38, "cxTranslate");
    \u0275\u0275listener("click", function SavedCartFormDialogComponent_ng_container_0_ng_container_16_Template_button_click_37_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.close("Close Save Cart Dialog"));
    });
    \u0275\u0275text(39);
    \u0275\u0275pipe(40, "cxTranslate");
    \u0275\u0275elementEnd();
    \u0275\u0275template(41, SavedCartFormDialogComponent_ng_container_0_ng_container_16_ng_container_41_Template, 2, 1, "ng-container", 13)(42, SavedCartFormDialogComponent_ng_container_0_ng_container_16_ng_template_42_Template, 1, 1, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const isRestoreSavedCart_r7 = \u0275\u0275reference(43);
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 16, ctx_r1.layoutOption === ctx_r1.savedCartFormType.DELETE ? "savedCartDialog.followingCartDelete" : "savedCartDialog.followingCartRestore"), " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(8, 18, "savedCartDialog.name"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r1.cart == null ? null : ctx_r1.cart.name, " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(14, 20, "savedCartDialog.id"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r1.cart == null ? null : ctx_r1.cart.code, " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(20, 22, "savedCartDialog.description"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r1.cart == null ? null : ctx_r1.cart.description, " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(26, 24, "savedCartDialog.quantity"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r1.cart == null ? null : ctx_r1.cart.totalUnitCount, " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(32, 26, "savedCartDialog.total"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r1.cart == null ? null : ctx_r1.cart.totalPriceWithTax == null ? null : ctx_r1.cart.totalPriceWithTax.formattedValue, " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.layoutOption === ctx_r1.savedCartFormType.RESTORE);
    \u0275\u0275advance(2);
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(38, 28, "common.close"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(40, 30, "savedCartDialog.cancel"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.layoutOption === ctx_r1.savedCartFormType.DELETE)("ngIfElse", isRestoreSavedCart_r7);
  }
}
function SavedCartFormDialogComponent_ng_container_0_ng_template_17_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "p", 14);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "cxTranslate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 1, "savedCartDialog.itemsSavedForLater"), " ");
  }
}
function SavedCartFormDialogComponent_ng_container_0_ng_template_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275template(0, SavedCartFormDialogComponent_ng_container_0_ng_template_17_ng_container_0_Template, 4, 3, "ng-container", 2);
    \u0275\u0275elementStart(1, "div", 15);
    \u0275\u0275elementContainerStart(2);
    \u0275\u0275elementStart(3, "label")(4, "span", 30);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "cxTranslate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(7, "input", 31)(8, "cx-form-errors", 32);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 15)(10, "label")(11, "span", 30);
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "cxTranslate");
    \u0275\u0275elementStart(14, "span", 33);
    \u0275\u0275text(15);
    \u0275\u0275pipe(16, "cxTranslate");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(17, "textarea", 34)(18, "cx-form-errors", 32);
    \u0275\u0275elementStart(19, "p", 35);
    \u0275\u0275text(20);
    \u0275\u0275pipe(21, "cxTranslate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(22, "div", 19)(23, "button", 36);
    \u0275\u0275pipe(24, "async");
    \u0275\u0275pipe(25, "cxTranslate");
    \u0275\u0275listener("click", function SavedCartFormDialogComponent_ng_container_0_ng_template_17_Template_button_click_23_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.close("Close Save Cart Dialog"));
    });
    \u0275\u0275text(26);
    \u0275\u0275pipe(27, "cxTranslate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "button", 37);
    \u0275\u0275pipe(29, "async");
    \u0275\u0275pipe(30, "cxTranslate");
    \u0275\u0275listener("click", function SavedCartFormDialogComponent_ng_container_0_ng_template_17_Template_button_click_28_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.saveOrEditCart(ctx_r1.cart == null ? null : ctx_r1.cart.code));
    });
    \u0275\u0275text(31);
    \u0275\u0275pipe(32, "cxTranslate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngIf", ctx_r1.layoutOption === ctx_r1.savedCartFormType.SAVE);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 15, "savedCartDialog.savedCartName"));
    \u0275\u0275advance(2);
    \u0275\u0275property("maxLength", ctx_r1.nameMaxLength);
    \u0275\u0275advance();
    \u0275\u0275property("control", ctx_r1.form.get("name"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(13, 17, "savedCartDialog.savedCartDescription"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" (", \u0275\u0275pipeBind1(16, 19, "savedCartDialog.optional"), ") ");
    \u0275\u0275advance(2);
    \u0275\u0275property("maxLength", ctx_r1.descriptionMaxLength);
    \u0275\u0275advance();
    \u0275\u0275property("control", ctx_r1.form.get("description"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(21, 21, "savedCartDialog.charactersLeft", \u0275\u0275pureFunction1(36, _c4, ctx_r1.descriptionsCharacterLeft)), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("disabled", \u0275\u0275pipeBind1(24, 24, ctx_r1.isLoading$));
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(25, 26, "common.close"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(27, 28, "savedCartDialog.cancel"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", \u0275\u0275pipeBind1(29, 30, ctx_r1.isLoading$));
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(30, 32, "common.save"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(32, 34, "savedCartDialog.save"), " ");
  }
}
function SavedCartFormDialogComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 3);
    \u0275\u0275listener("esc", function SavedCartFormDialogComponent_ng_container_0_Template_div_esc_1_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.close("Escape clicked"));
    });
    \u0275\u0275elementStart(2, "form", 4)(3, "div", 5);
    \u0275\u0275elementContainerStart(4, 6);
    \u0275\u0275elementStart(5, "div", 7);
    \u0275\u0275template(6, SavedCartFormDialogComponent_ng_container_0_ng_container_6_Template, 3, 3, "ng-container", 8)(7, SavedCartFormDialogComponent_ng_container_0_ng_container_7_Template, 3, 3, "ng-container", 8)(8, SavedCartFormDialogComponent_ng_container_0_ng_container_8_Template, 3, 3, "ng-container", 8)(9, SavedCartFormDialogComponent_ng_container_0_ng_container_9_Template, 3, 3, "ng-container", 8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementStart(10, "button", 9);
    \u0275\u0275pipe(11, "async");
    \u0275\u0275pipe(12, "cxTranslate");
    \u0275\u0275listener("click", function SavedCartFormDialogComponent_ng_container_0_Template_button_click_10_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.close("Close Save Cart Dialog"));
    });
    \u0275\u0275elementStart(13, "span", 10);
    \u0275\u0275element(14, "cx-icon", 11);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(15, "div", 12);
    \u0275\u0275template(16, SavedCartFormDialogComponent_ng_container_0_ng_container_16_Template, 44, 32, "ng-container", 13)(17, SavedCartFormDialogComponent_ng_container_0_ng_template_17_Template, 33, 38, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const saveAndEditCart_r9 = \u0275\u0275reference(18);
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("cxFocus", ctx_r1.focusConfig);
    \u0275\u0275advance();
    \u0275\u0275property("formGroup", ctx_r1.form);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngSwitch", ctx_r1.layoutOption);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngSwitchCase", ctx_r1.savedCartFormType.EDIT);
    \u0275\u0275advance();
    \u0275\u0275property("ngSwitchCase", ctx_r1.savedCartFormType.DELETE);
    \u0275\u0275advance();
    \u0275\u0275property("ngSwitchCase", ctx_r1.savedCartFormType.SAVE);
    \u0275\u0275advance();
    \u0275\u0275property("ngSwitchCase", ctx_r1.savedCartFormType.RESTORE);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", \u0275\u0275pipeBind1(11, 12, ctx_r1.isLoading$));
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(12, 14, "common.close"));
    \u0275\u0275advance(4);
    \u0275\u0275property("type", ctx_r1.iconTypes.CLOSE);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.layoutOption === ctx_r1.savedCartFormType.DELETE || ctx_r1.layoutOption === ctx_r1.savedCartFormType.RESTORE)("ngIfElse", saveAndEditCart_r9);
  }
}
var _AddToSavedCartComponent = class _AddToSavedCartComponent {
  constructor(activeCartFacade, authService, routingService, vcr, launchDialogService) {
    this.activeCartFacade = activeCartFacade;
    this.authService = authService;
    this.routingService = routingService;
    this.vcr = vcr;
    this.launchDialogService = launchDialogService;
    this.subscription = new Subscription();
    this.loggedIn = false;
  }
  ngOnInit() {
    this.cart$ = combineLatest([this.activeCartFacade.getActive(), this.authService.isUserLoggedIn()]).pipe(tap(([_, loggedIn]) => this.loggedIn = loggedIn), map(([activeCart]) => activeCart));
    this.disableSaveCartForLater$ = this.cart$.pipe(map((cart) => !cart.entries?.length));
  }
  saveCart(cart) {
    this.subscription.add(this.disableSaveCartForLater$.subscribe((isDisabled) => {
      if (isDisabled) {
        return;
      }
      if (this.loggedIn) {
        this.openDialog(cart);
      } else {
        this.routingService.go({
          cxRoute: "login"
        });
      }
    }));
  }
  openDialog(cart) {
    const dialog = this.launchDialogService.openDialog("SAVED_CART", this.element, this.vcr, {
      cart,
      layoutOption: "save"
    });
    if (dialog) {
      this.subscription.add(dialog.pipe(take(1)).subscribe());
    }
  }
  ngOnDestroy() {
    this.subscription?.unsubscribe();
  }
};
_AddToSavedCartComponent.\u0275fac = function AddToSavedCartComponent_Factory(t) {
  return new (t || _AddToSavedCartComponent)(\u0275\u0275directiveInject(ActiveCartFacade), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(RoutingService), \u0275\u0275directiveInject(ViewContainerRef), \u0275\u0275directiveInject(LaunchDialogService));
};
_AddToSavedCartComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
  type: _AddToSavedCartComponent,
  selectors: [["cx-add-to-saved-cart"]],
  viewQuery: function AddToSavedCartComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(_c0, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.element = _t.first);
    }
  },
  decls: 2,
  vars: 3,
  consts: [["element", ""], [4, "ngIf"], [1, "cx-add-to-saved-cart-container"], ["cxAutoFocus", "", 1, "link", "cx-action-link", 3, "routerLink"], ["tabindex", "0", "cxAutoFocus", "", 1, "link", "cx-action-link", 3, "click"]],
  template: function AddToSavedCartComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275template(0, AddToSavedCartComponent_ng_container_0_Template, 13, 14, "ng-container", 1);
      \u0275\u0275pipe(1, "async");
    }
    if (rf & 2) {
      \u0275\u0275property("ngIf", \u0275\u0275pipeBind1(1, 1, ctx.cart$));
    }
  },
  dependencies: [NgIf, RouterLink, AsyncPipe, TranslatePipe, UrlPipe],
  encapsulation: 2,
  changeDetection: 0
});
var AddToSavedCartComponent = _AddToSavedCartComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AddToSavedCartComponent, [{
    type: Component,
    args: [{
      selector: "cx-add-to-saved-cart",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: `<ng-container *ngIf="cart$ | async as cart">
  <div class="cx-add-to-saved-cart-container">
    <a
      class="link cx-action-link"
      [routerLink]="
        {
          cxRoute: 'savedCarts'
        } | cxUrl
      "
      cxAutoFocus
    >
      <span>{{ 'addToSavedCart.savedCarts' | cxTranslate }}</span>
    </a>
    <a
      #element
      tabindex="0"
      class="link cx-action-link"
      [class.disabled]="disableSaveCartForLater$ | async"
      (click)="saveCart(cart)"
      cxAutoFocus
    >
      <span>{{ 'addToSavedCart.saveCartForLater' | cxTranslate }}</span>
    </a>
  </div>
</ng-container>
`
    }]
  }], () => [{
    type: ActiveCartFacade
  }, {
    type: AuthService
  }, {
    type: RoutingService
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
var _AddToSavedCartModule = class _AddToSavedCartModule {
};
_AddToSavedCartModule.\u0275fac = function AddToSavedCartModule_Factory(t) {
  return new (t || _AddToSavedCartModule)();
};
_AddToSavedCartModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
  type: _AddToSavedCartModule
});
_AddToSavedCartModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
  providers: [provideDefaultConfig({
    cmsComponents: {
      AddToSavedCartsComponent: {
        component: AddToSavedCartComponent
      }
    }
  })],
  imports: [CommonModule, RouterModule, I18nModule, UrlModule]
});
var AddToSavedCartModule = _AddToSavedCartModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AddToSavedCartModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, RouterModule, I18nModule, UrlModule],
      providers: [provideDefaultConfig({
        cmsComponents: {
          AddToSavedCartsComponent: {
            component: AddToSavedCartComponent
          }
        }
      })],
      exports: [AddToSavedCartComponent],
      declarations: [AddToSavedCartComponent]
    }]
  }], null, null);
})();
var _SavedCartDetailsService = class _SavedCartDetailsService {
  constructor(routingService, savedCartService) {
    this.routingService = routingService;
    this.savedCartService = savedCartService;
    this.savedCartId$ = this.routingService.getRouterState().pipe(map((routingData) => routingData.state.params.savedCartId), distinctUntilChanged());
    this.savedCart$ = this.savedCartId$.pipe(filter((cartId) => Boolean(cartId)), tap((savedCartId) => this.savedCartService.loadSavedCart(savedCartId)), switchMap((savedCartId) => this.savedCartService.get(savedCartId)), shareReplay({
      bufferSize: 1,
      refCount: true
    }));
  }
  getSavedCartId() {
    return this.savedCartId$;
  }
  getCartDetails() {
    return this.savedCart$;
  }
};
_SavedCartDetailsService.\u0275fac = function SavedCartDetailsService_Factory(t) {
  return new (t || _SavedCartDetailsService)(\u0275\u0275inject(RoutingService), \u0275\u0275inject(SavedCartFacade));
};
_SavedCartDetailsService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
  token: _SavedCartDetailsService,
  factory: _SavedCartDetailsService.\u0275fac,
  providedIn: "root"
});
var SavedCartDetailsService = _SavedCartDetailsService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SavedCartDetailsService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: RoutingService
  }, {
    type: SavedCartFacade
  }], null);
})();
var _SavedCartDetailsActionComponent = class _SavedCartDetailsActionComponent {
  constructor(savedCartDetailsService, vcr, launchDialogService) {
    this.savedCartDetailsService = savedCartDetailsService;
    this.vcr = vcr;
    this.launchDialogService = launchDialogService;
    this.subscription = new Subscription();
    this.savedCartFormType = SavedCartFormType;
    this.savedCart$ = this.savedCartDetailsService.getCartDetails();
  }
  openDialog(cart, type) {
    const dialog = this.launchDialogService.openDialog("SAVED_CART", this.element, this.vcr, {
      cart,
      layoutOption: type
    });
    if (dialog) {
      this.subscription.add(dialog.pipe(take(1)).subscribe());
    }
  }
  ngOnDestroy() {
    this.subscription?.unsubscribe();
  }
};
_SavedCartDetailsActionComponent.\u0275fac = function SavedCartDetailsActionComponent_Factory(t) {
  return new (t || _SavedCartDetailsActionComponent)(\u0275\u0275directiveInject(SavedCartDetailsService), \u0275\u0275directiveInject(ViewContainerRef), \u0275\u0275directiveInject(LaunchDialogService));
};
_SavedCartDetailsActionComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
  type: _SavedCartDetailsActionComponent,
  selectors: [["cx-saved-cart-details-action"]],
  viewQuery: function SavedCartDetailsActionComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(_c0, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.element = _t.first);
    }
  },
  decls: 2,
  vars: 3,
  consts: [["element", ""], [4, "ngIf"], [1, "cx-saved-cart-restore-btns", "row"], [1, "col-xs-12", "col-md-5", "col-lg-4"], [1, "btn", "btn-block", "btn-secondary", 3, "click"], [1, "btn", "btn-block", "btn-primary", 3, "click"]],
  template: function SavedCartDetailsActionComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275template(0, SavedCartDetailsActionComponent_ng_container_0_Template, 12, 6, "ng-container", 1);
      \u0275\u0275pipe(1, "async");
    }
    if (rf & 2) {
      \u0275\u0275property("ngIf", \u0275\u0275pipeBind1(1, 1, ctx.savedCart$));
    }
  },
  dependencies: [NgIf, AsyncPipe, TranslatePipe],
  encapsulation: 2
});
var SavedCartDetailsActionComponent = _SavedCartDetailsActionComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SavedCartDetailsActionComponent, [{
    type: Component,
    args: [{
      selector: "cx-saved-cart-details-action",
      template: `<ng-container *ngIf="savedCart$ | async as cart">
  <div class="cx-saved-cart-restore-btns row">
    <div class="col-xs-12 col-md-5 col-lg-4">
      <button
        #element
        class="btn btn-block btn-secondary"
        (click)="openDialog(cart, savedCartFormType.DELETE)"
      >
        {{ 'savedCartDetails.deleteSavedCart' | cxTranslate }}
      </button>
    </div>
    <div class="col-xs-12 col-md-5 col-lg-4">
      <button
        #element
        class="btn btn-block btn-primary"
        (click)="openDialog(cart, savedCartFormType.RESTORE)"
      >
        {{ 'savedCartList.makeCartActive' | cxTranslate }}
      </button>
    </div>
  </div>
</ng-container>
`
    }]
  }], () => [{
    type: SavedCartDetailsService
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
var _SavedCartDetailsItemsComponent = class _SavedCartDetailsItemsComponent {
  constructor(savedCartDetailsService, savedCartService, eventSercvice, globalMessageService, routingService, translation) {
    this.savedCartDetailsService = savedCartDetailsService;
    this.savedCartService = savedCartService;
    this.eventSercvice = eventSercvice;
    this.globalMessageService = globalMessageService;
    this.routingService = routingService;
    this.translation = translation;
    this.subscription = new Subscription();
    this.CartOutlets = CartOutlets;
    this.CartType = CartType;
    this.CartLocation = PromotionLocation;
    this.cartLoaded$ = this.savedCartDetailsService.getSavedCartId().pipe(switchMap((cartId) => this.savedCartService.isStable(cartId)));
    this.savedCart$ = this.savedCartDetailsService.getCartDetails().pipe(tap((cart) => {
      if ((cart?.entries ?? []).length <= 0 && !!cart?.code) {
        this.savedCartService.deleteSavedCart(cart.code);
      }
    }));
  }
  ngOnInit() {
    this.subscription.add(this.eventSercvice.get(DeleteCartSuccessEvent).pipe(take(1), map(() => true)).subscribe((success) => this.onDeleteComplete(success)));
    this.buyItAgainTranslation$ = this.translation.translate("addToCart.addToActiveCart");
  }
  onDeleteComplete(success) {
    if (success) {
      this.routingService.go({
        cxRoute: "savedCarts"
      });
      this.globalMessageService.add({
        key: "savedCartDialog.deleteCartSuccess"
      }, GlobalMessageType.MSG_TYPE_CONFIRMATION);
    }
  }
  ngOnDestroy() {
    this.subscription?.unsubscribe();
  }
};
_SavedCartDetailsItemsComponent.\u0275fac = function SavedCartDetailsItemsComponent_Factory(t) {
  return new (t || _SavedCartDetailsItemsComponent)(\u0275\u0275directiveInject(SavedCartDetailsService), \u0275\u0275directiveInject(SavedCartFacade), \u0275\u0275directiveInject(EventService), \u0275\u0275directiveInject(GlobalMessageService), \u0275\u0275directiveInject(RoutingService), \u0275\u0275directiveInject(TranslationService));
};
_SavedCartDetailsItemsComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
  type: _SavedCartDetailsItemsComponent,
  selectors: [["cx-saved-cart-details-items"]],
  decls: 6,
  vars: 3,
  consts: [["emptyCartItems", ""], ["addToCartBtn", ""], [4, "ngIf"], [4, "ngIf", "ngIfElse"], ["role", "status"], [1, "cart-details-wrapper"], [3, "cxOutlet", "cxOutletContext"], [1, "cx-spinner"], [3, "productCode", "product", "showQuantity", "options", "pickupStore"]],
  template: function SavedCartDetailsItemsComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275template(0, SavedCartDetailsItemsComponent_ng_container_0_Template, 2, 2, "ng-container", 2);
      \u0275\u0275pipe(1, "async");
      \u0275\u0275template(2, SavedCartDetailsItemsComponent_ng_template_2_Template, 2, 0, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(4, SavedCartDetailsItemsComponent_ng_template_4_Template, 1, 5, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
    }
    if (rf & 2) {
      \u0275\u0275property("ngIf", \u0275\u0275pipeBind1(1, 1, ctx.savedCart$));
    }
  },
  dependencies: [NgIf, SpinnerComponent, OutletDirective, AddToCartComponent, AsyncPipe, TranslatePipe],
  encapsulation: 2,
  changeDetection: 0
});
var SavedCartDetailsItemsComponent = _SavedCartDetailsItemsComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SavedCartDetailsItemsComponent, [{
    type: Component,
    args: [{
      selector: "cx-saved-cart-details-items",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: `<ng-container *ngIf="savedCart$ | async as cart">
  <ng-container *ngIf="cart?.entries?.length > 0; else emptyCartItems">
    <div role="status" [attr.aria-label]="'common.loaded' | cxTranslate"></div>
    <div class="cart-details-wrapper">
      <ng-template
        [cxOutlet]="CartOutlets.CART_ITEM_LIST"
        [cxOutletContext]="{
          cartId: cart.code,
          cartIsLoading: !(cartLoaded$ | async),
          items: cart.entries,
          promotionLocation: CartLocation.SavedCart,
          options: {
            displayAddToCart: true,
            addToCartString: (buyItAgainTranslation$ | async),
            optionalBtn: addToCartBtn,
            cartType: CartType.SELECTIVE
          }
        }"
      >
      </ng-template>
    </div>
  </ng-container>
</ng-container>
<ng-template #emptyCartItems>
  <div class="cx-spinner">
    <cx-spinner></cx-spinner>
  </div>
</ng-template>

<ng-template let-ctx #addToCartBtn>
  <cx-add-to-cart
    [productCode]="ctx.item.product?.code"
    [product]="ctx.item.product"
    [showQuantity]="false"
    [options]="ctx.options"
    [pickupStore]="ctx.item.deliveryPointOfService?.name"
  >
  </cx-add-to-cart>
</ng-template>
`
    }]
  }], () => [{
    type: SavedCartDetailsService
  }, {
    type: SavedCartFacade
  }, {
    type: EventService
  }, {
    type: GlobalMessageService
  }, {
    type: RoutingService
  }, {
    type: TranslationService
  }], null);
})();
var _SavedCartDetailsOverviewComponent = class _SavedCartDetailsOverviewComponent {
  constructor(savedCartDetailsService, translation, vcr, launchDialogService) {
    this.savedCartDetailsService = savedCartDetailsService;
    this.translation = translation;
    this.vcr = vcr;
    this.launchDialogService = launchDialogService;
    this.subscription = new Subscription();
    this.iconTypes = ICON_TYPE;
    this.savedCart$ = this.savedCartDetailsService.getCartDetails();
  }
  getCartName(cartName) {
    return this.translation.translate("savedCartDetails.cartName").pipe(filter(() => Boolean(cartName)), map((textTitle) => ({
      title: textTitle,
      text: [cartName]
    })));
  }
  getCartDescription(cartDescription) {
    return this.translation.translate("savedCartDetails.cartDescription").pipe(filter(() => Boolean(cartDescription)), map((textTitle) => ({
      title: textTitle,
      text: [cartDescription]
    })));
  }
  getCartId(cartId) {
    return this.translation.translate("savedCartDetails.cartId").pipe(filter(() => Boolean(cartId)), map((textTitle) => ({
      title: textTitle,
      text: [cartId]
    })));
  }
  getDateSaved(saveTime) {
    return this.translation.translate("savedCartDetails.dateSaved").pipe(filter(() => Boolean(saveTime)), map((textTitle) => {
      return {
        title: textTitle,
        text: [saveTime ?? ""]
      };
    }));
  }
  getCartItems(totalItems) {
    return this.translation.translate("savedCartDetails.items").pipe(filter(() => Boolean(totalItems)), map((textTitle) => ({
      title: textTitle,
      text: [totalItems.toString()]
    })));
  }
  getCartQuantity(totalUnitCount) {
    return this.translation.translate("savedCartDetails.quantity").pipe(filter(() => Boolean(totalUnitCount)), map((textTitle) => ({
      title: textTitle,
      text: [totalUnitCount.toString()]
    })));
  }
  getCartTotal(totalPriceWithTax) {
    return this.translation.translate("savedCartDetails.total").pipe(filter(() => Boolean(totalPriceWithTax)), map((textTitle) => ({
      title: textTitle,
      text: [totalPriceWithTax]
    })));
  }
  openDialog(cart) {
    const dialog = this.launchDialogService.openDialog("SAVED_CART", this.element, this.vcr, {
      cart,
      layoutOption: "edit"
    });
    if (dialog) {
      this.subscription.add(dialog.pipe(take(1)).subscribe());
    }
  }
  ngOnDestroy() {
    this.subscription?.unsubscribe();
  }
};
_SavedCartDetailsOverviewComponent.\u0275fac = function SavedCartDetailsOverviewComponent_Factory(t) {
  return new (t || _SavedCartDetailsOverviewComponent)(\u0275\u0275directiveInject(SavedCartDetailsService), \u0275\u0275directiveInject(TranslationService), \u0275\u0275directiveInject(ViewContainerRef), \u0275\u0275directiveInject(LaunchDialogService));
};
_SavedCartDetailsOverviewComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
  type: _SavedCartDetailsOverviewComponent,
  selectors: [["cx-saved-cart-details-overview"]],
  viewQuery: function SavedCartDetailsOverviewComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(_c0, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.element = _t.first);
    }
  },
  decls: 2,
  vars: 3,
  consts: [["element", ""], [4, "ngIf"], [1, "cx-cart-summary"], [1, "container"], [1, "cx-summary-card"], [1, "cx-edit-container"], [3, "content"], [1, "cx-edit-cart", 3, "click"], [3, "type"], [1, "cx-card-description"], [3, "content", "truncateText", "charactersLimit"]],
  template: function SavedCartDetailsOverviewComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275template(0, SavedCartDetailsOverviewComponent_ng_container_0_Template, 28, 29, "ng-container", 1);
      \u0275\u0275pipe(1, "async");
    }
    if (rf & 2) {
      \u0275\u0275property("ngIf", \u0275\u0275pipeBind1(1, 1, ctx.savedCart$));
    }
  },
  dependencies: [NgIf, CardComponent, IconComponent, AsyncPipe, TranslatePipe, CxDatePipe],
  encapsulation: 2
});
var SavedCartDetailsOverviewComponent = _SavedCartDetailsOverviewComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SavedCartDetailsOverviewComponent, [{
    type: Component,
    args: [{
      selector: "cx-saved-cart-details-overview",
      template: `<ng-container *ngIf="savedCart$ | async as cart">
  <div class="cx-cart-summary">
    <div class="container">
      <div class="cx-summary-card">
        <div class="cx-edit-container">
          <cx-card [content]="getCartName(cart?.name) | async"></cx-card>
          <button
            [attr.aria-label]="'savedCartDetails.editSavedCart' | cxTranslate"
            class="cx-edit-cart"
            #element
            (click)="openDialog(cart)"
          >
            <cx-icon [type]="iconTypes.PENCIL"></cx-icon>
          </button>
        </div>
        <div class="cx-card-description">
          <cx-card
            [content]="getCartDescription(cart?.description) | async"
            [truncateText]="true"
            [charactersLimit]="30"
          ></cx-card>
        </div>
      </div>
      <div class="cx-summary-card">
        <cx-card [content]="getCartId(cart?.code) | async"></cx-card>
      </div>
      <div class="cx-summary-card">
        <cx-card
          [content]="getDateSaved(cart?.saveTime | cxDate) | async"
        ></cx-card>
        <cx-card [content]="getCartItems(cart?.totalItems) | async"></cx-card>
      </div>
      <div class="cx-summary-card">
        <cx-card
          [content]="getCartQuantity(cart?.totalUnitCount) | async"
        ></cx-card>
        <cx-card
          [content]="
            getCartTotal(cart?.totalPriceWithTax?.formattedValue) | async
          "
        ></cx-card>
      </div>
    </div>
  </div>
</ng-container>
`
    }]
  }], () => [{
    type: SavedCartDetailsService
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
var _SavedCartDetailsModule = class _SavedCartDetailsModule {
};
_SavedCartDetailsModule.\u0275fac = function SavedCartDetailsModule_Factory(t) {
  return new (t || _SavedCartDetailsModule)();
};
_SavedCartDetailsModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
  type: _SavedCartDetailsModule
});
_SavedCartDetailsModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
  imports: [CommonModule, I18nModule, UrlModule, RouterModule, CardModule, MediaModule, IconModule, SpinnerModule, OutletModule, AddToCartModule, ConfigModule.withConfig({
    cmsComponents: {
      SavedCartDetailsOverviewComponent: {
        component: SavedCartDetailsOverviewComponent,
        guards: [AuthGuard]
      },
      SavedCartDetailsItemsComponent: {
        component: SavedCartDetailsItemsComponent,
        guards: [AuthGuard]
      },
      SavedCartDetailsActionComponent: {
        component: SavedCartDetailsActionComponent,
        guards: [AuthGuard]
      }
    }
  })]
});
var SavedCartDetailsModule = _SavedCartDetailsModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SavedCartDetailsModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, I18nModule, UrlModule, RouterModule, CardModule, MediaModule, IconModule, SpinnerModule, OutletModule, AddToCartModule, ConfigModule.withConfig({
        cmsComponents: {
          SavedCartDetailsOverviewComponent: {
            component: SavedCartDetailsOverviewComponent,
            guards: [AuthGuard]
          },
          SavedCartDetailsItemsComponent: {
            component: SavedCartDetailsItemsComponent,
            guards: [AuthGuard]
          },
          SavedCartDetailsActionComponent: {
            component: SavedCartDetailsActionComponent,
            guards: [AuthGuard]
          }
        }
      })],
      declarations: [SavedCartDetailsOverviewComponent, SavedCartDetailsActionComponent, SavedCartDetailsItemsComponent],
      exports: [SavedCartDetailsOverviewComponent, SavedCartDetailsActionComponent, SavedCartDetailsItemsComponent]
    }]
  }], null, null);
})();
var _SavedCartListComponent = class _SavedCartListComponent {
  constructor(routing, savedCartService, vcr, launchDialogService) {
    this.routing = routing;
    this.savedCartService = savedCartService;
    this.vcr = vcr;
    this.launchDialogService = launchDialogService;
    this.subscription = new Subscription();
    this.savedCarts$ = this.savedCartService.getList().pipe(map((lists) => lists.sort((a, b) => {
      const date1 = a.saveTime ? new Date(a.saveTime).getTime() : (/* @__PURE__ */ new Date()).getTime();
      const date2 = b.saveTime ? new Date(b.saveTime).getTime() : (/* @__PURE__ */ new Date()).getTime();
      return date2 - date1;
    })));
  }
  ngOnInit() {
    this.isLoading$ = this.savedCartService.getSavedCartListProcessLoading();
    this.savedCartService.loadSavedCarts();
  }
  goToSavedCartDetails(cart) {
    this.routing.go({
      cxRoute: "savedCartsDetails",
      params: {
        savedCartId: cart?.code
      }
    });
  }
  openDialog(event, cart) {
    const dialog = this.launchDialogService.openDialog("SAVED_CART", this.restoreButton, this.vcr, {
      cart,
      layoutOption: SavedCartFormType.RESTORE
    });
    if (dialog) {
      this.subscription.add(dialog.pipe(take(1)).subscribe());
    }
    event.stopPropagation();
  }
  ngOnDestroy() {
    this.savedCartService.clearSavedCarts();
    this.savedCartService.clearSaveCart();
    this.savedCartService.clearRestoreSavedCart();
    this.subscription?.unsubscribe();
  }
};
_SavedCartListComponent.\u0275fac = function SavedCartListComponent_Factory(t) {
  return new (t || _SavedCartListComponent)(\u0275\u0275directiveInject(RoutingService), \u0275\u0275directiveInject(SavedCartFacade), \u0275\u0275directiveInject(ViewContainerRef), \u0275\u0275directiveInject(LaunchDialogService));
};
_SavedCartListComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
  type: _SavedCartListComponent,
  selectors: [["cx-saved-cart-list"]],
  viewQuery: function SavedCartListComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(_c0, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.restoreButton = _t.first);
    }
  },
  decls: 2,
  vars: 3,
  consts: [["loading", ""], ["noSavedCarts", ""], ["element", ""], [4, "ngIf"], [4, "ngIf", "ngIfElse"], ["role", "status"], [1, "cx-saved-cart-list-header"], [1, "table", "cx-saved-cart-list-table"], [1, "cx-saved-cart-list-thead-mobile"], ["scope", "col"], ["scope", "col", 1, "cx-saved-cart-list-th-qty"], ["scope", "col", 1, "cx-saved-cart-list-th-total"], [3, "click", 4, "ngFor", "ngForOf"], [3, "click"], [1, "cx-saved-cart-list-cart-name"], [1, "cx-table-label-mobile", "cx-saved-cart-list-label"], [1, "cx-saved-cart-list-value", 3, "routerLink"], [1, "cx-saved-cart-list-cart-id"], [1, "cx-saved-cart-list-date-saved"], [1, "cx-saved-cart-list-quantity"], [1, "cx-saved-cart-list-total"], [1, "cx-saved-cart-list-make-cart-active"], [1, "btn", "btn-tertiary", "cx-saved-cart-make-active", 3, "click"], [1, "cx-saved-cart-list-no-saved-carts", "row"], [1, "col-sm-12", "col-md-6", "col-lg-4"], [1, "cx-spinner"]],
  template: function SavedCartListComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275template(0, SavedCartListComponent_ng_container_0_Template, 5, 4, "ng-container", 3);
      \u0275\u0275pipe(1, "async");
    }
    if (rf & 2) {
      \u0275\u0275property("ngIf", \u0275\u0275pipeBind1(1, 1, ctx.savedCarts$));
    }
  },
  dependencies: [NgForOf, NgIf, RouterLink, SpinnerComponent, AsyncPipe, UrlPipe, TranslatePipe, CxDatePipe],
  encapsulation: 2,
  changeDetection: 0
});
var SavedCartListComponent = _SavedCartListComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SavedCartListComponent, [{
    type: Component,
    args: [{
      selector: "cx-saved-cart-list",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: `<ng-container *ngIf="savedCarts$ | async as savedCarts">
  <ng-container *ngIf="!(isLoading$ | async); else loading">
    <div role="status" [attr.aria-label]="'common.loaded' | cxTranslate"></div>
    <div class="cx-saved-cart-list-header">
      <h2>
        {{
          'savedCartList.savedCarts' | cxTranslate: { count: savedCarts.length }
        }}
      </h2>
    </div>

    <ng-container *ngIf="savedCarts?.length > 0; else noSavedCarts">
      <table class="table cx-saved-cart-list-table">
        <thead class="cx-saved-cart-list-thead-mobile">
          <th scope="col">
            {{ 'savedCartList.cartName' | cxTranslate }}
          </th>
          <th scope="col">{{ 'savedCartList.cartId' | cxTranslate }}</th>
          <th scope="col">{{ 'savedCartList.dateSaved' | cxTranslate }}</th>
          <th scope="col" class="cx-saved-cart-list-th-qty">
            {{ 'savedCartList.quantity' | cxTranslate }}
          </th>
          <th scope="col" class="cx-saved-cart-list-th-total">
            {{ 'savedCartList.total' | cxTranslate }}
          </th>
          <th scope="col">
            {{ 'savedCartList.actions' | cxTranslate }}
          </th>
        </thead>
        <tbody>
          <tr
            *ngFor="let savedCart of savedCarts"
            (click)="goToSavedCartDetails(savedCart)"
          >
            <td class="cx-saved-cart-list-cart-name">
              <div class="cx-table-label-mobile cx-saved-cart-list-label">
                {{ 'savedCartList.cartName' | cxTranslate }}
              </div>
              <a
                [routerLink]="
                  {
                    cxRoute: 'savedCartsDetails',
                    params: { savedCartId: savedCart?.code }
                  } | cxUrl
                "
                class="cx-saved-cart-list-value"
              >
                {{ savedCart?.name }}</a
              >
            </td>
            <td class="cx-saved-cart-list-cart-id">
              <div class="cx-table-label-mobile cx-saved-cart-list-label">
                {{ 'savedCartList.cartId' | cxTranslate }}
              </div>
              <a
                [routerLink]="
                  {
                    cxRoute: 'savedCartsDetails',
                    params: { savedCartId: savedCart?.code }
                  } | cxUrl
                "
                class="cx-saved-cart-list-value"
                >{{ savedCart?.code }}</a
              >
            </td>
            <td class="cx-saved-cart-list-date-saved">
              <div class="cx-table-label-mobile cx-saved-cart-list-label">
                {{ 'savedCartList.dateSaved' | cxTranslate }}
              </div>
              <a
                [routerLink]="
                  {
                    cxRoute: 'savedCartsDetails',
                    params: { savedCartId: savedCart?.code }
                  } | cxUrl
                "
                class="cx-saved-cart-list-value"
                >{{ savedCart?.saveTime | cxDate: 'longDate' }}</a
              >
            </td>
            <td class="cx-saved-cart-list-quantity">
              <div class="cx-table-label-mobile cx-saved-cart-list-label">
                {{ 'savedCartList.quantity' | cxTranslate }}
              </div>
              <a
                [routerLink]="
                  {
                    cxRoute: 'savedCartsDetails',
                    params: { savedCartId: savedCart?.code }
                  } | cxUrl
                "
                class="cx-saved-cart-list-value"
              >
                {{ savedCart?.totalUnitCount }}</a
              >
            </td>
            <td class="cx-saved-cart-list-total">
              <div class="cx-table-label-mobile cx-saved-cart-list-label">
                {{ 'savedCartList.total' | cxTranslate }}
              </div>
              <a
                [routerLink]="
                  {
                    cxRoute: 'savedCartsDetails',
                    params: { savedCartId: savedCart?.code }
                  } | cxUrl
                "
                class="cx-saved-cart-list-value"
              >
                {{ savedCart?.totalPrice?.formattedValue }}</a
              >
            </td>
            <td class="cx-saved-cart-list-make-cart-active">
              <div class="cx-table-label-mobile cx-saved-cart-list-label"></div>
              <button
                #element
                class="btn btn-tertiary cx-saved-cart-make-active"
                (click)="openDialog($event, savedCart)"
              >
                {{ 'savedCartList.makeCartActive' | cxTranslate }}
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </ng-container>

    <!-- NO SAVED CART CONTAINER -->
    <ng-template #noSavedCarts>
      <div class="cx-saved-cart-list-no-saved-carts row">
        <div class="col-sm-12 col-md-6 col-lg-4">
          <div>{{ 'savedCartList.notFound' | cxTranslate }}</div>
        </div>
      </div>
    </ng-template>
  </ng-container>

  <ng-template #loading>
    <div class="cx-spinner">
      <cx-spinner></cx-spinner>
    </div>
  </ng-template>
</ng-container>
`
    }]
  }], () => [{
    type: RoutingService
  }, {
    type: SavedCartFacade
  }, {
    type: ViewContainerRef
  }, {
    type: LaunchDialogService
  }], {
    restoreButton: [{
      type: ViewChild,
      args: ["element"]
    }]
  });
})();
var _SavedCartListModule = class _SavedCartListModule {
};
_SavedCartListModule.\u0275fac = function SavedCartListModule_Factory(t) {
  return new (t || _SavedCartListModule)();
};
_SavedCartListModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
  type: _SavedCartListModule
});
_SavedCartListModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
  providers: [provideDefaultConfig({
    cmsComponents: {
      AccountSavedCartHistoryComponent: {
        component: SavedCartListComponent,
        guards: [AuthGuard]
      }
    }
  })],
  imports: [CommonModule, UrlModule, RouterModule, ListNavigationModule, I18nModule, SpinnerModule]
});
var SavedCartListModule = _SavedCartListModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SavedCartListModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, UrlModule, RouterModule, ListNavigationModule, I18nModule, SpinnerModule],
      providers: [provideDefaultConfig({
        cmsComponents: {
          AccountSavedCartHistoryComponent: {
            component: SavedCartListComponent,
            guards: [AuthGuard]
          }
        }
      })],
      declarations: [SavedCartListComponent],
      exports: [SavedCartListComponent]
    }]
  }], null, null);
})();
var _SavedCartOrderEntriesContext = class _SavedCartOrderEntriesContext {
  constructor(importInfoService, userIdService, multiCartService, savedCartService, routingService) {
    this.importInfoService = importInfoService;
    this.userIdService = userIdService;
    this.multiCartService = multiCartService;
    this.savedCartService = savedCartService;
    this.routingService = routingService;
    this.type = OrderEntriesSource.SAVED_CART;
    this.savedCartId$ = this.routingService.getRouterState().pipe(map((routingData) => routingData.state.params.savedCartId), distinctUntilChanged());
  }
  addEntries(products) {
    return this.add(products).pipe(switchMap((cartId) => this.importInfoService.getResults(cartId)), take(products.length));
  }
  getEntries() {
    return this.savedCartId$.pipe(switchMap((cartId) => this.savedCartService.get(cartId)), map((cart) => cart?.entries ?? []));
  }
  add(products) {
    return combineLatest([this.userIdService.takeUserId(), this.savedCartId$]).pipe(tap(([userId, cartId]) => this.multiCartService.addEntries(userId, cartId, products)), map(([_userId, cartId]) => cartId));
  }
};
_SavedCartOrderEntriesContext.\u0275fac = function SavedCartOrderEntriesContext_Factory(t) {
  return new (t || _SavedCartOrderEntriesContext)(\u0275\u0275inject(ProductImportInfoService), \u0275\u0275inject(UserIdService), \u0275\u0275inject(MultiCartFacade), \u0275\u0275inject(SavedCartFacade), \u0275\u0275inject(RoutingService));
};
_SavedCartOrderEntriesContext.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
  token: _SavedCartOrderEntriesContext,
  factory: _SavedCartOrderEntriesContext.\u0275fac,
  providedIn: "root"
});
var SavedCartOrderEntriesContext = _SavedCartOrderEntriesContext;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SavedCartOrderEntriesContext, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: ProductImportInfoService
  }, {
    type: UserIdService
  }, {
    type: MultiCartFacade
  }, {
    type: SavedCartFacade
  }, {
    type: RoutingService
  }], null);
})();
var _NewSavedCartOrderEntriesContext = class _NewSavedCartOrderEntriesContext {
  constructor(importInfoService, userIdService, multiCartService, savedCartService) {
    this.importInfoService = importInfoService;
    this.userIdService = userIdService;
    this.multiCartService = multiCartService;
    this.savedCartService = savedCartService;
    this.type = OrderEntriesSource.NEW_SAVED_CART;
  }
  addEntries(products, savedCartInfo) {
    return this.add(products, savedCartInfo).pipe(tap((cartId) => {
      this.importInfoService.getResults(cartId).pipe(take(products.length), every((productInfo) => productInfo.statusCode === ProductImportStatus.UNKNOWN_IDENTIFIER || productInfo.statusCode === ProductImportStatus.UNKNOWN_ERROR)).subscribe((isInvalid) => {
        if (isInvalid) {
          this.savedCartService.deleteSavedCart(cartId);
        }
      });
    }), switchMap((cartId) => this.importInfoService.getResults(cartId)), take(products.length));
  }
  add(products, savedCartInfo) {
    return this.userIdService.takeUserId().pipe(switchMap((userId) => this.multiCartService.createCart({
      userId,
      extraData: {
        active: false
      }
    }).pipe(map((cart) => cart.code), tap((cartId) => {
      this.savedCartService.saveCart({
        cartId,
        saveCartName: savedCartInfo?.name,
        saveCartDescription: savedCartInfo?.description
      });
      this.savedCartService.loadSavedCarts();
    }), observeOn(queueScheduler), debounce(() => this.savedCartService.getSaveCartProcessLoading().pipe(filter((loading) => !loading))), tap((cartId) => this.multiCartService.addEntries(userId, cartId, products)))));
  }
};
_NewSavedCartOrderEntriesContext.\u0275fac = function NewSavedCartOrderEntriesContext_Factory(t) {
  return new (t || _NewSavedCartOrderEntriesContext)(\u0275\u0275inject(ProductImportInfoService), \u0275\u0275inject(UserIdService), \u0275\u0275inject(MultiCartFacade), \u0275\u0275inject(SavedCartFacade));
};
_NewSavedCartOrderEntriesContext.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
  token: _NewSavedCartOrderEntriesContext,
  factory: _NewSavedCartOrderEntriesContext.\u0275fac,
  providedIn: "root"
});
var NewSavedCartOrderEntriesContext = _NewSavedCartOrderEntriesContext;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NewSavedCartOrderEntriesContext, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: ProductImportInfoService
  }, {
    type: UserIdService
  }, {
    type: MultiCartFacade
  }, {
    type: SavedCartFacade
  }], null);
})();
var _SavedCartFormDialogComponent = class _SavedCartFormDialogComponent {
  get descriptionsCharacterLeft() {
    return this.descriptionMaxLength - (this.form.get("description")?.value?.length || 0);
  }
  handleClick(event) {
    if (event.target.tagName === this.el.nativeElement.tagName) {
      this.close("Cross click");
    }
  }
  constructor(launchDialogService, el, savedCartService, eventService, routingService, globalMessageService) {
    this.launchDialogService = launchDialogService;
    this.el = el;
    this.savedCartService = savedCartService;
    this.eventService = eventService;
    this.routingService = routingService;
    this.globalMessageService = globalMessageService;
    this.subscription = new Subscription();
    this.savedCartFormType = SavedCartFormType;
    this.iconTypes = ICON_TYPE;
    this.descriptionMaxLength = 250;
    this.nameMaxLength = 50;
    this.isCloneSavedCart = false;
    this.focusConfig = {
      trap: true,
      block: true,
      autofocus: "button",
      focusOnEscape: true
    };
  }
  ngOnInit() {
    this.resetSavedCartStates();
    this.isLoading$ = this.savedCartService.getSaveCartProcessLoading();
    this.isDisableDeleteButton$ = merge(this.eventService.get(DeleteCartEvent).pipe(take(1), map(() => true)), this.eventService.get(DeleteCartFailEvent).pipe(take(1), map(() => false)));
    this.isDisableRestoreButton$ = combineLatest([this.savedCartService.getCloneSavedCartProcessLoading(), this.savedCartService.getRestoreSavedCartProcessLoading()]).pipe(map(([isCloneLoading, isRestoreLoading]) => isCloneLoading || isRestoreLoading));
    this.subscription.add(this.launchDialogService.data$.subscribe((data) => {
      this.cart = data.cart;
      this.layoutOption = data.layoutOption;
      this.build(this.cart);
    }));
    this.subscription.add(this.savedCartService.getSaveCartProcessSuccess().subscribe((success) => this.onComplete(success)));
    this.subscription.add(this.eventService.get(DeleteCartSuccessEvent).pipe(take(1), map(() => true)).subscribe((success) => this.onComplete(success)));
    this.subscription.add(this.savedCartService.getRestoreSavedCartProcessSuccess().subscribe((success) => this.onComplete(success)));
  }
  saveOrEditCart(cartId) {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      FormUtils.deepUpdateValueAndValidity(this.form);
    } else {
      const name = this.form.get("name")?.value;
      const description = this.form.get("description")?.value || "-";
      switch (this.layoutOption) {
        case SavedCartFormType.SAVE: {
          this.savedCartService.saveCart({
            cartId,
            saveCartName: name,
            saveCartDescription: description
          });
          break;
        }
        case SavedCartFormType.EDIT: {
          this.savedCartService.editSavedCart({
            cartId,
            saveCartName: name,
            saveCartDescription: description
          });
          break;
        }
      }
    }
  }
  deleteCart(cartId) {
    this.savedCartService.deleteSavedCart(cartId);
  }
  restoreSavedCart(cartId) {
    if (this.isCloneSavedCart) {
      this.savedCartService.cloneSavedCart(cartId, this.form.get("cloneName")?.value);
    } else {
      this.savedCartService.restoreSavedCart(cartId);
    }
  }
  close(reason) {
    this.launchDialogService.closeDialog(reason);
  }
  onComplete(success) {
    if (success) {
      switch (this.layoutOption) {
        case SavedCartFormType.DELETE: {
          this.routingService.go({
            cxRoute: "savedCarts"
          });
          this.globalMessageService.add({
            key: "savedCartDialog.deleteCartSuccess"
          }, GlobalMessageType.MSG_TYPE_CONFIRMATION);
          this.close("Successfully deleted a saved cart");
          break;
        }
        case SavedCartFormType.SAVE: {
          this.close("Successfully saved cart");
          this.savedCartService.clearSaveCart();
          this.globalMessageService.add({
            key: "savedCartCartPage.messages.cartSaved",
            params: {
              cartName: this.form.get("name")?.value || this.cart?.code
            }
          }, GlobalMessageType.MSG_TYPE_CONFIRMATION);
          break;
        }
        case SavedCartFormType.EDIT: {
          this.close("Successfully edited saved cart");
          this.savedCartService.clearSaveCart();
          this.globalMessageService.add({
            key: "savedCartDialog.editCartSuccess",
            params: {
              cartName: this.form.get("name")?.value || this.cart?.code
            }
          }, GlobalMessageType.MSG_TYPE_CONFIRMATION);
          break;
        }
        case SavedCartFormType.RESTORE: {
          this.close("Successfully restored saved cart");
          this.routingService.go({
            cxRoute: "savedCarts"
          });
          this.resetSavedCartStates();
          break;
        }
      }
    }
  }
  toggleIsCloneSavedCart() {
    return this.isCloneSavedCart = !this.isCloneSavedCart;
  }
  build(cart) {
    const form = new UntypedFormGroup({});
    form.setControl("name", new UntypedFormControl("", [Validators.required, Validators.maxLength(this.nameMaxLength)]));
    form.setControl("description", new UntypedFormControl("", [Validators.maxLength(this.descriptionMaxLength)]));
    form.setControl("isCloneSavedCart", new UntypedFormControl(""));
    form.setControl("cloneName", new UntypedFormControl(""));
    this.form = form;
    this.patchData(cart);
  }
  patchData(item) {
    this.form.patchValue(__spreadValues({}, item));
  }
  resetSavedCartStates() {
    this.savedCartService.clearCloneSavedCart();
    this.savedCartService.clearSaveCart();
    this.savedCartService.clearRestoreSavedCart();
  }
  ngOnDestroy() {
    this.subscription?.unsubscribe();
    this.close("close dialog");
  }
};
_SavedCartFormDialogComponent.\u0275fac = function SavedCartFormDialogComponent_Factory(t) {
  return new (t || _SavedCartFormDialogComponent)(\u0275\u0275directiveInject(LaunchDialogService), \u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(SavedCartFacade), \u0275\u0275directiveInject(EventService), \u0275\u0275directiveInject(RoutingService), \u0275\u0275directiveInject(GlobalMessageService));
};
_SavedCartFormDialogComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
  type: _SavedCartFormDialogComponent,
  selectors: [["cx-saved-cart-form-dialog"]],
  hostBindings: function SavedCartFormDialogComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275listener("click", function SavedCartFormDialogComponent_click_HostBindingHandler($event) {
        return ctx.handleClick($event);
      });
    }
  },
  decls: 1,
  vars: 1,
  consts: [["saveAndEditCart", ""], ["isRestoreSavedCart", ""], [4, "ngIf"], [1, "cx-saved-cart-form-dialog", 3, "esc", "cxFocus"], [1, "cx-saved-cart-form-container", 3, "formGroup"], [1, "modal-header", "cx-saved-cart-form-header"], [3, "ngSwitch"], [1, "cx-saved-cart-form-title", "modal-title"], [4, "ngSwitchCase"], ["type", "button", 1, "cx-saved-cart-form-close", "close", 3, "click", "disabled"], ["aria-hidden", "true"], [3, "type"], [1, "cx-saved-cart-form-body"], [4, "ngIf", "ngIfElse"], [1, "cx-saved-cart-form-subtitle"], [1, "cx-saved-cart-form-row"], [1, "cx-saved-cart-values-container"], [1, "cx-saved-cart-label"], [1, "cx-saved-cart-value"], [1, "cx-saved-cart-form-footer"], ["type", "button", 1, "mr-2", "btn", "btn-secondary", 3, "click"], [1, "cx-copy-saved-cart-row", "form-check"], ["id", "cx-copy-saved-cart", "type", "checkbox", 1, "cx-copy-saved-cart-input", 3, "change", "checked"], ["for", "cx-copy-saved-cart", 1, "cx-copy-saved-cart-label"], ["class", "cx-copy-saved-cart-row", 4, "ngIf"], [1, "cx-copy-saved-cart-row"], [1, "label-content"], ["formControlName", "cloneName", "type", "text", 1, "form-control", 3, "maxLength", "placeholder"], ["class", "ml-2 btn btn-primary", "type", "button", 3, "disabled", "click", 4, "ngIf"], ["type", "button", 1, "ml-2", "btn", "btn-primary", 3, "click", "disabled"], [1, "cx-saved-carts-label", "label-content"], ["required", "true", "formControlName", "name", "required", "", "type", "text", 1, "form-control", 3, "maxLength"], [3, "control"], [1, "cx-saved-carts-label-optional"], ["formControlName", "description", "rows", "5", 1, "form-control", 3, "maxLength"], [1, "cx-saved-carts-input-hint"], ["type", "button", 1, "btn", "btn-secondary", 3, "click", "disabled"], ["type", "button", 1, "btn", "btn-primary", 3, "click", "disabled"]],
  template: function SavedCartFormDialogComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275template(0, SavedCartFormDialogComponent_ng_container_0_Template, 19, 16, "ng-container", 2);
    }
    if (rf & 2) {
      \u0275\u0275property("ngIf", ctx.cart);
    }
  },
  dependencies: [NgIf, NgSwitch, NgSwitchCase, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, RequiredValidator, FormGroupDirective, FormControlName, FormErrorsComponent, IconComponent, FocusDirective, AsyncPipe, TranslatePipe],
  encapsulation: 2,
  changeDetection: 0
});
var SavedCartFormDialogComponent = _SavedCartFormDialogComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SavedCartFormDialogComponent, [{
    type: Component,
    args: [{
      selector: "cx-saved-cart-form-dialog",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: `<ng-container *ngIf="cart">
  <div
    [cxFocus]="focusConfig"
    (esc)="close('Escape clicked')"
    class="cx-saved-cart-form-dialog"
  >
    <form [formGroup]="form" class="cx-saved-cart-form-container">
      <!-- Modal Header -->
      <div class="modal-header cx-saved-cart-form-header">
        <ng-container [ngSwitch]="layoutOption">
          <div class="cx-saved-cart-form-title modal-title">
            <ng-container *ngSwitchCase="savedCartFormType.EDIT">
              {{ 'savedCartDialog.editSavedCart' | cxTranslate }}
            </ng-container>
            <ng-container *ngSwitchCase="savedCartFormType.DELETE">
              {{ 'savedCartDialog.deleteSavedCart' | cxTranslate }}
            </ng-container>
            <ng-container *ngSwitchCase="savedCartFormType.SAVE">
              {{ 'savedCartDialog.saveForLater' | cxTranslate }}
            </ng-container>
            <ng-container *ngSwitchCase="savedCartFormType.RESTORE">
              {{ 'savedCartDialog.restoreSavedCart' | cxTranslate }}
            </ng-container>
          </div>
        </ng-container>

        <button
          (click)="close('Close Save Cart Dialog')"
          [disabled]="isLoading$ | async"
          [attr.aria-label]="'common.close' | cxTranslate"
          class="cx-saved-cart-form-close close"
          type="button"
        >
          <span aria-hidden="true">
            <cx-icon [type]="iconTypes.CLOSE"></cx-icon>
          </span>
        </button>
      </div>

      <!-- Modal Body -->
      <div class="cx-saved-cart-form-body">
        <!-- start DELETE and RESTORE form -->
        <ng-container
          *ngIf="
            layoutOption === savedCartFormType.DELETE ||
              layoutOption === savedCartFormType.RESTORE;
            else saveAndEditCart
          "
        >
          <p class="cx-saved-cart-form-subtitle">
            {{
              (layoutOption === savedCartFormType.DELETE
                ? 'savedCartDialog.followingCartDelete'
                : 'savedCartDialog.followingCartRestore'
              ) | cxTranslate
            }}
          </p>

          <div class="cx-saved-cart-form-row">
            <div class="cx-saved-cart-values-container">
              <div class="cx-saved-cart-label">
                {{ 'savedCartDialog.name' | cxTranslate }}
              </div>
              <div class="cx-saved-cart-value">
                {{ cart?.name }}
              </div>
            </div>

            <div class="cx-saved-cart-values-container">
              <div class="cx-saved-cart-label">
                {{ 'savedCartDialog.id' | cxTranslate }}
              </div>
              <div class="cx-saved-cart-value">
                {{ cart?.code }}
              </div>
            </div>

            <div class="cx-saved-cart-values-container">
              <div class="cx-saved-cart-label">
                {{ 'savedCartDialog.description' | cxTranslate }}
              </div>
              <div class="cx-saved-cart-value">
                {{ cart?.description }}
              </div>
            </div>

            <div class="cx-saved-cart-values-container">
              <div class="cx-saved-cart-label">
                {{ 'savedCartDialog.quantity' | cxTranslate }}
              </div>
              <div class="cx-saved-cart-value">
                {{ cart?.totalUnitCount }}
              </div>
            </div>

            <div class="cx-saved-cart-values-container">
              <div class="cx-saved-cart-label">
                {{ 'savedCartDialog.total' | cxTranslate }}
              </div>
              <div class="cx-saved-cart-value">
                {{ cart?.totalPriceWithTax?.formattedValue }}
              </div>
            </div>
          </div>

          <ng-container *ngIf="layoutOption === savedCartFormType.RESTORE">
            <div class="cx-copy-saved-cart-row form-check">
              <input
                id="cx-copy-saved-cart"
                type="checkbox"
                class="cx-copy-saved-cart-input"
                [checked]="isCloneSavedCart"
                (change)="toggleIsCloneSavedCart()"
              />
              <label
                for="cx-copy-saved-cart"
                class="cx-copy-saved-cart-label"
                >{{ 'savedCartDialog.keepCopySavedCart' | cxTranslate }}</label
              >
            </div>

            <div *ngIf="isCloneSavedCart" class="cx-copy-saved-cart-row">
              <label>
                <span class="label-content">
                  {{ 'savedCartDialog.nameOfCloneCart' | cxTranslate }}
                </span>

                <input
                  [maxLength]="nameMaxLength"
                  class="form-control"
                  formControlName="cloneName"
                  type="text"
                  placeholder="{{
                    'savedCartDialog.defaultCloneCartName'
                      | cxTranslate: { name: form.get('name')?.value }
                  }}"
                />
              </label>
            </div>
          </ng-container>

          <div class="cx-saved-cart-form-footer">
            <button
              (click)="close('Close Save Cart Dialog')"
              [attr.aria-label]="'common.close' | cxTranslate"
              class="mr-2 btn btn-secondary"
              type="button"
            >
              {{ 'savedCartDialog.cancel' | cxTranslate }}
            </button>

            <ng-container
              *ngIf="
                layoutOption === savedCartFormType.DELETE;
                else isRestoreSavedCart
              "
            >
              <button
                *ngIf="cart.code"
                (click)="deleteCart(cart.code)"
                [attr.aria-label]="'common.delete' | cxTranslate"
                [disabled]="isDisableDeleteButton$ | async"
                class="ml-2 btn btn-primary"
                type="button"
              >
                {{ 'savedCartDialog.delete' | cxTranslate }}
              </button>
            </ng-container>

            <ng-template #isRestoreSavedCart>
              <button
                *ngIf="cart.code"
                (click)="restoreSavedCart(cart.code)"
                [disabled]="isDisableRestoreButton$ | async"
                [attr.aria-label]="'common.restore' | cxTranslate"
                class="ml-2 btn btn-primary"
                type="button"
              >
                {{ 'savedCartDialog.restore' | cxTranslate }}
              </button>
            </ng-template>
          </div>
        </ng-container>
        <!-- end DELETE form -->

        <!-- start SAVE and EDIT form -->
        <ng-template #saveAndEditCart>
          <ng-container *ngIf="layoutOption === savedCartFormType.SAVE">
            <p class="cx-saved-cart-form-subtitle">
              {{ 'savedCartDialog.itemsSavedForLater' | cxTranslate }}
            </p>
          </ng-container>

          <div class="cx-saved-cart-form-row">
            <ng-container>
              <label>
                <span class="cx-saved-carts-label label-content">{{
                  'savedCartDialog.savedCartName' | cxTranslate
                }}</span>
                <input
                  required="true"
                  [maxLength]="nameMaxLength"
                  class="form-control"
                  formControlName="name"
                  required
                  type="text"
                />
                <cx-form-errors [control]="form.get('name')"></cx-form-errors>
              </label>
            </ng-container>
          </div>

          <div class="cx-saved-cart-form-row">
            <label>
              <span class="cx-saved-carts-label label-content"
                >{{ 'savedCartDialog.savedCartDescription' | cxTranslate }}
                <span class="cx-saved-carts-label-optional">
                  ({{ 'savedCartDialog.optional' | cxTranslate }})
                </span></span
              >
              <textarea
                [maxLength]="descriptionMaxLength"
                class="form-control"
                formControlName="description"
                rows="5"
              ></textarea>
              <cx-form-errors
                [control]="form.get('description')"
              ></cx-form-errors>

              <p class="cx-saved-carts-input-hint">
                {{
                  'savedCartDialog.charactersLeft'
                    | cxTranslate: { count: descriptionsCharacterLeft }
                }}
              </p>
            </label>
          </div>
          <div class="cx-saved-cart-form-footer">
            <button
              (click)="close('Close Save Cart Dialog')"
              [attr.aria-label]="'common.close' | cxTranslate"
              [disabled]="isLoading$ | async"
              class="btn btn-secondary"
              type="button"
            >
              {{ 'savedCartDialog.cancel' | cxTranslate }}
            </button>
            <button
              (click)="saveOrEditCart(cart?.code)"
              [attr.aria-label]="'common.save' | cxTranslate"
              [disabled]="isLoading$ | async"
              class="btn btn-primary"
              type="button"
            >
              {{ 'savedCartDialog.save' | cxTranslate }}
            </button>
          </div>
        </ng-template>
        <!-- end SAVE and EDIT form -->
      </div>
    </form>
  </div>
</ng-container>
`
    }]
  }], () => [{
    type: LaunchDialogService
  }, {
    type: ElementRef
  }, {
    type: SavedCartFacade
  }, {
    type: EventService
  }, {
    type: RoutingService
  }, {
    type: GlobalMessageService
  }], {
    handleClick: [{
      type: HostListener,
      args: ["click", ["$event"]]
    }]
  });
})();
var defaultSavedCartFormLayoutConfig = {
  launch: {
    SAVED_CART: {
      inline: true,
      component: SavedCartFormDialogComponent,
      dialogType: DIALOG_TYPE.DIALOG
    }
  }
};
var _SavedCartFormDialogModule = class _SavedCartFormDialogModule {
};
_SavedCartFormDialogModule.\u0275fac = function SavedCartFormDialogModule_Factory(t) {
  return new (t || _SavedCartFormDialogModule)();
};
_SavedCartFormDialogModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
  type: _SavedCartFormDialogModule
});
_SavedCartFormDialogModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
  imports: [CommonModule, FormsModule, ReactiveFormsModule, FormErrorsModule, I18nModule, IconModule, KeyboardFocusModule]
});
var SavedCartFormDialogModule = _SavedCartFormDialogModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SavedCartFormDialogModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, FormsModule, ReactiveFormsModule, FormErrorsModule, I18nModule, IconModule, KeyboardFocusModule],
      declarations: [SavedCartFormDialogComponent],
      exports: [SavedCartFormDialogComponent]
    }]
  }], null, null);
})();
var _SavedCartComponentsModule = class _SavedCartComponentsModule {
};
_SavedCartComponentsModule.\u0275fac = function SavedCartComponentsModule_Factory(t) {
  return new (t || _SavedCartComponentsModule)();
};
_SavedCartComponentsModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
  type: _SavedCartComponentsModule
});
_SavedCartComponentsModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
  providers: [{
    provide: SavedCartOrderEntriesContextToken,
    useExisting: SavedCartOrderEntriesContext
  }, {
    provide: NewSavedCartOrderEntriesContextToken,
    useExisting: NewSavedCartOrderEntriesContext
  }, provideDefaultConfig(defaultSavedCartFormLayoutConfig)],
  imports: [RouterModule, AddToSavedCartModule, SavedCartFormDialogModule, SavedCartListModule, SavedCartDetailsModule]
});
var SavedCartComponentsModule = _SavedCartComponentsModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SavedCartComponentsModule, [{
    type: NgModule,
    args: [{
      imports: [RouterModule, AddToSavedCartModule, SavedCartFormDialogModule, SavedCartListModule, SavedCartDetailsModule],
      providers: [{
        provide: SavedCartOrderEntriesContextToken,
        useExisting: SavedCartOrderEntriesContext
      }, {
        provide: NewSavedCartOrderEntriesContextToken,
        useExisting: NewSavedCartOrderEntriesContext
      }, provideDefaultConfig(defaultSavedCartFormLayoutConfig)]
    }]
  }], null, null);
})();

// node_modules/@spartacus/cart/fesm2022/spartacus-cart-saved-cart-core.mjs
var SavedCartAdapter = class {
};
var _SavedCartConnector = class _SavedCartConnector {
  constructor(adapter) {
    this.adapter = adapter;
  }
  get(userId, cartId) {
    return this.adapter.load(userId, cartId);
  }
  getList(userId) {
    return this.adapter.loadList(userId);
  }
  restoreSavedCart(userId, cartId) {
    return this.adapter.restoreSavedCart(userId, cartId);
  }
  cloneSavedCart(userId, cartId, saveCartName) {
    return this.adapter.cloneSavedCart(userId, cartId, saveCartName);
  }
};
_SavedCartConnector.\u0275fac = function SavedCartConnector_Factory(t) {
  return new (t || _SavedCartConnector)(\u0275\u0275inject(SavedCartAdapter));
};
_SavedCartConnector.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
  token: _SavedCartConnector,
  factory: _SavedCartConnector.\u0275fac
});
var SavedCartConnector = _SavedCartConnector;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SavedCartConnector, [{
    type: Injectable
  }], () => [{
    type: SavedCartAdapter
  }], null);
})();
var SAVED_CART_LIST_PROCESS_ID = "saved-cart-list";
var SAVED_CART_RESTORE_CART_PROCESS_ID = "saved-cart-restore-cart";
var SAVED_CART_SAVE_CART_PROCESS_ID = "saved-cart-save-cart";
var SAVED_CART_CLONE_CART_PROCESS_ID = "saved-cart-clone-cart";
var LOAD_SAVED_CART = "[Saved Cart] Load Saved Cart";
var LOAD_SAVED_CART_SUCCESS = "[Saved Cart] Load Saved Cart Success";
var LOAD_SAVED_CART_FAIL = "[Saved Cart] Load Saved Cart Fail";
var LOAD_SAVED_CARTS = "[Saved Cart] Load Saved Carts";
var LOAD_SAVED_CARTS_SUCCESS = "[Saved Cart] Load Saved Carts Success";
var LOAD_SAVED_CARTS_FAIL = "[Saved Cart] Load Saved Carts Fail";
var CLEAR_SAVED_CARTS = "[Saved Cart] Clear Saved Carts";
var RESTORE_SAVED_CART = "[Saved Cart] Restore Saved Cart";
var RESTORE_SAVED_CART_SUCCESS = "[Saved Cart] Restore Saved Cart Success";
var RESTORE_SAVED_CART_FAIL = "[Saved Cart] Restore Saved Cart Fail";
var CLEAR_RESTORE_SAVED_CART = "[Saved Cart] Clear Restore Saved Cart";
var SAVE_CART = "[Saved Cart] Save Cart";
var SAVE_CART_SUCCESS = "[Saved Cart] Save Cart Success";
var SAVE_CART_FAIL = "[Saved Cart] Save Cart Fail";
var CLEAR_SAVE_CART = "[Saved Cart] Clear Save Cart";
var EDIT_SAVED_CART = "[Saved Cart] Edit Saved Cart";
var EDIT_SAVED_CART_SUCCESS = "[Saved Cart] Edit Saved Cart Success";
var EDIT_SAVED_CART_FAIL = "[Saved Cart] Edit Saved Cart Fail";
var CLONE_SAVED_CART = "[Saved Cart] Clone Saved Cart";
var CLONE_SAVED_CART_SUCCESS = "[Saved Cart] Clone Saved Cart Success";
var CLONE_SAVED_CART_FAIL = "[Saved Cart] Clone Saved Cart Fail";
var CLEAR_CLONE_SAVED_CART = "[Saved Cart] Clear Clone Saved Cart";
var LoadSavedCart = class extends utilsGroup.EntityLoadAction {
  constructor(payload) {
    super(MULTI_CART_DATA, payload.cartId);
    this.payload = payload;
    this.type = LOAD_SAVED_CART;
  }
};
var LoadSavedCartSuccess = class extends utilsGroup.EntitySuccessAction {
  constructor(payload) {
    super(MULTI_CART_DATA, payload.cartId);
    this.payload = payload;
    this.type = LOAD_SAVED_CART_SUCCESS;
  }
};
var LoadSavedCartFail = class extends utilsGroup.EntityFailAction {
  constructor(payload) {
    super(MULTI_CART_DATA, payload.cartId, payload?.error);
    this.payload = payload;
    this.type = LOAD_SAVED_CART_FAIL;
  }
};
var LoadSavedCarts = class extends utilsGroup.EntityLoadAction {
  constructor(payload) {
    super(PROCESS_FEATURE, SAVED_CART_LIST_PROCESS_ID);
    this.payload = payload;
    this.type = LOAD_SAVED_CARTS;
  }
};
var LoadSavedCartsSuccess = class extends utilsGroup.EntitySuccessAction {
  constructor(payload) {
    super(PROCESS_FEATURE, SAVED_CART_LIST_PROCESS_ID);
    this.payload = payload;
    this.type = LOAD_SAVED_CARTS_SUCCESS;
  }
};
var LoadSavedCartsFail = class extends utilsGroup.EntityFailAction {
  constructor(payload) {
    super(PROCESS_FEATURE, SAVED_CART_LIST_PROCESS_ID, payload.error);
    this.payload = payload;
    this.type = LOAD_SAVED_CARTS_FAIL;
  }
};
var ClearSavedCarts = class extends utilsGroup.EntityLoaderResetAction {
  constructor() {
    super(PROCESS_FEATURE, SAVED_CART_LIST_PROCESS_ID);
    this.type = CLEAR_SAVED_CARTS;
  }
};
var RestoreSavedCart = class extends utilsGroup.EntityLoadAction {
  constructor(payload) {
    super(PROCESS_FEATURE, SAVED_CART_RESTORE_CART_PROCESS_ID);
    this.payload = payload;
    this.type = RESTORE_SAVED_CART;
  }
};
var RestoreSavedCartSuccess = class extends utilsGroup.EntitySuccessAction {
  constructor(payload) {
    super(PROCESS_FEATURE, SAVED_CART_RESTORE_CART_PROCESS_ID);
    this.payload = payload;
    this.type = RESTORE_SAVED_CART_SUCCESS;
  }
};
var RestoreSavedCartFail = class extends utilsGroup.EntityFailAction {
  constructor(payload) {
    super(PROCESS_FEATURE, SAVED_CART_RESTORE_CART_PROCESS_ID, payload.error);
    this.payload = payload;
    this.type = RESTORE_SAVED_CART_FAIL;
  }
};
var ClearRestoreSavedCart = class extends utilsGroup.EntityLoaderResetAction {
  constructor() {
    super(PROCESS_FEATURE, SAVED_CART_RESTORE_CART_PROCESS_ID);
    this.type = CLEAR_RESTORE_SAVED_CART;
  }
};
var SaveCart = class extends utilsGroup.EntityLoadAction {
  constructor(payload) {
    super(PROCESS_FEATURE, SAVED_CART_SAVE_CART_PROCESS_ID);
    this.payload = payload;
    this.type = SAVE_CART;
  }
};
var SaveCartSuccess = class extends utilsGroup.EntitySuccessAction {
  constructor(payload) {
    super(PROCESS_FEATURE, SAVED_CART_SAVE_CART_PROCESS_ID);
    this.payload = payload;
    this.type = SAVE_CART_SUCCESS;
  }
};
var SaveCartFail = class extends utilsGroup.EntityFailAction {
  constructor(payload) {
    super(PROCESS_FEATURE, SAVED_CART_SAVE_CART_PROCESS_ID, payload.error);
    this.payload = payload;
    this.type = SAVE_CART_FAIL;
  }
};
var ClearSaveCart = class extends utilsGroup.EntityLoaderResetAction {
  constructor() {
    super(PROCESS_FEATURE, SAVED_CART_SAVE_CART_PROCESS_ID);
    this.type = CLEAR_SAVE_CART;
  }
};
var EditSavedCart = class extends utilsGroup.EntityLoadAction {
  constructor(payload) {
    super(PROCESS_FEATURE, SAVED_CART_SAVE_CART_PROCESS_ID);
    this.payload = payload;
    this.type = EDIT_SAVED_CART;
  }
};
var EditSavedCartSuccess = class extends utilsGroup.EntitySuccessAction {
  constructor(payload) {
    super(PROCESS_FEATURE, SAVED_CART_SAVE_CART_PROCESS_ID);
    this.payload = payload;
    this.type = EDIT_SAVED_CART_SUCCESS;
  }
};
var EditSavedCartFail = class extends utilsGroup.EntityFailAction {
  constructor(payload) {
    super(PROCESS_FEATURE, SAVED_CART_SAVE_CART_PROCESS_ID, payload.error);
    this.payload = payload;
    this.type = EDIT_SAVED_CART_FAIL;
  }
};
var CloneSavedCart = class extends utilsGroup.EntityLoadAction {
  constructor(payload) {
    super(PROCESS_FEATURE, SAVED_CART_CLONE_CART_PROCESS_ID);
    this.payload = payload;
    this.type = CLONE_SAVED_CART;
  }
};
var CloneSavedCartSuccess = class extends utilsGroup.EntitySuccessAction {
  constructor(payload) {
    super(PROCESS_FEATURE, SAVED_CART_CLONE_CART_PROCESS_ID);
    this.payload = payload;
    this.type = CLONE_SAVED_CART_SUCCESS;
  }
};
var CloneSavedCartFail = class extends utilsGroup.EntityFailAction {
  constructor(payload) {
    super(PROCESS_FEATURE, SAVED_CART_CLONE_CART_PROCESS_ID, payload.error);
    this.payload = payload;
    this.type = CLONE_SAVED_CART_FAIL;
  }
};
var ClearCloneSavedCart = class extends utilsGroup.EntityLoaderResetAction {
  constructor() {
    super(PROCESS_FEATURE, SAVED_CART_CLONE_CART_PROCESS_ID);
    this.type = CLEAR_CLONE_SAVED_CART;
  }
};
var _SavedCartEventBuilder = class _SavedCartEventBuilder {
  constructor(actionsSubject, eventService, stateEventService, multiCartService) {
    this.actionsSubject = actionsSubject;
    this.eventService = eventService;
    this.stateEventService = stateEventService;
    this.multiCartService = multiCartService;
    this.register();
  }
  /**
   * Registers events for the saved cart
   */
  register() {
    this.registerRestoreSavedCartEvents();
    this.registerSaveCartEvents();
    this.registerEditSavedCartEvents();
    this.registerCloneSavedCartEvents();
  }
  /**
   * Registers restore saved cart events
   */
  registerRestoreSavedCartEvents() {
    this.buildRestoreSavedCartEvents({
      action: RESTORE_SAVED_CART,
      event: RestoreSavedCartEvent
    });
    this.buildRestoreSavedCartEvents({
      action: RESTORE_SAVED_CART_SUCCESS,
      event: RestoreSavedCartSuccessEvent
    });
    this.buildRestoreSavedCartEvents({
      action: RESTORE_SAVED_CART_FAIL,
      event: RestoreSavedCartFailEvent
    });
  }
  /**
   * Registers save cart events
   */
  registerSaveCartEvents() {
    this.buildSaveCartSuccessEvent({
      action: SAVE_CART_SUCCESS,
      event: SaveCartSuccessEvent
    });
    this.stateEventService.register({
      action: SAVE_CART_FAIL,
      event: SaveCartFailEvent,
      factory: (action) => createFrom(SaveCartFailEvent, __spreadProps(__spreadValues({}, action.payload), {
        cartCode: action.payload.cartId
      }))
    });
    this.stateEventService.register({
      action: SAVE_CART,
      event: SaveCartEvent,
      factory: (action) => {
        return createFrom(SaveCartEvent, __spreadProps(__spreadValues({}, action.payload), {
          cartCode: action.payload.cartId
        }));
      }
    });
  }
  /**
   * Registers edit saved cart events
   */
  registerEditSavedCartEvents() {
    this.buildSaveCartSuccessEvent({
      action: EDIT_SAVED_CART_SUCCESS,
      event: EditSavedCartSuccessEvent
    });
    this.stateEventService.register({
      action: EDIT_SAVED_CART_FAIL,
      event: EditSavedCartFailEvent,
      factory: (action) => createFrom(EditSavedCartFailEvent, __spreadProps(__spreadValues({}, action.payload), {
        cartCode: action.payload.cartId
      }))
    });
    this.stateEventService.register({
      action: EDIT_SAVED_CART,
      event: EditSavedCartEvent,
      factory: (action) => {
        return createFrom(EditSavedCartEvent, __spreadProps(__spreadValues({}, action.payload), {
          cartCode: action.payload.cartId
        }));
      }
    });
  }
  /**
   * Registers clone saved cart events
   */
  registerCloneSavedCartEvents() {
    this.buildRestoreSavedCartEvents({
      action: CLONE_SAVED_CART,
      event: CloneSavedCartEvent
    });
    this.buildRestoreSavedCartEvents({
      action: CLONE_SAVED_CART_SUCCESS,
      event: CloneSavedCartSuccessEvent
    });
    this.buildRestoreSavedCartEvents({
      action: CLONE_SAVED_CART_FAIL,
      event: CloneSavedCartFailEvent
    });
  }
  /**
   * Builds the restore save cart events from the action and cart
   *
   * @param mapping mapping declaration from `action` string type to `event` class type
   * @param saveTime should the saveTime attribute be added to the event
   * @returns
   */
  buildRestoreSavedCartEvents(mapping) {
    const eventStream$ = this.getAction(mapping.action).pipe(switchMap((action) => of(action).pipe(withLatestFrom(this.multiCartService.getCart(action.payload.cartId)))), map(([action, cart]) => createFrom(mapping.event, __spreadValues(__spreadProps(__spreadValues({}, action.payload), {
      cartCode: cart.code,
      saveCartName: cart.name,
      saveCartDescription: cart.description
    }), cart.saveTime && {
      saveTime: cart.saveTime
    }))));
    return this.eventService.register(mapping.event, eventStream$);
  }
  /**
   * Builds save cart event by adding the saveTime from the cart
   *
   * @param mapping mapping declaration from `action` string type to `event` class type
   * @returns events register function
   */
  buildSaveCartSuccessEvent(mapping) {
    const eventStream$ = this.getAction(mapping.action).pipe(switchMap((action) => of(action).pipe(withLatestFrom(this.multiCartService.getCart(action.payload.cartId)))), filter(([, cart]) => Boolean(cart)), map(([action, cart]) => createFrom(mapping.event, __spreadProps(__spreadValues({}, action.payload), {
      cartCode: cart.code,
      saveTime: cart.saveTime
    }))));
    return this.eventService.register(mapping.event, eventStream$);
  }
  /**
   * Returns a stream of actions only of a given type(s)
   *
   * @param actionType type(s) of actions
   */
  getAction(actionType) {
    return this.actionsSubject.pipe(ofType(...[].concat(actionType)));
  }
};
_SavedCartEventBuilder.\u0275fac = function SavedCartEventBuilder_Factory(t) {
  return new (t || _SavedCartEventBuilder)(\u0275\u0275inject(ActionsSubject), \u0275\u0275inject(EventService), \u0275\u0275inject(StateEventService), \u0275\u0275inject(MultiCartFacade));
};
_SavedCartEventBuilder.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
  token: _SavedCartEventBuilder,
  factory: _SavedCartEventBuilder.\u0275fac,
  providedIn: "root"
});
var SavedCartEventBuilder = _SavedCartEventBuilder;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SavedCartEventBuilder, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: ActionsSubject
  }, {
    type: EventService
  }, {
    type: StateEventService
  }, {
    type: MultiCartFacade
  }], null);
})();
var _SavedCartEventsModule = class _SavedCartEventsModule {
  constructor(_savedCartEventBuilder) {
  }
};
_SavedCartEventsModule.\u0275fac = function SavedCartEventsModule_Factory(t) {
  return new (t || _SavedCartEventsModule)(\u0275\u0275inject(SavedCartEventBuilder));
};
_SavedCartEventsModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
  type: _SavedCartEventsModule
});
_SavedCartEventsModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({});
var SavedCartEventsModule = _SavedCartEventsModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SavedCartEventsModule, [{
    type: NgModule,
    args: [{}]
  }], () => [{
    type: SavedCartEventBuilder
  }], null);
})();
var _SavedCartEffects = class _SavedCartEffects {
  constructor(actions$, savedCartConnector, activeCartService, globalMessageService, cartConnector) {
    this.actions$ = actions$;
    this.savedCartConnector = savedCartConnector;
    this.activeCartService = activeCartService;
    this.globalMessageService = globalMessageService;
    this.cartConnector = cartConnector;
    this.logger = inject(LoggerService);
    this.loadSavedCart$ = createEffect(() => this.actions$.pipe(ofType(LOAD_SAVED_CART), map((action) => action.payload), switchMap(({
      userId,
      cartId
    }) => this.savedCartConnector.get(userId, cartId).pipe(switchMap((savedCart) => {
      return [new cartGroup_actions.LoadCartSuccess({
        userId,
        cartId,
        cart: savedCart
      }), new LoadSavedCartSuccess({
        userId,
        cartId
      })];
    }), catchError((error) => of(new LoadSavedCartFail({
      userId,
      cartId,
      error: normalizeHttpError(error, this.logger)
    })))))));
    this.loadSavedCarts$ = createEffect(() => this.actions$.pipe(ofType(LOAD_SAVED_CARTS), map((action) => action.payload), switchMap(({
      userId
    }) => this.savedCartConnector.getList(userId).pipe(switchMap((savedCarts) => {
      return [new cartGroup_actions.LoadCartsSuccess(savedCarts), new LoadSavedCartsSuccess({
        userId
      })];
    }), catchError((error) => of(new LoadSavedCartsFail({
      userId,
      error: normalizeHttpError(error, this.logger)
    })))))));
    this.restoreSavedCart$ = createEffect(() => this.actions$.pipe(ofType(RESTORE_SAVED_CART), map((action) => action.payload), withLatestFrom(this.activeCartService.getActive()), switchMap(([{
      userId,
      cartId
    }, activeCart]) => {
      const actions = [];
      if ((activeCart?.entries ?? []).length > 0) {
        if (activeCart.code) {
          actions.push(new EditSavedCart({
            userId,
            cartId: activeCart.code,
            saveCartName: "",
            saveCartDescription: ""
          }));
        }
      }
      return this.savedCartConnector.restoreSavedCart(userId, cartId).pipe(switchMap((savedCart) => {
        this.globalMessageService.add({
          key: (activeCart?.entries ?? []).length > 0 ? "savedCartList.swapCartWithActiveCart" : "savedCartList.swapCartNoActiveCart",
          params: {
            cartName: cartId,
            previousCartName: activeCart.code
          }
        }, GlobalMessageType.MSG_TYPE_CONFIRMATION);
        return [...actions, new cartGroup_actions.LoadCartSuccess({
          userId,
          cartId,
          cart: savedCart,
          extraData: {
            active: true
          }
        }), new RestoreSavedCartSuccess({
          userId,
          cartId
        })];
      }), catchError((error) => of(new RestoreSavedCartFail({
        userId,
        cartId,
        error: normalizeHttpError(error, this.logger)
      }))));
    })));
    this.saveCart$ = createEffect(() => this.actions$.pipe(ofType(SAVE_CART), map((action) => action.payload), switchMap(({
      userId,
      cartId,
      saveCartName,
      saveCartDescription
    }) => {
      return this.cartConnector.save(userId, cartId, saveCartName, saveCartDescription).pipe(switchMap((savedCart) => {
        return [new cartGroup_actions.ClearCartState(), new cartGroup_actions.LoadCartSuccess({
          userId,
          cartId,
          cart: savedCart
        }), new SaveCartSuccess({
          userId,
          cartId,
          saveCartName,
          saveCartDescription
        })];
      }), catchError((error) => of(new SaveCartFail({
        userId,
        cartId,
        saveCartName,
        saveCartDescription,
        error: normalizeHttpError(error, this.logger)
      }))));
    })));
    this.editSavedCart$ = createEffect(() => this.actions$.pipe(ofType(EDIT_SAVED_CART), map((action) => action.payload), switchMap(({
      userId,
      cartId,
      saveCartName,
      saveCartDescription
    }) => {
      return this.cartConnector.save(userId, cartId, saveCartName, saveCartDescription).pipe(switchMap((savedCart) => {
        return [new cartGroup_actions.LoadCartSuccess({
          userId,
          cartId,
          cart: savedCart
        }), new EditSavedCartSuccess({
          userId,
          cartId,
          saveCartName,
          saveCartDescription
        })];
      }), catchError((error) => of(new EditSavedCartFail({
        userId,
        cartId,
        saveCartName,
        saveCartDescription,
        error: normalizeHttpError(error, this.logger)
      }))));
    })));
    this.cloneSavedCart$ = createEffect(() => this.actions$.pipe(ofType(CLONE_SAVED_CART), map((action) => action.payload), switchMap(({
      userId,
      cartId,
      saveCartName
    }) => {
      return this.savedCartConnector.cloneSavedCart(userId, cartId, saveCartName).pipe(switchMap((_) => {
        return [new CloneSavedCartSuccess({
          userId,
          cartId,
          saveCartName
        }), new RestoreSavedCart({
          userId,
          cartId
        }), new LoadSavedCarts({
          userId
        })];
      }), catchError((error) => of(new CloneSavedCartFail({
        userId,
        cartId,
        saveCartName,
        error: normalizeHttpError(error, this.logger)
      }))));
    })));
  }
};
_SavedCartEffects.\u0275fac = function SavedCartEffects_Factory(t) {
  return new (t || _SavedCartEffects)(\u0275\u0275inject(Actions), \u0275\u0275inject(SavedCartConnector), \u0275\u0275inject(ActiveCartFacade), \u0275\u0275inject(GlobalMessageService), \u0275\u0275inject(CartConnector));
};
_SavedCartEffects.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
  token: _SavedCartEffects,
  factory: _SavedCartEffects.\u0275fac
});
var SavedCartEffects = _SavedCartEffects;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SavedCartEffects, [{
    type: Injectable
  }], () => [{
    type: Actions
  }, {
    type: SavedCartConnector
  }, {
    type: ActiveCartFacade
  }, {
    type: GlobalMessageService
  }, {
    type: CartConnector
  }], null);
})();
var effects = [SavedCartEffects];
var _SavedCartStoreModule = class _SavedCartStoreModule {
};
_SavedCartStoreModule.\u0275fac = function SavedCartStoreModule_Factory(t) {
  return new (t || _SavedCartStoreModule)();
};
_SavedCartStoreModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
  type: _SavedCartStoreModule
});
_SavedCartStoreModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
  imports: [EffectsModule.forFeature(effects)]
});
var SavedCartStoreModule = _SavedCartStoreModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SavedCartStoreModule, [{
    type: NgModule,
    args: [{
      imports: [EffectsModule.forFeature(effects)]
    }]
  }], null, null);
})();
var _SavedCartService = class _SavedCartService {
  constructor(store, userIdService, userAccountFacade, multiCartService, eventService) {
    this.store = store;
    this.userIdService = userIdService;
    this.userAccountFacade = userAccountFacade;
    this.multiCartService = multiCartService;
    this.eventService = eventService;
  }
  /**
   * Loads a single saved cart
   */
  loadSavedCart(cartId) {
    this.userIdService.takeUserId(true).subscribe({
      next: (userId) => {
        return this.store.dispatch(new LoadSavedCart({
          userId,
          cartId
        }));
      },
      error: () => {
      }
    });
  }
  /**
   * Gets a single saved cart
   * it won't emit if the delete saved cart event gets triggered to avoid race condition between actions
   *
   * @param cartId
   * @returns observable with cart
   */
  get(cartId) {
    return this.getSavedCart(cartId).pipe(observeOn(queueScheduler), withLatestFrom(this.eventService.get(DeleteCartEvent).pipe(startWith({}))), filter(([state, _event]) => !!state), tap(([state, event]) => {
      if (Object.keys(event).length > 0) {
        return EMPTY;
      }
      if (!(state.loading || state.success || state.error)) {
        this.loadSavedCart(cartId);
      }
    }), filter(([state]) => state.success || !!state.error), map(([state]) => state.value));
  }
  /**
   * Gets the selected cart state
   *
   * @param cartId
   * @returns observable of selected cart with loader state
   */
  getSavedCart(cartId) {
    return this.multiCartService.getCartEntity(cartId);
  }
  /**
   * Returns true when there are no operations on that in progress and it is not currently loading
   *
   * @param cartId
   */
  isStable(cartId) {
    return this.multiCartService.isStable(cartId);
  }
  /**
   * Loads a list of saved carts
   */
  loadSavedCarts() {
    this.userIdService.takeUserId(true).subscribe({
      next: (userId) => {
        return this.store.dispatch(new LoadSavedCarts({
          userId
        }));
      },
      error: () => {
      }
    });
  }
  /**
   * Gets a list of saved carts
   *
   * @returns observable with list of saved carts
   */
  getList() {
    return this.getSavedCartList().pipe(withLatestFrom(this.getSavedCartListProcess()), tap(([_, state]) => {
      if (!(state.loading || state.success || state.error)) {
        this.loadSavedCarts();
      }
    }), map(([savedCartList, _]) => savedCartList), shareReplay({
      bufferSize: 1,
      refCount: true
    }));
  }
  /**
   * Gets a list of saved carts from all carts in the state
   * by filtering through the carts that are not wishlist and not saved cart
   *
   * @returns observable with list of saved carts
   */
  getSavedCartList() {
    return combineLatest([this.multiCartService.getCarts(), this.userAccountFacade.get()]).pipe(distinctUntilChanged(), map(([carts, user]) => carts.filter((cart) => (user?.customerId !== void 0 ? cart?.name !== `wishlist${user?.customerId}` : true) && !isSelectiveCart(cart?.code) && cart?.saveTime)));
  }
  /**
   * Gets the loading flag of getting a list of saved carts
   *
   * @returns observable with boolean of the loading state
   */
  getSavedCartListProcessLoading() {
    return this.store.pipe(select(process_selectors.getProcessLoadingFactory(SAVED_CART_LIST_PROCESS_ID)));
  }
  /**
   * Gets the loading state of getting a list of saved carts
   *
   * @returns observable with boolean of the loader state
   */
  getSavedCartListProcess() {
    return this.store.pipe(select(process_selectors.getProcessStateFactory(SAVED_CART_LIST_PROCESS_ID)));
  }
  /**
   * Clears the process state of performing a saved cart
   */
  clearSavedCarts() {
    this.store.dispatch(new ClearSavedCarts());
  }
  /**
   * Triggers a restore saved cart
   *
   * @param cartId
   */
  restoreSavedCart(cartId) {
    this.userIdService.takeUserId(true).subscribe({
      next: (userId) => {
        return this.store.dispatch(new RestoreSavedCart({
          userId,
          cartId
        }));
      },
      error: () => {
      }
    });
  }
  /**
   * Gets the loading state of restoring saved cart
   *
   * @returns observable with boolean of the loading state
   */
  getRestoreSavedCartProcessLoading() {
    return this.store.pipe(select(process_selectors.getProcessLoadingFactory(SAVED_CART_RESTORE_CART_PROCESS_ID)));
  }
  /**
   * Gets the success state of restoring saved cart
   *
   * @returns observable with boolean of the success state
   */
  getRestoreSavedCartProcessSuccess() {
    return this.store.pipe(select(process_selectors.getProcessSuccessFactory(SAVED_CART_RESTORE_CART_PROCESS_ID)));
  }
  /**
   * Gets the error state of restoring saved cart
   *
   * @returns observable with boolean of the error state
   */
  getRestoreSavedCartProcessError() {
    return this.store.pipe(select(process_selectors.getProcessErrorFactory(SAVED_CART_RESTORE_CART_PROCESS_ID)));
  }
  /**
   * Clears the process state of performing a restore saved cart
   */
  clearRestoreSavedCart() {
    this.store.dispatch(new ClearRestoreSavedCart());
  }
  /**
   * Triggers delete saved cart
   * @param cartId
   */
  deleteSavedCart(cartId) {
    this.userIdService.takeUserId(true).subscribe({
      next: (userId) => {
        return this.multiCartService.deleteCart(cartId, userId);
      },
      error: () => {
      }
    });
  }
  /**
   * Triggers a saved cart
   *
   */
  saveCart({
    cartId,
    saveCartName,
    saveCartDescription
  }) {
    this.userIdService.takeUserId(true).subscribe({
      next: (userId) => {
        return this.store.dispatch(new SaveCart({
          userId,
          cartId,
          saveCartName,
          saveCartDescription
        }));
      },
      error: () => {
      }
    });
  }
  /**
   * Gets the loading state of saving a cart
   *
   * @returns observable with boolean of the loading state
   */
  getSaveCartProcessLoading() {
    return this.store.pipe(select(process_selectors.getProcessLoadingFactory(SAVED_CART_SAVE_CART_PROCESS_ID)));
  }
  /**
   * Gets the success state of saving a cart
   *
   * @returns observable with boolean of the success state
   */
  getSaveCartProcessSuccess() {
    return this.store.pipe(select(process_selectors.getProcessSuccessFactory(SAVED_CART_SAVE_CART_PROCESS_ID)));
  }
  /**
   * Gets the error state of saving a cart
   *
   * @returns observable with boolean of the error state
   */
  getSaveCartProcessError() {
    return this.store.pipe(select(process_selectors.getProcessErrorFactory(SAVED_CART_SAVE_CART_PROCESS_ID)));
  }
  /**
   * Clears the process state of performing a save cart
   */
  clearSaveCart() {
    this.store.dispatch(new ClearSaveCart());
  }
  /**
   * Triggers an edit saved cart
   *
   */
  editSavedCart({
    cartId,
    saveCartName,
    saveCartDescription
  }) {
    this.userIdService.takeUserId(true).subscribe({
      next: (userId) => {
        return this.store.dispatch(new EditSavedCart({
          userId,
          cartId,
          saveCartName,
          saveCartDescription
        }));
      },
      error: () => {
      }
    });
  }
  /**
   * Triggers a clone saved cart
   *
   * @param cartId
   */
  cloneSavedCart(cartId, saveCartName) {
    this.userIdService.takeUserId(true).subscribe({
      next: (userId) => {
        return this.store.dispatch(new CloneSavedCart({
          userId,
          cartId,
          saveCartName
        }));
      },
      error: () => {
      }
    });
  }
  /**
   * Gets the loading state of cloning a saved cart
   *
   * @returns observable with boolean of the loading state
   */
  getCloneSavedCartProcessLoading() {
    return this.store.pipe(select(process_selectors.getProcessLoadingFactory(SAVED_CART_CLONE_CART_PROCESS_ID)));
  }
  /**
   * Gets the success state of cloning a saved cart
   *
   * @returns observable with boolean of the success state
   */
  getCloneSavedCartProcessSuccess() {
    return this.store.pipe(select(process_selectors.getProcessSuccessFactory(SAVED_CART_CLONE_CART_PROCESS_ID)));
  }
  /**
   * Gets the error state of cloning a saved cart
   *
   * @returns observable with boolean of the error state
   */
  getCloneSavedCartProcessError() {
    return this.store.pipe(select(process_selectors.getProcessErrorFactory(SAVED_CART_CLONE_CART_PROCESS_ID)));
  }
  /**
   * Clears the process state of cloning a saved cart
   */
  clearCloneSavedCart() {
    this.store.dispatch(new ClearCloneSavedCart());
  }
};
_SavedCartService.\u0275fac = function SavedCartService_Factory(t) {
  return new (t || _SavedCartService)(\u0275\u0275inject(Store), \u0275\u0275inject(UserIdService), \u0275\u0275inject(UserAccountFacade), \u0275\u0275inject(MultiCartFacade), \u0275\u0275inject(EventService));
};
_SavedCartService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
  token: _SavedCartService,
  factory: _SavedCartService.\u0275fac
});
var SavedCartService = _SavedCartService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SavedCartService, [{
    type: Injectable
  }], () => [{
    type: Store
  }, {
    type: UserIdService
  }, {
    type: UserAccountFacade
  }, {
    type: MultiCartFacade
  }, {
    type: EventService
  }], null);
})();
var facadeProviders = [SavedCartService, {
  provide: SavedCartFacade,
  useExisting: SavedCartService
}];
var _SavedCartCoreModule = class _SavedCartCoreModule {
};
_SavedCartCoreModule.\u0275fac = function SavedCartCoreModule_Factory(t) {
  return new (t || _SavedCartCoreModule)();
};
_SavedCartCoreModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
  type: _SavedCartCoreModule
});
_SavedCartCoreModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
  providers: [SavedCartConnector, ...facadeProviders],
  imports: [SavedCartStoreModule, SavedCartEventsModule]
});
var SavedCartCoreModule = _SavedCartCoreModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SavedCartCoreModule, [{
    type: NgModule,
    args: [{
      imports: [SavedCartStoreModule, SavedCartEventsModule],
      providers: [SavedCartConnector, ...facadeProviders]
    }]
  }], null, null);
})();

// node_modules/@spartacus/cart/fesm2022/spartacus-cart-saved-cart-occ.mjs
var _OccSavedCartAdapter = class _OccSavedCartAdapter {
  constructor(http, occEndpoints, converter) {
    this.http = http;
    this.occEndpoints = occEndpoints;
    this.converter = converter;
  }
  load(userId, cartId) {
    return this.http.get(this.getSavedCartEndpoint(userId, cartId)).pipe(map((cartResponse) => cartResponse.savedCartData), this.converter.pipeable(CART_NORMALIZER));
  }
  loadList(userId) {
    return this.http.get(this.getSavedCartListEndpoint(userId)).pipe(map((cartList) => cartList.carts ?? []), this.converter.pipeableMany(CART_NORMALIZER));
  }
  restoreSavedCart(userId, cartId) {
    return this.http.patch(this.getRestoreSavedCartEndpoint(userId, cartId), cartId).pipe(map((cartResponse) => cartResponse.savedCartData), this.converter.pipeable(CART_NORMALIZER));
  }
  cloneSavedCart(userId, cartId, saveCartName) {
    return this.http.post(this.getCloneSavedCartEndpoint(userId, cartId, saveCartName), cartId).pipe(map((cartResponse) => cartResponse.savedCartData), this.converter.pipeable(CART_NORMALIZER));
  }
  getSavedCartEndpoint(userId, cartId) {
    return this.occEndpoints.buildUrl("savedCart", {
      urlParams: {
        userId,
        cartId
      }
    });
  }
  getSavedCartListEndpoint(userId) {
    return this.occEndpoints.buildUrl("savedCarts", {
      urlParams: {
        userId
      }
    });
  }
  getRestoreSavedCartEndpoint(userId, cartId) {
    return this.occEndpoints.buildUrl("restoreSavedCart", {
      urlParams: {
        userId,
        cartId
      }
    });
  }
  getCloneSavedCartEndpoint(userId, cartId, saveCartName) {
    return this.occEndpoints.buildUrl("cloneSavedCart", {
      urlParams: {
        userId,
        cartId,
        saveCartName
      }
    });
  }
};
_OccSavedCartAdapter.\u0275fac = function OccSavedCartAdapter_Factory(t) {
  return new (t || _OccSavedCartAdapter)(\u0275\u0275inject(HttpClient), \u0275\u0275inject(OccEndpointsService), \u0275\u0275inject(ConverterService));
};
_OccSavedCartAdapter.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
  token: _OccSavedCartAdapter,
  factory: _OccSavedCartAdapter.\u0275fac
});
var OccSavedCartAdapter = _OccSavedCartAdapter;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OccSavedCartAdapter, [{
    type: Injectable
  }], () => [{
    type: HttpClient
  }, {
    type: OccEndpointsService
  }, {
    type: ConverterService
  }], null);
})();
var defaultOccSavedCartConfig = {
  backend: {
    occ: {
      endpoints: {
        savedCarts: "/users/${userId}/carts?savedCartsOnly=true&fields=carts(DEFAULT,potentialProductPromotions,appliedProductPromotions,potentialOrderPromotions,appliedOrderPromotions,entries(totalPrice(formattedValue),product(images(FULL),stock(FULL)),basePrice(formattedValue,value),updateable),totalPrice(formattedValue),totalItems,totalPriceWithTax(formattedValue),totalDiscounts(value,formattedValue),subTotal(formattedValue),totalUnitCount,deliveryItemsQuantity,deliveryCost(formattedValue),totalTax(formattedValue, value),pickupItemsQuantity,net,appliedVouchers,productDiscounts(formattedValue),saveTime,user,name,description)",
        savedCart: "/users/${userId}/carts/${cartId}/savedcart",
        restoreSavedCart: "/users/${userId}/carts/${cartId}/restoresavedcart",
        cloneSavedCart: "/users/${userId}/carts/${cartId}/clonesavedcart?name=${saveCartName}"
      }
    }
  }
};
var _SavedCartOccModule = class _SavedCartOccModule {
};
_SavedCartOccModule.\u0275fac = function SavedCartOccModule_Factory(t) {
  return new (t || _SavedCartOccModule)();
};
_SavedCartOccModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
  type: _SavedCartOccModule
});
_SavedCartOccModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
  providers: [provideDefaultConfig(defaultOccSavedCartConfig), {
    provide: SavedCartAdapter,
    useClass: OccSavedCartAdapter
  }],
  imports: [CommonModule]
});
var SavedCartOccModule = _SavedCartOccModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SavedCartOccModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule],
      providers: [provideDefaultConfig(defaultOccSavedCartConfig), {
        provide: SavedCartAdapter,
        useClass: OccSavedCartAdapter
      }]
    }]
  }], null, null);
})();

// node_modules/@spartacus/cart/fesm2022/spartacus-cart-saved-cart.mjs
var _SavedCartModule = class _SavedCartModule {
};
_SavedCartModule.\u0275fac = function SavedCartModule_Factory(t) {
  return new (t || _SavedCartModule)();
};
_SavedCartModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
  type: _SavedCartModule
});
_SavedCartModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
  imports: [SavedCartCoreModule, SavedCartOccModule, SavedCartComponentsModule]
});
var SavedCartModule = _SavedCartModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SavedCartModule, [{
    type: NgModule,
    args: [{
      imports: [SavedCartCoreModule, SavedCartOccModule, SavedCartComponentsModule]
    }]
  }], null, null);
})();
export {
  SavedCartModule
};
//# sourceMappingURL=chunk-6YOWBJ5C.js.map
