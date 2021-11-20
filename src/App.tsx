import { Header, Footer, Carousel, SideMenu } from './components';
import styles from './App.module.css';
import { Col, Row } from 'antd';

function App() {
  return (
    <div className={styles.App}>
      <Header />
      <div className={styles['page-content']}>
        <Row style={{ marginTop: 20 }}>
          <Col span={6}>
            <SideMenu />
          </Col>
          <Col span={18}>
            <Carousel />
          </Col>
        </Row>
      </div>
      <Footer />
    </div>
  );
}

export default App;
