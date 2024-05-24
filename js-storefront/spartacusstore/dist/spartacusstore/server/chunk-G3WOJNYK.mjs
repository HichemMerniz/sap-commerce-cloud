import './polyfills.server.mjs';
import {
  ActiveCartFacade,
  CartOutlets,
  CartUiEventAddToCart
} from "./chunk-3NCZ7TRR.mjs";
import {
  CmsComponentData,
  CurrentProductService,
  FormGroupDirective,
  ICON_TYPE,
  IconComponent,
  IconModule,
  ItemCounterComponent,
  ItemCounterModule,
  NgControlStatusGroup,
  OutletDirective,
  OutletModule,
  ProductListItemContext,
  ReactiveFormsModule,
  UntypedFormControl,
  UntypedFormGroup,
  ɵNgNoValidate
} from "./chunk-JOGQIABG.mjs";
import {
  EventService,
  I18nModule,
  TranslatePipe,
  isNotNullable,
  provideDefaultConfig
} from "./chunk-AFAMYKVR.mjs";
import {
  AsyncPipe,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  CommonModule,
  Component,
  ComponentRef$1,
  Input,
  NgClass,
  NgIf,
  NgModule,
  Optional,
  filter,
  map,
  setClassMetadata,
  take,
  ɵɵadvance,
  ɵɵattribute,
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
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-3LP6MEWW.mjs";

// node_modules/@spartacus/cart/fesm2022/spartacus-cart-base-components-add-to-cart.mjs
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

export {
  AddToCartComponent,
  AddToCartModule
};
//# sourceMappingURL=chunk-G3WOJNYK.mjs.map
