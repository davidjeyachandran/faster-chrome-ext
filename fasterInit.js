const websiteConfig = {
  debug: true,
  type: "Chrome Extension",
  urlInclude: [],
  urlExclude: ["/admin/*", "*.doc", "*.docx", "*.pdf", "*.ppt", "*.pptx"],
  elementSelector: null,
  url: {
    "/": {
      pageFunction: function (urlTarget, externalScriptObject) {},
    },
    all: {
      pageFunction: function (urlTarget, externalScriptObject) {
        // if (window.ga) window.ga("send", "pageview", urlTarget);
        console.log("dispatchEvents");
        dispatchEvent(new Event("load"));
        dispatchEvent(new Event("DOMContentLoaded"));
      },
    },
  },
};

window.faster.init(websiteConfig);
