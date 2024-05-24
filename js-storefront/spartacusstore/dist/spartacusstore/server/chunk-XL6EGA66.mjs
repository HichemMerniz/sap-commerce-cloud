import './polyfills.server.mjs';
import {
  UserProfileComponentsModule
} from "./chunk-UPYNAPQM.mjs";
import {
  UserAccountChangedEvent,
  UserAccountFacade
} from "./chunk-325K745C.mjs";
import {
  UserEmailFacade,
  UserPasswordFacade,
  UserProfileFacade,
  UserRegisterFacade
} from "./chunk-NLXOS75N.mjs";
import "./chunk-JOGQIABG.mjs";
import {
  AuthService,
  CommandService,
  CommandStrategy,
  ConverterService,
  EventService,
  InterceptorUtil,
  LanguageSetEvent,
  LoggerService,
  OccEndpointsService,
  QueryService,
  Store,
  USE_CLIENT_TOKEN,
  UserIdService,
  normalizeHttpError,
  provideDefaultConfig,
  userGroup_actions
} from "./chunk-AFAMYKVR.mjs";
import {
  HttpClient,
  HttpHeaders,
  HttpParams,
  Injectable,
  InjectionToken,
  NgModule,
  catchError,
  inject,
  map,
  setClassMetadata,
  switchMap,
  take,
  tap,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵinject
} from "./chunk-3LP6MEWW.mjs";
import {
  __spreadValues
} from "./chunk-JBYB2SS7.mjs";

