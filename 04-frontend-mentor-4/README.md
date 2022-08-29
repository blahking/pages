# 🐾 Frontend Mentor - Fylo landing page with two column layout solution

This is a solution to the [Fylo landing page with two column layout challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/fylo-landing-page-with-two-column-layout-5ca5ef041e82137ec91a50f5). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 


## 📸 Screenshot

![desktop screenshot](./screenshot.png)


## 🔗 Links

- Live Site URL: [Visit online](http://blahking.github.io/pages/04-frontend-mentor-4)


## ✍️ What I learned 

### Organize common styles
```css
/* common class styles */
.title {
  font-family: "Raleway", sans-serif;
  font-weight: 700;
  margin: 20px 0;
}

.text {
  margin-bottom: 20px;
}

.grid-container {
  padding: 50px 8%;
  display: grid;
  grid-template-columns: 1fr;
}
```

```css
@media (min-width: 1200px) {
  /* common class styles */
  .text {
    font-size: 18px;
  }

  .grid-container {
    grid-template-columns: 1fr 1fr;
    grid-template-areas: "left right";
    align-items: center;
    column-gap: 30px;
  }

  .img-container {
    grid-area: right;
  }

  .content-container {
    grid-area: left;
    text-align: left;
  }
}
```


