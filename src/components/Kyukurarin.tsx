import { CSSProperties, useEffect, useRef } from "react";
import { BACKGROUND, HEIGHT, SPACING, WIDTH } from "../const/canvas";

type Props = {
  fileUrl: string | undefined
}

const style: CSSProperties = {
  width: "100%",
  aspectRatio: "16 / 9"
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
      const scale = HEIGHT / img.height;
      const costomWidth = img.height * scale | 0;
      const centerLeft = (WIDTH - costomWidth) / 2 | 0;

      for (let i = 10; i >= 0; i--) ctx.drawImage(img, centerLeft - SPACING * i, 0, HEIGHT, costomWidth);
    };
  }, [fileUrl]);

  return (
    <canvas width={WIDTH} height={HEIGHT} style={style} ref={canvasRef} />
  );
};

export default Kyukurarin;
