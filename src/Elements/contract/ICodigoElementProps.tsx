import { CodigoElementType } from "./CodigoElementTypes";

/**
 * The base interface to satisfy an element component
 */
export interface ICodigoElement{
    position?:string;
    left?:string;
    top?:string;
    width?:string;
    height?:string;
    boxShadow?:string;
    dataAnimation?:string;
    dataDelay?:string;
    dataDuration?:string;
    id?:string;
    type?:CodigoElementType;
}
export interface ICodigoShape extends ICodigoElement{
    backgroundColor:string;
}
export interface ICodigoText extends ICodigoElement{
    color?:string;
    fontSize?:number;
    fontFamily?:string;
    content:string;
}
export interface ICodigoImage extends ICodigoElement{
    src?:string;
}