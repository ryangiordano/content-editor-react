import * as React from 'react';
import './Canvas.css';
import {ICodigoElement, ICodigoShape, ICodigoText, ICodigoImage} from '../Elements/contract/ICodigoElementProps';
import {CodigoShape} from '../Elements/CodigoShape';
import {CodigoText} from '../Elements/CodigoText';
import {CodigoElementFactory} from '../Elements/Factory/CodigoElementFactory';
import {CodigoElementType} from '../Elements/contract/CodigoElementTypes';
import EventBus from 'pubsub-js'
interface Props {
    border : string,
    height : number;
    width : number;
}
interface State {
    ElementList : ICodigoElement[];
}

// interface State {}
export class Canvas extends React.Component < Props,
State > {
    private elFactory : CodigoElementFactory = new CodigoElementFactory();
    constructor(props : Props) {
        super(props);
        this.state = {
            ElementList: []
        };
    }
    private addText() {
        console.log("adding text")
        let randomTop = Math.floor(Math.random() * this.props.height);
        let randomLeft = Math.floor(Math.random() * this.props.width);
        let newText = this.elFactory.buildCodigoElement(CodigoElementType.TEXT, {
                top: `${randomTop}px`,
                left: `${randomLeft}px`,
                content: "Hello baby",
                color:"black",
            }as ICodigoText);
        this.state
            .ElementList
            .push(newText);
        this.setState({ElementList: this.state.ElementList});
        this
            .state
            .ElementList
            .forEach(el => console.log(el))
    }
    private addShape() {
        let randomTop = Math.floor(Math.random() * this.props.height);
        let randomLeft = Math.floor(Math.random() * this.props.width);
        let newShape = this.elFactory.buildCodigoElement(CodigoElementType.SHAPE, {
                top: `${randomTop}px`,
                left: `${randomLeft}px`
            } as ICodigoShape);
        this
            .state
            .ElementList
            .push(newShape);
        this.setState({ElementList: this.state.ElementList});
    }
    render() {
        let divStyle = {
            border: this.props.border,
            height: `${this.props.height}px`,
            width: `${this.props.width}px`
        }
        let images = this
            .state
            .ElementList
            .filter(el => el.type == CodigoElementType.IMAGE);
        let text = this
            .state
            .ElementList
            .filter(el => el.type == CodigoElementType.TEXT);
        let shapes = this
            .state
            .ElementList
            .filter(el => el.type == CodigoElementType.SHAPE);
        return (
            <div className="Gomedia-40-15 stageArea">
                <div className="canvas" style={divStyle}>
                    {shapes.map((el:ICodigoShape, index) => {
                        return <CodigoShape
                            key={index}
                            left={el.left}
                            top={el.top}
                            width={el.width}
                            height={el.height}
                            boxShadow={el.boxShadow}
                            dataAnimation={el.dataAnimation}
                            dataDuration={el.dataDuration}
                            dataDelay={el.dataDelay}
                            id={el.id}
                            backgroundColor="red"
                            />
                    })}
                    {text.map((el:ICodigoText, index) => {
                        return <CodigoText
                            key={index}
                            left={el.left}
                            top={el.top}
                            width={el.width}
                            height={el.height}
                            boxShadow={el.boxShadow}
                            dataAnimation={el.dataAnimation}
                            dataDuration={el.dataDuration}
                            dataDelay={el.dataDelay}
                            id={el.id}
                            content={el.content}
                            color={el.color}
                            fontSize={el.fontSize}
                            fontFamily={el.fontFamily}
                            />
                    })}

                </div>
            </div>

        )
    }
    componentDidMount() {
        EventBus.subscribe('add-shape', (shapeData) => {
            this.addShape();
        });
        EventBus.subscribe('add-text', (textData) => {
            this.addText();
        });

    }
}