import { LightningElement, wire, track } from 'lwc';
import { refreshApex } from '@salesforce/apex';
import getContacts from '@salesforce/apex/ContactController.getContacts';

const columns = [
    { label: 'First Name', fieldName: 'FirstName' },
    { label: 'Last Name', fieldName: 'LastName' },
    { label: 'Email', fieldName: 'Email' }
];

export default class ContactList extends LightningElement {
    @track contacts = {
        data: undefined,
        error: undefined
    };
    columns = columns;

    @wire(getContacts)
    wiredContacts(result) {
        const { data, error } = result;
        if (data) {
            this.contacts.data = data;
            this.contacts.error = undefined;
        } else if (error) {
            this.contacts.error = error;
            this.contacts.data = undefined;
        }
    }

    refreshData() {
        return refreshApex(this.wiredContacts);
    }
}
