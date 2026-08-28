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
const ADD_BOOKMARK_ICON = "https://www.figma.com/api/mcp/asset/a317d3cb-5629-470e-8eaf-f209811de574.svg";
const IMPORT_BOOKMARKS_ICON = "https://www.figma.com/api/mcp/asset/99ddd7df-8b30-4b0b-97c5-16695869139a.svg";
const SEARCH_ICON = "https://www.figma.com/api/mcp/asset/20f159d6-507d-4b16-af4f-4a36737483f6.svg";
const BOOKMARK_FOLDER_ICON = "https://www.figma.com/api/mcp/asset/176b819c-7c13-4077-85bb-b143172eebac.svg";
const BOOKMARK_CHEVRON_ICON = "https://www.figma.com/api/mcp/asset/adcfb519-287c-4b72-ba76-bb401c73e37a.svg";
const BOOKMARK_LOCKED_ICON = "https://www.figma.com/api/mcp/asset/1eec1291-ba1f-4919-bc85-73517f3f1ecc.svg";
const BOOKMARK_TRASH_ICON = "https://www.figma.com/api/mcp/asset/11520fd7-7461-48a2-af73-d13b36b73ecd.svg";
const BOOKMARK_STAR_ICON = "https://www.figma.com/api/mcp/asset/3260432c-abe9-466d-8f6f-e67a15be0255.svg";
const BOOKMARK_LINK_ICON = "https://www.figma.com/api/mcp/asset/28e4c662-783e-47e6-a3d5-8229a6c23020.svg";
const BOOKMARK_DOCUMENTS_ICON = "https://www.figma.com/api/mcp/asset/59103a71-f384-478f-b511-a1c0d2e514c4.svg";
const BOOKMARK_AUDIO_ICON = "https://www.figma.com/api/mcp/asset/45ce4d75-5b95-49b5-9c60-fe9b53edb3ec.svg";
const BOOKMARK_VIDEO_ICON = "https://www.figma.com/api/mcp/asset/37e8ebc8-9fd8-4d8d-b340-d3d16e39a051.svg";
const BOOKMARK_UNTAGGED_ICON = "https://www.figma.com/api/mcp/asset/cc60a370-1a30-406c-b299-08360a3f8f26.svg";
const BOOKMARK_ADD_CATEGORY_ICON = "https://www.figma.com/api/mcp/asset/8d438e45-6706-469d-b423-0ebd6eef1681.svg";
const BOOKMARK_ADD_CATEGORY_ACTIVE_ICON = "https://www.figma.com/api/mcp/asset/bd9f8cc2-a797-4c09-b87a-69ac123194f0.svg";

const SIDEBAR_SECTIONS = [
  { title: "Main Menu", icon: MENU_ICON, links: [] },
  { title: "Home", icon: HOME_ICON, links: [] },
  { title: "Organize", icon: { src: ORGANIZE_ICON, className: "is-organize", frameClassName: "frame-organize" }, links: [{ label: "My Files", state: "default" }] },
  { title: "AI", icon: AI_ICON, links: [{ label: "Images", state: "default" }, { label: "AI Cloning", state: "default" }, { label: "Face Swapping", state: "default" }, { label: "Reimagine", state: "default" }, { label: "Speech", state: "default" }] },
  { title: "AI Avatar Studio", icon: { src: AVATAR_ICON, className: "is-avatar", frameClassName: "frame-avatar" }, links: [{ label: "Avatar Video", state: "default" }, { label: "Avatar Voice", state: "default" }] },
  { title: "Create", icon: { src: CREATE_ICON, className: "is-create", frameClassName: "frame-create" }, links: [{ label: "Design Suite", state: "default" }, { label: "Backgrounds", state: "default" }] },
  { title: "Download", icon: DOWNLOAD_ICON, links: [{ label: "Web Browser", state: "default" }, { label: "Bookmarks", state: "active" }, { label: "Free Media", state: "default" }] }
];

