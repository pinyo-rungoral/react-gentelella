export * from './layout';
import * as React from "react";
import * as ReactDOM from 'react-dom';

class Gentelella extends React.Component{
    constructor(props:any){
        super(props);
    }
    render(){
        return <div className="container body">
            <div className="main_container">
            {this.props.children}
            </div>
        </div>
    }

    componentDidMount(){
        document.body.className="nav-md";
    }
}

export default Gentelella;

