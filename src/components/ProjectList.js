import React, {Component} from 'react';
import {Link} from 'react-router';
import Overlay from './Overlay';
import Selection from './Selection';

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
    this.setState({showOverlay: !this.state.showOverlay})
    window.TweenMax.to('.pject',1, {opacity: 1})
  }
  componentDidMount() {
    let tl = new window.TimelineLite()
    tl.staggerFrom('.pject-single', 1.25, {opacity: 0}, .20).delay(.25)
  }
  closeSelection() {
    let tl = new window.TimelineLite()
    this.state.showOverlay ?
    tl.to('#border-wrap', .5, {height: 0})
      .to('.wrapped-item', .5, {opacity: 0},'-=.5')
      .to('.wrapper-card', .75, {width: 0, onComplete:this.handleClick})
      : this.handleClick
  }

  render() {
    const pList = [      
      {name: 'portfolio', image:"/portThumb.jpg", link: "/projects/portfolio", key: "1"},
      {name: 'l5r-decks.com', image: "/l5rdecks.png", link: "/projects/l5rdecks", key: "2"},      
      {name: 'wordpress demo site', image:"/wpsite.jpg", link: "/projects/wpsite", key:"3"},
      {name: 'youtube api demo', image:"/thumbs/QT1.jpg", link: "/projects/cloneflix", key: "4"},
      {name: 'arkham game assistant', image:"/chaos.jpg", link: "/projects/chaos", key: "5"},
      {name: '', image:"/csoon.jpg", link:"/projects/csoon", key: "6"}
      
    ]
    return (
      <div>
        <div className="wrapper" ref="pjects">
            {pList.map(i =>
              <div className="pject-single">
                <p className="pject-header">{i.name}</p>
                <article className="pject-img" key={i.key}>
                  <Link to={i.link} onClick={this.handleClick}>                    
                    <img src={i.image} alt=""/>
                  </Link>
                </article>
              </div>
            )}
        </div>
        <div>
          {this.state.showOverlay ? (
            <div className="selectionOverlay">
              <Overlay toggleView={this.closeSelection} />
              <Selection location={this.props.location} key={1}/>
            </div>
            ) :
            null}
        </div>
      </div>
    )
  }
}

export default ProjectList
