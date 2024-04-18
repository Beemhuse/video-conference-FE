import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import fs from 'fs'

function readSecureFile(path) {
  console.log("path ==> ", path)
  try {
    return fs.readFileSync(path);
  } catch (error) {
    console.error(`Failed to load ${path}:`, error);
    return null;
  }
}
// https://vitejs.dev/config/
export default defineConfig({
  server: {
    https: {
      key: readSecureFile('./certs/create-cert-key.pem'),
      cert: readSecureFile('./certs/create-cert.pem'),
    },
  },
  plugins: [react()],
})