const appState = {
  newBookmarkExpanded: false,
  bookmarkUrl: "",
  createCategoryState: "default",
  isCreatingCategory: false,
  newCategoryName: "New Category",
  createdCategoryNames: []
};

const BOOKMARK_PRIMARY_LINKS = [
  { label: "All Bookmarks", count: "462", state: "active", icon: BOOKMARK_FOLDER_ICON },
  { label: "Uncategorized", count: "4", state: "default", icon: BOOKMARK_FOLDER_ICON },
  { label: "Deleted Items", count: "0", state: "default", icon: BOOKMARK_TRASH_ICON, iconClass: "bookmark-trash-icon" }
];

const BOOKMARK_CATEGORY_LINKS = [
  { label: "Books", count: "57", state: "default", icon: BOOKMARK_FOLDER_ICON },
  { label: "WP Resources", count: "41", state: "default", icon: BOOKMARK_FOLDER_ICON, chevron: true },
  { label: "YouTube Channels", count: "77", state: "default", icon: BOOKMARK_FOLDER_ICON },
  { label: "Arts and Culture", count: "172", state: "default", icon: BOOKMARK_LOCKED_ICON, iconClass: "bookmark-locked-icon" },
  { label: "Sports", count: "47", state: "default", icon: BOOKMARK_FOLDER_ICON },
  { label: "Design Resources", count: "64", state: "default", icon: BOOKMARK_FOLDER_ICON }
];

