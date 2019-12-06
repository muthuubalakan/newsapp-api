(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-----------------Header--------------------->\n<div class=\"usim-container\">\n  <div class=\"head-content\">\n    <div class=\"container-fluid\" style=\"padding: 0;\">\n      <div class=\"row\">\n        <div class=\"col-12\">\n            <nav class=\"navbar navbar-expand-lg navbar-light mat-elevation-z6\">\n                <div style=\"margin-left: 50px;\">\n                    <a routerLink=\"/\"><span class=\"g-style-span\"> <mat-icon style=\"font-size: 15px; margin-bottom: 5px;\">menu_book</mat-icon>NewsApp</span></a>\n                </div>\n                <form class=\"form-inline\" style=\"width: 70%;\">\n                  <input  class=\"form-control\"\n                  [ngModelOptions]=\"{standalone: true}\"\n                  [(ngModel)]=\"keyword\"\n                  style=\"margin-left: 30px; background-color: #004a96; border-color: #4279b2; color:white; width: 70%;\"\n                   type=\"search\" placeholder=\"Search\" aria-label=\"Search\">\n                  <button class=\"btn btn-outline-primary\"\n                  (click)=\"search()\"\n                  style=\"border-color: #4279b2; color: #a09f9f; margin-left: 10px;\">Search</button>\n                </form>\n                </nav>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"main-content\">\n    <div class=\"container-fluid h-100\">\n      <div class=\"row h-100\">\n        <div class=\"col-12\">\n            <router-outlet></router-outlet>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/details/details.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/details/details.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div  class=\"container-fluid feed-container\">\n    <div class=\"row justify-content-center\">\n        <div class=\"col-2\">\n            <button routerLink=\"/\" mat-fab style=\"color: beige;\"><mat-icon>arrow_back</mat-icon></button>\n        </div>\n        <div class=\"col-8\" *ngIf=\"data\">\n            <div class=\"row\">\n                <div class=\"col-12\">\n                    <h1> {{data.title}}</h1>\n                </div>\n            </div>\n            <div class=\"row\" *ngIf=\"data.author\">\n                <div class=\"col-12\">\n                    <h5> <span>Author: </span>{{data.author}}</h5>\n                </div>\n            </div>\n            \n            <div class=\"row\">\n                <div class=\"col-12\">\n                    <div>\n                        <img [src]=\"data.urlToImage\" class=\"img-fluid\">\n                    </div>\n                </div>\n            </div>\n            \n            <div class=\"row\">\n                <div class=\"col-12\">\n                    <p>{{data.content}}</p>\n                </div>\n            </div>\n            <div class=\"row\">\n                <div class=\"col-12\">\n                    <span>Source: <a href=\"{{data.url}}\">{{data.url}}</a></span>\n                </div>\n            </div>\n            \n            <div class=\"row\">\n                <div class=\"col-12\" style=\"margin-top: 50px;\">\n                    <h4>Related articles</h4>\n                    <mat-divider></mat-divider>\n                </div>\n                \n            </div>\n            \n            <div class=\"row\">\n                <div class=\"col-12\">\n                    <div *ngFor=\"let news of relatednews\">\n                        <mat-card class=\"news-card\">\n                            <mat-card-header>\n                                <div mat-card-avatar  style=\"width: 170px; height: 170px;\"> <img mat-card-image [src]=\"news.urlToImage\"></div>\n                                <mat-card-title><a [routerLink]=\"['/feed', news.id]\"> {{news.title}}</a></mat-card-title>\n                                <mat-card-subtitle>{{news.author}}, <mat-icon class=\"time\">access_time</mat-icon>{{news.publishedAt | date}}</mat-card-subtitle>\n                                <mat-card-subtitle></mat-card-subtitle>\n                            </mat-card-header>\n                            <mat-card-content>\n                                <p>\n                                    {{news.description}}...\n                                    <a [routerLink]=\"['/feed', news.id]\"> Readmore</a>\n                                </p>\n                            </mat-card-content>\n                            <mat-card-actions>\n                                \n                            </mat-card-actions>\n                        </mat-card>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n    \n    \n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/newsfeed/newsfeed.component.html":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/newsfeed/newsfeed.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "  <div class=\"container-fluid newsfeed-container\" >\n    <div class=\"row justify-content-end\" *ngIf=\"allNews\">\n      <div class=\"col-lg-7\">\n        <div class=\"container-fluid preview\">\n          <div class=\"row\">\n            <div class=\"col-12\">\n              <h1> <a [routerLink]=\"['/feed', data.id]\"> {{data.title}}</a></h1>\n            </div>\n          </div>\n          <div class=\"row\" *ngIf=\"data.author\">\n            <div class=\"col-12\">\n              <h5> <span>Author: </span>{{data.author}}</h5>\n            </div>\n          </div>\n          \n          <div class=\"row\">\n            <div class=\"col-8\">\n              <div>\n                <img [src]=\"data.urlToImage\" class=\"img-fluid\">\n              </div>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-12\">\n              <div>\n                <p>\n                  {{data.description}}...\n                  <a [routerLink]=\"['/feed', data.id]\"> Readmore</a>\n                </p>\n              </div>\n            </div>\n          </div>\n          \n        </div>\n        \n        <div *ngFor=\"let news of allNews\">\n          <mat-card class=\"news-card\">\n            <mat-card-header>\n              <div mat-card-avatar  style=\"width: 170px; height: 170px;\"> <img mat-card-image [src]=\"news.urlToImage\"></div>\n              <mat-card-title><a [routerLink]=\"['/feed', news.id]\"> {{news.title}}</a></mat-card-title>\n              <mat-card-subtitle>{{news.author}}, <mat-icon class=\"time\">access_time</mat-icon>{{news.publishedAt | date}}</mat-card-subtitle>\n              <mat-card-subtitle></mat-card-subtitle>\n            </mat-card-header>\n            <mat-card-content>\n              <p>\n                {{news.description}}...\n                <a [routerLink]=\"['/feed', news.id]\"> Readmore</a>\n              </p>\n            </mat-card-content>\n            <mat-card-actions>\n              \n            </mat-card-actions>\n          </mat-card>\n        </div>\n      </div>\n      <div class=\"col-lg-4\">\n        <div class=\"container\">\n          <div class=\"row\">\n            <div class=\"col-12\">\n              <h3 class=\"top-story\">Top Stories</h3>\n              <mat-divider></mat-divider>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-12\">\n              <mat-list>\n                <!-- <h3 mat-subheader>Folders</h3> -->\n                <mat-list-item *ngFor=\"let story of headlines\">\n                  <!-- <mat-icon mat-list-icon>folder</mat-icon> -->\n                  <h3 mat-line >\n                    <a  [routerLink]=\"['/feed', story.id]\">{{story.title}}</a>\n                  </h3 >\n                  <p mat-line> <span *ngIf=\"story.author\"> {{story.author}}, </span> {{story.publishedAt | date}} </p>\n                </mat-list-item>\n                <mat-divider></mat-divider>\n              </mat-list>\n            </div>\n          </div>\n          \n        </div>\n      </div>\n    </div>\n  </div>"

/***/ }),

