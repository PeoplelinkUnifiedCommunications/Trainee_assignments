import React, {useState}  from "react";
import {connect} from "react-redux";
import { increment} from "./action";
import "./App.css"

function App({counter, increment}){

    const [score, setScore] = useState(0)
    const [oldScore, showScore] = useState(false)
    
    const newCount = counter - 1

    const question = [
        		{
                sNo: 1,
                questionText: "Actions and states are held together by a function called?",
                answerOptions: [
                    { answerText: 'Redux', isCorrect: false },
                    { answerText: 'View', isCorrect: false },
                    { answerText: 'Reducer', isCorrect: true },
                    { answerText: 'Connect', isCorrect: false },],
                    solutions: "Actions and states are held together by a function called Reducer. An action is dispatched with an intention to cause change. This change is performed by the reduce",
		},
        {
            sNo: 2,
            questionText: "Which of the following makes stores available?",
            answerOptions: [
                { answerText: 'Component', isCorrect: false },
                { answerText: 'State', isCorrect: false },
                { answerText: 'Actions', isCorrect: false },
                { answerText: 'Provider', isCorrect: true },],
                solutions: "The <Provider> component makes the Redux store available to any nested components that need to access the Redux store.",
    },
            {
                sNo: 3,
                questionText: "Reducers are a pure function in Redux",
                answerOptions: [
                    { answerText: 'TRUE', isCorrect: true },
                    { answerText: 'FALSE', isCorrect: false },
                    { answerText: 'Can be true or false', isCorrect: false },
                    { answerText: 'Cannot say', isCorrect: false },],
                    solutions: " A reducer is a pure function that takes an action and the previous state of the application and returns the new state.",
        },
        {
            sNo: 4,
            questionText: "Which of them provide us debugging platform for Redux apps?",
            answerOptions: [
                { answerText: 'Redux-Devtools', isCorrect: true },
                { answerText: 'Redux-Testing', isCorrect: false },
                { answerText: 'Redux-Middleware', isCorrect: false },
                { answerText: 'Redux-subscribe', isCorrect: false },],
                solutions: "Explanation: Redux-Devtools provide us debugging platform for Redux apps. It allows us to perform time-travel debugging and live editing.",
        },
        {
            sNo: 5,
            questionText: " How many arguments can a createStore function have?",
            answerOptions: [
                { answerText: '1', isCorrect: false },
                { answerText: '2', isCorrect: false },
                { answerText: '3', isCorrect: true },
                { answerText: '4', isCorrect: false },],
                solutions: "Explanation: Redux-Devtools provide us debugging platform for Redux apps. It allows us to perform time-travel debugging and live editing.",
        },

    ]
    const handlwAnswers = (isCorrect) => {
        increment()
            if(isCorrect === true){
                setScore(score + 1)
                console.log(isCorrect)
            }

        if(question.length === counter){
            showScore(true)
        }
    }

    return(
        <div className="question-container">
            { oldScore ? (
                <div className="solution-app">
                    <h1 className="scoreCard">You scored {score} out of {question.length}</h1>
                    <div className="solution-container">
                    {question.map((displayOption) => (
                        <>
                        <p className="solutionQuestion">Question{displayOption.sNo}: {displayOption.questionText}</p>
                        <p className="solutionAnswer">Solution: {displayOption.solutions}</p>
                        </>
                    ))}
                    </div>
                </div>
			) : (
                <div className="sContainer">
                    <p className="questionStyle">Question{question[newCount].sNo}:  {question[newCount].questionText}</p>
                <div className="ask-thequestion">
                <div className="button-container">
                <ol className="ulList">
						{question[newCount].answerOptions.map((answerOption) => (
                                <li><button className="button-element" onClick={() => handlwAnswers(answerOption.isCorrect)}>{answerOption.answerText}</button></li>	
						))}
                </ol>
					</div>
                </div>
                </div>
            )
            }
        </div>
    );
}
const mapStateToProps = state => ({
    counter: state
})

export default connect(mapStateToProps, {increment})(App)