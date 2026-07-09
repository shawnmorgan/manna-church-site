import { t as __exportAll } from "./rolldown-runtime_D7D4PA-g.mjs";
import { S as createComponent, g as addAttribute, h as renderHead, i as renderComponent, m as maybeRenderHead, s as renderSlot, u as renderTemplate, x as createAstro } from "./server_D0sAaBMA.mjs";
import "./compiler_bqGEvU-1.mjs";
import { t as sanityClient$1 } from "./_sanity_client_B74aUm-J.mjs";
import { useEffect, useMemo, useRef, useState } from "react";
import { perspectiveCookieName } from "@sanity/preview-url-secret/constants";
import { createClient } from "@sanity/client";
import { jsx, jsxs } from "react/jsx-runtime";
import imageUrlBuilder from "@sanity/image-url";
//#region astro:scripts/page-ssr.js
globalThis.sanityClient = sanityClient$1;
//#endregion
//#region src/layouts/BaseLayout.astro
createAstro("https://astro.build");
var $$BaseLayout = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$BaseLayout;
	const { title = "Manna Church - A Vision to Change the World", description = "Our mission is to glorify God by equipping His people to change their world and by planting churches with the same world-changing vision." } = Astro.props;
	const draftMode = Astro.cookies.has(perspectiveCookieName);
	return renderTemplate`<html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><meta name="description"${addAttribute(description, "content")}><title>${title}</title><!-- Google Fonts: Archivo family --><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Archivo+Black&family=Archivo+Narrow:wght@400;500;600;700&family=Archivo:wght@400;500;600;700;800;900&display=swap" rel="stylesheet">${renderHead($$result)}</head><body>${renderSlot($$result, $$slots["default"])}${draftMode && renderTemplate`${renderComponent($$result, "VisualEditing", null, {
		"client:only": "react",
		"client:component-hydration": "only",
		"client:component-path": "/Users/shawnmorgan/Desktop/Projects/Manna Church/manna-church-site/src/components/VisualEditing.tsx",
		"client:component-export": "default"
	})}`}</body></html>`;
}, "/Users/shawnmorgan/Desktop/Projects/Manna Church/manna-church-site/src/layouts/BaseLayout.astro", void 0);
//#endregion
//#region src/components/Hero.tsx
/**
* Hero Component - Pixel-perfect from Figma with entrance animations
* Fully responsive for mobile, tablet, and desktop
* Node ID: 58:4
*/
function useMediaQuery$5() {
	const [isMobile, setIsMobile] = useState(false);
	const [isTablet, setIsTablet] = useState(false);
	useEffect(() => {
		const checkSize = () => {
			setIsMobile(window.innerWidth < 768);
			setIsTablet(window.innerWidth >= 768 && window.innerWidth < 1024);
		};
		checkSize();
		window.addEventListener("resize", checkSize);
		return () => window.removeEventListener("resize", checkSize);
	}, []);
	return {
		isMobile,
		isTablet,
		isDesktop: !isMobile && !isTablet
	};
}
var COLLAGE_IMAGES = [
	"imgi_11_assets%2Fe927ca2cb62846a7a02d009f4fa074af%2F9b7ed43dbd1349a39d0ede0d7f190aa2.jpg",
	"imgi_12_IMG_0053-1-scaled.jpg",
	"imgi_12_manna-new-1.jpg",
	"imgi_14_Feb19Outreach-45_websize.jpg",
	"imgi_15_Header.jpg",
	"imgi_15_LcWuH2Wa8aMQw8S8j4fIshIB0a3AR4ljUhAbJxej-2.jpg",
	"imgi_18_IMG_0132-scaled.jpg",
	"imgi_2_mkids.jpg",
	"imgi_23_Jenny-Fillinger-ServeDay_March2022_Jenny-77-scaled-1-2048x1366.jpg",
	"imgi_25_Manna-_2.jpg",
	"imgi_26_4Y1A1714-scaled.jpg",
	"imgi_29_4Y1A1299-1-scaled.jpg",
	"imgi_3_20451305_1440x960_500.jpg",
	"imgi_37_NZ7_6091-scaled.jpg",
	"imgi_38_NZ7_6135-scaled.jpg",
	"imgi_39_DSC_9729-scaled.jpg",
	"imgi_4_2021-3.jpeg",
	"imgi_4_mserve.jpg",
	"imgi_40_DSC_9851-scaled.jpg",
	"imgi_41_521A7206.jpg",
	"imgi_42_NZ7_6099-1-scaled.jpg",
	"imgi_44_521A7275-1.jpg",
	"imgi_5_manna-new-2-2048x1536.jpg",
	"imgi_50_Manna-9.24.24-32_websize.jpg",
	"imgi_6_0C0A9849.jpg",
	"imgi_6_assets%2Fe927ca2cb62846a7a02d009f4fa074af%2F1086e2bafe38453b9a66ed775405e419.jpg",
	"imgi_61_BaptismPhotos-9684-scaled.jpg",
	"imgi_69_IMG_1684-Abigail-Pottorff-scaled.jpg",
	"imgi_72_EP_20220619_SVC-1_2_Greg-40-scaled.jpg",
	"imgi_8_7728510_728x550_500.png",
	"imgi_91_assets%2Fe927ca2cb62846a7a02d009f4fa074af%2F33c657079d57421fa87c3214429c0a04.jpg",
	"imgi_94_IMG_3601-scaled.jpg"
];
var IMAGE_POSITIONS = [
	{
		width: 280,
		height: 200,
		rotation: -6,
		left: "80px",
		top: "90.73px",
		borderRadius: "4px"
	},
	{
		width: 240,
		height: 320,
		rotation: 4,
		left: "1077.68px",
		top: "60px",
		borderRadius: "4px"
	},
	{
		width: 260,
		height: 260,
		rotation: 5,
		left: "40px",
		top: "580px",
		borderRadius: "4px"
	},
	{
		width: 300,
		height: 200,
		rotation: -7,
		left: "1096px",
		top: "434px",
		borderRadius: "4px"
	},
	{
		width: 200,
		height: 140,
		rotation: -3,
		left: "400px",
		top: "29.53px",
		borderRadius: "4px"
	},
	{
		width: 180,
		height: 240,
		rotation: 8,
		left: "816.6px",
		top: "100px",
		borderRadius: "4px"
	},
	{
		width: 320,
		height: 160,
		rotation: -5,
		left: "340px",
		top: "703px",
		borderRadius: "4px"
	},
	{
		width: 220,
		height: 220,
		rotation: 3,
		left: "1016px",
		top: "680px",
		borderRadius: "4px"
	},
	{
		width: 140,
		height: 140,
		rotation: -8,
		left: "735px",
		top: "40px",
		borderRadius: "4px"
	},
	{
		width: 130,
		height: 150,
		rotation: 6,
		left: "260px",
		top: "310px",
		borderRadius: "4px"
	},
	{
		width: 120,
		height: 120,
		rotation: -4,
		left: "120px",
		top: "430px",
		borderRadius: "4px"
	},
	{
		width: 150,
		height: 140,
		rotation: 7,
		left: "890px",
		top: "715px",
		borderRadius: "4px"
	}
];
function shuffleArray(array) {
	const shuffled = [...array];
	for (let i = shuffled.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
	}
	return shuffled;
}
function Hero({ content }) {
	const [isLoaded, setIsLoaded] = useState(false);
	const { isMobile, isTablet, isDesktop } = useMediaQuery$5();
	const [randomSeed] = useState(() => Math.random());
	const [clickedIndex, setClickedIndex] = useState(null);
	const floatingImages = useMemo(() => {
		let imageSources;
		if (content?.heroCollageImages && content.heroCollageImages.length >= 12) imageSources = shuffleArray(content.heroCollageImages).slice(0, 12);
		else imageSources = shuffleArray(COLLAGE_IMAGES).slice(0, 12).map((img) => `/assets/images/collage/${img}`);
		return IMAGE_POSITIONS.map((pos, index) => ({
			...pos,
			src: imageSources[index]
		}));
	}, [content?.heroCollageImages, randomSeed]);
	useEffect(() => {
		const timer = setTimeout(() => setIsLoaded(true), 100);
		return () => clearTimeout(timer);
	}, []);
	return /* @__PURE__ */ jsxs("section", {
		className: "relative w-full flex items-center justify-center",
		style: {
			height: isMobile ? "700px" : isTablet ? "800px" : "900px",
			padding: isMobile ? "24px" : isTablet ? "40px" : "80px",
			background: "linear-gradient(180deg, #0d0d0d 0%, #1a1a1a 100%)",
			overflow: "hidden"
		},
		children: [
			/* @__PURE__ */ jsx("div", {
				className: "absolute pointer-events-none",
				style: {
					left: "-88px",
					top: "-162px",
					width: "577px",
					height: "577px",
					opacity: isLoaded ? 1 : 0,
					transition: "opacity 2.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s"
				},
				"aria-hidden": "true",
				children: /* @__PURE__ */ jsx("div", {
					style: {
						position: "absolute",
						inset: "-31.2%"
					},
					children: /* @__PURE__ */ jsx("img", {
						src: "/assets/icons/ellipse-1.svg",
						alt: "",
						style: {
							display: "block",
							width: "100%",
							height: "100%",
							maxWidth: "none"
						}
					})
				})
			}),
			/* @__PURE__ */ jsx("div", {
				className: "absolute pointer-events-none",
				style: {
					left: "1209px",
					top: "232px",
					width: "577px",
					height: "577px",
					opacity: isLoaded ? 1 : 0,
					transition: "opacity 2.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s"
				},
				"aria-hidden": "true",
				children: /* @__PURE__ */ jsx("div", {
					style: {
						position: "absolute",
						inset: "-15.6%"
					},
					children: /* @__PURE__ */ jsx("img", {
						src: "/assets/icons/ellipse-2.svg",
						alt: "",
						style: {
							display: "block",
							width: "100%",
							height: "100%",
							maxWidth: "none"
						}
					})
				})
			}),
			/* @__PURE__ */ jsx("div", {
				className: "absolute inset-0",
				"aria-hidden": "true",
				children: floatingImages.map((img, index) => {
					if (isMobile) return null;
					if (isTablet && index >= 6) return null;
					const viewportCenterX = "50%";
					const viewportCenterY = "50%";
					const delay = {
						0: .6,
						4: .8,
						8: 1,
						5: 1.4,
						1: 1.6,
						9: 1.8,
						2: 2,
						6: 2.2,
						10: 2.4,
						7: 2.6,
						3: 2.8,
						11: 3
					}[index] || 0;
					const boxShadow = index >= 8 ? "0px 12px 24px -4px rgba(0, 0, 0, 0.3)" : "0px 20px 40px -4px rgba(0, 0, 0, 0.5)";
					const zIndex = index >= 8 ? 1 : 2;
					const isClicked = clickedIndex === index;
					return /* @__PURE__ */ jsx("div", {
						className: "absolute flex items-center justify-center group hover:z-50",
						style: {
							left: isLoaded ? img.left : viewportCenterX,
							top: isLoaded ? img.top : viewportCenterY,
							transform: `rotate(${img.rotation}deg) scale(${isLoaded ? 1 : .3}) translate(${isLoaded ? "0, 0" : "-50%, -50%"})`,
							opacity: isLoaded ? 1 : 0,
							transition: `all 1.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) ${delay}s`,
							zIndex,
							cursor: "pointer"
						},
						onClick: () => {
							setClickedIndex(index);
							setTimeout(() => setClickedIndex(null), 200);
						},
						children: /* @__PURE__ */ jsxs("div", {
							className: "relative transition-all duration-300 ease-out group-hover:scale-105 group-hover:shadow-2xl",
							style: {
								width: `${img.width}px`,
								height: `${img.height}px`,
								borderRadius: img.borderRadius,
								boxShadow,
								transform: isClicked ? "scale(0.95)" : "scale(1)"
							},
							children: [/* @__PURE__ */ jsx("img", {
								src: img.src,
								alt: "",
								className: "transition-all duration-300 ease-out group-hover:brightness-110",
								style: {
									position: "absolute",
									inset: 0,
									width: "100%",
									height: "100%",
									objectFit: "cover",
									borderRadius: img.borderRadius,
									maxWidth: "none"
								}
							}), /* @__PURE__ */ jsx("div", {
								className: "absolute inset-0 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none",
								style: {
									borderRadius: img.borderRadius,
									boxShadow: "0 0 20px 4px rgba(243, 115, 33, 0.3), inset 0 0 20px rgba(255, 255, 255, 0.1)"
								}
							})]
						})
					}, index);
				})
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "relative flex flex-col items-center",
				style: {
					width: isMobile ? "100%" : isTablet ? "90%" : "920px",
					maxWidth: "100%",
					gap: isMobile ? "32px" : "48px",
					zIndex: 10
				},
				children: [
					/* @__PURE__ */ jsx("div", {
						style: {
							width: isMobile ? "220px" : isTablet ? "280px" : "316px",
							height: isMobile ? "17px" : isTablet ? "22px" : "25px",
							overflow: "hidden",
							position: "relative",
							opacity: isLoaded ? 1 : 0,
							transform: isLoaded ? "translateY(0)" : "translateY(20px)",
							transition: "all 1.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) 3.2s"
						},
						children: /* @__PURE__ */ jsx("img", {
							src: "/assets/icons/logo.svg",
							alt: "Manna Church",
							style: {
								position: "absolute",
								inset: 0,
								width: "100%",
								height: "100%",
								display: "block",
								maxWidth: "none"
							}
						})
					}),
					/* @__PURE__ */ jsxs("h1", {
						style: {
							fontFamily: "Archivo Black, sans-serif",
							fontWeight: 900,
							fontSize: isMobile ? "48px" : isTablet ? "72px" : "104px",
							lineHeight: "0.9",
							color: "white",
							textAlign: "center",
							width: "100%",
							display: "flex",
							flexDirection: "column",
							alignItems: "center",
							textShadow: "0px 4px 12px rgba(0, 0, 0, 0.6), 0px 2px 4px rgba(0, 0, 0, 0.4)"
						},
						children: [
							/* @__PURE__ */ jsx("div", {
								style: {
									opacity: isLoaded ? 1 : 0,
									transform: `scale(${isLoaded ? 1 : .3})`,
									transition: "all 1.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) 1.0s"
								},
								children: "A VISION TO"
							}),
							/* @__PURE__ */ jsx("div", {
								style: {
									opacity: isLoaded ? 1 : 0,
									transform: `scale(${isLoaded ? 1 : .3})`,
									transition: "all 1.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) 2.0s"
								},
								children: "CHANGE THE"
							}),
							/* @__PURE__ */ jsx("div", {
								style: {
									opacity: isLoaded ? 1 : 0,
									transform: `scale(${isLoaded ? 1 : .3})`,
									transition: "all 1.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) 2.6s"
								},
								children: "WORLD"
							})
						]
					}),
					/* @__PURE__ */ jsx("p", {
						style: {
							fontFamily: "Archivo, sans-serif",
							fontWeight: 400,
							fontSize: isMobile ? "16px" : "20px",
							lineHeight: "1.6",
							color: "white",
							opacity: isLoaded ? .7 : 0,
							textAlign: "center",
							width: isMobile ? "100%" : isTablet ? "90%" : "640px",
							maxWidth: "100%",
							transform: isLoaded ? "translateY(0)" : "translateY(-20px)",
							transition: "all 1.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) 3.2s"
						},
						children: "Our mission is to glorify God by equipping His people to change their world and by planting churches with the same world-changing vision."
					}),
					/* @__PURE__ */ jsx("div", {
						style: {
							opacity: isLoaded ? 1 : 0,
							transition: "opacity 1.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) 3.2s",
							animation: isLoaded ? "bounce 2s ease-in-out infinite" : "none"
						},
						children: /* @__PURE__ */ jsx("svg", {
							width: "24",
							height: "24",
							viewBox: "0 0 24 24",
							fill: "none",
							xmlns: "http://www.w3.org/2000/svg",
							style: { cursor: "pointer" },
							children: /* @__PURE__ */ jsx("path", {
								d: "M12 5L12 19M12 19L19 12M12 19L5 12",
								stroke: "white",
								strokeWidth: "2",
								strokeLinecap: "round",
								strokeLinejoin: "round"
							})
						})
					}),
					/* @__PURE__ */ jsx("style", { children: `
          @keyframes bounce {
            0%, 100% {
              transform: translateY(0);
            }
            50% {
              transform: translateY(10px);
            }
          }
        ` })
				]
			})
		]
	});
}
//#endregion
//#region src/components/LocationCard.tsx
function LocationCard({ image, imageAlt = "", name, type, city, state, badge, href = "#" }) {
	return /* @__PURE__ */ jsxs("a", {
		href,
		className: "group block bg-white overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-lg",
		style: {
			width: "100%",
			height: "265px",
			borderRadius: "4px"
		},
		children: [/* @__PURE__ */ jsxs("div", {
			className: "relative w-full flex flex-col justify-end",
			style: {
				height: "160px",
				padding: "5px"
			},
			children: [/* @__PURE__ */ jsx("img", {
				src: image,
				alt: imageAlt,
				style: {
					position: "absolute",
					inset: 0,
					width: "100%",
					height: "100%",
					objectFit: "cover",
					pointerEvents: "none",
					maxWidth: "none"
				}
			}), badge && /* @__PURE__ */ jsx("div", {
				className: "relative overflow-hidden flex flex-col items-start justify-end",
				style: {
					backgroundColor: "#EF6207",
					borderRadius: "2px",
					padding: "4px 8px",
					alignSelf: "flex-start"
				},
				children: /* @__PURE__ */ jsx("p", {
					style: {
						fontFamily: "Inter, sans-serif",
						fontWeight: 700,
						fontSize: "10px",
						color: "white",
						lineHeight: "normal",
						whiteSpace: "nowrap"
					},
					children: badge
				})
			})]
		}), /* @__PURE__ */ jsxs("div", {
			className: "flex items-start justify-between",
			style: {
				backgroundColor: "white",
				border: "1px solid #E5E5E5",
				padding: "16px 16px 28px 16px"
			},
			children: [/* @__PURE__ */ jsxs("div", {
				className: "flex flex-col",
				style: {
					gap: "8px",
					width: "184px"
				},
				children: [
					/* @__PURE__ */ jsx("h3", {
						style: {
							fontFamily: "Archivo, sans-serif",
							fontWeight: 700,
							fontSize: "20px",
							color: "#222222",
							lineHeight: "normal"
						},
						children: name
					}),
					/* @__PURE__ */ jsx("p", {
						style: {
							fontFamily: "Archivo Narrow, sans-serif",
							fontWeight: 600,
							fontSize: "14px",
							color: "#808184",
							lineHeight: "normal"
						},
						children: type
					}),
					/* @__PURE__ */ jsxs("p", {
						style: {
							fontFamily: "Archivo, sans-serif",
							fontWeight: 500,
							fontSize: "13px",
							color: "#BFBFC1",
							lineHeight: "normal"
						},
						children: [
							city,
							", ",
							state
						]
					})
				]
			}), /* @__PURE__ */ jsx("button", {
				className: "flex items-center justify-center flex-shrink-0 transition-all duration-300",
				style: {
					width: "32px",
					height: "32px",
					backgroundColor: "#222222",
					borderRadius: "2px"
				},
				"aria-label": `View ${name} location`,
				children: /* @__PURE__ */ jsx("img", {
					src: "/assets/icons/arrow-right.svg",
					alt: "",
					className: "transition-transform duration-300 group-hover:-rotate-[30deg]",
					style: {
						width: "18px",
						height: "18px",
						filter: "invert(1)"
					}
				})
			})]
		})]
	});
}
//#endregion
//#region src/data/locations.json
var locations_default = [
	{
		"id": "1",
		"name": "Fayetteville",
		"state": "NC",
		"city": "Fayetteville",
		"type": "City Site",
		"image": "/assets/images/locations/fayetteville-ft-bragg.jpg",
		"link": "https://manna.church/church/fayetteville-ft-bragg-nc/",
		"badge": "Central"
	},
	{
		"id": "2",
		"name": "Sanford",
		"state": "NC",
		"city": "Sanford",
		"type": "City Site",
		"image": "/assets/images/locations/sanford-nc.jpg",
		"link": "https://manna.church/church/sanford-nc/"
	},
	{
		"id": "3",
		"name": "Niceville",
		"state": "FL",
		"city": "Niceville",
		"type": "City Site",
		"image": "/assets/images/locations/niceville-fl.jpg",
		"link": "https://manna.church/church/niceville-fl/"
	},
	{
		"id": "4",
		"name": "High Point",
		"state": "NC",
		"city": "High Point",
		"type": "City Site",
		"image": "/assets/images/locations/high-point-nc.jpg",
		"link": "https://manna.church/church/high-point-nc/"
	},
	{
		"id": "5",
		"name": "Fuquay-Varina",
		"state": "NC",
		"city": "Fuquay-Varina",
		"type": "City Site",
		"image": "/assets/images/locations/fuquay-varina-nc.jpg",
		"link": "https://manna.church/church/fuquay-varina-nc/"
	},
	{
		"id": "6",
		"name": "Newport News",
		"state": "VA",
		"city": "Newport News",
		"type": "City Site",
		"image": "/assets/images/locations/newport-news-va.jpg",
		"link": "https://manna.church/church/newport-news-va/"
	},
	{
		"id": "7",
		"name": "Stafford",
		"state": "VA",
		"city": "Stafford",
		"type": "City Site",
		"image": "/assets/images/locations/stafford-va.jpg",
		"link": "https://manna.church/church/stafford-quantico-va/"
	},
	{
		"id": "8",
		"name": "Clarksville",
		"state": "TN",
		"city": "Clarksville",
		"type": "City Site",
		"image": "/assets/images/locations/clarksville-tn.jpg",
		"link": "https://manna.church/church/clarksville-tn/"
	},
	{
		"id": "9",
		"name": "Killeen",
		"state": "TX",
		"city": "Killeen",
		"type": "City Site",
		"image": "/assets/images/locations/killeen-tx.jpg",
		"link": "https://manna.church/church/manna-church-killeen/"
	},
	{
		"id": "10",
		"name": "Kapolei",
		"state": "HI",
		"city": "Kapolei",
		"type": "City Site",
		"image": "/assets/images/locations/kapolei-hi.jpg",
		"link": "https://manna.church/church/kapolei-hi/"
	},
	{
		"id": "11",
		"name": "Colorado Springs",
		"state": "CO",
		"city": "Colorado Springs",
		"type": "City Site",
		"image": "/assets/images/locations/colorado-springs-co.jpg",
		"link": "https://manna.church/church/colorado-springs-co/"
	},
	{
		"id": "12",
		"name": "Picatinny Arsenal",
		"state": "NJ",
		"city": "Picatinny Arsenal",
		"type": "City Site",
		"image": "/assets/images/locations/picatinny-arsenal-nj.jpg",
		"link": "https://manna.church/church/picatinny-arsenal-nj/"
	},
	{
		"id": "13",
		"name": "Ft. Leonard Wood",
		"state": "MO",
		"city": "Ft. Leonard Wood",
		"type": "Micro-Site",
		"image": "/assets/images/locations/ft-leonard-wood-mo.jpg",
		"link": "https://manna.church/church/ft-leonard-wood-mo/"
	},
	{
		"id": "14",
		"name": "Ft. Polk",
		"state": "LA",
		"city": "Ft. Polk",
		"type": "Micro-Site",
		"image": "/assets/images/locations/ft-polk-la.jpg",
		"link": "https://manna.church/church/ft-polk-la/"
	},
	{
		"id": "15",
		"name": "Ft. Knox",
		"state": "KY",
		"city": "Ft. Knox",
		"type": "Micro-Site",
		"image": "/assets/images/locations/ft-knox-ky.jpg",
		"link": "https://manna.church/church/ft-knox-ky/"
	},
	{
		"id": "16",
		"name": "Weiden",
		"state": "Germany",
		"city": "Weiden",
		"type": "Micro-Site",
		"image": "/assets/images/locations/weiden-germany.jpg",
		"link": "https://manna.church/church/weiden-germany/"
	},
	{
		"id": "17",
		"name": "Quantico",
		"state": "VA",
		"city": "Quantico",
		"type": "Micro-Site",
		"image": "/assets/images/locations/quantico-va.jpg",
		"link": "https://manna.church/church/1165/"
	},
	{
		"id": "18",
		"name": "Chesapeake",
		"state": "VA",
		"city": "Chesapeake",
		"type": "Micro-Site",
		"image": "/assets/images/locations/chesapeake-va.jpg",
		"link": "https://manna.church/church/1395/"
	},
	{
		"id": "19",
		"name": "Ft. Meade",
		"state": "MD",
		"city": "Ft. Meade",
		"type": "Micro-Site",
		"image": "/assets/images/locations/ft-meade.jpg",
		"link": "https://manna.church/church/ft-meade/"
	},
	{
		"id": "20",
		"name": "Ft. Sill",
		"state": "OK",
		"city": "Ft. Sill",
		"type": "Micro-Site",
		"image": "/assets/images/locations/ft-sill.jpg",
		"link": "https://manna.church/church/ft-sill/"
	},
	{
		"id": "21",
		"name": "Monterey",
		"state": "CA",
		"city": "Monterey",
		"type": "Micro-Site",
		"image": "/assets/images/locations/monterey-ca.jpg",
		"link": "https://manna.church/church/monterey-ca/"
	},
	{
		"id": "22",
		"name": "Omaha",
		"state": "NE",
		"city": "Omaha",
		"type": "Micro-Site",
		"image": "/assets/images/locations/omaha-ne.jpg",
		"link": "https://manna.church/church/omaha-ne/"
	}
];
//#endregion
//#region src/components/LocationSearch.tsx
/**
* LocationSearch Section Component - Pixel-perfect from Figma
* Fully responsive for mobile, tablet, and desktop
* Node ID: 56:38
*/
function useMediaQuery$4() {
	const [isMobile, setIsMobile] = useState(false);
	const [isTablet, setIsTablet] = useState(false);
	useEffect(() => {
		const checkSize = () => {
			setIsMobile(window.innerWidth < 768);
			setIsTablet(window.innerWidth >= 768 && window.innerWidth < 1024);
		};
		checkSize();
		window.addEventListener("resize", checkSize);
		return () => window.removeEventListener("resize", checkSize);
	}, []);
	return {
		isMobile,
		isTablet
	};
}
function LocationSearch() {
	const { isMobile, isTablet } = useMediaQuery$4();
	const [isVisible, setIsVisible] = useState(false);
	const [searchQuery, setSearchQuery] = useState("");
	const [visibleCount, setVisibleCount] = useState(8);
	const sectionRef = useRef(null);
	useEffect(() => {
		const observer = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) setIsVisible(true);
			});
		}, { threshold: .1 });
		if (sectionRef.current) observer.observe(sectionRef.current);
		return () => observer.disconnect();
	}, []);
	const filteredLocations = locations_default.filter((location) => {
		if (!searchQuery.trim()) return true;
		const query = searchQuery.toLowerCase();
		return location.name.toLowerCase().includes(query) || location.city.toLowerCase().includes(query) || location.state.toLowerCase().includes(query) || location.type.toLowerCase().includes(query);
	});
	const visibleLocations = filteredLocations.slice(0, visibleCount);
	const handleLoadMore = () => {
		setVisibleCount((prev) => prev + 8);
	};
	const handleSearchChange = (e) => {
		setSearchQuery(e.target.value);
		setVisibleCount(8);
	};
	const columnsPerRow = isMobile ? 1 : isTablet ? 2 : 4;
	return /* @__PURE__ */ jsxs("section", {
		ref: sectionRef,
		className: "relative w-full flex flex-col items-center justify-center",
		style: {
			minHeight: isMobile ? "700px" : isTablet ? "900px" : "1044px",
			paddingTop: isMobile ? "120px" : isTablet ? "180px" : "240px",
			paddingLeft: isMobile ? "20px" : isTablet ? "32px" : "48px",
			paddingRight: isMobile ? "20px" : isTablet ? "32px" : "48px",
			paddingBottom: isMobile ? "180px" : isTablet ? "260px" : "360px",
			gap: isMobile ? "24px" : "40px"
		},
		children: [/* @__PURE__ */ jsxs("div", {
			className: "absolute inset-0 pointer-events-none",
			"aria-hidden": "true",
			children: [/* @__PURE__ */ jsx("div", {
				className: "absolute inset-0 overflow-hidden",
				children: /* @__PURE__ */ jsx("img", {
					src: "/assets/images/location-bg.png",
					alt: "",
					style: {
						position: "absolute",
						width: "82.57%",
						height: "100%",
						left: "8.72%",
						top: "-12.62%",
						maxWidth: "none"
					}
				})
			}), /* @__PURE__ */ jsx("div", {
				className: "absolute inset-0",
				style: { background: "linear-gradient(to bottom, #1a1a1a 8.173%, rgba(46, 46, 46, 0.8) 91.346%)" }
			})]
		}), /* @__PURE__ */ jsxs("div", {
			className: "relative z-10 w-full flex flex-col items-center",
			style: { gap: "24px" },
			children: [
				/* @__PURE__ */ jsxs("div", {
					className: "flex flex-col items-center",
					style: {
						gap: "16px",
						opacity: isVisible ? 1 : 0,
						transform: isVisible ? "translateY(0)" : "translateY(30px)",
						transition: "all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.2s"
					},
					children: [/* @__PURE__ */ jsx("div", { style: {
						width: "48px",
						height: "4px",
						backgroundColor: "#F37321"
					} }), /* @__PURE__ */ jsx("h2", {
						style: {
							fontFamily: "Archivo, sans-serif",
							fontWeight: 700,
							fontSize: isMobile ? "28px" : isTablet ? "36px" : "42px",
							lineHeight: "1",
							color: "white",
							textAlign: "center",
							textTransform: "uppercase"
						},
						children: "Find Your Location"
					})]
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "flex items-center",
					style: {
						width: isMobile ? "100%" : isTablet ? "400px" : "480px",
						maxWidth: "100%",
						height: isMobile ? "44px" : "48px",
						backgroundColor: "#2e2e2e",
						border: "1px solid rgba(255, 255, 255, 0.2)",
						borderRadius: "2px",
						padding: "0 16px",
						gap: "12px",
						opacity: isVisible ? 1 : 0,
						transform: isVisible ? "translateY(0)" : "translateY(20px)",
						transition: "all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.4s"
					},
					children: [/* @__PURE__ */ jsx("img", {
						src: "/assets/icons/search.svg",
						alt: "",
						style: {
							width: "18px",
							height: "18px"
						}
					}), /* @__PURE__ */ jsx("input", {
						type: "text",
						placeholder: "Search by city or state...",
						value: searchQuery,
						onChange: handleSearchChange,
						style: {
							flex: 1,
							backgroundColor: "transparent",
							border: "none",
							outline: "none",
							fontFamily: "Archivo, sans-serif",
							fontWeight: 600,
							fontSize: "14px",
							color: searchQuery ? "white" : "rgba(255, 255, 255, 0.4)"
						}
					})]
				}),
				/* @__PURE__ */ jsx("div", {
					className: "w-full",
					style: {
						display: "grid",
						gridTemplateColumns: isMobile ? "1fr" : isTablet ? "repeat(2, 1fr)" : "repeat(4, 1fr)",
						gap: isMobile ? "16px" : "24px",
						maxWidth: isMobile ? "320px" : isTablet ? "680px" : "1360px",
						margin: "0 auto",
						marginTop: isMobile ? "24px" : "32px",
						opacity: isVisible ? 1 : 0,
						transform: isVisible ? "translateY(0)" : "translateY(40px)",
						transition: `all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.6s`
					},
					children: visibleLocations.map((location, index) => /* @__PURE__ */ jsx("div", {
						style: {
							opacity: isVisible ? 1 : 0,
							transform: isVisible ? "translateY(0)" : "translateY(40px)",
							transition: `all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) ${.6 + Math.floor(index / columnsPerRow) * .2}s`
						},
						children: /* @__PURE__ */ jsx(LocationCard, { ...location })
					}, location.id))
				}),
				filteredLocations.length === 0 && /* @__PURE__ */ jsxs("div", {
					style: {
						marginTop: "32px",
						padding: "40px",
						textAlign: "center",
						fontFamily: "Archivo, sans-serif",
						fontSize: "18px",
						color: "rgba(255, 255, 255, 0.5)",
						opacity: isVisible ? 1 : 0,
						transition: "opacity 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.6s"
					},
					children: [
						"No locations found matching \"",
						searchQuery,
						"\""
					]
				}),
				visibleLocations.length < filteredLocations.length && /* @__PURE__ */ jsxs("button", {
					onClick: handleLoadMore,
					style: {
						marginTop: "24px",
						padding: "0",
						backgroundColor: "transparent",
						border: "none",
						fontFamily: "Archivo, sans-serif",
						fontWeight: 600,
						fontSize: "16px",
						color: "#F37321",
						cursor: "pointer",
						textDecoration: "underline",
						transition: "opacity 0.2s",
						opacity: isVisible ? 1 : 0,
						transform: isVisible ? "translateY(0)" : "translateY(40px)",
						transitionProperty: "all",
						transitionDuration: "0.8s",
						transitionTimingFunction: "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
						transitionDelay: "1.0s"
					},
					onMouseEnter: (e) => {
						e.currentTarget.style.opacity = "0.7";
					},
					onMouseLeave: (e) => {
						e.currentTarget.style.opacity = "1";
					},
					children: [
						"Load More (",
						filteredLocations.length - visibleLocations.length,
						" remaining)"
					]
				})
			]
		})]
	});
}
//#endregion
//#region src/components/VideoSection.tsx
/**
* Video Section Component - Military Highway Story
* Fully responsive for mobile, tablet, and desktop
*/
function useMediaQuery$3() {
	const [isMobile, setIsMobile] = useState(false);
	const [isTablet, setIsTablet] = useState(false);
	useEffect(() => {
		const checkSize = () => {
			setIsMobile(window.innerWidth < 768);
			setIsTablet(window.innerWidth >= 768 && window.innerWidth < 1024);
		};
		checkSize();
		window.addEventListener("resize", checkSize);
		return () => window.removeEventListener("resize", checkSize);
	}, []);
	return {
		isMobile,
		isTablet
	};
}
function VideoSection({ content }) {
	const { isMobile, isTablet } = useMediaQuery$3();
	const videoUrl = content?.videoUrl || "/assets/videos/homepage-video.mp4";
	const videoText = content?.videoText || `Manna Church has been serving military communities for over 40 years and is strategically planting expressions of Manna Church along the Military Highway. We believe that the Church exists wherever God's people gather. An expression of Manna Church could meet in its own designated building, a local school or gym, a home, or even online.`;
	return /* @__PURE__ */ jsx("section", {
		className: "w-full flex items-center justify-center",
		style: {
			backgroundColor: "#222222",
			paddingTop: "0px",
			paddingBottom: isMobile ? "60px" : isTablet ? "80px" : "120px"
		},
		children: /* @__PURE__ */ jsxs("div", {
			className: "flex flex-col items-center",
			style: {
				width: "100%",
				maxWidth: "1280px",
				paddingLeft: isMobile ? "20px" : isTablet ? "32px" : "64px",
				paddingRight: isMobile ? "20px" : isTablet ? "32px" : "64px",
				gap: isMobile ? "20px" : "32px",
				marginTop: isMobile ? "-120px" : isTablet ? "-160px" : "-216px",
				position: "relative",
				zIndex: 5
			},
			children: [/* @__PURE__ */ jsx("div", {
				style: {
					width: "100%",
					aspectRatio: "16 / 9",
					borderRadius: "4px",
					overflow: "hidden",
					boxShadow: "0px 20px 40px -4px rgba(0, 0, 0, 0.5)"
				},
				children: /* @__PURE__ */ jsx("video", {
					src: videoUrl,
					autoPlay: true,
					loop: true,
					muted: true,
					playsInline: true,
					style: {
						width: "100%",
						height: "100%",
						objectFit: "cover",
						display: "block"
					}
				})
			}), /* @__PURE__ */ jsx("p", {
				style: {
					fontFamily: "Archivo, sans-serif",
					fontWeight: 400,
					fontSize: isMobile ? "16px" : isTablet ? "18px" : "1.25rem",
					lineHeight: "1.6",
					color: "rgba(255, 255, 255, 0.85)",
					textAlign: "center",
					maxWidth: isMobile ? "100%" : isTablet ? "90%" : "900px"
				},
				children: videoText
			})]
		})
	});
}
//#endregion
//#region src/components/ThreeThings.tsx
/**
* ThreeThings Section Component - Pixel-perfect from Figma
* Fully responsive for mobile, tablet, and desktop
* Node ID: 56:157
*/
function useMediaQuery$2() {
	const [isMobile, setIsMobile] = useState(false);
	const [isTablet, setIsTablet] = useState(false);
	useEffect(() => {
		const checkSize = () => {
			setIsMobile(window.innerWidth < 768);
			setIsTablet(window.innerWidth >= 768 && window.innerWidth < 1024);
		};
		checkSize();
		window.addEventListener("resize", checkSize);
		return () => window.removeEventListener("resize", checkSize);
	}, []);
	return {
		isMobile,
		isTablet
	};
}
function ThreeThings() {
	const { isMobile, isTablet } = useMediaQuery$2();
	const cardsContainerRef = useRef(null);
	const cardRefs = useRef([]);
	const [cardScales, setCardScales] = useState([
		{
			scale: 1,
			rotate: 0
		},
		{
			scale: 1,
			rotate: 0
		},
		{
			scale: 1,
			rotate: 0
		}
	]);
	const things = [
		{
			number: "01",
			title: "Love God",
			description: "We strive to provide inspiring worship experiences. We call them experiences because our goal is to passionately pursue the Presence of God and make much of His glory. Though we are one church that meets in many locations, each of our experiences is designed to meet this goal."
		},
		{
			number: "02",
			title: "Love Each Other",
			description: "We believe that the church of Jesus Christ is not a building or a location or even just a weekend experience. We believe that the church is people, and people were created to be in relationship. Our church engages in relationship and discipleship through our small group system."
		},
		{
			number: "03",
			title: "Love The World",
			description: "We believe we're called to change the world, and we prioritize an intentional outreach strategy by equipping believers to serve our community and the places they live and work. For Manna, serving is an incredible opportunity to show people the love of Jesus, no strings attached."
		}
	];
	useEffect(() => {
		const handleScroll = () => {
			if (!cardsContainerRef.current) return;
			cardsContainerRef.current.getBoundingClientRect();
			const stickyTop = 96;
			const targetRotations = [
				-5,
				0,
				5
			];
			const newScales = cardRefs.current.map((cardEl, index) => {
				if (!cardEl) return {
					scale: 1,
					rotate: 0
				};
				const cardRect = cardEl.getBoundingClientRect();
				const scrolled = stickyTop - cardRect.top;
				if (scrolled > 0) {
					const scale = 1 - Math.min(scrolled * 3e-4, .15);
					const rotationProgress = Math.min(scrolled / 200, 1);
					return {
						scale,
						rotate: targetRotations[index] * rotationProgress
					};
				}
				return {
					scale: 1,
					rotate: 0
				};
			});
			setCardScales(newScales);
		};
		window.addEventListener("scroll", handleScroll, { passive: true });
		handleScroll();
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);
	return /* @__PURE__ */ jsx("section", {
		className: "w-full flex flex-col items-start",
		style: {
			backgroundColor: "#222222",
			paddingTop: isMobile ? "80px" : isTablet ? "120px" : "160px",
			paddingBottom: isMobile ? "100px" : isTablet ? "140px" : "200px"
		},
		children: /* @__PURE__ */ jsxs("div", {
			className: `w-full flex items-start ${isMobile || isTablet ? "flex-col" : ""}`,
			children: [/* @__PURE__ */ jsxs("div", {
				className: "flex flex-col flex-shrink-0",
				style: {
					width: isMobile || isTablet ? "100%" : "478px",
					paddingLeft: isMobile ? "24px" : isTablet ? "32px" : "64px",
					paddingRight: isMobile ? "24px" : "32px",
					gap: "20px",
					position: isMobile || isTablet ? "relative" : "sticky",
					top: isMobile || isTablet ? "auto" : "96px",
					alignSelf: "flex-start",
					marginBottom: isMobile || isTablet ? "40px" : "0"
				},
				children: [/* @__PURE__ */ jsx("h2", {
					style: {
						fontFamily: "Archivo, sans-serif",
						fontWeight: 800,
						fontSize: isMobile ? "42px" : isTablet ? "56px" : "70px",
						lineHeight: "1.05",
						letterSpacing: "-1.4px",
						color: "white",
						textTransform: "uppercase",
						whiteSpace: "pre-wrap"
					},
					children: "We Do \nThree \nThings"
				}), /* @__PURE__ */ jsx("p", {
					style: {
						fontFamily: "Archivo, sans-serif",
						fontWeight: 400,
						fontSize: isMobile ? "14px" : "16px",
						lineHeight: "1.6",
						color: "rgba(255, 255, 255, 0.7)",
						maxWidth: isMobile || isTablet ? "100%" : "300px"
					},
					children: "Everything we do ladders to three simple commitments. These are not programs - they are the heartbeat of who we are as a church."
				})]
			}), /* @__PURE__ */ jsx("div", {
				ref: cardsContainerRef,
				className: "flex-1 flex flex-col",
				style: {
					width: isMobile || isTablet ? "100%" : "962px",
					paddingRight: isMobile ? "24px" : isTablet ? "32px" : "64px",
					paddingLeft: isMobile ? "24px" : isTablet ? "32px" : "0",
					gap: isMobile ? "24px" : "40px"
				},
				children: things.map((thing, index) => /* @__PURE__ */ jsxs("div", {
					ref: (el) => cardRefs.current[index] = el,
					className: "relative flex items-start",
					style: {
						backgroundColor: "#2d2d2d",
						borderRadius: "4px",
						padding: isMobile ? "24px 24px 24px 64px" : isTablet ? index === 0 ? "32px 32px 32px 96px" : "24px 24px 24px 96px" : index === 0 ? "40px 40px 40px 120px" : "28px 28px 28px 120px",
						position: isMobile || isTablet ? "relative" : "sticky",
						top: isMobile || isTablet ? "auto" : "96px",
						transformOrigin: "center top",
						transform: isMobile || isTablet ? "none" : `scale(${cardScales[index].scale}) rotate(${cardScales[index].rotate}deg)`,
						transition: "transform 0.1s ease-out"
					},
					children: [/* @__PURE__ */ jsxs("div", {
						className: "absolute flex items-center",
						style: {
							left: isMobile ? "24px" : isTablet ? "32px" : "40px",
							top: isMobile ? "32px" : isTablet ? index === 0 ? "40px" : "32px" : index === 0 ? "48px" : "36px",
							gap: "12px",
							flexDirection: "column"
						},
						children: [/* @__PURE__ */ jsx("p", {
							style: {
								fontFamily: "Inter, sans-serif",
								fontWeight: 900,
								fontSize: isMobile ? "24px" : "32px",
								lineHeight: "normal",
								color: "transparent",
								WebkitTextStroke: isMobile ? "1px #F37321" : "1.5px #F37321",
								transform: "rotate(90deg)",
								whiteSpace: "nowrap"
							},
							children: thing.number
						}), /* @__PURE__ */ jsx("div", { style: {
							width: "2px",
							height: isMobile ? "60px" : "80px",
							backgroundColor: "#F37321",
							borderRadius: "999px"
						} })]
					}), /* @__PURE__ */ jsxs("div", {
						className: "flex flex-col flex-1",
						style: { gap: "6px" },
						children: [/* @__PURE__ */ jsx("h3", {
							style: {
								fontFamily: "Archivo, sans-serif",
								fontWeight: 700,
								fontSize: isMobile ? "32px" : isTablet ? "40px" : "48px",
								lineHeight: "normal",
								color: "white"
							},
							children: thing.title
						}), /* @__PURE__ */ jsx("p", {
							style: {
								fontFamily: "Archivo, sans-serif",
								fontWeight: 400,
								fontSize: isMobile ? "16px" : isTablet ? "18px" : "20px",
								lineHeight: "1.6",
								color: "rgba(255, 255, 255, 0.7)"
							},
							children: thing.description
						})]
					})]
				}, thing.number))
			})]
		})
	});
}
//#endregion
//#region src/components/MannaApp.tsx
/**
* MannaApp Section Component - Pixel-perfect from Figma
* Fully responsive for mobile, tablet, and desktop
* Node ID: 56:182
*/
function useMediaQuery$1() {
	const [isMobile, setIsMobile] = useState(false);
	const [isTablet, setIsTablet] = useState(false);
	useEffect(() => {
		const checkSize = () => {
			setIsMobile(window.innerWidth < 768);
			setIsTablet(window.innerWidth >= 768 && window.innerWidth < 1024);
		};
		checkSize();
		window.addEventListener("resize", checkSize);
		return () => window.removeEventListener("resize", checkSize);
	}, []);
	return {
		isMobile,
		isTablet
	};
}
function MannaApp({ content }) {
	const { isMobile, isTablet } = useMediaQuery$1();
	const [isVisible, setIsVisible] = useState(false);
	const sectionRef = useRef(null);
	useEffect(() => {
		const observer = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) setIsVisible(true);
			});
		}, { threshold: .2 });
		if (sectionRef.current) observer.observe(sectionRef.current);
		return () => observer.disconnect();
	}, []);
	const defaultFeatures = [
		{
			icon: "/assets/icons/play.svg",
			text: "Watch sermons on demand"
		},
		{
			icon: "/assets/icons/bell.svg",
			text: "Get event reminders"
		},
		{
			icon: "/assets/icons/users.svg",
			text: "Connect with your group"
		},
		{
			icon: "/assets/icons/credit-card.svg",
			text: "Give online easily"
		}
	];
	const featureIcons = [
		"/assets/icons/play.svg",
		"/assets/icons/bell.svg",
		"/assets/icons/users.svg",
		"/assets/icons/credit-card.svg"
	];
	const features = content?.appFeatures ? content.appFeatures.map((f, i) => ({
		icon: featureIcons[i] || featureIcons[0],
		text: f.feature
	})) : defaultFeatures;
	const title = content?.appTitle || "Manna On the Move";
	const subtitle = content?.appSubtitle || "Download the Manna Church app and stay connected to your community.";
	const appStoreUrl = content?.appStoreUrl || "https://apps.apple.com/app/manna-church";
	const playStoreUrl = content?.playStoreUrl || "https://play.google.com/store/apps/details?id=com.mannachurch";
	return /* @__PURE__ */ jsxs("section", {
		ref: sectionRef,
		className: `relative w-full flex ${isMobile || isTablet ? "flex-col" : ""} items-center`,
		style: {
			paddingTop: isMobile ? "40px" : isTablet ? "50px" : "60px",
			paddingLeft: isMobile ? "24px" : isTablet ? "32px" : "64px",
			paddingRight: isMobile ? "24px" : isTablet ? "32px" : "64px",
			paddingBottom: isMobile ? "80px" : isTablet ? "100px" : "140px",
			gap: isMobile ? "40px" : isTablet ? "48px" : "64px"
		},
		children: [
			/* @__PURE__ */ jsxs("div", {
				className: "absolute inset-0 pointer-events-none",
				"aria-hidden": "true",
				children: [/* @__PURE__ */ jsx("div", {
					className: "absolute inset-0",
					style: { backgroundImage: "linear-gradient(218.951deg, rgb(243, 115, 33) 12.351%, rgb(231, 131, 66) 89.483%)" }
				}), /* @__PURE__ */ jsx("div", {
					className: "absolute inset-0",
					style: {
						backgroundImage: "url(/assets/images/manna-app-bg.png)",
						backgroundSize: "61.65px 33.15px",
						backgroundPosition: "top left",
						backgroundRepeat: "repeat",
						opacity: .05
					}
				})]
			}),
			/* @__PURE__ */ jsx("div", {
				className: "relative flex-shrink-0",
				style: {
					width: isMobile ? "280px" : isTablet ? "360px" : "520px",
					height: isMobile ? "400px" : isTablet ? "515px" : "744px",
					marginTop: isMobile ? "0" : isTablet ? "-60px" : "-130px",
					borderRadius: isMobile ? "24px" : isTablet ? "32px" : "40px",
					opacity: isVisible ? 1 : 0,
					transform: isVisible ? "translateX(0)" : "translateX(-60px)",
					transition: "all 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.2s",
					zIndex: 10,
					alignSelf: isMobile || isTablet ? "center" : "auto"
				},
				children: /* @__PURE__ */ jsx("div", {
					className: "absolute overflow-hidden pointer-events-none",
					style: {
						inset: 0,
						borderRadius: "40px"
					},
					children: /* @__PURE__ */ jsx("img", {
						src: "/assets/images/iphone-mockup.png",
						alt: "Manna Church App",
						style: {
							position: "absolute",
							width: "78.48%",
							height: "102.96%",
							left: "10.77%",
							top: 0,
							maxWidth: "none"
						}
					})
				})
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "relative flex-1 flex flex-col",
				style: { gap: "24px" },
				children: [
					/* @__PURE__ */ jsx("div", { style: {
						width: "48px",
						height: "4px",
						backgroundColor: "#F37321",
						opacity: isVisible ? 1 : 0,
						transform: isVisible ? "translateX(0)" : "translateX(30px)",
						transition: "all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.3s"
					} }),
					/* @__PURE__ */ jsx("h2", {
						style: {
							fontFamily: "Archivo, sans-serif",
							fontWeight: 800,
							fontSize: isMobile ? "36px" : isTablet ? "44px" : "52px",
							lineHeight: "1.05",
							letterSpacing: "-1.04px",
							color: "white",
							textTransform: "uppercase",
							opacity: isVisible ? 1 : 0,
							transform: isVisible ? "translateX(0)" : "translateX(30px)",
							transition: "all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.4s"
						},
						children: title
					}),
					/* @__PURE__ */ jsx("p", {
						style: {
							fontFamily: "Archivo, sans-serif",
							fontWeight: 400,
							fontSize: isMobile ? "16px" : "18px",
							lineHeight: "1.6",
							color: "rgba(255, 255, 255, 0.7)",
							opacity: isVisible ? 1 : 0,
							transform: isVisible ? "translateX(0)" : "translateX(30px)",
							transition: "all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.5s"
						},
						children: subtitle
					}),
					/* @__PURE__ */ jsx("div", {
						className: "flex flex-col",
						style: { gap: "14px" },
						children: features.map((feature, index) => /* @__PURE__ */ jsxs("div", {
							className: "flex items-center",
							style: {
								gap: "12px",
								opacity: isVisible ? 1 : 0,
								transform: isVisible ? "translateX(0)" : "translateX(30px)",
								transition: `all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) ${.6 + index * .1}s`
							},
							children: [/* @__PURE__ */ jsx("div", {
								className: "flex items-center justify-center flex-shrink-0 bg-white",
								style: {
									width: "32px",
									height: "32px",
									borderRadius: "4px"
								},
								children: /* @__PURE__ */ jsx("img", {
									src: feature.icon,
									alt: "",
									style: {
										width: "18px",
										height: "18px"
									}
								})
							}), /* @__PURE__ */ jsx("p", {
								style: {
									fontFamily: "Archivo, sans-serif",
									fontWeight: 600,
									fontSize: "16px",
									lineHeight: "normal",
									color: "white",
									flex: 1
								},
								children: feature.text
							})]
						}, index))
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "flex items-center",
						style: {
							gap: "12px",
							marginTop: "8px",
							opacity: isVisible ? 1 : 0,
							transform: isVisible ? "translateX(0)" : "translateX(30px)",
							transition: "all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) 1.0s"
						},
						children: [/* @__PURE__ */ jsx("a", {
							href: appStoreUrl,
							target: "_blank",
							rel: "noopener noreferrer",
							style: {
								display: "inline-block",
								transition: "opacity 0.2s"
							},
							onMouseEnter: (e) => {
								e.currentTarget.style.opacity = "0.8";
							},
							onMouseLeave: (e) => {
								e.currentTarget.style.opacity = "1";
							},
							children: /* @__PURE__ */ jsx("img", {
								src: "https://tools.applemediaservices.com/api/badges/download-on-the-app-store/black/en-us?size=250x83&releaseDate=1524700800",
								alt: "Download on the App Store",
								style: {
									height: "40px",
									width: "auto"
								}
							})
						}), /* @__PURE__ */ jsx("a", {
							href: playStoreUrl,
							target: "_blank",
							rel: "noopener noreferrer",
							style: {
								display: "inline-block",
								transition: "opacity 0.2s"
							},
							onMouseEnter: (e) => {
								e.currentTarget.style.opacity = "0.8";
							},
							onMouseLeave: (e) => {
								e.currentTarget.style.opacity = "1";
							},
							children: /* @__PURE__ */ jsx("img", {
								src: "https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png",
								alt: "Get it on Google Play",
								style: {
									height: "58px",
									width: "auto",
									marginLeft: "-8px"
								}
							})
						})]
					})
				]
			})
		]
	});
}
//#endregion
//#region src/components/Footer.tsx
/**
* Footer Component
* Fully responsive for mobile, tablet, and desktop
*/
function useMediaQuery() {
	const [isMobile, setIsMobile] = useState(false);
	const [isTablet, setIsTablet] = useState(false);
	useEffect(() => {
		const checkSize = () => {
			setIsMobile(window.innerWidth < 768);
			setIsTablet(window.innerWidth >= 768 && window.innerWidth < 1024);
		};
		checkSize();
		window.addEventListener("resize", checkSize);
		return () => window.removeEventListener("resize", checkSize);
	}, []);
	return {
		isMobile,
		isTablet
	};
}
function Footer() {
	const { isMobile, isTablet } = useMediaQuery();
	const [isVisible, setIsVisible] = useState(false);
	const sectionRef = useRef(null);
	useEffect(() => {
		const observer = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) setIsVisible(true);
			});
		}, { threshold: .1 });
		if (sectionRef.current) observer.observe(sectionRef.current);
		return () => observer.disconnect();
	}, []);
	return /* @__PURE__ */ jsxs("footer", {
		ref: sectionRef,
		className: "relative w-full",
		style: {
			backgroundColor: "#1a1a1a",
			zIndex: 1,
			marginTop: isMobile ? "-100px" : isTablet ? "-140px" : "-200px"
		},
		children: [/* @__PURE__ */ jsxs("div", {
			className: `relative w-full flex ${isMobile || isTablet ? "flex-col" : ""}`,
			style: {
				paddingTop: isMobile ? "80px" : isTablet ? "100px" : "140px",
				paddingBottom: isMobile ? "40px" : "60px",
				paddingLeft: isMobile ? "24px" : isTablet ? "32px" : "64px",
				paddingRight: isMobile ? "24px" : isTablet ? "32px" : "64px"
			},
			children: [!isMobile && !isTablet && /* @__PURE__ */ jsx("div", { style: {
				width: "520px",
				flexShrink: 0
			} }), /* @__PURE__ */ jsxs("div", {
				className: `flex-1 flex ${isMobile ? "flex-col" : ""}`,
				style: {
					gap: isMobile ? "32px" : isTablet ? "48px" : "80px",
					paddingLeft: isMobile || isTablet ? "0" : "100px",
					opacity: isVisible ? 1 : 0,
					transform: isVisible ? "translateY(0)" : "translateY(30px)",
					transition: "all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.2s"
				},
				children: [
					/* @__PURE__ */ jsx("div", {
						className: "flex flex-col",
						style: {
							gap: "20px",
							minWidth: "120px"
						},
						children: [
							"Locations",
							"Mobile App",
							"Micro Sites"
						].map((link, index) => /* @__PURE__ */ jsx("a", {
							href: "#",
							style: {
								fontFamily: "Archivo, sans-serif",
								fontWeight: 600,
								fontSize: "16px",
								lineHeight: "1.5",
								color: "white",
								textDecoration: "none",
								transition: "opacity 0.2s",
								whiteSpace: "nowrap"
							},
							onMouseEnter: (e) => {
								e.currentTarget.style.opacity = "0.7";
							},
							onMouseLeave: (e) => {
								e.currentTarget.style.opacity = "1";
							},
							children: link
						}, index))
					}),
					/* @__PURE__ */ jsx("div", {
						className: "flex flex-col",
						style: {
							gap: "20px",
							minWidth: "120px"
						},
						children: [
							"About",
							"Multiply",
							"Contact"
						].map((link, index) => /* @__PURE__ */ jsx("a", {
							href: "#",
							style: {
								fontFamily: "Archivo, sans-serif",
								fontWeight: 600,
								fontSize: "16px",
								lineHeight: "1.5",
								color: "white",
								textDecoration: "none",
								transition: "opacity 0.2s",
								whiteSpace: "nowrap"
							},
							onMouseEnter: (e) => {
								e.currentTarget.style.opacity = "0.7";
							},
							onMouseLeave: (e) => {
								e.currentTarget.style.opacity = "1";
							},
							children: link
						}, index))
					}),
					/* @__PURE__ */ jsx("div", {
						className: "flex flex-col",
						style: {
							gap: "20px",
							minWidth: "160px"
						},
						children: ["Privacy Policy", "@2026 Manna Church"].map((link, index) => /* @__PURE__ */ jsx("a", {
							href: "#",
							style: {
								fontFamily: "Archivo, sans-serif",
								fontWeight: 600,
								fontSize: "16px",
								lineHeight: "1.5",
								color: "white",
								textDecoration: "none",
								transition: "opacity 0.2s",
								whiteSpace: "nowrap"
							},
							onMouseEnter: (e) => {
								e.currentTarget.style.opacity = "0.7";
							},
							onMouseLeave: (e) => {
								e.currentTarget.style.opacity = "1";
							},
							children: link
						}, index))
					})
				]
			})]
		}), /* @__PURE__ */ jsx("div", {
			className: "relative w-full flex items-center justify-center",
			style: {
				paddingTop: isMobile ? "32px" : "40px",
				paddingBottom: isMobile ? "32px" : "40px",
				paddingLeft: isMobile ? "24px" : isTablet ? "32px" : "64px",
				paddingRight: isMobile ? "24px" : isTablet ? "32px" : "64px",
				opacity: isVisible ? 1 : 0,
				transition: "opacity 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.4s"
			},
			children: /* @__PURE__ */ jsx("img", {
				src: "/assets/icons/logo-white.svg",
				alt: "Manna Church",
				style: {
					width: "100%",
					height: "auto"
				}
			})
		})]
	});
}
//#endregion
//#region src/lib/sanity.ts
var sanityClient = createClient({
	projectId: "0o0tjt6s",
	dataset: "production",
	apiVersion: "2024-01-01",
	useCdn: true,
	perspective: "published"
});
var previewClient = createClient({
	projectId: "0o0tjt6s",
	dataset: "production",
	apiVersion: "2024-01-01",
	useCdn: false,
	perspective: "previewDrafts",
	token: "skjVFCVDZmCtY3dsUXKUKNaQszxT1lbIRjfw5xqzo4x7hatOnXKTB7gJWrbbEegmVkzI05Q6xakaCcLqfHtiHzoYX6eiB9k5sjg3pfNyMho8Ejm36zuvQ9wJmiYpYjN9YC7uQ1DyvZEgCriBkFI2fSbCLgb4dFsycjs8KQPdFlmgvdiuT8Qb"
});
imageUrlBuilder(sanityClient);
function getClient(preview = false) {
	return preview ? previewClient : sanityClient;
}
async function sanityFetch({ query, params = {}, preview = false }) {
	return getClient(preview).fetch(query, params);
}
//#endregion
//#region src/pages/index.astro
var pages_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Index,
	file: () => $$file,
	url: () => ""
});
createAstro("https://astro.build");
var $$Index = createComponent(async ($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Index;
	const isPreview = Astro.cookies.get("preview")?.value === "true";
	const homeContent = await sanityFetch({
		query: `*[_type == "siteContent" && _id == "homepage"][0] {
    _id,
    heroTitle,
    heroSubtitle,
    "heroBackgroundImage": heroBackgroundImage.asset->url,
    "heroLogo": heroLogo.asset->url,
    "heroCollageImages": heroCollageImages[].asset->url,
    "videoUrl": videoUrl.asset->url,
    videoText,
    threeThingsTitle,
    threeThingsDescription,
    threeThingsCards[] {
      eyebrow,
      title,
      body,
      "icon": icon.asset->url
    },
    appTitle,
    appSubtitle,
    appFeatures[] {
      feature
    },
    "appMockupImage": appMockupImage.asset->url,
    appStoreUrl,
    playStoreUrl
  }`,
		preview: isPreview
	}).catch(() => null);
	const locations = await sanityFetch({
		query: `*[_type == "location"] | order(name asc) {
    _id,
    name,
    slug,
    type,
    city,
    state,
    "image": featuredImage.asset->url
  }`,
		preview: isPreview
	}).catch(() => []);
	return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, {}, { "default": ($$result) => renderTemplate`${maybeRenderHead($$result)}<main>${renderComponent($$result, "Hero", Hero, {
		"client:load": true,
		"content": homeContent,
		"client:component-hydration": "load",
		"client:component-path": "/Users/shawnmorgan/Desktop/Projects/Manna Church/manna-church-site/src/components/Hero.tsx",
		"client:component-export": "default"
	})}${renderComponent($$result, "LocationSearch", LocationSearch, {
		"client:load": true,
		"locations": locations,
		"client:component-hydration": "load",
		"client:component-path": "/Users/shawnmorgan/Desktop/Projects/Manna Church/manna-church-site/src/components/LocationSearch.tsx",
		"client:component-export": "default"
	})}${renderComponent($$result, "VideoSection", VideoSection, {
		"client:load": true,
		"content": homeContent,
		"client:component-hydration": "load",
		"client:component-path": "/Users/shawnmorgan/Desktop/Projects/Manna Church/manna-church-site/src/components/VideoSection.tsx",
		"client:component-export": "default"
	})}${renderComponent($$result, "ThreeThings", ThreeThings, {
		"client:load": true,
		"content": homeContent,
		"client:component-hydration": "load",
		"client:component-path": "/Users/shawnmorgan/Desktop/Projects/Manna Church/manna-church-site/src/components/ThreeThings.tsx",
		"client:component-export": "default"
	})}${renderComponent($$result, "MannaApp", MannaApp, {
		"client:load": true,
		"content": homeContent,
		"client:component-hydration": "load",
		"client:component-path": "/Users/shawnmorgan/Desktop/Projects/Manna Church/manna-church-site/src/components/MannaApp.tsx",
		"client:component-export": "default"
	})}${renderComponent($$result, "Footer", Footer, {
		"client:load": true,
		"client:component-hydration": "load",
		"client:component-path": "/Users/shawnmorgan/Desktop/Projects/Manna Church/manna-church-site/src/components/Footer.tsx",
		"client:component-export": "default"
	})}</main>` })}`;
}, "/Users/shawnmorgan/Desktop/Projects/Manna Church/manna-church-site/src/pages/index.astro", void 0);
var $$file = "/Users/shawnmorgan/Desktop/Projects/Manna Church/manna-church-site/src/pages/index.astro";
//#endregion
//#region \0virtual:astro:page:src/pages/index@_@astro
var page = () => pages_exports;
//#endregion
export { page };