// node_modules/@spartacus/user/fesm2022/spartacus-user-profile-core.mjs
var USER_PROFILE_NORMALIZER = new InjectionToken("UserProfileNormalizer");
var USER_PROFILE_SERIALIZER = new InjectionToken("UserProfileSerializer");
var USER_SERIALIZER = new InjectionToken("UserSerializer");
var USER_SIGN_UP_SERIALIZER = new InjectionToken("UserSignUpSerializer");
var TITLE_NORMALIZER = new InjectionToken("TitleNormalizer");
var UserProfileAdapter = class {
};
var _UserProfileConnector = class _UserProfileConnector {
  constructor(userProfileAdapter) {
    this.userProfileAdapter = userProfileAdapter;
  }
  update(username, user) {
    return this.userProfileAdapter.update(username, user);
  }
  register(user) {
    return this.userProfileAdapter.register(user);
  }
  registerGuest(guid, password) {
    return this.userProfileAdapter.registerGuest(guid, password);
  }
  requestForgotPasswordEmail(userEmailAddress) {
    return this.userProfileAdapter.requestForgotPasswordEmail(userEmailAddress);
  }
  resetPassword(token, newPassword) {
    return this.userProfileAdapter.resetPassword(token, newPassword);
  }
  updateEmail(userId, currentPassword, newUserId) {
    return this.userProfileAdapter.updateEmail(userId, currentPassword, newUserId);
  }
  updatePassword(userId, oldPassword, newPassword) {
    return this.userProfileAdapter.updatePassword(userId, oldPassword, newPassword);
  }
  remove(userId) {
    return this.userProfileAdapter.close(userId);
  }
  getTitles() {
    return this.userProfileAdapter.loadTitles();
  }
};
_UserProfileConnector.\u0275fac = function UserProfileConnector_Factory(t) {
  return new (t || _UserProfileConnector)(\u0275\u0275inject(UserProfileAdapter));
};
_UserProfileConnector.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
  token: _UserProfileConnector,
  factory: _UserProfileConnector.\u0275fac
});
var UserProfileConnector = _UserProfileConnector;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UserProfileConnector, [{
    type: Injectable
  }], () => [{
    type: UserProfileAdapter
  }], null);
})();
var _UserEmailService = class _UserEmailService {
  constructor(userIdService, userProfileConnector, command) {
    this.userIdService = userIdService;
    this.userProfileConnector = userProfileConnector;
    this.command = command;
    this.updateCommand = this.command.create((payload) => this.userIdService.takeUserId(true).pipe(switchMap((uid) => this.userProfileConnector.updateEmail(uid, payload.password, payload.newUid))), {
      strategy: CommandStrategy.Queue
    });
  }
  /**
   * Updates the user's email.
   *
   * @param password to users password to confirm the users
   * @param newUid the new proposed email address.
   */
  update(password, newUid) {
    return this.updateCommand.execute({
      password,
      newUid
    });
  }
};
_UserEmailService.\u0275fac = function UserEmailService_Factory(t) {
  return new (t || _UserEmailService)(\u0275\u0275inject(UserIdService), \u0275\u0275inject(UserProfileConnector), \u0275\u0275inject(CommandService));
};
_UserEmailService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
  token: _UserEmailService,
  factory: _UserEmailService.\u0275fac
});
var UserEmailService = _UserEmailService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UserEmailService, [{
    type: Injectable
  }], () => [{
    type: UserIdService
  }, {
    type: UserProfileConnector
  }, {
    type: CommandService
  }], null);
})();
var _UserPasswordService = class _UserPasswordService {
  constructor(userProfileConnector, userIdService, command) {
    this.userProfileConnector = userProfileConnector;
    this.userIdService = userIdService;
    this.command = command;
    this.updateCommand = this.command.create((payload) => this.userIdService.takeUserId(true).pipe(take(1), switchMap((uid) => this.userProfileConnector.updatePassword(uid, payload.oldPassword, payload.newPassword))));
    this.resetCommand = this.command.create((payload) => this.userProfileConnector.resetPassword(payload.token, payload.password));
    this.requestForgotPasswordEmailCommand = this.command.create((payload) => this.userProfileConnector.requestForgotPasswordEmail(payload.email));
  }
  /**
   * Updates the password for the user
   *
   * The method returns an observable with `LoaderState` information, including the
   * actual user data.
   *
   * @param oldPassword the current password that will be changed
   * @param newPassword the new password
   */
  update(oldPassword, newPassword) {
    return this.updateCommand.execute({
      oldPassword,
      newPassword
    });
  }
  /**
   * Reset new password. Part of the forgot password flow.
   *
   * @param token
   * @param password
   */
  reset(token, password) {
    return this.resetCommand.execute({
      token,
      password
    });
  }
  /*
   * Request an email to reset a forgotten password.
   */
  requestForgotPasswordEmail(email) {
    return this.requestForgotPasswordEmailCommand.execute({
      email
    });
  }
};
_UserPasswordService.\u0275fac = function UserPasswordService_Factory(t) {
  return new (t || _UserPasswordService)(\u0275\u0275inject(UserProfileConnector), \u0275\u0275inject(UserIdService), \u0275\u0275inject(CommandService));
};
_UserPasswordService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
  token: _UserPasswordService,
  factory: _UserPasswordService.\u0275fac
});
var UserPasswordService = _UserPasswordService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UserPasswordService, [{
    type: Injectable
  }], () => [{
    type: UserProfileConnector
  }, {
    type: UserIdService
  }, {
    type: CommandService
  }], null);
})();
var _UserProfileService = class _UserProfileService {
  constructor(userAccountService, authService, userProfileConnector, eventService, userIdService, query, command) {
    this.userAccountService = userAccountService;
    this.authService = authService;
    this.userProfileConnector = userProfileConnector;
    this.eventService = eventService;
    this.userIdService = userIdService;
    this.query = query;
    this.command = command;
    this.updateCommand = this.command.create((payload) => this.userIdService.takeUserId(true).pipe(switchMap((uid) => this.userProfileConnector.update(uid, payload.details).pipe(tap(() => {
      this.eventService.dispatch({
        user: payload.details
      }, UserAccountChangedEvent);
    })))), {
      strategy: CommandStrategy.Queue
    });
    this.closeCommand = this.command.create(() => this.userIdService.takeUserId(true).pipe(switchMap((uid) => this.userProfileConnector.remove(uid).pipe(tap(() => this.authService.logout())))));
    this.titleQuery = this.query.create(() => this.userProfileConnector.getTitles(), {
      reloadOn: [LanguageSetEvent]
    });
  }
  get() {
    return this.userAccountService.get();
  }
  /**
   * Updates the user's details.
   *
   * @param details User details to be updated.
   */
  update(details) {
    return this.updateCommand.execute({
      details
    });
  }
  /**
   * Closes the user account.
   */
  close() {
    return this.closeCommand.execute(void 0);
  }
  /**
   * Returns titles that can be used for the user profiles.
   */
  getTitles() {
    return this.titleQuery.get().pipe(map((titles) => titles ?? []));
  }
};
_UserProfileService.\u0275fac = function UserProfileService_Factory(t) {
  return new (t || _UserProfileService)(\u0275\u0275inject(UserAccountFacade), \u0275\u0275inject(AuthService), \u0275\u0275inject(UserProfileConnector), \u0275\u0275inject(EventService), \u0275\u0275inject(UserIdService), \u0275\u0275inject(QueryService), \u0275\u0275inject(CommandService));
};
_UserProfileService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
  token: _UserProfileService,
  factory: _UserProfileService.\u0275fac
});
var UserProfileService = _UserProfileService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UserProfileService, [{
    type: Injectable
  }], () => [{
    type: UserAccountFacade
  }, {
    type: AuthService
  }, {
    type: UserProfileConnector
  }, {
    type: EventService
  }, {
    type: UserIdService
  }, {
    type: QueryService
  }, {
    type: CommandService
  }], null);
})();
var _UserRegisterService = class _UserRegisterService {
  constructor(userProfile, userConnector, authService, command, store) {
    this.userProfile = userProfile;
    this.userConnector = userConnector;
    this.authService = authService;
    this.command = command;
    this.store = store;
    this.registerCommand = this.command.create(({
      user
    }) => this.userConnector.register(user).pipe(tap(() => {
      this.store.dispatch(new userGroup_actions.RegisterUserSuccess());
    })));
    this.registerGuestCommand = this.command.create((payload) => this.userConnector.registerGuest(payload.guid, payload.password).pipe(tap((user) => {
      this.authService.loginWithCredentials(user.uid, payload.password);
    })));
  }
  /**
   * Register a new user.
   *
   * @param submitFormData as UserRegisterFormData
   */
  register(user) {
    return this.registerCommand.execute({
      user
    });
  }
  /**
   * Register a new user from guest.
   *
   * @param guid
   * @param password
   */
  registerGuest(guid, password) {
    return this.registerGuestCommand.execute({
      guid,
      password
    });
  }
  /**
   * Returns titles that can be used for the user profiles.
   */
  getTitles() {
    return this.userProfile.getTitles();
  }
};
_UserRegisterService.\u0275fac = function UserRegisterService_Factory(t) {
  return new (t || _UserRegisterService)(\u0275\u0275inject(UserProfileService), \u0275\u0275inject(UserProfileConnector), \u0275\u0275inject(AuthService), \u0275\u0275inject(CommandService), \u0275\u0275inject(Store));
};
_UserRegisterService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
  token: _UserRegisterService,
  factory: _UserRegisterService.\u0275fac
});
var UserRegisterService = _UserRegisterService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UserRegisterService, [{
    type: Injectable
  }], () => [{
    type: UserProfileService
  }, {
    type: UserProfileConnector
  }, {
    type: AuthService
  }, {
    type: CommandService
  }, {
    type: Store
  }], null);
})();
var facadeProviders = [UserEmailService, UserPasswordService, UserProfileService, UserRegisterService, {
  provide: UserEmailFacade,
  useExisting: UserEmailService
}, {
  provide: UserPasswordFacade,
  useExisting: UserPasswordService
}, {
  provide: UserProfileFacade,
  useExisting: UserProfileService
}, {
  provide: UserRegisterFacade,
  useExisting: UserRegisterService
}];
var _UserProfileCoreModule = class _UserProfileCoreModule {
};
_UserProfileCoreModule.\u0275fac = function UserProfileCoreModule_Factory(t) {
  return new (t || _UserProfileCoreModule)();
};
_UserProfileCoreModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
  type: _UserProfileCoreModule
});
_UserProfileCoreModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
  providers: [UserProfileConnector, ...facadeProviders]
});
var UserProfileCoreModule = _UserProfileCoreModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UserProfileCoreModule, [{
    type: NgModule,
    args: [{
      providers: [UserProfileConnector, ...facadeProviders]
    }]
  }], null, null);
})();

