import React from 'react';
import { Result, Button, Card, Col, Row, Avatar } from 'antd';
import { BrowserRouter as Router, Switch, Route, useParams, useRouteMatch } from 'react-router-dom';

import { FormLayout, FormContent, FormContentRow, FormHeader, ActionTile } from '../../Components';

const SettingsForm = () => {
	return (
		<FormLayout>
			<FormHeader Main={`Settings`} />
			<FormContent>
				<FormContentRow></FormContentRow>
				<FormContentRow></FormContentRow>
			</FormContent>
		</FormLayout>
	);
};

export default SettingsForm;
