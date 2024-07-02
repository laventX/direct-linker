# Direct Linker

Transforms public cloud links into direct links to files.

## Supported services

### Dropbox

Link examples:
- **Before:** [`https://www.dropbox.com/scl/fi/50510hmot7b55bsvx3xjd/direct-linker-example.jpg?rlkey=e7n92tvfgnzj95awppx0g4ycp&st=f48ecm2d&dl=0`](https://www.dropbox.com/scl/fi/50510hmot7b55bsvx3xjd/direct-linker-example.jpg?rlkey=e7n92tvfgnzj95awppx0g4ycp&st=f48ecm2d&dl=0)

	**After:** [`https://dl.dropboxusercontent.com/scl/fi/50510hmot7b55bsvx3xjd/direct-linker-example.jpg?rlkey=e7n92tvfgnzj95awppx0g4ycp`](https://dl.dropboxusercontent.com/scl/fi/50510hmot7b55bsvx3xjd/direct-linker-example.jpg?rlkey=e7n92tvfgnzj95awppx0g4ycp)

- **Before:** [`https://www.dropbox.com/s/9znp3i1s6dz3zii/photo.jpg?dl=0`](https://www.dropbox.com/s/9znp3i1s6dz3zii/photo.jpg?dl=0)

	**After:** [`https://dl.dropboxusercontent.com/s/9znp3i1s6dz3zii/photo.jpg`](https://dl.dropboxusercontent.com/s/9znp3i1s6dz3zii/photo.jpg)

### Google Drive

Link examples:

- **Before:** [`https://drive.google.com/file/d/1r2Jip_yKijQXv5HV3WWj26INZyx471LQ/view?usp=drive_link`](https://drive.google.com/file/d/1r2Jip_yKijQXv5HV3WWj26INZyx471LQ/view?usp=drive_link)

	**After:** [`https://drive.usercontent.google.com/download?id=1r2Jip_yKijQXv5HV3WWj26INZyx471LQ`](https://drive.usercontent.google.com/download?id=1r2Jip_yKijQXv5HV3WWj26INZyx471LQ)

## How to use

After `https://laventx.github.io/direct-linker/?link=`, insert a link to your file and navigate to the resulting address.

For example, [`https://laventx.github.io/direct-linker/?link=https://www.dropbox.com/scl/fi/50510hmot7b55bsvx3xjd/direct-linker-example.jpg?rlkey=e7n92tvfgnzj95awppx0g4ycp&st=f48ecm2d&dl=0`](https://laventx.github.io/direct-linker/?link=https://www.dropbox.com/scl/fi/50510hmot7b55bsvx3xjd/direct-linker-example.jpg?rlkey=e7n92tvfgnzj95awppx0g4ycp&st=f48ecm2d&dl=0).

The service was created to be used as a shortcut in Google Chrome address bar:

![](https://dl.dropboxusercontent.com/scl/fi/pk97xr2fvkwnbv5y2f3jp/direct-linker-add-site.png?rlkey=uzvotbrqf0jieg89r09cbvlqu)<br>
*`chrome://settings/searchEngines`*
