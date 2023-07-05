/**
 * Class to retrieve a list of contacts. 
 *
 */
public with sharing class ContactController 
{
    /**
    * Returns a list of Contact records with the fields FirstName, LastName, and Email
    *
    */
    @AuraEnabled(cacheable=true)
    public static List<Contact> getContacts() 
    {
        return [SELECT FirstName, LastName, Email FROM Contact];
    }
}
