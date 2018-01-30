/*
* name;
*/
class Player {
    static get instance() {
        if (!this._instance) {
            this._instance = new Player();
        }
        return this._instance;
    }
    constructor() {
        this.container = new Laya.Sprite();
        let spr = Laya.Sprite.fromImage("res/player.png");
        this.container.addChild(spr);
        //spr.x -= 48;
        //spr.y -= 48;
    }
    moveTo(pos) {
        if (this.tween) {
            this.tween.clear();
        }
        this.tween = Laya.Tween.to(this.container, { x: pos.x, y: pos.y }, 1000);
    }
}
//# sourceMappingURL=Player.js.map