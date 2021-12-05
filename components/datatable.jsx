import React, { useState, useRef } from 'react'

import { Table, Input, Button, Space } from 'antd';
import Highlighter from 'react-highlight-words';
import { SearchOutlined } from '@ant-design/icons';
import { Flex, Spinner } from '@chakra-ui/react'
import 'antd/dist/antd.css';


export const DataTable = ({ data, columns }) => {

	const [searchText, setSearchText] = useState('');
	const [searchedColumn, setSearchedColumn] = useState('');
	const searchInput = useRef(null);


	function getColumnSearchProps(dataIndex) {
		return {
			filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
				<div style={{ padding: 8 }}>
					<Input
						ref={searchInput}
						placeholder={`Search ${dataIndex}`}
						value={selectedKeys[0]}
						onChange={e => setSelectedKeys(e.target.value ? [e.target.value] : [])}
						onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
						style={{ width: 188, marginBottom: 8, display: 'block' }}
					/>
					<Space>
						<Button
							type="primary"
							onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
							icon={<SearchOutlined />}
							size="small"
							style={{ width: 90 }}
						>
							Search
						</Button>
						<Button onClick={() => handleReset(clearFilters)} size="small" style={{ width: 90 }}>
							Reset
						</Button>
					</Space>
				</div>
			),
			filterIcon: filtered => <SearchOutlined style={{ color: filtered ? '#1890ff' : undefined }} />,
			onFilter: (value, record) =>
				record[dataIndex].toString().toLowerCase().includes(value.toLowerCase()),
			onFilterDropdownVisibleChange: visible => {
				if (visible) {
					setTimeout(() => searchInput && searchInput.current && searchInput.current.select());
				}
			},
			render: text =>
				searchedColumn === dataIndex ? (
					<Highlighter
						highlightStyle={{ backgroundColor: '#ffc069', padding: 0 }}
						searchWords={[searchText]}
						autoEscape
						textToHighlight={text.toString()}
					/>
				) : (
					text
				),
		}
	};

	function handleSearch(selectedKeys, confirm, dataIndex) {
		confirm();
		setSearchText(selectedKeys[0]);
		setSearchedColumn(dataIndex);
	};

	function handleReset(clearFilters) {
		clearFilters();
		setSearchText('');
	};

	columns = columns.map((item, index) => {
		if (index < 2) {
			return {
				...item,
				...getColumnSearchProps(`${item.dataIndex}`),
			}
		} else {
			return {
				...item,
			}
		}
	})

	if (data == undefined) {
		return (
			<Flex w="100%" alignItems="center" justifyContent="center">
				<Spinner />
			</Flex>
		)
	} else {
		return (
			<div>
				<Table columns={columns} dataSource={data} size='medium' pagination={{ pageSize: 6 }} />
			</div>
		);
	}

}

export default DataTable;