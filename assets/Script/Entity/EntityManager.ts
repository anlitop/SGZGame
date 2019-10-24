import Entity from "./Entity";
import UILoader from "../UIFrame/UILoader"
import ActorFactory from "../Factory/ActorFactory";
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
export default class EntityManager{
    private m_SGZGameCenter:SGZGameCenter:null;
    private m_EntityResCache:{[key:string]:cc.Prefab}={}
    private m_ActorFactory:ActorFactory=null;
    private static _instance:EntityManager=null;

    public EntityDict:{[key:number]:Entity}={}

    constructor(center:SGZGameCenter){
        this.m_SGZGameCenter=center;
    }
    //对外接口
    public async ShowEntity(name:string,obj?:any){
        return await this.LoadEntityByResCache(name).then(
            (node)=>{
                this.m_SGZGameCenter.CreateHero(node)
            }
        )
    }
    public AddEntityToDict(entity:Entity){
        this.EntityDict[entity.EntityId]=entity;
        console.log(entity.EntityId+"加入实体字典");
    }
    private async LoadEntityByResCache(name:string){
        let prefab = this.m_EntityResCache[name];
        let node:cc.Node=null;
        if(prefab==null){
            node = await this.LoadEntity(name) as cc.Node;
        }
        return node;
        
    }
    private async LoadEntity(name:string){
        if(name == "" || name == null){
            return ;
        }
        let prefab = await UILoader.getInstance().loadRes(name,cc.Prefab) as cc.Prefab;

        if(prefab==null){
            return
        }
        let node =cc.instantiate(prefab)
        
        console.log(node.name+"生成了，但未加入舞台~")
        this.m_EntityResCache[name]=prefab;
        return node;
    }





    

    
}
