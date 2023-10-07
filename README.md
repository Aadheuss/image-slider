# aadheuss-image-slider

## How to install and use aadheuss-image-slider

`npm install aadheuss-image-slider`

### on you html file:

- Add "img-slider-container" as a main container.
- inside "img-slider-container" add a child with class of "img-slider".
- Make a child with a class of "slider-item" inside the "img-slider".
- Put img element inside the "slider-item".
- Add optional caption item with a class of "caption-text" for the image description.

Example:

```
 <div class="img-slider-container">
    <div class="img-slider">
      <div class="slider-item">
        <img src="" alt="">
        <div class="caption-text">Enter description here</div>
      </div>
      <div class="slider-item">
        <img
          src=""
          alt="">
        <div class="caption-text">Enter description her</div>
      </div>
      <div class="slider-item">
        <img
          src=""
          alt="">
        <div class="caption-text">Enter description here</div>
      </div>
    </div>
  </div>
```

### on your javascript file

```
import activateImgSlider from 'aadheuss-image-slider/image-slider';
import 'aadheuss-image-slider/image-slider.css';

// Select the slider container
const imageSlider = document.querySelector(".img-slider-container");

// Use the function
activateImgSlider(imageSlider);
```

### on the css file set the container width and height if needed

```
.img-slider-container {
  width: 100vh;
  height: 500px;
}
```

### aadheuss-image-slider use the following css style

```
:root {
  --nav-btn-size-x: clamp(2.75rem, 3rem, 6vw);
  --nav-btn-size-y: clamp(4.25rem, 4.5rem, 9vw);
  --nav-btn-padding-y: 0.8em;
  --nav-text-padding: 0.75em;
  --nav-btn-radius: 6px;
  --link-btn-size: clamp(1rem, 1.25rem, 2.5vw);
  --link-btn-color: #b0b0b0;
  --link-btn-hover-color: #585858;
   --link-btn-active-color: #585858;
}
```

- **nav-btn-size-x** used as the horizontal size for navigation previous and next buttons.
- **nav-btn-size-y** used as the the vertical size for navigation previous and next buttons.
- **nav-btn-padding-y** used for the padding size of the dot navigation container.
- **nav-text-padding** used for the padding size of the caption text.
- **nav-btn-radius** used as the radius for the navigation previous and next buttons.
- **link-btn-size** used as the size of the dot buttons.
- **link-btn-color** used as the background color of the dot buttons.
- **link-btn-hover-color** used as the background color of the dot buttons on hover.\
- **link-btn-active-color** used as the background color of the dot buttons when it is on view.
