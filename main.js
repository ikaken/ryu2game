enchant();



var GoScene;


window.onload = function(){

var core = new Core(1080, 1920);

// シーンを生成する
var _ss = new StoryScene(core);
var _bs = new BattleScene(core);


imglist = ["img/chara2.png","img/chara2s.png","img/chara2b.png","img/フレーム.png","img/背景.png","img/テキストエリア.png","img/主人公.png"]
bgmlist = ["sound/bgm_maoudamashii_fantasy14.mp3","sound/game_maoudamashii_5_town11.mp3","sound/bgm_maoudamashii_fantasy06.mp3","sound/bgm_maoudamashii_fantasy07.mp3","sound/bgm_maoudamashii_fantasy11.mp3"]

  //次のシーンへ遷移する
  GoScene = function(args) {

    //テキストと次へボタンを削除する
    textLayer.removeChild(textLayer.firstChild);
    textLayer.removeChild(textLayer.firstChild);
    textLayer.removeChild(textLayer.lastChild);
    textLayer.removeChild(textLayer.lastChild);
    touchLayer.removeChild(touchLayer.firstChild);
    touchLayer.removeChild(touchLayer.firstChild);
    touchLayer.removeChild(touchLayer.firstChild);
    touchLayer.removeChild(touchLayer.firstChild);

    //ここで関数名と引数のセットを持ってきています
    for (let val in args) {
      this[val](args[val]);
    }

    // return getNextSceneName();
  }



    core.fps = 15;

    core.preload(imglist);
    core.preload(bgmlist);


    core.onload = function(){


        core.bgm = Sound.load('sound/bgm_maoudamashii_fantasy11.mp3');
        core.bgm.volume = 0.3;
        core.bgm.play();
        core.bgm.loop = true;

        

        //レイヤーで管理する
        bgLayer = new Group();
        core.rootScene.addChild(bgLayer);
        
        imageLayer = new Group();
        core.rootScene.addChild(imageLayer);

        taLayer = new Group();
        core.rootScene.addChild(taLayer);
        
        textLayer = new Group();
        core.rootScene.addChild(textLayer);

        frameLayer = new Group();
        core.rootScene.addChild(frameLayer);

        touchLayer = new Group();
        core.rootScene.addChild(touchLayer);

        //テキストエリアとフレームをセットする
        _ss.SetTextAreaImage();
        _ss.SetFrameImage();


        //_ss.SetBackGroundImage("img/背景.png");
        //_ss.SetCharactor("img/主人公.png");
        //_ss.SetCharactor("img/chara2.png");


        /*これが最初のシーンです */
        //_ss.SetBackGroundImage("img/背景.png");
        //_ss.SetChoiceScene(["▶︎ ゲームスタート",'sceneA001',"▶︎ ゲームを始める",'sceneA001']);

        _ss.ExecuteScene(sceneA001);



        //_ss.SetText(['モンスターが現れた！','違った、主人公だったｗ','間違えんなよ！']);
        


    };

    core.start();
};
