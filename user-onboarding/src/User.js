import React from "react"

export default function({ details }) {
    if (!details) {
        return <h3>Loading... (but not really)</h3>
    }

    return (
        <div className="friend container">
            <h2>{details.name}</h2>
            <p>Email: {details.email}</p>
            <p>Password: {details.password}</p>
        </div>
    )
}