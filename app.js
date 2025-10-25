const tabs = document.querySelectorAll(".tab");
const panels = document.querySelectorAll(".tab-panel");

function activate(tabId) {
  tabs.forEach(btn => btn.classList.toggle("active", btn.dataset.tab === tabId));
  panels.forEach(panel => panel.classList.toggle("active", panel.id === tabId));
  history.replaceState(null, "", `#${tabId}`);
}

tabs.forEach(btn => btn.addEventListener("click", () => activate(btn.dataset.tab)));

const initial = location.hash.replace("#", "") || "research";
if (document.getElementById(initial)) activate(initial);
