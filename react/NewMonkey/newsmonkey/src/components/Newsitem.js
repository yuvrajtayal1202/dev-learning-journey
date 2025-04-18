import React, { Component } from "react";

export class NewItem extends Component {
    constructor(){
        super();
        console.log("Hello I am a constructor")
    }
  render() {
    let {title, description, imageUrl, newsUrl} = this.props
    return (
      <div>
        <div className="card my-3" style={{width: "18rem"}}>
          <img src= {imageUrl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">
              {description}...
            </p>
            <a href={newsUrl} className="btn btn-sm btn-primary">
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewItem;
