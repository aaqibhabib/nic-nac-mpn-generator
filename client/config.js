import * as d3 from 'd3';
import {groove} from 'material-ui/styles/';
import {grey400} from 'material-ui/styles/colors';

export const QuestionTypes = {
    RADIO: 'radio',
    CHECKBOX: 'checkbox',
    TEXT: 'text',
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
    'Yes, when certain steps are taken',
    'No',
    'N/A',
];

const textFieldStyles = {
  multiLineStyle: {
    border: groove, 
    borderColor: grey400,
  },
};

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
        groupID: 'HIPAA Covered Entity',
        pageID: 1,
        title: 'HIPAA',
        type: QuestionTypes.RADIO,
        prompt: 'Select one of the following statements to be inserted into the privacy notice, based on whether or not the company is a HIPAA covered entity:',
        noticeText: '\r',
        options: [
            'Please note that the health data we collect as part of <%= techName %> are not protected by HIPAA and our company\'s HIPAA Notice of Privacy Practices does not apply.',
            'Some of the health data we collect as part of <%= techName %> also are protected by HIPAA.',
            'The company is not a HIPAA covered entity',
        ],
    },
    {
        id: 'p-2 g-1 q-2',		
        groupID: 'HIPAA Covered Entity',		
        pageID: 1,		
        title: 'HIPAA',		
        type: QuestionTypes.TEXT,		
        prompt: 'What is the name of the technology or product this notice is for?',		
        hintText: 'name of app or product',		
    },
    {
        id: 'p-2 g-1 q-3',
        groupID: 'HIPAA Covered Entity',
        pageID: 1,
        title: 'HIPAA',
        type: QuestionTypes.TEXT,
        prompt: '(optional) If some of the health data collected is protected by HIPAA, what is the link to the company\'s HIPAA Notice of Privacy Practices?',
        noticeText: 'The link to the company\'s HIPAA Notice of Privacy Practices is:',
        hintText: 'https://www.company.com/hipaa',
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
        helpText: 'Identifiable data means: data, such as your name, phone number, email, address, health services, information on your physical or mental health conditions, or your social security number, that can be used on its own or with other information to identify you.',
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
        helpText: 'Identifiable data means: data, such as your name, phone number, email, address, health services, information on your physical or mental health conditions, or your social security number, that can be used on its own or with other information to identify you.',
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
        id: 'p-3 g-2 q-3',
        groupID: 'Share: How data is shared externally with other companies or entities',
        pageID: 2,
        title: 'Share',
        type: QuestionTypes.TEXT,
        floatingLabelText: '(optional) If selected above and not obvious, what is the primary service of the app or technology?',
        noticeText: 'The primary service of this app or technology is:',
        hintText: 'The primary service of this app or technology is:'
    },
    {
        id: 'p-3 g-3 q-1',
        groupID: 'Sell: How data is sold',
        pageID: 2,
        title: 'Sell',
        type: QuestionTypes.RADIO,
        prompt: 'Does the company sell identifiable data to data brokers, marketing, advertising networks, or analytics firms?',
        noticeText: 'We sell your identifiable data to data brokers, marketing, advertising networks, or analytics firms.',
        helpText: 'Identifiable data means: data, such as your name, phone number, email, address, health services, information on your physical or mental health conditions, or your social security number, that can be used on its own or with other information to identify you.',
        options: [
            ...SELL_COMMON_OPTIONS,
        ],
    },
    {
        id: 'p-3 g-3 q-2',
        groupID: 'Sell: How data is sold',
        pageID: 2,
        title: 'Sell',
        type: QuestionTypes.TEXT,
        floatingLabelText: '(optional) If permission is required, how can users adjust this permission?',
        noticeText: 'You can adjust this permission by:',
        hintText: 'You can adjust this permission by:',
    },
    {
        id: 'p-3 g-3 q-3',
        groupID: 'Sell: How data is sold',
        pageID: 2,
        title: 'Sell',
        type: QuestionTypes.RADIO,
        prompt: 'Does the company sell data AFTER removing identifiers to data brokers, marketing, advertising networks, or analytics firms?',
        noticeText: 'We sell your data AFTER removing identifiers (note that remaining data may not be anonymous) to data brokers, marketing, advertising networks, or analytics firms.',
        helpText: 'Data broker means: companies that collect personal information about consumers from a variety of public and non-public sources and resell the information to other companies.',
        options: [
            ...SELL_COMMON_OPTIONS,
        ],
    },
    {
        id: 'p-3 g-3 q-4',
        groupID: 'Sell: How data is sold',
        pageID: 2,
        title: 'Sell',
        type: QuestionTypes.TEXT,
        floatingLabelText: '(optional) If permission is required, how can users adjust this permission?',
        noticeText: 'You can adjust this permission by:',
        hintText: 'You can adjust this permission by:',
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
        prompt: 'Does the app or technology encrypt data in the device or app?',
        noticeText: 'Does the app or technology encrypt your data in the device or app?',
        helpText: 'Encryption means: a method of converting an original message of regular text into encoded text in such a way that only authorized parties can read it. Alternatively, a more consumer friendly definition may be substituted as a result of the Challenge, including based on consumer testing feedback',
        options: [
            ...ENCRYPTION_COMMON_OPTIONS,
        ],
    },
    {
        id: 'p-4 g-2 q-2',
        groupID: 'Encryption: How data is encrypted',
        pageID: 3,
        title: 'Encryption',
        type: QuestionTypes.TEXT,
        floatingLabelText: '(optional) If certain steps are required, how can users enable encryption in the device or app?',
        noticeText: 'To enable encryption in the device or app... ',
        hintText: 'To enable encryption in the device or app... ',
    },
    {
        id: 'p-4 g-2 q-3',
        groupID: 'Encryption: How data is encrypted',
        pageID: 3,
        title: 'Encryption',
        type: QuestionTypes.RADIO,
        prompt: 'Does the app or technology encrypt data when stored on company servers or with an outside cloud computing services provider? ',
        noticeText: 'Does the app or technology encrypt your data when stored on our company servers or with an outside cloud computing services provider? ',
        helpText: ' Cloud computing means: a kind of Internet-based computing that provides shared processing resources and data to computers and other devices on demand',
        options: [
            ...ENCRYPTION_COMMON_OPTIONS,
        ],
    },
    {
        id: 'p-4 g-2 q-4',
        groupID: 'Encryption: How data is encrypted',
        pageID: 3,
        title: 'Encryption',
        type: QuestionTypes.TEXT,
        floatingLabelText: '(optional) If certain steps are required, how can users enable encryption of data stored off device?',
        noticeText: 'To enable encryption of data stored on company servers or with an outside cloud computing services provider... ',
        hintText: 'To enable encryption of data stored on company servers or with outside services... ',
    },
    {
        id: 'p-4 g-2 q-5',
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
        id: 'p-4 g-2 q-6',
        groupID: 'Encryption: How data is encrypted',
        pageID: 3,
        title: 'Encryption',
        type: QuestionTypes.TEXT,
        floatingLabelText: '(optional) If certain steps are required, how can users enable encryption of data while it is transmitted?',
        noticeText: 'To enable encryption of data while it is transmitted...',
        hintText: 'To enable encryption of data while it is transmitted...',
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
        prompt: '(optional) If other device data is accessed, what other data or applications can the technology or app access?',
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
        id: 'p-4 g-3 q-4',
        groupID: 'Privacy: How this technology accesses other data ',
        pageID: 3,
        title: 'Privacy',
        type: QuestionTypes.TEXT,
        floatingLabelText: '(optional) If other device data is accessed, how can users check their settings?',
        noticeText: 'You can check your settings, including permissions set as a default by: ',
        hintText: 'You can check your settings, including permissions set as a default by: ',
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
        id: 'p-4 g-3 q-5',
        groupID: 'Privacy: How this technology accesses other data ',
        pageID: 3,
        title: 'Encryption',
        type: QuestionTypes.TEXT,
        floatingLabelText: '(optional) If data can be shared with social media, how can users check their social media sharing settings?',
        noticeText: 'You can check your social media sharing settings by: ',
        hintText: 'You can check your social media sharing settings by: ',
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
        prompt: '(optional) If yes, which of the following can a user do with their data?',
        noticeText: 'You can...',
        options: [
            'Access data',
            'Edit data',
            'Share data',
            'Delete data',
        ],
    },
    {
        id: 'p-5 g-1 q-3',
        groupID: 'User Options: What a user can do with the data that is collected',
        pageID: 4,
        title: 'User Options',
        type: QuestionTypes.TEXT,
        floatingLabelText: '(optional) How can a user access, edit, share, or delete their data?',
        noticeText: 'Here\'s how:',
        hintText: 'Here\'s how:',
    },
    {
        id: 'p-5 g-2 q-1',
        groupID: 'Deactivation: What happens to data when an account is deactivated',
        pageID: 4,
        title: 'Deactivation',
        type: QuestionTypes.RADIO,
        prompt: 'When an account is deactivated/terminated by the user or the company, the data is…',
        noticeText: 'When your account is deactivated/terminated by you or the company, your data is…',
        helpText: 'Deactivation means: an individual takes action or a company ceases operation or deactivates an individual’s account due to inactivity.',
        options: [
            'Deleted immediately',
            'Deleted after x years',
            'Permanently retained and used',
            'Retained and used until deletion is requested',
        ],
    },
    {
        id: 'p-5 g-2 q-2',
        groupID: 'Deactivation: What happens to data when an account is deactivated',
        pageID: 4,
        title: 'Deactivation',
        type: QuestionTypes.TEXT,
        floatingLabelText: '(optional) If not specified above, how long after deactivation will the data be deleted?',
        noticeText: 'Data will be deleted after',
        hintText: 'Data will be deleted after:',
    },
    {
        id: 'p-6 g-1 q-1',
        groupID: 'Policy Changes: How the company will notify users if the privacy policy changes',
        pageID: 5,
        title: 'Policy Changes',
        type: QuestionTypes.TEXT,
        prompt: 'Describe how/if the company will notify consumers of privacy policy changes (e.g. merger or acquisition).',
        noticeText: '<%= entityName %> will notify consumers of privacy policy changes by...',
        // hintText: "The company will notify consumers of privacy policy changes by...",
        multiLine: true,
        rows: 5,
        textareaStyle: textFieldStyles.multiLineStyle
    },
    {
        id: 'p-6 g-1 q-2',
        groupID: 'Policy Changes: How the company will notify users if the privacy policy changes',
        pageID: 5,
        title: 'Policy Changes',
        type: QuestionTypes.TEXT,
        floatingLabelText: 'Link to policy change section in privacy policy:',
        noticeText: 'Section of privacy policy:',  
        hintText: 'https://www.company.com/privacy#changes', 
    },
    {
        id: 'p-6 g-2 q-1',
        groupID: 'Breach: How the company will notify users and protect data in case of an improper disclosure',
        pageID: 5,
        title: 'Breach',
        type: QuestionTypes.TEXT,
        prompt: 'Describe how the company will notify users and protect consumers’ data in the case of a breach.',
        noticeText: '<%= entityName %> complies with all applicable laws regarding breaches. In case of a breach...',
        helpText: 'Breach means: an unauthorized disclosure',
        multiLine: true,
        rows: 5,
        textareaStyle: textFieldStyles.multiLineStyle
    },
    {
        id: 'p-6 g-2 q-2',
        groupID: 'Breach: How the company will notify users and protect data in case of an improper disclosure',
        pageID: 5,
        title: 'Breach',
        type: QuestionTypes.TEXT,
        floatingLabelText: 'Link to breach notification section of privacy policy:',
        noticeText: 'Section of privacy policy:', 
        hintText: 'https://www.company.com/privacy#breach',   
    },
];

