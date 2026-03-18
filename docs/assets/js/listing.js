import { collections } from "./data/all-papers.js";
import { sectionMeta } from "./data/sections.js";
import { renderShell } from "./modules/site-shell.js";
import {
  applyTimeMode,
  filterPapers,
  initExpandablePaperGroups,
  isPreprintPaper,
  renderExpandableBuckets,
  uniquePublications,
  uniqueYears
} from "./modules/ui.js";

const page = document.body.dataset.page;
const section = document.body.dataset.section;
const meta = sectionMeta[section];
const papers = collections[section] || [];

renderShell(page);
initExpandablePaperGroups();

document.querySelector("#page-eyebrow").textContent = meta.eyebrow;
document.querySelector("#page-title").textContent = meta.title;
document.querySelector("#page-description").remove();

const publicationFilter = document.querySelector("#publication-filter");
const sortFilter = document.querySelector("#sort-filter");
const viewFilter = document.querySelector("#view-filter");
const searchInput = document.querySelector("#search-input");
const paperGrid = document.querySelector("#paper-grid");
const emptyState = document.querySelector("#empty-state");
const viewStorageKey = `paper-view:${section}`;

paperGrid.classList.remove("paper-grid");
paperGrid.classList.add("paper-bucket-stack");

viewFilter.value = localStorage.getItem(viewStorageKey) || "cards";

publicationFilter.innerHTML += uniquePublications(papers)
  .map((publication) => `<option value="${publication}">${publication}</option>`)
  .join("");

sortFilter.innerHTML += uniqueYears(papers)
  .map((year) => `<option value="${year}">${year}</option>`)
  .join("");

function renderList() {
  const viewMode = viewFilter.value;
  const filtered = filterPapers(
    papers,
    searchInput.value,
    publicationFilter.value
  );
  const sorted = applyTimeMode(filtered, sortFilter.value);

  paperGrid.innerHTML = renderPaperBuckets(sorted, viewMode);
  paperGrid.dataset.viewMode = viewMode;

  emptyState.classList.toggle("hidden", sorted.length > 0);
}

function renderPaperBuckets(items, viewMode) {
  const accepted = items.filter((paper) => !isPreprintPaper(paper));
  const preprints = items.filter((paper) => isPreprintPaper(paper));
  const buckets = [
    {
      title: "Accepted Papers",
      papers: accepted
    },
    {
      title: "Preprints",
      papers: preprints
    }
  ];

  return renderExpandableBuckets(buckets, { limit: 10, viewMode });
}

searchInput.addEventListener("input", renderList);
publicationFilter.addEventListener("change", renderList);
sortFilter.addEventListener("change", renderList);
viewFilter.addEventListener("change", () => {
  localStorage.setItem(viewStorageKey, viewFilter.value);
  renderList();
});
renderList();
