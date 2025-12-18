<script lang="ts">
	import { base } from '$app/paths';
	import { getLocale, setLocale } from '$lib/paraglide/runtime';
	import '../app.css';
	let { children } = $props();
	import { m } from '$lib/paraglide/messages';
	import { AppBar, Menu, Dialog, Portal } from '@skeletonlabs/skeleton-svelte';
	import { Menu as Hamburger, X } from '@lucide/svelte';
	import { page } from '$app/state';

	let openStateMenu = $state(false);
</script>

<!-- Menu -->
<AppBar
	class="flex items-center justify-between gap-10 bg-surface-700 p-2 px-10 py-0 text-xl text-surface-200"
>
	<AppBar.Toolbar class="flex">
		<!-- Logo / Home -->
		<AppBar.Lead class="m-0 flex items-center p-0">
			<!-- <a href={`${base}/.`}
			><img
				class="aspect-auto max-h-[40px] min-w-25"
				src={`${base}/images/ceresa-signature-inv.webp`}
				alt="Signatura di Alice Ceresa"
			/></a
		> -->
		</AppBar.Lead>

		<!-- Top Navigation Bar -->
		<AppBar.Headline class="m-0 w-full">
			<nav class="">
				<ul
					class="my-8{m.north_glad_slug_learn()} hidden w-full items-start gap-x-12 gap-y-6 text-xl text-surface-50 lg:flex lg:flex-wrap lg:justify-between"
				>
					{#snippet menuItemTopDropdown(name, contents)}
						<li
							class={[
								'list-nav-item inline-block h-full',
								'cooperations' === `/${page.url.pathname.split('/').pop()}` ||
								'project' === `/${page.url.pathname.split('/').pop()}`
									? 'text-secondary-300 underline'
									: ''
							]}
						>
							<Menu>
								<Menu.Trigger
									class="list-nav-item inline-block h-full decoration-secondary-300 decoration-6 hover:underline"
									>{name}</Menu.Trigger
								>
								<Portal>
									<Menu.Positioner>
										<Menu.Content
											class="mt-1 rounded-none border-0 bg-secondary-50 p-0 py-2 text-xl"
										>
											{#each contents as content, idx}
												<a href={content.slug}>
													<Menu.Item value={`i_${idx}`} class="px-4">
														<Menu.ItemText>{@html content.name}</Menu.ItemText>
													</Menu.Item>
												</a>
											{/each}
										</Menu.Content>
									</Menu.Positioner>
								</Portal>
							</Menu>
						</li>
					{/snippet}
					{#snippet menuItemTopH1(name, slug)}
						<li
							class={[
								'list-nav-item inline-block h-full decoration-secondary-300 decoration-6 hover:underline',
								slug === `/${page.url.pathname.split('/').pop()}`
									? 'underline decoration-secondary-300'
									: ''
							]}
						>
							<a href={slug}>{@html name}</a>
						</li>
					{/snippet}
					{@render menuItemTopH1('Home', `${base}/`)}
					{@render menuItemTopDropdown(m.fresh_sad_lemur_achieve(), [
						{ name: 'Arcipelago Ceresa', slug: `${base}/project` },
						{ name: m.north_glad_slug_learn(), slug: `${base}/cooperations` }
					])}
					{@render menuItemTopH1(`${m.fresh_sad_lemur_achieve()}_2`, `${base}/project2`)}
					{@render menuItemTopH1(m.aqua_simple_hyena_snip(), `${base}/edition`)}
					{@render menuItemTopH1('Alice Ceresa', `${base}/ceresa`)}
					{@render menuItemTopH1('Team', `${base}/team`)}
					{@render menuItemTopH1(m.white_grand_falcon_belong(), `${base}/events`)}
					{@render menuItemTopH1(m.bold_zany_donkey_view(), `${base}/publications`)}
					<div class="grow"></div>
					<button
						class="font-bold hover:text-secondary-300"
						onclick={() => {
							getLocale() === 'it' ? setLocale('en') : setLocale('it');
						}}>{getLocale() === 'it' ? 'English' : 'Italiano'}</button
					>
				</ul>
			</nav>
		</AppBar.Headline>

		<!-- Spacer -->
		<div class="flex-grow"></div>

		<!-- Menu for Smartphone -->
		<AppBar.Trail class="mr-4 h-20">
			<!-- Trigger aligned right on small screens -->
			<div class="flex w-full justify-end lg:hidden">
				<Dialog open={openStateMenu} onOpenChange={(e) => (openStateMenu = e.open)}>
					<Dialog.Trigger
						class="ml-4 inline-flex items-center justify-center rounded p-2 text-surface-50 hover:bg-white/10"
					>
						<Hamburger class="text-surface-50" width="40" height="40" />
					</Dialog.Trigger>

					<Portal>
						<Dialog.Backdrop class="fixed inset-0 z-50 bg-black/50" />
						<Dialog.Positioner class="fixed inset-0 z-50">
							<Dialog.Content
								class="relative h-full w-full overflow-auto bg-surface-700 p-3 text-surface-50"
							>
								<!-- Top bar with title and close in top-right -->
								<div class="flex items-center justify-between">
									<Dialog.Title class="text-lg font-semibold">Menu</Dialog.Title>

									<div class="flex">
										<button
											class="font-bold"
											onclick={() => {
												getLocale() === 'it' ? setLocale('en') : setLocale('it');
											}}>{getLocale() === 'it' ? 'English' : 'Italiano'}</button
										>
										<!-- Close button top-right -->
										<Dialog.CloseTrigger
											class="ml-4 inline-flex items-center justify-center rounded p-2 text-surface-50 hover:bg-white/10"
											aria-label="Close menu"
										>
											<X width="40" height="40" />
										</Dialog.CloseTrigger>
									</div>
								</div>

								<!-- Nav content full height -->
								<nav class="mt-6">
									<ul class="flex flex-col gap-1">
										{#snippet menuItemSmallH1(name, slug, type = 'H1')}
											<li class={['m-2!']}>
												<a
													href={slug}
													onclick={() => {
														openStateMenu = false; // close Menu
													}}
													class={['block px-2 py-1 text-lg', type === 'H2' && 'ml-8']}
												>
													{@html name}
												</a>
											</li>
										{/snippet}

										{@render menuItemSmallH1('Home', `${base}/`)}
										{@render menuItemSmallH1(m.fresh_sad_lemur_achieve(), `${base}/project2`)}
										{@render menuItemSmallH1('Arcipelago Ceresa', `${base}/project`, 'H2')}
										{@render menuItemSmallH1(
											m.north_glad_slug_learn(),
											`${base}/cooperations`,
											'H2'
										)}
										{@render menuItemSmallH1(m.aqua_simple_hyena_snip(), `${base}/edition`)}
										{@render menuItemSmallH1('Alice Ceresa', `${base}/ceresa`)}
										{@render menuItemSmallH1('Team', `${base}/team`)}
										{@render menuItemSmallH1(m.white_grand_falcon_belong(), `${base}/events`)}
										{@render menuItemSmallH1(m.bold_zany_donkey_view(), `${base}/publications`)}
									</ul>
								</nav>
							</Dialog.Content>
						</Dialog.Positioner>
					</Portal>
				</Dialog>
			</div>
		</AppBar.Trail>
	</AppBar.Toolbar>
</AppBar>
<div class="mx-auto min-h-[90vh] w-full max-w-300 grow p-10 py-20">
	{@render children?.()}
</div>
<div class="flex min-h-30 w-full flex-wrap gap-10 bg-surface-700 p-10">
	<img
		class="mx-auto h-20"
		src={`${base}/images/ceresa-signature-inv.webp`}
		alt="Signatura di Alice Ceresa"
	/>
</div>
<div class="min-h-30 gap-10 bg-surface-700 p-10">
	<div class="mx-auto w-full lg:max-w-6/10">
		<p class="text-center text-surface-300">{m.green_moving_snake_gaze()}:</p>
		<div class="mt-20 flex flex-wrap justify-around gap-10">
			<div class="">
				<img
					class="mx-auto h-20"
					src={`${base}/images/logo-unibe.webp`}
					alt="Logo Universität Bern"
				/>
			</div>
			<div class="">
				<img
					class="mx-auto h-20"
					src={`${base}/images/logo-uzh.webp`}
					alt="Logo Universität Zürich"
				/>
			</div>
			<div class="">
				<img class="mx-auto h-20" src={`${base}/images/logo-snf.webp`} alt="Logo SNF" />
			</div>
			<div class="">
				<img
					class="mx-auto h-20"
					src={`${base}/images/logo-ch.webp`}
					alt="Logo Schweizerische Eidgenossenschaft"
				/>
			</div>
		</div>
	</div>
</div>
