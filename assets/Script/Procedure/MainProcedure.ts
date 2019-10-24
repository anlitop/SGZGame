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
import SGZGameCenter from "../SGZGameCenter";
const {ccclass, property} = cc._decorator;

@ccclass
export default class MainProcedure extends IProcedure {

    constructor(Controller:ProcedureController){
        super(Controller);
        this.ProcedureName="MainProcedure"
    }
    //初始化第一帧进入
    public ProcedureInit():void{
        console.log("main初始化")
    }
    //开始
    public ProcedureBegin():void{
        console.log("main开始")
        SGZGameCenter.Instance.Initinal()
        
    }
    //结束
    public ProcedureEnd():void{
        console.log("main结束")
    }
    //更新
    public ProcedureUpdate():void{
        //SGZGameCenter.Instance.Update();
       // console.log("mainupdate")
    }

}
