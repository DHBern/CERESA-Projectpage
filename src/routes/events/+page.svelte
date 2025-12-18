<script>
	import { m } from '$lib/paraglide/messages';
</script>

<h1 class="h1">Attività</h1>

<ul class="eventlist">
	<li class="mb-15">
		<span class="date">{m.noble_game_jannes_dig()}</span><br />
		<span class="title">{m.helpful_clear_gopher_cure()}</span><br />
		{m.UZH()}
	</li>
</ul>

<h2 class="h2">{m.solid_flaky_shrimp_intend()}</h2>
<ul class="eventlist">
	<li class="mb-15">
		<span class="date">{m.aware_key_wallaby_walk()}</span><br />
		<span class="title">{m.orange_swift_hyena_trim()}</span><br />
		Workshop<br />
	</li>

	<li class="mb-15">
		<span class="date">{m.drab_fluffy_iguana_borrow()}</span><br />
		<span class="title">{@html m.extra_weary_ladybug_promise()}</span><br />
		<span class="person">Eleonora Norcini, Eva Vanacore</span><br />
		Digital Editions Community Meeting, Zentrum Digitale Editionen<br />
		{m.UZH()}
	</li>

	<li class="mb-15">
		<span class="date">{m.mean_lost_puffin_savor()}</span><br />
		<span class="title">Gender e genere negli inediti di Alice Ceresa</span><br />
		<span class="person">Eva Vanacore</span><br />
		{@html m.mean_short_goat_coax()}<br />
		{m.uni_siviglia()}
	</li>
</ul>

<style>
	@reference "tailwindcss";
	.eventlist :global(.title) {
		@apply text-2xl font-bold;
	}

	.eventlist :global(.date) {
		@apply font-bold;
	}
	.eventlist :global(.person) {
		@apply font-bold;
	}
</style>
