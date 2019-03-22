# etherpad-custom-colibris

New etherpad look used by the french non-profit [Colibris](https://colibris-lemouvement.org)

**Work distributed under (Apache License, Version 2.0)[https://www.apache.org/licenses/LICENSE-2.0.html]**  
Montserrat font under Julieta Ulanovsky Licensed under the SIL Open Font License, Version 1.1.

## Installation
 - copy the files from this repository to your etherpad `/src/static/skins/custom` folder
```
cd /path/to/etherpad-lite/src/static/skins
git clone https://github.com/lvitals/etherpad-custom-colibris.git custom
```
 - restart Etherpad (ex: if you use etherpad as a service `service etherpad-lite restart`)

## Customs
### Changing fonts
 - add your fonts in the `fonts` folder
 - change the `pad-editor.css` file first lines to reference your new font
 - change the `pad-editor.css` file titles properties 
 ```
h1,
h2,
h3,
h4,
h5,
h6 {
    font-family: <your font family>, sans-serif;
}
 ```

### Changing title colors
- change the `pad-editor.css` file titles properties 
 ```
h1,
h2 {
    color: <your color>;
}
 ```

### Changing home image
 - update the `images/fond.jpg` with your image 
 - if needed ajust the position of the inner box in `index.css`
