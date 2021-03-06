/*
* 游戲场景层级管理;
*/
class LayerManager {

    public static get instance(): LayerManager {
        if (!this._instance) {
            this._instance = new LayerManager();
        }
        return this._instance;
    }

    private static _instance: LayerManager;

    //游戏层级管理
    private layerMap: Map<LayerType, Laya.Sprite>;

    constructor() {
        this.layerMap = new Map();
    }

    public init() {
        let root = new Laya.Sprite();
        let map = new Laya.Sprite();
        let actor = new Laya.Sprite();
        let effect = new Laya.Sprite();

        this.layerMap.set(LayerType.rootLayer, root);
        this.layerMap.set(LayerType.mapLayer, map);
        this.layerMap.set(LayerType.actorLayer, actor);
        this.layerMap.set(LayerType.effectLayer, effect);

        root.addChild(map);
        root.addChild(actor);
        root.addChild(effect);

        Laya.stage.addChild(root);
    }

    public addChildToLayer(type: LayerType, sprite: Laya.Sprite, posx: number = 0, posy: number = 0): boolean {

        let layer = this.layerMap.get(type);
        if (layer) {
            layer.addChild(sprite);
            sprite.pos(posx, posy);
            return true;
        }
        else {
            console.log(type + "层不存在！");
            return false;
        }
    }

    public getLayer(type: LayerType): Laya.Sprite | any {

        if (this.layerMap.has(type)) {
            return this.layerMap.get(type);
        }
        else {
            console.log(type + "不存在！");
            return false;
        }
    }

    public removeChildToLayer(type: LayerType, sprite: Laya.Sprite) {
        this.layerMap.get(type).removeChild(sprite);
    }


    public get mousePos(): Laya.Point {
        if (this.layerMap.has(LayerType.rootLayer)) {
            let spr = this.layerMap.get(LayerType.rootLayer);
            return new Laya.Point(spr.mouseX, spr.mouseY);
        }
        else {
            return new Laya.Point();
        }
    }

}

enum LayerType {
    rootLayer = 0,
    mapLayer = 1,
    actorLayer = 2,
    effectLayer = 3,
}