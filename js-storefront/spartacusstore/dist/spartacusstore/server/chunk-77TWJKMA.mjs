import './polyfills.server.mjs';
import {
  ORDER_ENTRIES_CONTEXT,
  OrderEntriesSource,
  ProductImportStatus
} from "./chunk-3NCZ7TRR.mjs";
import {
  ContextService,
  DIALOG_TYPE,
  DefaultValueAccessor,
  ExportCsvFileService,
  FileUploadComponent,
  FileUploadModule,
  FilesFormValidators,
  FocusDirective,
  FormControlDirective,
  FormControlName,
  FormErrorsComponent,
  FormErrorsModule,
  FormGroupDirective,
  FormUtils,
  FormsModule,
  ICON_TYPE,
  IconComponent,
  IconModule,
  ImportCsvFileService,
  KeyboardFocusModule,
  LaunchDialogService,
  NgControlStatus,
  NgControlStatusGroup,
  PageComponentModule,
  ReactiveFormsModule,
  RequiredValidator,
  UntypedFormControl,
  UntypedFormGroup,
  Validators,
  ɵNgNoValidate
} from "./chunk-JOGQIABG.mjs";
import {
  Config,
  ConfigModule,
  CxDatePipe,
  GlobalMessageService,
  GlobalMessageType,
  I18nModule,
  RouterModule,
  TranslatePipe,
  TranslationService,
  UrlModule,
  provideDefaultConfig
} from "./chunk-AFAMYKVR.mjs";
import {
  AsyncPipe,
  BehaviorSubject,
  ChangeDetectionStrategy,
  CommonModule,
  Component,
  EventEmitter,
  HostBinding,
  Injectable,
  Input,
  NgForOf,
  NgIf,
  NgModule,
  NgSwitch,
  NgSwitchCase,
  NgSwitchDefault,
  Output,
  Subject,
  Subscription,
  ViewChild,
  combineLatest,
  filter,
  finalize,
  map,
  of,
  setClassMetadata,
  startWith,
  switchMap,
  take,
  tap,
  ɵɵInheritDefinitionFeature,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMap,
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
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵviewQuery
} from "./chunk-3LP6MEWW.mjs";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-JBYB2SS7.mjs";

// node_modules/@spartacus/cart/fesm2022/spartacus-cart-import-export-core.mjs
var _ImportExportConfig = class _ImportExportConfig {
};
_ImportExportConfig.\u0275fac = function ImportExportConfig_Factory(t) {
  return new (t || _ImportExportConfig)();
};
_ImportExportConfig.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
  token: _ImportExportConfig,
  factory: function ImportExportConfig_Factory(t) {
    let r = null;
    if (t) {
      r = new (t || _ImportExportConfig)();
    } else {
      r = \u0275\u0275inject(Config);
    }
    return r;
  },
  providedIn: "root"
});
var ImportExportConfig = _ImportExportConfig;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ImportExportConfig, [{
    type: Injectable,
    args: [{
      providedIn: "root",
      useExisting: Config
    }]
  }], null, null);
})();
var CartNameSource;
(function(CartNameSource2) {
  CartNameSource2["FILE_NAME"] = "fileName";
  CartNameSource2["DATE_TIME"] = "dateTime";
})(CartNameSource || (CartNameSource = {}));
var defaultImportExportConfig = {
  cartImportExport: {
    file: {
      separator: ","
    },
    import: {
      fileValidity: {
        maxSize: 1,
        maxEntries: {
          [OrderEntriesSource.NEW_SAVED_CART]: 100,
          [OrderEntriesSource.SAVED_CART]: 100,
          [OrderEntriesSource.ACTIVE_CART]: 10,
          [OrderEntriesSource.QUICK_ORDER]: 10
        },
        allowedTypes: ["application/vnd.openxmlformats-officedocument.spreadsheetml.sheet", "application/vnd.ms-excel", "text/csv", ".csv"]
      },
      cartNameGeneration: {
        source: CartNameSource.FILE_NAME
      }
    },
    export: {
      additionalColumns: [{
        name: {
          key: "name"
        },
        value: "product.name"
      }, {
        name: {
          key: "price"
        },
        value: "totalPrice.formattedValue"
      }],
      messageEnabled: true,
      downloadDelay: 1e3,
      maxEntries: 1e3,
      fileOptions: {
        fileName: "cart",
        extension: "csv",
        type: "text/csv"
      }
    }
  }
};
var _ImportExportCoreModule = class _ImportExportCoreModule {
  static forRoot() {
    return {
      ngModule: _ImportExportCoreModule,
      providers: [provideDefaultConfig(defaultImportExportConfig)]
    };
  }
};
_ImportExportCoreModule.\u0275fac = function ImportExportCoreModule_Factory(t) {
  return new (t || _ImportExportCoreModule)();
};
_ImportExportCoreModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
  type: _ImportExportCoreModule
});
_ImportExportCoreModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({});
var ImportExportCoreModule = _ImportExportCoreModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ImportExportCoreModule, [{
    type: NgModule,
    args: [{}]
  }], null, null);
})();

