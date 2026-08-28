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
const BOOKMARK_CARD_FOLDER_ICON = "https://www.figma.com/api/mcp/asset/ced824d2-419d-40d6-8d93-73c0f483a758.svg";
const BOOKMARK_CARD_STATUS_ICON = "https://www.figma.com/api/mcp/asset/2d53fa14-ae79-4f83-9a12-f9e17b81785d.svg";
const BOOKMARK_CARD_IMAGE = "https://www.figma.com/api/mcp/asset/36c69744-24a8-48c5-9137-2083bbd8c4d3.png";
const BOOKMARK_CARD_PREVIEW_ICON = "https://www.figma.com/api/mcp/asset/cd99a904-e37b-4824-94f8-d475665e7b89.svg";
const BOOKMARK_CARD_EDIT_ICON = "https://www.figma.com/api/mcp/asset/b401eac2-d597-40e6-9cd9-25ee1f552b44.svg";
const BOOKMARK_CARD_CHECKBOX_DEFAULT_ICON = "https://www.figma.com/api/mcp/asset/5ceeea3d-f361-4901-90ce-2d26977860d9.svg";
const BOOKMARK_CARD_CHECKBOX_ACTIVE_ICON = "https://www.figma.com/api/mcp/asset/adc55625-92fc-4076-a15f-78aef1d3fef2.svg";
const PREVIEW_GO_BACK_ICON = "https://www.figma.com/api/mcp/asset/84a29a21-3060-4208-a0f7-607d518413dc.svg";
const PREVIEW_SAVE_ICON = "https://www.figma.com/api/mcp/asset/1ea3982f-40a6-4866-ace3-27db56a37222.svg";
const PREVIEW_OPEN_BROWSER_ICON = "https://www.figma.com/api/mcp/asset/051a2ab3-1d04-4723-845c-4177958427f6.svg";
const PREVIEW_EXPORT_ICON = "https://www.figma.com/api/mcp/asset/5f26ce51-9981-4171-97b7-07cf7a229dc3.svg";
const PREVIEW_CANCEL_ICON = "https://www.figma.com/api/mcp/asset/25da3f51-5df0-4680-9765-cd8656a883ec.svg";
const PREVIEW_SAMPLE_IMAGE = "https://www.figma.com/api/mcp/asset/53e379e3-fe1d-47b7-aeb1-8c6d5a809aeb.png";
const BOOKMARK_IMAGE_FETCH_DURATION_MS = 1800;

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
  createdCategoryNames: [],
  selectedBookmarkId: null,
  activeContentView: "cards",
  previewBookmarkId: null,
  bookmarks: [
    {
      id: "sample-bookmark-1",
      title: "What is a CMS? A 101 Guide",
      url: "sampleurltext.com",
      category: "Uncategorized",
      date: "28 Aug 2026",
      image: BOOKMARK_CARD_IMAGE,
      previewImage: PREVIEW_SAMPLE_IMAGE,
      isFetchingImage: true,
      subtitle: "A CMS, or content management system, is a tool that helps you create, edit, and organize content on a website without needing to know how to code. It lets you easily update text, images, and pages using simple controls.",
      datePublished: "04/08/2024",
      author: "Seriously Published",
      articleHtml: `
        <p><strong>What Is a Content Management System (CMS)?</strong></p>
        <p>A Content Management System (CMS) is software that allows people to create, manage, and update digital content, usually a website, without needing advanced technical skills. Instead of writing code every time you want to change a page, a CMS provides an easy-to-use interface where content can be added, edited, or removed quickly.</p>
        <p>Before CMS platforms existed, building and updating websites required knowledge of programming languages like HTML, CSS, and PHP. Even small changes meant editing code files manually. A CMS removes most of that complexity by separating content (text, images, videos) from design and functionality.</p>
        <p>In simple terms, a CMS lets you focus on what you want to say, rather than how the website is built behind the scenes.</p>
        <p><strong>Core Functions of a CMS</strong></p>
        <p>Most CMS platforms share a common set of features that make managing websites easier and more efficient.</p>
        <p><strong>1. Content Creation and Editing</strong></p>
        <p>A CMS provides visual editors where users can:</p>
        <p>Write and format text</p>
        <p>Add images, videos, and links</p>
        <p>Create pages and blog posts</p>
        <p>Preview content before publishing</p>
        <p>This is similar to using a word processor, making it accessible even for beginners.</p>
        <p><strong>2. Content Organization</strong></p>
        <p>CMSs help organize content in logical ways, such as:</p>
        <p>Categories and tags</p>
        <p>Menus and navigation structures</p>
        <p>Media libraries for images and files</p>
        <p>This makes large websites easier to manage and helps visitors find information quickly.</p>
        <p><strong>3. User Management</strong></p>
        <p>Many CMS platforms support multiple users, each with different permissions. For example:</p>
        <p>Administrators control the entire site</p>
        <p>Editors manage and publish content</p>
        <p>Authors write content but cannot change site settings</p>
        <p>This is especially useful for teams, businesses, or organizations.</p>
        <p><strong>4. Design and Layout Control</strong></p>
        <p>Instead of designing every page manually, CMSs use templates or themes. These control how content looks while allowing you to change the content independently.</p>
        <p><strong>Why CMS Platforms Are So Popular</strong></p>
        <p>CMS platforms are widely used because they save time, reduce costs, and make website ownership more practical for non-technical users.</p>
        <p>Key benefits include:</p>
        <p>No need to code for everyday updates</p>
        <p>Faster content publishing</p>
        <p>Consistent design across pages</p>
        <p>Easier collaboration</p>
        <p>Scalability as a website grows</p>
        <p>Because of these advantages, CMSs are used for blogs, business websites, news platforms, online stores, and even large enterprise websites.</p>
        <p><strong>Open-Source vs Proprietary CMSs</strong></p>
        <p>CMS platforms generally fall into two categories:</p>
        <p><strong>Open-Source CMSs</strong></p>
        <p>Free to use</p>
        <p>Source code is publicly available</p>
        <p>Highly customizable</p>
        <p>Large community support</p>
        <p>Examples include WordPress.org, Joomla, and Drupal.</p>
        <p><strong>Proprietary CMSs</strong></p>
        <p>Usually paid services</p>
        <p>Often hosted and managed by the provider</p>
        <p>Limited customization compared to open-source systems</p>
        <p>Each type has advantages, but open-source CMSs are especially popular due to flexibility and cost-effectiveness.</p>
        <p><strong>Introducing WordPress.org</strong></p>
        <p>WordPress.org is the most widely used CMS in the world and is an open-source platform. It began as a blogging tool but has evolved into a full-featured CMS capable of powering almost any type of website.</p>
        <p>It is important to distinguish WordPress.org from WordPress.com:</p>
        <p>WordPress.org is self-hosted and offers full control</p>
        <p>WordPress.com is a hosted service with limitations unless you pay for higher plans</p>
        <p>When people refer to WordPress as a CMS in a professional or flexible sense, they usually mean WordPress.org.</p>
        <p><strong>How WordPress.org Works as a CMS</strong></p>
        <p>WordPress.org provides a dashboard where users manage all aspects of their site. From this central area, you can create content, customize design, install features, and manage users.</p>
        <p><strong>Content in WordPress</strong></p>
        <p>WordPress uses two main content types:</p>
        <p>Posts - Typically used for blog articles or news updates</p>
        <p>Pages - Used for static content like "About" or "Contact" pages</p>
        <p>Content is created using a block-based editor, allowing users to add elements such as headings, images, buttons, and videos without writing code.</p>
        <p><strong>Themes: Controlling the Look of Your Site</strong></p>
        <p>In WordPress, themes control the visual appearance of a website. A theme defines:</p>
        <p>Layout</p>
        <p>Colors and fonts</p>
        <p>Page structure</p>
        <p>Responsive design for mobile devices</p>
        <p>Users can change themes without losing their content, which makes redesigning a website much easier than rebuilding it from scratch.</p>
        <p><strong>Plugins: Extending Functionality</strong></p>
        <p>One of WordPress.org's greatest strengths is its plugin system. Plugins add new features without modifying core software.</p>
        <p>Common uses for plugins include:</p>
        <p>Search engine optimization (SEO)</p>
        <p>Contact forms</p>
        <p>Security enhancements</p>
        <p>Performance and caching</p>
        <p>E-commerce (e.g., WooCommerce)</p>
        <p>There are thousands of free and paid plugins available, allowing WordPress to scale from a simple blog to a complex business platform.</p>
        <p><strong>User Roles and Permissions in WordPress</strong></p>
        <p>WordPress includes built-in user roles such as:</p>
        <p>Administrator</p>
        <p>Editor</p>
        <p>Author</p>
        <p>Contributor</p>
        <p>Subscriber</p>
        <p>Each role has defined permissions, making WordPress suitable for teams and content-heavy websites.</p>
        <p><strong>Why WordPress.org Is So Widely Used</strong></p>
        <p>WordPress.org is popular because it balances simplicity with power. Beginners can launch a website quickly, while developers can deeply customize functionality.</p>
        <p>Key reasons for its popularity include:</p>
        <p>Free and open-source</p>
        <p>Large global community</p>
        <p>Extensive documentation</p>
        <p>Frequent updates and improvements</p>
        <p>Flexibility for many use cases</p>
        <p><strong>Conclusion</strong></p>
        <p>A CMS is a tool that simplifies website creation and management by removing the need for constant coding. It allows users to focus on content, structure, and growth. WordPress.org exemplifies this concept by offering a flexible, powerful, and user-friendly CMS that can support everything from personal blogs to large-scale business websites.</p>
      `
    }
  ]
};

