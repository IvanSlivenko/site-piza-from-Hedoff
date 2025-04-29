import { FC } from "react";

interface OrderProps {
  imagePath: string;
  weight: number;
  title: string;
  ingredients: string;
  price: number;
  user: string;
  date: string;
  unit: string;
  quantity: number;
  summ: number;
}

export const Order: FC<OrderProps> = ({
  imagePath,
  weight,
  title,
  ingredients,
  price,
  user,
  date,
  unit,
  quantity,
  summ,
}) => {
  return (
    <div className="w-96 shadow-xl rounded-2xl bg-gray-900/50">
      <div className="relative">
        <img
          src={imagePath}
          alt={title}
          className="w-full h-[15rem] object-cover object-center rounded-t-2xl"
        />
        <span className="absolute bottom-1.5 right-3 bg-gray-900/50 rounded-[2rem] px-2 text-white text-sm">
          {weight} г
        </span>
      </div>

      <div className="p-8">
        <h2 className="text-xl font-semibold mb-2 text-white">{title}</h2>
        <p className="mb-8 text-white">{ingredients}</p>

        <div className="flex items-center gap-2 mb-4 text-white">
          <span className="text-xl font-semibold">{quantity}</span>
          <span className="text-xl font-semibold">{unit}</span>
          <span className="text-xl font-semibold ml-2 mr-2">x {price} грн. =</span>
          <span className="text-xl font-semibold">{summ} грн.</span>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-1 text-white">Замовник: {user}</h3>
          <span className="font-serif text-white">Дата замовлення: {date}</span>
        </div>
      </div>
    </div>
  );
};
