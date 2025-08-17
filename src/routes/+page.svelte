<script lang="ts">
	import Calendar from '../components/calendar.svelte';
	import Letter from '../components/letter.svelte';
	import Rsvp from '../components/rsvp.svelte';
	import Cover from '../components/cover.svelte';
	import type { PageProps } from './$types';
	import Gallery from '../components/gallery.svelte';
	let { form }: PageProps = $props();
	import Bank from '../components/bank.svelte';
	import Location from '../components/locat.svelte';
	import Footer from '../components/footer.svelte';
	import { onMount } from "svelte";
	import music from '../lib/assets/harunohi.mp3'; // mp3를 import

	let audio;
	let started = false;

	const startMusic = () => {
		if (started) return;
		audio = new Audio(music);
		audio.loop = true;
		audio.volume = 1;
		audio.play().catch(err => console.log("재생 실패:", err));
		started = true;
	};
</script>

<style>
  .touch-area {
    position: fixed;
    inset: 0;
    width: 100%;
    height: 100%;
    z-index: 1000;
    cursor: pointer;
  }
</style>

<div class="touch-area" on:click={startMusic}>
  <p style="text-align:center; margin-top:50vh; font-size:1.2rem;">
  </p>
</div>

<Cover />
<Letter />
<Calendar />
<Location />
<Gallery />
<Bank />
<Rsvp {form} />
<Footer />