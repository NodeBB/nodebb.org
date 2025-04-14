'use strict';

// generate blog html pages from markdown files

import fs from 'fs';
import path from 'path';
import { marked } from 'marked';

const blogPostData = JSON.parse(await fs.promises.readFile('./blog_source/blog_posts.json', 'utf-8'));


const blogTpl = await fs.promises.readFile('./blog_source/blog_template.tpl', 'utf-8');
const start = Date.now();
await Promise.all(blogPostData.map(async fileData => {
	const filename = path.parse(fileData.content).name;

	let content = await fs.promises.readFile(
		path.join('./blog_source/posts', fileData.content), 'utf-8'
	);
	if (fileData.content.endsWith('.md')) {
		content = marked.parse(content);
	}
	content = content.replace(/\\t/g, '').replace(/\\n/g, '');

	const html = blogTpl.replace('{{{ content }}}', content)
		.replace(/{{{ title }}}/g, fileData.title)
		.replace(/{{{ subtitle }}}/g, fileData.subtitle ? `<h2 class="text-secondary fs-4">${fileData.subtitle}</h2>` : '')
		.replace('{{{ pubDate }}}', new Date(fileData.pubDate).toLocaleString('en-US'))
		.replace('{{{ author }}}', fileData.author.name)
		.replace(/{{{ author_url }}}/g, fileData.author.url)
		.replace('{{{ author_image_url }}}', fileData.author.image);

	await fs.promises.writeFile(path.join(`./blog/${filename}.html`), html);
	return fileData;
}));

// building blog index
blogPostData.sort((a, b) => new Date(b.pubDate).getTime() - new Date(a.pubDate).getTime());

const cardTpl = await fs.promises.readFile('./blog_source/blog_card.tpl', 'utf-8');
const blogIndexTpl = await fs.promises.readFile('./blog_source/index.tpl', 'utf-8');

const defaultCovers = [
	'https://images.unsplash.com/photo-1516116412344-6663387e8590?q=80&w=1828&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
	'https://images.unsplash.com/photo-1501504905252-473c47e087f8?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
	'https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
	'https://images.unsplash.com/photo-1625297671662-f073f2a91528?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
	'https://images.unsplash.com/photo-1742198810079-49bb51d1c5af?q=80&w=1969&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
	'https://images.unsplash.com/photo-1572044162444-ad60f128bdea?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
	'https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
];
let defaultCoverIndex = 0;

const cardsHtml = await Promise.all(blogPostData.map(async (blog, index) => {
	let html = cardTpl.replace(/{{{ title }}}/g, blog.title)
		.replace(/{{{ excerpt }}}/g, blog.excerpt || '')
		.replace(/{{{ url }}}/g, blog.url)
		.replace('{{{ cover }}}', `<img style="height: 225px; object-fit: cover;" src="${blog.cover || defaultCovers[defaultCoverIndex % defaultCovers.length]}" class="card-img-top"></img>`);

	if (!blog.cover) {
		defaultCoverIndex++;
	}

	return html;
}));
const html = blogIndexTpl.replace('{{{ blog_posts }}}', cardsHtml.join(''))
await fs.promises.writeFile(path.join(`./blog/index.html`), html);

console.log(`Generated ${blogPostData.length} blog posts in ${((Date.now() - start) / 1000).toFixed(2)} seconds`);