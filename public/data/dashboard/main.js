(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/vinni/Documents/uni/bachelorarbeit/TraderScriptSource/dashboard/src/main.ts */"zUnb");


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "EtlH":
/*!***************************************************!*\
  !*** ./src/app/models/influx-filter-type.enum.ts ***!
  \***************************************************/
/*! exports provided: INFLUX_FILTER_TYPE */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "INFLUX_FILTER_TYPE", function() { return INFLUX_FILTER_TYPE; });
var INFLUX_FILTER_TYPE;
(function (INFLUX_FILTER_TYPE) {
    INFLUX_FILTER_TYPE["STOCK"] = "stock";
    INFLUX_FILTER_TYPE["EMA"] = "ema";
    INFLUX_FILTER_TYPE["RSI"] = "rsi";
    INFLUX_FILTER_TYPE["MACD"] = "macd";
})(INFLUX_FILTER_TYPE || (INFLUX_FILTER_TYPE = {}));


/***/ }),

/***/ "KRBT":
/*!*************************************************!*\
  !*** ./src/app/services/interceptor.service.ts ***!
  \*************************************************/
/*! exports provided: InterceptorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InterceptorService", function() { return InterceptorService; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _states_chart_state__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../states/chart.state */ "MhDQ");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngxs/store */ "AcyG");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");






class InterceptorService {
    constructor(store, router, ngZone) {
        this.store = store;
        this.router = router;
        this.ngZone = ngZone;
    }
    intercept(req, next) {
        var _a;
        const token = (_a = this.store.selectSnapshot(_states_chart_state__WEBPACK_IMPORTED_MODULE_2__["ChartState"].config)) === null || _a === void 0 ? void 0 : _a.token;
        const tokenizedReq = req.clone({
            headers: req.headers.set('Authorization', `Token ${token}`)
        });
        return next.handle(tokenizedReq).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])((error) => {
            this.ngZone.run(() => this.router.navigateByUrl('login'));
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(error);
        }));
    }
}
InterceptorService.ɵfac = function InterceptorService_Factory(t) { return new (t || InterceptorService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_ngxs_store__WEBPACK_IMPORTED_MODULE_4__["Store"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"])); };
InterceptorService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: InterceptorService, factory: InterceptorService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "MhDQ":
/*!***************************************!*\
  !*** ./src/app/states/chart.state.ts ***!
  \***************************************/
/*! exports provided: ChartState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChartState", function() { return ChartState; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _models_influx_filter_type_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../models/influx-filter-type.enum */ "EtlH");
/* harmony import */ var _services_chart_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../services/chart.service */ "tC2j");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngxs/store */ "AcyG");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _ngxs_labs_emitter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngxs-labs/emitter */ "pNvL");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "fXoL");
var ChartState_1;







