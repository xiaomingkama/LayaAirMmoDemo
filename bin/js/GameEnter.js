/*
* 程序入口;
*/
class GameEnter {
    constructor() {
        Laya.init(GameConfig.screenW, GameConfig.screenH);
        Laya.Stat.show(Laya.Browser.clientWidth - 120 >> 1, Laya.Browser.clientHeight - 100 >> 1);
        Laya.stage.alignH = Laya.Stage.ALIGN_LEFT;
        Laya.stage.alignV = Laya.Stage.ALIGN_TOP;
        Laya.stage.screenMode = Laya.Stage.SCALE_NOSCALE;
        //初始化游戏管理
        LayerManager.instance.init();
        InputManager.instance.init();
        LayerManager.instance.addChildToLayer(LayerType.mapLayer, WorldMap.Instance.container);
        LayerManager.instance.addChildToLayer(LayerType.actorLayer, Player.instance.container);
        Laya.stage.addChild(LayerManager.instance.getLayer(LayerType.rootLayer));
        //游戏循环
        Laya.timer.frameLoop(1, this, this.Update);
    }
    Update() {
    }
}
let Game = new GameEnter();
//# sourceMappingURL=GameEnter.js.map