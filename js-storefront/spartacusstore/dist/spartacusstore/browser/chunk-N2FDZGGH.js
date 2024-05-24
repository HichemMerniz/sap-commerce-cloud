import {
  WishListFacade
} from "./chunk-4UX3EQPP.js";
import {
  UserAccountFacade
} from "./chunk-NWLDJIE7.js";
import {
  CartConnector,
  MULTI_CART_DATA,
  cartGroup_actions,
  getCartIdByUserId,
  multiCartGroup_selectors
} from "./chunk-MC5AHP6K.js";
import "./chunk-IOXUQC7Q.js";
import {
  CartType,
  MultiCartFacade
} from "./chunk-I4764JOB.js";
import {
  AtMessageDirective,
  AtMessageModule,
  InnerComponentsHostDirective,
  ItemCounterModule,
  MediaComponent,
  MediaModule,
  PageComponentModule,
  ProductListItemContext,
  ProductListItemContextSource,
  StarRatingModule
} from "./chunk-TEI6YMHW.js";
import {
  Actions,
  AsyncPipe,
  AuthGuard,
  ChangeDetectionStrategy,
  CommonModule,
  Component,
  EMPTY,
  EffectsModule,
  EventEmitter,
  I18nModule,
  Injectable,
  Input,
  LoggerService,
  NgForOf,
  NgIf,
  NgModule,
  OCC_USER_ID_ANONYMOUS,
  Output,
  RouterLink,
  RouterModule,
  Store,
  TranslatePipe,
  UrlModule,
  UrlPipe,
  UserIdService,
  catchError,
  combineLatest,
  concatMap,
  createEffect,
  distinctUntilChanged,
  filter,
  from,
  inject,
  isNotUndefined,
  map,
  normalizeHttpError,
  ofType,
  provideDefaultConfig,
  select,
  setClassMetadata,
  siteContextGroup_actions,
  switchMap,
  take,
  tap,
  utilsGroup,
  withLatestFrom,
  ɵɵNgOnChangesFeature,
  ɵɵProvidersFeature,
  ɵɵadvance,
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
  ɵɵinject,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-RJVZANIA.js";

// node_modules/@spartacus/cart/fesm2022/spartacus-cart-wish-list-components.mjs
var _c0 = ["cx-wish-list-item", ""];
var _c1 = (a0) => ({
  cxRoute: "product",
  params: a0
});
function WishListItemComponent_div_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13)(1, "a", 14);
    \u0275\u0275pipe(2, "cxUrl");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", \u0275\u0275pipeBind1(2, 2, \u0275\u0275pureFunction1(4, _c1, ctx_r0.cartEntry.product)));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.cartEntry.product == null ? null : ctx_r0.cartEntry.product.name);
  }
}
function WishListItemComponent_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "cxTranslate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", \u0275\u0275pipeBind1(2, 2, "cartItems.id"), " ", ctx_r0.cartEntry.product == null ? null : ctx_r0.cartEntry.product.code, " ");
  }
}
function WishListItemComponent_ng_container_8_div_1_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 19);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const variant_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", variant_r2.name, ": ", variant_r2.value, " ");
  }
}
function WishListItemComponent_ng_container_8_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 17);
    \u0275\u0275template(1, WishListItemComponent_ng_container_8_div_1_div_1_Template, 2, 2, "div", 18);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const variant_r2 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", variant_r2.name && variant_r2.value);
  }
}
function WishListItemComponent_ng_container_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, WishListItemComponent_ng_container_8_div_1_Template, 2, 1, "div", 16);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r0.cartEntry.product == null ? null : ctx_r0.cartEntry.product.baseOptions[0] == null ? null : ctx_r0.cartEntry.product.baseOptions[0].selected == null ? null : ctx_r0.cartEntry.product.baseOptions[0].selected.variantOptionQualifiers);
  }
}
function WishListItemComponent_td_9_div_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 23);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.cartEntry.basePrice == null ? null : ctx_r0.cartEntry.basePrice.formattedValue, " ");
  }
}
function WishListItemComponent_td_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 20)(1, "div", 21);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "cxTranslate");
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, WishListItemComponent_td_9_div_4_Template, 2, 1, "div", 22);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 2, "cartItems.itemPrice"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r0.cartEntry.basePrice);
  }
}
function WishListItemComponent_ng_container_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0, 24);
  }
}
function WishListItemComponent_ng_template_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 25);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "cxTranslate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "addToCart.outOfStock"), " ");
  }
}
function WishListItemComponent_button_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 26);
    \u0275\u0275pipe(1, "cxTranslate");
    \u0275\u0275listener("click", function WishListItemComponent_button_14_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.removeEntry(ctx_r0.cartEntry));
    });
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "cxTranslate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("cxAtMessage", \u0275\u0275pipeBind1(1, 3, "wishlist.itemRemoved"))("disabled", ctx_r0.isLoading);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 5, "common.remove"), " ");
  }
}
function WishListComponent_ng_container_0_table_1_tr_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr", 11);
    \u0275\u0275pipe(1, "async");
    \u0275\u0275listener("remove", function WishListComponent_ng_container_0_table_1_tr_16_Template_tr_remove_0_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.removeEntry($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const entry_r3 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("cartEntry", entry_r3)("isLoading", \u0275\u0275pipeBind1(1, 2, ctx_r1.loading$));
  }
}
function WishListComponent_ng_container_0_table_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "table", 3)(1, "caption", 4);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "cxTranslate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "thead")(5, "tr", 5)(6, "th", 6);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "cxTranslate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "th", 7);
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "cxTranslate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "th", 8);
    \u0275\u0275text(13);
    \u0275\u0275pipe(14, "cxTranslate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(15, "tbody", 9);
    \u0275\u0275template(16, WishListComponent_ng_container_0_table_1_tr_16_Template, 2, 4, "tr", 10);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const wishList_r4 = \u0275\u0275nextContext().ngIf;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 5, "wishlist.caption"), " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(8, 7, "cartItems.description"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(11, 9, "cartItems.itemPrice"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(14, 11, "cartItems.actions"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", wishList_r4 == null ? null : wishList_r4.entries);
  }
}
function WishListComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, WishListComponent_ng_container_0_table_1_Template, 17, 13, "table", 2);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const wishList_r4 = ctx.ngIf;
    \u0275\u0275nextContext();
    const emptyWishList_r5 = \u0275\u0275reference(3);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (wishList_r4 == null ? null : wishList_r4.entries == null ? null : wishList_r4.entries.length) > 0)("ngIfElse", emptyWishList_r5);
  }
}
function WishListComponent_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h2");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "cxTranslate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "wishlist.empty"));
  }
}
var _WishListItemComponent = class _WishListItemComponent {
  constructor(productListItemContextSource) {
    this.productListItemContextSource = productListItemContextSource;
    this.isLoading = false;
    this.remove = new EventEmitter();
  }
  ngOnChanges(changes) {
    if (changes?.cartEntry) {
      this.productListItemContextSource.product$.next(this.cartEntry.product);
    }
  }
  removeEntry(item) {
    this.remove.emit(item);
  }
};
_WishListItemComponent.\u0275fac = function WishListItemComponent_Factory(t) {
  return new (t || _WishListItemComponent)(\u0275\u0275directiveInject(ProductListItemContextSource));
};
_WishListItemComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
  type: _WishListItemComponent,
  selectors: [["", "cx-wish-list-item", ""], ["cx-wish-list-item"]],
  inputs: {
    isLoading: "isLoading",
    cartEntry: "cartEntry"
  },
  outputs: {
    remove: "remove"
  },
  features: [\u0275\u0275ProvidersFeature([ProductListItemContextSource, {
    provide: ProductListItemContext,
    useExisting: ProductListItemContextSource
  }]), \u0275\u0275NgOnChangesFeature],
  attrs: _c0,
  decls: 15,
  vars: 12,
  consts: [["outOfStock", ""], ["role", "cell"], [1, "cx-table-item-container"], ["tabindex", "-1", 3, "routerLink"], ["format", "thumbnail", 3, "container"], [1, "cx-info"], ["class", "cx-name", 4, "ngIf"], ["class", "cx-code", 4, "ngIf"], [4, "ngIf"], ["role", "cell", "class", "cx-price", 4, "ngIf"], ["role", "cell", 1, "cx-actions"], ["cxInnerComponentsHost", "", 4, "ngIf"], ["class", "link cx-action-link cx-remove-btn", 3, "cxAtMessage", "disabled", "click", 4, "ngIf"], [1, "cx-name"], [1, "cx-link", 3, "routerLink"], [1, "cx-code"], ["class", "cx-property", 4, "ngFor", "ngForOf"], [1, "cx-property"], ["class", "cx-label", 4, "ngIf"], [1, "cx-label"], ["role", "cell", 1, "cx-price"], [1, "cx-mobile-header"], ["class", "cx-value", 4, "ngIf"], [1, "cx-value"], ["cxInnerComponentsHost", ""], [1, "cx-out-of-stock"], [1, "link", "cx-action-link", "cx-remove-btn", 3, "click", "cxAtMessage", "disabled"]],
  template: function WishListItemComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "td", 1)(1, "div", 2)(2, "a", 3);
      \u0275\u0275pipe(3, "cxUrl");
      \u0275\u0275element(4, "cx-media", 4);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "div", 5);
      \u0275\u0275template(6, WishListItemComponent_div_6_Template, 4, 6, "div", 6)(7, WishListItemComponent_div_7_Template, 3, 4, "div", 7);
      \u0275\u0275elementEnd()();
      \u0275\u0275template(8, WishListItemComponent_ng_container_8_Template, 2, 1, "ng-container", 8);
      \u0275\u0275elementEnd();
      \u0275\u0275template(9, WishListItemComponent_td_9_Template, 5, 4, "td", 9);
      \u0275\u0275elementStart(10, "td", 10);
      \u0275\u0275template(11, WishListItemComponent_ng_container_11_Template, 1, 0, "ng-container", 11)(12, WishListItemComponent_ng_template_12_Template, 3, 3, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(14, WishListItemComponent_button_14_Template, 4, 7, "button", 12);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(2);
      \u0275\u0275property("routerLink", \u0275\u0275pipeBind1(3, 8, \u0275\u0275pureFunction1(10, _c1, ctx.cartEntry.product)));
      \u0275\u0275advance(2);
      \u0275\u0275property("container", ctx.cartEntry.product == null ? null : ctx.cartEntry.product.images == null ? null : ctx.cartEntry.product.images.PRIMARY);
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.cartEntry.product == null ? null : ctx.cartEntry.product.name);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.cartEntry.product == null ? null : ctx.cartEntry.product.code);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.cartEntry.product == null ? null : ctx.cartEntry.product.baseOptions == null ? null : ctx.cartEntry.product.baseOptions.length);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.cartEntry.basePrice);
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.cartEntry.updateable);
      \u0275\u0275advance(3);
      \u0275\u0275property("ngIf", ctx.cartEntry.updateable);
    }
  },
  dependencies: [AtMessageDirective, NgForOf, NgIf, MediaComponent, InnerComponentsHostDirective, RouterLink, TranslatePipe, UrlPipe],
  encapsulation: 2,
  changeDetection: 0
});
var WishListItemComponent = _WishListItemComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(WishListItemComponent, [{
    type: Component,
    args: [{
      selector: "[cx-wish-list-item], cx-wish-list-item",
      changeDetection: ChangeDetectionStrategy.OnPush,
      providers: [ProductListItemContextSource, {
        provide: ProductListItemContext,
        useExisting: ProductListItemContextSource
      }],
      template: `<td role="cell">
  <div class="cx-table-item-container">
    <!-- Item Image -->
    <a
      [routerLink]="{ cxRoute: 'product', params: cartEntry.product } | cxUrl"
      tabindex="-1"
    >
      <cx-media
        [container]="cartEntry.product?.images?.PRIMARY"
        format="thumbnail"
      ></cx-media>
    </a>
    <div class="cx-info">
      <div *ngIf="cartEntry.product?.name" class="cx-name">
        <a
          class="cx-link"
          [routerLink]="
            { cxRoute: 'product', params: cartEntry.product } | cxUrl
          "
          >{{ cartEntry.product?.name }}</a
        >
      </div>
      <div *ngIf="cartEntry.product?.code" class="cx-code">
        {{ 'cartItems.id' | cxTranslate }} {{ cartEntry.product?.code }}
      </div>
    </div>
  </div>
  <!-- Variants -->
  <ng-container *ngIf="cartEntry.product?.baseOptions?.length">
    <div
      *ngFor="
        let variant of cartEntry.product?.baseOptions[0]?.selected
          ?.variantOptionQualifiers
      "
      class="cx-property"
    >
      <div class="cx-label" *ngIf="variant.name && variant.value">
        {{ variant.name }}: {{ variant.value }}
      </div>
    </div>
  </ng-container>
</td>
<!-- Item Price -->
<td role="cell" *ngIf="cartEntry.basePrice" class="cx-price">
  <div class="cx-mobile-header">
    {{ 'cartItems.itemPrice' | cxTranslate }}
  </div>
  <div *ngIf="cartEntry.basePrice" class="cx-value">
    {{ cartEntry.basePrice?.formattedValue }}
  </div>
</td>
<!-- Action -->
<td role="cell" class="cx-actions">
  <ng-container
    *ngIf="cartEntry.updateable"
    cxInnerComponentsHost
  ></ng-container>
  <ng-template #outOfStock>
    <span class="cx-out-of-stock">
      {{ 'addToCart.outOfStock' | cxTranslate }}
    </span>
  </ng-template>
  <button
    *ngIf="cartEntry.updateable"
    (click)="removeEntry(cartEntry)"
    [cxAtMessage]="'wishlist.itemRemoved' | cxTranslate"
    [disabled]="isLoading"
    class="link cx-action-link cx-remove-btn"
  >
    {{ 'common.remove' | cxTranslate }}
  </button>
</td>
`
    }]
  }], () => [{
    type: ProductListItemContextSource
  }], {
    isLoading: [{
      type: Input
    }],
    cartEntry: [{
      type: Input
    }],
    remove: [{
      type: Output
    }]
  });
})();
var _WishListComponent = class _WishListComponent {
  constructor(wishListFacade) {
    this.wishListFacade = wishListFacade;
    this.wishList$ = this.wishListFacade.getWishList();
    this.loading$ = this.wishListFacade.getWishListLoading();
  }
  removeEntry(item) {
    this.wishListFacade.removeEntry(item);
  }
};
_WishListComponent.\u0275fac = function WishListComponent_Factory(t) {
  return new (t || _WishListComponent)(\u0275\u0275directiveInject(WishListFacade));
};
_WishListComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
  type: _WishListComponent,
  selectors: [["cx-wish-list"]],
  decls: 4,
  vars: 3,
  consts: [["emptyWishList", ""], [4, "ngIf"], ["role", "table", 4, "ngIf", "ngIfElse"], ["role", "table"], [1, "cx-visually-hidden"], ["role", "row", 1, "cx-item-list-header", "cx-wish-list-header"], ["role", "columnheader", 1, "cx-item-list-desc"], ["role", "columnheader", 1, "cx-item-list-price"], ["role", "columnheader", 1, "cx-item-list-actions"], [1, "cx-item-list-items"], ["cx-wish-list-item", "", "role", "row", "class", "cx-item-list-row cx-wish-list-item-row", 3, "cartEntry", "isLoading", "remove", 4, "ngFor", "ngForOf"], ["cx-wish-list-item", "", "role", "row", 1, "cx-item-list-row", "cx-wish-list-item-row", 3, "remove", "cartEntry", "isLoading"]],
  template: function WishListComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275template(0, WishListComponent_ng_container_0_Template, 2, 2, "ng-container", 1);
      \u0275\u0275pipe(1, "async");
      \u0275\u0275template(2, WishListComponent_ng_template_2_Template, 3, 3, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
    }
    if (rf & 2) {
      \u0275\u0275property("ngIf", \u0275\u0275pipeBind1(1, 1, ctx.wishList$));
    }
  },
  dependencies: [NgForOf, NgIf, WishListItemComponent, AsyncPipe, TranslatePipe],
  encapsulation: 2
});
var WishListComponent = _WishListComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(WishListComponent, [{
    type: Component,
    args: [{
      selector: "cx-wish-list",
      template: `<ng-container *ngIf="wishList$ | async as wishList">
  <table role="table" *ngIf="wishList?.entries?.length > 0; else emptyWishList">
    <caption class="cx-visually-hidden">
      {{
        'wishlist.caption' | cxTranslate
      }}
    </caption>
    <thead>
      <tr role="row" class="cx-item-list-header cx-wish-list-header">
        <th role="columnheader" class="cx-item-list-desc">
          {{ 'cartItems.description' | cxTranslate }}
        </th>
        <th role="columnheader" class="cx-item-list-price">
          {{ 'cartItems.itemPrice' | cxTranslate }}
        </th>
        <th role="columnheader" class="cx-item-list-actions">
          {{ 'cartItems.actions' | cxTranslate }}
        </th>
      </tr>
    </thead>
    <tbody class="cx-item-list-items">
      <tr
        cx-wish-list-item
        role="row"
        class="cx-item-list-row cx-wish-list-item-row"
        *ngFor="let entry of wishList?.entries"
        [cartEntry]="entry"
        [isLoading]="loading$ | async"
        (remove)="removeEntry($event)"
      ></tr>
    </tbody>
  </table>
</ng-container>

<ng-template #emptyWishList>
  <h2>{{ 'wishlist.empty' | cxTranslate }}</h2>
</ng-template>
`
    }]
  }], () => [{
    type: WishListFacade
  }], null);
})();
var _WishListComponentsModule = class _WishListComponentsModule {
};
_WishListComponentsModule.\u0275fac = function WishListComponentsModule_Factory(t) {
  return new (t || _WishListComponentsModule)();
};
_WishListComponentsModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
  type: _WishListComponentsModule
});
_WishListComponentsModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
  providers: [provideDefaultConfig({
    cmsComponents: {
      WishListComponent: {
        component: WishListComponent,
        data: {
          composition: {
            inner: ["ProductAddToCartComponent"]
          }
        },
        guards: [AuthGuard]
      }
    }
  })],
  imports: [AtMessageModule, CommonModule, I18nModule, ItemCounterModule, MediaModule, PageComponentModule, RouterModule, StarRatingModule, UrlModule]
});
var WishListComponentsModule = _WishListComponentsModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(WishListComponentsModule, [{
    type: NgModule,
    args: [{
      imports: [AtMessageModule, CommonModule, I18nModule, ItemCounterModule, MediaModule, PageComponentModule, RouterModule, StarRatingModule, UrlModule],
      providers: [provideDefaultConfig({
        cmsComponents: {
          WishListComponent: {
            component: WishListComponent,
            data: {
              composition: {
                inner: ["ProductAddToCartComponent"]
              }
            },
            guards: [AuthGuard]
          }
        }
      })],
      declarations: [WishListComponent, WishListItemComponent],
      exports: [WishListComponent, WishListItemComponent]
    }]
  }], null, null);
})();

