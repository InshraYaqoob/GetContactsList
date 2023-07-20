# Contact List Lightning Web Component

This repository contains a Lightning web component that retrieves contact records using @wire in an Apex controller and displays them in a lightning-datatable.

## Getting Started

To use this Lightning web component, follow the steps below:

# Lightning Web Component - Contact List

This repository contains a Lightning web component that retrieves contact records from Salesforce and displays them in a table using lightning-datatable.

## Getting Started

### Prerequisites

- Setting up Visual Studio Code
- Salesforce Developer Edition or Sandbox org.
- Salesforce CLI installed.

### Setting up Visual Studio Code

1. Install Visual Studio Code (VSCode) if you haven't already:
Download and install VSCode from the official website: [https://code.visualstudio.com/](https://code.visualstudio.com/)

2. Install the Salesforce Extension Pack:
In VSCode, go to the Extensions view by clicking on the Extensions icon in the Activity Bar on the side of the window. Search for "Salesforce Extension Pack" and click Install.


### Installation

1. Clone the repository to your local machine.
2. Authenticate with your Salesforce org using the Salesforce CLI.
3. Navigate to the project's root directory.
4. Deploy the Apex controller class to your org: `sfdx force:source:deploy -p force-app/main/default/classes/ContactController.cls`.
5. Deploy the Lightning web component: `sfdx force:source:deploy -p force-app/main/default/lwc/contactList`.

### Usage

1. Create or edit a Lightning page in your Salesforce org.
2. Add the "Contact List" component to the page.
3. The component will display the contact records in a table format.

### Customization

To modify the fields displayed in the table, update the `columns` array in `contactList.js`.

## License

Thank you for using the Contact List Lightning web component!

  
