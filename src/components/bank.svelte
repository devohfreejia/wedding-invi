<script lang="ts">
	import { localeStore } from '../i18n.svelte';

	let groomAccount = {
		name: "",
		bank: "기업은행",
		number: "362-065637-01-010"
	};

	let brideAccount = {
		name: "",
		bank: "대구은행",
		number: "033-13-093796"
	};

	let showToast = false;
	let toastMessage = "";

	const copyToClipboard = async (text: string) => {
		try {
			await navigator.clipboard.writeText(text);
			toastMessage = "복사되었습니다!";
			showToast = true;
			setTimeout(() => showToast = false, 2000);
		} catch (err) {
			toastMessage = "복사 실패 😢";
			showToast = true;
			setTimeout(() => showToast = false, 2000);
		}
	};
</script>

{#if showToast}
	<div class="toast">
		{toastMessage}
	</div>
{/if}

<section class="bank-info kr" style="background-color:#EEECDD">
	<h2 class="section-title">마음 전하실 곳</h2>

	<div class="account kr">
		<p><strong>김재수</strong></p>
		<p>{groomAccount.bank} {groomAccount.number}</p>
		<button on:click={() => copyToClipboard(groomAccount.number)}>복사하기</button>
	</div>

	<div class="account kr">
		<p><strong>최은숙</strong></p>
		<p>{brideAccount.bank} {brideAccount.number}</p>
		<button on:click={() => copyToClipboard(brideAccount.number)}>복사하기</button>
	</div>
</section>

<style lang="scss">


.toast {
	position: fixed;
	top: 1.5rem;
	left: 50%;
	transform: translateX(-50%);
	background: #333;
	color: white;
	padding: 0.8rem 1.2rem;
	border-radius: 0.5rem;
	box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
	z-index: 999;
	animation: fadeInOut 2s ease forwards;
	font-size: 0.95rem;
}

@keyframes fadeInOut {
	0% {
		opacity: 0;
		transform: translateX(-50%) translateY(-10px);
	}
	10% {
		opacity: 1;
		transform: translateX(-50%) translateY(0);
	}
	90% {
		opacity: 1;
		transform: translateX(-50%) translateY(0);
	}
	100% {
		opacity: 0;
		transform: translateX(-50%) translateY(-10px);
	}
}

.kr {
	font-family: 'Noto Serif KR', serif;
	font-display: block;
	color: $font-color-default;
	word-break: keep-all;
}

.bank-info {
	padding: 2em;
	background: #ffffff;
	border-radius: 1em;
	margin: 2em 1em;
	max-width:600px;
	margin: 0 auto;

	.section-title {
		text-align: center;
		margin-bottom: 1em;
		font-size: 1.4em;
		color : #115830;
		text-align: center;
		@extend .title-font-kr;
		letter-spacing: 1px;
	}

	

	.account {
		background: #ffffff;
		padding: 1em;
		margin-bottom: 1em;
		border-radius: 0.5em;
		box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);

		p {
			margin: 0.2em 0;
			font-size: 1em;
			color: #2A2A2A;
		}

		button {
			margin-top: 0.5em;
			background: #115830;
			color: #ffffff;
			border: none;
			padding: 0.5em 1em;
			border-radius: 0.4em;
			cursor: pointer;
			font-size: 0.9em;
			transition: background 0.3s ease;

			&:hover {
				background:rgb(12, 61, 33);
			}
		}
	}
}
</style>
