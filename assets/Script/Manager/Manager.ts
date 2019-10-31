import SGZGameCenter from "../SGZGameCenter";

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

@ccclass
export default class Manager {
    protected name:string='Manager'
    protected m_SGZGameConter:SGZGameCenter=null;


    constructor(control:SGZGameCenter){
        this.m_SGZGameConter=control;
    }

    public VInit():void{

        
    }
    public VEnter():void{}
    public VUpdate():void{}
    public VEnd():void{}
    public VDestroy():void{}

    
}
