import {
  UserEmailFacade,
  UserPasswordFacade,
  UserProfileFacade,
  UserRegisterFacade
} from "./chunk-IOXUQC7Q.js";
import {
  CardComponent,
  CardModule,
  CheckboxControlValueAccessor,
  CheckboxRequiredValidator,
  CustomFormValidators,
  DIALOG_TYPE,
  DefaultValueAccessor,
  FocusDirective,
  FormArrayName,
  FormControlName,
  FormErrorsComponent,
  FormErrorsModule,
  FormGroupDirective,
  FormGroupName,
  FormsModule,
  ICON_TYPE,
  IconComponent,
  IconModule,
  KeyboardFocusModule,
  LaunchDialogService,
  NgControlStatus,
  NgControlStatusGroup,
  NgForm,
  NgModel,
  NgOptionComponent,
  NgSelectA11yDirective,
  NgSelectA11yModule,
  NgSelectComponent,
  NgSelectModule,
  PasswordVisibilityToggleDirective,
  PasswordVisibilityToggleModule,
  RadioControlValueAccessor,
  ReactiveFormsModule,
  RequiredValidator,
  SpinnerComponent,
  SpinnerModule,
  UntypedFormBuilder,
  UntypedFormControl,
  UntypedFormGroup,
  Validators,
  getAddressNumbers,
  sortTitles,
  ɵNgNoValidate
} from "./chunk-TEI6YMHW.js";
import {
  AnonymousConsentsConfig,
  AnonymousConsentsService,
  AsyncPipe,
  AuthConfigService,
  AuthGuard,
  AuthRedirectService,
  AuthService,
  BehaviorSubject,
  ChangeDetectionStrategy,
  CommonModule,
  Component,
  ElementRef,
  EventEmitter,
  GlobalMessageService,
  GlobalMessageType,
  HostListener,
  HttpErrorModel,
  I18nModule,
  Injectable,
  Input,
  NgForOf,
  NgIf,
  NgModule,
  NotAuthGuard,
  OAuthFlow,
  Output,
  RouterLink,
  RouterModule,
  RoutingService,
  Subscription,
  TranslatePipe,
  TranslationService,
  UrlModule,
  UrlPipe,
  UserAddressService,
  ViewChild,
  ViewContainerRef,
  __spreadProps,
  __spreadValues,
  combineLatest,
  filter,
  first,
  map,
  provideDefaultConfig,
  setClassMetadata,
  switchMap,
  take,
  tap,
  ɵɵadvance,
  ɵɵattribute,
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
  ɵɵproperty,
  ɵɵpropertyInterpolate,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
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

// node_modules/@spartacus/user/fesm2022/spartacus-user-profile-components.mjs
function CloseAccountModalComponent_ng_container_0_div_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "div", 10);
    \u0275\u0275element(2, "cx-spinner");
    \u0275\u0275elementEnd()();
  }
}
function CloseAccountModalComponent_ng_container_0_ng_template_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 11)(1, "p", 12);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "cxTranslate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 13)(5, "button", 14);
    \u0275\u0275listener("click", function CloseAccountModalComponent_ng_container_0_ng_template_13_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.closeAccount());
    });
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "cxTranslate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "button", 15);
    \u0275\u0275listener("click", function CloseAccountModalComponent_ng_container_0_ng_template_13_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.dismissModal("Cancel"));
    });
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "cxTranslate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 3, "closeAccount.confirmAccountClosureMessage"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(7, 5, "closeAccount.closeMyAccount"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(10, 7, "common.cancel"), " ");
  }
}
function CloseAccountModalComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 2);
    \u0275\u0275listener("esc", function CloseAccountModalComponent_ng_container_0_Template_div_esc_1_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.dismissModal("Escape click"));
    });
    \u0275\u0275elementStart(2, "div", 3)(3, "div", 4)(4, "h3", 5);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "cxTranslate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 6);
    \u0275\u0275pipe(8, "cxTranslate");
    \u0275\u0275listener("click", function CloseAccountModalComponent_ng_container_0_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.dismissModal("Cross click"));
    });
    \u0275\u0275elementStart(9, "span", 7);
    \u0275\u0275element(10, "cx-icon", 8);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(11, CloseAccountModalComponent_ng_container_0_div_11_Template, 3, 0, "div", 9);
    \u0275\u0275pipe(12, "async");
    \u0275\u0275template(13, CloseAccountModalComponent_ng_container_0_ng_template_13_Template, 11, 9, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const loaded_r4 = \u0275\u0275reference(14);
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("cxFocus", ctx_r1.focusConfig);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(6, 6, "closeAccount.confirmAccountClosure"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(8, 8, "common.close"));
    \u0275\u0275advance(3);
    \u0275\u0275property("type", ctx_r1.iconTypes.CLOSE);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", \u0275\u0275pipeBind1(12, 10, ctx_r1.isLoading$))("ngIfElse", loaded_r4);
  }
}
var _c0 = ["element"];
var _c1 = () => ({
  cxRoute: "home"
});
var _c2 = () => ({
  cxRoute: "login"
});
function ForgotPasswordComponent_cx_spinner_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "cx-spinner", 7);
  }
}
var _c3 = (a0) => ({
  ariaLabel: a0
});
var _c4 = () => ({
  cxRoute: "termsAndConditions"
});
function RegisterComponent_section_0_label_60_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "label");
    \u0275\u0275element(1, "input", 25);
    \u0275\u0275elementStart(2, "span", 21);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const anonymousConsent_r3 = ctx.ngIf;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("checked", ctx_r1.isConsentGiven(anonymousConsent_r3.consent));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", anonymousConsent_r3.template, " ");
  }
}
function RegisterComponent_section_0_div_62_div_1_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div")(1, "label")(2, "input", 28);
    \u0275\u0275listener("change", function RegisterComponent_section_0_div_62_div_1_div_1_Template_input_change_2_listener($event) {
      \u0275\u0275restoreView(_r4);
      const i_r5 = \u0275\u0275nextContext().index;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.updateAdditionalConsents($event, i_r5));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 21);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275element(5, "cx-form-errors", 12);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const id_r6 = ctx.ngIf;
    const ctx_r6 = \u0275\u0275nextContext();
    const control_r8 = ctx_r6.$implicit;
    const i_r5 = ctx_r6.index;
    const consents_r9 = \u0275\u0275nextContext().ngIf;
    \u0275\u0275advance(2);
    \u0275\u0275property("required", consents_r9[i_r5].required)("name", id_r6)("formControlName", i_r5);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", consents_r9[i_r5].template.description, " ");
    \u0275\u0275advance();
    \u0275\u0275property("control", control_r8);
  }
}
function RegisterComponent_section_0_div_62_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 17);
    \u0275\u0275template(1, RegisterComponent_section_0_div_62_div_1_div_1_Template, 6, 5, "div", 18);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const i_r5 = ctx.index;
    const consents_r9 = \u0275\u0275nextContext().ngIf;
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", consents_r9[i_r5] == null ? null : consents_r9[i_r5].template == null ? null : consents_r9[i_r5].template.id);
  }
}
function RegisterComponent_section_0_div_62_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 26);
    \u0275\u0275template(1, RegisterComponent_section_0_div_62_div_1_Template, 2, 1, "div", 27);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.additionalConsents.controls);
  }
}
function RegisterComponent_section_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "section", 2);
    \u0275\u0275element(1, "div", 3);
    \u0275\u0275pipe(2, "cxTranslate");
    \u0275\u0275elementStart(3, "div", 4)(4, "div", 5)(5, "div", 6)(6, "form", 7);
    \u0275\u0275listener("ngSubmit", function RegisterComponent_section_0_Template_form_ngSubmit_6_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.submitForm());
    });
    \u0275\u0275elementStart(7, "div", 8)(8, "label")(9, "span", 9);
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "cxTranslate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(12, "ng-select", 10);
    \u0275\u0275pipe(13, "async");
    \u0275\u0275pipe(14, "cxTranslate");
    \u0275\u0275pipe(15, "cxTranslate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "div", 8)(17, "label")(18, "span", 9);
    \u0275\u0275text(19);
    \u0275\u0275pipe(20, "cxTranslate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(21, "input", 11);
    \u0275\u0275pipe(22, "cxTranslate");
    \u0275\u0275element(23, "cx-form-errors", 12);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(24, "div", 8)(25, "label")(26, "span", 9);
    \u0275\u0275text(27);
    \u0275\u0275pipe(28, "cxTranslate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(29, "input", 13);
    \u0275\u0275pipe(30, "cxTranslate");
    \u0275\u0275element(31, "cx-form-errors", 12);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(32, "div", 8)(33, "label")(34, "span", 9);
    \u0275\u0275text(35);
    \u0275\u0275pipe(36, "cxTranslate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(37, "input", 14);
    \u0275\u0275pipe(38, "cxTranslate");
    \u0275\u0275element(39, "cx-form-errors", 12);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(40, "div", 8)(41, "label")(42, "span", 9);
    \u0275\u0275text(43);
    \u0275\u0275pipe(44, "cxTranslate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(45, "input", 15);
    \u0275\u0275pipe(46, "cxTranslate");
    \u0275\u0275pipe(47, "cxTranslate");
    \u0275\u0275element(48, "cx-form-errors", 12);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(49, "div", 8)(50, "label")(51, "span", 9);
    \u0275\u0275text(52);
    \u0275\u0275pipe(53, "cxTranslate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(54, "input", 16);
    \u0275\u0275pipe(55, "cxTranslate");
    \u0275\u0275pipe(56, "cxTranslate");
    \u0275\u0275element(57, "cx-form-errors", 12);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(58, "div", 8)(59, "div", 17);
    \u0275\u0275template(60, RegisterComponent_section_0_label_60_Template, 4, 2, "label", 18);
    \u0275\u0275pipe(61, "async");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(62, RegisterComponent_section_0_div_62_Template, 2, 1, "div", 19);
    \u0275\u0275elementStart(63, "div", 8)(64, "div", 17)(65, "label");
    \u0275\u0275element(66, "input", 20);
    \u0275\u0275elementStart(67, "span", 21);
    \u0275\u0275text(68);
    \u0275\u0275pipe(69, "cxTranslate");
    \u0275\u0275elementStart(70, "a", 22);
    \u0275\u0275pipe(71, "cxUrl");
    \u0275\u0275text(72);
    \u0275\u0275pipe(73, "cxTranslate");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(74, "cx-form-errors", 12);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(75, "button", 23);
    \u0275\u0275text(76);
    \u0275\u0275pipe(77, "cxTranslate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(78, "a", 24);
    \u0275\u0275pipe(79, "cxUrl");
    \u0275\u0275text(80);
    \u0275\u0275pipe(81, "cxTranslate");
    \u0275\u0275elementEnd()()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(2, 34, "common.loaded"));
    \u0275\u0275advance(5);
    \u0275\u0275property("formGroup", ctx_r1.registerForm);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(11, 36, "register.title"));
    \u0275\u0275advance(2);
    \u0275\u0275property("clearable", false)("items", \u0275\u0275pipeBind1(13, 38, ctx_r1.titles$))("placeholder", \u0275\u0275pipeBind1(14, 40, "register.selectTitle"))("searchable", false)("cxNgSelectA11y", \u0275\u0275pureFunction1(82, _c3, \u0275\u0275pipeBind1(15, 42, "register.title")));
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(20, 44, "register.firstName.label"));
    \u0275\u0275advance(2);
    \u0275\u0275propertyInterpolate("placeholder", \u0275\u0275pipeBind1(22, 46, "register.firstName.placeholder"));
    \u0275\u0275advance(2);
    \u0275\u0275property("control", ctx_r1.registerForm.get("firstName"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(28, 48, "register.lastName.label"));
    \u0275\u0275advance(2);
    \u0275\u0275propertyInterpolate("placeholder", \u0275\u0275pipeBind1(30, 50, "register.lastName.placeholder"));
    \u0275\u0275advance(2);
    \u0275\u0275property("control", ctx_r1.registerForm.get("lastName"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(36, 52, "register.emailAddress.label"));
    \u0275\u0275advance(2);
    \u0275\u0275propertyInterpolate("placeholder", \u0275\u0275pipeBind1(38, 54, "register.emailAddress.placeholder"));
    \u0275\u0275advance(2);
    \u0275\u0275property("control", ctx_r1.registerForm.get("email"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(44, 56, "register.password.label"));
    \u0275\u0275advance(2);
    \u0275\u0275propertyInterpolate("placeholder", \u0275\u0275pipeBind1(46, 58, "register.password.placeholder"));
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(47, 60, "register.password.placeholder"));
    \u0275\u0275advance(3);
    \u0275\u0275property("control", ctx_r1.registerForm.get("password"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(53, 62, "register.confirmPassword.label"));
    \u0275\u0275advance(2);
    \u0275\u0275propertyInterpolate("placeholder", \u0275\u0275pipeBind1(55, 64, "register.confirmPassword.placeholder"));
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(56, 66, "register.confirmPassword.placeholder"));
    \u0275\u0275advance(3);
    \u0275\u0275property("control", ctx_r1.registerForm.get("passwordconf"));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", \u0275\u0275pipeBind1(61, 68, ctx_r1.anonymousConsent$));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.additionalRegistrationConsents);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(69, 70, "register.confirmThatRead"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", \u0275\u0275pipeBind1(71, 72, \u0275\u0275pureFunction0(84, _c4)));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(73, 74, "register.termsAndConditions"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("control", ctx_r1.registerForm.get("termsandconditions"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(77, 76, "register.register"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", \u0275\u0275pipeBind1(79, 78, \u0275\u0275pureFunction0(85, _c2)));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(81, 80, "register.signIn"));
  }
}
function RegisterComponent_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 29);
    \u0275\u0275element(1, "cx-spinner");
    \u0275\u0275elementEnd();
  }
}
function ResetPasswordComponent_cx_spinner_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "cx-spinner", 2);
  }
}
function ResetPasswordComponent_form_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "form", 3);
    \u0275\u0275listener("ngSubmit", function ResetPasswordComponent_form_2_Template_form_ngSubmit_0_listener() {
      const token_r2 = \u0275\u0275restoreView(_r1).ngIf;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onSubmit(token_r2));
    });
    \u0275\u0275elementStart(1, "label")(2, "span", 4);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "cxTranslate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(5, "input", 5);
    \u0275\u0275pipe(6, "cxTranslate");
    \u0275\u0275pipe(7, "cxTranslate");
    \u0275\u0275element(8, "cx-form-errors", 6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "label")(10, "span", 4);
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "cxTranslate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(13, "input", 7);
    \u0275\u0275pipe(14, "cxTranslate");
    \u0275\u0275pipe(15, "cxTranslate");
    \u0275\u0275element(16, "cx-form-errors", 6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "button", 8);
    \u0275\u0275text(18);
    \u0275\u0275pipe(19, "cxTranslate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("formGroup", ctx_r2.form);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 11, "register.newPassword"));
    \u0275\u0275advance(2);
    \u0275\u0275propertyInterpolate("placeholder", \u0275\u0275pipeBind1(6, 13, "register.password.placeholder"));
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(7, 15, "register.password.placeholder"));
    \u0275\u0275advance(3);
    \u0275\u0275property("control", ctx_r2.form.get("password"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(12, 17, "register.passwordMinRequirements"));
    \u0275\u0275advance(2);
    \u0275\u0275propertyInterpolate("placeholder", \u0275\u0275pipeBind1(14, 19, "register.confirmPassword.placeholder"));
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(15, 21, "register.confirmPassword.placeholder"));
    \u0275\u0275advance(3);
    \u0275\u0275property("control", ctx_r2.form.get("passwordConfirm"));
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r2.form.disabled);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(19, 23, "register.resetPassword"), " ");
  }
}
function UpdateEmailComponent_cx_spinner_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "cx-spinner", 9);
  }
}
function UpdatePasswordComponent_cx_spinner_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "cx-spinner", 9);
  }
}
function UpdateProfileComponent_cx_spinner_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "cx-spinner", 11);
  }
}
function UpdateProfileComponent_ng_option_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ng-option", 12);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const title_r1 = ctx.$implicit;
    \u0275\u0275property("value", title_r1.code);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(title_r1.name);
  }
}
var _c5 = ["submit"];
var _c6 = () => ({
  required: "true"
});
function AddressFormComponent_ng_container_2_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div")(1, "label")(2, "span", 6);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "cxTranslate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "ng-select", 25);
    \u0275\u0275pipe(6, "cxTranslate");
    \u0275\u0275pipe(7, "cxTranslate");
    \u0275\u0275listener("change", function AddressFormComponent_ng_container_2_div_1_Template_ng_select_change_5_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.countrySelected($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275element(8, "cx-form-errors", 8);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const countries_r4 = \u0275\u0275nextContext().ngIf;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 8, "addressForm.country"));
    \u0275\u0275advance(2);
    \u0275\u0275propertyInterpolate("placeholder", \u0275\u0275pipeBind1(6, 10, "addressForm.selectOne"));
    \u0275\u0275property("inputAttrs", \u0275\u0275pureFunction0(14, _c6))("searchable", true)("clearable", false)("items", countries_r4)("cxNgSelectA11y", \u0275\u0275pureFunction1(15, _c3, \u0275\u0275pipeBind1(7, 12, "addressForm.country")));
    \u0275\u0275advance(3);
    \u0275\u0275property("control", ctx_r2.addressForm.get("country.isocode"));
  }
}
function AddressFormComponent_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, AddressFormComponent_ng_container_2_div_1_Template, 9, 17, "div", 3);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const countries_r4 = ctx.ngIf;
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", countries_r4.length !== 0);
  }
}
function AddressFormComponent_div_4_ng_container_1_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "label")(2, "span", 6);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "cxTranslate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(5, "ng-select", 26);
    \u0275\u0275pipe(6, "cxTranslate");
    \u0275\u0275pipe(7, "cxTranslate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const titles_r5 = \u0275\u0275nextContext().ngIf;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 6, "addressForm.title"));
    \u0275\u0275advance(2);
    \u0275\u0275property("searchable", true)("clearable", false)("items", titles_r5)("placeholder", \u0275\u0275pipeBind1(6, 8, "addressForm.title"))("cxNgSelectA11y", \u0275\u0275pureFunction1(12, _c3, \u0275\u0275pipeBind1(7, 10, "addressForm.title")));
  }
}
function AddressFormComponent_div_4_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, AddressFormComponent_div_4_ng_container_1_div_1_Template, 8, 14, "div", 3);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const titles_r5 = ctx.ngIf;
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", titles_r5.length !== 0);
  }
}
function AddressFormComponent_div_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5);
    \u0275\u0275template(1, AddressFormComponent_div_4_ng_container_1_Template, 2, 1, "ng-container", 3);
    \u0275\u0275pipe(2, "async");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", \u0275\u0275pipeBind1(2, 1, ctx_r2.titles$));
  }
}
function AddressFormComponent_ng_container_53_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 18)(2, "label")(3, "span", 6);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "cxTranslate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(6, "ng-select", 28);
    \u0275\u0275pipe(7, "cxTranslate");
    \u0275\u0275pipe(8, "cxTranslate");
    \u0275\u0275element(9, "cx-form-errors", 8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const regions_r6 = \u0275\u0275nextContext().ngIf;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 10, "addressForm.state"));
    \u0275\u0275advance(2);
    \u0275\u0275propertyInterpolate("bindLabel", regions_r6[0].name ? "name" : "isocode");
    \u0275\u0275propertyInterpolate("bindValue", regions_r6[0].name ? "isocode" : "region");
    \u0275\u0275propertyInterpolate("placeholder", \u0275\u0275pipeBind1(7, 12, "addressForm.selectOne"));
    \u0275\u0275property("inputAttrs", \u0275\u0275pureFunction0(16, _c6))("searchable", true)("clearable", false)("items", regions_r6)("cxNgSelectA11y", \u0275\u0275pureFunction1(17, _c3, \u0275\u0275pipeBind1(8, 14, "addressForm.state")));
    \u0275\u0275advance(3);
    \u0275\u0275property("control", ctx_r2.addressForm.get("region.isocode"));
  }
}
function AddressFormComponent_ng_container_53_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0, 27);
    \u0275\u0275template(1, AddressFormComponent_ng_container_53_ng_container_1_Template, 10, 19, "ng-container", 3);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const regions_r6 = ctx.ngIf;
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", regions_r6.length !== 0);
  }
}
function AddressFormComponent_div_70_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 5)(1, "div", 29)(2, "label")(3, "input", 30);
    \u0275\u0275listener("change", function AddressFormComponent_div_70_Template_input_change_3_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.toggleDefaultAddress());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 31);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "cxTranslate");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 1, "addressForm.setAsDefault"));
  }
}
function AddressFormComponent_div_74_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 23)(1, "button", 32);
    \u0275\u0275listener("click", function AddressFormComponent_div_74_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.back());
    });
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "cxTranslate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r2.cancelBtnLabel || \u0275\u0275pipeBind1(3, 1, "addressForm.chooseAddress"), " ");
  }
}
function AddressBookComponent_ng_container_1_div_6_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 10)(1, "cx-card", 11);
    \u0275\u0275pipe(2, "async");
    \u0275\u0275listener("editCard", function AddressBookComponent_ng_container_1_div_6_div_3_Template_cx_card_editCard_1_listener() {
      const address_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.editAddressButtonHandle(address_r4));
    })("setDefaultCard", function AddressBookComponent_ng_container_1_div_6_div_3_Template_cx_card_setDefaultCard_1_listener() {
      const address_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.setAddressAsDefault(address_r4));
    })("deleteCard", function AddressBookComponent_ng_container_1_div_6_div_3_Template_cx_card_deleteCard_1_listener() {
      let tmp_7_0;
      const address_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.setEdit((tmp_7_0 = address_r4.id) !== null && tmp_7_0 !== void 0 ? tmp_7_0 : ""));
    })("cancelCard", function AddressBookComponent_ng_container_1_div_6_div_3_Template_cx_card_cancelCard_1_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.cancelCard());
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const address_r4 = ctx.$implicit;
    const i_r5 = ctx.index;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("index", i_r5)("border", true)("fitToContainer", true)("content", \u0275\u0275pipeBind1(2, 5, ctx_r1.getCardContent(address_r4)))("editMode", address_r4.id === ctx_r1.editCard);
  }
}
function AddressBookComponent_ng_container_1_div_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7);
    \u0275\u0275element(1, "div", 8);
    \u0275\u0275pipe(2, "cxTranslate");
    \u0275\u0275template(3, AddressBookComponent_ng_container_1_div_6_div_3_Template, 3, 7, "div", 9);
    \u0275\u0275pipe(4, "async");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(2, 2, "common.loaded"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", \u0275\u0275pipeBind1(4, 4, ctx_r1.addresses$));
  }
}
function AddressBookComponent_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 3)(2, "div", 4)(3, "button", 5);
    \u0275\u0275listener("click", function AddressBookComponent_ng_container_1_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.addAddressButtonHandle());
    });
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "cxTranslate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(6, AddressBookComponent_ng_container_1_div_6_Template, 5, 6, "div", 6);
    \u0275\u0275pipe(7, "async");
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    const loading_r6 = \u0275\u0275reference(7);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(5, 3, "addressBook.addNewAddress"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", !\u0275\u0275pipeBind1(7, 5, ctx_r1.addressesStateLoading$))("ngIfElse", loading_r6);
  }
}
function AddressBookComponent_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "section")(2, "h2", 12);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "cxTranslate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "cx-address-form", 13);
    \u0275\u0275pipe(6, "cxTranslate");
    \u0275\u0275pipe(7, "cxTranslate");
    \u0275\u0275pipe(8, "async");
    \u0275\u0275pipe(9, "async");
    \u0275\u0275listener("submitAddress", function AddressBookComponent_ng_container_3_Template_cx_address_form_submitAddress_5_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.addAddressSubmit($event));
    })("backToAddress", function AddressBookComponent_ng_container_3_Template_cx_address_form_backToAddress_5_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.addAddressCancel());
    })("cancelCard", function AddressBookComponent_ng_container_3_Template_cx_address_form_cancelCard_5_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.cancelCard());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    let tmp_6_0;
    let tmp_7_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 6, "addressBook.addNewDeliveryAddress"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275propertyInterpolate("actionBtnLabel", \u0275\u0275pipeBind1(6, 8, "addressBook.addAddress"));
    \u0275\u0275propertyInterpolate("cancelBtnLabel", \u0275\u0275pipeBind1(7, 10, "addressBook.backToAddressList"));
    \u0275\u0275property("showTitleCode", true)("showCancelBtn", !(((tmp_6_0 = \u0275\u0275pipeBind1(8, 12, ctx_r1.addresses$)) == null ? null : tmp_6_0.length) === 0))("setAsDefaultField", !(((tmp_7_0 = \u0275\u0275pipeBind1(9, 14, ctx_r1.addresses$)) == null ? null : tmp_7_0.length) === 0));
  }
}
function AddressBookComponent_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "section")(2, "h2", 12);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "cxTranslate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "cx-address-form", 14);
    \u0275\u0275pipe(6, "cxTranslate");
    \u0275\u0275pipe(7, "cxTranslate");
    \u0275\u0275listener("submitAddress", function AddressBookComponent_ng_container_5_Template_cx_address_form_submitAddress_5_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.editAddressSubmit($event));
    })("backToAddress", function AddressBookComponent_ng_container_5_Template_cx_address_form_backToAddress_5_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.editAddressCancel());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 5, "addressBook.editDeliveryAddress"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275propertyInterpolate("actionBtnLabel", \u0275\u0275pipeBind1(6, 7, "addressBook.updateAddress"));
    \u0275\u0275propertyInterpolate("cancelBtnLabel", \u0275\u0275pipeBind1(7, 9, "addressBook.backToAddressList"));
    \u0275\u0275property("showTitleCode", true)("addressData", ctx_r1.currentAddress);
  }
}
function AddressBookComponent_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15);
    \u0275\u0275element(1, "cx-spinner");
    \u0275\u0275elementEnd();
  }
}
function SuggestedAddressDialogComponent_div_1_div_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 12)(1, "input", 23);
    \u0275\u0275twoWayListener("ngModelChange", function SuggestedAddressDialogComponent_div_1_div_16_Template_input_ngModelChange_1_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.selectedAddress, $event) || (ctx_r1.selectedAddress = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "label", 24);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "cxTranslate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 25)(6, "div", 16)(7, "div", 17);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 17);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 17);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div", 17)(14, "span");
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "div", 17);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "div", 17);
    \u0275\u0275text(19);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "div", 17);
    \u0275\u0275text(21);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const suggestedAddress_r4 = ctx.$implicit;
    const i_r5 = ctx.index;
    const data_r6 = \u0275\u0275nextContext().ngIf;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.selectedAddress);
    \u0275\u0275property("value", suggestedAddress_r4)("id", "suggested-addresses--suggested-" + i_r5);
    \u0275\u0275advance();
    \u0275\u0275property("for", "suggested-addresses--suggested-" + i_r5);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", \u0275\u0275pipeBind1(4, 13, "addressSuggestion.suggestedAddress"), " ", data_r6.suggestedAddresses.length > 1 ? i_r5 + 1 : null, " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(suggestedAddress_r4 == null ? null : suggestedAddress_r4.firstName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(suggestedAddress_r4 == null ? null : suggestedAddress_r4.lastName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(suggestedAddress_r4 == null ? null : suggestedAddress_r4.line1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(suggestedAddress_r4 == null ? null : suggestedAddress_r4.line2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(suggestedAddress_r4 == null ? null : suggestedAddress_r4.town);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", suggestedAddress_r4 == null ? null : suggestedAddress_r4.region == null ? null : suggestedAddress_r4.region.isocode, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", suggestedAddress_r4 == null ? null : suggestedAddress_r4.postalCode, " ");
  }
}
function SuggestedAddressDialogComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 2)(1, "div", 3)(2, "div", 4);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "cxTranslate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 5);
    \u0275\u0275pipe(6, "cxTranslate");
    \u0275\u0275listener("click", function SuggestedAddressDialogComponent_div_1_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeModal("Cross click"));
    });
    \u0275\u0275elementStart(7, "span", 6);
    \u0275\u0275element(8, "cx-icon", 7);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(9, "div", 8)(10, "div", 9)(11, "p");
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "cxTranslate");
    \u0275\u0275pipe(14, "cxTranslate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "div", 10);
    \u0275\u0275template(16, SuggestedAddressDialogComponent_div_1_div_16_Template, 22, 15, "div", 11);
    \u0275\u0275elementStart(17, "div", 12)(18, "input", 13);
    \u0275\u0275twoWayListener("ngModelChange", function SuggestedAddressDialogComponent_div_1_Template_input_ngModelChange_18_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.selectedAddress, $event) || (ctx_r1.selectedAddress = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "label", 14);
    \u0275\u0275text(20);
    \u0275\u0275pipe(21, "cxTranslate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "div", 15)(23, "div", 16)(24, "div", 17);
    \u0275\u0275text(25);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "div", 17);
    \u0275\u0275text(27);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "div", 17)(29, "span");
    \u0275\u0275text(30);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(31, "div", 17);
    \u0275\u0275text(32);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "div", 17);
    \u0275\u0275text(34);
    \u0275\u0275elementEnd()()()()()();
    \u0275\u0275elementStart(35, "div", 18)(36, "div", 19)(37, "div", 20)(38, "button", 21);
    \u0275\u0275listener("click", function SuggestedAddressDialogComponent_div_1_Template_button_click_38_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeModal("Edit address"));
    });
    \u0275\u0275text(39);
    \u0275\u0275pipe(40, "cxTranslate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "button", 22);
    \u0275\u0275listener("click", function SuggestedAddressDialogComponent_div_1_Template_button_click_41_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeModal(ctx_r1.selectedAddress));
    });
    \u0275\u0275text(42);
    \u0275\u0275pipe(43, "cxTranslate");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const data_r6 = ctx.ngIf;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 18, "addressSuggestion.verifyYourAddress"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(6, 20, "common.close"));
    \u0275\u0275advance(3);
    \u0275\u0275property("type", ctx_r1.iconTypes.CLOSE);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate2(" ", \u0275\u0275pipeBind1(13, 22, "addressSuggestion.ensureAccuracySuggestChange"), " ", \u0275\u0275pipeBind1(14, 24, "addressSuggestion.chooseAddressToUse"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275property("ngForOf", data_r6.suggestedAddresses);
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.selectedAddress);
    \u0275\u0275property("value", data_r6.enteredAddress);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(21, 26, "addressSuggestion.enteredAddress"), " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate2(" ", data_r6.enteredAddress == null ? null : data_r6.enteredAddress.firstName, " ", data_r6.enteredAddress == null ? null : data_r6.enteredAddress.lastName, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r6.enteredAddress == null ? null : data_r6.enteredAddress.line1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(data_r6.enteredAddress == null ? null : data_r6.enteredAddress.line2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2(" ", data_r6.enteredAddress == null ? null : data_r6.enteredAddress.town, " ", data_r6.enteredAddress == null ? null : data_r6.enteredAddress.region == null ? null : data_r6.enteredAddress.region.isocode, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", data_r6.enteredAddress == null ? null : data_r6.enteredAddress.postalCode, " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(40, 28, "addressSuggestion.editAddress"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(43, 30, "addressSuggestion.saveAddress"), " ");
  }
}
var _CloseAccountModalComponent = class _CloseAccountModalComponent {
  handleClick(event) {
    if (event.target.tagName === this.el.nativeElement.tagName) {
      this.dismissModal("Cross click");
    }
  }
  constructor(authService, globalMessageService, routingService, translationService, userProfile, launchDialogService, el) {
    this.authService = authService;
    this.globalMessageService = globalMessageService;
    this.routingService = routingService;
    this.translationService = translationService;
    this.userProfile = userProfile;
    this.launchDialogService = launchDialogService;
    this.el = el;
    this.iconTypes = ICON_TYPE;
    this.focusConfig = {
      trap: true,
      block: true,
      autofocus: "button",
      focusOnEscape: true
    };
    this.loading$ = new BehaviorSubject(false);
  }
  get isLoading$() {
    return this.loading$.asObservable();
  }
  ngOnInit() {
    this.isLoggedIn$ = this.authService.isUserLoggedIn();
  }
  onSuccess() {
    this.dismissModal("Success");
    this.translationService.translate("closeAccount.accountClosedSuccessfully").pipe(first()).subscribe((text) => {
      this.globalMessageService.add(text, GlobalMessageType.MSG_TYPE_CONFIRMATION);
    });
    this.authService.coreLogout().then(() => {
      this.routingService.go({
        cxRoute: "home"
      });
    });
  }
  onError() {
    this.dismissModal("Error");
    this.translationService.translate("closeAccount.accountClosedFailure").pipe(first()).subscribe((text) => {
      this.globalMessageService.add(text, GlobalMessageType.MSG_TYPE_ERROR);
    });
  }
  dismissModal(reason) {
    this.launchDialogService.closeDialog(reason);
  }
  closeAccount() {
    this.loading$.next(true);
    this.userProfile.close().subscribe({
      next: () => {
        this.onSuccess();
        this.loading$.next(false);
      },
      error: () => {
        this.onError();
        this.loading$.next(false);
      }
    });
  }
};
_CloseAccountModalComponent.\u0275fac = function CloseAccountModalComponent_Factory(t) {
  return new (t || _CloseAccountModalComponent)(\u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(GlobalMessageService), \u0275\u0275directiveInject(RoutingService), \u0275\u0275directiveInject(TranslationService), \u0275\u0275directiveInject(UserProfileFacade), \u0275\u0275directiveInject(LaunchDialogService), \u0275\u0275directiveInject(ElementRef));
};
_CloseAccountModalComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
  type: _CloseAccountModalComponent,
  selectors: [["cx-close-account-modal"]],
  hostBindings: function CloseAccountModalComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275listener("click", function CloseAccountModalComponent_click_HostBindingHandler($event) {
        return ctx.handleClick($event);
      });
    }
  },
  decls: 2,
  vars: 3,
  consts: [["loaded", ""], [4, "ngIf"], [1, "cx-close-account-modal", 3, "esc", "cxFocus"], [1, "cx-close-account-modal-container"], [1, "cx-close-account-modal-header", "cx-modal-header"], [1, "cx-close-account-modal-title"], ["type", "button", 1, "close", 3, "click"], ["aria-hidden", "true"], [3, "type"], [4, "ngIf", "ngIfElse"], [1, "cx-spinner"], [1, "cx-close-account-modal-body", "modal-body"], [1, "cx-confirmation"], [1, "cx-close-account-modal-footer", "cx-modal-footer"], [1, "btn", "btn-primary", 3, "click"], [1, "btn", "btn-block", "btn-secondary", 3, "click"]],
  template: function CloseAccountModalComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275template(0, CloseAccountModalComponent_ng_container_0_Template, 15, 12, "ng-container", 1);
      \u0275\u0275pipe(1, "async");
    }
    if (rf & 2) {
      \u0275\u0275property("ngIf", \u0275\u0275pipeBind1(1, 1, ctx.isLoggedIn$));
    }
  },
  dependencies: [NgIf, IconComponent, SpinnerComponent, FocusDirective, AsyncPipe, TranslatePipe],
  encapsulation: 2,
  changeDetection: 0
});
var CloseAccountModalComponent = _CloseAccountModalComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CloseAccountModalComponent, [{
    type: Component,
    args: [{
      selector: "cx-close-account-modal",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: `<ng-container *ngIf="isLoggedIn$ | async">
  <div
    class="cx-close-account-modal"
    [cxFocus]="focusConfig"
    (esc)="dismissModal('Escape click')"
  >
    <div class="cx-close-account-modal-container">
      <div class="cx-close-account-modal-header cx-modal-header">
        <h3 class="cx-close-account-modal-title">
          {{ 'closeAccount.confirmAccountClosure' | cxTranslate }}
        </h3>
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

      <div *ngIf="isLoading$ | async; else loaded">
        <div class="cx-spinner">
          <cx-spinner> </cx-spinner>
        </div>
      </div>

      <ng-template #loaded>
        <div class="cx-close-account-modal-body modal-body">
          <p class="cx-confirmation">
            {{ 'closeAccount.confirmAccountClosureMessage' | cxTranslate }}
          </p>
        </div>
        <div class="cx-close-account-modal-footer cx-modal-footer">
          <button class="btn btn-primary" (click)="closeAccount()">
            {{ 'closeAccount.closeMyAccount' | cxTranslate }}
          </button>
          <button
            (click)="dismissModal('Cancel')"
            class="btn btn-block btn-secondary"
          >
            {{ 'common.cancel' | cxTranslate }}
          </button>
        </div>
      </ng-template>
    </div>
  </div>
</ng-container>
`
    }]
  }], () => [{
    type: AuthService
  }, {
    type: GlobalMessageService
  }, {
    type: RoutingService
  }, {
    type: TranslationService
  }, {
    type: UserProfileFacade
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
var defaultCloseDialogModalLayoutConfig = {
  launch: {
    CLOSE_ACCOUNT: {
      inline: true,
      component: CloseAccountModalComponent,
      dialogType: DIALOG_TYPE.DIALOG
    }
  }
};
var _CloseAccountComponent = class _CloseAccountComponent {
  constructor(launchDialogService, vcr) {
    this.launchDialogService = launchDialogService;
    this.vcr = vcr;
  }
  openModal() {
    const dialog = this.launchDialogService.openDialog("CLOSE_ACCOUNT", this.element, this.vcr);
    dialog?.pipe(take(1)).subscribe();
  }
};
_CloseAccountComponent.\u0275fac = function CloseAccountComponent_Factory(t) {
  return new (t || _CloseAccountComponent)(\u0275\u0275directiveInject(LaunchDialogService), \u0275\u0275directiveInject(ViewContainerRef));
};
_CloseAccountComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
  type: _CloseAccountComponent,
  selectors: [["cx-close-account"]],
  viewQuery: function CloseAccountComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(_c0, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.element = _t.first);
    }
  },
  decls: 12,
  vars: 10,
  consts: [["element", ""], [1, "col-lg-8", "col-md-9"], [1, "row", "cx-btn-group"], [1, "col-sm-6"], [1, "btn", "btn-block", "btn-secondary", 3, "routerLink"], [1, "btn", "btn-block", "btn-primary", 3, "click"]],
  template: function CloseAccountComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "div", 1)(1, "div", 2)(2, "div", 3)(3, "a", 4);
      \u0275\u0275pipe(4, "cxUrl");
      \u0275\u0275text(5);
      \u0275\u0275pipe(6, "cxTranslate");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(7, "div", 3)(8, "button", 5, 0);
      \u0275\u0275listener("click", function CloseAccountComponent_Template_button_click_8_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.openModal());
      });
      \u0275\u0275text(10);
      \u0275\u0275pipe(11, "cxTranslate");
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(3);
      \u0275\u0275property("routerLink", \u0275\u0275pipeBind1(4, 3, \u0275\u0275pureFunction0(9, _c1)));
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 5, "common.cancel"));
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(11, 7, "closeAccount.closeMyAccount"), " ");
    }
  },
  dependencies: [RouterLink, UrlPipe, TranslatePipe],
  encapsulation: 2,
  changeDetection: 0
});
var CloseAccountComponent = _CloseAccountComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CloseAccountComponent, [{
    type: Component,
    args: [{
      selector: "cx-close-account",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: `<div class="col-lg-8 col-md-9">
  <div class="row cx-btn-group">
    <div class="col-sm-6">
      <a
        [routerLink]="{ cxRoute: 'home' } | cxUrl"
        class="btn btn-block btn-secondary"
        >{{ 'common.cancel' | cxTranslate }}</a
      >
    </div>
    <div class="col-sm-6">
      <button #element class="btn btn-block btn-primary" (click)="openModal()">
        {{ 'closeAccount.closeMyAccount' | cxTranslate }}
      </button>
    </div>
  </div>
</div>
`
    }]
  }], () => [{
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
var _CloseAccountModule = class _CloseAccountModule {
};
_CloseAccountModule.\u0275fac = function CloseAccountModule_Factory(t) {
  return new (t || _CloseAccountModule)();
};
_CloseAccountModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
  type: _CloseAccountModule
});
_CloseAccountModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
  providers: [provideDefaultConfig({
    cmsComponents: {
      CloseAccountComponent: {
        component: CloseAccountComponent,
        guards: [AuthGuard]
      }
    }
  }), provideDefaultConfig(defaultCloseDialogModalLayoutConfig)],
  imports: [CommonModule, RouterModule, UrlModule, I18nModule, IconModule, SpinnerModule, KeyboardFocusModule]
});
var CloseAccountModule = _CloseAccountModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CloseAccountModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, RouterModule, UrlModule, I18nModule, IconModule, SpinnerModule, KeyboardFocusModule],
      providers: [provideDefaultConfig({
        cmsComponents: {
          CloseAccountComponent: {
            component: CloseAccountComponent,
            guards: [AuthGuard]
          }
        }
      }), provideDefaultConfig(defaultCloseDialogModalLayoutConfig)],
      declarations: [CloseAccountComponent, CloseAccountModalComponent]
    }]
  }], null, null);
})();
var _ForgotPasswordComponentService = class _ForgotPasswordComponentService {
  constructor(userPasswordService, routingService, authConfigService, globalMessage) {
    this.userPasswordService = userPasswordService;
    this.routingService = routingService;
    this.authConfigService = authConfigService;
    this.globalMessage = globalMessage;
    this.busy$ = new BehaviorSubject(false);
    this.isUpdating$ = this.busy$.pipe(tap((state) => state === true ? this.form.disable() : this.form.enable()));
    this.form = new UntypedFormGroup({
      userEmail: new UntypedFormControl("", [Validators.required, CustomFormValidators.emailValidator])
    });
  }
  /**
   * Sends an email to the user to reset the password.
   *
   * When the `ResourceOwnerPasswordFlow` is used, the user is routed
   * to the login page.
   */
  requestEmail() {
    if (!this.form.valid) {
      this.form.markAllAsTouched();
      return;
    }
    this.busy$.next(true);
    this.userPasswordService.requestForgotPasswordEmail(this.form.value.userEmail).subscribe({
      next: () => this.onSuccess(),
      error: (error) => this.onError(error)
    });
  }
  onSuccess() {
    this.globalMessage.add({
      key: "forgottenPassword.passwordResetEmailSent"
    }, GlobalMessageType.MSG_TYPE_CONFIRMATION);
    this.busy$.next(false);
    this.form.reset();
    this.redirect();
  }
  onError(_error) {
    this.busy$.next(false);
  }
  /**
   * Redirects the user back to the login page.
   *
   * This only happens in case of the `ResourceOwnerPasswordFlow` OAuth flow.
   */
  redirect() {
    if (this.authConfigService.getOAuthFlow() === OAuthFlow.ResourceOwnerPasswordFlow) {
      this.routingService.go({
        cxRoute: "login"
      });
    }
  }
};
_ForgotPasswordComponentService.\u0275fac = function ForgotPasswordComponentService_Factory(t) {
  return new (t || _ForgotPasswordComponentService)(\u0275\u0275inject(UserPasswordFacade), \u0275\u0275inject(RoutingService), \u0275\u0275inject(AuthConfigService), \u0275\u0275inject(GlobalMessageService));
};
_ForgotPasswordComponentService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
  token: _ForgotPasswordComponentService,
  factory: _ForgotPasswordComponentService.\u0275fac
});
var ForgotPasswordComponentService = _ForgotPasswordComponentService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ForgotPasswordComponentService, [{
    type: Injectable
  }], () => [{
    type: UserPasswordFacade
  }, {
    type: RoutingService
  }, {
    type: AuthConfigService
  }, {
    type: GlobalMessageService
  }], null);
})();
var _ForgotPasswordComponent = class _ForgotPasswordComponent {
  constructor(service) {
    this.service = service;
    this.form = this.service.form;
    this.isUpdating$ = this.service.isUpdating$;
  }
  onSubmit() {
    this.service.requestEmail();
  }
};
_ForgotPasswordComponent.\u0275fac = function ForgotPasswordComponent_Factory(t) {
  return new (t || _ForgotPasswordComponent)(\u0275\u0275directiveInject(ForgotPasswordComponentService));
};
_ForgotPasswordComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
  type: _ForgotPasswordComponent,
  selectors: [["cx-forgot-password"]],
  decls: 17,
  vars: 22,
  consts: [["class", "overlay", 4, "ngIf"], [3, "ngSubmit", "formGroup"], [1, "label-content"], ["required", "true", "type", "email", "formControlName", "userEmail", 1, "form-control", 3, "placeholder"], [3, "control"], [1, "btn", "btn-block", "btn-secondary", 3, "routerLink"], [1, "btn", "btn-block", "btn-primary", 3, "disabled"], [1, "overlay"]],
  template: function ForgotPasswordComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275template(0, ForgotPasswordComponent_cx_spinner_0_Template, 1, 0, "cx-spinner", 0);
      \u0275\u0275pipe(1, "async");
      \u0275\u0275elementStart(2, "form", 1);
      \u0275\u0275listener("ngSubmit", function ForgotPasswordComponent_Template_form_ngSubmit_2_listener() {
        return ctx.onSubmit();
      });
      \u0275\u0275elementStart(3, "label")(4, "span", 2);
      \u0275\u0275text(5);
      \u0275\u0275pipe(6, "cxTranslate");
      \u0275\u0275elementEnd();
      \u0275\u0275element(7, "input", 3);
      \u0275\u0275pipe(8, "cxTranslate");
      \u0275\u0275element(9, "cx-form-errors", 4);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(10, "a", 5);
      \u0275\u0275pipe(11, "cxUrl");
      \u0275\u0275text(12);
      \u0275\u0275pipe(13, "cxTranslate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(14, "button", 6);
      \u0275\u0275text(15);
      \u0275\u0275pipe(16, "cxTranslate");
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275property("ngIf", \u0275\u0275pipeBind1(1, 9, ctx.isUpdating$));
      \u0275\u0275advance(2);
      \u0275\u0275property("formGroup", ctx.form);
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 11, "forgottenPassword.emailAddress.label"));
      \u0275\u0275advance(2);
      \u0275\u0275propertyInterpolate("placeholder", \u0275\u0275pipeBind1(8, 13, "forgottenPassword.emailAddress.placeholder"));
      \u0275\u0275advance(2);
      \u0275\u0275property("control", ctx.form.get("userEmail"));
      \u0275\u0275advance();
      \u0275\u0275property("routerLink", \u0275\u0275pipeBind1(11, 15, \u0275\u0275pureFunction0(21, _c2)));
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(13, 17, "common.cancel"));
      \u0275\u0275advance(2);
      \u0275\u0275property("disabled", ctx.form.disabled);
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(16, 19, "common.submit"), " ");
    }
  },
  dependencies: [NgIf, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, RequiredValidator, FormGroupDirective, FormControlName, RouterLink, FormErrorsComponent, SpinnerComponent, AsyncPipe, UrlPipe, TranslatePipe],
  encapsulation: 2,
  changeDetection: 0
});
var ForgotPasswordComponent = _ForgotPasswordComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ForgotPasswordComponent, [{
    type: Component,
    args: [{
      selector: "cx-forgot-password",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: `<cx-spinner class="overlay" *ngIf="isUpdating$ | async"> </cx-spinner>

<form (ngSubmit)="onSubmit()" [formGroup]="form">
  <label>
    <span class="label-content">{{
      'forgottenPassword.emailAddress.label' | cxTranslate
    }}</span>
    <input
      required="true"
      type="email"
      class="form-control"
      placeholder="{{
        'forgottenPassword.emailAddress.placeholder' | cxTranslate
      }}"
      formControlName="userEmail"
    />
    <cx-form-errors [control]="form.get('userEmail')"></cx-form-errors>
  </label>

  <a
    class="btn btn-block btn-secondary"
    [routerLink]="{ cxRoute: 'login' } | cxUrl"
    >{{ 'common.cancel' | cxTranslate }}</a
  >
  <button class="btn btn-block btn-primary" [disabled]="form.disabled">
    {{ 'common.submit' | cxTranslate }}
  </button>
</form>
`
    }]
  }], () => [{
    type: ForgotPasswordComponentService
  }], null);
})();
var _ForgotPasswordModule = class _ForgotPasswordModule {
};
_ForgotPasswordModule.\u0275fac = function ForgotPasswordModule_Factory(t) {
  return new (t || _ForgotPasswordModule)();
};
_ForgotPasswordModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
  type: _ForgotPasswordModule
});
_ForgotPasswordModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
  providers: [provideDefaultConfig({
    cmsComponents: {
      ForgotPasswordComponent: {
        component: ForgotPasswordComponent,
        guards: [NotAuthGuard],
        providers: [{
          provide: ForgotPasswordComponentService,
          useClass: ForgotPasswordComponentService,
          deps: [UserPasswordFacade, RoutingService, AuthConfigService, GlobalMessageService]
        }]
      }
    }
  })],
  imports: [CommonModule, ReactiveFormsModule, RouterModule, UrlModule, I18nModule, FormErrorsModule, SpinnerModule]
});
var ForgotPasswordModule = _ForgotPasswordModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ForgotPasswordModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, ReactiveFormsModule, RouterModule, UrlModule, I18nModule, FormErrorsModule, SpinnerModule],
      providers: [provideDefaultConfig({
        cmsComponents: {
          ForgotPasswordComponent: {
            component: ForgotPasswordComponent,
            guards: [NotAuthGuard],
            providers: [{
              provide: ForgotPasswordComponentService,
              useClass: ForgotPasswordComponentService,
              deps: [UserPasswordFacade, RoutingService, AuthConfigService, GlobalMessageService]
            }]
          }
        }
      })],
      declarations: [ForgotPasswordComponent]
    }]
  }], null, null);
})();
var _RegisterComponentService = class _RegisterComponentService {
  constructor(userRegisterFacade, globalMessageService, fb) {
    this.userRegisterFacade = userRegisterFacade;
    this.globalMessageService = globalMessageService;
    this.fb = fb;
  }
  /**
   * Register a new user.
   *
   * @param user as UserSignUp
   */
  register(user) {
    return this.userRegisterFacade.register(user);
  }
  /**
   * Returns titles that can be used for the user profiles.
   */
  getTitles() {
    return this.userRegisterFacade.getTitles();
  }
  /**
   * Show the message after successful registration.
   */
  postRegisterMessage() {
    this.globalMessageService.add({
      key: "register.postRegisterMessage"
    }, GlobalMessageType.MSG_TYPE_CONFIRMATION);
  }
  /**
   * Get if any additional consents needs to be provided during registration
   * In core feature, no additional consents are necessary during registration.
   * In integration scenarios, eg: cdc, this method will be overridden to return
   * necessary cdc consents
   */
  getAdditionalConsents() {
    return [];
  }
  /**
   * Generate form control if any additional consents that needs to be provided during registration
   * In core feature, no additional consents are necessary during registration.
   * In integration scenarios, eg: cdc, this method will be overridden to return
   * form controls for necessary cdc consents
   */
  generateAdditionalConsentsFormControl() {
    return this.fb?.array([]) ?? void 0;
  }
};
_RegisterComponentService.\u0275fac = function RegisterComponentService_Factory(t) {
  return new (t || _RegisterComponentService)(\u0275\u0275inject(UserRegisterFacade), \u0275\u0275inject(GlobalMessageService), \u0275\u0275inject(UntypedFormBuilder));
};
_RegisterComponentService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
  token: _RegisterComponentService,
  factory: _RegisterComponentService.\u0275fac
});
var RegisterComponentService = _RegisterComponentService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RegisterComponentService, [{
    type: Injectable
  }], () => [{
    type: UserRegisterFacade
  }, {
    type: GlobalMessageService
  }, {
    type: UntypedFormBuilder
  }], null);
})();
var _RegisterComponent = class _RegisterComponent {
  get additionalConsents() {
    return this.registerForm?.get("additionalConsents");
  }
  updateAdditionalConsents(event, index) {
    const {
      checked
    } = event.target;
    this.registerForm.value.additionalConsents[index] = checked;
  }
  constructor(globalMessageService, fb, router, anonymousConsentsService, anonymousConsentsConfig, authConfigService, registerComponentService) {
    this.globalMessageService = globalMessageService;
    this.fb = fb;
    this.router = router;
    this.anonymousConsentsService = anonymousConsentsService;
    this.anonymousConsentsConfig = anonymousConsentsConfig;
    this.authConfigService = authConfigService;
    this.registerComponentService = registerComponentService;
    this.isLoading$ = new BehaviorSubject(false);
    this.subscription = new Subscription();
    this.registerForm = this.fb.group({
      titleCode: [null],
      firstName: ["", Validators.required],
      lastName: ["", Validators.required],
      email: ["", [Validators.required, CustomFormValidators.emailValidator]],
      password: ["", [Validators.required, CustomFormValidators.passwordValidator]],
      passwordconf: ["", Validators.required],
      newsletter: new UntypedFormControl({
        value: false,
        disabled: this.isConsentRequired()
      }),
      additionalConsents: this.registerComponentService.generateAdditionalConsentsFormControl?.() ?? this.fb.array([]),
      termsandconditions: [false, Validators.requiredTrue]
    }, {
      validators: CustomFormValidators.passwordsMustMatch("password", "passwordconf")
    });
  }
  ngOnInit() {
    this.titles$ = this.registerComponentService.getTitles().pipe(map((titles) => {
      return titles.sort(sortTitles);
    }));
    this.subscription.add(this.globalMessageService.get().pipe(filter((messages) => !!Object.keys(messages).length)).subscribe((globalMessageEntities) => {
      const messages = globalMessageEntities && globalMessageEntities[GlobalMessageType.MSG_TYPE_ERROR];
      if (messages && messages.some((message) => message.raw === "This field is required.")) {
        this.globalMessageService.remove(GlobalMessageType.MSG_TYPE_ERROR);
        this.globalMessageService.add({
          key: "register.titleRequired"
        }, GlobalMessageType.MSG_TYPE_ERROR);
      }
    }));
    const registerConsent = this.anonymousConsentsConfig?.anonymousConsents?.registerConsent ?? "";
    this.anonymousConsent$ = combineLatest([this.anonymousConsentsService.getConsent(registerConsent), this.anonymousConsentsService.getTemplate(registerConsent)]).pipe(map(([consent, template]) => {
      return {
        consent,
        template: template?.description ? template.description : ""
      };
    }));
    this.additionalRegistrationConsents = this.registerComponentService?.getAdditionalConsents() || [];
    this.subscription.add(
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      this.registerForm.get("newsletter").valueChanges.subscribe(() => {
        this.toggleAnonymousConsent();
      })
    );
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
    this.registerComponentService.register(this.collectDataFromRegisterForm(this.registerForm.value)).subscribe({
      next: () => this.onRegisterUserSuccess(),
      complete: () => this.isLoading$.next(false),
      error: () => this.isLoading$.next(false)
    });
  }
  titleSelected(title) {
    this.registerForm["controls"].titleCode.setValue(title.code);
  }
  collectDataFromRegisterForm(formData) {
    const {
      firstName,
      lastName,
      email,
      password,
      titleCode
    } = formData;
    return {
      firstName,
      lastName,
      uid: email.toLowerCase(),
      password,
      titleCode
    };
  }
  isConsentGiven(consent) {
    return this.anonymousConsentsService.isConsentGiven(consent);
  }
  isConsentRequired() {
    const requiredConsents = this.anonymousConsentsConfig?.anonymousConsents?.requiredConsents;
    const registerConsent = this.anonymousConsentsConfig?.anonymousConsents?.registerConsent;
    if (requiredConsents && registerConsent) {
      return requiredConsents.includes(registerConsent);
    }
    return false;
  }
  onRegisterUserSuccess() {
    if (this.authConfigService.getOAuthFlow() === OAuthFlow.ResourceOwnerPasswordFlow) {
      this.router.go("login");
    }
    this.registerComponentService.postRegisterMessage();
  }
  toggleAnonymousConsent() {
    const registerConsent = this.anonymousConsentsConfig?.anonymousConsents?.registerConsent;
    if (registerConsent) {
      if (Boolean(this.registerForm.get("newsletter").value)) {
        this.anonymousConsentsService.giveConsent(registerConsent);
      } else {
        this.anonymousConsentsService.withdrawConsent(registerConsent);
      }
    }
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
};
_RegisterComponent.\u0275fac = function RegisterComponent_Factory(t) {
  return new (t || _RegisterComponent)(\u0275\u0275directiveInject(GlobalMessageService), \u0275\u0275directiveInject(UntypedFormBuilder), \u0275\u0275directiveInject(RoutingService), \u0275\u0275directiveInject(AnonymousConsentsService), \u0275\u0275directiveInject(AnonymousConsentsConfig), \u0275\u0275directiveInject(AuthConfigService), \u0275\u0275directiveInject(RegisterComponentService));
};
_RegisterComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
  type: _RegisterComponent,
  selectors: [["cx-register"]],
  decls: 4,
  vars: 4,
  consts: [["loading", ""], ["class", "cx-page-section container", 4, "ngIf", "ngIfElse"], [1, "cx-page-section", "container"], ["role", "status"], [1, "row", "justify-content-center"], [1, "col-md-6"], [1, "cx-section"], [3, "ngSubmit", "formGroup"], [1, "form-group"], [1, "label-content"], ["bindLabel", "name", "bindValue", "code", "formControlName", "titleCode", "id", "title-select", 3, "clearable", "items", "placeholder", "searchable", "cxNgSelectA11y"], ["required", "true", "type", "text", "name", "firstname", "formControlName", "firstName", 1, "form-control", 3, "placeholder"], [3, "control"], ["required", "true", "type", "text", "name", "lastname", "formControlName", "lastName", 1, "form-control", 3, "placeholder"], ["required", "true", "type", "email", "name", "email", "formControlName", "email", 1, "form-control", 3, "placeholder"], ["required", "true", "type", "password", "name", "password", "formControlName", "password", "cxPasswordVisibilitySwitch", "", 1, "form-control", 3, "placeholder"], ["required", "true", "type", "password", "name", "confirmpassword", "formControlName", "passwordconf", "cxPasswordVisibilitySwitch", "", 1, "form-control", 3, "placeholder"], [1, "form-check"], [4, "ngIf"], ["formArrayName", "additionalConsents", "class", "form-group", 4, "ngIf"], ["required", "true", "type", "checkbox", "name", "termsandconditions", "formControlName", "termsandconditions"], [1, "form-check-label"], ["target", "_blank", "rel", "noopener noreferrer", 3, "routerLink"], ["type", "submit", 1, "btn", "btn-block", "btn-primary"], [1, "cx-login-link", "btn-link", 3, "routerLink"], ["type", "checkbox", "name", "newsletter", "formControlName", "newsletter", 1, "form-check-input", 3, "checked"], ["formArrayName", "additionalConsents", 1, "form-group"], ["class", "form-check", 4, "ngFor", "ngForOf"], ["type", "checkbox", 3, "change", "required", "name", "formControlName"], [1, "cx-spinner"]],
  template: function RegisterComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275template(0, RegisterComponent_section_0_Template, 82, 86, "section", 1);
      \u0275\u0275pipe(1, "async");
      \u0275\u0275template(2, RegisterComponent_ng_template_2_Template, 2, 0, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
    }
    if (rf & 2) {
      const loading_r10 = \u0275\u0275reference(3);
      \u0275\u0275property("ngIf", !\u0275\u0275pipeBind1(1, 2, ctx.isLoading$))("ngIfElse", loading_r10);
    }
  },
  dependencies: [NgForOf, NgIf, \u0275NgNoValidate, DefaultValueAccessor, CheckboxControlValueAccessor, NgControlStatus, NgControlStatusGroup, RequiredValidator, CheckboxRequiredValidator, FormGroupDirective, FormControlName, FormArrayName, RouterLink, SpinnerComponent, FormErrorsComponent, NgSelectComponent, NgSelectA11yDirective, PasswordVisibilityToggleDirective, AsyncPipe, UrlPipe, TranslatePipe],
  encapsulation: 2
});
var RegisterComponent = _RegisterComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RegisterComponent, [{
    type: Component,
    args: [{
      selector: "cx-register",
      template: `<section
  class="cx-page-section container"
  *ngIf="!(isLoading$ | async); else loading"
>
  <div role="status" [attr.aria-label]="'common.loaded' | cxTranslate"></div>
  <div class="row justify-content-center">
    <div class="col-md-6">
      <div class="cx-section">
        <form (ngSubmit)="submitForm()" [formGroup]="registerForm">
          <div class="form-group">
            <label>
              <span class="label-content">{{
                'register.title' | cxTranslate
              }}</span>
              <ng-select
                [clearable]="false"
                [items]="titles$ | async"
                [placeholder]="'register.selectTitle' | cxTranslate"
                [searchable]="false"
                bindLabel="name"
                bindValue="code"
                formControlName="titleCode"
                id="title-select"
                [cxNgSelectA11y]="{
                  ariaLabel: 'register.title' | cxTranslate
                }"
              >
              </ng-select>
            </label>
          </div>

          <div class="form-group">
            <label>
              <span class="label-content">{{
                'register.firstName.label' | cxTranslate
              }}</span>
              <input
                required="true"
                class="form-control"
                type="text"
                name="firstname"
                placeholder="{{
                  'register.firstName.placeholder' | cxTranslate
                }}"
                formControlName="firstName"
              />
              <cx-form-errors
                [control]="registerForm.get('firstName')"
              ></cx-form-errors>
            </label>
          </div>

          <div class="form-group">
            <label>
              <span class="label-content">{{
                'register.lastName.label' | cxTranslate
              }}</span>
              <input
                required="true"
                class="form-control"
                type="text"
                name="lastname"
                placeholder="{{
                  'register.lastName.placeholder' | cxTranslate
                }}"
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
                'register.emailAddress.label' | cxTranslate
              }}</span>
              <input
                required="true"
                class="form-control"
                type="email"
                name="email"
                placeholder="{{
                  'register.emailAddress.placeholder' | cxTranslate
                }}"
                formControlName="email"
              />
              <cx-form-errors
                [control]="registerForm.get('email')"
              ></cx-form-errors>
            </label>
          </div>

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
                placeholder="{{
                  'register.password.placeholder' | cxTranslate
                }}"
                formControlName="password"
                [attr.aria-label]="
                  'register.password.placeholder' | cxTranslate
                "
                cxPasswordVisibilitySwitch
              />
              <cx-form-errors
                [control]="registerForm.get('password')"
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
                name="confirmpassword"
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
                [control]="registerForm.get('passwordconf')"
              ></cx-form-errors>
            </label>
          </div>

          <div class="form-group">
            <div class="form-check">
              <label *ngIf="anonymousConsent$ | async as anonymousConsent">
                <input
                  type="checkbox"
                  name="newsletter"
                  class="form-check-input"
                  formControlName="newsletter"
                  [checked]="isConsentGiven(anonymousConsent.consent)"
                />
                <span class="form-check-label">
                  {{ anonymousConsent.template }}
                </span>
              </label>
            </div>
          </div>

          <div
            formArrayName="additionalConsents"
            class="form-group"
            *ngIf="additionalRegistrationConsents as consents"
          >
            <div
              class="form-check"
              *ngFor="let control of additionalConsents.controls; let i = index"
            >
              <div *ngIf="consents[i]?.template?.id as id">
                <label>
                  <input
                    type="checkbox"
                    [required]="consents[i].required"
                    [name]="id"
                    (change)="updateAdditionalConsents($any($event), i)"
                    [formControlName]="i"
                  />
                  <span class="form-check-label">
                    {{ consents[i].template.description }}
                  </span>
                  <cx-form-errors [control]="control"></cx-form-errors>
                </label>
              </div>
            </div>
          </div>

          <div class="form-group">
            <div class="form-check">
              <label>
                <input
                  required="true"
                  type="checkbox"
                  name="termsandconditions"
                  formControlName="termsandconditions"
                />
                <span class="form-check-label">
                  {{ 'register.confirmThatRead' | cxTranslate }}
                  <a
                    [routerLink]="{ cxRoute: 'termsAndConditions' } | cxUrl"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {{ 'register.termsAndConditions' | cxTranslate }}
                  </a>
                </span>
                <cx-form-errors
                  [control]="registerForm.get('termsandconditions')"
                ></cx-form-errors>
              </label>
            </div>
          </div>
          <button type="submit" class="btn btn-block btn-primary">
            {{ 'register.register' | cxTranslate }}
          </button>
          <a
            class="cx-login-link btn-link"
            [routerLink]="{ cxRoute: 'login' } | cxUrl"
            >{{ 'register.signIn' | cxTranslate }}</a
          >
        </form>
      </div>
    </div>
  </div>
</section>

<ng-template #loading>
  <div class="cx-spinner"><cx-spinner></cx-spinner></div>
</ng-template>
`
    }]
  }], () => [{
    type: GlobalMessageService
  }, {
    type: UntypedFormBuilder
  }, {
    type: RoutingService
  }, {
    type: AnonymousConsentsService
  }, {
    type: AnonymousConsentsConfig
  }, {
    type: AuthConfigService
  }, {
    type: RegisterComponentService
  }], null);
})();
var _RegisterComponentModule = class _RegisterComponentModule {
};
_RegisterComponentModule.\u0275fac = function RegisterComponentModule_Factory(t) {
  return new (t || _RegisterComponentModule)();
};
_RegisterComponentModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
  type: _RegisterComponentModule
});
_RegisterComponentModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
  providers: [provideDefaultConfig({
    cmsComponents: {
      RegisterCustomerComponent: {
        component: RegisterComponent,
        guards: [NotAuthGuard],
        providers: [{
          provide: RegisterComponentService,
          useClass: RegisterComponentService,
          deps: [UserRegisterFacade, GlobalMessageService, UntypedFormBuilder]
        }]
      }
    }
  })],
  imports: [CommonModule, ReactiveFormsModule, RouterModule, UrlModule, I18nModule, SpinnerModule, FormErrorsModule, NgSelectModule, NgSelectA11yModule, PasswordVisibilityToggleModule]
});
var RegisterComponentModule = _RegisterComponentModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RegisterComponentModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, ReactiveFormsModule, RouterModule, UrlModule, I18nModule, SpinnerModule, FormErrorsModule, NgSelectModule, NgSelectA11yModule, PasswordVisibilityToggleModule],
      providers: [provideDefaultConfig({
        cmsComponents: {
          RegisterCustomerComponent: {
            component: RegisterComponent,
            guards: [NotAuthGuard],
            providers: [{
              provide: RegisterComponentService,
              useClass: RegisterComponentService,
              deps: [UserRegisterFacade, GlobalMessageService, UntypedFormBuilder]
            }]
          }
        }
      })],
      declarations: [RegisterComponent]
    }]
  }], null, null);
})();
var _ResetPasswordComponentService = class _ResetPasswordComponentService {
  constructor(userPasswordService, routingService, globalMessage) {
    this.userPasswordService = userPasswordService;
    this.routingService = routingService;
    this.globalMessage = globalMessage;
    this.busy$ = new BehaviorSubject(false);
    this.isUpdating$ = this.busy$.pipe(tap((state) => state === true ? this.form.disable() : this.form.enable()));
    this.resetToken$ = this.routingService.getRouterState().pipe(map((routerState) => routerState.state.queryParams["token"]));
    this.form = new UntypedFormGroup({
      password: new UntypedFormControl("", [Validators.required, CustomFormValidators.passwordValidator]),
      passwordConfirm: new UntypedFormControl("", Validators.required)
    }, {
      validators: CustomFormValidators.passwordsMustMatch("password", "passwordConfirm")
    });
  }
  /**
   * Resets the password by the given token.
   *
   * The token has been provided during the request password flow.
   * The token is not validated on the client.
   */
  resetPassword(token) {
    if (!this.form.valid) {
      this.form.markAllAsTouched();
      return;
    }
    this.busy$.next(true);
    const password = this.form.get("password").value;
    this.userPasswordService.reset(token, password).subscribe({
      next: () => this.onSuccess(),
      error: (error) => this.onError(error)
    });
  }
  onSuccess() {
    this.globalMessage.add({
      key: "forgottenPassword.passwordResetSuccess"
    }, GlobalMessageType.MSG_TYPE_CONFIRMATION);
    this.busy$.next(false);
    this.form.reset();
    this.redirect();
  }
  onError(error) {
    this.busy$.next(false);
    if (error instanceof HttpErrorModel) {
      (error.details ?? []).forEach((err) => {
        if (err.message) {
          this.globalMessage.add({
            raw: err.message
          }, GlobalMessageType.MSG_TYPE_ERROR);
        }
      });
    }
  }
  /**
   * Redirects the user to the login page.
   */
  redirect() {
    this.routingService.go({
      cxRoute: "login"
    });
  }
};
_ResetPasswordComponentService.\u0275fac = function ResetPasswordComponentService_Factory(t) {
  return new (t || _ResetPasswordComponentService)(\u0275\u0275inject(UserPasswordFacade), \u0275\u0275inject(RoutingService), \u0275\u0275inject(GlobalMessageService));
};
_ResetPasswordComponentService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
  token: _ResetPasswordComponentService,
  factory: _ResetPasswordComponentService.\u0275fac
});
var ResetPasswordComponentService = _ResetPasswordComponentService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ResetPasswordComponentService, [{
    type: Injectable
  }], () => [{
    type: UserPasswordFacade
  }, {
    type: RoutingService
  }, {
    type: GlobalMessageService
  }], null);
})();
var _ResetPasswordComponent = class _ResetPasswordComponent {
  constructor(service) {
    this.service = service;
    this.form = this.service.form;
    this.isUpdating$ = this.service.isUpdating$;
    this.token$ = this.service.resetToken$;
  }
  onSubmit(token) {
    this.service.resetPassword(token);
  }
};
_ResetPasswordComponent.\u0275fac = function ResetPasswordComponent_Factory(t) {
  return new (t || _ResetPasswordComponent)(\u0275\u0275directiveInject(ResetPasswordComponentService));
};
_ResetPasswordComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
  type: _ResetPasswordComponent,
  selectors: [["cx-reset-password"]],
  hostAttrs: [1, "user-form"],
  decls: 4,
  vars: 6,
  consts: [["class", "overlay", 4, "ngIf"], [3, "formGroup", "ngSubmit", 4, "ngIf"], [1, "overlay"], [3, "ngSubmit", "formGroup"], [1, "label-content"], ["required", "true", "type", "password", "formControlName", "password", "cxPasswordVisibilitySwitch", "", 1, "form-control", 3, "placeholder"], [3, "control"], ["required", "true", "type", "password", "formControlName", "passwordConfirm", "cxPasswordVisibilitySwitch", "", 1, "form-control", 3, "placeholder"], [1, "btn", "btn-block", "btn-primary", 3, "disabled"]],
  template: function ResetPasswordComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275template(0, ResetPasswordComponent_cx_spinner_0_Template, 1, 0, "cx-spinner", 0);
      \u0275\u0275pipe(1, "async");
      \u0275\u0275template(2, ResetPasswordComponent_form_2_Template, 20, 25, "form", 1);
      \u0275\u0275pipe(3, "async");
    }
    if (rf & 2) {
      \u0275\u0275property("ngIf", \u0275\u0275pipeBind1(1, 2, ctx.isUpdating$));
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", \u0275\u0275pipeBind1(3, 4, ctx.token$));
    }
  },
  dependencies: [NgIf, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, RequiredValidator, FormGroupDirective, FormControlName, FormErrorsComponent, SpinnerComponent, PasswordVisibilityToggleDirective, AsyncPipe, TranslatePipe],
  encapsulation: 2,
  changeDetection: 0
});
var ResetPasswordComponent = _ResetPasswordComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ResetPasswordComponent, [{
    type: Component,
    args: [{
      selector: "cx-reset-password",
      changeDetection: ChangeDetectionStrategy.OnPush,
      host: {
        class: "user-form"
      },
      template: `<cx-spinner class="overlay" *ngIf="isUpdating$ | async"> </cx-spinner>

<form
  *ngIf="token$ | async as token"
  (ngSubmit)="onSubmit(token)"
  [formGroup]="form"
>
  <label>
    <span class="label-content">{{
      'register.newPassword' | cxTranslate
    }}</span>
    <input
      required="true"
      class="form-control"
      type="password"
      placeholder="{{ 'register.password.placeholder' | cxTranslate }}"
      formControlName="password"
      [attr.aria-label]="'register.password.placeholder' | cxTranslate"
      cxPasswordVisibilitySwitch
    />
    <cx-form-errors [control]="form.get('password')"></cx-form-errors>
  </label>

  <label>
    <span class="label-content">{{
      'register.passwordMinRequirements' | cxTranslate
    }}</span>
    <input
      required="true"
      class="form-control"
      type="password"
      placeholder="{{ 'register.confirmPassword.placeholder' | cxTranslate }}"
      formControlName="passwordConfirm"
      [attr.aria-label]="'register.confirmPassword.placeholder' | cxTranslate"
      cxPasswordVisibilitySwitch
    />
    <cx-form-errors [control]="form.get('passwordConfirm')"></cx-form-errors>
  </label>

  <button class="btn btn-block btn-primary" [disabled]="form.disabled">
    {{ 'register.resetPassword' | cxTranslate }}
  </button>
</form>
`
    }]
  }], () => [{
    type: ResetPasswordComponentService
  }], null);
})();
var _ResetPasswordModule = class _ResetPasswordModule {
};
_ResetPasswordModule.\u0275fac = function ResetPasswordModule_Factory(t) {
  return new (t || _ResetPasswordModule)();
};
_ResetPasswordModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
  type: _ResetPasswordModule
});
_ResetPasswordModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
  providers: [provideDefaultConfig({
    cmsComponents: {
      ResetPasswordComponent: {
        component: ResetPasswordComponent,
        guards: [NotAuthGuard],
        providers: [{
          provide: ResetPasswordComponentService,
          useClass: ResetPasswordComponentService,
          deps: [UserPasswordFacade, RoutingService, GlobalMessageService]
        }]
      }
    }
  })],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, RouterModule, I18nModule, FormErrorsModule, SpinnerModule, PasswordVisibilityToggleModule]
});
var ResetPasswordModule = _ResetPasswordModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ResetPasswordModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, FormsModule, ReactiveFormsModule, RouterModule, I18nModule, FormErrorsModule, SpinnerModule, PasswordVisibilityToggleModule],
      providers: [provideDefaultConfig({
        cmsComponents: {
          ResetPasswordComponent: {
            component: ResetPasswordComponent,
            guards: [NotAuthGuard],
            providers: [{
              provide: ResetPasswordComponentService,
              useClass: ResetPasswordComponentService,
              deps: [UserPasswordFacade, RoutingService, GlobalMessageService]
            }]
          }
        }
      })],
      declarations: [ResetPasswordComponent]
    }]
  }], null, null);
})();
var _UpdateEmailComponentService = class _UpdateEmailComponentService {
  constructor(userEmail, routingService, globalMessageService, authService, authRedirectService) {
    this.userEmail = userEmail;
    this.routingService = routingService;
    this.globalMessageService = globalMessageService;
    this.authService = authService;
    this.authRedirectService = authRedirectService;
    this.busy$ = new BehaviorSubject(false);
    this.isUpdating$ = this.busy$.pipe(tap((state) => state === true ? this.form.disable() : this.form.enable()));
    this.form = new UntypedFormGroup({
      email: new UntypedFormControl("", [Validators.required, CustomFormValidators.emailValidator]),
      confirmEmail: new UntypedFormControl("", [Validators.required]),
      password: new UntypedFormControl("", [Validators.required])
    }, {
      validators: CustomFormValidators.emailsMustMatch("email", "confirmEmail")
    });
  }
  save() {
    if (!this.form.valid) {
      this.form.markAllAsTouched();
      return;
    }
    this.busy$.next(true);
    const newEmail = this.form.get("confirmEmail")?.value;
    const password = this.form.get("password")?.value;
    this.userEmail.update(password, newEmail).subscribe({
      next: () => this.onSuccess(newEmail),
      error: (error) => this.onError(error)
    });
  }
  /**
   * Handles successful updating of the user email.
   */
  onSuccess(newUid) {
    this.globalMessageService.add({
      key: "updateEmailForm.emailUpdateSuccess",
      params: {
        newUid
      }
    }, GlobalMessageType.MSG_TYPE_CONFIRMATION);
    this.busy$.next(false);
    this.form.reset();
    this.authRedirectService.setRedirectUrl(this.routingService.getUrl({
      cxRoute: "home"
    }));
    this.authService.coreLogout().then(() => {
      this.routingService.go({
        cxRoute: "login"
      }, {
        state: {
          newUid
        }
      });
    });
  }
  onError(_error) {
    this.busy$.next(false);
  }
};
_UpdateEmailComponentService.\u0275fac = function UpdateEmailComponentService_Factory(t) {
  return new (t || _UpdateEmailComponentService)(\u0275\u0275inject(UserEmailFacade), \u0275\u0275inject(RoutingService), \u0275\u0275inject(GlobalMessageService), \u0275\u0275inject(AuthService), \u0275\u0275inject(AuthRedirectService));
};
_UpdateEmailComponentService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
  token: _UpdateEmailComponentService,
  factory: _UpdateEmailComponentService.\u0275fac
});
var UpdateEmailComponentService = _UpdateEmailComponentService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UpdateEmailComponentService, [{
    type: Injectable
  }], () => [{
    type: UserEmailFacade
  }, {
    type: RoutingService
  }, {
    type: GlobalMessageService
  }, {
    type: AuthService
  }, {
    type: AuthRedirectService
  }], null);
})();
var _UpdateEmailComponent = class _UpdateEmailComponent {
  constructor(service) {
    this.service = service;
    this.form = this.service.form;
    this.isUpdating$ = this.service.isUpdating$;
  }
  onSubmit() {
    this.service.save();
  }
};
_UpdateEmailComponent.\u0275fac = function UpdateEmailComponent_Factory(t) {
  return new (t || _UpdateEmailComponent)(\u0275\u0275directiveInject(UpdateEmailComponentService));
};
_UpdateEmailComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
  type: _UpdateEmailComponent,
  selectors: [["cx-update-email"]],
  hostAttrs: [1, "user-form"],
  decls: 32,
  vars: 39,
  consts: [["class", "overlay", 4, "ngIf"], [3, "ngSubmit", "formGroup"], [1, "label-content"], ["required", "true", "type", "email", "name", "email", "formControlName", "email", 1, "form-control", 3, "placeholder"], [3, "control"], ["required", "true", "type", "email", "name", "confirmEmail", "formControlName", "confirmEmail", 1, "form-control", 3, "placeholder"], ["required", "true", "type", "password", "name", "password", "formControlName", "password", "autocomplete", "new-password", "cxPasswordVisibilitySwitch", "", 1, "form-control", 3, "placeholder"], [1, "btn", "btn-block", "btn-secondary", 3, "routerLink"], [1, "btn", "btn-block", "btn-primary", 3, "disabled"], [1, "overlay"]],
  template: function UpdateEmailComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275template(0, UpdateEmailComponent_cx_spinner_0_Template, 1, 0, "cx-spinner", 0);
      \u0275\u0275pipe(1, "async");
      \u0275\u0275elementStart(2, "form", 1);
      \u0275\u0275listener("ngSubmit", function UpdateEmailComponent_Template_form_ngSubmit_2_listener() {
        return ctx.onSubmit();
      });
      \u0275\u0275elementStart(3, "label")(4, "span", 2);
      \u0275\u0275text(5);
      \u0275\u0275pipe(6, "cxTranslate");
      \u0275\u0275elementEnd();
      \u0275\u0275element(7, "input", 3);
      \u0275\u0275pipe(8, "cxTranslate");
      \u0275\u0275element(9, "cx-form-errors", 4);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(10, "label")(11, "span", 2);
      \u0275\u0275text(12);
      \u0275\u0275pipe(13, "cxTranslate");
      \u0275\u0275elementEnd();
      \u0275\u0275element(14, "input", 5);
      \u0275\u0275pipe(15, "cxTranslate");
      \u0275\u0275element(16, "cx-form-errors", 4);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(17, "label")(18, "span", 2);
      \u0275\u0275text(19);
      \u0275\u0275pipe(20, "cxTranslate");
      \u0275\u0275elementEnd();
      \u0275\u0275element(21, "input", 6);
      \u0275\u0275pipe(22, "cxTranslate");
      \u0275\u0275pipe(23, "cxTranslate");
      \u0275\u0275element(24, "cx-form-errors", 4);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(25, "a", 7);
      \u0275\u0275pipe(26, "cxUrl");
      \u0275\u0275text(27);
      \u0275\u0275pipe(28, "cxTranslate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(29, "button", 8);
      \u0275\u0275text(30);
      \u0275\u0275pipe(31, "cxTranslate");
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275property("ngIf", \u0275\u0275pipeBind1(1, 16, ctx.isUpdating$));
      \u0275\u0275advance(2);
      \u0275\u0275property("formGroup", ctx.form);
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 18, "updateEmailForm.newEmailAddress.label"));
      \u0275\u0275advance(2);
      \u0275\u0275propertyInterpolate("placeholder", \u0275\u0275pipeBind1(8, 20, "updateEmailForm.newEmailAddress.placeholder"));
      \u0275\u0275advance(2);
      \u0275\u0275property("control", ctx.form.get("email"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(13, 22, "updateEmailForm.confirmNewEmailAddress.label"));
      \u0275\u0275advance(2);
      \u0275\u0275propertyInterpolate("placeholder", \u0275\u0275pipeBind1(15, 24, "updateEmailForm.confirmNewEmailAddress.placeholder"));
      \u0275\u0275advance(2);
      \u0275\u0275property("control", ctx.form.get("confirmEmail"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(20, 26, "updateEmailForm.password.label"));
      \u0275\u0275advance(2);
      \u0275\u0275propertyInterpolate("placeholder", \u0275\u0275pipeBind1(22, 28, "updateEmailForm.password.placeholder"));
      \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(23, 30, "updateEmailForm.password.placeholder"));
      \u0275\u0275advance(3);
      \u0275\u0275property("control", ctx.form.get("password"));
      \u0275\u0275advance();
      \u0275\u0275property("routerLink", \u0275\u0275pipeBind1(26, 32, \u0275\u0275pureFunction0(38, _c1)));
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(28, 34, "common.cancel"), " ");
      \u0275\u0275advance(2);
      \u0275\u0275property("disabled", ctx.form.disabled);
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(31, 36, "common.save"), " ");
    }
  },
  dependencies: [NgIf, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, RequiredValidator, FormGroupDirective, FormControlName, SpinnerComponent, RouterLink, FormErrorsComponent, PasswordVisibilityToggleDirective, AsyncPipe, UrlPipe, TranslatePipe],
  encapsulation: 2,
  changeDetection: 0
});
var UpdateEmailComponent = _UpdateEmailComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UpdateEmailComponent, [{
    type: Component,
    args: [{
      selector: "cx-update-email",
      changeDetection: ChangeDetectionStrategy.OnPush,
      host: {
        class: "user-form"
      },
      template: `<cx-spinner class="overlay" *ngIf="isUpdating$ | async"> </cx-spinner>

<form (ngSubmit)="onSubmit()" [formGroup]="form">
  <label>
    <span class="label-content">{{
      'updateEmailForm.newEmailAddress.label' | cxTranslate
    }}</span>
    <input
      required="true"
      type="email"
      name="email"
      formControlName="email"
      placeholder="{{
        'updateEmailForm.newEmailAddress.placeholder' | cxTranslate
      }}"
      class="form-control"
    />
    <cx-form-errors [control]="form.get('email')"></cx-form-errors>
  </label>

  <label>
    <span class="label-content">{{
      'updateEmailForm.confirmNewEmailAddress.label' | cxTranslate
    }}</span>
    <input
      required="true"
      type="email"
      name="confirmEmail"
      formControlName="confirmEmail"
      placeholder="{{
        'updateEmailForm.confirmNewEmailAddress.placeholder' | cxTranslate
      }}"
      class="form-control"
    />
    <cx-form-errors [control]="form.get('confirmEmail')"></cx-form-errors>
  </label>

  <label>
    <span class="label-content">{{
      'updateEmailForm.password.label' | cxTranslate
    }}</span>
    <input
      required="true"
      type="password"
      name="password"
      formControlName="password"
      placeholder="{{ 'updateEmailForm.password.placeholder' | cxTranslate }}"
      class="form-control"
      autocomplete="new-password"
      [attr.aria-label]="'updateEmailForm.password.placeholder' | cxTranslate"
      cxPasswordVisibilitySwitch
    />
    <cx-form-errors [control]="form.get('password')"></cx-form-errors>
  </label>

  <a
    class="btn btn-block btn-secondary"
    [routerLink]="{ cxRoute: 'home' } | cxUrl"
  >
    {{ 'common.cancel' | cxTranslate }}
  </a>

  <button class="btn btn-block btn-primary" [disabled]="form.disabled">
    {{ 'common.save' | cxTranslate }}
  </button>
</form>
`
    }]
  }], () => [{
    type: UpdateEmailComponentService
  }], null);
})();
var _UpdateEmailModule = class _UpdateEmailModule {
};
_UpdateEmailModule.\u0275fac = function UpdateEmailModule_Factory(t) {
  return new (t || _UpdateEmailModule)();
};
_UpdateEmailModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
  type: _UpdateEmailModule
});
_UpdateEmailModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
  providers: [provideDefaultConfig({
    cmsComponents: {
      UpdateEmailComponent: {
        component: UpdateEmailComponent,
        guards: [AuthGuard],
        providers: [{
          provide: UpdateEmailComponentService,
          useClass: UpdateEmailComponentService,
          deps: [UserEmailFacade, RoutingService, GlobalMessageService, AuthService, AuthRedirectService]
        }]
      }
    }
  })],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, SpinnerModule, UrlModule, RouterModule, I18nModule, FormErrorsModule, PasswordVisibilityToggleModule]
});
var UpdateEmailModule = _UpdateEmailModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UpdateEmailModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, FormsModule, ReactiveFormsModule, SpinnerModule, UrlModule, RouterModule, I18nModule, FormErrorsModule, PasswordVisibilityToggleModule],
      providers: [provideDefaultConfig({
        cmsComponents: {
          UpdateEmailComponent: {
            component: UpdateEmailComponent,
            guards: [AuthGuard],
            providers: [{
              provide: UpdateEmailComponentService,
              useClass: UpdateEmailComponentService,
              deps: [UserEmailFacade, RoutingService, GlobalMessageService, AuthService, AuthRedirectService]
            }]
          }
        }
      })],
      declarations: [UpdateEmailComponent]
    }]
  }], null, null);
})();
var _UpdatePasswordComponentService = class _UpdatePasswordComponentService {
  constructor(userPasswordService, routingService, globalMessageService, authRedirectService, authService) {
    this.userPasswordService = userPasswordService;
    this.routingService = routingService;
    this.globalMessageService = globalMessageService;
    this.authRedirectService = authRedirectService;
    this.authService = authService;
    this.busy$ = new BehaviorSubject(false);
    this.isUpdating$ = this.busy$.pipe(tap((state) => state === true ? this.form.disable() : this.form.enable()));
    this.form = new UntypedFormGroup({
      oldPassword: new UntypedFormControl("", Validators.required),
      newPassword: new UntypedFormControl("", [Validators.required, CustomFormValidators.passwordValidator]),
      newPasswordConfirm: new UntypedFormControl("", Validators.required)
    }, {
      validators: CustomFormValidators.passwordsMustMatch("newPassword", "newPasswordConfirm")
    });
  }
  /**
   * Updates the password for the user.
   */
  updatePassword() {
    if (!this.form.valid) {
      this.form.markAllAsTouched();
      return;
    }
    this.busy$.next(true);
    const oldPassword = this.form.get("oldPassword")?.value;
    const newPassword = this.form.get("newPassword")?.value;
    this.userPasswordService.update(oldPassword, newPassword).subscribe({
      next: () => this.onSuccess(),
      error: (error) => this.onError(error)
    });
  }
  onSuccess() {
    this.globalMessageService.add({
      key: "updatePasswordForm.passwordUpdateSuccess"
    }, GlobalMessageType.MSG_TYPE_CONFIRMATION);
    this.busy$.next(false);
    this.form.reset();
    this.authRedirectService?.setRedirectUrl(this.routingService.getUrl({
      cxRoute: "home"
    }));
    this.authService?.coreLogout().then(() => {
      this.routingService.go({
        cxRoute: "login"
      });
    });
  }
  onError(_error) {
    if (_error instanceof HttpErrorModel && _error.details?.[0].type === "AccessDeniedError") {
      this.globalMessageService.add({
        key: "updatePasswordForm.accessDeniedError"
      }, GlobalMessageType.MSG_TYPE_ERROR);
    }
    this.busy$.next(false);
    this.form.reset();
  }
};
_UpdatePasswordComponentService.\u0275fac = function UpdatePasswordComponentService_Factory(t) {
  return new (t || _UpdatePasswordComponentService)(\u0275\u0275inject(UserPasswordFacade), \u0275\u0275inject(RoutingService), \u0275\u0275inject(GlobalMessageService), \u0275\u0275inject(AuthRedirectService), \u0275\u0275inject(AuthService));
};
_UpdatePasswordComponentService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
  token: _UpdatePasswordComponentService,
  factory: _UpdatePasswordComponentService.\u0275fac
});
var UpdatePasswordComponentService = _UpdatePasswordComponentService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UpdatePasswordComponentService, [{
    type: Injectable
  }], () => [{
    type: UserPasswordFacade
  }, {
    type: RoutingService
  }, {
    type: GlobalMessageService
  }, {
    type: AuthRedirectService
  }, {
    type: AuthService
  }], null);
})();
var _UpdatePasswordComponent = class _UpdatePasswordComponent {
  constructor(service) {
    this.service = service;
    this.form = this.service.form;
    this.isUpdating$ = this.service.isUpdating$;
  }
  onSubmit() {
    this.service.updatePassword();
  }
};
_UpdatePasswordComponent.\u0275fac = function UpdatePasswordComponent_Factory(t) {
  return new (t || _UpdatePasswordComponent)(\u0275\u0275directiveInject(UpdatePasswordComponentService));
};
_UpdatePasswordComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
  type: _UpdatePasswordComponent,
  selectors: [["cx-update-password"]],
  hostAttrs: [1, "user-form"],
  decls: 34,
  vars: 45,
  consts: [["class", "overlay", 4, "ngIf"], [3, "ngSubmit", "formGroup"], [1, "label-content"], ["required", "true", "type", "password", "name", "oldPassword", "formControlName", "oldPassword", "cxPasswordVisibilitySwitch", "", 1, "form-control", 3, "placeholder"], [3, "control"], ["required", "true", "type", "password", "name", "newPassword", "formControlName", "newPassword", "cxPasswordVisibilitySwitch", "", 1, "form-control", 3, "placeholder"], ["required", "true", "type", "password", "name", "newPasswordConfirm", "formControlName", "newPasswordConfirm", "cxPasswordVisibilitySwitch", "", 1, "form-control", 3, "placeholder"], [1, "btn", "btn-block", "btn-secondary", 3, "routerLink"], [1, "btn", "btn-block", "btn-primary", 3, "disabled"], [1, "overlay"]],
  template: function UpdatePasswordComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275template(0, UpdatePasswordComponent_cx_spinner_0_Template, 1, 0, "cx-spinner", 0);
      \u0275\u0275pipe(1, "async");
      \u0275\u0275elementStart(2, "form", 1);
      \u0275\u0275listener("ngSubmit", function UpdatePasswordComponent_Template_form_ngSubmit_2_listener() {
        return ctx.onSubmit();
      });
      \u0275\u0275elementStart(3, "label")(4, "span", 2);
      \u0275\u0275text(5);
      \u0275\u0275pipe(6, "cxTranslate");
      \u0275\u0275elementEnd();
      \u0275\u0275element(7, "input", 3);
      \u0275\u0275pipe(8, "cxTranslate");
      \u0275\u0275pipe(9, "cxTranslate");
      \u0275\u0275element(10, "cx-form-errors", 4);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(11, "label")(12, "span", 2);
      \u0275\u0275text(13);
      \u0275\u0275pipe(14, "cxTranslate");
      \u0275\u0275elementEnd();
      \u0275\u0275element(15, "input", 5);
      \u0275\u0275pipe(16, "cxTranslate");
      \u0275\u0275pipe(17, "cxTranslate");
      \u0275\u0275element(18, "cx-form-errors", 4);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(19, "label")(20, "span", 2);
      \u0275\u0275text(21);
      \u0275\u0275pipe(22, "cxTranslate");
      \u0275\u0275elementEnd();
      \u0275\u0275element(23, "input", 6);
      \u0275\u0275pipe(24, "cxTranslate");
      \u0275\u0275pipe(25, "cxTranslate");
      \u0275\u0275element(26, "cx-form-errors", 4);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(27, "a", 7);
      \u0275\u0275pipe(28, "cxUrl");
      \u0275\u0275text(29);
      \u0275\u0275pipe(30, "cxTranslate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(31, "button", 8);
      \u0275\u0275text(32);
      \u0275\u0275pipe(33, "cxTranslate");
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275property("ngIf", \u0275\u0275pipeBind1(1, 18, ctx.isUpdating$));
      \u0275\u0275advance(2);
      \u0275\u0275property("formGroup", ctx.form);
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 20, "updatePasswordForm.oldPassword.label"));
      \u0275\u0275advance(2);
      \u0275\u0275propertyInterpolate("placeholder", \u0275\u0275pipeBind1(8, 22, "updatePasswordForm.oldPassword.placeholder"));
      \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(9, 24, "updatePasswordForm.oldPassword.placeholder"));
      \u0275\u0275advance(3);
      \u0275\u0275property("control", ctx.form.get("oldPassword"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(14, 26, "updatePasswordForm.newPassword.label"));
      \u0275\u0275advance(2);
      \u0275\u0275propertyInterpolate("placeholder", \u0275\u0275pipeBind1(16, 28, "updatePasswordForm.newPassword.placeholder"));
      \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(17, 30, "updatePasswordForm.newPassword.placeholder"));
      \u0275\u0275advance(3);
      \u0275\u0275property("control", ctx.form.get("newPassword"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(22, 32, "updatePasswordForm.confirmPassword.label"));
      \u0275\u0275advance(2);
      \u0275\u0275propertyInterpolate("placeholder", \u0275\u0275pipeBind1(24, 34, "updatePasswordForm.confirmPassword.placeholder"));
      \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(25, 36, "updatePasswordForm.confirmPassword.placeholder"));
      \u0275\u0275advance(3);
      \u0275\u0275property("control", ctx.form.get("newPasswordConfirm"));
      \u0275\u0275advance();
      \u0275\u0275property("routerLink", \u0275\u0275pipeBind1(28, 38, \u0275\u0275pureFunction0(44, _c1)));
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(30, 40, "common.cancel"), " ");
      \u0275\u0275advance(2);
      \u0275\u0275property("disabled", ctx.form.disabled);
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(33, 42, "common.save"), " ");
    }
  },
  dependencies: [NgIf, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, RequiredValidator, FormGroupDirective, FormControlName, SpinnerComponent, FormErrorsComponent, RouterLink, PasswordVisibilityToggleDirective, AsyncPipe, TranslatePipe, UrlPipe],
  encapsulation: 2,
  changeDetection: 0
});
var UpdatePasswordComponent = _UpdatePasswordComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UpdatePasswordComponent, [{
    type: Component,
    args: [{
      selector: "cx-update-password",
      changeDetection: ChangeDetectionStrategy.OnPush,
      host: {
        class: "user-form"
      },
      template: `<cx-spinner class="overlay" *ngIf="isUpdating$ | async"> </cx-spinner>

<form (ngSubmit)="onSubmit()" [formGroup]="form">
  <label>
    <span class="label-content">{{
      'updatePasswordForm.oldPassword.label' | cxTranslate
    }}</span>
    <input
      required="true"
      class="form-control"
      type="password"
      name="oldPassword"
      placeholder="{{
        'updatePasswordForm.oldPassword.placeholder' | cxTranslate
      }}"
      formControlName="oldPassword"
      [attr.aria-label]="
        'updatePasswordForm.oldPassword.placeholder' | cxTranslate
      "
      cxPasswordVisibilitySwitch
    />
    <cx-form-errors [control]="form.get('oldPassword')"></cx-form-errors>
  </label>

  <label>
    <span class="label-content">{{
      'updatePasswordForm.newPassword.label' | cxTranslate
    }}</span>
    <input
      required="true"
      class="form-control"
      type="password"
      name="newPassword"
      placeholder="{{
        'updatePasswordForm.newPassword.placeholder' | cxTranslate
      }}"
      formControlName="newPassword"
      [attr.aria-label]="
        'updatePasswordForm.newPassword.placeholder' | cxTranslate
      "
      cxPasswordVisibilitySwitch
    />
    <cx-form-errors [control]="form.get('newPassword')"></cx-form-errors>
  </label>

  <label>
    <span class="label-content">{{
      'updatePasswordForm.confirmPassword.label' | cxTranslate
    }}</span>
    <input
      required="true"
      class="form-control"
      type="password"
      name="newPasswordConfirm"
      placeholder="{{
        'updatePasswordForm.confirmPassword.placeholder' | cxTranslate
      }}"
      formControlName="newPasswordConfirm"
      [attr.aria-label]="
        'updatePasswordForm.confirmPassword.placeholder' | cxTranslate
      "
      cxPasswordVisibilitySwitch
    />
    <cx-form-errors [control]="form.get('newPasswordConfirm')"></cx-form-errors>
  </label>

  <a
    class="btn btn-block btn-secondary"
    [routerLink]="{ cxRoute: 'home' } | cxUrl"
  >
    {{ 'common.cancel' | cxTranslate }}
  </a>

  <button class="btn btn-block btn-primary" [disabled]="form.disabled">
    {{ 'common.save' | cxTranslate }}
  </button>
</form>
`
    }]
  }], () => [{
    type: UpdatePasswordComponentService
  }], null);
})();
var _UpdatePasswordModule = class _UpdatePasswordModule {
};
_UpdatePasswordModule.\u0275fac = function UpdatePasswordModule_Factory(t) {
  return new (t || _UpdatePasswordModule)();
};
_UpdatePasswordModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
  type: _UpdatePasswordModule
});
_UpdatePasswordModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
  providers: [provideDefaultConfig({
    cmsComponents: {
      UpdatePasswordComponent: {
        component: UpdatePasswordComponent,
        guards: [AuthGuard],
        providers: [{
          provide: UpdatePasswordComponentService,
          useClass: UpdatePasswordComponentService,
          deps: [UserPasswordFacade, RoutingService, GlobalMessageService, AuthRedirectService, AuthService]
        }]
      }
    }
  })],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, SpinnerModule, I18nModule, FormErrorsModule, UrlModule, RouterModule, PasswordVisibilityToggleModule]
});
var UpdatePasswordModule = _UpdatePasswordModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UpdatePasswordModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, FormsModule, ReactiveFormsModule, SpinnerModule, I18nModule, FormErrorsModule, UrlModule, RouterModule, PasswordVisibilityToggleModule],
      providers: [provideDefaultConfig({
        cmsComponents: {
          UpdatePasswordComponent: {
            component: UpdatePasswordComponent,
            guards: [AuthGuard],
            providers: [{
              provide: UpdatePasswordComponentService,
              useClass: UpdatePasswordComponentService,
              deps: [UserPasswordFacade, RoutingService, GlobalMessageService, AuthRedirectService, AuthService]
            }]
          }
        }
      })],
      declarations: [UpdatePasswordComponent]
    }]
  }], null, null);
})();
var _UpdateProfileComponentService = class _UpdateProfileComponentService {
  constructor(userProfile, globalMessageService) {
    this.userProfile = userProfile;
    this.globalMessageService = globalMessageService;
    this.user$ = this.userProfile.get().pipe(filter((user) => Boolean(user)));
    this.busy$ = new BehaviorSubject(false);
    this.isUpdating$ = this.user$.pipe(tap((user) => this.form.patchValue(user)), switchMap((_user) => this.busy$), tap((state) => state === true ? this.form.disable() : this.form.enable()));
    this.titles$ = this.userProfile.getTitles();
    this.form = new UntypedFormGroup({
      customerId: new UntypedFormControl(""),
      titleCode: new UntypedFormControl(""),
      firstName: new UntypedFormControl("", Validators.required),
      lastName: new UntypedFormControl("", Validators.required)
    });
  }
  /**
   * Updates the user's details and handles the UI.
   */
  updateProfile() {
    if (!this.form.valid) {
      this.form.markAllAsTouched();
      return;
    }
    this.busy$.next(true);
    this.userProfile.update(this.form.value).subscribe({
      next: () => this.onSuccess(),
      error: (error) => this.onError(error)
    });
  }
  onSuccess() {
    this.globalMessageService.add({
      key: "updateProfileForm.profileUpdateSuccess"
    }, GlobalMessageType.MSG_TYPE_CONFIRMATION);
    this.busy$.next(false);
    this.form.reset();
  }
  onError(_error) {
    this.busy$.next(false);
  }
};
_UpdateProfileComponentService.\u0275fac = function UpdateProfileComponentService_Factory(t) {
  return new (t || _UpdateProfileComponentService)(\u0275\u0275inject(UserProfileFacade), \u0275\u0275inject(GlobalMessageService));
};
_UpdateProfileComponentService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
  token: _UpdateProfileComponentService,
  factory: _UpdateProfileComponentService.\u0275fac
});
var UpdateProfileComponentService = _UpdateProfileComponentService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UpdateProfileComponentService, [{
    type: Injectable
  }], () => [{
    type: UserProfileFacade
  }, {
    type: GlobalMessageService
  }], null);
})();
var _UpdateProfileComponent = class _UpdateProfileComponent {
  constructor(service) {
    this.service = service;
    this.form = this.service.form;
    this.isUpdating$ = this.service.isUpdating$;
    this.titles$ = this.service.titles$;
  }
  onSubmit() {
    this.service.updateProfile();
  }
};
_UpdateProfileComponent.\u0275fac = function UpdateProfileComponent_Factory(t) {
  return new (t || _UpdateProfileComponent)(\u0275\u0275directiveInject(UpdateProfileComponentService));
};
_UpdateProfileComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
  type: _UpdateProfileComponent,
  selectors: [["cx-update-profile"]],
  hostAttrs: [1, "user-form"],
  decls: 38,
  vars: 46,
  consts: [["class", "overlay", 4, "ngIf"], [3, "ngSubmit", "formGroup"], [1, "label-content"], ["formControlName", "titleCode", "id", "title-select", 3, "clearable", "searchable", "cxNgSelectA11y"], [3, "value", 4, "ngFor", "ngForOf"], ["required", "true", "type", "text", "name", "firstName", "formControlName", "firstName", 1, "form-control", 3, "placeholder"], [3, "control"], ["required", "true", "type", "text", "name", "lastName", "formControlName", "lastName", 1, "form-control", 3, "placeholder"], ["required", "true", "type", "text", "name", "customerId", "formControlName", "customerId", "readonly", "", 1, "form-control"], [1, "btn", "btn-block", "btn-secondary", 3, "routerLink"], [1, "btn", "btn-block", "btn-primary", 3, "disabled"], [1, "overlay"], [3, "value"]],
  template: function UpdateProfileComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275template(0, UpdateProfileComponent_cx_spinner_0_Template, 1, 0, "cx-spinner", 0);
      \u0275\u0275pipe(1, "async");
      \u0275\u0275elementStart(2, "form", 1);
      \u0275\u0275listener("ngSubmit", function UpdateProfileComponent_Template_form_ngSubmit_2_listener() {
        return ctx.onSubmit();
      });
      \u0275\u0275elementStart(3, "label")(4, "span", 2);
      \u0275\u0275text(5);
      \u0275\u0275pipe(6, "cxTranslate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "ng-select", 3);
      \u0275\u0275pipe(8, "cxTranslate");
      \u0275\u0275template(9, UpdateProfileComponent_ng_option_9_Template, 2, 2, "ng-option", 4);
      \u0275\u0275pipe(10, "async");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(11, "label")(12, "span", 2);
      \u0275\u0275text(13);
      \u0275\u0275pipe(14, "cxTranslate");
      \u0275\u0275elementEnd();
      \u0275\u0275element(15, "input", 5);
      \u0275\u0275pipe(16, "cxTranslate");
      \u0275\u0275element(17, "cx-form-errors", 6);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(18, "label")(19, "span", 2);
      \u0275\u0275text(20);
      \u0275\u0275pipe(21, "cxTranslate");
      \u0275\u0275elementEnd();
      \u0275\u0275element(22, "input", 7);
      \u0275\u0275pipe(23, "cxTranslate");
      \u0275\u0275element(24, "cx-form-errors", 6);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(25, "label")(26, "span", 2);
      \u0275\u0275text(27);
      \u0275\u0275pipe(28, "cxTranslate");
      \u0275\u0275elementEnd();
      \u0275\u0275element(29, "input", 8)(30, "cx-form-errors", 6);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(31, "a", 9);
      \u0275\u0275pipe(32, "cxUrl");
      \u0275\u0275text(33);
      \u0275\u0275pipe(34, "cxTranslate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(35, "button", 10);
      \u0275\u0275text(36);
      \u0275\u0275pipe(37, "cxTranslate");
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275property("ngIf", \u0275\u0275pipeBind1(1, 19, ctx.isUpdating$));
      \u0275\u0275advance(2);
      \u0275\u0275property("formGroup", ctx.form);
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 21, "updateProfileForm.title"));
      \u0275\u0275advance(2);
      \u0275\u0275property("clearable", false)("searchable", false)("cxNgSelectA11y", \u0275\u0275pureFunction1(43, _c3, \u0275\u0275pipeBind1(8, 23, "updateProfileForm.title")));
      \u0275\u0275advance(2);
      \u0275\u0275property("ngForOf", \u0275\u0275pipeBind1(10, 25, ctx.titles$));
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(14, 27, "updateProfileForm.firstName.label"));
      \u0275\u0275advance(2);
      \u0275\u0275propertyInterpolate("placeholder", \u0275\u0275pipeBind1(16, 29, "updateProfileForm.firstName.placeholder"));
      \u0275\u0275advance(2);
      \u0275\u0275property("control", ctx.form.get("firstName"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(21, 31, "updateProfileForm.lastName.label"));
      \u0275\u0275advance(2);
      \u0275\u0275propertyInterpolate("placeholder", \u0275\u0275pipeBind1(23, 33, "updateProfileForm.lastName.placeholder"));
      \u0275\u0275advance(2);
      \u0275\u0275property("control", ctx.form.get("lastName"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(28, 35, "updateProfileForm.customerId"));
      \u0275\u0275advance(3);
      \u0275\u0275property("control", ctx.form.get("lastName"));
      \u0275\u0275advance();
      \u0275\u0275property("routerLink", \u0275\u0275pipeBind1(32, 37, \u0275\u0275pureFunction0(45, _c1)));
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(34, 39, "common.cancel"), " ");
      \u0275\u0275advance(2);
      \u0275\u0275property("disabled", ctx.form.disabled);
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(37, 41, "common.save"), " ");
    }
  },
  dependencies: [NgForOf, NgIf, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, RequiredValidator, FormGroupDirective, FormControlName, SpinnerComponent, FormErrorsComponent, RouterLink, NgSelectComponent, NgOptionComponent, NgSelectA11yDirective, AsyncPipe, TranslatePipe, UrlPipe],
  encapsulation: 2,
  changeDetection: 0
});
var UpdateProfileComponent = _UpdateProfileComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UpdateProfileComponent, [{
    type: Component,
    args: [{
      selector: "cx-update-profile",
      changeDetection: ChangeDetectionStrategy.OnPush,
      host: {
        class: "user-form"
      },
      template: `<cx-spinner class="overlay" *ngIf="isUpdating$ | async"> </cx-spinner>

<form (ngSubmit)="onSubmit()" [formGroup]="form">
  <label>
    <span class="label-content">{{
      'updateProfileForm.title' | cxTranslate
    }}</span>
    <ng-select
      [clearable]="false"
      [searchable]="false"
      formControlName="titleCode"
      id="title-select"
      [cxNgSelectA11y]="{
        ariaLabel: 'updateProfileForm.title' | cxTranslate
      }"
    >
      <ng-option *ngFor="let title of titles$ | async" [value]="title.code">{{
        title.name
      }}</ng-option>
    </ng-select>
  </label>
  <label>
    <span class="label-content">{{
      'updateProfileForm.firstName.label' | cxTranslate
    }}</span>
    <input
      required="true"
      type="text"
      class="form-control"
      name="firstName"
      placeholder="{{
        'updateProfileForm.firstName.placeholder' | cxTranslate
      }}"
      formControlName="firstName"
    />
    <cx-form-errors [control]="form.get('firstName')"></cx-form-errors>
  </label>

  <label>
    <span class="label-content">{{
      'updateProfileForm.lastName.label' | cxTranslate
    }}</span>
    <input
      required="true"
      type="text"
      class="form-control"
      name="lastName"
      placeholder="{{ 'updateProfileForm.lastName.placeholder' | cxTranslate }}"
      formControlName="lastName"
    />
    <cx-form-errors [control]="form.get('lastName')"></cx-form-errors>
  </label>

  <label>
    <span class="label-content">{{
      'updateProfileForm.customerId' | cxTranslate
    }}</span>
    <input
      required="true"
      type="text"
      class="form-control"
      name="customerId"
      formControlName="customerId"
      readonly
    />
    <cx-form-errors [control]="form.get('lastName')"></cx-form-errors>
  </label>

  <a
    class="btn btn-block btn-secondary"
    [routerLink]="{ cxRoute: 'home' } | cxUrl"
  >
    {{ 'common.cancel' | cxTranslate }}
  </a>

  <button class="btn btn-block btn-primary" [disabled]="form.disabled">
    {{ 'common.save' | cxTranslate }}
  </button>
</form>
`
    }]
  }], () => [{
    type: UpdateProfileComponentService
  }], null);
})();
var _UpdateProfileModule = class _UpdateProfileModule {
};
_UpdateProfileModule.\u0275fac = function UpdateProfileModule_Factory(t) {
  return new (t || _UpdateProfileModule)();
};
_UpdateProfileModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
  type: _UpdateProfileModule
});
_UpdateProfileModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
  providers: [provideDefaultConfig({
    cmsComponents: {
      UpdateProfileComponent: {
        component: UpdateProfileComponent,
        guards: [AuthGuard],
        providers: [{
          provide: UpdateProfileComponentService,
          useClass: UpdateProfileComponentService,
          deps: [UserProfileFacade, GlobalMessageService]
        }]
      }
    }
  })],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, SpinnerModule, I18nModule, FormErrorsModule, RouterModule, UrlModule, NgSelectModule, NgSelectA11yModule]
});
var UpdateProfileModule = _UpdateProfileModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UpdateProfileModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, FormsModule, ReactiveFormsModule, SpinnerModule, I18nModule, FormErrorsModule, RouterModule, UrlModule, NgSelectModule, NgSelectA11yModule],
      providers: [provideDefaultConfig({
        cmsComponents: {
          UpdateProfileComponent: {
            component: UpdateProfileComponent,
            guards: [AuthGuard],
            providers: [{
              provide: UpdateProfileComponentService,
              useClass: UpdateProfileComponentService,
              deps: [UserProfileFacade, GlobalMessageService]
            }]
          }
        }
      })],
      declarations: [UpdateProfileComponent]
    }]
  }], null, null);
})();
var _AddressBookComponentService = class _AddressBookComponentService {
  constructor(userAddressService) {
    this.userAddressService = userAddressService;
  }
  getAddresses() {
    return this.userAddressService.getAddresses();
  }
  getAddressesStateLoading() {
    return this.userAddressService.getAddressesLoading();
  }
  loadAddresses() {
    this.userAddressService.loadAddresses();
  }
  addUserAddress(address) {
    this.userAddressService.addUserAddress(address);
  }
  updateUserAddress(addressId, address) {
    this.userAddressService.updateUserAddress(addressId, address);
  }
  setAddressAsDefault(addressId) {
    this.userAddressService.setAddressAsDefault(addressId);
  }
  deleteUserAddress(addressId) {
    this.userAddressService.deleteUserAddress(addressId);
  }
};
_AddressBookComponentService.\u0275fac = function AddressBookComponentService_Factory(t) {
  return new (t || _AddressBookComponentService)(\u0275\u0275inject(UserAddressService));
};
_AddressBookComponentService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
  token: _AddressBookComponentService,
  factory: _AddressBookComponentService.\u0275fac,
  providedIn: "root"
});
var AddressBookComponentService = _AddressBookComponentService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AddressBookComponentService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: UserAddressService
  }], null);
})();
var _AddressFormComponent = class _AddressFormComponent {
  constructor(fb, userAddressService, globalMessageService, translation, launchDialogService, userProfileFacade) {
    this.fb = fb;
    this.userAddressService = userAddressService;
    this.globalMessageService = globalMessageService;
    this.translation = translation;
    this.launchDialogService = launchDialogService;
    this.userProfileFacade = userProfileFacade;
    this.selectedCountry$ = new BehaviorSubject("");
    this.setAsDefaultField = true;
    this.showCancelBtn = true;
    this.submitAddress = new EventEmitter();
    this.backToAddress = new EventEmitter();
    this.subscription = new Subscription();
    this.addressForm = this.fb.group({
      country: this.fb.group({
        isocode: [null, Validators.required]
      }),
      titleCode: [""],
      firstName: ["", Validators.required],
      lastName: ["", Validators.required],
      line1: ["", Validators.required],
      line2: [""],
      town: ["", Validators.required],
      region: this.fb.group({
        isocode: [null, Validators.required]
      }),
      postalCode: ["", Validators.required],
      phone: "",
      cellphone: "",
      defaultAddress: [false]
    });
  }
  ngOnInit() {
    this.countries$ = this.userAddressService.getDeliveryCountries().pipe(tap((countries) => {
      if (Object.keys(countries).length === 0) {
        this.userAddressService.loadDeliveryCountries();
      }
    }));
    this.titles$ = this.getTitles();
    this.regions$ = this.selectedCountry$.pipe(switchMap((country) => this.userAddressService.getRegions(country)), tap((regions) => {
      const regionControl = this.addressForm.get("region.isocode");
      if (regions && regions.length > 0) {
        regionControl?.enable();
      } else {
        regionControl?.disable();
      }
    }));
    if (this.addressData && Object.keys(this.addressData).length !== 0) {
      this.addressForm.patchValue(this.addressData);
      this.countrySelected(this.addressData.country);
      if (this.addressData.region) {
        this.regionSelected(this.addressData.region);
      }
    }
    this.addresses$ = this.userAddressService.getAddresses();
  }
  getTitles() {
    return combineLatest([this.translation.translate("addressForm.defaultTitle"), this.userProfileFacade.getTitles()]).pipe(map(([noneTitleText, titles]) => {
      const noneTitle = {
        code: "",
        name: noneTitleText
      };
      titles.sort(sortTitles);
      return [noneTitle, ...titles];
    }));
  }
  handleAddressVerificationResults(results) {
    if (results.decision === "ACCEPT") {
      this.submitAddress.emit(this.addressForm.value);
    } else if (results.decision === "REJECT") {
      if (results.errors?.errors.some((error) => error.subject === "titleCode")) {
        this.globalMessageService.add({
          key: "addressForm.titleRequired"
        }, GlobalMessageType.MSG_TYPE_ERROR);
      } else {
        this.globalMessageService.add({
          key: "addressForm.invalidAddress"
        }, GlobalMessageType.MSG_TYPE_ERROR);
      }
    } else if (results.decision === "REVIEW") {
      this.openSuggestedAddress(results);
    }
  }
  countrySelected(country) {
    this.addressForm.get("country")?.get("isocode")?.setValue(country?.isocode);
    this.selectedCountry$.next(country?.isocode ?? "");
  }
  regionSelected(region) {
    this.addressForm.get("region")?.get("isocode")?.setValue(region.isocode);
  }
  toggleDefaultAddress() {
    this.addressForm["controls"].defaultAddress.setValue(this.addressForm.value.defaultAddress);
  }
  back() {
    this.backToAddress.emit();
  }
  verifyAddress() {
    if (this.addressForm.valid) {
      const regionControl = this.addressForm.get("region");
      const isocode = regionControl?.value?.isocode;
      if (isocode) {
        this.regions$.pipe(take(1)).subscribe((regions) => {
          if (regions.length) {
            const selectedRegion = regions.find((region) => region.isocode === isocode);
            regionControl?.patchValue({
              isocodeShort: selectedRegion?.isocodeShort
            });
          } else {
            regionControl?.reset();
          }
        });
      }
      if (this.addressForm.dirty) {
        this.subscription.add(this.userAddressService.verifyAddress(this.addressForm.value).subscribe((value) => {
          this.handleAddressVerificationResults(value);
        }));
      } else {
        this.submitAddress.emit(void 0);
      }
    } else {
      this.addressForm.markAllAsTouched();
    }
  }
  openSuggestedAddress(results) {
    this.launchDialogService.openDialogAndSubscribe("SUGGESTED_ADDRESSES", this.element, {
      enteredAddress: this.addressForm.value,
      suggestedAddresses: results.suggestedAddresses
    });
    this.subscription.add(this.launchDialogService.dialogClose.pipe(filter((result) => Boolean(result))).subscribe((result) => {
      if (typeof result === "object") {
        const address = __spreadProps(__spreadValues({}, result), {
          titleCode: this.addressForm.value.titleCode,
          phone: this.addressForm.value.phone,
          selected: true
        });
        this.submitAddress.emit(address);
      }
    }));
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
};
_AddressFormComponent.\u0275fac = function AddressFormComponent_Factory(t) {
  return new (t || _AddressFormComponent)(\u0275\u0275directiveInject(UntypedFormBuilder), \u0275\u0275directiveInject(UserAddressService), \u0275\u0275directiveInject(GlobalMessageService), \u0275\u0275directiveInject(TranslationService), \u0275\u0275directiveInject(LaunchDialogService), \u0275\u0275directiveInject(UserProfileFacade));
};
_AddressFormComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
  type: _AddressFormComponent,
  selectors: [["cx-address-form"]],
  viewQuery: function AddressFormComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(_c5, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.element = _t.first);
    }
  },
  inputs: {
    addressData: "addressData",
    actionBtnLabel: "actionBtnLabel",
    cancelBtnLabel: "cancelBtnLabel",
    setAsDefaultField: "setAsDefaultField",
    showTitleCode: "showTitleCode",
    showCancelBtn: "showCancelBtn"
  },
  outputs: {
    submitAddress: "submitAddress",
    backToAddress: "backToAddress"
  },
  decls: 80,
  vars: 68,
  consts: [["submit", ""], [3, "ngSubmit", "formGroup"], ["formGroupName", "country", 1, "form-group"], [4, "ngIf"], ["class", "form-group", 4, "ngIf"], [1, "form-group"], [1, "label-content", "required"], ["required", "true", "type", "text", "formControlName", "firstName", 1, "form-control", 3, "placeholder"], [3, "control"], ["required", "true", "type", "text", "formControlName", "lastName", 1, "form-control", 3, "placeholder"], ["required", "true", "type", "text", "formControlName", "line1", 1, "form-control", 3, "placeholder"], [1, "label-content"], ["type", "text", "formControlName", "line2", 1, "form-control", 3, "placeholder"], [1, "row"], [1, "form-group", "col-sm-6"], ["required", "true", "type", "text", "formControlName", "town", 1, "form-control", 3, "placeholder"], ["required", "true", "type", "text", "formControlName", "postalCode", 1, "form-control", 3, "placeholder"], ["formGroupName", "region", 4, "ngIf"], [1, "form-group", "col-md-6"], ["type", "tel", "formControlName", "phone", 1, "form-control", 3, "placeholder"], ["type", "tel", "formControlName", "cellphone", 1, "form-control", 3, "placeholder"], [1, "cx-address-form-btns"], ["class", "col-md-13 col-lg-6", 4, "ngIf"], [1, "col-md-13", "col-lg-6"], ["type", "submit", 1, "btn", "btn-block", "btn-primary"], ["id", "country-select", "formControlName", "isocode", "bindLabel", "name", "bindValue", "isocode", 1, "country-select", 3, "change", "inputAttrs", "searchable", "clearable", "items", "placeholder", "cxNgSelectA11y"], ["id", "title-select", "formControlName", "titleCode", "bindLabel", "name", "bindValue", "code", 3, "searchable", "clearable", "items", "placeholder", "cxNgSelectA11y"], ["formGroupName", "region"], ["formControlName", "isocode", "id", "region-select", 1, "region-select", 3, "inputAttrs", "searchable", "clearable", "items", "bindLabel", "bindValue", "placeholder", "cxNgSelectA11y"], [1, "form-check"], ["type", "checkbox", "formControlName", "defaultAddress", 1, "form-check-input", 3, "change"], [1, "form-check-label"], [1, "btn", "btn-block", "btn-secondary", 3, "click"]],
  template: function AddressFormComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "form", 1);
      \u0275\u0275listener("ngSubmit", function AddressFormComponent_Template_form_ngSubmit_0_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.verifyAddress());
      });
      \u0275\u0275elementStart(1, "div", 2);
      \u0275\u0275template(2, AddressFormComponent_ng_container_2_Template, 2, 1, "ng-container", 3);
      \u0275\u0275pipe(3, "async");
      \u0275\u0275elementEnd();
      \u0275\u0275template(4, AddressFormComponent_div_4_Template, 3, 3, "div", 4);
      \u0275\u0275elementStart(5, "div", 5)(6, "label")(7, "span", 6);
      \u0275\u0275text(8);
      \u0275\u0275pipe(9, "cxTranslate");
      \u0275\u0275elementEnd();
      \u0275\u0275element(10, "input", 7);
      \u0275\u0275pipe(11, "cxTranslate");
      \u0275\u0275element(12, "cx-form-errors", 8);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(13, "div", 5)(14, "label")(15, "span", 6);
      \u0275\u0275text(16);
      \u0275\u0275pipe(17, "cxTranslate");
      \u0275\u0275elementEnd();
      \u0275\u0275element(18, "input", 9);
      \u0275\u0275pipe(19, "cxTranslate");
      \u0275\u0275element(20, "cx-form-errors", 8);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(21, "div", 5)(22, "label")(23, "span", 6);
      \u0275\u0275text(24);
      \u0275\u0275pipe(25, "cxTranslate");
      \u0275\u0275elementEnd();
      \u0275\u0275element(26, "input", 10);
      \u0275\u0275pipe(27, "cxTranslate");
      \u0275\u0275element(28, "cx-form-errors", 8);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(29, "div", 5)(30, "label")(31, "span", 11);
      \u0275\u0275text(32);
      \u0275\u0275pipe(33, "cxTranslate");
      \u0275\u0275elementEnd();
      \u0275\u0275element(34, "input", 12);
      \u0275\u0275pipe(35, "cxTranslate");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(36, "div", 13)(37, "div", 14)(38, "label")(39, "span", 6);
      \u0275\u0275text(40);
      \u0275\u0275pipe(41, "cxTranslate");
      \u0275\u0275elementEnd();
      \u0275\u0275element(42, "input", 15);
      \u0275\u0275pipe(43, "cxTranslate");
      \u0275\u0275element(44, "cx-form-errors", 8);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(45, "div", 14)(46, "label")(47, "span", 6);
      \u0275\u0275text(48);
      \u0275\u0275pipe(49, "cxTranslate");
      \u0275\u0275elementEnd();
      \u0275\u0275element(50, "input", 16);
      \u0275\u0275pipe(51, "cxTranslate");
      \u0275\u0275element(52, "cx-form-errors", 8);
      \u0275\u0275elementEnd()();
      \u0275\u0275template(53, AddressFormComponent_ng_container_53_Template, 2, 1, "ng-container", 17);
      \u0275\u0275pipe(54, "async");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(55, "div", 13)(56, "div", 18)(57, "label")(58, "span", 11);
      \u0275\u0275text(59);
      \u0275\u0275pipe(60, "cxTranslate");
      \u0275\u0275elementEnd();
      \u0275\u0275element(61, "input", 19);
      \u0275\u0275pipe(62, "cxTranslate");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(63, "div", 18)(64, "label")(65, "span", 11);
      \u0275\u0275text(66);
      \u0275\u0275pipe(67, "cxTranslate");
      \u0275\u0275elementEnd();
      \u0275\u0275element(68, "input", 20);
      \u0275\u0275pipe(69, "cxTranslate");
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(70, AddressFormComponent_div_70_Template, 7, 3, "div", 4);
      \u0275\u0275pipe(71, "async");
      \u0275\u0275elementStart(72, "div", 21)(73, "div", 13);
      \u0275\u0275template(74, AddressFormComponent_div_74_Template, 4, 3, "div", 22);
      \u0275\u0275elementStart(75, "div", 23)(76, "button", 24, 0);
      \u0275\u0275text(78);
      \u0275\u0275pipe(79, "cxTranslate");
      \u0275\u0275elementEnd()()()()();
    }
    if (rf & 2) {
      let tmp_26_0;
      \u0275\u0275property("formGroup", ctx.addressForm);
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", \u0275\u0275pipeBind1(3, 28, ctx.countries$));
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.showTitleCode);
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(9, 30, "addressForm.firstName.label"));
      \u0275\u0275advance(2);
      \u0275\u0275propertyInterpolate("placeholder", \u0275\u0275pipeBind1(11, 32, "addressForm.firstName.placeholder"));
      \u0275\u0275advance(2);
      \u0275\u0275property("control", ctx.addressForm.get("firstName"));
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(17, 34, "addressForm.lastName.label"));
      \u0275\u0275advance(2);
      \u0275\u0275propertyInterpolate("placeholder", \u0275\u0275pipeBind1(19, 36, "addressForm.lastName.placeholder"));
      \u0275\u0275advance(2);
      \u0275\u0275property("control", ctx.addressForm.get("lastName"));
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(25, 38, "addressForm.address1"));
      \u0275\u0275advance(2);
      \u0275\u0275propertyInterpolate("placeholder", \u0275\u0275pipeBind1(27, 40, "addressForm.streetAddress"));
      \u0275\u0275advance(2);
      \u0275\u0275property("control", ctx.addressForm.get("line1"));
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(33, 42, "addressForm.address2"));
      \u0275\u0275advance(2);
      \u0275\u0275propertyInterpolate("placeholder", \u0275\u0275pipeBind1(35, 44, "addressForm.aptSuite"));
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(41, 46, "addressForm.city.label"));
      \u0275\u0275advance(2);
      \u0275\u0275propertyInterpolate("placeholder", \u0275\u0275pipeBind1(43, 48, "addressForm.city.placeholder"));
      \u0275\u0275advance(2);
      \u0275\u0275property("control", ctx.addressForm.get("town"));
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(49, 50, "addressForm.zipCode.label"));
      \u0275\u0275advance(2);
      \u0275\u0275propertyInterpolate("placeholder", \u0275\u0275pipeBind1(51, 52, "addressForm.zipCode.placeholder"));
      \u0275\u0275advance(2);
      \u0275\u0275property("control", ctx.addressForm.get("postalCode"));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", \u0275\u0275pipeBind1(54, 54, ctx.regions$));
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(60, 56, "addressForm.phoneNumber.label"));
      \u0275\u0275advance(2);
      \u0275\u0275propertyInterpolate("placeholder", \u0275\u0275pipeBind1(62, 58, "addressForm.phoneNumber.placeholder"));
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(67, 60, "addressForm.cellphone.label"));
      \u0275\u0275advance(2);
      \u0275\u0275propertyInterpolate("placeholder", \u0275\u0275pipeBind1(69, 62, "addressForm.cellphone.placeholder"));
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ((tmp_26_0 = \u0275\u0275pipeBind1(71, 64, ctx.addresses$)) == null ? null : tmp_26_0.length) && ctx.setAsDefaultField);
      \u0275\u0275advance(4);
      \u0275\u0275property("ngIf", ctx.showCancelBtn);
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1(" ", ctx.actionBtnLabel || \u0275\u0275pipeBind1(79, 66, "common.continue"), " ");
    }
  },
  dependencies: [NgSelectA11yDirective, NgIf, \u0275NgNoValidate, DefaultValueAccessor, CheckboxControlValueAccessor, NgControlStatus, NgControlStatusGroup, RequiredValidator, FormGroupDirective, FormControlName, FormGroupName, NgSelectComponent, FormErrorsComponent, AsyncPipe, TranslatePipe],
  encapsulation: 2,
  changeDetection: 0
});
var AddressFormComponent = _AddressFormComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AddressFormComponent, [{
    type: Component,
    args: [{
      selector: "cx-address-form",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: `<form (ngSubmit)="verifyAddress()" [formGroup]="addressForm">
  <div class="form-group" formGroupName="country">
    <ng-container *ngIf="countries$ | async as countries">
      <div *ngIf="countries.length !== 0">
        <label>
          <span class="label-content required">{{
            'addressForm.country' | cxTranslate
          }}</span>
          <ng-select
            [inputAttrs]="{ required: 'true' }"
            class="country-select"
            id="country-select"
            formControlName="isocode"
            [searchable]="true"
            [clearable]="false"
            [items]="countries"
            bindLabel="name"
            bindValue="isocode"
            placeholder="{{ 'addressForm.selectOne' | cxTranslate }}"
            (change)="countrySelected($event)"
            [cxNgSelectA11y]="{
              ariaLabel: 'addressForm.country' | cxTranslate
            }"
          >
          </ng-select>
          <cx-form-errors
            [control]="addressForm.get('country.isocode')"
          ></cx-form-errors>
        </label>
      </div>
    </ng-container>
  </div>
  <div class="form-group" *ngIf="showTitleCode">
    <ng-container *ngIf="titles$ | async as titles">
      <div *ngIf="titles.length !== 0">
        <label>
          <span class="label-content required">{{
            'addressForm.title' | cxTranslate
          }}</span>
          <ng-select
            id="title-select"
            formControlName="titleCode"
            [searchable]="true"
            [clearable]="false"
            [items]="titles"
            bindLabel="name"
            bindValue="code"
            [placeholder]="'addressForm.title' | cxTranslate"
            [cxNgSelectA11y]="{
              ariaLabel: 'addressForm.title' | cxTranslate
            }"
          >
          </ng-select>
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
        placeholder="{{ 'addressForm.firstName.placeholder' | cxTranslate }}"
        formControlName="firstName"
      />
      <cx-form-errors [control]="addressForm.get('firstName')"></cx-form-errors>
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
        placeholder="{{ 'addressForm.lastName.placeholder' | cxTranslate }}"
        formControlName="lastName"
      />
      <cx-form-errors [control]="addressForm.get('lastName')"></cx-form-errors>
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
        placeholder="{{ 'addressForm.streetAddress' | cxTranslate }}"
        formControlName="line1"
      />
      <cx-form-errors [control]="addressForm.get('line1')"></cx-form-errors>
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
    <div class="form-group col-sm-6">
      <label>
        <span class="label-content required">{{
          'addressForm.city.label' | cxTranslate
        }}</span>
        <input
          required="true"
          type="text"
          class="form-control"
          placeholder="{{ 'addressForm.city.placeholder' | cxTranslate }}"
          formControlName="town"
        />
        <cx-form-errors [control]="addressForm.get('town')"></cx-form-errors>
      </label>
    </div>
    <div class="form-group col-sm-6">
      <label>
        <span class="label-content required">{{
          'addressForm.zipCode.label' | cxTranslate
        }}</span>
        <input
          required="true"
          type="text"
          class="form-control"
          placeholder="{{ 'addressForm.zipCode.placeholder' | cxTranslate }}"
          formControlName="postalCode"
        />
        <cx-form-errors
          [control]="addressForm.get('postalCode')"
        ></cx-form-errors>
      </label>
    </div>
    <ng-container *ngIf="regions$ | async as regions" formGroupName="region">
      <ng-container *ngIf="regions.length !== 0">
        <div class="form-group col-md-6">
          <label>
            <span class="label-content required">{{
              'addressForm.state' | cxTranslate
            }}</span>
            <ng-select
              [inputAttrs]="{ required: 'true' }"
              class="region-select"
              formControlName="isocode"
              [searchable]="true"
              [clearable]="false"
              [items]="regions"
              bindLabel="{{ regions[0].name ? 'name' : 'isocode' }}"
              bindValue="{{ regions[0].name ? 'isocode' : 'region' }}"
              placeholder="{{ 'addressForm.selectOne' | cxTranslate }}"
              id="region-select"
              [cxNgSelectA11y]="{
                ariaLabel: 'addressForm.state' | cxTranslate
              }"
            >
            </ng-select>
            <cx-form-errors
              [control]="addressForm.get('region.isocode')"
            ></cx-form-errors>
          </label>
        </div>
      </ng-container>
    </ng-container>
  </div>

  <div class="row">
    <div class="form-group col-md-6">
      <label>
        <span class="label-content">{{
          'addressForm.phoneNumber.label' | cxTranslate
        }}</span>
        <input
          type="tel"
          class="form-control"
          placeholder="{{
            'addressForm.phoneNumber.placeholder' | cxTranslate
          }}"
          formControlName="phone"
        />
      </label>
    </div>
    <div class="form-group col-md-6">
      <label>
        <span class="label-content">{{
          'addressForm.cellphone.label' | cxTranslate
        }}</span>
        <input
          type="tel"
          class="form-control"
          placeholder="{{ 'addressForm.cellphone.placeholder' | cxTranslate }}"
          formControlName="cellphone"
        />
      </label>
    </div>
  </div>

  <div
    class="form-group"
    *ngIf="(addresses$ | async)?.length && setAsDefaultField"
  >
    <div class="form-check">
      <label>
        <input
          type="checkbox"
          class="form-check-input"
          formControlName="defaultAddress"
          (change)="toggleDefaultAddress()"
        />
        <span class="form-check-label">{{
          'addressForm.setAsDefault' | cxTranslate
        }}</span>
      </label>
    </div>
  </div>
  <div class="cx-address-form-btns">
    <div class="row">
      <div class="col-md-13 col-lg-6" *ngIf="showCancelBtn">
        <button class="btn btn-block btn-secondary" (click)="back()">
          {{ cancelBtnLabel || ('addressForm.chooseAddress' | cxTranslate) }}
        </button>
      </div>
      <div class="col-md-13 col-lg-6">
        <button #submit class="btn btn-block btn-primary" type="submit">
          {{ actionBtnLabel || ('common.continue' | cxTranslate) }}
        </button>
      </div>
    </div>
  </div>
</form>
`
    }]
  }], () => [{
    type: UntypedFormBuilder
  }, {
    type: UserAddressService
  }, {
    type: GlobalMessageService
  }, {
    type: TranslationService
  }, {
    type: LaunchDialogService
  }, {
    type: UserProfileFacade
  }], {
    addressData: [{
      type: Input
    }],
    actionBtnLabel: [{
      type: Input
    }],
    cancelBtnLabel: [{
      type: Input
    }],
    setAsDefaultField: [{
      type: Input
    }],
    showTitleCode: [{
      type: Input
    }],
    showCancelBtn: [{
      type: Input
    }],
    submitAddress: [{
      type: Output
    }],
    backToAddress: [{
      type: Output
    }],
    element: [{
      type: ViewChild,
      args: ["submit"]
    }]
  });
})();
var _AddressBookComponent = class _AddressBookComponent {
  constructor(service, translation, globalMessageService) {
    this.service = service;
    this.translation = translation;
    this.globalMessageService = globalMessageService;
    this.showAddAddressForm = false;
    this.showEditAddressForm = false;
  }
  ngOnInit() {
    this.addresses$ = this.service.getAddresses();
    this.addressesStateLoading$ = this.service.getAddressesStateLoading();
    this.service.loadAddresses();
  }
  addAddressButtonHandle() {
    this.showEditAddressForm = false;
    this.showAddAddressForm = true;
  }
  editAddressButtonHandle(address) {
    this.showAddAddressForm = false;
    this.showEditAddressForm = true;
    this.currentAddress = address;
  }
  addAddressSubmit(address) {
    this.showAddAddressForm = false;
    this.service.addUserAddress(address);
  }
  addAddressCancel() {
    this.showAddAddressForm = false;
  }
  editAddressSubmit(address) {
    this.showEditAddressForm = false;
    if (address && this.currentAddress["id"]) {
      this.service.updateUserAddress(this.currentAddress["id"], address);
    }
  }
  editAddressCancel() {
    this.showEditAddressForm = false;
  }
  getCardContent(address) {
    return combineLatest([this.translation.translate("addressCard.default"), this.translation.translate("addressCard.setAsDefault"), this.translation.translate("common.delete"), this.translation.translate("common.edit"), this.translation.translate("addressBook.areYouSureToDeleteAddress"), this.translation.translate("addressCard.phoneNumber"), this.translation.translate("addressCard.mobileNumber")]).pipe(map(([defaultText, setAsDefaultText, textDelete, textEdit, textVerifyDeleteMsg, textPhone, textMobile]) => {
      let region = "";
      if (address.region && address.region.isocode) {
        region = address.region.isocode + ", ";
      }
      const actions = [];
      if (!address.defaultAddress) {
        actions.push({
          name: setAsDefaultText,
          event: "default"
        });
      }
      actions.push({
        name: textEdit,
        event: "edit"
      });
      actions.push({
        name: textDelete,
        event: "delete"
      });
      const numbers = getAddressNumbers(address, textPhone, textMobile);
      return {
        role: "region",
        textBold: address.firstName + " " + address.lastName,
        text: [address.line1, address.line2, address.town + ", " + region + address.country?.isocode, address.postalCode, numbers],
        actions,
        header: address.defaultAddress ? `\u2713 ${defaultText}` : "",
        deleteMsg: textVerifyDeleteMsg,
        label: address.defaultAddress ? "addressBook.defaultDeliveryAddress" : "addressBook.additionalDeliveryAddress"
      };
    }));
  }
  setAddressAsDefault(address) {
    this.service.setAddressAsDefault(address.id ?? "");
    this.globalMessageService.add({
      key: "addressMessages.setAsDefaultSuccessfully",
      params: {
        streetAddress: address.line1
      }
    }, GlobalMessageType.MSG_TYPE_CONFIRMATION);
  }
  deleteAddress(addressId) {
    this.service.deleteUserAddress(addressId);
  }
  setEdit(addressId) {
    if (this.editCard !== addressId) {
      this.editCard = addressId;
    } else {
      this.deleteAddress(addressId);
    }
  }
  cancelCard() {
    this.editCard = null;
  }
};
_AddressBookComponent.\u0275fac = function AddressBookComponent_Factory(t) {
  return new (t || _AddressBookComponent)(\u0275\u0275directiveInject(AddressBookComponentService), \u0275\u0275directiveInject(TranslationService), \u0275\u0275directiveInject(GlobalMessageService));
};
_AddressBookComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
  type: _AddressBookComponent,
  selectors: [["cx-address-book"]],
  decls: 8,
  vars: 7,
  consts: [["loading", ""], [1, "cx-section"], [4, "ngIf"], [1, "row"], [1, "col-md-6"], [1, "btn", "btn-block", "btn-secondary", 3, "click"], ["class", "row cx-address-deck", 4, "ngIf", "ngIfElse"], [1, "row", "cx-address-deck"], ["role", "status"], ["class", "col-md-6 cx-address-card", 4, "ngFor", "ngForOf"], [1, "col-md-6", "cx-address-card"], [3, "editCard", "setDefaultCard", "deleteCard", "cancelCard", "index", "border", "fitToContainer", "content", "editMode"], [1, "cx-section-msg"], [1, "cx-form", 3, "submitAddress", "backToAddress", "cancelCard", "showTitleCode", "showCancelBtn", "actionBtnLabel", "cancelBtnLabel", "setAsDefaultField"], [3, "submitAddress", "backToAddress", "showTitleCode", "actionBtnLabel", "cancelBtnLabel", "addressData"], [1, "col-md-12", "cx-address-spinner"]],
  template: function AddressBookComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 1);
      \u0275\u0275template(1, AddressBookComponent_ng_container_1_Template, 8, 7, "ng-container", 2);
      \u0275\u0275pipe(2, "async");
      \u0275\u0275template(3, AddressBookComponent_ng_container_3_Template, 10, 16, "ng-container", 2);
      \u0275\u0275pipe(4, "async");
      \u0275\u0275template(5, AddressBookComponent_ng_container_5_Template, 8, 11, "ng-container", 2);
      \u0275\u0275elementEnd();
      \u0275\u0275template(6, AddressBookComponent_ng_template_6_Template, 2, 0, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
    }
    if (rf & 2) {
      let tmp_1_0;
      let tmp_2_0;
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ((tmp_1_0 = \u0275\u0275pipeBind1(2, 3, ctx.addresses$)) == null ? null : tmp_1_0.length) && !(ctx.showAddAddressForm || ctx.showEditAddressForm));
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", (!((tmp_2_0 = \u0275\u0275pipeBind1(4, 5, ctx.addresses$)) == null ? null : tmp_2_0.length) || ctx.showAddAddressForm) && !ctx.showEditAddressForm);
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.showEditAddressForm);
    }
  },
  dependencies: [NgForOf, NgIf, CardComponent, AddressFormComponent, SpinnerComponent, AsyncPipe, TranslatePipe],
  encapsulation: 2
});
var AddressBookComponent = _AddressBookComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AddressBookComponent, [{
    type: Component,
    args: [{
      selector: "cx-address-book",
      template: `<div class="cx-section">
  <ng-container
    *ngIf="
      (addresses$ | async)?.length &&
      !(showAddAddressForm || showEditAddressForm)
    "
  >
    <div class="row">
      <div class="col-md-6">
        <button
          class="btn btn-block btn-secondary"
          (click)="addAddressButtonHandle()"
        >
          {{ 'addressBook.addNewAddress' | cxTranslate }}
        </button>
      </div>
    </div>

    <div
      class="row cx-address-deck"
      *ngIf="!(addressesStateLoading$ | async); else loading"
    >
      <div
        role="status"
        [attr.aria-label]="'common.loaded' | cxTranslate"
      ></div>
      <div
        *ngFor="let address of addresses$ | async; let i = index"
        class="col-md-6 cx-address-card"
      >
        <cx-card
          [index]="i"
          [border]="true"
          [fitToContainer]="true"
          [content]="getCardContent(address) | async"
          (editCard)="editAddressButtonHandle(address)"
          (setDefaultCard)="setAddressAsDefault(address)"
          (deleteCard)="setEdit(address.id ?? '')"
          [editMode]="address.id === editCard"
          (cancelCard)="cancelCard()"
        ></cx-card>
      </div>
    </div>
  </ng-container>

  <ng-container
    *ngIf="
      (!(addresses$ | async)?.length || showAddAddressForm) &&
      !showEditAddressForm
    "
  >
    <section>
      <h2 class="cx-section-msg">
        {{ 'addressBook.addNewDeliveryAddress' | cxTranslate }}
      </h2>
      <cx-address-form
        class="cx-form"
        [showTitleCode]="true"
        [showCancelBtn]="!((addresses$ | async)?.length === 0)"
        actionBtnLabel="{{ 'addressBook.addAddress' | cxTranslate }}"
        cancelBtnLabel="{{ 'addressBook.backToAddressList' | cxTranslate }}"
        [setAsDefaultField]="!((addresses$ | async)?.length === 0)"
        (submitAddress)="addAddressSubmit($event)"
        (backToAddress)="addAddressCancel()"
        (cancelCard)="cancelCard()"
      ></cx-address-form>
    </section>
  </ng-container>

  <ng-container *ngIf="showEditAddressForm">
    <section>
      <h2 class="cx-section-msg">
        {{ 'addressBook.editDeliveryAddress' | cxTranslate }}
      </h2>
      <cx-address-form
        [showTitleCode]="true"
        actionBtnLabel="{{ 'addressBook.updateAddress' | cxTranslate }}"
        cancelBtnLabel="{{ 'addressBook.backToAddressList' | cxTranslate }}"
        [addressData]="currentAddress"
        (submitAddress)="editAddressSubmit($event)"
        (backToAddress)="editAddressCancel()"
      ></cx-address-form>
    </section>
  </ng-container>
</div>

<ng-template #loading>
  <div class="col-md-12 cx-address-spinner">
    <cx-spinner></cx-spinner>
  </div>
</ng-template>
`
    }]
  }], () => [{
    type: AddressBookComponentService
  }, {
    type: TranslationService
  }, {
    type: GlobalMessageService
  }], null);
})();
var _SuggestedAddressDialogComponent = class _SuggestedAddressDialogComponent {
  handleClick(event) {
    if (event.target.tagName === this.el.nativeElement.tagName) {
      this.closeModal("Cross click");
    }
  }
  constructor(launchDialogService, el) {
    this.launchDialogService = launchDialogService;
    this.el = el;
    this.iconTypes = ICON_TYPE;
    this.focusConfig = {
      trap: true,
      block: true,
      autofocus: "button",
      focusOnEscape: true
    };
    this.data$ = this.launchDialogService.data$;
  }
  ngOnInit() {
    this.data$.pipe(take(1)).subscribe((data) => this.setSelectedAddress(data));
  }
  closeModal(reason) {
    this.launchDialogService.closeDialog(reason);
  }
  setSelectedAddress(data) {
    this.selectedAddress = data.suggestedAddresses?.length ? data.suggestedAddresses[0] : data.enteredAddress;
  }
};
_SuggestedAddressDialogComponent.\u0275fac = function SuggestedAddressDialogComponent_Factory(t) {
  return new (t || _SuggestedAddressDialogComponent)(\u0275\u0275directiveInject(LaunchDialogService), \u0275\u0275directiveInject(ElementRef));
};
_SuggestedAddressDialogComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
  type: _SuggestedAddressDialogComponent,
  selectors: [["cx-suggested-addresses-dialog"]],
  hostBindings: function SuggestedAddressDialogComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275listener("click", function SuggestedAddressDialogComponent_click_HostBindingHandler($event) {
        return ctx.handleClick($event);
      });
    }
  },
  decls: 3,
  vars: 4,
  consts: [[1, "cx-suggested-addresses-dialog", 3, "esc", "cxFocus"], ["class", "cx-suggested-addresses-container", 4, "ngIf"], [1, "cx-suggested-addresses-container"], [1, "cx-suggested-addresses-header", "cx-modal-header"], [1, "cx-suggested-addresses-title"], ["type", "button", 1, "close", 3, "click"], ["aria-hidden", "true"], [3, "type"], ["ngForm", "", 1, "cx-suggested-addresses-body"], [1, "cx-dialog-info"], [1, "cx-dialog-options"], ["class", "form-check", 4, "ngFor", "ngForOf"], [1, "form-check"], ["type", "radio", "name", "selectedAddress", "id", "suggested-addresses--entered", 1, "form-check-input", 3, "ngModelChange", "ngModel", "value"], ["for", "suggested-addresses--entered", 1, "form-check-label", "cx-dialog-label"], [1, "cx-dialog-entered"], [1, "cx-card-container"], [1, "cx-card-label"], [1, "cx-suggested-addresses-footer", "cx-modal-footer"], [1, "row"], [1, "cx-dialog-actions", "col-sm-12", "col-md-12", "col-lg-6", "offset-lg-6"], [1, "btn", "btn-secondary", "cx-dialog-buttons", 3, "click"], ["cxAutoFocus", "", 1, "btn", "btn-primary", "cx-dialog-buttons", 3, "click"], ["type", "radio", "name", "selectedAddress", 1, "form-check-input", 3, "ngModelChange", "ngModel", "value", "id"], [1, "form-check-label", "cx-dialog-label", 3, "for"], [1, "cx-dialog-suggested"]],
  template: function SuggestedAddressDialogComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275listener("esc", function SuggestedAddressDialogComponent_Template_div_esc_0_listener() {
        return ctx.closeModal("Escape clicked");
      });
      \u0275\u0275template(1, SuggestedAddressDialogComponent_div_1_Template, 44, 32, "div", 1);
      \u0275\u0275pipe(2, "async");
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275property("cxFocus", ctx.focusConfig);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", \u0275\u0275pipeBind1(2, 2, ctx.data$));
    }
  },
  dependencies: [NgForOf, NgIf, DefaultValueAccessor, RadioControlValueAccessor, NgControlStatus, NgControlStatusGroup, NgModel, NgForm, IconComponent, FocusDirective, AsyncPipe, TranslatePipe],
  encapsulation: 2,
  changeDetection: 0
});
var SuggestedAddressDialogComponent = _SuggestedAddressDialogComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SuggestedAddressDialogComponent, [{
    type: Component,
    args: [{
      selector: "cx-suggested-addresses-dialog",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: `<div
  class="cx-suggested-addresses-dialog"
  [cxFocus]="focusConfig"
  (esc)="closeModal('Escape clicked')"
>
  <div *ngIf="data$ | async as data" class="cx-suggested-addresses-container">
    <div class="cx-suggested-addresses-header cx-modal-header">
      <div class="cx-suggested-addresses-title">
        {{ 'addressSuggestion.verifyYourAddress' | cxTranslate }}
      </div>
      <button
        type="button"
        class="close"
        [attr.aria-label]="'common.close' | cxTranslate"
        (click)="closeModal('Cross click')"
      >
        <span aria-hidden="true">
          <cx-icon [type]="iconTypes.CLOSE"></cx-icon>
        </span>
      </button>
    </div>
    <div class="cx-suggested-addresses-body" ngForm>
      <div class="cx-dialog-info">
        <p>
          {{ 'addressSuggestion.ensureAccuracySuggestChange' | cxTranslate }}
          {{ 'addressSuggestion.chooseAddressToUse' | cxTranslate }}
        </p>
      </div>

      <div class="cx-dialog-options">
        <div
          class="form-check"
          *ngFor="
            let suggestedAddress of data.suggestedAddresses;
            let i = index
          "
        >
          <input
            class="form-check-input"
            type="radio"
            name="selectedAddress"
            [(ngModel)]="selectedAddress"
            [value]="suggestedAddress"
            [id]="'suggested-addresses--suggested-' + i"
          />
          <label
            class="form-check-label cx-dialog-label"
            [for]="'suggested-addresses--suggested-' + i"
          >
            {{ 'addressSuggestion.suggestedAddress' | cxTranslate }}
            {{ data.suggestedAddresses.length > 1 ? i + 1 : null }}
          </label>
          <div class="cx-dialog-suggested">
            <div class="cx-card-container">
              <div class="cx-card-label">{{ suggestedAddress?.firstName }}</div>
              <div class="cx-card-label">{{ suggestedAddress?.lastName }}</div>
              <div class="cx-card-label">{{ suggestedAddress?.line1 }}</div>
              <div class="cx-card-label">
                <span>{{ suggestedAddress?.line2 }}</span>
              </div>
              <div class="cx-card-label">{{ suggestedAddress?.town }}</div>
              <div class="cx-card-label">
                {{ suggestedAddress?.region?.isocode }}
              </div>
              <div class="cx-card-label">
                {{ suggestedAddress?.postalCode }}
              </div>
            </div>
          </div>
        </div>
        <div class="form-check">
          <input
            class="form-check-input"
            type="radio"
            name="selectedAddress"
            [(ngModel)]="selectedAddress"
            [value]="data.enteredAddress"
            id="suggested-addresses--entered"
          />
          <label
            class="form-check-label cx-dialog-label"
            for="suggested-addresses--entered"
          >
            {{ 'addressSuggestion.enteredAddress' | cxTranslate }}
          </label>
          <div class="cx-dialog-entered">
            <div class="cx-card-container">
              <div class="cx-card-label">
                {{ data.enteredAddress?.firstName }}
                {{ data.enteredAddress?.lastName }}
              </div>
              <div class="cx-card-label">{{ data.enteredAddress?.line1 }}</div>
              <div class="cx-card-label">
                <span>{{ data.enteredAddress?.line2 }}</span>
              </div>
              <div class="cx-card-label">
                {{ data.enteredAddress?.town }}
                {{ data.enteredAddress?.region?.isocode }}
              </div>
              <div class="cx-card-label">
                {{ data.enteredAddress?.postalCode }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="cx-suggested-addresses-footer cx-modal-footer">
      <div class="row">
        <div class="cx-dialog-actions col-sm-12 col-md-12 col-lg-6 offset-lg-6">
          <button
            class="btn btn-secondary cx-dialog-buttons"
            (click)="closeModal('Edit address')"
          >
            {{ 'addressSuggestion.editAddress' | cxTranslate }}
          </button>
          <button
            cxAutoFocus
            class="btn btn-primary cx-dialog-buttons"
            (click)="closeModal(selectedAddress)"
          >
            {{ 'addressSuggestion.saveAddress' | cxTranslate }}
          </button>
        </div>
      </div>
    </div>
  </div>
</div>
`
    }]
  }], () => [{
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
var _AddressFormModule = class _AddressFormModule {
};
_AddressFormModule.\u0275fac = function AddressFormModule_Factory(t) {
  return new (t || _AddressFormModule)();
};
_AddressFormModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
  type: _AddressFormModule
});
_AddressFormModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
  imports: [NgSelectA11yModule, CommonModule, ReactiveFormsModule, FormsModule, RouterModule, NgSelectModule, IconModule, I18nModule, FormErrorsModule, KeyboardFocusModule]
});
var AddressFormModule = _AddressFormModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AddressFormModule, [{
    type: NgModule,
    args: [{
      imports: [NgSelectA11yModule, CommonModule, ReactiveFormsModule, FormsModule, RouterModule, NgSelectModule, IconModule, I18nModule, FormErrorsModule, KeyboardFocusModule],
      declarations: [AddressFormComponent, SuggestedAddressDialogComponent],
      exports: [AddressFormComponent, SuggestedAddressDialogComponent]
    }]
  }], null, null);
})();
var defaultSuggestedAddressesDialogLayoutConfig = {
  launch: {
    SUGGESTED_ADDRESSES: {
      inlineRoot: true,
      component: SuggestedAddressDialogComponent,
      dialogType: DIALOG_TYPE.DIALOG
    }
  }
};
var _AddressBookModule = class _AddressBookModule {
};
_AddressBookModule.\u0275fac = function AddressBookModule_Factory(t) {
  return new (t || _AddressBookModule)();
};
_AddressBookModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
  type: _AddressBookModule
});
_AddressBookModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
  providers: [provideDefaultConfig({
    cmsComponents: {
      AccountAddressBookComponent: {
        component: AddressBookComponent,
        guards: [AuthGuard]
      }
    }
  }), provideDefaultConfig(defaultSuggestedAddressesDialogLayoutConfig), UserAddressService],
  imports: [CommonModule, CardModule, AddressFormModule, SpinnerModule, I18nModule]
});
var AddressBookModule = _AddressBookModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AddressBookModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, CardModule, AddressFormModule, SpinnerModule, I18nModule],
      declarations: [AddressBookComponent],
      exports: [AddressBookComponent],
      providers: [provideDefaultConfig({
        cmsComponents: {
          AccountAddressBookComponent: {
            component: AddressBookComponent,
            guards: [AuthGuard]
          }
        }
      }), provideDefaultConfig(defaultSuggestedAddressesDialogLayoutConfig), UserAddressService]
    }]
  }], null, null);
})();
var _UserProfileComponentsModule = class _UserProfileComponentsModule {
};
_UserProfileComponentsModule.\u0275fac = function UserProfileComponentsModule_Factory(t) {
  return new (t || _UserProfileComponentsModule)();
};
_UserProfileComponentsModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
  type: _UserProfileComponentsModule
});
_UserProfileComponentsModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
  imports: [RegisterComponentModule, UpdateProfileModule, UpdateEmailModule, UpdatePasswordModule, ForgotPasswordModule, ResetPasswordModule, CloseAccountModule, AddressBookModule]
});
var UserProfileComponentsModule = _UserProfileComponentsModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UserProfileComponentsModule, [{
    type: NgModule,
    args: [{
      imports: [RegisterComponentModule, UpdateProfileModule, UpdateEmailModule, UpdatePasswordModule, ForgotPasswordModule, ResetPasswordModule, CloseAccountModule, AddressBookModule]
    }]
  }], null, null);
})();

export {
  AddressFormComponent,
  AddressFormModule,
  UserProfileComponentsModule
};
//# sourceMappingURL=chunk-RUZE6DY6.js.map
