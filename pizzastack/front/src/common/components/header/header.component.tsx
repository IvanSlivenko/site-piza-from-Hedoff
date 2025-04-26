type HeaderProps = {
  title: string;
};


export const Header = ({ title }: HeaderProps) => {
  return (
    <div
      className="
    h-12 
    shadow-xl
    px-6

    "
    >
      <div className="
      h-full
      flex items-center
      ">
        <a href="/"
        className="
        text-xl
        font-semibold
        "
        >🍕 {title}</a>
      </div>
    </div>
  );
};
