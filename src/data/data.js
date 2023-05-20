// function generateRandomObject() {
//   var usernames = ["bharath", "aravind", "johndoe", "maryjones"];
//   var domains = ["gmail.com", "yahoo.com", "hotmail.com"];
//   var passwordChars =
//     "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

//   function getRandomElement(array) {
//     return array[Math.floor(Math.random() * array.length)];
//   }

//   function generateRandomPassword(length) {
//     var password = "";
//     for (var i = 0; i < length; i++) {
//       password += passwordChars.charAt(
//         Math.floor(Math.random() * passwordChars.length)
//       );
//     }
//     return password;
//   }

//   const usersList = [];

//   for (var i = 0; i < 30; i++) {
//     var username = getRandomElement(usernames);
//     var domain = getRandomElement(domains);
//     var email = username + "@" + domain;
//     var password = generateRandomPassword(8); // Change the length as needed

//     var object = {
//       userName: username,
//       email: email,
//       password: password,
//     };

//     usersList.push(object);
//   }

//   return usersList;
// }

// const usersList = generateRandomObject();
const usersList = [
  {
    userName: "Sakthivel",
    email: "sakthivel@hotmail.com",
    password: "Sakthivel@123",
    id: 1,
    tasks: [],
  },
  {
    userName: "Bharath",
    email: "bharath@yahoo.com",
    password: "Bharath@123",
    id: 2,
    tasks: [],
  },
  {
    userName: "Raghuram",
    email: "raghuram@gmail.com",
    password: "Raghuram@123",
    id: 3,
    tasks: [],
  },
  {
    userName: "Aravinth",
    email: "aravinth@gmail.com",
    password: "Aravinth@123",
    id: 4,
    tasks: [],
  },
  {
    userName: "Elavarasan",
    email: "elavarasan@hotmail.com",
    password: "Elavarasan@123",
    id: 5,
    tasks: [],
  },
  {
    userName: "Bavi",
    email: "bavi@gmail.com",
    password: "Bavi@123",
    id: 6,
    tasks: [],
  },
  {
    userName: "Akshaya",
    email: "akshaya@yahoo.com",
    password: "Akshaya@123",
    id: 7,
    tasks: [],
  },
  {
    userName: "Susi",
    email: "susi@hotmail.com",
    password: "Susi@123",
    id: 8,
    tasks: [],
  },
  {
    userName: "Srinivasan",
    email: "srinivasan@yahoo.com",
    password: "Srinivasan@123",
    id: 9,
    tasks: [],
  },
  {
    userName: "Tamilmani",
    email: "tamilmani@gmail.com",
    password: "Tamilmani@123",
    id: 10,
    tasks: [],
  },
  {
    userName: "Sabri",
    email: "sabri@yahoo.com",
    password: "Sabri@123",
    id: 11,
    tasks: [],
  },
  {
    userName: "Balamurugam",
    email: "balamurugam@yahoo.com",
    password: "Balamurugam@123",
    id: 12,
    tasks: [],
  },
  {
    userName: "Morton",
    email: "morton@yahoo.com",
    password: "Morton@123",
    id: 14,
    tasks: [],
  },
  {
    userName: "Kothai",
    email: "kothai@yahoo.com",
    password: "Kothai@123",
    id: 15,
    tasks: [],
  },
  {
    userName: "Mandaginy",
    email: "mandaginy@gmail.com",
    password: "Mandaginy@123",
    id: 16,
    tasks: [],
  },
  {
    userName: "Mani",
    email: "mani@yahoo.com",
    password: "Mani@123",
    id: 17,
    tasks: [],
  },
  {
    userName: "Udhaya",
    email: "udhaya@gmail.com",
    password: "Udhaya@123",
    id: 18,
    tasks: [],
  },
  {
    userName: "Ragul",
    email: "ragul@yahoo.com",
    password: "Ragul@123",
    id: 19,
    tasks: [],
  },
  {
    userName: "Vickey",
    email: "vickey@gmail.com",
    password: "Vickey@123",
    id: 20,
    tasks: [],
  },
  {
    userName: "Siva",
    email: "siva@yahoo.com",
    password: "Siva@123",
    id: 21,
    tasks: [],
  },
  {
    userName: "Karthick",
    email: "karthick@yahoo.com",
    password: "Karthick@123",
    id: 22,
    tasks: [],
  },
  {
    userName: "Swathy",
    email: "swathy@hotmail.com",
    password: "Swathy@123",
    id: 23,
    tasks: [],
  },
  {
    userName: "Arunkumar",
    email: "arunkumar@gmail.com",
    password: "Arunkumar@123",
    id: 24,
    tasks: [],
  },
  {
    userName: "Swetha",
    email: "swetha@hotmail.com",
    password: "Swetha@123",
    id: 25,
    tasks: [],
  },
  {
    userName: "Brindha",
    email: "brindha@yahoo.com",
    password: "Brindha@123",
    id: 26,
    tasks: [],
  },
  {
    userName: "Sachin",
    email: "Sachin@gmail.com",
    password: "Sachin@123",
    id: 27,
    tasks: [],
  },
];
console.log(usersList, "usersList");
export default usersList;
