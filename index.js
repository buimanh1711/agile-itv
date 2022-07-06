const sampleData = [10, 20, 20, 10, 10, 30, 50, 10, 20];

//return the array of el without duplicated
function singlifyArr() {
  return sampleData.reduce((acc, cur) => {
    //check if current element is existed
    if (acc.indexOf(cur) === -1) return [...acc, cur];
    else return acc;
  }, []);
}

const singleArray = singlifyArr();
// console.log(singleArray);

//return quantity of an element in array
function countElement(e) {
  return sampleData.filter((el) => el == e).length;
}

//count twin elements
var duplicated = 0;
singleArray.forEach((element) => {
  //count twin element duplicated
  const count = countElement(element);
  if (count > 1) duplicated += Math.floor(count / 2);
});

console.log(`Số đôi tất là: ${duplicated}`);
