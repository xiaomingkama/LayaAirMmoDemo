/*
* 游戲场景层级管理;
*/
class LayerManager {
    static get instance() {
        if (!this._instance) {
            this._instance = new LayerManager();
        }
        return this._instance;
    }
    constructor() {
        this.layerMap = new Map();
    }
    init() {
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
    }
    addChildToLayer(type, sprite, posx = 0, posy = 0) {
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
    getLayer(type) {
        if (this.layerMap.has(type)) {
            return this.layerMap.get(type);
        }
        else {
            console.log(type + "不存在！");
            return false;
        }
    }
    removeChildToLayer(type, sprite) {
        this.layerMap.get(type).removeChild(sprite);
    }
    get mousePos() {
        if (this.layerMap.has(LayerType.rootLayer)) {
            let spr = this.layerMap.get(LayerType.rootLayer);
            return new Laya.Point(spr.mouseX, spr.mouseY);
        }
        else {
            return new Laya.Point();
        }
    }
}
var LayerType;
(function (LayerType) {
    LayerType[LayerType["rootLayer"] = 0] = "rootLayer";
    LayerType[LayerType["mapLayer"] = 1] = "mapLayer";
    LayerType[LayerType["actorLayer"] = 2] = "actorLayer";
    LayerType[LayerType["effectLayer"] = 3] = "effectLayer";
})(LayerType || (LayerType = {}));
//# sourceMappingURL=LayerManager.js.map