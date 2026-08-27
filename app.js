const app = document.getElementById("app");
const MINIMIZE_ICON = "https://www.figma.com/api/mcp/asset/4043a3d6-ec1e-45ac-8da0-70867e5fc2ab.svg";
const MAXIMIZE_ICON = "https://www.figma.com/api/mcp/asset/0b42d234-1ebe-4fdb-ad85-6409398c5006.svg";
const CLOSE_ICON = "https://www.figma.com/api/mcp/asset/53807366-1866-4b89-825f-8861b5ab728b.svg";
const MENU_ICON = "https://www.figma.com/api/mcp/asset/561ab72a-6e9c-408e-81de-de2e78dea17d.svg";
const DIVIDER_ICON = "https://www.figma.com/api/mcp/asset/baee6d56-c5fb-4a37-91e6-f51d1d605242.svg";
const HOME_ICON = "https://www.figma.com/api/mcp/asset/61073f90-678d-4392-a1ad-267b4b8863e5.svg";
const AI_ICON = "https://www.figma.com/api/mcp/asset/3a8cca54-a683-4d91-9fff-33134e09b205.svg";
const ORGANIZE_ICON = "https://www.figma.com/api/mcp/asset/940bdea9-af91-438c-8fc9-f860643212f1.svg";
const AVATAR_ICON = "https://www.figma.com/api/mcp/asset/586c36b0-2813-466f-b03b-e16e329e8069.svg";
const CREATE_ICON = "https://www.figma.com/api/mcp/asset/493218df-370b-4370-8e1e-32389133235d.svg";
const DOWNLOAD_ICON = "https://www.figma.com/api/mcp/asset/b67e6ab5-b7fe-4f88-a860-ce6e84479763.svg";
const SIDEBAR_FOOTER_IMAGE = "https://www.figma.com/api/mcp/asset/852e9ec6-8bda-45bd-8cab-7ede875208d9.png";
const SUBMENU_ACTIVE_ICON = "https://www.figma.com/api/mcp/asset/19230374-707a-4a80-8bff-f772da09df6b.svg";
const SUBMENU_HOVER_ICON = "https://www.figma.com/api/mcp/asset/96d9c4ed-aae2-4a83-aba7-995add61699c.svg";

const SIDEBAR_SECTIONS = [
  { title: "Main Menu", icon: MENU_ICON, links: [] },
  { title: "Home", icon: HOME_ICON, links: [] },
  { title: "Organize", icon: { src: ORGANIZE_ICON, className: "is-organize", frameClassName: "frame-organize" }, links: [{ label: "My Files", state: "default" }] },
  { title: "AI", icon: AI_ICON, links: [{ label: "Images", state: "default" }, { label: "AI Cloning", state: "default" }, { label: "Face Swapping", state: "default" }, { label: "Reimagine", state: "default" }, { label: "Speech", state: "default" }] },
  { title: "AI Avatar Studio", icon: { src: AVATAR_ICON, className: "is-avatar", frameClassName: "frame-avatar" }, links: [{ label: "Avatar Video", state: "default" }, { label: "Avatar Voice", state: "default" }] },
  { title: "Create", icon: { src: CREATE_ICON, className: "is-create", frameClassName: "frame-create" }, links: [{ label: "Design Suite", state: "default" }, { label: "Backgrounds", state: "default" }] },
  { title: "Download", icon: DOWNLOAD_ICON, links: [{ label: "Web Browser", state: "default" }, { label: "Bookmarks", state: "active" }, { label: "Free Media", state: "default" }] }
];

function getByPath(object, path) {
  return path.split(".").reduce((acc, key) => (acc ? acc[key] : undefined), object);
}

function resolveValue(value, root) {
  if (typeof value !== "string") {
    return value;
  }

  const refMatch = value.match(/^\{(.+)\}$/);
  if (!refMatch) {
    return value;
  }

  const resolved = getByPath(root, refMatch[1]);
  return resolveValue(resolved, root);
}

