import { useEffect, useRef } from "react";

type Props = {
  fileUrl: string | undefined
}

const Kyukurarin = (props: Props) => {
  const { fileUrl } = props;
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const context = canvasRef.current?.getContext('2d');
    if (context == null || fileUrl === undefined) return;
    const img = new Image();
    img.src = fileUrl;
    img.onload = () => {
      context.drawImage(img, 0, 0);
    };
  }, [fileUrl]);

  return (
    <canvas width="1280" height="720" ref={canvasRef} />
  );
};

export default Kyukurarin;
