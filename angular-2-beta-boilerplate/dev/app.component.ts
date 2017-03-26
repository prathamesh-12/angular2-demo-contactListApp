import { TestRouteComponent } from './contacts/test-route.component';
import { NewContactComponent } from './contacts/new-contact.component';
import { addAll } from 'angular2/src/compiler/util';
import { RouteConfig, ROUTER_DIRECTIVES, RouterLink } from 'angular2/router';
import { ContactListComponent } from './contacts/contact-list.component';
import { Component } from 'angular2/core';

@Component({
    selector: 'my-app',
    template: `
        <h1>Angular 2 Contact List App</h1>
        <header>
            <nav>
                <a [routerLink]="['Contacts']" >Contacts</a>
                <a [routerLink]="['NewContact']">New Contact</a>
                <a [routerLink]="['TestRoute']" >Test Route</a>
            </nav>
        </header>
        <div class="main">
            <router-outlet></router-outlet>
        </div>
        
    `,
    directives: [ContactListComponent, ROUTER_DIRECTIVES],
    styleUrls: ['../src/css/app.css']
})
@RouteConfig([
    {path: '/contacts', name: 'Contacts', component: ContactListComponent, useAsDefault: true},
    {path: '/newContact', name: 'NewContact', component: NewContactComponent},
    {path: '/testRoute', name: 'TestRoute', component: TestRouteComponent}
])
export class AppComponent {
    
}