/***/ "./src/app/api-service.service.ts":
/*!****************************************!*\
  !*** ./src/app/api-service.service.ts ***!
  \****************************************/
/*! exports provided: ApiServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiServiceService", function() { return ApiServiceService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");



let ApiServiceService = class ApiServiceService {
    constructor(http) {
        this.http = http;
        this.searchKeyword = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.url = "http://usimweb1.f206.basf-ag.de:9996/api/news";
    }
    setKeyword(keyword) {
        this.searchKeyword.emit(keyword);
    }
    getKeyword() {
        return this.searchKeyword;
    }
    setClickedId(id) {
        this.clckedId = id;
    }
    getClickedId() {
        return this.clckedId;
    }
    getNewsFeed() {
        return this.http.get(this.url);
    }
    getNewsDetail(id) {
        const url = `${this.url + "/" + id}`;
        return this.http.get(url);
    }
    getHeadlines() {
        const url = `${this.url + "/" + "?q=headlines"}`;
        return this.http.get(url);
    }
    getRelatedNews(query) {
        const url = `${this.url + "/" + "?q=" + query}`;
        return this.http.get(url);
    }
};
ApiServiceService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])()
], ApiServiceService.prototype, "searchKeyword", void 0);
ApiServiceService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
    })
], ApiServiceService);



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _newsfeed_newsfeed_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./newsfeed/newsfeed.component */ "./src/app/newsfeed/newsfeed.component.ts");
/* harmony import */ var _details_details_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./details/details.component */ "./src/app/details/details.component.ts");





