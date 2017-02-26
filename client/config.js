import * as d3 from 'd3';

export const QuestionTypes = {
    RADIO: 'radio',
    CHECKBOX: 'checkbox',
};

export const Questions = [
    {
        id: 'p-1 g-1 q-1',
        groupID: 0,
        pageID: 0,
        title: 'step 1 title',
        type: QuestionTypes.CHECKBOX,
        prompt: 's-1 g-1 q-1 prompt',
        options: [
            'aaqib1',
            'aaqib2',
            'aaqib3',
            'other',
            'we do not track',
        ],
    },
    {
        id: 'p-1 g-1 q-2',
        groupID: 0,
        pageID: 0,
        title: 'step 1 title',
        type: QuestionTypes.CHECKBOX,
        prompt: 's-1 g-1 q-2 prompt',
        options: [
            'aaqib1',
            'aaqib2',
            'aaqib3',
            'other',
            'we do not track',
        ],
    },
    {
        id: 's-1 g-2 q-1',
        groupID: 1,
        pageID: 0,
        title: 'step 2 title',
        type: QuestionTypes.RADIO,
        prompt: 's-1 g-2 q-1 prompt',
        options: [
            'aaqib1',
            'aaqib2',
            'aaqib3',
            'other',
            'we do not track',
        ],
    },
    {
        id: 'p-2 g-1 q-1',
        groupID: 0,
        pageID: 1,
        title: 'step 3 title',
        type: QuestionTypes.RADIO,
        prompt: 's-1 g-2 q-1 prompt',
        options: [
            'ish1',
            'ish2',
            'ish3',
            'other',
            'we do not track',
        ],
    },
    {
        id: 'p-2 g-2 q-1',
        groupID: 1,
        pageID: 1,
        title: 'step 4 title',
        type: QuestionTypes.CHECKBOX,
        prompt: 'p-2 g-2 q-1 prompt',
        options: [
            'ish1',
            'ish2',
            'ish3',
            'other',
            'we do not track',
        ],
    },
];

export const Steps = d3.nest()
    .key(question => question.pageID)
    .key(question => question.groupID)
    .entries(Questions);
