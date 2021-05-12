import * as React from "react";
import { Show, Link, TabbedShowLayout , FunctionField ,Tab, TextField, linkToRecord, BooleanField } from 'react-admin';

const PostTitle = ({ record }) => {
    return <span>Post : {record ? `"${record.title}"` : ''}</span>;
};

const UserRecordLink = ({ record }) => {
    const linkToUser = linkToRecord('/user', record.author, 'show');

    return <Link to={linkToUser}>author : {record.author}</Link>;
}

export const PostShow = (props) => (
    <Show {...props} title={<PostTitle />}>
        <TabbedShowLayout>
            <Tab label="summary">
                <TextField source="id" />
                <TextField source="title" />
                <TextField source="description" />
                <TextField source="imageURL" />
                <TextField source="glbFileURL" />
                <TextField source="usdzFileURL" />
                <UserRecordLink />
                {/* <TextField source="bio" /> */}
            </Tab>
            <Tab label="details">
                    <BooleanField source='hasShareButton' />
                    <TextField source='shareButtonBackgroundColor' />
                    <TextField source='shareButtonTextColor' />
                    <BooleanField source='hasARButton' />
                    <TextField source='arButtonBackgroundColor' />
                    <TextField source='arButtonTextColor' />
                    <BooleanField source='hasShadow' />
                    <TextField source='shadowIntensity' />
                    <TextField source='shadowSoftness' />
                    <BooleanField source='allowScaling' />
                    <BooleanField source='autoPlay' />
                    <TextField source='exposure' />
                    <TextField source='placement' />
            </Tab>     
            <Tab label="statistics">
                <TextField source='arViewsCount' label='AR views' />
                <TextField source='tdViewsCount' label='3D views' />
                <FunctionField label='Total Views' render={record => record.arViewsCount + record.tdViewsCount} />
                <TextField source='sharesCount' label='shares' />
                <FunctionField label='AR/3D/Total last 30 days' render={record => record.statistics?`${record.statistics.intervalARViews} / ${record.statistics.intervalTDViews} / ${record.statistics.intervalARViews + record.statistics.intervalTDViews} ..............................`:''} />
                <FunctionField label='Shares last 30 days' render={record => record.statistics?`${record.statistics.intervalShares} ..............................`:''} />
            </Tab>                  
        </TabbedShowLayout>
    </Show>
);

export default PostShow