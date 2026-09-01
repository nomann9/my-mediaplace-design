const app = document.getElementById("app");
const MINIMIZE_ICON = "assets/figma/7e601499-4a77-4592-8125-b7b0a30b1b1b.svg";
const MAXIMIZE_ICON = "assets/figma/fbd7336c-bc4c-4fb0-b4f2-7a6631055971.svg";
const CLOSE_ICON = "assets/figma/602713fe-fb9a-4721-a13e-5e3f4ab79674.svg";
const MENU_ICON = "assets/figma/720bdc27-8d08-4a5d-9916-f8d8f93d236d.svg";
const DIVIDER_ICON = "assets/figma/baee6d56-c5fb-4a37-91e6-f51d1d605242.svg";
const HOME_ICON = "assets/figma/6e49476b-49fd-4c9e-8d0c-2dbef7e0e1b8.svg";
const AI_ICON = "assets/figma/6bd9b3aa-1cbb-4f9a-8349-87a3fca368ea.svg";
const ORGANIZE_ICON = "assets/figma/fc3c4ca3-0c72-40cf-b42c-f6e5bdb2f3b0.svg";
const AVATAR_ICON = "assets/figma/6e7395f1-4e0c-4815-8430-a30c56ea255d.svg";
const CREATE_ICON = "assets/figma/550dcb0a-7145-427e-8a18-a63434daf2bf.svg";
const DOWNLOAD_ICON = "assets/figma/be4205ff-e3e6-458a-9c41-f11674e0e6e0.svg";
const SIDEBAR_FOOTER_IMAGE = "assets/figma/852e9ec6-8bda-45bd-8cab-7ede875208d9.png";
const SUBMENU_ACTIVE_ICON = "assets/figma/d14ab9b1-9f63-4821-89ea-05114afddb7d.svg";
const SUBMENU_HOVER_ICON = "assets/figma/0c4152c0-5d12-4e4a-bb3e-1d9baeea8bbc.svg";
const ADD_BOOKMARK_ICON = "assets/figma/8187ea10-c387-4055-a25a-9e4cab552ebf.svg";
const IMPORT_BOOKMARKS_ICON = "assets/figma/607ed0a5-0585-4a46-8a19-d736f8ae2f1a.svg";
const SEARCH_ICON = "assets/figma/978e8e43-ee32-4603-91ac-c8c181eb6874.svg";
const BOOKMARK_FOLDER_ICON = "assets/figma/ca75bd8f-299a-4698-99b6-f91ea0d629b4.svg";
const BOOKMARK_CHEVRON_ICON = "assets/figma/271ebccb-2afd-4954-9878-0db0f5922d5a.svg";
const BOOKMARK_LOCKED_ICON = "assets/figma/5cdb5433-c880-453f-b162-091b964b8633.svg";
const BOOKMARK_TRASH_ICON = "assets/figma/36a07bee-315f-45ea-8a60-3fe9194c2d91.svg";
const BOOKMARK_STAR_ICON = "assets/figma/6c223006-1025-4aa5-9909-623b0780d7d5.svg";
const BOOKMARK_LINK_ICON = "assets/figma/d9e51e3d-80ab-4161-8976-bcaddffed1c4.svg";
const BOOKMARK_DOCUMENTS_ICON = "assets/figma/adcff124-a0e6-4017-a7f7-565b1b3b4719.svg";
const BOOKMARK_AUDIO_ICON = "assets/figma/8c242210-a24a-450b-a921-470095ac6aae.svg";
const BOOKMARK_VIDEO_ICON = "assets/figma/3e0e7e6b-9a3c-43ce-8b1c-a3a4785d72da.svg";
const BOOKMARK_UNTAGGED_ICON = "assets/figma/c1e49ec9-0852-4855-af79-a07a62c23b58.svg";
const BOOKMARK_ADD_CATEGORY_ICON = "assets/figma/0d352490-3828-4415-97f1-658f67665a79.svg";
const BOOKMARK_ADD_CATEGORY_ACTIVE_ICON = "assets/figma/bd9f8cc2-a797-4c09-b87a-69ac123194f0.svg";
const BOOKMARK_CARD_FOLDER_ICON = "assets/figma/ec8eec83-c151-41fb-8237-397ac2d6879d.svg";
const BOOKMARK_CARD_STATUS_ICON = "assets/figma/72b09fc0-a749-41d5-acf3-dd273870b12b.svg";
const BOOKMARK_CARD_STATUS_ORANGE_ICON = "assets/figma/499952dd-ae9f-492c-b112-5696e4b30d30.svg";
const BOOKMARK_CARD_STATUS_RED_ICON = "assets/figma/29e3bf79-b244-4882-a32d-edf02204b091.svg";
const BOOKMARK_CARD_IMAGE = "assets/figma/d8f2fcdb-afa9-473d-b841-0cb0b099b90e.png";
const BOOKMARK_CARD_PREVIEW_ICON = "assets/figma/672b1a75-0c5e-4bb4-8173-360c9d03b270.svg";
const BOOKMARK_CARD_EDIT_ICON = "assets/figma/62ab2753-7920-424d-b68e-a1d8e35bc6d2.svg";
const BOOKMARK_CARD_CHECKBOX_DEFAULT_ICON = "assets/figma/fec18e29-f693-4bc9-a415-6cf2fd693903.svg";
const BOOKMARK_CARD_CHECKBOX_ACTIVE_ICON = "assets/figma/806c58ad-7261-4f69-b792-8264bf967589.svg";
const PREVIEW_GO_BACK_ICON = "assets/figma/84a29a21-3060-4208-a0f7-607d518413dc.svg";
const PREVIEW_SAVE_ICON = "assets/figma/1ea3982f-40a6-4866-ace3-27db56a37222.svg";
const PREVIEW_OPEN_BROWSER_ICON = "assets/figma/051a2ab3-1d04-4723-845c-4177958427f6.svg";
const PREVIEW_EXPORT_ICON = "assets/figma/5f26ce51-9981-4171-97b7-07cf7a229dc3.svg";
const PREVIEW_CANCEL_ICON = "assets/figma/25da3f51-5df0-4680-9765-cd8656a883ec.svg";
const PREVIEW_SAMPLE_IMAGE = "assets/figma/53e379e3-fe1d-47b7-aeb1-8c6d5a809aeb.png";
const CONTENT_HEADING_GRID_ICON = "assets/figma/60569bc5-3723-4a02-973f-fb420db4777c.svg";
const CONTENT_HEADING_LIST_ICON = "assets/figma/c60cb679-0433-499c-bdb8-6c1e60e41b0b.svg";
const CONTENT_HEADING_SORT_ICON = "assets/figma/f2bf8147-4d8e-4087-92cd-76a8b1f59ded.svg";
const CONTENT_HEADING_FILTER_ICON = "assets/figma/19806e00-cd8c-4e4a-9e1e-fc865b82931f.svg";
const CONTENT_HEADING_ZOOM_IN_ICON = "assets/figma/342c9f09-24a1-4c6d-a9c0-a9bc64d3d5a6.svg";
const CONTENT_HEADING_ZOOM_OUT_ICON = "assets/figma/4ffe2a45-f7d2-45c0-b247-998b6f0e8d89.svg";
const CONTENT_HEADING_KEBAB_ICON = "assets/figma/f4287519-7129-4119-9586-362722a3a71c.svg";
const CONTENT_HEADING_CHEVRON_ICON = "assets/figma/c8491e4a-2b0c-443f-892d-3aa72b88a697.svg";
const CONTENT_HEADING_EXPORT_ICON = "assets/figma/3c693a14-1cd0-46a4-ab33-9b60f298a351.svg";
const CONTENT_KEBAB_OPEN_ICON = "assets/figma/aecebe9a-2c29-4a7d-b0d9-b02da46c9acd.svg";
const CONTENT_KEBAB_DUPLICATE_ICON = "assets/figma/489489a9-f697-4b5d-8109-56f5265b4a7e.svg";
const CONTENT_KEBAB_READ_ICON = "assets/figma/e12e2637-8369-4937-ba1a-37dc1c548ddd.svg";
const CONTENT_KEBAB_REVALIDATE_ICON = "assets/figma/c0a08e07-2ca3-4eed-a510-e734c1b8243a.svg";
const CONTENT_SELECT_ALL_ICON = BOOKMARK_CARD_CHECKBOX_DEFAULT_ICON;
const INSPECTOR_NOTE_ICON = "assets/figma/76acfa70-132f-439a-9ed5-25b981c855c3.svg";
const INSPECTOR_TAG_ICON = "assets/figma/70b5a85e-904d-4d21-8a1e-01e0aaae8c1c.svg";
const INSPECTOR_TRASH_ICON = "assets/figma/3f19edb0-72d0-407b-a80a-ef43f8afc879.svg";
const INSPECTOR_CHECKBOX_ICON = "assets/figma/0548e8d9-018c-45ae-8de8-debe33b5180e.svg";
const INSPECTOR_TOP_DIVIDER = "assets/figma/9b662299-5edb-469b-aad4-fa474e830878.svg";
const INSPECTOR_BOTTOM_DIVIDER = "assets/figma/2177d70d-534f-437a-913d-cffa16184fd5.svg";
const INSPECTOR_TAG_REMOVE_ICON = "assets/figma/560a6dcf-447f-4cf1-8cee-340a0622405b.svg";
const INSPECTOR_FAVOURITE_DEFAULT_ICON = "assets/figma/inspector-favourite-default.svg";
const INSPECTOR_FAVOURITE_ACTIVE_ICON = "assets/figma/inspector-favourite-active.svg";
const INSPECTOR_MOVE_CATEGORY_ICON = "assets/figma/inspector-move-category.svg";
const INSPECTOR_MOVE_CHEVRON_ICON = "assets/figma/inspector-move-chevron.svg";
const INSPECTOR_BOOKMARK_CLOSE_ICON = "assets/figma/inspector-bookmark-close.svg";
const INSPECTOR_REMINDER_BELL_ICON = "assets/figma/inspector-reminder-bell.svg";
const INSPECTOR_HIDE_PASSWORD_ICON = "assets/figma/inspector-hide-password.svg";
const INSPECTOR_LOCKED_HINT_ARROW_ICON = "assets/figma/inspector-locked-hint-arrow.svg";
const LOCKED_CATEGORY_ILLUSTRATION = "assets/figma/locked-category-illustration.png";
const LOCKED_CATEGORY_PASSWORD_PREVIEW_ICON = "assets/figma/anc-password-preview.svg";
const LOCKED_CATEGORY_PASSWORD_HIDDEN_DOTS = "assets/figma/anc-password-hidden-dots.svg";
const IMPORT_BOOKMARKS_RINGS_IMAGE = "assets/figma/import-bookmarks-circles.svg";
const IMPORT_BOOKMARKS_MAIN_ICON = "assets/figma/import-bookmarks-main.svg";
const IMPORT_BOOKMARKS_DOC_1 = "assets/figma/import-bookmarks-doc-1.svg";
const IMPORT_BOOKMARKS_DOC_2 = "assets/figma/import-bookmarks-doc-2.svg";
const IMPORT_BOOKMARKS_DOC_3 = "assets/figma/import-bookmarks-doc-3.svg";
const IMPORT_BOOKMARKS_DOC_4 = "assets/figma/import-bookmarks-doc-4.svg";
const BOOKMARK_IMAGE_FETCH_DURATION_MS = 1800;
const FIGMA_BOOKMARK_IMAGE_URLS = [
  "assets/figma/e63e0d1d-dd75-4111-8cc7-0c913c0394ac.png",
  "assets/figma/1496eea8-fa0f-4e20-ad1a-294e39ee913c.png",
  "assets/figma/75b79825-358c-4e9d-9e08-4c4bbe1d57fd.png",
  "assets/figma/b3bdc6ee-03c2-48d1-b158-487a91c4dbf4.png",
  "assets/figma/087f4127-0032-45e1-9060-5ff48e86e070.png",
  "assets/figma/432ddac5-0f8f-4d6b-867a-6c56aec5a42a.png",
  "assets/figma/971092ce-0547-44db-b330-0b225f31d049.png",
  "assets/figma/19bc93dd-1929-45ea-99c4-7bc89b24f374.png",
  "assets/figma/a3434af2-49e4-42d4-8ae7-37ceb49fba3d.png",
  "assets/figma/80722c10-9131-4f9b-8394-6f02659866c9.png",
  "assets/figma/3686da08-e77b-40e5-9599-6654afd5e9cf.png",
  "assets/figma/424a0253-67f4-4b2b-b8a1-1d6af8846c1b.png",
  "assets/figma/59d69cc6-af93-4b5f-9b5b-41812203dc17.png",
  "assets/figma/25062f9f-e30b-4234-8a23-f603232ddd56.png",
  "assets/figma/229d98b6-2508-4e4f-8986-be66b9283290.png",
  "assets/figma/14e222b4-3fd4-45a3-823b-a02a9869576b.png",
  "assets/figma/b6bdae8d-ef2a-44c5-8e82-ca87a7778de2.png",
  "assets/figma/0f962d0f-1638-438b-ba49-f4c088824209.png",
  "assets/figma/e7de8841-1631-4458-8192-471166a20861.png",
  "assets/figma/9be605ce-4c71-4c8d-ac76-26ea69e458fb.png",
  "assets/figma/e88a2b2c-a18d-4991-acba-29c2b501160f.png",
  "assets/figma/9b9a5170-ebf0-47a5-9645-311786fa1bb0.png",
  "assets/figma/429f2e01-79fe-4d36-88dc-aa63f7d45dba.png",
  "assets/figma/145c3fc1-25c7-4218-a5bf-23b4f2097178.png",
  "assets/figma/dcaf1502-3c8f-46fa-806d-ed6174e005c9.png",
  "assets/figma/4e209631-6a5b-4922-b5ca-d14d50b0bbdc.png",
  "assets/figma/03e44c1e-433c-4a27-b72c-ae04410367dd.png",
  "assets/figma/47085e37-2ff1-4305-b4ff-7188453eca8e.png",
  "assets/figma/02fbc9f6-68f1-4370-bdcd-8258497980c0.png",
  "assets/figma/76f1997d-b375-4fec-abd2-1987444f09bb.png",
  "assets/figma/cf52de02-25db-49bd-8313-537c9ba42d0e.png",
  "assets/figma/3a629792-7a9c-467a-8d2e-652b03715d25.png",
  "assets/figma/309ca937-4673-4f2c-9c4a-b44dc1c8df54.png",
  "assets/figma/eb9e7dae-2459-464c-98ac-c1a1052ca63a.png",
  "assets/figma/6713a922-5bb7-4014-96af-b4872eeb1d41.png",
  "assets/figma/05a923a2-5ae0-407f-9769-4613f80cbbb8.png",
  "assets/figma/9f299446-54a6-4901-b738-e44e3434b8b3.png",
  "assets/figma/d12285de-15d8-4d7e-a1d3-07d1bb587f5c.png",
  "assets/figma/4f3e48a6-ab88-4b9f-86cc-fba295d4a6e9.png",
  "assets/figma/7f8346df-5666-40ca-8cb3-465095e1f082.png",
  "assets/figma/a5064d16-9977-4092-b55e-4179cf98cdf0.png",
  "assets/figma/4df6602c-5e85-4508-8454-d25012571efc.png",
  "assets/figma/d0bab436-9ed9-4780-ba22-98c8f089c25a.png",
  "assets/figma/327dbf59-5f4d-4cee-a60b-dc82cab61b3c.png",
  "assets/figma/c744d3d0-cc00-4093-9158-74e4b856a2c8.png",
  "assets/figma/e496822b-c5c6-465f-a1b6-54d949ee07a3.png",
  "assets/figma/b21dc5e5-ecb7-48b3-a257-e0bf36f9cafd.png",
  "assets/figma/e642b585-8614-4b3e-a91c-ae565dc486f8.png",
  "assets/figma/0240e462-388d-44a9-b158-7c72ad182ef7.png",
  "assets/figma/6b4474fa-2cdf-4173-b69d-1afd89448590.png",
  "assets/figma/b42a7771-48de-41c0-8dde-2f43fcd63cda.png",
  "assets/figma/2724f65c-edf7-4150-bd4f-292479747d76.png",
  "assets/figma/03db4073-bcd9-438c-83ae-03f8ec68484e.png",
  "assets/figma/fdb50ee1-eb15-4169-8fcc-85ad5a4da072.png",
  "assets/figma/ef8613a8-5b24-4ae3-9e7e-e23eddd386cc.png",
  "assets/figma/d2c4690b-6edc-42a0-8123-4a11141c8f4e.png",
  "assets/figma/d48a4f7c-05f9-4287-a60e-9f0fe3e678e5.png",
  "assets/figma/cc8f4603-3077-423f-b863-d1070aa48104.png",
  "assets/figma/00367eee-c990-435a-9c39-b9e4e1fa90f0.png",
  "assets/figma/37fa3397-c955-43a5-860f-ef7f504c722e.png",
  "assets/figma/2896ad4b-629b-43cf-bbb9-68084fdd0bef.png",
  "assets/figma/ecf82a06-fe97-4406-949d-f9daa3851236.png",
  "assets/figma/f2319771-c2ed-4771-8bb8-24558bd933a3.png",
  "assets/figma/a2504d1a-b41c-4791-8ae8-def8117d6cc1.png",
  "assets/figma/d4dd79a1-42d3-44e3-880a-220f6f65c536.png",
  "assets/figma/d145f997-4e9b-455e-96ad-082401053720.png"
];
const BOOKMARK_STATUS_ORANGE_IDS = new Set([
  "figma-bookmark-a-soulful-connection-within",
  "figma-bookmark-whispers-in-the-aether",
  "figma-bookmark-same-thoughts-many-minds"
]);
const BOOKMARK_STATUS_RED_IDS = new Set([
  "figma-bookmark-cycling-three-continents",
  "figma-bookmark-between-iron-and-ember"
]);

