import message from "./Message";

const names = ["James","Rowen", "Jessie", "Tims", "Maki", "Eunice", "Mark"];
const nameList = names.map((item) => <li>{item}</li>);
const greetings = <h1>"Hello World"</h1>

const vehicles = ["mustang", "F-150", "expedition"]
//const [car] = vehicles[0];
//const [truch] = vehicles[1];
//const [suv] = vehicles[2];

const [car, truck, suv] = vehicles;

const [name1, name2, name3,,name4,,name5] = names;
const [,,,girl1,,girl2,] = names;


const apple = {
  color: "red",
  shape: "round",
  quantity: 10,
}

const greenApple = {
  color: "green",
  price: 25,
}

let {color: appleColor, shape: appleShape} = apple;
let setOfNumbers1 = [23,34,56,34,5,8,11,43];
let setOfNumbers2 = [23,34,56,34,5,8,11,43];
let combineNumbers = [...setOfNumbers1,...setOfNumbers2].map((number) => <div>{number}</div>)
let [first, second, ...rest] = setOfNumbers1;

let fruitData = {...apple, ...greenApple} 

let locked = 1;
let canChange = locked != 1 ? true : false;
console.log(canChange);

let speed = 120;
let speedWarning = speed >= 120 ? speed >= 200 ? 'Hi Kamatayan' : 'Too Fast' : speed >= 80 ? 'Fast' : 'OK';
//const appleColor = apple.color;

function MainContent(){
    return (
        
        <div>
            {speedWarning}
            {greetings}
      <ul>
        {nameList}
      </ul>
      <p>
      {car}, {truck}, {suv}
      </p>

      <p>
      {name1}, {name2}, {name3}, {name4}, {name5}
      </p>
      <p>
      {girl1}, {girl2},
      </p>
      <p>
        {appleColor}, {appleShape}
      </p>
      <p>
        {combineNumbers}
      </p>
      <p>
        {first}, 
      </p>
      <p>
        {second},
      </p>
      <p>
        {rest}
      </p>
      <p>
        {fruitData.color}, 
        {fruitData.price}, 
        {fruitData.quantity}, 
        {fruitData.shape}
      </p>
    </div>
    );
}

export default MainContent;