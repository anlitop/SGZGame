import CharacterFactory from "./Factory/CharacterFactory";
import { create } from "domain";

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
    private m_characterFactory:CharacterFactory=new CharacterFactory(this);

    //游戏系统


    //游戏界面


    public Initinal():void{
        console.log("init")
        this.m_characterFactory.Init();
        
    }
    public Update():void{}



    //产生英雄
    public CreateHero(){
        this.m_characterFactory.Creat("Hero")
    }

    
}
