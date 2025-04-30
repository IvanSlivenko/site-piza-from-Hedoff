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
    mb-12

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
