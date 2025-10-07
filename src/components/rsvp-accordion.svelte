<script lang="ts">
	import { Accordion, type AccordionItem } from 'melt/builders';
	import { _ } from 'svelte-i18n';
	import { localeStore } from '../i18n.svelte';
	import { slide } from 'svelte/transition';
	import { ChevronDown } from '@lucide/svelte';
	import { type Snippet } from 'svelte';

	type Item = AccordionItem<{
		title: string;
	}>;
	
	const items: Item[] = [
		{ id: '1', title: $_('rsvp.accordion.dress_code') },
		{ id: '2', title: $_('rsvp.accordion.the_menu') }
	];

	const accordion = new Accordion({
		multiple: true
	});

	const dressCodeItem = accordion.getItem(items[0]);
	const menuItem = accordion.getItem(items[1]);
</script>

{#snippet accordionItem(item: ReturnType<Accordion['getItem']>, content: Snippet)}
	<div class="item">
		<div {...item.heading} class="heading">
			<button {...item.trigger} class="trigger {localeStore.locale}">
				{item.item.title}
			</button>
			<div class="chevron-down-container {localeStore.locale}" class:rotate={item.isExpanded}>
				<ChevronDown strokeWidth={1.25} />
			</div>
		</div>

		{#if item.isExpanded}
			<div
				{...item.content}
				class="content {localeStore.locale}"
				transition:slide={{ duration: 350 }}
			>
				{@render content()}
			</div>
		{/if}
	</div>
{/snippet}

{#snippet dressCodeContent()}
	<p>Q1-1.첫 만남(with.준수)</p>
	<p>🌼지아 : 준수랑은 대학교 1학년 1학기때 친해졌던 기억이 납니다. 교수님과의 식자자리에서 집에 가서 치킨을 먹어야해서 지금 밥을 많이 먹으면 안된다고 말했던게 아직도 기억에 나요. 진짜 특이하면서 거짓없는 깨끗한(?) 사람이라는 생각이 들어 친해지려고 노력을 했던거 같아요.</p>
	<br>
	<p>Q1-2.첫 만남(with.다혜)</p>
	<p>🌼지아 : 다혜에 대한 첫 기억은 1학년 1학기 답사때입니다. 태양의 후예의 김지원 역할을 연기했던 모습이 인상적이었어요(눈물을 글썽였습니다...) 친해지게 된건 1학년 2학기였던 것 같아요. 시네필을 함께 하면서, 팀플을 함께 하면서 많이 가까워졌네요. 이렇게 보니 우리가 가까워질 수 있었던건 어쩐지 영상 콘텐츠 덕분이네요.</p>
	<br>
	<p>Q2.기억에 남는일</p>
	<p>🌼지아 : 8년이라는 시간동안 정말 많은 추억을 쌓아서 하나만 고르기 어렵습니다. 써글을 함께 했던것도 기억에 남고, 처음으로 같이 도쿄 여행을 했던 것도 기억에 남고, 김해에서 보낸 1박 2일의 시간도 기억이 나고... 쓰기 시작하면 한도 끝도 없을 것 같아요. 가장 처음 생각나는걸 꼽는다면, 어쩐지 포항으로 떠났던 2박 3일의 여행이 기억에 남습니다! 국내에서 처음이자 마지막으로 가장 길게 여행했던 것 같은데, 올해에는 제주도에서 3박을 했으니 포항을 이겼네요. 다혜가 제주도에 있을때, 내년에 한번 더 제주도를 함께 여행할 수 있었으면 해요.</p>
	<br>
	<p>Q3.친구들에게 미안했던 일</p>
	<p>🌼지아 : 이것도 말하기 시작하면 끝이 없네요. 우선 청첩장이 늦어져서 미안합니다. 마음만 앞서고 행동이 따라오질 못해, 초대가 아주 많이 늦어버렸어요. 정말 너무 착하디 착한 친구들이여서 항상 미안한 마음이 있습니다. 준수와는 먼저 연을 놓으려고 했던 기억이 있어 평생에 걸쳐 미안할 것 같지만, 앞으로 함께 하면서 계속 갚아나갈 생각입니다. 다혜에게는 세심함이 부족한점과 연락을 자주 하지 못하는게 가장 미안합니다. 가볍게 자주 안부를 주고받고 싶은데, 가까운 사람에게 오히려 그러지 못했다는걸 최근 많이 깨닫고 있어요. 함께 할 남은 시간(50년정도..)동안은 이런 부분들을 개선해서, 더 좋은 마음으로 오래 볼 수 있었으면 합니다.</p>
	<br>
	<p>Q4.하고싶은 말</p>
	<p>🌼지아 : 20대의 모든 순간에 친구들이 있었다는걸 압니다. 친구들의 애정과 기다림이 있었기 때문에 지금 저의 모습이 있는거라고 생각해요. 말로 다하지 못할만큼 고맙고, 이 마음을 말이든 행동이든 계속 표현해나갈게요. 친구들아 진짜 진짜 고마워.</p>
{/snippet}

{#snippet menuContent()}
	<p class="menu-title">{$_('rsvp.accordion.menu_title')}</p>
	<p class="beef">{$_('rsvp.accordion.beef')}</p>
	<p>&</p>
	<p class="fish">{$_('rsvp.accordion.fish')}</p>
	<p class="vegetarian">
		{$_('rsvp.accordion.vegetarian')}
	</p>
{/snippet}

<div class="accordion-root" {...accordion.root}>
	{@render accordionItem(dressCodeItem, dressCodeContent)}
	
</div>

<style lang="scss">
	.accordion-root {
		width: 100%;
	}

	.item {
		margin-bottom: 1em;
	}

	.heading {
		border-top: 1px solid $primary-color-light;
		position: relative;
	}

	button.trigger {
		color: $primary-color;
		width: 100%;

		&.en {
			letter-spacing: 1px;
			font-weight: 600;
			font-size: 1.3rem;
			padding: 0.6em 0;
		}

		&.kr {
			letter-spacing: 1px;
			font-weight: 500;
			font-size: 1.1rem;
			padding: 0.8em 0;
		}
	}

	.chevron-down-container {
		position: absolute;
		width: 1.5em;
		height: 1.5em;
		right: 0.6em;
		color: $primary-color;
		transition: transform 350ms ease;

		&.en {
			top: 1.05em;
		}

		&.kr {
			top: 0.9em;
		}

		&.rotate {
			transform: rotate(180deg);
		}
	}

	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		padding: 0.5em 0.5em 1em 0.5em;

		p {
			text-align: center;
		}

		&.en p {
			font-size: 1.1rem;

			&.semi-formal {
				margin-bottom: 0.5em;
			}

			&.menu-title {
				margin-bottom: 1em;
			}

			&.beef,
			&.fish {
				font-weight: 700;
			}

			&.vegetarian {
				margin-top: 1em;
			}
		}

		&.kr p {
			font-size: 0.9rem;

			&:not(:last-child) {
				margin-bottom: 0.5em;
			}

			&.semi-formal,
			&.menu-title {
				margin-bottom: 1.5em;
			}

			&.beef,
			&.fish {
				font-weight: 600;
			}

			&.vegetarian {
				margin-top: 1.5em;
			}
		}
	}
</style>
