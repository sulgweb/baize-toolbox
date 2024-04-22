import React, { useEffect } from "react";
import { lazy, Suspense } from "react";
import { Routes, Route, HashRouter, Navigate } from "react-router-dom";
import { ROUTERS } from "./ROUTERS";
import { Spin } from "antd";
import "./index.module.less";

const RecordWin = lazy(() => import("../pages/RecordWin"));
const ScreenShotWin = lazy(() => import("../pages/ScreenShotWin"));

export default function BaseRouter() {
  return (
    <HashRouter>
      <Suspense fallback={<></>}>
        <Routes>
          <Route path={"/"}>
            <Route path={ROUTERS.RECODE_WIN} element={<RecordWin />} />
            <Route path={ROUTERS.SCREEN_SHOT_WIN} element={<ScreenShotWin />} />
          </Route>
        </Routes>
      </Suspense>
    </HashRouter>
  );
}
