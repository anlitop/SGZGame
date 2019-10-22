import BaseUIForm from "../UIFrame/BaseUIForm";
import { UIFormType } from "../UIFrame/config/SysDefine";
import UIType from "../UIFrame/UIType";
import AdaptationManager, { AdaptationType } from "../UIFrame/AdaptationManager";
import UIManager from "../UIFrame/UIManager";
import GEventManager from "../UIFrame/GEventManager";

const {ccclass, property} = cc._decorator;

@ccclass
export default class FriendRankForm extends BaseUIForm {

    CurrentUIType = new UIType(UIFormType.Fixed);
    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    start () {
        AdaptationManager.GetInstance().adaptationFormByType(AdaptationType.Left, this.node, 0);
        this.RegisterMessage("FriendInfoChange",this.updateInfo,this)
        this.view._Nodes.Test.on('click',()=>{
            console.log("触发刷新事件")
            this.SendMessage("FriendInfoChange","data")
        },this)
    }
    //方法1使用cocos自带的触摸事件
    menuClick(e: cc.Event.EventTouch, data) {
        let pos = e.getLocation();
        let obj = {
            startPosition: pos
        }
        switch(data) {
            case "update":
                console.log("触发刷新事件")
                this.SendMessage("FriendInfoChange","data")
            break;
        }
    }
    //方法2使用geventmgr

    //方法3使用bind
    
    
    public init(obj?: any) {
        console.log("初始化了朋友排行榜")
        
    }
    updateInfo(e:any):void{
        console.log("刷新数据列表")
    }
    // update (dt) {}
}
