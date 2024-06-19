import { expect, test } from 'vitest';
import {
  hasRightHostname,
  getDropboxDirectLink,
  getDropbox2DirectLink,
  getGoogleDriveDirectLink,
  isCorrectDropboxLink,
  isCorrectDropbox2Link,
  isCorrectGoogleDriveLink
} from './parse.js';

const CloudLink = {
  DROPBOX: 'https://www.dropbox.com/s/9znp3i1s6dz3zii/photo.jpg?dl=0',
  DROPBOX2:
    'https://www.dropbox.com/scl/fi/50510hmot7b55bsvx3xjd/direct-linker-example.jpg?rlkey=e7n92tvfgnzj95awppx0g4ycp&st=f48ecm2d&dl=0',
  GOOGLE_DRIVE:
    'https://drive.google.com/file/d/1r2Jip_yKijQXv5HV3WWj26INZyx471LQ/view?usp=drive_link'
};

const DirectLink = {
  DROPBOX: 'https://dl.dropboxusercontent.com/s/9znp3i1s6dz3zii/photo.jpg',
  DROPBOX2:
    'https://dl.dropboxusercontent.com/scl/fi/50510hmot7b55bsvx3xjd/direct-linker-example.jpg?rlkey=e7n92tvfgnzj95awppx0g4ycp',
  GOOGLE_DRIVE:
    'https://drive.google.com/uc?id=1r2Jip_yKijQXv5HV3WWj26INZyx471LQ'
};

// Dropbox (/s/)

test('Checks if Dropbox hostname is correct', () => {
  expect(hasRightHostname(new URL(CloudLink.DROPBOX), 'dropbox.com')).toBe(
    true
  );
  expect(hasRightHostname(new URL(CloudLink.GOOGLE_DRIVE), 'dropbox.com')).toBe(
    false
  );
});

test('Checks if Dropbox link is correct', () => {
  expect(isCorrectDropboxLink(new URL(CloudLink.DROPBOX))).toBe(true);
  expect(isCorrectDropboxLink(new URL(CloudLink.DROPBOX2))).toBe(false);
  expect(isCorrectDropboxLink(new URL(CloudLink.GOOGLE_DRIVE))).toBe(false);
});

test('Transforms Dropbox link to direct link', () => {
  expect(getDropboxDirectLink(new URL(CloudLink.DROPBOX))).toBe(
    DirectLink.DROPBOX
  );
});

// Dropbox (/scl/fi/)

test('Checks if Dropbox hostname is correct', () => {
  expect(hasRightHostname(new URL(CloudLink.DROPBOX2), 'dropbox.com')).toBe(
    true
  );
  expect(hasRightHostname(new URL(CloudLink.GOOGLE_DRIVE), 'dropbox.com')).toBe(
    false
  );
});

test('Checks if Dropbox link is correct', () => {
  expect(isCorrectDropbox2Link(new URL(CloudLink.DROPBOX2))).toBe(true);
  expect(isCorrectDropbox2Link(new URL(CloudLink.DROPBOX))).toBe(false);
  expect(isCorrectDropbox2Link(new URL(CloudLink.GOOGLE_DRIVE))).toBe(false);
});

test('Transforms Dropbox link to direct link', () => {
  expect(getDropbox2DirectLink(new URL(CloudLink.DROPBOX2))).toBe(
    DirectLink.DROPBOX2
  );
});

// Google Drive

test('Checks if Google Drive hostname is correct', () => {
  expect(
    hasRightHostname(new URL(CloudLink.GOOGLE_DRIVE), 'drive.google.com')
  ).toBe(true);
  expect(hasRightHostname(new URL(CloudLink.DROPBOX), 'drive.google.com')).toBe(
    false
  );
});

test('Checks if Google Drive link is correct', () => {
  expect(isCorrectGoogleDriveLink(new URL(CloudLink.GOOGLE_DRIVE))).toBe(true);
  expect(isCorrectGoogleDriveLink(new URL(CloudLink.DROPBOX))).toBe(false);
  expect(isCorrectGoogleDriveLink(new URL(CloudLink.DROPBOX2))).toBe(false);
});

test('Transforms Google Drive link to direct link', () => {
  expect(getGoogleDriveDirectLink(new URL(CloudLink.GOOGLE_DRIVE))).toBe(
    DirectLink.GOOGLE_DRIVE
  );
});
