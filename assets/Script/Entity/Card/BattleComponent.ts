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

import EntityComponent from "../EntityComponent";
import Entity          from "../Entity"

@ccclass
export default class BattleComponent extends EntityComponent{
    private m_speed:number=10;
    private m_current_hp:number=1000;
    private m_current_atk:number=10;


    public get Speed(){
        return this.m_speed;
    }
    public get Hp(){
        return this.m_current_hp;
    }
    public get Attack(){
        return this.m_current_atk;
    }

    




        

    
    
}
