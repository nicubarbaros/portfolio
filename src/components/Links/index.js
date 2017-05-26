import React, { PureComponent } from 'react';
import {Link} from 'react-router-dom';

class Links extends PureComponent {

	renderLinks(link) {
		return (
			<li key={link.title}>
				<Link to={link.link} target="_blank">
					<span data-text={link.title}>{link.title}</span>
				</Link>
			</li>
		)
	}

	render () {
		let links = this.props.links;
		return(
			<div>
				<ul>
					{links.map(this.renderLinks)}
				</ul>
			</div>
		)
	}
}

export default Links;