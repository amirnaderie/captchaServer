First Of All You Need To Install canvas package in node server

For detailed installation information, see the wiki. One-line installation instructions for common OSes are below. Note that libgif/giflib, librsvg and libjpeg are optional and only required if you need GIF, SVG and JPEG support, respectively. Cairo v1.10.0 or later is required.
OS 	Command
OS X 	Using Homebrew:
brew install pkg-config cairo pango libpng jpeg giflib librsvg pixman
Ubuntu 	sudo apt-get install build-essential libcairo2-dev libpango1.0-dev libjpeg-dev libgif-dev librsvg2-dev
Fedora 	sudo yum install gcc-c++ cairo-devel pango-devel libjpeg-turbo-devel giflib-devel
Solaris 	pkgin install cairo pango pkg-config xproto renderproto kbproto xextproto
OpenBSD 	doas pkg_add cairo pango png jpeg giflib
Windows 	See the Bellow

Installation: Windows
Linus Unnebäck edited this page Jun 16, 2022 · 10 revisions
Pages 16

Dependencies
    Install Manually
    1. Installing node-gyp
    2. Installing GTK 2
    3. Installing libjpeg-turbo (optional, for JPEG support; node-canvas 2.0 and later)
    4. Installing node-canvas
    Install with Chocolatey

Installation: Windows (using MSYS2)
Using with framebuffer devices
Clone this wiki locally
Dependencies

Building the node-canvas module requires:

    A global installation of node-gyp.
    GTK 2
    For optional JPEG support (node-canvas 2.0 and later): libjpeg-turbo

Install Manually
1. Installing node-gyp

Follow the instructions here: https://github.com/nodejs/node-gyp#on-windows
2. Installing GTK 2

You will need the cairo library which is bundled in GTK. Download the GTK 2 bundle for Win32 or Win64. Unzip the contents in C:\GTK.

Notes:

    Both GTK and Node.js need either be 64bit or 32bit to compile successfully.
    Download GTK 2, not GTK 3, which is missing the required libpng. If you get linker errors you've most likely picked the wrong bundle.
    If you use a different location than C:\GTK, add a GTK_Root argument to npm install or node-gyp rebuild. For example: node-gyp rebuild --GTK_Root=C:\somewhere\GTK.

3. Installing libjpeg-turbo (optional, for JPEG support; node-canvas 2.0 and later)

Download the latest libjpeg-turbo SDK for Visual C++ (currently libjpeg-turbo-2.0.0-vc.exe or libjpeg-turbo-2.0.0-vc64.exe) and install to its default location (C:\libjpeg-turbo if 32bit or C:\libjpeg-turbo64 if 64bit).

Notes:

    Both libjpeg-turbo and Node.js need either be 64bit or 32bit to compile successfully.
    If you use a different location, add a jpeg_root argument to npm install or node-gyp rebuild. For example: node-gyp rebuild --jpeg_root=C:\somewhere\libjpeg-turbo.

4. Installing node-canvas

After all dependencies are setup, npm install canvas or yarn add canvas.