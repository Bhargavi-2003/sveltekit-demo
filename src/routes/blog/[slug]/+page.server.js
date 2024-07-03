export async function load({ params }) {
	return {
		post: {
			// title: `Title for ${params.slug} goes here`,
			content: `hello ${params.slug} goes here`
		}
	};
}