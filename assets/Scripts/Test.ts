import { _decorator, Component, Node } from 'cc';
import { IPointerDownHandler } from '../_iKame/Scripts/Systems/PointerEvent';
import { GameBehaviour } from '../_iKame/Scripts/Commons/GameBehaviour';
import { Action } from '../_iKame/Scripts/Delegates/Action';
const { ccclass, property } = _decorator;

@ccclass('Test')
export class Test extends GameBehaviour implements IPointerDownHandler {
    private _click = new Action<number>

    protected onLoad(): void {
        this._click.on((a: number) => {
            console.log(a);
        })
    }

    onPointerDown(event: any): void {
        this._click.emit(123)
        console.log("Pointer Down Event Triggered");
    }
    onPointerUp(event: any): void {
        console.log("Pointer Up Event Triggered");
    }
   
}