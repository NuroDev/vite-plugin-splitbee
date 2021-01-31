import type { Plugin, ResolvedConfig } from 'vite';

export interface SplitbeeOptions {
	/// When using A/B testing, you can prevent the initial content flash by making the script blocking/synchronous (Optional) [Default: false]
	async?: boolean;

	/// Whether to include Splitbee analytics during local development (Optional) [Default: false]
	dev?: boolean;
	
	/// Number of milliseconds to wait before loading the Splitbee (Optional) [Default: 0]
	delay_timeout?: number;
};

export const ViteSplitbee = (options: SplitbeeOptions = {}): Plugin => {
	const {
		async = true,
		dev = false,
		delay_timeout = 0,
	} = options;

	const script_src: string = `(function(){var w=window;var sb=w.splitbee;var d=document;var i=function(){i.c(arguments)};i.q=[];i.c=function(args){i.q.push(args)};w.Splitbee=i;function l(){var s=d.createElement('script');s.type='text/javascript';s.async=${async};s.src='https://cdn.splitbee.io/sb.js';var x=d.getElementsByTagName('script')[0];x.parentNode.insertBefore(s,x);}function ld(){setTimeout(l, ${delay_timeout});}if(w.attachEvent){w.attachEvent('onload',ld);}else{w.addEventListener('load',ld,false);}})()`;

	let viteConfig: ResolvedConfig | undefined;

	return {
		name: 'vite-plugin-splitbee',
		configResolved(config) {
			viteConfig = config;
		},
		transformIndexHtml: {
			enforce: 'post',
			transform(html: any) {
				if (!viteConfig?.isProduction && !dev) return html;

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
