import React, { Component } from 'react';
// import runtimeEnv from '@mars/heroku-js-runtime-env';
// import axios from 'axios';

class Contact extends Component {
  constructor() {
    super()

    // this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.updateName = this.updateName.bind(this)
    this.updateEmail = this.updateEmail.bind(this)
    this.updateMsg = this.updateMsg.bind(this)
  }
  state = {
    name:'',
    email:'',
    msg:''
  }
  componentDidMount() {
    window.TweenMax.from("#left-box", .75, {opacity: 0, x: '-2000'})
    window.TweenMax.from("#right-box-container", .75, {opacity: 0, x: '2000'})
  }
  updateName(e){
    this.setState({name:e.target.value})
  }
  updateEmail(e){
    this.setState({email:e.target.value})
  }
  updateMsg(e){
    this.setState({msg:e.target.value})
  }
  // handleFormSubmit(event) {
  //   const env = runtimeEnv()
  //   event.preventDefault();
  //   const data = {name:this.state.name,email:this.state.email,msg:this.state.msg}
  //   axios.post('/'{
  //     "From":data.email,
  //     "To": env.YAK_API_ADDRESS
  //     "Subject":"ggdesign "+data.name,
  //     "TextBody":data.msg
  //   })
  //   .then((function (response) {
  //     console.log(response);
  //   })
  //   .catch(function(error){
  //     console.log(error);
  //   });


  render() {

    return (
      <div id="contact-page">
        <div id="left-box" ref="left">
          <div id="name-tag">
            <p id="tag"><span id="name">grant</span> gibson</p>
            <p id="title">Front end web developer</p>
            <h4>About Me</h4>
            <p id="desc">Hello, I am a former forester, turned web developer, based out of Murrells Inlet, SC. I am completely self-taught and driven to provide a unique and modern approach to functional web design and ui/ux development.<span>  Please feel free to <a href="#">contact</a> me</span>        about any potential freelance projects or long-term employment.</p>
            <ul>
              <li className="socialLrg soc2"><a href="https://www.linkedin.com/in/ggdev" className="fa fa-linkedin" id="gh" target="_blank"></a></li>
              <li className="socialLrg soc3"><a href="https://codepen.io/gmgibson/" className="fa fa-codepen" id="cd" target="_blank"></a></li>
            </ul>
          </div>
        </div>
        <div id="right-box-container">
          <div id="right-box" ref="right">
              <p id="reach-header"><span id="reach">reach</span> out to me</p>
              <p className="subheading">employer interest, freelance inquiry or just for a chat</p>
                <div id="contact-form">
                  <input type="text" placeholder="Name" className="contact-input" ref="name" onChange={this.updateName}/>
                  <input type="text" placeholder="Email" className="contact-input" ref="email" onChange={this.updateEmail}/>
                  <textarea maxLength="500" required placeholder="What can I do for you?" className="contact-input" ref="msg" onChange={this.updateMsg}></textarea>
                <div className="send-button"><a href="#" type="submit" className="contact-form_button">Send</a></div>
              </div>
          </div>
        </div>
      </div>


    )
  }
}

export default Contact
