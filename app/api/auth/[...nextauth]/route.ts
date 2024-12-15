import { handlers } from "@/lib/auth";
export const { GET, POST } = handlers;

// Checks session expiry and refreshes if necessary
export { auth as middleware } from "@/lib/auth";

// export const runtime = "edge";
