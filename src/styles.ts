import styled from "styled-components";
import { Layout } from "antd";
const { Header, Sider, Content } = Layout;
export const AppStyles = styled.div`
  .logo {
    height: 10vh;
    background: rgba(255, 255, 255, 0.2);
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
  }
  .tabs {
    background: #fff;
    padding: 0;
    position: fixed;
    width: 100%;
    z-index: 1;
  }
`;
export const HeaderStyle = styled(Header)`
  display: flex;
  justify-content: flex-end;
  &.ant-layout-header {
    background: #fff;
    padding: 0 30px;
    position: fixed;
    z-index: 1;
    width: calc(100% - 200px);
    border-bottom: 1px solid #f5f5f5;
  }
`;
export const SiderStyle = styled(Sider)`
  &.ant-layout-content {
    height: 100vh;
  }
`;
export const ContentStyle = styled(Content)`
  &.ant-layout-content {
    background: #f5f5f5;
    padding: 64px 0px;
    height: 100vh;
    border-bottom: 1px solid #f5f5f5;
  }
  .content {
    padding: 64px 0px;
    margin: 0 10px;
    display: flex;
  }
`;
