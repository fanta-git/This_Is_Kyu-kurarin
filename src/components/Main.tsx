import { useState } from "react";
import Kyukurarin from "./Kyukurarin";
import TargetDropzone from "./TargetDropzone";

const Main = () => {
  const [fileUrl, setFileUrl] = useState<string>();

  return (
    <>
      <TargetDropzone setFileUrl={setFileUrl} />
      <Kyukurarin fileUrl={fileUrl} />
    </>
  );
};

export default Main;
