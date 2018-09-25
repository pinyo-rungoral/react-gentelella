import React, { Component } from 'react';
import {LeftColumn} from '../../layout/LeftColumn';
import {Title} from './Title';
import {Profile} from './Profile';
import {Menu} from './Menu';

export class LeftMenu extends Component{
    render(){
        return <LeftColumn {...this.props}>
            <Title {...this.props.title}></Title>           
            <Profile {...this.props.profile}></Profile>
            <br/>
            <Menu {...this.props.menu}></Menu>
        </LeftColumn>;
    }
}