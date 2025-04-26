import { FC } from "react";
interface OrderProps {
  imagePath: string;
  weight: number;
  title: string;
  ingridients: string;
  price: number;

  user: string;
  date: string;
  unit: string;
  quantity: number;
  summ: number;
}

const values: OrderProps = {
  imagePath: "/assets/pizza/barbecue.jpeg",
  weight: 555,
  title: "Піца Барбекю",
  ingridients: "(подвійна порція грибів), Гриби, Моцарела, Соус, Альфредо",
  price: 215,

  user: "User1",
  date: "01.01.2025",
  unit: "шт.",
  quantity: 10,
  summ: 1000,
};

export const Order: FC<OrderProps> = ({
  imagePath,
  weight,
  title,
  ingridients,
  price,
  user,
  date,
  unit,
  quantity,
  summ,
}) => {
  return (
    <div
      className="
        w-96
        shadow-xl
        rounded-2xl
        "
    >
      <div className="relative bg-white">
        <img
          src={imagePath}
          alt="Barbecue Pizza"
          className="
          w-full 
          h-[15rem] 
          object-cover
          object-center
          rounded-t-2xl
          "
        />
        <span
          className="
        absolute
        bottom-1.5
        right-3
        bg-gray-900/50
        rounded-[2rem]
        px-2
        text-white
        text-sm
        "
        >
          {weight} г
        </span>
      </div>

      <div
        className="
      p-8
       "
      >
        <h2
          className="
        text-xl
        font-semibold
        mb-2
        "
        >
          {title}
        </h2>
        <p
          className="
            mb-8
            "
        >
          {ingridients}
        </p>
        <span
          className="
                text-xl
                font-semibold
                "
        >
          {quantity}
        </span>
        <span
          className="
                text-xl
                font-semibold
                "
        >
          {unit}
        </span>
        <span
          className="
                text-xl
                font-semibold
                ml-2
                mr-2
                "
        >
           x {price} грн. =
        </span>

        <span
          className="
                text-xl
                font-semibold
                "
        >
          {summ} грн.
        </span>
      </div>

      <div
        className="
      p-8
       "
      >
        <h2
          className="
        text-xl
        font-semibold
        mb-2
        "
        >
        Замовник: {user}
        </h2>
       

        <span
          className="
                text-ellipsis
                font-serif
                "
        >
        Дата замовлення:  {date}
        </span>
      </div>
    </div>
  );
};
