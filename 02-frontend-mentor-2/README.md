# 🐾 Frontend Mentor - Loopstudios landing page solution

This is a solution to the [Loopstudios landing page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/loopstudios-landing-page-N88J5Onjw). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 


## 📸 Screenshot

![desktop screenshot](./screenshot.png)


## 🔗 Links

- Live Site URL: [Visit online](http://blahking.github.io/pages/02-frontend-mentor-2)


## ✍️ What I learned 

### grid layout
```css
.footer {
  padding: 30px 10%;
  grid-template-columns: 1fr 1fr;
  grid-template-areas:
    "A B"
    "C D";
  align-items: center;
}

.footer h2 {
  grid-area: A;
  justify-self: flex-start;
}

.sitemap {
  grid-area: C;
  justify-self: flex-start;
  flex-direction: row;
  width: 500px;
  justify-content: space-between;
}

.social-links {
  grid-area: B;
  justify-self: end;
}

.copy-right {
  grid-area: D;
  justify-self: end;
}
```

```css
.creations {
  grid-template-areas:
    "A A A B"
    "C C C C";
  row-gap: 40px;
}

.creations-text {
  grid-area: A;
  justify-self: flex-start;
}

.creation-btn {
  grid-area: B;
}

.grid-container {
  grid-area: C;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 40px;
  row-gap: 40px;
}
```

### hover effect
```css
.footer a {
  position: relative;
}

.footer a::after {
  content: "";
  position: absolute;
  bottom: -2px;
  left: 50%;
  right: 50%;
  height: 2px;
  width: 0px;
  background-color: white;
  transition: all 0.5s;
}

.footer a:hover::after {
  left: 0;
  right: 0;
  width: 100%;
}
```

### hover an element, change its next brother element
```css
.grid-item .mask:hover {
  opacity: 0.6;
}

.grid-item .mask:hover + p {
  color: black;
}
```