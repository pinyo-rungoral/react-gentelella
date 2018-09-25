import * as React from 'react';

export class ContentBody extends React.Component{
    render(){
        return <div>Content body</div>
    }

    componentDidMount(){
        console.log('didmount');
        document.body.className="nav-md";
    }
}