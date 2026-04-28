import { _decorator, Component, Node } from 'cc';
import { IPointerDownHandler } from '../_iKame/Scripts/Systems/PointerEvent';
import { GameBehaviour } from '../_iKame/Scripts/Commons/GameBehaviour';
const { ccclass, property } = _decorator;

@ccclass('Test')
export class Test extends GameBehaviour implements IPointerDownHandler {
    onPointerDown(event: any): void {
        console.log("Pointer Down Event Triggered");
    }
    onPointerUp(event: any): void {
        console.log("Pointer Up Event Triggered");
    }
   
}
