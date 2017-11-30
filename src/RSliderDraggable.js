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
		y: 0,
		startX: 0,
		realStartPos: { x: 0, y: 0 },
		el: null,
		isSelectedEl: false,
		moveCounter: 0,
		isVerticalDrag: false,

		init: (el)=> {
			this.draggable.el = el;

			// Desktop drag events
			this.draggable.el.addEventListener('mousedown', this.draggable.start, false);
			this.draggable.el.addEventListener('mouseenter', this.draggable.enter, false);
			this.draggable.el.addEventListener('mouseleave', this.draggable.leave, false);
			document.addEventListener('mousemove', this.draggable.move, false);
			document.addEventListener('mouseup', this.draggable.stop, false);

			// Mobile drag events
			this.draggable.el.addEventListener('touchstart', (e)=> {
				this.draggable.x = e.touches[0].pageX;
				this.draggable.y = e.touches[0].pageY;
				this.draggable.start();

				this.draggable._isVerticalDrag({
					x: e.touches[0].pageX,
					y: e.touches[0].pageY
				});
				this.draggable.el.addEventListener('touchmove', this.draggable.move, false);
			}, false);
			window.addEventListener('touchend', this.draggable.stop, false);
		},


		start: ()=> {
			this.draggable.isSelectedEl = true;
			this.draggable.startX = this.draggable.x - this.draggable.el['offsetLeft'];
			rSliderModel.update({
				name: this.slider.name,
				leftPosition: (this.draggable.x - this.draggable.startX)
			});
		},


		enter: (e)=> {
			rSliderModel.update({
				name: this.slider.name,
				isDraggableMouseEnter: true
			});
		},


		leave: (e)=> {
			rSliderModel.update({
				name: this.slider.name,
				isDraggableMouseEnter: false
			});
		},


		move: (e)=> {
			this.draggable.x = (e.touches && e.touches[0].pageX) || (document.all ? window.event["clientX"] : e["pageX"]);
			this.draggable.y = (e.touches && e.touches[0].pageY) || (document.all ? window.event["clientY"] : e["pageY"]);

			if(!this.draggable.isSelectedEl) return;
			if(this.draggable.isVerticalDrag) return this.draggable.stop();

			// Prevent default for mobile devices (IOS Safari problems) when drag event is not [vertical]
			if(!this.draggable._isVerticalDrag({
					x: this.draggable.x,
					y: this.draggable.y
				})) e.preventDefault();

			this.draggable.el.className = 'rslider__track rslider__track_state_selected'; // Disable [transition]
			rSliderModel.update({
				name: this.slider.name,
				leftPosition: (this.draggable.x - this.draggable.startX)
			});
		},


		stop: ()=> {
			if(!this.draggable.isSelectedEl) return;

			this.draggable.isVerticalDrag = false;
			this.draggable.isSelectedEl = false;
			this.draggable.el.className = 'rslider__track'; // Enable [transition]

			const step = this.slider.itemWidth * this.slider.itemsScroll;
			let diff = this.draggable.startX - this.draggable.x;
			const currentSlideDiff = diff - this.slider.currentStep * step;
			const diffPercent = Math.round(Math.abs(currentSlideDiff * 100 / this.slider.itemWidth));

			if(this.draggable.moveCounter > 1) {
				rSliderModel.update({
					name: this.slider.name,
					currentStep: diffPercent > this.slider.draggableSensitivity ? currentSlideDiff > 0 ?
						this.slider.currentStep + 1 : this.slider.currentStep - 1
						:
						Math.round(diff / step)
				});
			}

			this.draggable.moveCounter = 0;

			// UnSubscribe
			this.draggable.el.removeEventListener('touchmove', this.draggable.move);
			// Callback
			this.slider.onDragEnd(this.slider, this.draggable);
		},


		remove: ()=> {
			// Mobile drag events
			this.draggable.el.removeEventListener('touchstart', this.draggable.start);
			this.draggable.el.removeEventListener('touchmove', this.draggable.move);
			this.draggable.el.removeEventListener('mouseenter', this.draggable.enter);
			this.draggable.el.removeEventListener('mouseleave', this.draggable.leave);
			window.removeEventListener('touchend', this.draggable.stop);

			// Desktop drag events
			this.draggable.el.removeEventListener("mousedown", this.draggable.start);
			document.removeEventListener("mousemove", this.draggable.move);
			document.removeEventListener("mouseup", this.draggable.stop);
		},


		_isVerticalDrag: ({ x, y })=> {
			if(this.draggable.moveCounter === 0) {
				this.draggable.realStartPos = { x, y };
				this.draggable.moveCounter+=1;
			} else {
				if(Math.abs(this.draggable.realStartPos.x - x) <= Math.abs(this.draggable.realStartPos.y - y)) {
					console.log('[vertical drag]');
					this.draggable.isVerticalDrag = true;
					this.draggable.moveCounter +=1;
					return true;
				} else {
					this.draggable.moveCounter +=1;
					return false;
				}
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