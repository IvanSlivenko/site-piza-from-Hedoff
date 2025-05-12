import { Edit, SimpleForm, TextInput, NumberInput } from 'react-admin';

export const MenuOrderEdit = () => (
  <Edit>
    <SimpleForm>
      {/* <TextInput source="id" disabled /> */}
      <TextInput source="title" label="Назва товару" />
      <TextInput source="image" label="Зображення товару" />
      <TextInput source="ingredients" label="Інгрідієнти" />
      <TextInput source="user" label="Користувач" />
      <NumberInput source="price" label="Ціна" />
    </SimpleForm>
  </Edit>
);