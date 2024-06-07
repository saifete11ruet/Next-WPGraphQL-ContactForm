import Image from "next/image";

const Loading = () => {
  return (
    <Image
      src="/loading.gif"
      width={150}
      height={150}
      className="w-24 h-auto"
      alt="Loading..."
      unoptimized={true}
      priority={true}
    />
  );
};

export default Loading;
