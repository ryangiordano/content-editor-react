import * as React from 'react';
import * as C from './contract/ICodigoElementProps';
import './CodigoElement.css';
interface State {}

export class CodigoShape extends React.Component < C.ICodigoShape,
State > {
    constructor(props : C.ICodigoShape) {
        super(props);
        this.state = {};

    }

    render() {
        const styleObj = {
            height: this.props.height,
            width: this.props.width,
            left: this.props.left,
            top: this.props.top,
            boxShadow: this.props.boxShadow,
            backgroundColor: this.props.backgroundColor
        };

        return (
        <div
            className="gomedia-shape gomedia-element"
            style={styleObj}
            data-delay={this.props.dataDelay}
            data-animation={this.props.dataAnimation}
            data-duration={this.props.dataDuration}/>
        )
    }
}