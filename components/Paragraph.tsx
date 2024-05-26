type ParagraphProps = {
  color: string;
  text: string;
  size: string;
  align: string;
  padding?: string;
}

const Paragraph = ({color, size, text, align, padding}: ParagraphProps) => {
  return (
      <p className={`${color} items-${align} ${size} ${padding ? padding : ''}`}>
        {text}
      </p>
  );
};

export default Paragraph;