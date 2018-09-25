import * as React from 'react';

export class ContentBody extends React.Component{
    render(){
        return <div className="container body"><div className="main_container">{this.props.children}</div></div>
    }

    componentDidMount(){
        document.body.className="nav-md";
    }
}