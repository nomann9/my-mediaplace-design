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
const CONTENT_HEADING_GRID_ICON = "https://www.figma.com/api/mcp/asset/5c9dc650-53bb-473b-a9d1-b2804de33879.svg";
const CONTENT_HEADING_LIST_ICON = "https://www.figma.com/api/mcp/asset/f4508592-039f-4d47-84b2-b594eb27090f.svg";
const CONTENT_HEADING_SORT_ICON = "https://www.figma.com/api/mcp/asset/1fa760cb-50df-4cfc-bd2c-9a3d7eb3489a.svg";
const CONTENT_HEADING_FILTER_ICON = "https://www.figma.com/api/mcp/asset/dff6dc00-bc20-4d9b-bf8a-74341a971939.svg";
const CONTENT_HEADING_ZOOM_IN_ICON = "https://www.figma.com/api/mcp/asset/b86f0e45-17a3-445a-bdb1-094973fa24bd.svg";
const CONTENT_HEADING_ZOOM_OUT_ICON = "https://www.figma.com/api/mcp/asset/bd9db7c3-bd2f-437f-9580-a3851d13bea7.svg";
const CONTENT_HEADING_KEBAB_ICON = "https://www.figma.com/api/mcp/asset/76c18ae0-a889-4392-96d3-80d8615fd602.svg";
const CONTENT_HEADING_CHEVRON_ICON = "https://www.figma.com/api/mcp/asset/accb1ea1-9379-4c28-87ef-54491ba33582.svg";
const CONTENT_HEADING_EXPORT_ICON = "https://www.figma.com/api/mcp/asset/61d44a29-73d4-4aef-8720-a2b8325b86e7.svg";
const CONTENT_SELECT_ALL_ICON = "https://www.figma.com/api/mcp/asset/adb88873-24cf-427a-badd-f086508668e8.svg";
const BOOKMARK_IMAGE_FETCH_DURATION_MS = 1800;

