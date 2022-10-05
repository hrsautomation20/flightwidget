const tableBody = document.getElementById('table-body');

let flights = [
  {
    time: '08:11',
    destination: 'Cancun',
    flight: 'HR 203',
    gate: 'A 01',
    remarks: 'ON TIME',
  },
  {
    time: '14:11',
    destination: 'London',
    flight: 'HR 204',
    gate: 'A 01',
    remarks: 'ON TIME',
  },
  {
    time: '05:11',
    destination: 'India',
    flight: 'HR 205',
    gate: 'A 01',
    remarks: 'CANCELLED',
  },
  {
    time: '16:11',
    destination: 'Tokyo',
    flight: 'HR 206',
    gate: 'A 01',
    remarks: 'ON TIME',
  },
  {
    time: '15:11',
    destination: 'Frankfurt',
    flight: 'HR 207',
    gate: 'A 01',
    remarks: 'DELAYED',
  },
];

const destinations = [
  'TOKYO',
  'FRANKFURT',
  'DUBAI',
  'LONDON',
  'OMAN',
  'BEIRUT',
];
const remarks = ['ON TIME', 'DELAYED', 'CANCELLED'];
let hour = 15;

function populateTable() {
  for (const flight of flights) {
    const tableRow = document.createElement('tr');
    for (const flightDetail in flight) {
      const tableCell = document.createElement('td');
      //console.log('flightDetail', flightDetail);
      const word = Array.from(flight[flightDetail]);
      for (const [index, letter] of word.entries()) {
        const letterElement = document.createElement('div');

        setTimeout(() => {
          letterElement.classList.add('flip');
          letterElement.textContent = letter;
          tableCell.append(letterElement);
        }, 100 * index);
      }
      //tableCell.innerText = flight[flightDetail];
      tableRow.append(tableCell);
    }
    tableBody.append(tableRow);
  }
}

populateTable();

function generateRandomLetter() {
  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  return alphabet.charAt(Math.floor(Math.random() * alphabet.length));
}

function generateRandomNumber(maxNumber) {
  const numbers = '0123456789';
  if (maxNumber) {
    const newNumbers = numbers.slice(0, maxNumber + 1);
    return newNumbers.charAt(Math.floor(Math.random() * newNumbers.length));
  }
  return numbers.charAt(Math.floor(Math.random() * numbers.length));
}

function generateTime() {
  let displayHour = hour;
  if (hour < 24) {
    hour++;
  }
  if (hour >= 24) {
    hour = 1;
    displayHour = hour;
  }
  if (hour < 10) {
    displayHour = '0' + hour;
  }
  return displayHour + ':' + generateRandomNumber(5) + generateRandomNumber();
}

function shuffleUp() {
  flights.shift();
  flights.push({
    time: generateTime(),
    destination: destinations[Math.floor(Math.random() * destinations.length)],
    flight:
      generateRandomLetter() +
      generateRandomLetter() +
      ' ' +
      generateRandomNumber() +
      generateRandomNumber(),
    gate:
      generateRandomLetter() +
      ' ' +
      generateRandomNumber() +
      generateRandomNumber(),
    remarks: remarks[Math.floor(Math.random() * remarks.length)],
  });
  tableBody.textContent = '';
  populateTable();
}

setInterval(shuffleUp, 5000);
