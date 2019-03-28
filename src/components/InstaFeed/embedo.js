/**
 * Embedo - Example with React@latest and embedo@latest
 *
 * @link https://shobhitsharma.github.io/embedo
 * @import https://unpkg.com/embedo/embedo.min.js
 */
import React from 'react';
import Embedo from 'embedo'

// Sample Data
const embeds = [
	{
		id: "embed-0",
		name: "embed spotify",
		loaded: false,
		url: "https://open.spotify.com/embed/album/4c2WjXHuK2BbKapEeAX10R",
		options: {
			width: 750,
			height: 500
		}
	},
	{
		id: "embed-1",
		name: "embed tweet",
		loaded: false,
		url: "https://twitter.com/Sh0bhit/status/830544109857275906",
		options: {
			width: 500
		}
	},
	{
		id: "embed-2",
		name: "embed tweets grid",
		loaded: false,
		url: "https://twitter.com/TwitterDev/timelines/539487832448843776",
		options: {
      widget_type: 'grid',
			width: 750
    }
	},
	{
		id: "embed-3",
		name: "embed instagram",
		loaded: false,
		url: "https://www.instagram.com/p/BqYMoc9AdGY",
		options: {
			hidecaption: false
		}
	},
	{
		id: "embed-4",
		name: "embed youtube",
		loaded: false,
		url: "https://www.youtube.com/watch?v=uNVlQ1yPsto",
		options: {
			tagName: "embed",
			width: 750,
			height: 500
		}
	},
	{
		id: "embed-5",
		name: "embed pinterest",
		loaded: false,
		url: "https://www.pinterest.com/pinterest/", 
		options: {
      "data-pin-do": "embedUser",
      "data-pin-board-width": 750,
      "data-pin-scale-height": 500,
      "data-pin-scale-width": 80,
      "strict": true
    }
	}
];

// Initialize the instance
const embedo = new Embedo({
	twitter: true,
	instagram: true,
	pinterest: true
});

// Build component instance
class EmbedoItem extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			loaded: false
		};
	}
	componentWillMount() {
		console.log("componentWillMount", this.props);
	}
	render() {
		return (
			<a
				className="embedo-item"
				key={this.props.id}
				href={this.props.href}
				target="_blank"
				ref={c => (this.container = c)}
			>
				<h1>{this.props.name}</h1>
			</a>
		);
	}
	componentDidMount() {
		console.log("componentDidMount", this.props, embedo, this.container);
		let self = this;
		let options = this.props["data-options"] || {};
		let width = this.props["data-width"];
		let height = this.props["data-height"];

		if (width) {
			options.width = width;
		}

		if (height) {
			options.height = height;
		}
		
		// Call embedo .load()
		embedo
			.load(this.container, this.props.href, options)
			.done((data) => {
				console.log("done", data);
				self.setState({
					loaded: true
				});
			})
			.fail((err) => {
				console.error("error", err);
			});
	}
}

// Initialize base class
class InstaEmbedo extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			embedo: null,
			embeds: embeds
		};
	}
	render() {
		const Items = this.state.embeds.map((embed, i) => {
			return (
				<EmbedoItem
					key={i}
					id={embed.id}
					href={embed.url}
					name={embed.name}
					data-width={embed.options.width || "100vw"}
					data-height={embed.options.height }
					data-options={embed.options || {}}
				/>
			);
		});
		return (
			<div>
				<h1>embedo - React Component</h1>
				{Items}
			</div>
		);
	}
}

export default InstaEmbedo;