<script>
	import { m } from '$lib/paraglide/messages';
	import { base } from '$app/paths';
</script>
<div class="lg:absolute lg:left-20 lg:w-6/10">
	<h1 class="text-5xl lg:text-9xl font-bold text-primary-500 w-full">{m.drab_aware_grizzly_inspire()}</h1>
	<h2 class="text-xl lg:text-3xl font-bold text-surface-50 p-4 lg:p-12 lg:max-w-[50vw] bg-secondary-500">{m.mellow_stock_bobcat_clap()}</h2>
</div>
<div class="lg:mt-150 bg-white p-5 lg:p-20 text-lg:text-2xl">
	{@html m.home()}
</div>
<!-- <div class="h-[1300px] block"></div> -->

<figure class="-z-10 lg:fixed top-0 right-0 max-w-[80vw] lg:max-w-[50vw] lg:h-full">
	<img
		class="lg:my-1 h-auto lg:h-full w-full object-cover"
		src={`${base}/images/ceresa-ufficio.webp`}
		alt="Alice Ceresa nel suo studio"
	/>
	<figcaption class="text-md">{m.even_stale_liger_read()}</figcaption>
</figure>
