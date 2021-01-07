import type { Plugin, ResolvedConfig } from 'vite';

export interface SplitbeeOptions {
	/// Whether to include Splitbee analytics during local development (Optional) [Default: false]
	enable_development: boolean;
	/// Number of milliseconds to wait before loading the Splitbee (Optional) [Default: 0]
	delay_timeout: number;
};

export const ViteSplitbee = (options?: SplitbeeOptions): Plugin => {
	const enable_development = !!(options?.enable_development);
	const script_src: string = `(function(){var w=window;var sb=w.splitbee;var d=document;var i=function(){i.c(arguments)};i.q=[];i.c=function(args){i.q.push(args)};w.Splitbee=i;function l(){var s=d.createElement('script');s.type='text/javascript';s.async=true;s.src='https://cdn.splitbee.io/sb.js';var x=d.getElementsByTagName('script')[0];x.parentNode.insertBefore(s,x);}function ld(){setTimeout(l, ${options?.delay_timeout || 0});}if(w.attachEvent){w.attachEvent('onload',ld);}else{w.addEventListener('load',ld,false);}})()`;

	let viteConfig: ResolvedConfig | undefined;

	return {
		name: 'vite-plugin-splitbee',
		configResolved(config) {
			viteConfig = config;
		},
		transformIndexHtml: {
			enforce: 'post',
			transform(html: any) {
				if (!viteConfig?.isProduction && !enable_development) return html;

				// Inject the Splitbee script at the end of the `<head>`
				return html.replace(
					'</head>',
					`<script>${script_src}</script></head>`,
				);
			},
		},
	}
};

export default ViteSplitbee;
