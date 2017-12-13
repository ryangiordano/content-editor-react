import * as React from 'react';
import * as C from './contract/ICodigoElementProps';

interface State {}

export class CodigoText extends React.Component<C.ICodigoText, State> {
    constructor(props: C.ICodigoText) {
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
            color:this.props.color,
            fontFamily:this.props.fontFamily,
            size:this.props.fontSize
        };
        return (
            <div
            className="gomedia-text gomedia-element"
            style={styleObj}
            data-delay={this.props.dataDelay}
            data-animation={this.props.dataAnimation}
            data-duration={this.props.dataDuration}>
            {this.props.content}
            </div>
        )
    }
}