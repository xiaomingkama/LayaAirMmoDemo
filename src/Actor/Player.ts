/*
* name;
*/
class Player {

    public static get instance(): Player {
        if (!this._instance) {
            this._instance = new Player();
        }
        return this._instance;
    }
    private static _instance: Player;

    public container: Laya.Sprite;

    private tween: Laya.Tween;

    constructor() {
        this.container = new Laya.Sprite();
        let spr = Laya.Sprite.fromImage("res/player.png");
        this.container.addChild(spr);
        spr.x -= 48;
        spr.y -= 48;
    }

    public moveTo(pos: Laya.Point) {
        if (this.tween) {
            this.tween.clear();
        }
        this.tween = Laya.Tween.to(this.container, { x: pos.x, y: pos.y }, 1000);
    }

}