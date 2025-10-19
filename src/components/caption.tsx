interface CaptionProps {
  text?: string;
}

const Caption = (props: CaptionProps) => {
  const { text } = props;
  return (
    <span className="text-sm">{text}</span>
  )
}

export default Caption