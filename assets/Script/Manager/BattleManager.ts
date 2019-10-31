import Manager from "./Manager";
import Player from "../Entity/Player/Player";
import Card from "../Entity/Card/Card";
import BattleComponent from "../Entity/Card/BattleComponent";

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
export default class BattleManager extends Manager{

    //a阵营玩家
    private camp_A:Array<Player>=null;
    //b阵营玩家
    private camp_B:Array<Player>=null;
    //出场的card
    private m_cards:Array<Card>=null;

    async VInit(){
        super.VInit();

        
        //获取玩家的英雄信息
       let n:cc.Node=await this.m_SGZGameConter.EntityManager.ShowEntity("Card")
       let card:Card=n.getComponent("Card")
       let battle:BattleComponent=card.GetEntityComponent(BattleComponent.EntityComponentID) as BattleComponent

       console.log(battle.Attack);
       console.log(battle.Hp);
       
       
        

        
        
        //安排对手
        //开始回合
        //时间流逝，设定出手英雄
        //英雄释放技能
        //攻击判定
        //Buff判定
        //死亡判定
        //回合+1，时间流逝，最多8回合
  
    }




   //从sgzgameconter中获取玩家英雄、关卡、buff信息
    private GetHerosInfo():void{
        //this.m_SGZGameConter.InitBattle();
    }
    /*
    根据玩家的level与当前level安排阵容
    */
    private ArrangeMonster(levelScore:number):void{

    }


}
