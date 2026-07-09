import { t as __exportAll } from "./rolldown-runtime_D7D4PA-g.mjs";
//#region src/pages/api/preview.ts
var preview_exports = /* @__PURE__ */ __exportAll({
	GET: () => GET,
	prerender: () => false
});
var GET = async ({ cookies, redirect, url }) => {
	const path = url.searchParams.get("redirect") || "/";
	cookies.set("preview", "true", {
		path: "/",
		httpOnly: false,
		sameSite: "none",
		secure: true,
		maxAge: 3600
	});
	return redirect(path);
};
//#endregion
//#region \0virtual:astro:page:src/pages/api/preview@_@ts
var page = () => preview_exports;
//#endregion
export { page };
