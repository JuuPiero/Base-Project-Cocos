import { _decorator, Component, Constructor, director, Enum, Node, Vec2, Vec3 } from 'cc';
import { AlignItems, JustifyContent } from './LayoutAtribute';
const { ccclass, property } = _decorator;

// @ccclass('FlexView')
export abstract class FlexView extends Component {
    @property({ type: Enum(JustifyContent)}) JustifyContent: JustifyContent = JustifyContent.Center;
    @property({ type: Enum(AlignItems)}) alignItems: AlignItems = AlignItems.Start;
    @property(Vec2) gap: Vec2 = new Vec2();
    
    abstract layout();
}