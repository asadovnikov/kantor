import React from 'react';
import { FormLayout, FormContent, FormContentRow, FormHeader, ActionTile } from '../../Components';
import { withAuthenticator } from '@aws-amplify/ui-react';
import { shield } from '../../assets';
import { List } from 'antd';

const data = [
	{
		title: 'First Name',
		description: 'Jerome',
	},
	{
		title: 'Last Name',
		description: 'K. Jerome',
	},
	{
		title: 'Email',
		description: 'john.phillips.1972@gmail.com',
	},
	{
		title: 'Phone',
		description: '+1 212 566 1901',
	},
	{
		title: 'Country',
		description: 'United States',
	},
	{
		title: 'City',
		description: 'New York',
	},
	{
		title: 'State',
		description: 'NY',
	},
	{
		title: 'Postal Code',
		description: '10007',
	},
	{
		title: 'Address',
		description: '92 West Broadway',
	},
	{
		title: 'Birth date',
		description: '1982-08-29 (TODO: humanize)',
	},
];

const AccountDetails = ({ children }) => {
	return (
		<FormLayout>
			<FormHeader Main='Account details' />
			<FormContent>
				<FormContentRow>
					<ActionTile icon={shield} title='Account verified' description='ID card, Address and financial information' />
				</FormContentRow>
				<FormContentRow>
					<List
						size='large'
						bordered={false}
						itemLayout='horizontal'
						dataSource={data}
						renderItem={(item) => (
							<List.Item>
								<List.Item.Meta title={item.title} description={item.description} />
							</List.Item>
						)}
					/>
				</FormContentRow>
			</FormContent>
		</FormLayout>
	);
};

export default withAuthenticator(AccountDetails);
