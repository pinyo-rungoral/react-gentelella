import React, { Component } from 'react';

export class LeftColumn extends Component{
    render(){
        return <div className={"left_col col-md-" + (this.props.md || 3)}>
            <div className="left_col scroll-view">{this.props.children}</div>
        </div>
    }
}