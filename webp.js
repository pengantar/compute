import imagemin from 'imagemin';
import imageminWebp from 'imagemin-webp';

(async () => {
  await imagemin(['./static/images/*.{jpg,png,jpeg}'], {
    destination: './static/webp',
    plugins: [imageminWebp( {buffer: Buffer} )],
  });
})();