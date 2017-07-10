import React from "React";
// MobX
import {action, reaction, observable, observe, computed, autorun, asStructure} from 'mobx';
import { observer } from 'mobx-react';
// Components
import RSliderBasic from "./RSliderBasic";
import RSliderDraggable from "./RSliderDraggable";
import RSliderItem from "./RSliderItem";


@observer
class RSliderItems extends RSliderBasic {

	static _name = 'RSliderItems';

	static propTypes = {
		className: React.PropTypes.string,
		style: React.PropTypes.object
	};

	static defaultProps = {
		classes: '',
		style: {}
	};


	constructor(props) {
		super(props);
		this.state = {
			currentStep: 0
		};
	}


	componentDidMount() {
		this.recalculateSliderItems();
		window.addEventListener("resize", this.recalculateSliderItems);
	}


	componentWillUnmount() {
		window.removeEventListener("resize", this.recalculateSliderItems);
	}


	renderSliderItems = ()=> {
		if(this.props.children.type) return this.renderSliderItem(this.props.children, 0);
		return _.map(this.props.children, (child, i)=> this.renderSliderItem(child, i) );
	};


	renderSliderItem = (child, i)=> {
		return (
			<RSliderItem name={ this.props.name } itemIndex={i} key={i}>
				{ child }
			</RSliderItem>
		);
	};


	render() {
		if(this.slider.devMode) console.log('RSliderItems render');

		return (
			<div className={ `rslider__list ${this.props.className}` }
				 style={ this.props.style }>
				{ this.slider.draggable ?
					<RSliderDraggable name={ this.props.name }>
						{ this.renderSliderItems() }
					</RSliderDraggable>
					:
					this.isCustomAnimationEffect ?
						<RSliderItem name={ this.props.name } itemIndex={ this.slider.currentStep }>
							{ this.props.children.type ? this.props.children : this.props.children[this.slider.currentStep] }
						</RSliderItem>
						:
						<div className="rslider__track" style={{
							width: this.slider.innerWidth,
							left: this.slider.leftPosition
						}}>
							{ this.renderSliderItems() }
						</div>
				}
			</div>
		);
	}
}


export default RSliderItems;