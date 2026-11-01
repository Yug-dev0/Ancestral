import { join, resolve } from 'node:path';
import { collabSecret } from '@ancestral/realtime/token';
import { createCollabServer } from './server.js';

// Defaults match the web app's: its data lives in apps/web/.ancestral.
const dataDir = resolve(process.env['ANCESTRAL_DATA_DIR'] ?? process.env['LINEAGE_DATA_DIR'] ?? join(process.cwd(), '..', 'web', '.ancestral'));
const port = Number(process.env['ANCESTRAL_COLLAB_PORT'] ?? process.env['LINEAGE_COLLAB_PORT'] ?? 1234);

const collab = createCollabServer({ dataDir, port, secret: collabSecret(), quiet: true });
const actual = await collab.listen();
console.log(`Ancestral collab listening on ws://localhost:${actual} (data: ${dataDir})`);

const stop = async () => {
  await collab.close();
  process.exit(0);
};
process.on('SIGINT', stop);
process.on('SIGTERM', stop);
