class StoryScene{

  //コンストラクタ
  constructor(){
    //特に処理なしにしています
  }


  //背景画像をシーンに設定する
  SetBackGroundImage(args){
      let backImage = new Sprite(320,180);
      backImage.image = core.assets[args];
      backImage.x = 0;
      backImage.y = 0;
      bgLayer.addChild(backImage);
  }

/*       選択肢のある画面です             */

SetChoiceScene(args){
  //選択肢１
  let text = new Label(args[0]);
  text.font  = "16px monospace";
  text.color = "rgb(0, 0, 0)";
  text.y     = 180;
  text.x = 10;
  text.width = 300;
  text.height = 120;

  textLayer.addChild(text);

  //シーン名が渡されます
  text.addEventListener('touchstart',function(e){
        executeNext(eval(args[1]));
  });

  //選択肢２
  let text2 = new Label(args[2]);
  text2.font  = "16px monospace";
  text2.color = "rgb(0, 0, 0)";
  text2.y     = 230;
  text2.x = 10;
  text2.width = 300;
  text2.height = 120;

  textLayer.addChild(text2);

  //シーン名が渡されます
  text2.addEventListener('touchstart',function(e){
      executeNext(eval(args[3]));
  });


}

} //End Class