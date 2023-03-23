import { Dispatch, SetStateAction, useEffect } from "react";
import { useDropzone } from "react-dropzone";

type Props = {
  setFileUrl: Dispatch<SetStateAction<string | undefined>>
};

const style = {
  display: 'block',
  width: '100%',
  height: 'calc(50vh - 18px)',
  border: "1px dotted #888"
};

const TargetDropzone = (props: Props) => {
  const { setFileUrl } = props;
  const { getRootProps, getInputProps, acceptedFiles } = useDropzone();

  useEffect(() => {
    const [file] = acceptedFiles;
    if (file === undefined) return;
    const url = URL.createObjectURL(file);
    setFileUrl(url);
  }, [acceptedFiles, setFileUrl]);

  return (
    <div {...getRootProps()} style={style}>
      <input {...getInputProps()} />
      drop here
    </div>
  );
};

export default TargetDropzone;
