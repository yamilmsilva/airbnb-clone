# Airbnb Clone

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Table of contents
- [Overview]()
  - [Requirements](#screenshot)
  - [Screenshot](#screenshot)
  - [Links](#links)
  - [Getting Started with Create React App](#getting-started-with-create-react-app)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I Learnt](#what-i-learnt)
- [Author](#author)

## Overview
### Requirements

- Data array in a separate .js file
    - Title, description, price, cover image, rating, review count, location, open spots
- Use .map() and props
- Style & polished
- Mobile designed


### Screenshot
![localhost_3000_(iPhone 12 Pro)](https://github.com/yamilmsilva/airbnb-clone/assets/54333102/cd727511-4bff-49e2-9b99-cf4fff61b282)


### Links
- Live Site URL: 

### Getting Started with Create React App
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## My process
### Built with

- Semantic HTML5 markup
- CSS custom properties
- JavaScript
- React.JS
- Flexbox

### What I Learnt

```javascript
// required to display local imgs in src folder
<img src={require(`../images/${props.img}`)} />
```

```javascript
// badgeText has no value because I need in the conditional rendering

let badgeText;
if (props.openSpots === 0) {
  badgeText = "SOLD OUT";
} else if (props.location === "Online") {
  badgeText = "ONLINE";
}

// Conditional rendering
// If badgeText has something assigned (means badgeText is truthy) card--badge div will be displayed corrisponding badgeText

{
  badgeText && <div className="card--badge">{badgeText}</div>;
}
```



## Author
- Yamil Silva

## Acknowledgements

- [Scrimba](https://scrimba.com)
