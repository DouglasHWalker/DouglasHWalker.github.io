const projects = [
    {
        id: 584,
        title: 'KanBan Board View',
        summary: [
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
            '',
        ],
        highlights: [
            'Allows the business to gain insight into their performance and operation. Has enabled the prioritisation of new initiatives and the optimisation of delivery globally. Enables teams to discuss and identify painpoints across a multitude of datapoints and export the discussion and findings for presentation and analysis.'
        ],
        technologies: ["Javascript", "SQL", "C#", "Filters"],
        image: require("../images/roadmap.gif"),
        dateOpened: '17th Oct',
        dateClosed: '27 Oct',
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
        requirements: [
            'Create a template using the Datatable library that is inline with Business branding and can be reused across the project.',
            'The template should allow developers to quickly create and adapt pages with a consistant styling and software architecture',
            'As a proof of concept, integrate the template into pages  in the hyper-automation section where Datatables are appropriate',
            'Performance, Pagespeed time-to-interactive are vital',
        ],
        solution: [
            'Create a template using the Datatable library that is inline with Business branding and can be reused across the project.',
            'The template should allow developers to quickly ',
            'Developed innovative visualisation for humanitarian crisis response in collaboration with  Defence Science and Technology Group. https://www.dst.defence.gov.au.',
            'Performed extensive literature reviews of state-of-the-art artificial intelligence techniques & implemented demonstrations for use in augmented reality headsets.',
            'Performed large user-studies and collated results for use in research publications.',
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
            'Create a template using the Datatable library that is inline with Business branding and can be reused across the project.',
            'Take into account the database updates required for existing data',
            'Developed innovative visualisation for humanitarian crisis response in collaboration with  Defence Science and Technology Group. https://www.dst.defence.gov.au.',
            'Performed extensive literature reviews of state-of-the-art artificial intelligence techniques & implemented demonstrations for use in augmented reality headsets.',
            'Performed large user-studies and collated results for use in research publications.',
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
        complexity: 2,
        valuePoints: 15,
    },
    // {
    //     id: 700,
    //     title: 'News Veracity.',
    //     summary: [
    //         'Integer maximus tortor vel mauris bibendum, ac iaculis dolor ullamcorper.Curabitur dapibus feugiat venenatis.Morbi ac enim sed sem varius sodales tincidunt non orci.',
    //         'Integer venenatis viverra leo, ac malesuada dolor finibus ut.Praesent quis nunc id elit vehicula blandit.Cras aliquam venenatis nisi, id consectetur augue dapibus sit amet.',
    //     ],
    //     requirements: [
    //         'Create a template using the Datatable library that is inline with Business branding and can be reused across the project.',
    //         'The template should allow developers to quickly create and adapt pages with a consistant styling and software architecture',
    //         'As a proof of concept, integrate the template into pages  in the hyper-automation section where Datatables are appropriate',
    //         'Performance, Pagespeed time-to-interactive are vital',
    //     ],
    //     solution: [
    //         'Create a template using the Datatable library that is inline with Business branding and can be reused across the project.',
    //         'The template should allow developers to quickly ',
    //         'Developed innovative visualisation for humanitarian crisis response in collaboration with  Defence Science and Technology Group. https://www.dst.defence.gov.au.',
    //         'Performed extensive literature reviews of state-of-the-art artificial intelligence techniques & implemented demonstrations for use in augmented reality headsets.',
    //         'Performed large user-studies and collated results for use in research publications.',
    //     ],
    //     highlights: [
    //         'The template I created will be used throughout the project and enable developers to quickly create and adapt pages with a consistant styling and software architecture.'
    //     ],
    //     technologies: ["Javascript", "SQL", "Datatables"],
    //     image: require("../images/Dalle.jpeg"),
    //     dateOpened: '11th Oct',
    //     dateClosed: 'Jun 14',
    //     labels: [
    //         'Enhancement',
    //         'Performance',
    //         'UX',
    //     ],
    //     additions: 371,
    //     deletions: 736,
    //     complexity: 2,
    //     valuePoints: 15,
    // },
];

export default projects;