var aw = {
  name: "Aman",
  b: 20,
};

console.log(this);

var funf = function (aa, jk) {
  console.log(this.name, aa, jk);
};

funf(300);

//call apply bind
//bind

let boundedfn = funf.bind(Object, 500, "kl");
boundedfn();
//return a new funciton
//call
funf.call(Object, 400, 900);
//it will imeediately and the argument we want to pass
//apply
funf.apply(Object, [600, 900]);
