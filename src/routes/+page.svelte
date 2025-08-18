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
	import music from '../lib/assets/harunohi.mp3';

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

	onMount(() => {
		const tryPlay = () => {
			startMusic();
			// 이벤트는 한 번만 실행되도록 제거
			document.removeEventListener('click', tryPlay);
		};

		// 화면 어디 클릭해도 실행
		document.addEventListener('click', tryPlay, { once: true });
	});
</script>

<Cover />
<Letter />
<Calendar />
<Location />
<Gallery />
<Bank />
<Rsvp {form} />
<Footer />
