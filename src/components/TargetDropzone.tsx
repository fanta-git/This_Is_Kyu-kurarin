import { RefObject, useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";
import Kyukurarin from "./Kyukurarin";

type Props = {
  canvasRef: RefObject<HTMLCanvasElement>
};

const TargetDropzone = (props: Props) => {
  const [fileUrl, setFileUrl] = useState<string>();
  const { getRootProps, getInputProps, acceptedFiles } = useDropzone();

  useEffect(() => {
    const [file] = acceptedFiles;
    if (file === undefined) return;
    const url = URL.createObjectURL(file);
    setFileUrl(url);
  }, [acceptedFiles, setFileUrl]);

  return (
    <div {...getRootProps()}>
      <input {...getInputProps()} />
      <Kyukurarin fileUrl={fileUrl} {...props} />
    </div>
  );
};

export default TargetDropzone;
