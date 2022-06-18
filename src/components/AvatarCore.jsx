import React from "react";

class AvatarCore extends React.Component{

    render(){
       return <img className="avatar" src={this.props.photo} alt={this.props.avatar}></img>
    }
}

export default AvatarCore; 