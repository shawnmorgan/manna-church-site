import { createClient } from "@sanity/client";
//#region \0sanity:client
var sanityClient = createClient({
	"apiVersion": "2024-01-01",
	"projectId": "0o0tjt6s",
	"dataset": "production",
	"useCdn": false,
	"stega": { "studioUrl": "https://new26.manna.church/studio" }
});
//#endregion
export { sanityClient as t };
