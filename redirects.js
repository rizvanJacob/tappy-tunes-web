// @ts-check
/**
 * @typedef {Object} Redirect
 * @property {string} title
 * @property {string} subpath
 * @property {string} url
 */
/** @type {Redirect[]} */
const redirects = [
  {
    title: "TappyTunes",
    subpath: "/",
    url: "https://tappytunes.co",
  },
  {
    title: "Closed Testing Feedback",
    subpath: "/closed-testing-feedback",
    url: "https://www.tappytunes.co/closed-testing-feedback",
  },
  {
    title: "Ntag213 Shoppee Linke",
    subpath: "/nfc-tag-shoppee-1",
    url: "https://sg.shp.ee/GZbLv4m",
  },
];

const normalizePath = (/** @type {string} */ value) =>
  value.replace(/\/+$/, "") || "/";
const currentPath = normalizePath(window.location.pathname);
const pathDepth = currentPath.split("/").filter(Boolean).length;
const normalizedRedirects = redirects.map((entry) => ({
  entry,
  subpath: normalizePath(entry.subpath),
}));

const match = normalizedRedirects
  .filter(({ subpath }) => {
    if (subpath === "/") {
      return currentPath === "/" || pathDepth === 1;
    }
    return currentPath === subpath || currentPath.endsWith(subpath);
  })
  .sort((a, b) => b.subpath.length - a.subpath.length)[0];

if (match) {
  const title = document.querySelector("[data-redirect-title]");
  if (title) {
    title.textContent = match.entry.title;
  }
  window.location.replace(match.entry.url);
}

const list = document.querySelector("[data-redirect-list]");
if (list) {
  list.innerHTML = "";
  redirects.forEach((entry) => {
    const item = document.createElement("li");
    const link = document.createElement("a");
    link.href = entry.url;
    link.textContent = entry.title;
    item.appendChild(link);
    list.appendChild(item);
  });
}
