import React from 'react';

import Button from './Button';
import { Provider as ThemeProvider } from './ThemeContext';
import './Content.css';

const Content = (props) => (
	<ThemeProvider value={{color: '#00b7f9'}}>
		<div className="content">
			<h4>Context is pretty cool.</h4>
			<p>Click the notify button to show a notification!</p>
			<Button>Notify!</Button>
		</div>
	</ThemeProvider>
)

export default Content;