import React from 'react';
import { Menu } from 'antd';
import { GlobalOutlined } from '@ant-design/icons';
import { sideMenuList } from './mockup';
import styles from './sideMenu.module.css';

export const SideMenu = () => {
  return (
    <Menu mode="vertical" className={styles['side-menu']}>
      {sideMenuList?.map((item, index) => (
        <Menu.SubMenu
          key={`'side-menu-${index}`}
          title={
            <span>
              <GlobalOutlined />
              {item.title}
            </span>
          }
        >
          {item.subMenu.map((sm, smindex) => (
            <Menu.SubMenu
              key={`sub-menu-${smindex}`}
              title={
                <span>
                  <GlobalOutlined />
                  {sm.title}
                </span>
              }
            >
              {sm.subMenu.map((sms, index) => (
                <Menu.Item key={`sub-sub-menu${index}`}>
                  <span>
                    <GlobalOutlined />
                    {sms}
                  </span>
                </Menu.Item>
              ))}
            </Menu.SubMenu>
          ))}
        </Menu.SubMenu>
      ))}
    </Menu>
  );
};