const routes = [
    {
        path: '',
        component: _newsfeed_newsfeed_component__WEBPACK_IMPORTED_MODULE_3__["NewsfeedComponent"]
    },
    {
        path: 'feed/:id',
        component: _details_details_component__WEBPACK_IMPORTED_MODULE_4__["DetailsComponent"]
    },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "nav {\r\n    height: 70px;\r\n    background:  #004a96;\r\n}\r\n\r\n::ng-deep .mat-card-avatar {\r\n    border-radius: 0% !important;\r\n    margin-right: 10px;\r\n}\r\n\r\n.news-card {\r\n    margin: 20px 0px;\r\n}\r\n\r\n.btn:hover{\r\n   background-color: #004a96; \r\n}\r\n\r\n@media (max-width: 700px) { \r\n\r\n    .form-inline{\r\n      visibility: hidden;\r\n    }\r\n   }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0lBQ1osb0JBQW9CO0FBQ3hCOztBQUVBO0lBQ0ksNEJBQTRCO0lBQzVCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtHQUNHLHlCQUF5QjtBQUM1Qjs7QUFFQTs7SUFFSTtNQUNFLGtCQUFrQjtJQUNwQjtHQUNEIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJuYXYge1xyXG4gICAgaGVpZ2h0OiA3MHB4O1xyXG4gICAgYmFja2dyb3VuZDogICMwMDRhOTY7XHJcbn1cclxuXHJcbjo6bmctZGVlcCAubWF0LWNhcmQtYXZhdGFyIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDAlICFpbXBvcnRhbnQ7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbn1cclxuXHJcbi5uZXdzLWNhcmQge1xyXG4gICAgbWFyZ2luOiAyMHB4IDBweDtcclxufVxyXG5cclxuLmJ0bjpob3ZlcntcclxuICAgYmFja2dyb3VuZC1jb2xvcjogIzAwNGE5NjsgXHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA3MDBweCkgeyBcclxuXHJcbiAgICAuZm9ybS1pbmxpbmV7XHJcbiAgICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcclxuICAgIH1cclxuICAgfSJdfQ== */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _api_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./api-service.service */ "./src/app/api-service.service.ts");



let AppComponent = class AppComponent {
    constructor(mainService) {
        this.mainService = mainService;
        this.title = 'newsapp';
    }
    search() {
        this.mainService.setKeyword(this.keyword);
        console.log("Called", this.keyword);
    }
};
AppComponent.ctorParameters = () => [
    { type: _api_service_service__WEBPACK_IMPORTED_MODULE_2__["ApiServiceService"] }
];
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
    })
], AppComponent);



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _mat_stylemodules__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./mat-stylemodules */ "./src/app/mat-stylemodules.ts");
/* harmony import */ var _newsfeed_newsfeed_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./newsfeed/newsfeed.component */ "./src/app/newsfeed/newsfeed.component.ts");
/* harmony import */ var _details_details_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./details/details.component */ "./src/app/details/details.component.ts");
/* harmony import */ var _api_service_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./api-service.service */ "./src/app/api-service.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");












let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
            _newsfeed_newsfeed_component__WEBPACK_IMPORTED_MODULE_8__["NewsfeedComponent"],
            _details_details_component__WEBPACK_IMPORTED_MODULE_9__["DetailsComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
            _mat_stylemodules__WEBPACK_IMPORTED_MODULE_7__["MatStlyleModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"]
        ],
        providers: [_api_service_service__WEBPACK_IMPORTED_MODULE_10__["ApiServiceService"]],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/details/details.component.css":
/*!***********************************************!*\
  !*** ./src/app/details/details.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".feed-container{\r\n    margin-top: 40px;\r\n}\r\n\r\n.feed-container img{\r\n    margin-top: 40px;\r\n}\r\n\r\np {\r\n    margin-top: 30px;\r\n    font-size: 20px;\r\n}\r\n\r\n.mat-fab.mat-accent{\r\n    background: #8e8e8e !important;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGV0YWlscy9kZXRhaWxzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsZUFBZTtBQUNuQjs7QUFHQTtJQUNJLDhCQUE4QjtBQUNsQyIsImZpbGUiOiJzcmMvYXBwL2RldGFpbHMvZGV0YWlscy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZlZWQtY29udGFpbmVye1xyXG4gICAgbWFyZ2luLXRvcDogNDBweDtcclxufVxyXG5cclxuLmZlZWQtY29udGFpbmVyIGltZ3tcclxuICAgIG1hcmdpbi10b3A6IDQwcHg7XHJcbn1cclxuXHJcbnAge1xyXG4gICAgbWFyZ2luLXRvcDogMzBweDtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxufVxyXG5cclxuXHJcbi5tYXQtZmFiLm1hdC1hY2NlbnR7XHJcbiAgICBiYWNrZ3JvdW5kOiAjOGU4ZThlICFpbXBvcnRhbnQ7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/details/details.component.ts":
/*!**********************************************!*\
  !*** ./src/app/details/details.component.ts ***!
  \**********************************************/
/*! exports provided: DetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailsComponent", function() { return DetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _api_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../api-service.service */ "./src/app/api-service.service.ts");




