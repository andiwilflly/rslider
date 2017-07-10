// MobX
import {action, reaction, observable, observe, computed, autorun, asStructure} from 'mobx';
import { observer } from 'mobx-react';
// Models
import rSliderModel from "./rSlider.model";


class RSliderBasic extends React.Component {

	// @private
	_lastMatchedMediaName = null; // Cache for better performance


	@computed get slider() { return rSliderModel.rSliders.get(this.props.name); };

	@computed get elements() { return rSliderModel.elements; };

	@computed get isCustomAnimationEffect() { return rSliderModel.slides.isCustomAnimationEffect(this.slider); };


	get documentWidth() {
		return Math.max(
			document.documentElement["clientWidth"],
			document.body["scrollWidth"],
			document.documentElement["scrollWidth"],
			document.body["offsetWidth"],
			document.documentElement["offsetWidth"]);
	}


	reformatChildren = (children)=> {
		if(!children) return children;
		if(children.type) return this.findRSliderChild(children, 0);
		return _.map(children, (child, i)=> {
			return this.findRSliderChild(child, i);
		});
	};


	findRSliderChild = (child, index)=> {
		if(!child) return null;
		if(child instanceof Array) return this.reformatChildren(child);

		if(child.props) {
			if(child.type._name && this.elements.includes(child.type._name)) {
				if(child.type._name === 'RSlider') return child; // Don`t pass additional props if we found other [RSlider] inside current
				child = React.createElement(
					// Delegate [propsToImport] from [rSliderActionsMixin]
					child.type,
					{
						...child.props,
						key: child.key ? child.key : child.type._name + Math.random(),
						name: this.slider.name
					}
				);
				return child;
			} else {
				if(child.props.children) {
					let props = _.assign({}, child.props, { children: this.findRSliderChild(child.props.children) });
					return (<child.type {...props} key={index} />); // We need to keep wrappers for our special rSlider elements
				}
				return child;
			}
		} else { return child; }
	};


	onResizeSlider = ()=> {
		if(this.slider.media) this.detectMediaMatch();
		this.recalculateSlider();
	};


	recalculateSlider = ()=> {
		rSliderModel.update({
			name: this.props.name,
			sliderWidth: this.refs.rSlider.offsetWidth,
			itemWidth: this.refs.rSlider.offsetWidth / this.slider.itemsShow
		});
	};


	recalculateSliderItems = ()=> {
		rSliderModel.update({
			name: this.props.name,
			itemsCount: this.props.children.length,
			innerWidth: this.props.children.type ? this.slider.sliderWidth : this.slider.itemWidth * this.props.children.length
		});
	};


	detectMediaMatch = ()=> {
		let isMatched = false;
		_.forEach(Object.keys(this.slider.media), (mediaName)=> {
			const range = mediaName.split('*');
			range[0] = (range[0] === '') ? 0 : +range[0] ;
			range[1] = (range[1] === '') ? 99999 : (+range[1])-1 ;

			if(range[0] <= this.documentWidth && this.documentWidth <= range[1]) {
				isMatched = true;
				if(this._lastMatchedMediaName === mediaName) return;
				this._lastMatchedMediaName = mediaName;
				rSliderModel.update({
					name: this.slider.name,
					...this.slider.media[mediaName],
					currentStep: 0
				});
				return false; // Break loop if [matched]
			}
		});

		if(!isMatched && this._lastMatchedMediaName !== 'default') {
			this._lastMatchedMediaName = 'default';
			rSliderModel.update({
				name: this.slider.name,
				...this.props
			})
		}
	};
}


export default RSliderBasic;