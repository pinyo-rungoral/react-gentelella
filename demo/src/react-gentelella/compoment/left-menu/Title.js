import React, { Component } from 'react';
import {Clearfix} from '../../layout/ClearFix';

export class Title extends Component {
    render() {
        return [<div className="navbar nav_title">
            {this.props.children && (this.props.children)}
            {!this.props.children && (<a href="index.html" className="site_title">
                {this.props.icon && <i className={"fa fa-" + this.props.icon}></i>}
                 &nbsp;<span>{this.props.text || 'Gentelella React!'}</span>
            </a>)}
        </div>,
         <Clearfix></Clearfix>]
    }
}