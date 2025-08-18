import adapter from '@sveltejs/adapter-node';
import preprocess from 'svelte-preprocess';

export default {
  preprocess: preprocess({
    scss: {
      prependData: `@import 'src/styles/variables.scss';`
    },
    postcss: true
  }),
  kit: {
    adapter: adapter({
      // 옵션은 필요에 따라 지정 가능, 기본 설정이면 그냥 adapter()만 써도 됨
      out: 'build'  // 빌드 폴더 이름
    })
  }
};
