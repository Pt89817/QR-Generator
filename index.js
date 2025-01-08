const myinput = document.getElementById("myinput");
const mybtn = document.getElementById("mybtn");
const myimg = document.getElementById("myimg");
mybtn.addEventListener("click", function () {
  const my = myinput.value;
  if (my === "") {
    alert("can't be NULL !");
  } else {
    myimg.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=Example ${my}`;
  }
});
