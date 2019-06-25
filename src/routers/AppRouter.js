import React from 'react'
import Header from '../components/Header'
import SubHeader from '../components/SubHeader'
import { BrowserRouter, Route, Switch} from 'react-router-dom'
import Section from '../components/Section'

import skillsInfo from '../assets/sectionInfo/skillsInfo'
import projectInfo from '../assets/sectionInfo/projectInfo'


const AppRouter = () => (
    <div>
        <BrowserRouter>
        <Header />
        <SubHeader />
        <div className="content">
        <Section title="Projects" items={projectInfo}/>
        <Section title="Skills" items={skillsInfo}/>
        </div>
        </BrowserRouter>
    </div>
)

export default AppRouter