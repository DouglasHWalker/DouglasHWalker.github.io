const projects = [
    {
        id: 861,
        title: 'Add Filter to Trello View',
        summary: [
            'Items in the Trello View need to be filtered by the technologies they have avaliable. Each item has a list of technologies it has deployed. Each item list needs to be filtered against the selected technology filter or search query. This was acheived using several JavaScript functions that map the technologies and compare values using dictionary matching. Additionally, publish status filters were added, along with export functions and improvements to null handling in filters.',
        ],
        tagline: [
            'Filter for Item with List',
        ],
        requirements: [],
        solution: [],
        technologies: ["JavaScript", "C#", "HTML"],
        // image: 'require("../images/roadmap.gif")',
        dateOpened: 'Nov 2',
        dateClosed: 'Nov 8',
        labels: [
            'Enhancement'
        ],
        additions: 273,
        deletions: 88,
        complexity: 3,
        valuePoints: 5,
    },
    {
        id: 849,
        title: 'Some Users have No Access',
        summary: [
            'Initial access to page was restricted. Stakeholders requirested removal of user access control for this page.',
        ],
        tagline: [
            'Remove User Access restriction',
        ],
        requirements: [],
        solution: [],
        technologies: ["C#"],
        // image: 'require("../images/roadmap.gif")',
        dateOpened: 'Nov 2',
        dateClosed: 'Nov 3',
        labels: [
            'Bug'
        ],
        additions: 2,
        deletions: 3,
        complexity: 1,
        valuePoints: 1,
    },
    {
        id: 847,
        title: 'Displaying Incorrect Item Lifecylce',
        summary: [
            'Item is not displaying the correct lifecylce. Updates are saved to DB but are not shown on screen. The relevant dropdown was simply not being updated with the existing db entry on page load.',
        ],
        tagline: [
            'Dropdown not updated on page load',
        ],
        requirements: [],
        solution: [],
        technologies: ["C#"],
        // image: 'require("../images/roadmap.gif")',
        dateOpened: 'Nov 2',
        dateClosed: 'Nov 3',
        labels: [
            'Bug'
        ],
        additions: 2,
        deletions: 2,
        complexity: 1,
        valuePoints: 1,
    },
    {
        id: 622,
        title: 'Stakeholder changes to Enrollment',
        summary: [
            'Changes to item enrollment options. Various style and wording changes. Added column in data table for enrolment status. Change button text and provide info prompt to user explaining why they are eligible for enrollment. Add additional values to dropdowns. Change functionlity so that setting an item to Not Applicable also updates all child items.',
        ],
        tagline: [
            'Various changes and styling updates',
        ],
        requirements: [],
        solution: [],
        technologies: ["SQL", "C#", "HTML"],
        // image: 'require("../images/roadmap.gif")',
        dateOpened: 'Nov 1',
        dateClosed: 'Nov 2',
        labels: [
            'Enhancement'
        ],
        additions: 248,
        deletions: 24,
        complexity: 2,
        valuePoints: 3,
    },
    {
        id: 755,
        title: 'Create User Access Control',
        summary: [
            'Create a user access control mechanism for establishing a group of users that can access publishing functionlity within the tool. Hide the functionlity for those not in the group. Required database entries and page load checks for the correct users. The users are bounced to the main page and given an appropriate message if they do not have access.',
        ],
        tagline: [
            'Group access control for publishing rights',
        ],
        requirements: [],
        solution: [],
        technologies: ["SQL", "C#", "HTML"],
        // image: 'require("../images/roadmap.gif")',
        dateOpened: 'Oct 31',
        dateClosed: 'Oct 31',
        labels: [
            'Enhancement'
        ],
        additions: 62,
        deletions: 18,
        complexity: 1,
        valuePoints: 2,
    },
    {
        id: 819,
        title: 'Refresh item data on page reload',
        summary: [
            'Items were being cached for the entire application lifecylce instead of the page lifecycles and would therefore appear to not update. Resolved by moving the task list into page level code block. Additionally - made responsive page changes, removed duplicated search bar.',
        ],
        tagline: [
            'Data stored on cache rather than for page',
        ],
        requirements: [],
        solution: [],
        technologies: ["C#"],
        // image: 'require("../images/roadmap.gif")',
        dateOpened: 'Oct 31',
        dateClosed: 'Oct 31',
        labels: [
            'Enhancement'
        ],
        additions: 15,
        deletions: 11,
        complexity: 1,
        valuePoints: 2,
    },
    {
        id: 811,
        title: 'Add Published Column to Table',
        summary: [
            'Add a column to the item catalogue table that shows whether or not an item is published or unpublished. Add a filter to the table for the published status.',
        ],
        tagline: [
            'Determine if published and Add filter for table',
        ],
        requirements: [],
        solution: [],
        technologies: ["C#", "SQL"],
        // image: 'require("../images/roadmap.gif")',
        dateOpened: 'Nov 4',
        dateClosed: 'Nov 4',
        labels: [
            'Enhancement'
        ],
        additions: 10,
        deletions: 14,
        complexity: 1,
        valuePoints: 2,
    },
    {
        id: 761,
        title: 'Move Elements and Remove Links',
        summary: [
            'Move some button elements so they are consistent with the rest of the page. Add tile elements for navigation to new sections. Add icon images that are fetched from a thrid-party server. Move and rename menu items to reflect changes.',
        ],
        tagline: [
            'Update SQL query to include deleteFlag',
        ],
        requirements: [],
        solution: [],
        technologies: ["C#", "HTML", "CSS"],
        // image: 'require("../images/roadmap.gif")',
        dateOpened: 'Oct 25',
        dateClosed: 'Oct 25',
        labels: [
            'Enhancement'
        ],
        additions: 50,
        deletions: 11,
        complexity: 1,
        valuePoints: 1,
    },
    {
        id: 726,
        title: 'Deleted items are Still Visible',
        summary: [
            'When an item is deleted, its delete flag is set to 1. Some deleted items are still visible by the user as the delete flag is not taken into account when retrieving the data. Update the sql query to retrieve only the non-deleted items.',
        ],
        tagline: [
            'Update SQL query to include deleteFlag',
        ],
        requirements: [],
        solution: [],
        technologies: ["SQL"],
        // image: 'require("../images/roadmap.gif")',
        dateOpened: 'Oct 14',
        dateClosed: 'Oct 14',
        labels: [
            'Bug'
        ],
        additions: 2,
        deletions: 2,
        complexity: 1,
        valuePoints: 1,
    },
    {
        id: 622,
        title: 'Change Default filtering and Order',
        summary: [
            'Update tables to filter data that is active and make the default order use item id number.',
        ],
        tagline: [
            'Item is active, and in ID order',
        ],
        requirements: [],
        solution: [],
        technologies: ["JavaScript", "C#", "HTML", "CSS"],
        // image: 'require("../images/roadmap.gif")',
        dateOpened: 'Oct 14',
        dateClosed: 'Oct 14',
        labels: [
            'Enhancement'
        ],
        additions: 2,
        deletions: 2,
        complexity: 1,
        valuePoints: 1,
    },
    {
        id: 687,
        title: 'Refactor pages with new Libraries',
        summary: [
            'Update a section within the application to use the DataTables JavaScript library. Removed ajax callbacks and methods made redundant by the change. Additionally removed all session variables and replaved with URL parameters. The pages are now consistantly styled.',
        ],
        tagline: [
            'Remove code that is made redundant by changes.',
        ],
        requirements: [],
        solution: [],
        technologies: ["JavaScript", "C#", "HTML", "CSS"],
        // image: 'require("../images/roadmap.gif")',
        dateOpened: 'Oct 13',
        dateClosed: 'Oct 13',
        labels: [
            'Enhancement'
        ],
        additions: 371,
        deletions: 736,
        complexity: 2,
        valuePoints: 3,
    },
    {
        id: 682,
        title: 'Extend Bulk Update Functionlity',
        summary: [
            'Extend previously implemented bulk update functionlity so that the who, when, and in some cases why is captured.',
        ],
        tagline: [
            'Update all child items conditionally',
        ],
        requirements: [
            'When updating to a status of Not Applicable or Pending, a reason (selected from a dropdown), and a detailed reason (free text field) is saved to the db',
            'The reasons should be displayed on screen if the item is in one of the two statuses above',
            'All updates need to save who updated the status and when',
            'When updating to Pending status, only the overall item status is changed, not the underlying child steps',
            'When updating to a not applicable status, all child steps are set to not applicable and the change is displayed on screen',
            'When updating to a In Progress status, all steps are changed to In Progress and the reasons are set to null',
            'As with existing functionlity, when all steps are set to a complete or to Not Applicable the entire status is set to Complete, or Not Applicable (no reason is required)',
        ],
        solution: [
            'Added new columns to the database for saving reason and reason description',
            'Changes to styling and html elements as requested',
            'New modal for reason inputs and selecting status',
            'Validation for status description (cannot be null) for certain statuses',
            'Added display elements for new statuses and status reasons',
            'Database updates require a certain format for business analysis in PowerBI',
        ],
        technologies: ["JavaScript"],
        // image: 'require("../images/roadmap.gif")',
        dateOpened: 'Oct 6',
        dateClosed: 'Oct 6',
        labels: [
            'Enhancement'
        ],
        additions: 795,
        deletions: 205,
        complexity: 4,
        valuePoints: 15,
    },
    {
        id: 615,
        title: 'Updates to field not shown in page',
        summary: [
            'When updating an item the information is saved to the database but not shown on screen without a page refresh. Resolved using JavaScript to update all the relevant elements on item update.',
        ],
        tagline: [
            'Javascript DOM reset and populate.',
        ],
        requirements: [],
        solution: [],
        technologies: ["JavaScript"],
        // image: 'require("../images/roadmap.gif")',
        dateOpened: 'Oct 6',
        dateClosed: 'Oct 6',
        labels: [
            'Bug'
        ],
        additions: 14,
        deletions: 6,
        complexity: 1,
        valuePoints: 1,
    },
    {
        id: 613,
        title: 'Endless loading circle',
        summary: [
            'When updating an item, a loading circle appeared and never disappeared. Investigation, showed that when a specific data point was missing a JavaScript error was thrown and never handled. To resolve a guard was added to test when the data was missing and to not perform the functionlity if so.',
        ],
        tagline: [
            'Add guard against missing data.',
        ],
        requirements: [],
        solution: [],
        technologies: ["JavaScript"],
        // image: 'require("../images/roadmap.gif")',
        dateOpened: 'Sep 30',
        dateClosed: 'Sep 30',
        labels: [
            'Bug'
        ],
        additions: 4,
        deletions: 2,
        complexity: 1,
        valuePoints: 1,
    },
    {
        id: 616,
        title: 'Add field to item creation',
        summary: [
            'New field is required when user creates an item. Use existing functionality to add the new field. The potential field values are not contained within the database. ' +
            'Created a hardcoded lookup class for the values within the application so that it can be accessed wherever the values are needed, from one source of truth.',
        ],
        tagline: [
            'Understand existing create function and add field',
        ],
        requirements: [],
        solution: [],
        technologies: ["JavaScript", "HTML","C#"],
        // image: 'require("../images/roadmap.gif")',
        dateOpened: 'Sep 15',
        dateClosed: 'Sep 16',
        labels: [
            'Enhancement'
        ],
        additions: 26,
        deletions: 2,
        complexity: 1,
        valuePoints: 1,
    },
    {
        id: 577,
        title: 'Add new Dropdown Field',
        summary: [
            'Create a new dropdown. Add the field to the appropriate database table. Surface the field for users throughout the tool where relevant. When an item has been selected, remove ability to make null.',
        ],
        tagline: [
            'New dropdown with database changes',
        ],
        requirements: [],
        solution: [],
        technologies: ["SQL", "JavaScript", "CSS", "HTML", "C#"],
        // image: 'require("../images/roadmap.gif")',
        dateOpened: 'Sep 15',
        dateClosed: 'Sep 16',
        labels: [
            'Enhancement'
        ],
        additions: 72,
        deletions: 54,
        complexity: 1,
        valuePoints: 2,
    },
    {
        id: 550,
        title: 'Reusable Null Check Fields',
        summary: [
            'Created serveral C# and JavaScript functions for displaying and saving null values. The fields and functions are made to be reusable for saving specific columns in the database.',
        ],
        tagline: [
            'Ability to save nullable and non-nullable fields',
        ],
        requirements: [
            'Users requested the ability to save empty values in some fields.',
            'Allowing nulls can cause issues with data quality in some cases',
            'In develping this feature, also build fields that cannot be empty.',
            'Make it easy to turn this functionlity on or off, so that we can make some fields nullable and others not quickly',
        ],
        solution: [
            'Determine the fields that allowed empties or not',
            'Created an UpdateFormField JavaScript function that is triggered when entering data',
            'The function takes in the new data, but also a boolean for nullable or not',
            'Additionally, changes some fields to be dropdowns to improve data quality',
            'Some fields could be nullable conditionally if other data was set correctly',
        ],
        technologies: ["SQL", "JavaScript", "CSS", "HTML", "C#"],
        // image: 'require("../images/roadmap.gif")',
        dateOpened: 'Sep 14',
        dateClosed: 'Sep 16',
        labels: [
            'Enhancement'
        ],
        additions: 51,
        deletions: 29,
        complexity: 2,
        valuePoints: 2,
    },
    {
        id: 570,
        title: 'Create Timestamp for Completion',
        summary: [
            'When a client has finished deploying an item, create a timestamp and display it in the appropriate page.',
        ],
        tagline: [
            'Save time and data using best practice',
        ],
        requirements: [
            'Save a timestamp to the database when a client completes an item',
            'An item is \'Complete\' when all the sub-items are set to complete, and/or to not-applicable.',
        ],
        solution: [
            'Determine when an asset is considered complete',
            'When a sub-step is updated, determine (on server-side) whether all the other steps are also complete',
            'If so, set the entire item to complete and save the timestamp to the database along with the username',
            'The opposite occurs if all steps are completed and the user sets an item or sub-item to a non-completed status',
            'In this case the timestamp is removed and set to not complete',
            'A field for displaying this timestamp was created in multiple pages',
        ],
        technologies: ["SQL", "JavaScript", "CSS", "HTML", "C#"],
        // image: 'require("../images/roadmap.gif")',
        dateOpened: 'Sep 12',
        dateClosed: 'Sep 15',
        labels: ['Enhancement'
        ],
        additions: 63,
        deletions: 6,
        complexity: 3,
        valuePoints: 2,
    },
    {
        id: 425,
        title: 'Resolve Data Save Error',
        summary: [
            'Item description was not being saved due to updates to database table names. Resolved multiple issues with blank breadcrumbs and page styling.',
        ],
        tagline: [
            'Multiple issues with page',
        ],
        requirements: [
            'Resolve data save/update issues',
        ],
        solution: [
            'Updated column references in code, searched code base for other instances',
            'Fixed up breadcrumb blank spacing using Javascript to determine if data is required.',
            'Restyled button placement for popular function',
        ],
        technologies: ["SQL", "JavaScript", "CSS", "HTML", "C#"],
        // image: 'require("../images/roadmap.gif")',
        dateOpened: 'Sep 12',
        dateClosed: 'Sep 14',
        labels: [
            'Bug'
        ],
        additions: 183,
        deletions: 172,
        complexity: 2,
        valuePoints: 2,
    },
    {
        id: 340,
        title: 'Eligibilty Roadmap Page',
        summary: [
            'A web page that allows clients to quickly determine which items they are eligible for. The page also allows users to enrol in eligible items, navigate to enrolment guides and filter items on several data points.',
        ],
        tagline: [
            'Tracking User eligibility across products',
        ],
        requirements: [
            'Create a page that allows clients to see the items they are eligible for and are enrolled in.',
            'Allow users to enrol from this page',
            'Allow users to navigate to deployement guides for items they are enrolled into',
            'Use Javascript libraries that promote reusable code',
        ],
        solution: [
            'Fetched the eligible items for a client',
            'Created the front-end elements (tables, buttons, and filters) required for the feature',
            'Created reusable CSS for DataTable (Js Library)',
            'Javascript functions for showing appropriate navigation and enrollment buttons based on table data',
            'Added animating notifcation buttons for new eligible items',
            'Removed redundant code and replaced with reusuable functions',
            'Established functionlity that update the page when the underlying data is changed.',
            'Resolved an issue within the DataTables library that did not handle & symbols.',
        ],
        technologies: ["SQL", "JavaScript", "CSS", "HTML", "C#"],
        // image: 'require("../images/roadmap.gif")',
        dateOpened: 'Sep 10',
        dateClosed: 'Sep 13',
        labels: [
            'Enhancement'
        ],
        additions: 543,
        deletions: 136,
        complexity: 3,
        valuePoints: 8,
    },
    {
        id: 339,
        title: 'Determine Client Eligibility',
        summary: [
            'Determine if specific items can be used by clients. If they have the required technologies and the item meets all requirements, the client is eligible.',
        ],
        tagline: [
            'Correlate multiple variable to calculate eligibility',
        ],
        requirements: [
            'Eligibility should be captured in an SQL statement for use in Application and PowerBI',
            'The query should capture current enrolments and non-enrolled eligibility',
            'A client is eligible if they have deployed the items required technology',
            'There are multiple types of eligibility: Any technology in the list is required, All technology, or No technology.',
            'The items should be active and enrollable.',
            'If the account is already enrolled then do not show eligibilty for the item.',
            'If the account is not eligible, but already enrolled, still show enrollment.',
        ],
        solution: [
            'Determine the business requirements as listed above',
            'Investigate tables and map out plan for query',
            'Break the query into smaller pieces (eligibility, enrollments, etc.)',
            'Combine the results using a UNION operation',
            'Evaluate the correctness of the query',
            'Optimise the query by removing the UNION and replacing with strategic INNER JOINS',
        ],
        technologies: ["SQL", "JavaScript", "CSS", "HTML", "C#"],
        // image: 'require("../images/roadmap.gif")',
        dateOpened: 'Sep 10',
        dateClosed: 'Sep 13',
        labels: [
            'Enhancement'
        ],
        additions: 30,
        deletions: 0,
        complexity: 4,
        valuePoints: 10,
    },
    {
        id: 513,
        title: 'Contact Field with Display Name',
        summary: [
            'Create the fields and functionality to add contact details to an Team account.',
        ],
        tagline: [
            'Create a contact field for emails and websites',
        ],
        requirements: [
            'Add a contact field that can take an email or website',
            'The field should be validated so that emails and websites are correctly formatted',
            'Users should be able to add a display name if they are using a website.',
            'Once the save button is clicked the page should update with JavaScript not with a page reload.',
        ],
        solution: [
            'Created new input field and modal for adding contact details in HTML, CSS, and JavaScript',
            'Created fields for adding a display name for the website link',
            'Validation against email or website string using regex.',
            'Handle the creation and update, delete of contact details in the database SQL.',
            'Added reusable JavaScript functions for displaying and navigating to the appropriate link or email client',
            'Used JQuery Web Methods to prompt server-side functions',
        ],
        technologies: ["SQL", "JavaScript", "CSS", "HTML", "C#"],
        // image: 'require("../images/roadmap.gif")',
        dateOpened: 'Sep 2',
        dateClosed: 'Sep 5',
        labels: [
            'Enhancement'
        ],
        additions: 543,
        deletions: 160,
        complexity: 3,
        valuePoints: 3,
    },
    {
        id: 523,
        title: 'Extend delete functionality to children',
        summary: [
            'Propagate delete functionality to the items child resources. The may have several child resources of different types.',
        ],
        tagline: [
            'Propagate delete to sub-resources',
        ],
        requirements: [
            'Determine which resources require deletion when deleting an item',
            'Deletion is performed by setting a delete flag, not removing from database',
        ],
        solution: [
            'Rather than iteating through the objects, the deleteflags can be set via SQL',
            'Extended the delete server side functions (C#) to include the relevant resources',
            'SQL update queries where used. UPDATE Table SET DeleteFlag = 1 FROM Tables WHERE \'itemID is match\'',
        ],
        technologies: ["SQL"],
        // image: 'require("../images/roadmap.gif")',
        dateOpened: 'Sep 7',
        dateClosed: 'Sep 7',
        labels: [
            'Bug'
        ],
        additions: 40,
        deletions: 8,
        complexity: 1,
        valuePoints: 2,
    },
    {
        id: 481,
        title: 'Resolve UI/UX default value',
        summary: [
            'User complained that functionality was not working. In reality the default values for the user interface made it difficult to discern changes. '
            + 'Changed the default for these values and added a guard so that the UI element was always cleared before populating data.',
        ],
        tagline: [
            'UI Defaults to the wrong value',
        ],
        requirements: [
            'User could not select a specific value in user interface',
            'Resolve the issue.',
            'If the step is a \'parent\' step, display message that deleting the step will delete all sub-steps',
            'On confirmation delete the step and any of its sub-steps',
        ],
        solution: [
            'Issue was caused by not using a spacer in the dropdown element.',
            'Users tried to select the first element in the list that was already selected.',
            'This gave feedback that nothing had happened.',
            'Resolved by adding a spacer and ensuring the first value could not be saved but could be selected.',
        ],
        technologies: ["C#"],
        // image: 'require("../images/roadmap.gif")',
        dateOpened: 'Aug 31',
        dateClosed: 'Aug 31',
        labels: [
            'Bug'
        ],
        additions: 9,
        deletions: 2,
        complexity: 1,
        valuePoints: 1,
    },
    {
        id: 351,
        title: 'Build Delete Functionality for sequential data.',
        summary: [
            'One of the first significant tasks given in the internship. Add a button to a page modal that allows users to delete a step and sub-step from a list of steps and sub-steps.',
        ],
        tagline: [
            'Add delete functionality for seqeunce.',
        ],
        requirements: [
            'Add button for deleting steps and substeps in modal',
            'On button click, prompt user for confirmation',
            'If the step is a \'parent\' step, display message that deleting the step will delete all sub-steps',
            'On confirmation delete the step and any of its sub-steps',
        ],
        solution: [
            'Created the neccessary html elements and styles',
            'Created the prompt funcitonality and confirmation',
            'Steps are deleted by setting their deleteFlag in the database to true',
            'Sub steps are deleted using an sql query that checks for child steps',
        ],
        technologies: ["SQL", "C#", "HTML", " CSS"],
        // image: 'require("../images/roadmap.gif")',
        dateOpened: 'Aug 29',
        dateClosed: 'Aug 30',
        labels: [
            'Enhancement',
            'Bug'
        ],
        additions: 156,
        deletions: 8,
        complexity: 2,
        valuePoints: 3,
    },
    {
        id: 480,
        title: 'Conditionally Hide Section of Page',
        summary: [
            'One of the first tasks given in the internship. Conditionally hide part of a page in the platform.',
        ],
        tagline: [
            'Conditionally hide part of a page.',
        ],
        requirements: [
            'Hide part of the page if the user has not provided certain data.',
        ],
        solution: [
            'Used C# to test for data presence, set display property on element if not present',
            'Element is hidden on the server side.',
        ],
        technologies: ["C#", "CSS"],
        // image: 'require("../images/roadmap.gif")',
        dateOpened: 'Aug 31',
        dateClosed: 'Aug 31',
        labels: [
            'Enhancement',
        ],
        additions: 27,
        deletions: 23,
        complexity: 1,
        valuePoints: 1,
    },
    {
        id: 417,
        title: 'Survey Response Calculation Bug',
        summary: [
            'The first task given in the internship. Resolve a bug picked up by the platforms exception tracker. A guard against zero values was throwing an exception where is was not needed.',
        ],
        tagline: [
            'Resolve a malconfigured guard against zero.',
        ],
        requirements: [
            'Cross reference the error message provided, find the page and module that the bug occured in.',
            'Determine source of the error by debugging the application',
            'Resolve'
        ],
        solution: [
            'Exception thrown when users attempted to access or manage surveys that had a number of questions, but no associated responses',
            'The issue was caused malconfigured guards against zero',
            'Solution was to change the guards so that zero values were allowed. Tests ensured no divide by zero errors would occur.',
            'Changes tested against requirements of application and confirmed with tech lead.',
            'Additional changes: removed a repeated method',
        ],
        highlights: [
            'First contribution to the project and team.'
        ],
        technologies: ["C#", "Debugging", "Testing"],
        // image: 'require("../images/roadmap.gif")',
        dateOpened: 'Aug 26',
        dateClosed: 'Aug 26',
        labels: [
            'Bug',
        ],
        additions: 4,
        deletions: 11,
        complexity: 1,
        valuePoints: 1,
    },
    {
        id: 584,
        title: 'KanBan Board View',
        summary: [
            'A Trello style KanBan board for presenting business data. The view enables stakeholders to discuss and identify painpoints across multiple datapoints and export the discussion and findings for further presentation and analysis.'
            + 'It has enabled customers to understand their performance within the program. It has enabled informed decision making, prioritisation and optimisation of delivery for the company globally.',
        ],
        tagline: [
            'Create a custom Trello style KanBan board for understanding business data.',
        ],
        requirements: [
            'Rearrange the information architecture for presenting navigation options to the view.',
            'Protect against SQL injection and allow access only for specific users.',
            'Build or reuse databse queries for retrieving relevant data items.',
            'Work with users to determine relevant data items.',
            'Populate data dynamically into a board view simlar to Trello',
            'Each card in the board should be placed into the related column, and be grouped on datapoint X',
            'Enable search functionality that hides cards that are not relevant to query',
            'Handle null data points in the frontend',
            'Add buttons for filtering cards using checkboxes (multi-filters)',
            'Dynamically update a counter (with filtering) for multiple data values and display on screen for review',
            'Add actions within the cards to update values and redirect the user',
            'Ability to export the data (inc. filters) to a spreadsheet and pdf for presentation and analysis'
        ],
        solution: [
        ],
        highlights: [
            'Allows the business to gain insight into their performance and operation. Has enabled the prioritisation of new initiatives and the optimisation of delivery globally. Enables teams to discuss and identify painpoints across a multitude of datapoints and export the discussion and findings for presentation and analysis.'
        ],
        technologies: ["Javascript", "SQL", "C#", "Filters"],
        image: require("../images/roadmap.gif"),
        dateOpened: '17th Oct',
        dateClosed: 'Oct 27',
        labels: [
            'Enhancement',
            'C3'
        ],
        additions: 1437,
        deletions: 145,
        complexity: 4,
        valuePoints: 50,
    },
    {
        id: 687,
        title: 'Template Library Integration',
        summary: [
            'Create reusable template utilising external libraries and integrate into existing pages.',
        ],
        tagline: [
            'Create reusable template utilising external libraries and integrate into existing pages.',
        ],
        requirements: [
            'Create a template using the Datatable library that is inline with Business branding and can be reused across the project.',
            'The template should allow developers to quickly create and adapt pages with a consistant styling and software architecture',
            'As a proof of concept, integrate the template into pages  in the hyper-automation section where Datatables are appropriate',
            'Performance, Pagespeed time-to-interactive are vital',
        ],
        solution: [
            'Create a template using the Datatable library that is inline with Business branding and can be reused across the project.',
            'The template should allow developers to quickly ',
        ],
        highlights: [
            'This work is now used regularly by other developers as a basis for our most common data view. It enables developers to quickly create and adapt pages with a consistant styling and software architecture and improves readability and extensiblilty for future development work.'
        ],
        technologies: ["Javascript", "SQL", "Datatables"],
        image: require("../images/dttemplate.png"),
        dateOpened: '11th Oct',
        dateClosed: 'Oct 14',
        labels: [
            'Enhancement',
            'Performance',
            'UX',
        ],
        additions: 564,
        deletions: 7324,
        complexity: 2,
        valuePoints: 15,
    },
    {
        id: 343,
        title: 'Dynamic Bulk Update Function',
        tagline: [
            'Implement bulk update functionality that behaves differently depending on update type.',
        ],
        summary: [
            'Implement bulk update functionality that behaves differently depending on update type.',
        ],
        requirements: [
            'Surface update button on page that activates a modal enabling the selection of update type, description (from dropdown) and entry of a detailed description.',
            'A description should only be saved for update types (Not Applicable & Pending) however it is required in those cases.',
            'Updates should propagate to relavant subtasks except when updating to "Pending" which only updates the overarching task.',
            'If a user manually updates all subtasks to "Pending", "Not Applicable" or "Complete", the overall Task should be updated to those values.',
            'When a task action is updated while the overall action is in a completed state (Pending, Not Applicable, Complete) the overall task should be updated too, ie. to "In Progress".',
            "The timestamp and users details should be saved and surfaced in the summary of the task.",
            "If all task actions are set to 'Not Applicable' and the user sets an action to 'Complete' the overall task should be set to 'Complete' also.",
        ],
        solution: [
        ],
        highlights: [
            'This feature required implementation within highly coupled modules. The updates to data also required propagation to related data whilst maintaining data quality. The existing functionality performed many steps to ensure this quality but to minimise performance load on the server, the existing code needed to be understood and then repurposed into a bulk update.',
            'On completion the feature significantly improved user experience, allowing them to complete a task in 3 actions rather than 2n actions, where n is the number of steps.'
        ],
        technologies: ["Javascript", "SQL", "C#"],
        image: "",
        dateOpened: '11th Oct',
        dateClosed: 'Oct 20',
        labels: [
            'Enhancement',
            'Database',
            'UX',
            'C3',
        ],
        additions: 371,
        deletions: 736,
        complexity: 3,
        valuePoints: 15,
    },
];

export default projects;