import {
  CurrentProductService
} from "./chunk-TEI6YMHW.js";
import {
  AsyncPipe,
  ChangeDetectionStrategy,
  CommonModule,
  Component,
  I18nModule,
  Injectable,
  Input,
  NgClass,
  NgForOf,
  NgIf,
  NgModule,
  OccConfig,
  ProductService,
  Router,
  RouterModule,
  RoutingService,
  SemanticPathService,
  TranslatePipe,
  UrlModule,
  VariantQualifier,
  VariantType,
  distinctUntilChanged,
  filter,
  isNotNullable,
  isNotUndefined,
  map,
  of,
  provideDefaultConfig,
  setClassMetadata,
  switchMap,
  take,
  tap,
  ɵɵadvance,
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
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵpropertyInterpolate,
  ɵɵpureFunction1,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-RJVZANIA.js";

// node_modules/@spartacus/product/fesm2022/spartacus-product-variants-occ.mjs
var defaultOccProductVariantsConfig = {
  backend: {
    occ: {
      endpoints: {
        product: {
          variants: "products/${productCode}?fields=name,purchasable,baseOptions(DEFAULT),baseProduct,variantOptions(DEFAULT),variantType"
        }
      }
    }
  }
};
var _ProductVariantsOccModule = class _ProductVariantsOccModule {
};
_ProductVariantsOccModule.\u0275fac = function ProductVariantsOccModule_Factory(t) {
  return new (t || _ProductVariantsOccModule)();
};
_ProductVariantsOccModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
  type: _ProductVariantsOccModule
});
_ProductVariantsOccModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
  providers: [provideDefaultConfig(defaultOccProductVariantsConfig)],
  imports: [CommonModule]
});
var ProductVariantsOccModule = _ProductVariantsOccModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProductVariantsOccModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule],
      providers: [provideDefaultConfig(defaultOccProductVariantsConfig)]
    }]
  }], null, null);
})();

