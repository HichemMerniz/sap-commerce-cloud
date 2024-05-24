import './polyfills.server.mjs';
import {
  GOOGLE_MAPS_DEVELOPMENT_KEY_CONFIG,
  StoreFinderOutlets
} from "./chunk-RNSJYWZ3.mjs";
import {
  DefaultValueAccessor,
  FormControlDirective,
  ICON_TYPE,
  IconComponent,
  IconModule,
  ListNavigationModule,
  NgControlStatus,
  OutletDirective,
  OutletModule,
  PaginationComponent,
  ReactiveFormsModule,
  SpinnerComponent,
  SpinnerModule,
  UntypedFormControl
} from "./chunk-JOGQIABG.mjs";
import {
  Actions,
  ActivatedRoute,
  Config,
  ConverterService,
  EffectsModule,
  GlobalMessageService,
  GlobalMessageType,
  I18nModule,
  LoggerService,
  OccEndpointsService,
  POINT_OF_SERVICE_NORMALIZER,
  RouterLink,
  RouterModule,
  RouterOutlet,
  RoutingService,
  ScriptLoader,
  Store,
  StoreModule,
  TranslatePipe,
  UrlModule,
  WindowRef,
  createEffect,
  createFeatureSelector,
  createSelector,
  normalizeHttpError,
  ofType,
  provideDefaultConfig,
  select,
  siteContextGroup_actions,
  utilsGroup
} from "./chunk-AFAMYKVR.mjs";
import {
  AsyncPipe,
  ChangeDetectionStrategy,
  CommonModule,
  Component,
  DOCUMENT,
  Directive,
  EventEmitter,
  HttpClient,
  Inject,
  Injectable,
  InjectionToken,
  Input,
  JsonPipe,
  KeyValuePipe,
  NgClass,
  NgForOf,
  NgIf,
  NgModule,
  NgSwitch,
  NgSwitchCase,
  Output,
  PLATFORM_ID,
  Subscription,
  ViewChild,
  catchError,
  filter,
  inject,
  isDevMode,
  isPlatformBrowser,
  map,
  mergeMap,
  of,
  setClassMetadata,
  switchMap,
  withLatestFrom,
  ɵɵInheritDefinitionFeature,
  ɵɵNgOnChangesFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
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
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵpropertyInterpolate,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵpureFunction2,
  ɵɵpureFunction3,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵviewQuery
} from "./chunk-3LP6MEWW.mjs";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-JBYB2SS7.mjs";

