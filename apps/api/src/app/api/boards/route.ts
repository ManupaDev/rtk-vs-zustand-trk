import db from "@/app/server/infrastructure/db";
import { NextRequest, NextResponse } from "next/server";

// GET /api/boards - Get all boards
export async function GET() {
  try {
    const boards = await db.boards.getAllBoards();
    return NextResponse.json(boards);
  } catch (error) {
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}

// POST /api/boards - Create a new board
export async function POST(req: NextRequest) {
  try {
    const data = await req.json();
    // Assume data is a valid TBoard
    const newBoard = await db.boards.createBoard(data);
    return NextResponse.json(newBoard, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
