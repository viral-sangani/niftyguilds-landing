import { MouseEventHandler } from "react";

interface Props {
  onClick: MouseEventHandler;
  className?: string;
}

export const Button: React.FC<Props> = ({ children, onClick, className }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`${className} font-sourceSansPro text-white font-bold bg-gradient-to-br from-purple-600 to-blue-500 hover:opacity-80 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800 rounded-lg text-base px-5 py-2.5 text-center mr-2 mb-2`}
    >
      {children}
    </button>
  );
};
