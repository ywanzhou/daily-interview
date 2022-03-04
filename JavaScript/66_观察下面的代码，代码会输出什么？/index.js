var foo = 1;
(function () {
  console.log(foo);
  var foo = 2;
  console.log(foo);
})();