// node_modules/@spartacus/storefinder/fesm2022/spartacus-storefinder-core.mjs
var _StoreFinderConfig = class _StoreFinderConfig {
};
_StoreFinderConfig.\u0275fac = function StoreFinderConfig_Factory(t) {
  return new (t || _StoreFinderConfig)();
};
_StoreFinderConfig.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
  token: _StoreFinderConfig,
  factory: function StoreFinderConfig_Factory(t) {
    let r = null;
    if (t) {
      r = new (t || _StoreFinderConfig)();
    } else {
      r = \u0275\u0275inject(Config);
    }
    return r;
  },
  providedIn: "root"
});
var StoreFinderConfig = _StoreFinderConfig;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StoreFinderConfig, [{
    type: Injectable,
    args: [{
      providedIn: "root",
      useExisting: Config
    }]
  }], null, null);
})();
var StoreFinderAdapter = class {
};
var _StoreFinderConnector = class _StoreFinderConnector {
  constructor(adapter) {
    this.adapter = adapter;
  }
  search(query, searchConfig, longitudeLatitude, radius) {
    return this.adapter.search(query, searchConfig, longitudeLatitude, radius);
  }
  getCounts() {
    return this.adapter.loadCounts();
  }
  get(storeId) {
    return this.adapter.load(storeId);
  }
};
_StoreFinderConnector.\u0275fac = function StoreFinderConnector_Factory(t) {
  return new (t || _StoreFinderConnector)(\u0275\u0275inject(StoreFinderAdapter));
};
_StoreFinderConnector.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
  token: _StoreFinderConnector,
  factory: _StoreFinderConnector.\u0275fac,
  providedIn: "root"
});
var StoreFinderConnector = _StoreFinderConnector;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StoreFinderConnector, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: StoreFinderAdapter
  }], null);
})();
var STORE_FINDER_SEARCH_PAGE_NORMALIZER = new InjectionToken("StoreFinderSearchPageNormalizer");
var STORE_COUNT_NORMALIZER = new InjectionToken("StoreCountNormalizer");
var STORE_FINDER_FEATURE = "stores";
var STORE_FINDER_DATA = "[StoreFinder] Store Finder Data";
var FIND_STORES_ON_HOLD = "[StoreFinder] On Hold";
var FIND_STORES = "[StoreFinder] Find Stores";
var FIND_STORES_FAIL = "[StoreFinder] Find Stores Fail";
var FIND_STORES_SUCCESS = "[StoreFinder] Find Stores Success";
var FIND_STORE_BY_ID = "[StoreFinder] Find a Store by Id";
var FIND_STORE_BY_ID_FAIL = "[StoreFinder] Find a Store by Id Fail";
var FIND_STORE_BY_ID_SUCCESS = "[StoreFinder] Find a Store by Id Success";
var FindStoresOnHold = class extends utilsGroup.LoaderLoadAction {
  constructor() {
    super(STORE_FINDER_DATA);
    this.type = FIND_STORES_ON_HOLD;
  }
};
var FindStores = class extends utilsGroup.LoaderLoadAction {
  constructor(payload) {
    super(STORE_FINDER_DATA);
    this.payload = payload;
    this.type = FIND_STORES;
  }
};
var FindStoresFail = class extends utilsGroup.LoaderFailAction {
  constructor(payload) {
    super(STORE_FINDER_DATA, payload);
    this.payload = payload;
    this.type = FIND_STORES_FAIL;
  }
};
var FindStoresSuccess = class extends utilsGroup.LoaderSuccessAction {
  constructor(payload) {
    super(STORE_FINDER_DATA);
    this.payload = payload;
    this.type = FIND_STORES_SUCCESS;
  }
};
var FindStoreById = class extends utilsGroup.LoaderLoadAction {
  constructor(payload) {
    super(STORE_FINDER_DATA);
    this.payload = payload;
    this.type = FIND_STORE_BY_ID;
  }
};
var FindStoreByIdFail = class extends utilsGroup.LoaderFailAction {
  constructor(payload) {
    super(STORE_FINDER_DATA, payload);
    this.payload = payload;
    this.type = FIND_STORE_BY_ID_FAIL;
  }
};
var FindStoreByIdSuccess = class extends utilsGroup.LoaderSuccessAction {
  constructor(payload) {
    super(STORE_FINDER_DATA);
    this.payload = payload;
    this.type = FIND_STORE_BY_ID_SUCCESS;
  }
};
var VIEW_ALL_STORES = "[StoreFinder] View All Stores";
var VIEW_ALL_STORES_FAIL = "[StoreFinder] View All Stores Fail";
var VIEW_ALL_STORES_SUCCESS = "[StoreFinder] View All Stores Success";
var CLEAR_STORE_FINDER_DATA = "[StoreFinder] Clear Data";
var ViewAllStores = class extends utilsGroup.LoaderLoadAction {
  constructor() {
    super(STORE_FINDER_DATA);
    this.type = VIEW_ALL_STORES;
  }
};
var ViewAllStoresFail = class extends utilsGroup.LoaderFailAction {
  constructor(payload) {
    super(STORE_FINDER_DATA, payload);
    this.payload = payload;
    this.type = VIEW_ALL_STORES_FAIL;
  }
};
var ViewAllStoresSuccess = class extends utilsGroup.LoaderSuccessAction {
  constructor(payload) {
    super(STORE_FINDER_DATA);
    this.payload = payload;
    this.type = VIEW_ALL_STORES_SUCCESS;
  }
};
var ClearStoreFinderData = class {
  constructor() {
    this.type = CLEAR_STORE_FINDER_DATA;
  }
};
var getStoreFinderState = createFeatureSelector(STORE_FINDER_FEATURE);
var getFindStoresState = createSelector(getStoreFinderState, (storesState) => storesState.findStores);
var getFindStoresEntities = createSelector(getFindStoresState, (state) => utilsGroup.loaderValueSelector(state));
var getStoresLoading = createSelector(getFindStoresState, (state) => utilsGroup.loaderLoadingSelector(state));
var getStoresSuccess = createSelector(getFindStoresState, (state) => utilsGroup.loaderSuccessSelector(state));
var getViewAllStoresState = createSelector(getStoreFinderState, (storesState) => storesState.viewAllStores);
var getViewAllStoresEntities = createSelector(getViewAllStoresState, (state) => utilsGroup.loaderValueSelector(state));
var getViewAllStoresLoading = createSelector(getViewAllStoresState, (state) => utilsGroup.loaderLoadingSelector(state));
var _StoreFinderService = class _StoreFinderService {
  constructor(store, winRef, globalMessageService, routingService, platformId) {
    this.store = store;
    this.winRef = winRef;
    this.globalMessageService = globalMessageService;
    this.routingService = routingService;
    this.platformId = platformId;
    this.geolocationWatchId = null;
    this.subscription = new Subscription();
    this.reloadStoreEntitiesOnContextChange();
  }
  /**
   * Returns boolean observable for store's loading state
   */
  getStoresLoading() {
    return this.store.pipe(select(getStoresLoading));
  }
  /**
   * Returns boolean observable for store's success state
   */
  getStoresLoaded() {
    return this.store.pipe(select(getStoresSuccess));
  }
  /**
   * Returns observable for store's entities
   * CXSPA-4871: The return value of this method signature is wrong, should be StoreFinderSearchPage.
   */
  getFindStoresEntities() {
    return this.store.pipe(select(getFindStoresEntities), map((data) => data.findStoresEntities));
  }
  /**
   * Returns observable for a single store by Id
   */
  getFindStoreEntityById() {
    return this.store.pipe(select(getFindStoresEntities), map((data) => data.findStoreEntityById));
  }
  /**
   * Returns boolean observable for view all store's loading state
   */
  getViewAllStoresLoading() {
    return this.store.pipe(select(getViewAllStoresLoading));
  }
  /**
   * Returns observable for view all store's entities
   */
  getViewAllStoresEntities() {
    return this.store.pipe(select(getViewAllStoresEntities), map((data) => data.viewAllStoresEntities));
  }
  /**
   * Store finding action functionality
   * @param queryText text query
   * @param searchConfig search configuration
   * @param longitudeLatitude longitude and latitude coordinates
   * @param countryIsoCode country ISO code
   * @param useMyLocation current location coordinates
   * @param radius radius of the scope from the center point
   */
  findStoresAction(queryText, searchConfig, longitudeLatitude, countryIsoCode, useMyLocation, radius) {
    if (useMyLocation && this.winRef.nativeWindow) {
      this.clearWatchGeolocation(new FindStoresOnHold());
      this.geolocationWatchId = this.winRef.nativeWindow.navigator.geolocation.watchPosition((pos) => {
        const position = {
          longitude: pos.coords.longitude,
          latitude: pos.coords.latitude
        };
        this.clearWatchGeolocation(new FindStores({
          queryText,
          searchConfig,
          longitudeLatitude: position,
          countryIsoCode,
          radius
        }));
      }, () => {
        this.globalMessageService.add({
          key: "storeFinder.geolocationNotEnabled"
        }, GlobalMessageType.MSG_TYPE_ERROR);
        this.routingService.go(["/store-finder"]);
      });
    } else {
      this.clearWatchGeolocation(new FindStores({
        queryText,
        searchConfig,
        longitudeLatitude,
        countryIsoCode,
        radius
      }));
    }
  }
  /**
   * View all stores
   */
  viewAllStores() {
    this.clearWatchGeolocation(new ViewAllStores());
  }
  /**
   * View all stores by id
   * @param storeId store id
   */
  viewStoreById(storeId) {
    this.clearWatchGeolocation(new FindStoreById({
      storeId
    }));
  }
  clearWatchGeolocation(callbackAction) {
    if (this.geolocationWatchId !== null) {
      this.winRef.nativeWindow?.navigator.geolocation.clearWatch(this.geolocationWatchId);
      this.geolocationWatchId = null;
    }
    this.store.dispatch(callbackAction);
  }
  isEmpty(store) {
    return !store || typeof store === "object" && Object.keys(store).length === 0;
  }
  /**
   * Reload store data when store entities are empty because of the context change
   */
  reloadStoreEntitiesOnContextChange() {
    if (isPlatformBrowser(this.platformId) || !this.platformId) {
      this.subscription = this.getFindStoresEntities().pipe(filter((data) => this.isEmpty(data)), withLatestFrom(this.getStoresLoading(), this.getStoresLoaded(), this.routingService.getParams())).subscribe(([, loading, loaded, routeParams]) => {
        if (!loading && !loaded) {
          if (routeParams.country && !routeParams.store) {
            this.callFindStoresAction(routeParams);
          }
          if (routeParams.store) {
            this.viewStoreById(routeParams.store);
          }
        }
      });
    }
  }
  callFindStoresAction(routeParams) {
    this.findStoresAction("", {
      pageSize: -1
    }, void 0, routeParams.country);
  }
  ngOnDestroy() {
    this.subscription?.unsubscribe();
  }
  /**
   * Returns store latitude
   * @param location store location
   */
  getStoreLatitude(location) {
    return location?.geoPoint?.latitude;
  }
  /**
   * Returns store longitude
   * @param location store location
   */
  getStoreLongitude(location) {
    return location?.geoPoint?.longitude;
  }
  /**
   * Generates a link leading to the directions of the given store location
   * @param location store location
   * @returns URL for directions to the store
   */
  getDirections(location) {
    const url = "https://www.google.com/maps/dir/Current+Location/";
    const latitude = this.getStoreLatitude(location);
    const longitude = this.getStoreLongitude(location);
    return url + latitude + "," + longitude;
  }
};
_StoreFinderService.\u0275fac = function StoreFinderService_Factory(t) {
  return new (t || _StoreFinderService)(\u0275\u0275inject(Store), \u0275\u0275inject(WindowRef), \u0275\u0275inject(GlobalMessageService), \u0275\u0275inject(RoutingService), \u0275\u0275inject(PLATFORM_ID));
};
_StoreFinderService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
  token: _StoreFinderService,
  factory: _StoreFinderService.\u0275fac,
  providedIn: "root"
});
var StoreFinderService = _StoreFinderService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StoreFinderService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: Store
  }, {
    type: WindowRef
  }, {
    type: GlobalMessageService
  }, {
    type: RoutingService
  }, {
    type: void 0,
    decorators: [{
      type: Inject,
      args: [PLATFORM_ID]
    }]
  }], null);
})();
var _GoogleMapRendererService = class _GoogleMapRendererService {
  constructor(config, storeFinderService, scriptLoader) {
    this.config = config;
    this.storeFinderService = storeFinderService;
    this.scriptLoader = scriptLoader;
    this.googleMap = null;
    this.logger = inject(LoggerService);
  }
  /**
   * Renders google map on the given element and draws markers on it.
   * If map already exists it will use an existing map otherwise it will create one
   * @param mapElement HTML element inside of which the map will be displayed
   * @param locations array containign geo data to be displayed on the map
   * @param selectMarkerHandler function to handle whenever a marker on a map is clicked
   */
  renderMap(mapElement, locations, selectMarkerHandler) {
    if (this.config.googleMaps?.apiKey) {
      if (Object.entries(locations[Object.keys(locations)[0]]).length > 0) {
        if (this.googleMap === null) {
          const apiKey = this.config.googleMaps.apiKey === GOOGLE_MAPS_DEVELOPMENT_KEY_CONFIG ? "" : this.config.googleMaps.apiKey;
          this.scriptLoader.embedScript({
            src: this.config.googleMaps.apiUrl,
            params: {
              key: apiKey
            },
            attributes: {
              type: "text/javascript"
            },
            callback: () => {
              this.drawMap(mapElement, locations, selectMarkerHandler);
            }
          });
        } else {
          this.drawMap(mapElement, locations, selectMarkerHandler);
        }
      }
    } else {
      if (isDevMode()) {
        this.logger.warn("A Google Maps api key is required in the store finder configuration to display the Google map.");
      }
    }
  }
  /**
   * Centers the map to the given point
   * @param latitute latitude of the new center
   * @param longitude longitude of the new center
   */
  centerMap(latitute, longitude) {
    this.googleMap.panTo({
      lat: latitute,
      lng: longitude
    });
    this.googleMap.setZoom(this.config.googleMaps.selectedMarkerScale);
  }
  /**
   * Defines and returns {@link google.maps.LatLng} representing a point where the map will be centered
   * @param locations list of locations
   */
  defineMapCenter(locations) {
    return new google.maps.LatLng(this.storeFinderService.getStoreLatitude(locations[0]), this.storeFinderService.getStoreLongitude(locations[0]));
  }
  /**
   * Creates google map inside if the given HTML element centered to the given point
   * @param mapElement {@link HTMLElement} inside of which the map will be created
   * @param mapCenter {@link google.maps.LatLng} the point where the map will be centered
   */
  initMap(mapElement, mapCenter) {
    const gestureOption = "greedy";
    const mapProp = {
      center: mapCenter,
      zoom: this.config.googleMaps.scale,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      gestureHandling: gestureOption
    };
    this.googleMap = new google.maps.Map(mapElement, mapProp);
  }
  /**
   * Erases the current map's markers and create a new one based on the given locations
   * @param locations array of locations to be displayed on the map
   * @param selectMarkerHandler function to handle whenever a marker on a map is clicked
   */
  createMarkers(locations, selectMarkerHandler) {
    this.markers = [];
    locations.forEach((element, index) => {
      const marker = new google.maps.Marker({
        position: new google.maps.LatLng(this.storeFinderService.getStoreLatitude(element), this.storeFinderService.getStoreLongitude(element)),
        label: index + 1 + ""
      });
      this.markers.push(marker);
      marker.setMap(this.googleMap);
      marker.addListener("mouseover", function() {
        marker.setAnimation(google.maps.Animation.BOUNCE);
      });
      marker.addListener("mouseout", function() {
        marker.setAnimation(null);
      });
      if (selectMarkerHandler) {
        marker.addListener("click", function() {
          selectMarkerHandler(index);
        });
      }
    });
  }
  /**
   * Initialize and draw the map
   * @param mapElement {@link HTMLElement} inside of which the map will be drawn
   * @param locations array of locations to be displayed on the map
   * @param selectMarkerHandler function to handle whenever a marker on a map is clicked
   */
  drawMap(mapElement, locations, selectMarkerHandler) {
    this.initMap(mapElement, this.defineMapCenter(locations));
    this.createMarkers(locations, selectMarkerHandler);
  }
};
_GoogleMapRendererService.\u0275fac = function GoogleMapRendererService_Factory(t) {
  return new (t || _GoogleMapRendererService)(\u0275\u0275inject(StoreFinderConfig), \u0275\u0275inject(StoreFinderService), \u0275\u0275inject(ScriptLoader));
};
_GoogleMapRendererService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
  token: _GoogleMapRendererService,
  factory: _GoogleMapRendererService.\u0275fac,
  providedIn: "root"
});
var GoogleMapRendererService = _GoogleMapRendererService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(GoogleMapRendererService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: StoreFinderConfig
  }, {
    type: StoreFinderService
  }, {
    type: ScriptLoader
  }], null);
})();
var defaultStoreFinderConfig = {
  googleMaps: {
    apiUrl: "https://maps.googleapis.com/maps/api/js",
    apiKey: "",
    scale: 5,
    selectedMarkerScale: 17,
    radius: 5e4
  }
};
var initialState$1 = {
  findStoresEntities: {},
  findStoreEntityById: {}
};
function findStoresReducer(state = initialState$1, action) {
  switch (action.type) {
    case FIND_STORES_SUCCESS: {
      const findStoresEntities = action.payload;
      return __spreadProps(__spreadValues({}, state), {
        findStoresEntities
      });
    }
    case FIND_STORE_BY_ID_SUCCESS: {
      const findStoreEntityById = action.payload;
      return __spreadProps(__spreadValues({}, state), {
        findStoreEntityById
      });
    }
  }
  return state;
}
var initialState = {
  viewAllStoresEntities: {}
};
function viewAllStoresReducer(state = initialState, action) {
  switch (action.type) {
    case VIEW_ALL_STORES_SUCCESS: {
      const viewAllStoresEntities = action.payload;
      return __spreadProps(__spreadValues({}, state), {
        viewAllStoresEntities
      });
    }
  }
  return state;
}
function getReducers() {
  return {
    findStores: utilsGroup.loaderReducer(STORE_FINDER_DATA, findStoresReducer),
    viewAllStores: utilsGroup.loaderReducer(STORE_FINDER_DATA, viewAllStoresReducer)
  };
}
var reducerToken = new InjectionToken("StoreFinderReducers");
var reducerProvider = {
  provide: reducerToken,
  useFactory: getReducers
};
function clearStoreFinderState(reducer) {
  return function(state, action) {
    if (action.type === siteContextGroup_actions.LANGUAGE_CHANGE) {
      state = void 0;
    }
    if (action.type === CLEAR_STORE_FINDER_DATA) {
      state = void 0;
    }
    return reducer(state, action);
  };
}
var metaReducers = [clearStoreFinderState];
var _FindStoresEffect = class _FindStoresEffect {
  constructor(actions$, storeFinderConnector) {
    this.actions$ = actions$;
    this.storeFinderConnector = storeFinderConnector;
    this.logger = inject(LoggerService);
    this.findStores$ = createEffect(() => this.actions$.pipe(ofType(FIND_STORES), map((action) => action.payload), mergeMap((payload) => this.storeFinderConnector.search(payload.queryText, payload.searchConfig, payload.longitudeLatitude, payload.radius).pipe(map((data) => {
      if (payload.countryIsoCode) {
        data.stores = data.stores.filter((store) => store.address.country.isocode === payload.countryIsoCode);
        data.stores.sort((a, b) => a.name < b.name ? -1 : a.name > b.name ? 1 : 0);
      }
      return new FindStoresSuccess(data);
    }), catchError((error) => of(new FindStoresFail(normalizeHttpError(error, this.logger))))))));
    this.findStoreById$ = createEffect(() => this.actions$.pipe(ofType(FIND_STORE_BY_ID), map((action) => action.payload), switchMap((payload) => this.storeFinderConnector.get(payload.storeId).pipe(map((data) => new FindStoreByIdSuccess(data)), catchError((error) => of(new FindStoreByIdFail(normalizeHttpError(error, this.logger))))))));
  }
};
_FindStoresEffect.\u0275fac = function FindStoresEffect_Factory(t) {
  return new (t || _FindStoresEffect)(\u0275\u0275inject(Actions), \u0275\u0275inject(StoreFinderConnector));
};
_FindStoresEffect.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
  token: _FindStoresEffect,
  factory: _FindStoresEffect.\u0275fac
});
var FindStoresEffect = _FindStoresEffect;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FindStoresEffect, [{
    type: Injectable
  }], () => [{
    type: Actions
  }, {
    type: StoreFinderConnector
  }], null);
})();
var _ViewAllStoresEffect = class _ViewAllStoresEffect {
  constructor(actions$, storeFinderConnector) {
    this.actions$ = actions$;
    this.storeFinderConnector = storeFinderConnector;
    this.logger = inject(LoggerService);
    this.viewAllStores$ = createEffect(() => this.actions$.pipe(ofType(VIEW_ALL_STORES, CLEAR_STORE_FINDER_DATA), switchMap(() => {
      return this.storeFinderConnector.getCounts().pipe(map((data) => {
        data.sort((a, b) => a.name < b.name ? -1 : a.name > b.name ? 1 : 0);
        return new ViewAllStoresSuccess(data);
      }), catchError((error) => of(new ViewAllStoresFail(normalizeHttpError(error, this.logger)))));
    })));
    this.clearStoreFinderData$ = createEffect(() => this.actions$.pipe(ofType(siteContextGroup_actions.LANGUAGE_CHANGE, siteContextGroup_actions.CURRENCY_CHANGE), map(() => {
      return new ClearStoreFinderData();
    })));
  }
};
_ViewAllStoresEffect.\u0275fac = function ViewAllStoresEffect_Factory(t) {
  return new (t || _ViewAllStoresEffect)(\u0275\u0275inject(Actions), \u0275\u0275inject(StoreFinderConnector));
};
_ViewAllStoresEffect.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
  token: _ViewAllStoresEffect,
  factory: _ViewAllStoresEffect.\u0275fac
});
var ViewAllStoresEffect = _ViewAllStoresEffect;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ViewAllStoresEffect, [{
    type: Injectable
  }], () => [{
    type: Actions
  }, {
    type: StoreFinderConnector
  }], null);
})();
var effects = [FindStoresEffect, ViewAllStoresEffect];
var _StoreFinderStoreModule = class _StoreFinderStoreModule {
};
_StoreFinderStoreModule.\u0275fac = function StoreFinderStoreModule_Factory(t) {
  return new (t || _StoreFinderStoreModule)();
};
_StoreFinderStoreModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
  type: _StoreFinderStoreModule
});
_StoreFinderStoreModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
  providers: [reducerProvider],
  imports: [CommonModule, StoreModule.forFeature(STORE_FINDER_FEATURE, reducerToken, {
    metaReducers
  }), EffectsModule.forFeature(effects)]
});
var StoreFinderStoreModule = _StoreFinderStoreModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StoreFinderStoreModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, StoreModule.forFeature(STORE_FINDER_FEATURE, reducerToken, {
        metaReducers
      }), EffectsModule.forFeature(effects)],
      providers: [reducerProvider]
    }]
  }], null, null);
})();
var _StoreFinderCoreModule = class _StoreFinderCoreModule {
};
_StoreFinderCoreModule.\u0275fac = function StoreFinderCoreModule_Factory(t) {
  return new (t || _StoreFinderCoreModule)();
};
_StoreFinderCoreModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
  type: _StoreFinderCoreModule
});
_StoreFinderCoreModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
  providers: [provideDefaultConfig(defaultStoreFinderConfig), StoreFinderConnector],
  imports: [StoreFinderStoreModule]
});
var StoreFinderCoreModule = _StoreFinderCoreModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StoreFinderCoreModule, [{
    type: NgModule,
    args: [{
      imports: [StoreFinderStoreModule],
      providers: [provideDefaultConfig(defaultStoreFinderConfig), StoreFinderConnector]
    }]
  }], null, null);
})();

