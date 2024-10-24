import { Hono } from "hono";
import { handle } from "hono/vercel";
import auth from "@/features/auth/server/route";
// import workspaces from "@/features/workspaces/route";

const app = new Hono().basePath("/api");

// const routes = app.route("/auth", auth).route("/workspace", workspaces);

export const GET = handle(app);
export const POST = handle(app);

// export type AppType = typeof routes;
