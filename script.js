let eded1, eded2;
while (isNaN(eded1)) {
  eded1 = Number(prompt("Birinci eded daxil edin"));
}
while (isNaN(eded2)) {
  eded2 = Number(prompt("Ikinci eded daxil edin"));
}
let netice = eded1 + eded2;
alert(`Netice:  ${netice}`);
