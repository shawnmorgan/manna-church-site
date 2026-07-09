import { t as __exportAll } from "./rolldown-runtime_D7D4PA-g.mjs";
import { perspectiveCookieName } from "@sanity/preview-url-secret/constants";
//#region src/pages/api/draft.ts
var draft_exports = /* @__PURE__ */ __exportAll({
	GET: () => GET,
	prerender: () => false
});
var GET = async ({ cookies, redirect }) => {
	cookies.delete(perspectiveCookieName, { path: "/" });
	return redirect("/", 307);
};
//#endregion
//#region \0virtual:astro:page:src/pages/api/draft@_@ts
var page = () => draft_exports;
//#endregion
export { page };
