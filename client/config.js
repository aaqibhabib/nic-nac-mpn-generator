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
    'Yes; only with permission',
    'No',
];

const YES_NO_OPTIONS = [
    'Yes',
    'No',
];

const ENCRYPTION_COMMON_OPTIONS = [
    'Yes, by default',
    'Yes, when certain steps are taken (click to learn how)',
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
        prompt: 'Is the company a HIPAA covered entity?',
        options: [
            ...YES_NO_OPTIONS,
        ],
    },
    {
        id: 'p-2 g-1 q-2',
        groupID: 'HIPAA COVERED ENTITY',
        pageID: 1,
        title: 'HIPAA',
        type: QuestionTypes.RADIO,
        prompt: 'If yes, select one of the following statements to be inserted into the privacy notice:',
        options: [
            'Please note that the health data we collect as part of this [insert name of technology] are not protected by HIPAA and our company\'s HIPAA Notice of Privacy Practices does not apply',
            'Some of the health data we collect as part of this [insert name of technology product] also are protected by HIPAA. Read our HIPAA Notice of Privacy Practices [embed link or popup] for more information.',
            'Not a HIPAA covered entity',
        ],
    },
    {
        id: 'p-3 g-1 q-1',
        groupID: 'Use: How data is used internally', 
        // 'Use: How we use your data internally',
        pageID: 2,
        title: 'Use',
        type: QuestionTypes.CHECKBOX,
        prompt: 'The company collects and uses identifiable data:',
        noticeText: 'We collect and use your identifiable data:',
        options: [
            ...USE_SHARE_COMMON_OPTIONS,
        ],
    },
    {
        id: 'p-3 g-2 q-1',
        groupID: 'Share: How data is shared externally with other companies or entities',
        // 'Share: How we share your data externally with other companies or entities',
        pageID: 2,
        title: 'Share',
        type: QuestionTypes.CHECKBOX,
        prompt: 'The company shares identifiable data:',
        noticeText: 'We share your identifiable data:',
        options: [
            ...USE_SHARE_COMMON_OPTIONS,
            'We DO NOT share identifiable data',
            // 'We DO NOT share your identifiable data',
        ],
    },
    {
        id: 'p-3 g-2 q-2',
        groupID: 'Share: How data is shared externally with other companies or entities',
        pageID: 2,
        title: 'Share',
        type: QuestionTypes.CHECKBOX,
        prompt: 'The company shares data AFTER removing identifiers:',
        noticeText: 'We share your data AFTER removing identifiers (note that remaining data may not be anonymous):',
        options: [
            ...USE_SHARE_COMMON_OPTIONS,
            'We DO NOT share data after removing identifiers',
            // 'We DO NOT share your data after removing identifiers',
        ],
    },
    {
        id: 'p-3 g-3 q-1',
        groupID: 'Sell: How data is sold',
        pageID: 2,
        title: 'Sell',
        type: QuestionTypes.RADIO,
        prompt: 'Does the company sell identifiable data to data brokers, marketing, advertising networks, or analytics firms?',
        noticeText: 'We sell your identifiable data to data brokers, marketing, advertising networks, or analytics firms.',
        options: [
            ...SELL_COMMON_OPTIONS,
        ],
    },
    {
        id: 'p-3 g-3 q-2',
        groupID: 'Sell: How data is sold',
        pageID: 2,
        title: 'Sell',
        type: QuestionTypes.RADIO,
        prompt: 'Does the company sell data AFTER removing identifiers to data brokers, marketing, advertising networks, or analytics firms?',
        noticeText: 'We sell your data AFTER removing identifiers (note that remaining data may not be anonymous) to data brokers, marketing, advertising networks, or analytics firms.',
        options: [
            ...SELL_COMMON_OPTIONS,
        ],
    },
    {
        id: 'p-4 g-1 q-1',
        groupID: 'Store: How data is stored',
        pageID: 3,
        title: 'Store',
        type: QuestionTypes.RADIO,
        prompt: 'Is data stored on the device?',
        noticeText: 'Is your data stored on the device?',
        options: [
            ...YES_NO_OPTIONS,
        ],
    },
    {
        id: 'p-4 g-1 q-2',
        groupID: 'Store: How data is stored',
        pageID: 3,
        title: 'Store',
        type: QuestionTypes.RADIO,
        prompt: 'Is data stored outside the device at the company or through a third party? ',
        noticeText: 'Is your data stored outside the device at our company or through a third party? ',
        options: [
            ...YES_NO_OPTIONS,
        ],
    },
    {
        id: 'p-4 g-2 q-1',
        groupID: 'Encryption: How data is encrypted',
        pageID: 3,
        title: 'Encryption',
        type: QuestionTypes.RADIO,
        prompt: 'Does the app or technology use encryption to encrypt data in the device or app?',
        noticeText: 'Does the app or technology use encryption to encrypt your data in the device or app?',
        options: [
            ...ENCRYPTION_COMMON_OPTIONS,
        ],
    },
    {
        id: 'p-4 g-2 q-2',
        groupID: 'Encryption: How data is encrypted',
        pageID: 3,
        title: 'Encryption',
        type: QuestionTypes.RADIO,
        prompt: 'Does the app or technology encrypt data when stored on company servers or with an outside cloud computing services provider? ',
        noticeText: 'Does the app or technology encrypt your data when stored on our company servers or with an outside cloud computing services provider? ',
        options: [
            ...ENCRYPTION_COMMON_OPTIONS,
        ],
    },
    {
        id: 'p-4 g-2 q-3',
        groupID: 'Encryption: How data is encrypted',
        pageID: 3,
        title: 'Encryption',
        type: QuestionTypes.RADIO,
        prompt: 'Does the app or technology encrypt data while it is transmitted?',
        noticeText: 'Does the app or technology encrypt your data while it is transmitted?',
        options: [
            ...ENCRYPTION_COMMON_OPTIONS,
        ],
    },
    {
        id: 'p-4 g-3 q-1',
        groupID: 'Privacy: How this technology accesses other data ',
        pageID: 3,
        title: 'Privacy',
        type: QuestionTypes.RADIO,
        prompt: 'Will this technology or app request access to other device data or applications, such as the phone’s camera, photos, or contacts? ',
        noticeText: 'Will this technology or app request access to other device data or applications, such as your phone’s camera, photos, or contacts? ',
        options: [
            'Yes, only with permission',
            'No',
        ],
    },
    {
        id: 'p-4 g-3 q-2',
        groupID: 'Privacy: How this technology accesses other data ',
        pageID: 3,
        title: 'Privacy',
        type: QuestionTypes.CHECKBOX,
        prompt: 'If yes, what other device data or applications can the technology or app access?',
        noticeText: 'It connects to...',
        options: [
            'Camera',
            'Photos',
            'Contacts',
            'Location services',
            'Microphone',
            'Health monitoring',
            'Other:',
        ],
    },
    {
        id: 'p-4 g-3 q-3',
        groupID: 'Privacy: How this technology accesses other data ',
        pageID: 3,
        title: 'Encryption',
        type: QuestionTypes.RADIO,
        prompt: 'Does this technology or app allow the user to share the collected data with social media accounts, like Facebook? ',
        noticeText: 'Does this technology or app allow you to share the collected data with your social media accounts, like Facebook? ',
        options: [
            ...SELL_COMMON_OPTIONS,
        ],
    },
    {
        id: 'p-5 g-1 q-1',
        groupID: 'User Options: What a user can do with the data that is collected',
        pageID: 4,
        title: 'User Options',
        type: QuestionTypes.RADIO,
        prompt: 'Can a user access, edit, share, or delete the data the company has about them?',
        noticeText: 'Can you access, edit, share, or delete the data we have about you?',
        options: [
            ...YES_NO_OPTIONS,
        ],
    },
    {
        id: 'p-5 g-1 q-2',
        groupID: 'User Options: What a user can do with the data that is collected',
        pageID: 4,
        title: 'User Options',
        type: QuestionTypes.CHECKBOX,
        prompt: 'If yes, which of the following can a user do with their data?',
        noticeText: 'You can...',
        options: [
            'Access data',
            'Edit data',
            'Share data',
            'Delete data',
        ],
    },
    {
        id: 'p-5 g-2 q-1',
        groupID: 'Deactivation: What happens to data when an account is deactivated',
        pageID: 4,
        title: 'Deactivation',
        type: QuestionTypes.RADIO,
        prompt: 'When an account is deactivated/terminated by the user or the company, the data is…',
        noticeText: 'When your account is deactivated/terminated by you or the company, your data are…',
        options: [
            'Deleted immediately',
            'Deleted after x years',
            'Permanently retained and used',
            'Retained and used until deletion is requested',
        ],
    },
    {
        id: 'p-6 g-1 q-1',
        groupID: 'Policy Changes: How the company will notify users if the privacy policy changes',
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
        groupID: 'Breach: How the company notify users and protect data in case of an improper disclosure',
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
