import BattleComponent from "./BattleComponent";

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
import Entity from "../Entity"

@ccclass
export default class Card extends Entity{
    private m_battleComponent:BattleComponent=null;

    protected BulidEntityComponent():void{
        this.AddEntityComponent(new BattleComponent(this))
        console.log("add a battlecomponet");
        
    }


    public Act():void{
       let battleComponent= this.GetEntityComponent(BattleComponent.EntityComponentID) as BattleComponent

       console.log(battleComponent.Attack)
    }



}
