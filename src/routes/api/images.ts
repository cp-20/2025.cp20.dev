import type { APIEvent } from "@solidjs/start/server";

export const GET = async ({ request }: APIEvent) => {
  "use server";

  const url = new URL(request.url);
  const imageUrl = url.searchParams.get("url");
  if (!imageUrl) {
    return new Response("Missing image URL parameter", { status: 400 });
  }

  const width = Number.parseInt(url.searchParams.get("width") || "400", 10);
  const height =
    Number.parseInt(url.searchParams.get("height") || "0", 10) || undefined;
  const quality = Number.parseInt(url.searchParams.get("quality") || "75", 10);
  const fit = url.searchParams.get("fit") || "scale-down";

  const cfOptions = {
    cf: { image: { width, height, quality, fit, format: "auto" } },
  };

  try {
    const response = await fetch(imageUrl, cfOptions as RequestInit);

    if (!response.ok) {
      return new Response(`Failed to fetch image: ${response.statusText}`, {
        status: response.status,
      });
    }

    return new Response(response.body, {
      headers: response.headers,
      status: response.status,
    });
  } catch (err) {
    console.error("Error fetching image:", err);
    return new Response("Error processing image", { status: 500 });
  }
};
