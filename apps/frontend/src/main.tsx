import * as React from "react";
// @ts-ignore
import { createRoot } from "react-dom/client";
import { QueryClient, QueryClientProvider } from "react-query";
import { store } from "./store/store";
import { Provider } from "react-redux";
import { App } from "./App";

const queryClient = new QueryClient();
const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    </Provider>
  </React.StrictMode>
);
