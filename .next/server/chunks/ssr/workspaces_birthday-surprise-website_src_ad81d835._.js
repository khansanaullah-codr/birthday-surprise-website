module.exports = {

"[project]/workspaces/birthday-surprise-website/src/components/FloatingElements.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>FloatingElements)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/workspaces/birthday-surprise-website/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/workspaces/birthday-surprise-website/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
function FloatingElements() {
    const [elements, setElements] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const heartColors = [
            '#FFB6C1',
            '#FF69B4',
            '#FF1493',
            '#FFC0CB',
            '#FFE4E1'
        ];
        const balloonColors = [
            '#FFB6C1',
            '#FFE4B5',
            '#E6E6FA',
            '#B0E0E6',
            '#FFDAB9'
        ];
        const newElements = [];
        // Create 15 floating hearts and balloons
        for(let i = 0; i < 15; i++){
            const isHeart = i % 2 === 0;
            newElements.push({
                id: i,
                left: Math.random() * 100,
                delay: Math.random() * 10,
                duration: 12 + Math.random() * 8,
                size: 20 + Math.random() * 20,
                type: isHeart ? 'heart' : 'balloon',
                color: isHeart ? heartColors[Math.floor(Math.random() * heartColors.length)] : balloonColors[Math.floor(Math.random() * balloonColors.length)]
            });
        }
        setElements(newElements);
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-orchids-id": "src/components/FloatingElements.tsx:42:4",
        "data-orchids-name": "div",
        className: "fixed inset-0 pointer-events-none overflow-hidden z-0",
        children: elements.map((element)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                "data-orchids-id": "src/components/FloatingElements.tsx:44:8@elements",
                "data-orchids-name": "div",
                className: "absolute animate-float-up",
                style: {
                    left: `${element.left}%`,
                    animationDelay: `${element.delay}s`,
                    animationDuration: `${element.duration}s`,
                    width: `${element.size}px`,
                    height: `${element.size}px`,
                    '--float-x': `${(Math.random() - 0.5) * 100}px`
                },
                children: element.type === 'heart' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                    "data-orchids-id": "src/components/FloatingElements.tsx:57:12@elements",
                    "data-orchids-name": "svg",
                    viewBox: "0 0 24 24",
                    fill: element.color,
                    className: "w-full h-full drop-shadow-lg",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        "data-orchids-id": "src/components/FloatingElements.tsx:58:14@elements",
                        "data-orchids-name": "path",
                        d: "M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
                    }, void 0, false, {
                        fileName: "[project]/workspaces/birthday-surprise-website/src/components/FloatingElements.tsx",
                        lineNumber: 58,
                        columnNumber: 15
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/workspaces/birthday-surprise-website/src/components/FloatingElements.tsx",
                    lineNumber: 57,
                    columnNumber: 13
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                    "data-orchids-id": "src/components/FloatingElements.tsx:61:12@elements",
                    "data-orchids-name": "svg",
                    viewBox: "0 0 24 24",
                    fill: element.color,
                    className: "w-full h-full drop-shadow-lg",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ellipse", {
                            "data-orchids-id": "src/components/FloatingElements.tsx:62:14@elements",
                            "data-orchids-name": "ellipse",
                            cx: "12",
                            cy: "10",
                            rx: "7",
                            ry: "9"
                        }, void 0, false, {
                            fileName: "[project]/workspaces/birthday-surprise-website/src/components/FloatingElements.tsx",
                            lineNumber: 62,
                            columnNumber: 15
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            "data-orchids-id": "src/components/FloatingElements.tsx:63:14@elements",
                            "data-orchids-name": "path",
                            d: "M12 19 L11 24 L13 24 Z",
                            fill: element.color,
                            opacity: "0.8"
                        }, void 0, false, {
                            fileName: "[project]/workspaces/birthday-surprise-website/src/components/FloatingElements.tsx",
                            lineNumber: 63,
                            columnNumber: 15
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ellipse", {
                            "data-orchids-id": "src/components/FloatingElements.tsx:64:14@elements",
                            "data-orchids-name": "ellipse",
                            cx: "9",
                            cy: "7",
                            rx: "2",
                            ry: "3",
                            fill: "white",
                            opacity: "0.3"
                        }, void 0, false, {
                            fileName: "[project]/workspaces/birthday-surprise-website/src/components/FloatingElements.tsx",
                            lineNumber: 64,
                            columnNumber: 15
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/workspaces/birthday-surprise-website/src/components/FloatingElements.tsx",
                    lineNumber: 61,
                    columnNumber: 13
                }, this)
            }, element.id, false, {
                fileName: "[project]/workspaces/birthday-surprise-website/src/components/FloatingElements.tsx",
                lineNumber: 44,
                columnNumber: 9
            }, this))
    }, void 0, false, {
        fileName: "[project]/workspaces/birthday-surprise-website/src/components/FloatingElements.tsx",
        lineNumber: 42,
        columnNumber: 5
    }, this);
}
}}),
"[project]/workspaces/birthday-surprise-website/src/components/LandingPage.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>LandingPage)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/workspaces/birthday-surprise-website/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/workspaces/birthday-surprise-website/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__ = __turbopack_context__.i("[project]/workspaces/birthday-surprise-website/node_modules/lucide-react/dist/esm/icons/sparkles.js [app-ssr] (ecmascript) <export default as Sparkles>");
var __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$gift$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Gift$3e$__ = __turbopack_context__.i("[project]/workspaces/birthday-surprise-website/node_modules/lucide-react/dist/esm/icons/gift.js [app-ssr] (ecmascript) <export default as Gift>");
var __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$src$2f$components$2f$FloatingElements$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/workspaces/birthday-surprise-website/src/components/FloatingElements.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/workspaces/birthday-surprise-website/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
function LandingPage({ onOpenSurprise }) {
    const [countdown, setCountdown] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(5);
    const [showMain, setShowMain] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (countdown > 0) {
            const timer = setTimeout(()=>setCountdown(countdown - 1), 1000);
            return ()=>clearTimeout(timer);
        } else {
            setShowMain(true);
        }
    }, [
        countdown
    ]);
    if (!showMain) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            "data-orchids-id": "src/components/LandingPage.tsx:28:6",
            "data-orchids-name": "div",
            className: "min-h-screen relative overflow-hidden flex items-center justify-center bg-gradient-to-br from-[#FFF8F0] via-[#FFE4E1] to-[#F5E6D3]",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$src$2f$components$2f$FloatingElements$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    "data-orchids-id": "src/components/LandingPage.tsx:29:8",
                    "data-orchids-name": "FloatingElements"
                }, void 0, false, {
                    fileName: "[project]/workspaces/birthday-surprise-website/src/components/LandingPage.tsx",
                    lineNumber: 29,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                    "data-orchids-id": "src/components/LandingPage.tsx:30:8",
                    "data-orchids-name": "motion.div",
                    initial: {
                        scale: 0,
                        opacity: 0
                    },
                    animate: {
                        scale: [
                            0,
                            1.2,
                            1
                        ],
                        opacity: [
                            0,
                            1,
                            1
                        ]
                    },
                    exit: {
                        scale: 0,
                        opacity: 0
                    },
                    transition: {
                        duration: 0.6
                    },
                    className: "text-center",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                        "data-orchids-id": "src/components/LandingPage.tsx:38:10",
                        "data-orchids-name": "motion.div",
                        animate: {
                            rotate: [
                                0,
                                360
                            ],
                            scale: [
                                1,
                                1.1,
                                1
                            ]
                        },
                        transition: {
                            duration: 1,
                            ease: "easeInOut"
                        },
                        className: "text-[200px] md:text-[300px] font-bold text-[#D4A574] drop-shadow-2xl",
                        children: countdown
                    }, void 0, false, {
                        fileName: "[project]/workspaces/birthday-surprise-website/src/components/LandingPage.tsx",
                        lineNumber: 38,
                        columnNumber: 11
                    }, this)
                }, countdown, false, {
                    fileName: "[project]/workspaces/birthday-surprise-website/src/components/LandingPage.tsx",
                    lineNumber: 30,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/workspaces/birthday-surprise-website/src/components/LandingPage.tsx",
            lineNumber: 28,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-orchids-id": "src/components/LandingPage.tsx:54:4",
        "data-orchids-name": "div",
        className: "min-h-screen relative overflow-hidden flex items-center justify-center bg-gradient-to-br from-[#FFF8F0] via-[#FFE4E1] to-[#F5E6D3]",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$src$2f$components$2f$FloatingElements$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                "data-orchids-id": "src/components/LandingPage.tsx:55:6",
                "data-orchids-name": "FloatingElements"
            }, void 0, false, {
                fileName: "[project]/workspaces/birthday-surprise-website/src/components/LandingPage.tsx",
                lineNumber: 55,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                "data-orchids-id": "src/components/LandingPage.tsx:57:6",
                "data-orchids-name": "div",
                className: "relative z-10 text-center px-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                        "data-orchids-id": "src/components/LandingPage.tsx:58:8",
                        "data-orchids-name": "motion.div",
                        initial: {
                            opacity: 0,
                            y: -50
                        },
                        animate: {
                            opacity: 1,
                            y: 0
                        },
                        transition: {
                            duration: 1,
                            ease: "easeOut"
                        },
                        className: "mb-8",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].h1, {
                                "data-orchids-id": "src/components/LandingPage.tsx:64:10",
                                "data-orchids-name": "motion.h1",
                                className: "font-script text-7xl md:text-9xl font-bold text-[#D4A574] mb-4",
                                animate: {
                                    scale: [
                                        1,
                                        1.05,
                                        1
                                    ]
                                },
                                transition: {
                                    duration: 2,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                },
                                children: "Happy Birthday"
                            }, void 0, false, {
                                fileName: "[project]/workspaces/birthday-surprise-website/src/components/LandingPage.tsx",
                                lineNumber: 64,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                "data-orchids-id": "src/components/LandingPage.tsx:78:10",
                                "data-orchids-name": "motion.div",
                                initial: {
                                    opacity: 0,
                                    scale: 0
                                },
                                animate: {
                                    opacity: 1,
                                    scale: 1
                                },
                                transition: {
                                    delay: 0.5,
                                    duration: 0.8
                                },
                                className: "flex items-center justify-center gap-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"], {
                                        className: "w-8 h-8 text-[#FFB6C1]"
                                    }, void 0, false, {
                                        fileName: "[project]/workspaces/birthday-surprise-website/src/components/LandingPage.tsx",
                                        lineNumber: 84,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        "data-orchids-id": "src/components/LandingPage.tsx:85:12",
                                        "data-orchids-name": "p",
                                        className: "font-serif text-2xl md:text-4xl text-[#5D4E37]",
                                        children: "Wishing you a wonderful day!"
                                    }, void 0, false, {
                                        fileName: "[project]/workspaces/birthday-surprise-website/src/components/LandingPage.tsx",
                                        lineNumber: 85,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"], {
                                        className: "w-8 h-8 text-[#FFB6C1]"
                                    }, void 0, false, {
                                        fileName: "[project]/workspaces/birthday-surprise-website/src/components/LandingPage.tsx",
                                        lineNumber: 88,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/workspaces/birthday-surprise-website/src/components/LandingPage.tsx",
                                lineNumber: 78,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/workspaces/birthday-surprise-website/src/components/LandingPage.tsx",
                        lineNumber: 58,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                        "data-orchids-id": "src/components/LandingPage.tsx:92:8",
                        "data-orchids-name": "motion.div",
                        initial: {
                            opacity: 0,
                            y: 50
                        },
                        animate: {
                            opacity: 1,
                            y: 0
                        },
                        transition: {
                            delay: 1,
                            duration: 0.8
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].button, {
                            "data-orchids-id": "src/components/LandingPage.tsx:97:10",
                            "data-orchids-name": "motion.button",
                            onClick: onOpenSurprise,
                            className: "group relative px-12 py-6 bg-gradient-to-r from-[#D4A574] to-[#C49563] text-[#FFF8F0] rounded-full text-xl md:text-2xl font-semibold shadow-2xl hover:shadow-[#D4A574]/50 transition-all duration-300",
                            whileHover: {
                                scale: 1.1
                            },
                            whileTap: {
                                scale: 0.95
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    "data-orchids-id": "src/components/LandingPage.tsx:103:12",
                                    "data-orchids-name": "span",
                                    className: "relative z-10 flex items-center gap-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$gift$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Gift$3e$__["Gift"], {
                                            "data-orchids-id": "src/components/LandingPage.tsx:104:14",
                                            "data-orchids-name": "Gift",
                                            className: "w-6 h-6"
                                        }, void 0, false, {
                                            fileName: "[project]/workspaces/birthday-surprise-website/src/components/LandingPage.tsx",
                                            lineNumber: 104,
                                            columnNumber: 15
                                        }, this),
                                        "Open Your Surprise"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/workspaces/birthday-surprise-website/src/components/LandingPage.tsx",
                                    lineNumber: 103,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                    "data-orchids-id": "src/components/LandingPage.tsx:107:12",
                                    "data-orchids-name": "motion.div",
                                    className: "absolute inset-0 rounded-full bg-gradient-to-r from-[#E8D4BA] to-[#D4A574] opacity-0 group-hover:opacity-100 transition-opacity",
                                    animate: {
                                        scale: [
                                            1,
                                            1.2,
                                            1
                                        ]
                                    },
                                    transition: {
                                        duration: 2,
                                        repeat: Infinity,
                                        ease: "easeInOut"
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/workspaces/birthday-surprise-website/src/components/LandingPage.tsx",
                                    lineNumber: 107,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/workspaces/birthday-surprise-website/src/components/LandingPage.tsx",
                            lineNumber: 97,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/workspaces/birthday-surprise-website/src/components/LandingPage.tsx",
                        lineNumber: 92,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                        "data-orchids-id": "src/components/LandingPage.tsx:121:8",
                        "data-orchids-name": "motion.div",
                        initial: {
                            opacity: 0
                        },
                        animate: {
                            opacity: 1
                        },
                        transition: {
                            delay: 1.5,
                            duration: 1
                        },
                        className: "mt-12",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            "data-orchids-id": "src/components/LandingPage.tsx:127:10",
                            "data-orchids-name": "p",
                            className: "font-script text-3xl text-[#8B7355]",
                            children: "Auto-starting your surprise journey..."
                        }, void 0, false, {
                            fileName: "[project]/workspaces/birthday-surprise-website/src/components/LandingPage.tsx",
                            lineNumber: 127,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/workspaces/birthday-surprise-website/src/components/LandingPage.tsx",
                        lineNumber: 121,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/workspaces/birthday-surprise-website/src/components/LandingPage.tsx",
                lineNumber: 57,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                "data-orchids-id": "src/components/LandingPage.tsx:134:6",
                "data-orchids-name": "div",
                className: "absolute top-0 left-0 w-64 h-64 bg-[#FFE4E1] rounded-br-full opacity-30"
            }, void 0, false, {
                fileName: "[project]/workspaces/birthday-surprise-website/src/components/LandingPage.tsx",
                lineNumber: 134,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                "data-orchids-id": "src/components/LandingPage.tsx:135:6",
                "data-orchids-name": "div",
                className: "absolute bottom-0 right-0 w-64 h-64 bg-[#F5E6D3] rounded-tl-full opacity-30"
            }, void 0, false, {
                fileName: "[project]/workspaces/birthday-surprise-website/src/components/LandingPage.tsx",
                lineNumber: 135,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/workspaces/birthday-surprise-website/src/components/LandingPage.tsx",
        lineNumber: 54,
        columnNumber: 5
    }, this);
}
}}),
"[project]/workspaces/birthday-surprise-website/src/components/PhotoGallery.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>PhotoGallery)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/workspaces/birthday-surprise-website/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/workspaces/birthday-surprise-website/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/workspaces/birthday-surprise-website/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$camera$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Camera$3e$__ = __turbopack_context__.i("[project]/workspaces/birthday-surprise-website/node_modules/lucide-react/dist/esm/icons/camera.js [app-ssr] (ecmascript) <export default as Camera>");
var __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__ = __turbopack_context__.i("[project]/workspaces/birthday-surprise-website/node_modules/lucide-react/dist/esm/icons/heart.js [app-ssr] (ecmascript) <export default as Heart>");
var __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__ = __turbopack_context__.i("[project]/workspaces/birthday-surprise-website/node_modules/lucide-react/dist/esm/icons/chevron-left.js [app-ssr] (ecmascript) <export default as ChevronLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__ = __turbopack_context__.i("[project]/workspaces/birthday-surprise-website/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-ssr] (ecmascript) <export default as ChevronRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/workspaces/birthday-surprise-website/node_modules/next/image.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/workspaces/birthday-surprise-website/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
function PhotoGallery({ onContinue }) {
    const [currentIndex, setCurrentIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const [autoPlay, setAutoPlay] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const [cycleCount, setCycleCount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const photos = [
        {
            id: 1,
            url: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=800&q=80',
            caption: 'Beautiful Moments'
        },
        {
            id: 2,
            url: 'https://images.unsplash.com/photo-1513151233558-d860c5398176?w=800&q=80',
            caption: 'Celebrating You'
        },
        {
            id: 3,
            url: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=800&q=80',
            caption: 'Special Day'
        },
        {
            id: 4,
            url: 'https://images.unsplash.com/photo-1533090161767-e6ffed986c88?w=800&q=80',
            caption: 'Happy Times'
        },
        {
            id: 5,
            url: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=800&q=80',
            caption: 'Cherished Memories'
        },
        {
            id: 6,
            url: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
            caption: 'Joyful Moments'
        }
    ];
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (autoPlay) {
            const timer = setInterval(()=>{
                setCurrentIndex((prev)=>{
                    const nextIndex = (prev + 1) % photos.length;
                    if (nextIndex === 0) {
                        setCycleCount((c)=>c + 1);
                    }
                    return nextIndex;
                });
            }, 2500);
            return ()=>clearInterval(timer);
        }
    }, [
        autoPlay,
        photos.length
    ]);
    // Auto-advance after completing one full cycle
    // useEffect(() => {
    //   if (cycleCount >= 1) {
    //     const timer = setTimeout(() => {
    //       onContinue();
    //     }, 2000);
    //     return () => clearTimeout(timer);
    //   }
    // }, [cycleCount, onContinue]);
    const nextPhoto = ()=>{
        setAutoPlay(false);
        setCurrentIndex((prev)=>(prev + 1) % photos.length);
    };
    const prevPhoto = ()=>{
        setAutoPlay(false);
        setCurrentIndex((prev)=>(prev - 1 + photos.length) % photos.length);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-orchids-id": "src/components/PhotoGallery.tsx:86:4",
        "data-orchids-name": "div",
        className: "min-h-screen bg-gradient-to-br from-[#FFF8F0] via-[#FFFBF5] to-[#F5E6D3] py-12 px-4 relative overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                "data-orchids-id": "src/components/PhotoGallery.tsx:88:6",
                "data-orchids-name": "div",
                className: "absolute inset-0 opacity-5",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        "data-orchids-id": "src/components/PhotoGallery.tsx:89:8",
                        "data-orchids-name": "div",
                        className: "absolute top-10 left-10 w-32 h-32 border-4 border-[#D4A574] rounded-full"
                    }, void 0, false, {
                        fileName: "[project]/workspaces/birthday-surprise-website/src/components/PhotoGallery.tsx",
                        lineNumber: 89,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        "data-orchids-id": "src/components/PhotoGallery.tsx:90:8",
                        "data-orchids-name": "div",
                        className: "absolute bottom-20 right-20 w-40 h-40 border-4 border-[#FFB6C1] rounded-full"
                    }, void 0, false, {
                        fileName: "[project]/workspaces/birthday-surprise-website/src/components/PhotoGallery.tsx",
                        lineNumber: 90,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/workspaces/birthday-surprise-website/src/components/PhotoGallery.tsx",
                lineNumber: 88,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                "data-orchids-id": "src/components/PhotoGallery.tsx:93:6",
                "data-orchids-name": "div",
                className: "max-w-6xl mx-auto relative z-10",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                        "data-orchids-id": "src/components/PhotoGallery.tsx:94:8",
                        "data-orchids-name": "motion.div",
                        initial: {
                            opacity: 0,
                            y: -30
                        },
                        animate: {
                            opacity: 1,
                            y: 0
                        },
                        transition: {
                            duration: 0.8
                        },
                        className: "text-center mb-12",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                "data-orchids-id": "src/components/PhotoGallery.tsx:100:10",
                                "data-orchids-name": "div",
                                className: "flex items-center justify-center gap-3 mb-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$camera$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Camera$3e$__["Camera"], {
                                        "data-orchids-id": "src/components/PhotoGallery.tsx:101:12",
                                        "data-orchids-name": "Camera",
                                        className: "w-10 h-10 text-[#D4A574]"
                                    }, void 0, false, {
                                        fileName: "[project]/workspaces/birthday-surprise-website/src/components/PhotoGallery.tsx",
                                        lineNumber: 101,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        "data-orchids-id": "src/components/PhotoGallery.tsx:102:12",
                                        "data-orchids-name": "h2",
                                        className: "font-script text-6xl md:text-7xl font-bold text-[#D4A574]",
                                        children: "Precious Memories"
                                    }, void 0, false, {
                                        fileName: "[project]/workspaces/birthday-surprise-website/src/components/PhotoGallery.tsx",
                                        lineNumber: 102,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__["Heart"], {
                                        "data-orchids-id": "src/components/PhotoGallery.tsx:105:12",
                                        "data-orchids-name": "Heart",
                                        className: "w-10 h-10 text-[#FFB6C1]"
                                    }, void 0, false, {
                                        fileName: "[project]/workspaces/birthday-surprise-website/src/components/PhotoGallery.tsx",
                                        lineNumber: 105,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/workspaces/birthday-surprise-website/src/components/PhotoGallery.tsx",
                                lineNumber: 100,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                "data-orchids-id": "src/components/PhotoGallery.tsx:107:10",
                                "data-orchids-name": "p",
                                className: "font-serif text-xl text-[#8B7355]",
                                children: "A collection of beautiful moments to celebrate you"
                            }, void 0, false, {
                                fileName: "[project]/workspaces/birthday-surprise-website/src/components/PhotoGallery.tsx",
                                lineNumber: 107,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/workspaces/birthday-surprise-website/src/components/PhotoGallery.tsx",
                        lineNumber: 94,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        "data-orchids-id": "src/components/PhotoGallery.tsx:113:8",
                        "data-orchids-name": "div",
                        className: "relative max-w-4xl mx-auto mb-12",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                "data-orchids-id": "src/components/PhotoGallery.tsx:114:10",
                                "data-orchids-name": "div",
                                className: "relative h-[500px] rounded-3xl overflow-hidden shadow-2xl",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                                    "data-orchids-id": "src/components/PhotoGallery.tsx:115:12",
                                    "data-orchids-name": "AnimatePresence",
                                    mode: "wait",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                        "data-orchids-id": "src/components/PhotoGallery.tsx:116:14",
                                        "data-orchids-name": "motion.div",
                                        initial: {
                                            x: 300,
                                            opacity: 0,
                                            scale: 0.8
                                        },
                                        animate: {
                                            x: 0,
                                            opacity: 1,
                                            scale: 1
                                        },
                                        exit: {
                                            x: -300,
                                            opacity: 0,
                                            scale: 0.8
                                        },
                                        transition: {
                                            duration: 0.6,
                                            ease: "easeInOut"
                                        },
                                        className: "absolute inset-0",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            "data-orchids-id": "src/components/PhotoGallery.tsx:124:16",
                                            "data-orchids-name": "div",
                                            className: "relative w-full h-full bg-white p-6",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    "data-orchids-id": "src/components/PhotoGallery.tsx:125:18",
                                                    "data-orchids-name": "div",
                                                    className: "relative w-full h-[400px] rounded-lg overflow-hidden",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                        "data-orchids-id": "src/components/PhotoGallery.tsx:126:20",
                                                        "data-orchids-name": "img",
                                                        src: photos[currentIndex].url,
                                                        alt: photos[currentIndex].caption,
                                                        fill: true,
                                                        className: "object-cover"
                                                    }, void 0, false, {
                                                        fileName: "[project]/workspaces/birthday-surprise-website/src/components/PhotoGallery.tsx",
                                                        lineNumber: 126,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/workspaces/birthday-surprise-website/src/components/PhotoGallery.tsx",
                                                    lineNumber: 125,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    "data-orchids-id": "src/components/PhotoGallery.tsx:133:18",
                                                    "data-orchids-name": "p",
                                                    className: "font-script text-center text-3xl text-[#5D4E37] mt-4",
                                                    children: photos[currentIndex].caption
                                                }, void 0, false, {
                                                    fileName: "[project]/workspaces/birthday-surprise-website/src/components/PhotoGallery.tsx",
                                                    lineNumber: 133,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/workspaces/birthday-surprise-website/src/components/PhotoGallery.tsx",
                                            lineNumber: 124,
                                            columnNumber: 17
                                        }, this)
                                    }, currentIndex, false, {
                                        fileName: "[project]/workspaces/birthday-surprise-website/src/components/PhotoGallery.tsx",
                                        lineNumber: 116,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/workspaces/birthday-surprise-website/src/components/PhotoGallery.tsx",
                                    lineNumber: 115,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/workspaces/birthday-surprise-website/src/components/PhotoGallery.tsx",
                                lineNumber: 114,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                "data-orchids-id": "src/components/PhotoGallery.tsx:142:10@prevPhoto",
                                "data-orchids-name": "button",
                                onClick: prevPhoto,
                                className: "absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full shadow-lg flex items-center justify-center hover:scale-110 transition-transform",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__["ChevronLeft"], {
                                    "data-orchids-id": "src/components/PhotoGallery.tsx:146:12",
                                    "data-orchids-name": "ChevronLeft",
                                    className: "w-6 h-6 text-[#D4A574]"
                                }, void 0, false, {
                                    fileName: "[project]/workspaces/birthday-surprise-website/src/components/PhotoGallery.tsx",
                                    lineNumber: 146,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/workspaces/birthday-surprise-website/src/components/PhotoGallery.tsx",
                                lineNumber: 142,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                "data-orchids-id": "src/components/PhotoGallery.tsx:148:10@nextPhoto",
                                "data-orchids-name": "button",
                                onClick: nextPhoto,
                                className: "absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full shadow-lg flex items-center justify-center hover:scale-110 transition-transform",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                                    "data-orchids-id": "src/components/PhotoGallery.tsx:152:12",
                                    "data-orchids-name": "ChevronRight",
                                    className: "w-6 h-6 text-[#D4A574]"
                                }, void 0, false, {
                                    fileName: "[project]/workspaces/birthday-surprise-website/src/components/PhotoGallery.tsx",
                                    lineNumber: 152,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/workspaces/birthday-surprise-website/src/components/PhotoGallery.tsx",
                                lineNumber: 148,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                "data-orchids-id": "src/components/PhotoGallery.tsx:156:10",
                                "data-orchids-name": "div",
                                className: "flex justify-center gap-2 mt-6",
                                children: photos.map((_, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        "data-map-index": idx,
                                        "data-orchids-id": "src/components/PhotoGallery.tsx:158:14@photos",
                                        "data-orchids-name": "button",
                                        onClick: ()=>{
                                            setAutoPlay(false);
                                            setCurrentIndex(idx);
                                        },
                                        className: `w-3 h-3 rounded-full transition-all ${idx === currentIndex ? 'bg-[#D4A574] w-8' : 'bg-[#E8D4BA]'}`
                                    }, idx, false, {
                                        fileName: "[project]/workspaces/birthday-surprise-website/src/components/PhotoGallery.tsx",
                                        lineNumber: 158,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/workspaces/birthday-surprise-website/src/components/PhotoGallery.tsx",
                                lineNumber: 156,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/workspaces/birthday-surprise-website/src/components/PhotoGallery.tsx",
                        lineNumber: 113,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                        "data-orchids-id": "src/components/PhotoGallery.tsx:172:8",
                        "data-orchids-name": "motion.div",
                        initial: {
                            opacity: 0,
                            y: 30
                        },
                        animate: {
                            opacity: 1,
                            y: 0
                        },
                        transition: {
                            delay: 1,
                            duration: 0.8
                        },
                        className: "text-center",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].button, {
                            "data-orchids-id": "src/components/PhotoGallery.tsx:178:10",
                            "data-orchids-name": "motion.button",
                            onClick: onContinue,
                            className: "group relative px-10 py-5 bg-gradient-to-r from-[#D4A574] to-[#C49563] text-[#FFF8F0] rounded-full text-xl font-semibold shadow-2xl hover:shadow-[#D4A574]/50 transition-all duration-300",
                            whileHover: {
                                scale: 1.1
                            },
                            whileTap: {
                                scale: 0.95
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                "data-orchids-id": "src/components/PhotoGallery.tsx:184:12",
                                "data-orchids-name": "span",
                                className: "relative z-10 flex items-center gap-2",
                                children: [
                                    "Continue to Next Surprise",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__["Heart"], {
                                        "data-orchids-id": "src/components/PhotoGallery.tsx:186:14",
                                        "data-orchids-name": "Heart",
                                        className: "w-5 h-5"
                                    }, void 0, false, {
                                        fileName: "[project]/workspaces/birthday-surprise-website/src/components/PhotoGallery.tsx",
                                        lineNumber: 186,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/workspaces/birthday-surprise-website/src/components/PhotoGallery.tsx",
                                lineNumber: 184,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/workspaces/birthday-surprise-website/src/components/PhotoGallery.tsx",
                            lineNumber: 178,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/workspaces/birthday-surprise-website/src/components/PhotoGallery.tsx",
                        lineNumber: 172,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/workspaces/birthday-surprise-website/src/components/PhotoGallery.tsx",
                lineNumber: 93,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/workspaces/birthday-surprise-website/src/components/PhotoGallery.tsx",
        lineNumber: 86,
        columnNumber: 5
    }, this);
}
}}),
"[project]/workspaces/birthday-surprise-website/src/components/MemoryTimeline.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>MemoryTimeline)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/workspaces/birthday-surprise-website/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/workspaces/birthday-surprise-website/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__ = __turbopack_context__.i("[project]/workspaces/birthday-surprise-website/node_modules/lucide-react/dist/esm/icons/heart.js [app-ssr] (ecmascript) <export default as Heart>");
var __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__ = __turbopack_context__.i("[project]/workspaces/birthday-surprise-website/node_modules/lucide-react/dist/esm/icons/sparkles.js [app-ssr] (ecmascript) <export default as Sparkles>");
var __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__ = __turbopack_context__.i("[project]/workspaces/birthday-surprise-website/node_modules/lucide-react/dist/esm/icons/star.js [app-ssr] (ecmascript) <export default as Star>");
var __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$party$2d$popper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__PartyPopper$3e$__ = __turbopack_context__.i("[project]/workspaces/birthday-surprise-website/node_modules/lucide-react/dist/esm/icons/party-popper.js [app-ssr] (ecmascript) <export default as PartyPopper>");
"use client";
;
;
;
function MemoryTimeline({ onContinue }) {
    const memories = [
        {
            year: "The Beginning",
            title: "When We First Met",
            description: "The moment everything changed and life became more beautiful",
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"], {
                className: "w-5 h-5"
            }, void 0, false, {
                fileName: "[project]/workspaces/birthday-surprise-website/src/components/MemoryTimeline.tsx",
                lineNumber: 24,
                columnNumber: 13
            }, this)
        },
        {
            year: "Growing Together",
            title: "Our Adventures",
            description: "All the laughs, late-night talks, and unforgettable moments we've shared",
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__["Star"], {
                "data-orchids-id": "src/components/MemoryTimeline.tsx:30:12",
                "data-orchids-name": "Star",
                className: "w-5 h-5"
            }, void 0, false, {
                fileName: "[project]/workspaces/birthday-surprise-website/src/components/MemoryTimeline.tsx",
                lineNumber: 30,
                columnNumber: 13
            }, this)
        },
        {
            year: "Special Moments",
            title: "Memories We Treasure",
            description: "Every celebration, every milestone, every moment that made us smile",
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__["Heart"], {
                "data-orchids-id": "src/components/MemoryTimeline.tsx:36:12",
                "data-orchids-name": "Heart",
                className: "w-5 h-5"
            }, void 0, false, {
                fileName: "[project]/workspaces/birthday-surprise-website/src/components/MemoryTimeline.tsx",
                lineNumber: 36,
                columnNumber: 13
            }, this)
        },
        {
            year: "Today",
            title: "Your Special Day",
            description: "Celebrating the amazing person you are and all the joy you bring!",
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$party$2d$popper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__PartyPopper$3e$__["PartyPopper"], {
                "data-orchids-id": "src/components/MemoryTimeline.tsx:42:12",
                "data-orchids-name": "PartyPopper",
                className: "w-5 h-5"
            }, void 0, false, {
                fileName: "[project]/workspaces/birthday-surprise-website/src/components/MemoryTimeline.tsx",
                lineNumber: 42,
                columnNumber: 13
            }, this)
        }
    ];
    // Auto-advance after all memories are shown
    // useEffect(() => {
    //   const timer = setTimeout(() => {
    //     onContinue();
    //   }, memories.length * 300 + 4000); // Animation time + 4 seconds
    //   return () => clearTimeout(timer);
    // }, [onContinue, memories.length]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-orchids-id": "src/components/MemoryTimeline.tsx:55:4",
        "data-orchids-name": "div",
        className: "min-h-screen bg-gradient-to-br from-[#FFF8F0] via-[#F5E6D3] to-[#FFE4E1] relative overflow-hidden py-12 px-4",
        children: [
            [
                ...Array(8)
            ].map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    "data-orchids-id": "src/components/MemoryTimeline.tsx:58:8",
                    "data-orchids-name": "div",
                    className: "absolute animate-float-up",
                    style: {
                        left: `${Math.random() * 100}%`,
                        animationDuration: `${10 + Math.random() * 5}s`,
                        animationDelay: `${Math.random() * 5}s`
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__["Heart"], {
                        "data-orchids-id": "src/components/MemoryTimeline.tsx:67:10",
                        "data-orchids-name": "Heart",
                        className: "w-6 h-6 text-pink-400/40 fill-pink-400/40"
                    }, void 0, false, {
                        fileName: "[project]/workspaces/birthday-surprise-website/src/components/MemoryTimeline.tsx",
                        lineNumber: 67,
                        columnNumber: 11
                    }, this)
                }, i, false, {
                    fileName: "[project]/workspaces/birthday-surprise-website/src/components/MemoryTimeline.tsx",
                    lineNumber: 58,
                    columnNumber: 9
                }, this)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                "data-orchids-id": "src/components/MemoryTimeline.tsx:71:6",
                "data-orchids-name": "div",
                className: "max-w-4xl mx-auto relative z-10",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                        "data-orchids-id": "src/components/MemoryTimeline.tsx:72:8",
                        "data-orchids-name": "motion.div",
                        initial: {
                            opacity: 0,
                            y: -30
                        },
                        animate: {
                            opacity: 1,
                            y: 0
                        },
                        transition: {
                            duration: 0.8
                        },
                        className: "text-center mb-16",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                "data-orchids-id": "src/components/MemoryTimeline.tsx:78:10",
                                "data-orchids-name": "div",
                                className: "flex items-center justify-center gap-3 mb-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"], {
                                        className: "w-10 h-10 text-[#D4A574]"
                                    }, void 0, false, {
                                        fileName: "[project]/workspaces/birthday-surprise-website/src/components/MemoryTimeline.tsx",
                                        lineNumber: 79,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                        "data-orchids-id": "src/components/MemoryTimeline.tsx:80:12",
                                        "data-orchids-name": "h1",
                                        className: "font-script text-5xl md:text-7xl text-[#D4A574]",
                                        children: "Memory Lane"
                                    }, void 0, false, {
                                        fileName: "[project]/workspaces/birthday-surprise-website/src/components/MemoryTimeline.tsx",
                                        lineNumber: 80,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"], {
                                        className: "w-10 h-10 text-[#D4A574]"
                                    }, void 0, false, {
                                        fileName: "[project]/workspaces/birthday-surprise-website/src/components/MemoryTimeline.tsx",
                                        lineNumber: 83,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/workspaces/birthday-surprise-website/src/components/MemoryTimeline.tsx",
                                lineNumber: 78,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                "data-orchids-id": "src/components/MemoryTimeline.tsx:85:10",
                                "data-orchids-name": "p",
                                className: "font-serif text-lg md:text-xl text-[#8B7355]",
                                children: "A journey through our beautiful moments together"
                            }, void 0, false, {
                                fileName: "[project]/workspaces/birthday-surprise-website/src/components/MemoryTimeline.tsx",
                                lineNumber: 85,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/workspaces/birthday-surprise-website/src/components/MemoryTimeline.tsx",
                        lineNumber: 72,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        "data-orchids-id": "src/components/MemoryTimeline.tsx:90:8",
                        "data-orchids-name": "div",
                        className: "relative",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                "data-orchids-id": "src/components/MemoryTimeline.tsx:92:10",
                                "data-orchids-name": "div",
                                className: "absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#D4A574] via-pink-300 to-[#D4A574]"
                            }, void 0, false, {
                                fileName: "[project]/workspaces/birthday-surprise-website/src/components/MemoryTimeline.tsx",
                                lineNumber: 92,
                                columnNumber: 11
                            }, this),
                            memories.map((memory, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                    "data-map-index": index,
                                    "data-orchids-id": "src/components/MemoryTimeline.tsx:95:12@memories",
                                    "data-orchids-name": "motion.div",
                                    initial: {
                                        opacity: 0,
                                        x: index % 2 === 0 ? -50 : 50
                                    },
                                    animate: {
                                        opacity: 1,
                                        x: 0
                                    },
                                    transition: {
                                        duration: 0.6,
                                        delay: index * 0.3
                                    },
                                    className: `relative mb-12 md:mb-20 ${index % 2 === 0 ? 'md:pr-1/2 md:text-right' : 'md:pl-1/2 md:ml-auto'}`,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        "data-map-index": index,
                                        "data-orchids-id": "src/components/MemoryTimeline.tsx:104:14@memories",
                                        "data-orchids-name": "div",
                                        className: `ml-16 md:ml-0 ${index % 2 === 0 ? 'md:mr-16' : 'md:ml-16'}`,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                "data-map-index": index,
                                                "data-orchids-id": "src/components/MemoryTimeline.tsx:106:16@memories",
                                                "data-orchids-name": "div",
                                                className: "absolute left-8 md:left-1/2 top-6 w-6 h-6 -ml-3 bg-white border-4 border-[#D4A574] rounded-full shadow-lg",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__["Heart"], {
                                                    "data-map-index": index,
                                                    "data-orchids-id": "src/components/MemoryTimeline.tsx:107:18@memories",
                                                    "data-orchids-name": "Heart",
                                                    className: "w-3 h-3 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-pink-400 fill-pink-400"
                                                }, void 0, false, {
                                                    fileName: "[project]/workspaces/birthday-surprise-website/src/components/MemoryTimeline.tsx",
                                                    lineNumber: 107,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/workspaces/birthday-surprise-website/src/components/MemoryTimeline.tsx",
                                                lineNumber: 106,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                "data-map-index": index,
                                                "data-orchids-id": "src/components/MemoryTimeline.tsx:110:16@memories",
                                                "data-orchids-name": "div",
                                                className: "bg-white/80 backdrop-blur-sm rounded-3xl p-6 md:p-8 shadow-xl border-2 border-[#E8D4BA] hover:shadow-2xl transition-all duration-300 hover:scale-105",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        "data-map-index": index,
                                                        "data-orchids-id": "src/components/MemoryTimeline.tsx:111:18@memories",
                                                        "data-orchids-name": "span",
                                                        className: "inline-block font-script text-2xl text-[#D4A574] mb-2",
                                                        children: memory.year
                                                    }, void 0, false, {
                                                        fileName: "[project]/workspaces/birthday-surprise-website/src/components/MemoryTimeline.tsx",
                                                        lineNumber: 111,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        "data-map-index": index,
                                                        "data-orchids-id": "src/components/MemoryTimeline.tsx:114:18@memories",
                                                        "data-orchids-name": "div",
                                                        className: "flex items-center gap-2 justify-start mb-3",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                "data-map-index": index,
                                                                "data-orchids-id": "src/components/MemoryTimeline.tsx:115:20@memories",
                                                                "data-orchids-name": "div",
                                                                className: "text-[#D4A574]",
                                                                children: memory.icon
                                                            }, void 0, false, {
                                                                fileName: "[project]/workspaces/birthday-surprise-website/src/components/MemoryTimeline.tsx",
                                                                lineNumber: 115,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                "data-map-index": index,
                                                                "data-orchids-id": "src/components/MemoryTimeline.tsx:116:20@memories",
                                                                "data-orchids-name": "h3",
                                                                className: "font-serif text-xl md:text-2xl text-[#5D4E37] font-semibold",
                                                                children: memory.title
                                                            }, void 0, false, {
                                                                fileName: "[project]/workspaces/birthday-surprise-website/src/components/MemoryTimeline.tsx",
                                                                lineNumber: 116,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/workspaces/birthday-surprise-website/src/components/MemoryTimeline.tsx",
                                                        lineNumber: 114,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        "data-map-index": index,
                                                        "data-orchids-id": "src/components/MemoryTimeline.tsx:120:18@memories",
                                                        "data-orchids-name": "p",
                                                        className: "text-[#8B7355] leading-relaxed",
                                                        children: memory.description
                                                    }, void 0, false, {
                                                        fileName: "[project]/workspaces/birthday-surprise-website/src/components/MemoryTimeline.tsx",
                                                        lineNumber: 120,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/workspaces/birthday-surprise-website/src/components/MemoryTimeline.tsx",
                                                lineNumber: 110,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/workspaces/birthday-surprise-website/src/components/MemoryTimeline.tsx",
                                        lineNumber: 104,
                                        columnNumber: 15
                                    }, this)
                                }, index, false, {
                                    fileName: "[project]/workspaces/birthday-surprise-website/src/components/MemoryTimeline.tsx",
                                    lineNumber: 95,
                                    columnNumber: 13
                                }, this))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/workspaces/birthday-surprise-website/src/components/MemoryTimeline.tsx",
                        lineNumber: 90,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                        "data-orchids-id": "src/components/MemoryTimeline.tsx:129:8",
                        "data-orchids-name": "motion.div",
                        initial: {
                            opacity: 0,
                            scale: 0.8
                        },
                        animate: {
                            opacity: 1,
                            scale: 1
                        },
                        transition: {
                            duration: 0.6,
                            delay: memories.length * 0.3
                        },
                        className: "text-center mt-16",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            "data-orchids-id": "src/components/MemoryTimeline.tsx:135:10",
                            "data-orchids-name": "button",
                            onClick: onContinue,
                            className: "font-serif px-10 py-4 bg-gradient-to-r from-[#D4A574] to-[#C4956C] text-white rounded-full text-lg md:text-xl shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 border-2 border-white flex items-center gap-2 mx-auto",
                            children: [
                                "Continue The Journey",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"], {
                                    className: "w-5 h-5"
                                }, void 0, false, {
                                    fileName: "[project]/workspaces/birthday-surprise-website/src/components/MemoryTimeline.tsx",
                                    lineNumber: 140,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/workspaces/birthday-surprise-website/src/components/MemoryTimeline.tsx",
                            lineNumber: 135,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/workspaces/birthday-surprise-website/src/components/MemoryTimeline.tsx",
                        lineNumber: 129,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/workspaces/birthday-surprise-website/src/components/MemoryTimeline.tsx",
                lineNumber: 71,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/workspaces/birthday-surprise-website/src/components/MemoryTimeline.tsx",
        lineNumber: 55,
        columnNumber: 5
    }, this);
}
}}),
"[project]/workspaces/birthday-surprise-website/src/components/ReasonsPage.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>ReasonsPage)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/workspaces/birthday-surprise-website/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/workspaces/birthday-surprise-website/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/workspaces/birthday-surprise-website/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__ = __turbopack_context__.i("[project]/workspaces/birthday-surprise-website/node_modules/lucide-react/dist/esm/icons/sparkles.js [app-ssr] (ecmascript) <export default as Sparkles>");
var __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$smile$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Smile$3e$__ = __turbopack_context__.i("[project]/workspaces/birthday-surprise-website/node_modules/lucide-react/dist/esm/icons/smile.js [app-ssr] (ecmascript) <export default as Smile>");
var __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__ = __turbopack_context__.i("[project]/workspaces/birthday-surprise-website/node_modules/lucide-react/dist/esm/icons/heart.js [app-ssr] (ecmascript) <export default as Heart>");
var __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__ = __turbopack_context__.i("[project]/workspaces/birthday-surprise-website/node_modules/lucide-react/dist/esm/icons/zap.js [app-ssr] (ecmascript) <export default as Zap>");
var __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$flower$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Flower$3e$__ = __turbopack_context__.i("[project]/workspaces/birthday-surprise-website/node_modules/lucide-react/dist/esm/icons/flower.js [app-ssr] (ecmascript) <export default as Flower>");
var __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__ = __turbopack_context__.i("[project]/workspaces/birthday-surprise-website/node_modules/lucide-react/dist/esm/icons/star.js [app-ssr] (ecmascript) <export default as Star>");
var __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$palette$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Palette$3e$__ = __turbopack_context__.i("[project]/workspaces/birthday-surprise-website/node_modules/lucide-react/dist/esm/icons/palette.js [app-ssr] (ecmascript) <export default as Palette>");
var __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$flower$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__FlowerIcon$3e$__ = __turbopack_context__.i("[project]/workspaces/birthday-surprise-website/node_modules/lucide-react/dist/esm/icons/flower.js [app-ssr] (ecmascript) <export default as FlowerIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$award$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Award$3e$__ = __turbopack_context__.i("[project]/workspaces/birthday-surprise-website/node_modules/lucide-react/dist/esm/icons/award.js [app-ssr] (ecmascript) <export default as Award>");
var __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bird$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Bird$3e$__ = __turbopack_context__.i("[project]/workspaces/birthday-surprise-website/node_modules/lucide-react/dist/esm/icons/bird.js [app-ssr] (ecmascript) <export default as Bird>");
var __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rainbow$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Rainbow$3e$__ = __turbopack_context__.i("[project]/workspaces/birthday-surprise-website/node_modules/lucide-react/dist/esm/icons/rainbow.js [app-ssr] (ecmascript) <export default as Rainbow>");
var __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$gift$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Gift$3e$__ = __turbopack_context__.i("[project]/workspaces/birthday-surprise-website/node_modules/lucide-react/dist/esm/icons/gift.js [app-ssr] (ecmascript) <export default as Gift>");
var __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$laugh$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Laugh$3e$__ = __turbopack_context__.i("[project]/workspaces/birthday-surprise-website/node_modules/lucide-react/dist/esm/icons/laugh.js [app-ssr] (ecmascript) <export default as Laugh>");
"use client";
;
;
;
;
const reasons = [
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"],
        text: "Your smile lights up every room you enter",
        color: "from-yellow-400 to-orange-400"
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__["Heart"],
        text: "Your kindness touches everyone around you",
        color: "from-pink-400 to-pink-500"
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__["Zap"],
        text: "Your determination inspires us all",
        color: "from-purple-400 to-purple-500"
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$flower$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Flower$3e$__["Flower"],
        text: "Your creativity knows no bounds",
        color: "from-green-400 to-emerald-400"
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$laugh$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Laugh$3e$__["Laugh"],
        text: "Your laugh is contagious and beautiful",
        color: "from-blue-400 to-cyan-400"
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$palette$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Palette$3e$__["Palette"],
        text: "Your unique perspective makes the world brighter",
        color: "from-indigo-400 to-purple-400"
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$flower$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__FlowerIcon$3e$__["FlowerIcon"],
        text: "Your compassion makes everyone feel valued",
        color: "from-pink-300 to-rose-400"
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$award$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Award$3e$__["Award"],
        text: "Your strength in tough times is remarkable",
        color: "from-amber-400 to-orange-500"
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bird$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Bird$3e$__["Bird"],
        text: "Your authenticity is refreshing and rare",
        color: "from-teal-400 to-cyan-500"
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rainbow$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Rainbow$3e$__["Rainbow"],
        text: "Your positivity lifts everyone's spirits",
        color: "from-violet-400 to-purple-500"
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__["Heart"],
        text: "Your friendship is a precious gift",
        color: "from-red-400 to-pink-500"
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$smile$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Smile$3e$__["Smile"],
        text: "Your sense of humor brightens every day",
        color: "from-yellow-300 to-amber-400"
    }
];
function ReasonsPage({ onContinue }) {
    const [revealedCards, setRevealedCards] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    // Auto-reveal cards one by one
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (revealedCards.length < reasons.length) {
            const timer = setTimeout(()=>{
                setRevealedCards([
                    ...revealedCards,
                    revealedCards.length
                ]);
            }, 600);
            return ()=>clearTimeout(timer);
        }
    }, [
        revealedCards
    ]);
    const allRevealed = revealedCards.length === reasons.length;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-orchids-id": "src/components/ReasonsPage.tsx:42:4",
        "data-orchids-name": "div",
        className: "min-h-screen bg-gradient-to-br from-[#FFE4E1] via-[#FFF8F0] to-[#F5E6D3] relative overflow-hidden py-12 px-4",
        children: [
            [
                ...Array(15)
            ].map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                    "data-orchids-id": "src/components/ReasonsPage.tsx:45:8",
                    "data-orchids-name": "motion.div",
                    className: "absolute",
                    initial: {
                        opacity: 0,
                        scale: 0
                    },
                    animate: {
                        opacity: [
                            0,
                            1,
                            0
                        ],
                        scale: [
                            0,
                            1,
                            0
                        ],
                        rotate: [
                            0,
                            360
                        ]
                    },
                    transition: {
                        duration: 3,
                        delay: Math.random() * 2,
                        repeat: Infinity,
                        repeatDelay: Math.random() * 3
                    },
                    style: {
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"], {
                        className: "text-[#D4A574]",
                        size: 20
                    }, void 0, false, {
                        fileName: "[project]/workspaces/birthday-surprise-website/src/components/ReasonsPage.tsx",
                        lineNumber: 65,
                        columnNumber: 11
                    }, this)
                }, i, false, {
                    fileName: "[project]/workspaces/birthday-surprise-website/src/components/ReasonsPage.tsx",
                    lineNumber: 45,
                    columnNumber: 9
                }, this)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                "data-orchids-id": "src/components/ReasonsPage.tsx:69:6",
                "data-orchids-name": "div",
                className: "max-w-6xl mx-auto relative z-10",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                        "data-orchids-id": "src/components/ReasonsPage.tsx:70:8",
                        "data-orchids-name": "motion.div",
                        initial: {
                            opacity: 0,
                            y: -30
                        },
                        animate: {
                            opacity: 1,
                            y: 0
                        },
                        transition: {
                            duration: 0.8
                        },
                        className: "text-center mb-12",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                "data-orchids-id": "src/components/ReasonsPage.tsx:76:10",
                                "data-orchids-name": "div",
                                className: "flex items-center justify-center gap-3 mb-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__["Heart"], {
                                        "data-orchids-id": "src/components/ReasonsPage.tsx:77:12",
                                        "data-orchids-name": "Heart",
                                        className: "w-10 h-10 text-pink-400 fill-pink-400"
                                    }, void 0, false, {
                                        fileName: "[project]/workspaces/birthday-surprise-website/src/components/ReasonsPage.tsx",
                                        lineNumber: 77,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                        "data-orchids-id": "src/components/ReasonsPage.tsx:78:12",
                                        "data-orchids-name": "h1",
                                        className: "font-script text-5xl md:text-7xl text-[#D4A574]",
                                        children: "Why You're Amazing!"
                                    }, void 0, false, {
                                        fileName: "[project]/workspaces/birthday-surprise-website/src/components/ReasonsPage.tsx",
                                        lineNumber: 78,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__["Heart"], {
                                        "data-orchids-id": "src/components/ReasonsPage.tsx:81:12",
                                        "data-orchids-name": "Heart",
                                        className: "w-10 h-10 text-pink-400 fill-pink-400"
                                    }, void 0, false, {
                                        fileName: "[project]/workspaces/birthday-surprise-website/src/components/ReasonsPage.tsx",
                                        lineNumber: 81,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/workspaces/birthday-surprise-website/src/components/ReasonsPage.tsx",
                                lineNumber: 76,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                "data-orchids-id": "src/components/ReasonsPage.tsx:83:10",
                                "data-orchids-name": "p",
                                className: "font-serif text-lg md:text-xl text-[#8B7355] mb-4",
                                children: "Watch as each reason reveals itself..."
                            }, void 0, false, {
                                fileName: "[project]/workspaces/birthday-surprise-website/src/components/ReasonsPage.tsx",
                                lineNumber: 83,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                "data-orchids-id": "src/components/ReasonsPage.tsx:86:10",
                                "data-orchids-name": "p",
                                className: "text-[#8B7355] text-sm",
                                children: [
                                    revealedCards.length,
                                    " of ",
                                    reasons.length,
                                    " revealed"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/workspaces/birthday-surprise-website/src/components/ReasonsPage.tsx",
                                lineNumber: 86,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/workspaces/birthday-surprise-website/src/components/ReasonsPage.tsx",
                        lineNumber: 70,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        "data-orchids-id": "src/components/ReasonsPage.tsx:91:8",
                        "data-orchids-name": "div",
                        className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12",
                        children: reasons.map((reason, index)=>{
                            const Icon = reason.icon;
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                "data-map-index": index,
                                "data-orchids-id": "src/components/ReasonsPage.tsx:95:14@reasons",
                                "data-orchids-name": "motion.div",
                                initial: {
                                    opacity: 0,
                                    scale: 0.8,
                                    rotateY: 0
                                },
                                animate: {
                                    opacity: 1,
                                    scale: 1,
                                    rotateY: revealedCards.includes(index) ? 180 : 0
                                },
                                transition: {
                                    duration: 0.6,
                                    delay: index * 0.6
                                },
                                className: "cursor-pointer [perspective:1000px]",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    "data-map-index": index,
                                    "data-orchids-id": "src/components/ReasonsPage.tsx:106:16@reasons",
                                    "data-orchids-name": "div",
                                    className: "relative h-48",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                        "data-map-index": index,
                                        "data-orchids-id": "src/components/ReasonsPage.tsx:107:18@reasons",
                                        "data-orchids-name": "motion.div",
                                        className: "w-full h-full relative [transform-style:preserve-3d]",
                                        animate: {
                                            rotateY: revealedCards.includes(index) ? 180 : 0
                                        },
                                        transition: {
                                            duration: 0.6
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                "data-map-index": index,
                                                "data-orchids-id": "src/components/ReasonsPage.tsx:113:20@reasons",
                                                "data-orchids-name": "div",
                                                className: `absolute inset-0 [backface-visibility:hidden] bg-gradient-to-br ${reason.color} rounded-3xl shadow-xl border-2 border-white flex items-center justify-center`,
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    "data-map-index": index,
                                                    "data-orchids-id": "src/components/ReasonsPage.tsx:114:22@reasons",
                                                    "data-orchids-name": "div",
                                                    className: "text-center",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$gift$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Gift$3e$__["Gift"], {
                                                            "data-orchids-id": "src/components/ReasonsPage.tsx:115:24",
                                                            "data-orchids-name": "GiftIcon",
                                                            className: "w-16 h-16 text-white mx-auto mb-3"
                                                        }, void 0, false, {
                                                            fileName: "[project]/workspaces/birthday-surprise-website/src/components/ReasonsPage.tsx",
                                                            lineNumber: 115,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            "data-orchids-id": "src/components/ReasonsPage.tsx:116:24",
                                                            "data-orchids-name": "p",
                                                            className: "font-serif text-white text-lg",
                                                            children: [
                                                                "Reason #",
                                                                index + 1
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/workspaces/birthday-surprise-website/src/components/ReasonsPage.tsx",
                                                            lineNumber: 116,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/workspaces/birthday-surprise-website/src/components/ReasonsPage.tsx",
                                                    lineNumber: 114,
                                                    columnNumber: 23
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/workspaces/birthday-surprise-website/src/components/ReasonsPage.tsx",
                                                lineNumber: 113,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                "data-map-index": index,
                                                "data-orchids-id": "src/components/ReasonsPage.tsx:123:20@reasons",
                                                "data-orchids-name": "div",
                                                className: "absolute inset-0 [backface-visibility:hidden] bg-white/90 backdrop-blur-sm rounded-3xl shadow-xl border-2 border-[#E8D4BA] flex items-center justify-center p-6 [transform:rotateY(180deg)]",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    "data-map-index": index,
                                                    "data-orchids-id": "src/components/ReasonsPage.tsx:124:22@reasons",
                                                    "data-orchids-name": "div",
                                                    className: "text-center",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                                            "data-orchids-id": "src/components/ReasonsPage.tsx:125:24",
                                                            "data-orchids-name": "Icon",
                                                            className: `w-10 h-10 mx-auto mb-3 text-[#D4A574]`
                                                        }, void 0, false, {
                                                            fileName: "[project]/workspaces/birthday-surprise-website/src/components/ReasonsPage.tsx",
                                                            lineNumber: 125,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            "data-orchids-id": "src/components/ReasonsPage.tsx:126:24",
                                                            "data-orchids-name": "p",
                                                            className: "text-[#5D4E37] font-medium leading-relaxed",
                                                            children: reason.text
                                                        }, void 0, false, {
                                                            fileName: "[project]/workspaces/birthday-surprise-website/src/components/ReasonsPage.tsx",
                                                            lineNumber: 126,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/workspaces/birthday-surprise-website/src/components/ReasonsPage.tsx",
                                                    lineNumber: 124,
                                                    columnNumber: 23
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/workspaces/birthday-surprise-website/src/components/ReasonsPage.tsx",
                                                lineNumber: 123,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/workspaces/birthday-surprise-website/src/components/ReasonsPage.tsx",
                                        lineNumber: 107,
                                        columnNumber: 19
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/workspaces/birthday-surprise-website/src/components/ReasonsPage.tsx",
                                    lineNumber: 106,
                                    columnNumber: 17
                                }, this)
                            }, index, false, {
                                fileName: "[project]/workspaces/birthday-surprise-website/src/components/ReasonsPage.tsx",
                                lineNumber: 95,
                                columnNumber: 15
                            }, this);
                        })
                    }, void 0, false, {
                        fileName: "[project]/workspaces/birthday-surprise-website/src/components/ReasonsPage.tsx",
                        lineNumber: 91,
                        columnNumber: 9
                    }, this),
                    allRevealed && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                        "data-orchids-id": "src/components/ReasonsPage.tsx:139:10",
                        "data-orchids-name": "motion.div",
                        initial: {
                            opacity: 0,
                            y: 20
                        },
                        animate: {
                            opacity: 1,
                            y: 0
                        },
                        transition: {
                            duration: 0.6
                        },
                        className: "text-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                "data-orchids-id": "src/components/ReasonsPage.tsx:145:12",
                                "data-orchids-name": "p",
                                className: "font-script text-3xl text-[#D4A574] mb-6 flex items-center justify-center gap-2",
                                children: [
                                    "And there are so many more reasons!",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"], {
                                        className: "w-8 h-8"
                                    }, void 0, false, {
                                        fileName: "[project]/workspaces/birthday-surprise-website/src/components/ReasonsPage.tsx",
                                        lineNumber: 147,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/workspaces/birthday-surprise-website/src/components/ReasonsPage.tsx",
                                lineNumber: 145,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                "data-orchids-id": "src/components/ReasonsPage.tsx:149:12",
                                "data-orchids-name": "button",
                                onClick: onContinue,
                                className: "font-serif px-10 py-4 bg-gradient-to-r from-pink-400 to-pink-500 text-white rounded-full text-lg md:text-xl shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 border-2 border-white flex items-center gap-2 mx-auto",
                                children: [
                                    "More Surprises Await!",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__["Star"], {
                                        "data-orchids-id": "src/components/ReasonsPage.tsx:154:14",
                                        "data-orchids-name": "Star",
                                        className: "w-5 h-5"
                                    }, void 0, false, {
                                        fileName: "[project]/workspaces/birthday-surprise-website/src/components/ReasonsPage.tsx",
                                        lineNumber: 154,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/workspaces/birthday-surprise-website/src/components/ReasonsPage.tsx",
                                lineNumber: 149,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/workspaces/birthday-surprise-website/src/components/ReasonsPage.tsx",
                        lineNumber: 139,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/workspaces/birthday-surprise-website/src/components/ReasonsPage.tsx",
                lineNumber: 69,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/workspaces/birthday-surprise-website/src/components/ReasonsPage.tsx",
        lineNumber: 42,
        columnNumber: 5
    }, this);
}
}}),
"[project]/workspaces/birthday-surprise-website/src/components/VirtualGifts.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>VirtualGifts)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/workspaces/birthday-surprise-website/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/workspaces/birthday-surprise-website/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/workspaces/birthday-surprise-website/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/workspaces/birthday-surprise-website/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$gift$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Gift$3e$__ = __turbopack_context__.i("[project]/workspaces/birthday-surprise-website/node_modules/lucide-react/dist/esm/icons/gift.js [app-ssr] (ecmascript) <export default as Gift>");
var __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__ = __turbopack_context__.i("[project]/workspaces/birthday-surprise-website/node_modules/lucide-react/dist/esm/icons/heart.js [app-ssr] (ecmascript) <export default as Heart>");
var __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__ = __turbopack_context__.i("[project]/workspaces/birthday-surprise-website/node_modules/lucide-react/dist/esm/icons/star.js [app-ssr] (ecmascript) <export default as Star>");
var __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__ = __turbopack_context__.i("[project]/workspaces/birthday-surprise-website/node_modules/lucide-react/dist/esm/icons/sparkles.js [app-ssr] (ecmascript) <export default as Sparkles>");
var __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$target$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Target$3e$__ = __turbopack_context__.i("[project]/workspaces/birthday-surprise-website/node_modules/lucide-react/dist/esm/icons/target.js [app-ssr] (ecmascript) <export default as Target>");
var __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rainbow$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Rainbow$3e$__ = __turbopack_context__.i("[project]/workspaces/birthday-surprise-website/node_modules/lucide-react/dist/esm/icons/rainbow.js [app-ssr] (ecmascript) <export default as Rainbow>");
var __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$flower$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Flower2$3e$__ = __turbopack_context__.i("[project]/workspaces/birthday-surprise-website/node_modules/lucide-react/dist/esm/icons/flower-2.js [app-ssr] (ecmascript) <export default as Flower2>");
"use client";
;
;
;
;
const gifts = [
    {
        id: 1,
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__["Heart"],
        color: "from-pink-400 to-pink-500",
        title: "Love & Happiness",
        message: "May your days be filled with endless love and joy!"
    },
    {
        id: 2,
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__["Star"],
        color: "from-yellow-400 to-orange-400",
        title: "Dreams Come True",
        message: "May all your dreams and wishes come true this year!"
    },
    {
        id: 3,
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$target$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Target$3e$__["Target"],
        color: "from-purple-400 to-pink-400",
        title: "Success & Achievement",
        message: "May you achieve everything you set your mind to!"
    },
    {
        id: 4,
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rainbow$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Rainbow$3e$__["Rainbow"],
        color: "from-blue-400 to-cyan-400",
        title: "Beautiful Adventures",
        message: "May life bring you exciting adventures and wonderful experiences!"
    },
    {
        id: 5,
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"],
        color: "from-indigo-400 to-purple-400",
        title: "Magic & Wonder",
        message: "May every day bring you magical moments and beautiful surprises!"
    },
    {
        id: 6,
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$flower$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Flower2$3e$__["Flower2"],
        color: "from-teal-400 to-emerald-400",
        title: "Growth & Transformation",
        message: "May you continue to grow into the amazing person you're meant to be!"
    }
];
function VirtualGifts({ onContinue }) {
    const [openedGifts, setOpenedGifts] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [currentGift, setCurrentGift] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    // Auto-open gifts one by one
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (openedGifts.length < gifts.length) {
            const timer = setTimeout(()=>{
                const nextGift = gifts[openedGifts.length];
                setOpenedGifts([
                    ...openedGifts,
                    nextGift.id
                ]);
                setCurrentGift(nextGift);
            }, openedGifts.length === 0 ? 1000 : 2500);
            return ()=>clearTimeout(timer);
        }
    }, [
        openedGifts
    ]);
    // Auto-close modal after showing
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (currentGift) {
            const timer = setTimeout(()=>{
                setCurrentGift(null);
            }, 2000);
            return ()=>clearTimeout(timer);
        }
    }, [
        currentGift
    ]);
    const closeModal = ()=>{
        setCurrentGift(null);
    };
    const allOpened = openedGifts.length === gifts.length;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-orchids-id": "src/components/VirtualGifts.tsx:98:4",
        "data-orchids-name": "div",
        className: "min-h-screen bg-gradient-to-br from-[#F5E6D3] via-[#FFE4E1] to-[#FFF8F0] relative overflow-hidden py-12 px-4",
        children: [
            [
                ...Array(20)
            ].map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                    "data-orchids-id": "src/components/VirtualGifts.tsx:101:8",
                    "data-orchids-name": "motion.div",
                    className: "absolute",
                    animate: {
                        y: [
                            0,
                            -20,
                            0
                        ],
                        x: [
                            0,
                            Math.random() * 30 - 15,
                            0
                        ],
                        rotate: [
                            0,
                            360
                        ],
                        opacity: [
                            0.3,
                            0.7,
                            0.3
                        ]
                    },
                    transition: {
                        duration: 4 + Math.random() * 2,
                        repeat: Infinity,
                        delay: Math.random() * 2
                    },
                    style: {
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`
                    },
                    children: [
                        i % 4 === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$gift$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Gift$3e$__["Gift"], {
                            "data-orchids-id": "src/components/VirtualGifts.tsx:120:26",
                            "data-orchids-name": "Gift",
                            className: "w-6 h-6 text-[#D4A574]/40"
                        }, void 0, false, {
                            fileName: "[project]/workspaces/birthday-surprise-website/src/components/VirtualGifts.tsx",
                            lineNumber: 120,
                            columnNumber: 27
                        }, this),
                        i % 4 === 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"], {
                            className: "w-6 h-6 text-pink-400/40"
                        }, void 0, false, {
                            fileName: "[project]/workspaces/birthday-surprise-website/src/components/VirtualGifts.tsx",
                            lineNumber: 121,
                            columnNumber: 27
                        }, this),
                        i % 4 === 2 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__["Star"], {
                            "data-orchids-id": "src/components/VirtualGifts.tsx:122:26",
                            "data-orchids-name": "Star",
                            className: "w-6 h-6 text-yellow-400/40"
                        }, void 0, false, {
                            fileName: "[project]/workspaces/birthday-surprise-website/src/components/VirtualGifts.tsx",
                            lineNumber: 122,
                            columnNumber: 27
                        }, this),
                        i % 4 === 3 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__["Heart"], {
                            "data-orchids-id": "src/components/VirtualGifts.tsx:123:26",
                            "data-orchids-name": "Heart",
                            className: "w-6 h-6 text-pink-400/40"
                        }, void 0, false, {
                            fileName: "[project]/workspaces/birthday-surprise-website/src/components/VirtualGifts.tsx",
                            lineNumber: 123,
                            columnNumber: 27
                        }, this)
                    ]
                }, i, true, {
                    fileName: "[project]/workspaces/birthday-surprise-website/src/components/VirtualGifts.tsx",
                    lineNumber: 101,
                    columnNumber: 9
                }, this)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                "data-orchids-id": "src/components/VirtualGifts.tsx:127:6",
                "data-orchids-name": "div",
                className: "max-w-6xl mx-auto relative z-10",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                        "data-orchids-id": "src/components/VirtualGifts.tsx:128:8",
                        "data-orchids-name": "motion.div",
                        initial: {
                            opacity: 0,
                            y: -30
                        },
                        animate: {
                            opacity: 1,
                            y: 0
                        },
                        transition: {
                            duration: 0.8
                        },
                        className: "text-center mb-12",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                "data-orchids-id": "src/components/VirtualGifts.tsx:134:10",
                                "data-orchids-name": "div",
                                className: "flex items-center justify-center gap-3 mb-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$gift$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Gift$3e$__["Gift"], {
                                        "data-orchids-id": "src/components/VirtualGifts.tsx:135:12",
                                        "data-orchids-name": "Gift",
                                        className: "w-10 h-10 text-[#D4A574]"
                                    }, void 0, false, {
                                        fileName: "[project]/workspaces/birthday-surprise-website/src/components/VirtualGifts.tsx",
                                        lineNumber: 135,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                        "data-orchids-id": "src/components/VirtualGifts.tsx:136:12",
                                        "data-orchids-name": "h1",
                                        className: "font-script text-5xl md:text-7xl text-[#D4A574]",
                                        children: "Virtual Gift Box"
                                    }, void 0, false, {
                                        fileName: "[project]/workspaces/birthday-surprise-website/src/components/VirtualGifts.tsx",
                                        lineNumber: 136,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$gift$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Gift$3e$__["Gift"], {
                                        "data-orchids-id": "src/components/VirtualGifts.tsx:139:12",
                                        "data-orchids-name": "Gift",
                                        className: "w-10 h-10 text-[#D4A574]"
                                    }, void 0, false, {
                                        fileName: "[project]/workspaces/birthday-surprise-website/src/components/VirtualGifts.tsx",
                                        lineNumber: 139,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/workspaces/birthday-surprise-website/src/components/VirtualGifts.tsx",
                                lineNumber: 134,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                "data-orchids-id": "src/components/VirtualGifts.tsx:141:10",
                                "data-orchids-name": "p",
                                className: "font-serif text-lg md:text-xl text-[#8B7355] mb-4",
                                children: "Watch as each gift opens with a special wish for you!"
                            }, void 0, false, {
                                fileName: "[project]/workspaces/birthday-surprise-website/src/components/VirtualGifts.tsx",
                                lineNumber: 141,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                "data-orchids-id": "src/components/VirtualGifts.tsx:144:10",
                                "data-orchids-name": "div",
                                className: "flex items-center justify-center gap-2 text-[#8B7355]",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$gift$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Gift$3e$__["Gift"], {
                                        "data-orchids-id": "src/components/VirtualGifts.tsx:145:12",
                                        "data-orchids-name": "Gift",
                                        className: "w-5 h-5"
                                    }, void 0, false, {
                                        fileName: "[project]/workspaces/birthday-surprise-website/src/components/VirtualGifts.tsx",
                                        lineNumber: 145,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        "data-orchids-id": "src/components/VirtualGifts.tsx:146:12",
                                        "data-orchids-name": "span",
                                        children: [
                                            openedGifts.length,
                                            " of ",
                                            gifts.length,
                                            " gifts opened"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/workspaces/birthday-surprise-website/src/components/VirtualGifts.tsx",
                                        lineNumber: 146,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/workspaces/birthday-surprise-website/src/components/VirtualGifts.tsx",
                                lineNumber: 144,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/workspaces/birthday-surprise-website/src/components/VirtualGifts.tsx",
                        lineNumber: 128,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        "data-orchids-id": "src/components/VirtualGifts.tsx:150:8",
                        "data-orchids-name": "div",
                        className: "grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 mb-12",
                        children: gifts.map((gift, index)=>{
                            const Icon = gift.icon;
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                "data-map-index": index,
                                "data-orchids-id": "src/components/VirtualGifts.tsx:154:14@gifts",
                                "data-orchids-name": "motion.div",
                                initial: {
                                    opacity: 0,
                                    scale: 0
                                },
                                animate: {
                                    opacity: 1,
                                    scale: 1
                                },
                                transition: {
                                    duration: 0.5,
                                    delay: index * 0.1
                                },
                                className: "cursor-pointer",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                    "data-map-index": index,
                                    "data-orchids-id": "src/components/VirtualGifts.tsx:161:16@gifts",
                                    "data-orchids-name": "motion.div",
                                    whileHover: {
                                        scale: 1.1,
                                        rotate: [
                                            0,
                                            -5,
                                            5,
                                            0
                                        ]
                                    },
                                    whileTap: {
                                        scale: 0.95
                                    },
                                    className: `aspect-square rounded-3xl bg-gradient-to-br ${gift.color} shadow-2xl border-4 border-white flex items-center justify-center relative overflow-hidden`,
                                    children: [
                                        openedGifts.includes(gift.id) ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                            "data-map-index": index,
                                            "data-orchids-id": "src/components/VirtualGifts.tsx:167:20@gifts",
                                            "data-orchids-name": "motion.div",
                                            initial: {
                                                scale: 0,
                                                rotate: 0
                                            },
                                            animate: {
                                                scale: 1,
                                                rotate: 360
                                            },
                                            transition: {
                                                duration: 0.6
                                            },
                                            className: "text-white",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                                "data-orchids-id": "src/components/VirtualGifts.tsx:173:22",
                                                "data-orchids-name": "Icon",
                                                className: "w-16 h-16 md:w-20 md:h-20"
                                            }, void 0, false, {
                                                fileName: "[project]/workspaces/birthday-surprise-website/src/components/VirtualGifts.tsx",
                                                lineNumber: 173,
                                                columnNumber: 23
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/workspaces/birthday-surprise-website/src/components/VirtualGifts.tsx",
                                            lineNumber: 167,
                                            columnNumber: 21
                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                            "data-map-index": index,
                                            "data-orchids-id": "src/components/VirtualGifts.tsx:176:20@gifts",
                                            "data-orchids-name": "motion.div",
                                            animate: {
                                                y: [
                                                    0,
                                                    -10,
                                                    0
                                                ]
                                            },
                                            transition: {
                                                duration: 2,
                                                repeat: Infinity,
                                                ease: "easeInOut"
                                            },
                                            className: "text-center",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$gift$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Gift$3e$__["Gift"], {
                                                    "data-orchids-id": "src/components/VirtualGifts.tsx:187:22",
                                                    "data-orchids-name": "Gift",
                                                    className: "w-16 h-16 md:w-20 md:h-20 text-white mx-auto mb-2"
                                                }, void 0, false, {
                                                    fileName: "[project]/workspaces/birthday-surprise-website/src/components/VirtualGifts.tsx",
                                                    lineNumber: 187,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    "data-orchids-id": "src/components/VirtualGifts.tsx:188:22",
                                                    "data-orchids-name": "p",
                                                    className: "text-white font-semibold text-sm md:text-base",
                                                    children: "Opening..."
                                                }, void 0, false, {
                                                    fileName: "[project]/workspaces/birthday-surprise-website/src/components/VirtualGifts.tsx",
                                                    lineNumber: 188,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/workspaces/birthday-surprise-website/src/components/VirtualGifts.tsx",
                                            lineNumber: 176,
                                            columnNumber: 21
                                        }, this),
                                        openedGifts.includes(gift.id) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                            "data-map-index": index,
                                            "data-orchids-id": "src/components/VirtualGifts.tsx:196:20@gifts",
                                            "data-orchids-name": "motion.div",
                                            initial: {
                                                opacity: 0
                                            },
                                            animate: {
                                                opacity: [
                                                    0,
                                                    1,
                                                    0
                                                ]
                                            },
                                            transition: {
                                                duration: 1
                                            },
                                            className: "absolute inset-0 flex items-center justify-center",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__["Star"], {
                                                "data-orchids-id": "src/components/VirtualGifts.tsx:202:22",
                                                "data-orchids-name": "Star",
                                                className: "w-full h-full text-white/30"
                                            }, void 0, false, {
                                                fileName: "[project]/workspaces/birthday-surprise-website/src/components/VirtualGifts.tsx",
                                                lineNumber: 202,
                                                columnNumber: 23
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/workspaces/birthday-surprise-website/src/components/VirtualGifts.tsx",
                                            lineNumber: 196,
                                            columnNumber: 21
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/workspaces/birthday-surprise-website/src/components/VirtualGifts.tsx",
                                    lineNumber: 161,
                                    columnNumber: 17
                                }, this)
                            }, gift.id, false, {
                                fileName: "[project]/workspaces/birthday-surprise-website/src/components/VirtualGifts.tsx",
                                lineNumber: 154,
                                columnNumber: 15
                            }, this);
                        })
                    }, void 0, false, {
                        fileName: "[project]/workspaces/birthday-surprise-website/src/components/VirtualGifts.tsx",
                        lineNumber: 150,
                        columnNumber: 9
                    }, this),
                    allOpened && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                        "data-orchids-id": "src/components/VirtualGifts.tsx:212:10",
                        "data-orchids-name": "motion.div",
                        initial: {
                            opacity: 0,
                            y: 20
                        },
                        animate: {
                            opacity: 1,
                            y: 0
                        },
                        transition: {
                            duration: 0.6
                        },
                        className: "text-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                "data-orchids-id": "src/components/VirtualGifts.tsx:218:12",
                                "data-orchids-name": "div",
                                className: "bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border-2 border-[#E8D4BA] mb-8",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__["Heart"], {
                                        "data-orchids-id": "src/components/VirtualGifts.tsx:219:14",
                                        "data-orchids-name": "Heart",
                                        className: "w-16 h-16 text-pink-400 fill-pink-400 mx-auto mb-4"
                                    }, void 0, false, {
                                        fileName: "[project]/workspaces/birthday-surprise-website/src/components/VirtualGifts.tsx",
                                        lineNumber: 219,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        "data-orchids-id": "src/components/VirtualGifts.tsx:220:14",
                                        "data-orchids-name": "p",
                                        className: "font-serif text-xl md:text-2xl text-[#5D4E37] mb-4",
                                        children: "All gifts opened!"
                                    }, void 0, false, {
                                        fileName: "[project]/workspaces/birthday-surprise-website/src/components/VirtualGifts.tsx",
                                        lineNumber: 220,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        "data-orchids-id": "src/components/VirtualGifts.tsx:223:14",
                                        "data-orchids-name": "p",
                                        className: "text-[#8B7355]",
                                        children: "These are all the wishes from the bottom of my heart for you!"
                                    }, void 0, false, {
                                        fileName: "[project]/workspaces/birthday-surprise-website/src/components/VirtualGifts.tsx",
                                        lineNumber: 223,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/workspaces/birthday-surprise-website/src/components/VirtualGifts.tsx",
                                lineNumber: 218,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                "data-orchids-id": "src/components/VirtualGifts.tsx:228:12",
                                "data-orchids-name": "button",
                                onClick: onContinue,
                                className: "font-serif px-10 py-4 bg-gradient-to-r from-[#D4A574] to-[#C4956C] text-white rounded-full text-lg md:text-xl shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 border-2 border-white flex items-center gap-2 mx-auto",
                                children: [
                                    "Continue to Next Surprise",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"], {
                                        className: "w-5 h-5"
                                    }, void 0, false, {
                                        fileName: "[project]/workspaces/birthday-surprise-website/src/components/VirtualGifts.tsx",
                                        lineNumber: 233,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/workspaces/birthday-surprise-website/src/components/VirtualGifts.tsx",
                                lineNumber: 228,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/workspaces/birthday-surprise-website/src/components/VirtualGifts.tsx",
                        lineNumber: 212,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/workspaces/birthday-surprise-website/src/components/VirtualGifts.tsx",
                lineNumber: 127,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                "data-orchids-id": "src/components/VirtualGifts.tsx:240:6",
                "data-orchids-name": "AnimatePresence",
                children: currentGift && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                    "data-orchids-id": "src/components/VirtualGifts.tsx:242:10@closeModal",
                    "data-orchids-name": "motion.div",
                    initial: {
                        opacity: 0
                    },
                    animate: {
                        opacity: 1
                    },
                    exit: {
                        opacity: 0
                    },
                    className: "fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4",
                    onClick: closeModal,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                        "data-orchids-id": "src/components/VirtualGifts.tsx:249:12",
                        "data-orchids-name": "motion.div",
                        initial: {
                            scale: 0,
                            rotate: -180
                        },
                        animate: {
                            scale: 1,
                            rotate: 0
                        },
                        exit: {
                            scale: 0,
                            rotate: 180
                        },
                        transition: {
                            type: "spring",
                            duration: 0.6
                        },
                        className: "bg-white rounded-3xl p-8 md:p-12 shadow-2xl border-4 border-[#E8D4BA] max-w-md w-full",
                        onClick: (e)=>e.stopPropagation(),
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            "data-orchids-id": "src/components/VirtualGifts.tsx:257:14",
                            "data-orchids-name": "div",
                            className: "text-center",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                    "data-orchids-id": "src/components/VirtualGifts.tsx:258:16",
                                    "data-orchids-name": "motion.div",
                                    animate: {
                                        rotate: [
                                            0,
                                            10,
                                            -10,
                                            0
                                        ]
                                    },
                                    transition: {
                                        duration: 0.5,
                                        repeat: Infinity,
                                        repeatDelay: 2
                                    },
                                    className: "text-[#D4A574] mb-4 flex justify-center",
                                    children: currentGift.icon && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(currentGift.icon, {
                                        "data-orchids-id": "src/components/VirtualGifts.tsx:263:39",
                                        "data-orchids-name": "currentGift.icon",
                                        className: "w-20 h-20"
                                    }, void 0, false, {
                                        fileName: "[project]/workspaces/birthday-surprise-website/src/components/VirtualGifts.tsx",
                                        lineNumber: 263,
                                        columnNumber: 40
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/workspaces/birthday-surprise-website/src/components/VirtualGifts.tsx",
                                    lineNumber: 258,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    "data-orchids-id": "src/components/VirtualGifts.tsx:265:16",
                                    "data-orchids-name": "h3",
                                    className: "font-script text-3xl md:text-4xl text-[#D4A574] mb-4",
                                    children: currentGift.title
                                }, void 0, false, {
                                    fileName: "[project]/workspaces/birthday-surprise-website/src/components/VirtualGifts.tsx",
                                    lineNumber: 265,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    "data-orchids-id": "src/components/VirtualGifts.tsx:268:16",
                                    "data-orchids-name": "p",
                                    className: "font-serif text-lg text-[#5D4E37] mb-6 leading-relaxed",
                                    children: currentGift.message
                                }, void 0, false, {
                                    fileName: "[project]/workspaces/birthday-surprise-website/src/components/VirtualGifts.tsx",
                                    lineNumber: 268,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    "data-orchids-id": "src/components/VirtualGifts.tsx:271:16@closeModal",
                                    "data-orchids-name": "button",
                                    onClick: closeModal,
                                    className: "px-8 py-3 bg-gradient-to-r from-pink-400 to-pink-500 text-white rounded-full font-medium shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center gap-2 mx-auto",
                                    children: [
                                        "Thank You!",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__["Heart"], {
                                            "data-orchids-id": "src/components/VirtualGifts.tsx:276:18",
                                            "data-orchids-name": "Heart",
                                            className: "w-5 h-5"
                                        }, void 0, false, {
                                            fileName: "[project]/workspaces/birthday-surprise-website/src/components/VirtualGifts.tsx",
                                            lineNumber: 276,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/workspaces/birthday-surprise-website/src/components/VirtualGifts.tsx",
                                    lineNumber: 271,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/workspaces/birthday-surprise-website/src/components/VirtualGifts.tsx",
                            lineNumber: 257,
                            columnNumber: 15
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/workspaces/birthday-surprise-website/src/components/VirtualGifts.tsx",
                        lineNumber: 249,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/workspaces/birthday-surprise-website/src/components/VirtualGifts.tsx",
                    lineNumber: 242,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/workspaces/birthday-surprise-website/src/components/VirtualGifts.tsx",
                lineNumber: 240,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/workspaces/birthday-surprise-website/src/components/VirtualGifts.tsx",
        lineNumber: 98,
        columnNumber: 5
    }, this);
}
}}),
"[project]/workspaces/birthday-surprise-website/src/components/BirthdayCake.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>BirthdayCake)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/workspaces/birthday-surprise-website/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/workspaces/birthday-surprise-website/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/workspaces/birthday-surprise-website/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/workspaces/birthday-surprise-website/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$cake$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Cake$3e$__ = __turbopack_context__.i("[project]/workspaces/birthday-surprise-website/node_modules/lucide-react/dist/esm/icons/cake.js [app-ssr] (ecmascript) <export default as Cake>");
var __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$party$2d$popper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__PartyPopper$3e$__ = __turbopack_context__.i("[project]/workspaces/birthday-surprise-website/node_modules/lucide-react/dist/esm/icons/party-popper.js [app-ssr] (ecmascript) <export default as PartyPopper>");
"use client";
;
;
;
;
function BirthdayCake({ onContinue }) {
    const [candlesLit, setCandlesLit] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const [showCelebration, setShowCelebration] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [blowing, setBlowing] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const numCandles = 5;
    const handleBlowCandles = ()=>{
        setBlowing(true);
        setTimeout(()=>{
            setCandlesLit(false);
            setBlowing(false);
            setShowCelebration(true);
        }, 1000);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-orchids-id": "src/components/BirthdayCake.tsx:28:4",
        "data-orchids-name": "div",
        className: "min-h-screen bg-gradient-to-br from-[#FFE4E1] via-[#F5E6D3] to-[#FFF8F0] relative overflow-hidden py-12 px-4",
        children: [
            showCelebration && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    ...Array(50)
                ].map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                        "data-orchids-id": "src/components/BirthdayCake.tsx:33:12",
                        "data-orchids-name": "motion.div",
                        className: "absolute w-3 h-3 rounded-full",
                        initial: {
                            x: "50vw",
                            y: "50vh",
                            backgroundColor: [
                                "#D4A574",
                                "#ff6b9d",
                                "#c0c0ff",
                                "#ffed4e",
                                "#4ef4ff"
                            ][i % 5]
                        },
                        animate: {
                            x: `${Math.random() * 100}vw`,
                            y: `${Math.random() * 100}vh`,
                            rotate: Math.random() * 720,
                            opacity: [
                                1,
                                1,
                                0
                            ]
                        },
                        transition: {
                            duration: 2,
                            ease: "easeOut"
                        }
                    }, i, false, {
                        fileName: "[project]/workspaces/birthday-surprise-website/src/components/BirthdayCake.tsx",
                        lineNumber: 33,
                        columnNumber: 13
                    }, this))
            }, void 0, false),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                "data-orchids-id": "src/components/BirthdayCake.tsx:62:6",
                "data-orchids-name": "div",
                className: "max-w-4xl mx-auto relative z-10",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                        "data-orchids-id": "src/components/BirthdayCake.tsx:63:8",
                        "data-orchids-name": "motion.div",
                        initial: {
                            opacity: 0,
                            y: -30
                        },
                        animate: {
                            opacity: 1,
                            y: 0
                        },
                        transition: {
                            duration: 0.8
                        },
                        className: "text-center mb-12",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                "data-orchids-id": "src/components/BirthdayCake.tsx:69:10",
                                "data-orchids-name": "div",
                                className: "flex items-center justify-center gap-3 mb-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$cake$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Cake$3e$__["Cake"], {
                                        "data-orchids-id": "src/components/BirthdayCake.tsx:70:12",
                                        "data-orchids-name": "Cake",
                                        className: "w-10 h-10 text-[#D4A574]"
                                    }, void 0, false, {
                                        fileName: "[project]/workspaces/birthday-surprise-website/src/components/BirthdayCake.tsx",
                                        lineNumber: 70,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                        "data-orchids-id": "src/components/BirthdayCake.tsx:71:12",
                                        "data-orchids-name": "h1",
                                        className: "font-script text-5xl md:text-7xl text-[#D4A574]",
                                        children: "Make a Wish!"
                                    }, void 0, false, {
                                        fileName: "[project]/workspaces/birthday-surprise-website/src/components/BirthdayCake.tsx",
                                        lineNumber: 71,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$cake$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Cake$3e$__["Cake"], {
                                        "data-orchids-id": "src/components/BirthdayCake.tsx:74:12",
                                        "data-orchids-name": "Cake",
                                        className: "w-10 h-10 text-[#D4A574]"
                                    }, void 0, false, {
                                        fileName: "[project]/workspaces/birthday-surprise-website/src/components/BirthdayCake.tsx",
                                        lineNumber: 74,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/workspaces/birthday-surprise-website/src/components/BirthdayCake.tsx",
                                lineNumber: 69,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                "data-orchids-id": "src/components/BirthdayCake.tsx:76:10",
                                "data-orchids-name": "p",
                                className: "font-serif text-lg md:text-xl text-[#8B7355]",
                                children: candlesLit ? "Get ready to blow out your candles!" : "Your wish has been made!"
                            }, void 0, false, {
                                fileName: "[project]/workspaces/birthday-surprise-website/src/components/BirthdayCake.tsx",
                                lineNumber: 76,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/workspaces/birthday-surprise-website/src/components/BirthdayCake.tsx",
                        lineNumber: 63,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        "data-orchids-id": "src/components/BirthdayCake.tsx:84:8",
                        "data-orchids-name": "div",
                        className: "relative mx-auto max-w-md mb-12",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                            "data-orchids-id": "src/components/BirthdayCake.tsx:85:10",
                            "data-orchids-name": "motion.div",
                            initial: {
                                scale: 0
                            },
                            animate: {
                                scale: 1
                            },
                            transition: {
                                type: "spring",
                                duration: 1,
                                delay: 0.3
                            },
                            className: "relative",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    "data-orchids-id": "src/components/BirthdayCake.tsx:92:12",
                                    "data-orchids-name": "div",
                                    className: "flex justify-center gap-4 md:gap-6 mb-4 relative z-10",
                                    children: [
                                        ...Array(numCandles)
                                    ].map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            "data-orchids-id": "src/components/BirthdayCake.tsx:94:16",
                                            "data-orchids-name": "div",
                                            className: "relative",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                                                    "data-orchids-id": "src/components/BirthdayCake.tsx:96:18",
                                                    "data-orchids-name": "AnimatePresence",
                                                    children: candlesLit && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                                        "data-orchids-id": "src/components/BirthdayCake.tsx:98:22",
                                                        "data-orchids-name": "motion.div",
                                                        initial: {
                                                            scale: 0,
                                                            opacity: 0
                                                        },
                                                        animate: {
                                                            scale: blowing ? [
                                                                1,
                                                                0.5,
                                                                0
                                                            ] : [
                                                                1,
                                                                1.2,
                                                                1
                                                            ],
                                                            opacity: blowing ? [
                                                                1,
                                                                0.5,
                                                                0
                                                            ] : 1,
                                                            y: blowing ? [
                                                                0,
                                                                -10,
                                                                -20
                                                            ] : 0
                                                        },
                                                        exit: {
                                                            scale: 0,
                                                            opacity: 0
                                                        },
                                                        transition: {
                                                            duration: blowing ? 0.5 : 1.5,
                                                            repeat: blowing ? 0 : Infinity,
                                                            delay: i * 0.1
                                                        },
                                                        className: "absolute -top-8 left-1/2 -translate-x-1/2 w-6 h-8",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                "data-orchids-id": "src/components/BirthdayCake.tsx:113:24",
                                                                "data-orchids-name": "div",
                                                                className: "w-full h-full bg-gradient-to-t from-orange-400 via-yellow-400 to-yellow-200 rounded-full blur-sm"
                                                            }, void 0, false, {
                                                                fileName: "[project]/workspaces/birthday-surprise-website/src/components/BirthdayCake.tsx",
                                                                lineNumber: 113,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                "data-orchids-id": "src/components/BirthdayCake.tsx:114:24",
                                                                "data-orchids-name": "div",
                                                                className: "absolute inset-0 bg-gradient-to-t from-orange-500 via-yellow-500 to-white rounded-full"
                                                            }, void 0, false, {
                                                                fileName: "[project]/workspaces/birthday-surprise-website/src/components/BirthdayCake.tsx",
                                                                lineNumber: 114,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/workspaces/birthday-surprise-website/src/components/BirthdayCake.tsx",
                                                        lineNumber: 98,
                                                        columnNumber: 23
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/workspaces/birthday-surprise-website/src/components/BirthdayCake.tsx",
                                                    lineNumber: 96,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                                    "data-orchids-id": "src/components/BirthdayCake.tsx:120:18",
                                                    "data-orchids-name": "motion.div",
                                                    initial: {
                                                        scaleY: 0
                                                    },
                                                    animate: {
                                                        scaleY: 1
                                                    },
                                                    transition: {
                                                        delay: 0.5 + i * 0.1,
                                                        duration: 0.3
                                                    },
                                                    className: "w-3 h-12 bg-gradient-to-b from-pink-300 to-pink-400 rounded-t-full origin-bottom shadow-lg"
                                                }, void 0, false, {
                                                    fileName: "[project]/workspaces/birthday-surprise-website/src/components/BirthdayCake.tsx",
                                                    lineNumber: 120,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, i, true, {
                                            fileName: "[project]/workspaces/birthday-surprise-website/src/components/BirthdayCake.tsx",
                                            lineNumber: 94,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/workspaces/birthday-surprise-website/src/components/BirthdayCake.tsx",
                                    lineNumber: 92,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                    "data-orchids-id": "src/components/BirthdayCake.tsx:131:12",
                                    "data-orchids-name": "motion.div",
                                    initial: {
                                        y: 100,
                                        opacity: 0
                                    },
                                    animate: {
                                        y: 0,
                                        opacity: 1
                                    },
                                    transition: {
                                        delay: 0.2,
                                        duration: 0.6
                                    },
                                    className: "space-y-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            "data-orchids-id": "src/components/BirthdayCake.tsx:137:14",
                                            "data-orchids-name": "div",
                                            className: "relative",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    "data-orchids-id": "src/components/BirthdayCake.tsx:138:16",
                                                    "data-orchids-name": "div",
                                                    className: "h-20 bg-gradient-to-r from-pink-200 via-pink-300 to-pink-200 rounded-t-3xl border-4 border-white shadow-xl"
                                                }, void 0, false, {
                                                    fileName: "[project]/workspaces/birthday-surprise-website/src/components/BirthdayCake.tsx",
                                                    lineNumber: 138,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    "data-orchids-id": "src/components/BirthdayCake.tsx:139:16",
                                                    "data-orchids-name": "div",
                                                    className: "absolute top-0 left-0 right-0 h-4 bg-gradient-to-r from-[#D4A574] via-yellow-300 to-[#D4A574] rounded-t-3xl border-x-4 border-t-4 border-white"
                                                }, void 0, false, {
                                                    fileName: "[project]/workspaces/birthday-surprise-website/src/components/BirthdayCake.tsx",
                                                    lineNumber: 139,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    "data-orchids-id": "src/components/BirthdayCake.tsx:140:16",
                                                    "data-orchids-name": "div",
                                                    className: "absolute bottom-2 left-0 right-0 flex justify-around px-4",
                                                    children: [
                                                        ...Array(8)
                                                    ].map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            "data-orchids-id": "src/components/BirthdayCake.tsx:142:20",
                                                            "data-orchids-name": "div",
                                                            className: "w-3 h-3 bg-white rounded-full shadow-md"
                                                        }, i, false, {
                                                            fileName: "[project]/workspaces/birthday-surprise-website/src/components/BirthdayCake.tsx",
                                                            lineNumber: 142,
                                                            columnNumber: 21
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/workspaces/birthday-surprise-website/src/components/BirthdayCake.tsx",
                                                    lineNumber: 140,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/workspaces/birthday-surprise-website/src/components/BirthdayCake.tsx",
                                            lineNumber: 137,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            "data-orchids-id": "src/components/BirthdayCake.tsx:147:14",
                                            "data-orchids-name": "div",
                                            className: "relative",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    "data-orchids-id": "src/components/BirthdayCake.tsx:148:16",
                                                    "data-orchids-name": "div",
                                                    className: "h-24 bg-gradient-to-r from-pink-300 via-pink-400 to-pink-300 border-4 border-white shadow-xl"
                                                }, void 0, false, {
                                                    fileName: "[project]/workspaces/birthday-surprise-website/src/components/BirthdayCake.tsx",
                                                    lineNumber: 148,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    "data-orchids-id": "src/components/BirthdayCake.tsx:149:16",
                                                    "data-orchids-name": "div",
                                                    className: "absolute top-0 left-0 right-0 h-4 bg-gradient-to-r from-yellow-300 via-[#D4A574] to-yellow-300 border-x-4 border-white"
                                                }, void 0, false, {
                                                    fileName: "[project]/workspaces/birthday-surprise-website/src/components/BirthdayCake.tsx",
                                                    lineNumber: 149,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    "data-orchids-id": "src/components/BirthdayCake.tsx:150:16",
                                                    "data-orchids-name": "div",
                                                    className: "absolute bottom-2 left-0 right-0 flex justify-around px-8",
                                                    children: [
                                                        ...Array(6)
                                                    ].map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            "data-orchids-id": "src/components/BirthdayCake.tsx:152:20",
                                                            "data-orchids-name": "div",
                                                            className: "w-4 h-4 bg-red-400 rounded-full shadow-md"
                                                        }, i, false, {
                                                            fileName: "[project]/workspaces/birthday-surprise-website/src/components/BirthdayCake.tsx",
                                                            lineNumber: 152,
                                                            columnNumber: 21
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/workspaces/birthday-surprise-website/src/components/BirthdayCake.tsx",
                                                    lineNumber: 150,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/workspaces/birthday-surprise-website/src/components/BirthdayCake.tsx",
                                            lineNumber: 147,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            "data-orchids-id": "src/components/BirthdayCake.tsx:157:14",
                                            "data-orchids-name": "div",
                                            className: "relative",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    "data-orchids-id": "src/components/BirthdayCake.tsx:158:16",
                                                    "data-orchids-name": "div",
                                                    className: "h-28 bg-gradient-to-r from-pink-400 via-pink-500 to-pink-400 rounded-b-3xl border-4 border-white shadow-2xl"
                                                }, void 0, false, {
                                                    fileName: "[project]/workspaces/birthday-surprise-website/src/components/BirthdayCake.tsx",
                                                    lineNumber: 158,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    "data-orchids-id": "src/components/BirthdayCake.tsx:159:16",
                                                    "data-orchids-name": "div",
                                                    className: "absolute top-0 left-0 right-0 h-4 bg-gradient-to-r from-[#D4A574] via-yellow-400 to-[#D4A574] border-x-4 border-white"
                                                }, void 0, false, {
                                                    fileName: "[project]/workspaces/birthday-surprise-website/src/components/BirthdayCake.tsx",
                                                    lineNumber: 159,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    "data-orchids-id": "src/components/BirthdayCake.tsx:160:16",
                                                    "data-orchids-name": "div",
                                                    className: "absolute inset-0 flex items-center justify-center",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$cake$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Cake$3e$__["Cake"], {
                                                        "data-orchids-id": "src/components/BirthdayCake.tsx:161:18",
                                                        "data-orchids-name": "Cake",
                                                        className: "w-16 h-16 text-white/30"
                                                    }, void 0, false, {
                                                        fileName: "[project]/workspaces/birthday-surprise-website/src/components/BirthdayCake.tsx",
                                                        lineNumber: 161,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/workspaces/birthday-surprise-website/src/components/BirthdayCake.tsx",
                                                    lineNumber: 160,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/workspaces/birthday-surprise-website/src/components/BirthdayCake.tsx",
                                            lineNumber: 157,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            "data-orchids-id": "src/components/BirthdayCake.tsx:165:14",
                                            "data-orchids-name": "div",
                                            className: "h-4 bg-gradient-to-r from-gray-300 via-gray-200 to-gray-300 rounded-full border-4 border-white shadow-xl"
                                        }, void 0, false, {
                                            fileName: "[project]/workspaces/birthday-surprise-website/src/components/BirthdayCake.tsx",
                                            lineNumber: 165,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/workspaces/birthday-surprise-website/src/components/BirthdayCake.tsx",
                                    lineNumber: 131,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/workspaces/birthday-surprise-website/src/components/BirthdayCake.tsx",
                            lineNumber: 85,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/workspaces/birthday-surprise-website/src/components/BirthdayCake.tsx",
                        lineNumber: 84,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                        "data-orchids-id": "src/components/BirthdayCake.tsx:171:8",
                        "data-orchids-name": "motion.div",
                        initial: {
                            opacity: 0,
                            y: 20
                        },
                        animate: {
                            opacity: 1,
                            y: 0
                        },
                        transition: {
                            delay: 1
                        },
                        className: "text-center space-y-6",
                        children: candlesLit ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    "data-orchids-id": "src/components/BirthdayCake.tsx:179:14@handleBlowCandles",
                                    "data-orchids-name": "button",
                                    onClick: handleBlowCandles,
                                    className: "font-serif px-10 py-4 bg-gradient-to-r from-[#D4A574] to-[#C4956C] text-white rounded-full text-lg md:text-xl shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 border-2 border-white flex items-center gap-2 mx-auto",
                                    children: "Blow Candles 🎂"
                                }, void 0, false, {
                                    fileName: "[project]/workspaces/birthday-surprise-website/src/components/BirthdayCake.tsx",
                                    lineNumber: 179,
                                    columnNumber: 15
                                }, this),
                                blowing && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    "data-orchids-id": "src/components/BirthdayCake.tsx:186:16",
                                    "data-orchids-name": "p",
                                    className: "text-[#8B7355] text-xl mt-4",
                                    children: "Blowing out the candles..."
                                }, void 0, false, {
                                    fileName: "[project]/workspaces/birthday-surprise-website/src/components/BirthdayCake.tsx",
                                    lineNumber: 186,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                            "data-orchids-id": "src/components/BirthdayCake.tsx:192:12",
                            "data-orchids-name": "AnimatePresence",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                "data-orchids-id": "src/components/BirthdayCake.tsx:193:14",
                                "data-orchids-name": "motion.div",
                                initial: {
                                    opacity: 0,
                                    scale: 0.8
                                },
                                animate: {
                                    opacity: 1,
                                    scale: 1
                                },
                                className: "space-y-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        "data-orchids-id": "src/components/BirthdayCake.tsx:198:16",
                                        "data-orchids-name": "div",
                                        className: "bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border-2 border-[#E8D4BA]",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$party$2d$popper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__PartyPopper$3e$__["PartyPopper"], {
                                                "data-orchids-id": "src/components/BirthdayCake.tsx:199:18",
                                                "data-orchids-name": "PartyPopper",
                                                className: "w-16 h-16 text-[#D4A574] mx-auto mb-4"
                                            }, void 0, false, {
                                                fileName: "[project]/workspaces/birthday-surprise-website/src/components/BirthdayCake.tsx",
                                                lineNumber: 199,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                "data-orchids-id": "src/components/BirthdayCake.tsx:200:18",
                                                "data-orchids-name": "p",
                                                className: "font-script text-3xl md:text-4xl text-[#D4A574] mb-3",
                                                children: "Happy Birthday!"
                                            }, void 0, false, {
                                                fileName: "[project]/workspaces/birthday-surprise-website/src/components/BirthdayCake.tsx",
                                                lineNumber: 200,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                "data-orchids-id": "src/components/BirthdayCake.tsx:203:18",
                                                "data-orchids-name": "p",
                                                className: "text-[#5D4E37] text-lg",
                                                children: "May all your wishes come true!"
                                            }, void 0, false, {
                                                fileName: "[project]/workspaces/birthday-surprise-website/src/components/BirthdayCake.tsx",
                                                lineNumber: 203,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/workspaces/birthday-surprise-website/src/components/BirthdayCake.tsx",
                                        lineNumber: 198,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        "data-orchids-id": "src/components/BirthdayCake.tsx:208:16",
                                        "data-orchids-name": "button",
                                        onClick: onContinue,
                                        className: "font-serif px-10 py-4 bg-gradient-to-r from-[#D4A574] to-[#C4956C] text-white rounded-full text-lg md:text-xl shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 border-2 border-white flex items-center gap-2 mx-auto",
                                        children: [
                                            "One More Surprise!",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$party$2d$popper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__PartyPopper$3e$__["PartyPopper"], {
                                                "data-orchids-id": "src/components/BirthdayCake.tsx:213:18",
                                                "data-orchids-name": "PartyPopper",
                                                className: "w-5 h-5"
                                            }, void 0, false, {
                                                fileName: "[project]/workspaces/birthday-surprise-website/src/components/BirthdayCake.tsx",
                                                lineNumber: 213,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/workspaces/birthday-surprise-website/src/components/BirthdayCake.tsx",
                                        lineNumber: 208,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/workspaces/birthday-surprise-website/src/components/BirthdayCake.tsx",
                                lineNumber: 193,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/workspaces/birthday-surprise-website/src/components/BirthdayCake.tsx",
                            lineNumber: 192,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/workspaces/birthday-surprise-website/src/components/BirthdayCake.tsx",
                        lineNumber: 171,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/workspaces/birthday-surprise-website/src/components/BirthdayCake.tsx",
                lineNumber: 62,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/workspaces/birthday-surprise-website/src/components/BirthdayCake.tsx",
        lineNumber: 28,
        columnNumber: 5
    }, this);
}
}}),
"[project]/workspaces/birthday-surprise-website/src/components/NotePage.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>NotePage)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/workspaces/birthday-surprise-website/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/workspaces/birthday-surprise-website/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__ = __turbopack_context__.i("[project]/workspaces/birthday-surprise-website/node_modules/lucide-react/dist/esm/icons/heart.js [app-ssr] (ecmascript) <export default as Heart>");
var __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__ = __turbopack_context__.i("[project]/workspaces/birthday-surprise-website/node_modules/lucide-react/dist/esm/icons/sparkles.js [app-ssr] (ecmascript) <export default as Sparkles>");
var __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$house$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Home$3e$__ = __turbopack_context__.i("[project]/workspaces/birthday-surprise-website/node_modules/lucide-react/dist/esm/icons/house.js [app-ssr] (ecmascript) <export default as Home>");
var __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/workspaces/birthday-surprise-website/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
;
;
function NotePage({ onBackToHome }) {
    const fullText = `Dear Birthday Star,

On this special day, I want to celebrate not just your birthday, but the wonderful person you are and all the joy you bring to everyone around you.

I feel incredibly blessed and happy knowing that your father is so supportive of you. Having such a strong pillar of support in your life is truly a gift, and it's beautiful to see how that love and encouragement helps you shine. His belief in you is well-placed because you are truly amazing!

As you step into this new year of your life, I want to wish you all the best for your bright future. May every dream you chase become a reality, and may every path you take lead to happiness and success. You have so much potential, and I know you're going to achieve incredible things!

Keep being the wonderful person you are, keep spreading joy, and never stop believing in yourself. The world is lucky to have you, and I'm lucky to celebrate this special day with you!`;
    const [displayedText, setDisplayedText] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [currentIndex, setCurrentIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (currentIndex < fullText.length) {
            const timer = setTimeout(()=>{
                setDisplayedText(fullText.slice(0, currentIndex + 1));
                setCurrentIndex(currentIndex + 1);
            }, 20); // typing speed
            return ()=>clearTimeout(timer);
        }
    }, [
        currentIndex,
        fullText
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-orchids-id": "src/components/NotePage.tsx:36:4",
        "data-orchids-name": "div",
        className: "min-h-screen bg-gradient-to-br from-[#FFF8F0] via-[#FFE4E1] to-[#F5E6D3] py-12 px-4 flex items-center justify-center relative overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                "data-orchids-id": "src/components/NotePage.tsx:38:6",
                "data-orchids-name": "div",
                className: "absolute inset-0 pointer-events-none",
                children: [
                    ...Array(10)
                ].map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                        "data-orchids-id": "src/components/NotePage.tsx:40:10",
                        "data-orchids-name": "motion.div",
                        className: "absolute",
                        initial: {
                            x: Math.random() * (("TURBOPACK compile-time falsy", 0) ? ("TURBOPACK unreachable", undefined) : 1000),
                            y: -50,
                            opacity: 0.3
                        },
                        animate: {
                            y: (("TURBOPACK compile-time falsy", 0) ? ("TURBOPACK unreachable", undefined) : 1000) + 50,
                            x: Math.random() * (("TURBOPACK compile-time falsy", 0) ? ("TURBOPACK unreachable", undefined) : 1000)
                        },
                        transition: {
                            duration: 10 + Math.random() * 10,
                            repeat: Infinity,
                            delay: Math.random() * 5
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__["Heart"], {
                            "data-orchids-id": "src/components/NotePage.tsx:58:12",
                            "data-orchids-name": "Heart",
                            className: "w-6 h-6 text-[#FFB6C1] fill-[#FFB6C1]"
                        }, void 0, false, {
                            fileName: "[project]/workspaces/birthday-surprise-website/src/components/NotePage.tsx",
                            lineNumber: 58,
                            columnNumber: 13
                        }, this)
                    }, i, false, {
                        fileName: "[project]/workspaces/birthday-surprise-website/src/components/NotePage.tsx",
                        lineNumber: 40,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/workspaces/birthday-surprise-website/src/components/NotePage.tsx",
                lineNumber: 38,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                "data-orchids-id": "src/components/NotePage.tsx:63:6",
                "data-orchids-name": "div",
                className: "max-w-4xl mx-auto relative z-10",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                        "data-orchids-id": "src/components/NotePage.tsx:64:8",
                        "data-orchids-name": "motion.div",
                        initial: {
                            opacity: 0,
                            scale: 0.9,
                            rotateX: 10
                        },
                        animate: {
                            opacity: 1,
                            scale: 1,
                            rotateX: 0
                        },
                        transition: {
                            duration: 1,
                            ease: "easeOut"
                        },
                        className: "relative",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                "data-orchids-id": "src/components/NotePage.tsx:71:10",
                                "data-orchids-name": "div",
                                className: "bg-gradient-to-br from-[#FFFBF5] to-[#FFF8F0] rounded-lg shadow-2xl p-8 md:p-12 relative border-4 border-[#E8D4BA]",
                                style: {
                                    backgroundImage: `repeating-linear-gradient(
                transparent,
                transparent 31px,
                #E8D4BA 31px,
                #E8D4BA 32px
              )`
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        "data-orchids-id": "src/components/NotePage.tsx:82:12",
                                        "data-orchids-name": "div",
                                        className: "absolute top-4 left-4 w-12 h-12 border-t-4 border-l-4 border-[#D4A574] rounded-tl-lg"
                                    }, void 0, false, {
                                        fileName: "[project]/workspaces/birthday-surprise-website/src/components/NotePage.tsx",
                                        lineNumber: 82,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        "data-orchids-id": "src/components/NotePage.tsx:83:12",
                                        "data-orchids-name": "div",
                                        className: "absolute top-4 right-4 w-12 h-12 border-t-4 border-r-4 border-[#D4A574] rounded-tr-lg"
                                    }, void 0, false, {
                                        fileName: "[project]/workspaces/birthday-surprise-website/src/components/NotePage.tsx",
                                        lineNumber: 83,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        "data-orchids-id": "src/components/NotePage.tsx:84:12",
                                        "data-orchids-name": "div",
                                        className: "absolute bottom-4 left-4 w-12 h-12 border-b-4 border-l-4 border-[#D4A574] rounded-bl-lg"
                                    }, void 0, false, {
                                        fileName: "[project]/workspaces/birthday-surprise-website/src/components/NotePage.tsx",
                                        lineNumber: 84,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        "data-orchids-id": "src/components/NotePage.tsx:85:12",
                                        "data-orchids-name": "div",
                                        className: "absolute bottom-4 right-4 w-12 h-12 border-b-4 border-r-4 border-[#D4A574] rounded-br-lg"
                                    }, void 0, false, {
                                        fileName: "[project]/workspaces/birthday-surprise-website/src/components/NotePage.tsx",
                                        lineNumber: 85,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        "data-orchids-id": "src/components/NotePage.tsx:88:12",
                                        "data-orchids-name": "div",
                                        className: "relative bg-[#FFFBF5]/80 rounded-lg p-8",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                "data-orchids-id": "src/components/NotePage.tsx:89:14",
                                                "data-orchids-name": "div",
                                                className: "flex items-center justify-center gap-3 mb-8",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"], {
                                                        className: "w-8 h-8 text-[#FFB6C1]"
                                                    }, void 0, false, {
                                                        fileName: "[project]/workspaces/birthday-surprise-website/src/components/NotePage.tsx",
                                                        lineNumber: 90,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                        "data-orchids-id": "src/components/NotePage.tsx:91:16",
                                                        "data-orchids-name": "h2",
                                                        className: "font-script text-5xl md:text-6xl font-bold text-[#D4A574] text-center",
                                                        children: "A Special Note For You"
                                                    }, void 0, false, {
                                                        fileName: "[project]/workspaces/birthday-surprise-website/src/components/NotePage.tsx",
                                                        lineNumber: 91,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"], {
                                                        className: "w-8 h-8 text-[#FFB6C1]"
                                                    }, void 0, false, {
                                                        fileName: "[project]/workspaces/birthday-surprise-website/src/components/NotePage.tsx",
                                                        lineNumber: 94,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/workspaces/birthday-surprise-website/src/components/NotePage.tsx",
                                                lineNumber: 89,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                "data-orchids-id": "src/components/NotePage.tsx:97:14",
                                                "data-orchids-name": "div",
                                                className: "text-[#5D4E37] font-serif text-lg md:text-xl leading-relaxed whitespace-pre-wrap",
                                                children: [
                                                    displayedText,
                                                    currentIndex < fullText.length && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].span, {
                                                        "data-orchids-id": "src/components/NotePage.tsx:100:18",
                                                        "data-orchids-name": "motion.span",
                                                        animate: {
                                                            opacity: [
                                                                1,
                                                                0
                                                            ]
                                                        },
                                                        transition: {
                                                            duration: 0.5,
                                                            repeat: Infinity
                                                        },
                                                        className: "inline-block w-0.5 h-6 bg-[#5D4E37] ml-1"
                                                    }, void 0, false, {
                                                        fileName: "[project]/workspaces/birthday-surprise-website/src/components/NotePage.tsx",
                                                        lineNumber: 100,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/workspaces/birthday-surprise-website/src/components/NotePage.tsx",
                                                lineNumber: 97,
                                                columnNumber: 15
                                            }, this),
                                            currentIndex >= fullText.length && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                                "data-orchids-id": "src/components/NotePage.tsx:109:16",
                                                "data-orchids-name": "motion.div",
                                                initial: {
                                                    opacity: 0
                                                },
                                                animate: {
                                                    opacity: 1
                                                },
                                                transition: {
                                                    delay: 0.5
                                                },
                                                className: "pt-6 flex flex-col items-end mt-8",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        "data-orchids-id": "src/components/NotePage.tsx:115:18",
                                                        "data-orchids-name": "p",
                                                        className: "font-script text-2xl md:text-3xl text-[#D4A574]",
                                                        children: "With happiness and best wishes,"
                                                    }, void 0, false, {
                                                        fileName: "[project]/workspaces/birthday-surprise-website/src/components/NotePage.tsx",
                                                        lineNumber: 115,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        "data-orchids-id": "src/components/NotePage.tsx:118:18",
                                                        "data-orchids-name": "div",
                                                        className: "flex items-center gap-2 mt-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__["Heart"], {
                                                                "data-orchids-id": "src/components/NotePage.tsx:119:20",
                                                                "data-orchids-name": "Heart",
                                                                className: "w-6 h-6 text-[#FFB6C1] fill-[#FFB6C1]"
                                                            }, void 0, false, {
                                                                fileName: "[project]/workspaces/birthday-surprise-website/src/components/NotePage.tsx",
                                                                lineNumber: 119,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                "data-orchids-id": "src/components/NotePage.tsx:120:20",
                                                                "data-orchids-name": "p",
                                                                className: "font-script text-2xl md:text-3xl text-[#D4A574]",
                                                                children: "by Sanaullah Khan"
                                                            }, void 0, false, {
                                                                fileName: "[project]/workspaces/birthday-surprise-website/src/components/NotePage.tsx",
                                                                lineNumber: 120,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__["Heart"], {
                                                                "data-orchids-id": "src/components/NotePage.tsx:123:20",
                                                                "data-orchids-name": "Heart",
                                                                className: "w-6 h-6 text-[#FFB6C1] fill-[#FFB6C1]"
                                                            }, void 0, false, {
                                                                fileName: "[project]/workspaces/birthday-surprise-website/src/components/NotePage.tsx",
                                                                lineNumber: 123,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/workspaces/birthday-surprise-website/src/components/NotePage.tsx",
                                                        lineNumber: 118,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/workspaces/birthday-surprise-website/src/components/NotePage.tsx",
                                                lineNumber: 109,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/workspaces/birthday-surprise-website/src/components/NotePage.tsx",
                                        lineNumber: 88,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/workspaces/birthday-surprise-website/src/components/NotePage.tsx",
                                lineNumber: 71,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                "data-orchids-id": "src/components/NotePage.tsx:131:10",
                                "data-orchids-name": "motion.div",
                                className: "absolute -top-6 right-12 w-16 h-24 bg-[#D4A574] rounded-full opacity-50",
                                animate: {
                                    rotate: [
                                        0,
                                        5,
                                        0
                                    ]
                                },
                                transition: {
                                    duration: 2,
                                    repeat: Infinity
                                },
                                style: {
                                    clipPath: 'ellipse(40% 45% at 50% 50%)'
                                }
                            }, void 0, false, {
                                fileName: "[project]/workspaces/birthday-surprise-website/src/components/NotePage.tsx",
                                lineNumber: 131,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/workspaces/birthday-surprise-website/src/components/NotePage.tsx",
                        lineNumber: 64,
                        columnNumber: 9
                    }, this),
                    currentIndex >= fullText.length && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                        "data-orchids-id": "src/components/NotePage.tsx:140:10",
                        "data-orchids-name": "motion.div",
                        initial: {
                            opacity: 0,
                            y: 30
                        },
                        animate: {
                            opacity: 1,
                            y: 0
                        },
                        transition: {
                            delay: 0.8,
                            duration: 0.8
                        },
                        className: "text-center mt-12",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].button, {
                            "data-orchids-id": "src/components/NotePage.tsx:146:12",
                            "data-orchids-name": "motion.button",
                            onClick: onBackToHome,
                            className: "group relative px-10 py-5 bg-gradient-to-r from-[#D4A574] to-[#C49563] text-[#FFF8F0] rounded-full text-xl font-semibold shadow-2xl hover:shadow-[#D4A574]/50 transition-all duration-300 flex items-center gap-2 mx-auto",
                            whileHover: {
                                scale: 1.1
                            },
                            whileTap: {
                                scale: 0.95
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$house$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Home$3e$__["Home"], {
                                    "data-orchids-id": "src/components/NotePage.tsx:152:14",
                                    "data-orchids-name": "Home",
                                    className: "w-5 h-5"
                                }, void 0, false, {
                                    fileName: "[project]/workspaces/birthday-surprise-website/src/components/NotePage.tsx",
                                    lineNumber: 152,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    "data-orchids-id": "src/components/NotePage.tsx:153:14",
                                    "data-orchids-name": "span",
                                    className: "relative z-10",
                                    children: "Continue to Final Message"
                                }, void 0, false, {
                                    fileName: "[project]/workspaces/birthday-surprise-website/src/components/NotePage.tsx",
                                    lineNumber: 153,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/workspaces/birthday-surprise-website/src/components/NotePage.tsx",
                            lineNumber: 146,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/workspaces/birthday-surprise-website/src/components/NotePage.tsx",
                        lineNumber: 140,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/workspaces/birthday-surprise-website/src/components/NotePage.tsx",
                lineNumber: 63,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/workspaces/birthday-surprise-website/src/components/NotePage.tsx",
        lineNumber: 36,
        columnNumber: 5
    }, this);
}
}}),
"[project]/workspaces/birthday-surprise-website/src/components/FinalMessage.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>FinalMessage)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/workspaces/birthday-surprise-website/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/workspaces/birthday-surprise-website/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__ = __turbopack_context__.i("[project]/workspaces/birthday-surprise-website/node_modules/lucide-react/dist/esm/icons/heart.js [app-ssr] (ecmascript) <export default as Heart>");
var __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__ = __turbopack_context__.i("[project]/workspaces/birthday-surprise-website/node_modules/lucide-react/dist/esm/icons/sparkles.js [app-ssr] (ecmascript) <export default as Sparkles>");
var __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__ = __turbopack_context__.i("[project]/workspaces/birthday-surprise-website/node_modules/lucide-react/dist/esm/icons/star.js [app-ssr] (ecmascript) <export default as Star>");
var __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$smile$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Smile$3e$__ = __turbopack_context__.i("[project]/workspaces/birthday-surprise-website/node_modules/lucide-react/dist/esm/icons/smile.js [app-ssr] (ecmascript) <export default as Smile>");
var __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__ = __turbopack_context__.i("[project]/workspaces/birthday-surprise-website/node_modules/lucide-react/dist/esm/icons/trending-up.js [app-ssr] (ecmascript) <export default as TrendingUp>");
var __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plane$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Plane$3e$__ = __turbopack_context__.i("[project]/workspaces/birthday-surprise-website/node_modules/lucide-react/dist/esm/icons/plane.js [app-ssr] (ecmascript) <export default as Plane>");
var __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__ = __turbopack_context__.i("[project]/workspaces/birthday-surprise-website/node_modules/lucide-react/dist/esm/icons/zap.js [app-ssr] (ecmascript) <export default as Zap>");
var __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$award$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Award$3e$__ = __turbopack_context__.i("[project]/workspaces/birthday-surprise-website/node_modules/lucide-react/dist/esm/icons/award.js [app-ssr] (ecmascript) <export default as Award>");
"use client";
;
;
;
function FinalMessage({ onBackToHome }) {
    const wishes = [
        {
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$award$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Award$3e$__["Award"],
            text: "Health"
        },
        {
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$smile$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Smile$3e$__["Smile"],
            text: "Happiness"
        },
        {
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__["TrendingUp"],
            text: "Success"
        },
        {
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plane$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Plane$3e$__["Plane"],
            text: "Adventures"
        },
        {
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"],
            text: "Dreams"
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-orchids-id": "src/components/FinalMessage.tsx:20:4",
        "data-orchids-name": "div",
        className: "min-h-screen bg-gradient-to-br from-[#FFF8F0] via-[#FFE4E1] to-[#F5E6D3] relative overflow-hidden py-12 px-4",
        children: [
            [
                ...Array(30)
            ].map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                    "data-orchids-id": "src/components/FinalMessage.tsx:23:8",
                    "data-orchids-name": "motion.div",
                    className: "absolute",
                    animate: {
                        y: [
                            0,
                            -30,
                            0
                        ],
                        rotate: [
                            0,
                            360
                        ],
                        opacity: [
                            0.2,
                            0.6,
                            0.2
                        ]
                    },
                    transition: {
                        duration: 5 + Math.random() * 3,
                        repeat: Infinity,
                        delay: Math.random() * 3
                    },
                    style: {
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`
                    },
                    children: [
                        i % 5 === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"], {
                            className: "w-5 h-5 text-yellow-400/40"
                        }, void 0, false, {
                            fileName: "[project]/workspaces/birthday-surprise-website/src/components/FinalMessage.tsx",
                            lineNumber: 41,
                            columnNumber: 27
                        }, this),
                        i % 5 === 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__["Heart"], {
                            "data-orchids-id": "src/components/FinalMessage.tsx:42:26",
                            "data-orchids-name": "Heart",
                            className: "w-5 h-5 text-pink-400/40 fill-pink-400/40"
                        }, void 0, false, {
                            fileName: "[project]/workspaces/birthday-surprise-website/src/components/FinalMessage.tsx",
                            lineNumber: 42,
                            columnNumber: 27
                        }, this),
                        i % 5 === 2 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__["Star"], {
                            "data-orchids-id": "src/components/FinalMessage.tsx:43:26",
                            "data-orchids-name": "Star",
                            className: "w-5 h-5 text-yellow-500/40"
                        }, void 0, false, {
                            fileName: "[project]/workspaces/birthday-surprise-website/src/components/FinalMessage.tsx",
                            lineNumber: 43,
                            columnNumber: 27
                        }, this),
                        i % 5 === 3 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$smile$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Smile$3e$__["Smile"], {
                            "data-orchids-id": "src/components/FinalMessage.tsx:44:26",
                            "data-orchids-name": "Smile",
                            className: "w-5 h-5 text-orange-400/40"
                        }, void 0, false, {
                            fileName: "[project]/workspaces/birthday-surprise-website/src/components/FinalMessage.tsx",
                            lineNumber: 44,
                            columnNumber: 27
                        }, this),
                        i % 5 === 4 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__["Zap"], {
                            "data-orchids-id": "src/components/FinalMessage.tsx:45:26",
                            "data-orchids-name": "Zap",
                            className: "w-5 h-5 text-purple-400/40"
                        }, void 0, false, {
                            fileName: "[project]/workspaces/birthday-surprise-website/src/components/FinalMessage.tsx",
                            lineNumber: 45,
                            columnNumber: 27
                        }, this)
                    ]
                }, i, true, {
                    fileName: "[project]/workspaces/birthday-surprise-website/src/components/FinalMessage.tsx",
                    lineNumber: 23,
                    columnNumber: 9
                }, this)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                "data-orchids-id": "src/components/FinalMessage.tsx:49:6",
                "data-orchids-name": "div",
                className: "max-w-4xl mx-auto relative z-10",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                    "data-orchids-id": "src/components/FinalMessage.tsx:50:8",
                    "data-orchids-name": "motion.div",
                    initial: {
                        opacity: 0,
                        scale: 0.8
                    },
                    animate: {
                        opacity: 1,
                        scale: 1
                    },
                    transition: {
                        duration: 1
                    },
                    className: "text-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                            "data-orchids-id": "src/components/FinalMessage.tsx:57:10",
                            "data-orchids-name": "motion.div",
                            animate: {
                                scale: [
                                    1,
                                    1.1,
                                    1
                                ]
                            },
                            transition: {
                                duration: 2,
                                repeat: Infinity,
                                ease: "easeInOut"
                            },
                            className: "mb-8",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__["Heart"], {
                                "data-orchids-id": "src/components/FinalMessage.tsx:66:12",
                                "data-orchids-name": "Heart",
                                className: "w-32 h-32 text-pink-400 fill-pink-400 mx-auto drop-shadow-2xl"
                            }, void 0, false, {
                                fileName: "[project]/workspaces/birthday-surprise-website/src/components/FinalMessage.tsx",
                                lineNumber: 66,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/workspaces/birthday-surprise-website/src/components/FinalMessage.tsx",
                            lineNumber: 57,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                            "data-orchids-id": "src/components/FinalMessage.tsx:70:10",
                            "data-orchids-name": "motion.div",
                            initial: {
                                opacity: 0,
                                y: 20
                            },
                            animate: {
                                opacity: 1,
                                y: 0
                            },
                            transition: {
                                delay: 0.3,
                                duration: 0.8
                            },
                            className: "mb-6",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                "data-orchids-id": "src/components/FinalMessage.tsx:76:12",
                                "data-orchids-name": "div",
                                className: "flex items-center justify-center gap-3 mb-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__["Heart"], {
                                        "data-orchids-id": "src/components/FinalMessage.tsx:77:14",
                                        "data-orchids-name": "Heart",
                                        className: "w-10 h-10 text-pink-400 fill-pink-400"
                                    }, void 0, false, {
                                        fileName: "[project]/workspaces/birthday-surprise-website/src/components/FinalMessage.tsx",
                                        lineNumber: 77,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                        "data-orchids-id": "src/components/FinalMessage.tsx:78:14",
                                        "data-orchids-name": "h1",
                                        className: "font-script text-5xl md:text-7xl text-[#D4A574]",
                                        children: "You Are Loved Beyond Words!"
                                    }, void 0, false, {
                                        fileName: "[project]/workspaces/birthday-surprise-website/src/components/FinalMessage.tsx",
                                        lineNumber: 78,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__["Heart"], {
                                        "data-orchids-id": "src/components/FinalMessage.tsx:81:14",
                                        "data-orchids-name": "Heart",
                                        className: "w-10 h-10 text-pink-400 fill-pink-400"
                                    }, void 0, false, {
                                        fileName: "[project]/workspaces/birthday-surprise-website/src/components/FinalMessage.tsx",
                                        lineNumber: 81,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/workspaces/birthday-surprise-website/src/components/FinalMessage.tsx",
                                lineNumber: 76,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/workspaces/birthday-surprise-website/src/components/FinalMessage.tsx",
                            lineNumber: 70,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                            "data-orchids-id": "src/components/FinalMessage.tsx:86:10",
                            "data-orchids-name": "motion.div",
                            initial: {
                                opacity: 0,
                                y: 30
                            },
                            animate: {
                                opacity: 1,
                                y: 0
                            },
                            transition: {
                                delay: 0.6,
                                duration: 0.8
                            },
                            className: "bg-white/90 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-2xl border-4 border-[#E8D4BA] mb-8",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                "data-orchids-id": "src/components/FinalMessage.tsx:92:12",
                                "data-orchids-name": "div",
                                className: "space-y-6 text-left",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        "data-orchids-id": "src/components/FinalMessage.tsx:93:14",
                                        "data-orchids-name": "div",
                                        className: "flex items-start gap-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"], {
                                                className: "w-6 h-6 text-[#D4A574] flex-shrink-0 mt-1"
                                            }, void 0, false, {
                                                fileName: "[project]/workspaces/birthday-surprise-website/src/components/FinalMessage.tsx",
                                                lineNumber: 94,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                "data-orchids-id": "src/components/FinalMessage.tsx:95:16",
                                                "data-orchids-name": "p",
                                                className: "font-serif text-lg md:text-xl text-[#5D4E37] leading-relaxed",
                                                children: "Today is YOUR day, and you deserve all the happiness in the world!"
                                            }, void 0, false, {
                                                fileName: "[project]/workspaces/birthday-surprise-website/src/components/FinalMessage.tsx",
                                                lineNumber: 95,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/workspaces/birthday-surprise-website/src/components/FinalMessage.tsx",
                                        lineNumber: 93,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        "data-orchids-id": "src/components/FinalMessage.tsx:100:14",
                                        "data-orchids-name": "div",
                                        className: "flex items-start gap-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__["Star"], {
                                                "data-orchids-id": "src/components/FinalMessage.tsx:101:16",
                                                "data-orchids-name": "Star",
                                                className: "w-6 h-6 text-yellow-500 flex-shrink-0 mt-1"
                                            }, void 0, false, {
                                                fileName: "[project]/workspaces/birthday-surprise-website/src/components/FinalMessage.tsx",
                                                lineNumber: 101,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                "data-orchids-id": "src/components/FinalMessage.tsx:102:16",
                                                "data-orchids-name": "p",
                                                className: "font-serif text-lg md:text-xl text-[#5D4E37] leading-relaxed",
                                                children: "Thank you for being such an incredible person. Your presence makes everyone's life brighter!"
                                            }, void 0, false, {
                                                fileName: "[project]/workspaces/birthday-surprise-website/src/components/FinalMessage.tsx",
                                                lineNumber: 102,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/workspaces/birthday-surprise-website/src/components/FinalMessage.tsx",
                                        lineNumber: 100,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        "data-orchids-id": "src/components/FinalMessage.tsx:107:14",
                                        "data-orchids-name": "div",
                                        className: "flex items-start gap-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__["Heart"], {
                                                "data-orchids-id": "src/components/FinalMessage.tsx:108:16",
                                                "data-orchids-name": "Heart",
                                                className: "w-6 h-6 text-pink-400 fill-pink-400 flex-shrink-0 mt-1"
                                            }, void 0, false, {
                                                fileName: "[project]/workspaces/birthday-surprise-website/src/components/FinalMessage.tsx",
                                                lineNumber: 108,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                "data-orchids-id": "src/components/FinalMessage.tsx:109:16",
                                                "data-orchids-name": "p",
                                                className: "font-serif text-lg md:text-xl text-[#5D4E37] leading-relaxed",
                                                children: "Keep shining, keep smiling, and never forget how special you are!"
                                            }, void 0, false, {
                                                fileName: "[project]/workspaces/birthday-surprise-website/src/components/FinalMessage.tsx",
                                                lineNumber: 109,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/workspaces/birthday-surprise-website/src/components/FinalMessage.tsx",
                                        lineNumber: 107,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        "data-orchids-id": "src/components/FinalMessage.tsx:114:14",
                                        "data-orchids-name": "div",
                                        className: "border-t-2 border-[#E8D4BA] pt-6 mt-6",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            "data-orchids-id": "src/components/FinalMessage.tsx:115:16",
                                            "data-orchids-name": "div",
                                            className: "flex items-center justify-center gap-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"], {
                                                    className: "w-8 h-8 text-[#D4A574]"
                                                }, void 0, false, {
                                                    fileName: "[project]/workspaces/birthday-surprise-website/src/components/FinalMessage.tsx",
                                                    lineNumber: 116,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    "data-orchids-id": "src/components/FinalMessage.tsx:117:18",
                                                    "data-orchids-name": "p",
                                                    className: "font-script text-3xl md:text-4xl text-[#D4A574] text-center",
                                                    children: "Here's to another amazing year ahead!"
                                                }, void 0, false, {
                                                    fileName: "[project]/workspaces/birthday-surprise-website/src/components/FinalMessage.tsx",
                                                    lineNumber: 117,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"], {
                                                    className: "w-8 h-8 text-[#D4A574]"
                                                }, void 0, false, {
                                                    fileName: "[project]/workspaces/birthday-surprise-website/src/components/FinalMessage.tsx",
                                                    lineNumber: 120,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/workspaces/birthday-surprise-website/src/components/FinalMessage.tsx",
                                            lineNumber: 115,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/workspaces/birthday-surprise-website/src/components/FinalMessage.tsx",
                                        lineNumber: 114,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/workspaces/birthday-surprise-website/src/components/FinalMessage.tsx",
                                lineNumber: 92,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/workspaces/birthday-surprise-website/src/components/FinalMessage.tsx",
                            lineNumber: 86,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                            "data-orchids-id": "src/components/FinalMessage.tsx:127:10",
                            "data-orchids-name": "motion.div",
                            initial: {
                                opacity: 0,
                                y: 20
                            },
                            animate: {
                                opacity: 1,
                                y: 0
                            },
                            transition: {
                                delay: 0.9,
                                duration: 0.8
                            },
                            className: "bg-gradient-to-r from-pink-100 to-purple-100 rounded-3xl p-6 md:p-8 shadow-xl border-2 border-white mb-8",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    "data-orchids-id": "src/components/FinalMessage.tsx:133:12",
                                    "data-orchids-name": "p",
                                    className: "font-serif text-xl md:text-2xl text-[#5D4E37] italic mb-3",
                                    children: '"Age is merely the number of years the world has been enjoying you!"'
                                }, void 0, false, {
                                    fileName: "[project]/workspaces/birthday-surprise-website/src/components/FinalMessage.tsx",
                                    lineNumber: 133,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    "data-orchids-id": "src/components/FinalMessage.tsx:136:12",
                                    "data-orchids-name": "div",
                                    className: "flex items-center justify-center gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__["Star"], {
                                            "data-orchids-id": "src/components/FinalMessage.tsx:137:14",
                                            "data-orchids-name": "Star",
                                            className: "w-5 h-5 text-[#8B7355]"
                                        }, void 0, false, {
                                            fileName: "[project]/workspaces/birthday-surprise-website/src/components/FinalMessage.tsx",
                                            lineNumber: 137,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            "data-orchids-id": "src/components/FinalMessage.tsx:138:14",
                                            "data-orchids-name": "p",
                                            className: "text-[#8B7355] text-sm",
                                            children: "And we've been so blessed to have you!"
                                        }, void 0, false, {
                                            fileName: "[project]/workspaces/birthday-surprise-website/src/components/FinalMessage.tsx",
                                            lineNumber: 138,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__["Star"], {
                                            "data-orchids-id": "src/components/FinalMessage.tsx:141:14",
                                            "data-orchids-name": "Star",
                                            className: "w-5 h-5 text-[#8B7355]"
                                        }, void 0, false, {
                                            fileName: "[project]/workspaces/birthday-surprise-website/src/components/FinalMessage.tsx",
                                            lineNumber: 141,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/workspaces/birthday-surprise-website/src/components/FinalMessage.tsx",
                                    lineNumber: 136,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/workspaces/birthday-surprise-website/src/components/FinalMessage.tsx",
                            lineNumber: 127,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                            "data-orchids-id": "src/components/FinalMessage.tsx:146:10",
                            "data-orchids-name": "motion.div",
                            initial: {
                                opacity: 0,
                                y: 20
                            },
                            animate: {
                                opacity: 1,
                                y: 0
                            },
                            transition: {
                                delay: 1.2,
                                duration: 0.8
                            },
                            className: "space-y-4 mb-10",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                "data-orchids-id": "src/components/FinalMessage.tsx:152:12",
                                "data-orchids-name": "div",
                                className: "flex flex-wrap justify-center gap-3",
                                children: wishes.map((wish, i)=>{
                                    const Icon = wish.icon;
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                        "data-map-index": i,
                                        "data-orchids-id": "src/components/FinalMessage.tsx:156:18@wishes",
                                        "data-orchids-name": "motion.div",
                                        initial: {
                                            opacity: 0,
                                            scale: 0
                                        },
                                        animate: {
                                            opacity: 1,
                                            scale: 1
                                        },
                                        transition: {
                                            delay: 1.5 + i * 0.1,
                                            duration: 0.4
                                        },
                                        className: "bg-white px-5 py-2 rounded-full shadow-lg border-2 border-[#E8D4BA] text-[#5D4E37] font-medium flex items-center gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                                "data-map-index": i,
                                                "data-orchids-id": "src/components/FinalMessage.tsx:163:20@wishes",
                                                "data-orchids-name": "Icon",
                                                className: "w-5 h-5 text-[#D4A574]"
                                            }, void 0, false, {
                                                fileName: "[project]/workspaces/birthday-surprise-website/src/components/FinalMessage.tsx",
                                                lineNumber: 163,
                                                columnNumber: 21
                                            }, this),
                                            wish.text
                                        ]
                                    }, i, true, {
                                        fileName: "[project]/workspaces/birthday-surprise-website/src/components/FinalMessage.tsx",
                                        lineNumber: 156,
                                        columnNumber: 19
                                    }, this);
                                })
                            }, void 0, false, {
                                fileName: "[project]/workspaces/birthday-surprise-website/src/components/FinalMessage.tsx",
                                lineNumber: 152,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/workspaces/birthday-surprise-website/src/components/FinalMessage.tsx",
                            lineNumber: 146,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                            "data-orchids-id": "src/components/FinalMessage.tsx:172:10",
                            "data-orchids-name": "motion.div",
                            initial: {
                                opacity: 0
                            },
                            animate: {
                                opacity: 1
                            },
                            transition: {
                                delay: 2,
                                duration: 0.8
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                "data-orchids-id": "src/components/FinalMessage.tsx:177:12",
                                "data-orchids-name": "button",
                                onClick: onBackToHome,
                                className: "font-serif px-12 py-4 bg-gradient-to-r from-[#D4A574] via-pink-400 to-[#D4A574] text-white rounded-full text-lg md:text-xl shadow-2xl hover:shadow-3xl hover:scale-110 transition-all duration-300 border-4 border-white flex items-center gap-3 mx-auto",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"], {
                                        className: "w-6 h-6"
                                    }, void 0, false, {
                                        fileName: "[project]/workspaces/birthday-surprise-website/src/components/FinalMessage.tsx",
                                        lineNumber: 181,
                                        columnNumber: 15
                                    }, this),
                                    "Relive The Magic!",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"], {
                                        className: "w-6 h-6"
                                    }, void 0, false, {
                                        fileName: "[project]/workspaces/birthday-surprise-website/src/components/FinalMessage.tsx",
                                        lineNumber: 183,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/workspaces/birthday-surprise-website/src/components/FinalMessage.tsx",
                                lineNumber: 177,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/workspaces/birthday-surprise-website/src/components/FinalMessage.tsx",
                            lineNumber: 172,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                            "data-orchids-id": "src/components/FinalMessage.tsx:188:10",
                            "data-orchids-name": "motion.div",
                            initial: {
                                opacity: 0
                            },
                            animate: {
                                opacity: 1
                            },
                            transition: {
                                delay: 2.3,
                                duration: 0.8
                            },
                            className: "mt-8 flex items-center justify-center gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__["Heart"], {
                                    "data-orchids-id": "src/components/FinalMessage.tsx:194:12",
                                    "data-orchids-name": "Heart",
                                    className: "w-8 h-8 text-pink-400 fill-pink-400"
                                }, void 0, false, {
                                    fileName: "[project]/workspaces/birthday-surprise-website/src/components/FinalMessage.tsx",
                                    lineNumber: 194,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    "data-orchids-id": "src/components/FinalMessage.tsx:195:12",
                                    "data-orchids-name": "p",
                                    className: "font-script text-2xl md:text-3xl text-[#8B7355]",
                                    children: "With happiness and respect,"
                                }, void 0, false, {
                                    fileName: "[project]/workspaces/birthday-surprise-website/src/components/FinalMessage.tsx",
                                    lineNumber: 195,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__["Heart"], {
                                    "data-orchids-id": "src/components/FinalMessage.tsx:198:12",
                                    "data-orchids-name": "Heart",
                                    className: "w-8 h-8 text-pink-400 fill-pink-400"
                                }, void 0, false, {
                                    fileName: "[project]/workspaces/birthday-surprise-website/src/components/FinalMessage.tsx",
                                    lineNumber: 198,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/workspaces/birthday-surprise-website/src/components/FinalMessage.tsx",
                            lineNumber: 188,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/workspaces/birthday-surprise-website/src/components/FinalMessage.tsx",
                    lineNumber: 50,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/workspaces/birthday-surprise-website/src/components/FinalMessage.tsx",
                lineNumber: 49,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/workspaces/birthday-surprise-website/src/components/FinalMessage.tsx",
        lineNumber: 20,
        columnNumber: 5
    }, this);
}
}}),
"[project]/workspaces/birthday-surprise-website/src/app/page.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>Home)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/workspaces/birthday-surprise-website/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/workspaces/birthday-surprise-website/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$src$2f$components$2f$LandingPage$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/workspaces/birthday-surprise-website/src/components/LandingPage.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$src$2f$components$2f$PhotoGallery$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/workspaces/birthday-surprise-website/src/components/PhotoGallery.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$src$2f$components$2f$MemoryTimeline$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/workspaces/birthday-surprise-website/src/components/MemoryTimeline.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$src$2f$components$2f$ReasonsPage$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/workspaces/birthday-surprise-website/src/components/ReasonsPage.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$src$2f$components$2f$VirtualGifts$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/workspaces/birthday-surprise-website/src/components/VirtualGifts.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$src$2f$components$2f$BirthdayCake$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/workspaces/birthday-surprise-website/src/components/BirthdayCake.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$src$2f$components$2f$NotePage$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/workspaces/birthday-surprise-website/src/components/NotePage.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$src$2f$components$2f$FinalMessage$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/workspaces/birthday-surprise-website/src/components/FinalMessage.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
;
;
;
function Home() {
    const [currentPage, setCurrentPage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('landing');
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            currentPage === 'landing' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$src$2f$components$2f$LandingPage$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                "data-orchids-id": "src/app/page.tsx:21:8",
                "data-orchids-name": "LandingPage",
                onOpenSurprise: ()=>setCurrentPage('gallery')
            }, void 0, false, {
                fileName: "[project]/workspaces/birthday-surprise-website/src/app/page.tsx",
                lineNumber: 21,
                columnNumber: 9
            }, this),
            currentPage === 'gallery' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$src$2f$components$2f$PhotoGallery$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                "data-orchids-id": "src/app/page.tsx:24:8",
                "data-orchids-name": "PhotoGallery",
                onContinue: ()=>setCurrentPage('memoryTimeline')
            }, void 0, false, {
                fileName: "[project]/workspaces/birthday-surprise-website/src/app/page.tsx",
                lineNumber: 24,
                columnNumber: 9
            }, this),
            currentPage === 'memoryTimeline' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$src$2f$components$2f$MemoryTimeline$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                "data-orchids-id": "src/app/page.tsx:27:8",
                "data-orchids-name": "MemoryTimeline",
                onContinue: ()=>setCurrentPage('reasons')
            }, void 0, false, {
                fileName: "[project]/workspaces/birthday-surprise-website/src/app/page.tsx",
                lineNumber: 27,
                columnNumber: 9
            }, this),
            currentPage === 'reasons' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$src$2f$components$2f$ReasonsPage$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                "data-orchids-id": "src/app/page.tsx:30:8",
                "data-orchids-name": "ReasonsPage",
                onContinue: ()=>setCurrentPage('gifts')
            }, void 0, false, {
                fileName: "[project]/workspaces/birthday-surprise-website/src/app/page.tsx",
                lineNumber: 30,
                columnNumber: 9
            }, this),
            currentPage === 'gifts' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$src$2f$components$2f$VirtualGifts$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                "data-orchids-id": "src/app/page.tsx:33:8",
                "data-orchids-name": "VirtualGifts",
                onContinue: ()=>setCurrentPage('cake')
            }, void 0, false, {
                fileName: "[project]/workspaces/birthday-surprise-website/src/app/page.tsx",
                lineNumber: 33,
                columnNumber: 9
            }, this),
            currentPage === 'cake' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$src$2f$components$2f$BirthdayCake$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                "data-orchids-id": "src/app/page.tsx:36:8",
                "data-orchids-name": "BirthdayCake",
                onContinue: ()=>setCurrentPage('note')
            }, void 0, false, {
                fileName: "[project]/workspaces/birthday-surprise-website/src/app/page.tsx",
                lineNumber: 36,
                columnNumber: 9
            }, this),
            currentPage === 'note' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$src$2f$components$2f$NotePage$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                "data-orchids-id": "src/app/page.tsx:39:8",
                "data-orchids-name": "NotePage",
                onBackToHome: ()=>setCurrentPage('final')
            }, void 0, false, {
                fileName: "[project]/workspaces/birthday-surprise-website/src/app/page.tsx",
                lineNumber: 39,
                columnNumber: 9
            }, this),
            currentPage === 'final' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$birthday$2d$surprise$2d$website$2f$src$2f$components$2f$FinalMessage$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                "data-orchids-id": "src/app/page.tsx:42:8",
                "data-orchids-name": "FinalMessage",
                onBackToHome: ()=>setCurrentPage('landing')
            }, void 0, false, {
                fileName: "[project]/workspaces/birthday-surprise-website/src/app/page.tsx",
                lineNumber: 42,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true);
}
}}),

};

//# sourceMappingURL=workspaces_birthday-surprise-website_src_ad81d835._.js.map