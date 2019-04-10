"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var Simple4Component = /** @class */ (function () {
    function Simple4Component(sanitizer) {
        this.sanitizer = sanitizer;
        this.someHtml = 'some HTML <script>alert("Helo");</script>';
        this.myUrl = 'javascript:alert("Helo")';
        this.myTrustedURL = sanitizer.bypassSecurityTrustUrl(this.myUrl);
    }
    Simple4Component.prototype.ngOnInit = function () {
    };
    Simple4Component = __decorate([
        core_1.Component({
            selector: 'app-simple4',
            templateUrl: './app/simple4/simple4.component.html'
        }),
        __metadata("design:paramtypes", [platform_browser_1.DomSanitizer])
    ], Simple4Component);
    return Simple4Component;
}());
exports.Simple4Component = Simple4Component;
//# sourceMappingURL=simple4.component.js.map