(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/api.interceptor.ts":
/*!************************************!*\
  !*** ./src/app/api.interceptor.ts ***!
  \************************************/
/*! exports provided: ApiInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiInterceptor", function() { return ApiInterceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/ngx-cookie-service.es5.js");
/* harmony import */ var rxjs_internal_operators_tap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/internal/operators/tap */ "./node_modules/rxjs/internal/operators/tap.js");
/* harmony import */ var rxjs_internal_operators_tap__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators_tap__WEBPACK_IMPORTED_MODULE_4__);





var ApiInterceptor = /** @class */ (function () {
    function ApiInterceptor(cookie) {
        this.cookie = cookie;
    }
    // intercept request and add token
    ApiInterceptor.prototype.intercept = function (request, next) {
        // modify request
        request = request.clone({
            setHeaders: {
                Authorization: 'Bearer ' + this.cookie.get('sid')
            },
            withCredentials: true
        });
        return next.handle(request)
            .pipe(Object(rxjs_internal_operators_tap__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (event) {
            if (event instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]) {
                // http response status code
            }
        }, function (error) {
            // http response status code
        }));
    };
    ApiInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__["CookieService"]])
    ], ApiInterceptor);
    return ApiInterceptor;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _pages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages */ "./src/app/pages/index.ts");
/* harmony import */ var _pages_public_init_layout_init_layout_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/public/init-layout/init-layout.component */ "./src/app/pages/public/init-layout/init-layout.component.ts");
/* harmony import */ var _pages_public_cleaners_cleaners_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/public/cleaners/cleaners.component */ "./src/app/pages/public/cleaners/cleaners.component.ts");
/* harmony import */ var _pages_public_cleaners_detail_cleaners_detail_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/public/cleaners-detail/cleaners-detail.component */ "./src/app/pages/public/cleaners-detail/cleaners-detail.component.ts");
/* harmony import */ var _pages_public_signup_signup_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/public/signup/signup.component */ "./src/app/pages/public/signup/signup.component.ts");
/* harmony import */ var _pages_orders_init_order_init_order_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/orders/init-order/init-order.component */ "./src/app/pages/orders/init-order/init-order.component.ts");
/* harmony import */ var _pages_orders_thanks_thanks_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/orders/thanks/thanks.component */ "./src/app/pages/orders/thanks/thanks.component.ts");










var routes = [
    { path: '', component: _pages_public_init_layout_init_layout_component__WEBPACK_IMPORTED_MODULE_4__["InitLayoutComponent"], children: [
            { path: '', component: _pages__WEBPACK_IMPORTED_MODULE_3__["IndexComponent"] },
            { path: 'signup', component: _pages_public_signup_signup_component__WEBPACK_IMPORTED_MODULE_7__["SignupComponent"] },
            { path: 'about-us', component: _pages__WEBPACK_IMPORTED_MODULE_3__["AboutUsComponent"] },
            { path: 'how-it-works', component: _pages__WEBPACK_IMPORTED_MODULE_3__["HowItWorksComponent"] },
            { path: 'blogs', component: _pages__WEBPACK_IMPORTED_MODULE_3__["BlogsComponent"] },
            { path: 'blog/:id', component: _pages__WEBPACK_IMPORTED_MODULE_3__["BlogComponent"] },
            { path: 'faq', component: _pages__WEBPACK_IMPORTED_MODULE_3__["FaqComponent"] },
            { path: 'cleaners', component: _pages_public_cleaners_cleaners_component__WEBPACK_IMPORTED_MODULE_5__["CleanersComponent"] },
            { path: 'cleaners/:id', component: _pages_public_cleaners_detail_cleaners_detail_component__WEBPACK_IMPORTED_MODULE_6__["CleanersDetailComponent"] },
            { path: 'contacts', component: _pages__WEBPACK_IMPORTED_MODULE_3__["ContactsComponent"] },
            { path: 'new-order/first-step', component: _pages__WEBPACK_IMPORTED_MODULE_3__["NewOrdersStepOneComponent"] },
            { path: 'new-order/second-step', component: _pages__WEBPACK_IMPORTED_MODULE_3__["NewOrdersStepTwoComponent"] },
            { path: 'new-order/third-step', component: _pages__WEBPACK_IMPORTED_MODULE_3__["NewOrdersStepThreeComponent"] },
            { path: 'offers', component: _pages__WEBPACK_IMPORTED_MODULE_3__["OffersComponent"] },
            { path: 'become-our-service', component: _pages__WEBPACK_IMPORTED_MODULE_3__["BecomeOurServiceComponent"] },
            { path: 'our-partners', component: _pages__WEBPACK_IMPORTED_MODULE_3__["OurPartnersComponent"] },
        ] },
    { path: 'orders', component: _pages_orders_init_order_init_order_component__WEBPACK_IMPORTED_MODULE_8__["InitOrderComponent"], children: [
            { path: '', component: _pages__WEBPACK_IMPORTED_MODULE_3__["NewOrdersStepOneComponent"] },
            { path: 'step2', component: _pages__WEBPACK_IMPORTED_MODULE_3__["NewOrdersStepTwoComponent"] },
            { path: 'step3', component: _pages__WEBPACK_IMPORTED_MODULE_3__["NewOrdersStepThreeComponent"] },
            { path: 'thanks', component: _pages_orders_thanks_thanks_component__WEBPACK_IMPORTED_MODULE_9__["ThanksComponent"] },
        ] },
    { path: 'profile', component: _pages__WEBPACK_IMPORTED_MODULE_3__["ProfileComponent"], children: [
            { path: 'my-profile', component: _pages__WEBPACK_IMPORTED_MODULE_3__["MyProfileComponent"] },
            { path: 'my-orders', component: _pages__WEBPACK_IMPORTED_MODULE_3__["MyOrdersComponent"] },
            { path: 'my-account', component: _pages__WEBPACK_IMPORTED_MODULE_3__["MyAccountComponent"] },
            { path: 'payment', component: _pages__WEBPACK_IMPORTED_MODULE_3__["PaymentComponent"] },
            { path: 'bonus', component: _pages__WEBPACK_IMPORTED_MODULE_3__["BonusComponent"] },
            { path: 'write-to-admin', component: _pages__WEBPACK_IMPORTED_MODULE_3__["WriteToAdminComponent"] },
            { path: '', redirectTo: 'my-profile', pathMatch: 'full' },
        ] },
    { path: 'delivery', component: _pages__WEBPACK_IMPORTED_MODULE_3__["DeliveryComponent"], children: [
            { path: 'dashboard', component: _pages__WEBPACK_IMPORTED_MODULE_3__["DeliveryDashboardComponent"] },
            { path: 'all-orders', component: _pages__WEBPACK_IMPORTED_MODULE_3__["DeliveryAllOrdersComponent"] },
            { path: 'service', component: _pages__WEBPACK_IMPORTED_MODULE_3__["DeliveryServiceComponent"] },
            { path: 'payment-system', component: _pages__WEBPACK_IMPORTED_MODULE_3__["DeliveryPaymentSystemComponent"] },
            { path: 'collaborators', component: _pages__WEBPACK_IMPORTED_MODULE_3__["CollaboratorsComponent"] },
            { path: 'add-collaborator', component: _pages__WEBPACK_IMPORTED_MODULE_3__["AddCollaboratorComponent"] },
            { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
        ] },
    { path: 'manager', component: _pages__WEBPACK_IMPORTED_MODULE_3__["ManagerComponent"], children: [
            { path: 'dashboard', component: _pages__WEBPACK_IMPORTED_MODULE_3__["ManagerDashboardComponent"] },
            { path: 'all-orders', component: _pages__WEBPACK_IMPORTED_MODULE_3__["ManagerAllOrdersComponent"] },
            { path: 'service', component: _pages__WEBPACK_IMPORTED_MODULE_3__["ManagerServiceComponent"] },
            { path: 'payment-system', component: _pages__WEBPACK_IMPORTED_MODULE_3__["ManagerPaymentSystemComponent"] },
            { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
        ] },
    { path: 'admin', component: _pages__WEBPACK_IMPORTED_MODULE_3__["AdminComponent"], children: [
            { path: 'login', component: _pages__WEBPACK_IMPORTED_MODULE_3__["AdminLoginComponent"] },
            { path: 'new-post', component: _pages__WEBPACK_IMPORTED_MODULE_3__["AdminNewPostComponent"] },
            { path: '', redirectTo: 'login', pathMatch: 'full' },
        ] },
    { path: '**', component: _pages__WEBPACK_IMPORTED_MODULE_3__["NotFoundComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'laundrwise';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _pages__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages */ "./src/app/pages/index.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _pages_public_header_app_header_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/public/header/app-header.component */ "./src/app/pages/public/header/app-header.component.ts");
/* harmony import */ var _pages_public_init_layout_init_layout_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/public/init-layout/init-layout.component */ "./src/app/pages/public/init-layout/init-layout.component.ts");
/* harmony import */ var _pages_public_footer_footer_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/public/footer/footer.component */ "./src/app/pages/public/footer/footer.component.ts");
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./material-module */ "./src/app/material-module.ts");
/* harmony import */ var _pages_public_cleaners_cleaners_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pages/public/cleaners/cleaners.component */ "./src/app/pages/public/cleaners/cleaners.component.ts");
/* harmony import */ var _pages_public_cleaners_detail_cleaners_detail_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./pages/public/cleaners-detail/cleaners-detail.component */ "./src/app/pages/public/cleaners-detail/cleaners-detail.component.ts");
/* harmony import */ var _pages_public_signup_signup_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./pages/public/signup/signup.component */ "./src/app/pages/public/signup/signup.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/ngx-cookie-service.es5.js");
/* harmony import */ var _api_interceptor__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./api.interceptor */ "./src/app/api.interceptor.ts");
/* harmony import */ var _pages_orders_init_order_init_order_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./pages/orders/init-order/init-order.component */ "./src/app/pages/orders/init-order/init-order.component.ts");
/* harmony import */ var _pages_orders_order_header_order_header_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./pages/orders/order-header/order-header.component */ "./src/app/pages/orders/order-header/order-header.component.ts");
/* harmony import */ var _pages_orders_thanks_thanks_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./pages/orders/thanks/thanks.component */ "./src/app/pages/orders/thanks/thanks.component.ts");






















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _pages__WEBPACK_IMPORTED_MODULE_5__["IndexComponent"],
                _pages__WEBPACK_IMPORTED_MODULE_5__["NotFoundComponent"],
                _pages__WEBPACK_IMPORTED_MODULE_5__["AboutUsComponent"],
                _pages__WEBPACK_IMPORTED_MODULE_5__["HowItWorksComponent"],
                _pages__WEBPACK_IMPORTED_MODULE_5__["BlogsComponent"],
                _pages__WEBPACK_IMPORTED_MODULE_5__["BlogComponent"],
                _pages__WEBPACK_IMPORTED_MODULE_5__["FaqComponent"],
                _pages__WEBPACK_IMPORTED_MODULE_5__["ContactsComponent"],
                _pages__WEBPACK_IMPORTED_MODULE_5__["BecomeOurServiceComponent"],
                _pages__WEBPACK_IMPORTED_MODULE_5__["OurPartnersComponent"],
                _pages__WEBPACK_IMPORTED_MODULE_5__["OffersComponent"],
                _pages__WEBPACK_IMPORTED_MODULE_5__["NewOrdersStepOneComponent"],
                _pages__WEBPACK_IMPORTED_MODULE_5__["NewOrdersStepTwoComponent"],
                _pages__WEBPACK_IMPORTED_MODULE_5__["NewOrdersStepThreeComponent"],
                _pages__WEBPACK_IMPORTED_MODULE_5__["ProfileComponent"],
                _pages__WEBPACK_IMPORTED_MODULE_5__["MyProfileComponent"],
                _pages__WEBPACK_IMPORTED_MODULE_5__["MyOrdersComponent"],
                _pages__WEBPACK_IMPORTED_MODULE_5__["MyAccountComponent"],
                _pages__WEBPACK_IMPORTED_MODULE_5__["PaymentComponent"],
                _pages__WEBPACK_IMPORTED_MODULE_5__["BonusComponent"],
                _pages__WEBPACK_IMPORTED_MODULE_5__["WriteToAdminComponent"],
                _pages__WEBPACK_IMPORTED_MODULE_5__["DeliveryComponent"],
                _pages__WEBPACK_IMPORTED_MODULE_5__["DeliveryDashboardComponent"],
                _pages__WEBPACK_IMPORTED_MODULE_5__["DeliveryAllOrdersComponent"],
                _pages__WEBPACK_IMPORTED_MODULE_5__["DeliveryServiceComponent"],
                _pages__WEBPACK_IMPORTED_MODULE_5__["DeliveryPaymentSystemComponent"],
                _pages__WEBPACK_IMPORTED_MODULE_5__["CollaboratorsComponent"],
                _pages__WEBPACK_IMPORTED_MODULE_5__["AddCollaboratorComponent"],
                _pages__WEBPACK_IMPORTED_MODULE_5__["ManagerComponent"],
                _pages__WEBPACK_IMPORTED_MODULE_5__["ManagerDashboardComponent"],
                _pages__WEBPACK_IMPORTED_MODULE_5__["ManagerAllOrdersComponent"],
                _pages__WEBPACK_IMPORTED_MODULE_5__["ManagerServiceComponent"],
                _pages__WEBPACK_IMPORTED_MODULE_5__["ManagerPaymentSystemComponent"],
                _pages__WEBPACK_IMPORTED_MODULE_5__["AdminComponent"],
                _pages__WEBPACK_IMPORTED_MODULE_5__["AdminLoginComponent"],
                _pages__WEBPACK_IMPORTED_MODULE_5__["AdminNewPostComponent"],
                _pages_public_header_app_header_component__WEBPACK_IMPORTED_MODULE_7__["AppHeaderComponent"],
                _pages_public_init_layout_init_layout_component__WEBPACK_IMPORTED_MODULE_8__["InitLayoutComponent"],
                _pages_public_footer_footer_component__WEBPACK_IMPORTED_MODULE_9__["FooterComponent"],
                _pages_public_cleaners_cleaners_component__WEBPACK_IMPORTED_MODULE_11__["CleanersComponent"],
                _pages_public_cleaners_detail_cleaners_detail_component__WEBPACK_IMPORTED_MODULE_12__["CleanersDetailComponent"],
                _pages_public_signup_signup_component__WEBPACK_IMPORTED_MODULE_13__["SignupComponent"],
                _pages_orders_init_order_init_order_component__WEBPACK_IMPORTED_MODULE_19__["InitOrderComponent"],
                _pages_orders_order_header_order_header_component__WEBPACK_IMPORTED_MODULE_20__["OrderHeaderComponent"],
                _pages_orders_thanks_thanks_component__WEBPACK_IMPORTED_MODULE_21__["ThanksComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
                _material_module__WEBPACK_IMPORTED_MODULE_10__["MaterialModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatNativeDateModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_15__["ReactiveFormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_15__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_16__["HttpClientModule"]
            ],
            providers: [ngx_cookie_service__WEBPACK_IMPORTED_MODULE_17__["CookieService"], { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_16__["HTTP_INTERCEPTORS"], useClass: _api_interceptor__WEBPACK_IMPORTED_MODULE_18__["ApiInterceptor"], multi: true }],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/auth.service.ts":
/*!*********************************!*\
  !*** ./src/app/auth.service.ts ***!
  \*********************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/ngx-cookie-service.es5.js");



var AuthService = /** @class */ (function () {
    function AuthService(cookieService) {
        this.cookieService = cookieService;
    }
    AuthService.prototype.isAuth = function () {
        if (this.cookieService.get('userId')) {
            return true;
        }
        else {
            return false;
        }
    };
    AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ngx_cookie_service__WEBPACK_IMPORTED_MODULE_2__["CookieService"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/crud.service.ts":
/*!*********************************!*\
  !*** ./src/app/crud.service.ts ***!
  \*********************************/
/*! exports provided: CrudService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CrudService", function() { return CrudService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment_prod__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../environments/environment.prod */ "./src/environments/environment.prod.ts");




var CrudService = /** @class */ (function () {
    function CrudService(http) {
        this.http = http;
        // private updat = new BehaviorSubject<any>(null);
        // public onUpDate = this.updat.asObservable();
        this.api = _environments_environment_prod__WEBPACK_IMPORTED_MODULE_3__["environment"].host;
    }
    CrudService.prototype.get = function (api, id) {
        var _this = this;
        if (id === void 0) { id = null; }
        return new Promise(function (resolve, reject) {
            id = id ? '/' + id : id;
            _this.http.get("" + _this.api + api + (id ? id : '')).subscribe(function (data) {
                resolve(data);
            }, function (error) {
                reject(error);
            });
        });
    };
    CrudService.prototype.post = function (api, obj) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.post("" + _this.api + api, obj).subscribe(function (data) {
                resolve(data);
            }, function (error) {
                reject(error);
            });
        });
    };
    CrudService.prototype.delete = function (api, id) {
        var _this = this;
        if (id === void 0) { id = null; }
        return new Promise(function (resolve, reject) {
            _this.http.delete("" + _this.api + api + "/" + (id ? id : '')).subscribe(function (data) {
                resolve(data);
            }, function (error) {
                reject(error);
            });
        });
    };
    CrudService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], CrudService);
    return CrudService;
}());



/***/ }),

/***/ "./src/app/material-module.ts":
/*!************************************!*\
  !*** ./src/app/material-module.ts ***!
  \************************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/a11y */ "./node_modules/@angular/cdk/esm5/a11y.es5.js");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "./node_modules/@angular/cdk/esm5/drag-drop.es5.js");
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/portal */ "./node_modules/@angular/cdk/esm5/portal.es5.js");
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/scrolling */ "./node_modules/@angular/cdk/esm5/scrolling.es5.js");
/* harmony import */ var _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/stepper */ "./node_modules/@angular/cdk/esm5/stepper.es5.js");
/* harmony import */ var _angular_cdk_table__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/cdk/table */ "./node_modules/@angular/cdk/esm5/table.es5.js");
/* harmony import */ var _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/cdk/tree */ "./node_modules/@angular/cdk/esm5/tree.es5.js");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/autocomplete */ "./node_modules/@angular/material/esm5/autocomplete.es5.js");
/* harmony import */ var _angular_material_badge__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/badge */ "./node_modules/@angular/material/esm5/badge.es5.js");
/* harmony import */ var _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/bottom-sheet */ "./node_modules/@angular/material/esm5/bottom-sheet.es5.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm5/button.es5.js");
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/button-toggle */ "./node_modules/@angular/material/esm5/button-toggle.es5.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm5/card.es5.js");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/checkbox */ "./node_modules/@angular/material/esm5/checkbox.es5.js");
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/chips */ "./node_modules/@angular/material/esm5/chips.es5.js");
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/stepper */ "./node_modules/@angular/material/esm5/stepper.es5.js");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/datepicker */ "./node_modules/@angular/material/esm5/datepicker.es5.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/divider */ "./node_modules/@angular/material/esm5/divider.es5.js");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/expansion */ "./node_modules/@angular/material/esm5/expansion.es5.js");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/grid-list */ "./node_modules/@angular/material/esm5/grid-list.es5.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm5/icon.es5.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm5/input.es5.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/esm5/list.es5.js");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/esm5/menu.es5.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/esm5/core.es5.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/esm5/paginator.es5.js");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/progress-bar */ "./node_modules/@angular/material/esm5/progress-bar.es5.js");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/material/progress-spinner */ "./node_modules/@angular/material/esm5/progress-spinner.es5.js");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/material/radio */ "./node_modules/@angular/material/esm5/radio.es5.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/esm5/select.es5.js");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/esm5/sidenav.es5.js");
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @angular/material/slider */ "./node_modules/@angular/material/esm5/slider.es5.js");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @angular/material/slide-toggle */ "./node_modules/@angular/material/esm5/slide-toggle.es5.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm5/snack-bar.es5.js");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/esm5/sort.es5.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm5/table.es5.js");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! @angular/material/tabs */ "./node_modules/@angular/material/esm5/tabs.es5.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/esm5/toolbar.es5.js");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! @angular/material/tooltip */ "./node_modules/@angular/material/esm5/tooltip.es5.js");
/* harmony import */ var _angular_material_tree__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! @angular/material/tree */ "./node_modules/@angular/material/esm5/tree.es5.js");











































var MaterialModule = /** @class */ (function () {
    function MaterialModule() {
    }
    MaterialModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            exports: [
                _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_2__["A11yModule"],
                _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_6__["CdkStepperModule"],
                _angular_cdk_table__WEBPACK_IMPORTED_MODULE_7__["CdkTableModule"],
                _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_8__["CdkTreeModule"],
                _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_3__["DragDropModule"],
                _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_9__["MatAutocompleteModule"],
                _angular_material_badge__WEBPACK_IMPORTED_MODULE_10__["MatBadgeModule"],
                _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_11__["MatBottomSheetModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_12__["MatButtonModule"],
                _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_13__["MatButtonToggleModule"],
                _angular_material_card__WEBPACK_IMPORTED_MODULE_14__["MatCardModule"],
                _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_15__["MatCheckboxModule"],
                _angular_material_chips__WEBPACK_IMPORTED_MODULE_16__["MatChipsModule"],
                _angular_material_stepper__WEBPACK_IMPORTED_MODULE_17__["MatStepperModule"],
                _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_18__["MatDatepickerModule"],
                _angular_material_dialog__WEBPACK_IMPORTED_MODULE_19__["MatDialogModule"],
                _angular_material_divider__WEBPACK_IMPORTED_MODULE_20__["MatDividerModule"],
                _angular_material_expansion__WEBPACK_IMPORTED_MODULE_21__["MatExpansionModule"],
                _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_22__["MatGridListModule"],
                _angular_material_icon__WEBPACK_IMPORTED_MODULE_23__["MatIconModule"],
                _angular_material_input__WEBPACK_IMPORTED_MODULE_24__["MatInputModule"],
                _angular_material_list__WEBPACK_IMPORTED_MODULE_25__["MatListModule"],
                _angular_material_menu__WEBPACK_IMPORTED_MODULE_26__["MatMenuModule"],
                _angular_material_core__WEBPACK_IMPORTED_MODULE_27__["MatNativeDateModule"],
                _angular_material_paginator__WEBPACK_IMPORTED_MODULE_28__["MatPaginatorModule"],
                _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_29__["MatProgressBarModule"],
                _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_30__["MatProgressSpinnerModule"],
                _angular_material_radio__WEBPACK_IMPORTED_MODULE_31__["MatRadioModule"],
                _angular_material_core__WEBPACK_IMPORTED_MODULE_27__["MatRippleModule"],
                _angular_material_select__WEBPACK_IMPORTED_MODULE_32__["MatSelectModule"],
                _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_33__["MatSidenavModule"],
                _angular_material_slider__WEBPACK_IMPORTED_MODULE_34__["MatSliderModule"],
                _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_35__["MatSlideToggleModule"],
                _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_36__["MatSnackBarModule"],
                _angular_material_sort__WEBPACK_IMPORTED_MODULE_37__["MatSortModule"],
                _angular_material_table__WEBPACK_IMPORTED_MODULE_38__["MatTableModule"],
                _angular_material_tabs__WEBPACK_IMPORTED_MODULE_39__["MatTabsModule"],
                _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_40__["MatToolbarModule"],
                _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_41__["MatTooltipModule"],
                _angular_material_tree__WEBPACK_IMPORTED_MODULE_42__["MatTreeModule"],
                _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_4__["PortalModule"],
                _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_5__["ScrollingModule"],
            ]
        })
    ], MaterialModule);
    return MaterialModule;
}());



/***/ }),

/***/ "./src/app/pages/admin/admin-login/admin-login.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/pages/admin/admin-login/admin-login.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2FkbWluL2FkbWluLWxvZ2luL2FkbWluLWxvZ2luLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/admin/admin-login/admin-login.component.html":
/*!********************************************************************!*\
  !*** ./src/app/pages/admin/admin-login/admin-login.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "login\n"

/***/ }),

/***/ "./src/app/pages/admin/admin-login/admin-login.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/pages/admin/admin-login/admin-login.component.ts ***!
  \******************************************************************/
/*! exports provided: AdminLoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminLoginComponent", function() { return AdminLoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AdminLoginComponent = /** @class */ (function () {
    function AdminLoginComponent() {
    }
    AdminLoginComponent.prototype.ngOnInit = function () {
    };
    AdminLoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-admin-login',
            template: __webpack_require__(/*! ./admin-login.component.html */ "./src/app/pages/admin/admin-login/admin-login.component.html"),
            styles: [__webpack_require__(/*! ./admin-login.component.css */ "./src/app/pages/admin/admin-login/admin-login.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AdminLoginComponent);
    return AdminLoginComponent;
}());



/***/ }),

/***/ "./src/app/pages/admin/admin-new-post/admin-new-post.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/pages/admin/admin-new-post/admin-new-post.component.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2FkbWluL2FkbWluLW5ldy1wb3N0L2FkbWluLW5ldy1wb3N0LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/admin/admin-new-post/admin-new-post.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/pages/admin/admin-new-post/admin-new-post.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/admin/admin-new-post/admin-new-post.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/pages/admin/admin-new-post/admin-new-post.component.ts ***!
  \************************************************************************/
/*! exports provided: AdminNewPostComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminNewPostComponent", function() { return AdminNewPostComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AdminNewPostComponent = /** @class */ (function () {
    function AdminNewPostComponent() {
    }
    AdminNewPostComponent.prototype.ngOnInit = function () {
    };
    AdminNewPostComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-admin-new-post',
            template: __webpack_require__(/*! ./admin-new-post.component.html */ "./src/app/pages/admin/admin-new-post/admin-new-post.component.html"),
            styles: [__webpack_require__(/*! ./admin-new-post.component.css */ "./src/app/pages/admin/admin-new-post/admin-new-post.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AdminNewPostComponent);
    return AdminNewPostComponent;
}());



/***/ }),

/***/ "./src/app/pages/admin/admin.component.css":
/*!*************************************************!*\
  !*** ./src/app/pages/admin/admin.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2FkbWluL2FkbWluLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/admin/admin.component.html":
/*!**************************************************!*\
  !*** ./src/app/pages/admin/admin.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "admin\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/pages/admin/admin.component.ts":
/*!************************************************!*\
  !*** ./src/app/pages/admin/admin.component.ts ***!
  \************************************************/
/*! exports provided: AdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminComponent", function() { return AdminComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AdminComponent = /** @class */ (function () {
    function AdminComponent() {
    }
    AdminComponent.prototype.ngOnInit = function () {
    };
    AdminComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-admin',
            template: __webpack_require__(/*! ./admin.component.html */ "./src/app/pages/admin/admin.component.html"),
            styles: [__webpack_require__(/*! ./admin.component.css */ "./src/app/pages/admin/admin.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AdminComponent);
    return AdminComponent;
}());



/***/ }),

/***/ "./src/app/pages/delivery/add-collaborator/add-collaborator.component.css":
/*!********************************************************************************!*\
  !*** ./src/app/pages/delivery/add-collaborator/add-collaborator.component.css ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2RlbGl2ZXJ5L2FkZC1jb2xsYWJvcmF0b3IvYWRkLWNvbGxhYm9yYXRvci5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/delivery/add-collaborator/add-collaborator.component.html":
/*!*********************************************************************************!*\
  !*** ./src/app/pages/delivery/add-collaborator/add-collaborator.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "add- collaborator\n"

/***/ }),

/***/ "./src/app/pages/delivery/add-collaborator/add-collaborator.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/pages/delivery/add-collaborator/add-collaborator.component.ts ***!
  \*******************************************************************************/
/*! exports provided: AddCollaboratorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddCollaboratorComponent", function() { return AddCollaboratorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AddCollaboratorComponent = /** @class */ (function () {
    function AddCollaboratorComponent() {
    }
    AddCollaboratorComponent.prototype.ngOnInit = function () {
    };
    AddCollaboratorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-add-collaborator',
            template: __webpack_require__(/*! ./add-collaborator.component.html */ "./src/app/pages/delivery/add-collaborator/add-collaborator.component.html"),
            styles: [__webpack_require__(/*! ./add-collaborator.component.css */ "./src/app/pages/delivery/add-collaborator/add-collaborator.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AddCollaboratorComponent);
    return AddCollaboratorComponent;
}());



/***/ }),

/***/ "./src/app/pages/delivery/all-orders/delivery-all-orders.component.css":
/*!*****************************************************************************!*\
  !*** ./src/app/pages/delivery/all-orders/delivery-all-orders.component.css ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2RlbGl2ZXJ5L2FsbC1vcmRlcnMvZGVsaXZlcnktYWxsLW9yZGVycy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/delivery/all-orders/delivery-all-orders.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/pages/delivery/all-orders/delivery-all-orders.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "all orders\n"

/***/ }),

/***/ "./src/app/pages/delivery/all-orders/delivery-all-orders.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/pages/delivery/all-orders/delivery-all-orders.component.ts ***!
  \****************************************************************************/
/*! exports provided: DeliveryAllOrdersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeliveryAllOrdersComponent", function() { return DeliveryAllOrdersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var DeliveryAllOrdersComponent = /** @class */ (function () {
    function DeliveryAllOrdersComponent() {
    }
    DeliveryAllOrdersComponent.prototype.ngOnInit = function () {
    };
    DeliveryAllOrdersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-delivery-all-orders',
            template: __webpack_require__(/*! ./delivery-all-orders.component.html */ "./src/app/pages/delivery/all-orders/delivery-all-orders.component.html"),
            styles: [__webpack_require__(/*! ./delivery-all-orders.component.css */ "./src/app/pages/delivery/all-orders/delivery-all-orders.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], DeliveryAllOrdersComponent);
    return DeliveryAllOrdersComponent;
}());



/***/ }),

/***/ "./src/app/pages/delivery/collaborators/collaborators.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/pages/delivery/collaborators/collaborators.component.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2RlbGl2ZXJ5L2NvbGxhYm9yYXRvcnMvY29sbGFib3JhdG9ycy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/delivery/collaborators/collaborators.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/pages/delivery/collaborators/collaborators.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "collaborators\n"

/***/ }),

/***/ "./src/app/pages/delivery/collaborators/collaborators.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/pages/delivery/collaborators/collaborators.component.ts ***!
  \*************************************************************************/
/*! exports provided: CollaboratorsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CollaboratorsComponent", function() { return CollaboratorsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CollaboratorsComponent = /** @class */ (function () {
    function CollaboratorsComponent() {
    }
    CollaboratorsComponent.prototype.ngOnInit = function () {
    };
    CollaboratorsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-collaborators',
            template: __webpack_require__(/*! ./collaborators.component.html */ "./src/app/pages/delivery/collaborators/collaborators.component.html"),
            styles: [__webpack_require__(/*! ./collaborators.component.css */ "./src/app/pages/delivery/collaborators/collaborators.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CollaboratorsComponent);
    return CollaboratorsComponent;
}());



/***/ }),

/***/ "./src/app/pages/delivery/dashboard/delivery-dashboard.component.css":
/*!***************************************************************************!*\
  !*** ./src/app/pages/delivery/dashboard/delivery-dashboard.component.css ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2RlbGl2ZXJ5L2Rhc2hib2FyZC9kZWxpdmVyeS1kYXNoYm9hcmQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/delivery/dashboard/delivery-dashboard.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/pages/delivery/dashboard/delivery-dashboard.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "dashboard\n"

/***/ }),

/***/ "./src/app/pages/delivery/dashboard/delivery-dashboard.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/pages/delivery/dashboard/delivery-dashboard.component.ts ***!
  \**************************************************************************/
/*! exports provided: DeliveryDashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeliveryDashboardComponent", function() { return DeliveryDashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var DeliveryDashboardComponent = /** @class */ (function () {
    function DeliveryDashboardComponent() {
    }
    DeliveryDashboardComponent.prototype.ngOnInit = function () {
    };
    DeliveryDashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-delivery-dashboard',
            template: __webpack_require__(/*! ./delivery-dashboard.component.html */ "./src/app/pages/delivery/dashboard/delivery-dashboard.component.html"),
            styles: [__webpack_require__(/*! ./delivery-dashboard.component.css */ "./src/app/pages/delivery/dashboard/delivery-dashboard.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], DeliveryDashboardComponent);
    return DeliveryDashboardComponent;
}());



/***/ }),

/***/ "./src/app/pages/delivery/delivery.component.css":
/*!*******************************************************!*\
  !*** ./src/app/pages/delivery/delivery.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2RlbGl2ZXJ5L2RlbGl2ZXJ5LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/delivery/delivery.component.html":
/*!********************************************************!*\
  !*** ./src/app/pages/delivery/delivery.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "delivery\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/pages/delivery/delivery.component.ts":
/*!******************************************************!*\
  !*** ./src/app/pages/delivery/delivery.component.ts ***!
  \******************************************************/
/*! exports provided: DeliveryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeliveryComponent", function() { return DeliveryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var DeliveryComponent = /** @class */ (function () {
    function DeliveryComponent() {
    }
    DeliveryComponent.prototype.ngOnInit = function () {
    };
    DeliveryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-delivery',
            template: __webpack_require__(/*! ./delivery.component.html */ "./src/app/pages/delivery/delivery.component.html"),
            styles: [__webpack_require__(/*! ./delivery.component.css */ "./src/app/pages/delivery/delivery.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], DeliveryComponent);
    return DeliveryComponent;
}());



/***/ }),

/***/ "./src/app/pages/delivery/payment-system/delivery-payment-system.component.css":
/*!*************************************************************************************!*\
  !*** ./src/app/pages/delivery/payment-system/delivery-payment-system.component.css ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2RlbGl2ZXJ5L3BheW1lbnQtc3lzdGVtL2RlbGl2ZXJ5LXBheW1lbnQtc3lzdGVtLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/delivery/payment-system/delivery-payment-system.component.html":
/*!**************************************************************************************!*\
  !*** ./src/app/pages/delivery/payment-system/delivery-payment-system.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "payment service\n"

/***/ }),

/***/ "./src/app/pages/delivery/payment-system/delivery-payment-system.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/pages/delivery/payment-system/delivery-payment-system.component.ts ***!
  \************************************************************************************/
/*! exports provided: DeliveryPaymentSystemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeliveryPaymentSystemComponent", function() { return DeliveryPaymentSystemComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var DeliveryPaymentSystemComponent = /** @class */ (function () {
    function DeliveryPaymentSystemComponent() {
    }
    DeliveryPaymentSystemComponent.prototype.ngOnInit = function () {
    };
    DeliveryPaymentSystemComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-delivery-payment-system',
            template: __webpack_require__(/*! ./delivery-payment-system.component.html */ "./src/app/pages/delivery/payment-system/delivery-payment-system.component.html"),
            styles: [__webpack_require__(/*! ./delivery-payment-system.component.css */ "./src/app/pages/delivery/payment-system/delivery-payment-system.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], DeliveryPaymentSystemComponent);
    return DeliveryPaymentSystemComponent;
}());



/***/ }),

/***/ "./src/app/pages/delivery/service/delivery-service.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/pages/delivery/service/delivery-service.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2RlbGl2ZXJ5L3NlcnZpY2UvZGVsaXZlcnktc2VydmljZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/delivery/service/delivery-service.component.html":
/*!************************************************************************!*\
  !*** ./src/app/pages/delivery/service/delivery-service.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "service\n"

/***/ }),

/***/ "./src/app/pages/delivery/service/delivery-service.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/pages/delivery/service/delivery-service.component.ts ***!
  \**********************************************************************/
/*! exports provided: DeliveryServiceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeliveryServiceComponent", function() { return DeliveryServiceComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var DeliveryServiceComponent = /** @class */ (function () {
    function DeliveryServiceComponent() {
    }
    DeliveryServiceComponent.prototype.ngOnInit = function () {
    };
    DeliveryServiceComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-delivery-service',
            template: __webpack_require__(/*! ./delivery-service.component.html */ "./src/app/pages/delivery/service/delivery-service.component.html"),
            styles: [__webpack_require__(/*! ./delivery-service.component.css */ "./src/app/pages/delivery/service/delivery-service.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], DeliveryServiceComponent);
    return DeliveryServiceComponent;
}());



/***/ }),

/***/ "./src/app/pages/index.ts":
/*!********************************!*\
  !*** ./src/app/pages/index.ts ***!
  \********************************/
/*! exports provided: AdminNewPostComponent, AdminLoginComponent, AdminComponent, ManagerPaymentSystemComponent, ManagerServiceComponent, ManagerAllOrdersComponent, ManagerDashboardComponent, ManagerComponent, AddCollaboratorComponent, CollaboratorsComponent, DeliveryPaymentSystemComponent, DeliveryServiceComponent, DeliveryAllOrdersComponent, DeliveryDashboardComponent, DeliveryComponent, WriteToAdminComponent, BonusComponent, PaymentComponent, MyAccountComponent, MyOrdersComponent, MyProfileComponent, ProfileComponent, NewOrdersStepThreeComponent, NewOrdersStepTwoComponent, NewOrdersStepOneComponent, OffersComponent, OurPartnersComponent, BecomeOurServiceComponent, ContactsComponent, FaqComponent, BlogComponent, BlogsComponent, HowItWorksComponent, AboutUsComponent, NotFoundComponent, IndexComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _admin_admin_new_post_admin_new_post_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./admin/admin-new-post/admin-new-post.component */ "./src/app/pages/admin/admin-new-post/admin-new-post.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AdminNewPostComponent", function() { return _admin_admin_new_post_admin_new_post_component__WEBPACK_IMPORTED_MODULE_0__["AdminNewPostComponent"]; });

/* harmony import */ var _admin_admin_login_admin_login_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./admin/admin-login/admin-login.component */ "./src/app/pages/admin/admin-login/admin-login.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AdminLoginComponent", function() { return _admin_admin_login_admin_login_component__WEBPACK_IMPORTED_MODULE_1__["AdminLoginComponent"]; });

/* harmony import */ var _admin_admin_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./admin/admin.component */ "./src/app/pages/admin/admin.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AdminComponent", function() { return _admin_admin_component__WEBPACK_IMPORTED_MODULE_2__["AdminComponent"]; });

/* harmony import */ var _manager_payment_system_manager_payment_system_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./manager/payment-system/manager-payment-system.component */ "./src/app/pages/manager/payment-system/manager-payment-system.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ManagerPaymentSystemComponent", function() { return _manager_payment_system_manager_payment_system_component__WEBPACK_IMPORTED_MODULE_3__["ManagerPaymentSystemComponent"]; });

/* harmony import */ var _manager_service_manager_service_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./manager/service/manager-service.component */ "./src/app/pages/manager/service/manager-service.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ManagerServiceComponent", function() { return _manager_service_manager_service_component__WEBPACK_IMPORTED_MODULE_4__["ManagerServiceComponent"]; });

/* harmony import */ var _manager_all_orders_manager_all_orders_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./manager/all-orders/manager-all-orders.component */ "./src/app/pages/manager/all-orders/manager-all-orders.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ManagerAllOrdersComponent", function() { return _manager_all_orders_manager_all_orders_component__WEBPACK_IMPORTED_MODULE_5__["ManagerAllOrdersComponent"]; });

/* harmony import */ var _manager_dashboard_manager_dashboard_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./manager/dashboard/manager-dashboard.component */ "./src/app/pages/manager/dashboard/manager-dashboard.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ManagerDashboardComponent", function() { return _manager_dashboard_manager_dashboard_component__WEBPACK_IMPORTED_MODULE_6__["ManagerDashboardComponent"]; });

/* harmony import */ var _manager_manager_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./manager/manager.component */ "./src/app/pages/manager/manager.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ManagerComponent", function() { return _manager_manager_component__WEBPACK_IMPORTED_MODULE_7__["ManagerComponent"]; });

/* harmony import */ var _delivery_add_collaborator_add_collaborator_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./delivery/add-collaborator/add-collaborator.component */ "./src/app/pages/delivery/add-collaborator/add-collaborator.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AddCollaboratorComponent", function() { return _delivery_add_collaborator_add_collaborator_component__WEBPACK_IMPORTED_MODULE_8__["AddCollaboratorComponent"]; });

/* harmony import */ var _delivery_collaborators_collaborators_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./delivery/collaborators/collaborators.component */ "./src/app/pages/delivery/collaborators/collaborators.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CollaboratorsComponent", function() { return _delivery_collaborators_collaborators_component__WEBPACK_IMPORTED_MODULE_9__["CollaboratorsComponent"]; });

/* harmony import */ var _delivery_payment_system_delivery_payment_system_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./delivery/payment-system/delivery-payment-system.component */ "./src/app/pages/delivery/payment-system/delivery-payment-system.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DeliveryPaymentSystemComponent", function() { return _delivery_payment_system_delivery_payment_system_component__WEBPACK_IMPORTED_MODULE_10__["DeliveryPaymentSystemComponent"]; });

/* harmony import */ var _delivery_service_delivery_service_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./delivery/service/delivery-service.component */ "./src/app/pages/delivery/service/delivery-service.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DeliveryServiceComponent", function() { return _delivery_service_delivery_service_component__WEBPACK_IMPORTED_MODULE_11__["DeliveryServiceComponent"]; });

/* harmony import */ var _delivery_all_orders_delivery_all_orders_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./delivery/all-orders/delivery-all-orders.component */ "./src/app/pages/delivery/all-orders/delivery-all-orders.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DeliveryAllOrdersComponent", function() { return _delivery_all_orders_delivery_all_orders_component__WEBPACK_IMPORTED_MODULE_12__["DeliveryAllOrdersComponent"]; });

/* harmony import */ var _delivery_dashboard_delivery_dashboard_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./delivery/dashboard/delivery-dashboard.component */ "./src/app/pages/delivery/dashboard/delivery-dashboard.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DeliveryDashboardComponent", function() { return _delivery_dashboard_delivery_dashboard_component__WEBPACK_IMPORTED_MODULE_13__["DeliveryDashboardComponent"]; });

/* harmony import */ var _delivery_delivery_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./delivery/delivery.component */ "./src/app/pages/delivery/delivery.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DeliveryComponent", function() { return _delivery_delivery_component__WEBPACK_IMPORTED_MODULE_14__["DeliveryComponent"]; });

/* harmony import */ var _profile_write_to_admin_write_to_admin_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./profile/write-to-admin/write-to-admin.component */ "./src/app/pages/profile/write-to-admin/write-to-admin.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WriteToAdminComponent", function() { return _profile_write_to_admin_write_to_admin_component__WEBPACK_IMPORTED_MODULE_15__["WriteToAdminComponent"]; });

/* harmony import */ var _profile_bonus_bonus_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./profile/bonus/bonus.component */ "./src/app/pages/profile/bonus/bonus.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BonusComponent", function() { return _profile_bonus_bonus_component__WEBPACK_IMPORTED_MODULE_16__["BonusComponent"]; });

/* harmony import */ var _profile_payment_payment_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./profile/payment/payment.component */ "./src/app/pages/profile/payment/payment.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PaymentComponent", function() { return _profile_payment_payment_component__WEBPACK_IMPORTED_MODULE_17__["PaymentComponent"]; });

/* harmony import */ var _profile_my_account_my_account_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./profile/my-account/my-account.component */ "./src/app/pages/profile/my-account/my-account.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MyAccountComponent", function() { return _profile_my_account_my_account_component__WEBPACK_IMPORTED_MODULE_18__["MyAccountComponent"]; });

/* harmony import */ var _profile_my_orders_my_orders_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./profile/my-orders/my-orders.component */ "./src/app/pages/profile/my-orders/my-orders.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MyOrdersComponent", function() { return _profile_my_orders_my_orders_component__WEBPACK_IMPORTED_MODULE_19__["MyOrdersComponent"]; });

/* harmony import */ var _profile_my_profile_my_profile_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./profile/my-profile/my-profile.component */ "./src/app/pages/profile/my-profile/my-profile.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MyProfileComponent", function() { return _profile_my_profile_my_profile_component__WEBPACK_IMPORTED_MODULE_20__["MyProfileComponent"]; });

/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/pages/profile/profile.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return _profile_profile_component__WEBPACK_IMPORTED_MODULE_21__["ProfileComponent"]; });

/* harmony import */ var _orders_new_orders_step_three_new_orders_step_three_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./orders/new-orders-step-three/new-orders-step-three.component */ "./src/app/pages/orders/new-orders-step-three/new-orders-step-three.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NewOrdersStepThreeComponent", function() { return _orders_new_orders_step_three_new_orders_step_three_component__WEBPACK_IMPORTED_MODULE_22__["NewOrdersStepThreeComponent"]; });

/* harmony import */ var _orders_new_orders_step_two_new_orders_step_two_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./orders/new-orders-step-two/new-orders-step-two.component */ "./src/app/pages/orders/new-orders-step-two/new-orders-step-two.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NewOrdersStepTwoComponent", function() { return _orders_new_orders_step_two_new_orders_step_two_component__WEBPACK_IMPORTED_MODULE_23__["NewOrdersStepTwoComponent"]; });

/* harmony import */ var _orders_new_orders_step_one_new_orders_step_one_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./orders/new-orders-step-one/new-orders-step-one.component */ "./src/app/pages/orders/new-orders-step-one/new-orders-step-one.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NewOrdersStepOneComponent", function() { return _orders_new_orders_step_one_new_orders_step_one_component__WEBPACK_IMPORTED_MODULE_24__["NewOrdersStepOneComponent"]; });

/* harmony import */ var _public_offers_offers_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./public/offers/offers.component */ "./src/app/pages/public/offers/offers.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "OffersComponent", function() { return _public_offers_offers_component__WEBPACK_IMPORTED_MODULE_25__["OffersComponent"]; });

/* harmony import */ var _public_our_partners_our_partners_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./public/our-partners/our-partners.component */ "./src/app/pages/public/our-partners/our-partners.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "OurPartnersComponent", function() { return _public_our_partners_our_partners_component__WEBPACK_IMPORTED_MODULE_26__["OurPartnersComponent"]; });

/* harmony import */ var _public_become_our_service_become_our_service_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./public/become-our-service/become-our-service.component */ "./src/app/pages/public/become-our-service/become-our-service.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BecomeOurServiceComponent", function() { return _public_become_our_service_become_our_service_component__WEBPACK_IMPORTED_MODULE_27__["BecomeOurServiceComponent"]; });

/* harmony import */ var _public_contacts_contacts_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./public/contacts/contacts.component */ "./src/app/pages/public/contacts/contacts.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ContactsComponent", function() { return _public_contacts_contacts_component__WEBPACK_IMPORTED_MODULE_28__["ContactsComponent"]; });

/* harmony import */ var _public_faq_faq_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./public/faq/faq.component */ "./src/app/pages/public/faq/faq.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FaqComponent", function() { return _public_faq_faq_component__WEBPACK_IMPORTED_MODULE_29__["FaqComponent"]; });

/* harmony import */ var _public_blog_blog_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./public/blog/blog.component */ "./src/app/pages/public/blog/blog.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BlogComponent", function() { return _public_blog_blog_component__WEBPACK_IMPORTED_MODULE_30__["BlogComponent"]; });

/* harmony import */ var _public_blogs_blogs_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./public/blogs/blogs.component */ "./src/app/pages/public/blogs/blogs.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BlogsComponent", function() { return _public_blogs_blogs_component__WEBPACK_IMPORTED_MODULE_31__["BlogsComponent"]; });

/* harmony import */ var _public_how_it_works_how_it_works_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./public/how-it-works/how-it-works.component */ "./src/app/pages/public/how-it-works/how-it-works.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HowItWorksComponent", function() { return _public_how_it_works_how_it_works_component__WEBPACK_IMPORTED_MODULE_32__["HowItWorksComponent"]; });

/* harmony import */ var _public_about_us_about_us_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./public/about-us/about-us.component */ "./src/app/pages/public/about-us/about-us.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AboutUsComponent", function() { return _public_about_us_about_us_component__WEBPACK_IMPORTED_MODULE_33__["AboutUsComponent"]; });

/* harmony import */ var _public_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./public/not-found/not-found.component */ "./src/app/pages/public/not-found/not-found.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NotFoundComponent", function() { return _public_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_34__["NotFoundComponent"]; });

/* harmony import */ var _public_index_index_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./public/index/index.component */ "./src/app/pages/public/index/index.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IndexComponent", function() { return _public_index_index_component__WEBPACK_IMPORTED_MODULE_35__["IndexComponent"]; });







































/***/ }),

/***/ "./src/app/pages/manager/all-orders/manager-all-orders.component.css":
/*!***************************************************************************!*\
  !*** ./src/app/pages/manager/all-orders/manager-all-orders.component.css ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL21hbmFnZXIvYWxsLW9yZGVycy9tYW5hZ2VyLWFsbC1vcmRlcnMuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/manager/all-orders/manager-all-orders.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/pages/manager/all-orders/manager-all-orders.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/manager/all-orders/manager-all-orders.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/pages/manager/all-orders/manager-all-orders.component.ts ***!
  \**************************************************************************/
/*! exports provided: ManagerAllOrdersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManagerAllOrdersComponent", function() { return ManagerAllOrdersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ManagerAllOrdersComponent = /** @class */ (function () {
    function ManagerAllOrdersComponent() {
    }
    ManagerAllOrdersComponent.prototype.ngOnInit = function () {
    };
    ManagerAllOrdersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-manager-all-orders',
            template: __webpack_require__(/*! ./manager-all-orders.component.html */ "./src/app/pages/manager/all-orders/manager-all-orders.component.html"),
            styles: [__webpack_require__(/*! ./manager-all-orders.component.css */ "./src/app/pages/manager/all-orders/manager-all-orders.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ManagerAllOrdersComponent);
    return ManagerAllOrdersComponent;
}());



/***/ }),

/***/ "./src/app/pages/manager/dashboard/manager-dashboard.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/pages/manager/dashboard/manager-dashboard.component.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL21hbmFnZXIvZGFzaGJvYXJkL21hbmFnZXItZGFzaGJvYXJkLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/manager/dashboard/manager-dashboard.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/pages/manager/dashboard/manager-dashboard.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/manager/dashboard/manager-dashboard.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/pages/manager/dashboard/manager-dashboard.component.ts ***!
  \************************************************************************/
/*! exports provided: ManagerDashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManagerDashboardComponent", function() { return ManagerDashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ManagerDashboardComponent = /** @class */ (function () {
    function ManagerDashboardComponent() {
    }
    ManagerDashboardComponent.prototype.ngOnInit = function () {
    };
    ManagerDashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-manager-dashboard',
            template: __webpack_require__(/*! ./manager-dashboard.component.html */ "./src/app/pages/manager/dashboard/manager-dashboard.component.html"),
            styles: [__webpack_require__(/*! ./manager-dashboard.component.css */ "./src/app/pages/manager/dashboard/manager-dashboard.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ManagerDashboardComponent);
    return ManagerDashboardComponent;
}());



/***/ }),

/***/ "./src/app/pages/manager/manager.component.css":
/*!*****************************************************!*\
  !*** ./src/app/pages/manager/manager.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL21hbmFnZXIvbWFuYWdlci5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/manager/manager.component.html":
/*!******************************************************!*\
  !*** ./src/app/pages/manager/manager.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "manager\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/pages/manager/manager.component.ts":
/*!****************************************************!*\
  !*** ./src/app/pages/manager/manager.component.ts ***!
  \****************************************************/
/*! exports provided: ManagerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManagerComponent", function() { return ManagerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ManagerComponent = /** @class */ (function () {
    function ManagerComponent() {
    }
    ManagerComponent.prototype.ngOnInit = function () {
    };
    ManagerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-manager',
            template: __webpack_require__(/*! ./manager.component.html */ "./src/app/pages/manager/manager.component.html"),
            styles: [__webpack_require__(/*! ./manager.component.css */ "./src/app/pages/manager/manager.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ManagerComponent);
    return ManagerComponent;
}());



/***/ }),

/***/ "./src/app/pages/manager/payment-system/manager-payment-system.component.css":
/*!***********************************************************************************!*\
  !*** ./src/app/pages/manager/payment-system/manager-payment-system.component.css ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL21hbmFnZXIvcGF5bWVudC1zeXN0ZW0vbWFuYWdlci1wYXltZW50LXN5c3RlbS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/manager/payment-system/manager-payment-system.component.html":
/*!************************************************************************************!*\
  !*** ./src/app/pages/manager/payment-system/manager-payment-system.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/manager/payment-system/manager-payment-system.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/pages/manager/payment-system/manager-payment-system.component.ts ***!
  \**********************************************************************************/
/*! exports provided: ManagerPaymentSystemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManagerPaymentSystemComponent", function() { return ManagerPaymentSystemComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ManagerPaymentSystemComponent = /** @class */ (function () {
    function ManagerPaymentSystemComponent() {
    }
    ManagerPaymentSystemComponent.prototype.ngOnInit = function () {
    };
    ManagerPaymentSystemComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-manager-payment-system',
            template: __webpack_require__(/*! ./manager-payment-system.component.html */ "./src/app/pages/manager/payment-system/manager-payment-system.component.html"),
            styles: [__webpack_require__(/*! ./manager-payment-system.component.css */ "./src/app/pages/manager/payment-system/manager-payment-system.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ManagerPaymentSystemComponent);
    return ManagerPaymentSystemComponent;
}());



/***/ }),

/***/ "./src/app/pages/manager/service/manager-service.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/pages/manager/service/manager-service.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL21hbmFnZXIvc2VydmljZS9tYW5hZ2VyLXNlcnZpY2UuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/manager/service/manager-service.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/pages/manager/service/manager-service.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/manager/service/manager-service.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/pages/manager/service/manager-service.component.ts ***!
  \********************************************************************/
/*! exports provided: ManagerServiceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManagerServiceComponent", function() { return ManagerServiceComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ManagerServiceComponent = /** @class */ (function () {
    function ManagerServiceComponent() {
    }
    ManagerServiceComponent.prototype.ngOnInit = function () {
    };
    ManagerServiceComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-manager-service',
            template: __webpack_require__(/*! ./manager-service.component.html */ "./src/app/pages/manager/service/manager-service.component.html"),
            styles: [__webpack_require__(/*! ./manager-service.component.css */ "./src/app/pages/manager/service/manager-service.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ManagerServiceComponent);
    return ManagerServiceComponent;
}());



/***/ }),

/***/ "./src/app/pages/orders/init-order/init-order.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/pages/orders/init-order/init-order.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-order-header></app-order-header>\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/pages/orders/init-order/init-order.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/pages/orders/init-order/init-order.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL29yZGVycy9pbml0LW9yZGVyL2luaXQtb3JkZXIuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/orders/init-order/init-order.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/pages/orders/init-order/init-order.component.ts ***!
  \*****************************************************************/
/*! exports provided: InitOrderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InitOrderComponent", function() { return InitOrderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var InitOrderComponent = /** @class */ (function () {
    function InitOrderComponent() {
    }
    InitOrderComponent.prototype.ngOnInit = function () {
    };
    InitOrderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-init-order',
            template: __webpack_require__(/*! ./init-order.component.html */ "./src/app/pages/orders/init-order/init-order.component.html"),
            styles: [__webpack_require__(/*! ./init-order.component.scss */ "./src/app/pages/orders/init-order/init-order.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], InitOrderComponent);
    return InitOrderComponent;
}());



/***/ }),

/***/ "./src/app/pages/orders/new-orders-step-one/new-orders-step-one.component.css":
/*!************************************************************************************!*\
  !*** ./src/app/pages/orders/new-orders-step-one/new-orders-step-one.component.css ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL29yZGVycy9uZXctb3JkZXJzLXN0ZXAtb25lL25ldy1vcmRlcnMtc3RlcC1vbmUuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/orders/new-orders-step-one/new-orders-step-one.component.html":
/*!*************************************************************************************!*\
  !*** ./src/app/pages/orders/new-orders-step-one/new-orders-step-one.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"order-list\">\n    <div class=\"order-list-container\">\n        <div class=\"order-list__box\">\n            <a href=\"#\" class=\"order-list__box-item active\">\n                <svg width=\"63\" class=\"icon\" height=\"73\" viewBox=\"0 0 63 73\" xmlns=\"http://www.w3.org/2000/svg\">\n                    <path d=\"M62.9962 54.854C62.3167 40.9047 54.1017 15.4666 51.6004 8.00236C51.1515 6.66322 49.8848 5.76387 48.4491 5.76387H42.4523L38.1319 0.586531C38.1291 0.583783 38.1263 0.581034 38.1235 0.577736C38.1218 0.575537 38.1201 0.573338 38.1184 0.571689C38.0916 0.540354 38.0625 0.511218 38.0322 0.483732C38.0205 0.472738 38.0082 0.463392 37.9959 0.453497C37.9729 0.433707 37.9488 0.415016 37.9242 0.397975C37.9097 0.38753 37.8951 0.378184 37.88 0.368289C37.8537 0.351797 37.8268 0.336955 37.7994 0.322662C37.7865 0.316065 37.7742 0.308919 37.7608 0.302872C37.721 0.284181 37.6796 0.267689 37.6376 0.254495C37.6264 0.250647 37.6152 0.248449 37.604 0.24515C37.571 0.235805 37.5374 0.227559 37.5033 0.220962C37.4882 0.218213 37.4736 0.216015 37.4585 0.213816C37.4255 0.208868 37.3925 0.20557 37.3589 0.203921C37.3455 0.203371 37.3326 0.202271 37.3192 0.202271C37.3136 0.202271 37.308 0.201172 37.3024 0.201172H25.6983C25.6927 0.201172 25.6871 0.202271 25.6821 0.202271C25.6681 0.202271 25.6541 0.203371 25.6401 0.20447C25.6076 0.206119 25.5751 0.208868 25.5432 0.213816C25.527 0.216015 25.5113 0.218213 25.4957 0.221512C25.4632 0.227559 25.4313 0.235255 25.3994 0.2446C25.3865 0.247899 25.3742 0.250647 25.3619 0.254495C25.3205 0.268239 25.2796 0.284181 25.2404 0.302322C25.2259 0.308919 25.2125 0.317165 25.1979 0.324311C25.1722 0.338054 25.1464 0.352347 25.1218 0.367739C25.1061 0.377635 25.0904 0.388079 25.0748 0.398524C25.0513 0.415566 25.0283 0.433707 25.0054 0.452398C24.993 0.462842 24.9796 0.472738 24.9673 0.484282C24.9371 0.511218 24.9085 0.540354 24.8817 0.571689C24.88 0.573338 24.8789 0.575537 24.8772 0.577736C24.8744 0.581034 24.871 0.583783 24.8682 0.586531L20.5478 5.76387H14.5509C13.1147 5.76387 11.8486 6.66322 11.3997 8.00236C11.0163 9.1469 10.4034 10.9989 9.66405 13.3204C9.48718 13.8762 9.8023 14.4666 10.3676 14.6403C10.9329 14.8135 11.5346 14.5051 11.7115 13.9499C12.4475 11.6399 13.0565 9.79887 13.4377 8.66094C13.5961 8.18817 14.0433 7.87043 14.5509 7.87043H19.9696L19.8834 14.6887C19.8761 15.2753 20.1028 15.8283 20.5226 16.2455C20.9424 16.6628 21.5026 16.8926 22.0999 16.8926H22.6064C22.6154 16.8926 22.6394 16.8926 22.6607 16.9173C22.6825 16.942 22.6786 16.9651 22.6769 16.9745L22.3428 18.9969C22.242 19.6082 22.4122 20.2349 22.809 20.7165L30.4279 29.947V70.148C25.1055 70.131 19.922 68.6093 17.8538 67.9233C17.4867 67.8012 17.2062 67.4934 17.1229 67.1201C15.2411 58.6939 18.3178 32.8946 18.3492 32.6351C18.4158 32.0815 18.0324 31.5731 17.4744 31.4746C16.9152 31.3762 16.3756 31.7215 16.2419 32.2624L10.5551 55.2559C10.4331 55.7484 9.98813 56.092 9.47207 56.092H3.26032C2.95135 56.092 2.6631 55.9711 2.44984 55.7512C2.23995 55.5346 2.13192 55.252 2.14648 54.9546C2.59985 45.6422 6.56601 30.8458 9.81293 20.0727C9.98141 19.5148 9.65677 18.9288 9.08922 18.7633C8.52111 18.5984 7.92445 18.9167 7.75597 19.4746C4.47546 30.3587 0.467324 45.3316 0.00387746 54.854C-0.0392209 55.7325 0.278139 56.567 0.897187 57.2047C1.51064 57.8369 2.37148 58.1986 3.26032 58.1986H9.47151C10.9805 58.1986 12.283 57.1931 12.6395 55.7528L14.8711 46.7285C14.1507 56.8699 14.2034 63.8822 15.0273 67.5709C15.2707 68.6621 16.0907 69.562 17.1671 69.9188C19.3511 70.6439 24.8481 72.2551 30.527 72.2551C30.8505 72.2551 31.1757 72.2496 31.4998 72.2386C31.8244 72.2491 32.149 72.2551 32.4731 72.2551C38.1515 72.2551 43.649 70.6439 45.833 69.9193C46.9094 69.5626 47.7288 68.6627 47.9728 67.5714C48.3036 66.091 48.5118 64.0455 48.5919 61.4909L48.5986 61.2567C48.6159 60.6757 48.1497 60.1902 47.557 60.1738C46.9592 60.1562 46.4711 60.6152 46.4543 61.1968L46.4476 61.4282C46.3715 63.8509 46.18 65.7661 45.8772 67.1201C45.7927 67.4994 45.5196 67.7996 45.1468 67.9233C43.0787 68.6093 37.8957 70.131 32.5727 70.148V29.947L40.1916 20.7165C40.5885 20.2355 40.7586 19.6088 40.6579 18.9969L40.3237 16.9739C40.322 16.9651 40.3181 16.942 40.3394 16.9173C40.3612 16.8926 40.3853 16.8926 40.3942 16.8926H40.9008C41.498 16.8926 42.0577 16.6628 42.4781 16.2455C42.8973 15.8277 43.1245 15.2747 43.1173 14.6882L43.0305 7.87043H48.4497C48.9568 7.87043 49.4046 8.18817 49.563 8.66094C52.0431 16.0614 60.187 41.2708 60.8536 54.9552C60.8682 55.252 60.7601 55.5351 60.5502 55.7517C60.3364 55.9711 60.0487 56.0926 59.7398 56.0926H53.5286C53.0125 56.0926 52.567 55.7484 52.445 55.2559L46.7588 32.263C46.6245 31.7215 46.0832 31.3762 45.5263 31.4746C44.9683 31.5736 44.5843 32.0821 44.6515 32.6357C44.6655 32.7528 46.0675 44.4647 46.4095 54.6693C46.4291 55.2509 46.9284 55.7023 47.5167 55.6874C48.1088 55.6682 48.5728 55.1817 48.5533 54.6001C48.4665 51.9998 48.3109 49.3023 48.1273 46.7225L50.3606 55.7534C50.7171 57.1937 52.0196 58.1991 53.5286 58.1991H59.7398C60.628 58.1991 61.4895 57.8374 62.1029 57.2052C62.7214 56.5675 63.0387 55.7325 62.9962 54.854ZM30.4273 26.6013L24.4747 19.3894C24.4619 19.374 24.4568 19.3537 24.4602 19.3339L24.7938 17.3109C24.8979 16.6798 24.716 16.0388 24.294 15.5518C23.8725 15.0647 23.2568 14.7855 22.6058 14.7855H22.0993C22.092 14.7855 22.0696 14.7855 22.0484 14.7646C22.0277 14.7437 22.0277 14.7217 22.0277 14.7145L22.1234 7.19921L25.0188 3.72933L25.4755 6.5038L25.8936 9.0441C25.9916 9.63835 26.1265 10.2238 26.2899 10.7999C26.4091 11.2216 26.5457 11.6377 26.6996 12.0478C26.9957 12.8383 27.3523 13.6074 27.7737 14.349L30.4273 19.0112V26.6013ZM31.4998 16.5776L29.6465 13.321C29.271 12.6608 28.9547 11.9752 28.6933 11.271C28.5993 11.0171 28.5098 10.7614 28.4308 10.5025C28.2517 9.91597 28.1118 9.31731 28.0116 8.70821L27.5577 5.95243L26.9577 2.30773H36.0419L35.3971 6.22619L34.9885 8.70821C34.7209 10.3321 34.1707 11.884 33.353 13.321L31.4998 16.5776ZM40.9512 14.7646C40.9305 14.7855 40.9081 14.7855 40.9002 14.7855H40.3937C39.7427 14.7855 39.1276 15.0647 38.7056 15.5518C38.2835 16.0388 38.1016 16.6804 38.2057 17.3115L38.5399 19.3339C38.5433 19.3537 38.5377 19.374 38.5248 19.3894L32.5722 26.6013V19.0112L32.7323 18.7309L35.2264 14.3484C36.1656 12.6965 36.7981 10.9121 37.1065 9.04355L37.6348 5.83259L37.9813 3.72933L40.8767 7.19921L40.9719 14.7145C40.9719 14.7217 40.9719 14.7442 40.9512 14.7646Z\"/>\n                </svg>\n                <span class=\"title\">\n                    Tops\n                </span>\n            </a>\n            <a href=\"#\" class=\"order-list__box-item\">\n                <svg width=\"49\" class=\"icon\" height=\"73\" viewBox=\"0 0 49 73\" xmlns=\"http://www.w3.org/2000/svg\">\n                    <path d=\"M47.9112 36.0638C48.5123 36.0638 49 35.5916 49 35.0083V28.5292C49 27.0779 48.6042 25.6459 47.8551 24.3892L44.1106 18.1069C43.5526 17.1707 43.2577 16.1043 43.2577 15.0229V2.31488C43.2577 1.14945 42.2795 0.201172 41.0773 0.201172H35.5301C34.3284 0.201172 33.3502 1.14945 33.3502 2.31488V7.96663C33.3502 12.697 29.38 16.5457 24.5003 16.5457C19.6205 16.5457 15.6504 12.697 15.6504 7.96663V2.31488C15.6504 1.14945 14.6722 0.201172 13.4699 0.201172H7.92273C6.72051 0.201172 5.74229 1.14945 5.74229 2.31488V15.0235C5.74229 16.1048 5.44741 17.1707 4.8894 18.1075L1.14494 24.3898C0.395824 25.6464 0 27.0779 0 28.5292V71.1996C0 71.7829 0.487692 72.2551 1.0888 72.2551H47.9112C48.5123 72.2551 49 71.7829 49 71.1996V41.5759C49 40.9932 48.5123 40.5204 47.9112 40.5204C47.3101 40.5204 46.8224 40.9932 46.8224 41.5759V65.289H17.3868C16.7851 65.289 16.298 65.7617 16.298 66.3445C16.298 66.9272 16.7851 67.3999 17.3868 67.3999H46.8224V70.1442H2.1776V67.3999H10.5636C11.1647 67.3999 11.6524 66.9272 11.6524 66.3445C11.6524 65.7617 11.1647 65.289 10.5636 65.289H2.1776V28.5292C2.1776 27.4479 2.47249 26.3814 3.0305 25.4452L6.77495 19.1629C7.52407 17.9063 7.91989 16.4748 7.91989 15.0229L7.92273 2.31213L13.4728 2.31488V7.96663C13.4728 13.8614 18.4194 18.6566 24.4997 18.6566C30.5806 18.6566 35.5272 13.8614 35.5272 7.96663L35.5301 2.31213L41.0801 2.31488V15.0235C41.0801 16.4748 41.4759 17.9063 42.2251 19.1629L45.9695 25.4452C46.5275 26.3814 46.8224 27.4479 46.8224 28.5292V35.0089C46.8224 35.5916 47.3101 36.0638 47.9112 36.0638Z\"/>\n                </svg>\n                <span class=\"title\">\n                    Tops\n                </span>\n            </a>\n            <a href=\"#\" class=\"order-list__box-item\">\n                <svg width=\"78\" class=\"icon\" height=\"73\" viewBox=\"0 0 78 73\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n                    <path d=\"M77.3112 43.117L70.8988 27.8342C69.2572 23.922 67.6155 20.0099 65.9744 16.0971C65.3918 14.7095 64.8097 13.3212 64.227 11.9336C63.4635 10.1137 62.8436 9.31461 60.8852 8.48108C59.4994 7.89079 58.1142 7.30108 56.7284 6.71079C55.839 6.33223 54.9491 5.95309 54.0597 5.57453C53.4108 4.48844 52.7614 3.40177 52.1125 2.31568C51.8395 1.85837 51.5996 1.28791 51.2544 0.879025C50.4584 -0.0641601 49.6051 0.265984 48.3936 0.2689C44.2978 0.278233 31.9262 0.27065 29.8366 0.269483C28.936 0.2689 26.3748 -0.172652 26.1177 1.19692L23.5376 5.51504C22.5271 5.94551 21.5172 6.37539 20.5072 6.80528C19.0836 7.41191 17.66 8.01795 16.2364 8.62399C14.4931 9.36652 13.9566 10.2035 13.2238 11.9493L11.5644 15.9047L6.88878 27.0467C4.64139 32.4037 2.39341 37.7601 0.146027 43.1164C-0.212681 43.9715 0.107615 44.9416 0.907763 45.4234L6.83382 48.9919C7.13402 49.1734 7.47441 49.2655 7.81775 49.2655C8.0175 49.2655 8.21783 49.234 8.41225 49.171C8.94056 48.9984 9.36309 48.6076 9.57111 48.0983L18.1671 27.0951V70.4536C18.1671 71.4826 19.0151 72.3196 20.0569 72.3196H38.7292H57.4003C58.4428 72.3196 59.2908 71.4826 59.2908 70.4536V60.6981C59.2908 60.0798 58.7832 59.5787 58.1567 59.5787C57.5303 59.5787 57.0227 60.0798 57.0227 60.6981V70.0803H39.8633V10.6877L46.375 16.6973C46.7018 16.9989 47.1207 17.1605 47.5574 17.1605C47.6573 17.1605 47.759 17.1523 47.86 17.1348C48.4019 17.0421 48.8569 16.7119 49.1087 16.2295L53.5154 7.78113L60.8793 10.9169L57.0936 20.9443C57.0812 20.9764 57.0712 21.0085 57.0623 21.0411C57.0588 21.0534 57.0564 21.0662 57.0534 21.0785C57.0487 21.0995 57.0434 21.1199 57.0398 21.1409C57.0369 21.1549 57.0357 21.1689 57.0339 21.1829C57.031 21.2021 57.028 21.222 57.0263 21.2412C57.0251 21.2558 57.0251 21.2704 57.0245 21.2849C57.0239 21.3019 57.0221 21.3182 57.0221 21.3351V53.6834C57.0221 54.3017 57.5297 54.8027 58.1562 54.8027C58.7832 54.8027 59.2908 54.3017 59.2908 53.6834V27.0951L61.8922 33.4524C62.1268 34.0252 62.7874 34.3023 63.3689 34.0707C63.9493 33.8392 64.2299 33.187 63.9953 32.6137L59.3729 21.3188L60.6269 17.9975L62.3744 13.3691L75.0916 43.6787L69.8227 46.8518L66.6121 39.0066C66.3775 38.4332 65.7168 38.1561 65.1353 38.3877C64.555 38.6192 64.2743 39.2714 64.5089 39.8447L67.8862 48.0983C68.0948 48.6076 68.5173 48.9984 69.045 49.171C69.2394 49.234 69.4398 49.2655 69.6395 49.2655C69.9829 49.2655 70.3232 49.1734 70.6235 48.9919L76.5495 45.4234C77.3497 44.9416 77.67 43.971 77.3112 43.117ZM27.6926 2.96721C29.8732 4.23996 34.8473 7.14301 36.9121 8.34867L30.1486 14.5899L25.7673 6.19049L27.6926 2.96721ZM7.63515 46.8518L2.36564 43.6782L15.0835 13.3691L16.8304 17.9975L18.0843 21.3188L7.63515 46.8518ZM37.5946 70.0809H20.4352V21.3351C20.4352 21.3182 20.434 21.3019 20.4328 21.2849C20.4322 21.2704 20.4322 21.2558 20.431 21.2412C20.4292 21.222 20.4263 21.2021 20.4233 21.1829C20.4216 21.1689 20.4204 21.1543 20.418 21.1409C20.4139 21.1199 20.4092 21.0995 20.4038 21.0785C20.4009 21.0662 20.3991 21.0534 20.3956 21.0411C20.3861 21.0085 20.3761 20.9758 20.3642 20.9443L16.5786 10.9169L24.027 7.74497L28.4526 16.2295C28.7043 16.7119 29.1594 17.0421 29.7019 17.1348C29.8029 17.1523 29.904 17.1605 30.0044 17.1605C30.4411 17.1605 30.8601 16.9989 31.1863 16.6973L37.5946 10.7839V70.0809ZM38.7806 6.77787L31.4653 2.50758H46.096L38.7806 6.77787ZM47.4127 14.5899L40.6096 8.31134L49.8415 2.9223L51.7946 6.19049L47.4127 14.5899Z\" />\n                </svg>\n                <span class=\"title\">\n                    Shirt\n                </span>\n            </a>\n            <a href=\"#\" class=\"order-list__box-item\">\n                <svg width=\"43\" class=\"icon\" height=\"73\" viewBox=\"0 0 43 73\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n                    <path d=\"M39.7797 8.74449C39.7986 8.66561 39.8097 8.58343 39.8097 8.49907V1.95421C39.8097 0.9873 39.0132 0.201172 38.0336 0.201172H4.01667C3.03762 0.201172 2.24062 0.9873 2.24062 1.95421V8.49907C2.24062 8.58343 2.25227 8.66561 2.27114 8.74449L0.44292 58.2256C0.42183 58.8063 0.880828 59.2939 1.46915 59.3153C2.05691 59.335 2.55143 58.883 2.57307 58.3023L4.00834 19.4523C6.58473 18.4454 8.59167 16.3286 9.83768 13.2799C10.4399 11.8074 10.7379 10.4312 10.8817 9.55089H19.9595V20.9506L14.3333 69.902H2.1446L2.33719 64.6834C2.35884 64.1027 1.89928 63.6151 1.31097 63.5938C0.723203 63.5708 0.228684 64.026 0.207594 64.6067L0.00112741 70.1885C-0.0160781 70.6618 0.164302 71.1285 0.497312 71.4693C0.830322 71.81 1.29654 72.0056 1.77607 72.0056H14.6502C15.5543 72.0056 16.3131 71.3367 16.4146 70.4503L21.0251 30.3403L22.3189 41.5942C22.3855 42.1716 22.9144 42.5863 23.4977 42.5212C24.0827 42.4554 24.5029 41.9344 24.4363 41.357L22.0908 20.9506V18.1994H22.128C24.262 18.1994 25.9981 16.5269 25.9981 14.472V9.55089H31.1686C31.3124 10.4312 31.6104 11.8074 32.2126 13.2799C33.4586 16.3286 35.4661 18.4454 38.0425 19.4523L39.9062 69.902H27.7175L25.1733 47.7693C25.1073 47.1919 24.5784 46.7767 23.9945 46.8429C23.41 46.9081 22.9893 47.4291 23.0559 48.0065L25.6357 70.4498C25.7372 71.3367 26.4959 72.0056 27.4006 72.0056H40.2748C40.7543 72.0056 41.22 71.81 41.553 71.4693C41.886 71.1285 42.0669 70.6618 42.0492 70.189L39.7797 8.74449ZM4.09548 17.0895L4.3741 9.55089H8.71821C8.36078 11.4644 7.26573 15.3162 4.09548 17.0895ZM12.4646 7.44725H4.37188V2.30482H12.4646V7.44725ZM23.8668 14.4715C23.8668 15.3671 23.087 16.0952 22.128 16.0952H22.0908V9.55089H23.8668V14.4715ZM27.4544 7.44725H14.5958V2.30482H27.4544V7.44725ZM32.1077 7.44725H29.5857V2.30482H37.6784V7.44725H32.1077ZM33.3348 9.55089H37.6762L37.9548 17.0879C34.7995 15.3162 33.6973 11.4655 33.3348 9.55089Z\"/>\n                </svg>\n                <span class=\"title\">\n                    Trousers\n                </span>\n            </a>\n            <a href=\"#\" class=\"order-list__box-item\">\n                <svg width=\"45\" class=\"icon\" height=\"74\" viewBox=\"0 0 45 74\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n                    <path d=\"M44.2097 71.8084C44.2034 71.7407 43.5636 64.9422 41.5674 56.152C38.2832 41.6891 33.8578 32.7762 30.6574 27.7854V23.3819L34.3252 7.69417C34.3625 7.53484 34.3634 7.37138 34.3315 7.21433L34.3322 7.21418L33.0999 1.13171C32.992 0.598519 32.5178 0.214844 31.9669 0.214844H28.2696C27.6316 0.214844 27.1142 0.725415 27.1142 1.35534V7.18331C25.4148 7.90244 23.6377 9.13256 22.1569 11.2113C22.1458 11.2269 22.1086 11.2271 22.1072 11.2271C22.1056 11.2271 22.0685 11.2269 22.0574 11.2113C20.5768 9.13256 18.7999 7.90258 17.1005 7.18346V1.35534C17.1005 0.725558 16.5832 0.214844 15.945 0.214844H12.2478C11.6971 0.214844 11.2229 0.598519 11.1148 1.13157L9.88226 7.21404L9.88298 7.21418C9.85113 7.37124 9.85199 7.5347 9.88932 7.69403L13.5571 23.3819L13.5572 27.7853C10.3567 32.7761 5.93143 41.6889 2.64705 56.1518C0.650877 64.9422 0.0110949 71.7407 0.00475324 71.8082C-0.0246488 72.1275 0.0833021 72.4439 0.302232 72.6806C0.521162 72.9172 0.830748 73.0519 1.15547 73.0519H43.0592C43.3837 73.0519 43.6935 72.9172 43.9124 72.6806C44.1312 72.444 44.2391 72.1275 44.2097 71.8084ZM29.425 2.4957H31.0197L31.7741 6.2195C31.1238 6.22903 30.317 6.29163 29.4248 6.47187V2.4957H29.425ZM13.1949 2.4957H14.7895V6.47201C13.8975 6.29163 13.0905 6.22903 12.4404 6.21964L13.1949 2.4957ZM12.45 8.50349C14.2796 8.54389 17.7394 9.11535 20.1669 12.5232C20.6061 13.1397 21.3315 13.5079 22.1072 13.5079C22.8829 13.5079 23.608 13.1397 24.0473 12.5232C26.4914 9.09202 29.9388 8.52952 31.766 8.49709L28.5828 22.1115H15.6317L12.45 8.50349ZM28.3467 24.3925V26.9775H15.8682V24.3925H28.3467ZM2.44311 70.7712C3.08274 65.3954 6.14229 43.7972 15.3496 29.2585H17.063L14.8028 43.759C14.7058 44.3815 15.1383 44.9639 15.769 45.0596C15.8287 45.0686 15.8878 45.073 15.9461 45.073C16.5068 45.073 16.9988 44.6696 17.0866 44.1059L19.401 29.2585H20.9517V52.4478C20.9517 53.0776 21.469 53.5883 22.1072 53.5883C22.7452 53.5883 23.2626 53.0777 23.2626 52.4478V29.2585H24.8133L27.1274 44.1059C27.2152 44.6699 27.7074 45.073 28.2679 45.073C28.3263 45.073 28.3855 45.0686 28.445 45.0596C29.0757 44.9639 29.5084 44.3816 29.4113 43.759L27.1512 29.2585H28.8647C38.0663 43.7887 41.1301 65.3937 41.7711 70.7712H2.44311Z\" />\n                </svg>\n                <span class=\"title\">\n                    Dresses\n                </span>\n            </a>\n            <a href=\"#\" class=\"order-list__box-item\">\n                <svg width=\"72\" class=\"icon\" height=\"72\" viewBox=\"0 0 72 72\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n                    <path d=\"M71.7058 42.3334C70.7653 25.6434 67.6861 13.4705 62.5522 6.15249C62.5489 6.14761 62.5451 6.14382 62.5418 6.13894C62.5187 6.10803 62.4951 6.07821 62.4692 6.04948C62.4654 6.04568 62.4621 6.04134 62.4588 6.03755C62.4297 6.00664 62.3978 5.97736 62.3654 5.95025C62.3561 5.94266 62.3467 5.93561 62.3374 5.92857C62.3121 5.90905 62.2863 5.89007 62.2588 5.87272C62.2484 5.86621 62.238 5.85916 62.227 5.85266C62.1918 5.83205 62.1561 5.81308 62.1187 5.79627C62.1171 5.79519 62.1154 5.7941 62.1138 5.79356C62.0814 5.77946 62.0479 5.76645 62.0138 5.7556L45.3366 0.352062C44.0489 -0.0648884 42.6601 0.27019 41.7113 1.22608L36.0001 6.98531L30.2883 1.22608C29.3406 0.27019 27.9512 -0.0648884 26.6635 0.352062L21.8675 1.906C21.3138 2.08547 21.0122 2.67375 21.194 3.22029C21.3758 3.76682 21.9719 4.06449 22.5257 3.88502L27.3217 2.33163C27.8403 2.16409 28.3984 2.29855 28.7797 2.68297L34.9326 8.88734L34.9233 36.476H26.4707C25.55 36.476 24.7819 37.1564 24.6841 38.0592C24.0051 44.307 19.1635 48.3219 16.3711 50.1426V20.1412C16.3711 20.0187 16.3491 19.8967 16.3063 19.7812L11.6833 7.39792L16.3744 5.87814C16.9281 5.69922 17.2297 5.11039 17.0479 4.56385C16.8661 4.01732 16.27 3.71965 15.7162 3.89912L9.98631 5.7556C9.95225 5.76699 9.91874 5.77946 9.88632 5.79356C9.88358 5.79464 9.88138 5.79627 9.87863 5.79735C9.84237 5.81362 9.80721 5.8326 9.77315 5.85266C9.76217 5.85916 9.75118 5.86621 9.74019 5.87326C9.71327 5.89061 9.688 5.90905 9.66328 5.92802C9.65339 5.93561 9.6435 5.94266 9.63416 5.9508C9.60175 5.97791 9.57043 6.00664 9.54132 6.03755C9.53747 6.04189 9.53418 6.04622 9.53033 6.05056C9.50451 6.07875 9.48089 6.10858 9.45836 6.13894C9.45507 6.14382 9.45122 6.14761 9.44738 6.15249C4.31407 13.4705 1.2343 25.6434 0.294328 42.3334C-0.426445 55.1314 0.370691 66.4498 0.632191 69.614C0.707454 70.5271 1.49415 71.2428 2.42368 71.2428H8.99854C9.84347 71.2428 10.5835 70.6502 10.7576 69.8342L14.2604 53.4115V69.4687C14.2604 70.4469 15.0669 71.2428 16.0579 71.2428H55.9416C56.9327 71.2428 57.7392 70.4469 57.7392 69.4687V53.4115L61.242 69.8342C61.4161 70.6507 62.1561 71.2428 63.001 71.2428H69.5759C70.5054 71.2428 71.2921 70.5276 71.3674 69.614C71.6289 66.4498 72.4266 55.1314 71.7058 42.3334ZM14.2604 43.3001L8.74473 69.1597H2.71265C2.43357 65.6788 1.70841 54.7562 2.40171 42.4488C2.81099 35.1812 3.64988 28.6922 4.8953 23.1618C6.18687 17.427 7.92123 12.7022 10.0621 9.08036L14.2604 20.3272V43.3001ZM16.559 52.4882C24.7973 47.7233 26.4289 40.9551 26.7487 38.5586H34.8914V62.1089H16.559V52.4882ZM34.9118 69.1597H16.3711V64.1921H34.9134L34.9118 69.1597ZM55.629 69.1597H37.0884L37.0867 64.1921H43.2699C43.8528 64.1921 44.3252 63.7258 44.3252 63.1505C44.3252 62.5752 43.8528 62.1089 43.2699 62.1089H37.1087V38.5586H45.2514C45.5712 40.9551 47.2028 47.7233 55.4412 52.4882V62.1089H49.8359C49.2531 62.1089 48.7806 62.5752 48.7806 63.1505C48.7806 63.7258 49.2531 64.1921 49.8359 64.1921H55.629V69.1597ZM55.6939 19.7812C55.6505 19.8967 55.6285 20.0187 55.6285 20.1412V50.1562C48.6795 45.7308 47.5099 39.8425 47.316 38.0592C47.2182 37.1564 46.4502 36.476 45.5294 36.476H37.0768L37.0675 8.88734L43.2199 2.68297C43.6017 2.29801 44.1609 2.16409 44.6785 2.33163L60.3168 7.39792L55.6939 19.7812ZM69.2875 69.1597H63.2554L57.7392 43.3001V20.3272L61.938 9.08036C64.0783 12.7022 65.8133 17.427 67.1048 23.1618C68.3502 28.6922 69.1891 35.1818 69.5984 42.4488C70.2917 54.7562 69.566 65.6788 69.2875 69.1597Z\"/>\n                </svg>\n                <span class=\"title\">\n                    Outdoor\n                </span>\n            </a>\n            <a href=\"#\" class=\"order-list__box-item\">\n                <svg width=\"44\" class=\"icon\" height=\"74\" viewBox=\"0 0 44 74\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n                    <path d=\"M26.5303 13.5013C26.9426 13.0942 27.1833 12.5823 27.2581 12.0518H43.9622L42.6267 0.188477H1.3355L0 12.0518H16.7042C16.779 12.5823 17.0196 13.0942 17.4321 13.5013L18.9313 14.9811L12.097 61.9312L19.3668 72.182C19.9632 73.0232 20.9406 73.5255 21.9811 73.5255C23.0216 73.5255 23.999 73.0232 24.5954 72.182L31.8652 61.9312L25.0309 14.9811L26.5303 13.5013ZM41.5205 9.89485H26.5312C26.5309 9.89456 26.5306 9.89427 26.5303 9.89384L23.8084 7.20741C23.5895 6.99128 23.3395 6.8249 23.0738 6.70267V2.34545H40.6707L41.5205 9.89485ZM3.29148 2.34545H20.8885V6.70282C20.6227 6.82505 20.3727 6.99128 20.1536 7.20755L17.4319 9.89399C17.4316 9.89427 17.4313 9.89456 17.431 9.89485H2.4417L3.29148 2.34545ZM18.9774 11.4191L21.6989 8.73282C21.8545 8.57924 22.108 8.57924 22.2633 8.73282L24.9849 11.4191C25.1405 11.5727 25.1405 11.8226 24.9849 11.9762L22.2633 14.6625C22.1077 14.8161 21.8542 14.8161 21.6989 14.6625L18.9772 11.9762C18.8216 11.8226 18.8216 11.5727 18.9774 11.4191ZM22.8051 70.9451C22.617 71.2102 22.309 71.3685 21.9811 71.3685C21.6532 71.3685 21.3452 71.2102 21.1571 70.9451L14.383 61.3933L20.8898 16.693C21.2349 16.8515 21.6076 16.9336 21.9811 16.9336C22.3546 16.9336 22.7273 16.8515 23.0724 16.693L29.5792 61.3933L22.8051 70.9451Z\"/>\n                    <path d=\"M7.77661 5.58105H5.59131V7.73804H7.77661V5.58105Z\"/>\n                    <path d=\"M38.3708 5.58105H36.1855V7.73804H38.3708V5.58105Z\"/>\n                </svg>\n                <span class=\"title\">\n                    Tie\n                </span>\n            </a>\n            <a href=\"#\" class=\"order-list__box-item\">\n                <svg width=\"73\" class=\"icon\" height=\"74\" viewBox=\"0 0 73 74\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n                    <path d=\"M27.1237 32.6416C26.5251 32.6416 26.0396 33.1209 26.0396 33.7116V37.8491C26.0396 38.4399 26.5251 38.9192 27.1237 38.9192C27.7222 38.9192 28.2078 38.4399 28.2078 37.8491V33.7116C28.2078 33.1209 27.7222 32.6416 27.1237 32.6416Z\"/>\n                    <path d=\"M10.3566 13.5933H27.0731C27.6722 13.5933 28.1572 13.114 28.1572 12.5232C28.1572 11.9319 27.6722 11.4531 27.0731 11.4531H10.3566C9.75805 11.4531 9.27246 11.9319 9.27246 12.5232C9.27246 13.114 9.75805 13.5933 10.3566 13.5933Z\"/>\n                    <path d=\"M10.3566 18.5093H27.0731C27.6722 18.5093 28.1572 18.03 28.1572 17.4392C28.1572 16.8479 27.6722 16.3691 27.0731 16.3691H10.3566C9.75805 16.3691 9.27246 16.8479 9.27246 17.4392C9.27246 18.03 9.75805 18.5093 10.3566 18.5093Z\"/>\n                    <path d=\"M10.3566 52.9067H27.0731C27.6722 52.9067 28.1572 52.428 28.1572 51.8367C28.1572 51.2459 27.6722 50.7666 27.0731 50.7666H10.3566C9.75805 50.7666 9.27246 51.2459 9.27246 51.8367C9.27246 52.428 9.75805 52.9067 10.3566 52.9067Z\"/>\n                    <path d=\"M10.3566 57.8218H27.0731C27.6722 57.8218 28.1572 57.3425 28.1572 56.7517C28.1572 56.1604 27.6722 55.6816 27.0731 55.6816H10.3566C9.75805 55.6816 9.27246 56.1604 9.27246 56.7517C9.27246 57.3425 9.75805 57.8218 10.3566 57.8218Z\"/>\n                    <path d=\"M63.469 33.7116C63.469 33.1209 62.984 32.6416 62.3849 32.6416C61.7864 32.6416 61.3008 33.1209 61.3008 33.7116V37.8491C61.3008 38.4399 61.7864 38.9192 62.3849 38.9192C62.984 38.9192 63.469 38.4399 63.469 37.8491V33.7116Z\"/>\n                    <path d=\"M45.6178 13.5933H62.3344C62.9334 13.5933 63.4185 13.114 63.4185 12.5232C63.4185 11.9319 62.9334 11.4531 62.3344 11.4531H45.6178C45.0193 11.4531 44.5337 11.9319 44.5337 12.5232C44.5337 13.114 45.0193 13.5933 45.6178 13.5933Z\"/>\n                    <path d=\"M45.6178 18.5093H62.3344C62.9334 18.5093 63.4185 18.03 63.4185 17.4392C63.4185 16.8479 62.9334 16.3691 62.3344 16.3691H45.6178C45.0193 16.3691 44.5337 16.8479 44.5337 17.4392C44.5337 18.03 45.0193 18.5093 45.6178 18.5093Z\"/>\n                    <path d=\"M62.3349 50.7666H45.6178C45.0193 50.7666 44.5337 51.2459 44.5337 51.8367C44.5337 52.428 45.0193 52.9067 45.6178 52.9067H62.3344C62.9334 52.9067 63.4185 52.428 63.4185 51.8367C63.4185 51.2459 62.9334 50.7666 62.3349 50.7666Z\"/>\n                    <path d=\"M62.3349 55.6816H45.6178C45.0193 55.6816 44.5337 56.1604 44.5337 56.7517C44.5337 57.3425 45.0193 57.8218 45.6178 57.8218H62.3344C62.9334 57.8218 63.4185 57.3425 63.4185 56.7517C63.4185 56.1604 62.9334 55.6816 62.3349 55.6816Z\"/>\n                    <path d=\"M68.5085 0.214844H39.445C38.2174 0.214844 37.1119 0.739281 36.3457 1.57359C35.58 0.739281 34.4739 0.214844 33.2464 0.214844H4.18339C1.87685 0.214844 0 2.06737 0 4.34402V64.9313C0 67.208 1.87685 69.0605 4.18339 69.0605H4.4962V70.9938C4.4962 72.245 5.52779 73.2638 6.79597 73.2638H9.1409C10.4091 73.2638 11.4407 72.245 11.4407 70.9938V69.0605H25.9891V70.9938C25.9891 72.2456 27.0213 73.2638 28.2894 73.2638H30.6338C31.902 73.2638 32.9336 72.2456 32.9336 70.9938V69.0605H33.2469C34.4745 69.0605 35.58 68.5361 36.3457 67.7023C37.1119 68.5361 38.2174 69.0605 39.445 69.0605H39.7578V70.9938C39.7578 72.2456 40.7899 73.2638 42.0581 73.2638H44.4025C45.6706 73.2638 46.7022 72.2456 46.7022 70.9938V69.0605H61.2512V70.9938C61.2512 72.2456 62.2828 73.2638 63.551 73.2638H65.8954C67.1635 73.2638 68.1951 72.2456 68.1951 70.9938V69.0605H68.5085C70.815 69.0605 72.6919 67.2085 72.6919 64.9313V4.34402C72.6919 2.06737 70.815 0.214844 68.5085 0.214844V0.214844ZM9.27246 70.9938C9.27246 71.0652 9.21318 71.1237 9.1409 71.1237H6.79597C6.72369 71.1237 6.66441 71.0652 6.66441 70.9938V69.0605H9.27246V70.9938ZM30.7654 70.9938C30.7654 71.0652 30.7066 71.1237 30.6338 71.1237H28.2894C28.2166 71.1237 28.1573 71.0652 28.1573 70.9938V69.0605H30.7654V70.9938ZM33.2464 66.9204H4.18339C3.07219 66.9204 2.16821 66.0281 2.16821 64.9313V4.34402C2.16821 3.24722 3.07219 2.35495 4.18339 2.35495H33.2464C34.3576 2.35495 35.2616 3.24722 35.2616 4.34402V64.9313C35.2616 66.0281 34.3576 66.9204 33.2464 66.9204ZM44.534 70.9938C44.534 71.0652 44.4753 71.1237 44.4025 71.1237H42.0581C41.9853 71.1237 41.926 71.0652 41.926 70.9938V69.0605H44.534V70.9938ZM66.0275 70.9938C66.0275 71.0652 65.9682 71.1237 65.8959 71.1237H63.551C63.4782 71.1237 63.4194 71.0652 63.4194 70.9938V69.0605H66.0275V70.9938ZM70.5237 64.9313C70.5237 66.0281 69.6197 66.9204 68.5085 66.9204H39.445C38.3338 66.9204 37.4298 66.0281 37.4298 64.9313V4.34402C37.4298 3.24722 38.3338 2.35495 39.445 2.35495H68.5085C69.6197 2.35495 70.5237 3.24722 70.5237 4.34402V64.9313Z\"/>\n                    <path d=\"M30.8749 4.42773H6.55541C5.29401 4.42773 4.26807 5.44038 4.26807 6.68542V21.6739C4.26807 22.2647 4.75365 22.7439 5.35217 22.7439C5.95125 22.7439 6.43627 22.2647 6.43627 21.6739V6.68542C6.43627 6.62077 6.48991 6.56783 6.55541 6.56783H30.8749C30.9404 6.56783 30.9935 6.62077 30.9935 6.68542V62.5898C30.9935 62.6545 30.9404 62.7074 30.8749 62.7074H6.55541C6.48991 62.7074 6.43627 62.6545 6.43627 62.5898V25.9558C6.43627 25.3644 5.95125 24.8857 5.35217 24.8857C4.75365 24.8857 4.26807 25.3644 4.26807 25.9558V62.5898C4.26807 63.8349 5.29401 64.8475 6.55541 64.8475H30.8749C32.1357 64.8475 33.1617 63.8349 33.1617 62.5898V6.68542C33.1617 5.44038 32.1357 4.42773 30.8749 4.42773Z\"/>\n                    <path d=\"M66.1364 4.42773H41.817C40.5562 4.42773 39.5303 5.44038 39.5303 6.68542V62.5898C39.5303 63.8349 40.5562 64.8475 41.817 64.8475H66.1364C67.3973 64.8475 68.4232 63.8349 68.4232 62.5898V48.6402C68.4232 48.0495 67.9382 47.5702 67.3391 47.5702C66.7406 47.5702 66.255 48.0495 66.255 48.6402V62.5898C66.255 62.6545 66.2019 62.7074 66.1364 62.7074H41.817C41.7515 62.7074 41.6985 62.6545 41.6985 62.5898V6.68542C41.6985 6.62077 41.7515 6.56783 41.817 6.56783H66.1364C66.2019 6.56783 66.255 6.62077 66.255 6.68542V44.3483C66.255 44.9396 66.7406 45.4184 67.3391 45.4184C67.9382 45.4184 68.4232 44.9396 68.4232 44.3483V6.68542C68.4238 5.44038 67.3973 4.42773 66.1364 4.42773Z\"/>\n                </svg>\n                <span class=\"title\">\n                    Bussines\n                </span>\n            </a>\n            <a href=\"#\" class=\"order-list__box-item\">\n                <svg width=\"86\" class=\"icon\" height=\"74\" viewBox=\"0 0 86 74\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n                    <path d=\"M83.7275 42.2366H82.3084V38.0344C82.3047 35.2529 80.6338 32.7372 78.0511 31.6247V10.0199C78.0507 9.46312 77.7165 8.95956 77.1996 8.73685C77.7532 7.86104 78.048 6.85007 78.0511 5.81774C78.0511 2.72337 75.5096 0.214844 72.3746 0.214844C69.2396 0.214844 66.6982 2.72337 66.6982 5.81774C66.704 6.8042 66.9765 7.77122 67.4872 8.61919H17.6594C18.1701 7.77122 18.4426 6.8042 18.4484 5.81774C18.4484 2.72337 15.907 0.214844 12.772 0.214844C9.637 0.214844 7.09555 2.72337 7.09555 5.81774C7.09857 6.85007 7.39339 7.86104 7.94702 8.73685C7.43011 8.95956 7.09591 9.46312 7.09555 10.0199V31.6247C4.51277 32.7372 2.84195 35.2529 2.83822 38.0344V42.2366H1.41911C0.635406 42.2366 0 42.8637 0 43.6373V63.2474C0 64.021 0.635406 64.6481 1.41911 64.6481H2.83822V71.6518C2.83822 72.4253 3.47363 73.0525 4.25733 73.0525H9.93377C10.7175 73.0525 11.3529 72.4253 11.3529 71.6518V64.6481H73.7937V71.6518C73.7937 72.4253 74.4291 73.0525 75.2128 73.0525H80.8893C81.673 73.0525 82.3084 72.4253 82.3084 71.6518V64.6481H83.7275C84.5112 64.6481 85.1466 64.021 85.1466 63.2474V43.6373C85.1466 42.8637 84.5112 42.2366 83.7275 42.2366ZM72.3746 3.01629C73.9422 3.01629 75.2128 4.27046 75.2128 5.81774C75.2128 7.36501 73.9422 8.61919 72.3746 8.61919C70.807 8.61919 69.5364 7.36501 69.5364 5.81774C69.5364 4.27046 70.807 3.01629 72.3746 3.01629ZM12.772 3.01629C14.3396 3.01629 15.6102 4.27046 15.6102 5.81774C15.6102 7.36501 14.3396 8.61919 12.772 8.61919C11.2044 8.61919 9.93377 7.36501 9.93377 5.81774C9.93377 4.27046 11.2044 3.01629 12.772 3.01629ZM9.93377 11.4206H75.2128V31.0308H69.4995C70.4386 29.8256 70.9504 28.3491 70.9555 26.8286V24.0272C70.9509 20.1612 67.7767 17.0281 63.86 17.0235H52.5071C48.5903 17.0281 45.4161 20.1612 45.4115 24.0272V26.8286C45.4167 28.3491 45.9284 29.8256 46.8675 31.0308H38.2791C39.2182 29.8256 39.7299 28.3491 39.7351 26.8286V24.0272C39.7305 20.1612 36.5563 17.0281 32.6395 17.0235H21.2867C17.3699 17.0281 14.1957 20.1612 14.1911 24.0272V26.8286C14.1962 28.3491 14.708 29.8256 15.6471 31.0308H9.93377V11.4206ZM68.1173 24.0272V26.8286C68.1173 29.1494 66.2112 31.0308 63.86 31.0308H52.5071C50.1558 31.0308 48.2497 29.1494 48.2497 26.8286V24.0272C48.2497 21.7063 50.1558 19.825 52.5071 19.825H63.86C66.2112 19.825 68.1173 21.7063 68.1173 24.0272ZM36.8969 24.0272V26.8286C36.8969 29.1494 34.9908 31.0308 32.6395 31.0308H21.2867C18.9354 31.0308 17.0293 29.1494 17.0293 26.8286V24.0272C17.0293 21.7063 18.9354 19.825 21.2867 19.825H32.6395C34.9908 19.825 36.8969 21.7063 36.8969 24.0272ZM5.67644 38.0344C5.67644 35.7136 7.58248 33.8322 9.93377 33.8322H75.2128C77.5641 33.8322 79.4702 35.7136 79.4702 38.0344V42.2366H5.67644V38.0344ZM8.51466 70.251H5.67644V64.6481H8.51466V70.251ZM79.4702 70.251H76.6319V64.6481H79.4702V70.251ZM82.3084 61.8467H2.83822V45.038H82.3084V61.8467Z\"/>\n                    <path d=\"M12.7723 56.2441H7.09587C6.31216 56.2441 5.67676 56.8713 5.67676 57.6449C5.67676 58.4185 6.31216 59.0457 7.09587 59.0457H12.7723C13.556 59.0457 14.1914 58.4185 14.1914 57.6449C14.1914 56.8713 13.556 56.2441 12.7723 56.2441Z\"/>\n                    <path d=\"M78.051 56.2441H18.4484C17.6647 56.2441 17.0293 56.8713 17.0293 57.6449C17.0293 58.4185 17.6647 59.0457 18.4484 59.0457H78.051C78.8347 59.0457 79.4701 58.4185 79.4701 57.6449C79.4701 56.8713 78.8347 56.2441 78.051 56.2441Z\"/>\n                </svg>\n                <span class=\"title\">\n                    Bussines\n                </span>\n            </a>\n        </div>\n    </div>\n</div>\n\n<div class=\"cleaner\">\n    <div class=\"order-container\">\n        <div class=\"cleaner__box\">\n            <span>Cleaner name</span>\n            <div class=\"cleaner-select\">\n<!--                <img src=\"../assets/images/logo-cleaner.png\" class=\"logo-cleaner\" alt=\"\">-->\n                <span>Name Company</span>\n                <div class=\"arrow\">\n                    <svg width=\"12\" height=\"7\" viewBox=\"0 0 12 7\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n                        <path d=\"M6.23922 6.46572L11.9 0.8049C12.0333 0.671615 12.0333 0.457857 11.9 0.324573C11.7668 0.191288 11.553 0.191288 11.4197 0.324573L6.00031 5.74397L0.580918 0.324572C0.447634 0.191288 0.233876 0.191288 0.100592 0.324572C0.0352068 0.389957 -2.93413e-09 0.477975 -3.92431e-09 0.563479C-4.91449e-09 0.648982 0.0326919 0.737 0.100592 0.802385L5.76141 6.4632C5.89218 6.59649 6.10845 6.59649 6.23922 6.46572Z\" fill=\"#13AAFF\"/>\n                    </svg>\n                </div>\n                <div class=\"cleaner-list\">\n                    <ul>\n                        <li class=\"item-li\"><img src=\"../assets/images/logo-cleaner.png\" alt=\"\">Name Company</li>\n                        <li><img src=\"../app/images/logo-cleaner.png\" alt=\"\">Name Company</li>\n                        <li><img src=\"../app/images/logo-cleaner.png\" alt=\"\">Name Company</li>\n                    </ul>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n\n<div class=\"order\">\n    <div class=\"order-container\">\n        <div class=\"order__box\">\n            <div class=\"order__box-item\">\n                <div class=\"img\">\n                    <img src=\"../assets/images/order-item.png\" alt=\"order items\">\n                </div>\n                <div class=\"description\">\n                    <div class=\"name\">Order Name</div>\n                    <p class=\"describe\">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>\n                </div>\n                <div class=\"buttons\">\n                    <div class=\"counts\">\n                        <div class=\"counts__btn\">\n                            <img src=\"../assets/images/minus.svg\" alt=\"\">\n                        </div>\n                        <div class=\"count\">0</div>\n                        <div class=\"counts__btn\">\n                            <img src=\"../assets/images/plus.svg\" alt=\"\">\n                        </div>\n                    </div>\n                    <div class=\"price\">\n                        <div class=\"price__item\">209</div>\n                        <div class=\"price__usd\">$</div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"order__box-item\">\n                <div class=\"img\">\n                    <img src=\"../assets/images/order-item.png\" alt=\"order items\">\n                </div>\n                <div class=\"description\">\n                    <div class=\"name\">Order Name</div>\n                    <p class=\"describe\">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>\n                </div>\n                <div class=\"buttons\">\n                    <div class=\"counts\">\n                        <div class=\"counts__btn\">\n                            <img src=\"../assets/images/minus.svg\" alt=\"\">\n                        </div>\n                        <div class=\"count\">0</div>\n                        <div class=\"counts__btn\">\n                            <img src=\"../assets/images/plus.svg\" alt=\"\">\n                        </div>\n                    </div>\n                    <div class=\"price\">\n                        <div class=\"price__item\">209</div>\n                        <div class=\"price__usd\">$</div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"order__box-item\">\n                <div class=\"img\">\n                    <img src=\"../assets/images/order-item.png\" alt=\"order items\">\n                </div>\n                <div class=\"description\">\n                    <div class=\"name\">Order Name</div>\n                    <p class=\"describe\">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>\n                </div>\n                <div class=\"buttons\">\n                    <div class=\"counts\">\n                        <div class=\"counts__btn\">\n                            <img src=\"../assets/images/minus.svg\" alt=\"\">\n                        </div>\n                        <div class=\"count\">0</div>\n                        <div class=\"counts__btn\">\n                            <img src=\"../assets/images/plus.svg\" alt=\"\">\n                        </div>\n                    </div>\n                    <div class=\"price\">\n                        <div class=\"price__item\">209</div>\n                        <div class=\"price__usd\">$</div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n\n<div class=\"totalprice\">\n    <div class=\"order-container\">\n        <div class=\"totalprice__box\">\n            <div class=\"totalprice__box-result\">\n                Total: <span class=\"result\">209.46</span> $\n            </div>\n            <div class=\"totalprice__box-basket\">\n                <a [routerLink]=\"'step2'\" class=\"basket\">Your basket</a>\n            </div>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/pages/orders/new-orders-step-one/new-orders-step-one.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/pages/orders/new-orders-step-one/new-orders-step-one.component.ts ***!
  \***********************************************************************************/
/*! exports provided: NewOrdersStepOneComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewOrdersStepOneComponent", function() { return NewOrdersStepOneComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NewOrdersStepOneComponent = /** @class */ (function () {
    function NewOrdersStepOneComponent() {
    }
    NewOrdersStepOneComponent.prototype.ngOnInit = function () {
    };
    NewOrdersStepOneComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-new-orders-step-one',
            template: __webpack_require__(/*! ./new-orders-step-one.component.html */ "./src/app/pages/orders/new-orders-step-one/new-orders-step-one.component.html"),
            styles: [__webpack_require__(/*! ./new-orders-step-one.component.css */ "./src/app/pages/orders/new-orders-step-one/new-orders-step-one.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], NewOrdersStepOneComponent);
    return NewOrdersStepOneComponent;
}());



/***/ }),

/***/ "./src/app/pages/orders/new-orders-step-three/new-orders-step-three.component.css":
/*!****************************************************************************************!*\
  !*** ./src/app/pages/orders/new-orders-step-three/new-orders-step-three.component.css ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n.checkbox{\n    margin:2px 5px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvb3JkZXJzL25ldy1vcmRlcnMtc3RlcC10aHJlZS9uZXctb3JkZXJzLXN0ZXAtdGhyZWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7SUFDSSxjQUFjO0FBQ2xCIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvb3JkZXJzL25ldy1vcmRlcnMtc3RlcC10aHJlZS9uZXctb3JkZXJzLXN0ZXAtdGhyZWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLmNoZWNrYm94e1xuICAgIG1hcmdpbjoycHggNXB4O1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/pages/orders/new-orders-step-three/new-orders-step-three.component.html":
/*!*****************************************************************************************!*\
  !*** ./src/app/pages/orders/new-orders-step-three/new-orders-step-three.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"order-step\">\n    <div class=\"order-container\">\n        <div class=\"order-box\">\n            <div class=\"order-step__box boxleft\">\n                <div class=\"order-step__box-adress\">\n                    <div class=\"order-step__box-headline\">\n                        <div class=\"title\">\n                            Main\n                        </div>\n                    </div>\n                    <form action=\"\">\n                        <label for=\"name\">\n                            <span>First Name</span>\n                            <input type=\"text\" name=\"name\" id=\"name\" >\n                        </label>\n                        <label for=\"lastname\">\n                            <span>Last Name</span>\n                            <input type=\"text\" name=\"lastname\" id=\"lastname\" >\n                        </label>\n                        <label for=\"phone\">\n                            <span>Mobile</span>\n                            <input type=\"number\" name=\"phone\" id=\"phone\" >\n                        </label>\n                        <label for=\"mail\">\n                            <span>E-mail</span>\n                            <input type=\"email\" name=\"mail\" id=\"mail\">\n                        </label>\n                        <label for=\"password\">\n                            <span>Password</span>\n                            <input type=\"password\" name=\"password\" id=\"password\">\n                        </label>\n                    </form>\n                </div>\n            </div>\n            <div class=\"order-step__box boxright\">\n                <div class=\"order-step__box-payment\">\n                    <div class=\"order-step__box-headline\">\n                        <div class=\"title\">Payment Details</div>\n                        <div class=\"payment-logo\">\n                            <img src=\"../assets/images/card1.svg\" alt=\"\">\n                            <img src=\"../assets/images/card2.svg\" alt=\"\">\n                            <img src=\"../assets/images/card3.svg\" alt=\"\">\n                        </div>\n                    </div>\n                    <form action=\"\">\n                        <label for=\"card\" class=\"card\">\n                            <span>Cart number</span>\n                            <input type=\"text\" placeholder=\"Your card number\" name=\"card\" id=\"card\">\n                        </label>\n                        <label for=\"\" class=\"card-detail\">\n                            <span>Cart number</span>\n                            <input type=\"text\" class=\"month\" placeholder=\"Month\" name=\"month\" id=\"month\">\n                            <input type=\"text\" class=\"year\" placeholder=\"Year\" name=\"year\" id=\"year\">\n                            <input type=\"text\" class=\"ccv\" placeholder=\"CCV\" name=\"ccv\" id=\"ccv\">\n                        </label>\n                    </form>\n                    <div class=\"payment-description\">\n                        Phasellus ultrices nulla quis nibh. Quisque a lectus. Donec consectetuer ligula vulputate sem tristique cursus. Phasellus ultrices nulla quis nibh. Quisque a lectus. Donec consectetuer ligula.\n                        <a href=\"#\">Payment FAQ</a>\n                    </div>\n                    <div class=\"payment-access\">\n                        <div class=\"payment-access__item\">\n                            <mat-checkbox class=\"checkbox\"></mat-checkbox>\n                            <p>Phasellus ultrices nulla quis nibh. Quisque a lectus. Donec consectetuer</p>\n                        </div>\n                        <div class=\"payment-access__item\">\n                            <mat-checkbox class=\"checkbox\"></mat-checkbox>\n                            <p>I accept the <a href=\"#\">Laundrapp Terms & Conditions</a></p>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n\n<div class=\"totalprice\">\n    <div class=\"order-container\">\n        <div class=\"totalprice__box reverse\">\n            <div class=\"totalprice__box-back\">\n                <a [routerLink]=\"'step2'\" class=\"back\">Back</a>\n            </div>\n            <div class=\"totalprice__box-result-step3\">\n                Total: <span class=\"result\">209.46</span> $\n            </div>\n            <div class=\"totalprice__box-basket\">\n                <a routerLink=\"'thanks'\" class=\"basket\">Complete Booking</a>\n            </div>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/pages/orders/new-orders-step-three/new-orders-step-three.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/pages/orders/new-orders-step-three/new-orders-step-three.component.ts ***!
  \***************************************************************************************/
/*! exports provided: NewOrdersStepThreeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewOrdersStepThreeComponent", function() { return NewOrdersStepThreeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NewOrdersStepThreeComponent = /** @class */ (function () {
    function NewOrdersStepThreeComponent() {
    }
    NewOrdersStepThreeComponent.prototype.ngOnInit = function () {
    };
    NewOrdersStepThreeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-new-orders-step-three',
            template: __webpack_require__(/*! ./new-orders-step-three.component.html */ "./src/app/pages/orders/new-orders-step-three/new-orders-step-three.component.html"),
            styles: [__webpack_require__(/*! ./new-orders-step-three.component.css */ "./src/app/pages/orders/new-orders-step-three/new-orders-step-three.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], NewOrdersStepThreeComponent);
    return NewOrdersStepThreeComponent;
}());



/***/ }),

/***/ "./src/app/pages/orders/new-orders-step-two/new-orders-step-two.component.css":
/*!************************************************************************************!*\
  !*** ./src/app/pages/orders/new-orders-step-two/new-orders-step-two.component.css ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL29yZGVycy9uZXctb3JkZXJzLXN0ZXAtdHdvL25ldy1vcmRlcnMtc3RlcC10d28uY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/orders/new-orders-step-two/new-orders-step-two.component.html":
/*!*************************************************************************************!*\
  !*** ./src/app/pages/orders/new-orders-step-two/new-orders-step-two.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"order-step\">\n    <div class=\"order-container\">\n        <div class=\"order-box\">\n            <div class=\"order-step__box boxleft\">\n                <div class=\"order-step__box-adress\">\n                    <div class=\"order-step__box-headline\">\n                        <div class=\"title\">\n                            Address\n                        </div>\n                    </div>\n                    <form action=\"\">\n                        <label for=\"line1\">\n                            <span>Line 1</span>\n                            <input type=\"text\" name=\"line1\" id=\"line1\" >\n                        </label>\n                        <label for=\"line2\">\n                            <span>Line 2</span>\n                            <input type=\"text\" name=\"line2\" id=\"line2\" >\n                        </label>\n                        <label for=\"postcode\">\n                            <span>Postcode</span>\n                            <input type=\"number\" name=\"postcode\" id=\"postcode\" >\n                        </label>\n                        <label for=\"instructions\">\n                            <span>Delivery Instructions</span>\n                            <textarea type=\"text\" name=\"instructions\" id=\"instructions\" ></textarea>\n                        </label>\n                    </form>\n                </div>\n                <div class=\"order-step__box-time\">\n                    <div class=\"order-step__box-headline\">\n                        <div class=\"title\">\n                            Time\n                        </div>\n                    </div>\n\n                </div>\n            </div>\n            <div class=\"order-step__box boxright\">\n                <div class=\"order-step__box-item\">\n                    <div class=\"order-step__box-headline\">\n                        <div class=\"title\">items</div>\n                        <div class=\"cleaner-logo\">\n<!--                            <img src=\"../assets/images/logo-cleaner.png\" alt=\"\">-->\n                            Name company\n                        </div>\n                    </div>\n                    <div class=\"paragraph\">\n                        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.\n                    </div>\n                    <div class=\"elements\">\n                        <div class=\"elements__item\">\n                            <img src=\"../assets/images/order-item.png\" alt=\"\">\n                            <div class=\"count\">2x</div>\n                            <div class=\"title\">Jacket</div>\n                            <div class=\"price\">29 $</div>\n                            <img src=\"../assets/images/cancel.svg\" class=\"cancel\" alt=\"\">\n                        </div>\n                        <div class=\"elements__item\">\n                            <img src=\"../assets/images/order-item.png\" alt=\"\">\n                            <div class=\"count\">2x</div>\n                            <div class=\"title\">Jacket</div>\n                            <div class=\"price\">29 $</div>\n                            <img src=\"../assets/images/cancel.svg\" class=\"cancel\" alt=\"\">\n                        </div>\n                        <div class=\"elements__item\">\n                            <img src=\"../assets/images/order-item.png\" alt=\"\">\n                            <div class=\"count\">2x</div>\n                            <div class=\"title\">Jacket</div>\n                            <div class=\"price\">29 $</div>\n                            <img src=\"../assets/images/cancel.svg\" class=\"cancel\" alt=\"\">\n                        </div>\n                    </div>\n                    <form action=\"\">\n                        <label for=\"\">\n                            <textarea name=\"\" placeholder=\"Clearning instructions (optional)\"></textarea>\n                        </label>\n                    </form>\n                </div>\n                <div class=\"order-add-btn\">\n                    <a [routerLink]=\"'orders'\" class=\"order-add\">+ add</a>\n                </div>\n                <div class=\"order-step__box-checkout\">\n                    <div class=\"order-step__box-headline\">\n                        <div class=\"title\">\n                            Checkout\n                        </div>\n                    </div>\n                    <div class=\"total\">\n                        <div class=\"total-title\">\n                            Total\n                        </div>\n                        <div class=\"total-price\">\n                            209 $\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n\n<div class=\"totalprice\">\n    <div class=\"order-container\">\n        <div class=\"totalprice__box reverse\">\n            <div class=\"totalprice__box-back\">\n                <a [routerLink]=\"'orders'\" class=\"back\">Back</a>\n            </div>\n            <div class=\"totalprice__box-basket\">\n                <a [routerLink]=\"'../step3'\" class=\"basket\">Plase order</a>\n            </div>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/pages/orders/new-orders-step-two/new-orders-step-two.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/pages/orders/new-orders-step-two/new-orders-step-two.component.ts ***!
  \***********************************************************************************/
/*! exports provided: NewOrdersStepTwoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewOrdersStepTwoComponent", function() { return NewOrdersStepTwoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NewOrdersStepTwoComponent = /** @class */ (function () {
    function NewOrdersStepTwoComponent() {
    }
    NewOrdersStepTwoComponent.prototype.ngOnInit = function () {
    };
    NewOrdersStepTwoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-new-orders-step-two',
            template: __webpack_require__(/*! ./new-orders-step-two.component.html */ "./src/app/pages/orders/new-orders-step-two/new-orders-step-two.component.html"),
            styles: [__webpack_require__(/*! ./new-orders-step-two.component.css */ "./src/app/pages/orders/new-orders-step-two/new-orders-step-two.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], NewOrdersStepTwoComponent);
    return NewOrdersStepTwoComponent;
}());



/***/ }),

/***/ "./src/app/pages/orders/order-header/order-header.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/pages/orders/order-header/order-header.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header>\n  <div class=\"navigation\">\n    <div class=\"navigation__logo\">\n      <img [routerLink]=\"'/'\" src=\"../assets/images/logo.svg\" alt=\"logo\">\n    </div>\n    <div class=\"navigation__buttons\">\n      <nav class=\"account-nav\">\n        <a [routerLink]=\"'/about-us'\" class=\"nav-item\">About Us</a>\n        <a [routerLink]=\"'/how-it-works'\" class=\"nav-item\">How it Works</a>\n        <a [routerLink]=\"'/blogs'\" class=\"nav-item\">Blog</a>\n        <a [routerLink]=\"'/faq'\" class=\"nav-item\">FAQ</a>\n        <a [routerLink]=\"'/cleaners'\" class=\"nav-item\">Cleaners</a>\n        <a [routerLink]=\"'/contacts'\" class=\"nav-item\">Contacts</a>\n      </nav>\n      <a href=\"#\" class=\"nav-btn\">Log in</a>\n    </div>\n    <div class=\"navigation__burger\" id=\"navigation__burger\">\n    </div>\n  </div>\n</header>\n"

/***/ }),

/***/ "./src/app/pages/orders/order-header/order-header.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/pages/orders/order-header/order-header.component.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL29yZGVycy9vcmRlci1oZWFkZXIvb3JkZXItaGVhZGVyLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/orders/order-header/order-header.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/pages/orders/order-header/order-header.component.ts ***!
  \*********************************************************************/
/*! exports provided: OrderHeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderHeaderComponent", function() { return OrderHeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var OrderHeaderComponent = /** @class */ (function () {
    function OrderHeaderComponent() {
    }
    OrderHeaderComponent.prototype.ngOnInit = function () {
    };
    OrderHeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-order-header',
            template: __webpack_require__(/*! ./order-header.component.html */ "./src/app/pages/orders/order-header/order-header.component.html"),
            styles: [__webpack_require__(/*! ./order-header.component.scss */ "./src/app/pages/orders/order-header/order-header.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], OrderHeaderComponent);
    return OrderHeaderComponent;
}());



/***/ }),

/***/ "./src/app/pages/orders/thanks/thanks.component.html":
/*!***********************************************************!*\
  !*** ./src/app/pages/orders/thanks/thanks.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"thanks\">\n  <div class=\"order-container\">\n    <div class=\"thanks__box\">\n      <img src=\"../assets/images/thanks.svg\" alt=\"\">\n      <h2>Thanks for your order</h2>\n      <p>\n        It is a long established fact that a reader will be distracted by the readable.\n      </p>\n      <div class=\"buttons\">\n        <a [routerLink]=\"'orders'\">New order</a>\n        <a [routerLink]=\"'../profile'\">My orders</a>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/pages/orders/thanks/thanks.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/pages/orders/thanks/thanks.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL29yZGVycy90aGFua3MvdGhhbmtzLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/orders/thanks/thanks.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/orders/thanks/thanks.component.ts ***!
  \*********************************************************/
/*! exports provided: ThanksComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThanksComponent", function() { return ThanksComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ThanksComponent = /** @class */ (function () {
    function ThanksComponent() {
    }
    ThanksComponent.prototype.ngOnInit = function () {
    };
    ThanksComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-thanks',
            template: __webpack_require__(/*! ./thanks.component.html */ "./src/app/pages/orders/thanks/thanks.component.html"),
            styles: [__webpack_require__(/*! ./thanks.component.scss */ "./src/app/pages/orders/thanks/thanks.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ThanksComponent);
    return ThanksComponent;
}());



/***/ }),

/***/ "./src/app/pages/profile/bonus/bonus.component.css":
/*!*********************************************************!*\
  !*** ./src/app/pages/profile/bonus/bonus.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Byb2ZpbGUvYm9udXMvYm9udXMuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/profile/bonus/bonus.component.html":
/*!**********************************************************!*\
  !*** ./src/app/pages/profile/bonus/bonus.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "bonus\n"

/***/ }),

/***/ "./src/app/pages/profile/bonus/bonus.component.ts":
/*!********************************************************!*\
  !*** ./src/app/pages/profile/bonus/bonus.component.ts ***!
  \********************************************************/
/*! exports provided: BonusComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BonusComponent", function() { return BonusComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var BonusComponent = /** @class */ (function () {
    function BonusComponent() {
    }
    BonusComponent.prototype.ngOnInit = function () {
    };
    BonusComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-bonus',
            template: __webpack_require__(/*! ./bonus.component.html */ "./src/app/pages/profile/bonus/bonus.component.html"),
            styles: [__webpack_require__(/*! ./bonus.component.css */ "./src/app/pages/profile/bonus/bonus.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], BonusComponent);
    return BonusComponent;
}());



/***/ }),

/***/ "./src/app/pages/profile/my-account/my-account.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/pages/profile/my-account/my-account.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Byb2ZpbGUvbXktYWNjb3VudC9teS1hY2NvdW50LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/profile/my-account/my-account.component.html":
/*!********************************************************************!*\
  !*** ./src/app/pages/profile/my-account/my-account.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "my-account\n"

/***/ }),

/***/ "./src/app/pages/profile/my-account/my-account.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/pages/profile/my-account/my-account.component.ts ***!
  \******************************************************************/
/*! exports provided: MyAccountComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyAccountComponent", function() { return MyAccountComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var MyAccountComponent = /** @class */ (function () {
    function MyAccountComponent() {
    }
    MyAccountComponent.prototype.ngOnInit = function () {
    };
    MyAccountComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-account',
            template: __webpack_require__(/*! ./my-account.component.html */ "./src/app/pages/profile/my-account/my-account.component.html"),
            styles: [__webpack_require__(/*! ./my-account.component.css */ "./src/app/pages/profile/my-account/my-account.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], MyAccountComponent);
    return MyAccountComponent;
}());



/***/ }),

/***/ "./src/app/pages/profile/my-orders/my-orders.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/pages/profile/my-orders/my-orders.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Byb2ZpbGUvbXktb3JkZXJzL215LW9yZGVycy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/profile/my-orders/my-orders.component.html":
/*!******************************************************************!*\
  !*** ./src/app/pages/profile/my-orders/my-orders.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "my orders\n"

/***/ }),

/***/ "./src/app/pages/profile/my-orders/my-orders.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/pages/profile/my-orders/my-orders.component.ts ***!
  \****************************************************************/
/*! exports provided: MyOrdersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyOrdersComponent", function() { return MyOrdersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var MyOrdersComponent = /** @class */ (function () {
    function MyOrdersComponent() {
    }
    MyOrdersComponent.prototype.ngOnInit = function () {
    };
    MyOrdersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-my-orders',
            template: __webpack_require__(/*! ./my-orders.component.html */ "./src/app/pages/profile/my-orders/my-orders.component.html"),
            styles: [__webpack_require__(/*! ./my-orders.component.css */ "./src/app/pages/profile/my-orders/my-orders.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], MyOrdersComponent);
    return MyOrdersComponent;
}());



/***/ }),

/***/ "./src/app/pages/profile/my-profile/my-profile.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/pages/profile/my-profile/my-profile.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Byb2ZpbGUvbXktcHJvZmlsZS9teS1wcm9maWxlLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/profile/my-profile/my-profile.component.html":
/*!********************************************************************!*\
  !*** ./src/app/pages/profile/my-profile/my-profile.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "my profile\n"

/***/ }),

/***/ "./src/app/pages/profile/my-profile/my-profile.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/pages/profile/my-profile/my-profile.component.ts ***!
  \******************************************************************/
/*! exports provided: MyProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyProfileComponent", function() { return MyProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var MyProfileComponent = /** @class */ (function () {
    function MyProfileComponent() {
    }
    MyProfileComponent.prototype.ngOnInit = function () {
    };
    MyProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-my-profile',
            template: __webpack_require__(/*! ./my-profile.component.html */ "./src/app/pages/profile/my-profile/my-profile.component.html"),
            styles: [__webpack_require__(/*! ./my-profile.component.css */ "./src/app/pages/profile/my-profile/my-profile.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], MyProfileComponent);
    return MyProfileComponent;
}());



/***/ }),

/***/ "./src/app/pages/profile/payment/payment.component.css":
/*!*************************************************************!*\
  !*** ./src/app/pages/profile/payment/payment.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Byb2ZpbGUvcGF5bWVudC9wYXltZW50LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/profile/payment/payment.component.html":
/*!**************************************************************!*\
  !*** ./src/app/pages/profile/payment/payment.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "payment\n"

/***/ }),

/***/ "./src/app/pages/profile/payment/payment.component.ts":
/*!************************************************************!*\
  !*** ./src/app/pages/profile/payment/payment.component.ts ***!
  \************************************************************/
/*! exports provided: PaymentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentComponent", function() { return PaymentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PaymentComponent = /** @class */ (function () {
    function PaymentComponent() {
    }
    PaymentComponent.prototype.ngOnInit = function () {
    };
    PaymentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-payment',
            template: __webpack_require__(/*! ./payment.component.html */ "./src/app/pages/profile/payment/payment.component.html"),
            styles: [__webpack_require__(/*! ./payment.component.css */ "./src/app/pages/profile/payment/payment.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PaymentComponent);
    return PaymentComponent;
}());



/***/ }),

/***/ "./src/app/pages/profile/profile.component.css":
/*!*****************************************************!*\
  !*** ./src/app/pages/profile/profile.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Byb2ZpbGUvcHJvZmlsZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/profile/profile.component.html":
/*!******************************************************!*\
  !*** ./src/app/pages/profile/profile.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "profile\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/pages/profile/profile.component.ts":
/*!****************************************************!*\
  !*** ./src/app/pages/profile/profile.component.ts ***!
  \****************************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ProfileComponent = /** @class */ (function () {
    function ProfileComponent() {
    }
    ProfileComponent.prototype.ngOnInit = function () {
    };
    ProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(/*! ./profile.component.html */ "./src/app/pages/profile/profile.component.html"),
            styles: [__webpack_require__(/*! ./profile.component.css */ "./src/app/pages/profile/profile.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/pages/profile/write-to-admin/write-to-admin.component.css":
/*!***************************************************************************!*\
  !*** ./src/app/pages/profile/write-to-admin/write-to-admin.component.css ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Byb2ZpbGUvd3JpdGUtdG8tYWRtaW4vd3JpdGUtdG8tYWRtaW4uY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/profile/write-to-admin/write-to-admin.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/pages/profile/write-to-admin/write-to-admin.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "write to admin\n"

/***/ }),

/***/ "./src/app/pages/profile/write-to-admin/write-to-admin.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/pages/profile/write-to-admin/write-to-admin.component.ts ***!
  \**************************************************************************/
/*! exports provided: WriteToAdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WriteToAdminComponent", function() { return WriteToAdminComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var WriteToAdminComponent = /** @class */ (function () {
    function WriteToAdminComponent() {
    }
    WriteToAdminComponent.prototype.ngOnInit = function () {
    };
    WriteToAdminComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-write-to-admin',
            template: __webpack_require__(/*! ./write-to-admin.component.html */ "./src/app/pages/profile/write-to-admin/write-to-admin.component.html"),
            styles: [__webpack_require__(/*! ./write-to-admin.component.css */ "./src/app/pages/profile/write-to-admin/write-to-admin.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], WriteToAdminComponent);
    return WriteToAdminComponent;
}());



/***/ }),

/***/ "./src/app/pages/public/about-us/about-us.component.css":
/*!**************************************************************!*\
  !*** ./src/app/pages/public/about-us/about-us.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3B1YmxpYy9hYm91dC11cy9hYm91dC11cy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/public/about-us/about-us.component.html":
/*!***************************************************************!*\
  !*** ./src/app/pages/public/about-us/about-us.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"headline headline-about\">\n    <div class=\"headline-title\">\n        <h3>About Us</h3>\n    </div>\n</div>\n<div class=\"content\">\n    <p>\n        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.\n    </p>\n    <div class=\"content__element\">\n        <img src=\"../assets/images/content.jpg\" alt=\"\">\n        <div class=\"content__element-box\">\n            <div class=\"title\">\n                Aliquam erat volutpat\n            </div>\n            <div class=\"paragraph\">\n                Phasellus ultrices nulla quis nibh. Quisque a lectus. Donec consectetuer ligula vulputate sem tristique cursus. Nam nulla quam, gravida non, commodo a, sodales sit amet, nisi.\n                Phasellus ultrices nulla quis nibh. Quisque a lectus. Donec consectetuer ligula vulputate sem tristique cursus. Nam nulla quam, gravida non, commodo a, sodales sit amet, nisi.\n            </div>\n        </div>\n    </div>\n</div>\n\n<div class=\"content\">\n    <p>\n        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.\n    </p>\n</div>\n\n<div class=\"content\">\n    <div class=\"video\">\n        <div class=\"play\" id=\"play\">\n            <svg width=\"96\" height=\"96\" viewBox=\"0 0 157 157\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n                <path d=\"M146.469 39.2575C124.796 1.71818 76.7923 -11.1445 39.256 10.5328C1.7166 32.2031 -11.1466 80.2047 10.5307 117.743C32.201 155.282 80.2031 168.147 117.74 146.471C155.28 124.794 168.149 76.7944 146.469 39.2575ZM109.893 132.873C79.8662 150.215 41.461 139.924 24.1237 109.891C6.7825 79.8643 17.0768 41.4596 47.1048 24.1258C77.1338 6.78458 115.537 17.0744 132.875 47.1063C150.214 77.1378 139.923 115.535 109.893 132.873ZM106.754 75.3107L65.6563 51.3414C61.9111 49.1549 58.8902 50.903 58.9112 55.2351L59.1217 102.812C59.1407 107.143 62.1985 108.906 65.9547 106.736L106.738 83.19C110.491 81.0245 110.499 77.4973 106.754 75.3107Z\" fill=\"#E5E5E5\"/>\n            </svg>\n        </div>\n        <div class=\"pause\" id=\"pause\">\n            <img src=\"../assets/images/pause-button-outline.svg\" height=\"96\" width=\"96\" alt=\"\">\n        </div>\n        <video src=\"../assets/images/video.mp4\" id=\"video\">\n            <source src=\"../assets/images/video.mp4\" type=\"video/mp4\">\n        </video>\n    </div>\n</div>\n\n<div class=\"content\">\n    <p>\n        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.\n    </p>\n</div>\n\n<div class=\"content\">\n    <div class=\"content__element content__element-reverse\">\n        <img src=\"../assets/images/content.jpg\" alt=\"\">\n        <div class=\"content__element-box\">\n            <div class=\"title\">\n                Aliquam erat volutpat\n            </div>\n            <div class=\"paragraph\">\n                Phasellus ultrices nulla quis nibh. Quisque a lectus. Donec consectetuer ligula vulputate sem tristique cursus. Nam nulla quam, gravida non, commodo a, sodales sit amet, nisi.\n                Phasellus ultrices nulla quis nibh. Quisque a lectus. Donec consectetuer ligula vulputate sem tristique cursus. Nam nulla quam, gravida non, commodo a, sodales sit amet, nisi.\n                Phasellus ultrices nulla quis nibh. Quisque a lectus.\n            </div>\n        </div>\n    </div>\n</div>\n\n<section class=\"getapp\">\n    <div class=\"getapp-container\">\n        <div class=\"left\">\n            <h2>Get our application</h2>\n            <p class=\"description\">\n                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.\n            </p>\n            <div class=\"buttons\">\n                <a href=\"\">\n                    <img src=\"../assets/images/googlestore.svg\" alt=\"\">\n                </a>\n                <a href=\"\">\n                    <img src=\"../assets/images/appstore.svg\" alt=\"\">\n                </a>\n            </div>\n        </div>\n        <div class=\"right\">\n            <div class=\"img\">\n                <img src=\"../assets/images/getapp.png\" alt=\"get our applicaton \">\n            </div>\n        </div>\n    </div>\n</section>\n\n<div class=\"getintouch\">\n    <div class=\"getintouch__title\">\n        Get in Touch Now\n    </div>\n    <form action=\"\" class=\"getintouch__form\">\n        <label for=\"\">\n            <span>Name</span>\n            <input type=\"text\" required>\n        </label>\n        <label for=\"\">\n            <span>Username or e-mail</span>\n            <input type=\"email\" required>\n        </label>\n        <label for=\"\">\n            <span>Telephone</span>\n            <input type=\"number\" required>\n        </label>\n        <label for=\"\">\n            <span>Nature of qnquiry</span>\n            <input type=\"text\">\n        </label>\n        <label for=\"\">\n            <span>Message</span>\n            <textarea type=\"text\" class=\"message\" required></textarea>\n        </label>\n        <input type=\"submit\" class=\"send\" value=\"send\">\n    </form>\n</div>\n"

/***/ }),

/***/ "./src/app/pages/public/about-us/about-us.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/public/about-us/about-us.component.ts ***!
  \*************************************************************/
/*! exports provided: AboutUsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutUsComponent", function() { return AboutUsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AboutUsComponent = /** @class */ (function () {
    function AboutUsComponent() {
    }
    AboutUsComponent.prototype.ngOnInit = function () {
    };
    AboutUsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-about-us',
            template: __webpack_require__(/*! ./about-us.component.html */ "./src/app/pages/public/about-us/about-us.component.html"),
            styles: [__webpack_require__(/*! ./about-us.component.css */ "./src/app/pages/public/about-us/about-us.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AboutUsComponent);
    return AboutUsComponent;
}());



/***/ }),

/***/ "./src/app/pages/public/become-our-service/become-our-service.component.css":
/*!**********************************************************************************!*\
  !*** ./src/app/pages/public/become-our-service/become-our-service.component.css ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3B1YmxpYy9iZWNvbWUtb3VyLXNlcnZpY2UvYmVjb21lLW91ci1zZXJ2aWNlLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/public/become-our-service/become-our-service.component.html":
/*!***********************************************************************************!*\
  !*** ./src/app/pages/public/become-our-service/become-our-service.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"headline headline-howitworks\">\n    <div class=\"headline-title\">\n        <h3>Become our partner</h3>\n    </div>\n</div>\n\n<div class=\"content\">\n    <div class=\"tabs\">\n        <button class=\"tabs-btn active\" data-tab=\"delivery\">For delivery</button>\n        <button class=\"tabs-btn\" data-tab=\"laundry\">For Laundry service</button>\n    </div>\n</div>\n\n\n<div class=\"content tabcontent\" id=\"delivery\" style=\"display:block;\">\n    <p>\n        Delivery ipsum dolor sit amet, consectetur adipisicing elit. Iste laborum laudantium nulla, repellendus rerum sunt tempore totam unde! Ab aperiam et exercitationem maxime mollitia nostrum, pariatur praesentium rem repellendus suscipit! At aut commodi eius maxime modi quas quisquam quod voluptas?\n    </p>\n    <div class=\"content__element content__element-reverse\">\n        <img src=\"../assets/images/content.jpg\" alt=\"\">\n        <div class=\"content__element-box\">\n            <div class=\"title\">\n                Aliquam erat volutpat\n            </div>\n            <div class=\"paragraph\">\n                Phasellus ultrices nulla quis nibh. Quisque a lectus. Donec consectetuer ligula vulputate sem tristique cursus. Nam nulla quam, gravida non, commodo a, sodales sit amet, nisi.\n                Phasellus ultrices nulla quis nibh. Quisque a lectus. Donec consectetuer ligula vulputate sem tristique cursus. Nam nulla quam, gravida non, commodo a, sodales sit amet, nisi.\n                Phasellus ultrices nulla quis nibh. Quisque a lectus.\n            </div>\n        </div>\n    </div>\n\n    <p>\n        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste laborum laudantium nulla, repellendus rerum sunt tempore totam unde! Ab aperiam et exercitationem maxime mollitia nostrum, pariatur praesentium rem repellendus suscipit! At aut commodi eius maxime modi quas quisquam quod voluptas?\n    </p>\n\n    <div class=\"getintouch\">\n        <div class=\"getintouch__title\">\n            Become our delivery service\n        </div>\n        <form action=\"\" class=\"getintouch__form\">\n            <label for=\"\">\n                <span>Name</span>\n                <input type=\"text\" required>\n            </label>\n            <label for=\"\">\n                <span>Username or e-mail</span>\n                <input type=\"email\" required>\n            </label>\n            <label for=\"\">\n                <span>Telephone</span>\n                <input type=\"number\" required>\n            </label>\n            <label for=\"\">\n                <span>Nature of qnquiry</span>\n                <input type=\"text\">\n            </label>\n            <label for=\"\">\n                <span>Message</span>\n                <textarea type=\"text\" class=\"message\" required></textarea>\n            </label>\n            <input type=\"submit\" class=\"send\" value=\"send\">\n        </form>\n    </div>\n</div>\n\n\n<div class=\"content tabcontent\" id=\"laundry\">\n    <p>\n        Laundry ipsum dolor sit amet, consectetur adipisicing elit. Iste laborum laudantium nulla, repellendus rerum sunt tempore totam unde! Ab aperiam et exercitationem maxime mollitia nostrum, pariatur praesentium rem repellendus suscipit! At aut commodi eius maxime modi quas quisquam quod voluptas?\n    </p>\n    <div class=\"content__element content__element-reverse\">\n        <img src=\"../assets/images/content.jpg\" alt=\"\">\n        <div class=\"content__element-box\">\n            <div class=\"title\">\n                Aliquam erat volutpat\n            </div>\n            <div class=\"paragraph\">\n                Phasellus ultrices nulla quis nibh. Quisque a lectus. Donec consectetuer ligula vulputate sem tristique cursus. Nam nulla quam, gravida non, commodo a, sodales sit amet, nisi.\n                Phasellus ultrices nulla quis nibh. Quisque a lectus. Donec consectetuer ligula vulputate sem tristique cursus. Nam nulla quam, gravida non, commodo a, sodales sit amet, nisi.\n                Phasellus ultrices nulla quis nibh. Quisque a lectus.\n            </div>\n        </div>\n    </div>\n\n    <p>\n        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste laborum laudantium nulla, repellendus rerum sunt tempore totam unde! Ab aperiam et exercitationem maxime mollitia nostrum, pariatur praesentium rem repellendus suscipit! At aut commodi eius maxime modi quas quisquam quod voluptas?\n    </p>\n\n    <div class=\"getintouch\">\n        <div class=\"getintouch__title\">\n            Become our laundry service\n        </div>\n        <form action=\"\" class=\"getintouch__form\">\n            <label for=\"\">\n                <span>Name</span>\n                <input type=\"text\" required>\n            </label>\n            <label for=\"\">\n                <span>Username or e-mail</span>\n                <input type=\"email\" required>\n            </label>\n            <label for=\"\">\n                <span>Telephone</span>\n                <input type=\"number\" required>\n            </label>\n            <label for=\"\">\n                <span>Nature of qnquiry</span>\n                <input type=\"text\">\n            </label>\n            <label for=\"\">\n                <span>Message</span>\n                <textarea type=\"text\" class=\"message\" required></textarea>\n            </label>\n            <input type=\"submit\" class=\"send\" value=\"send\">\n        </form>\n    </div>\n</div>\n\n\n<!--<script>-->\n<!--    let tabsbtn = [... document.getElementsByClassName('tabs-btn')];-->\n<!--    let tabscontent = [... document.getElementsByClassName('tabcontent')];-->\n\n<!--    tabsbtn.forEach(function (item) {-->\n<!--        item.addEventListener('click', function () {-->\n<!--            tabsbtn.forEach(item => {-->\n<!--                item.classList.remove('active');-->\n<!--            });-->\n<!--            tabscontent.forEach(item => {-->\n<!--                item.style.display = 'none';-->\n<!--            });-->\n<!--            this.classList.add('active');-->\n<!--            let data = this.dataset.tab;-->\n<!--            document.getElementById(data).style.display = 'block'-->\n<!--        })-->\n<!--    });-->\n<!--</script>-->\n"

/***/ }),

/***/ "./src/app/pages/public/become-our-service/become-our-service.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/pages/public/become-our-service/become-our-service.component.ts ***!
  \*********************************************************************************/
/*! exports provided: BecomeOurServiceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BecomeOurServiceComponent", function() { return BecomeOurServiceComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var BecomeOurServiceComponent = /** @class */ (function () {
    function BecomeOurServiceComponent() {
    }
    BecomeOurServiceComponent.prototype.ngOnInit = function () {
    };
    BecomeOurServiceComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-become-our-service',
            template: __webpack_require__(/*! ./become-our-service.component.html */ "./src/app/pages/public/become-our-service/become-our-service.component.html"),
            styles: [__webpack_require__(/*! ./become-our-service.component.css */ "./src/app/pages/public/become-our-service/become-our-service.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], BecomeOurServiceComponent);
    return BecomeOurServiceComponent;
}());



/***/ }),

/***/ "./src/app/pages/public/blog/blog.component.css":
/*!******************************************************!*\
  !*** ./src/app/pages/public/blog/blog.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3B1YmxpYy9ibG9nL2Jsb2cuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/public/blog/blog.component.html":
/*!*******************************************************!*\
  !*** ./src/app/pages/public/blog/blog.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"headline headline-about\">\n    <div class=\"headline-title\">\n        <h3>Article title</h3>\n    </div>\n</div>\n<div class=\"content\">\n    <p>\n        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.\n    </p>\n    <div class=\"content__element\">\n        <img src=\"../assets/images/content.jpg\" alt=\"\">\n        <div class=\"content__element-box\">\n            <div class=\"title\">\n                Aliquam erat volutpat\n            </div>\n            <div class=\"paragraph\">\n                Phasellus ultrices nulla quis nibh. Quisque a lectus. Donec consectetuer ligula vulputate sem tristique cursus. Nam nulla quam, gravida non, commodo a, sodales sit amet, nisi.\n                Phasellus ultrices nulla quis nibh. Quisque a lectus. Donec consectetuer ligula vulputate sem tristique cursus. Nam nulla quam, gravida non, commodo a, sodales sit amet, nisi.\n            </div>\n        </div>\n    </div>\n</div>\n\n<div class=\"content\">\n    <p>\n        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.\n    </p>\n</div>\n\n<div class=\"content\">\n    <p>\n        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.\n    </p>\n</div>\n\n<div class=\"content\">\n    <div class=\"content__element content__element-reverse\">\n        <img src=\"../assets/images/content.jpg\" alt=\"\">\n        <div class=\"content__element-box\">\n            <div class=\"paragraph\">\n                Phasellus ultrices nulla quis nibh. Quisque a lectus. Donec consectetuer ligula vulputate sem tristique cursus. Nam nulla quam, gravida non, commodo a, sodales sit amet, nisi.\n                Phasellus ultrices nulla quis nibh. Quisque a lectus. Donec consectetuer ligula vulputate sem tristique cursus. Nam nulla quam, gravida non, commodo a, sodales sit amet, nisi.\n                Phasellus ultrices nulla quis nibh. Quisque a lectus.\n            </div>\n        </div>\n    </div>\n</div>\n\n<section class=\"blog\" id=\"blog\">\n    <h2>More interesting news</h2>\n    <div class=\"blog__container\">\n        <a href=\"\" class=\"blog__container-item\">\n            <div class=\"img\">\n                <img src=\"../assets/images/blog.jpeg\" alt=\"\">\n            </div>\n            <div class=\"title\">Something</div>\n            <div class=\"date\">01/05/19</div>\n            <div class=\"description\">\n                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.\n            </div>\n        </a>\n        <a href=\"\" class=\"blog__container-item\">\n            <div class=\"img\">\n                <img src=\"../assets/images/blog.jpeg\" alt=\"\">\n            </div>\n            <div class=\"title\">Something</div>\n            <div class=\"date\">01/05/19</div>\n            <div class=\"description\">\n                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.\n            </div>\n        </a>\n        <a href=\"\" class=\"blog__container-item\">\n            <div class=\"img\">\n                <img src=\"../assets/images/blog.jpeg\" alt=\"\">\n            </div>\n            <div class=\"title\">Something</div>\n            <div class=\"date\">01/05/19</div>\n            <div class=\"description\">\n                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.\n            </div>\n        </a>\n    </div>\n</section>\n\n<section class=\"getapp\">\n    <div class=\"getapp-container\">\n        <div class=\"left\">\n            <h2>Get our application</h2>\n            <p class=\"description\">\n                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.\n            </p>\n            <div class=\"buttons\">\n                <a href=\"\">\n                    <img src=\"../assets/images/googlestore.svg\" alt=\"\">\n                </a>\n                <a href=\"\">\n                    <img src=\"../assets/images/appstore.svg\" alt=\"\">\n                </a>\n            </div>\n        </div>\n        <div class=\"right\">\n            <div class=\"img\">\n                <img src=\"../assets/images/getapp.png\" alt=\"get our applicaton \">\n            </div>\n        </div>\n    </div>\n</section>\n"

/***/ }),

/***/ "./src/app/pages/public/blog/blog.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/public/blog/blog.component.ts ***!
  \*****************************************************/
/*! exports provided: BlogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogComponent", function() { return BlogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var BlogComponent = /** @class */ (function () {
    function BlogComponent() {
    }
    BlogComponent.prototype.ngOnInit = function () {
    };
    BlogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-blog',
            template: __webpack_require__(/*! ./blog.component.html */ "./src/app/pages/public/blog/blog.component.html"),
            styles: [__webpack_require__(/*! ./blog.component.css */ "./src/app/pages/public/blog/blog.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], BlogComponent);
    return BlogComponent;
}());



/***/ }),

/***/ "./src/app/pages/public/blogs/blogs.component.css":
/*!********************************************************!*\
  !*** ./src/app/pages/public/blogs/blogs.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3B1YmxpYy9ibG9ncy9ibG9ncy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/public/blogs/blogs.component.html":
/*!*********************************************************!*\
  !*** ./src/app/pages/public/blogs/blogs.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"headline headline-howitworks\">\n    <div class=\"headline-title\">\n        <h3>Blogs</h3>\n    </div>\n</div>\n\n<section class=\"blog\" id=\"blog\">\n    <div class=\"blog__container\" data-jplist-group=\"blogs\">\n        <a [routerLink]=\"'/blog/'+id\" class=\"blog__container-item\">\n            <div class=\"img\">\n                <img src=\"../assets/images/blog.jpeg\" alt=\"\">\n            </div>\n            <div class=\"title\">Something</div>\n            <div class=\"date\">01/05/19</div>\n            <div class=\"description\">\n                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.\n            </div>\n        </a>\n        <a [routerLink]=\"'/blog/'+id\" class=\"blog__container-item\">\n            <div class=\"img\">\n                <img src=\"../assets/images/blog.jpeg\" alt=\"\">\n            </div>\n            <div class=\"title\">Something</div>\n            <div class=\"date\">01/05/19</div>\n            <div class=\"description\">\n                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.\n            </div>\n        </a>\n        <a [routerLink]=\"'/blog/'+id\"  class=\"blog__container-item\">\n            <div class=\"img\">\n                <img src=\"../assets/images/blog.jpeg\" alt=\"\">\n            </div>\n            <div class=\"title\">Something</div>\n            <div class=\"date\">01/05/19</div>\n            <div class=\"description\">\n                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.\n            </div>\n        </a>\n        <a [routerLink]=\"'/blog/'+id\"  class=\"blog__container-item\">\n            <div class=\"img\">\n                <img src=\"../assets/images/blog.jpeg\" alt=\"\">\n            </div>\n            <div class=\"title\">Something</div>\n            <div class=\"date\">01/05/19</div>\n            <div class=\"description\">\n                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.\n            </div>\n        </a>\n    </div>\n\n    <div class=\"more\">\n        <div class=\"more-btn\">\n            <img src=\"../assets/images/more.svg\" alt=\"\">\n            <div class=\"text\">\n                More\n            </div>\n        </div>\n    </div>\n</section>\n"

/***/ }),

/***/ "./src/app/pages/public/blogs/blogs.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/public/blogs/blogs.component.ts ***!
  \*******************************************************/
/*! exports provided: BlogsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogsComponent", function() { return BlogsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var BlogsComponent = /** @class */ (function () {
    function BlogsComponent() {
    }
    BlogsComponent.prototype.ngOnInit = function () {
    };
    BlogsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-blogs',
            template: __webpack_require__(/*! ./blogs.component.html */ "./src/app/pages/public/blogs/blogs.component.html"),
            styles: [__webpack_require__(/*! ./blogs.component.css */ "./src/app/pages/public/blogs/blogs.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], BlogsComponent);
    return BlogsComponent;
}());



/***/ }),

/***/ "./src/app/pages/public/cleaners-detail/cleaners-detail.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/pages/public/cleaners-detail/cleaners-detail.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"headline headline-contacts\">\n  <div class=\"headline-title\">\n    <h3>Servis cleaners</h3>\n  </div>\n</div>\n\n<div class=\"content\">\n  <p>\n    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et libero, quibusdam similique temporibus voluptas voluptate. Nihil, quisquam, ratione? Ducimus earum maxime tenetur. Adipisci at eaque eum, fuga neque odio perspiciatis quasi quos recusandae voluptatum. Accusamus aliquam autem beatae culpa dicta eaque earum eius est facilis fuga, in inventore iure labore laudantium minima nesciunt non obcaecati quasi quidem quis reiciendis repellendus repudiandae suscipit tenetur ut veniam veritatis voluptates! Accusantium aliquam dolor, dolorem excepturi facere incidunt ipsa molestiae quaerat repellendus rerum temporibus.\n  </p>\n</div>\n\n<div class=\"content\">\n  <div class=\"content__element\">\n    <div class=\"content__element-box content__element-reverse\">\n      <div class=\"title\">\n        Aliquam erat volutpat\n      </div>\n      <div class=\"paragraph\">\n        Phasellus ultrices nulla quis nibh. Quisque a lectus. Donec consectetuer ligula vulputate sem tristique cursus. Nam nulla quam, gravida non, commodo a, sodales sit amet, nisi.\n        Phasellus ultrices nulla quis nibh. Quisque a lectus. Donec consectetuer ligula vulputate sem tristique cursus. Nam nulla quam, gravida non, commodo a, sodales sit amet, nisi.\n      </div>\n    </div>\n    <img src=\"../assets/images/content.jpg\" alt=\"\">\n  </div>\n</div>\n\n<div class=\"content\">\n  <p>\n    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid amet aspernatur, autem consequuntur cupiditate dolor dolores ex expedita incidunt ipsam libero obcaecati odio perferendis porro quasi, quos, reiciendis sit suscipit temporibus unde. Aliquam aliquid assumenda consequuntur fugit hic iste minus porro provident quis quisquam, recusandae repellat tempore temporibus? Animi aspernatur atque cumque doloremque eveniet incidunt laboriosam non omnis optio pariatur possimus quae quaerat, reiciendis repellendus saepe sapiente sit! A autem dolorem dolorum eius laudantium libero, quae ratione ullam unde voluptatum.\n  </p>\n</div>\n\n<div class=\"content\">\n  <div class=\"video\">\n    <div class=\"play\" id=\"play\">\n      <svg width=\"96\" height=\"96\" viewBox=\"0 0 157 157\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n        <path d=\"M146.469 39.2575C124.796 1.71818 76.7923 -11.1445 39.256 10.5328C1.7166 32.2031 -11.1466 80.2047 10.5307 117.743C32.201 155.282 80.2031 168.147 117.74 146.471C155.28 124.794 168.149 76.7944 146.469 39.2575ZM109.893 132.873C79.8662 150.215 41.461 139.924 24.1237 109.891C6.7825 79.8643 17.0768 41.4596 47.1048 24.1258C77.1338 6.78458 115.537 17.0744 132.875 47.1063C150.214 77.1378 139.923 115.535 109.893 132.873ZM106.754 75.3107L65.6563 51.3414C61.9111 49.1549 58.8902 50.903 58.9112 55.2351L59.1217 102.812C59.1407 107.143 62.1985 108.906 65.9547 106.736L106.738 83.19C110.491 81.0245 110.499 77.4973 106.754 75.3107Z\" fill=\"#E5E5E5\"/>\n      </svg>\n    </div>\n    <div class=\"pause\" id=\"pause\">\n      <img src=\"../assets/images/pause-button-outline.svg\" height=\"96\" width=\"96\" alt=\"\">\n    </div>\n    <video src=\"../assets/images/video.mp4\" id=\"video\">\n      <source src=\"../assets/images/video.mp4\" type=\"video/mp4\">\n    </video>\n  </div>\n</div>\n\n<div class=\"content\">\n  <div class=\"ourclients\" style=\"margin-bottom: 50px\">\n    <h2>Out Clients</h2>\n    <div class=\"ourclients-container\">\n      <div class=\"ourclients-container__item\">\n        <img src=\"../assets/images/logo.svg\" alt=\"\">\n      </div>\n      <div class=\"ourclients-container__item\">\n        <img src=\"../assets/images/logo.svg\" alt=\"\">\n      </div>\n      <div class=\"ourclients-container__item\">\n        <img src=\"../assets/images/logo.svg\" alt=\"\">\n      </div>\n      <div class=\"ourclients-container__item\">\n        <img src=\"../assets/images/logo.svg\" alt=\"\">\n      </div>\n      <div class=\"ourclients-container__item\">\n        <img src=\"../assets/images/logo.svg\" alt=\"\">\n      </div>\n      <div class=\"ourclients-container__item\">\n        <img src=\"../assets/images/logo.svg\" alt=\"\">\n      </div>\n      <div class=\"ourclients-container__item\">\n        <img src=\"../assets/images/logo.svg\" alt=\"\">\n      </div>\n      <div class=\"ourclients-container__item\">\n        <img src=\"../assets/images/logo.svg\" alt=\"\">\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/pages/public/cleaners-detail/cleaners-detail.component.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/pages/public/cleaners-detail/cleaners-detail.component.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3B1YmxpYy9jbGVhbmVycy1kZXRhaWwvY2xlYW5lcnMtZGV0YWlsLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/public/cleaners-detail/cleaners-detail.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/pages/public/cleaners-detail/cleaners-detail.component.ts ***!
  \***************************************************************************/
/*! exports provided: CleanersDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CleanersDetailComponent", function() { return CleanersDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CleanersDetailComponent = /** @class */ (function () {
    function CleanersDetailComponent() {
    }
    CleanersDetailComponent.prototype.ngOnInit = function () {
    };
    CleanersDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-cleaners-detail',
            template: __webpack_require__(/*! ./cleaners-detail.component.html */ "./src/app/pages/public/cleaners-detail/cleaners-detail.component.html"),
            styles: [__webpack_require__(/*! ./cleaners-detail.component.scss */ "./src/app/pages/public/cleaners-detail/cleaners-detail.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CleanersDetailComponent);
    return CleanersDetailComponent;
}());



/***/ }),

/***/ "./src/app/pages/public/cleaners/cleaners.component.html":
/*!***************************************************************!*\
  !*** ./src/app/pages/public/cleaners/cleaners.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"headline headline-howitworks\">\n  <div class=\"headline-title\">\n    <h3>Cleaners</h3>\n  </div>\n</div>\n<section class=\"blog\" id=\"blog\">\n  <div class=\"blog__container\" data-jplist-group=\"blogs\">\n    <a href=\"\" class=\"blog__container-item\">\n      <div class=\"img\">\n        <img src=\"../assets/images/blog.jpeg\" alt=\"\">\n      </div>\n      <div class=\"title\">Something</div>\n      <div class=\"date\">01/05/19</div>\n      <div class=\"description\">\n        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.\n      </div>\n    </a>\n    <a href=\"\" class=\"blog__container-item\">\n      <div class=\"img\">\n        <img src=\"../assets/images/blog.jpeg\" alt=\"\">\n      </div>\n      <div class=\"title\">Something</div>\n      <div class=\"date\">01/05/19</div>\n      <div class=\"description\">\n        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.\n      </div>\n    </a>\n    <a href=\"\" class=\"blog__container-item\">\n      <div class=\"img\">\n        <img src=\"../assets/images/blog.jpeg\" alt=\"\">\n      </div>\n      <div class=\"title\">Something</div>\n      <div class=\"date\">01/05/19</div>\n      <div class=\"description\">\n        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.\n      </div>\n    </a>\n    <a href=\"\" class=\"blog__container-item\">\n      <div class=\"img\">\n        <img src=\"../assets/images/blog.jpeg\" alt=\"\">\n      </div>\n      <div class=\"title\">Something</div>\n      <div class=\"date\">01/05/19</div>\n      <div class=\"description\">\n        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.\n      </div>\n    </a>\n    <a href=\"\" class=\"blog__container-item\">\n      <div class=\"img\">\n        <img src=\"../assets/images/blog.jpeg\" alt=\"\">\n      </div>\n      <div class=\"title\">Something</div>\n      <div class=\"date\">01/05/19</div>\n      <div class=\"description\">\n        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.\n      </div>\n    </a>\n    <a href=\"\" class=\"blog__container-item\">\n      <div class=\"img\">\n        <img src=\"../assets/images/blog.jpeg\" alt=\"\">\n      </div>\n      <div class=\"title\">Something</div>\n      <div class=\"date\">01/05/19</div>\n      <div class=\"description\">\n        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.\n      </div>\n    </a>\n    <a href=\"\" class=\"blog__container-item\">\n      <div class=\"img\">\n        <img src=\"../assets/images/blog.jpeg\" alt=\"\">\n      </div>\n      <div class=\"title\">Something</div>\n      <div class=\"date\">01/05/19</div>\n      <div class=\"description\">\n        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.\n      </div>\n    </a>\n    <a href=\"\" class=\"blog__container-item\">\n      <div class=\"img\">\n        <img src=\"../assets/images/blog.jpeg\" alt=\"\">\n      </div>\n      <div class=\"title\">Something</div>\n      <div class=\"date\">01/05/19</div>\n      <div class=\"description\">\n        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.\n      </div>\n    </a>\n    <a href=\"\" class=\"blog__container-item\">\n      <div class=\"img\">\n        <img src=\"../assets/images/blog.jpeg\" alt=\"\">\n      </div>\n      <div class=\"title\">Something</div>\n      <div class=\"date\">01/05/19</div>\n      <div class=\"description\">\n        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.\n      </div>\n    </a>\n    <a href=\"\" class=\"blog__container-item\">\n      <div class=\"img\">\n        <img src=\"../assets/images/blog.jpeg\" alt=\"\">\n      </div>\n      <div class=\"title\">Something</div>\n      <div class=\"date\">01/05/19</div>\n      <div class=\"description\">\n        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.\n      </div>\n    </a>\n    <a href=\"\" class=\"blog__container-item\">\n      <div class=\"img\">\n        <img src=\"../assets/images/blog.jpeg\" alt=\"\">\n      </div>\n      <div class=\"title\">Something</div>\n      <div class=\"date\">01/05/19</div>\n      <div class=\"description\">\n        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.\n      </div>\n    </a>\n  </div>\n\n  <div class=\"more\">\n    <div class=\"more-btn\">\n      <svg width=\"20\" height=\"18\" viewBox=\"0 0 20 18\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n        <path d=\"M8.96283 17.9628C4.02055 17.9628 0 13.9422 0 8.99994C0 4.05766 4.02055 0.0371094 8.96283 0.0371094C13.9051 0.0371094 17.9257 4.05823 17.9257 8.99994C17.9257 9.28275 17.6965 9.51246 17.4131 9.51246C17.1303 9.51246 16.9006 9.28333 16.9006 8.99994C16.9006 4.6227 13.3395 1.061 8.96225 1.061C4.58444 1.061 1.02332 4.6227 1.02332 8.99994C1.02332 13.3772 4.58444 16.9383 8.96225 16.9383C11.7627 16.9383 14.3859 15.4371 15.8086 13.0211C15.9523 12.7769 16.2663 12.6967 16.5099 12.8398C16.7534 12.983 16.8342 13.2969 16.6917 13.5411C15.0866 16.2682 12.1246 17.9628 8.96283 17.9628Z\" fill=\"#13AAFF\"/>\n        <path d=\"M17.4131 9.51246C17.3248 9.51246 17.2347 9.48937 17.1533 9.44147L13.9437 7.54605C13.7001 7.40234 13.6193 7.08836 13.7631 6.84479C13.9074 6.60123 14.2213 6.52043 14.4649 6.66472L17.2653 8.3183L19.0678 5.73663C19.23 5.50461 19.5492 5.44805 19.7806 5.60966C20.0126 5.77126 20.0692 6.09044 19.9076 6.32246L17.8332 9.29256C17.734 9.43512 17.5752 9.51246 17.4131 9.51246Z\" fill=\"#13AAFF\"/>\n      </svg>\n      <div class=\"text\">\n        More\n      </div>\n    </div>\n  </div>\n</section>\n"

/***/ }),

/***/ "./src/app/pages/public/cleaners/cleaners.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/pages/public/cleaners/cleaners.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3B1YmxpYy9jbGVhbmVycy9jbGVhbmVycy5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/public/cleaners/cleaners.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/public/cleaners/cleaners.component.ts ***!
  \*************************************************************/
/*! exports provided: CleanersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CleanersComponent", function() { return CleanersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CleanersComponent = /** @class */ (function () {
    function CleanersComponent() {
    }
    CleanersComponent.prototype.ngOnInit = function () {
    };
    CleanersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-cleaners',
            template: __webpack_require__(/*! ./cleaners.component.html */ "./src/app/pages/public/cleaners/cleaners.component.html"),
            styles: [__webpack_require__(/*! ./cleaners.component.scss */ "./src/app/pages/public/cleaners/cleaners.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CleanersComponent);
    return CleanersComponent;
}());



/***/ }),

/***/ "./src/app/pages/public/contacts/contacts.component.css":
/*!**************************************************************!*\
  !*** ./src/app/pages/public/contacts/contacts.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3B1YmxpYy9jb250YWN0cy9jb250YWN0cy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/public/contacts/contacts.component.html":
/*!***************************************************************!*\
  !*** ./src/app/pages/public/contacts/contacts.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n<div class=\"headline headline-contacts\">\n    <div class=\"headline-title\">\n        <h3>Contacts</h3>\n    </div>\n</div>\n\n\n<div class=\"content\">\n    <p class=\"contact-paragraph\">\n        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.\n    </p>\n</div>\n\n<div class=\"content\">\n    <div class=\"contact-box\">\n        <div class=\"left\">\n            <div class=\"left-box\">\n                <p class=\"contact-item\">\n                    Some information about Us\n                </p>\n                <p class=\"contact-item\">\n                    Company \"Laundrwise\"\n                </p>\n                <p class=\"contact-item\">\n                    Email: <a href=\"mailto:info@laundrwise.com\">info@laundrwise.com</a>\n                </p>\n                <p class=\"contact-item\">\n                    Phone: <a href=\"tel: 555 555 555\">555 555 555</a>\n                </p>\n                <div class=\"buttons\">\n                    <a href=\"\" class=\"buttons__item\">\n                        <svg width=\"38\" height=\"38\" viewBox=\"0 0 38 38\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n                            <path d=\"M18.6667 0.666016C8.37391 0.666016 0 9.03992 0 19.3327C0 29.6247 8.37391 37.9993 18.6667 37.9993C28.9587 37.9993 37.3333 29.6247 37.3333 19.3327C37.3333 9.03992 28.9602 0.666016 18.6667 0.666016ZM23.3089 19.9898H20.272C20.272 24.8419 20.272 30.8142 20.272 30.8142H15.7719C15.7719 30.8142 15.7719 24.8997 15.7719 19.9898H13.6327V16.1642H15.7719V13.6897C15.7719 11.9174 16.614 9.1482 20.3133 9.1482L23.648 9.16098V12.8746C23.648 12.8746 21.6216 12.8746 21.2276 12.8746C20.8336 12.8746 20.2735 13.0716 20.2735 13.9167V16.1649H23.7021L23.3089 19.9898Z\" fill=\"#13AAFF\"/>\n                        </svg>\n                    </a>\n                    <a href=\"\" class=\"buttons__item\">\n                        <svg width=\"38\" height=\"38\" viewBox=\"0 0 38 38\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n                            <g clip-path=\"url(#clip0)\">\n                                <path d=\"M22.5731 19.3327C22.5731 21.306 20.9735 22.9056 19.0002 22.9056C17.0269 22.9056 15.4272 21.306 15.4272 19.3327C15.4272 17.3594 17.0269 15.7598 19.0002 15.7598C20.9735 15.7598 22.5731 17.3594 22.5731 19.3327Z\" fill=\"#13AAFF\"/>\n                                <path d=\"M27.3558 13.0107C27.184 12.5453 26.91 12.124 26.554 11.7782C26.2082 11.4222 25.7872 11.1482 25.3215 10.9764C24.9438 10.8298 24.3765 10.6552 23.3314 10.6076C22.2009 10.556 21.862 10.5449 19 10.5449C16.1377 10.5449 15.7988 10.5557 14.6686 10.6073C13.6235 10.6552 13.0559 10.8298 12.6785 10.9764C12.2128 11.1482 11.7915 11.4222 11.446 11.7782C11.09 12.124 10.816 12.545 10.6439 13.0107C10.4972 13.3884 10.3226 13.9561 10.2751 15.0011C10.2235 16.1313 10.2124 16.4703 10.2124 19.3325C10.2124 22.1945 10.2235 22.5334 10.2751 23.6639C10.3226 24.709 10.4972 25.2764 10.6439 25.6541C10.816 26.1198 11.0897 26.5407 11.4457 26.8865C11.7915 27.2426 12.2125 27.5166 12.6782 27.6883C13.0559 27.8353 13.6235 28.0099 14.6686 28.0575C15.7988 28.109 16.1375 28.1198 18.9997 28.1198C21.8623 28.1198 22.2012 28.109 23.3311 28.0575C24.3762 28.0099 24.9438 27.8353 25.3215 27.6883C26.2563 27.3277 26.9952 26.5889 27.3558 25.6541C27.5025 25.2764 27.6771 24.709 27.7249 23.6639C27.7765 22.5334 27.7873 22.1945 27.7873 19.3325C27.7873 16.4703 27.7765 16.1313 27.7249 15.0011C27.6774 13.9561 27.5028 13.3884 27.3558 13.0107ZM19 24.8363C15.96 24.8363 13.4956 22.3722 13.4956 19.3322C13.4956 16.2922 15.96 13.8282 19 13.8282C22.0397 13.8282 24.5041 16.2922 24.5041 19.3322C24.5041 22.3722 22.0397 24.8363 19 24.8363ZM24.7217 14.8969C24.0113 14.8969 23.4354 14.3209 23.4354 13.6106C23.4354 12.9002 24.0113 12.3243 24.7217 12.3243C25.432 12.3243 26.008 12.9002 26.008 13.6106C26.0077 14.3209 25.432 14.8969 24.7217 14.8969Z\" fill=\"#13AAFF\"/>\n                                <path d=\"M19.0002 0.666016C8.69242 0.666016 0.333496 9.02494 0.333496 19.3327C0.333496 29.6404 8.69242 37.9993 19.0002 37.9993C29.3079 37.9993 37.6668 29.6404 37.6668 19.3327C37.6668 9.02494 29.3079 0.666016 19.0002 0.666016ZM29.6543 23.7518C29.6024 24.8929 29.421 25.6719 29.1561 26.3538C28.5992 27.7936 27.4611 28.9318 26.0212 29.4886C25.3396 29.7535 24.5603 29.9347 23.4196 29.9868C22.2766 30.0389 21.9114 30.0514 19.0004 30.0514C16.0892 30.0514 15.7243 30.0389 14.581 29.9868C13.4403 29.9347 12.661 29.7535 11.9794 29.4886C11.2639 29.2194 10.6162 28.7976 10.0807 28.2522C9.53552 27.717 9.11369 27.069 8.84452 26.3538C8.57963 25.6722 8.39819 24.8929 8.34635 23.7521C8.29366 22.6088 8.28141 22.2437 8.28141 19.3327C8.28141 16.4217 8.29366 16.0566 8.34607 14.9135C8.39791 13.7725 8.57906 12.9935 8.84395 12.3116C9.11312 11.5964 9.53524 10.9484 10.0807 10.4132C10.6159 9.86776 11.2639 9.44592 11.9791 9.17676C12.661 8.91187 13.44 8.73071 14.581 8.67859C15.724 8.62646 16.0892 8.61393 19.0002 8.61393C21.9111 8.61393 22.2763 8.62646 23.4193 8.67887C24.5603 8.73071 25.3394 8.91187 26.0212 9.17647C26.7365 9.44564 27.3844 9.86776 27.9199 10.4132C28.4651 10.9487 28.8872 11.5964 29.1561 12.3116C29.4213 12.9935 29.6024 13.7725 29.6545 14.9135C29.7067 16.0566 29.7189 16.4217 29.7189 19.3327C29.7189 22.2437 29.7067 22.6088 29.6543 23.7518Z\" fill=\"#13AAFF\"/>\n                            </g>\n                            <defs>\n                                <clipPath id=\"clip0\">\n                                    <rect width=\"37.3333\" height=\"37.3333\" fill=\"#13AAFF\" transform=\"translate(0.333496 0.666016)\"/>\n                                </clipPath>\n                            </defs>\n                        </svg>\n                    </a>\n                    <a href=\"\" class=\"buttons__item\">\n                        <svg width=\"38\" height=\"38\" viewBox=\"0 0 38 38\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n                            <g clip-path=\"url(#clip0)\">\n                                <path d=\"M17.0083 22.8302L23.0803 19.3331L17.0083 15.8359V22.8302Z\" fill=\"#13AAFF\"/>\n                                <path d=\"M19.3332 0.666016C9.02543 0.666016 0.666504 9.02494 0.666504 19.3327C0.666504 29.6404 9.02543 37.9993 19.3332 37.9993C29.6409 37.9993 37.9998 29.6404 37.9998 19.3327C37.9998 9.02494 29.6409 0.666016 19.3332 0.666016ZM30.997 19.3518C30.997 19.3518 30.997 23.1375 30.5168 24.9629C30.2476 25.9621 29.4598 26.75 28.4606 27.0188C26.6351 27.4993 19.3332 27.4993 19.3332 27.4993C19.3332 27.4993 12.0503 27.4993 10.2058 26.9998C9.20658 26.7309 8.41874 25.9427 8.14958 24.9436C7.66907 23.1375 7.66907 19.3327 7.66907 19.3327C7.66907 19.3327 7.66907 15.5473 8.14958 13.7218C8.41846 12.7226 9.22567 11.9154 10.2058 11.6465C12.0312 11.166 19.3332 11.166 19.3332 11.166C19.3332 11.166 26.6351 11.166 28.4606 11.6656C29.4598 11.9345 30.2476 12.7226 30.5168 13.7218C31.0164 15.5473 30.997 19.3518 30.997 19.3518Z\" fill=\"#13AAFF\"/>\n                            </g>\n                            <defs>\n                                <clipPath id=\"clip0\">\n                                    <rect width=\"37.3333\" height=\"37.3333\" fill=\"#13AAFF\" transform=\"translate(0.666504 0.666016)\"/>\n                                </clipPath>\n                            </defs>\n                        </svg>\n                    </a>\n                </div>\n            </div>\n        </div>\n        <div class=\"right\">\n            <div id=\"map\">\n\n            </div>\n        </div>\n    </div>\n</div>\n\n<section class=\"getapp\">\n    <div class=\"getapp-container\">\n        <div class=\"left\">\n            <h2>Get our application</h2>\n            <p class=\"description\">\n                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.\n            </p>\n            <div class=\"buttons\">\n                <a href=\"\">\n                    <img src=\"../assets/images/googlestore.svg\" alt=\"\">\n                </a>\n                <a href=\"\">\n                    <img src=\"../assets/images/appstore.svg\" alt=\"\">\n                </a>\n            </div>\n        </div>\n        <div class=\"right\">\n            <div class=\"img\">\n                <img src=\"../assets/images/getapp.png\" alt=\"get our applicaton \">\n            </div>\n        </div>\n    </div>\n</section>\n\n<section class=\"blog\" id=\"blog\">\n    <h2>Blog</h2>\n    <div class=\"blog__container\">\n        <a href=\"\" class=\"blog__container-item\">\n            <div class=\"img\">\n                <img src=\"../assets/images/blog.jpeg\" alt=\"\">\n            </div>\n            <div class=\"title\">Something</div>\n            <div class=\"date\">01/05/19</div>\n            <div class=\"description\">\n                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.\n            </div>\n        </a>\n        <a href=\"\" class=\"blog__container-item\">\n            <div class=\"img\">\n                <img src=\"../assets/images/blog.jpeg\" alt=\"\">\n            </div>\n            <div class=\"title\">Something</div>\n            <div class=\"date\">01/05/19</div>\n            <div class=\"description\">\n                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.\n            </div>\n        </a>\n        <a href=\"\" class=\"blog__container-item\">\n            <div class=\"img\">\n                <img src=\"../assets/images/blog.jpeg\" alt=\"\">\n            </div>\n            <div class=\"title\">Something</div>\n            <div class=\"date\">01/05/19</div>\n            <div class=\"description\">\n                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.\n            </div>\n        </a>\n    </div>\n</section>\n"

/***/ }),

/***/ "./src/app/pages/public/contacts/contacts.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/public/contacts/contacts.component.ts ***!
  \*************************************************************/
/*! exports provided: ContactsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactsComponent", function() { return ContactsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ContactsComponent = /** @class */ (function () {
    function ContactsComponent() {
    }
    ContactsComponent.prototype.ngOnInit = function () {
    };
    ContactsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-contacts',
            template: __webpack_require__(/*! ./contacts.component.html */ "./src/app/pages/public/contacts/contacts.component.html"),
            styles: [__webpack_require__(/*! ./contacts.component.css */ "./src/app/pages/public/contacts/contacts.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ContactsComponent);
    return ContactsComponent;
}());



/***/ }),

/***/ "./src/app/pages/public/faq/faq.component.css":
/*!****************************************************!*\
  !*** ./src/app/pages/public/faq/faq.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3B1YmxpYy9mYXEvZmFxLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/public/faq/faq.component.html":
/*!*****************************************************!*\
  !*** ./src/app/pages/public/faq/faq.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"headline headline-contacts\">\n    <div class=\"headline-title\">\n        <h3>FAQ</h3>\n    </div>\n</div>\n\n<div class=\"content\">\n    <div class=\"accordion-box\">\n        <mat-accordion class=\"accordion__item\">\n            <mat-expansion-panel class=\"accordion-item\">\n                <mat-expansion-panel-header class=\"accordion-header\">\n                    <mat-panel-title class=\"question\">\n                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos magni necessitatibus neque officia, repellat sequi.\n                    </mat-panel-title>\n                </mat-expansion-panel-header>\n                <p class=\"ansver\">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta fugit laboriosam omnis quibusdam quos? Ab blanditiis commodi est eveniet excepturi facere magni modi molestiae nam nostrum pariatur quas quibusdam quidem quo, quod sequi vero. Culpa impedit quibusdam quidem recusandae! Autem eaque et incidunt laborum mollitia natus pariatur, perspiciatis porro voluptate!</p>\n            </mat-expansion-panel>\n        </mat-accordion>\n        <mat-accordion class=\"accordion__item\">\n            <mat-expansion-panel class=\"accordion-item\">\n                <mat-expansion-panel-header class=\"accordion-header\">\n                    <mat-panel-title class=\"question\">\n                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos magni necessitatibus neque officia, repellat sequi.\n                    </mat-panel-title>\n                </mat-expansion-panel-header>\n                <p class=\"ansver\">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta fugit laboriosam omnis quibusdam quos? Ab blanditiis commodi est eveniet excepturi facere magni modi molestiae nam nostrum pariatur quas quibusdam quidem quo, quod sequi vero. Culpa impedit quibusdam quidem recusandae! Autem eaque et incidunt laborum mollitia natus pariatur, perspiciatis porro voluptate!</p>\n            </mat-expansion-panel>\n        </mat-accordion>\n        <mat-accordion class=\"accordion__item\">\n            <mat-expansion-panel class=\"accordion-item\">\n                <mat-expansion-panel-header class=\"accordion-header\">\n                    <mat-panel-title class=\"question\">\n                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos magni necessitatibus neque officia, repellat sequi.\n                    </mat-panel-title>\n                </mat-expansion-panel-header>\n                <p class=\"ansver\">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta fugit laboriosam omnis quibusdam quos? Ab blanditiis commodi est eveniet excepturi facere magni modi molestiae nam nostrum pariatur quas quibusdam quidem quo, quod sequi vero. Culpa impedit quibusdam quidem recusandae! Autem eaque et incidunt laborum mollitia natus pariatur, perspiciatis porro voluptate!</p>\n            </mat-expansion-panel>\n        </mat-accordion>\n    </div>\n</div>\n\n<div class=\"getintouch\">\n    <div class=\"getintouch__title\">\n        Ask a question\n    </div>\n    <form action=\"\" class=\"getintouch__form\">\n        <label for=\"\">\n            <span>Name</span>\n            <input type=\"text\" required>\n        </label>\n        <label for=\"\">\n            <span>Username or e-mail</span>\n            <input type=\"email\" required>\n        </label>\n        <label for=\"\">\n            <span>Telephone</span>\n            <input type=\"number\" required>\n        </label>\n        <label for=\"\">\n            <span>Nature of qnquiry</span>\n            <input type=\"text\">\n        </label>\n        <label for=\"\">\n            <span>Message</span>\n            <textarea type=\"text\" class=\"message\" required></textarea>\n        </label>\n        <input type=\"submit\" class=\"send\" value=\"send\">\n    </form>\n</div>\n"

/***/ }),

/***/ "./src/app/pages/public/faq/faq.component.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/public/faq/faq.component.ts ***!
  \***************************************************/
/*! exports provided: FaqComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FaqComponent", function() { return FaqComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FaqComponent = /** @class */ (function () {
    function FaqComponent() {
    }
    FaqComponent.prototype.ngOnInit = function () {
    };
    FaqComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-faq',
            template: __webpack_require__(/*! ./faq.component.html */ "./src/app/pages/public/faq/faq.component.html"),
            styles: [__webpack_require__(/*! ./faq.component.css */ "./src/app/pages/public/faq/faq.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FaqComponent);
    return FaqComponent;
}());



/***/ }),

/***/ "./src/app/pages/public/footer/footer.component.html":
/*!***********************************************************!*\
  !*** ./src/app/pages/public/footer/footer.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<footer>\n  <div class=\"footer-container\">\n    <div class=\"footer-container__left\">\n      <img class=\"logo\" src=\"../assets/images/logo-white.svg\" alt=\"logo\">\n      <div class=\"description\">\n        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.\n      </div>\n    </div>\n    <div class=\"footer-container__center\">\n      <div class=\"footer-container__center-item disabled\">\n        <nav>\n          <span class=\"title\">\n              Pages\n          </span>\n          <a href=\"\">Product</a>\n          <a href=\"\">Product</a>\n          <a href=\"\">Product</a>\n          <a href=\"\">Product</a>\n          <a href=\"\">Product</a>\n        </nav>\n      </div>\n      <div class=\"footer-container__center-item\">\n        <nav>\n          <span class=\"title\">\n              Pages\n          </span>\n          <a href=\"\">Product</a>\n          <a href=\"\">Product</a>\n          <a href=\"\">Product</a>\n          <a href=\"\">Product</a>\n          <a href=\"\">Product</a>\n        </nav>\n      </div>\n      <div class=\"footer-container__center-item\">\n        <nav>\n          <span class=\"title\">\n              Pages\n          </span>\n          <a href=\"\">Product</a>\n          <a href=\"\">Product</a>\n          <a href=\"\">Product</a>\n          <a href=\"\">Product</a>\n          <a href=\"\">Product</a>\n        </nav>\n      </div>\n    </div>\n    <div class=\"footer-container__right\">\n      <form class=\"email-sub\">\n        <input type=\"email\" placeholder=\"Email adress\">\n        <div class=\"btn\">Sign up</div>\n      </form>\n      <div class=\"buttons\">\n        <a href=\"\" class=\"buttons__item\">\n          <svg width=\"38\" height=\"38\" viewBox=\"0 0 38 38\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n            <path d=\"M18.6667 0.666016C8.37391 0.666016 0 9.03992 0 19.3327C0 29.6247 8.37391 37.9993 18.6667 37.9993C28.9587 37.9993 37.3333 29.6247 37.3333 19.3327C37.3333 9.03992 28.9602 0.666016 18.6667 0.666016ZM23.3089 19.9898H20.272C20.272 24.8419 20.272 30.8142 20.272 30.8142H15.7719C15.7719 30.8142 15.7719 24.8997 15.7719 19.9898H13.6327V16.1642H15.7719V13.6897C15.7719 11.9174 16.614 9.1482 20.3133 9.1482L23.648 9.16098V12.8746C23.648 12.8746 21.6216 12.8746 21.2276 12.8746C20.8336 12.8746 20.2735 13.0716 20.2735 13.9167V16.1649H23.7021L23.3089 19.9898Z\" fill=\"white\"/>\n          </svg>\n        </a>\n        <a href=\"\" class=\"buttons__item\">\n          <svg width=\"38\" height=\"38\" viewBox=\"0 0 38 38\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n            <g clip-path=\"url(#clip0)\">\n              <path d=\"M22.5731 19.3327C22.5731 21.306 20.9735 22.9056 19.0002 22.9056C17.0269 22.9056 15.4272 21.306 15.4272 19.3327C15.4272 17.3594 17.0269 15.7598 19.0002 15.7598C20.9735 15.7598 22.5731 17.3594 22.5731 19.3327Z\" fill=\"white\"/>\n              <path d=\"M27.3558 13.0107C27.184 12.5453 26.91 12.124 26.554 11.7782C26.2082 11.4222 25.7872 11.1482 25.3215 10.9764C24.9438 10.8298 24.3765 10.6552 23.3314 10.6076C22.2009 10.556 21.862 10.5449 19 10.5449C16.1377 10.5449 15.7988 10.5557 14.6686 10.6073C13.6235 10.6552 13.0559 10.8298 12.6785 10.9764C12.2128 11.1482 11.7915 11.4222 11.446 11.7782C11.09 12.124 10.816 12.545 10.6439 13.0107C10.4972 13.3884 10.3226 13.9561 10.2751 15.0011C10.2235 16.1313 10.2124 16.4703 10.2124 19.3325C10.2124 22.1945 10.2235 22.5334 10.2751 23.6639C10.3226 24.709 10.4972 25.2764 10.6439 25.6541C10.816 26.1198 11.0897 26.5407 11.4457 26.8865C11.7915 27.2426 12.2125 27.5166 12.6782 27.6883C13.0559 27.8353 13.6235 28.0099 14.6686 28.0575C15.7988 28.109 16.1375 28.1198 18.9997 28.1198C21.8623 28.1198 22.2012 28.109 23.3311 28.0575C24.3762 28.0099 24.9438 27.8353 25.3215 27.6883C26.2563 27.3277 26.9952 26.5889 27.3558 25.6541C27.5025 25.2764 27.6771 24.709 27.7249 23.6639C27.7765 22.5334 27.7873 22.1945 27.7873 19.3325C27.7873 16.4703 27.7765 16.1313 27.7249 15.0011C27.6774 13.9561 27.5028 13.3884 27.3558 13.0107ZM19 24.8363C15.96 24.8363 13.4956 22.3722 13.4956 19.3322C13.4956 16.2922 15.96 13.8282 19 13.8282C22.0397 13.8282 24.5041 16.2922 24.5041 19.3322C24.5041 22.3722 22.0397 24.8363 19 24.8363ZM24.7217 14.8969C24.0113 14.8969 23.4354 14.3209 23.4354 13.6106C23.4354 12.9002 24.0113 12.3243 24.7217 12.3243C25.432 12.3243 26.008 12.9002 26.008 13.6106C26.0077 14.3209 25.432 14.8969 24.7217 14.8969Z\" fill=\"white\"/>\n              <path d=\"M19.0002 0.666016C8.69242 0.666016 0.333496 9.02494 0.333496 19.3327C0.333496 29.6404 8.69242 37.9993 19.0002 37.9993C29.3079 37.9993 37.6668 29.6404 37.6668 19.3327C37.6668 9.02494 29.3079 0.666016 19.0002 0.666016ZM29.6543 23.7518C29.6024 24.8929 29.421 25.6719 29.1561 26.3538C28.5992 27.7936 27.4611 28.9318 26.0212 29.4886C25.3396 29.7535 24.5603 29.9347 23.4196 29.9868C22.2766 30.0389 21.9114 30.0514 19.0004 30.0514C16.0892 30.0514 15.7243 30.0389 14.581 29.9868C13.4403 29.9347 12.661 29.7535 11.9794 29.4886C11.2639 29.2194 10.6162 28.7976 10.0807 28.2522C9.53552 27.717 9.11369 27.069 8.84452 26.3538C8.57963 25.6722 8.39819 24.8929 8.34635 23.7521C8.29366 22.6088 8.28141 22.2437 8.28141 19.3327C8.28141 16.4217 8.29366 16.0566 8.34607 14.9135C8.39791 13.7725 8.57906 12.9935 8.84395 12.3116C9.11312 11.5964 9.53524 10.9484 10.0807 10.4132C10.6159 9.86776 11.2639 9.44592 11.9791 9.17676C12.661 8.91187 13.44 8.73071 14.581 8.67859C15.724 8.62646 16.0892 8.61393 19.0002 8.61393C21.9111 8.61393 22.2763 8.62646 23.4193 8.67887C24.5603 8.73071 25.3394 8.91187 26.0212 9.17647C26.7365 9.44564 27.3844 9.86776 27.9199 10.4132C28.4651 10.9487 28.8872 11.5964 29.1561 12.3116C29.4213 12.9935 29.6024 13.7725 29.6545 14.9135C29.7067 16.0566 29.7189 16.4217 29.7189 19.3327C29.7189 22.2437 29.7067 22.6088 29.6543 23.7518Z\" fill=\"white\"/>\n            </g>\n            <defs>\n              <clipPath id=\"clip0\">\n                <rect width=\"37.3333\" height=\"37.3333\" fill=\"white\" transform=\"translate(0.333496 0.666016)\"/>\n              </clipPath>\n            </defs>\n          </svg>\n        </a>\n        <a href=\"\" class=\"buttons__item\">\n          <svg width=\"38\" height=\"38\" viewBox=\"0 0 38 38\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n            <g clip-path=\"url(#clip0)\">\n              <path d=\"M17.0083 22.8302L23.0803 19.3331L17.0083 15.8359V22.8302Z\" fill=\"white\"/>\n              <path d=\"M19.3332 0.666016C9.02543 0.666016 0.666504 9.02494 0.666504 19.3327C0.666504 29.6404 9.02543 37.9993 19.3332 37.9993C29.6409 37.9993 37.9998 29.6404 37.9998 19.3327C37.9998 9.02494 29.6409 0.666016 19.3332 0.666016ZM30.997 19.3518C30.997 19.3518 30.997 23.1375 30.5168 24.9629C30.2476 25.9621 29.4598 26.75 28.4606 27.0188C26.6351 27.4993 19.3332 27.4993 19.3332 27.4993C19.3332 27.4993 12.0503 27.4993 10.2058 26.9998C9.20658 26.7309 8.41874 25.9427 8.14958 24.9436C7.66907 23.1375 7.66907 19.3327 7.66907 19.3327C7.66907 19.3327 7.66907 15.5473 8.14958 13.7218C8.41846 12.7226 9.22567 11.9154 10.2058 11.6465C12.0312 11.166 19.3332 11.166 19.3332 11.166C19.3332 11.166 26.6351 11.166 28.4606 11.6656C29.4598 11.9345 30.2476 12.7226 30.5168 13.7218C31.0164 15.5473 30.997 19.3518 30.997 19.3518Z\" fill=\"white\"/>\n            </g>\n            <defs>\n              <clipPath id=\"clip0\">\n                <rect width=\"37.3333\" height=\"37.3333\" fill=\"white\" transform=\"translate(0.666504 0.666016)\"/>\n              </clipPath>\n            </defs>\n          </svg>\n        </a>\n      </div>\n    </div>\n  </div>\n</footer>\n\n<div class=\"copyright\">\n  <div class=\"copyright-box\">\n    Copyright &copy; {{date}}\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/pages/public/footer/footer.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/pages/public/footer/footer.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3B1YmxpYy9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/public/footer/footer.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/public/footer/footer.component.ts ***!
  \*********************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
        this.date = new Date().getFullYear();
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/pages/public/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.scss */ "./src/app/pages/public/footer/footer.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/pages/public/header/app-header.component.html":
/*!***************************************************************!*\
  !*** ./src/app/pages/public/header/app-header.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header>\n  <div class=\"navigation\">\n    <div class=\"navigation__logo\">\n      <img [routerLink]=\"'/'\" src=\"../assets/images/logo.svg\" alt=\"logo\">\n    </div>\n    <div class=\"navigation__buttons\">\n      <nav class=\"account-nav\">\n        <a [routerLink]=\"'/about-us'\" class=\"nav-item\">About Us</a>\n        <a [routerLink]=\"'/how-it-works'\" class=\"nav-item\">How it Works</a>\n        <a [routerLink]=\"'/blogs'\" class=\"nav-item\">Blog</a>\n        <a [routerLink]=\"'/faq'\" class=\"nav-item\">FAQ</a>\n        <a [routerLink]=\"'/cleaners'\" class=\"nav-item\">Cleaners</a>\n        <a [routerLink]=\"'/contacts'\" class=\"nav-item\">Contacts</a>\n      </nav>\n      <a [routerLink]=\"'/orders'\" class=\"color nav-btn\">Make order</a>\n      <a href=\"#\" class=\"nav-btn\">Log in</a>\n    </div>\n    <div class=\"navigation__burger\" id=\"navigation__burger\">\n    </div>\n  </div>\n</header>\n"

/***/ }),

/***/ "./src/app/pages/public/header/app-header.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/pages/public/header/app-header.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3B1YmxpYy9oZWFkZXIvYXBwLWhlYWRlci5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/public/header/app-header.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/public/header/app-header.component.ts ***!
  \*************************************************************/
/*! exports provided: AppHeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppHeaderComponent", function() { return AppHeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppHeaderComponent = /** @class */ (function () {
    function AppHeaderComponent() {
    }
    AppHeaderComponent.prototype.ngOnInit = function () {
    };
    AppHeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-app-header',
            template: __webpack_require__(/*! ./app-header.component.html */ "./src/app/pages/public/header/app-header.component.html"),
            styles: [__webpack_require__(/*! ./app-header.component.scss */ "./src/app/pages/public/header/app-header.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AppHeaderComponent);
    return AppHeaderComponent;
}());



/***/ }),

/***/ "./src/app/pages/public/how-it-works/how-it-works.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/pages/public/how-it-works/how-it-works.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3B1YmxpYy9ob3ctaXQtd29ya3MvaG93LWl0LXdvcmtzLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/public/how-it-works/how-it-works.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/pages/public/how-it-works/how-it-works.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"headline headline-howitworks\">\n    <div class=\"headline-title\">\n        <h3>How it works</h3>\n    </div>\n</div>\n\n<section class=\"ordernow\">\n    <div class=\"ordernow-container\" data-simplebar data-simplebar-auto-hide=\"true\">\n        <div class=\"ordernow-container__box\">\n            <a href=\"#\" class=\"ordernow-container__box-item\">\n                <svg width=\"63\" class=\"icon\" height=\"73\" viewBox=\"0 0 63 73\" xmlns=\"http://www.w3.org/2000/svg\">\n                    <path d=\"M62.9962 54.854C62.3167 40.9047 54.1017 15.4666 51.6004 8.00236C51.1515 6.66322 49.8848 5.76387 48.4491 5.76387H42.4523L38.1319 0.586531C38.1291 0.583783 38.1263 0.581034 38.1235 0.577736C38.1218 0.575537 38.1201 0.573338 38.1184 0.571689C38.0916 0.540354 38.0625 0.511218 38.0322 0.483732C38.0205 0.472738 38.0082 0.463392 37.9959 0.453497C37.9729 0.433707 37.9488 0.415016 37.9242 0.397975C37.9097 0.38753 37.8951 0.378184 37.88 0.368289C37.8537 0.351797 37.8268 0.336955 37.7994 0.322662C37.7865 0.316065 37.7742 0.308919 37.7608 0.302872C37.721 0.284181 37.6796 0.267689 37.6376 0.254495C37.6264 0.250647 37.6152 0.248449 37.604 0.24515C37.571 0.235805 37.5374 0.227559 37.5033 0.220962C37.4882 0.218213 37.4736 0.216015 37.4585 0.213816C37.4255 0.208868 37.3925 0.20557 37.3589 0.203921C37.3455 0.203371 37.3326 0.202271 37.3192 0.202271C37.3136 0.202271 37.308 0.201172 37.3024 0.201172H25.6983C25.6927 0.201172 25.6871 0.202271 25.6821 0.202271C25.6681 0.202271 25.6541 0.203371 25.6401 0.20447C25.6076 0.206119 25.5751 0.208868 25.5432 0.213816C25.527 0.216015 25.5113 0.218213 25.4957 0.221512C25.4632 0.227559 25.4313 0.235255 25.3994 0.2446C25.3865 0.247899 25.3742 0.250647 25.3619 0.254495C25.3205 0.268239 25.2796 0.284181 25.2404 0.302322C25.2259 0.308919 25.2125 0.317165 25.1979 0.324311C25.1722 0.338054 25.1464 0.352347 25.1218 0.367739C25.1061 0.377635 25.0904 0.388079 25.0748 0.398524C25.0513 0.415566 25.0283 0.433707 25.0054 0.452398C24.993 0.462842 24.9796 0.472738 24.9673 0.484282C24.9371 0.511218 24.9085 0.540354 24.8817 0.571689C24.88 0.573338 24.8789 0.575537 24.8772 0.577736C24.8744 0.581034 24.871 0.583783 24.8682 0.586531L20.5478 5.76387H14.5509C13.1147 5.76387 11.8486 6.66322 11.3997 8.00236C11.0163 9.1469 10.4034 10.9989 9.66405 13.3204C9.48718 13.8762 9.8023 14.4666 10.3676 14.6403C10.9329 14.8135 11.5346 14.5051 11.7115 13.9499C12.4475 11.6399 13.0565 9.79887 13.4377 8.66094C13.5961 8.18817 14.0433 7.87043 14.5509 7.87043H19.9696L19.8834 14.6887C19.8761 15.2753 20.1028 15.8283 20.5226 16.2455C20.9424 16.6628 21.5026 16.8926 22.0999 16.8926H22.6064C22.6154 16.8926 22.6394 16.8926 22.6607 16.9173C22.6825 16.942 22.6786 16.9651 22.6769 16.9745L22.3428 18.9969C22.242 19.6082 22.4122 20.2349 22.809 20.7165L30.4279 29.947V70.148C25.1055 70.131 19.922 68.6093 17.8538 67.9233C17.4867 67.8012 17.2062 67.4934 17.1229 67.1201C15.2411 58.6939 18.3178 32.8946 18.3492 32.6351C18.4158 32.0815 18.0324 31.5731 17.4744 31.4746C16.9152 31.3762 16.3756 31.7215 16.2419 32.2624L10.5551 55.2559C10.4331 55.7484 9.98813 56.092 9.47207 56.092H3.26032C2.95135 56.092 2.6631 55.9711 2.44984 55.7512C2.23995 55.5346 2.13192 55.252 2.14648 54.9546C2.59985 45.6422 6.56601 30.8458 9.81293 20.0727C9.98141 19.5148 9.65677 18.9288 9.08922 18.7633C8.52111 18.5984 7.92445 18.9167 7.75597 19.4746C4.47546 30.3587 0.467324 45.3316 0.00387746 54.854C-0.0392209 55.7325 0.278139 56.567 0.897187 57.2047C1.51064 57.8369 2.37148 58.1986 3.26032 58.1986H9.47151C10.9805 58.1986 12.283 57.1931 12.6395 55.7528L14.8711 46.7285C14.1507 56.8699 14.2034 63.8822 15.0273 67.5709C15.2707 68.6621 16.0907 69.562 17.1671 69.9188C19.3511 70.6439 24.8481 72.2551 30.527 72.2551C30.8505 72.2551 31.1757 72.2496 31.4998 72.2386C31.8244 72.2491 32.149 72.2551 32.4731 72.2551C38.1515 72.2551 43.649 70.6439 45.833 69.9193C46.9094 69.5626 47.7288 68.6627 47.9728 67.5714C48.3036 66.091 48.5118 64.0455 48.5919 61.4909L48.5986 61.2567C48.6159 60.6757 48.1497 60.1902 47.557 60.1738C46.9592 60.1562 46.4711 60.6152 46.4543 61.1968L46.4476 61.4282C46.3715 63.8509 46.18 65.7661 45.8772 67.1201C45.7927 67.4994 45.5196 67.7996 45.1468 67.9233C43.0787 68.6093 37.8957 70.131 32.5727 70.148V29.947L40.1916 20.7165C40.5885 20.2355 40.7586 19.6088 40.6579 18.9969L40.3237 16.9739C40.322 16.9651 40.3181 16.942 40.3394 16.9173C40.3612 16.8926 40.3853 16.8926 40.3942 16.8926H40.9008C41.498 16.8926 42.0577 16.6628 42.4781 16.2455C42.8973 15.8277 43.1245 15.2747 43.1173 14.6882L43.0305 7.87043H48.4497C48.9568 7.87043 49.4046 8.18817 49.563 8.66094C52.0431 16.0614 60.187 41.2708 60.8536 54.9552C60.8682 55.252 60.7601 55.5351 60.5502 55.7517C60.3364 55.9711 60.0487 56.0926 59.7398 56.0926H53.5286C53.0125 56.0926 52.567 55.7484 52.445 55.2559L46.7588 32.263C46.6245 31.7215 46.0832 31.3762 45.5263 31.4746C44.9683 31.5736 44.5843 32.0821 44.6515 32.6357C44.6655 32.7528 46.0675 44.4647 46.4095 54.6693C46.4291 55.2509 46.9284 55.7023 47.5167 55.6874C48.1088 55.6682 48.5728 55.1817 48.5533 54.6001C48.4665 51.9998 48.3109 49.3023 48.1273 46.7225L50.3606 55.7534C50.7171 57.1937 52.0196 58.1991 53.5286 58.1991H59.7398C60.628 58.1991 61.4895 57.8374 62.1029 57.2052C62.7214 56.5675 63.0387 55.7325 62.9962 54.854ZM30.4273 26.6013L24.4747 19.3894C24.4619 19.374 24.4568 19.3537 24.4602 19.3339L24.7938 17.3109C24.8979 16.6798 24.716 16.0388 24.294 15.5518C23.8725 15.0647 23.2568 14.7855 22.6058 14.7855H22.0993C22.092 14.7855 22.0696 14.7855 22.0484 14.7646C22.0277 14.7437 22.0277 14.7217 22.0277 14.7145L22.1234 7.19921L25.0188 3.72933L25.4755 6.5038L25.8936 9.0441C25.9916 9.63835 26.1265 10.2238 26.2899 10.7999C26.4091 11.2216 26.5457 11.6377 26.6996 12.0478C26.9957 12.8383 27.3523 13.6074 27.7737 14.349L30.4273 19.0112V26.6013ZM31.4998 16.5776L29.6465 13.321C29.271 12.6608 28.9547 11.9752 28.6933 11.271C28.5993 11.0171 28.5098 10.7614 28.4308 10.5025C28.2517 9.91597 28.1118 9.31731 28.0116 8.70821L27.5577 5.95243L26.9577 2.30773H36.0419L35.3971 6.22619L34.9885 8.70821C34.7209 10.3321 34.1707 11.884 33.353 13.321L31.4998 16.5776ZM40.9512 14.7646C40.9305 14.7855 40.9081 14.7855 40.9002 14.7855H40.3937C39.7427 14.7855 39.1276 15.0647 38.7056 15.5518C38.2835 16.0388 38.1016 16.6804 38.2057 17.3115L38.5399 19.3339C38.5433 19.3537 38.5377 19.374 38.5248 19.3894L32.5722 26.6013V19.0112L32.7323 18.7309L35.2264 14.3484C36.1656 12.6965 36.7981 10.9121 37.1065 9.04355L37.6348 5.83259L37.9813 3.72933L40.8767 7.19921L40.9719 14.7145C40.9719 14.7217 40.9719 14.7442 40.9512 14.7646Z\"/>\n                </svg>\n                <span class=\"title\">\n                    Tops\n                </span>\n            </a>\n            <a href=\"#\" class=\"ordernow-container__box-item\">\n                <svg width=\"49\" class=\"icon\" height=\"73\" viewBox=\"0 0 49 73\" xmlns=\"http://www.w3.org/2000/svg\">\n                    <path d=\"M47.9112 36.0638C48.5123 36.0638 49 35.5916 49 35.0083V28.5292C49 27.0779 48.6042 25.6459 47.8551 24.3892L44.1106 18.1069C43.5526 17.1707 43.2577 16.1043 43.2577 15.0229V2.31488C43.2577 1.14945 42.2795 0.201172 41.0773 0.201172H35.5301C34.3284 0.201172 33.3502 1.14945 33.3502 2.31488V7.96663C33.3502 12.697 29.38 16.5457 24.5003 16.5457C19.6205 16.5457 15.6504 12.697 15.6504 7.96663V2.31488C15.6504 1.14945 14.6722 0.201172 13.4699 0.201172H7.92273C6.72051 0.201172 5.74229 1.14945 5.74229 2.31488V15.0235C5.74229 16.1048 5.44741 17.1707 4.8894 18.1075L1.14494 24.3898C0.395824 25.6464 0 27.0779 0 28.5292V71.1996C0 71.7829 0.487692 72.2551 1.0888 72.2551H47.9112C48.5123 72.2551 49 71.7829 49 71.1996V41.5759C49 40.9932 48.5123 40.5204 47.9112 40.5204C47.3101 40.5204 46.8224 40.9932 46.8224 41.5759V65.289H17.3868C16.7851 65.289 16.298 65.7617 16.298 66.3445C16.298 66.9272 16.7851 67.3999 17.3868 67.3999H46.8224V70.1442H2.1776V67.3999H10.5636C11.1647 67.3999 11.6524 66.9272 11.6524 66.3445C11.6524 65.7617 11.1647 65.289 10.5636 65.289H2.1776V28.5292C2.1776 27.4479 2.47249 26.3814 3.0305 25.4452L6.77495 19.1629C7.52407 17.9063 7.91989 16.4748 7.91989 15.0229L7.92273 2.31213L13.4728 2.31488V7.96663C13.4728 13.8614 18.4194 18.6566 24.4997 18.6566C30.5806 18.6566 35.5272 13.8614 35.5272 7.96663L35.5301 2.31213L41.0801 2.31488V15.0235C41.0801 16.4748 41.4759 17.9063 42.2251 19.1629L45.9695 25.4452C46.5275 26.3814 46.8224 27.4479 46.8224 28.5292V35.0089C46.8224 35.5916 47.3101 36.0638 47.9112 36.0638Z\"/>\n                </svg>\n                <span class=\"title\">\n                    Tops\n                </span>\n            </a>\n            <a href=\"#\" class=\"ordernow-container__box-item\">\n                <svg width=\"78\" class=\"icon\" height=\"73\" viewBox=\"0 0 78 73\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n                    <path d=\"M77.3112 43.117L70.8988 27.8342C69.2572 23.922 67.6155 20.0099 65.9744 16.0971C65.3918 14.7095 64.8097 13.3212 64.227 11.9336C63.4635 10.1137 62.8436 9.31461 60.8852 8.48108C59.4994 7.89079 58.1142 7.30108 56.7284 6.71079C55.839 6.33223 54.9491 5.95309 54.0597 5.57453C53.4108 4.48844 52.7614 3.40177 52.1125 2.31568C51.8395 1.85837 51.5996 1.28791 51.2544 0.879025C50.4584 -0.0641601 49.6051 0.265984 48.3936 0.2689C44.2978 0.278233 31.9262 0.27065 29.8366 0.269483C28.936 0.2689 26.3748 -0.172652 26.1177 1.19692L23.5376 5.51504C22.5271 5.94551 21.5172 6.37539 20.5072 6.80528C19.0836 7.41191 17.66 8.01795 16.2364 8.62399C14.4931 9.36652 13.9566 10.2035 13.2238 11.9493L11.5644 15.9047L6.88878 27.0467C4.64139 32.4037 2.39341 37.7601 0.146027 43.1164C-0.212681 43.9715 0.107615 44.9416 0.907763 45.4234L6.83382 48.9919C7.13402 49.1734 7.47441 49.2655 7.81775 49.2655C8.0175 49.2655 8.21783 49.234 8.41225 49.171C8.94056 48.9984 9.36309 48.6076 9.57111 48.0983L18.1671 27.0951V70.4536C18.1671 71.4826 19.0151 72.3196 20.0569 72.3196H38.7292H57.4003C58.4428 72.3196 59.2908 71.4826 59.2908 70.4536V60.6981C59.2908 60.0798 58.7832 59.5787 58.1567 59.5787C57.5303 59.5787 57.0227 60.0798 57.0227 60.6981V70.0803H39.8633V10.6877L46.375 16.6973C46.7018 16.9989 47.1207 17.1605 47.5574 17.1605C47.6573 17.1605 47.759 17.1523 47.86 17.1348C48.4019 17.0421 48.8569 16.7119 49.1087 16.2295L53.5154 7.78113L60.8793 10.9169L57.0936 20.9443C57.0812 20.9764 57.0712 21.0085 57.0623 21.0411C57.0588 21.0534 57.0564 21.0662 57.0534 21.0785C57.0487 21.0995 57.0434 21.1199 57.0398 21.1409C57.0369 21.1549 57.0357 21.1689 57.0339 21.1829C57.031 21.2021 57.028 21.222 57.0263 21.2412C57.0251 21.2558 57.0251 21.2704 57.0245 21.2849C57.0239 21.3019 57.0221 21.3182 57.0221 21.3351V53.6834C57.0221 54.3017 57.5297 54.8027 58.1562 54.8027C58.7832 54.8027 59.2908 54.3017 59.2908 53.6834V27.0951L61.8922 33.4524C62.1268 34.0252 62.7874 34.3023 63.3689 34.0707C63.9493 33.8392 64.2299 33.187 63.9953 32.6137L59.3729 21.3188L60.6269 17.9975L62.3744 13.3691L75.0916 43.6787L69.8227 46.8518L66.6121 39.0066C66.3775 38.4332 65.7168 38.1561 65.1353 38.3877C64.555 38.6192 64.2743 39.2714 64.5089 39.8447L67.8862 48.0983C68.0948 48.6076 68.5173 48.9984 69.045 49.171C69.2394 49.234 69.4398 49.2655 69.6395 49.2655C69.9829 49.2655 70.3232 49.1734 70.6235 48.9919L76.5495 45.4234C77.3497 44.9416 77.67 43.971 77.3112 43.117ZM27.6926 2.96721C29.8732 4.23996 34.8473 7.14301 36.9121 8.34867L30.1486 14.5899L25.7673 6.19049L27.6926 2.96721ZM7.63515 46.8518L2.36564 43.6782L15.0835 13.3691L16.8304 17.9975L18.0843 21.3188L7.63515 46.8518ZM37.5946 70.0809H20.4352V21.3351C20.4352 21.3182 20.434 21.3019 20.4328 21.2849C20.4322 21.2704 20.4322 21.2558 20.431 21.2412C20.4292 21.222 20.4263 21.2021 20.4233 21.1829C20.4216 21.1689 20.4204 21.1543 20.418 21.1409C20.4139 21.1199 20.4092 21.0995 20.4038 21.0785C20.4009 21.0662 20.3991 21.0534 20.3956 21.0411C20.3861 21.0085 20.3761 20.9758 20.3642 20.9443L16.5786 10.9169L24.027 7.74497L28.4526 16.2295C28.7043 16.7119 29.1594 17.0421 29.7019 17.1348C29.8029 17.1523 29.904 17.1605 30.0044 17.1605C30.4411 17.1605 30.8601 16.9989 31.1863 16.6973L37.5946 10.7839V70.0809ZM38.7806 6.77787L31.4653 2.50758H46.096L38.7806 6.77787ZM47.4127 14.5899L40.6096 8.31134L49.8415 2.9223L51.7946 6.19049L47.4127 14.5899Z\" />\n                </svg>\n                <span class=\"title\">\n                    Shirt\n                </span>\n            </a>\n            <a href=\"#\" class=\"ordernow-container__box-item\">\n                <svg width=\"43\" class=\"icon\" height=\"73\" viewBox=\"0 0 43 73\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n                    <path d=\"M39.7797 8.74449C39.7986 8.66561 39.8097 8.58343 39.8097 8.49907V1.95421C39.8097 0.9873 39.0132 0.201172 38.0336 0.201172H4.01667C3.03762 0.201172 2.24062 0.9873 2.24062 1.95421V8.49907C2.24062 8.58343 2.25227 8.66561 2.27114 8.74449L0.44292 58.2256C0.42183 58.8063 0.880828 59.2939 1.46915 59.3153C2.05691 59.335 2.55143 58.883 2.57307 58.3023L4.00834 19.4523C6.58473 18.4454 8.59167 16.3286 9.83768 13.2799C10.4399 11.8074 10.7379 10.4312 10.8817 9.55089H19.9595V20.9506L14.3333 69.902H2.1446L2.33719 64.6834C2.35884 64.1027 1.89928 63.6151 1.31097 63.5938C0.723203 63.5708 0.228684 64.026 0.207594 64.6067L0.00112741 70.1885C-0.0160781 70.6618 0.164302 71.1285 0.497312 71.4693C0.830322 71.81 1.29654 72.0056 1.77607 72.0056H14.6502C15.5543 72.0056 16.3131 71.3367 16.4146 70.4503L21.0251 30.3403L22.3189 41.5942C22.3855 42.1716 22.9144 42.5863 23.4977 42.5212C24.0827 42.4554 24.5029 41.9344 24.4363 41.357L22.0908 20.9506V18.1994H22.128C24.262 18.1994 25.9981 16.5269 25.9981 14.472V9.55089H31.1686C31.3124 10.4312 31.6104 11.8074 32.2126 13.2799C33.4586 16.3286 35.4661 18.4454 38.0425 19.4523L39.9062 69.902H27.7175L25.1733 47.7693C25.1073 47.1919 24.5784 46.7767 23.9945 46.8429C23.41 46.9081 22.9893 47.4291 23.0559 48.0065L25.6357 70.4498C25.7372 71.3367 26.4959 72.0056 27.4006 72.0056H40.2748C40.7543 72.0056 41.22 71.81 41.553 71.4693C41.886 71.1285 42.0669 70.6618 42.0492 70.189L39.7797 8.74449ZM4.09548 17.0895L4.3741 9.55089H8.71821C8.36078 11.4644 7.26573 15.3162 4.09548 17.0895ZM12.4646 7.44725H4.37188V2.30482H12.4646V7.44725ZM23.8668 14.4715C23.8668 15.3671 23.087 16.0952 22.128 16.0952H22.0908V9.55089H23.8668V14.4715ZM27.4544 7.44725H14.5958V2.30482H27.4544V7.44725ZM32.1077 7.44725H29.5857V2.30482H37.6784V7.44725H32.1077ZM33.3348 9.55089H37.6762L37.9548 17.0879C34.7995 15.3162 33.6973 11.4655 33.3348 9.55089Z\"/>\n                </svg>\n                <span class=\"title\">\n                    Trousers\n                </span>\n            </a>\n            <a href=\"#\" class=\"ordernow-container__box-item\">\n                <svg width=\"45\" class=\"icon\" height=\"74\" viewBox=\"0 0 45 74\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n                    <path d=\"M44.2097 71.8084C44.2034 71.7407 43.5636 64.9422 41.5674 56.152C38.2832 41.6891 33.8578 32.7762 30.6574 27.7854V23.3819L34.3252 7.69417C34.3625 7.53484 34.3634 7.37138 34.3315 7.21433L34.3322 7.21418L33.0999 1.13171C32.992 0.598519 32.5178 0.214844 31.9669 0.214844H28.2696C27.6316 0.214844 27.1142 0.725415 27.1142 1.35534V7.18331C25.4148 7.90244 23.6377 9.13256 22.1569 11.2113C22.1458 11.2269 22.1086 11.2271 22.1072 11.2271C22.1056 11.2271 22.0685 11.2269 22.0574 11.2113C20.5768 9.13256 18.7999 7.90258 17.1005 7.18346V1.35534C17.1005 0.725558 16.5832 0.214844 15.945 0.214844H12.2478C11.6971 0.214844 11.2229 0.598519 11.1148 1.13157L9.88226 7.21404L9.88298 7.21418C9.85113 7.37124 9.85199 7.5347 9.88932 7.69403L13.5571 23.3819L13.5572 27.7853C10.3567 32.7761 5.93143 41.6889 2.64705 56.1518C0.650877 64.9422 0.0110949 71.7407 0.00475324 71.8082C-0.0246488 72.1275 0.0833021 72.4439 0.302232 72.6806C0.521162 72.9172 0.830748 73.0519 1.15547 73.0519H43.0592C43.3837 73.0519 43.6935 72.9172 43.9124 72.6806C44.1312 72.444 44.2391 72.1275 44.2097 71.8084ZM29.425 2.4957H31.0197L31.7741 6.2195C31.1238 6.22903 30.317 6.29163 29.4248 6.47187V2.4957H29.425ZM13.1949 2.4957H14.7895V6.47201C13.8975 6.29163 13.0905 6.22903 12.4404 6.21964L13.1949 2.4957ZM12.45 8.50349C14.2796 8.54389 17.7394 9.11535 20.1669 12.5232C20.6061 13.1397 21.3315 13.5079 22.1072 13.5079C22.8829 13.5079 23.608 13.1397 24.0473 12.5232C26.4914 9.09202 29.9388 8.52952 31.766 8.49709L28.5828 22.1115H15.6317L12.45 8.50349ZM28.3467 24.3925V26.9775H15.8682V24.3925H28.3467ZM2.44311 70.7712C3.08274 65.3954 6.14229 43.7972 15.3496 29.2585H17.063L14.8028 43.759C14.7058 44.3815 15.1383 44.9639 15.769 45.0596C15.8287 45.0686 15.8878 45.073 15.9461 45.073C16.5068 45.073 16.9988 44.6696 17.0866 44.1059L19.401 29.2585H20.9517V52.4478C20.9517 53.0776 21.469 53.5883 22.1072 53.5883C22.7452 53.5883 23.2626 53.0777 23.2626 52.4478V29.2585H24.8133L27.1274 44.1059C27.2152 44.6699 27.7074 45.073 28.2679 45.073C28.3263 45.073 28.3855 45.0686 28.445 45.0596C29.0757 44.9639 29.5084 44.3816 29.4113 43.759L27.1512 29.2585H28.8647C38.0663 43.7887 41.1301 65.3937 41.7711 70.7712H2.44311Z\" />\n                </svg>\n                <span class=\"title\">\n                    Dresses\n                </span>\n            </a>\n            <a href=\"#\" class=\"ordernow-container__box-item\">\n                <svg width=\"72\" class=\"icon\" height=\"72\" viewBox=\"0 0 72 72\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n                    <path d=\"M71.7058 42.3334C70.7653 25.6434 67.6861 13.4705 62.5522 6.15249C62.5489 6.14761 62.5451 6.14382 62.5418 6.13894C62.5187 6.10803 62.4951 6.07821 62.4692 6.04948C62.4654 6.04568 62.4621 6.04134 62.4588 6.03755C62.4297 6.00664 62.3978 5.97736 62.3654 5.95025C62.3561 5.94266 62.3467 5.93561 62.3374 5.92857C62.3121 5.90905 62.2863 5.89007 62.2588 5.87272C62.2484 5.86621 62.238 5.85916 62.227 5.85266C62.1918 5.83205 62.1561 5.81308 62.1187 5.79627C62.1171 5.79519 62.1154 5.7941 62.1138 5.79356C62.0814 5.77946 62.0479 5.76645 62.0138 5.7556L45.3366 0.352062C44.0489 -0.0648884 42.6601 0.27019 41.7113 1.22608L36.0001 6.98531L30.2883 1.22608C29.3406 0.27019 27.9512 -0.0648884 26.6635 0.352062L21.8675 1.906C21.3138 2.08547 21.0122 2.67375 21.194 3.22029C21.3758 3.76682 21.9719 4.06449 22.5257 3.88502L27.3217 2.33163C27.8403 2.16409 28.3984 2.29855 28.7797 2.68297L34.9326 8.88734L34.9233 36.476H26.4707C25.55 36.476 24.7819 37.1564 24.6841 38.0592C24.0051 44.307 19.1635 48.3219 16.3711 50.1426V20.1412C16.3711 20.0187 16.3491 19.8967 16.3063 19.7812L11.6833 7.39792L16.3744 5.87814C16.9281 5.69922 17.2297 5.11039 17.0479 4.56385C16.8661 4.01732 16.27 3.71965 15.7162 3.89912L9.98631 5.7556C9.95225 5.76699 9.91874 5.77946 9.88632 5.79356C9.88358 5.79464 9.88138 5.79627 9.87863 5.79735C9.84237 5.81362 9.80721 5.8326 9.77315 5.85266C9.76217 5.85916 9.75118 5.86621 9.74019 5.87326C9.71327 5.89061 9.688 5.90905 9.66328 5.92802C9.65339 5.93561 9.6435 5.94266 9.63416 5.9508C9.60175 5.97791 9.57043 6.00664 9.54132 6.03755C9.53747 6.04189 9.53418 6.04622 9.53033 6.05056C9.50451 6.07875 9.48089 6.10858 9.45836 6.13894C9.45507 6.14382 9.45122 6.14761 9.44738 6.15249C4.31407 13.4705 1.2343 25.6434 0.294328 42.3334C-0.426445 55.1314 0.370691 66.4498 0.632191 69.614C0.707454 70.5271 1.49415 71.2428 2.42368 71.2428H8.99854C9.84347 71.2428 10.5835 70.6502 10.7576 69.8342L14.2604 53.4115V69.4687C14.2604 70.4469 15.0669 71.2428 16.0579 71.2428H55.9416C56.9327 71.2428 57.7392 70.4469 57.7392 69.4687V53.4115L61.242 69.8342C61.4161 70.6507 62.1561 71.2428 63.001 71.2428H69.5759C70.5054 71.2428 71.2921 70.5276 71.3674 69.614C71.6289 66.4498 72.4266 55.1314 71.7058 42.3334ZM14.2604 43.3001L8.74473 69.1597H2.71265C2.43357 65.6788 1.70841 54.7562 2.40171 42.4488C2.81099 35.1812 3.64988 28.6922 4.8953 23.1618C6.18687 17.427 7.92123 12.7022 10.0621 9.08036L14.2604 20.3272V43.3001ZM16.559 52.4882C24.7973 47.7233 26.4289 40.9551 26.7487 38.5586H34.8914V62.1089H16.559V52.4882ZM34.9118 69.1597H16.3711V64.1921H34.9134L34.9118 69.1597ZM55.629 69.1597H37.0884L37.0867 64.1921H43.2699C43.8528 64.1921 44.3252 63.7258 44.3252 63.1505C44.3252 62.5752 43.8528 62.1089 43.2699 62.1089H37.1087V38.5586H45.2514C45.5712 40.9551 47.2028 47.7233 55.4412 52.4882V62.1089H49.8359C49.2531 62.1089 48.7806 62.5752 48.7806 63.1505C48.7806 63.7258 49.2531 64.1921 49.8359 64.1921H55.629V69.1597ZM55.6939 19.7812C55.6505 19.8967 55.6285 20.0187 55.6285 20.1412V50.1562C48.6795 45.7308 47.5099 39.8425 47.316 38.0592C47.2182 37.1564 46.4502 36.476 45.5294 36.476H37.0768L37.0675 8.88734L43.2199 2.68297C43.6017 2.29801 44.1609 2.16409 44.6785 2.33163L60.3168 7.39792L55.6939 19.7812ZM69.2875 69.1597H63.2554L57.7392 43.3001V20.3272L61.938 9.08036C64.0783 12.7022 65.8133 17.427 67.1048 23.1618C68.3502 28.6922 69.1891 35.1818 69.5984 42.4488C70.2917 54.7562 69.566 65.6788 69.2875 69.1597Z\"/>\n                </svg>\n                <span class=\"title\">\n                    Outdoor\n                </span>\n            </a>\n            <a href=\"#\" class=\"ordernow-container__box-item\">\n                <svg width=\"44\" class=\"icon\" height=\"74\" viewBox=\"0 0 44 74\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n                    <path d=\"M26.5303 13.5013C26.9426 13.0942 27.1833 12.5823 27.2581 12.0518H43.9622L42.6267 0.188477H1.3355L0 12.0518H16.7042C16.779 12.5823 17.0196 13.0942 17.4321 13.5013L18.9313 14.9811L12.097 61.9312L19.3668 72.182C19.9632 73.0232 20.9406 73.5255 21.9811 73.5255C23.0216 73.5255 23.999 73.0232 24.5954 72.182L31.8652 61.9312L25.0309 14.9811L26.5303 13.5013ZM41.5205 9.89485H26.5312C26.5309 9.89456 26.5306 9.89427 26.5303 9.89384L23.8084 7.20741C23.5895 6.99128 23.3395 6.8249 23.0738 6.70267V2.34545H40.6707L41.5205 9.89485ZM3.29148 2.34545H20.8885V6.70282C20.6227 6.82505 20.3727 6.99128 20.1536 7.20755L17.4319 9.89399C17.4316 9.89427 17.4313 9.89456 17.431 9.89485H2.4417L3.29148 2.34545ZM18.9774 11.4191L21.6989 8.73282C21.8545 8.57924 22.108 8.57924 22.2633 8.73282L24.9849 11.4191C25.1405 11.5727 25.1405 11.8226 24.9849 11.9762L22.2633 14.6625C22.1077 14.8161 21.8542 14.8161 21.6989 14.6625L18.9772 11.9762C18.8216 11.8226 18.8216 11.5727 18.9774 11.4191ZM22.8051 70.9451C22.617 71.2102 22.309 71.3685 21.9811 71.3685C21.6532 71.3685 21.3452 71.2102 21.1571 70.9451L14.383 61.3933L20.8898 16.693C21.2349 16.8515 21.6076 16.9336 21.9811 16.9336C22.3546 16.9336 22.7273 16.8515 23.0724 16.693L29.5792 61.3933L22.8051 70.9451Z\"/>\n                    <path d=\"M7.77661 5.58105H5.59131V7.73804H7.77661V5.58105Z\"/>\n                    <path d=\"M38.3708 5.58105H36.1855V7.73804H38.3708V5.58105Z\"/>\n                </svg>\n                <span class=\"title\">\n                    Tie\n                </span>\n            </a>\n            <a href=\"#\" class=\"ordernow-container__box-item\">\n                <svg width=\"73\" class=\"icon\" height=\"74\" viewBox=\"0 0 73 74\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n                    <path d=\"M27.1237 32.6416C26.5251 32.6416 26.0396 33.1209 26.0396 33.7116V37.8491C26.0396 38.4399 26.5251 38.9192 27.1237 38.9192C27.7222 38.9192 28.2078 38.4399 28.2078 37.8491V33.7116C28.2078 33.1209 27.7222 32.6416 27.1237 32.6416Z\"/>\n                    <path d=\"M10.3566 13.5933H27.0731C27.6722 13.5933 28.1572 13.114 28.1572 12.5232C28.1572 11.9319 27.6722 11.4531 27.0731 11.4531H10.3566C9.75805 11.4531 9.27246 11.9319 9.27246 12.5232C9.27246 13.114 9.75805 13.5933 10.3566 13.5933Z\"/>\n                    <path d=\"M10.3566 18.5093H27.0731C27.6722 18.5093 28.1572 18.03 28.1572 17.4392C28.1572 16.8479 27.6722 16.3691 27.0731 16.3691H10.3566C9.75805 16.3691 9.27246 16.8479 9.27246 17.4392C9.27246 18.03 9.75805 18.5093 10.3566 18.5093Z\"/>\n                    <path d=\"M10.3566 52.9067H27.0731C27.6722 52.9067 28.1572 52.428 28.1572 51.8367C28.1572 51.2459 27.6722 50.7666 27.0731 50.7666H10.3566C9.75805 50.7666 9.27246 51.2459 9.27246 51.8367C9.27246 52.428 9.75805 52.9067 10.3566 52.9067Z\"/>\n                    <path d=\"M10.3566 57.8218H27.0731C27.6722 57.8218 28.1572 57.3425 28.1572 56.7517C28.1572 56.1604 27.6722 55.6816 27.0731 55.6816H10.3566C9.75805 55.6816 9.27246 56.1604 9.27246 56.7517C9.27246 57.3425 9.75805 57.8218 10.3566 57.8218Z\"/>\n                    <path d=\"M63.469 33.7116C63.469 33.1209 62.984 32.6416 62.3849 32.6416C61.7864 32.6416 61.3008 33.1209 61.3008 33.7116V37.8491C61.3008 38.4399 61.7864 38.9192 62.3849 38.9192C62.984 38.9192 63.469 38.4399 63.469 37.8491V33.7116Z\"/>\n                    <path d=\"M45.6178 13.5933H62.3344C62.9334 13.5933 63.4185 13.114 63.4185 12.5232C63.4185 11.9319 62.9334 11.4531 62.3344 11.4531H45.6178C45.0193 11.4531 44.5337 11.9319 44.5337 12.5232C44.5337 13.114 45.0193 13.5933 45.6178 13.5933Z\"/>\n                    <path d=\"M45.6178 18.5093H62.3344C62.9334 18.5093 63.4185 18.03 63.4185 17.4392C63.4185 16.8479 62.9334 16.3691 62.3344 16.3691H45.6178C45.0193 16.3691 44.5337 16.8479 44.5337 17.4392C44.5337 18.03 45.0193 18.5093 45.6178 18.5093Z\"/>\n                    <path d=\"M62.3349 50.7666H45.6178C45.0193 50.7666 44.5337 51.2459 44.5337 51.8367C44.5337 52.428 45.0193 52.9067 45.6178 52.9067H62.3344C62.9334 52.9067 63.4185 52.428 63.4185 51.8367C63.4185 51.2459 62.9334 50.7666 62.3349 50.7666Z\"/>\n                    <path d=\"M62.3349 55.6816H45.6178C45.0193 55.6816 44.5337 56.1604 44.5337 56.7517C44.5337 57.3425 45.0193 57.8218 45.6178 57.8218H62.3344C62.9334 57.8218 63.4185 57.3425 63.4185 56.7517C63.4185 56.1604 62.9334 55.6816 62.3349 55.6816Z\"/>\n                    <path d=\"M68.5085 0.214844H39.445C38.2174 0.214844 37.1119 0.739281 36.3457 1.57359C35.58 0.739281 34.4739 0.214844 33.2464 0.214844H4.18339C1.87685 0.214844 0 2.06737 0 4.34402V64.9313C0 67.208 1.87685 69.0605 4.18339 69.0605H4.4962V70.9938C4.4962 72.245 5.52779 73.2638 6.79597 73.2638H9.1409C10.4091 73.2638 11.4407 72.245 11.4407 70.9938V69.0605H25.9891V70.9938C25.9891 72.2456 27.0213 73.2638 28.2894 73.2638H30.6338C31.902 73.2638 32.9336 72.2456 32.9336 70.9938V69.0605H33.2469C34.4745 69.0605 35.58 68.5361 36.3457 67.7023C37.1119 68.5361 38.2174 69.0605 39.445 69.0605H39.7578V70.9938C39.7578 72.2456 40.7899 73.2638 42.0581 73.2638H44.4025C45.6706 73.2638 46.7022 72.2456 46.7022 70.9938V69.0605H61.2512V70.9938C61.2512 72.2456 62.2828 73.2638 63.551 73.2638H65.8954C67.1635 73.2638 68.1951 72.2456 68.1951 70.9938V69.0605H68.5085C70.815 69.0605 72.6919 67.2085 72.6919 64.9313V4.34402C72.6919 2.06737 70.815 0.214844 68.5085 0.214844V0.214844ZM9.27246 70.9938C9.27246 71.0652 9.21318 71.1237 9.1409 71.1237H6.79597C6.72369 71.1237 6.66441 71.0652 6.66441 70.9938V69.0605H9.27246V70.9938ZM30.7654 70.9938C30.7654 71.0652 30.7066 71.1237 30.6338 71.1237H28.2894C28.2166 71.1237 28.1573 71.0652 28.1573 70.9938V69.0605H30.7654V70.9938ZM33.2464 66.9204H4.18339C3.07219 66.9204 2.16821 66.0281 2.16821 64.9313V4.34402C2.16821 3.24722 3.07219 2.35495 4.18339 2.35495H33.2464C34.3576 2.35495 35.2616 3.24722 35.2616 4.34402V64.9313C35.2616 66.0281 34.3576 66.9204 33.2464 66.9204ZM44.534 70.9938C44.534 71.0652 44.4753 71.1237 44.4025 71.1237H42.0581C41.9853 71.1237 41.926 71.0652 41.926 70.9938V69.0605H44.534V70.9938ZM66.0275 70.9938C66.0275 71.0652 65.9682 71.1237 65.8959 71.1237H63.551C63.4782 71.1237 63.4194 71.0652 63.4194 70.9938V69.0605H66.0275V70.9938ZM70.5237 64.9313C70.5237 66.0281 69.6197 66.9204 68.5085 66.9204H39.445C38.3338 66.9204 37.4298 66.0281 37.4298 64.9313V4.34402C37.4298 3.24722 38.3338 2.35495 39.445 2.35495H68.5085C69.6197 2.35495 70.5237 3.24722 70.5237 4.34402V64.9313Z\"/>\n                    <path d=\"M30.8749 4.42773H6.55541C5.29401 4.42773 4.26807 5.44038 4.26807 6.68542V21.6739C4.26807 22.2647 4.75365 22.7439 5.35217 22.7439C5.95125 22.7439 6.43627 22.2647 6.43627 21.6739V6.68542C6.43627 6.62077 6.48991 6.56783 6.55541 6.56783H30.8749C30.9404 6.56783 30.9935 6.62077 30.9935 6.68542V62.5898C30.9935 62.6545 30.9404 62.7074 30.8749 62.7074H6.55541C6.48991 62.7074 6.43627 62.6545 6.43627 62.5898V25.9558C6.43627 25.3644 5.95125 24.8857 5.35217 24.8857C4.75365 24.8857 4.26807 25.3644 4.26807 25.9558V62.5898C4.26807 63.8349 5.29401 64.8475 6.55541 64.8475H30.8749C32.1357 64.8475 33.1617 63.8349 33.1617 62.5898V6.68542C33.1617 5.44038 32.1357 4.42773 30.8749 4.42773Z\"/>\n                    <path d=\"M66.1364 4.42773H41.817C40.5562 4.42773 39.5303 5.44038 39.5303 6.68542V62.5898C39.5303 63.8349 40.5562 64.8475 41.817 64.8475H66.1364C67.3973 64.8475 68.4232 63.8349 68.4232 62.5898V48.6402C68.4232 48.0495 67.9382 47.5702 67.3391 47.5702C66.7406 47.5702 66.255 48.0495 66.255 48.6402V62.5898C66.255 62.6545 66.2019 62.7074 66.1364 62.7074H41.817C41.7515 62.7074 41.6985 62.6545 41.6985 62.5898V6.68542C41.6985 6.62077 41.7515 6.56783 41.817 6.56783H66.1364C66.2019 6.56783 66.255 6.62077 66.255 6.68542V44.3483C66.255 44.9396 66.7406 45.4184 67.3391 45.4184C67.9382 45.4184 68.4232 44.9396 68.4232 44.3483V6.68542C68.4238 5.44038 67.3973 4.42773 66.1364 4.42773Z\"/>\n                </svg>\n                <span class=\"title\">\n                    Bussines\n                </span>\n            </a>\n            <a href=\"#\" class=\"ordernow-container__box-item\">\n                <svg width=\"86\" class=\"icon\" height=\"74\" viewBox=\"0 0 86 74\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n                    <path d=\"M83.7275 42.2366H82.3084V38.0344C82.3047 35.2529 80.6338 32.7372 78.0511 31.6247V10.0199C78.0507 9.46312 77.7165 8.95956 77.1996 8.73685C77.7532 7.86104 78.048 6.85007 78.0511 5.81774C78.0511 2.72337 75.5096 0.214844 72.3746 0.214844C69.2396 0.214844 66.6982 2.72337 66.6982 5.81774C66.704 6.8042 66.9765 7.77122 67.4872 8.61919H17.6594C18.1701 7.77122 18.4426 6.8042 18.4484 5.81774C18.4484 2.72337 15.907 0.214844 12.772 0.214844C9.637 0.214844 7.09555 2.72337 7.09555 5.81774C7.09857 6.85007 7.39339 7.86104 7.94702 8.73685C7.43011 8.95956 7.09591 9.46312 7.09555 10.0199V31.6247C4.51277 32.7372 2.84195 35.2529 2.83822 38.0344V42.2366H1.41911C0.635406 42.2366 0 42.8637 0 43.6373V63.2474C0 64.021 0.635406 64.6481 1.41911 64.6481H2.83822V71.6518C2.83822 72.4253 3.47363 73.0525 4.25733 73.0525H9.93377C10.7175 73.0525 11.3529 72.4253 11.3529 71.6518V64.6481H73.7937V71.6518C73.7937 72.4253 74.4291 73.0525 75.2128 73.0525H80.8893C81.673 73.0525 82.3084 72.4253 82.3084 71.6518V64.6481H83.7275C84.5112 64.6481 85.1466 64.021 85.1466 63.2474V43.6373C85.1466 42.8637 84.5112 42.2366 83.7275 42.2366ZM72.3746 3.01629C73.9422 3.01629 75.2128 4.27046 75.2128 5.81774C75.2128 7.36501 73.9422 8.61919 72.3746 8.61919C70.807 8.61919 69.5364 7.36501 69.5364 5.81774C69.5364 4.27046 70.807 3.01629 72.3746 3.01629ZM12.772 3.01629C14.3396 3.01629 15.6102 4.27046 15.6102 5.81774C15.6102 7.36501 14.3396 8.61919 12.772 8.61919C11.2044 8.61919 9.93377 7.36501 9.93377 5.81774C9.93377 4.27046 11.2044 3.01629 12.772 3.01629ZM9.93377 11.4206H75.2128V31.0308H69.4995C70.4386 29.8256 70.9504 28.3491 70.9555 26.8286V24.0272C70.9509 20.1612 67.7767 17.0281 63.86 17.0235H52.5071C48.5903 17.0281 45.4161 20.1612 45.4115 24.0272V26.8286C45.4167 28.3491 45.9284 29.8256 46.8675 31.0308H38.2791C39.2182 29.8256 39.7299 28.3491 39.7351 26.8286V24.0272C39.7305 20.1612 36.5563 17.0281 32.6395 17.0235H21.2867C17.3699 17.0281 14.1957 20.1612 14.1911 24.0272V26.8286C14.1962 28.3491 14.708 29.8256 15.6471 31.0308H9.93377V11.4206ZM68.1173 24.0272V26.8286C68.1173 29.1494 66.2112 31.0308 63.86 31.0308H52.5071C50.1558 31.0308 48.2497 29.1494 48.2497 26.8286V24.0272C48.2497 21.7063 50.1558 19.825 52.5071 19.825H63.86C66.2112 19.825 68.1173 21.7063 68.1173 24.0272ZM36.8969 24.0272V26.8286C36.8969 29.1494 34.9908 31.0308 32.6395 31.0308H21.2867C18.9354 31.0308 17.0293 29.1494 17.0293 26.8286V24.0272C17.0293 21.7063 18.9354 19.825 21.2867 19.825H32.6395C34.9908 19.825 36.8969 21.7063 36.8969 24.0272ZM5.67644 38.0344C5.67644 35.7136 7.58248 33.8322 9.93377 33.8322H75.2128C77.5641 33.8322 79.4702 35.7136 79.4702 38.0344V42.2366H5.67644V38.0344ZM8.51466 70.251H5.67644V64.6481H8.51466V70.251ZM79.4702 70.251H76.6319V64.6481H79.4702V70.251ZM82.3084 61.8467H2.83822V45.038H82.3084V61.8467Z\"/>\n                    <path d=\"M12.7723 56.2441H7.09587C6.31216 56.2441 5.67676 56.8713 5.67676 57.6449C5.67676 58.4185 6.31216 59.0457 7.09587 59.0457H12.7723C13.556 59.0457 14.1914 58.4185 14.1914 57.6449C14.1914 56.8713 13.556 56.2441 12.7723 56.2441Z\"/>\n                    <path d=\"M78.051 56.2441H18.4484C17.6647 56.2441 17.0293 56.8713 17.0293 57.6449C17.0293 58.4185 17.6647 59.0457 18.4484 59.0457H78.051C78.8347 59.0457 79.4701 58.4185 79.4701 57.6449C79.4701 56.8713 78.8347 56.2441 78.051 56.2441Z\"/>\n                </svg>\n                <span class=\"title\">\n                    Bussines\n                </span>\n            </a>\n        </div>\n    </div>\n</section>\n\n<div class=\"content\">\n    <div class=\"content__element content__element-reverse\">\n        <img src=\"../assets/images/content.jpg\" alt=\"\">\n        <div class=\"content__element-box\">\n            <div class=\"title\">\n                Aliquam erat volutpat\n            </div>\n            <div class=\"paragraph\">\n                Phasellus ultrices nulla quis nibh. Quisque a lectus. Donec consectetuer ligula vulputate sem tristique cursus. Nam nulla quam, gravida non, commodo a, sodales sit amet, nisi.\n                Phasellus ultrices nulla quis nibh. Quisque a lectus. Donec consectetuer ligula vulputate sem tristique cursus. Nam nulla quam, gravida non, commodo a, sodales sit amet, nisi.\n            </div>\n        </div>\n    </div>\n</div>\n\n<div class=\"content\">\n    <div class=\"content__element\">\n        <div class=\"content__element-box\">\n            <div class=\"title\">\n                Aliquam erat volutpat\n            </div>\n            <div class=\"paragraph\">\n                Phasellus ultrices nulla quis nibh. Quisque a lectus. Donec consectetuer ligula vulputate sem tristique cursus. Nam nulla quam, gravida non, commodo a, sodales sit amet, nisi.\n                Phasellus ultrices nulla quis nibh. Quisque a lectus. Donec consectetuer ligula vulputate sem tristique cursus. Nam nulla quam, gravida non, commodo a, sodales sit amet, nisi.\n                Phasellus ultrices nulla quis nibh. Quisque a lectus.\n            </div>\n        </div>\n        <img src=\"../assets/images/content.jpg\" alt=\"\">\n\n    </div>\n</div>\n\n<div class=\"content\">\n    <div class=\"content__element content__element-reverse\">\n        <img src=\"../assets/images/content.jpg\" alt=\"\">\n        <div class=\"content__element-box\">\n            <div class=\"title\">\n                Aliquam erat volutpat\n            </div>\n            <div class=\"paragraph\">\n                Phasellus ultrices nulla quis nibh. Quisque a lectus. Donec consectetuer ligula vulputate sem tristique cursus. Nam nulla quam, gravida non, commodo a, sodales sit amet, nisi.\n                Phasellus ultrices nulla quis nibh. Quisque a lectus. Donec consectetuer ligula vulputate sem tristique cursus. Nam nulla quam, gravida non, commodo a, sodales sit amet, nisi.\n            </div>\n        </div>\n    </div>\n</div>\n\n<section class=\"getapp\">\n    <div class=\"getapp-container\">\n        <div class=\"left\">\n            <h2>Get our application</h2>\n            <p class=\"description\">\n                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.\n            </p>\n            <div class=\"buttons\">\n                <a href=\"\">\n                    <img src=\"../assets/images/googlestore.svg\" alt=\"\">\n                </a>\n                <a href=\"\">\n                    <img src=\"../assets/images/appstore.svg\" alt=\"\">\n                </a>\n            </div>\n        </div>\n        <div class=\"right\">\n            <div class=\"img\">\n                <img src=\"../assets/images/getapp.png\" alt=\"get our applicaton \">\n            </div>\n        </div>\n    </div>\n</section>\n\n<div class=\"getintouch\">\n    <div class=\"getintouch__title\">\n        Get in Touch Now\n    </div>\n    <form action=\"\" class=\"getintouch__form\">\n        <label for=\"\">\n            <span>Name</span>\n            <input type=\"text\" required>\n        </label>\n        <label for=\"\">\n            <span>Username or e-mail</span>\n            <input type=\"email\" required>\n        </label>\n        <label for=\"\">\n            <span>Telephone</span>\n            <input type=\"number\" required>\n        </label>\n        <label for=\"\">\n            <span>Nature of qnquiry</span>\n            <input type=\"text\">\n        </label>\n        <label for=\"\">\n            <span>Message</span>\n            <textarea type=\"text\" class=\"message\" required></textarea>\n        </label>\n        <input type=\"submit\" class=\"send\" value=\"send\">\n    </form>\n</div>\n"

/***/ }),

/***/ "./src/app/pages/public/how-it-works/how-it-works.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/pages/public/how-it-works/how-it-works.component.ts ***!
  \*********************************************************************/
/*! exports provided: HowItWorksComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HowItWorksComponent", function() { return HowItWorksComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HowItWorksComponent = /** @class */ (function () {
    function HowItWorksComponent() {
    }
    HowItWorksComponent.prototype.ngOnInit = function () {
    };
    HowItWorksComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-how-it-works',
            template: __webpack_require__(/*! ./how-it-works.component.html */ "./src/app/pages/public/how-it-works/how-it-works.component.html"),
            styles: [__webpack_require__(/*! ./how-it-works.component.css */ "./src/app/pages/public/how-it-works/how-it-works.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HowItWorksComponent);
    return HowItWorksComponent;
}());



/***/ }),

/***/ "./src/app/pages/public/index/index.component.css":
/*!********************************************************!*\
  !*** ./src/app/pages/public/index/index.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3B1YmxpYy9pbmRleC9pbmRleC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/public/index/index.component.html":
/*!*********************************************************!*\
  !*** ./src/app/pages/public/index/index.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"header\">\n    <div class=\"headerbox\">\n        <div class=\"headerbox-container\">\n            <h1>Make your life easier with us</h1>\n            <div class=\"description\">\n                Lorem Ipsum is simply dummy text of the printing and typesetting industry.\n            </div>\n            <a [routerLink]=\"'signup'\" class=\"header-sign\">\n                Sign up free\n            </a>\n        </div>\n    </div>\n</div>\n\n<section class=\"features\">\n    <h2>Our Features</h2>\n    <div class=\"features-container\">\n        <div class=\"features__item\">\n            <img src=\"../assets/images/24-hours.svg\" alt=\"\">\n            <p>Open all week</p>\n        </div>\n        <div class=\"features__item\">\n            <img src=\"../assets/images/location-pin.svg\" alt=\"\">\n            <p>We collect and deliver to over 100 cities</p>\n        </div>\n        <div class=\"features__item\">\n            <img src=\"../assets/images/clothes.svg\" alt=\"\">\n            <p>We put a Quality Guarantee an all you items</p>\n        </div>\n        <div class=\"features__item\">\n            <img src=\"../assets/images/stars.svg\" alt=\"\">\n            <p>Read our 100s of five-star reviews on Trustpilot</p>\n        </div>\n    </div>\n</section>\n\n<section class=\"about\" id=\"about\">\n    <div class=\"about-container\">\n        <div class=\"about-box\">\n            <h2>About us</h2>\n            <p>Phasellus ultrices nulla quis nibh. Quisque a lectus. Donec consectetuer ligula vulputate sem tristique cursus. Nam nulla quam, gravida non, commodo a, sodales sit amet, nisi. Nam nulla quam, gravida non, commodo a, sodales sit amet, nisi.</p>\n        </div>\n    </div>\n</section>\n\n<section class=\"ordernow\">\n    <div class=\"ordernow-container\">\n        <h2>Order Now</h2>\n        <div class=\"ordernow-container__box\">\n            <a href=\"#\" class=\"ordernow-container__box-item\">\n                <svg width=\"63\" class=\"icon\" height=\"73\" viewBox=\"0 0 63 73\" xmlns=\"http://www.w3.org/2000/svg\">\n                    <path d=\"M62.9962 54.854C62.3167 40.9047 54.1017 15.4666 51.6004 8.00236C51.1515 6.66322 49.8848 5.76387 48.4491 5.76387H42.4523L38.1319 0.586531C38.1291 0.583783 38.1263 0.581034 38.1235 0.577736C38.1218 0.575537 38.1201 0.573338 38.1184 0.571689C38.0916 0.540354 38.0625 0.511218 38.0322 0.483732C38.0205 0.472738 38.0082 0.463392 37.9959 0.453497C37.9729 0.433707 37.9488 0.415016 37.9242 0.397975C37.9097 0.38753 37.8951 0.378184 37.88 0.368289C37.8537 0.351797 37.8268 0.336955 37.7994 0.322662C37.7865 0.316065 37.7742 0.308919 37.7608 0.302872C37.721 0.284181 37.6796 0.267689 37.6376 0.254495C37.6264 0.250647 37.6152 0.248449 37.604 0.24515C37.571 0.235805 37.5374 0.227559 37.5033 0.220962C37.4882 0.218213 37.4736 0.216015 37.4585 0.213816C37.4255 0.208868 37.3925 0.20557 37.3589 0.203921C37.3455 0.203371 37.3326 0.202271 37.3192 0.202271C37.3136 0.202271 37.308 0.201172 37.3024 0.201172H25.6983C25.6927 0.201172 25.6871 0.202271 25.6821 0.202271C25.6681 0.202271 25.6541 0.203371 25.6401 0.20447C25.6076 0.206119 25.5751 0.208868 25.5432 0.213816C25.527 0.216015 25.5113 0.218213 25.4957 0.221512C25.4632 0.227559 25.4313 0.235255 25.3994 0.2446C25.3865 0.247899 25.3742 0.250647 25.3619 0.254495C25.3205 0.268239 25.2796 0.284181 25.2404 0.302322C25.2259 0.308919 25.2125 0.317165 25.1979 0.324311C25.1722 0.338054 25.1464 0.352347 25.1218 0.367739C25.1061 0.377635 25.0904 0.388079 25.0748 0.398524C25.0513 0.415566 25.0283 0.433707 25.0054 0.452398C24.993 0.462842 24.9796 0.472738 24.9673 0.484282C24.9371 0.511218 24.9085 0.540354 24.8817 0.571689C24.88 0.573338 24.8789 0.575537 24.8772 0.577736C24.8744 0.581034 24.871 0.583783 24.8682 0.586531L20.5478 5.76387H14.5509C13.1147 5.76387 11.8486 6.66322 11.3997 8.00236C11.0163 9.1469 10.4034 10.9989 9.66405 13.3204C9.48718 13.8762 9.8023 14.4666 10.3676 14.6403C10.9329 14.8135 11.5346 14.5051 11.7115 13.9499C12.4475 11.6399 13.0565 9.79887 13.4377 8.66094C13.5961 8.18817 14.0433 7.87043 14.5509 7.87043H19.9696L19.8834 14.6887C19.8761 15.2753 20.1028 15.8283 20.5226 16.2455C20.9424 16.6628 21.5026 16.8926 22.0999 16.8926H22.6064C22.6154 16.8926 22.6394 16.8926 22.6607 16.9173C22.6825 16.942 22.6786 16.9651 22.6769 16.9745L22.3428 18.9969C22.242 19.6082 22.4122 20.2349 22.809 20.7165L30.4279 29.947V70.148C25.1055 70.131 19.922 68.6093 17.8538 67.9233C17.4867 67.8012 17.2062 67.4934 17.1229 67.1201C15.2411 58.6939 18.3178 32.8946 18.3492 32.6351C18.4158 32.0815 18.0324 31.5731 17.4744 31.4746C16.9152 31.3762 16.3756 31.7215 16.2419 32.2624L10.5551 55.2559C10.4331 55.7484 9.98813 56.092 9.47207 56.092H3.26032C2.95135 56.092 2.6631 55.9711 2.44984 55.7512C2.23995 55.5346 2.13192 55.252 2.14648 54.9546C2.59985 45.6422 6.56601 30.8458 9.81293 20.0727C9.98141 19.5148 9.65677 18.9288 9.08922 18.7633C8.52111 18.5984 7.92445 18.9167 7.75597 19.4746C4.47546 30.3587 0.467324 45.3316 0.00387746 54.854C-0.0392209 55.7325 0.278139 56.567 0.897187 57.2047C1.51064 57.8369 2.37148 58.1986 3.26032 58.1986H9.47151C10.9805 58.1986 12.283 57.1931 12.6395 55.7528L14.8711 46.7285C14.1507 56.8699 14.2034 63.8822 15.0273 67.5709C15.2707 68.6621 16.0907 69.562 17.1671 69.9188C19.3511 70.6439 24.8481 72.2551 30.527 72.2551C30.8505 72.2551 31.1757 72.2496 31.4998 72.2386C31.8244 72.2491 32.149 72.2551 32.4731 72.2551C38.1515 72.2551 43.649 70.6439 45.833 69.9193C46.9094 69.5626 47.7288 68.6627 47.9728 67.5714C48.3036 66.091 48.5118 64.0455 48.5919 61.4909L48.5986 61.2567C48.6159 60.6757 48.1497 60.1902 47.557 60.1738C46.9592 60.1562 46.4711 60.6152 46.4543 61.1968L46.4476 61.4282C46.3715 63.8509 46.18 65.7661 45.8772 67.1201C45.7927 67.4994 45.5196 67.7996 45.1468 67.9233C43.0787 68.6093 37.8957 70.131 32.5727 70.148V29.947L40.1916 20.7165C40.5885 20.2355 40.7586 19.6088 40.6579 18.9969L40.3237 16.9739C40.322 16.9651 40.3181 16.942 40.3394 16.9173C40.3612 16.8926 40.3853 16.8926 40.3942 16.8926H40.9008C41.498 16.8926 42.0577 16.6628 42.4781 16.2455C42.8973 15.8277 43.1245 15.2747 43.1173 14.6882L43.0305 7.87043H48.4497C48.9568 7.87043 49.4046 8.18817 49.563 8.66094C52.0431 16.0614 60.187 41.2708 60.8536 54.9552C60.8682 55.252 60.7601 55.5351 60.5502 55.7517C60.3364 55.9711 60.0487 56.0926 59.7398 56.0926H53.5286C53.0125 56.0926 52.567 55.7484 52.445 55.2559L46.7588 32.263C46.6245 31.7215 46.0832 31.3762 45.5263 31.4746C44.9683 31.5736 44.5843 32.0821 44.6515 32.6357C44.6655 32.7528 46.0675 44.4647 46.4095 54.6693C46.4291 55.2509 46.9284 55.7023 47.5167 55.6874C48.1088 55.6682 48.5728 55.1817 48.5533 54.6001C48.4665 51.9998 48.3109 49.3023 48.1273 46.7225L50.3606 55.7534C50.7171 57.1937 52.0196 58.1991 53.5286 58.1991H59.7398C60.628 58.1991 61.4895 57.8374 62.1029 57.2052C62.7214 56.5675 63.0387 55.7325 62.9962 54.854ZM30.4273 26.6013L24.4747 19.3894C24.4619 19.374 24.4568 19.3537 24.4602 19.3339L24.7938 17.3109C24.8979 16.6798 24.716 16.0388 24.294 15.5518C23.8725 15.0647 23.2568 14.7855 22.6058 14.7855H22.0993C22.092 14.7855 22.0696 14.7855 22.0484 14.7646C22.0277 14.7437 22.0277 14.7217 22.0277 14.7145L22.1234 7.19921L25.0188 3.72933L25.4755 6.5038L25.8936 9.0441C25.9916 9.63835 26.1265 10.2238 26.2899 10.7999C26.4091 11.2216 26.5457 11.6377 26.6996 12.0478C26.9957 12.8383 27.3523 13.6074 27.7737 14.349L30.4273 19.0112V26.6013ZM31.4998 16.5776L29.6465 13.321C29.271 12.6608 28.9547 11.9752 28.6933 11.271C28.5993 11.0171 28.5098 10.7614 28.4308 10.5025C28.2517 9.91597 28.1118 9.31731 28.0116 8.70821L27.5577 5.95243L26.9577 2.30773H36.0419L35.3971 6.22619L34.9885 8.70821C34.7209 10.3321 34.1707 11.884 33.353 13.321L31.4998 16.5776ZM40.9512 14.7646C40.9305 14.7855 40.9081 14.7855 40.9002 14.7855H40.3937C39.7427 14.7855 39.1276 15.0647 38.7056 15.5518C38.2835 16.0388 38.1016 16.6804 38.2057 17.3115L38.5399 19.3339C38.5433 19.3537 38.5377 19.374 38.5248 19.3894L32.5722 26.6013V19.0112L32.7323 18.7309L35.2264 14.3484C36.1656 12.6965 36.7981 10.9121 37.1065 9.04355L37.6348 5.83259L37.9813 3.72933L40.8767 7.19921L40.9719 14.7145C40.9719 14.7217 40.9719 14.7442 40.9512 14.7646Z\"/>\n                </svg>\n                <span class=\"title\">\n                    Tops\n                </span>\n            </a>\n            <a href=\"#\" class=\"ordernow-container__box-item\">\n                <svg width=\"49\" class=\"icon\" height=\"73\" viewBox=\"0 0 49 73\" xmlns=\"http://www.w3.org/2000/svg\">\n                    <path d=\"M47.9112 36.0638C48.5123 36.0638 49 35.5916 49 35.0083V28.5292C49 27.0779 48.6042 25.6459 47.8551 24.3892L44.1106 18.1069C43.5526 17.1707 43.2577 16.1043 43.2577 15.0229V2.31488C43.2577 1.14945 42.2795 0.201172 41.0773 0.201172H35.5301C34.3284 0.201172 33.3502 1.14945 33.3502 2.31488V7.96663C33.3502 12.697 29.38 16.5457 24.5003 16.5457C19.6205 16.5457 15.6504 12.697 15.6504 7.96663V2.31488C15.6504 1.14945 14.6722 0.201172 13.4699 0.201172H7.92273C6.72051 0.201172 5.74229 1.14945 5.74229 2.31488V15.0235C5.74229 16.1048 5.44741 17.1707 4.8894 18.1075L1.14494 24.3898C0.395824 25.6464 0 27.0779 0 28.5292V71.1996C0 71.7829 0.487692 72.2551 1.0888 72.2551H47.9112C48.5123 72.2551 49 71.7829 49 71.1996V41.5759C49 40.9932 48.5123 40.5204 47.9112 40.5204C47.3101 40.5204 46.8224 40.9932 46.8224 41.5759V65.289H17.3868C16.7851 65.289 16.298 65.7617 16.298 66.3445C16.298 66.9272 16.7851 67.3999 17.3868 67.3999H46.8224V70.1442H2.1776V67.3999H10.5636C11.1647 67.3999 11.6524 66.9272 11.6524 66.3445C11.6524 65.7617 11.1647 65.289 10.5636 65.289H2.1776V28.5292C2.1776 27.4479 2.47249 26.3814 3.0305 25.4452L6.77495 19.1629C7.52407 17.9063 7.91989 16.4748 7.91989 15.0229L7.92273 2.31213L13.4728 2.31488V7.96663C13.4728 13.8614 18.4194 18.6566 24.4997 18.6566C30.5806 18.6566 35.5272 13.8614 35.5272 7.96663L35.5301 2.31213L41.0801 2.31488V15.0235C41.0801 16.4748 41.4759 17.9063 42.2251 19.1629L45.9695 25.4452C46.5275 26.3814 46.8224 27.4479 46.8224 28.5292V35.0089C46.8224 35.5916 47.3101 36.0638 47.9112 36.0638Z\"/>\n                </svg>\n                <span class=\"title\">\n                    Tops\n                </span>\n            </a>\n            <a href=\"#\" class=\"ordernow-container__box-item\">\n                <svg width=\"78\" class=\"icon\" height=\"73\" viewBox=\"0 0 78 73\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n                    <path d=\"M77.3112 43.117L70.8988 27.8342C69.2572 23.922 67.6155 20.0099 65.9744 16.0971C65.3918 14.7095 64.8097 13.3212 64.227 11.9336C63.4635 10.1137 62.8436 9.31461 60.8852 8.48108C59.4994 7.89079 58.1142 7.30108 56.7284 6.71079C55.839 6.33223 54.9491 5.95309 54.0597 5.57453C53.4108 4.48844 52.7614 3.40177 52.1125 2.31568C51.8395 1.85837 51.5996 1.28791 51.2544 0.879025C50.4584 -0.0641601 49.6051 0.265984 48.3936 0.2689C44.2978 0.278233 31.9262 0.27065 29.8366 0.269483C28.936 0.2689 26.3748 -0.172652 26.1177 1.19692L23.5376 5.51504C22.5271 5.94551 21.5172 6.37539 20.5072 6.80528C19.0836 7.41191 17.66 8.01795 16.2364 8.62399C14.4931 9.36652 13.9566 10.2035 13.2238 11.9493L11.5644 15.9047L6.88878 27.0467C4.64139 32.4037 2.39341 37.7601 0.146027 43.1164C-0.212681 43.9715 0.107615 44.9416 0.907763 45.4234L6.83382 48.9919C7.13402 49.1734 7.47441 49.2655 7.81775 49.2655C8.0175 49.2655 8.21783 49.234 8.41225 49.171C8.94056 48.9984 9.36309 48.6076 9.57111 48.0983L18.1671 27.0951V70.4536C18.1671 71.4826 19.0151 72.3196 20.0569 72.3196H38.7292H57.4003C58.4428 72.3196 59.2908 71.4826 59.2908 70.4536V60.6981C59.2908 60.0798 58.7832 59.5787 58.1567 59.5787C57.5303 59.5787 57.0227 60.0798 57.0227 60.6981V70.0803H39.8633V10.6877L46.375 16.6973C46.7018 16.9989 47.1207 17.1605 47.5574 17.1605C47.6573 17.1605 47.759 17.1523 47.86 17.1348C48.4019 17.0421 48.8569 16.7119 49.1087 16.2295L53.5154 7.78113L60.8793 10.9169L57.0936 20.9443C57.0812 20.9764 57.0712 21.0085 57.0623 21.0411C57.0588 21.0534 57.0564 21.0662 57.0534 21.0785C57.0487 21.0995 57.0434 21.1199 57.0398 21.1409C57.0369 21.1549 57.0357 21.1689 57.0339 21.1829C57.031 21.2021 57.028 21.222 57.0263 21.2412C57.0251 21.2558 57.0251 21.2704 57.0245 21.2849C57.0239 21.3019 57.0221 21.3182 57.0221 21.3351V53.6834C57.0221 54.3017 57.5297 54.8027 58.1562 54.8027C58.7832 54.8027 59.2908 54.3017 59.2908 53.6834V27.0951L61.8922 33.4524C62.1268 34.0252 62.7874 34.3023 63.3689 34.0707C63.9493 33.8392 64.2299 33.187 63.9953 32.6137L59.3729 21.3188L60.6269 17.9975L62.3744 13.3691L75.0916 43.6787L69.8227 46.8518L66.6121 39.0066C66.3775 38.4332 65.7168 38.1561 65.1353 38.3877C64.555 38.6192 64.2743 39.2714 64.5089 39.8447L67.8862 48.0983C68.0948 48.6076 68.5173 48.9984 69.045 49.171C69.2394 49.234 69.4398 49.2655 69.6395 49.2655C69.9829 49.2655 70.3232 49.1734 70.6235 48.9919L76.5495 45.4234C77.3497 44.9416 77.67 43.971 77.3112 43.117ZM27.6926 2.96721C29.8732 4.23996 34.8473 7.14301 36.9121 8.34867L30.1486 14.5899L25.7673 6.19049L27.6926 2.96721ZM7.63515 46.8518L2.36564 43.6782L15.0835 13.3691L16.8304 17.9975L18.0843 21.3188L7.63515 46.8518ZM37.5946 70.0809H20.4352V21.3351C20.4352 21.3182 20.434 21.3019 20.4328 21.2849C20.4322 21.2704 20.4322 21.2558 20.431 21.2412C20.4292 21.222 20.4263 21.2021 20.4233 21.1829C20.4216 21.1689 20.4204 21.1543 20.418 21.1409C20.4139 21.1199 20.4092 21.0995 20.4038 21.0785C20.4009 21.0662 20.3991 21.0534 20.3956 21.0411C20.3861 21.0085 20.3761 20.9758 20.3642 20.9443L16.5786 10.9169L24.027 7.74497L28.4526 16.2295C28.7043 16.7119 29.1594 17.0421 29.7019 17.1348C29.8029 17.1523 29.904 17.1605 30.0044 17.1605C30.4411 17.1605 30.8601 16.9989 31.1863 16.6973L37.5946 10.7839V70.0809ZM38.7806 6.77787L31.4653 2.50758H46.096L38.7806 6.77787ZM47.4127 14.5899L40.6096 8.31134L49.8415 2.9223L51.7946 6.19049L47.4127 14.5899Z\" />\n                </svg>\n                <span class=\"title\">\n                    Shirt\n                </span>\n            </a>\n            <a href=\"#\" class=\"ordernow-container__box-item\">\n                <svg width=\"43\" class=\"icon\" height=\"73\" viewBox=\"0 0 43 73\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n                    <path d=\"M39.7797 8.74449C39.7986 8.66561 39.8097 8.58343 39.8097 8.49907V1.95421C39.8097 0.9873 39.0132 0.201172 38.0336 0.201172H4.01667C3.03762 0.201172 2.24062 0.9873 2.24062 1.95421V8.49907C2.24062 8.58343 2.25227 8.66561 2.27114 8.74449L0.44292 58.2256C0.42183 58.8063 0.880828 59.2939 1.46915 59.3153C2.05691 59.335 2.55143 58.883 2.57307 58.3023L4.00834 19.4523C6.58473 18.4454 8.59167 16.3286 9.83768 13.2799C10.4399 11.8074 10.7379 10.4312 10.8817 9.55089H19.9595V20.9506L14.3333 69.902H2.1446L2.33719 64.6834C2.35884 64.1027 1.89928 63.6151 1.31097 63.5938C0.723203 63.5708 0.228684 64.026 0.207594 64.6067L0.00112741 70.1885C-0.0160781 70.6618 0.164302 71.1285 0.497312 71.4693C0.830322 71.81 1.29654 72.0056 1.77607 72.0056H14.6502C15.5543 72.0056 16.3131 71.3367 16.4146 70.4503L21.0251 30.3403L22.3189 41.5942C22.3855 42.1716 22.9144 42.5863 23.4977 42.5212C24.0827 42.4554 24.5029 41.9344 24.4363 41.357L22.0908 20.9506V18.1994H22.128C24.262 18.1994 25.9981 16.5269 25.9981 14.472V9.55089H31.1686C31.3124 10.4312 31.6104 11.8074 32.2126 13.2799C33.4586 16.3286 35.4661 18.4454 38.0425 19.4523L39.9062 69.902H27.7175L25.1733 47.7693C25.1073 47.1919 24.5784 46.7767 23.9945 46.8429C23.41 46.9081 22.9893 47.4291 23.0559 48.0065L25.6357 70.4498C25.7372 71.3367 26.4959 72.0056 27.4006 72.0056H40.2748C40.7543 72.0056 41.22 71.81 41.553 71.4693C41.886 71.1285 42.0669 70.6618 42.0492 70.189L39.7797 8.74449ZM4.09548 17.0895L4.3741 9.55089H8.71821C8.36078 11.4644 7.26573 15.3162 4.09548 17.0895ZM12.4646 7.44725H4.37188V2.30482H12.4646V7.44725ZM23.8668 14.4715C23.8668 15.3671 23.087 16.0952 22.128 16.0952H22.0908V9.55089H23.8668V14.4715ZM27.4544 7.44725H14.5958V2.30482H27.4544V7.44725ZM32.1077 7.44725H29.5857V2.30482H37.6784V7.44725H32.1077ZM33.3348 9.55089H37.6762L37.9548 17.0879C34.7995 15.3162 33.6973 11.4655 33.3348 9.55089Z\"/>\n                </svg>\n                <span class=\"title\">\n                    Trousers\n                </span>\n            </a>\n            <a href=\"#\" class=\"ordernow-container__box-item\">\n                <svg width=\"45\" class=\"icon\" height=\"74\" viewBox=\"0 0 45 74\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n                    <path d=\"M44.2097 71.8084C44.2034 71.7407 43.5636 64.9422 41.5674 56.152C38.2832 41.6891 33.8578 32.7762 30.6574 27.7854V23.3819L34.3252 7.69417C34.3625 7.53484 34.3634 7.37138 34.3315 7.21433L34.3322 7.21418L33.0999 1.13171C32.992 0.598519 32.5178 0.214844 31.9669 0.214844H28.2696C27.6316 0.214844 27.1142 0.725415 27.1142 1.35534V7.18331C25.4148 7.90244 23.6377 9.13256 22.1569 11.2113C22.1458 11.2269 22.1086 11.2271 22.1072 11.2271C22.1056 11.2271 22.0685 11.2269 22.0574 11.2113C20.5768 9.13256 18.7999 7.90258 17.1005 7.18346V1.35534C17.1005 0.725558 16.5832 0.214844 15.945 0.214844H12.2478C11.6971 0.214844 11.2229 0.598519 11.1148 1.13157L9.88226 7.21404L9.88298 7.21418C9.85113 7.37124 9.85199 7.5347 9.88932 7.69403L13.5571 23.3819L13.5572 27.7853C10.3567 32.7761 5.93143 41.6889 2.64705 56.1518C0.650877 64.9422 0.0110949 71.7407 0.00475324 71.8082C-0.0246488 72.1275 0.0833021 72.4439 0.302232 72.6806C0.521162 72.9172 0.830748 73.0519 1.15547 73.0519H43.0592C43.3837 73.0519 43.6935 72.9172 43.9124 72.6806C44.1312 72.444 44.2391 72.1275 44.2097 71.8084ZM29.425 2.4957H31.0197L31.7741 6.2195C31.1238 6.22903 30.317 6.29163 29.4248 6.47187V2.4957H29.425ZM13.1949 2.4957H14.7895V6.47201C13.8975 6.29163 13.0905 6.22903 12.4404 6.21964L13.1949 2.4957ZM12.45 8.50349C14.2796 8.54389 17.7394 9.11535 20.1669 12.5232C20.6061 13.1397 21.3315 13.5079 22.1072 13.5079C22.8829 13.5079 23.608 13.1397 24.0473 12.5232C26.4914 9.09202 29.9388 8.52952 31.766 8.49709L28.5828 22.1115H15.6317L12.45 8.50349ZM28.3467 24.3925V26.9775H15.8682V24.3925H28.3467ZM2.44311 70.7712C3.08274 65.3954 6.14229 43.7972 15.3496 29.2585H17.063L14.8028 43.759C14.7058 44.3815 15.1383 44.9639 15.769 45.0596C15.8287 45.0686 15.8878 45.073 15.9461 45.073C16.5068 45.073 16.9988 44.6696 17.0866 44.1059L19.401 29.2585H20.9517V52.4478C20.9517 53.0776 21.469 53.5883 22.1072 53.5883C22.7452 53.5883 23.2626 53.0777 23.2626 52.4478V29.2585H24.8133L27.1274 44.1059C27.2152 44.6699 27.7074 45.073 28.2679 45.073C28.3263 45.073 28.3855 45.0686 28.445 45.0596C29.0757 44.9639 29.5084 44.3816 29.4113 43.759L27.1512 29.2585H28.8647C38.0663 43.7887 41.1301 65.3937 41.7711 70.7712H2.44311Z\" />\n                </svg>\n                <span class=\"title\">\n                    Dresses\n                </span>\n            </a>\n            <a href=\"#\" class=\"ordernow-container__box-item\">\n                <svg width=\"72\" class=\"icon\" height=\"72\" viewBox=\"0 0 72 72\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n                    <path d=\"M71.7058 42.3334C70.7653 25.6434 67.6861 13.4705 62.5522 6.15249C62.5489 6.14761 62.5451 6.14382 62.5418 6.13894C62.5187 6.10803 62.4951 6.07821 62.4692 6.04948C62.4654 6.04568 62.4621 6.04134 62.4588 6.03755C62.4297 6.00664 62.3978 5.97736 62.3654 5.95025C62.3561 5.94266 62.3467 5.93561 62.3374 5.92857C62.3121 5.90905 62.2863 5.89007 62.2588 5.87272C62.2484 5.86621 62.238 5.85916 62.227 5.85266C62.1918 5.83205 62.1561 5.81308 62.1187 5.79627C62.1171 5.79519 62.1154 5.7941 62.1138 5.79356C62.0814 5.77946 62.0479 5.76645 62.0138 5.7556L45.3366 0.352062C44.0489 -0.0648884 42.6601 0.27019 41.7113 1.22608L36.0001 6.98531L30.2883 1.22608C29.3406 0.27019 27.9512 -0.0648884 26.6635 0.352062L21.8675 1.906C21.3138 2.08547 21.0122 2.67375 21.194 3.22029C21.3758 3.76682 21.9719 4.06449 22.5257 3.88502L27.3217 2.33163C27.8403 2.16409 28.3984 2.29855 28.7797 2.68297L34.9326 8.88734L34.9233 36.476H26.4707C25.55 36.476 24.7819 37.1564 24.6841 38.0592C24.0051 44.307 19.1635 48.3219 16.3711 50.1426V20.1412C16.3711 20.0187 16.3491 19.8967 16.3063 19.7812L11.6833 7.39792L16.3744 5.87814C16.9281 5.69922 17.2297 5.11039 17.0479 4.56385C16.8661 4.01732 16.27 3.71965 15.7162 3.89912L9.98631 5.7556C9.95225 5.76699 9.91874 5.77946 9.88632 5.79356C9.88358 5.79464 9.88138 5.79627 9.87863 5.79735C9.84237 5.81362 9.80721 5.8326 9.77315 5.85266C9.76217 5.85916 9.75118 5.86621 9.74019 5.87326C9.71327 5.89061 9.688 5.90905 9.66328 5.92802C9.65339 5.93561 9.6435 5.94266 9.63416 5.9508C9.60175 5.97791 9.57043 6.00664 9.54132 6.03755C9.53747 6.04189 9.53418 6.04622 9.53033 6.05056C9.50451 6.07875 9.48089 6.10858 9.45836 6.13894C9.45507 6.14382 9.45122 6.14761 9.44738 6.15249C4.31407 13.4705 1.2343 25.6434 0.294328 42.3334C-0.426445 55.1314 0.370691 66.4498 0.632191 69.614C0.707454 70.5271 1.49415 71.2428 2.42368 71.2428H8.99854C9.84347 71.2428 10.5835 70.6502 10.7576 69.8342L14.2604 53.4115V69.4687C14.2604 70.4469 15.0669 71.2428 16.0579 71.2428H55.9416C56.9327 71.2428 57.7392 70.4469 57.7392 69.4687V53.4115L61.242 69.8342C61.4161 70.6507 62.1561 71.2428 63.001 71.2428H69.5759C70.5054 71.2428 71.2921 70.5276 71.3674 69.614C71.6289 66.4498 72.4266 55.1314 71.7058 42.3334ZM14.2604 43.3001L8.74473 69.1597H2.71265C2.43357 65.6788 1.70841 54.7562 2.40171 42.4488C2.81099 35.1812 3.64988 28.6922 4.8953 23.1618C6.18687 17.427 7.92123 12.7022 10.0621 9.08036L14.2604 20.3272V43.3001ZM16.559 52.4882C24.7973 47.7233 26.4289 40.9551 26.7487 38.5586H34.8914V62.1089H16.559V52.4882ZM34.9118 69.1597H16.3711V64.1921H34.9134L34.9118 69.1597ZM55.629 69.1597H37.0884L37.0867 64.1921H43.2699C43.8528 64.1921 44.3252 63.7258 44.3252 63.1505C44.3252 62.5752 43.8528 62.1089 43.2699 62.1089H37.1087V38.5586H45.2514C45.5712 40.9551 47.2028 47.7233 55.4412 52.4882V62.1089H49.8359C49.2531 62.1089 48.7806 62.5752 48.7806 63.1505C48.7806 63.7258 49.2531 64.1921 49.8359 64.1921H55.629V69.1597ZM55.6939 19.7812C55.6505 19.8967 55.6285 20.0187 55.6285 20.1412V50.1562C48.6795 45.7308 47.5099 39.8425 47.316 38.0592C47.2182 37.1564 46.4502 36.476 45.5294 36.476H37.0768L37.0675 8.88734L43.2199 2.68297C43.6017 2.29801 44.1609 2.16409 44.6785 2.33163L60.3168 7.39792L55.6939 19.7812ZM69.2875 69.1597H63.2554L57.7392 43.3001V20.3272L61.938 9.08036C64.0783 12.7022 65.8133 17.427 67.1048 23.1618C68.3502 28.6922 69.1891 35.1818 69.5984 42.4488C70.2917 54.7562 69.566 65.6788 69.2875 69.1597Z\"/>\n                </svg>\n                <span class=\"title\">\n                    Outdoor\n                </span>\n            </a>\n            <a href=\"#\" class=\"ordernow-container__box-item\">\n                <svg width=\"44\" class=\"icon\" height=\"74\" viewBox=\"0 0 44 74\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n                    <path d=\"M26.5303 13.5013C26.9426 13.0942 27.1833 12.5823 27.2581 12.0518H43.9622L42.6267 0.188477H1.3355L0 12.0518H16.7042C16.779 12.5823 17.0196 13.0942 17.4321 13.5013L18.9313 14.9811L12.097 61.9312L19.3668 72.182C19.9632 73.0232 20.9406 73.5255 21.9811 73.5255C23.0216 73.5255 23.999 73.0232 24.5954 72.182L31.8652 61.9312L25.0309 14.9811L26.5303 13.5013ZM41.5205 9.89485H26.5312C26.5309 9.89456 26.5306 9.89427 26.5303 9.89384L23.8084 7.20741C23.5895 6.99128 23.3395 6.8249 23.0738 6.70267V2.34545H40.6707L41.5205 9.89485ZM3.29148 2.34545H20.8885V6.70282C20.6227 6.82505 20.3727 6.99128 20.1536 7.20755L17.4319 9.89399C17.4316 9.89427 17.4313 9.89456 17.431 9.89485H2.4417L3.29148 2.34545ZM18.9774 11.4191L21.6989 8.73282C21.8545 8.57924 22.108 8.57924 22.2633 8.73282L24.9849 11.4191C25.1405 11.5727 25.1405 11.8226 24.9849 11.9762L22.2633 14.6625C22.1077 14.8161 21.8542 14.8161 21.6989 14.6625L18.9772 11.9762C18.8216 11.8226 18.8216 11.5727 18.9774 11.4191ZM22.8051 70.9451C22.617 71.2102 22.309 71.3685 21.9811 71.3685C21.6532 71.3685 21.3452 71.2102 21.1571 70.9451L14.383 61.3933L20.8898 16.693C21.2349 16.8515 21.6076 16.9336 21.9811 16.9336C22.3546 16.9336 22.7273 16.8515 23.0724 16.693L29.5792 61.3933L22.8051 70.9451Z\"/>\n                    <path d=\"M7.77661 5.58105H5.59131V7.73804H7.77661V5.58105Z\"/>\n                    <path d=\"M38.3708 5.58105H36.1855V7.73804H38.3708V5.58105Z\"/>\n                </svg>\n                <span class=\"title\">\n                    Tie\n                </span>\n            </a>\n            <a href=\"#\" class=\"ordernow-container__box-item\">\n                <svg width=\"73\" class=\"icon\" height=\"74\" viewBox=\"0 0 73 74\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n                    <path d=\"M27.1237 32.6416C26.5251 32.6416 26.0396 33.1209 26.0396 33.7116V37.8491C26.0396 38.4399 26.5251 38.9192 27.1237 38.9192C27.7222 38.9192 28.2078 38.4399 28.2078 37.8491V33.7116C28.2078 33.1209 27.7222 32.6416 27.1237 32.6416Z\"/>\n                    <path d=\"M10.3566 13.5933H27.0731C27.6722 13.5933 28.1572 13.114 28.1572 12.5232C28.1572 11.9319 27.6722 11.4531 27.0731 11.4531H10.3566C9.75805 11.4531 9.27246 11.9319 9.27246 12.5232C9.27246 13.114 9.75805 13.5933 10.3566 13.5933Z\"/>\n                    <path d=\"M10.3566 18.5093H27.0731C27.6722 18.5093 28.1572 18.03 28.1572 17.4392C28.1572 16.8479 27.6722 16.3691 27.0731 16.3691H10.3566C9.75805 16.3691 9.27246 16.8479 9.27246 17.4392C9.27246 18.03 9.75805 18.5093 10.3566 18.5093Z\"/>\n                    <path d=\"M10.3566 52.9067H27.0731C27.6722 52.9067 28.1572 52.428 28.1572 51.8367C28.1572 51.2459 27.6722 50.7666 27.0731 50.7666H10.3566C9.75805 50.7666 9.27246 51.2459 9.27246 51.8367C9.27246 52.428 9.75805 52.9067 10.3566 52.9067Z\"/>\n                    <path d=\"M10.3566 57.8218H27.0731C27.6722 57.8218 28.1572 57.3425 28.1572 56.7517C28.1572 56.1604 27.6722 55.6816 27.0731 55.6816H10.3566C9.75805 55.6816 9.27246 56.1604 9.27246 56.7517C9.27246 57.3425 9.75805 57.8218 10.3566 57.8218Z\"/>\n                    <path d=\"M63.469 33.7116C63.469 33.1209 62.984 32.6416 62.3849 32.6416C61.7864 32.6416 61.3008 33.1209 61.3008 33.7116V37.8491C61.3008 38.4399 61.7864 38.9192 62.3849 38.9192C62.984 38.9192 63.469 38.4399 63.469 37.8491V33.7116Z\"/>\n                    <path d=\"M45.6178 13.5933H62.3344C62.9334 13.5933 63.4185 13.114 63.4185 12.5232C63.4185 11.9319 62.9334 11.4531 62.3344 11.4531H45.6178C45.0193 11.4531 44.5337 11.9319 44.5337 12.5232C44.5337 13.114 45.0193 13.5933 45.6178 13.5933Z\"/>\n                    <path d=\"M45.6178 18.5093H62.3344C62.9334 18.5093 63.4185 18.03 63.4185 17.4392C63.4185 16.8479 62.9334 16.3691 62.3344 16.3691H45.6178C45.0193 16.3691 44.5337 16.8479 44.5337 17.4392C44.5337 18.03 45.0193 18.5093 45.6178 18.5093Z\"/>\n                    <path d=\"M62.3349 50.7666H45.6178C45.0193 50.7666 44.5337 51.2459 44.5337 51.8367C44.5337 52.428 45.0193 52.9067 45.6178 52.9067H62.3344C62.9334 52.9067 63.4185 52.428 63.4185 51.8367C63.4185 51.2459 62.9334 50.7666 62.3349 50.7666Z\"/>\n                    <path d=\"M62.3349 55.6816H45.6178C45.0193 55.6816 44.5337 56.1604 44.5337 56.7517C44.5337 57.3425 45.0193 57.8218 45.6178 57.8218H62.3344C62.9334 57.8218 63.4185 57.3425 63.4185 56.7517C63.4185 56.1604 62.9334 55.6816 62.3349 55.6816Z\"/>\n                    <path d=\"M68.5085 0.214844H39.445C38.2174 0.214844 37.1119 0.739281 36.3457 1.57359C35.58 0.739281 34.4739 0.214844 33.2464 0.214844H4.18339C1.87685 0.214844 0 2.06737 0 4.34402V64.9313C0 67.208 1.87685 69.0605 4.18339 69.0605H4.4962V70.9938C4.4962 72.245 5.52779 73.2638 6.79597 73.2638H9.1409C10.4091 73.2638 11.4407 72.245 11.4407 70.9938V69.0605H25.9891V70.9938C25.9891 72.2456 27.0213 73.2638 28.2894 73.2638H30.6338C31.902 73.2638 32.9336 72.2456 32.9336 70.9938V69.0605H33.2469C34.4745 69.0605 35.58 68.5361 36.3457 67.7023C37.1119 68.5361 38.2174 69.0605 39.445 69.0605H39.7578V70.9938C39.7578 72.2456 40.7899 73.2638 42.0581 73.2638H44.4025C45.6706 73.2638 46.7022 72.2456 46.7022 70.9938V69.0605H61.2512V70.9938C61.2512 72.2456 62.2828 73.2638 63.551 73.2638H65.8954C67.1635 73.2638 68.1951 72.2456 68.1951 70.9938V69.0605H68.5085C70.815 69.0605 72.6919 67.2085 72.6919 64.9313V4.34402C72.6919 2.06737 70.815 0.214844 68.5085 0.214844V0.214844ZM9.27246 70.9938C9.27246 71.0652 9.21318 71.1237 9.1409 71.1237H6.79597C6.72369 71.1237 6.66441 71.0652 6.66441 70.9938V69.0605H9.27246V70.9938ZM30.7654 70.9938C30.7654 71.0652 30.7066 71.1237 30.6338 71.1237H28.2894C28.2166 71.1237 28.1573 71.0652 28.1573 70.9938V69.0605H30.7654V70.9938ZM33.2464 66.9204H4.18339C3.07219 66.9204 2.16821 66.0281 2.16821 64.9313V4.34402C2.16821 3.24722 3.07219 2.35495 4.18339 2.35495H33.2464C34.3576 2.35495 35.2616 3.24722 35.2616 4.34402V64.9313C35.2616 66.0281 34.3576 66.9204 33.2464 66.9204ZM44.534 70.9938C44.534 71.0652 44.4753 71.1237 44.4025 71.1237H42.0581C41.9853 71.1237 41.926 71.0652 41.926 70.9938V69.0605H44.534V70.9938ZM66.0275 70.9938C66.0275 71.0652 65.9682 71.1237 65.8959 71.1237H63.551C63.4782 71.1237 63.4194 71.0652 63.4194 70.9938V69.0605H66.0275V70.9938ZM70.5237 64.9313C70.5237 66.0281 69.6197 66.9204 68.5085 66.9204H39.445C38.3338 66.9204 37.4298 66.0281 37.4298 64.9313V4.34402C37.4298 3.24722 38.3338 2.35495 39.445 2.35495H68.5085C69.6197 2.35495 70.5237 3.24722 70.5237 4.34402V64.9313Z\"/>\n                    <path d=\"M30.8749 4.42773H6.55541C5.29401 4.42773 4.26807 5.44038 4.26807 6.68542V21.6739C4.26807 22.2647 4.75365 22.7439 5.35217 22.7439C5.95125 22.7439 6.43627 22.2647 6.43627 21.6739V6.68542C6.43627 6.62077 6.48991 6.56783 6.55541 6.56783H30.8749C30.9404 6.56783 30.9935 6.62077 30.9935 6.68542V62.5898C30.9935 62.6545 30.9404 62.7074 30.8749 62.7074H6.55541C6.48991 62.7074 6.43627 62.6545 6.43627 62.5898V25.9558C6.43627 25.3644 5.95125 24.8857 5.35217 24.8857C4.75365 24.8857 4.26807 25.3644 4.26807 25.9558V62.5898C4.26807 63.8349 5.29401 64.8475 6.55541 64.8475H30.8749C32.1357 64.8475 33.1617 63.8349 33.1617 62.5898V6.68542C33.1617 5.44038 32.1357 4.42773 30.8749 4.42773Z\"/>\n                    <path d=\"M66.1364 4.42773H41.817C40.5562 4.42773 39.5303 5.44038 39.5303 6.68542V62.5898C39.5303 63.8349 40.5562 64.8475 41.817 64.8475H66.1364C67.3973 64.8475 68.4232 63.8349 68.4232 62.5898V48.6402C68.4232 48.0495 67.9382 47.5702 67.3391 47.5702C66.7406 47.5702 66.255 48.0495 66.255 48.6402V62.5898C66.255 62.6545 66.2019 62.7074 66.1364 62.7074H41.817C41.7515 62.7074 41.6985 62.6545 41.6985 62.5898V6.68542C41.6985 6.62077 41.7515 6.56783 41.817 6.56783H66.1364C66.2019 6.56783 66.255 6.62077 66.255 6.68542V44.3483C66.255 44.9396 66.7406 45.4184 67.3391 45.4184C67.9382 45.4184 68.4232 44.9396 68.4232 44.3483V6.68542C68.4238 5.44038 67.3973 4.42773 66.1364 4.42773Z\"/>\n                </svg>\n                <span class=\"title\">\n                    Bussines\n                </span>\n            </a>\n            <a href=\"#\" class=\"ordernow-container__box-item\">\n                <svg width=\"86\" class=\"icon\" height=\"74\" viewBox=\"0 0 86 74\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n                    <path d=\"M83.7275 42.2366H82.3084V38.0344C82.3047 35.2529 80.6338 32.7372 78.0511 31.6247V10.0199C78.0507 9.46312 77.7165 8.95956 77.1996 8.73685C77.7532 7.86104 78.048 6.85007 78.0511 5.81774C78.0511 2.72337 75.5096 0.214844 72.3746 0.214844C69.2396 0.214844 66.6982 2.72337 66.6982 5.81774C66.704 6.8042 66.9765 7.77122 67.4872 8.61919H17.6594C18.1701 7.77122 18.4426 6.8042 18.4484 5.81774C18.4484 2.72337 15.907 0.214844 12.772 0.214844C9.637 0.214844 7.09555 2.72337 7.09555 5.81774C7.09857 6.85007 7.39339 7.86104 7.94702 8.73685C7.43011 8.95956 7.09591 9.46312 7.09555 10.0199V31.6247C4.51277 32.7372 2.84195 35.2529 2.83822 38.0344V42.2366H1.41911C0.635406 42.2366 0 42.8637 0 43.6373V63.2474C0 64.021 0.635406 64.6481 1.41911 64.6481H2.83822V71.6518C2.83822 72.4253 3.47363 73.0525 4.25733 73.0525H9.93377C10.7175 73.0525 11.3529 72.4253 11.3529 71.6518V64.6481H73.7937V71.6518C73.7937 72.4253 74.4291 73.0525 75.2128 73.0525H80.8893C81.673 73.0525 82.3084 72.4253 82.3084 71.6518V64.6481H83.7275C84.5112 64.6481 85.1466 64.021 85.1466 63.2474V43.6373C85.1466 42.8637 84.5112 42.2366 83.7275 42.2366ZM72.3746 3.01629C73.9422 3.01629 75.2128 4.27046 75.2128 5.81774C75.2128 7.36501 73.9422 8.61919 72.3746 8.61919C70.807 8.61919 69.5364 7.36501 69.5364 5.81774C69.5364 4.27046 70.807 3.01629 72.3746 3.01629ZM12.772 3.01629C14.3396 3.01629 15.6102 4.27046 15.6102 5.81774C15.6102 7.36501 14.3396 8.61919 12.772 8.61919C11.2044 8.61919 9.93377 7.36501 9.93377 5.81774C9.93377 4.27046 11.2044 3.01629 12.772 3.01629ZM9.93377 11.4206H75.2128V31.0308H69.4995C70.4386 29.8256 70.9504 28.3491 70.9555 26.8286V24.0272C70.9509 20.1612 67.7767 17.0281 63.86 17.0235H52.5071C48.5903 17.0281 45.4161 20.1612 45.4115 24.0272V26.8286C45.4167 28.3491 45.9284 29.8256 46.8675 31.0308H38.2791C39.2182 29.8256 39.7299 28.3491 39.7351 26.8286V24.0272C39.7305 20.1612 36.5563 17.0281 32.6395 17.0235H21.2867C17.3699 17.0281 14.1957 20.1612 14.1911 24.0272V26.8286C14.1962 28.3491 14.708 29.8256 15.6471 31.0308H9.93377V11.4206ZM68.1173 24.0272V26.8286C68.1173 29.1494 66.2112 31.0308 63.86 31.0308H52.5071C50.1558 31.0308 48.2497 29.1494 48.2497 26.8286V24.0272C48.2497 21.7063 50.1558 19.825 52.5071 19.825H63.86C66.2112 19.825 68.1173 21.7063 68.1173 24.0272ZM36.8969 24.0272V26.8286C36.8969 29.1494 34.9908 31.0308 32.6395 31.0308H21.2867C18.9354 31.0308 17.0293 29.1494 17.0293 26.8286V24.0272C17.0293 21.7063 18.9354 19.825 21.2867 19.825H32.6395C34.9908 19.825 36.8969 21.7063 36.8969 24.0272ZM5.67644 38.0344C5.67644 35.7136 7.58248 33.8322 9.93377 33.8322H75.2128C77.5641 33.8322 79.4702 35.7136 79.4702 38.0344V42.2366H5.67644V38.0344ZM8.51466 70.251H5.67644V64.6481H8.51466V70.251ZM79.4702 70.251H76.6319V64.6481H79.4702V70.251ZM82.3084 61.8467H2.83822V45.038H82.3084V61.8467Z\"/>\n                    <path d=\"M12.7723 56.2441H7.09587C6.31216 56.2441 5.67676 56.8713 5.67676 57.6449C5.67676 58.4185 6.31216 59.0457 7.09587 59.0457H12.7723C13.556 59.0457 14.1914 58.4185 14.1914 57.6449C14.1914 56.8713 13.556 56.2441 12.7723 56.2441Z\"/>\n                    <path d=\"M78.051 56.2441H18.4484C17.6647 56.2441 17.0293 56.8713 17.0293 57.6449C17.0293 58.4185 17.6647 59.0457 18.4484 59.0457H78.051C78.8347 59.0457 79.4701 58.4185 79.4701 57.6449C79.4701 56.8713 78.8347 56.2441 78.051 56.2441Z\"/>\n                </svg>\n                <span class=\"title\">\n                    Bussines\n                </span>\n            </a>\n        </div>\n    </div>\n</section>\n\n<section class=\"reviews\">\n    <div class=\"reviews-container\">\n        <h2 class=\"reviews-headline\">Our Reviews</h2>\n        <div class=\"reviews-box\">\n            <div class=\"reviews-box__item\">\n                <div class=\"img\">\n                    <img src=\"../assets/images/reviews.jpg\" alt=\"\">\n                </div>\n                <div class=\"title\">\n                    Our Reviews\n                </div>\n                <div class=\"description\">\n                    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.\n                </div>\n            </div>\n            <div class=\"reviews-box__item\">\n                <div class=\"img\">\n                    <img src=\"../assets/images/reviews.jpg\" alt=\"\">\n                </div>\n                <div class=\"title\">\n                    Our Reviews\n                </div>\n                <div class=\"description\">\n                    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.\n                </div>\n            </div>\n            <div class=\"reviews-box__item\">\n                <div class=\"img\">\n                    <img src=\"../assets/images/reviews.jpg\" alt=\"\">\n                </div>\n                <div class=\"title\">\n                    Our Reviews\n                </div>\n                <div class=\"description\">\n                    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.\n                </div>\n            </div>\n        </div>\n    </div>\n</section>\n\n<section class=\"getapp\">\n    <div class=\"getapp-container\">\n        <div class=\"left\">\n            <h2>Get our application</h2>\n            <p class=\"description\">\n                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.\n            </p>\n            <div class=\"buttons\">\n                <a href=\"\">\n                    <img src=\"../assets/images/googlestore.svg\" alt=\"\">\n                </a>\n                <a href=\"\">\n                    <img src=\"../assets/images/appstore.svg\" alt=\"\">\n                </a>\n            </div>\n        </div>\n        <div class=\"right\">\n            <div class=\"img\">\n                <img src=\"../assets/images/getapp.png\" alt=\"get our applicaton \">\n            </div>\n        </div>\n    </div>\n</section>\n\n<section class=\"blog\" id=\"blog\">\n    <h2>Blog</h2>\n    <div class=\"blog__container\">\n        <a href=\"\" class=\"blog__container-item\">\n            <div class=\"img\">\n                <img src=\"../assets/images/blog.jpeg\" alt=\"\">\n            </div>\n            <div class=\"title\">Something</div>\n            <div class=\"date\">01/05/19</div>\n            <div class=\"description\">\n                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.\n            </div>\n        </a>\n        <a href=\"\" class=\"blog__container-item\">\n            <div class=\"img\">\n                <img src=\"../assets/images/blog.jpeg\" alt=\"\">\n            </div>\n            <div class=\"title\">Something</div>\n            <div class=\"date\">01/05/19</div>\n            <div class=\"description\">\n                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.\n            </div>\n        </a>\n        <a href=\"\" class=\"blog__container-item\">\n            <div class=\"img\">\n                <img src=\"../assets/images/blog.jpeg\" alt=\"\">\n            </div>\n            <div class=\"title\">Something</div>\n            <div class=\"date\">01/05/19</div>\n            <div class=\"description\">\n                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.\n            </div>\n        </a>\n    </div>\n</section>\n"

/***/ }),

/***/ "./src/app/pages/public/index/index.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/public/index/index.component.ts ***!
  \*******************************************************/
/*! exports provided: IndexComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndexComponent", function() { return IndexComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var IndexComponent = /** @class */ (function () {
    function IndexComponent() {
    }
    IndexComponent.prototype.ngOnInit = function () {
    };
    IndexComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-index',
            template: __webpack_require__(/*! ./index.component.html */ "./src/app/pages/public/index/index.component.html"),
            styles: [__webpack_require__(/*! ./index.component.css */ "./src/app/pages/public/index/index.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], IndexComponent);
    return IndexComponent;
}());



/***/ }),

/***/ "./src/app/pages/public/init-layout/init-layout.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/pages/public/init-layout/init-layout.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-app-header></app-app-header>\n<router-outlet></router-outlet>\n<app-footer></app-footer>\n"

/***/ }),

/***/ "./src/app/pages/public/init-layout/init-layout.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/pages/public/init-layout/init-layout.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3B1YmxpYy9pbml0LWxheW91dC9pbml0LWxheW91dC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/public/init-layout/init-layout.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/pages/public/init-layout/init-layout.component.ts ***!
  \*******************************************************************/
/*! exports provided: InitLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InitLayoutComponent", function() { return InitLayoutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var InitLayoutComponent = /** @class */ (function () {
    function InitLayoutComponent() {
    }
    InitLayoutComponent.prototype.ngOnInit = function () {
    };
    InitLayoutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-init-layout',
            template: __webpack_require__(/*! ./init-layout.component.html */ "./src/app/pages/public/init-layout/init-layout.component.html"),
            styles: [__webpack_require__(/*! ./init-layout.component.scss */ "./src/app/pages/public/init-layout/init-layout.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], InitLayoutComponent);
    return InitLayoutComponent;
}());



/***/ }),

/***/ "./src/app/pages/public/not-found/not-found.component.css":
/*!****************************************************************!*\
  !*** ./src/app/pages/public/not-found/not-found.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3B1YmxpYy9ub3QtZm91bmQvbm90LWZvdW5kLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/public/not-found/not-found.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/pages/public/not-found/not-found.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "this not found component\n"

/***/ }),

/***/ "./src/app/pages/public/not-found/not-found.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/public/not-found/not-found.component.ts ***!
  \***************************************************************/
/*! exports provided: NotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotFoundComponent", function() { return NotFoundComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NotFoundComponent = /** @class */ (function () {
    function NotFoundComponent() {
    }
    NotFoundComponent.prototype.ngOnInit = function () {
    };
    NotFoundComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-not-found',
            template: __webpack_require__(/*! ./not-found.component.html */ "./src/app/pages/public/not-found/not-found.component.html"),
            styles: [__webpack_require__(/*! ./not-found.component.css */ "./src/app/pages/public/not-found/not-found.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], NotFoundComponent);
    return NotFoundComponent;
}());



/***/ }),

/***/ "./src/app/pages/public/offers/offers.component.css":
/*!**********************************************************!*\
  !*** ./src/app/pages/public/offers/offers.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3B1YmxpYy9vZmZlcnMvb2ZmZXJzLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/public/offers/offers.component.html":
/*!***********************************************************!*\
  !*** ./src/app/pages/public/offers/offers.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"headline headline-contacts\">\n    <div class=\"headline-title\">\n        <h3>Offers</h3>\n    </div>\n</div>\n\n<div class=\"content\">\n    <div class=\"offers\">\n        <div class=\"offers-container\">\n            <div class=\"offers-container__item\">\n                <div class=\"img\">\n                    <div class=\"svg\">\n                        <svg width=\"70\" height=\"70\" viewBox=\"0 0 70 70\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n                            <g clip-path=\"url(#clip0)\">\n                                <path d=\"M59.4929 59.4783L59.4748 59.4964C58.9407 60.0305 58.9407 60.8957 59.4748 61.4297C59.7418 61.6967 60.0916 61.8303 60.4414 61.8303C60.7912 61.8303 61.1416 61.6967 61.4081 61.4297L61.4262 61.4121C61.9603 60.878 61.9603 60.0123 61.4262 59.4783C60.8927 58.9447 60.027 58.9447 59.4929 59.4783Z\" fill=\"black\"/>\n                                <path d=\"M61.4081 20.0539C57.565 16.2108 52.8413 13.5704 47.6924 12.3175V9.30489C50.1923 9.22905 52.2041 7.17293 52.2041 4.65431C52.2041 2.08763 50.116 0 47.5498 0H33.8892C31.323 0 29.2348 2.08763 29.2348 4.65431C29.2348 7.17293 31.2461 9.22905 33.7466 9.30489V12.3207C30.6837 13.0689 27.7576 14.3122 25.066 16.0207L17.6362 6.57158C17.085 5.87036 16.2578 5.46875 15.3664 5.46875C15.3643 5.46875 15.3616 5.46875 15.3595 5.46875C14.465 5.47089 13.6372 5.87677 13.0876 6.58226L3.43987 18.9708C3.43666 18.9751 3.43346 18.9793 3.43025 18.9836C1.21765 21.7084 0 25.1402 0 28.6517C0 35.815 4.93736 41.8493 11.596 43.5465C13.0123 58.4798 25.5669 70 40.7198 70C46.526 70 52.1374 68.3022 56.9471 65.0909C57.5751 64.6717 57.7444 63.8226 57.3247 63.1945C56.9054 62.5665 56.0568 62.3972 55.4288 62.8169C51.0698 65.727 45.9834 67.2656 40.7198 67.2656C27.2215 67.2656 15.9977 57.1826 14.3934 43.9893C14.7298 44.0112 15.0684 44.0234 15.4102 44.0234C16.3123 44.0234 17.1961 43.9449 18.056 43.7959C18.7187 48.7568 20.9901 53.3465 24.5405 56.8996C24.5442 56.9033 24.5469 56.9076 24.5506 56.9108C24.5554 56.9156 24.5608 56.9193 24.5656 56.9241C24.7851 57.1436 25.0089 57.3599 25.2385 57.5709C29.4688 61.4642 34.9669 63.6084 40.7198 63.6084C46.9602 63.6084 52.6239 61.0946 56.7538 57.0272C56.8002 56.9914 56.8456 56.9535 56.8884 56.9108C56.9311 56.8681 56.969 56.8227 57.0048 56.7762C61.0716 52.6463 63.586 46.9827 63.586 40.7422C63.586 34.5017 61.0716 28.838 57.0048 24.7082C56.969 24.6617 56.8002 24.493 56.7538 24.4572C52.6239 20.3898 46.9602 17.876 40.7198 17.876C36.5028 17.876 32.4408 19.0141 28.876 21.1791C28.4455 20.4063 27.9478 19.6683 27.3854 18.9761C27.3662 18.9478 27.3459 18.9201 27.3245 18.8928L26.7659 18.182C30.9518 15.5865 35.7514 14.2188 40.7198 14.2188C55.3444 14.2188 67.2432 26.117 67.2432 40.7422C67.2432 45.9952 65.7104 51.0725 62.8116 55.425C62.3929 56.0536 62.5632 56.9022 63.1913 57.3209C63.4241 57.4763 63.6874 57.5506 63.9481 57.5506C64.3903 57.5506 64.8239 57.3364 65.0872 56.9407C68.2862 52.1379 69.977 46.5362 69.977 40.7422C69.9776 32.9273 66.934 25.5798 61.4081 20.0539ZM2.73438 28.6517C2.73438 25.7523 3.74428 22.9196 5.57823 20.676C5.59532 20.6552 5.61081 20.6344 5.6263 20.6136L15.2452 8.26241C15.2564 8.24745 15.2938 8.19939 15.3664 8.20312C15.4407 8.20312 15.4754 8.24692 15.4871 8.26187L25.09 20.4747C25.1199 20.5212 25.153 20.5666 25.1888 20.6098C27.0575 22.8651 28.0861 25.7213 28.0861 28.6517C28.0861 35.62 22.4 41.2891 15.4102 41.2891C8.42102 41.2891 2.73438 35.62 2.73438 28.6517ZM45.4467 39.375C44.9783 37.7589 43.703 36.4831 42.0869 36.0152V20.6579C46.6104 20.9628 50.7296 22.7679 53.9484 25.5798L51.9077 27.6204C51.3737 28.1544 51.3737 29.0202 51.9077 29.5542C52.1748 29.8212 52.5246 29.9548 52.8744 29.9548C53.2242 29.9548 53.574 29.8212 53.841 29.5542L55.8817 27.5136C58.694 30.7323 60.4991 34.851 60.8041 39.375H45.4467ZM40.7198 38.5547C41.9257 38.5547 42.9073 39.5363 42.9073 40.7422C42.9073 41.9481 41.9257 42.9297 40.7198 42.9297C39.5133 42.9297 38.5323 41.9481 38.5323 40.7422C38.5323 39.5363 39.5133 38.5547 40.7198 38.5547ZM39.3526 20.6584V36.0152C37.3018 36.6091 35.7979 38.5029 35.7979 40.7422C35.7979 43.4563 38.0057 45.6641 40.7198 45.6641C42.9591 45.6641 44.8528 44.1602 45.4467 42.1094H60.8041C60.4991 46.6334 58.694 50.752 55.8817 53.9708L53.841 51.9302C53.307 51.3966 52.4413 51.3966 51.9072 51.9302C51.3737 52.4642 51.3737 53.3299 51.9072 53.864L53.9484 55.9046C50.7291 58.7164 46.6104 60.5221 42.0864 60.8265V57.9319C42.0864 57.1767 41.4744 56.5647 40.7192 56.5647C39.9641 56.5647 39.352 57.1767 39.352 57.9319V60.826C34.8766 60.5173 30.751 58.7041 27.5141 55.8806L29.5312 53.864C30.0653 53.3299 30.0653 52.4642 29.5312 51.9302C28.9972 51.3966 28.1315 51.3966 27.598 51.9302L25.5782 53.95C22.9629 50.9689 21.2037 47.2166 20.7225 43.0819C26.6105 40.9184 30.8205 35.2665 30.8205 28.6517C30.8205 26.9592 30.5358 25.2882 29.9959 23.7047C32.8205 21.9209 36.0142 20.8817 39.3526 20.6584ZM31.9698 4.65431C31.9698 3.59581 32.8307 2.73438 33.8892 2.73438H47.5498C48.6083 2.73438 49.4698 3.59581 49.4698 4.65431C49.4698 5.71281 48.6083 6.57372 47.5498 6.57372H33.8897C32.8307 6.57372 31.9698 5.71281 31.9698 4.65431ZM36.4815 11.7899V9.30809H44.958V11.7883C43.5663 11.5874 42.151 11.4844 40.7198 11.4844C39.2912 11.4844 37.8754 11.588 36.4815 11.7899Z\" fill=\"black\"/>\n                                <path d=\"M22.3534 27.2852C21.5983 27.2852 20.9863 27.8977 20.9863 28.6523C20.9863 31.7168 18.4847 34.2097 15.4102 34.2097C14.655 34.2097 14.043 34.8218 14.043 35.5769C14.043 36.3316 14.655 36.9441 15.4102 36.9441C19.9924 36.9441 23.7206 33.2244 23.7206 28.6523C23.7206 27.8977 23.1086 27.2852 22.3534 27.2852Z\" fill=\"black\"/>\n                            </g>\n                            <defs>\n                                <clipPath id=\"clip0\">\n                                    <rect width=\"70\" height=\"70\" fill=\"white\"/>\n                                </clipPath>\n                            </defs>\n                        </svg>\n                    </div>\n                </div>\n                <div class=\"box\">\n                    <div class=\"title\">\n                        Cleaning and delivery\n                    </div>\n                    <div class=\"paragraph\">\n                        Phasellus ultrices nulla quis nibh. Quisque a lectus. Donec consectetuer ligula vulputate sem tristique cursus.\n                    </div>\n                </div>\n            </div>\n            <div class=\"offers-container__item\">\n                <div class=\"img\">\n                    <div class=\"svg\">\n                        <svg width=\"70\" height=\"70\" viewBox=\"0 0 70 70\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n                            <g clip-path=\"url(#clip0)\">\n                                <path d=\"M69.9972 2.33984H67.6641V4.67294H69.9972V2.33984Z\" fill=\"black\"/>\n                                <path d=\"M67.6632 0.0078125H65.3301V2.34091H67.6632V0.0078125Z\" fill=\"black\"/>\n                                <path d=\"M65.3311 2.33984H62.998V4.67294H65.3311V2.33984Z\" fill=\"black\"/>\n                                <path d=\"M67.6632 4.67383H65.3301V7.00692H67.6632V4.67383Z\" fill=\"black\"/>\n                                <path d=\"M60.6632 2.33984H58.3301V4.67294H60.6632V2.33984Z\" fill=\"black\"/>\n                                <path d=\"M58.3311 25.6719H55.998V28.005H58.3311V25.6719Z\" fill=\"black\"/>\n                                <path d=\"M62.9972 25.6719H60.6641V28.005H62.9972V25.6719Z\" fill=\"black\"/>\n                                <path d=\"M60.6632 23.3379H58.3301V25.671H60.6632V23.3379Z\" fill=\"black\"/>\n                                <path d=\"M60.6632 28.0039H58.3301V30.337H60.6632V28.0039Z\" fill=\"black\"/>\n                                <path d=\"M15.171 22.1719H12.8379V24.505H15.171V22.1719Z\" fill=\"black\"/>\n                                <path d=\"M12.837 19.8379H10.5039V22.171H12.837V19.8379Z\" fill=\"black\"/>\n                                <path d=\"M10.503 22.1719H8.16992V24.505H10.503V22.1719Z\" fill=\"black\"/>\n                                <path d=\"M12.837 24.5059H10.5039V26.839H12.837V24.5059Z\" fill=\"black\"/>\n                                <path d=\"M5.837 22.1719H3.50391V24.505H5.837V22.1719Z\" fill=\"black\"/>\n                                <path d=\"M2.337 7.00586H0.00390625V9.33895H2.337V7.00586Z\" fill=\"black\"/>\n                                <path d=\"M7.00302 7.00586H4.66992V9.33895H7.00302V7.00586Z\" fill=\"black\"/>\n                                <path d=\"M4.66903 4.67383H2.33594V7.00692H4.66903V4.67383Z\" fill=\"black\"/>\n                                <path d=\"M4.66903 9.33984H2.33594V11.6729H4.66903V9.33984Z\" fill=\"black\"/>\n                                <path d=\"M18.671 0.0078125H16.3379V2.34091H18.671V0.0078125Z\" fill=\"black\"/>\n                                <path d=\"M62.7957 54.8238C62.2997 53.429 60.9779 52.4986 59.4975 52.5021H56.6757L52.4982 45.1925V32.6708C52.4982 30.0937 50.4091 28.0046 47.8321 28.0046V12.8395C48.0687 5.9892 42.7074 0.2441 35.8572 0.00743674C35.5715 -0.00247891 35.2857 -0.00247891 35 0.00743674C26.9789 0.00743674 22.4013 6.5961 22.168 12.7951C22.168 12.8103 22.1762 12.8243 22.1762 12.8395H22.168V28.0046C19.591 28.0046 17.5018 30.0937 17.5018 32.6708V45.1925L13.3244 52.5021H10.5027C8.57438 52.4981 7.008 54.0579 7.00391 55.9863C7.00085 57.4662 7.93117 58.7873 9.32564 59.2832C7.6407 61.1877 7.81875 64.0977 9.72343 65.7826C10.4117 66.3916 11.2666 66.7806 12.1778 66.8996L34.8427 69.9898C34.9477 70.0035 35.0538 70.0035 35.1588 69.9898L57.8237 66.8996C60.3452 66.5702 62.1223 64.2591 61.7929 61.7376C61.6739 60.8264 61.2848 59.9715 60.6759 59.2832C62.4926 58.6372 63.4418 56.6407 62.7957 54.8238ZM35.0002 2.34068C40.5413 2.08345 45.2419 6.36687 45.4991 11.9081C45.5135 12.2184 45.5135 12.5293 45.4991 12.8396H43.166C39.9463 12.8358 37.3371 10.2265 37.3333 7.00687C37.3331 6.36264 36.8108 5.84047 36.1664 5.84061C35.8572 5.84061 35.5607 5.96354 35.342 6.18212C32.45 9.08522 28.6896 10.9653 24.6319 11.5366C25.2734 6.29469 29.7191 2.35161 35.0002 2.34068ZM32.6671 29.1713V24.1819C33.4275 24.3905 34.2117 24.4991 35.0002 24.5051C35.7891 24.4984 36.5736 24.3873 37.3333 24.1749V29.1713C37.3333 29.8155 37.8556 30.3378 38.4998 30.3378H40.8329V31.8298L35.0002 33.7745L29.1674 31.8298V30.3378H31.5005C32.1448 30.3378 32.6671 29.8155 32.6671 29.1713ZM25.8918 13.6784C29.3554 13.0376 32.6037 11.5407 35.3408 9.32363C36.371 12.7877 39.5521 15.1654 43.166 15.1727H43.6746C42.2164 19.0865 38.5185 22.172 35.0002 22.172C30.9488 22.172 26.8565 18.2454 25.8918 13.6784ZM39.6664 28.0047V23.2394C42.2418 21.7899 44.2858 19.5542 45.4991 16.8595V28.0047H41.9995H39.6664ZM24.5013 16.863C25.7073 19.5634 27.753 21.8022 30.334 23.2464V28.0047H24.5013V16.863ZM26.8343 30.3378V32.6709C26.8348 33.1728 27.156 33.6181 27.6323 33.7768V33.778L34.6315 36.1111C34.8711 36.1915 35.1304 36.1915 35.37 36.1111L42.3693 33.778C42.8454 33.6189 43.1663 33.173 43.166 32.6709V30.3378H46.3379L41.0884 51.3357H28.912L23.6625 30.3378H26.8343ZM28.5375 53.6688H41.4629L46.15 59.1364L35.0002 60.6575L23.8503 59.141L28.5375 53.6688ZM21.1043 58.7619L18.952 58.4691L26.2604 50.3476L26.727 52.2012L21.1043 58.7619ZM43.2827 52.2012L43.7493 50.3476L51.0577 58.4691L48.9008 58.7619L43.2827 52.2012ZM9.33613 56.0019C9.33613 55.3576 9.85846 54.8353 10.5027 54.8353H14.0023C14.4199 54.8362 14.8061 54.6137 15.0149 54.252L19.6811 46.0862C19.7827 45.9086 19.8358 45.7075 19.8351 45.5029V32.6709C19.8351 31.718 20.4147 30.8607 21.2991 30.5058L23.4385 39.0624L25.5768 47.619L16.9829 57.1684H10.5027C9.85831 57.1684 9.33613 56.6461 9.33613 56.0019ZM35.0002 67.6568L12.4928 64.5865C11.2332 64.4201 10.3471 63.2642 10.5135 62.0046C10.6651 60.8566 11.6463 60.0003 12.8043 60.0054C12.9081 60.0054 13.0118 60.0129 13.1146 60.0276L21.4099 61.1592L34.5919 62.9568L40.8364 66.8601L35.0002 67.6568ZM57.5075 64.5865L44.4492 66.3678L38.3493 62.5555L48.5823 61.1557L56.8764 60.0241C58.1353 59.8475 59.2988 60.7249 59.4754 61.9838C59.4904 62.0908 59.4978 62.1988 59.4977 62.307C59.4936 63.4561 58.6455 64.4274 57.5075 64.5865ZM59.4977 57.1684H53.0175L44.4224 47.6179L46.5607 39.0613L48.7001 30.5046C49.5854 30.8594 50.1656 31.7173 50.1653 32.6709V45.5029C50.1646 45.7075 50.2176 45.9086 50.3193 46.0862L54.9855 54.252C55.1943 54.6137 55.5804 54.8362 55.998 54.8353H59.4977C60.1419 54.8353 60.6642 55.3576 60.6642 56.0019C60.6642 56.6461 60.1419 57.1684 59.4977 57.1684Z\" fill=\"black\"/>\n                            </g>\n                            <defs>\n                                <clipPath id=\"clip0\">\n                                    <rect width=\"70\" height=\"70\" fill=\"white\"/>\n                                </clipPath>\n                            </defs>\n                        </svg>\n                    </div>\n                </div>\n                <div class=\"box\">\n                    <div class=\"title\">\n                        Cleaning and delivery\n                    </div>\n                    <div class=\"paragraph\">\n                        Phasellus ultrices nulla quis nibh. Quisque a lectus. Donec consectetuer ligula vulputate sem tristique cursus.\n                    </div>\n                </div>\n            </div>\n            <div class=\"offers-container__item\">\n                <div class=\"img\">\n                    <div class=\"svg\">\n                        <svg width=\"70\" height=\"70\" viewBox=\"0 0 70 70\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n                            <path d=\"M18.5938 59.0615H17.3491C18.1606 57.8203 18.5931 56.3697 18.5938 54.8867V52.1359C18.5942 51.5311 18.4941 50.9305 18.2973 50.3586L14.9144 40.5225C14.7695 39.9817 14.4888 39.4869 14.0991 39.0849C13.7094 38.683 13.2235 38.3872 12.6875 38.2256L14.7492 30.5223C14.9297 29.8694 14.9012 29.1763 14.6677 28.5404C14.4343 27.9045 14.0077 27.3575 13.4477 26.9764C13.1502 26.7627 12.8168 26.6042 12.4633 26.5083C12.1789 26.4262 11.8843 26.3853 11.5883 26.3869C10.8737 26.3802 10.1769 26.6097 9.60613 27.0396C9.03535 27.4696 8.62251 28.076 8.43172 28.7647L2.59547 46.7022C2.30175 47.6143 2.25049 48.5872 2.44672 49.5251L4.13328 56.0789C4.29343 56.7006 4.37464 57.34 4.375 57.982V59.0615H3.28125C2.99117 59.0615 2.71297 59.1768 2.50785 59.3819C2.30273 59.587 2.1875 59.8652 2.1875 60.1553V66.7178C2.1875 67.0079 2.30273 67.2861 2.50785 67.4912C2.71297 67.6963 2.99117 67.8115 3.28125 67.8115H18.5938C18.8838 67.8115 19.162 67.6963 19.3671 67.4912C19.5723 67.2861 19.6875 67.0079 19.6875 66.7178V60.1553C19.6875 59.8652 19.5723 59.587 19.3671 59.3819C19.162 59.1768 18.8838 59.0615 18.5938 59.0615ZM6.25187 55.5287L4.57844 49.033C4.46795 48.4807 4.50147 47.9093 4.67578 47.3737L10.5306 29.3772C10.5678 29.2392 10.632 29.1101 10.7194 28.9971C10.8068 28.8841 10.9158 28.7896 11.04 28.719C11.1642 28.6484 11.3011 28.6032 11.4429 28.5859C11.5847 28.5685 11.7286 28.5795 11.8661 28.6181C11.9869 28.6492 12.1006 28.7035 12.2008 28.7778C12.3885 28.9036 12.5317 29.0853 12.6103 29.2972C12.6888 29.509 12.6986 29.7402 12.6383 29.958L10.3797 38.3897C9.80745 38.6478 9.32219 39.0661 8.98253 39.594C8.64286 40.1219 8.46334 40.7369 8.46562 41.3647C8.46137 41.6517 8.4982 41.9379 8.575 42.2145L10.5547 49.6105C10.6298 49.8907 10.8132 50.1296 11.0645 50.2746C11.3157 50.4196 11.6143 50.4589 11.8945 50.3837C12.1747 50.3086 12.4136 50.1252 12.5587 49.874C12.7037 49.6227 12.7429 49.3241 12.6678 49.0439L10.6848 41.6228C10.662 41.5387 10.6514 41.4518 10.6531 41.3647C10.651 41.1403 10.7201 40.9209 10.8503 40.7382C10.9806 40.5554 11.1654 40.4187 11.3783 40.3475C11.4034 40.3387 11.5073 40.3037 11.5238 40.3005C11.8102 40.2439 12.1074 40.3027 12.3507 40.4641C12.594 40.6255 12.7638 40.8764 12.8231 41.1623L16.228 51.0706C16.3462 51.4133 16.4065 51.7734 16.4062 52.1359V54.8867C16.4071 55.9667 16.0874 57.0227 15.4875 57.9208L14.7273 59.0615H6.5625V57.982C6.56212 57.1545 6.45776 56.3303 6.25187 55.5287ZM17.5 65.624H4.375V61.249H17.5V65.624Z\" fill=\"black\"/>\n                            <path d=\"M50.3125 60.1548V66.7173C50.3125 67.0074 50.4277 67.2856 50.6329 67.4907C50.838 67.6958 51.1162 67.811 51.4062 67.811H66.7188C67.0088 67.811 67.287 67.6958 67.4921 67.4907C67.6973 67.2856 67.8125 67.0074 67.8125 66.7173V60.1548C67.8125 59.8647 67.6973 59.5865 67.4921 59.3814C67.287 59.1763 67.0088 59.061 66.7188 59.061H65.625V57.9815C65.6249 57.3377 65.7061 56.6964 65.8667 56.0729L67.5533 49.5192C67.7495 48.5812 67.6982 47.6083 67.4045 46.6962L61.5683 28.7642C61.3769 28.0772 60.9646 27.4725 60.395 27.0434C59.8254 26.6144 59.1303 26.385 58.4172 26.3907C58.1212 26.3892 57.8266 26.43 57.5422 26.5121C57.1887 26.6081 56.8553 26.7666 56.5578 26.9803C55.9978 27.3614 55.5711 27.9083 55.3377 28.5443C55.1043 29.1802 55.0758 29.8733 55.2563 30.5262L57.3125 38.2295C56.7765 38.3911 56.2906 38.6868 55.9009 39.0888C55.5111 39.4908 55.2305 39.9856 55.0856 40.5264L51.7027 50.3624C51.5064 50.933 51.4062 51.5321 51.4062 52.1354V54.8862C51.4069 56.3692 51.8394 57.8198 52.6509 59.061H51.4062C51.1162 59.061 50.838 59.1763 50.6329 59.3814C50.4277 59.5865 50.3125 59.8647 50.3125 60.1548ZM63.4375 57.9815V59.061H55.2727L54.5125 57.9203C53.9126 57.0222 53.5929 55.9662 53.5938 54.8862V52.1354C53.5935 51.7729 53.6538 51.4128 53.772 51.0701L57.1769 41.1618C57.2362 40.8759 57.406 40.625 57.6493 40.4636C57.8926 40.3022 58.1898 40.2434 58.4763 40.2999C58.4927 40.2999 58.5966 40.3382 58.6217 40.347C58.8346 40.4182 59.0194 40.5549 59.1497 40.7377C59.2799 40.9204 59.349 41.1397 59.3469 41.3642C59.3486 41.4513 59.338 41.5382 59.3152 41.6223L57.3278 49.0434C57.2527 49.3236 57.2919 49.6222 57.437 49.8735C57.582 50.1247 57.8209 50.3081 58.1011 50.3832C58.3813 50.4584 58.6799 50.4191 58.9312 50.2741C59.1824 50.1291 59.3658 49.8902 59.4409 49.61L61.4206 42.214C61.4974 41.9374 61.5343 41.6512 61.53 41.3642C61.5327 40.7369 61.3538 40.1222 61.0149 39.5944C60.6761 39.0665 60.1917 38.6479 59.6203 38.3892L57.3628 29.9564C57.3025 29.7386 57.3123 29.5074 57.3908 29.2956C57.4694 29.0837 57.6126 28.902 57.8003 28.7762C57.9005 28.7019 58.0142 28.6476 58.135 28.6165C58.2725 28.5779 58.4164 28.5669 58.5581 28.5843C58.6999 28.6016 58.8369 28.6468 58.9611 28.7174C59.0853 28.788 59.1942 28.8825 59.2817 28.9955C59.3691 29.1085 59.4333 29.2376 59.4705 29.3756L65.3253 47.3721C65.4996 47.9077 65.5331 48.4791 65.4227 49.0314L63.7492 55.5271C63.5429 56.329 63.4381 57.1536 63.4375 57.9815ZM52.5 61.2485H65.625V65.6235H52.5V61.2485Z\" fill=\"black\"/>\n                            <path d=\"M52.9375 9.93506L35.4375 2.27881C35.2995 2.21859 35.1506 2.1875 35 2.1875C34.8494 2.1875 34.7005 2.21859 34.5625 2.27881L17.0625 9.93506C16.8675 10.0201 16.7016 10.1602 16.5851 10.3382C16.4685 10.5161 16.4064 10.7242 16.4062 10.9369V32.8119C16.4063 33.0136 16.462 33.2114 16.5674 33.3834C16.6728 33.5554 16.8237 33.6949 17.0034 33.7865L34.5034 42.6896C34.6572 42.768 34.8274 42.8088 35 42.8088C35.1704 42.8085 35.3385 42.7688 35.4911 42.6929L52.9911 33.8991C53.1723 33.808 53.3247 33.6684 53.4311 33.4957C53.5375 33.323 53.5938 33.1241 53.5938 32.9213V10.9369C53.5936 10.7242 53.5315 10.5161 53.4149 10.3382C53.2984 10.1602 53.1325 10.0201 52.9375 9.93506ZM35 4.47397L49.7711 10.9369L35 17.3999L31.1609 15.7199L37.0027 13.1638C37.1974 13.0785 37.363 12.9384 37.4793 12.7604C37.5957 12.5825 37.6576 12.3745 37.6576 12.1619C37.6576 11.9494 37.5957 11.7414 37.4793 11.5635C37.363 11.3855 37.1974 11.2453 37.0027 11.1601L32.3094 9.11366C32.1714 9.05343 32.0224 9.02234 31.8719 9.02234C31.7213 9.02234 31.5724 9.05343 31.4344 9.11366L23.7442 12.4747L20.2344 10.9369L35 4.47397ZM25.1562 15.4804L27.3438 16.4374V21.1985L25.1562 20.1047V15.4804ZM26.4688 13.6691L31.8675 11.3099L33.8253 12.1641L28.4375 14.5255L26.4688 13.6691ZM18.5938 12.6093L22.9688 14.5233V20.7807C22.9687 20.9839 23.0252 21.1832 23.132 21.3561C23.2389 21.529 23.3918 21.6687 23.5736 21.7596L27.9486 23.9471C28.1154 24.0304 28.3007 24.0698 28.487 24.0613C28.6733 24.0529 28.8543 23.997 29.0128 23.8989C29.1714 23.8008 29.3023 23.6638 29.393 23.5009C29.4838 23.338 29.5313 23.1546 29.5312 22.9682V17.3901L33.9062 19.3041V39.9311L18.5938 32.1415V12.6093ZM36.0938 39.941V19.3085L51.4062 12.6093V32.2465L36.0938 39.941Z\" fill=\"black\"/>\n                            <path d=\"M42.1741 31.9724L37.7915 34.1752C37.5323 34.3058 37.3356 34.5339 37.2446 34.8095C37.1536 35.0851 37.1759 35.3855 37.3064 35.6447C37.4369 35.9039 37.6651 36.1006 37.9407 36.1915C38.2162 36.2825 38.5167 36.2603 38.7759 36.1298L43.1585 33.9269C43.4177 33.7964 43.6144 33.5683 43.7054 33.2927C43.7964 33.0171 43.7741 32.7167 43.6436 32.4575C43.5131 32.1983 43.2849 32.0016 43.0093 31.9106C42.7338 31.8197 42.4333 31.8419 42.1741 31.9724Z\" fill=\"black\"/>\n                            <path d=\"M38.2823 31.8722C38.4524 31.8722 38.6202 31.8325 38.7723 31.7562L43.0926 29.5851C43.3518 29.4546 43.5485 29.2265 43.6395 28.9509C43.7304 28.6753 43.7082 28.3749 43.5777 28.1157C43.4471 27.8565 43.219 27.6598 42.9434 27.5688C42.6678 27.4779 42.3674 27.5001 42.1082 27.6306L37.789 29.8017C37.5692 29.9125 37.3931 30.0942 37.2894 30.3175C37.1856 30.5407 37.1602 30.7924 37.2173 31.0319C37.2743 31.2714 37.4105 31.4846 37.6038 31.6371C37.797 31.7896 38.0361 31.8724 38.2823 31.8722Z\" fill=\"black\"/>\n                        </svg>\n                    </div>\n                </div>\n                <div class=\"box\">\n                    <div class=\"title\">\n                        Cleaning and delivery\n                    </div>\n                    <div class=\"paragraph\">\n                        Phasellus ultrices nulla quis nibh. Quisque a lectus. Donec consectetuer ligula vulputate sem tristique cursus.\n                    </div>\n                </div>\n            </div>\n            <div class=\"offers-container__item\">\n                <div class=\"img\">\n                    <div class=\"svg\">\n                        <svg width=\"70\" height=\"70\" viewBox=\"0 0 70 70\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n                            <g clip-path=\"url(#clip0)\">\n                                <path d=\"M65.3516 14.5568H62.6145L62.6172 9.66377C62.6188 6.37878 59.948 3.70476 56.6624 3.70316L35.8897 3.69141C35.8887 3.69141 35.8881 3.69141 35.8871 3.69141C34.7047 3.69141 33.5928 4.15176 32.7564 4.9881L1.74477 35.9998C0.619507 37.125 0 38.6209 0 40.2124C0 41.8039 0.619507 43.2998 1.74477 44.425L21.8702 64.5505C23.0318 65.7121 24.5576 66.2926 26.0828 66.2926C27.6086 66.2926 29.1344 65.7121 30.296 64.5505L49.8212 45.0253C50.3552 44.4913 50.3552 43.6256 49.8212 43.092C49.2871 42.558 48.4214 42.558 47.8873 43.092L28.3622 62.6172C27.1056 63.8738 25.0607 63.8738 23.804 62.6172L3.67859 42.4918C3.06976 41.8829 2.73438 41.0733 2.73438 40.2124C2.73438 39.3515 3.06976 38.5419 3.67859 37.933L34.6897 6.92192C35.0096 6.60202 35.4347 6.42578 35.8871 6.42578H35.8881L56.6608 6.43753C58.4382 6.43806 59.8839 7.88536 59.8828 9.6627L59.8764 21.1193H53.7182C53.1879 21.1193 52.7077 20.9025 52.3606 20.5532C52.9326 20.3081 53.4688 19.954 53.935 19.4878C55.8998 17.5224 55.8998 14.3256 53.935 12.3608C51.9697 10.3954 48.7728 10.3954 46.8075 12.3608C44.8427 14.3256 44.8427 17.5224 46.8075 19.4878C47.5359 20.2162 48.4342 20.6739 49.3758 20.8624C50.0449 22.6093 51.7384 23.8537 53.7182 23.8537H59.8748L59.8711 30.4076C59.8711 30.86 59.6948 31.2846 59.3749 31.6039L55.6216 35.3578C55.0875 35.8919 55.0875 36.7576 55.6216 37.2916C56.1551 37.8252 57.0208 37.8252 57.5549 37.2916L61.3087 33.5378C62.144 32.702 62.6049 31.5911 62.6054 30.4092L62.6092 23.8537H65.3516C67.9145 23.8537 70 21.7687 70 19.2052C70 16.6423 67.9145 14.5568 65.3516 14.5568ZM48.7413 14.2941C49.191 13.8444 49.7811 13.6201 50.3718 13.6201C50.9619 13.6201 51.552 13.8449 52.0017 14.2941C52.1438 14.4366 52.2613 14.5942 52.3585 14.7603C50.8578 15.2201 49.6786 16.4212 49.2476 17.9347C49.0665 17.8338 48.8951 17.7083 48.7413 17.5545C47.8425 16.6551 47.8425 15.1929 48.7413 14.2941ZM65.3516 21.1193H62.6108L62.6129 17.2912H65.3516C66.4069 17.2912 67.2656 18.1499 67.2656 19.2052C67.2656 20.2605 66.4069 21.1193 65.3516 21.1193Z\" fill=\"black\"/>\n                                <path d=\"M22.068 38.1863C22.2362 38.7914 22.7857 39.1871 23.3839 39.1871C23.5056 39.1871 23.629 39.1711 23.7513 39.1369L37.7863 35.2303C38.5137 35.0278 38.9394 34.2738 38.737 33.5464C38.5345 32.8195 37.781 32.3939 37.0531 32.5963L23.0181 36.5024C22.2912 36.7053 21.8656 37.4589 22.068 38.1863Z\" fill=\"black\"/>\n                                <path d=\"M28.2472 39.9903C27.4856 40.7519 27.0664 41.7639 27.0664 42.8411C27.0664 43.9178 27.4856 44.9298 28.2472 45.6914C29.0333 46.477 30.0651 46.8701 31.0975 46.8701C32.1298 46.8701 33.1621 46.477 33.9483 45.6914C35.52 44.1197 35.52 41.5621 33.9483 39.9903C32.3765 38.4186 29.8189 38.4186 28.2472 39.9903ZM32.0145 43.7576C31.5087 44.2633 30.6862 44.2633 30.1805 43.7576C29.9354 43.513 29.8008 43.1872 29.8008 42.8406C29.8008 42.4945 29.9359 42.1687 30.1805 41.9236C30.4336 41.671 30.7658 41.5444 31.0975 41.5444C31.4297 41.5444 31.7618 41.671 32.0145 41.9236C32.5202 42.4294 32.5202 43.2523 32.0145 43.7576Z\" fill=\"black\"/>\n                                <path d=\"M34.624 31.8506C36.1957 30.2784 36.1957 27.7213 34.624 26.1496C33.8624 25.388 32.8499 24.9688 31.7732 24.9688C30.6965 24.9688 29.684 25.388 28.9229 26.1496C27.3512 27.7213 27.3512 30.2784 28.9229 31.8506C29.7091 32.6362 30.7409 33.0293 31.7732 33.0293C32.8055 33.0293 33.8379 32.6362 34.624 31.8506ZM30.8562 28.0828C31.1014 27.8377 31.4271 27.7031 31.7732 27.7031C32.1198 27.7031 32.4456 27.8377 32.6902 28.0828C33.1959 28.5886 33.1959 29.411 32.6902 29.9168C32.185 30.4225 31.362 30.4225 30.8562 29.9168C30.351 29.411 30.351 28.5886 30.8562 28.0828Z\" fill=\"black\"/>\n                                <path d=\"M13.598 35.3612C13.0639 34.8271 12.1982 34.8271 11.6642 35.3612L7.77945 39.2459C7.5231 39.5023 7.37891 39.8499 7.37891 40.2126C7.37891 40.5752 7.5231 40.9229 7.77945 41.1792L25.1166 58.5163C25.3831 58.7828 25.7334 58.9163 26.0832 58.9163C26.433 58.9163 26.7828 58.7828 27.0499 58.5163L52.9709 32.5948C53.5049 32.0607 53.5049 31.195 52.9709 30.6609L35.6343 13.3244C35.3779 13.068 35.0303 12.9238 34.6676 12.9238C34.305 12.9238 33.9574 13.068 33.701 13.3244L19.3984 27.627C18.8643 28.161 18.8643 29.0267 19.3984 29.5608C19.9319 30.0943 20.7976 30.0943 21.3317 29.5608L34.6676 16.2248L50.0709 31.6281L26.0832 55.6159L10.6799 40.2126L13.598 37.2945C14.1315 36.7604 14.1321 35.8952 13.598 35.3612Z\" fill=\"black\"/>\n                                <path d=\"M52.7207 38.8242C52.3607 38.8242 52.0083 38.9706 51.7541 39.2248C51.4998 39.479 51.3535 39.832 51.3535 40.1914C51.3535 40.5508 51.4998 40.9038 51.7541 41.1581C52.0083 41.4123 52.3607 41.5586 52.7207 41.5586C53.0801 41.5586 53.4326 41.4123 53.6873 41.1581C53.9416 40.9038 54.0879 40.5508 54.0879 40.1914C54.0879 39.832 53.9416 39.479 53.6873 39.2248C53.4326 38.9706 53.0801 38.8242 52.7207 38.8242Z\" fill=\"black\"/>\n                                <path d=\"M17.4642 33.4266C17.72 33.1724 17.8652 32.821 17.8652 32.46C17.8652 32.1005 17.72 31.7491 17.4642 31.4933C17.2099 31.2391 16.8585 31.0928 16.498 31.0928C16.1381 31.0928 15.7856 31.2391 15.5314 31.4933C15.2767 31.7475 15.1309 32.1005 15.1309 32.46C15.1309 32.821 15.2767 33.1724 15.5314 33.4266C15.7867 33.6824 16.1381 33.8271 16.498 33.8271C16.8585 33.8271 17.2099 33.6824 17.4642 33.4266Z\" fill=\"black\"/>\n                            </g>\n                            <defs>\n                                <clipPath id=\"clip0\">\n                                    <rect width=\"70\" height=\"70\" fill=\"white\"/>\n                                </clipPath>\n                            </defs>\n                        </svg>\n                    </div>\n                </div>\n                <div class=\"box\">\n                    <div class=\"title\">\n                        Cleaning and delivery\n                    </div>\n                    <div class=\"paragraph\">\n                        Phasellus ultrices nulla quis nibh. Quisque a lectus. Donec consectetuer ligula vulputate sem tristique cursus.\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n\n<div class=\"content\">\n    <div class=\"content__element\">\n        <div class=\"content__element-box\">\n            <div class=\"title\">\n                Aliquam erat volutpat\n            </div>\n            <div class=\"paragraph\">\n                Phasellus ultrices nulla quis nibh. Quisque a lectus. Donec consectetuer ligula vulputate sem tristique cursus. Nam nulla quam, gravida non, commodo a, sodales sit amet, nisi.\n                Phasellus ultrices nulla quis nibh. Quisque a lectus. Donec consectetuer ligula vulputate sem tristique cursus. Nam nulla quam, gravida non, commodo a, sodales sit amet, nisi.\n            </div>\n        </div>\n        <img src=\"../assets/images/content.jpg\" alt=\"\">\n    </div>\n</div>\n\n<div class=\"content\">\n    <div class=\"content__element content__element-reverse\">\n        <img src=\"../assets/images/content.jpg\" alt=\"\">\n        <div class=\"content__element-box\">\n            <div class=\"title\">\n                Aliquam erat volutpat\n            </div>\n            <div class=\"paragraph\">\n                Phasellus ultrices nulla quis nibh. Quisque a lectus. Donec consectetuer ligula vulputate sem tristique cursus. Nam nulla quam, gravida non, commodo a, sodales sit amet, nisi.\n                Phasellus ultrices nulla quis nibh. Quisque a lectus. Donec consectetuer ligula vulputate sem tristique cursus. Nam nulla quam, gravida non, commodo a, sodales sit amet, nisi.\n            </div>\n        </div>\n    </div>\n</div>\n\n<section class=\"about bonus\">\n    <div class=\"about-container bonus-container\">\n        <div class=\"about-box bonus-box\">\n            <h2>Bonus system</h2>\n            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa maiores quod veniam. Adipisci amet beatae culpa doloribus fugiat, iusto omnis unde! Accusantium ad aspernatur autem beatae cupiditate deleniti eum eveniet explicabo facilis fugiat itaque laudantium minima molestiae, nam natus nobis omnis, quibusdam quos repellendus repudiandae sapiente soluta veniam voluptatem? Ad aperiam autem consequuntur, dignissimos labore molestias nulla perferendis quis quos.</p>\n        </div>\n    </div>\n</section>\n\n<section class=\"getapp\">\n    <div class=\"getapp-container\">\n        <div class=\"left\">\n            <h2>Get our application</h2>\n            <p class=\"description\">\n                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.\n            </p>\n            <div class=\"buttons\">\n                <a href=\"\">\n                    <img src=\"../assets/images/googlestore.svg\" alt=\"\">\n                </a>\n                <a href=\"\">\n                    <img src=\"../assets/images/appstore.svg\" alt=\"\">\n                </a>\n            </div>\n        </div>\n        <div class=\"right\">\n            <div class=\"img\">\n                <img src=\"../assets/images/getapp.png\" alt=\"get our applicaton \">\n            </div>\n        </div>\n    </div>\n</section>\n\n<div class=\"getintouch\">\n    <div class=\"getintouch__title\">\n        Get in Touch Now\n    </div>\n    <form action=\"\" class=\"getintouch__form\">\n        <label for=\"\">\n            <span>Name</span>\n            <input type=\"text\" required>\n        </label>\n        <label for=\"\">\n            <span>Username or e-mail</span>\n            <input type=\"email\" required>\n        </label>\n        <label for=\"\">\n            <span>Telephone</span>\n            <input type=\"number\" required>\n        </label>\n        <label for=\"\">\n            <span>Nature of qnquiry</span>\n            <input type=\"text\">\n        </label>\n        <label for=\"\">\n            <span>Message</span>\n            <textarea type=\"text\" class=\"message\" required></textarea>\n        </label>\n        <input type=\"submit\" class=\"send\" value=\"send\">\n    </form>\n</div>\n"

/***/ }),

/***/ "./src/app/pages/public/offers/offers.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/public/offers/offers.component.ts ***!
  \*********************************************************/
/*! exports provided: OffersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OffersComponent", function() { return OffersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var OffersComponent = /** @class */ (function () {
    function OffersComponent() {
    }
    OffersComponent.prototype.ngOnInit = function () {
    };
    OffersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-offers',
            template: __webpack_require__(/*! ./offers.component.html */ "./src/app/pages/public/offers/offers.component.html"),
            styles: [__webpack_require__(/*! ./offers.component.css */ "./src/app/pages/public/offers/offers.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], OffersComponent);
    return OffersComponent;
}());



/***/ }),

/***/ "./src/app/pages/public/our-partners/our-partners.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/pages/public/our-partners/our-partners.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3B1YmxpYy9vdXItcGFydG5lcnMvb3VyLXBhcnRuZXJzLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/public/our-partners/our-partners.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/pages/public/our-partners/our-partners.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"headline headline-howitworks\">\n    <div class=\"headline-title\">\n        <h3>Our Partners</h3>\n    </div>\n</div>\n\n<section class=\"features\">\n    <div class=\"features-container\">\n        <div class=\"features__item\">\n            <img src=\"../assets/images/24-hours.svg\" alt=\"\">\n            <p>Open all week</p>\n        </div>\n        <div class=\"features__item\">\n            <img src=\"../assets/images/location-pin.svg\" alt=\"\">\n            <p>We collect and deliver to over 100 cities</p>\n        </div>\n        <div class=\"features__item\">\n            <img src=\"../assets/images/clothes.svg\" alt=\"\">\n            <p>We put a Quality Guarantee an all you items</p>\n        </div>\n        <div class=\"features__item\">\n            <img src=\"../assets/images/stars.svg\" alt=\"\">\n            <p>Read our 100s of five-star reviews on Trustpilot</p>\n        </div>\n    </div>\n</section>\n\n<section class=\"about\" id=\"about\">\n    <div class=\"about-container\">\n        <div class=\"about-box\">\n            <h2>About us</h2>\n            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa maiores quod veniam. Adipisci amet beatae culpa doloribus fugiat, iusto omnis unde! Accusantium ad aspernatur autem beatae cupiditate deleniti eum eveniet explicabo facilis fugiat itaque laudantium minima molestiae, nam natus nobis omnis, quibusdam quos repellendus repudiandae sapiente soluta veniam voluptatem? Ad aperiam autem consequuntur, dignissimos labore molestias nulla perferendis quis quos.</p>\n        </div>\n    </div>\n</section>\n\n<div class=\"content\">\n    <div class=\"ourclients\">\n        <h2>Out Partners</h2>\n        <div class=\"ourclients-container\">\n            <div class=\"ourclients-container__item\">\n                <img src=\"../assets/images/logo.svg\" alt=\"\">\n            </div>\n            <div class=\"ourclients-container__item\">\n                <img src=\"../assets/images/logo.svg\" alt=\"\">\n            </div>\n            <div class=\"ourclients-container__item\">\n                <img src=\"../assets/images/logo.svg\" alt=\"\">\n            </div>\n            <div class=\"ourclients-container__item\">\n                <img src=\"../assets/images/logo.svg\" alt=\"\">\n            </div>\n            <div class=\"ourclients-container__item\">\n                <img src=\"../assets/images/logo.svg\" alt=\"\">\n            </div>\n            <div class=\"ourclients-container__item\">\n                <img src=\"../assets/images/logo.svg\" alt=\"\">\n            </div>\n            <div class=\"ourclients-container__item\">\n                <img src=\"../assets/images/logo.svg\" alt=\"\">\n            </div>\n        </div>\n    </div>\n</div>\n\n<div class=\"content\">\n    <div class=\"content__element content__element-reverse\">\n        <img src=\"../assets/images/content.jpg\" alt=\"\">\n        <div class=\"content__element-box\">\n            <div class=\"title\">\n                Aliquam erat volutpat\n            </div>\n            <div class=\"paragraph\">\n                Phasellus ultrices nulla quis nibh. Quisque a lectus. Donec consectetuer ligula vulputate sem tristique cursus. Nam nulla quam, gravida non, commodo a, sodales sit amet, nisi.\n                Phasellus ultrices nulla quis nibh. Quisque a lectus. Donec consectetuer ligula vulputate sem tristique cursus. Nam nulla quam, gravida non, commodo a, sodales sit amet, nisi.\n                Phasellus ultrices nulla quis nibh. Quisque a lectus.\n            </div>\n        </div>\n    </div>\n</div>\n\n<div class=\"content\">\n    <div class=\"ourclients\">\n        <h2>Out Clients</h2>\n        <div class=\"ourclients-container\">\n            <div class=\"ourclients-container__item\">\n                <img src=\"../assets/images/logo.svg\" alt=\"\">\n            </div>\n            <div class=\"ourclients-container__item\">\n                <img src=\"../assets/images/logo.svg\" alt=\"\">\n            </div>\n            <div class=\"ourclients-container__item\">\n                <img src=\"../assets/images/logo.svg\" alt=\"\">\n            </div>\n            <div class=\"ourclients-container__item\">\n                <img src=\"../assets/images/logo.svg\" alt=\"\">\n            </div>\n            <div class=\"ourclients-container__item\">\n                <img src=\"../assets/images/logo.svg\" alt=\"\">\n            </div>\n            <div class=\"ourclients-container__item\">\n                <img src=\"../assets/images/logo.svg\" alt=\"\">\n            </div>\n            <div class=\"ourclients-container__item\">\n                <img src=\"../assets/images/logo.svg\" alt=\"\">\n            </div>\n            <div class=\"ourclients-container__item\">\n                <img src=\"../assets/images/logo.svg\" alt=\"\">\n            </div>\n        </div>\n    </div>\n</div>\n\n<section class=\"getapp\">\n    <div class=\"getapp-container\">\n        <div class=\"left\">\n            <h2>Get our application</h2>\n            <p class=\"description\">\n                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.\n            </p>\n            <div class=\"buttons\">\n                <a href=\"\">\n                    <img src=\"../assets/images/googlestore.svg\" alt=\"\">\n                </a>\n                <a href=\"\">\n                    <img src=\"../assets/images/appstore.svg\" alt=\"\">\n                </a>\n            </div>\n        </div>\n        <div class=\"right\">\n            <div class=\"img\">\n                <img src=\"../assets/images/getapp.png\" alt=\"get our applicaton \">\n            </div>\n        </div>\n    </div>\n</section>\n\n<section class=\"reviews\">\n    <div class=\"reviews-container\">\n        <h2 class=\"reviews-headline\">Our Reviews</h2>\n        <div class=\"reviews-box\">\n            <div class=\"reviews-box__item\">\n                <div class=\"img\">\n                    <img src=\"../assets/images/reviews.jpg\" alt=\"\">\n                </div>\n                <div class=\"title\">\n                    Our Reviews\n                </div>\n                <div class=\"description\">\n                    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.\n                </div>\n            </div>\n            <div class=\"reviews-box__item\">\n                <div class=\"img\">\n                    <img src=\"../assets/images/reviews.jpg\" alt=\"\">\n                </div>\n                <div class=\"title\">\n                    Our Reviews\n                </div>\n                <div class=\"description\">\n                    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.\n                </div>\n            </div>\n            <div class=\"reviews-box__item\">\n                <div class=\"img\">\n                    <img src=\"../assets/images/reviews.jpg\" alt=\"\">\n                </div>\n                <div class=\"title\">\n                    Our Reviews\n                </div>\n                <div class=\"description\">\n                    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.\n                </div>\n            </div>\n        </div>\n    </div>\n</section>\n"

/***/ }),

/***/ "./src/app/pages/public/our-partners/our-partners.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/pages/public/our-partners/our-partners.component.ts ***!
  \*********************************************************************/
/*! exports provided: OurPartnersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OurPartnersComponent", function() { return OurPartnersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var OurPartnersComponent = /** @class */ (function () {
    function OurPartnersComponent() {
    }
    OurPartnersComponent.prototype.ngOnInit = function () {
    };
    OurPartnersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-our-partners',
            template: __webpack_require__(/*! ./our-partners.component.html */ "./src/app/pages/public/our-partners/our-partners.component.html"),
            styles: [__webpack_require__(/*! ./our-partners.component.css */ "./src/app/pages/public/our-partners/our-partners.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], OurPartnersComponent);
    return OurPartnersComponent;
}());



/***/ }),

/***/ "./src/app/pages/public/signup/signup.component.html":
/*!***********************************************************!*\
  !*** ./src/app/pages/public/signup/signup.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"login-registration\">\n  <h2>Registration</h2>\n  <p class=\"description\">\n    Hi there! Please enter your username or e-mail to managing your Store items\n  </p>\n  <form class=\"example-form\" (ngSubmit)=\"signUp($event)\" [formGroup]=\"myForm\">\n    <mat-form-field class=\"signup-input\" appearance=\"outline\">\n      <mat-label>First Name</mat-label>\n      <input matInput placeholder=\"First Name\" [formControl]=\"firstNameFormControl\"\n             [errorStateMatcher]=\"matcher2\">\n      <mat-error *ngIf=\"firstNameFormControl.hasError('required')\">\n        First Name is <strong>required</strong>\n      </mat-error>\n    </mat-form-field>\n    <mat-form-field class=\"signup-input\" appearance=\"outline\">\n      <mat-label>Last Name</mat-label>\n      <input matInput placeholder=\"Last Name\" [formControl]=\"lastNameFormControl\"\n             [errorStateMatcher]=\"matcher2\">\n      <mat-error *ngIf=\"lastNameFormControl.hasError('required')\">\n        Last Name is <strong>required</strong>\n      </mat-error>\n    </mat-form-field>\n    <mat-form-field class=\"signup-input\" appearance=\"outline\">\n      <mat-label>Phone</mat-label>\n      <input matInput placeholder=\"Phone\" [formControl]=\"phoneFormControl\"\n             [errorStateMatcher]=\"matcher2\">\n      <mat-error *ngIf=\"phoneFormControl.hasError('required')\">\n        Phone is <strong>required</strong>\n      </mat-error>\n    </mat-form-field>\n    <mat-form-field class=\"signup-input\" appearance=\"outline\">\n      <mat-label>Email</mat-label>\n      <input matInput placeholder=\"Email\" [formControl]=\"emailFormControl\"\n             [errorStateMatcher]=\"matcher2\">\n      <mat-error *ngIf=\"emailFormControl.hasError('email') && !emailFormControl.hasError('required')\">\n        Please enter a valid email address\n      </mat-error>\n      <mat-error *ngIf=\"emailFormControl.hasError('required')\">\n        Email is <strong>required</strong>\n      </mat-error>\n    </mat-form-field>\n\n    <mat-form-field class=\"signup-input\" appearance=\"outline\">\n      <mat-label>Country</mat-label>\n      <input matInput placeholder=\"Country\" [formControl]=\"countryFormControl\"\n             [errorStateMatcher]=\"matcher2\">\n      <mat-error *ngIf=\"countryFormControl.hasError('required')\">\n         Country is <strong>required</strong>\n      </mat-error>\n    </mat-form-field>\n\n    <mat-form-field class=\"signup-input\" appearance=\"outline\">\n      <mat-label>City</mat-label>\n      <input matInput placeholder=\"City\" [formControl]=\"cityFormControl\"\n             [errorStateMatcher]=\"matcher2\">\n      <mat-error *ngIf=\"cityFormControl.hasError('required')\">\n        City is <strong>required</strong>\n      </mat-error>\n    </mat-form-field>\n\n    <mat-form-field class=\"signup-input\" appearance=\"outline\">\n      <mat-label>City</mat-label>\n      <input matInput placeholder=\"City\" [formControl]=\"cityCodeFormControl\"\n             [errorStateMatcher]=\"matcher2\">\n      <mat-error *ngIf=\"cityCodeFormControl.hasError('required')\">\n        City code is <strong>required</strong>\n      </mat-error>\n    </mat-form-field>\n\n    <mat-form-field class=\"signup-input\" appearance=\"outline\">\n      <mat-label>Address1</mat-label>\n      <input matInput placeholder=\"Address1\" [formControl]=\"addressFormControl\"\n             [errorStateMatcher]=\"matcher2\">\n      <mat-error *ngIf=\"addressFormControl.hasError('required')\">\n        Address1 is <strong>required</strong>\n      </mat-error>\n    </mat-form-field>\n\n    <mat-form-field class=\"signup-input\" appearance=\"outline\">\n      <mat-label>Address2</mat-label>\n      <input matInput placeholder=\"Address2\" [formControl]=\"address2FormControl\">\n    </mat-form-field>\n\n    <mat-form-field class=\"signup-input\" appearance=\"outline\">\n      <mat-label>Password</mat-label>\n      <input autocomplete=\"off\" required matInput placeholder=\"Password\" type=\"password\"\n             [errorStateMatcher]=\"matcher\" formControlName=\"passwordFormControl\">\n      <mat-error *ngIf=\"myForm.hasError('required')\">\n        Please enter your newpassword\n      </mat-error>\n    </mat-form-field>\n\n    <mat-form-field class=\"signup-input\" appearance=\"outline\">\n      <mat-label>Confirm Password</mat-label>\n      <input autocomplete=\"off\" matInput placeholder=\"Confirm Password\" type=\"password\"\n             [errorStateMatcher]=\"matcher\" formControlName=\"password2FormControl\">\n      <mat-error *ngIf=\"myForm.hasError('notSame')\">\n        Passwords do not match\n      </mat-error>\n    </mat-form-field>\n\n    <input type=\"submit\" id=\"submit\" name=\"submit\" class=\"submit\" value=\"Registration\">\n  </form>\n</div>\n"

/***/ }),

/***/ "./src/app/pages/public/signup/signup.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/pages/public/signup/signup.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mat-form-field {\n  border-radius: 50px !important; }\n\n.mat-form-field-appearance-outline.mat-form-field-invalid.mat-form-field-invalid .mat-form-field-outline-thick:hover {\n  color: #13AAFF;\n  border-color: #13AAFF; }\n\n.mat-form-field-appearance-outline .mat-form-field-flex:hover {\n  color: #13AAFF;\n  border-color: #13AAFF; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90eW1vZmlpeXV6ZWZvdnljaC9EZXNrdG9wL2xhdW5kcndpc2UyL2FwcExhdW5kcndpc2Uvc3JjL2FwcC9wYWdlcy9wdWJsaWMvc2lnbnVwL3NpZ251cC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNFLDhCQUE2QixFQUFBOztBQUUvQjtFQUVJLGNBQWM7RUFDZCxxQkFBcUIsRUFBQTs7QUFJekI7RUFFSSxjQUFjO0VBQ2QscUJBQXFCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9wdWJsaWMvc2lnbnVwL3NpZ251cC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLm1hdC1mb3JtLWZpZWxke1xuICBib3JkZXItcmFkaXVzOiA1MHB4IWltcG9ydGFudDtcbn1cbi5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLW91dGxpbmUubWF0LWZvcm0tZmllbGQtaW52YWxpZC5tYXQtZm9ybS1maWVsZC1pbnZhbGlkIC5tYXQtZm9ybS1maWVsZC1vdXRsaW5lLXRoaWNre1xuICAmOmhvdmVye1xuICAgIGNvbG9yOiAjMTNBQUZGO1xuICAgIGJvcmRlci1jb2xvcjogIzEzQUFGRjtcbiAgfVxufVxuXG4ubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1vdXRsaW5lIC5tYXQtZm9ybS1maWVsZC1mbGV4e1xuICAmOmhvdmVye1xuICAgIGNvbG9yOiAjMTNBQUZGO1xuICAgIGJvcmRlci1jb2xvcjogIzEzQUFGRjtcbiAgfVxufVxuIl19 */"

/***/ }),

/***/ "./src/app/pages/public/signup/signup.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/public/signup/signup.component.ts ***!
  \*********************************************************/
/*! exports provided: MyErrorStateMatcher, MyErrorStateMatcher2, SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyErrorStateMatcher", function() { return MyErrorStateMatcher; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyErrorStateMatcher2", function() { return MyErrorStateMatcher2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _crud_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../crud.service */ "./src/app/crud.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/ngx-cookie-service.es5.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../auth.service */ "./src/app/auth.service.ts");







/** Error when invalid control is dirty, touched, or submitted. */
var MyErrorStateMatcher = /** @class */ (function () {
    function MyErrorStateMatcher() {
    }
    MyErrorStateMatcher.prototype.isErrorState = function (control, form) {
        var invalidCtrl = !!(control && control.invalid && control.parent.dirty);
        var invalidParent = !!(control && control.parent && control.parent.invalid && control.parent.dirty);
        return (invalidCtrl || invalidParent);
    };
    return MyErrorStateMatcher;
}());

var MyErrorStateMatcher2 = /** @class */ (function () {
    function MyErrorStateMatcher2() {
    }
    MyErrorStateMatcher2.prototype.isErrorState = function (control, form) {
        var isSubmitted = form && form.submitted;
        return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
    };
    return MyErrorStateMatcher2;
}());

var SignupComponent = /** @class */ (function () {
    function SignupComponent(router, api, cookieService, auth, formBuilder) {
        this.router = router;
        this.api = api;
        this.cookieService = cookieService;
        this.auth = auth;
        this.formBuilder = formBuilder;
        this.matcher = new MyErrorStateMatcher();
        this.matcher2 = new MyErrorStateMatcher2();
        this.firstNameFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required
        ]);
        this.lastNameFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required
        ]);
        this.phoneFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
        ]);
        this.emailFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email,
        ]);
        this.countryFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required
        ]);
        this.cityFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required
        ]);
        this.cityCodeFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required
        ]);
        this.addressFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required
        ]);
        this.address2FormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', []);
        this.myForm = this.formBuilder.group({
            passwordFormControl: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            password2FormControl: ['']
        }, { validator: this.veryfyPass });
    }
    SignupComponent.prototype.ngOnInit = function () {
    };
    SignupComponent.prototype.veryfyPass = function (group) {
        var pass = group.controls.passwordFormControl.value;
        var confirmPass = group.controls.password2FormControl.value;
        return pass === confirmPass ? null : { notSame: true };
    };
    SignupComponent.prototype.signUp = function (e) {
        var _this = this;
        e.preventDefault();
        var apiUrl = 'signup';
        var signup = {
            firstName: this.firstNameFormControl.value,
            lastName: this.lastNameFormControl.value,
            login: this.emailFormControl.value,
            email: this.emailFormControl.value,
            mobile: this.phoneFormControl.value,
            address1: this.addressFormControl.value,
            address2: this.address2FormControl.value,
            country: this.countryFormControl.value,
            city: this.cityFormControl.value,
            cityCode: this.cityCodeFormControl.value,
            pass: this.myForm.value.passwordFormControl,
        };
        this.api.post(apiUrl, signup).then(function (value) {
            console.log(value);
            _this.cookieService.set('token', value.token);
            _this.cookieService.set('userId', value.userId);
            _this.auth.isAuth();
            _this.router.navigate(['/']);
            // this.router.navigate(['/signin']);
        }, function (error) {
            console.log(error);
        });
    };
    SignupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-signup',
            template: __webpack_require__(/*! ./signup.component.html */ "./src/app/pages/public/signup/signup.component.html"),
            styles: [__webpack_require__(/*! ./signup.component.scss */ "./src/app/pages/public/signup/signup.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _crud_service__WEBPACK_IMPORTED_MODULE_3__["CrudService"],
            ngx_cookie_service__WEBPACK_IMPORTED_MODULE_5__["CookieService"],
            _auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]])
    ], SignupComponent);
    return SignupComponent;
}());



/***/ }),

/***/ "./src/environments/environment.prod.ts":
/*!**********************************************!*\
  !*** ./src/environments/environment.prod.ts ***!
  \**********************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
var environment = {
    production: true,
    host: 'http://localhost:5000/api/'
};


/***/ }),

/***/ "./src/environments/environment.ts":
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
var environment = {
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

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/tymofiiyuzefovych/Desktop/laundrwise2/appLaundrwise/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map