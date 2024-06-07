const Success = ({ message = "Success!" }: { message?: string }) => {
  return <h2 className="text-2xl text-green-500">{message}</h2>;
};

export default Success;
