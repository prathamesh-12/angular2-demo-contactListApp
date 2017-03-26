import { CONTACTS } from './mock-contacts';
import { Injectable } from 'angular2/core';
@Injectable()

export class ContactService {
    getAllContacts() {
        return Promise.resolve(CONTACTS);
    }
}