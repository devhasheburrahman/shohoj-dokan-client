import "animate.css";
import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/thumbs";
import "swiper/swiper-bundle.min.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import "yet-another-react-lightbox/styles.css";
import App from "./App";
import "./assets/scss/style.scss";
import products from "./data/products.json";
import "./i18n";
import PersistProvider from "./store/providers/persist-provider";
import { setProducts } from "./store/slices/product-slice";
import { store } from "./store/store";

store.dispatch(setProducts(products));

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <Provider store={store}>
    <PersistProvider>
      <App />
    </PersistProvider>
  </Provider>
);
