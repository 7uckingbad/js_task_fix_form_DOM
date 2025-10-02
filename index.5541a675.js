document.querySelectorAll("form").forEach(function(e){e.querySelectorAll("input").forEach(function(e){var t=document.createElement("label");t.classList.add("field-label"),t.setAttribute("for",e.id),t.textContent=e.name,e.parentElement.appendChild(t),e.placeholder=e.name.toUpperCase()})});
//# sourceMappingURL=index.5541a675.js.map
