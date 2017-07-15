// React
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

		// Public callbacks
		onStepChange: (slider)=> {},
		onDragEnd: (slider, draggable)=> {}
	};


	static childContextTypes = {
		name: PropTypes.string.isRequired
	};


	getChildContext() {
		return { name: this.props.name };
	}


	componentDidMount() {
		rSliderModel.create({
			...this.props,
			sliderEl: this.refs.rSlider,
			sliderWidth: this.refs.rSlider.offsetWidth,
			itemWidth: this.getElementPureWidth(this.refs.rSlider) / this.props.itemsShow
		});

		if(this.slider.media) this.detectMediaMatch();
		window.addEventListener("resize", this.onResizeSlider);

		// Better call [rSlider.callbacks] from [reactions]
		this['RSlider | changed: this.slider.currentStep | run: this.slider.onStepChange()'] = reaction(
			()=> this.slider.currentStep,
			()=> this.slider.onStepChange(this.slider),
			{ name: 'RSlider | changed: this.slider.currentStep | run: this.slider.onStepChange()' }
		);
	}


	componentWillReceiveProps(nextProps) {
		//if(!_.isEqual(this.props, nextProps)) rSliderModel.update({ ...nextProps, name: this.slider.name });
	}


	componentWillUnmount() {
		this['RSlider | changed: this.slider.currentStep | run: this.slider.onStepChange()']();
		window.removeEventListener("resize", this.onResizeSlider);
		rSliderModel.remove({ name: this.slider.name });
	}


	// TODO: Add on key press events
	render() {
		return (
			<div>
				<div className={ `rslider ${  this.slider ? this.slider.className : '' }` }
					 ref="rSlider"
					 style={ this.slider ?
					    {
					    	...this.slider.style,
					    	width: '100%',
					    	boxSizing: 'content-box',
					        paddingRight: this.props.stickOut + 'px' }
					    :
					    { paddingRight: this.props.stickOut + 'px'}
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