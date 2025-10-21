<script lang="ts">
	import { base } from '$app/paths';
	import { getLocale, setLocale } from '$lib/paraglide/runtime';
	import '../app.css';
	let { children } = $props();
</script>

<div class="bg-surface-50-950 flex w-full flex-col">
	<div class="bg-surface-50-950 flex items-center justify-start gap-10 border-b-2 py-2">
		<a href={`${base}/.`}
			><img class="h-[40px]" src="/images/ceresa-firma.webp" alt="Signatura di Alice Ceresa" /></a
		>
		<nav>
			<ul class="flex gap-10">
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
			}}>{getLocale() === 'it' ? 'Italiano' : 'English'}</button
		>
	</div>
	<div class="grow p-10">
		{@render children?.()}
	</div>
	<div class="bg-primary-200"></div>
</div>
