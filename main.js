// Some basic declarations

// Console.log
let cl = c => console.log(c);

// Element manipulations
let $ = document.querySelector.bind(document);
let queryAll = document.querySelectorAll.bind(document);
let createEl = document.createElement.bind(document);

// Run JavaScript on start
window.onload = () => {
	generateLink();
	anchors();
	codePrefix();
};

// Javascript
let main = $("main");
let sections = queryAll("main section");

// Link generation
// This will generate an id for the anchor links according to the content inside the <h1> or <h2> tags of each section
function generateLink() {
	sections.forEach(section => {
		let h1 = section.querySelector("h1");
		let h2 = section.querySelector("h2");

		if (h1 !== null) {
			let text = h1.innerHTML;
			let link = text.split(/\W+/).filter(obj => obj !== "").join("-").toLowerCase();
			section.setAttribute("id", link);
		}

		if (h1 == null) {
			let text = h2.innerHTML;
			let link = text.split(/\W+/).filter(obj => obj !== "").join("-").toLowerCase();
			section.setAttribute("id", link);
		}
	});
}
// Section Title Anchors
// Function creates an anchor beside the <h1> or <h2> tags to provide a link to the specific section
function anchors() {
	sections.forEach(section => {
		let tagId = section.id;
		let anchorTag = createEl("a");
		anchorTag.setAttribute("class", "section-anchor");
		anchorTag.setAttribute("href", `#${tagId}`);

		let h1 = section.querySelector("h1");

		if (h1 !== null) {
			h1.prepend(anchorTag);
		}
		if (h1 == null) {
			let h2 = section.querySelector("h2");
			h2.prepend(anchorTag);
		}
	});
}

// Find the prefix for code
function codePrefix() {
	let prefix = "`";
	let regex = /`.+?`/gi;
	
	let element = main.innerHTML.match(regex);
	
	element.forEach(letters => {
		let words = letters.match(/[^`]+/);
		main.innerHTML = main.innerHTML.replace(letters, `<code>${words}</code>`);
		cl(main.innerHTML.replace(letters), `<code>${words}</code>`)
	});
}

