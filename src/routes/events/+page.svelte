<script>
	import { m } from '$lib/paraglide/messages';
</script>

<h1 class="h1">{m.sea_misty_snail_hunt()}</h1>
<ul class="eventlist">

</ul>

<h2 class="h2">{m.solid_flaky_shrimp_intend()}</h2>
<ul class="eventlist">
	<li class="mb-15">
		<span class="date">{m.true_acidic_gecko_dart()}</span><br />
		<span class="title">Alice Ceresa and Gerold Späth: Translation in Dialogue</span><br />
		<span class="person">Luise Pappe</span><br />
		Workshop Dialogue, Polyphony, and Exchange in World Literatures<br />
		{m.weary_white_platypus_wish()}
	</li>

	<li class="mb-15">	
		<span class="date">{m.noble_game_jannes_dig()}</span><br />
		<span class="title">Workshop Named Entities in Digital Editions: Between Structured Databases and Context-Specific Annotation</span><br />
		{m.UZH()}<br />
		<a href="https://www.zde.uzh.ch/de/openeditions/entities.html" target="_blank" rel="noopener noreferrer">https://www.zde.uzh.ch/de/openeditions/entities.html</a>
	</li>

	<li class="mb-15">
		<span class="date">{m.sound_soft_gazelle_splash()}</span><br />
		<span class="title">{m.solid_ideal_skunk_enrich()}</span><br />
		<span class="person">Eleonora Norcini</span><br />
		{m.loose_broad_bulldog_fear()}<br />
		{m.honest_white_sloth_urge()}
	</li>

	<li class="mb-15">
		<span class="date">{m.aware_key_wallaby_walk()}</span><br />
		<span class="title">{m.orange_swift_hyena_trim()}</span><br />
		{m.warm_bland_pony_flop()}<br />
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
	@reference "@skeletonlabs/skeleton";

	/* .eventlist {
		@apply text-surface-950-50;
	} */
	.eventlist :global(.title) {
		@apply text-2xl font-bold italic;
	}

	.eventlist :global(.date) {
		@apply font-bold;
	}
	.eventlist :global(.person) {
		@apply font-bold;
	}
</style>
