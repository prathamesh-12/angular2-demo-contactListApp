System.register(["angular2/core"], function(exports_1, context_1) {
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
    var core_1;
    var ContactComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            ContactComponent = (function () {
                function ContactComponent() {
                    this.contact = {};
                }
                ContactComponent = __decorate([
                    core_1.Component({
                        selector: 'contact',
                        template: "\n            <div>\n                <label for=\"txt_firstName\">First Name</label>\n                <input type=\"text\" [(ngModel)]=\"contact.firstName\" id=\"txt_firstName\"/>\n            </div>\n            <div>\n                <label for=\"txt_lastName\">Last Name</label>\n                <input type=\"text\" [(ngModel)]=\"contact.lastName\" id=\"txt_lastName\"/>\n            </div>\n            <div>\n                <label for=\"txt_phone\">Phone</label>\n                <input type=\"text\" [(ngModel)]=\"contact.phone\" id=\"txt_phone\"/>\n            </div>\n            <div>\n                <label for=\"txt_email\">Email</label>\n                <input type=\"text\" [(ngModel)]=\"contact.email\" id=\"txt_email\"/>\n            </div>\n            <div>\n                <button (click)=\"onRouteWithParamsClicked()\">Route With Params</button>\n            </div>\n    ",
                        inputs: ['contact'],
                        styles: ["\n        label {\n            display: inline-block;\n            width: 150px;\n        }\n        input:text {\n            width: 250px;\n        }\n    "]
                    }), 
                    __metadata('design:paramtypes', [])
                ], ContactComponent);
                return ContactComponent;
            }());
            exports_1("ContactComponent", ContactComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRhY3RzL2NvbnRhY3QuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBc0NBO2dCQUFBO29CQUNXLFlBQU8sR0FBRyxFQUFFLENBQUM7Z0JBQ3hCLENBQUM7Z0JBdENEO29CQUFDLGdCQUFTLENBQUM7d0JBQ1AsUUFBUSxFQUFFLFNBQVM7d0JBQ25CLFFBQVEsRUFBRSxnNEJBb0JUO3dCQUVELE1BQU0sRUFBRSxDQUFDLFNBQVMsQ0FBQzt3QkFDbkIsTUFBTSxFQUFFLENBQUMsK0pBUVIsQ0FBQztxQkFDTCxDQUFDOztvQ0FBQTtnQkFJRix1QkFBQztZQUFELENBRkEsQUFFQyxJQUFBO1lBRkQsK0NBRUMsQ0FBQSIsImZpbGUiOiJjb250YWN0cy9jb250YWN0LmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gXCJhbmd1bGFyMi9jb3JlXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnY29udGFjdCcsXHJcbiAgICB0ZW1wbGF0ZTogYFxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cInR4dF9maXJzdE5hbWVcIj5GaXJzdCBOYW1lPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIFsobmdNb2RlbCldPVwiY29udGFjdC5maXJzdE5hbWVcIiBpZD1cInR4dF9maXJzdE5hbWVcIi8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cInR4dF9sYXN0TmFtZVwiPkxhc3QgTmFtZTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBbKG5nTW9kZWwpXT1cImNvbnRhY3QubGFzdE5hbWVcIiBpZD1cInR4dF9sYXN0TmFtZVwiLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwidHh0X3Bob25lXCI+UGhvbmU8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgWyhuZ01vZGVsKV09XCJjb250YWN0LnBob25lXCIgaWQ9XCJ0eHRfcGhvbmVcIi8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cInR4dF9lbWFpbFwiPkVtYWlsPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIFsobmdNb2RlbCldPVwiY29udGFjdC5lbWFpbFwiIGlkPVwidHh0X2VtYWlsXCIvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gKGNsaWNrKT1cIm9uUm91dGVXaXRoUGFyYW1zQ2xpY2tlZCgpXCI+Um91dGUgV2l0aCBQYXJhbXM8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICBgLFxyXG4gICAgXHJcbiAgICBpbnB1dHM6IFsnY29udGFjdCddLFxyXG4gICAgc3R5bGVzOiBbYFxyXG4gICAgICAgIGxhYmVsIHtcclxuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICB3aWR0aDogMTUwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlucHV0OnRleHQge1xyXG4gICAgICAgICAgICB3aWR0aDogMjUwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgYF1cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBDb250YWN0Q29tcG9uZW50IHtcclxuICAgIHB1YmxpYyBjb250YWN0ID0ge307XHJcbn0iXX0=
