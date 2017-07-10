const React = require("React");
// MobX
const {action, untracked, reaction, observable, observe, computed, autorun, asStructure} = requre('mobx');
const { observer } = require('mobx-react');
// Models
const rSliderModel = require("./rSlider.model");
// Components
const RSliderBasic = require("./RSliderBasic");


@observer
class RSlider extends RSliderBasic {

	static propTypes = {
		name: React.PropTypes.string.isRequired,
		className: React.PropTypes.string,
		style: React.PropTypes.object,
		devMode: React.PropTypes.bool,
		currentStep: React.PropTypes.number
	};


	static defaultProps = {
		name: 'default',
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

		// Public callbacks
		onStepChange: (slider)=> {},
		onDragEnd: (slider, draggable)=> {}
	};


	html = null;


	shouldComponentUpdate(nextProps, nextState) {
		return !_.isEqual(nextProps, this.props);
	}


	componentDidMount() {
		rSliderModel.create({
			...this.props,
			sliderWidth: this.refs.rSlider.offsetWidth,
			itemWidth: this.refs.rSlider.offsetWidth / this.props.itemsShow
		});

		// Extend [this.props.children] with [rSliderModel] parameters
		this.html = this.reformatChildren(this.props.children);

		if(this.slider.media) this.detectMediaMatch();
		this.recalculateSlider();
		window.addEventListener("resize", this.onResizeSlider);

		// Better call [rSlider.callbacks] from [reactions]
		this['@reaction: RSlider -> this.slider.currentStep change'] = reaction(
			()=> this.slider.currentStep,
			()=> this.slider.onStepChange(this.slider),
			{ name: '@reaction: RSlider -> this.slider.currentStep change' }
		);
	}


	componentWillReceiveProps(nextProps) {
		if(!_.isEqual(this.props, nextProps)) rSliderModel.update({ ...nextProps, name: this.slider.name });
	}


	componentWillUnmount() {
		this['@reaction: RSlider -> this.slider.currentStep change']();
		window.removeEventListener("resize", this.onResizeSlider);
	}


	componentDidUpdate() {
		if(this.slider && this.slider.devMode) console.timeEnd('RSlider render time');
	}


	// TODO: Add on key press events
	render() {
		return (
			<div style={{ overflow: 'hidden' }}>
				<div className={ `rslider ${  this.slider ? this.slider.className : '' }` }
					 ref="rSlider"
					 style={ this.slider ? this.slider.style : {} }>

					{ this.html }
				</div>

				{ this.slider && this.slider.devMode ?
					<ul style={{ float: 'left', width: '100%' }}>
						{ _.map(this.slider, (prop, name)=> <p key={name}>{ name }: { _.isFunction(prop) ? 'function' : JSON.stringify(prop) }</p> )}
					</ul>
					: null }
			</div>
		);
	}
};

module.exports = RSlider;