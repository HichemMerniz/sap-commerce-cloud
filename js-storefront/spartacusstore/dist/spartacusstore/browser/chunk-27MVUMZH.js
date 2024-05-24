import {
  UserAccountChangedEvent,
  UserAccountFacade
} from "./chunk-NWLDJIE7.js";
import {
  CustomFormValidators,
  DefaultValueAccessor,
  FormControlName,
  FormErrorsComponent,
  FormErrorsModule,
  FormGroupDirective,
  FormsModule,
  NgControlStatus,
  NgControlStatusGroup,
  PageSlotComponent,
  PageSlotModule,
  PasswordVisibilityToggleDirective,
  PasswordVisibilityToggleModule,
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
  ActivatedRoute,
  AsyncPipe,
  AuthGuard,
  AuthService,
  BehaviorSubject,
  ChangeDetectionStrategy,
  CommonModule,
  Component,
  ConverterService,
  GlobalMessageService,
  GlobalMessageType,
  HostBinding,
  HttpClient,
  I18nModule,
  Injectable,
  InjectionToken,
  LoggerService,
  LoginEvent,
  LogoutEvent,
  NgIf,
  NgModule,
  NotAuthGuard,
  OccEndpointsService,
  QueryService,
  RouterLink,
  RouterModule,
  TranslatePipe,
  UrlModule,
  UrlPipe,
  UserIdService,
  WindowRef,
  catchError,
  from,
  inject,
  normalizeHttpError,
  of,
  provideDefaultConfig,
  setClassMetadata,
  switchMap,
  tap,
  withLatestFrom,
  ɵɵInheritDefinitionFeature,
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
  ɵɵgetInheritedFactory,
  ɵɵinject,
  ɵɵlistener,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpropertyInterpolate,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵreference,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-RJVZANIA.js";

// node_modules/@spartacus/user/fesm2022/spartacus-user-account-components.mjs
var _c0 = () => ({
  cxRoute: "forgotPassword"
});
function LoginFormComponent_cx_spinner_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "cx-spinner", 8);
  }
}
var _c1 = () => ({
  cxRoute: "register"
});
var _c2 = () => ({
  cxRoute: "checkoutLogin"
});
function LoginRegisterComponent_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "a", 3);
    \u0275\u0275pipe(2, "cxUrl");
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "cxTranslate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", \u0275\u0275pipeBind1(2, 2, \u0275\u0275pureFunction0(6, _c1)));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 4, "loginForm.register"));
  }
}
function LoginRegisterComponent_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "a", 4);
    \u0275\u0275pipe(2, "cxUrl");
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "cxTranslate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", \u0275\u0275pipeBind1(2, 2, \u0275\u0275pureFunction0(6, _c2)));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 4, "loginForm.guestCheckout"));
  }
}
var _c3 = (a0) => ({
  name: a0
});
var _c4 = () => ({
  cxRoute: "login"
});
function LoginComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 2);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "cxTranslate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(4, "cx-page-slot", 3);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const user_r1 = ctx.ngIf;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(3, 1, "miniLogin.userGreeting", \u0275\u0275pureFunction1(4, _c3, user_r1.name)), " ");
  }
}
function LoginComponent_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 4);
    \u0275\u0275pipe(1, "cxUrl");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "cxTranslate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275property("routerLink", \u0275\u0275pipeBind1(1, 2, \u0275\u0275pureFunction0(6, _c4)));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 4, "miniLogin.signInRegister"));
  }
}
var _c5 = () => ({
  cxRoute: "logout"
});
function MyAccountV2UserComponent_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 2);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "a", 3);
    \u0275\u0275pipe(4, "cxUrl");
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "cxTranslate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const user_r1 = ctx.ngIf;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", user_r1.title, "", user_r1.name, "");
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", \u0275\u0275pipeBind1(4, 4, \u0275\u0275pureFunction0(8, _c5)));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(6, 6, "myAccountV2User.signOut"), " ");
  }
}
var _LoginFormComponentService = class _LoginFormComponentService {
  constructor(auth, globalMessage, winRef) {
    this.auth = auth;
    this.globalMessage = globalMessage;
    this.winRef = winRef;
    this.busy$ = new BehaviorSubject(false);
    this.isUpdating$ = this.busy$.pipe(tap((state) => {
      const userId = this.winRef.nativeWindow?.history?.state?.["newUid"];
      if (userId) {
        this.form.patchValue({
          userId
        });
      }
      state === true ? this.form.disable() : this.form.enable();
    }));
    this.form = new UntypedFormGroup({
      userId: new UntypedFormControl("", [Validators.required, CustomFormValidators.emailValidator]),
      password: new UntypedFormControl("", Validators.required)
    });
  }
  login() {
    if (!this.form.valid) {
      this.form.markAllAsTouched();
      return;
    }
    this.busy$.next(true);
    from(this.auth.loginWithCredentials(
      // TODO: consider dropping toLowerCase as this should not be part of the UI,
      // as it's too opinionated and doesn't work with other AUTH services
      this.form.value.userId.toLowerCase(),
      this.form.value.password
    )).pipe(withLatestFrom(this.auth.isUserLoggedIn()), tap(([_, isLoggedIn]) => this.onSuccess(isLoggedIn))).subscribe();
  }
  onSuccess(isLoggedIn) {
    if (isLoggedIn) {
      this.globalMessage.remove(GlobalMessageType.MSG_TYPE_ERROR);
      this.form.reset();
    }
    this.busy$.next(false);
  }
};
_LoginFormComponentService.\u0275fac = function LoginFormComponentService_Factory(t) {
  return new (t || _LoginFormComponentService)(\u0275\u0275inject(AuthService), \u0275\u0275inject(GlobalMessageService), \u0275\u0275inject(WindowRef));
};
_LoginFormComponentService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
  token: _LoginFormComponentService,
  factory: _LoginFormComponentService.\u0275fac
});
var LoginFormComponentService = _LoginFormComponentService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LoginFormComponentService, [{
    type: Injectable
  }], () => [{
    type: AuthService
  }, {
    type: GlobalMessageService
  }, {
    type: WindowRef
  }], null);
})();
var _LoginFormComponent = class _LoginFormComponent {
  constructor(service) {
    this.service = service;
    this.form = this.service.form;
    this.isUpdating$ = this.service.isUpdating$;
    this.style = true;
  }
  onSubmit() {
    this.service.login();
  }
};
_LoginFormComponent.\u0275fac = function LoginFormComponent_Factory(t) {
  return new (t || _LoginFormComponent)(\u0275\u0275directiveInject(LoginFormComponentService));
};
_LoginFormComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
  type: _LoginFormComponent,
  selectors: [["cx-login-form"]],
  hostVars: 2,
  hostBindings: function LoginFormComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      \u0275\u0275classProp("user-form", ctx.style);
    }
  },
  decls: 25,
  vars: 32,
  consts: [["class", "overlay", 4, "ngIf"], [3, "ngSubmit", "formGroup"], [1, "label-content"], ["required", "true", "type", "email", "formControlName", "userId", 1, "form-control", 3, "placeholder"], [3, "control"], ["required", "true", "type", "password", "formControlName", "password", "cxPasswordVisibilitySwitch", "", 1, "form-control", 3, "placeholder"], [1, "btn-link", 3, "routerLink"], ["type", "submit", 1, "btn", "btn-block", "btn-primary", 3, "disabled"], [1, "overlay"]],
  template: function LoginFormComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275template(0, LoginFormComponent_cx_spinner_0_Template, 1, 0, "cx-spinner", 0);
      \u0275\u0275pipe(1, "async");
      \u0275\u0275elementStart(2, "form", 1);
      \u0275\u0275listener("ngSubmit", function LoginFormComponent_Template_form_ngSubmit_2_listener() {
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
      \u0275\u0275pipe(16, "cxTranslate");
      \u0275\u0275element(17, "cx-form-errors", 4);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(18, "a", 6);
      \u0275\u0275pipe(19, "cxUrl");
      \u0275\u0275text(20);
      \u0275\u0275pipe(21, "cxTranslate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(22, "button", 7);
      \u0275\u0275text(23);
      \u0275\u0275pipe(24, "cxTranslate");
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275property("ngIf", \u0275\u0275pipeBind1(1, 13, ctx.isUpdating$));
      \u0275\u0275advance(2);
      \u0275\u0275property("formGroup", ctx.form);
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 15, "loginForm.emailAddress.label"));
      \u0275\u0275advance(2);
      \u0275\u0275propertyInterpolate("placeholder", \u0275\u0275pipeBind1(8, 17, "loginForm.emailAddress.placeholder"));
      \u0275\u0275advance(2);
      \u0275\u0275property("control", ctx.form.get("userId"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(13, 19, "loginForm.password.label"));
      \u0275\u0275advance(2);
      \u0275\u0275propertyInterpolate("placeholder", \u0275\u0275pipeBind1(15, 21, "loginForm.password.placeholder"));
      \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(16, 23, "loginForm.password.placeholder"));
      \u0275\u0275advance(3);
      \u0275\u0275property("control", ctx.form.get("password"));
      \u0275\u0275advance();
      \u0275\u0275property("routerLink", \u0275\u0275pipeBind1(19, 25, \u0275\u0275pureFunction0(31, _c0)));
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(21, 27, "loginForm.forgotPassword"), " ");
      \u0275\u0275advance(2);
      \u0275\u0275property("disabled", ctx.form.disabled);
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(24, 29, "loginForm.signIn"), " ");
    }
  },
  dependencies: [NgIf, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, RequiredValidator, FormGroupDirective, FormControlName, RouterLink, FormErrorsComponent, SpinnerComponent, PasswordVisibilityToggleDirective, AsyncPipe, UrlPipe, TranslatePipe],
  encapsulation: 2,
  changeDetection: 0
});
var LoginFormComponent = _LoginFormComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LoginFormComponent, [{
    type: Component,
    args: [{
      selector: "cx-login-form",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: `<cx-spinner class="overlay" *ngIf="isUpdating$ | async"></cx-spinner>

<form (ngSubmit)="onSubmit()" [formGroup]="form">
  <label>
    <span class="label-content">{{
      'loginForm.emailAddress.label' | cxTranslate
    }}</span>
    <input
      required="true"
      type="email"
      class="form-control"
      formControlName="userId"
      placeholder="{{ 'loginForm.emailAddress.placeholder' | cxTranslate }}"
    />
    <cx-form-errors [control]="form.get('userId')"></cx-form-errors>
  </label>

  <label>
    <span class="label-content">{{
      'loginForm.password.label' | cxTranslate
    }}</span>
    <input
      required="true"
      type="password"
      class="form-control"
      placeholder="{{ 'loginForm.password.placeholder' | cxTranslate }}"
      formControlName="password"
      [attr.aria-label]="'loginForm.password.placeholder' | cxTranslate"
      cxPasswordVisibilitySwitch
    />
    <cx-form-errors [control]="form.get('password')"></cx-form-errors>
  </label>

  <a [routerLink]="{ cxRoute: 'forgotPassword' } | cxUrl" class="btn-link">
    {{ 'loginForm.forgotPassword' | cxTranslate }}
  </a>

  <button
    type="submit"
    class="btn btn-block btn-primary"
    [disabled]="form.disabled"
  >
    {{ 'loginForm.signIn' | cxTranslate }}
  </button>
</form>
`
    }]
  }], () => [{
    type: LoginFormComponentService
  }], {
    style: [{
      type: HostBinding,
      args: ["class.user-form"]
    }]
  });
})();
var _LoginFormModule = class _LoginFormModule {
};
_LoginFormModule.\u0275fac = function LoginFormModule_Factory(t) {
  return new (t || _LoginFormModule)();
};
_LoginFormModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
  type: _LoginFormModule
});
_LoginFormModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
  providers: [provideDefaultConfig({
    cmsComponents: {
      ReturningCustomerLoginComponent: {
        component: LoginFormComponent,
        guards: [NotAuthGuard],
        providers: [{
          provide: LoginFormComponentService,
          useClass: LoginFormComponentService,
          deps: [AuthService, GlobalMessageService, WindowRef]
        }]
      }
    }
  })],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, RouterModule, UrlModule, I18nModule, FormErrorsModule, SpinnerModule, PasswordVisibilityToggleModule]
});
var LoginFormModule = _LoginFormModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LoginFormModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, FormsModule, ReactiveFormsModule, RouterModule, UrlModule, I18nModule, FormErrorsModule, SpinnerModule, PasswordVisibilityToggleModule],
      providers: [provideDefaultConfig({
        cmsComponents: {
          ReturningCustomerLoginComponent: {
            component: LoginFormComponent,
            guards: [NotAuthGuard],
            providers: [{
              provide: LoginFormComponentService,
              useClass: LoginFormComponentService,
              deps: [AuthService, GlobalMessageService, WindowRef]
            }]
          }
        }
      })],
      declarations: [LoginFormComponent]
    }]
  }], null, null);
})();
var _LoginRegisterComponent = class _LoginRegisterComponent {
  constructor(activatedRoute) {
    this.activatedRoute = activatedRoute;
    this.loginAsGuest = false;
  }
  ngOnInit() {
    this.loginAsGuest = this.activatedRoute.snapshot.queryParams["forced"];
  }
};
_LoginRegisterComponent.\u0275fac = function LoginRegisterComponent_Factory(t) {
  return new (t || _LoginRegisterComponent)(\u0275\u0275directiveInject(ActivatedRoute));
};
_LoginRegisterComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
  type: _LoginRegisterComponent,
  selectors: [["cx-login-register"]],
  decls: 6,
  vars: 5,
  consts: [[1, "register"], [1, "cx-section-title"], [4, "ngIf"], [1, "btn", "btn-block", "btn-secondary", "btn-register", 3, "routerLink"], [1, "btn", "btn-block", "btn-secondary", "btn-guest", 3, "routerLink"]],
  template: function LoginRegisterComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "p", 1);
      \u0275\u0275text(2);
      \u0275\u0275pipe(3, "cxTranslate");
      \u0275\u0275elementEnd();
      \u0275\u0275template(4, LoginRegisterComponent_ng_container_4_Template, 5, 7, "ng-container", 2)(5, LoginRegisterComponent_ng_container_5_Template, 5, 7, "ng-container", 2);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 3, "loginForm.dontHaveAccount"), " ");
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", !ctx.loginAsGuest);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.loginAsGuest);
    }
  },
  dependencies: [NgIf, RouterLink, UrlPipe, TranslatePipe],
  encapsulation: 2
});
var LoginRegisterComponent = _LoginRegisterComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LoginRegisterComponent, [{
    type: Component,
    args: [{
      selector: "cx-login-register",
      template: `<div class="register">
  <p class="cx-section-title">
    {{ 'loginForm.dontHaveAccount' | cxTranslate }}
  </p>

  <ng-container *ngIf="!loginAsGuest">
    <a
      [routerLink]="{ cxRoute: 'register' } | cxUrl"
      class="btn btn-block btn-secondary btn-register"
      >{{ 'loginForm.register' | cxTranslate }}</a
    >
  </ng-container>

  <ng-container *ngIf="loginAsGuest">
    <a
      [routerLink]="{ cxRoute: 'checkoutLogin' } | cxUrl"
      class="btn btn-block btn-secondary btn-guest"
      >{{ 'loginForm.guestCheckout' | cxTranslate }}</a
    >
  </ng-container>
</div>
`
    }]
  }], () => [{
    type: ActivatedRoute
  }], null);
})();
var _LoginRegisterModule = class _LoginRegisterModule {
};
_LoginRegisterModule.\u0275fac = function LoginRegisterModule_Factory(t) {
  return new (t || _LoginRegisterModule)();
};
_LoginRegisterModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
  type: _LoginRegisterModule
});
_LoginRegisterModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
  providers: [provideDefaultConfig({
    cmsComponents: {
      ReturningCustomerRegisterComponent: {
        component: LoginRegisterComponent,
        guards: [NotAuthGuard]
      }
    }
  })],
  imports: [CommonModule, RouterModule, UrlModule, PageSlotModule, I18nModule]
});
var LoginRegisterModule = _LoginRegisterModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LoginRegisterModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, RouterModule, UrlModule, PageSlotModule, I18nModule],
      providers: [provideDefaultConfig({
        cmsComponents: {
          ReturningCustomerRegisterComponent: {
            component: LoginRegisterComponent,
            guards: [NotAuthGuard]
          }
        }
      })],
      declarations: [LoginRegisterComponent]
    }]
  }], null, null);
})();
var _LoginComponent = class _LoginComponent {
  constructor(auth, userAccount) {
    this.auth = auth;
    this.userAccount = userAccount;
  }
  ngOnInit() {
    this.user$ = this.auth.isUserLoggedIn().pipe(switchMap((isUserLoggedIn) => {
      if (isUserLoggedIn) {
        return this.userAccount.get();
      } else {
        return of(void 0);
      }
    }));
  }
};
_LoginComponent.\u0275fac = function LoginComponent_Factory(t) {
  return new (t || _LoginComponent)(\u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(UserAccountFacade));
};
_LoginComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
  type: _LoginComponent,
  selectors: [["cx-login"]],
  decls: 4,
  vars: 4,
  consts: [["login", ""], [4, "ngIf", "ngIfElse"], [1, "cx-login-greet"], ["id", "account-nav", "position", "HeaderLinks"], ["role", "link", 3, "routerLink"]],
  template: function LoginComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275template(0, LoginComponent_ng_container_0_Template, 5, 6, "ng-container", 1);
      \u0275\u0275pipe(1, "async");
      \u0275\u0275template(2, LoginComponent_ng_template_2_Template, 4, 7, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
    }
    if (rf & 2) {
      const login_r2 = \u0275\u0275reference(3);
      \u0275\u0275property("ngIf", \u0275\u0275pipeBind1(1, 2, ctx.user$))("ngIfElse", login_r2);
    }
  },
  dependencies: [NgIf, RouterLink, PageSlotComponent, AsyncPipe, UrlPipe, TranslatePipe],
  encapsulation: 2
});
var LoginComponent = _LoginComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LoginComponent, [{
    type: Component,
    args: [{
      selector: "cx-login",
      template: `<ng-container *ngIf="user$ | async as user; else login">
  <div class="cx-login-greet">
    {{ 'miniLogin.userGreeting' | cxTranslate: { name: user.name } }}
  </div>
  <cx-page-slot id="account-nav" position="HeaderLinks"></cx-page-slot>
</ng-container>

<ng-template #login>
  <a role="link" [routerLink]="{ cxRoute: 'login' } | cxUrl">{{
    'miniLogin.signInRegister' | cxTranslate
  }}</a>
</ng-template>
`
    }]
  }], () => [{
    type: AuthService
  }, {
    type: UserAccountFacade
  }], null);
})();
var _LoginModule = class _LoginModule {
};
_LoginModule.\u0275fac = function LoginModule_Factory(t) {
  return new (t || _LoginModule)();
};
_LoginModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
  type: _LoginModule
});
_LoginModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
  providers: [provideDefaultConfig({
    cmsComponents: {
      LoginComponent: {
        component: LoginComponent
      }
    }
  })],
  imports: [CommonModule, RouterModule, UrlModule, PageSlotModule, I18nModule]
});
var LoginModule = _LoginModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LoginModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, RouterModule, UrlModule, PageSlotModule, I18nModule],
      providers: [provideDefaultConfig({
        cmsComponents: {
          LoginComponent: {
            component: LoginComponent
          }
        }
      })],
      declarations: [LoginComponent]
    }]
  }], null, null);
})();
var _MyAccountV2UserComponent = class _MyAccountV2UserComponent extends LoginComponent {
};
_MyAccountV2UserComponent.\u0275fac = /* @__PURE__ */ (() => {
  let \u0275MyAccountV2UserComponent_BaseFactory;
  return function MyAccountV2UserComponent_Factory(t) {
    return (\u0275MyAccountV2UserComponent_BaseFactory || (\u0275MyAccountV2UserComponent_BaseFactory = \u0275\u0275getInheritedFactory(_MyAccountV2UserComponent)))(t || _MyAccountV2UserComponent);
  };
})();
_MyAccountV2UserComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
  type: _MyAccountV2UserComponent,
  selectors: [["cx-my-account-v2-user"]],
  features: [\u0275\u0275InheritDefinitionFeature],
  decls: 3,
  vars: 3,
  consts: [[1, "cx-my-account-v2-user"], [4, "ngIf"], [1, "cx-name"], [1, "cx-sign-out", 3, "routerLink"]],
  template: function MyAccountV2UserComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275template(1, MyAccountV2UserComponent_ng_container_1_Template, 7, 9, "ng-container", 1);
      \u0275\u0275pipe(2, "async");
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", \u0275\u0275pipeBind1(2, 1, ctx.user$));
    }
  },
  dependencies: [NgIf, RouterLink, AsyncPipe, UrlPipe, TranslatePipe],
  encapsulation: 2
});
var MyAccountV2UserComponent = _MyAccountV2UserComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MyAccountV2UserComponent, [{
    type: Component,
    args: [{
      selector: "cx-my-account-v2-user",
      template: `<div class="cx-my-account-v2-user">
  <ng-container *ngIf="user$ | async as user">
    <div class="cx-name">{{ user.title }}{{ user.name }}</div>
    <a
      class="cx-sign-out"
      [routerLink]="
        {
          cxRoute: 'logout'
        } | cxUrl
      "
      >{{ 'myAccountV2User.signOut' | cxTranslate }}
    </a>
  </ng-container>
</div>
`
    }]
  }], null, null);
})();
var _MyAccountV2UserModule = class _MyAccountV2UserModule {
};
_MyAccountV2UserModule.\u0275fac = function MyAccountV2UserModule_Factory(t) {
  return new (t || _MyAccountV2UserModule)();
};
_MyAccountV2UserModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
  type: _MyAccountV2UserModule
});
_MyAccountV2UserModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
  providers: [provideDefaultConfig({
    cmsComponents: {
      MyAccountViewUserComponent: {
        component: MyAccountV2UserComponent,
        guards: [AuthGuard]
      }
    }
  })],
  imports: [CommonModule, RouterModule, UrlModule, I18nModule]
});
var MyAccountV2UserModule = _MyAccountV2UserModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MyAccountV2UserModule, [{
    type: NgModule,
    args: [{
      providers: [provideDefaultConfig({
        cmsComponents: {
          MyAccountViewUserComponent: {
            component: MyAccountV2UserComponent,
            guards: [AuthGuard]
          }
        }
      })],
      declarations: [MyAccountV2UserComponent],
      exports: [MyAccountV2UserComponent],
      imports: [CommonModule, RouterModule, UrlModule, I18nModule]
    }]
  }], null, null);
})();
var _UserAccountComponentsModule = class _UserAccountComponentsModule {
};
_UserAccountComponentsModule.\u0275fac = function UserAccountComponentsModule_Factory(t) {
  return new (t || _UserAccountComponentsModule)();
};
_UserAccountComponentsModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
  type: _UserAccountComponentsModule
});
_UserAccountComponentsModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
  imports: [LoginModule, LoginFormModule, LoginRegisterModule, MyAccountV2UserModule]
});
var UserAccountComponentsModule = _UserAccountComponentsModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UserAccountComponentsModule, [{
    type: NgModule,
    args: [{
      imports: [LoginModule, LoginFormModule, LoginRegisterModule, MyAccountV2UserModule]
    }]
  }], null, null);
})();

