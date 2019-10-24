import SGZGameCenter from "../SGZGameCenter";
import Entity from "../Entity/Entity";
import Player from "../Entity/Player/Player";
import EntityManager from "../Entity/EntityManager";
import UIManager from "../UIFrame/UIManager";

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
export default class ActorFactory{
    private FactoryMethod:{[key:string]:Function}={};
    private static ActorID:number=0;
    private m_sgzGameCenter:SGZGameCenter=null;
    
    constructor(center:SGZGameCenter){
        this.m_sgzGameCenter=center;
    }
    
    public Init():void{
        
        this.FactoryMethod["Hero"]=this.CreatHero
        this.FactoryMethod["Player"]=this.CreatPlayer
    }
    public Creat(heroType:string,node:cc.Node){
        console.log(node);
        let aid:number=ActorFactory.GetActorID();
        this.FactoryMethod[heroType](node,aid,this.m_sgzGameCenter.EntityManager);
    }

    //产生英雄
    private CreatHero(node:cc.Node,id:number,manager:EntityManager):void{
        
        
    }
    //产生玩家
    private CreatPlayer(node:cc.Node,id:number,manager:EntityManager):void{
        
        let player:Player=node.addComponent("Player")
        //设定id
        //加入管理
        //增加组件
        player.VInit(id,manager)
    }
    private static GetActorID():number{
        
        ActorFactory.ActorID++;
        
        return ActorFactory.ActorID;
    }
    
}
