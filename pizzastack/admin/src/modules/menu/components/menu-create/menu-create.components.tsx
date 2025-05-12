import {  Create, SimpleForm, TextInput, NumberInput } from "react-admin";

export const MenuCreate = () => (
  <Create>
    <SimpleForm>
      {/* <TextInput source="id" disabled /> */}
      <TextInput source="title" label="Назва товару" fullWidth />
      <TextInput source="image" fullWidth/>
      <TextInput source="ingredients" fullWidth/>
      <NumberInput source="price" label="Ціна" />
      <NumberInput source="weight" label="Вага" />
    </SimpleForm>
  </Create>
);
