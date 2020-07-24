const imagemin = require('imagemin');
const imageminWebp = require('imagemin-webp');

(async () => {
  const files = await imagemin(['./static/images/*.{jpg,png,jpeg}'], {
    destination: './static/webp',
    plugins: [imageminWebp( {buffer: Buffer} )],
  });
  // console.log(files);
})();