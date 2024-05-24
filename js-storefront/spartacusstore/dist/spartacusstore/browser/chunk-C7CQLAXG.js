import {
  AsmAdapter,
  AsmCoreModule,
  AsmService,
  CUSTOMER_LISTS_NORMALIZER,
  CUSTOMER_SEARCH_PAGE_NORMALIZER
} from "./chunk-NBTBPXA3.js";
import {
  ASM_ENABLED_LOCAL_STORAGE_KEY,
  AsmBindCartFacade,
  AsmConfig,
  AsmCreateCustomerFacade,
  AsmCustomerListFacade,
  AsmDeepLinkService,
  AsmDialogActionType,
  AsmEnablerService,
  CsAgentAuthService,
  CustomerListColumnActionType
} from "./chunk-HYGVNORW.js";
import {
  SavedCartFacade
} from "./chunk-SRHF335G.js";
import {
  UserAccountFacade
} from "./chunk-NWLDJIE7.js";
import {
  ActiveCartFacade,
  MultiCartFacade
} from "./chunk-I4764JOB.js";
import {
  BREAKPOINT,
  BreakpointService,
  CustomFormValidators,
  DIALOG_TYPE,
  DefaultValueAccessor,
  DirectionMode,
  DirectionService,
  FocusDirective,
  FormBuilder,
  FormControl,
  FormControlDirective,
  FormControlName,
  FormErrorsComponent,
  FormErrorsModule,
  FormGroupDirective,
  FormsModule,
  ICON_TYPE,
  IconComponent,
  IconModule,
  KeyboardFocusModule,
  LaunchDialogService,
  MessageComponent,
  MessageComponentModule,
  NgControlStatus,
  NgControlStatusGroup,
  NgForm,
  NgModel,
  NgSelectA11yDirective,
  NgSelectA11yModule,
  NgSelectComponent,
  NgSelectModule,
  PaginationComponent,
  PaginationModule,
  PasswordVisibilityToggleDirective,
  PasswordVisibilityToggleModule,
  ReactiveFormsModule,
  RequiredValidator,
  SortingComponent,
  SortingModule,
  SpinnerComponent,
  SpinnerModule,
  UntypedFormBuilder,
  UntypedFormControl,
  Validators,
  ɵNgNoValidate
} from "./chunk-TEI6YMHW.js";
import {
  AsyncPipe,
  AuthService,
  BaseSiteService,
  BehaviorSubject,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  CommonModule,
  Component,
  ConverterService,
  EMPTY,
  EventEmitter,
  FeatureModulesService,
  GlobalMessageService,
  GlobalMessageType,
  HostBinding,
  HttpClient,
  HttpHeaders,
  HttpParams,
  I18nModule,
  Injectable,
  Input,
  InterceptorUtil,
  LoggerService,
  NEVER,
  NgClass,
  NgForOf,
  NgIf,
  NgModule,
  NgTemplateOutlet,
  OCC_CART_ID_CURRENT,
  OccConfig,
  OccEndpointsService,
  Output,
  Pipe,
  RoutingService,
  Subscription,
  TranslatePipe,
  TranslationService,
  USE_CUSTOMER_SUPPORT_AGENT_TOKEN,
  UserIdService,
  ViewChild,
  ViewChildren,
  WindowRef,
  __spreadProps,
  __spreadValues,
  catchError,
  combineLatest,
  concatMap,
  debounceTime,
  defer,
  distinctUntilChanged,
  filter,
  finalize,
  first,
  iif,
  inject,
  map,
  normalizeHttpError,
  of,
  provideDefaultConfig,
  setClassMetadata,
  shareReplay,
  switchMap,
  take,
  tap,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMap,
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
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpropertyInterpolate,
  ɵɵpureFunction1,
  ɵɵpureFunction2,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵresetView,
  ɵɵresolveDocument,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
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
} from "./chunk-RJVZANIA.js";

