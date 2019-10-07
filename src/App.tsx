import React from "react";
import { Layout } from "antd";
import { AppStyles, ContentStyle, SiderStyle } from "./styles";
import "./App.css";
import "antd/dist/antd.css";
import Header from "./components/Header";
import Routes from "./routes";
const App: React.FC = () => {
  return (
    <AppStyles>
      <Layout>
        <SiderStyle trigger={null}>
          <div className="logo"> Learning </div>
        </SiderStyle>
        <Layout>
          <Header />
          <ContentStyle>
            <Routes />
          </ContentStyle>
        </Layout>
      </Layout>
    </AppStyles>
  );
};

export default App;
