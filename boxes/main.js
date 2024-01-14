let boxes = document.querySelectorAll(".box");
let styles = [
  {
    width: "200px",
    height: "200px",
    backgroundColor: "red",
    borderRadius: "50%",
  },
  {
    width: "200px",
    height: "200px",
    backgroundColor: "yellow",
    borderRadius: "20px",
  },
  {
    width: "200px",
    height: "200px",
    backgroundColor: "blueviolet",
    borderRadius: "50%",
  },
  {
    width: "200px",
    height: "200px",
    backgroundColor: "green",
    borderRadius: "30px",
  },
  {
    width: "200px",
    height: "200px",
    backgroundColor: "grey",
    borderRadius: "10px",
  },
];
for (let i = 0; i < boxes.length; i++) {
  boxes[i].style.width = styles[i].width;
  boxes[i].style.height = styles[i].height;
  boxes[i].style.backgroundColor = styles[i].backgroundColor;
  boxes[i].style.borderRadius = styles[i].borderRadius;
}
