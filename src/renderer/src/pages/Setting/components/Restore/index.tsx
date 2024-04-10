import React from "react";
import "./index.module.less";
import { useTranslation } from "react-i18next";
import { Modal, message } from "antd";

export default function Restore() {
  const { t } = useTranslation();

  // 还原配置
  const handleRestoreConfig = () => {
    console.log("还原配置");
    Modal.confirm({
      title: t("pages.setting.restore.config.title"),
      content: t("pages.setting.restore.config.content"),
      onOk() {
        window.electron.ipcRenderer.invoke("STORE_RESTORE_CONFIG");
      },
    });
  };

  // 还原全部
  const handleRestoreAll = () => {
    Modal.confirm({
      title: t("pages.setting.restore.all.title"),
      content: t("pages.setting.restore.all.content"),
      onOk() {
        window.electron.ipcRenderer.invoke("STORE_RESTORE_ALL");
      },
    });
  };
  return (
    <div styleName="restore">
      <div styleName="btn" onClick={handleRestoreConfig}>
        {t("pages.setting.restore.config.btn")}
      </div>
      <div styleName="btn" onClick={handleRestoreAll}>
        {t("pages.setting.restore.all.btn")}
      </div>
    </div>
  );
}
