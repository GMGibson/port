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
    tl.staggerFrom('.pject', 1.25, {opacity: 0}, .20).delay(.25)
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
      {name: 'modern layouts', image:"/LO.jpg", link: "/projects/layout", key: "4"},
      {name: 'portfolio', image:"/portThumb.jpg", link: "/projects/portfolio", key: "2"},
      {name: 'quicktube', image:"/thumbs/QT1.jpg", link: "/projects/cloneflix", key: "1"},
      {name: 'bag of chaos', image:"/chaos.jpg", link: "/projects/chaos", key: "3"}

    ]
    return (
      <div className="showcase-components">
        <div className="show-right" ref="pjects">
            {pList.map(i =>
              <figure className="pject" key={i.key}>
                <Link to={i.link}>
                  <div className="pject-header">{i.name}</div>
                  <img src={i.image}  style={i.style} alt="" onClick={this.handleClick}/>
                </Link>
              </figure>)}
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
