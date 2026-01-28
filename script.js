// ===============================
// Scroll Reveal
// ===============================
const revealEls = document.querySelectorAll(".reveal");

const io = new IntersectionObserver(
  (entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        e.target.classList.add("visible");
      }
    });
  },
  { threshold: 0.12 }
);

revealEls.forEach((el) => io.observe(el));


// ===============================
// Footer Year
// ===============================
const yearEl = document.getElementById("year");
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}


// ===============================
// Undergraduate Project Filters
// 仅作用于 #projects（Undergraduate）
// ===============================
const chips = document.querySelectorAll(".chip");
const undergradProjects = document.querySelectorAll("#projects .project");

chips.forEach((chip) => {
  chip.addEventListener("click", () => {
    chips.forEach((c) => c.classList.remove("active"));
    chip.classList.add("active");

    const filter = chip.dataset.filter;

    undergradProjects.forEach((proj) => {
      const tags = (proj.dataset.tags || "")
        .split(",")
        .map((t) => t.trim());

      const show =
        filter === "all" || tags.includes(filter);

      proj.style.display = show ? "" : "none";
    });
  });
});


// ===============================
// Collapsible Projects (Accordion-style cards)
// 适用于 Graduate + Undergraduate
// ===============================
const toggles = document.querySelectorAll(".proj-toggle");

toggles.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.stopPropagation();

    const expanded =
      btn.getAttribute("aria-expanded") === "true";

    const bodyId = btn.getAttribute("aria-controls");
    const body = document.getElementById(bodyId);

    if (!body) return;

    // Toggle state
    btn.setAttribute("aria-expanded", String(!expanded));
    const icon = btn.querySelector(".plus");
    if (icon) {
      icon.textContent = expanded ? "+" : "−";
    }

    body.hidden = expanded;
  });
});


// ===============================
// Skills → Evidence Tabs
// ===============================
const evidenceData = {
  sql: {
    title: "Usage Evidence for SQL:",
    items: [
      {
        label: "DataStory Internship — Monthly KPI reporting & validation",
        href: "#exp-datastory",
        meta: "SQL extraction, cleaning, and metric checks for management reports"
      },
      {
        label: "DataStory Internship — Dashboard metric pipeline",
        href: "#exp-datastory",
        meta: "KPI monitoring supporting performance tracking"
      },
      {
        label: "Happiness Index Project",
        href: "#proj-happiness",
        meta: "Joined multi-year public datasets for index construction"
      }
    ]
  },

  tableau: {
    title: "Usage Evidence for Tableau:",
    items: [
      {
        label: "DataStory Internship — 10+ dashboards for leadership review",
        href: "#exp-datastory",
        meta: "BI dashboards for performance tracking and reporting"
      }
    ]
  },

  python_nlp: {
    title: "Usage Evidence for Python (NLP):",
    items: [
      {
        label: "Government Social Media Comment Analysis (NLP)",
        href: "#proj-gov-nlp",
        meta: "Pipeline on 20,000 comments: preprocessing → categorization → metrics"
      },
      {
        label: "RAG-based QA System",
        href: "#gp-rag",
        meta: "Vector embeddings and semantic search pipeline"
      }
    ]
  },

  modelling: {
    title: "Usage Evidence for Statistical Modelling:",
    items: [
      {
        label: "Health Engagement via the Internet",
        href: "#proj-health",
        meta: "Driver analysis through modelling with interpretable recommendations"
      },
      {
        label: "Teaching Assistant (Econometrics)",
        href: "#exp-ta",
        meta: "Econometrics + modelling concepts taught and applied in practice"
      },
      {
        label: "Graduate Project: Statistical Modelling",
        href: "#gp-stat",
        meta: "GLM and multivariate analysis on complex datasets"
      }
    ]
  },

  market_research: {
    title: "Usage Evidence for Market Research:",
    items: [
      {
        label: "Haitong Securities — market reports",
        href: "#exp-securities",
        meta: "Market trend analysis based on price/volume and industry data"
      },
      {
        label: "DataStory Internship — social listening insights",
        href: "#exp-datastory",
        meta: "Consumer sentiment & engagement analysis supporting strategy"
      }
    ]
  }
};

const tabs = document.querySelectorAll(".skill-tab");
const evidenceTitle = document.getElementById("evidence-title");
const evidenceList = document.getElementById("evidence-list");

function renderEvidence(key) {
  const data = evidenceData[key];
  if (!data) return;

  evidenceTitle.textContent = data.title;
  evidenceList.innerHTML = "";

  data.items.forEach((item) => {
    const row = document.createElement("div");
    row.className = "evidence-item";
    row.innerHTML = `
      <div class="evidence-bullet">→</div>
      <div>
        <div><a href="${item.href}">${item.label}</a></div>
        <div class="evidence-meta">${item.meta}</div>
      </div>
    `;
    evidenceList.appendChild(row);
  });
}

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    tabs.forEach((t) => {
      t.classList.remove("active");
      t.setAttribute("aria-selected", "false");
    });

    tab.classList.add("active");
    tab.setAttribute("aria-selected", "true");
    renderEvidence(tab.dataset.skill);
  });
});


// ===============================
// Default selected skill tab
// ===============================
const defaultTab =
  document.querySelector('.skill-tab[data-skill="sql"]') ||
  tabs[0];

if (defaultTab) {
  defaultTab.click();
}
