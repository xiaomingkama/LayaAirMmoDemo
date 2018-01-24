/*
* 场景层级管理;
*/
class HierarchyManager {

    private static instance: HierarchyManager;

    private static Instance(): HierarchyManager {
        if (!this.instance) {
            this.instance = new HierarchyManager();
        }
        return this.instance;
    }

    

    private rootLayer: Laya.Sprite;

    private mapLayer: Laya.Sprite;
    private actorLayer: Laya.Sprite;
    private effectLayer: Laya.Sprite;

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