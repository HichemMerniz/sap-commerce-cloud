import './polyfills.server.mjs';
import {
  CART_VALIDATION_NORMALIZER,
  CartAdapter,
  CartBaseCoreModule,
  CartConfigService,
  CartEntryAdapter,
  CartValidationAdapter,
  CartVoucherAdapter,
  ProductImportInfoService,
  isEmpty
} from "./chunk-73RUKYVL.mjs";
import "./chunk-NLXOS75N.mjs";
import {
  ActiveCartFacade,
  ActiveCartOrderEntriesContextToken,
  CART_MODIFICATION_NORMALIZER,
  CART_NORMALIZER,
  CART_VOUCHER_NORMALIZER,
  CartAddEntryFailEvent,
  CartItemContext,
  CartOutlets,
  CartUiEventAddToCart,
  CartValidationFacade,
  CartValidationStatusCode,
  CartVoucherFacade,
  DeleteCartFailEvent,
  DeleteCartSuccessEvent,
  MultiCartFacade,
  ORDER_ENTRY_PROMOTIONS_NORMALIZER,
  OrderEntriesSource,
  PromotionLocation,
  SelectiveCartFacade
} from "./chunk-3NCZ7TRR.mjs";
import {
  AtMessageDirective,
  AtMessageModule,
  CmsComponentData,
  CurrentProductService,
  DIALOG_TYPE,
  DefaultValueAccessor,
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
  MediaComponent,
  MediaModule,
  NgControlStatus,
  NgControlStatusGroup,
  NgSelectModule,
  OutletContextData,
  OutletDirective,
  OutletModule,
  PAGE_LAYOUT_HANDLER,
  ProductListItemContext,
  ProgressButtonComponent,
  ProgressButtonModule,
  PromotionsComponent,
  PromotionsModule,
  ReactiveFormsModule,
  RequiredValidator,
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
  AuthService,
  CmsService,
  ConverterService,
  CustomerCouponService,
  EventService,
  GlobalMessageService,
  GlobalMessageType,
  I18nModule,
  InterceptorUtil,
  LoggerService,
  NavigationCancel,
  NavigationEnd,
  OCC_CART_ID_CURRENT,
  OCC_USER_ID_ANONYMOUS,
  OccEndpointsService,
  PRODUCT_NORMALIZER,
  Router,
  RouterLink,
  RouterModule,
  RoutingService,
  TranslatePipe,
  USE_CLIENT_TOKEN,
  UrlModule,
  UrlPipe,
  UserIdService,
  isNotNullable,
  normalizeHttpError,
  provideDefaultConfig
} from "./chunk-AFAMYKVR.mjs";
import {
  AsyncPipe,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  CommonModule,
  Component,
  ComponentRef$1,
  ElementRef,
  HostListener,
  HttpClient,
  HttpHeaders,
  HttpParams,
  Injectable,
  Input,
  InputFlags,
  NgClass,
  NgForOf,
  NgIf,
  NgModule,
  NgTemplateOutlet,
  Optional,
  ReplaySubject,
  Subscription,
  ViewChild,
  ViewContainerRef,
  catchError,
  combineLatest,
  filter,
  inject,
  map,
  merge,
  of,
  setClassMetadata,
  shareReplay,
  startWith,
  switchMap,
  take,
  tap,
  withLatestFrom,
  ɵɵInheritDefinitionFeature,
  ɵɵNgOnChangesFeature,
  ɵɵProvidersFeature,
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
  ɵɵelementContainer,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵgetInheritedFactory,
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
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty,
  ɵɵviewQuery
} from "./chunk-3LP6MEWW.mjs";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-JBYB2SS7.mjs";

