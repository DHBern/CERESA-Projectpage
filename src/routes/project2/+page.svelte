<script>
	import { m } from '$lib/paraglide/messages';
	import { base } from '$app/paths';

	import { ChevronDownIcon } from '@lucide/svelte';
	import { Accordion } from '@skeletonlabs/skeleton-svelte';
</script>

<h1 class="h1">{m.drab_aware_grizzly_inspire()}</h1>
<h2 class="h2">{m.mellow_stock_bobcat_clap()}</h2>

<Accordion multiple class="mt-10">
	<Accordion.Item value={1}>
		<h3 class="h3">
			<Accordion.ItemTrigger
				class="flex items-center justify-between gap-2 font-bold  hover:bg-surface-100 hover:text-success-950"
			>
				{@html m.project_title_1()}
				<Accordion.ItemIndicator class="group">
					<ChevronDownIcon class="h-5 w-5 transition group-data-[state=open]:rotate-180" />
				</Accordion.ItemIndicator>
			</Accordion.ItemTrigger>
		</h3>
		<Accordion.ItemContent>
			{@html m.project_description_text()}
		</Accordion.ItemContent>
	</Accordion.Item>
	<hr class="hr" />
	<Accordion.Item value={2}>
		<h3 class="h3">
			<Accordion.ItemTrigger
				class="flex items-center justify-between gap-2 font-bold  hover:bg-surface-100 hover:text-success-950"
			>
				{@html m.project_cooperation_title()}
				<Accordion.ItemIndicator class="group">
					<ChevronDownIcon class="h-5 w-5 transition group-data-[state=open]:rotate-180" />
				</Accordion.ItemIndicator>
			</Accordion.ItemTrigger>
		</h3>
		<Accordion.ItemContent>
			<h4 class="h4">{@html m.dsl_title()}</h4>
			{@html m.dsl_text()}

			<h4 class="h4">{@html m.asl_title()}</h4>

			{@html m.asl_text()}
		</Accordion.ItemContent>
	</Accordion.Item>
</Accordion>

<figure class="my-15">
	<img
		class="my-1 h-120"
		src={`${base}/images/ceresa-cane.webp`}
		alt={m.weak_arable_skate_clip()}
	/>
	<figcaption class="text-md">{m.same_loose_orangutan_rest()}</figcaption>
</figure>
