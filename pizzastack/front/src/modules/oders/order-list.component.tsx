import pizzaMenuOrder from "@app/mocs/pizzaOrder.json";
import { Order } from "./order.component";

export const MenuListOrder = () => {
  return <div>
     {pizzaMenuOrder.map(({ image, ingredients, ...rest }) => (
  <Order key={rest.id} {...rest} imagePath={image} ingredients={ingredients} />
))}

    </div>;
};
