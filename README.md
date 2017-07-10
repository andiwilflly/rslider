---

<p align="right">
  <a href="https://npmjs.org/package/rslider">
    <img src="https://img.shields.io/npm/v/rslider.svg?style=flat-square">
  </a>
</p>


# rSlider

> Simple, scalable slider for React mobx projects


## Install

```sh
$ npm install rslider
```

Make sure that all dependency packages is fetched and installed.


## API
| Propety | isRequired | Type | Default value | Description |
| --- | --- | --- | --- | --- |
| name | `true` | String | 'rSlider' | Each rSlider must have unique name |
| className | false | String | ' ' | Custom class that can be added to .rslider DOM element |
| style | false | String | ' ' | Custom styles that can be added to .rslider DOM element |
| devMode | false | Boolean | false | Allow you to debug **rSlider** mobx model right from you slider |
| media | false | Boolean/Object | false | Add **mediaQueries** support to **rSlider** (See **media** usage example on the bottom) |
| customAnimation | false | Boolean/String | false | Allow you to run css3 animations from https://daneden.github.io/animate.css or you own. *(Only for slideToShow === 1)* |
| currentStep | false | Number | 0 | You can start **rSlider** from any slide you want |
| itemsShow | false | Number | 1 | Number of **rSlider** items that will be shown on the same time |
| itemsScroll | false | Number | 1 | Number of **rSlider** items that will be scroll on each step change |
| infinity | false | Boolean | true | **rSlider** has infinity loop as default |
| draggable | false | Boolean | false | **rSlider** can be draggable *(except cases, when customAnimation === true)* |
| draggableSensitivity | false | Number | 10 | Only for enabled **infinity** mode. You can set any value from 0 to 100. The more draggableSensitivity, the more difficult to drag the slider to the next step |
| autoPlay | false | Boolean | false | Allow you slide change step on each 5000ms. Can be customized inside [rSliderItem] component. See examples below |
| onStepChange | false | Function | (slider)=>{} | Callback, that fire right after **rSlider** step changes. Returns **rSlider** model as first argument |
| onDragEnd | false | Function | (slider,draggable)=>{} | Callback, that fire right after **rSlider** drag event ends. Returns **rSlider** model as first argument and **draggable** state object as the second |



## Usage

Simple [rSlider] example:
```js
    <RSlider name="partShow"
                    itemsShow="3"
                    style={{ background: 'LightSalmon' }}
                    devMode>
        <RSliderItems>
                <div>item 1</div>
                <div>item 2</div>
        </RSliderItems>

        <RSliderArrowL />
        <RSliderArrowR />
        <RSliderPagination />
    </RSlider>
```


## Tests
npm test

## Contributing