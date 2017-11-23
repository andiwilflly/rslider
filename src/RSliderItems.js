// React
import React from 'react';
import PropTypes from 'prop-types';
// MobX
import { observer } from 'mobx-react';
// Models
import rSliderModel from "./rSlider.model";
// Components
import RSliderBasic from "./RSliderBasic";
import RSliderDraggable from "./RSliderDraggable";
import RSliderItem from "./RSliderItem";



@observer
class RSliderItems extends RSliderBasic {

	static _name = 'RSliderItems';

	static propTypes = {
		className: PropTypes.string,
		style: PropTypes.object
	};

	static defaultProps = {
		classes: '',
		style: {}
	};

	static contextTypes = {
		name: PropTypes.string.isRequired
	};


	componentDidMount() {
		this.recalculateSliderItems();
		window.addEventListener("resize", this.recalculateSliderItems);
	}


	componentWillUnmount() {
		window.removeEventListener("resize", this.recalculateSliderItems);
	}


	componentWillReceiveProps(nextProps) {
		// Fix problem when we have [children] count update after [rSlider] creation
		clearTimeout(this.timeout);
		this.timeout = setTimeout(()=> {
			if(!this.slider) return;
			if(nextProps.children.length !== this.slider.itemsCount) {
				const event = document.createEvent('HTMLEvents');
				event.initEvent('resize', true, false);
				window.dispatchEvent(event);
				rSliderModel.update({
					name: this.slider.name,
					currentStep: 0
				});
			}
		}, 1000);
	}


	renderSliderItems = ()=> {
		if(this.props.children.type) return this.renderSliderItem(this.props.children, 0);
		return this.props.children.map( (child, i)=> this.renderSliderItem(child, i) );
	};


	renderSliderItem = (child, i)=> {
		return (
			<RSliderItem itemIndex={i} key={i}>
				{ child }
			</RSliderItem>
		);
	};


	render() {
		if(this.slider.devMode) console.log('RSliderItems render');

		return (
			<div className={ `rslider__list ${this.props.className}` }
				 style={{ ...this.props.style, overflow: 'visible' }}>
				{ this.slider.draggable ?
					<RSliderDraggable>
						{ this.renderSliderItems() }
					</RSliderDraggable>
					:
					this.isCustomAnimationEffect ?
						<RSliderItem itemIndex={ this.slider.currentStep }>
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