const BOOKMARK_PRIMARY_LINKS = [
  { label: "All Bookmarks", count: "462", state: "active", icon: BOOKMARK_FOLDER_ICON },
  { label: "Uncategorized", count: "4", state: "default", icon: BOOKMARK_FOLDER_ICON },
  { label: "Deleted Items", count: "0", state: "default", icon: BOOKMARK_TRASH_ICON, iconClass: "bookmark-trash-icon", iconFrameClass: "bookmark-trash-frame" }
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

function renderUtilityButton({ action, label, icon, width, className = "", iconClassName = "", state = "default" }) {
  const stateClass = state !== "default" ? ` is-${state}` : "";
  const widthStyle = width ? ` style="width:${width}px"` : "";

  return `
    <button class="utility-button${stateClass}${className ? ` ${className}` : ""}" type="button" data-action="${action}"${widthStyle}>
      <span class="utility-button-icon${iconClassName ? ` ${iconClassName}` : ""}">
        <img src="${icon}" alt="" width="20" height="20" />
      </span>
      <span class="utility-button-label">${label}</span>
    </button>
  `;
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function formatBookmarkDate(date) {
  return date.toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric"
  });
}

function getBookmarkTitleFromUrl(url) {
  try {
    const normalizedUrl = /^https?:\/\//i.test(url) ? url : `https://${url}`;
    const { hostname, pathname } = new URL(normalizedUrl);
    const cleanHostname = hostname.replace(/^www\./i, "");
    const pathLabel = pathname
      .split("/")
      .filter(Boolean)
      .pop();
    const sourceLabel = pathLabel || cleanHostname.split(".")[0] || "bookmark";

    return sourceLabel
      .split(/[-_]+/)
      .filter(Boolean)
      .map((segment) => segment.charAt(0).toUpperCase() + segment.slice(1))
      .join(" ") || "New Bookmark";
  } catch (error) {
    return "New Bookmark";
  }
}

