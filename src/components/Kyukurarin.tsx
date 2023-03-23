import { useEffect, useRef } from "react";

type Props = {
  fileUrl: string | undefined
}

const Kyukurarin = (props: Props) => {
  const { fileUrl } = props;
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas == null) return;
    const ctx = canvas?.getContext('2d')!;
    ctx.fillStyle = "#F7D1DC";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    if (ctx == null || fileUrl === undefined) return;
    const img = new Image();
    img.src = fileUrl;
    img.onload = () => {
      ctx.drawImage(img, 0, 0);
    };
  }, [fileUrl]);

  return (
    <canvas width="1280" height="720" style={{ width: "100%" }} ref={canvasRef} />
  );
};

export default Kyukurarin;
