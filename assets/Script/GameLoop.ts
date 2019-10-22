import ProcedureController from "./Procedure/ProcedureController";
import MainProcedure from "./Procedure/MainProcedure";
import UIManager from "./UIFrame/UIManager";

const {ccclass, property} = cc._decorator;
@ccclass
export default class GameLoop extends cc.Component {

    //private m_procedureController:ProcedureController=new ProcedureController();
    awake(){}
    start(){
        ProcedureController.Instance.SetProcedure(
            new MainProcedure(ProcedureController.Instance),"")

        //UIManager.GetInstance().ShowUIForms()
    }
    update(dt){
        ProcedureController.Instance.ProcedureUpdate();
    }
}
