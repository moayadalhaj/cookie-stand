'use strict';

let table = document.getElementById('salesData');
let workingHoures = ['6 am', '7 am', '8 am', '9 am', '10 am', '11 am', '12 am', '1 pm', '2 pm', '3 pm', '4 pm', '5 pm', '6 pm', '7 pm', 'Daily Location Total'];
let hourlyTotalAmount = [];
function Location(name, minCustomers, maxCustomers, avgCookie) {
  this.name = name;
  this.minCustomers = minCustomers;
  this.maxCustomers = maxCustomers;
  this.avgCookie = avgCookie;
}

let tableLocation = document.createElement('table');
function renderHeaderRow() {
  table.appendChild(tableLocation);
  let headRowHours = document.createElement('tr');
  tableLocation.appendChild(headRowHours);
  let headHouers1 = document.createElement('th');
  headHouers1.textContent = ' ';
  headRowHours.appendChild(headHouers1);
  for (let i = 0; i < workingHoures.length; i++) {
    let headHouers = document.createElement('th');
    headHouers.textContent = workingHoures[i];
    headRowHours.appendChild(headHouers);
  }
}
renderHeaderRow();

Location.prototype.renderTableBody = function () {
  let total = 0;
  let headRowLocation = document.createElement('tr');
  tableLocation.appendChild(headRowLocation);
  let headRowLocation1 = document.createElement('td');
  headRowLocation1.textContent = this.name;
  headRowLocation.appendChild(headRowLocation1);
  for (let i = 0; i < workingHoures.length; i++) {
    let numberCustomers = getRandomNumber(this.minCustomers, this.maxCustomers);
    let amountCookiesHour = Math.ceil(numberCustomers * this.avgCookie);
    let headLocation = document.createElement('td');
    if (i === workingHoures.length - 1) {
      headLocation.textContent = total;
      headRowLocation.appendChild(headLocation);
      hourlyTotalAmount.push(total);
      break;
    }
    headLocation.textContent = amountCookiesHour;
    headRowLocation.appendChild(headLocation);
    total += amountCookiesHour;
    hourlyTotalAmount.push(amountCookiesHour);
  }
};

function renderFooterRow() {
  table.appendChild(tableLocation);
  let footerRowLocation = document.createElement('tr');
  tableLocation.appendChild(footerRowLocation);
  let footerRowLocation1 = document.createElement('th');
  footerRowLocation1.textContent = 'Totals';
  footerRowLocation.appendChild(footerRowLocation1);
  for (let i = 0; i < workingHoures.length; i++) {
    let footerLocation = document.createElement('th');
    footerLocation.textContent = hourlyTotalAmount[i] + hourlyTotalAmount[i + (14 + 1)] + hourlyTotalAmount[i + (14 * 2) + 2] + hourlyTotalAmount[i + (14 * 3) + 3] + hourlyTotalAmount[i + (14 * 4) + 4];
    footerRowLocation.appendChild(footerLocation);
  }
}

let seattle = new Location('Seattle', 23, 65, 6.3);
let tokyo = new Location('Tokyo', 3, 24, 1.2);
let dubai = new Location('Dubai', 11, 38, 3.7);
let paris = new Location('Paris', 20, 38, 2.3);
let lima = new Location('Lima', 2, 16, 4.6);

seattle.renderTableBody();
tokyo.renderTableBody();
dubai.renderTableBody();
paris.renderTableBody();
lima.renderTableBody();

renderFooterRow();

function getRandomNumber(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
}