// node_modules/@spartacus/user/fesm2022/spartacus-user-account-core.mjs
var USER_ACCOUNT_NORMALIZER = new InjectionToken("UserAccountNormalizer");
var USER_ACCOUNT_SERIALIZER = new InjectionToken("UserAccountSerializer");
var UserAccountAdapter = class {
};
var _UserAccountConnector = class _UserAccountConnector {
  constructor(adapter) {
    this.adapter = adapter;
  }
  get(userId) {
    return this.adapter.load(userId);
  }
};
_UserAccountConnector.\u0275fac = function UserAccountConnector_Factory(t) {
  return new (t || _UserAccountConnector)(\u0275\u0275inject(UserAccountAdapter));
};
_UserAccountConnector.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
  token: _UserAccountConnector,
  factory: _UserAccountConnector.\u0275fac
});
var UserAccountConnector = _UserAccountConnector;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UserAccountConnector, [{
    type: Injectable
  }], () => [{
    type: UserAccountAdapter
  }], null);
})();
var _UserAccountService = class _UserAccountService {
  constructor(userAccountConnector, userIdService, query) {
    this.userAccountConnector = userAccountConnector;
    this.userIdService = userIdService;
    this.query = query;
    this.userQuery = this.query.create(() => this.userIdService.takeUserId(true).pipe(switchMap((userId) => this.userAccountConnector.get(userId))), {
      reloadOn: [UserAccountChangedEvent],
      resetOn: [LoginEvent, LogoutEvent]
    });
  }
  /**
   * Returns the user according the userId
   * no use query for userId can change every time
   */
  getById(userId) {
    return this.userAccountConnector.get(userId);
  }
  /**
   * Returns the current user.
   */
  get() {
    return this.userQuery.get();
  }
};
_UserAccountService.\u0275fac = function UserAccountService_Factory(t) {
  return new (t || _UserAccountService)(\u0275\u0275inject(UserAccountConnector), \u0275\u0275inject(UserIdService), \u0275\u0275inject(QueryService));
};
_UserAccountService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
  token: _UserAccountService,
  factory: _UserAccountService.\u0275fac
});
var UserAccountService = _UserAccountService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UserAccountService, [{
    type: Injectable
  }], () => [{
    type: UserAccountConnector
  }, {
    type: UserIdService
  }, {
    type: QueryService
  }], null);
})();
var facadeProviders = [UserAccountService, {
  provide: UserAccountFacade,
  useExisting: UserAccountService
}];
var _UserAccountCoreModule = class _UserAccountCoreModule {
};
_UserAccountCoreModule.\u0275fac = function UserAccountCoreModule_Factory(t) {
  return new (t || _UserAccountCoreModule)();
};
_UserAccountCoreModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
  type: _UserAccountCoreModule
});
_UserAccountCoreModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
  providers: [UserAccountConnector, ...facadeProviders]
});
var UserAccountCoreModule = _UserAccountCoreModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UserAccountCoreModule, [{
    type: NgModule,
    args: [{
      providers: [UserAccountConnector, ...facadeProviders]
    }]
  }], null, null);
})();

