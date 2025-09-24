{
  "name": "pvzge-electron-app",
  "version": "1.0.0",
  "description": "PvZ Gardendless running in Electron",
  "main": "main.js",
  "scripts": {
    "start": "electron .",
    "build:linux": "electron-builder --linux --x64"
  },
  "author": "Gaozih",
  "license": "ISC",
  "devDependencies": {
    "electron": "^31.0.1",
    "electron-builder": "^26.0.12"
  },
  "build": {
    "appId": "com.gaozih.pvzge",
    "productName": "PvZ Gardendless",
    "files": [
      "game/**/*",
      "main.js",
      "package.json"
    ],
    "directories": {
      "output": "release"
    },
    "linux": {
      "target": "AppImage",
      "category": "Game"
    }
  }
}
