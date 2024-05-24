import './polyfills.server.mjs';
import {
  CheckoutConfig,
  CheckoutDeliveryAddressClearedEvent,
  CheckoutDeliveryAddressCreatedEvent,
  CheckoutDeliveryAddressFacade,
  CheckoutDeliveryAddressSetEvent,
  CheckoutDeliveryModeClearedErrorEvent,
  CheckoutDeliveryModeClearedEvent,
  CheckoutDeliveryModeSetEvent,
  CheckoutDeliveryModesFacade,
  CheckoutPaymentCardTypesQueryReloadEvent,
  CheckoutPaymentCardTypesQueryResetEvent,
  CheckoutPaymentDetailsCreatedEvent,
  CheckoutPaymentDetailsSetEvent,
  CheckoutPaymentFacade,
  CheckoutQueryFacade,
  CheckoutQueryReloadEvent,
  CheckoutQueryResetEvent,
  CheckoutSupportedDeliveryModesQueryReloadEvent,
  CheckoutSupportedDeliveryModesQueryResetEvent,
  DeliveryModePreferences
} from "./chunk-XILTBMBX.mjs";
import "./chunk-5AIHFPZ5.mjs";
import {
  OrderFacade,
  billingAddressCard,
  deliveryAddressCard,
  deliveryModeCard,
  paymentMethodCard
} from "./chunk-6BD7AOKI.mjs";
import {
  AddressFormComponent,
  AddressFormModule
} from "./chunk-UPYNAPQM.mjs";
import {
  CartValidationGuard
} from "./chunk-73RUKYVL.mjs";
import "./chunk-NLXOS75N.mjs";
import {
  ActiveCartFacade,
  CartOutlets,
  PromotionLocation
} from "./chunk-3NCZ7TRR.mjs";
import {
  AtMessageDirective,
  AtMessageModule,
  CardComponent,
  CardModule,
  CheckboxControlValueAccessor,
  CustomFormValidators,
  DIALOG_TYPE,
  DefaultValueAccessor,
  FormControlName,
  FormErrorsComponent,
  FormErrorsModule,
  FormGroupDirective,
  FormGroupName,
  FormsModule,
  ICON_TYPE,
  IconComponent,
  IconModule,
  InnerComponentsHostDirective,
  LaunchDialogService,
  NgControlStatus,
  NgControlStatusGroup,
  NgSelectA11yDirective,
  NgSelectA11yModule,
  NgSelectComponent,
  NgSelectModule,
  OutletDirective,
  OutletModule,
  PageComponentModule,
  PromotionsComponent,
  PromotionsModule,
  RadioControlValueAccessor,
  ReactiveFormsModule,
  RequiredValidator,
  SpinnerComponent,
  SpinnerModule,
  UntypedFormBuilder,
  Validators,
  getAddressNumbers,
  ɵNgNoValidate
} from "./chunk-JOGQIABG.mjs";
import {
  ADDRESS_NORMALIZER,
  ADDRESS_SERIALIZER,
  ActivatedRoute,
  AuthRedirectService,
  AuthService,
  BasePageMetaResolver,
  CommandService,
  CommandStrategy,
  ConverterService,
  EventService,
  GlobalMessageService,
  GlobalMessageType,
  HttpParamsURIEncoder,
  I18nModule,
  LoggerService,
  OCC_USER_ID_ANONYMOUS,
  OccEndpointsService,
  PAYMENT_DETAILS_NORMALIZER,
  PageMetaResolver,
  PageType,
  QueryService,
  Router,
  RouterLink,
  RouterModule,
  RoutingConfigService,
  RoutingService,
  SemanticPathService,
  TranslatePipe,
  TranslationService,
  UrlModule,
  UrlPipe,
  UserAddressService,
  UserIdService,
  UserPaymentService,
  backOff,
  getLastValueSync,
  isJaloError,
  normalizeHttpError,
  provideDefaultConfig
} from "./chunk-AFAMYKVR.mjs";
import {
  AsyncPipe,
  BehaviorSubject,
  ChangeDetectionStrategy,
  CommonModule,
  Component,
  EMPTY,
  EventEmitter,
  HttpClient,
  HttpHeaders,
  HttpParams,
  Injectable,
  InjectionToken,
  Input,
  NgForOf,
  NgIf,
  NgModule,
  NgSwitch,
  NgSwitchCase,
  NgTemplateOutlet,
  Output,
  Pipe,
  Subscription,
  ViewContainerRef,
  catchError,
  combineLatest,
  debounceTime,
  distinctUntilChanged,
  filter,
  inject,
  isDevMode,
  map,
  mergeMap,
  of,
  setClassMetadata,
  switchMap,
  take,
  tap,
  withLatestFrom,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdefinePipe,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainer,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵinject,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpropertyInterpolate,
  ɵɵpropertyInterpolate1,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵpureFunction2,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeHtml,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-3LP6MEWW.mjs";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-JBYB2SS7.mjs";

// node_modules/@spartacus/checkout/fesm2022/spartacus-checkout-base-components.mjs
function CheckoutDeliveryAddressComponent_ng_container_3_ng_container_1_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function CheckoutDeliveryAddressComponent_ng_container_3_ng_container_1_ng_template_4_div_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 19)(1, "div", 20);
    \u0275\u0275listener("click", function CheckoutDeliveryAddressComponent_ng_container_3_ng_container_1_ng_template_4_div_8_Template_div_click_1_listener() {
      const card_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.selectAddress(card_r4.address));
    });
    \u0275\u0275elementStart(2, "cx-card", 21);
    \u0275\u0275listener("sendCard", function CheckoutDeliveryAddressComponent_ng_container_3_ng_container_1_ng_template_4_div_8_Template_cx_card_sendCard_2_listener() {
      const card_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.selectAddress(card_r4.address));
    });
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const card_r4 = ctx.$implicit;
    const i_r5 = ctx.index;
    \u0275\u0275advance(2);
    \u0275\u0275property("border", true)("index", i_r5)("fitToContainer", true)("content", card_r4.card);
  }
}
function CheckoutDeliveryAddressComponent_ng_container_3_ng_container_1_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p", 9);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "cxTranslate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 10)(4, "button", 11);
    \u0275\u0275listener("click", function CheckoutDeliveryAddressComponent_ng_container_3_ng_container_1_ng_template_4_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.showNewAddressForm());
    });
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "cxTranslate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 12);
    \u0275\u0275template(8, CheckoutDeliveryAddressComponent_ng_container_3_ng_container_1_ng_template_4_div_8_Template, 3, 4, "div", 13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 14)(10, "button", 11);
    \u0275\u0275listener("click", function CheckoutDeliveryAddressComponent_ng_container_3_ng_container_1_ng_template_4_Template_button_click_10_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.showNewAddressForm());
    });
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "cxTranslate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div", 15)(14, "div", 16)(15, "button", 17);
    \u0275\u0275listener("click", function CheckoutDeliveryAddressComponent_ng_container_3_ng_container_1_ng_template_4_Template_button_click_15_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.back());
    });
    \u0275\u0275text(16);
    \u0275\u0275pipe(17, "cxTranslate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "div", 16)(19, "button", 18);
    \u0275\u0275pipe(20, "async");
    \u0275\u0275listener("click", function CheckoutDeliveryAddressComponent_ng_container_3_ng_container_1_ng_template_4_Template_button_click_19_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.next());
    });
    \u0275\u0275text(21);
    \u0275\u0275pipe(22, "cxTranslate");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    let tmp_12_0;
    const cards_r6 = \u0275\u0275nextContext(2).ngIf;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 7, "checkoutAddress.selectYourDeliveryAddress"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(6, 9, "checkoutAddress.addNewAddress"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", cards_r6);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(12, 11, "checkoutAddress.addNewAddress"), " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(17, 13, ctx_r1.backBtnText), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("disabled", !((tmp_12_0 = \u0275\u0275pipeBind1(20, 15, ctx_r1.selectedAddress$)) == null ? null : tmp_12_0.id));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(22, 17, "common.continue"), " ");
  }
}
function CheckoutDeliveryAddressComponent_ng_container_3_ng_container_1_ng_template_6_cx_address_form_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "cx-address-form", 23);
    \u0275\u0275listener("backToAddress", function CheckoutDeliveryAddressComponent_ng_container_3_ng_container_1_ng_template_6_cx_address_form_0_Template_cx_address_form_backToAddress_0_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.hideNewAddressForm(false));
    })("submitAddress", function CheckoutDeliveryAddressComponent_ng_container_3_ng_container_1_ng_template_6_cx_address_form_0_Template_cx_address_form_submitAddress_0_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.addAddress($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275property("showTitleCode", true);
  }
}
function CheckoutDeliveryAddressComponent_ng_container_3_ng_container_1_ng_template_6_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "cx-address-form", 24);
    \u0275\u0275pipe(1, "cxTranslate");
    \u0275\u0275listener("backToAddress", function CheckoutDeliveryAddressComponent_ng_container_3_ng_container_1_ng_template_6_ng_template_1_Template_cx_address_form_backToAddress_0_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.hideNewAddressForm(true));
    })("submitAddress", function CheckoutDeliveryAddressComponent_ng_container_3_ng_container_1_ng_template_6_ng_template_1_Template_cx_address_form_submitAddress_0_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.addAddress($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275propertyInterpolate("cancelBtnLabel", \u0275\u0275pipeBind1(1, 4, ctx_r1.backBtnText));
    \u0275\u0275property("showTitleCode", true)("setAsDefaultField", !ctx_r1.isGuestCheckout)("addressData", ctx_r1.selectedAddress);
  }
}
function CheckoutDeliveryAddressComponent_ng_container_3_ng_container_1_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, CheckoutDeliveryAddressComponent_ng_container_3_ng_container_1_ng_template_6_cx_address_form_0_Template, 1, 1, "cx-address-form", 22)(1, CheckoutDeliveryAddressComponent_ng_container_3_ng_container_1_ng_template_6_ng_template_1_Template, 2, 6, "ng-template", null, 3, \u0275\u0275templateRefExtractor);
  }
  if (rf & 2) {
    const initialAddressForm_r9 = \u0275\u0275reference(2);
    const cards_r6 = \u0275\u0275nextContext(2).ngIf;
    \u0275\u0275property("ngIf", cards_r6.length)("ngIfElse", initialAddressForm_r9);
  }
}
function CheckoutDeliveryAddressComponent_ng_container_3_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275element(1, "div", 7);
    \u0275\u0275pipe(2, "cxTranslate");
    \u0275\u0275template(3, CheckoutDeliveryAddressComponent_ng_container_3_ng_container_1_ng_container_3_Template, 1, 0, "ng-container", 8)(4, CheckoutDeliveryAddressComponent_ng_container_3_ng_container_1_ng_template_4_Template, 23, 19, "ng-template", null, 1, \u0275\u0275templateRefExtractor)(6, CheckoutDeliveryAddressComponent_ng_container_3_ng_container_1_ng_template_6_Template, 3, 2, "ng-template", null, 2, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const showExistingAddresses_r10 = \u0275\u0275reference(5);
    const newAddressForm_r11 = \u0275\u0275reference(7);
    const cards_r6 = \u0275\u0275nextContext().ngIf;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(2, 4, "common.loaded"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", (cards_r6 == null ? null : cards_r6.length) && !ctx_r1.addressFormOpened)("ngIfThen", showExistingAddresses_r10)("ngIfElse", newAddressForm_r11);
  }
}
function CheckoutDeliveryAddressComponent_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, CheckoutDeliveryAddressComponent_ng_container_3_ng_container_1_Template, 8, 6, "ng-container", 6);
    \u0275\u0275pipe(2, "async");
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    const loading_r12 = \u0275\u0275reference(6);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !\u0275\u0275pipeBind1(2, 2, ctx_r1.isUpdating$))("ngIfElse", loading_r12);
  }
}
function CheckoutDeliveryAddressComponent_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 25);
    \u0275\u0275element(1, "cx-spinner");
    \u0275\u0275elementEnd();
  }
}
var _c0 = (a0) => ({
  item: a0
});
var _c1 = (a0) => ({
  items: a0,
  readonly: true
});
function CheckoutDeliveryModeComponent_ng_container_3_div_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 14)(1, "input", 15);
    \u0275\u0275listener("change", function CheckoutDeliveryModeComponent_ng_container_3_div_5_Template_input_change_1_listener() {
      const mode_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.changeMode(mode_r3.code));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "label", 16)(3, "div", 17);
    \u0275\u0275text(4);
    \u0275\u0275elementStart(5, "span", 18);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 19);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275element(9, "div", 20);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const mode_r3 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275propertyInterpolate1("id", "deliveryMode-", mode_r3.code, "");
    \u0275\u0275property("value", mode_r3.code);
    \u0275\u0275attribute("aria-checked", ctx_r3.getAriaChecked(mode_r3.code));
    \u0275\u0275advance();
    \u0275\u0275propertyInterpolate1("for", "deliveryMode-", mode_r3.code, "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", mode_r3.name, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("(", mode_r3.description, ")");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", mode_r3.deliveryCost == null ? null : mode_r3.deliveryCost.formattedValue, " ");
  }
}
function CheckoutDeliveryModeComponent_ng_container_3_ng_template_6_Template(rf, ctx) {
}
function CheckoutDeliveryModeComponent_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275element(1, "div", 9);
    \u0275\u0275pipe(2, "cxTranslate");
    \u0275\u0275elementStart(3, "div", 10)(4, "div", 11);
    \u0275\u0275template(5, CheckoutDeliveryModeComponent_ng_container_3_div_5_Template, 10, 9, "div", 12);
    \u0275\u0275elementEnd();
    \u0275\u0275template(6, CheckoutDeliveryModeComponent_ng_container_3_ng_template_6_Template, 0, 0, "ng-template", 13);
    \u0275\u0275pipe(7, "async");
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const supportedDeliveryModes_r5 = ctx.ngIf;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(2, 5, "common.loaded"));
    \u0275\u0275advance(2);
    \u0275\u0275property("formGroup", ctx_r3.mode);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", supportedDeliveryModes_r5);
    \u0275\u0275advance();
    \u0275\u0275property("cxOutlet", ctx_r3.CartOutlets.DELIVERY_MODE)("cxOutletContext", \u0275\u0275pureFunction1(9, _c0, \u0275\u0275pipeBind1(7, 7, ctx_r3.activeCartFacade.getActive())));
  }
}
function CheckoutDeliveryModeComponent_ng_container_6_ng_template_4_Template(rf, ctx) {
}
function CheckoutDeliveryModeComponent_ng_container_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "h2", 1);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "cxTranslate");
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, CheckoutDeliveryModeComponent_ng_container_6_ng_template_4_Template, 0, 0, "ng-template", 13);
    \u0275\u0275pipe(5, "async");
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 3, "checkoutMode.deliveryEntries"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("cxOutlet", ctx_r3.CartOutlets.CART_ITEM_LIST)("cxOutletContext", \u0275\u0275pureFunction1(7, _c1, \u0275\u0275pipeBind1(5, 5, ctx_r3.activeCartFacade.getDeliveryEntries())));
  }
}
function CheckoutDeliveryModeComponent_ng_template_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 21);
    \u0275\u0275element(1, "cx-spinner");
    \u0275\u0275elementEnd();
  }
}
function CheckoutOrderSummaryComponent_ng_template_0_Template(rf, ctx) {
}
var _c2 = () => ({
  required: "true"
});
var _c3 = (a0) => ({
  selected: a0
});
var _c4 = (a0) => ({
  ariaLabel: a0
});
function CheckoutPaymentFormComponent_ng_container_0_ng_container_7_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "label")(2, "span", 29);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "cxTranslate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(5, "ng-select", 30);
    \u0275\u0275pipe(6, "cxTranslate");
    \u0275\u0275pipe(7, "cxTranslate");
    \u0275\u0275element(8, "cx-form-errors", 12);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const cardTypes_r3 = \u0275\u0275nextContext().ngIf;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 8, "paymentForm.paymentType"));
    \u0275\u0275advance(2);
    \u0275\u0275propertyInterpolate("placeholder", \u0275\u0275pipeBind1(6, 10, "paymentForm.selectOne"));
    \u0275\u0275property("inputAttrs", \u0275\u0275pureFunction0(14, _c2))("searchable", true)("clearable", false)("items", cardTypes_r3)("cxNgSelectA11y", \u0275\u0275pureFunction1(15, _c4, \u0275\u0275pipeBind1(7, 12, "paymentForm.paymentType")));
    \u0275\u0275advance(3);
    \u0275\u0275property("control", ctx_r1.paymentForm.get("cardType.code"));
  }
}
function CheckoutPaymentFormComponent_ng_container_0_ng_container_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, CheckoutPaymentFormComponent_ng_container_0_ng_container_7_div_1_Template, 9, 17, "div", 8);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const cardTypes_r3 = ctx.ngIf;
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", cardTypes_r3.length !== 0);
  }
}
function CheckoutPaymentFormComponent_ng_container_0_div_49_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 9)(1, "div", 31)(2, "label")(3, "input", 32);
    \u0275\u0275listener("change", function CheckoutPaymentFormComponent_ng_container_0_div_49_Template_input_change_3_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.toggleDefaultPaymentMethod());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 33);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "cxTranslate");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 1, "paymentForm.setAsDefault"));
  }
}
function CheckoutPaymentFormComponent_ng_container_0_ng_container_54_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 9)(2, "div", 31)(3, "label")(4, "input", 34);
    \u0275\u0275pipe(5, "cxTranslate");
    \u0275\u0275listener("change", function CheckoutPaymentFormComponent_ng_container_0_ng_container_54_Template_input_change_4_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.toggleSameAsDeliveryAddress());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 33);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "cxTranslate");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275property("checked", ctx_r1.sameAsDeliveryAddress);
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(5, 3, "paymentForm.billingAddressSameAsShipping"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(8, 5, "paymentForm.sameAsDeliveryAddress"));
  }
}
function CheckoutPaymentFormComponent_ng_container_0_ng_container_56_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275element(1, "cx-card", 35);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const deliveryAddress_r6 = ctx.ngIf;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("content", ctx_r1.getAddressCardContent(deliveryAddress_r6));
  }
}
function CheckoutPaymentFormComponent_ng_container_0_ng_template_58_ng_container_2_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div")(1, "label")(2, "span", 29);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "cxTranslate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "ng-select", 46);
    \u0275\u0275pipe(6, "cxTranslate");
    \u0275\u0275pipe(7, "cxTranslate");
    \u0275\u0275listener("change", function CheckoutPaymentFormComponent_ng_container_0_ng_template_58_ng_container_2_div_1_Template_ng_select_change_5_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.countrySelected($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275element(8, "cx-form-errors", 12);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const countries_r8 = \u0275\u0275nextContext().ngIf;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 8, "addressForm.country"));
    \u0275\u0275advance(2);
    \u0275\u0275propertyInterpolate("placeholder", \u0275\u0275pipeBind1(6, 10, "addressForm.selectOne"));
    \u0275\u0275property("inputAttrs", \u0275\u0275pureFunction0(14, _c2))("searchable", true)("clearable", false)("items", countries_r8)("cxNgSelectA11y", \u0275\u0275pureFunction1(15, _c4, \u0275\u0275pipeBind1(7, 12, "addressForm.country")));
    \u0275\u0275advance(3);
    \u0275\u0275property("control", ctx_r1.billingAddressForm.get("country.isocode"));
  }
}
function CheckoutPaymentFormComponent_ng_container_0_ng_template_58_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, CheckoutPaymentFormComponent_ng_container_0_ng_template_58_ng_container_2_div_1_Template, 9, 17, "div", 8);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const countries_r8 = ctx.ngIf;
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", countries_r8.length !== 0);
  }
}
function CheckoutPaymentFormComponent_ng_container_0_ng_template_58_ng_container_52_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 42)(2, "label")(3, "span", 29);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "cxTranslate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(6, "ng-select", 48);
    \u0275\u0275pipe(7, "cxTranslate");
    \u0275\u0275pipe(8, "cxTranslate");
    \u0275\u0275element(9, "cx-form-errors", 12);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const regions_r9 = \u0275\u0275nextContext().ngIf;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 10, "addressForm.state"));
    \u0275\u0275advance(2);
    \u0275\u0275propertyInterpolate("bindLabel", regions_r9[0].name ? "name" : "isocodeShort");
    \u0275\u0275propertyInterpolate("bindValue", regions_r9[0].name ? "isocodeShort" : "region");
    \u0275\u0275propertyInterpolate("placeholder", \u0275\u0275pipeBind1(7, 12, "addressForm.selectOne"));
    \u0275\u0275property("inputAttrs", \u0275\u0275pureFunction0(16, _c2))("searchable", true)("clearable", false)("items", regions_r9)("cxNgSelectA11y", \u0275\u0275pureFunction1(17, _c4, \u0275\u0275pipeBind1(8, 14, "addressForm.state")));
    \u0275\u0275advance(3);
    \u0275\u0275property("control", ctx_r1.billingAddressForm.get("region.isocodeShort"));
  }
}
function CheckoutPaymentFormComponent_ng_container_0_ng_template_58_ng_container_52_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0, 47);
    \u0275\u0275template(1, CheckoutPaymentFormComponent_ng_container_0_ng_template_58_ng_container_52_ng_container_1_Template, 10, 19, "ng-container", 8);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const regions_r9 = ctx.ngIf;
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", regions_r9.length !== 0);
  }
}
function CheckoutPaymentFormComponent_ng_container_0_ng_template_58_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 36)(1, "div", 37);
    \u0275\u0275template(2, CheckoutPaymentFormComponent_ng_container_0_ng_template_58_ng_container_2_Template, 2, 1, "ng-container", 8);
    \u0275\u0275pipe(3, "async");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 9)(5, "label")(6, "span", 29);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "cxTranslate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(9, "input", 38);
    \u0275\u0275pipe(10, "cxTranslate");
    \u0275\u0275element(11, "cx-form-errors", 12);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div", 9)(13, "label")(14, "span", 29);
    \u0275\u0275text(15);
    \u0275\u0275pipe(16, "cxTranslate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(17, "input", 39);
    \u0275\u0275pipe(18, "cxTranslate");
    \u0275\u0275element(19, "cx-form-errors", 12);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "div", 9)(21, "label")(22, "span", 29);
    \u0275\u0275text(23);
    \u0275\u0275pipe(24, "cxTranslate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(25, "input", 40);
    \u0275\u0275pipe(26, "cxTranslate");
    \u0275\u0275element(27, "cx-form-errors", 12);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(28, "div", 9)(29, "label")(30, "span", 10);
    \u0275\u0275text(31);
    \u0275\u0275pipe(32, "cxTranslate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(33, "input", 41);
    \u0275\u0275pipe(34, "cxTranslate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(35, "div", 5)(36, "div", 42)(37, "label")(38, "span", 29);
    \u0275\u0275text(39);
    \u0275\u0275pipe(40, "cxTranslate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(41, "input", 43);
    \u0275\u0275pipe(42, "cxTranslate");
    \u0275\u0275element(43, "cx-form-errors", 12);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(44, "div", 42)(45, "label")(46, "span", 29);
    \u0275\u0275text(47);
    \u0275\u0275pipe(48, "cxTranslate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(49, "input", 44);
    \u0275\u0275pipe(50, "cxTranslate");
    \u0275\u0275element(51, "cx-form-errors", 12);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(52, CheckoutPaymentFormComponent_ng_container_0_ng_template_58_ng_container_52_Template, 2, 1, "ng-container", 45);
    \u0275\u0275pipe(53, "async");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("formGroup", ctx_r1.billingAddressForm);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", \u0275\u0275pipeBind1(3, 20, ctx_r1.countries$));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(8, 22, "addressForm.firstName.label"));
    \u0275\u0275advance(2);
    \u0275\u0275propertyInterpolate("placeholder", \u0275\u0275pipeBind1(10, 24, "addressForm.firstName.placeholder"));
    \u0275\u0275advance(2);
    \u0275\u0275property("control", ctx_r1.billingAddressForm.get("firstName"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(16, 26, "addressForm.lastName.label"));
    \u0275\u0275advance(2);
    \u0275\u0275propertyInterpolate("placeholder", \u0275\u0275pipeBind1(18, 28, "addressForm.lastName.placeholder"));
    \u0275\u0275advance(2);
    \u0275\u0275property("control", ctx_r1.billingAddressForm.get("lastName"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(24, 30, "addressForm.address1"));
    \u0275\u0275advance(2);
    \u0275\u0275propertyInterpolate("placeholder", \u0275\u0275pipeBind1(26, 32, "addressForm.streetAddress"));
    \u0275\u0275advance(2);
    \u0275\u0275property("control", ctx_r1.billingAddressForm.get("line1"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(32, 34, "addressForm.address2"));
    \u0275\u0275advance(2);
    \u0275\u0275propertyInterpolate("placeholder", \u0275\u0275pipeBind1(34, 36, "addressForm.aptSuite"));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(40, 38, "addressForm.city.label"));
    \u0275\u0275advance(2);
    \u0275\u0275propertyInterpolate("placeholder", \u0275\u0275pipeBind1(42, 40, "addressForm.city.placeholder"));
    \u0275\u0275advance(2);
    \u0275\u0275property("control", ctx_r1.billingAddressForm.get("town"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(48, 42, "addressForm.zipCode.label"));
    \u0275\u0275advance(2);
    \u0275\u0275propertyInterpolate("placeholder", \u0275\u0275pipeBind1(50, 44, "addressForm.zipCode.placeholder"));
    \u0275\u0275advance(2);
    \u0275\u0275property("control", ctx_r1.billingAddressForm.get("postalCode"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", \u0275\u0275pipeBind1(53, 46, ctx_r1.regions$));
  }
}
function CheckoutPaymentFormComponent_ng_container_0_button_62_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 49);
    \u0275\u0275listener("click", function CheckoutPaymentFormComponent_ng_container_0_button_62_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.back());
    });
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "cxTranslate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "common.back"), " ");
  }
}
function CheckoutPaymentFormComponent_ng_container_0_button_63_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 49);
    \u0275\u0275listener("click", function CheckoutPaymentFormComponent_ng_container_0_button_63_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.close());
    });
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "cxTranslate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "paymentForm.changePayment"), " ");
  }
}
function CheckoutPaymentFormComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275element(1, "div", 3);
    \u0275\u0275pipe(2, "cxTranslate");
    \u0275\u0275elementStart(3, "form", 4);
    \u0275\u0275listener("ngSubmit", function CheckoutPaymentFormComponent_ng_container_0_Template_form_ngSubmit_3_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.next());
    });
    \u0275\u0275elementStart(4, "div", 5)(5, "div", 6)(6, "div", 7);
    \u0275\u0275template(7, CheckoutPaymentFormComponent_ng_container_0_ng_container_7_Template, 2, 1, "ng-container", 8);
    \u0275\u0275pipe(8, "async");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 9)(10, "label")(11, "span", 10);
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "cxTranslate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(14, "input", 11);
    \u0275\u0275pipe(15, "cxTranslate");
    \u0275\u0275element(16, "cx-form-errors", 12);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "div", 9)(18, "label")(19, "span", 10);
    \u0275\u0275text(20);
    \u0275\u0275pipe(21, "cxTranslate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(22, "input", 13)(23, "cx-form-errors", 12);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(24, "div", 5)(25, "div", 14)(26, "fieldset", 15)(27, "legend", 10);
    \u0275\u0275text(28);
    \u0275\u0275pipe(29, "cxTranslate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "label", 16);
    \u0275\u0275element(31, "ng-select", 17);
    \u0275\u0275pipe(32, "cxTranslate");
    \u0275\u0275pipe(33, "cxTranslate");
    \u0275\u0275element(34, "cx-form-errors", 12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "label", 16);
    \u0275\u0275element(36, "ng-select", 18);
    \u0275\u0275pipe(37, "cxTranslate");
    \u0275\u0275pipe(38, "cxTranslate");
    \u0275\u0275element(39, "cx-form-errors", 12);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(40, "div", 19)(41, "label")(42, "span", 10);
    \u0275\u0275text(43);
    \u0275\u0275pipe(44, "cxTranslate");
    \u0275\u0275element(45, "cx-icon", 20);
    \u0275\u0275pipe(46, "cxTranslate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(47, "input", 21)(48, "cx-form-errors", 12);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(49, CheckoutPaymentFormComponent_ng_container_0_div_49_Template, 7, 3, "div", 22);
    \u0275\u0275elementStart(50, "div", 23)(51, "div", 24);
    \u0275\u0275text(52);
    \u0275\u0275pipe(53, "cxTranslate");
    \u0275\u0275elementEnd();
    \u0275\u0275template(54, CheckoutPaymentFormComponent_ng_container_0_ng_container_54_Template, 9, 7, "ng-container", 8);
    \u0275\u0275pipe(55, "async");
    \u0275\u0275template(56, CheckoutPaymentFormComponent_ng_container_0_ng_container_56_Template, 2, 1, "ng-container", 2);
    \u0275\u0275pipe(57, "async");
    \u0275\u0275template(58, CheckoutPaymentFormComponent_ng_container_0_ng_template_58_Template, 54, 48, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(60, "div", 25)(61, "div", 26);
    \u0275\u0275template(62, CheckoutPaymentFormComponent_ng_container_0_button_62_Template, 3, 3, "button", 27)(63, CheckoutPaymentFormComponent_ng_container_0_button_63_Template, 3, 3, "button", 27);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(64, "div", 26)(65, "button", 28);
    \u0275\u0275text(66);
    \u0275\u0275pipe(67, "cxTranslate");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    let tmp_17_0;
    let tmp_24_0;
    const billingAddress_r12 = \u0275\u0275reference(59);
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(2, 35, "common.loaded"));
    \u0275\u0275advance(2);
    \u0275\u0275property("formGroup", ctx_r1.paymentForm);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", \u0275\u0275pipeBind1(8, 37, ctx_r1.cardTypes$));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(13, 39, "paymentForm.accountHolderName.label"));
    \u0275\u0275advance(2);
    \u0275\u0275propertyInterpolate("placeholder", \u0275\u0275pipeBind1(15, 41, "paymentForm.accountHolderName.placeholder"));
    \u0275\u0275advance(2);
    \u0275\u0275property("control", ctx_r1.paymentForm.get("accountHolderName"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(21, 43, "paymentForm.cardNumber"));
    \u0275\u0275advance(3);
    \u0275\u0275property("control", ctx_r1.paymentForm.get("cardNumber"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(29, 45, "paymentForm.expirationDate"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275propertyInterpolate("placeholder", \u0275\u0275pipeBind1(32, 47, "paymentForm.monthMask"));
    \u0275\u0275property("inputAttrs", \u0275\u0275pureFunction0(69, _c2))("searchable", true)("clearable", false)("items", ctx_r1.months)("cxNgSelectA11y", \u0275\u0275pureFunction1(72, _c4, \u0275\u0275pipeBind2(33, 49, "paymentForm.expirationMonth", \u0275\u0275pureFunction1(70, _c3, (tmp_17_0 = ctx_r1.paymentForm.get("expiryMonth")) == null ? null : tmp_17_0.value))));
    \u0275\u0275advance(3);
    \u0275\u0275property("control", ctx_r1.paymentForm.get("expiryMonth"));
    \u0275\u0275advance(2);
    \u0275\u0275propertyInterpolate("placeholder", \u0275\u0275pipeBind1(37, 52, "paymentForm.yearMask"));
    \u0275\u0275property("inputAttrs", \u0275\u0275pureFunction0(74, _c2))("searchable", true)("clearable", false)("items", ctx_r1.years)("cxNgSelectA11y", \u0275\u0275pureFunction1(77, _c4, \u0275\u0275pipeBind2(38, 54, "paymentForm.expirationYear", \u0275\u0275pureFunction1(75, _c3, (tmp_24_0 = ctx_r1.paymentForm.get("expiryYear")) == null ? null : tmp_24_0.value))));
    \u0275\u0275advance(3);
    \u0275\u0275property("control", ctx_r1.paymentForm.get("expiryYear"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(44, 57, "paymentForm.securityCode"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275propertyInterpolate("title", \u0275\u0275pipeBind1(46, 59, "paymentForm.securityCodeTitle"));
    \u0275\u0275property("type", ctx_r1.iconTypes.INFO);
    \u0275\u0275advance(3);
    \u0275\u0275property("control", ctx_r1.paymentForm.get("cvn"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.setAsDefaultField);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(53, 61, "paymentForm.billingAddress"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", \u0275\u0275pipeBind1(55, 63, ctx_r1.showSameAsDeliveryAddressCheckbox$));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.sameAsDeliveryAddress && \u0275\u0275pipeBind1(57, 65, ctx_r1.deliveryAddress$))("ngIfElse", billingAddress_r12);
    \u0275\u0275advance(6);
    \u0275\u0275property("ngIf", ctx_r1.paymentMethodsCount === 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.paymentMethodsCount > 0);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(67, 67, "common.continue"), " ");
  }
}
function CheckoutPaymentFormComponent_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "cx-spinner");
  }
}
function CheckoutPaymentMethodComponent_ng_container_3_ng_container_1_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function CheckoutPaymentMethodComponent_ng_container_3_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275element(1, "div", 6);
    \u0275\u0275pipe(2, "cxTranslate");
    \u0275\u0275template(3, CheckoutPaymentMethodComponent_ng_container_3_ng_container_1_ng_container_3_Template, 1, 0, "ng-container", 7);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const cards_r1 = \u0275\u0275nextContext().ngIf;
    const hasExistingPaymentMethods_r2 = \u0275\u0275reference(4);
    const newPaymentForm_r3 = \u0275\u0275reference(6);
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(2, 4, "common.loaded"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", (cards_r1 == null ? null : cards_r1.length) && !ctx_r3.newPaymentFormManuallyOpened)("ngIfThen", hasExistingPaymentMethods_r2)("ngIfElse", newPaymentForm_r3);
  }
}
function CheckoutPaymentMethodComponent_ng_container_3_ng_template_3_div_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 17)(1, "div", 18);
    \u0275\u0275listener("click", function CheckoutPaymentMethodComponent_ng_container_3_ng_template_3_div_8_Template_div_click_1_listener() {
      const card_r7 = \u0275\u0275restoreView(_r6).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r3.selectPaymentMethod(card_r7.paymentMethod));
    });
    \u0275\u0275elementStart(2, "cx-card", 19);
    \u0275\u0275listener("sendCard", function CheckoutPaymentMethodComponent_ng_container_3_ng_template_3_div_8_Template_cx_card_sendCard_2_listener() {
      const card_r7 = \u0275\u0275restoreView(_r6).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r3.selectPaymentMethod(card_r7.paymentMethod));
    });
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const card_r7 = ctx.$implicit;
    const i_r8 = ctx.index;
    \u0275\u0275advance(2);
    \u0275\u0275property("border", true)("fitToContainer", true)("content", card_r7.content)("index", i_r8);
  }
}
function CheckoutPaymentMethodComponent_ng_container_3_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p", 8);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "cxTranslate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 9)(4, "button", 10);
    \u0275\u0275listener("click", function CheckoutPaymentMethodComponent_ng_container_3_ng_template_3_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.showNewPaymentForm());
    });
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "cxTranslate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 11);
    \u0275\u0275template(8, CheckoutPaymentMethodComponent_ng_container_3_ng_template_3_div_8_Template, 3, 4, "div", 12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 13)(10, "button", 10);
    \u0275\u0275listener("click", function CheckoutPaymentMethodComponent_ng_container_3_ng_template_3_Template_button_click_10_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.showNewPaymentForm());
    });
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "cxTranslate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div", 14)(14, "div", 15)(15, "button", 10);
    \u0275\u0275listener("click", function CheckoutPaymentMethodComponent_ng_container_3_ng_template_3_Template_button_click_15_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.back());
    });
    \u0275\u0275text(16);
    \u0275\u0275pipe(17, "cxTranslate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "div", 15)(19, "button", 16);
    \u0275\u0275pipe(20, "async");
    \u0275\u0275listener("click", function CheckoutPaymentMethodComponent_ng_container_3_ng_template_3_Template_button_click_19_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.next());
    });
    \u0275\u0275text(21);
    \u0275\u0275pipe(22, "cxTranslate");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    let tmp_11_0;
    const cards_r1 = \u0275\u0275nextContext().ngIf;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 7, "paymentForm.choosePaymentMethod"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(6, 9, "paymentForm.addNewPayment"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", cards_r1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(12, 11, "paymentForm.addNewPayment"), " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(17, 13, ctx_r3.backBtnText), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("disabled", !((tmp_11_0 = \u0275\u0275pipeBind1(20, 15, ctx_r3.selectedMethod$)) == null ? null : tmp_11_0.id));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(22, 17, "common.continue"), " ");
  }
}
function CheckoutPaymentMethodComponent_ng_container_3_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "cx-payment-form", 20);
    \u0275\u0275pipe(1, "async");
    \u0275\u0275listener("setPaymentDetails", function CheckoutPaymentMethodComponent_ng_container_3_ng_template_5_Template_cx_payment_form_setPaymentDetails_0_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.setPaymentDetails($event));
    })("closeForm", function CheckoutPaymentMethodComponent_ng_container_3_ng_template_5_Template_cx_payment_form_closeForm_0_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.hideNewPaymentForm());
    })("goBack", function CheckoutPaymentMethodComponent_ng_container_3_ng_template_5_Template_cx_payment_form_goBack_0_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.back());
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const cards_r1 = \u0275\u0275nextContext().ngIf;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275property("paymentMethodsCount", (cards_r1 == null ? null : cards_r1.length) || 0)("setAsDefaultField", !ctx_r3.isGuestCheckout && !!(cards_r1 == null ? null : cards_r1.length))("loading", \u0275\u0275pipeBind1(1, 4, ctx_r3.isUpdating$))("paymentDetails", ctx_r3.paymentDetails);
  }
}
function CheckoutPaymentMethodComponent_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, CheckoutPaymentMethodComponent_ng_container_3_ng_container_1_Template, 4, 6, "ng-container", 5);
    \u0275\u0275pipe(2, "async");
    \u0275\u0275template(3, CheckoutPaymentMethodComponent_ng_container_3_ng_template_3_Template, 23, 19, "ng-template", null, 1, \u0275\u0275templateRefExtractor)(5, CheckoutPaymentMethodComponent_ng_container_3_ng_template_5_Template, 2, 6, "ng-template", null, 2, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    const loading_r10 = \u0275\u0275reference(6);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !\u0275\u0275pipeBind1(2, 2, ctx_r3.isUpdating$))("ngIfElse", loading_r10);
  }
}
function CheckoutPaymentMethodComponent_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 21);
    \u0275\u0275element(1, "cx-spinner");
    \u0275\u0275elementEnd();
  }
}
var _c5 = () => ({
  cxRoute: "termsAndConditions"
});
function CheckoutProgressMobileBottomComponent_div_0_div_2_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4)(1, "div");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "cxTranslate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    const step_r2 = ctx_r0.$implicit;
    const i_r3 = ctx_r0.index;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", i_r3 + 1, ". ", \u0275\u0275pipeBind1(3, 2, step_r2.name), "");
  }
}
function CheckoutProgressMobileBottomComponent_div_0_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275template(1, CheckoutProgressMobileBottomComponent_div_0_div_2_div_1_Template, 4, 4, "div", 3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const i_r3 = ctx.index;
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", i_r3 > ctx_r3.activeStepIndex);
  }
}
function CheckoutProgressMobileBottomComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "div", 1);
    \u0275\u0275template(2, CheckoutProgressMobileBottomComponent_div_0_div_2_Template, 2, 1, "div", 2);
    \u0275\u0275pipe(3, "async");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", \u0275\u0275pipeBind1(3, 1, ctx_r3.steps$));
  }
}
var _c6 = (a0) => ({
  count: a0
});
var _c7 = (a0) => ({
  cxRoute: a0
});
function CheckoutProgressMobileTopComponent_div_0_div_1_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "cxTranslate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const cart_r1 = \u0275\u0275nextContext().ngIf;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", \u0275\u0275pipeBind2(2, 2, "cartItems.cartTotal", \u0275\u0275pureFunction1(5, _c6, cart_r1.totalItems)), ": ", cart_r1.subTotal.formattedValue, " ");
  }
}
function CheckoutProgressMobileTopComponent_div_0_div_1_div_3_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4)(1, "div");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "cxTranslate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 6);
    \u0275\u0275pipe(5, "cxUrl");
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "cxTranslate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    const step_r3 = ctx_r1.$implicit;
    const i_r4 = ctx_r1.index;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", i_r4 + 1, ". ", \u0275\u0275pipeBind1(3, 4, step_r3.name), "");
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", \u0275\u0275pipeBind1(5, 6, \u0275\u0275pureFunction1(10, _c7, step_r3.routeName)));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(7, 8, "common.edit"), " ");
  }
}
function CheckoutProgressMobileTopComponent_div_0_div_1_div_3_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7)(1, "div");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "cxTranslate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    const step_r3 = ctx_r1.$implicit;
    const i_r4 = ctx_r1.index;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", i_r4 + 1, ". ", \u0275\u0275pipeBind1(3, 2, step_r3.name), "");
  }
}
function CheckoutProgressMobileTopComponent_div_0_div_1_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275template(1, CheckoutProgressMobileTopComponent_div_0_div_1_div_3_div_1_Template, 8, 12, "div", 2)(2, CheckoutProgressMobileTopComponent_div_0_div_1_div_3_div_2_Template, 4, 4, "div", 5);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const i_r4 = ctx.index;
    const ctx_r4 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", i_r4 < ctx_r4.activeStepIndex);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", i_r4 === ctx_r4.activeStepIndex);
  }
}
function CheckoutProgressMobileTopComponent_div_0_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "div", 1);
    \u0275\u0275template(2, CheckoutProgressMobileTopComponent_div_0_div_1_div_2_Template, 3, 7, "div", 2)(3, CheckoutProgressMobileTopComponent_div_0_div_1_div_3_Template, 3, 2, "div", 3);
    \u0275\u0275pipe(4, "async");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const cart_r1 = ctx.ngIf;
    const ctx_r4 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", (cart_r1 == null ? null : cart_r1.totalItems) && (cart_r1 == null ? null : cart_r1.subTotal));
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", \u0275\u0275pipeBind1(4, 2, ctx_r4.steps$));
  }
}
function CheckoutProgressMobileTopComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275template(1, CheckoutProgressMobileTopComponent_div_0_div_1_Template, 5, 4, "div", 0);
    \u0275\u0275pipe(2, "async");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r4 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", \u0275\u0275pipeBind1(2, 1, ctx_r4.cart$));
  }
}
function CheckoutProgressComponent_nav_0_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "li", 4);
    \u0275\u0275element(2, "a", 5);
    \u0275\u0275pipe(3, "cxUrl");
    \u0275\u0275pipe(4, "cxTranslate");
    \u0275\u0275pipe(5, "cxMultiLine");
    \u0275\u0275pipe(6, "cxTranslate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const step_r1 = ctx.$implicit;
    const i_r2 = ctx.index;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275classProp("active", ctx_r2.isActive(i_r2))("disabled", ctx_r2.isDisabled(i_r2));
    \u0275\u0275advance();
    \u0275\u0275classProp("active", ctx_r2.isActive(i_r2))("disabled", ctx_r2.isDisabled(i_r2));
    \u0275\u0275property("routerLink", \u0275\u0275pipeBind1(3, 11, \u0275\u0275pureFunction1(19, _c7, step_r1.routeName)))("tabindex", ctx_r2.getTabIndex(i_r2))("innerHTML", step_r1.nameMultiLine !== false ? \u0275\u0275pipeBind1(5, 15, \u0275\u0275pipeBind1(4, 13, step_r1.name)) : \u0275\u0275pipeBind1(6, 17, step_r1.name), \u0275\u0275sanitizeHtml);
  }
}
function CheckoutProgressComponent_nav_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "nav");
    \u0275\u0275pipe(1, "cxTranslate");
    \u0275\u0275elementStart(2, "div", 1)(3, "ul", 2);
    \u0275\u0275template(4, CheckoutProgressComponent_nav_0_ng_container_4_Template, 7, 21, "ng-container", 3);
    \u0275\u0275pipe(5, "async");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(1, 2, "checkoutProgress.label"));
    \u0275\u0275advance(4);
    \u0275\u0275property("ngForOf", \u0275\u0275pipeBind1(5, 4, ctx_r2.steps$));
  }
}
var _c8 = (a0) => ({
  item: a0,
  readonly: true
});
var _c9 = () => [];
var _c10 = (a0, a1) => ({
  items: a0,
  readonly: true,
  promotionLocation: a1
});
function CheckoutReviewSubmitComponent_ng_container_5_ng_container_2_ng_container_2_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function CheckoutReviewSubmitComponent_ng_container_5_ng_container_2_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, CheckoutReviewSubmitComponent_ng_container_5_ng_container_2_ng_container_2_ng_container_1_Template, 1, 0, "ng-container", 12);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    \u0275\u0275nextContext(3);
    const paymentMethod_r1 = \u0275\u0275reference(12);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", paymentMethod_r1);
  }
}
function CheckoutReviewSubmitComponent_ng_container_5_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0)(1, 10);
    \u0275\u0275template(2, CheckoutReviewSubmitComponent_ng_container_5_ng_container_2_ng_container_2_Template, 2, 1, "ng-container", 11);
    \u0275\u0275elementContainerEnd()();
  }
  if (rf & 2) {
    const step_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngSwitch", step_r2.type[0]);
    \u0275\u0275advance();
    \u0275\u0275property("ngSwitchCase", ctx_r2.checkoutStepTypePaymentDetails);
  }
}
function CheckoutReviewSubmitComponent_ng_container_5_ng_container_4_ng_container_2_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function CheckoutReviewSubmitComponent_ng_container_5_ng_container_4_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, CheckoutReviewSubmitComponent_ng_container_5_ng_container_4_ng_container_2_ng_container_1_Template, 1, 0, "ng-container", 12);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    \u0275\u0275nextContext(3);
    const deliveryAddress_r4 = \u0275\u0275reference(8);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", deliveryAddress_r4);
  }
}
function CheckoutReviewSubmitComponent_ng_container_5_ng_container_4_ng_container_3_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function CheckoutReviewSubmitComponent_ng_container_5_ng_container_4_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, CheckoutReviewSubmitComponent_ng_container_5_ng_container_4_ng_container_3_ng_container_1_Template, 1, 0, "ng-container", 12);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    \u0275\u0275nextContext(3);
    const deliveryMode_r5 = \u0275\u0275reference(10);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", deliveryMode_r5);
  }
}
function CheckoutReviewSubmitComponent_ng_container_5_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0)(1, 10);
    \u0275\u0275template(2, CheckoutReviewSubmitComponent_ng_container_5_ng_container_4_ng_container_2_Template, 2, 1, "ng-container", 11)(3, CheckoutReviewSubmitComponent_ng_container_5_ng_container_4_ng_container_3_Template, 2, 1, "ng-container", 11);
    \u0275\u0275elementContainerEnd()();
  }
  if (rf & 2) {
    const step_r6 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngSwitch", step_r6.type[0]);
    \u0275\u0275advance();
    \u0275\u0275property("ngSwitchCase", ctx_r2.checkoutStepTypeDeliveryAddress);
    \u0275\u0275advance();
    \u0275\u0275property("ngSwitchCase", ctx_r2.checkoutStepTypeDeliveryMode);
  }
}
function CheckoutReviewSubmitComponent_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 7);
    \u0275\u0275template(2, CheckoutReviewSubmitComponent_ng_container_5_ng_container_2_Template, 3, 2, "ng-container", 8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 9);
    \u0275\u0275template(4, CheckoutReviewSubmitComponent_ng_container_5_ng_container_4_Template, 4, 3, "ng-container", 8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const steps_r7 = ctx.ngIf;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r2.paymentSteps(steps_r7));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r2.deliverySteps(steps_r7));
  }
}
function CheckoutReviewSubmitComponent_ng_template_7_div_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14);
    \u0275\u0275element(1, "cx-card", 15);
    \u0275\u0275pipe(2, "async");
    \u0275\u0275elementStart(3, "div", 16)(4, "a", 17);
    \u0275\u0275pipe(5, "cxUrl");
    \u0275\u0275pipe(6, "cxTranslate");
    \u0275\u0275element(7, "cx-icon", 18);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const deliveryAddress_r8 = ctx.ngIf;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("content", \u0275\u0275pipeBind1(2, 4, ctx_r2.getDeliveryAddressCard(deliveryAddress_r8)));
    \u0275\u0275advance(3);
    \u0275\u0275property("routerLink", \u0275\u0275pipeBind1(5, 6, \u0275\u0275pureFunction1(10, _c7, ctx_r2.getCheckoutStepUrl(ctx_r2.checkoutStepTypeDeliveryAddress))));
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(6, 8, "checkoutReview.editDeliveryAddressDetails"));
    \u0275\u0275advance(3);
    \u0275\u0275property("type", ctx_r2.iconTypes.PENCIL);
  }
}
function CheckoutReviewSubmitComponent_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, CheckoutReviewSubmitComponent_ng_template_7_div_0_Template, 8, 12, "div", 13);
    \u0275\u0275pipe(1, "async");
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("ngIf", \u0275\u0275pipeBind1(1, 1, ctx_r2.deliveryAddress$));
  }
}
function CheckoutReviewSubmitComponent_ng_template_9_cx_card_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "cx-card", 15);
    \u0275\u0275pipe(1, "async");
  }
  if (rf & 2) {
    const deliveryMode_r9 = ctx.ngIf;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275property("content", \u0275\u0275pipeBind1(1, 1, ctx_r2.getDeliveryModeCard(deliveryMode_r9)));
  }
}
function CheckoutReviewSubmitComponent_ng_template_9_ng_template_4_Template(rf, ctx) {
}
function CheckoutReviewSubmitComponent_ng_template_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 19)(1, "div");
    \u0275\u0275template(2, CheckoutReviewSubmitComponent_ng_template_9_cx_card_2_Template, 2, 3, "cx-card", 20);
    \u0275\u0275pipe(3, "async");
    \u0275\u0275template(4, CheckoutReviewSubmitComponent_ng_template_9_ng_template_4_Template, 0, 0, "ng-template", 21);
    \u0275\u0275pipe(5, "async");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 16)(7, "a", 17);
    \u0275\u0275pipe(8, "cxUrl");
    \u0275\u0275pipe(9, "cxTranslate");
    \u0275\u0275element(10, "cx-icon", 18);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", \u0275\u0275pipeBind1(3, 6, ctx_r2.deliveryMode$));
    \u0275\u0275advance(2);
    \u0275\u0275property("cxOutlet", ctx_r2.cartOutlets.DELIVERY_MODE)("cxOutletContext", \u0275\u0275pureFunction1(14, _c8, \u0275\u0275pipeBind1(5, 8, ctx_r2.cart$)));
    \u0275\u0275advance(3);
    \u0275\u0275property("routerLink", \u0275\u0275pipeBind1(8, 10, \u0275\u0275pureFunction1(16, _c7, ctx_r2.getCheckoutStepUrl(ctx_r2.checkoutStepTypeDeliveryMode))));
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(9, 12, "checkoutReview.editDeliveryMode"));
    \u0275\u0275advance(3);
    \u0275\u0275property("type", ctx_r2.iconTypes.PENCIL);
  }
}
function CheckoutReviewSubmitComponent_ng_template_11_cx_card_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "cx-card", 15);
    \u0275\u0275pipe(1, "async");
  }
  if (rf & 2) {
    const paymentDetails_r10 = ctx.ngIf;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275property("content", \u0275\u0275pipeBind1(1, 1, ctx_r2.getPaymentMethodCard(paymentDetails_r10)));
  }
}
function CheckoutReviewSubmitComponent_ng_template_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 22)(1, "div");
    \u0275\u0275template(2, CheckoutReviewSubmitComponent_ng_template_11_cx_card_2_Template, 2, 3, "cx-card", 20);
    \u0275\u0275pipe(3, "async");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 16)(5, "a", 17);
    \u0275\u0275pipe(6, "cxUrl");
    \u0275\u0275pipe(7, "cxTranslate");
    \u0275\u0275element(8, "cx-icon", 18);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", \u0275\u0275pipeBind1(3, 4, ctx_r2.paymentDetails$));
    \u0275\u0275advance(3);
    \u0275\u0275property("routerLink", \u0275\u0275pipeBind1(6, 6, \u0275\u0275pureFunction1(10, _c7, ctx_r2.getCheckoutStepUrl(ctx_r2.checkoutStepTypePaymentDetails))));
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(7, 8, "checkoutReview.editPaymentDetails"));
    \u0275\u0275advance(3);
    \u0275\u0275property("type", ctx_r2.iconTypes.PENCIL);
  }
}
function CheckoutReviewSubmitComponent_ng_container_13_div_7_ng_template_2_Template(rf, ctx) {
}
function CheckoutReviewSubmitComponent_ng_container_13_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 26);
    \u0275\u0275element(1, "cx-promotions", 27);
    \u0275\u0275template(2, CheckoutReviewSubmitComponent_ng_container_13_div_7_ng_template_2_Template, 0, 0, "ng-template", 21);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const entries_r11 = ctx.ngIf;
    const cart_r12 = \u0275\u0275nextContext().ngIf;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("promotions", (cart_r12.appliedOrderPromotions || \u0275\u0275pureFunction0(3, _c9)).concat(cart_r12.potentialOrderPromotions || \u0275\u0275pureFunction0(4, _c9)));
    \u0275\u0275advance();
    \u0275\u0275property("cxOutlet", ctx_r2.cartOutlets.CART_ITEM_LIST)("cxOutletContext", \u0275\u0275pureFunction2(5, _c10, entries_r11, ctx_r2.promotionLocation));
  }
}
function CheckoutReviewSubmitComponent_ng_container_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 23);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "cxTranslate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 24);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "cxTranslate");
    \u0275\u0275elementEnd();
    \u0275\u0275template(7, CheckoutReviewSubmitComponent_ng_container_13_div_7_Template, 3, 8, "div", 25);
    \u0275\u0275pipe(8, "async");
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const cart_r12 = ctx.ngIf;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2(" ", \u0275\u0275pipeBind2(3, 4, "cartItems.cartTotal", \u0275\u0275pureFunction1(11, _c6, cart_r12.deliveryItemsQuantity)), ": ", cart_r12.totalPrice == null ? null : cart_r12.totalPrice.formattedValue, " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(6, 7, "checkoutReview.placeOrder"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", \u0275\u0275pipeBind1(8, 9, ctx_r2.entries$));
  }
}
function CheckoutReviewOverviewComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 1);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "cxTranslate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(4, "cx-promotions", 2);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const cart_r1 = ctx.ngIf;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2(" ", \u0275\u0275pipeBind2(3, 3, "cartItems.cartTotal", \u0275\u0275pureFunction1(6, _c6, cart_r1.totalUnitCount)), ": ", cart_r1.totalPrice == null ? null : cart_r1.totalPrice.formattedValue, " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("promotions", (cart_r1.appliedOrderPromotions || \u0275\u0275pureFunction0(8, _c9)).concat(cart_r1.potentialOrderPromotions || \u0275\u0275pureFunction0(9, _c9)));
  }
}
function CheckoutReviewPaymentComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1)(1, "div", 2)(2, "div");
    \u0275\u0275element(3, "cx-card", 3);
    \u0275\u0275pipe(4, "async");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 4)(6, "a", 5);
    \u0275\u0275pipe(7, "cxUrl");
    \u0275\u0275pipe(8, "cxTranslate");
    \u0275\u0275element(9, "cx-icon", 6);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(10, "div", 2)(11, "div");
    \u0275\u0275element(12, "cx-card", 3);
    \u0275\u0275pipe(13, "async");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "div", 4)(15, "a", 5);
    \u0275\u0275pipe(16, "cxUrl");
    \u0275\u0275pipe(17, "cxTranslate");
    \u0275\u0275element(18, "cx-icon", 6);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const paymentDetails_r1 = ctx.ngIf;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275property("content", \u0275\u0275pipeBind1(4, 8, ctx_r1.getBillingAddressCard(paymentDetails_r1)));
    \u0275\u0275advance(3);
    \u0275\u0275property("routerLink", \u0275\u0275pipeBind1(7, 10, \u0275\u0275pureFunction1(20, _c7, ctx_r1.paymentDetailsStepRoute)));
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(8, 12, "checkoutReview.editPaymentDetails"));
    \u0275\u0275advance(3);
    \u0275\u0275property("type", ctx_r1.iconTypes.PENCIL);
    \u0275\u0275advance(3);
    \u0275\u0275property("content", \u0275\u0275pipeBind1(13, 14, ctx_r1.getPaymentMethodCard(paymentDetails_r1)));
    \u0275\u0275advance(3);
    \u0275\u0275property("routerLink", \u0275\u0275pipeBind1(16, 16, \u0275\u0275pureFunction1(22, _c7, ctx_r1.paymentDetailsStepRoute)));
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(17, 18, "checkoutReview.editPaymentDetails"));
    \u0275\u0275advance(3);
    \u0275\u0275property("type", ctx_r1.iconTypes.PENCIL);
  }
}
function CheckoutReviewShippingComponent_ng_container_0_ng_container_1_div_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5);
    \u0275\u0275element(1, "cx-card", 12);
    \u0275\u0275pipe(2, "async");
    \u0275\u0275elementStart(3, "div", 7)(4, "a", 8);
    \u0275\u0275pipe(5, "cxUrl");
    \u0275\u0275pipe(6, "cxTranslate");
    \u0275\u0275element(7, "cx-icon", 9);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const deliveryAddress_r1 = ctx.ngIf;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("content", \u0275\u0275pipeBind1(2, 4, ctx_r1.getDeliveryAddressCard(deliveryAddress_r1)));
    \u0275\u0275advance(3);
    \u0275\u0275property("routerLink", \u0275\u0275pipeBind1(5, 6, \u0275\u0275pureFunction1(10, _c7, ctx_r1.deliveryAddressStepRoute)));
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(6, 8, "checkoutReview.editDeliveryAddressDetails"));
    \u0275\u0275advance(3);
    \u0275\u0275property("type", ctx_r1.iconTypes.PENCIL);
  }
}
function CheckoutReviewShippingComponent_ng_container_0_ng_container_1_cx_card_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "cx-card", 12);
    \u0275\u0275pipe(1, "async");
  }
  if (rf & 2) {
    const deliveryMode_r3 = ctx.ngIf;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("content", \u0275\u0275pipeBind1(1, 1, ctx_r1.getDeliveryModeCard(deliveryMode_r3)));
  }
}
function CheckoutReviewShippingComponent_ng_container_0_ng_container_1_ng_template_18_Template(rf, ctx) {
}
function CheckoutReviewShippingComponent_ng_container_0_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "h2", 1);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "cxTranslate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 2)(5, "div", 3);
    \u0275\u0275template(6, CheckoutReviewShippingComponent_ng_container_0_ng_container_1_div_6_Template, 8, 12, "div", 4);
    \u0275\u0275pipe(7, "async");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 3)(9, "div", 5);
    \u0275\u0275template(10, CheckoutReviewShippingComponent_ng_container_0_ng_container_1_cx_card_10_Template, 2, 3, "cx-card", 6);
    \u0275\u0275pipe(11, "async");
    \u0275\u0275elementStart(12, "div", 7)(13, "a", 8);
    \u0275\u0275pipe(14, "cxUrl");
    \u0275\u0275pipe(15, "cxTranslate");
    \u0275\u0275element(16, "cx-icon", 9);
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(17, "div", 10);
    \u0275\u0275template(18, CheckoutReviewShippingComponent_ng_container_0_ng_container_1_ng_template_18_Template, 0, 0, "ng-template", 11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const entries_r4 = \u0275\u0275nextContext().ngIf;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 8, "checkoutMode.deliveryEntries"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", \u0275\u0275pipeBind1(7, 10, ctx_r1.deliveryAddress$));
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", \u0275\u0275pipeBind1(11, 12, ctx_r1.deliveryMode$));
    \u0275\u0275advance(3);
    \u0275\u0275property("routerLink", \u0275\u0275pipeBind1(14, 14, \u0275\u0275pureFunction1(18, _c7, ctx_r1.deliveryModeStepRoute)));
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(15, 16, "checkoutReview.editDeliveryMode"));
    \u0275\u0275advance(3);
    \u0275\u0275property("type", ctx_r1.iconTypes.PENCIL);
    \u0275\u0275advance(2);
    \u0275\u0275property("cxOutlet", ctx_r1.cartOutlets.CART_ITEM_LIST)("cxOutletContext", \u0275\u0275pureFunction1(20, _c1, entries_r4));
  }
}
function CheckoutReviewShippingComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, CheckoutReviewShippingComponent_ng_container_0_ng_container_1_Template, 19, 22, "ng-container", 0);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const entries_r4 = ctx.ngIf;
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", entries_r4.length > 0);
  }
}
var _CartNotEmptyGuard = class _CartNotEmptyGuard {
  constructor(activeCartFacade, semanticPathService, router) {
    this.activeCartFacade = activeCartFacade;
    this.semanticPathService = semanticPathService;
    this.router = router;
  }
  canActivate() {
    return this.activeCartFacade.takeActive().pipe(map((cart) => {
      if (this.isEmpty(cart)) {
        return this.router.parseUrl(this.semanticPathService.get("home") ?? "");
      }
      return true;
    }));
  }
  isEmpty(cart) {
    return cart && !cart.totalItems;
  }
};
_CartNotEmptyGuard.\u0275fac = function CartNotEmptyGuard_Factory(t) {
  return new (t || _CartNotEmptyGuard)(\u0275\u0275inject(ActiveCartFacade), \u0275\u0275inject(SemanticPathService), \u0275\u0275inject(Router));
};
_CartNotEmptyGuard.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
  token: _CartNotEmptyGuard,
  factory: _CartNotEmptyGuard.\u0275fac,
  providedIn: "root"
});
var CartNotEmptyGuard = _CartNotEmptyGuard;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CartNotEmptyGuard, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: ActiveCartFacade
  }, {
    type: SemanticPathService
  }, {
    type: Router
  }], null);
})();
var _CheckoutConfigService = class _CheckoutConfigService {
  constructor(checkoutConfig) {
    this.checkoutConfig = checkoutConfig;
    this.express = this.checkoutConfig.checkout?.express ?? false;
    this.guest = this.checkoutConfig.checkout?.guest ?? false;
    this.defaultDeliveryMode = this.checkoutConfig.checkout?.defaultDeliveryMode || [];
  }
  compareDeliveryCost(deliveryMode1, deliveryMode2) {
    if (deliveryMode1.deliveryCost?.value && deliveryMode2.deliveryCost?.value) {
      if (deliveryMode1.deliveryCost.value > deliveryMode2.deliveryCost.value) {
        return 1;
      } else if (deliveryMode1.deliveryCost.value < deliveryMode2.deliveryCost.value) {
        return -1;
      }
    }
    return 0;
  }
  findMatchingDeliveryMode(deliveryModes, index = 0) {
    switch (this.defaultDeliveryMode[index]) {
      case DeliveryModePreferences.FREE:
        if (deliveryModes[0].deliveryCost?.value === 0) {
          return deliveryModes[0].code;
        }
        break;
      case DeliveryModePreferences.LEAST_EXPENSIVE:
        const leastExpensiveFound = deliveryModes.find((deliveryMode) => deliveryMode.deliveryCost?.value !== 0);
        if (leastExpensiveFound) {
          return leastExpensiveFound.code;
        }
        break;
      case DeliveryModePreferences.MOST_EXPENSIVE:
        return deliveryModes[deliveryModes.length - 1].code;
      default:
        const codeFound = deliveryModes.find((deliveryMode) => deliveryMode.code === this.defaultDeliveryMode[index]);
        if (codeFound) {
          return codeFound.code;
        }
    }
    const lastMode = this.defaultDeliveryMode.length - 1 <= index;
    return lastMode ? deliveryModes[0].code : this.findMatchingDeliveryMode(deliveryModes, index + 1);
  }
  shouldUseAddressSavedInCart() {
    return !!this.checkoutConfig?.checkout?.guestUseSavedAddress;
  }
  getPreferredDeliveryMode(deliveryModes) {
    deliveryModes.sort(this.compareDeliveryCost);
    return this.findMatchingDeliveryMode(deliveryModes);
  }
  isExpressCheckout() {
    return this.express;
  }
  isGuestCheckout() {
    return this.guest;
  }
};
_CheckoutConfigService.\u0275fac = function CheckoutConfigService_Factory(t) {
  return new (t || _CheckoutConfigService)(\u0275\u0275inject(CheckoutConfig));
};
_CheckoutConfigService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
  token: _CheckoutConfigService,
  factory: _CheckoutConfigService.\u0275fac,
  providedIn: "root"
});
var CheckoutConfigService = _CheckoutConfigService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CheckoutConfigService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: CheckoutConfig
  }], null);
})();
var _CheckoutAuthGuard = class _CheckoutAuthGuard {
  constructor(authService, authRedirectService, checkoutConfigService, activeCartFacade, semanticPathService, router) {
    this.authService = authService;
    this.authRedirectService = authRedirectService;
    this.checkoutConfigService = checkoutConfigService;
    this.activeCartFacade = activeCartFacade;
    this.semanticPathService = semanticPathService;
    this.router = router;
  }
  canActivate() {
    return combineLatest([this.authService.isUserLoggedIn(), this.activeCartFacade.isGuestCart(), this.activeCartFacade.isStable()]).pipe(map(([isLoggedIn, isGuestCart, isStable]) => ({
      isLoggedIn,
      isGuestCart,
      isStable
    })), filter((data) => data.isStable), map((data) => {
      if (!data.isLoggedIn) {
        return data.isGuestCart ? true : this.handleAnonymousUser();
      }
      return data.isLoggedIn;
    }));
  }
  handleAnonymousUser() {
    this.authRedirectService.saveCurrentNavigationUrl();
    if (this.checkoutConfigService.isGuestCheckout()) {
      return this.router.createUrlTree([this.semanticPathService.get("login")], {
        queryParams: {
          forced: true
        }
      });
    } else {
      return this.router.parseUrl(this.semanticPathService.get("login") ?? "");
    }
  }
};
_CheckoutAuthGuard.\u0275fac = function CheckoutAuthGuard_Factory(t) {
  return new (t || _CheckoutAuthGuard)(\u0275\u0275inject(AuthService), \u0275\u0275inject(AuthRedirectService), \u0275\u0275inject(CheckoutConfigService), \u0275\u0275inject(ActiveCartFacade), \u0275\u0275inject(SemanticPathService), \u0275\u0275inject(Router));
};
_CheckoutAuthGuard.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
  token: _CheckoutAuthGuard,
  factory: _CheckoutAuthGuard.\u0275fac,
  providedIn: "root"
});
var CheckoutAuthGuard = _CheckoutAuthGuard;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CheckoutAuthGuard, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: AuthService
  }, {
    type: AuthRedirectService
  }, {
    type: CheckoutConfigService
  }, {
    type: ActiveCartFacade
  }, {
    type: SemanticPathService
  }, {
    type: Router
  }], null);
})();
var _CheckoutStepService = class _CheckoutStepService {
  constructor(routingService, checkoutConfig, routingConfigService) {
    this.routingService = routingService;
    this.checkoutConfig = checkoutConfig;
    this.routingConfigService = routingConfigService;
    this.steps$ = new BehaviorSubject([]);
    this.activeStepIndex$ = this.routingService.getRouterState().pipe(switchMap((router) => {
      const activeStepUrl = router.state.context.id;
      return this.steps$.pipe(map((steps) => {
        let activeIndex = 0;
        steps.forEach((step, index) => {
          const routeUrl = `/${this.routingConfigService.getRouteConfig(step.routeName)?.paths?.[0]}`;
          if (routeUrl === activeStepUrl) {
            activeIndex = index;
          }
        });
        return activeIndex;
      }));
    }));
    this.resetSteps();
  }
  back(activatedRoute) {
    const previousUrl = this.getPreviousCheckoutStepUrl(activatedRoute);
    this.routingService.go(previousUrl === null ? "cart" : previousUrl);
  }
  next(activatedRoute) {
    const nextUrl = this.getNextCheckoutStepUrl(activatedRoute);
    this.routingService.go(nextUrl);
  }
  goToStepWithIndex(stepIndex) {
    this.routingService.go(this.getStepUrlFromStepRoute(this.allSteps[stepIndex].routeName));
  }
  getBackBntText(activatedRoute) {
    if (this.getPreviousCheckoutStepUrl(activatedRoute) === null) {
      return "checkout.backToCart";
    }
    return "common.back";
  }
  resetSteps() {
    this.allSteps = (this.checkoutConfig.checkout?.steps ?? []).filter((step) => !step.disabled).map((checkoutStep) => Object.assign({}, checkoutStep));
    this.steps$.next(this.allSteps);
  }
  disableEnableStep(currentStepType, disabled) {
    const currentStep = this.allSteps.find((step) => step.type.includes(currentStepType));
    if (currentStep && currentStep.disabled !== disabled) {
      currentStep.disabled = disabled;
      this.steps$.next(this.allSteps.filter((step) => !step.disabled));
    }
  }
  getCheckoutStep(currentStepType) {
    const index = this.getCheckoutStepIndex("type", currentStepType);
    if (index !== null) {
      return this.allSteps[index];
    }
  }
  getCheckoutStepRoute(currentStepType) {
    return this.getCheckoutStep(currentStepType)?.routeName;
  }
  getFirstCheckoutStepRoute() {
    return this.allSteps[0].routeName;
  }
  getNextCheckoutStepUrl(activatedRoute) {
    const stepIndex = this.getCurrentStepIndex(activatedRoute);
    if (stepIndex !== null && stepIndex >= 0) {
      let i = 1;
      while (this.allSteps[stepIndex + i] && this.allSteps[stepIndex + i].disabled) {
        i++;
      }
      const nextStep = this.allSteps[stepIndex + i];
      if (nextStep) {
        return this.getStepUrlFromStepRoute(nextStep.routeName);
      }
    }
    return null;
  }
  getPreviousCheckoutStepUrl(activatedRoute) {
    const stepIndex = this.getCurrentStepIndex(activatedRoute);
    if (stepIndex !== null && stepIndex >= 0) {
      let i = 1;
      while (this.allSteps[stepIndex - i] && this.allSteps[stepIndex - i].disabled) {
        i++;
      }
      const previousStep = this.allSteps[stepIndex - i];
      if (previousStep) {
        return this.getStepUrlFromStepRoute(previousStep.routeName);
      }
    }
    return null;
  }
  getCurrentStepIndex(activatedRoute) {
    const currentStepUrl = this.getStepUrlFromActivatedRoute(activatedRoute);
    const stepIndex = this.allSteps.findIndex((step) => currentStepUrl === `/${this.getStepUrlFromStepRoute(step.routeName)}`);
    return stepIndex === -1 ? null : stepIndex;
  }
  getStepUrlFromActivatedRoute(activatedRoute) {
    return activatedRoute && activatedRoute.snapshot && activatedRoute.snapshot.url ? `/${activatedRoute.snapshot.url.join("/")}` : null;
  }
  getStepUrlFromStepRoute(stepRoute) {
    return this.routingConfigService.getRouteConfig(stepRoute)?.paths?.[0] ?? null;
  }
  getCheckoutStepIndex(key, value) {
    return key && value ? this.allSteps.findIndex((step) => {
      const propertyVal = step[key];
      return propertyVal instanceof Array ? propertyVal.includes(value) : propertyVal === value;
    }) : null;
  }
};
_CheckoutStepService.\u0275fac = function CheckoutStepService_Factory(t) {
  return new (t || _CheckoutStepService)(\u0275\u0275inject(RoutingService), \u0275\u0275inject(CheckoutConfig), \u0275\u0275inject(RoutingConfigService));
};
_CheckoutStepService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
  token: _CheckoutStepService,
  factory: _CheckoutStepService.\u0275fac,
  providedIn: "root"
});
var CheckoutStepService = _CheckoutStepService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CheckoutStepService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: RoutingService
  }, {
    type: CheckoutConfig
  }, {
    type: RoutingConfigService
  }], null);
})();
var _ExpressCheckoutService = class _ExpressCheckoutService {
  constructor(userAddressService, userPaymentService, checkoutDeliveryAddressFacade, checkoutPaymentFacade, checkoutConfigService, checkoutDeliveryModesFacade) {
    this.userAddressService = userAddressService;
    this.userPaymentService = userPaymentService;
    this.checkoutDeliveryAddressFacade = checkoutDeliveryAddressFacade;
    this.checkoutPaymentFacade = checkoutPaymentFacade;
    this.checkoutConfigService = checkoutConfigService;
    this.checkoutDeliveryModesFacade = checkoutDeliveryModesFacade;
    this.setDeliveryAddress();
    this.setDeliveryMode();
    this.setPaymentMethod();
  }
  setDeliveryAddress() {
    this.deliveryAddressSet$ = combineLatest([this.userAddressService.getAddresses(), this.userAddressService.getAddressesLoadedSuccess()]).pipe(debounceTime(0), tap(([, addressesLoadedSuccess]) => {
      if (!addressesLoadedSuccess) {
        this.userAddressService.loadAddresses();
      }
    }), filter(([, addressesLoadedSuccess]) => addressesLoadedSuccess), take(1), switchMap(([addresses]) => {
      const defaultAddress = addresses.find((address) => address.defaultAddress) || addresses[0];
      if (defaultAddress && Object.keys(defaultAddress).length) {
        return this.checkoutDeliveryAddressFacade.setDeliveryAddress(defaultAddress).pipe(switchMap(() => this.checkoutDeliveryAddressFacade.getDeliveryAddressState()), filter((state) => !state.error && !state.loading), map((state) => state.data), map((data) => !!(data && Object.keys(data).length)), catchError(() => of(false)));
      }
      return of(false);
    }), distinctUntilChanged());
  }
  setDeliveryMode() {
    this.deliveryModeSet$ = combineLatest([this.deliveryAddressSet$, this.checkoutDeliveryModesFacade.getSupportedDeliveryModesState()]).pipe(debounceTime(0), switchMap(([addressSet, supportedDeliveryModesState]) => {
      if (!addressSet) {
        return of(false);
      }
      return of([supportedDeliveryModesState]).pipe(filter(([supportedDeliveryModesStateObject]) => !supportedDeliveryModesStateObject.loading && !!supportedDeliveryModesStateObject.data?.length), switchMap(([deliveryModesState]) => {
        if (!deliveryModesState.data) {
          return of(false);
        }
        const preferredDeliveryMode = this.checkoutConfigService.getPreferredDeliveryMode(deliveryModesState.data);
        return of([preferredDeliveryMode]).pipe(switchMap(([deliveryMode]) => {
          if (!deliveryMode) {
            return of(false);
          }
          return this.checkoutDeliveryModesFacade.setDeliveryMode(deliveryMode).pipe(switchMap(() => this.checkoutDeliveryModesFacade.getSelectedDeliveryModeState()), filter((state) => !state.error && !state.loading), map((state) => state.data), map((data) => !!(data && Object.keys(data).length)), catchError(() => of(false)));
        }));
      }));
    }), distinctUntilChanged());
  }
  setPaymentMethod() {
    this.paymentMethodSet$ = combineLatest([this.deliveryModeSet$, this.userPaymentService.getPaymentMethods(), this.userPaymentService.getPaymentMethodsLoadedSuccess()]).pipe(debounceTime(0), tap(([, , paymentMethodsLoadedSuccess]) => {
      if (!paymentMethodsLoadedSuccess) {
        this.userPaymentService.loadPaymentMethods();
      }
    }), filter(([, , success]) => success), switchMap(([deliveryModeSet, payments]) => {
      if (!deliveryModeSet) {
        return of(false);
      }
      const defaultPayment = payments.find((address) => address.defaultPayment) || payments[0];
      if (!defaultPayment || Object.keys(defaultPayment).length === 0) {
        return of(false);
      }
      return this.checkoutPaymentFacade.setPaymentDetails(defaultPayment).pipe(switchMap(() => this.checkoutPaymentFacade.getPaymentDetailsState()), filter((state) => !state.error && !state.loading), map((state) => state.data), map((data) => !!(data && Object.keys(data).length)), catchError(() => of(false)));
    }), distinctUntilChanged());
  }
  trySetDefaultCheckoutDetails() {
    return this.paymentMethodSet$.pipe(map((paymentMethodSet) => !!paymentMethodSet));
  }
};
_ExpressCheckoutService.\u0275fac = function ExpressCheckoutService_Factory(t) {
  return new (t || _ExpressCheckoutService)(\u0275\u0275inject(UserAddressService), \u0275\u0275inject(UserPaymentService), \u0275\u0275inject(CheckoutDeliveryAddressFacade), \u0275\u0275inject(CheckoutPaymentFacade), \u0275\u0275inject(CheckoutConfigService), \u0275\u0275inject(CheckoutDeliveryModesFacade));
};
_ExpressCheckoutService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
  token: _ExpressCheckoutService,
  factory: _ExpressCheckoutService.\u0275fac,
  providedIn: "root"
});
var ExpressCheckoutService = _ExpressCheckoutService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ExpressCheckoutService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: UserAddressService
  }, {
    type: UserPaymentService
  }, {
    type: CheckoutDeliveryAddressFacade
  }, {
    type: CheckoutPaymentFacade
  }, {
    type: CheckoutConfigService
  }, {
    type: CheckoutDeliveryModesFacade
  }], null);
})();
var _CheckoutDeliveryAddressComponent = class _CheckoutDeliveryAddressComponent {
  get isGuestCheckout() {
    return !!getLastValueSync(this.activeCartFacade.isGuestCart());
  }
  get backBtnText() {
    return this.checkoutStepService.getBackBntText(this.activatedRoute);
  }
  get selectedAddress$() {
    return this.checkoutDeliveryAddressFacade.getDeliveryAddressState().pipe(filter((state) => !state.loading), map((state) => state.data), distinctUntilChanged((prev, curr) => prev?.id === curr?.id));
  }
  constructor(userAddressService, checkoutDeliveryAddressFacade, activatedRoute, translationService, activeCartFacade, checkoutStepService, checkoutDeliveryModesFacade, globalMessageService) {
    this.userAddressService = userAddressService;
    this.checkoutDeliveryAddressFacade = checkoutDeliveryAddressFacade;
    this.activatedRoute = activatedRoute;
    this.translationService = translationService;
    this.activeCartFacade = activeCartFacade;
    this.checkoutStepService = checkoutStepService;
    this.checkoutDeliveryModesFacade = checkoutDeliveryModesFacade;
    this.globalMessageService = globalMessageService;
    this.checkoutConfigService = inject(CheckoutConfigService);
    this.busy$ = new BehaviorSubject(false);
    this.addressFormOpened = false;
    this.doneAutoSelect = false;
  }
  ngOnInit() {
    this.loadAddresses();
    this.cards$ = this.createCards();
    this.isUpdating$ = this.createIsUpdating();
  }
  getCardContent(address, selected, textDefaultDeliveryAddress, textShipToThisAddress, textSelected, textPhone, textMobile) {
    let region = "";
    if (address.region && address.region.isocode) {
      region = address.region.isocode + ", ";
    }
    const numbers = getAddressNumbers(address, textPhone, textMobile);
    return {
      role: "region",
      title: address.defaultAddress ? textDefaultDeliveryAddress : "",
      textBold: address.firstName + " " + address.lastName,
      text: [address.line1, address.line2, address.town + ", " + region + address.country?.isocode, address.postalCode, numbers],
      actions: [{
        name: textShipToThisAddress,
        event: "send"
      }],
      header: selected && selected.id === address.id ? textSelected : "",
      label: address.defaultAddress ? "addressBook.defaultDeliveryAddress" : "addressBook.additionalDeliveryAddress"
    };
  }
  selectAddress(address) {
    if (address?.id === getLastValueSync(this.selectedAddress$)?.id) {
      return;
    }
    this.globalMessageService.add({
      key: "checkoutAddress.deliveryAddressSelected"
    }, GlobalMessageType.MSG_TYPE_INFO);
    this.setAddress(address);
  }
  addAddress(address) {
    if (!address && this.shouldUseAddressSavedInCart() && this.selectedAddress) {
      this.next();
    }
    if (!address) {
      return;
    }
    this.busy$.next(true);
    this.doneAutoSelect = true;
    this.checkoutDeliveryAddressFacade.createAndSetAddress(address).pipe(switchMap(() => this.checkoutDeliveryModesFacade.clearCheckoutDeliveryMode())).subscribe({
      complete: () => {
        this.next();
      },
      error: () => {
        this.onError();
        this.doneAutoSelect = false;
      }
    });
  }
  showNewAddressForm() {
    this.addressFormOpened = true;
  }
  hideNewAddressForm(goPrevious = false) {
    this.addressFormOpened = false;
    if (goPrevious) {
      this.back();
    }
  }
  next() {
    this.checkoutStepService.next(this.activatedRoute);
  }
  back() {
    this.checkoutStepService.back(this.activatedRoute);
  }
  loadAddresses() {
    if (!this.isGuestCheckout) {
      this.userAddressService.loadAddresses();
    }
  }
  createCards() {
    const addresses$ = combineLatest([this.getSupportedAddresses(), this.selectedAddress$]);
    const translations$ = combineLatest([this.translationService.translate("checkoutAddress.defaultDeliveryAddress"), this.translationService.translate("checkoutAddress.shipToThisAddress"), this.translationService.translate("addressCard.selected"), this.translationService.translate("addressCard.phoneNumber"), this.translationService.translate("addressCard.mobileNumber")]);
    return combineLatest([addresses$, translations$]).pipe(tap(([[addresses, selected]]) => this.selectDefaultAddress(addresses, selected)), map(([[addresses, selected], [textDefault, textShipTo, textSelected, textPhone, textMobile]]) => addresses?.map((address) => ({
      address,
      card: this.getCardContent(address, selected, textDefault, textShipTo, textSelected, textPhone, textMobile)
    }))));
  }
  selectDefaultAddress(addresses, selected) {
    if (!this.doneAutoSelect && addresses?.length && (!selected || Object.keys(selected).length === 0)) {
      selected = addresses.find((address) => address.defaultAddress);
      if (selected) {
        this.setAddress(selected);
      }
      this.doneAutoSelect = true;
    } else if (selected && this.shouldUseAddressSavedInCart()) {
      this.selectedAddress = selected;
    }
  }
  getSupportedAddresses() {
    return this.userAddressService.getAddresses();
  }
  createIsUpdating() {
    return combineLatest([this.busy$, this.userAddressService.getAddressesLoading(), this.getAddressLoading()]).pipe(map(([busy, userAddressLoading, deliveryAddressLoading]) => busy || userAddressLoading || deliveryAddressLoading), distinctUntilChanged());
  }
  getAddressLoading() {
    return this.checkoutDeliveryAddressFacade.getDeliveryAddressState().pipe(map((state) => state.loading), distinctUntilChanged());
  }
  setAddress(address) {
    this.busy$.next(true);
    this.checkoutDeliveryAddressFacade.setDeliveryAddress(address).pipe(switchMap(() => this.checkoutDeliveryModesFacade.clearCheckoutDeliveryMode())).subscribe({
      complete: () => {
        this.onSuccess();
      },
      error: () => {
        this.onError();
      }
    });
  }
  onSuccess() {
    this.busy$.next(false);
  }
  onError() {
    this.busy$.next(false);
  }
  shouldUseAddressSavedInCart() {
    return !!this.checkoutConfigService?.shouldUseAddressSavedInCart();
  }
};
_CheckoutDeliveryAddressComponent.\u0275fac = function CheckoutDeliveryAddressComponent_Factory(t) {
  return new (t || _CheckoutDeliveryAddressComponent)(\u0275\u0275directiveInject(UserAddressService), \u0275\u0275directiveInject(CheckoutDeliveryAddressFacade), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(TranslationService), \u0275\u0275directiveInject(ActiveCartFacade), \u0275\u0275directiveInject(CheckoutStepService), \u0275\u0275directiveInject(CheckoutDeliveryModesFacade), \u0275\u0275directiveInject(GlobalMessageService));
};
_CheckoutDeliveryAddressComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
  type: _CheckoutDeliveryAddressComponent,
  selectors: [["cx-delivery-address"]],
  decls: 7,
  vars: 6,
  consts: [["loading", ""], ["showExistingAddresses", ""], ["newAddressForm", ""], ["initialAddressForm", ""], [1, "cx-checkout-title", "d-none", "d-lg-block", "d-xl-block"], [4, "ngIf"], [4, "ngIf", "ngIfElse"], ["role", "status"], [4, "ngIf", "ngIfThen", "ngIfElse"], [1, "cx-checkout-text"], [1, "cx-checkout-btns", "cx-checkout-btns-top"], [1, "btn", "btn-block", "btn-secondary", 3, "click"], [1, "cx-checkout-body", "row"], ["class", "cx-delivery-address-card col-md-12 col-lg-6", 4, "ngFor", "ngForOf"], [1, "cx-checkout-btns", "cx-checkout-btns-bottom"], [1, "cx-checkout-btns", "row"], [1, "col-md-12", "col-lg-6"], [1, "cx-btn", "btn", "btn-block", "btn-secondary", 3, "click"], [1, "cx-btn", "btn", "btn-block", "btn-primary", 3, "click", "disabled"], [1, "cx-delivery-address-card", "col-md-12", "col-lg-6"], [1, "cx-delivery-address-card-inner", 3, "click"], [3, "sendCard", "border", "index", "fitToContainer", "content"], [3, "showTitleCode", "backToAddress", "submitAddress", 4, "ngIf", "ngIfElse"], [3, "backToAddress", "submitAddress", "showTitleCode"], [3, "backToAddress", "submitAddress", "showTitleCode", "setAsDefaultField", "addressData", "cancelBtnLabel"], [1, "cx-spinner"]],
  template: function CheckoutDeliveryAddressComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "h2", 4);
      \u0275\u0275text(1);
      \u0275\u0275pipe(2, "cxTranslate");
      \u0275\u0275elementEnd();
      \u0275\u0275template(3, CheckoutDeliveryAddressComponent_ng_container_3_Template, 3, 4, "ng-container", 5);
      \u0275\u0275pipe(4, "async");
      \u0275\u0275template(5, CheckoutDeliveryAddressComponent_ng_template_5_Template, 2, 0, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 2, "checkoutAddress.shippingAddress"), "\n");
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", \u0275\u0275pipeBind1(4, 4, ctx.cards$));
    }
  },
  dependencies: [NgForOf, NgIf, AddressFormComponent, CardComponent, SpinnerComponent, AsyncPipe, TranslatePipe],
  encapsulation: 2,
  changeDetection: 0
});
var CheckoutDeliveryAddressComponent = _CheckoutDeliveryAddressComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CheckoutDeliveryAddressComponent, [{
    type: Component,
    args: [{
      selector: "cx-delivery-address",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: `<h2 class="cx-checkout-title d-none d-lg-block d-xl-block">
  {{ 'checkoutAddress.shippingAddress' | cxTranslate }}
</h2>

<ng-container *ngIf="cards$ | async as cards">
  <ng-container *ngIf="!(isUpdating$ | async); else loading">
    <div role="status" [attr.aria-label]="'common.loaded' | cxTranslate"></div>
    <ng-container
      *ngIf="
        cards?.length && !addressFormOpened;
        then showExistingAddresses;
        else newAddressForm
      "
    >
    </ng-container>

    <ng-template #showExistingAddresses>
      <p class="cx-checkout-text">
        {{ 'checkoutAddress.selectYourDeliveryAddress' | cxTranslate }}
      </p>

      <div class="cx-checkout-btns cx-checkout-btns-top">
        <button
          class="btn btn-block btn-secondary"
          (click)="showNewAddressForm()"
        >
          {{ 'checkoutAddress.addNewAddress' | cxTranslate }}
        </button>
      </div>

      <div class="cx-checkout-body row">
        <div
          class="cx-delivery-address-card col-md-12 col-lg-6"
          *ngFor="let card of cards; let i = index"
        >
          <div
            class="cx-delivery-address-card-inner"
            (click)="selectAddress(card.address)"
          >
            <cx-card
              [border]="true"
              [index]="i"
              [fitToContainer]="true"
              [content]="card.card"
              (sendCard)="selectAddress(card.address)"
            ></cx-card>
          </div>
        </div>
      </div>

      <div class="cx-checkout-btns cx-checkout-btns-bottom">
        <button
          class="btn btn-block btn-secondary"
          (click)="showNewAddressForm()"
        >
          {{ 'checkoutAddress.addNewAddress' | cxTranslate }}
        </button>
      </div>

      <div class="cx-checkout-btns row">
        <div class="col-md-12 col-lg-6">
          <button class="cx-btn btn btn-block btn-secondary" (click)="back()">
            {{ backBtnText | cxTranslate }}
          </button>
        </div>
        <div class="col-md-12 col-lg-6">
          <button
            class="cx-btn btn btn-block btn-primary"
            [disabled]="!(selectedAddress$ | async)?.id"
            (click)="next()"
          >
            {{ 'common.continue' | cxTranslate }}
          </button>
        </div>
      </div>
    </ng-template>

    <ng-template #newAddressForm>
      <cx-address-form
        *ngIf="cards.length; else initialAddressForm"
        [showTitleCode]="true"
        (backToAddress)="hideNewAddressForm(false)"
        (submitAddress)="addAddress($event)"
      ></cx-address-form>
      <ng-template #initialAddressForm>
        <cx-address-form
          [showTitleCode]="true"
          [setAsDefaultField]="!isGuestCheckout"
          [addressData]="selectedAddress"
          cancelBtnLabel="{{ backBtnText | cxTranslate }}"
          (backToAddress)="hideNewAddressForm(true)"
          (submitAddress)="addAddress($event)"
        ></cx-address-form>
      </ng-template>
    </ng-template>
  </ng-container>
</ng-container>

<ng-template #loading>
  <div class="cx-spinner">
    <cx-spinner></cx-spinner>
  </div>
</ng-template>
`
    }]
  }], () => [{
    type: UserAddressService
  }, {
    type: CheckoutDeliveryAddressFacade
  }, {
    type: ActivatedRoute
  }, {
    type: TranslationService
  }, {
    type: ActiveCartFacade
  }, {
    type: CheckoutStepService
  }, {
    type: CheckoutDeliveryModesFacade
  }, {
    type: GlobalMessageService
  }], null);
})();
var _CheckoutDeliveryAddressModule = class _CheckoutDeliveryAddressModule {
};
_CheckoutDeliveryAddressModule.\u0275fac = function CheckoutDeliveryAddressModule_Factory(t) {
  return new (t || _CheckoutDeliveryAddressModule)();
};
_CheckoutDeliveryAddressModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
  type: _CheckoutDeliveryAddressModule
});
_CheckoutDeliveryAddressModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
  providers: [provideDefaultConfig({
    cmsComponents: {
      CheckoutDeliveryAddress: {
        component: CheckoutDeliveryAddressComponent,
        guards: [CheckoutAuthGuard, CartNotEmptyGuard, CartValidationGuard]
      }
    }
  })],
  imports: [CommonModule, RouterModule, AddressFormModule, CardModule, SpinnerModule, I18nModule]
});
var CheckoutDeliveryAddressModule = _CheckoutDeliveryAddressModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CheckoutDeliveryAddressModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, RouterModule, AddressFormModule, CardModule, SpinnerModule, I18nModule],
      providers: [provideDefaultConfig({
        cmsComponents: {
          CheckoutDeliveryAddress: {
            component: CheckoutDeliveryAddressComponent,
            guards: [CheckoutAuthGuard, CartNotEmptyGuard, CartValidationGuard]
          }
        }
      })],
      declarations: [CheckoutDeliveryAddressComponent],
      exports: [CheckoutDeliveryAddressComponent]
    }]
  }], null, null);
})();
var _CheckoutDeliveryModeComponent = class _CheckoutDeliveryModeComponent {
  get deliveryModeInvalid() {
    return this.mode.controls["deliveryModeId"].invalid;
  }
  constructor(fb, checkoutConfigService, activatedRoute, checkoutStepService, checkoutDeliveryModesFacade, activeCartFacade) {
    this.fb = fb;
    this.checkoutConfigService = checkoutConfigService;
    this.activatedRoute = activatedRoute;
    this.checkoutStepService = checkoutStepService;
    this.checkoutDeliveryModesFacade = checkoutDeliveryModesFacade;
    this.activeCartFacade = activeCartFacade;
    this.globalMessageService = inject(GlobalMessageService);
    this.busy$ = new BehaviorSubject(false);
    this.isSetDeliveryModeHttpErrorSub = new BehaviorSubject(false);
    this.CartOutlets = CartOutlets;
    this.isSetDeliveryModeHttpError$ = this.isSetDeliveryModeHttpErrorSub.asObservable();
    this.selectedDeliveryModeCode$ = this.checkoutDeliveryModesFacade.getSelectedDeliveryModeState().pipe(filter((state) => !state.loading), map((state) => state.data), map((deliveryMode) => deliveryMode?.code));
    this.supportedDeliveryModes$ = this.checkoutDeliveryModesFacade.getSupportedDeliveryModes().pipe(filter((deliveryModes) => !!deliveryModes?.length), withLatestFrom(this.selectedDeliveryModeCode$), tap(([deliveryModes, code]) => {
      if (!code || !deliveryModes.find((deliveryMode) => deliveryMode.code === code)) {
        code = this.checkoutConfigService.getPreferredDeliveryMode(deliveryModes);
      }
      if (code) {
        this.mode.controls["deliveryModeId"].setValue(code);
        this.changeMode(code);
      }
    }), map(([deliveryModes]) => deliveryModes.filter((mode) => mode.code !== "pickup")));
    this.backBtnText = this.checkoutStepService.getBackBntText(this.activatedRoute);
    this.mode = this.fb.group({
      deliveryModeId: ["", Validators.required]
    });
    this.isUpdating$ = combineLatest([this.busy$, this.checkoutDeliveryModesFacade.getSelectedDeliveryModeState().pipe(map((state) => state.loading))]).pipe(map(([busy, loading]) => busy || loading), distinctUntilChanged());
  }
  changeMode(code) {
    if (!code) {
      return;
    }
    this.busy$.next(true);
    this.checkoutDeliveryModesFacade.setDeliveryMode(code).subscribe({
      complete: () => this.onSuccess(),
      error: () => this.onError()
    });
  }
  next() {
    this.checkoutStepService.next(this.activatedRoute);
  }
  back() {
    this.checkoutStepService.back(this.activatedRoute);
  }
  getAriaChecked(code) {
    return code === this.mode.controls["deliveryModeId"].value;
  }
  onSuccess() {
    this.isSetDeliveryModeHttpErrorSub.next(false);
    this.busy$.next(false);
  }
  onError() {
    this.globalMessageService?.add({
      key: "setDeliveryMode.unknownError"
    }, GlobalMessageType.MSG_TYPE_ERROR);
    this.isSetDeliveryModeHttpErrorSub.next(true);
    this.busy$.next(false);
  }
};
_CheckoutDeliveryModeComponent.\u0275fac = function CheckoutDeliveryModeComponent_Factory(t) {
  return new (t || _CheckoutDeliveryModeComponent)(\u0275\u0275directiveInject(UntypedFormBuilder), \u0275\u0275directiveInject(CheckoutConfigService), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(CheckoutStepService), \u0275\u0275directiveInject(CheckoutDeliveryModesFacade), \u0275\u0275directiveInject(ActiveCartFacade));
};
_CheckoutDeliveryModeComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
  type: _CheckoutDeliveryModeComponent,
  selectors: [["cx-delivery-mode"]],
  decls: 21,
  vars: 21,
  consts: [["loading", ""], [1, "cx-checkout-title", "d-none", "d-lg-block", "d-xl-block"], [4, "ngIf", "ngIfElse"], [4, "ngIf"], ["cxInnerComponentsHost", ""], [1, "row", "cx-checkout-btns"], [1, "col-md-12", "col-lg-6"], [1, "btn", "btn-block", "btn-secondary", 3, "click"], [1, "btn", "btn-block", "btn-primary", 3, "click", "disabled"], ["role", "status"], [1, "cx-delivery-mode-wrapper", 3, "formGroup"], ["role", "radiogroup"], ["class", "form-check", 4, "ngFor", "ngForOf"], [3, "cxOutlet", "cxOutletContext"], [1, "form-check"], ["role", "radio", "type", "radio", "formControlName", "deliveryModeId", 1, "form-check-input", 3, "change", "id", "value"], [1, "cx-delivery-label", "form-check-label", "form-radio-label", 3, "for"], [1, "cx-delivery-mode"], [1, "cx-delivery-mode-description"], [1, "cx-delivery-price"], [1, "cx-delivery-details"], [1, "cx-spinner"]],
  template: function CheckoutDeliveryModeComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "h2", 1);
      \u0275\u0275text(1);
      \u0275\u0275pipe(2, "cxTranslate");
      \u0275\u0275elementEnd();
      \u0275\u0275template(3, CheckoutDeliveryModeComponent_ng_container_3_Template, 8, 11, "ng-container", 2);
      \u0275\u0275pipe(4, "async");
      \u0275\u0275pipe(5, "async");
      \u0275\u0275template(6, CheckoutDeliveryModeComponent_ng_container_6_Template, 6, 9, "ng-container", 3);
      \u0275\u0275pipe(7, "async");
      \u0275\u0275template(8, CheckoutDeliveryModeComponent_ng_template_8_Template, 2, 0, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
      \u0275\u0275elementContainer(10, 4);
      \u0275\u0275elementStart(11, "div", 5)(12, "div", 6)(13, "button", 7);
      \u0275\u0275listener("click", function CheckoutDeliveryModeComponent_Template_button_click_13_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.back());
      });
      \u0275\u0275text(14);
      \u0275\u0275pipe(15, "cxTranslate");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(16, "div", 6)(17, "button", 8);
      \u0275\u0275pipe(18, "async");
      \u0275\u0275listener("click", function CheckoutDeliveryModeComponent_Template_button_click_17_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.next());
      });
      \u0275\u0275text(19);
      \u0275\u0275pipe(20, "cxTranslate");
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      const loading_r6 = \u0275\u0275reference(9);
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 7, "checkoutMode.deliveryMethod"), "\n");
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", !\u0275\u0275pipeBind1(4, 9, ctx.isUpdating$) && \u0275\u0275pipeBind1(5, 11, ctx.supportedDeliveryModes$))("ngIfElse", loading_r6);
      \u0275\u0275advance(3);
      \u0275\u0275property("ngIf", \u0275\u0275pipeBind1(7, 13, ctx.activeCartFacade.hasPickupItems()));
      \u0275\u0275advance(8);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(15, 15, ctx.backBtnText), " ");
      \u0275\u0275advance(3);
      \u0275\u0275property("disabled", ctx.deliveryModeInvalid || \u0275\u0275pipeBind1(18, 17, ctx.isSetDeliveryModeHttpError$));
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(20, 19, "common.continue"), " ");
    }
  },
  dependencies: [NgForOf, NgIf, DefaultValueAccessor, RadioControlValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, SpinnerComponent, OutletDirective, InnerComponentsHostDirective, AsyncPipe, TranslatePipe],
  encapsulation: 2,
  changeDetection: 0
});
var CheckoutDeliveryModeComponent = _CheckoutDeliveryModeComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CheckoutDeliveryModeComponent, [{
    type: Component,
    args: [{
      selector: "cx-delivery-mode",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: `<h2 class="cx-checkout-title d-none d-lg-block d-xl-block">
  {{ 'checkoutMode.deliveryMethod' | cxTranslate }}
</h2>

<ng-container
  *ngIf="
    !(isUpdating$ | async) &&
      (supportedDeliveryModes$ | async) as supportedDeliveryModes;
    else loading
  "
>
  <div role="status" [attr.aria-label]="'common.loaded' | cxTranslate"></div>
  <div [formGroup]="mode" class="cx-delivery-mode-wrapper">
    <div role="radiogroup">
      <div class="form-check" *ngFor="let mode of supportedDeliveryModes">
        <input
          [attr.aria-checked]="getAriaChecked(mode.code)"
          class="form-check-input"
          role="radio"
          type="radio"
          id="deliveryMode-{{ mode.code }}"
          (change)="changeMode(mode.code)"
          [value]="mode.code"
          formControlName="deliveryModeId"
        />
        <label
          class="cx-delivery-label form-check-label form-radio-label"
          for="deliveryMode-{{ mode.code }}"
        >
          <div class="cx-delivery-mode">
            {{ mode.name }}
            <span class="cx-delivery-mode-description"
              >({{ mode.description }})</span
            >
          </div>
          <div class="cx-delivery-price">
            {{ mode.deliveryCost?.formattedValue }}
          </div>
          <div class="cx-delivery-details"></div>
        </label>
      </div>
    </div>
    <ng-template
      [cxOutlet]="CartOutlets.DELIVERY_MODE"
      [cxOutletContext]="{
        item: activeCartFacade.getActive() | async
      }"
    >
    </ng-template>
  </div>
</ng-container>

<ng-container *ngIf="activeCartFacade.hasPickupItems() | async">
  <h2 class="cx-checkout-title d-none d-lg-block d-xl-block">
    {{ 'checkoutMode.deliveryEntries' | cxTranslate }}
  </h2>

  <ng-template
    [cxOutlet]="CartOutlets.CART_ITEM_LIST"
    [cxOutletContext]="{
      items: activeCartFacade.getDeliveryEntries() | async,
      readonly: true
    }"
  >
  </ng-template>
</ng-container>

<ng-template #loading>
  <div class="cx-spinner">
    <cx-spinner></cx-spinner>
  </div>
</ng-template>

<ng-container cxInnerComponentsHost></ng-container>

<div class="row cx-checkout-btns">
  <div class="col-md-12 col-lg-6">
    <button class="btn btn-block btn-secondary" (click)="back()">
      {{ backBtnText | cxTranslate }}
    </button>
  </div>
  <div class="col-md-12 col-lg-6">
    <button
      class="btn btn-block btn-primary"
      [disabled]="deliveryModeInvalid || (isSetDeliveryModeHttpError$ | async)"
      (click)="next()"
    >
      {{ 'common.continue' | cxTranslate }}
    </button>
  </div>
</div>
`
    }]
  }], () => [{
    type: UntypedFormBuilder
  }, {
    type: CheckoutConfigService
  }, {
    type: ActivatedRoute
  }, {
    type: CheckoutStepService
  }, {
    type: CheckoutDeliveryModesFacade
  }, {
    type: ActiveCartFacade
  }], null);
})();
var _CheckoutDeliveryModeModule = class _CheckoutDeliveryModeModule {
};
_CheckoutDeliveryModeModule.\u0275fac = function CheckoutDeliveryModeModule_Factory(t) {
  return new (t || _CheckoutDeliveryModeModule)();
};
_CheckoutDeliveryModeModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
  type: _CheckoutDeliveryModeModule
});
_CheckoutDeliveryModeModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
  providers: [provideDefaultConfig({
    cmsComponents: {
      CheckoutDeliveryMode: {
        component: CheckoutDeliveryModeComponent,
        data: {
          composition: {
            inner: ["PickupInStoreDeliveryModeComponent"]
          }
        },
        guards: [CheckoutAuthGuard, CartNotEmptyGuard]
      }
    }
  })],
  imports: [CommonModule, ReactiveFormsModule, I18nModule, SpinnerModule, OutletModule, PageComponentModule]
});
var CheckoutDeliveryModeModule = _CheckoutDeliveryModeModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CheckoutDeliveryModeModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, ReactiveFormsModule, I18nModule, SpinnerModule, OutletModule, PageComponentModule],
      providers: [provideDefaultConfig({
        cmsComponents: {
          CheckoutDeliveryMode: {
            component: CheckoutDeliveryModeComponent,
            data: {
              composition: {
                inner: ["PickupInStoreDeliveryModeComponent"]
              }
            },
            guards: [CheckoutAuthGuard, CartNotEmptyGuard]
          }
        }
      })],
      declarations: [CheckoutDeliveryModeComponent],
      exports: [CheckoutDeliveryModeComponent]
    }]
  }], null, null);
})();
var _NotCheckoutAuthGuard = class _NotCheckoutAuthGuard {
  constructor(authService, activeCartFacade, semanticPathService, router) {
    this.authService = authService;
    this.activeCartFacade = activeCartFacade;
    this.semanticPathService = semanticPathService;
    this.router = router;
  }
  canActivate() {
    return this.authService.isUserLoggedIn().pipe(map((isLoggedIn) => {
      if (isLoggedIn) {
        return this.router.parseUrl(this.semanticPathService.get("home") ?? "");
      } else if (!!getLastValueSync(this.activeCartFacade.isGuestCart())) {
        return this.router.parseUrl(this.semanticPathService.get("cart") ?? "");
      }
      return !isLoggedIn;
    }));
  }
};
_NotCheckoutAuthGuard.\u0275fac = function NotCheckoutAuthGuard_Factory(t) {
  return new (t || _NotCheckoutAuthGuard)(\u0275\u0275inject(AuthService), \u0275\u0275inject(ActiveCartFacade), \u0275\u0275inject(SemanticPathService), \u0275\u0275inject(Router));
};
_NotCheckoutAuthGuard.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
  token: _NotCheckoutAuthGuard,
  factory: _NotCheckoutAuthGuard.\u0275fac,
  providedIn: "root"
});
var NotCheckoutAuthGuard = _NotCheckoutAuthGuard;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NotCheckoutAuthGuard, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: AuthService
  }, {
    type: ActiveCartFacade
  }, {
    type: SemanticPathService
  }, {
    type: Router
  }], null);
})();
var _CheckoutLoginComponent = class _CheckoutLoginComponent {
  constructor(formBuilder, authRedirectService, activeCartFacade) {
    this.formBuilder = formBuilder;
    this.authRedirectService = authRedirectService;
    this.activeCartFacade = activeCartFacade;
    this.checkoutLoginForm = this.formBuilder.group({
      email: ["", [Validators.required, CustomFormValidators.emailValidator]],
      emailConfirmation: ["", [Validators.required]]
    }, {
      validators: CustomFormValidators.emailsMustMatch("email", "emailConfirmation")
    });
  }
  onSubmit() {
    if (this.checkoutLoginForm.valid) {
      const email = this.checkoutLoginForm.get("email")?.value;
      this.activeCartFacade.addEmail(email);
      if (!this.sub) {
        this.sub = this.activeCartFacade.isGuestCart().subscribe((isGuest) => {
          if (isGuest) {
            this.authRedirectService.redirect();
          }
        });
      }
    } else {
      this.checkoutLoginForm.markAllAsTouched();
    }
  }
  ngOnDestroy() {
    if (this.sub) {
      this.sub.unsubscribe();
    }
  }
};
_CheckoutLoginComponent.\u0275fac = function CheckoutLoginComponent_Factory(t) {
  return new (t || _CheckoutLoginComponent)(\u0275\u0275directiveInject(UntypedFormBuilder), \u0275\u0275directiveInject(AuthRedirectService), \u0275\u0275directiveInject(ActiveCartFacade));
};
_CheckoutLoginComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
  type: _CheckoutLoginComponent,
  selectors: [["cx-checkout-login"]],
  decls: 20,
  vars: 18,
  consts: [[3, "ngSubmit", "formGroup"], [1, "form-group"], [1, "label-content"], ["required", "true", "type", "email", "name", "email", "formControlName", "email", 1, "form-control", 3, "placeholder"], [3, "control"], ["required", "true", "type", "email", "name", "emailConfirmation", "formControlName", "emailConfirmation", 1, "form-control", 3, "placeholder"], ["type", "submit", 1, "btn", "btn-block", "btn-primary"]],
  template: function CheckoutLoginComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "form", 0);
      \u0275\u0275listener("ngSubmit", function CheckoutLoginComponent_Template_form_ngSubmit_0_listener() {
        return ctx.onSubmit();
      });
      \u0275\u0275elementStart(1, "div", 1)(2, "label")(3, "span", 2);
      \u0275\u0275text(4);
      \u0275\u0275pipe(5, "cxTranslate");
      \u0275\u0275elementEnd();
      \u0275\u0275element(6, "input", 3);
      \u0275\u0275pipe(7, "cxTranslate");
      \u0275\u0275element(8, "cx-form-errors", 4);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(9, "div", 1)(10, "label")(11, "span", 2);
      \u0275\u0275text(12);
      \u0275\u0275pipe(13, "cxTranslate");
      \u0275\u0275elementEnd();
      \u0275\u0275element(14, "input", 5);
      \u0275\u0275pipe(15, "cxTranslate");
      \u0275\u0275element(16, "cx-form-errors", 4);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(17, "button", 6);
      \u0275\u0275text(18);
      \u0275\u0275pipe(19, "cxTranslate");
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275property("formGroup", ctx.checkoutLoginForm);
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 8, "checkoutLogin.emailAddress.label"));
      \u0275\u0275advance(2);
      \u0275\u0275propertyInterpolate("placeholder", \u0275\u0275pipeBind1(7, 10, "checkoutLogin.emailAddress.placeholder"));
      \u0275\u0275advance(2);
      \u0275\u0275property("control", ctx.checkoutLoginForm.get("email"));
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(13, 12, "checkoutLogin.confirmEmail.label"));
      \u0275\u0275advance(2);
      \u0275\u0275propertyInterpolate("placeholder", \u0275\u0275pipeBind1(15, 14, "checkoutLogin.confirmEmail.placeholder"));
      \u0275\u0275advance(2);
      \u0275\u0275property("control", ctx.checkoutLoginForm.get("emailConfirmation"));
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(19, 16, "checkoutLogin.continue"), " ");
    }
  },
  dependencies: [\u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, RequiredValidator, FormGroupDirective, FormControlName, FormErrorsComponent, TranslatePipe],
  encapsulation: 2
});
var CheckoutLoginComponent = _CheckoutLoginComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CheckoutLoginComponent, [{
    type: Component,
    args: [{
      selector: "cx-checkout-login",
      template: `<form (ngSubmit)="onSubmit()" [formGroup]="checkoutLoginForm">
  <div class="form-group">
    <label>
      <span class="label-content">{{
        'checkoutLogin.emailAddress.label' | cxTranslate
      }}</span>
      <input
        required="true"
        type="email"
        name="email"
        class="form-control"
        formControlName="email"
        placeholder="{{
          'checkoutLogin.emailAddress.placeholder' | cxTranslate
        }}"
      />
      <cx-form-errors
        [control]="checkoutLoginForm.get('email')"
      ></cx-form-errors>
    </label>
  </div>

  <div class="form-group">
    <label>
      <span class="label-content">{{
        'checkoutLogin.confirmEmail.label' | cxTranslate
      }}</span>
      <input
        required="true"
        type="email"
        name="emailConfirmation"
        class="form-control"
        formControlName="emailConfirmation"
        placeholder="{{
          'checkoutLogin.confirmEmail.placeholder' | cxTranslate
        }}"
      />
      <cx-form-errors
        [control]="checkoutLoginForm.get('emailConfirmation')"
      ></cx-form-errors>
    </label>
  </div>

  <button type="submit" class="btn btn-block btn-primary">
    {{ 'checkoutLogin.continue' | cxTranslate }}
  </button>
</form>
`
    }]
  }], () => [{
    type: UntypedFormBuilder
  }, {
    type: AuthRedirectService
  }, {
    type: ActiveCartFacade
  }], null);
})();
var _CheckoutLoginModule = class _CheckoutLoginModule {
};
_CheckoutLoginModule.\u0275fac = function CheckoutLoginModule_Factory(t) {
  return new (t || _CheckoutLoginModule)();
};
_CheckoutLoginModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
  type: _CheckoutLoginModule
});
_CheckoutLoginModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
  providers: [provideDefaultConfig({
    cmsComponents: {
      GuestCheckoutLoginComponent: {
        component: CheckoutLoginComponent,
        guards: [NotCheckoutAuthGuard]
      }
    }
  })],
  imports: [CommonModule, I18nModule, FormsModule, ReactiveFormsModule, FormsModule, ReactiveFormsModule, FormErrorsModule]
});
var CheckoutLoginModule = _CheckoutLoginModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CheckoutLoginModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, I18nModule, FormsModule, ReactiveFormsModule, FormsModule, ReactiveFormsModule, FormErrorsModule],
      providers: [provideDefaultConfig({
        cmsComponents: {
          GuestCheckoutLoginComponent: {
            component: CheckoutLoginComponent,
            guards: [NotCheckoutAuthGuard]
          }
        }
      })],
      declarations: [CheckoutLoginComponent],
      exports: [CheckoutLoginComponent]
    }]
  }], null, null);
})();
var _CheckoutGuard = class _CheckoutGuard {
  constructor(router, routingConfigService, checkoutConfigService, expressCheckoutService, activeCartFacade, checkoutStepService) {
    this.router = router;
    this.routingConfigService = routingConfigService;
    this.checkoutConfigService = checkoutConfigService;
    this.expressCheckoutService = expressCheckoutService;
    this.activeCartFacade = activeCartFacade;
    this.checkoutStepService = checkoutStepService;
    this.firstStep$ = this.checkoutStepService.steps$.pipe(map((steps) => {
      return this.router.parseUrl(this.routingConfigService.getRouteConfig(steps[0].routeName)?.paths?.[0]);
    }));
  }
  canActivate() {
    const expressCheckout$ = this.expressCheckoutService.trySetDefaultCheckoutDetails().pipe(switchMap((expressCheckoutPossible) => {
      const reviewOrderRoute = this.checkoutStepService.getCheckoutStepRoute(
        "reviewOrder"
        /* CheckoutStepType.REVIEW_ORDER */
      );
      return expressCheckoutPossible && reviewOrderRoute ? of(this.router.parseUrl(this.routingConfigService.getRouteConfig(reviewOrderRoute)?.paths?.[0])) : this.firstStep$;
    }));
    return this.activeCartFacade.isGuestCart().pipe(switchMap((isGuestCart) => this.checkoutConfigService.isExpressCheckout() && !isGuestCart ? expressCheckout$ : this.firstStep$));
  }
};
_CheckoutGuard.\u0275fac = function CheckoutGuard_Factory(t) {
  return new (t || _CheckoutGuard)(\u0275\u0275inject(Router), \u0275\u0275inject(RoutingConfigService), \u0275\u0275inject(CheckoutConfigService), \u0275\u0275inject(ExpressCheckoutService), \u0275\u0275inject(ActiveCartFacade), \u0275\u0275inject(CheckoutStepService));
};
_CheckoutGuard.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
  token: _CheckoutGuard,
  factory: _CheckoutGuard.\u0275fac,
  providedIn: "root"
});
var CheckoutGuard = _CheckoutGuard;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CheckoutGuard, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: Router
  }, {
    type: RoutingConfigService
  }, {
    type: CheckoutConfigService
  }, {
    type: ExpressCheckoutService
  }, {
    type: ActiveCartFacade
  }, {
    type: CheckoutStepService
  }], null);
})();
var _CheckoutOrchestratorComponent = class _CheckoutOrchestratorComponent {
  constructor() {
  }
};
_CheckoutOrchestratorComponent.\u0275fac = function CheckoutOrchestratorComponent_Factory(t) {
  return new (t || _CheckoutOrchestratorComponent)();
};
_CheckoutOrchestratorComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
  type: _CheckoutOrchestratorComponent,
  selectors: [["cx-checkout-orchestrator"]],
  decls: 0,
  vars: 0,
  template: function CheckoutOrchestratorComponent_Template(rf, ctx) {
  },
  encapsulation: 2,
  changeDetection: 0
});
var CheckoutOrchestratorComponent = _CheckoutOrchestratorComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CheckoutOrchestratorComponent, [{
    type: Component,
    args: [{
      selector: "cx-checkout-orchestrator",
      template: "",
      changeDetection: ChangeDetectionStrategy.OnPush
    }]
  }], () => [], null);
})();
var _CheckoutOrchestratorModule = class _CheckoutOrchestratorModule {
};
_CheckoutOrchestratorModule.\u0275fac = function CheckoutOrchestratorModule_Factory(t) {
  return new (t || _CheckoutOrchestratorModule)();
};
_CheckoutOrchestratorModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
  type: _CheckoutOrchestratorModule
});
_CheckoutOrchestratorModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
  providers: [provideDefaultConfig({
    cmsComponents: {
      CheckoutOrchestrator: {
        component: CheckoutOrchestratorComponent,
        guards: [CheckoutAuthGuard, CartNotEmptyGuard, CheckoutGuard]
      }
    }
  })],
  imports: [CommonModule]
});
var CheckoutOrchestratorModule = _CheckoutOrchestratorModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CheckoutOrchestratorModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule],
      providers: [provideDefaultConfig({
        cmsComponents: {
          CheckoutOrchestrator: {
            component: CheckoutOrchestratorComponent,
            guards: [CheckoutAuthGuard, CartNotEmptyGuard, CheckoutGuard]
          }
        }
      })],
      declarations: [CheckoutOrchestratorComponent],
      exports: [CheckoutOrchestratorComponent]
    }]
  }], null, null);
})();
var _CheckoutOrderSummaryComponent = class _CheckoutOrderSummaryComponent {
  constructor(activeCartFacade) {
    this.activeCartFacade = activeCartFacade;
    this.cartOutlets = CartOutlets;
    this.cart$ = this.activeCartFacade.getActive();
  }
};
_CheckoutOrderSummaryComponent.\u0275fac = function CheckoutOrderSummaryComponent_Factory(t) {
  return new (t || _CheckoutOrderSummaryComponent)(\u0275\u0275directiveInject(ActiveCartFacade));
};
_CheckoutOrderSummaryComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
  type: _CheckoutOrderSummaryComponent,
  selectors: [["cx-checkout-order-summary"]],
  decls: 2,
  vars: 4,
  consts: [[3, "cxOutlet", "cxOutletContext"]],
  template: function CheckoutOrderSummaryComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275template(0, CheckoutOrderSummaryComponent_ng_template_0_Template, 0, 0, "ng-template", 0);
      \u0275\u0275pipe(1, "async");
    }
    if (rf & 2) {
      \u0275\u0275property("cxOutlet", ctx.cartOutlets.ORDER_SUMMARY)("cxOutletContext", \u0275\u0275pipeBind1(1, 2, ctx.cart$));
    }
  },
  dependencies: [OutletDirective, AsyncPipe],
  encapsulation: 2,
  changeDetection: 0
});
var CheckoutOrderSummaryComponent = _CheckoutOrderSummaryComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CheckoutOrderSummaryComponent, [{
    type: Component,
    args: [{
      selector: "cx-checkout-order-summary",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: '<ng-template\n  [cxOutlet]="cartOutlets.ORDER_SUMMARY"\n  [cxOutletContext]="cart$ | async"\n>\n</ng-template>\n'
    }]
  }], () => [{
    type: ActiveCartFacade
  }], null);
})();
var _CheckoutOrderSummaryModule = class _CheckoutOrderSummaryModule {
};
_CheckoutOrderSummaryModule.\u0275fac = function CheckoutOrderSummaryModule_Factory(t) {
  return new (t || _CheckoutOrderSummaryModule)();
};
_CheckoutOrderSummaryModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
  type: _CheckoutOrderSummaryModule
});
_CheckoutOrderSummaryModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
  providers: [provideDefaultConfig({
    cmsComponents: {
      CheckoutOrderSummary: {
        component: CheckoutOrderSummaryComponent
      }
    }
  })],
  imports: [CommonModule, OutletModule]
});
var CheckoutOrderSummaryModule = _CheckoutOrderSummaryModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CheckoutOrderSummaryModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, OutletModule],
      providers: [provideDefaultConfig({
        cmsComponents: {
          CheckoutOrderSummary: {
            component: CheckoutOrderSummaryComponent
          }
        }
      })],
      declarations: [CheckoutOrderSummaryComponent],
      exports: [CheckoutOrderSummaryComponent]
    }]
  }], null, null);
})();
var _CheckoutPaymentFormComponent = class _CheckoutPaymentFormComponent {
  constructor(checkoutPaymentFacade, checkoutDeliveryAddressFacade, userPaymentService, globalMessageService, fb, userAddressService, launchDialogService, translationService) {
    this.checkoutPaymentFacade = checkoutPaymentFacade;
    this.checkoutDeliveryAddressFacade = checkoutDeliveryAddressFacade;
    this.userPaymentService = userPaymentService;
    this.globalMessageService = globalMessageService;
    this.fb = fb;
    this.userAddressService = userAddressService;
    this.launchDialogService = launchDialogService;
    this.translationService = translationService;
    this.iconTypes = ICON_TYPE;
    this.months = [];
    this.years = [];
    this.sameAsDeliveryAddress = true;
    this.selectedCountry$ = new BehaviorSubject("");
    this.goBack = new EventEmitter();
    this.closeForm = new EventEmitter();
    this.setPaymentDetails = new EventEmitter();
    this.paymentForm = this.fb.group({
      cardType: this.fb.group({
        code: [null, Validators.required]
      }),
      accountHolderName: ["", Validators.required],
      cardNumber: ["", Validators.required],
      expiryMonth: [null, Validators.required],
      expiryYear: [null, Validators.required],
      cvn: ["", Validators.required],
      defaultPayment: [false]
    });
    this.billingAddressForm = this.fb.group({
      firstName: ["", Validators.required],
      lastName: ["", Validators.required],
      line1: ["", Validators.required],
      line2: [""],
      town: ["", Validators.required],
      region: this.fb.group({
        isocodeShort: [null, Validators.required]
      }),
      country: this.fb.group({
        isocode: [null, Validators.required]
      }),
      postalCode: ["", Validators.required]
    });
  }
  ngOnInit() {
    if (this.paymentDetails) {
      this.paymentForm.patchValue(this.paymentDetails);
    }
    this.expMonthAndYear();
    this.countries$ = this.userPaymentService.getAllBillingCountries().pipe(tap((countries) => {
      if (Object.keys(countries).length === 0) {
        this.userPaymentService.loadBillingCountries();
      }
    }));
    this.cardTypes$ = this.checkoutPaymentFacade.getPaymentCardTypes();
    this.deliveryAddress$ = this.checkoutDeliveryAddressFacade.getDeliveryAddressState().pipe(filter((state) => !state.loading), map((state) => state.data));
    this.showSameAsDeliveryAddressCheckbox$ = combineLatest([this.countries$, this.deliveryAddress$]).pipe(map(([countries, address]) => {
      return (address?.country && !!countries.filter((country) => country.isocode === address.country?.isocode).length) ?? false;
    }), tap((shouldShowCheckbox) => {
      this.sameAsDeliveryAddress = shouldShowCheckbox;
    }));
    this.regions$ = this.selectedCountry$.pipe(switchMap((country) => this.userAddressService.getRegions(country)), tap((regions) => {
      const regionControl = this.billingAddressForm.get("region.isocodeShort");
      if (regions.length > 0) {
        regionControl?.enable();
      } else {
        regionControl?.disable();
      }
    }));
  }
  expMonthAndYear() {
    const year = (/* @__PURE__ */ new Date()).getFullYear();
    for (let i = 0; i < 10; i++) {
      this.years.push(year + i);
    }
    for (let j = 1; j <= 12; j++) {
      if (j < 10) {
        this.months.push(`0${j}`);
      } else {
        this.months.push(j.toString());
      }
    }
  }
  toggleDefaultPaymentMethod() {
    this.paymentForm.value.defaultPayment = !this.paymentForm.value.defaultPayment;
  }
  toggleSameAsDeliveryAddress() {
    this.sameAsDeliveryAddress = !this.sameAsDeliveryAddress;
  }
  getAddressCardContent(address) {
    return this.translationService ? combineLatest([this.translationService.translate("addressCard.phoneNumber"), this.translationService.translate("addressCard.mobileNumber")]).pipe(map(([textPhone, textMobile]) => {
      let region = "";
      if (address.region && address.region.isocode) {
        region = address.region.isocode + ", ";
      }
      const numbers = getAddressNumbers(address, textPhone, textMobile);
      return {
        textBold: address.firstName + " " + address.lastName,
        text: [address.line1, address.line2, address.town + ", " + region + address.country?.isocode, address.postalCode, numbers]
      };
    })) : EMPTY;
  }
  //TODO: Add elementRef to trigger button when verifyAddress is used.
  openSuggestedAddress(results) {
    this.launchDialogService.openDialogAndSubscribe("SUGGESTED_ADDRESSES", void 0, {
      enteredAddress: this.billingAddressForm.value,
      suggestedAddresses: results.suggestedAddresses
    });
  }
  close() {
    this.closeForm.emit();
  }
  back() {
    this.goBack.emit();
  }
  /**
   *TODO: This method is not used, but should be. It triggers suggested addresses modal under the hood.
   *
   * See ticket CXSPA-1276
   */
  verifyAddress() {
    if (this.sameAsDeliveryAddress) {
      this.next();
    } else {
      this.userAddressService.verifyAddress(this.billingAddressForm.value).subscribe((result) => {
        this.handleAddressVerificationResults(result);
      });
    }
  }
  handleAddressVerificationResults(results) {
    if (results.decision === "ACCEPT") {
      this.next();
    } else if (results.decision === "REJECT") {
      this.globalMessageService.add({
        key: "addressForm.invalidAddress"
      }, GlobalMessageType.MSG_TYPE_ERROR);
    } else if (results.decision === "REVIEW") {
      this.openSuggestedAddress(results);
    }
  }
  countrySelected(country) {
    this.billingAddressForm.get("country.isocode")?.setValue(country.isocode);
    this.selectedCountry$.next(country.isocode);
  }
  next() {
    if (this.paymentForm.valid) {
      if (this.sameAsDeliveryAddress) {
        this.setPaymentDetails.emit({
          paymentDetails: this.paymentForm.value,
          billingAddress: null
        });
      } else {
        if (this.billingAddressForm.valid) {
          this.setPaymentDetails.emit({
            paymentDetails: this.paymentForm.value,
            billingAddress: this.billingAddressForm.value
          });
        } else {
          this.billingAddressForm.markAllAsTouched();
        }
      }
    } else {
      this.paymentForm.markAllAsTouched();
      if (!this.sameAsDeliveryAddress) {
        this.billingAddressForm.markAllAsTouched();
      }
    }
  }
};
_CheckoutPaymentFormComponent.\u0275fac = function CheckoutPaymentFormComponent_Factory(t) {
  return new (t || _CheckoutPaymentFormComponent)(\u0275\u0275directiveInject(CheckoutPaymentFacade), \u0275\u0275directiveInject(CheckoutDeliveryAddressFacade), \u0275\u0275directiveInject(UserPaymentService), \u0275\u0275directiveInject(GlobalMessageService), \u0275\u0275directiveInject(UntypedFormBuilder), \u0275\u0275directiveInject(UserAddressService), \u0275\u0275directiveInject(LaunchDialogService), \u0275\u0275directiveInject(TranslationService));
};
_CheckoutPaymentFormComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
  type: _CheckoutPaymentFormComponent,
  selectors: [["cx-payment-form"]],
  inputs: {
    loading: "loading",
    setAsDefaultField: "setAsDefaultField",
    paymentMethodsCount: "paymentMethodsCount",
    paymentDetails: "paymentDetails"
  },
  outputs: {
    goBack: "goBack",
    closeForm: "closeForm",
    setPaymentDetails: "setPaymentDetails"
  },
  decls: 3,
  vars: 2,
  consts: [["spinner", ""], ["billingAddress", ""], [4, "ngIf", "ngIfElse"], ["role", "status"], [3, "ngSubmit", "formGroup"], [1, "row"], [1, "col-md-12", "col-xl-10"], ["formGroupName", "cardType", 1, "form-group"], [4, "ngIf"], [1, "form-group"], [1, "label-content"], ["required", "true", "type", "text", "formControlName", "accountHolderName", 1, "form-control", 3, "placeholder"], [3, "control"], ["required", "true", "type", "text", "formControlName", "cardNumber", 1, "form-control"], [1, "form-group", "col-md-8"], [1, "cx-payment-form-exp-date"], [1, "cx-payment-form-exp-date-wrapper"], ["formControlName", "expiryMonth", "id", "month-select", 3, "inputAttrs", "searchable", "clearable", "items", "placeholder", "cxNgSelectA11y"], ["id", "year-select", "formControlName", "expiryYear", 3, "inputAttrs", "searchable", "clearable", "items", "placeholder", "cxNgSelectA11y"], [1, "form-group", "col-md-4"], ["placement", "right", "alt", "", 1, "cx-payment-form-tooltip", 3, "type", "title"], ["required", "true", "type", "text", "id", "cVVNumber", "formControlName", "cvn", 1, "form-control"], ["class", "form-group", 4, "ngIf"], [1, "cx-payment-form-billing"], [1, "cx-payment-form-billing-address"], [1, "cx-checkout-btns", "row"], [1, "col-md-12", "col-lg-6"], ["class", "btn btn-block btn-secondary", 3, "click", 4, "ngIf"], ["type", "submit", 1, "btn", "btn-block", "btn-primary"], [1, "label-content", "required"], ["bindLabel", "name", "bindValue", "code", "formControlName", "code", "id", "card-type-select", 3, "inputAttrs", "searchable", "clearable", "items", "placeholder", "cxNgSelectA11y"], [1, "form-check"], ["type", "checkbox", 1, "form-check-input", 3, "change"], [1, "form-check-label"], ["type", "checkbox", 1, "form-check-input", 3, "change", "checked"], [3, "content"], [3, "formGroup"], ["formGroupName", "country", 1, "form-group"], ["required", "true", "type", "text", "formControlName", "firstName", 1, "form-control", 3, "placeholder"], ["required", "true", "type", "text", "formControlName", "lastName", 1, "form-control", 3, "placeholder"], ["required", "true", "type", "text", "formControlName", "line1", 1, "form-control", 3, "placeholder"], ["type", "text", "formControlName", "line2", 1, "form-control", 3, "placeholder"], [1, "form-group", "col-md-6"], ["required", "true", "type", "text", "formControlName", "town", 1, "form-control", 3, "placeholder"], ["required", "true", "type", "text", "formControlName", "postalCode", 1, "form-control", 3, "placeholder"], ["formGroupName", "region", 4, "ngIf"], ["bindLabel", "name", "bindValue", "isocode", "formControlName", "isocode", "id", "country-payment-select", 3, "change", "inputAttrs", "searchable", "clearable", "items", "placeholder", "cxNgSelectA11y"], ["formGroupName", "region"], ["formControlName", "isocodeShort", "id", "region-select", 1, "region-select", 3, "inputAttrs", "searchable", "clearable", "items", "bindLabel", "bindValue", "placeholder", "cxNgSelectA11y"], [1, "btn", "btn-block", "btn-secondary", 3, "click"]],
  template: function CheckoutPaymentFormComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275template(0, CheckoutPaymentFormComponent_ng_container_0_Template, 68, 79, "ng-container", 2)(1, CheckoutPaymentFormComponent_ng_template_1_Template, 1, 0, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
    }
    if (rf & 2) {
      const spinner_r13 = \u0275\u0275reference(2);
      \u0275\u0275property("ngIf", !ctx.loading)("ngIfElse", spinner_r13);
    }
  },
  dependencies: [NgSelectA11yDirective, NgIf, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, RequiredValidator, FormGroupDirective, FormControlName, FormGroupName, NgSelectComponent, CardComponent, IconComponent, SpinnerComponent, FormErrorsComponent, AsyncPipe, TranslatePipe],
  encapsulation: 2,
  changeDetection: 0
});
var CheckoutPaymentFormComponent = _CheckoutPaymentFormComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CheckoutPaymentFormComponent, [{
    type: Component,
    args: [{
      selector: "cx-payment-form",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: `<!-- FORM -->
<ng-container *ngIf="!loading; else spinner">
  <div role="status" [attr.aria-label]="'common.loaded' | cxTranslate"></div>
  <form (ngSubmit)="next()" [formGroup]="paymentForm">
    <div class="row">
      <div class="col-md-12 col-xl-10">
        <div class="form-group" formGroupName="cardType">
          <ng-container *ngIf="cardTypes$ | async as cardTypes">
            <div *ngIf="cardTypes.length !== 0">
              <label>
                <span class="label-content required">{{
                  'paymentForm.paymentType' | cxTranslate
                }}</span>
                <ng-select
                  [inputAttrs]="{ required: 'true' }"
                  [searchable]="true"
                  [clearable]="false"
                  [items]="cardTypes"
                  bindLabel="name"
                  bindValue="code"
                  placeholder="{{ 'paymentForm.selectOne' | cxTranslate }}"
                  formControlName="code"
                  id="card-type-select"
                  [cxNgSelectA11y]="{
                    ariaLabel: 'paymentForm.paymentType' | cxTranslate
                  }"
                >
                </ng-select>
                <cx-form-errors
                  [control]="paymentForm.get('cardType.code')"
                ></cx-form-errors>
              </label>
            </div>
          </ng-container>
        </div>

        <div class="form-group">
          <label>
            <span class="label-content">{{
              'paymentForm.accountHolderName.label' | cxTranslate
            }}</span>
            <input
              required="true"
              class="form-control"
              type="text"
              placeholder="{{
                'paymentForm.accountHolderName.placeholder' | cxTranslate
              }}"
              formControlName="accountHolderName"
            />
            <cx-form-errors
              [control]="paymentForm.get('accountHolderName')"
            ></cx-form-errors>
          </label>
        </div>

        <div class="form-group">
          <label>
            <span class="label-content">{{
              'paymentForm.cardNumber' | cxTranslate
            }}</span>
            <input
              required="true"
              type="text"
              class="form-control"
              formControlName="cardNumber"
            />
            <cx-form-errors
              [control]="paymentForm.get('cardNumber')"
            ></cx-form-errors>
          </label>
        </div>

        <div class="row">
          <div class="form-group col-md-8">
            <fieldset class="cx-payment-form-exp-date">
              <legend class="label-content">
                {{ 'paymentForm.expirationDate' | cxTranslate }}
              </legend>
              <label class="cx-payment-form-exp-date-wrapper">
                <ng-select
                  [inputAttrs]="{ required: 'true' }"
                  [searchable]="true"
                  [clearable]="false"
                  [items]="months"
                  placeholder="{{ 'paymentForm.monthMask' | cxTranslate }}"
                  formControlName="expiryMonth"
                  id="month-select"
                  [cxNgSelectA11y]="{
                    ariaLabel:
                      'paymentForm.expirationMonth'
                      | cxTranslate
                        : { selected: paymentForm.get('expiryMonth')?.value }
                  }"
                >
                </ng-select>
                <cx-form-errors
                  [control]="paymentForm.get('expiryMonth')"
                ></cx-form-errors>
              </label>
              <label class="cx-payment-form-exp-date-wrapper">
                <ng-select
                  [inputAttrs]="{ required: 'true' }"
                  [searchable]="true"
                  [clearable]="false"
                  [items]="years"
                  placeholder="{{ 'paymentForm.yearMask' | cxTranslate }}"
                  id="year-select"
                  [cxNgSelectA11y]="{
                    ariaLabel:
                      'paymentForm.expirationYear'
                      | cxTranslate
                        : { selected: paymentForm.get('expiryYear')?.value }
                  }"
                  formControlName="expiryYear"
                >
                </ng-select>
                <cx-form-errors
                  [control]="paymentForm.get('expiryYear')"
                ></cx-form-errors>
              </label>
            </fieldset>
          </div>

          <div class="form-group col-md-4">
            <label>
              <span class="label-content">
                {{ 'paymentForm.securityCode' | cxTranslate }}
                <cx-icon
                  [type]="iconTypes.INFO"
                  class="cx-payment-form-tooltip"
                  placement="right"
                  title="{{ 'paymentForm.securityCodeTitle' | cxTranslate }}"
                  alt=""
                ></cx-icon>
              </span>
              <input
                required="true"
                type="text"
                class="form-control"
                id="cVVNumber"
                formControlName="cvn"
              />
              <cx-form-errors
                [control]="paymentForm.get('cvn')"
              ></cx-form-errors>
            </label>
          </div>
        </div>

        <div class="form-group" *ngIf="setAsDefaultField">
          <div class="form-check">
            <label>
              <input
                type="checkbox"
                class="form-check-input"
                (change)="toggleDefaultPaymentMethod()"
              />
              <span class="form-check-label">{{
                'paymentForm.setAsDefault' | cxTranslate
              }}</span>
            </label>
          </div>
        </div>

        <!-- BILLING -->
        <div class="cx-payment-form-billing">
          <div class="cx-payment-form-billing-address">
            {{ 'paymentForm.billingAddress' | cxTranslate }}
          </div>

          <!-- SAME AS SHIPPING CHECKBOX -->
          <ng-container *ngIf="showSameAsDeliveryAddressCheckbox$ | async">
            <div class="form-group">
              <div class="form-check">
                <label>
                  <input
                    type="checkbox"
                    class="form-check-input"
                    [checked]="sameAsDeliveryAddress"
                    (change)="toggleSameAsDeliveryAddress()"
                    [attr.aria-label]="
                      'paymentForm.billingAddressSameAsShipping' | cxTranslate
                    "
                  />
                  <span class="form-check-label">{{
                    'paymentForm.sameAsDeliveryAddress' | cxTranslate
                  }}</span>
                </label>
              </div>
            </div>
          </ng-container>

          <!-- BILLING INFO COMPONENT -->
          <ng-container
            *ngIf="
              sameAsDeliveryAddress &&
                (deliveryAddress$ | async) as deliveryAddress;
              else billingAddress
            "
          >
            <cx-card
              [content]="getAddressCardContent(deliveryAddress)"
            ></cx-card>
          </ng-container>

          <!-- TODO:#future-checkout do we really want this? We can always pass more inputs to the copied address form component to make it more modular -->
          <ng-template #billingAddress>
            <div [formGroup]="billingAddressForm">
              <div class="form-group" formGroupName="country">
                <ng-container *ngIf="countries$ | async as countries">
                  <div *ngIf="countries.length !== 0">
                    <label>
                      <span class="label-content required">{{
                        'addressForm.country' | cxTranslate
                      }}</span>
                      <ng-select
                        [inputAttrs]="{ required: 'true' }"
                        [searchable]="true"
                        [clearable]="false"
                        [items]="countries"
                        bindLabel="name"
                        bindValue="isocode"
                        placeholder="{{
                          'addressForm.selectOne' | cxTranslate
                        }}"
                        (change)="countrySelected($event)"
                        formControlName="isocode"
                        id="country-payment-select"
                        [cxNgSelectA11y]="{
                          ariaLabel: 'addressForm.country' | cxTranslate
                        }"
                      >
                      </ng-select>
                      <cx-form-errors
                        [control]="billingAddressForm.get('country.isocode')"
                      ></cx-form-errors>
                    </label>
                  </div>
                </ng-container>
              </div>
              <div class="form-group">
                <label>
                  <span class="label-content required">{{
                    'addressForm.firstName.label' | cxTranslate
                  }}</span>
                  <input
                    required="true"
                    class="form-control"
                    type="text"
                    placeholder="{{
                      'addressForm.firstName.placeholder' | cxTranslate
                    }}"
                    formControlName="firstName"
                  />
                  <cx-form-errors
                    [control]="billingAddressForm.get('firstName')"
                  ></cx-form-errors>
                </label>
              </div>
              <div class="form-group">
                <label>
                  <span class="label-content required">{{
                    'addressForm.lastName.label' | cxTranslate
                  }}</span>
                  <input
                    required="true"
                    type="text"
                    class="form-control"
                    placeholder="{{
                      'addressForm.lastName.placeholder' | cxTranslate
                    }}"
                    formControlName="lastName"
                  />
                  <cx-form-errors
                    [control]="billingAddressForm.get('lastName')"
                  ></cx-form-errors>
                </label>
              </div>
              <div class="form-group">
                <label>
                  <span class="label-content required">{{
                    'addressForm.address1' | cxTranslate
                  }}</span>
                  <input
                    required="true"
                    type="text"
                    class="form-control"
                    placeholder="{{
                      'addressForm.streetAddress' | cxTranslate
                    }}"
                    formControlName="line1"
                  />
                  <cx-form-errors
                    [control]="billingAddressForm.get('line1')"
                  ></cx-form-errors>
                </label>
              </div>
              <div class="form-group">
                <label>
                  <span class="label-content">{{
                    'addressForm.address2' | cxTranslate
                  }}</span>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="{{ 'addressForm.aptSuite' | cxTranslate }}"
                    formControlName="line2"
                  />
                </label>
              </div>
              <div class="row">
                <div class="form-group col-md-6">
                  <label>
                    <span class="label-content required">{{
                      'addressForm.city.label' | cxTranslate
                    }}</span>
                    <input
                      required="true"
                      type="text"
                      class="form-control"
                      placeholder="{{
                        'addressForm.city.placeholder' | cxTranslate
                      }}"
                      formControlName="town"
                    />
                    <cx-form-errors
                      [control]="billingAddressForm.get('town')"
                    ></cx-form-errors>
                  </label>
                </div>
                <div class="form-group col-md-6">
                  <label>
                    <span class="label-content required">{{
                      'addressForm.zipCode.label' | cxTranslate
                    }}</span>
                    <input
                      required="true"
                      type="text"
                      class="form-control"
                      placeholder="{{
                        'addressForm.zipCode.placeholder' | cxTranslate
                      }}"
                      formControlName="postalCode"
                    />
                    <cx-form-errors
                      [control]="billingAddressForm.get('postalCode')"
                    ></cx-form-errors>
                  </label>
                </div>
                <ng-container
                  *ngIf="regions$ | async as regions"
                  formGroupName="region"
                >
                  <ng-container *ngIf="regions.length !== 0">
                    <div class="form-group col-md-6">
                      <label>
                        <span class="label-content required">{{
                          'addressForm.state' | cxTranslate
                        }}</span>
                        <ng-select
                          [inputAttrs]="{ required: 'true' }"
                          class="region-select"
                          formControlName="isocodeShort"
                          [searchable]="true"
                          [clearable]="false"
                          [items]="regions"
                          bindLabel="{{
                            regions[0].name ? 'name' : 'isocodeShort'
                          }}"
                          bindValue="{{
                            regions[0].name ? 'isocodeShort' : 'region'
                          }}"
                          placeholder="{{
                            'addressForm.selectOne' | cxTranslate
                          }}"
                          id="region-select"
                          [cxNgSelectA11y]="{
                            ariaLabel: 'addressForm.state' | cxTranslate
                          }"
                        >
                        </ng-select>
                        <cx-form-errors
                          [control]="
                            billingAddressForm.get('region.isocodeShort')
                          "
                        ></cx-form-errors>
                      </label>
                    </div>
                  </ng-container>
                </ng-container>
              </div>
            </div>
          </ng-template>
        </div>
      </div>
    </div>

    <!-- BUTTON SECTION -->
    <div class="cx-checkout-btns row">
      <div class="col-md-12 col-lg-6">
        <button
          *ngIf="paymentMethodsCount === 0"
          class="btn btn-block btn-secondary"
          (click)="back()"
        >
          {{ 'common.back' | cxTranslate }}
        </button>
        <button
          *ngIf="paymentMethodsCount > 0"
          class="btn btn-block btn-secondary"
          (click)="close()"
        >
          {{ 'paymentForm.changePayment' | cxTranslate }}
        </button>
      </div>
      <div class="col-md-12 col-lg-6">
        <button class="btn btn-block btn-primary" type="submit">
          {{ 'common.continue' | cxTranslate }}
        </button>
      </div>
    </div>
  </form>
</ng-container>

<ng-template #spinner>
  <cx-spinner></cx-spinner>
</ng-template>
`
    }]
  }], () => [{
    type: CheckoutPaymentFacade
  }, {
    type: CheckoutDeliveryAddressFacade
  }, {
    type: UserPaymentService
  }, {
    type: GlobalMessageService
  }, {
    type: UntypedFormBuilder
  }, {
    type: UserAddressService
  }, {
    type: LaunchDialogService
  }, {
    type: TranslationService
  }], {
    loading: [{
      type: Input
    }],
    setAsDefaultField: [{
      type: Input
    }],
    paymentMethodsCount: [{
      type: Input
    }],
    paymentDetails: [{
      type: Input
    }],
    goBack: [{
      type: Output
    }],
    closeForm: [{
      type: Output
    }],
    setPaymentDetails: [{
      type: Output
    }]
  });
})();
var _CheckoutPaymentFormModule = class _CheckoutPaymentFormModule {
};
_CheckoutPaymentFormModule.\u0275fac = function CheckoutPaymentFormModule_Factory(t) {
  return new (t || _CheckoutPaymentFormModule)();
};
_CheckoutPaymentFormModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
  type: _CheckoutPaymentFormModule
});
_CheckoutPaymentFormModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
  imports: [NgSelectA11yModule, CommonModule, ReactiveFormsModule, NgSelectModule, CardModule, I18nModule, IconModule, SpinnerModule, FormErrorsModule]
});
var CheckoutPaymentFormModule = _CheckoutPaymentFormModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CheckoutPaymentFormModule, [{
    type: NgModule,
    args: [{
      imports: [NgSelectA11yModule, CommonModule, ReactiveFormsModule, NgSelectModule, CardModule, I18nModule, IconModule, SpinnerModule, FormErrorsModule],
      declarations: [CheckoutPaymentFormComponent],
      exports: [CheckoutPaymentFormComponent]
    }]
  }], null, null);
})();
var _CheckoutPaymentMethodComponent = class _CheckoutPaymentMethodComponent {
  get backBtnText() {
    return this.checkoutStepService.getBackBntText(this.activatedRoute);
  }
  get existingPaymentMethods$() {
    return this.userPaymentService.getPaymentMethods();
  }
  get selectedMethod$() {
    return this.checkoutPaymentFacade.getPaymentDetailsState().pipe(filter((state) => !state.loading), map((state) => state.data), distinctUntilChanged((prev, curr) => prev?.id === curr?.id));
  }
  constructor(userPaymentService, checkoutDeliveryAddressFacade, checkoutPaymentFacade, activatedRoute, translationService, activeCartFacade, checkoutStepService, globalMessageService) {
    this.userPaymentService = userPaymentService;
    this.checkoutDeliveryAddressFacade = checkoutDeliveryAddressFacade;
    this.checkoutPaymentFacade = checkoutPaymentFacade;
    this.activatedRoute = activatedRoute;
    this.translationService = translationService;
    this.activeCartFacade = activeCartFacade;
    this.checkoutStepService = checkoutStepService;
    this.globalMessageService = globalMessageService;
    this.subscriptions = new Subscription();
    this.busy$ = new BehaviorSubject(false);
    this.iconTypes = ICON_TYPE;
    this.isGuestCheckout = false;
    this.newPaymentFormManuallyOpened = false;
    this.doneAutoSelect = false;
    this.isUpdating$ = combineLatest([this.busy$, this.userPaymentService.getPaymentMethodsLoading(), this.checkoutPaymentFacade.getPaymentDetailsState().pipe(map((state) => state.loading))]).pipe(map(([busy, userPaymentLoading, paymentMethodLoading]) => busy || userPaymentLoading || paymentMethodLoading), distinctUntilChanged());
  }
  ngOnInit() {
    if (!getLastValueSync(this.activeCartFacade.isGuestCart())) {
      this.userPaymentService.loadPaymentMethods();
    } else {
      this.isGuestCheckout = true;
    }
    this.checkoutDeliveryAddressFacade.getDeliveryAddressState().pipe(filter((state) => !state.loading), take(1), map((state) => state.data)).subscribe((address) => {
      this.deliveryAddress = address;
    });
    this.cards$ = combineLatest([this.existingPaymentMethods$.pipe(switchMap((methods) => {
      return !methods?.length ? of([]) : combineLatest(methods.map((method) => combineLatest([of(method), this.translationService.translate("paymentCard.expires", {
        month: method.expiryMonth,
        year: method.expiryYear
      })]).pipe(map(([payment, translation]) => ({
        payment,
        expiryTranslation: translation
      })))));
    })), this.selectedMethod$, this.translationService.translate("paymentForm.useThisPayment"), this.translationService.translate("paymentCard.defaultPaymentMethod"), this.translationService.translate("paymentCard.selected")]).pipe(tap(([paymentMethods, selectedMethod]) => this.selectDefaultPaymentMethod(paymentMethods, selectedMethod)), map(([paymentMethods, selectedMethod, textUseThisPayment, textDefaultPaymentMethod, textSelected]) => paymentMethods.map((payment) => ({
      content: this.createCard(payment.payment, {
        textExpires: payment.expiryTranslation,
        textUseThisPayment,
        textDefaultPaymentMethod,
        textSelected
      }, selectedMethod),
      paymentMethod: payment.payment
    }))));
  }
  selectDefaultPaymentMethod(paymentMethods, selectedMethod) {
    if (!this.doneAutoSelect && paymentMethods?.length && (!selectedMethod || Object.keys(selectedMethod).length === 0)) {
      const defaultPaymentMethod = paymentMethods.find((paymentMethod) => paymentMethod.payment.defaultPayment);
      if (defaultPaymentMethod) {
        selectedMethod = defaultPaymentMethod.payment;
        this.savePaymentMethod(selectedMethod);
      }
      this.doneAutoSelect = true;
    }
  }
  selectPaymentMethod(paymentDetails) {
    if (paymentDetails?.id === getLastValueSync(this.selectedMethod$)?.id) {
      return;
    }
    this.globalMessageService.add({
      key: "paymentMethods.paymentMethodSelected"
    }, GlobalMessageType.MSG_TYPE_INFO);
    this.savePaymentMethod(paymentDetails);
  }
  showNewPaymentForm() {
    this.newPaymentFormManuallyOpened = true;
  }
  hideNewPaymentForm() {
    this.newPaymentFormManuallyOpened = false;
  }
  setPaymentDetails({
    paymentDetails,
    billingAddress
  }) {
    this.paymentDetails = paymentDetails;
    const details = __spreadValues({}, paymentDetails);
    details.billingAddress = billingAddress ?? this.deliveryAddress;
    this.busy$.next(true);
    this.subscriptions.add(this.checkoutPaymentFacade.createPaymentDetails(details).subscribe({
      complete: () => {
        this.next();
      },
      error: () => {
        this.onError();
      }
    }));
  }
  next() {
    this.checkoutStepService.next(this.activatedRoute);
  }
  back() {
    this.checkoutStepService.back(this.activatedRoute);
  }
  savePaymentMethod(paymentDetails) {
    this.busy$.next(true);
    this.subscriptions.add(this.checkoutPaymentFacade.setPaymentDetails(paymentDetails).subscribe({
      complete: () => this.onSuccess(),
      error: () => this.onError()
    }));
  }
  getCardIcon(code) {
    let ccIcon;
    if (code === "visa") {
      ccIcon = this.iconTypes.VISA;
    } else if (code === "master" || code === "mastercard_eurocard") {
      ccIcon = this.iconTypes.MASTER_CARD;
    } else if (code === "diners") {
      ccIcon = this.iconTypes.DINERS_CLUB;
    } else if (code === "amex") {
      ccIcon = this.iconTypes.AMEX;
    } else {
      ccIcon = this.iconTypes.CREDIT_CARD;
    }
    return ccIcon;
  }
  createCard(paymentDetails, cardLabels, selected) {
    return {
      role: "region",
      title: paymentDetails.defaultPayment ? cardLabels.textDefaultPaymentMethod : "",
      textBold: paymentDetails.accountHolderName,
      text: [paymentDetails.cardNumber ?? "", cardLabels.textExpires],
      img: this.getCardIcon(paymentDetails.cardType?.code),
      actions: [{
        name: cardLabels.textUseThisPayment,
        event: "send"
      }],
      header: selected?.id === paymentDetails.id ? cardLabels.textSelected : void 0,
      label: paymentDetails.defaultPayment ? "paymentCard.defaultPaymentLabel" : "paymentCard.additionalPaymentLabel"
    };
  }
  onSuccess() {
    this.busy$.next(false);
  }
  onError() {
    this.busy$.next(false);
  }
  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }
};
_CheckoutPaymentMethodComponent.\u0275fac = function CheckoutPaymentMethodComponent_Factory(t) {
  return new (t || _CheckoutPaymentMethodComponent)(\u0275\u0275directiveInject(UserPaymentService), \u0275\u0275directiveInject(CheckoutDeliveryAddressFacade), \u0275\u0275directiveInject(CheckoutPaymentFacade), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(TranslationService), \u0275\u0275directiveInject(ActiveCartFacade), \u0275\u0275directiveInject(CheckoutStepService), \u0275\u0275directiveInject(GlobalMessageService));
};
_CheckoutPaymentMethodComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
  type: _CheckoutPaymentMethodComponent,
  selectors: [["cx-payment-method"]],
  decls: 7,
  vars: 6,
  consts: [["loading", ""], ["hasExistingPaymentMethods", ""], ["newPaymentForm", ""], [1, "cx-checkout-title", "d-none", "d-lg-block", "d-xl-block"], [4, "ngIf"], [4, "ngIf", "ngIfElse"], ["role", "status"], [4, "ngIf", "ngIfThen", "ngIfElse"], [1, "cx-checkout-text"], [1, "cx-checkout-btns", "cx-checkout-btns-top"], [1, "btn", "btn-block", "btn-secondary", 3, "click"], [1, "cx-checkout-body", "row"], ["class", "cx-payment-card col-md-12 col-lg-6", 4, "ngFor", "ngForOf"], [1, "cx-checkout-btns", "cx-checkout-btns-bottom"], [1, "row", "cx-checkout-btns"], [1, "col-md-12", "col-lg-6"], [1, "btn", "btn-block", "btn-primary", 3, "click", "disabled"], [1, "cx-payment-card", "col-md-12", "col-lg-6"], [1, "cx-payment-card-inner", 3, "click"], [3, "sendCard", "border", "fitToContainer", "content", "index"], [3, "setPaymentDetails", "closeForm", "goBack", "paymentMethodsCount", "setAsDefaultField", "loading", "paymentDetails"], [1, "cx-spinner"]],
  template: function CheckoutPaymentMethodComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "h2", 3);
      \u0275\u0275text(1);
      \u0275\u0275pipe(2, "cxTranslate");
      \u0275\u0275elementEnd();
      \u0275\u0275template(3, CheckoutPaymentMethodComponent_ng_container_3_Template, 7, 4, "ng-container", 4);
      \u0275\u0275pipe(4, "async");
      \u0275\u0275template(5, CheckoutPaymentMethodComponent_ng_template_5_Template, 2, 0, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 2, "paymentForm.payment"), "\n");
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", \u0275\u0275pipeBind1(4, 4, ctx.cards$));
    }
  },
  dependencies: [NgForOf, NgIf, CheckoutPaymentFormComponent, CardComponent, SpinnerComponent, AsyncPipe, TranslatePipe],
  encapsulation: 2,
  changeDetection: 0
});
var CheckoutPaymentMethodComponent = _CheckoutPaymentMethodComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CheckoutPaymentMethodComponent, [{
    type: Component,
    args: [{
      selector: "cx-payment-method",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: `<h2 class="cx-checkout-title d-none d-lg-block d-xl-block">
  {{ 'paymentForm.payment' | cxTranslate }}
</h2>
<ng-container *ngIf="cards$ | async as cards">
  <ng-container *ngIf="!(isUpdating$ | async); else loading">
    <div role="status" [attr.aria-label]="'common.loaded' | cxTranslate"></div>
    <ng-container
      *ngIf="
        cards?.length && !newPaymentFormManuallyOpened;
        then hasExistingPaymentMethods;
        else newPaymentForm
      "
    >
    </ng-container>
  </ng-container>

  <ng-template #hasExistingPaymentMethods>
    <p class="cx-checkout-text">
      {{ 'paymentForm.choosePaymentMethod' | cxTranslate }}
    </p>

    <div class="cx-checkout-btns cx-checkout-btns-top">
      <button
        class="btn btn-block btn-secondary"
        (click)="showNewPaymentForm()"
      >
        {{ 'paymentForm.addNewPayment' | cxTranslate }}
      </button>
    </div>

    <div class="cx-checkout-body row">
      <div
        class="cx-payment-card col-md-12 col-lg-6"
        *ngFor="let card of cards; let i = index"
      >
        <div
          class="cx-payment-card-inner"
          (click)="selectPaymentMethod(card.paymentMethod)"
        >
          <cx-card
            [border]="true"
            [fitToContainer]="true"
            [content]="card.content"
            [index]="i"
            (sendCard)="selectPaymentMethod(card.paymentMethod)"
          ></cx-card>
        </div>
      </div>
    </div>

    <div class="cx-checkout-btns cx-checkout-btns-bottom">
      <button
        class="btn btn-block btn-secondary"
        (click)="showNewPaymentForm()"
      >
        {{ 'paymentForm.addNewPayment' | cxTranslate }}
      </button>
    </div>

    <div class="row cx-checkout-btns">
      <div class="col-md-12 col-lg-6">
        <button class="btn btn-block btn-secondary" (click)="back()">
          {{ backBtnText | cxTranslate }}
        </button>
      </div>
      <div class="col-md-12 col-lg-6">
        <button
          class="btn btn-block btn-primary"
          [disabled]="!(selectedMethod$ | async)?.id"
          (click)="next()"
        >
          {{ 'common.continue' | cxTranslate }}
        </button>
      </div>
    </div>
  </ng-template>

  <ng-template #newPaymentForm>
    <cx-payment-form
      (setPaymentDetails)="setPaymentDetails($event)"
      (closeForm)="hideNewPaymentForm()"
      (goBack)="back()"
      [paymentMethodsCount]="cards?.length || 0"
      [setAsDefaultField]="!isGuestCheckout && !!cards?.length"
      [loading]="isUpdating$ | async"
      [paymentDetails]="paymentDetails"
    ></cx-payment-form>
  </ng-template>
</ng-container>

<ng-template #loading>
  <div class="cx-spinner">
    <cx-spinner></cx-spinner>
  </div>
</ng-template>
`
    }]
  }], () => [{
    type: UserPaymentService
  }, {
    type: CheckoutDeliveryAddressFacade
  }, {
    type: CheckoutPaymentFacade
  }, {
    type: ActivatedRoute
  }, {
    type: TranslationService
  }, {
    type: ActiveCartFacade
  }, {
    type: CheckoutStepService
  }, {
    type: GlobalMessageService
  }], null);
})();
var _CheckoutPaymentMethodModule = class _CheckoutPaymentMethodModule {
};
_CheckoutPaymentMethodModule.\u0275fac = function CheckoutPaymentMethodModule_Factory(t) {
  return new (t || _CheckoutPaymentMethodModule)();
};
_CheckoutPaymentMethodModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
  type: _CheckoutPaymentMethodModule
});
_CheckoutPaymentMethodModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
  providers: [provideDefaultConfig({
    cmsComponents: {
      CheckoutPaymentDetails: {
        component: CheckoutPaymentMethodComponent,
        guards: [CheckoutAuthGuard, CartNotEmptyGuard]
      }
    }
  })],
  imports: [CommonModule, RouterModule, CheckoutPaymentFormModule, CardModule, SpinnerModule, I18nModule]
});
var CheckoutPaymentMethodModule = _CheckoutPaymentMethodModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CheckoutPaymentMethodModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, RouterModule, CheckoutPaymentFormModule, CardModule, SpinnerModule, I18nModule],
      providers: [provideDefaultConfig({
        cmsComponents: {
          CheckoutPaymentDetails: {
            component: CheckoutPaymentMethodComponent,
            guards: [CheckoutAuthGuard, CartNotEmptyGuard]
          }
        }
      })],
      declarations: [CheckoutPaymentMethodComponent],
      exports: [CheckoutPaymentMethodComponent]
    }]
  }], null, null);
})();
var _CheckoutPlaceOrderComponent = class _CheckoutPlaceOrderComponent {
  get termsAndConditionInvalid() {
    return this.checkoutSubmitForm.invalid;
  }
  constructor(orderFacade, routingService, fb, launchDialogService, vcr) {
    this.orderFacade = orderFacade;
    this.routingService = routingService;
    this.fb = fb;
    this.launchDialogService = launchDialogService;
    this.vcr = vcr;
    this.checkoutSubmitForm = this.fb.group({
      termsAndConditions: [false, Validators.requiredTrue]
    });
  }
  submitForm() {
    if (this.checkoutSubmitForm.valid) {
      this.placedOrder = this.launchDialogService.launch("PLACE_ORDER_SPINNER", this.vcr);
      this.orderFacade.placeOrder(this.checkoutSubmitForm.valid).subscribe({
        error: () => {
          if (!this.placedOrder) {
            return;
          }
          this.placedOrder.subscribe((component) => {
            this.launchDialogService.clear(
              "PLACE_ORDER_SPINNER"
              /* LAUNCH_CALLER.PLACE_ORDER_SPINNER */
            );
            if (component) {
              component.destroy();
            }
          }).unsubscribe();
        },
        next: () => this.onSuccess()
      });
    } else {
      this.checkoutSubmitForm.markAllAsTouched();
    }
  }
  onSuccess() {
    this.routingService.go({
      cxRoute: "orderConfirmation"
    });
  }
  ngOnDestroy() {
    this.launchDialogService.clear(
      "PLACE_ORDER_SPINNER"
      /* LAUNCH_CALLER.PLACE_ORDER_SPINNER */
    );
  }
};
_CheckoutPlaceOrderComponent.\u0275fac = function CheckoutPlaceOrderComponent_Factory(t) {
  return new (t || _CheckoutPlaceOrderComponent)(\u0275\u0275directiveInject(OrderFacade), \u0275\u0275directiveInject(RoutingService), \u0275\u0275directiveInject(UntypedFormBuilder), \u0275\u0275directiveInject(LaunchDialogService), \u0275\u0275directiveInject(ViewContainerRef));
};
_CheckoutPlaceOrderComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
  type: _CheckoutPlaceOrderComponent,
  selectors: [["cx-place-order"]],
  decls: 15,
  vars: 18,
  consts: [[1, "cx-place-order-form", "form-check", 3, "formGroup"], [1, "form-group"], ["formControlName", "termsAndConditions", "type", "checkbox", 1, "scaled-input", "form-check-input"], [1, "form-check-label"], ["target", "_blank", "rel", "noopener noreferrer", 1, "cx-tc-link", 3, "routerLink"], [1, "btn", "btn-primary", "btn-block", 3, "click", "disabled", "cxAtMessage"]],
  template: function CheckoutPlaceOrderComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "form", 0)(1, "div", 1)(2, "label");
      \u0275\u0275element(3, "input", 2);
      \u0275\u0275elementStart(4, "span", 3);
      \u0275\u0275text(5);
      \u0275\u0275pipe(6, "cxTranslate");
      \u0275\u0275elementStart(7, "a", 4);
      \u0275\u0275pipe(8, "cxUrl");
      \u0275\u0275text(9);
      \u0275\u0275pipe(10, "cxTranslate");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(11, "button", 5);
      \u0275\u0275pipe(12, "cxTranslate");
      \u0275\u0275listener("click", function CheckoutPlaceOrderComponent_Template_button_click_11_listener() {
        return ctx.submitForm();
      });
      \u0275\u0275text(13);
      \u0275\u0275pipe(14, "cxTranslate");
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275property("formGroup", ctx.checkoutSubmitForm);
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(6, 7, "checkoutReview.confirmThatRead"), " ");
      \u0275\u0275advance(2);
      \u0275\u0275property("routerLink", \u0275\u0275pipeBind1(8, 9, \u0275\u0275pureFunction0(17, _c5)));
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(10, 11, "checkoutReview.termsAndConditions"), " ");
      \u0275\u0275advance(2);
      \u0275\u0275property("disabled", ctx.termsAndConditionInvalid)("cxAtMessage", \u0275\u0275pipeBind1(12, 13, "checkoutReview.orderInProcess"));
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(14, 15, "checkoutReview.placeOrder"), " ");
    }
  },
  dependencies: [AtMessageDirective, RouterLink, \u0275NgNoValidate, CheckboxControlValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, UrlPipe, TranslatePipe],
  encapsulation: 2,
  changeDetection: 0
});
var CheckoutPlaceOrderComponent = _CheckoutPlaceOrderComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CheckoutPlaceOrderComponent, [{
    type: Component,
    args: [{
      selector: "cx-place-order",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: `<form class="cx-place-order-form form-check" [formGroup]="checkoutSubmitForm">
  <div class="form-group">
    <label>
      <input
        formControlName="termsAndConditions"
        class="scaled-input form-check-input"
        type="checkbox"
      />
      <span class="form-check-label">
        {{ 'checkoutReview.confirmThatRead' | cxTranslate }}
        <a
          [routerLink]="{ cxRoute: 'termsAndConditions' } | cxUrl"
          class="cx-tc-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          {{ 'checkoutReview.termsAndConditions' | cxTranslate }}
        </a>
      </span>
    </label>
  </div>

  <button
    (click)="submitForm()"
    class="btn btn-primary btn-block"
    [disabled]="termsAndConditionInvalid"
    [cxAtMessage]="'checkoutReview.orderInProcess' | cxTranslate"
  >
    {{ 'checkoutReview.placeOrder' | cxTranslate }}
  </button>
</form>
`
    }]
  }], () => [{
    type: OrderFacade
  }, {
    type: RoutingService
  }, {
    type: UntypedFormBuilder
  }, {
    type: LaunchDialogService
  }, {
    type: ViewContainerRef
  }], null);
})();
var defaultPlaceOrderSpinnerLayoutConfig = {
  launch: {
    PLACE_ORDER_SPINNER: {
      inline: true,
      component: SpinnerComponent,
      dialogType: DIALOG_TYPE.POPOVER_CENTER_BACKDROP
    }
  }
};
var _CheckoutPlaceOrderModule = class _CheckoutPlaceOrderModule {
};
_CheckoutPlaceOrderModule.\u0275fac = function CheckoutPlaceOrderModule_Factory(t) {
  return new (t || _CheckoutPlaceOrderModule)();
};
_CheckoutPlaceOrderModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
  type: _CheckoutPlaceOrderModule
});
_CheckoutPlaceOrderModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
  providers: [provideDefaultConfig(defaultPlaceOrderSpinnerLayoutConfig), provideDefaultConfig({
    cmsComponents: {
      CheckoutPlaceOrder: {
        component: CheckoutPlaceOrderComponent,
        guards: [CheckoutAuthGuard, CartNotEmptyGuard]
      }
    }
  })],
  imports: [AtMessageModule, CommonModule, RouterModule, UrlModule, I18nModule, ReactiveFormsModule]
});
var CheckoutPlaceOrderModule = _CheckoutPlaceOrderModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CheckoutPlaceOrderModule, [{
    type: NgModule,
    args: [{
      imports: [AtMessageModule, CommonModule, RouterModule, UrlModule, I18nModule, ReactiveFormsModule],
      providers: [provideDefaultConfig(defaultPlaceOrderSpinnerLayoutConfig), provideDefaultConfig({
        cmsComponents: {
          CheckoutPlaceOrder: {
            component: CheckoutPlaceOrderComponent,
            guards: [CheckoutAuthGuard, CartNotEmptyGuard]
          }
        }
      })],
      declarations: [CheckoutPlaceOrderComponent],
      exports: [CheckoutPlaceOrderComponent]
    }]
  }], null, null);
})();
var _CheckoutStepsSetGuard = class _CheckoutStepsSetGuard {
  constructor(checkoutStepService, routingConfigService, checkoutDeliveryAddressFacade, checkoutPaymentFacade, checkoutDeliveryModesFacade, router, activeCartFacade) {
    this.checkoutStepService = checkoutStepService;
    this.routingConfigService = routingConfigService;
    this.checkoutDeliveryAddressFacade = checkoutDeliveryAddressFacade;
    this.checkoutPaymentFacade = checkoutPaymentFacade;
    this.checkoutDeliveryModesFacade = checkoutDeliveryModesFacade;
    this.router = router;
    this.activeCartFacade = activeCartFacade;
    this.logger = inject(LoggerService);
    this.subscription = this.activeCartFacade.hasDeliveryItems().pipe(distinctUntilChanged()).subscribe((hasDeliveryItems) => {
      this.checkoutStepService.disableEnableStep("deliveryAddress", !hasDeliveryItems);
      this.checkoutStepService.disableEnableStep("deliveryMode", !hasDeliveryItems);
      this.setStepNameMultiLine("paymentDetails", hasDeliveryItems);
      this.setStepNameMultiLine("reviewOrder", hasDeliveryItems);
    });
  }
  canActivate(route) {
    let currentIndex = -1;
    const currentRouteUrl = "/" + route.url.join("/");
    return this.checkoutStepService.steps$.pipe(take(1), switchMap((steps) => {
      currentIndex = steps.findIndex((step) => {
        const stepRouteUrl = `/${this.routingConfigService.getRouteConfig(step.routeName)?.paths?.[0]}`;
        return stepRouteUrl === currentRouteUrl;
      });
      let currentStep;
      if (currentIndex >= 0) {
        currentStep = steps[currentIndex];
      }
      if (Boolean(currentStep)) {
        return this.isStepSet(steps[currentIndex - 1]);
      } else {
        if (isDevMode()) {
          this.logger.warn(`Missing step with route '${currentRouteUrl}' in checkout configuration or this step is disabled.`);
        }
        return of(this.getUrl("checkout"));
      }
    }));
  }
  isStepSet(step) {
    if (step && !step.disabled) {
      switch (step.type[0]) {
        case "deliveryAddress": {
          return this.isDeliveryAddress(step);
        }
        case "deliveryMode": {
          return this.isDeliveryModeSet(step);
        }
        case "paymentDetails": {
          if (this.checkoutStepService.getCheckoutStep(
            "deliveryMode"
            /* CheckoutStepType.DELIVERY_MODE */
          )?.disabled) {
            this.checkoutDeliveryModesFacade.setDeliveryMode("pickup");
          }
          return this.isPaymentDetailsSet(step);
        }
        case "reviewOrder": {
          break;
        }
      }
    }
    return of(true);
  }
  isDeliveryAddress(step) {
    return this.checkoutDeliveryAddressFacade.getDeliveryAddressState().pipe(filter((state) => !state.loading), map((state) => state.data), map((deliveryAddress) => {
      if (deliveryAddress && Object.keys(deliveryAddress).length) {
        return true;
      } else {
        return this.getUrl(step.routeName);
      }
    }));
  }
  isDeliveryModeSet(step) {
    return this.checkoutDeliveryModesFacade.getSelectedDeliveryModeState().pipe(filter((state) => !state.loading), map((state) => state.data), map((mode) => mode ? true : this.getUrl(step.routeName)));
  }
  isPaymentDetailsSet(step) {
    return this.checkoutPaymentFacade.getPaymentDetailsState().pipe(filter((state) => !state.loading), map((state) => state.data), map((paymentDetails) => paymentDetails && Object.keys(paymentDetails).length !== 0 ? true : this.getUrl(step.routeName)));
  }
  getUrl(routeName) {
    return this.router.parseUrl(this.routingConfigService.getRouteConfig(routeName)?.paths?.[0]);
  }
  setStepNameMultiLine(stepType, value) {
    const step = this.checkoutStepService.getCheckoutStep(stepType);
    if (step) {
      step.nameMultiLine = value;
    }
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
};
_CheckoutStepsSetGuard.\u0275fac = function CheckoutStepsSetGuard_Factory(t) {
  return new (t || _CheckoutStepsSetGuard)(\u0275\u0275inject(CheckoutStepService), \u0275\u0275inject(RoutingConfigService), \u0275\u0275inject(CheckoutDeliveryAddressFacade), \u0275\u0275inject(CheckoutPaymentFacade), \u0275\u0275inject(CheckoutDeliveryModesFacade), \u0275\u0275inject(Router), \u0275\u0275inject(ActiveCartFacade));
};
_CheckoutStepsSetGuard.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
  token: _CheckoutStepsSetGuard,
  factory: _CheckoutStepsSetGuard.\u0275fac,
  providedIn: "root"
});
var CheckoutStepsSetGuard = _CheckoutStepsSetGuard;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CheckoutStepsSetGuard, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: CheckoutStepService
  }, {
    type: RoutingConfigService
  }, {
    type: CheckoutDeliveryAddressFacade
  }, {
    type: CheckoutPaymentFacade
  }, {
    type: CheckoutDeliveryModesFacade
  }, {
    type: Router
  }, {
    type: ActiveCartFacade
  }], null);
})();
var _CheckoutProgressMobileBottomComponent = class _CheckoutProgressMobileBottomComponent {
  constructor(checkoutStepService) {
    this.checkoutStepService = checkoutStepService;
    this._steps$ = this.checkoutStepService.steps$;
    this.activeStepIndex$ = this.checkoutStepService.activeStepIndex$.pipe(tap((index) => this.activeStepIndex = index));
  }
  get steps$() {
    return this._steps$.asObservable();
  }
};
_CheckoutProgressMobileBottomComponent.\u0275fac = function CheckoutProgressMobileBottomComponent_Factory(t) {
  return new (t || _CheckoutProgressMobileBottomComponent)(\u0275\u0275directiveInject(CheckoutStepService));
};
_CheckoutProgressMobileBottomComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
  type: _CheckoutProgressMobileBottomComponent,
  selectors: [["cx-checkout-progress-mobile-bottom"]],
  decls: 2,
  vars: 3,
  consts: [[4, "ngIf"], [1, "cx-media"], [4, "ngFor", "ngForOf"], ["class", "cx-list-media", 4, "ngIf"], [1, "cx-list-media"]],
  template: function CheckoutProgressMobileBottomComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275template(0, CheckoutProgressMobileBottomComponent_div_0_Template, 4, 3, "div", 0);
      \u0275\u0275pipe(1, "async");
    }
    if (rf & 2) {
      \u0275\u0275property("ngIf", \u0275\u0275pipeBind1(1, 1, ctx.activeStepIndex$) !== void 0);
    }
  },
  dependencies: [NgForOf, NgIf, AsyncPipe, TranslatePipe],
  encapsulation: 2,
  changeDetection: 0
});
var CheckoutProgressMobileBottomComponent = _CheckoutProgressMobileBottomComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CheckoutProgressMobileBottomComponent, [{
    type: Component,
    args: [{
      selector: "cx-checkout-progress-mobile-bottom",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: '<div *ngIf="(activeStepIndex$ | async) !== undefined">\n  <div class="cx-media">\n    <div *ngFor="let step of steps$ | async; let i = index">\n      <div class="cx-list-media" *ngIf="i > activeStepIndex">\n        <div>{{ i + 1 }}. {{ step.name | cxTranslate }}</div>\n      </div>\n    </div>\n  </div>\n</div>\n'
    }]
  }], () => [{
    type: CheckoutStepService
  }], null);
})();
var _CheckoutProgressMobileBottomModule = class _CheckoutProgressMobileBottomModule {
};
_CheckoutProgressMobileBottomModule.\u0275fac = function CheckoutProgressMobileBottomModule_Factory(t) {
  return new (t || _CheckoutProgressMobileBottomModule)();
};
_CheckoutProgressMobileBottomModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
  type: _CheckoutProgressMobileBottomModule
});
_CheckoutProgressMobileBottomModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
  providers: [provideDefaultConfig({
    cmsComponents: {
      CheckoutProgressMobileBottom: {
        component: CheckoutProgressMobileBottomComponent,
        guards: [CheckoutAuthGuard, CartNotEmptyGuard, CheckoutStepsSetGuard]
      }
    }
  })],
  imports: [CommonModule, UrlModule, I18nModule, RouterModule]
});
var CheckoutProgressMobileBottomModule = _CheckoutProgressMobileBottomModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CheckoutProgressMobileBottomModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, UrlModule, I18nModule, RouterModule],
      providers: [provideDefaultConfig({
        cmsComponents: {
          CheckoutProgressMobileBottom: {
            component: CheckoutProgressMobileBottomComponent,
            guards: [CheckoutAuthGuard, CartNotEmptyGuard, CheckoutStepsSetGuard]
          }
        }
      })],
      declarations: [CheckoutProgressMobileBottomComponent],
      exports: [CheckoutProgressMobileBottomComponent]
    }]
  }], null, null);
})();
var _CheckoutProgressMobileTopComponent = class _CheckoutProgressMobileTopComponent {
  constructor(activeCartFacade, checkoutStepService) {
    this.activeCartFacade = activeCartFacade;
    this.checkoutStepService = checkoutStepService;
    this._steps$ = this.checkoutStepService.steps$;
    this.cart$ = this.activeCartFacade.getActive();
    this.activeStepIndex$ = this.checkoutStepService.activeStepIndex$.pipe(tap((index) => this.activeStepIndex = index));
  }
  get steps$() {
    return this._steps$.asObservable();
  }
};
_CheckoutProgressMobileTopComponent.\u0275fac = function CheckoutProgressMobileTopComponent_Factory(t) {
  return new (t || _CheckoutProgressMobileTopComponent)(\u0275\u0275directiveInject(ActiveCartFacade), \u0275\u0275directiveInject(CheckoutStepService));
};
_CheckoutProgressMobileTopComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
  type: _CheckoutProgressMobileTopComponent,
  selectors: [["cx-checkout-progress-mobile-top"]],
  decls: 2,
  vars: 3,
  consts: [[4, "ngIf"], [1, "cx-media"], ["class", "cx-list-media", 4, "ngIf"], [4, "ngFor", "ngForOf"], [1, "cx-list-media"], ["class", "cx-list-media is-active", 4, "ngIf"], [1, "btn", "btn-link", 3, "routerLink"], [1, "cx-list-media", "is-active"]],
  template: function CheckoutProgressMobileTopComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275template(0, CheckoutProgressMobileTopComponent_div_0_Template, 3, 3, "div", 0);
      \u0275\u0275pipe(1, "async");
    }
    if (rf & 2) {
      \u0275\u0275property("ngIf", \u0275\u0275pipeBind1(1, 1, ctx.activeStepIndex$) !== void 0);
    }
  },
  dependencies: [NgForOf, NgIf, RouterLink, AsyncPipe, UrlPipe, TranslatePipe],
  encapsulation: 2,
  changeDetection: 0
});
var CheckoutProgressMobileTopComponent = _CheckoutProgressMobileTopComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CheckoutProgressMobileTopComponent, [{
    type: Component,
    args: [{
      selector: "cx-checkout-progress-mobile-top",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: `<div *ngIf="(activeStepIndex$ | async) !== undefined">
  <div *ngIf="cart$ | async as cart">
    <div class="cx-media">
      <div class="cx-list-media" *ngIf="cart?.totalItems && cart?.subTotal">
        {{ 'cartItems.cartTotal' | cxTranslate: { count: cart.totalItems } }}:
        {{ cart.subTotal.formattedValue }}
      </div>
      <div *ngFor="let step of steps$ | async; let i = index">
        <div class="cx-list-media" *ngIf="i < activeStepIndex">
          <div>{{ i + 1 }}. {{ step.name | cxTranslate }}</div>
          <button
            class="btn btn-link"
            [routerLink]="{ cxRoute: step.routeName } | cxUrl"
          >
            {{ 'common.edit' | cxTranslate }}
          </button>
        </div>
        <div class="cx-list-media is-active" *ngIf="i === activeStepIndex">
          <div>{{ i + 1 }}. {{ step.name | cxTranslate }}</div>
        </div>
      </div>
    </div>
  </div>
</div>
`
    }]
  }], () => [{
    type: ActiveCartFacade
  }, {
    type: CheckoutStepService
  }], null);
})();
var _CheckoutProgressMobileTopModule = class _CheckoutProgressMobileTopModule {
};
_CheckoutProgressMobileTopModule.\u0275fac = function CheckoutProgressMobileTopModule_Factory(t) {
  return new (t || _CheckoutProgressMobileTopModule)();
};
_CheckoutProgressMobileTopModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
  type: _CheckoutProgressMobileTopModule
});
_CheckoutProgressMobileTopModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
  providers: [provideDefaultConfig({
    cmsComponents: {
      CheckoutProgressMobileTop: {
        component: CheckoutProgressMobileTopComponent,
        guards: [CheckoutAuthGuard, CartNotEmptyGuard, CheckoutStepsSetGuard]
      }
    }
  })],
  imports: [CommonModule, UrlModule, I18nModule, RouterModule]
});
var CheckoutProgressMobileTopModule = _CheckoutProgressMobileTopModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CheckoutProgressMobileTopModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, UrlModule, I18nModule, RouterModule],
      providers: [provideDefaultConfig({
        cmsComponents: {
          CheckoutProgressMobileTop: {
            component: CheckoutProgressMobileTopComponent,
            guards: [CheckoutAuthGuard, CartNotEmptyGuard, CheckoutStepsSetGuard]
          }
        }
      })],
      declarations: [CheckoutProgressMobileTopComponent],
      exports: [CheckoutProgressMobileTopComponent]
    }]
  }], null, null);
})();
var _MultiLinePipe = class _MultiLinePipe {
  transform(value) {
    const lastIndex = value.lastIndexOf(" ");
    if (lastIndex === -1) {
      return value;
    }
    return value.substring(0, lastIndex) + "<br />" + value.substring(lastIndex, value.length).trim();
  }
};
_MultiLinePipe.\u0275fac = function MultiLinePipe_Factory(t) {
  return new (t || _MultiLinePipe)();
};
_MultiLinePipe.\u0275pipe = /* @__PURE__ */ \u0275\u0275definePipe({
  name: "cxMultiLine",
  type: _MultiLinePipe,
  pure: true
});
var MultiLinePipe = _MultiLinePipe;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MultiLinePipe, [{
    type: Pipe,
    args: [{
      name: "cxMultiLine"
    }]
  }], null, null);
})();
var _CheckoutProgressComponent = class _CheckoutProgressComponent {
  constructor(checkoutStepService) {
    this.checkoutStepService = checkoutStepService;
    this._steps$ = this.checkoutStepService.steps$;
    this.activeStepIndex$ = this.checkoutStepService.activeStepIndex$.pipe(tap((index) => this.activeStepIndex = index));
  }
  get steps$() {
    return this._steps$.asObservable();
  }
  getTabIndex(stepIndex) {
    return !this.isActive(stepIndex) && !this.isDisabled(stepIndex) ? 0 : -1;
  }
  isActive(index) {
    return index === this.activeStepIndex;
  }
  isDisabled(index) {
    return index > this.activeStepIndex;
  }
};
_CheckoutProgressComponent.\u0275fac = function CheckoutProgressComponent_Factory(t) {
  return new (t || _CheckoutProgressComponent)(\u0275\u0275directiveInject(CheckoutStepService));
};
_CheckoutProgressComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
  type: _CheckoutProgressComponent,
  selectors: [["cx-checkout-progress"]],
  decls: 2,
  vars: 3,
  consts: [[4, "ngIf"], [1, "cx-nav", "d-none", "d-lg-block", "d-xl-block"], [1, "cx-list"], [4, "ngFor", "ngForOf"], [1, "cx-item"], [1, "cx-link", 3, "routerLink", "tabindex", "innerHTML"]],
  template: function CheckoutProgressComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275template(0, CheckoutProgressComponent_nav_0_Template, 6, 6, "nav", 0);
      \u0275\u0275pipe(1, "async");
    }
    if (rf & 2) {
      \u0275\u0275property("ngIf", \u0275\u0275pipeBind1(1, 1, ctx.activeStepIndex$) !== void 0);
    }
  },
  dependencies: [NgForOf, NgIf, RouterLink, AsyncPipe, UrlPipe, TranslatePipe, MultiLinePipe],
  encapsulation: 2,
  changeDetection: 0
});
var CheckoutProgressComponent = _CheckoutProgressComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CheckoutProgressComponent, [{
    type: Component,
    args: [{
      selector: "cx-checkout-progress",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: `<nav
  [attr.aria-label]="'checkoutProgress.label' | cxTranslate"
  *ngIf="(activeStepIndex$ | async) !== undefined"
>
  <div class="cx-nav d-none d-lg-block d-xl-block">
    <ul class="cx-list">
      <ng-container *ngFor="let step of steps$ | async; let i = index">
        <li
          class="cx-item"
          [class.active]="isActive(i)"
          [class.disabled]="isDisabled(i)"
        >
          <a
            [routerLink]="{ cxRoute: step.routeName } | cxUrl"
            class="cx-link"
            [class.active]="isActive(i)"
            [class.disabled]="isDisabled(i)"
            [tabindex]="getTabIndex(i)"
            [innerHTML]="
              step.nameMultiLine !== false
                ? (step.name | cxTranslate | cxMultiLine)
                : (step.name | cxTranslate)
            "
          >
          </a>
        </li>
      </ng-container>
    </ul>
  </div>
</nav>
`
    }]
  }], () => [{
    type: CheckoutStepService
  }], null);
})();
var _CheckoutProgressModule = class _CheckoutProgressModule {
};
_CheckoutProgressModule.\u0275fac = function CheckoutProgressModule_Factory(t) {
  return new (t || _CheckoutProgressModule)();
};
_CheckoutProgressModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
  type: _CheckoutProgressModule
});
_CheckoutProgressModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
  providers: [provideDefaultConfig({
    cmsComponents: {
      CheckoutProgress: {
        component: CheckoutProgressComponent,
        guards: [CheckoutAuthGuard, CartNotEmptyGuard, CheckoutStepsSetGuard]
      }
    }
  })],
  imports: [CommonModule, UrlModule, I18nModule, RouterModule]
});
var CheckoutProgressModule = _CheckoutProgressModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CheckoutProgressModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, UrlModule, I18nModule, RouterModule],
      declarations: [CheckoutProgressComponent, MultiLinePipe],
      exports: [CheckoutProgressComponent],
      providers: [provideDefaultConfig({
        cmsComponents: {
          CheckoutProgress: {
            component: CheckoutProgressComponent,
            guards: [CheckoutAuthGuard, CartNotEmptyGuard, CheckoutStepsSetGuard]
          }
        }
      })]
    }]
  }], null, null);
})();
var _CheckoutReviewSubmitComponent = class _CheckoutReviewSubmitComponent {
  constructor(checkoutDeliveryAddressFacade, checkoutPaymentFacade, activeCartFacade, translationService, checkoutStepService, checkoutDeliveryModesFacade) {
    this.checkoutDeliveryAddressFacade = checkoutDeliveryAddressFacade;
    this.checkoutPaymentFacade = checkoutPaymentFacade;
    this.activeCartFacade = activeCartFacade;
    this.translationService = translationService;
    this.checkoutStepService = checkoutStepService;
    this.checkoutDeliveryModesFacade = checkoutDeliveryModesFacade;
    this.cartOutlets = CartOutlets;
    this.iconTypes = ICON_TYPE;
    this.checkoutStepTypeDeliveryAddress = "deliveryAddress";
    this.checkoutStepTypePaymentDetails = "paymentDetails";
    this.checkoutStepTypeDeliveryMode = "deliveryMode";
    this.promotionLocation = PromotionLocation.ActiveCart;
    this.steps$ = this.checkoutStepService.steps$;
    this.deliveryAddress$ = this.checkoutDeliveryAddressFacade.getDeliveryAddressState().pipe(filter((state) => !state.loading && !state.error), map((state) => state.data));
    this.deliveryMode$ = this.checkoutDeliveryModesFacade.getSelectedDeliveryModeState().pipe(filter((state) => !state.loading && !state.error), map((state) => state.data));
    this.paymentDetails$ = this.checkoutPaymentFacade.getPaymentDetailsState().pipe(filter((state) => !state.loading && !state.error), map((state) => state.data));
  }
  get cart$() {
    return this.activeCartFacade.getActive();
  }
  get entries$() {
    return this.activeCartFacade.getEntries();
  }
  getCheckoutDeliverySteps() {
    return [
      "deliveryAddress",
      "deliveryMode"
      /* CheckoutStepType.DELIVERY_MODE */
    ];
  }
  getCheckoutPaymentSteps() {
    return [
      "paymentDetails",
      "deliveryAddress"
      /* CheckoutStepType.DELIVERY_ADDRESS */
    ];
  }
  getDeliveryAddressCard(deliveryAddress, countryName) {
    return combineLatest([this.translationService.translate("addressCard.shipTo"), this.translationService.translate("addressCard.phoneNumber"), this.translationService.translate("addressCard.mobileNumber")]).pipe(map(([textTitle, textPhone, textMobile]) => deliveryAddressCard(textTitle, textPhone, textMobile, deliveryAddress, countryName)));
  }
  getDeliveryModeCard(deliveryMode) {
    return combineLatest([this.translationService.translate("checkoutMode.deliveryMethod")]).pipe(map(([textTitle]) => deliveryModeCard(textTitle, deliveryMode)));
  }
  getPaymentMethodCard(paymentDetails) {
    return combineLatest([this.translationService.translate("paymentForm.payment"), this.translationService.translate("paymentCard.expires", {
      month: paymentDetails.expiryMonth,
      year: paymentDetails.expiryYear
    }), this.translationService.translate("paymentForm.billingAddress")]).pipe(map(([textTitle, textExpires, billingAddress]) => {
      const region = paymentDetails.billingAddress?.region?.isocode ? paymentDetails.billingAddress?.region?.isocode + ", " : "";
      return {
        title: textTitle,
        textBold: paymentDetails.accountHolderName,
        text: [paymentDetails.cardNumber, textExpires],
        paragraphs: [{
          title: billingAddress + ":",
          text: [paymentDetails.billingAddress?.firstName + " " + paymentDetails.billingAddress?.lastName, paymentDetails.billingAddress?.line1, paymentDetails.billingAddress?.town + ", " + region + paymentDetails.billingAddress?.country?.isocode, paymentDetails.billingAddress?.postalCode]
        }]
      };
    }));
  }
  getCheckoutStepUrl(stepType) {
    const step = this.checkoutStepService.getCheckoutStep(stepType);
    return step?.routeName;
  }
  deliverySteps(steps) {
    return steps.filter((step) => this.getCheckoutDeliverySteps().includes(step.type[0]));
  }
  paymentSteps(steps) {
    return steps.filter((step) => this.getCheckoutPaymentSteps().includes(step.type[0]));
  }
};
_CheckoutReviewSubmitComponent.\u0275fac = function CheckoutReviewSubmitComponent_Factory(t) {
  return new (t || _CheckoutReviewSubmitComponent)(\u0275\u0275directiveInject(CheckoutDeliveryAddressFacade), \u0275\u0275directiveInject(CheckoutPaymentFacade), \u0275\u0275directiveInject(ActiveCartFacade), \u0275\u0275directiveInject(TranslationService), \u0275\u0275directiveInject(CheckoutStepService), \u0275\u0275directiveInject(CheckoutDeliveryModesFacade));
};
_CheckoutReviewSubmitComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
  type: _CheckoutReviewSubmitComponent,
  selectors: [["cx-review-submit"]],
  decls: 15,
  vars: 9,
  consts: [["deliveryAddress", ""], ["deliveryMode", ""], ["paymentMethod", ""], [1, "cx-review"], [1, "cx-review-title", "d-none", "d-lg-block", "d-xl-block"], [1, "cx-review-summary", "row"], [4, "ngIf"], [1, "col-md-12", "col-lg-6", "col-xl-6", "cx-review-payment-col"], [4, "ngFor", "ngForOf"], [1, "col-md-12", "col-lg-6", "col-xl-6", "cx-review-shipping-col"], [3, "ngSwitch"], [4, "ngSwitchCase"], [4, "ngTemplateOutlet"], ["class", "cx-review-summary-card cx-review-card-address", 4, "ngIf"], [1, "cx-review-summary-card", "cx-review-card-address"], [3, "content"], [1, "cx-review-summary-edit-step"], [3, "routerLink"], ["aria-hidden", "true", 3, "type"], [1, "cx-review-summary-card", "cx-review-card-shipping"], [3, "content", 4, "ngIf"], [3, "cxOutlet", "cxOutletContext"], [1, "cx-review-summary-card", "cx-review-card-payment"], [1, "cx-review-cart-total", "d-none", "d-lg-block", "d-xl-block"], [1, "cx-review-cart-heading", "d-block", "d-lg-none", "d-xl-none"], ["class", "cx-review-cart-item", 4, "ngIf"], [1, "cx-review-cart-item"], [3, "promotions"]],
  template: function CheckoutReviewSubmitComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 3)(1, "h2", 4);
      \u0275\u0275text(2);
      \u0275\u0275pipe(3, "cxTranslate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "div", 5);
      \u0275\u0275template(5, CheckoutReviewSubmitComponent_ng_container_5_Template, 5, 2, "ng-container", 6);
      \u0275\u0275pipe(6, "async");
      \u0275\u0275elementEnd();
      \u0275\u0275template(7, CheckoutReviewSubmitComponent_ng_template_7_Template, 2, 3, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(9, CheckoutReviewSubmitComponent_ng_template_9_Template, 11, 18, "ng-template", null, 1, \u0275\u0275templateRefExtractor)(11, CheckoutReviewSubmitComponent_ng_template_11_Template, 9, 12, "ng-template", null, 2, \u0275\u0275templateRefExtractor)(13, CheckoutReviewSubmitComponent_ng_container_13_Template, 9, 13, "ng-container", 6);
      \u0275\u0275pipe(14, "async");
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      let tmp_4_0;
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 3, "checkoutReview.review"), " ");
      \u0275\u0275advance(3);
      \u0275\u0275property("ngIf", (tmp_4_0 = \u0275\u0275pipeBind1(6, 5, ctx.steps$)) == null ? null : tmp_4_0.slice(0, -1));
      \u0275\u0275advance(8);
      \u0275\u0275property("ngIf", \u0275\u0275pipeBind1(14, 7, ctx.cart$));
    }
  },
  dependencies: [NgForOf, NgIf, NgTemplateOutlet, NgSwitch, NgSwitchCase, CardComponent, RouterLink, PromotionsComponent, IconComponent, OutletDirective, AsyncPipe, TranslatePipe, UrlPipe],
  encapsulation: 2,
  changeDetection: 0
});
var CheckoutReviewSubmitComponent = _CheckoutReviewSubmitComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CheckoutReviewSubmitComponent, [{
    type: Component,
    args: [{
      selector: "cx-review-submit",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: `<div class="cx-review">
  <!-- TITLE -->
  <h2 class="cx-review-title d-none d-lg-block d-xl-block">
    {{ 'checkoutReview.review' | cxTranslate }}
  </h2>

  <div class="cx-review-summary row">
    <ng-container *ngIf="(steps$ | async)?.slice(0, -1) as steps">
      <div class="col-md-12 col-lg-6 col-xl-6 cx-review-payment-col">
        <ng-container *ngFor="let step of paymentSteps(steps)">
          <ng-container [ngSwitch]="step.type[0]">
            <ng-container *ngSwitchCase="checkoutStepTypePaymentDetails">
              <ng-container *ngTemplateOutlet="paymentMethod"></ng-container>
            </ng-container>
          </ng-container>
        </ng-container>
      </div>
      <div class="col-md-12 col-lg-6 col-xl-6 cx-review-shipping-col">
        <ng-container *ngFor="let step of deliverySteps(steps)">
          <ng-container [ngSwitch]="step.type[0]">
            <ng-container *ngSwitchCase="checkoutStepTypeDeliveryAddress">
              <ng-container *ngTemplateOutlet="deliveryAddress"></ng-container>
            </ng-container>
            <ng-container *ngSwitchCase="checkoutStepTypeDeliveryMode">
              <ng-container *ngTemplateOutlet="deliveryMode"></ng-container>
            </ng-container>
          </ng-container>
        </ng-container>
      </div>
    </ng-container>
  </div>

  <!-- DELIVERY ADDRESS SECTION -->
  <ng-template #deliveryAddress>
    <div
      *ngIf="deliveryAddress$ | async as deliveryAddress"
      class="cx-review-summary-card cx-review-card-address"
    >
      <cx-card
        [content]="getDeliveryAddressCard(deliveryAddress) | async"
      ></cx-card>
      <div class="cx-review-summary-edit-step">
        <a
          [attr.aria-label]="
            'checkoutReview.editDeliveryAddressDetails' | cxTranslate
          "
          [routerLink]="
            {
              cxRoute: getCheckoutStepUrl(checkoutStepTypeDeliveryAddress)
            } | cxUrl
          "
          ><cx-icon aria-hidden="true" [type]="iconTypes.PENCIL"></cx-icon
        ></a>
      </div>
    </div>
  </ng-template>

  <!-- DELIVERY MODE SECTION -->
  <ng-template #deliveryMode>
    <div class="cx-review-summary-card cx-review-card-shipping">
      <div>
        <cx-card
          *ngIf="deliveryMode$ | async as deliveryMode"
          [content]="getDeliveryModeCard(deliveryMode) | async"
        >
        </cx-card>
        <ng-template
          [cxOutlet]="cartOutlets.DELIVERY_MODE"
          [cxOutletContext]="{
            item: cart$ | async,
            readonly: true
          }"
        >
        </ng-template>
      </div>

      <div class="cx-review-summary-edit-step">
        <a
          [attr.aria-label]="'checkoutReview.editDeliveryMode' | cxTranslate"
          [routerLink]="
            { cxRoute: getCheckoutStepUrl(checkoutStepTypeDeliveryMode) }
              | cxUrl
          "
        >
          <cx-icon aria-hidden="true" [type]="iconTypes.PENCIL"></cx-icon>
        </a>
      </div>
    </div>
  </ng-template>

  <!-- PAYMENT METHOD SECTION -->
  <ng-template #paymentMethod>
    <div class="cx-review-summary-card cx-review-card-payment">
      <div>
        <cx-card
          *ngIf="paymentDetails$ | async as paymentDetails"
          [content]="getPaymentMethodCard(paymentDetails) | async"
        ></cx-card>
      </div>
      <div class="cx-review-summary-edit-step">
        <a
          [attr.aria-label]="'checkoutReview.editPaymentDetails' | cxTranslate"
          [routerLink]="
            { cxRoute: getCheckoutStepUrl(checkoutStepTypePaymentDetails) }
              | cxUrl
          "
        >
          <cx-icon aria-hidden="true" [type]="iconTypes.PENCIL"></cx-icon>
        </a>
      </div>
    </div>
  </ng-template>

  <!-- CART ITEM SECTION -->
  <ng-container *ngIf="cart$ | async as cart">
    <div class="cx-review-cart-total d-none d-lg-block d-xl-block">
      {{
        'cartItems.cartTotal'
          | cxTranslate: { count: cart.deliveryItemsQuantity }
      }}:
      {{ cart.totalPrice?.formattedValue }}
    </div>
    <div class="cx-review-cart-heading d-block d-lg-none d-xl-none">
      {{ 'checkoutReview.placeOrder' | cxTranslate }}
    </div>
    <div class="cx-review-cart-item" *ngIf="entries$ | async as entries">
      <cx-promotions
        [promotions]="
          (cart.appliedOrderPromotions || []).concat(
            cart.potentialOrderPromotions || []
          )
        "
      ></cx-promotions>

      <ng-template
        [cxOutlet]="cartOutlets.CART_ITEM_LIST"
        [cxOutletContext]="{
          items: entries,
          readonly: true,
          promotionLocation: promotionLocation
        }"
      >
      </ng-template>
    </div>
  </ng-container>
</div>
`
    }]
  }], () => [{
    type: CheckoutDeliveryAddressFacade
  }, {
    type: CheckoutPaymentFacade
  }, {
    type: ActiveCartFacade
  }, {
    type: TranslationService
  }, {
    type: CheckoutStepService
  }, {
    type: CheckoutDeliveryModesFacade
  }], null);
})();
var _CheckoutReviewSubmitModule = class _CheckoutReviewSubmitModule {
};
_CheckoutReviewSubmitModule.\u0275fac = function CheckoutReviewSubmitModule_Factory(t) {
  return new (t || _CheckoutReviewSubmitModule)();
};
_CheckoutReviewSubmitModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
  type: _CheckoutReviewSubmitModule
});
_CheckoutReviewSubmitModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
  providers: [provideDefaultConfig({
    cmsComponents: {
      CheckoutReviewOrder: {
        component: CheckoutReviewSubmitComponent,
        guards: [CheckoutAuthGuard, CartNotEmptyGuard]
      }
    }
  })],
  imports: [CommonModule, CardModule, I18nModule, UrlModule, RouterModule, PromotionsModule, IconModule, OutletModule]
});
var CheckoutReviewSubmitModule = _CheckoutReviewSubmitModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CheckoutReviewSubmitModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, CardModule, I18nModule, UrlModule, RouterModule, PromotionsModule, IconModule, OutletModule],
      providers: [provideDefaultConfig({
        cmsComponents: {
          CheckoutReviewOrder: {
            component: CheckoutReviewSubmitComponent,
            guards: [CheckoutAuthGuard, CartNotEmptyGuard]
          }
        }
      })],
      declarations: [CheckoutReviewSubmitComponent],
      exports: [CheckoutReviewSubmitComponent]
    }]
  }], null, null);
})();
var _CheckoutReviewOverviewComponent = class _CheckoutReviewOverviewComponent {
  constructor(activeCartFacade) {
    this.activeCartFacade = activeCartFacade;
  }
  get cart$() {
    return this.activeCartFacade.getActive();
  }
};
_CheckoutReviewOverviewComponent.\u0275fac = function CheckoutReviewOverviewComponent_Factory(t) {
  return new (t || _CheckoutReviewOverviewComponent)(\u0275\u0275directiveInject(ActiveCartFacade));
};
_CheckoutReviewOverviewComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
  type: _CheckoutReviewOverviewComponent,
  selectors: [["cx-checkout-review-overview"]],
  decls: 2,
  vars: 3,
  consts: [[4, "ngIf"], [1, "cx-review-cart-total", "d-none", "d-lg-block", "d-xl-block"], [3, "promotions"]],
  template: function CheckoutReviewOverviewComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275template(0, CheckoutReviewOverviewComponent_ng_container_0_Template, 5, 10, "ng-container", 0);
      \u0275\u0275pipe(1, "async");
    }
    if (rf & 2) {
      \u0275\u0275property("ngIf", \u0275\u0275pipeBind1(1, 1, ctx.cart$));
    }
  },
  dependencies: [NgIf, PromotionsComponent, AsyncPipe, TranslatePipe],
  encapsulation: 2,
  changeDetection: 0
});
var CheckoutReviewOverviewComponent = _CheckoutReviewOverviewComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CheckoutReviewOverviewComponent, [{
    type: Component,
    args: [{
      selector: "cx-checkout-review-overview",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: `<ng-container *ngIf="cart$ | async as cart">
  <div class="cx-review-cart-total d-none d-lg-block d-xl-block">
    {{ 'cartItems.cartTotal' | cxTranslate: { count: cart.totalUnitCount } }}:
    {{ cart.totalPrice?.formattedValue }}
  </div>
  <cx-promotions
    [promotions]="
      (cart.appliedOrderPromotions || []).concat(
        cart.potentialOrderPromotions || []
      )
    "
  ></cx-promotions>
</ng-container>
`
    }]
  }], () => [{
    type: ActiveCartFacade
  }], null);
})();
var _CheckoutReviewOverviewModule = class _CheckoutReviewOverviewModule {
};
_CheckoutReviewOverviewModule.\u0275fac = function CheckoutReviewOverviewModule_Factory(t) {
  return new (t || _CheckoutReviewOverviewModule)();
};
_CheckoutReviewOverviewModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
  type: _CheckoutReviewOverviewModule
});
_CheckoutReviewOverviewModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
  providers: [provideDefaultConfig({
    cmsComponents: {
      CheckoutReviewOverview: {
        component: CheckoutReviewOverviewComponent,
        guards: [CheckoutAuthGuard, CartNotEmptyGuard]
      }
    }
  })],
  imports: [CommonModule, PromotionsModule, I18nModule]
});
var CheckoutReviewOverviewModule = _CheckoutReviewOverviewModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CheckoutReviewOverviewModule, [{
    type: NgModule,
    args: [{
      declarations: [CheckoutReviewOverviewComponent],
      imports: [CommonModule, PromotionsModule, I18nModule],
      providers: [provideDefaultConfig({
        cmsComponents: {
          CheckoutReviewOverview: {
            component: CheckoutReviewOverviewComponent,
            guards: [CheckoutAuthGuard, CartNotEmptyGuard]
          }
        }
      })]
    }]
  }], null, null);
})();
var _CheckoutReviewPaymentComponent = class _CheckoutReviewPaymentComponent {
  constructor(checkoutStepService, checkoutPaymentFacade, translationService) {
    this.checkoutStepService = checkoutStepService;
    this.checkoutPaymentFacade = checkoutPaymentFacade;
    this.translationService = translationService;
    this.iconTypes = ICON_TYPE;
    this.paymentDetailsStepRoute = this.checkoutStepService.getCheckoutStepRoute(
      "paymentDetails"
      /* CheckoutStepType.PAYMENT_DETAILS */
    );
    this.paymentDetails$ = this.checkoutPaymentFacade.getPaymentDetailsState().pipe(filter((state) => !state.loading && !state.error), map((state) => state.data));
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
};
_CheckoutReviewPaymentComponent.\u0275fac = function CheckoutReviewPaymentComponent_Factory(t) {
  return new (t || _CheckoutReviewPaymentComponent)(\u0275\u0275directiveInject(CheckoutStepService), \u0275\u0275directiveInject(CheckoutPaymentFacade), \u0275\u0275directiveInject(TranslationService));
};
_CheckoutReviewPaymentComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
  type: _CheckoutReviewPaymentComponent,
  selectors: [["cx-checkout-review-payment"]],
  decls: 2,
  vars: 3,
  consts: [["class", "cx-review-summary", 4, "ngIf"], [1, "cx-review-summary"], [1, "cx-review-summary-card", "cx-review-summary-payment-card"], [3, "content"], [1, "cx-review-summary-edit-step"], [3, "routerLink"], ["aria-hidden", "true", 3, "type"]],
  template: function CheckoutReviewPaymentComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275template(0, CheckoutReviewPaymentComponent_div_0_Template, 19, 24, "div", 0);
      \u0275\u0275pipe(1, "async");
    }
    if (rf & 2) {
      \u0275\u0275property("ngIf", \u0275\u0275pipeBind1(1, 1, ctx.paymentDetails$));
    }
  },
  dependencies: [NgIf, CardComponent, RouterLink, IconComponent, AsyncPipe, TranslatePipe, UrlPipe],
  encapsulation: 2,
  changeDetection: 0
});
var CheckoutReviewPaymentComponent = _CheckoutReviewPaymentComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CheckoutReviewPaymentComponent, [{
    type: Component,
    args: [{
      selector: "cx-checkout-review-payment",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: `<div
  class="cx-review-summary"
  *ngIf="paymentDetails$ | async as paymentDetails"
>
  <div class="cx-review-summary-card cx-review-summary-payment-card">
    <div>
      <cx-card
        [content]="getBillingAddressCard(paymentDetails) | async"
      ></cx-card>
    </div>
    <div class="cx-review-summary-edit-step">
      <a
        [attr.aria-label]="'checkoutReview.editPaymentDetails' | cxTranslate"
        [routerLink]="{ cxRoute: paymentDetailsStepRoute } | cxUrl"
      >
        <cx-icon aria-hidden="true" [type]="iconTypes.PENCIL"></cx-icon>
      </a>
    </div>
  </div>

  <div class="cx-review-summary-card cx-review-summary-payment-card">
    <div>
      <cx-card
        [content]="getPaymentMethodCard(paymentDetails) | async"
      ></cx-card>
    </div>
    <div class="cx-review-summary-edit-step">
      <a
        [attr.aria-label]="'checkoutReview.editPaymentDetails' | cxTranslate"
        [routerLink]="{ cxRoute: paymentDetailsStepRoute } | cxUrl"
      >
        <cx-icon aria-hidden="true" [type]="iconTypes.PENCIL"></cx-icon>
      </a>
    </div>
  </div>
</div>
`
    }]
  }], () => [{
    type: CheckoutStepService
  }, {
    type: CheckoutPaymentFacade
  }, {
    type: TranslationService
  }], null);
})();
var _CheckoutReviewPaymentModule = class _CheckoutReviewPaymentModule {
};
_CheckoutReviewPaymentModule.\u0275fac = function CheckoutReviewPaymentModule_Factory(t) {
  return new (t || _CheckoutReviewPaymentModule)();
};
_CheckoutReviewPaymentModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
  type: _CheckoutReviewPaymentModule
});
_CheckoutReviewPaymentModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
  providers: [provideDefaultConfig({
    cmsComponents: {
      CheckoutReviewPayment: {
        component: CheckoutReviewPaymentComponent,
        guards: [CheckoutAuthGuard, CartNotEmptyGuard]
      }
    }
  })],
  imports: [CommonModule, CardModule, I18nModule, UrlModule, RouterModule, IconModule]
});
var CheckoutReviewPaymentModule = _CheckoutReviewPaymentModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CheckoutReviewPaymentModule, [{
    type: NgModule,
    args: [{
      declarations: [CheckoutReviewPaymentComponent],
      exports: [CheckoutReviewPaymentComponent],
      imports: [CommonModule, CardModule, I18nModule, UrlModule, RouterModule, IconModule],
      providers: [provideDefaultConfig({
        cmsComponents: {
          CheckoutReviewPayment: {
            component: CheckoutReviewPaymentComponent,
            guards: [CheckoutAuthGuard, CartNotEmptyGuard]
          }
        }
      })]
    }]
  }], null, null);
})();
var _CheckoutReviewShippingComponent = class _CheckoutReviewShippingComponent {
  constructor(activeCartFacade, checkoutDeliveryModesFacade, checkoutDeliveryAddressFacade, translationService, checkoutStepService) {
    this.activeCartFacade = activeCartFacade;
    this.checkoutDeliveryModesFacade = checkoutDeliveryModesFacade;
    this.checkoutDeliveryAddressFacade = checkoutDeliveryAddressFacade;
    this.translationService = translationService;
    this.checkoutStepService = checkoutStepService;
    this.cartOutlets = CartOutlets;
    this.iconTypes = ICON_TYPE;
    this.deliveryAddressStepRoute = this.checkoutStepService.getCheckoutStepRoute(
      "deliveryAddress"
      /* CheckoutStepType.DELIVERY_ADDRESS */
    );
    this.deliveryModeStepRoute = this.checkoutStepService.getCheckoutStepRoute(
      "deliveryMode"
      /* CheckoutStepType.DELIVERY_MODE */
    );
    this.entries$ = this.activeCartFacade.getDeliveryEntries();
    this.deliveryAddress$ = this.checkoutDeliveryAddressFacade.getDeliveryAddressState().pipe(filter((state) => !state.loading && !state.error), map((state) => state.data));
    this.deliveryMode$ = this.checkoutDeliveryModesFacade.getSelectedDeliveryModeState().pipe(filter((state) => !state.loading && !state.error), map((state) => state.data));
  }
  getDeliveryAddressCard(deliveryAddress, countryName) {
    return combineLatest([this.translationService.translate("addressCard.shipTo"), this.translationService.translate("addressCard.phoneNumber"), this.translationService.translate("addressCard.mobileNumber")]).pipe(map(([textTitle, textPhone, textMobile]) => deliveryAddressCard(textTitle, textPhone, textMobile, deliveryAddress, countryName)));
  }
  getDeliveryModeCard(deliveryMode) {
    return combineLatest([this.translationService.translate("checkoutMode.deliveryMethod")]).pipe(map(([textTitle]) => deliveryModeCard(textTitle, deliveryMode)));
  }
};
_CheckoutReviewShippingComponent.\u0275fac = function CheckoutReviewShippingComponent_Factory(t) {
  return new (t || _CheckoutReviewShippingComponent)(\u0275\u0275directiveInject(ActiveCartFacade), \u0275\u0275directiveInject(CheckoutDeliveryModesFacade), \u0275\u0275directiveInject(CheckoutDeliveryAddressFacade), \u0275\u0275directiveInject(TranslationService), \u0275\u0275directiveInject(CheckoutStepService));
};
_CheckoutReviewShippingComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
  type: _CheckoutReviewShippingComponent,
  selectors: [["cx-checkout-review-shipping"]],
  decls: 2,
  vars: 3,
  consts: [[4, "ngIf"], [1, "cx-review-header"], [1, "cx-review-summary", "cx-review-shipping-summary"], [1, "cx-review-summary-card-container"], ["class", "cx-review-summary-card cx-review-card-address", 4, "ngIf"], [1, "cx-review-summary-card", "cx-review-card-address"], [3, "content", 4, "ngIf"], [1, "cx-review-summary-edit-step"], [3, "routerLink"], ["aria-hidden", "true", 3, "type"], [1, "cx-review-cart-item"], [3, "cxOutlet", "cxOutletContext"], [3, "content"]],
  template: function CheckoutReviewShippingComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275template(0, CheckoutReviewShippingComponent_ng_container_0_Template, 2, 1, "ng-container", 0);
      \u0275\u0275pipe(1, "async");
    }
    if (rf & 2) {
      \u0275\u0275property("ngIf", \u0275\u0275pipeBind1(1, 1, ctx.entries$));
    }
  },
  dependencies: [NgIf, CardComponent, RouterLink, IconComponent, OutletDirective, AsyncPipe, TranslatePipe, UrlPipe],
  encapsulation: 2,
  changeDetection: 0
});
var CheckoutReviewShippingComponent = _CheckoutReviewShippingComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CheckoutReviewShippingComponent, [{
    type: Component,
    args: [{
      selector: "cx-checkout-review-shipping",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: `<ng-container *ngIf="entries$ | async as entries">
  <ng-container *ngIf="entries.length > 0">
    <h2 class="cx-review-header">
      {{ 'checkoutMode.deliveryEntries' | cxTranslate }}
    </h2>

    <div class="cx-review-summary cx-review-shipping-summary">
      <!-- DELIVERY ADDRESS SECTION -->
      <div class="cx-review-summary-card-container">
        <div
          *ngIf="deliveryAddress$ | async as deliveryAddress"
          class="cx-review-summary-card cx-review-card-address"
        >
          <cx-card
            [content]="getDeliveryAddressCard(deliveryAddress) | async"
          ></cx-card>
          <div class="cx-review-summary-edit-step">
            <a
              [attr.aria-label]="
                'checkoutReview.editDeliveryAddressDetails' | cxTranslate
              "
              [routerLink]="
                {
                  cxRoute: deliveryAddressStepRoute
                } | cxUrl
              "
              ><cx-icon aria-hidden="true" [type]="iconTypes.PENCIL"></cx-icon
            ></a>
          </div>
        </div>
      </div>

      <!-- DELIVERY MODE SECTION -->
      <div class="cx-review-summary-card-container">
        <div class="cx-review-summary-card cx-review-card-address">
          <cx-card
            *ngIf="deliveryMode$ | async as deliveryMode"
            [content]="getDeliveryModeCard(deliveryMode) | async"
          ></cx-card>
          <div class="cx-review-summary-edit-step">
            <a
              [attr.aria-label]="
                'checkoutReview.editDeliveryMode' | cxTranslate
              "
              [routerLink]="{ cxRoute: deliveryModeStepRoute } | cxUrl"
            >
              <cx-icon aria-hidden="true" [type]="iconTypes.PENCIL"></cx-icon>
            </a>
          </div>
        </div>
      </div>
    </div>

    <!-- CART ITEM SECTION -->
    <div class="cx-review-cart-item">
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
</ng-container>
`
    }]
  }], () => [{
    type: ActiveCartFacade
  }, {
    type: CheckoutDeliveryModesFacade
  }, {
    type: CheckoutDeliveryAddressFacade
  }, {
    type: TranslationService
  }, {
    type: CheckoutStepService
  }], null);
})();
var _CheckoutReviewShippingModule = class _CheckoutReviewShippingModule {
};
_CheckoutReviewShippingModule.\u0275fac = function CheckoutReviewShippingModule_Factory(t) {
  return new (t || _CheckoutReviewShippingModule)();
};
_CheckoutReviewShippingModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
  type: _CheckoutReviewShippingModule
});
_CheckoutReviewShippingModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
  providers: [provideDefaultConfig({
    cmsComponents: {
      CheckoutReviewShipping: {
        component: CheckoutReviewShippingComponent,
        guards: [CheckoutAuthGuard, CartNotEmptyGuard]
      }
    }
  })],
  imports: [CommonModule, I18nModule, CardModule, UrlModule, RouterModule, IconModule, OutletModule]
});
var CheckoutReviewShippingModule = _CheckoutReviewShippingModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CheckoutReviewShippingModule, [{
    type: NgModule,
    args: [{
      declarations: [CheckoutReviewShippingComponent],
      exports: [CheckoutReviewShippingComponent],
      imports: [CommonModule, I18nModule, CardModule, UrlModule, RouterModule, IconModule, OutletModule],
      providers: [provideDefaultConfig({
        cmsComponents: {
          CheckoutReviewShipping: {
            component: CheckoutReviewShippingComponent,
            guards: [CheckoutAuthGuard, CartNotEmptyGuard]
          }
        }
      })]
    }]
  }], null, null);
})();
var _CheckoutComponentsModule = class _CheckoutComponentsModule {
};
_CheckoutComponentsModule.\u0275fac = function CheckoutComponentsModule_Factory(t) {
  return new (t || _CheckoutComponentsModule)();
};
_CheckoutComponentsModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
  type: _CheckoutComponentsModule
});
_CheckoutComponentsModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
  imports: [CheckoutOrchestratorModule, CheckoutOrderSummaryModule, CheckoutProgressModule, CheckoutProgressMobileTopModule, CheckoutProgressMobileBottomModule, CheckoutDeliveryModeModule, CheckoutPaymentMethodModule, CheckoutPlaceOrderModule, CheckoutReviewSubmitModule, CheckoutReviewPaymentModule, CheckoutReviewShippingModule, CheckoutReviewOverviewModule, CheckoutDeliveryAddressModule, CheckoutLoginModule]
});
var CheckoutComponentsModule = _CheckoutComponentsModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CheckoutComponentsModule, [{
    type: NgModule,
    args: [{
      imports: [CheckoutOrchestratorModule, CheckoutOrderSummaryModule, CheckoutProgressModule, CheckoutProgressMobileTopModule, CheckoutProgressMobileBottomModule, CheckoutDeliveryModeModule, CheckoutPaymentMethodModule, CheckoutPlaceOrderModule, CheckoutReviewSubmitModule, CheckoutReviewPaymentModule, CheckoutReviewShippingModule, CheckoutReviewOverviewModule, CheckoutDeliveryAddressModule, CheckoutLoginModule]
    }]
  }], null, null);
})();

