import {
  ActiveCartFacade,
  CreateCartEvent
} from "./chunk-I4764JOB.js";
import {
  ICON_TYPE,
  IconComponent,
  IconModule
} from "./chunk-TEI6YMHW.js";
import {
  AsyncPipe,
  AuthService,
  BASE_SITE_CONTEXT_ID,
  ChangeDetectionStrategy,
  CommonModule,
  Component,
  EventService,
  I18nModule,
  Injectable,
  NgModule,
  RouterLink,
  RouterModule,
  SiteContextParamsService,
  StatePersistenceService,
  StorageSyncType,
  TranslatePipe,
  UrlModule,
  UrlPipe,
  combineLatest,
  distinctUntilChanged,
  map,
  of,
  provideDefaultConfig,
  setClassMetadata,
  startWith,
  switchMap,
  takeWhile,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵinject,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵtext,
  ɵɵtextInterpolate1
} from "./chunk-RJVZANIA.js";

// node_modules/@spartacus/cart/fesm2022/spartacus-cart-base-components-mini-cart.mjs
var _c0 = () => ({
  cxRoute: "cart"
});
var _c1 = (a0) => ({
  count: a0
});
var _c2 = (a0) => ({
  total: a0
});
var _MiniCartComponentService = class _MiniCartComponentService {
  constructor(activeCartFacade, authService, statePersistenceService, siteContextParamsService, eventService) {
    this.activeCartFacade = activeCartFacade;
    this.authService = authService;
    this.statePersistenceService = statePersistenceService;
    this.siteContextParamsService = siteContextParamsService;
    this.eventService = eventService;
  }
  /**
   * This function supports lazy loading of the cart functionality's code. We only call
   * the activeCartFacade if we know there is actually a cart.
   * Without a cart, we can return a default value and
   * avoid loading the cart library code.
   */
  getQuantity() {
    return this.activeCartRequired().pipe(switchMap((activeCartRequired) => {
      if (activeCartRequired) {
        return this.activeCartFacade.getActive().pipe(startWith({
          totalUnitCount: 0
        }), map((cart) => cart.totalUnitCount || 0));
      } else {
        return of(0);
      }
    }));
  }
  /**
   * This function supports lazy loading of the cart functionality's code. We only call
   * the activeCartFacade if we know there is actually a cart.
   * Without a cart, we can return a default value and
   * avoid loading the cart library code.
   */
  getTotalPrice() {
    return this.activeCartRequired().pipe(switchMap((activeCartRequired) => {
      if (activeCartRequired) {
        return this.activeCartFacade.getActive().pipe(map((cart) => cart.totalPrice?.formattedValue ?? ""));
      } else {
        return of("");
      }
    }));
  }
  /**
   * This function determines if it is required to get active cart data from ActiveCartFacade.
   * It is required to call the ActiveCartFacade if one of these criteria is met:
   * - There is an active cart id in the browser local storage
   * - A user is authenticated
   * - The cart library code chunk with the ActiveCartFacade implementation is already loaded.
   *
   * Once the observable returned by activeCartRequired emits true, it completes.
   * activeCartRequired helps to make the mini cart compatible with some level of lazy loading.
   */
  activeCartRequired() {
    return combineLatest([this.hasActiveCartInStorage(), this.authService.isUserLoggedIn(), this.isCartCreated()]).pipe(map(([hasCartInStorage, isUserLoggedIn, isCartCreated]) => hasCartInStorage || isUserLoggedIn || isCartCreated), distinctUntilChanged(), takeWhile((hasCart) => !hasCart, true));
  }
  hasActiveCartInStorage() {
    return this.getCartStateFromBrowserStorage().pipe(map((state) => Boolean(state?.active)));
  }
  isCartCreated() {
    return this.eventService.get(CreateCartEvent).pipe(map((_) => true), startWith(false));
  }
  getCartStateFromBrowserStorage() {
    return this.siteContextParamsService.getValues([BASE_SITE_CONTEXT_ID]).pipe(map((context) => {
      return this.statePersistenceService.readStateFromStorage({
        key: "cart",
        context,
        storageType: StorageSyncType.LOCAL_STORAGE
      });
    }));
  }
};
_MiniCartComponentService.\u0275fac = function MiniCartComponentService_Factory(t) {
  return new (t || _MiniCartComponentService)(\u0275\u0275inject(ActiveCartFacade), \u0275\u0275inject(AuthService), \u0275\u0275inject(StatePersistenceService), \u0275\u0275inject(SiteContextParamsService), \u0275\u0275inject(EventService));
};
_MiniCartComponentService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
  token: _MiniCartComponentService,
  factory: _MiniCartComponentService.\u0275fac,
  providedIn: "root"
});
var MiniCartComponentService = _MiniCartComponentService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MiniCartComponentService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: ActiveCartFacade
  }, {
    type: AuthService
  }, {
    type: StatePersistenceService
  }, {
    type: SiteContextParamsService
  }, {
    type: EventService
  }], null);
})();
var _MiniCartComponent = class _MiniCartComponent {
  constructor(miniCartComponentService) {
    this.miniCartComponentService = miniCartComponentService;
    this.iconTypes = ICON_TYPE;
    this.quantity$ = this.miniCartComponentService.getQuantity();
    this.total$ = this.miniCartComponentService.getTotalPrice();
  }
};
_MiniCartComponent.\u0275fac = function MiniCartComponent_Factory(t) {
  return new (t || _MiniCartComponent)(\u0275\u0275directiveInject(MiniCartComponentService));
};
_MiniCartComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
  type: _MiniCartComponent,
  selectors: [["cx-mini-cart"]],
  decls: 13,
  vars: 29,
  consts: [[3, "routerLink"], [3, "type"], [1, "total"], [1, "count"]],
  template: function MiniCartComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "a", 0);
      \u0275\u0275pipe(1, "cxUrl");
      \u0275\u0275pipe(2, "async");
      \u0275\u0275pipe(3, "cxTranslate");
      \u0275\u0275element(4, "cx-icon", 1);
      \u0275\u0275elementStart(5, "span", 2);
      \u0275\u0275text(6);
      \u0275\u0275pipe(7, "async");
      \u0275\u0275pipe(8, "cxTranslate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(9, "span", 3);
      \u0275\u0275text(10);
      \u0275\u0275pipe(11, "async");
      \u0275\u0275pipe(12, "cxTranslate");
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275property("routerLink", \u0275\u0275pipeBind1(1, 5, \u0275\u0275pureFunction0(22, _c0)));
      \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind2(3, 9, "miniCart.item", \u0275\u0275pureFunction1(23, _c1, \u0275\u0275pipeBind1(2, 7, ctx.quantity$))));
      \u0275\u0275advance(4);
      \u0275\u0275property("type", ctx.iconTypes.CART);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(8, 14, "miniCart.total", \u0275\u0275pureFunction1(25, _c2, \u0275\u0275pipeBind1(7, 12, ctx.total$))), " ");
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(12, 19, "miniCart.count", \u0275\u0275pureFunction1(27, _c1, \u0275\u0275pipeBind1(11, 17, ctx.quantity$))), " ");
    }
  },
  dependencies: [RouterLink, IconComponent, AsyncPipe, UrlPipe, TranslatePipe],
  encapsulation: 2,
  changeDetection: 0
});
var MiniCartComponent = _MiniCartComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MiniCartComponent, [{
    type: Component,
    args: [{
      selector: "cx-mini-cart",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: `<a
  [attr.aria-label]="
    'miniCart.item' | cxTranslate: { count: quantity$ | async }
  "
  [routerLink]="{ cxRoute: 'cart' } | cxUrl"
>
  <cx-icon [type]="iconTypes.CART"></cx-icon>

  <span class="total">
    {{ 'miniCart.total' | cxTranslate: { total: total$ | async } }}
  </span>

  <span class="count">
    {{ 'miniCart.count' | cxTranslate: { count: quantity$ | async } }}
  </span>
</a>
`
    }]
  }], () => [{
    type: MiniCartComponentService
  }], null);
})();
var _MiniCartModule = class _MiniCartModule {
};
_MiniCartModule.\u0275fac = function MiniCartModule_Factory(t) {
  return new (t || _MiniCartModule)();
};
_MiniCartModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
  type: _MiniCartModule
});
_MiniCartModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
  providers: [provideDefaultConfig({
    cmsComponents: {
      MiniCartComponent: {
        component: MiniCartComponent
      }
    }
  })],
  imports: [CommonModule, RouterModule, UrlModule, IconModule, I18nModule]
});
var MiniCartModule = _MiniCartModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MiniCartModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, RouterModule, UrlModule, IconModule, I18nModule],
      providers: [provideDefaultConfig({
        cmsComponents: {
          MiniCartComponent: {
            component: MiniCartComponent
          }
        }
      })],
      declarations: [MiniCartComponent],
      exports: [MiniCartComponent]
    }]
  }], null, null);
})();
export {
  MiniCartComponent,
  MiniCartComponentService,
  MiniCartModule
};
//# sourceMappingURL=chunk-7KZJILX7.js.map
