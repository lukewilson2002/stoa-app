export { GET, POST } from "@/lib/auth";

// Checks session expiry and refreshes if necessary
import { auth } from "@/lib/auth";
export const middleware = auth;

// export const runtime = "edge";
