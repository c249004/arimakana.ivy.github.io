// ローディング画面
window.addEventListener('load', () => {
  const loadingScreen = document.getElementById('loading-screen');
  // 10秒後にローディング画面を非表示にして音楽を再生
  setTimeout(() => {
    loadingScreen.style.display = 'none';
    playMusic();
  }, 10000);
});

// 音楽再生
function playMusic() {
  const audio = new Audio('audio/background-music.mp3');
  audio.play();
  setTimeout(() => audio.pause(), 10000);
}

// スライドショー
let currentSlide = 0;
const slides = document.querySelectorAll('#slider .slide');

function showSlides() {
  slides[currentSlide].classList.remove('active');
  currentSlide = (currentSlide + 1) % slides.length;
  slides[currentSlide].classList.add('active');
}

// 5秒ごとにスライドを切り替える
setInterval(showSlides, 5000);


// キャラ紹介スライドショー
let charIndex = 0;
function showNextCharacter() {
  const characters = document.querySelectorAll('#character-slideshow img');
  characters[charIndex].style.display = 'none'; // 現在の画像を非表示
  charIndex = (charIndex + 1) % characters.length; // 次の画像のインデックス
  characters[charIndex].style.display = 'block'; // 次の画像を表示
}
// 3秒ごとにキャラ紹介スライドを切り替える
setInterval(showNextCharacter, 3000); // 3秒ごとに画像を切り替え



// 血液型占い
function showFortune() {
  const bloodType = document.getElementById('blood-type').value.toUpperCase();
  const fortunes = {
    A: ["今日のあなたはアイ！異性とのトラブルに気を付けて！", "今日のあなたはルビー！カラスについて行くと新たな発見があるかも！", "今日のあなたは有馬かな！気になるあの人とスーツケースを買いに行くと関係性が深まるかも！", "今日のあなたはめむちょ！周りに振り回される毎日だけど自分の事も大事にしてあげて！"],
    B: ["今日のあなたはルビー！カラスについて行くと新たな発見があるかも！", "今日のあなたはルビー！カラスについて行くと新たな発見があるかも！に！", "今日のあなたは有馬かな！気になるあの人とスーツケースを買いに行くと関係性が深まるかも！", "今日のあなたはめむちょ！周りに振り回される毎日だけど自分の事も大事にしてあげて！"],
    O: ["今日のあなたはアイ！異性とのトラブルに気を付けて！", "今日のあなたはルビー！カラスについて行くと新たな発見があるかも！", "今日のあなたは有馬かな！気になるあの人とスーツケースを買いに行くと関係性が深まるかも！！", "今日のあなたはめむちょ！周りに振り回される毎日だけど自分の事も大事にしてあげて！"],
    AB: ["今日のあなたはアイ！異性とのトラブルに気を付けて！。", "今日のあなたはルビー！カラスについて行くと新たな発見があるかも！", "今日のあなたは有馬かな！気になるあの人とスーツケースを買いに行くと関係性が深まるかも！。", "今日のあなたはめむちょ！周りに振り回される毎日だけど自分の事も大事にしてあげて！"],
  };

  // 血液型が正しいかチェック
  if (fortunes[bloodType]) {
    // 血液型が有効ならランダムに運勢を選択して表示
    const randomIndex = Math.floor(Math.random() * fortunes[bloodType].length);
    document.getElementById('fortune-result').textContent = fortunes[bloodType][randomIndex];
  } else {
    // 無効な血液型が入力された場合のエラーメッセージ
    document.getElementById('fortune-result').textContent = "正しい血液型を入力してください。";
  }
}

// 星（尊）を生成する関数
function createStar() {
  const starField = document.getElementById('star-field');
  const star = document.createElement('div');
  star.classList.add('star');

  // 「尊」のテキストを設定
  star.textContent = '尊';

  // ランダムな位置とアニメーション時間を設定
  star.style.left = `${Math.random() * 100}vw`;
  star.style.animationDuration = `${Math.random() * 5 + 5}s`; // 5～10秒の間で動く
  star.style.animationDelay = `${Math.random() * 3}s`; // 最大3秒の遅延

  starField.appendChild(star);

  // 10秒後に星（尊）を削除
  setTimeout(() => {
    star.remove();
  }, 10000); // アニメーション終了後に削除
}

// 600msごとに星（尊）を生成
setInterval(createStar, 600); // 600msごとに生成




// ハンバーガーメニューとメニューの要素を取得
const hamburger = document.getElementById('hamburger');
const menu = document.getElementById('menu');

// ハンバーガーメニューをクリックしたときの動作
hamburger.addEventListener('click', () => {
  // メニューの表示/非表示を切り替える
  menu.classList.toggle('active');
  // ハンバーガーアイコンの回転
  hamburger.classList.toggle('active');
});

