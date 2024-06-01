import React from "react";

function Faq({ faqs }) {

    return (
        <article>
            <h1>
                <span aria-hidden="true">FAQs</span>
                <span className="sr-only">Frequently Asked Questions</span>
            </h1>
            <ul>
                {faqs.map(faq => {
                    return (
                        <li>
                            <h3>
                                <button>{faq.question}</button>
                            </h3>
                            <p>{faq.answer}</p>
                        </li>
                    )
                })}
            </ul>
        </article>
    )

}

export default Faq;