import { Datagrid, List, NumberField, TextField } from 'react-admin';

export const MenuOrderList = () => (
    <List>
        <Datagrid>
            <TextField source="date" />
            {/* <TextField source="id" /> */}
            <TextField source="image" />
            <TextField source="ingredients" />
            <NumberField source="price" />
            <NumberField source="quantity" />
            <NumberField source="summ" />
            <TextField source="title" />
            <TextField source="unit" />
            <TextField source="user" />
            {/* <NumberField source="weight" /> */}
        </Datagrid>
    </List>
);