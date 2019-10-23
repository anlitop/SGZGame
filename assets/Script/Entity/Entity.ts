import EntityComponent from "./EntityComponent";

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
export default class Entity extends cc.Component {

    protected m_entityID:number=-1;
    protected m_components:{[componentID:number]:EntityComponent}={};

    
    public get EntityId(){
        
        return this.m_entityID;
    }

    public GetEntityComponent(cid:number):string{

        //加一个判定

        return ("从m_components返回")
    }

    public VInit(aid:number):void{

        this.m_entityID=aid;

        //component
        
    }
    public VDestory():void{}
    public VUpdate():void{}

    protected AddEntityComponent(e_component:EntityComponent):void{
        this.m_components[e_component.EntityComponentID]=e_component;
    }
}
