import { CSSProperties } from "react";
import useImage from "use-image";
import kyukurarin from "../foundations/kyukurarin";

type Props = {
  fileUrl: string | undefined
}

const style: CSSProperties = {
  width: "100%",
  aspectRatio: "16 / 9"
}

const DropAndImage = (props: Props) => {
  const { fileUrl } = props;
  const [image] = useImage(fileUrl ?? '');
  const output = kyukurarin(image);

  return (
    <img src={output} style={style} alt="これはきゅうくらりんです" />
  );
};

export default DropAndImage;
