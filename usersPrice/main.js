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
  if (arr[i].price > 10) {
    items[i].textContent = arr[i].name + "=>" + arr[i].price;
  } else {
    items[i].textContent = arr[i].name + "=>" + "mablag' yetarli emas";
  }
}
