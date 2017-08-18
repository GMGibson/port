import React, {Component} from 'react'

class Skillbar extends Component {  
  render() {
    const skills = this.props.skills
    return (
      <div className="skillbar">
        {skills.map((skill) => <div className="skill-solo"><img src={skill} role="presentation" /></div>)}        
      </div>
    )
  }

}  

export default Skillbar