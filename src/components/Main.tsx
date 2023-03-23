import TargetDropzone from "./TargetDropzone";
import "@exampledev/new.css";

const Main = () => {
  return (
    <>
      <header><h3>きゅうくらりんメーカー</h3></header>
      <TargetDropzone />
      ↑枠内をクリックしてファイル選択<br/>
      または<br/>
      画像ファイルを枠内にドラッグ＆ドラッグ
    </>
  );
};

export default Main;