let DetailsComponent = class DetailsComponent {
    constructor(router, mainService) {
        this.router = router;
        this.mainService = mainService;
    }
    ngOnInit() {
        this.router.params.subscribe(param => {
            this.newsId = param;
            this.fetchDetail(this.newsId.id);
        });
    }
    fetchDetail(id) {
        this.mainService.getNewsDetail(id).subscribe(response => {
            this.data = response;
            this.getRelated(this.data.category);
        });
    }
    getRelated(query) {
        this.mainService.getRelatedNews(query).subscribe(response => {
            this.relatednews = response;
        });
    }
    reload() {
        window.location.reload();
    }
};
DetailsComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _api_service_service__WEBPACK_IMPORTED_MODULE_3__["ApiServiceService"] }
];
DetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-details',
        template: __webpack_require__(/*! raw-loader!./details.component.html */ "./node_modules/raw-loader/index.js!./src/app/details/details.component.html"),
        styles: [__webpack_require__(/*! ./details.component.css */ "./src/app/details/details.component.css")]
    })
], DetailsComponent);



/***/ }),

/***/ "./src/app/mat-stylemodules.ts":
/*!*************************************!*\
  !*** ./src/app/mat-stylemodules.ts ***!
  \*************************************/
/*! exports provided: MatStlyleModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatStlyleModule", function() { return MatStlyleModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/a11y */ "./node_modules/@angular/cdk/esm2015/a11y.js");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "./node_modules/@angular/cdk/esm2015/drag-drop.js");
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/portal */ "./node_modules/@angular/cdk/esm2015/portal.js");
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/scrolling */ "./node_modules/@angular/cdk/esm2015/scrolling.js");
/* harmony import */ var _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/stepper */ "./node_modules/@angular/cdk/esm2015/stepper.js");
/* harmony import */ var _angular_cdk_table__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/table */ "./node_modules/@angular/cdk/esm2015/table.js");
/* harmony import */ var _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/cdk/tree */ "./node_modules/@angular/cdk/esm2015/tree.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");










let MatStlyleModule = class MatStlyleModule {
};
MatStlyleModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_8__["NgModule"])({
        imports: [_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_1__["A11yModule"],
            _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_5__["CdkStepperModule"],
            _angular_cdk_table__WEBPACK_IMPORTED_MODULE_6__["CdkTableModule"],
            _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_7__["CdkTreeModule"],
            _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_2__["DragDropModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatAutocompleteModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatBadgeModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatBottomSheetModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatButtonModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatButtonToggleModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatCardModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatCheckboxModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatChipsModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatStepperModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatDatepickerModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatDialogModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatDividerModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatExpansionModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatGridListModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatIconModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatInputModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatListModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatMenuModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatNativeDateModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatPaginatorModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatProgressBarModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatProgressSpinnerModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatRadioModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatRippleModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatSelectModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatSidenavModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatSliderModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatSlideToggleModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatSnackBarModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatSortModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatTableModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatTabsModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatToolbarModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatTooltipModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatTreeModule"],
            _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_3__["PortalModule"],
            _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_4__["ScrollingModule"], _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatButtonModule"], _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatCheckboxModule"], _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatSidenavModule"], _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatMenuModule"]],
        exports: [_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_1__["A11yModule"],
            _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_5__["CdkStepperModule"],
            _angular_cdk_table__WEBPACK_IMPORTED_MODULE_6__["CdkTableModule"],
            _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_7__["CdkTreeModule"],
            _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_2__["DragDropModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatAutocompleteModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatBadgeModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatBottomSheetModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatButtonModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatButtonToggleModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatCardModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatCheckboxModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatChipsModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatStepperModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatDatepickerModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatDialogModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatDividerModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatExpansionModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatGridListModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatIconModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatInputModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatListModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatMenuModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatNativeDateModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatPaginatorModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatProgressBarModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatProgressSpinnerModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatRadioModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatRippleModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatSelectModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatSidenavModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatSliderModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatSlideToggleModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatSnackBarModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatSortModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatTableModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatTabsModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatToolbarModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatTooltipModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatTreeModule"],
            _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_3__["PortalModule"],
            _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_4__["ScrollingModule"], _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatButtonModule"], _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatCheckboxModule"], _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatSidenavModule"], _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatMenuModule"]],
    })
], MatStlyleModule);



/***/ }),

