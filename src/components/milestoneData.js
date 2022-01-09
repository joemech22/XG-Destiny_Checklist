import React, { Component } from 'react'
import Milestones from '../data/milestoneDefinitions.json'

class MilestoneData extends Component {
    render() {
        console.log(Milestones["337814587"].displayProperties.name)
        return (
            <div>
                <p>Data</p>
            </div>
        )
    }
}

export default MilestoneData