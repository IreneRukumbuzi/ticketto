import Image from "next/image";

type ButtonProps = {
  type: 'button' | 'submit';
  title: string;
  icon?: boolean;
  variant: string;
  full?: boolean;
}

const Button = ({ type, title, icon, variant, full }: ButtonProps) => {
  return (
    <button
    className={`flexCenter gap-3 rounded-full border transition-all duration-300 hover:text-gray-10 ${variant} ${full && 'w-full'}`}
      type={type}
    >
      <label className="bold-14 whitespace-nowrap cursor-pointer">{title}</label>
      {icon && <Image src="/arrow.svg" alt={title} width={24} height={24} />}
    </button>
  )
}

export default Button