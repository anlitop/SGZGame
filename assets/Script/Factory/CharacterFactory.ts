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
export default class CharacterFactory{
    private FactoryMethod:{[key:string]:Function}={}
    private m_sgzGameCenter:SGZGameCenter=null;
    
    constructor(center:SGZGameCenter){
        this.m_sgzGameCenter=center;
    }
    
    public Init():void{
        
        this.FactoryMethod["Hero"]=this.CreatHero
    }
    public Creat(heroType:string){
        
        this.FactoryMethod[heroType]();
    }

    //产生英雄
    private CreatHero():void{
        console.log("create hero")
    }
}
