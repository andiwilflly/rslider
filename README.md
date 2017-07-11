
  🦄🌈

<p align="right">
  <a href="https://npmjs.org/package/rslider">
    <img src="https://img.shields.io/npm/v/rslider.svg?style=flat-square">
  </a>

  <a href="https://npmjs.com/package/rslider">
  		<img src="https://img.shields.io/npm/dm/rslider.svg">
  	</a>
</p>

> Simple, scalable slider for React mobx projects.


## Install

```sh
$ npm install rslider --save
```

Make sure that all dependency packages is fetched and installed.


## API
| Propety | Default value | Description |
| --- | --- | --- |
| name | 'rSlider' | Each rSlider must have unique name |
| className | ' ' | Custom class that can be added to .rslider DOM element |
| style | ' ' | Custom styles that can be added to .rslider DOM element |
| devMode | false | Allow you to debug **rSlider** mobx model right from you slider |
| media | false | Add **mediaQueries** support to **rSlider** (See **media** usage example on the bottom) |
| customAnimation | false | Allow you to run css3 animations from https://daneden.github.io/animate.css or you own. *(Only for slideToShow === 1)* |
| currentStep | 0 | You can start **rSlider** from any slide you want |
| itemsShow | 1 | Number of **rSlider** items that will be shown on the same time |
| itemsScroll | 1 | Number of **rSlider** items that will be scroll on each step change |
| infinity | true | **rSlider** has infinity loop as default |
| draggable | false | **rSlider** can be draggable *(except cases, when customAnimation === true)* |
| draggableSensitivity | 10 | Only for enabled **infinity** mode. You can set any value from 0 to 100. The more draggableSensitivity, the more difficult to drag the slider to the next step |
| autoPlay | false | Allow you slide change step on each 5000ms. Can be customized inside [rSliderItem] component. See examples below |
| onStepChange | (slider)=>{} | Callback, that fire right after **rSlider** step changes. Returns **rSlider** model as first argument |
| onDragEnd | (slider,draggable)=>{} | Callback, that fire right after **rSlider** drag event ends. Returns **rSlider** model as first argument and **draggable** state object as the second |
| stickOut | 0 | ... |


## Usage

- Controls
- Pagination
```js
    <RSlider name="example1">
        <RSliderItems>
            <div>item 1</div>
            <div>item 2</div>
        </RSliderItems>

        <RSliderArrowL />
        <RSliderArrowR />
        <RSliderPagination />
    </RSlider>
```
----

- **autoPlay**
- custom **itemsShow** count
- custom **itemsScroll** count
```js
    <RSlider name="example2"
             itemsShow="2"
             itemsScroll={2}>
        <RSliderItems>
            <div>item 1</div>
            <div>item 2</div>
        </RSliderItems>
    </RSlider>
```
----

- **draggable**
- custom **style**
- custom **className**
```js
    <RSlider name="example3"
             draggable
             className="example-class-name"
             style={{ background: 'lightgray' }}>
        <RSliderItems>
            <div>item 1</div>
            <div>item 2</div>
        </RSliderItems>
    </RSlider>
```
----


- custom animation from https://daneden.github.io/animate.css
- Controls
- on control click callbacks
```js
    <RSlider name="example4"
             customAnimation='fadeOutUp_fadeInDown'>
        <RSliderItems>
            <div>item 1</div>
            <div>item 2</div>
        </RSliderItems>
        <RSliderArrowL onClick={ ()=> console.log('arrowL clicked!') } />
        <RSliderArrowR onClick={ ()=> console.log('arrowR clicked!') } />
    </RSlider>
```
----


- development mode **on**
- media
    - from 0 to 499px default settings + **background: 'red'**
    - from 500 to 999 - itemsShow = 2, itemsScroll = 2,  background = 'green'
    - from 1000 - itemsShow = 3, itemsScroll = 3,  background = 'violet'

```js
<RSlider name="example5"
         devMode
         style={{ background: 'red' }}
         media={{
            [`*500`]: {
                itemsShow: 2,
                itemsScroll: 2,
                style: { background: 'green' }
            },
            ['500*1000']: {
                itemsShow: 3,
                itemsScroll: 3,
                style: { background: 'violet' }
            }
         }}>
    <RSliderItems style={{ textAlign: 'center' }}>
        <p>1</p>
        <p>2</p>
        <p>3</p>
    </RSliderItems>

    <RSliderArrowL />
    <RSliderArrowR />
</RSlider>
```
----

- autoPlay
    - custom **autoPlay** duration for slide 2, 3
- deep nested Arrow left control
```js
    <RSlider name="example6"
             autoPlay>
        <RSliderItems>
            <div>item 1</div>
            <div data-duration={1000}>item 2</div>
            <div data-duration={6700}>item 3</div>
        </RSliderItems>
        <div>
             <RSliderArrowL />
        </div>

    </RSlider>
```


## Tests
npm test

## Contributing
--