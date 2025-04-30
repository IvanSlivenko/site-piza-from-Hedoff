import { Header } from "./common/components/header/header.component";
import { HeaderOder } from "./common/components/headerOrder/headerOrder.component";
import { MenuList } from "./modules/menu/components/menu-item/menu-list.component";
import { MenuListOrder } from "./modules/oders/order-list.component";
import pizzaMenu from "./mocs/pizza.json";
import pizzaMenuOrder from "./mocs/pizzaOrder.json";
import { Footer } from "./common/components/footer/footer.component";
import { FooterOrder } from "./common/components/footerOrder/footerOrder.component";

export const App = () => {
  return (
    <div>
      <Header title={"PizzaStack"} />
      {/* <HeaderOder title={"UmanProger"} buttonName={'Start'}/> */}
      <div className="mx-12 mb-24">
        <MenuList items={pizzaMenu} />
        {/* <MenuListOrder itemsOrder={pizzaMenuOrder}/> */}
      </div>
      <Footer/>
      {/* <FooterOrder/> */}
    </div>
  );
};
