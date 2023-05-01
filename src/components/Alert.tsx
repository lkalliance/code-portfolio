interface alertProps {
  current: boolean;
  message: string;
}

function Alert({ current, message }: alertProps) {
  console.log(current, message);
  return <p className="alert">{current ? message : " "}</p>;
}

export { Alert };
