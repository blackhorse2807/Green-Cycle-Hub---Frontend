import { promises as fs } from 'fs';
import path from 'path';

async function getVersionInfo() {
  try {
    const filePath = path.join(process.cwd(), '/version.txt');
    const data = await fs.readFile(filePath, 'utf-8');
    const firstLine = data.split('\n')[0].trim();
    const version = firstLine.replace(/^#/, '').trim();
    return { appName: 'Velebitgreen', appVersion: version };
  } catch (error) {
    console.error('Error reading version:', error);
    return { appName: 'myapp', appVersion: 'unknown' };
  }
}

export default async function VersionPage() {
  const { appName, appVersion } = await getVersionInfo();

  return (
    <main style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1>App Version</h1>
      <p><strong>app-name:</strong> {appName}</p>
      <p><strong>app-version:</strong> {appVersion}</p>
    </main>
  );
}
