// Some basic declarations

// Console.log
let cl = (c) => console.log(c);

// Element manipulations
let getElement = (el) => document.querySelector(el);
let getMulti = (parent, el) => parent.querySelectorAll(el);
let createEl = (el) => document.createElement(el);

// Javascript

let main = getElement("main");
let sections = getMulti(main, "section");
//let h1 = getMulti(main, "section h1");
//console.log(h1.length);

// Section Title Anchors
function anchors() {
	sections.forEach((section) => {
		let tagId = section.id;
		let anchorTag = createEl("a");
		anchorTag.setAttribute("class", "section-anchor");
        anchorTag.setAttribute("href", `#${tagId}`);
        
        
        let h1 = section.querySelector("h1");
        if(h1 !== null) {
            h1.append(anchorTag)
        }
        if(h1 == null) {
            let h2 = section.querySelector("h2");
            h2.append(anchorTag)
        }
		
	});
}
anchors();
