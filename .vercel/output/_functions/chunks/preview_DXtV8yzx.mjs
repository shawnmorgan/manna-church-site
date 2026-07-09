import { t as __exportAll } from "./rolldown-runtime_D7D4PA-g.mjs";
import { t as sanityClient } from "./_sanity_client_B74aUm-J.mjs";
import { perspectiveCookieName } from "@sanity/preview-url-secret/constants";
import { validatePreviewUrl } from "@sanity/preview-url-secret";
//#region src/pages/api/preview.ts
var preview_exports = /* @__PURE__ */ __exportAll({
	GET: () => GET,
	prerender: () => false
});
var GET = async ({ request, cookies, redirect }) => {
	const { isValid, redirectTo = "/", studioPreviewPerspective } = await validatePreviewUrl(sanityClient.withConfig({ token: "skjVFCVDZmCtY3dsUXKUKNaQszxT1lbIRjfw5xqzo4x7hatOnXKTB7gJWrbbEegmVkzI05Q6xakaCcLqfHtiHzoYX6eiB9k5sjg3pfNyMho8Ejm36zuvQ9wJmiYpYjN9YC7uQ1DyvZEgCriBkFI2fSbCLgb4dFsycjs8KQPdFlmgvdiuT8Qb" }), request.url);
	if (!isValid) return new Response("Invalid secret", { status: 401 });
	cookies.set(perspectiveCookieName, studioPreviewPerspective ?? "drafts", {
		httpOnly: false,
		sameSite: "none",
		secure: true,
		path: "/"
	});
	return redirect(redirectTo, 307);
};
//#endregion
//#region \0virtual:astro:page:src/pages/api/preview@_@ts
var page = () => preview_exports;
//#endregion
export { page };
