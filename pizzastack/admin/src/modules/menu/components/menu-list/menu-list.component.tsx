import { Datagrid, List, NumberField, TextField } from 'react-admin';

export const MenuList = () => (
    <List>
        <Datagrid>
            {/* <TextField source="id" /> */}
            {/* <TextField source="image" /> */}
            {/* <TextField source="ingredients" /> */}
            <TextField source="title" />
            <NumberField source="price" />
            
            {/* <NumberField source="weight" /> */}
        </Datagrid>
    </List>
);