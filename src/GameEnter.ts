
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

    private InitailzationManager() {

    }
    private Update() {

    }
}

let Game = new GameEnter();