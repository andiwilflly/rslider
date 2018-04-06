// React
import React from 'react';
import PropTypes from 'prop-types';
// MobX
import {action, reaction, observable, observe, computed, autorun, asStructure} from 'mobx';
import { observer } from 'mobx-react';
// Models
import rSliderModel from "./rSlider.model";
// Components
import RSliderBasic from "./RSliderBasic";


@observer
class RSlider extends RSliderBasic {

	static propTypes = {
		name: PropTypes.string.isRequired,
		className: PropTypes.string,
		style: PropTypes.object,
		devMode: PropTypes.bool,
		currentStep: PropTypes.number
	};


	static defaultProps = {
		name: 'rSlider',
		className: '',
		style: {},
		devMode: false,
		media: false,
		customAnimation: false,
		currentStep: 0,
		itemsShow: 1,
		itemsScroll: 1,
		infinity: true,
		draggable: false,
		draggableSensitivity: 10, // Diff more 10% from right or from left side cause [rSlider.currentStep] change (only for [draggable] mode)
		autoPlay: false,
		stickOut: 0, // [0%-100%]
		stopOnHover: false,

		// Public callbacks
		onReady: (slider)=> {},
		onStepChange: (slider)=> {},
		onDragEnd: (slider, draggable)=> {}
	};


	static childContextTypes = {
		name: PropTypes.string.isRequired
	};


	rSliderRef = React.createRef();


	getChildContext() {
		return { name: this.props.name };
	}


	componentWillReceiveProps(nextProps, nextState) {
		if(nextProps.stickOut === 0 && this.props.stickOut > 0) return;
		if(this.props.stickOut !== nextProps.stickOut) {
			rSliderModel.update({
				name: this.props.name,
				stickOut: nextProps.stickOut
			});
		}
		if(this.props.currentStep !== nextProps.currentStep) {
			rSliderModel.update({
				name: this.props.name,
				currentStep: nextProps.currentStep
			});
		}
	}


	componentDidMount() {
		rSliderModel.create({
			...this.props,
			sliderEl: this.rSliderRef.current,
			sliderWidth: this.rSliderRef.current.offsetWidth,
			itemWidth: this.getElementPureWidth(this.rSliderRef.current) / this.props.itemsShow
		});

		if(this.slider.media) this.detectMediaMatch();
		window.addEventListener("resize", this.onResizeSlider);

		if(this.slider.autoPlay && this.slider.stopOnHover) {
			this.rSliderRef.current.addEventListener('mouseenter', this.mouseEnter, false);
			this.rSliderRef.current.addEventListener('mouseleave', this.mouseLeave, false);
		}


		// Better call [rSlider.callbacks] from [reactions]
		this['RSlider | changed: this.slider.currentStep | run: this.slider.onStepChange()'] = reaction(
			()=> this.slider && this.slider.currentStep,
			()=> this.slider && this.slider.onStepChange(this.slider),
			{ name: 'RSlider | changed: this.slider.currentStep | run: this.slider.onStepChange()' }
		);
	}


	componentWillUnmount() {
		if(this['RSlider | changed: this.slider.currentStep | run: this.slider.onStepChange()']) this['RSlider | changed: this.slider.currentStep | run: this.slider.onStepChange()']();
		window.removeEventListener("resize", this.onResizeSlider);

		if(this.slider && this.slider.autoPlay && this.slider.stopOnHover) {
			this.rSliderRef.current.removeEventListener('mouseenter', this.mouseEnter);
			this.rSliderRef.current.removeEventListener('mouseleave', this.mouseLeave);
		}

		// We need to take some time, before all RSlider [components] unMounted and remove their [reactions]
		if(this.slider) rSliderModel.remove({ name: this.slider.name });
	}


	mouseEnter = ()=> {
		rSliderModel.update({
			name: this.slider.name,
			isDraggableMouseEnter: true
		});
	};


	mouseLeave = ()=> {
		rSliderModel.update({
			name: this.slider.name,
			isDraggableMouseEnter: false
		});
	};


	// TODO: Add on key press events
	render() {
		return (
			<div>
				<div className={ `rslider ${  this.slider ? this.slider.className : '' }` }
					 ref={ this.rSliderRef }
					 style={ this.slider ?
					    {
					    	...this.slider.style,
							...this.props.stickOut && { paddingRight: this.props.stickOut + 'px' }
					    }
					    :
					    {
					    	...this.props.stickOut && { paddingRight: this.props.stickOut + 'px' }
					    }
					 }>

					{ this.slider ? this.props.children : null }
				</div>

				{ this.slider && this.slider.devMode ?
					<ul style={{ float: 'left', width: '100%' }}>
						{ Object.keys(this.slider)
							.map((name) => {
								let prop = this.slider[name];
								return <p key={name}>{ name }: {
									prop instanceof Object || prop instanceof Function || name === 'children' ?
										'[ content ]'
										:
										JSON.stringify(this.slider[name])
								}</p>
							})
						}
					</ul>
					: null }
			</div>
		);
	}
};

export default RSlider;