import React from "react"
import { useForm, ValidationError } from "@formspree/react"

function Form({theme}) {
    const [state, handleSubmit] = useForm("xeqwbebn")
    if (state.succeeded) {
        return (
            <div className="box">
                <p className={`contact-p ${theme === "light" ? "wh-col" : "secon-col"}`}>Thanks for contacting!</p>
            </div>
        )
    }
    return (
        <form onSubmit={handleSubmit} className="form">
            <div className="form-input">
                <input
                    id="name"
                    type="text"
                    name="name"
                    placeholder="Your Name"
                />
                <ValidationError
                    prefix="Name"
                    field="text"
                    errors={state.errors}
                />
                <input
                    id="email"
                    type="email"
                    name="email"
                    placeholder="Your Email"
                />
                <ValidationError
                    prefix="Email"
                    field="email"
                    errors={state.errors}
                />
            </div>
            <textarea id="message" name="message" placeholder="Message" />
            <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
            />
            <button type="submit" disabled={state.submitting}>
                Send me a Hi 👋🏻
            </button>
        </form>
    )
}

export default Form
