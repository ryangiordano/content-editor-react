import {CodigoElementType} from "../contract/CodigoElementTypes";
import {ICodigoElement, ICodigoShape, ICodigoText, ICodigoImage} from "../contract/ICodigoElementProps";

export class CodigoElementFactory {
    constructor() {}
    public buildCodigoElement(type : CodigoElementType, options : ICodigoElement) : ICodigoElement {
        let data;
        switch (type) {
            case CodigoElementType.SHAPE:
                data = this.buildShape(options as ICodigoShape);
                break;
            case CodigoElementType.TEXT:
                data = this.buildText(options as ICodigoText);
                break;
            case CodigoElementType.IMAGE:
                data = this.buildImage(options as ICodigoImage);
                break;
            default:
                data = this.buildShape(options as ICodigoShape);

        }
        return data;
    }
    private buildShape(options : ICodigoShape) : ICodigoShape {
        return {
            position: options.position || "absolute",
            left: options.left || "0px",
            top: options.top || "0px",
            width: options.width || "30px",
            height: options.height || "30px",
            boxShadow: options.boxShadow || "-9px 10px 29px -5px rgba(0,0,0,0.53)",
            dataAnimation: options.dataAnimation || "none",
            dataDelay: options.dataDelay || "0s",
            dataDuration: options.dataDuration || "1s",
            id: this.genRandom(),
            backgroundColor: options.backgroundColor || "green",
            type:CodigoElementType.SHAPE
        }
    }
    private buildText(options : ICodigoText) : ICodigoText {
        return {
            position: options.position || "absolute",
            left: options.left || "0px",
            top: options.top || "0px",
            width: options.width || "330px",
            height: options.height || "30px",
            boxShadow: options.boxShadow || "-9px 10px 29px -5px rgba(0,0,0,0.53)",
            dataAnimation: options.dataAnimation || "none",
            dataDelay: options.dataDelay || "0s",
            dataDuration: options.dataDuration || "1s",
            id: this.genRandom(),
            color: options.color || "black",
            fontSize: options.fontSize || 12,
            fontFamily: options.fontFamily || "arial",
            content:options.content || "Your sexy text element.",
            type:CodigoElementType.TEXT
            
        }
    }
    private buildImage(options : ICodigoImage) : ICodigoImage {
        return {
            position: options.position || "absolute",
            left: options.left || "0px",
            top: options.top || "0px",
            width: options.width || "30px",
            height: options.height || "30px",
            boxShadow: options.boxShadow || "-9px 10px 29px -5px rgba(0,0,0,0.53)",
            dataAnimation: options.dataAnimation || "none",
            dataDelay: options.dataDelay || "0s",
            dataDuration: options.dataDuration || "1s",
            id: this.genRandom(),
            src: options.src || "https://www.gocodigo.com/images/codigo-logo-color.png",
            type:CodigoElementType.IMAGE
            
        }

    }
    private genRandom():string{
        return `${Math.floor(Math.random()*1000)}`;
    }
}