const BOOKMARK_FILTER_LINKS = [
  { label: "Favourites", count: "52", icon: BOOKMARK_STAR_ICON },
  { label: "Links", count: "71", icon: BOOKMARK_LINK_ICON },
  { label: "Articles", count: "44", icon: BOOKMARK_DOCUMENTS_ICON },
  { label: "Audio", count: "113", icon: BOOKMARK_AUDIO_ICON, iconClass: "bookmark-audio-icon", iconFrameClass: "bookmark-audio-frame" },
  { label: "Videos", count: "168", icon: BOOKMARK_VIDEO_ICON, iconClass: "bookmark-video-icon", iconFrameClass: "bookmark-video-frame" },
  { label: "Untagged", count: "56", icon: BOOKMARK_UNTAGGED_ICON, iconClass: "bookmark-untagged-icon", iconFrameClass: "bookmark-untagged-frame" }
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
    "--bg-panel-alt": resolveValue(mapped.bg["panel-alt"], tokens),
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
  const icon = typeof section.icon === "string" ? { src: section.icon, className: "", frameClassName: "" } : section.icon;
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

function renderNewBookmarkControl() {
  const expandedClass = appState.newBookmarkExpanded ? " is-expanded" : "";
  const inputValue = appState.bookmarkUrl.replace(/"/g, "&quot;");
  const saveDisabled = appState.bookmarkUrl.trim() ? "" : " is-disabled";

  return `
    <div class="new-bookmark-control${expandedClass}">
      <button class="new-bookmark-trigger" type="button" data-action="toggle-new-bookmark" aria-expanded="${appState.newBookmarkExpanded}">
        <span class="new-bookmark-trigger-main">
          <img class="new-bookmark-icon" src="${ADD_BOOKMARK_ICON}" alt="" width="20" height="20" />
          <span class="new-bookmark-label">New bookmark</span>
        </span>
      </button>
      <div class="new-bookmark-expand-shell">
        <input
          class="new-bookmark-url-input"
          type="text"
          placeholder="Type or paste a URL, then hit Enter or Save"
          value="${inputValue}"
          data-role="new-bookmark-input"
        />
        <button class="new-bookmark-save${saveDisabled}" type="button" data-action="save-bookmark">Save bookmark</button>
      </div>
    </div>
  `;
}

function renderBookmarkSidebarLink(link) {
  const stateClass = link.state === "active" ? " is-active" : "";
  const chevronMarkup = link.chevron
    ? `<span class="bookmark-sidebar-link-chevron"><img src="${BOOKMARK_CHEVRON_ICON}" alt="" width="8.249" height="4.448" /></span>`
    : "";

  return `
    <button class="bookmark-sidebar-link${stateClass}" type="button">
      <span class="bookmark-sidebar-link-main">
        <span class="bookmark-sidebar-link-icon ${link.iconClass || ""}">
          <span class="bookmark-sidebar-link-icon-frame ${link.iconFrameClass || ""}">
            <img src="${link.icon}" alt="" width="20" height="20" />
          </span>
        </span>
        <span class="bookmark-sidebar-link-label">${link.label}</span>
        ${chevronMarkup}
      </span>
      <span class="bookmark-sidebar-link-count">${link.count}</span>
    </button>
  `;
}

function renderNewCategoryDraftRow() {
  return `
    <div class="bookmark-sidebar-link bookmark-sidebar-link-draft">
      <span class="bookmark-sidebar-link-main">
        <span class="bookmark-sidebar-link-icon">
          <span class="bookmark-sidebar-link-icon-frame">
            <img src="${BOOKMARK_FOLDER_ICON}" alt="" width="20" height="20" />
          </span>
        </span>
        <input
          class="bookmark-sidebar-draft-input"
          type="text"
          value="${appState.newCategoryName.replace(/"/g, "&quot;")}"
          data-role="new-category-input"
        />
      </span>
      <span class="bookmark-sidebar-link-count">0</span>
    </div>
  `;
}

function renderBookmarkSidebar() {
  const primaryLinks = BOOKMARK_PRIMARY_LINKS.map(renderBookmarkSidebarLink).join("");
  const categoryItems = [...BOOKMARK_CATEGORY_LINKS];
  appState.createdCategoryNames.forEach((name) => {
    categoryItems.push({
      label: name,
      count: "0",
      state: "default",
      icon: BOOKMARK_FOLDER_ICON
    });
  });
  const categoryLinks = categoryItems.map(renderBookmarkSidebarLink).join("");
  const filterLinks = BOOKMARK_FILTER_LINKS.map(renderBookmarkSidebarLink).join("");
  const createCategoryClass = appState.createCategoryState === "active" ? " is-active" : "";
  const categoryContent = appState.isCreatingCategory
    ? `${categoryLinks}${renderNewCategoryDraftRow()}`
    : categoryLinks;
  const categoryCount = String(BOOKMARK_CATEGORY_LINKS.length + appState.createdCategoryNames.length);

  return `
    <div class="bookmark-sidebar-panel">
      <div class="bookmark-sidebar-group bookmark-sidebar-group-primary">
        ${primaryLinks}
      </div>

      <div class="bookmark-sidebar-section-title">
        <span>Categories</span>
        <span>${categoryCount}</span>
      </div>

      <button class="bookmark-sidebar-create-category${createCategoryClass}" type="button" data-action="create-category">
        <span>Create a new category</span>
        <img src="${BOOKMARK_ADD_CATEGORY_ICON}" alt="" width="20" height="20" />
      </button>

      <div class="bookmark-sidebar-group bookmark-sidebar-group-categories">
        ${categoryContent}
      </div>

      <div class="bookmark-sidebar-filter-wrapper">
        <div class="bookmark-sidebar-filter-title">Filter by</div>
        <div class="bookmark-sidebar-group bookmark-sidebar-group-filter">
          ${filterLinks}
        </div>
      </div>
    </div>
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
        </aside>

        <section class="main-frame">
          <div class="main-frame-wrapper">
            <header class="top-bar">
              <div class="nav-bar">
                ${renderNewBookmarkControl()}

                <label class="search-wrapper" aria-label="Search bookmarks">
                  <input class="search-input" type="text" placeholder="Search for your bookmark" />
                  <span class="search-icon-wrapper">
                    <img class="search-icon" src="${SEARCH_ICON}" alt="" width="16" height="16" />
                  </span>
                </label>

                <button class="import-bookmarks-button" type="button">
                  <img class="import-bookmarks-icon" src="${IMPORT_BOOKMARKS_ICON}" alt="" width="20" height="20" />
                  <span>Import bookmarks</span>
                </button>
              </div>
            </header>

            <div class="workspace">
              <aside class="panel bookmark-sidebar">
                ${renderBookmarkSidebar()}
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
          </div>
        </section>
      </main>
    </div>
  `;

  const newBookmarkInput = app.querySelector("[data-role='new-bookmark-input']");
  if (appState.newBookmarkExpanded && newBookmarkInput) {
    newBookmarkInput.focus();
    const valueLength = newBookmarkInput.value.length;
    newBookmarkInput.setSelectionRange(valueLength, valueLength);
  }

  const newCategoryInput = app.querySelector("[data-role='new-category-input']");
  if (appState.isCreatingCategory && newCategoryInput) {
    newCategoryInput.focus();
    const valueLength = newCategoryInput.value.length;
    newCategoryInput.setSelectionRange(valueLength, valueLength);
  }
}

function handleAppClick(event) {
  const actionTarget = event.target.closest("[data-action]");
  if (!actionTarget) {
    if (appState.isCreatingCategory && !event.target.closest("[data-role='new-category-input']")) {
      finalizeNewCategory();
    }

    if (appState.newBookmarkExpanded && !event.target.closest(".new-bookmark-control")) {
      appState.newBookmarkExpanded = false;
      renderShell();
    }
    return;
  }

  const action = actionTarget.getAttribute("data-action");

  if (action === "toggle-new-bookmark") {
    appState.newBookmarkExpanded = !appState.newBookmarkExpanded;
    renderShell();
    return;
  }

  if (action === "save-bookmark") {
    if (!appState.bookmarkUrl.trim()) {
      return;
    }

    appState.bookmarkUrl = "";
    appState.newBookmarkExpanded = false;
    renderShell();
    return;
  }

  if (action === "create-category") {
    appState.createCategoryState = "active";
    appState.isCreatingCategory = true;
    appState.newCategoryName = "New Category";
    renderShell();
    return;
  }
}

function finalizeNewCategory() {
  const trimmedName = appState.newCategoryName.trim();
  appState.createdCategoryNames.push(trimmedName || "New Category");
  appState.createCategoryState = "default";
  appState.isCreatingCategory = false;
  appState.newCategoryName = "New Category";
  renderShell();
}

function handleAppInput(event) {
  if (event.target.matches("[data-role='new-bookmark-input']")) {
    appState.bookmarkUrl = event.target.value;
    const saveButton = app.querySelector(".new-bookmark-save");
    if (saveButton) {
      saveButton.classList.toggle("is-disabled", !appState.bookmarkUrl.trim());
    }
    return;
  }

  if (event.target.matches("[data-role='new-category-input']")) {
    appState.newCategoryName = event.target.value;
  }
}

function handleAppKeydown(event) {
  if (!event.target.matches("[data-role='new-bookmark-input']")) {
    if (event.target.matches("[data-role='new-category-input']")) {
      if (event.key === "Enter") {
        finalizeNewCategory();
      }

      if (event.key === "Escape") {
        appState.createCategoryState = "default";
        appState.isCreatingCategory = false;
        appState.newCategoryName = "New Category";
        renderShell();
      }
      return;
    }

    if (event.key === "Escape" && appState.newBookmarkExpanded) {
      appState.newBookmarkExpanded = false;
      renderShell();
    }
    return;
  }

  if (event.key === "Enter" && appState.bookmarkUrl.trim()) {
    appState.bookmarkUrl = "";
    appState.newBookmarkExpanded = false;
    renderShell();
  }

  if (event.key === "Escape") {
    appState.newBookmarkExpanded = false;
    renderShell();
  }
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
  app.addEventListener("click", handleAppClick);
  app.addEventListener("input", handleAppInput);
  app.addEventListener("keydown", handleAppKeydown);
}

init();