// node_modules/@spartacus/cart/fesm2022/spartacus-cart-base-components.mjs
var _c0 = (a0) => ({
  quantity: a0
});
function CartItemValidationWarningComponent_ng_container_0_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 2)(1, "span", 3);
    \u0275\u0275element(2, "cx-icon", 4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "cxTranslate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "button", 5);
    \u0275\u0275listener("click", function CartItemValidationWarningComponent_ng_container_0_div_1_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.isVisible = !ctx_r1.isVisible);
    });
    \u0275\u0275element(7, "cx-icon", 4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const cartModification_r3 = \u0275\u0275nextContext().ngIf;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("type", ctx_r1.iconTypes.INFO);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(5, 3, "validation." + cartModification_r3.statusCode, \u0275\u0275pureFunction1(6, _c0, cartModification_r3.quantityAdded)), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("type", ctx_r1.iconTypes.CLOSE);
  }
}
function CartItemValidationWarningComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, CartItemValidationWarningComponent_ng_container_0_div_1_Template, 8, 8, "div", 1);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isVisible);
  }
}
var _c1 = (a0) => ({
  cxRoute: "product",
  params: a0
});
var _c2 = (a0, a1) => ({
  loading: a0,
  item: a1
});
var _c3 = (a0) => ({
  $implicit: a0
});
function CartItemComponent_ng_template_0_ng_template_0_Template(rf, ctx) {
}
function CartItemComponent_ng_template_0_div_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 22)(1, "a", 23);
    \u0275\u0275pipe(2, "cxUrl");
    \u0275\u0275elementStart(3, "h3");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", \u0275\u0275pipeBind1(2, 2, \u0275\u0275pureFunction1(4, _c1, ctx_r0.item.product)));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.item.product == null ? null : ctx_r0.item.product.name);
  }
}
function CartItemComponent_ng_template_0_div_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 24);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "cxTranslate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", \u0275\u0275pipeBind1(2, 2, "cartItems.id"), " ", ctx_r0.item.product == null ? null : ctx_r0.item.product.code, " ");
  }
}
function CartItemComponent_ng_template_0_ng_template_12_Template(rf, ctx) {
}
function CartItemComponent_ng_template_0_ng_container_13_div_1_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 28);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const variant_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", variant_r2.name, ": ", variant_r2.value, " ");
  }
}
function CartItemComponent_ng_template_0_ng_container_13_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 26);
    \u0275\u0275template(1, CartItemComponent_ng_template_0_ng_container_13_div_1_div_1_Template, 2, 2, "div", 27);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const variant_r2 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", variant_r2.name && variant_r2.value);
  }
}
function CartItemComponent_ng_template_0_ng_container_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, CartItemComponent_ng_template_0_ng_container_13_div_1_Template, 2, 1, "div", 25);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r0.item.product == null ? null : ctx_r0.item.product.baseOptions[0] == null ? null : ctx_r0.item.product.baseOptions[0].selected == null ? null : ctx_r0.item.product.baseOptions[0].selected.variantOptionQualifiers);
  }
}
function CartItemComponent_ng_template_0_div_14_div_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.item.basePrice == null ? null : ctx_r0.item.basePrice.formattedValue, " ");
  }
}
function CartItemComponent_ng_template_0_div_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 29)(1, "div", 30);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "cxTranslate");
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, CartItemComponent_ng_template_0_div_14_div_4_Template, 2, 1, "div", 31);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngClass", ctx_r0.compact ? "" : " col-md-3 col-lg-3 col-xl-2");
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", ctx_r0.compact ? "" : " d-block d-md-none d-lg-none d-xl-none");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 4, "cartItems.itemPrice"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r0.item.basePrice);
  }
}
function CartItemComponent_ng_template_0_ng_container_22_div_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.item.product == null ? null : ctx_r0.item.product.stock == null ? null : ctx_r0.item.product.stock.stockLevel, " ");
  }
}
function CartItemComponent_ng_template_0_ng_container_22_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "cxTranslate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "saveForLaterItems.forceInStock"), " ");
  }
}
function CartItemComponent_ng_template_0_ng_container_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 32)(2, "div", 30);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "cxTranslate");
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, CartItemComponent_ng_template_0_ng_container_22_div_5_Template, 2, 1, "div", 33)(6, CartItemComponent_ng_template_0_ng_container_22_ng_template_6_Template, 3, 3, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const forceInstock_r3 = \u0275\u0275reference(7);
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", ctx_r0.compact ? "" : " col-md-3 col-lg-3 col-xl-2");
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", ctx_r0.compact ? "" : " d-block d-md-none d-lg-none d-xl-none");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 5, "saveForLaterItems.stock"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", (ctx_r0.item.product == null ? null : ctx_r0.item.product.stock.stockLevel) >= 0)("ngIfElse", forceInstock_r3);
  }
}
function CartItemComponent_ng_template_0_div_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 34);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "cxTranslate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "addToCart.outOfStock"), " ");
  }
}
function CartItemComponent_ng_template_0_ng_template_24_Template(rf, ctx) {
}
function CartItemComponent_ng_template_0_div_26_ng_container_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function CartItemComponent_ng_template_0_div_26_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, CartItemComponent_ng_template_0_div_26_ng_container_1_ng_container_1_Template, 1, 0, "ng-container", 38);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r0.options.optionalBtn)("ngTemplateOutletContext", \u0275\u0275pureFunction1(5, _c3, \u0275\u0275pureFunction2(2, _c2, ctx_r0.quantityControl.disabled, ctx_r0.item)));
  }
}
function CartItemComponent_ng_template_0_div_26_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 35);
    \u0275\u0275template(1, CartItemComponent_ng_template_0_div_26_ng_container_1_Template, 2, 7, "ng-container", 12);
    \u0275\u0275elementStart(2, "div", 36)(3, "button", 37);
    \u0275\u0275pipe(4, "cxTranslate");
    \u0275\u0275pipe(5, "cxTranslate");
    \u0275\u0275listener("click", function CartItemComponent_ng_template_0_div_26_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.removeItem());
    });
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "cxTranslate");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.isProductOutOfStock(ctx_r0.item.product));
    \u0275\u0275advance(2);
    \u0275\u0275property("cxAtMessage", \u0275\u0275pipeBind1(4, 5, "cartItems.itemRemoved"))("disabled", ctx_r0.quantityControl.disabled);
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(5, 7, "addToCart.removeFromCart"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(7, 9, "common.remove"), " ");
  }
}
function CartItemComponent_ng_template_0_ng_template_27_div_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 32)(1, "div", 30);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "cxTranslate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 16);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275property("ngClass", ctx_r0.compact ? "" : " col-md-3 col-xl-2");
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", ctx_r0.compact ? "" : " d-block d-md-none d-lg-none d-xl-none");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 4, "cartItems.total"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.item.totalPrice.formattedValue);
  }
}
function CartItemComponent_ng_template_0_ng_template_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, CartItemComponent_ng_template_0_ng_template_27_div_0_Template, 6, 6, "div", 39);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngIf", ctx_r0.item.totalPrice);
  }
}
function CartItemComponent_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, CartItemComponent_ng_template_0_ng_template_0_Template, 0, 0, "ng-template", 2);
    \u0275\u0275element(1, "cx-cart-item-validation-warning", 3);
    \u0275\u0275elementStart(2, "div", 4)(3, "div", 5)(4, "a", 6);
    \u0275\u0275pipe(5, "cxUrl");
    \u0275\u0275element(6, "cx-media", 7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 8)(8, "div", 9)(9, "div", 4);
    \u0275\u0275template(10, CartItemComponent_ng_template_0_div_10_Template, 5, 6, "div", 10)(11, CartItemComponent_ng_template_0_div_11_Template, 3, 4, "div", 11)(12, CartItemComponent_ng_template_0_ng_template_12_Template, 0, 0, "ng-template", 2)(13, CartItemComponent_ng_template_0_ng_container_13_Template, 2, 1, "ng-container", 12);
    \u0275\u0275elementEnd();
    \u0275\u0275template(14, CartItemComponent_ng_template_0_div_14_Template, 5, 6, "div", 13);
    \u0275\u0275elementStart(15, "div", 14)(16, "div", 15);
    \u0275\u0275pipe(17, "cxTranslate");
    \u0275\u0275text(18);
    \u0275\u0275pipe(19, "cxTranslate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "div", 16);
    \u0275\u0275element(21, "cx-item-counter", 17);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(22, CartItemComponent_ng_template_0_ng_container_22_Template, 8, 7, "ng-container", 18);
    \u0275\u0275elementEnd();
    \u0275\u0275template(23, CartItemComponent_ng_template_0_div_23_Template, 3, 3, "div", 19)(24, CartItemComponent_ng_template_0_ng_template_24_Template, 0, 0, "ng-template", 2);
    \u0275\u0275element(25, "cx-promotions", 20);
    \u0275\u0275template(26, CartItemComponent_ng_template_0_div_26_Template, 8, 11, "div", 21);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(27, CartItemComponent_ng_template_0_ng_template_27_Template, 1, 1, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
  }
  if (rf & 2) {
    const total_r5 = \u0275\u0275reference(28);
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("cxOutlet", ctx_r0.CartOutlets.ITEM_CONFIGURATOR_ISSUES);
    \u0275\u0275advance();
    \u0275\u0275property("code", ctx_r0.item.product == null ? null : ctx_r0.item.product.code);
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", ctx_r0.compact ? "cx-compact row" : "row");
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", \u0275\u0275pipeBind1(5, 27, \u0275\u0275pureFunction1(33, _c1, ctx_r0.item.product)));
    \u0275\u0275advance(2);
    \u0275\u0275property("container", ctx_r0.item.product == null ? null : ctx_r0.item.product.images == null ? null : ctx_r0.item.product.images.PRIMARY);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngClass", ctx_r0.compact ? "" : " col-md-3 col-lg-3 col-xl-5");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.item.product == null ? null : ctx_r0.item.product.name);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.item.product == null ? null : ctx_r0.item.product.code);
    \u0275\u0275advance();
    \u0275\u0275property("cxOutlet", ctx_r0.CartOutlets.ITEM_DETAILS);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.item.product == null ? null : ctx_r0.item.product.baseOptions == null ? null : ctx_r0.item.product.baseOptions.length);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.item.basePrice);
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", ctx_r0.compact ? "" : " col-3");
    \u0275\u0275advance();
    \u0275\u0275propertyInterpolate("title", \u0275\u0275pipeBind1(17, 29, "cartItems.quantityTitle"));
    \u0275\u0275property("ngClass", ctx_r0.compact ? "" : " d-block d-md-none d-lg-none d-xl-none");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(19, 31, "cartItems.quantity"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("readonly-value", ctx_r0.readonly);
    \u0275\u0275advance();
    \u0275\u0275property("control", ctx_r0.quantityControl)("readonly", !ctx_r0.item.updateable || ctx_r0.readonly || ctx_r0.options.isSaveForLater)("max", ctx_r0.item.product == null ? null : ctx_r0.item.product.stock == null ? null : ctx_r0.item.product.stock.stockLevel)("allowZero", true);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.options.isSaveForLater)("ngIfElse", total_r5);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.isProductOutOfStock(ctx_r0.item.product));
    \u0275\u0275advance();
    \u0275\u0275property("cxOutlet", ctx_r0.CartOutlets.ITEM_BUNDLE_DETAILS);
    \u0275\u0275advance();
    \u0275\u0275property("promotions", ctx_r0.item.promotions);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (!ctx_r0.readonly || ctx_r0.options.isSaveForLater) && ctx_r0.item.updateable);
  }
}
var _c4 = (a0) => ({
  count: a0
});
var _c5 = () => [];
var _c6 = () => ({
  cxRoute: "cart"
});
var _c7 = () => ({
  cxRoute: "checkout"
});
function AddedToCartDialogComponent_ng_container_2_div_11_div_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 18);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "cxTranslate");
    \u0275\u0275elementStart(3, "span", 19);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 2, "pickupOptionDialog.modalHeader"), ": ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r2.pickupStoreName);
  }
}
function AddedToCartDialogComponent_ng_container_2_div_11_div_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 20)(1, "div", 21)(2, "div");
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "cxTranslate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 22);
    \u0275\u0275element(8, "cx-promotions", 23);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 24)(10, "a", 25);
    \u0275\u0275pipe(11, "cxUrl");
    \u0275\u0275listener("click", function AddedToCartDialogComponent_ng_container_2_div_11_div_7_Template_a_click_10_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.dismissModal("View Cart click"));
    });
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "cxTranslate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "a", 26);
    \u0275\u0275pipe(15, "cxUrl");
    \u0275\u0275listener("click", function AddedToCartDialogComponent_ng_container_2_div_11_div_7_Template_a_click_14_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.dismissModal("Proceed To Checkout click"));
    });
    \u0275\u0275text(16);
    \u0275\u0275pipe(17, "cxTranslate");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const cart_r5 = ctx.ngIf;
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(4, 11, "cartItems.cartTotal", \u0275\u0275pureFunction1(22, _c4, cart_r5.deliveryItemsQuantity)), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(cart_r5.subTotal == null ? null : cart_r5.subTotal.formattedValue);
    \u0275\u0275advance(2);
    \u0275\u0275property("promotions", (cart_r5.appliedOrderPromotions || \u0275\u0275pureFunction0(24, _c5)).concat(cart_r5.potentialOrderPromotions || \u0275\u0275pureFunction0(25, _c5)));
    \u0275\u0275advance(2);
    \u0275\u0275classProp("disabled", ctx_r2.form.dirty);
    \u0275\u0275property("routerLink", \u0275\u0275pipeBind1(11, 14, \u0275\u0275pureFunction0(26, _c6)));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(13, 16, "addToCart.viewCart"));
    \u0275\u0275advance(2);
    \u0275\u0275classProp("disabled", ctx_r2.form.dirty);
    \u0275\u0275property("routerLink", \u0275\u0275pipeBind1(15, 18, \u0275\u0275pureFunction0(27, _c7)));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(17, 20, "addToCart.proceedToCheckout"));
  }
}
function AddedToCartDialogComponent_ng_container_2_div_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11)(1, "div", 12)(2, "div", 13);
    \u0275\u0275element(3, "cx-cart-item", 14);
    \u0275\u0275pipe(4, "async");
    \u0275\u0275template(5, AddedToCartDialogComponent_ng_container_2_div_11_div_5_Template, 5, 4, "div", 15);
    \u0275\u0275elementEnd();
    \u0275\u0275element(6, "div", 16);
    \u0275\u0275template(7, AddedToCartDialogComponent_ng_container_2_div_11_div_7_Template, 18, 28, "div", 17);
    \u0275\u0275pipe(8, "async");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const entry_r6 = ctx.ngIf;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275property("item", entry_r6)("compact", true)("quantityControl", \u0275\u0275pipeBind1(4, 6, ctx_r2.getQuantityControl()))("promotionLocation", ctx_r2.promotionLocation);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r2.pickupStoreName);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", \u0275\u0275pipeBind1(8, 8, ctx_r2.cart$));
  }
}
function AddedToCartDialogComponent_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 5)(2, "div", 6);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "async");
    \u0275\u0275pipe(5, "cxTranslate");
    \u0275\u0275pipe(6, "cxTranslate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 7);
    \u0275\u0275pipe(8, "cxTranslate");
    \u0275\u0275listener("click", function AddedToCartDialogComponent_ng_container_2_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.dismissModal("Cross click"));
    });
    \u0275\u0275elementStart(9, "span", 8);
    \u0275\u0275element(10, "cx-icon", 9);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(11, AddedToCartDialogComponent_ng_container_2_div_11_Template, 9, 10, "div", 10);
    \u0275\u0275pipe(12, "async");
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 4, ctx_r2.addedEntryWasMerged$) ? \u0275\u0275pipeBind1(5, 6, "addToCart.itemsIncrementedInYourCart") : \u0275\u0275pipeBind1(6, 8, "addToCart.itemsAddedToYourCart"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(8, 10, "addToCart.closeModal"));
    \u0275\u0275advance(3);
    \u0275\u0275property("type", ctx_r2.iconTypes.CLOSE);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", \u0275\u0275pipeBind1(12, 12, ctx_r2.entry$));
  }
}
function AddedToCartDialogComponent_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 5)(1, "div", 6);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "cxTranslate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 7);
    \u0275\u0275pipe(5, "cxTranslate");
    \u0275\u0275listener("click", function AddedToCartDialogComponent_ng_template_4_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.dismissModal("Cross click"));
    });
    \u0275\u0275elementStart(6, "span", 8);
    \u0275\u0275element(7, "cx-icon", 9);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(8, "div", 11)(9, "div", 12)(10, "div", 27);
    \u0275\u0275element(11, "cx-spinner");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 3, "addToCart.updatingCart"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(5, 5, "common.close"));
    \u0275\u0275advance(3);
    \u0275\u0275property("type", ctx_r2.iconTypes.CLOSE);
  }
}
var _c8 = ["cx-cart-item-list-row", ""];
var _c9 = (a0, a1) => ({
  item: a0,
  cartType: a1
});
var _c10 = (a0, a1, a2) => ({
  loading: a0,
  item: a1,
  options: a2
});
function CartItemListRowComponent_ng_template_0_ng_template_1_Template(rf, ctx) {
}
function CartItemListRowComponent_ng_template_0_div_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 22)(1, "a", 23);
    \u0275\u0275pipe(2, "cxUrl");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", \u0275\u0275pipeBind1(2, 2, \u0275\u0275pureFunction1(4, _c1, ctx_r0.item.product)));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.item.product == null ? null : ctx_r0.item.product.name);
  }
}
function CartItemListRowComponent_ng_template_0_div_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 24);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "cxTranslate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", \u0275\u0275pipeBind1(2, 2, "cartItems.id"), " ", ctx_r0.item.product == null ? null : ctx_r0.item.product.code, " ");
  }
}
function CartItemListRowComponent_ng_template_0_div_10_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 18);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.item.basePrice == null ? null : ctx_r0.item.basePrice.formattedValue, " ");
  }
}
function CartItemListRowComponent_ng_template_0_div_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 25);
    \u0275\u0275template(1, CartItemListRowComponent_ng_template_0_div_10_div_1_Template, 2, 1, "div", 26);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.item.basePrice);
  }
}
function CartItemListRowComponent_ng_template_0_ng_template_12_Template(rf, ctx) {
}
function CartItemListRowComponent_ng_template_0_ng_template_13_Template(rf, ctx) {
}
function CartItemListRowComponent_ng_template_0_15_ng_template_0_Template(rf, ctx) {
}
function CartItemListRowComponent_ng_template_0_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, CartItemListRowComponent_ng_template_0_15_ng_template_0_Template, 0, 0, "ng-template", 27);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("cxOutlet", ctx_r0.CartOutlets.ITEM_DELIVERY_DETAILS)("cxOutletContext", \u0275\u0275pureFunction2(2, _c9, ctx_r0.item, ctx_r0.options.cartType));
  }
}
function CartItemListRowComponent_ng_template_0_ng_container_16_div_1_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 31);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const variant_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", variant_r2.name, ": ", variant_r2.value, " ");
  }
}
function CartItemListRowComponent_ng_template_0_ng_container_16_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 29);
    \u0275\u0275template(1, CartItemListRowComponent_ng_template_0_ng_container_16_div_1_div_1_Template, 2, 2, "div", 30);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const variant_r2 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", variant_r2.name && variant_r2.value);
  }
}
function CartItemListRowComponent_ng_template_0_ng_container_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, CartItemListRowComponent_ng_template_0_ng_container_16_div_1_Template, 2, 1, "div", 28);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r0.item.product == null ? null : ctx_r0.item.product.baseOptions[0] == null ? null : ctx_r0.item.product.baseOptions[0].selected == null ? null : ctx_r0.item.product.baseOptions[0].selected.variantOptionQualifiers);
  }
}
function CartItemListRowComponent_ng_template_0_td_17_div_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 18);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.item.basePrice == null ? null : ctx_r0.item.basePrice.formattedValue, " ");
  }
}
function CartItemListRowComponent_ng_template_0_td_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 32)(1, "div", 33);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "cxTranslate");
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, CartItemListRowComponent_ng_template_0_td_17_div_4_Template, 2, 1, "div", 26);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 2, "cartItems.itemPrice"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r0.item.basePrice);
  }
}
function CartItemListRowComponent_ng_template_0_ng_container_25_div_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 18);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.item.product == null ? null : ctx_r0.item.product.stock.stockLevel, " ");
  }
}
function CartItemListRowComponent_ng_template_0_ng_container_25_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 18);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "cxTranslate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "saveForLaterItems.forceInStock"), " ");
  }
}
function CartItemListRowComponent_ng_template_0_ng_container_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "td", 34)(2, "div", 33);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "cxTranslate");
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, CartItemListRowComponent_ng_template_0_ng_container_25_div_5_Template, 2, 1, "div", 35)(6, CartItemListRowComponent_ng_template_0_ng_container_25_ng_template_6_Template, 3, 3, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const forceInstock_r3 = \u0275\u0275reference(7);
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 3, "saveForLaterItems.stock"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", (ctx_r0.item.product == null ? null : ctx_r0.item.product.stock == null ? null : ctx_r0.item.product.stock.stockLevel) >= 0)("ngIfElse", forceInstock_r3);
  }
}
function CartItemListRowComponent_ng_template_0_td_26_ng_container_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function CartItemListRowComponent_ng_template_0_td_26_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, CartItemListRowComponent_ng_template_0_td_26_ng_container_1_ng_container_1_Template, 1, 0, "ng-container", 39);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r0.options.optionalBtn)("ngTemplateOutletContext", \u0275\u0275pureFunction1(6, _c3, \u0275\u0275pureFunction3(2, _c10, ctx_r0.quantityControl.disabled, ctx_r0.item, ctx_r0.options)));
  }
}
function CartItemListRowComponent_ng_template_0_td_26_span_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 40);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "cxTranslate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "addToCart.outOfStock"), " ");
  }
}
function CartItemListRowComponent_ng_template_0_td_26_button_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 41);
    \u0275\u0275pipe(1, "cxTranslate");
    \u0275\u0275pipe(2, "cxTranslate");
    \u0275\u0275listener("click", function CartItemListRowComponent_ng_template_0_td_26_button_3_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.removeItem());
    });
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "cxTranslate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275property("cxAtMessage", \u0275\u0275pipeBind1(1, 4, "cartItems.itemRemoved"))("disabled", ctx_r0.quantityControl.disabled);
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(2, 6, "addToCart.removeFromCart"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 8, "common.remove"), " ");
  }
}
function CartItemListRowComponent_ng_template_0_td_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 36);
    \u0275\u0275template(1, CartItemListRowComponent_ng_template_0_td_26_ng_container_1_Template, 2, 8, "ng-container", 14)(2, CartItemListRowComponent_ng_template_0_td_26_span_2_Template, 3, 3, "span", 37)(3, CartItemListRowComponent_ng_template_0_td_26_button_3_Template, 5, 10, "button", 38);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.isProductOutOfStock(ctx_r0.item.product));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.isProductOutOfStock(ctx_r0.item.product));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.readonly);
  }
}
function CartItemListRowComponent_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 3);
    \u0275\u0275template(1, CartItemListRowComponent_ng_template_0_ng_template_1_Template, 0, 0, "ng-template", 2);
    \u0275\u0275element(2, "cx-cart-item-validation-warning", 4);
    \u0275\u0275elementStart(3, "div", 5)(4, "a", 6);
    \u0275\u0275pipe(5, "cxUrl");
    \u0275\u0275element(6, "cx-media", 7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 8);
    \u0275\u0275template(8, CartItemListRowComponent_ng_template_0_div_8_Template, 4, 6, "div", 9)(9, CartItemListRowComponent_ng_template_0_div_9_Template, 3, 4, "div", 10)(10, CartItemListRowComponent_ng_template_0_div_10_Template, 2, 1, "div", 11);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div", 12);
    \u0275\u0275template(12, CartItemListRowComponent_ng_template_0_ng_template_12_Template, 0, 0, "ng-template", 2)(13, CartItemListRowComponent_ng_template_0_ng_template_13_Template, 0, 0, "ng-template", 2);
    \u0275\u0275element(14, "cx-promotions", 13);
    \u0275\u0275template(15, CartItemListRowComponent_ng_template_0_15_Template, 1, 5, null, 14);
    \u0275\u0275elementEnd();
    \u0275\u0275template(16, CartItemListRowComponent_ng_template_0_ng_container_16_Template, 2, 1, "ng-container", 14);
    \u0275\u0275elementEnd();
    \u0275\u0275template(17, CartItemListRowComponent_ng_template_0_td_17_Template, 5, 4, "td", 15);
    \u0275\u0275elementStart(18, "td", 16)(19, "div", 17);
    \u0275\u0275pipe(20, "cxTranslate");
    \u0275\u0275text(21);
    \u0275\u0275pipe(22, "cxTranslate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "div", 18);
    \u0275\u0275element(24, "cx-item-counter", 19);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(25, CartItemListRowComponent_ng_template_0_ng_container_25_Template, 8, 5, "ng-container", 20)(26, CartItemListRowComponent_ng_template_0_td_26_Template, 4, 3, "td", 21);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    const total_r5 = \u0275\u0275reference(2);
    \u0275\u0275advance();
    \u0275\u0275property("cxOutlet", ctx_r0.CartOutlets.ITEM_CONFIGURATOR_ISSUES);
    \u0275\u0275advance();
    \u0275\u0275property("code", ctx_r0.item.product == null ? null : ctx_r0.item.product.code);
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", \u0275\u0275pipeBind1(5, 24, \u0275\u0275pureFunction1(30, _c1, ctx_r0.item.product)));
    \u0275\u0275advance(2);
    \u0275\u0275property("container", ctx_r0.item.product == null ? null : ctx_r0.item.product.images == null ? null : ctx_r0.item.product.images.PRIMARY);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r0.item.product == null ? null : ctx_r0.item.product.name);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.item.product == null ? null : ctx_r0.item.product.code);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.item.basePrice);
    \u0275\u0275advance(2);
    \u0275\u0275property("cxOutlet", ctx_r0.CartOutlets.ITEM_DETAILS);
    \u0275\u0275advance();
    \u0275\u0275property("cxOutlet", ctx_r0.CartOutlets.ITEM_BUNDLE_DETAILS);
    \u0275\u0275advance();
    \u0275\u0275property("promotions", ctx_r0.item.promotions);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.readonly);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.item.product == null ? null : ctx_r0.item.product.baseOptions == null ? null : ctx_r0.item.product.baseOptions.length);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.item.basePrice);
    \u0275\u0275advance(2);
    \u0275\u0275propertyInterpolate("title", \u0275\u0275pipeBind1(20, 26, "cartItems.quantityTitle"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(22, 28, "cartItems.quantity"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("readonly-value", ctx_r0.readonly);
    \u0275\u0275advance();
    \u0275\u0275property("control", ctx_r0.quantityControl)("readonly", !ctx_r0.item.updateable || ctx_r0.readonly || ctx_r0.options.isSaveForLater)("max", ctx_r0.item.product == null ? null : ctx_r0.item.product.stock == null ? null : ctx_r0.item.product.stock.stockLevel)("allowZero", true);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.options.isSaveForLater)("ngIfElse", total_r5);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (!ctx_r0.readonly || ctx_r0.options.isSaveForLater || ctx_r0.options.displayAddToCart) && ctx_r0.item.updateable);
  }
}
function CartItemListRowComponent_ng_template_1_td_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 34)(1, "div", 33);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "cxTranslate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 18);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 2, "cartItems.total"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.item.totalPrice.formattedValue);
  }
}
function CartItemListRowComponent_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, CartItemListRowComponent_ng_template_1_td_0_Template, 6, 4, "td", 42);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("ngIf", ctx_r0.item.totalPrice);
  }
}
function AppliedCouponsComponent_div_0_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "div", 4);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "cxTranslate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 1, "voucher.vouchersApplied"), " ");
  }
}
function AppliedCouponsComponent_div_0_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5)(1, "span", 6);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const voucher_r1 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(voucher_r1.voucherCode);
  }
}
function AppliedCouponsComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275template(1, AppliedCouponsComponent_div_0_div_1_Template, 4, 3, "div", 2);
    \u0275\u0275elementContainerStart(2);
    \u0275\u0275template(3, AppliedCouponsComponent_div_0_div_3_Template, 3, 1, "div", 3);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.sortedVouchers.length > 0);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r1.sortedVouchers);
  }
}
function AppliedCouponsComponent_ng_template_1_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 9)(1, "div", 10)(2, "span", 11);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 12);
    \u0275\u0275pipe(5, "cxTranslate");
    \u0275\u0275listener("click", function AppliedCouponsComponent_ng_template_1_div_2_Template_button_click_4_listener() {
      const voucher_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.removeVoucher(voucher_r4.voucherCode));
    });
    \u0275\u0275elementStart(6, "span", 13);
    \u0275\u0275element(7, "cx-icon", 14);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const voucher_r4 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(voucher_r4.voucherCode);
    \u0275\u0275advance();
    \u0275\u0275classProp("disabled", ctx_r1.cartIsLoading);
    \u0275\u0275property("disabled", ctx_r1.cartIsLoading);
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(5, 6, "common.close"));
    \u0275\u0275advance(3);
    \u0275\u0275property("type", ctx_r1.iconTypes.CLOSE);
  }
}
function AppliedCouponsComponent_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7);
    \u0275\u0275elementContainerStart(1);
    \u0275\u0275template(2, AppliedCouponsComponent_ng_template_1_div_2_Template, 8, 8, "div", 8);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r1.sortedVouchers);
  }
}
function CartCouponComponent_ng_container_0_ng_container_18_div_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 14)(1, "button", 15);
    \u0275\u0275pipe(2, "async");
    \u0275\u0275pipe(3, "async");
    \u0275\u0275listener("click", function CartCouponComponent_ng_container_0_ng_container_18_div_9_Template_button_click_1_listener() {
      const coupon_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.applyCustomerCoupon(coupon_r4.couponId));
    });
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const coupon_r4 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275classProp("disabled", \u0275\u0275pipeBind1(2, 4, ctx_r1.cartIsLoading$));
    \u0275\u0275property("disabled", \u0275\u0275pipeBind1(3, 6, ctx_r1.cartIsLoading$));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", coupon_r4.couponId, " ");
  }
}
function CartCouponComponent_ng_container_0_ng_container_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 9)(2, "div", 10);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "cxTranslate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 11);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "cxTranslate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 12);
    \u0275\u0275template(9, CartCouponComponent_ng_container_0_ng_container_18_div_9_Template, 5, 8, "div", 13);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 3, "voucher.availableCoupons"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(7, 5, "voucher.availableCouponsLabel"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r1.applicableCoupons);
  }
}
function CartCouponComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 1)(2, "form", 2);
    \u0275\u0275listener("ngSubmit", function CartCouponComponent_ng_container_0_Template_form_ngSubmit_2_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.applyVoucher());
    });
    \u0275\u0275elementStart(3, "label", 3);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "cxTranslate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 4);
    \u0275\u0275element(7, "input", 5);
    \u0275\u0275pipe(8, "cxTranslate");
    \u0275\u0275pipe(9, "cxTranslate");
    \u0275\u0275elementStart(10, "button", 6);
    \u0275\u0275pipe(11, "async");
    \u0275\u0275pipe(12, "async");
    \u0275\u0275text(13);
    \u0275\u0275pipe(14, "cxTranslate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(15, "cx-form-errors", 7);
    \u0275\u0275elementEnd()()();
    \u0275\u0275element(16, "cx-applied-coupons", 8);
    \u0275\u0275pipe(17, "async");
    \u0275\u0275template(18, CartCouponComponent_ng_container_0_ng_container_18_Template, 10, 7, "ng-container", 0);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const cart_r5 = ctx.ngIf;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("formGroup", ctx_r1.couponForm);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(5, 13, "voucher.coupon"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275propertyInterpolate("placeholder", \u0275\u0275pipeBind1(8, 15, "voucher.placeholder"));
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(9, 17, "voucher.couponLabel"));
    \u0275\u0275advance(3);
    \u0275\u0275classProp("disabled", \u0275\u0275pipeBind1(11, 19, ctx_r1.cartIsLoading$));
    \u0275\u0275property("disabled", \u0275\u0275pipeBind1(12, 21, ctx_r1.cartIsLoading$));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(14, 23, "voucher.apply"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("control", ctx_r1.couponForm.get("couponCode"));
    \u0275\u0275advance();
    \u0275\u0275property("vouchers", cart_r5.appliedVouchers)("cartIsLoading", \u0275\u0275pipeBind1(17, 25, ctx_r1.cartIsLoading$))("isReadOnly", false);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.applicableCoupons && ctx_r1.applicableCoupons.length > 0);
  }
}
function CartItemListComponent_thead_4_ng_container_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "th", 10);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "cxTranslate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 1, "saveForLaterItems.stock"), " ");
  }
}
function CartItemListComponent_thead_4_ng_container_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "th", 11);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "cxTranslate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 1, "cartItems.actions"), " ");
  }
}
function CartItemListComponent_thead_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "thead")(1, "tr", 6)(2, "th", 7);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "cxTranslate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "th", 8);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "cxTranslate");
    \u0275\u0275elementEnd();
    \u0275\u0275template(8, CartItemListComponent_thead_4_ng_container_8_Template, 4, 3, "ng-container", 9)(9, CartItemListComponent_thead_4_ng_container_9_Template, 4, 3, "ng-container", 3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    const totalHeader_r2 = \u0275\u0275reference(8);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 5, "cartItems.item"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(7, 7, "cartItems.quantity"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r0.options.isSaveForLater)("ngIfElse", totalHeader_r2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.readonly || ctx_r0.options.isSaveForLater || ctx_r0.options.displayAddToCart);
  }
}
function CartItemListComponent_ng_container_6_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275element(1, "tr", 13);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const control_r3 = ctx.ngIf;
    const item_r4 = \u0275\u0275nextContext().$implicit;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275classProp("is-changed", control_r3.get("quantity").disabled);
    \u0275\u0275advance();
    \u0275\u0275property("item", item_r4)("quantityControl", control_r3.get("quantity"))("readonly", ctx_r0.readonly)("promotionLocation", ctx_r0.promotionLocation)("options", ctx_r0.options);
  }
}
function CartItemListComponent_ng_container_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, CartItemListComponent_ng_container_6_ng_container_1_Template, 2, 7, "ng-container", 12);
    \u0275\u0275pipe(2, "async");
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const item_r4 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", \u0275\u0275pipeBind1(2, 1, ctx_r0.getControl(item_r4)));
  }
}
function CartItemListComponent_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 10);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "cxTranslate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "cartItems.total"), " ");
  }
}
function OrderSummaryComponent_div_3_div_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5)(1, "div", 6);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "cxTranslate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 7);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 2, "orderCost.salesTax"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r0.cart.totalTax == null ? null : ctx_r0.cart.totalTax.formattedValue, " ");
  }
}
function OrderSummaryComponent_div_3_div_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "cxTranslate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", \u0275\u0275pipeBind1(2, 2, "orderCost.discount"), " ", ctx_r0.cart.totalDiscounts == null ? null : ctx_r0.cart.totalDiscounts.formattedValue, " ");
  }
}
function OrderSummaryComponent_div_3_ng_template_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "cxTranslate");
    \u0275\u0275pipe(3, "cxTranslate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", (ctx_r0.cart.totalPriceWithTax == null ? null : ctx_r0.cart.totalPriceWithTax.value) !== (ctx_r0.cart.totalPrice == null ? null : ctx_r0.cart.totalPrice.value) ? \u0275\u0275pipeBind1(2, 2, "orderCost.grossTax") : \u0275\u0275pipeBind1(3, 4, "orderCost.grossIncludeTax"), " ", ctx_r0.cart.totalTax == null ? null : ctx_r0.cart.totalTax.formattedValue, ". ");
  }
}
function OrderSummaryComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4)(1, "div", 5)(2, "div", 6);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "cxTranslate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 7);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 5)(8, "div", 6);
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "cxTranslate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 7);
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "cxTranslate");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(14, OrderSummaryComponent_div_3_div_14_Template, 6, 4, "div", 8);
    \u0275\u0275elementStart(15, "div", 9)(16, "div", 6);
    \u0275\u0275text(17);
    \u0275\u0275pipe(18, "cxTranslate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "div", 7);
    \u0275\u0275text(20);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(21, OrderSummaryComponent_div_3_div_21_Template, 3, 4, "div", 10)(22, OrderSummaryComponent_div_3_ng_template_22_Template, 4, 6, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const cartWithoutNet_r2 = \u0275\u0275reference(23);
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 9, "orderCost.subtotal"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r0.cart.subTotal == null ? null : ctx_r0.cart.subTotal.formattedValue, " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(10, 11, (ctx_r0.cart.deliveryCost == null ? null : ctx_r0.cart.deliveryCost.formattedValue) ? "orderCost.shipping" : "orderCost.estimatedShipping"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", (ctx_r0.cart.deliveryCost == null ? null : ctx_r0.cart.deliveryCost.formattedValue) ? ctx_r0.cart.deliveryCost == null ? null : ctx_r0.cart.deliveryCost.formattedValue : \u0275\u0275pipeBind1(13, 13, "orderCost.toBeDetermined"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r0.cart.net)("ngIfElse", cartWithoutNet_r2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(18, 15, "orderCost.total"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r0.cart.totalPriceWithTax == null ? null : ctx_r0.cart.totalPriceWithTax.formattedValue, " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (ctx_r0.cart.totalDiscounts == null ? null : ctx_r0.cart.totalDiscounts.value) > 0);
  }
}
function AddToCartComponent_form_0_div_1_cx_item_counter_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "cx-item-counter", 9);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("max", ctx_r1.maxQuantity)("control", ctx_r1.addToCartForm.get("quantity"));
  }
}
function AddToCartComponent_form_0_div_1_span_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.getInventory());
  }
}
function AddToCartComponent_form_0_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5)(1, "label");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "cxTranslate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 6);
    \u0275\u0275template(5, AddToCartComponent_form_0_div_1_cx_item_counter_5_Template, 1, 2, "cx-item-counter", 7);
    \u0275\u0275elementStart(6, "span", 8);
    \u0275\u0275template(7, AddToCartComponent_form_0_div_1_span_7_Template, 2, 1, "span", 3);
    \u0275\u0275pipe(8, "async");
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "cxTranslate");
    \u0275\u0275pipe(11, "cxTranslate");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 4, "addToCart.quantity"));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r1.hasStock);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", \u0275\u0275pipeBind1(8, 6, ctx_r1.showInventory$));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.hasStock ? \u0275\u0275pipeBind1(10, 8, "addToCart.inStock") : \u0275\u0275pipeBind1(11, 10, "addToCart.outOfStock"), "");
  }
}
function AddToCartComponent_form_0_ng_container_2_ng_template_1_Template(rf, ctx) {
}
function AddToCartComponent_form_0_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, AddToCartComponent_form_0_ng_container_2_ng_template_1_Template, 0, 0, "ng-template", 10);
    \u0275\u0275twoWayListener("cxComponentRefChange", function AddToCartComponent_form_0_ng_container_2_Template_ng_template_cxComponentRefChange_1_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.pickupOptionCompRef, $event) || (ctx_r1.pickupOptionCompRef = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("cxOutlet", ctx_r1.CartOutlets.ADD_TO_CART_PICKUP_OPTION);
    \u0275\u0275twoWayProperty("cxComponentRef", ctx_r1.pickupOptionCompRef);
  }
}
function AddToCartComponent_form_0_button_3_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 14);
    \u0275\u0275element(1, "cx-icon", 15);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("type", ctx_r1.iconTypes.REPEAT);
  }
}
function AddToCartComponent_form_0_button_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "button", 11);
    \u0275\u0275template(1, AddToCartComponent_form_0_button_3_span_1_Template, 2, 1, "span", 12);
    \u0275\u0275pipe(2, "cxTranslate");
    \u0275\u0275elementStart(3, "span", 13);
    \u0275\u0275pipe(4, "cxTranslate");
    \u0275\u0275pipe(5, "cxTranslate");
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "cxTranslate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_6_0;
    let tmp_7_0;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngClass", (ctx_r1.options == null ? null : ctx_r1.options.displayAddToCart) ? "btn btn-tertiary" : "btn btn-primary btn-block")("disabled", ctx_r1.quantity <= 0 || ctx_r1.quantity > ctx_r1.maxQuantity);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (ctx_r1.options == null ? null : ctx_r1.options.addToCartString) === \u0275\u0275pipeBind1(2, 6, "addToCart.buyItAgain"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", (ctx_r1.options == null ? null : ctx_r1.options.addToCartString) === \u0275\u0275pipeBind1(4, 8, "addToCart.buyItAgain") ? "buyItAgainLink" : "");
    \u0275\u0275attribute("aria-label", (tmp_6_0 = ctx_r1.options == null ? null : ctx_r1.options.addToCartString) !== null && tmp_6_0 !== void 0 ? tmp_6_0 : \u0275\u0275pipeBind1(5, 10, "addToCart.addToCart"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", (tmp_7_0 = ctx_r1.options == null ? null : ctx_r1.options.addToCartString) !== null && tmp_7_0 !== void 0 ? tmp_7_0 : \u0275\u0275pipeBind1(7, 12, "addToCart.addToCart"), " ");
  }
}
function AddToCartComponent_form_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "form", 1);
    \u0275\u0275listener("submit", function AddToCartComponent_form_0_Template_form_submit_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.addToCart());
    });
    \u0275\u0275template(1, AddToCartComponent_form_0_div_1_Template, 12, 12, "div", 2)(2, AddToCartComponent_form_0_ng_container_2_Template, 2, 2, "ng-container", 3)(3, AddToCartComponent_form_0_button_3_Template, 8, 14, "button", 4);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("formGroup", ctx_r1.addToCartForm);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.showQuantity);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.hasStock);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.hasStock);
  }
}
var _c11 = ["element"];
function ClearCartComponent_ng_container_0_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 3)(1, "button", 4, 0);
    \u0275\u0275listener("click", function ClearCartComponent_ng_container_0_div_1_Template_button_click_1_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.openDialog($event));
    });
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "cxTranslate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 1, "clearCart.clearCart"), " ");
  }
}
function ClearCartComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, ClearCartComponent_ng_container_0_div_1_Template, 5, 3, "div", 2);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const cart_r3 = ctx.ngIf;
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", cart_r3.totalItems > 0);
  }
}
function ClearCartDialogComponent_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275element(1, "div", 4);
    \u0275\u0275pipe(2, "cxTranslate");
    \u0275\u0275elementStart(3, "div", 5)(4, "div", 6);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "cxTranslate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 7);
    \u0275\u0275pipe(8, "cxTranslate");
    \u0275\u0275listener("click", function ClearCartDialogComponent_ng_container_2_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.close("Close Clear Cart Dialog"));
    });
    \u0275\u0275elementStart(9, "span", 8);
    \u0275\u0275element(10, "cx-icon", 9);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(11, "div", 10)(12, "div", 11);
    \u0275\u0275text(13);
    \u0275\u0275pipe(14, "cxTranslate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "div", 12);
    \u0275\u0275text(16);
    \u0275\u0275pipe(17, "cxTranslate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "div")(19, "div", 13)(20, "button", 14);
    \u0275\u0275listener("click", function ClearCartDialogComponent_ng_container_2_Template_button_click_20_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.close("Cancel Clear Cart"));
    });
    \u0275\u0275text(21);
    \u0275\u0275pipe(22, "cxTranslate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "button", 15);
    \u0275\u0275listener("click", function ClearCartDialogComponent_ng_container_2_Template_button_click_23_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.clearCart());
    });
    \u0275\u0275text(24);
    \u0275\u0275pipe(25, "cxTranslate");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(2, 8, "common.loaded"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(6, 10, "clearCart.clearCart"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(8, 12, "common.close"));
    \u0275\u0275advance(3);
    \u0275\u0275property("type", ctx_r2.iconTypes.CLOSE);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(14, 14, "clearCart.allItemsWillBeRemoved"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(17, 16, "clearCart.areYouSureToClearCart"), " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(22, 18, "common.cancel"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(25, 20, "clearCart.clearCart"), " ");
  }
}
function ClearCartDialogComponent_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5)(1, "div", 6);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "cxTranslate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 16);
    \u0275\u0275element(5, "cx-spinner");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 1, "clearCart.clearingCart"), " ");
  }
}
function CartValidationWarningsComponent_ng_container_0_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 2)(1, "span", 3);
    \u0275\u0275element(2, "cx-icon", 4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span")(4, "a", 5);
    \u0275\u0275pipe(5, "cxUrl");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "cxTranslate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "button", 6);
    \u0275\u0275listener("click", function CartValidationWarningsComponent_ng_container_0_div_1_Template_button_click_9_listener() {
      \u0275\u0275restoreView(_r1);
      const cartModification_r2 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.removeMessage(cartModification_r2));
    });
    \u0275\u0275element(10, "cx-icon", 4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const cartModification_r2 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("type", ctx_r2.iconTypes.ERROR);
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", \u0275\u0275pipeBind1(5, 5, \u0275\u0275pureFunction1(9, _c1, cartModification_r2.entry.product)));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", cartModification_r2.entry.product.name, " ");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(8, 7, "validation.productOutOfStock"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("type", ctx_r2.iconTypes.CLOSE);
  }
}
function CartValidationWarningsComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, CartValidationWarningsComponent_ng_container_0_div_1_Template, 11, 11, "div", 1);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const cartModification_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.visibleWarnings[cartModification_r2.entry.product.code]);
  }
}
var _c12 = (a0) => ({
  code: a0
});
var _c13 = (a0) => ({
  isSaveForLater: false,
  optionalBtn: a0
});
function CartDetailsComponent_ng_container_0_ng_container_1_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3);
    \u0275\u0275element(1, "cx-cart-validation-warnings");
    \u0275\u0275elementStart(2, "h2", 4);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "cxTranslate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(5, "cx-promotions", 5)(6, "cx-cart-item-list", 6);
    \u0275\u0275pipe(7, "async");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const entries_r1 = \u0275\u0275nextContext().ngIf;
    const cart_r2 = \u0275\u0275nextContext().ngIf;
    const ctx_r2 = \u0275\u0275nextContext();
    const saveForLaterBtn_r4 = \u0275\u0275reference(3);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(4, 6, "cartDetails.cartName", \u0275\u0275pureFunction1(11, _c12, cart_r2.code)), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("promotions", (cart_r2.appliedOrderPromotions || \u0275\u0275pureFunction0(13, _c5)).concat(cart_r2.potentialOrderPromotions || \u0275\u0275pureFunction0(14, _c5)));
    \u0275\u0275advance();
    \u0275\u0275property("items", entries_r1)("cartIsLoading", !\u0275\u0275pipeBind1(7, 9, ctx_r2.cartLoaded$))("promotionLocation", ctx_r2.promotionLocation)("options", \u0275\u0275pureFunction1(15, _c13, saveForLaterBtn_r4));
  }
}
function CartDetailsComponent_ng_container_0_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, CartDetailsComponent_ng_container_0_ng_container_1_div_1_Template, 8, 17, "div", 2);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const cart_r2 = \u0275\u0275nextContext().ngIf;
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", cart_r2.totalItems > 0);
  }
}
function CartDetailsComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, CartDetailsComponent_ng_container_0_ng_container_1_Template, 2, 1, "ng-container", 1);
    \u0275\u0275pipe(2, "async");
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", \u0275\u0275pipeBind1(2, 1, ctx_r2.entries$));
  }
}
function CartDetailsComponent_ng_template_2_button_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 8);
    \u0275\u0275listener("click", function CartDetailsComponent_ng_template_2_button_0_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_ir6 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.saveForLater(ctx_ir6.item));
    });
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "cxTranslate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_ir6 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("disabled", ctx_ir6.loading);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 2, "saveForLaterItems.saveForLater"), " ");
  }
}
function CartDetailsComponent_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, CartDetailsComponent_ng_template_2_button_0_Template, 3, 4, "button", 7);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("ngIf", ctx_r2.selectiveCartEnabled);
  }
}
function CartTotalsComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275element(1, "cx-order-summary", 1);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const cart_r1 = ctx.ngIf;
    \u0275\u0275advance();
    \u0275\u0275property("cart", cart_r1);
  }
}
var _c14 = (a0) => ({
  isSaveForLater: true,
  optionalBtn: a0
});
function SaveForLaterComponent_ng_container_0_p_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "p", 3);
  }
  if (rf & 2) {
    const data_r1 = ctx.ngIf;
    \u0275\u0275property("innerHTML", data_r1.content, \u0275\u0275sanitizeHtml);
  }
}
function SaveForLaterComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, SaveForLaterComponent_ng_container_0_p_1_Template, 1, 1, "p", 2);
    \u0275\u0275pipe(2, "async");
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", \u0275\u0275pipeBind1(2, 1, ctx_r1.data$));
  }
}
function SaveForLaterComponent_ng_container_2_ng_container_1_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5)(1, "div", 6);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "cxTranslate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(4, "cx-cart-item-list", 7);
    \u0275\u0275pipe(5, "async");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const entries_r3 = \u0275\u0275nextContext().ngIf;
    const saveForLater_r4 = \u0275\u0275nextContext().ngIf;
    const ctx_r1 = \u0275\u0275nextContext();
    const moveToCartBtn_r5 = \u0275\u0275reference(5);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(3, 6, "saveForLaterItems.itemTotal", \u0275\u0275pureFunction1(11, _c4, saveForLater_r4.totalItems)), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("items", entries_r3)("readonly", false)("cartIsLoading", !\u0275\u0275pipeBind1(5, 9, ctx_r1.cartLoaded$))("promotionLocation", ctx_r1.CartLocation.SaveForLater)("options", \u0275\u0275pureFunction1(13, _c14, moveToCartBtn_r5));
  }
}
function SaveForLaterComponent_ng_container_2_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, SaveForLaterComponent_ng_container_2_ng_container_1_div_1_Template, 6, 15, "div", 4);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const saveForLater_r4 = \u0275\u0275nextContext().ngIf;
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", saveForLater_r4.totalItems > 0);
  }
}
function SaveForLaterComponent_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, SaveForLaterComponent_ng_container_2_ng_container_1_Template, 2, 1, "ng-container", 1);
    \u0275\u0275pipe(2, "async");
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", \u0275\u0275pipeBind1(2, 1, ctx_r1.entries$));
  }
}
function SaveForLaterComponent_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 8);
    \u0275\u0275listener("click", function SaveForLaterComponent_ng_template_4_Template_button_click_0_listener() {
      const ctx_ir7 = \u0275\u0275restoreView(_r6).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.moveToCart(ctx_ir7.item));
    });
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "cxTranslate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_ir7 = ctx.$implicit;
    \u0275\u0275property("disabled", ctx_ir7.loading);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 2, "saveForLaterItems.moveToCart"), " ");
  }
}
var _AddedToCartDialogEventListener = class _AddedToCartDialogEventListener {
  constructor(eventService, launchDialogService) {
    this.eventService = eventService;
    this.launchDialogService = launchDialogService;
    this.subscription = new Subscription();
    this.onAddToCart();
  }
  onAddToCart() {
    this.subscription.add(this.eventService.get(CartUiEventAddToCart).subscribe((event) => {
      this.openModal(event);
    }));
    this.subscription.add(this.eventService.get(CartAddEntryFailEvent).subscribe((event) => {
      this.closeModal(event);
    }));
  }
  openModal(event) {
    const addToCartData = {
      productCode: event.productCode,
      quantity: event.quantity,
      numberOfEntriesBeforeAdd: event.numberOfEntriesBeforeAdd,
      pickupStoreName: event.pickupStoreName
    };
    const dialog = this.launchDialogService.openDialog("ADDED_TO_CART", void 0, void 0, addToCartData);
    if (dialog) {
      dialog.pipe(take(1)).subscribe();
    }
  }
  closeModal(reason) {
    this.launchDialogService.closeDialog(reason);
  }
  ngOnDestroy() {
    this.subscription?.unsubscribe();
  }
};
_AddedToCartDialogEventListener.\u0275fac = function AddedToCartDialogEventListener_Factory(t) {
  return new (t || _AddedToCartDialogEventListener)(\u0275\u0275inject(EventService), \u0275\u0275inject(LaunchDialogService));
};
_AddedToCartDialogEventListener.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
  token: _AddedToCartDialogEventListener,
  factory: _AddedToCartDialogEventListener.\u0275fac,
  providedIn: "root"
});
var AddedToCartDialogEventListener = _AddedToCartDialogEventListener;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AddedToCartDialogEventListener, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: EventService
  }, {
    type: LaunchDialogService
  }], null);
})();
var _CartItemContextSource = class _CartItemContextSource {
  constructor() {
    this.compact$ = new ReplaySubject(1);
    this.readonly$ = new ReplaySubject(1);
    this.item$ = new ReplaySubject(1);
    this.quantityControl$ = new ReplaySubject(1);
    this.location$ = new ReplaySubject(1);
    this.options$ = new ReplaySubject(1);
  }
};
_CartItemContextSource.\u0275fac = function CartItemContextSource_Factory(t) {
  return new (t || _CartItemContextSource)();
};
_CartItemContextSource.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
  token: _CartItemContextSource,
  factory: _CartItemContextSource.\u0275fac
});
var CartItemContextSource = _CartItemContextSource;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CartItemContextSource, [{
    type: Injectable
  }], null, null);
})();
var _CartItemValidationWarningComponent = class _CartItemValidationWarningComponent {
  constructor(cartValidationFacade) {
    this.cartValidationFacade = cartValidationFacade;
    this.iconTypes = ICON_TYPE;
    this.isVisible = true;
    this.cartModification$ = this.cartValidationFacade.getValidationResults().pipe(map((modificationList) => modificationList.find((modification) => modification.entry?.product?.code === this.code)));
  }
};
_CartItemValidationWarningComponent.\u0275fac = function CartItemValidationWarningComponent_Factory(t) {
  return new (t || _CartItemValidationWarningComponent)(\u0275\u0275directiveInject(CartValidationFacade));
};
_CartItemValidationWarningComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
  type: _CartItemValidationWarningComponent,
  selectors: [["cx-cart-item-validation-warning"]],
  inputs: {
    code: "code"
  },
  decls: 2,
  vars: 3,
  consts: [[4, "ngIf"], ["class", "alert alert-info", 4, "ngIf"], [1, "alert", "alert-info"], [1, "alert-icon"], [3, "type"], ["type", "button", 1, "close", 3, "click"]],
  template: function CartItemValidationWarningComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275template(0, CartItemValidationWarningComponent_ng_container_0_Template, 2, 1, "ng-container", 0);
      \u0275\u0275pipe(1, "async");
    }
    if (rf & 2) {
      \u0275\u0275property("ngIf", \u0275\u0275pipeBind1(1, 1, ctx.cartModification$));
    }
  },
  dependencies: [NgIf, IconComponent, AsyncPipe, TranslatePipe],
  encapsulation: 2,
  changeDetection: 0
});
var CartItemValidationWarningComponent = _CartItemValidationWarningComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CartItemValidationWarningComponent, [{
    type: Component,
    args: [{
      selector: "cx-cart-item-validation-warning",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: `<ng-container *ngIf="cartModification$ | async as cartModification">
  <div class="alert alert-info" *ngIf="isVisible">
    <span class="alert-icon">
      <cx-icon [type]="iconTypes.INFO"></cx-icon>
    </span>
    <span>
      {{
        'validation.' + cartModification.statusCode
          | cxTranslate
            : {
                quantity: cartModification.quantityAdded
              }
      }}
    </span>

    <button class="close" type="button" (click)="isVisible = !isVisible">
      <cx-icon [type]="iconTypes.CLOSE"></cx-icon>
    </button>
  </div>
</ng-container>
`
    }]
  }], () => [{
    type: CartValidationFacade
  }], {
    code: [{
      type: Input
    }]
  });
})();
var _CartItemComponent = class _CartItemComponent {
  constructor(cartItemContextSource) {
    this.cartItemContextSource = cartItemContextSource;
    this.compact = false;
    this.readonly = false;
    this.promotionLocation = PromotionLocation.ActiveCart;
    this.options = {
      isSaveForLater: false,
      optionalBtn: null,
      displayAddToCart: false
    };
    this.iconTypes = ICON_TYPE;
    this.CartOutlets = CartOutlets;
  }
  ngOnChanges(changes) {
    if (changes?.compact) {
      this.cartItemContextSource.compact$.next(this.compact);
    }
    if (changes?.readonly) {
      this.cartItemContextSource.readonly$.next(this.readonly);
    }
    if (changes?.item) {
      this.cartItemContextSource.item$.next(this.item);
    }
    if (changes?.quantityControl) {
      this.cartItemContextSource.quantityControl$.next(this.quantityControl);
    }
    if (changes?.promotionLocation) {
      this.cartItemContextSource.location$.next(this.promotionLocation);
    }
    if (changes?.options) {
      this.cartItemContextSource.options$.next(this.options);
    }
  }
  isProductOutOfStock(product) {
    return product && product.stock && product.stock.stockLevelStatus === "outOfStock";
  }
  removeItem() {
    this.quantityControl.setValue(0);
    this.quantityControl.markAsDirty();
  }
};
_CartItemComponent.\u0275fac = function CartItemComponent_Factory(t) {
  return new (t || _CartItemComponent)(\u0275\u0275directiveInject(CartItemContextSource));
};
_CartItemComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
  type: _CartItemComponent,
  selectors: [["cx-cart-item"]],
  inputs: {
    compact: "compact",
    item: "item",
    readonly: "readonly",
    quantityControl: "quantityControl",
    promotionLocation: "promotionLocation",
    options: "options"
  },
  features: [\u0275\u0275ProvidersFeature([CartItemContextSource, {
    provide: CartItemContext,
    useExisting: CartItemContextSource
  }]), \u0275\u0275NgOnChangesFeature],
  decls: 1,
  vars: 1,
  consts: [["total", ""], ["forceInstock", ""], [3, "cxOutlet"], [3, "code"], [3, "ngClass"], [1, "col-2", "cx-image-container"], ["tabindex", "0", 3, "routerLink"], ["format", "cartIcon", 3, "container"], [1, "cx-info", "col-10"], [1, "cx-info-container", "row"], ["class", "cx-name", 4, "ngIf"], ["class", "cx-code", 4, "ngIf"], [4, "ngIf"], ["class", "cx-price", 3, "ngClass", 4, "ngIf"], [1, "cx-quantity", 3, "ngClass"], ["placement", "left", 1, "cx-label", 3, "ngClass", "title"], [1, "cx-value"], [3, "control", "readonly", "max", "allowZero"], [4, "ngIf", "ngIfElse"], ["class", "cx-availability col-12", 4, "ngIf"], [3, "promotions"], ["class", "cx-actions col-12", 4, "ngIf"], [1, "cx-name"], [1, "cx-link", 3, "routerLink"], [1, "cx-code"], ["class", "cx-property", 4, "ngFor", "ngForOf"], [1, "cx-property"], ["class", "cx-label", 4, "ngIf"], [1, "cx-label"], [1, "cx-price", 3, "ngClass"], [1, "cx-label", 3, "ngClass"], ["class", "cx-value", 4, "ngIf"], [1, "cx-total", 3, "ngClass"], ["class", "cx-value", 4, "ngIf", "ngIfElse"], [1, "cx-availability", "col-12"], [1, "cx-actions", "col-12"], [1, "col-md-3", "cx-remove-btn"], [1, "btn", "btn-tertiary", 3, "click", "cxAtMessage", "disabled"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], ["class", "cx-total", 3, "ngClass", 4, "ngIf"]],
  template: function CartItemComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275template(0, CartItemComponent_ng_template_0_Template, 29, 35, "ng-template", 2);
    }
    if (rf & 2) {
      \u0275\u0275property("cxOutlet", ctx.CartOutlets.ITEM);
    }
  },
  dependencies: [AtMessageDirective, CartItemValidationWarningComponent, NgClass, NgForOf, NgIf, NgTemplateOutlet, ItemCounterComponent, MediaComponent, OutletDirective, PromotionsComponent, RouterLink, TranslatePipe, UrlPipe],
  encapsulation: 2
});
var CartItemComponent = _CartItemComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CartItemComponent, [{
    type: Component,
    args: [{
      selector: "cx-cart-item",
      providers: [CartItemContextSource, {
        provide: CartItemContext,
        useExisting: CartItemContextSource
      }],
      template: `<!-- Item Start Outlet -->
<ng-template [cxOutlet]="CartOutlets.ITEM">
  <ng-template [cxOutlet]="CartOutlets.ITEM_CONFIGURATOR_ISSUES"></ng-template>
  <cx-cart-item-validation-warning
    [code]="item.product?.code"
  ></cx-cart-item-validation-warning>
  <div [ngClass]="compact ? 'cx-compact row' : 'row'">
    <!-- Item Image -->
    <div class="col-2 cx-image-container">
      <a
        [routerLink]="{ cxRoute: 'product', params: item.product } | cxUrl"
        tabindex="0"
      >
        <cx-media
          [container]="item.product?.images?.PRIMARY"
          format="cartIcon"
        ></cx-media>
      </a>
    </div>
    <!-- Item Information -->
    <div class="cx-info col-10">
      <div class="cx-info-container row">
        <!-- Item Description -->
        <div [ngClass]="compact ? '' : ' col-md-3 col-lg-3 col-xl-5'">
          <div *ngIf="item.product?.name" class="cx-name">
            <a
              class="cx-link"
              [routerLink]="
                { cxRoute: 'product', params: item.product } | cxUrl
              "
              ><h3>{{ item.product?.name }}</h3></a
            >
          </div>
          <div *ngIf="item.product?.code" class="cx-code">
            {{ 'cartItems.id' | cxTranslate }} {{ item.product?.code }}
          </div>

          <!-- Item Details Outlet -->
          <ng-template [cxOutlet]="CartOutlets.ITEM_DETAILS"> </ng-template>

          <!-- Variants -->
          <ng-container *ngIf="item.product?.baseOptions?.length">
            <div
              *ngFor="
                let variant of item.product?.baseOptions[0]?.selected
                  ?.variantOptionQualifiers
              "
              class="cx-property"
            >
              <div class="cx-label" *ngIf="variant.name && variant.value">
                {{ variant.name }}: {{ variant.value }}
              </div>
            </div>
          </ng-container>
        </div>
        <!-- Item Price -->
        <div
          *ngIf="item.basePrice"
          class="cx-price"
          [ngClass]="compact ? '' : ' col-md-3 col-lg-3 col-xl-2'"
        >
          <div
            class="cx-label"
            [ngClass]="compact ? '' : ' d-block d-md-none d-lg-none d-xl-none'"
          >
            {{ 'cartItems.itemPrice' | cxTranslate }}
          </div>
          <div *ngIf="item.basePrice" class="cx-value">
            {{ item.basePrice?.formattedValue }}
          </div>
        </div>
        <!-- Item Quantity -->
        <div class="cx-quantity" [ngClass]="compact ? '' : ' col-3'">
          <div
            class="cx-label"
            [ngClass]="compact ? '' : ' d-block d-md-none d-lg-none d-xl-none'"
            placement="left"
            title="{{ 'cartItems.quantityTitle' | cxTranslate }}"
          >
            {{ 'cartItems.quantity' | cxTranslate }}
          </div>
          <div class="cx-value" [class.readonly-value]="readonly">
            <cx-item-counter
              [control]="quantityControl"
              [readonly]="
                !item.updateable || readonly || options.isSaveForLater
              "
              [max]="item.product?.stock?.stockLevel"
              [allowZero]="true"
            >
            </cx-item-counter>
          </div>
        </div>
        <!-- Total -->
        <ng-container *ngIf="options.isSaveForLater; else total">
          <div
            class="cx-total"
            [ngClass]="compact ? '' : ' col-md-3 col-lg-3 col-xl-2'"
          >
            <div
              class="cx-label"
              [ngClass]="
                compact ? '' : ' d-block d-md-none d-lg-none d-xl-none'
              "
            >
              {{ 'saveForLaterItems.stock' | cxTranslate }}
            </div>
            <div
              *ngIf="item.product?.stock.stockLevel >= 0; else forceInstock"
              class="cx-value"
            >
              {{ item.product?.stock?.stockLevel }}
            </div>
            <ng-template #forceInstock>
              <div class="cx-value">
                {{ 'saveForLaterItems.forceInStock' | cxTranslate }}
              </div>
            </ng-template>
          </div>
        </ng-container>
      </div>
      <!-- Availability -->
      <div
        *ngIf="isProductOutOfStock(item.product)"
        class="cx-availability col-12"
      >
        {{ 'addToCart.outOfStock' | cxTranslate }}
      </div>

      <!-- Item Bundle Details Outlet -->
      <ng-template [cxOutlet]="CartOutlets.ITEM_BUNDLE_DETAILS"> </ng-template>

      <!-- Promotion -->

      <cx-promotions [promotions]="item.promotions"></cx-promotions>

      <!-- Actions -->
      <div
        *ngIf="(!readonly || options.isSaveForLater) && item.updateable"
        class="cx-actions col-12"
      >
        <ng-container *ngIf="!isProductOutOfStock(item.product)">
          <ng-container
            *ngTemplateOutlet="
              options.optionalBtn;
              context: {
                $implicit: { loading: quantityControl.disabled, item: item }
              }
            "
          ></ng-container>
        </ng-container>

        <div class="col-md-3 cx-remove-btn">
          <button
            (click)="removeItem()"
            [cxAtMessage]="'cartItems.itemRemoved' | cxTranslate"
            [disabled]="quantityControl.disabled"
            attr.aria-label="{{ 'addToCart.removeFromCart' | cxTranslate }}"
            class="btn btn-tertiary"
          >
            {{ 'common.remove' | cxTranslate }}
          </button>
        </div>
      </div>
    </div>
  </div>

  <ng-template #total>
    <div
      *ngIf="item.totalPrice"
      class="cx-total"
      [ngClass]="compact ? '' : ' col-md-3 col-xl-2'"
    >
      <div
        class="cx-label"
        [ngClass]="compact ? '' : ' d-block d-md-none d-lg-none d-xl-none'"
      >
        {{ 'cartItems.total' | cxTranslate }}
      </div>
      <div class="cx-value">{{ item.totalPrice.formattedValue }}</div>
    </div>
  </ng-template>
</ng-template>
`
    }]
  }], () => [{
    type: CartItemContextSource
  }], {
    compact: [{
      type: Input
    }],
    item: [{
      type: Input
    }],
    readonly: [{
      type: Input
    }],
    quantityControl: [{
      type: Input
    }],
    promotionLocation: [{
      type: Input
    }],
    options: [{
      type: Input
    }]
  });
})();
var _AddedToCartDialogComponent = class _AddedToCartDialogComponent {
  handleClick(event) {
    if (event.target.tagName === this.el.nativeElement.tagName) {
      this.dismissModal("Cross click");
    }
  }
  constructor(activeCartFacade, launchDialogService, routingService, el) {
    this.activeCartFacade = activeCartFacade;
    this.launchDialogService = launchDialogService;
    this.routingService = routingService;
    this.el = el;
    this.iconTypes = ICON_TYPE;
    this.cart$ = this.activeCartFacade.getActive();
    this.loaded$ = this.activeCartFacade.isStable();
    this.promotionLocation = PromotionLocation.ActiveCart;
    this.quantity = 0;
    this.form = new UntypedFormGroup({});
    this.focusConfig = {
      trap: true,
      block: true,
      autofocus: "button",
      focusOnEscape: true
    };
    this.subscription = new Subscription();
  }
  ngOnInit() {
    this.subscription.add(this.launchDialogService.data$.subscribe((dialogData) => {
      this.init(dialogData.productCode, dialogData.quantity, dialogData.numberOfEntriesBeforeAdd, dialogData.pickupStoreName);
    }));
    this.subscription.add(this.routingService.getRouterState().pipe(filter((state) => !!state.nextState)).subscribe(() => this.dismissModal("dismiss")));
  }
  /**
   * Returns an observable formControl with the quantity of the cartEntry,
   * but also updates the entry in case of a changed value.
   * The quantity can be set to zero in order to remove the entry.
   */
  getQuantityControl() {
    if (!this.quantityControl$) {
      this.quantityControl$ = this.entry$.pipe(filter((e) => !!e), map((entry) => this.getQuantityFormControl(entry)), switchMap(() => this.form.valueChanges.pipe(
        // eslint-disable-next-line import/no-deprecated
        startWith(null),
        tap((valueChange) => {
          if (valueChange) {
            this.activeCartFacade.updateEntry(valueChange.entryNumber, valueChange.quantity);
            if (valueChange.quantity === 0) {
              this.dismissModal("Removed");
            }
          } else {
            this.form.markAsPristine();
          }
        })
      )), map(() => this.form.get("quantity")), shareReplay({
        bufferSize: 1,
        refCount: true
      }));
    }
    return this.quantityControl$;
  }
  init(productCode, quantity, numberOfEntriesBeforeAdd, pickupStoreName) {
    this.entry$ = this.activeCartFacade.getLastEntry(productCode);
    this.quantity = quantity;
    this.addedEntryWasMerged$ = this.getAddedEntryWasMerged(numberOfEntriesBeforeAdd);
    this.pickupStoreName = pickupStoreName;
  }
  getAddedEntryWasMerged(numberOfEntriesBeforeAdd) {
    return this.loaded$.pipe(filter((loaded) => loaded), switchMap(() => this.activeCartFacade.getEntries()), map((entries) => entries.length === numberOfEntriesBeforeAdd));
  }
  /**
   * Adds quantity and entryNumber form controls to the FormGroup.
   * Returns quantity form control.
   */
  getQuantityFormControl(entry) {
    if (!this.form.get("quantity")) {
      const quantity = new UntypedFormControl(entry?.quantity, {
        updateOn: "blur"
      });
      this.form.addControl("quantity", quantity);
      const entryNumber = new UntypedFormControl(entry?.entryNumber);
      this.form.addControl("entryNumber", entryNumber);
    } else {
      this.form.get("quantity")?.setValue(entry?.quantity);
    }
    return this.form.get("quantity");
  }
  dismissModal(reason) {
    this.launchDialogService.closeDialog(reason);
  }
  ngOnDestroy() {
    this.subscription?.unsubscribe();
  }
};
_AddedToCartDialogComponent.\u0275fac = function AddedToCartDialogComponent_Factory(t) {
  return new (t || _AddedToCartDialogComponent)(\u0275\u0275directiveInject(ActiveCartFacade), \u0275\u0275directiveInject(LaunchDialogService), \u0275\u0275directiveInject(RoutingService), \u0275\u0275directiveInject(ElementRef));
};
_AddedToCartDialogComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
  type: _AddedToCartDialogComponent,
  selectors: [["cx-added-to-cart-dialog"]],
  hostBindings: function AddedToCartDialogComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275listener("click", function AddedToCartDialogComponent_click_HostBindingHandler($event) {
        return ctx.handleClick($event);
      });
    }
  },
  decls: 11,
  vars: 12,
  consts: [["loading", ""], [1, "cx-modal-container", 3, "esc", "cxFocus"], [1, "cx-modal-content"], [4, "ngIf", "ngIfElse"], ["aria-live", "polite", "aria-atomic", "true", 1, "cx-visually-hidden"], [1, "cx-dialog-header", "modal-header"], [1, "cx-dialog-title", "modal-title"], ["type", "button", 1, "close", 3, "click"], ["aria-hidden", "true"], [3, "type"], ["class", "cx-dialog-body modal-body", 4, "ngIf"], [1, "cx-dialog-body", "modal-body"], [1, "cx-dialog-row"], [1, "cx-dialog-item", "col-sm-12", "col-md-6"], [3, "item", "compact", "quantityControl", "promotionLocation"], ["class", "cx-dialog-pickup-store", 4, "ngIf"], [1, "cx-dialog-separator", "col-sm-12", "d-xs-block", "d-sm-block", "d-md-none"], ["class", "cx-dialog-actions col-sm-12 col-md-6", 4, "ngIf"], [1, "cx-dialog-pickup-store"], [1, "cx-dialog-pickup-store-name"], [1, "cx-dialog-actions", "col-sm-12", "col-md-6"], [1, "cx-dialog-total"], [1, "cx-dialog-promotions"], [3, "promotions"], [1, "cx-dialog-buttons"], ["autofocus", "", 1, "btn", "btn-primary", 3, "click", "routerLink"], [1, "btn", "btn-secondary", 3, "click", "routerLink"], [1, "col-sm-12"]],
  template: function AddedToCartDialogComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "div", 1);
      \u0275\u0275listener("esc", function AddedToCartDialogComponent_Template_div_esc_0_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.dismissModal("Escape pressed"));
      });
      \u0275\u0275elementStart(1, "div", 2);
      \u0275\u0275template(2, AddedToCartDialogComponent_ng_container_2_Template, 13, 14, "ng-container", 3);
      \u0275\u0275pipe(3, "async");
      \u0275\u0275template(4, AddedToCartDialogComponent_ng_template_4_Template, 12, 7, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
      \u0275\u0275elementStart(6, "div", 4);
      \u0275\u0275text(7);
      \u0275\u0275pipe(8, "async");
      \u0275\u0275pipe(9, "cxTranslate");
      \u0275\u0275pipe(10, "cxTranslate");
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      const loading_r8 = \u0275\u0275reference(5);
      \u0275\u0275property("cxFocus", ctx.focusConfig);
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", \u0275\u0275pipeBind1(3, 4, ctx.loaded$))("ngIfElse", loading_r8);
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(8, 6, ctx.addedEntryWasMerged$) ? \u0275\u0275pipeBind1(9, 8, "addToCart.itemsIncrementedInYourCart") : \u0275\u0275pipeBind1(10, 10, "addToCart.itemsAddedToYourCart"), " ");
    }
  },
  dependencies: [NgIf, CartItemComponent, RouterLink, SpinnerComponent, PromotionsComponent, IconComponent, FocusDirective, AsyncPipe, UrlPipe, TranslatePipe],
  encapsulation: 2,
  changeDetection: 0
});
var AddedToCartDialogComponent = _AddedToCartDialogComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AddedToCartDialogComponent, [{
    type: Component,
    args: [{
      selector: "cx-added-to-cart-dialog",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: `<div
  class="cx-modal-container"
  [cxFocus]="focusConfig"
  (esc)="dismissModal('Escape pressed')"
>
  <div class="cx-modal-content">
    <!-- Modal Header -->
    <ng-container *ngIf="loaded$ | async; else loading">
      <div class="cx-dialog-header modal-header">
        <div class="cx-dialog-title modal-title">
          {{
            (addedEntryWasMerged$ | async)
              ? ('addToCart.itemsIncrementedInYourCart' | cxTranslate)
              : ('addToCart.itemsAddedToYourCart' | cxTranslate)
          }}
        </div>
        <button
          type="button"
          class="close"
          attr.aria-label="{{ 'addToCart.closeModal' | cxTranslate }}"
          (click)="dismissModal('Cross click')"
        >
          <span aria-hidden="true">
            <cx-icon [type]="iconTypes.CLOSE"></cx-icon>
          </span>
        </button>
      </div>

      <!-- Modal Body -->
      <div class="cx-dialog-body modal-body" *ngIf="entry$ | async as entry">
        <div class="cx-dialog-row">
          <div class="cx-dialog-item col-sm-12 col-md-6">
            <cx-cart-item
              [item]="entry"
              [compact]="true"
              [quantityControl]="getQuantityControl() | async"
              [promotionLocation]="promotionLocation"
            ></cx-cart-item>
            <div class="cx-dialog-pickup-store" *ngIf="pickupStoreName">
              {{ 'pickupOptionDialog.modalHeader' | cxTranslate }}:
              <span class="cx-dialog-pickup-store-name">{{
                pickupStoreName
              }}</span>
            </div>
          </div>
          <!-- Separator -->
          <div
            class="
              cx-dialog-separator
              col-sm-12
              d-xs-block d-sm-block d-md-none
            "
          ></div>
          <!-- Total container -->
          <div
            class="cx-dialog-actions col-sm-12 col-md-6"
            *ngIf="cart$ | async as cart"
          >
            <div class="cx-dialog-total">
              <div>
                {{
                  'cartItems.cartTotal'
                    | cxTranslate: { count: cart.deliveryItemsQuantity }
                }}
              </div>

              <div>{{ cart.subTotal?.formattedValue }}</div>
            </div>

            <!-- Promotions -->
            <div class="cx-dialog-promotions">
              <cx-promotions
                [promotions]="
                  (cart.appliedOrderPromotions || []).concat(
                    cart.potentialOrderPromotions || []
                  )
                "
              ></cx-promotions>
            </div>

            <!-- Actions -->
            <div class="cx-dialog-buttons">
              <a
                [class.disabled]="form.dirty"
                [routerLink]="{ cxRoute: 'cart' } | cxUrl"
                (click)="dismissModal('View Cart click')"
                class="btn btn-primary"
                autofocus
                >{{ 'addToCart.viewCart' | cxTranslate }}</a
              >
              <a
                [class.disabled]="form.dirty"
                [routerLink]="{ cxRoute: 'checkout' } | cxUrl"
                (click)="dismissModal('Proceed To Checkout click')"
                class="btn btn-secondary"
                >{{ 'addToCart.proceedToCheckout' | cxTranslate }}</a
              >
            </div>
          </div>
        </div>
      </div>
    </ng-container>

    <ng-template #loading>
      <div class="cx-dialog-header modal-header">
        <div class="cx-dialog-title modal-title">
          {{ 'addToCart.updatingCart' | cxTranslate }}
        </div>
        <button
          type="button"
          class="close"
          [attr.aria-label]="'common.close' | cxTranslate"
          (click)="dismissModal('Cross click')"
        >
          <span aria-hidden="true">
            <cx-icon [type]="iconTypes.CLOSE"></cx-icon>
          </span>
        </button>
      </div>
      <!-- Modal Body -->
      <div class="cx-dialog-body modal-body">
        <div class="cx-dialog-row">
          <div class="col-sm-12"><cx-spinner></cx-spinner></div>
        </div>
      </div>
    </ng-template>

    <!-- For screen reader purposes (not visual)-->
    <div class="cx-visually-hidden" aria-live="polite" aria-atomic="true">
      {{
        (addedEntryWasMerged$ | async)
          ? ('addToCart.itemsIncrementedInYourCart' | cxTranslate)
          : ('addToCart.itemsAddedToYourCart' | cxTranslate)
      }}
    </div>
  </div>
</div>
`
    }]
  }], () => [{
    type: ActiveCartFacade
  }, {
    type: LaunchDialogService
  }, {
    type: RoutingService
  }, {
    type: ElementRef
  }], {
    handleClick: [{
      type: HostListener,
      args: ["click", ["$event"]]
    }]
  });
})();
var _CartItemListRowComponent = class _CartItemListRowComponent extends CartItemComponent {
};
_CartItemListRowComponent.\u0275fac = /* @__PURE__ */ (() => {
  let \u0275CartItemListRowComponent_BaseFactory;
  return function CartItemListRowComponent_Factory(t) {
    return (\u0275CartItemListRowComponent_BaseFactory || (\u0275CartItemListRowComponent_BaseFactory = \u0275\u0275getInheritedFactory(_CartItemListRowComponent)))(t || _CartItemListRowComponent);
  };
})();
_CartItemListRowComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
  type: _CartItemListRowComponent,
  selectors: [["", "cx-cart-item-list-row", ""], ["cx-cart-item-list-row"]],
  features: [\u0275\u0275ProvidersFeature([CartItemContextSource, {
    provide: CartItemContext,
    useExisting: CartItemContextSource
  }]), \u0275\u0275InheritDefinitionFeature],
  attrs: _c8,
  decls: 3,
  vars: 1,
  consts: [["total", ""], ["forceInstock", ""], [3, "cxOutlet"], ["role", "cell"], [3, "code"], [1, "cx-table-item-container"], ["tabindex", "0", 3, "routerLink"], ["format", "cartIcon", 3, "container"], [1, "cx-info"], ["class", "cx-name", 4, "ngIf"], ["class", "cx-code", 4, "ngIf"], ["class", "cx-price", 4, "ngIf"], [1, "cx-cart-addons"], [3, "promotions"], [4, "ngIf"], ["role", "cell", "class", "cx-price cx-mobile-only", 4, "ngIf"], ["role", "cell", 1, "cx-quantity"], ["placement", "left", 1, "cx-mobile-header", 3, "title"], [1, "cx-value"], [3, "control", "readonly", "max", "allowZero"], [4, "ngIf", "ngIfElse"], ["role", "cell", "class", "cx-actions", 4, "ngIf"], [1, "cx-name"], [1, "cx-link", 3, "routerLink"], [1, "cx-code"], [1, "cx-price"], ["class", "cx-value", 4, "ngIf"], [3, "cxOutlet", "cxOutletContext"], ["class", "cx-property", 4, "ngFor", "ngForOf"], [1, "cx-property"], ["class", "cx-label", 4, "ngIf"], [1, "cx-label"], ["role", "cell", 1, "cx-price", "cx-mobile-only"], [1, "cx-mobile-header"], ["role", "cell", 1, "cx-total"], ["class", "cx-value", 4, "ngIf", "ngIfElse"], ["role", "cell", 1, "cx-actions"], ["role", "cell", "class", "cx-availability", 4, "ngIf"], ["class", "btn btn-tertiary cx-remove-btn", 3, "cxAtMessage", "disabled", "click", 4, "ngIf"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], ["role", "cell", 1, "cx-availability"], [1, "btn", "btn-tertiary", "cx-remove-btn", 3, "click", "cxAtMessage", "disabled"], ["role", "cell", "class", "cx-total", 4, "ngIf"]],
  template: function CartItemListRowComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275template(0, CartItemListRowComponent_ng_template_0_Template, 27, 32, "ng-template", 2)(1, CartItemListRowComponent_ng_template_1_Template, 1, 1, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
    }
    if (rf & 2) {
      \u0275\u0275property("cxOutlet", ctx.CartOutlets.LIST_ITEM);
    }
  },
  dependencies: [AtMessageDirective, CartItemValidationWarningComponent, NgForOf, NgIf, NgTemplateOutlet, ItemCounterComponent, MediaComponent, OutletDirective, PromotionsComponent, RouterLink, TranslatePipe, UrlPipe],
  encapsulation: 2
});
var CartItemListRowComponent = _CartItemListRowComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CartItemListRowComponent, [{
    type: Component,
    args: [{
      selector: "[cx-cart-item-list-row], cx-cart-item-list-row",
      providers: [CartItemContextSource, {
        provide: CartItemContext,
        useExisting: CartItemContextSource
      }],
      template: `<!-- Item Start Outlet -->
<ng-template [cxOutlet]="CartOutlets.LIST_ITEM">
  <td role="cell">
    <ng-template
      [cxOutlet]="CartOutlets.ITEM_CONFIGURATOR_ISSUES"
    ></ng-template>
    <cx-cart-item-validation-warning
      [code]="item.product?.code"
    ></cx-cart-item-validation-warning>
    <div class="cx-table-item-container">
      <!-- Item Image -->
      <a
        [routerLink]="{ cxRoute: 'product', params: item.product } | cxUrl"
        tabindex="0"
      >
        <cx-media
          [container]="item.product?.images?.PRIMARY"
          format="cartIcon"
        ></cx-media>
      </a>
      <div class="cx-info">
        <div *ngIf="item.product?.name" class="cx-name">
          <a
            class="cx-link"
            [routerLink]="{ cxRoute: 'product', params: item.product } | cxUrl"
            >{{ item.product?.name }}</a
          >
        </div>
        <div *ngIf="item.product?.code" class="cx-code">
          {{ 'cartItems.id' | cxTranslate }} {{ item.product?.code }}
        </div>
        <!-- Item Price -->
        <div *ngIf="item.basePrice" class="cx-price">
          <div *ngIf="item.basePrice" class="cx-value">
            {{ item.basePrice?.formattedValue }}
          </div>
        </div>
      </div>
    </div>
    <div class="cx-cart-addons">
      <!-- Item Details Outlet -->
      <ng-template [cxOutlet]="CartOutlets.ITEM_DETAILS"> </ng-template>

      <!-- Item Bundle Details Outlet -->
      <ng-template [cxOutlet]="CartOutlets.ITEM_BUNDLE_DETAILS"> </ng-template>

      <!-- Promotion -->
      <cx-promotions [promotions]="item.promotions"></cx-promotions>

      <!-- Item Delivery Details Outlet -->
      <ng-template
        *ngIf="!readonly"
        [cxOutlet]="CartOutlets.ITEM_DELIVERY_DETAILS"
        [cxOutletContext]="{item, cartType: options.cartType}"
      ></ng-template>
    </div>

    <!-- Variants -->
    <ng-container *ngIf="item.product?.baseOptions?.length">
      <div
        *ngFor="
          let variant of item.product?.baseOptions[0]?.selected
            ?.variantOptionQualifiers
        "
        class="cx-property"
      >
        <!-- cx-mobile-header -->
        <div class="cx-label" *ngIf="variant.name && variant.value">
          {{ variant.name }}: {{ variant.value }}
        </div>
      </div>
    </ng-container>
  </td>
  <!-- Mobile Item Price -->
  <td role="cell" *ngIf="item.basePrice" class="cx-price cx-mobile-only">
    <div class="cx-mobile-header">
      {{ 'cartItems.itemPrice' | cxTranslate }}
    </div>
    <div *ngIf="item.basePrice" class="cx-value">
      {{ item.basePrice?.formattedValue }}
    </div>
  </td>
  <!-- Item Quantity -->
  <td role="cell" class="cx-quantity">
    <div
      class="cx-mobile-header"
      placement="left"
      title="{{ 'cartItems.quantityTitle' | cxTranslate }}"
    >
      {{ 'cartItems.quantity' | cxTranslate }}
    </div>
    <div class="cx-value" [class.readonly-value]="readonly">
      <cx-item-counter
        [control]="quantityControl"
        [readonly]="!item.updateable || readonly || options.isSaveForLater"
        [max]="item.product?.stock?.stockLevel"
        [allowZero]="true"
      >
      </cx-item-counter>
    </div>
  </td>
  <!-- Total -->
  <ng-container *ngIf="options.isSaveForLater; else total">
    <td role="cell" class="cx-total">
      <div class="cx-mobile-header">
        {{ 'saveForLaterItems.stock' | cxTranslate }}
      </div>
      <div
        *ngIf="item.product?.stock?.stockLevel >= 0; else forceInstock"
        class="cx-value"
      >
        {{ item.product?.stock.stockLevel }}
      </div>
      <ng-template #forceInstock>
        <div class="cx-value">
          {{ 'saveForLaterItems.forceInStock' | cxTranslate }}
        </div>
      </ng-template>
    </td>
  </ng-container>

  <td
    role="cell"
    *ngIf="
      (!readonly || options.isSaveForLater || options.displayAddToCart) &&
      item.updateable
    "
    class="cx-actions"
  >
    <ng-container *ngIf="!isProductOutOfStock(item.product)">
      <ng-container
        *ngTemplateOutlet="
          options.optionalBtn;
          context: {
            $implicit: {
              loading: quantityControl.disabled,
              item: this.item,
              options: this.options
            }
          }
        "
      ></ng-container>
    </ng-container>

    <!-- Availability -->
    <span
      role="cell"
      *ngIf="isProductOutOfStock(item.product)"
      class="cx-availability"
    >
      {{ 'addToCart.outOfStock' | cxTranslate }}
    </span>

    <button
      *ngIf="!readonly"
      (click)="removeItem()"
      [cxAtMessage]="'cartItems.itemRemoved' | cxTranslate"
      [disabled]="quantityControl.disabled"
      attr.aria-label="{{ 'addToCart.removeFromCart' | cxTranslate }}"
      class="btn btn-tertiary cx-remove-btn"
    >
      {{ 'common.remove' | cxTranslate }}
    </button>
  </td>
</ng-template>
<ng-template #total>
  <td role="cell" *ngIf="item.totalPrice" class="cx-total">
    <div class="cx-mobile-header">
      {{ 'cartItems.total' | cxTranslate }}
    </div>
    <div class="cx-value">{{ item.totalPrice.formattedValue }}</div>
  </td>
</ng-template>
`
    }]
  }], null, null);
})();
var _AppliedCouponsComponent = class _AppliedCouponsComponent {
  constructor(cartVoucherService) {
    this.cartVoucherService = cartVoucherService;
    this.cartIsLoading = false;
    this.isReadOnly = false;
    this.iconTypes = ICON_TYPE;
  }
  get sortedVouchers() {
    this.vouchers = this.vouchers || [];
    return this.vouchers.slice().sort((a, b) => {
      return a.code && b.code ? a.code.localeCompare(b.code) : 0;
    });
  }
  removeVoucher(voucherId) {
    this.cartVoucherService.removeVoucher(voucherId);
  }
};
_AppliedCouponsComponent.\u0275fac = function AppliedCouponsComponent_Factory(t) {
  return new (t || _AppliedCouponsComponent)(\u0275\u0275directiveInject(CartVoucherFacade));
};
_AppliedCouponsComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
  type: _AppliedCouponsComponent,
  selectors: [["cx-applied-coupons"]],
  inputs: {
    vouchers: "vouchers",
    cartIsLoading: "cartIsLoading",
    isReadOnly: "isReadOnly"
  },
  decls: 3,
  vars: 2,
  consts: [["editableCoupons", ""], [4, "ngIf", "ngIfElse"], [4, "ngIf"], ["class", "coupon-summary cx-coupon-card textonly", 4, "ngFor", "ngForOf"], [1, "cx-applied-coupon-title"], [1, "coupon-summary", "cx-coupon-card", "textonly"], [1, "cx-applied-coupon-code"], [1, "row"], ["class", "col-sm-12 col-md-6 col-lg-12 cx-coupon-card-grid", 4, "ngFor", "ngForOf"], [1, "col-sm-12", "col-md-6", "col-lg-12", "cx-coupon-card-grid"], [1, "cx-coupon-apply", "cx-coupon-card", "cx-coupon-list-wrap"], [1, "cx-cart-coupon-code"], ["type", "button", 1, "close", 3, "click", "disabled"], ["aria-hidden", "true"], [3, "type"]],
  template: function AppliedCouponsComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275template(0, AppliedCouponsComponent_div_0_Template, 4, 2, "div", 1)(1, AppliedCouponsComponent_ng_template_1_Template, 3, 1, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
    }
    if (rf & 2) {
      const editableCoupons_r5 = \u0275\u0275reference(2);
      \u0275\u0275property("ngIf", ctx.isReadOnly)("ngIfElse", editableCoupons_r5);
    }
  },
  dependencies: [NgForOf, NgIf, IconComponent, TranslatePipe],
  encapsulation: 2,
  changeDetection: 0
});
var AppliedCouponsComponent = _AppliedCouponsComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AppliedCouponsComponent, [{
    type: Component,
    args: [{
      selector: "cx-applied-coupons",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: `<div *ngIf="isReadOnly; else editableCoupons">
  <div *ngIf="sortedVouchers.length > 0">
    <div class="cx-applied-coupon-title">
      {{ 'voucher.vouchersApplied' | cxTranslate }}
    </div>
  </div>
  <ng-container>
    <div
      *ngFor="let voucher of sortedVouchers"
      class="coupon-summary cx-coupon-card textonly"
    >
      <span class="cx-applied-coupon-code">{{ voucher.voucherCode }}</span>
    </div>
  </ng-container>
</div>

<ng-template #editableCoupons>
  <div class="row">
    <ng-container>
      <div
        *ngFor="let voucher of sortedVouchers"
        class="col-sm-12 col-md-6 col-lg-12 cx-coupon-card-grid"
      >
        <div class="cx-coupon-apply cx-coupon-card cx-coupon-list-wrap">
          <span class="cx-cart-coupon-code">{{ voucher.voucherCode }}</span>
          <button
            type="button"
            class="close"
            [attr.aria-label]="'common.close' | cxTranslate"
            (click)="removeVoucher(voucher.voucherCode)"
            [disabled]="cartIsLoading"
            [class.disabled]="cartIsLoading"
          >
            <span aria-hidden="true">
              <cx-icon [type]="iconTypes.CLOSE"></cx-icon>
            </span>
          </button>
        </div>
      </div>
    </ng-container>
  </div>
</ng-template>
`
    }]
  }], () => [{
    type: CartVoucherFacade
  }], {
    vouchers: [{
      type: Input
    }],
    cartIsLoading: [{
      type: Input
    }],
    isReadOnly: [{
      type: Input
    }]
  });
})();
var _CartCouponComponent = class _CartCouponComponent {
  constructor(cartVoucherService, formBuilder, customerCouponService, activeCartService) {
    this.cartVoucherService = cartVoucherService;
    this.formBuilder = formBuilder;
    this.customerCouponService = customerCouponService;
    this.activeCartService = activeCartService;
    this.MAX_CUSTOMER_COUPON_PAGE = 100;
    this.ignoreCloseEvent = false;
    this.subscription = new Subscription();
    this.couponBoxIsActive = false;
  }
  ngOnInit() {
    if (this.customerCouponService) {
      this.customerCouponService.loadCustomerCoupons(this.MAX_CUSTOMER_COUPON_PAGE);
    }
    this.cart$ = combineLatest([this.activeCartService.getActive(), this.activeCartService.getActiveCartId(), this.customerCouponService.getCustomerCoupons(this.MAX_CUSTOMER_COUPON_PAGE)]).pipe(tap(([cart, activeCardId, customerCoupons]) => {
      this.cartId = activeCardId;
      this.getApplicableCustomerCoupons(cart, customerCoupons.coupons ?? []);
    }), map(([cart]) => cart));
    this.cartIsLoading$ = this.activeCartService.isStable().pipe(map((loaded) => !loaded));
    this.cartVoucherService.resetAddVoucherProcessingState();
    this.couponForm = this.formBuilder.group({
      couponCode: ["", [Validators.required]]
    });
    this.subscription.add(this.cartVoucherService.getAddVoucherResultSuccess().subscribe((success) => {
      this.onSuccess(success);
    }));
    this.subscription.add(this.cartVoucherService.getAddVoucherResultError().subscribe((error) => {
      this.onError(error);
    }));
  }
  onError(error) {
    if (error) {
      this.customerCouponService.loadCustomerCoupons(this.MAX_CUSTOMER_COUPON_PAGE);
      this.cartVoucherService.resetAddVoucherProcessingState();
    }
  }
  onSuccess(success) {
    if (success) {
      this.couponForm.reset();
      this.cartVoucherService.resetAddVoucherProcessingState();
    }
  }
  getApplicableCustomerCoupons(cart, coupons) {
    this.applicableCoupons = coupons || [];
    if (cart.appliedVouchers) {
      cart.appliedVouchers.forEach((appliedVoucher) => {
        this.applicableCoupons = this.applicableCoupons.filter((coupon) => coupon.couponId !== appliedVoucher.code);
      });
    }
  }
  applyVoucher() {
    if (this.couponForm.valid) {
      this.cartVoucherService.addVoucher(this.couponForm.value.couponCode, this.cartId);
    } else {
      this.couponForm.markAllAsTouched();
    }
  }
  applyCustomerCoupon(couponId) {
    this.cartVoucherService.addVoucher(couponId, this.cartId);
    this.couponBoxIsActive = false;
  }
  close(event) {
    if (!this.ignoreCloseEvent) {
      this.couponBoxIsActive = false;
      if (event && event.target) {
        event.target.blur();
      }
    }
    this.ignoreCloseEvent = false;
  }
  disableClose() {
    this.ignoreCloseEvent = true;
  }
  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
    this.cartVoucherService.resetAddVoucherProcessingState();
  }
};
_CartCouponComponent.\u0275fac = function CartCouponComponent_Factory(t) {
  return new (t || _CartCouponComponent)(\u0275\u0275directiveInject(CartVoucherFacade), \u0275\u0275directiveInject(UntypedFormBuilder), \u0275\u0275directiveInject(CustomerCouponService), \u0275\u0275directiveInject(ActiveCartFacade));
};
_CartCouponComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
  type: _CartCouponComponent,
  selectors: [["cx-cart-coupon"]],
  decls: 2,
  vars: 3,
  consts: [[4, "ngIf"], [1, "form-group"], [3, "ngSubmit", "formGroup"], [1, "cx-cart-coupon-title"], [1, "cx-cart-coupon-container"], ["required", "true", "type", "text", "formControlName", "couponCode", 1, "form-control", "input-coupon-code", 3, "placeholder"], ["type", "submit", 1, "btn", "btn-block", "btn-secondary", "apply-coupon-button", 3, "disabled"], [3, "control"], [3, "vouchers", "cartIsLoading", "isReadOnly"], [1, "cx-available-coupon"], [1, "title", "cx-cart-coupon-title"], [1, "message"], [1, "scroll"], ["class", "coupons card", 4, "ngFor", "ngForOf"], [1, "coupons", "card"], [1, "coupon-id", "link", 3, "click", "disabled"]],
  template: function CartCouponComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275template(0, CartCouponComponent_ng_container_0_Template, 19, 27, "ng-container", 0);
      \u0275\u0275pipe(1, "async");
    }
    if (rf & 2) {
      \u0275\u0275property("ngIf", \u0275\u0275pipeBind1(1, 1, ctx.cart$));
    }
  },
  dependencies: [NgForOf, NgIf, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, RequiredValidator, FormGroupDirective, FormControlName, FormErrorsComponent, AppliedCouponsComponent, AsyncPipe, TranslatePipe],
  encapsulation: 2
});
var CartCouponComponent = _CartCouponComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CartCouponComponent, [{
    type: Component,
    args: [{
      selector: "cx-cart-coupon",
      template: `<ng-container *ngIf="cart$ | async as cart">
  <div class="form-group">
    <form (ngSubmit)="applyVoucher()" [formGroup]="couponForm">
      <label class="cx-cart-coupon-title">
        {{ 'voucher.coupon' | cxTranslate }}
      </label>

      <div class="cx-cart-coupon-container">
        <input
          [attr.aria-label]="'voucher.couponLabel' | cxTranslate"
          required="true"
          type="text"
          class="form-control input-coupon-code"
          formControlName="couponCode"
          placeholder="{{ 'voucher.placeholder' | cxTranslate }}"
        />
        <button
          class="btn btn-block btn-secondary apply-coupon-button"
          type="submit"
          [disabled]="cartIsLoading$ | async"
          [class.disabled]="cartIsLoading$ | async"
        >
          {{ 'voucher.apply' | cxTranslate }}
        </button>
        <cx-form-errors
          [control]="couponForm.get('couponCode')"
        ></cx-form-errors>
      </div>
    </form>
  </div>

  <cx-applied-coupons
    [vouchers]="cart.appliedVouchers"
    [cartIsLoading]="cartIsLoading$ | async"
    [isReadOnly]="false"
  >
  </cx-applied-coupons>

  <ng-container *ngIf="applicableCoupons && applicableCoupons.length > 0">
    <div class="cx-available-coupon">
      <div class="title cx-cart-coupon-title">
        {{ 'voucher.availableCoupons' | cxTranslate }}
      </div>
      <div class="message">
        {{ 'voucher.availableCouponsLabel' | cxTranslate }}
      </div>
      <div class="scroll">
        <div class="coupons card" *ngFor="let coupon of applicableCoupons">
          <button
            (click)="applyCustomerCoupon(coupon.couponId)"
            class="coupon-id link"
            [disabled]="cartIsLoading$ | async"
            [class.disabled]="cartIsLoading$ | async"
          >
            {{ coupon.couponId }}
          </button>
        </div>
      </div>
    </div>
  </ng-container>
</ng-container>
`
    }]
  }], () => [{
    type: CartVoucherFacade
  }, {
    type: UntypedFormBuilder
  }, {
    type: CustomerCouponService
  }, {
    type: ActiveCartFacade
  }], null);
})();
var _CartCouponModule = class _CartCouponModule {
};
_CartCouponModule.\u0275fac = function CartCouponModule_Factory(t) {
  return new (t || _CartCouponModule)();
};
_CartCouponModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
  type: _CartCouponModule
});
_CartCouponModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
  providers: [provideDefaultConfig({
    cmsComponents: {
      CartApplyCouponComponent: {
        component: CartCouponComponent
      }
    }
  })],
  imports: [CommonModule, NgSelectModule, FormsModule, ReactiveFormsModule, I18nModule, IconModule, FormErrorsModule]
});
var CartCouponModule = _CartCouponModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CartCouponModule, [{
    type: NgModule,
    args: [{
      declarations: [CartCouponComponent, AppliedCouponsComponent],
      exports: [CartCouponComponent, AppliedCouponsComponent],
      imports: [CommonModule, NgSelectModule, FormsModule, ReactiveFormsModule, I18nModule, IconModule, FormErrorsModule],
      providers: [provideDefaultConfig({
        cmsComponents: {
          CartApplyCouponComponent: {
            component: CartCouponComponent
          }
        }
      })]
    }]
  }], null, null);
})();
var _CartItemValidationWarningModule = class _CartItemValidationWarningModule {
};
_CartItemValidationWarningModule.\u0275fac = function CartItemValidationWarningModule_Factory(t) {
  return new (t || _CartItemValidationWarningModule)();
};
_CartItemValidationWarningModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
  type: _CartItemValidationWarningModule
});
_CartItemValidationWarningModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
  imports: [CommonModule, RouterModule, I18nModule, UrlModule, IconModule]
});
var CartItemValidationWarningModule = _CartItemValidationWarningModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CartItemValidationWarningModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, RouterModule, I18nModule, UrlModule, IconModule],
      exports: [CartItemValidationWarningComponent],
      declarations: [CartItemValidationWarningComponent]
    }]
  }], null, null);
})();
var _CartItemListComponent = class _CartItemListComponent {
  set items(items) {
    this.resolveItems(items);
    this.createForm();
  }
  get items() {
    return this._items;
  }
  set setLoading(value) {
    if (!this.readonly) {
      value ? this.form.disable({
        emitEvent: false
      }) : this.form.enable({
        emitEvent: false
      });
      this.cd.markForCheck();
    }
  }
  constructor(activeCartService, selectiveCartService, userIdService, multiCartService, cd, outlet) {
    this.activeCartService = activeCartService;
    this.selectiveCartService = selectiveCartService;
    this.userIdService = userIdService;
    this.multiCartService = multiCartService;
    this.cd = cd;
    this.outlet = outlet;
    this.subscription = new Subscription();
    this.readonly = false;
    this.hasHeader = true;
    this.options = {
      isSaveForLater: false,
      optionalBtn: null,
      displayAddToCart: false
    };
    this._items = [];
    this.form = new UntypedFormGroup({});
    this.promotionLocation = PromotionLocation.ActiveCart;
    this.CartOutlets = CartOutlets;
  }
  ngOnInit() {
    this.subscription.add(this.getInputsFromContext());
    this.subscription.add(this.userIdService?.getUserId().subscribe((userId) => this.userId = userId));
  }
  getInputsFromContext() {
    return this.outlet?.context$.subscribe((context) => {
      if (context.readonly !== void 0) {
        this.readonly = context.readonly;
      }
      if (context.hasHeader !== void 0) {
        this.hasHeader = context.hasHeader;
      }
      if (context.options !== void 0) {
        this.options = context.options;
      }
      if (context.cartId !== void 0) {
        this.cartId = context.cartId;
      }
      if (context.items !== void 0) {
        this.items = context.items;
      }
      if (context.promotionLocation !== void 0) {
        this.promotionLocation = context.promotionLocation;
      }
      if (context.cartIsLoading !== void 0) {
        this.setLoading = context.cartIsLoading;
      }
    });
  }
  /**
   * Resolves items passed to component input and updates 'items' field
   */
  resolveItems(items) {
    if (!items) {
      this._items = [];
      return;
    }
    if (items.every((item) => item.hasOwnProperty("orderEntry"))) {
      this.normalizeConsignmentEntries(items);
    } else {
      this.rerenderChangedItems(items);
    }
  }
  normalizeConsignmentEntries(items) {
    this._items = items.map((consignmentEntry) => {
      const entry = Object.assign({}, consignmentEntry.orderEntry);
      entry.quantity = consignmentEntry.quantity;
      return entry;
    });
  }
  /**
   * We'd like to avoid the unnecessary re-renders of unchanged cart items after the data reload.
   * OCC cart entries don't have any unique identifier that we could use in Angular `trackBy`.
   * So we update each array element to the new object only when it's any different to the previous one.
   */
  rerenderChangedItems(items) {
    let offset = 0;
    for (let i = 0; i - offset < Math.max(items.length, this._items.length); i++) {
      const index = i - offset;
      if (JSON.stringify(this._items?.[index]) !== JSON.stringify(items[index])) {
        if (this._items[index]) {
          this.form?.removeControl(this.getControlName(this._items[index]));
        }
        if (!items[index]) {
          this._items.splice(index, 1);
          offset++;
        } else {
          this._items[index] = items[index];
        }
      }
    }
  }
  /**
   * Creates form models for list items
   */
  createForm() {
    this._items.forEach((item) => {
      const controlName = this.getControlName(item);
      const control = this.form.get(controlName);
      if (control) {
        if (control.get("quantity")?.value !== item.quantity) {
          control.patchValue({
            quantity: item.quantity
          }, {
            emitEvent: false
          });
        }
      } else {
        const group = new UntypedFormGroup({
          entryNumber: new UntypedFormControl(item.entryNumber),
          quantity: new UntypedFormControl(item.quantity, {
            updateOn: "blur"
          })
        });
        this.form.addControl(controlName, group);
      }
      if (!item.updateable || this.readonly) {
        this.form.controls[controlName].disable();
      }
    });
  }
  getControlName(item) {
    return item.entryNumber?.toString() || "";
  }
  removeEntry(item) {
    if (this.options.isSaveForLater) {
      this.selectiveCartService.removeEntry(item);
    } else if (this.cartId && this.userId) {
      this.multiCartService.removeEntry(this.userId, this.cartId, item.entryNumber);
    } else {
      this.activeCartService.removeEntry(item);
    }
    delete this.form.controls[this.getControlName(item)];
  }
  getControl(item) {
    return this.form.get(this.getControlName(item))?.valueChanges.pipe(
      // eslint-disable-next-line import/no-deprecated
      startWith(null),
      tap((value) => {
        if (item.updateable && value && !this.readonly) {
          if (this.options.isSaveForLater) {
            this.selectiveCartService.updateEntry(value.entryNumber, value.quantity);
          } else if (this.cartId && this.userId) {
            this.multiCartService.updateEntry(this.userId, this.cartId, value.entryNumber, value.quantity);
          } else {
            this.activeCartService.updateEntry(value.entryNumber, value.quantity);
          }
        }
      }),
      map(() => this.form.get(this.getControlName(item)))
    );
  }
  ngOnDestroy() {
    this.subscription?.unsubscribe();
  }
};
_CartItemListComponent.\u0275fac = function CartItemListComponent_Factory(t) {
  return new (t || _CartItemListComponent)(\u0275\u0275directiveInject(ActiveCartFacade), \u0275\u0275directiveInject(SelectiveCartFacade), \u0275\u0275directiveInject(UserIdService), \u0275\u0275directiveInject(MultiCartFacade), \u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(OutletContextData, 8));
};
_CartItemListComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
  type: _CartItemListComponent,
  selectors: [["cx-cart-item-list"]],
  inputs: {
    readonly: "readonly",
    hasHeader: "hasHeader",
    options: "options",
    cartId: "cartId",
    items: "items",
    promotionLocation: "promotionLocation",
    setLoading: [InputFlags.None, "cartIsLoading", "setLoading"]
  },
  decls: 9,
  vars: 5,
  consts: [["totalHeader", ""], ["role", "table"], [1, "cx-visually-hidden"], [4, "ngIf"], [1, "cx-item-list-items"], [4, "ngFor", "ngForOf"], ["role", "row", 1, "cx-item-list-header"], ["role", "columnheader", 1, "cx-item-list-desc"], ["role", "columnheader", 1, "cx-item-list-qty"], [4, "ngIf", "ngIfElse"], ["role", "columnheader", 1, "cx-item-list-total"], ["role", "columnheader", 1, "cx-item-list-actions"], [3, "is-changed", 4, "ngIf"], ["cx-cart-item-list-row", "", "role", "row", 1, "cx-item-list-row", 3, "item", "quantityControl", "readonly", "promotionLocation", "options"]],
  template: function CartItemListComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "table", 1)(1, "caption", 2);
      \u0275\u0275text(2);
      \u0275\u0275pipe(3, "cxTranslate");
      \u0275\u0275elementEnd();
      \u0275\u0275template(4, CartItemListComponent_thead_4_Template, 10, 9, "thead", 3);
      \u0275\u0275elementStart(5, "tbody", 4);
      \u0275\u0275template(6, CartItemListComponent_ng_container_6_Template, 3, 3, "ng-container", 5);
      \u0275\u0275elementEnd()();
      \u0275\u0275template(7, CartItemListComponent_ng_template_7_Template, 3, 3, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
    }
    if (rf & 2) {
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 3, "cartItems.caption"), " ");
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.hasHeader);
      \u0275\u0275advance(2);
      \u0275\u0275property("ngForOf", ctx.items);
    }
  },
  dependencies: [NgForOf, NgIf, CartItemListRowComponent, AsyncPipe, TranslatePipe],
  encapsulation: 2,
  changeDetection: 0
});
var CartItemListComponent = _CartItemListComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CartItemListComponent, [{
    type: Component,
    args: [{
      selector: "cx-cart-item-list",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: `<table role="table">
  <caption class="cx-visually-hidden">
    {{
      'cartItems.caption' | cxTranslate
    }}
  </caption>
  <thead *ngIf="hasHeader">
    <tr role="row" class="cx-item-list-header">
      <th role="columnheader" class="cx-item-list-desc">
        {{ 'cartItems.item' | cxTranslate }}
      </th>
      <th role="columnheader" class="cx-item-list-qty">
        {{ 'cartItems.quantity' | cxTranslate }}
      </th>
      <ng-container *ngIf="options.isSaveForLater; else totalHeader">
        <th role="columnheader" class="cx-item-list-total">
          {{ 'saveForLaterItems.stock' | cxTranslate }}
        </th>
      </ng-container>
      <ng-container
        *ngIf="!readonly || options.isSaveForLater || options.displayAddToCart"
      >
        <th role="columnheader" class="cx-item-list-actions">
          {{ 'cartItems.actions' | cxTranslate }}
        </th>
      </ng-container>
    </tr>
  </thead>
  <tbody class="cx-item-list-items">
    <ng-container *ngFor="let item of items; let i = index">
      <ng-container
        *ngIf="getControl(item) | async as control"
        [class.is-changed]="control.get('quantity').disabled"
      >
        <tr
          cx-cart-item-list-row
          role="row"
          class="cx-item-list-row"
          [item]="item"
          [quantityControl]="control.get('quantity')"
          [readonly]="readonly"
          [promotionLocation]="promotionLocation"
          [options]="options"
        ></tr>
      </ng-container>
    </ng-container>
  </tbody>
</table>

<ng-template #totalHeader>
  <th role="columnheader" class="cx-item-list-total">
    {{ 'cartItems.total' | cxTranslate }}
  </th>
</ng-template>
`
    }]
  }], () => [{
    type: ActiveCartFacade
  }, {
    type: SelectiveCartFacade
  }, {
    type: UserIdService
  }, {
    type: MultiCartFacade
  }, {
    type: ChangeDetectorRef
  }, {
    type: OutletContextData,
    decorators: [{
      type: Optional
    }]
  }], {
    readonly: [{
      type: Input
    }],
    hasHeader: [{
      type: Input
    }],
    options: [{
      type: Input
    }],
    cartId: [{
      type: Input
    }],
    items: [{
      type: Input,
      args: ["items"]
    }],
    promotionLocation: [{
      type: Input
    }],
    setLoading: [{
      type: Input,
      args: ["cartIsLoading"]
    }]
  });
})();
var _OrderSummaryComponent = class _OrderSummaryComponent {
  constructor(outlet) {
    this.outlet = outlet;
    this.subscription = new Subscription();
  }
  ngOnInit() {
    if (this.outlet?.context$) {
      this.subscription.add(this.outlet.context$.subscribe((context) => this.cart = context));
    }
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
};
_OrderSummaryComponent.\u0275fac = function OrderSummaryComponent_Factory(t) {
  return new (t || _OrderSummaryComponent)(\u0275\u0275directiveInject(OutletContextData, 8));
};
_OrderSummaryComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
  type: _OrderSummaryComponent,
  selectors: [["cx-order-summary"]],
  inputs: {
    cart: "cart"
  },
  decls: 5,
  vars: 6,
  consts: [["cartWithoutNet", ""], [1, "cx-summary-heading"], ["class", "cx-summary-partials", 4, "ngIf"], [3, "vouchers", "isReadOnly"], [1, "cx-summary-partials"], [1, "cx-summary-row"], [1, "col-6", "cx-summary-label"], [1, "col-6", "cx-summary-amount"], ["class", "cx-summary-row", 4, "ngIf", "ngIfElse"], [1, "cx-summary-row", "cx-summary-total"], ["class", "cx-summary-row", 4, "ngIf"]],
  template: function OrderSummaryComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 1);
      \u0275\u0275text(1);
      \u0275\u0275pipe(2, "cxTranslate");
      \u0275\u0275elementEnd();
      \u0275\u0275template(3, OrderSummaryComponent_div_3_Template, 24, 17, "div", 2);
      \u0275\u0275element(4, "cx-applied-coupons", 3);
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 4, "orderCost.orderSummary"), "\n");
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.cart);
      \u0275\u0275advance();
      \u0275\u0275property("vouchers", ctx.cart.appliedVouchers)("isReadOnly", true);
    }
  },
  dependencies: [AppliedCouponsComponent, NgIf, TranslatePipe],
  encapsulation: 2
});
var OrderSummaryComponent = _OrderSummaryComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OrderSummaryComponent, [{
    type: Component,
    args: [{
      selector: "cx-order-summary",
      template: `<div class="cx-summary-heading">
  {{ 'orderCost.orderSummary' | cxTranslate }}
</div>

<div class="cx-summary-partials" *ngIf="cart">
  <div class="cx-summary-row">
    <div class="col-6 cx-summary-label">
      {{ 'orderCost.subtotal' | cxTranslate }}
    </div>
    <div class="col-6 cx-summary-amount">
      {{ cart.subTotal?.formattedValue }}
    </div>
  </div>
  <div class="cx-summary-row">
    <div class="col-6 cx-summary-label">
      {{
        (cart.deliveryCost?.formattedValue
          ? 'orderCost.shipping'
          : 'orderCost.estimatedShipping'
        ) | cxTranslate
      }}
    </div>
    <div class="col-6 cx-summary-amount">
      {{
        cart.deliveryCost?.formattedValue
          ? cart.deliveryCost?.formattedValue
          : ('orderCost.toBeDetermined' | cxTranslate)
      }}
    </div>
  </div>
  <div class="cx-summary-row" *ngIf="cart.net; else cartWithoutNet">
    <div class="col-6 cx-summary-label">
      {{ 'orderCost.salesTax' | cxTranslate }}
    </div>
    <div class="col-6 cx-summary-amount">
      {{ cart.totalTax?.formattedValue }}
    </div>
  </div>
  <div class="cx-summary-row cx-summary-total">
    <div class="col-6 cx-summary-label">
      {{ 'orderCost.total' | cxTranslate }}
    </div>
    <div class="col-6 cx-summary-amount">
      {{ cart.totalPriceWithTax?.formattedValue }}
    </div>
  </div>
  <div class="cx-summary-row" *ngIf="cart.totalDiscounts?.value > 0">
    {{ 'orderCost.discount' | cxTranslate }}
    {{ cart.totalDiscounts?.formattedValue }}
  </div>
  <ng-template #cartWithoutNet>
    <div class="cx-summary-row">
      {{
        cart.totalPriceWithTax?.value !== cart.totalPrice?.value
          ? ('orderCost.grossTax' | cxTranslate)
          : ('orderCost.grossIncludeTax' | cxTranslate)
      }}
      {{ cart.totalTax?.formattedValue }}.
    </div>
  </ng-template>
</div>

<cx-applied-coupons
  [vouchers]="cart.appliedVouchers"
  [isReadOnly]="true"
></cx-applied-coupons>
`
    }]
  }], () => [{
    type: OutletContextData,
    decorators: [{
      type: Optional
    }]
  }], {
    cart: [{
      type: Input
    }]
  });
})();
var _AddToCartComponent = class _AddToCartComponent {
  constructor(currentProductService, cd, activeCartService, component, eventService, productListItemContext) {
    this.currentProductService = currentProductService;
    this.cd = cd;
    this.activeCartService = activeCartService;
    this.component = component;
    this.eventService = eventService;
    this.productListItemContext = productListItemContext;
    this.showQuantity = true;
    this.hasStock = false;
    this.inventoryThreshold = false;
    this.showInventory$ = this.component?.data$.pipe(map((data) => data.inventoryDisplay));
    this.quantity = 1;
    this.addToCartForm = new UntypedFormGroup({
      quantity: new UntypedFormControl(1, {
        updateOn: "blur"
      })
    });
    this.CartOutlets = CartOutlets;
    this.iconTypes = ICON_TYPE;
  }
  ngOnInit() {
    if (this.product) {
      this.productCode = this.product.code ?? "";
      this.setStockInfo(this.product);
      this.cd.markForCheck();
    } else if (this.productCode) {
      this.quantity = 1;
      this.hasStock = true;
      this.cd.markForCheck();
    } else {
      this.subscription = (this.productListItemContext ? this.productListItemContext.product$ : this.currentProductService.getProduct()).pipe(filter(isNotNullable)).subscribe((product) => {
        this.productCode = product.code ?? "";
        this.setStockInfo(product);
        this.cd.markForCheck();
      });
    }
  }
  setStockInfo(product) {
    this.quantity = 1;
    this.addToCartForm.controls["quantity"].setValue(1);
    this.hasStock = Boolean(product.stock?.stockLevelStatus !== "outOfStock");
    this.inventoryThreshold = product.stock?.isValueRounded ?? false;
    if (this.hasStock && product.stock?.stockLevel) {
      this.maxQuantity = product.stock.stockLevel;
    }
    if (this.productListItemContext) {
      this.showQuantity = false;
    }
  }
  /**
   * In specific scenarios, we need to omit displaying the stock level or append a plus to the value.
   * When backoffice forces a product to be in stock, omit showing the stock level.
   * When product stock level is limited by a threshold value, append '+' at the end.
   * When out of stock, display no numerical value.
   */
  getInventory() {
    if (this.hasStock) {
      const quantityDisplay = this.maxQuantity ? this.maxQuantity.toString() : "";
      return this.inventoryThreshold ? quantityDisplay + "+" : quantityDisplay;
    } else {
      return "";
    }
  }
  updateCount(value) {
    this.quantity = value;
  }
  addToCart() {
    const quantity = this.addToCartForm.get("quantity")?.value;
    if (!this.productCode || quantity <= 0) {
      return;
    }
    if (this.pickupOptionCompRef instanceof ComponentRef$1) {
      this.pickupOptionCompRef.instance.intendedPickupLocation$.pipe(take(1)).subscribe((intendedPickupLocation) => {
        this.pickupStore = intendedPickupLocation?.pickupOption === "pickup" ? intendedPickupLocation.name : void 0;
      });
    }
    this.activeCartService.getEntries().pipe(take(1)).subscribe((cartEntries) => {
      this.activeCartService.addEntry(this.productCode, quantity, this.pickupStore);
      this.eventService.dispatch(this.createCartUiEventAddToCart(this.productCode, quantity, cartEntries.length, this.pickupStore));
    });
  }
  createCartUiEventAddToCart(productCode, quantity, numberOfEntriesBeforeAdd, storeName) {
    const newEvent = new CartUiEventAddToCart();
    newEvent.productCode = productCode;
    newEvent.quantity = quantity;
    newEvent.numberOfEntriesBeforeAdd = numberOfEntriesBeforeAdd;
    newEvent.pickupStoreName = storeName;
    return newEvent;
  }
  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
};
_AddToCartComponent.\u0275fac = function AddToCartComponent_Factory(t) {
  return new (t || _AddToCartComponent)(\u0275\u0275directiveInject(CurrentProductService), \u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(ActiveCartFacade), \u0275\u0275directiveInject(CmsComponentData), \u0275\u0275directiveInject(EventService), \u0275\u0275directiveInject(ProductListItemContext, 8));
};
_AddToCartComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
  type: _AddToCartComponent,
  selectors: [["cx-add-to-cart"]],
  inputs: {
    productCode: "productCode",
    showQuantity: "showQuantity",
    options: "options",
    pickupStore: "pickupStore",
    product: "product"
  },
  decls: 1,
  vars: 1,
  consts: [[3, "formGroup", "submit", 4, "ngIf"], [3, "submit", "formGroup"], ["class", "quantity", 4, "ngIf"], [4, "ngIf"], ["type", "submit", 3, "ngClass", "disabled", 4, "ngIf"], [1, "quantity"], [1, "cx-counter-stock"], [3, "max", "control", 4, "ngIf"], [1, "info"], [3, "max", "control"], [3, "cxComponentRefChange", "cxOutlet", "cxComponentRef"], ["type", "submit", 3, "ngClass", "disabled"], ["class", "repeat-icon", 4, "ngIf"], [3, "ngClass"], [1, "repeat-icon"], [3, "type"]],
  template: function AddToCartComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275template(0, AddToCartComponent_form_0_Template, 4, 4, "form", 0);
    }
    if (rf & 2) {
      \u0275\u0275property("ngIf", ctx.productCode);
    }
  },
  dependencies: [NgClass, NgIf, \u0275NgNoValidate, NgControlStatusGroup, FormGroupDirective, IconComponent, ItemCounterComponent, OutletDirective, AsyncPipe, TranslatePipe],
  encapsulation: 2,
  changeDetection: 0
});
var AddToCartComponent = _AddToCartComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AddToCartComponent, [{
    type: Component,
    args: [{
      selector: "cx-add-to-cart",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: `<form *ngIf="productCode" [formGroup]="addToCartForm" (submit)="addToCart()">
  <div class="quantity" *ngIf="showQuantity">
    <label>{{ 'addToCart.quantity' | cxTranslate }}</label>
    <div class="cx-counter-stock">
      <cx-item-counter
        *ngIf="hasStock"
        [max]="maxQuantity"
        [control]="addToCartForm.get('quantity')"
      ></cx-item-counter>

      <span class="info">
        <span *ngIf="showInventory$ | async">{{ getInventory() }}</span>
        {{
          hasStock
            ? ('addToCart.inStock' | cxTranslate)
            : ('addToCart.outOfStock' | cxTranslate)
        }}</span
      >
    </div>
  </div>

  <ng-container *ngIf="hasStock">
    <ng-template
      [cxOutlet]="CartOutlets.ADD_TO_CART_PICKUP_OPTION"
      [(cxComponentRef)]="pickupOptionCompRef"
    ></ng-template>
  </ng-container>

  <button
    *ngIf="hasStock"
    [ngClass]="
      options?.displayAddToCart
        ? 'btn btn-tertiary'
        : 'btn btn-primary btn-block'
    "
    type="submit"
    [disabled]="quantity <= 0 || quantity > maxQuantity"
  >
    <span
      *ngIf="
        options?.addToCartString === ('addToCart.buyItAgain' | cxTranslate)
      "
      class="repeat-icon"
      ><cx-icon [type]="iconTypes.REPEAT"></cx-icon
    ></span>
    <span
      attr.aria-label="{{
        options?.addToCartString ?? ('addToCart.addToCart' | cxTranslate)
      }}"
      [ngClass]="
        options?.addToCartString === ('addToCart.buyItAgain' | cxTranslate)
          ? 'buyItAgainLink'
          : ''
      "
    >
      {{ options?.addToCartString ?? ('addToCart.addToCart' | cxTranslate) }}
    </span>
  </button>
</form>
`
    }]
  }], () => [{
    type: CurrentProductService
  }, {
    type: ChangeDetectorRef
  }, {
    type: ActiveCartFacade
  }, {
    type: CmsComponentData
  }, {
    type: EventService
  }, {
    type: ProductListItemContext,
    decorators: [{
      type: Optional
    }]
  }], {
    productCode: [{
      type: Input
    }],
    showQuantity: [{
      type: Input
    }],
    options: [{
      type: Input
    }],
    pickupStore: [{
      type: Input
    }],
    product: [{
      type: Input
    }]
  });
})();
var _AddToCartModule = class _AddToCartModule {
};
_AddToCartModule.\u0275fac = function AddToCartModule_Factory(t) {
  return new (t || _AddToCartModule)();
};
_AddToCartModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
  type: _AddToCartModule
});
_AddToCartModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
  providers: [provideDefaultConfig({
    cmsComponents: {
      ProductAddToCartComponent: {
        component: AddToCartComponent,
        data: {
          inventoryDisplay: false
        }
      }
    }
  })],
  imports: [CommonModule, ReactiveFormsModule, I18nModule, IconModule, ItemCounterModule, OutletModule]
});
var AddToCartModule = _AddToCartModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AddToCartModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, ReactiveFormsModule, I18nModule, IconModule, ItemCounterModule, OutletModule],
      providers: [provideDefaultConfig({
        cmsComponents: {
          ProductAddToCartComponent: {
            component: AddToCartComponent,
            data: {
              inventoryDisplay: false
            }
          }
        }
      })],
      declarations: [AddToCartComponent],
      exports: [AddToCartComponent]
    }]
  }], null, null);
})();
var _CartSharedModule = class _CartSharedModule {
};
_CartSharedModule.\u0275fac = function CartSharedModule_Factory(t) {
  return new (t || _CartSharedModule)();
};
_CartSharedModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
  type: _CartSharedModule
});
_CartSharedModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
  providers: [provideOutlet({
    id: CartOutlets.ORDER_SUMMARY,
    component: OrderSummaryComponent
  }), provideOutlet({
    id: CartOutlets.CART_ITEM_LIST,
    component: CartItemListComponent
  })],
  imports: [AtMessageModule, CartCouponModule, CartItemValidationWarningModule, CommonModule, I18nModule, IconModule, ItemCounterModule, MediaModule, OutletModule, PromotionsModule, ReactiveFormsModule, RouterModule, UrlModule, AddToCartModule]
});
var CartSharedModule = _CartSharedModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CartSharedModule, [{
    type: NgModule,
    args: [{
      imports: [AtMessageModule, CartCouponModule, CartItemValidationWarningModule, CommonModule, I18nModule, IconModule, ItemCounterModule, MediaModule, OutletModule, PromotionsModule, ReactiveFormsModule, RouterModule, UrlModule, AddToCartModule],
      providers: [provideOutlet({
        id: CartOutlets.ORDER_SUMMARY,
        component: OrderSummaryComponent
      }), provideOutlet({
        id: CartOutlets.CART_ITEM_LIST,
        component: CartItemListComponent
      })],
      declarations: [CartItemComponent, OrderSummaryComponent, CartItemListComponent, CartItemListRowComponent],
      exports: [CartItemComponent, CartItemListRowComponent, CartItemListComponent, OrderSummaryComponent]
    }]
  }], null, null);
})();
var defaultAddedToCartLayoutConfig = {
  launch: {
    ADDED_TO_CART: {
      inlineRoot: true,
      component: AddedToCartDialogComponent,
      dialogType: DIALOG_TYPE.DIALOG
    }
  }
};
var _AddedToCartDialogModule = class _AddedToCartDialogModule {
  constructor(_addToCartDialogEventListener) {
  }
};
_AddedToCartDialogModule.\u0275fac = function AddedToCartDialogModule_Factory(t) {
  return new (t || _AddedToCartDialogModule)(\u0275\u0275inject(AddedToCartDialogEventListener));
};
_AddedToCartDialogModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
  type: _AddedToCartDialogModule
});
_AddedToCartDialogModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
  providers: [provideDefaultConfig(defaultAddedToCartLayoutConfig)],
  imports: [CommonModule, ReactiveFormsModule, CartSharedModule, RouterModule, SpinnerModule, PromotionsModule, UrlModule, IconModule, I18nModule, ItemCounterModule, KeyboardFocusModule]
});
var AddedToCartDialogModule = _AddedToCartDialogModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AddedToCartDialogModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, ReactiveFormsModule, CartSharedModule, RouterModule, SpinnerModule, PromotionsModule, UrlModule, IconModule, I18nModule, ItemCounterModule, KeyboardFocusModule],
      providers: [provideDefaultConfig(defaultAddedToCartLayoutConfig)],
      declarations: [AddedToCartDialogComponent],
      exports: [AddedToCartDialogComponent]
    }]
  }], () => [{
    type: AddedToCartDialogEventListener
  }], null);
})();
var _ClearCartComponent = class _ClearCartComponent {
  constructor(activeCartFacade, vcr, launchDialogService) {
    this.activeCartFacade = activeCartFacade;
    this.vcr = vcr;
    this.launchDialogService = launchDialogService;
    this.cart$ = this.activeCartFacade.getActive();
    this.subscription = new Subscription();
  }
  openDialog(event) {
    const dialog = this.launchDialogService.openDialog("CLEAR_CART", this.element, this.vcr);
    if (dialog) {
      this.subscription.add(dialog.pipe(take(1)).subscribe());
    }
    event.stopPropagation();
  }
  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
};
_ClearCartComponent.\u0275fac = function ClearCartComponent_Factory(t) {
  return new (t || _ClearCartComponent)(\u0275\u0275directiveInject(ActiveCartFacade), \u0275\u0275directiveInject(ViewContainerRef), \u0275\u0275directiveInject(LaunchDialogService));
};
_ClearCartComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
  type: _ClearCartComponent,
  selectors: [["cx-clear-cart"]],
  viewQuery: function ClearCartComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(_c11, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.element = _t.first);
    }
  },
  decls: 2,
  vars: 3,
  consts: [["element", ""], [4, "ngIf"], ["class", "clear-cart-wrapper", 4, "ngIf"], [1, "clear-cart-wrapper"], ["type", "button", 1, "btn", "btn-tertiary", "clear-cart-btn", 3, "click"]],
  template: function ClearCartComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275template(0, ClearCartComponent_ng_container_0_Template, 2, 1, "ng-container", 1);
      \u0275\u0275pipe(1, "async");
    }
    if (rf & 2) {
      \u0275\u0275property("ngIf", \u0275\u0275pipeBind1(1, 1, ctx.cart$));
    }
  },
  dependencies: [NgIf, AsyncPipe, TranslatePipe],
  encapsulation: 2,
  changeDetection: 0
});
var ClearCartComponent = _ClearCartComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ClearCartComponent, [{
    type: Component,
    args: [{
      selector: "cx-clear-cart",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: `<ng-container *ngIf="cart$ | async as cart">
  <div *ngIf="cart.totalItems > 0" class="clear-cart-wrapper">
    <button
      #element
      (click)="openDialog($event)"
      class="btn btn-tertiary clear-cart-btn"
      type="button"
    >
      {{ 'clearCart.clearCart' | cxTranslate }}
    </button>
  </div>
</ng-container>
`
    }]
  }], () => [{
    type: ActiveCartFacade
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
var _ClearCartDialogComponentService = class _ClearCartDialogComponentService {
  constructor(launchDialogService, globalMessageService, activeCartFacade, multiCartFacade, userIdService, eventService) {
    this.launchDialogService = launchDialogService;
    this.globalMessageService = globalMessageService;
    this.activeCartFacade = activeCartFacade;
    this.multiCartFacade = multiCartFacade;
    this.userIdService = userIdService;
    this.eventService = eventService;
  }
  /**
   * Clear the cart by deleting the active cart.
   */
  deleteActiveCart() {
    this.activeCartFacade.getActiveCartId().pipe(withLatestFrom(this.userIdService.getUserId()), take(1), tap(([cartId, userId]) => {
      this.multiCartFacade.deleteCart(cartId, userId);
    }), switchMap(() => merge(this.eventService.get(DeleteCartSuccessEvent).pipe(map(() => true)), this.eventService.get(DeleteCartFailEvent).pipe(map(() => false))).pipe(take(1))), tap(() => this.closeDialog("Close dialog after cart cleared"))).subscribe((success) => {
      this.displayGlobalMessage(success);
    });
  }
  /**
   * Close clear cart modal dialog
   *
   * @param reason to close dialog
   */
  closeDialog(reason) {
    this.launchDialogService.closeDialog(reason);
  }
  /**
   * Display global message after clearing cart.
   * By default, only message displayed is of type `Success`. A negative scenario
   * related to cart has been handled in the occ layer already.
   *
   * @param success result of clear cart action
   */
  displayGlobalMessage(success) {
    if (success) {
      this.globalMessageService.add({
        key: "clearCart.cartClearedSuccessfully"
      }, GlobalMessageType.MSG_TYPE_CONFIRMATION);
    }
  }
};
_ClearCartDialogComponentService.\u0275fac = function ClearCartDialogComponentService_Factory(t) {
  return new (t || _ClearCartDialogComponentService)(\u0275\u0275inject(LaunchDialogService), \u0275\u0275inject(GlobalMessageService), \u0275\u0275inject(ActiveCartFacade), \u0275\u0275inject(MultiCartFacade), \u0275\u0275inject(UserIdService), \u0275\u0275inject(EventService));
};
_ClearCartDialogComponentService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
  token: _ClearCartDialogComponentService,
  factory: _ClearCartDialogComponentService.\u0275fac,
  providedIn: "root"
});
var ClearCartDialogComponentService = _ClearCartDialogComponentService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ClearCartDialogComponentService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: LaunchDialogService
  }, {
    type: GlobalMessageService
  }, {
    type: ActiveCartFacade
  }, {
    type: MultiCartFacade
  }, {
    type: UserIdService
  }, {
    type: EventService
  }], null);
})();
var _ClearCartDialogComponent = class _ClearCartDialogComponent {
  handleClick(event) {
    if (event.target.tagName === this.el.nativeElement.tagName) {
      this.close("Cross click");
    }
  }
  constructor(el, clearCartDialogComponentService) {
    this.el = el;
    this.clearCartDialogComponentService = clearCartDialogComponentService;
    this.focusConfig = {
      trap: true,
      block: true,
      autofocus: "button.btn-primary",
      focusOnEscape: true
    };
    this.isClearing = false;
    this.iconTypes = ICON_TYPE;
  }
  clearCart() {
    this.isClearing = true;
    this.clearCartDialogComponentService.deleteActiveCart();
  }
  close(reason) {
    this.clearCartDialogComponentService.closeDialog(reason);
  }
  ngOnDestroy() {
    this.close("close dialog on component destroy");
  }
};
_ClearCartDialogComponent.\u0275fac = function ClearCartDialogComponent_Factory(t) {
  return new (t || _ClearCartDialogComponent)(\u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(ClearCartDialogComponentService));
};
_ClearCartDialogComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
  type: _ClearCartDialogComponent,
  selectors: [["cx-clear-cart-dialog"]],
  hostBindings: function ClearCartDialogComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275listener("click", function ClearCartDialogComponent_click_HostBindingHandler($event) {
        return ctx.handleClick($event);
      });
    }
  },
  decls: 5,
  vars: 3,
  consts: [["loading", ""], [1, "cx-clear-cart-dialog", 3, "esc", "cxFocus"], [1, "cx-clear-cart-container"], [4, "ngIf", "ngIfElse"], ["role", "status"], [1, "modal-header", "cx-clear-cart-header"], [1, "cx-clear-cart-title", "modal-title"], ["type", "button", 1, "close", 3, "click"], ["aria-hidden", "true"], [3, "type"], [1, "cx-clear-cart-body"], [1, "clear-cart-msg"], ["role", "alert", 1, "clear-cart-warning"], [1, "cx-clear-cart-footer"], ["type", "button", 1, "btn", "btn-secondary", 3, "click"], ["type", "button", 1, "btn", "btn-primary", 3, "click"], [1, "cx-spinner"]],
  template: function ClearCartDialogComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "div", 1);
      \u0275\u0275listener("esc", function ClearCartDialogComponent_Template_div_esc_0_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.close("Escape clicked"));
      });
      \u0275\u0275elementStart(1, "div", 2);
      \u0275\u0275template(2, ClearCartDialogComponent_ng_container_2_Template, 26, 22, "ng-container", 3);
      \u0275\u0275elementEnd()();
      \u0275\u0275template(3, ClearCartDialogComponent_ng_template_3_Template, 6, 3, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
    }
    if (rf & 2) {
      const loading_r4 = \u0275\u0275reference(4);
      \u0275\u0275property("cxFocus", ctx.focusConfig);
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", !ctx.isClearing)("ngIfElse", loading_r4);
    }
  },
  dependencies: [NgIf, SpinnerComponent, IconComponent, FocusDirective, TranslatePipe],
  encapsulation: 2,
  changeDetection: 0
});
var ClearCartDialogComponent = _ClearCartDialogComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ClearCartDialogComponent, [{
    type: Component,
    args: [{
      selector: "cx-clear-cart-dialog",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: `<div
  [cxFocus]="focusConfig"
  (esc)="close('Escape clicked')"
  class="cx-clear-cart-dialog"
>
  <div class="cx-clear-cart-container">
    <ng-container *ngIf="!isClearing; else loading">
      <div
        role="status"
        [attr.aria-label]="'common.loaded' | cxTranslate"
      ></div>
      <!-- Modal Header -->
      <div class="modal-header cx-clear-cart-header">
        <div class="cx-clear-cart-title modal-title">
          {{ 'clearCart.clearCart' | cxTranslate }}
        </div>

        <button
          (click)="close('Close Clear Cart Dialog')"
          [attr.aria-label]="'common.close' | cxTranslate"
          class="close"
          type="button"
        >
          <span aria-hidden="true">
            <cx-icon [type]="iconTypes.CLOSE"></cx-icon>
          </span>
        </button>
      </div>

      <!-- Modal Body -->
      <div class="cx-clear-cart-body">
        <div class="clear-cart-msg">
          {{ 'clearCart.allItemsWillBeRemoved' | cxTranslate }}
        </div>
        <div class="clear-cart-warning" role="alert">
          {{ 'clearCart.areYouSureToClearCart' | cxTranslate }}
        </div>
        <div>
          <div class="cx-clear-cart-footer">
            <button
              (click)="close('Cancel Clear Cart')"
              class="btn btn-secondary"
              type="button"
            >
              {{ 'common.cancel' | cxTranslate }}
            </button>
            <button (click)="clearCart()" class="btn btn-primary" type="button">
              {{ 'clearCart.clearCart' | cxTranslate }}
            </button>
          </div>
        </div>
      </div>
    </ng-container>
  </div>
</div>

<ng-template #loading>
  <div class="modal-header cx-clear-cart-header">
    <div class="cx-clear-cart-title modal-title">
      {{ 'clearCart.clearingCart' | cxTranslate }}
    </div>
  </div>
  <div class="cx-spinner">
    <cx-spinner></cx-spinner>
  </div>
</ng-template>
`
    }]
  }], () => [{
    type: ElementRef
  }, {
    type: ClearCartDialogComponentService
  }], {
    handleClick: [{
      type: HostListener,
      args: ["click", ["$event"]]
    }]
  });
})();
var _ClearCartDialogModule = class _ClearCartDialogModule {
};
_ClearCartDialogModule.\u0275fac = function ClearCartDialogModule_Factory(t) {
  return new (t || _ClearCartDialogModule)();
};
_ClearCartDialogModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
  type: _ClearCartDialogModule
});
_ClearCartDialogModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
  imports: [CommonModule, SpinnerModule, I18nModule, IconModule, KeyboardFocusModule]
});
var ClearCartDialogModule = _ClearCartDialogModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ClearCartDialogModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, SpinnerModule, I18nModule, IconModule, KeyboardFocusModule],
      declarations: [ClearCartDialogComponent],
      exports: [ClearCartDialogComponent]
    }]
  }], null, null);
})();
var defaultClearCartLayoutConfig = {
  launch: {
    CLEAR_CART: {
      inline: true,
      component: ClearCartDialogComponent,
      dialogType: DIALOG_TYPE.DIALOG
    }
  }
};
var _ClearCartModule = class _ClearCartModule {
};
_ClearCartModule.\u0275fac = function ClearCartModule_Factory(t) {
  return new (t || _ClearCartModule)();
};
_ClearCartModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
  type: _ClearCartModule
});
_ClearCartModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
  providers: [provideDefaultConfig({
    cmsComponents: {
      ClearCartComponent: {
        component: ClearCartComponent
      }
    }
  }), provideDefaultConfig(defaultClearCartLayoutConfig)],
  imports: [CommonModule, I18nModule, ClearCartDialogModule]
});
var ClearCartModule = _ClearCartModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ClearCartModule, [{
    type: NgModule,
    args: [{
      declarations: [ClearCartComponent],
      exports: [ClearCartComponent],
      imports: [CommonModule, I18nModule, ClearCartDialogModule],
      providers: [provideDefaultConfig({
        cmsComponents: {
          ClearCartComponent: {
            component: ClearCartComponent
          }
        }
      }), provideDefaultConfig(defaultClearCartLayoutConfig)]
    }]
  }], null, null);
})();
var _CartValidationWarningsComponent = class _CartValidationWarningsComponent {
  constructor(cartValidationFacade) {
    this.cartValidationFacade = cartValidationFacade;
    this.iconTypes = ICON_TYPE;
    this.visibleWarnings = {};
    this.cartModifications$ = this.cartValidationFacade.getValidationResults().pipe(map((modificationList) => {
      const result = modificationList.filter((modification) => modification.statusCode === CartValidationStatusCode.NO_STOCK);
      result.forEach((modification) => {
        if (modification.entry?.product?.code) {
          this.visibleWarnings[modification.entry.product.code] = true;
        }
      });
      return result;
    }));
  }
  removeMessage(cartModification) {
    if (cartModification.entry?.product?.code) {
      this.visibleWarnings[cartModification.entry.product.code] = false;
    }
  }
};
_CartValidationWarningsComponent.\u0275fac = function CartValidationWarningsComponent_Factory(t) {
  return new (t || _CartValidationWarningsComponent)(\u0275\u0275directiveInject(CartValidationFacade));
};
_CartValidationWarningsComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
  type: _CartValidationWarningsComponent,
  selectors: [["cx-cart-validation-warnings"]],
  decls: 2,
  vars: 3,
  consts: [[4, "ngFor", "ngForOf"], ["class", "alert alert-danger", 4, "ngIf"], [1, "alert", "alert-danger"], [1, "alert-icon"], [3, "type"], [3, "routerLink"], ["type", "button", 1, "close", 3, "click"]],
  template: function CartValidationWarningsComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275template(0, CartValidationWarningsComponent_ng_container_0_Template, 2, 1, "ng-container", 0);
      \u0275\u0275pipe(1, "async");
    }
    if (rf & 2) {
      \u0275\u0275property("ngForOf", \u0275\u0275pipeBind1(1, 1, ctx.cartModifications$));
    }
  },
  dependencies: [NgForOf, NgIf, RouterLink, IconComponent, AsyncPipe, TranslatePipe, UrlPipe],
  encapsulation: 2,
  changeDetection: 0
});
var CartValidationWarningsComponent = _CartValidationWarningsComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CartValidationWarningsComponent, [{
    type: Component,
    args: [{
      selector: "cx-cart-validation-warnings",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: `<ng-container *ngFor="let cartModification of cartModifications$ | async">
  <div
    class="alert alert-danger"
    *ngIf="visibleWarnings[cartModification.entry.product.code]"
  >
    <span class="alert-icon">
      <cx-icon [type]="iconTypes.ERROR"></cx-icon>
    </span>
    <span>
      <a
        [routerLink]="
          { cxRoute: 'product', params: cartModification.entry.product } | cxUrl
        "
      >
        {{ cartModification.entry.product.name }}
      </a>
      {{ 'validation.productOutOfStock' | cxTranslate }}
    </span>

    <button
      class="close"
      type="button"
      (click)="removeMessage(cartModification)"
    >
      <cx-icon [type]="iconTypes.CLOSE"></cx-icon>
    </button>
  </div>
</ng-container>
`
    }]
  }], () => [{
    type: CartValidationFacade
  }], null);
})();
var _CartDetailsComponent = class _CartDetailsComponent {
  constructor(activeCartService, selectiveCartService, authService, routingService, cartConfig) {
    this.activeCartService = activeCartService;
    this.selectiveCartService = selectiveCartService;
    this.authService = authService;
    this.routingService = routingService;
    this.cartConfig = cartConfig;
    this.loggedIn = false;
    this.promotionLocation = PromotionLocation.ActiveCart;
  }
  ngOnInit() {
    this.cart$ = this.activeCartService.getActive();
    this.entries$ = this.activeCartService.getEntries().pipe(filter((entries) => entries.length > 0));
    this.selectiveCartEnabled = this.cartConfig.isSelectiveCartEnabled();
    this.cartLoaded$ = combineLatest([this.activeCartService.isStable(), this.selectiveCartEnabled ? this.selectiveCartService.isStable() : of(false), this.authService.isUserLoggedIn()]).pipe(tap(([, , loggedIn]) => this.loggedIn = loggedIn), map(([cartLoaded, sflLoaded, loggedIn]) => loggedIn && this.selectiveCartEnabled ? cartLoaded && sflLoaded : cartLoaded));
  }
  saveForLater(item) {
    if (this.loggedIn) {
      this.activeCartService.removeEntry(item);
      this.selectiveCartService.addEntry(item.product?.code ?? "", item.quantity ?? 0);
    } else {
      this.routingService.go({
        cxRoute: "login"
      });
    }
  }
};
_CartDetailsComponent.\u0275fac = function CartDetailsComponent_Factory(t) {
  return new (t || _CartDetailsComponent)(\u0275\u0275directiveInject(ActiveCartFacade), \u0275\u0275directiveInject(SelectiveCartFacade), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(RoutingService), \u0275\u0275directiveInject(CartConfigService));
};
_CartDetailsComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
  type: _CartDetailsComponent,
  selectors: [["cx-cart-details"]],
  decls: 4,
  vars: 3,
  consts: [["saveForLaterBtn", ""], [4, "ngIf"], ["class", "cart-details-wrapper", 4, "ngIf"], [1, "cart-details-wrapper"], [1, "cx-total"], [3, "promotions"], [3, "items", "cartIsLoading", "promotionLocation", "options"], ["class", "btn btn-tertiary cx-sfl-btn", "type", "button", 3, "disabled", "click", 4, "ngIf"], ["type", "button", 1, "btn", "btn-tertiary", "cx-sfl-btn", 3, "click", "disabled"]],
  template: function CartDetailsComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275template(0, CartDetailsComponent_ng_container_0_Template, 3, 3, "ng-container", 1);
      \u0275\u0275pipe(1, "async");
      \u0275\u0275template(2, CartDetailsComponent_ng_template_2_Template, 1, 1, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
    }
    if (rf & 2) {
      \u0275\u0275property("ngIf", \u0275\u0275pipeBind1(1, 1, ctx.cart$));
    }
  },
  dependencies: [CartItemListComponent, NgIf, PromotionsComponent, CartValidationWarningsComponent, AsyncPipe, TranslatePipe],
  encapsulation: 2,
  changeDetection: 0
});
var CartDetailsComponent = _CartDetailsComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CartDetailsComponent, [{
    type: Component,
    args: [{
      selector: "cx-cart-details",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: `<ng-container *ngIf="cart$ | async as cart">
  <ng-container *ngIf="entries$ | async as entries">
    <div *ngIf="cart.totalItems > 0" class="cart-details-wrapper">
      <cx-cart-validation-warnings></cx-cart-validation-warnings>

      <h2 class="cx-total">
        {{ 'cartDetails.cartName' | cxTranslate: { code: cart.code } }}
      </h2>

      <cx-promotions
        [promotions]="
          (cart.appliedOrderPromotions || []).concat(
            cart.potentialOrderPromotions || []
          )
        "
      ></cx-promotions>

      <cx-cart-item-list
        [items]="entries"
        [cartIsLoading]="!(cartLoaded$ | async)"
        [promotionLocation]="promotionLocation"
        [options]="{
          isSaveForLater: false,
          optionalBtn: saveForLaterBtn
        }"
      ></cx-cart-item-list>
    </div>
  </ng-container>
</ng-container>

<ng-template let-ctx #saveForLaterBtn>
  <button
    *ngIf="selectiveCartEnabled"
    class="btn btn-tertiary cx-sfl-btn"
    [disabled]="ctx.loading"
    (click)="saveForLater(ctx.item)"
    type="button"
  >
    {{ 'saveForLaterItems.saveForLater' | cxTranslate }}
  </button>
</ng-template>
`
    }]
  }], () => [{
    type: ActiveCartFacade
  }, {
    type: SelectiveCartFacade
  }, {
    type: AuthService
  }, {
    type: RoutingService
  }, {
    type: CartConfigService
  }], null);
})();
var _CartValidationWarningsModule = class _CartValidationWarningsModule {
};
_CartValidationWarningsModule.\u0275fac = function CartValidationWarningsModule_Factory(t) {
  return new (t || _CartValidationWarningsModule)();
};
_CartValidationWarningsModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
  type: _CartValidationWarningsModule
});
_CartValidationWarningsModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
  imports: [CommonModule, RouterModule, I18nModule, UrlModule, IconModule]
});
var CartValidationWarningsModule = _CartValidationWarningsModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CartValidationWarningsModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, RouterModule, I18nModule, UrlModule, IconModule],
      exports: [CartValidationWarningsComponent],
      declarations: [CartValidationWarningsComponent]
    }]
  }], null, null);
})();
var _CartDetailsModule = class _CartDetailsModule {
};
_CartDetailsModule.\u0275fac = function CartDetailsModule_Factory(t) {
  return new (t || _CartDetailsModule)();
};
_CartDetailsModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
  type: _CartDetailsModule
});
_CartDetailsModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
  providers: [provideDefaultConfig({
    cmsComponents: {
      CartComponent: {
        component: CartDetailsComponent
      }
    }
  })],
  imports: [CartSharedModule, CommonModule, CartCouponModule, RouterModule, UrlModule, PromotionsModule, I18nModule, CartValidationWarningsModule]
});
var CartDetailsModule = _CartDetailsModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CartDetailsModule, [{
    type: NgModule,
    args: [{
      imports: [CartSharedModule, CommonModule, CartCouponModule, RouterModule, UrlModule, PromotionsModule, I18nModule, CartValidationWarningsModule],
      providers: [provideDefaultConfig({
        cmsComponents: {
          CartComponent: {
            component: CartDetailsComponent
          }
        }
      })],
      declarations: [CartDetailsComponent],
      exports: [CartDetailsComponent]
    }]
  }], null, null);
})();
var _CartPageLayoutHandler = class _CartPageLayoutHandler {
  constructor(activeCartService, selectiveCartService, cartConfig) {
    this.activeCartService = activeCartService;
    this.selectiveCartService = selectiveCartService;
    this.cartConfig = cartConfig;
  }
  handle(slots$, pageTemplate, section) {
    if (pageTemplate === "CartPageTemplate" && !section) {
      return combineLatest([slots$, this.activeCartService.getActive(), this.getSelectiveCart(), this.activeCartService.getLoading()]).pipe(map(([slots, cart, selectiveCart, loadingCart]) => {
        const exclude = (arr, args) => arr.filter((item) => args.every((arg) => arg !== item));
        return isEmpty(cart) && loadingCart ? exclude(slots, ["TopContent", "CenterRightContentSlot", "EmptyCartMiddleContent"]) : cart.totalItems ? exclude(slots, ["EmptyCartMiddleContent"]) : selectiveCart?.totalItems ? exclude(slots, ["EmptyCartMiddleContent", "CenterRightContentSlot"]) : exclude(slots, ["TopContent", "CenterRightContentSlot"]);
      }));
    }
    return slots$;
  }
  getSelectiveCart() {
    return this.cartConfig.isSelectiveCartEnabled() ? this.selectiveCartService.getCart().pipe(startWith(null)) : of({});
  }
};
_CartPageLayoutHandler.\u0275fac = function CartPageLayoutHandler_Factory(t) {
  return new (t || _CartPageLayoutHandler)(\u0275\u0275inject(ActiveCartFacade), \u0275\u0275inject(SelectiveCartFacade), \u0275\u0275inject(CartConfigService));
};
_CartPageLayoutHandler.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
  token: _CartPageLayoutHandler,
  factory: _CartPageLayoutHandler.\u0275fac,
  providedIn: "root"
});
var CartPageLayoutHandler = _CartPageLayoutHandler;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CartPageLayoutHandler, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: ActiveCartFacade
  }, {
    type: SelectiveCartFacade
  }, {
    type: CartConfigService
  }], null);
})();
var _CartProceedToCheckoutComponent = class _CartProceedToCheckoutComponent {
  constructor(router, cd) {
    this.router = router;
    this.cd = cd;
    this.cartValidationInProgress = false;
    this.subscription = new Subscription();
  }
  ngOnInit() {
    this.subscription.add(this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd || event instanceof NavigationCancel) {
        this.cartValidationInProgress = false;
        this.cd?.markForCheck();
      }
    }));
  }
  disableButtonWhileNavigation() {
    this.cartValidationInProgress = true;
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
};
_CartProceedToCheckoutComponent.\u0275fac = function CartProceedToCheckoutComponent_Factory(t) {
  return new (t || _CartProceedToCheckoutComponent)(\u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(ChangeDetectorRef));
};
_CartProceedToCheckoutComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
  type: _CartProceedToCheckoutComponent,
  selectors: [["cx-cart-proceed-to-checkout"]],
  decls: 4,
  vars: 11,
  consts: [["tabindex", "-1", 3, "clickEvent", "disabled", "loading", "routerLink"]],
  template: function CartProceedToCheckoutComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "cx-progress-button", 0);
      \u0275\u0275pipe(1, "cxUrl");
      \u0275\u0275listener("clickEvent", function CartProceedToCheckoutComponent_Template_cx_progress_button_clickEvent_0_listener() {
        return ctx.disableButtonWhileNavigation();
      });
      \u0275\u0275text(2);
      \u0275\u0275pipe(3, "cxTranslate");
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275classMap("btn btn-primary btn-block");
      \u0275\u0275property("disabled", ctx.cartValidationInProgress)("loading", ctx.cartValidationInProgress)("routerLink", \u0275\u0275pipeBind1(1, 6, \u0275\u0275pureFunction0(10, _c7)));
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 8, ctx.cartValidationInProgress ? "validation.inProgress" : "cartDetails.proceedToCheckout"), "\n");
    }
  },
  dependencies: [ProgressButtonComponent, RouterLink, TranslatePipe, UrlPipe],
  encapsulation: 2,
  changeDetection: 0
});
var CartProceedToCheckoutComponent = _CartProceedToCheckoutComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CartProceedToCheckoutComponent, [{
    type: Component,
    args: [{
      selector: "cx-cart-proceed-to-checkout",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: `<cx-progress-button
  (clickEvent)="disableButtonWhileNavigation()"
  [class]="'btn btn-primary btn-block'"
  [disabled]="cartValidationInProgress"
  [loading]="cartValidationInProgress"
  [routerLink]="{ cxRoute: 'checkout' } | cxUrl"
  tabindex="-1"
>
  {{
    (cartValidationInProgress
      ? 'validation.inProgress'
      : 'cartDetails.proceedToCheckout'
    ) | cxTranslate
  }}
</cx-progress-button>
`
    }]
  }], () => [{
    type: Router
  }, {
    type: ChangeDetectorRef
  }], null);
})();
var _CartProceedToCheckoutModule = class _CartProceedToCheckoutModule {
};
_CartProceedToCheckoutModule.\u0275fac = function CartProceedToCheckoutModule_Factory(t) {
  return new (t || _CartProceedToCheckoutModule)();
};
_CartProceedToCheckoutModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
  type: _CartProceedToCheckoutModule
});
_CartProceedToCheckoutModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
  providers: [provideDefaultConfig({
    cmsComponents: {
      CartProceedToCheckoutComponent: {
        component: CartProceedToCheckoutComponent
      }
    }
  })],
  imports: [CommonModule, ProgressButtonModule, RouterModule, I18nModule, UrlModule]
});
var CartProceedToCheckoutModule = _CartProceedToCheckoutModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CartProceedToCheckoutModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, ProgressButtonModule, RouterModule, I18nModule, UrlModule],
      providers: [provideDefaultConfig({
        cmsComponents: {
          CartProceedToCheckoutComponent: {
            component: CartProceedToCheckoutComponent
          }
        }
      })],
      declarations: [CartProceedToCheckoutComponent],
      exports: [CartProceedToCheckoutComponent]
    }]
  }], null, null);
})();
var _CartTotalsComponent = class _CartTotalsComponent {
  constructor(activeCartService) {
    this.activeCartService = activeCartService;
  }
  ngOnInit() {
    this.cart$ = this.activeCartService.getActive();
  }
};
_CartTotalsComponent.\u0275fac = function CartTotalsComponent_Factory(t) {
  return new (t || _CartTotalsComponent)(\u0275\u0275directiveInject(ActiveCartFacade));
};
_CartTotalsComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
  type: _CartTotalsComponent,
  selectors: [["cx-cart-totals"]],
  decls: 2,
  vars: 3,
  consts: [[4, "ngIf"], [3, "cart"]],
  template: function CartTotalsComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275template(0, CartTotalsComponent_ng_container_0_Template, 2, 1, "ng-container", 0);
      \u0275\u0275pipe(1, "async");
    }
    if (rf & 2) {
      \u0275\u0275property("ngIf", \u0275\u0275pipeBind1(1, 1, ctx.cart$));
    }
  },
  dependencies: [NgIf, OrderSummaryComponent, AsyncPipe],
  encapsulation: 2,
  changeDetection: 0
});
var CartTotalsComponent = _CartTotalsComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CartTotalsComponent, [{
    type: Component,
    args: [{
      selector: "cx-cart-totals",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: '<ng-container *ngIf="cart$ | async as cart">\n  <cx-order-summary [cart]="cart"></cx-order-summary>\n</ng-container>\n'
    }]
  }], () => [{
    type: ActiveCartFacade
  }], null);
})();
var _CartTotalsModule = class _CartTotalsModule {
};
_CartTotalsModule.\u0275fac = function CartTotalsModule_Factory(t) {
  return new (t || _CartTotalsModule)();
};
_CartTotalsModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
  type: _CartTotalsModule
});
_CartTotalsModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
  providers: [provideDefaultConfig({
    cmsComponents: {
      CartTotalsComponent: {
        component: CartTotalsComponent
      }
    }
  })],
  imports: [CommonModule, CartSharedModule]
});
var CartTotalsModule = _CartTotalsModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CartTotalsModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, CartSharedModule],
      providers: [provideDefaultConfig({
        cmsComponents: {
          CartTotalsComponent: {
            component: CartTotalsComponent
          }
        }
      })],
      declarations: [CartTotalsComponent],
      exports: [CartTotalsComponent]
    }]
  }], null, null);
})();
var _ActiveCartOrderEntriesContext = class _ActiveCartOrderEntriesContext {
  constructor(importInfoService, activeCartFacade) {
    this.importInfoService = importInfoService;
    this.activeCartFacade = activeCartFacade;
    this.type = OrderEntriesSource.ACTIVE_CART;
  }
  addEntries(products) {
    return this.add(products).pipe(switchMap((cartId) => this.importInfoService.getResults(cartId)), take(products.length));
  }
  getEntries() {
    return this.activeCartFacade.getEntries();
  }
  add(products) {
    this.activeCartFacade.addEntries(this.mapProductsToOrderEntries(products));
    return this.activeCartFacade.getActiveCartId();
  }
  mapProductsToOrderEntries(products) {
    return products.map((product) => ({
      product: {
        code: product.productCode
      },
      quantity: product.quantity
    }));
  }
};
_ActiveCartOrderEntriesContext.\u0275fac = function ActiveCartOrderEntriesContext_Factory(t) {
  return new (t || _ActiveCartOrderEntriesContext)(\u0275\u0275inject(ProductImportInfoService), \u0275\u0275inject(ActiveCartFacade));
};
_ActiveCartOrderEntriesContext.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
  token: _ActiveCartOrderEntriesContext,
  factory: _ActiveCartOrderEntriesContext.\u0275fac,
  providedIn: "root"
});
var ActiveCartOrderEntriesContext = _ActiveCartOrderEntriesContext;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ActiveCartOrderEntriesContext, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: ProductImportInfoService
  }, {
    type: ActiveCartFacade
  }], null);
})();
var _SaveForLaterComponent = class _SaveForLaterComponent {
  constructor(cmsService, cartService, selectiveCartService) {
    this.cmsService = cmsService;
    this.cartService = cartService;
    this.selectiveCartService = selectiveCartService;
    this.CartLocation = PromotionLocation;
  }
  ngOnInit() {
    this.isCartEmpty$ = this.cartService.getActive().pipe(map((cart) => !(cart && cart.totalItems && cart.totalItems > 0)));
    this.saveForLater$ = this.selectiveCartService.getCart();
    this.entries$ = this.selectiveCartService.getEntries().pipe(filter((entries) => entries.length > 0));
    this.cartLoaded$ = combineLatest([this.cartService.isStable(), this.selectiveCartService.isStable()]).pipe(map(([cartLoaded, sflLoaded]) => cartLoaded && sflLoaded));
    this.data$ = this.cmsService.getComponentData("EmptyCartParagraphComponent");
  }
  moveToCart(item) {
    this.selectiveCartService.removeEntry(item);
    this.cartService.addEntry(item.product?.code ?? "", item.quantity ?? 0);
  }
};
_SaveForLaterComponent.\u0275fac = function SaveForLaterComponent_Factory(t) {
  return new (t || _SaveForLaterComponent)(\u0275\u0275directiveInject(CmsService), \u0275\u0275directiveInject(ActiveCartFacade), \u0275\u0275directiveInject(SelectiveCartFacade));
};
_SaveForLaterComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
  type: _SaveForLaterComponent,
  selectors: [["cx-save-for-later"]],
  decls: 6,
  vars: 6,
  consts: [["moveToCartBtn", ""], [4, "ngIf"], ["class", "cx-empty-cart-info", 3, "innerHTML", 4, "ngIf"], [1, "cx-empty-cart-info", 3, "innerHTML"], ["class", "cart-details-wrapper", 4, "ngIf"], [1, "cart-details-wrapper"], [1, "cx-total"], [3, "items", "readonly", "cartIsLoading", "promotionLocation", "options"], ["type", "button", 1, "btn", "btn-tertiary", "cx-sfl-btn", 3, "click", "disabled"]],
  template: function SaveForLaterComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275template(0, SaveForLaterComponent_ng_container_0_Template, 3, 3, "ng-container", 1);
      \u0275\u0275pipe(1, "async");
      \u0275\u0275template(2, SaveForLaterComponent_ng_container_2_Template, 3, 3, "ng-container", 1);
      \u0275\u0275pipe(3, "async");
      \u0275\u0275template(4, SaveForLaterComponent_ng_template_4_Template, 3, 4, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
    }
    if (rf & 2) {
      \u0275\u0275property("ngIf", \u0275\u0275pipeBind1(1, 2, ctx.isCartEmpty$));
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", \u0275\u0275pipeBind1(3, 4, ctx.saveForLater$));
    }
  },
  dependencies: [NgIf, CartItemListComponent, AsyncPipe, TranslatePipe],
  encapsulation: 2
});
var SaveForLaterComponent = _SaveForLaterComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SaveForLaterComponent, [{
    type: Component,
    args: [{
      selector: "cx-save-for-later",
      template: `<ng-container *ngIf="isCartEmpty$ | async">
  <p
    *ngIf="data$ | async as data"
    [innerHTML]="data.content"
    class="cx-empty-cart-info"
  ></p>
</ng-container>

<ng-container *ngIf="saveForLater$ | async as saveForLater">
  <ng-container *ngIf="entries$ | async as entries">
    <div *ngIf="saveForLater.totalItems > 0" class="cart-details-wrapper">
      <div class="cx-total">
        {{
          'saveForLaterItems.itemTotal'
            | cxTranslate: { count: saveForLater.totalItems }
        }}
      </div>
      <cx-cart-item-list
        [items]="entries"
        [readonly]="false"
        [cartIsLoading]="!(cartLoaded$ | async)"
        [promotionLocation]="CartLocation.SaveForLater"
        [options]="{
          isSaveForLater: true,
          optionalBtn: moveToCartBtn
        }"
      ></cx-cart-item-list>
    </div>
  </ng-container>
</ng-container>

<ng-template let-ctx #moveToCartBtn>
  <button
    class="btn btn-tertiary cx-sfl-btn"
    [disabled]="ctx.loading"
    (click)="moveToCart(ctx.item)"
    type="button"
  >
    {{ 'saveForLaterItems.moveToCart' | cxTranslate }}
  </button>
</ng-template>
`
    }]
  }], () => [{
    type: CmsService
  }, {
    type: ActiveCartFacade
  }, {
    type: SelectiveCartFacade
  }], null);
})();
var _SaveForLaterModule = class _SaveForLaterModule {
};
_SaveForLaterModule.\u0275fac = function SaveForLaterModule_Factory(t) {
  return new (t || _SaveForLaterModule)();
};
_SaveForLaterModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
  type: _SaveForLaterModule
});
_SaveForLaterModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
  providers: [provideDefaultConfig({
    cmsComponents: {
      SaveForLaterComponent: {
        component: SaveForLaterComponent
      }
    }
  })],
  imports: [CommonModule, I18nModule, CartSharedModule]
});
var SaveForLaterModule = _SaveForLaterModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SaveForLaterModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, I18nModule, CartSharedModule],
      providers: [provideDefaultConfig({
        cmsComponents: {
          SaveForLaterComponent: {
            component: SaveForLaterComponent
          }
        }
      })],
      declarations: [SaveForLaterComponent],
      exports: [SaveForLaterComponent]
    }]
  }], null, null);
})();
var _CartBaseComponentsModule = class _CartBaseComponentsModule {
};
_CartBaseComponentsModule.\u0275fac = function CartBaseComponentsModule_Factory(t) {
  return new (t || _CartBaseComponentsModule)();
};
_CartBaseComponentsModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
  type: _CartBaseComponentsModule
});
_CartBaseComponentsModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
  providers: [{
    provide: PAGE_LAYOUT_HANDLER,
    useExisting: CartPageLayoutHandler,
    multi: true
  }, {
    provide: ActiveCartOrderEntriesContextToken,
    useExisting: ActiveCartOrderEntriesContext
  }],
  imports: [CommonModule, CartDetailsModule, CartProceedToCheckoutModule, CartTotalsModule, CartSharedModule, SaveForLaterModule, ClearCartModule, OutletModule.forChild(), CartDetailsModule, CartProceedToCheckoutModule, CartTotalsModule, CartSharedModule, ClearCartModule, AddedToCartDialogModule, SaveForLaterModule]
});
var CartBaseComponentsModule = _CartBaseComponentsModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CartBaseComponentsModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, CartDetailsModule, CartProceedToCheckoutModule, CartTotalsModule, CartSharedModule, SaveForLaterModule, ClearCartModule, OutletModule.forChild()],
      exports: [CartDetailsModule, CartProceedToCheckoutModule, CartTotalsModule, CartSharedModule, ClearCartModule, AddedToCartDialogModule, SaveForLaterModule],
      providers: [{
        provide: PAGE_LAYOUT_HANDLER,
        useExisting: CartPageLayoutHandler,
        multi: true
      }, {
        provide: ActiveCartOrderEntriesContextToken,
        useExisting: ActiveCartOrderEntriesContext
      }]
    }]
  }], null, null);
})();
var _CartValidationComponentsModule = class _CartValidationComponentsModule {
};
_CartValidationComponentsModule.\u0275fac = function CartValidationComponentsModule_Factory(t) {
  return new (t || _CartValidationComponentsModule)();
};
_CartValidationComponentsModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
  type: _CartValidationComponentsModule
});
_CartValidationComponentsModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
  imports: [CartValidationWarningsModule, CartItemValidationWarningModule]
});
var CartValidationComponentsModule = _CartValidationComponentsModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CartValidationComponentsModule, [{
    type: NgModule,
    args: [{
      imports: [CartValidationWarningsModule, CartItemValidationWarningModule],
      providers: []
    }]
  }], null, null);
})();

