import React from "React";
// MobX
import {action, reaction, observable, observe, computed, autorun, asStructure} from 'mobx';
import { observer } from 'mobx-react';
// Models
import rSliderModel from "./rSlider.model";
// Components
import RSliderBasic from "./RSliderBasic";


@observer
class RSliderDraggable extends RSliderBasic {

	static _name = 'RSliderArrowR';

	static propTypes = {
		name: React.PropTypes.string.isRequired
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
		el: null,
		isSelectedEl: false,

		init: (el)=> {
			this.draggable.el = el;
			// Desktop drag events
			this.draggable.el.addEventListener('mousedown', this.draggable.start, false);
			document.addEventListener('mousemove', this.draggable.move, false);
			document.addEventListener('mouseup', this.draggable.stop, false);
		},

		start: ()=> {
			this.draggable.isSelectedEl = true;
			this.draggable.startX = this.draggable.x - this.draggable.el['offsetLeft'];
		},

		move: (e)=> {
			this.draggable.x = document.all ? window.event["clientX"] : e["pageX"];
			if(!this.draggable.isSelectedEl) return;
			// Prevent default for mobile devices (IOS Safari problems) when drag event is not [vertical]
			e.preventDefault();

			this.draggable.el.className = 'rslider__track rslider__track_state_selected'; // Disable [transition]
			rSliderModel.update({
				name: this.slider.name,
				leftPosition: (this.draggable.x - this.draggable.startX)
			});
		},

		stop: ()=> {
			if(!this.draggable.isSelectedEl) return;
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
			this.draggable.el.removeEventListener("mousedown", this.draggable.start);
			document.removeEventListener("mousemove", this.draggable.move);
			document.removeEventListener("mouseup", this.draggable.stop);
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