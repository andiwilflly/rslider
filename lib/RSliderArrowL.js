import React from "React";
// MobX
import {action, reaction, observable, observe, computed, autorun, asStructure} from 'mobx';
import { observer } from 'mobx-react';
// Models
import rSliderModel from "./rSlider.model";
// Components
import RSliderBasic from "./RSliderBasic";


@observer
class RSliderArrowL extends RSliderBasic {

	static _name = 'RSliderArrowL';

	static propTypes = {
		classes: React.PropTypes.string,
		style: React.PropTypes.object,
		onClick: React.PropTypes.func
	};

	static defaultProps = {
		classes: '',
		style: {},
		onClick: null
	};


	onClick = (e)=> {
		rSliderModel.update({
			name: this.slider.name,
			currentStep: this.slider.currentStep - 1
		});
		if(this.props.onClick) this.props.onClick(this.slider);
	};

	@computed get disableArrow() { return this.slider.currentStep === 0 && !this.slider.infinity; };

	@computed get arrowState() { return this.disableArrow ? 'rslider__arrow_state_disabled' : ''; };

	@computed get arrowClasses() { return `rslider__arrow rslider__arrow_type_left ${ this.arrowState } ${this.props.classes}` };


	render() {
		if(this.slider.devMode) console.log('RSliderArrowL render');

		return (
			<button className={ this.arrowClasses }
					style={ this.props.style }
					tabIndex="1"
					onClick={ this.onClick }>prev</button>
		);
	}
}


export default RSliderArrowL;