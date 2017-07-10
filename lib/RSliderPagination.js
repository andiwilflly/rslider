import React from "React";
// MobX
import {action, reaction, observable, observe, computed, autorun, asStructure} from 'mobx';
import { observer } from 'mobx-react';
// Models
import rSliderModel from "./rSlider.model";
// Components
import RSliderBasic from "./RSliderBasic";


@observer
class RSliderPagination extends RSliderBasic {

	static _name = 'RSliderPagination';

	static propTypes = {
	};

	static defaultProps = {
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
			<ul style={{ textAlign:'center' }}>
				{ _.map(new Array(rSliderModel.steps.all(this.slider)), (value, step)=> (
					<li key={step}
					    onClick={ ()=> this.onClick(step) }
					    style={{
					    	background: this.slider.currentStep === step ? 'white' : 'black',
					    	display:'inline-block',
							transition: "1s all",
							width: 15,
							height: 15,
							margin: 5,
							borderRadius: '50%',
							cursor: 'pointer'
					    }}>
					</li>
				)) }
			</ul>
		);
	}
}


export default RSliderPagination;