// node_modules/@spartacus/user/fesm2022/spartacus-user-profile-occ.mjs
var defaultOccUserProfileConfig = {
  backend: {
    occ: {
      endpoints: {
        userRegister: "users",
        userForgotPassword: "forgottenpasswordtokens",
        userResetPassword: "resetpassword",
        userUpdateLoginId: "users/${userId}/login",
        userUpdatePassword: "users/${userId}/password",
        titles: "titles"
      }
    }
  }
};
var CONTENT_TYPE_JSON_HEADER = {
  "Content-Type": "application/json"
};
var CONTENT_TYPE_URLENCODED_HEADER = {
  "Content-Type": "application/x-www-form-urlencoded"
};
var _OccUserProfileAdapter = class _OccUserProfileAdapter {
  constructor(http, occEndpoints, converter) {
    this.http = http;
    this.occEndpoints = occEndpoints;
    this.converter = converter;
    this.logger = inject(LoggerService);
  }
  update(userId, user) {
    const endpoint = this.occEndpoints.isConfigured("userUpdateProfile") ? "userUpdateProfile" : "user";
    const url = this.occEndpoints.buildUrl(endpoint, {
      urlParams: {
        userId
      }
    });
    user = this.converter.convert(user, USER_PROFILE_SERIALIZER);
    return this.http.patch(url, user).pipe(catchError((error) => {
      throw normalizeHttpError(error, this.logger);
    }));
  }
  register(user) {
    const url = this.occEndpoints.buildUrl("userRegister");
    let headers = new HttpHeaders(__spreadValues({}, CONTENT_TYPE_JSON_HEADER));
    headers = InterceptorUtil.createHeader(USE_CLIENT_TOKEN, true, headers);
    user = this.converter.convert(user, USER_SIGN_UP_SERIALIZER);
    return this.http.post(url, user, {
      headers
    }).pipe(catchError((error) => {
      throw normalizeHttpError(error, this.logger);
    }), this.converter.pipeable(USER_PROFILE_NORMALIZER));
  }
  registerGuest(guid, password) {
    const url = this.occEndpoints.buildUrl("userRegister");
    let headers = new HttpHeaders(__spreadValues({}, CONTENT_TYPE_URLENCODED_HEADER));
    headers = InterceptorUtil.createHeader(USE_CLIENT_TOKEN, true, headers);
    const httpParams = new HttpParams().set("guid", guid).set("password", password);
    return this.http.post(url, httpParams, {
      headers
    }).pipe(catchError((error) => {
      throw normalizeHttpError(error, this.logger);
    }), this.converter.pipeable(USER_PROFILE_NORMALIZER));
  }
  requestForgotPasswordEmail(userEmailAddress) {
    const url = this.occEndpoints.buildUrl("userForgotPassword");
    const httpParams = new HttpParams().set("userId", userEmailAddress);
    let headers = new HttpHeaders(__spreadValues({}, CONTENT_TYPE_URLENCODED_HEADER));
    headers = InterceptorUtil.createHeader(USE_CLIENT_TOKEN, true, headers);
    return this.http.post(url, httpParams, {
      headers
    }).pipe(catchError((error) => {
      throw normalizeHttpError(error, this.logger);
    }));
  }
  resetPassword(token, newPassword) {
    const url = this.occEndpoints.buildUrl("userResetPassword");
    let headers = new HttpHeaders(__spreadValues({}, CONTENT_TYPE_JSON_HEADER));
    headers = InterceptorUtil.createHeader(USE_CLIENT_TOKEN, true, headers);
    return this.http.post(url, {
      token,
      newPassword
    }, {
      headers
    }).pipe(catchError((error) => {
      throw normalizeHttpError(error, this.logger);
    }));
  }
  updateEmail(userId, currentPassword, newUserId) {
    const url = this.occEndpoints.buildUrl("userUpdateLoginId", {
      urlParams: {
        userId
      }
    });
    const httpParams = new HttpParams().set("password", currentPassword).set("newLogin", newUserId);
    const headers = new HttpHeaders(__spreadValues({}, CONTENT_TYPE_URLENCODED_HEADER));
    return this.http.put(url, httpParams, {
      headers
    }).pipe(catchError((error) => {
      throw normalizeHttpError(error, this.logger);
    }));
  }
  updatePassword(userId, oldPassword, newPassword) {
    const url = this.occEndpoints.buildUrl("userUpdatePassword", {
      urlParams: {
        userId
      }
    });
    const httpParams = new HttpParams().set("old", oldPassword).set("new", newPassword);
    const headers = new HttpHeaders(__spreadValues({}, CONTENT_TYPE_URLENCODED_HEADER));
    return this.http.put(url, httpParams, {
      headers
    }).pipe(catchError((error) => {
      throw normalizeHttpError(error, this.logger);
    }));
  }
  close(userId) {
    const endpoint = this.occEndpoints.isConfigured("userCloseAccount") ? "userCloseAccount" : "user";
    const url = this.occEndpoints.buildUrl(endpoint, {
      urlParams: {
        userId
      }
    });
    return this.http.delete(url).pipe(catchError((error) => {
      throw normalizeHttpError(error, this.logger);
    }));
  }
  loadTitles() {
    const url = this.occEndpoints.buildUrl("titles");
    return this.http.get(url).pipe(catchError((error) => {
      throw normalizeHttpError(error, this.logger);
    }), map((titleList) => titleList.titles ?? []), this.converter.pipeableMany(TITLE_NORMALIZER));
  }
};
_OccUserProfileAdapter.\u0275fac = function OccUserProfileAdapter_Factory(t) {
  return new (t || _OccUserProfileAdapter)(\u0275\u0275inject(HttpClient), \u0275\u0275inject(OccEndpointsService), \u0275\u0275inject(ConverterService));
};
_OccUserProfileAdapter.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
  token: _OccUserProfileAdapter,
  factory: _OccUserProfileAdapter.\u0275fac
});
var OccUserProfileAdapter = _OccUserProfileAdapter;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OccUserProfileAdapter, [{
    type: Injectable
  }], () => [{
    type: HttpClient
  }, {
    type: OccEndpointsService
  }, {
    type: ConverterService
  }], null);
})();
var _UserProfileOccModule = class _UserProfileOccModule {
};
_UserProfileOccModule.\u0275fac = function UserProfileOccModule_Factory(t) {
  return new (t || _UserProfileOccModule)();
};
_UserProfileOccModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
  type: _UserProfileOccModule
});
_UserProfileOccModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
  providers: [provideDefaultConfig(defaultOccUserProfileConfig), {
    provide: UserProfileAdapter,
    useClass: OccUserProfileAdapter
  }]
});
var UserProfileOccModule = _UserProfileOccModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UserProfileOccModule, [{
    type: NgModule,
    args: [{
      providers: [provideDefaultConfig(defaultOccUserProfileConfig), {
        provide: UserProfileAdapter,
        useClass: OccUserProfileAdapter
      }]
    }]
  }], null, null);
})();

// node_modules/@spartacus/user/fesm2022/spartacus-user-profile.mjs
var _UserProfileModule = class _UserProfileModule {
};
_UserProfileModule.\u0275fac = function UserProfileModule_Factory(t) {
  return new (t || _UserProfileModule)();
};
_UserProfileModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
  type: _UserProfileModule
});
_UserProfileModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
  imports: [UserProfileCoreModule, UserProfileOccModule, UserProfileComponentsModule]
});
var UserProfileModule = _UserProfileModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UserProfileModule, [{
    type: NgModule,
    args: [{
      imports: [UserProfileCoreModule, UserProfileOccModule, UserProfileComponentsModule]
    }]
  }], null, null);
})();
export {
  UserProfileModule
};
//# sourceMappingURL=chunk-XL6EGA66.mjs.map
