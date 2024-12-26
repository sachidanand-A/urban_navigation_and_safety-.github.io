// Get the navigation element
const navigation = document.querySelector(".primary-navigation");

// Get the height of the navigation bar
const navigationHeight = navigation.offsetHeight;

// Set the scroll-padding CSS variable dynamically
document.documentElement.style.setProperty(
  "--scroll-padding",
  navigationHeight + "px"
);

