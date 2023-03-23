import { useEffect, useRef } from "react";
import { BACKGROUND, HEIGHT, WIDTH } from "../const/canvas";

type Props = {
  fileUrl: string | undefined
}

const Kyukurarin = (props: Props) => {
  const { fileUrl } = props;
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const ctx = canvasRef.current?.getContext('2d');
    if (ctx == null) return;
    ctx.fillStyle = BACKGROUND;
    ctx.fillRect(0, 0, WIDTH, HEIGHT);
    if (fileUrl === undefined) return;
    const img = new Image();
    img.src = fileUrl;
    img.onload = () => {
      ctx.drawImage(img, 0, 0);
    };
  }, [fileUrl]);

  return (
    <canvas width={WIDTH} height={HEIGHT} style={{ width: "100%", aspectRatio: "16 / 9" }} ref={canvasRef} />
  );
};

export default Kyukurarin;
