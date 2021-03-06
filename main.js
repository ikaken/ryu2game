enchant();



var Player = enchant.Class.create(enchant.Sprite, {
  initialize: function (core_) {
    enchant.Sprite.call(this, 192, 256);
    this.x = 700;
    this.y = 500;
    this.image = core_.assets['img/syujinkous.png'];
    this.frame = 5;
  },
  attackTo: function (target) {
    console.log("attackTo");
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
      target.damageCheck(60);
    });

    this.tl.moveTo(this.x, this.y, 10);
  }
  
});



var enemy = enchant.Class.create(enchant.Sprite, {
  initialize: function (core_) {
    enchant.Sprite.call(this, 192, 256);
    this.x = 300;
    this.y = 500;
    this.image = core_.assets['img/monnsuta1s.png'];
    this.frame = 5;
    this.hp = 100;
  },
  attackTo: function (target) {
    console.log("attackTo");
    this.tl.moveTo(700, 500, 10);
    this.tl.moveTo(700, 510, 1);
    this.tl.moveTo(700, 500, 1);
    this.tl.moveTo(700, 490, 1);
    this.tl.moveTo(700, 500, 1);

    this.tl.moveTo(700, 510, 1);
    this.tl.moveTo(700, 500, 1);
    this.tl.moveTo(700, 490, 1);
    this.tl.moveTo(700, 500, 1);

    this.tl.then(function () {
      target.tl.moveTo(target.x-10, target.y, 1);
      target.tl.moveTo(target.x, target.y, 1);
      target.damageCheck(10);
    });

    this.tl.moveTo(this.x, this.y, 10);
  },
  damageCheck : function (attackPoint) {
    console.log("damageCheck");
    this.hp -= attackPoint;
    console.log(this.hp); //hp表示

    if (this.hp > 0) {
      let whosay = new Label("monnsutaは" + attackPoint + "のダメージを受けた。");
      whosay.font = "50px monospace";
      whosay.color = "rgb(255, 255, 255)";
      whosay.y = 1300;
      whosay.x = 100;
      whosay.width = 1080 - 200;
      whosay.height = 570;
      whosay.opacity = 0;
      whosay.tl.fadeIn(15);
  
      textLayer.addChild(whosay);
    } else {
      let whosay = new Label("monnsutaを倒した。");
      whosay.font = "50px monospace";
      whosay.color = "rgb(255, 255, 255)";
      whosay.y = 1300;
      whosay.x = 100;
      whosay.width = 1080 - 200;
      whosay.height = 570;
      whosay.opacity = 0;
      whosay.tl.fadeIn(15);
  
      textLayer.addChild(whosay);

      imageLayer.removeChild(this);

    }
  }
});



var GoScene;