// node_modules/@spartacus/asm/fesm2022/spartacus-asm-components.mjs
function AsmSaveCartDialogComponent_ng_container_7_cx_message_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "cx-message", 16);
    \u0275\u0275pipe(1, "cxTranslate");
    \u0275\u0275listener("closeMessage", function AsmSaveCartDialogComponent_ng_container_7_cx_message_2_Template_cx_message_closeMessage_0_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.closeDialogAlert());
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275property("text", \u0275\u0275pipeBind1(1, 2, "asm.saveCart.dialog.saveInfo"))("type", ctx_r2.globalMessageType.MSG_TYPE_INFO);
  }
}
function AsmSaveCartDialogComponent_ng_container_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 14);
    \u0275\u0275template(2, AsmSaveCartDialogComponent_ng_container_7_cx_message_2_Template, 2, 4, "cx-message", 15);
    \u0275\u0275pipe(3, "async");
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", \u0275\u0275pipeBind1(3, 1, ctx_r2.showDialogAlert$));
  }
}
function AsmSaveCartDialogComponent_ng_template_8_cx_message_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "cx-message", 16);
    \u0275\u0275pipe(1, "cxTranslate");
    \u0275\u0275listener("closeMessage", function AsmSaveCartDialogComponent_ng_template_8_cx_message_1_Template_cx_message_closeMessage_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.closeDialogAlert());
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275property("text", \u0275\u0275pipeBind1(1, 2, "asm.saveCart.dialog.disableInfo"))("type", ctx_r2.globalMessageType.MSG_TYPE_WARNING);
  }
}
function AsmSaveCartDialogComponent_ng_template_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14);
    \u0275\u0275template(1, AsmSaveCartDialogComponent_ng_template_8_cx_message_1_Template, 2, 4, "cx-message", 15);
    \u0275\u0275pipe(2, "async");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", \u0275\u0275pipeBind1(2, 1, ctx_r2.showDialogAlert$));
  }
}
var _c0 = ["bindToCart"];
var _c1 = ["saveInactiveCart"];
function AsmBindCartComponent_button_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 10, 1);
    \u0275\u0275pipe(2, "async");
    \u0275\u0275pipe(3, "async");
    \u0275\u0275pipe(4, "async");
    \u0275\u0275listener("click", function AsmBindCartComponent_button_13_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.bindCartToCustomer());
    });
    \u0275\u0275elementStart(5, "span");
    \u0275\u0275pipe(6, "async");
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "cxTranslate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(9, "cx-dot-spinner");
    \u0275\u0275pipe(10, "async");
    \u0275\u0275pipe(11, "cxTranslate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275classProp("cx-asm-active", \u0275\u0275pipeBind1(2, 9, ctx_r3.valid$))("cx-bind-loading", \u0275\u0275pipeBind1(3, 11, ctx_r3.loading$));
    \u0275\u0275property("disabled", !\u0275\u0275pipeBind1(4, 13, ctx_r3.valid$));
    \u0275\u0275advance(5);
    \u0275\u0275attribute("aria-hidden", \u0275\u0275pipeBind1(6, 15, ctx_r3.loading$));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(8, 17, "asm.bindCart.bindCartToCustomer"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275attribute("aria-hidden", !\u0275\u0275pipeBind1(10, 19, ctx_r3.loading$))("aria-label", \u0275\u0275pipeBind1(11, 21, "common.loading"));
  }
}
function AsmBindCartComponent_button_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 11, 2);
    \u0275\u0275pipe(2, "async");
    \u0275\u0275listener("click", function AsmBindCartComponent_button_15_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.onSaveInactiveCart());
    });
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275pipe(4, "async");
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "cxTranslate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(7, "cx-dot-spinner");
    \u0275\u0275pipe(8, "async");
    \u0275\u0275pipe(9, "cxTranslate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275classProp("cx-bind-loading", \u0275\u0275pipeBind1(2, 6, ctx_r3.loading$));
    \u0275\u0275advance(3);
    \u0275\u0275attribute("aria-hidden", \u0275\u0275pipeBind1(4, 8, ctx_r3.loading$));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(6, 10, "asm.saveCart.saveCartBtn"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275attribute("aria-hidden", !\u0275\u0275pipeBind1(8, 12, ctx_r3.loading$))("aria-label", \u0275\u0275pipeBind1(9, 14, "common.loading"));
  }
}
function AsmCreateCustomerFormComponent_cx_message_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "cx-message", 14);
    \u0275\u0275pipe(1, "cxTranslate");
    \u0275\u0275listener("closeMessage", function AsmCreateCustomerFormComponent_cx_message_10_Template_cx_message_closeMessage_0_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.closeDialogInfoAlert());
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("text", \u0275\u0275pipeBind1(1, 2, "asm.createCustomerForm.createAccountAlert"))("type", ctx_r2.globalMessageType.MSG_TYPE_INFO);
  }
}
function AsmCreateCustomerFormComponent_ng_container_11_cx_message_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "cx-message", 14);
    \u0275\u0275listener("closeMessage", function AsmCreateCustomerFormComponent_ng_container_11_cx_message_1_Template_cx_message_closeMessage_0_listener() {
      \u0275\u0275restoreView(_r4);
      const i_r5 = \u0275\u0275nextContext().index;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.closeDialogBackendErroAlert(i_r5));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const errorMessage_r6 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("text", errorMessage_r6)("type", ctx_r2.globalMessageType.MSG_TYPE_ERROR);
  }
}
function AsmCreateCustomerFormComponent_ng_container_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, AsmCreateCustomerFormComponent_ng_container_11_cx_message_1_Template, 1, 2, "cx-message", 8);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const i_r5 = ctx.index;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.showDialogBackendErrorAlerts[i_r5]);
  }
}
function AsmCreateCustomerFormComponent_div_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "div", 15)(2, "label")(3, "span", 16);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "cxTranslate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(6, "input", 17);
    \u0275\u0275pipe(7, "cxTranslate");
    \u0275\u0275element(8, "cx-form-errors", 18);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 15)(10, "label")(11, "span", 16);
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "cxTranslate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(14, "input", 19);
    \u0275\u0275pipe(15, "cxTranslate");
    \u0275\u0275element(16, "cx-form-errors", 18);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "div", 15)(18, "label")(19, "span", 16);
    \u0275\u0275text(20);
    \u0275\u0275pipe(21, "cxTranslate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(22, "input", 20);
    \u0275\u0275pipe(23, "cxTranslate");
    \u0275\u0275element(24, "cx-form-errors", 18);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 9, "asm.createCustomerForm.firstName.label"));
    \u0275\u0275advance(2);
    \u0275\u0275propertyInterpolate("placeholder", \u0275\u0275pipeBind1(7, 11, "asm.createCustomerForm.firstName.placeholder"));
    \u0275\u0275advance(2);
    \u0275\u0275property("control", ctx_r2.registerForm.get("firstName"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(13, 13, "asm.createCustomerForm.lastName.label"));
    \u0275\u0275advance(2);
    \u0275\u0275propertyInterpolate("placeholder", \u0275\u0275pipeBind1(15, 15, "asm.createCustomerForm.lastName.placeholder"));
    \u0275\u0275advance(2);
    \u0275\u0275property("control", ctx_r2.registerForm.get("lastName"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(21, 17, "asm.createCustomerForm.emailAddress.label"));
    \u0275\u0275advance(2);
    \u0275\u0275propertyInterpolate("placeholder", \u0275\u0275pipeBind1(23, 19, "asm.createCustomerForm.emailAddress.placeholder"));
    \u0275\u0275advance(2);
    \u0275\u0275property("control", ctx_r2.registerForm.get("email"));
  }
}
function AsmCreateCustomerFormComponent_ng_template_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 21);
    \u0275\u0275element(1, "cx-spinner");
    \u0275\u0275elementEnd();
  }
}
function CSAgentLoginFormComponent_form_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "form", 2);
    \u0275\u0275listener("ngSubmit", function CSAgentLoginFormComponent_form_0_Template_form_ngSubmit_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onSubmit());
    });
    \u0275\u0275elementStart(1, "label");
    \u0275\u0275element(2, "input", 3);
    \u0275\u0275pipe(3, "cxTranslate");
    \u0275\u0275pipe(4, "cxTranslate");
    \u0275\u0275element(5, "cx-form-errors", 4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "label");
    \u0275\u0275element(7, "input", 5);
    \u0275\u0275pipe(8, "cxTranslate");
    \u0275\u0275pipe(9, "cxTranslate");
    \u0275\u0275element(10, "cx-form-errors", 4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "button", 6);
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "cxTranslate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("formGroup", ctx_r1.csAgentLoginForm);
    \u0275\u0275advance(2);
    \u0275\u0275propertyInterpolate("placeholder", \u0275\u0275pipeBind1(3, 8, "asm.loginForm.userId.label"));
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(4, 10, "asm.loginForm.userId.label"));
    \u0275\u0275advance(3);
    \u0275\u0275property("control", ctx_r1.csAgentLoginForm.get("userId"));
    \u0275\u0275advance(2);
    \u0275\u0275propertyInterpolate("placeholder", \u0275\u0275pipeBind1(8, 12, "asm.loginForm.password.label"));
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(9, 14, "asm.loginForm.password.label"));
    \u0275\u0275advance(3);
    \u0275\u0275property("control", ctx_r1.csAgentLoginForm.get("password"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(13, 16, "asm.loginForm.submit"), " ");
  }
}
function CSAgentLoginFormComponent_cx_dot_spinner_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "cx-dot-spinner", 7);
    \u0275\u0275pipe(1, "cxTranslate");
  }
  if (rf & 2) {
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(1, 1, "common.loading"));
  }
}
var _c2 = ["resultList"];
var _c3 = ["searchTerm"];
var _c4 = ["createCustomerLink"];
var _c5 = ["searchResultItem"];
function CustomerSelectionComponent_div_10_button_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 12, 2);
    \u0275\u0275listener("keydown.arrowup", function CustomerSelectionComponent_div_10_button_2_Template_button_keydown_arrowup_0_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.focusPreviousChild($event));
    })("keydown.arrowdown", function CustomerSelectionComponent_div_10_button_2_Template_button_keydown_arrowdown_0_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.focusNextChild($event));
    })("keydown.arrowright", function CustomerSelectionComponent_div_10_button_2_Template_button_keydown_arrowright_0_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.focusInputText($event));
    })("keydown.arrowleft", function CustomerSelectionComponent_div_10_button_2_Template_button_keydown_arrowleft_0_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.focusInputText($event));
    })("keydown.enter", function CustomerSelectionComponent_div_10_button_2_Template_button_keydown_enter_0_listener($event) {
      const result_r4 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.selectCustomerFromList($event, result_r4));
    })("keydown.escape", function CustomerSelectionComponent_div_10_button_2_Template_button_keydown_escape_0_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.closeResults($event));
    })("keydown.home", function CustomerSelectionComponent_div_10_button_2_Template_button_keydown_home_0_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.focusInputText($event));
    })("keydown.end", function CustomerSelectionComponent_div_10_button_2_Template_button_keydown_end_0_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.focusInputText($event));
    })("click", function CustomerSelectionComponent_div_10_button_2_Template_button_click_0_listener($event) {
      const result_r4 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.selectCustomerFromList($event, result_r4));
    });
    \u0275\u0275elementStart(2, "span", 13);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 14);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const result_r4 = ctx.$implicit;
    const i_r5 = ctx.index;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("active", ctx_r2.activeFocusedButtonIndex === i_r5);
    \u0275\u0275property("tabindex", ctx_r2.activeFocusedButtonIndex === i_r5 ? 0 : -1);
    \u0275\u0275attribute("aria-selected", ctx_r2.activeFocusedButtonIndex === i_r5);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(result_r4.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(result_r4.uid);
  }
}
function CustomerSelectionComponent_div_10_button_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 15, 2);
    \u0275\u0275listener("click", function CustomerSelectionComponent_div_10_button_3_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.createCustomer());
    })("keydown.escape", function CustomerSelectionComponent_div_10_button_3_Template_button_keydown_escape_0_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.closeResults($event));
    })("keydown.arrowright", function CustomerSelectionComponent_div_10_button_3_Template_button_keydown_arrowright_0_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.focusInputText($event));
    })("keydown.arrowleft", function CustomerSelectionComponent_div_10_button_3_Template_button_keydown_arrowleft_0_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.focusInputText($event));
    })("keydown.home", function CustomerSelectionComponent_div_10_button_3_Template_button_keydown_home_0_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.focusInputText($event));
    })("keydown.end", function CustomerSelectionComponent_div_10_button_3_Template_button_keydown_end_0_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.focusInputText($event));
    });
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "cxTranslate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 16, 3);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "cxTranslate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("active", ctx_r2.activeFocusedButtonIndex === 0);
    \u0275\u0275attribute("aria-selected", ctx_r2.activeFocusedButtonIndex === 0);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 5, "asm.customerSearch.noMatchResult"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(8, 7, "asm.customerSearch.createCustomer"));
  }
}
function CustomerSelectionComponent_div_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9, 1);
    \u0275\u0275template(2, CustomerSelectionComponent_div_10_button_2_Template, 6, 6, "button", 10)(3, CustomerSelectionComponent_div_10_button_3_Template, 9, 9, "button", 11);
    \u0275\u0275pipe(4, "async");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const results_r7 = ctx.ngIf;
    const ctx_r2 = \u0275\u0275nextContext();
    const searchTerm_r8 = \u0275\u0275reference(3);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", results_r7.entries);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !\u0275\u0275pipeBind1(4, 2, ctx_r2.searchResultsLoading$) && searchTerm_r8.value.length >= 3 && !!results_r7.entries && results_r7.entries.length <= 0);
  }
}
function CustomerSelectionComponent_div_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9);
    \u0275\u0275element(1, "cx-dot-spinner", 17);
    \u0275\u0275pipe(2, "cxTranslate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(2, 1, "common.loading"));
  }
}
var _c6 = ["asmCustomer360Launcher"];
function CustomerEmulationComponent_ng_container_0_button_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 7, 0);
    \u0275\u0275listener("click", function CustomerEmulationComponent_ng_container_0_button_7_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.openAsmCustomer360());
    });
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "cxTranslate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 1, "asm.asmCustomer360Button"), " ");
  }
}
function CustomerEmulationComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 2)(2, "label", 3);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "label", 4);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275element(6, "cx-asm-bind-cart");
    \u0275\u0275template(7, CustomerEmulationComponent_ng_container_0_button_7_Template, 4, 3, "button", 5);
    \u0275\u0275elementStart(8, "button", 6);
    \u0275\u0275listener("click", function CustomerEmulationComponent_ng_container_0_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.logoutCustomer());
    });
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "cxTranslate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r2.customer == null ? null : ctx_r2.customer.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.customer == null ? null : ctx_r2.customer.uid);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r2.isAsmCustomer360Configured && ctx_r2.customer);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(10, 4, "asm.endSession"), " ");
  }
}
function AsmToggleUiComponent_span_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 3);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "cxTranslate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "asm.toggleUi.collapse"), " ");
  }
}
function AsmToggleUiComponent_span_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 3);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "cxTranslate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "asm.toggleUi.expand"), " ");
  }
}
var _c7 = ["customerListLink"];
var _c8 = ["addNewCustomerLink"];
function AsmMainUiComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 12)(1, "a", 13, 0);
    \u0275\u0275listener("click", function AsmMainUiComponent_div_8_Template_a_click_1_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.showCustomList());
    });
    \u0275\u0275element(3, "cx-icon", 14);
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "cxTranslate");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275property("type", ctx_r1.iconTypes.USER_FRIENDS);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 2, "asm.customers"));
  }
}
function AsmMainUiComponent_cx_asm_session_timer_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "cx-asm-session-timer");
  }
}
function AsmMainUiComponent_button_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 15);
    \u0275\u0275pipe(1, "cxTranslate");
    \u0275\u0275listener("click", function AsmMainUiComponent_button_13_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.hideUi());
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275propertyInterpolate("title", \u0275\u0275pipeBind1(1, 1, "asm.hideUi"));
  }
}
function AsmMainUiComponent_button_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 16);
    \u0275\u0275pipe(1, "cxTranslate");
    \u0275\u0275listener("click", function AsmMainUiComponent_button_16_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.logout());
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275propertyInterpolate("title", \u0275\u0275pipeBind1(1, 1, "asm.logout"));
  }
}
function AsmMainUiComponent_ng_container_18_ng_container_1_ng_container_1_cx_customer_emulation_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "cx-customer-emulation");
  }
}
function AsmMainUiComponent_ng_container_18_ng_container_1_ng_container_1_cx_message_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "cx-message", 19);
    \u0275\u0275pipe(1, "cxTranslate");
    \u0275\u0275listener("closeMessage", function AsmMainUiComponent_ng_container_18_ng_container_1_ng_container_1_cx_message_2_Template_cx_message_closeMessage_0_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.closeDialogConfirmationAlert());
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275property("text", \u0275\u0275pipeBind1(1, 2, "asm.createCustomerSuccessfullyAlert"))("type", ctx_r1.globalMessageType.MSG_TYPE_CONFIRMATION);
  }
}
function AsmMainUiComponent_ng_container_18_ng_container_1_ng_container_1_cx_message_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "cx-message", 19);
    \u0275\u0275pipe(1, "cxTranslate");
    \u0275\u0275listener("closeMessage", function AsmMainUiComponent_ng_container_18_ng_container_1_ng_container_1_cx_message_3_Template_cx_message_closeMessage_0_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.closeDeeplinkCartInfoAlert());
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275property("text", \u0275\u0275pipeBind1(1, 2, ctx_r1.deeplinkCartAlertKey))("type", ctx_r1.globalMessageType.MSG_TYPE_INFO);
  }
}
function AsmMainUiComponent_ng_container_18_ng_container_1_ng_container_1_cx_message_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "cx-message", 19);
    \u0275\u0275pipe(1, "cxTranslate");
    \u0275\u0275listener("closeMessage", function AsmMainUiComponent_ng_container_18_ng_container_1_ng_container_1_cx_message_5_Template_cx_message_closeMessage_0_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.closeCustomerEmulationInfoAlert());
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275property("text", \u0275\u0275pipeBind1(1, 2, "asm.startCustomerEmulationAlertInfo"))("type", ctx_r1.globalMessageType.MSG_TYPE_INFO);
  }
}
function AsmMainUiComponent_ng_container_18_ng_container_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, AsmMainUiComponent_ng_container_18_ng_container_1_ng_container_1_cx_customer_emulation_1_Template, 1, 0, "cx-customer-emulation", 9)(2, AsmMainUiComponent_ng_container_18_ng_container_1_ng_container_1_cx_message_2_Template, 2, 4, "cx-message", 18)(3, AsmMainUiComponent_ng_container_18_ng_container_1_ng_container_1_cx_message_3_Template, 2, 4, "cx-message", 18);
    \u0275\u0275pipe(4, "async");
    \u0275\u0275template(5, AsmMainUiComponent_ng_container_18_ng_container_1_ng_container_1_cx_message_5_Template, 2, 4, "cx-message", 18);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const notCollapsed_r8 = \u0275\u0275nextContext(2).ngIf;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", notCollapsed_r8);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", notCollapsed_r8 && ctx_r1.showCreateCustomerSuccessfullyAlert);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", \u0275\u0275pipeBind1(4, 4, ctx_r1.showDeeplinkCartInfoAlert$));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", notCollapsed_r8 && ctx_r1.showCustomerEmulationInfoAlert);
  }
}
function AsmMainUiComponent_ng_container_18_ng_container_1_ng_template_3_cx_customer_selection_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "cx-customer-selection", 21);
    \u0275\u0275listener("submitEvent", function AsmMainUiComponent_ng_container_18_ng_container_1_ng_template_3_cx_customer_selection_0_Template_cx_customer_selection_submitEvent_0_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.startCustomerEmulationSession($event));
    });
    \u0275\u0275elementEnd();
  }
}
function AsmMainUiComponent_ng_container_18_ng_container_1_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, AsmMainUiComponent_ng_container_18_ng_container_1_ng_template_3_cx_customer_selection_0_Template, 1, 0, "cx-customer-selection", 20);
  }
  if (rf & 2) {
    const notCollapsed_r8 = \u0275\u0275nextContext(2).ngIf;
    \u0275\u0275property("ngIf", notCollapsed_r8);
  }
}
function AsmMainUiComponent_ng_container_18_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, AsmMainUiComponent_ng_container_18_ng_container_1_ng_container_1_Template, 6, 6, "ng-container", 17);
    \u0275\u0275pipe(2, "async");
    \u0275\u0275template(3, AsmMainUiComponent_ng_container_18_ng_container_1_ng_template_3_Template, 1, 1, "ng-template", null, 2, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const showCustomerSelection_r10 = \u0275\u0275reference(4);
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", \u0275\u0275pipeBind1(2, 2, ctx_r1.customer$))("ngIfElse", showCustomerSelection_r10);
  }
}
function AsmMainUiComponent_ng_container_18_ng_template_3_cx_csagent_login_form_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "cx-csagent-login-form", 23);
    \u0275\u0275pipe(1, "async");
    \u0275\u0275listener("submitEvent", function AsmMainUiComponent_ng_container_18_ng_template_3_cx_csagent_login_form_0_Template_cx_csagent_login_form_submitEvent_0_listener($event) {
      \u0275\u0275restoreView(_r11);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.loginCustomerSupportAgent($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("csAgentTokenLoading", \u0275\u0275pipeBind1(1, 1, ctx_r1.csAgentTokenLoading$));
  }
}
function AsmMainUiComponent_ng_container_18_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, AsmMainUiComponent_ng_container_18_ng_template_3_cx_csagent_login_form_0_Template, 2, 3, "cx-csagent-login-form", 22);
  }
  if (rf & 2) {
    const notCollapsed_r8 = \u0275\u0275nextContext().ngIf;
    \u0275\u0275property("ngIf", notCollapsed_r8);
  }
}
function AsmMainUiComponent_ng_container_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, AsmMainUiComponent_ng_container_18_ng_container_1_Template, 5, 4, "ng-container", 17);
    \u0275\u0275pipe(2, "async");
    \u0275\u0275template(3, AsmMainUiComponent_ng_container_18_ng_template_3_Template, 1, 1, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const showLoginForm_r12 = \u0275\u0275reference(4);
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", \u0275\u0275pipeBind1(2, 2, ctx_r1.customerSupportAgentLoggedIn$))("ngIfElse", showLoginForm_r12);
  }
}
var _c9 = (a0, a1) => ({
  customerA: a0,
  customerB: a1
});
var _c10 = (a0) => ({
  customerListsPage: a0
});
var _c11 = (a0) => ({
  customerSearchPage: a0
});
var _c12 = (a0, a1) => ({
  customerEntry: a0,
  column: a1,
  showHeader: false
});
var _c13 = (a0, a1) => ({
  customerEntry: a0,
  column: a1,
  showHeader: true
});
var _c14 = (a0, a1) => ({
  column: a0,
  customerEntry: a1
});
var _c15 = (a0) => ({
  count: a0
});
var _c16 = (a0) => ({
  ariaLabel: a0,
  ariaControls: "asm-cusomer-list-table"
});
function CustomerListComponent_10_ng_template_0_Template(rf, ctx) {
}
function CustomerListComponent_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, CustomerListComponent_10_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function CustomerListComponent_div_11_4_ng_template_0_Template(rf, ctx) {
}
function CustomerListComponent_div_11_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, CustomerListComponent_div_11_4_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function CustomerListComponent_div_11_5_ng_template_0_Template(rf, ctx) {
}
function CustomerListComponent_div_11_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, CustomerListComponent_div_11_5_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function CustomerListComponent_div_11_9_ng_template_0_Template(rf, ctx) {
}
function CustomerListComponent_div_11_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, CustomerListComponent_div_11_9_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function CustomerListComponent_div_11_10_ng_template_0_Template(rf, ctx) {
}
function CustomerListComponent_div_11_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, CustomerListComponent_div_11_10_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function CustomerListComponent_div_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 24);
    \u0275\u0275pipe(1, "async");
    \u0275\u0275elementStart(2, "div", 25);
    \u0275\u0275pipe(3, "async");
    \u0275\u0275template(4, CustomerListComponent_div_11_4_Template, 1, 0, null, 26)(5, CustomerListComponent_div_11_5_Template, 1, 0, null, 26);
    \u0275\u0275pipe(6, "async");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 27);
    \u0275\u0275pipe(8, "async");
    \u0275\u0275template(9, CustomerListComponent_div_11_9_Template, 1, 0, null, 14)(10, CustomerListComponent_div_11_10_Template, 1, 0, null, 14);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const customerListsPage_r2 = ctx.ngIf;
    const ctx_r2 = \u0275\u0275nextContext();
    const search_r4 = \u0275\u0275reference(35);
    const total_r5 = \u0275\u0275reference(37);
    const sort_r6 = \u0275\u0275reference(39);
    const groupSelector_r7 = \u0275\u0275reference(43);
    \u0275\u0275classProp("tablet-mobile", \u0275\u0275pipeBind1(1, 12, ctx_r2.breakpoint$) !== ctx_r2.BREAKPOINT.md);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("mobile", \u0275\u0275pipeBind1(3, 14, ctx_r2.breakpoint$) === ctx_r2.BREAKPOINT.xs);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngTemplateOutlet", groupSelector_r7)("ngTemplateOutletContext", \u0275\u0275pureFunction1(20, _c10, customerListsPage_r2));
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", total_r5)("ngTemplateOutletContext", \u0275\u0275pureFunction1(22, _c11, \u0275\u0275pipeBind1(6, 16, ctx_r2.customerSearchPage$)));
    \u0275\u0275advance(2);
    \u0275\u0275classProp("mobile", \u0275\u0275pipeBind1(8, 18, ctx_r2.breakpoint$) === ctx_r2.BREAKPOINT.xs);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngTemplateOutlet", sort_r6);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", search_r4);
  }
}
function CustomerListComponent_div_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 28);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "cxTranslate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "asm.customerList.noLists"), " ");
  }
}
function CustomerListComponent_div_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 28);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "cxTranslate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "asm.customerList.listsError"), " ");
  }
}
function CustomerListComponent_div_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 28);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "cxTranslate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "generalErrors.pageFailure"), " ");
  }
}
function CustomerListComponent_cx_spinner_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "cx-spinner");
  }
}
function CustomerListComponent_div_22_table_1_thead_4_th_2_span_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "cxTranslate");
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "asm.customerList.tableHeader.customerName"), " ");
  }
}
function CustomerListComponent_div_22_table_1_thead_4_th_2_span_1_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "cxTranslate");
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "asm.customerList.tableHeader.emailId"), " ");
  }
}
function CustomerListComponent_div_22_table_1_thead_4_th_2_span_1_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "cxTranslate");
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const column_r8 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, column_r8.headerLocalizationKey), " ");
  }
}
function CustomerListComponent_div_22_table_1_thead_4_th_2_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275template(1, CustomerListComponent_div_22_table_1_thead_4_th_2_span_1_ng_container_1_Template, 3, 3, "ng-container", 20)(2, CustomerListComponent_div_22_table_1_thead_4_th_2_span_1_ng_container_2_Template, 3, 3, "ng-container", 20)(3, CustomerListComponent_div_22_table_1_thead_4_th_2_span_1_ng_container_3_Template, 3, 3, "ng-container", 20);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const column_r8 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", column_r8.headerLocalizationKey === "asm.customerList.tableHeader.customer");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", column_r8.headerLocalizationKey === "asm.customerList.tableHeader.email");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", column_r8.headerLocalizationKey !== "asm.customerList.tableHeader.customer" && column_r8.headerLocalizationKey !== "asm.customerList.tableHeader.email");
  }
}
function CustomerListComponent_div_22_table_1_thead_4_th_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 36);
    \u0275\u0275template(1, CustomerListComponent_div_22_table_1_thead_4_th_2_span_1_Template, 4, 3, "span", 20);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const column_r8 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", column_r8.headerLocalizationKey && column_r8.headerLocalizationKey !== "hideHeaders");
  }
}
function CustomerListComponent_div_22_table_1_thead_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "thead")(1, "tr", 34);
    \u0275\u0275template(2, CustomerListComponent_div_22_table_1_thead_4_th_2_Template, 2, 1, "th", 35);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r2.customerListConfig == null ? null : ctx_r2.customerListConfig.columns);
  }
}
function CustomerListComponent_div_22_table_1_tr_7_ng_container_1_td_1_1_ng_template_0_Template(rf, ctx) {
}
function CustomerListComponent_div_22_table_1_tr_7_ng_container_1_td_1_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, CustomerListComponent_div_22_table_1_tr_7_ng_container_1_td_1_1_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function CustomerListComponent_div_22_table_1_tr_7_ng_container_1_td_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 39);
    \u0275\u0275template(1, CustomerListComponent_div_22_table_1_tr_7_ng_container_1_td_1_1_Template, 1, 0, null, 26);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const column_r9 = ctx.$implicit;
    const customerEntry_r10 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275nextContext(3);
    const cell_r11 = \u0275\u0275reference(31);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", cell_r11)("ngTemplateOutletContext", \u0275\u0275pureFunction2(2, _c12, customerEntry_r10, column_r9));
  }
}
function CustomerListComponent_div_22_table_1_tr_7_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, CustomerListComponent_div_22_table_1_tr_7_ng_container_1_td_1_Template, 2, 5, "td", 38);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r2.customerListConfig == null ? null : ctx_r2.customerListConfig.columns);
  }
}
function CustomerListComponent_div_22_table_1_tr_7_ng_container_3_ng_container_2_ng_container_1_1_ng_template_0_Template(rf, ctx) {
}
function CustomerListComponent_div_22_table_1_tr_7_ng_container_3_ng_container_2_ng_container_1_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, CustomerListComponent_div_22_table_1_tr_7_ng_container_3_ng_container_2_ng_container_1_1_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function CustomerListComponent_div_22_table_1_tr_7_ng_container_3_ng_container_2_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, CustomerListComponent_div_22_table_1_tr_7_ng_container_3_ng_container_2_ng_container_1_1_Template, 1, 0, null, 26);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const column_r12 = \u0275\u0275nextContext().$implicit;
    const customerEntry_r10 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275nextContext(3);
    const cell_r11 = \u0275\u0275reference(31);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", cell_r11)("ngTemplateOutletContext", \u0275\u0275pureFunction2(2, _c13, customerEntry_r10, column_r12));
  }
}
function CustomerListComponent_div_22_table_1_tr_7_ng_container_3_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, CustomerListComponent_div_22_table_1_tr_7_ng_container_3_ng_container_2_ng_container_1_Template, 2, 5, "ng-container", 20);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const even_r13 = ctx.even;
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", even_r13);
  }
}
function CustomerListComponent_div_22_table_1_tr_7_ng_container_3_ng_container_4_ng_container_1_1_ng_template_0_Template(rf, ctx) {
}
function CustomerListComponent_div_22_table_1_tr_7_ng_container_3_ng_container_4_ng_container_1_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, CustomerListComponent_div_22_table_1_tr_7_ng_container_3_ng_container_4_ng_container_1_1_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function CustomerListComponent_div_22_table_1_tr_7_ng_container_3_ng_container_4_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, CustomerListComponent_div_22_table_1_tr_7_ng_container_3_ng_container_4_ng_container_1_1_Template, 1, 0, null, 26);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const column_r14 = \u0275\u0275nextContext().$implicit;
    const customerEntry_r10 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275nextContext(3);
    const cell_r11 = \u0275\u0275reference(31);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", cell_r11)("ngTemplateOutletContext", \u0275\u0275pureFunction2(2, _c13, customerEntry_r10, column_r14));
  }
}
function CustomerListComponent_div_22_table_1_tr_7_ng_container_3_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, CustomerListComponent_div_22_table_1_tr_7_ng_container_3_ng_container_4_ng_container_1_Template, 2, 5, "ng-container", 20);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const odd_r15 = ctx.odd;
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", odd_r15);
  }
}
function CustomerListComponent_div_22_table_1_tr_7_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "td", 40);
    \u0275\u0275template(2, CustomerListComponent_div_22_table_1_tr_7_ng_container_3_ng_container_2_Template, 2, 1, "ng-container", 41);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 40);
    \u0275\u0275template(4, CustomerListComponent_div_22_table_1_tr_7_ng_container_3_ng_container_4_Template, 2, 1, "ng-container", 41);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r2.customerListConfig == null ? null : ctx_r2.customerListConfig.columns);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r2.customerListConfig == null ? null : ctx_r2.customerListConfig.columns);
  }
}
function CustomerListComponent_div_22_table_1_tr_7_td_5_ng_container_1_1_ng_template_0_Template(rf, ctx) {
}
function CustomerListComponent_div_22_table_1_tr_7_td_5_ng_container_1_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, CustomerListComponent_div_22_table_1_tr_7_td_5_ng_container_1_1_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function CustomerListComponent_div_22_table_1_tr_7_td_5_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, CustomerListComponent_div_22_table_1_tr_7_td_5_ng_container_1_1_Template, 1, 0, null, 26);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const column_r16 = ctx.$implicit;
    const customerEntry_r10 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275nextContext(3);
    const cell_r11 = \u0275\u0275reference(31);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", cell_r11)("ngTemplateOutletContext", \u0275\u0275pureFunction2(2, _c13, customerEntry_r10, column_r16));
  }
}
function CustomerListComponent_div_22_table_1_tr_7_td_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 40);
    \u0275\u0275template(1, CustomerListComponent_div_22_table_1_tr_7_td_5_ng_container_1_Template, 2, 5, "ng-container", 41);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r2.customerListConfig == null ? null : ctx_r2.customerListConfig.columns);
  }
}
function CustomerListComponent_div_22_table_1_tr_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr", 34);
    \u0275\u0275template(1, CustomerListComponent_div_22_table_1_tr_7_ng_container_1_Template, 2, 1, "ng-container", 20);
    \u0275\u0275pipe(2, "async");
    \u0275\u0275template(3, CustomerListComponent_div_22_table_1_tr_7_ng_container_3_Template, 5, 2, "ng-container", 20);
    \u0275\u0275pipe(4, "async");
    \u0275\u0275template(5, CustomerListComponent_div_22_table_1_tr_7_td_5_Template, 2, 1, "td", 37);
    \u0275\u0275pipe(6, "async");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", \u0275\u0275pipeBind1(2, 3, ctx_r2.breakpoint$) === ctx_r2.BREAKPOINT.md);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", \u0275\u0275pipeBind1(4, 5, ctx_r2.breakpoint$) === ctx_r2.BREAKPOINT.sm);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", \u0275\u0275pipeBind1(6, 7, ctx_r2.breakpoint$) === ctx_r2.BREAKPOINT.xs);
  }
}
function CustomerListComponent_div_22_table_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "table", 31)(1, "caption", 32);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "cxTranslate");
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, CustomerListComponent_div_22_table_1_thead_4_Template, 3, 1, "thead", 20);
    \u0275\u0275pipe(5, "async");
    \u0275\u0275elementStart(6, "tbody");
    \u0275\u0275template(7, CustomerListComponent_div_22_table_1_tr_7_Template, 7, 9, "tr", 33);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const customerSearchPage_r17 = \u0275\u0275nextContext().ngIf;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 3, "asm.customerList.title"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", \u0275\u0275pipeBind1(5, 5, ctx_r2.breakpoint$) === ctx_r2.BREAKPOINT.md);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", customerSearchPage_r17 == null ? null : customerSearchPage_r17.entries);
  }
}
function CustomerListComponent_div_22_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 42);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "cxTranslate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "asm.customerList.noCustomers"), " ");
  }
}
function CustomerListComponent_div_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275template(1, CustomerListComponent_div_22_table_1_Template, 8, 7, "table", 29)(2, CustomerListComponent_div_22_div_2_Template, 3, 3, "div", 30);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const customerSearchPage_r17 = ctx.ngIf;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.loaded);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !(customerSearchPage_r17 == null ? null : customerSearchPage_r17.entries.length));
  }
}
function CustomerListComponent_div_24_div_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div")(1, "cx-pagination", 44);
    \u0275\u0275listener("viewPageEvent", function CustomerListComponent_div_24_div_4_Template_cx_pagination_viewPageEvent_1_listener($event) {
      \u0275\u0275restoreView(_r18);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.changePage($event));
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const customerSearchPage_r19 = ctx.ngIf;
    \u0275\u0275advance();
    \u0275\u0275property("pagination", customerSearchPage_r19.pagination);
  }
}
function CustomerListComponent_div_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 43);
    \u0275\u0275pipe(1, "async");
    \u0275\u0275elementStart(2, "div", 27);
    \u0275\u0275pipe(3, "async");
    \u0275\u0275template(4, CustomerListComponent_div_24_div_4_Template, 2, 1, "div", 20);
    \u0275\u0275pipe(5, "async");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classProp("asm-mobile-pagination", \u0275\u0275pipeBind1(1, 5, ctx_r2.breakpoint$) !== ctx_r2.BREAKPOINT.md);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("mobile", \u0275\u0275pipeBind1(3, 7, ctx_r2.breakpoint$) === ctx_r2.BREAKPOINT.xs);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", \u0275\u0275pipeBind1(5, 9, ctx_r2.customerSearchPage$));
  }
}
function CustomerListComponent_ng_template_30_div_0_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 50);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "cxTranslate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const column_r20 = \u0275\u0275nextContext(2).column;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, column_r20.headerLocalizationKey), " ");
  }
}
function CustomerListComponent_ng_template_30_div_0_ng_container_2_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function CustomerListComponent_ng_template_30_div_0_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, CustomerListComponent_ng_template_30_div_0_ng_container_2_ng_container_1_Template, 1, 0, "ng-container", 26);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r20 = \u0275\u0275nextContext(2);
    const customerEntry_r22 = ctx_r20.customerEntry;
    const column_r20 = ctx_r20.column;
    \u0275\u0275nextContext();
    const cellContent_r23 = \u0275\u0275reference(33);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", cellContent_r23)("ngTemplateOutletContext", \u0275\u0275pureFunction2(2, _c14, column_r20, customerEntry_r22));
  }
}
function CustomerListComponent_ng_template_30_div_0_div_3_img_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 54);
    \u0275\u0275pipe(1, "cxTranslate");
  }
  if (rf & 2) {
    const customerEntry_r22 = \u0275\u0275nextContext(3).customerEntry;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275propertyInterpolate("alt", \u0275\u0275pipeBind1(1, 2, "asm.mainLogoLabel"));
    \u0275\u0275attribute("src", (ctx_r2.occConfig == null ? null : ctx_r2.occConfig.backend == null ? null : ctx_r2.occConfig.backend.occ == null ? null : ctx_r2.occConfig.backend.occ.baseUrl) + (customerEntry_r22 == null ? null : customerEntry_r22.userAvatar == null ? null : customerEntry_r22.userAvatar.url), \u0275\u0275sanitizeUrl);
  }
}
function CustomerListComponent_ng_template_30_div_0_div_3_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 55);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const customerEntry_r22 = \u0275\u0275nextContext(3).customerEntry;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.getBadgeText(customerEntry_r22), " ");
  }
}
function CustomerListComponent_ng_template_30_div_0_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 51);
    \u0275\u0275template(1, CustomerListComponent_ng_template_30_div_0_div_3_img_1_Template, 2, 4, "img", 52)(2, CustomerListComponent_ng_template_30_div_0_div_3_div_2_Template, 2, 1, "div", 53);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const customerEntry_r22 = \u0275\u0275nextContext(2).customerEntry;
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", customerEntry_r22 == null ? null : customerEntry_r22.userAvatar == null ? null : customerEntry_r22.userAvatar.url);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !(customerEntry_r22 == null ? null : customerEntry_r22.userAvatar == null ? null : customerEntry_r22.userAvatar.url));
  }
}
function CustomerListComponent_ng_template_30_div_0_button_4_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function CustomerListComponent_ng_template_30_div_0_button_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r24 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 56);
    \u0275\u0275pipe(1, "cxTranslate");
    \u0275\u0275pipe(2, "cxTranslate");
    \u0275\u0275listener("click", function CustomerListComponent_ng_template_30_div_0_button_4_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r24);
      const ctx_r20 = \u0275\u0275nextContext(2);
      const customerEntry_r22 = ctx_r20.customerEntry;
      const column_r20 = ctx_r20.column;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.startColumnAction(customerEntry_r22, column_r20.actionType));
    });
    \u0275\u0275template(3, CustomerListComponent_ng_template_30_div_0_button_4_ng_container_3_Template, 1, 0, "ng-container", 26);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_17_0;
    let tmp_18_0;
    const ctx_r20 = \u0275\u0275nextContext(2);
    const customerEntry_r22 = ctx_r20.customerEntry;
    const column_r20 = ctx_r20.column;
    const ctx_r2 = \u0275\u0275nextContext();
    const cellContent_r23 = \u0275\u0275reference(33);
    \u0275\u0275classMap(column_r20.actionType === "ACTIVE_CART" ? "cx-cart" : "");
    \u0275\u0275property("disabled", ctx_r2.isRequired(customerEntry_r22, column_r20.actionType));
    \u0275\u0275attribute("title", column_r20.icon ? \u0275\u0275pipeBind1(1, 7, (tmp_17_0 = column_r20.icon.captionLocalizationKey) !== null && tmp_17_0 !== void 0 ? tmp_17_0 : column_r20.headerLocalizationKey) : void 0)("aria-label", column_r20.icon ? \u0275\u0275pipeBind1(2, 9, (tmp_18_0 = column_r20.icon.captionLocalizationKey) !== null && tmp_18_0 !== void 0 ? tmp_18_0 : column_r20.headerLocalizationKey) : void 0);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngTemplateOutlet", cellContent_r23)("ngTemplateOutletContext", \u0275\u0275pureFunction2(11, _c14, column_r20, customerEntry_r22));
  }
}
function CustomerListComponent_ng_template_30_div_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 46);
    \u0275\u0275template(1, CustomerListComponent_ng_template_30_div_0_span_1_Template, 3, 3, "span", 47)(2, CustomerListComponent_ng_template_30_div_0_ng_container_2_Template, 2, 5, "ng-container", 20)(3, CustomerListComponent_ng_template_30_div_0_div_3_Template, 3, 2, "div", 48)(4, CustomerListComponent_ng_template_30_div_0_button_4_Template, 4, 14, "button", 49);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r20 = \u0275\u0275nextContext();
    const column_r20 = ctx_r20.column;
    const showHeader_r25 = ctx_r20.showHeader;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", showHeader_r25);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !column_r20.actionType);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (ctx_r2.customerListConfig == null ? null : ctx_r2.customerListConfig.showAvatar) && (column_r20 == null ? null : column_r20.actionType) === (ctx_r2.customerListColumnActionType == null ? null : ctx_r2.customerListColumnActionType.START_SESSION));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", column_r20.actionType);
  }
}
function CustomerListComponent_ng_template_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, CustomerListComponent_ng_template_30_div_0_Template, 5, 4, "div", 45);
  }
  if (rf & 2) {
    const column_r20 = ctx.column;
    \u0275\u0275property("ngIf", column_r20.headerLocalizationKey !== "hideHeaders");
  }
}
function CustomerListComponent_ng_template_32_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r25 = \u0275\u0275nextContext();
    const customerEntry_r27 = ctx_r25.customerEntry;
    const column_r28 = ctx_r25.column;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate((column_r28.renderer == null ? null : column_r28.renderer(customerEntry_r27)) || "");
  }
}
function CustomerListComponent_ng_template_32_cx_icon_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "cx-icon", 58);
    \u0275\u0275pipe(1, "cxTranslate");
    \u0275\u0275pipe(2, "cxTranslate");
  }
  if (rf & 2) {
    let tmp_15_0;
    let tmp_16_0;
    const ctx_r25 = \u0275\u0275nextContext();
    const customerEntry_r27 = ctx_r25.customerEntry;
    const column_r28 = ctx_r25.column;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classProp("cx-action-color", column_r28.actionType && !ctx_r2.isRequired(customerEntry_r27, column_r28.actionType));
    \u0275\u0275property("type", column_r28.icon.symbol);
    \u0275\u0275attribute("title", !column_r28.actionType ? \u0275\u0275pipeBind1(1, 5, (tmp_15_0 = column_r28.icon.captionLocalizationKey) !== null && tmp_15_0 !== void 0 ? tmp_15_0 : column_r28.headerLocalizationKey) : void 0)("aria-label", !column_r28.actionType ? \u0275\u0275pipeBind1(2, 7, (tmp_16_0 = column_r28.icon.captionLocalizationKey) !== null && tmp_16_0 !== void 0 ? tmp_16_0 : column_r28.headerLocalizationKey) : void 0);
  }
}
function CustomerListComponent_ng_template_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275template(1, CustomerListComponent_ng_template_32_span_1_Template, 2, 1, "span", 20)(2, CustomerListComponent_ng_template_32_cx_icon_2_Template, 3, 9, "cx-icon", 57);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const column_r28 = ctx.column;
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !column_r28.icon);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", column_r28.icon);
  }
}
function CustomerListComponent_ng_template_34_Template(rf, ctx) {
  if (rf & 1) {
    const _r29 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 59)(1, "input", 60);
    \u0275\u0275pipe(2, "cxTranslate");
    \u0275\u0275pipe(3, "cxTranslate");
    \u0275\u0275listener("keyup", function CustomerListComponent_ng_template_34_Template_input_keyup_1_listener($event) {
      \u0275\u0275restoreView(_r29);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onKey($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "cx-icon", 61);
    \u0275\u0275pipe(5, "cxTranslate");
    \u0275\u0275listener("click", function CustomerListComponent_ng_template_34_Template_cx_icon_click_4_listener() {
      \u0275\u0275restoreView(_r29);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.searchCustomers());
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275propertyInterpolate("placeholder", \u0275\u0275pipeBind1(2, 5, "asm.customerList.searchBox"));
    \u0275\u0275property("formControl", ctx_r2.searchBox);
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(3, 7, "asm.customerList.enterSearchBox"));
    \u0275\u0275advance(3);
    \u0275\u0275property("type", ctx_r2.iconTypes.SEARCH);
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(5, 9, "storeFinder.searchNearestStores"));
  }
}
function CustomerListComponent_ng_template_36_span_0_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "cxTranslate");
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const customerSearchPage_r30 = \u0275\u0275nextContext(2).customerSearchPage;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(2, 1, "asm.customerList.noOfCustomers", \u0275\u0275pureFunction1(4, _c15, customerSearchPage_r30 == null ? null : customerSearchPage_r30.pagination == null ? null : customerSearchPage_r30.pagination.totalResults)), " ");
  }
}
function CustomerListComponent_ng_template_36_span_0_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "cxTranslate");
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "asm.customerList.oneCustomer"), " ");
  }
}
function CustomerListComponent_ng_template_36_span_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 63);
    \u0275\u0275template(1, CustomerListComponent_ng_template_36_span_0_ng_container_1_Template, 3, 6, "ng-container", 20)(2, CustomerListComponent_ng_template_36_span_0_ng_container_2_Template, 3, 3, "ng-container", 20);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const customerSearchPage_r30 = \u0275\u0275nextContext().customerSearchPage;
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (customerSearchPage_r30 == null ? null : customerSearchPage_r30.pagination == null ? null : customerSearchPage_r30.pagination.totalResults) > 1);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (customerSearchPage_r30 == null ? null : customerSearchPage_r30.pagination == null ? null : customerSearchPage_r30.pagination.totalResults) === 1);
  }
}
function CustomerListComponent_ng_template_36_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, CustomerListComponent_ng_template_36_span_0_Template, 3, 2, "span", 62);
  }
  if (rf & 2) {
    const customerSearchPage_r30 = ctx.customerSearchPage;
    \u0275\u0275property("ngIf", customerSearchPage_r30 == null ? null : customerSearchPage_r30.pagination == null ? null : customerSearchPage_r30.pagination.totalResults);
  }
}
function CustomerListComponent_ng_template_38_Template(rf, ctx) {
  if (rf & 1) {
    const _r31 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "label")(1, "span", 32);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "cxTranslate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "cx-sorting", 64);
    \u0275\u0275pipe(5, "cxTranslate");
    \u0275\u0275pipe(6, "async");
    \u0275\u0275listener("sortListEvent", function CustomerListComponent_ng_template_38_Template_cx_sorting_sortListEvent_4_listener($event) {
      \u0275\u0275restoreView(_r31);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.changeSortCode($event));
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 6, "asm.customerList.tableSort.sortBy"));
    \u0275\u0275advance(2);
    \u0275\u0275propertyInterpolate("placeholder", \u0275\u0275pipeBind1(5, 8, "asm.customerList.tableSort.sortBy"));
    \u0275\u0275property("sortOptions", ctx_r2.sorts)("sortLabels", \u0275\u0275pipeBind1(6, 10, ctx_r2.getSortLabels()))("selectedOption", ctx_r2.sortCode)("cxNgSelectA11y", \u0275\u0275pureFunction1(12, _c16, ctx_r2.sortCode));
  }
}
function CustomerListComponent_ng_template_40_button_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r32 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 68);
    \u0275\u0275listener("click", function CustomerListComponent_ng_template_40_button_4_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r32);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.goToPreviousPage());
    });
    \u0275\u0275element(1, "cx-icon", 69);
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "cxTranslate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275property("disabled", ctx_r2.currentPage === 0 || !ctx_r2.loaded);
    \u0275\u0275advance();
    \u0275\u0275property("type", ctx_r2.iconTypes.CARET_LEFT);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 3, "asm.customerList.page.previous"));
  }
}
function CustomerListComponent_ng_template_40_button_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r33 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 70);
    \u0275\u0275listener("click", function CustomerListComponent_ng_template_40_button_5_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r33);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.goToNextPage());
    });
    \u0275\u0275elementStart(1, "span");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "cxTranslate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(4, "cx-icon", 71);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275property("disabled", ctx_r2.currentPage === ctx_r2.maxPage || !ctx_r2.loaded);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 3, "asm.customerList.page.next"));
    \u0275\u0275advance(2);
    \u0275\u0275property("type", ctx_r2.iconTypes.CARET_RIGHT);
  }
}
function CustomerListComponent_ng_template_40_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 65)(1, "div");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "cxTranslate");
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, CustomerListComponent_ng_template_40_button_4_Template, 5, 5, "button", 66)(5, CustomerListComponent_ng_template_40_button_5_Template, 5, 5, "button", 67);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(3, 3, "asm.customerList.page.page", \u0275\u0275pureFunction1(6, _c15, ctx_r2.currentPage + 1)), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r2.maxPage > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.maxPage > 0);
  }
}
function CustomerListComponent_ng_template_42_Template(rf, ctx) {
  if (rf & 1) {
    const _r34 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "label")(1, "span", 32);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "cxTranslate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "ng-select", 72);
    \u0275\u0275listener("change", function CustomerListComponent_ng_template_42_Template_ng_select_change_4_listener() {
      \u0275\u0275restoreView(_r34);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onChangeCustomerGroup());
    });
    \u0275\u0275twoWayListener("ngModelChange", function CustomerListComponent_ng_template_42_Template_ng_select_ngModelChange_4_listener($event) {
      \u0275\u0275restoreView(_r34);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.selectedUserGroupId, $event) || (ctx_r2.selectedUserGroupId = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const customerListsPage_r35 = ctx.customerListsPage;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 7, "asm.customerList.title"));
    \u0275\u0275advance(2);
    \u0275\u0275property("searchable", false)("clearable", false)("tabIndex", 0);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.selectedUserGroupId);
    \u0275\u0275property("items", customerListsPage_r35 == null ? null : customerListsPage_r35.userGroups)("cxNgSelectA11y", \u0275\u0275pureFunction1(9, _c16, ctx_r2.getGroupName(customerListsPage_r35, ctx_r2.selectedUserGroupId)));
  }
}
function CustomerListComponent_ng_template_44_Template(rf, ctx) {
  if (rf & 1) {
    const _r36 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 73);
    \u0275\u0275pipe(1, "cxTranslate");
    \u0275\u0275listener("click", function CustomerListComponent_ng_template_44_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r36);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.closeModal("Cross click"));
    });
    \u0275\u0275elementStart(2, "span", 74);
    \u0275\u0275element(3, "cx-icon", 58);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(1, 2, "common.close"));
    \u0275\u0275advance(3);
    \u0275\u0275property("type", ctx_r2.iconTypes.CLOSE);
  }
}
function CustomerListComponent_ng_template_46_Template(rf, ctx) {
  if (rf & 1) {
    const _r37 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 75);
    \u0275\u0275listener("click", function CustomerListComponent_ng_template_46_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r37);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.createCustomer());
    });
    \u0275\u0275element(1, "cx-icon", 58);
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "cxTranslate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("type", ctx_r2.iconTypes.USER_PLUS);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 2, "asm.customerList.createCustomer"));
  }
}
var BIND_CART_DIALOG_ACTION;
(function(BIND_CART_DIALOG_ACTION2) {
  BIND_CART_DIALOG_ACTION2["CANCEL"] = "CANCEL";
  BIND_CART_DIALOG_ACTION2["REPLACE"] = "REPLACE";
})(BIND_CART_DIALOG_ACTION || (BIND_CART_DIALOG_ACTION = {}));
var _AsmBindCartDialogComponent = class _AsmBindCartDialogComponent {
  constructor(launchDialogService) {
    this.launchDialogService = launchDialogService;
    this.BIND_CART_ACTION = BIND_CART_DIALOG_ACTION;
    this.focusConfig = {
      trap: true,
      block: true,
      autofocus: true,
      focusOnEscape: true
    };
  }
  closeModal(reason) {
    this.launchDialogService.closeDialog(reason);
  }
};
_AsmBindCartDialogComponent.\u0275fac = function AsmBindCartDialogComponent_Factory(t) {
  return new (t || _AsmBindCartDialogComponent)(\u0275\u0275directiveInject(LaunchDialogService));
};
_AsmBindCartDialogComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
  type: _AsmBindCartDialogComponent,
  selectors: [["cx-asm-bind-cart-dialog"]],
  decls: 20,
  vars: 19,
  consts: [[1, "cx-asm-bind-cart-dialog", "cx-modal-container", "cx-asm-dialog", 3, "esc", "cxFocus"], [1, "cx-modal-content"], [1, "cx-dialog-header", "modal-header"], ["id", "asm-bind-cart-dialog-title", 1, "title", "modal-title"], [1, "cx-dialog-body", "modal-body"], [1, "cx-dialog-row"], [1, "cx-dialog-item"], [1, "cx-dialog-footer", "modal-footer"], ["type", "button", 1, "btn", "btn-primary", 3, "click"], ["type", "button", 1, "btn", "btn-secondary", 3, "click"]],
  template: function AsmBindCartDialogComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275listener("esc", function AsmBindCartDialogComponent_Template_div_esc_0_listener() {
        return ctx.closeModal(ctx.BIND_CART_ACTION.CANCEL);
      });
      \u0275\u0275elementStart(1, "div", 1)(2, "div", 2)(3, "h2", 3);
      \u0275\u0275text(4);
      \u0275\u0275pipe(5, "cxTranslate");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(6, "div", 4)(7, "div", 5)(8, "div", 6);
      \u0275\u0275text(9);
      \u0275\u0275pipe(10, "cxTranslate");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(11, "div", 7)(12, "button", 8);
      \u0275\u0275pipe(13, "cxTranslate");
      \u0275\u0275listener("click", function AsmBindCartDialogComponent_Template_button_click_12_listener() {
        return ctx.closeModal(ctx.BIND_CART_ACTION.REPLACE);
      });
      \u0275\u0275text(14);
      \u0275\u0275pipe(15, "cxTranslate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(16, "button", 9);
      \u0275\u0275pipe(17, "cxTranslate");
      \u0275\u0275listener("click", function AsmBindCartDialogComponent_Template_button_click_16_listener() {
        return ctx.closeModal(ctx.BIND_CART_ACTION.CANCEL);
      });
      \u0275\u0275text(18);
      \u0275\u0275pipe(19, "cxTranslate");
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      \u0275\u0275property("cxFocus", ctx.focusConfig);
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(5, 7, "asm.bindCart.dialog.title"), " ");
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(10, 9, "asm.bindCart.dialog.body"), " ");
      \u0275\u0275advance(3);
      \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(13, 11, "asm.bindCart.dialog.actions.replace"));
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(15, 13, "asm.bindCart.dialog.actions.replace"), " ");
      \u0275\u0275advance(2);
      \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(17, 15, "common.cancel"));
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(19, 17, "common.cancel"), " ");
    }
  },
  dependencies: [FocusDirective, TranslatePipe],
  encapsulation: 2
});
var AsmBindCartDialogComponent = _AsmBindCartDialogComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AsmBindCartDialogComponent, [{
    type: Component,
    args: [{
      selector: "cx-asm-bind-cart-dialog",
      template: `<div
  class="cx-asm-bind-cart-dialog cx-modal-container cx-asm-dialog"
  [cxFocus]="focusConfig"
  (esc)="closeModal(BIND_CART_ACTION.CANCEL)"
>
  <div class="cx-modal-content">
    <!-- Modal Header -->
    <div class="cx-dialog-header modal-header">
      <h2 id="asm-bind-cart-dialog-title" class="title modal-title">
        {{ 'asm.bindCart.dialog.title' | cxTranslate }}
      </h2>
    </div>

    <!-- Modal Body -->
    <div class="cx-dialog-body modal-body">
      <div class="cx-dialog-row">
        <div class="cx-dialog-item">
          {{ 'asm.bindCart.dialog.body' | cxTranslate }}
        </div>
      </div>
    </div>

    <!-- Modal Footer -->
    <div class="cx-dialog-footer modal-footer">
      <button
        (click)="closeModal(BIND_CART_ACTION.REPLACE)"
        [attr.aria-label]="'asm.bindCart.dialog.actions.replace' | cxTranslate"
        class="btn btn-primary"
        type="button"
      >
        {{ 'asm.bindCart.dialog.actions.replace' | cxTranslate }}
      </button>

      <button
        (click)="closeModal(BIND_CART_ACTION.CANCEL)"
        [attr.aria-label]="'common.cancel' | cxTranslate"
        class="btn btn-secondary"
        type="button"
      >
        {{ 'common.cancel' | cxTranslate }}
      </button>
    </div>
  </div>
</div>
`
    }]
  }], () => [{
    type: LaunchDialogService
  }], null);
})();
var SAVE_CART_DIALOG_ACTION;
(function(SAVE_CART_DIALOG_ACTION2) {
  SAVE_CART_DIALOG_ACTION2["CANCEL"] = "CANCEL";
  SAVE_CART_DIALOG_ACTION2["SAVE"] = "SAVE";
})(SAVE_CART_DIALOG_ACTION || (SAVE_CART_DIALOG_ACTION = {}));
var _AsmSaveCartDialogComponent = class _AsmSaveCartDialogComponent {
  constructor(launchDialogService, savedCartFacade) {
    this.launchDialogService = launchDialogService;
    this.savedCartFacade = savedCartFacade;
    this.BIND_CART_ACTION = SAVE_CART_DIALOG_ACTION;
    this.showDialogAlert$ = new BehaviorSubject(true);
    this.globalMessageType = GlobalMessageType;
    this.focusConfig = {
      trap: true,
      block: true,
      autofocus: true,
      focusOnEscape: true
    };
  }
  ngOnInit() {
    this.launchDialogService.data$.pipe(take(1)).subscribe((data) => {
      this.cart = data;
      this.setCartTotalQty();
    });
  }
  setCartTotalQty() {
    let count = 0;
    if (this.cart.entries) {
      for (const entry of this.cart.entries) {
        count += entry.quantity ? entry.quantity : 0;
      }
    }
    this.cartQty = count;
  }
  closeDialogAlert() {
    this.showDialogAlert$.next(false);
  }
  closeModal(reason) {
    if (reason === SAVE_CART_DIALOG_ACTION.SAVE) {
      this.saveCart();
    }
    this.launchDialogService.closeDialog(reason);
  }
  saveCart() {
    this.savedCartFacade.saveCart({
      cartId: this.cart.code,
      saveCartName: this.cart.code,
      saveCartDescription: "-"
    });
  }
};
_AsmSaveCartDialogComponent.\u0275fac = function AsmSaveCartDialogComponent_Factory(t) {
  return new (t || _AsmSaveCartDialogComponent)(\u0275\u0275directiveInject(LaunchDialogService), \u0275\u0275directiveInject(SavedCartFacade));
};
_AsmSaveCartDialogComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
  type: _AsmSaveCartDialogComponent,
  selectors: [["cx-asm-save-cart-dialog"]],
  decls: 38,
  vars: 31,
  consts: [["showSaveCartWarning", ""], [1, "cx-asm-save-cart-dialog", "cx-modal-container", "cx-asm-dialog", 3, "esc", "cxFocus"], [1, "cx-modal-content"], [1, "cx-dialog-header", "modal-header"], ["id", "asm-save-cart-dialog-title", 1, "title", "modal-title"], [1, "cx-dialog-body", "modal-body"], [4, "ngIf", "ngIfElse"], [1, "cx-dialog-content"], [1, "cx-dialog-row", "row"], [1, "cx-dialog-item", "col-sm-6", "col-md-6", "text-right", "item-left-text"], [1, "cx-dialog-item", "col-sm-6", "col-md-6", "text-left", "item-right-text"], [1, "cx-dialog-footer", "modal-footer"], ["id", "asm-save-cart-dialog-btn", "type", "button", 1, "btn", "btn-primary", 3, "click", "disabled"], ["type", "button", 1, "btn", "btn-secondary", 3, "click"], [1, "message-container"], [3, "text", "type", "closeMessage", 4, "ngIf"], [3, "closeMessage", "text", "type"]],
  template: function AsmSaveCartDialogComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "div", 1);
      \u0275\u0275listener("esc", function AsmSaveCartDialogComponent_Template_div_esc_0_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.closeModal(ctx.BIND_CART_ACTION.CANCEL));
      });
      \u0275\u0275elementStart(1, "div", 2)(2, "div", 3)(3, "h2", 4);
      \u0275\u0275text(4);
      \u0275\u0275pipe(5, "cxTranslate");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(6, "div", 5);
      \u0275\u0275template(7, AsmSaveCartDialogComponent_ng_container_7_Template, 4, 3, "ng-container", 6)(8, AsmSaveCartDialogComponent_ng_template_8_Template, 3, 3, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
      \u0275\u0275elementStart(10, "div", 7)(11, "div", 8)(12, "div", 9);
      \u0275\u0275text(13);
      \u0275\u0275pipe(14, "cxTranslate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(15, "div", 10);
      \u0275\u0275text(16);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(17, "div", 8)(18, "div", 9);
      \u0275\u0275text(19);
      \u0275\u0275pipe(20, "cxTranslate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(21, "div", 10);
      \u0275\u0275text(22);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(23, "div", 8)(24, "div", 9);
      \u0275\u0275text(25);
      \u0275\u0275pipe(26, "cxTranslate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(27, "div", 10);
      \u0275\u0275text(28);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(29, "div", 11)(30, "button", 12);
      \u0275\u0275pipe(31, "cxTranslate");
      \u0275\u0275listener("click", function AsmSaveCartDialogComponent_Template_button_click_30_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.closeModal(ctx.BIND_CART_ACTION.SAVE));
      });
      \u0275\u0275text(32);
      \u0275\u0275pipe(33, "cxTranslate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(34, "button", 13);
      \u0275\u0275pipe(35, "cxTranslate");
      \u0275\u0275listener("click", function AsmSaveCartDialogComponent_Template_button_click_34_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.closeModal(ctx.BIND_CART_ACTION.CANCEL));
      });
      \u0275\u0275text(36);
      \u0275\u0275pipe(37, "cxTranslate");
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      const showSaveCartWarning_r5 = \u0275\u0275reference(9);
      \u0275\u0275property("cxFocus", ctx.focusConfig);
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(5, 15, "asm.saveCart.dialog.title"), " ");
      \u0275\u0275advance(3);
      \u0275\u0275property("ngIf", ctx.cartQty > 0)("ngIfElse", showSaveCartWarning_r5);
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(14, 17, "asm.saveCart.dialog.row.id"), " ");
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", ctx.cart.code, " ");
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(20, 19, "asm.saveCart.dialog.row.qty"), " ");
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", ctx.cartQty, " ");
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(26, 21, "asm.saveCart.dialog.row.total"), " ");
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", ctx.cart.totalPriceWithTax == null ? null : ctx.cart.totalPriceWithTax.formattedValue, " ");
      \u0275\u0275advance(2);
      \u0275\u0275property("disabled", ctx.cartQty === 0);
      \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(31, 23, "asm.saveCart.dialog.actions.save"));
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(33, 25, "asm.saveCart.dialog.actions.save"), " ");
      \u0275\u0275advance(2);
      \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(35, 27, "common.cancel"));
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(37, 29, "common.cancel"), " ");
    }
  },
  dependencies: [NgIf, FocusDirective, MessageComponent, AsyncPipe, TranslatePipe],
  encapsulation: 2
});
var AsmSaveCartDialogComponent = _AsmSaveCartDialogComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AsmSaveCartDialogComponent, [{
    type: Component,
    args: [{
      selector: "cx-asm-save-cart-dialog",
      template: `<div
  class="cx-asm-save-cart-dialog cx-modal-container cx-asm-dialog"
  [cxFocus]="focusConfig"
  (esc)="closeModal(BIND_CART_ACTION.CANCEL)"
>
  <div class="cx-modal-content">
    <!-- Modal Header -->
    <div class="cx-dialog-header modal-header">
      <h2 id="asm-save-cart-dialog-title" class="title modal-title">
        {{ 'asm.saveCart.dialog.title' | cxTranslate }}
      </h2>
    </div>

    <!-- Modal Body -->
    <div class="cx-dialog-body modal-body">
      <ng-container *ngIf="cartQty > 0; else showSaveCartWarning">
        <div class="message-container">
          <cx-message
            *ngIf="showDialogAlert$ | async"
            [text]="'asm.saveCart.dialog.saveInfo' | cxTranslate"
            [type]="globalMessageType.MSG_TYPE_INFO"
            (closeMessage)="closeDialogAlert()"
          >
          </cx-message>
        </div>
      </ng-container>
      <ng-template #showSaveCartWarning>
        <div class="message-container">
          <cx-message
            *ngIf="showDialogAlert$ | async"
            [text]="'asm.saveCart.dialog.disableInfo' | cxTranslate"
            [type]="globalMessageType.MSG_TYPE_WARNING"
            (closeMessage)="closeDialogAlert()"
          >
          </cx-message>
        </div>
      </ng-template>

      <div class="cx-dialog-content">
        <div class="cx-dialog-row row">
          <div
            class="cx-dialog-item col-sm-6 col-md-6 text-right item-left-text"
          >
            {{ 'asm.saveCart.dialog.row.id' | cxTranslate }}
          </div>
          <div
            class="cx-dialog-item col-sm-6 col-md-6 text-left item-right-text"
          >
            {{ cart.code }}
          </div>
        </div>
        <div class="cx-dialog-row row">
          <div
            class="cx-dialog-item col-sm-6 col-md-6 text-right item-left-text"
          >
            {{ 'asm.saveCart.dialog.row.qty' | cxTranslate }}
          </div>
          <div
            class="cx-dialog-item col-sm-6 col-md-6 text-left item-right-text"
          >
            {{ cartQty }}
          </div>
        </div>
        <div class="cx-dialog-row row">
          <div
            class="cx-dialog-item col-sm-6 col-md-6 text-right item-left-text"
          >
            {{ 'asm.saveCart.dialog.row.total' | cxTranslate }}
          </div>
          <div
            class="cx-dialog-item col-sm-6 col-md-6 text-left item-right-text"
          >
            {{ cart.totalPriceWithTax?.formattedValue }}
          </div>
        </div>
      </div>
    </div>

    <!-- Modal Footer -->
    <div class="cx-dialog-footer modal-footer">
      <button
        id="asm-save-cart-dialog-btn"
        (click)="closeModal(BIND_CART_ACTION.SAVE)"
        [attr.aria-label]="'asm.saveCart.dialog.actions.save' | cxTranslate"
        class="btn btn-primary"
        type="button"
        [disabled]="this.cartQty === 0"
      >
        {{ 'asm.saveCart.dialog.actions.save' | cxTranslate }}
      </button>

      <button
        (click)="closeModal(BIND_CART_ACTION.CANCEL)"
        [attr.aria-label]="'common.cancel' | cxTranslate"
        class="btn btn-secondary"
        type="button"
      >
        {{ 'common.cancel' | cxTranslate }}
      </button>
    </div>
  </div>
</div>
`
    }]
  }], () => [{
    type: LaunchDialogService
  }, {
    type: SavedCartFacade
  }], null);
})();
var _AsmComponentService = class _AsmComponentService {
  constructor(authService, csAgentAuthService, winRef, asmEnablerService, asmDeepLinkService) {
    this.authService = authService;
    this.csAgentAuthService = csAgentAuthService;
    this.winRef = winRef;
    this.asmEnablerService = asmEnablerService;
    this.asmDeepLinkService = asmDeepLinkService;
    this.isEmulatedByDeepLink$ = new BehaviorSubject(false);
    this.showDeeplinkCartInfoAlert$ = new BehaviorSubject(false);
    this.routingService = inject(RoutingService);
  }
  /**
   * Returns a deep link parameter value if it is in the url.
   */
  getSearchParameter(key) {
    return this.asmDeepLinkService?.getSearchParameter(key);
  }
  isEmulatedByDeepLink() {
    return this.isEmulatedByDeepLink$;
  }
  setEmulatedByDeepLink(emulated) {
    this.isEmulatedByDeepLink$.next(emulated);
  }
  setShowDeeplinkCartInfoAlert(display) {
    this.showDeeplinkCartInfoAlert$.next(display);
  }
  shouldShowDeeplinkCartInfoAlert() {
    return this.showDeeplinkCartInfoAlert$;
  }
  logoutCustomerSupportAgentAndCustomer() {
    this.csAgentAuthService.logoutCustomerSupportAgent();
  }
  logoutCustomer() {
    this.authService.logout();
  }
  isCustomerEmulationSessionInProgress() {
    return this.csAgentAuthService.isCustomerEmulated();
  }
  /**
   * We're currently only removing the persisted storage in the browser
   * to ensure the ASM experience isn't loaded on the next visit. There are a few
   * optimizations we could think of:
   * - drop the `asm` parameter from the URL, in case it's still there
   * - remove the generated UI from the DOM (outlets currently do not support this)
   */
  unload() {
    if (this.winRef.localStorage) {
      this.winRef.localStorage.removeItem(ASM_ENABLED_LOCAL_STORAGE_KEY);
    }
  }
  /**
   * check whether try to emulate customer from deeplink
   */
  isEmulateInURL() {
    return this.asmDeepLinkService?.isEmulateInURL() || false;
  }
  /**
   * Returns valid deep link parameters in the url.
   */
  getDeepLinkUrlParams() {
    return this.asmDeepLinkService?.getParamsInUrl();
  }
  /**
   * Handles the navigation based on deep link parameters in the URL
   * or passed parameter.
   */
  handleDeepLinkNavigation(parameters = this.getDeepLinkUrlParams()) {
    this.asmDeepLinkService?.handleNavigation(parameters);
  }
  handleAsmDialogAction(event) {
    if (typeof event === "object" && event.actionType === AsmDialogActionType.NAVIGATE) {
      this.routingService.go(event.route);
    }
  }
};
_AsmComponentService.\u0275fac = function AsmComponentService_Factory(t) {
  return new (t || _AsmComponentService)(\u0275\u0275inject(AuthService), \u0275\u0275inject(CsAgentAuthService), \u0275\u0275inject(WindowRef), \u0275\u0275inject(AsmEnablerService), \u0275\u0275inject(AsmDeepLinkService));
};
_AsmComponentService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
  token: _AsmComponentService,
  factory: _AsmComponentService.\u0275fac,
  providedIn: "root"
});
var AsmComponentService = _AsmComponentService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AsmComponentService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: AuthService
  }, {
    type: CsAgentAuthService
  }, {
    type: WindowRef
  }, {
    type: AsmEnablerService
  }, {
    type: AsmDeepLinkService
  }], null);
})();
var _DotSpinnerComponent = class _DotSpinnerComponent {
};
_DotSpinnerComponent.\u0275fac = function DotSpinnerComponent_Factory(t) {
  return new (t || _DotSpinnerComponent)();
};
_DotSpinnerComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
  type: _DotSpinnerComponent,
  selectors: [["cx-dot-spinner"]],
  decls: 3,
  vars: 0,
  template: function DotSpinnerComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275element(0, "div")(1, "div")(2, "div");
    }
  },
  encapsulation: 2,
  changeDetection: 0
});
var DotSpinnerComponent = _DotSpinnerComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DotSpinnerComponent, [{
    type: Component,
    args: [{
      selector: "cx-dot-spinner",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<div></div>\n<div></div>\n<div></div>\n"
    }]
  }], null, null);
})();
var _AsmBindCartComponent = class _AsmBindCartComponent {
  constructor(globalMessageService, activeCartFacade, multiCartFacade, asmBindCartFacade, launchDialogService, savedCartFacade, asmComponentService, routing) {
    this.globalMessageService = globalMessageService;
    this.activeCartFacade = activeCartFacade;
    this.multiCartFacade = multiCartFacade;
    this.asmBindCartFacade = asmBindCartFacade;
    this.launchDialogService = launchDialogService;
    this.savedCartFacade = savedCartFacade;
    this.asmComponentService = asmComponentService;
    this.routing = routing;
    this.activeCartValidator = (control) => {
      if (control.value === this.activeCartId) {
        return {
          activeCartError: true
        };
      }
      if (!!this.deepLinkCartId && control.value !== this.deepLinkCartId) {
        this.resetDeeplinkCart();
      }
      return null;
    };
    this.cartId = new FormControl("", [Validators.required, Validators.minLength(1), this.activeCartValidator]);
    this.loading$ = new BehaviorSubject(false);
    this.valid$ = this.cartId.statusChanges.pipe(map((status) => status === "VALID"), shareReplay(1));
    this.activeCartId = "";
    this.deepLinkCartId = "";
    this.displayBindCartBtn$ = new BehaviorSubject(true);
    this.displaySaveCartBtn$ = new BehaviorSubject(false);
    this.subscription = new Subscription();
  }
  ngOnInit() {
    this.subscribeForDeeplinkCart();
    this.subscription.add(this.activeCartFacade.getActiveCartId().subscribe((response) => {
      this.activeCartId = response ?? "";
      this.cartId.setValue(this.deepLinkCartId || this.activeCartId);
    }));
  }
  resetInput() {
    if (!this.cartId.value) {
      this.cartId.setValue(this.activeCartId);
    }
  }
  /**
   * Bind the input cart number to the customer
   */
  bindCartToCustomer() {
    const anonymousCartId = this.cartId.value;
    const subscription = combineLatest([this.loading$.asObservable(), this.valid$]).pipe(take(1), filter(([loading, valid]) => !loading && valid), tap(() => this.loading$.next(true)), concatMap(() => this.activeCartFacade.getActive().pipe(map((cart) => cart.deliveryItemsQuantity ?? 0), take(1))), concatMap((cartItemCount) => iif(() => Boolean(this.activeCartId && cartItemCount), this.openDialog(this.activeCartId, anonymousCartId), this.simpleBindCart(anonymousCartId))), finalize(() => this.loading$.next(false))).subscribe({
      next: () => {
        this.globalMessageService.add({
          key: "asm.bindCart.success"
        }, GlobalMessageType.MSG_TYPE_CONFIRMATION);
      },
      error: (error) => {
        this.globalMessageService.add(error.details?.[0].message ?? "", GlobalMessageType.MSG_TYPE_ERROR);
      }
    });
    this.subscription.add(subscription);
  }
  onSaveInactiveCart() {
    this.asmComponentService?.setShowDeeplinkCartInfoAlert(false);
    const customerId = this.asmComponentService?.getSearchParameter("customerId");
    this.multiCartFacade.loadCart({
      cartId: this.deepLinkCartId,
      userId: customerId
    });
    this.multiCartFacade.getCartEntity(this.deepLinkCartId).pipe(filter((state) => state.loading === false && state.success === true), take(1), map((state) => state.value), filter((cart) => !!cart)).subscribe((cart) => {
      this.openASMSaveCartDialog(cart);
    });
    this.afterCloseASMSaveCartDialog();
  }
  clearText() {
    this.cartId.setValue("");
    this.resetDeeplinkCart();
  }
  resetDeeplinkCart() {
    this.deepLinkCartId = "";
    this.displayBindCartBtn$.next(true);
    this.displaySaveCartBtn$.next(false);
    this.asmComponentService?.setShowDeeplinkCartInfoAlert(false);
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
  /**
   * Binds cart on subscription and reloads cart
   */
  simpleBindCart(anonymousCartId) {
    return defer(() => this.asmBindCartFacade.bindCart(anonymousCartId)).pipe(tap(() => this.multiCartFacade.reloadCart(OCC_CART_ID_CURRENT)));
  }
  /**
   * Opens dialog and passes non-cancel result to select action
   */
  openDialog(activeCartId, anonymousCartId) {
    return defer(() => {
      this.launchDialogService.openDialogAndSubscribe("ASM_BIND_CART", this.bindToCartElemRef);
      return this.launchDialogService.dialogClose.pipe(filter((result) => Boolean(result)), take(1));
    }).pipe(filter((dialogResult) => Boolean(dialogResult)), concatMap((dialogResult) => {
      return this.selectBindAction(activeCartId, anonymousCartId, dialogResult);
    }));
  }
  selectBindAction(activeCartId, anonymousCartId, action) {
    switch (action) {
      case BIND_CART_DIALOG_ACTION.REPLACE:
        return this.replaceCart(activeCartId, anonymousCartId);
      case BIND_CART_DIALOG_ACTION.CANCEL:
      default:
        return EMPTY;
    }
  }
  replaceCart(previousActiveCartId, anonymousCartId) {
    return this.simpleBindCart(anonymousCartId).pipe(tap(() => {
      this.savedCartFacade.saveCart({
        cartId: previousActiveCartId,
        saveCartName: previousActiveCartId,
        // TODO(#12660): Remove default value once backend is updated
        saveCartDescription: "-"
      });
    }));
  }
  subscribeForDeeplinkCart() {
    this.subscription.add(this.asmComponentService?.isEmulatedByDeepLink().pipe(filter((emulated) => emulated && !!this.asmComponentService?.getSearchParameter("cartId"))).subscribe(() => {
      const cartType = this.asmComponentService?.getSearchParameter("cartType");
      if (cartType === "inactive" || cartType === "active") {
        this.displayBindCartBtn$.next(false);
        this.displaySaveCartBtn$.next(cartType === "inactive");
        this.deepLinkCartId = this.asmComponentService?.getSearchParameter("cartId");
        this.cartId.setValue(this.deepLinkCartId);
        this.asmComponentService?.setShowDeeplinkCartInfoAlert(true);
        this.asmComponentService?.handleDeepLinkNavigation();
      }
      return;
    }));
  }
  openASMSaveCartDialog(inactiveCart) {
    this.launchDialogService.openDialogAndSubscribe("ASM_SAVE_CART", this.saveInactiveCartElemRef, inactiveCart);
  }
  afterCloseASMSaveCartDialog() {
    this.launchDialogService.dialogClose.pipe(filter((result) => result === SAVE_CART_DIALOG_ACTION.SAVE), take(1), tap(() => this.loading$.next(true))).subscribe();
    this.savedCartFacade.getSaveCartProcessSuccess().pipe(filter((success) => success), take(1), tap(() => this.loading$.next(false))).subscribe(() => {
      this.goToSavedCartDetails(this.deepLinkCartId);
      this.displaySaveCartBtn$.next(false);
    });
    this.savedCartFacade.getSaveCartProcessError().pipe(filter((error) => error), take(1), tap(() => this.loading$.next(false))).subscribe();
  }
  goToSavedCartDetails(cartId) {
    this.routing?.go({
      cxRoute: "savedCartsDetails",
      params: {
        savedCartId: cartId
      }
    });
  }
};
_AsmBindCartComponent.\u0275fac = function AsmBindCartComponent_Factory(t) {
  return new (t || _AsmBindCartComponent)(\u0275\u0275directiveInject(GlobalMessageService), \u0275\u0275directiveInject(ActiveCartFacade), \u0275\u0275directiveInject(MultiCartFacade), \u0275\u0275directiveInject(AsmBindCartFacade), \u0275\u0275directiveInject(LaunchDialogService), \u0275\u0275directiveInject(SavedCartFacade), \u0275\u0275directiveInject(AsmComponentService), \u0275\u0275directiveInject(RoutingService));
};
_AsmBindCartComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
  type: _AsmBindCartComponent,
  selectors: [["cx-asm-bind-cart"]],
  viewQuery: function AsmBindCartComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(_c0, 5);
      \u0275\u0275viewQuery(_c1, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.bindToCartElemRef = _t.first);
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.saveInactiveCartElemRef = _t.first);
    }
  },
  decls: 17,
  vars: 25,
  consts: [["cartIdElement", ""], ["bindToCart", ""], ["saveInactiveCart", ""], ["for", "cartNumber"], ["role", "search", 1, "cx-asm-assignCart", 3, "click"], ["autocomplete", "off", "formcontrolname", "cartNumber", 3, "keydown.enter", "blur", "formControl"], [1, "cx-asm-reset", 3, "click"], [1, "cx-icon", "fas", "fa-times-circle"], ["class", "cx-asm-bindCartToCustomer", "type", "submit", 3, "disabled", "cx-asm-active", "cx-bind-loading", "click", 4, "ngIf"], ["id", "asm-save-inactive-cart-btn", "class", "cx-asm-bindCartToCustomer cx-asm-active", "type", "submit", 3, "cx-bind-loading", "click", 4, "ngIf"], ["type", "submit", 1, "cx-asm-bindCartToCustomer", 3, "click", "disabled"], ["id", "asm-save-inactive-cart-btn", "type", "submit", 1, "cx-asm-bindCartToCustomer", "cx-asm-active", 3, "click"]],
  template: function AsmBindCartComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "form")(1, "label", 3);
      \u0275\u0275text(2);
      \u0275\u0275pipe(3, "cxTranslate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "div", 4);
      \u0275\u0275pipe(5, "async");
      \u0275\u0275pipe(6, "cxTranslate");
      \u0275\u0275listener("click", function AsmBindCartComponent_Template_div_click_4_listener() {
        \u0275\u0275restoreView(_r1);
        const cartIdElement_r2 = \u0275\u0275reference(8);
        return \u0275\u0275resetView(cartIdElement_r2.focus());
      });
      \u0275\u0275elementStart(7, "input", 5, 0);
      \u0275\u0275pipe(9, "cxTranslate");
      \u0275\u0275listener("keydown.enter", function AsmBindCartComponent_Template_input_keydown_enter_7_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.bindCartToCustomer());
      })("blur", function AsmBindCartComponent_Template_input_blur_7_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.resetInput());
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(10, "button", 6);
      \u0275\u0275pipe(11, "cxTranslate");
      \u0275\u0275listener("click", function AsmBindCartComponent_Template_button_click_10_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.clearText());
      });
      \u0275\u0275element(12, "cx-icon", 7);
      \u0275\u0275elementEnd()();
      \u0275\u0275template(13, AsmBindCartComponent_button_13_Template, 12, 23, "button", 8);
      \u0275\u0275pipe(14, "async");
      \u0275\u0275template(15, AsmBindCartComponent_button_15_Template, 10, 16, "button", 9);
      \u0275\u0275pipe(16, "async");
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(3, 11, "asm.bindCart.cartNumber"), " ");
      \u0275\u0275advance(2);
      \u0275\u0275classProp("active", \u0275\u0275pipeBind1(5, 13, ctx.valid$));
      \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(6, 15, "asm.bindCart.assignCartId"));
      \u0275\u0275advance(3);
      \u0275\u0275property("formControl", ctx.cartId);
      \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(9, 17, "asm.bindCart.enterCartId"));
      \u0275\u0275advance(3);
      \u0275\u0275classProp("visible", (ctx.cartId.value == null ? null : ctx.cartId.value.length) > 0);
      \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(11, 19, "asm.bindCart.resetCartId"));
      \u0275\u0275advance(3);
      \u0275\u0275property("ngIf", \u0275\u0275pipeBind1(14, 21, ctx.displayBindCartBtn$));
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", \u0275\u0275pipeBind1(16, 23, ctx.displaySaveCartBtn$));
    }
  },
  dependencies: [NgIf, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, FormControlDirective, IconComponent, NgForm, DotSpinnerComponent, AsyncPipe, TranslatePipe],
  encapsulation: 2,
  changeDetection: 0
});
var AsmBindCartComponent = _AsmBindCartComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AsmBindCartComponent, [{
    type: Component,
    args: [{
      selector: "cx-asm-bind-cart",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: `<form>
  <label for="cartNumber">{{ 'asm.bindCart.cartNumber' | cxTranslate }} </label>
  <div
    role="search"
    [attr.aria-label]="'asm.bindCart.assignCartId' | cxTranslate"
    class="cx-asm-assignCart"
    [class.active]="valid$ | async"
    (click)="cartIdElement.focus()"
  >
    <input
      autocomplete="off"
      #cartIdElement
      formcontrolname="cartNumber"
      [formControl]="cartId"
      (keydown.enter)="bindCartToCustomer()"
      (blur)="resetInput()"
      [attr.aria-label]="'asm.bindCart.enterCartId' | cxTranslate"
    />
    <button
      class="cx-asm-reset"
      [attr.aria-label]="'asm.bindCart.resetCartId' | cxTranslate"
      [class.visible]="cartId.value?.length > 0"
      (click)="clearText()"
    >
      <cx-icon class="cx-icon fas fa-times-circle"></cx-icon>
    </button>
  </div>
  <button
    #bindToCart
    *ngIf="displayBindCartBtn$ | async"
    class="cx-asm-bindCartToCustomer"
    [disabled]="!(valid$ | async)"
    type="submit"
    [class.cx-asm-active]="valid$ | async"
    [class.cx-bind-loading]="loading$ | async"
    (click)="bindCartToCustomer()"
  >
    <span [attr.aria-hidden]="loading$ | async">
      {{ 'asm.bindCart.bindCartToCustomer' | cxTranslate }}
    </span>
    <cx-dot-spinner
      [attr.aria-hidden]="!(loading$ | async)"
      [attr.aria-label]="'common.loading' | cxTranslate"
    ></cx-dot-spinner>
  </button>

  <button
    id="asm-save-inactive-cart-btn"
    #saveInactiveCart
    *ngIf="displaySaveCartBtn$ | async"
    class="cx-asm-bindCartToCustomer cx-asm-active"
    type="submit"
    [class.cx-bind-loading]="loading$ | async"
    (click)="onSaveInactiveCart()"
  >
    <span [attr.aria-hidden]="loading$ | async">
      {{ 'asm.saveCart.saveCartBtn' | cxTranslate }}
    </span>
    <cx-dot-spinner
      [attr.aria-hidden]="!(loading$ | async)"
      [attr.aria-label]="'common.loading' | cxTranslate"
    ></cx-dot-spinner>
  </button>
</form>
`
    }]
  }], () => [{
    type: GlobalMessageService
  }, {
    type: ActiveCartFacade
  }, {
    type: MultiCartFacade
  }, {
    type: AsmBindCartFacade
  }, {
    type: LaunchDialogService
  }, {
    type: SavedCartFacade
  }, {
    type: AsmComponentService
  }, {
    type: RoutingService
  }], {
    bindToCartElemRef: [{
      type: ViewChild,
      args: ["bindToCart"]
    }],
    saveInactiveCartElemRef: [{
      type: ViewChild,
      args: ["saveInactiveCart"]
    }]
  });
})();
var _AsmCreateCustomerFormComponent = class _AsmCreateCustomerFormComponent {
  constructor(launchDialogService, fb, asmCreateCustomerFacade, translationService) {
    this.launchDialogService = launchDialogService;
    this.fb = fb;
    this.asmCreateCustomerFacade = asmCreateCustomerFacade;
    this.translationService = translationService;
    this.iconTypes = ICON_TYPE;
    this.isLoading$ = new BehaviorSubject(false);
    this.showDialogInfoAlert = true;
    this.globalMessageType = GlobalMessageType;
    this.focusConfig = {
      trap: true,
      block: true,
      autofocus: true,
      focusOnEscape: true
    };
    this.registerForm = this.fb.group({
      firstName: ["", Validators.required],
      lastName: ["", Validators.required],
      email: ["", [Validators.required, CustomFormValidators.emailValidator]]
    });
  }
  submitForm() {
    if (this.registerForm.valid) {
      this.registerUser();
    } else {
      this.registerForm.markAllAsTouched();
    }
  }
  registerUser() {
    this.isLoading$.next(true);
    const {
      firstName,
      lastName,
      email
    } = this.registerForm.value;
    this.createdCustomer = {
      firstName: firstName ?? "",
      lastName: lastName ?? "",
      email: email ?? ""
    };
    const obs$ = this.asmCreateCustomerFacade.createCustomer(this.collectDataFromRegisterForm());
    obs$.subscribe({
      next: (result) => this.onRegisterUserSuccess(result),
      error: (error) => this.onRegisterUserFail(error)
    });
    obs$.subscribe({
      complete: () => this.isLoading$.next(false)
    });
  }
  collectDataFromRegisterForm() {
    return {
      firstName: this.createdCustomer.firstName,
      lastName: this.createdCustomer.lastName,
      emailAddress: this.createdCustomer.email
    };
  }
  closeModal(reason) {
    this.launchDialogService.closeDialog(reason);
  }
  closeDialogInfoAlert() {
    this.showDialogInfoAlert = false;
  }
  closeDialogBackendErroAlert(index) {
    this.showDialogBackendErrorAlerts[index] = false;
  }
  onRegisterUserSuccess(user) {
    this.launchDialogService.closeDialog(user);
  }
  onRegisterUserFail(error) {
    this.isLoading$.next(false);
    this.backendErrorMessages = [];
    this.showDialogBackendErrorAlerts = [];
    const unknownError = "httpHandlers.unknownError";
    const errorDetails = error.details ?? [];
    if (errorDetails.length === 0) {
      this.addErrorMessage(unknownError);
    }
    errorDetails.forEach((errorDetail) => {
      switch (errorDetail.type || "") {
        case "ValidationError":
          this.addErrorMessage(`asm.createCustomerForm.validationErrors.${errorDetail.subject}`);
          break;
        case "AssistedServiceDuplicatedUidError":
          this.addErrorMessage("asm.createCustomerForm.badRequestDuplicatedEmail", {
            emailAddress: this.createdCustomer.email
          });
          break;
        default:
          this.addErrorMessage(unknownError);
      }
    });
  }
  addErrorMessage(key, options) {
    this.translationService.translate(key, options).pipe(first()).subscribe((text) => {
      this.backendErrorMessages.push(text);
      this.showDialogBackendErrorAlerts.push(true);
    });
  }
};
_AsmCreateCustomerFormComponent.\u0275fac = function AsmCreateCustomerFormComponent_Factory(t) {
  return new (t || _AsmCreateCustomerFormComponent)(\u0275\u0275directiveInject(LaunchDialogService), \u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(AsmCreateCustomerFacade), \u0275\u0275directiveInject(TranslationService));
};
_AsmCreateCustomerFormComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
  type: _AsmCreateCustomerFormComponent,
  selectors: [["cx-asm-create-customer-form"]],
  decls: 23,
  vars: 17,
  consts: [["loading", ""], [1, "cx-modal-container", "cx-asm-dialog", 3, "esc", "cxFocus"], [1, "cx-modal-content"], [3, "ngSubmit", "formGroup"], [1, "cx-dialog-header", "modal-header"], [1, "title", "modal-title"], [1, "cx-dialog-body", "modal-body"], [1, "message-container"], [3, "text", "type", "closeMessage", 4, "ngIf"], [4, "ngFor", "ngForOf"], [4, "ngIf", "ngIfElse"], [1, "modal-footer"], ["type", "submit", 1, "btn", "cx-asm-create-customer-btn", "cx-asm-create-customer-btn-create"], ["type", "button", 1, "btn", "cx-asm-create-customer-btn", "cx-asm-create-customer-btn-cancel", 3, "click"], [3, "closeMessage", "text", "type"], [1, "form-group"], [1, "label-content"], ["required", "true", "formControlName", "firstName", "name", "text", 1, "form-control", 3, "placeholder"], [3, "control"], ["required", "true", "name", "text", "formControlName", "lastName", 1, "form-control", 3, "placeholder"], ["required", "true", "name", "email", "formControlName", "email", 1, "form-control", 3, "placeholder"], [1, "cx-spinner"]],
  template: function AsmCreateCustomerFormComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "div", 1);
      \u0275\u0275listener("esc", function AsmCreateCustomerFormComponent_Template_div_esc_0_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.closeModal("Escape clicked"));
      });
      \u0275\u0275elementStart(1, "div", 2);
      \u0275\u0275elementContainerStart(2);
      \u0275\u0275elementStart(3, "form", 3);
      \u0275\u0275listener("ngSubmit", function AsmCreateCustomerFormComponent_Template_form_ngSubmit_3_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.submitForm());
      });
      \u0275\u0275elementStart(4, "div", 4)(5, "h2", 5);
      \u0275\u0275text(6);
      \u0275\u0275pipe(7, "cxTranslate");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(8, "div", 6)(9, "div", 7);
      \u0275\u0275template(10, AsmCreateCustomerFormComponent_cx_message_10_Template, 2, 4, "cx-message", 8)(11, AsmCreateCustomerFormComponent_ng_container_11_Template, 2, 1, "ng-container", 9);
      \u0275\u0275elementEnd();
      \u0275\u0275template(12, AsmCreateCustomerFormComponent_div_12_Template, 25, 21, "div", 10);
      \u0275\u0275pipe(13, "async");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(14, "div", 11)(15, "button", 12);
      \u0275\u0275text(16);
      \u0275\u0275pipe(17, "cxTranslate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(18, "button", 13);
      \u0275\u0275listener("click", function AsmCreateCustomerFormComponent_Template_button_click_18_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.closeModal("Cancel click"));
      });
      \u0275\u0275text(19);
      \u0275\u0275pipe(20, "cxTranslate");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementContainerEnd();
      \u0275\u0275elementEnd()();
      \u0275\u0275template(21, AsmCreateCustomerFormComponent_ng_template_21_Template, 2, 0, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
    }
    if (rf & 2) {
      const loading_r7 = \u0275\u0275reference(22);
      \u0275\u0275property("cxFocus", ctx.focusConfig);
      \u0275\u0275advance(3);
      \u0275\u0275property("formGroup", ctx.registerForm);
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(7, 9, "asm.createCustomerForm.title"), " ");
      \u0275\u0275advance(4);
      \u0275\u0275property("ngIf", ctx.showDialogInfoAlert);
      \u0275\u0275advance();
      \u0275\u0275property("ngForOf", ctx.backendErrorMessages);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !\u0275\u0275pipeBind1(13, 11, ctx.isLoading$))("ngIfElse", loading_r7);
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(17, 13, "asm.createCustomerForm.createAccount"), " ");
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(20, 15, "asm.createCustomerForm.cancel"), " ");
    }
  },
  dependencies: [NgForOf, NgIf, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, RequiredValidator, FormGroupDirective, FormControlName, FormErrorsComponent, SpinnerComponent, FocusDirective, MessageComponent, AsyncPipe, TranslatePipe],
  encapsulation: 2
});
var AsmCreateCustomerFormComponent = _AsmCreateCustomerFormComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AsmCreateCustomerFormComponent, [{
    type: Component,
    args: [{
      selector: "cx-asm-create-customer-form",
      template: `<div
  class="cx-modal-container cx-asm-dialog"
  [cxFocus]="focusConfig"
  (esc)="closeModal('Escape clicked')"
>
  <div class="cx-modal-content">
    <ng-container>
      <form (ngSubmit)="submitForm()" [formGroup]="registerForm">
        <!-- Modal Header -->
        <div class="cx-dialog-header modal-header">
          <h2 class="title modal-title">
            {{ 'asm.createCustomerForm.title' | cxTranslate }}
          </h2>
        </div>
        <!-- Modal Body -->
        <div class="cx-dialog-body modal-body">
          <div class="message-container">
            <cx-message
              *ngIf="showDialogInfoAlert"
              [text]="'asm.createCustomerForm.createAccountAlert' | cxTranslate"
              [type]="globalMessageType.MSG_TYPE_INFO"
              (closeMessage)="closeDialogInfoAlert()"
            >
            </cx-message>
            <ng-container
              *ngFor="let errorMessage of backendErrorMessages; let i = index"
            >
              <cx-message
                *ngIf="showDialogBackendErrorAlerts[i]"
                [text]="errorMessage"
                [type]="globalMessageType.MSG_TYPE_ERROR"
                (closeMessage)="closeDialogBackendErroAlert(i)"
              >
              </cx-message>
            </ng-container>
          </div>

          <div *ngIf="!(isLoading$ | async); else loading">
            <div class="form-group">
              <label>
                <span class="label-content">{{
                  'asm.createCustomerForm.firstName.label' | cxTranslate
                }}</span>
                <input
                  required="true"
                  class="form-control"
                  placeholder="{{
                    'asm.createCustomerForm.firstName.placeholder' | cxTranslate
                  }}"
                  formControlName="firstName"
                  name="text"
                />
                <cx-form-errors
                  [control]="registerForm.get('firstName')"
                ></cx-form-errors>
              </label>
            </div>

            <div class="form-group">
              <label>
                <span class="label-content">{{
                  'asm.createCustomerForm.lastName.label' | cxTranslate
                }}</span>
                <input
                  required="true"
                  class="form-control"
                  placeholder="{{
                    'asm.createCustomerForm.lastName.placeholder' | cxTranslate
                  }}"
                  name="text"
                  formControlName="lastName"
                />
                <cx-form-errors
                  [control]="registerForm.get('lastName')"
                ></cx-form-errors>
              </label>
            </div>

            <div class="form-group">
              <label>
                <span class="label-content">{{
                  'asm.createCustomerForm.emailAddress.label' | cxTranslate
                }}</span>
                <input
                  required="true"
                  class="form-control"
                  placeholder="{{
                    'asm.createCustomerForm.emailAddress.placeholder'
                      | cxTranslate
                  }}"
                  name="email"
                  formControlName="email"
                />
                <cx-form-errors
                  [control]="registerForm.get('email')"
                ></cx-form-errors>
              </label>
            </div>
          </div>
        </div>
        <!-- Modal Footer -->
        <div class="modal-footer">
          <button
            type="submit"
            class="
              btn
              cx-asm-create-customer-btn cx-asm-create-customer-btn-create
            "
          >
            {{ 'asm.createCustomerForm.createAccount' | cxTranslate }}
          </button>
          <button
            type="button"
            class="
              btn
              cx-asm-create-customer-btn cx-asm-create-customer-btn-cancel
            "
            (click)="closeModal('Cancel click')"
          >
            {{ 'asm.createCustomerForm.cancel' | cxTranslate }}
          </button>
        </div>
      </form>
    </ng-container>
  </div>
</div>

<ng-template #loading>
  <div class="cx-spinner"><cx-spinner></cx-spinner></div>
</ng-template>
`
    }]
  }], () => [{
    type: LaunchDialogService
  }, {
    type: FormBuilder
  }, {
    type: AsmCreateCustomerFacade
  }, {
    type: TranslationService
  }], null);
})();
var defaultAsmCreateCustomerFormLayoutConfig = {
  launch: {
    ASM_CREATE_CUSTOMER_FORM: {
      inlineRoot: true,
      component: AsmCreateCustomerFormComponent,
      dialogType: DIALOG_TYPE.DIALOG
    }
  }
};
var _CSAgentLoginFormComponent = class _CSAgentLoginFormComponent {
  constructor(fb) {
    this.fb = fb;
    this.csAgentTokenLoading = false;
    this.submitEvent = new EventEmitter();
  }
  ngOnInit() {
    this.csAgentLoginForm = this.fb.group({
      userId: ["", [Validators.required]],
      password: ["", [Validators.required]]
    });
  }
  onSubmit() {
    if (this.csAgentLoginForm.valid) {
      this.submitEvent.emit({
        userId: this.csAgentLoginForm.get("userId")?.value,
        password: this.csAgentLoginForm.get("password")?.value
      });
    } else {
      this.csAgentLoginForm.markAllAsTouched();
    }
  }
};
_CSAgentLoginFormComponent.\u0275fac = function CSAgentLoginFormComponent_Factory(t) {
  return new (t || _CSAgentLoginFormComponent)(\u0275\u0275directiveInject(UntypedFormBuilder));
};
_CSAgentLoginFormComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
  type: _CSAgentLoginFormComponent,
  selectors: [["cx-csagent-login-form"]],
  inputs: {
    csAgentTokenLoading: "csAgentTokenLoading"
  },
  outputs: {
    submitEvent: "submitEvent"
  },
  decls: 2,
  vars: 2,
  consts: [[3, "formGroup", "ngSubmit", 4, "ngIf"], ["aria-hidden", "false", 4, "ngIf"], [3, "ngSubmit", "formGroup"], ["required", "true", "type", "text", "formControlName", "userId", 3, "placeholder"], [3, "control"], ["required", "true", "type", "password", "formControlName", "password", "cxPasswordVisibilitySwitch", "", 3, "placeholder"], ["type", "submit"], ["aria-hidden", "false"]],
  template: function CSAgentLoginFormComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275template(0, CSAgentLoginFormComponent_form_0_Template, 14, 18, "form", 0)(1, CSAgentLoginFormComponent_cx_dot_spinner_1_Template, 2, 3, "cx-dot-spinner", 1);
    }
    if (rf & 2) {
      \u0275\u0275property("ngIf", !ctx.csAgentTokenLoading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.csAgentTokenLoading);
    }
  },
  dependencies: [NgIf, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, RequiredValidator, FormGroupDirective, FormControlName, FormErrorsComponent, PasswordVisibilityToggleDirective, DotSpinnerComponent, TranslatePipe],
  encapsulation: 2
});
var CSAgentLoginFormComponent = _CSAgentLoginFormComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CSAgentLoginFormComponent, [{
    type: Component,
    args: [{
      selector: "cx-csagent-login-form",
      template: `<form
  (ngSubmit)="onSubmit()"
  [formGroup]="csAgentLoginForm"
  *ngIf="!csAgentTokenLoading"
>
  <label>
    <input
      required="true"
      type="text"
      formControlName="userId"
      placeholder="{{ 'asm.loginForm.userId.label' | cxTranslate }}"
      [attr.aria-label]="'asm.loginForm.userId.label' | cxTranslate"
    />
    <cx-form-errors [control]="csAgentLoginForm.get('userId')"></cx-form-errors>
  </label>

  <label>
    <input
      required="true"
      type="password"
      placeholder="{{ 'asm.loginForm.password.label' | cxTranslate }}"
      formControlName="password"
      [attr.aria-label]="'asm.loginForm.password.label' | cxTranslate"
      cxPasswordVisibilitySwitch
    />
    <cx-form-errors
      [control]="csAgentLoginForm.get('password')"
    ></cx-form-errors>
  </label>
  <button type="submit">
    {{ 'asm.loginForm.submit' | cxTranslate }}
  </button>
</form>

<cx-dot-spinner
  *ngIf="csAgentTokenLoading"
  aria-hidden="false"
  [attr.aria-label]="'common.loading' | cxTranslate"
></cx-dot-spinner>
`
    }]
  }], () => [{
    type: UntypedFormBuilder
  }], {
    csAgentTokenLoading: [{
      type: Input
    }],
    submitEvent: [{
      type: Output
    }]
  });
})();
var _CustomerSelectionComponent = class _CustomerSelectionComponent {
  constructor(fb, asmService, config, directionService, launchDialogService) {
    this.fb = fb;
    this.asmService = asmService;
    this.config = config;
    this.directionService = directionService;
    this.launchDialogService = launchDialogService;
    this.subscription = new Subscription();
    this.submitEvent = new EventEmitter();
    this.activeFocusedButtonIndex = -1;
  }
  ngOnInit() {
    this.customerSelectionForm = this.fb.group({
      searchTerm: ["", Validators.required]
    });
    this.asmService.customerSearchReset();
    this.searchResultsLoading$ = this.asmService.getCustomerSearchResultsLoading();
    this.searchResults = this.asmService.getCustomerSearchResults();
    this.subscription.add(this.customerSelectionForm.controls.searchTerm.valueChanges.pipe(debounceTime(300)).subscribe((searchTermValue) => {
      this.handleSearchTerm(searchTermValue);
    }));
  }
  handleSearchTerm(searchTermValue) {
    if (!!this.selectedCustomer && searchTermValue !== this.selectedCustomer.name) {
      this.selectedCustomer = void 0;
    }
    if (Boolean(this.selectedCustomer)) {
      return;
    }
    this.asmService.customerSearchReset();
    this.activeFocusedButtonIndex = -1;
    if (searchTermValue.trim().length >= 3) {
      this.asmService.customerSearch({
        query: searchTermValue,
        pageSize: this.config.asm?.customerSearch?.maxResults
      });
    }
  }
  selectCustomerFromList(event, customer) {
    this.selectedCustomer = customer;
    this.customerSelectionForm.controls.searchTerm.setValue(this.selectedCustomer.name);
    this.asmService.customerSearchReset();
    this.searchTerm.nativeElement.focus();
    event.preventDefault();
    event.stopPropagation();
  }
  onSubmit() {
    if (this.customerSelectionForm.valid && !!this.selectedCustomer) {
      this.submitEvent.emit({
        customerId: this.selectedCustomer.customerId
      });
    } else {
      this.customerSelectionForm.markAllAsTouched();
    }
  }
  onDocumentClick(event) {
    if (Boolean(this.resultList)) {
      if (this.resultList.nativeElement.contains(event.target) || this.searchTerm.nativeElement.contains(event.target)) {
        return;
      } else {
        this.asmService.customerSearchReset();
      }
    }
  }
  closeResults(event) {
    this.asmService.customerSearchReset();
    this.searchTerm.nativeElement.focus();
    event.preventDefault();
    event.stopPropagation();
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
    this.asmService.customerSearchReset();
  }
  /**
   * set focus to the first searched item
   * @param event keyboard event
   */
  focusFirstItem(event) {
    event.preventDefault();
    this.activeFocusedButtonIndex = 0;
    this.updateItemIndex(this.activeFocusedButtonIndex);
  }
  /**
   * set mouse cursor to the end of search text
   * @param event keyboard event
   */
  setSelectionEnd(event) {
    event.preventDefault();
    if (this.searchTerm.nativeElement.value?.length) {
      const selectionStart = this.searchTerm.nativeElement.value.length;
      this.searchTerm.nativeElement.selectionStart = selectionStart;
      this.searchTerm.nativeElement.selectionEnd = selectionStart;
    }
  }
  /**
   * set focus on previous searh result item.  If no previous item then go to end of item.
   * @param event keyboard event
   */
  focusPreviousChild(event) {
    event.preventDefault();
    this.activeFocusedButtonIndex--;
    if (this.activeFocusedButtonIndex < 0) {
      this.activeFocusedButtonIndex = this.searchResultItems.length - 1;
    }
    this.updateItemIndex(this.activeFocusedButtonIndex);
  }
  /**
   * set focus on next searh result item.  if no next item then go to the first item
   * @param event keyboard event
   */
  focusNextChild(event) {
    event.preventDefault();
    this.activeFocusedButtonIndex++;
    if (this.activeFocusedButtonIndex > this.searchResultItems.length - 1) {
      this.activeFocusedButtonIndex = 0;
    }
    this.updateItemIndex(this.activeFocusedButtonIndex);
  }
  /**
   * set focus to input search text
   * @param event keyboard event
   */
  focusInputText(event) {
    event.preventDefault();
    this.activeFocusedButtonIndex = -1;
    this.searchTerm.nativeElement.focus();
    if (this.searchTerm.nativeElement.value?.length) {
      let selectionPos = this.searchTerm.nativeElement.selectionEnd;
      const searchTermLength = this.searchTerm.nativeElement.value.length;
      if (this.isBackNavigation(event)) {
        selectionPos = selectionPos <= 0 ? 0 : selectionPos - 1;
      } else if (this.isForwardsNavigation(event)) {
        selectionPos = selectionPos >= searchTermLength ? searchTermLength : selectionPos + 1;
      } else if (event.code === "Home") {
        selectionPos = 0;
      } else if (event.code === "End") {
        selectionPos = searchTermLength;
      }
      this.searchTerm.nativeElement.selectionStart = selectionPos;
      this.searchTerm.nativeElement.selectionEnd = selectionPos;
    }
  }
  /**
   * set focus to selected item
   * @param {number} selectedIndex - current selected item index
   */
  updateItemIndex(selectedIndex) {
    this.searchResultItems.toArray()?.[selectedIndex]?.nativeElement.focus();
  }
  createCustomer() {
    this.asmService.customerSearchReset();
    this.launchDialogService.openDialogAndSubscribe("ASM_CREATE_CUSTOMER_FORM", this.createCustomerLink);
  }
  /**
   * Verifies whether the user navigates into a subgroup of the main group menu.
   *
   * @param {KeyboardEvent} event - Keyboard event
   * @returns {boolean} -'true' if the user navigates into the subgroup, otherwise 'false'.
   * @protected
   */
  isForwardsNavigation(event) {
    return event.code === "ArrowRight" && this.isLTRDirection() || event.code === "ArrowLeft" && this.isRTLDirection();
  }
  /**
   * Verifies whether the user navigates from a subgroup back to the main group menu.
   *
   * @param {KeyboardEvent} event - Keyboard event
   * @returns {boolean} -'true' if the user navigates back into the main group menu, otherwise 'false'.
   * @protected
   */
  isBackNavigation(event) {
    return event.code === "ArrowLeft" && this.isLTRDirection() || event.code === "ArrowRight" && this.isRTLDirection();
  }
  isLTRDirection() {
    return this.directionService.getDirection() === DirectionMode.LTR;
  }
  isRTLDirection() {
    return this.directionService.getDirection() === DirectionMode.RTL;
  }
};
_CustomerSelectionComponent.\u0275fac = function CustomerSelectionComponent_Factory(t) {
  return new (t || _CustomerSelectionComponent)(\u0275\u0275directiveInject(UntypedFormBuilder), \u0275\u0275directiveInject(AsmService), \u0275\u0275directiveInject(AsmConfig), \u0275\u0275directiveInject(DirectionService), \u0275\u0275directiveInject(LaunchDialogService));
};
_CustomerSelectionComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
  type: _CustomerSelectionComponent,
  selectors: [["cx-customer-selection"]],
  viewQuery: function CustomerSelectionComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(_c2, 5);
      \u0275\u0275viewQuery(_c3, 5);
      \u0275\u0275viewQuery(_c4, 5);
      \u0275\u0275viewQuery(_c5, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.resultList = _t.first);
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.searchTerm = _t.first);
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.createCustomerLink = _t.first);
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.searchResultItems = _t);
    }
  },
  hostBindings: function CustomerSelectionComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275listener("click", function CustomerSelectionComponent_click_HostBindingHandler($event) {
        return ctx.onDocumentClick($event);
      }, false, \u0275\u0275resolveDocument);
    }
  },
  outputs: {
    submitEvent: "submitEvent"
  },
  decls: 14,
  vars: 19,
  consts: [["searchTerm", ""], ["resultList", ""], ["searchResultItem", ""], ["createCustomerLink", ""], [3, "ngSubmit", "formGroup"], ["required", "true", "type", "text", "formControlName", "searchTerm", 3, "keydown.arrowdown", "keydown.end", "placeholder"], [3, "control"], ["type", "submit"], ["class", "asm-results", 4, "ngIf"], [1, "asm-results"], [3, "tabindex", "active", "keydown.arrowup", "keydown.arrowdown", "keydown.arrowright", "keydown.arrowleft", "keydown.enter", "keydown.escape", "keydown.home", "keydown.end", "click", 4, "ngFor", "ngForOf"], [3, "active", "click", "keydown.escape", "keydown.arrowright", "keydown.arrowleft", "keydown.home", "keydown.end", 4, "ngIf"], [3, "keydown.arrowup", "keydown.arrowdown", "keydown.arrowright", "keydown.arrowleft", "keydown.enter", "keydown.escape", "keydown.home", "keydown.end", "click", "tabindex"], [1, "result-name"], [1, "result-id"], [3, "click", "keydown.escape", "keydown.arrowright", "keydown.arrowleft", "keydown.home", "keydown.end"], [1, "linkStyleLabel"], ["aria-hidden", "false"]],
  template: function CustomerSelectionComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "form", 4);
      \u0275\u0275listener("ngSubmit", function CustomerSelectionComponent_Template_form_ngSubmit_0_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onSubmit());
      });
      \u0275\u0275elementStart(1, "label")(2, "input", 5, 0);
      \u0275\u0275pipe(4, "cxTranslate");
      \u0275\u0275pipe(5, "cxTranslate");
      \u0275\u0275listener("keydown.arrowdown", function CustomerSelectionComponent_Template_input_keydown_arrowdown_2_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.focusFirstItem($event));
      })("keydown.end", function CustomerSelectionComponent_Template_input_keydown_end_2_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.setSelectionEnd($event));
      });
      \u0275\u0275elementEnd();
      \u0275\u0275element(6, "cx-form-errors", 6);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "button", 7);
      \u0275\u0275text(8);
      \u0275\u0275pipe(9, "cxTranslate");
      \u0275\u0275elementEnd()();
      \u0275\u0275template(10, CustomerSelectionComponent_div_10_Template, 5, 4, "div", 8);
      \u0275\u0275pipe(11, "async");
      \u0275\u0275template(12, CustomerSelectionComponent_div_12_Template, 3, 3, "div", 8);
      \u0275\u0275pipe(13, "async");
    }
    if (rf & 2) {
      \u0275\u0275property("formGroup", ctx.customerSelectionForm);
      \u0275\u0275advance(2);
      \u0275\u0275propertyInterpolate("placeholder", \u0275\u0275pipeBind1(4, 9, "asm.customerSearch.searchTerm.label"));
      \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(5, 11, "asm.customerSearch.searchTerm.label"));
      \u0275\u0275advance(4);
      \u0275\u0275property("control", ctx.customerSelectionForm.get("searchTerm"));
      \u0275\u0275advance();
      \u0275\u0275classProp("active", ctx.selectedCustomer);
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(9, 13, "asm.customerSearch.submit"), " ");
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", \u0275\u0275pipeBind1(11, 15, ctx.searchResults));
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", \u0275\u0275pipeBind1(13, 17, ctx.searchResultsLoading$));
    }
  },
  dependencies: [NgForOf, NgIf, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, RequiredValidator, FormGroupDirective, FormControlName, FormErrorsComponent, DotSpinnerComponent, AsyncPipe, TranslatePipe],
  encapsulation: 2
});
var CustomerSelectionComponent = _CustomerSelectionComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CustomerSelectionComponent, [{
    type: Component,
    args: [{
      selector: "cx-customer-selection",
      host: {
        "(document:click)": "onDocumentClick($event)"
      },
      template: `<form (ngSubmit)="onSubmit()" [formGroup]="customerSelectionForm">
  <label>
    <input
      required="true"
      #searchTerm
      type="text"
      formControlName="searchTerm"
      [attr.aria-label]="'asm.customerSearch.searchTerm.label' | cxTranslate"
      placeholder="{{ 'asm.customerSearch.searchTerm.label' | cxTranslate }}"
      (keydown.arrowdown)="focusFirstItem($event)"
      (keydown.end)="setSelectionEnd($event)"
    />
    <cx-form-errors
      [control]="customerSelectionForm.get('searchTerm')"
    ></cx-form-errors>
  </label>
  <button type="submit" [class.active]="selectedCustomer">
    {{ 'asm.customerSearch.submit' | cxTranslate }}
  </button>
</form>

<div *ngIf="searchResults | async as results" class="asm-results" #resultList>
  <button
    #searchResultItem
    *ngFor="let result of results.entries; let i = index"
    [tabindex]="activeFocusedButtonIndex === i ? 0 : -1"
    [attr.aria-selected]="activeFocusedButtonIndex === i"
    [class.active]="activeFocusedButtonIndex === i"
    (keydown.arrowup)="focusPreviousChild($event)"
    (keydown.arrowdown)="focusNextChild($event)"
    (keydown.arrowright)="focusInputText($event)"
    (keydown.arrowleft)="focusInputText($event)"
    (keydown.enter)="selectCustomerFromList($event, result)"
    (keydown.escape)="closeResults($event)"
    (keydown.home)="focusInputText($event)"
    (keydown.end)="focusInputText($event)"
    (click)="selectCustomerFromList($event, result)"
  >
    <span class="result-name">{{ result.name }}</span>
    <span class="result-id">{{ result.uid }}</span>
  </button>

  <button
    #searchResultItem
    (click)="createCustomer()"
    (keydown.escape)="closeResults($event)"
    (keydown.arrowright)="focusInputText($event)"
    (keydown.arrowleft)="focusInputText($event)"
    (keydown.home)="focusInputText($event)"
    (keydown.end)="focusInputText($event)"
    [class.active]="activeFocusedButtonIndex === 0"
    [attr.aria-selected]="activeFocusedButtonIndex === 0"
    *ngIf="
      !(searchResultsLoading$ | async) &&
      searchTerm.value.length >= 3 &&
      !!results.entries &&
      results.entries.length <= 0
    "
  >
    <span>{{ 'asm.customerSearch.noMatchResult' | cxTranslate }}</span>
    <span #createCustomerLink class="linkStyleLabel">{{
      'asm.customerSearch.createCustomer' | cxTranslate
    }}</span>
  </button>
</div>

<div class="asm-results" *ngIf="searchResultsLoading$ | async">
  <cx-dot-spinner
    aria-hidden="false"
    [attr.aria-label]="'common.loading' | cxTranslate"
  ></cx-dot-spinner>
</div>
`
    }]
  }], () => [{
    type: UntypedFormBuilder
  }, {
    type: AsmService
  }, {
    type: AsmConfig
  }, {
    type: DirectionService
  }, {
    type: LaunchDialogService
  }], {
    submitEvent: [{
      type: Output
    }],
    resultList: [{
      type: ViewChild,
      args: ["resultList"]
    }],
    searchTerm: [{
      type: ViewChild,
      args: ["searchTerm"]
    }],
    createCustomerLink: [{
      type: ViewChild,
      args: ["createCustomerLink"]
    }],
    searchResultItems: [{
      type: ViewChildren,
      args: ["searchResultItem"]
    }]
  });
})();
var _FormatTimerPipe = class _FormatTimerPipe {
  transform(totalSeconds) {
    if (totalSeconds < 0) {
      totalSeconds = 0;
    }
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    let zeroPaddedMinutes;
    if (minutes < 10) {
      zeroPaddedMinutes = ("00" + minutes).slice(-2);
    } else {
      zeroPaddedMinutes = minutes + "";
    }
    const zeroPaddedSeconds = ("00" + seconds).slice(-2);
    return `${zeroPaddedMinutes}:${zeroPaddedSeconds}`;
  }
};
_FormatTimerPipe.\u0275fac = function FormatTimerPipe_Factory(t) {
  return new (t || _FormatTimerPipe)();
};
_FormatTimerPipe.\u0275pipe = /* @__PURE__ */ \u0275\u0275definePipe({
  name: "formatTimer",
  type: _FormatTimerPipe,
  pure: true
});
var FormatTimerPipe = _FormatTimerPipe;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FormatTimerPipe, [{
    type: Pipe,
    args: [{
      name: "formatTimer"
    }]
  }], null, null);
})();
var _AsmSessionTimerComponent = class _AsmSessionTimerComponent {
  constructor(config, asmComponentService, routingService, changeDetectorRef, userIdService) {
    this.config = config;
    this.asmComponentService = asmComponentService;
    this.routingService = routingService;
    this.changeDetectorRef = changeDetectorRef;
    this.userIdService = userIdService;
    this.subscriptions = new Subscription();
    this.maxStartDelayInSeconds = 6e4;
  }
  ngOnInit() {
    this.initTimer();
    this.interval = setInterval(() => {
      const currentSeconds = (/* @__PURE__ */ new Date()).getTime() / 1e3;
      this.timeLeft = Math.floor(this.expiredTime - currentSeconds);
      if (this.timeLeft <= 0) {
        clearInterval(this.interval);
        this.asmComponentService.logoutCustomerSupportAgentAndCustomer();
      }
      this.changeDetectorRef.markForCheck();
    }, 1e3);
    this.resetOnNavigate();
    this.resetOnCustomerSessionChange();
  }
  resetOnNavigate() {
    this.subscriptions.add(this.routingService.isNavigating().subscribe((isNavigating) => {
      if (isNavigating) {
        this.resetTimer();
      }
    }));
  }
  resetOnCustomerSessionChange() {
    this.subscriptions.add(this.userIdService.getUserId().pipe(distinctUntilChanged()).subscribe(() => this.resetTimer()));
  }
  initTimer() {
    const timeoutPropertyInSeconds = this.getTimerStartDelayInSeconds();
    const currentSeconds = (/* @__PURE__ */ new Date()).getTime() / 1e3;
    this.timeLeft = timeoutPropertyInSeconds;
    this.expiredTime = currentSeconds + this.timeLeft;
  }
  resetTimer() {
    if (this.timeLeft > 0) {
      this.initTimer();
    }
  }
  getTimerStartDelayInSeconds() {
    if (this.config.asm?.agentSessionTimer?.startingDelayInSeconds === void 0) {
      return 600;
    }
    if (this.config.asm.agentSessionTimer.startingDelayInSeconds > this.maxStartDelayInSeconds) {
      return this.maxStartDelayInSeconds;
    } else {
      return this.config.asm.agentSessionTimer.startingDelayInSeconds;
    }
  }
  ngOnDestroy() {
    this.subscriptions.unsubscribe();
    if (this.interval) {
      clearInterval(this.interval);
    }
  }
};
_AsmSessionTimerComponent.\u0275fac = function AsmSessionTimerComponent_Factory(t) {
  return new (t || _AsmSessionTimerComponent)(\u0275\u0275directiveInject(AsmConfig), \u0275\u0275directiveInject(AsmComponentService), \u0275\u0275directiveInject(RoutingService), \u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(UserIdService));
};
_AsmSessionTimerComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
  type: _AsmSessionTimerComponent,
  selectors: [["cx-asm-session-timer"]],
  decls: 9,
  vars: 12,
  consts: [[1, "label"], [1, "time"], [1, "reset", 3, "click", "title"]],
  template: function AsmSessionTimerComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "span", 0);
      \u0275\u0275text(1);
      \u0275\u0275pipe(2, "cxTranslate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(3, "span", 1);
      \u0275\u0275text(4);
      \u0275\u0275pipe(5, "formatTimer");
      \u0275\u0275pipe(6, "cxTranslate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "button", 2);
      \u0275\u0275pipe(8, "cxTranslate");
      \u0275\u0275listener("click", function AsmSessionTimerComponent_Template_button_click_7_listener() {
        return ctx.resetTimer();
      });
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(2, 4, "asm.agentSessionTimer.label"), ":");
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate2("", \u0275\u0275pipeBind1(5, 6, ctx.timeLeft), " ", \u0275\u0275pipeBind1(6, 8, "asm.agentSessionTimer.minutes"), "");
      \u0275\u0275advance(3);
      \u0275\u0275propertyInterpolate("title", \u0275\u0275pipeBind1(8, 10, "asm.agentSessionTimer.reset"));
    }
  },
  dependencies: [TranslatePipe, FormatTimerPipe],
  encapsulation: 2
});
var AsmSessionTimerComponent = _AsmSessionTimerComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AsmSessionTimerComponent, [{
    type: Component,
    args: [{
      selector: "cx-asm-session-timer",
      template: `<span class="label">{{ 'asm.agentSessionTimer.label' | cxTranslate }}:</span>
<span class="time"
  >{{ timeLeft | formatTimer }}
  {{ 'asm.agentSessionTimer.minutes' | cxTranslate }}</span
>
<button
  class="reset"
  title="{{ 'asm.agentSessionTimer.reset' | cxTranslate }}"
  (click)="resetTimer()"
></button>
`
    }]
  }], () => [{
    type: AsmConfig
  }, {
    type: AsmComponentService
  }, {
    type: RoutingService
  }, {
    type: ChangeDetectorRef
  }, {
    type: UserIdService
  }], null);
})();
var _CustomerEmulationComponent = class _CustomerEmulationComponent {
  constructor(asmComponentService, userAccountFacade, launchDialogService, featureModules) {
    this.asmComponentService = asmComponentService;
    this.userAccountFacade = userAccountFacade;
    this.launchDialogService = launchDialogService;
    this.featureModules = featureModules;
    this.isAsmCustomer360Configured = false;
    this.isAsmCustomer360Loaded$ = new BehaviorSubject(false);
    this.subscription = new Subscription();
  }
  ngOnInit() {
    this.isAsmCustomer360Configured = this.featureModules?.isConfigured("asmCustomer360");
    if (this.isAsmCustomer360Configured) {
      this.featureModules?.resolveFeature("asmCustomer360").subscribe(() => {
        this.isAsmCustomer360Loaded$.next(true);
      });
    }
    this.subscription.add(this.userAccountFacade.get().subscribe((user) => {
      if (user) {
        this.customer = user;
      }
    }));
    this.isCustomerEmulationSessionInProgress$ = this.asmComponentService.isCustomerEmulationSessionInProgress();
  }
  logoutCustomer() {
    this.asmComponentService.logoutCustomer();
  }
  openAsmCustomer360() {
    this.subscription.add(this.isAsmCustomer360Loaded$.pipe(filter((isReady) => Boolean(isReady))).subscribe(() => {
      const data = {
        customer: this.customer
      };
      this.launchDialogService?.openDialogAndSubscribe("ASM_CUSTOMER_360", this.asmCustomer360LauncherElement, data);
      this.subscription.add(this.launchDialogService?.dialogClose.pipe(filter((result) => Boolean(result))).subscribe((event) => {
        this.asmComponentService.handleAsmDialogAction(event);
      }));
    }));
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
};
_CustomerEmulationComponent.\u0275fac = function CustomerEmulationComponent_Factory(t) {
  return new (t || _CustomerEmulationComponent)(\u0275\u0275directiveInject(AsmComponentService), \u0275\u0275directiveInject(UserAccountFacade), \u0275\u0275directiveInject(LaunchDialogService), \u0275\u0275directiveInject(FeatureModulesService));
};
_CustomerEmulationComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
  type: _CustomerEmulationComponent,
  selectors: [["cx-customer-emulation"]],
  viewQuery: function CustomerEmulationComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(_c6, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.asmCustomer360LauncherElement = _t.first);
    }
  },
  decls: 2,
  vars: 3,
  consts: [["asmCustomer360Launcher", ""], [4, "ngIf"], [1, "cx-asm-customerInfo"], [1, "cx-asm-name"], [1, "cx-asm-uid"], ["class", "cx-360-button", 3, "click", 4, "ngIf"], ["formcontrolname", "logoutCustomer", 3, "click"], [1, "cx-360-button", 3, "click"]],
  template: function CustomerEmulationComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275template(0, CustomerEmulationComponent_ng_container_0_Template, 11, 6, "ng-container", 1);
      \u0275\u0275pipe(1, "async");
    }
    if (rf & 2) {
      \u0275\u0275property("ngIf", \u0275\u0275pipeBind1(1, 1, ctx.isCustomerEmulationSessionInProgress$));
    }
  },
  dependencies: [NgIf, AsmBindCartComponent, AsyncPipe, TranslatePipe],
  encapsulation: 2
});
var CustomerEmulationComponent = _CustomerEmulationComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CustomerEmulationComponent, [{
    type: Component,
    args: [{
      selector: "cx-customer-emulation",
      template: `<ng-container *ngIf="isCustomerEmulationSessionInProgress$ | async">
  <div class="cx-asm-customerInfo">
    <label class="cx-asm-name">{{ customer?.name }}</label>
    <label class="cx-asm-uid">{{ customer?.uid }}</label>
  </div>
  <cx-asm-bind-cart></cx-asm-bind-cart>
  <button
    *ngIf="isAsmCustomer360Configured && customer"
    #asmCustomer360Launcher
    class="cx-360-button"
    (click)="openAsmCustomer360()"
  >
    {{ 'asm.asmCustomer360Button' | cxTranslate }}
  </button>
  <button formcontrolname="logoutCustomer" (click)="logoutCustomer()">
    {{ 'asm.endSession' | cxTranslate }}
  </button>
</ng-container>
`
    }]
  }], () => [{
    type: AsmComponentService
  }, {
    type: UserAccountFacade
  }, {
    type: LaunchDialogService
  }, {
    type: FeatureModulesService
  }], {
    asmCustomer360LauncherElement: [{
      type: ViewChild,
      args: ["asmCustomer360Launcher"]
    }]
  });
})();
var _AsmToggleUiComponent = class _AsmToggleUiComponent {
  constructor(asmService) {
    this.asmService = asmService;
    this.subscription = new Subscription();
  }
  ngOnInit() {
    this.subscription.add(this.asmService.getAsmUiState().subscribe((uiState) => {
      this.isCollapsed = uiState.collapsed === void 0 ? false : uiState.collapsed;
    }));
  }
  toggleUi() {
    this.asmService.updateAsmUiState({
      collapsed: !this.isCollapsed
    });
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
};
_AsmToggleUiComponent.\u0275fac = function AsmToggleUiComponent_Factory(t) {
  return new (t || _AsmToggleUiComponent)(\u0275\u0275directiveInject(AsmService));
};
_AsmToggleUiComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
  type: _AsmToggleUiComponent,
  selectors: [["cx-asm-toggle-ui"]],
  decls: 4,
  vars: 3,
  consts: [["tabindex", "0", "role", "button", 1, "toggleUi", 3, "click"], [3, "ngClass"], ["class", "label", 4, "ngIf"], [1, "label"]],
  template: function AsmToggleUiComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "a", 0);
      \u0275\u0275listener("click", function AsmToggleUiComponent_Template_a_click_0_listener() {
        return ctx.toggleUi();
      });
      \u0275\u0275element(1, "span", 1);
      \u0275\u0275template(2, AsmToggleUiComponent_span_2_Template, 3, 3, "span", 2)(3, AsmToggleUiComponent_span_3_Template, 3, 3, "span", 2);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275property("ngClass", !ctx.isCollapsed ? "collapseIcon" : "expandIcon");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.isCollapsed);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.isCollapsed);
    }
  },
  dependencies: [NgClass, NgIf, TranslatePipe],
  encapsulation: 2
});
var AsmToggleUiComponent = _AsmToggleUiComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AsmToggleUiComponent, [{
    type: Component,
    args: [{
      selector: "cx-asm-toggle-ui",
      template: `<a class="toggleUi" (click)="toggleUi()" tabindex="0" role="button">
  <span [ngClass]="!isCollapsed ? 'collapseIcon' : 'expandIcon'"></span>
  <span *ngIf="!isCollapsed" class="label">
    {{ 'asm.toggleUi.collapse' | cxTranslate }}
  </span>
  <span *ngIf="isCollapsed" class="label">
    {{ 'asm.toggleUi.expand' | cxTranslate }}
  </span>
</a>
`
    }]
  }], () => [{
    type: AsmService
  }], null);
})();
var CART_TYPE_KEY = {
  active: "asm.activeCartAlertInfo",
  inactive: "asm.saveInactiveCartAlertInfo"
};
var _AsmMainUiComponent = class _AsmMainUiComponent {
  constructor(authService, csAgentAuthService, asmComponentService, globalMessageService, routingService, asmService, userAccountFacade, launchDialogService) {
    this.authService = authService;
    this.csAgentAuthService = csAgentAuthService;
    this.asmComponentService = asmComponentService;
    this.globalMessageService = globalMessageService;
    this.routingService = routingService;
    this.asmService = asmService;
    this.userAccountFacade = userAccountFacade;
    this.launchDialogService = launchDialogService;
    this.iconTypes = ICON_TYPE;
    this.showDeeplinkCartInfoAlert$ = this.asmComponentService.shouldShowDeeplinkCartInfoAlert();
    this.deeplinkCartAlertKey = "";
    this.showCreateCustomerSuccessfullyAlert = false;
    this.globalMessageType = GlobalMessageType;
    this.disabled = false;
    this.startingCustomerSession = false;
    this.showCustomerEmulationInfoAlert = true;
    this.subscription = new Subscription();
  }
  ngOnInit() {
    this.customerSupportAgentLoggedIn$ = this.csAgentAuthService.isCustomerSupportAgentLoggedIn().pipe(distinctUntilChanged(), tap((loggedIn) => {
      if (!loggedIn) {
        this.closeModal();
      }
    }));
    this.csAgentTokenLoading$ = this.csAgentAuthService.getCustomerSupportAgentTokenLoading();
    this.customer$ = this.authService.isUserLoggedIn().pipe(switchMap((isLoggedIn) => {
      if (isLoggedIn) {
        this.handleCustomerSessionStartRedirection();
        return this.userAccountFacade.get();
      } else {
        return of(void 0);
      }
    }));
    this.isCollapsed$ = this.asmService.getAsmUiState().pipe(map((uiState) => uiState.collapsed === void 0 ? false : uiState.collapsed));
    this.subscription.add(this.launchDialogService.dialogClose.pipe(filter((result) => Boolean(result))).subscribe((result) => {
      if (typeof result !== "string") {
        if ("selectedUser" in result) {
          this.startCustomerEmulationSession(result.selectedUser);
          if (result.actionType === CustomerListColumnActionType.ORDER_HISTORY) {
            this.routingService.go({
              cxRoute: "orders"
            });
          }
        } else if ("customerId" in result) {
          this.startCustomerEmulationSession({
            customerId: result.customerId
          });
          this.showCreateCustomerSuccessfullyAlert = true;
          this.routingService.go("/");
        }
        if ("actionType" in result && result.actionType === CustomerListColumnActionType.ACTIVE_CART) {
          this.routingService.go({
            cxRoute: "cart"
          });
        }
      }
    }));
    this.subscribeForDeeplink();
  }
  /**
   * When agent is logged in and deep link has customerID,
   * call logout if has customer emulated(userLoggedin) but not emulated by deep link.
   * call startSessionWithParameters
   */
  subscribeForDeeplink() {
    if (this.asmComponentService.isEmulateInURL()) {
      this.routingService.go("/");
    }
    const parameters = this.asmComponentService.getDeepLinkUrlParams() ?? {
      customerId: this.asmComponentService.getSearchParameter("customerId"),
      orderId: this.asmComponentService.getSearchParameter("orderId"),
      ticketId: this.asmComponentService.getSearchParameter("ticketId"),
      cartId: this.asmComponentService.getSearchParameter("cartId"),
      cartType: this.asmComponentService.getSearchParameter("cartType"),
      emulated: false
    };
    this.deeplinkCartAlertKey = CART_TYPE_KEY[parameters.cartType || ""];
    this.subscription.add(combineLatest([this.customerSupportAgentLoggedIn$, this.authService.isUserLoggedIn(), this.asmComponentService.isEmulatedByDeepLink()]).subscribe(([agentLoggedIn, userLoggedin, isEmulatedByDeepLink]) => {
      if (agentLoggedIn && parameters.customerId) {
        if (!isEmulatedByDeepLink && userLoggedin) {
          this.confirmSwitchCustomer(parameters.customerId);
        } else {
          setTimeout(() => this.startSessionWithParameters(__spreadProps(__spreadValues({}, parameters), {
            emulated: isEmulatedByDeepLink
          })));
        }
      }
    }));
  }
  confirmSwitchCustomer(switchCustomerId) {
    this.customer$.pipe(filter((curCustomer) => !!curCustomer), take(1)).subscribe((curCustomer) => {
      if (curCustomer?.customerId !== switchCustomerId) {
        this.userAccountFacade.getById(switchCustomerId).subscribe({
          next: (switchCustomer) => {
            this.launchDialogService.openDialogAndSubscribe("ASM_SWITCH_CUSTOMER", this.element, {
              curCustomer,
              switchCustomer
            });
          },
          error: (error) => {
            this.globalMessageService.add(error.details?.[0].message ?? "", GlobalMessageType.MSG_TYPE_ERROR);
          }
        });
      } else {
        this.asmComponentService.setEmulatedByDeepLink(true);
      }
    });
  }
  /**
   * If url contains customerId and we haven't emulatedFromURL, we'll change the isEmulatedByDeepLink flag and
   * start emulate customer in URL.
   */
  startSessionWithParameters(parameters) {
    if (!parameters.emulated) {
      this.asmComponentService.setEmulatedByDeepLink(true);
      this.startCustomerEmulationSession({
        customerId: parameters.customerId
      }, parameters);
    }
  }
  handleCustomerSessionStartRedirection() {
    this.asmComponentService.isCustomerEmulationSessionInProgress().pipe(take(1)).subscribe((isCustomerEmulated) => {
      if (this.startingCustomerSession && isCustomerEmulated) {
        this.startingCustomerSession = false;
        this.globalMessageService.remove(GlobalMessageType.MSG_TYPE_ERROR);
        this.routingService.go("/");
      }
    });
  }
  loginCustomerSupportAgent({
    userId,
    password
  }) {
    this.csAgentAuthService.authorizeCustomerSupportAgent(userId, password);
  }
  logout() {
    this.asmComponentService.logoutCustomerSupportAgentAndCustomer();
  }
  startCustomerEmulationSession({
    customerId
  }, parameters) {
    if (customerId) {
      this.csAgentAuthService.startCustomerEmulationSession(customerId);
      this.startingCustomerSession = true;
      this.showCustomerEmulationInfoAlert = true;
      this.showCreateCustomerSuccessfullyAlert = false;
      if (parameters) {
        this.asmComponentService.handleDeepLinkNavigation(__spreadValues({
          customerId
        }, parameters));
      }
    } else {
      this.globalMessageService.add({
        key: "asm.error.noCustomerId"
      }, GlobalMessageType.MSG_TYPE_ERROR);
    }
  }
  hideUi() {
    this.disabled = true;
    this.asmComponentService.unload();
  }
  showCustomList() {
    this.launchDialogService.openDialogAndSubscribe("ASM_CUSTOMER_LIST", this.element);
  }
  closeModal() {
    this.launchDialogService.closeDialog("logout");
  }
  createCustomer() {
    this.launchDialogService?.openDialogAndSubscribe("ASM_CREATE_CUSTOMER_FORM", this.addNewCustomerLink);
  }
  closeDialogConfirmationAlert() {
    this.showCreateCustomerSuccessfullyAlert = false;
  }
  closeDeeplinkCartInfoAlert() {
    this.asmComponentService.setShowDeeplinkCartInfoAlert(false);
  }
  closeCustomerEmulationInfoAlert() {
    this.showCustomerEmulationInfoAlert = false;
  }
  ngOnDestroy() {
    this.subscription?.unsubscribe();
  }
};
_AsmMainUiComponent.\u0275fac = function AsmMainUiComponent_Factory(t) {
  return new (t || _AsmMainUiComponent)(\u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(CsAgentAuthService), \u0275\u0275directiveInject(AsmComponentService), \u0275\u0275directiveInject(GlobalMessageService), \u0275\u0275directiveInject(RoutingService), \u0275\u0275directiveInject(AsmService), \u0275\u0275directiveInject(UserAccountFacade), \u0275\u0275directiveInject(LaunchDialogService));
};
_AsmMainUiComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
  type: _AsmMainUiComponent,
  selectors: [["cx-asm-main-ui"]],
  viewQuery: function AsmMainUiComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(_c7, 5);
      \u0275\u0275viewQuery(_c8, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.element = _t.first);
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.addNewCustomerLink = _t.first);
    }
  },
  hostVars: 2,
  hostBindings: function AsmMainUiComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      \u0275\u0275classProp("hidden", ctx.disabled);
    }
  },
  decls: 20,
  vars: 23,
  consts: [["customerListLink", ""], ["showLoginForm", ""], ["showCustomerSelection", ""], [1, "asm-bar"], [1, "asm-bar-branding"], ["src", "data:image/png;base64,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", "width", "48", "height", "24", 1, "logo", 3, "alt"], [1, "asm-title"], [1, "asm-bar-actions"], ["class", "cx-asm-customer-list", 4, "ngIf"], [4, "ngIf"], ["class", "close", 3, "title", "click", 4, "ngIf"], ["class", "logout", 3, "title", "click", 4, "ngIf"], [1, "cx-asm-customer-list"], ["tabindex", "0", "role", "button", 1, "cx-asm-customer-list-link", 3, "click"], [3, "type"], [1, "close", 3, "click", "title"], [1, "logout", 3, "click", "title"], [4, "ngIf", "ngIfElse"], [3, "text", "type", "closeMessage", 4, "ngIf"], [3, "closeMessage", "text", "type"], [3, "submitEvent", 4, "ngIf"], [3, "submitEvent"], [3, "csAgentTokenLoading", "submitEvent", 4, "ngIf"], [3, "submitEvent", "csAgentTokenLoading"]],
  template: function AsmMainUiComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 3)(1, "div", 4);
      \u0275\u0275element(2, "img", 5);
      \u0275\u0275pipe(3, "cxTranslate");
      \u0275\u0275elementStart(4, "div", 6);
      \u0275\u0275text(5);
      \u0275\u0275pipe(6, "cxTranslate");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(7, "div", 7);
      \u0275\u0275template(8, AsmMainUiComponent_div_8_Template, 7, 4, "div", 8);
      \u0275\u0275pipe(9, "async");
      \u0275\u0275element(10, "cx-asm-toggle-ui");
      \u0275\u0275template(11, AsmMainUiComponent_cx_asm_session_timer_11_Template, 1, 0, "cx-asm-session-timer", 9);
      \u0275\u0275pipe(12, "async");
      \u0275\u0275template(13, AsmMainUiComponent_button_13_Template, 2, 3, "button", 10);
      \u0275\u0275pipe(14, "async");
      \u0275\u0275pipe(15, "async");
      \u0275\u0275template(16, AsmMainUiComponent_button_16_Template, 2, 3, "button", 11);
      \u0275\u0275pipe(17, "async");
      \u0275\u0275elementEnd()();
      \u0275\u0275template(18, AsmMainUiComponent_ng_container_18_Template, 5, 4, "ng-container", 9);
      \u0275\u0275pipe(19, "async");
    }
    if (rf & 2) {
      \u0275\u0275advance(2);
      \u0275\u0275propertyInterpolate("alt", \u0275\u0275pipeBind1(3, 7, "asm.mainLogoLabel"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(6, 9, "asm.mainTitle"), " ");
      \u0275\u0275advance(3);
      \u0275\u0275property("ngIf", \u0275\u0275pipeBind1(9, 11, ctx.customerSupportAgentLoggedIn$));
      \u0275\u0275advance(3);
      \u0275\u0275property("ngIf", \u0275\u0275pipeBind1(12, 13, ctx.customerSupportAgentLoggedIn$));
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", !\u0275\u0275pipeBind1(14, 15, ctx.customerSupportAgentLoggedIn$) && !\u0275\u0275pipeBind1(15, 17, ctx.csAgentTokenLoading$));
      \u0275\u0275advance(3);
      \u0275\u0275property("ngIf", \u0275\u0275pipeBind1(17, 19, ctx.customerSupportAgentLoggedIn$));
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", !\u0275\u0275pipeBind1(19, 21, ctx.isCollapsed$));
    }
  },
  dependencies: [NgIf, IconComponent, MessageComponent, CSAgentLoginFormComponent, CustomerSelectionComponent, AsmSessionTimerComponent, CustomerEmulationComponent, AsmToggleUiComponent, AsyncPipe, TranslatePipe],
  encapsulation: 2
});
var AsmMainUiComponent = _AsmMainUiComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AsmMainUiComponent, [{
    type: Component,
    args: [{
      selector: "cx-asm-main-ui",
      template: `<div class="asm-bar">
  <div class="asm-bar-branding">
    <img
      class="logo"
      src="data:image/png;base64,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"
      width="48"
      height="24"
      alt="{{ 'asm.mainLogoLabel' | cxTranslate }}"
    />

    <div class="asm-title">
      {{ 'asm.mainTitle' | cxTranslate }}
    </div>
  </div>
  <div class="asm-bar-actions">
    <div
      class="cx-asm-customer-list"
      *ngIf="customerSupportAgentLoggedIn$ | async"
    >
      <a
        #customerListLink
        tabindex="0"
        role="button"
        class="cx-asm-customer-list-link"
        (click)="showCustomList()"
      >
        <cx-icon [type]="iconTypes.USER_FRIENDS"></cx-icon>
        <span>{{ 'asm.customers' | cxTranslate }}</span></a
      >
    </div>

    <cx-asm-toggle-ui></cx-asm-toggle-ui>

    <cx-asm-session-timer
      *ngIf="customerSupportAgentLoggedIn$ | async"
    ></cx-asm-session-timer>

    <button
      class="close"
      title="{{ 'asm.hideUi' | cxTranslate }}"
      *ngIf="
        !(customerSupportAgentLoggedIn$ | async) &&
        !(csAgentTokenLoading$ | async)
      "
      (click)="hideUi()"
    ></button>

    <button
      class="logout"
      title="{{ 'asm.logout' | cxTranslate }}"
      *ngIf="customerSupportAgentLoggedIn$ | async"
      (click)="logout()"
    ></button>
  </div>
</div>

<ng-container *ngIf="!(isCollapsed$ | async) as notCollapsed">
  <ng-container
    *ngIf="customerSupportAgentLoggedIn$ | async; else showLoginForm"
  >
    <ng-container *ngIf="customer$ | async; else showCustomerSelection">
      <cx-customer-emulation *ngIf="notCollapsed"></cx-customer-emulation>
      <cx-message
        *ngIf="notCollapsed && showCreateCustomerSuccessfullyAlert"
        [text]="'asm.createCustomerSuccessfullyAlert' | cxTranslate"
        [type]="globalMessageType.MSG_TYPE_CONFIRMATION"
        (closeMessage)="closeDialogConfirmationAlert()"
      >
      </cx-message>
      <cx-message
        *ngIf="showDeeplinkCartInfoAlert$ | async"
        [text]="deeplinkCartAlertKey | cxTranslate"
        [type]="globalMessageType.MSG_TYPE_INFO"
        (closeMessage)="closeDeeplinkCartInfoAlert()"
      >
      </cx-message>
      <cx-message
        *ngIf="notCollapsed && showCustomerEmulationInfoAlert"
        [text]="'asm.startCustomerEmulationAlertInfo' | cxTranslate"
        [type]="globalMessageType.MSG_TYPE_INFO"
        (closeMessage)="closeCustomerEmulationInfoAlert()"
      >
      </cx-message>
    </ng-container>
    <ng-template #showCustomerSelection>
      <cx-customer-selection
        *ngIf="notCollapsed"
        (submitEvent)="startCustomerEmulationSession($event)"
      ></cx-customer-selection>
    </ng-template>
  </ng-container>

  <ng-template #showLoginForm>
    <cx-csagent-login-form
      *ngIf="notCollapsed"
      (submitEvent)="loginCustomerSupportAgent($event)"
      [csAgentTokenLoading]="csAgentTokenLoading$ | async"
    ></cx-csagent-login-form>
  </ng-template>
</ng-container>
`
    }]
  }], () => [{
    type: AuthService
  }, {
    type: CsAgentAuthService
  }, {
    type: AsmComponentService
  }, {
    type: GlobalMessageService
  }, {
    type: RoutingService
  }, {
    type: AsmService
  }, {
    type: UserAccountFacade
  }, {
    type: LaunchDialogService
  }], {
    disabled: [{
      type: HostBinding,
      args: ["class.hidden"]
    }],
    element: [{
      type: ViewChild,
      args: ["customerListLink"]
    }],
    addNewCustomerLink: [{
      type: ViewChild,
      args: ["addNewCustomerLink"]
    }]
  });
})();
var SWITCH_CUSTOMER_DIALOG_ACTION;
(function(SWITCH_CUSTOMER_DIALOG_ACTION2) {
  SWITCH_CUSTOMER_DIALOG_ACTION2["CANCEL"] = "CANCEL";
  SWITCH_CUSTOMER_DIALOG_ACTION2["SWITCH"] = "SWITCH";
})(SWITCH_CUSTOMER_DIALOG_ACTION || (SWITCH_CUSTOMER_DIALOG_ACTION = {}));
var _AsmSwitchCustomerDialogComponent = class _AsmSwitchCustomerDialogComponent {
  constructor(launchDialogService, asmComponentService) {
    this.launchDialogService = launchDialogService;
    this.asmComponentService = asmComponentService;
    this.SWITCH_CUSTOMER_DIALOG_ACTION = SWITCH_CUSTOMER_DIALOG_ACTION;
    this.focusConfig = {
      trap: true,
      block: true,
      autofocus: true,
      focusOnEscape: true
    };
  }
  ngOnInit() {
    this.launchDialogService.data$.pipe(take(1)).subscribe((data) => {
      this.curCustomerName = data.curCustomer.name || "";
      this.switchCustomerName = data.switchCustomer.name || "";
    });
  }
  closeModal(reason) {
    if (reason === SWITCH_CUSTOMER_DIALOG_ACTION.SWITCH) {
      this.asmComponentService.logoutCustomer();
    }
    this.launchDialogService.closeDialog(reason);
  }
};
_AsmSwitchCustomerDialogComponent.\u0275fac = function AsmSwitchCustomerDialogComponent_Factory(t) {
  return new (t || _AsmSwitchCustomerDialogComponent)(\u0275\u0275directiveInject(LaunchDialogService), \u0275\u0275directiveInject(AsmComponentService));
};
_AsmSwitchCustomerDialogComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
  type: _AsmSwitchCustomerDialogComponent,
  selectors: [["cx-asm-switch-customer-dialog"]],
  decls: 23,
  vars: 23,
  consts: [[1, "cx-asm-switch-customer-dialog", "cx-modal-container", "cx-asm-dialog", 3, "esc", "cxFocus"], [1, "cx-modal-content"], [1, "cx-dialog-header", "modal-header"], ["type", "WARNING"], ["id", "asm-switch-customer-dialog-title", 1, "title", "modal-title"], [1, "cx-dialog-body", "modal-body"], [1, "cx-dialog-row", "switch-customer-content"], [1, "cx-dialog-item"], [1, "cx-dialog-footer", "modal-footer"], ["type", "button", 1, "btn", "btn-primary", 3, "click"], ["type", "button", 1, "btn", "btn-secondary", 3, "click"]],
  template: function AsmSwitchCustomerDialogComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275listener("esc", function AsmSwitchCustomerDialogComponent_Template_div_esc_0_listener() {
        return ctx.closeModal(ctx.SWITCH_CUSTOMER_DIALOG_ACTION.CANCEL);
      });
      \u0275\u0275elementStart(1, "div", 1)(2, "div", 2)(3, "div")(4, "span");
      \u0275\u0275element(5, "cx-icon", 3);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "span", 4);
      \u0275\u0275text(7);
      \u0275\u0275pipe(8, "cxTranslate");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(9, "div", 5)(10, "div", 6)(11, "div", 7);
      \u0275\u0275text(12);
      \u0275\u0275pipe(13, "cxTranslate");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(14, "div", 8)(15, "button", 9);
      \u0275\u0275pipe(16, "cxTranslate");
      \u0275\u0275listener("click", function AsmSwitchCustomerDialogComponent_Template_button_click_15_listener() {
        return ctx.closeModal(ctx.SWITCH_CUSTOMER_DIALOG_ACTION.SWITCH);
      });
      \u0275\u0275text(17);
      \u0275\u0275pipe(18, "cxTranslate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(19, "button", 10);
      \u0275\u0275pipe(20, "cxTranslate");
      \u0275\u0275listener("click", function AsmSwitchCustomerDialogComponent_Template_button_click_19_listener() {
        return ctx.closeModal(ctx.SWITCH_CUSTOMER_DIALOG_ACTION.CANCEL);
      });
      \u0275\u0275text(21);
      \u0275\u0275pipe(22, "cxTranslate");
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      \u0275\u0275property("cxFocus", ctx.focusConfig);
      \u0275\u0275advance(7);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(8, 7, "asm.switchCustomer.dialog.title"), " ");
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(13, 9, "asm.switchCustomer.dialog.body", \u0275\u0275pureFunction2(20, _c9, ctx.curCustomerName, ctx.switchCustomerName)), " ");
      \u0275\u0275advance(3);
      \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(16, 12, "asm.switchCustomer.dialog.actions.switch"));
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(18, 14, "asm.switchCustomer.dialog.actions.switch"), " ");
      \u0275\u0275advance(2);
      \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(20, 16, "common.cancel"));
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(22, 18, "common.cancel"), " ");
    }
  },
  dependencies: [IconComponent, FocusDirective, TranslatePipe],
  encapsulation: 2
});
var AsmSwitchCustomerDialogComponent = _AsmSwitchCustomerDialogComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AsmSwitchCustomerDialogComponent, [{
    type: Component,
    args: [{
      selector: "cx-asm-switch-customer-dialog",
      template: `<div
  class="cx-asm-switch-customer-dialog cx-modal-container cx-asm-dialog"
  [cxFocus]="focusConfig"
  (esc)="closeModal(SWITCH_CUSTOMER_DIALOG_ACTION.CANCEL)"
>
  <div class="cx-modal-content">
    <!-- Modal Header -->
    <div class="cx-dialog-header modal-header">
      <div>
        <span>
          <cx-icon type="WARNING"></cx-icon>
        </span>
        <span id="asm-switch-customer-dialog-title" class="title modal-title">
          {{ 'asm.switchCustomer.dialog.title' | cxTranslate }}
        </span>
      </div>
    </div>

    <!-- Modal Body -->
    <div class="cx-dialog-body modal-body">
      <div class="cx-dialog-row switch-customer-content">
        <div class="cx-dialog-item">
          {{
            'asm.switchCustomer.dialog.body'
              | cxTranslate
                : {
                    customerA: curCustomerName,
                    customerB: switchCustomerName
                  }
          }}
        </div>
      </div>
    </div>

    <!-- Modal Footer -->
    <div class="cx-dialog-footer modal-footer">
      <button
        (click)="closeModal(SWITCH_CUSTOMER_DIALOG_ACTION.SWITCH)"
        [attr.aria-label]="
          'asm.switchCustomer.dialog.actions.switch' | cxTranslate
        "
        class="btn btn-primary"
        type="button"
      >
        {{ 'asm.switchCustomer.dialog.actions.switch' | cxTranslate }}
      </button>

      <button
        (click)="closeModal(SWITCH_CUSTOMER_DIALOG_ACTION.CANCEL)"
        [attr.aria-label]="'common.cancel' | cxTranslate"
        class="btn btn-secondary"
        type="button"
      >
        {{ 'common.cancel' | cxTranslate }}
      </button>
    </div>
  </div>
</div>
`
    }]
  }], () => [{
    type: LaunchDialogService
  }, {
    type: AsmComponentService
  }], null);
})();
var _CustomerListComponent = class _CustomerListComponent {
  constructor(launchDialogService, breakpointService, asmConfig, translation, asmCustomerListFacade, occConfig) {
    this.launchDialogService = launchDialogService;
    this.breakpointService = breakpointService;
    this.asmConfig = asmConfig;
    this.translation = translation;
    this.asmCustomerListFacade = asmCustomerListFacade;
    this.occConfig = occConfig;
    this.DEFAULT_PAGE_SIZE = 5;
    this.focusConfig = {
      trap: true,
      block: true,
      autofocus: "customer-list-selector",
      focusOnEscape: true
    };
    this.iconTypes = ICON_TYPE;
    this.BREAKPOINT = BREAKPOINT;
    this.currentPage = 0;
    this.maxPage = 0;
    this.loaded = false;
    this.listsError = false;
    this.listsEmpty = false;
    this.enableAsmB2bCustomerList = false;
    this.customerListColumnActionType = CustomerListColumnActionType;
    this.searchBox = new UntypedFormControl();
    this.teardown = new Subscription();
    this.breakpoint$ = this.getBreakpoint();
  }
  ngOnInit() {
    this.pageSize = this.asmConfig.asm?.customerList?.pageSize ?? this.DEFAULT_PAGE_SIZE;
    this.customerListConfig = this.asmConfig?.asm?.customerList;
    this.customerListsPage$ = this.asmCustomerListFacade.getCustomerListsState().pipe(tap((state) => this.listsError = !!state.error), map((state) => {
      if (state?.data?.userGroups?.length === 0) {
        this.listsEmpty = true;
        return void 0;
      } else {
        return state.data;
      }
    }), distinctUntilChanged(), tap((result) => {
      if (!this.selectedUserGroupId) {
        this.selectedUserGroupId = result?.userGroups?.[0]?.uid;
        this.sorts = null;
        this.fetchCustomers();
      }
    })) ?? NEVER;
    this.customerSearchLoading$ = this.asmCustomerListFacade.getCustomerListCustomersSearchResultsLoading().pipe(tap((loading) => this.loaded = !loading));
    this.teardown.add(this.customerSearchLoading$.subscribe());
    this.teardown.add(() => this.asmCustomerListFacade.customerListCustomersSearchReset());
    this.customerSearchError$ = this.asmCustomerListFacade.getCustomerListCustomersSearchResultsError();
    this.customerSearchPage$ = this.asmCustomerListFacade.getCustomerListCustomersSearchResults().pipe(tap((result) => {
      if (result?.sorts) {
        this.sorts = result.sorts;
        this.sortCode = result.pagination?.sort;
      }
      if (result?.entries.length < this.pageSize) {
        this.maxPage = result.pagination?.currentPage ?? 0;
      } else {
        this.maxPage = this.currentPage + 1;
      }
    }));
  }
  ngOnDestroy() {
    this.teardown.unsubscribe();
  }
  changePage(page) {
    const options = {
      customerListId: this.selectedUserGroupId,
      pageSize: this.pageSize,
      currentPage: page,
      sort: this.sortCode
    };
    if (this.searchBox?.value) {
      options.query = this.searchBox.value;
    }
    this.asmCustomerListFacade.customerListCustomersSearch(options);
  }
  fetchCustomers() {
    this.enableAsmB2bCustomerList = this.selectedUserGroupId === "b2bCustomerList";
    if (this.selectedUserGroupId) {
      const options = {
        customerListId: this.selectedUserGroupId,
        pageSize: this.pageSize,
        currentPage: this.currentPage
      };
      if (this.sortCode) {
        options.sort = this.sortCode;
      }
      if (this.searchBox?.value) {
        options.query = this.searchBox.value;
      }
      this.asmCustomerListFacade.customerListCustomersSearchReset();
      this.asmCustomerListFacade.customerListCustomersSearch(options);
    }
    this.updateCustomerListColumns();
  }
  updateCustomerListColumns() {
    const columns = this.customerListConfig?.columns || [];
    for (const column of columns) {
      if (column.headerLocalizationKey === "asm.customerList.tableHeader.account" || column.headerLocalizationKey === "hideHeaders") {
        column.headerLocalizationKey = this.enableAsmB2bCustomerList ? "asm.customerList.tableHeader.account" : "hideHeaders";
      }
    }
  }
  onChangeCustomerGroup() {
    this.currentPage = 0;
    this.sorts = null;
    this.sortCode = "";
    this.fetchCustomers();
  }
  getGroupName(customerListsPage, id) {
    return customerListsPage?.userGroups?.find((userGroup) => userGroup.uid === id)?.name ?? "";
  }
  getBadgeText(customerEntry) {
    return (customerEntry.firstName?.charAt(0) ?? "") + (customerEntry.lastName?.charAt(0) ?? "");
  }
  startColumnAction(customerEntry, action) {
    this.selectedCustomer = customerEntry;
    const closeValue = {
      actionType: action,
      selectedUser: customerEntry
    };
    this.closeModal(closeValue);
  }
  onKey(event) {
    if (event.key === "Enter") {
      this.searchCustomers();
    }
  }
  searchCustomers() {
    this.currentPage = 0;
    this.fetchCustomers();
  }
  isRequired(customerEntry, type) {
    if (type === CustomerListColumnActionType.ACTIVE_CART && !customerEntry.lastCartId) {
      return true;
    }
    if (type === CustomerListColumnActionType.ORDER_HISTORY && customerEntry.hasOrder !== true) {
      return true;
    }
    return false;
  }
  changeSortCode(sortCode) {
    this.sortCode = sortCode;
    this.fetchCustomers();
  }
  goToNextPage() {
    if (this.currentPage >= this.maxPage) {
      this.currentPage = this.maxPage;
    } else {
      if (this.loaded) {
        this.currentPage++;
        this.fetchCustomers();
      }
    }
  }
  goToPreviousPage() {
    if (this.currentPage <= 0) {
      this.currentPage = 0;
    } else {
      if (this.loaded) {
        this.currentPage--;
        this.fetchCustomers();
      }
    }
  }
  closeModal(reason) {
    this.launchDialogService.closeDialog(reason);
  }
  getSortLabels() {
    return combineLatest([this.translation.translate("asm.customerList.tableSort.byName"), this.translation.translate("asm.customerList.tableSort.byNameAsc"), this.translation.translate("asm.customerList.tableSort.byNameDesc"), this.translation.translate("asm.customerList.tableSort.byDateAsc"), this.translation.translate("asm.customerList.tableSort.byDateDesc"), this.translation.translate("asm.customerList.tableSort.byOrderDateAsc"), this.translation.translate("asm.customerList.tableSort.byOrderDateDesc"), this.translation.translate("asm.customerList.tableSort.byUnit"), this.translation.translate("asm.customerList.tableSort.byUnitDesc")]).pipe(map(([textByName, textByNameAsc, textByNameDesc, textByDateAsc, textByDateDesc, textByOrderDateAsc, textByOrderDateDesc, textByUnit, textByUnitDesc]) => {
      return {
        byName: textByName,
        byNameAsc: textByNameAsc,
        byNameDesc: textByNameDesc,
        byOrderDateAsc: textByOrderDateAsc,
        byOrderDateDesc: textByOrderDateDesc,
        byDateAsc: textByDateAsc,
        byDateDesc: textByDateDesc,
        byUnit: textByUnit,
        byUnitDesc: textByUnitDesc
      };
    }));
  }
  createCustomer() {
    this.launchDialogService.closeDialog("Create customer click");
    this.launchDialogService?.openDialogAndSubscribe("ASM_CREATE_CUSTOMER_FORM", this.addNewCustomerLink);
  }
  getBreakpoint() {
    return this.breakpointService.breakpoint$.pipe(map((breakpoint) => {
      if (breakpoint === BREAKPOINT.lg || breakpoint === BREAKPOINT.xl) {
        breakpoint = BREAKPOINT.md;
      }
      return breakpoint;
    }));
  }
};
_CustomerListComponent.\u0275fac = function CustomerListComponent_Factory(t) {
  return new (t || _CustomerListComponent)(\u0275\u0275directiveInject(LaunchDialogService), \u0275\u0275directiveInject(BreakpointService), \u0275\u0275directiveInject(AsmConfig), \u0275\u0275directiveInject(TranslationService), \u0275\u0275directiveInject(AsmCustomerListFacade), \u0275\u0275directiveInject(OccConfig));
};
_CustomerListComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
  type: _CustomerListComponent,
  selectors: [["cx-customer-list"]],
  viewQuery: function CustomerListComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(_c8, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.addNewCustomerLink = _t.first);
    }
  },
  decls: 48,
  vars: 28,
  consts: [["cell", ""], ["cellContent", ""], ["search", ""], ["total", ""], ["sort", ""], ["pagination", ""], ["groupSelector", ""], ["closeButton", ""], ["createCustomerButton", ""], [1, "cx-asm-customer-list", "cx-modal-container", "cx-asm-dialog", 3, "esc", "cxFocus"], [1, "cx-modal-content"], [1, "cx-dialog-header", "modal-header"], ["id", "asm-customer-list-title", 1, "title", "modal-title"], ["id", "asm-customer-list-desc", 1, "cx-visually-hidden"], [4, "ngTemplateOutlet"], ["class", "cx-dialog-sub-header modal-header", 3, "tablet-mobile", 4, "ngIf"], [1, "cx-dialog-body", "modal-body"], [1, "cx-dialog-row"], [1, "cx-dialog-item"], ["class", "cx-error-state", 4, "ngIf"], [4, "ngIf"], ["class", "cx-dialog-sub-header modal-header cx-dialog-foot", 3, "asm-mobile-pagination", 4, "ngIf"], [1, "cx-dialog-footer", "modal-footer"], ["type", "button", 1, "btn", "cx-asm-customer-list-btn-cancel", 3, "click"], [1, "cx-dialog-sub-header", "modal-header"], [1, "cx-header-select"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "cx-header-actions"], [1, "cx-error-state"], ["id", "asm-cusomer-list-table", "role", "table", "class", "table", 4, "ngIf"], ["class", "cx-empty-state", 4, "ngIf"], ["id", "asm-cusomer-list-table", "role", "table", 1, "table"], [1, "cx-visually-hidden"], ["role", "row", 4, "ngFor", "ngForOf"], ["role", "row"], ["role", "columnheader", 4, "ngFor", "ngForOf"], ["role", "columnheader"], ["role", "cell", "class", "cx-multi-cell", 4, "ngIf"], ["role", "cell", 4, "ngFor", "ngForOf"], ["role", "cell"], ["role", "cell", 1, "cx-multi-cell"], [4, "ngFor", "ngForOf"], [1, "cx-empty-state"], [1, "cx-dialog-sub-header", "modal-header", "cx-dialog-foot"], [3, "viewPageEvent", "pagination"], ["class", "cx-cell-container", 4, "ngIf"], [1, "cx-cell-container"], ["class", "cx-header-text", 4, "ngIf"], ["class", "cx-avatar", 4, "ngIf"], ["class", "btn btn-link cx-action-link cx-btn-cell", 3, "class", "disabled", "click", 4, "ngIf"], [1, "cx-header-text"], [1, "cx-avatar"], [3, "alt", 4, "ngIf"], ["class", "cx-avatar-text", 4, "ngIf"], [3, "alt"], [1, "cx-avatar-text"], [1, "btn", "btn-link", "cx-action-link", "cx-btn-cell", 3, "click", "disabled"], [3, "cx-action-color", "type", 4, "ngIf"], [3, "type"], [1, "form-group", "search-wrapper"], ["type", "text", 1, "form-control", 3, "keyup", "formControl", "placeholder"], ["role", "button", 1, "search", 3, "click", "type"], ["class", "cx-total", 4, "ngIf"], [1, "cx-total"], [1, "sort-selector", 3, "sortListEvent", "sortOptions", "sortLabels", "selectedOption", "placeholder", "cxNgSelectA11y"], [1, "cx-pagination-buttons"], ["class", "btn btn-link cx-action-link cx-btn-previous", 3, "disabled", "click", 4, "ngIf"], ["class", "btn btn-link cx-action-link cx-btn-next", 3, "disabled", "click", 4, "ngIf"], [1, "btn", "btn-link", "cx-action-link", "cx-btn-previous", 3, "click", "disabled"], [1, "previous", 3, "type"], [1, "btn", "btn-link", "cx-action-link", "cx-btn-next", 3, "click", "disabled"], [1, "next", 3, "type"], ["bindLabel", "name", "bindValue", "uid", 1, "customer-list-selector", 3, "change", "ngModelChange", "searchable", "clearable", "tabIndex", "ngModel", "items", "cxNgSelectA11y"], ["type", "button", 1, "close", 3, "click"], ["aria-hidden", "true"], ["type", "button", 1, "btn", "cx-asm-create-customer-btn", 3, "click"]],
  template: function CustomerListComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "div", 9);
      \u0275\u0275listener("esc", function CustomerListComponent_Template_div_esc_0_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.closeModal("Escape clicked"));
      });
      \u0275\u0275elementStart(1, "div", 10);
      \u0275\u0275elementContainerStart(2);
      \u0275\u0275elementStart(3, "div", 11)(4, "h2", 12);
      \u0275\u0275text(5);
      \u0275\u0275pipe(6, "cxTranslate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "div", 13);
      \u0275\u0275text(8);
      \u0275\u0275pipe(9, "cxTranslate");
      \u0275\u0275elementEnd();
      \u0275\u0275template(10, CustomerListComponent_10_Template, 1, 0, null, 14);
      \u0275\u0275elementEnd();
      \u0275\u0275template(11, CustomerListComponent_div_11_Template, 11, 24, "div", 15);
      \u0275\u0275pipe(12, "async");
      \u0275\u0275elementStart(13, "div", 16)(14, "div", 17)(15, "div", 18);
      \u0275\u0275template(16, CustomerListComponent_div_16_Template, 3, 3, "div", 19)(17, CustomerListComponent_div_17_Template, 3, 3, "div", 19)(18, CustomerListComponent_div_18_Template, 3, 3, "div", 19);
      \u0275\u0275pipe(19, "async");
      \u0275\u0275template(20, CustomerListComponent_cx_spinner_20_Template, 1, 0, "cx-spinner", 20);
      \u0275\u0275pipe(21, "async");
      \u0275\u0275template(22, CustomerListComponent_div_22_Template, 3, 2, "div", 20);
      \u0275\u0275pipe(23, "async");
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(24, CustomerListComponent_div_24_Template, 6, 11, "div", 21);
      \u0275\u0275pipe(25, "async");
      \u0275\u0275elementStart(26, "div", 22)(27, "button", 23);
      \u0275\u0275listener("click", function CustomerListComponent_Template_button_click_27_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.closeModal("Cancel click"));
      });
      \u0275\u0275text(28);
      \u0275\u0275pipe(29, "cxTranslate");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementContainerEnd();
      \u0275\u0275elementEnd()();
      \u0275\u0275template(30, CustomerListComponent_ng_template_30_Template, 1, 1, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(32, CustomerListComponent_ng_template_32_Template, 3, 2, "ng-template", null, 1, \u0275\u0275templateRefExtractor)(34, CustomerListComponent_ng_template_34_Template, 6, 11, "ng-template", null, 2, \u0275\u0275templateRefExtractor)(36, CustomerListComponent_ng_template_36_Template, 1, 1, "ng-template", null, 3, \u0275\u0275templateRefExtractor)(38, CustomerListComponent_ng_template_38_Template, 7, 14, "ng-template", null, 4, \u0275\u0275templateRefExtractor)(40, CustomerListComponent_ng_template_40_Template, 6, 8, "ng-template", null, 5, \u0275\u0275templateRefExtractor)(42, CustomerListComponent_ng_template_42_Template, 5, 11, "ng-template", null, 6, \u0275\u0275templateRefExtractor)(44, CustomerListComponent_ng_template_44_Template, 4, 4, "ng-template", null, 7, \u0275\u0275templateRefExtractor)(46, CustomerListComponent_ng_template_46_Template, 5, 4, "ng-template", null, 8, \u0275\u0275templateRefExtractor);
    }
    if (rf & 2) {
      const createCustomerButton_r38 = \u0275\u0275reference(47);
      \u0275\u0275property("cxFocus", ctx.focusConfig);
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(6, 12, "asm.customerList.title"), " ");
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(9, 14, "asm.customerList.description"), " ");
      \u0275\u0275advance(2);
      \u0275\u0275property("ngTemplateOutlet", createCustomerButton_r38);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", \u0275\u0275pipeBind1(12, 16, ctx.customerListsPage$));
      \u0275\u0275advance(5);
      \u0275\u0275property("ngIf", ctx.listsEmpty);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.listsError);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", \u0275\u0275pipeBind1(19, 18, ctx.customerSearchError$));
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", \u0275\u0275pipeBind1(21, 20, ctx.customerSearchLoading$));
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", \u0275\u0275pipeBind1(23, 22, ctx.customerSearchPage$));
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", \u0275\u0275pipeBind1(25, 24, ctx.customerListsPage$));
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(29, 26, "asm.createCustomerForm.cancel"), " ");
    }
  },
  dependencies: [NgForOf, NgIf, NgTemplateOutlet, DefaultValueAccessor, NgControlStatus, FormControlDirective, IconComponent, NgSelectComponent, NgModel, SpinnerComponent, FocusDirective, NgSelectA11yDirective, SortingComponent, PaginationComponent, AsyncPipe, TranslatePipe],
  encapsulation: 2
});
var CustomerListComponent = _CustomerListComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CustomerListComponent, [{
    type: Component,
    args: [{
      selector: "cx-customer-list",
      template: `<div
  class="cx-asm-customer-list cx-modal-container cx-asm-dialog"
  [cxFocus]="focusConfig"
  (esc)="closeModal('Escape clicked')"
>
  <div class="cx-modal-content">
    <!-- Modal Header -->
    <ng-container>
      <div class="cx-dialog-header modal-header">
        <h2 id="asm-customer-list-title" class="title modal-title">
          {{ 'asm.customerList.title' | cxTranslate }}
        </h2>
        <div id="asm-customer-list-desc" class="cx-visually-hidden">
          {{ 'asm.customerList.description' | cxTranslate }}
        </div>
        <ng-template *ngTemplateOutlet="createCustomerButton"></ng-template>
      </div>
      <div
        class="cx-dialog-sub-header modal-header"
        [class.tablet-mobile]="(breakpoint$ | async) !== BREAKPOINT.md"
        *ngIf="customerListsPage$ | async as customerListsPage"
      >
        <div
          class="cx-header-select"
          [class.mobile]="(breakpoint$ | async) === BREAKPOINT.xs"
        >
          <ng-template
            *ngTemplateOutlet="
              groupSelector;
              context: { customerListsPage: customerListsPage }
            "
          ></ng-template>
          <ng-template
            *ngTemplateOutlet="
              total;
              context: {
                customerSearchPage: customerSearchPage$ | async
              }
            "
          >
          </ng-template>
        </div>

        <div
          class="cx-header-actions"
          [class.mobile]="(breakpoint$ | async) === BREAKPOINT.xs"
        >
          <ng-template *ngTemplateOutlet="sort"></ng-template>
          <ng-template *ngTemplateOutlet="search"></ng-template>
        </div>
      </div>
      <!-- Modal Body -->
      <div class="cx-dialog-body modal-body">
        <div class="cx-dialog-row">
          <div class="cx-dialog-item">
            <div *ngIf="listsEmpty" class="cx-error-state">
              {{ 'asm.customerList.noLists' | cxTranslate }}
            </div>
            <div *ngIf="listsError" class="cx-error-state">
              {{ 'asm.customerList.listsError' | cxTranslate }}
            </div>
            <div *ngIf="customerSearchError$ | async" class="cx-error-state">
              {{ 'generalErrors.pageFailure' | cxTranslate }}
            </div>
            <cx-spinner *ngIf="customerSearchLoading$ | async"></cx-spinner>
            <div *ngIf="customerSearchPage$ | async as customerSearchPage">
              <table
                id="asm-cusomer-list-table"
                role="table"
                class="table"
                *ngIf="loaded"
              >
                <caption class="cx-visually-hidden">
                  {{
                    'asm.customerList.title' | cxTranslate
                  }}
                </caption>
                <thead *ngIf="(breakpoint$ | async) === BREAKPOINT.md">
                  <tr role="row">
                    <th
                      role="columnheader"
                      *ngFor="let column of customerListConfig?.columns"
                    >
                      <span
                        *ngIf="
                          column.headerLocalizationKey &&
                          column.headerLocalizationKey !== 'hideHeaders'
                        "
                      >
                        <ng-container
                          *ngIf="
                            column.headerLocalizationKey ===
                            'asm.customerList.tableHeader.customer'
                          "
                        >
                          {{
                            'asm.customerList.tableHeader.customerName'
                              | cxTranslate
                          }}
                        </ng-container>
                        <ng-container
                          *ngIf="
                            column.headerLocalizationKey ===
                            'asm.customerList.tableHeader.email'
                          "
                        >
                          {{
                            'asm.customerList.tableHeader.emailId' | cxTranslate
                          }}
                        </ng-container>
                        <ng-container
                          *ngIf="
                            column.headerLocalizationKey !==
                              'asm.customerList.tableHeader.customer' &&
                            column.headerLocalizationKey !==
                              'asm.customerList.tableHeader.email'
                          "
                        >
                          {{ column.headerLocalizationKey | cxTranslate }}
                        </ng-container>
                      </span>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr
                    role="row"
                    *ngFor="let customerEntry of customerSearchPage?.entries"
                  >
                    <!-- multi columns if desktop -->
                    <ng-container
                      *ngIf="(breakpoint$ | async) === BREAKPOINT.md"
                    >
                      <td
                        role="cell"
                        *ngFor="let column of customerListConfig?.columns"
                      >
                        <ng-template
                          *ngTemplateOutlet="
                            cell;
                            context: {
                              customerEntry: customerEntry,
                              column: column,
                              showHeader: false
                            }
                          "
                        ></ng-template>
                      </td>
                    </ng-container>
                    <!-- two column if tablet -->
                    <ng-container
                      *ngIf="(breakpoint$ | async) === BREAKPOINT.sm"
                    >
                      <td role="cell" class="cx-multi-cell">
                        <ng-container
                          *ngFor="
                            let column of customerListConfig?.columns;
                            let even = even
                          "
                        >
                          <ng-container *ngIf="even">
                            <ng-template
                              *ngTemplateOutlet="
                                cell;
                                context: {
                                  customerEntry: customerEntry,
                                  column: column,
                                  showHeader: true
                                }
                              "
                            ></ng-template>
                          </ng-container>
                        </ng-container>
                      </td>
                      <td role="cell" class="cx-multi-cell">
                        <ng-container
                          *ngFor="
                            let column of customerListConfig?.columns;
                            let odd = odd
                          "
                        >
                          <ng-container *ngIf="odd">
                            <ng-template
                              *ngTemplateOutlet="
                                cell;
                                context: {
                                  customerEntry: customerEntry,
                                  column: column,
                                  showHeader: true
                                }
                              "
                            ></ng-template>
                          </ng-container>
                        </ng-container>
                      </td>
                    </ng-container>
                    <!-- one column if mobile -->
                    <td
                      role="cell"
                      class="cx-multi-cell"
                      *ngIf="(breakpoint$ | async) === BREAKPOINT.xs"
                    >
                      <ng-container
                        *ngFor="let column of customerListConfig?.columns"
                      >
                        <ng-template
                          *ngTemplateOutlet="
                            cell;
                            context: {
                              customerEntry: customerEntry,
                              column: column,
                              showHeader: true
                            }
                          "
                        ></ng-template>
                      </ng-container>
                    </td>
                  </tr>
                </tbody>
              </table>
              <div
                class="cx-empty-state"
                *ngIf="!customerSearchPage?.entries.length"
              >
                {{ 'asm.customerList.noCustomers' | cxTranslate }}
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- Modal Foot -->
      <div
        class="cx-dialog-sub-header modal-header cx-dialog-foot"
        [class.asm-mobile-pagination]="(breakpoint$ | async) !== BREAKPOINT.md"
        *ngIf="customerListsPage$ | async as customerListsPage"
      >
        <div
          class="cx-header-actions"
          [class.mobile]="(breakpoint$ | async) === BREAKPOINT.xs"
        >
          <div *ngIf="customerSearchPage$ | async as customerSearchPage">
            <cx-pagination
              [pagination]="customerSearchPage.pagination"
              (viewPageEvent)="changePage($event)"
            ></cx-pagination>
          </div>
        </div>
      </div>
      <div class="cx-dialog-footer modal-footer">
        <button
          type="button"
          class="btn cx-asm-customer-list-btn-cancel"
          (click)="closeModal('Cancel click')"
        >
          {{ 'asm.createCustomerForm.cancel' | cxTranslate }}
        </button>
      </div>
    </ng-container>
  </div>
</div>

<ng-template
  #cell
  let-customerEntry="customerEntry"
  let-column="column"
  let-showHeader="showHeader"
>
  <div
    class="cx-cell-container"
    *ngIf="column.headerLocalizationKey !== 'hideHeaders'"
  >
    <span class="cx-header-text" *ngIf="showHeader">
      {{ column.headerLocalizationKey | cxTranslate }}
    </span>

    <ng-container *ngIf="!column.actionType">
      <ng-container
        *ngTemplateOutlet="
          cellContent;
          context: { column: column, customerEntry: customerEntry }
        "
      ></ng-container>
    </ng-container>

    <div
      class="cx-avatar"
      *ngIf="
        customerListConfig?.showAvatar &&
        column?.actionType === customerListColumnActionType?.START_SESSION
      "
    >
      <img
        *ngIf="customerEntry?.userAvatar?.url"
        [attr.src]="
          occConfig?.backend?.occ?.baseUrl + customerEntry?.userAvatar?.url
        "
        alt="{{ 'asm.mainLogoLabel' | cxTranslate }}"
      />
      <div class="cx-avatar-text" *ngIf="!customerEntry?.userAvatar?.url">
        {{ getBadgeText(customerEntry) }}
      </div>
    </div>

    <button
      *ngIf="column.actionType"
      (click)="startColumnAction(customerEntry, column.actionType)"
      class="btn btn-link cx-action-link cx-btn-cell"
      [class]="column.actionType === 'ACTIVE_CART' ? 'cx-cart' : ''"
      [disabled]="isRequired(customerEntry, column.actionType)"
      [attr.title]="
        column.icon
          ? (column.icon.captionLocalizationKey ?? column.headerLocalizationKey
            | cxTranslate)
          : undefined
      "
      [attr.aria-label]="
        column.icon
          ? (column.icon.captionLocalizationKey ?? column.headerLocalizationKey
            | cxTranslate)
          : undefined
      "
    >
      <ng-container
        *ngTemplateOutlet="
          cellContent;
          context: { column: column, customerEntry: customerEntry }
        "
      ></ng-container>
    </button>
  </div>
</ng-template>
<ng-template #cellContent let-customerEntry="customerEntry" let-column="column">
  <div>
    <span *ngIf="!column.icon">{{
      column.renderer?.(customerEntry) || ''
    }}</span>
    <cx-icon
      *ngIf="column.icon"
      [attr.title]="
        !column.actionType
          ? (column.icon.captionLocalizationKey ?? column.headerLocalizationKey
            | cxTranslate)
          : undefined
      "
      [class.cx-action-color]="
        column.actionType && !isRequired(customerEntry, column.actionType)
      "
      [type]="column.icon.symbol"
      [attr.aria-label]="
        !column.actionType
          ? (column.icon.captionLocalizationKey ?? column.headerLocalizationKey
            | cxTranslate)
          : undefined
      "
    ></cx-icon>
  </div>
</ng-template>

<ng-template #search>
  <div class="form-group search-wrapper">
    <input
      [formControl]="searchBox"
      (keyup)="onKey($event)"
      type="text"
      class="form-control"
      placeholder="{{ 'asm.customerList.searchBox' | cxTranslate }}"
      attr.aria-label="{{ 'asm.customerList.enterSearchBox' | cxTranslate }}"
    />
    <cx-icon
      [type]="iconTypes.SEARCH"
      role="button"
      [attr.aria-label]="'storeFinder.searchNearestStores' | cxTranslate"
      class="search"
      (click)="searchCustomers()"
    ></cx-icon>
  </div>
</ng-template>

<ng-template #total let-customerSearchPage="customerSearchPage">
  <span class="cx-total" *ngIf="customerSearchPage?.pagination?.totalResults">
    <ng-container *ngIf="customerSearchPage?.pagination?.totalResults > 1">
      {{
        'asm.customerList.noOfCustomers'
          | cxTranslate: { count: customerSearchPage?.pagination?.totalResults }
      }}
    </ng-container>
    <ng-container *ngIf="customerSearchPage?.pagination?.totalResults === 1">
      {{ 'asm.customerList.oneCustomer' | cxTranslate }}
    </ng-container>
  </span>
</ng-template>

<ng-template #sort>
  <label>
    <span class="cx-visually-hidden">{{
      'asm.customerList.tableSort.sortBy' | cxTranslate
    }}</span>
    <cx-sorting
      class="sort-selector"
      [sortOptions]="sorts"
      [sortLabels]="getSortLabels() | async"
      (sortListEvent)="changeSortCode($event)"
      [selectedOption]="sortCode"
      placeholder="{{ 'asm.customerList.tableSort.sortBy' | cxTranslate }}"
      [cxNgSelectA11y]="{
        ariaLabel: sortCode,
        ariaControls: 'asm-cusomer-list-table'
      }"
    ></cx-sorting>
  </label>
</ng-template>

<ng-template #pagination>
  <div class="cx-pagination-buttons">
    <div>
      {{
        'asm.customerList.page.page' | cxTranslate: { count: currentPage + 1 }
      }}
    </div>
    <button
      *ngIf="maxPage > 0"
      (click)="goToPreviousPage()"
      class="btn btn-link cx-action-link cx-btn-previous"
      [disabled]="currentPage === 0 || !loaded"
    >
      <cx-icon class="previous" [type]="iconTypes.CARET_LEFT"></cx-icon
      ><span>{{ 'asm.customerList.page.previous' | cxTranslate }}</span>
    </button>
    <button
      *ngIf="maxPage > 0"
      (click)="goToNextPage()"
      class="btn btn-link cx-action-link cx-btn-next"
      [disabled]="currentPage === maxPage || !loaded"
    >
      <span>{{ 'asm.customerList.page.next' | cxTranslate }}</span
      ><cx-icon class="next" [type]="iconTypes.CARET_RIGHT"></cx-icon>
    </button>
  </div>
</ng-template>

<ng-template #groupSelector let-customerListsPage="customerListsPage">
  <label>
    <span class="cx-visually-hidden">{{
      'asm.customerList.title' | cxTranslate
    }}</span>
    <ng-select
      class="customer-list-selector"
      [searchable]="false"
      [clearable]="false"
      (change)="onChangeCustomerGroup()"
      [tabIndex]="0"
      [(ngModel)]="selectedUserGroupId"
      [items]="customerListsPage?.userGroups"
      bindLabel="name"
      bindValue="uid"
      [cxNgSelectA11y]="{
        ariaLabel: getGroupName(customerListsPage, selectedUserGroupId),
        ariaControls: 'asm-cusomer-list-table'
      }"
    >
    </ng-select>
  </label>
</ng-template>

<ng-template #closeButton>
  <button
    type="button"
    class="close"
    attr.aria-label="{{ 'common.close' | cxTranslate }}"
    (click)="closeModal('Cross click')"
  >
    <span aria-hidden="true">
      <cx-icon [type]="iconTypes.CLOSE"></cx-icon>
    </span>
  </button>
</ng-template>

<ng-template #createCustomerButton>
  <button
    type="button"
    class="btn cx-asm-create-customer-btn"
    (click)="createCustomer()"
  >
    <cx-icon [type]="iconTypes.USER_PLUS"></cx-icon>
    <span>{{ 'asm.customerList.createCustomer' | cxTranslate }}</span>
  </button>
</ng-template>
`
    }]
  }], () => [{
    type: LaunchDialogService
  }, {
    type: BreakpointService
  }, {
    type: AsmConfig
  }, {
    type: TranslationService
  }, {
    type: AsmCustomerListFacade
  }, {
    type: OccConfig
  }], {
    addNewCustomerLink: [{
      type: ViewChild,
      args: ["addNewCustomerLink"]
    }]
  });
})();
var defaultCustomerListLayoutConfig = {
  launch: {
    ASM_CUSTOMER_LIST: {
      inlineRoot: true,
      component: CustomerListComponent,
      dialogType: DIALOG_TYPE.DIALOG
    }
  }
};
var defaultAsmLayoutConfig = {
  launch: {
    ASM: {
      outlet: "cx-storefront",
      component: AsmMainUiComponent
    }
  }
};
var defaultAsmPaginationConfig = {
  pagination: {
    rangeCount: 2,
    addPrevious: true,
    addNext: true,
    addStart: false,
    addEnd: false,
    addFirst: true,
    addLast: true,
    addDots: true,
    substituteDotsForSingularPage: true,
    dotsLabel: "\xB7\xB7\xB7"
  }
};
var defaultBindCartLayoutConfig = {
  launch: {
    [
      "ASM_BIND_CART"
      /* LAUNCH_CALLER.ASM_BIND_CART */
    ]: {
      inlineRoot: true,
      component: AsmBindCartDialogComponent,
      dialogType: DIALOG_TYPE.DIALOG
    }
  }
};
var defaultSaveCartLayoutConfig = {
  launch: {
    [
      "ASM_SAVE_CART"
      /* LAUNCH_CALLER.ASM_SAVE_CART */
    ]: {
      inlineRoot: true,
      component: AsmSaveCartDialogComponent,
      dialogType: DIALOG_TYPE.DIALOG
    }
  }
};
var defaultSwitchCustomerLayoutConfig = {
  launch: {
    [
      "ASM_SWITCH_CUSTOMER"
      /* LAUNCH_CALLER.ASM_SWITCH_CUSTOMER */
    ]: {
      inlineRoot: true,
      component: AsmSwitchCustomerDialogComponent,
      dialogType: DIALOG_TYPE.DIALOG
    }
  }
};
var _AsmComponentsModule = class _AsmComponentsModule {
};
_AsmComponentsModule.\u0275fac = function AsmComponentsModule_Factory(t) {
  return new (t || _AsmComponentsModule)();
};
_AsmComponentsModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
  type: _AsmComponentsModule
});
_AsmComponentsModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
  providers: [provideDefaultConfig(defaultAsmLayoutConfig), provideDefaultConfig(defaultBindCartLayoutConfig), provideDefaultConfig(defaultSaveCartLayoutConfig), provideDefaultConfig(defaultSwitchCustomerLayoutConfig), provideDefaultConfig(defaultCustomerListLayoutConfig), provideDefaultConfig(defaultAsmPaginationConfig), provideDefaultConfig(defaultAsmCreateCustomerFormLayoutConfig)],
  imports: [CommonModule, ReactiveFormsModule, I18nModule, FormErrorsModule, IconModule, NgSelectModule, FormsModule, SpinnerModule, PasswordVisibilityToggleModule, KeyboardFocusModule, NgSelectA11yModule, SortingModule, PaginationModule, MessageComponentModule]
});
var AsmComponentsModule = _AsmComponentsModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AsmComponentsModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, ReactiveFormsModule, I18nModule, FormErrorsModule, IconModule, NgSelectModule, FormsModule, SpinnerModule, PasswordVisibilityToggleModule, KeyboardFocusModule, NgSelectA11yModule, SortingModule, PaginationModule, MessageComponentModule],
      declarations: [AsmBindCartDialogComponent, AsmSaveCartDialogComponent, AsmMainUiComponent, CSAgentLoginFormComponent, CustomerListComponent, CustomerSelectionComponent, AsmSessionTimerComponent, FormatTimerPipe, CustomerEmulationComponent, AsmToggleUiComponent, AsmBindCartComponent, AsmSwitchCustomerDialogComponent, DotSpinnerComponent, AsmCreateCustomerFormComponent],
      exports: [AsmBindCartDialogComponent, AsmSaveCartDialogComponent, AsmMainUiComponent, CSAgentLoginFormComponent, CustomerListComponent, CustomerSelectionComponent, AsmSessionTimerComponent, FormatTimerPipe, CustomerEmulationComponent, AsmToggleUiComponent, AsmBindCartComponent, AsmSwitchCustomerDialogComponent, DotSpinnerComponent, AsmCreateCustomerFormComponent],
      providers: [provideDefaultConfig(defaultAsmLayoutConfig), provideDefaultConfig(defaultBindCartLayoutConfig), provideDefaultConfig(defaultSaveCartLayoutConfig), provideDefaultConfig(defaultSwitchCustomerLayoutConfig), provideDefaultConfig(defaultCustomerListLayoutConfig), provideDefaultConfig(defaultAsmPaginationConfig), provideDefaultConfig(defaultAsmCreateCustomerFormLayoutConfig)]
    }]
  }], null, null);
})();

