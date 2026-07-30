
import { _decorator, Component, Constructor, director, Enum, Node } from 'cc';
import { AlignItems, JustifyContent } from './LayoutAtribute';
import { FlexView } from './FlexView';
const { ccclass, property } = _decorator;

@ccclass('FlexHorizontalView')
export class FlexHorizontalView extends FlexView {
    layout() {
        const items = this.node.children
    }
}