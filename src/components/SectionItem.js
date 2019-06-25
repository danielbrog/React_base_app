import React from 'react'

const SectionItem = (props) => {
    if(props.skill){
    const {image,title,skills}=props.skill
    return (
        <div className="sectionItem">
            <img className= "sectionItem__image" src={image} />
            <p className="sectionItem__title">{title}</p>
            
            <ul className="sectionItem__skills">
                {skills.map((skill) => 
                    <li key={skill}>{skill}</li>
                    )}
            </ul>
        </div>
    )}else if (props.project){
        const {image,title,description,url}=props.project
        return (
            <div className="sectionItem">
            <img className= "sectionItem__image" src={image} />
            <p className="sectionItem__title">{title}</p>
            <p className="sectionItem__description">{description}</p>
            <a href={url}>LINK</a>
        </div>
        )
    }
}

export default SectionItem