function getBookmarkUrlLabel(url) {
  try {
    const normalizedUrl = /^https?:\/\//i.test(url) ? url : `https://${url}`;
    const { hostname } = new URL(normalizedUrl);
    return hostname.replace(/^www\./i, "") || url;
  } catch (error) {
    return url;
  }
}

function buildPreviewArticle(bookmarkTitle, bookmarkUrl) {
  return `
    <p><strong>${escapeHtml(bookmarkTitle)}</strong></p>
    <p>This bookmark was saved from ${escapeHtml(bookmarkUrl)} and is ready for a richer article preview once live page parsing is connected. For now, MediaPlace is using structured placeholder content so the preview experience behaves like the final app.</p>
    <p>The preview pane is designed to hold the featured image, title, supporting description, metadata such as publication date and author when available, and the main article body in a readable long-form layout.</p>
    <p>As we continue building this out, this area can be populated from real fetched content and mapped into the same design without changing the layout system.</p>
  `;
}

function renderBookmarkCard(bookmark) {
  const isSelected = appState.selectedBookmarkId === bookmark.id;
  const selectedClass = isSelected ? " is-selected" : "";
  const checkboxIcon = isSelected ? BOOKMARK_CARD_CHECKBOX_ACTIVE_ICON : BOOKMARK_CARD_CHECKBOX_DEFAULT_ICON;
  const imageContent = bookmark.isFetchingImage
    ? `
        <div class="bookmark-card-fetch">
          <span class="bookmark-card-fetch-text">Fetching Image</span>
          <span class="bookmark-card-fetch-shine" aria-hidden="true"></span>
        </div>
      `
    : `<img class="bookmark-card-image" src="${bookmark.image}" alt="" />`;

  return `
    <article class="bookmark-card${selectedClass}" data-bookmark-id="${bookmark.id}">
      <div class="bookmark-card-image-shell">
        ${imageContent}
        <div class="bookmark-card-hover-gradient"></div>

        <div class="bookmark-card-overlay">
          <button class="bookmark-card-checkbox${isSelected ? " is-selected" : ""}" type="button" data-action="toggle-bookmark-selection" data-bookmark-id="${bookmark.id}" aria-label="Select bookmark" aria-pressed="${isSelected}">
            <img src="${checkboxIcon}" alt="" width="20" height="20" />
          </button>

          <div class="bookmark-card-actions" aria-hidden="${isSelected}">
            ${renderUtilityButton({
              action: "preview-bookmark",
              label: "Preview",
              icon: BOOKMARK_CARD_PREVIEW_ICON,
              width: 89,
              className: "bookmark-card-action"
            })}
            ${renderUtilityButton({
              action: "edit-bookmark",
              label: "Edit",
              icon: BOOKMARK_CARD_EDIT_ICON,
              width: 66,
              className: "bookmark-card-action",
              iconClassName: "utility-button-icon-edit"
            })}
          </div>
        </div>
      </div>

      <div class="bookmark-card-body">
        <div class="bookmark-card-heading-group">
          <h3 class="bookmark-card-title">${bookmark.title}</h3>
          <div class="bookmark-card-url-row">
            <span class="bookmark-card-url">${bookmark.url}</span>
            <img class="bookmark-card-status" src="${BOOKMARK_CARD_STATUS_ICON}" alt="" width="6" height="6" />
          </div>
        </div>

        <div class="bookmark-card-meta-row">
          <div class="bookmark-card-category">
            <img class="bookmark-card-category-icon" src="${BOOKMARK_CARD_FOLDER_ICON}" alt="" width="16" height="16" />
            <span class="bookmark-card-category-text">${bookmark.category}</span>
          </div>
          <span class="bookmark-card-date">${bookmark.date}</span>
        </div>
      </div>
    </article>
  `;
}

