/**
 * Basic JavaScript Declarations
 */
// Shorten Console.log function || Does accept multiple arguments
let cl = (...args) => args.forEach((c) => console.log(c));
// Element DOM manipulations
let getEl = document.querySelector.bind(document);
let queryAll = document.querySelectorAll.bind(document);
let createEl = document.createElement.bind(document);

// Run JavaScript on start
window.onload = () => {
  generateLink();
  anchors();
  codePrefix();
};

// Main tag
let main = getEl("main");
let sections = queryAll("main section"); // Sections

/**
 * Link Generation
 *
 * This will generate an id for the anchor links according to the
 * content inside the <h1> or <h2> tags of each section
 */
function generateLink() {
  // takes el param, then convert it into url-slugs
  let generate = (el) =>
    el.innerHTML
      .split(/\W+/)
      .filter((obj) => obj !== "")
      .join("-")
      .toLowerCase();

  // for every section heading, it will give an id of the urlSlugs generated
  sections.forEach((section) => {
    let h1 = section.querySelector("h1");
    let h2 = section.querySelector("h2");

    if (h1 !== null) section.setAttribute("id", generate(h1));

    if (h1 == null && h2 !== null) section.setAttribute("id", generate(h2));
  });
}

/**
 * Section Anchors:
 *
 * Function creates an anchor beside the <h1> or <h2> tags to provide
 * a link to the specific section
 */
function anchors() {
  sections.forEach((section) => {
    let tagId = section.id;
    let anchorTag = createEl("a");
    anchorTag.setAttribute("class", "section-anchor");
    anchorTag.setAttribute("href", `#${tagId}`);

    let h1 = section.querySelector("h1");
    let h2 = section.querySelector("h2");

    if (h1 !== null) h1.prepend(anchorTag);

    if (h1 == null) h2.prepend(anchorTag);
  });
}
