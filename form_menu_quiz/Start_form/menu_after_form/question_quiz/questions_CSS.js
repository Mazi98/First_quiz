export  const objectQuestionsCss = [
    {
        question: 'What does CSS stand for?',
        answer: [
            {text: 'Cascading Style Sheets', correct:true,},
            {text: 'Colorful Style Sheets ',},
            {text: 'Computer Style Sheets',},
            {text: 'Creative Style Sheets',},
        ]
    },
    {
        question: 'What is the correct HTML for referring to an external style sheet?',
        answer: [
            {text: '<link rel="stylesheet" type="text/css" href="mystyle.css"> ', correct:true,},
            {text: '<style src="mystyle.css">',},
            {text: '<stylesheet>mystyle.css</stylesheet>',},
            {text: 'does not exist',},
        ]
    },
    {
        question: 'Which HTML attribute is used to define inline styles?',
        answer: [
            {text: 'class',},
            {text: 'style ', correct:true,},
            {text: 'styles',},
            {text: 'font', },
        ]
    },
    {
        question: 'Which is the correct CSS syntax?',
        answer: [
            {text: '{body:color=black;}  ',},
            {text: 'body {color: black;}  ', correct:true,},
            {text: 'body:color=black;',},
            {text: '{body;color:black;}',},
        ]
    },
    {
        question: 'How do you insert a comment in a CSS file?',
        answer: [
            {text: '// this is a comment',},
            {text: '/* this is a comment */  ', correct:true,},
            {text: '// this is a comment //',},
            {text: `'this is a comment`,},
        ]
    },
    {
        question: 'Which CSS property controls the text size?',
        answer: [
            {text: 'font-style',},
            {text: 'text-size',},
            {text: 'text-style',},
            {text: 'font-size ', correct:true,},
        ]
    },
    {
        question: 'How do you display hyperlinks without an underline?',
        answer: [
            {text: 'a {decoration:no-underline;} ',},
            {text: 'a {text-decoration:none;} ', correct:true,},
            {text: 'a {underline:none;}',},
            {text: 'a {text-decoration:no-underline;}',},
        ]
    },
    {
        question: 'How do you make each word in a text start with a capital letter?',
        answer: [
            {text: 'text-style:capitalize',},
            {text: 'text-transform:capitalize', correct:true,},
            {text: `You can't do that with CSS`,},
            {text: 'transform:capitalize',},
        ]
    },
    {
        question: `How do you select an element with id 'demo'?`,
        answer: [
            {text: '*demo' ,},
            {text: '#demo', correct:true,},
            {text: 'demo',},
            {text: '.demo',},
        ]
    },
    {
        question: `How do you select elements with class name 'test'?`,
        answer: [
            {text: 'test',},
            {text: '.test', correct:true,},
            {text: '#test',},
            {text: '*test',},
        ]
    },
]