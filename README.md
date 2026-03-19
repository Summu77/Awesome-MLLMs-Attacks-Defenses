# Awesome-Multimodal-Models-Attacks-Defenses

An academic GitHub Pages website for curated multimodal attack, defense, evaluation, and survey papers.

This project is still under active development. We welcome collaboration, feedback, and issue reports.

Website: https://summu77.github.io/Awesome-Multimodal-Models-Attacks-Defenses/

## Paper schema

Each paper entry uses six fields:

```js
{
  title: "Paper title",
  institutions: ["Institution A", "Institution B"],
  publication: "Conference / Journal / arXiv + year",
  publishedAt: "YYYY-MM or YYYY-MM-DD",
  Tag: ["Tag A", "Tag B"],
  link: "https://..."
}
```

Every page reads paper cards from these standalone data files. The page templates do not store paper content directly.
`Tag` is optional in practice and may be an empty array `[]`; the site hides empty tags automatically.
For compatibility, the site also accepts a single `institution` string, but `institutions` is the preferred format for new entries.

## Add new papers

1. Open the matching data file in `docs/assets/js/data/`.
2. Add a new object to the exported array.
3. Set `publishedAt` so the site can sort papers by time.
4. Commit and push to GitHub.

## Local preview

From the repository root:

```bash
python3 -m http.server 8000
```

Then open `http://localhost:8000/docs/`.