function renderBookmarkCards() {
  return `
    <div class="bookmark-card-canvas">
      ${appState.bookmarks.map(renderBookmarkCard).join("")}
    </div>
  `;
}

function renderPreviewMetaRow(bookmark) {
  const metaItems = [];

  if (bookmark.datePublished) {
    metaItems.push(`<span class="preview-pane-meta-item">Date Published: ${escapeHtml(bookmark.datePublished)}</span>`);
  }

  if (bookmark.author) {
    metaItems.push(`<span class="preview-pane-meta-item preview-pane-meta-item-right">Author: ${escapeHtml(bookmark.author)}</span>`);
  }

  if (!metaItems.length) {
    metaItems.push(`<span class="preview-pane-meta-item">Added: ${escapeHtml(bookmark.date)}</span>`);
  }

  return metaItems.join("");
}

function renderPreviewPane() {
  const bookmark = appState.bookmarks.find((item) => item.id === appState.previewBookmarkId) || appState.bookmarks[0];
  const subtitleMarkup = bookmark.subtitle
    ? `<p class="preview-pane-subtitle">${escapeHtml(bookmark.subtitle)}</p>`
    : "";
  const articleMarkup = bookmark.articleHtml || `<p>${escapeHtml(bookmark.title)} was saved to MediaPlace.</p>`;

  return `
    <section class="preview-pane">
      <div class="preview-pane-nav-wrapper">
        <div class="preview-pane-nav">
          ${renderUtilityButton({
            action: "close-preview",
            label: "Go back",
            icon: PREVIEW_GO_BACK_ICON,
            width: 91,
            className: "preview-pane-button",
            iconClassName: "utility-button-icon-back"
          })}

          <div class="preview-pane-nav-actions">
            <div class="preview-pane-nav-group">
              ${renderUtilityButton({
                action: "save-permanent-copy",
                label: "Save permanent copy",
                icon: PREVIEW_SAVE_ICON,
                width: 170,
                className: "preview-pane-button",
                iconClassName: "utility-button-icon-save"
              })}
              ${renderUtilityButton({
                action: "open-bookmark-browser",
                label: "Open in browser",
                icon: PREVIEW_OPEN_BROWSER_ICON,
                width: 138,
                className: "preview-pane-button",
                iconClassName: "utility-button-icon-open"
              })}
              ${renderUtilityButton({
                action: "export-bookmark",
                label: "Export bookmark",
                icon: PREVIEW_EXPORT_ICON,
                width: 142,
                className: "preview-pane-button",
                iconClassName: "utility-button-icon-export"
              })}
              ${renderUtilityButton({
                action: "edit-bookmark",
                label: "Edit",
                icon: BOOKMARK_CARD_EDIT_ICON,
                width: 66,
                className: "preview-pane-button",
                iconClassName: "utility-button-icon-edit"
              })}
            </div>
            ${renderUtilityButton({
              action: "close-preview",
              label: "Cancel",
              icon: PREVIEW_CANCEL_ICON,
              width: 84,
              className: "preview-pane-button",
              iconClassName: "utility-button-icon-cancel"
            })}
          </div>
        </div>
      </div>

      <div class="preview-pane-scrollbar" data-role="preview-scrollbar" aria-hidden="true">
        <div class="preview-pane-scroll-thumb" data-role="preview-scroll-thumb"></div>
      </div>

      <div class="preview-pane-content-shell">
        <div class="preview-pane-content-wrapper">
          <div class="preview-pane-head">
            <div class="preview-pane-image">
              <img src="${bookmark.previewImage || bookmark.image}" alt="" />
            </div>

            <div class="preview-pane-heading-block">
              <h1 class="preview-pane-title">${escapeHtml(bookmark.title)}</h1>
              ${subtitleMarkup}
            </div>

            <div class="preview-pane-meta-row">
              ${renderPreviewMetaRow(bookmark)}
            </div>
          </div>

          <article class="preview-pane-article">
            ${articleMarkup}
          </article>
        </div>
      </div>
    </section>
  `;
}

