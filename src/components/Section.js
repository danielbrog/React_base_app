import React from 'react'
import SectionItem from './SectionItem'




const Section = (props) => (
    <div className="section" id={props.title}>
        <p className="section__title">{props.title}</p>
        <div className="section__sectionItems">
        {props.items.map(item => 
            {if(item.skills){
                return <SectionItem key={item.title} skill={item}/>
            } else if(item.url){
                return <SectionItem key={item.title} project={item}/>
            }}
            
        )}
        </div>
    </div>
)

export default Section