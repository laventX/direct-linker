import "./style.css";
import {
  getDropboxDirectLink,
  getDropbox2DirectLink,
  getGoogleDriveDirectLink,
  hasRightHostname,
  isCorrectDropboxLink,
  isCorrectDropbox2Link,
  isCorrectGoogleDriveLink,
} from "./parse.js";

const outputLinkNode: HTMLAnchorElement | null =
  document.querySelector(".output__link");

const DEFAULT_OUTPUT_LINK = "https://github.com/laventx/direct-linker";

let outputLink = DEFAULT_OUTPUT_LINK;

const currentLink = new URL(window.location.href);

const inputLink = new URL(currentLink.searchParams.get("link") || currentLink);

const updateOutputLink = (link: URL) => {
  // Dropbox (/s/)
  if (hasRightHostname(link, "dropbox.com") && isCorrectDropboxLink(link)) {
    outputLink = getDropboxDirectLink(link);
  }

  // Dropbox (/scl/fi/)
  if (hasRightHostname(link, "dropbox.com") && isCorrectDropbox2Link(link)) {
    outputLink = getDropbox2DirectLink(link);
  }

  // Google Drive
  if (
    hasRightHostname(link, "drive.google.com") &&
    isCorrectGoogleDriveLink(link)
  ) {
    outputLink = getGoogleDriveDirectLink(link);
  }
};

updateOutputLink(inputLink);

const renderOutputLink = (link: string) => {
  if (outputLinkNode) {
    outputLinkNode.textContent = link;
    outputLinkNode.href = link;
  }
};

const goToLink = (link: string) => {
  window.location.replace(link);
};

renderOutputLink(outputLink);

goToLink(outputLink);
