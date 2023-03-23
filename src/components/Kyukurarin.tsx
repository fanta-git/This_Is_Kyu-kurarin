type Props = {
  fileUrl: string | undefined
}

const Kyukurarin = (props: Props) => {
  const { fileUrl } = props;

  return (
    <>
      {fileUrl}
    </>
  );
};

export default Kyukurarin;
