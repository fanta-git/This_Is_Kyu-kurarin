import { useEffect } from "react";
import { useDropzone } from "react-dropzone";

type Props = {
};

const style = {
  display: 'block',
  width: '100%',
  height: 'calc(100vh - 18px)',
  border: "1px dotted #888"
};

const TargetDropzone = (props: Props) => {
  const { getRootProps, getInputProps, acceptedFiles } = useDropzone();
  useEffect(() => {
    console.log(acceptedFiles);
  }, [acceptedFiles])
  return (
    <div {...getRootProps()} style={style}>
      <input {...getInputProps()} />
      drop here
    </div>
  );
};

export default TargetDropzone;
