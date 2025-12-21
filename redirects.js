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
    title: "Page 2",
    subpath: "/page-2",
    url: "https://example.com/page-2",
  },
];

const normalizePath = (value) => value.replace(/\/+$/, "") || "/";
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
