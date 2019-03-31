

titlescene = {
  'DeleteCharactor':"",
  'SetBackGroundImage' : 'img/haikei.png',
  'SetChoiceScene': [" ▶︎ 話し合う","sceneA001"," ▶︎ 戦う","sceneB001"],
}



sceneB001 = {
  'DeleteCharactor':"",
  //バトル
  'GoBattleScene' : "",
  'SetNextSceneName' : 'sceneA001'
}




sceneA001 = {
  'DeleteCharactor':"",
  'SetBackGroundImage' : 'img/haikei.png',
  'PlayBGM' : 'sound/bgm_maoudamashii_fantasy11.mp3',
  'SetCharactor': 'img/syujinkou.png',
  'SetText': ['monnsutaが現れた！','違った、syujinkouだったｗ','間違えんなよ！'],
  'SetNextSceneName' : 'sceneA002'
}

sceneA002 = {
  'DeleteCharactor':"",
  'SetBackGroundImage' : 'img/haikei.png',
  'SetCharactor': 'img/syujinkou4.jpg',
  'SetText': ['syujinkouが現れた','','・・・で？'],
  'SetNextSceneName' : 'sceneA003'
}

sceneA003 = {
  'DeleteCharactor':"",
  'SetBackGroundImage' : 'img/haikei.png',
  'SetCharactor': 'img/monnsuta1.png',
  'SetText': ["monnsutaが現れた！","本当に現れた！？","寿限無、寿限無  五劫の擦り切れ  海砂利水魚の  水行末 雲来末 風来末  食う寝る処に住む処  藪ら柑子の藪柑子  パイポ　パイポ　パイポのシューリンガン  シューリンガンのグーリンダイ  グーリンダイのポンポコピーのポンポコナーの  長久命の長助"],
  'SetNextSceneName' : 'sceneA004'
}


sceneA004 = {
  'DeleteCharactor':"",
  'SetBackGroundImage' : 'img/haikei.png',
  'SetCharactor': 'img/monnsuta2.JPG',
  'SetText': ["monnsutaが現れた！","また現れた！？"],
  'SetNextSceneName' : 'sceneA005'
}

sceneA005 = {
  'DeleteCharactor':"",
  'SetBackGroundImage' : 'img/haikei.png',
  'SetCharactor': 'img/monnsuta3.png',
  'SetText': ["monnsutaが現れた！","また現れた！？"],
  'SetNextSceneName' : 'sceneA006'
}

sceneA006 = {
  'DeleteCharactor':"",
  'SetBackGroundImage' : 'img/haikei.png',
  'SetCharactor': 'img/jyerupi-raku.png',
  'SetText': ["jyerupi","何匹出てくるのでしょうか・・・"],
  'SetNextSceneName' : 'sceneA007'
}

sceneA007 = {
  'DeleteCharactor':"",
  'SetBackGroundImage' : 'img/haikei.png',
  'SetCharactor': 'img/monnsuta4.JPG',
  'SetText': ["monnsutaが現れた！","まだまだ出てくる！"],
  'SetNextSceneName' : 'sceneA008'
}

sceneA008 = {
  'DeleteCharactor':"",
  'SetBackGroundImage' : 'img/haikei.png',
  'SetCharactor': 'img/monnsuta5.jpg',
  'SetText': ["monnsutaが現れた！","まだまだ出てくる！"],
  'SetNextSceneName' : 'sceneA009'
}


sceneA009 = {
  'DeleteCharactor':"",
  'SetBackGroundImage' : 'img/haikei.png',
  'SetCharactor': 'img/monnsuta6.png',
  'SetText': ["monnsutaが現れた！","まだまだ出てくる！"],
  'SetNextSceneName' : 'sceneA010'
}


sceneA010 = {
  'DeleteCharactor':"",
  'SetBackGroundImage' : 'img/haikei.png',
  'SetCharactor': 'img/monnsuta7.png',
  'SetText': ["monnsutaが現れた！","まだまだ出てくる！"],
  'SetNextSceneName' : 'sceneA011'
}


sceneA011 = {
  'DeleteCharactor':"",
  'SetBackGroundImage' : 'img/haikei.png',
  'SetCharactor': 'img/monnsuta8.jpg',
  'SetText': ["monnsutaが現れた！","まだまだ出てくる！"],
  'SetNextSceneName' : 'sceneA012'
}


sceneA012 = {
  'DeleteCharactor':"",
  'SetBackGroundImage' : 'img/haikei.png',
  'SetCharactor': 'img/yuyuko-do.jpg',
  'SetText': ["yuyuko","monnsuta多いよ！"],
  'SetNextSceneName' : 'titlescene'
}

sceneA013 = {
  'DeleteCharactor':"",
  'SetBackGroundImage' : 'img/haikei.png',
  'SetCharactor': 'img/yuyuko-do.jpg',
  'SetText': ["yuyuko","monnsuta多いよ！"],
  'SetNextSceneName' : 'sceneA004'
}


scene4A = {
  'AddPlayerStatusPlane' : ['nenepoint',1],
  'SetText': ['ねね','ふーん　ってあんまり興味ないの？','彼女いないくせに（笑）'],
  'SetNextSceneName':'scene5'
}


scene35B3 = {
  'AddPlayerStatusPlane' : ['nenepoint',1],
  'SetText': ["ねね","・・・・・・・・・","あんたらしいわね・・・・・"],
  'SetNextSceneName' : 'scene35B4'
}

scene32 = {
  'SelectMethod': ['nenepoint >=4','scene33A','scene33B'],
}

scene37 = {
  'SelectMethodHasTrue': ['みやがスパイの話を聞いた ==true','scene38A','scene38B'],
}

scene76A = {
    'AddPlayerStatusFlag' : ["ねねに会いたい",true],
    'SetText': ["","ねねだ！","とりあえず今日は寝るか・・・"],
    'SetNextSceneName' : 'scene80'
}
