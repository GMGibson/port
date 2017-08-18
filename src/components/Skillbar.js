import React, {Component} from 'react'

class Skillbar extends Component {
  constructor(props) {
    super(props)

  }
  render() {
    const skills = this.props.skills
    return (
      <div className="skillbar">
        {skills.map((skill) => <div className="skill-solo"><img src={skill} /></div>)}        
      </div>
    )
  }

}  

export default Skillbar