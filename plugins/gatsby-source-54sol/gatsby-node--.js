const fetch = require("node-fetch")
const queryString = require("query-string")
const apiWppages = `https://dev.54solutions.com/wp-json/wp/v2/pages/`;
//const apiWpposts = `https://dev.54solutions.com/wp-json/wp/v2/posts/`;

exports.createPages = ({actions : {createPage} }) => {
	const pages = page => {
		fetch(apiWppages)
		.then(response => response.json())
		.then(data => {
			data.forEach(item => {
				console.log(data)
				let pageid = item.id
				const apiPages = `http://dev-prueba-builders.pantheonsite.io/flbuilder/v1/`+pageid;
				fetch(apiPages)
				.then(response => response.json())
				.then(datapage => {
					createPage({
						path: `/{item.slug}`,
						component: require.resolve('./src/templates/page.js'),
						context: {
							content : item.html
						}
					})
				})
			})
		})
	}
}