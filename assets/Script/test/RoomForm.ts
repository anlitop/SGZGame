import BaseUIForm from "../UIFrame/BaseUIForm";
import AdaptationManager, { AdaptationType } from "../UIFrame/AdaptationManager";
import { UIFormType } from "../UIFrame/config/SysDefine";
import UIType from "../UIFrame/UIType";

const {ccclass, property} = cc._decorator;

@ccclass
export default class RoomForm extends BaseUIForm {

    ClickMaskClose = false;
    CurrentUIType = new UIType(UIFormType.Fixed);

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    start () {
        AdaptationManager.GetInstance().adaptationFormByType(AdaptationType.Right, this.node, 20);
    }

    // update (dt) {}
}
