import { Avatar } from "#/components/atoms/avatar";
import Separator from "#/components/atoms/separator";
import ReactMarkdown from "react-markdown";
import gfm from "remark-gfm";

export default function ArticleView() {
  return (
    <main className="w-full p-8 flex flex-col gap-4">
      <div className="flex items-center gap-4">
        <Avatar
          size="md"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoXi3MDuEWZCR7_5orPdlYKwDvHtT0oYJQ2Q&s"
        />
        <div className="flex flex-col justify-center">
          <p className="leading-4">ctheusg</p>
          <p className="text-foreground/40">2 hours ago</p>
        </div>
      </div>
      <p>
        As the title says, here are all the useful types that Im using every day
        or create new types on top of them. I thought it might be handy for some
        people so I just share here and this will be updated moving forward:
      </p>
      <div className="p-4 relative border border-background/30 bg-accent/20 rounded-2xl">
        <h1 className="bg-accent/30 p-2 rounded-sm font-bold ">
          Title of the article
        </h1>
        <Separator direction="horizontal" />
        <div className="markdown-body">
          <ReactMarkdown remarkPlugins={[gfm]}>
            {`
# The Effects of Urbanization on Pollinator Populations

**Authors:** Matheus Couto, Jane Doe
**Affiliation:** Department of Ecology, Example University
**Date:** August 19, 2025

---

## Abstract

Urbanization is a major driver of habitat loss and biodiversity decline. Pollinators, including bees, butterflies, and hoverflies, are particularly sensitive to changes in land use. This study investigates the impact of urbanization on pollinator abundance and diversity in metropolitan areas compared to rural landscapes. We found that urbanization reduces pollinator diversity but certain generalist species thrive in urban habitats.

---

## 1. Introduction

Pollinators are essential for ecosystem functioning and agriculture. Recent declines in pollinator populations have raised concerns globally. Urban expansion fragments habitats, alters floral resources, and introduces pollutants that affect pollinator health. Understanding these impacts is crucial for conservation planning.

---

## 2. Methods

### 2.1 Study Sites

We selected 12 sites: 6 urban parks and 6 rural meadows, all within a 50 km radius of Example City.

### 2.2 Data Collection

Pollinators were sampled during peak flowering seasons (April–June 2024) using:

- **Transect walks** for visual observations
- **Pan traps** for capturing flying insects

Species were identified to genus level, and abundance counts were recorded.

### 2.3 Statistical Analysis

Diversity indices (Shannon and Simpson) were calculated using R (v4.3). Differences between urban and rural sites were tested using ANOVA.

---

## 3. Results

Urban sites showed a **30% reduction in species richness** compared to rural sites. However, *Apis mellifera* and *Bombus terrestris* were more abundant in urban areas.

**Figure 1: Pollinator diversity in urban vs rural sites**

\`\`\`text
Urban Sites:  🐝🐝🐝🐝
Rural Sites: 🐝🐝🐝🐝🐝🐝🐝
\`\`\`
`}
          </ReactMarkdown>
        </div>
      </div>
    </main>
  );
}
