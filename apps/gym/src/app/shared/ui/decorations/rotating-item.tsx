import Audio from "../icons/audio";

interface RotatingItemProprs {
  children?: React.ReactNode;
  mainColor: string;
}
const RotatingItem: React.FC<RotatingItemProprs> = ({
  children,
  mainColor,
}) => {
  return (
    <div className="transform group-hover:rotate-360 transition-transform duration-700 flex items-center justify-center">
      {children ? (
        children
      ) : (
        <Audio mainColor={mainColor}/>
      )}
    </div>
  );
};

export default RotatingItem;
