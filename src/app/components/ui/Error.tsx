const Error = ({ message = "Something went wrong!" }: { message?: string }) => {
  return <h2 className="text-2xl text-red-500">{message}</h2>;
};

export default Error;
