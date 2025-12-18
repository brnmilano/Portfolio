import type { NextRequest } from "next/server";

export function proxy(request: NextRequest) {
  console.log("Proxying request:", request.url);
}
