System.register(['./contact.service', './contact.component', 'angular2/core'], function(exports_1, context_1) {
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
    var contact_service_1, contact_component_1, core_1;
    var ContactListComponent;
    return {
        setters:[
            function (contact_service_1_1) {
                contact_service_1 = contact_service_1_1;
            },
            function (contact_component_1_1) {
                contact_component_1 = contact_component_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            ContactListComponent = (function () {
                function ContactListComponent(_contactService) {
                    this._contactService = _contactService;
                    this.showConatct = false;
                    this.selectedContact = {};
                }
                ContactListComponent.prototype.getContactList = function () {
                    var _this = this;
                    this._contactService.getAllContacts().then(function (data) { _this.contactList = data; });
                };
                ContactListComponent.prototype.onContactClicked = function (contact) {
                    this.showConatct = true;
                    this.selectedContact = contact;
                };
                ContactListComponent.prototype.ngOnInit = function () {
                    this.getContactList();
                };
                ContactListComponent = __decorate([
                    core_1.Component({
                        selector: 'contact-list',
                        template: "\n        <ul>\n            <li\n                *ngFor=\"#contact of contactList\"\n                (click)=\"onContactClicked(contact)\"\n                class=\"contact-name\"\n                [class.clicked]=\"selectedContact === contact\"\n                >\n                {{contact.firstName}} {{contact.lastName}}\n            </li>\n        </ul>\n        <contact [contact]=\"selectedContact\"></contact>\n    ",
                        directives: [contact_component_1.ContactComponent],
                        providers: [contact_service_1.ContactService],
                        styleUrls: ['../../assets/scss/contact-list.scss']
                    }), 
                    __metadata('design:paramtypes', [contact_service_1.ContactService])
                ], ContactListComponent);
                return ContactListComponent;
            }());
            exports_1("ContactListComponent", ContactListComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRhY3RzL2NvbnRhY3QtbGlzdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUF3QkE7Z0JBYUksOEJBQW9CLGVBQStCO29CQUEvQixvQkFBZSxHQUFmLGVBQWUsQ0FBZ0I7b0JBSDVDLGdCQUFXLEdBQUcsS0FBSyxDQUFDO29CQUNwQixvQkFBZSxHQUFHLEVBQUUsQ0FBQztnQkFFMEIsQ0FBQztnQkFFdkQsNkNBQWMsR0FBZDtvQkFBQSxpQkFJQztvQkFIRyxJQUFJLENBQUMsZUFBZSxDQUFDLGNBQWMsRUFBRSxDQUFDLElBQUksQ0FDdEMsVUFBQyxJQUFjLElBQU0sS0FBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUEsQ0FBQSxDQUFDLENBQ2hELENBQUE7Z0JBQ0wsQ0FBQztnQkFFRCwrQ0FBZ0IsR0FBaEIsVUFBaUIsT0FBTztvQkFDcEIsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUM7b0JBQ3hCLElBQUksQ0FBQyxlQUFlLEdBQUcsT0FBTyxDQUFDO2dCQUNuQyxDQUFDO2dCQUVELHVDQUFRLEdBQVI7b0JBQ0ksSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO2dCQUMxQixDQUFDO2dCQS9DTDtvQkFBQyxnQkFBUyxDQUFDO3dCQUNQLFFBQVEsRUFBRyxjQUFjO3dCQUN6QixRQUFRLEVBQUUsdWFBWVQ7d0JBQ0QsVUFBVSxFQUFFLENBQUMsb0NBQWdCLENBQUM7d0JBQzlCLFNBQVMsRUFBRSxDQUFDLGdDQUFjLENBQUM7d0JBQzNCLFNBQVMsRUFBRSxDQUFDLHFDQUFxQyxDQUFDO3FCQUNyRCxDQUFDOzt3Q0FBQTtnQkErQkYsMkJBQUM7WUFBRCxDQTlCQSxBQThCQyxJQUFBO1lBOUJELHVEQThCQyxDQUFBIiwiZmlsZSI6ImNvbnRhY3RzL2NvbnRhY3QtbGlzdC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb250YWN0IH0gZnJvbSAnLi9jb250YWN0JztcclxuaW1wb3J0IHsgQ29udGFjdFNlcnZpY2UgfSBmcm9tICcuL2NvbnRhY3Quc2VydmljZSc7XHJcbmltcG9ydCB7IENvbnRhY3RDb21wb25lbnQgfSBmcm9tICcuL2NvbnRhY3QuY29tcG9uZW50JztcclxuaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdhbmd1bGFyMi9jb3JlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3IgOiAnY29udGFjdC1saXN0JyxcclxuICAgIHRlbXBsYXRlOiBgXHJcbiAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICA8bGlcclxuICAgICAgICAgICAgICAgICpuZ0Zvcj1cIiNjb250YWN0IG9mIGNvbnRhY3RMaXN0XCJcclxuICAgICAgICAgICAgICAgIChjbGljayk9XCJvbkNvbnRhY3RDbGlja2VkKGNvbnRhY3QpXCJcclxuICAgICAgICAgICAgICAgIGNsYXNzPVwiY29udGFjdC1uYW1lXCJcclxuICAgICAgICAgICAgICAgIFtjbGFzcy5jbGlja2VkXT1cInNlbGVjdGVkQ29udGFjdCA9PT0gY29udGFjdFwiXHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICB7e2NvbnRhY3QuZmlyc3ROYW1lfX0ge3tjb250YWN0Lmxhc3ROYW1lfX1cclxuICAgICAgICAgICAgPC9saT5cclxuICAgICAgICA8L3VsPlxyXG4gICAgICAgIDxjb250YWN0IFtjb250YWN0XT1cInNlbGVjdGVkQ29udGFjdFwiPjwvY29udGFjdD5cclxuICAgIGAsXHJcbiAgICBkaXJlY3RpdmVzOiBbQ29udGFjdENvbXBvbmVudF0sXHJcbiAgICBwcm92aWRlcnM6IFtDb250YWN0U2VydmljZV0sXHJcbiAgICBzdHlsZVVybHM6IFsnLi4vLi4vYXNzZXRzL3Njc3MvY29udGFjdC1saXN0LnNjc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQ29udGFjdExpc3RDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXR7XHJcbiAgICAvKnB1YmxpYyBjb250YWN0TGlzdCA9IFtcclxuICAgIHtmaXJzdE5hbWUgOiAnQWxleCcsIGxhc3ROYW1lIDogJ0xlZScsIHBob25lIDogJzk5ODg3NzY2NTUnLCBlbWFpbCA6ICdhbGV4QHRlc3QuY29tJ30sXHJcbiAgICB7Zmlyc3ROYW1lIDogJ0JyYXQnLCBsYXN0TmFtZSA6ICdNYXJ0aW4nLCBwaG9uZSA6ICc1NTY2Nzc4ODk5JywgZW1haWwgOiAnYnJhdEB0ZXN0LmNvbSd9LFxyXG4gICAge2ZpcnN0TmFtZSA6ICdDaHJpcycsIGxhc3ROYW1lIDogJ0tvYmVsJywgcGhvbmUgOiAnMTEyMjMzNDQ1NScsIGVtYWlsIDogJ2NoQHRlc3QuY29tJ30sXHJcbiAgICB7Zmlyc3ROYW1lIDogJ0RlbicsIGxhc3ROYW1lIDogJ05vdnknLCBwaG9uZSA6ICc1NTQ0MzMyMjExJywgZW1haWwgOiAnZGFuQHRlc3QuY29tJ30sXHJcbiAgICB7Zmlyc3ROYW1lIDogJ0VvbicsIGxhc3ROYW1lIDogJ01vcmdhbicsIHBob25lIDogJzY2MzM2NjMzOTknLCBlbWFpbCA6ICdlb25AdGVzdC5jb20nfVxyXG5dOyovXHJcbiAgICBwdWJsaWMgY29udGFjdExpc3Q6IENvbnRhY3RbXTtcclxuXHJcbiAgICBwdWJsaWMgc2hvd0NvbmF0Y3QgPSBmYWxzZTtcclxuICAgIHB1YmxpYyBzZWxlY3RlZENvbnRhY3QgPSB7fTtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9jb250YWN0U2VydmljZTogQ29udGFjdFNlcnZpY2UpIHt9XHJcblxyXG4gICAgZ2V0Q29udGFjdExpc3QoKSB7XHJcbiAgICAgICAgdGhpcy5fY29udGFjdFNlcnZpY2UuZ2V0QWxsQ29udGFjdHMoKS50aGVuKFxyXG4gICAgICAgICAgICAoZGF0YTpDb250YWN0W10pID0+IHt0aGlzLmNvbnRhY3RMaXN0ID0gZGF0YX1cclxuICAgICAgICApXHJcbiAgICB9XHJcblxyXG4gICAgb25Db250YWN0Q2xpY2tlZChjb250YWN0KSB7XHJcbiAgICAgICAgdGhpcy5zaG93Q29uYXRjdCA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5zZWxlY3RlZENvbnRhY3QgPSBjb250YWN0O1xyXG4gICAgfVxyXG5cclxuICAgIG5nT25Jbml0KCk6IGFueSB7XHJcbiAgICAgICAgdGhpcy5nZXRDb250YWN0TGlzdCgpO1xyXG4gICAgfVxyXG5cclxufSJdfQ==
