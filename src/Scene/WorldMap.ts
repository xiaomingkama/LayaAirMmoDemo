/*
* name;
*/
class WorldMap {

    public static get Instance(): WorldMap {

        if (!this.instance) {
            this.instance = new WorldMap();
        }
        return this.instance;
    }
    public container: Laya.Sprite;

    private mapUrl: string = "res/map_001.jpg";

    private static instance: WorldMap;
    constructor() {
        this.init();
    }

    public init() {
        this.container = new Laya.Sprite();
        let spr = Laya.Sprite.fromImage(this.mapUrl);
        this.container.addChild(spr);
    }
}