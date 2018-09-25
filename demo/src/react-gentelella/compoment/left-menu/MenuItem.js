import React, { Component } from 'react';
import {MenuGroup} from './MenuGroup';
export class MenuItem extends Component {
    render() {
        return <li >
            <a>
               {!this.props.childMenu && [
                    <i className={"fa fa-" + this.props.icon}></i>, this.props.text,
                    <span className="fa fa-chevron-down"></span>
               ]}
               {this.props.childMenu && this.props.text}
            </a>
            {this.props.items && <MenuGroup {...this.props} childMenu={true}></MenuGroup>}
        </li>
    }
}