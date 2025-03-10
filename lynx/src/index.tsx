import "@unocss/reset/normalize.css";
import "./uno.css";
import "./global.css";

import { root } from "@lynx-js/react";
import { App } from "./App.js";
import { MemoryRouter, Route, Routes } from "react-router";

root.render(
  <view class="size-full bg-slate-1 dark:bg-slate-5">
    <MemoryRouter>
      <Routes>
        <Route path="/" element={<App />} />
      </Routes>
    </MemoryRouter>
  </view>
);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept();
}
