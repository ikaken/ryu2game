enchant();



var GoScene;


window.onload = function(){

var core = new Core(1080, 1920);

// シーンを生成する
var _ss = new StoryScene(core);
var _bs = new BattleScene(core);


imglist = ["img/じぇるぴ哀.png","img/じぇるぴ楽.png","img/じぇるぴ喜.png","img/じぇるぴ怒.png","img/テキストエリア.png","img/フレーム.png","img/モンスター1.png","img/モンスター1s.png","img/モンスター2.JPG","img/モンスター3.png","img/モンスター4.JPG","img/モンスター5.jpg","img/モンスター6.png","img/モンスター7.png","img/モンスター8.jpg","img/ユユコ哀.jpg","img/ユユコ喜楽.jpg","img/ユユコ怒.jpg","img/主人公.png","img/主人公2.jpg","img/主人公3.jpg","img/主人公4.jpg","img/背景.png"]
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