// node_modules/@spartacus/cart/fesm2022/spartacus-cart-import-export-components.mjs
function ExportOrderEntriesComponent_button_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 1);
    \u0275\u0275listener("click", function ExportOrderEntriesComponent_button_0_Template_button_click_0_listener() {
      const entries_r2 = \u0275\u0275restoreView(_r1).ngIf;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.exportCsv(entries_r2));
    });
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "cxTranslate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "exportEntries.exportProductToCsv"), "\n");
  }
}
var _c0 = ["open"];
function ImportOrderEntriesComponent_button_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 1);
    \u0275\u0275listener("click", function ImportOrderEntriesComponent_button_0_Template_button_click_0_listener() {
      const orderEntriesContext_r2 = \u0275\u0275restoreView(_r1).ngIf;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.openDialog(orderEntriesContext_r2));
    });
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "cxTranslate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "importEntries.importProducts"), "\n");
  }
}
function ImportEntriesFormComponent_form_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "form", 1);
    \u0275\u0275listener("submit", function ImportEntriesFormComponent_form_0_Template_form_submit_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.formSubmitSubject$.next(void 0));
    });
    \u0275\u0275elementStart(1, "p", 2);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "cxTranslate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p");
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "cxTranslate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "label")(8, "cx-file-upload", 3);
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "cxTranslate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(11, "cx-form-errors", 4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 5)(13, "button", 6);
    \u0275\u0275listener("click", function ImportEntriesFormComponent_form_0_Template_button_click_13_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.close("Close Import Products Dialog"));
    });
    \u0275\u0275text(14);
    \u0275\u0275pipe(15, "cxTranslate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "button", 7);
    \u0275\u0275text(17);
    \u0275\u0275pipe(18, "cxTranslate");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    let tmp_9_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("formGroup", ctx_r1.form);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 10, "importEntriesDialog.importProductsSubtitle"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(6, 12, "importEntriesDialog.importProductFileDetails"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("formControl", ctx_r1.form.get("file"))("accept", ctx_r1.allowedTypes);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(10, 14, "importEntriesDialog.selectFile"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("control", ctx_r1.form.get("file"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(15, 16, "importEntriesDialog.cancel"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ((tmp_9_0 = ctx_r1.form.get("file")) == null ? null : tmp_9_0.status) === "PENDING");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(18, 18, "importEntriesDialog.upload"), " ");
  }
}
var _c1 = (a0) => ({
  count: a0
});
function ImportEntriesSummaryComponent_p_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "cxTranslate");
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(2, 1, "importEntriesDialog.summary.loaded", ctx_r0.summary), " ");
  }
}
function ImportEntriesSummaryComponent_p_1_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "cxTranslate");
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(2, 1, "importEntriesDialog.summary.loadedToCart", ctx_r0.summary), " ");
  }
}
function ImportEntriesSummaryComponent_p_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 9);
    \u0275\u0275template(1, ImportEntriesSummaryComponent_p_1_ng_container_1_Template, 3, 4, "ng-container", 10)(2, ImportEntriesSummaryComponent_p_1_ng_container_2_Template, 3, 4, "ng-container", 11);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("ngSwitch", ctx_r0.type);
    \u0275\u0275advance();
    \u0275\u0275property("ngSwitchCase", ctx_r0.orderEntriesSource.QUICK_ORDER);
  }
}
function ImportEntriesSummaryComponent_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "cxTranslate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(2, 1, "importEntriesDialog.summary.loading", ctx_r0.summary), " ");
  }
}
function ImportEntriesSummaryComponent_p_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 12);
    \u0275\u0275element(1, "cx-icon", 13);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "cxTranslate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("type", ctx_r0.iconTypes.SUCCESS);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(3, 2, "importEntriesDialog.summary.successes", ctx_r0.summary), "\n");
  }
}
function ImportEntriesSummaryComponent_div_5_ul_8_li_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "cxTranslate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const message_r3 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(2, 1, "importEntriesDialog.summary.messages." + message_r3.statusCode, message_r3), " ");
  }
}
function ImportEntriesSummaryComponent_div_5_ul_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ul");
    \u0275\u0275template(1, ImportEntriesSummaryComponent_div_5_ul_8_li_1_Template, 3, 4, "li", 18);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r0.summary.warningMessages);
  }
}
function ImportEntriesSummaryComponent_div_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 14)(1, "p");
    \u0275\u0275element(2, "cx-icon", 15);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "cxTranslate");
    \u0275\u0275elementStart(5, "button", 16);
    \u0275\u0275listener("click", function ImportEntriesSummaryComponent_div_5_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.toggleWarningList());
    });
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "cxTranslate");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(8, ImportEntriesSummaryComponent_div_5_ul_8_Template, 2, 1, "ul", 17);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("type", ctx_r0.iconTypes.ERROR);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(4, 4, "importEntriesDialog.summary.warning", \u0275\u0275pureFunction1(9, _c1, ctx_r0.summary.warningMessages.length)), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(7, 7, ctx_r0.warningDetailsOpened ? "importEntriesDialog.summary.hide" : "importEntriesDialog.summary.show"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r0.warningDetailsOpened);
  }
}
function ImportEntriesSummaryComponent_div_6_ul_8_li_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "cxTranslate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const message_r5 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(2, 1, "importEntriesDialog.summary.messages." + message_r5.statusCode, message_r5), " ");
  }
}
function ImportEntriesSummaryComponent_div_6_ul_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ul");
    \u0275\u0275template(1, ImportEntriesSummaryComponent_div_6_ul_8_li_1_Template, 3, 4, "li", 18);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r0.summary.errorMessages);
  }
}
function ImportEntriesSummaryComponent_div_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 19)(1, "p");
    \u0275\u0275element(2, "cx-icon", 20);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "cxTranslate");
    \u0275\u0275elementStart(5, "button", 16);
    \u0275\u0275listener("click", function ImportEntriesSummaryComponent_div_6_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.toggleErrorList());
    });
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "cxTranslate");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(8, ImportEntriesSummaryComponent_div_6_ul_8_Template, 2, 1, "ul", 17);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("type", ctx_r0.iconTypes.RESET);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(4, 4, "importEntriesDialog.summary.error", \u0275\u0275pureFunction1(9, _c1, ctx_r0.summary.errorMessages.length)), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(7, 7, ctx_r0.errorDetailsOpened ? "importEntriesDialog.summary.hide" : "importEntriesDialog.summary.show"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r0.errorDetailsOpened);
  }
}
function ImportEntriesSummaryComponent_button_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 21);
    \u0275\u0275listener("click", function ImportEntriesSummaryComponent_button_8_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.close("Close Import Products Dialog"));
    });
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "cxTranslate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "importEntriesDialog.close"), " ");
  }
}
function ImportEntriesSummaryComponent_ng_template_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "cxTranslate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "importEntriesDialog.summary.info"));
  }
}
function ImportToNewSavedCartFormComponent_form_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "form", 1);
    \u0275\u0275listener("submit", function ImportToNewSavedCartFormComponent_form_0_Template_form_submit_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.formSubmitSubject$.next(void 0));
    });
    \u0275\u0275elementStart(1, "p", 2);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "cxTranslate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p");
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "cxTranslate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "label")(8, "cx-file-upload", 3);
    \u0275\u0275listener("update", function ImportToNewSavedCartFormComponent_form_0_Template_cx_file_upload_update_8_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.updateCartName());
    });
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "cxTranslate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(11, "cx-form-errors", 4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 5)(13, "label")(14, "span", 6);
    \u0275\u0275text(15);
    \u0275\u0275pipe(16, "cxTranslate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(17, "input", 7)(18, "cx-form-errors", 8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "div", 5)(20, "label")(21, "span", 6);
    \u0275\u0275text(22);
    \u0275\u0275pipe(23, "cxTranslate");
    \u0275\u0275elementStart(24, "span", 9);
    \u0275\u0275text(25);
    \u0275\u0275pipe(26, "cxTranslate");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(27, "textarea", 10)(28, "cx-form-errors", 8);
    \u0275\u0275elementStart(29, "p", 11);
    \u0275\u0275text(30);
    \u0275\u0275pipe(31, "cxTranslate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(32, "div", 12)(33, "button", 13);
    \u0275\u0275listener("click", function ImportToNewSavedCartFormComponent_form_0_Template_button_click_33_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.close("Close Import Products Dialog"));
    });
    \u0275\u0275text(34);
    \u0275\u0275pipe(35, "cxTranslate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "button", 14);
    \u0275\u0275text(37);
    \u0275\u0275pipe(38, "cxTranslate");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    let tmp_17_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("formGroup", ctx_r1.form);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 18, "importEntriesDialog.importProductsNewSavedCartSubtitle"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(6, 20, "importEntriesDialog.importProductFileDetails"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("formControl", ctx_r1.form.get("file"))("accept", ctx_r1.allowedTypes);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(10, 22, "importEntriesDialog.selectFile"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("control", ctx_r1.form.get("file"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(16, 24, "importEntriesDialog.savedCartName"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("maxLength", ctx_r1.nameMaxLength);
    \u0275\u0275advance();
    \u0275\u0275property("control", ctx_r1.form.get("name"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(23, 26, "importEntriesDialog.savedCartDescription"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" (", \u0275\u0275pipeBind1(26, 28, "importEntriesDialog.optional"), ") ");
    \u0275\u0275advance(2);
    \u0275\u0275property("maxLength", ctx_r1.descriptionMaxLength);
    \u0275\u0275advance();
    \u0275\u0275property("control", ctx_r1.form.get("description"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(31, 30, "importEntriesDialog.charactersLeft", \u0275\u0275pureFunction1(37, _c1, ctx_r1.descriptionsCharacterLeft)), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(35, 33, "importEntriesDialog.cancel"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ((tmp_17_0 = ctx_r1.form.get("file")) == null ? null : tmp_17_0.status) === "PENDING");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(38, 35, "importEntriesDialog.upload"), " ");
  }
}
function ImportEntriesDialogComponent_ng_container_12_ng_container_1_cx_import_to_new_saved_cart_form_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "cx-import-to-new-saved-cart-form", 12);
    \u0275\u0275listener("submitEvent", function ImportEntriesDialogComponent_ng_container_12_ng_container_1_cx_import_to_new_saved_cart_form_1_Template_cx_import_to_new_saved_cart_form_submitEvent_0_listener($event) {
      \u0275\u0275restoreView(_r1);
      const context_r2 = \u0275\u0275nextContext(2).ngIf;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.importProducts(context_r2, $event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const context_r2 = \u0275\u0275nextContext(2).ngIf;
    \u0275\u0275property("type", context_r2.type);
  }
}
function ImportEntriesDialogComponent_ng_container_12_ng_container_1_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "cx-import-entries-form", 12);
    \u0275\u0275listener("submitEvent", function ImportEntriesDialogComponent_ng_container_12_ng_container_1_ng_template_2_Template_cx_import_entries_form_submitEvent_0_listener($event) {
      \u0275\u0275restoreView(_r4);
      const context_r2 = \u0275\u0275nextContext(2).ngIf;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.importProducts(context_r2, $event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const context_r2 = \u0275\u0275nextContext(2).ngIf;
    \u0275\u0275property("type", context_r2.type);
  }
}
function ImportEntriesDialogComponent_ng_container_12_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, ImportEntriesDialogComponent_ng_container_12_ng_container_1_cx_import_to_new_saved_cart_form_1_Template, 1, 1, "cx-import-to-new-saved-cart-form", 11)(2, ImportEntriesDialogComponent_ng_container_12_ng_container_1_ng_template_2_Template, 1, 1, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const reducedForm_r5 = \u0275\u0275reference(3);
    const context_r2 = \u0275\u0275nextContext().ngIf;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.isNewCartForm(context_r2))("ngIfElse", reducedForm_r5);
  }
}
function ImportEntriesDialogComponent_ng_container_12_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "cx-import-entries-summary", 13);
    \u0275\u0275pipe(1, "async");
    \u0275\u0275listener("closeEvent", function ImportEntriesDialogComponent_ng_container_12_ng_template_2_Template_cx_import_entries_summary_closeEvent_0_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.close("Close Import Products Dialog"));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const context_r2 = \u0275\u0275nextContext().ngIf;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("summary", \u0275\u0275pipeBind1(1, 2, ctx_r2.summary$))("type", context_r2.type);
  }
}
function ImportEntriesDialogComponent_ng_container_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, ImportEntriesDialogComponent_ng_container_12_ng_container_1_Template, 4, 2, "ng-container", 10)(2, ImportEntriesDialogComponent_ng_container_12_ng_template_2_Template, 2, 4, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const importSummary_r7 = \u0275\u0275reference(3);
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.formState)("ngIfElse", importSummary_r7);
  }
}
function ImportExportOrderEntriesComponent_cx_import_order_entries_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "cx-import-order-entries");
  }
}
function ImportExportOrderEntriesComponent_cx_export_order_entries_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "cx-export-order-entries");
  }
}
var _ExportOrderEntriesToCsvService = class _ExportOrderEntriesToCsvService {
  constructor(exportCsvFileService, importExportConfig, globalMessageService, translationService) {
    this.exportCsvFileService = exportCsvFileService;
    this.importExportConfig = importExportConfig;
    this.globalMessageService = globalMessageService;
    this.translationService = translationService;
    this.columns = [{
      name: {
        key: "code"
      },
      value: "product.code"
    }, {
      name: {
        key: "quantity"
      },
      value: "quantity"
    }, ...this.exportConfig?.additionalColumns ?? []];
  }
  get exportConfig() {
    return this.importExportConfig.cartImportExport?.export;
  }
  get separator() {
    return this.importExportConfig.cartImportExport?.file.separator;
  }
  downloadCsv(entries) {
    this.getResolvedEntries(entries).pipe(take(1)).subscribe((csvData) => this.download(csvData));
  }
  resolveValue(combinedKeys, entry) {
    return combinedKeys.split(".").reduce((obj, key) => obj ? obj[key] : "", entry)?.toString() ?? "";
  }
  resolveValues(entries) {
    return entries.map((entry) => this.columns.map((column) => this.resolveValue(column.value, entry)));
  }
  getTranslatedColumnHeaders() {
    return combineLatest(this.columns.map((column) => this.translationService.translate(`exportEntries.columnNames.${column.name.key}`)));
  }
  displayExportMessage() {
    this.globalMessageService.add({
      key: "exportEntries.exportMessage"
    }, GlobalMessageType.MSG_TYPE_INFO);
  }
  limitValues(data) {
    return this.exportConfig?.maxEntries ? data.splice(0, this.exportConfig?.maxEntries) : data;
  }
  getResolvedEntries(entries) {
    const values = this.limitValues(this.resolveValues(entries));
    return this.getTranslatedColumnHeaders().pipe(map((headers) => {
      return [headers, ...values];
    }));
  }
  download(entries) {
    if (this.exportConfig?.messageEnabled) {
      this.displayExportMessage();
    }
    setTimeout(() => {
      if (this.exportConfig !== void 0 && this.separator !== void 0) {
        this.exportCsvFileService.download(entries, this.separator, this.exportConfig.fileOptions);
      }
    }, this.exportConfig?.downloadDelay ?? 0);
  }
};
_ExportOrderEntriesToCsvService.\u0275fac = function ExportOrderEntriesToCsvService_Factory(t) {
  return new (t || _ExportOrderEntriesToCsvService)(\u0275\u0275inject(ExportCsvFileService), \u0275\u0275inject(ImportExportConfig), \u0275\u0275inject(GlobalMessageService), \u0275\u0275inject(TranslationService));
};
_ExportOrderEntriesToCsvService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
  token: _ExportOrderEntriesToCsvService,
  factory: _ExportOrderEntriesToCsvService.\u0275fac,
  providedIn: "root"
});
var ExportOrderEntriesToCsvService = _ExportOrderEntriesToCsvService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ExportOrderEntriesToCsvService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: ExportCsvFileService
  }, {
    type: ImportExportConfig
  }, {
    type: GlobalMessageService
  }, {
    type: TranslationService
  }], null);
})();
var _ExportOrderEntriesComponent = class _ExportOrderEntriesComponent {
  constructor(exportEntriesService, contextService) {
    this.exportEntriesService = exportEntriesService;
    this.contextService = contextService;
    this.styles = "container";
    this.orderEntriesContext$ = this.contextService.get(ORDER_ENTRIES_CONTEXT);
    this.entries$ = this.orderEntriesContext$.pipe(switchMap((orderEntriesContext) => orderEntriesContext?.getEntries?.() ?? of(void 0)));
  }
  exportCsv(entries) {
    this.exportEntriesService.downloadCsv(entries);
  }
};
_ExportOrderEntriesComponent.\u0275fac = function ExportOrderEntriesComponent_Factory(t) {
  return new (t || _ExportOrderEntriesComponent)(\u0275\u0275directiveInject(ExportOrderEntriesToCsvService), \u0275\u0275directiveInject(ContextService));
};
_ExportOrderEntriesComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
  type: _ExportOrderEntriesComponent,
  selectors: [["cx-export-order-entries"]],
  hostVars: 2,
  hostBindings: function ExportOrderEntriesComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      \u0275\u0275classMap(ctx.styles);
    }
  },
  decls: 3,
  vars: 5,
  consts: [["class", "btn btn-tertiary cx-export-btn", 3, "click", 4, "ngIf"], [1, "btn", "btn-tertiary", "cx-export-btn", 3, "click"]],
  template: function ExportOrderEntriesComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275template(0, ExportOrderEntriesComponent_button_0_Template, 3, 3, "button", 0);
      \u0275\u0275pipe(1, "async");
      \u0275\u0275pipe(2, "async");
    }
    if (rf & 2) {
      let tmp_0_0;
      \u0275\u0275property("ngIf", ((tmp_0_0 = \u0275\u0275pipeBind1(1, 1, ctx.entries$)) == null ? null : tmp_0_0.length) > 0 && \u0275\u0275pipeBind1(2, 3, ctx.entries$));
    }
  },
  dependencies: [NgIf, AsyncPipe, TranslatePipe],
  encapsulation: 2,
  changeDetection: 0
});
var ExportOrderEntriesComponent = _ExportOrderEntriesComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ExportOrderEntriesComponent, [{
    type: Component,
    args: [{
      selector: "cx-export-order-entries",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: `<button
  *ngIf="(entries$ | async)?.length > 0 && (entries$ | async) as entries"
  class="btn btn-tertiary cx-export-btn"
  (click)="exportCsv(entries)"
>
  {{ 'exportEntries.exportProductToCsv' | cxTranslate }}
</button>
`
    }]
  }], () => [{
    type: ExportOrderEntriesToCsvService
  }, {
    type: ContextService
  }], {
    styles: [{
      type: HostBinding,
      args: ["class"]
    }]
  });
})();
var _ExportOrderEntriesModule = class _ExportOrderEntriesModule {
};
_ExportOrderEntriesModule.\u0275fac = function ExportOrderEntriesModule_Factory(t) {
  return new (t || _ExportOrderEntriesModule)();
};
_ExportOrderEntriesModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
  type: _ExportOrderEntriesModule
});
_ExportOrderEntriesModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
  imports: [CommonModule, RouterModule, I18nModule, UrlModule, ConfigModule.withConfig({
    cmsComponents: {
      ExportOrderEntriesComponent: {
        component: ExportOrderEntriesComponent
      }
    }
  })]
});
var ExportOrderEntriesModule = _ExportOrderEntriesModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ExportOrderEntriesModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, RouterModule, I18nModule, UrlModule, ConfigModule.withConfig({
        cmsComponents: {
          ExportOrderEntriesComponent: {
            component: ExportOrderEntriesComponent
          }
        }
      })],
      exports: [ExportOrderEntriesComponent],
      declarations: [ExportOrderEntriesComponent]
    }]
  }], null, null);
})();
var _ImportOrderEntriesComponent = class _ImportOrderEntriesComponent {
  constructor(launchDialogService, contextService) {
    this.launchDialogService = launchDialogService;
    this.contextService = contextService;
    this.subscription = new Subscription();
    this.orderEntriesContext$ = this.contextService.get(ORDER_ENTRIES_CONTEXT);
  }
  openDialog(orderEntriesContext) {
    this.launchDialogService.openDialogAndSubscribe("IMPORT_TO_CART", this.element, {
      orderEntriesContext
    });
  }
};
_ImportOrderEntriesComponent.\u0275fac = function ImportOrderEntriesComponent_Factory(t) {
  return new (t || _ImportOrderEntriesComponent)(\u0275\u0275directiveInject(LaunchDialogService), \u0275\u0275directiveInject(ContextService));
};
_ImportOrderEntriesComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
  type: _ImportOrderEntriesComponent,
  selectors: [["cx-import-order-entries"]],
  viewQuery: function ImportOrderEntriesComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(_c0, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.element = _t.first);
    }
  },
  decls: 2,
  vars: 3,
  consts: [["class", "btn btn-tertiary cx-import-btn", 3, "click", 4, "ngIf"], [1, "btn", "btn-tertiary", "cx-import-btn", 3, "click"]],
  template: function ImportOrderEntriesComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275template(0, ImportOrderEntriesComponent_button_0_Template, 3, 3, "button", 0);
      \u0275\u0275pipe(1, "async");
    }
    if (rf & 2) {
      \u0275\u0275property("ngIf", \u0275\u0275pipeBind1(1, 1, ctx.orderEntriesContext$));
    }
  },
  dependencies: [NgIf, AsyncPipe, TranslatePipe],
  encapsulation: 2,
  changeDetection: 0
});
var ImportOrderEntriesComponent = _ImportOrderEntriesComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ImportOrderEntriesComponent, [{
    type: Component,
    args: [{
      selector: "cx-import-order-entries",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: `<button
  *ngIf="orderEntriesContext$ | async as orderEntriesContext"
  class="btn btn-tertiary cx-import-btn"
  (click)="openDialog(orderEntriesContext)"
>
  {{ 'importEntries.importProducts' | cxTranslate }}
</button>
`
    }]
  }], () => [{
    type: LaunchDialogService
  }, {
    type: ContextService
  }], {
    element: [{
      type: ViewChild,
      args: ["open"]
    }]
  });
})();
var _ImportProductsFromCsvService = class _ImportProductsFromCsvService {
  constructor() {
  }
  csvDataToProduct(csvData) {
    return csvData.map((row) => ({
      productCode: row[0],
      quantity: Number(row[1])
    }));
  }
  isDataParsableToProducts(data) {
    const patternRegex = new RegExp(/(?:\s|^)\d+(?=\s|$)/);
    return data.length > 0 && data.every((row) => patternRegex.test(row[1]));
  }
};
_ImportProductsFromCsvService.\u0275fac = function ImportProductsFromCsvService_Factory(t) {
  return new (t || _ImportProductsFromCsvService)();
};
_ImportProductsFromCsvService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
  token: _ImportProductsFromCsvService,
  factory: _ImportProductsFromCsvService.\u0275fac,
  providedIn: "root"
});
var ImportProductsFromCsvService = _ImportProductsFromCsvService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ImportProductsFromCsvService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();
var _ImportEntriesFormComponent = class _ImportEntriesFormComponent {
  constructor(launchDialogService, importToCartService, importCsvService, filesFormValidators, importExportConfig) {
    this.launchDialogService = launchDialogService;
    this.importToCartService = importToCartService;
    this.importCsvService = importCsvService;
    this.filesFormValidators = filesFormValidators;
    this.importExportConfig = importExportConfig;
    this.formSubmitSubject$ = new Subject();
    this.submitEvent = new EventEmitter();
  }
  ngOnInit() {
    this.form = this.buildForm();
    this.formSubmitSubject$.pipe(tap(() => {
      if (this.form.invalid) {
        this.form.markAllAsTouched();
        FormUtils.deepUpdateValueAndValidity(this.form);
      }
    }), switchMap(() => this.form.statusChanges.pipe(startWith(this.form.get("file")?.status), filter((status) => status !== "PENDING"), take(1))), filter((status) => status === "VALID")).subscribe(() => {
      this.save();
    });
  }
  close(reason) {
    this.launchDialogService.closeDialog(reason);
  }
  save() {
    const file = this.form.get("file")?.value?.[0];
    if (this.separator !== void 0) {
      this.importCsvService.loadFile(file, this.separator).subscribe((loadedFile) => {
        this.submitEvent.emit({
          products: this.importToCartService.csvDataToProduct(loadedFile)
        });
      });
    }
  }
  buildForm() {
    const form = new UntypedFormGroup({});
    form.setControl("file", new UntypedFormControl("", [Validators.required, this.filesFormValidators.maxSize(this.maxSize)], [(control) => this.separator !== void 0 ? this.importCsvService.validateFile(control.value[0], {
      separator: this.separator,
      isDataParsable: this.importToCartService.isDataParsableToProducts,
      maxEntries: this.maxEntries
    }) : of(null)]));
    return form;
  }
  get allowedTypes() {
    return this.importExportConfig.cartImportExport?.import?.fileValidity?.allowedTypes;
  }
  get maxSize() {
    return this.importExportConfig.cartImportExport?.import?.fileValidity?.maxSize;
  }
  get maxEntries() {
    return this.importExportConfig.cartImportExport?.import?.fileValidity?.maxEntries?.[this.type];
  }
  get separator() {
    return this.importExportConfig.cartImportExport?.file.separator;
  }
};
_ImportEntriesFormComponent.\u0275fac = function ImportEntriesFormComponent_Factory(t) {
  return new (t || _ImportEntriesFormComponent)(\u0275\u0275directiveInject(LaunchDialogService), \u0275\u0275directiveInject(ImportProductsFromCsvService), \u0275\u0275directiveInject(ImportCsvFileService), \u0275\u0275directiveInject(FilesFormValidators), \u0275\u0275directiveInject(ImportExportConfig));
};
_ImportEntriesFormComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
  type: _ImportEntriesFormComponent,
  selectors: [["cx-import-entries-form"]],
  inputs: {
    type: "type"
  },
  outputs: {
    submitEvent: "submitEvent"
  },
  decls: 1,
  vars: 1,
  consts: [[3, "formGroup", "submit", 4, "ngIf"], [3, "submit", "formGroup"], [1, "cx-import-entries-subtitle"], [3, "formControl", "accept"], ["prefix", "formErrors.file", 3, "control"], [1, "cx-import-entries-footer"], ["type", "button", 1, "btn", "btn-secondary", 3, "click"], ["type", "submit", 1, "btn", "btn-primary", 3, "disabled"]],
  template: function ImportEntriesFormComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275template(0, ImportEntriesFormComponent_form_0_Template, 19, 20, "form", 0);
    }
    if (rf & 2) {
      \u0275\u0275property("ngIf", ctx.form);
    }
  },
  dependencies: [NgIf, \u0275NgNoValidate, NgControlStatus, NgControlStatusGroup, FormControlDirective, FormGroupDirective, FormErrorsComponent, FileUploadComponent, TranslatePipe],
  encapsulation: 2,
  changeDetection: 0
});
var ImportEntriesFormComponent = _ImportEntriesFormComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ImportEntriesFormComponent, [{
    type: Component,
    args: [{
      selector: "cx-import-entries-form",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: `<form
  *ngIf="form"
  [formGroup]="form"
  (submit)="formSubmitSubject$.next(undefined)"
>
  <p class="cx-import-entries-subtitle">
    {{ 'importEntriesDialog.importProductsSubtitle' | cxTranslate }}
  </p>
  <p>
    {{ 'importEntriesDialog.importProductFileDetails' | cxTranslate }}
  </p>
  <label>
    <cx-file-upload [formControl]="form.get('file')" [accept]="allowedTypes">
      {{ 'importEntriesDialog.selectFile' | cxTranslate }}
    </cx-file-upload>
    <cx-form-errors
      [control]="form.get('file')"
      prefix="formErrors.file"
    ></cx-form-errors>
  </label>
  <div class="cx-import-entries-footer">
    <button
      (click)="close('Close Import Products Dialog')"
      class="btn btn-secondary"
      type="button"
    >
      {{ 'importEntriesDialog.cancel' | cxTranslate }}
    </button>
    <button
      class="btn btn-primary"
      type="submit"
      [disabled]="form.get('file')?.status === 'PENDING'"
    >
      {{ 'importEntriesDialog.upload' | cxTranslate }}
    </button>
  </div>
</form>
`
    }]
  }], () => [{
    type: LaunchDialogService
  }, {
    type: ImportProductsFromCsvService
  }, {
    type: ImportCsvFileService
  }, {
    type: FilesFormValidators
  }, {
    type: ImportExportConfig
  }], {
    submitEvent: [{
      type: Output
    }],
    type: [{
      type: Input
    }]
  });
})();
var _ImportEntriesSummaryComponent = class _ImportEntriesSummaryComponent {
  constructor() {
    this.iconTypes = ICON_TYPE;
    this.orderEntriesSource = OrderEntriesSource;
    this.warningDetailsOpened = false;
    this.errorDetailsOpened = false;
    this.closeEvent = new EventEmitter();
  }
  close(reason) {
    this.closeEvent.emit(reason);
  }
  toggleWarningList() {
    this.warningDetailsOpened = !this.warningDetailsOpened;
  }
  toggleErrorList() {
    this.errorDetailsOpened = !this.errorDetailsOpened;
  }
};
_ImportEntriesSummaryComponent.\u0275fac = function ImportEntriesSummaryComponent_Factory(t) {
  return new (t || _ImportEntriesSummaryComponent)();
};
_ImportEntriesSummaryComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
  type: _ImportEntriesSummaryComponent,
  selectors: [["cx-import-entries-summary"]],
  inputs: {
    type: "type",
    summary: "summary"
  },
  outputs: {
    closeEvent: "closeEvent"
  },
  decls: 11,
  vars: 7,
  consts: [["loading", ""], ["info", ""], [1, "cx-import-entries-summary-status"], [3, "ngSwitch", 4, "ngIf", "ngIfElse"], ["class", "cx-import-entries-summary-successes", 4, "ngIf"], ["class", "cx-import-entries-summary-warnings", 4, "ngIf"], ["class", "cx-import-entries-summary-errors", 4, "ngIf"], [1, "cx-import-entries-summary-footer"], ["class", "btn btn-secondary", "type", "button", 3, "click", 4, "ngIf", "ngIfElse"], [3, "ngSwitch"], [4, "ngSwitchCase"], [4, "ngSwitchDefault"], [1, "cx-import-entries-summary-successes"], [1, "success", 3, "type"], [1, "cx-import-entries-summary-warnings"], [1, "warning", 3, "type"], [1, "btn", "btn-tertiary", 3, "click"], [4, "ngIf"], [4, "ngFor", "ngForOf"], [1, "cx-import-entries-summary-errors"], [1, "error", 3, "type"], ["type", "button", 1, "btn", "btn-secondary", 3, "click"]],
  template: function ImportEntriesSummaryComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 2);
      \u0275\u0275template(1, ImportEntriesSummaryComponent_p_1_Template, 3, 2, "p", 3)(2, ImportEntriesSummaryComponent_ng_template_2_Template, 3, 4, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
      \u0275\u0275elementEnd();
      \u0275\u0275template(4, ImportEntriesSummaryComponent_p_4_Template, 4, 5, "p", 4)(5, ImportEntriesSummaryComponent_div_5_Template, 9, 11, "div", 5)(6, ImportEntriesSummaryComponent_div_6_Template, 9, 11, "div", 6);
      \u0275\u0275elementStart(7, "div", 7);
      \u0275\u0275template(8, ImportEntriesSummaryComponent_button_8_Template, 3, 3, "button", 8)(9, ImportEntriesSummaryComponent_ng_template_9_Template, 3, 3, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      const loading_r7 = \u0275\u0275reference(3);
      const info_r8 = \u0275\u0275reference(10);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.summary.loading)("ngIfElse", loading_r7);
      \u0275\u0275advance(3);
      \u0275\u0275property("ngIf", ctx.summary.successesCount > 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.summary.warningMessages.length > 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.summary.errorMessages.length > 0);
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", !ctx.summary.loading)("ngIfElse", info_r8);
    }
  },
  dependencies: [NgForOf, NgIf, NgSwitch, NgSwitchCase, NgSwitchDefault, IconComponent, TranslatePipe],
  encapsulation: 2,
  changeDetection: 0
});
var ImportEntriesSummaryComponent = _ImportEntriesSummaryComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ImportEntriesSummaryComponent, [{
    type: Component,
    args: [{
      selector: "cx-import-entries-summary",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: `<div class="cx-import-entries-summary-status">
  <p *ngIf="!summary.loading; else loading" [ngSwitch]="type">
    <ng-container *ngSwitchCase="orderEntriesSource.QUICK_ORDER">
      {{ 'importEntriesDialog.summary.loaded' | cxTranslate: summary }}
    </ng-container>
    <ng-container *ngSwitchDefault>
      {{ 'importEntriesDialog.summary.loadedToCart' | cxTranslate: summary }}
    </ng-container>
  </p>
  <ng-template #loading>
    <p>
      {{ 'importEntriesDialog.summary.loading' | cxTranslate: summary }}
    </p>
  </ng-template>
</div>
<p
  *ngIf="summary.successesCount > 0"
  class="cx-import-entries-summary-successes"
>
  <cx-icon class="success" [type]="iconTypes.SUCCESS"></cx-icon>
  {{ 'importEntriesDialog.summary.successes' | cxTranslate: summary }}
</p>
<div
  *ngIf="summary.warningMessages.length > 0"
  class="cx-import-entries-summary-warnings"
>
  <p>
    <cx-icon class="warning" [type]="iconTypes.ERROR"></cx-icon>
    {{
      'importEntriesDialog.summary.warning'
        | cxTranslate: { count: summary.warningMessages.length }
    }}
    <button class="btn btn-tertiary" (click)="toggleWarningList()">
      {{
        (warningDetailsOpened
          ? 'importEntriesDialog.summary.hide'
          : 'importEntriesDialog.summary.show'
        ) | cxTranslate
      }}
    </button>
  </p>
  <ul *ngIf="warningDetailsOpened">
    <li *ngFor="let message of summary.warningMessages">
      {{
        'importEntriesDialog.summary.messages.' + message.statusCode
          | cxTranslate: message
      }}
    </li>
  </ul>
</div>
<div
  *ngIf="summary.errorMessages.length > 0"
  class="cx-import-entries-summary-errors"
>
  <p>
    <cx-icon class="error" [type]="iconTypes.RESET"></cx-icon>
    {{
      'importEntriesDialog.summary.error'
        | cxTranslate: { count: summary.errorMessages.length }
    }}
    <button class="btn btn-tertiary" (click)="toggleErrorList()">
      {{
        (errorDetailsOpened
          ? 'importEntriesDialog.summary.hide'
          : 'importEntriesDialog.summary.show'
        ) | cxTranslate
      }}
    </button>
  </p>
  <ul *ngIf="errorDetailsOpened">
    <li *ngFor="let message of summary.errorMessages">
      {{
        'importEntriesDialog.summary.messages.' + message.statusCode
          | cxTranslate: message
      }}
    </li>
  </ul>
</div>
<div class="cx-import-entries-summary-footer">
  <button
    *ngIf="!summary.loading; else info"
    (click)="close('Close Import Products Dialog')"
    class="btn btn-secondary"
    type="button"
  >
    {{ 'importEntriesDialog.close' | cxTranslate }}
  </button>
  <ng-template #info>
    <p>{{ 'importEntriesDialog.summary.info' | cxTranslate }}</p>
  </ng-template>
</div>
`
    }]
  }], null, {
    type: [{
      type: Input
    }],
    summary: [{
      type: Input
    }],
    closeEvent: [{
      type: Output
    }]
  });
})();
var _ImportToNewSavedCartFormComponent = class _ImportToNewSavedCartFormComponent extends ImportEntriesFormComponent {
  get descriptionsCharacterLeft() {
    return this.descriptionMaxLength - (this.form.get("description")?.value?.length || 0);
  }
  constructor(launchDialogService, importToCartService, importCsvService, filesFormValidators, importExportConfig, datePipe) {
    super(launchDialogService, importToCartService, importCsvService, filesFormValidators, importExportConfig);
    this.launchDialogService = launchDialogService;
    this.importToCartService = importToCartService;
    this.importCsvService = importCsvService;
    this.filesFormValidators = filesFormValidators;
    this.importExportConfig = importExportConfig;
    this.datePipe = datePipe;
    this.descriptionMaxLength = 250;
    this.nameMaxLength = 50;
    this.submitEvent = new EventEmitter();
  }
  save() {
    const file = this.form.get("file")?.value?.[0];
    if (this.separator !== void 0) {
      this.importCsvService.loadFile(file, this.separator).subscribe((loadedFile) => {
        this.submitEvent.emit({
          products: this.importToCartService.csvDataToProduct(loadedFile),
          savedCartInfo: {
            name: this.form.get("name")?.value,
            description: this.form.get("description")?.value
          }
        });
      });
    }
  }
  buildForm() {
    const form = new UntypedFormGroup({});
    form.setControl("file", new UntypedFormControl("", [Validators.required, this.filesFormValidators.maxSize(this.maxSize)], [(control) => this.separator !== void 0 ? this.importCsvService.validateFile(control.value[0], {
      separator: this.separator,
      isDataParsable: this.importToCartService.isDataParsableToProducts,
      maxEntries: this.maxEntries
    }) : of(null)]));
    form.setControl("name", new UntypedFormControl("", [Validators.required, Validators.maxLength(this.nameMaxLength)]));
    form.setControl("description", new UntypedFormControl("", [Validators.maxLength(this.descriptionMaxLength)]));
    return form;
  }
  updateCartName() {
    const nameField = this.form.get("name");
    if (nameField && !nameField?.value && this.cartNameGeneration?.source) {
      switch (this.cartNameGeneration.source) {
        case CartNameSource.FILE_NAME: {
          this.setFieldValueByFileName(nameField);
          break;
        }
        case CartNameSource.DATE_TIME: {
          this.setFieldValueByDatetime(nameField);
          break;
        }
        default: {
          break;
        }
      }
    }
  }
  setFieldValueByFileName(nameField) {
    const fileName = this.form.get("file")?.value?.[0]?.name?.replace(/\.[^/.]+$/, "");
    nameField.setValue(fileName);
  }
  setFieldValueByDatetime(nameField) {
    const date = /* @__PURE__ */ new Date();
    const fromDateOptions = this.cartNameGeneration?.fromDateOptions;
    const mask = fromDateOptions?.mask;
    const prefix = fromDateOptions?.prefix ?? "";
    const suffix = fromDateOptions?.suffix ?? "";
    const dateString = mask ? this.datePipe.transform(date, mask) : this.datePipe.transform(date);
    nameField.setValue(`${prefix}${dateString}${suffix}`);
  }
  get cartNameGeneration() {
    return this.importExportConfig.cartImportExport?.import?.cartNameGeneration;
  }
};
_ImportToNewSavedCartFormComponent.\u0275fac = function ImportToNewSavedCartFormComponent_Factory(t) {
  return new (t || _ImportToNewSavedCartFormComponent)(\u0275\u0275directiveInject(LaunchDialogService), \u0275\u0275directiveInject(ImportProductsFromCsvService), \u0275\u0275directiveInject(ImportCsvFileService), \u0275\u0275directiveInject(FilesFormValidators), \u0275\u0275directiveInject(ImportExportConfig), \u0275\u0275directiveInject(CxDatePipe));
};
_ImportToNewSavedCartFormComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
  type: _ImportToNewSavedCartFormComponent,
  selectors: [["cx-import-to-new-saved-cart-form"]],
  outputs: {
    submitEvent: "submitEvent"
  },
  features: [\u0275\u0275ProvidersFeature([CxDatePipe]), \u0275\u0275InheritDefinitionFeature],
  decls: 1,
  vars: 1,
  consts: [[3, "formGroup", "submit", 4, "ngIf"], [3, "submit", "formGroup"], [1, "cx-import-entries-subtitle"], [3, "update", "formControl", "accept"], ["prefix", "formErrors.file", 3, "control"], [1, "cx-import-entries-row"], [1, "cx-import-entries-label", "label-content"], ["formControlName", "name", "required", "", "type", "text", 1, "form-control", 3, "maxLength"], [3, "control"], [1, "cx-import-entries-label-optional"], ["formControlName", "description", "rows", "5", 1, "form-control", 3, "maxLength"], [1, "cx-import-entries-input-hint"], [1, "cx-import-entries-footer"], ["type", "button", 1, "btn", "btn-secondary", 3, "click"], ["type", "submit", 1, "btn", "btn-primary", 3, "disabled"]],
  template: function ImportToNewSavedCartFormComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275template(0, ImportToNewSavedCartFormComponent_form_0_Template, 39, 39, "form", 0);
    }
    if (rf & 2) {
      \u0275\u0275property("ngIf", ctx.form);
    }
  },
  dependencies: [NgIf, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, RequiredValidator, FormControlDirective, FormGroupDirective, FormControlName, FormErrorsComponent, FileUploadComponent, TranslatePipe],
  encapsulation: 2,
  changeDetection: 0
});
var ImportToNewSavedCartFormComponent = _ImportToNewSavedCartFormComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ImportToNewSavedCartFormComponent, [{
    type: Component,
    args: [{
      selector: "cx-import-to-new-saved-cart-form",
      changeDetection: ChangeDetectionStrategy.OnPush,
      providers: [CxDatePipe],
      template: `<form
  *ngIf="form"
  [formGroup]="form"
  (submit)="formSubmitSubject$.next(undefined)"
>
  <p class="cx-import-entries-subtitle">
    {{ 'importEntriesDialog.importProductsNewSavedCartSubtitle' | cxTranslate }}
  </p>
  <p>
    {{ 'importEntriesDialog.importProductFileDetails' | cxTranslate }}
  </p>
  <label>
    <cx-file-upload
      [formControl]="form.get('file')"
      (update)="updateCartName()"
      [accept]="allowedTypes"
    >
      {{ 'importEntriesDialog.selectFile' | cxTranslate }}
    </cx-file-upload>
    <cx-form-errors
      [control]="form.get('file')"
      prefix="formErrors.file"
    ></cx-form-errors>
  </label>
  <div class="cx-import-entries-row">
    <label>
      <span class="cx-import-entries-label label-content">
        {{ 'importEntriesDialog.savedCartName' | cxTranslate }}
      </span>
      <input
        [maxLength]="nameMaxLength"
        class="form-control"
        formControlName="name"
        required
        type="text"
      />
      <cx-form-errors [control]="form.get('name')"></cx-form-errors>
    </label>
  </div>

  <div class="cx-import-entries-row">
    <label>
      <span class="cx-import-entries-label label-content">
        {{ 'importEntriesDialog.savedCartDescription' | cxTranslate }}
        <span class="cx-import-entries-label-optional">
          ({{ 'importEntriesDialog.optional' | cxTranslate }})
        </span></span
      >
      <textarea
        [maxLength]="descriptionMaxLength"
        class="form-control"
        formControlName="description"
        rows="5"
      ></textarea>
      <cx-form-errors [control]="form.get('description')"></cx-form-errors>

      <p class="cx-import-entries-input-hint">
        {{
          'importEntriesDialog.charactersLeft'
            | cxTranslate: { count: descriptionsCharacterLeft }
        }}
      </p>
    </label>
  </div>
  <div class="cx-import-entries-footer">
    <button
      (click)="close('Close Import Products Dialog')"
      class="btn btn-secondary"
      type="button"
    >
      {{ 'importEntriesDialog.cancel' | cxTranslate }}
    </button>
    <button
      class="btn btn-primary"
      type="submit"
      [disabled]="form.get('file')?.status === 'PENDING'"
    >
      {{ 'importEntriesDialog.upload' | cxTranslate }}
    </button>
  </div>
</form>
`
    }]
  }], () => [{
    type: LaunchDialogService
  }, {
    type: ImportProductsFromCsvService
  }, {
    type: ImportCsvFileService
  }, {
    type: FilesFormValidators
  }, {
    type: ImportExportConfig
  }, {
    type: CxDatePipe
  }], {
    submitEvent: [{
      type: Output
    }]
  });
})();
var _ImportEntriesDialogComponent = class _ImportEntriesDialogComponent {
  constructor(launchDialogService) {
    this.launchDialogService = launchDialogService;
    this.iconTypes = ICON_TYPE;
    this.focusConfig = {
      trap: true,
      block: true,
      autofocus: "button",
      focusOnEscape: true
    };
    this.formState = true;
    this.summary$ = new BehaviorSubject({
      loading: false,
      cartName: "",
      count: 0,
      total: 0,
      successesCount: 0,
      warningMessages: [],
      errorMessages: []
    });
    this.context$ = this.launchDialogService.data$.pipe(map((data) => data.orderEntriesContext));
  }
  isNewCartForm(context) {
    return context.type === OrderEntriesSource.NEW_SAVED_CART;
  }
  close(reason) {
    this.launchDialogService.closeDialog(reason);
  }
  importProducts(context, {
    products,
    savedCartInfo
  }) {
    this.formState = false;
    this.summary$.next(__spreadProps(__spreadValues({}, this.summary$.value), {
      loading: true,
      total: products.length,
      cartName: savedCartInfo?.name
    }));
    context.addEntries(products, savedCartInfo).pipe(finalize(() => {
      this.summary$.next(__spreadProps(__spreadValues({}, this.summary$.value), {
        loading: false
      }));
    })).subscribe((action) => {
      this.populateSummary(action);
    });
  }
  populateSummary(action) {
    if (action.statusCode === ProductImportStatus.SUCCESS) {
      this.summary$.next(__spreadProps(__spreadValues({}, this.summary$.value), {
        count: this.summary$.value.count + 1,
        successesCount: this.summary$.value.successesCount + 1
      }));
    } else if (action.statusCode === ProductImportStatus.LOW_STOCK) {
      this.summary$.next(__spreadProps(__spreadValues({}, this.summary$.value), {
        count: this.summary$.value.count + 1,
        warningMessages: [...this.summary$.value.warningMessages, action]
      }));
    } else {
      this.summary$.next(__spreadProps(__spreadValues({}, this.summary$.value), {
        count: this.summary$.value.count + 1,
        errorMessages: [...this.summary$.value.errorMessages, action]
      }));
    }
  }
};
_ImportEntriesDialogComponent.\u0275fac = function ImportEntriesDialogComponent_Factory(t) {
  return new (t || _ImportEntriesDialogComponent)(\u0275\u0275directiveInject(LaunchDialogService));
};
_ImportEntriesDialogComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
  type: _ImportEntriesDialogComponent,
  selectors: [["cx-import-entries-dialog"]],
  decls: 14,
  vars: 14,
  consts: [["importSummary", ""], ["reducedForm", ""], [1, "cx-import-entries-dialog", 3, "esc", "cxFocus"], [1, "cx-import-entries-container"], [1, "modal-header", "cx-import-entries-header"], [1, "cx-import-entries-title", "modal-title"], ["type", "button", 1, "cx-import-entries-close", "close", 3, "click", "disabled"], ["aria-hidden", "true"], [3, "type"], [4, "ngIf"], [4, "ngIf", "ngIfElse"], [3, "type", "submitEvent", 4, "ngIf", "ngIfElse"], [3, "submitEvent", "type"], [3, "closeEvent", "summary", "type"]],
  template: function ImportEntriesDialogComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 2);
      \u0275\u0275listener("esc", function ImportEntriesDialogComponent_Template_div_esc_0_listener() {
        return ctx.close("Escape clicked");
      });
      \u0275\u0275elementStart(1, "div", 3)(2, "div", 4);
      \u0275\u0275elementContainerStart(3);
      \u0275\u0275elementStart(4, "div", 5);
      \u0275\u0275text(5);
      \u0275\u0275pipe(6, "cxTranslate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementContainerEnd();
      \u0275\u0275elementStart(7, "button", 6);
      \u0275\u0275pipe(8, "async");
      \u0275\u0275pipe(9, "cxTranslate");
      \u0275\u0275listener("click", function ImportEntriesDialogComponent_Template_button_click_7_listener() {
        return ctx.close("Close Import Products Dialog");
      });
      \u0275\u0275elementStart(10, "span", 7);
      \u0275\u0275element(11, "cx-icon", 8);
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(12, ImportEntriesDialogComponent_ng_container_12_Template, 4, 2, "ng-container", 9);
      \u0275\u0275pipe(13, "async");
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      let tmp_2_0;
      \u0275\u0275property("cxFocus", ctx.focusConfig);
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(6, 6, "importEntriesDialog.importProducts"), " ");
      \u0275\u0275advance(2);
      \u0275\u0275property("disabled", (tmp_2_0 = \u0275\u0275pipeBind1(8, 8, ctx.summary$)) == null ? null : tmp_2_0.loading);
      \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(9, 10, "importEntriesDialog.close"));
      \u0275\u0275advance(4);
      \u0275\u0275property("type", ctx.iconTypes.CLOSE);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", \u0275\u0275pipeBind1(13, 12, ctx.context$));
    }
  },
  dependencies: [NgIf, IconComponent, FocusDirective, ImportEntriesFormComponent, ImportEntriesSummaryComponent, ImportToNewSavedCartFormComponent, AsyncPipe, TranslatePipe],
  encapsulation: 2,
  changeDetection: 0
});
var ImportEntriesDialogComponent = _ImportEntriesDialogComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ImportEntriesDialogComponent, [{
    type: Component,
    args: [{
      selector: "cx-import-entries-dialog",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: `<div
  [cxFocus]="focusConfig"
  (esc)="close('Escape clicked')"
  class="cx-import-entries-dialog"
>
  <div class="cx-import-entries-container">
    <!-- Modal Header -->
    <div class="modal-header cx-import-entries-header">
      <ng-container>
        <div class="cx-import-entries-title modal-title">
          {{ 'importEntriesDialog.importProducts' | cxTranslate }}
        </div>
      </ng-container>

      <button
        (click)="close('Close Import Products Dialog')"
        [attr.aria-label]="'importEntriesDialog.close' | cxTranslate"
        class="cx-import-entries-close close"
        type="button"
        [disabled]="(summary$ | async)?.loading"
      >
        <span aria-hidden="true">
          <cx-icon [type]="iconTypes.CLOSE"></cx-icon>
        </span>
      </button>
    </div>

    <!-- Modal Body -->
    <ng-container *ngIf="context$ | async as context">
      <ng-container *ngIf="formState; else importSummary">
        <cx-import-to-new-saved-cart-form
          *ngIf="isNewCartForm(context); else reducedForm"
          [type]="context.type"
          (submitEvent)="importProducts(context, $event)"
        ></cx-import-to-new-saved-cart-form>
        <ng-template #reducedForm>
          <cx-import-entries-form
            [type]="context.type"
            (submitEvent)="importProducts(context, $event)"
          ></cx-import-entries-form>
        </ng-template>
      </ng-container>

      <ng-template #importSummary>
        <cx-import-entries-summary
          [summary]="summary$ | async"
          [type]="context.type"
          (closeEvent)="close('Close Import Products Dialog')"
        ></cx-import-entries-summary>
      </ng-template>
    </ng-container>
  </div>
</div>
`
    }]
  }], () => [{
    type: LaunchDialogService
  }], null);
})();
var defaultImportEntriesLayoutConfig = {
  launch: {
    IMPORT_TO_CART: {
      inlineRoot: true,
      component: ImportEntriesDialogComponent,
      dialogType: DIALOG_TYPE.DIALOG
    }
  }
};
var _ImportOrderEntriesModule = class _ImportOrderEntriesModule {
};
_ImportOrderEntriesModule.\u0275fac = function ImportOrderEntriesModule_Factory(t) {
  return new (t || _ImportOrderEntriesModule)();
};
_ImportOrderEntriesModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
  type: _ImportOrderEntriesModule
});
_ImportOrderEntriesModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
  providers: [provideDefaultConfig(defaultImportEntriesLayoutConfig)],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, FormErrorsModule, IconModule, KeyboardFocusModule, FileUploadModule, I18nModule, ConfigModule.withConfig({
    cmsComponents: {
      ImportOrderEntriesComponent: {
        component: ImportOrderEntriesComponent
      }
    }
  })]
});
var ImportOrderEntriesModule = _ImportOrderEntriesModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ImportOrderEntriesModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, FormsModule, ReactiveFormsModule, FormErrorsModule, IconModule, KeyboardFocusModule, FileUploadModule, I18nModule, ConfigModule.withConfig({
        cmsComponents: {
          ImportOrderEntriesComponent: {
            component: ImportOrderEntriesComponent
          }
        }
      })],
      declarations: [ImportOrderEntriesComponent, ImportEntriesDialogComponent, ImportEntriesFormComponent, ImportEntriesSummaryComponent, ImportToNewSavedCartFormComponent],
      exports: [ImportOrderEntriesComponent, ImportEntriesDialogComponent, ImportEntriesFormComponent, ImportEntriesSummaryComponent, ImportToNewSavedCartFormComponent],
      providers: [provideDefaultConfig(defaultImportEntriesLayoutConfig)]
    }]
  }], null, null);
})();
var _ImportExportOrderEntriesComponent = class _ImportExportOrderEntriesComponent {
  constructor(contextService) {
    this.contextService = contextService;
    this.context$ = this.contextService.get(ORDER_ENTRIES_CONTEXT);
    this.shouldDisplayImport$ = this.context$.pipe(map((orderEntriesContext) => !!orderEntriesContext?.addEntries));
    this.shouldDisplayExport$ = this.context$.pipe(switchMap((orderEntriesContext) => orderEntriesContext?.getEntries?.() ?? of([])), map((entries) => !!entries?.length));
  }
};
_ImportExportOrderEntriesComponent.\u0275fac = function ImportExportOrderEntriesComponent_Factory(t) {
  return new (t || _ImportExportOrderEntriesComponent)(\u0275\u0275directiveInject(ContextService));
};
_ImportExportOrderEntriesComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
  type: _ImportExportOrderEntriesComponent,
  selectors: [["cx-import-export-order-entries"]],
  decls: 4,
  vars: 6,
  consts: [[4, "ngIf"]],
  template: function ImportExportOrderEntriesComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275template(0, ImportExportOrderEntriesComponent_cx_import_order_entries_0_Template, 1, 0, "cx-import-order-entries", 0);
      \u0275\u0275pipe(1, "async");
      \u0275\u0275template(2, ImportExportOrderEntriesComponent_cx_export_order_entries_2_Template, 1, 0, "cx-export-order-entries", 0);
      \u0275\u0275pipe(3, "async");
    }
    if (rf & 2) {
      \u0275\u0275property("ngIf", \u0275\u0275pipeBind1(1, 2, ctx.shouldDisplayImport$));
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", \u0275\u0275pipeBind1(3, 4, ctx.shouldDisplayExport$));
    }
  },
  dependencies: [ImportOrderEntriesComponent, ExportOrderEntriesComponent, NgIf, AsyncPipe],
  encapsulation: 2,
  changeDetection: 0
});
var ImportExportOrderEntriesComponent = _ImportExportOrderEntriesComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ImportExportOrderEntriesComponent, [{
    type: Component,
    args: [{
      selector: "cx-import-export-order-entries",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: '<cx-import-order-entries\n  *ngIf="shouldDisplayImport$ | async"\n></cx-import-order-entries>\n<cx-export-order-entries\n  *ngIf="shouldDisplayExport$ | async"\n></cx-export-order-entries>\n'
    }]
  }], () => [{
    type: ContextService
  }], null);
})();
var _ImportExportOrderEntriesModule = class _ImportExportOrderEntriesModule {
};
_ImportExportOrderEntriesModule.\u0275fac = function ImportExportOrderEntriesModule_Factory(t) {
  return new (t || _ImportExportOrderEntriesModule)();
};
_ImportExportOrderEntriesModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
  type: _ImportExportOrderEntriesModule
});
_ImportExportOrderEntriesModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
  imports: [PageComponentModule, ConfigModule.withConfig({
    cmsComponents: {
      ImportExportOrderEntriesComponent: {
        component: ImportExportOrderEntriesComponent
      }
    }
  }), I18nModule, UrlModule, ImportOrderEntriesModule, ExportOrderEntriesModule, CommonModule]
});
var ImportExportOrderEntriesModule = _ImportExportOrderEntriesModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ImportExportOrderEntriesModule, [{
    type: NgModule,
    args: [{
      imports: [PageComponentModule, ConfigModule.withConfig({
        cmsComponents: {
          ImportExportOrderEntriesComponent: {
            component: ImportExportOrderEntriesComponent
          }
        }
      }), I18nModule, UrlModule, ImportOrderEntriesModule, ExportOrderEntriesModule, CommonModule],
      exports: [ImportExportOrderEntriesComponent],
      declarations: [ImportExportOrderEntriesComponent]
    }]
  }], null, null);
})();

// node_modules/@spartacus/cart/fesm2022/spartacus-cart-import-export.mjs
var _ImportExportModule = class _ImportExportModule {
};
_ImportExportModule.\u0275fac = function ImportExportModule_Factory(t) {
  return new (t || _ImportExportModule)();
};
_ImportExportModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
  type: _ImportExportModule
});
_ImportExportModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
  imports: [ImportExportCoreModule.forRoot(), ExportOrderEntriesModule, ImportOrderEntriesModule, ImportExportOrderEntriesModule]
});
var ImportExportModule = _ImportExportModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ImportExportModule, [{
    type: NgModule,
    args: [{
      imports: [ImportExportCoreModule.forRoot(), ExportOrderEntriesModule, ImportOrderEntriesModule, ImportExportOrderEntriesModule]
    }]
  }], null, null);
})();
export {
  ImportExportModule
};
//# sourceMappingURL=chunk-77TWJKMA.mjs.map
