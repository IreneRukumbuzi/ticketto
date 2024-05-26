type TitleProps = {
  title: string;
  variant: string;
  color: string | "black";
};

const Title = ({ title, variant, color }: TitleProps) => {
  return <h1 className={`text-${color} ${variant} `}>{title}</h1>;
};

export default Title;
