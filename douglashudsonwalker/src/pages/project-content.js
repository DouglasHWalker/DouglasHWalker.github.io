const projects = [
    {
        name: 'joadia',
        title: 'Asset Roadmap',
        summary: [
            'Dashboard supporting multiple layers of filtering, sorting, grouping, in nested div trello style board.',
        ],
        content: [
            'Built agent capable of optimising strategies to maximise lives saved in simulation. Novel visualisation utilised D3 & TypeScript to generate actor-entity timelines. User-studies  found the visualisation improved sense making for difficult questions by over 60%.',
            'Developed innovative visualisation for humanitarian crisis response in collaboration with  Defence Science and Technology Group. https://www.dst.defence.gov.au.',
            'Performed extensive literature reviews of state-of-the-art artificial intelligence techniques & implemented demonstrations for use in augmented reality headsets.',
            'Performed large user-studies and collated results for use in research publications.',
        ],
        image: require("../images/jodia.png"),
        technologies: ["Algorithms", "SQL", "C#", "JavaScript"]
    },
    {
        name: 'bankstudios',
        title: 'Financial Planning',
        summary: [
            'Integer maximus tortor vel mauris bibendum, ac iaculis dolor ullamcorper.',
        ],
        content: [
            'Predicting the weather is difficult when the lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum porta dignissim mauris, non dapibus justo. Cras a ultrices nisi, quis auctor justo.',
            'Integer maximus tortor vel mauris bibendum, ac iaculis dolor ullamcorper.Curabitur dapibus feugiat venenatis.Morbi ac enim sed sem varius sodales tincidunt non orci.',
            'Integer venenatis viverra leo, ac malesuada dolor finibus ut.Praesent quis nunc id elit vehicula blandit.Cras aliquam venenatis nisi, id consectetur augue dapibus sit amet.',
            'Morbi quis massa libero.Interdum et malesuada fames ac ante ipsum primis in faucibus.Pellentesque id felis nibh.Sed a neque posuere, interdum neque sed, consectetur leo.',
            'Nunc convallis elementum felis, nec volutpat risus aliquam a.Cras consequat orci ac pharetra aliquet.Proin iaculis quam orci, ac volutpat velit pretium eu.Praesent sed consequat purus.',
            'Curabitur gravida, libero pellentesque dictum finibus, ipsum erat efficitur nunc, quis ullamcorper augue elit et felis.Maecenas quis enim dolor.',
            'Maecenas pellentesque sapien sit amet facilisis dictum.Donec posuere pharetra sapien ac porta.Donec imperdiet ornare turpis.In lobortis tempor quam ut sollicitudin.',
            'Cras maximus tincidunt lacus, in gravida magna auctor a.Suspendisse aliquam, augue in efficitur rhoncus, orci mi auctor magna, in venenatis quam ante eget ex.',
            'Ut hendrerit purus ac tortor vestibulum, facilisis pharetra felis ultricies.Sed sit amet nulla condimentum, ultricies erat vitae, semper ex.',
            'Morbi rutrum laoreet purus, vitae venenatis est efficitur eu.Pellentesque pharetra bibendum rhoncus.Sed tempus dignissim elementum.'
        ],
        image: require("../images/predictions.png"),
        technologies: ["React Native",  "Swift", "Python","C++"]
    },
    {
        name: 'lifetime',
        title: 'News Veracity.',
        summary: [
            'Integer maximus tortor vel mauris bibendum, ac iaculis dolor ullamcorper.Curabitur dapibus feugiat venenatis.Morbi ac enim sed sem varius sodales tincidunt non orci.',
            'Integer venenatis viverra leo, ac malesuada dolor finibus ut.Praesent quis nunc id elit vehicula blandit.Cras aliquam venenatis nisi, id consectetur augue dapibus sit amet.',
        ],
        content: [
            'Predicting the weather is difficult when the lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum porta dignissim mauris, non dapibus justo. Cras a ultrices nisi, quis auctor justo.',
            'Integer maximus tortor vel mauris bibendum, ac iaculis dolor ullamcorper.Curabitur dapibus feugiat venenatis.Morbi ac enim sed sem varius sodales tincidunt non orci.',
            'Integer venenatis viverra leo, ac malesuada dolor finibus ut.Praesent quis nunc id elit vehicula blandit.Cras aliquam venenatis nisi, id consectetur augue dapibus sit amet.',
            'Morbi quis massa libero.Interdum et malesuada fames ac ante ipsum primis in faucibus.Pellentesque id felis nibh.Sed a neque posuere, interdum neque sed, consectetur leo.',
            'Nunc convallis elementum felis, nec volutpat risus aliquam a.Cras consequat orci ac pharetra aliquet.Proin iaculis quam orci, ac volutpat velit pretium eu.Praesent sed consequat purus.',
            'Curabitur gravida, libero pellentesque dictum finibus, ipsum erat efficitur nunc, quis ullamcorper augue elit et felis.Maecenas quis enim dolor.',
            'Maecenas pellentesque sapien sit amet facilisis dictum.Donec posuere pharetra sapien ac porta.Donec imperdiet ornare turpis.In lobortis tempor quam ut sollicitudin.',
            'Cras maximus tincidunt lacus, in gravida magna auctor a.Suspendisse aliquam, augue in efficitur rhoncus, orci mi auctor magna, in venenatis quam ante eget ex.',
            'Ut hendrerit purus ac tortor vestibulum, facilisis pharetra felis ultricies.Sed sit amet nulla condimentum, ultricies erat vitae, semper ex.',
            'Morbi rutrum laoreet purus, vitae venenatis est efficitur eu.Pellentesque pharetra bibendum rhoncus.Sed tempus dignissim elementum.'
        ],
        image: require("../images/Dalle.jpeg"),
        technologies: [ "BERT", "LaTeX", "Technical Writing"]
    },
    {
        name: 'bankstudios',
        title: 'Personalise Online Education',
        summary: [
            'Integer maximus tortor vel mauris bibendum, ac iaculis dolor ullamcorper.Curabitur dapibus feugiat venenatis.Morbi ac enim sed sem varius sodales tincidunt non orci.',
            'Integer venenatis viverra leo, ac malesuada dolor finibus ut.Praesent quis nunc id elit vehicula blandit.Cras aliquam venenatis nisi, id consectetur augue dapibus sit amet.',
        ],
        content: [
            'Predicting the weather is difficult when the lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum porta dignissim mauris, non dapibus justo. Cras a ultrices nisi, quis auctor justo.',
            'Integer maximus tortor vel mauris bibendum, ac iaculis dolor ullamcorper.Curabitur dapibus feugiat venenatis.Morbi ac enim sed sem varius sodales tincidunt non orci.',
            'Integer venenatis viverra leo, ac malesuada dolor finibus ut.Praesent quis nunc id elit vehicula blandit.Cras aliquam venenatis nisi, id consectetur augue dapibus sit amet.',
            'Morbi quis massa libero.Interdum et malesuada fames ac ante ipsum primis in faucibus.Pellentesque id felis nibh.Sed a neque posuere, interdum neque sed, consectetur leo.',
            'Nunc convallis elementum felis, nec volutpat risus aliquam a.Cras consequat orci ac pharetra aliquet.Proin iaculis quam orci, ac volutpat velit pretium eu.Praesent sed consequat purus.',
            'Curabitur gravida, libero pellentesque dictum finibus, ipsum erat efficitur nunc, quis ullamcorper augue elit et felis.Maecenas quis enim dolor.',
            'Maecenas pellentesque sapien sit amet facilisis dictum.Donec posuere pharetra sapien ac porta.Donec imperdiet ornare turpis.In lobortis tempor quam ut sollicitudin.',
            'Cras maximus tincidunt lacus, in gravida magna auctor a.Suspendisse aliquam, augue in efficitur rhoncus, orci mi auctor magna, in venenatis quam ante eget ex.',
            'Ut hendrerit purus ac tortor vestibulum, facilisis pharetra felis ultricies.Sed sit amet nulla condimentum, ultricies erat vitae, semper ex.',
            'Morbi rutrum laoreet purus, vitae venenatis est efficitur eu.Pellentesque pharetra bibendum rhoncus.Sed tempus dignissim elementum.'
        ],
        image: require("../images/predictions.png"),
        technologies: ["C++", "React Native", "Node.js", "Python", "Swift"]
    },
];

export default projects;