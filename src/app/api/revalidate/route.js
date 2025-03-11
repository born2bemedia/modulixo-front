import { revalidateTag } from "next/cache";

export async function POST(request) {
  try {
    const payload = await request.json();

    if (payload.tags && Array.isArray(payload.tags)) {
      payload.tags.forEach((tag) => {
        revalidateTag(tag);
      });
    } else {
      console.warn("No valid tags found in payload.");
    }

    return new Response(null, { status: 204 });
  } catch (error) {
    console.error("Error in revalidation:", error);
    return new Response("Error processing request", { status: 500 });
  }
}