// node_modules/@spartacus/storefinder/fesm2022/spartacus-storefinder-occ.mjs
var _OccStoreFinderAdapter = class _OccStoreFinderAdapter {
  constructor(http, occEndpointsService, converterService) {
    this.http = http;
    this.occEndpointsService = occEndpointsService;
    this.converterService = converterService;
  }
  search(query, searchConfig, longitudeLatitude, radius) {
    return this.callOccFindStores(query, searchConfig, longitudeLatitude, radius).pipe(this.converterService.pipeable(STORE_FINDER_SEARCH_PAGE_NORMALIZER));
  }
  loadCounts() {
    return this.http.get(this.occEndpointsService.buildUrl("storescounts")).pipe(map(({
      countriesAndRegionsStoreCount
    }) => countriesAndRegionsStoreCount), this.converterService.pipeableMany(STORE_COUNT_NORMALIZER));
  }
  load(storeId) {
    return this.http.get(this.occEndpointsService.buildUrl("store", {
      urlParams: {
        storeId
      }
    })).pipe(this.converterService.pipeable(POINT_OF_SERVICE_NORMALIZER));
  }
  callOccFindStores(query, searchConfig, longitudeLatitude, radius) {
    const params = {};
    if (longitudeLatitude) {
      params["longitude"] = String(longitudeLatitude.longitude);
      params["latitude"] = String(longitudeLatitude.latitude);
    } else {
      params["query"] = query;
    }
    if (radius) {
      params["radius"] = String(radius);
    }
    if (searchConfig?.pageSize) {
      params["pageSize"] = String(searchConfig.pageSize);
    }
    if (searchConfig?.currentPage) {
      params["currentPage"] = String(searchConfig.currentPage);
    }
    if (searchConfig?.sort) {
      params["sort"] = searchConfig.sort;
    }
    return this.http.get(this.occEndpointsService.buildUrl("stores", {
      queryParams: params
    }));
  }
};
_OccStoreFinderAdapter.\u0275fac = function OccStoreFinderAdapter_Factory(t) {
  return new (t || _OccStoreFinderAdapter)(\u0275\u0275inject(HttpClient), \u0275\u0275inject(OccEndpointsService), \u0275\u0275inject(ConverterService));
};
_OccStoreFinderAdapter.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
  token: _OccStoreFinderAdapter,
  factory: _OccStoreFinderAdapter.\u0275fac
});
var OccStoreFinderAdapter = _OccStoreFinderAdapter;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OccStoreFinderAdapter, [{
    type: Injectable
  }], () => [{
    type: HttpClient
  }, {
    type: OccEndpointsService
  }, {
    type: ConverterService
  }], null);
})();
var defaultOccStoreFinderConfig = {
  backend: {
    occ: {
      endpoints: {
        store: "stores/${storeId}?fields=FULL",
        stores: "stores?fields=stores(name,displayName,formattedDistance,openingHours(weekDayOpeningList(FULL),specialDayOpeningList(FULL)),geoPoint(latitude,longitude),address(line1,line2,town,region(FULL),postalCode,phone,country,email), features),pagination(DEFAULT),sorts(DEFAULT)",
        storescounts: "stores/storescounts"
      }
    }
  }
};
var _StoreFinderOccModule = class _StoreFinderOccModule {
};
_StoreFinderOccModule.\u0275fac = function StoreFinderOccModule_Factory(t) {
  return new (t || _StoreFinderOccModule)();
};
_StoreFinderOccModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
  type: _StoreFinderOccModule
});
_StoreFinderOccModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
  providers: [provideDefaultConfig(defaultOccStoreFinderConfig), {
    provide: StoreFinderAdapter,
    useClass: OccStoreFinderAdapter
  }]
});
var StoreFinderOccModule = _StoreFinderOccModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StoreFinderOccModule, [{
    type: NgModule,
    args: [{
      providers: [provideDefaultConfig(defaultOccStoreFinderConfig), {
        provide: StoreFinderAdapter,
        useClass: OccStoreFinderAdapter
      }]
    }]
  }], null, null);
})();

