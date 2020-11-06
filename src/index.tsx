import { h, render, Component } from 'preact';
import { Router } from 'preact-router';
import './styles.scss';

const App = h('h1', null, 'Hello to Preact & TypeScript');

render(App, document.getElementById('root'));

