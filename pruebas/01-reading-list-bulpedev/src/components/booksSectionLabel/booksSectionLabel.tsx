import Image from "next/image";

interface booksSectionLabelProps {
  content: string;
  icon: string;
}

const booksSectionLabel: React.FC<booksSectionLabelProps> = ({
  content,
  icon,
}) => {
  return (
    <label>
      <Image src={icon} alt="" />
      <span>{content}</span>
    </label>
  );
};

export default booksSectionLabel;
