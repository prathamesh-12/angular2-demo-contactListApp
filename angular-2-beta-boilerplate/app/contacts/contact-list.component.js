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
                    this.selectedContact = null;
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
                        template: "\n        <ul>\n            <li\n                *ngFor=\"#contact of contactList\"\n                (click)=\"onContactClicked(contact)\"\n                class=\"contact-name\"\n                [class.clicked]=\"selectedContact === contact\"\n                >\n                {{contact.firstName}} {{contact.lastName}}\n            </li>\n        </ul>\n        <contact [contact]=\"selectedContact\" *ngIf=\"selectedContact\"></contact>\n    ",
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRhY3RzL2NvbnRhY3QtbGlzdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUF3QkE7Z0JBYUksOEJBQW9CLGVBQStCO29CQUEvQixvQkFBZSxHQUFmLGVBQWUsQ0FBZ0I7b0JBSDVDLGdCQUFXLEdBQUcsS0FBSyxDQUFDO29CQUNwQixvQkFBZSxHQUFHLElBQUksQ0FBQztnQkFFd0IsQ0FBQztnQkFFdkQsNkNBQWMsR0FBZDtvQkFBQSxpQkFJQztvQkFIRyxJQUFJLENBQUMsZUFBZSxDQUFDLGNBQWMsRUFBRSxDQUFDLElBQUksQ0FDdEMsVUFBQyxJQUFjLElBQU0sS0FBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUEsQ0FBQSxDQUFDLENBQ2hELENBQUE7Z0JBQ0wsQ0FBQztnQkFFRCwrQ0FBZ0IsR0FBaEIsVUFBaUIsT0FBTztvQkFDcEIsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUM7b0JBQ3hCLElBQUksQ0FBQyxlQUFlLEdBQUcsT0FBTyxDQUFDO2dCQUNuQyxDQUFDO2dCQUVELHVDQUFRLEdBQVI7b0JBQ0ksSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO2dCQUMxQixDQUFDO2dCQS9DTDtvQkFBQyxnQkFBUyxDQUFDO3dCQUNQLFFBQVEsRUFBRyxjQUFjO3dCQUN6QixRQUFRLEVBQUUsaWNBWVQ7d0JBQ0QsVUFBVSxFQUFFLENBQUMsb0NBQWdCLENBQUM7d0JBQzlCLFNBQVMsRUFBRSxDQUFDLGdDQUFjLENBQUM7d0JBQzNCLFNBQVMsRUFBRSxDQUFDLHFDQUFxQyxDQUFDO3FCQUNyRCxDQUFDOzt3Q0FBQTtnQkErQkYsMkJBQUM7WUFBRCxDQTlCQSxBQThCQyxJQUFBO1lBOUJELHVEQThCQyxDQUFBIiwiZmlsZSI6ImNvbnRhY3RzL2NvbnRhY3QtbGlzdC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb250YWN0IH0gZnJvbSAnLi9jb250YWN0JztcclxuaW1wb3J0IHsgQ29udGFjdFNlcnZpY2UgfSBmcm9tICcuL2NvbnRhY3Quc2VydmljZSc7XHJcbmltcG9ydCB7IENvbnRhY3RDb21wb25lbnQgfSBmcm9tICcuL2NvbnRhY3QuY29tcG9uZW50JztcclxuaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdhbmd1bGFyMi9jb3JlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3IgOiAnY29udGFjdC1saXN0JyxcclxuICAgIHRlbXBsYXRlOiBgXHJcbiAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICA8bGlcclxuICAgICAgICAgICAgICAgICpuZ0Zvcj1cIiNjb250YWN0IG9mIGNvbnRhY3RMaXN0XCJcclxuICAgICAgICAgICAgICAgIChjbGljayk9XCJvbkNvbnRhY3RDbGlja2VkKGNvbnRhY3QpXCJcclxuICAgICAgICAgICAgICAgIGNsYXNzPVwiY29udGFjdC1uYW1lXCJcclxuICAgICAgICAgICAgICAgIFtjbGFzcy5jbGlja2VkXT1cInNlbGVjdGVkQ29udGFjdCA9PT0gY29udGFjdFwiXHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICB7e2NvbnRhY3QuZmlyc3ROYW1lfX0ge3tjb250YWN0Lmxhc3ROYW1lfX1cclxuICAgICAgICAgICAgPC9saT5cclxuICAgICAgICA8L3VsPlxyXG4gICAgICAgIDxjb250YWN0IFtjb250YWN0XT1cInNlbGVjdGVkQ29udGFjdFwiICpuZ0lmPVwic2VsZWN0ZWRDb250YWN0XCI+PC9jb250YWN0PlxyXG4gICAgYCxcclxuICAgIGRpcmVjdGl2ZXM6IFtDb250YWN0Q29tcG9uZW50XSxcclxuICAgIHByb3ZpZGVyczogW0NvbnRhY3RTZXJ2aWNlXSxcclxuICAgIHN0eWxlVXJsczogWycuLi8uLi9hc3NldHMvc2Nzcy9jb250YWN0LWxpc3Quc2NzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDb250YWN0TGlzdENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdHtcclxuICAgIC8qcHVibGljIGNvbnRhY3RMaXN0ID0gW1xyXG4gICAge2ZpcnN0TmFtZSA6ICdBbGV4JywgbGFzdE5hbWUgOiAnTGVlJywgcGhvbmUgOiAnOTk4ODc3NjY1NScsIGVtYWlsIDogJ2FsZXhAdGVzdC5jb20nfSxcclxuICAgIHtmaXJzdE5hbWUgOiAnQnJhdCcsIGxhc3ROYW1lIDogJ01hcnRpbicsIHBob25lIDogJzU1NjY3Nzg4OTknLCBlbWFpbCA6ICdicmF0QHRlc3QuY29tJ30sXHJcbiAgICB7Zmlyc3ROYW1lIDogJ0NocmlzJywgbGFzdE5hbWUgOiAnS29iZWwnLCBwaG9uZSA6ICcxMTIyMzM0NDU1JywgZW1haWwgOiAnY2hAdGVzdC5jb20nfSxcclxuICAgIHtmaXJzdE5hbWUgOiAnRGVuJywgbGFzdE5hbWUgOiAnTm92eScsIHBob25lIDogJzU1NDQzMzIyMTEnLCBlbWFpbCA6ICdkYW5AdGVzdC5jb20nfSxcclxuICAgIHtmaXJzdE5hbWUgOiAnRW9uJywgbGFzdE5hbWUgOiAnTW9yZ2FuJywgcGhvbmUgOiAnNjYzMzY2MzM5OScsIGVtYWlsIDogJ2VvbkB0ZXN0LmNvbSd9XHJcbl07Ki9cclxuICAgIHB1YmxpYyBjb250YWN0TGlzdDogQ29udGFjdFtdO1xyXG5cclxuICAgIHB1YmxpYyBzaG93Q29uYXRjdCA9IGZhbHNlO1xyXG4gICAgcHVibGljIHNlbGVjdGVkQ29udGFjdCA9IG51bGw7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfY29udGFjdFNlcnZpY2U6IENvbnRhY3RTZXJ2aWNlKSB7fVxyXG5cclxuICAgIGdldENvbnRhY3RMaXN0KCkge1xyXG4gICAgICAgIHRoaXMuX2NvbnRhY3RTZXJ2aWNlLmdldEFsbENvbnRhY3RzKCkudGhlbihcclxuICAgICAgICAgICAgKGRhdGE6Q29udGFjdFtdKSA9PiB7dGhpcy5jb250YWN0TGlzdCA9IGRhdGF9XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG5cclxuICAgIG9uQ29udGFjdENsaWNrZWQoY29udGFjdCkge1xyXG4gICAgICAgIHRoaXMuc2hvd0NvbmF0Y3QgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuc2VsZWN0ZWRDb250YWN0ID0gY29udGFjdDtcclxuICAgIH1cclxuXHJcbiAgICBuZ09uSW5pdCgpOiBhbnkge1xyXG4gICAgICAgIHRoaXMuZ2V0Q29udGFjdExpc3QoKTtcclxuICAgIH1cclxuXHJcbn0iXX0=
