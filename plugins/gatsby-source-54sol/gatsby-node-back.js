const fetch = require("node-fetch")
const queryString = require("query-string")

exports.sourceNodes = (
  { actions, createNodeId, createContentDigest },
  configOptions
) => {
  const { createNode } = actions

  // Gatsby adds a configOption that's not needed for this plugin, delete it
  delete configOptions.plugins
  // Convert the options object into a query string

  const processPages = page => {

    const nodeId = createNodeId(`Wp54pages-${page.id}`)
    const nodeContent = JSON.stringify(page)
    const nodeData = Object.assign({}, page, {
      id: nodeId,
      parent: null,
      children: [],
      internal: {
        type: `Wp54pages`,
        content: nodeContent,
        contentDigest: createContentDigest(page),
      },
    })
    console.log('paginas',nodeData);
    return nodeData
  }

  const processPosts = post => {
    const nodeId = createNodeId(`Wp54post-${post.id}`)
    const nodeContent = JSON.stringify(post)
    const nodeData = Object.assign({}, post, {
      id: nodeId,
      parent: null,
      children: [],
      internal: {
        type: `Wp54posts`,
        content: nodeContent,
        contentDigest: createContentDigest(post),
      },
    })
    console.log('posts',nodeData);
    return nodeData
  }

  const apiOptions = queryString.stringify(configOptions)
  // Join apiOptions with the Pixabay API URL
  const apiWppages = `https://dev.54solutions.com/wp-json/wp/v2/pages/`;
  const apiWpposts = `https://dev.54solutions.com/wp-json/wp/v2/posts/`;


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
        	let pageid= item.id
        	const apiPages = `https://dev.54solutions.com/wp-json/flbuilder/v1/`+pageid;
			fetch(apiPages)
			.then(response => response.json())        	
			.then(datapage => {
        console.log(datapage.html)
    		const nodeData = processPages(datapage)
					createNode(nodeData)
				/*data.forEach(page => {
					const nodeData = processPages(page)
					createNode(nodeData)
				})*/
				//return datapage;
			});
			
			})
    })
//}
  .then(//function getPosts(){
      	fetch(apiWpposts)
      .then(response => response.json())
      .then(data => {
      	data.forEach(item => {
      		let postid = item.id
			const apiPost = `https://dev.54solutions.com/wp-json/flbuilder/v1/`+postid; 
			fetch(apiPost)
			.then(response => response.json())
			.then(datapost => {
				//data.forEach(post => {
					//console.log('posts',post);
					const nodeData = processPosts(datapost)
					createNode(nodeData)
				//})
				//return datapost;
			});	
      	});
      	})
      )	
      //}
    //)
}
/*

exports.createPages = ({ allPages,actions }) => {
  const { createPage } = actions
  console.log({createPage})
	const allPages =  getPages();
  
	createPage({
		path: `${datapage.path}`,
		component : path.resolve("./src/templates/page.js"),
		context: {allPages}
	})
}*/