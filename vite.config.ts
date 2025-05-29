import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // Charger les variables d'environnement
  const env = loadEnv(mode, process.cwd(), '');

  return {
    server: {
      host: "::",
      port: 8080,
    },
    plugins: [
      react(),
      mode === 'development' && componentTagger(),
    ].filter(Boolean),
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
    // Exposition des variables d'environnement au client
    define: {
      'process.env': Object.entries(env).reduce((acc, [key, val]) => {
        if (key.startsWith('VITE_')) {
          acc[`import.meta.env.${key}`] = JSON.stringify(val);
        }
        return acc;
      }, {} as Record<string, string>)
    }
  };
});