const AUTH_STATE_TOKEN = new _ngxs_store__WEBPACK_IMPORTED_MODULE_3__["StateToken"]('chart');
const DEFAULT_STATE = {
    data: { datasets: [], labels: [] },
    config: null,
    notifications: []
};
let ChartState = ChartState_1 = class ChartState {
    constructor(inj) {
        ChartState_1.resource = inj.get(_services_chart_service__WEBPACK_IMPORTED_MODULE_2__["ChartService"]);
    }
    static data(state) {
        var _a;
        return JSON.parse(JSON.stringify((_a = state.data) !== null && _a !== void 0 ? _a : null));
    }
    static config(state) {
        return state.config;
    }
    static notifications(state) {
        return state.notifications;
    }
    static onFetchData(ctx, action) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["defer"])(() => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const config = action.payload;
            ctx.patchState({
                config
            });
            const data = { datasets: [] };
            let query = `from(bucket: \"${config.configName}_buckets\")\n|>range(start: -${config.range})`;
            data.labels = yield this.getLabels(config, query);
            yield this.executeSequentially(config.defs, (def) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                if (def.show) {
                    switch (def.type) {
                        case _models_influx_filter_type_enum__WEBPACK_IMPORTED_MODULE_1__["INFLUX_FILTER_TYPE"].STOCK:
                            query = `${query}\n|>filter(fn: (r) => r._measurement == \"${config.measurement}\")`;
                            break;
                        case _models_influx_filter_type_enum__WEBPACK_IMPORTED_MODULE_1__["INFLUX_FILTER_TYPE"].EMA:
                            query = `${query}\n|>filter(fn: (r) => r._measurement == \"${config.measurement}\")\n|>exponentialMovingAverage(n: ${def.period})`;
                            break;
                        case _models_influx_filter_type_enum__WEBPACK_IMPORTED_MODULE_1__["INFLUX_FILTER_TYPE"].RSI:
                            query = `${query}\n|>filter(fn: (r) => r._measurement == \"${config.measurement}\")\n|>relativeStrengthIndex(n: ${def.period})`;
                            break;
                        case _models_influx_filter_type_enum__WEBPACK_IMPORTED_MODULE_1__["INFLUX_FILTER_TYPE"].MACD:
                            query = `${query}\n|>filter(fn: (r) => r._measurement == \"macd\" and r._field == \"${def.name}\")`;
                            break;
                        default:
                            break;
                    }
                    const queryResult = this.csvJSON(yield this.resource.fetchData(config.org, query).toPromise());
                    const dataValues = this.getData(queryResult);
                    data.datasets.push({
                        label: def.name,
                        data: dataValues.slice(0, dataValues.length - 2),
                        borderColor: def.color.toHexString(),
                        backgroundColor: 'rgba(0, 0, 0, 0)'
                    });
                }
            }));
            ctx.patchState({
                data,
                config,
                notifications: yield this.getNotifications(config)
            });
            return data;
        }));
    }
    static csvJSON(csv) {
        const lines = csv.split('\n');
        const result = [];
        const headers = lines[0].split(',');
        for (let i = 1; i < lines.length; i++) {
            const obj = {};
            const currentline = lines[i].split(',');
            for (let j = 0; j < headers.length; j++) {
                obj[headers[j]] = currentline[j];
            }
            result.push(obj);
        }
        return result;
    }
    static getLabels(config, query) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const data = this.csvJSON(yield this.resource
                .fetchData(config.org, `${query}\n|>filter(fn: (r) => r._measurement == \"${config.measurement}\")`)
                .toPromise());
            return data
                .map((item) => this.getTimeFromDate(new Date(item._time)))
                .slice(0, data.length - 2);
        });
    }
    static getNotifications(config) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const notifications = this.csvJSON(yield this.resource
                .fetchData(config.org, `from(bucket: \"_monitoring\")\n|>range(start: -100m)\n|>filter(fn: (r) => r._measurement == \"notifications\" and r._field == \"_message\")`)
                .toPromise());
            return notifications
                .slice(0, notifications.length - 2)
                .map((notification, i) => ({
                number: ++i,
                name: notification['check_type\r'].substring(0, notification['check_type\r'].length - 1),
                time: this.getTimeFromDate(new Date(notification._time)),
                description: notification._value,
                sent: notification._sent
            }));
        });
    }
    static getData(data) {
        return data.map((item) => Number(item._value));
    }
    static getTimeFromDate(date) {
        const h = date.getHours();
        const m = date.getMinutes();
        const s = date.getSeconds();
        return `${h < 10 ? '0' + h : h}:${m < 10 ? '0' + m : m}:${s < 10 ? '0' + s : s}`;
    }
    static executeSequentially(items, handler) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            for (const item of items) {
                yield handler(item);
            }
        });
    }
};
ChartState.ɵfac = function ChartState_Factory(t) { return new (t || ChartState)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["Injector"])); };
ChartState.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjectable"]({ token: ChartState, factory: ChartState.ɵfac, providedIn: 'root' });
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_3__["Selector"])()
], ChartState, "data", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_3__["Selector"])()
], ChartState, "config", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_3__["Selector"])()
], ChartState, "notifications", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngxs_labs_emitter__WEBPACK_IMPORTED_MODULE_5__["Receiver"])()
], ChartState, "onFetchData", null);
ChartState = ChartState_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_3__["State"])({
        name: AUTH_STATE_TOKEN,
        defaults: DEFAULT_STATE
    })
], ChartState);



/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");


class AppComponent {
    constructor() {
        this.title = 'influx-app';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _services_interceptor_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./services/interceptor.service */ "KRBT");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngxs/store */ "AcyG");
/* harmony import */ var _ngxs_labs_emitter__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngxs-labs/emitter */ "pNvL");
/* harmony import */ var _ngxs_storage_plugin__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngxs/storage-plugin */ "2jgc");
/* harmony import */ var _states_chart_state__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./states/chart.state */ "MhDQ");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ "fXoL");














