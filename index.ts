import _splitbee from '@splitbee/web';

import type { Plugin, ResolvedConfig } from 'vite';

export interface SplitbeeOptions {
	/// Provide a custom API url to use instead of the default Splitbee one (Optional) [Default: 'https://hive.splitbee.io']
	api_url?: string;

	/// When using A/B testing, you can prevent the initial content flash by making the script blocking/synchronous (Optional) [Default: false]
	async?: boolean;

	/// Whether to include Splitbee analytics during local development (Optional) [Default: false]
	dev?: boolean;

	/// Whether to enable cookie-less mode (Optional) [Default: false]
	disable_cookie?: boolean;

	/// To use Splitbee on another subdomain you can provide a project token. This can be found in project settings (Optional)
	token?: string;

	/// URL to Splitbee script to load (Optional) [Default: 'https://cdn.splitbee.io/sb.js']
	url?: string;
};

export const API_URL = 'https://hive.splitbee.io';

export const SCRIPT_URL = 'https://cdn.splitbee.io/sb.js';

export const Splitbee = (options: SplitbeeOptions = {}): Plugin => {
	const {
		api_url = API_URL,
		async = true,
		dev = false,
		disable_cookie = false,
		url = SCRIPT_URL,
	} = options;

	let viteConfig: ResolvedConfig | undefined;

	return {
		name: 'vite-plugin-splitbee',
		enforce: 'post',
		configResolved(config) {
			viteConfig = config;
		},
		transformIndexHtml(html: string) {
			if (!viteConfig?.isProduction && !dev) return html;

			const script = document.createElement('script');
			script.src = url;
			script.async = async;

			if (api_url) script.dataset.api = api_url;
			if (disable_cookie) script.dataset.noCookie = '1';
			if (options.token) script.dataset.token = options.token;

			// Inject the Splitbee script at the end of the `<head>`
			return html.replace(
				'</head>',
				`${script.outerHTML}</head>`,
			);
		},
	}
};

export const splitbee = _splitbee;

export default Splitbee;
