export const dynamic = "force-dynamic";

import db from "@/app/server/infrastructure/db";
import { NextRequest, NextResponse } from "next/server";

// POST /api/boards/[id]/columns/[columnId]/cards - create a task in a column
export async function POST(
  req: NextRequest,
  { params }: { params: Promise<{ id: string; columnId: string }> }
) {
  const { id, columnId } = await params;
  try {
    const body = await req.json().catch(() => ({}));
    const title = String(body?.title ?? "").trim();
    const priority = body?.priority ? String(body.priority) : undefined;
    if (!title) {
      return NextResponse.json({ error: "title required" }, { status: 400 });
    }
    console.log(title, priority);
    const created = await db.boards.addCard(id, columnId, { title, priority });
    if (!created) {
      return NextResponse.json({ error: "Board/column not found" }, { status: 404 });
    }
    return NextResponse.json(created, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}


