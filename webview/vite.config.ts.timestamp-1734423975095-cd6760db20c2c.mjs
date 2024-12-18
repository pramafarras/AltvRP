// vite.config.ts
import { defineConfig } from "file:///D:/ALTV%20Server/ServerRP/rebar-altv/node_modules/.pnpm/vite@5.4.3_@types+node@20.16.4/node_modules/vite/dist/node/index.js";
import vue from "file:///D:/ALTV%20Server/ServerRP/rebar-altv/node_modules/.pnpm/@vitejs+plugin-vue@5.1.3_vite@5.4.3_@types+node@20.16.4__vue@3.5.1_typescript@5.5.4_/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import path from "path";
var __vite_injected_original_dirname = "D:\\ALTV Server\\ServerRP\\rebar-altv\\webview";
var vite_config_default = defineConfig({
  base: "./",
  build: {
    outDir: "../resources/webview",
    emptyOutDir: true,
    minify: "esbuild",
    reportCompressedSize: false
  },
  resolve: {
    alias: {
      "@Client": path.resolve(__vite_injected_original_dirname, "../src/main/client"),
      "@Server": path.resolve(__vite_injected_original_dirname, "../src/main/server"),
      "@Shared": path.resolve(__vite_injected_original_dirname, "../src/main/shared"),
      "@Plugins": path.resolve(__vite_injected_original_dirname, "../src/plugins"),
      "@Composables": path.resolve(__vite_injected_original_dirname, "./composables"),
      "@Components": path.resolve(__vite_injected_original_dirname, "./components")
    }
  },
  plugins: [vue()]
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOlxcXFxBTFRWIFNlcnZlclxcXFxTZXJ2ZXJSUFxcXFxyZWJhci1hbHR2XFxcXHdlYnZpZXdcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkQ6XFxcXEFMVFYgU2VydmVyXFxcXFNlcnZlclJQXFxcXHJlYmFyLWFsdHZcXFxcd2Vidmlld1xcXFx2aXRlLmNvbmZpZy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vRDovQUxUViUyMFNlcnZlci9TZXJ2ZXJSUC9yZWJhci1hbHR2L3dlYnZpZXcvdml0ZS5jb25maWcudHNcIjtpbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tICd2aXRlJztcclxuaW1wb3J0IHZ1ZSBmcm9tICdAdml0ZWpzL3BsdWdpbi12dWUnO1xyXG5pbXBvcnQgcGF0aCBmcm9tICdwYXRoJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XHJcbiAgICBiYXNlOiAnLi8nLFxyXG4gICAgYnVpbGQ6IHtcclxuICAgICAgICBvdXREaXI6ICcuLi9yZXNvdXJjZXMvd2VidmlldycsXHJcbiAgICAgICAgZW1wdHlPdXREaXI6IHRydWUsXHJcbiAgICAgICAgbWluaWZ5OiAnZXNidWlsZCcsXHJcbiAgICAgICAgcmVwb3J0Q29tcHJlc3NlZFNpemU6IGZhbHNlLFxyXG4gICAgfSxcclxuICAgIHJlc29sdmU6IHtcclxuICAgICAgICBhbGlhczoge1xyXG4gICAgICAgICAgICAnQENsaWVudCc6IHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsICcuLi9zcmMvbWFpbi9jbGllbnQnKSxcclxuICAgICAgICAgICAgJ0BTZXJ2ZXInOiBwYXRoLnJlc29sdmUoX19kaXJuYW1lLCAnLi4vc3JjL21haW4vc2VydmVyJyksXHJcbiAgICAgICAgICAgICdAU2hhcmVkJzogcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgJy4uL3NyYy9tYWluL3NoYXJlZCcpLFxyXG4gICAgICAgICAgICAnQFBsdWdpbnMnOiBwYXRoLnJlc29sdmUoX19kaXJuYW1lLCAnLi4vc3JjL3BsdWdpbnMnKSxcclxuICAgICAgICAgICAgJ0BDb21wb3NhYmxlcyc6IHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsICcuL2NvbXBvc2FibGVzJyksXHJcbiAgICAgICAgICAgICdAQ29tcG9uZW50cyc6IHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsICcuL2NvbXBvbmVudHMnKSxcclxuICAgICAgICB9LFxyXG4gICAgfSxcclxuICAgIHBsdWdpbnM6IFt2dWUoKV0sXHJcbn0pO1xyXG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQTRULFNBQVMsb0JBQW9CO0FBQ3pWLE9BQU8sU0FBUztBQUNoQixPQUFPLFVBQVU7QUFGakIsSUFBTSxtQ0FBbUM7QUFJekMsSUFBTyxzQkFBUSxhQUFhO0FBQUEsRUFDeEIsTUFBTTtBQUFBLEVBQ04sT0FBTztBQUFBLElBQ0gsUUFBUTtBQUFBLElBQ1IsYUFBYTtBQUFBLElBQ2IsUUFBUTtBQUFBLElBQ1Isc0JBQXNCO0FBQUEsRUFDMUI7QUFBQSxFQUNBLFNBQVM7QUFBQSxJQUNMLE9BQU87QUFBQSxNQUNILFdBQVcsS0FBSyxRQUFRLGtDQUFXLG9CQUFvQjtBQUFBLE1BQ3ZELFdBQVcsS0FBSyxRQUFRLGtDQUFXLG9CQUFvQjtBQUFBLE1BQ3ZELFdBQVcsS0FBSyxRQUFRLGtDQUFXLG9CQUFvQjtBQUFBLE1BQ3ZELFlBQVksS0FBSyxRQUFRLGtDQUFXLGdCQUFnQjtBQUFBLE1BQ3BELGdCQUFnQixLQUFLLFFBQVEsa0NBQVcsZUFBZTtBQUFBLE1BQ3ZELGVBQWUsS0FBSyxRQUFRLGtDQUFXLGNBQWM7QUFBQSxJQUN6RDtBQUFBLEVBQ0o7QUFBQSxFQUNBLFNBQVMsQ0FBQyxJQUFJLENBQUM7QUFDbkIsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
