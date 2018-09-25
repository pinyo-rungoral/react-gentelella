import React, { Component } from 'react';
import './App.css';
import {ContentBody} from './react-gentelella';
import {LeftMenu} from './react-gentelella/compoment/left-menu/LeftMenu';
import {MainContainer} from './react-gentelella/layout/MainContainer';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
        leftMenu:{
          title:{
            icon:'paw',
            text:'Gentelella React',
          },
          profile:{
            avatar:'/gentelella/build/images/img.jpg',
            username:'Pinyo Rungoral',
            role:'Administrator'
          },
          menu:{
            sections:[
              {
                header:'Generial',
                items:[
                  {
                    icon:'home',
                    text:'Home',
                    items:[]
                  },
                  {
                    icon:'edit',
                    text:'Form',
                    items:[
                      {
                        icon:'edit',
                        text:'item1',
                        items:[]
                      }
                    ]
                  }
                ]
              }
            ]
          }
        }
    };
  }
  render() {
    return (
      <ContentBody>
        {<LeftMenu {...this.state.leftMenu}></LeftMenu>}
        {<MainContainer></MainContainer>}
      </ContentBody>
    );
  }
}

export default App;
