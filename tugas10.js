var a = 0;
for (var i = 1; i <= 10; i++) {
  var b = (a += i);
  console.log(b);
}

function looping() {
  var number = 1;
  for (var x = 1; x < 11; x++) {
    console.log(number);
    number++;
    number = number + x;
  }
}

looping();
