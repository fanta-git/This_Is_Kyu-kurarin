import { useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";
import DropAndImage from "./OutputImage";

const TargetDropzone = () => {
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
      <DropAndImage fileUrl={fileUrl} />
    </div>
  );
};

export default TargetDropzone;
