import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import fs from 'fs';
import path from 'path';

function jsonDbPlugin() {
  return {
    name: 'json-db-plugin',
    configureServer(server) {
      server.middlewares.use('/api/contact', (req, res) => {
        if (req.method === 'POST') {
          let body = '';
          req.on('data', chunk => {
            body += chunk;
          });
          req.on('end', () => {
            try {
              const data = JSON.parse(body || '{}');
              const dbPath = path.resolve(__dirname, 'db.json');
              let db = { submissions: [] };
              if (fs.existsSync(dbPath)) {
                try {
                  db = JSON.parse(fs.readFileSync(dbPath, 'utf-8'));
                  if (!Array.isArray(db.submissions)) db.submissions = [];
                } catch (e) {
                  db = { submissions: [] };
                }
              }
              const newEntry = {
                id: Date.now(),
                timestamp: new Date().toISOString(),
                formattedTime: new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' }),
                ...data
              };
              db.submissions.unshift(newEntry);
              fs.writeFileSync(dbPath, JSON.stringify(db, null, 2), 'utf-8');
              res.setHeader('Content-Type', 'application/json');
              res.statusCode = 200;
              res.end(JSON.stringify({ success: true, message: 'Saved successfully', entry: newEntry }));
            } catch (err) {
              res.statusCode = 500;
              res.setHeader('Content-Type', 'application/json');
              res.end(JSON.stringify({ error: err.message }));
            }
          });
        } else if (req.method === 'GET') {
          const dbPath = path.resolve(__dirname, 'db.json');
          let db = { submissions: [] };
          if (fs.existsSync(dbPath)) {
            try {
              db = JSON.parse(fs.readFileSync(dbPath, 'utf-8'));
            } catch (e) {}
          }
          res.setHeader('Content-Type', 'application/json');
          res.end(JSON.stringify(db));
        } else {
          res.statusCode = 405;
          res.end();
        }
      });
    }
  };
}

export default defineConfig({
  plugins: [react(), jsonDbPlugin()]
});
