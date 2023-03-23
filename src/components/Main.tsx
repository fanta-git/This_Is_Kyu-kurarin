import TargetDropzone from "./TargetDropzone";
import "@exampledev/new.css";

const Main = () => {
  return (
    <>
      <header><h3>きゅうくらりんメーカー</h3></header>
      <TargetDropzone />
      <p>
        上にある枠をクリックして画像を選択、または枠にドラッグ＆ドロップするときゅうくらりんのサムネみたいになります。
      </p>
      <h4>注意点</h4>
      <ul>
        <li>iOSに搭載されている被写体切り抜き機能を使って切り抜き、サイトにドラッグ&ドロップする使用法を想定しています。</li>
        <li>選択する画像は背景が透過されていないと上手いこと行きません。</li>
        <li>横長の画像だったり、画質の低い画像だと綺麗に作れません。</li>
      </ul>
      <h4>元ネタ</h4>
      <p>
        <a href="https://www.nicovideo.jp/watch/sm39257413">きゅうくらりん / いよわ feat.可不</a>
      </p>
    </>
  );
};

export default Main;
