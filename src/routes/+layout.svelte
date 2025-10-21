<script lang="ts">
	import { base } from '$app/paths';
	import { getLocale, setLocale } from '$lib/paraglide/runtime';
	import '../app.css';
	let { children } = $props();
</script>

<div class="flex min-h-screen w-full flex-col bg-surface-50-950">
	<div class="flex items-center justify-between gap-10 border-b-2 bg-surface-50-950 p-4 px-10">
		<a href={`${base}/.`}
			><img
				class="aspect-auto max-h-[40px] min-w-25"
				src="/images/ceresa-firma.webp"
				alt="Signatura di Alice Ceresa"
			/></a
		>
		<nav>
			<ul class="flex flex-wrap gap-x-10 gap-y-4">
				<li><a href={`${base}/ceresa`}>Alice Ceresa</a></li>
				<li><a href={`${base}/edition`}>Edizione Digitale</a></li>
				<li><a href={`${base}/events`}>Attività</a></li>
				<li><a href={`${base}/project`}>Progetto</a></li>
				<li><a href={`${base}/publications`}>Pubblicazioni</a></li>
				<li><a href={`${base}/team`}>Team</a></li>
			</ul>
		</nav>
		<button
			class="font-bold"
			onclick={() => {
				getLocale() === 'it' ? setLocale('en') : setLocale('it');
			}}>{getLocale() === 'it' ? 'English' : 'Italiano'}</button
		>
	</div>
	<div class="mx-auto max-w-300 grow p-10 py-20">
		{@render children?.()}
	</div>
	<div class="min-h-30 bg-surface-600-400 p-10">
		<img class="h-20" src="/images/ceresa-firma.webp" alt="Signatura di Alice Ceresa" />
	</div>
</div>
