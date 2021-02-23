const websiteConfig = {
  debug: true,
  type: "Chrome Extension",
  urlInclude: [],
  urlExclude: ["/admin/*", "*.doc", "*.docx", "*.pdf", "*.ppt", "*.pptx"],
  elementSelector: null,
  url: {},
};

window.faster.init(websiteConfig);
