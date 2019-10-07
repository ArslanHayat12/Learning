import React from "react";
import { Layout } from "antd";
import { AppStyles, ContentStyle, SiderStyle } from "./styles";
import "./App.css";
import "antd/dist/antd.css";
import Header from "./components/Header";
import Routes from "./routes";
import { AppContextProvider } from "./AppContext";
const App: React.FC = () => {
  return (
    <AppStyles>
      <Layout>
        <SiderStyle trigger={null}>
          <div className="logo"> Learning </div>
        </SiderStyle>
        <Layout>
          <AppContextProvider>
            <Header />
            <ContentStyle>
              <Routes />
            </ContentStyle>
          </AppContextProvider>
        </Layout>
      </Layout>
    </AppStyles>
  );
};

export default App;
