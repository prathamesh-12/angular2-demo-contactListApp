import { Contact } from './contact';
import { ContactService } from './contact.service';
import { ContactComponent } from './contact.component';
import { Component, OnInit } from 'angular2/core';

@Component({
    selector : 'contact-list',
    template: `
        <ul>
            <li
                *ngFor="#contact of contactList"
                (click)="onContactClicked(contact)"
                class="contact-name"
                [class.clicked]="selectedContact === contact"
                >
                {{contact.firstName}} {{contact.lastName}}
            </li>
        </ul>
        <contact [contact]="selectedContact" *ngIf="selectedContact"></contact>
    `,
    directives: [ContactComponent],
    providers: [ContactService],
    styleUrls: ['../../assets/scss/contact-list.scss']
})
export class ContactListComponent implements OnInit{
    /*public contactList = [
    {firstName : 'Alex', lastName : 'Lee', phone : '9988776655', email : 'alex@test.com'},
    {firstName : 'Brat', lastName : 'Martin', phone : '5566778899', email : 'brat@test.com'},
    {firstName : 'Chris', lastName : 'Kobel', phone : '1122334455', email : 'ch@test.com'},
    {firstName : 'Den', lastName : 'Novy', phone : '5544332211', email : 'dan@test.com'},
    {firstName : 'Eon', lastName : 'Morgan', phone : '6633663399', email : 'eon@test.com'}
];*/
    public contactList: Contact[];

    public showConatct = false;
    public selectedContact = null;

    constructor(private _contactService: ContactService) {}

    getContactList() {
        this._contactService.getAllContacts().then(
            (data:Contact[]) => {this.contactList = data}
        )
    }

    onContactClicked(contact) {
        this.showConatct = true;
        this.selectedContact = contact;
    }

    ngOnInit(): any {
        this.getContactList();
    }

}