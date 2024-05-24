import {
  BREAKPOINT,
  BreakpointService,
  CarouselComponent,
  CarouselModule,
  CurrentProductService,
  DIALOG_TYPE,
  FocusDirective,
  ICON_TYPE,
  IconComponent,
  IconModule,
  KeyboardFocusModule,
  LaunchDialogService,
  MediaComponent,
  MediaModule,
  OutletModule,
  ProductImagesComponent
} from "./chunk-TEI6YMHW.js";
import {
  AsyncPipe,
  BehaviorSubject,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  CommonModule,
  Component,
  ElementRef,
  EventEmitter,
  HostListener,
  I18nModule,
  Input,
  NgIf,
  NgModule,
  Output,
  Renderer2,
  RouterModule,
  Subscription,
  TranslatePipe,
  ViewChild,
  ViewContainerRef,
  combineLatest,
  distinctUntilChanged,
  filter,
  fromEvent,
  isNotNullable,
  map,
  merge,
  of,
  provideDefaultConfig,
  setClassMetadata,
  shareReplay,
  switchMap,
  tap,
  ɵɵInheritDefinitionFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassProp,
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
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate1,
  ɵɵviewQuery
} from "./chunk-RJVZANIA.js";

// node_modules/@spartacus/product/fesm2022/spartacus-product-image-zoom-components.mjs
function ProductImageZoomThumbnailsComponent_ng_container_0_cx_carousel_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "cx-carousel", 3);
  }
  if (rf & 2) {
    const thumbs_r1 = \u0275\u0275nextContext().ngIf;
    \u0275\u0275nextContext();
    const thumb_r2 = \u0275\u0275reference(3);
    \u0275\u0275property("items", thumbs_r1)("hideIndicators", false)("template", thumb_r2);
  }
}
function ProductImageZoomThumbnailsComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, ProductImageZoomThumbnailsComponent_ng_container_0_cx_carousel_1_Template, 1, 3, "cx-carousel", 2);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const thumbs_r1 = ctx.ngIf;
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", thumbs_r1.length);
  }
}
function ProductImageZoomThumbnailsComponent_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "cx-media", 4);
    \u0275\u0275pipe(1, "async");
    \u0275\u0275listener("focus", function ProductImageZoomThumbnailsComponent_ng_template_2_Template_cx_media_focus_0_listener() {
      const item_r4 = \u0275\u0275restoreView(_r3).item;
      const ctx_r4 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r4.openImage(item_r4.container));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r4 = ctx.item;
    const ctx_r4 = \u0275\u0275nextContext();
    \u0275\u0275classProp("is-active", \u0275\u0275pipeBind1(1, 3, ctx_r4.isActive(item_r4.container)));
    \u0275\u0275property("container", item_r4.container);
  }
}
var _c0 = ["defaultImage"];
var _c1 = ["zoomContainer"];
var _c2 = ["zoomedImage"];
function ProductImageZoomViewComponent_ng_container_0_div_1_button_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 11);
    \u0275\u0275listener("click", function ProductImageZoomViewComponent_ng_container_0_div_1_button_2_Template_button_click_0_listener() {
      const previousProduct_r2 = \u0275\u0275restoreView(_r1).ngIf;
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.openImage(previousProduct_r2.container));
    });
    \u0275\u0275element(1, "cx-icon", 12);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("type", ctx_r2.iconType.CARET_LEFT);
  }
}
function ProductImageZoomViewComponent_ng_container_0_div_1_cx_media_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "cx-media", 13, 0);
  }
  if (rf & 2) {
    const main_r4 = \u0275\u0275nextContext(2).ngIf;
    \u0275\u0275property("container", main_r4);
  }
}
function ProductImageZoomViewComponent_ng_container_0_div_1_div_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 14, 1)(2, "cx-media", 15, 2);
    \u0275\u0275listener("mousemove", function ProductImageZoomViewComponent_ng_container_0_div_1_div_5_Template_cx_media_mousemove_2_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.pointerMove($event));
    })("touchmove", function ProductImageZoomViewComponent_ng_container_0_div_1_div_5_Template_cx_media_touchmove_2_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.touchMove($event));
    })("touchend", function ProductImageZoomViewComponent_ng_container_0_div_1_div_5_Template_cx_media_touchend_2_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.clearTouch());
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const main_r4 = \u0275\u0275nextContext(2).ngIf;
    \u0275\u0275advance(2);
    \u0275\u0275property("container", main_r4);
  }
}
function ProductImageZoomViewComponent_ng_container_0_div_1_button_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 11);
    \u0275\u0275listener("click", function ProductImageZoomViewComponent_ng_container_0_div_1_button_7_Template_button_click_0_listener() {
      const nextProduct_r7 = \u0275\u0275restoreView(_r6).ngIf;
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.openImage(nextProduct_r7.container));
    });
    \u0275\u0275element(1, "cx-icon", 12);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("type", ctx_r2.iconType.CARET_RIGHT);
  }
}
function ProductImageZoomViewComponent_ng_container_0_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6)(1, "div", 7);
    \u0275\u0275template(2, ProductImageZoomViewComponent_ng_container_0_div_1_button_2_Template, 2, 1, "button", 8);
    \u0275\u0275pipe(3, "async");
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, ProductImageZoomViewComponent_ng_container_0_div_1_cx_media_4_Template, 2, 1, "cx-media", 9)(5, ProductImageZoomViewComponent_ng_container_0_div_1_div_5_Template, 4, 1, "div", 10);
    \u0275\u0275elementStart(6, "div", 7);
    \u0275\u0275template(7, ProductImageZoomViewComponent_ng_container_0_div_1_button_7_Template, 2, 1, "button", 8);
    \u0275\u0275pipe(8, "async");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const thumbs_r8 = ctx.ngIf;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", \u0275\u0275pipeBind1(3, 4, ctx_r2.getPreviousProduct(thumbs_r8)));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", !ctx_r2.isZoomed);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.isZoomed);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", \u0275\u0275pipeBind1(8, 6, ctx_r2.getNextProduct(thumbs_r8)));
  }
}
function ProductImageZoomViewComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, ProductImageZoomViewComponent_ng_container_0_div_1_Template, 9, 8, "div", 5);
    \u0275\u0275pipe(2, "async");
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", \u0275\u0275pipeBind1(2, 1, ctx_r2.thumbnails$));
  }
}
var _c3 = ["expandButton"];
var _c4 = (a0) => ({
  product: a0
});
function ProductImageZoomProductImagesComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "cx-media", 2);
    \u0275\u0275listener("click", function ProductImageZoomProductImagesComponent_ng_container_0_Template_cx_media_click_1_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.triggerZoom(true));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "cx-product-image-zoom-trigger", 3);
    \u0275\u0275listener("dialogClose", function ProductImageZoomProductImagesComponent_ng_container_0_Template_cx_product_image_zoom_trigger_dialogClose_2_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.triggerZoom(false));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const main_r3 = ctx.ngIf;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("container", main_r3);
    \u0275\u0275advance();
    \u0275\u0275property("expandImage", ctx_r1.expandImage.value)("galleryIndex", ctx_r1.selectedIndex);
  }
}
function ProductImageZoomProductImagesComponent_ng_container_2_ng_container_1_cx_carousel_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "cx-carousel", 5);
    \u0275\u0275pipe(1, "cxTranslate");
  }
  if (rf & 2) {
    const product_r4 = \u0275\u0275nextContext().ngIf;
    const thumbs_r5 = \u0275\u0275nextContext().ngIf;
    \u0275\u0275nextContext();
    const thumb_r6 = \u0275\u0275reference(5);
    \u0275\u0275property("items", thumbs_r5)("hideIndicators", false)("template", thumb_r6);
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind2(1, 4, "carousel.carouselForProduct", \u0275\u0275pureFunction1(7, _c4, product_r4.name)));
  }
}
function ProductImageZoomProductImagesComponent_ng_container_2_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, ProductImageZoomProductImagesComponent_ng_container_2_ng_container_1_cx_carousel_1_Template, 2, 9, "cx-carousel", 4);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const thumbs_r5 = \u0275\u0275nextContext().ngIf;
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", thumbs_r5.length);
  }
}
function ProductImageZoomProductImagesComponent_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, ProductImageZoomProductImagesComponent_ng_container_2_ng_container_1_Template, 2, 1, "ng-container", 1);
    \u0275\u0275pipe(2, "async");
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", \u0275\u0275pipeBind1(2, 1, ctx_r1.product$));
  }
}
function ProductImageZoomProductImagesComponent_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "cx-media", 6);
    \u0275\u0275pipe(1, "async");
    \u0275\u0275listener("focus", function ProductImageZoomProductImagesComponent_ng_template_4_Template_cx_media_focus_0_listener() {
      const item_r8 = \u0275\u0275restoreView(_r7).item;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openImage(item_r8.container));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r8 = ctx.item;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classProp("is-active", \u0275\u0275pipeBind1(1, 3, ctx_r1.isActive(item_r8.container)));
    \u0275\u0275property("container", item_r8.container);
  }
}
var _ProductImageZoomThumbnailsComponent = class _ProductImageZoomThumbnailsComponent {
  constructor() {
    this.mainMediaContainer = new BehaviorSubject({});
    this.productImage = new EventEmitter();
    this.subscription = new Subscription();
  }
  ngOnInit() {
    this.subscription.add(this.activeThumb.subscribe((image) => {
      this.mainMediaContainer.next(image);
    }));
  }
  openImage(image) {
    this.mainMediaContainer.next(image);
    if (typeof image.zoom?.galleryIndex === "number") {
      this.productImage.emit({
        image,
        index: image.zoom.galleryIndex
      });
    }
  }
  isActive(thumbnail) {
    return this.mainMediaContainer.asObservable().pipe(filter(isNotNullable), map((container) => {
      return container.zoom?.url && thumbnail.zoom?.url && container.zoom.url === thumbnail.zoom.url;
    }));
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
};
_ProductImageZoomThumbnailsComponent.\u0275fac = function ProductImageZoomThumbnailsComponent_Factory(t) {
  return new (t || _ProductImageZoomThumbnailsComponent)();
};
_ProductImageZoomThumbnailsComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
  type: _ProductImageZoomThumbnailsComponent,
  selectors: [["cx-product-image-zoom-thumbnails"]],
  inputs: {
    thumbs$: "thumbs$",
    activeThumb: "activeThumb"
  },
  outputs: {
    productImage: "productImage"
  },
  decls: 4,
  vars: 3,
  consts: [["thumb", ""], [4, "ngIf"], ["class", "thumbs", "itemWidth", "70px", 3, "items", "hideIndicators", "template", 4, "ngIf"], ["itemWidth", "70px", 1, "thumbs", 3, "items", "hideIndicators", "template"], ["tabindex", "0", 3, "focus", "container"]],
  template: function ProductImageZoomThumbnailsComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275template(0, ProductImageZoomThumbnailsComponent_ng_container_0_Template, 2, 1, "ng-container", 1);
      \u0275\u0275pipe(1, "async");
      \u0275\u0275template(2, ProductImageZoomThumbnailsComponent_ng_template_2_Template, 2, 5, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
    }
    if (rf & 2) {
      \u0275\u0275property("ngIf", \u0275\u0275pipeBind1(1, 1, ctx.thumbs$));
    }
  },
  dependencies: [CarouselComponent, NgIf, MediaComponent, AsyncPipe],
  encapsulation: 2,
  changeDetection: 0
});
var ProductImageZoomThumbnailsComponent = _ProductImageZoomThumbnailsComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProductImageZoomThumbnailsComponent, [{
    type: Component,
    args: [{
      selector: "cx-product-image-zoom-thumbnails",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: '<ng-container *ngIf="thumbs$ | async as thumbs">\n  <cx-carousel\n    *ngIf="thumbs.length"\n    class="thumbs"\n    [items]="thumbs"\n    itemWidth="70px"\n    [hideIndicators]="false"\n    [template]="thumb"\n  ></cx-carousel>\n</ng-container>\n\n<ng-template #thumb let-item="item">\n  <cx-media\n    [container]="item.container"\n    tabindex="0"\n    (focus)="openImage(item.container)"\n    [class.is-active]="isActive(item.container) | async"\n  >\n  </cx-media>\n</ng-template>\n'
    }]
  }], () => [], {
    productImage: [{
      type: Output
    }],
    thumbs$: [{
      type: Input
    }],
    activeThumb: [{
      type: Input
    }]
  });
})();
var _ProductImageZoomViewComponent = class _ProductImageZoomViewComponent {
  get defaultImage() {
    return this._defaultImage;
  }
  set defaultImage(el) {
    if (el) {
      this._defaultImage = el;
      this.defaultImageReady.next(true);
    }
  }
  get zoomImage() {
    return this._zoomImage;
  }
  set zoomImage(el) {
    if (el) {
      this._zoomImage = el;
      this.zoomReady.next(true);
    }
  }
  constructor(currentProductService, renderer, cdRef, breakpointService) {
    this.currentProductService = currentProductService;
    this.renderer = renderer;
    this.cdRef = cdRef;
    this.breakpointService = breakpointService;
    this.iconType = ICON_TYPE;
    this.mainMediaContainer = new BehaviorSubject(null);
    this.defaultImageReady = new BehaviorSubject(false);
    this.zoomReady = new BehaviorSubject(false);
    this.subscription = new Subscription();
    this.mainMediaContainer$ = this.mainMediaContainer.asObservable();
    this.defaultImageReady$ = this.defaultImageReady.asObservable();
    this.zoomReady$ = this.zoomReady.asObservable();
    this.activeThumb = new EventEmitter();
    this.defaultImageClickHandler$ = this.defaultImageReady$.pipe(filter(Boolean), switchMap((_) => merge(...this.clickOrDoubleClick(this.defaultImage)).pipe(tap(() => this.zoom()))));
    this.zoomImageClickHandler$ = this.zoomReady$.pipe(filter(Boolean), switchMap((_) => merge(...this.clickOrDoubleClick(this.zoomImage)).pipe(tap(() => this.zoom()))));
    this.startCoords = null;
    this.left = 0;
    this.top = 0;
    this.isZoomed = false;
    this.product$ = this.currentProductService.getProduct().pipe(filter(isNotNullable), distinctUntilChanged(), tap((p) => {
      if (this.galleryIndex) {
        const image = Array.isArray(p.images?.GALLERY) ? p.images?.GALLERY.find((img) => img.zoom?.galleryIndex === this.galleryIndex) : p.images?.GALLERY;
        this.mainMediaContainer.next(image || null);
      } else {
        this.mainMediaContainer.next(p.images?.PRIMARY ? p.images.PRIMARY : {});
      }
    }), shareReplay(1));
    this.thumbnails$ = this.product$.pipe(map((p) => this.createThumbs(p)), shareReplay(1));
    this.mainImage$ = combineLatest([this.product$, this.mainMediaContainer$]).pipe(map(([, container]) => container));
  }
  ngOnInit() {
    this.subscription.add(this.defaultImageClickHandler$.subscribe());
    this.subscription.add(this.zoomImageClickHandler$.subscribe());
  }
  openImage(item) {
    this.mainMediaContainer.next(item);
    this.activeThumb.emit(item);
  }
  /** find the index of the main media in the list of media */
  getActive() {
    if (Array.isArray(this.mainMediaContainer.value)) {
      return this.mainMediaContainer.value[0].thumbnail?.galleryIndex || 0;
    }
    return this.mainMediaContainer?.value?.thumbnail?.galleryIndex || 0;
  }
  getPreviousProduct(thumbs) {
    const active = this.getActive();
    if (active === 0) {
      return thumbs[active];
    }
    return thumbs[active - 1];
  }
  getNextProduct(thumbs) {
    const active = this.getActive();
    if (active === thumbs.length - 1) {
      return thumbs[active];
    }
    return thumbs[active + 1];
  }
  /**
   * Zoom in or out of the image
   */
  zoom() {
    this.isZoomed = !this.isZoomed;
    this.startCoords = null;
    this.left = 0;
    this.top = 0;
    this.cdRef.markForCheck();
  }
  /**
   * Touch screen image pan
   *
   * @param event
   */
  touchMove(event) {
    const touch = event.touches[0] || event.changedTouches[0];
    const boundingRect = this.zoomedImage?.nativeElement?.getBoundingClientRect();
    const imageElement = this.zoomedImage?.nativeElement?.firstChild;
    if (!this.startCoords) {
      this.startCoords = {
        x: touch.clientX,
        y: touch.clientY
      };
    }
    this.left += touch.clientX - this.startCoords.x;
    this.top += touch.clientY - this.startCoords.y;
    this.moveImage(this.left, this.top, boundingRect, imageElement);
    this.startCoords = {
      x: touch.clientX,
      y: touch.clientY
    };
  }
  /**
   * Clears touch location
   */
  clearTouch() {
    this.startCoords = null;
  }
  /**
   * Pointer image pan
   *
   * @param event
   */
  pointerMove(event) {
    const boundingRect = this.zoomedImage.nativeElement.getBoundingClientRect();
    const imageElement = this.zoomedImage.nativeElement.firstChild;
    const {
      positionX,
      positionY
    } = this.calculatePointerMovePosition(this.zoomedImage, event.clientX, event.clientY);
    this.moveImage(positionX, positionY, boundingRect, imageElement);
  }
  changeImage(event) {
    this.mainMediaContainer.next(event.image);
  }
  /**
   * Applies the offset from touchMove or pointerMove to the image element
   *
   * @param positionX
   * @param positionY
   * @param boundingRect
   * @param imageElement
   */
  moveImage(positionX, positionY, boundingRect, imageElement) {
    const {
      x,
      y
    } = this.handleOutOfBounds(positionX, positionY, imageElement, boundingRect);
    if (imageElement) {
      this.renderer.setStyle(imageElement, "left", x + "px");
      this.renderer.setStyle(imageElement, "top", y + "px");
    }
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
  /**
   * Returns click and dblclick event mapping for the given element
   *
   * @param element
   */
  clickOrDoubleClick(element) {
    return [fromEvent(element.nativeElement, "click").pipe(switchMap(() => this.breakpointService.isUp(BREAKPOINT.md)), filter(Boolean)), fromEvent(element.nativeElement, "dblclick").pipe(switchMap(() => this.breakpointService.isDown(BREAKPOINT.lg)), filter(Boolean))];
  }
  /**
   * Return an array of CarouselItems for the product thumbnails.
   * In case there are less then 2 thumbs, we return null.
   */
  createThumbs(product) {
    if (!product.images || !product.images.GALLERY || Array.isArray(product.images.GALLERY) && product.images.GALLERY.length < 2) {
      return [];
    }
    const images = product.images.GALLERY;
    return images.map((c) => of({
      container: c
    }));
  }
  /**
   * Keeps the zoom image from leaving the bounding container
   *
   * @param positionX
   * @param positionY
   * @param imageElement
   * @param boundingRect
   */
  handleOutOfBounds(positionX, positionY, imageElement, boundingRect) {
    const paddingX = 60;
    const paddingY = 60;
    if (positionY <= -imageElement?.height + paddingY) {
      positionY = -imageElement?.height + paddingY;
    }
    if (positionY >= boundingRect?.height - paddingY) {
      positionY = boundingRect?.height - paddingY;
    }
    if (positionX <= -imageElement?.width - boundingRect?.width / 2 + paddingX) {
      positionX = -imageElement?.width - boundingRect?.width / 2 + paddingX;
    }
    if (positionX >= imageElement?.width + boundingRect?.width / 2 - paddingX) {
      positionX = imageElement?.width + boundingRect?.width / 2 - paddingX;
    }
    return {
      x: positionX,
      y: positionY
    };
  }
  /**
   * Returns the position of the image based on the cursor pointer
   *
   * @param element
   * @param clientX
   * @param clientY
   */
  calculatePointerMovePosition(element, clientX, clientY) {
    const boundingRect = element.nativeElement.getBoundingClientRect();
    const x = clientX - boundingRect.left;
    const y = clientY - boundingRect.top;
    const positionX = -x + element.nativeElement.clientWidth / 2;
    const positionY = -y + element.nativeElement.clientHeight / 2;
    return {
      positionX,
      positionY
    };
  }
};
_ProductImageZoomViewComponent.\u0275fac = function ProductImageZoomViewComponent_Factory(t) {
  return new (t || _ProductImageZoomViewComponent)(\u0275\u0275directiveInject(CurrentProductService), \u0275\u0275directiveInject(Renderer2), \u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(BreakpointService));
};
_ProductImageZoomViewComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
  type: _ProductImageZoomViewComponent,
  selectors: [["cx-product-image-zoom-view"]],
  viewQuery: function ProductImageZoomViewComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(_c0, 5, ElementRef);
      \u0275\u0275viewQuery(_c1, 5, ElementRef);
      \u0275\u0275viewQuery(_c2, 5, ElementRef);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.defaultImage = _t.first);
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.zoomImage = _t.first);
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.zoomedImage = _t.first);
    }
  },
  inputs: {
    galleryIndex: "galleryIndex"
  },
  decls: 3,
  vars: 5,
  consts: [["defaultImage", ""], ["zoomContainer", ""], ["zoomedImage", ""], [4, "ngIf"], [3, "productImage", "thumbs$", "activeThumb"], ["class", "cx-main-image-group", 4, "ngIf"], [1, "cx-main-image-group"], [1, "cx-navigate-image"], ["class", "btn btn-link", 3, "click", 4, "ngIf"], ["class", "cx-default-image-zoom", 3, "container", 4, "ngIf"], ["class", "cx-zoom-container", 4, "ngIf"], [1, "btn", "btn-link", 3, "click"], [3, "type"], [1, "cx-default-image-zoom", 3, "container"], [1, "cx-zoom-container"], [1, "cx-image-zoomed", 3, "mousemove", "touchmove", "touchend", "container"]],
  template: function ProductImageZoomViewComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275template(0, ProductImageZoomViewComponent_ng_container_0_Template, 3, 3, "ng-container", 3);
      \u0275\u0275pipe(1, "async");
      \u0275\u0275elementStart(2, "cx-product-image-zoom-thumbnails", 4);
      \u0275\u0275listener("productImage", function ProductImageZoomViewComponent_Template_cx_product_image_zoom_thumbnails_productImage_2_listener($event) {
        return ctx.changeImage($event);
      });
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275property("ngIf", \u0275\u0275pipeBind1(1, 3, ctx.mainImage$));
      \u0275\u0275advance(2);
      \u0275\u0275property("thumbs$", ctx.thumbnails$)("activeThumb", ctx.activeThumb);
    }
  },
  dependencies: [NgIf, IconComponent, MediaComponent, ProductImageZoomThumbnailsComponent, AsyncPipe],
  encapsulation: 2,
  changeDetection: 0
});
var ProductImageZoomViewComponent = _ProductImageZoomViewComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProductImageZoomViewComponent, [{
    type: Component,
    args: [{
      selector: "cx-product-image-zoom-view",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: '<ng-container *ngIf="mainImage$ | async as main">\n  <div class="cx-main-image-group" *ngIf="thumbnails$ | async as thumbs">\n    <div class="cx-navigate-image">\n      <button\n        class="btn btn-link"\n        *ngIf="getPreviousProduct(thumbs) | async as previousProduct"\n        (click)="openImage(previousProduct.container)"\n      >\n        <cx-icon [type]="iconType.CARET_LEFT"></cx-icon>\n      </button>\n    </div>\n    <cx-media\n      #defaultImage\n      class="cx-default-image-zoom"\n      *ngIf="!isZoomed"\n      [container]="main"\n    >\n    </cx-media>\n    <div #zoomContainer class="cx-zoom-container" *ngIf="isZoomed">\n      <cx-media\n        #zoomedImage\n        class="cx-image-zoomed"\n        [container]="main"\n        (mousemove)="pointerMove($event)"\n        (touchmove)="touchMove($event)"\n        (touchend)="clearTouch()"\n      >\n      </cx-media>\n    </div>\n    <div class="cx-navigate-image">\n      <button\n        class="btn btn-link"\n        *ngIf="getNextProduct(thumbs) | async as nextProduct"\n        (click)="openImage(nextProduct.container)"\n      >\n        <cx-icon [type]="iconType.CARET_RIGHT"></cx-icon>\n      </button>\n    </div>\n  </div>\n</ng-container>\n\n<cx-product-image-zoom-thumbnails\n  [thumbs$]="thumbnails$"\n  [activeThumb]="activeThumb"\n  (productImage)="changeImage($event)"\n></cx-product-image-zoom-thumbnails>\n'
    }]
  }], () => [{
    type: CurrentProductService
  }, {
    type: Renderer2
  }, {
    type: ChangeDetectorRef
  }, {
    type: BreakpointService
  }], {
    galleryIndex: [{
      type: Input
    }],
    defaultImage: [{
      type: ViewChild,
      args: ["defaultImage", {
        read: ElementRef
      }]
    }],
    zoomImage: [{
      type: ViewChild,
      args: ["zoomContainer", {
        read: ElementRef
      }]
    }],
    zoomedImage: [{
      type: ViewChild,
      args: ["zoomedImage", {
        read: ElementRef
      }]
    }]
  });
})();
var _ProductImageZoomDialogComponent = class _ProductImageZoomDialogComponent {
  handleClick(event) {
    if (event.target.tagName === this.el.nativeElement.tagName) {
      this.close("Cross click");
    }
  }
  constructor(launchDialogService, el) {
    this.launchDialogService = launchDialogService;
    this.el = el;
    this.iconType = ICON_TYPE;
    this.focusConfig = {
      trap: true,
      block: true,
      autofocus: "button",
      focusOnEscape: true
    };
  }
  close(reason = "") {
    this.launchDialogService.closeDialog(reason);
  }
};
_ProductImageZoomDialogComponent.\u0275fac = function ProductImageZoomDialogComponent_Factory(t) {
  return new (t || _ProductImageZoomDialogComponent)(\u0275\u0275directiveInject(LaunchDialogService), \u0275\u0275directiveInject(ElementRef));
};
_ProductImageZoomDialogComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
  type: _ProductImageZoomDialogComponent,
  selectors: [["cx-product-image-zoom-dialog"]],
  hostBindings: function ProductImageZoomDialogComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275listener("click", function ProductImageZoomDialogComponent_click_HostBindingHandler($event) {
        return ctx.handleClick($event);
      });
    }
  },
  inputs: {
    galleryIndex: "galleryIndex"
  },
  decls: 9,
  vars: 6,
  consts: [[1, "cx-image-zoom-dialog", 3, "cxFocus"], [1, "cx-dialog-content"], [1, "cx-dialog-header"], ["type", "button", 1, "close", 3, "click"], ["aria-hidden", "true"], [3, "type"], [1, "cx-dialog-body"], [3, "galleryIndex"]],
  template: function ProductImageZoomDialogComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "button", 3);
      \u0275\u0275pipe(4, "cxTranslate");
      \u0275\u0275listener("click", function ProductImageZoomDialogComponent_Template_button_click_3_listener() {
        return ctx.close("cross click");
      });
      \u0275\u0275elementStart(5, "span", 4);
      \u0275\u0275element(6, "cx-icon", 5);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(7, "div", 6);
      \u0275\u0275element(8, "cx-product-image-zoom-view", 7);
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275property("cxFocus", ctx.focusConfig);
      \u0275\u0275advance(3);
      \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(4, 4, "productImageZoomDialog.close"));
      \u0275\u0275advance(3);
      \u0275\u0275property("type", ctx.iconType.CLOSE);
      \u0275\u0275advance(2);
      \u0275\u0275property("galleryIndex", ctx.galleryIndex);
    }
  },
  dependencies: [IconComponent, FocusDirective, ProductImageZoomViewComponent, TranslatePipe],
  encapsulation: 2,
  changeDetection: 0
});
var ProductImageZoomDialogComponent = _ProductImageZoomDialogComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProductImageZoomDialogComponent, [{
    type: Component,
    args: [{
      selector: "cx-product-image-zoom-dialog",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: `<div class="cx-image-zoom-dialog" [cxFocus]="focusConfig">
  <div class="cx-dialog-content">
    <div class="cx-dialog-header">
      <button
        type="button"
        class="close"
        [attr.aria-label]="'productImageZoomDialog.close' | cxTranslate"
        (click)="close('cross click')"
      >
        <span aria-hidden="true">
          <cx-icon [type]="iconType.CLOSE"></cx-icon>
        </span>
      </button>
    </div>
    <div class="cx-dialog-body">
      <cx-product-image-zoom-view
        [galleryIndex]="galleryIndex"
      ></cx-product-image-zoom-view>
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
    galleryIndex: [{
      type: Input
    }],
    handleClick: [{
      type: HostListener,
      args: ["click", ["$event"]]
    }]
  });
})();
var defaultProductImageZoomLayoutConfig = {
  launch: {
    PRODUCT_IMAGE_ZOOM: {
      inline: true,
      component: ProductImageZoomDialogComponent,
      dialogType: DIALOG_TYPE.DIALOG
    }
  }
};
var _ProductImageZoomTriggerComponent = class _ProductImageZoomTriggerComponent {
  set expandImage(expand) {
    if (expand) {
      this.triggerZoom();
    }
  }
  constructor(launchDialogService, vcr) {
    this.launchDialogService = launchDialogService;
    this.vcr = vcr;
    this.iconType = ICON_TYPE;
    this.subscriptions = new Subscription();
    this.dialogClose = new EventEmitter();
  }
  triggerZoom() {
    const component = this.launchDialogService.launch("PRODUCT_IMAGE_ZOOM", this.vcr);
    if (component) {
      this.subscriptions.add(combineLatest([component, this.launchDialogService.dialogClose]).pipe(tap(([comp]) => {
        if (this.galleryIndex) {
          comp.instance.galleryIndex = this.galleryIndex;
        }
      }), filter(([, close]) => Boolean(close)), tap(([comp]) => {
        this.launchDialogService.clear(
          "PRODUCT_IMAGE_ZOOM"
          /* LAUNCH_CALLER.PRODUCT_IMAGE_ZOOM */
        );
        comp?.destroy();
        this.dialogClose.emit();
        this.expandButton.nativeElement.focus();
      })).subscribe());
    }
  }
  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }
};
_ProductImageZoomTriggerComponent.\u0275fac = function ProductImageZoomTriggerComponent_Factory(t) {
  return new (t || _ProductImageZoomTriggerComponent)(\u0275\u0275directiveInject(LaunchDialogService), \u0275\u0275directiveInject(ViewContainerRef));
};
_ProductImageZoomTriggerComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
  type: _ProductImageZoomTriggerComponent,
  selectors: [["cx-product-image-zoom-trigger"]],
  viewQuery: function ProductImageZoomTriggerComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(_c3, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.expandButton = _t.first);
    }
  },
  inputs: {
    galleryIndex: "galleryIndex",
    expandImage: "expandImage"
  },
  outputs: {
    dialogClose: "dialogClose"
  },
  decls: 6,
  vars: 4,
  consts: [["expandButton", ""], [1, "btn", "btn-link", "cx-action-link", 3, "click"], [3, "type"]],
  template: function ProductImageZoomTriggerComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "button", 1, 0);
      \u0275\u0275listener("click", function ProductImageZoomTriggerComponent_Template_button_click_0_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.triggerZoom());
      });
      \u0275\u0275elementStart(2, "span");
      \u0275\u0275text(3);
      \u0275\u0275pipe(4, "cxTranslate");
      \u0275\u0275element(5, "cx-icon", 2);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 2, "productImageZoomTrigger.expand"), " ");
      \u0275\u0275advance(2);
      \u0275\u0275property("type", ctx.iconType.EXPAND_ARROWS);
    }
  },
  dependencies: [IconComponent, TranslatePipe],
  encapsulation: 2,
  changeDetection: 0
});
var ProductImageZoomTriggerComponent = _ProductImageZoomTriggerComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProductImageZoomTriggerComponent, [{
    type: Component,
    args: [{
      selector: "cx-product-image-zoom-trigger",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: `<button
  #expandButton
  class="btn btn-link cx-action-link"
  (click)="triggerZoom()"
>
  <span>
    {{ 'productImageZoomTrigger.expand' | cxTranslate }}
    <cx-icon [type]="iconType.EXPAND_ARROWS"></cx-icon
  ></span>
</button>
`
    }]
  }], () => [{
    type: LaunchDialogService
  }, {
    type: ViewContainerRef
  }], {
    expandButton: [{
      type: ViewChild,
      args: ["expandButton"]
    }],
    galleryIndex: [{
      type: Input
    }],
    expandImage: [{
      type: Input
    }],
    dialogClose: [{
      type: Output
    }]
  });
})();
var _ProductImageZoomProductImagesComponent = class _ProductImageZoomProductImagesComponent extends ProductImagesComponent {
  constructor(currentProductService) {
    super(currentProductService);
    this.currentProductService = currentProductService;
    this.expandImage = new BehaviorSubject(false);
    this.product$ = this.product$;
  }
  openImage(item) {
    this.mainMediaContainer.next(item);
    this.selectedIndex = this.mainMediaContainer.value?.zoom?.galleryIndex;
  }
  /**
   * Opens image zoom dialog.
   */
  triggerZoom(value) {
    this.expandImage.next(value);
  }
};
_ProductImageZoomProductImagesComponent.\u0275fac = function ProductImageZoomProductImagesComponent_Factory(t) {
  return new (t || _ProductImageZoomProductImagesComponent)(\u0275\u0275directiveInject(CurrentProductService));
};
_ProductImageZoomProductImagesComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
  type: _ProductImageZoomProductImagesComponent,
  selectors: [["cx-product-images"]],
  features: [\u0275\u0275InheritDefinitionFeature],
  decls: 6,
  vars: 6,
  consts: [["thumb", ""], [4, "ngIf"], [3, "click", "container"], [3, "dialogClose", "expandImage", "galleryIndex"], ["role", "region", "tabindex", "-1", "class", "thumbs", "itemWidth", "120px", 3, "items", "hideIndicators", "template", 4, "ngIf"], ["role", "region", "tabindex", "-1", "itemWidth", "120px", 1, "thumbs", 3, "items", "hideIndicators", "template"], ["tabindex", "0", "format", "product", 3, "focus", "container"]],
  template: function ProductImageZoomProductImagesComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275template(0, ProductImageZoomProductImagesComponent_ng_container_0_Template, 3, 3, "ng-container", 1);
      \u0275\u0275pipe(1, "async");
      \u0275\u0275template(2, ProductImageZoomProductImagesComponent_ng_container_2_Template, 3, 3, "ng-container", 1);
      \u0275\u0275pipe(3, "async");
      \u0275\u0275template(4, ProductImageZoomProductImagesComponent_ng_template_4_Template, 2, 5, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
    }
    if (rf & 2) {
      \u0275\u0275property("ngIf", \u0275\u0275pipeBind1(1, 2, ctx.mainImage$));
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", \u0275\u0275pipeBind1(3, 4, ctx.thumbs$));
    }
  },
  dependencies: [CarouselComponent, NgIf, MediaComponent, ProductImageZoomTriggerComponent, AsyncPipe, TranslatePipe],
  encapsulation: 2,
  changeDetection: 0
});
var ProductImageZoomProductImagesComponent = _ProductImageZoomProductImagesComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProductImageZoomProductImagesComponent, [{
    type: Component,
    args: [{
      selector: "cx-product-images",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: `<ng-container *ngIf="mainImage$ | async as main">
  <cx-media [container]="main" (click)="triggerZoom(true)"></cx-media>
  <cx-product-image-zoom-trigger
    [expandImage]="expandImage.value"
    [galleryIndex]="selectedIndex"
    (dialogClose)="triggerZoom(false)"
  ></cx-product-image-zoom-trigger>
</ng-container>

<ng-container *ngIf="thumbs$ | async as thumbs">
  <ng-container *ngIf="product$ | async as product">
    <cx-carousel
      role="region"
      [attr.aria-label]="
        'carousel.carouselForProduct' | cxTranslate: { product: product.name }
      "
      tabindex="-1"
      *ngIf="thumbs.length"
      class="thumbs"
      [items]="thumbs"
      itemWidth="120px"
      [hideIndicators]="false"
      [template]="thumb"
    ></cx-carousel>
  </ng-container>
</ng-container>

<ng-template #thumb let-item="item">
  <cx-media
    [container]="item.container"
    tabindex="0"
    (focus)="openImage(item.container)"
    [class.is-active]="isActive(item.container) | async"
    format="product"
  >
  </cx-media>
</ng-template>
`
    }]
  }], () => [{
    type: CurrentProductService
  }], null);
})();
var _ProductImageZoomModule = class _ProductImageZoomModule {
};
_ProductImageZoomModule.\u0275fac = function ProductImageZoomModule_Factory(t) {
  return new (t || _ProductImageZoomModule)();
};
_ProductImageZoomModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
  type: _ProductImageZoomModule
});
_ProductImageZoomModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
  providers: [provideDefaultConfig(defaultProductImageZoomLayoutConfig), provideDefaultConfig({
    cmsComponents: {
      ProductImagesComponent: {
        component: ProductImageZoomProductImagesComponent
      }
    }
  })],
  imports: [CarouselModule, CommonModule, I18nModule, IconModule, KeyboardFocusModule, MediaModule, OutletModule, RouterModule]
});
var ProductImageZoomModule = _ProductImageZoomModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProductImageZoomModule, [{
    type: NgModule,
    args: [{
      imports: [CarouselModule, CommonModule, I18nModule, IconModule, KeyboardFocusModule, MediaModule, OutletModule, RouterModule],
      providers: [provideDefaultConfig(defaultProductImageZoomLayoutConfig), provideDefaultConfig({
        cmsComponents: {
          ProductImagesComponent: {
            component: ProductImageZoomProductImagesComponent
          }
        }
      })],
      declarations: [ProductImageZoomDialogComponent, ProductImageZoomProductImagesComponent, ProductImageZoomThumbnailsComponent, ProductImageZoomTriggerComponent, ProductImageZoomViewComponent],
      exports: [ProductImageZoomDialogComponent, ProductImageZoomProductImagesComponent, ProductImageZoomThumbnailsComponent, ProductImageZoomTriggerComponent, ProductImageZoomViewComponent]
    }]
  }], null, null);
})();
var _ProductImageZoomComponentsModule = class _ProductImageZoomComponentsModule {
};
_ProductImageZoomComponentsModule.\u0275fac = function ProductImageZoomComponentsModule_Factory(t) {
  return new (t || _ProductImageZoomComponentsModule)();
};
_ProductImageZoomComponentsModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
  type: _ProductImageZoomComponentsModule
});
_ProductImageZoomComponentsModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
  imports: [ProductImageZoomModule]
});
var ProductImageZoomComponentsModule = _ProductImageZoomComponentsModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProductImageZoomComponentsModule, [{
    type: NgModule,
    args: [{
      imports: [ProductImageZoomModule]
    }]
  }], null, null);
})();

// node_modules/@spartacus/product/fesm2022/spartacus-product-image-zoom.mjs
var _ProductImageZoomModule2 = class _ProductImageZoomModule2 {
};
_ProductImageZoomModule2.\u0275fac = function ProductImageZoomModule_Factory(t) {
  return new (t || _ProductImageZoomModule2)();
};
_ProductImageZoomModule2.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
  type: _ProductImageZoomModule2
});
_ProductImageZoomModule2.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
  imports: [ProductImageZoomComponentsModule]
});
var ProductImageZoomModule2 = _ProductImageZoomModule2;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProductImageZoomModule2, [{
    type: NgModule,
    args: [{
      imports: [ProductImageZoomComponentsModule]
    }]
  }], null, null);
})();
export {
  ProductImageZoomModule2 as ProductImageZoomModule
};
//# sourceMappingURL=chunk-ZYXZJWAL.js.map
