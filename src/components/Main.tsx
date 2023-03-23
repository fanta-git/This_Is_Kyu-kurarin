import TargetDropzone from "./TargetDropzone";
import "@exampledev/new.css";
import { useRef } from "react";
import ToImageBtn from "./ToImageBtn";

const Main = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)!

  return (
    <>
      <header><h3>きゅうくらりんメーカー</h3></header>
      <TargetDropzone canvasRef={canvasRef} />
      <ToImageBtn canvasRef={canvasRef} />
      <div>
        枠をクリックしてファイル選択<br/>
        または<br/>
        画像ファイルを枠内にドラッグ＆ドラッグ
      </div>
    </>
  );
};

export default Main;
