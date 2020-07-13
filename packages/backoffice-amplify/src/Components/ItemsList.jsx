import React, { useState } from 'react';

import { Table, Input, Button, Space } from 'antd';
import Highlighter from 'react-highlight-words';
import { SearchOutlined } from '@ant-design/icons';

export const ItemsList = ({ columns, data, loading }) => {
	const [searchText, setSearchText] = useState();
	const [searchedColumn, setSearchedColumn] = useState();
	let searchInput;

	const getColumnSearchProps = (dataIndex, column) => {
		if (column.filters && column.filters.length > 0) {
			return;
		}
		if (column.noFilter === true) {
			return;
		}
		return {
			filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
				<div style={{ padding: 8 }}>
					<Input
						ref={(node) => {
							searchInput = node;
						}}
						placeholder={`Search ${dataIndex}`}
						value={selectedKeys[0]}
						onChange={(e) => setSelectedKeys(e.target.value ? [e.target.value] : [])}
						onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
						style={{ width: 188, marginBottom: 8, display: 'block' }}
					/>
					<Space>
						<Button
							type='primary'
							onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
							icon={<SearchOutlined />}
							size='small'
							style={{ width: 90 }}>
							Search
						</Button>
						<Button onClick={() => handleReset(clearFilters)} size='small' style={{ width: 90 }}>
							Reset
						</Button>
					</Space>
				</div>
			),
			filterIcon: (filtered) => <SearchOutlined style={{ color: filtered ? '#1890ff' : undefined }} />,
			onFilter: (value, record) => record[dataIndex].toString().toLowerCase().includes(value.toLowerCase()),
			onFilterDropdownVisibleChange: (visible) => {
				if (visible) {
					setTimeout(() => searchInput.select());
				}
			},
			render: (text, record) => {
				return searchedColumn === dataIndex ? (
					<Highlighter
						highlightStyle={{ backgroundColor: '#ffc069', padding: 0 }}
						searchWords={[searchText]}
						autoEscape
						textToHighlight={text.toString()}
					/>
				) : (
					<>{column.render ? column.render(text, record) : text}</>
				);
			},
		};
	};

	const handleSearch = (selectedKeys, confirm, dataIndex) => {
		confirm();
		setSearchText(selectedKeys[0]);
		setSearchedColumn(dataIndex);
	};

	const handleReset = (clearFilters) => {
		clearFilters();
		setSearchText('');
	};

	return (
		<Table
			pagination={{ pageSize: 30 }}
			scroll={{ y: 300 }}
			bordered={true}
			loading={loading}
			size={`small`}
			columns={columns.map((column) => {
				return {
					...column,
					...getColumnSearchProps(column.dataIndex, column),
				};
			})}
			dataSource={data.map((item) => {
				return { key: item.id, ...item };
			})}
		/>
	);
};
