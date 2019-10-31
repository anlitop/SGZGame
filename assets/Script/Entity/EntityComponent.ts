import Entity from "./Entity";

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
export default class EntityComponent{
    protected p_owner:Entity=null;
    constructor(owner:Entity){
        this.SetOwner(owner)
    }

    public static EntityComponentID:number=0

    public get EntityComponentID(){
        return EntityComponent.EntityComponentID;
    }
    public VInit():void{}
    public VDestory():void{}
    public VUpdate():void{}
    protected SetOwner(entity:Entity):void{
        this.p_owner=entity;
    } 
}