const FIGMA_BOOKMARK_GRID = [
  {
    id: "figma-bookmark-designing-modern-typefaces",
    title: "Designing Modern Typefaces",
    url: "studioluma.com",
    category: "Design Resources",
    date: "24 Dec 2025",
    image: "assets/figma/b28dc17c-f431-4fe6-8278-50d4c860480e.png",
    statusIcon: "assets/figma/7ff6bc2f-3644-4353-9de1-04c826884b9f.svg",
    previewImage: "assets/figma/b28dc17c-f431-4fe6-8278-50d4c860480e.png",
    isFetchingImage: false,
    isPermanentCopy: false
  },
  {
    id: "figma-bookmark-lone-street-story",
    title: "Lone Street Story",
    url: "culturecurrent.net",
    category: "Arts & Culture",
    date: "23 Dec 2025",
    image: "assets/figma/9c2257b2-b1f0-49a6-82ec-a85b8e9851ce.png",
    statusIcon: "assets/figma/ab603703-e19d-4d30-88dc-346bcb518faa.svg",
    previewImage: "assets/figma/9c2257b2-b1f0-49a6-82ec-a85b8e9851ce.png",
    isFetchingImage: false,
    isPermanentCopy: false
  },
  {
    id: "figma-bookmark-keeping-websites-secure",
    title: "Keeping Websites Secure",
    url: "wpfoundry.org",
    category: "WP Resources",
    date: "22 Dec 2025",
    image: "assets/figma/ce613400-c3a9-4cc2-8c49-8229612318ba.png",
    statusIcon: "assets/figma/8b3f271f-0709-4751-9287-a3bbe2708f21.svg",
    previewImage: "assets/figma/ce613400-c3a9-4cc2-8c49-8229612318ba.png",
    isFetchingImage: false,
    isPermanentCopy: true
  },
  {
    id: "figma-bookmark-my-daily-basketball-diary",
    title: "My Daily Basketball Diary",
    url: "urbanhoops.io",
    category: "Sports",
    date: "21 Dec 2025",
    image: "assets/figma/fc1b9f02-9578-45eb-b357-012d95045eeb.png",
    statusIcon: "assets/figma/bbcf7d8f-d2e3-4a90-9f2d-b355f0790ee5.svg",
    previewImage: "assets/figma/fc1b9f02-9578-45eb-b357-012d95045eeb.png",
    isFetchingImage: false,
    isPermanentCopy: false
  },
  {
    id: "figma-bookmark-the-widows-happiness",
    title: "The Widows' Happiness",
    url: "thewanderingsoul.com",
    category: "Arts & Culture",
    date: "21 Dec 2025",
    image: "assets/figma/8bea497b-221e-4a21-8201-12ff1d0972f6.png",
    statusIcon: "assets/figma/af7c3979-1b6e-42a6-a242-e5b92cfd27b2.svg",
    previewImage: "assets/figma/8bea497b-221e-4a21-8201-12ff1d0972f6.png",
    isFetchingImage: false,
    isPermanentCopy: true
  },
  {
    id: "figma-bookmark-blue-parrots-of-southern-africa",
    title: "Blue Parrots of Southern Africa",
    url: "youtube.com",
    category: "YouTube Channels",
    date: "21 Dec 2025",
    image: "assets/figma/fd6816e5-b485-4222-aad8-2397e2d776eb.png",
    statusIcon: "assets/figma/c35b6e2a-53eb-4c0f-91d8-3beeec4b1664.svg",
    previewImage: "assets/figma/fd6816e5-b485-4222-aad8-2397e2d776eb.png",
    isFetchingImage: false,
    isPermanentCopy: false
  },
  {
    id: "figma-bookmark-theyyam-a-ritual-performance",
    title: "Theyyam - A Ritual Performance",
    url: "globalnest.com",
    category: "Arts & Culture",
    date: "20 Dec 2025",
    image: "assets/figma/56311d4d-56a2-44f0-a427-5d08c53cabe6.png",
    statusIcon: "assets/figma/170c88a7-d50b-4929-aa0e-f4758bb13c71.svg",
    previewImage: "assets/figma/56311d4d-56a2-44f0-a427-5d08c53cabe6.png",
    isFetchingImage: false,
    isPermanentCopy: true
  },
  {
    id: "figma-bookmark-a-soulful-connection-within",
    title: "A Soulful Connection Within",
    url: "yourgoodsoul.com",
    category: "Arts & Culture",
    date: "20 Dec 2025",
    image: "assets/figma/9c62b37c-d794-4001-b953-ef67a1ce7d82.png",
    statusIcon: "assets/figma/be4ca7e9-67b6-427c-bdd4-32f8d45ee916.svg",
    previewImage: "assets/figma/9c62b37c-d794-4001-b953-ef67a1ce7d82.png",
    isFetchingImage: false,
    isPermanentCopy: true
  },
  {
    id: "figma-bookmark-swimming-in-deep-ocean",
    title: "Swimming in Deep Ocean",
    url: "sportsphere.io",
    category: "Sports",
    date: "20 Dec 2025",
    image: "assets/figma/112a6f0f-96cf-42c9-aed2-55e591480433.png",
    statusIcon: "assets/figma/35f8cba7-26e9-46a7-a83d-fc45a7d47694.svg",
    previewImage: "assets/figma/112a6f0f-96cf-42c9-aed2-55e591480433.png",
    isFetchingImage: false,
    isPermanentCopy: false
  },
  {
    id: "figma-bookmark-joy-of-coding-in-the-cloud",
    title: "Joy of Coding in the Cloud",
    url: "wplaunchlab.com",
    category: "WP Resources",
    date: "19 Dec 2025",
    image: "assets/figma/d2299934-c92d-4a50-a4f6-54c9f7b26404.png",
    statusIcon: "assets/figma/753e71c8-8709-4e14-bc3a-9ceee8e729f5.svg",
    previewImage: "assets/figma/d2299934-c92d-4a50-a4f6-54c9f7b26404.png",
    isFetchingImage: false,
    isPermanentCopy: false
  },
  {
    id: "figma-bookmark-dizzying-towers-of-colours",
    title: "Dizzying Towers of Colours",
    url: "canvastheory.art",
    category: "Design Resources",
    date: "19 Dec 2025",
    image: "assets/figma/c23ed93b-7713-4bed-8265-ee3eb27d388c.png",
    statusIcon: "assets/figma/3f726b90-1097-4caa-b26b-006893d9ac3a.svg",
    previewImage: "assets/figma/c23ed93b-7713-4bed-8265-ee3eb27d388c.png",
    isFetchingImage: false,
    isPermanentCopy: true
  },
  {
    id: "figma-bookmark-a-very-cold-himalayan-odyssey",
    title: "A Very Cold Himalayan Odyssey",
    url: "wanderhaven.com",
    category: "Arts & Culture",
    date: "18 Dec 2025",
    image: "assets/figma/5b09c96e-a310-4f9f-9846-b8b9435dda8c.png",
    statusIcon: "assets/figma/d4286602-b8b6-4349-af47-ef1cfc698c04.svg",
    previewImage: "assets/figma/5b09c96e-a310-4f9f-9846-b8b9435dda8c.png",
    isFetchingImage: false,
    isPermanentCopy: false
  },
  {
    id: "figma-bookmark-evolution-of-a-friendly-jellyfish",
    title: "Evolution of a Friendly Jellyfish",
    url: "youtube.com",
    category: "YouTube Channels",
    date: "17 Dec 2025",
    image: "assets/figma/49dff14d-2805-45a5-b7b1-0f62cdbfc057.png",
    statusIcon: "assets/figma/7aceb57f-ecb1-47bd-ad50-727ab0464664.svg",
    previewImage: "assets/figma/49dff14d-2805-45a5-b7b1-0f62cdbfc057.png",
    isFetchingImage: false,
    isPermanentCopy: false
  },
  {
    id: "figma-bookmark-the-atlas-of-forgotten-dreams",
    title: "The Atlas of Forgotten Dreams",
    url: "pageturnerpress.com",
    category: "Uncategorized",
    date: "17 Dec 2025",
    image: "assets/figma/ea62baf5-9911-48eb-bede-8caeac28f5d2.png",
    statusIcon: "assets/figma/33f39bf7-7353-41dc-ac78-b43050882b64.svg",
    previewImage: "assets/figma/ea62baf5-9911-48eb-bede-8caeac28f5d2.png",
    isFetchingImage: false,
    isPermanentCopy: false
  },
  {
    id: "figma-bookmark-wish-good-things-last-longer",
    title: "Wish Good Things Last Longer",
    url: "globalnest.com",
    category: "Arts & Culture",
    date: "16 Dec 2025",
    image: "assets/figma/08ae3bd1-402c-469b-b756-05ed9b502de5.png",
    statusIcon: "assets/figma/a94fa835-f955-4a6f-ac64-ae029874d725.svg",
    previewImage: "assets/figma/08ae3bd1-402c-469b-b756-05ed9b502de5.png",
    isFetchingImage: false,
    isPermanentCopy: true
  },
  {
    id: "figma-bookmark-the-new-egyptian-vacation",
    title: "The New Egyptian Vacation",
    url: "musestreet.com",
    category: "Arts & Culture",
    date: "16 Dec 2025",
    image: "assets/figma/97473ec3-7028-4368-a952-546489494e3c.png",
    statusIcon: "assets/figma/7f74e4ab-0635-4e97-a18b-f0383f57995b.svg",
    previewImage: "assets/figma/97473ec3-7028-4368-a952-546489494e3c.png",
    isFetchingImage: false,
    isPermanentCopy: false
  },
  {
    id: "figma-bookmark-whispers-in-the-aether",
    title: "Whispers in the Aether",
    url: "youtube.com",
    category: "YouTube Channels",
    date: "14 Dec 2025",
    image: "assets/figma/0c70d02f-3e86-4b3f-ae90-d2bf52ada513.png",
    statusIcon: "assets/figma/dfed5d92-4d66-46bc-8044-9c2f2d49d74a.svg",
    previewImage: "assets/figma/0c70d02f-3e86-4b3f-ae90-d2bf52ada513.png",
    isFetchingImage: false,
    isPermanentCopy: false
  },
  {
    id: "figma-bookmark-subtle-neuronic-condemnation",
    title: "Subtle Neuronic Condemnation",
    url: "wanderhaven.com",
    category: "Arts & Culture",
    date: "13 Dec 2025",
    image: "assets/figma/687d1116-25e8-4ff5-8eab-5dcce001fb61.png",
    statusIcon: "assets/figma/72d8880b-0ab8-4655-8309-0895ab560d6c.svg",
    previewImage: "assets/figma/687d1116-25e8-4ff5-8eab-5dcce001fb61.png",
    isFetchingImage: false,
    isPermanentCopy: false
  },
  {
    id: "figma-bookmark-managing-client-expectations",
    title: "Managing Client Expectations",
    url: "themecrafts.com",
    category: "WP Resources",
    date: "13 Dec 2025",
    image: "assets/figma/9c8f4680-cb59-4bdd-a337-edf386aae937.png",
    statusIcon: "assets/figma/cb0caa5e-ffb1-455e-b432-86a16eb8df9f.svg",
    previewImage: "assets/figma/9c8f4680-cb59-4bdd-a337-edf386aae937.png",
    isFetchingImage: false,
    isPermanentCopy: false
  },
  {
    id: "figma-bookmark-summer-of-25",
    title: "Summer of 25!",
    url: "thepalettepost.co",
    category: "Uncategorized",
    date: "13 Dec 2025",
    image: "assets/figma/7aabd4ca-bdbf-4bab-ae31-34998e255071.png",
    statusIcon: "assets/figma/04e7178b-e6b1-4eba-a668-d7626b54a65e.svg",
    previewImage: "assets/figma/7aabd4ca-bdbf-4bab-ae31-34998e255071.png",
    isFetchingImage: false,
    isPermanentCopy: false
  },
  {
    id: "figma-bookmark-flying-thoughts",
    title: "Flying Thoughts",
    url: "spectrumsociety.com",
    category: "Arts & Culture",
    date: "12 Dec 2025",
    image: "assets/figma/adb416f5-76cd-4230-8f6a-1a3a1436e05b.png",
    statusIcon: "assets/figma/75776a25-3554-401b-93c9-071f5e5f26a6.svg",
    previewImage: "assets/figma/adb416f5-76cd-4230-8f6a-1a3a1436e05b.png",
    isFetchingImage: false,
    isPermanentCopy: false
  },
  {
    id: "figma-bookmark-a-south-american-travel-guide",
    title: "A South American Travel Guide",
    url: "roamculture.com",
    category: "Arts & Culture",
    date: "10 Dec 2025",
    image: "assets/figma/a629c7ca-64f6-4c85-a3df-f47beca9ffe0.png",
    statusIcon: "assets/figma/cb51745b-94b0-4b5b-845f-4c4f66d44134.svg",
    previewImage: "assets/figma/a629c7ca-64f6-4c85-a3df-f47beca9ffe0.png",
    isFetchingImage: false,
    isPermanentCopy: true
  },
  {
    id: "figma-bookmark-glitch-experiment-gone-right",
    title: "Glitch Experiment - Gone Right",
    url: "artechomag.com",
    category: "Arts & Culture",
    date: "10 Dec 2025",
    image: "assets/figma/3c45dbe8-d9f1-41ce-8e06-cab2fa7f1596.png",
    statusIcon: "assets/figma/95e6684b-fa64-42f4-8ffa-509e7cc34dbb.svg",
    previewImage: "assets/figma/3c45dbe8-d9f1-41ce-8e06-cab2fa7f1596.png",
    isFetchingImage: false,
    isPermanentCopy: true
  },
  {
    id: "figma-bookmark-psychology-of-colours-a-bait",
    title: "Psychology of Colours - A Bait?",
    url: "pixelforge.io",
    category: "Design Resources",
    date: "10 Dec 2025",
    image: "assets/figma/ccf1e6b8-9f42-4ff5-9aea-2b098ff50d50.png",
    statusIcon: "assets/figma/85c1f65a-a181-4d13-be1d-c5f1de547b8a.svg",
    previewImage: "assets/figma/ccf1e6b8-9f42-4ff5-9aea-2b098ff50d50.png",
    isFetchingImage: false,
    isPermanentCopy: false
  },
  {
    id: "figma-bookmark-greed-and-red-cherry",
    title: "Greed and Red Cherry",
    url: "culturenova.org",
    category: "Arts & Culture",
    date: "9 Dec 2025",
    image: "assets/figma/14419b43-be59-485f-85d2-5b83887ec53a.png",
    statusIcon: "assets/figma/2b07e327-e81a-43a1-ae56-1b9e4b4875ce.svg",
    previewImage: "assets/figma/14419b43-be59-485f-85d2-5b83887ec53a.png",
    isFetchingImage: false,
    isPermanentCopy: false
  },
  {
    id: "figma-bookmark-life-of-a-nomad",
    title: "Life of a Nomad",
    url: "trailbound.com",
    category: "Arts & Culture",
    date: "8 Dec 2025",
    image: "assets/figma/7ea8acbd-3e8c-4437-b5d5-470025d6c23c.png",
    statusIcon: "assets/figma/59970dc9-1158-4c71-a8ba-a3e516475e0d.svg",
    previewImage: "assets/figma/7ea8acbd-3e8c-4437-b5d5-470025d6c23c.png",
    isFetchingImage: false,
    isPermanentCopy: true
  },
  {
    id: "figma-bookmark-cycling-three-continents",
    title: "Cycling Three Continents",
    url: "apexathletics.org",
    category: "Sports",
    date: "8 Dec 2025",
    image: "assets/figma/79e0a34b-f2dd-4f05-9a60-e3b8ea40e36d.png",
    statusIcon: "assets/figma/39f5eb10-50e3-4d25-9d44-4eaadc1825bb.svg",
    previewImage: "assets/figma/79e0a34b-f2dd-4f05-9a60-e3b8ea40e36d.png",
    isFetchingImage: false,
    isPermanentCopy: false
  },
  {
    id: "figma-bookmark-create-an-accessible-theme",
    title: "Create an Accessible Theme",
    url: "wpstreamline.com",
    category: "WP Resources",
    date: "5 Dec 2025",
    image: "assets/figma/88dbb4a0-468c-4c4e-bb4f-343c2345808c.png",
    statusIcon: "assets/figma/a39b840e-0633-4a40-aae7-64a60a5645bc.svg",
    previewImage: "assets/figma/88dbb4a0-468c-4c4e-bb4f-343c2345808c.png",
    isFetchingImage: false,
    isPermanentCopy: true
  },
  {
    id: "figma-bookmark-basketball-in-the-backyard",
    title: "Basketball in the Backyard",
    url: "matchmindset.com",
    category: "Sports",
    date: "5 Dec 2025",
    image: "assets/figma/901ce4eb-29ef-4ff9-a123-1adc50b37660.png",
    statusIcon: "assets/figma/afc76c8b-94ae-4ae8-8e07-6f0a6c4df1f2.svg",
    previewImage: "assets/figma/901ce4eb-29ef-4ff9-a123-1adc50b37660.png",
    isFetchingImage: false,
    isPermanentCopy: false
  },
  {
    id: "figma-bookmark-7-woven-fabrics",
    title: "7 Woven Fabrics",
    url: "mapmosaic.org",
    category: "Arts & Culture",
    date: "3 Dec 2025",
    image: "assets/figma/86638902-c3e8-4dac-b8e5-6972db47409f.png",
    statusIcon: "assets/figma/bd2220e8-3443-4dd4-99cd-c6c302bc55cc.svg",
    previewImage: "assets/figma/86638902-c3e8-4dac-b8e5-6972db47409f.png",
    isFetchingImage: false,
    isPermanentCopy: false
  },
  {
    id: "figma-bookmark-staring-at-the-white-wall",
    title: "Staring at the White Wall",
    url: "creativeepoch.net",
    category: "Arts & Culture",
    date: "3 Dec 2025",
    image: "assets/figma/daf08ad0-099c-487f-86ec-5a00ecfb1117.png",
    statusIcon: "assets/figma/9ed8a3c6-d431-44bb-ad41-fc7c5c0d6f08.svg",
    previewImage: "assets/figma/daf08ad0-099c-487f-86ec-5a00ecfb1117.png",
    isFetchingImage: false,
    isPermanentCopy: false
  },
  {
    id: "figma-bookmark-the-curious-watering-tanks",
    title: "The Curious Watering Tanks",
    url: "thewanderingsoul.com",
    category: "Arts & Culture",
    date: "1 Dec 2025",
    image: "assets/figma/02e683be-5c60-402d-8e6b-8db336b3e68d.png",
    statusIcon: "assets/figma/6ad7635d-abfb-4dea-9643-81b8697c1995.svg",
    previewImage: "assets/figma/02e683be-5c60-402d-8e6b-8db336b3e68d.png",
    isFetchingImage: false,
    isPermanentCopy: true
  },
  {
    id: "figma-bookmark-a-colourful-culture",
    title: "A Colourful Culture",
    url: "pathwayplanet.org",
    category: "Arts & Culture",
    date: "1 Dec 2025",
    image: "assets/figma/237933b0-6f15-439d-82fd-1e14e7b9ac74.png",
    statusIcon: "assets/figma/2a43f4a2-8832-4020-8270-7ac32165dc11.svg",
    previewImage: "assets/figma/237933b0-6f15-439d-82fd-1e14e7b9ac74.png",
    isFetchingImage: false,
    isPermanentCopy: false
  },
  {
    id: "figma-bookmark-easy-ecommerce-wp-checkout",
    title: "Easy Ecommerce WP Checkout",
    url: "wporbit.co",
    category: "WP Resources",
    date: "30 Nov 2025",
    image: "assets/figma/af97181b-7a50-4250-9742-d2fd072793d8.png",
    statusIcon: "assets/figma/b91d707b-10eb-4bd9-899c-57fdcffd010b.svg",
    previewImage: "assets/figma/af97181b-7a50-4250-9742-d2fd072793d8.png",
    isFetchingImage: false,
    isPermanentCopy: false
  },
  {
    id: "figma-bookmark-weddings-of-the-east-women",
    title: "Weddings of the East Women",
    url: "trailbound.com",
    category: "Arts & Culture",
    date: "28 Nov 2025",
    image: "assets/figma/77b0e551-b6f8-4548-9187-9e26b3a79682.png",
    statusIcon: "assets/figma/38a3cefe-ac8d-4e8a-b930-259f01d077bb.svg",
    previewImage: "assets/figma/77b0e551-b6f8-4548-9187-9e26b3a79682.png",
    isFetchingImage: false,
    isPermanentCopy: false
  },
  {
    id: "figma-bookmark-girl-in-the-black-meadow",
    title: "Girl in the Black Meadow",
    url: "creativeepoch.net",
    category: "Arts & Culture",
    date: "28 Nov 2025",
    image: "assets/figma/2ca51ee8-7619-4e5d-a7d5-10d7cb9d35e5.png",
    statusIcon: "assets/figma/8cf6bf3d-62f9-4779-8144-f8e4bec2c57a.svg",
    previewImage: "assets/figma/2ca51ee8-7619-4e5d-a7d5-10d7cb9d35e5.png",
    isFetchingImage: false,
    isPermanentCopy: false
  },
  {
    id: "figma-bookmark-learn-storytelling-in-20-mins",
    title: "Learn Storytelling in 20 Mins",
    url: "youtube.com",
    category: "YouTube Channels",
    date: "26 Nov 2025",
    image: "assets/figma/ddfd82a3-9745-4bfd-bc4d-78fbae9c8668.png",
    statusIcon: "assets/figma/dcb34474-6693-4b88-9191-7445a47e73bd.svg",
    previewImage: "assets/figma/ddfd82a3-9745-4bfd-bc4d-78fbae9c8668.png",
    isFetchingImage: false,
    isPermanentCopy: false
  },
  {
    id: "figma-bookmark-the-last-librarian-of-evermore",
    title: "The Last Librarian of Evermore",
    url: "thereadingdesk.io",
    category: "Books",
    date: "24 Nov 2025",
    image: "assets/figma/dbadd18e-a9be-481b-bab9-b332f105d512.png",
    statusIcon: "assets/figma/3340869c-05f8-47c2-ad41-525da9dc8855.svg",
    previewImage: "assets/figma/dbadd18e-a9be-481b-bab9-b332f105d512.png",
    isFetchingImage: false,
    isPermanentCopy: false
  },
  {
    id: "figma-bookmark-the-far-east-wise-premonition",
    title: "The Far-East Wise Premonition",
    url: "explorehorizon.com",
    category: "Arts & Culture",
    date: "24 Nov 2025",
    image: "assets/figma/5d819ddd-d5bc-4414-b31c-0e9d2f6b3f8b.png",
    statusIcon: "assets/figma/40f71757-e297-4912-abbf-dd61c2c462a0.svg",
    previewImage: "assets/figma/5d819ddd-d5bc-4414-b31c-0e9d2f6b3f8b.png",
    isFetchingImage: false,
    isPermanentCopy: true
  },
  {
    id: "figma-bookmark-a-growing-colourful-curse",
    title: "A Growing Colourful Curse",
    url: "epicreadshelf.org",
    category: "Books",
    date: "24 Nov 2025",
    image: "assets/figma/bb47c457-0b15-4c10-956a-a64e79022bd8.png",
    statusIcon: "assets/figma/bf7229d7-2cae-4f40-852a-63b2f1e6f255.svg",
    previewImage: "assets/figma/bb47c457-0b15-4c10-956a-a64e79022bd8.png",
    isFetchingImage: false,
    isPermanentCopy: false
  },
  {
    id: "figma-bookmark-a-designers-collection",
    title: "A Designer's Collection",
    url: "formadesigns.net",
    category: "Design Resources",
    date: "22 Nov 2025",
    image: "assets/figma/ef60e7e5-41ed-4abc-a235-6f6dfd596aa2.png",
    statusIcon: "assets/figma/cf18a63b-4e80-487f-8abe-423aa1857981.svg",
    previewImage: "assets/figma/ef60e7e5-41ed-4abc-a235-6f6dfd596aa2.png",
    isFetchingImage: false,
    isPermanentCopy: true
  },
  {
    id: "figma-bookmark-just-pick-a-damn-sport",
    title: "Just Pick a Damn Sport!",
    url: "powerplaynation.com",
    category: "Sports",
    date: "20 Nov 2025",
    image: "assets/figma/78c495f5-7951-44f1-b3ee-5f514472b5e7.png",
    statusIcon: "assets/figma/922ecde2-3c34-431b-9967-28e42b2c6aa1.svg",
    previewImage: "assets/figma/78c495f5-7951-44f1-b3ee-5f514472b5e7.png",
    isFetchingImage: false,
    isPermanentCopy: false
  },
  {
    id: "figma-bookmark-exciting-chipsets-of-the-future",
    title: "Exciting Chipsets of the Future",
    url: "codeandcontent.net",
    category: "WP Resources",
    date: "20 Nov 2025",
    image: "assets/figma/42b9f033-75ed-47fb-8cf0-50bce7de0c74.png",
    statusIcon: "assets/figma/6d18ef9f-34b3-4b56-8d8d-c7e596cd6a54.svg",
    previewImage: "assets/figma/42b9f033-75ed-47fb-8cf0-50bce7de0c74.png",
    isFetchingImage: false,
    isPermanentCopy: false
  },
  {
    id: "figma-bookmark-combating-laziness-at-play",
    title: "Combating Laziness at Play",
    url: "proplayzone.com",
    category: "Sports",
    date: "18 Nov 2025",
    image: "assets/figma/b947aa12-fbc7-4efc-abf9-11ac3d4102b4.png",
    statusIcon: "assets/figma/10e234e0-348d-4d4b-acfb-4c454d0427a7.svg",
    previewImage: "assets/figma/b947aa12-fbc7-4efc-abf9-11ac3d4102b4.png",
    isFetchingImage: false,
    isPermanentCopy: false
  },
  {
    id: "figma-bookmark-learn-wordpress-the-right-way",
    title: "Learn WordPress the Right Way",
    url: "wplaunchlab.com",
    category: "WP Resources",
    date: "18 Nov 2025",
    image: "assets/figma/32845145-5eab-4a9f-91cc-b5c1cebd72b6.png",
    statusIcon: "assets/figma/9743055c-fa4f-4ded-a4f4-ad0e8d8db094.svg",
    previewImage: "assets/figma/32845145-5eab-4a9f-91cc-b5c1cebd72b6.png",
    isFetchingImage: false,
    isPermanentCopy: false
  },
  {
    id: "figma-bookmark-same-thoughts-many-minds",
    title: "Same Thoughts, Many Minds",
    url: "culturevoyage.es",
    category: "Arts & Culture",
    date: "17 Nov 2025",
    image: "assets/figma/3f8492aa-7a3d-493f-852c-e4eaab6f89f9.png",
    statusIcon: "assets/figma/99fce8d6-93c4-4413-9c58-38ba6e24e81b.svg",
    previewImage: "assets/figma/3f8492aa-7a3d-493f-852c-e4eaab6f89f9.png",
    isFetchingImage: false,
    isPermanentCopy: false
  },
  {
    id: "figma-bookmark-build-a-million-dollar-channel",
    title: "Build a Million Dollar Channel",
    url: "youtube.com",
    category: "YouTube Channels",
    date: "17 Nov 2025",
    image: "assets/figma/7b734baf-1287-4d69-9ed3-7e22bb1e98f8.png",
    statusIcon: "assets/figma/15dfb6f5-355c-4b77-8fdc-980c7b60109b.svg",
    previewImage: "assets/figma/7b734baf-1287-4d69-9ed3-7e22bb1e98f8.png",
    isFetchingImage: false,
    isPermanentCopy: false
  },
  {
    id: "figma-bookmark-aligning-wp-with-design",
    title: "Aligning WP with Design",
    url: "shapeandspace.com",
    category: "WP Resources",
    date: "15 Nov 2025",
    image: "assets/figma/7059f770-f572-401e-88da-5af4e5fb79e0.png",
    statusIcon: "assets/figma/f18a8196-0830-4f17-96ea-e8a27f960ff8.svg",
    previewImage: "assets/figma/7059f770-f572-401e-88da-5af4e5fb79e0.png",
    isFetchingImage: false,
    isPermanentCopy: false
  },
  {
    id: "figma-bookmark-best-strawberry-cake-recipe",
    title: "Best Strawberry Cake Recipe",
    url: "youtube.com",
    category: "Uncategorized",
    date: "13 Nov 2025",
    image: "assets/figma/25adaeb9-aba5-4517-b0eb-b1058c7255e6.png",
    statusIcon: "assets/figma/d952dd1c-3f1e-4bd3-9376-415c8d27eadc.svg",
    previewImage: "assets/figma/25adaeb9-aba5-4517-b0eb-b1058c7255e6.png",
    isFetchingImage: false,
    isPermanentCopy: false
  },
  {
    id: "figma-bookmark-echoes-of-rain",
    title: "Echoes of Rain",
    url: "pureinkheaven.com",
    category: "Books",
    date: "13 Nov 2025",
    image: "assets/figma/f2679305-5451-4527-865a-3ee78bb88aaa.png",
    statusIcon: "assets/figma/10860fba-8942-4b7f-9c7e-524b3b9a4eba.svg",
    previewImage: "assets/figma/f2679305-5451-4527-865a-3ee78bb88aaa.png",
    isFetchingImage: false,
    isPermanentCopy: false
  },
  {
    id: "figma-bookmark-top-security-wordpress-plugins",
    title: "Top Security WordPress Plugins",
    url: "pluginpulse.com",
    category: "WP Resources",
    date: "11 Nov 2025",
    image: "assets/figma/6a192104-2918-4a94-8c6b-f86ff3cc48c0.png",
    statusIcon: "assets/figma/f203537c-b512-4493-8ced-01b7031abbd2.svg",
    previewImage: "assets/figma/6a192104-2918-4a94-8c6b-f86ff3cc48c0.png",
    isFetchingImage: false,
    isPermanentCopy: false
  },
  {
    id: "figma-bookmark-generate-ai-videos-instantly",
    title: "Generate AI Videos Instantly",
    url: "youtube.com",
    category: "YouTube Channels",
    date: "8 Nov 2025",
    image: "assets/figma/b3384cae-3e25-46d2-9cd9-a91473dd4d40.png",
    statusIcon: "assets/figma/8b00b85e-ce7f-45a8-b7c7-6938bcd497bc.svg",
    previewImage: "assets/figma/b3384cae-3e25-46d2-9cd9-a91473dd4d40.png",
    isFetchingImage: false,
    isPermanentCopy: false
  },
  {
    id: "figma-bookmark-design-for-the-corporate-client",
    title: "Design for the Corporate Client",
    url: "patterncore.design",
    category: "Design Resources",
    date: "6 Nov 2025",
    image: "assets/figma/47d5e558-5bc8-46d4-8786-301bbf96bd9f.png",
    statusIcon: "assets/figma/e55377f4-5550-40b5-a8b0-607596259f61.svg",
    previewImage: "assets/figma/47d5e558-5bc8-46d4-8786-301bbf96bd9f.png",
    isFetchingImage: false,
    isPermanentCopy: true
  },
  {
    id: "figma-bookmark-easy-tasty-breakfast-picks",
    title: "Easy & Tasty Breakfast Picks",
    url: "youtube.com",
    category: "YouTube Channels",
    date: "6 Nov 2025",
    image: "assets/figma/491c0171-30ec-4e0d-ab03-2f86f3253673.png",
    statusIcon: "assets/figma/fcf1f6b2-fb73-4895-838e-868741ddc1f2.svg",
    previewImage: "assets/figma/491c0171-30ec-4e0d-ab03-2f86f3253673.png",
    isFetchingImage: false,
    isPermanentCopy: false
  },
  {
    id: "figma-bookmark-tracking-down-the-maneater",
    title: "Tracking Down the Maneater",
    url: "youtube.com",
    category: "Uncategorized",
    date: "3 Nov 2025",
    image: "assets/figma/5c6cb598-0d38-48de-a35d-ba5837b1b76d.png",
    statusIcon: "assets/figma/005cd61d-f21e-4d75-a529-188e4bbc9f49.svg",
    previewImage: "assets/figma/5c6cb598-0d38-48de-a35d-ba5837b1b76d.png",
    isFetchingImage: false,
    isPermanentCopy: false
  },
  {
    id: "figma-bookmark-choosing-the-right-typeface",
    title: "Choosing the Right Typeface",
    url: "designverve.com",
    category: "Design Resources",
    date: "2 Nov 2025",
    image: "assets/figma/051c19de-f938-48a6-b758-44c081885360.png",
    statusIcon: "assets/figma/bd3c0ee3-4a23-4edc-8c85-172b4016311d.svg",
    previewImage: "assets/figma/051c19de-f938-48a6-b758-44c081885360.png",
    isFetchingImage: false,
    isPermanentCopy: true
  },
  {
    id: "figma-bookmark-before-you-knew",
    title: "Before You Knew",
    url: "pagealchemy.io",
    category: "Books",
    date: "2 Nov 2025",
    image: "assets/figma/f988b33f-30d6-4d09-a5f3-81cfadb4d7ef.png",
    statusIcon: "assets/figma/23fb7e59-f782-4099-abc7-d7c482cc130b.svg",
    previewImage: "assets/figma/f988b33f-30d6-4d09-a5f3-81cfadb4d7ef.png",
    isFetchingImage: false,
    isPermanentCopy: true
  },
  {
    id: "figma-bookmark-20-resources-for-all-designers",
    title: "20 Resources for All Designers",
    url: "studioluma.com",
    category: "Design Resources",
    date: "1 Nov 2025",
    image: "assets/figma/7fda01c7-003b-4618-bff3-cff27c70bffa.png",
    statusIcon: "assets/figma/93eb1420-416c-4828-9479-7ebaa4256ca7.svg",
    previewImage: "assets/figma/7fda01c7-003b-4618-bff3-cff27c70bffa.png",
    isFetchingImage: false,
    isPermanentCopy: false
  },
  {
    id: "figma-bookmark-beautiful-calligraphic-art-project",
    title: "Beautiful Calligraphic Art Project",
    url: "designdrift.co",
    category: "Design Resources",
    date: "1 Nov 2025",
    image: "assets/figma/99374a85-5bd8-485d-a61a-b52471eef4c5.png",
    statusIcon: "assets/figma/8034bc1c-c1e4-4eb9-ae08-be2bd3192f93.svg",
    previewImage: "assets/figma/99374a85-5bd8-485d-a61a-b52471eef4c5.png",
    isFetchingImage: false,
    isPermanentCopy: false
  },
  {
    id: "figma-bookmark-a-holographic-reflection",
    title: "A Holographic Reflection",
    url: "shapeandspace.com",
    category: "Design Resources",
    date: "29 Oct 2025",
    image: "assets/figma/18ad2cad-9d44-46dd-9eed-638ce494436f.png",
    statusIcon: "assets/figma/a94c56a8-1b77-4632-9787-7eb8152cc347.svg",
    previewImage: "assets/figma/18ad2cad-9d44-46dd-9eed-638ce494436f.png",
    isFetchingImage: false,
    isPermanentCopy: false
  },
  {
    id: "figma-bookmark-drowning-into-the-space",
    title: "Drowning into the Space",
    url: "youtube.com",
    category: "YouTube Channels",
    date: "26 Oct 2025",
    image: "assets/figma/8026712b-869b-4b53-9ef8-4b40b83896ee.png",
    statusIcon: "assets/figma/9bdcb5db-1efd-415a-8426-0f50c74d5c2e.svg",
    previewImage: "assets/figma/8026712b-869b-4b53-9ef8-4b40b83896ee.png",
    isFetchingImage: false,
    isPermanentCopy: false
  },
  {
    id: "figma-bookmark-a-guide-to-iconography",
    title: "A Guide to Iconography",
    url: "patterncore.design",
    category: "Design Resources",
    date: "28 Oct 2025",
    image: "assets/figma/84752648-490f-4d2c-93de-7fa55a3a1c54.png",
    statusIcon: "assets/figma/828df9ef-df0c-4ab8-9055-4b1ad8cef331.svg",
    previewImage: "assets/figma/84752648-490f-4d2c-93de-7fa55a3a1c54.png",
    isFetchingImage: false,
    isPermanentCopy: true
  },
  {
    id: "figma-bookmark-olives-of-the-middle-east",
    title: "Olives of the Middle East",
    url: "youtube.com",
    category: "YouTube Channels",
    date: "22 Oct 2025",
    image: "assets/figma/ce65d058-04d2-4837-8d8f-20b170de2ce1.png",
    statusIcon: "assets/figma/6c128324-021e-4739-9ef9-44d94a795501.svg",
    previewImage: "assets/figma/ce65d058-04d2-4837-8d8f-20b170de2ce1.png",
    isFetchingImage: false,
    isPermanentCopy: false
  },
  {
    id: "figma-bookmark-a-season-of-paper-butterflies",
    title: "A Season of Paper Butterflies",
    url: "youtube.com",
    category: "YouTube Channels",
    date: "19 Oct 2025",
    image: "assets/figma/e0ecdfc1-849c-481c-924f-ac18d19f6b38.png",
    statusIcon: "assets/figma/f26cf30a-0908-4103-bd07-ed00eafb8e92.svg",
    previewImage: "assets/figma/e0ecdfc1-849c-481c-924f-ac18d19f6b38.png",
    isFetchingImage: false,
    isPermanentCopy: false
  },
  {
    id: "figma-bookmark-between-iron-and-ember",
    title: "Between Iron and Ember",
    url: "theboundshelf.com",
    category: "Books",
    date: "19 Oct 2025",
    image: "assets/figma/695ac2a9-2ac6-4549-af49-4e879be25938.png",
    statusIcon: "assets/figma/390f875d-6d03-49fa-b583-1940df6a79c9.svg",
    previewImage: "assets/figma/695ac2a9-2ac6-4549-af49-4e879be25938.png",
    isFetchingImage: false,
    isPermanentCopy: false
  },
  {
    id: "figma-bookmark-birmingham-museums-trust",
    title: "Birmingham Museums Trust",
    url: "wandernest.org",
    category: "Arts & Culture",
    date: "19 Oct 2025",
    image: "assets/figma/40675bc2-46b7-4fac-b522-aae945a3560b.png",
    statusIcon: "assets/figma/c2a1f6bb-ee20-4edd-8c95-94e072e51052.svg",
    previewImage: "assets/figma/40675bc2-46b7-4fac-b522-aae945a3560b.png",
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

const WP_RESOURCES_PARENT_CATEGORY = "WP Resources";
let newBookmarkPhaseTimerId = null;
let newBookmarkCloseTimerId = null;
const EXPORT_FORMATS = [
  { value: "html", label: "HTML (.html)", description: "Import into any browser" },
  { value: "json", label: "JSON (.json)", description: "For developers & automation" },
  { value: "csv", label: "CSV (.csv)", description: "For spreadsheets & analysis" },
  { value: "markdown", label: "Markdown (.md)", description: "For notes & knowledge bases" }
];

const appState = {
  newBookmarkExpanded: false,
  newBookmarkPhase: "default",
  bookmarkUrl: "",
  createCategoryState: "default",
  isCreatingCategory: false,
  newCategoryName: "New Category",
  categoryLinks: createInitialCategoryLinks(),
  expandedCategoryIds: [],
  activeGlobalSidebarItem: "Bookmarks",
  activeSidebarCategory: "All Bookmarks",
  draggedCategoryId: null,
  dropTargetCategoryId: null,
  selectedBookmarkIds: [],
  activeContentView: "cards",
  contentKebabOpen: false,
  exportFormatsOpen: false,
  importBookmarksModalOpen: false,
  allBookmarksLastSaved: "29 Dec 2025",
  allBookmarksLastModified: "21 Dec 2025",
  allBookmarksSavePermanentCopy: false,
  allBookmarksPasswordProtected: false,
  allBookmarksTags: [],
  allBookmarksTagDraft: "",
  allBookmarksNote: "",
  categoryInspectorStates: {},
  categoryAccessStates: {},
  lockedInspectorCategory: null,
  unlockedCategoryNames: [],
  uncategorizedLastSaved: "",
  uncategorizedLastModified: "",
  uncategorizedIsFavourite: false,
  uncategorizedSavePermanentCopy: false,
  uncategorizedPasswordProtected: false,
  uncategorizedTags: [],
  uncategorizedTagDraft: "",
  uncategorizedNote: "",
  activeInspectorBookmarkId: null,
  moveBookmarkMenuOpen: false,
  moveBookmarkTargetCategory: "",
  deleteBookmarkModalOpen: false,
  pendingDeleteBookmarkId: null,
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

const BOOKMARK_FILTER_LINKS = [
  { label: "Favourites", count: "52", icon: BOOKMARK_STAR_ICON },
  { label: "Links", count: "71", icon: BOOKMARK_LINK_ICON },
  { label: "Articles", count: "44", icon: BOOKMARK_DOCUMENTS_ICON },
  { label: "Audio", count: "113", icon: BOOKMARK_AUDIO_ICON, iconClass: "bookmark-audio-icon", iconFrameClass: "bookmark-audio-frame" },
  { label: "Videos", count: "168", icon: BOOKMARK_VIDEO_ICON, iconClass: "bookmark-video-icon", iconFrameClass: "bookmark-video-frame" },
  { label: "Untagged", count: "56", icon: BOOKMARK_UNTAGGED_ICON, iconClass: "bookmark-untagged-icon", iconFrameClass: "bookmark-untagged-frame" }
];

const SUPPORTED_INSPECTOR_CATEGORIES = new Set(["All Bookmarks", "Uncategorized"]);
const BOOKMARK_TYPE_ORDER = ["Article", "Audio", "Link", "Video"];
const BOOKMARK_AUDIO_IDS = new Set([
  "figma-bookmark-echoes-of-rain",
  "figma-bookmark-before-you-knew",
  "figma-bookmark-a-season-of-paper-butterflies"
]);
const BOOKMARK_LINK_IDS = new Set([
  "figma-bookmark-the-atlas-of-forgotten-dreams",
  "figma-bookmark-best-strawberry-cake-recipe",
  "figma-bookmark-tracking-down-the-maneater",
  "figma-bookmark-cycling-three-continents",
  "figma-bookmark-just-pick-a-damn-sport",
  "figma-bookmark-a-designers-collection"
]);
const INSPECTOR_STATE_PATHS = {
  "All Bookmarks": {
    lastSaved: "allBookmarksLastSaved",
    lastModified: "allBookmarksLastModified",
    savePermanentCopy: "allBookmarksSavePermanentCopy",
    passwordProtected: "allBookmarksPasswordProtected",
    tags: "allBookmarksTags",
    tagDraft: "allBookmarksTagDraft",
    note: "allBookmarksNote"
  },
  Uncategorized: {
    lastSaved: "uncategorizedLastSaved",
    lastModified: "uncategorizedLastModified",
    isFavourite: "uncategorizedIsFavourite",
    savePermanentCopy: "uncategorizedSavePermanentCopy",
    passwordProtected: "uncategorizedPasswordProtected",
    tags: "uncategorizedTags",
    tagDraft: "uncategorizedTagDraft",
    note: "uncategorizedNote"
  }
};

appState.bookmarks = FIGMA_BOOKMARK_GRID.map((bookmark, index) => ({
  ...bookmark,
  image: FIGMA_BOOKMARK_IMAGE_URLS[index] || bookmark.image,
  previewImage: FIGMA_BOOKMARK_IMAGE_URLS[index] || bookmark.previewImage || bookmark.image,
  statusIcon: getBookmarkStatusIcon(bookmark),
  type: inferBookmarkType(bookmark),
  modifiedDate: bookmark.modifiedDate || bookmark.date,
  isFavourite: Boolean(bookmark.isFavourite),
  isDeleted: Boolean(bookmark.isDeleted),
  deletedAt: bookmark.deletedAt || "",
  deletedFromCategory: bookmark.deletedFromCategory || "",
  tags: Array.isArray(bookmark.tags) ? bookmark.tags : [],
  tagDraft: bookmark.tagDraft || "",
  note: bookmark.note || "",
  priority: bookmark.priority || "normal",
  reminder: bookmark.reminder || "",
  articleHtml: buildPreviewArticle(bookmark.title, bookmark.url)
}));

assignWpResourceSubcategories(appState.bookmarks);

function getByPath(object, path) {
  return path.split(".").reduce((acc, key) => (acc ? acc[key] : undefined), object);
}

function inferBookmarkType(bookmark) {
  if (BOOKMARK_AUDIO_IDS.has(bookmark.id)) {
    return "Audio";
  }

  if (BOOKMARK_LINK_IDS.has(bookmark.id)) {
    return "Link";
  }

  if (bookmark.url === "youtube.com") {
    return "Video";
  }

  return "Article";
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
  const isSectionActive = isGlobalSidebarSectionActive(section);
  const sectionLinks = section.links
    .map(
      (link) => `
        <button class="sidebar-submenu-link${appState.activeGlobalSidebarItem === link.label ? " is-active" : ""}" type="button" data-action="select-global-sidebar-item" data-sidebar-item="${escapeHtml(link.label)}" aria-pressed="${appState.activeGlobalSidebarItem === link.label}">
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
    <section class="sidebar-section${isSectionActive ? " is-active-section" : ""}" data-sidebar-section="${escapeHtml(section.title)}">
      <button class="sidebar-section-header sidebar-section-header-button" type="button" data-action="select-global-sidebar-item" data-sidebar-item="${escapeHtml(section.title)}" aria-pressed="${appState.activeGlobalSidebarItem === section.title}">
        <span class="sidebar-section-icon ${icon.className || ""}">
          <span class="sidebar-section-icon-frame ${icon.frameClassName || ""}">
            <img src="${icon.src}" alt="" width="20" height="20" />
          </span>
        </span>
        <span class="sidebar-section-title">${section.title}</span>
      </button>
      ${section.links.length ? `<div class="sidebar-section-links">${sectionLinks}</div>` : ""}
    </section>
    ${index < SIDEBAR_SECTIONS.length - 1 ? `<span class="sidebar-divider" aria-hidden="true"></span>` : ""}
  `;
}

function isGlobalSidebarSectionActive(section) {
  return section.title === appState.activeGlobalSidebarItem || section.links.some((link) => link.label === appState.activeGlobalSidebarItem);
}

function clearNewBookmarkTimers() {
  if (newBookmarkPhaseTimerId) {
    clearTimeout(newBookmarkPhaseTimerId);
    newBookmarkPhaseTimerId = null;
  }

  if (newBookmarkCloseTimerId) {
    clearTimeout(newBookmarkCloseTimerId);
    newBookmarkCloseTimerId = null;
  }
}

function openNewBookmarkControl() {
  clearNewBookmarkTimers();
  appState.newBookmarkExpanded = true;
  appState.newBookmarkPhase = "expand";

  newBookmarkPhaseTimerId = setTimeout(() => {
    appState.newBookmarkPhase = "postactive";
    renderShell();
  }, 420);
}

function resetNewBookmarkControl({ clearValue = false } = {}) {
  clearNewBookmarkTimers();
  appState.newBookmarkExpanded = false;
  appState.newBookmarkPhase = "default";

  if (clearValue) {
    appState.bookmarkUrl = "";
  }
}

function playNewBookmarkSavedState() {
  clearNewBookmarkTimers();
  appState.newBookmarkPhase = "saving";
  renderShell();

  newBookmarkPhaseTimerId = setTimeout(() => {
    appState.newBookmarkPhase = "saved";
    renderShell();

    newBookmarkCloseTimerId = setTimeout(() => {
      resetNewBookmarkControl({ clearValue: true });
      renderShell();
    }, 900);
  }, 180);
}

function renderNewBookmarkControl() {
  const inputValue = appState.bookmarkUrl.replace(/"/g, "&quot;");
  const hasBookmarkUrl = Boolean(appState.bookmarkUrl.trim());
  const isExpanded = appState.newBookmarkExpanded;
  const controlState = isExpanded ? appState.newBookmarkPhase : "default";
  const saveStateClass = controlState === "saved"
    ? " is-saved"
    : controlState === "saving"
      ? " is-saving"
      : hasBookmarkUrl
        ? ""
        : " is-disabled";
  const placeholderText = controlState === "postactive" || controlState === "saving"
    ? "Type or paste a URL, then hit Enter or Save. Press Esc to cancel"
    : "Type or paste a URL, then hit Enter or Save";
  const saveLabel = controlState === "saved" ? "Saved" : "Save bookmark";
  const expandedClass = isExpanded ? " is-expanded" : "";
  const phaseClass = ` is-${controlState}`;

  if (!isExpanded) {
    return `
      <div class="new-bookmark-control${expandedClass}${phaseClass}">
        <button class="new-bookmark-trigger" type="button" data-action="toggle-new-bookmark" aria-expanded="false">
          <span class="new-bookmark-trigger-main">
            <img class="new-bookmark-icon" src="${ADD_BOOKMARK_ICON}" alt="" width="20" height="20" />
            <span class="new-bookmark-label">New bookmark</span>
          </span>
        </button>
      </div>
    `;
  }

  return `
    <div class="new-bookmark-control${expandedClass}${phaseClass}">
      ${controlState === "expand" ? `
        <button class="new-bookmark-trigger new-bookmark-trigger-expanded" type="button" data-action="toggle-new-bookmark" aria-expanded="true">
          <span class="new-bookmark-trigger-main">
            <img class="new-bookmark-icon" src="${ADD_BOOKMARK_ICON}" alt="" width="20" height="20" />
            <span class="new-bookmark-label">New bookmark</span>
          </span>
        </button>
      ` : ""}
      <div class="new-bookmark-field-row" aria-hidden="${controlState === "expand"}">
        <div class="new-bookmark-url-shell">
          <input
            class="new-bookmark-url-input"
            type="text"
            placeholder="${placeholderText}"
            value="${inputValue}"
            data-role="new-bookmark-input"
            ${controlState === "saved" ? "disabled" : ""}
          />
        </div>
        <button class="new-bookmark-save${saveStateClass}" type="button" data-action="save-bookmark"${controlState === "saved" || controlState === "saving" || !hasBookmarkUrl ? " disabled" : ""}>
          ${controlState === "saving" ? `<span class="new-bookmark-save-progress-icon" aria-hidden="true"></span>` : ""}
          ${controlState === "saved" ? `<span class="new-bookmark-save-success-icon" aria-hidden="true"></span>` : ""}
          <span class="new-bookmark-save-label">${saveLabel}</span>
        </button>
      </div>
    </div>
  `;
}

function renderBookmarkSidebarLink(link) {
  const isChild = Boolean(link.isChild);
  const isActive = isSidebarCategoryActive(link.label);
  const isLockedCategory = shouldShowLockedCategoryInSidebar(link.label);
  const iconSource = isLockedCategory ? BOOKMARK_LOCKED_ICON : (link.defaultIcon || link.icon);
  const iconClassName = isLockedCategory ? "bookmark-locked-icon" : (link.defaultIconClass || link.iconClass || "");
  const stateClass = isActive ? " is-active" : "";
  const isExpandable = Boolean(link.children?.length);
  const dragStateClass = appState.draggedCategoryId === link.id ? " is-dragging" : "";
  const dropTargetClass = appState.dropTargetCategoryId === link.id ? " is-drop-target" : "";
  const chevronMarkup = isExpandable
    ? `<span class="bookmark-sidebar-link-chevron"><img src="${BOOKMARK_CHEVRON_ICON}" alt="" width="8.249" height="4.448" /></span>`
    : "";
  const linkCount = link.group === "filter" ? link.count : String(getCategoryBookmarkCount(link.label));
  const ariaExpanded = isExpandable ? ` aria-expanded="${isCategoryExpanded(link.id)}"` : "";
  const childClass = isChild ? " bookmark-sidebar-child-link" : "";
  const rootClass = !isChild && link.group === "category" ? " bookmark-sidebar-root-link" : "";

  return `
    <button
      class="bookmark-sidebar-link${rootClass}${childClass}${stateClass}${dragStateClass}${dropTargetClass}"
      type="button"
      data-action="select-sidebar-category"
      data-category="${escapeHtml(link.label)}"
      data-category-id="${escapeHtml(link.id)}"
      draggable="true"${ariaExpanded}>
      <span class="bookmark-sidebar-link-main">
        <span class="bookmark-sidebar-link-icon ${iconClassName}">
          <span class="bookmark-sidebar-link-icon-frame ${link.iconFrameClass || ""}">
            <img src="${iconSource}" alt="" width="20" height="20" />
          </span>
        </span>
        <span class="bookmark-sidebar-link-label">${link.label}</span>
        ${chevronMarkup}
      </span>
      <span class="bookmark-sidebar-link-count">${linkCount}</span>
    </button>
  `;
}

function renderBookmarkSidebarEntry(link, depth = 0) {
  const isChild = depth > 0;
  const linkWithMeta = { ...link, isChild };
  if (!link.children?.length) {
    return renderBookmarkSidebarLink(linkWithMeta);
  }

  const childLinks = link.children
    .map((child) => `<div class="bookmark-sidebar-child-slot">${renderBookmarkSidebarEntry(child, depth + 1)}</div>`)
    .join("");
  const expandedClass = isCategoryExpanded(link.id) ? " is-expanded" : "";

  return `
    <div class="bookmark-sidebar-parent-group${expandedClass}${isChild ? " bookmark-sidebar-child-parent-group" : ""}" data-parent-category-id="${escapeHtml(link.id)}">
      ${renderBookmarkSidebarLink(linkWithMeta)}
      <div class="bookmark-sidebar-parent-children-shell" aria-hidden="${isCategoryExpanded(link.id) ? "false" : "true"}">
        <div class="bookmark-sidebar-parent-children">
          <div class="bookmark-sidebar-parent-child-list">
            ${childLinks}
          </div>
        </div>
      </div>
    </div>
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
  const categoryLinks = sidebarLinks.categoryLinks.map(renderBookmarkSidebarEntry).join("");
  const filterLinks = sidebarLinks.filterLinks.map(renderBookmarkSidebarLink).join("");
  const createCategoryClass = appState.createCategoryState === "active" ? " is-active" : "";
  const categoryContent = appState.isCreatingCategory
    ? `${categoryLinks}${renderNewCategoryDraftRow()}`
    : categoryLinks;
  const categoryCount = String(countCategoryLinks(appState.categoryLinks));

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
  const filterLinks = BOOKMARK_FILTER_LINKS.map((link) => ({ ...link, group: "filter" }));

  return {
    primaryLinks,
    categoryLinks: appState.categoryLinks.map((link) => ({ ...link, group: "category" })),
    filterLinks
  };
}

function normalizeBookmarkCategory(categoryName) {
  if (categoryName === "Arts and Culture") {
    return "Arts & Culture";
  }

  return categoryName;
}

function getRootCategoryOptions() {
  return appState.categoryLinks.map((link) => ({
    id: link.id,
    label: link.label,
    bookmarkCategory: normalizeBookmarkCategory(link.label)
  }));
}

function getBookmarkCurrentMoveCategory(bookmark) {
  return normalizeBookmarkCategory(bookmark?.category || "Uncategorized");
}

function formatCategoryLabel(categoryName) {
  return normalizeBookmarkCategory(categoryName);
}

function openBookmarkMoveMenu(bookmark) {
  if (!bookmark) {
    return;
  }

  appState.moveBookmarkMenuOpen = true;
  appState.moveBookmarkTargetCategory = "";
}

function closeBookmarkMoveMenu() {
  appState.moveBookmarkMenuOpen = false;
  appState.moveBookmarkTargetCategory = "";
}

function moveBookmarkToCategory(bookmarkId, nextCategory) {
  const bookmark = appState.bookmarks.find((item) => item.id === bookmarkId);
  if (!bookmark || !nextCategory) {
    return false;
  }

  const previousCategory = bookmark.category;
  bookmark.category = nextCategory;
  if (nextCategory !== WP_RESOURCES_PARENT_CATEGORY) {
    bookmark.subcategory = "";
  }
  bookmark.modifiedDate = formatBookmarkDate(new Date());
  updateRelatedInspectorModifiedDates(previousCategory);
  updateRelatedInspectorModifiedDates(nextCategory);
  closeBookmarkMoveMenu();
  return true;
}

function isSidebarCategoryActive(categoryName) {
  const categoryLink = findCategoryLinkByLabel(categoryName);
  if (!categoryLink) {
    return appState.activeSidebarCategory === categoryName;
  }

  return categoryLink.label === appState.activeSidebarCategory || hasDescendantCategoryLabel(categoryLink, appState.activeSidebarCategory);
}

function assignWpResourceSubcategories(bookmarks) {
  const wpBookmarks = bookmarks.filter((bookmark) => normalizeBookmarkCategory(bookmark.category) === WP_RESOURCES_PARENT_CATEGORY);
  wpBookmarks.forEach((bookmark, index) => {
    bookmark.subcategory = index < 8 ? "Themes" : "Premium Plugins";
  });
}

function createInitialCategoryLinks() {
  return [
    createCategoryLink({ id: "books", label: "Books", icon: BOOKMARK_FOLDER_ICON }),
    createCategoryLink({
      id: "wp-resources",
      label: "WP Resources",
      icon: BOOKMARK_FOLDER_ICON,
      children: [
        createCategoryLink({
          id: "wp-resources-themes",
          label: "Themes",
          icon: BOOKMARK_FOLDER_ICON,
          bookmarkFilter: { type: "subcategory", parentCategory: WP_RESOURCES_PARENT_CATEGORY, value: "Themes" }
        }),
        createCategoryLink({
          id: "wp-resources-premium-plugins",
          label: "Premium Plugins",
          icon: BOOKMARK_FOLDER_ICON,
          bookmarkFilter: { type: "subcategory", parentCategory: WP_RESOURCES_PARENT_CATEGORY, value: "Premium Plugins" }
        })
      ]
    }),
    createCategoryLink({ id: "youtube-channels", label: "YouTube Channels", icon: BOOKMARK_FOLDER_ICON }),
    createCategoryLink({
      id: "arts-and-culture",
      label: "Arts and Culture",
      icon: BOOKMARK_FOLDER_ICON,
      lockedByDefault: true
    }),
    createCategoryLink({ id: "sports", label: "Sports", icon: BOOKMARK_FOLDER_ICON }),
    createCategoryLink({ id: "design-resources", label: "Design Resources", icon: BOOKMARK_FOLDER_ICON })
  ];
}

function createCategoryLink({
  id,
  label,
  icon,
  iconClass = "",
  iconFrameClass = "",
  bookmarkFilter = null,
  children = [],
  lockedByDefault = false
}) {
  return {
    id,
    label,
    icon,
    iconClass,
    iconFrameClass,
    defaultIcon: icon,
    defaultIconClass: iconClass,
    lockedByDefault,
    bookmarkFilter,
    children
  };
}

function countCategoryLinks(links) {
  return links.reduce((count, link) => count + 1 + countCategoryLinks(link.children || []), 0);
}

function findCategoryLinkByLabel(label, links = appState.categoryLinks) {
  for (const link of links) {
    if (link.label === label) {
      return link;
    }

    const childMatch = findCategoryLinkByLabel(label, link.children || []);
    if (childMatch) {
      return childMatch;
    }
  }

  return null;
}

function findCategoryLinkById(id, links = appState.categoryLinks) {
  for (const link of links) {
    if (link.id === id) {
      return link;
    }

    const childMatch = findCategoryLinkById(id, link.children || []);
    if (childMatch) {
      return childMatch;
    }
  }

  return null;
}

function hasDescendantCategoryLabel(link, targetLabel) {
  return (link.children || []).some((child) => child.label === targetLabel || hasDescendantCategoryLabel(child, targetLabel));
}

function isCategoryExpanded(categoryId) {
  return appState.expandedCategoryIds.includes(categoryId);
}

function setCategoryExpanded(categoryId, expanded) {
  if (expanded) {
    if (!appState.expandedCategoryIds.includes(categoryId)) {
      appState.expandedCategoryIds.push(categoryId);
    }
    return;
  }

  appState.expandedCategoryIds = appState.expandedCategoryIds.filter((id) => id !== categoryId);
}

function removeCategoryLinkById(links, targetId) {
  let removedLink = null;
  const nextLinks = [];

  links.forEach((link) => {
    if (link.id === targetId) {
      removedLink = link;
      return;
    }

    if (link.children?.length) {
      const result = removeCategoryLinkById(link.children, targetId);
      if (result.removedLink) {
        removedLink = result.removedLink;
        nextLinks.push({ ...link, children: result.links });
        return;
      }
    }

    nextLinks.push(link);
  });

  return { links: nextLinks, removedLink };
}

function insertCategoryLinkAsChild(links, parentId, childLink) {
  return links.map((link) => {
    if (link.id === parentId) {
      return { ...link, children: [...(link.children || []), childLink] };
    }

    if (!link.children?.length) {
      return link;
    }

    return { ...link, children: insertCategoryLinkAsChild(link.children, parentId, childLink) };
  });
}

function isDescendantCategoryId(link, targetId) {
  return (link.children || []).some((child) => child.id === targetId || isDescendantCategoryId(child, targetId));
}

function canDropCategoryOnTarget(draggedId, targetId) {
  if (!draggedId || !targetId || draggedId === targetId) {
    return false;
  }

  const draggedLink = findCategoryLinkById(draggedId);
  const targetLink = findCategoryLinkById(targetId);
  if (!draggedLink || !targetLink) {
    return false;
  }

  return !isDescendantCategoryId(draggedLink, targetId);
}

function moveCategoryLink(draggedId, targetId) {
  if (!canDropCategoryOnTarget(draggedId, targetId)) {
    return false;
  }

  const removalResult = removeCategoryLinkById(appState.categoryLinks, draggedId);
  if (!removalResult.removedLink) {
    return false;
  }

  appState.categoryLinks = insertCategoryLinkAsChild(removalResult.links, targetId, removalResult.removedLink);
  setCategoryExpanded(targetId, true);
  return true;
}

function getBookmarkStatusIcon(bookmark) {
  if (BOOKMARK_STATUS_RED_IDS.has(bookmark.id)) {
    return BOOKMARK_CARD_STATUS_RED_ICON;
  }

  if (BOOKMARK_STATUS_ORANGE_IDS.has(bookmark.id)) {
    return BOOKMARK_CARD_STATUS_ORANGE_ICON;
  }

  return BOOKMARK_CARD_STATUS_ICON;
}

function getBookmarksForCategory(categoryName) {
  if (categoryName === "All Bookmarks") {
    return appState.bookmarks.filter((bookmark) => !bookmark.isDeleted);
  }

  if (categoryName === "Deleted Items") {
    return appState.bookmarks.filter((bookmark) => bookmark.isDeleted);
  }

  const categoryLink = findCategoryLinkByLabel(categoryName);
  if (categoryLink?.bookmarkFilter?.type === "subcategory") {
    return appState.bookmarks.filter(
      (bookmark) =>
        !bookmark.isDeleted &&
        normalizeBookmarkCategory(bookmark.category) === categoryLink.bookmarkFilter.parentCategory &&
        bookmark.subcategory === categoryLink.bookmarkFilter.value
    );
  }

  const normalizedCategoryName = normalizeBookmarkCategory(categoryName);
  return appState.bookmarks.filter(
    (bookmark) => !bookmark.isDeleted && normalizeBookmarkCategory(bookmark.category) === normalizedCategoryName
  );
}

function getCategoryBookmarkCount(categoryName) {
  return getBookmarksForCategory(categoryName).length;
}

function getVisibleBookmarks() {
  return getBookmarksForCategory(appState.activeSidebarCategory);
}

function getVisibleBookmarkIds() {
  return getVisibleBookmarks().map((bookmark) => bookmark.id);
}

function closeExportFormatsMenu() {
  appState.exportFormatsOpen = false;
}

function getExportFileStem() {
  const categoryLabel = appState.activeSidebarCategory === "All Bookmarks"
    ? "all-bookmarks"
    : appState.activeSidebarCategory.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
  return categoryLabel || "bookmarks";
}

function escapeCsvValue(value) {
  const stringValue = String(value ?? "");
  return `"${stringValue.replace(/"/g, "\"\"")}"`;
}

function buildExportBookmarkPayload(bookmark) {
  return {
    title: bookmark.title,
    url: bookmark.url,
    category: bookmark.category,
    subcategory: bookmark.subcategory || "",
    type: bookmark.type || "",
    dateSaved: bookmark.date || "",
    dateModified: bookmark.modifiedDate || bookmark.date || "",
    tags: Array.isArray(bookmark.tags) ? bookmark.tags.join(", ") : "",
    note: bookmark.note || "",
    priority: bookmark.priority || "",
    reminder: bookmark.reminder || "",
    favourite: Boolean(bookmark.isFavourite),
    permanentCopy: Boolean(bookmark.savePermanentCopy),
    passwordProtected: Boolean(bookmark.passwordProtected)
  };
}

function buildExportDocument(format, bookmarks) {
  const payload = bookmarks.map(buildExportBookmarkPayload);

  if (format === "json") {
    return {
      blob: new Blob([JSON.stringify(payload, null, 2)], { type: "application/json;charset=utf-8" }),
      extension: "json"
    };
  }

  if (format === "csv") {
    const headers = ["Title", "URL", "Category", "Subcategory", "Type", "Date Saved", "Date Modified", "Tags", "Note", "Priority", "Reminder", "Favourite", "Permanent Copy", "Password Protected"];
    const rows = payload.map((item) => [
      item.title,
      item.url,
      item.category,
      item.subcategory,
      item.type,
      item.dateSaved,
      item.dateModified,
      item.tags,
      item.note,
      item.priority,
      item.reminder,
      item.favourite,
      item.permanentCopy,
      item.passwordProtected
    ]);
    const csv = [headers, ...rows].map((row) => row.map(escapeCsvValue).join(",")).join("\r\n");
    return {
      blob: new Blob([csv], { type: "text/csv;charset=utf-8" }),
      extension: "csv"
    };
  }

  if (format === "markdown") {
    const markdown = payload.map((item) => `## ${item.title}

- URL: ${item.url}
- Category: ${item.category}${item.subcategory ? ` / ${item.subcategory}` : ""}
- Type: ${item.type || "Bookmark"}
- Saved: ${item.dateSaved}
- Modified: ${item.dateModified}
- Tags: ${item.tags || "None"}
- Priority: ${item.priority || "None"}
- Reminder: ${item.reminder || "None"}
- Favourite: ${item.favourite ? "Yes" : "No"}
- Permanent Copy: ${item.permanentCopy ? "Yes" : "No"}
- Password Protected: ${item.passwordProtected ? "Yes" : "No"}

${item.note ? `${item.note}\n` : ""}`).join("\n");
    return {
      blob: new Blob([markdown], { type: "text/markdown;charset=utf-8" }),
      extension: "md"
    };
  }

  const htmlBookmarks = payload.map((item) => `  <li>
    <a href="${escapeHtml(item.url)}">${escapeHtml(item.title)}</a>
    <div>Category: ${escapeHtml(item.category)}${item.subcategory ? ` / ${escapeHtml(item.subcategory)}` : ""}</div>
    <div>Saved: ${escapeHtml(item.dateSaved)}</div>
  </li>`).join("\n");
  const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <title>MediaPlace Export</title>
</head>
<body>
  <h1>${escapeHtml(appState.activeSidebarCategory)}</h1>
  <ul>
${htmlBookmarks}
  </ul>
</body>
</html>`;
  return {
    blob: new Blob([html], { type: "text/html;charset=utf-8" }),
    extension: "html"
  };
}

function downloadVisibleBookmarks(format) {
  const bookmarks = getVisibleBookmarks();
  if (!bookmarks.length) {
    return false;
  }

  const { blob, extension } = buildExportDocument(format, bookmarks);
  const objectUrl = URL.createObjectURL(blob);
  const anchor = document.createElement("a");
  anchor.href = objectUrl;
  anchor.download = `${getExportFileStem()}.${extension}`;
  document.body.appendChild(anchor);
  anchor.click();
  anchor.remove();
  URL.revokeObjectURL(objectUrl);
  closeExportFormatsMenu();
  return true;
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

function syncSidebarCategoryUi() {
  app.querySelectorAll("[data-action='select-sidebar-category']").forEach((link) => {
    const categoryName = link.getAttribute("data-category");
    const categoryId = link.getAttribute("data-category-id");
    const isActive = isSidebarCategoryActive(categoryName);
    const count = link.querySelector(".bookmark-sidebar-link-count");

    link.classList.toggle("is-active", isActive);
    link.classList.toggle("is-dragging", categoryId === appState.draggedCategoryId);
    link.classList.toggle("is-drop-target", categoryId === appState.dropTargetCategoryId);

    if (categoryId) {
      const categoryLink = findCategoryLinkById(categoryId);
      if (categoryLink?.children?.length) {
        link.setAttribute("aria-expanded", String(isCategoryExpanded(categoryId)));
      } else {
        link.removeAttribute("aria-expanded");
      }
    }

    if (count && !link.closest(".bookmark-sidebar-group-filter")) {
      count.textContent = String(getCategoryBookmarkCount(categoryName));
    }
  });

  app.querySelectorAll("[data-parent-category-id]").forEach((group) => {
    const categoryId = group.getAttribute("data-parent-category-id");
    if (categoryId) {
      const isExpanded = isCategoryExpanded(categoryId);
      group.classList.toggle("is-expanded", isExpanded);
      const childShell = group.querySelector(".bookmark-sidebar-parent-children-shell");
      if (childShell) {
        childShell.setAttribute("aria-hidden", String(!isExpanded));
      }
    }
  });
}

function syncGlobalSidebarUi() {
  app.querySelectorAll("[data-sidebar-section]").forEach((section) => {
    const sectionTitle = section.getAttribute("data-sidebar-section");
    const sidebarSection = SIDEBAR_SECTIONS.find((item) => item.title === sectionTitle);
    if (!sidebarSection) {
      return;
    }

    section.classList.toggle("is-active-section", isGlobalSidebarSectionActive(sidebarSection));
  });

  app.querySelectorAll("[data-action='select-global-sidebar-item']").forEach((item) => {
    const value = item.getAttribute("data-sidebar-item");
    const isActive = value === appState.activeGlobalSidebarItem;
    item.classList.toggle("is-active", isActive);
    item.setAttribute("aria-pressed", String(isActive));
  });
}

function renderVisibleBookmarkCardsMarkup() {
  const visibleBookmarks = getBookmarksForCategory(appState.activeSidebarCategory);
  const cardRenderer = appState.bookmarkDisplayMode === "list" ? renderBookmarkListCard : renderBookmarkCard;

  return visibleBookmarks.map(cardRenderer).join("");
}

function syncLockedCategoryAccessUi() {
  const field = app.querySelector(".locked-category-password-field");
  const input = app.querySelector("[data-role='locked-category-password-input']");
  const toggleButton = app.querySelector("[data-action='toggle-locked-category-password-visibility']");
  const accessButton = app.querySelector("[data-action='submit-locked-category-access']");

  if (!field || !input || !toggleButton || !accessButton) {
    return;
  }

  const accessState = ensureCategoryAccessState(appState.activeSidebarCategory);
  if (!accessState) {
    return;
  }

  const hasValue = Boolean(accessState.passwordDraft);
  const isHidden = hasValue && !accessState.passwordVisible;
  field.classList.toggle("is-active", hasValue && !isHidden);
  field.classList.toggle("is-hidden", isHidden);
  input.classList.toggle("is-obscured", isHidden);
  toggleButton.classList.toggle("is-hidden", isHidden);
  toggleButton.setAttribute("aria-label", isHidden || !hasValue ? "Show password" : "Hide password");

  const toggleIcon = toggleButton.querySelector("img");
  if (toggleIcon) {
    toggleIcon.setAttribute("src", isHidden ? INSPECTOR_HIDE_PASSWORD_ICON : LOCKED_CATEGORY_PASSWORD_PREVIEW_ICON);
  }

  let dots = field.querySelector(".locked-category-password-dots");
  if (isHidden) {
    if (!dots) {
      dots = document.createElement("span");
      dots.className = "locked-category-password-dots";
      dots.setAttribute("aria-hidden", "true");
      dots.innerHTML = `<img src="${LOCKED_CATEGORY_PASSWORD_HIDDEN_DOTS}" alt="" width="124" height="5" />`;
      field.insertBefore(dots, input);
    }
  } else if (dots) {
    dots.remove();
  }

  const canSubmit = canSubmitLockedCategoryPassword(appState.activeSidebarCategory);
  accessButton.disabled = !canSubmit;
  accessButton.classList.toggle("is-disabled", !canSubmit);
  accessButton.classList.toggle("is-ready", canSubmit);
}

function syncBookmarkContentForActiveCategory() {
  const contentPanel = app.querySelector(".content-panel");

  if (!contentPanel) {
    renderShell();
    return;
  }

  if (appState.activeContentView !== "cards" || isCategoryAccessLocked()) {
    contentPanel.innerHTML = renderContentPanel();
    return;
  }

  const header = contentPanel.querySelector(".bookmark-content-header");
  if (header) {
    header.outerHTML = renderBookmarkContentHeader();
  }

  const canvas = contentPanel.querySelector(".bookmark-card-canvas");
  if (canvas) {
    canvas.className = appState.bookmarkDisplayMode === "list" ? "bookmark-card-canvas is-list" : "bookmark-card-canvas";
    canvas.style.setProperty("--bookmark-card-scale", appState.bookmarkZoomLevel);
    canvas.innerHTML = renderVisibleBookmarkCardsMarkup();
  }

  syncBookmarkSelectionUi();
  syncLockedCategoryAccessUi();
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

function parseBookmarkDate(dateString) {
  const match = /^(\d{1,2})\s([A-Za-z]{3})\s(\d{4})$/.exec(String(dateString).trim());
  if (!match) {
    return null;
  }

  const [, day, month, year] = match;
  const parsedDate = new Date(`${day} ${month} ${year} 00:00:00`);
  return Number.isNaN(parsedDate.getTime()) ? null : parsedDate;
}

function getSupportedInspectorCategory(categoryName = appState.activeSidebarCategory) {
  if (appState.activeInspectorBookmarkId) {
    return null;
  }

  if (categoryName === "All Bookmarks") {
    return categoryName;
  }

  if (isCategoryInspectorCategory(categoryName)) {
    ensureCategoryInspectorState(categoryName);
    return categoryName;
  }

  return null;
}

function getInspectorStatePath(fieldName, categoryName = appState.activeSidebarCategory) {
  const supportedCategory = getSupportedInspectorCategory(categoryName);
  if (!supportedCategory || supportedCategory !== "All Bookmarks") {
    return null;
  }

  return INSPECTOR_STATE_PATHS[supportedCategory]?.[fieldName] || null;
}

function getInspectorStateValue(fieldName, categoryName = appState.activeSidebarCategory) {
  const supportedCategory = getSupportedInspectorCategory(categoryName);
  if (!supportedCategory) {
    return undefined;
  }

  if (supportedCategory === "All Bookmarks") {
    const path = getInspectorStatePath(fieldName, categoryName);
    return path ? appState[path] : undefined;
  }

  return appState.categoryInspectorStates[supportedCategory]?.[fieldName];
}

function setInspectorStateValue(fieldName, value, categoryName = appState.activeSidebarCategory) {
  const supportedCategory = getSupportedInspectorCategory(categoryName);
  if (!supportedCategory) {
    return;
  }

  if (supportedCategory === "All Bookmarks") {
    const path = getInspectorStatePath(fieldName, categoryName);
    if (path) {
      appState[path] = value;
    }
    return;
  }

  appState.categoryInspectorStates[supportedCategory][fieldName] = value;
}

function isCategoryInspectorCategory(categoryName) {
  return Boolean(categoryName) && categoryName !== "All Bookmarks" && categoryName !== "Deleted Items";
}

function createCategoryInspectorState(categoryName) {
  const lastSaved = getMostRecentBookmarkDateForCategory(categoryName);
  const categoryLink = findCategoryLinkByLabel(categoryName);

  return {
    lastSaved,
    lastModified: lastSaved,
    isFavourite: false,
    savePermanentCopy: false,
    passwordProtected: Boolean(categoryLink?.lockedByDefault),
    accessPassword: "",
    tags: [],
    tagDraft: "",
    note: ""
  };
}

function ensureCategoryInspectorState(categoryName) {
  if (!isCategoryInspectorCategory(categoryName)) {
    return null;
  }

  if (!appState.categoryInspectorStates[categoryName]) {
    appState.categoryInspectorStates[categoryName] = createCategoryInspectorState(categoryName);
  }

  return appState.categoryInspectorStates[categoryName];
}

function createCategoryAccessState() {
  return {
    passwordDraft: "",
    passwordVisible: false
  };
}

function ensureCategoryAccessState(categoryName) {
  if (!isCategoryInspectorCategory(categoryName)) {
    return null;
  }

  if (!appState.categoryAccessStates[categoryName]) {
    appState.categoryAccessStates[categoryName] = createCategoryAccessState();
  }

  return appState.categoryAccessStates[categoryName];
}

function isCategoryUnlocked(categoryName) {
  return appState.unlockedCategoryNames.includes(categoryName);
}

function setCategoryUnlocked(categoryName, isUnlocked) {
  if (!isCategoryInspectorCategory(categoryName)) {
    return;
  }

  if (isUnlocked) {
    if (!appState.unlockedCategoryNames.includes(categoryName)) {
      appState.unlockedCategoryNames = [...appState.unlockedCategoryNames, categoryName];
    }
    return;
  }

  appState.unlockedCategoryNames = appState.unlockedCategoryNames.filter((item) => item !== categoryName);
}

function shouldShowLockedCategoryInSidebar(categoryName) {
  if (!isCategoryInspectorCategory(categoryName)) {
    return false;
  }

  return Boolean(getInspectorStateValue("passwordProtected", categoryName));
}

function isCategoryAccessLocked(categoryName = appState.activeSidebarCategory) {
  if (!isCategoryInspectorCategory(categoryName)) {
    return false;
  }

  return Boolean(getInspectorStateValue("passwordProtected", categoryName) && !isCategoryUnlocked(categoryName));
}

function shouldRenderLockedCategoryOverlay(categoryName = appState.activeSidebarCategory) {
  if (!isCategoryInspectorCategory(categoryName)) {
    return false;
  }

  return Boolean(
    isCategoryAccessLocked(categoryName) &&
    appState.lockedInspectorCategory === categoryName
  );
}

function canSubmitLockedCategoryPassword(categoryName = appState.activeSidebarCategory) {
  const accessState = ensureCategoryAccessState(categoryName);
  return Boolean(accessState?.passwordDraft.trim());
}

function canUnlockCategory(categoryName = appState.activeSidebarCategory) {
  const accessState = ensureCategoryAccessState(categoryName);
  const password = accessState?.passwordDraft.trim() || "";
  if (!password) {
    return false;
  }

  const storedPassword = getInspectorStateValue("accessPassword", categoryName);
  if (!storedPassword) {
    return true;
  }

  return password === storedPassword;
}

function unlockActiveCategory() {
  if (!isCategoryAccessLocked()) {
    return;
  }

  if (!canUnlockCategory()) {
    return;
  }

  setCategoryUnlocked(appState.activeSidebarCategory, true);
  appState.lockedInspectorCategory = null;
  closeExportFormatsMenu();
  appState.contentKebabOpen = false;
  syncBookmarkContentForActiveCategory();
  syncInspectorPanel();
}

function renderLockedCategoryOverlay() {
  return `
    <div class="inspector-panel-locked-overlay">
      <div class="inspector-panel-locked-copy">
        <span class="inspector-panel-locked-icon">
          <img src="${INSPECTOR_HIDE_PASSWORD_ICON}" alt="" width="20" height="20" />
        </span>
        <div class="inspector-panel-locked-text">
          <div class="inspector-panel-locked-title">Category details are hidden</div>
          <div class="inspector-panel-locked-subtitle">Enter password to view</div>
        </div>
      </div>
      <span class="inspector-panel-locked-arrow">
        <img src="${INSPECTOR_LOCKED_HINT_ARROW_ICON}" alt="" width="38" height="21" />
      </span>
    </div>
  `;
}

function getMostRecentBookmarkDateForCategory(categoryName) {
  const bookmarks = getBookmarksForCategory(categoryName);
  if (!bookmarks.length) {
    return "";
  }

  const mostRecentDate = bookmarks.reduce((latest, bookmark) => {
    const parsedDate = parseBookmarkDate(bookmark.date);
    if (!parsedDate) {
      return latest;
    }

    if (!latest || parsedDate > latest) {
      return parsedDate;
    }

    return latest;
  }, null);

  return mostRecentDate ? formatBookmarkDate(mostRecentDate) : "";
}

function getBookmarkTypesForCategory(categoryName) {
  const bookmarkTypes = new Set(
    getBookmarksForCategory(categoryName)
      .map((bookmark) => bookmark.type || inferBookmarkType(bookmark))
      .filter(Boolean)
  );

  return BOOKMARK_TYPE_ORDER.filter((type) => bookmarkTypes.has(type));
}

function getActiveInspectorBookmark() {
  return appState.bookmarks.find((bookmark) => bookmark.id === appState.activeInspectorBookmarkId) || null;
}

function getBookmarkInspectorTypeLabel(bookmark) {
  return bookmark?.type || inferBookmarkType(bookmark || {});
}

function closeDeleteBookmarkModal() {
  appState.deleteBookmarkModalOpen = false;
  appState.pendingDeleteBookmarkId = null;
}

function moveBookmarkToDeletedItems(bookmarkId) {
  const bookmark = appState.bookmarks.find((item) => item.id === bookmarkId);
  if (!bookmark) {
    closeDeleteBookmarkModal();
    return;
  }

  const now = new Date();
  bookmark.isDeleted = true;
  bookmark.deletedAt = formatBookmarkDate(now);
  bookmark.deletedFromCategory = bookmark.deletedFromCategory || bookmark.category;
  bookmark.modifiedDate = formatBookmarkDate(now);

  if (appState.previewBookmarkId === bookmark.id) {
    appState.previewBookmarkId = null;
    appState.activeContentView = "cards";
  }

  if (appState.activeInspectorBookmarkId === bookmark.id) {
    appState.activeInspectorBookmarkId = null;
  }

  appState.selectedBookmarkIds = appState.selectedBookmarkIds.filter((id) => id !== bookmark.id);
  closeDeleteBookmarkModal();
  updateRelatedInspectorModifiedDates(bookmark.category, now);
}

function renderDeleteBookmarkModal() {
  if (!appState.deleteBookmarkModalOpen || !appState.pendingDeleteBookmarkId) {
    return "";
  }

  return `
    <div class="bookmark-delete-modal" role="dialog" aria-modal="true" aria-labelledby="bookmark-delete-modal-title">
      <div class="bookmark-delete-modal-title" id="bookmark-delete-modal-title">Are you sure you want to delete it?</div>
      <div class="bookmark-delete-modal-copy">
        You can still recover it from
        <button class="bookmark-delete-modal-link" type="button" data-action="go-to-deleted-items">Deleted Items</button>
      </div>
      <div class="bookmark-delete-modal-actions">
        <button class="bookmark-delete-modal-button bookmark-delete-modal-button-confirm" type="button" data-action="confirm-delete-bookmark">
          <span>Yes, delete it</span>
        </button>
        <button class="bookmark-delete-modal-button bookmark-delete-modal-button-cancel" type="button" data-action="cancel-delete-bookmark">
          <span>Cancel</span>
        </button>
      </div>
    </div>
  `;
}

function renderImportBookmarksModal() {
  if (!appState.importBookmarksModalOpen) {
    return "";
  }

  return `
    <div class="import-bookmarks-overlay" role="dialog" aria-modal="true" aria-labelledby="import-bookmarks-title">
      <div class="import-bookmarks-modal">
        <div class="import-bookmarks-modal-header">
          <div class="import-bookmarks-modal-heading">
            <h2 class="import-bookmarks-modal-title" id="import-bookmarks-title">Import bookmarks</h2>
            <p class="import-bookmarks-modal-subtitle">Bring your bookmarks from another app or browser</p>
          </div>
          <button class="import-bookmarks-modal-cancel" type="button" data-action="close-import-bookmarks-modal">
            <span class="import-bookmarks-modal-cancel-icon">
              <img src="${PREVIEW_CANCEL_ICON}" alt="" width="12" height="12" />
            </span>
            <span class="import-bookmarks-modal-cancel-label">Cancel</span>
          </button>
        </div>

        <div class="import-bookmarks-modal-content">
          <div class="import-bookmarks-modal-rings" aria-hidden="true">
            <img class="import-bookmarks-modal-rings-image" src="${IMPORT_BOOKMARKS_RINGS_IMAGE}" alt="" width="520" height="520" />
          </div>

          <div class="import-bookmarks-modal-illustration" aria-hidden="true">
            <span class="import-bookmarks-modal-doc-wrap import-bookmarks-modal-doc-wrap-3">
              <span class="import-bookmarks-modal-doc-rotate import-bookmarks-modal-doc-rotate-3">
                <span class="import-bookmarks-modal-doc-frame import-bookmarks-modal-doc-frame-40">
                  <img src="${IMPORT_BOOKMARKS_DOC_3}" alt="" width="23.33" height="30" />
                </span>
              </span>
            </span>
            <span class="import-bookmarks-modal-doc-wrap import-bookmarks-modal-doc-wrap-2">
              <span class="import-bookmarks-modal-doc-rotate import-bookmarks-modal-doc-rotate-2">
                <span class="import-bookmarks-modal-doc-frame import-bookmarks-modal-doc-frame-40">
                  <img src="${IMPORT_BOOKMARKS_DOC_2}" alt="" width="23.33" height="30" />
                </span>
              </span>
            </span>
            <span class="import-bookmarks-modal-doc-wrap import-bookmarks-modal-doc-wrap-1">
              <span class="import-bookmarks-modal-doc-rotate import-bookmarks-modal-doc-rotate-1">
                <span class="import-bookmarks-modal-doc-frame import-bookmarks-modal-doc-frame-40">
                  <img src="${IMPORT_BOOKMARKS_DOC_1}" alt="" width="23.33" height="30" />
                </span>
              </span>
            </span>
            <span class="import-bookmarks-modal-doc-wrap import-bookmarks-modal-doc-wrap-4">
              <span class="import-bookmarks-modal-doc-rotate import-bookmarks-modal-doc-rotate-4">
                <span class="import-bookmarks-modal-doc-frame import-bookmarks-modal-doc-frame-40">
                  <img src="${IMPORT_BOOKMARKS_DOC_4}" alt="" width="23.33" height="30" />
                </span>
              </span>
            </span>
            <span class="import-bookmarks-modal-main-icon">
              <img src="${IMPORT_BOOKMARKS_MAIN_ICON}" alt="" width="100" height="100" />
            </span>
          </div>

          <div class="import-bookmarks-modal-copy">
            <p class="import-bookmarks-modal-copy-line">
              <span>Drag and drop to upload, or </span>
              <button class="import-bookmarks-modal-browse" type="button" data-action="browse-import-bookmarks-file">click to browse your file</button>
            </p>
            <p class="import-bookmarks-modal-copy-support">Supported formats: HTML, JSON, CSV and Markdown</p>
          </div>

          <input class="import-bookmarks-file-input" type="file" hidden data-role="import-bookmarks-file-input" accept=".html,.json,.csv,.md,.markdown,text/html,application/json,text/csv,text/markdown" />
        </div>
      </div>
    </div>
  `;
}

function closeImportBookmarksModal() {
  if (!appState.importBookmarksModalOpen) {
    return;
  }

  appState.importBookmarksModalOpen = false;
}

function updateInspectorLastSaved(categoryName = appState.activeSidebarCategory, date = new Date()) {
  if (!getSupportedInspectorCategory(categoryName)) {
    return;
  }

  setInspectorStateValue("lastSaved", formatBookmarkDate(date), categoryName);
}

function updateInspectorLastModified(categoryName = appState.activeSidebarCategory, date = new Date()) {
  if (!getSupportedInspectorCategory(categoryName)) {
    return;
  }

  setInspectorStateValue("lastModified", formatBookmarkDate(date), categoryName);
}

function updateRelatedInspectorModifiedDates(categoryName, date = new Date()) {
  updateInspectorLastModified("All Bookmarks", date);
  if (categoryName !== "All Bookmarks") {
    updateInspectorLastModified(categoryName, date);
  }
}

function syncInspectorPanel() {
  const inspectorHost = app.querySelector(".inspector-host");
  if (!inspectorHost) {
    return;
  }

  inspectorHost.innerHTML = renderInspectorPanel();
}

function syncInspectorMetadataUi() {
  const activeInspectorBookmark = getActiveInspectorBookmark();
  if (activeInspectorBookmark) {
    const modifiedDate = app.querySelector("[data-role='bookmark-inspector-modified-date']");
    if (modifiedDate) {
      modifiedDate.textContent = activeInspectorBookmark.modifiedDate || activeInspectorBookmark.date;
    }
    return;
  }

  const activeInspectorCategory = getSupportedInspectorCategory();
  const lastSaved = app.querySelector("[data-role='inspector-last-saved']");
  const lastModified = app.querySelector("[data-role='inspector-last-modified']");
  const types = app.querySelector("[data-role='inspector-types']");

  if (!activeInspectorCategory) {
    return;
  }

  if (lastSaved) {
    lastSaved.textContent = getInspectorStateValue("lastSaved", activeInspectorCategory);
  }

  if (lastModified) {
    lastModified.textContent = getInspectorStateValue("lastModified", activeInspectorCategory);
  }

  if (types) {
    types.textContent = getBookmarkTypesForCategory(activeInspectorCategory).join(", ");
  }
}

function syncInspectorTagsUi() {
  const activeInspectorBookmark = getActiveInspectorBookmark();
  if (activeInspectorBookmark) {
    const tagsContainer = app.querySelector("[data-role='bookmark-inspector-tags-list']");
    const tagsInput = app.querySelector("[data-role='bookmark-inspector-tags-input']");
    if (!tagsContainer || !tagsInput) {
      return;
    }

    tagsContainer.innerHTML = renderBookmarkInspectorSavedTags(activeInspectorBookmark);
    tagsInput.value = activeInspectorBookmark.tagDraft || "";
    return;
  }

  const activeInspectorCategory = getSupportedInspectorCategory();
  const tagsContainer = app.querySelector("[data-role='inspector-tags-list']");
  const tagsInput = app.querySelector("[data-role='inspector-tags-input']");
  if (!activeInspectorCategory || !tagsContainer || !tagsInput) {
    return;
  }

  tagsContainer.innerHTML = renderInspectorSavedTags(activeInspectorCategory);
  tagsInput.value = getInspectorStateValue("tagDraft", activeInspectorCategory) || "";
}

function createBookmarkFromUrl(rawUrl) {
  const bookmarkTitle = getBookmarkTitleFromUrl(rawUrl);
  const bookmarkUrl = getBookmarkUrlLabel(rawUrl);
  const now = new Date();

  return {
    id: `bookmark-${Date.now()}`,
    title: bookmarkTitle,
    url: bookmarkUrl,
    category: "Uncategorized",
    date: formatBookmarkDate(now),
    image: BOOKMARK_CARD_IMAGE,
    previewImage: PREVIEW_SAMPLE_IMAGE,
    isFetchingImage: true,
    isPermanentCopy: false,
    isFavourite: false,
    isDeleted: false,
    deletedAt: "",
    deletedFromCategory: "",
    modifiedDate: formatBookmarkDate(now),
    tags: [],
    tagDraft: "",
    note: "",
    priority: "normal",
    reminder: "",
    statusIcon: BOOKMARK_CARD_STATUS_ICON,
    type: /^youtube\.com$/i.test(bookmarkUrl) ? "Video" : "Article",
    articleHtml: buildPreviewArticle(bookmarkTitle, bookmarkUrl)
  };
}

function addBookmarkFromCurrentInput() {
  if (!appState.bookmarkUrl.trim()) {
    return false;
  }

  const nextBookmark = createBookmarkFromUrl(appState.bookmarkUrl.trim());
  appState.bookmarks.unshift(nextBookmark);
  appState.bookmarkUrl = "";
  updateInspectorLastSaved("All Bookmarks");
  updateInspectorLastSaved(nextBookmark.category);
  queueBookmarkImageReveal(nextBookmark.id);
  playNewBookmarkSavedState();
  return true;
}

function normalizeTagLabel(value) {
  return value.trim().replace(/\s+/g, " ");
}

function renderInspectorSavedTags(categoryName = appState.activeSidebarCategory) {
  const tags = getInspectorStateValue("tags", categoryName) || [];

  return tags.map((tag) => `
    <button class="inspector-panel-tag-chip" type="button" data-action="remove-inspector-tag" data-tag="${escapeHtml(tag)}" aria-label="Remove ${escapeHtml(tag)} tag">
      <span class="inspector-panel-tag-chip-label">${escapeHtml(tag)}</span>
      <span class="inspector-panel-tag-chip-icon">
        <img src="${INSPECTOR_TAG_REMOVE_ICON}" alt="" width="8" height="8" />
      </span>
    </button>
  `).join("");
}

function renderBookmarkInspectorSavedTags(bookmark) {
  const tags = Array.isArray(bookmark?.tags) ? bookmark.tags : [];

  return tags.map((tag) => `
    <button class="inspector-panel-tag-chip" type="button" data-action="remove-bookmark-tag" data-tag="${escapeHtml(tag)}" data-bookmark-id="${bookmark.id}" aria-label="Remove ${escapeHtml(tag)} tag">
      <span class="inspector-panel-tag-chip-label">${escapeHtml(tag)}</span>
      <span class="inspector-panel-tag-chip-icon">
        <img src="${INSPECTOR_TAG_REMOVE_ICON}" alt="" width="8" height="8" />
      </span>
    </button>
  `).join("");
}

function commitInspectorTag(categoryName = appState.activeSidebarCategory) {
  const activeInspectorBookmark = getActiveInspectorBookmark();
  if (activeInspectorBookmark) {
    const normalizedTag = normalizeTagLabel(activeInspectorBookmark.tagDraft || "");

    if (!normalizedTag) {
      activeInspectorBookmark.tagDraft = "";
      syncInspectorTagsUi();
      return false;
    }

    if (!activeInspectorBookmark.tags.some((tag) => tag.toLowerCase() === normalizedTag.toLowerCase())) {
      activeInspectorBookmark.tags = [...activeInspectorBookmark.tags, normalizedTag];
      activeInspectorBookmark.modifiedDate = formatBookmarkDate(new Date());
      updateRelatedInspectorModifiedDates(activeInspectorBookmark.category);
      syncInspectorMetadataUi();
    }

    activeInspectorBookmark.tagDraft = "";
    syncInspectorTagsUi();
    return true;
  }

  const supportedCategory = getSupportedInspectorCategory(categoryName);
  const currentDraft = getInspectorStateValue("tagDraft", categoryName);
  const normalizedTag = normalizeTagLabel(currentDraft || "");

  if (!supportedCategory) {
    return false;
  }

  if (!normalizedTag) {
    setInspectorStateValue("tagDraft", "", supportedCategory);
    syncInspectorTagsUi();
    return false;
  }

  const currentTags = getInspectorStateValue("tags", supportedCategory) || [];
  if (!currentTags.some((tag) => tag.toLowerCase() === normalizedTag.toLowerCase())) {
    setInspectorStateValue("tags", [...currentTags, normalizedTag], supportedCategory);
    updateRelatedInspectorModifiedDates(supportedCategory);
    syncInspectorMetadataUi();
  }

  setInspectorStateValue("tagDraft", "", supportedCategory);
  syncInspectorTagsUi();
  return true;
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

function renderContentKebabMenu() {
  const items = [
    { label: "Revalidate links", icon: CONTENT_KEBAB_REVALIDATE_ICON, value: "revalidate-links" },
    { label: "Mark as read", icon: CONTENT_KEBAB_READ_ICON, value: "mark-as-read" },
    { label: "Check for duplicates", icon: CONTENT_KEBAB_DUPLICATE_ICON, value: "check-duplicates" },
    { label: "Open all links in browser", icon: CONTENT_KEBAB_OPEN_ICON, value: "open-all-links" }
  ];

  return `
    <div class="bookmark-content-kebab-menu" data-role="content-kebab-menu">
      ${items.map(
        (item) => `
          <button class="bookmark-content-kebab-link" type="button" data-action="content-kebab-item" data-kebab-item="${item.value}">
            <span class="bookmark-content-kebab-link-icon">
              <img src="${item.icon}" alt="" width="16" height="16" />
            </span>
            <span class="bookmark-content-kebab-link-label">${item.label}</span>
          </button>
        `
      ).join("")}
    </div>
  `;
}

function renderExportFormatsMenu() {
  return `
    <div class="bookmark-content-export-menu" data-role="export-formats-menu">
      <div class="bookmark-content-export-menu-header">Choose a format to download</div>
      <div class="bookmark-content-export-menu-options">
        ${EXPORT_FORMATS.map((item) => `
          <button class="bookmark-content-export-menu-option" type="button" data-action="export-bookmarks-format" data-export-format="${item.value}">
            <span class="bookmark-content-export-menu-option-label">${item.label}</span>
            <span class="bookmark-content-export-menu-option-description">${item.description}</span>
          </button>
        `).join("")}
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
  const kebabMenuMarkup = appState.contentKebabOpen ? renderContentKebabMenu() : "";
  const exportDisabled = bookmarkCount === 0;
  const exportMenuMarkup = appState.exportFormatsOpen && !exportDisabled ? renderExportFormatsMenu() : "";

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
            <button class="bookmark-content-export-button${exportDisabled ? " is-disabled" : ""}${appState.exportFormatsOpen && !exportDisabled ? " is-open" : ""}" type="button" data-action="toggle-export-formats"${exportDisabled ? " disabled aria-disabled=\"true\"" : ""} aria-expanded="${appState.exportFormatsOpen && !exportDisabled}">
              <span class="bookmark-content-export-main">
                <span class="bookmark-content-icon bookmark-content-icon-export-all">
                  <img src="${CONTENT_HEADING_EXPORT_ICON}" alt="" width="20" height="20" />
                </span>
                <span class="bookmark-content-export-label">Export all items</span>
              </span>
              <span class="bookmark-content-export-chevron">
                <span class="bookmark-content-export-chevron-icon">
                  <img src="${CONTENT_HEADING_CHEVRON_ICON}" alt="" width="16" height="16" />
                </span>
              </span>
            </button>
            ${exportMenuMarkup}

            <div class="bookmark-content-kebab-menu-anchor">
              <button class="bookmark-content-kebab${appState.contentKebabOpen ? " is-open" : ""}" type="button" data-action="open-content-kebab" aria-label="More options" aria-expanded="${appState.contentKebabOpen}">
                <span class="bookmark-content-icon bookmark-content-icon-kebab">
                  <span class="bookmark-content-kebab-dots" aria-hidden="true"></span>
                </span>
              </button>
              ${kebabMenuMarkup}
            </div>
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

function renderLockedCategoryPasswordField(categoryName = appState.activeSidebarCategory) {
  const accessState = ensureCategoryAccessState(categoryName);
  const passwordValue = accessState?.passwordDraft || "";
  const isHidden = Boolean(passwordValue) && !accessState?.passwordVisible;
  const stateClass = passwordValue ? (isHidden ? " is-hidden" : " is-active") : "";
  const visibilityLabel = isHidden || !passwordValue ? "Show password" : "Hide password";

  return `
    <label class="locked-category-password-field${stateClass}">
      ${isHidden ? `
        <span class="locked-category-password-dots" aria-hidden="true">
          <img src="${LOCKED_CATEGORY_PASSWORD_HIDDEN_DOTS}" alt="" width="124" height="5" />
        </span>
      ` : ""}
      <input
        class="locked-category-password-input${isHidden ? " is-obscured" : ""}"
        type="text"
        value="${escapeHtml(passwordValue).replace(/"/g, "&quot;")}"
        placeholder="Type a password"
        data-role="locked-category-password-input"
        aria-label="Type a password"
        autocomplete="off"
        autocorrect="off"
        autocapitalize="off"
        spellcheck="false"
      />
      <button
        class="locked-category-password-visibility${isHidden ? " is-hidden" : ""}"
        type="button"
        data-action="toggle-locked-category-password-visibility"
        aria-label="${visibilityLabel}">
        <img src="${isHidden ? INSPECTOR_HIDE_PASSWORD_ICON : LOCKED_CATEGORY_PASSWORD_PREVIEW_ICON}" alt="" width="20" height="20" />
      </button>
    </label>
  `;
}

function renderLockedCategoryAccessButton(categoryName = appState.activeSidebarCategory) {
  const stateClass = canSubmitLockedCategoryPassword(categoryName) ? " is-ready" : " is-disabled";

  return `
    <button class="locked-category-access-button${stateClass}" type="button" data-action="submit-locked-category-access"${canSubmitLockedCategoryPassword(categoryName) ? "" : " disabled"}>
      <span>Access category</span>
    </button>
  `;
}

function renderLockedCategoryContent() {
  return `
    <section class="locked-category-view">
      ${renderBookmarkCards()}
      <div class="locked-category-screen">
        <div class="locked-category-screen-header-blur"></div>
        <div class="locked-category-screen-body">
          <div class="locked-category-illustration">
            <img src="${LOCKED_CATEGORY_ILLUSTRATION}" alt="" width="426" height="274" />
          </div>

          <div class="locked-category-access-panel">
            <div class="locked-category-copy">
              <h2 class="locked-category-title">This category is password protected</h2>
              <p class="locked-category-subtitle">Enter the password to view bookmarks</p>
            </div>

            <div class="locked-category-fields">
              ${renderLockedCategoryPasswordField()}
              ${renderLockedCategoryAccessButton()}
            </div>
          </div>
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
  if (isCategoryAccessLocked()) {
    return renderLockedCategoryContent();
  }

  return appState.activeContentView === "preview" ? renderPreviewPane() : renderBookmarkCards();
}

function renderBookmarkMoveDropdown(bookmark) {
  const currentCategory = getBookmarkCurrentMoveCategory(bookmark);
  const categoryOptions = getRootCategoryOptions()
    .map((option) => {
      const isCurrent = option.bookmarkCategory === currentCategory;
      const isSelected = option.bookmarkCategory === appState.moveBookmarkTargetCategory;
      const selectedClass = isSelected ? " is-selected" : "";
      const disabledClass = isCurrent ? " is-disabled" : "";
      const actionMarkup = isCurrent ? "" : ` data-action="select-bookmark-move-category" data-move-category="${escapeHtml(option.bookmarkCategory)}"`;

      return `
        <button class="inspector-bookmark-move-option${selectedClass}${disabledClass}" type="button"${actionMarkup}${isCurrent ? " disabled" : ""}>
          <span>${escapeHtml(formatCategoryLabel(option.label))}</span>
        </button>
      `;
    })
    .join("");

  return `
    <div class="inspector-bookmark-move-dropdown">
      <div class="inspector-bookmark-move-dropdown-panel">
        <div class="inspector-bookmark-move-current">
          <span>Currently in:</span>
          <span>${escapeHtml(formatCategoryLabel(currentCategory))}</span>
        </div>
        <div class="inspector-bookmark-move-options">
          ${categoryOptions}
        </div>
      </div>
      <div class="inspector-bookmark-move-actions">
        <button class="inspector-bookmark-move-submit${appState.moveBookmarkTargetCategory ? "" : " is-disabled"}" type="button" data-action="confirm-bookmark-move"${appState.moveBookmarkTargetCategory ? "" : " disabled"}>Move</button>
        <button class="inspector-bookmark-move-cancel" type="button" data-action="cancel-bookmark-move">Cancel</button>
      </div>
    </div>
  `;
}

function renderInspectorPanel() {
  const activeInspectorBookmark = getActiveInspectorBookmark();
  if (activeInspectorBookmark) {
    const tagDraft = activeInspectorBookmark.tagDraft || "";
    const noteValue = activeInspectorBookmark.note || "";
    const reminderValue = activeInspectorBookmark.reminder || "No reminder set";
    const priority = activeInspectorBookmark.priority || "normal";

    return `
      <div class="inspector-panel inspector-panel-bookmark">
        <div class="inspector-panel-bookmark-header">
          <div class="inspector-panel-title inspector-panel-bookmark-title">${escapeHtml(activeInspectorBookmark.title)}</div>
          <button class="inspector-panel-bookmark-close" type="button" data-action="close-bookmark-inspector" aria-label="Close bookmark details">
            <img src="${INSPECTOR_BOOKMARK_CLOSE_ICON}" alt="" width="9.5" height="9.5" />
          </button>
        </div>

        <div class="inspector-panel-metadata inspector-panel-metadata-bookmark">
          <div class="inspector-panel-meta-row">
            <span class="inspector-panel-meta-label inspector-panel-meta-label-bookmark">Type</span>
            <span class="inspector-panel-meta-value inspector-panel-meta-value-bookmark inspector-panel-meta-value-types">${escapeHtml(getBookmarkInspectorTypeLabel(activeInspectorBookmark))}</span>
          </div>
          <div class="inspector-panel-meta-row">
            <span class="inspector-panel-meta-label inspector-panel-meta-label-bookmark">Date Saved</span>
            <span class="inspector-panel-meta-value inspector-panel-meta-value-bookmark">${escapeHtml(activeInspectorBookmark.date)}</span>
          </div>
          <div class="inspector-panel-meta-row">
            <span class="inspector-panel-meta-label inspector-panel-meta-label-bookmark">Date Modified</span>
            <span class="inspector-panel-meta-value inspector-panel-meta-value-bookmark" data-role="bookmark-inspector-modified-date">${escapeHtml(activeInspectorBookmark.modifiedDate || activeInspectorBookmark.date)}</span>
          </div>
        </div>

        <div class="inspector-panel-divider inspector-panel-divider-bookmark-top">
          <img src="${INSPECTOR_TOP_DIVIDER}" alt="" width="300" height="1" />
        </div>

        <div class="inspector-panel-bookmark-actions">
          <button class="inspector-panel-toggle-row inspector-panel-toggle-row-bookmark" type="button" data-action="toggle-bookmark-favourite" data-bookmark-id="${activeInspectorBookmark.id}" aria-pressed="${Boolean(activeInspectorBookmark.isFavourite)}">
            <span class="inspector-panel-favourite-icon">
              <img src="${activeInspectorBookmark.isFavourite ? INSPECTOR_FAVOURITE_ACTIVE_ICON : INSPECTOR_FAVOURITE_DEFAULT_ICON}" alt="" width="16" height="16" />
            </span>
            <span class="inspector-panel-toggle-label">Mark as favourite</span>
          </button>

          <button class="inspector-panel-toggle-row inspector-panel-toggle-row-bookmark" type="button" data-action="toggle-bookmark-permanent-copy" data-bookmark-id="${activeInspectorBookmark.id}" aria-pressed="${Boolean(activeInspectorBookmark.isPermanentCopy)}">
            <span class="inspector-panel-checkbox">
              <img src="${activeInspectorBookmark.isPermanentCopy ? BOOKMARK_CARD_CHECKBOX_ACTIVE_ICON : INSPECTOR_CHECKBOX_ICON}" alt="" width="16" height="16" />
            </span>
            <span class="inspector-panel-toggle-label">Save a permanent copy</span>
          </button>
        </div>

        <div class="inspector-panel-divider inspector-panel-divider-bookmark-bottom">
          <img src="${INSPECTOR_BOTTOM_DIVIDER}" alt="" width="300" height="1" />
        </div>

        <div class="inspector-panel-fields inspector-panel-fields-bookmark">
          <div class="inspector-panel-field inspector-panel-field-move">
            <button class="inspector-panel-move-button" type="button" data-action="toggle-bookmark-move-menu" aria-expanded="${appState.moveBookmarkMenuOpen}">
              <span class="inspector-panel-move-label">
                <span class="inspector-panel-move-icon">
                  <img src="${INSPECTOR_MOVE_CATEGORY_ICON}" alt="" width="12.7" height="12.7" />
                </span>
                <span class="inspector-panel-move-text">Move to</span>
              </span>
              <span class="inspector-panel-move-chevron">
                <img src="${INSPECTOR_MOVE_CHEVRON_ICON}" alt="" width="9.5" height="5.5" />
              </span>
            </button>
            ${appState.moveBookmarkMenuOpen ? renderBookmarkMoveDropdown(activeInspectorBookmark) : ""}
          </div>

          <div class="inspector-panel-field">
            <div class="inspector-panel-field-label-row">
              <span class="inspector-panel-field-icon">
                <img src="${INSPECTOR_TAG_ICON}" alt="" width="16" height="16" />
              </span>
              <span class="inspector-panel-field-label">Add tags</span>
            </div>
            <div class="inspector-panel-field-box inspector-panel-field-box-tags inspector-panel-field-box-resizable">
              <div class="inspector-panel-tags-field">
                <div class="inspector-panel-tags-list" data-role="bookmark-inspector-tags-list">${renderBookmarkInspectorSavedTags(activeInspectorBookmark)}</div>
                <input class="inspector-panel-input inspector-panel-input-tags" type="text" value="${escapeHtml(tagDraft).replace(/"/g, "&quot;")}" data-role="bookmark-inspector-tags-input" />
              </div>
            </div>
          </div>

          <div class="inspector-panel-field">
            <div class="inspector-panel-field-label-row">
              <span class="inspector-panel-field-icon">
                <img src="${INSPECTOR_NOTE_ICON}" alt="" width="16" height="16" />
              </span>
              <span class="inspector-panel-field-label">Add a note</span>
            </div>
            <label class="inspector-panel-field-box inspector-panel-field-box-note inspector-panel-field-box-resizable">
              <textarea class="inspector-panel-input inspector-panel-input-note" data-role="bookmark-inspector-note-input">${escapeHtml(noteValue)}</textarea>
            </label>
          </div>

          <div class="inspector-panel-bookmark-priority">
            <div class="inspector-panel-bookmark-priority-label">Assign Priority</div>
            <div class="inspector-panel-bookmark-priority-options">
              ${renderBookmarkPriorityOption(activeInspectorBookmark.id, "high", "High", priority === "high")}
              ${renderBookmarkPriorityOption(activeInspectorBookmark.id, "normal", "Normal", priority === "normal")}
              ${renderBookmarkPriorityOption(activeInspectorBookmark.id, "low", "Low", priority === "low")}
            </div>
          </div>

          <div class="inspector-panel-bookmark-reminder">
            <div class="inspector-panel-field-label-row inspector-panel-bookmark-reminder-label">
              <span class="inspector-panel-bookmark-reminder-icon">
                <img src="${INSPECTOR_REMINDER_BELL_ICON}" alt="" width="12.5246" height="14.5" />
              </span>
              <span class="inspector-panel-field-label">Add a reminder</span>
            </div>
            <button class="inspector-panel-move-button inspector-panel-bookmark-reminder-button" type="button" aria-expanded="false">
              <span class="inspector-panel-bookmark-reminder-text">${escapeHtml(reminderValue)}</span>
              <span class="inspector-panel-move-chevron">
                <img src="${INSPECTOR_MOVE_CHEVRON_ICON}" alt="" width="9.5" height="5.5" />
              </span>
            </button>
          </div>
        </div>

        <button class="inspector-panel-delete-button" type="button" data-action="open-delete-bookmark-modal" data-bookmark-id="${activeInspectorBookmark.id}">
          <span class="inspector-panel-delete-icon">
            <img src="${INSPECTOR_TRASH_ICON}" alt="" width="16" height="16" />
          </span>
          <span class="inspector-panel-delete-label">Delete bookmark</span>
        </button>

        ${renderDeleteBookmarkModal()}
      </div>
    `;
  }

  const activeInspectorCategory = getSupportedInspectorCategory();
  if (!activeInspectorCategory) {
    return `
      <div class="scaffold-block">
        <span class="scaffold-label">Right Details Panel</span>
      </div>
    `;
  }

  const lastSaved = getInspectorStateValue("lastSaved", activeInspectorCategory);
  const lastModified = getInspectorStateValue("lastModified", activeInspectorCategory);
  const typesText = getBookmarkTypesForCategory(activeInspectorCategory).join(", ");
  const tagDraft = getInspectorStateValue("tagDraft", activeInspectorCategory) || "";
  const noteValue = getInspectorStateValue("note", activeInspectorCategory) || "";

  if (activeInspectorCategory !== "All Bookmarks") {
    const isFavourite = Boolean(getInspectorStateValue("isFavourite", activeInspectorCategory));
    const savePermanentCopy = Boolean(getInspectorStateValue("savePermanentCopy", activeInspectorCategory));
    const passwordProtected = Boolean(getInspectorStateValue("passwordProtected", activeInspectorCategory));
    const lockedOverlayMarkup = shouldRenderLockedCategoryOverlay(activeInspectorCategory) ? renderLockedCategoryOverlay() : "";

    return `
      <div class="inspector-panel inspector-panel-category">
        <div class="inspector-panel-title">${escapeHtml(activeInspectorCategory)}</div>

        <div class="inspector-panel-metadata">
          <div class="inspector-panel-meta-row">
            <span class="inspector-panel-meta-label">Types</span>
            <span class="inspector-panel-meta-value inspector-panel-meta-value-types" data-role="inspector-types">${escapeHtml(typesText)}</span>
          </div>
          <div class="inspector-panel-meta-row">
            <span class="inspector-panel-meta-label">Last Saved</span>
            <span class="inspector-panel-meta-value" data-role="inspector-last-saved">${escapeHtml(lastSaved)}</span>
          </div>
          <div class="inspector-panel-meta-row">
            <span class="inspector-panel-meta-label">Last Modified</span>
            <span class="inspector-panel-meta-value" data-role="inspector-last-modified">${escapeHtml(lastModified)}</span>
          </div>
        </div>

        <div class="inspector-panel-divider">
          <img src="${INSPECTOR_TOP_DIVIDER}" alt="" width="300" height="1" />
        </div>

        <div class="inspector-panel-category-actions">
          <button class="inspector-panel-toggle-row inspector-panel-toggle-row-category" type="button" data-action="toggle-inspector-favourite" aria-pressed="${isFavourite}">
            <span class="inspector-panel-favourite-icon">
              <img src="${isFavourite ? INSPECTOR_FAVOURITE_ACTIVE_ICON : INSPECTOR_FAVOURITE_DEFAULT_ICON}" alt="" width="16" height="16" />
            </span>
            <span class="inspector-panel-toggle-label">Mark all as favourite</span>
          </button>

          <button class="inspector-panel-toggle-row inspector-panel-toggle-row-category" type="button" data-action="toggle-inspector-permanent-copy" aria-pressed="${savePermanentCopy}">
            <span class="inspector-panel-checkbox">
              <img src="${savePermanentCopy ? BOOKMARK_CARD_CHECKBOX_ACTIVE_ICON : INSPECTOR_CHECKBOX_ICON}" alt="" width="16" height="16" />
            </span>
            <span class="inspector-panel-toggle-label">Save all as permanent copy</span>
          </button>

          <button class="inspector-panel-toggle-row inspector-panel-toggle-row-category" type="button" data-action="toggle-inspector-password" aria-pressed="${passwordProtected}">
            <span class="inspector-panel-checkbox">
              <img src="${passwordProtected ? BOOKMARK_CARD_CHECKBOX_ACTIVE_ICON : INSPECTOR_CHECKBOX_ICON}" alt="" width="16" height="16" />
            </span>
            <span class="inspector-panel-toggle-label">Password-protect this category</span>
          </button>
        </div>

        <div class="inspector-panel-divider inspector-panel-divider-category-bottom">
          <img src="${INSPECTOR_BOTTOM_DIVIDER}" alt="" width="300" height="1" />
        </div>

        <div class="inspector-panel-fields inspector-panel-fields-category">
          <div class="inspector-panel-field inspector-panel-field-move">
            <button class="inspector-panel-move-button" type="button" aria-expanded="false">
              <span class="inspector-panel-move-label">
                <span class="inspector-panel-move-icon">
                  <img src="${INSPECTOR_MOVE_CATEGORY_ICON}" alt="" width="12.7" height="12.7" />
                </span>
                <span class="inspector-panel-move-text">Move to</span>
              </span>
              <span class="inspector-panel-move-chevron">
                <img src="${INSPECTOR_MOVE_CHEVRON_ICON}" alt="" width="9.5" height="5.5" />
              </span>
            </button>
          </div>

          <div class="inspector-panel-field">
            <div class="inspector-panel-field-label-row">
              <span class="inspector-panel-field-icon">
                <img src="${INSPECTOR_TAG_ICON}" alt="" width="16" height="16" />
              </span>
              <span class="inspector-panel-field-label">Add tags</span>
            </div>
            <div class="inspector-panel-field-box inspector-panel-field-box-tags inspector-panel-field-box-resizable">
              <div class="inspector-panel-tags-field">
                <div class="inspector-panel-tags-list" data-role="inspector-tags-list">${renderInspectorSavedTags(activeInspectorCategory)}</div>
                <input class="inspector-panel-input inspector-panel-input-tags" type="text" value="${escapeHtml(tagDraft).replace(/"/g, "&quot;")}" data-role="inspector-tags-input" />
              </div>
            </div>
          </div>

          <div class="inspector-panel-field">
            <div class="inspector-panel-field-label-row">
              <span class="inspector-panel-field-icon">
                <img src="${INSPECTOR_NOTE_ICON}" alt="" width="16" height="16" />
              </span>
              <span class="inspector-panel-field-label">Add a note</span>
            </div>
            <label class="inspector-panel-field-box inspector-panel-field-box-note inspector-panel-field-box-resizable">
              <textarea class="inspector-panel-input inspector-panel-input-note" data-role="inspector-note-input">${escapeHtml(noteValue)}</textarea>
            </label>
          </div>
        </div>

        <button class="inspector-panel-delete-button" type="button">
          <span class="inspector-panel-delete-icon">
            <img src="${INSPECTOR_TRASH_ICON}" alt="" width="16" height="16" />
          </span>
          <span class="inspector-panel-delete-label">Delete Category</span>
        </button>

        ${lockedOverlayMarkup}
      </div>
    `;
  }

  return `
    <div class="inspector-panel inspector-panel-all-bookmarks">
      <div class="inspector-panel-title">All Bookmarks</div>

      <div class="inspector-panel-metadata">
        <div class="inspector-panel-meta-row">
          <span class="inspector-panel-meta-label">Types</span>
          <span class="inspector-panel-meta-value inspector-panel-meta-value-types" data-role="inspector-types">${escapeHtml(typesText)}</span>
        </div>
        <div class="inspector-panel-meta-row">
          <span class="inspector-panel-meta-label">Last Saved</span>
          <span class="inspector-panel-meta-value" data-role="inspector-last-saved">${escapeHtml(lastSaved)}</span>
        </div>
        <div class="inspector-panel-meta-row">
          <span class="inspector-panel-meta-label">Last Modified</span>
          <span class="inspector-panel-meta-value" data-role="inspector-last-modified">${escapeHtml(lastModified)}</span>
        </div>
      </div>

      <div class="inspector-panel-divider">
        <img src="${INSPECTOR_TOP_DIVIDER}" alt="" width="300" height="1" />
      </div>

      <button class="inspector-panel-toggle-row inspector-panel-toggle-row-primary" type="button" data-action="toggle-inspector-permanent-copy" aria-pressed="${Boolean(getInspectorStateValue("savePermanentCopy", activeInspectorCategory))}">
        <span class="inspector-panel-checkbox">
          <img src="${getInspectorStateValue("savePermanentCopy", activeInspectorCategory) ? BOOKMARK_CARD_CHECKBOX_ACTIVE_ICON : INSPECTOR_CHECKBOX_ICON}" alt="" width="16" height="16" />
        </span>
        <span class="inspector-panel-toggle-label">Save all as permanent copy</span>
      </button>

      <div class="inspector-panel-password-block">
        <button class="inspector-panel-toggle-row" type="button" data-action="toggle-inspector-password" aria-pressed="${Boolean(getInspectorStateValue("passwordProtected", activeInspectorCategory))}">
          <span class="inspector-panel-checkbox">
            <img src="${getInspectorStateValue("passwordProtected", activeInspectorCategory) ? BOOKMARK_CARD_CHECKBOX_ACTIVE_ICON : INSPECTOR_CHECKBOX_ICON}" alt="" width="16" height="16" />
          </span>
          <span class="inspector-panel-toggle-label">Password-protect this view</span>
        </button>
      </div>

      <div class="inspector-panel-divider inspector-panel-divider-bottom">
        <img src="${INSPECTOR_BOTTOM_DIVIDER}" alt="" width="300" height="1" />
      </div>

      <div class="inspector-panel-fields">
        <div class="inspector-panel-field">
          <div class="inspector-panel-field-label-row">
            <span class="inspector-panel-field-icon">
              <img src="${INSPECTOR_TAG_ICON}" alt="" width="16" height="16" />
            </span>
            <span class="inspector-panel-field-label">Add tags</span>
          </div>
          <div class="inspector-panel-field-box inspector-panel-field-box-tags inspector-panel-field-box-resizable">
            <div class="inspector-panel-tags-field">
              <div class="inspector-panel-tags-list" data-role="inspector-tags-list">${renderInspectorSavedTags(activeInspectorCategory)}</div>
              <input class="inspector-panel-input inspector-panel-input-tags" type="text" value="${escapeHtml(tagDraft).replace(/"/g, "&quot;")}" data-role="inspector-tags-input" />
            </div>
          </div>
        </div>

        <div class="inspector-panel-field">
          <div class="inspector-panel-field-label-row">
            <span class="inspector-panel-field-icon">
              <img src="${INSPECTOR_NOTE_ICON}" alt="" width="16" height="16" />
            </span>
            <span class="inspector-panel-field-label">Add a note</span>
          </div>
          <label class="inspector-panel-field-box inspector-panel-field-box-note inspector-panel-field-box-resizable">
            <textarea class="inspector-panel-input inspector-panel-input-note" data-role="inspector-note-input">${escapeHtml(noteValue)}</textarea>
          </label>
        </div>
      </div>

      <button class="inspector-panel-delete-button" type="button">
        <span class="inspector-panel-delete-icon">
          <img src="${INSPECTOR_TRASH_ICON}" alt="" width="16" height="16" />
        </span>
        <span class="inspector-panel-delete-label">Delete all bookmarks</span>
      </button>
    </div>
  `;
}

function renderBookmarkPriorityOption(bookmarkId, value, label, isSelected) {
  return `
    <button class="inspector-panel-bookmark-priority-option${isSelected ? " is-selected" : ""}" type="button" data-action="set-bookmark-priority" data-bookmark-id="${bookmarkId}" data-priority="${value}" aria-pressed="${isSelected}">
      <span class="inspector-panel-bookmark-priority-radio" aria-hidden="true"></span>
      <span class="inspector-panel-bookmark-priority-text">${label}</span>
    </button>
  `;
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

                <button class="import-bookmarks-button" type="button" data-action="open-import-bookmarks-modal" aria-haspopup="dialog" aria-expanded="${appState.importBookmarksModalOpen}">
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
                ${renderInspectorPanel()}
              </aside>

              ${renderImportBookmarksModal()}
            </div>
          </div>
        </section>
      </main>
    </div>
  `;

  const newBookmarkInput = app.querySelector("[data-role='new-bookmark-input']");
  if (appState.newBookmarkExpanded && appState.newBookmarkPhase !== "expand" && appState.newBookmarkPhase !== "saved" && newBookmarkInput) {
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

    if (getInspectorStateValue("tagDraft") && !event.target.closest("[data-role='inspector-tags-input']")) {
      commitInspectorTag();
    }

    if (getActiveInspectorBookmark()?.tagDraft && !event.target.closest("[data-role='bookmark-inspector-tags-input']")) {
      commitInspectorTag();
    }

    if (appState.isCreatingCategory && !event.target.closest("[data-role='new-category-input']")) {
      finalizeNewCategory();
    }

    if (appState.newBookmarkExpanded && !event.target.closest(".new-bookmark-control")) {
      resetNewBookmarkControl();
      renderShell();
    }

    if (appState.moveBookmarkMenuOpen && !event.target.closest(".inspector-panel-field-move")) {
      closeBookmarkMoveMenu();
      syncInspectorPanel();
    }

    if (appState.importBookmarksModalOpen && !event.target.closest(".import-bookmarks-modal")) {
      closeImportBookmarksModal();
      renderShell();
    }

    if (appState.deleteBookmarkModalOpen && !event.target.closest(".bookmark-delete-modal, [data-action='open-delete-bookmark-modal']")) {
      closeDeleteBookmarkModal();
      syncInspectorPanel();
    }

    if (appState.contentKebabOpen && !event.target.closest(".bookmark-content-kebab-menu-anchor")) {
      appState.contentKebabOpen = false;
      syncBookmarkContentForActiveCategory();
    }

    if (appState.exportFormatsOpen && !event.target.closest(".bookmark-content-export-group")) {
      closeExportFormatsMenu();
      syncBookmarkContentForActiveCategory();
    }
    return;
  }

  const action = actionTarget.getAttribute("data-action");
  let didCloseHeaderPopover = false;

  if (action !== "open-content-kebab" && action !== "content-kebab-item" && appState.contentKebabOpen) {
    appState.contentKebabOpen = false;
    didCloseHeaderPopover = true;
  }

  if (action !== "toggle-export-formats" && action !== "export-bookmarks-format" && appState.exportFormatsOpen) {
    closeExportFormatsMenu();
    didCloseHeaderPopover = true;
  }

  if (didCloseHeaderPopover) {
    syncBookmarkContentForActiveCategory();
  }

  if (action === "open-import-bookmarks-modal") {
    appState.importBookmarksModalOpen = true;
    renderShell();
    return;
  }

  if (action === "close-import-bookmarks-modal") {
    closeImportBookmarksModal();
    renderShell();
    return;
  }

  if (action === "browse-import-bookmarks-file") {
    app.querySelector("[data-role='import-bookmarks-file-input']")?.click();
    return;
  }

  if (action === "toggle-new-bookmark") {
    if (appState.newBookmarkExpanded) {
      resetNewBookmarkControl();
    } else {
      openNewBookmarkControl();
    }
    renderShell();
    return;
  }

  if (action === "save-bookmark") {
    if (addBookmarkFromCurrentInput()) {
      syncInspectorPanel();
    }
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

  if (action === "select-global-sidebar-item") {
    const sidebarItem = actionTarget.getAttribute("data-sidebar-item");
    if (sidebarItem) {
      appState.activeGlobalSidebarItem = sidebarItem;
      syncGlobalSidebarUi();
    }
    return;
  }

  if (action === "select-sidebar-category") {
    const categoryName = actionTarget.getAttribute("data-category");
    const categoryId = actionTarget.getAttribute("data-category-id");
    if (categoryName) {
      const categoryLink = categoryId ? findCategoryLinkById(categoryId) : findCategoryLinkByLabel(categoryName);
      if (categoryLink?.children?.length) {
        setCategoryExpanded(categoryLink.id, !isCategoryExpanded(categoryLink.id));
      }

      appState.activeInspectorBookmarkId = null;
      ensureCategoryAccessState(categoryName);
      appState.lockedInspectorCategory = isCategoryAccessLocked(categoryName) ? categoryName : null;
      closeDeleteBookmarkModal();
      appState.activeSidebarCategory = categoryName;
      appState.activeContentView = "cards";
      appState.previewBookmarkId = null;
      appState.selectedBookmarkIds = [];
      appState.contentKebabOpen = false;
      closeExportFormatsMenu();
      syncSidebarCategoryUi();
      syncBookmarkContentForActiveCategory();
      syncInspectorPanel();
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

  if (action === "open-content-kebab") {
    closeExportFormatsMenu();
    appState.contentKebabOpen = !appState.contentKebabOpen;
    syncBookmarkContentForActiveCategory();
    return;
  }

  if (action === "content-kebab-item") {
    appState.contentKebabOpen = false;
    syncBookmarkContentForActiveCategory();
    return;
  }

  if (action === "toggle-export-formats") {
    if (!getVisibleBookmarks().length) {
      closeExportFormatsMenu();
      return;
    }
    appState.exportFormatsOpen = !appState.exportFormatsOpen;
    appState.contentKebabOpen = false;
    syncBookmarkContentForActiveCategory();
    return;
  }

  if (action === "export-bookmarks-format") {
    const exportFormat = actionTarget.getAttribute("data-export-format");
    if (exportFormat) {
      downloadVisibleBookmarks(exportFormat);
      syncBookmarkContentForActiveCategory();
    }
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

  if (action === "edit-bookmark") {
    const bookmarkId = actionTarget.closest("[data-bookmark-id]")?.getAttribute("data-bookmark-id") || appState.previewBookmarkId;
    if (bookmarkId) {
      appState.lockedInspectorCategory = null;
      appState.activeInspectorBookmarkId = bookmarkId;
      closeExportFormatsMenu();
      closeBookmarkMoveMenu();
      closeDeleteBookmarkModal();
      syncInspectorPanel();
    }
    return;
  }

  if (action === "close-bookmark-inspector") {
    appState.activeInspectorBookmarkId = null;
    appState.lockedInspectorCategory = null;
    closeExportFormatsMenu();
    closeBookmarkMoveMenu();
    closeDeleteBookmarkModal();
    syncInspectorPanel();
    return;
  }

  if (action === "toggle-bookmark-move-menu") {
    const activeBookmark = getActiveInspectorBookmark();
    if (appState.moveBookmarkMenuOpen) {
      closeBookmarkMoveMenu();
    } else {
      openBookmarkMoveMenu(activeBookmark);
    }
    syncInspectorPanel();
    return;
  }

  if (action === "select-bookmark-move-category") {
    const nextCategory = actionTarget.getAttribute("data-move-category");
    if (nextCategory) {
      appState.moveBookmarkTargetCategory = nextCategory;
      syncInspectorPanel();
    }
    return;
  }

  if (action === "cancel-bookmark-move") {
    closeBookmarkMoveMenu();
    syncInspectorPanel();
    return;
  }

  if (action === "confirm-bookmark-move") {
    const activeBookmark = getActiveInspectorBookmark();
    if (activeBookmark && moveBookmarkToCategory(activeBookmark.id, appState.moveBookmarkTargetCategory)) {
      syncSidebarCategoryUi();
      syncBookmarkContentForActiveCategory();
      syncInspectorPanel();
    }
    return;
  }

  if (action === "open-delete-bookmark-modal") {
    const bookmarkId = actionTarget.getAttribute("data-bookmark-id");
    if (bookmarkId) {
      appState.pendingDeleteBookmarkId = bookmarkId;
      appState.deleteBookmarkModalOpen = true;
      syncInspectorPanel();
    }
    return;
  }

  if (action === "cancel-delete-bookmark") {
    closeDeleteBookmarkModal();
    syncInspectorPanel();
    return;
  }

  if (action === "confirm-delete-bookmark") {
    moveBookmarkToDeletedItems(appState.pendingDeleteBookmarkId);
    syncSidebarCategoryUi();
    syncBookmarkContentForActiveCategory();
    syncInspectorPanel();
    return;
  }

  if (action === "go-to-deleted-items") {
    closeDeleteBookmarkModal();
    appState.activeInspectorBookmarkId = null;
    appState.lockedInspectorCategory = null;
    appState.activeSidebarCategory = "Deleted Items";
    appState.activeContentView = "cards";
    appState.previewBookmarkId = null;
    appState.selectedBookmarkIds = [];
    appState.contentKebabOpen = false;
    syncSidebarCategoryUi();
    syncBookmarkContentForActiveCategory();
    syncInspectorPanel();
    return;
  }

  if (action === "close-preview") {
    closeDeleteBookmarkModal();
    appState.activeContentView = "cards";
    appState.previewBookmarkId = null;
    renderShell();
    return;
  }

  if (action === "toggle-locked-category-password-visibility") {
    const accessState = ensureCategoryAccessState(appState.activeSidebarCategory);
    if (accessState) {
      accessState.passwordVisible = !accessState.passwordVisible;
      syncLockedCategoryAccessUi();
    }
    return;
  }

  if (action === "submit-locked-category-access") {
    unlockActiveCategory();
    return;
  }

  if (action === "save-permanent-copy") {
    const bookmark = appState.bookmarks.find((item) => item.id === appState.previewBookmarkId);

    if (bookmark) {
      bookmark.isPermanentCopy = true;
      bookmark.modifiedDate = formatBookmarkDate(new Date());
      updateRelatedInspectorModifiedDates(bookmark.category);
      syncInspectorPanel();
    }

    return;
  }

  if (action === "toggle-inspector-favourite") {
    const isFavourite = Boolean(getInspectorStateValue("isFavourite"));
    setInspectorStateValue("isFavourite", !isFavourite);
    updateRelatedInspectorModifiedDates(getSupportedInspectorCategory());
    syncInspectorPanel();
    return;
  }

  if (action === "toggle-bookmark-favourite") {
    const bookmark = appState.bookmarks.find((item) => item.id === actionTarget.getAttribute("data-bookmark-id"));
    if (!bookmark) {
      return;
    }

    bookmark.isFavourite = !bookmark.isFavourite;
    bookmark.modifiedDate = formatBookmarkDate(new Date());
    updateRelatedInspectorModifiedDates(bookmark.category);
    syncInspectorPanel();
    return;
  }

  if (action === "toggle-bookmark-permanent-copy") {
    const bookmark = appState.bookmarks.find((item) => item.id === actionTarget.getAttribute("data-bookmark-id"));
    if (!bookmark) {
      return;
    }

    bookmark.isPermanentCopy = !bookmark.isPermanentCopy;
    bookmark.modifiedDate = formatBookmarkDate(new Date());
    updateRelatedInspectorModifiedDates(bookmark.category);
    syncInspectorPanel();
    syncBookmarkContentForActiveCategory();
    return;
  }

  if (action === "toggle-inspector-permanent-copy") {
    const savePermanentCopy = Boolean(getInspectorStateValue("savePermanentCopy"));
    setInspectorStateValue("savePermanentCopy", !savePermanentCopy);
    updateRelatedInspectorModifiedDates(getSupportedInspectorCategory());
    syncInspectorPanel();
    return;
  }

  if (action === "toggle-inspector-password") {
    const passwordProtected = Boolean(getInspectorStateValue("passwordProtected"));
    setInspectorStateValue("passwordProtected", !passwordProtected);
    if (passwordProtected) {
      appState.lockedInspectorCategory = null;
      setCategoryUnlocked(appState.activeSidebarCategory, false);
    } else {
      setCategoryUnlocked(appState.activeSidebarCategory, false);
      appState.lockedInspectorCategory = appState.activeSidebarCategory;
    }
    updateRelatedInspectorModifiedDates(getSupportedInspectorCategory());
    syncSidebarCategoryUi();
    syncBookmarkContentForActiveCategory();
    syncInspectorPanel();
    return;
  }

  if (action === "remove-inspector-tag") {
    const tag = actionTarget.getAttribute("data-tag");
    if (!tag) {
      return;
    }
    const tags = getInspectorStateValue("tags") || [];
    setInspectorStateValue("tags", tags.filter((item) => item !== tag));
    updateRelatedInspectorModifiedDates(getSupportedInspectorCategory());
    syncInspectorPanel();
    return;
  }

  if (action === "remove-bookmark-tag") {
    const bookmark = appState.bookmarks.find((item) => item.id === actionTarget.getAttribute("data-bookmark-id"));
    const tag = actionTarget.getAttribute("data-tag");
    if (!bookmark || !tag) {
      return;
    }

    bookmark.tags = bookmark.tags.filter((item) => item !== tag);
    bookmark.modifiedDate = formatBookmarkDate(new Date());
    updateRelatedInspectorModifiedDates(bookmark.category);
    syncInspectorPanel();
    return;
  }

  if (action === "set-bookmark-priority") {
    const bookmark = appState.bookmarks.find((item) => item.id === actionTarget.getAttribute("data-bookmark-id"));
    const priority = actionTarget.getAttribute("data-priority");
    if (!bookmark || !["high", "normal", "low"].includes(priority)) {
      return;
    }

    bookmark.priority = priority;
    bookmark.modifiedDate = formatBookmarkDate(new Date());
    updateRelatedInspectorModifiedDates(bookmark.category);
    syncInspectorPanel();
    return;
  }

  if (action === "open-bookmark-browser" || action === "export-bookmark") {
    return;
  }
}

function finalizeNewCategory() {
  const trimmedName = appState.newCategoryName.trim();
  const categoryName = trimmedName || "New Category";
  appState.categoryLinks.push(
    createCategoryLink({
      id: `category-${Date.now()}`,
      label: categoryName,
      icon: BOOKMARK_FOLDER_ICON
    })
  );
  ensureCategoryInspectorState(categoryName);
  appState.createCategoryState = "default";
  appState.isCreatingCategory = false;
  appState.newCategoryName = "New Category";
  renderShell();
}

function syncSidebarDragUi() {
  app.querySelectorAll("[data-category-id]").forEach((link) => {
    const categoryId = link.getAttribute("data-category-id");
    link.classList.toggle("is-dragging", categoryId === appState.draggedCategoryId);
    link.classList.toggle("is-drop-target", categoryId === appState.dropTargetCategoryId);
  });
}

function handleAppDragStart(event) {
  const categoryLink = event.target.closest("[data-category-id]");
  if (!categoryLink) {
    return;
  }

  const categoryId = categoryLink.getAttribute("data-category-id");
  if (!categoryId) {
    return;
  }

  appState.draggedCategoryId = categoryId;
  appState.dropTargetCategoryId = null;

  if (event.dataTransfer) {
    event.dataTransfer.effectAllowed = "move";
    event.dataTransfer.setData("text/plain", categoryId);
  }

  syncSidebarDragUi();
}

function handleAppDragOver(event) {
  const categoryLink = event.target.closest("[data-category-id]");
  if (!categoryLink) {
    return;
  }

  const targetId = categoryLink.getAttribute("data-category-id");
  if (!canDropCategoryOnTarget(appState.draggedCategoryId, targetId)) {
    if (appState.dropTargetCategoryId) {
      appState.dropTargetCategoryId = null;
      syncSidebarDragUi();
    }
    return;
  }

  event.preventDefault();
  if (event.dataTransfer) {
    event.dataTransfer.dropEffect = "move";
  }

  if (appState.dropTargetCategoryId !== targetId) {
    appState.dropTargetCategoryId = targetId;
    syncSidebarDragUi();
  }
}

function handleAppDrop(event) {
  const categoryLink = event.target.closest("[data-category-id]");
  if (!categoryLink) {
    return;
  }

  const targetId = categoryLink.getAttribute("data-category-id");
  if (!canDropCategoryOnTarget(appState.draggedCategoryId, targetId)) {
    return;
  }

  event.preventDefault();
  moveCategoryLink(appState.draggedCategoryId, targetId);
  appState.dropTargetCategoryId = null;
  appState.draggedCategoryId = null;
  renderShell();
}

function handleAppDragEnd() {
  if (!appState.draggedCategoryId && !appState.dropTargetCategoryId) {
    return;
  }

  appState.draggedCategoryId = null;
  appState.dropTargetCategoryId = null;
  syncSidebarDragUi();
}

function handleAppInput(event) {
  if (event.target.matches("[data-role='new-bookmark-input']")) {
    appState.bookmarkUrl = event.target.value;
    const saveButton = app.querySelector(".new-bookmark-save");
    if (saveButton) {
      const hasBookmarkUrl = Boolean(appState.bookmarkUrl.trim());
      saveButton.classList.toggle("is-disabled", !hasBookmarkUrl);
      saveButton.disabled = !hasBookmarkUrl;
    }
    return;
  }

  if (event.target.matches("[data-role='new-category-input']")) {
    appState.newCategoryName = event.target.value;
    return;
  }

  if (event.target.matches("[data-role='inspector-tags-input']")) {
    setInspectorStateValue("tagDraft", event.target.value);
    return;
  }

  if (event.target.matches("[data-role='locked-category-password-input']")) {
    const accessState = ensureCategoryAccessState(appState.activeSidebarCategory);
    if (accessState) {
      accessState.passwordDraft = event.target.value;
      syncLockedCategoryAccessUi();
    }
    return;
  }

  if (event.target.matches("[data-role='bookmark-inspector-tags-input']")) {
    const bookmark = getActiveInspectorBookmark();
    if (bookmark) {
      bookmark.tagDraft = event.target.value;
    }
    return;
  }

  if (event.target.matches("[data-role='inspector-note-input']")) {
    setInspectorStateValue("note", event.target.value);
    updateRelatedInspectorModifiedDates(getSupportedInspectorCategory());
    syncInspectorMetadataUi();
    return;
  }

  if (event.target.matches("[data-role='bookmark-inspector-note-input']")) {
    const bookmark = getActiveInspectorBookmark();
    if (bookmark) {
      bookmark.note = event.target.value;
      bookmark.modifiedDate = formatBookmarkDate(new Date());
      updateRelatedInspectorModifiedDates(bookmark.category);
      syncInspectorMetadataUi();
    }
  }
}

function handleAppKeydown(event) {
  if (event.key === "Escape" && appState.importBookmarksModalOpen) {
    closeImportBookmarksModal();
    renderShell();
    return;
  }

  if (!event.target.matches("[data-role='new-bookmark-input']")) {
    if (event.target.matches("[data-role='bookmark-inspector-tags-input']")) {
      if (event.key === "Enter" || event.key === ",") {
        event.preventDefault();
        commitInspectorTag();
      }

      if (event.key === "Escape") {
        const bookmark = getActiveInspectorBookmark();
        if (bookmark) {
          bookmark.tagDraft = "";
          syncInspectorTagsUi();
        }
      }
      return;
    }

    if (event.target.matches("[data-role='inspector-tags-input']")) {
      if (event.key === "Enter" || event.key === ",") {
        event.preventDefault();
        commitInspectorTag();
      }

      if (event.key === "Escape") {
        setInspectorStateValue("tagDraft", "");
        syncInspectorTagsUi();
      }
      return;
    }

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

    if (event.target.matches("[data-role='locked-category-password-input']")) {
      if (event.key === "Enter") {
        event.preventDefault();
        unlockActiveCategory();
      }
      return;
    }

    if (event.key === "Escape" && appState.newBookmarkExpanded) {
      resetNewBookmarkControl();
      renderShell();
    }
    return;
  }

  if (event.key === "Enter" && appState.bookmarkUrl.trim()) {
    addBookmarkFromCurrentInput();
  }

  if (event.key === "Escape") {
    resetNewBookmarkControl();
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
  app.addEventListener("dragstart", handleAppDragStart);
  app.addEventListener("dragover", handleAppDragOver);
  app.addEventListener("drop", handleAppDrop);
  app.addEventListener("dragend", handleAppDragEnd);
  app.addEventListener("input", handleAppInput);
  app.addEventListener("keydown", handleAppKeydown);
}

init();
