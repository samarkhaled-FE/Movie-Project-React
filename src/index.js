// import { createRoot } from "react-dom/client";
// import App from "./App";
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.bundle.min.js';

// import "./index.css";

// createRoot(document.getElementById("root")).render(<App />);

import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import store from "./store/store"; // تأكد من مسار الاستيراد
import App from "./App";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import "./index.css";

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
  </Provider>
);

