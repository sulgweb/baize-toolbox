import { app, BrowserWindow } from "electron"
import { electronApp, optimizer } from "@electron-toolkit/utils"
import "@main/plugin"
import { createMainWin } from "@main/helper"
import { autoLanuch } from "@main/utils/autoLanuch"

app.whenReady().then(() => {
  autoLanuch()
  electronApp.setAppUserModelId("com.electron")
  app.on("browser-window-created", (_, window) => {
    optimizer.watchWindowShortcuts(window)
  })
  createMainWin()
  app.on("activate", function () {
    if (BrowserWindow.getAllWindows().length === 0) {
      createMainWin()
    }
  })
})

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit()
  }
})
