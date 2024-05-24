import './polyfills.server.mjs';
import {
  CART_BASE_FEATURE,
  CartEvent,
  ORDER_ENTRIES_CONTEXT
} from "./chunk-3NCZ7TRR.mjs";
import {
  CmsPageGuard,
  PageLayoutComponent
} from "./chunk-JOGQIABG.mjs";
import {
  AuthGuard,
  RouterModule,
  facadeFactory,
  provideDefaultConfig,
  provideDefaultConfigFactory
} from "./chunk-AFAMYKVR.mjs";
import {
  Injectable,
  InjectionToken,
  NgModule,
  setClassMetadata,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule
} from "./chunk-3LP6MEWW.mjs";

// node_modules/@spartacus/cart/fesm2022/spartacus-cart-saved-cart-root.mjs
var SavedCartEvent = class extends CartEvent {
};
var _SaveCartEvent = class _SaveCartEvent extends SavedCartEvent {
};
_SaveCartEvent.type = "SaveCartEvent";
var SaveCartEvent = _SaveCartEvent;
var _SaveCartSuccessEvent = class _SaveCartSuccessEvent extends SavedCartEvent {
};
_SaveCartSuccessEvent.type = "SaveCartSuccessEvent";
var SaveCartSuccessEvent = _SaveCartSuccessEvent;
var _SaveCartFailEvent = class _SaveCartFailEvent extends SavedCartEvent {
};
_SaveCartFailEvent.type = "SaveCartEvent";
var SaveCartFailEvent = _SaveCartFailEvent;
var _RestoreSavedCartEvent = class _RestoreSavedCartEvent extends SavedCartEvent {
};
_RestoreSavedCartEvent.type = "RestoreSavedCartEvent";
var RestoreSavedCartEvent = _RestoreSavedCartEvent;
var _RestoreSavedCartSuccessEvent = class _RestoreSavedCartSuccessEvent extends SavedCartEvent {
};
_RestoreSavedCartSuccessEvent.type = "RestoreSavedCartSuccessEvent";
var RestoreSavedCartSuccessEvent = _RestoreSavedCartSuccessEvent;
var _RestoreSavedCartFailEvent = class _RestoreSavedCartFailEvent extends SavedCartEvent {
};
_RestoreSavedCartFailEvent.type = "RestoreSavedCartFailEvent";
var RestoreSavedCartFailEvent = _RestoreSavedCartFailEvent;
var _EditSavedCartEvent = class _EditSavedCartEvent extends SavedCartEvent {
};
_EditSavedCartEvent.type = "EditSavedCartEvent";
var EditSavedCartEvent = _EditSavedCartEvent;
var _EditSavedCartSuccessEvent = class _EditSavedCartSuccessEvent extends SavedCartEvent {
};
_EditSavedCartSuccessEvent.type = "EditSavedCartSuccessEvent";
var EditSavedCartSuccessEvent = _EditSavedCartSuccessEvent;
var _EditSavedCartFailEvent = class _EditSavedCartFailEvent extends SavedCartEvent {
};
_EditSavedCartFailEvent.type = "EditSavedCartFailEvent";
var EditSavedCartFailEvent = _EditSavedCartFailEvent;
var _CloneSavedCartEvent = class _CloneSavedCartEvent extends SavedCartEvent {
};
_CloneSavedCartEvent.type = "CloneSavedCartEvent";
var CloneSavedCartEvent = _CloneSavedCartEvent;
var _CloneSavedCartSuccessEvent = class _CloneSavedCartSuccessEvent extends SavedCartEvent {
};
_CloneSavedCartSuccessEvent.type = "CloneSavedCartSuccessEvent";
var CloneSavedCartSuccessEvent = _CloneSavedCartSuccessEvent;
var _CloneSavedCartFailEvent = class _CloneSavedCartFailEvent extends SavedCartEvent {
};
_CloneSavedCartFailEvent.type = "CloneSavedCartFailEvent";
var CloneSavedCartFailEvent = _CloneSavedCartFailEvent;
var CART_SAVED_CART_FEATURE = "cartSavedCart";
var CART_SAVED_CART_CORE_FEATURE = "cartSavedCartCore";
var _SavedCartFacade = class _SavedCartFacade {
};
_SavedCartFacade.\u0275fac = function SavedCartFacade_Factory(t) {
  return new (t || _SavedCartFacade)();
};
_SavedCartFacade.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
  token: _SavedCartFacade,
  factory: () => (() => facadeFactory({
    facade: _SavedCartFacade,
    feature: CART_SAVED_CART_CORE_FEATURE,
    methods: ["editSavedCart", "deleteSavedCart", "getSavedCart", "getSavedCartList", "loadSavedCart", "clearCloneSavedCart", "clearRestoreSavedCart", "clearSaveCart", "clearSavedCarts", "get", "getList", "getCloneSavedCartProcessError", "getCloneSavedCartProcessLoading", "getCloneSavedCartProcessSuccess", "getRestoreSavedCartProcessError", "getRestoreSavedCartProcessLoading", "getRestoreSavedCartProcessSuccess", "getSaveCartProcessError", "getSaveCartProcessLoading", "getSaveCartProcessSuccess", "getSavedCartListProcess", "getSavedCartListProcessLoading", "isStable", "cloneSavedCart", "loadSavedCarts", "restoreSavedCart", "saveCart"],
    async: true
  }))(),
  providedIn: "root"
});
var SavedCartFacade = _SavedCartFacade;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SavedCartFacade, [{
    type: Injectable,
    args: [{
      providedIn: "root",
      useFactory: () => facadeFactory({
        facade: SavedCartFacade,
        feature: CART_SAVED_CART_CORE_FEATURE,
        methods: ["editSavedCart", "deleteSavedCart", "getSavedCart", "getSavedCartList", "loadSavedCart", "clearCloneSavedCart", "clearRestoreSavedCart", "clearSaveCart", "clearSavedCarts", "get", "getList", "getCloneSavedCartProcessError", "getCloneSavedCartProcessLoading", "getCloneSavedCartProcessSuccess", "getRestoreSavedCartProcessError", "getRestoreSavedCartProcessLoading", "getRestoreSavedCartProcessSuccess", "getSaveCartProcessError", "getSaveCartProcessLoading", "getSaveCartProcessSuccess", "getSavedCartListProcess", "getSavedCartListProcessLoading", "isStable", "cloneSavedCart", "loadSavedCarts", "restoreSavedCart", "saveCart"],
        async: true
      })
    }]
  }], null, null);
})();
var SavedCartFormType;
(function(SavedCartFormType2) {
  SavedCartFormType2["EDIT"] = "edit";
  SavedCartFormType2["DELETE"] = "delete";
  SavedCartFormType2["SAVE"] = "save";
  SavedCartFormType2["RESTORE"] = "restore";
})(SavedCartFormType || (SavedCartFormType = {}));
var SavedCartOrderEntriesContextToken = new InjectionToken("SavedCartOrderEntriesContext");
var NewSavedCartOrderEntriesContextToken = new InjectionToken("NewSavedCartOrderEntriesContext");
function defaultCartSavedCartComponentsConfig() {
  const config = {
    featureModules: {
      [CART_SAVED_CART_FEATURE]: {
        cmsComponents: ["AddToSavedCartsComponent", "AccountSavedCartHistoryComponent", "SavedCartDetailsOverviewComponent", "SavedCartDetailsItemsComponent", "SavedCartDetailsActionComponent"],
        dependencies: [CART_BASE_FEATURE]
      },
      // by default core is bundled together with components
      [CART_SAVED_CART_CORE_FEATURE]: CART_SAVED_CART_FEATURE
    }
  };
  return config;
}
var _SavedCartRootModule = class _SavedCartRootModule {
};
_SavedCartRootModule.\u0275fac = function SavedCartRootModule_Factory(t) {
  return new (t || _SavedCartRootModule)();
};
_SavedCartRootModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
  type: _SavedCartRootModule
});
_SavedCartRootModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
  providers: [provideDefaultConfigFactory(defaultCartSavedCartComponentsConfig), provideDefaultConfig({
    routing: {
      routes: {
        savedCarts: {
          paths: ["my-account/saved-carts"]
        },
        savedCartsDetails: {
          paths: ["my-account/saved-cart/:savedCartId"],
          paramsMapping: {
            savedCartId: "savedCartId"
          }
        }
      }
    }
  })],
  imports: [RouterModule.forChild([{
    // @ts-ignore
    path: null,
    canActivate: [AuthGuard, CmsPageGuard],
    component: PageLayoutComponent,
    data: {
      cxRoute: "savedCartsDetails",
      cxContext: {
        [ORDER_ENTRIES_CONTEXT]: SavedCartOrderEntriesContextToken
      }
    }
  }, {
    // @ts-ignore
    path: null,
    canActivate: [AuthGuard, CmsPageGuard],
    component: PageLayoutComponent,
    data: {
      cxRoute: "savedCarts",
      cxContext: {
        [ORDER_ENTRIES_CONTEXT]: NewSavedCartOrderEntriesContextToken
      }
    }
  }])]
});
var SavedCartRootModule = _SavedCartRootModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SavedCartRootModule, [{
    type: NgModule,
    args: [{
      imports: [RouterModule.forChild([{
        // @ts-ignore
        path: null,
        canActivate: [AuthGuard, CmsPageGuard],
        component: PageLayoutComponent,
        data: {
          cxRoute: "savedCartsDetails",
          cxContext: {
            [ORDER_ENTRIES_CONTEXT]: SavedCartOrderEntriesContextToken
          }
        }
      }, {
        // @ts-ignore
        path: null,
        canActivate: [AuthGuard, CmsPageGuard],
        component: PageLayoutComponent,
        data: {
          cxRoute: "savedCarts",
          cxContext: {
            [ORDER_ENTRIES_CONTEXT]: NewSavedCartOrderEntriesContextToken
          }
        }
      }])],
      providers: [provideDefaultConfigFactory(defaultCartSavedCartComponentsConfig), provideDefaultConfig({
        routing: {
          routes: {
            savedCarts: {
              paths: ["my-account/saved-carts"]
            },
            savedCartsDetails: {
              paths: ["my-account/saved-cart/:savedCartId"],
              paramsMapping: {
                savedCartId: "savedCartId"
              }
            }
          }
        }
      })]
    }]
  }], null, null);
})();

export {
  SaveCartEvent,
  SaveCartSuccessEvent,
  SaveCartFailEvent,
  RestoreSavedCartEvent,
  RestoreSavedCartSuccessEvent,
  RestoreSavedCartFailEvent,
  EditSavedCartEvent,
  EditSavedCartSuccessEvent,
  EditSavedCartFailEvent,
  CloneSavedCartEvent,
  CloneSavedCartSuccessEvent,
  CloneSavedCartFailEvent,
  CART_SAVED_CART_FEATURE,
  SavedCartFacade,
  SavedCartFormType,
  SavedCartOrderEntriesContextToken,
  NewSavedCartOrderEntriesContextToken,
  SavedCartRootModule
};
//# sourceMappingURL=chunk-5AIHFPZ5.mjs.map
