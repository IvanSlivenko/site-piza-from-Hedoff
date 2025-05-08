import { Edit, SimpleForm, TextInput, NumberInput } from 'react-admin';

export const MenuOrderEdit = () => (
  <Edit>
    <SimpleForm>
      {/* <TextInput source="id" disabled /> */}
      <TextInput source="name" label="Назва товару" />
      <NumberInput source="price" label="Ціна" />
    </SimpleForm>
  </Edit>
);