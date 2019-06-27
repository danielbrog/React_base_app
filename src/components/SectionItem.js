import React from 'react'

const SectionItem = (props) => {
    if(props.info){
        
    const {image,title,list}=props.info
    return (
        <div className="sectionItem">
            <img className= "sectionItem__image" src={image} />
            <p className="sectionItem__title">{title}</p>
            
            <ul className="sectionItem__skills">
                {list.map((listItem) => 
                    <li key={listItem}>{listItem}</li>
                    )}
            </ul>
        </div>
    )}else if (props.link){
        const {image,title,description,url}=props.link
        return (
            <div className="sectionItem">
            <a className ="sectionItem__Link" href={url}><img className= "sectionItem__image" src={image} />
            <p className="sectionItem__title">{title}</p></a>
            <p className="sectionItem__description">{description}</p>
        </div>
        )
    }
}

export default SectionItem