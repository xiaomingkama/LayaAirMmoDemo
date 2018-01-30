/*
* name;
*/
class InputManager {

    public static get instance(): InputManager {
        if (!this._instance) {
            this._instance = new InputManager();
        }
        return this._instance;
    }

    private static _instance: InputManager;

    constructor() {
        this.init();
    }

    public init() {
        Laya.stage.on(Laya.Event.MOUSE_DOWN, this, this.mouseHandler);
    }

    private mouseHandler(e: Event) {
        let pos = LayerManager.instance.mousePos;
        Player.instance.moveTo(pos);
    }
}