import { RouteParams, Router } from 'angular2/router';
import { ContactService } from './contact.service';
import { Contact } from './contact';
import { Component, OnInit } from 'angular2/core';

@Component({
    selector: 'new-contact',
    template: `
            <h3>New Contact Page!</h3>
            <form #newContactForm="ngForm" (ngSubmit)="onSubmitNewConatctForm()">
                <div class="form-grp">
                    <label for="txt_firstName">First Name</label>
                    <input type="text" id="txt_firstName"
                        ngControl="firstName"
                        [(ngModel)]="newContact.firstName"
                        required
                    />
                </div>
                <div class="form-grp">
                    <label for="txt_lastName">Last Name</label>
                    <input type="text" id="txt_lastName" value="{{lastNameFromParams}}"
                        ngControl="lastName"
                        [(ngModel)]="newContact.lastName"
                        required
                    />
                </div>
                <div class="form-grp">
                    <label for="txt_phone">Phone</label>
                    <input type="text" id="txt_phone"
                        ngControl="phone"
                        [(ngModel)]="newContact.phone"
                        required/>
                </div>
                <div class="form-grp">
                    <label for="txt_email">Email</label>
                    <input type="text" id="txt_email"
                        ngControl="email"
                        [(ngModel)]="newContact.email"
                        required/>
                </div>
                <div class="form-grp">
                    <!--<button (click)="onCreateNewContactClicked(firstName.value, lastName.value, 
                    phone.value, email.value)">Create Contact</button>-->
                    <button type="submit">Submit Contact</button>
                </div>
            </form>
        `,
        providers: [ContactService],
        styles: [`
        label {
            display: inline-block;
            width: 150px;
        }
        input:text {
            width: 250px;
        }
        .ng-invalid {
            border: 1px solid red;
        }
        .form-grp {
            margin-top: 10px;
        }
    `]
})

export class NewContactComponent implements OnInit {

    public lastNameFromParams = "";
    newContact: Contact;
    constructor(private _contactService: ContactService, private _router: Router, 
    private _routeParams: RouteParams) {}

    onCreateNewContactClicked(firstName, lastName, phone, email) {
        let contact: Contact = {
            firstName: firstName, lastName: lastName, phone: phone, email: email
        };

        this._contactService.insertContact(contact);
        this._router.navigate(['Contacts']);
    }

    onSubmitNewConatctForm() {
        this._contactService.insertContact(this.newContact);
        this._router.navigate(["Contacts"]);
    }

    ngOnInit() {
        this.lastNameFromParams = this._routeParams.get("lastName");
        this.newContact = {
            firstName: '',
            lastName: this.lastNameFromParams || '',
            phone: '',
            email: ''
        };
    }
}