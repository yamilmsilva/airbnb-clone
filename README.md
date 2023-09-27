# Airbnb Clone

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).


## Overview
### Requirements
- Data array in a separate .js file
      - Title, description, price, cover image, rating, review count, location, open spots
- Use .map() and props
- Style & polished
- Mobile designed

### Screenshot

![](src/screenshot/localhost_3000_(iPhone 12 Pro).png)

###Links

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

// required to display local imgs in src folder
<img src={require(`../images/${props.img}`)} />


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




## Author
- Yamil Silva

## Acknowledgements

- [Scrimba](https://scrimba.com)
