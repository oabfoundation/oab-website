import { getProjects } from "@/app/lib/project";

export async function GET() {
  const result = await getProjects();

  return Response.json(result);
}