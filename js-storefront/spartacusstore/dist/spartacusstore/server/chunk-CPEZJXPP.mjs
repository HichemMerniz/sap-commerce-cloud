import './polyfills.server.mjs';
import {
  SmartEditConfig
} from "./chunk-7W34HA2L.mjs";
import {
  BaseSiteService,
  CmsService,
  ComponentDecorator,
  PageType,
  RoutingService,
  SlotDecorator,
  WindowRef
} from "./chunk-AFAMYKVR.mjs";
import {
  Injectable,
  NgModule,
  NgZone,
  RendererFactory2,
  filter,
  setClassMetadata,
  take,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵinject
} from "./chunk-3LP6MEWW.mjs";
import "./chunk-JBYB2SS7.mjs";

// node_modules/@spartacus/smartedit/fesm2022/spartacus-smartedit-core.mjs
var _SmartEditService = class _SmartEditService {
  constructor(cmsService, routingService, baseSiteService, zone, winRef, rendererFactory, config) {
    this.cmsService = cmsService;
    this.routingService = routingService;
    this.baseSiteService = baseSiteService;
    this.zone = zone;
    this.winRef = winRef;
    this.rendererFactory = rendererFactory;
    this.config = config;
    this.isPreviewPage = false;
    if (winRef.nativeWindow) {
      const window = winRef.nativeWindow;
      window.smartedit = window.smartedit || {};
      window.smartedit.renderComponent = (componentId, componentType, parentId) => {
        return this.renderComponent(componentId, componentType, parentId);
      };
      window.smartedit.reprocessPage = this.reprocessPage;
    }
  }
  processCmsPage() {
    this.baseSiteService.get().pipe(filter((site) => Boolean(site)), take(1)).subscribe((site) => {
      this.defaultPreviewCategoryCode = site.defaultPreviewCategoryCode;
      this.defaultPreviewProductCode = site.defaultPreviewProductCode;
      this.cmsService.getCurrentPage().pipe(filter(Boolean)).subscribe((cmsPage) => {
        this._currentPageId = cmsPage.pageId;
        this.goToPreviewPage(cmsPage);
        this.addPageContract(cmsPage);
      });
    });
  }
  /**
   * add CSS classes in a body tag
   */
  addPageContract(cmsPage) {
    const renderer = this.rendererFactory.createRenderer("body", null);
    const element = this.winRef.document.body;
    const previousContract = [];
    Array.from(element.classList).forEach((attr) => previousContract.push(attr));
    previousContract.forEach((attr) => renderer.removeClass(element, attr));
    this.addSmartEditContract(element, renderer, cmsPage.properties);
  }
  /**
   * go to the default preview page
   */
  goToPreviewPage(cmsPage) {
    if (!this.isPreviewPage) {
      this.isPreviewPage = true;
      if (cmsPage.type === PageType.PRODUCT_PAGE && this.defaultPreviewProductCode) {
        this.routingService.go({
          cxRoute: "product",
          params: {
            code: this.defaultPreviewProductCode,
            name: ""
          }
        });
      } else if (cmsPage.type === PageType.CATEGORY_PAGE && this.defaultPreviewCategoryCode) {
        this.routingService.go({
          cxRoute: "category",
          params: {
            code: this.defaultPreviewCategoryCode
          }
        });
      }
    }
  }
  /**
   * re-render CMS components and slots
   */
  renderComponent(componentId, componentType, parentId) {
    if (componentId) {
      this.zone.run(() => {
        if (!parentId) {
          if (this._currentPageId) {
            this.cmsService.refreshPageById(this._currentPageId);
          } else {
            this.cmsService.refreshLatestPage();
          }
        } else if (componentType) {
          this.cmsService.refreshComponent(componentId);
        }
      });
    }
    return true;
  }
  reprocessPage() {
  }
  /**
   * add smartedit HTML markup contract
   */
  addSmartEditContract(element, renderer, properties) {
    if (properties) {
      Object.keys(properties).forEach((group) => {
        const name = "data-" + group + "-";
        const groupProps = properties[group];
        Object.keys(groupProps).forEach((propName) => {
          const propValue = groupProps[propName];
          if (propName === "classes") {
            const classes = propValue.split(" ");
            classes.forEach((classItem) => {
              renderer.addClass(element, classItem);
            });
          } else {
            renderer.setAttribute(element, name + propName.split(/(?=[A-Z])/).join("-").toLowerCase(), propValue);
          }
        });
      });
    }
  }
};
_SmartEditService.\u0275fac = function SmartEditService_Factory(t) {
  return new (t || _SmartEditService)(\u0275\u0275inject(CmsService), \u0275\u0275inject(RoutingService), \u0275\u0275inject(BaseSiteService), \u0275\u0275inject(NgZone), \u0275\u0275inject(WindowRef), \u0275\u0275inject(RendererFactory2), \u0275\u0275inject(SmartEditConfig));
};
_SmartEditService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
  token: _SmartEditService,
  factory: _SmartEditService.\u0275fac,
  providedIn: "root"
});
var SmartEditService = _SmartEditService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SmartEditService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: CmsService
  }, {
    type: RoutingService
  }, {
    type: BaseSiteService
  }, {
    type: NgZone
  }, {
    type: WindowRef
  }, {
    type: RendererFactory2
  }, {
    type: SmartEditConfig
  }], null);
})();
var _SmartEditComponentDecorator = class _SmartEditComponentDecorator extends ComponentDecorator {
  constructor(smartEditService) {
    super();
    this.smartEditService = smartEditService;
  }
  decorate(element, renderer, component) {
    if (component) {
      this.smartEditService.addSmartEditContract(element, renderer, component.properties);
    }
  }
};
_SmartEditComponentDecorator.\u0275fac = function SmartEditComponentDecorator_Factory(t) {
  return new (t || _SmartEditComponentDecorator)(\u0275\u0275inject(SmartEditService));
};
_SmartEditComponentDecorator.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
  token: _SmartEditComponentDecorator,
  factory: _SmartEditComponentDecorator.\u0275fac,
  providedIn: "root"
});
var SmartEditComponentDecorator = _SmartEditComponentDecorator;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SmartEditComponentDecorator, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: SmartEditService
  }], null);
})();
var _SmartEditSlotDecorator = class _SmartEditSlotDecorator extends SlotDecorator {
  constructor(smartEditService) {
    super();
    this.smartEditService = smartEditService;
  }
  decorate(element, renderer, slot) {
    if (slot) {
      this.smartEditService.addSmartEditContract(element, renderer, slot.properties);
    }
  }
};
_SmartEditSlotDecorator.\u0275fac = function SmartEditSlotDecorator_Factory(t) {
  return new (t || _SmartEditSlotDecorator)(\u0275\u0275inject(SmartEditService));
};
_SmartEditSlotDecorator.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
  token: _SmartEditSlotDecorator,
  factory: _SmartEditSlotDecorator.\u0275fac,
  providedIn: "root"
});
var SmartEditSlotDecorator = _SmartEditSlotDecorator;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SmartEditSlotDecorator, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: SmartEditService
  }], null);
})();
var smartEditDecorators = [{
  provide: ComponentDecorator,
  useExisting: SmartEditComponentDecorator,
  multi: true
}, {
  provide: SlotDecorator,
  useExisting: SmartEditSlotDecorator,
  multi: true
}];
var _SmartEditCoreModule = class _SmartEditCoreModule {
  constructor(smartEditService) {
    this.smartEditService = smartEditService;
    this.smartEditService.processCmsPage();
  }
};
_SmartEditCoreModule.\u0275fac = function SmartEditCoreModule_Factory(t) {
  return new (t || _SmartEditCoreModule)(\u0275\u0275inject(SmartEditService));
};
_SmartEditCoreModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
  type: _SmartEditCoreModule
});
_SmartEditCoreModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
  providers: [...smartEditDecorators]
});
var SmartEditCoreModule = _SmartEditCoreModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SmartEditCoreModule, [{
    type: NgModule,
    args: [{
      providers: [...smartEditDecorators]
    }]
  }], () => [{
    type: SmartEditService
  }], null);
})();

// node_modules/@spartacus/smartedit/fesm2022/spartacus-smartedit.mjs
var _SmartEditModule = class _SmartEditModule {
};
_SmartEditModule.\u0275fac = function SmartEditModule_Factory(t) {
  return new (t || _SmartEditModule)();
};
_SmartEditModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
  type: _SmartEditModule
});
_SmartEditModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
  imports: [SmartEditCoreModule]
});
var SmartEditModule = _SmartEditModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SmartEditModule, [{
    type: NgModule,
    args: [{
      imports: [SmartEditCoreModule]
    }]
  }], null, null);
})();
export {
  SmartEditModule
};
//# sourceMappingURL=chunk-CPEZJXPP.mjs.map
