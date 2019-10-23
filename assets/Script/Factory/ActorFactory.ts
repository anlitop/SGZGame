import SGZGameCenter from "../SGZGameCenter";
import Entity from "../Entity/Entity";
import Player from "../Entity/Player/Player";

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
    public Creat(heroType:string){
        
        this.FactoryMethod[heroType]();
    }

    //产生英雄
    private CreatHero():void{
        let aid:number=ActorFactory.GetActorID();
        
        //let actor=new 
        console.log("create hero222")
    }
    //产生玩家
    private CreatPlayer():void{
        let aid:number=ActorFactory.GetActorID();
        cc.loader.loadRes("Entity/Player",(err,prefab)=>{
            let e:cc.Node=cc.instantiate(prefab) 
            let e_component:Player=e.addComponent("Player")
            e_component.VInit(aid)
            
        })
        console.log("create hero")
        
        
        
    }
    private static GetActorID():number{
        
        ActorFactory.ActorID++;
        
        return ActorFactory.ActorID;
    }
}
