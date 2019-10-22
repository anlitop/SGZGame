import IProcedure from "./IProcedure";

// Learn TypeScript:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/typescript.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html
import ProcedureController from "./ProcedureController"
const {ccclass, property} = cc._decorator;

@ccclass
export default class BattleProcedure extends IProcedure {

    constructor(Controller:ProcedureController){
        super(Controller);
        this.ProcedureName="BattleProcedure"
    }
    //开始
    public ProcedureBegin():void{}
    //结束
    public ProcedureEnd():void{}
    //更新
    public ProcedureUpdate():void{}
}