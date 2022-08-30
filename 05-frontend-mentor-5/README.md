# 🐾 Frontend Mentor - FAQ accordion card solution

This is a solution to the [FAQ accordion card challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/faq-accordion-card-XlyjD0Oam). Frontend Mentor challenges help you improve your coding skills by building realistic projects.


## 📸 Screenshot

![desktop screenshot](./screenshot.png)


## 🔗 Links

- Live Site URL: [Visit online](http://blahking.github.io/pages/05-frontend-mentor-5)


## ✍️ What I learned 

### linear-gradient()

```css
.container {
  background: linear-gradient(hsl(273, 75%, 66%), hsl(240, 73%, 65%));
}
```

### img position & background-*
```css
/* faq img style */
.faq-img {
  position: relative;
  background-image: url(./images/bg-pattern-desktop.svg);
  background-size: 70%;
  background-position: center bottom 0;
  background-repeat: no-repeat;
  padding-bottom: 100px;
}

.woman-img {
  width: 70%;
  display: block;
  position: absolute;
  left: 50%;
  top: -20%;
  transform: translate(-50%, -50%);
}

.box-img {
  width: 20%;
  position: absolute;
  left: 15%;
  transform: translateY(-50%);
}
```


### DOM
```js
const faqEl = titleEl.parentElement;
const textEl = titleEl.nextElementSibling;
```