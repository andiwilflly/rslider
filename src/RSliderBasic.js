// React
import React from 'react';
// MobX
import {action, reaction, observable, observe, computed, autorun, asStructure} from 'mobx';
// Models
import rSliderModel from "./rSlider.model";


class RSliderBasic extends React.Component {

	// @private
	_lastMatchedMediaName = null; // Cache for better performance

	_timeout = {
		recalculateSliderItems: null,
		detectMediaMatch: null
	};

	@computed get sliderName() { return this.props.name || this.context.name; };

	@computed get slider() { return rSliderModel.rSliders.get(this.sliderName); };

	@computed get elements() { return rSliderModel.elements; };

	@computed get isCustomAnimationEffect() { return rSliderModel.slides.isCustomAnimationEffect(this.slider); };


	get documentWidth() {
		return Math.max(
			document.documentElement["clientWidth"],
			document.body["scrollWidth"],
			document.documentElement["scrollWidth"],
			document.body["offsetWidth"],
			document.documentElement["offsetWidth"]);
	}


	// @SOURCE: https://alastairc.ac/2010/03/detecting-touch-based-browsing
	get isTouchDevice() {
		const el = document.createElement('div');
		el.setAttribute('ongesturestart', 'return;');
		return typeof el.ongesturestart === "function";
	}


	getElementPureWidth(element) {
		const styles = window.getComputedStyle(element);
		const padding = parseFloat(styles.paddingLeft) + parseFloat(styles.paddingRight);
		return element.offsetWidth - padding;
	}


	onResizeSlider = ()=> {
		if(this.slider.media) this.detectMediaMatch();
	};


	// Call from [RSliderItems]
	recalculateSliderItems = ()=> {
		clearTimeout(this._timeout['recalculateSliderItems']);
		this._timeout['recalculateSliderItems'] = setTimeout(()=> {
			const childrenLength = this.props.children.type ? 1 : this.props.children.length;
			const isShortSlider = childrenLength <= this.slider.itemsShow;

			const itemWidth = isShortSlider ?
			this.getElementPureWidth(this.slider.sliderEl) / childrenLength
				:
			this.getElementPureWidth(this.slider.sliderEl) / this.slider.itemsShow;

			if(!this.slider.itemsCount) this.slider.onReady(this.slider);

			rSliderModel.update({
				name: this.sliderName,
				itemsCount: childrenLength,
				innerWidth: itemWidth * childrenLength,
				itemWidth: itemWidth,
				itemsShow: isShortSlider ? childrenLength : this.slider.itemsShow,
				infinity: isShortSlider ? false : this.slider.infinity,
				...typeof this.props.stickOut !== 'undefined' && { stickOut: this.props.stickOut }
			});
		}, 300);
	};


	detectMediaMatch = ()=> {
		clearTimeout(this._timeout['detectMediaMatch']);
		this._timeout['detectMediaMatch'] = setTimeout(()=> {
			let isMatched = false;

			Object.keys(this.slider.media).some((mediaName)=> {
				const range = mediaName.split('*');
				range[0] = (range[0] === '') ? 0 : +range[0] ;
				range[1] = (range[1] === '') ? 99999 : (+range[1])-1 ;

				if(range[0] <= this.documentWidth && this.documentWidth <= range[1]) {
					isMatched = true;
					if(this._lastMatchedMediaName === mediaName) return;
					this._lastMatchedMediaName = mediaName;
					rSliderModel.update({
						name: this.slider.name,
						...this.slider.media[mediaName],
						currentStep: 0
					});
					return true; // Break loop if [matched]
				}
			});

			if(!isMatched && this._lastMatchedMediaName !== 'default') {
				this._lastMatchedMediaName = 'default';
				rSliderModel.update({
					name: this.slider.name,
					...this.props
				})
			}
		}, 300);
	};
}


export default RSliderBasic;