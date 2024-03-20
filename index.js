
function foo() {
    return 'bar';
  }
  
  const fooFunc = () => 'bar';
  
  
  const add = (parameter1, parameter2) => parameter1 + parameter2;
  
  const twoAdder = (x) => x + 2;
  
  const sum = (parameter1, parameter2) => {
    console.log(`Adding ${parameter1}`);
    console.log(`Adding ${parameter2}`);
    return parameter1 + parameter2;
  };
  
const divide = () => 2000 / 100;


const square = x => x * x;

console.log(divide()); 


console.log(square(5)); 

  sum(1,2); 
  
  const nums = [1,2,3];
  const squares = nums.map(x => x ** 2); 
  squares;
  nums; 
  
  const finishedItems = overdueTodoItems.map(item => {
    item.className = "complete";
    return item;
  });

  header.innerText = `You finished ${finishedItems.length} items!`;
  lapsedUserAccounts.map(u => sendBillTo(u.address));
  