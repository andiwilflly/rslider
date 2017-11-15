// React
import React from 'react';
// MobX
import { action, transaction, reaction, observable, computed, autorun, extendObservable, runInAction } from 'mobx';


// @SOURCE: https://mobx.js.org/refguide/modifiers.html#modifiers-for-observable
class RSliderModel {

	rSliders = observable.map(
		/* RSliderId: { RSliderState: observable:object } */
	);


	defaultSlider = {
		// Public (the same as in RSlider.core.observer.component [defaultProps] object)
		name: 'rSlider',
		className: '',
		style: {},
		devMode: false,
		media: false, // [false, object]
		customAnimation: false, // [ false, [fadeOutUp_fadeInDown bounceOutUp_bounceInDown_5000 (animate.css|https://daneden.github.io/animate.css/)] ]
		currentStep: 0,
		itemsShow: 1,
		itemsScroll: 1,
		infinity: true,
		draggable: false,
		draggableSensitivity: 10,
		autoPlay: false,
		stickOut: 0, // [0%-100%]
		// Public callbacks
		onStepChange: (slider)=> {},
		onDragEnd: (slider, draggable)=> {},

		// Private
		leftPosition: 0,
		sliderWidth: 0,
		itemWidth: 0,
		innerWidth: 0,
		itemsCount: 0,
		currentVisibleItems: [],
		customAnimationStatus: 'disabled' // [started, running, disabled]
	};


	elements = ['RSliderArrowL', 'RSliderArrowR', 'RSliderItems', 'RSliderItem', 'RSliderPagination'];


	create(state:Object) :RSliderModel {
		runInAction(`🦄-SLIDER-CREATE-${ this.rSliders.get(state.name) ? 'ERROR (already exists)' : 'SUCCESS' }-${state.name}`, ()=> {
			this.rSliders.set(state.name, observable(Object.assign(this.defaultSlider,state, {
				leftPosition: state.leftPosition || this._getLeftPosition(Object.assign(this.defaultSlider, state)),
				currentVisibleItems: this._getCurrentVisibleItems(Object.assign(this.defaultSlider, state))
			})));
		});
		return this;
	}


	async update(state:Object) :RSliderModel {
		let rSlider = this.rSliders.get(state.name);

		if(!rSlider) runInAction(`🦄-SLIDER-UPDATE-ERROR (no such slider) ${state.name}`, ()=>{});

		// Disable [rSlider] when [rSlider.customAnimation] is running
		if(rSlider.customAnimationStatus !== 'disabled') return this;

		// [Last] slide already reached, but you trying to move further
		// Back to [first] slide after [last] if [infinity] mode On
		if(state.currentStep >= this.steps.all(rSlider)) state.currentStep = rSlider.infinity ? 0 : this.steps.all(rSlider)-1;

		// [Firs] slide already reached, but you trying to move further
		// Back to [last] slider after [first] if [infinity] mode On
		if(state.currentStep < 0) state.currentStep = rSlider.infinity ? this.steps.all(rSlider)-1 : 0;

		// Start of custom animation
		if(this.slides.isCustomAnimationEffect(rSlider)) {
			extendObservable(rSlider, { customAnimationStatus: 'started' });
			await this.delay(this.slides.customAnimationDuration(rSlider) / 1.3);
		}

		// Extend [state] with [rSlider]
		extendObservable(rSlider, state);
		extendObservable(rSlider, {
			leftPosition: state.leftPosition || this._getLeftPosition(rSlider),
			currentVisibleItems: this._getCurrentVisibleItems(rSlider)
		});

		// End of custom animation
		if(this.slides.isCustomAnimationEffect(rSlider)) {
			extendObservable(rSlider, { customAnimationStatus: 'running' });
			await this.delay(this.slides.customAnimationDuration(rSlider));
			extendObservable(rSlider, { customAnimationStatus: 'disabled' });
		}

		return this;
	}


	remove({ name }) :RSliderModel {
		runInAction(`🦄-SLIDER-REMOVE-${ this.rSliders.delete(name) ? 'SUCCESS' : 'ERROR (no such slider)' }-${name}`, ()=> {});
		return this;
	}


	get slides() {
		return {
			invisible:       (rSlider)=> rSlider.itemsCount - rSlider.itemsShow,
			mustBeInvisible: (rSlider)=> this.steps.toEnd(rSlider) * rSlider.itemsScroll,
			difference:      (rSlider)=> this.slides.mustBeInvisible(rSlider) - this.slides.invisible(rSlider),
			isCustomAnimationEffect: (rSlider)=> rSlider.customAnimation && rSlider.itemsShow === 1 && rSlider.draggable === false,
			customAnimationDuration: (rSlider)=> rSlider.customAnimation && rSlider.customAnimation.split("_")[2] ? +rSlider.customAnimation.split("_")[2] : 1000
		};
	};


	get steps() {
		return {
			toEnd:  (rSlider)=> Math.ceil(this.slides.invisible(rSlider) / rSlider.itemsScroll),
			all:    (rSlider)=> this.steps.toEnd(rSlider) + 1,
			isLast: (rSlider)=> this.steps.all(rSlider) === rSlider.currentStep+1
		};
	};


	// @private
	delay(duration = 1000) {
		return new Promise((resolve, reject)=> {
			setTimeout(()=> {
				resolve();
			}, duration);
		});
	}


	// @private
	_getLeftPosition(rSlider:object) :number {
		const difference = this.steps.isLast(rSlider) ? this.slides.difference(rSlider) * rSlider.itemWidth : 0;
		const leftPosition =  -rSlider.currentStep * rSlider.itemsScroll * rSlider.itemWidth + difference;

		return rSlider.stickOut && this.steps.isLast(rSlider) ? leftPosition + +rSlider.stickOut : leftPosition;
	}


	// @private
	// TODO: Invalid>?>?
	_getCurrentVisibleItems(rSlider:Object) :Array {
		const startFrom = rSlider.currentStep * rSlider.itemsScroll - (this.steps.isLast(rSlider) ? this.slides.difference(rSlider) : 0);
		return new Array(+rSlider.itemsShow)
			.fill(undefined)
			.map((value, index)=> +startFrom + index);
	}
}


export default new RSliderModel();