System.register(['angular2/router', './contact.service', 'angular2/core'], function(exports_1, context_1) {
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
    var router_1, contact_service_1, core_1;
    var NewContactComponent;
    return {
        setters:[
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (contact_service_1_1) {
                contact_service_1 = contact_service_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            NewContactComponent = (function () {
                function NewContactComponent(_contactService, _router, _routeParams) {
                    this._contactService = _contactService;
                    this._router = _router;
                    this._routeParams = _routeParams;
                    this.lastNameFromParams = "";
                }
                NewContactComponent.prototype.onCreateNewContactClicked = function (firstName, lastName, phone, email) {
                    var contact = {
                        firstName: firstName, lastName: lastName, phone: phone, email: email
                    };
                    this._contactService.insertContact(contact);
                    this._router.navigate(['Contacts']);
                };
                NewContactComponent.prototype.onSubmitNewConatctForm = function () {
                    this._contactService.insertContact(this.newContact);
                    this._router.navigate(["Contacts"]);
                };
                NewContactComponent.prototype.ngOnInit = function () {
                    this.lastNameFromParams = this._routeParams.get("lastName");
                    this.newContact = {
                        firstName: '',
                        lastName: this.lastNameFromParams || '',
                        phone: '',
                        email: ''
                    };
                };
                NewContactComponent = __decorate([
                    core_1.Component({
                        selector: 'new-contact',
                        template: "\n            <h3>New Contact Page!</h3>\n            <form #newContactForm=\"ngForm\" (ngSubmit)=\"onSubmitNewConatctForm()\">\n                <div class=\"form-grp\">\n                    <label for=\"txt_firstName\">First Name</label>\n                    <input type=\"text\" id=\"txt_firstName\"\n                        ngControl=\"firstName\"\n                        [(ngModel)]=\"newContact.firstName\"\n                        required\n                    />\n                </div>\n                <div class=\"form-grp\">\n                    <label for=\"txt_lastName\">Last Name</label>\n                    <input type=\"text\" id=\"txt_lastName\" value=\"{{lastNameFromParams}}\"\n                        ngControl=\"lastName\"\n                        [(ngModel)]=\"newContact.lastName\"\n                        required\n                    />\n                </div>\n                <div class=\"form-grp\">\n                    <label for=\"txt_phone\">Phone</label>\n                    <input type=\"text\" id=\"txt_phone\"\n                        ngControl=\"phone\"\n                        [(ngModel)]=\"newContact.phone\"\n                        required/>\n                </div>\n                <div class=\"form-grp\">\n                    <label for=\"txt_email\">Email</label>\n                    <input type=\"text\" id=\"txt_email\"\n                        ngControl=\"email\"\n                        [(ngModel)]=\"newContact.email\"\n                        required/>\n                </div>\n                <div class=\"form-grp\">\n                    <!--<button (click)=\"onCreateNewContactClicked(firstName.value, lastName.value, \n                    phone.value, email.value)\">Create Contact</button>-->\n                    <button type=\"submit\">Submit Contact</button>\n                </div>\n            </form>\n        ",
                        providers: [contact_service_1.ContactService],
                        styles: ["\n        label {\n            display: inline-block;\n            width: 150px;\n        }\n        input:text {\n            width: 250px;\n        }\n        .ng-invalid {\n            border: 1px solid red;\n        }\n        .form-grp {\n            margin-top: 10px;\n        }\n    "]
                    }), 
                    __metadata('design:paramtypes', [contact_service_1.ContactService, router_1.Router, router_1.RouteParams])
                ], NewContactComponent);
                return NewContactComponent;
            }());
            exports_1("NewContactComponent", NewContactComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRhY3RzL25ldy1jb250YWN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQWlFQTtnQkFJSSw2QkFBb0IsZUFBK0IsRUFBVSxPQUFlLEVBQ3BFLFlBQXlCO29CQURiLG9CQUFlLEdBQWYsZUFBZSxDQUFnQjtvQkFBVSxZQUFPLEdBQVAsT0FBTyxDQUFRO29CQUNwRSxpQkFBWSxHQUFaLFlBQVksQ0FBYTtvQkFIMUIsdUJBQWtCLEdBQUcsRUFBRSxDQUFDO2dCQUdLLENBQUM7Z0JBRXJDLHVEQUF5QixHQUF6QixVQUEwQixTQUFTLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxLQUFLO29CQUN2RCxJQUFJLE9BQU8sR0FBWTt3QkFDbkIsU0FBUyxFQUFFLFNBQVMsRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUs7cUJBQ3ZFLENBQUM7b0JBRUYsSUFBSSxDQUFDLGVBQWUsQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLENBQUM7b0JBQzVDLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQztnQkFDeEMsQ0FBQztnQkFFRCxvREFBc0IsR0FBdEI7b0JBQ0ksSUFBSSxDQUFDLGVBQWUsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO29CQUNwRCxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7Z0JBQ3hDLENBQUM7Z0JBRUQsc0NBQVEsR0FBUjtvQkFDSSxJQUFJLENBQUMsa0JBQWtCLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUM7b0JBQzVELElBQUksQ0FBQyxVQUFVLEdBQUc7d0JBQ2QsU0FBUyxFQUFFLEVBQUU7d0JBQ2IsUUFBUSxFQUFFLElBQUksQ0FBQyxrQkFBa0IsSUFBSSxFQUFFO3dCQUN2QyxLQUFLLEVBQUUsRUFBRTt3QkFDVCxLQUFLLEVBQUUsRUFBRTtxQkFDWixDQUFDO2dCQUNOLENBQUM7Z0JBekZMO29CQUFDLGdCQUFTLENBQUM7d0JBQ1AsUUFBUSxFQUFFLGFBQWE7d0JBQ3ZCLFFBQVEsRUFBRSw0MURBdUNMO3dCQUNELFNBQVMsRUFBRSxDQUFDLGdDQUFjLENBQUM7d0JBQzNCLE1BQU0sRUFBRSxDQUFDLG9TQWNaLENBQUM7cUJBQ0wsQ0FBQzs7dUNBQUE7Z0JBZ0NGLDBCQUFDO1lBQUQsQ0E5QkEsQUE4QkMsSUFBQTtZQTlCRCxxREE4QkMsQ0FBQSIsImZpbGUiOiJjb250YWN0cy9uZXctY29udGFjdC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBSb3V0ZVBhcmFtcywgUm91dGVyIH0gZnJvbSAnYW5ndWxhcjIvcm91dGVyJztcclxuaW1wb3J0IHsgQ29udGFjdFNlcnZpY2UgfSBmcm9tICcuL2NvbnRhY3Quc2VydmljZSc7XHJcbmltcG9ydCB7IENvbnRhY3QgfSBmcm9tICcuL2NvbnRhY3QnO1xyXG5pbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ25ldy1jb250YWN0JyxcclxuICAgIHRlbXBsYXRlOiBgXHJcbiAgICAgICAgICAgIDxoMz5OZXcgQ29udGFjdCBQYWdlITwvaDM+XHJcbiAgICAgICAgICAgIDxmb3JtICNuZXdDb250YWN0Rm9ybT1cIm5nRm9ybVwiIChuZ1N1Ym1pdCk9XCJvblN1Ym1pdE5ld0NvbmF0Y3RGb3JtKClcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdycFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJ0eHRfZmlyc3ROYW1lXCI+Rmlyc3QgTmFtZTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJ0eHRfZmlyc3ROYW1lXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmdDb250cm9sPVwiZmlyc3ROYW1lXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgWyhuZ01vZGVsKV09XCJuZXdDb250YWN0LmZpcnN0TmFtZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cInR4dF9sYXN0TmFtZVwiPkxhc3QgTmFtZTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJ0eHRfbGFzdE5hbWVcIiB2YWx1ZT1cInt7bGFzdE5hbWVGcm9tUGFyYW1zfX1cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBuZ0NvbnRyb2w9XCJsYXN0TmFtZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFsobmdNb2RlbCldPVwibmV3Q29udGFjdC5sYXN0TmFtZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cInR4dF9waG9uZVwiPlBob25lPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cInR4dF9waG9uZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5nQ29udHJvbD1cInBob25lXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgWyhuZ01vZGVsKV09XCJuZXdDb250YWN0LnBob25lXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncnBcIj5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwidHh0X2VtYWlsXCI+RW1haWw8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwidHh0X2VtYWlsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmdDb250cm9sPVwiZW1haWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBbKG5nTW9kZWwpXT1cIm5ld0NvbnRhY3QuZW1haWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdycFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDwhLS08YnV0dG9uIChjbGljayk9XCJvbkNyZWF0ZU5ld0NvbnRhY3RDbGlja2VkKGZpcnN0TmFtZS52YWx1ZSwgbGFzdE5hbWUudmFsdWUsIFxyXG4gICAgICAgICAgICAgICAgICAgIHBob25lLnZhbHVlLCBlbWFpbC52YWx1ZSlcIj5DcmVhdGUgQ29udGFjdDwvYnV0dG9uPi0tPlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiPlN1Ym1pdCBDb250YWN0PC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgIGAsXHJcbiAgICAgICAgcHJvdmlkZXJzOiBbQ29udGFjdFNlcnZpY2VdLFxyXG4gICAgICAgIHN0eWxlczogW2BcclxuICAgICAgICBsYWJlbCB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgd2lkdGg6IDE1MHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICBpbnB1dDp0ZXh0IHtcclxuICAgICAgICAgICAgd2lkdGg6IDI1MHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAubmctaW52YWxpZCB7XHJcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHJlZDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmZvcm0tZ3JwIHtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgICAgICB9XHJcbiAgICBgXVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIE5ld0NvbnRhY3RDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cclxuICAgIHB1YmxpYyBsYXN0TmFtZUZyb21QYXJhbXMgPSBcIlwiO1xyXG4gICAgbmV3Q29udGFjdDogQ29udGFjdDtcclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX2NvbnRhY3RTZXJ2aWNlOiBDb250YWN0U2VydmljZSwgcHJpdmF0ZSBfcm91dGVyOiBSb3V0ZXIsIFxyXG4gICAgcHJpdmF0ZSBfcm91dGVQYXJhbXM6IFJvdXRlUGFyYW1zKSB7fVxyXG5cclxuICAgIG9uQ3JlYXRlTmV3Q29udGFjdENsaWNrZWQoZmlyc3ROYW1lLCBsYXN0TmFtZSwgcGhvbmUsIGVtYWlsKSB7XHJcbiAgICAgICAgbGV0IGNvbnRhY3Q6IENvbnRhY3QgPSB7XHJcbiAgICAgICAgICAgIGZpcnN0TmFtZTogZmlyc3ROYW1lLCBsYXN0TmFtZTogbGFzdE5hbWUsIHBob25lOiBwaG9uZSwgZW1haWw6IGVtYWlsXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgdGhpcy5fY29udGFjdFNlcnZpY2UuaW5zZXJ0Q29udGFjdChjb250YWN0KTtcclxuICAgICAgICB0aGlzLl9yb3V0ZXIubmF2aWdhdGUoWydDb250YWN0cyddKTtcclxuICAgIH1cclxuXHJcbiAgICBvblN1Ym1pdE5ld0NvbmF0Y3RGb3JtKCkge1xyXG4gICAgICAgIHRoaXMuX2NvbnRhY3RTZXJ2aWNlLmluc2VydENvbnRhY3QodGhpcy5uZXdDb250YWN0KTtcclxuICAgICAgICB0aGlzLl9yb3V0ZXIubmF2aWdhdGUoW1wiQ29udGFjdHNcIl0pO1xyXG4gICAgfVxyXG5cclxuICAgIG5nT25Jbml0KCkge1xyXG4gICAgICAgIHRoaXMubGFzdE5hbWVGcm9tUGFyYW1zID0gdGhpcy5fcm91dGVQYXJhbXMuZ2V0KFwibGFzdE5hbWVcIik7XHJcbiAgICAgICAgdGhpcy5uZXdDb250YWN0ID0ge1xyXG4gICAgICAgICAgICBmaXJzdE5hbWU6ICcnLFxyXG4gICAgICAgICAgICBsYXN0TmFtZTogdGhpcy5sYXN0TmFtZUZyb21QYXJhbXMgfHwgJycsXHJcbiAgICAgICAgICAgIHBob25lOiAnJyxcclxuICAgICAgICAgICAgZW1haWw6ICcnXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxufSJdfQ==
