import React from 'react';
import { Input, Layout, Menu, Button, Dropdown, Typography } from 'antd';
import { GlobalOutlined } from '@ant-design/icons';
import logo from '../../assets/logo.svg';
import styles from './Header.module.css';

const { Search } = Input;
const { Text, Title } = Typography;

export const Header: React.FC = () => {
  return (
    <div className={styles['app-header']}>
      <div className={styles['top-header']}>
        <div className={styles['inner']}>
          <Text>Make travel happier</Text>
          <Dropdown.Button
            style={{ marginLeft: 15 }}
            icon={<GlobalOutlined />}
            overlay={
              <Menu>
                <Menu.Item>English</Menu.Item>
                <Menu.Item>中文</Menu.Item>
              </Menu>
            }
          >
            Language
          </Dropdown.Button>
          <Button.Group className={styles['button-group']}>
            <Button>Sing up</Button>
            <Button>Sign in</Button>
          </Button.Group>
        </div>
      </div>
      <Layout.Header className={styles['main-header']}>
        <img src={logo} className={styles['App-logo']} alt="logo" />
        <Title className={styles.title} level={3}>
          React Travel
        </Title>
        <Search className={styles['search-input']} placeholder="pleace input" />
      </Layout.Header>

      <Menu mode="horizontal" className={styles['main-menu']}>
        <Menu.Item key={1}>Travel Home</Menu.Item>
        <Menu.Item key={2}>Weekly Home</Menu.Item>
        <Menu.Item key={3}>Weekly Home</Menu.Item>
        <Menu.Item key={4}>Weekly Home</Menu.Item>
        <Menu.Item key={5}>Weekly Home</Menu.Item>
        <Menu.Item key={6}>Weekly Home</Menu.Item>
        <Menu.Item key={7}>Weekly Home</Menu.Item>
        <Menu.Item key={8}>Weekly Home</Menu.Item>
        <Menu.Item key={9}>Weekly Home</Menu.Item>
      </Menu>
    </div>
  );
};
