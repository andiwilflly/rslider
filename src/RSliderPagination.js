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
class RSliderPagination extends RSliderBasic {

	static _name = 'RSliderPagination';

	static propTypes = {
		className: PropTypes.string
	};

	static defaultProps = {
		className: ''
	};

	static contextTypes = {
		name: PropTypes.string.isRequired
	};


	onClick = (step)=> {
		rSliderModel.update({
			name: this.slider.name,
			currentStep: step
		});
	};


	render() {
		if(rSliderModel.steps.all(this.slider) < 2) return null; // not loaded or enough slides

		if(this.slider.devMode) console.log('RSliderPagination render');

		return (
			<ul className={ `rslider__pagination ${ this.props.className }` }>
				{ new Array(rSliderModel.steps.all(this.slider))
					.fill(undefined)
					.map((value, step)=> {
						return (
							<li key={step}
							    className={ `rslider__pager-item ${ this.slider.currentStep === step ? 'rslider__pager-item_state_active' : '' }` }
							    onClick={ ()=> this.onClick(step) }>
								{ this.props.children ?
									this.props.children[step] || <button className="rslider__pager-btn">{ step }</button> // custom pagination case
									:
									<button className="rslider__pager-btn">{ step }</button>
								}
							</li>
						);
					})
				}
			</ul>
		);
	}
}


export default RSliderPagination;
