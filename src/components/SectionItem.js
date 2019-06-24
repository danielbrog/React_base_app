import React from 'react'

const SectionItem = (props) => {
    return (
        <div className="sectionItem">
            <img className= "sectionItem__image" src={props.image} />
            <p className="sectionItem__title">{props.title}</p>
            
            <ul className="sectionItem__skills">
                {props.skills.map((skill) => 
                    <li key={skill}>{skill}</li>
                    )}
            </ul>
        </div>
    )
}

export default SectionItem