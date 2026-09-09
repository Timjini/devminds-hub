import * as Icons from "lucide-react";
import { IconComponent } from "../../utils/icon-helper";

interface TextInputProps {
  text: string;
  icon?: keyof typeof Icons;
  type: string;
  placeholder?: string;
  name: string;
  description?: string;
  labelTitle?: string;
}

const TextInput: React.FC<TextInputProps> = ({
  icon,
  text,
  type,
  placeholder,
  name,
  description,
  labelTitle,
}) => {
  return (
    <div className="max-w-xl mx-auto px-4 sm:px-0">
      <label className="block text-gray-500 dark:text-gray-400 text-sm font-medium mb-2">
        {labelTitle}
      </label>

      <div className="relative">
        <input
          placeholder={placeholder || "...."}
          className="w-full px-4 py-3  border border-gray-300  rounded-lg focus:ring-2 focus:ring-brand-primary focus:border-brand-primary dark:focus:ring-brand-primary-light dark:focus:border-blue-400 transition-all duration-200 placeholder-gray-400 dark:placeholder-gray-500 text-gray-900 dark:text-gray-100 hover:border-gray-400 dark:hover:border-gray-500 shadow-sm"
          name={name}
          type={type}
        />

        <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
          {icon && <IconComponent iconName={icon} />} {text}
        </div>
      </div>

      <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
        {description}
      </p>
    </div>
  );
};

export default TextInput;
