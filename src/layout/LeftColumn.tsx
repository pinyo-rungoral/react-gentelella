import * as React from 'react';

interface LeftColumnProp {
    md?:number;    
};

export class LeftColumn extends React.Component<LeftColumnProp,{}>{
    render(){
        return <div className={"left_col col-md" + (this.props.md || 3)}>LeftColumn</div>
    }
}