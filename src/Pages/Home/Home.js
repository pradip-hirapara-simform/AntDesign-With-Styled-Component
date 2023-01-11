 import { DownloadOutlined } from "@ant-design/icons/lib/icons";
import {  Col, Row } from "antd"; 
import Input from "antd/es/input/Input";
import { Button } from "../../Component/Button/Button";
import { Card } from "../../Component/Card/Card";

function Home() {
  return (
    <div className="App">
      <Row gutter={16}>
        <Col className="gutter-row" span={6}>
          <Button type="primary" size="middle">Button</Button>
          <Button size="middle" icon={<DownloadOutlined />}>Button</Button>
          <Button size="middle" icon={<DownloadOutlined />} />
          <Button size="small">Button</Button>
          <Button size="large">Button</Button>
          <Input placeholder="Basic usage" />
        </Col> 
        <Col className="gutter-row" span={6}>
          <Card />
        </Col> 
      </Row>
    </div>
  );
}

export default Home;