const FIGMA_BOOKMARK_GRID = [
  {
    id: "figma-bookmark-designing-modern-typefaces",
    title: "Designing Modern Typefaces",
    url: "studioluma.com",
    category: "Design Resources",
    date: "24 Dec 2025",
    image: "https://www.figma.com/api/mcp/asset/b28dc17c-f431-4fe6-8278-50d4c860480e.png",
    statusIcon: "https://www.figma.com/api/mcp/asset/7ff6bc2f-3644-4353-9de1-04c826884b9f.svg",
    previewImage: "https://www.figma.com/api/mcp/asset/b28dc17c-f431-4fe6-8278-50d4c860480e.png",
    isFetchingImage: false,
    isPermanentCopy: false
  },
  {
    id: "figma-bookmark-lone-street-story",
    title: "Lone Street Story",
    url: "culturecurrent.net",
    category: "Arts & Culture",
    date: "23 Dec 2025",
    image: "https://www.figma.com/api/mcp/asset/9c2257b2-b1f0-49a6-82ec-a85b8e9851ce.png",
    statusIcon: "https://www.figma.com/api/mcp/asset/ab603703-e19d-4d30-88dc-346bcb518faa.svg",
    previewImage: "https://www.figma.com/api/mcp/asset/9c2257b2-b1f0-49a6-82ec-a85b8e9851ce.png",
    isFetchingImage: false,
    isPermanentCopy: false
  },
  {
    id: "figma-bookmark-keeping-websites-secure",
    title: "Keeping Websites Secure",
    url: "wpfoundry.org",
    category: "WP Resources",
    date: "22 Dec 2025",
    image: "https://www.figma.com/api/mcp/asset/ce613400-c3a9-4cc2-8c49-8229612318ba.png",
    statusIcon: "https://www.figma.com/api/mcp/asset/8b3f271f-0709-4751-9287-a3bbe2708f21.svg",
    previewImage: "https://www.figma.com/api/mcp/asset/ce613400-c3a9-4cc2-8c49-8229612318ba.png",
    isFetchingImage: false,
    isPermanentCopy: true
  },
  {
    id: "figma-bookmark-my-daily-basketball-diary",
    title: "My Daily Basketball Diary",
    url: "urbanhoops.io",
    category: "Sports",
    date: "21 Dec 2025",
    image: "https://www.figma.com/api/mcp/asset/fc1b9f02-9578-45eb-b357-012d95045eeb.png",
    statusIcon: "https://www.figma.com/api/mcp/asset/bbcf7d8f-d2e3-4a90-9f2d-b355f0790ee5.svg",
    previewImage: "https://www.figma.com/api/mcp/asset/fc1b9f02-9578-45eb-b357-012d95045eeb.png",
    isFetchingImage: false,
    isPermanentCopy: false
  },
  {
    id: "figma-bookmark-the-widows-happiness",
    title: "The Widows' Happiness",
    url: "thewanderingsoul.com",
    category: "Arts & Culture",
    date: "21 Dec 2025",
    image: "https://www.figma.com/api/mcp/asset/8bea497b-221e-4a21-8201-12ff1d0972f6.png",
    statusIcon: "https://www.figma.com/api/mcp/asset/af7c3979-1b6e-42a6-a242-e5b92cfd27b2.svg",
    previewImage: "https://www.figma.com/api/mcp/asset/8bea497b-221e-4a21-8201-12ff1d0972f6.png",
    isFetchingImage: false,
    isPermanentCopy: true
  },
  {
    id: "figma-bookmark-blue-parrots-of-southern-africa",
    title: "Blue Parrots of Southern Africa",
    url: "youtube.com",
    category: "YouTube Channels",
    date: "21 Dec 2025",
    image: "https://www.figma.com/api/mcp/asset/fd6816e5-b485-4222-aad8-2397e2d776eb.png",
    statusIcon: "https://www.figma.com/api/mcp/asset/c35b6e2a-53eb-4c0f-91d8-3beeec4b1664.svg",
    previewImage: "https://www.figma.com/api/mcp/asset/fd6816e5-b485-4222-aad8-2397e2d776eb.png",
    isFetchingImage: false,
    isPermanentCopy: false
  },
  {
    id: "figma-bookmark-theyyam-a-ritual-performance",
    title: "Theyyam - A Ritual Performance",
    url: "globalnest.com",
    category: "Arts & Culture",
    date: "20 Dec 2025",
    image: "https://www.figma.com/api/mcp/asset/56311d4d-56a2-44f0-a427-5d08c53cabe6.png",
    statusIcon: "https://www.figma.com/api/mcp/asset/170c88a7-d50b-4929-aa0e-f4758bb13c71.svg",
    previewImage: "https://www.figma.com/api/mcp/asset/56311d4d-56a2-44f0-a427-5d08c53cabe6.png",
    isFetchingImage: false,
    isPermanentCopy: true
  },
  {
    id: "figma-bookmark-a-soulful-connection-within",
    title: "A Soulful Connection Within",
    url: "yourgoodsoul.com",
    category: "Arts & Culture",
    date: "20 Dec 2025",
    image: "https://www.figma.com/api/mcp/asset/9c62b37c-d794-4001-b953-ef67a1ce7d82.png",
    statusIcon: "https://www.figma.com/api/mcp/asset/be4ca7e9-67b6-427c-bdd4-32f8d45ee916.svg",
    previewImage: "https://www.figma.com/api/mcp/asset/9c62b37c-d794-4001-b953-ef67a1ce7d82.png",
    isFetchingImage: false,
    isPermanentCopy: true
  },
  {
    id: "figma-bookmark-swimming-in-deep-ocean",
    title: "Swimming in Deep Ocean",
    url: "sportsphere.io",
    category: "Sports",
    date: "20 Dec 2025",
    image: "https://www.figma.com/api/mcp/asset/112a6f0f-96cf-42c9-aed2-55e591480433.png",
    statusIcon: "https://www.figma.com/api/mcp/asset/35f8cba7-26e9-46a7-a83d-fc45a7d47694.svg",
    previewImage: "https://www.figma.com/api/mcp/asset/112a6f0f-96cf-42c9-aed2-55e591480433.png",
    isFetchingImage: false,
    isPermanentCopy: false
  },
  {
    id: "figma-bookmark-joy-of-coding-in-the-cloud",
    title: "Joy of Coding in the Cloud",
    url: "wplaunchlab.com",
    category: "WP Resources",
    date: "19 Dec 2025",
    image: "https://www.figma.com/api/mcp/asset/d2299934-c92d-4a50-a4f6-54c9f7b26404.png",
    statusIcon: "https://www.figma.com/api/mcp/asset/753e71c8-8709-4e14-bc3a-9ceee8e729f5.svg",
    previewImage: "https://www.figma.com/api/mcp/asset/d2299934-c92d-4a50-a4f6-54c9f7b26404.png",
    isFetchingImage: false,
    isPermanentCopy: false
  },
  {
    id: "figma-bookmark-dizzying-towers-of-colours",
    title: "Dizzying Towers of Colours",
    url: "canvastheory.art",
    category: "Design Resources",
    date: "19 Dec 2025",
    image: "https://www.figma.com/api/mcp/asset/c23ed93b-7713-4bed-8265-ee3eb27d388c.png",
    statusIcon: "https://www.figma.com/api/mcp/asset/3f726b90-1097-4caa-b26b-006893d9ac3a.svg",
    previewImage: "https://www.figma.com/api/mcp/asset/c23ed93b-7713-4bed-8265-ee3eb27d388c.png",
    isFetchingImage: false,
    isPermanentCopy: true
  },
  {
    id: "figma-bookmark-a-very-cold-himalayan-odyssey",
    title: "A Very Cold Himalayan Odyssey",
    url: "wanderhaven.com",
    category: "Arts & Culture",
    date: "18 Dec 2025",
    image: "https://www.figma.com/api/mcp/asset/5b09c96e-a310-4f9f-9846-b8b9435dda8c.png",
    statusIcon: "https://www.figma.com/api/mcp/asset/d4286602-b8b6-4349-af47-ef1cfc698c04.svg",
    previewImage: "https://www.figma.com/api/mcp/asset/5b09c96e-a310-4f9f-9846-b8b9435dda8c.png",
    isFetchingImage: false,
    isPermanentCopy: false
  },
  {
    id: "figma-bookmark-evolution-of-a-friendly-jellyfish",
    title: "Evolution of a Friendly Jellyfish",
    url: "youtube.com",
    category: "YouTube Channels",
    date: "17 Dec 2025",
    image: "https://www.figma.com/api/mcp/asset/49dff14d-2805-45a5-b7b1-0f62cdbfc057.png",
    statusIcon: "https://www.figma.com/api/mcp/asset/7aceb57f-ecb1-47bd-ad50-727ab0464664.svg",
    previewImage: "https://www.figma.com/api/mcp/asset/49dff14d-2805-45a5-b7b1-0f62cdbfc057.png",
    isFetchingImage: false,
    isPermanentCopy: false
  },
  {
    id: "figma-bookmark-the-atlas-of-forgotten-dreams",
    title: "The Atlas of Forgotten Dreams",
    url: "pageturnerpress.com",
    category: "Uncategorized",
    date: "17 Dec 2025",
    image: "https://www.figma.com/api/mcp/asset/ea62baf5-9911-48eb-bede-8caeac28f5d2.png",
    statusIcon: "https://www.figma.com/api/mcp/asset/33f39bf7-7353-41dc-ac78-b43050882b64.svg",
    previewImage: "https://www.figma.com/api/mcp/asset/ea62baf5-9911-48eb-bede-8caeac28f5d2.png",
    isFetchingImage: false,
    isPermanentCopy: false
  },
  {
    id: "figma-bookmark-wish-good-things-last-longer",
    title: "Wish Good Things Last Longer",
    url: "globalnest.com",
    category: "Arts & Culture",
    date: "16 Dec 2025",
    image: "https://www.figma.com/api/mcp/asset/08ae3bd1-402c-469b-b756-05ed9b502de5.png",
    statusIcon: "https://www.figma.com/api/mcp/asset/a94fa835-f955-4a6f-ac64-ae029874d725.svg",
    previewImage: "https://www.figma.com/api/mcp/asset/08ae3bd1-402c-469b-b756-05ed9b502de5.png",
    isFetchingImage: false,
    isPermanentCopy: true
  },
  {
    id: "figma-bookmark-the-new-egyptian-vacation",
    title: "The New Egyptian Vacation",
    url: "musestreet.com",
    category: "Arts & Culture",
    date: "16 Dec 2025",
    image: "https://www.figma.com/api/mcp/asset/97473ec3-7028-4368-a952-546489494e3c.png",
    statusIcon: "https://www.figma.com/api/mcp/asset/7f74e4ab-0635-4e97-a18b-f0383f57995b.svg",
    previewImage: "https://www.figma.com/api/mcp/asset/97473ec3-7028-4368-a952-546489494e3c.png",
    isFetchingImage: false,
    isPermanentCopy: false
  },
  {
    id: "figma-bookmark-whispers-in-the-aether",
    title: "Whispers in the Aether",
    url: "youtube.com",
    category: "YouTube Channels",
    date: "14 Dec 2025",
    image: "https://www.figma.com/api/mcp/asset/0c70d02f-3e86-4b3f-ae90-d2bf52ada513.png",
    statusIcon: "https://www.figma.com/api/mcp/asset/dfed5d92-4d66-46bc-8044-9c2f2d49d74a.svg",
    previewImage: "https://www.figma.com/api/mcp/asset/0c70d02f-3e86-4b3f-ae90-d2bf52ada513.png",
    isFetchingImage: false,
    isPermanentCopy: false
  },
  {
    id: "figma-bookmark-subtle-neuronic-condemnation",
    title: "Subtle Neuronic Condemnation",
    url: "wanderhaven.com",
    category: "Arts & Culture",
    date: "13 Dec 2025",
    image: "https://www.figma.com/api/mcp/asset/687d1116-25e8-4ff5-8eab-5dcce001fb61.png",
    statusIcon: "https://www.figma.com/api/mcp/asset/72d8880b-0ab8-4655-8309-0895ab560d6c.svg",
    previewImage: "https://www.figma.com/api/mcp/asset/687d1116-25e8-4ff5-8eab-5dcce001fb61.png",
    isFetchingImage: false,
    isPermanentCopy: false
  },
  {
    id: "figma-bookmark-managing-client-expectations",
    title: "Managing Client Expectations",
    url: "themecrafts.com",
    category: "WP Resources",
    date: "13 Dec 2025",
    image: "https://www.figma.com/api/mcp/asset/9c8f4680-cb59-4bdd-a337-edf386aae937.png",
    statusIcon: "https://www.figma.com/api/mcp/asset/cb0caa5e-ffb1-455e-b432-86a16eb8df9f.svg",
    previewImage: "https://www.figma.com/api/mcp/asset/9c8f4680-cb59-4bdd-a337-edf386aae937.png",
    isFetchingImage: false,
    isPermanentCopy: false
  },
  {
    id: "figma-bookmark-summer-of-25",
    title: "Summer of 25!",
    url: "thepalettepost.co",
    category: "Uncategorized",
    date: "13 Dec 2025",
    image: "https://www.figma.com/api/mcp/asset/7aabd4ca-bdbf-4bab-ae31-34998e255071.png",
    statusIcon: "https://www.figma.com/api/mcp/asset/04e7178b-e6b1-4eba-a668-d7626b54a65e.svg",
    previewImage: "https://www.figma.com/api/mcp/asset/7aabd4ca-bdbf-4bab-ae31-34998e255071.png",
    isFetchingImage: false,
    isPermanentCopy: false
  },
  {
    id: "figma-bookmark-flying-thoughts",
    title: "Flying Thoughts",
    url: "spectrumsociety.com",
    category: "Arts & Culture",
    date: "12 Dec 2025",
    image: "https://www.figma.com/api/mcp/asset/adb416f5-76cd-4230-8f6a-1a3a1436e05b.png",
    statusIcon: "https://www.figma.com/api/mcp/asset/75776a25-3554-401b-93c9-071f5e5f26a6.svg",
    previewImage: "https://www.figma.com/api/mcp/asset/adb416f5-76cd-4230-8f6a-1a3a1436e05b.png",
    isFetchingImage: false,
    isPermanentCopy: false
  },
  {
    id: "figma-bookmark-a-south-american-travel-guide",
    title: "A South American Travel Guide",
    url: "roamculture.com",
    category: "Arts & Culture",
    date: "10 Dec 2025",
    image: "https://www.figma.com/api/mcp/asset/a629c7ca-64f6-4c85-a3df-f47beca9ffe0.png",
    statusIcon: "https://www.figma.com/api/mcp/asset/cb51745b-94b0-4b5b-845f-4c4f66d44134.svg",
    previewImage: "https://www.figma.com/api/mcp/asset/a629c7ca-64f6-4c85-a3df-f47beca9ffe0.png",
    isFetchingImage: false,
    isPermanentCopy: true
  },
  {
    id: "figma-bookmark-glitch-experiment-gone-right",
    title: "Glitch Experiment - Gone Right",
    url: "artechomag.com",
    category: "Arts & Culture",
    date: "10 Dec 2025",
    image: "https://www.figma.com/api/mcp/asset/3c45dbe8-d9f1-41ce-8e06-cab2fa7f1596.png",
    statusIcon: "https://www.figma.com/api/mcp/asset/95e6684b-fa64-42f4-8ffa-509e7cc34dbb.svg",
    previewImage: "https://www.figma.com/api/mcp/asset/3c45dbe8-d9f1-41ce-8e06-cab2fa7f1596.png",
    isFetchingImage: false,
    isPermanentCopy: true
  },
  {
    id: "figma-bookmark-psychology-of-colours-a-bait",
    title: "Psychology of Colours - A Bait?",
    url: "pixelforge.io",
    category: "Design Resources",
    date: "10 Dec 2025",
    image: "https://www.figma.com/api/mcp/asset/ccf1e6b8-9f42-4ff5-9aea-2b098ff50d50.png",
    statusIcon: "https://www.figma.com/api/mcp/asset/85c1f65a-a181-4d13-be1d-c5f1de547b8a.svg",
    previewImage: "https://www.figma.com/api/mcp/asset/ccf1e6b8-9f42-4ff5-9aea-2b098ff50d50.png",
    isFetchingImage: false,
    isPermanentCopy: false
  },
  {
    id: "figma-bookmark-greed-and-red-cherry",
    title: "Greed and Red Cherry",
    url: "culturenova.org",
    category: "Arts & Culture",
    date: "9 Dec 2025",
    image: "https://www.figma.com/api/mcp/asset/14419b43-be59-485f-85d2-5b83887ec53a.png",
    statusIcon: "https://www.figma.com/api/mcp/asset/2b07e327-e81a-43a1-ae56-1b9e4b4875ce.svg",
    previewImage: "https://www.figma.com/api/mcp/asset/14419b43-be59-485f-85d2-5b83887ec53a.png",
    isFetchingImage: false,
    isPermanentCopy: false
  },
  {
    id: "figma-bookmark-life-of-a-nomad",
    title: "Life of a Nomad",
    url: "trailbound.com",
    category: "Arts & Culture",
    date: "8 Dec 2025",
    image: "https://www.figma.com/api/mcp/asset/7ea8acbd-3e8c-4437-b5d5-470025d6c23c.png",
    statusIcon: "https://www.figma.com/api/mcp/asset/59970dc9-1158-4c71-a8ba-a3e516475e0d.svg",
    previewImage: "https://www.figma.com/api/mcp/asset/7ea8acbd-3e8c-4437-b5d5-470025d6c23c.png",
    isFetchingImage: false,
    isPermanentCopy: true
  },
  {
    id: "figma-bookmark-cycling-three-continents",
    title: "Cycling Three Continents",
    url: "apexathletics.org",
    category: "Sports",
    date: "8 Dec 2025",
    image: "https://www.figma.com/api/mcp/asset/79e0a34b-f2dd-4f05-9a60-e3b8ea40e36d.png",
    statusIcon: "https://www.figma.com/api/mcp/asset/39f5eb10-50e3-4d25-9d44-4eaadc1825bb.svg",
    previewImage: "https://www.figma.com/api/mcp/asset/79e0a34b-f2dd-4f05-9a60-e3b8ea40e36d.png",
    isFetchingImage: false,
    isPermanentCopy: false
  },
  {
    id: "figma-bookmark-create-an-accessible-theme",
    title: "Create an Accessible Theme",
    url: "wpstreamline.com",
    category: "WP Resources",
    date: "5 Dec 2025",
    image: "https://www.figma.com/api/mcp/asset/88dbb4a0-468c-4c4e-bb4f-343c2345808c.png",
    statusIcon: "https://www.figma.com/api/mcp/asset/a39b840e-0633-4a40-aae7-64a60a5645bc.svg",
    previewImage: "https://www.figma.com/api/mcp/asset/88dbb4a0-468c-4c4e-bb4f-343c2345808c.png",
    isFetchingImage: false,
    isPermanentCopy: true
  },
  {
    id: "figma-bookmark-basketball-in-the-backyard",
    title: "Basketball in the Backyard",
    url: "matchmindset.com",
    category: "Sports",
    date: "5 Dec 2025",
    image: "https://www.figma.com/api/mcp/asset/901ce4eb-29ef-4ff9-a123-1adc50b37660.png",
    statusIcon: "https://www.figma.com/api/mcp/asset/afc76c8b-94ae-4ae8-8e07-6f0a6c4df1f2.svg",
    previewImage: "https://www.figma.com/api/mcp/asset/901ce4eb-29ef-4ff9-a123-1adc50b37660.png",
    isFetchingImage: false,
    isPermanentCopy: false
  },
  {
    id: "figma-bookmark-7-woven-fabrics",
    title: "7 Woven Fabrics",
    url: "mapmosaic.org",
    category: "Arts & Culture",
    date: "3 Dec 2025",
    image: "https://www.figma.com/api/mcp/asset/86638902-c3e8-4dac-b8e5-6972db47409f.png",
    statusIcon: "https://www.figma.com/api/mcp/asset/bd2220e8-3443-4dd4-99cd-c6c302bc55cc.svg",
    previewImage: "https://www.figma.com/api/mcp/asset/86638902-c3e8-4dac-b8e5-6972db47409f.png",
    isFetchingImage: false,
    isPermanentCopy: false
  },
  {
    id: "figma-bookmark-staring-at-the-white-wall",
    title: "Staring at the White Wall",
    url: "creativeepoch.net",
    category: "Arts & Culture",
    date: "3 Dec 2025",
    image: "https://www.figma.com/api/mcp/asset/daf08ad0-099c-487f-86ec-5a00ecfb1117.png",
    statusIcon: "https://www.figma.com/api/mcp/asset/9ed8a3c6-d431-44bb-ad41-fc7c5c0d6f08.svg",
    previewImage: "https://www.figma.com/api/mcp/asset/daf08ad0-099c-487f-86ec-5a00ecfb1117.png",
    isFetchingImage: false,
    isPermanentCopy: false
  },
  {
    id: "figma-bookmark-the-curious-watering-tanks",
    title: "The Curious Watering Tanks",
    url: "thewanderingsoul.com",
    category: "Arts & Culture",
    date: "1 Dec 2025",
    image: "https://www.figma.com/api/mcp/asset/02e683be-5c60-402d-8e6b-8db336b3e68d.png",
    statusIcon: "https://www.figma.com/api/mcp/asset/6ad7635d-abfb-4dea-9643-81b8697c1995.svg",
    previewImage: "https://www.figma.com/api/mcp/asset/02e683be-5c60-402d-8e6b-8db336b3e68d.png",
    isFetchingImage: false,
    isPermanentCopy: true
  },
  {
    id: "figma-bookmark-a-colourful-culture",
    title: "A Colourful Culture",
    url: "pathwayplanet.org",
    category: "Arts & Culture",
    date: "1 Dec 2025",
    image: "https://www.figma.com/api/mcp/asset/237933b0-6f15-439d-82fd-1e14e7b9ac74.png",
    statusIcon: "https://www.figma.com/api/mcp/asset/2a43f4a2-8832-4020-8270-7ac32165dc11.svg",
    previewImage: "https://www.figma.com/api/mcp/asset/237933b0-6f15-439d-82fd-1e14e7b9ac74.png",
    isFetchingImage: false,
    isPermanentCopy: false
  },
  {
    id: "figma-bookmark-easy-ecommerce-wp-checkout",
    title: "Easy Ecommerce WP Checkout",
    url: "wporbit.co",
    category: "WP Resources",
    date: "30 Nov 2025",
    image: "https://www.figma.com/api/mcp/asset/af97181b-7a50-4250-9742-d2fd072793d8.png",
    statusIcon: "https://www.figma.com/api/mcp/asset/b91d707b-10eb-4bd9-899c-57fdcffd010b.svg",
    previewImage: "https://www.figma.com/api/mcp/asset/af97181b-7a50-4250-9742-d2fd072793d8.png",
    isFetchingImage: false,
    isPermanentCopy: false
  },
  {
    id: "figma-bookmark-weddings-of-the-east-women",
    title: "Weddings of the East Women",
    url: "trailbound.com",
    category: "Arts & Culture",
    date: "28 Nov 2025",
    image: "https://www.figma.com/api/mcp/asset/77b0e551-b6f8-4548-9187-9e26b3a79682.png",
    statusIcon: "https://www.figma.com/api/mcp/asset/38a3cefe-ac8d-4e8a-b930-259f01d077bb.svg",
    previewImage: "https://www.figma.com/api/mcp/asset/77b0e551-b6f8-4548-9187-9e26b3a79682.png",
    isFetchingImage: false,
    isPermanentCopy: false
  },
  {
    id: "figma-bookmark-girl-in-the-black-meadow",
    title: "Girl in the Black Meadow",
    url: "creativeepoch.net",
    category: "Arts & Culture",
    date: "28 Nov 2025",
    image: "https://www.figma.com/api/mcp/asset/2ca51ee8-7619-4e5d-a7d5-10d7cb9d35e5.png",
    statusIcon: "https://www.figma.com/api/mcp/asset/8cf6bf3d-62f9-4779-8144-f8e4bec2c57a.svg",
    previewImage: "https://www.figma.com/api/mcp/asset/2ca51ee8-7619-4e5d-a7d5-10d7cb9d35e5.png",
    isFetchingImage: false,
    isPermanentCopy: false
  },
  {
    id: "figma-bookmark-learn-storytelling-in-20-mins",
    title: "Learn Storytelling in 20 Mins",
    url: "youtube.com",
    category: "YouTube Channels",
    date: "26 Nov 2025",
    image: "https://www.figma.com/api/mcp/asset/ddfd82a3-9745-4bfd-bc4d-78fbae9c8668.png",
    statusIcon: "https://www.figma.com/api/mcp/asset/dcb34474-6693-4b88-9191-7445a47e73bd.svg",
    previewImage: "https://www.figma.com/api/mcp/asset/ddfd82a3-9745-4bfd-bc4d-78fbae9c8668.png",
    isFetchingImage: false,
    isPermanentCopy: false
  },
  {
    id: "figma-bookmark-the-last-librarian-of-evermore",
    title: "The Last Librarian of Evermore",
    url: "thereadingdesk.io",
    category: "Books",
    date: "24 Nov 2025",
    image: "https://www.figma.com/api/mcp/asset/dbadd18e-a9be-481b-bab9-b332f105d512.png",
    statusIcon: "https://www.figma.com/api/mcp/asset/3340869c-05f8-47c2-ad41-525da9dc8855.svg",
    previewImage: "https://www.figma.com/api/mcp/asset/dbadd18e-a9be-481b-bab9-b332f105d512.png",
    isFetchingImage: false,
    isPermanentCopy: false
  },
  {
    id: "figma-bookmark-the-far-east-wise-premonition",
    title: "The Far-East Wise Premonition",
    url: "explorehorizon.com",
    category: "Arts & Culture",
    date: "24 Nov 2025",
    image: "https://www.figma.com/api/mcp/asset/5d819ddd-d5bc-4414-b31c-0e9d2f6b3f8b.png",
    statusIcon: "https://www.figma.com/api/mcp/asset/40f71757-e297-4912-abbf-dd61c2c462a0.svg",
    previewImage: "https://www.figma.com/api/mcp/asset/5d819ddd-d5bc-4414-b31c-0e9d2f6b3f8b.png",
    isFetchingImage: false,
    isPermanentCopy: true
  },
  {
    id: "figma-bookmark-a-growing-colourful-curse",
    title: "A Growing Colourful Curse",
    url: "epicreadshelf.org",
    category: "Books",
    date: "24 Nov 2025",
    image: "https://www.figma.com/api/mcp/asset/bb47c457-0b15-4c10-956a-a64e79022bd8.png",
    statusIcon: "https://www.figma.com/api/mcp/asset/bf7229d7-2cae-4f40-852a-63b2f1e6f255.svg",
    previewImage: "https://www.figma.com/api/mcp/asset/bb47c457-0b15-4c10-956a-a64e79022bd8.png",
    isFetchingImage: false,
    isPermanentCopy: false
  },
  {
    id: "figma-bookmark-a-designers-collection",
    title: "A Designer's Collection",
    url: "formadesigns.net",
    category: "Design Resources",
    date: "22 Nov 2025",
    image: "https://www.figma.com/api/mcp/asset/ef60e7e5-41ed-4abc-a235-6f6dfd596aa2.png",
    statusIcon: "https://www.figma.com/api/mcp/asset/cf18a63b-4e80-487f-8abe-423aa1857981.svg",
    previewImage: "https://www.figma.com/api/mcp/asset/ef60e7e5-41ed-4abc-a235-6f6dfd596aa2.png",
    isFetchingImage: false,
    isPermanentCopy: true
  },
  {
    id: "figma-bookmark-just-pick-a-damn-sport",
    title: "Just Pick a Damn Sport!",
    url: "powerplaynation.com",
    category: "Sports",
    date: "20 Nov 2025",
    image: "https://www.figma.com/api/mcp/asset/78c495f5-7951-44f1-b3ee-5f514472b5e7.png",
    statusIcon: "https://www.figma.com/api/mcp/asset/922ecde2-3c34-431b-9967-28e42b2c6aa1.svg",
    previewImage: "https://www.figma.com/api/mcp/asset/78c495f5-7951-44f1-b3ee-5f514472b5e7.png",
    isFetchingImage: false,
    isPermanentCopy: false
  },
  {
    id: "figma-bookmark-exciting-chipsets-of-the-future",
    title: "Exciting Chipsets of the Future",
    url: "codeandcontent.net",
    category: "WP Resources",
    date: "20 Nov 2025",
    image: "https://www.figma.com/api/mcp/asset/42b9f033-75ed-47fb-8cf0-50bce7de0c74.png",
    statusIcon: "https://www.figma.com/api/mcp/asset/6d18ef9f-34b3-4b56-8d8d-c7e596cd6a54.svg",
    previewImage: "https://www.figma.com/api/mcp/asset/42b9f033-75ed-47fb-8cf0-50bce7de0c74.png",
    isFetchingImage: false,
    isPermanentCopy: false
  },
  {
    id: "figma-bookmark-combating-laziness-at-play",
    title: "Combating Laziness at Play",
    url: "proplayzone.com",
    category: "Sports",
    date: "18 Nov 2025",
    image: "https://www.figma.com/api/mcp/asset/b947aa12-fbc7-4efc-abf9-11ac3d4102b4.png",
    statusIcon: "https://www.figma.com/api/mcp/asset/10e234e0-348d-4d4b-acfb-4c454d0427a7.svg",
    previewImage: "https://www.figma.com/api/mcp/asset/b947aa12-fbc7-4efc-abf9-11ac3d4102b4.png",
    isFetchingImage: false,
    isPermanentCopy: false
  },
  {
    id: "figma-bookmark-learn-wordpress-the-right-way",
    title: "Learn WordPress the Right Way",
    url: "wplaunchlab.com",
    category: "WP Resources",
    date: "18 Nov 2025",
    image: "https://www.figma.com/api/mcp/asset/32845145-5eab-4a9f-91cc-b5c1cebd72b6.png",
    statusIcon: "https://www.figma.com/api/mcp/asset/9743055c-fa4f-4ded-a4f4-ad0e8d8db094.svg",
    previewImage: "https://www.figma.com/api/mcp/asset/32845145-5eab-4a9f-91cc-b5c1cebd72b6.png",
    isFetchingImage: false,
    isPermanentCopy: false
  },
  {
    id: "figma-bookmark-same-thoughts-many-minds",
    title: "Same Thoughts, Many Minds",
    url: "culturevoyage.es",
    category: "Arts & Culture",
    date: "17 Nov 2025",
    image: "https://www.figma.com/api/mcp/asset/3f8492aa-7a3d-493f-852c-e4eaab6f89f9.png",
    statusIcon: "https://www.figma.com/api/mcp/asset/99fce8d6-93c4-4413-9c58-38ba6e24e81b.svg",
    previewImage: "https://www.figma.com/api/mcp/asset/3f8492aa-7a3d-493f-852c-e4eaab6f89f9.png",
    isFetchingImage: false,
    isPermanentCopy: false
  },
  {
    id: "figma-bookmark-build-a-million-dollar-channel",
    title: "Build a Million Dollar Channel",
    url: "youtube.com",
    category: "YouTube Channels",
    date: "17 Nov 2025",
    image: "https://www.figma.com/api/mcp/asset/7b734baf-1287-4d69-9ed3-7e22bb1e98f8.png",
    statusIcon: "https://www.figma.com/api/mcp/asset/15dfb6f5-355c-4b77-8fdc-980c7b60109b.svg",
    previewImage: "https://www.figma.com/api/mcp/asset/7b734baf-1287-4d69-9ed3-7e22bb1e98f8.png",
    isFetchingImage: false,
    isPermanentCopy: false
  },
  {
    id: "figma-bookmark-aligning-wp-with-design",
    title: "Aligning WP with Design",
    url: "shapeandspace.com",
    category: "WP Resources",
    date: "15 Nov 2025",
    image: "https://www.figma.com/api/mcp/asset/7059f770-f572-401e-88da-5af4e5fb79e0.png",
    statusIcon: "https://www.figma.com/api/mcp/asset/f18a8196-0830-4f17-96ea-e8a27f960ff8.svg",
    previewImage: "https://www.figma.com/api/mcp/asset/7059f770-f572-401e-88da-5af4e5fb79e0.png",
    isFetchingImage: false,
    isPermanentCopy: false
  },
  {
    id: "figma-bookmark-best-strawberry-cake-recipe",
    title: "Best Strawberry Cake Recipe",
    url: "youtube.com",
    category: "Uncategorized",
    date: "13 Nov 2025",
    image: "https://www.figma.com/api/mcp/asset/25adaeb9-aba5-4517-b0eb-b1058c7255e6.png",
    statusIcon: "https://www.figma.com/api/mcp/asset/d952dd1c-3f1e-4bd3-9376-415c8d27eadc.svg",
    previewImage: "https://www.figma.com/api/mcp/asset/25adaeb9-aba5-4517-b0eb-b1058c7255e6.png",
    isFetchingImage: false,
    isPermanentCopy: false
  },
  {
    id: "figma-bookmark-echoes-of-rain",
    title: "Echoes of Rain",
    url: "pureinkheaven.com",
    category: "Books",
    date: "13 Nov 2025",
    image: "https://www.figma.com/api/mcp/asset/f2679305-5451-4527-865a-3ee78bb88aaa.png",
    statusIcon: "https://www.figma.com/api/mcp/asset/10860fba-8942-4b7f-9c7e-524b3b9a4eba.svg",
    previewImage: "https://www.figma.com/api/mcp/asset/f2679305-5451-4527-865a-3ee78bb88aaa.png",
    isFetchingImage: false,
    isPermanentCopy: false
  },
  {
    id: "figma-bookmark-top-security-wordpress-plugins",
    title: "Top Security WordPress Plugins",
    url: "pluginpulse.com",
    category: "WP Resources",
    date: "11 Nov 2025",
    image: "https://www.figma.com/api/mcp/asset/6a192104-2918-4a94-8c6b-f86ff3cc48c0.png",
    statusIcon: "https://www.figma.com/api/mcp/asset/f203537c-b512-4493-8ced-01b7031abbd2.svg",
    previewImage: "https://www.figma.com/api/mcp/asset/6a192104-2918-4a94-8c6b-f86ff3cc48c0.png",
    isFetchingImage: false,
    isPermanentCopy: false
  },
  {
    id: "figma-bookmark-generate-ai-videos-instantly",
    title: "Generate AI Videos Instantly",
    url: "youtube.com",
    category: "YouTube Channels",
    date: "8 Nov 2025",
    image: "https://www.figma.com/api/mcp/asset/b3384cae-3e25-46d2-9cd9-a91473dd4d40.png",
    statusIcon: "https://www.figma.com/api/mcp/asset/8b00b85e-ce7f-45a8-b7c7-6938bcd497bc.svg",
    previewImage: "https://www.figma.com/api/mcp/asset/b3384cae-3e25-46d2-9cd9-a91473dd4d40.png",
    isFetchingImage: false,
    isPermanentCopy: false
  },
  {
    id: "figma-bookmark-design-for-the-corporate-client",
    title: "Design for the Corporate Client",
    url: "patterncore.design",
    category: "Design Resources",
    date: "6 Nov 2025",
    image: "https://www.figma.com/api/mcp/asset/47d5e558-5bc8-46d4-8786-301bbf96bd9f.png",
    statusIcon: "https://www.figma.com/api/mcp/asset/e55377f4-5550-40b5-a8b0-607596259f61.svg",
    previewImage: "https://www.figma.com/api/mcp/asset/47d5e558-5bc8-46d4-8786-301bbf96bd9f.png",
    isFetchingImage: false,
    isPermanentCopy: true
  },
  {
    id: "figma-bookmark-easy-tasty-breakfast-picks",
    title: "Easy & Tasty Breakfast Picks",
    url: "youtube.com",
    category: "YouTube Channels",
    date: "6 Nov 2025",
    image: "https://www.figma.com/api/mcp/asset/491c0171-30ec-4e0d-ab03-2f86f3253673.png",
    statusIcon: "https://www.figma.com/api/mcp/asset/fcf1f6b2-fb73-4895-838e-868741ddc1f2.svg",
    previewImage: "https://www.figma.com/api/mcp/asset/491c0171-30ec-4e0d-ab03-2f86f3253673.png",
    isFetchingImage: false,
    isPermanentCopy: false
  },
  {
    id: "figma-bookmark-tracking-down-the-maneater",
    title: "Tracking Down the Maneater",
    url: "youtube.com",
    category: "Uncategorized",
    date: "3 Nov 2025",
    image: "https://www.figma.com/api/mcp/asset/5c6cb598-0d38-48de-a35d-ba5837b1b76d.png",
    statusIcon: "https://www.figma.com/api/mcp/asset/005cd61d-f21e-4d75-a529-188e4bbc9f49.svg",
    previewImage: "https://www.figma.com/api/mcp/asset/5c6cb598-0d38-48de-a35d-ba5837b1b76d.png",
    isFetchingImage: false,
    isPermanentCopy: false
  },
  {
    id: "figma-bookmark-choosing-the-right-typeface",
    title: "Choosing the Right Typeface",
    url: "designverve.com",
    category: "Design Resources",
    date: "2 Nov 2025",
    image: "https://www.figma.com/api/mcp/asset/051c19de-f938-48a6-b758-44c081885360.png",
    statusIcon: "https://www.figma.com/api/mcp/asset/bd3c0ee3-4a23-4edc-8c85-172b4016311d.svg",
    previewImage: "https://www.figma.com/api/mcp/asset/051c19de-f938-48a6-b758-44c081885360.png",
    isFetchingImage: false,
    isPermanentCopy: true
  },
  {
    id: "figma-bookmark-before-you-knew",
    title: "Before You Knew",
    url: "pagealchemy.io",
    category: "Books",
    date: "2 Nov 2025",
    image: "https://www.figma.com/api/mcp/asset/f988b33f-30d6-4d09-a5f3-81cfadb4d7ef.png",
    statusIcon: "https://www.figma.com/api/mcp/asset/23fb7e59-f782-4099-abc7-d7c482cc130b.svg",
    previewImage: "https://www.figma.com/api/mcp/asset/f988b33f-30d6-4d09-a5f3-81cfadb4d7ef.png",
    isFetchingImage: false,
    isPermanentCopy: true
  },
  {
    id: "figma-bookmark-20-resources-for-all-designers",
    title: "20 Resources for All Designers",
    url: "studioluma.com",
    category: "Design Resources",
    date: "1 Nov 2025",
    image: "https://www.figma.com/api/mcp/asset/7fda01c7-003b-4618-bff3-cff27c70bffa.png",
    statusIcon: "https://www.figma.com/api/mcp/asset/93eb1420-416c-4828-9479-7ebaa4256ca7.svg",
    previewImage: "https://www.figma.com/api/mcp/asset/7fda01c7-003b-4618-bff3-cff27c70bffa.png",
    isFetchingImage: false,
    isPermanentCopy: false
  },
  {
    id: "figma-bookmark-beautiful-calligraphic-art-project",
    title: "Beautiful Calligraphic Art Project",
    url: "designdrift.co",
    category: "Design Resources",
    date: "1 Nov 2025",
    image: "https://www.figma.com/api/mcp/asset/99374a85-5bd8-485d-a61a-b52471eef4c5.png",
    statusIcon: "https://www.figma.com/api/mcp/asset/8034bc1c-c1e4-4eb9-ae08-be2bd3192f93.svg",
    previewImage: "https://www.figma.com/api/mcp/asset/99374a85-5bd8-485d-a61a-b52471eef4c5.png",
    isFetchingImage: false,
    isPermanentCopy: false
  },
  {
    id: "figma-bookmark-a-holographic-reflection",
    title: "A Holographic Reflection",
    url: "shapeandspace.com",
    category: "Design Resources",
    date: "29 Oct 2025",
    image: "https://www.figma.com/api/mcp/asset/18ad2cad-9d44-46dd-9eed-638ce494436f.png",
    statusIcon: "https://www.figma.com/api/mcp/asset/a94c56a8-1b77-4632-9787-7eb8152cc347.svg",
    previewImage: "https://www.figma.com/api/mcp/asset/18ad2cad-9d44-46dd-9eed-638ce494436f.png",
    isFetchingImage: false,
    isPermanentCopy: false
  },
  {
    id: "figma-bookmark-drowning-into-the-space",
    title: "Drowning into the Space",
    url: "youtube.com",
    category: "YouTube Channels",
    date: "26 Oct 2025",
    image: "https://www.figma.com/api/mcp/asset/8026712b-869b-4b53-9ef8-4b40b83896ee.png",
    statusIcon: "https://www.figma.com/api/mcp/asset/9bdcb5db-1efd-415a-8426-0f50c74d5c2e.svg",
    previewImage: "https://www.figma.com/api/mcp/asset/8026712b-869b-4b53-9ef8-4b40b83896ee.png",
    isFetchingImage: false,
    isPermanentCopy: false
  },
  {
    id: "figma-bookmark-a-guide-to-iconography",
    title: "A Guide to Iconography",
    url: "patterncore.design",
    category: "Design Resources",
    date: "28 Oct 2025",
    image: "https://www.figma.com/api/mcp/asset/84752648-490f-4d2c-93de-7fa55a3a1c54.png",
    statusIcon: "https://www.figma.com/api/mcp/asset/828df9ef-df0c-4ab8-9055-4b1ad8cef331.svg",
    previewImage: "https://www.figma.com/api/mcp/asset/84752648-490f-4d2c-93de-7fa55a3a1c54.png",
    isFetchingImage: false,
    isPermanentCopy: true
  },
  {
    id: "figma-bookmark-olives-of-the-middle-east",
    title: "Olives of the Middle East",
    url: "youtube.com",
    category: "YouTube Channels",
    date: "22 Oct 2025",
    image: "https://www.figma.com/api/mcp/asset/ce65d058-04d2-4837-8d8f-20b170de2ce1.png",
    statusIcon: "https://www.figma.com/api/mcp/asset/6c128324-021e-4739-9ef9-44d94a795501.svg",
    previewImage: "https://www.figma.com/api/mcp/asset/ce65d058-04d2-4837-8d8f-20b170de2ce1.png",
    isFetchingImage: false,
    isPermanentCopy: false
  },
  {
    id: "figma-bookmark-a-season-of-paper-butterflies",
    title: "A Season of Paper Butterflies",
    url: "youtube.com",
    category: "YouTube Channels",
    date: "19 Oct 2025",
    image: "https://www.figma.com/api/mcp/asset/e0ecdfc1-849c-481c-924f-ac18d19f6b38.png",
    statusIcon: "https://www.figma.com/api/mcp/asset/f26cf30a-0908-4103-bd07-ed00eafb8e92.svg",
    previewImage: "https://www.figma.com/api/mcp/asset/e0ecdfc1-849c-481c-924f-ac18d19f6b38.png",
    isFetchingImage: false,
    isPermanentCopy: false
  },
  {
    id: "figma-bookmark-between-iron-and-ember",
    title: "Between Iron and Ember",
    url: "theboundshelf.com",
    category: "Books",
    date: "19 Oct 2025",
    image: "https://www.figma.com/api/mcp/asset/695ac2a9-2ac6-4549-af49-4e879be25938.png",
    statusIcon: "https://www.figma.com/api/mcp/asset/390f875d-6d03-49fa-b583-1940df6a79c9.svg",
    previewImage: "https://www.figma.com/api/mcp/asset/695ac2a9-2ac6-4549-af49-4e879be25938.png",
    isFetchingImage: false,
    isPermanentCopy: false
  },
  {
    id: "figma-bookmark-birmingham-museums-trust",
    title: "Birmingham Museums Trust",
    url: "wandernest.org",
    category: "Arts & Culture",
    date: "19 Oct 2025",
    image: "https://www.figma.com/api/mcp/asset/40675bc2-46b7-4fac-b522-aae945a3560b.png",
    statusIcon: "https://www.figma.com/api/mcp/asset/c2a1f6bb-ee20-4edd-8c95-94e072e51052.svg",
    previewImage: "https://www.figma.com/api/mcp/asset/40675bc2-46b7-4fac-b522-aae945a3560b.png",
    isFetchingImage: false,
    isPermanentCopy: true
  }
];

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
  activeSidebarCategory: "All Bookmarks",
  selectedBookmarkIds: [],
  activeContentView: "cards",
  previewBookmarkId: null,
  bookmarkDisplayMode: "grid",
  bookmarkZoomLevel: 1,
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
      isPermanentCopy: false,
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

