import { getEvents } from "@/app/lib/event";

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const page = parseInt(searchParams.get("page")) || 1;
    const limit = parseInt(searchParams.get("limit")) || 12; 

    const result = await getEvents(page, limit);
    return Response.json(result);
  } catch (error) {
    return Response.json({ success: false, total: 0, data: [] });
  }
}