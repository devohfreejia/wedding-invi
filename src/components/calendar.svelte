<script lang="ts">
	import sundayCol from '$lib/assets/calendar/calendar-sunday.svg';
	import mondayCol from '$lib/assets/calendar/calendar-monday.svg';
	import tuesdayCol from '$lib/assets/calendar/calendar-tuesday.svg';
	import wednesdayCol from '$lib/assets/calendar/calendar-wednesday.svg';
	import thursdayCol from '$lib/assets/calendar/calendar-thursday.svg';
	import fridayCol from '$lib/assets/calendar/calendar-friday.svg';
	import saturdayCol from '$lib/assets/calendar/calendar-saturday.svg';
	import calendarDeco from '$lib/assets/gallery/calendar.webp';
</script>

<section class="calendar">
	<img src={calendarDeco} alt="결혼식 일정" class="calendar-image" />
</section>

<style>
  .calendar-image {
    width: 100%;
    max-width: 500px;
    display: block;
    margin: 0 auto;
  }
</style>
