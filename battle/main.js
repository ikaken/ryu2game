enchant();




var Player = enchant.Class.create(enchant.Sprite, {
  initialize: function (core_) {
    enchant.Sprite.call(this, 192, 256);
    this.x = 900;
    this.y = 700;
    this.image = core_.assets['img/主人公s.png'];
    this.frame = 5;
  },
  attackTo: function (target) {
    console.log("test01");
    this.tl.moveTo(400, 500, 10);
    this.tl.moveTo(400, 510, 1);
    this.tl.moveTo(400, 500, 1);
    this.tl.moveTo(400, 490, 1);
    this.tl.moveTo(400, 500, 1);

    this.tl.moveTo(400, 510, 1);
    this.tl.moveTo(400, 500, 1);
    this.tl.moveTo(400, 490, 1);
    this.tl.moveTo(400, 500, 1);

    this.tl.then(function () {
      target.tl.moveTo(290, 500, 1);
      target.tl.moveTo(300, 500, 1);
    });

    this.tl.moveTo(900, 700, 10);
  }
  
});



var GoScene;


window.onload = function () {

  var core = new Core(1080, 1920);

  // シーンを生成する
  var _ss = new StoryScene(core);
  var _bs = new BattleScene(core);


  imglist = ["img/chara1.png","img/kougeki.png", "img/じぇるぴ哀.png", "img/じぇるぴ楽.png", "img/じぇるぴ喜.png", "img/じぇるぴ怒.png", "img/テキストエリア.png", "img/フレーム.png", "img/モンスター1.png", "img/モンスター1s.png", "img/モンスター2.JPG", "img/モンスター3.png", "img/モンスター4.JPG", "img/モンスター5.jpg", "img/モンスター6.png", "img/モンスター7.png", "img/モンスター8.jpg", "img/ユユコ哀.jpg", "img/ユユコ喜楽.jpg", "img/ユユコ怒.jpg", "img/主人公.png", "img/主人公s.png", "img/主人公2.jpg", "img/主人公3.jpg", "img/主人公4.jpg", "img/背景.png"]
  bgmlist = ["sound/bgm_maoudamashii_fantasy14.mp3", "sound/game_maoudamashii_5_town11.mp3", "sound/bgm_maoudamashii_fantasy06.mp3", "sound/bgm_maoudamashii_fantasy07.mp3", "sound/bgm_maoudamashii_fantasy11.mp3"]

  //次のシーンへ遷移する
  GoScene = function (args) {

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


  core.onload = function () {



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



    var charaImage1 = new Sprite(192, 256);
    charaImage1.image = core.assets["img/モンスター1s.png"];
    charaImage1.x = 300;
    charaImage1.y = 500;
    charaImage1.opacity = 0;
    charaImage1.tl.fadeIn(8);
    imageLayer.addChild(charaImage1);


    var charaImage = new Sprite(192, 256);
    charaImage.image = core.assets["img/主人公s.png"];
    charaImage.x = 700;
    charaImage.y = 500;
    charaImage.opacity = 0;
    charaImage.tl.fadeIn(8);
    imageLayer.addChild(charaImage);

    var charaImage2 = new Sprite(172, 64);
    charaImage2.image = core.assets["img/kougeki.png"];
    charaImage2.x = 700;
    charaImage2.y = 1100;
    charaImage2.opacity = 0;
    charaImage2.tl.fadeIn(8);
    touchLayer.addChild(charaImage2);



    var Player01 = new Player(core);
    imageLayer.addChild(Player01);



    charaImage2.addEventListener('touchstart', function (e) {
      
      charaImage.tl.moveTo(400, 500, 10);
      charaImage.tl.moveTo(400, 510, 1);
      charaImage.tl.moveTo(400, 500, 1);
      charaImage.tl.moveTo(400, 490, 1);
      charaImage.tl.moveTo(400, 500, 1);

      charaImage.tl.moveTo(400, 510, 1);
      charaImage.tl.moveTo(400, 500, 1);
      charaImage.tl.moveTo(400, 490, 1);
      charaImage.tl.moveTo(400, 500, 1);

      charaImage.tl.then(function () {
        charaImage1.tl.moveTo(290, 500, 1);
        charaImage1.tl.moveTo(300, 500, 1);
      });

      charaImage.tl.moveTo(700, 500, 10);
      
      charaImage.tl.then(function () {
        Player01.attackTo(charaImage1);
      });

    });




    // 歩き出す
    //Player.attackTo();




  };

  core.start();
};




