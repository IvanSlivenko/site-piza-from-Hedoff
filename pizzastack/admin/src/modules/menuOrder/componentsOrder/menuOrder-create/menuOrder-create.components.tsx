import { Create, SimpleForm, TextInput, NumberInput } from "react-admin";

export const MenuOrderCreate = () => (
  <Create>
    <SimpleForm>
      {/* <TextInput source="id" disabled /> */}
      <TextInput source="title" label="Назва товару" />
      <TextInput source="date" />
      <TextInput source="image" />
      <TextInput source="ingredients" label="Інгрідієнти" />
      <NumberInput source="price" label="Ціна" />
      <NumberInput source="quantity" />
      <NumberInput source="summ" />
      <TextInput source="unit" />
      <TextInput source="user" label="Користувач" />
      <NumberInput source="weight"  label="Вага"/>
      
    </SimpleForm>
  </Create>
);
