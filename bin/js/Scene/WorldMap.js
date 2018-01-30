/*
* name;
*/
class WorldMap {
    constructor() {
        this.mapUrl = "res/map_001.jpg";
        this.init();
    }
    static get Instance() {
        if (!this.instance) {
            this.instance = new WorldMap();
        }
        return this.instance;
    }
    init() {
        this.container = new Laya.Sprite();
        let spr = Laya.Sprite.fromImage(this.mapUrl);
        this.container.addChild(spr);
    }
}
//# sourceMappingURL=WorldMap.js.map