function queueBookmarkImageReveal(bookmarkId) {
  window.setTimeout(() => {
    const bookmark = appState.bookmarks.find((item) => item.id === bookmarkId);
    if (!bookmark) {
      return;
    }

    bookmark.isFetchingImage = false;
    renderShell();
  }, BOOKMARK_IMAGE_FETCH_DURATION_MS);
}

function renderContentPanel() {
  return appState.activeContentView === "preview" ? renderPreviewPane() : renderBookmarkCards();
}

function setupPreviewPaneScroll() {
  const previewPane = app.querySelector(".preview-pane");
  const scrollContainer = app.querySelector(".preview-pane-content-shell");
  const scrollbar = app.querySelector("[data-role='preview-scrollbar']");
  const scrollThumb = app.querySelector("[data-role='preview-scroll-thumb']");

  if (!previewPane || !scrollContainer || !scrollbar || !scrollThumb) {
    return;
  }

  const minThumbHeight = 170;
  let dragState = null;

  function syncThumbPosition() {
    const maxScrollTop = Math.max(scrollContainer.scrollHeight - scrollContainer.clientHeight, 0);
    const railHeight = scrollbar.clientHeight;
    const thumbHeight = maxScrollTop > 0
      ? Math.max((scrollContainer.clientHeight / scrollContainer.scrollHeight) * railHeight, minThumbHeight)
      : railHeight;
    const maxThumbTop = Math.max(railHeight - thumbHeight, 0);
    const thumbTop = maxScrollTop > 0 ? (scrollContainer.scrollTop / maxScrollTop) * maxThumbTop : 0;

    scrollThumb.style.height = `${thumbHeight}px`;
    scrollThumb.style.transform = `translateY(${thumbTop}px)`;
  }

  function handlePointerMove(event) {
    if (!dragState) {
      return;
    }

    const railHeight = scrollbar.clientHeight;
    const thumbHeight = scrollThumb.offsetHeight;
    const maxThumbTop = Math.max(railHeight - thumbHeight, 0);
    const nextThumbTop = Math.min(Math.max(event.clientY - dragState.pointerOffset, 0), maxThumbTop);
    const maxScrollTop = Math.max(scrollContainer.scrollHeight - scrollContainer.clientHeight, 0);
    const nextScrollTop = maxThumbTop > 0 ? (nextThumbTop / maxThumbTop) * maxScrollTop : 0;

    scrollContainer.scrollTop = nextScrollTop;
  }

  function clearDragState() {
    dragState = null;
    window.removeEventListener("pointermove", handlePointerMove);
    window.removeEventListener("pointerup", clearDragState);
  }

  scrollContainer.addEventListener("scroll", syncThumbPosition);

  previewPane.addEventListener("wheel", (event) => {
    if (event.target.closest(".preview-pane-content-shell")) {
      return;
    }

    scrollContainer.scrollTop += event.deltaY;
    event.preventDefault();
  }, { passive: false });

  scrollbar.addEventListener("pointerdown", (event) => {
    if (event.target === scrollThumb) {
      dragState = {
        pointerOffset: event.clientY - scrollThumb.getBoundingClientRect().top
      };

      window.addEventListener("pointermove", handlePointerMove);
      window.addEventListener("pointerup", clearDragState);
      return;
    }

    const railRect = scrollbar.getBoundingClientRect();
    const thumbHeight = scrollThumb.offsetHeight;
    const maxScrollTop = Math.max(scrollContainer.scrollHeight - scrollContainer.clientHeight, 0);
    const maxThumbTop = Math.max(scrollbar.clientHeight - thumbHeight, 0);
    const nextThumbTop = Math.min(Math.max(event.clientY - railRect.top - thumbHeight / 2, 0), maxThumbTop);
    const nextScrollTop = maxThumbTop > 0 ? (nextThumbTop / maxThumbTop) * maxScrollTop : 0;

    scrollContainer.scrollTop = nextScrollTop;
  });

  syncThumbPosition();
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
                ${renderContentPanel()}
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

  if (appState.activeContentView === "preview") {
    setupPreviewPaneScroll();
  }
}

