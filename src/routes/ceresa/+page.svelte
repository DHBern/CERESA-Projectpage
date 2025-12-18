<script>
	import { m } from '$lib/paraglide/messages';
	import { base } from '$app/paths';
</script>

<h1 class="h1">Alice Ceresa</h1>
<div class="gap-10 lg:grid lg:columns-2">
	<div class="col-start-1">{@html m.ceresa_text()}</div>
	<figure class="col-start-2 my-15">
		<img
			src={`${base}/images/ceresa-autoritratto-transparent.webp`}
			alt=""
			class="mx-auto max-w-100"
		/>
		<figcaption class="text-md text-center">{m.bald_tame_sawfish_dig()}</figcaption>
	</figure>
</div>
