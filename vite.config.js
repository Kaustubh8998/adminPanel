import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    sourcemap: true,
  },
<<<<<<< HEAD
  base: "/",
});
=======
  base:"./"
})
>>>>>>> cb14326b0a44e08bfb5b4ba5f7ef5207324afbb1
