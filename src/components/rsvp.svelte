<script lang="ts">
	import { _ } from 'svelte-i18n';
	import { localeStore } from '../i18n.svelte';
	import { LoaderCircle } from '@lucide/svelte';
	import RsvpSelect from './rsvp-select.svelte';
	import rsvpDeco from '$lib/assets/rsvp-deco.svg';
	import RsvpAccordion from './rsvp-accordion.svelte';

	let rsvp: 'yes' | 'no' | null = null;
	let name = '';
	let submitting = false;
	let successMessage = '';
	let errorMessage = '';

	// Google Apps Script Web App URL (doGet 방식)
	const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbxpqg4J3qzU-vvzhYB8aJ-i37a3kEofDQYHQcNrGSQHLoqIZIaRnIPLZRo7asGBMe2QKA/exec";

	function clearValidationMessage(formInput: 'name' | 'rsvp') {
		if (formInput === 'name') errorMessage = '';
		if (formInput === 'rsvp') errorMessage = '';
	}

	async function submitForm(e: Event) {
		e.preventDefault();

		if (!name || !rsvp) {
			errorMessage = '이름과 참석여부를 입력해주세요.';
			return;
		}

		submitting = true;
		successMessage = '';
		errorMessage = '';

		try {
			const params = new URLSearchParams({ name, rsvp });
			const res = await fetch(`${GOOGLE_SCRIPT_URL}?${params.toString()}`, {
				method: 'GET',
			});
			const data = await res.json();

			if (data.result === 'success') {
				successMessage = '참석여부가 저장되었습니다!';
				name = '';
				rsvp = null;
			} else {
				errorMessage = data.message || '저장에 실패했습니다.';
			}
		} catch (err) {
			errorMessage = '오류가 발생했습니다.';
		} finally {
			submitting = false;
		}
	}
</script>

<section class="rsvp">
	<div class="header">
		<!-- <img display="none" class="header-deco" src={rsvpDeco} alt="rsvp header deco" /> -->
		<h2 class="title {localeStore.locale}">{$_('rsvp.title')}</h2>
		<p class="sub-title {localeStore.locale}">{$_('rsvp.reply_by')}</p>
	</div>

	<form class="rsvp-form" onsubmit={submitForm}>
		<input
			class="fullname {localeStore.locale}"
			name="fullname"
			bind:value={name}
			placeholder={$_('rsvp.fullname_placeholder')}
			onfocus={() => clearValidationMessage('name')}
		/>
		<div class="select-container">
			<RsvpSelect bind:rsvp clearForm={() => clearValidationMessage('rsvp')} />
		</div>
		<button class="send {localeStore.locale}" type="submit" disabled={submitting}>
			{#if submitting}
				<div class="spinning"><LoaderCircle /></div>
			{:else}
				{$_('rsvp.send')}
			{/if}
		</button>
	</form>

	<div class="submit-message">
		{#if successMessage}
			<p class="success {localeStore.locale}">{successMessage}</p>
		{/if}
		{#if errorMessage}
			<p class="error {localeStore.locale}">{errorMessage}</p>
		{/if}
	</div>

	<div class="accordion-container">
		<RsvpAccordion />
	</div>
</section>

<style lang="scss">
	/* 기존 스타일 유지 */
	section.rsvp {
		padding: 0em 3.5em;
	}
	.header { display: flex; flex-direction: column; align-items: center; }
	img.header-deco { width: 4.5em; margin-bottom: 0.8em; }
	h2.title { color: $primary-color;
		&.kr { @extend .title-font-kr; letter-spacing: 1px; }
		&.en { @extend .title-font-en; letter-spacing: 3px; }
	}
	p.sub-title {
		&.kr { margin-top: 0.9em; font-size: 0.9rem; }
		&.en { margin-top: 0.5em; font-size: 1.2rem; }
	}
	form.rsvp-form { margin-top: 3em; }
	input.fullname {
		padding: 0.4em 0.8em; width: 100%; border: 1px solid $white-2; border-radius: 4px; letter-spacing: 0.02em;
		&:active, &:focus { @extend .input-focused; }
		&::placeholder { color: $font-color-light; }
		&.kr::placeholder { font-size: 0.9rem; }
	}
	.select-container { margin-top: 1em; }
	button.send {
		display: flex; justify-content: center; align-items: center;
		margin-top: 3em; height: 2.5em; width: 100%;
		background-color: $primary-color; border-radius: 4px; color: $white;
		letter-spacing: 0.05em;
		&[disabled] { background-color: $primary-color-light; cursor: not-allowed; }
		&:active { background-color: $primary-color-dark; }
		&.kr { font-weight: 600; }
		&.en { font-weight: 700; }
	}
	@keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(359deg); } }
	.spinning { display: flex; justify-content: center; align-items: center; animation: spin 1s linear infinite; }
	.submit-message { margin-top: 0.5em; height: 1.5em;
		.kr { font-size: 0.9rem; }
		.en { font-size: 1.1rem; }
		p.success { color: $green-1; }
		p.error { color: $red-1; }
	}
	.accordion-container { margin-top: 2em; display: flex; flex-direction: column; align-items: center; }
</style>
