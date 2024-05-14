import { authMiddleware } from "@clerk/nextjs/server";


export default authMiddleware({
  publicRoutes: ["/sign-in", "/sign-up", "/api(.*)", "/api/webhooks(.*)"],
});

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)","/","/(api|trpc)(.*)"],
};