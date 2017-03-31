import * as d3 from 'd3';

export const QuestionTypes = {
    RADIO: 'radio',
    CHECKBOX: 'checkbox',
};

const USE_SHARE_COMMON_OPTIONS = [
    'To provide the primary service of the app or technology',
    'To develop marketing materials for our products',
    'To conduct scientific research',
    'For company operations (e.g., quality control or fraud detection)',
    'To develop and improve new and current products and services (e.g., analytics)',
    'Other:', 
];

const SELL_COMMON_OPTIONS = [
    'Yes',
    'Yes; only with your permission',
    'No',
];

const YES_NO_OPTIONS = [
    'Yes',
    'No',
];

const ENCRYPTION_COMMON_OPTIONS = [
    'Yes, by default',
    'Yes, when you take certain steps (click to learn how)',
    'No',
    'N/A',
];

export const Questions = [
    {
        id: 'p-1 g-1 q-1',
        groupID: 'Contact Information',
        pageID: 0,
        title: 'Contact Information',
        type: QuestionTypes.RADIO,
        prompt: 'Legal Entity Name',
        options: [
            'other',
            'we do not track',
        ],
    },
    {
        id: 'p-1 g-1 q-2',
        groupID: 'Contact Information',
        pageID: 0,
        title: 'Contact Information',
        type: QuestionTypes.CHECKBOX,
        prompt: 'Link to Full Privacy Policy',
        options: [
            'other',
            'we do not track',
        ],
    },
    {
        id: 'p-1 g-1 q-3',
        groupID: 'Contact Information',
        pageID: 0,
        title: 'Contact Information',
        type: QuestionTypes.CHECKBOX,
        prompt: 'Link to Online Comment/Contact Form',
        options: [
            'other',
            'we do not track',
        ],
    },
    {
        id: 'p-1 g-1 q-4',
        groupID: 'Contact Information',
        pageID: 0,
        title: 'Contact Information',
        type: QuestionTypes.CHECKBOX,
        prompt: 'Email Address',
        options: [
            'other',
            'we do not track',
        ],
    },
    {
        id: 'p-1 g-1 q-5',
        groupID: 'Contact Information',
        pageID: 0,
        title: 'Contact Information',
        type: QuestionTypes.CHECKBOX,
        prompt: 'Phone Number',
        options: [
            'other',
            'we do not track',
        ],
    },
    {
        id: 'p-1 g-1 q-6',
        groupID: 'Contact Information',
        pageID: 0,
        title: 'Contact Information',
        type: QuestionTypes.CHECKBOX,
        prompt: 'Address (minimum country)',
        options: [
            'other',
            'we do not track',
        ],
    },
    {
        id: 'p-2 g-1 q-1',
        groupID: 'HIPAA COVERED ENTITY',
        pageID: 1,
        title: 'HIPAA',
        type: QuestionTypes.RADIO,
        prompt: 'Select one of the following statements to be inserted into the privacy notice:',
        options: [
            'Please note that the health data we collect as part of this [insert name of technology] are not protected by HIPAA and our company\'s HIPAA Notice of Privacy Practices does not apply',
            'Some of the health data we collect as part of this [insert name of technology product] also are protected by HIPAA. Read our HIPAA Notice of Privacy Practices [embed link or popup] for more information.',
            'None',
        ],
    },
    {
        id: 'p-3 g-1 q-1',
        groupID: 'Use: How we use your data internally',
        pageID: 2,
        title: 'Use',
        type: QuestionTypes.CHECKBOX,
        prompt: 'We collect and use your identifiable data:',
        options: [
            ...USE_SHARE_COMMON_OPTIONS,
        ],
    },
    {
        id: 'p-3 g-2 q-1',
        groupID: 'Share: How we share your data externally with other companies or entities',
        pageID: 2,
        title: 'Share',
        type: QuestionTypes.CHECKBOX,
        prompt: 'We share your identifiable data:',
        options: [
            ...USE_SHARE_COMMON_OPTIONS,
            'We DO NOT share your identifiable data',
        ],
    },
    {
        id: 'p-3 g-2 q-2',
        groupID: 'Share: How we share your data externally with other companies or entities',
        pageID: 2,
        title: 'Share',
        type: QuestionTypes.CHECKBOX,
        prompt: 'We share your data AFTER removing identifiers (note that remaining data may not be anonymous):',
        options: [
            ...USE_SHARE_COMMON_OPTIONS,
            'We DO NOT share your data after removing identifiers',
        ],
    },
    {
        id: 'p-3 g-3 q-1',
        groupID: 'Sell: Who we sell your data to',
        pageID: 2,
        title: 'Sell',
        type: QuestionTypes.RADIO,
        prompt: 'We sell your identifiable data to data brokers, marketing, advertising networks, or analytics firms.',
        options: [
            ...SELL_COMMON_OPTIONS,
        ],
    },
    {
        id: 'p-3 g-3 q-2',
        groupID: 'Sell: Who we sell your data to',
        pageID: 2,
        title: 'Sell',
        type: QuestionTypes.RADIO,
        prompt: 'We sell your data AFTER removing identifiers (note that remaining data may not be anonymous) to data brokers, marketing, advertising networks, or analytics firms.',
        options: [
            ...SELL_COMMON_OPTIONS,
        ],
    },
    {
        id: 'p-4 g-1 q-1',
        groupID: 'Store: How we store your data',
        pageID: 3,
        title: 'Store',
        type: QuestionTypes.RADIO,
        prompt: 'Are your data stored on the device?',
        options: [
            ...YES_NO_OPTIONS,
        ],
    },
    {
        id: 'p-4 g-1 q-2',
        groupID: 'Store: How we store your data',
        pageID: 3,
        title: 'Store',
        type: QuestionTypes.RADIO,
        prompt: 'Are your data stored outside the device at our company or through a third party? ',
        options: [
            ...YES_NO_OPTIONS,
        ],
    },
    {
        id: 'p-4 g-2 q-1',
        groupID: 'Encryption: How we encrypt your data',
        pageID: 3,
        title: 'Encryption',
        type: QuestionTypes.RADIO,
        prompt: 'Does the app or technology use encryption to encrypt your data in the device or app?',
        options: [
            ...ENCRYPTION_COMMON_OPTIONS,
        ],
    },
    {
        id: 'p-4 g-2 q-2',
        groupID: 'Encryption: How we encrypt your data',
        pageID: 3,
        title: 'Encryption',
        type: QuestionTypes.RADIO,
        prompt: 'Does the app or technology use encryption to encrypt your data when stored on our company servers or with an outside cloud computing services provider? ',
        options: [
            ...ENCRYPTION_COMMON_OPTIONS,
        ],
    },
    {
        id: 'p-4 g-2 q-3',
        groupID: 'Encryption: How we encrypt your data',
        pageID: 3,
        title: 'Encryption',
        type: QuestionTypes.RADIO,
        prompt: 'Does the app or technology use encryption to encrypt your data while it is transmitted?',
        options: [
            ...ENCRYPTION_COMMON_OPTIONS,
        ],
    },
    {
        id: 'p-4 g-3 q-1',
        groupID: 'Privacy: How this technology accesses other data ',
        pageID: 3,
        title: 'Encryption',
        type: QuestionTypes.RADIO,
        prompt: 'Will this technology or app request access to other device data or applications, such as your phone’s camera, photos, or contacts? ',
        options: [
            ...YES_NO_OPTIONS,
        ],
    },
    {
        id: 'p-4 g-3 q-2',
        groupID: 'Privacy: How this technology accesses other data ',
        pageID: 3,
        title: 'Encryption',
        type: QuestionTypes.RADIO,
        prompt: 'Does this technology or app allow you to share the collected data with your social media accounts, like Facebook? ',
        options: [
            ...SELL_COMMON_OPTIONS,
        ],
    },
    {
        id: 'p-5 g-1 q-1',
        groupID: 'User Options: What you can do with the data that we collect',
        pageID: 4,
        title: 'User Options',
        type: QuestionTypes.RADIO,
        prompt: 'Can you access, edit, share, or delete the data we have about you?',
        options: [
            ...YES_NO_OPTIONS,
        ],
    },
    {
        id: 'p-5 g-2 q-1',
        groupID: 'Deactivation: What happens to your data when your account is deactivated',
        pageID: 4,
        title: 'Deactivation',
        type: QuestionTypes.RADIO,
        prompt: 'When your account is deactivated/terminated by you or the company, your data are…',
        options: [
            'Deleted immediately',
            'Deleted after x years',
            'Permanently retained and used',
            'Retained and used until you request deletion',
        ],
    },
    {
        id: 'p-6 g-1 q-1',
        groupID: 'Policy Changes: How we will notify you if our privacy policy changes',
        pageID: 5,
        title: 'Policy Changes',
        type: QuestionTypes.RADIO,
        prompt: 'Describe how/if the company will notify consumers of privacy policy changes (e.g. merger or acquisition) and provide link to section in privacy policy.',
        options: [
            'Deleted immediately',
            'Deleted after x years',
            'Permanently retained and used',
            'Retained and used until you request deletion',
        ],
    },
    {
        id: 'p-6 g-2 q-1',
        groupID: 'Breach: How we will notify you and protect your data in case of an improper disclosure',
        pageID: 5,
        title: 'Breach',
        type: QuestionTypes.RADIO,
        prompt: '[Company name] complies with all applicable laws regarding breaches. Describe how the company will protect consumers’ data in the case of a breach and provide link to section in privacy policy.',
        options: [
            'Deleted immediately',
            'Deleted after x years',
            'Permanently retained and used',
            'Retained and used until you request deletion',
        ],
    },
];

export const Steps = d3.nest()
    .key(question => question.pageID)
    .key(question => question.groupID)
    .entries(Questions);
