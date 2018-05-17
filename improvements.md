# Improvements
This is a list of what I would improve for the code and other enhancements given more time:
* Deploy application to Internet
  * Create a webpack config for production
  * Work on code splitting for production config and production version of `bundle.js`
  * Deploy to Heroku
*  Use [Enzyme](http://airbnb.io/enzyme/) to test fully rendered components
   * Using `mount()` helps in testing functions located in lifecycle methods such as `componentDidMount` and `componentDidUpdate` to ensure the correct output is rendered at the correct time
    * Would like to use this to test `SiteTemplate.js`
* (feature) Add map for all the locations
* Rotate pictures in correct orientations :)