// node_modules/@spartacus/user/fesm2022/spartacus-user-account-occ.mjs
var defaultOccUserAccountConfig = {
  backend: {
    occ: {
      endpoints: {
        user: "users/${userId}"
      }
    }
  }
};
var _OccUserAccountAdapter = class _OccUserAccountAdapter {
  constructor(http, occEndpoints, converter) {
    this.http = http;
    this.occEndpoints = occEndpoints;
    this.converter = converter;
    this.logger = inject(LoggerService);
  }
  load(userId) {
    const url = this.occEndpoints.buildUrl("user", {
      urlParams: {
        userId
      }
    });
    return this.http.get(url).pipe(catchError((error) => {
      throw normalizeHttpError(error, this.logger);
    }), this.converter.pipeable(USER_ACCOUNT_NORMALIZER));
  }
};
_OccUserAccountAdapter.\u0275fac = function OccUserAccountAdapter_Factory(t) {
  return new (t || _OccUserAccountAdapter)(\u0275\u0275inject(HttpClient), \u0275\u0275inject(OccEndpointsService), \u0275\u0275inject(ConverterService));
};
_OccUserAccountAdapter.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
  token: _OccUserAccountAdapter,
  factory: _OccUserAccountAdapter.\u0275fac
});
var OccUserAccountAdapter = _OccUserAccountAdapter;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OccUserAccountAdapter, [{
    type: Injectable
  }], () => [{
    type: HttpClient
  }, {
    type: OccEndpointsService
  }, {
    type: ConverterService
  }], null);
})();
var _UserAccountOccModule = class _UserAccountOccModule {
};
_UserAccountOccModule.\u0275fac = function UserAccountOccModule_Factory(t) {
  return new (t || _UserAccountOccModule)();
};
_UserAccountOccModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
  type: _UserAccountOccModule
});
_UserAccountOccModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
  providers: [provideDefaultConfig(defaultOccUserAccountConfig), {
    provide: UserAccountAdapter,
    useClass: OccUserAccountAdapter
  }]
});
var UserAccountOccModule = _UserAccountOccModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UserAccountOccModule, [{
    type: NgModule,
    args: [{
      providers: [provideDefaultConfig(defaultOccUserAccountConfig), {
        provide: UserAccountAdapter,
        useClass: OccUserAccountAdapter
      }]
    }]
  }], null, null);
})();

// node_modules/@spartacus/user/fesm2022/spartacus-user-account.mjs
var _UserAccountModule = class _UserAccountModule {
};
_UserAccountModule.\u0275fac = function UserAccountModule_Factory(t) {
  return new (t || _UserAccountModule)();
};
_UserAccountModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
  type: _UserAccountModule
});
_UserAccountModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
  imports: [UserAccountCoreModule, UserAccountOccModule, UserAccountComponentsModule]
});
var UserAccountModule = _UserAccountModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UserAccountModule, [{
    type: NgModule,
    args: [{
      imports: [UserAccountCoreModule, UserAccountOccModule, UserAccountComponentsModule]
    }]
  }], null, null);
})();
export {
  UserAccountModule
};
//# sourceMappingURL=chunk-27MVUMZH.js.map
