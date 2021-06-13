'use strict';

let list = document.getElementById('seattleLocation');
let seattle = {
  minCustomers: 23,
  maxCustomers: 65,
  avgCookie: 6.3,
  total: 0,
  workingHoures: ['6 am', '7 am', '8 am', '9 am', '10 am', '11 am', '12 am', '1 pm', '2 pm', '3 pm', '4 pm', '5 pm', '6 pm', '7 pm'],
  amountCookies: function () {
    let listLocation = document.createElement('h3');
    listLocation.textContent = 'Seattle';
    list.appendChild(listLocation);
    let listElement = document.createElement('ul');
    list.appendChild(listElement);
    for (let i = 0; i < this.workingHoures.length; i++) {
      let listItem = document.createElement('li');
      listElement.appendChild(listItem);
      let listItem1 = getRandomNumber(this.minCustomers, this.maxCustomers);
      let amountCookiesHour = listItem1 * this.avgCookie;
      this.total = this.total + amountCookiesHour;
      listItem.textContent = `${this.workingHoures[i]}: ${Math.floor(amountCookiesHour)} cookies`;
    }
    let listTotalElement = document.createElement('li');
    listTotalElement.textContent = `Total: ${Math.floor(this.total)} cookies`;
    listElement.appendChild(listTotalElement);
  }
};
seattle.amountCookies();

list = document.getElementById('tokyoLocation');
let tokyo = {
  minCustomers: 3,
  maxCustomers: 24,
  avgCookie: 1.2,
  total: 0,
  workingHoures: ['6 am', '7 am', '8 am', '9 am', '10 am', '11 am', '12 am', '1 pm', '2 pm', '3 pm', '4 pm', '5 pm', '6 pm', '7 pm'],
  amountCookies: function () {
    let listLocation = document.createElement('h3');
    listLocation.textContent = 'Tokyo';
    list.appendChild(listLocation);
    let listElement = document.createElement('ul');
    list.appendChild(listElement);
    for (let i = 0; i < this.workingHoures.length; i++) {
      let listItem = document.createElement('li');
      listElement.appendChild(listItem);
      let listItem1 = getRandomNumber(this.minCustomers, this.maxCustomers);
      let amountCookiesHour = listItem1 * this.avgCookie;
      this.total = this.total + amountCookiesHour;
      listItem.textContent = `${this.workingHoures[i]}: ${Math.floor(amountCookiesHour)} cookies`;
    }
    let listTotalElement = document.createElement('li');
    listTotalElement.textContent = `Total: ${Math.floor(this.total)} cookies`;
    listElement.appendChild(listTotalElement);
  }
};

tokyo.amountCookies();

list = document.getElementById('dubaiLocation');
let dubai = {
  minCustomers: 11,
  maxCustomers: 38,
  avgCookie: 3.7,
  total: 0,
  workingHoures: ['6 am', '7 am', '8 am', '9 am', '10 am', '11 am', '12 am', '1 pm', '2 pm', '3 pm', '4 pm', '5 pm', '6 pm', '7 pm'],
  amountCookies: function () {
    let listLocation = document.createElement('h3');
    listLocation.textContent = 'Dubai';
    list.appendChild(listLocation);
    let listElement = document.createElement('ul');
    list.appendChild(listElement);
    for (let i = 0; i < this.workingHoures.length; i++) {
      let listItem = document.createElement('li');
      listElement.appendChild(listItem);
      let listItem1 = getRandomNumber(this.minCustomers, this.maxCustomers);
      let amountCookiesHour = listItem1 * this.avgCookie;
      this.total = this.total + amountCookiesHour;
      listItem.textContent = `${this.workingHoures[i]}: ${Math.floor(amountCookiesHour)} cookies`;
    }
    let listTotalElement = document.createElement('li');
    listTotalElement.textContent = `Total: ${Math.floor(this.total)} cookies`;
    listElement.appendChild(listTotalElement);
  }
};

dubai.amountCookies();

list = document.getElementById('parisLocation');
let paris = {
  minCustomers: 11,
  maxCustomers: 38,
  avgCookie: 3.7,
  total: 0,
  workingHoures: ['6 am', '7 am', '8 am', '9 am', '10 am', '11 am', '12 am', '1 pm', '2 pm', '3 pm', '4 pm', '5 pm', '6 pm', '7 pm'],
  amountCookies: function () {
    let listLocation = document.createElement('h3');
    listLocation.textContent = 'Paris';
    list.appendChild(listLocation);
    let listElement = document.createElement('ul');
    list.appendChild(listElement);
    for (let i = 0; i < this.workingHoures.length; i++) {
      let listItem = document.createElement('li');
      listElement.appendChild(listItem);
      let listItem1 = getRandomNumber(this.minCustomers, this.maxCustomers);
      let amountCookiesHour = listItem1 * this.avgCookie;
      this.total = this.total + amountCookiesHour;
      listItem.textContent = `${this.workingHoures[i]}: ${Math.floor(amountCookiesHour)} cookies`;
    }
    let listTotalElement = document.createElement('li');
    listTotalElement.textContent = `Total: ${Math.floor(this.total)} cookies`;
    listElement.appendChild(listTotalElement);
  }
};

paris.amountCookies();

list = document.getElementById('limaLocation');
let lima = {
  minCustomers: 11,
  maxCustomers: 38,
  avgCookie: 3.7,
  total: 0,
  workingHoures: ['6 am', '7 am', '8 am', '9 am', '10 am', '11 am', '12 am', '1 pm', '2 pm', '3 pm', '4 pm', '5 pm', '6 pm', '7 pm'],
  amountCookies: function () {
    let listLocation = document.createElement('h3');
    listLocation.textContent = 'Lima';
    list.appendChild(listLocation);
    let listElement = document.createElement('ul');
    list.appendChild(listElement);
    for (let i = 0; i < this.workingHoures.length; i++) {
      let listItem = document.createElement('li');
      listElement.appendChild(listItem);
      let listItem1 = getRandomNumber(this.minCustomers, this.maxCustomers);
      let amountCookiesHour = listItem1 * this.avgCookie;
      this.total = this.total + amountCookiesHour;
      listItem.textContent = `${this.workingHoures[i]}: ${Math.floor(amountCookiesHour)} cookies`;
    }
    let listTotalElement = document.createElement('li');
    listTotalElement.textContent = `Total: ${Math.floor(this.total)} cookies`;
    listElement.appendChild(listTotalElement);
  }
};

lima.amountCookies();
function getRandomNumber(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
}
