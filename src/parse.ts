export const hasRightHostname = (link: URL, hostname: string) =>
  link.hostname.endsWith(hostname);

// Dropbox (/s/)

export const isCorrectDropboxLink = (link: URL) =>
  link.pathname.startsWith("/s/") &&
  link.pathname.match(/^\/s\/.+\/.+/) !== null;

export const getDropboxDirectLink = (link: URL) =>
  `https://dl.dropboxusercontent.com/s/${link.pathname.replace(/^\/s\//, "")}`;

// Dropbox (/scl/fi/)

export const isCorrectDropbox2Link = (link: URL) =>
  link.pathname.startsWith("/scl/fi/") &&
  link.pathname.match(/^\/scl\/fi\/.+\/.+/) !== null &&
  link.searchParams.has("rlkey");

export const getDropbox2DirectLink = (link: URL) =>
  `https://dl.dropboxusercontent.com/scl/fi/${link.pathname.replace(
    /^\/scl\/fi\//,
    ""
  )}?rlkey=${link.searchParams.get("rlkey")}`;

// Google Drive

export const isCorrectGoogleDriveLink = (link: URL) =>
  link.pathname.startsWith("/file/d/") &&
  link.pathname.match(/^\/file\/d\/.+/) !== null;

export const getGoogleDriveDirectLink = (link: URL) =>
  `https://drive.google.com/uc?id=${link.pathname
    .replace(/^\/file\/d\//, "")
    .replace(/\/.*/, "")}`;
