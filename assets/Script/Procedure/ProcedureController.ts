import IProcedure from "./IProcedure";

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
export default class ProcedureController {
    private static m_instance:ProcedureController=null;
    private m_procedure:IProcedure;
    private m_bRunBegin:boolean=false;
    private m_isloadingScene:boolean=false;

    constructor(){}
    public static get Instance(){
        if(ProcedureController.m_instance==null){
            ProcedureController.m_instance=new ProcedureController()
        }
        return ProcedureController.m_instance;
    }
    //设置状态
    public SetProcedure(procedure:IProcedure,loadSceneName:string):void{
        this.m_bRunBegin=false;

        //上一个状态结束
        if(this.m_procedure!=null){
            this.m_procedure.ProcedureEnd();
        }
        //设置
        this.m_procedure=procedure
    }
    
    //更新状态
    public ProcedureUpdate():void{
        //判断资源加载
        if(this.m_isloadingScene){
            return;
        }
        //新流程开始
        if(this.m_procedure!=null && this.m_bRunBegin==false){
            this.m_procedure.ProcedureBegin();
            this.m_bRunBegin=true;
        }
        if(this.m_procedure!=null){
            this.m_procedure.ProcedureUpdate()
        }
    }
    //加载场景
    private LoadScene(name:string,onSceneLaunched:Function):void{
        if(name==null || name.length==0){
            return;
        }
        this.m_isloadingScene=true;
        cc.director.loadScene(name,onSceneLaunched);
    }
    //是否加载完成
    private onSceneLaunched():void{
        this.m_isloadingScene=false;
    }
    
}
