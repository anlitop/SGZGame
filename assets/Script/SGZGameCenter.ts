import ActorFactory from "./Factory/ActorFactory"
import { create } from "domain";
import EntityManager from "./Entity/EntityManager";
import BattleManager from "./Manager/BattleManager";

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
export default class SGZGameCenter{

    //单例
    private static m_sgzGameCenter:SGZGameCenter=null;
    public static get Instance(){
        if(SGZGameCenter.m_sgzGameCenter==null){
            this.m_sgzGameCenter=new SGZGameCenter()
        }
        return this.m_sgzGameCenter
    }
    //游戏通用系统
    public ActorFactory:ActorFactory=new ActorFactory(this);
    public EntityManager:EntityManager=new EntityManager(this);
    

    //游戏系统
    public BattleManger:BattleManager=new BattleManager(this);

    //游戏界面


    public Initinal():void{
        
        this.ActorFactory.Init();
        this.BattleManger.VInit();
        
        
        
        
    }
    public Update():void{
        
    }



    //产生英雄
    public Create(node:cc.Node,name:string){
        this.ActorFactory.Creat(name,node);
    }
    

    
}