// node_modules/@spartacus/cart/fesm2022/spartacus-cart-wish-list-core.mjs
var CREATE_WISH_LIST = "[Wish List] Create Wish List";
var CREATE_WISH_LIST_FAIL = "[Wish List] Create Wish List Fail";
var CREATE_WISH_LIST_SUCCESS = "[Wish List] Create Wish List Success";
var LOAD_WISH_LIST = "[Wish List] Load Wish List";
var LOAD_WISH_LIST_SUCCESS = "[Wish List] Load Wish List Success";
var LOAD_WISH_LIST_FAIL = "[Wish List] Load Wish List Fail";
var CreateWishList = class {
  constructor(payload) {
    this.payload = payload;
    this.type = CREATE_WISH_LIST;
  }
};
var CreateWishListSuccess = class extends utilsGroup.EntitySuccessAction {
  constructor(payload) {
    super(MULTI_CART_DATA, payload.cartId);
    this.payload = payload;
    this.type = CREATE_WISH_LIST_SUCCESS;
  }
};
var CreateWishListFail = class extends utilsGroup.EntityFailAction {
  constructor(payload) {
    super(MULTI_CART_DATA, payload.cartId, payload.error);
    this.payload = payload;
    this.type = CREATE_WISH_LIST_FAIL;
  }
};
var LoadWishList = class extends utilsGroup.EntityLoadAction {
  constructor(payload) {
    super(MULTI_CART_DATA, payload.cartId);
    this.payload = payload;
    this.type = LOAD_WISH_LIST;
  }
};
var LoadWishListSuccess = class extends utilsGroup.EntitySuccessAction {
  constructor(payload) {
    super(MULTI_CART_DATA, payload.cartId);
    this.payload = payload;
    this.type = LOAD_WISH_LIST_SUCCESS;
  }
};
var LoadWishListFail = class extends utilsGroup.EntityFailAction {
  constructor(payload) {
    super(MULTI_CART_DATA, payload.cartId, payload.error);
    this.payload = payload;
    this.type = LOAD_WISH_LIST_FAIL;
  }
};
function getWishlistName(customerId) {
  return `wishlist${customerId}`;
}
var _WishListService = class _WishListService {
  constructor(store, userAccountFacade, multiCartFacade, userIdService) {
    this.store = store;
    this.userAccountFacade = userAccountFacade;
    this.multiCartFacade = multiCartFacade;
    this.userIdService = userIdService;
  }
  createWishList(userId, name, description) {
    this.store.dispatch(new CreateWishList({
      userId,
      name,
      description
    }));
  }
  getWishList() {
    return combineLatest([this.getWishListId(), this.userAccountFacade.get(), this.userIdService.getUserId()]).pipe(distinctUntilChanged(), tap(([wishListId, user, userId]) => {
      if (!Boolean(wishListId) && userId !== OCC_USER_ID_ANONYMOUS && user?.customerId) {
        this.loadWishList(userId, user.customerId);
      }
    }), filter(([wishListId]) => Boolean(wishListId)), switchMap(([wishListId]) => this.multiCartFacade.getCart(wishListId)));
  }
  loadWishList(userId, customerId) {
    this.store.dispatch(new LoadWishList({
      userId,
      cartId: getWishlistName(customerId)
    }));
  }
  addEntry(productCode) {
    this.getWishListIdWithUserId().subscribe(([wishListId, userId]) => this.multiCartFacade.addEntry(userId, wishListId, productCode, 1));
  }
  removeEntry(entry) {
    this.getWishListIdWithUserId().subscribe(([wishListId, userId]) => this.multiCartFacade.removeEntry(userId, wishListId, entry.entryNumber));
  }
  getWishListLoading() {
    return this.getWishListId().pipe(switchMap((wishListId) => this.multiCartFacade.isStable(wishListId).pipe(map((stable) => !stable))));
  }
  getWishListId() {
    return this.multiCartFacade.getCartIdByType(CartType.WISH_LIST);
  }
  getWishListIdWithUserId() {
    return this.getWishListId().pipe(distinctUntilChanged(), withLatestFrom(this.userIdService.getUserId(), this.userAccountFacade.get()), tap(([wishListId, userId, user]) => {
      if (!Boolean(wishListId) && user?.customerId) {
        this.loadWishList(userId, user.customerId);
      }
    }), filter(([wishListId]) => Boolean(wishListId)), map(([wishListId, userId]) => [wishListId, userId]), take(1));
  }
};
_WishListService.\u0275fac = function WishListService_Factory(t) {
  return new (t || _WishListService)(\u0275\u0275inject(Store), \u0275\u0275inject(UserAccountFacade), \u0275\u0275inject(MultiCartFacade), \u0275\u0275inject(UserIdService));
};
_WishListService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
  token: _WishListService,
  factory: _WishListService.\u0275fac
});
var WishListService = _WishListService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(WishListService, [{
    type: Injectable
  }], () => [{
    type: Store
  }, {
    type: UserAccountFacade
  }, {
    type: MultiCartFacade
  }, {
    type: UserIdService
  }], null);
})();
var facadeProviders = [WishListService, {
  provide: WishListFacade,
  useExisting: WishListService
}];
var _WishListEffects = class _WishListEffects {
  constructor(actions$, cartConnector, userIdService, store) {
    this.actions$ = actions$;
    this.cartConnector = cartConnector;
    this.userIdService = userIdService;
    this.store = store;
    this.logger = inject(LoggerService);
    this.createWishList$ = createEffect(() => this.actions$.pipe(ofType(CREATE_WISH_LIST), map((action) => action.payload), switchMap((payload) => {
      return this.cartConnector.create(payload.userId).pipe(switchMap((cart) => {
        return this.cartConnector.save(payload.userId, cart.code ?? "", payload.name, payload.description).pipe(switchMap((savedCart) => [new CreateWishListSuccess({
          cart: savedCart,
          cartId: getCartIdByUserId(savedCart, payload.userId)
        })]), catchError((error) => from([new CreateWishListFail({
          cartId: cart.code ?? "",
          error: normalizeHttpError(error, this.logger)
        })])));
      }));
    })));
    this.loadWishList$ = createEffect(() => this.actions$.pipe(ofType(LOAD_WISH_LIST), map((action) => action.payload), concatMap((payload) => {
      const {
        userId,
        cartId
      } = payload;
      return this.cartConnector.loadAll(userId).pipe(switchMap((carts) => {
        const wishListName = cartId;
        const wishList = carts.find((cart) => cart.name === wishListName);
        const actions = [];
        actions.push(wishList ? new LoadWishListSuccess({
          cart: wishList,
          cartId: getCartIdByUserId(wishList, userId)
        }) : new CreateWishList({
          userId,
          name: wishListName
        }));
        actions.push(new cartGroup_actions.RemoveCart({
          cartId: wishListName
        }));
        return actions;
      }), catchError((error) => from([new LoadWishListFail({
        cartId,
        error: normalizeHttpError(error, this.logger)
      })])));
    })));
    this.resetWishList$ = createEffect(() => this.actions$.pipe(ofType(siteContextGroup_actions.LANGUAGE_CHANGE, siteContextGroup_actions.CURRENCY_CHANGE), withLatestFrom(this.userIdService.getUserId(), this.store.pipe(filter((store2) => !!store2.cart), select(multiCartGroup_selectors.getCartIdByTypeFactory(CartType.WISH_LIST)))), switchMap(([, userId, wishListId]) => {
      if (Boolean(wishListId)) {
        return this.cartConnector.load(userId, wishListId).pipe(switchMap((wishList) => [new LoadWishListSuccess({
          cart: wishList ?? {},
          cartId: getCartIdByUserId(wishList, userId)
        })]), catchError((error) => from([new LoadWishListFail({
          cartId: wishListId,
          error: normalizeHttpError(error, this.logger)
        })])));
      }
      return EMPTY;
    })));
    this.setWishListId$ = createEffect(() => this.actions$.pipe(ofType(CREATE_WISH_LIST_SUCCESS, LOAD_WISH_LIST_SUCCESS), map((action) => {
      switch (action.type) {
        case CREATE_WISH_LIST_SUCCESS:
        case LOAD_WISH_LIST_SUCCESS: {
          return new cartGroup_actions.SetCartTypeIndex({
            cartType: CartType.WISH_LIST,
            cartId: action.meta.entityId
          });
        }
      }
    }), filter(isNotUndefined)));
    this.setWishListData$ = createEffect(() => this.actions$.pipe(ofType(CREATE_WISH_LIST_SUCCESS, LOAD_WISH_LIST_SUCCESS), map((action) => {
      switch (action.type) {
        case CREATE_WISH_LIST_SUCCESS:
        case LOAD_WISH_LIST_SUCCESS: {
          return new cartGroup_actions.SetCartData({
            cart: action.payload.cart,
            cartId: action.payload.cartId
          });
        }
      }
    }), filter(isNotUndefined)));
  }
};
_WishListEffects.\u0275fac = function WishListEffects_Factory(t) {
  return new (t || _WishListEffects)(\u0275\u0275inject(Actions), \u0275\u0275inject(CartConnector), \u0275\u0275inject(UserIdService), \u0275\u0275inject(Store));
};
_WishListEffects.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
  token: _WishListEffects,
  factory: _WishListEffects.\u0275fac
});
var WishListEffects = _WishListEffects;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(WishListEffects, [{
    type: Injectable
  }], () => [{
    type: Actions
  }, {
    type: CartConnector
  }, {
    type: UserIdService
  }, {
    type: Store
  }], null);
})();
var effects = [WishListEffects];
var _WishListStoreModule = class _WishListStoreModule {
};
_WishListStoreModule.\u0275fac = function WishListStoreModule_Factory(t) {
  return new (t || _WishListStoreModule)();
};
_WishListStoreModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
  type: _WishListStoreModule
});
_WishListStoreModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
  imports: [EffectsModule.forFeature(effects)]
});
var WishListStoreModule = _WishListStoreModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(WishListStoreModule, [{
    type: NgModule,
    args: [{
      imports: [EffectsModule.forFeature(effects)]
    }]
  }], null, null);
})();
var _WishListCoreModule = class _WishListCoreModule {
};
_WishListCoreModule.\u0275fac = function WishListCoreModule_Factory(t) {
  return new (t || _WishListCoreModule)();
};
_WishListCoreModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
  type: _WishListCoreModule
});
_WishListCoreModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
  providers: [...facadeProviders],
  imports: [WishListStoreModule]
});
var WishListCoreModule = _WishListCoreModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(WishListCoreModule, [{
    type: NgModule,
    args: [{
      imports: [WishListStoreModule],
      providers: [...facadeProviders]
    }]
  }], null, null);
})();

// node_modules/@spartacus/cart/fesm2022/spartacus-cart-wish-list.mjs
var _WishListModule = class _WishListModule {
};
_WishListModule.\u0275fac = function WishListModule_Factory(t) {
  return new (t || _WishListModule)();
};
_WishListModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
  type: _WishListModule
});
_WishListModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
  imports: [WishListComponentsModule, WishListCoreModule]
});
var WishListModule = _WishListModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(WishListModule, [{
    type: NgModule,
    args: [{
      imports: [WishListComponentsModule, WishListCoreModule]
    }]
  }], null, null);
})();
export {
  WishListModule
};
//# sourceMappingURL=chunk-N2FDZGGH.js.map
