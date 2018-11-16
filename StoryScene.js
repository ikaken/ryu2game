class StoryScene{

  //コンストラクタ
  constructor(core){
    this.core = core;
    //特に処理なしにしています
  }


  PlayBGM(args){
    this.core.bgm.stop();
    this.core.bgm = Sound.load(args);
    this.core.bgm.volume = 0.3;
    this.core.bgm.play();
    this.core.bgm.loop = true;
  }
  
    //背景画像をシーンに設定する
    SetBackGroundImage(args){
        let backImage = new Sprite(1080, 1920);
        backImage.image = this.core.assets[args];
        backImage.x = 0;
        backImage.y = 0;
        bgLayer.addChild(backImage);
    }
      //テキストエリアをシーンに設定する
      SetTextAreaImage(){
        let taImage = new Sprite(1080, 570);
        taImage.image = this.core.assets["img/テキストエリア.png"];
        taImage.x = 0;
        taImage.y = 1220;
        taLayer.addChild(taImage);
    }
      //フレームをシーンに設定する
      SetFrameImage(){
        let frameImage = new Sprite(1080, 1920);
        frameImage.image = this.core.assets["img/フレーム.png"];
        frameImage.x = 0;
        frameImage.y = 0;
        frameLayer.addChild(frameImage);
    }

    //キャラクターをシーンに設定する
    SetCharactor(args){
      let charaImage = new Sprite(768, 1024);
      charaImage.image = this.core.assets[args];
      charaImage.x = 100;
      charaImage.y = 400;
      //charaImage.tl.moveTo(174, 30, 30);
      charaImage.opacity = 0;
      charaImage.tl.fadeIn(8);
      imageLayer.addChild(charaImage);
  }
  
    //左側のキャラクターをシーンに設定する
    SetCharactorLeft(args){
  
      let charaImage = new Sprite(150,165);
      charaImage.image = this.core.assets[args];
      charaImage.x = 10;
      charaImage.y = 15;
      //charaImage.tl.moveTo(174, 30, 30);
      charaImage.opacity = 0;
      charaImage.tl.fadeIn(8);
      imageLayer.addChild(charaImage);


  }

    //右側のキャラクターをシーンに設定する
    SetCharactorRight(args){
      let charaImage = new Sprite(150,165);
      charaImage.image = this.core.assets[args];
      charaImage.x = 180;
      charaImage.y = 15;
      charaImage.opacity = 0;
      charaImage.tl.fadeIn(8);
      imageLayer.addChild(charaImage);
    }
  
  
    //テキストをシーンに設定する
    SetText(args){
      //フラグ用使いまわします。
        let i = 1;
      　  //引数例　["ねね","あっ！進！","おはよう","今日は転校生が来るんだよね！","噂だと女の子なんだって！"],
      　  //iは初期値1なのは、発言者だからです。
          //発言者がいない場合は無視する
          if(args[0] != ""){
          let whosay = new Label("「" + args[0] + "」");
          whosay.font  = "50px monospace";
          whosay.color = "rgb(255, 255, 255)";
          whosay.y     = 1300;
          whosay.x     = 100;
          whosay.width = 1080;
          whosay.height = 570;
          whosay.opacity = 0;
          whosay.tl.fadeIn(15);
  
          textLayer.addChild(whosay);
  
        }
  
          //発言内容を表示する
          let text = new Label( args[i] );
          text.font  = "50px monospace";
          text.color = "rgb(255, 255, 255)";
          text.y     = 1400;
          text.x     = 100;
          text.width = 1080;
          text.height = 570;
  
          text.opacity = 0;
          text.tl.fadeIn(15);
  
          textLayer.addChild(text);
  
          //次へボタン
          let nextlabel = new Label("< ▼ >");
          nextlabel.font  = "50px monospace";
          nextlabel.color = "rgb(255, 255, 255)";
          nextlabel.y     = 1690;
          nextlabel.x = 850;
          nextlabel.opacity = 0;
          nextlabel.tl.fadeIn(20);
          textLayer.addChild(nextlabel);
  
          //戻るボタン
          let backLabel = new Label("< ▲ >");
          backLabel.font  = "50px monospace";
          backLabel.color = "rgb(255, 255, 255)";
          backLabel.y     = 1690;
          backLabel.x = 50;
          backLabel.opacity = 0;
          backLabel.tl.fadeIn(20);
          textLayer.addChild(backLabel);
  
  
  
          //次へボタン
          //配列に要素があればラベルを書き換える
          nextlabel.addEventListener('touchstart',function(e){
              if(i != args.length -1){
                  i++;
                  text.text = args[i];
                }else{
                  //セリフの配列が空になった時に次のシーンへ飛ばす
                  executeNext(eval(getNextSceneName()));
                }
          });
  
          //戻るボタン
          backLabel.addEventListener('touchstart',function(e){
            if(i != 1){
                i--;
                text.text = args[i];
            }else{
              //処理なし
            }
          });
  
  
      }//end SetText
  
  
  
    SetNextSceneName(name){
        this.nextSceneName = name;
    }
  
  
    //次のシーンへ遷移する
    GoNextScene(args){
  
  
      //テキストと次へボタンを削除する
      textLayer.removeChild(textLayer.firstChild);
      textLayer.removeChild(textLayer.firstChild);
      textLayer.removeChild(textLayer.lastChild);
      textLayer.removeChild(textLayer.lastChild);
      textLayer.removeChild(textLayer.firstChild);
  
  
      //ここで関数名と引数のセットを持ってきています
        for(let val in args){
            _currentScene[val](args[val]);
        }
  
    }
  
  
  
  
  
  
  /*       選択肢のある画面です             */
  
  SetChoiceScene(args){
    //選択肢１
    let text = new Label(args[0]);
    text.font  = "16px monospace";
    text.color = "rgb(255, 255, 255)";
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
    text2.color = "rgb(255, 255, 255)";
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
  
  
  //関数名おかしいですが・・・
  //スコアポイント系に使えます
  AddPlayerStatusPlane(args){
      //ただポイントを付与するだけです。
      player.status[args[0]] += args[1];
  }
  
  //フラグ系に使います
  AddPlayerStatusFlag(args){
      player.status[args[0]] = args[1];
  }
  
  
  
  
  DeleteCharactor(){
    //背景を削除する
    bgLayer.removeChild(bgLayer.firstChild);
    //キャラクターを削除する
    imageLayer.removeChild(imageLayer.firstChild);
    imageLayer.removeChild(imageLayer.lastChild);
  }
  
  
  
  //条件(int)によって処理を変えるメソッド
  //主にプレイヤーのポイントによって処理を変えるメソッドをここに追加します
  //引数例　 ['miyapoint >=7','kokihinto3','scene74a']
  SelectMethod(args){
  
        var prop = args[0].split(' ');
        var siki = player.status[prop[0]] + prop[1];
  
      if(eval(siki)){
        this.GoNextScene(eval(args[1]));
      }else{
        this.GoNextScene(eval(args[2]));
      }
  }
  
  
  //条件式(bool)によって遷移先のシーンを変えることができます
  //引数例　['みやがスパイの話を聞いた ==true','scene38A','scene38B']
  SelectMethodHasTrue(args){
  
        var prop = args[0].split(' ');
        var siki = player.status[prop[0]] + prop[1];
  
        if(eval(siki)){
          this.GoNextScene(eval(args[1]));
        }else{
          this.GoNextScene(eval(args[2]));
      }
  
  }
  
  

} //End Class