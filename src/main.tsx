import React from "react";
import ReactDOM from "react-dom/client";

import QueryClientProvider from "@/queries/index.tsx";
import { store } from "@/redux/store/store.ts";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App.tsx";
import enTranslations from "@shopify/polaris/locales/en.json";
import { AppProvider } from "@shopify/polaris";
import "@shopify/polaris/build/esm/styles.css";
import "./styles.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <QueryClientProvider>
        <AppProvider i18n={enTranslations}>
          <Router basename={""}>
            <App />
          </Router>
        </AppProvider>
      </QueryClientProvider>
    </Provider>
  </React.StrictMode>,
);
