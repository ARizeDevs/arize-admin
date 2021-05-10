import React from 'react';
import { List, Datagrid, Link,   Filter, TextInput, TextField,  FunctionField, DateField, linkToRecord, ShowButton } from 'react-admin';

const UserFilter = (props) => (
    <Filter {...props}>
        <TextInput label="Search" source="searchText" alwaysOn />
    </Filter>
);

const UserRecordLink = ({ record }) => {
    const linkToUser = linkToRecord('/user', record.author, 'show');

    return <Link to={linkToUser}>{record.author}</Link>;
}

const UserList = props => (
    <List {...props} hasEdit={true} hasShow={true} title='posts' perPage={25} filters={<UserFilter />}>
        <Datagrid>
            <TextField source="id" />
            <UserRecordLink />
            <TextField source="title" />
            <TextField source="description" />
            <TextField source="submissionDate" />
            <TextField source="tags" />
            <DateField source='submissionDate' />
            <TextField source='arViewsCount' label='AR views' />
            <TextField source='tdViewsCount' label='3D views' />
            <TextField source='sharesCount' label='shares' />
            <FunctionField label='AR/3D/SH last 30 days' render={record => record.statistics?`${record.statistics.intervalARViews} / ${record.statistics.intervalTDViews} / ${record.statistics.intervalShares} ..............................`:''} />
            <ShowButton key='id'  />
        </Datagrid>
    </List>
);

export default UserList