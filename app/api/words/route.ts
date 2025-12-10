import { NextResponse } from "next/server";
import { readFileLines, writeFileLines } from "@/app/utils/fileManager";

const FILE_PATH = "data/words.txt";

// Récupérer tous les mots
export async function GET() {
  const words = await readFileLines(FILE_PATH);
  return NextResponse.json({ words });
}

// Ajouter de nouveaux mots
export async function POST(req: Request) {
  const body = await req.json();
  const { words } = body;

  if (!Array.isArray(words)) {
    return NextResponse.json({ error: "Invalid format" }, { status: 400 });
  }

  await writeFileLines(FILE_PATH, words);

  return NextResponse.json({ status: "success" });
}
