System.register(['./contacts/test-route.component', './contacts/new-contact.component', 'angular2/router', './contacts/contact-list.component', 'angular2/core'], function(exports_1, context_1) {
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
    var test_route_component_1, new_contact_component_1, router_1, contact_list_component_1, core_1;
    var AppComponent;
    return {
        setters:[
            function (test_route_component_1_1) {
                test_route_component_1 = test_route_component_1_1;
            },
            function (new_contact_component_1_1) {
                new_contact_component_1 = new_contact_component_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (contact_list_component_1_1) {
                contact_list_component_1 = contact_list_component_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: "\n        <h1>Angular 2 Contact List App</h1>\n        <header>\n            <nav>\n                <a [routerLink]=\"['Contacts']\" >Contacts</a>\n                <a [routerLink]=\"['NewContact']\">New Contact</a>\n                <a [routerLink]=\"['TestRoute']\" >Test Route</a>\n            </nav>\n        </header>\n        <div class=\"main\">\n            <router-outlet></router-outlet>\n        </div>\n        \n    ",
                        directives: [contact_list_component_1.ContactListComponent, router_1.ROUTER_DIRECTIVES],
                        styleUrls: ['../src/css/app.css']
                    }),
                    router_1.RouteConfig([
                        { path: '/contacts', name: 'Contacts', component: contact_list_component_1.ContactListComponent, useAsDefault: true },
                        { path: '/newContact', name: 'NewContact', component: new_contact_component_1.NewContactComponent },
                        { path: '/testRoute', name: 'TestRoute', component: test_route_component_1.TestRouteComponent }
                    ]), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUErQkE7Z0JBQUE7Z0JBRUEsQ0FBQztnQkExQkQ7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDUCxRQUFRLEVBQUUsUUFBUTt3QkFDbEIsUUFBUSxFQUFFLDZhQWFUO3dCQUNELFVBQVUsRUFBRSxDQUFDLDZDQUFvQixFQUFFLDBCQUFpQixDQUFDO3dCQUNyRCxTQUFTLEVBQUUsQ0FBQyxvQkFBb0IsQ0FBQztxQkFDcEMsQ0FBQztvQkFDRCxvQkFBVyxDQUFDO3dCQUNULEVBQUMsSUFBSSxFQUFFLFdBQVcsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFLFNBQVMsRUFBRSw2Q0FBb0IsRUFBRSxZQUFZLEVBQUUsSUFBSSxFQUFDO3dCQUMxRixFQUFDLElBQUksRUFBRSxhQUFhLEVBQUUsSUFBSSxFQUFFLFlBQVksRUFBRSxTQUFTLEVBQUUsMkNBQW1CLEVBQUM7d0JBQ3pFLEVBQUMsSUFBSSxFQUFFLFlBQVksRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFLFNBQVMsRUFBRSx5Q0FBa0IsRUFBQztxQkFDekUsQ0FBQzs7Z0NBQUE7Z0JBR0YsbUJBQUM7WUFBRCxDQUZBLEFBRUMsSUFBQTtZQUZELHVDQUVDLENBQUEiLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFRlc3RSb3V0ZUNvbXBvbmVudCB9IGZyb20gJy4vY29udGFjdHMvdGVzdC1yb3V0ZS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBOZXdDb250YWN0Q29tcG9uZW50IH0gZnJvbSAnLi9jb250YWN0cy9uZXctY29udGFjdC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBhZGRBbGwgfSBmcm9tICdhbmd1bGFyMi9zcmMvY29tcGlsZXIvdXRpbCc7XHJcbmltcG9ydCB7IFJvdXRlQ29uZmlnLCBST1VURVJfRElSRUNUSVZFUywgUm91dGVyTGluayB9IGZyb20gJ2FuZ3VsYXIyL3JvdXRlcic7XHJcbmltcG9ydCB7IENvbnRhY3RMaXN0Q29tcG9uZW50IH0gZnJvbSAnLi9jb250YWN0cy9jb250YWN0LWxpc3QuY29tcG9uZW50JztcclxuaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnbXktYXBwJyxcclxuICAgIHRlbXBsYXRlOiBgXHJcbiAgICAgICAgPGgxPkFuZ3VsYXIgMiBDb250YWN0IExpc3QgQXBwPC9oMT5cclxuICAgICAgICA8aGVhZGVyPlxyXG4gICAgICAgICAgICA8bmF2PlxyXG4gICAgICAgICAgICAgICAgPGEgW3JvdXRlckxpbmtdPVwiWydDb250YWN0cyddXCIgPkNvbnRhY3RzPC9hPlxyXG4gICAgICAgICAgICAgICAgPGEgW3JvdXRlckxpbmtdPVwiWydOZXdDb250YWN0J11cIj5OZXcgQ29udGFjdDwvYT5cclxuICAgICAgICAgICAgICAgIDxhIFtyb3V0ZXJMaW5rXT1cIlsnVGVzdFJvdXRlJ11cIiA+VGVzdCBSb3V0ZTwvYT5cclxuICAgICAgICAgICAgPC9uYXY+XHJcbiAgICAgICAgPC9oZWFkZXI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cIm1haW5cIj5cclxuICAgICAgICAgICAgPHJvdXRlci1vdXRsZXQ+PC9yb3V0ZXItb3V0bGV0PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIFxyXG4gICAgYCxcclxuICAgIGRpcmVjdGl2ZXM6IFtDb250YWN0TGlzdENvbXBvbmVudCwgUk9VVEVSX0RJUkVDVElWRVNdLFxyXG4gICAgc3R5bGVVcmxzOiBbJy4uL3NyYy9jc3MvYXBwLmNzcyddXHJcbn0pXHJcbkBSb3V0ZUNvbmZpZyhbXHJcbiAgICB7cGF0aDogJy9jb250YWN0cycsIG5hbWU6ICdDb250YWN0cycsIGNvbXBvbmVudDogQ29udGFjdExpc3RDb21wb25lbnQsIHVzZUFzRGVmYXVsdDogdHJ1ZX0sXHJcbiAgICB7cGF0aDogJy9uZXdDb250YWN0JywgbmFtZTogJ05ld0NvbnRhY3QnLCBjb21wb25lbnQ6IE5ld0NvbnRhY3RDb21wb25lbnR9LFxyXG4gICAge3BhdGg6ICcvdGVzdFJvdXRlJywgbmFtZTogJ1Rlc3RSb3V0ZScsIGNvbXBvbmVudDogVGVzdFJvdXRlQ29tcG9uZW50fVxyXG5dKVxyXG5leHBvcnQgY2xhc3MgQXBwQ29tcG9uZW50IHtcclxuICAgIFxyXG59Il19
