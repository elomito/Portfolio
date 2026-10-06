import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import fs from 'fs';
import {defineConfig} from 'vite';

function photoUploadPlugin() {
  return {
    name: 'photo-upload-handler',
    configureServer(server: any) {
      // Dynamic public static files middleware with decoding for spaces & real-time files
      server.middlewares.use((req: any, res: any, next: any) => {
        if (req.method !== 'GET' && req.method !== 'HEAD') return next();
        try {
          const rawUrl = decodeURIComponent(req.url.split('?')[0]);
          const relativePath = rawUrl.replace(/^\//, '');
          if (relativePath) {
            const candidatePath = path.resolve(__dirname, 'public', relativePath);
            if (fs.existsSync(candidatePath) && fs.statSync(candidatePath).isFile()) {
              const ext = path.extname(candidatePath).toLowerCase();
              const mimeTypes: Record<string, string> = {
                '.webp': 'image/webp',
                '.jpeg': 'image/jpeg',
                '.jpg': 'image/jpeg',
                '.png': 'image/png',
                '.svg': 'image/svg+xml',
                '.gif': 'image/gif',
                '.ico': 'image/x-icon',
              };
              const contentType = mimeTypes[ext] || 'application/octet-stream';
              res.writeHead(200, {
                'Content-Type': contentType,
                'Cache-Control': 'no-cache',
              });
              fs.createReadStream(candidatePath).pipe(res);
              return;
            }
          }
        } catch {}
        next();
      });

      // Photo upload API
      server.middlewares.use('/api/upload-photo', (req: any, res: any) => {
        if (req.method === 'POST') {
          let body = '';
          req.on('data', (chunk: any) => { body += chunk; });
          req.on('end', () => {
            try {
              const { filename, base64 } = JSON.parse(body);
              if (filename && base64) {
                const buffer = Buffer.from(base64.replace(/^data:image\/\w+;base64,/, ''), 'base64');
                const targetPath = path.resolve(__dirname, 'public', filename);
                fs.writeFileSync(targetPath, buffer);
                // Also write sanitized filename without spaces/special chars
                const sanitized = filename.toLowerCase().replace(/[^a-z0-9.]/g, '-');
                if (sanitized !== filename) {
                  fs.writeFileSync(path.resolve(__dirname, 'public', sanitized), buffer);
                }
                res.writeHead(200, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ success: true, path: '/' + filename, sanitizedPath: '/' + sanitized }));
                return;
              }
            } catch (err: any) {
              res.writeHead(500, { 'Content-Type': 'application/json' });
              res.end(JSON.stringify({ error: err.message }));
              return;
            }
            res.writeHead(400, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ error: 'Missing filename or base64 data' }));
          });
        } else {
          res.writeHead(405);
          res.end();
        }
      });
    }
  };
}

export default defineConfig(() => {
  return {
    plugins: [react(), tailwindcss(), photoUploadPlugin()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      // Allow your Render host (or use ['.onrender.com'] / true to allow all)
      allowedHosts: true,
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modify—file watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
      // Disable file watching when DISABLE_HMR is true to save CPU during agent edits.
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});