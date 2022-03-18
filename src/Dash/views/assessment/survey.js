export const surveyCss = {
    "navigationButton": "btn btn-green",
    "navigation": {
      "complete": "btn sv_complete_btn btn-primary float-right",
      "prev": "btn sv_prev_btn btn-outline-secondary",
      "next": "btn sv_next_btn btn-primary float-right",
      "start": "btn sv_start_btn btn-primary",
      "preview": "btn sv_preview_btn btn-primary float-right",
      "edit": "btn sv_edit_btn btn-primary "
    }
  }

export const SurveyJSON={
 pages: [
  {
   name: "Start Page",
   elements: [
    {
     type: "panel",
     name: "panelQ1",
     title: "Start page"
    }
   ],
   questionTitleLocation: "top",
   title: "Start The Assessment",
   description: "Read through the questions and answer all the available questions.",
   navigationButtonsVisibility: "show",
  //  questionsOrder: "initial"
  },
  {
   name: "Quest1",
   sendEmailPopUp:"Send email"
,
   elements: [
    {
     type: "panel",
     name: "panelQ1",
     elements: [
      {
       type: "radiogroup",
       name: "qmain1",
       title: "Has your organisation appointed someone to be in charge of cybersecurity?",
       titleLocation: "top",
       hideNumber: true,
       choices: [
        {
         value: "Yes",
         text: "Yes"
        },
        {
         value: "No",
         text: "No"
        }
       ]
      },
      {
       type: "multipletext",
       name: "followupQ1a",
       visible: false,
       visibleIf: "{qmain1} = 'Yes'",
       title: "What is this person's name, title, and contact information?",
       hideNumber: true,
       items: [
        {
         name: "cybName",
         title: "Name"
        },
        {
         name: "jobTitle",
         title: "Title"
        },
        {
         name: "contact",
         title: "Contact"
        }
       ]
      },
      {
       type: "radiogroup",
       name: "followupQ1b",
       visible: false,
       visibleIf: "{qmain1} = 'Yes'",
       title: "Does this person have the authority to shutdown all IT systems in the event of a cyber attack?\t",
       titleLocation: "top",
       hideNumber: true,
       choices: [
        {
         value: "Yes",
         text: "Yes"
        },
        {
         value: "No",
         text: "No"
        }
       ]
      },
      {
       type: "text",
       name: "followupQ1c",
       visible: false,
       visibleIf: "{followupQ1b} = 'No'",
       title: "If not, who has the authority to shutdown all IT systems in the event of a cyberattack?",
       hideNumber: true
      },
      {
       type: "multipletext",
       name: "followupQ1d",
       visible: false,
       visibleIf: "{followupQ1b} = 'No'",
       title: "What is this person's name, title, and contact information?",
       hideNumber: true,
       items: [
        {
         name: "cybAuthName",
         title: "Name"
        },
        {
         name: "authJobTitle",
         title: "Title"
        },
        {
         name: "authContact",
         title: "Contact"
        }
       ]
      }
     ],
     title: "Question 1"
    }
   ],
   title: "Responsibilities and Contributions"
  },
  {
   name: "Quest2",
   sendEmailPopUp:"Send email",
   elements: [
    {
     type: "panel",
     name: "panelQ2",
     elements: [
      {
       type: "radiogroup",
       name: "qmain2",
       title: "Has your organisation developed and communicated a communication plan for a cyberattack?",
       hideNumber: true,
       choices: [
        {
         value: "Yes",
         text: "Yes"
        },
        {
         value: "No",
         text: "No"
        }
       ]
      },
      {
       type: "radiogroup",
       name: "followupQ2a",
       visible: false,
       visibleIf: "{qmain2} = 'Yes'",
       title: "Does your communication plan outline how employees should report suspicious activity?\t",
       hideNumber: true,
       choices: [
        {
         value: "Yes",
         text: "Yes"
        },
        {
         value: "No",
         text: "No"
        }
       ]
      },
      {
       type: "radiogroup",
       name: "followupQ2b",
       visible: false,
       visibleIf: "{qmain2} = 'Yes'",
       title: "Does your communication plan outline how information and updates regarding an attack will be shared internally and externally?\t",
       hideNumber: true,
       choices: [
        {
         value: "Yes",
         text: "Yes"
        },
        {
         value: "No",
         text: "No"
        }
       ]
      },
      {
       type: "radiogroup",
       name: "followupQ2c",
       visible: false,
       visibleIf: "{qmain2} = 'Yes'",
       title: "Has the cybersecurity attack communication plan been tested for effectiveness?",
       hideNumber: true,
       choices: [
        {
         value: "Yes",
         text: "Yes"
        },
        {
         value: "No",
         text: "No"
        }
       ]
      }
     ],
     title: "Question 2"
    }
   ],
   title: "Responsibilities and Contributions"
  },
  {
   name: "Quest3",
   sendEmailPopUp:"Send email",
   elements: [
    {
     type: "panel",
     name: "panelQ3",
     elements: [
      {
       type: "radiogroup",
       name: "qmain3",
       title: "Has your organisation been in touch with cyber security experts and/or advisors from outside your organizations regarding your planned response to a cyber attack?\t",
       hideNumber: true,
       choices: [
        {
         value: "Yes",
         text: "Yes"
        },
        {
         value: "No",
         text: "No"
        }
       ]
      },
      {
       type: "radiogroup",
       name: "followupQ3a",
       visible: false,
       visibleIf: "{qmain3} = 'Yes'",
       title: "Have you already called on cyber security experts and/or advisors from outside your organizations in response to a cyber attack of any kind?\t",
       hideNumber: true,
       choices: [
        {
         value: {
          " value": "Yes",
          text: "Yes"
         },
         text: "Yes"
        },
        {
         value: "No",
         text: "No"
        }
       ]
      },
      {
       type: "comment",
       name: "followupQ3b",
       visible: false,
       visibleIf: "{qmain3} = 'Yes'",
       title: "Please describe a previous cyber attack and how cyber security experts and/or advisors from outside your organizations offered assistance?",
       hideNumber: true
      }
     ],
     title: "Question 3"
    }
   ],
   title: "Responsibilities and Contributions"
  },
  {
   name: "Quest4",
   sendEmailPopUp:"Send email",
   elements: [
    {
     type: "panel",
     name: "panelQ4",
     elements: [
      {
       type: "radiogroup",
       name: "qmain4",
       title: "Has your organisation reached out to the government, law enforcement or government agencies to discuss your cybersecurity plan and capabilities?",
       hideNumber: true,
       choices: [
        {
         value: "Yes",
         text: "Yes"
        },
        {
         value: "No",
         text: "No"
        }
       ]
      },
      {
       type: "comment",
       name: "followupQ4a",
       visible: false,
       visibleIf: "{qmain4} = 'Yes'",
       title: "Who is or was your contact in the government and what assistance did they provide with regards to cyberattacks?",
       hideNumber: true
      },
      {
       type: "radiogroup",
       name: "followupQ4b",
       visible: false,
       visibleIf: "{qmain4} = 'Yes'",
       title: "Does your organisation have an external cybersecurity consultant or expert on call?\t",
       hideNumber: true,
       choices: [
        {
         value: "Yes",
         text: "Yes"
        },
        {
         value: "No",
         text: "No"
        }
       ]
      },
      {
       type: "text",
       name: "followupQ4c",
       visible: false,
       visibleIf: "{followupQ4b} = 'Yes'",
       title: "Who is your external cybersecurity consultant or expert that you have on call?",
       hideNumber: true
      },
      {
       type: "comment",
       name: "followupQ4d",
       visible: false,
       visibleIf: "{followupQ4b} = 'Yes'",
       title: "What assistance has your external cybersecurity consultant already provided?\t",
       hideNumber: true
      }
     ],
     title: "Question 4"
    }
   ],
   title: "Responsibilities and Contributions"
  },
  {
   name: "Quest5",
   sendEmailPopUp:"Send email",
   elements: [
    {
     type: "panel",
     name: "panel5",
     elements: [
      {
       type: "radiogroup",
       name: "qmain5",
       title: "Are there other local, regional, and national organizations your organization collaborates with to enhance your ability to avoid or deal with a cyberattack?\t",
       hideNumber: true,
       choices: [
        {
         value: "Yes",
         text: "Yes"
        },
        {
         value: "No",
         text: "No"
        }
       ]
      },
      {
       type: "comment",
       name: "followupQ5b",
       visible: false,
       visibleIf: "{qmain5} = 'yes'",
       title: "What sort of relationship does your agency have with each of these partners?",
       hideNumber: true
      }
     ],
     title: "Question 5"
    }
   ],
   title: "Responsibilities and Contributions"
  },
  {
   name: "Quest6",
   sendEmailPopUp:"Send email",
   elements: [
    {
     type: "panel",
     name: "panel6",
     elements: [
      {
       type: "radiogroup",
       name: "qmain6",
       title: "Does your organization have a specific annual budget line item for cybersecurity?",
       hideNumber: true,
       choices: [
        {
         value: "Yes",
         text: "Yes"
        },
        {
         value: "No",
         text: "No"
        }
       ]
      },
      {
       type: "text",
       name: "followup6a",
       visible: false,
       visibleIf: "{qmain6} = 'Yes'",
       title: "If cybersecurity has a line item in your organizations budget, what is the budget?\t",
       hideNumber: true
      },
      {
       type: "text",
       name: "followup6b",
       visible: false,
       visibleIf: "{qmain6} = 'Yes'",
       title: "What has been spent on cybersecurity improvements each of the past three years",
       hideNumber: true
      },
      {
       type: "text",
       name: "followup6c",
       visible: false,
       visibleIf: "{qmain6} = 'Yes'",
       title: "Is there a budget set aside for next fiscal year?",
       hideNumber: true
      }
     ],
     title: "Question 6"
    }
   ],
   title: "Resources"
  },
  {
   name: "Quest7",
   sendEmailPopUp:"Send email",
   elements: [
    {
     type: "panel",
     name: "panel7",
     elements: [
      {
       type: "radiogroup",
       name: "qmain7",
       title: "Does your organisation provide cybersecurity awareness and best practices training for all new employees?",
       hideNumber: true,
       choices: [
        {
         value: "Yes",
         text: "Yes"
        },
        {
         value: "No",
         text: "No"
        }
       ]
      },
      {
       type: "radiogroup",
       name: "followupQ7a",
       visible: false,
       visibleIf: "{qmain7} = 'Yes'",
       title: "Are continued refresher courses required for all employees on a regular basis?",
       hideNumber: true,
       choices: [
        {
         value: "Yes",
         text: "Yes"
        },
        {
         value: "No",
         text: "No"
        }
       ]
      },
      {
       type: "multipletext",
       name: "followupQ7b",
       visible: false,
       visibleIf: "{qmain7} = 'Yes'",
       title: "Are these provided online or in person? If online, who is the provider?",
       hideNumber: true,
       items: [
        {
         name: "courseType",
         title: "Online/In person:"
        },
        {
         name: "provider",
         title: "Provider: "
        }
       ]
      },
      {
       type: "text",
       name: "followupQ7d",
       visible: false,
       visibleIf: "{qmain7} = 'Yes'",
       title: "Who conducts the cybersecurity best practice training?\t",
       hideNumber: true
      },
      {
       type: "text",
       name: "followupQ7e",
       visible: false,
       visibleIf: "{qmain7} = 'Yes'",
       title: "Who determines whether these cybersecurity best practices are being followed successfully?\t",
       hideNumber: true
      }
     ],
     title: "Question 7"
    }
   ],
   title: "Resources"
  },
  {
   name: "Quest8",
   sendEmailPopUp:"Send email",
   elements: [
    {
     type: "panel",
     name: "panel8",
     elements: [
      {
       type: "radiogroup",
       name: "qmain8",
       title: "Does your organisation have a detailed plan for dealing with the financial burdens a cyberattack might create?",
       hideNumber: true,
       choices: [
        {
         value: "Yes",
         text: "Yes"
        },
        {
         value: "No",
         text: "No"
        }
       ]
      },
      {
       type: "file",
       name: "followupQ8a",
       visible: false,
       visibleIf: "{qmain8} = 'Yes'",
       title: "Can we see the plan? (Please attach the documentation)\t",
       hideNumber: true,
       maxSize: 0
      },
      {
       type: "radiogroup",
       name: "followupQ8b",
       visible: false,
       visibleIf: "{qmain8} = 'Yes'",
       title: "Does your organisation have cybersecurity insurance?",
       hideNumber: true,
       choices: [
        {
         value: "Yes",
         text: "Yes"
        },
        {
         value: "No",
         text: "No"
        }
       ]
      },
      {
       type: "file",
       name: "followupQ8c",
       visible: false,
       visibleIf: "{followupQ8b} = 'Yes'",
       title: "If so, can we see the policy? (Please attach the document)\t",
       hideNumber: true,
       maxSize: 0
      },
      {
       type: "text",
       name: "followupQ8d",
       visible: false,
       visibleIf: "{followupQ8b} = 'Yes'",
       title: "What process was followed in making the decision to buy insurance?",
       hideNumber: true
      },
      {
       type: "text",
       name: "followupQ8e",
       visible: false,
       visibleIf: "{followupQ8b} = 'Yes'",
       title: "What amount is paid per year for the insurance?",
       hideNumber: true
      },
      {
       type: "text",
       name: "followupQ8f",
       visible: false,
       visibleIf: "{followupQ8b} = 'Yes'",
       title: "Who provides your cybersecurity insurance?\t",
       hideNumber: true
      },
      {
       type: "radiogroup",
       name: "followupQ8g",
       visible: false,
       visibleIf: "{followupQ8b} = 'Yes'",
       title: "Has your organisation received payouts from your cybersecurity insurance?\t",
       hideNumber: true,
       choices: [
        {
         value: "Yes",
         text: "Yes"
        },
        {
         value: "No",
         text: "No"
        }
       ]
      },
      {
       type: "comment",
       name: "followupQ8h",
       visible: false,
       visibleIf: "{followupQ8g} = 'Yes'",
       title: "If you have received any cybersecurity insurance payouts, please describe each instance and the amount received.",
       hideNumber: true
      },
      {
       type: "comment",
       name: "followupQ8i",
       visible: false,
       visibleIf: "{qmain8} = 'No'",
       title: "If you have no cybersecurity insurance, why did you decided to not buy it?\t",
       hideNumber: true
      }
     ],
     title: "Question 8"
    }
   ],
   title: "Resources"
  },
  {
   name: "Quest9",
   sendEmailPopUp:"Send email",
   elements: [
    {
     type: "panel",
     name: "panel9",
     elements: [
      {
       type: "radiogroup",
       name: "qmain9",
       title: "Does your organisation install all operating software updates and patches in a timely manner?",
       hideNumber: true,
       choices: [
        {
         value: "Yes",
         text: "Yes"
        },
        {
         value: "No",
         text: "No"
        }
       ]
      },
      {
       type: "text",
       name: "followupQ9a",
       visible: false,
       visibleIf: "{qmain9} = 'Yes'",
       title: "Who's responsibility is to ensure timely updating of operating software and installing patches?",
       hideNumber: true
      },
      {
       type: "text",
       name: "followupQ9b",
       visible: false,
       visibleIf: "{qmain9} = 'Yes'",
       title: "How often is software updated? What is the process for installing software updates?",
       hideNumber: true
      }
     ],
     title: "Question 9"
    }
   ],
   title: "Technology"
  },
  {
   name: "Quest10",
   sendEmailPopUp:"Send email",
   elements: [
    {
     type: "panel",
     name: "panel10",
     elements: [
      {
       type: "radiogroup",
       name: "qmain10",
       title: "Has your organisation identified which systems are critical to it's operations?",
       hideNumber: true,
       choices: [
        {
         value: "Yes",
         text: "Yes"
        },
        {
         value: "No",
         text: "No"
        }
       ]
      },
      {
       type: "radiogroup",
       name: "followupQ10a",
       visible: false,
       visibleIf: "{qmain10} = 'Yes'",
       title: "Has your organisation assessed the short and long-term consequences of losing control of these assets?",
       hideNumber: true,
       choices: [
        {
         value: "Yes",
         text: "Yes"
        },
        {
         value: "No",
         text: "No"
        }
       ]
      },
      {
       type: "radiogroup",
       name: "followupQ10b",
       visible: false,
       visibleIf: "{qmain10} = 'Yes'",
       title: "Has your organisation made an effort to calculate the cost of losing control of these critical assets for a few hours or a few days?\t",
       hideNumber: true,
       choices: [
        {
         value: "Yes",
         text: "Yes"
        },
        {
         value: "No",
         text: "No"
        }
       ]
      }
     ],
     title: "Question 10"
    }
   ],
   title: "Technology"
  },
  {
   name: "Quest11",
   sendEmailPopUp:"Send email",
   elements: [
    {
     type: "panel",
     name: "panel11",
     elements: [
      {
       type: "radiogroup",
       name: "qmain11",
       title: "Has your organisation inventoried all of its physical devices, systems, software platforms, and applications?",
       hideNumber: true,
       choices: [
        {
         value: "Yes",
         text: "Yes"
        },
        {
         value: "No",
         text: "No"
        }
       ]
      },
      {
       type: "file",
       name: "followupQ11a",
       visible: false,
       visibleIf: "{qmain11} = 'Yes'",
       title: "Can we see the inventory list? (Please attach document)",
       hideNumber: true,
       maxSize: 0
      },
      {
       type: "comment",
       name: "followupQ11b",
       visible: false,
       visibleIf: "{qmain11} = 'No'",
       title: "If not, what are the challenges to doing so?"
      }
     ],
     title: "Question 11"
    }
   ],
   title: "Technology"
  },
  {
   name: "Quest12",
   sendEmailPopUp:"Send email",
   elements: [
    {
     type: "panel",
     name: "panel12",
     elements: [
      {
       type: "radiogroup",
       name: "qmain12",
       title: "Are all organisations data systems securely backed up?",
       hideNumber: true,
       choices: [
        {
         value: "Yes",
         text: "Yes"
        },
        {
         value: "No",
         text: "No"
        }
       ]
      },
      {
       type: "text",
       name: "followupQ12a",
       visible: false,
       visibleIf: "{qmain12} = 'Yes'",
       title: "Where and how are the organization's systems backed up?\t",
       hideNumber: true
      },
      {
       type: "comment",
       name: "followupQ12b",
       visible: false,
       visibleIf: "{qmain12} = 'Yes'",
       title: "Who has access to the back ups (and how)?",
       hideNumber: true
      },
      {
       type: "comment",
       name: "followupQ12c",
       visible: false,
       visibleIf: "{qmain12} = 'Yes'",
       title: "Which of the organisation's data are not backed up/cannot be backed up and why?",
       hideNumber: true
      }
     ],
     title: "Question 12"
    }
   ],
   title: "Technology"
  },
  {
   name: "Quest13",
   sendEmailPopUp:"Send email",
   elements: [
    {
     type: "panel",
     name: "panel13",
     elements: [
      {
       type: "radiogroup",
       name: "qmain13",
       title: "Is access to critical systems carefully managed with only those who require access given access?",
       hideNumber: true,
       choices: [
        {
         value: "Yes",
         text: "Yes"
        },
        {
         value: "No",
         text: "No"
        }
       ]
      },
      {
       type: "text",
       name: "followupQ13a",
       visible: false,
       visibleIf: "{qmain13} = 'Yes'",
       title: "Who determines who has access to what systems and environments?",
       hideNumber: true
      },
      {
       type: "comment",
       name: "followupQ13b",
       visible: false,
       visibleIf: "{qmain13} = 'Yes'",
       title: "What are the criteria for determining who is granted system access?\t",
       hideNumber: true
      }
     ],
     title: "Question 13"
    }
   ],
   title: "Technology"
  },
  {
   name: "Quest14",
   sendEmailPopUp:"Send email",
   elements: [
    {
     type: "panel",
     name: "panel14",
     elements: [
      {
       type: "radiogroup",
       name: "qmain14",
       title: "Are there services and assets that depend on external entities (i.e. outsourcing, vendors, etc.) that pose cyberattack risks?",
       hideNumber: true,
       choices: [
        {
         value: "Yes",
         text: "Yes"
        },
        {
         value: "No",
         text: "No"
        }
       ]
      },
      {
       type: "comment",
       name: "followupQ14a",
       visible: false,
       visibleIf: "{qmain14} = 'Yes'",
       title: "If so, what are the related risks?\t",
       hideNumber: true
      },
      {
       type: "radiogroup",
       name: "followupQ14b",
       title: "Do you have an agreement to clarify who bears the responsibility if an attack happens through the external channels?",
       hideNumber: true,
       choices: [
        {
         value: "Yes",
         text: "Yes"
        },
        {
         value: "No",
         text: "No"
        }
       ]
      },
      {
       type: "file",
       name: "followupQ14c",
       visible: false,
       visibleIf: "{followupQ14b} = 'Yes'",
       title: "Can we see these agreements? (Please attach documents)\t",
       hideNumber: true,
       maxSize: 0
      }
     ],
     title: "Question 14"
    }
   ],
   title: "Technology"
  },
  {
   name: "Quest15",
   sendEmailPopUp:"Send email",
   elements: [
    {
     type: "panel",
     name: "panel15",
     elements: [
      {
       type: "radiogroup",
       name: "qmain15",
       title: "Do you have a comprehensive system shut down plan in place in the event of a ransomware attack?\t",
       hideNumber: true,
       choices: [
        {
         value: "Yes",
         text: "Yes"
        },
        {
         value: "No",
         text: "No"
        }
       ]
      },
      {
       type: "radiogroup",
       name: "followupQ15a",
       visible: false,
       visibleIf: "{qmain15} = 'Yes'",
       title: "Do all employees know what to do in the event of a ransomware attack?\t",
       hideNumber: true,
       choices: [
        {
         value: "Yes",
         text: "Yes"
        },
        {
         value: "No",
         text: "No"
        }
       ]
      },
      {
       type: "radiogroup",
       name: "followupQ15c",
       visible: false,
       visibleIf: "{qmain15} = 'Yes'",
       title: "Have you tested the plan to assess its effectiveness?",
       hideNumber: true,
       choices: [
        {
         value: "Yes",
         text: "Yes"
        },
        {
         value: "No",
         text: "No"
        }
       ]
      }
     ],
     title: "Question 15"
    }
   ],
   title: "During the attack"
  },
  {
   name: "Quest16",
   sendEmailPopUp:"Send email",
   elements: [
    {
     type: "panel",
     name: "panel16",
     elements: [
      {
       type: "radiogroup",
       name: "qmain16",
       title: "Has your organisation conducted a cost-benefit analysis to determine whether the organisation should pay any ransom and negotiate with attacks to recover data?",
       hideNumber: true,
       choices: [
        {
         value: "Yes",
         text: "Yes"
        },
        {
         value: "No",
         text: "No"
        }
       ]
      },
      {
       type: "radiogroup",
       name: "followupQ16a",
       visible: false,
       visibleIf: "{qmain16} = 'Yes'",
       title: "Does your organisation have pre-approved negotiation procedures and ransom limits?",
       hideNumber: true,
       choices: [
        {
         value: "Yes",
         text: "Yes"
        },
        {
         value: "No",
         text: "No"
        }
       ]
      },
      {
       type: "file",
       name: "followupQ16b",
       visible: false,
       visibleIf: "{qmain16} = 'Yes'",
       title: "Can we see your ransomware negotiation cost/benefit analysis? (Please attach document)\t",
       hideNumber: true,
       maxSize: 0
      },
      {
       type: "text",
       name: "followupQ16c",
       visible: false,
       visibleIf: "{followupQ16a} = 'Yes'",
       title: "Who is in charge of ransomware negotiations on behalf of your organisation?",
       hideNumber: true
      },
      {
       type: "radiogroup",
       name: "followupQ16d",
       visible: false,
       visibleIf: "{qmain16} = 'Yes'",
       title: "Has your organization previously engaged in ransomware negotiations?",
       hideNumber: true,
       choices: [
        {
         value: "Yes",
         text: "Yes"
        },
        {
         value: "No",
         text: "No"
        }
       ]
      }
     ],
     title: "Question 16"
    }
   ],
   title: "During the attack"
  },
  {
   name: "Quest17",
   sendEmailPopUp:"Send email",
   elements: [
    {
     type: "panel",
     name: "panel17",
     elements: [
      {
       type: "radiogroup",
       name: "qmain17",
       title: "After an attack has occured, does your organization have a ransomware incident review process in place?",
       hideNumber: true,
       choices: [
        {
         value: "Yes",
         text: "Yes"
        },
        {
         value: "No",
         text: "No"
        }
       ]
      },
      {
       type: "file",
       name: "followupQ17a",
       visible: false,
       visibleIf: "{qmain17} = 'Yes'",
       title: "Can we see the post-ransomware incident review plan? (Please attach document)",
       hideNumber: true,
       maxSize: 0
      }
     ],
     title: "Question 17"
    }
   ],
   title: "After the Attack"
  }
 ],
 showProgressBar: "top",
 progressBarType: "questions",
 pageNextText: "Next question",
 completeText: "Submit",
 completedHtml: "<p><h4>Thank you for completing the Assessment.</h4></p><p>We will contact you for further infomation</p>",
}

