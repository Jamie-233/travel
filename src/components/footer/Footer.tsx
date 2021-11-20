import React from 'react';
import { Layout, Typography } from 'antd';

const { Title } = Typography;

export const Footer: React.FC = () => {
  return (
    <Layout.Footer>
      <Title level={3} style={{ textAlign: 'center' }}>
        Made With React
      </Title>
    </Layout.Footer>
  );
};
