import { Datagrid, List, NumberField, TextField } from "react-admin";

export const MenuList = () => (
  <List>
    <Datagrid>
      <TextField source="id" />
      <TextField source="title" />
      <TextField source="image" />
      <TextField source="ingredients" />
      <NumberField source="price" label="Ціна" />
      <NumberField source="weight" label="Вага" />


      {/* <NumberField source="weight" /> */}
    </Datagrid>
  </List>
);
