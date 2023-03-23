import TargetDropzone from "./TargetDropzone";
import "@exampledev/new.css";

const Main = () => {
  return (
    <>
      <header><h3>きゅうくらりんメーカー</h3></header>
      <TargetDropzone />
      <p>
        <h4>使い方</h4>
        1. 画像を枠内にドラッグ＆ドラッグ、または枠をクリックして画像選択<br/>
        2. 枠長押し（右クリック）して保存を選ぶ
      </p>
      <p>
        <h4>元ネタ</h4>
        <a href="https://www.nicovideo.jp/watch/sm39257413">きゅうくらりん / いよわ feat.可不</a>
      </p>
    </>
  );
};

export default Main;
