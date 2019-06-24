import React from 'react'
import SectionItem from './SectionItem'




const Section = (props) => (
    <div className="section" id="skills">
        <p className="section__title">{props.title}</p>
        <div className="section__sectionItems">
        {props.items.map(item => 
            <SectionItem key={item.title} title={item.title}  image={item.image} skills={item.skills}/>
        )}
        </div>
    </div>
)

export default Section