// node_modules/@spartacus/asm/fesm2022/spartacus-asm-occ.mjs
var _OccAsmAdapter = class _OccAsmAdapter {
  constructor(http, occEndpointsService, converterService, config, baseSiteService) {
    this.http = http;
    this.occEndpointsService = occEndpointsService;
    this.converterService = converterService;
    this.config = config;
    this.baseSiteService = baseSiteService;
    this.logger = inject(LoggerService);
    this.baseSiteService.getActive().subscribe((value) => this.activeBaseSite = value);
  }
  getHeaders() {
    return InterceptorUtil.createHeader(USE_CUSTOMER_SUPPORT_AGENT_TOKEN, true, new HttpHeaders());
  }
  customerLists() {
    const headers = this.getHeaders();
    const params = new HttpParams().set("baseSite", this.activeBaseSite);
    const url = this.occEndpointsService.buildUrl("asmCustomerLists", {}, {
      baseSite: false,
      prefix: false
    });
    return this.http.get(url, {
      headers,
      params
    }).pipe(catchError((error) => {
      throw normalizeHttpError(error, this.logger);
    }), this.converterService.pipeable(CUSTOMER_LISTS_NORMALIZER));
  }
  customerSearch(options) {
    const headers = this.getHeaders();
    let params = new HttpParams().set("baseSite", this.activeBaseSite);
    if (options.sort !== void 0) {
      params = params.set("sort", options.sort);
    } else {
      if (!options.customerListId) {
        params = params.set("sort", "byNameAsc");
      }
    }
    if (options.query !== void 0) {
      params = params.set("query", options.query);
    }
    if (options.pageSize !== void 0) {
      params = params.set("pageSize", options.pageSize.toString());
    }
    if (options.currentPage !== void 0) {
      params = params.set("currentPage", options.currentPage.toString());
    }
    if (options.customerListId !== void 0) {
      params = params.set("customerListId", options.customerListId);
    }
    const url = this.occEndpointsService.buildUrl("asmCustomerSearch", {}, {
      baseSite: false,
      prefix: false
    });
    return this.http.get(url, {
      headers,
      params
    }).pipe(catchError((error) => {
      throw normalizeHttpError(error, this.logger);
    }), this.converterService.pipeable(CUSTOMER_SEARCH_PAGE_NORMALIZER));
  }
  bindCart({
    cartId,
    customerId
  }) {
    const headers = InterceptorUtil.createHeader(USE_CUSTOMER_SUPPORT_AGENT_TOKEN, true, new HttpHeaders());
    const params = new HttpParams().set("baseSite", this.activeBaseSite).set("cartId", cartId).set("customerId", customerId);
    const url = this.occEndpointsService.buildUrl("asmBindCart", {}, {
      baseSite: false,
      prefix: false
    });
    return this.http.post(url, {}, {
      headers,
      params
    }).pipe(catchError((error) => {
      throw normalizeHttpError(error, this.logger);
    }));
  }
  createCustomer(user) {
    const headers = this.getHeaders();
    const params = new HttpParams().set("baseSite", this.activeBaseSite);
    const url = this.occEndpointsService.buildUrl("asmCreateCustomer", {}, {
      baseSite: false,
      prefix: false
    });
    return this.http.post(url, user, {
      headers,
      params
    }).pipe(catchError((error) => {
      throw normalizeHttpError(error, this.logger);
    }));
  }
};
_OccAsmAdapter.\u0275fac = function OccAsmAdapter_Factory(t) {
  return new (t || _OccAsmAdapter)(\u0275\u0275inject(HttpClient), \u0275\u0275inject(OccEndpointsService), \u0275\u0275inject(ConverterService), \u0275\u0275inject(AsmConfig), \u0275\u0275inject(BaseSiteService));
};
_OccAsmAdapter.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
  token: _OccAsmAdapter,
  factory: _OccAsmAdapter.\u0275fac
});
var OccAsmAdapter = _OccAsmAdapter;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OccAsmAdapter, [{
    type: Injectable
  }], () => [{
    type: HttpClient
  }, {
    type: OccEndpointsService
  }, {
    type: ConverterService
  }, {
    type: AsmConfig
  }, {
    type: BaseSiteService
  }], null);
})();
var defaultOccAsmConfig = {
  backend: {
    occ: {
      endpoints: {
        asmCustomerSearch: "/assistedservicewebservices/customers/search",
        asmCustomerLists: "/assistedservicewebservices/customerlists",
        asmBindCart: "/assistedservicewebservices/bind-cart",
        asmCreateCustomer: "/assistedservicewebservices/customers"
      }
    }
  }
};
var _AsmOccModule = class _AsmOccModule {
};
_AsmOccModule.\u0275fac = function AsmOccModule_Factory(t) {
  return new (t || _AsmOccModule)();
};
_AsmOccModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
  type: _AsmOccModule
});
_AsmOccModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
  providers: [provideDefaultConfig(defaultOccAsmConfig), {
    provide: AsmAdapter,
    useClass: OccAsmAdapter
  }],
  imports: [CommonModule]
});
var AsmOccModule = _AsmOccModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AsmOccModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule],
      providers: [provideDefaultConfig(defaultOccAsmConfig), {
        provide: AsmAdapter,
        useClass: OccAsmAdapter
      }]
    }]
  }], null, null);
})();

// node_modules/@spartacus/asm/fesm2022/spartacus-asm.mjs
var _AsmModule = class _AsmModule {
};
_AsmModule.\u0275fac = function AsmModule_Factory(t) {
  return new (t || _AsmModule)();
};
_AsmModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
  type: _AsmModule
});
_AsmModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
  imports: [AsmComponentsModule, AsmCoreModule, AsmOccModule]
});
var AsmModule = _AsmModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AsmModule, [{
    type: NgModule,
    args: [{
      imports: [AsmComponentsModule, AsmCoreModule, AsmOccModule]
    }]
  }], null, null);
})();
export {
  AsmModule
};
//# sourceMappingURL=chunk-C7CQLAXG.js.map
