//Select a paragraph and a button
var tripInfoButton = document.querySelector(".trip-info");
var dailyBudget = document.querySelector(".daily-budget");
//Write a function to get user input
var tripInfo = function () {
  var totalBudget = Number(prompt("What is your total budget?"));
  var accommodation = Number(prompt("What are your accommodation costs?"));
  var numDays = Number(prompt("How many days will your trip last?"));

  calculateDailyBudget(totalBudget, accommodation, numDays);
};

var calculateDailyBudget = function (totalBudget, accommodation, numDays) {
  var daily = ((totalBudget - accommodation) / numDays).toFixed(2);
  dailyBudget.innerText = `You can spend $${daily} a day on food and fun`;
};

tripInfoButton.addEventListener("click", tripInfo);