function setCssVars(tokens) {
  const root = document.documentElement;
  const mapped = tokens.mapped;

  const vars = {
    "--bg-app": resolveValue(mapped.bg.app, tokens),
    "--bg-panel": resolveValue(mapped.bg.panel, tokens),
    "--bg-input": resolveValue(mapped.bg.input, tokens),
    "--bg-nav-selected": resolveValue(mapped.bg.nav-selected, tokens),
    "--bg-row-hover": resolveValue(mapped.bg.row-hover, tokens),
    "--bg-action-selected": resolveValue(mapped.bg.action-selected, tokens),
    "--bg-button-primary": resolveValue(mapped.bg["button-primary"], tokens),
    "--bg-button-secondary": resolveValue(mapped.bg["button-secondary"], tokens),
    "--text-heading": resolveValue(mapped.text.heading, tokens),
    "--text-body": resolveValue(mapped.text.body, tokens),
    "--text-meta": resolveValue(mapped.text.meta, tokens),
    "--text-muted": resolveValue(mapped.text.muted, tokens),
    "--text-placeholder": resolveValue(mapped.text.placeholder, tokens),
    "--text-nav-section-title": resolveValue(mapped.text["nav-section-title"], tokens),
    "--text-nav-link-default": resolveValue(mapped.text["nav-link-default"], tokens),
    "--text-button-secondary-default": resolveValue(mapped.text["button-secondary-default"], tokens),
    "--text-button-secondary-hover": resolveValue(mapped.text["button-secondary-hover"], tokens),
    "--text-accent-on-primary": resolveValue(mapped.text["accent-on-primary"], tokens),
    "--border-divider": resolveValue(mapped.border.divider, tokens),
    "--border-input": resolveValue(mapped.border.input, tokens),
    "--border-card-default": resolveValue(mapped.border["card-default"], tokens),
    "--icon-default": resolveValue(mapped.icon.default, tokens),
    "--icon-status-positive": resolveValue(mapped.icon["status-positive"], tokens),
    "--control-toggle-accent": resolveValue(mapped.control["toggle-accent"], tokens),
    "--inspector-title": resolveValue(mapped.inspector.title, tokens),
    "--inspector-meta-label": resolveValue(mapped.inspector["meta-label"], tokens),
    "--inspector-meta-value": resolveValue(mapped.inspector["meta-value"], tokens),
    "--radius-100": tokens.radius["100"]
  };

  Object.entries(vars).forEach(([name, value]) => root.style.setProperty(name, value));
}

function renderSidebarSection(section, index) {
  const icon = typeof section.icon === "string" ? { src: section.icon, className: "" } : section.icon;
  const sectionLinks = section.links
    .map(
      (link) => `
        <button class="sidebar-submenu-link${link.state === "active" ? " is-active" : ""}" type="button">
          <span class="sidebar-submenu-indicator">
            <img class="sidebar-submenu-indicator-active" src="${SUBMENU_ACTIVE_ICON}" alt="" width="9" height="7" />
            <img class="sidebar-submenu-indicator-hover" src="${SUBMENU_HOVER_ICON}" alt="" width="9" height="7" />
          </span>
          <span class="sidebar-submenu-text">${link.label}</span>
        </button>
      `
    )
    .join("");

  return `
    <section class="sidebar-section">
      <div class="sidebar-section-header">
        <span class="sidebar-section-icon ${icon.className || ""}">
          <span class="sidebar-section-icon-frame ${icon.frameClassName || ""}">
            <img src="${icon.src}" alt="" width="20" height="20" />
          </span>
        </span>
        <span class="sidebar-section-title">${section.title}</span>
      </div>
      ${section.links.length ? `<div class="sidebar-section-links">${sectionLinks}</div>` : ""}
    </section>
    ${index < SIDEBAR_SECTIONS.length - 1 ? `<img class="sidebar-divider" src="${DIVIDER_ICON}" alt="" />` : ""}
  `;
}

function renderShell() {
  const sidebarMarkup = SIDEBAR_SECTIONS.map(renderSidebarSection).join("");

  app.innerHTML = `
    <div class="app-shell">
      <div class="window-bar">
        <div class="window-controls" aria-label="Window controls">
          <button class="window-control" type="button" aria-label="Minimize window">
            <img src="${MINIMIZE_ICON}" alt="" width="18" height="18" />
          </button>
          <button class="window-control" type="button" aria-label="Maximize window">
            <img src="${MAXIMIZE_ICON}" alt="" width="18" height="18" />
          </button>
          <button class="window-control window-control-close" type="button" aria-label="Close window">
            <img src="${CLOSE_ICON}" alt="" width="20" height="20" />
          </button>
        </div>
      </div>

      <main class="app-body">
        <aside class="global-sidebar">
          <div class="global-sidebar-content">
            ${sidebarMarkup}
          </div>
          <div class="sidebar-toggle-row">
            <div class="sidebar-toggle" aria-hidden="true">
              <span class="sidebar-toggle-knob"></span>
            </div>
            <span class="sidebar-toggle-label">Keep Sidebar Open</span>
          </div>
          <img class="sidebar-footer-image" src="${SIDEBAR_FOOTER_IMAGE}" alt="" />
        </aside>

        <section class="main-frame">
          <header class="top-bar">
            <div class="scaffold-block">
              <span class="scaffold-label">Top Bar</span>
            </div>
          </header>

          <div class="workspace">
            <aside class="panel bookmark-sidebar">
              <div class="scaffold-block">
                <span class="scaffold-label">Bookmark Sidebar</span>
              </div>
            </aside>

            <section class="content-panel">
              <div class="scaffold-block">
                <span class="scaffold-label">Bookmark Card Area</span>
              </div>
            </section>

            <aside class="panel inspector-host">
              <div class="scaffold-block">
                <span class="scaffold-label">Right Details Panel</span>
              </div>
            </aside>
          </div>
        </section>
      </main>
    </div>
  `;
}

async function init() {
  try {
    const response = await fetch("./mediaplace.design-tokens.json");
    const tokens = await response.json();
    setCssVars(tokens);
  } catch (error) {
    console.error("Failed to load design tokens:", error);
  }

  renderShell();
}

init();
