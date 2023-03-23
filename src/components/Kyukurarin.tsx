import { CSSProperties, useEffect, useRef } from "react";
import useImage from "use-image";
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
  const [image] = useImage(fileUrl ?? '');

  useEffect(() => {
    const ctx = canvasRef.current?.getContext('2d');
    if (ctx == null) return;

    ctx.fillStyle = BACKGROUND;
    ctx.fillRect(0, 0, WIDTH, HEIGHT);

    if (image === undefined) return;
    const scale = HEIGHT / image.height;
    const costomWidth = image.width * scale | 0;
    const centerLeft = (WIDTH - costomWidth) / 2 | 0;

    for (let i = 10; i >= 0; i--) ctx.drawImage(image, centerLeft - SPACING * i, 0, HEIGHT, costomWidth);
  }, [image]);

  return (
    <canvas width={WIDTH} height={HEIGHT} style={style} ref={canvasRef} />
  );
};

export default Kyukurarin;
