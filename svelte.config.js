import { mdsvex } from "mdsvex";
import adapter from "@sveltejs/adapter-static";

/** @type {import('@sveltejs/kit').Config} */
//const dev = process.argv.includes('dev');

const config = {
    kit: {
		// adapter-auto only supports some environments, see https://svelte.dev/docs/kit/adapter-auto for a list.
		// If your environment is not supported, or you settled on a specific environment, switch out the adapter.
		// See https://svelte.dev/docs/kit/adapters for more information about adapters.
		adapter: adapter(),
		paths: {
			//base: dev ? '' : '/sv-site',
			base: '/sv-site'
		}
	},

    preprocess: [mdsvex({
						  extensions: [".md"],
						  layout: {
									blog: 'src/routes/blog/post.svelte'
						  }
				 })],
    extensions: [".svelte", ".md"]
};

export default config;