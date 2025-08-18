import adapter from '@sveltejs/adapter-static';
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
      // 빌드 결과물이 public이 아닌 'build' 폴더에 생성되도록 설정
      pages: 'build',
      assets: 'build',
      fallback: null
    }),
    prerender: {
      default: true  // 모든 페이지를 빌드시 미리 렌더링
    }
  }
};
