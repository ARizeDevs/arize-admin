import React from 'react';
import { List, Datagrid,  Filter,  TextField, EmailField, UrlField, FunctionField, DateField, ShowButton, SearchInput } from 'react-admin';

const UserFilter = (props) => (
    <Filter {...props} >
        <SearchInput source="searchText" alwaysOn />
    </Filter>
);

const UserList = props => (
    <List {...props} hasEdit={true} hasShow={true} title='Users' perPage={25} filters={<UserFilter />}>
        <Datagrid>
            <TextField source="id" />
            <EmailField source="email" />
            <TextField source="username" />
            <FunctionField label='slots' render={record => `${record.postsCount}/${record.maxSlots}`} />
            <FunctionField label='Name' render={record => `${record.name} ${record.surname}`} />
            <TextField source="accountType" />
            <DateField source="signupDate" />
            <TextField source='totalARViews' label='AR views' />
            <TextField source='totalTDViews' label='3D views' />
            <FunctionField label='Total Views' render={record => record.totalARViews+record.totalTDViews} />
            <TextField source='totalShares' label='shares' />
            <FunctionField label='AR/3D/Total last 30 days' render={record => record.statistics?`${record.statistics.intervalARViews} / ${record.statistics.intervalTDViews} / ${record.statistics.intervalTDViews + record.statistics.intervalARViews} ..............................`:''} />
            <FunctionField label='shares last 30 days' render={record => record.statistics?`${record.statistics.intervalShares}`:''} />
            <TextField source="location" />
            <TextField source="gender" />
            <UrlField label='website' source="websiteURL" />
            <TextField source="companyName" />
            <ShowButton key='id'  />
            {/* <TextField source="address.street" label="Address" /> */}
            {/* <TextField source="phone" /> */}
            {/* <UrlField source="website" /> */}
            {/* <TextField source="company.name" label="Company" /> */}
        </Datagrid>
    </List>
);

export default UserList