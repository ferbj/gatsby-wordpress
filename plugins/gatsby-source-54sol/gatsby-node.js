const slash = require(`slash`)
const path = require(`path`)
const fetch = require("node-fetch")
const queryString = require("query-string")

const Promise = require(`bluebird`)

exports.createPages = ({ graphql, actions }) => {
const { createPage, createRedirect } =  actions
createRedirect({ fromPath: '/', toPath: '/home', redirectInBrowser: true, isPermanent: true })
 return new Promise((resolve, reject) => {
//  const apiOptions = queryString.stringify(configOptions)
  // Join apiOptions with the Pixabay API URL
  const apiWppages = `http://dev-prueba-builders.pantheonsite.io/wp-json/wp/v2/pages/`;
  //const apiWppages = `https://dev.54solutions.com/wp-json/wp/v2/pages/`;
  const apiWpposts = `http://dev-prueba-builders.pantheonsite.io/wp-json/wp/v2/posts/`;
  //const apiWpposts = `https://dev.54solutions.com/wp-json/wp/v2/posts/`;
  //const apiUrl = `https://dev.54solutions.com/wp-json/flbuilder/v1/${apiOptions}`
  // Gatsby expects sourceNodes to return a promise
  //return (
    // Fetch a response from the apiUrl
   //function getPages(){
   	fetch(apiWppages)
      // Parse the response as JSON
      .then(response => response.json())
      // Process the JSON data into a node
      .then(data => {

       // For each query result (or 'hit')
       data.forEach(item => {
        	if(item.errors){
       			console.log(data.errors)
       			reject(data.errors)
       		}
        	let pageid= item.id

        	const apiPages = `http://dev-prueba-builders.pantheonsite.io/wp-json/flbuilder/v1/`+pageid;
        	//const apiPages = `https://dev.54solutions.com/wp-json/flbuilder/v1/`+pageid;
			fetch(apiPages)
			.then(response => response.json())        	
			.then(datapage => {	
				
			createPage({
					path: `/${item.slug}/`,
					component : path.resolve("./src/templates/page.js"),
					context: datapage,
				})
				//return datapage;
				});
			resolve()
		})
    })
//}
  .then(
  //function getPosts(){
      fetch(apiWpposts)
      .then(response => response.json())
      .then(data => {
      	
      	data.forEach(item => {
      		if(item.errors){
      			console.log(item.errors)
      			reject(item.errors)
      		}
      		let postid = item.id
			const apiPost = `http://dev-prueba-builders.pantheonsite.io/wp-json/flbuilder/v1/`+postid; 
			//const apiPost= `http://dev-prueba-builders.pantheonsite.io/wp-json/wp/v2/posts/` +postid;
			//const apiPost = `https://dev.54solutions.com/wp-json/flbuilder/v1/`+postid; 
			fetch(apiPost)
			.then(response => response.json())
			.then(datapost => {
				
			createPage({
					path: `/post/${item.slug}/`,
					component: path.resolve("./src/templates/post.js"),
					context: datapost,
				})
				//return datapost;
			});	
			resolve()
      		})
      	})
	  )	
   })
}
