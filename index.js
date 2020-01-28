//DAY 1
console.log("Im Working. Im JS.");

//DAY 2
const a = 221; //const -> constant 변하지 않음
let b = a - 5; //let -> 변할 수 있음
//a= 4; const의 값을 변경하려 하면 에러 발생
console.log(b, a);

const what = "Nicolas";
console.log(what);
/*
변수는 기본적으로 const 필요할때 let
*/

const wat = false;
const wat2 = true;
console.log(wat, wat2);

const watt = 55.1;
console.log(watt);

/*
camel case -> 변수명을 언제나 소문자로 시작
공백 부분은 대문자를쓰고 다음문자를 쓰는 방식
ex) daysOfWeek, weatherOfDay
*/

const monday = "Mon";
const tue = "Tue";
const wed = "Wed";
const thu = "Thu";
const fri = "Fri";
console.log(monday, tue, wed, thu, fri);

const daysOfWeek = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
console.log(daysOfWeek);
console.log(daysOfWeek[2]);

const nicoInfo = {
  name: "Nico",
  age: 33,
  gender: "Male",
  isHandsome: true,
  favMovies: ["Along the gods", "LOTR", "Frozen"],
  favFood: [
    {
      name: "Kimchi",
      fatty: false
    },
    {
      name: "Cheese burger",
      fatty: true
    }
  ]
};
console.log(nicoInfo);
console.log(nicoInfo.gender);
nicoInfo.gender = "Female";
console.log(nicoInfo.gender);

const test1 = [
  (test11 = ["Jan", "Feb", "Mar"]),
  (test12 = ["Mon", "Tue", "Wed"])
];
console.log(test1);

const test2 = {
  person1: {
    name: "SH",
    age: 33
  },
  person2: {
    name: "GH",
    age: 44
  }
};
console.log(test2);

const test3 = {
  person1: [
    (name = {
      first: "Minsoo",
      last: "Choi"
    }),
    (address = {
      state: "Ohio",
      city: "Columbus"
    })
  ],
  person2: [
    (name = {
      first: "Minho",
      last: "Kim"
    }),
    (address = {
      state: "Newyork",
      city: "Queens"
    })
  ]
};

console.log(test3);
console.log(test3.person1);
