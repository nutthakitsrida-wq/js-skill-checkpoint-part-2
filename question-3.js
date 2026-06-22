// เริ่มเขียนโค้ดตรงนี้

const result = users
  .map(function (user) {
    return user.name;
  })
  .filter(function (name) {
    return name.length > 17;
  });

console.log(result);