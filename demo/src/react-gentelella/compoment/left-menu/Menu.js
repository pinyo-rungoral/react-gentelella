import React, { Component } from 'react';
import {MenuSection} from './MenuSection';

export class Menu extends Component{
    render(){
        return <div id="sidebar-menu" className="main_menu_side hidden-print main_menu">
            {this.props.sections.map((item,i)=>
                <MenuSection key={i} {...item}></MenuSection>
            )}
        </div>
    }
}