// Replace after deploying Google Apps Script. Example: https://script.google.com/macros/s/XXXX/exec
const API_URL = "https://script.google.com/macros/s/AKfycbw-B1zIZPXB4-T3robvGH19FhBMXKR-nljNXOzdblE8dLyn10Q8qnOaoLIhtGlwvGIZGA/exec";
const LOCAL_DEMO_MODE = API_URL.includes("PASTE_YOUR");
const MEMBERS = [
  { name: "JC", pin: "1111", admin: false },
  { name: "Niala", pin: "2222", admin: false },
  { name: "Justin", pin: "3333", admin: true },
  { name: "Gervan", pin: "4444", admin: false },
  { name: "Ellie", pin: "5555", admin: false },
  { name: "Gabe", pin: "6666", admin: false },
  { name: "Jerell", pin: "7777", admin: false },
  { name: "Nadine", pin: "8888", admin: false }
];
