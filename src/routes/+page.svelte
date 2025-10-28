<script>
	import { m } from '$lib/paraglide/messages';
	import { base } from '$app/paths';
</script>

{@html m.home()}

<img
	class="my-1 h-120"
	src={`${base}/images/ceresa-ufficio.webp`}
	alt="Alice Ceresa nel suo studio"
/>
<p class="text-xs">{m.even_stale_liger_read()}</p>
