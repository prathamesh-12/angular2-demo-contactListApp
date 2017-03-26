System.register(['./mock-contacts', 'angular2/core'], function(exports_1, context_1) {
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
    var mock_contacts_1, core_1;
    var ContactService;
    return {
        setters:[
            function (mock_contacts_1_1) {
                mock_contacts_1 = mock_contacts_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            ContactService = (function () {
                function ContactService() {
                }
                ContactService.prototype.getAllContacts = function () {
                    return Promise.resolve(mock_contacts_1.CONTACTS);
                };
                ContactService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], ContactService);
                return ContactService;
            }());
            exports_1("ContactService", ContactService);
        }
    }
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRhY3RzL2NvbnRhY3Quc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQUlBO2dCQUFBO2dCQUlBLENBQUM7Z0JBSEcsdUNBQWMsR0FBZDtvQkFDSSxNQUFNLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyx3QkFBUSxDQUFDLENBQUM7Z0JBQ3JDLENBQUM7Z0JBTEw7b0JBQUMsaUJBQVUsRUFBRTs7a0NBQUE7Z0JBTWIscUJBQUM7WUFBRCxDQUpBLEFBSUMsSUFBQTtZQUpELDJDQUlDLENBQUEiLCJmaWxlIjoiY29udGFjdHMvY29udGFjdC5zZXJ2aWNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ09OVEFDVFMgfSBmcm9tICcuL21vY2stY29udGFjdHMnO1xyXG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XHJcbkBJbmplY3RhYmxlKClcclxuXHJcbmV4cG9ydCBjbGFzcyBDb250YWN0U2VydmljZSB7XHJcbiAgICBnZXRBbGxDb250YWN0cygpIHtcclxuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKENPTlRBQ1RTKTtcclxuICAgIH1cclxufSJdfQ==