// node_modules/@spartacus/checkout/fesm2022/spartacus-checkout-base-core.mjs
var CheckoutDeliveryAddressAdapter = class {
};
var _CheckoutDeliveryAddressConnector = class _CheckoutDeliveryAddressConnector {
  constructor(adapter) {
    this.adapter = adapter;
  }
  createAddress(userId, cartId, address) {
    return this.adapter.createAddress(userId, cartId, address);
  }
  setAddress(userId, cartId, addressId) {
    return this.adapter.setAddress(userId, cartId, addressId);
  }
  clearCheckoutDeliveryAddress(userId, cartId) {
    return this.adapter.clearCheckoutDeliveryAddress(userId, cartId);
  }
};
_CheckoutDeliveryAddressConnector.\u0275fac = function CheckoutDeliveryAddressConnector_Factory(t) {
  return new (t || _CheckoutDeliveryAddressConnector)(\u0275\u0275inject(CheckoutDeliveryAddressAdapter));
};
_CheckoutDeliveryAddressConnector.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
  token: _CheckoutDeliveryAddressConnector,
  factory: _CheckoutDeliveryAddressConnector.\u0275fac
});
var CheckoutDeliveryAddressConnector = _CheckoutDeliveryAddressConnector;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CheckoutDeliveryAddressConnector, [{
    type: Injectable
  }], () => [{
    type: CheckoutDeliveryAddressAdapter
  }], null);
})();
var CheckoutDeliveryModesAdapter = class {
};
var _CheckoutDeliveryModesConnector = class _CheckoutDeliveryModesConnector {
  constructor(adapter) {
    this.adapter = adapter;
  }
  setMode(userId, cartId, deliveryModeId) {
    return this.adapter.setMode(userId, cartId, deliveryModeId);
  }
  getSupportedModes(userId, cartId) {
    return this.adapter.getSupportedModes(userId, cartId);
  }
  clearCheckoutDeliveryMode(userId, cartId) {
    return this.adapter.clearCheckoutDeliveryMode(userId, cartId);
  }
};
_CheckoutDeliveryModesConnector.\u0275fac = function CheckoutDeliveryModesConnector_Factory(t) {
  return new (t || _CheckoutDeliveryModesConnector)(\u0275\u0275inject(CheckoutDeliveryModesAdapter));
};
_CheckoutDeliveryModesConnector.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
  token: _CheckoutDeliveryModesConnector,
  factory: _CheckoutDeliveryModesConnector.\u0275fac
});
var CheckoutDeliveryModesConnector = _CheckoutDeliveryModesConnector;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CheckoutDeliveryModesConnector, [{
    type: Injectable
  }], () => [{
    type: CheckoutDeliveryModesAdapter
  }], null);
})();
var CheckoutPaymentAdapter = class {
};
var _CheckoutPaymentConnector = class _CheckoutPaymentConnector {
  constructor(adapter) {
    this.adapter = adapter;
  }
  createPaymentDetails(userId, cartId, paymentDetails) {
    return this.adapter.createPaymentDetails(userId, cartId, paymentDetails);
  }
  setPaymentDetails(userId, cartId, paymentDetailsId) {
    return this.adapter.setPaymentDetails(userId, cartId, paymentDetailsId);
  }
  getPaymentCardTypes() {
    return this.adapter.getPaymentCardTypes();
  }
};
_CheckoutPaymentConnector.\u0275fac = function CheckoutPaymentConnector_Factory(t) {
  return new (t || _CheckoutPaymentConnector)(\u0275\u0275inject(CheckoutPaymentAdapter));
};
_CheckoutPaymentConnector.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
  token: _CheckoutPaymentConnector,
  factory: _CheckoutPaymentConnector.\u0275fac
});
var CheckoutPaymentConnector = _CheckoutPaymentConnector;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CheckoutPaymentConnector, [{
    type: Injectable
  }], () => [{
    type: CheckoutPaymentAdapter
  }], null);
})();
var CheckoutAdapter = class {
};
var _CheckoutConnector = class _CheckoutConnector {
  constructor(adapter) {
    this.adapter = adapter;
  }
  getCheckoutDetails(userId, cartId) {
    return this.adapter.getCheckoutDetails(userId, cartId);
  }
};
_CheckoutConnector.\u0275fac = function CheckoutConnector_Factory(t) {
  return new (t || _CheckoutConnector)(\u0275\u0275inject(CheckoutAdapter));
};
_CheckoutConnector.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
  token: _CheckoutConnector,
  factory: _CheckoutConnector.\u0275fac
});
var CheckoutConnector = _CheckoutConnector;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CheckoutConnector, [{
    type: Injectable
  }], () => [{
    type: CheckoutAdapter
  }], null);
})();
var _CheckoutDeliveryAddressService = class _CheckoutDeliveryAddressService {
  constructor(activeCartFacade, userIdService, eventService, commandService, checkoutDeliveryAddressConnector, checkoutQueryFacade) {
    this.activeCartFacade = activeCartFacade;
    this.userIdService = userIdService;
    this.eventService = eventService;
    this.commandService = commandService;
    this.checkoutDeliveryAddressConnector = checkoutDeliveryAddressConnector;
    this.checkoutQueryFacade = checkoutQueryFacade;
    this.createDeliveryAddressCommand = this.commandService.create((payload) => this.checkoutPreconditions().pipe(switchMap(([userId, cartId]) => {
      return this.checkoutDeliveryAddressConnector.createAddress(userId, cartId, payload).pipe(map((address) => {
        address.titleCode = payload.titleCode;
        if (payload.region?.isocodeShort) {
          address.region = __spreadProps(__spreadValues({}, address.region), {
            isocodeShort: payload.region.isocodeShort
          });
        }
        return address;
      }), tap((address) => this.eventService.dispatch({
        userId,
        cartId,
        address
      }, CheckoutDeliveryAddressCreatedEvent)));
    })), {
      strategy: CommandStrategy.CancelPrevious
    });
    this.setDeliveryAddressCommand = this.commandService.create((address) => this.checkoutPreconditions().pipe(switchMap(([userId, cartId]) => {
      const addressId = address.id;
      if (!addressId) {
        throw new Error("Checkout conditions not met");
      }
      return this.checkoutDeliveryAddressConnector.setAddress(userId, cartId, addressId).pipe(tap(() => {
        this.eventService.dispatch({
          userId,
          cartId,
          address
        }, CheckoutDeliveryAddressSetEvent);
      }));
    })), {
      strategy: CommandStrategy.CancelPrevious
    });
    this.clearDeliveryAddressCommand = this.commandService.create(() => this.checkoutPreconditions().pipe(switchMap(([userId, cartId]) => this.checkoutDeliveryAddressConnector.clearCheckoutDeliveryAddress(userId, cartId).pipe(tap(() => {
      this.eventService.dispatch({
        userId,
        cartId
      }, CheckoutDeliveryAddressClearedEvent);
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
  getDeliveryAddressState() {
    return this.checkoutQueryFacade.getCheckoutDetailsState().pipe(map((state) => __spreadProps(__spreadValues({}, state), {
      data: state.data?.deliveryAddress
    })));
  }
  createAndSetAddress(address) {
    return this.createDeliveryAddressCommand.execute(address);
  }
  setDeliveryAddress(address) {
    return this.setDeliveryAddressCommand.execute(address);
  }
  clearCheckoutDeliveryAddress() {
    return this.clearDeliveryAddressCommand.execute();
  }
};
_CheckoutDeliveryAddressService.\u0275fac = function CheckoutDeliveryAddressService_Factory(t) {
  return new (t || _CheckoutDeliveryAddressService)(\u0275\u0275inject(ActiveCartFacade), \u0275\u0275inject(UserIdService), \u0275\u0275inject(EventService), \u0275\u0275inject(CommandService), \u0275\u0275inject(CheckoutDeliveryAddressConnector), \u0275\u0275inject(CheckoutQueryFacade));
};
_CheckoutDeliveryAddressService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
  token: _CheckoutDeliveryAddressService,
  factory: _CheckoutDeliveryAddressService.\u0275fac
});
var CheckoutDeliveryAddressService = _CheckoutDeliveryAddressService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CheckoutDeliveryAddressService, [{
    type: Injectable
  }], () => [{
    type: ActiveCartFacade
  }, {
    type: UserIdService
  }, {
    type: EventService
  }, {
    type: CommandService
  }, {
    type: CheckoutDeliveryAddressConnector
  }, {
    type: CheckoutQueryFacade
  }], null);
})();
var _CheckoutDeliveryModesService = class _CheckoutDeliveryModesService {
  /**
   * Returns the reload events for the supportedDeliveryModes query
   */
  getCheckoutSupportedDeliveryModesQueryReloadEvents() {
    return [CheckoutSupportedDeliveryModesQueryReloadEvent];
  }
  /**
   * Return the reset events for the supportedDeliveryModes query
   */
  getCheckoutSupportedDeliveryModesQueryResetEvents() {
    return [CheckoutSupportedDeliveryModesQueryResetEvent];
  }
  constructor(activeCartFacade, userIdService, eventService, queryService, commandService, checkoutDeliveryModesConnector, checkoutQueryFacade) {
    this.activeCartFacade = activeCartFacade;
    this.userIdService = userIdService;
    this.eventService = eventService;
    this.queryService = queryService;
    this.commandService = commandService;
    this.checkoutDeliveryModesConnector = checkoutDeliveryModesConnector;
    this.checkoutQueryFacade = checkoutQueryFacade;
    this.supportedDeliveryModesQuery = this.queryService.create(() => this.checkoutPreconditions().pipe(switchMap(([userId, cartId]) => this.checkoutDeliveryModesConnector.getSupportedModes(userId, cartId))), {
      reloadOn: this.getCheckoutSupportedDeliveryModesQueryReloadEvents(),
      resetOn: this.getCheckoutSupportedDeliveryModesQueryResetEvents()
    });
    this.setDeliveryModeCommand = this.commandService.create((deliveryModeCode) => this.checkoutPreconditions().pipe(switchMap(([userId, cartId]) => this.checkoutDeliveryModesConnector.setMode(userId, cartId, deliveryModeCode).pipe(tap(() => {
      this.eventService.dispatch({
        userId,
        cartId,
        cartCode: cartId,
        deliveryModeCode
      }, CheckoutDeliveryModeSetEvent);
    })))), {
      strategy: CommandStrategy.CancelPrevious
    });
    this.clearDeliveryModeCommand = this.commandService.create(() => this.checkoutPreconditions().pipe(switchMap(([userId, cartId]) => this.checkoutDeliveryModesConnector.clearCheckoutDeliveryMode(userId, cartId).pipe(tap({
      next: () => {
        this.eventService.dispatch({
          userId,
          cartId,
          /**
           * As we know the cart is not anonymous (precondition checked),
           * we can safely use the cartId, which is actually the cart.code.
           */
          cartCode: cartId
        }, CheckoutDeliveryModeClearedEvent);
      },
      error: () => {
        this.eventService.dispatch({
          userId,
          cartId,
          /**
           * As we know the cart is not anonymous (precondition checked),
           * we can safely use the cartId, which is actually the cart.code.
           */
          cartCode: cartId
        }, CheckoutDeliveryModeClearedErrorEvent);
      }
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
  getSupportedDeliveryModesState() {
    return this.supportedDeliveryModesQuery.getState();
  }
  getSupportedDeliveryModes() {
    return this.getSupportedDeliveryModesState().pipe(filter((state) => !state.loading), map((state) => state.data ?? []));
  }
  getSelectedDeliveryModeState() {
    return this.checkoutQueryFacade.getCheckoutDetailsState().pipe(map((state) => __spreadProps(__spreadValues({}, state), {
      data: state.data?.deliveryMode
    })));
  }
  setDeliveryMode(mode) {
    return this.setDeliveryModeCommand.execute(mode);
  }
  clearCheckoutDeliveryMode() {
    return this.clearDeliveryModeCommand.execute();
  }
};
_CheckoutDeliveryModesService.\u0275fac = function CheckoutDeliveryModesService_Factory(t) {
  return new (t || _CheckoutDeliveryModesService)(\u0275\u0275inject(ActiveCartFacade), \u0275\u0275inject(UserIdService), \u0275\u0275inject(EventService), \u0275\u0275inject(QueryService), \u0275\u0275inject(CommandService), \u0275\u0275inject(CheckoutDeliveryModesConnector), \u0275\u0275inject(CheckoutQueryFacade));
};
_CheckoutDeliveryModesService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
  token: _CheckoutDeliveryModesService,
  factory: _CheckoutDeliveryModesService.\u0275fac
});
var CheckoutDeliveryModesService = _CheckoutDeliveryModesService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CheckoutDeliveryModesService, [{
    type: Injectable
  }], () => [{
    type: ActiveCartFacade
  }, {
    type: UserIdService
  }, {
    type: EventService
  }, {
    type: QueryService
  }, {
    type: CommandService
  }, {
    type: CheckoutDeliveryModesConnector
  }, {
    type: CheckoutQueryFacade
  }], null);
})();
var _CheckoutPaymentService = class _CheckoutPaymentService {
  /**
   * Returns the reload events for the cardTypes query
   */
  getCheckoutPaymentCardTypesQueryReloadEvents() {
    return [CheckoutPaymentCardTypesQueryReloadEvent];
  }
  /**
   * Returns the reset events for the cardTypes query
   */
  getCheckoutPaymentCardTypesQueryResetEvents() {
    return [CheckoutPaymentCardTypesQueryResetEvent];
  }
  constructor(activeCartFacade, userIdService, queryService, commandService, eventService, checkoutPaymentConnector, checkoutQueryFacade) {
    this.activeCartFacade = activeCartFacade;
    this.userIdService = userIdService;
    this.queryService = queryService;
    this.commandService = commandService;
    this.eventService = eventService;
    this.checkoutPaymentConnector = checkoutPaymentConnector;
    this.checkoutQueryFacade = checkoutQueryFacade;
    this.paymentCardTypesQuery = this.queryService.create(() => this.checkoutPaymentConnector.getPaymentCardTypes(), {
      reloadOn: this.getCheckoutPaymentCardTypesQueryReloadEvents(),
      resetOn: this.getCheckoutPaymentCardTypesQueryResetEvents()
    });
    this.createPaymentMethodCommand = this.commandService.create((paymentDetails) => this.checkoutPreconditions().pipe(switchMap(([userId, cartId]) => this.checkoutPaymentConnector.createPaymentDetails(userId, cartId, paymentDetails).pipe(tap((response) => this.eventService.dispatch({
      userId,
      cartId,
      paymentDetails: response
    }, CheckoutPaymentDetailsCreatedEvent))))), {
      strategy: CommandStrategy.CancelPrevious
    });
    this.setPaymentMethodCommand = this.commandService.create((paymentDetails) => this.checkoutPreconditions().pipe(switchMap(([userId, cartId]) => {
      const paymentDetailsId = paymentDetails?.id;
      if (!paymentDetailsId) {
        throw new Error("Checkout conditions not met");
      }
      return this.checkoutPaymentConnector.setPaymentDetails(userId, cartId, paymentDetailsId).pipe(tap(() => this.eventService.dispatch({
        userId,
        cartId,
        paymentDetailsId
      }, CheckoutPaymentDetailsSetEvent)));
    })), {
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
  getPaymentCardTypesState() {
    return this.paymentCardTypesQuery.getState();
  }
  getPaymentCardTypes() {
    return this.getPaymentCardTypesState().pipe(map((state) => state.data ?? []));
  }
  getPaymentDetailsState() {
    return this.checkoutQueryFacade.getCheckoutDetailsState().pipe(map((state) => __spreadProps(__spreadValues({}, state), {
      data: state.data?.paymentInfo
    })));
  }
  createPaymentDetails(paymentDetails) {
    return this.createPaymentMethodCommand.execute(paymentDetails);
  }
  setPaymentDetails(paymentDetails) {
    return this.setPaymentMethodCommand.execute(paymentDetails);
  }
};
_CheckoutPaymentService.\u0275fac = function CheckoutPaymentService_Factory(t) {
  return new (t || _CheckoutPaymentService)(\u0275\u0275inject(ActiveCartFacade), \u0275\u0275inject(UserIdService), \u0275\u0275inject(QueryService), \u0275\u0275inject(CommandService), \u0275\u0275inject(EventService), \u0275\u0275inject(CheckoutPaymentConnector), \u0275\u0275inject(CheckoutQueryFacade));
};
_CheckoutPaymentService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
  token: _CheckoutPaymentService,
  factory: _CheckoutPaymentService.\u0275fac
});
var CheckoutPaymentService = _CheckoutPaymentService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CheckoutPaymentService, [{
    type: Injectable
  }], () => [{
    type: ActiveCartFacade
  }, {
    type: UserIdService
  }, {
    type: QueryService
  }, {
    type: CommandService
  }, {
    type: EventService
  }, {
    type: CheckoutPaymentConnector
  }, {
    type: CheckoutQueryFacade
  }], null);
})();
var _CheckoutQueryService = class _CheckoutQueryService {
  /**
   * Returns the reload events for the checkout query.
   */
  getCheckoutQueryReloadEvents() {
    return [CheckoutQueryReloadEvent];
  }
  /**
   * Returns the reset events for the checkout query.
   */
  getCheckoutQueryResetEvents() {
    return [CheckoutQueryResetEvent];
  }
  constructor(activeCartFacade, userIdService, queryService, checkoutConnector) {
    this.activeCartFacade = activeCartFacade;
    this.userIdService = userIdService;
    this.queryService = queryService;
    this.checkoutConnector = checkoutConnector;
    this.checkoutQuery$ = this.queryService.create(() => this.checkoutPreconditions().pipe(switchMap(([userId, cartId]) => this.checkoutConnector.getCheckoutDetails(userId, cartId))), {
      reloadOn: this.getCheckoutQueryReloadEvents(),
      resetOn: this.getCheckoutQueryResetEvents()
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
  getCheckoutDetailsState() {
    return this.checkoutQuery$.getState();
  }
};
_CheckoutQueryService.\u0275fac = function CheckoutQueryService_Factory(t) {
  return new (t || _CheckoutQueryService)(\u0275\u0275inject(ActiveCartFacade), \u0275\u0275inject(UserIdService), \u0275\u0275inject(QueryService), \u0275\u0275inject(CheckoutConnector));
};
_CheckoutQueryService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
  token: _CheckoutQueryService,
  factory: _CheckoutQueryService.\u0275fac
});
var CheckoutQueryService = _CheckoutQueryService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CheckoutQueryService, [{
    type: Injectable
  }], () => [{
    type: ActiveCartFacade
  }, {
    type: UserIdService
  }, {
    type: QueryService
  }, {
    type: CheckoutConnector
  }], null);
})();
var facadeProviders = [CheckoutDeliveryAddressService, {
  provide: CheckoutDeliveryAddressFacade,
  useExisting: CheckoutDeliveryAddressService
}, CheckoutDeliveryModesService, {
  provide: CheckoutDeliveryModesFacade,
  useExisting: CheckoutDeliveryModesService
}, CheckoutPaymentService, {
  provide: CheckoutPaymentFacade,
  useExisting: CheckoutPaymentService
}, CheckoutQueryService, {
  provide: CheckoutQueryFacade,
  useExisting: CheckoutQueryService
}];
var _CheckoutPageMetaResolver = class _CheckoutPageMetaResolver extends PageMetaResolver {
  constructor(translationService, activeCartFacade, basePageMetaResolver) {
    super();
    this.translationService = translationService;
    this.activeCartFacade = activeCartFacade;
    this.basePageMetaResolver = basePageMetaResolver;
    this.pageType = PageType.CONTENT_PAGE;
    this.pageTemplate = "MultiStepCheckoutSummaryPageTemplate";
  }
  /**
   * @override
   * Resolves the page title for the Checkout Page to include checkout step.
   * The page title used by the browser (history, tabs) and crawlers.
   *
   * The title from the page data is ignored for this page title.
   */
  resolveTitle() {
    return this.basePageMetaResolver.resolveTitle();
  }
  /**
   * Resolves the page heading for the Checkout Page.
   * The page heading is used in the UI (`<h1>`), where as the page
   * title is used by the browser and crawlers.
   */
  resolveHeading() {
    return this.translationService.translate("pageMetaResolver.checkout.title");
  }
  resolveDescription() {
    return this.basePageMetaResolver.resolveDescription();
  }
  resolveRobots() {
    return this.basePageMetaResolver.resolveRobots();
  }
};
_CheckoutPageMetaResolver.\u0275fac = function CheckoutPageMetaResolver_Factory(t) {
  return new (t || _CheckoutPageMetaResolver)(\u0275\u0275inject(TranslationService), \u0275\u0275inject(ActiveCartFacade), \u0275\u0275inject(BasePageMetaResolver));
};
_CheckoutPageMetaResolver.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
  token: _CheckoutPageMetaResolver,
  factory: _CheckoutPageMetaResolver.\u0275fac,
  providedIn: "root"
});
var CheckoutPageMetaResolver = _CheckoutPageMetaResolver;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CheckoutPageMetaResolver, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: TranslationService
  }, {
    type: ActiveCartFacade
  }, {
    type: BasePageMetaResolver
  }], null);
})();
var _CheckoutCoreModule = class _CheckoutCoreModule {
};
_CheckoutCoreModule.\u0275fac = function CheckoutCoreModule_Factory(t) {
  return new (t || _CheckoutCoreModule)();
};
_CheckoutCoreModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
  type: _CheckoutCoreModule
});
_CheckoutCoreModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
  providers: [...facadeProviders, CheckoutDeliveryAddressConnector, CheckoutDeliveryModesConnector, CheckoutPaymentConnector, CheckoutConnector, CheckoutPageMetaResolver, {
    provide: PageMetaResolver,
    useExisting: CheckoutPageMetaResolver,
    multi: true
  }]
});
var CheckoutCoreModule = _CheckoutCoreModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CheckoutCoreModule, [{
    type: NgModule,
    args: [{
      providers: [...facadeProviders, CheckoutDeliveryAddressConnector, CheckoutDeliveryModesConnector, CheckoutPaymentConnector, CheckoutConnector, CheckoutPageMetaResolver, {
        provide: PageMetaResolver,
        useExisting: CheckoutPageMetaResolver,
        multi: true
      }]
    }]
  }], null, null);
})();
var DELIVERY_MODE_NORMALIZER = new InjectionToken("DeliveryModeNormalizer");
var PAYMENT_DETAILS_SERIALIZER = new InjectionToken("PaymentDetailsSerializer");
var PAYMENT_CARD_TYPE_NORMALIZER = new InjectionToken("PaymentCardTypeNormalizer");
var CHECKOUT_NORMALIZER = new InjectionToken("CheckoutNormalizer");

