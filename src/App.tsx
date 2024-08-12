import React from 'react';
import { Admin, Resource } from 'react-admin';
import grammar from './grammars';
import { dataProvider } from "./@shared/DataProvider";
import { authProvider } from "./@shared/AuthProvider";
import LoginPage from "./@core/application/layout/Login";
import { HelmetProvider, Helmet } from "react-helmet-async"; // Adjust import to use react-helmet-async
import { theme } from "./@core/application/layout/Theme";
import automata from "./automata";
import MetaTags from './MetaTags'; // Adjust import path accordingly

const App = () => (
  <HelmetProvider>
    <main>
      <MetaTags />
      <Admin
        theme={theme}
        authProvider={authProvider}
        dataProvider={dataProvider}
        loginPage={LoginPage}
      >
        <Resource name="grammars" {...grammar} />
        <Resource name="automata" {...automata} />
      </Admin>
    </main>
  </HelmetProvider>
);

export default App;