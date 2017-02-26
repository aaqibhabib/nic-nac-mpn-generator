export const QuestionTypes = {
    RADIO: 'radio',
    CHECKBOX: 'checkbox',
};

export const Steps = [
    {
        id: 'step-1',
        title: 'step 1 title',
        questions: [
            {
                id: 'q-1',
                prompt: 's-1 q-1 prompt',
                type: QuestionTypes.CHECKBOX,
                options: [
                    'aaqib1',
                    'aaqib2',
                    'aaqib3',
                    'other',
                    'we do not track',
                ]
            },
            {
                id: 'q-2',
                prompt: 's-1 q-2 prompt',
                type: QuestionTypes.RADIO,
                options: [
                    'aaqib1',
                    'aaqib2',
                    'aaqib3',
                    'other',
                    'we do not track',
                ]
            },
        ]
        
    },
    {
        id: 'step-2',
        title: 'step 2 title',
        questions: [
            {
                id: 'q-1',
                prompt: 's-2 q-1 prompt',
                type: QuestionTypes.CHECKBOX,
                options: [
                    'ish1',
                    'ish2',
                    'ish3',
                    'other',
                    'we do not track',
                ]
            },
            {
                id: 'q-2',
                prompt: 's-2 q-2 prompt',
                type: QuestionTypes.RADIO,
                options: [
                    'ish1',
                    'ish2',
                    'ish3',
                    'other',
                    'we do not track',
                ]
            },
        ]
        
    },
]