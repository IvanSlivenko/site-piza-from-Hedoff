import { useState, useEffect} from 'react';
import { Admin, DataProvider, EditGuesser, Resource } from "react-admin";
import { CssBaseline } from "@mui/material";
import buildHasuraProvider from 'ra-data-hasura';
import { MenuList } from './modules/menu/components/menu-list/menu-list.component'
import { MenuEdit } from './modules/menu/components/menu-edits/menu.edit.component'

import { MenuOrderList } from './modules/menuOrder/componentsOrder/menuOrder-list/menuOrder-list.component'
import { MenuOrderEdit } from './modules/menuOrder/componentsOrder/menuOrder-edits/menuOrder.edit.component'
                             



export const App = () => {

  const [dataProvider, setDataProvider] = useState<DataProvider<string> | null>(null);

  useEffect(() => {
    const buildDataProvider = async () => {
      const dataProvider = await buildHasuraProvider({
        clientOptions: { uri: 'http://localhost:8080/v1/graphql' },
      });
      setDataProvider(dataProvider);
    };
    buildDataProvider();
  }, []);


  if (!dataProvider) return <p>Loading...</p>;
  return (
    <>
      <CssBaseline />
      <Admin dataProvider={dataProvider}>
        <Resource name="menu" list={MenuList}  edit={MenuEdit}/>

        <Resource name="menuOrder" list={MenuOrderList} edit={MenuOrderEdit} />

      </Admin>
    </>
  );
};

export default App;
