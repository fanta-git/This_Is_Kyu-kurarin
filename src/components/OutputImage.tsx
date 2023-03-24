import useImage from "use-image";
import kyukurarin from "../foundations/kyukurarin";

type Props = {
  fileUrl: string | undefined
}

const DropAndImage = (props: Props) => {
  const { fileUrl } = props;
  const [image] = useImage(fileUrl ?? '');
  const output = kyukurarin(image);

  return (
    <img src={output} alt="これはきゅうくらりんです" />
  );
};

export default DropAndImage;
