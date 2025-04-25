export const MenuItem = () => {
  return (
    <div
      className="
        w-96
        shadow-xl
        rounded-2xl
        "
    >
      <div className="relative">
        <img
          src="/assets/pizza/barbecue.jpeg"
          alt="Barbecue Pizza"
          className="
          w-full 
          h-[15rem] 
          object-cover
          object-center
          rounded-t-2xl
          "
        />
        <span className="
        absolute
        bottom-1.5
        right-3
        bg-gray-900/50
        rounded-[2rem]
        px-2
        text-white
        text-sm
        "
        >550 г</span>
      </div>
    </div>
  );
};
