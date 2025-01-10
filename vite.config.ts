import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import svgr from "vite-plugin-svgr";

export default defineConfig({
  plugins: [react(), svgr()],
  resolve: {
    alias: {
      "@src": "/src",
      "@components": "/src/components",
      "@pages": "/src/pages",
      "@redux": "/src/redux",
      "@assets": "/src/assets",
      "@shared": "/src/shared",
      "@utils": "/src/utils",
      "@hooks": "/src/hooks",
      "@api": "/src/api",
    },
  },
});
