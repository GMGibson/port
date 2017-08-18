import React, {Component} from 'react';
import {Link} from 'react-router';
import Overlay from './Overlay';
import Selection from './Selection';
import Paper from 'material-ui/Paper';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import  FlatButton from 'material-ui/FlatButton';
import Popover from 'material-ui/Popover';

class ProjectList extends Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
    this.closeSelection = this.closeSelection.bind(this);
  };
  state = {
    showOverlay: false
  }
  handleClick() {        
    window.TweenMax.to('.pject',1, {opacity: 1})        
    this.setState({showOverlay: !this.state.showOverlay})
  }
  componentDidMount() {
    let tl = new window.TimelineLite()
    tl.staggerFrom('.container', 1.25, {opacity: 0}, .20).delay(.25)    
  }
  closeSelection() {    
    window.TweenMax.from('.pject',1, {opacity: 0})
    this.setState({showOverlay: !this.state.showOverlay})
  }  

  render() {
    const pList = [      
      { name: 'ggdesign.io', 
        image:"/thumbs/portThumb.jpg", 
        link: "/projects/portfolio",
        travel:"ggdesign.io", 
        desc: "Personal Portfolio"},
      { name: 'l5r-decks.com', 
        image: "/thumbs/l5rThumb.jpg", 
        link: "/projects/fiverings",
        travel: "http://www.l5r-decks.com", 
        desc: "Wordpress Community Site"},      
      { name: 'Layout Designs', 
        image:"/thumbs/tavernThumb.jpg", 
        link: "/projects/bar",
        travel: "http://thetavern.x10host.com/", 
        desc: "Wordpress Site"},
      { name: 'QuickTube', 
        image:"/thumbs/qtThumbtwo.jpg", 
        link: "/projects/cloneflix", 
        travel: "https://afternoon-ocean-11074.herokuapp.com/",
        desc: "React Web App"},
      { name: 'arkham game assistant', 
        image:"/thumbs/arkhamThumb.jpg", 
        link: "/projects/chaos",
        travel: "http://chaosbag.surge.sh/", 
        desc: "React Web App"},
      
      
    ]
    return (      
      <div className="container" ref="pjects">
        {this.state.showOverlay ? 
        <Selection 
          location={this.props.location} 
          key={this.index}
          toggleView={this.handleClick}></Selection> 
        : pList.map((i, index) =>
            <Paper zDepth={2} className="pject-single" key={index}>                                                                                                      
                <CardMedia className="project-thumb">
                  <img src={i.image} alt=""/>                  
                </CardMedia>                                
                <CardHeader title={i.name} className="card-header"/>
                <CardText className="card-text">
                  <p>{i.desc}</p>
                </CardText>
                <CardActions>
                  <Link to={i.link} onClick={this.handleClick}>
                    <FlatButton label="Details"></FlatButton>                                                    
                  </Link>  
                  <Link to={i.travel} target="_blank">                                       
                    <FlatButton label="Visit"></FlatButton>
                  </Link>
                </CardActions>                
            </Paper>              
          )}          
      </div>              
    )
  }
}

export default ProjectList
