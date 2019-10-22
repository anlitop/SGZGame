import ProcedureController from "./ProcedureController";

// Learn TypeScript:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/typescript.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;


export default class IProcedure{
    
    //流程名称
    private m_ProcedureName:string='IProcedure';
    public get ProcedureName(){
        return this.m_ProcedureName;
    }
    public set ProcedureName(value:string){
        this.m_ProcedureName=value;
    }
    //控制者
    protected m_Controller:ProcedureController=null;
    //builder
    constructor(Controller:ProcedureController){
        this.m_Controller=Controller;
    }
    //开始
    public ProcedureBegin():void{}
    //结束
    public ProcedureEnd():void{}
    //更新
    public ProcedureUpdate():void{}
}
