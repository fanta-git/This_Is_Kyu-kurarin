import { RefObject } from "react";

type Props = {
    canvasRef: RefObject<HTMLCanvasElement>
}

const ToImageBtn = (props: Props) => {
    const { canvasRef } = props;
    const onClick = () => {
        const canvas = canvasRef.current;
        if (canvas === null) return;
        const a = document.createElement("a");
        a.href = canvas.toDataURL("image/png");
        a.download = "きゅうくらりん.png";
        a.click();
    };

    return (
        <div>
            <button onClick={onClick}>保存する</button>
        </div>
    )
};

export default ToImageBtn;
