import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import { copyFileSync, existsSync } from "fs";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(), 
    mode === "development" && componentTagger(),
    {
      name: 'copy-htaccess',
      closeBundle() {
        try {
          const source = 'public/.htaccess';
          const dest = 'dist/.htaccess';
          if (existsSync(source)) {
            copyFileSync(source, dest);
            console.log('✅ .htaccess copiado para dist/');
          } else {
            console.warn('⚠️  .htaccess não encontrado em public/');
          }
        } catch (error) {
          console.error('❌ Erro ao copiar .htaccess:', error);
        }
      }
    }
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
