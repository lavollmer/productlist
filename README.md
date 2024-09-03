# Product List with Cart Website Laura Dev

This project involved working on a product list and cart functionality with ReactJS, Vite and TailwindCSS. Throughout the process, I worked on various key features such a cart functionality component, order confirmation, a add to cart function with correct quantities and much more.

## Table of contents

- [Overview](#overview)
  - [Screenshots](#screenshots)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

The overall vision of the project was to build out this product list project that includes a functional cart and get it looking as close to the design as possible.

Your users should be able to:
- Add items to the cart and remove them
- Increase/decrease the number of items in the cart
- See an order confirmation modal when they click "Confirm Order"
- Reset their selections when they click "Start New Order"
- Navigate the whole project and perform all actions using only their keyboard
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

## Screenshots

<p style="font-size:20px;">Desktop Version:</p>


<p style="font-size:20px;">Desktop Version Dark Mode:</p>


<p style="font-size:20px;">Mobile Version:</p>


## Links

- Live Site URL: [Product List Website Laura Dev]()

## My Process

This project began with the initial setup, which included creating a GitHub repository, initializing a Vite project with ReactJS, and integrating TailwindCSS. I configured TailwindCSS to incorporate the project's design specifications, such as fonts and colors. After ensuring the basic elements were operational through an initial commit, I proceeded to remove the default ReactJS template content to start with a clean slate. 

My approach to working on this project was to start from the top and work my way down the design page. I started by reviewing the provided design layout and style guide while using my learnings from other projects. This beginning planning phase helped me strategize the implementation of key features, including hover states, a mobile-responsive layout, and cart functionality. The decision to prioritize the desktop layout and navigation set the process of building out the website. I started with creating the layout for the title, the reusable product card components and working with props.

The construction of the desktop layout was the first piece, where I focused on replicating the design's key navigation elements: replicating the correct style, creating a reusable product component that would keep everything uniform, adding the pictures and icons. 

I started the development on the count button, add to cart button, and the cart component functionalities. This phase presented challenges as it involved deepening my understanding of props. My first task was to refine the count button, ensuring it accurately responded to both increment (+) and decrement (-) actions as well as the Add To Cart button. Subsequently, I added a cart confirmation section that would populate the number of items, price and total. Integrating the props within the application, especially in terms of passing specific data related to quantities and type of food, was particularly challenging. Through this process, I explored various strategies for managing state, from global to local scopes.

The final touches to the project involved ensuring compliance with the design requirements.  Deploying the project on Netlify was the culmination of my efforts, providing a live website of my work.

## Built with

- [React](https://reactjs.org/) - JS library
- Tailwind CSS
- Google Fonts
- Tailwind CSS Animation
- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow

## What I learned

In this project, I learned about a lot of various items from design to props state management.

Here are several things I learned throughout this project:

1. **_Conditional Rendering_** - I explored conditional rendering with display of items based on quantity count. If the quantity was greater than 0, then I would hide the Add to Cart button and show the items.
2. **_Props_** - I reviewed my understanding of passing props and continued to grow upon my knowledge. I wanted to pass the quantity as a prop to the App component as well as the Cart component. Additionally, I learned more about declaring variables while passing it as props - the quantity could not be declared more than once in the same scope.
3. **_Grid Container_** - I wanted the products to display in a 3x3 grid on desktop screens, so I was able to use CSS Grid. I used the utility classes provided by Tailwind and updated the container div with responsive behavior.


## Continued development

I will continue to learn more about TailwindCSS, ReactJS and updating my process of building a website. I will continue creating original projects, frontend mentor challenges and much more.

My next goal with this project is to change the domain from my old portfolio website and add it to this new one. Additionally, I want to keep creating more projects to add to this portfolio and also make the website more interactive.

## Useful resources

- [Red Hat Google Font](https://fonts.google.com/specimen/Red+Hat+Text) - Design called for this font in the project.


## Author

- Website - [Laura V](www.lauradeveloper.com)
- Frontend Mentor - [@lavollmer](https://www.frontendmentor.io/profile/lavollmer)
- Github - [@lavollmer](https://github.com/lavollmer)