class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineInjector"]({ providers: [
        { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HTTP_INTERCEPTORS"], useClass: _services_interceptor_service__WEBPACK_IMPORTED_MODULE_0__["InterceptorService"], multi: true }
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
            _ngxs_store__WEBPACK_IMPORTED_MODULE_6__["NgxsModule"].forRoot([_states_chart_state__WEBPACK_IMPORTED_MODULE_9__["ChartState"]], {
                developmentMode: false
            }),
            _ngxs_storage_plugin__WEBPACK_IMPORTED_MODULE_8__["NgxsStoragePluginModule"].forRoot({ key: [_states_chart_state__WEBPACK_IMPORTED_MODULE_9__["ChartState"]] }),
            _ngxs_labs_emitter__WEBPACK_IMPORTED_MODULE_7__["NgxsEmitPluginModule"].forRoot()
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"], _ngxs_store__WEBPACK_IMPORTED_MODULE_6__["ɵk"], _ngxs_storage_plugin__WEBPACK_IMPORTED_MODULE_8__["NgxsStoragePluginModule"], _ngxs_labs_emitter__WEBPACK_IMPORTED_MODULE_7__["NgxsEmitPluginModule"]] }); })();


/***/ }),

/***/ "tC2j":
/*!*******************************************!*\
  !*** ./src/app/services/chart.service.ts ***!
  \*******************************************/
/*! exports provided: ChartService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChartService", function() { return ChartService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngxs/store */ "AcyG");



class ChartService {
    constructor(http, store) {
        this.http = http;
        this.store = store;
        this.BASE_URL = 'http://localhost:8086/api/v2';
    }
    fetchData(org, query) {
        return this.http.post(`${this.BASE_URL}/query`, { query }, { params: { org }, responseType: 'text' });
    }
    getConfig() {
        return this.http.get('assets/config.json', { responseType: 'json' });
    }
}
ChartService.ɵfac = function ChartService_Factory(t) { return new (t || ChartService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_ngxs_store__WEBPACK_IMPORTED_MODULE_2__["Store"])); };
ChartService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ChartService, factory: ChartService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "tlTH":
/*!*****************************************************!*\
  !*** ./src/app/services/config-resolver.service.ts ***!
  \*****************************************************/
/*! exports provided: ConfigResolverService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigResolverService", function() { return ConfigResolverService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_material_components_color_picker__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular-material-components/color-picker */ "idWV");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _states_chart_state__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../states/chart.state */ "MhDQ");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _chart_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./chart.service */ "tC2j");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngxs/store */ "AcyG");







class ConfigResolverService {
    constructor(chartService, store) {
        this.chartService = chartService;
        this.store = store;
    }
    resolve() {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["defer"])(() => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            var _a, _b;
            const config = yield this.chartService.getConfig().toPromise();
            const storedConfig = this.store.selectSnapshot(_states_chart_state__WEBPACK_IMPORTED_MODULE_3__["ChartState"].config);
            config.defs = config.defs.map((def) => {
                var _a;
                const storedDef = storedConfig === null || storedConfig === void 0 ? void 0 : storedConfig.defs.find((item) => item.name === def.name);
                return Object.assign(Object.assign({}, def), { color: (storedDef === null || storedDef === void 0 ? void 0 : storedDef.color) ? new _angular_material_components_color_picker__WEBPACK_IMPORTED_MODULE_1__["Color"](storedDef.color.r, storedDef.color.g, storedDef.color.b)
                        : this.getRandomColor(), show: (_a = storedDef === null || storedDef === void 0 ? void 0 : storedDef.show) !== null && _a !== void 0 ? _a : true });
            });
            config.interval = (_a = storedConfig === null || storedConfig === void 0 ? void 0 : storedConfig.interval) !== null && _a !== void 0 ? _a : 5;
            config.range = (_b = storedConfig === null || storedConfig === void 0 ? void 0 : storedConfig.range) !== null && _b !== void 0 ? _b : '5m';
            return config;
        }));
    }
    getRandomColor() {
        return new _angular_material_components_color_picker__WEBPACK_IMPORTED_MODULE_1__["Color"](Math.round(Math.random() * 255), Math.round(Math.random() * 255), Math.round(Math.random() * 255));
    }
}
ConfigResolverService.ɵfac = function ConfigResolverService_Factory(t) { return new (t || ConfigResolverService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_chart_service__WEBPACK_IMPORTED_MODULE_5__["ChartService"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_ngxs_store__WEBPACK_IMPORTED_MODULE_6__["Store"])); };
ConfigResolverService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({ token: ConfigResolverService, factory: ConfigResolverService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _services_config_resolver_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./services/config-resolver.service */ "tlTH");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");




const routes = [
    {
        path: 'dashboard',
        loadChildren: () => __webpack_require__.e(/*! import() | pages-dashboard-dashboard-module */ "pages-dashboard-dashboard-module").then(__webpack_require__.bind(null, /*! ./pages/dashboard/dashboard.module */ "/2RN")).then((m) => m.DashboardModule),
        resolve: { config: _services_config_resolver_service__WEBPACK_IMPORTED_MODULE_0__["ConfigResolverService"] }
    },
    {
        path: '**',
        redirectTo: 'dashboard'
    }
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map