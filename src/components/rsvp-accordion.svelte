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
	<p>Q1.첫 만남</p>
	<p>🐙지아 : 같은 교육 프로그램을 이수하고, 도쿄에서 일하고 있는 사람들이 모인 식사 자리에서 처음 만났습니다. 첫인상은 맥주를 물처럼 마시는 사람...★ 개인적으로 이야기를 나누게 된건 그로부터 1년 뒤였습니다. </p>
	<br>
	<p>Q2.결혼을 결심하게 된 계기는?</p>
	<p>⚡원진 : 귀여운 것은 평생 간다고 생각하는데, 신부는 정말 귀엽다. 빈말이 아니고 귀여운 것이 최고. 그리고 항상 나를 사랑해주는 것이 모든 상황에서 느껴지기 때문에 평생을 같이하고 싶다.</p>
	<p>🐙지아 : 특별한 계기는 없었습니다. 특별하지 않은 매일도, 별거 아닌 이야기도 언제나 나눌 수 있는 사람이라 평생 함께 하고싶다고 생각했습니다.</p>
	<br>
	<p>Q3.결혼 후 바라는 점</p>
	<p>⚡원진 : 아무쪼록 건강했으면 좋겠고, 함께하는 모든 시간이 행복과 긍정이 가득한 삶이 되기를 바랍니다.</p>
	<p>🐙지아 : 지금처럼만 지내고 싶다? 각자 할일에 최선을 다하고 함께 하루를 마무리 하는 매일을 가능한 오~래 지속할 수 있었으면 합니다. (최소 35년)</p>
	<br>
	<p>Q4.신부가 힘들 때 내가 꼭 해줄 한 가지는?</p>
	<p>⚡원진 : 주말에 늦잠 자면 그냥 깨우지 않고 맛있는 음식 냄새로 깨워서 바로 멕이는 것.</p>
	<p>🐙지아 : 오늘도 더블치즈버거 냄새를 맡으며 일어났습니다.</p>
	<br>
	<p>Q5.신혼 여행은?</p>
	<p>🏃‍♂️🏃‍♀️ : 파리 10km 마라톤을 신청하였습니다~! 신나게 뛰고올게요 :)</p>
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
