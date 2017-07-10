import React from "React";
// MobX
import {action, reaction, observable, observe, computed, autorun, asStructure} from 'mobx';
import { observer } from 'mobx-react';
// Models
import rSliderModel from "./rSlider.model";
// Components
import RSliderBasic from "./RSliderBasic";


@observer
class RSliderItem extends RSliderBasic {

	static _name = 'RSliderItems';

	static propTypes = {
		name: React.PropTypes.string.isRequired,
		itemIndex: React.PropTypes.number.isRequired
	};


	componentDidMount() {
		if(!this.slider.autoPlay) return;

		this['@reaction: RSliderItem -> rSliderModel.currentStep changed'] = reaction(
			()=> this.slider.currentVisibleItems[0] === this.props.itemIndex,
			()=> this.isAutoPlay ? this.startItemAutoPlayInterval() : clearTimeout(this.timer),
			{
				name: '@reaction: RSliderItem -> rSliderModel.currentStep changed',
				fireImmediately: this.isAutoPlay
			}
		);
	}


	componentWilUnmount() {
		this['@reaction: RSliderItem -> rSliderModel.currentStep changed']();
	}


	@computed get isAutoPlay() { return this.slider.currentVisibleItems[0] === this.props.itemIndex && this.slider.autoPlay; };

	@computed get isCurrentVisibleItem() { return this.slider.currentVisibleItems.includes(this.props.itemIndex) };

	@computed get className() {
		switch(this.slider.customAnimationStatus) {
			case 'started':
				return `rslider__slide animated ${this.slider.customAnimation.split('_')[0]}`;
				break;
			case 'running':
				return `rslider__slide animated ${this.slider.customAnimation.split('_')[1]}`;
				break;
			case 'disabled':
				return 'rslider__slide ';
				break;
		}
	};

	@computed get animationDurationStyle() { return this.isCustomAnimationEffect ? rSliderModel.slides.customAnimationDuration(this.slider) / 1000 + 's' : ''; };


	startItemAutoPlayInterval() {
		this.timer = setTimeout(()=> {
			rSliderModel.update({
				name: this.slider.name,
				currentStep: rSliderModel.steps.isLast(this.slider) ? 0 : this.slider.currentStep + 1
			});
		}, 5000)
	}


	render() {
		if(this.slider.devMode) console.log('RSliderItem render');

		return (
			<div className={ this.className }
				 style={{
					width: this.slider.itemWidth,
					height: this.isCurrentVisibleItem ? 'auto' : 0,
					animationDuration: this.animationDurationStyle
			}}>
				{ this.props.children }
			</div>
		);
	}
}


export default RSliderItem;