// node_modules/@spartacus/cart/fesm2022/spartacus-cart-base-occ.mjs
var _OccCartNormalizer = class _OccCartNormalizer {
  constructor(converter) {
    this.converter = converter;
  }
  convert(source, target) {
    if (target === void 0) {
      target = __spreadValues({}, source);
    }
    this.removeDuplicatePromotions(source, target);
    if (source.entries) {
      target.entries = source.entries.map((entry) => __spreadProps(__spreadValues({}, entry), {
        product: this.converter.convert(entry.product, PRODUCT_NORMALIZER),
        promotions: this.converter.convert({
          item: entry,
          promotions: target?.appliedProductPromotions
        }, ORDER_ENTRY_PROMOTIONS_NORMALIZER)
      }));
    }
    return target;
  }
  /**
   * Remove all duplicate promotions
   */
  removeDuplicatePromotions(source, target) {
    if (source && source.potentialOrderPromotions) {
      target.potentialOrderPromotions = this.removeDuplicateItems(source.potentialOrderPromotions);
    }
    if (source && source.potentialProductPromotions) {
      target.potentialProductPromotions = this.removeDuplicateItems(source.potentialProductPromotions);
    }
    if (source && source.appliedOrderPromotions) {
      target.appliedOrderPromotions = this.removeDuplicateItems(source.appliedOrderPromotions);
    }
    if (source && source.appliedProductPromotions) {
      target.appliedProductPromotions = this.removeDuplicateItems(source.appliedProductPromotions);
    }
  }
  removeDuplicateItems(itemList) {
    return itemList.filter((p, i, a) => {
      const b = a.map((el) => JSON.stringify(el));
      return i === b.indexOf(JSON.stringify(p));
    });
  }
};
_OccCartNormalizer.\u0275fac = function OccCartNormalizer_Factory(t) {
  return new (t || _OccCartNormalizer)(\u0275\u0275inject(ConverterService));
};
_OccCartNormalizer.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
  token: _OccCartNormalizer,
  factory: _OccCartNormalizer.\u0275fac,
  providedIn: "root"
});
var OccCartNormalizer = _OccCartNormalizer;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OccCartNormalizer, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: ConverterService
  }], null);
})();
var _OrderEntryPromotionsNormalizer = class _OrderEntryPromotionsNormalizer {
  convert(source, target) {
    target = this.getProductPromotion(source.item, source.promotions);
    return target;
  }
  /**
   * Get consumed promotions for the given order entry
   *
   * @param item
   * @param promotions
   * @returns consumed promotions for this entry
   */
  getProductPromotion(item, promotions) {
    const entryPromotions = [];
    promotions?.forEach((promotion) => {
      if (promotion.description && promotion.consumedEntries) {
        for (const consumedEntry of promotion.consumedEntries) {
          if (this.isConsumedByEntry(consumedEntry, item)) {
            entryPromotions.push(promotion);
          }
        }
      }
    });
    return entryPromotions;
  }
  isConsumedByEntry(consumedEntry, entry) {
    const consumedEntryNumber = consumedEntry.orderEntryNumber;
    if (entry && entry.entries && entry.entries.length > 0) {
      for (const subEntry of entry.entries) {
        if (subEntry.entryNumber === consumedEntryNumber) {
          return true;
        }
      }
      return false;
    } else {
      return consumedEntryNumber === entry?.entryNumber;
    }
  }
};
_OrderEntryPromotionsNormalizer.\u0275fac = function OrderEntryPromotionsNormalizer_Factory(t) {
  return new (t || _OrderEntryPromotionsNormalizer)();
};
_OrderEntryPromotionsNormalizer.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
  token: _OrderEntryPromotionsNormalizer,
  factory: _OrderEntryPromotionsNormalizer.\u0275fac,
  providedIn: "root"
});
var OrderEntryPromotionsNormalizer = _OrderEntryPromotionsNormalizer;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OrderEntryPromotionsNormalizer, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var _OccCartEntryAdapter = class _OccCartEntryAdapter {
  constructor(http, occEndpointsService, converterService) {
    this.http = http;
    this.occEndpointsService = occEndpointsService;
    this.converterService = converterService;
  }
  add(userId, cartId, productCode, quantity = 1, pickupStore) {
    const url = this.occEndpointsService.buildUrl("addEntries", {
      urlParams: {
        userId,
        cartId,
        quantity
      }
    });
    if (url.includes(`quantity=${quantity}`)) {
      const httpHeaders = new HttpHeaders({
        "Content-Type": "application/x-www-form-urlencoded"
      });
      return this.http.post(url, {}, {
        headers: httpHeaders,
        params: {
          code: productCode
        }
      }).pipe(this.converterService.pipeable(CART_MODIFICATION_NORMALIZER));
    }
    const toAdd = __spreadValues({
      quantity,
      product: {
        code: productCode
      }
    }, pickupStore && {
      deliveryPointOfService: {
        name: pickupStore
      }
    });
    const headers = new HttpHeaders({
      "Content-Type": "application/json"
    });
    return this.http.post(url, toAdd, {
      headers
    }).pipe(this.converterService.pipeable(CART_MODIFICATION_NORMALIZER));
  }
  update(userId, cartId, entryNumber, qty, pickupStore, pickupToDelivery = false) {
    const headers = new HttpHeaders({
      "Content-Type": "application/json"
    });
    const url = this.occEndpointsService.buildUrl("updateEntries", {
      urlParams: {
        userId,
        cartId,
        entryNumber
      }
    });
    if (pickupStore === void 0 && pickupToDelivery) {
      return this.http.put(url, {
        quantity: qty
      }, {
        headers
      }).pipe(this.converterService.pipeable(CART_MODIFICATION_NORMALIZER));
    }
    let params = {};
    if (pickupStore) {
      params = {
        deliveryPointOfService: {
          name: pickupStore
        }
      };
    }
    return this.http.patch(url, __spreadValues({
      quantity: qty
    }, params), {
      headers
    }).pipe(this.converterService.pipeable(CART_MODIFICATION_NORMALIZER));
  }
  remove(userId, cartId, entryNumber) {
    const headers = new HttpHeaders({
      "Content-Type": "application/x-www-form-urlencoded"
    });
    const url = this.occEndpointsService.buildUrl("removeEntries", {
      urlParams: {
        userId,
        cartId,
        entryNumber
      }
    });
    return this.http.delete(url, {
      headers
    });
  }
};
_OccCartEntryAdapter.\u0275fac = function OccCartEntryAdapter_Factory(t) {
  return new (t || _OccCartEntryAdapter)(\u0275\u0275inject(HttpClient), \u0275\u0275inject(OccEndpointsService), \u0275\u0275inject(ConverterService));
};
_OccCartEntryAdapter.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
  token: _OccCartEntryAdapter,
  factory: _OccCartEntryAdapter.\u0275fac
});
var OccCartEntryAdapter = _OccCartEntryAdapter;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OccCartEntryAdapter, [{
    type: Injectable
  }], () => [{
    type: HttpClient
  }, {
    type: OccEndpointsService
  }, {
    type: ConverterService
  }], null);
})();
var _OccCartVoucherAdapter = class _OccCartVoucherAdapter {
  constructor(http, occEndpoints, converter) {
    this.http = http;
    this.occEndpoints = occEndpoints;
    this.converter = converter;
    this.logger = inject(LoggerService);
  }
  getCartVoucherEndpoint(userId, cartId) {
    return this.occEndpoints.buildUrl("cartVoucher", {
      urlParams: {
        userId,
        cartId
      }
    });
  }
  getHeaders(userId) {
    let headers = new HttpHeaders({
      "Content-Type": "application/json"
    });
    if (userId === OCC_USER_ID_ANONYMOUS) {
      headers = InterceptorUtil.createHeader(USE_CLIENT_TOKEN, true, headers);
    }
    return headers;
  }
  add(userId, cartId, voucherId) {
    const url = this.getCartVoucherEndpoint(userId, cartId);
    const toAdd = JSON.stringify({});
    const params = new HttpParams().set("voucherId", voucherId);
    const headers = this.getHeaders(userId);
    return this.http.post(url, toAdd, {
      headers,
      params
    }).pipe(catchError((error) => {
      throw normalizeHttpError(error, this.logger);
    }), this.converter.pipeable(CART_VOUCHER_NORMALIZER));
  }
  remove(userId, cartId, voucherId) {
    const url = this.getCartVoucherEndpoint(userId, cartId) + "/" + encodeURIComponent(voucherId);
    const headers = this.getHeaders(userId);
    return this.http.delete(url, {
      headers
    }).pipe(catchError((error) => {
      throw normalizeHttpError(error, this.logger);
    }));
  }
};
_OccCartVoucherAdapter.\u0275fac = function OccCartVoucherAdapter_Factory(t) {
  return new (t || _OccCartVoucherAdapter)(\u0275\u0275inject(HttpClient), \u0275\u0275inject(OccEndpointsService), \u0275\u0275inject(ConverterService));
};
_OccCartVoucherAdapter.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
  token: _OccCartVoucherAdapter,
  factory: _OccCartVoucherAdapter.\u0275fac
});
var OccCartVoucherAdapter = _OccCartVoucherAdapter;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OccCartVoucherAdapter, [{
    type: Injectable
  }], () => [{
    type: HttpClient
  }, {
    type: OccEndpointsService
  }, {
    type: ConverterService
  }], null);
})();
var _OccCartAdapter = class _OccCartAdapter {
  constructor(http, occEndpointsService, converterService) {
    this.http = http;
    this.occEndpointsService = occEndpointsService;
    this.converterService = converterService;
  }
  loadAll(userId) {
    return this.http.get(this.occEndpointsService.buildUrl("carts", {
      urlParams: {
        userId
      }
    })).pipe(map((cartList) => cartList.carts ?? []), this.converterService.pipeableMany(CART_NORMALIZER));
  }
  load(userId, cartId) {
    if (cartId === OCC_CART_ID_CURRENT) {
      return this.loadAll(userId).pipe(map((carts) => carts.find((cart) => cart["saveTime"] === void 0)));
    } else {
      return this.http.get(this.occEndpointsService.buildUrl("cart", {
        urlParams: {
          userId,
          cartId
        }
      })).pipe(this.converterService.pipeable(CART_NORMALIZER));
    }
  }
  create(userId, oldCartId, toMergeCartGuid) {
    const toAdd = JSON.stringify({});
    const params = {};
    if (oldCartId) {
      params["oldCartId"] = oldCartId;
    }
    if (toMergeCartGuid) {
      params["toMergeCartGuid"] = toMergeCartGuid;
    }
    return this.http.post(this.occEndpointsService.buildUrl("createCart", {
      urlParams: {
        userId
      },
      queryParams: params
    }), toAdd).pipe(this.converterService.pipeable(CART_NORMALIZER));
  }
  delete(userId, cartId) {
    let headers = new HttpHeaders();
    if (userId === OCC_USER_ID_ANONYMOUS) {
      headers = InterceptorUtil.createHeader(USE_CLIENT_TOKEN, true, headers);
    }
    return this.http.delete(this.occEndpointsService.buildUrl("deleteCart", {
      urlParams: {
        userId,
        cartId
      }
    }), {
      headers
    });
  }
  save(userId, cartId, saveCartName, saveCartDescription) {
    const endpoint = this.occEndpointsService.buildUrl("saveCart", {
      urlParams: {
        userId,
        cartId,
        saveCartName,
        saveCartDescription
      }
    });
    return this.http.patch(endpoint, cartId).pipe(map((cartResponse) => cartResponse.savedCartData), this.converterService.pipeable(CART_NORMALIZER));
  }
  addEmail(userId, cartId, email) {
    let headers = new HttpHeaders({
      "Content-Type": "application/x-www-form-urlencoded"
    });
    headers = InterceptorUtil.createHeader(USE_CLIENT_TOKEN, true, headers);
    const httpParams = new HttpParams().set("email", email);
    const url = this.occEndpointsService.buildUrl("addEmail", {
      urlParams: {
        userId,
        cartId
      }
    });
    return this.http.put(url, httpParams, {
      headers
    });
  }
};
_OccCartAdapter.\u0275fac = function OccCartAdapter_Factory(t) {
  return new (t || _OccCartAdapter)(\u0275\u0275inject(HttpClient), \u0275\u0275inject(OccEndpointsService), \u0275\u0275inject(ConverterService));
};
_OccCartAdapter.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
  token: _OccCartAdapter,
  factory: _OccCartAdapter.\u0275fac
});
var OccCartAdapter = _OccCartAdapter;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OccCartAdapter, [{
    type: Injectable
  }], () => [{
    type: HttpClient
  }, {
    type: OccEndpointsService
  }, {
    type: ConverterService
  }], null);
})();
var _OccCartValidationAdapter = class _OccCartValidationAdapter {
  constructor(http, occEndpoints, converter) {
    this.http = http;
    this.occEndpoints = occEndpoints;
    this.converter = converter;
    this.logger = inject(LoggerService);
  }
  validate(cartId, userId) {
    const url = this.occEndpoints.buildUrl("validate", {
      urlParams: {
        cartId,
        userId
      }
    });
    return this.http.post(url, null).pipe(catchError((error) => {
      throw normalizeHttpError(error, this.logger);
    }), this.converter.pipeable(CART_VALIDATION_NORMALIZER));
  }
};
_OccCartValidationAdapter.\u0275fac = function OccCartValidationAdapter_Factory(t) {
  return new (t || _OccCartValidationAdapter)(\u0275\u0275inject(HttpClient), \u0275\u0275inject(OccEndpointsService), \u0275\u0275inject(ConverterService));
};
_OccCartValidationAdapter.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
  token: _OccCartValidationAdapter,
  factory: _OccCartValidationAdapter.\u0275fac
});
var OccCartValidationAdapter = _OccCartValidationAdapter;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OccCartValidationAdapter, [{
    type: Injectable
  }], () => [{
    type: HttpClient
  }, {
    type: OccEndpointsService
  }, {
    type: ConverterService
  }], null);
})();
var defaultOccCartConfig = {
  backend: {
    occ: {
      endpoints: {
        /* eslint-disable max-len */
        carts: "users/${userId}/carts?fields=carts(DEFAULT,potentialProductPromotions,appliedProductPromotions,potentialOrderPromotions,appliedOrderPromotions,entries(totalPrice(formattedValue),product(images(FULL),stock(FULL)),basePrice(formattedValue,value),updateable),totalPrice(formattedValue),totalItems,totalPriceWithTax(formattedValue),totalDiscounts(value,formattedValue),subTotal(formattedValue),totalUnitCount,deliveryItemsQuantity,deliveryCost(formattedValue),totalTax(formattedValue, value),pickupItemsQuantity,net,appliedVouchers,productDiscounts(formattedValue),user,saveTime,name,description)",
        cart: "users/${userId}/carts/${cartId}?fields=DEFAULT,potentialProductPromotions,appliedProductPromotions,potentialOrderPromotions,appliedOrderPromotions,entries(totalPrice(formattedValue),product(images(FULL),stock(FULL)),basePrice(formattedValue,value),updateable),totalPrice(formattedValue),totalItems,totalPriceWithTax(formattedValue),totalDiscounts(value,formattedValue),subTotal(formattedValue),totalUnitCount,deliveryItemsQuantity,deliveryCost(formattedValue),totalTax(formattedValue, value),pickupItemsQuantity,net,appliedVouchers,productDiscounts(formattedValue),user,saveTime,name,description",
        createCart: "users/${userId}/carts?fields=DEFAULT,potentialProductPromotions,appliedProductPromotions,potentialOrderPromotions,appliedOrderPromotions,entries(totalPrice(formattedValue),product(images(FULL),stock(FULL)),basePrice(formattedValue,value),updateable),totalPrice(formattedValue),totalItems,totalPriceWithTax(formattedValue),totalDiscounts(value,formattedValue),subTotal(formattedValue),totalUnitCount,deliveryItemsQuantity,deliveryCost(formattedValue),totalTax(formattedValue, value),pickupItemsQuantity,net,appliedVouchers,productDiscounts(formattedValue),user",
        addEntries: "users/${userId}/carts/${cartId}/entries",
        updateEntries: "users/${userId}/carts/${cartId}/entries/${entryNumber}",
        removeEntries: "users/${userId}/carts/${cartId}/entries/${entryNumber}",
        addEmail: "users/${userId}/carts/${cartId}/email",
        deleteCart: "users/${userId}/carts/${cartId}",
        cartVoucher: "users/${userId}/carts/${cartId}/vouchers",
        saveCart: "/users/${userId}/carts/${cartId}/save?saveCartName=${saveCartName}&saveCartDescription=${saveCartDescription}",
        validate: "users/${userId}/carts/${cartId}/validate?fields=DEFAULT"
        /* eslint-enable */
      }
    }
  }
};
var _CartBaseOccModule = class _CartBaseOccModule {
};
_CartBaseOccModule.\u0275fac = function CartBaseOccModule_Factory(t) {
  return new (t || _CartBaseOccModule)();
};
_CartBaseOccModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
  type: _CartBaseOccModule
});
_CartBaseOccModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
  providers: [provideDefaultConfig(defaultOccCartConfig), {
    provide: CartAdapter,
    useClass: OccCartAdapter
  }, {
    provide: CART_NORMALIZER,
    useExisting: OccCartNormalizer,
    multi: true
  }, {
    provide: ORDER_ENTRY_PROMOTIONS_NORMALIZER,
    useExisting: OrderEntryPromotionsNormalizer,
    multi: true
  }, {
    provide: CartEntryAdapter,
    useClass: OccCartEntryAdapter
  }, {
    provide: CartVoucherAdapter,
    useClass: OccCartVoucherAdapter
  }, {
    provide: CartValidationAdapter,
    useClass: OccCartValidationAdapter
  }],
  imports: [CommonModule]
});
var CartBaseOccModule = _CartBaseOccModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CartBaseOccModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule],
      providers: [provideDefaultConfig(defaultOccCartConfig), {
        provide: CartAdapter,
        useClass: OccCartAdapter
      }, {
        provide: CART_NORMALIZER,
        useExisting: OccCartNormalizer,
        multi: true
      }, {
        provide: ORDER_ENTRY_PROMOTIONS_NORMALIZER,
        useExisting: OrderEntryPromotionsNormalizer,
        multi: true
      }, {
        provide: CartEntryAdapter,
        useClass: OccCartEntryAdapter
      }, {
        provide: CartVoucherAdapter,
        useClass: OccCartVoucherAdapter
      }, {
        provide: CartValidationAdapter,
        useClass: OccCartValidationAdapter
      }]
    }]
  }], null, null);
})();

// node_modules/@spartacus/cart/fesm2022/spartacus-cart-base.mjs
var _CartBaseModule = class _CartBaseModule {
};
_CartBaseModule.\u0275fac = function CartBaseModule_Factory(t) {
  return new (t || _CartBaseModule)();
};
_CartBaseModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
  type: _CartBaseModule
});
_CartBaseModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
  imports: [CartBaseCoreModule, CartBaseOccModule, CartBaseComponentsModule]
});
var CartBaseModule = _CartBaseModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CartBaseModule, [{
    type: NgModule,
    args: [{
      imports: [CartBaseCoreModule, CartBaseOccModule, CartBaseComponentsModule]
    }]
  }], null, null);
})();
export {
  CartBaseModule
};
//# sourceMappingURL=chunk-JNB62GBO.mjs.map