function handleAppClick(event) {
  const actionTarget = event.target.closest("[data-action]");
  if (!actionTarget) {
    const bookmarkCard = event.target.closest("[data-bookmark-id]");
    if (bookmarkCard && !event.target.closest(".bookmark-card-actions")) {
      const bookmarkId = bookmarkCard.getAttribute("data-bookmark-id");
      appState.selectedBookmarkId = appState.selectedBookmarkId === bookmarkId ? null : bookmarkId;
      renderShell();
      return;
    }

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

    const rawUrl = appState.bookmarkUrl.trim();
    const bookmarkTitle = getBookmarkTitleFromUrl(rawUrl);
    const bookmarkUrl = getBookmarkUrlLabel(rawUrl);
    const nextBookmark = {
      id: `bookmark-${Date.now()}`,
      title: bookmarkTitle,
      url: bookmarkUrl,
      category: "Uncategorized",
      date: formatBookmarkDate(new Date()),
      image: BOOKMARK_CARD_IMAGE,
      previewImage: PREVIEW_SAMPLE_IMAGE,
      isFetchingImage: true,
      articleHtml: buildPreviewArticle(bookmarkTitle, bookmarkUrl)
    };

    appState.bookmarks.unshift(nextBookmark);
    appState.bookmarkUrl = "";
    appState.newBookmarkExpanded = false;
    renderShell();
    queueBookmarkImageReveal(nextBookmark.id);
    return;
  }

  if (action === "create-category") {
    appState.createCategoryState = "active";
    appState.isCreatingCategory = true;
    appState.newCategoryName = "New Category";
    renderShell();
    return;
  }

  if (action === "toggle-bookmark-selection") {
    const bookmarkId = actionTarget.getAttribute("data-bookmark-id");
    appState.selectedBookmarkId = appState.selectedBookmarkId === bookmarkId ? null : bookmarkId;
    renderShell();
    return;
  }

  if (action === "preview-bookmark") {
    const bookmarkId = actionTarget.closest("[data-bookmark-id]")?.getAttribute("data-bookmark-id");
    if (bookmarkId) {
      appState.previewBookmarkId = bookmarkId;
      appState.activeContentView = "preview";
      renderShell();
    }
    return;
  }

  if (action === "close-preview") {
    appState.activeContentView = "cards";
    appState.previewBookmarkId = null;
    renderShell();
    return;
  }

  if (action === "save-permanent-copy" || action === "open-bookmark-browser" || action === "export-bookmark" || action === "edit-bookmark") {
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
    const rawUrl = appState.bookmarkUrl.trim();
    const bookmarkTitle = getBookmarkTitleFromUrl(rawUrl);
    const bookmarkUrl = getBookmarkUrlLabel(rawUrl);
    const nextBookmark = {
      id: `bookmark-${Date.now()}`,
      title: bookmarkTitle,
      url: bookmarkUrl,
      category: "Uncategorized",
      date: formatBookmarkDate(new Date()),
      image: BOOKMARK_CARD_IMAGE,
      previewImage: PREVIEW_SAMPLE_IMAGE,
      isFetchingImage: true,
      articleHtml: buildPreviewArticle(bookmarkTitle, bookmarkUrl)
    };

    appState.bookmarks.unshift(nextBookmark);
    appState.bookmarkUrl = "";
    appState.newBookmarkExpanded = false;
    renderShell();
    queueBookmarkImageReveal(nextBookmark.id);
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
  const sampleBookmark = appState.bookmarks.find((bookmark) => bookmark.id === "sample-bookmark-1" && bookmark.isFetchingImage);
  if (sampleBookmark) {
    queueBookmarkImageReveal(sampleBookmark.id);
  }
  app.addEventListener("click", handleAppClick);
  app.addEventListener("input", handleAppInput);
  app.addEventListener("keydown", handleAppKeydown);
}

init();
