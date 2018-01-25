/*
* 程序入口;
*/
class GameEnter {
    constructor() {
        Laya.init(GameConfig.screenW, GameConfig.screenH);
        Laya.Stat.show(Laya.Browser.clientWidth - 120 >> 1, Laya.Browser.clientHeight - 100 >> 1);
        Laya.stage.alignH = Laya.Stage.ALIGN_LEFT;
        Laya.stage.alignV = Laya.Stage.ALIGN_TOP;
        Laya.stage.screenMode = Laya.Stage.SCALE_SHOWALL;
        //初始化游戏管理
        this.InitailzationManager();
        //游戏循环
        Laya.timer.frameLoop(1, this, this.Update);
    }
    InitailzationManager() {
    }
    Update() {
    }
}
let Game = new GameEnter();
var LayerType;
(function (LayerType) {
    LayerType[LayerType["rootLayer"] = 0] = "rootLayer";
    LayerType[LayerType["mapLayer"] = 1] = "mapLayer";
    LayerType[LayerType["actorLayer"] = 2] = "actorLayer";
    LayerType[LayerType["effectLayer"] = 3] = "effectLayer";
})(LayerType || (LayerType = {}));
let layerMap = {};
layerMap["b"] = 20;
layerMap["a"] = 10;
// for (let i in layerMap) {
//     console.log(layerMap[i]);
// }
let m = new Map();
m.set("a", 1);
m.set("b", 10);
m.set("c", 11);
let aa = 100;
m.forEach((a, b) => {
    console.log(aa);
    console.log(a);
    console.log(b);
}, aa);
//# sourceMappingURL=GameEnter.js.map