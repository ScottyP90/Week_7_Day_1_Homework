const PubSub = require('../helpers/pub_sub.js');

const ResultView = function() {

};

ResultView.prototype.bindEvents = function() {
  PubSub.subscribe('PrimeChecker:result-calculated', (event) => {
    const numberChecked = event.detail;
    this.displayResult(numberChecked)
  })
};

ResultView.prototype.displayResult = function(result) {
  const resultElement = document.querySelector('#result');
  resultElement.textContent = `Your number is ${result}`
}

module.exports = ResultView;
