console.log(100);

console.log("Hello World");

const x = 100;

console.table({
  name: "Brad",
  email: "brad@gmail.com",
});

console.group("simple");
console.log(x);
console.error("Alert", "Something went wrong");
console.warn("Alert");
console.groupEnd();

const styles = "padding : 10px; background-color: white; color: green";
console.log("%cDo not try to hack", styles);
