import * as React from 'react';
import EventBus from 'pubsub-js';
import "./Toolbar.css";
interface Props {}

interface State {}

export class Toolbar extends React.Component < Props,
State > {
    constructor(props : Props) {
        super(props);
        // this.state = {};
    }
    private addShape():void{
        EventBus.publish('add-shape');
    }
    private addText():void{
        EventBus.publish('add-text', 'Hello world');
    }
    render() {

        return (
            <div className="toolbar">
                <div className="title">
                    <h2>TOOLS</h2>
                </div>
                <div className="shelf">
                <h4>insert</h4>
                <div className="drawer">

                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-xs-12">
                            <button onClick={(e) => this.addShape()} className="btn btn-success">
                                Add Shape
                            </button>
                            <button onClick={(e) => this.addText()} className="btn btn-success">
                                Add Text
                            </button>
                            <button onClick={(e) => this.addShape()} className="btn btn-success">
                                Add Image
                            </button>
                        </div>
                    </div>
                </div>
                </div>


            </div>
        )
    }
}