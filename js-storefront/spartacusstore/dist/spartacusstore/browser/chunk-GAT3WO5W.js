import {
  WishListFacade
} from "./chunk-4UX3EQPP.js";
import "./chunk-I4764JOB.js";
import {
  AtMessageDirective,
  AtMessageModule,
  CurrentProductService,
  ICON_TYPE,
  IconComponent,
  IconModule
} from "./chunk-TEI6YMHW.js";
import {
  AsyncPipe,
  AuthService,
  ChangeDetectionStrategy,
  CommonModule,
  Component,
  I18nModule,
  NgIf,
  NgModule,
  RouterLink,
  RouterModule,
  TranslatePipe,
  UrlModule,
  UrlPipe,
  filter,
  isNotNullable,
  map,
  provideDefaultConfig,
  setClassMetadata,
  tap,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-RJVZANIA.js";

// node_modules/@spartacus/cart/fesm2022/spartacus-cart-wish-list-components-add-to-wishlist.mjs
var _c0 = () => ({
  cxRoute: "login"
});
function AddToWishListComponent_ng_container_0_ng_container_1_ng_container_1_ng_container_1_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div")(1, "button", 4);
    \u0275\u0275pipe(2, "async");
    \u0275\u0275pipe(3, "cxTranslate");
    \u0275\u0275listener("click", function AddToWishListComponent_ng_container_0_ng_container_1_ng_container_1_ng_container_1_div_1_Template_button_click_1_listener() {
      const entry_r2 = \u0275\u0275restoreView(_r1).ngIf;
      const ctx_r2 = \u0275\u0275nextContext(5);
      return \u0275\u0275resetView(ctx_r2.remove(entry_r2));
    });
    \u0275\u0275element(4, "cx-icon", 5);
    \u0275\u0275elementStart(5, "span", 6);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "cxTranslate");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(5);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", \u0275\u0275pipeBind1(2, 4, ctx_r2.loading$))("cxAtMessage", \u0275\u0275pipeBind1(3, 6, "addToWishList.removedFromWishList"));
    \u0275\u0275advance(3);
    \u0275\u0275property("type", ctx_r2.iconTypes.HEART);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(7, 8, "addToWishList.remove"));
  }
}
function AddToWishListComponent_ng_container_0_ng_container_1_ng_container_1_ng_container_1_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 7);
    \u0275\u0275pipe(1, "async");
    \u0275\u0275pipe(2, "cxTranslate");
    \u0275\u0275listener("click", function AddToWishListComponent_ng_container_0_ng_container_1_ng_container_1_ng_container_1_ng_template_2_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r4);
      const product_r5 = \u0275\u0275nextContext(4).ngIf;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.add(product_r5));
    });
    \u0275\u0275element(3, "cx-icon", 5);
    \u0275\u0275elementStart(4, "span", 6);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "cxTranslate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(5);
    \u0275\u0275property("disabled", \u0275\u0275pipeBind1(1, 4, ctx_r2.loading$))("cxAtMessage", \u0275\u0275pipeBind1(2, 6, "addToWishList.addedToWishList"));
    \u0275\u0275advance(3);
    \u0275\u0275property("type", ctx_r2.iconTypes.EMPTY_HEART);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 8, "addToWishList.add"));
  }
}
function AddToWishListComponent_ng_container_0_ng_container_1_ng_container_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, AddToWishListComponent_ng_container_0_ng_container_1_ng_container_1_ng_container_1_div_1_Template, 8, 10, "div", 3)(2, AddToWishListComponent_ng_container_0_ng_container_1_ng_container_1_ng_container_1_ng_template_2_Template, 7, 10, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const addItem_r6 = \u0275\u0275reference(3);
    const entries_r7 = \u0275\u0275nextContext().ngIf;
    const product_r5 = \u0275\u0275nextContext(2).ngIf;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.getProductInWishList(product_r5, entries_r7))("ngIfElse", addItem_r6);
  }
}
function AddToWishListComponent_ng_container_0_ng_container_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, AddToWishListComponent_ng_container_0_ng_container_1_ng_container_1_ng_container_1_Template, 4, 2, "ng-container", 2);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.hasStock);
  }
}
function AddToWishListComponent_ng_container_0_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, AddToWishListComponent_ng_container_0_ng_container_1_ng_container_1_Template, 2, 1, "ng-container", 2);
    \u0275\u0275pipe(2, "async");
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", \u0275\u0275pipeBind1(2, 1, ctx_r2.wishListEntries$));
  }
}
function AddToWishListComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, AddToWishListComponent_ng_container_0_ng_container_1_Template, 3, 3, "ng-container", 3);
    \u0275\u0275pipe(2, "async");
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    const loginPrompt_r8 = \u0275\u0275reference(3);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", \u0275\u0275pipeBind1(2, 2, ctx_r2.userLoggedIn$))("ngIfElse", loginPrompt_r8);
  }
}
function AddToWishListComponent_ng_template_2_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "a", 8);
    \u0275\u0275pipe(2, "cxUrl");
    \u0275\u0275element(3, "cx-icon", 5);
    \u0275\u0275elementStart(4, "span", 6);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "cxTranslate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", \u0275\u0275pipeBind1(2, 3, \u0275\u0275pureFunction0(7, _c0)));
    \u0275\u0275advance(2);
    \u0275\u0275property("type", ctx_r2.iconTypes.EMPTY_HEART);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 5, "addToWishList.anonymous"));
  }
}
function AddToWishListComponent_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, AddToWishListComponent_ng_template_2_ng_container_0_Template, 7, 8, "ng-container", 2);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("ngIf", ctx_r2.hasStock);
  }
}
var _AddToWishListComponent = class _AddToWishListComponent {
  constructor(wishListFacade, currentProductService, authService) {
    this.wishListFacade = wishListFacade;
    this.currentProductService = currentProductService;
    this.authService = authService;
    this.product$ = this.currentProductService.getProduct().pipe(filter(isNotNullable), tap((product) => this.setStockInfo(product)));
    this.userLoggedIn$ = this.authService.isUserLoggedIn().pipe(tap((isLogin) => {
      if (isLogin) {
        this.wishListEntries$ = this.getWishListEntries();
        this.loading$ = this.wishListFacade.getWishListLoading();
      }
    }));
    this.hasStock = false;
    this.iconTypes = ICON_TYPE;
  }
  add(product) {
    if (product.code) {
      this.wishListFacade.addEntry(product.code);
    }
  }
  remove(entry) {
    this.wishListFacade.removeEntry(entry);
  }
  getProductInWishList(product, entries) {
    const item = entries.find((entry) => entry.product?.code === product.code);
    return item;
  }
  setStockInfo(product) {
    this.hasStock = Boolean(product.stock && product.stock.stockLevelStatus !== "outOfStock");
  }
  getWishListEntries() {
    return this.wishListFacade.getWishList().pipe(filter((wishlist) => Boolean(wishlist)), map((wishList) => wishList.entries ?? []));
  }
};
_AddToWishListComponent.\u0275fac = function AddToWishListComponent_Factory(t) {
  return new (t || _AddToWishListComponent)(\u0275\u0275directiveInject(WishListFacade), \u0275\u0275directiveInject(CurrentProductService), \u0275\u0275directiveInject(AuthService));
};
_AddToWishListComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
  type: _AddToWishListComponent,
  selectors: [["cx-add-to-wishlist"]],
  decls: 4,
  vars: 3,
  consts: [["loginPrompt", ""], ["addItem", ""], [4, "ngIf"], [4, "ngIf", "ngIfElse"], [1, "btn", "btn-link", "button-remove", "cx-action-link", 3, "click", "disabled", "cxAtMessage"], [3, "type"], [1, "button-text"], [1, "btn", "btn-link", "button-add", "cx-action-link", 3, "click", "disabled", "cxAtMessage"], [1, "btn", "btn-link", "button-add-link", "cx-action-link", 3, "routerLink"]],
  template: function AddToWishListComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275template(0, AddToWishListComponent_ng_container_0_Template, 3, 4, "ng-container", 2);
      \u0275\u0275pipe(1, "async");
      \u0275\u0275template(2, AddToWishListComponent_ng_template_2_Template, 1, 1, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
    }
    if (rf & 2) {
      \u0275\u0275property("ngIf", \u0275\u0275pipeBind1(1, 1, ctx.product$));
    }
  },
  dependencies: [NgIf, IconComponent, RouterLink, AtMessageDirective, AsyncPipe, TranslatePipe, UrlPipe],
  encapsulation: 2,
  changeDetection: 0
});
var AddToWishListComponent = _AddToWishListComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AddToWishListComponent, [{
    type: Component,
    args: [{
      selector: "cx-add-to-wishlist",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: `<ng-container *ngIf="product$ | async as product">
  <ng-container *ngIf="userLoggedIn$ | async; else loginPrompt">
    <ng-container *ngIf="wishListEntries$ | async as entries">
      <ng-container *ngIf="hasStock">
        <div
          *ngIf="getProductInWishList(product, entries) as entry; else addItem"
        >
          <button
            class="btn btn-link button-remove cx-action-link"
            (click)="remove(entry)"
            [disabled]="loading$ | async"
            [cxAtMessage]="'addToWishList.removedFromWishList' | cxTranslate"
          >
            <cx-icon [type]="iconTypes.HEART"></cx-icon>
            <span class="button-text">{{
              'addToWishList.remove' | cxTranslate
            }}</span>
          </button>
        </div>
        <ng-template #addItem>
          <button
            class="btn btn-link button-add cx-action-link"
            (click)="add(product)"
            [disabled]="loading$ | async"
            [cxAtMessage]="'addToWishList.addedToWishList' | cxTranslate"
          >
            <cx-icon [type]="iconTypes.EMPTY_HEART"></cx-icon>
            <span class="button-text">{{
              'addToWishList.add' | cxTranslate
            }}</span>
          </button>
        </ng-template>
      </ng-container>
    </ng-container>
  </ng-container>
</ng-container>

<ng-template #loginPrompt>
  <ng-container *ngIf="hasStock">
    <a
      class="btn btn-link button-add-link cx-action-link"
      [routerLink]="{ cxRoute: 'login' } | cxUrl"
    >
      <cx-icon [type]="iconTypes.EMPTY_HEART"></cx-icon>
      <span class="button-text">{{
        'addToWishList.anonymous' | cxTranslate
      }}</span>
    </a>
  </ng-container>
</ng-template>
`
    }]
  }], () => [{
    type: WishListFacade
  }, {
    type: CurrentProductService
  }, {
    type: AuthService
  }], null);
})();
var _AddToWishListModule = class _AddToWishListModule {
};
_AddToWishListModule.\u0275fac = function AddToWishListModule_Factory(t) {
  return new (t || _AddToWishListModule)();
};
_AddToWishListModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
  type: _AddToWishListModule
});
_AddToWishListModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
  providers: [provideDefaultConfig({
    cmsComponents: {
      AddToWishListComponent: {
        component: AddToWishListComponent
      }
    }
  })],
  imports: [CommonModule, I18nModule, IconModule, RouterModule, UrlModule, AtMessageModule]
});
var AddToWishListModule = _AddToWishListModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AddToWishListModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, I18nModule, IconModule, RouterModule, UrlModule, AtMessageModule],
      providers: [provideDefaultConfig({
        cmsComponents: {
          AddToWishListComponent: {
            component: AddToWishListComponent
          }
        }
      })],
      declarations: [AddToWishListComponent],
      exports: [AddToWishListComponent]
    }]
  }], null, null);
})();
export {
  AddToWishListComponent,
  AddToWishListModule
};
//# sourceMappingURL=chunk-GAT3WO5W.js.map
