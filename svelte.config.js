import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/**
 * Repo name is automatically derived from:
 *   owner/repo
 * Example:
 *   "myuser/CERESA-Projectpage" → "CERESA-Projectpage"
 */
const repo =
	process.env.GITHUB_REPOSITORY?.split('/')[1] ?? '';

/**
 * Deployment mode:
 *   USE_REPO_BASE = 'true'  → site served at '/<repo>'
 *   USE_REPO_BASE = 'false' → site served at '/'
 *
 * Default is root ('') for:
 *   - local dev
 *   - custom domain deployments
 */
const base =
	process.env.USE_REPO_BASE === 'true' && repo
		? `/${repo}`
		: '';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess(),

	kit: {
		adapter: adapter({
			pages: 'build',
			assets: 'build',
			fallback: '404.html'
		}),
		paths: {
			base
		}
	}
};

export default config;
