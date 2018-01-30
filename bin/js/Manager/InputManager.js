/*
* name;
*/
class InputManager {
    static get instance() {
        if (!this._instance) {
            this._instance = new InputManager();
        }
        return this._instance;
    }
    constructor() {
        this.init();
    }
    init() {
        Laya.stage.on(Laya.Event.MOUSE_DOWN, this, this.mouseHandler);
    }
    mouseHandler(e) {
        let pos = LayerManager.instance.mousePos;
        Player.instance.moveTo(pos);
    }
}
//# sourceMappingURL=InputManager.js.map