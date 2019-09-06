import React from 'react'
import Layout from '../components/layout'

export default ({pageContext}) => (
	<Layout>
		<style dangerouslySetInnerHTML= {{__html: pageContext.css}} />

		<div dangerouslySetInnerHTML={{__html: pageContext.rendered }} />
		
		<script dangerouslySetInnerHTML={{__html: pageContext.js }} />
	</Layout>
);