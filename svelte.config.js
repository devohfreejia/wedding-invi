import adapter from '@sveltejs/adapter-vercel';
import preprocess from 'svelte-preprocess';

export default {
  preprocess: preprocess({
    scss: {
      prependData: `@import 'src/styles/variables.scss';`
    },
    postcss: true
  }),
  kit: {
    adapter: adapter()
  }
};
