import { LightningElement, wire, track } from 'lwc';
import getContacts from '@salesforce/apex/ContactController.getContacts';

const columns = [
    { label: 'First Name', fieldName: 'FirstName' },
    { label: 'Last Name', fieldName: 'LastName' },
    { label: 'Email', fieldName: 'Email' }
];

export default class ContactList extends LightningElement {
    @track contacts = [];
    columns = columns;

    @wire(getContacts)
    wiredContacts({ error, data }) {
        if (data) {
            this.contacts = data.map((contact) => {
                return { ...contact, Id: contact.Id };
            });
        } else if (error) {
            console.error('Error retrieving contacts:', error);
        }
    }
}
