
import { _decorator, Component, Constructor, director, Enum, Node } from 'cc';
import { FlexViewUI } from './FlexViewUI';
const { ccclass, property } = _decorator;

@ccclass('FlexGridViewUI')
export class FlexGridViewUI extends FlexViewUI {
    // handle min 3 sizes: phone, pc, tablet(4:3)


    layout() {
        const items = this.node.children
    }
}