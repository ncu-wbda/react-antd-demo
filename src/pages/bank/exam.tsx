import type { ReactText } from 'react';
import { useState } from 'react';
import { Button, Progress, Tag, Space } from 'antd';
import ProList from '@ant-design/pro-list';

const dataSource = [
  {
    title: '第一单元测试',
  },
  {
    title: '期中考试',
  },
  {
    title: '期末考试',
  },
  {
    title: '随堂测验',
  },
];

export default () => {
  const [expandedRowKeys, setExpandedRowKeys] = useState<readonly ReactText[]>([]);

  return (
    <ProList<{ title: string }>
      rowKey="title"
      headerTitle="支持展开的列表"
      toolBarRender={() => {
        return [
          <Button key="3" type="primary">
            新建
          </Button>,
        ];
      }}
      expandable={{ expandedRowKeys, onExpandedRowsChange: setExpandedRowKeys }}
      dataSource={dataSource}
      metas={{
        title: {},
        subTitle: {
          render: () => {
            return (
              <Space size={0}>
                <Tag color="blue">类与继承</Tag>
                <Tag color="#5BD8A6">文件处理</Tag>
              </Space>
            );
          },
        },
        description: {
          render: () => {
            return (
              <Space size={0}>
                <Tag color="blue">选择题:9</Tag>
                <Tag color="#5BD8A6">填空题:10</Tag>
                <Space>一些描述信息</Space>
              </Space>
            );
            },
        },
        avatar: {},
        content: {
          render: () => (
            <div
              style={{
                minWidth: 200,
                flex: 1,
                display: 'flex',
                justifyContent: 'flex-end',
              }}
            >
              <div
                style={{
                  width: '200px',
                }}
              >
                <div>难度系数</div>
                <Progress percent={80} />
              </div>
            </div>
          ),
        },
        actions: {
          render: () => {
            return <a key="invite">邀请</a>;
          },
        },
      }}
    />
  );
};
