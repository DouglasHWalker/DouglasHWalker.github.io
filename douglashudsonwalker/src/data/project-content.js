const projects = [
    {
        id: 1018,
        title: 'Resolve Redirect Issue',
        summary: [
            'Helped a collegue fix a navigation issue with a difficult bug. The issue was caused by legacy session variables that were present for some users but not others. If you were a regular user, the issue was not present. the bug was therefore diffcult to recreate. I was able to identify that this was the cause of the issue and run tests to confirm. To resolve the legachy session variables were replace.',
        ],
        tagline: [
            'Team member having difficulty with bug.',
        ],
        requirements: [],
        solution: [
        ],
        technologies: ["C#"],
        dateOpened: 'Dec 20',
        dateClosed: 'Dec 20',
        labels: [
            'Bug',
        ],
        additions: 8,
        deletions: 57,
        complexity: 3,
        valuePoints: 5,
    },
    {
        id: 1026,
        title: 'Refactor Field Names',
        summary: [
            'Change field names so they are consistant acrosse site.',
        ],
        tagline: [
            'Change field names so they are consistant acrosse site.',
        ],
        requirements: [],
        solution: [
        ],
        technologies: ["C#"],
        dateOpened: 'Dec 15',
        dateClosed: 'Dec 15',
        labels: [
            'Enhancement',
        ],
        additions: 15,
        deletions: 15,
        complexity: 1,
        valuePoints: 1,
    },
    {
        id: 1017,
        title: 'Create Reusable Control',
        summary: [
            'Created a page element that can be resused as a navigation bar for several pages within the platform. Users were experiencing some navigation issues which prompted this git issue. I used this opportunity to create the reusable control and update several pages so that future expansion of the section is easier.',
        ],
        tagline: [
            'Reusuable Naviagation Element to improve Future Development',
        ],
        requirements: [],
        solution: [],
        technologies: ["C#", "JavaScript", "HTML", "CSS"],
        // image: 'require("../images/roadmap.gif")', INCLUDE IMAGE - The Control
        dateOpened: 'Dec 15',
        dateClosed: 'Dec 15',
        labels: [
            'Enhancement',
        ],
        additions: 287,
        deletions: 311,
        complexity: 2,
        valuePoints: 5,
    },
    {
        id: 877,
        title: 'Update Legacy Data',
        summary: [
            'Create an SQL query that updates legacy and inconsistent data to new values. Ensure important data is not lost.',
        ],
        tagline: [
            'Update old data to the newest versions',
        ],
        requirements: [],
        solution: [],
        technologies: ["SQL",],
        // image: 'require("../images/roadmap.gif")', INCLUDE IMAGE - The query
        dateOpened: 'Dec 5',
        dateClosed: 'Dec 10',
        labels: [
            'Enhancement',
        ],
        additions: 32,
        deletions: 0,
        complexity: 2,
        valuePoints: 2,
    },
    {
        id: 928,
        title: 'Remove and Hide Production Element',
        summary: [
            'Legacy assets catalogue was no longer needed. I unpublished the catalogue from production and moved existing items to appropriate locations.',
        ],
        tagline: [
            'Remove the Catalogue called "Legacy Assets"',
        ],
        requirements: [''],
        solution: [],
        technologies: ["SQL"],
        dateOpened: 'Dec 8',
        dateClosed: 'Dec 11',
        labels: [
            'Enhancement',
        ],
        additions: 12,
        deletions: 0,
        complexity: 1,
        valuePoints: 1,
    },
    {
        id: 893,
        title: 'Issues with Item Children',
        summary: [
            'There is a bug that prevents items that have no added children from being tracked. The resolution was to automatically create at least one child item when creating a new item. This resolved the issue and we were able to remove some redundant code.',
        ],
        tagline: [
            'Items without children cannot be tracked for progress.',
        ],
        requirements: [''],
        solution: [],
        technologies: ["C#", "JavaScript", "SQL"],
        dateOpened: 'Nov 16',
        dateClosed: 'Dec 8',
        labels: [
            'Bug',
        ],
        additions: 19,
        deletions: 134,
        complexity: 2,
        valuePoints: 2,
    },
    {
        id: 1000,
        title: 'Item Management Triage',
        summary: [
            'Create a new Page for triaging and prioritising asset publishing. The functionlity promotes data quality by restricting the publishing of assets to a select group within each team. All team members can an asset for review, but only the trained administrators can publish the asset for public consumption.',
        ],
        tagline: [
            'Promote data quality through publishing restrictions.',
        ],
        requirements: [
            'Each team requires 2 levels of access. Administrator and Member',
            'Administrators can add people to the team and set the access level of the teams members.',
            'Administrators can also Triage assets in the teams catalogue.',
            'Create a new page that allows administrators to perform this asset publishing triage.',
            'When publishing an asset, an administrator is presented with a checklist to evaluate the assets quality.',
            'Only when all the checkboxes are checked can an asset be published.',
            'The administrator has the option to send the asset back to the creator with a reason (selected from a dropdown) and a text comment explaining why it needs changes.',
            'Having completed the checklist, when the admin clicks publish, they are presented with another modal that prompts for the catalogue, and the asset status.',
            'Provde explainations for the various statuses via a tooltip',
            'The comment for a ineligible asset is mandatory to provide',
            'Surface the comment and the publishing status in the relevant screens',
            'The creator of the asset can only submit it when all the mandatory fields have been filled.',
            'As part of this enhancement, serveral field will need to be set as mandatory.',
            'The creator should get feedback for why their asset cannot be submitted.',
            'The new publishing statuses are to be changes to "Yes", "No", "Submitted for Review", and "Changes Requested". Remove the other database columns for managing publish status and update the exisiting data.',
            'Hide team management tabs from the non-admin users.',
            'Create the database querys and updates, test them and provide them in the git branch so that the chagnes can be made to production.',
        ],
        solution: [],
        technologies: ["C#", "JavaScript", "SQL", "HTML", "CSS"],
        image: 'require("../images/triage.gif")',
        dateOpened: 'Dec 1',
        dateClosed: 'Dec 8',
        labels: [
            'Enhancement',
        ],
        additions: 1419,
        deletions: 914,
        complexity: 4,
        valuePoints: 20,
    },
    {
        id: 1004,
        title: 'Update User Access Controls',
        summary: [
            'Update user access control to certain pages to allow additional regions to access functionality. Took the opportunity to improve the functions underlying the feature. Was able make it more reusable across pages.',
        ],
        tagline: [
            'Allow APAC region access to management pages.',
        ],
        requirements: [],
        solution: [
        ],
        technologies: ["C#"],
        dateOpened: 'Dec 8',
        dateClosed: 'Dec 8',
        labels: [
            'Enhancement',
        ],
        additions: 37,
        deletions: 10,
        complexity: 2,
        valuePoints: 2,
    },
    {
        id: 912,
        title: 'Add Filter and Set Default View',
        summary: [
            'Add a filter to a table view page that uses data from a seperate but related table in the database. Additionally, set the defualt for the page to collapse the items to shorthand versions with a button that toggles between long and short form.',
        ],
        tagline: [
            'Filter for seperate table and collapse view by default',
        ],
        requirements: [],
        solution: [],
        technologies: ["C#", "HTML", "CSS", "JavaScript"],
        dateOpened: 'Dec 3',
        dateClosed: 'Dec 7',
        labels: [
            'Enhancement',
        ],
        additions: 31,
        deletions: 11,
        complexity: 2,
        valuePoints: 2,
    },
    {
        id: 978,
        title: 'Add Navigation and Styling',
        summary: [
            'Create a navigation link for each row of a table that takes the id of the row and uses it to determine the data for the next page. Fix up some styling issues with table width for some devices on these pages.',
        ],
        tagline: [
            'Parameter based URL navigation and CSS styling',
        ],
        requirements: [],
        solution: [ ],
        technologies: ["C#", "HTML", "CSS", "JavaScript"],
        dateOpened: 'Nov 28',
        dateClosed: 'Dec 3',
        labels: [
            'Enhancement',
        ],
        additions: 2,
        deletions: 2,
        complexity: 1,
        valuePoints: 1,
    },
    {
        id: 976,
        title: 'Refactor Play to Asset across the tool',
        summary: [
            'Items are referred to as Plays and as Assets throughout the tool. Refactor this so that all are named assets consistantly in the frontend. Additionally, removed two pages that were no longer used and redundant.',
        ],
        tagline: [
            'Make item names consistent',
        ],
        requirements: [],
        solution: [
        ],
        technologies: ["Visual Studio"],
        dateOpened: 'Dec 1',
        dateClosed: 'Dec 3',
        labels: [
            'Enhancement',
        ],
        additions: 49,
        deletions: 440,
        complexity: 1,
        valuePoints: 2,
    },
    {
        id: 934,
        title: 'Surface Item Links and Downloads',
        summary: [
            'For each item, various links and downloads should be visible on the summary page. For each sub-item the links and downloads should be visible in another section. Create a summary card for the links and download in an item. Validate and surface hyperlinks for the item and its sub-items. Uploaded files are not being surfaced in the tool. Resolve this issue.',
        ],
        tagline: [
            'Create new html elements and styling.',
        ],
        requirements: [],
        solution: [
        ],
        technologies: ["C#", "SQL", "HTML", "CSS", "JavaScript"],
        // image: 'require("../images/roadmap.gif")', UINCLUDE IMAGE - Downloads.png
        dateOpened: 'Dec 1',
        dateClosed: 'Dec 3',
        labels: [
            'Enhancement', 'Bug',
        ],
        additions: 351,
        deletions: 145,
        complexity: 2,
        valuePoints: 5,
    },
    {
        id: 961,
        title: 'Default Item Creation Status Red',
        summary: [
            'Make the default status of an item "Red" when it is created. Additionally, Add a filter for archived assets and remove the button that performed this function.',
        ],
        tagline: [
            'Also, remove redundant button, use filter instead.',
        ],
        requirements: [],
        solution: [
        ],
        technologies: ["C#"],
        // image: 'require("../images/roadmap.gif")',
        dateOpened: 'Nov 30',
        dateClosed: 'Nov 30',
        labels: [
            'Enhancement',
        ],
        additions: 6,
        deletions: 33,
        complexity: 1,
        valuePoints: 2,
    },
    {
        id: 959,
        title: 'Resolve Enrollment Dropdown Issue',
        summary: [
            'Identified bug. When enrolling an account into a specific item. The enrol button does not show unless the account region is changed in the dropdown. Users in the dropdowns default region would be confused as they cannot see any enrol button. Resolved by setting the enrol button to visible by default.',
        ],
        tagline: [
            'Button only conditionally visible.',
        ],
        requirements: [],
        solution: [
        ],
        technologies: ["C#"],
        // image: 'require("../images/roadmap.gif")',
        dateOpened: 'Nov 30',
        dateClosed: 'Nov 30',
        labels: [
            'Bug',
        ],
        additions: 2,
        deletions: 1,
        complexity: 1,
        valuePoints: 2,
    },
    {
        id: 933,
        title: 'Multiple pages: Add field and filters',
        summary: [
            'When viewing an item, show the team that the item is managed by. Resolve issues with viewing the team in other pages. Add team label to item deployment summary. Add team and filters to several table views.',
        ],
        tagline: [
            'Add filters and team to several pages.',
        ],
        requirements: [],
        solution: [
        ],
        technologies: ["C#", "SQL", "HTML", "CSS", "JavaScript"],
        image: 'require("../images/teams.png")',
        dateOpened: 'Nov 25',
        dateClosed: 'Nov 28',
        labels: [
            'Enhancement',
        ],
        additions: 103,
        deletions: 40,
        complexity: 2,
        valuePoints: 5,
    },
    {
        id: 741,
        title: 'Resolve Issue in Bulk Status Update',
        summary: [
            'Bulk status update fails when not sub-items exist. Update the SQL creation query to create the required sub-items when none-exist.',
        ],
        tagline: [
            'Create sub-items when none exist.',
        ],
        requirements: [],
        solution: [
        ],
        technologies: ["SQL"],
        image: 'require("../images/bulk_status.png")',
        dateOpened: 'Oct 17',
        dateClosed: 'Oct 21',
        labels: [
            'Bug',
        ],
        additions: 13,
        deletions: 0,
        complexity: 2,
        valuePoints: 2,
    },
    {
        id: 844,
        title: 'Update Legacy Data',
        summary: [
            'Create an SQL query that updates legacy and inconsistent data to new values. Ensure important data is not lost. The aim is to improve data quality.',
        ],
        tagline: [
            'Improve data quality by improving consistency.',
        ],
        requirements: [],
        solution: [
        ],
        technologies: ["SQL"],
        // image: 'require("../images/roadmap.gif")', INCLUDE IMAGE - The query
        dateOpened: 'Nov 1',
        dateClosed: 'Nov 3',
        labels: [
            'Enhancement',
        ],
        additions: 22,
        deletions: 1,
        complexity: 2,
        valuePoints: 2,
    },
    {
        id: 912,
        title: 'Change Item Catalogue Functionality',
        summary: [
            'Create a modal that allows users to choose whether to edit and item, or move it to another catalogue. When an item\'s catalogue is changed, the item should disappear from the view and show up in another page. The user should only able to choose from catalogues they have access to. Only users with edit privileges can access the edit item section.',
        ],
        tagline: [
            'Create modal for moving item to different catalogue.',
        ],
        requirements: [],
        solution: [
            'Used JavaScript functions to update page elements when changes were made. This ensured no page reload was required.',
            'Built HTML and CSS for the modal and elements for user functionality.',
            'C# and SQL to update the item in the database.',
        ],
        technologies: ["JavaScript", "C#", "SQL", "HTML", "CSS"],
        // image: 'require("../images/roadmap.gif")', INCLUDE IMAGE - The Modal
        dateOpened: 'Nov 21',
        dateClosed: 'Nov 24',
        labels: [
            'Enhancement',
        ],
        additions: 137,
        deletions: 11,
        complexity: 2,
        valuePoints: 2,
    },
    {
        id: 880,
        title: 'Remove Duplicate Heading',
        summary: [
            'A Heading is duplicated on the home page. On discussion with stakeholders the functionality under the heading is not being used. This \'external links\' functionality should be removed and hidden for now. Identify all the code related to the feature and remove it. Tag this issue so that we can find the branch and code later if we need it again.',
        ],
        tagline: [
            'Remove/Hide unused Feature',
        ],
        requirements: [],
        solution: [],
        technologies: ["C#", "CSS", "C#", "JavaScript"],
        dateOpened: 'Nov 24',
        dateClosed: 'Nov 24',
        labels: [
            'Bug',
        ],
        additions: 14,
        deletions: 92,
        complexity: 1,
        valuePoints: 1,
    },
    {
        id: 854,
        title: 'Restrict Access by Location',
        summary: [
            'Created functions that check if the user is from the desired regions or subregions. If they are then the elements and features are initialised on page load. If they are not the user is redirected if they do not have access to the page and a message is displayed describing the user access issue.',
        ],
        tagline: [
            'Only APAC region users should have access to the functionlity.',
        ],
        requirements: [],
        solution: [],
        technologies: ["CSS", "THML", "C#", "JavaScript"],
        // image: 'require("../images/roadmap.gif")', INCLUDE IMAGE 
        dateOpened: 'Nov 22',
        dateClosed: 'Nov 22',
        labels: [
            'Enhancement',
        ],
        additions: 77,
        deletions: 15,
        complexity: 2,
        valuePoints: 2,
    },
    {
        id: 879,
        title: 'Reuasable Status Tooltip',
        summary: [
            'Create a reusable tooltip that describes the meaning of the various item statuses. The tooltip should have one place of modification and be triggered by hover on a info icon. Created a JavaScript function that registers the tooltip in the page and provides the hover functionality. Created the functionlity and template for creating reusable and readable tooltips in future development.',
        ],
        tagline: [
            'Provide Status descriptions on hover.',
        ],
        requirements: [],
        solution: [],
        technologies: ["CSS", "THML", "C#", "JavaScript"],
        // image: 'require("../images/roadmap.gif")', INCLUDE IMAGE - The tooltip
        dateOpened: 'Nov 22',
        dateClosed: 'Nov 22',
        labels: [
            'Enhancement',
        ],
        additions: 214,
        deletions: 54,
        complexity: 2,
        valuePoints: 5,
    },
    {
        id: 879,
        title: 'Link to Item View If Admin',
        summary: [
            'Provide a quick access button to the edit item screen if the user is an admin. When viewing the list of items admins should be able to navigate quickly to view and alter the item. Additional cleanup of session variables in relavent pages.',
        ],
        tagline: [
            'Quick access to Edit Item in List View',
        ],
        requirements: [],
        solution: [],
        technologies: ["C#", "HTML", "JavaScript"],
        // image: 'require("../images/roadmap.gif")',
        dateOpened: 'Nov 15',
        dateClosed: 'Nov 17',
        labels: [
            'Enhancement',
        ],
        additions: 204,
        deletions: 113,
        complexity: 2,
        valuePoints: 2,
    },
    {
        id: 878,
        title: 'Resolve Numeric Ordering for Sequence',
        summary: [
            'A sequence of items were being presented in the following format: 1.1, 2.2, 2.3, 3.4 etc. The desired format is: 1.1, 2.1, 2.2, 3.1 etc. The issue was that the sequence number was being saved to the database to track order of creation. When displaying the sequence the sub-sequence was not taken into account. Resolution was to restart the count on the frontend when encountering a parent step. No changes to the database. This issue is part of a larger problem with item sequence, modifying item order and deletion. This is a temporary fix while stakeholders discuss the objectives of item ordering and changes.',
        ],
        tagline: [
            'Nested item order should be 1.1, 1.2, 2.1 etc.',
        ],
        requirements: [],
        solution: [],
        technologies: ["C#"],
        // image: 'require("../images/roadmap.gif")', INCLUDE IMAGE
        dateOpened: 'Nov 13',
        dateClosed: 'Nov 16',
        labels: [
            'Bug'
        ],
        additions: 24,
        deletions: 15,
        complexity: 2,
        valuePoints: 1,
    },
    {
        id: 861,
        title: 'Collection Filter for Trello View',
        summary: [
            'this feature allows users to filter items in the Trello View by the technologies they have available. Each item in the view has a list of technologies it has deployed, and users can filter the items by selecting a specific technology or by searching for a specific technology.'
            + '\n\nTo achieve this feature, we used several JavaScript functions that map the technologies and compare values using dictionary matching. This allows users to quickly and easily filter the items in the view by the technologies they have available. Additionally, we added filters for publish status, along with export functions, and made improvements to null handling in filters.'
        ],
        tagline: [
            'Filter for Item with List',
        ],
        requirements: [],
        solution: [],
        technologies: ["JavaScript", "C#", "HTML"],
        // image: 'require("../images/roadmap.gif")', INCLUDE IMAGE - code for filter function or the collection mapping
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
        // image: 'require("../images/roadmap.gif")', INCLUDE IMAGE - maybe before and after
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
        title: 'Extend Bulk Update Functionality',
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
        // image: 'require("../images/roadmap.gif")', INCLUDE IMAGE - of new modal before and after
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
        technologies: ["JavaScript", "HTML", "C#"],
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
        // image: 'require("../images/roadmap.gif")', INCLUDE IMAGE - showing timestamp or summary box
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
        // image: 'require("../images/roadmap.gif")', INCLUDE IMAGE - this is a possible duplicate
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
        // image: 'require("../images/roadmap.gif")', INCLUDE IMAGE - of SQL query and results
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
            'One of the first large tasks assigned. The goal of this task was to add a button to a page modal that allows users to delete a step and sub-step from a list of steps and sub-steps.',
        ],
        tagline: [
            'Add delete functionality for sequence.',
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
        // image: 'require("../images/roadmap.gif")',  INCLUDE IMAGE - delete modal
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
            'This was the first task I was assigned. This bug was picked up by the platform\'s exception tracker. The bug occurred when users attempted to access or manage surveys that had a number of questions, but no associated responses.',
        ],
        tagline: [
            'Resolve a malconfigured guard against zero.',
        ],
        requirements: [
            'To resolve the bug, I had to cross-reference the error message provided, find the page and module where the bug occurred, and determine the source of the error by debugging the application. The issue was caused by malconfigured guards against zero values, which were throwing an exception where it was not needed.',
        ],
        solution: [
            'The solution was to change the guards so that zero values were allowed. I also ran tests to ensure that there would be no divide by zero errors. The changes were tested against the requirements of the application and confirmed with the tech lead. Additionally, I removed a repeated method.',
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
            'This tool allows business stakeholders to easily view and discuss important data in a Trello-style format. It allows teams to identify pain points, prioritize new initiatives, and optimize delivery globally. It enables customers to understand their performance within the program and make informed decisions.',
        ],
        tagline: [
            'Create a custom Trello style KanBan board for understanding business data.',
        ],
        requirements: [
            'The ability to gain insight into business performance and operations',
            'The ability to prioritize new initiatives and optimize delivery globally',
            'The ability to discuss and identify pain points across multiple data points',
            'The ability to export discussions and findings for further presentation and analysis',
        ],
        solution: [
            'Design and Implement a user interface based on feedback from stakeholders',
            'Work with users to determine relevant data items',
            'Build or reuse database queries to retrieve relevant data items',
            'Populate data dynamically into a board view similar to Trello',
            'Sort data into a nested rows and columns structure based on their values and attributes',
            'Add search functionality to hide irrelevant cards',
            'Handle null data points in the frontend',
            'Add filtering buttons that utilise checkboxes for multi-selection',
            'Dynamically update a counter that displays the number of card/data-points in view',
            'Add actions within the cards to update values and redirect the user',
            'Ability to export data (including filters) to a spreadsheet or pdf for presentation and analysis',
            'Perform access control limitation, and ensure only specific users can access the dashboard',
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