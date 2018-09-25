import React, { Component } from 'react';
import {MenuItem} from './MenuItem';

export class MenuGroup extends Component{
    render(){
        return  <ul className={"nav " + (this.props.childMenu? "child_menu":"side-menu")}>
            {this.props.items.map((item,i)=> <MenuItem key={i} {...item} childMenu={this.props.childMenu}></MenuItem>)}
        </ul>
    }
}