window.onload = function(){

var core = new Core(1080, 1920);

// シーンを生成する
var _ss = new StoryScene(core);
var _bs = new BattleScene(core);


//imglist = ["img/jyerupi-ai.png","img/jyerupi-raku.png","img/jyerupi-ki.png","img/jyerupi-do.png","img/tekisutoeria.png","img/fure-mu.png","img/monnsuta1.png","img/monnsuta1s.png","img/monnsuta2.JPG","img/monnsuta3.png","img/monnsuta4.JPG","img/monnsuta5.jpg","img/monnsuta6.png","img/monnsuta7.png","img/monnsuta8.jpg","img/yuyuko-ai.jpg","img/yuyuko-ki-raku.jpg","img/yuyuko-do.jpg","img/syujinkou.png","img/syujinkou2.jpg","img/syujinkou3.jpg","img/syujinkou4.jpg","img/haikei.png"]
//bgmlist = ["sound/bgm_maoudamashii_fantasy14.mp3","sound/game_maoudamashii_5_town11.mp3","sound/bgm_maoudamashii_fantasy06.mp3","sound/bgm_maoudamashii_fantasy07.mp3","sound/bgm_maoudamashii_fantasy11.mp3"]
imglist = ["img/kougeki.png", "img/jyerupi-ai.png", "img/jyerupi-raku.png", "img/jyerupi-ki.png", "img/jyerupi-do.png", "img/tekisutoeria.png", "img/fure-mu.png", "img/monnsuta1.png", "img/monnsuta1s.png", "img/monnsuta2.JPG", "img/monnsuta3.png", "img/monnsuta4.JPG", "img/monnsuta5.jpg", "img/monnsuta6.png", "img/monnsuta7.png", "img/monnsuta8.jpg", "img/yuyuko-ai.jpg", "img/yuyuko-ki-raku.jpg", "img/yuyuko-do.jpg", "img/syujinkou.png", "img/syujinkous.png", "img/syujinkou2.jpg", "img/syujinkou3.jpg", "img/syujinkou4.jpg", "img/haikei.png"]
bgmlist = ["sound/bgm_maoudamashii_fantasy14.mp3", "sound/game_maoudamashii_5_town11.mp3", "sound/bgm_maoudamashii_fantasy06.mp3", "sound/bgm_maoudamashii_fantasy07.mp3", "sound/bgm_maoudamashii_fantasy11.mp3"]

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
    //for (let val in args) {
    //  this[val](args[val]);
    //}
    for (var command in args) {
      var s = (_ss[command])(args[command]);
    }
    console.log("GoScene");

    // return getNextSceneName();
  }

  GoBattleScene = function(args) {
    console.log("GoBattleScene");
    //テキストと次へボタンを削除する
    textLayer.removeChild(textLayer.firstChild);
    textLayer.removeChild(textLayer.firstChild);
    textLayer.removeChild(textLayer.lastChild);
    textLayer.removeChild(textLayer.lastChild);
    touchLayer.removeChild(touchLayer.firstChild);
    touchLayer.removeChild(touchLayer.firstChild);
    touchLayer.removeChild(touchLayer.firstChild);
    touchLayer.removeChild(touchLayer.firstChild);


    var charaImage2 = new Sprite(172, 64);
    charaImage2.image = core.assets["img/kougeki.png"];
    charaImage2.x = 700;
    charaImage2.y = 1100;
    charaImage2.opacity = 0;
    charaImage2.tl.fadeIn(8);
    touchLayer.addChild(charaImage2);


    //プレーヤーの生成表示
    var Player01 = new Player(core);
    imageLayer.addChild(Player01);

    //敵のの生成表示
    var enemy01 = new enemy(core);
    imageLayer.addChild(enemy01);


    //攻撃ボタンタップ
    charaImage2.addEventListener('touchstart', function (e) {

      textLayer.removeChild(textLayer.firstChild);
      textLayer.removeChild(textLayer.firstChild);
      textLayer.removeChild(textLayer.lastChild);
      textLayer.removeChild(textLayer.lastChild);


      Player01.attackTo(enemy01);
//      enemy01.attackTo(Player01);
      
      if (enemy01.hp < 1) {
        _ss.GoNextScene(eval(_ss.GetNextSceneName()));
        //GoScene(eval(_this.GetNextSceneName()));
        console.log("main_nextlabel");
      }

    });





  }

  ScenarioLoop = function(args) {

    for (var command in args) {
      var s = (_ss[command])(args[command]);
    }

    console.log("ScenarioLoop");
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

        //tekisutoeriaとfure-muをセットする
        _ss.SetTextAreaImage();
        _ss.SetFrameImage();


        //_ss.SetBackGroundImage("img/haikei.png");
        //_ss.SetCharactor("img/syujinkou.png");
        //_ss.SetCharactor("img/chara2.png");


        /*これが最初のシーンです */
        //_ss.SetBackGroundImage("img/haikei.png");
        //_ss.SetChoiceScene(["▶︎ ゲームスタート",'sceneA001',"▶︎ ゲームを始める",'sceneA001']);

//        _ss.ExecuteScene(sceneA001);

        ScenarioLoop(sceneA001);


        //_ss.SetText(['monnsutaが現れた！','違った、syujinkouだったｗ','間違えんなよ！']);
        


    };

    core.start();
};
