import React from 'react'

export const InputField = (props) => {
    return (
        <div className="form-floating">
            <input
                type={props.type}
                className="form-control"
                id="floatingInput"
                placeholder="name@example.com"
                value={props.value}
                onChange={props.onChange}
            />
            <label htmlFor="floatingInput">
                {props.label}
            </label>
        </div>
    )
}
