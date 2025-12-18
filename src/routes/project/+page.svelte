<script>
	import { m } from '$lib/paraglide/messages';
	import { base } from '$app/paths';

	import { ChevronDownIcon } from '@lucide/svelte';
	import { Accordion } from '@skeletonlabs/skeleton-svelte';
</script>

<h1 class="h1">{m.drab_aware_grizzly_inspire()}</h1>
<h2 class="h2">{m.mellow_stock_bobcat_clap()}</h2>

{@html m.project_description_text()}
<figure class="my-15">
	<img
		class="my-1 h-120"
		src={`${base}/images/ceresa-cane.webp`}
		alt={m.weak_arable_skate_clip()}
	/>
	<figcaption class="text-md">{m.same_loose_orangutan_rest()}</figcaption>
</figure>

<!-- <h3 id="cooperazioni" class="h3">{@html m.project_cooperation_title()}</h3>
<h4 class="h4">{@html m.dsl_title()}</h4>
{@html m.dsl_text()}

<h4 class="h4">{@html m.asl_title()}</h4>

{@html m.asl_text()} -->