// node_modules/@spartacus/product/fesm2022/spartacus-product-variants-components.mjs
function ProductVariantColorSelectorComponent_option_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 4);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const v_r1 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275propertyInterpolate("value", v_r1.code);
    \u0275\u0275property("selected", v_r1.code === (ctx_r1.product == null ? null : ctx_r1.product.code));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getVariantOptionValue(v_r1.variantOptionQualifiers), " ");
  }
}
function ProductVariantSizeSelectorComponent_option_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 5);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const v_r1 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275propertyInterpolate("value", v_r1.code);
    \u0275\u0275property("selected", v_r1.code === (ctx_r1.product == null ? null : ctx_r1.product.code));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getVariantOptionValue(v_r1.variantOptionQualifiers), " ");
  }
}
var _c0 = (a0) => ({
  "selected-variant": a0
});
function ProductVariantStyleSelectorComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "cxTranslate");
    \u0275\u0275elementStart(3, "span", 5);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 2, "productVariants.style"), ": ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.getVariantOptionValue(ctx_r0.variants == null ? null : ctx_r0.variants.selected.variantOptionQualifiers));
  }
}
function ProductVariantStyleSelectorComponent_li_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li", 6)(1, "button", 7);
    \u0275\u0275listener("click", function ProductVariantStyleSelectorComponent_li_4_Template_button_click_1_listener() {
      const v_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.changeStyle(v_r3.code));
    });
    \u0275\u0275element(2, "img", 8);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const v_r3 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(4, _c0, v_r3.code === (ctx_r0.variants == null ? null : ctx_r0.variants.selected == null ? null : ctx_r0.variants.selected.code)));
    \u0275\u0275advance(2);
    \u0275\u0275propertyInterpolate("src", ctx_r0.getVariantThumbnailUrl(v_r3.variantOptionQualifiers), \u0275\u0275sanitizeUrl);
    \u0275\u0275propertyInterpolate("title", ctx_r0.getVariantOptionValue(v_r3.variantOptionQualifiers));
    \u0275\u0275propertyInterpolate("alt", ctx_r0.getVariantOptionValue(v_r3.variantOptionQualifiers));
  }
}
function ProductVariantsContainerComponent_ng_container_0_div_1_cx_product_variant_style_selector_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "cx-product-variant-style-selector", 5);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275property("variants", ctx_r0.variants[ctx_r0.variantType.STYLE]);
  }
}
function ProductVariantsContainerComponent_ng_container_0_div_1_cx_product_variant_size_selector_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "cx-product-variant-size-selector", 6);
  }
  if (rf & 2) {
    const product_r2 = \u0275\u0275nextContext(2).ngIf;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("product", product_r2)("variants", ctx_r0.variants[ctx_r0.variantType.SIZE]);
  }
}
function ProductVariantsContainerComponent_ng_container_0_div_1_cx_product_variant_color_selector_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "cx-product-variant-color-selector", 6);
  }
  if (rf & 2) {
    const product_r2 = \u0275\u0275nextContext(2).ngIf;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("product", product_r2)("variants", ctx_r0.variants[ctx_r0.variantType.COLOR]);
  }
}
function ProductVariantsContainerComponent_ng_container_0_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2);
    \u0275\u0275template(1, ProductVariantsContainerComponent_ng_container_0_div_1_cx_product_variant_style_selector_1_Template, 1, 1, "cx-product-variant-style-selector", 3)(2, ProductVariantsContainerComponent_ng_container_0_div_1_cx_product_variant_size_selector_2_Template, 1, 2, "cx-product-variant-size-selector", 4)(3, ProductVariantsContainerComponent_ng_container_0_div_1_cx_product_variant_color_selector_3_Template, 1, 2, "cx-product-variant-color-selector", 4);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.variants[ctx_r0.variantType.STYLE]);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.variants[ctx_r0.variantType.SIZE]);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.variants[ctx_r0.variantType.COLOR]);
  }
}
function ProductVariantsContainerComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, ProductVariantsContainerComponent_ng_container_0_div_1_Template, 4, 3, "div", 1);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const product_r2 = ctx.ngIf;
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", product_r2.baseOptions == null ? null : product_r2.baseOptions.length);
  }
}
var _ProductVariantColorSelectorComponent = class _ProductVariantColorSelectorComponent {
  constructor(routingService) {
    this.routingService = routingService;
  }
  changeColor(code, name) {
    if (code) {
      this.routingService.go({
        cxRoute: "product",
        params: {
          code,
          name
        }
      });
    }
    return null;
  }
  getVariantOptionValue(qualifiers) {
    const obj = qualifiers.find((q) => q.qualifier === VariantQualifier.COLOR);
    return obj ? obj.value : "";
  }
};
_ProductVariantColorSelectorComponent.\u0275fac = function ProductVariantColorSelectorComponent_Factory(t) {
  return new (t || _ProductVariantColorSelectorComponent)(\u0275\u0275directiveInject(RoutingService));
};
_ProductVariantColorSelectorComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
  type: _ProductVariantColorSelectorComponent,
  selectors: [["cx-product-variant-color-selector"]],
  inputs: {
    product: "product",
    variants: "variants"
  },
  decls: 7,
  vars: 4,
  consts: [[1, "variant-selector"], [1, "variant-name"], [1, "form-control", "variant-select", 3, "change"], [3, "value", "selected", 4, "ngFor", "ngForOf"], [3, "value", "selected"]],
  template: function ProductVariantColorSelectorComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementContainerStart(0);
      \u0275\u0275elementStart(1, "div", 0)(2, "div", 1);
      \u0275\u0275text(3);
      \u0275\u0275pipe(4, "cxTranslate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "select", 2);
      \u0275\u0275listener("change", function ProductVariantColorSelectorComponent_Template_select_change_5_listener($event) {
        return ctx.changeColor($event.target.value, ctx.product == null ? null : ctx.product.name);
      });
      \u0275\u0275template(6, ProductVariantColorSelectorComponent_option_6_Template, 2, 3, "option", 3);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementContainerEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(4, 2, "productVariants.color"), ":");
      \u0275\u0275advance(3);
      \u0275\u0275property("ngForOf", ctx.variants == null ? null : ctx.variants.options);
    }
  },
  dependencies: [NgForOf, TranslatePipe],
  encapsulation: 2,
  changeDetection: 0
});
var ProductVariantColorSelectorComponent = _ProductVariantColorSelectorComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProductVariantColorSelectorComponent, [{
    type: Component,
    args: [{
      selector: "cx-product-variant-color-selector",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: `<ng-container>
  <div class="variant-selector">
    <div class="variant-name">{{ 'productVariants.color' | cxTranslate }}:</div>

    <select
      (change)="changeColor($event.target.value, product?.name)"
      class="form-control variant-select"
    >
      <option
        *ngFor="let v of variants?.options"
        value="{{ v.code }}"
        [selected]="v.code === product?.code"
      >
        {{ getVariantOptionValue(v.variantOptionQualifiers) }}
      </option>
    </select>
  </div>
</ng-container>
`
    }]
  }], () => [{
    type: RoutingService
  }], {
    product: [{
      type: Input
    }],
    variants: [{
      type: Input
    }]
  });
})();
var _ProductVariantColorSelectorModule = class _ProductVariantColorSelectorModule {
};
_ProductVariantColorSelectorModule.\u0275fac = function ProductVariantColorSelectorModule_Factory(t) {
  return new (t || _ProductVariantColorSelectorModule)();
};
_ProductVariantColorSelectorModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
  type: _ProductVariantColorSelectorModule
});
_ProductVariantColorSelectorModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
  imports: [CommonModule, RouterModule, UrlModule, I18nModule]
});
var ProductVariantColorSelectorModule = _ProductVariantColorSelectorModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProductVariantColorSelectorModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, RouterModule, UrlModule, I18nModule],
      declarations: [ProductVariantColorSelectorComponent],
      exports: [ProductVariantColorSelectorComponent]
    }]
  }], null, null);
})();
var _ProductVariantSizeSelectorComponent = class _ProductVariantSizeSelectorComponent {
  constructor(productService, routingService) {
    this.productService = productService;
    this.routingService = routingService;
  }
  changeSize(code) {
    if (code) {
      this.productService.get(
        code,
        "list"
        /* ProductScope.LIST */
      ).pipe(
        // below call might looks redundant but in fact this data is going to be loaded anyways
        // we're just calling it earlier and storing
        filter(isNotUndefined),
        take(1)
      ).subscribe((product) => {
        this.routingService.go({
          cxRoute: "product",
          params: product
        });
      });
    }
    return null;
  }
  getVariantOptionValue(qualifiers) {
    const obj = qualifiers.find((q) => q.qualifier === VariantQualifier.SIZE);
    return obj ? obj.value : "";
  }
};
_ProductVariantSizeSelectorComponent.\u0275fac = function ProductVariantSizeSelectorComponent_Factory(t) {
  return new (t || _ProductVariantSizeSelectorComponent)(\u0275\u0275directiveInject(ProductService), \u0275\u0275directiveInject(RoutingService));
};
_ProductVariantSizeSelectorComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
  type: _ProductVariantSizeSelectorComponent,
  selectors: [["cx-product-variant-size-selector"]],
  inputs: {
    product: "product",
    variants: "variants"
  },
  decls: 11,
  vars: 10,
  consts: [[1, "variant-selector"], [1, "variant-name"], [1, "form-control", "variant-select", 3, "change"], [3, "value", "selected", 4, "ngFor", "ngForOf"], ["href", "#", 1, "size-guide", 3, "title"], [3, "value", "selected"]],
  template: function ProductVariantSizeSelectorComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementContainerStart(0);
      \u0275\u0275elementStart(1, "div", 0)(2, "div", 1);
      \u0275\u0275text(3);
      \u0275\u0275pipe(4, "cxTranslate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "select", 2);
      \u0275\u0275listener("change", function ProductVariantSizeSelectorComponent_Template_select_change_5_listener($event) {
        return ctx.changeSize($event.target.value);
      });
      \u0275\u0275template(6, ProductVariantSizeSelectorComponent_option_6_Template, 2, 3, "option", 3);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "a", 4);
      \u0275\u0275pipe(8, "cxTranslate");
      \u0275\u0275text(9);
      \u0275\u0275pipe(10, "cxTranslate");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementContainerEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(4, 4, "productVariants.size"), ":");
      \u0275\u0275advance(3);
      \u0275\u0275property("ngForOf", ctx.variants == null ? null : ctx.variants.options);
      \u0275\u0275advance();
      \u0275\u0275propertyInterpolate("title", \u0275\u0275pipeBind1(8, 6, "productVariants.sizeGuideLabel"));
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(10, 8, "productVariants.sizeGuideLabel"), " ");
    }
  },
  dependencies: [NgForOf, TranslatePipe],
  encapsulation: 2,
  changeDetection: 0
});
var ProductVariantSizeSelectorComponent = _ProductVariantSizeSelectorComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProductVariantSizeSelectorComponent, [{
    type: Component,
    args: [{
      selector: "cx-product-variant-size-selector",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: `<ng-container>
  <div class="variant-selector">
    <div class="variant-name">{{ 'productVariants.size' | cxTranslate }}:</div>
    <select
      (change)="changeSize($event.target.value)"
      class="form-control variant-select"
    >
      <option
        *ngFor="let v of variants?.options"
        value="{{ v.code }}"
        [selected]="v.code === product?.code"
      >
        {{ getVariantOptionValue(v.variantOptionQualifiers) }}
      </option>
    </select>
    <a
      href="#"
      class="size-guide"
      title="{{ 'productVariants.sizeGuideLabel' | cxTranslate }}"
    >
      {{ 'productVariants.sizeGuideLabel' | cxTranslate }}
    </a>
  </div>
</ng-container>
`
    }]
  }], () => [{
    type: ProductService
  }, {
    type: RoutingService
  }], {
    product: [{
      type: Input
    }],
    variants: [{
      type: Input
    }]
  });
})();
var _ProductVariantSizeSelectorModule = class _ProductVariantSizeSelectorModule {
};
_ProductVariantSizeSelectorModule.\u0275fac = function ProductVariantSizeSelectorModule_Factory(t) {
  return new (t || _ProductVariantSizeSelectorModule)();
};
_ProductVariantSizeSelectorModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
  type: _ProductVariantSizeSelectorModule
});
_ProductVariantSizeSelectorModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
  imports: [CommonModule, RouterModule, UrlModule, I18nModule]
});
var ProductVariantSizeSelectorModule = _ProductVariantSizeSelectorModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProductVariantSizeSelectorModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, RouterModule, UrlModule, I18nModule],
      declarations: [ProductVariantSizeSelectorComponent],
      exports: [ProductVariantSizeSelectorComponent]
    }]
  }], null, null);
})();
var _ProductVariantStyleSelectorComponent = class _ProductVariantStyleSelectorComponent {
  constructor(config, productService, routingService) {
    this.config = config;
    this.productService = productService;
    this.routingService = routingService;
    this.variantQualifier = VariantQualifier;
  }
  getVariantOptionValue(qualifiers) {
    const obj = qualifiers.find((q) => q.qualifier === VariantQualifier.STYLE);
    return obj ? obj.value : "";
  }
  getVariantThumbnailUrl(variantOptionQualifiers) {
    const qualifier = variantOptionQualifiers.find((item) => item.image);
    return qualifier ? `${this.config?.backend?.occ?.baseUrl}${qualifier.image?.url}` : "";
  }
  changeStyle(code) {
    if (code) {
      this.productService.get(
        code,
        "list"
        /* ProductScope.LIST */
      ).pipe(
        // below call might looks redundant but in fact this data is going to be loaded anyways
        // we're just calling it earlier and storing
        filter(isNotUndefined),
        take(1)
      ).subscribe((product) => {
        this.routingService.go({
          cxRoute: "product",
          params: product
        });
      });
    }
    return null;
  }
};
_ProductVariantStyleSelectorComponent.\u0275fac = function ProductVariantStyleSelectorComponent_Factory(t) {
  return new (t || _ProductVariantStyleSelectorComponent)(\u0275\u0275directiveInject(OccConfig), \u0275\u0275directiveInject(ProductService), \u0275\u0275directiveInject(RoutingService));
};
_ProductVariantStyleSelectorComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
  type: _ProductVariantStyleSelectorComponent,
  selectors: [["cx-product-variant-style-selector"]],
  inputs: {
    variants: "variants"
  },
  decls: 5,
  vars: 2,
  consts: [[1, "variant-selector"], ["class", "variant-name", 4, "ngIf"], [1, "variant-list"], [3, "ngClass", 4, "ngFor", "ngForOf"], [1, "variant-name"], [1, "style-name"], [3, "ngClass"], [1, "variant-button", 3, "click"], [3, "src", "title", "alt"]],
  template: function ProductVariantStyleSelectorComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementContainerStart(0);
      \u0275\u0275elementStart(1, "div", 0);
      \u0275\u0275template(2, ProductVariantStyleSelectorComponent_div_2_Template, 5, 4, "div", 1);
      \u0275\u0275elementStart(3, "ul", 2);
      \u0275\u0275template(4, ProductVariantStyleSelectorComponent_li_4_Template, 3, 6, "li", 3);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementContainerEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.variants.selected);
      \u0275\u0275advance(2);
      \u0275\u0275property("ngForOf", ctx.variants == null ? null : ctx.variants.options);
    }
  },
  dependencies: [NgClass, NgForOf, NgIf, TranslatePipe],
  encapsulation: 2,
  changeDetection: 0
});
var ProductVariantStyleSelectorComponent = _ProductVariantStyleSelectorComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProductVariantStyleSelectorComponent, [{
    type: Component,
    args: [{
      selector: "cx-product-variant-style-selector",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: `<ng-container>
  <div class="variant-selector">
    <div *ngIf="variants.selected" class="variant-name">
      {{ 'productVariants.style' | cxTranslate }}:
      <span class="style-name">{{
        getVariantOptionValue(variants?.selected.variantOptionQualifiers)
      }}</span>
    </div>
    <ul class="variant-list">
      <li
        *ngFor="let v of variants?.options"
        [ngClass]="{ 'selected-variant': v.code === variants?.selected?.code }"
      >
        <button class="variant-button" (click)="changeStyle(v.code)">
          <img
            src="{{ getVariantThumbnailUrl(v.variantOptionQualifiers) }}"
            title="{{ getVariantOptionValue(v.variantOptionQualifiers) }}"
            alt="{{ getVariantOptionValue(v.variantOptionQualifiers) }}"
          />
        </button>
      </li>
    </ul>
  </div>
</ng-container>
`
    }]
  }], () => [{
    type: OccConfig
  }, {
    type: ProductService
  }, {
    type: RoutingService
  }], {
    variants: [{
      type: Input
    }]
  });
})();
var _ProductVariantStyleSelectorModule = class _ProductVariantStyleSelectorModule {
};
_ProductVariantStyleSelectorModule.\u0275fac = function ProductVariantStyleSelectorModule_Factory(t) {
  return new (t || _ProductVariantStyleSelectorModule)();
};
_ProductVariantStyleSelectorModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
  type: _ProductVariantStyleSelectorModule
});
_ProductVariantStyleSelectorModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
  imports: [CommonModule, RouterModule, UrlModule, I18nModule]
});
var ProductVariantStyleSelectorModule = _ProductVariantStyleSelectorModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProductVariantStyleSelectorModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, RouterModule, UrlModule, I18nModule],
      declarations: [ProductVariantStyleSelectorComponent],
      exports: [ProductVariantStyleSelectorComponent]
    }]
  }], null, null);
})();
var _ProductVariantsContainerComponent = class _ProductVariantsContainerComponent {
  constructor(currentProductService) {
    this.currentProductService = currentProductService;
    this.variants = {};
    this.variantType = VariantType;
  }
  ngOnInit() {
    this.product$ = this.currentProductService.getProduct().pipe(filter(isNotNullable), filter((product) => !!product.baseOptions), distinctUntilChanged(), tap((product) => {
      product.baseOptions.forEach((option) => {
        if (option?.variantType) {
          this.variants[option.variantType] = option;
        }
      });
    }));
  }
};
_ProductVariantsContainerComponent.\u0275fac = function ProductVariantsContainerComponent_Factory(t) {
  return new (t || _ProductVariantsContainerComponent)(\u0275\u0275directiveInject(CurrentProductService));
};
_ProductVariantsContainerComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
  type: _ProductVariantsContainerComponent,
  selectors: [["cx-product-variants-container"]],
  decls: 2,
  vars: 3,
  consts: [[4, "ngIf"], ["class", "variant-section", 4, "ngIf"], [1, "variant-section"], [3, "variants", 4, "ngIf"], [3, "product", "variants", 4, "ngIf"], [3, "variants"], [3, "product", "variants"]],
  template: function ProductVariantsContainerComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275template(0, ProductVariantsContainerComponent_ng_container_0_Template, 2, 1, "ng-container", 0);
      \u0275\u0275pipe(1, "async");
    }
    if (rf & 2) {
      \u0275\u0275property("ngIf", \u0275\u0275pipeBind1(1, 1, ctx.product$));
    }
  },
  dependencies: [NgIf, ProductVariantStyleSelectorComponent, ProductVariantSizeSelectorComponent, ProductVariantColorSelectorComponent, AsyncPipe],
  encapsulation: 2,
  changeDetection: 0
});
var ProductVariantsContainerComponent = _ProductVariantsContainerComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProductVariantsContainerComponent, [{
    type: Component,
    args: [{
      selector: "cx-product-variants-container",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: '<ng-container *ngIf="product$ | async as product">\n  <div class="variant-section" *ngIf="product.baseOptions?.length">\n    <cx-product-variant-style-selector\n      *ngIf="variants[variantType.STYLE]"\n      [variants]="variants[variantType.STYLE]"\n    ></cx-product-variant-style-selector>\n    <cx-product-variant-size-selector\n      *ngIf="variants[variantType.SIZE]"\n      [product]="product"\n      [variants]="variants[variantType.SIZE]"\n    ></cx-product-variant-size-selector>\n    <cx-product-variant-color-selector\n      *ngIf="variants[variantType.COLOR]"\n      [product]="product"\n      [variants]="variants[variantType.COLOR]"\n    ></cx-product-variant-color-selector>\n  </div>\n</ng-container>\n'
    }]
  }], () => [{
    type: CurrentProductService
  }], null);
})();
var _ProductVariantsContainerModule = class _ProductVariantsContainerModule {
};
_ProductVariantsContainerModule.\u0275fac = function ProductVariantsContainerModule_Factory(t) {
  return new (t || _ProductVariantsContainerModule)();
};
_ProductVariantsContainerModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
  type: _ProductVariantsContainerModule
});
_ProductVariantsContainerModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
  imports: [CommonModule, RouterModule, UrlModule, I18nModule, ProductVariantStyleSelectorModule, ProductVariantSizeSelectorModule, ProductVariantColorSelectorModule]
});
var ProductVariantsContainerModule = _ProductVariantsContainerModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProductVariantsContainerModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, RouterModule, UrlModule, I18nModule, ProductVariantStyleSelectorModule, ProductVariantSizeSelectorModule, ProductVariantColorSelectorModule],
      declarations: [ProductVariantsContainerComponent]
    }]
  }], null, null);
})();
var _ProductVariantsGuard = class _ProductVariantsGuard {
  constructor(productService, semanticPathService, router) {
    this.productService = productService;
    this.semanticPathService = semanticPathService;
    this.router = router;
  }
  canActivate(activatedRoute) {
    const productCode = activatedRoute.params?.productCode;
    if (!productCode) {
      return of(true);
    }
    return this.productService.get(
      productCode,
      "variants"
      /* ProductScope.VARIANTS */
    ).pipe(filter(isNotUndefined), switchMap((product) => {
      if (!product.purchasable) {
        const purchasableCode = this.findPurchasableProductCode(product);
        if (purchasableCode) {
          return this.productService.get(
            purchasableCode,
            "list"
            /* ProductScope.LIST */
          ).pipe(filter(isNotUndefined), take(1), map((_product) => {
            return this.router.createUrlTree(this.semanticPathService.transform({
              cxRoute: "product",
              params: _product
            }));
          }));
        }
      }
      return of(true);
    }));
  }
  /**
   * Finds a purchasable product code looking at variant options, if any
   *
   * @param product
   */
  findPurchasableProductCode(product) {
    if (product.variantOptions?.length) {
      const results = product.variantOptions.filter((variant) => {
        return variant.stock && variant.stock.stockLevel ? variant : false;
      });
      return results && results.length ? results[0]?.code : product.variantOptions[0]?.code;
    }
    return void 0;
  }
};
_ProductVariantsGuard.\u0275fac = function ProductVariantsGuard_Factory(t) {
  return new (t || _ProductVariantsGuard)(\u0275\u0275inject(ProductService), \u0275\u0275inject(SemanticPathService), \u0275\u0275inject(Router));
};
_ProductVariantsGuard.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
  token: _ProductVariantsGuard,
  factory: _ProductVariantsGuard.\u0275fac,
  providedIn: "root"
});
var ProductVariantsGuard = _ProductVariantsGuard;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProductVariantsGuard, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: ProductService
  }, {
    type: SemanticPathService
  }, {
    type: Router
  }], null);
})();
var _ProductVariantsComponentsModule = class _ProductVariantsComponentsModule {
};
_ProductVariantsComponentsModule.\u0275fac = function ProductVariantsComponentsModule_Factory(t) {
  return new (t || _ProductVariantsComponentsModule)();
};
_ProductVariantsComponentsModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
  type: _ProductVariantsComponentsModule
});
_ProductVariantsComponentsModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
  providers: [provideDefaultConfig({
    cmsComponents: {
      ProductVariantSelectorComponent: {
        component: ProductVariantsContainerComponent,
        guards: [ProductVariantsGuard]
      }
    }
  })],
  imports: [ProductVariantsContainerModule, ProductVariantColorSelectorModule, ProductVariantSizeSelectorModule, ProductVariantStyleSelectorModule]
});
var ProductVariantsComponentsModule = _ProductVariantsComponentsModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProductVariantsComponentsModule, [{
    type: NgModule,
    args: [{
      imports: [ProductVariantsContainerModule, ProductVariantColorSelectorModule, ProductVariantSizeSelectorModule, ProductVariantStyleSelectorModule],
      providers: [provideDefaultConfig({
        cmsComponents: {
          ProductVariantSelectorComponent: {
            component: ProductVariantsContainerComponent,
            guards: [ProductVariantsGuard]
          }
        }
      })]
    }]
  }], null, null);
})();

// node_modules/@spartacus/product/fesm2022/spartacus-product-variants.mjs
var _ProductVariantsModule = class _ProductVariantsModule {
};
_ProductVariantsModule.\u0275fac = function ProductVariantsModule_Factory(t) {
  return new (t || _ProductVariantsModule)();
};
_ProductVariantsModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
  type: _ProductVariantsModule
});
_ProductVariantsModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
  imports: [ProductVariantsOccModule, ProductVariantsComponentsModule]
});
var ProductVariantsModule = _ProductVariantsModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProductVariantsModule, [{
    type: NgModule,
    args: [{
      imports: [ProductVariantsOccModule, ProductVariantsComponentsModule]
    }]
  }], null, null);
})();
export {
  ProductVariantsModule
};
//# sourceMappingURL=chunk-Z74CH3XR.js.map
