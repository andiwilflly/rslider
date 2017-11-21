// React
import React from 'react';
import PropTypes from 'prop-types';
// MobX
import { observer } from 'mobx-react';
// Models
import rSliderModel from "./rSlider.model";
// Components
import RSliderBasic from "./RSliderBasic";


@observer
class RSliderDraggable extends RSliderBasic {

	static _name = 'RSliderArrowR';

	static contextTypes = {
		name: PropTypes.string.isRequired
	};


	componentDidMount() {
		this.draggable.init(this.refs.rSliderDraggable);
	}


	componentWillUnmount() {
		this.draggable.remove();
	}


	// @SOURCE: https://jsfiddle.net/tovic/Xcb8d/
	// @SOURCE: http://codepen.io/Shikkediel/pen/VLZKor [mobile]
	draggable = {
		x: 0,
		startX: 0,
		realStartX: 0,
		el: null,
		isSelectedEl: false,
		dragIterationsCounter: 0,

		init: (el)=> {
			this.draggable.el = el;
			if(this.isTouchDevice) {
				// Mobile drag events
				this.draggable.el.addEventListener('touchstart', (e)=> {
					this.draggable.x = e.touches[0].pageX;
					this.draggable.start();
				}, false);
				this.draggable.el.addEventListener('touchmove', this.draggable.move, false);
				window.addEventListener('touchend', this.draggable.stop, false);
			} else {
				// Desktop drag events
				this.draggable.el.addEventListener('mousedown', this.draggable.start, false);
				document.addEventListener('mousemove', this.draggable.move, false);
				document.addEventListener('mouseup', this.draggable.stop, false);
			}
		},


		start: ()=> {
			this.draggable.isSelectedEl = true;
			this.draggable.realStartX = this.draggable.x;
			this.draggable.startX = this.draggable.x - this.draggable.el['offsetLeft'];
		},


		move: (e)=> {
			if(this.isTouchDevice) {
				this.draggable.x = e.touches[0].pageX;
			} else {
				this.draggable.x = document.all ? window.event["clientX"] : e["pageX"];
			}

			if(!this.draggable.isSelectedEl) return;

			if(this.draggable.dragIterationsCounter === 5 && Math.abs(this.draggable.realStartX - this.draggable.x) <= 40) {
				console.log('IS-VERTICAL');
				return this.draggable.stop();
			} else {
				// Prevent default for mobile devices (IOS Safari problems) when drag event is not [vertical]
				e.preventDefault();
			}

			this.draggable.dragIterationsCounter +=1;

			this.draggable.el.className = 'rslider__track rslider__track_state_selected'; // Disable [transition]
			rSliderModel.update({
				name: this.slider.name,
				leftPosition: (this.draggable.x - this.draggable.startX)
			});
		},


		stop: ()=> {
			if(!this.draggable.isSelectedEl) return;

			this.draggable.dragIterationsCounter = false;
			this.draggable.isSelectedEl = false;
			this.draggable.el.className = 'rslider__track'; // Enable [transition]

			const step = this.slider.itemWidth * this.slider.itemsScroll;
			let diff = this.draggable.startX - this.draggable.x;
			const currentSlideDiff = diff - this.slider.currentStep * step;
			const diffPercent = Math.round(Math.abs(currentSlideDiff * 100 / this.slider.itemWidth));

			rSliderModel.update({
				name: this.slider.name,
				currentStep: diffPercent > this.slider.draggableSensitivity ? currentSlideDiff > 0 ?
					this.slider.currentStep + 1 : this.slider.currentStep - 1
					:
					Math.round(diff / step)
			});
			// Callback
			this.slider.onDragEnd(this.slider, this.draggable);
		},


		remove: ()=> {
			if(this.isTouchDevice) {
				// Mobile drag events
				this.draggable.el.removeEventListener('touchstart', this.draggable.start);
				document.removeEventListener('touchmove', this.draggable.move);
				window.removeEventListener('touchend', this.draggable.stop);
			} else {
				// Desktop drag events
				this.draggable.el.removeEventListener("mousedown", this.draggable.start);
				document.removeEventListener("mousemove", this.draggable.move);
				document.removeEventListener("mouseup", this.draggable.stop);
			}
		}
	};


	render() {
		if(this.slider.devMode) console.log('RSliderDraggable render');

		return (
			<div className="rslider__track" ref="rSliderDraggable" style={{
					width: this.slider.innerWidth,
					left: this.slider.leftPosition
				}}>

				{ this.props.children }
			</div>
		);
	}
}


export default RSliderDraggable;