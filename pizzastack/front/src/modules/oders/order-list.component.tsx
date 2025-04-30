import { Order } from "./order.component";
import { PizzaOrder } from "@app/modules/oders/types/pizzaOrder"
import { FC } from "react";

interface OrderListProps {
  itemsOrder: PizzaOrder[];
}

export const MenuListOrder:FC< OrderListProps > = ({itemsOrder}) => {
  return <div className="flex flex-wrap gap-10 justify-center">
     {itemsOrder.map(({ image, ingredients, ...rest }) => (
  <Order
  {...rest}
    imagePath={'/assets/pizza/'+image} 
    ingredients={ingredients} 
    key={`pizza-${rest.id}`}/>
))}

    </div>;
};
