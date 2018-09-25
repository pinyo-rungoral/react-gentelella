import React, { Component } from 'react';

export class Profile extends Component{
    render(){
        return <div className="profile clearfix">
            <div className="profile_pic">
                <img src={ this.props.avatar} alt="..." className="img-circle profile_img" />              
            </div>
            <div className="profile_info">
                <span>{this.props.role}</span>
                <h2>{this.props.username}</h2>
              </div>
        </div>;
    }
}