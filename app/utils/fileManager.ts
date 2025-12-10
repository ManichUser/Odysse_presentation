import { promises as fs } from 'fs';
import path from 'path';

export async function readFileLines(filePath: string): Promise<string[]> {
  const fullPath = path.resolve(process.cwd(), filePath);

  try {
    const content = await fs.readFile(fullPath, 'utf8');
    return content.split('\n').map(l => l.trim()).filter(Boolean);
  } catch (err: any) {
    if (err.code === "ENOENT") return [];
    throw err;
  }
}

export async function writeFileLines(filePath: string, lines: string[]): Promise<void> {
  const fullPath = path.resolve(process.cwd(), filePath);
  const dir = path.dirname(fullPath);

  // Créer le dossier si nécessaire
  try {
    await fs.mkdir(dir, { recursive: true });
  } catch (err) {
    console.error("Erreur création dossier", err);
  }

  const text = lines.map(l => l.trim()).join("\n") + "\n";

  // Ajouter au fichier (créé automatiquement si absent)
  await fs.appendFile(fullPath, text, 'utf8');
}
