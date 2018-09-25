import React, { Component } from 'react';
import {MenuGroup} from './MenuGroup';

export class MenuSection extends Component{
    render(){
        return  <div className="menu_section">
            <h3>{this.props.header}</h3>
            <MenuGroup {...this.props}></MenuGroup>
        </div>
    }
}