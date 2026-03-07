import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc'
import tailwindcss from '@tailwindcss/vite'


// https://vite.dev/config/
export default defineConfig(({command})=>{
  return{
  base: command === 'build'?'/client':'/',
  plugins: [react(), tailwindcss()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/setupTests.ts', // Archivo para extensiones de expect
  },
}
})
