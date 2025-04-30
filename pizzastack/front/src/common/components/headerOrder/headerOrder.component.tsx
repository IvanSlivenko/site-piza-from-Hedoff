import { log } from "console";

type HeaderProps = {
  title: string;
  buttonName: string;
};

export const HeaderOder = ({ title, buttonName }: HeaderProps) => {
  return (
    <div
      className="
    h-12 
    shadow-xl
    px-6
    mb-12

    "
    >
      <div
        className="
      h-full
      flex items-center
      "
      >
        <a
          href="/"
          className="
        text-xl
        font-semibold
        "
        >
          🍕 {title}
        </a>
        <button
          onClick={() => {console.log(`Ви натисли кнопку ${buttonName} `)}}
          className="
          bg-gray-500
          rounded-xl
          pl-2
          pr-2
          pt-1
          pb-1
          ml-5
          hover:bg-gray-400
          text-white
          text-sm
          border-none
          "
        >
          {buttonName}
        </button>
      </div>
    </div>
  );
};
