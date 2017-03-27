System.register(['angular2/router', "angular2/core"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var router_1, core_1;
    var ContactComponent;
    return {
        setters:[
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            ContactComponent = (function () {
                function ContactComponent(_router) {
                    this._router = _router;
                    this.contact = null;
                }
                ContactComponent.prototype.onRouteWithParamsClicked = function () {
                    this._router.navigate(["NewContactRouteParams", { lastName: this.contact.lastName }]);
                };
                ContactComponent = __decorate([
                    core_1.Component({
                        selector: 'contact',
                        template: "\n            <div>\n                <label for=\"txt_firstName\">First Name</label>\n                <input type=\"text\" [(ngModel)]=\"contact.firstName\" id=\"txt_firstName\"/>\n            </div>\n            <div>\n                <label for=\"txt_lastName\">Last Name</label>\n                <input type=\"text\" [(ngModel)]=\"contact.lastName\" id=\"txt_lastName\"/>\n            </div>\n            <div>\n                <label for=\"txt_phone\">Phone</label>\n                <input type=\"text\" [(ngModel)]=\"contact.phone\" id=\"txt_phone\"/>\n            </div>\n            <div>\n                <label for=\"txt_email\">Email</label>\n                <input type=\"text\" [(ngModel)]=\"contact.email\" id=\"txt_email\"/>\n            </div>\n            <div>\n                <button (click)=\"onRouteWithParamsClicked()\">Route With Params</button>\n            </div>\n    ",
                        inputs: ['contact'],
                        styles: ["\n        label {\n            display: inline-block;\n            width: 150px;\n        }\n        input:text {\n            width: 250px;\n        }\n    "]
                    }), 
                    __metadata('design:paramtypes', [router_1.Router])
                ], ContactComponent);
                return ContactComponent;
            }());
            exports_1("ContactComponent", ContactComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRhY3RzL2NvbnRhY3QuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBd0NBO2dCQUdJLDBCQUFvQixPQUFlO29CQUFmLFlBQU8sR0FBUCxPQUFPLENBQVE7b0JBRjVCLFlBQU8sR0FBVyxJQUFJLENBQUM7Z0JBRVEsQ0FBQztnQkFFdkMsbURBQXdCLEdBQXhCO29CQUNJLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsdUJBQXVCLEVBQUUsRUFBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLEVBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ3hGLENBQUM7Z0JBM0NMO29CQUFDLGdCQUFTLENBQUM7d0JBQ1AsUUFBUSxFQUFFLFNBQVM7d0JBQ25CLFFBQVEsRUFBRSxnNEJBb0JUO3dCQUVELE1BQU0sRUFBRSxDQUFDLFNBQVMsQ0FBQzt3QkFDbkIsTUFBTSxFQUFFLENBQUMsK0pBUVIsQ0FBQztxQkFDTCxDQUFDOztvQ0FBQTtnQkFVRix1QkFBQztZQUFELENBUkEsQUFRQyxJQUFBO1lBUkQsK0NBUUMsQ0FBQSIsImZpbGUiOiJjb250YWN0cy9jb250YWN0LmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFJvdXRlciB9IGZyb20gJ2FuZ3VsYXIyL3JvdXRlcic7XHJcbmltcG9ydCB7IENvbnRhY3QgfSBmcm9tICcuL2NvbnRhY3QnO1xyXG5pbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tIFwiYW5ndWxhcjIvY29yZVwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ2NvbnRhY3QnLFxyXG4gICAgdGVtcGxhdGU6IGBcclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJ0eHRfZmlyc3ROYW1lXCI+Rmlyc3QgTmFtZTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBbKG5nTW9kZWwpXT1cImNvbnRhY3QuZmlyc3ROYW1lXCIgaWQ9XCJ0eHRfZmlyc3ROYW1lXCIvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJ0eHRfbGFzdE5hbWVcIj5MYXN0IE5hbWU8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgWyhuZ01vZGVsKV09XCJjb250YWN0Lmxhc3ROYW1lXCIgaWQ9XCJ0eHRfbGFzdE5hbWVcIi8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cInR4dF9waG9uZVwiPlBob25lPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIFsobmdNb2RlbCldPVwiY29udGFjdC5waG9uZVwiIGlkPVwidHh0X3Bob25lXCIvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJ0eHRfZW1haWxcIj5FbWFpbDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBbKG5nTW9kZWwpXT1cImNvbnRhY3QuZW1haWxcIiBpZD1cInR4dF9lbWFpbFwiLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIChjbGljayk9XCJvblJvdXRlV2l0aFBhcmFtc0NsaWNrZWQoKVwiPlJvdXRlIFdpdGggUGFyYW1zPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgYCxcclxuICAgIFxyXG4gICAgaW5wdXRzOiBbJ2NvbnRhY3QnXSxcclxuICAgIHN0eWxlczogW2BcclxuICAgICAgICBsYWJlbCB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgd2lkdGg6IDE1MHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICBpbnB1dDp0ZXh0IHtcclxuICAgICAgICAgICAgd2lkdGg6IDI1MHB4O1xyXG4gICAgICAgIH1cclxuICAgIGBdXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgQ29udGFjdENvbXBvbmVudCB7XHJcbiAgICBwdWJsaWMgY29udGFjdDpDb250YWN0ID0gbnVsbDtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9yb3V0ZXI6IFJvdXRlcikge31cclxuXHJcbiAgICBvblJvdXRlV2l0aFBhcmFtc0NsaWNrZWQoKSB7XHJcbiAgICAgICAgdGhpcy5fcm91dGVyLm5hdmlnYXRlKFtcIk5ld0NvbnRhY3RSb3V0ZVBhcmFtc1wiLCB7bGFzdE5hbWU6IHRoaXMuY29udGFjdC5sYXN0TmFtZX1dKTtcclxuICAgIH1cclxufSJdfQ==
