import React from "react"

export default function Form(props){
    //Passing props
    const { values, disabled, errors, change, submit } = props

    const onSubmit = evt => {
        evt.preventDefault()
        submit()
    }

    const onChange = evt => {
        const { name, value, type, checked } = evt.target
        const valueToUse = type === "checkbox" ? checked : value
        change(name, valueToUse)
    }

    return (
        <form className="form-container" onSubmit={onSubmit}>
            <div className="form-group submit">
                <h2>Add New User</h2>
                <button disabled={disabled}>submit</button>
                <div className="errors">
                    <div>{errors.name}</div>
                    <div>{errors.email}</div>
                    <div>{errors.password}</div>
                    <div>{errors.termsOfService}</div>
                </div>
            </div>

            <div className="form-group inputs">
                <h3>General Information</h3>
                <label>Name
                    <input 
                        value={values.name}
                        onChange={onChange}
                        name="name"
                        type="type"
                    />
                </label>
                <label>E-Mail
                    <input 
                        value={values.email}
                        onChange={onChange}
                        name="email"
                        type="text"
                    />
                </label>
                <label>Password
                    <input 
                        value={values.password}
                        onChange={onChange}
                        name="password"
                        type="text"
                    />
                </label>
                <label>Terms of Service
                    <input 
                        checked={values.termsOfService}
                        onChange={onChange}
                        name="termsOfService"
                        type="checkbox"
                    />
                </label>
            </div>
        </form>
    )
}