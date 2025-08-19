<script lang="ts">
  import '/src/styles/global.scss';
  import '/src/i18n.svelte.ts';
  import { localeStore } from '../i18n.svelte';
  import { onMount } from 'svelte';
  import { _ } from 'svelte-i18n';

  let { children } = $props();

  // locale 로딩 상태 확인
  let localeLoaded = $derived(!localeStore.isLoading && localeStore.locale);

  // 클라이언트용 title (선택적)
  let title = "원진 ♥ 지아의 결혼식에 초대합니다";
  onMount(() => {
    document.body.classList.add('loaded');
    // locale이 로딩 완료되면 title 업데이트 (필요 시)
    if (localeLoaded) {
      // title = $_('meta.title'); // 필요 시 활성화
    }
  });
</script>

<svelte:head>
  <!-- 기본 title -->
  <title>원진 ♥ 지아의 결혼식에 초대합니다</title>

  <!-- 웹폰트 -->
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
  <link
    rel="stylesheet"
    href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&family=Noto+Serif+KR:wght@200..900&family=Sacramento&display=swap"
  />
  <link
    rel="stylesheet"
    href="https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100..900;1,100..900&display=swap"
  />

  <!-- OG / SNS 미리보기 -->
  <meta property="og:title" content="원진 ♥ 지아의 결혼식에 초대합니다" />
  <meta property="og:description" content="2025년 11월 16일 함께 달릴 준비 완료💨" />
  <meta property="og:image" content="https://wedding-invi-delta.vercel.app/preview_img.jpg" />
  <meta property="og:url" content="https://wedding-invi-delta.vercel.app/" />
  <meta property="og:type" content="website" />

  <!-- optional: Twitter 카드 -->
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="원진 ♥ 지아의 결혼식에 초대합니다" />
  <meta name="twitter:description" content="2025년 11월 16일 함께 달릴 준비 완료💨" />
  <meta name="twitter:image" content="https://wedding-invi-delta.vercel.app/preview_img.jpg" />
</svelte:head>

{#if localeLoaded}
  {@render children()}
{/if}

<style lang="scss">
  /* 기존 global.scss 포함 */
</style>