/***/ "./src/app/newsfeed/newsfeed.component.css":
/*!*************************************************!*\
  !*** ./src/app/newsfeed/newsfeed.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".newsfeed-container {\r\n    margin-top: 20px;\r\n    width: 90%;\r\n}\r\n\r\n.news-card {\r\n    margin: 20px 0px;\r\n}\r\n\r\n.top-story{\r\n    padding: 10px;\r\n}\r\n\r\n::ng-deep .mat-card-avatar {\r\n    border-radius: 0% !important;\r\n    margin-right: 10px;\r\n}\r\n\r\n::ng-deep .time {\r\n    font-size: 18px !important;\r\n    margin-left: 10px;\r\n    margin-top: 2px;\r\n}\r\n\r\nmat-card-content p{\r\n    font-size: 18px;\r\n}\r\n\r\na{\r\n    color: #004a96;\r\n}\r\n\r\n.preview{\r\n    margin-bottom: 40px;\r\n}\r\n\r\n.preview p{\r\n    margin-top: 40px;\r\n    font-size: 20px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmV3c2ZlZWQvbmV3c2ZlZWQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGdCQUFnQjtJQUNoQixVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksNEJBQTRCO0lBQzVCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLDBCQUEwQjtJQUMxQixpQkFBaUI7SUFDakIsZUFBZTtBQUNuQjs7QUFHQTtJQUNJLGVBQWU7QUFDbkI7O0FBR0E7SUFDSSxjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGVBQWU7QUFDbkIiLCJmaWxlIjoic3JjL2FwcC9uZXdzZmVlZC9uZXdzZmVlZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5ld3NmZWVkLWNvbnRhaW5lciB7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgd2lkdGg6IDkwJTtcclxufVxyXG5cclxuLm5ld3MtY2FyZCB7XHJcbiAgICBtYXJnaW46IDIwcHggMHB4O1xyXG59XHJcblxyXG4udG9wLXN0b3J5e1xyXG4gICAgcGFkZGluZzogMTBweDtcclxufVxyXG5cclxuOjpuZy1kZWVwIC5tYXQtY2FyZC1hdmF0YXIge1xyXG4gICAgYm9yZGVyLXJhZGl1czogMCUgIWltcG9ydGFudDtcclxuICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxufVxyXG5cclxuOjpuZy1kZWVwIC50aW1lIHtcclxuICAgIGZvbnQtc2l6ZTogMThweCAhaW1wb3J0YW50O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiAycHg7XHJcbn1cclxuXHJcblxyXG5tYXQtY2FyZC1jb250ZW50IHB7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbn1cclxuXHJcblxyXG5he1xyXG4gICAgY29sb3I6ICMwMDRhOTY7XHJcbn1cclxuXHJcbi5wcmV2aWV3e1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNDBweDtcclxufVxyXG5cclxuLnByZXZpZXcgcHtcclxuICAgIG1hcmdpbi10b3A6IDQwcHg7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/newsfeed/newsfeed.component.ts":
/*!************************************************!*\
  !*** ./src/app/newsfeed/newsfeed.component.ts ***!
  \************************************************/
/*! exports provided: NewsfeedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsfeedComponent", function() { return NewsfeedComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _api_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api-service.service */ "./src/app/api-service.service.ts");



let NewsfeedComponent = class NewsfeedComponent {
    constructor(mainService) {
        this.mainService = mainService;
    }
    ngOnInit() {
        this.getQueriedNews();
        this.mainService.getNewsFeed().subscribe(resp => {
            this.fetchHeadlines();
            this.allNews = resp;
            this.data = this.allNews.pop();
        });
    }
    getQueriedNews() {
        this.mainService.getKeyword().subscribe(keyword => {
            this.keyword = keyword;
            this.getNews(this.keyword);
        });
    }
    getNews(keyword) {
        this.mainService.getRelatedNews(keyword).subscribe(resp => {
            this.allNews = resp;
            this.data = this.allNews.pop();
            this.fetchHeadlines();
        });
    }
    fetchHeadlines() {
        this.mainService.getHeadlines().subscribe(resp => {
            this.headlines = resp;
        });
    }
};
NewsfeedComponent.ctorParameters = () => [
    { type: _api_service_service__WEBPACK_IMPORTED_MODULE_2__["ApiServiceService"] }
];
NewsfeedComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-newsfeed',
        template: __webpack_require__(/*! raw-loader!./newsfeed.component.html */ "./node_modules/raw-loader/index.js!./src/app/newsfeed/newsfeed.component.html"),
        styles: [__webpack_require__(/*! ./newsfeed.component.css */ "./src/app/newsfeed/newsfeed.component.css")]
    })
], NewsfeedComponent);



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /projects/balakrm/newsfeed/frontend/newsapp/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map