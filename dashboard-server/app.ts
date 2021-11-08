import express from 'express';
const app = express();
import path from 'path';
import fs from 'fs';

const port = 3000;

const root = process.env.DASHBOARD_SRC_PATH as string ?? '/home/dashboard';

app.get('*', (req, res) => {
  fs.stat(path.join(root, req.path), (err) =>
    res.sendFile(err ? 'index.html' : req.path, { root })
  );
});

app.listen(port);
