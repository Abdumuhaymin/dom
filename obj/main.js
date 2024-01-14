let items = document.querySelectorAll(".item");
let arr = [
  {
    name: "men",
    price: 10.5,
  },
  {
    name: "o'zim",
    price: 5,
  },
  {
    name: "Abdumuhaymin",
    price: 18,
  },
  {
    name: "sen",
    price: 22,
  },
  {
    name: "kimdur",
    price: 3,
  },
];
for (let i = 0; i < items.length; i++) {
  items[i].textContent = Object.keys(arr[i])[0] + "  " + Object.keys(arr[i])[1];
}
setTimeout(() => {
  for (let i = 0; i < items.length; i++) {
    items[i].textContent =
      Object.values(arr[i])[0] + "  " + Object.values(arr[i])[1];
  }
}, 5000);
