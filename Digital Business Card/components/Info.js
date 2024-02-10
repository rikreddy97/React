import React from "react"

export default function Info(){
    return(
        <div className="info-section">
            <img src="./images/Rect90.png" className="profile-photo"/>
            <p className="name">Srikanth Reddy</p>
            <p className="job-role">Frontend Developer</p>
            <p className="phone">+91 852296****</p>
            < div className="buttons">
                <button className="mail-button"><img src="./images/Mail.png" className="mail-icon"/>Email</button>
                <button className="linkedin-button"><img src="./images/linkedin.png" className="linkedin-icon" />LinkedIn</button>
            </div>
        </div>
    )
}