export const Steps = d3.nest()
    .key(question => question.pageID)
    .key(question => question.groupID)
    .entries(Questions);


export const HelpText = {
    'To develop and improve new and current products and services (e.g., analytics)': 'Analytics means: the process of examining data to draw conclusions from that information.',
    'We DO NOT share identifiable data': 'Identifiable data means: data, such as your name, phone number, email, address, health services, information on your physical or mental health conditions, or your social security number, that can be used on its own or with other information to identify you'
};

export const HelpfulTips = [
    {
        title: 'Instructions',
        text: 'Complete each question based on your company’s current privacy policy. Every question is required to be filed out, unless otherwise specified. There are tips on each page to better explain components that may be confusing. Additionally, it\'d be helpful to have assistance from your company\'s legal team to answer some questions.',
    },
    {
        title: 'Helpful Tip',
        text: 'This section focuses on whether or not your company is a covered entity under the HIPAA Privacy Rule. \"We\" and \"our\" refer to your company as it will appear on the notice to the user.',
    },
    {
        title: 'Helpful Tip',
        text: 'This section focuses on the company\'s policies toward use, sharing, and privacy of the data. \"We\" and \"our\" refer to your company as it will appear on the notice to the user. \"You\" refers to the consumer of the policy.',

    },
    {
        title: 'Helpful Tip',
        text: '\"We\" and \"our\" refer to your company as it will appear on the notice to the user. \"You\" refers to the consumer of the policy.',
    },
    {
        title: 'Helpful Tip',
        text: 'Make sure to be clear about where users should go to check privacy settings.\"We\" and \"our\" refer to your company as it will appear on the notice to the user. \"You\" refers to the consumer of the policy.',
    },
    {
        title: 'Instructions',
        text: 'Please complete this section with as much detail as possible to keep users informed about your company\'s privacy policy. If you do not have these sections in your policy they should be added in, as they are required to complete a Model Privacy Notice.',
    },
    {
        title: 'Helpful Tip',
        text: 'Review your answers to make sure they are accurate. You can change your answers by clicking the \"Edit\" icon in each section.',
    },
];
