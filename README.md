# xemu logo animation
_Standalone xemu logo shader animation_

<video width="640" height="360" controls>
  <source src="renders/800x400.webm" type="video/webm">
  Failed to play video. View it at <a href="renders/800x400.webm">renders/800x400.webm</a>.
</video>

# How to render
1. Install the [Shadertoy Custom Textures](https://github.com/ahillss/ShadertoyCustomTextures) browser extension.
2. Open [Shadertoy](https://www.shadertoy.com/view/3ftSz8)
3. Drag and drop the [`data/logo_sdf.png`](data/logo_sdf.png) file into the `iChannel0` slot.

## Troubleshooting
If you can't drop the image, open the developer console, paste the contents of [`load_image.js`](load_image.js) and hit enter.