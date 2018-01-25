/*
* 场景层级管理;
*/
class HierarchyManager {
    static Instance() {
        if (!this.instance) {
            this.instance = new HierarchyManager();
        }
        return this.instance;
    }
    constructor() {
        this.rootLayer = new Laya.Sprite();
        this.mapLayer = new Laya.Sprite();
        this.actorLayer = new Laya.Sprite();
        this.effectLayer = new Laya.Sprite();
        this.rootLayer.addChild(this.mapLayer);
        this.rootLayer.addChild(this.actorLayer);
        this.rootLayer.addChild(this.effectLayer);
    }
}
// enum LayerType {
//     rootLayer = 0,
//     mapLayer = 1,
//     actorLayer = 2,
//     effectLayer = 3,
// } 
//# sourceMappingURL=HierarchyManager.js.map