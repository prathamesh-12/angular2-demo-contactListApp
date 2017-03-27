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
                ContactService.prototype.insertContact = function (contact) {
                    Promise.resolve(mock_contacts_1.CONTACTS).then(function (data) { data.push(contact); });
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRhY3RzL2NvbnRhY3Quc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQUtBO2dCQUFBO2dCQVVBLENBQUM7Z0JBVEcsdUNBQWMsR0FBZDtvQkFDSSxNQUFNLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyx3QkFBUSxDQUFDLENBQUM7Z0JBQ3JDLENBQUM7Z0JBRUQsc0NBQWEsR0FBYixVQUFjLE9BQWdCO29CQUMxQixPQUFPLENBQUMsT0FBTyxDQUFDLHdCQUFRLENBQUMsQ0FBQyxJQUFJLENBQzFCLFVBQUMsSUFBZSxJQUFNLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUEsQ0FBQSxDQUFDLENBQzVDLENBQUM7Z0JBQ04sQ0FBQztnQkFYTDtvQkFBQyxpQkFBVSxFQUFFOztrQ0FBQTtnQkFZYixxQkFBQztZQUFELENBVkEsQUFVQyxJQUFBO1lBVkQsMkNBVUMsQ0FBQSIsImZpbGUiOiJjb250YWN0cy9jb250YWN0LnNlcnZpY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb250YWN0IH0gZnJvbSAnLi9jb250YWN0JztcclxuaW1wb3J0IHsgQ09OVEFDVFMgfSBmcm9tICcuL21vY2stY29udGFjdHMnO1xyXG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XHJcbkBJbmplY3RhYmxlKClcclxuXHJcbmV4cG9ydCBjbGFzcyBDb250YWN0U2VydmljZSB7XHJcbiAgICBnZXRBbGxDb250YWN0cygpIHtcclxuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKENPTlRBQ1RTKTtcclxuICAgIH1cclxuXHJcbiAgICBpbnNlcnRDb250YWN0KGNvbnRhY3Q6IENvbnRhY3QpIHtcclxuICAgICAgICBQcm9taXNlLnJlc29sdmUoQ09OVEFDVFMpLnRoZW4oXHJcbiAgICAgICAgICAgIChkYXRhOiBDb250YWN0W10pID0+IHtkYXRhLnB1c2goY29udGFjdCl9XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufSJdfQ==
