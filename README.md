# RPHtmlElement
Here is RPHtmlElement for Fast HTML Element in English. You can use it for layout or quick coding.

# Instalation

```bash
git clone  https://github.com/jules35/RPHmlElement.git
```

## Usage

> mat-button 
```html
<mat-button></mat-button>
```
* color attribute
  * orange
  * blue
  * green
  * light

Example with blue mat-button
```html
<mat-button color="blue"></mat-button>
```

> mat-float
```html
<mat-float></mat-float>
```
* bottom
* top
* left
* right
* logo
    * url
* href
    * url
* target 
* click
    * javascript code

By default, the floating button is at the bottom left and has no event.
```html
<mat-float href="https//google.com/" target  logo="https://myLogo.com/logo.jpeg"
top
left
></mat-float>
```      
> mat-modal
```html
<mat-modal></mat-modal>
```
* active
```html
<mat-modal active></mat-modal>
```
> mat-card

The height is responsive so you can paste any type of element size
```html
<mat-card></mat-card>
```

> mat-card-r

The height of the mat-card-r is not automatically resized, so you need to specify the type of height you want.
```html
<mat-card-r></mat-card-r>
```
* case
    * int (0-4)

> mat-item

```html
<mat-item></mat-item>
```
> mat-image

Mat-Image uses IntersectionObserver to optimize the page load

* src
  * url

```html
<mat-image src="url"></mat-image>
```

> mat-live

Mat-live element is a live element , his id is "mat-l" + mat-live.length by default , so wen the element change an event is emit to document . You can change this default id by pasting attribute tag .

```html
<mat-live></mat-live>
```
* tag
    * string 
```javascript
document.addEventListenner('mat-live-1',e=>{
    console.log(e);
})
```

> mat-dots
* dropdown
    * boolean (false)
* dropdown-el
    * Object (JSON.stringify)

 **Your Array must be an Object JSON !**
```html
<mat-dots dropdown="true" dropdown-el='{ "key" : "value" }'></mat-dots>
```
```javascript
    const key = document.getElementById("key-li-mat");
    key.addEventListenner('click',()=>{
        console.log('Key click !');
    })
```
> mat-dropdown

Simple dropdown element
```html
<mat-dropdown title-text="Titre of dropdown">
    <p>hidden content</p>         
</mat-dropdown>
```

## Contributing

- add new RPElement
- create live element 
- loader element
- promise ajax auto element

## License
[MIT](https://choosealicense.com/licenses/mit/)
