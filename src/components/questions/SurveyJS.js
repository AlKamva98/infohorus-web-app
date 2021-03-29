import React, {useState, useEffect} from 'react';
import ReactDom from 'react-dom';
import * as Survey from 'survey-react';

export function SurveyJS(){
 Survey
    .StylesManager
    .applyTheme("modern");

var json = {
    showQuestionNumbers: "off",
    questions: [
        {
            type: "radiogroup",
            name: "haveKids",
            title: "Do you have a kid(s)?",
            isRequired: true,
            choices: [
                "Yes", "No"
            ],
            colCount: 0
        }, {
            type: "dropdown",
            name: "kids",
            title: "How many kids do you have",
            visibleIf: "{haveKids}='Yes'",
            isRequired: true,
            choices: [1, 2, 3, 4, 5]
        }, {
            type: "dropdown",
            name: "kid1Age",
            title: "The first kid age:",
            visibleIf: "{haveKids}='Yes' and {kids} >= 1",
            isRequired: true,
            "choicesMax": 18
        }, {
            type: "dropdown",
            name: "kid2Age",
            title: "The second kid age:",
            visibleIf: "{haveKids}='Yes' and {kids} >= 2",
            isRequired: true,
            startWithNewLine: false,
            "choicesMax": 18
        }, {
            type: "dropdown",
            name: "kid3Age",
            title: "The third kid age:",
            visibleIf: "{haveKids}='Yes' and {kids} >= 3",
            isRequired: true,
            startWithNewLine: false,
            "choicesMax": 18
        }, {
            type: "dropdown",
            name: "kid4Age",
            title: "The fourth kid age:",
            visibleIf: "{haveKids}='Yes' and {kids} >= 4",
            isRequired: true,
            startWithNewLine: false,
            "choicesMax": 18
        }, {
            type: "dropdown",
            name: "kid5Age",
            title: "The fifth kid age:",
            visibleIf: "{haveKids}='Yes' and {kids} >= 5",
            isRequired: true,
            startWithNewLine: false,
            "choicesMax": 18
        }
    ]
};

let survey = new Survey.Model(json);

survey.onComplete.add(function (result) {
        document.querySelector('#surveyResult').textContent = "Result JSON:\n" + JSON.stringify(result.data, null, 3);
    });
    return(
<Survey.Survey model={survey}/>
);
}