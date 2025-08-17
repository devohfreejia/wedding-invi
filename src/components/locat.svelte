<script lang="ts">
	import { onMount } from 'svelte';

	onMount(() => {
		const script = document.createElement('script');
		script.src = '//dapi.kakao.com/v2/maps/sdk.js?appkey=c2f4150ab2151cceffcbf8e3fd1e3b57&autoload=false';
		script.onload = () => {
			const kakao = (window as any).kakao;
			kakao.maps.load(() => {
				const container = document.getElementById('map');
				const options = {
					center: new kakao.maps.LatLng(35.84769859989874, 128.6256593486731),
					level: 3,
				};

				const map = new kakao.maps.Map(container, options);

				const markerPosition = new kakao.maps.LatLng(35.84769859989874, 128.6256593486731);
				const marker = new kakao.maps.Marker({ position: markerPosition });
				marker.setMap(map);

				const infowindow = new kakao.maps.InfoWindow({
					content: `<div style="padding:5px; font-size:13px;">아현정 웨딩홀</div>`,
				});
				

				kakao.maps.event.addListener(marker, 'click', () => {
					const url = 'https://map.kakao.com/?urlX=866017&urlY=653792&urlLevel=5&map_type=TYPE_MAP&map_hybrid=false'; // 여기에 원하는 외부 사이트 URL
					window.open(url, '_blank'); // _blank → 새 탭(새 창)에서 열림
				});
			});
		};
		document.head.appendChild(script);
	});
</script>

<div class="map-wrapper kr">
	<br/><br/>
	<h2 class="map-title" style="margin-block-end:1px;color:#115830">결혼식장 위치</h2>
	<p style="padding-block-end:5px;color:#2A2A2A;">대구 수성구 동대구로 194-7 아현정</p>
	<div id="map"></div>

	<div class="map-info">
		<section>
			<h3>지하철 안내</h3>
			<p>어린이세상역 3호선 1번 출구 도보 8분</p>
		</section>

		<section>
			<h3>버스 안내</h3>
			<p>어린이세상앞 (00015) 64m</p>
			<p>간선 100, 234, 814, 8140</p>
		</section>

		<section>
			<h3>주차 안내</h3>
			<p>어린이세상 공영주차장 (2시간 무료주차)</p>
		</section>
	</div>
</div>

<style lang="scss">
	.kr {
	font-family: 'Noto Serif KR', serif;
	font-display: block;
	color: $font-color-default;
	word-break: keep-all;
	}

	.map-wrapper {
		background-color: #EEECDD;
		display: flex;
		flex-direction: column;
		align-items: center;
		max-width: 900px;
		margin: 0 auto;
	}

	.map-wrapper p {
		text-align: center;
		margin: 0.3rem 0;
	}

	.map-title {
		margin: 0 0 1rem 0;
		text-align: center;
		margin-bottom: 1em;
		font-size: 1.4em;
		color : #115830;
		text-align: center;
		@extend .title-font-kr;
		letter-spacing: 1px;
	}

	#map {
		width: 100%;
		max-width: 600px;
		height: 300px;
		border-radius: 12px;
		margin-bottom: 1rem;
	}

	.map-info {
		width: 100%;
		max-width: 800px;
		color: #333;
		font-size: 0.9rem;
		line-height: 1.4;
	}

	.map-info p {
		text-align: center;
		margin: 0.3rem 0;
	}

	.map-info section {
		text-align: center;
		margin-top: 0.8rem;
	}

	.map-info section h3 {
		text-align: center;
		margin: 0.4rem 0 0.3rem;
		font-weight: 600;
		font-size: 1.1rem;
		color: #115830; /* 포인트 컬러 */
		
	}
</style>