// node_modules/@spartacus/storefinder/fesm2022/spartacus-storefinder-components.mjs
var _c0 = ["*"];
function ScheduleComponent_div_1_div_1_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "cxTranslate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "storeFinder.closed"), " ");
  }
}
function ScheduleComponent_div_1_div_1_div_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const day_r1 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", day_r1.openingTime == null ? null : day_r1.openingTime.formattedHour, " - ", day_r1.closingTime == null ? null : day_r1.closingTime.formattedHour, " ");
  }
}
function ScheduleComponent_div_1_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3)(1, "div", 4);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, ScheduleComponent_div_1_div_1_div_3_Template, 3, 3, "div", 5)(4, ScheduleComponent_div_1_div_1_div_4_Template, 2, 2, "div", 6);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const day_r1 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(day_r1.weekDay);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", day_r1.closed);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !day_r1.closed);
  }
}
function ScheduleComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1);
    \u0275\u0275template(1, ScheduleComponent_div_1_div_1_Template, 5, 3, "div", 2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.weekDays);
  }
}
var _c1 = (a0, a1) => ({
  displayName: a0,
  name: a1
});
var _c2 = (a0) => [a0];
var _c3 = (a0, a1, a2) => [a0, a1, a2];
function StoreFinderListItemComponent_a_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "a", 7);
    \u0275\u0275listener("click", function StoreFinderListItemComponent_a_4_Template_a_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.handleStoreItemClick());
    })("keyup", function StoreFinderListItemComponent_a_4_Template_a_keyup_0_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onKey($event));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.location.displayName || ctx_r1.location.name, " ");
  }
}
function StoreFinderListItemComponent_a_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 8);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(2, _c2, ctx_r1.location.name));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.location.displayName || ctx_r1.location.name, " ");
  }
}
function StoreFinderListItemComponent_div_6_div_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.location.formattedDistance, " ");
  }
}
function StoreFinderListItemComponent_div_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9)(1, "div", 10);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275template(4, StoreFinderListItemComponent_div_6_div_4_Template, 2, 1, "div", 11);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2(" ", ctx_r1.location.address.line1, " ", ctx_r1.location.address.line2, " ");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getFormattedStoreAddress(\u0275\u0275pureFunction3(4, _c3, ctx_r1.location.address.town, ctx_r1.location.address.postalCode, ctx_r1.location.address.country.isocode)), " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.location.formattedDistance && ctx_r1.displayDistance);
  }
}
function StoreFinderListItemComponent_ng_template_7_Template(rf, ctx) {
}
var _c4 = (a0) => ({
  count: a0
});
function StoreFinderGridComponent_ng_container_0_div_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7);
    \u0275\u0275element(1, "cx-store-finder-list-item", 8);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const location_r1 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("location", location_r1);
  }
}
function StoreFinderGridComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275element(1, "div", 2);
    \u0275\u0275pipe(2, "cxTranslate");
    \u0275\u0275elementStart(3, "div", 3)(4, "div", 4);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "cxTranslate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 5);
    \u0275\u0275template(8, StoreFinderGridComponent_ng_container_0_div_8_Template, 2, 1, "div", 6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const locations_r2 = ctx.ngIf;
    \u0275\u0275advance();
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(2, 3, "common.loaded"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(6, 5, "storeFinder.storesFound", \u0275\u0275pureFunction1(8, _c4, locations_r2 == null ? null : locations_r2.stores == null ? null : locations_r2.stores.length)), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", locations_r2 == null ? null : locations_r2.stores);
  }
}
function StoreFinderGridComponent_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9);
    \u0275\u0275element(1, "cx-spinner");
    \u0275\u0275elementEnd();
  }
}
var _c5 = () => ["/store-finder/find"];
var _c6 = (a0) => ({
  query: a0
});
var _c7 = (a0) => ({
  "disabled-action": a0
});
var _c8 = () => ["/store-finder/view-all"];
var _c9 = ["mapElement"];
function StoreFinderStoreDescriptionComponent_ng_container_0_p_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 14);
    \u0275\u0275text(1);
    \u0275\u0275element(2, "br");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", ctx_r0.location.address.line1, " ", ctx_r0.location.address.line2, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r0.getFormattedStoreAddress(\u0275\u0275pureFunction3(3, _c3, ctx_r0.location.address.town, ctx_r0.location.address.postalCode, ctx_r0.location.address.country.isocode)), " ");
  }
}
function StoreFinderStoreDescriptionComponent_ng_container_0_li_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 8);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "cxTranslate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", \u0275\u0275pipeBind1(2, 2, "storeFinder.call"), " ", ctx_r0.location.address == null ? null : ctx_r0.location.address.phone, " ");
  }
}
function StoreFinderStoreDescriptionComponent_ng_container_0_div_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15)(1, "cx-schedule", 16)(2, "h3");
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "cxTranslate");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("location", ctx_r0.location);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 2, "storeFinder.storeHours"));
  }
}
function StoreFinderStoreDescriptionComponent_ng_container_0_div_16_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 21)(1, "div", 22);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const feature_r2 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(feature_r2.value);
  }
}
function StoreFinderStoreDescriptionComponent_ng_container_0_div_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 17)(1, "div", 2)(2, "div", 18)(3, "h3", 19);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "cxTranslate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(6, "article", 2);
    \u0275\u0275template(7, StoreFinderStoreDescriptionComponent_ng_container_0_div_16_div_7_Template, 3, 1, "div", 20);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(5, 2, "storeFinder.storeFeatures"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r0.location.features == null ? null : ctx_r0.location.features.entry);
  }
}
function StoreFinderStoreDescriptionComponent_ng_container_0_article_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "article", 23);
    \u0275\u0275element(1, "cx-store-finder-map", 24);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("locations", \u0275\u0275pureFunction1(1, _c2, ctx_r0.location));
  }
}
function StoreFinderStoreDescriptionComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 1)(2, "div", 2)(3, "article", 3)(4, "h2", 4);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275template(6, StoreFinderStoreDescriptionComponent_ng_container_0_p_6_Template, 4, 7, "p", 5);
    \u0275\u0275elementStart(7, "section", 6)(8, "ul", 7)(9, "li", 8)(10, "a", 9);
    \u0275\u0275pipe(11, "cxTranslate");
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "cxTranslate");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(14, StoreFinderStoreDescriptionComponent_ng_container_0_li_14_Template, 3, 4, "li", 10);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(15, StoreFinderStoreDescriptionComponent_ng_container_0_div_15_Template, 5, 4, "div", 11)(16, StoreFinderStoreDescriptionComponent_ng_container_0_div_16_Template, 8, 4, "div", 12);
    \u0275\u0275pipe(17, "json");
    \u0275\u0275elementEnd();
    \u0275\u0275template(18, StoreFinderStoreDescriptionComponent_ng_container_0_article_18_Template, 2, 3, "article", 13);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.location.displayName || ctx_r0.location.name);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.location.address);
    \u0275\u0275advance(4);
    \u0275\u0275property("href", ctx_r0.getDirections(ctx_r0.location), \u0275\u0275sanitizeUrl);
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(11, 9, "storeFinder.ariaLabelGetDirections"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(13, 11, "storeFinder.getDirections"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r0.location.address == null ? null : ctx_r0.location.address.phone);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.location.openingHours);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", \u0275\u0275pipeBind1(17, 13, ctx_r0.location.features) !== "{}");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", !ctx_r0.disableMap);
  }
}
var _c10 = ["storeMap"];
var _c11 = (a0) => ({
  "cx-selected-item": a0
});
var _c12 = (a0) => ({
  "nav-link": true,
  active: a0
});
function StoreFinderListComponent_ng_container_0_div_2_button_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 12);
    \u0275\u0275listener("click", function StoreFinderListComponent_ng_container_0_div_2_button_6_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.hideStoreDetails());
    });
    \u0275\u0275element(1, "cx-icon", 13);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "cxTranslate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("type", ctx_r1.iconTypes.CARET_LEFT);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 2, "storeFinder.back"), " ");
  }
}
function StoreFinderListComponent_ng_container_0_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6)(1, "div", 7);
    \u0275\u0275element(2, "cx-store-finder-pagination-details", 8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 9)(4, "div", 10);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275template(6, StoreFinderListComponent_ng_container_0_div_2_button_6_Template, 4, 4, "button", 11);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275property("pagination", ctx_r1.locations.pagination);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r1.storeDetails == null ? null : ctx_r1.storeDetails.displayName, " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isDetailsModeVisible);
  }
}
function StoreFinderListComponent_ng_container_0_div_3_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 20);
    \u0275\u0275element(1, "cx-store-finder-store-description", 21);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("location", ctx_r1.storeDetails)("disableMap", true);
  }
}
function StoreFinderListComponent_ng_container_0_div_3_ol_3_li_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li", 24)(1, "cx-store-finder-list-item", 25);
    \u0275\u0275listener("storeItemClick", function StoreFinderListComponent_ng_container_0_div_3_ol_3_li_1_Template_cx_store_finder_list_item_storeItemClick_1_listener($event) {
      const location_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.centerStoreOnMapByIndex($event, location_r5));
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const location_r5 = ctx.$implicit;
    const i_r6 = ctx.index;
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275propertyInterpolate("id", "item-" + i_r6);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(7, _c11, ctx_r1.selectedStoreIndex === i_r6));
    \u0275\u0275advance();
    \u0275\u0275property("location", location_r5)("locationIndex", i_r6)("displayDistance", ctx_r1.useMylocation)("useClickEvent", true)("listOrderLabel", i_r6 + ctx_r1.locations.pagination.currentPage * ctx_r1.locations.pagination.pageSize + 1);
  }
}
function StoreFinderListComponent_ng_container_0_div_3_ol_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ol", 22);
    \u0275\u0275template(1, StoreFinderListComponent_ng_container_0_div_3_ol_3_li_1_Template, 2, 9, "li", 23);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.locations == null ? null : ctx_r1.locations.stores);
  }
}
function StoreFinderListComponent_ng_container_0_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 14)(1, "div", 15);
    \u0275\u0275template(2, StoreFinderListComponent_ng_container_0_div_3_div_2_Template, 2, 2, "div", 16)(3, StoreFinderListComponent_ng_container_0_div_3_ol_3_Template, 2, 1, "ol", 17);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 18)(5, "cx-store-finder-map", 19, 0);
    \u0275\u0275listener("selectedStoreItem", function StoreFinderListComponent_ng_container_0_div_3_Template_cx_store_finder_map_selectedStoreItem_5_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.selectStoreItemList($event));
    });
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.isDetailsModeVisible);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.isDetailsModeVisible);
    \u0275\u0275advance(2);
    \u0275\u0275property("locations", ctx_r1.locations.stores);
  }
}
function StoreFinderListComponent_ng_container_0_div_4_li_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li", 32)(1, "button", 33);
    \u0275\u0275listener("click", function StoreFinderListComponent_ng_container_0_div_4_li_2_Template_button_click_1_listener() {
      const mode_r8 = \u0275\u0275restoreView(_r7).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.setDisplayMode(mode_r8 == null ? null : mode_r8.value));
    });
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "cxTranslate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const mode_r8 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("id", "tab-" + (mode_r8 == null ? null : mode_r8.value))("ngClass", \u0275\u0275pureFunction1(7, _c12, ctx_r1.isDisplayModeActive(mode_r8 == null ? null : mode_r8.value)));
    \u0275\u0275attribute("aria-controls", "tab-" + (mode_r8 == null ? null : mode_r8.value) + "-panel")("aria-selected", ctx_r1.isDisplayModeActive(mode_r8 == null ? null : mode_r8.value));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 5, "storeFinder." + (mode_r8 == null ? null : mode_r8.value)), " ");
  }
}
function StoreFinderListComponent_ng_container_0_div_4_ng_template_6_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 20);
    \u0275\u0275element(1, "cx-store-finder-store-description", 21);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275property("location", ctx_r1.storeDetails)("disableMap", true);
  }
}
function StoreFinderListComponent_ng_container_0_div_4_ng_template_6_ol_3_li_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li", 24)(1, "cx-store-finder-list-item", 25);
    \u0275\u0275listener("storeItemClick", function StoreFinderListComponent_ng_container_0_div_4_ng_template_6_ol_3_li_1_Template_cx_store_finder_list_item_storeItemClick_1_listener($event) {
      const location_r10 = \u0275\u0275restoreView(_r9).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(5);
      return \u0275\u0275resetView(ctx_r1.centerStoreOnMapByIndex($event, location_r10));
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const location_r10 = ctx.$implicit;
    const i_r11 = ctx.index;
    const ctx_r1 = \u0275\u0275nextContext(5);
    \u0275\u0275propertyInterpolate("id", "item-" + i_r11);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(7, _c11, ctx_r1.selectedStoreIndex === i_r11));
    \u0275\u0275advance();
    \u0275\u0275property("location", location_r10)("locationIndex", i_r11)("displayDistance", ctx_r1.useMylocation)("useClickEvent", true)("listOrderLabel", i_r11 + ctx_r1.locations.pagination.currentPage * ctx_r1.locations.pagination.pageSize + 1);
  }
}
function StoreFinderListComponent_ng_container_0_div_4_ng_template_6_ol_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ol", 22);
    \u0275\u0275template(1, StoreFinderListComponent_ng_container_0_div_4_ng_template_6_ol_3_li_1_Template, 2, 9, "li", 23);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.locations == null ? null : ctx_r1.locations.stores);
  }
}
function StoreFinderListComponent_ng_container_0_div_4_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 34)(1, "div", 35);
    \u0275\u0275template(2, StoreFinderListComponent_ng_container_0_div_4_ng_template_6_div_2_Template, 2, 2, "div", 16)(3, StoreFinderListComponent_ng_container_0_div_4_ng_template_6_ol_3_Template, 2, 1, "ol", 17);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.isDetailsModeVisible);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.isDetailsModeVisible);
  }
}
function StoreFinderListComponent_ng_container_0_div_4_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 36)(1, "div", 37)(2, "cx-store-finder-map", 19, 0);
    \u0275\u0275listener("selectedStoreItem", function StoreFinderListComponent_ng_container_0_div_4_ng_template_7_Template_cx_store_finder_map_selectedStoreItem_2_listener($event) {
      \u0275\u0275restoreView(_r12);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.selectStoreItemList($event));
    });
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275property("locations", ctx_r1.selectedStore ? \u0275\u0275pureFunction1(1, _c2, ctx_r1.selectedStore) : ctx_r1.locations.stores);
  }
}
function StoreFinderListComponent_ng_container_0_div_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 26)(1, "ul", 27);
    \u0275\u0275template(2, StoreFinderListComponent_ng_container_0_div_4_li_2_Template, 4, 9, "li", 28);
    \u0275\u0275pipe(3, "keyvalue");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 29)(5, "div", 30);
    \u0275\u0275template(6, StoreFinderListComponent_ng_container_0_div_4_ng_template_6_Template, 4, 2, "ng-template", 31)(7, StoreFinderListComponent_ng_container_0_div_4_ng_template_7_Template, 4, 3, "ng-template", 31);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", \u0275\u0275pipeBind1(3, 4, ctx_r1.displayModes));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngSwitch", ctx_r1.activeDisplayMode);
    \u0275\u0275advance();
    \u0275\u0275property("ngSwitchCase", ctx_r1.displayModes.LIST_VIEW);
    \u0275\u0275advance();
    \u0275\u0275property("ngSwitchCase", ctx_r1.displayModes.MAP_VIEW);
  }
}
function StoreFinderListComponent_ng_container_0_div_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6)(1, "div", 38);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "cxTranslate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 1, "storeFinder.noStoreFound"), " ");
  }
}
function StoreFinderListComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 2);
    \u0275\u0275template(2, StoreFinderListComponent_ng_container_0_div_2_Template, 7, 3, "div", 3)(3, StoreFinderListComponent_ng_container_0_div_3_Template, 7, 3, "div", 4)(4, StoreFinderListComponent_ng_container_0_div_4_Template, 8, 6, "div", 5)(5, StoreFinderListComponent_ng_container_0_div_5_Template, 4, 3, "div", 3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.locations == null ? null : ctx_r1.locations.pagination);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.locations == null ? null : ctx_r1.locations.stores);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.locations == null ? null : ctx_r1.locations.stores);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !(ctx_r1.locations == null ? null : ctx_r1.locations.stores));
  }
}
function StoreFinderSearchResultComponent_div_0_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div")(1, "div", 6)(2, "cx-pagination", 7);
    \u0275\u0275listener("viewPageEvent", function StoreFinderSearchResultComponent_div_0_div_3_Template_cx_pagination_viewPageEvent_2_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.viewPage($event));
    });
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const locations_r3 = \u0275\u0275nextContext().ngIf;
    \u0275\u0275advance(2);
    \u0275\u0275property("pagination", locations_r3.pagination);
  }
}
function StoreFinderSearchResultComponent_div_0_cx_store_finder_list_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "cx-store-finder-list", 8);
  }
  if (rf & 2) {
    const locations_r3 = \u0275\u0275nextContext().ngIf;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("locations", locations_r3)("useMylocation", ctx_r1.useMyLocation);
  }
}
function StoreFinderSearchResultComponent_div_0_div_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9)(1, "div", 10)(2, "span", 11);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "cxTranslate");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 1, "storeFinder.noStoresMessage"), " ");
  }
}
function StoreFinderSearchResultComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275element(1, "div", 2);
    \u0275\u0275pipe(2, "cxTranslate");
    \u0275\u0275template(3, StoreFinderSearchResultComponent_div_0_div_3_Template, 3, 1, "div", 3)(4, StoreFinderSearchResultComponent_div_0_cx_store_finder_list_4_Template, 1, 2, "cx-store-finder-list", 4)(5, StoreFinderSearchResultComponent_div_0_div_5_Template, 5, 3, "div", 5);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const locations_r3 = ctx.ngIf;
    \u0275\u0275advance();
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(2, 4, "common.loaded"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", locations_r3 == null ? null : locations_r3.stores.length);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", locations_r3 == null ? null : locations_r3.stores.length);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !(locations_r3 == null ? null : locations_r3.stores.length));
  }
}
function StoreFinderSearchResultComponent_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12);
    \u0275\u0275element(1, "cx-spinner");
    \u0275\u0275elementEnd();
  }
}
var _c13 = (a0) => ["../country", a0];
function StoreFinderStoresCountComponent_ng_container_0_div_4_div_4_span_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 13);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const country_r1 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("ngClass", (country_r1 == null ? null : country_r1.storeCountDataList) ? "country-header" : "country-header-link");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("(", country_r1.count, ")");
  }
}
function StoreFinderStoresCountComponent_ng_container_0_div_4_div_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8)(1, "a", 9)(2, "h2", 10)(3, "span", 11);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, StoreFinderStoresCountComponent_ng_container_0_div_4_div_4_span_5_Template, 2, 2, "span", 12);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const country_r1 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(5, _c13, country_r1.isoCode));
    \u0275\u0275attribute("aria-label", country_r1.name + "(" + country_r1.count + ")");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", (country_r1 == null ? null : country_r1.storeCountDataList) ? "country-header" : "country-header-link");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(country_r1.name);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !(country_r1 == null ? null : country_r1.storeCountDataList));
  }
}
function StoreFinderStoresCountComponent_ng_container_0_div_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5)(1, "div", 6);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "cxTranslate");
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, StoreFinderStoresCountComponent_ng_container_0_div_4_div_4_Template, 6, 7, "div", 7);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const locations_r2 = \u0275\u0275nextContext().ngIf;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(3, 2, "storeFinder.ariaLabelCountriesCount", \u0275\u0275pureFunction1(5, _c4, locations_r2 == null ? null : locations_r2.length)), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", locations_r2);
  }
}
function StoreFinderStoresCountComponent_ng_container_0_div_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5)(1, "span", 14);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "cxTranslate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 1, "storeFinder.noStoresMessage"), " ");
  }
}
function StoreFinderStoresCountComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275element(1, "div", 2);
    \u0275\u0275pipe(2, "cxTranslate");
    \u0275\u0275elementStart(3, "div", 3);
    \u0275\u0275template(4, StoreFinderStoresCountComponent_ng_container_0_div_4_Template, 5, 7, "div", 4)(5, StoreFinderStoresCountComponent_ng_container_0_div_5_Template, 4, 3, "div", 4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const locations_r2 = ctx.ngIf;
    \u0275\u0275advance();
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(2, 3, "common.loaded"));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", locations_r2 == null ? null : locations_r2.length);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !(locations_r2 == null ? null : locations_r2.length));
  }
}
function StoreFinderStoresCountComponent_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15);
    \u0275\u0275element(1, "cx-spinner");
    \u0275\u0275elementEnd();
  }
}
function StoreFinderStoreComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 3);
    \u0275\u0275element(1, "div", 4);
    \u0275\u0275pipe(2, "cxTranslate");
    \u0275\u0275elementStart(3, "div", 5);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 6)(6, "button", 7);
    \u0275\u0275listener("click", function StoreFinderStoreComponent_div_1_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.goBack());
    });
    \u0275\u0275element(7, "cx-icon", 8);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "cxTranslate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 9)(11, "div", 10);
    \u0275\u0275element(12, "cx-store-finder-store-description", 11);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const location_r3 = ctx.ngIf;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(2, 6, "common.loaded"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", location_r3 == null ? null : location_r3.displayName, " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("type", ctx_r1.iconTypes.CARET_LEFT);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(9, 8, "storeFinder.backToList"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275property("disableMap", ctx_r1.disableMap)("location", location_r3);
  }
}
function StoreFinderStoreComponent_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12);
    \u0275\u0275element(1, "cx-spinner");
    \u0275\u0275elementEnd();
  }
}
var _AbstractStoreItemComponent = class _AbstractStoreItemComponent {
  constructor(storeFinderService) {
    this.storeFinderService = storeFinderService;
  }
  getDirections(location) {
    return this.storeFinderService.getDirections(location);
  }
  getFormattedStoreAddress(addressParts) {
    return addressParts.filter(Boolean).join(", ");
  }
};
_AbstractStoreItemComponent.\u0275fac = function AbstractStoreItemComponent_Factory(t) {
  return new (t || _AbstractStoreItemComponent)(\u0275\u0275directiveInject(StoreFinderService));
};
_AbstractStoreItemComponent.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _AbstractStoreItemComponent,
  inputs: {
    location: "location"
  }
});
var AbstractStoreItemComponent = _AbstractStoreItemComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AbstractStoreItemComponent, [{
    type: Directive
  }], () => [{
    type: StoreFinderService
  }], {
    location: [{
      type: Input
    }]
  });
})();
var _ScheduleComponent = class _ScheduleComponent {
  constructor() {
  }
  ngOnInit() {
    if (this.location) {
      this.weekDays = this.location.openingHours?.weekDayOpeningList;
    }
  }
};
_ScheduleComponent.\u0275fac = function ScheduleComponent_Factory(t) {
  return new (t || _ScheduleComponent)();
};
_ScheduleComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
  type: _ScheduleComponent,
  selectors: [["cx-schedule"]],
  inputs: {
    location: "location"
  },
  ngContentSelectors: _c0,
  decls: 2,
  vars: 1,
  consts: [["class", "container cx-store-hours", 4, "ngIf"], [1, "container", "cx-store-hours"], ["class", "row", 4, "ngFor", "ngForOf"], [1, "row"], [1, "cx-days", "col-4"], ["class", "cx-hours col-8 closed", 4, "ngIf"], ["class", "cx-hours col-8", 4, "ngIf"], [1, "cx-hours", "col-8", "closed"], [1, "cx-hours", "col-8"]],
  template: function ScheduleComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275projectionDef();
      \u0275\u0275projection(0);
      \u0275\u0275template(1, ScheduleComponent_div_1_Template, 2, 1, "div", 0);
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.location.openingHours);
    }
  },
  dependencies: [NgForOf, NgIf, TranslatePipe],
  encapsulation: 2
});
var ScheduleComponent = _ScheduleComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ScheduleComponent, [{
    type: Component,
    args: [{
      selector: "cx-schedule",
      template: `<ng-content></ng-content>
<div class="container cx-store-hours" *ngIf="location.openingHours">
  <div *ngFor="let day of weekDays" class="row">
    <div class="cx-days col-4">{{ day.weekDay }}</div>

    <div *ngIf="day.closed" class="cx-hours col-8 closed">
      {{ 'storeFinder.closed' | cxTranslate }}
    </div>

    <div *ngIf="!day.closed" class="cx-hours col-8">
      {{ day.openingTime?.formattedHour }} -
      {{ day.closingTime?.formattedHour }}
    </div>
  </div>
</div>
`
    }]
  }], () => [], {
    location: [{
      type: Input
    }]
  });
})();
var _StoreFinderListItemComponent = class _StoreFinderListItemComponent extends AbstractStoreItemComponent {
  constructor(storeFinderService) {
    super(storeFinderService);
    this.storeFinderService = storeFinderService;
    this.locationIndex = null;
    this.storeItemClick = new EventEmitter();
    this.StoreFinderOutlets = StoreFinderOutlets;
  }
  handleStoreItemClick() {
    if (this.locationIndex !== null) {
      this.storeItemClick.emit(this.locationIndex);
    }
  }
  onKey(event) {
    if (event.key === "Enter") {
      this.handleStoreItemClick();
    }
  }
};
_StoreFinderListItemComponent.\u0275fac = function StoreFinderListItemComponent_Factory(t) {
  return new (t || _StoreFinderListItemComponent)(\u0275\u0275directiveInject(StoreFinderService));
};
_StoreFinderListItemComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
  type: _StoreFinderListItemComponent,
  selectors: [["cx-store-finder-list-item"]],
  inputs: {
    locationIndex: "locationIndex",
    listOrderLabel: "listOrderLabel",
    displayDistance: "displayDistance",
    useClickEvent: "useClickEvent"
  },
  outputs: {
    storeItemClick: "storeItemClick"
  },
  features: [\u0275\u0275InheritDefinitionFeature],
  decls: 12,
  vars: 16,
  consts: [["aria-relevant", "all"], [1, "cx-store-list-order"], ["class", "cx-store-name", "tabindex", "0", 3, "click", "keyup", 4, "ngIf"], ["class", "cx-store-name", "tabindex", "0", 3, "routerLink", 4, "ngIf"], ["class", "cx-store-address", "aria-hidden", "true", 4, "ngIf"], [3, "cxOutlet", "cxOutletContext"], ["target", "_blank", "rel", "noopener noreferrer", 1, "btn", "btn-sm", "btn-secondary", "btn-block", "cx-button", 3, "click", "href"], ["tabindex", "0", 1, "cx-store-name", 3, "click", "keyup"], ["tabindex", "0", 1, "cx-store-name", 3, "routerLink"], ["aria-hidden", "true", 1, "cx-store-address"], [1, "cx-store-address-street"], ["class", "cx-store-distance", 4, "ngIf"], [1, "cx-store-distance"]],
  template: function StoreFinderListItemComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementContainerStart(0);
      \u0275\u0275elementStart(1, "div", 0)(2, "div", 1);
      \u0275\u0275text(3);
      \u0275\u0275elementEnd();
      \u0275\u0275template(4, StoreFinderListItemComponent_a_4_Template, 2, 1, "a", 2)(5, StoreFinderListItemComponent_a_5_Template, 2, 4, "a", 3)(6, StoreFinderListItemComponent_div_6_Template, 5, 8, "div", 4)(7, StoreFinderListItemComponent_ng_template_7_Template, 0, 0, "ng-template", 5);
      \u0275\u0275elementStart(8, "a", 6);
      \u0275\u0275pipe(9, "cxTranslate");
      \u0275\u0275listener("click", function StoreFinderListItemComponent_Template_a_click_8_listener($event) {
        return $event.stopPropagation();
      });
      \u0275\u0275text(10);
      \u0275\u0275pipe(11, "cxTranslate");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementContainerEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", ctx.listOrderLabel, " ");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.useClickEvent);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.useClickEvent);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.location.address);
      \u0275\u0275advance();
      \u0275\u0275property("cxOutlet", ctx.StoreFinderOutlets.PREFERRED_STORE)("cxOutletContext", \u0275\u0275pureFunction2(13, _c1, ctx.location.displayName, ctx.location.name));
      \u0275\u0275advance();
      \u0275\u0275propertyInterpolate("href", ctx.getDirections(ctx.location), \u0275\u0275sanitizeUrl);
      \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(9, 9, "storeFinder.ariaLabelGetDirections"));
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(11, 11, "storeFinder.getDirections"));
    }
  },
  dependencies: [NgIf, RouterLink, OutletDirective, TranslatePipe],
  encapsulation: 2
});
var StoreFinderListItemComponent = _StoreFinderListItemComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StoreFinderListItemComponent, [{
    type: Component,
    args: [{
      selector: "cx-store-finder-list-item",
      template: `<ng-container>
  <div aria-relevant="all">
    <div class="cx-store-list-order">
      {{ listOrderLabel }}
    </div>
    <a
      *ngIf="useClickEvent"
      (click)="handleStoreItemClick()"
      (keyup)="onKey($event)"
      class="cx-store-name"
      tabindex="0"
    >
      {{ location.displayName || location.name }}
    </a>
    <a
      *ngIf="!useClickEvent"
      [routerLink]="[location.name]"
      class="cx-store-name"
      tabindex="0"
    >
      {{ location.displayName || location.name }}
    </a>
    <div class="cx-store-address" *ngIf="location.address" aria-hidden="true">
      <div class="cx-store-address-street">
        {{ location.address.line1 }} {{ location.address.line2 }}
      </div>
      {{
        getFormattedStoreAddress([
          location.address.town,
          location.address.postalCode,
          location.address.country.isocode
        ])
      }}
      <div
        class="cx-store-distance"
        *ngIf="location.formattedDistance && displayDistance"
      >
        {{ location.formattedDistance }}
      </div>
    </div>
    <ng-template
      [cxOutlet]="StoreFinderOutlets.PREFERRED_STORE"
      [cxOutletContext]="{
        displayName: location.displayName,
        name: location.name
      }"
    ></ng-template>

    <a
      href="{{ getDirections(location) }}"
      target="_blank"
      rel="noopener noreferrer"
      class="btn btn-sm btn-secondary btn-block cx-button"
      (click)="$event.stopPropagation()"
      [attr.aria-label]="'storeFinder.ariaLabelGetDirections' | cxTranslate"
      >{{ 'storeFinder.getDirections' | cxTranslate }}</a
    >
  </div>
</ng-container>
`
    }]
  }], () => [{
    type: StoreFinderService
  }], {
    locationIndex: [{
      type: Input
    }],
    listOrderLabel: [{
      type: Input
    }],
    displayDistance: [{
      type: Input
    }],
    useClickEvent: [{
      type: Input
    }],
    storeItemClick: [{
      type: Output
    }]
  });
})();
var _StoreFinderGridComponent = class _StoreFinderGridComponent {
  constructor(storeFinderService, route) {
    this.storeFinderService = storeFinderService;
    this.route = route;
  }
  ngOnInit() {
    this.isLoading$ = this.storeFinderService.getStoresLoading();
    this.locations$ = this.storeFinderService.getFindStoresEntities();
    this.defaultLocation = {};
    this.findStores();
  }
  findStores() {
    if (this.route.snapshot.params.country) {
      this.storeFinderService.callFindStoresAction(this.route.snapshot.params);
    }
  }
};
_StoreFinderGridComponent.\u0275fac = function StoreFinderGridComponent_Factory(t) {
  return new (t || _StoreFinderGridComponent)(\u0275\u0275directiveInject(StoreFinderService), \u0275\u0275directiveInject(ActivatedRoute));
};
_StoreFinderGridComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
  type: _StoreFinderGridComponent,
  selectors: [["cx-store-finder-grid"]],
  decls: 5,
  vars: 6,
  consts: [["loading", ""], [4, "ngIf", "ngIfElse"], ["role", "status"], ["aria-live", "assertive", "aria-atomic", "true", "aria-relevant", "additions", 1, "container"], [1, "cx-visually-hidden"], [1, "row"], ["class", "col-sm-6 col-md-4 col-lg-3 item", 4, "ngFor", "ngForOf"], [1, "col-sm-6", "col-md-4", "col-lg-3", "item"], [3, "location"], [1, "cx-spinner"]],
  template: function StoreFinderGridComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275template(0, StoreFinderGridComponent_ng_container_0_Template, 9, 10, "ng-container", 1);
      \u0275\u0275pipe(1, "async");
      \u0275\u0275pipe(2, "async");
      \u0275\u0275template(3, StoreFinderGridComponent_ng_template_3_Template, 2, 0, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
    }
    if (rf & 2) {
      const loading_r3 = \u0275\u0275reference(4);
      \u0275\u0275property("ngIf", !\u0275\u0275pipeBind1(1, 2, ctx.isLoading$) && \u0275\u0275pipeBind1(2, 4, ctx.locations$))("ngIfElse", loading_r3);
    }
  },
  dependencies: [NgForOf, NgIf, SpinnerComponent, StoreFinderListItemComponent, AsyncPipe, TranslatePipe],
  encapsulation: 2,
  changeDetection: 0
});
var StoreFinderGridComponent = _StoreFinderGridComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StoreFinderGridComponent, [{
    type: Component,
    args: [{
      selector: "cx-store-finder-grid",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: `<ng-container
  *ngIf="
    !(isLoading$ | async) && (locations$ | async) as locations;
    else loading
  "
>
  <div role="status" [attr.aria-label]="'common.loaded' | cxTranslate"></div>
  <div
    class="container"
    aria-live="assertive"
    aria-atomic="true"
    aria-relevant="additions"
  >
    <div class="cx-visually-hidden">
      {{
        'storeFinder.storesFound'
          | cxTranslate: { count: locations?.stores?.length }
      }}
    </div>
    <div class="row">
      <div
        class="col-sm-6 col-md-4 col-lg-3 item"
        *ngFor="let location of locations?.stores"
      >
        <cx-store-finder-list-item
          [location]="location"
        ></cx-store-finder-list-item>
      </div>
    </div>
  </div>
</ng-container>

<ng-template #loading>
  <div class="cx-spinner"><cx-spinner></cx-spinner></div>
</ng-template>
`
    }]
  }], () => [{
    type: StoreFinderService
  }, {
    type: ActivatedRoute
  }], null);
})();
var _StoreFinderSearchComponent = class _StoreFinderSearchComponent {
  constructor(routingService) {
    this.routingService = routingService;
    this.searchBox = new UntypedFormControl();
    this.iconTypes = ICON_TYPE;
  }
  findStores(address) {
    this.routingService.go(["store-finder/find"], {
      queryParams: {
        query: address
      }
    });
  }
  viewStoresWithMyLoc() {
    this.routingService.go(["store-finder/find"], {
      queryParams: {
        useMyLocation: true
      }
    });
  }
  onKey(event) {
    if (this.searchBox.value && this.searchBox.value.length && event.key === "Enter") {
      this.findStores(this.searchBox.value);
    }
  }
};
_StoreFinderSearchComponent.\u0275fac = function StoreFinderSearchComponent_Factory(t) {
  return new (t || _StoreFinderSearchComponent)(\u0275\u0275directiveInject(RoutingService));
};
_StoreFinderSearchComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
  type: _StoreFinderSearchComponent,
  selectors: [["cx-store-finder-search"]],
  decls: 20,
  vars: 28,
  consts: [["queryInput", ""], [1, "container"], [1, "row"], [1, "col-md-12", "col-lg-6"], [1, "form-group", "search-wrapper"], ["type", "text", 1, "form-control", 3, "keyup", "formControl", "placeholder"], ["role", "button", 1, "search", 3, "keyup", "type", "routerLink", "queryParams", "ngClass"], [1, "row", "cx-search-links", "mb-3"], [1, "col-6"], [1, "btn", "btn-primary", "btn-block", 3, "click"], [1, "btn", "btn-primary", "btn-block", 3, "routerLink"]],
  template: function StoreFinderSearchComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "div", 1)(1, "div", 2)(2, "div", 3)(3, "div", 4)(4, "input", 5, 0);
      \u0275\u0275pipe(6, "cxTranslate");
      \u0275\u0275pipe(7, "cxTranslate");
      \u0275\u0275listener("keyup", function StoreFinderSearchComponent_Template_input_keyup_4_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onKey($event));
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "cx-icon", 6);
      \u0275\u0275pipe(9, "cxTranslate");
      \u0275\u0275listener("keyup", function StoreFinderSearchComponent_Template_cx_icon_keyup_8_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onKey($event));
      });
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(10, "div", 3)(11, "div", 7)(12, "div", 8)(13, "button", 9);
      \u0275\u0275listener("click", function StoreFinderSearchComponent_Template_button_click_13_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.viewStoresWithMyLoc());
      });
      \u0275\u0275text(14);
      \u0275\u0275pipe(15, "cxTranslate");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(16, "div", 8)(17, "button", 10);
      \u0275\u0275text(18);
      \u0275\u0275pipe(19, "cxTranslate");
      \u0275\u0275elementEnd()()()()()();
    }
    if (rf & 2) {
      const queryInput_r2 = \u0275\u0275reference(5);
      \u0275\u0275advance(4);
      \u0275\u0275propertyInterpolate("placeholder", \u0275\u0275pipeBind1(6, 12, "storeFinder.searchBox"));
      \u0275\u0275property("formControl", ctx.searchBox);
      \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(7, 14, "storeFinder.searchBoxLabel"));
      \u0275\u0275advance(4);
      \u0275\u0275property("type", ctx.iconTypes.SEARCH)("routerLink", \u0275\u0275pureFunction0(22, _c5))("queryParams", \u0275\u0275pureFunction1(23, _c6, queryInput_r2.value))("ngClass", \u0275\u0275pureFunction1(25, _c7, !(queryInput_r2.value && queryInput_r2.value.length)));
      \u0275\u0275attribute("tabindex", (queryInput_r2.value == null ? null : queryInput_r2.value.length) ? 0 : -1)("aria-label", \u0275\u0275pipeBind1(9, 16, "storeFinder.searchNearestStores"));
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(15, 18, "storeFinder.useMyLocation"), " ");
      \u0275\u0275advance(3);
      \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(27, _c8));
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(19, 20, "storeFinder.viewAllStores"), " ");
    }
  },
  dependencies: [NgClass, DefaultValueAccessor, NgControlStatus, FormControlDirective, RouterLink, IconComponent, TranslatePipe],
  encapsulation: 2
});
var StoreFinderSearchComponent = _StoreFinderSearchComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StoreFinderSearchComponent, [{
    type: Component,
    args: [{
      selector: "cx-store-finder-search",
      template: `<div class="container">
  <div class="row">
    <div class="col-md-12 col-lg-6">
      <div class="form-group search-wrapper">
        <input
          #queryInput
          [formControl]="searchBox"
          (keyup)="onKey($event)"
          type="text"
          class="form-control"
          [attr.aria-label]="'storeFinder.searchBoxLabel' | cxTranslate"
          placeholder="{{ 'storeFinder.searchBox' | cxTranslate }}"
        />
        <cx-icon
          [attr.tabindex]="queryInput.value?.length ? 0 : -1"
          [type]="iconTypes.SEARCH"
          role="button"
          [attr.aria-label]="'storeFinder.searchNearestStores' | cxTranslate"
          class="search"
          (keyup)="onKey($event)"
          [routerLink]="['/store-finder/find']"
          [queryParams]="{ query: queryInput.value }"
          [ngClass]="{
            'disabled-action': !(queryInput.value && queryInput.value.length)
          }"
        ></cx-icon>
      </div>
    </div>
    <div class="col-md-12 col-lg-6">
      <div class="row cx-search-links mb-3">
        <div class="col-6">
          <button
            (click)="viewStoresWithMyLoc()"
            class="btn btn-primary btn-block"
          >
            {{ 'storeFinder.useMyLocation' | cxTranslate }}
          </button>
        </div>
        <div class="col-6">
          <button
            [routerLink]="['/store-finder/view-all']"
            class="btn btn-primary btn-block"
          >
            {{ 'storeFinder.viewAllStores' | cxTranslate }}
          </button>
        </div>
      </div>
    </div>
  </div>
</div>
`
    }]
  }], () => [{
    type: RoutingService
  }], null);
})();
var _StoreFinderHeaderComponent = class _StoreFinderHeaderComponent {
};
_StoreFinderHeaderComponent.\u0275fac = function StoreFinderHeaderComponent_Factory(t) {
  return new (t || _StoreFinderHeaderComponent)();
};
_StoreFinderHeaderComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
  type: _StoreFinderHeaderComponent,
  selectors: [["cx-store-finder-header"]],
  decls: 3,
  vars: 3,
  consts: [["role", "search"]],
  template: function StoreFinderHeaderComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementContainerStart(0);
      \u0275\u0275element(1, "cx-store-finder-search", 0);
      \u0275\u0275pipe(2, "cxTranslate");
      \u0275\u0275elementContainerEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(2, 1, "storeFinder.storeFinder"));
    }
  },
  dependencies: [StoreFinderSearchComponent, TranslatePipe],
  encapsulation: 2
});
var StoreFinderHeaderComponent = _StoreFinderHeaderComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StoreFinderHeaderComponent, [{
    type: Component,
    args: [{
      selector: "cx-store-finder-header",
      template: `<ng-container>
  <cx-store-finder-search
    role="search"
    [attr.aria-label]="'storeFinder.storeFinder' | cxTranslate"
  ></cx-store-finder-search>
</ng-container>
`
    }]
  }], null, null);
})();
var _StoreFinderMapComponent = class _StoreFinderMapComponent {
  constructor(googleMapRendererService) {
    this.googleMapRendererService = googleMapRendererService;
    this.selectedStoreItem = new EventEmitter();
  }
  ngOnChanges(changes) {
    if (changes.locations && this.locations) {
      this.renderMap();
    }
  }
  /**
   * Sets the center of the map to the given location
   * @param latitude latitude of the new center
   * @param longitude longitude of the new center
   */
  centerMap(latitude, longitude) {
    this.googleMapRendererService.centerMap(latitude, longitude);
  }
  renderMap() {
    this.googleMapRendererService.renderMap(this.mapElement.nativeElement, this.locations, (markerIndex) => {
      this.selectStoreItemClickHandle(markerIndex);
    });
  }
  selectStoreItemClickHandle(markerIndex) {
    this.selectedStoreItem.emit(markerIndex);
  }
};
_StoreFinderMapComponent.\u0275fac = function StoreFinderMapComponent_Factory(t) {
  return new (t || _StoreFinderMapComponent)(\u0275\u0275directiveInject(GoogleMapRendererService));
};
_StoreFinderMapComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
  type: _StoreFinderMapComponent,
  selectors: [["cx-store-finder-map"]],
  viewQuery: function StoreFinderMapComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(_c9, 7);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.mapElement = _t.first);
    }
  },
  inputs: {
    locations: "locations"
  },
  outputs: {
    selectedStoreItem: "selectedStoreItem"
  },
  features: [\u0275\u0275NgOnChangesFeature],
  decls: 2,
  vars: 0,
  consts: [["mapElement", ""], ["aria-hidden", "true", 1, "cx-store-map"]],
  template: function StoreFinderMapComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275element(0, "div", 1, 0);
    }
  },
  encapsulation: 2
});
var StoreFinderMapComponent = _StoreFinderMapComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StoreFinderMapComponent, [{
    type: Component,
    args: [{
      selector: "cx-store-finder-map",
      template: '<div aria-hidden="true" #mapElement class="cx-store-map"></div>\n'
    }]
  }], () => [{
    type: GoogleMapRendererService
  }], {
    mapElement: [{
      type: ViewChild,
      args: ["mapElement", {
        static: true
      }]
    }],
    locations: [{
      type: Input
    }],
    selectedStoreItem: [{
      type: Output
    }]
  });
})();
var _StoreFinderPaginationDetailsComponent = class _StoreFinderPaginationDetailsComponent {
  constructor() {
  }
  getResultsPerPage() {
    if (this.pagination.totalResults > this.pagination.pageSize) {
      const firstItem = this.pagination.currentPage * this.pagination.pageSize + 1;
      let resultsPerPage = (this.pagination.currentPage + 1) * this.pagination.pageSize;
      if (resultsPerPage > this.pagination.totalResults) {
        resultsPerPage = this.pagination.totalResults;
      }
      return `${firstItem} - ${resultsPerPage}`;
    } else {
      return `1 - ${this.pagination.totalResults}`;
    }
  }
};
_StoreFinderPaginationDetailsComponent.\u0275fac = function StoreFinderPaginationDetailsComponent_Factory(t) {
  return new (t || _StoreFinderPaginationDetailsComponent)();
};
_StoreFinderPaginationDetailsComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
  type: _StoreFinderPaginationDetailsComponent,
  selectors: [["cx-store-finder-pagination-details"]],
  inputs: {
    pagination: "pagination"
  },
  decls: 3,
  vars: 7,
  consts: [[1, "cx-pagination-details"]],
  template: function StoreFinderPaginationDetailsComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "span", 0);
      \u0275\u0275text(1);
      \u0275\u0275pipe(2, "cxTranslate");
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275textInterpolate2(" ", ctx.getResultsPerPage(), " ", \u0275\u0275pipeBind2(2, 2, "storeFinder.fromStoresFound", \u0275\u0275pureFunction1(5, _c4, ctx.pagination.totalResults)), "\n");
    }
  },
  dependencies: [TranslatePipe],
  encapsulation: 2
});
var StoreFinderPaginationDetailsComponent = _StoreFinderPaginationDetailsComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StoreFinderPaginationDetailsComponent, [{
    type: Component,
    args: [{
      selector: "cx-store-finder-pagination-details",
      template: `<span class="cx-pagination-details">
  {{ getResultsPerPage() }}
  {{
    'storeFinder.fromStoresFound'
      | cxTranslate: { count: pagination.totalResults }
  }}
</span>
`
    }]
  }], () => [], {
    pagination: [{
      type: Input
    }]
  });
})();
var LocationDisplayMode;
(function(LocationDisplayMode2) {
  LocationDisplayMode2["LIST_VIEW"] = "listView";
  LocationDisplayMode2["MAP_VIEW"] = "mapView";
})(LocationDisplayMode || (LocationDisplayMode = {}));
var _StoreFinderStoreDescriptionComponent = class _StoreFinderStoreDescriptionComponent extends AbstractStoreItemComponent {
  constructor(storeFinderService) {
    super(storeFinderService);
    this.storeFinderService = storeFinderService;
  }
};
_StoreFinderStoreDescriptionComponent.\u0275fac = function StoreFinderStoreDescriptionComponent_Factory(t) {
  return new (t || _StoreFinderStoreDescriptionComponent)(\u0275\u0275directiveInject(StoreFinderService));
};
_StoreFinderStoreDescriptionComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
  type: _StoreFinderStoreDescriptionComponent,
  selectors: [["cx-store-finder-store-description"]],
  inputs: {
    location: "location",
    disableMap: "disableMap"
  },
  features: [\u0275\u0275InheritDefinitionFeature],
  decls: 1,
  vars: 1,
  consts: [[4, "ngIf"], [1, "container"], [1, "row"], [1, "cx-store", "col-md-4"], ["aria-hidden", "true"], ["class", "cx-store-description-address", 4, "ngIf"], [1, "cx-contact"], [1, "cx-list"], [1, "cx-item"], ["target", "_blank", "rel", "noopener noreferrer", 1, "cx-link", 3, "href"], ["class", "cx-item", 4, "ngIf"], ["class", "cx-schedule", 4, "ngIf"], ["class", "cx-features", 4, "ngIf"], ["class", "cx-storeMap col-lg-8", 4, "ngIf"], [1, "cx-store-description-address"], [1, "cx-schedule"], [3, "location"], [1, "cx-features"], [1, "col-lg-12"], [1, "cx-features-header"], ["class", "col-lg-12 cx-feature-item", 4, "ngFor", "ngForOf"], [1, "col-lg-12", "cx-feature-item"], [1, "cx-feature-value"], [1, "cx-storeMap", "col-lg-8"], [3, "locations"]],
  template: function StoreFinderStoreDescriptionComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275template(0, StoreFinderStoreDescriptionComponent_ng_container_0_Template, 19, 15, "ng-container", 0);
    }
    if (rf & 2) {
      \u0275\u0275property("ngIf", ctx.location);
    }
  },
  dependencies: [NgForOf, NgIf, StoreFinderMapComponent, ScheduleComponent, JsonPipe, TranslatePipe],
  encapsulation: 2
});
var StoreFinderStoreDescriptionComponent = _StoreFinderStoreDescriptionComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StoreFinderStoreDescriptionComponent, [{
    type: Component,
    args: [{
      selector: "cx-store-finder-store-description",
      template: `<ng-container *ngIf="location">
  <div class="container">
    <div class="row">
      <article class="cx-store col-md-4">
        <h2 aria-hidden="true">{{ location.displayName || location.name }}</h2>

        <p *ngIf="location.address" class="cx-store-description-address">
          {{ location.address.line1 }} {{ location.address.line2 }} <br />
          {{
            getFormattedStoreAddress([
              location.address.town,
              location.address.postalCode,
              location.address.country.isocode
            ])
          }}
        </p>

        <section class="cx-contact">
          <ul class="cx-list">
            <li class="cx-item">
              <a
                class="cx-link"
                [href]="getDirections(location)"
                target="_blank"
                rel="noopener noreferrer"
                [attr.aria-label]="
                  'storeFinder.ariaLabelGetDirections' | cxTranslate
                "
                >{{ 'storeFinder.getDirections' | cxTranslate }}</a
              >
            </li>
            <li class="cx-item" *ngIf="location.address?.phone">
              {{ 'storeFinder.call' | cxTranslate }}
              {{ location.address?.phone }}
            </li>
          </ul>
        </section>
        <div class="cx-schedule" *ngIf="location.openingHours">
          <cx-schedule [location]="location">
            <h3>{{ 'storeFinder.storeHours' | cxTranslate }}</h3>
          </cx-schedule>
        </div>

        <div *ngIf="(location.features | json) !== '{}'" class="cx-features">
          <div class="row">
            <div class="col-lg-12">
              <h3 class="cx-features-header">
                {{ 'storeFinder.storeFeatures' | cxTranslate }}
              </h3>
            </div>
          </div>

          <article class="row">
            <div
              class="col-lg-12 cx-feature-item"
              *ngFor="let feature of location.features?.entry"
            >
              <div class="cx-feature-value">{{ feature.value }}</div>
            </div>
          </article>
        </div>
      </article>
      <article class="cx-storeMap col-lg-8" *ngIf="!disableMap">
        <cx-store-finder-map [locations]="[location]"></cx-store-finder-map>
      </article>
    </div>
  </div>
</ng-container>
`
    }]
  }], () => [{
    type: StoreFinderService
  }], {
    location: [{
      type: Input
    }],
    disableMap: [{
      type: Input
    }]
  });
})();
var _StoreFinderListComponent = class _StoreFinderListComponent {
  constructor(storeFinderService, document) {
    this.storeFinderService = storeFinderService;
    this.document = document;
    this.iconTypes = ICON_TYPE;
    this.displayModes = LocationDisplayMode;
    this.activeDisplayMode = LocationDisplayMode.LIST_VIEW;
    this.isDetailsModeVisible = false;
  }
  centerStoreOnMapByIndex(index, location) {
    this.showStoreDetails(location);
    this.selectedStoreIndex = index;
    this.selectedStore = location;
    this.storeMap.centerMap(this.storeFinderService.getStoreLatitude(this.locations.stores[index]), this.storeFinderService.getStoreLongitude(this.locations.stores[index]));
  }
  selectStoreItemList(index) {
    this.selectedStoreIndex = index;
    const storeListItem = this.document.getElementById("item-" + index);
    storeListItem.scrollIntoView({
      behavior: "smooth",
      block: "center"
    });
  }
  showStoreDetails(location) {
    this.isDetailsModeVisible = true;
    this.storeDetails = location;
  }
  hideStoreDetails() {
    this.isDetailsModeVisible = false;
    this.selectedStoreIndex = void 0;
    this.selectedStore = void 0;
    this.storeMap.renderMap();
  }
  setDisplayMode(mode) {
    this.activeDisplayMode = mode;
  }
  isDisplayModeActive(mode) {
    return this.activeDisplayMode === mode;
  }
};
_StoreFinderListComponent.\u0275fac = function StoreFinderListComponent_Factory(t) {
  return new (t || _StoreFinderListComponent)(\u0275\u0275directiveInject(StoreFinderService), \u0275\u0275directiveInject(DOCUMENT));
};
_StoreFinderListComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
  type: _StoreFinderListComponent,
  selectors: [["cx-store-finder-list"]],
  viewQuery: function StoreFinderListComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(_c10, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.storeMap = _t.first);
    }
  },
  inputs: {
    locations: "locations",
    useMylocation: "useMylocation"
  },
  decls: 1,
  vars: 1,
  consts: [["storeMap", ""], [4, "ngIf"], ["aria-atomic", "true", "aria-live", "assertive", 1, "container", "mb-2"], ["class", "row", 4, "ngIf"], ["class", "row cx-columns", 4, "ngIf"], ["class", "cx-columns-mobile", 4, "ngIf"], [1, "row"], [1, "col-md-12"], [3, "pagination"], [1, "text-left", "cx-back-wrapper"], [1, "cx-visually-hidden"], ["class", "btn btn-block btn-secondary cx-back", 3, "click", 4, "ngIf"], [1, "btn", "btn-block", "btn-secondary", "cx-back", 3, "click"], [3, "type"], [1, "row", "cx-columns"], [1, "col-md-4", "cx-address-col"], ["class", "cx-store-details", 4, "ngIf"], ["class", "cx-list", 4, "ngIf"], [1, "col-md-8", "cx-map-col"], [3, "selectedStoreItem", "locations"], [1, "cx-store-details"], [3, "location", "disableMap"], [1, "cx-list"], ["class", "cx-list-items", 3, "id", "ngClass", 4, "ngFor", "ngForOf"], [1, "cx-list-items", 3, "id", "ngClass"], [3, "storeItemClick", "location", "locationIndex", "displayDistance", "useClickEvent", "listOrderLabel"], [1, "cx-columns-mobile"], ["role", "tablist", 1, "nav", "cx-nav"], ["class", "nav-item cx-nav-item", 4, "ngFor", "ngForOf"], [1, "tab-content"], [3, "ngSwitch"], [3, "ngSwitchCase"], [1, "nav-item", "cx-nav-item"], ["role", "tab", "aria-disabled", "false", 3, "click", "id", "ngClass"], ["id", "tab-listView-panel", "role", "tabpanel", "aria-labelledby", "tab-listView"], [1, "cx-address-col"], ["id", "tab-mapView-panel", "role", "tabpanel", "aria-labelledby", "tab-mapView"], [1, "cx-map-col"], [1, "col-md-12", "cx-not-found"]],
  template: function StoreFinderListComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275template(0, StoreFinderListComponent_ng_container_0_Template, 6, 4, "ng-container", 1);
    }
    if (rf & 2) {
      \u0275\u0275property("ngIf", ctx.locations);
    }
  },
  dependencies: [NgClass, NgForOf, NgIf, NgSwitch, NgSwitchCase, IconComponent, StoreFinderMapComponent, StoreFinderListItemComponent, StoreFinderStoreDescriptionComponent, StoreFinderPaginationDetailsComponent, KeyValuePipe, TranslatePipe],
  encapsulation: 2
});
var StoreFinderListComponent = _StoreFinderListComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StoreFinderListComponent, [{
    type: Component,
    args: [{
      selector: "cx-store-finder-list",
      template: `<ng-container *ngIf="locations">
  <div class="container mb-2" aria-atomic="true" aria-live="assertive">
    <div class="row" *ngIf="locations?.pagination">
      <div class="col-md-12">
        <cx-store-finder-pagination-details
          [pagination]="locations.pagination"
        ></cx-store-finder-pagination-details>
      </div>
      <div class="text-left cx-back-wrapper">
        <div class="cx-visually-hidden">
          {{ storeDetails?.displayName }}
        </div>
        <button
          class="btn btn-block btn-secondary cx-back"
          *ngIf="isDetailsModeVisible"
          (click)="hideStoreDetails()"
        >
          <cx-icon [type]="iconTypes.CARET_LEFT"></cx-icon>
          {{ 'storeFinder.back' | cxTranslate }}
        </button>
      </div>
    </div>
    <div *ngIf="locations?.stores" class="row cx-columns">
      <div class="col-md-4 cx-address-col">
        <div class="cx-store-details" *ngIf="isDetailsModeVisible">
          <cx-store-finder-store-description
            [location]="storeDetails"
            [disableMap]="true"
          ></cx-store-finder-store-description>
        </div>
        <ol class="cx-list" *ngIf="!isDetailsModeVisible">
          <li
            *ngFor="let location of locations?.stores; let i = index"
            id="{{ 'item-' + i }}"
            [ngClass]="{
              'cx-selected-item': selectedStoreIndex === i
            }"
            class="cx-list-items"
          >
            <cx-store-finder-list-item
              [location]="location"
              [locationIndex]="i"
              [displayDistance]="useMylocation"
              [useClickEvent]="true"
              (storeItemClick)="centerStoreOnMapByIndex($event, location)"
              [listOrderLabel]="
                i +
                locations.pagination.currentPage *
                  locations.pagination.pageSize +
                1
              "
            ></cx-store-finder-list-item>
          </li>
        </ol>
      </div>
      <div class="col-md-8 cx-map-col">
        <cx-store-finder-map
          #storeMap
          [locations]="locations.stores"
          (selectedStoreItem)="selectStoreItemList($event)"
        ></cx-store-finder-map>
      </div>
    </div>

    <!-- mobile tabs for column set only -->
    <div *ngIf="locations?.stores" class="cx-columns-mobile">
      <ul class="nav cx-nav" role="tablist">
        <li
          class="nav-item cx-nav-item"
          *ngFor="let mode of displayModes | keyvalue"
        >
          <button
            [id]="'tab-' + mode?.value"
            role="tab"
            [ngClass]="{
              'nav-link': true,
              active: isDisplayModeActive(mode?.value)
            }"
            [attr.aria-controls]="'tab-' + mode?.value + '-panel'"
            [attr.aria-selected]="isDisplayModeActive(mode?.value)"
            aria-disabled="false"
            (click)="setDisplayMode(mode?.value)"
          >
            {{ 'storeFinder.' + mode?.value | cxTranslate }}
          </button>
        </li>
      </ul>
      <div class="tab-content">
        <div [ngSwitch]="activeDisplayMode">
          <ng-template [ngSwitchCase]="displayModes.LIST_VIEW">
            <div
              id="tab-listView-panel"
              role="tabpanel"
              aria-labelledby="tab-listView"
            >
              <div class="cx-address-col">
                <div class="cx-store-details" *ngIf="isDetailsModeVisible">
                  <cx-store-finder-store-description
                    [location]="storeDetails"
                    [disableMap]="true"
                  ></cx-store-finder-store-description>
                </div>
                <ol class="cx-list" *ngIf="!isDetailsModeVisible">
                  <li
                    *ngFor="let location of locations?.stores; let i = index"
                    id="{{ 'item-' + i }}"
                    [ngClass]="{
                      'cx-selected-item': selectedStoreIndex === i
                    }"
                    class="cx-list-items"
                  >
                    <cx-store-finder-list-item
                      [location]="location"
                      [locationIndex]="i"
                      [displayDistance]="useMylocation"
                      [useClickEvent]="true"
                      (storeItemClick)="
                        centerStoreOnMapByIndex($event, location)
                      "
                      [listOrderLabel]="
                        i +
                        locations.pagination.currentPage *
                          locations.pagination.pageSize +
                        1
                      "
                    ></cx-store-finder-list-item>
                  </li>
                </ol>
              </div>
            </div>
          </ng-template>
          <ng-template [ngSwitchCase]="displayModes.MAP_VIEW">
            <div
              id="tab-mapView-panel"
              role="tabpanel"
              aria-labelledby="tab-mapView"
            >
              <div class="cx-map-col">
                <cx-store-finder-map
                  #storeMap
                  [locations]="
                    selectedStore ? [selectedStore] : locations.stores
                  "
                  (selectedStoreItem)="selectStoreItemList($event)"
                ></cx-store-finder-map>
              </div>
            </div>
          </ng-template>
        </div>
      </div>
    </div>
    <!-- mobile tabs end -->

    <div *ngIf="!locations?.stores" class="row">
      <div class="col-md-12 cx-not-found">
        {{ 'storeFinder.noStoreFound' | cxTranslate }}
      </div>
    </div>
  </div>
</ng-container>
`
    }]
  }], () => [{
    type: StoreFinderService
  }, {
    type: void 0,
    decorators: [{
      type: Inject,
      args: [DOCUMENT]
    }]
  }], {
    locations: [{
      type: Input
    }],
    useMylocation: [{
      type: Input
    }],
    storeMap: [{
      type: ViewChild,
      args: ["storeMap"]
    }]
  });
})();
var _StoreFinderSearchResultComponent = class _StoreFinderSearchResultComponent {
  constructor(storeFinderService, route, config) {
    this.storeFinderService = storeFinderService;
    this.route = route;
    this.config = config;
    this.countryCode = null;
    this.searchConfig = {
      currentPage: 0
    };
  }
  ngOnInit() {
    this.subscription = this.route.queryParams.subscribe((params) => this.initialize(params));
  }
  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
  viewPage(pageNumber) {
    this.searchConfig = __spreadProps(__spreadValues({}, this.searchConfig), {
      currentPage: pageNumber
    });
    this.storeFinderService.findStoresAction(this.searchQuery.queryText, this.searchConfig, this.geolocation, this.countryCode, this.useMyLocation, this.radius);
  }
  initialize(params) {
    this.searchQuery = this.parseParameters(params);
    this.useMyLocation = params && params.useMyLocation ? true : false;
    this.searchConfig = __spreadProps(__spreadValues({}, this.searchConfig), {
      currentPage: 0
    });
    this.radius = this.config.googleMaps.radius;
    this.storeFinderService.findStoresAction(this.searchQuery.queryText, this.searchConfig, this.geolocation, this.countryCode, this.useMyLocation, this.radius);
    this.isLoading$ = this.storeFinderService.getStoresLoading();
    this.locations$ = this.storeFinderService.getFindStoresEntities();
  }
  parseParameters(queryParams) {
    let searchQuery;
    if (queryParams.query) {
      searchQuery = {
        queryText: queryParams.query
      };
    } else {
      searchQuery = {
        queryText: ""
      };
    }
    searchQuery.useMyLocation = queryParams.useMyLocation != null && queryParams.useMyLocation.toUpperCase() === "TRUE";
    return searchQuery;
  }
};
_StoreFinderSearchResultComponent.\u0275fac = function StoreFinderSearchResultComponent_Factory(t) {
  return new (t || _StoreFinderSearchResultComponent)(\u0275\u0275directiveInject(StoreFinderService), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(StoreFinderConfig));
};
_StoreFinderSearchResultComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
  type: _StoreFinderSearchResultComponent,
  selectors: [["cx-store-finder-search-result"]],
  decls: 5,
  vars: 6,
  consts: [["loading", ""], [4, "ngIf", "ngIfElse"], ["role", "status"], [4, "ngIf"], [3, "locations", "useMylocation", 4, "ngIf"], ["class", "container", 4, "ngIf"], [1, "cx-pagination"], ["aria-hidden", "true", 3, "viewPageEvent", "pagination"], [3, "locations", "useMylocation"], [1, "container"], [1, "row"], ["role", "alert", 1, "cx-no-stores"], [1, "cx-spinner"]],
  template: function StoreFinderSearchResultComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275template(0, StoreFinderSearchResultComponent_div_0_Template, 6, 6, "div", 1);
      \u0275\u0275pipe(1, "async");
      \u0275\u0275pipe(2, "async");
      \u0275\u0275template(3, StoreFinderSearchResultComponent_ng_template_3_Template, 2, 0, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
    }
    if (rf & 2) {
      const loading_r4 = \u0275\u0275reference(4);
      \u0275\u0275property("ngIf", !\u0275\u0275pipeBind1(1, 2, ctx.isLoading$) && \u0275\u0275pipeBind1(2, 4, ctx.locations$))("ngIfElse", loading_r4);
    }
  },
  dependencies: [NgIf, PaginationComponent, SpinnerComponent, StoreFinderListComponent, AsyncPipe, TranslatePipe],
  encapsulation: 2
});
var StoreFinderSearchResultComponent = _StoreFinderSearchResultComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StoreFinderSearchResultComponent, [{
    type: Component,
    args: [{
      selector: "cx-store-finder-search-result",
      template: `<div
  *ngIf="
    !(isLoading$ | async) && (locations$ | async) as locations;
    else loading
  "
>
  <div role="status" [attr.aria-label]="'common.loaded' | cxTranslate"></div>
  <div *ngIf="locations?.stores.length">
    <div class="cx-pagination">
      <cx-pagination
        aria-hidden="true"
        [pagination]="locations.pagination"
        (viewPageEvent)="viewPage($event)"
      ></cx-pagination>
    </div>
  </div>
  <cx-store-finder-list
    *ngIf="locations?.stores.length"
    [locations]="locations"
    [useMylocation]="useMyLocation"
  ></cx-store-finder-list>
  <div class="container" *ngIf="!locations?.stores.length">
    <div class="row">
      <span class="cx-no-stores" role="alert">
        {{ 'storeFinder.noStoresMessage' | cxTranslate }}
      </span>
    </div>
  </div>
</div>
<ng-template #loading>
  <div class="cx-spinner">
    <cx-spinner></cx-spinner>
  </div>
</ng-template>
`
    }]
  }], () => [{
    type: StoreFinderService
  }, {
    type: ActivatedRoute
  }, {
    type: StoreFinderConfig
  }], null);
})();
var _StoreFinderStoresCountComponent = class _StoreFinderStoresCountComponent {
  constructor(storeFinderService) {
    this.storeFinderService = storeFinderService;
  }
  ngOnInit() {
    this.storeFinderService.viewAllStores();
    this.locations$ = this.storeFinderService.getViewAllStoresEntities();
    this.isLoading$ = this.storeFinderService.getViewAllStoresLoading();
  }
};
_StoreFinderStoresCountComponent.\u0275fac = function StoreFinderStoresCountComponent_Factory(t) {
  return new (t || _StoreFinderStoresCountComponent)(\u0275\u0275directiveInject(StoreFinderService));
};
_StoreFinderStoresCountComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
  type: _StoreFinderStoresCountComponent,
  selectors: [["cx-store-finder-stores-count"]],
  decls: 5,
  vars: 6,
  consts: [["loading", ""], [4, "ngIf", "ngIfElse"], ["role", "status"], [1, "cx-count", "container"], ["class", "row", 4, "ngIf"], [1, "row"], [1, "cx-visually-hidden"], ["class", "cx-set col-sm-6 col-md-4 col-lg-4 col-xl-3", 4, "ngFor", "ngForOf"], [1, "cx-set", "col-sm-6", "col-md-4", "col-lg-4", "col-xl-3"], ["role", "button", 1, "btn-link", 3, "routerLink"], ["aria-hidden", "true", 1, "cx-title"], [1, "cx-name", 3, "ngClass"], ["class", "cx-country-count", 3, "ngClass", 4, "ngIf"], [1, "cx-country-count", 3, "ngClass"], ["role", "alert", 1, "cx-no-stores"], [1, "cx-count-spinner"]],
  template: function StoreFinderStoresCountComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275template(0, StoreFinderStoresCountComponent_ng_container_0_Template, 6, 5, "ng-container", 1);
      \u0275\u0275pipe(1, "async");
      \u0275\u0275pipe(2, "async");
      \u0275\u0275template(3, StoreFinderStoresCountComponent_ng_template_3_Template, 2, 0, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
    }
    if (rf & 2) {
      const loading_r3 = \u0275\u0275reference(4);
      \u0275\u0275property("ngIf", !\u0275\u0275pipeBind1(1, 2, ctx.isLoading$) && \u0275\u0275pipeBind1(2, 4, ctx.locations$))("ngIfElse", loading_r3);
    }
  },
  dependencies: [NgClass, NgForOf, NgIf, RouterLink, SpinnerComponent, AsyncPipe, TranslatePipe],
  encapsulation: 2
});
var StoreFinderStoresCountComponent = _StoreFinderStoresCountComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StoreFinderStoresCountComponent, [{
    type: Component,
    args: [{
      selector: "cx-store-finder-stores-count",
      template: `<ng-container
  *ngIf="
    !(isLoading$ | async) && (locations$ | async) as locations;
    else loading
  "
>
  <div role="status" [attr.aria-label]="'common.loaded' | cxTranslate"></div>
  <div class="cx-count container">
    <div class="row" *ngIf="locations?.length">
      <div class="cx-visually-hidden">
        {{
          'storeFinder.ariaLabelCountriesCount'
            | cxTranslate: { count: locations?.length }
        }}
      </div>
      <div
        *ngFor="let country of locations"
        class="cx-set col-sm-6 col-md-4 col-lg-4 col-xl-3"
      >
        <a
          [routerLink]="['../country', country.isoCode]"
          class="btn-link"
          role="button"
          [attr.aria-label]="country.name + '(' + country.count + ')'"
        >
          <h2 class="cx-title" aria-hidden="true">
            <span
              [ngClass]="
                country?.storeCountDataList
                  ? 'country-header'
                  : 'country-header-link'
              "
              class="cx-name"
              >{{ country.name }}</span
            >
            <span
              [ngClass]="
                country?.storeCountDataList
                  ? 'country-header'
                  : 'country-header-link'
              "
              *ngIf="!country?.storeCountDataList"
              class="cx-country-count"
              >({{ country.count }})</span
            >
          </h2>
        </a>
      </div>
    </div>
    <div class="row" *ngIf="!locations?.length">
      <span class="cx-no-stores" role="alert">
        {{ 'storeFinder.noStoresMessage' | cxTranslate }}
      </span>
    </div>
  </div>
</ng-container>
<ng-template #loading>
  <div class="cx-count-spinner"><cx-spinner></cx-spinner></div>
</ng-template>
`
    }]
  }], () => [{
    type: StoreFinderService
  }], null);
})();
var _StoreFinderComponent = class _StoreFinderComponent {
};
_StoreFinderComponent.\u0275fac = function StoreFinderComponent_Factory(t) {
  return new (t || _StoreFinderComponent)();
};
_StoreFinderComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
  type: _StoreFinderComponent,
  selectors: [["cx-store-finder"]],
  decls: 5,
  vars: 0,
  consts: [["aria-live", "assertive", "aria-relevant", "additions text"], [1, "cx-store-finder-wrapper"]],
  template: function StoreFinderComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementContainerStart(0);
      \u0275\u0275elementStart(1, "div", 0)(2, "div", 1);
      \u0275\u0275element(3, "cx-store-finder-header")(4, "router-outlet");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementContainerEnd();
    }
  },
  dependencies: [RouterOutlet, StoreFinderHeaderComponent],
  encapsulation: 2
});
var StoreFinderComponent = _StoreFinderComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StoreFinderComponent, [{
    type: Component,
    args: [{
      selector: "cx-store-finder",
      template: '<ng-container>\n  <div aria-live="assertive" aria-relevant="additions text">\n    <div class="cx-store-finder-wrapper">\n      <cx-store-finder-header></cx-store-finder-header>\n      <router-outlet></router-outlet>\n    </div>\n  </div>\n</ng-container>\n'
    }]
  }], null, null);
})();
var _StoreFinderStoreComponent = class _StoreFinderStoreComponent {
  constructor(storeFinderService, route, routingService) {
    this.storeFinderService = storeFinderService;
    this.route = route;
    this.routingService = routingService;
    this.iconTypes = ICON_TYPE;
  }
  ngOnInit() {
    if (!this.location) {
      this.requestStoresData();
      this.location$ = this.storeFinderService.getFindStoreEntityById();
      this.isLoading$ = this.storeFinderService.getStoresLoading();
    }
  }
  requestStoresData() {
    this.storeFinderService.viewStoreById(this.route.snapshot.params.store);
  }
  goBack() {
    this.routingService.go([`store-finder/country/${this.route.snapshot.params.country}`]);
  }
};
_StoreFinderStoreComponent.\u0275fac = function StoreFinderStoreComponent_Factory(t) {
  return new (t || _StoreFinderStoreComponent)(\u0275\u0275directiveInject(StoreFinderService), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(RoutingService));
};
_StoreFinderStoreComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
  type: _StoreFinderStoreComponent,
  selectors: [["cx-store-finder-store"]],
  inputs: {
    location: "location",
    disableMap: "disableMap"
  },
  decls: 6,
  vars: 6,
  consts: [["loading", ""], ["aria-live", "assertive", "aria-atomic", "true", "aria-relevant", "additions"], ["class", "container", 4, "ngIf", "ngIfElse"], [1, "container"], ["role", "status"], [1, "cx-visually-hidden"], [1, "cx-store-actions"], [1, "btn", "btn-block", "btn-secondary", 3, "click"], [3, "type"], [1, "row"], [1, "col-12", "p-0"], [3, "disableMap", "location"], [1, "cx-spinner"]],
  template: function StoreFinderStoreComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 1);
      \u0275\u0275template(1, StoreFinderStoreComponent_div_1_Template, 13, 10, "div", 2);
      \u0275\u0275pipe(2, "async");
      \u0275\u0275pipe(3, "async");
      \u0275\u0275elementEnd();
      \u0275\u0275template(4, StoreFinderStoreComponent_ng_template_4_Template, 2, 0, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
    }
    if (rf & 2) {
      const loading_r4 = \u0275\u0275reference(5);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.location || !\u0275\u0275pipeBind1(2, 2, ctx.isLoading$) && \u0275\u0275pipeBind1(3, 4, ctx.location$))("ngIfElse", loading_r4);
    }
  },
  dependencies: [NgIf, SpinnerComponent, IconComponent, StoreFinderStoreDescriptionComponent, AsyncPipe, TranslatePipe],
  encapsulation: 2
});
var StoreFinderStoreComponent = _StoreFinderStoreComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StoreFinderStoreComponent, [{
    type: Component,
    args: [{
      selector: "cx-store-finder-store",
      template: `<div aria-live="assertive" aria-atomic="true" aria-relevant="additions">
  <div
    class="container"
    *ngIf="
      location || (!(isLoading$ | async) && (location$ | async)) as location;
      else loading
    "
  >
    <div role="status" [attr.aria-label]="'common.loaded' | cxTranslate"></div>
    <div class="cx-visually-hidden">
      {{ location?.displayName }}
    </div>
    <div class="cx-store-actions">
      <button class="btn btn-block btn-secondary" (click)="goBack()">
        <cx-icon [type]="iconTypes.CARET_LEFT"></cx-icon>
        {{ 'storeFinder.backToList' | cxTranslate }}
      </button>
    </div>
    <div class="row">
      <div class="col-12 p-0">
        <cx-store-finder-store-description
          [disableMap]="disableMap"
          [location]="location"
        ></cx-store-finder-store-description>
      </div>
    </div>
  </div>
</div>

<ng-template #loading>
  <div class="cx-spinner"><cx-spinner></cx-spinner></div>
</ng-template>
`
    }]
  }], () => [{
    type: StoreFinderService
  }, {
    type: ActivatedRoute
  }, {
    type: RoutingService
  }], {
    location: [{
      type: Input
    }],
    disableMap: [{
      type: Input
    }]
  });
})();
var _StoreFinderComponentsModule = class _StoreFinderComponentsModule {
};
_StoreFinderComponentsModule.\u0275fac = function StoreFinderComponentsModule_Factory(t) {
  return new (t || _StoreFinderComponentsModule)();
};
_StoreFinderComponentsModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
  type: _StoreFinderComponentsModule
});
_StoreFinderComponentsModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
  providers: [provideDefaultConfig({
    cmsComponents: {
      StoreFinderComponent: {
        component: StoreFinderComponent,
        childRoutes: [{
          path: "find",
          component: StoreFinderSearchResultComponent
        }, {
          path: "view-all",
          component: StoreFinderStoresCountComponent
        }, {
          path: "country/:country",
          component: StoreFinderGridComponent
        }, {
          path: "country/:country/region/:region",
          component: StoreFinderGridComponent
        }, {
          path: "country/:country/region/:region/:store",
          component: StoreFinderStoreComponent
        }, {
          path: "country/:country/:store",
          component: StoreFinderStoreComponent
        }]
      }
    }
  })],
  imports: [CommonModule, ReactiveFormsModule, RouterModule, ListNavigationModule, SpinnerModule, UrlModule, StoreFinderCoreModule, I18nModule, IconModule, OutletModule]
});
var StoreFinderComponentsModule = _StoreFinderComponentsModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StoreFinderComponentsModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, ReactiveFormsModule, RouterModule, ListNavigationModule, SpinnerModule, UrlModule, StoreFinderCoreModule, I18nModule, IconModule, OutletModule],
      providers: [provideDefaultConfig({
        cmsComponents: {
          StoreFinderComponent: {
            component: StoreFinderComponent,
            childRoutes: [{
              path: "find",
              component: StoreFinderSearchResultComponent
            }, {
              path: "view-all",
              component: StoreFinderStoresCountComponent
            }, {
              path: "country/:country",
              component: StoreFinderGridComponent
            }, {
              path: "country/:country/region/:region",
              component: StoreFinderGridComponent
            }, {
              path: "country/:country/region/:region/:store",
              component: StoreFinderStoreComponent
            }, {
              path: "country/:country/:store",
              component: StoreFinderStoreComponent
            }]
          }
        }
      })],
      declarations: [StoreFinderSearchComponent, StoreFinderListComponent, StoreFinderMapComponent, StoreFinderListItemComponent, StoreFinderStoresCountComponent, StoreFinderGridComponent, StoreFinderStoreDescriptionComponent, ScheduleComponent, StoreFinderHeaderComponent, StoreFinderSearchResultComponent, StoreFinderComponent, StoreFinderPaginationDetailsComponent, StoreFinderStoreComponent],
      exports: [ScheduleComponent, StoreFinderComponent, StoreFinderGridComponent, StoreFinderHeaderComponent, StoreFinderListItemComponent, StoreFinderMapComponent, StoreFinderPaginationDetailsComponent, StoreFinderSearchComponent, StoreFinderSearchResultComponent, StoreFinderListComponent, StoreFinderStoreDescriptionComponent, StoreFinderStoresCountComponent, StoreFinderStoreComponent]
    }]
  }], null, null);
})();

// node_modules/@spartacus/storefinder/fesm2022/spartacus-storefinder.mjs
var _StoreFinderModule = class _StoreFinderModule {
};
_StoreFinderModule.\u0275fac = function StoreFinderModule_Factory(t) {
  return new (t || _StoreFinderModule)();
};
_StoreFinderModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
  type: _StoreFinderModule
});
_StoreFinderModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
  imports: [StoreFinderCoreModule, StoreFinderOccModule, StoreFinderComponentsModule]
});
var StoreFinderModule = _StoreFinderModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StoreFinderModule, [{
    type: NgModule,
    args: [{
      imports: [StoreFinderCoreModule, StoreFinderOccModule, StoreFinderComponentsModule]
    }]
  }], null, null);
})();

export {
  StoreFinderConfig,
  StoreFinderService,
  StoreFinderModule
};
//# sourceMappingURL=chunk-BVJNIPFC.mjs.map
