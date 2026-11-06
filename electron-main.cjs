const { app, BrowserWindow, Menu } = require("electron");
const path = require("node:path");

function createWindow() {
  const window = new BrowserWindow({
    width: 460,
    height: 900,
    minWidth: 360,
    minHeight: 680,
    title: "Lotus Garden Productivity",
    backgroundColor: "#fbfaf8",
    autoHideMenuBar: true,
    webPreferences: {
      contextIsolation: true,
      nodeIntegration: false,
      sandbox: true
    }
  });

  Menu.setApplicationMenu(null);
  window.loadFile(path.join(__dirname, "index.html"));
}

app.whenReady().then(() => {
  createWindow();
  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") app.quit();
});
