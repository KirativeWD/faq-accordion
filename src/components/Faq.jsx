import React, { useState } from "react";
import "./css/Faq.css";

function Faq({ faqs }) {

    // Sets the initial state of all answers to false
    const [answerVisible, setAnswerVisible] = useState(
        new Array(faqs.length).fill(false)
    );

    // Tracks the state of all answers and updates state accordingly
    const toggleAnswerVisible = (index) => {
        const answersVisible = [...answerVisible];
        answersVisible[index] = !answersVisible[index];
        setAnswerVisible(answersVisible);
    }

    return (
        <article>
            <h1>
                <span aria-hidden="true">FAQs</span>
                <span className="sr-only">Frequently Asked Questions</span>
            </h1>
            <ul>
                {faqs.map((faq, index) => {

                    const questionId = `question-${index}`;
                    const answerId = `answer-${index}`;

                    return (
                        <li key={index}>
                            <h2>
                                <button onClick={() => toggleAnswerVisible(index)}
                                    aria-expanded={answerVisible[index]}
                                    aria-controls={answerId}
                                    id={questionId}>
                                    <span>{faq.question}</span>
                                    <img src={answerVisible[index] ? "./images/icon-minus.svg" : "./images/icon-plus.svg"} alt="" />
                                </button>
                            </h2>
                            <p id={answerId}
                                aria-labelledby={questionId}
                                aria-live="assertive"
                                role="region"
                                hidden={!answerVisible[index]}>{faq.answer}</p>
                        </li>
                    )
                })}
            </ul>
        </article>
    )

}

export default Faq;