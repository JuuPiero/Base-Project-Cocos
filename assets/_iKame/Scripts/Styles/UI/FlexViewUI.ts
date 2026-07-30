import { UITransform, view } from "cc";
import { FlexView } from "../FlexView";

export abstract class FlexViewUI extends FlexView {
    protected _uiTransform: UITransform = null;
    protected onLoad(): void {
        this._uiTransform = this.getComponent(UITransform)
    }


    getScreenSize() {
        return view.getVisibleSize(); 
    }

    getContainerSize() {
        return this._uiTransform.contentSize
    }
}