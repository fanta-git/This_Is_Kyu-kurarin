import { CSSProperties, useEffect, useRef, useState } from "react";
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
  const canvasRef = useRef<HTMLCanvasElement>(null)!
  const [image] = useImage(fileUrl ?? '');
  const [output, setOutput] = useState<string>();

  useEffect(() => {
    const ctx = canvasRef.current?.getContext('2d');
    if (ctx == null) return;

    ctx.fillStyle = BACKGROUND;
    ctx.fillRect(0, 0, WIDTH, HEIGHT);

    if (image) {
      const scale = HEIGHT / image.height;
      const costomWidth = image.width * scale | 0;
      const centerLeft = (WIDTH - costomWidth) / 2 | 0;

      for (let i = 10; i >= 0; i--) ctx.drawImage(image, centerLeft - SPACING * i, 0, costomWidth, HEIGHT);
    }

    setOutput(canvasRef.current!.toDataURL());
  }, [image, canvasRef]);

  return (
    <>
      <canvas width={WIDTH} height={HEIGHT} style={{ display: 'none' }} ref={canvasRef} />
      <img src={output} style={style} alt="きゅうくらりん" />
    </>
  );
};

export default Kyukurarin;
