import { defenseGroups } from "./data/defenses.js";
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
const meta = sectionMeta.defenses;

renderShell(page);
initExpandablePaperGroups();

document.querySelector("#page-eyebrow").textContent = meta.eyebrow;
document.querySelector("#page-title").textContent = meta.title;
document.querySelector("#page-description").remove();

const publicationFilter = document.querySelector("#publication-filter");
const sortFilter = document.querySelector("#sort-filter");
const viewFilter = document.querySelector("#view-filter");
const searchInput = document.querySelector("#search-input");
const categoryNav = document.querySelector("#defense-category-nav");
const defenseSections = document.querySelector("#defense-sections");
const emptyState = document.querySelector("#empty-state");
const viewStorageKey = "paper-view:defenses";

const allDefensePapers = defenseGroups.flatMap((group) => group.papers);

viewFilter.value = localStorage.getItem(viewStorageKey) || "cards";

publicationFilter.innerHTML += uniquePublications(allDefensePapers)
  .map((publication) => `<option value="${publication}">${publication}</option>`)
  .join("");

sortFilter.innerHTML += uniqueYears(allDefensePapers)
  .map((year) => `<option value="${year}">${year}</option>`)
  .join("");

function renderCategoryNav(filteredGroups) {
  categoryNav.innerHTML = filteredGroups
    .map(
      (group) => `
        <div class="inline-nav-item">
          ${
            group.papers.length > 0
              ? `<a class="inline-nav-link" href="#category-${group.key}">${group.title}</a>`
              : `<span class="inline-nav-link disabled">${group.title}</span>`
          }
          <span class="section-count">${group.papers.length}</span>
        </div>
      `
    )
    .join("");
}

function renderDefenseSections(filteredGroups) {
  const nonEmptyGroups = filteredGroups.filter((group) => group.papers.length > 0);

  defenseSections.innerHTML = nonEmptyGroups
    .map(
      (group) => `
        <section class="subsection-block" id="category-${group.key}">
          <div class="section-heading">
            <div>
              <p class="eyebrow">Defense Subtype</p>
              <h2>${group.title}</h2>
            </div>
            <p class="section-note">
              <span class="grouping-note">Grouping rule: publications starting with "arXiv" are treated as preprints.</span>
            </p>
          </div>
          ${renderPaperBuckets(group)}
        </section>
      `
    )
    .join("");
}

function renderPaperBuckets(group) {
  const accepted = group.papers.filter((paper) => !isPreprintPaper(paper));
  const preprints = group.papers.filter((paper) => isPreprintPaper(paper));
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

  return renderExpandableBuckets(buckets, {
    sectionLabel: group.shortTitle,
    limit: 10,
    viewMode: viewFilter.value
  });
}

function renderPage() {
  defenseSections.dataset.viewMode = viewFilter.value;
  const filteredGroups = defenseGroups.map((group) => ({
    ...group,
    papers: applyTimeMode(
      filterPapers(group.papers, searchInput.value, publicationFilter.value),
      sortFilter.value
    )
  }));

  const total = filteredGroups.reduce((sum, group) => sum + group.papers.length, 0);

  renderCategoryNav(filteredGroups);
  renderDefenseSections(filteredGroups);
  emptyState.classList.toggle("hidden", total > 0);
}

searchInput.addEventListener("input", renderPage);
publicationFilter.addEventListener("change", renderPage);
sortFilter.addEventListener("change", renderPage);
viewFilter.addEventListener("change", () => {
  localStorage.setItem(viewStorageKey, viewFilter.value);
  renderPage();
});
renderPage();
