import * as React from "react";
import { Show, Link, TabbedShowLayout , FunctionField,  ReferenceManyField,Tab, Datagrid, TextField, EmailField, linkToRecord } from 'react-admin';

const UserTitle = ({ record }) => {
    return <span>User : {record ? `"${record.email}"` : ''}</span>;
};

const PostRecordLink = ({ record }) => {
    const linkToPost = linkToRecord('/post', record.id, 'show');

    return <Link to={linkToPost}>{record.title}</Link>;
}

export const UserShow = (props) => (
    <Show {...props} title={<UserTitle />}>
        <TabbedShowLayout>
            <Tab label="summary">
                <TextField source="id" />
                <EmailField source="email" />
                <TextField source="username" />
                <TextField source="bio" />
            </Tab>            
            <Tab label="posts">
                <ReferenceManyField reference="post" target='uid' >
                    <Datagrid>
                        <PostRecordLink />
                        {/* <TextField source="name" /> */}
                    </Datagrid>
                </ReferenceManyField>
            </Tab>
            <Tab label="statistics">
                <TextField source='totalARViews' label='AR views' />
                <TextField source='totalTDViews' label='3D views' />
                <FunctionField label='Total Views' render={record => record.totalARViews+record.totalTDViews} />
                <TextField source='totalShares' label='shares' />
                <FunctionField label='AR/3D/Total last 30 days' render={record => record.statistics?`${record.statistics.intervalARViews} / ${record.statistics.intervalTDViews} / ${record.statistics.intervalTDViews + record.statistics.intervalARViews} ..............................`:''} />
                <FunctionField label='shares last 30 days' render={record => record.statistics?`${record.statistics.intervalShares}`:''} />
            </Tab>

        </TabbedShowLayout>
    </Show>
);

export default UserShow