appState.bookmarks = FIGMA_BOOKMARK_GRID.map((bookmark) => ({
  ...bookmark,
  articleHtml: buildPreviewArticle(bookmark.title, bookmark.url)
}));

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
  const isActive = appState.activeSidebarCategory === link.label;
  const stateClass = isActive ? " is-active" : "";
  const chevronMarkup = link.chevron
    ? `<span class="bookmark-sidebar-link-chevron"><img src="${BOOKMARK_CHEVRON_ICON}" alt="" width="8.249" height="4.448" /></span>`
    : "";
  const linkCount = link.count;

  return `
    <button class="bookmark-sidebar-link${stateClass}" type="button" data-action="select-sidebar-category" data-category="${escapeHtml(link.label)}">
      <span class="bookmark-sidebar-link-main">
        <span class="bookmark-sidebar-link-icon ${link.iconClass || ""}">
          <span class="bookmark-sidebar-link-icon-frame ${link.iconFrameClass || ""}">
            <img src="${link.icon}" alt="" width="20" height="20" />
          </span>
        </span>
        <span class="bookmark-sidebar-link-label">${link.label}</span>
        ${chevronMarkup}
      </span>
      <span class="bookmark-sidebar-link-count">${linkCount}</span>
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
  const sidebarLinks = getSidebarCategoryLinks();
  const primaryLinks = sidebarLinks.primaryLinks.map(renderBookmarkSidebarLink).join("");
  const categoryLinks = sidebarLinks.categoryLinks.map(renderBookmarkSidebarLink).join("");
  const filterLinks = sidebarLinks.filterLinks.map(renderBookmarkSidebarLink).join("");
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

function getSidebarCategoryLinks() {
  const primaryLinks = BOOKMARK_PRIMARY_LINKS.map((link) => ({ ...link, group: "primary" }));
  const categoryLinks = BOOKMARK_CATEGORY_LINKS.map((link) => ({ ...link, group: "category" }));
  const createdCategoryLinks = appState.createdCategoryNames.map((name) => ({
    label: name,
    count: "0",
    icon: BOOKMARK_FOLDER_ICON,
    group: "category"
  }));
  const filterLinks = BOOKMARK_FILTER_LINKS.map((link) => ({ ...link, group: "filter" }));

  return {
    primaryLinks,
    categoryLinks: [...categoryLinks, ...createdCategoryLinks],
    filterLinks
  };
}

function getBookmarksForCategory(categoryName) {
  if (categoryName === "All Bookmarks") {
    return appState.bookmarks;
  }

  if (categoryName === "Deleted Items") {
    return [];
  }

  return appState.bookmarks.filter((bookmark) => bookmark.category === categoryName);
}

function getCategoryBookmarkCount(categoryName) {
  return getBookmarksForCategory(categoryName).length;
}

function getVisibleBookmarkIds() {
  return getBookmarksForCategory(appState.activeSidebarCategory).map((bookmark) => bookmark.id);
}

function areAllVisibleBookmarksSelected() {
  const visibleIds = getVisibleBookmarkIds();
  return visibleIds.length > 0 && visibleIds.every((id) => appState.selectedBookmarkIds.includes(id));
}

function syncBookmarkSelectionUi() {
  app.querySelectorAll(".bookmark-card[data-bookmark-id], .bookmark-list-card[data-bookmark-id]").forEach((card) => {
    const bookmarkId = card.getAttribute("data-bookmark-id");
    const isSelected = appState.selectedBookmarkIds.includes(bookmarkId);
    const checkbox = card.querySelector(".bookmark-card-checkbox");
    const checkboxImage = checkbox?.querySelector("img");
    const actions = card.querySelector(".bookmark-card-actions, .bookmark-list-card-actions");

    card.classList.toggle("is-selected", isSelected);

    if (checkbox) {
      checkbox.classList.toggle("is-selected", isSelected);
      checkbox.setAttribute("aria-pressed", String(isSelected));
    }

    if (checkboxImage) {
      checkboxImage.src = isSelected ? BOOKMARK_CARD_CHECKBOX_ACTIVE_ICON : BOOKMARK_CARD_CHECKBOX_DEFAULT_ICON;
    }

    if (actions) {
      actions.setAttribute("aria-hidden", String(isSelected));
    }
  });

  const selectAllButton = app.querySelector("[data-action='select-all-bookmarks']");
  const selectAllImage = selectAllButton?.querySelector(".bookmark-content-select-icon img");
  const selectAllActive = areAllVisibleBookmarksSelected();

  if (selectAllButton) {
    selectAllButton.classList.toggle("is-selected", selectAllActive);
    selectAllButton.setAttribute("aria-pressed", String(selectAllActive));
  }

  if (selectAllImage) {
    selectAllImage.src = selectAllActive ? BOOKMARK_CARD_CHECKBOX_ACTIVE_ICON : CONTENT_SELECT_ALL_ICON;
  }
}

function toggleBookmarkSelection(bookmarkId) {
  if (!bookmarkId) {
    return;
  }

  if (appState.selectedBookmarkIds.includes(bookmarkId)) {
    appState.selectedBookmarkIds = appState.selectedBookmarkIds.filter((id) => id !== bookmarkId);
  } else {
    appState.selectedBookmarkIds = [...appState.selectedBookmarkIds, bookmarkId];
  }

  syncBookmarkSelectionUi();
}

function toggleVisibleBookmarkSelection() {
  const visibleIds = getVisibleBookmarkIds();
  if (!visibleIds.length) {
    return;
  }

  if (visibleIds.every((id) => appState.selectedBookmarkIds.includes(id))) {
    appState.selectedBookmarkIds = appState.selectedBookmarkIds.filter((id) => !visibleIds.includes(id));
  } else {
    appState.selectedBookmarkIds = Array.from(new Set([...appState.selectedBookmarkIds, ...visibleIds]));
  }

  syncBookmarkSelectionUi();
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
  const isSelected = appState.selectedBookmarkIds.includes(bookmark.id);
  const selectedClass = isSelected ? " is-selected" : "";
  const checkboxIcon = isSelected ? BOOKMARK_CARD_CHECKBOX_ACTIVE_ICON : BOOKMARK_CARD_CHECKBOX_DEFAULT_ICON;
  const statusIcon = bookmark.statusIcon || BOOKMARK_CARD_STATUS_ICON;
  const permanentCopyBanner = bookmark.isPermanentCopy
    ? `<div class="bookmark-card-permanent-banner"><span>Permanent copy</span></div>`
    : "";
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
        ${permanentCopyBanner}
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
            <img class="bookmark-card-status" src="${statusIcon}" alt="" width="6" height="6" />
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

function renderBookmarkListCard(bookmark) {
  const isSelected = appState.selectedBookmarkIds.includes(bookmark.id);
  const selectedClass = isSelected ? " is-selected" : "";
  const checkboxIcon = isSelected ? BOOKMARK_CARD_CHECKBOX_ACTIVE_ICON : BOOKMARK_CARD_CHECKBOX_DEFAULT_ICON;
  const statusIcon = bookmark.statusIcon || BOOKMARK_CARD_STATUS_ICON;
  const imageContent = bookmark.isFetchingImage
    ? `
        <div class="bookmark-card-fetch bookmark-list-card-fetch">
          <span class="bookmark-card-fetch-text">Fetching Image</span>
          <span class="bookmark-card-fetch-shine" aria-hidden="true"></span>
        </div>
      `
    : `<img class="bookmark-list-card-image" src="${bookmark.image}" alt="" />`;

  return `
    <article class="bookmark-list-card${selectedClass}" data-bookmark-id="${bookmark.id}">
      <div class="bookmark-list-card-main">
        <div class="bookmark-list-card-media-group">
          <button class="bookmark-card-checkbox${isSelected ? " is-selected" : ""}" type="button" data-action="toggle-bookmark-selection" data-bookmark-id="${bookmark.id}" aria-label="Select bookmark" aria-pressed="${isSelected}">
            <img src="${checkboxIcon}" alt="" width="20" height="20" />
          </button>

          <div class="bookmark-list-card-image-shell">
            ${imageContent}
            <div class="bookmark-list-card-image-gradient"></div>
          </div>
        </div>

        <div class="bookmark-list-card-copy">
          <div class="bookmark-list-card-heading-group">
            <h3 class="bookmark-list-card-title">${escapeHtml(bookmark.title)}</h3>
            <div class="bookmark-list-card-url-row">
              <span class="bookmark-list-card-url">${escapeHtml(bookmark.url)}</span>
              <img class="bookmark-list-card-status" src="${statusIcon}" alt="" width="6" height="6" />
            </div>
          </div>

          <div class="bookmark-list-card-meta-row">
            <div class="bookmark-list-card-category">
              <img class="bookmark-list-card-category-icon" src="${BOOKMARK_CARD_FOLDER_ICON}" alt="" width="20" height="20" />
              <span class="bookmark-list-card-meta-text">${escapeHtml(bookmark.category)}</span>
            </div>
            <span class="bookmark-list-card-meta-divider"></span>
            <span class="bookmark-list-card-meta-text">${escapeHtml(bookmark.date)}</span>
          </div>
        </div>
      </div>

      <div class="bookmark-list-card-actions" aria-hidden="${isSelected}">
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
    </article>
  `;
}

function renderBookmarkCards() {
  const visibleBookmarks = getBookmarksForCategory(appState.activeSidebarCategory);
  const canvasClass = appState.bookmarkDisplayMode === "list" ? "bookmark-card-canvas is-list" : "bookmark-card-canvas";
  const zoomStyle = ` style="--bookmark-card-scale:${appState.bookmarkZoomLevel}"`;
  const cardRenderer = appState.bookmarkDisplayMode === "list" ? renderBookmarkListCard : renderBookmarkCard;

  return `
    <div class="bookmark-content-view">
      ${renderBookmarkContentHeader()}
      <div class="${canvasClass}"${zoomStyle}>
        ${visibleBookmarks.map(cardRenderer).join("")}
      </div>
    </div>
  `;
}

function renderBookmarkContentHeader() {
  const activeCategory = appState.activeSidebarCategory;
  const bookmarkCount = getCategoryBookmarkCount(activeCategory);
  const gridActiveClass = appState.bookmarkDisplayMode === "grid" ? " is-active" : "";
  const listActiveClass = appState.bookmarkDisplayMode === "list" ? " is-active" : "";
  const selectAllActive = areAllVisibleBookmarksSelected();
  const selectAllIcon = selectAllActive ? BOOKMARK_CARD_CHECKBOX_ACTIVE_ICON : CONTENT_SELECT_ALL_ICON;

  return `
    <section class="bookmark-content-header">
      <div class="bookmark-content-header-main">
        <div class="bookmark-content-title-block">
          <div class="bookmark-content-title-row">
            <h2 class="bookmark-content-title">${escapeHtml(activeCategory)}</h2>
            <span class="bookmark-content-count">(${bookmarkCount})</span>
          </div>

          <button class="bookmark-content-select-all${selectAllActive ? " is-selected" : ""}" type="button" data-action="select-all-bookmarks" aria-pressed="${selectAllActive}">
            <span class="bookmark-content-select-icon">
              <img src="${selectAllIcon}" alt="" width="20" height="20" />
            </span>
            <span class="bookmark-content-select-label">Select All</span>
          </button>
        </div>

        <div class="bookmark-content-actions">
          <div class="bookmark-content-action-buttons">
            <div class="bookmark-content-view-toggle">
              <button class="bookmark-content-view-button${gridActiveClass}" type="button" data-action="set-bookmark-display" data-display="grid" aria-pressed="${appState.bookmarkDisplayMode === "grid"}">
                <span class="bookmark-content-view-icon bookmark-content-view-icon-grid">
                  <img src="${CONTENT_HEADING_GRID_ICON}" alt="" width="20" height="20" />
                </span>
              </button>
              <button class="bookmark-content-view-button${listActiveClass}" type="button" data-action="set-bookmark-display" data-display="list" aria-pressed="${appState.bookmarkDisplayMode === "list"}">
                <span class="bookmark-content-view-icon bookmark-content-view-icon-list">
                  <img src="${CONTENT_HEADING_LIST_ICON}" alt="" width="20" height="20" />
                </span>
              </button>
            </div>

            <div class="bookmark-content-icon-group">
              <button class="bookmark-content-icon-button" type="button" data-action="sort-bookmarks" aria-label="Sort bookmarks">
                <span class="bookmark-content-icon bookmark-content-icon-sort">
                  <img src="${CONTENT_HEADING_SORT_ICON}" alt="" width="20" height="20" />
                </span>
              </button>
              <button class="bookmark-content-icon-button" type="button" data-action="filter-bookmarks" aria-label="Filter bookmarks">
                <span class="bookmark-content-icon bookmark-content-icon-filter">
                  <img src="${CONTENT_HEADING_FILTER_ICON}" alt="" width="20" height="20" />
                </span>
              </button>
            </div>

            <div class="bookmark-content-icon-group bookmark-content-icon-group-zoom">
              <button class="bookmark-content-icon-button" type="button" data-action="zoom-bookmarks-in" aria-label="Zoom in">
                <span class="bookmark-content-icon bookmark-content-icon-zoom-in">
                  <img src="${CONTENT_HEADING_ZOOM_IN_ICON}" alt="" width="20" height="20" />
                </span>
              </button>
              <button class="bookmark-content-icon-button" type="button" data-action="zoom-bookmarks-out" aria-label="Zoom out">
                <span class="bookmark-content-icon bookmark-content-icon-zoom-out">
                  <img src="${CONTENT_HEADING_ZOOM_OUT_ICON}" alt="" width="20" height="20" />
                </span>
              </button>
            </div>
          </div>

          <div class="bookmark-content-export-group">
            <button class="bookmark-content-export-button" type="button" data-action="export-all-items">
              <span class="bookmark-content-export-main">
                <span class="bookmark-content-icon bookmark-content-icon-export-all">
                  <img src="${CONTENT_HEADING_EXPORT_ICON}" alt="" width="20" height="20" />
                </span>
                <span class="bookmark-content-export-label">Export all items</span>
              </span>
              <span class="bookmark-content-export-chevron">
                <img src="${CONTENT_HEADING_CHEVRON_ICON}" alt="" width="16" height="16" />
              </span>
            </button>

            <button class="bookmark-content-kebab" type="button" data-action="open-content-kebab" aria-label="More options">
              <span class="bookmark-content-icon bookmark-content-icon-kebab">
                <span class="bookmark-content-kebab-dots" aria-hidden="true"></span>
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
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
    if (bookmarkCard && !event.target.closest(".bookmark-card-actions, .bookmark-list-card-actions")) {
      const bookmarkId = bookmarkCard.getAttribute("data-bookmark-id");
      toggleBookmarkSelection(bookmarkId);
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
      isPermanentCopy: false,
      statusIcon: BOOKMARK_CARD_STATUS_ICON,
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
    toggleBookmarkSelection(bookmarkId);
    return;
  }

  if (action === "select-sidebar-category") {
    const categoryName = actionTarget.getAttribute("data-category");
    if (categoryName) {
      appState.activeSidebarCategory = categoryName;
      appState.activeContentView = "cards";
      appState.previewBookmarkId = null;
      appState.selectedBookmarkIds = [];
      renderShell();
    }
    return;
  }

  if (action === "select-all-bookmarks") {
    toggleVisibleBookmarkSelection();
    return;
  }

  if (action === "set-bookmark-display") {
    const display = actionTarget.getAttribute("data-display");
    if (display === "grid" || display === "list") {
      appState.bookmarkDisplayMode = display;
      renderShell();
    }
    return;
  }

  if (action === "zoom-bookmarks-in") {
    appState.bookmarkZoomLevel = Math.min(1.2, Number((appState.bookmarkZoomLevel + 0.05).toFixed(2)));
    renderShell();
    return;
  }

  if (action === "zoom-bookmarks-out") {
    appState.bookmarkZoomLevel = Math.max(0.85, Number((appState.bookmarkZoomLevel - 0.05).toFixed(2)));
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

  if (action === "save-permanent-copy") {
    const bookmark = appState.bookmarks.find((item) => item.id === appState.previewBookmarkId);

    if (bookmark) {
      bookmark.isPermanentCopy = true;
    }

    return;
  }

  if (action === "open-bookmark-browser" || action === "export-bookmark" || action === "edit-bookmark") {
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
      isPermanentCopy: false,
      statusIcon: BOOKMARK_CARD_STATUS_ICON,
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
