var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "@angular/core", "./in-viewport.service"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var core_1 = require("@angular/core");
    var in_viewport_service_1 = require("./in-viewport.service");
    var InViewportIntersectionService = (function (_super) {
        __extends(InViewportIntersectionService, _super);
        function InViewportIntersectionService() {
            var _this = _super.call(this) || this;
            _this.trigger$ = new core_1.EventEmitter();
            _this.observer = new IntersectionObserver(function (entries, observer) { return _this.onChanges(entries); }, {
                threshold: generateThresholdHelper()
            });
            return _this;
        }
        InViewportIntersectionService.prototype.onChanges = function (entries) {
            var result = entries.map(function (entry) { return ({
                root: window,
                target: entry.target
            }); });
            this.trigger$.emit(result);
        };
        InViewportIntersectionService.prototype.addTarget = function (target, rootElement) {
            this.observer.observe(target);
        };
        InViewportIntersectionService.prototype.removeTarget = function (target, rootElement) {
            this.observer.unobserve(target);
        };
        return InViewportIntersectionService;
    }(in_viewport_service_1.InViewportService));
    InViewportIntersectionService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [])
    ], InViewportIntersectionService);
    exports.InViewportIntersectionService = InViewportIntersectionService;
    function generateThresholdHelper() {
        var threshold = [];
        for (var i = 0; i <= 100; i++) {
            threshold.push(i / 100);
        }
        return threshold;
    }
});
//# sourceMappingURL=in-viewport-intersection.service.js.map