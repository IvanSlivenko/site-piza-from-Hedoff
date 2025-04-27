import pizzaMenu from "@app/mocs/pizza.json";
import { MenuItem } from "./menu-item.component";

export const MenuList = () => {
  return <div>
    {pizzaMenu.map(({image, ...pizza}) => (
        <MenuItem key={pizza.id} {...pizza} imagePath={image} />
    ))}
    </div>;
};
