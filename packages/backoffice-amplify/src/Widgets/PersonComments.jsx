import React, { useState, useEffect } from 'react';
import { Auth } from 'aws-amplify';
import { Comment, Tooltip, List, Input, Row, Col, Button } from 'antd';
import { v4 as uuid } from 'uuid';
import moment from 'moment';
import Avatar from 'react-avatar';

import { API, graphqlOperation } from 'aws-amplify';
import { createComment } from '../backGraph/mutations';
import { onCreateComment } from '../backGraph/subscriptions';

const { TextArea } = Input;

const AddComment = ({ person }) => {
	const [comment, setComment] = useState();
	const [loading, setLoading] = useState(false);

	const addAComment = async () => {
		setLoading(true);
		try {
			const {
				attributes: { email },
			} = await Auth.currentAuthenticatedUser();
			await API.graphql(
				graphqlOperation(createComment, {
					input: {
						id: uuid(),
						content: comment,
						customerID: person.id,
						Author: 'Back Admin',
						AuthorEmail: email,
					},
				})
			);
			setComment('');
		} catch (error) {
			console.error(error);
		} finally {
			setLoading(false);
		}
	};
	return (
		<>
			<Row gutter={[16, 8]}>
				<Col span={24}>
					<TextArea
						value={comment}
						size='large'
						onChange={({ target: { value } }) => {
							setComment(value);
						}}
						placeholder='Leave a comment'
						autoSize={{ minRows: 2, maxRows: 5 }}
					/>
				</Col>
			</Row>
			<Row gutter={[16, 8]}>
				<Col span={12}>
					<Button onClick={() => addAComment()} loading={loading} type='link' size='large'>
						Comment
					</Button>
				</Col>
			</Row>
		</>
	);
};

export const PersonCommentsWidget = ({ person = {} }) => {
	const { comments = {} } = person;
	const { items = [] } = comments;
	const [customerComments, setCustomerComments] = useState(items);
	useEffect(() => {
		const subscription = API.graphql(graphqlOperation(onCreateComment)).subscribe({
			next: ({
				value: {
					data: { onCreateComment },
				},
			}) => setCustomerComments([onCreateComment, ...customerComments]),
		});
		return () => subscription.unsubscribe();
	}, []);
	return (
		<>
			<List
				className='comment-list'
				itemLayout='horizontal'
				dataSource={customerComments}
				renderItem={(item) => (
					<li key={item.id}>
						<Comment
							author={item.AuthorEmail}
							avatar={<Avatar round={true} size={45} name={item.Author} />}
							content={item.content}
							datetime={
								<Tooltip title={moment(item.createdOn).format('YYYY-MM-DD HH:mm:ss')}>
									<span>{moment(item.createdOn).fromNow()}</span>
								</Tooltip>
							}
						/>
					</li>
				)}
			/>
			<AddComment person={person} />
		</>
	);
};
