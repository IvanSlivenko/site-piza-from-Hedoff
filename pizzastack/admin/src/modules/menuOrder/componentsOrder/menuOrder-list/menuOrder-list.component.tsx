import { Datagrid, List, NumberField, TextField } from "react-admin";

export const MenuOrderList = () => (
  <List>
    <Datagrid>
      {/* <TextField source="id" /> */}
      <TextField source="title" />
      <TextField source="date" />
      <TextField source="image" />
      <TextField source="ingredients" />
      <NumberField source="price" />
      <NumberField source="quantity" />
      <NumberField source="summ" />
      <TextField source="unit" />
      <TextField source="user" />
      <NumberField source="weight" />
    </Datagrid>
  </List>
);
