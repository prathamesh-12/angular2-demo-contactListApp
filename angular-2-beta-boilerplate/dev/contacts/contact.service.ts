import { Contact } from './contact';
import { CONTACTS } from './mock-contacts';
import { Injectable } from 'angular2/core';
@Injectable()

export class ContactService {
    getAllContacts() {
        return Promise.resolve(CONTACTS);
    }

    insertContact(contact: Contact) {
        Promise.resolve(CONTACTS).then(
            (data: Contact[]) => {data.push(contact)}
        );
    }
}