// node_modules/@spartacus/checkout/fesm2022/spartacus-checkout-base-occ.mjs
var _OccCheckoutDeliveryAddressAdapter = class _OccCheckoutDeliveryAddressAdapter {
  constructor(http, occEndpoints, converter) {
    this.http = http;
    this.occEndpoints = occEndpoints;
    this.converter = converter;
    this.logger = inject(LoggerService);
  }
  createAddress(userId, cartId, address) {
    address = this.converter.convert(address, ADDRESS_SERIALIZER);
    return this.http.post(this.getCreateDeliveryAddressEndpoint(userId, cartId), address, {
      headers: new HttpHeaders().set("Content-Type", "application/json")
    }).pipe(catchError((error) => {
      throw normalizeHttpError(error, this.logger);
    }), backOff({
      shouldRetry: isJaloError
    }), this.converter.pipeable(ADDRESS_NORMALIZER));
  }
  getCreateDeliveryAddressEndpoint(userId, cartId) {
    return this.occEndpoints.buildUrl("createDeliveryAddress", {
      urlParams: {
        userId,
        cartId
      }
    });
  }
  setAddress(userId, cartId, addressId) {
    return this.http.put(this.getSetDeliveryAddressEndpoint(userId, cartId, addressId), {}).pipe(catchError((error) => {
      throw normalizeHttpError(error, this.logger);
    }), backOff({
      shouldRetry: isJaloError
    }));
  }
  getSetDeliveryAddressEndpoint(userId, cartId, addressId) {
    return this.occEndpoints.buildUrl("setDeliveryAddress", {
      urlParams: {
        userId,
        cartId
      },
      queryParams: {
        addressId
      }
    });
  }
  clearCheckoutDeliveryAddress(userId, cartId) {
    return this.http.delete(this.getRemoveDeliveryAddressEndpoint(userId, cartId)).pipe(catchError((error) => {
      throw normalizeHttpError(error, this.logger);
    }), backOff({
      shouldRetry: isJaloError
    }));
  }
  getRemoveDeliveryAddressEndpoint(userId, cartId) {
    return this.occEndpoints.buildUrl("removeDeliveryAddress", {
      urlParams: {
        userId,
        cartId
      }
    });
  }
};
_OccCheckoutDeliveryAddressAdapter.\u0275fac = function OccCheckoutDeliveryAddressAdapter_Factory(t) {
  return new (t || _OccCheckoutDeliveryAddressAdapter)(\u0275\u0275inject(HttpClient), \u0275\u0275inject(OccEndpointsService), \u0275\u0275inject(ConverterService));
};
_OccCheckoutDeliveryAddressAdapter.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
  token: _OccCheckoutDeliveryAddressAdapter,
  factory: _OccCheckoutDeliveryAddressAdapter.\u0275fac
});
var OccCheckoutDeliveryAddressAdapter = _OccCheckoutDeliveryAddressAdapter;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OccCheckoutDeliveryAddressAdapter, [{
    type: Injectable
  }], () => [{
    type: HttpClient
  }, {
    type: OccEndpointsService
  }, {
    type: ConverterService
  }], null);
})();
var _OccCheckoutDeliveryModesAdapter = class _OccCheckoutDeliveryModesAdapter {
  constructor(http, occEndpoints, converter) {
    this.http = http;
    this.occEndpoints = occEndpoints;
    this.converter = converter;
    this.logger = inject(LoggerService);
  }
  setMode(userId, cartId, deliveryModeId) {
    return this.http.put(this.getSetDeliveryModeEndpoint(userId, cartId, deliveryModeId), {}).pipe(catchError((error) => {
      throw normalizeHttpError(error, this.logger);
    }), backOff({
      shouldRetry: isJaloError
    }));
  }
  getSetDeliveryModeEndpoint(userId, cartId, deliveryModeId) {
    return this.occEndpoints.buildUrl("setDeliveryMode", {
      urlParams: {
        userId,
        cartId
      },
      queryParams: {
        deliveryModeId
      }
    });
  }
  getSupportedModes(userId, cartId) {
    return this.http.get(this.getDeliveryModesEndpoint(userId, cartId)).pipe(catchError((error) => {
      throw normalizeHttpError(error, this.logger);
    }), backOff({
      shouldRetry: isJaloError
    }), map((listResponse) => listResponse.deliveryModes ?? []), this.converter.pipeableMany(DELIVERY_MODE_NORMALIZER));
  }
  getDeliveryModesEndpoint(userId, cartId) {
    return this.occEndpoints.buildUrl("deliveryModes", {
      urlParams: {
        userId,
        cartId
      }
    });
  }
  clearCheckoutDeliveryMode(userId, cartId) {
    return this.http.delete(this.getClearDeliveryModeEndpoint(userId, cartId)).pipe(catchError((error) => {
      throw normalizeHttpError(error, this.logger);
    }), backOff({
      shouldRetry: isJaloError
    }));
  }
  getClearDeliveryModeEndpoint(userId, cartId) {
    return this.occEndpoints.buildUrl("clearDeliveryMode", {
      urlParams: {
        userId,
        cartId
      }
    });
  }
};
_OccCheckoutDeliveryModesAdapter.\u0275fac = function OccCheckoutDeliveryModesAdapter_Factory(t) {
  return new (t || _OccCheckoutDeliveryModesAdapter)(\u0275\u0275inject(HttpClient), \u0275\u0275inject(OccEndpointsService), \u0275\u0275inject(ConverterService));
};
_OccCheckoutDeliveryModesAdapter.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
  token: _OccCheckoutDeliveryModesAdapter,
  factory: _OccCheckoutDeliveryModesAdapter.\u0275fac
});
var OccCheckoutDeliveryModesAdapter = _OccCheckoutDeliveryModesAdapter;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OccCheckoutDeliveryModesAdapter, [{
    type: Injectable
  }], () => [{
    type: HttpClient
  }, {
    type: OccEndpointsService
  }, {
    type: ConverterService
  }], null);
})();
var _OccCheckoutPaymentAdapter = class _OccCheckoutPaymentAdapter {
  constructor(http, occEndpoints, converter) {
    this.http = http;
    this.occEndpoints = occEndpoints;
    this.converter = converter;
    this.logger = inject(LoggerService);
    if (typeof DOMParser !== "undefined") {
      this.domparser = new DOMParser();
    }
  }
  createPaymentDetails(userId, cartId, paymentDetails) {
    paymentDetails = this.converter.convert(paymentDetails, PAYMENT_DETAILS_SERIALIZER);
    return this.getProviderSubInfo(userId, cartId).pipe(map((data) => {
      const labelsMap = this.convertToMap(data.mappingLabels.entry);
      return {
        url: data.postUrl,
        parameters: this.getParamsForPaymentProvider(paymentDetails, data.parameters.entry, labelsMap),
        mappingLabels: labelsMap
      };
    }), mergeMap((sub) => (
      // create a subscription directly with payment provider
      this.createSubWithProvider(sub.url, sub.parameters).pipe(map((response) => this.extractPaymentDetailsFromHtml(response)), mergeMap((fromPaymentProvider) => {
        fromPaymentProvider["defaultPayment"] = paymentDetails.defaultPayment ?? false;
        fromPaymentProvider["savePaymentInfo"] = true;
        return this.createDetailsWithParameters(userId, cartId, fromPaymentProvider).pipe(catchError((error) => {
          throw normalizeHttpError(error, this.logger);
        }), backOff({
          shouldRetry: isJaloError
        }), this.converter.pipeable(PAYMENT_DETAILS_NORMALIZER));
      }))
    )));
  }
  setPaymentDetails(userId, cartId, paymentDetailsId) {
    return this.http.put(this.getSetPaymentDetailsEndpoint(userId, cartId, paymentDetailsId), {}).pipe(catchError((error) => {
      throw normalizeHttpError(error, this.logger);
    }), backOff({
      shouldRetry: isJaloError
    }));
  }
  getSetPaymentDetailsEndpoint(userId, cartId, paymentDetailsId) {
    return this.occEndpoints.buildUrl("setCartPaymentDetails", {
      urlParams: {
        userId,
        cartId
      },
      queryParams: {
        paymentDetailsId
      }
    });
  }
  getPaymentCardTypes() {
    return this.http.get(this.getPaymentCardTypesEndpoint()).pipe(catchError((error) => {
      throw normalizeHttpError(error, this.logger);
    }), backOff({
      shouldRetry: isJaloError
    }), map((cardTypeList) => cardTypeList.cardTypes ?? []), this.converter.pipeableMany(PAYMENT_CARD_TYPE_NORMALIZER));
  }
  getPaymentCardTypesEndpoint() {
    return this.occEndpoints.buildUrl("cardTypes");
  }
  getProviderSubInfo(userId, cartId) {
    return this.http.get(this.getPaymentProviderSubInfoEndpoint(userId, cartId)).pipe(catchError((error) => {
      throw normalizeHttpError(error, this.logger);
    }), backOff({
      shouldRetry: isJaloError
    }));
  }
  getPaymentProviderSubInfoEndpoint(userId, cartId) {
    return this.occEndpoints.buildUrl("paymentProviderSubInfo", {
      urlParams: {
        userId,
        cartId
      }
    });
  }
  createSubWithProvider(postUrl, parameters) {
    const headers = new HttpHeaders({
      "Content-Type": "application/x-www-form-urlencoded",
      Accept: "text/html"
    });
    let httpParams = new HttpParams({
      encoder: new HttpParamsURIEncoder()
    });
    Object.keys(parameters).forEach((key) => {
      httpParams = httpParams.append(key, parameters[key]);
    });
    return this.http.post(postUrl, httpParams, {
      headers,
      responseType: "text"
    }).pipe(catchError((error) => {
      throw normalizeHttpError(error, this.logger);
    }), backOff({
      shouldRetry: isJaloError
    }));
  }
  createDetailsWithParameters(userId, cartId, parameters) {
    let httpParams = new HttpParams({
      encoder: new HttpParamsURIEncoder()
    });
    Object.keys(parameters).forEach((key) => {
      httpParams = httpParams.append(key, parameters[key]);
    });
    const headers = new HttpHeaders({
      "Content-Type": "application/x-www-form-urlencoded"
    });
    return this.http.post(this.getCreatePaymentDetailsEndpoint(userId, cartId), httpParams, {
      headers
    }).pipe(catchError((error) => {
      throw normalizeHttpError(error, this.logger);
    }), backOff({
      shouldRetry: isJaloError
    }));
  }
  getCreatePaymentDetailsEndpoint(userId, cartId) {
    return this.occEndpoints.buildUrl("createPaymentDetails", {
      urlParams: {
        userId,
        cartId
      }
    });
  }
  getParamsForPaymentProvider(paymentDetails, parameters, mappingLabels) {
    const params = this.convertToMap(parameters);
    params[mappingLabels["hybris_account_holder_name"]] = paymentDetails.accountHolderName;
    params[mappingLabels["hybris_card_type"]] = paymentDetails.cardType?.code;
    params[mappingLabels["hybris_card_number"]] = paymentDetails.cardNumber;
    if (mappingLabels["hybris_combined_expiry_date"] === "true") {
      params[mappingLabels["hybris_card_expiry_date"]] = paymentDetails.expiryMonth + mappingLabels["hybris_separator_expiry_date"] + paymentDetails.expiryYear;
    } else {
      params[mappingLabels["hybris_card_expiration_month"]] = paymentDetails.expiryMonth;
      params[mappingLabels["hybris_card_expiration_year"]] = paymentDetails.expiryYear;
    }
    params[mappingLabels["hybris_card_cvn"]] = paymentDetails.cvn;
    params[mappingLabels["hybris_billTo_country"]] = paymentDetails.billingAddress?.country?.isocode;
    params[mappingLabels["hybris_billTo_firstname"]] = paymentDetails.billingAddress?.firstName;
    params[mappingLabels["hybris_billTo_lastname"]] = paymentDetails.billingAddress?.lastName;
    params[mappingLabels["hybris_billTo_street1"]] = paymentDetails.billingAddress?.line1 + " " + paymentDetails.billingAddress?.line2;
    params[mappingLabels["hybris_billTo_city"]] = paymentDetails.billingAddress?.town;
    if (paymentDetails.billingAddress?.region) {
      params[mappingLabels["hybris_billTo_region"]] = paymentDetails.billingAddress.region.isocodeShort;
    } else {
      params[mappingLabels["hybris_billTo_region"]] = "";
    }
    params[mappingLabels["hybris_billTo_postalcode"]] = paymentDetails.billingAddress?.postalCode;
    return params;
  }
  extractPaymentDetailsFromHtml(html) {
    const domdoc = this.domparser.parseFromString(html, "text/xml");
    const responseForm = domdoc.getElementsByTagName("form")[0];
    const inputs = responseForm.getElementsByTagName("input");
    const values = {};
    for (let i = 0; inputs[i]; i++) {
      const input = inputs[i];
      const name = input.getAttribute("name");
      const value = input.getAttribute("value");
      if (name && name !== "{}" && value && value !== "") {
        values[name] = value;
      }
    }
    return values;
  }
  convertToMap(paramList) {
    return paramList.reduce(function(result, item) {
      const key = item.key;
      result[key] = item.value;
      return result;
    }, {});
  }
};
_OccCheckoutPaymentAdapter.\u0275fac = function OccCheckoutPaymentAdapter_Factory(t) {
  return new (t || _OccCheckoutPaymentAdapter)(\u0275\u0275inject(HttpClient), \u0275\u0275inject(OccEndpointsService), \u0275\u0275inject(ConverterService));
};
_OccCheckoutPaymentAdapter.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
  token: _OccCheckoutPaymentAdapter,
  factory: _OccCheckoutPaymentAdapter.\u0275fac
});
var OccCheckoutPaymentAdapter = _OccCheckoutPaymentAdapter;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OccCheckoutPaymentAdapter, [{
    type: Injectable
  }], () => [{
    type: HttpClient
  }, {
    type: OccEndpointsService
  }, {
    type: ConverterService
  }], null);
})();
var _OccCheckoutAdapter = class _OccCheckoutAdapter {
  constructor(http, occEndpoints, converter) {
    this.http = http;
    this.occEndpoints = occEndpoints;
    this.converter = converter;
    this.logger = inject(LoggerService);
  }
  getCheckoutDetails(userId, cartId) {
    return this.http.get(this.getGetCheckoutDetailsEndpoint(userId, cartId)).pipe(catchError((error) => {
      throw normalizeHttpError(error, this.logger);
    }), backOff({
      shouldRetry: isJaloError
    }), this.converter.pipeable(CHECKOUT_NORMALIZER));
  }
  getGetCheckoutDetailsEndpoint(userId, cartId) {
    return this.occEndpoints.buildUrl("getCheckoutDetails", {
      urlParams: {
        userId,
        cartId
      }
    });
  }
};
_OccCheckoutAdapter.\u0275fac = function OccCheckoutAdapter_Factory(t) {
  return new (t || _OccCheckoutAdapter)(\u0275\u0275inject(HttpClient), \u0275\u0275inject(OccEndpointsService), \u0275\u0275inject(ConverterService));
};
_OccCheckoutAdapter.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
  token: _OccCheckoutAdapter,
  factory: _OccCheckoutAdapter.\u0275fac
});
var OccCheckoutAdapter = _OccCheckoutAdapter;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OccCheckoutAdapter, [{
    type: Injectable
  }], () => [{
    type: HttpClient
  }, {
    type: OccEndpointsService
  }, {
    type: ConverterService
  }], null);
})();
var DELIVERY_ENDPOINT = "users/${userId}/carts/${cartId}/addresses/delivery";
var DELIVERY_MODE_ENDPOINT = "users/${userId}/carts/${cartId}/deliverymode";
var defaultOccCheckoutConfig = {
  backend: {
    occ: {
      endpoints: {
        setDeliveryAddress: DELIVERY_ENDPOINT,
        cardTypes: "cardtypes",
        createDeliveryAddress: DELIVERY_ENDPOINT,
        removeDeliveryAddress: DELIVERY_ENDPOINT,
        deliveryMode: DELIVERY_MODE_ENDPOINT,
        setDeliveryMode: DELIVERY_MODE_ENDPOINT,
        clearDeliveryMode: DELIVERY_MODE_ENDPOINT,
        deliveryModes: `${DELIVERY_MODE_ENDPOINT}s`,
        setCartPaymentDetails: "users/${userId}/carts/${cartId}/paymentdetails",
        paymentProviderSubInfo: "users/${userId}/carts/${cartId}/payment/sop/request?responseUrl=sampleUrl",
        createPaymentDetails: "users/${userId}/carts/${cartId}/payment/sop/response",
        getCheckoutDetails: "users/${userId}/carts/${cartId}?fields=deliveryAddress(FULL),deliveryMode(FULL),paymentInfo(FULL)"
      }
    }
  }
};
var _CheckoutOccModule = class _CheckoutOccModule {
};
_CheckoutOccModule.\u0275fac = function CheckoutOccModule_Factory(t) {
  return new (t || _CheckoutOccModule)();
};
_CheckoutOccModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
  type: _CheckoutOccModule
});
_CheckoutOccModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
  providers: [provideDefaultConfig(defaultOccCheckoutConfig), {
    provide: CheckoutAdapter,
    useClass: OccCheckoutAdapter
  }, {
    provide: CheckoutDeliveryAddressAdapter,
    useClass: OccCheckoutDeliveryAddressAdapter
  }, {
    provide: CheckoutDeliveryModesAdapter,
    useClass: OccCheckoutDeliveryModesAdapter
  }, {
    provide: CheckoutPaymentAdapter,
    useClass: OccCheckoutPaymentAdapter
  }],
  imports: [CommonModule]
});
var CheckoutOccModule = _CheckoutOccModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CheckoutOccModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule],
      providers: [provideDefaultConfig(defaultOccCheckoutConfig), {
        provide: CheckoutAdapter,
        useClass: OccCheckoutAdapter
      }, {
        provide: CheckoutDeliveryAddressAdapter,
        useClass: OccCheckoutDeliveryAddressAdapter
      }, {
        provide: CheckoutDeliveryModesAdapter,
        useClass: OccCheckoutDeliveryModesAdapter
      }, {
        provide: CheckoutPaymentAdapter,
        useClass: OccCheckoutPaymentAdapter
      }]
    }]
  }], null, null);
})();

// node_modules/@spartacus/checkout/fesm2022/spartacus-checkout-base.mjs
var _CheckoutModule = class _CheckoutModule {
};
_CheckoutModule.\u0275fac = function CheckoutModule_Factory(t) {
  return new (t || _CheckoutModule)();
};
_CheckoutModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
  type: _CheckoutModule
});
_CheckoutModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
  imports: [CheckoutComponentsModule, CheckoutCoreModule, CheckoutOccModule]
});
var CheckoutModule = _CheckoutModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CheckoutModule, [{
    type: NgModule,
    args: [{
      imports: [CheckoutComponentsModule, CheckoutCoreModule, CheckoutOccModule]
    }]
  }], null, null);
})();
export {
  CheckoutModule
};
//# sourceMappingURL=chunk-PY6WENZG.mjs.map
