//if/else approach
//(else statement redundant in this case)
function UserGreeting3() {
  let isLoggedIn = false;
  if (isLoggedIn) {
    return <div>Hello Alex</div>;
  }
  return <div>Hello Guest</div>;
}

//Element variable approach
function UserGreeting4() {
  let isLoggedIn = false;
  //Our element variable
  let whatWeReturn;

  if (isLoggedIn) {
    whatWeReturn = <div>Hello Alex</div>;
  } else {
    whatWeReturn = <div>Hello Guest</div>;
  }

  return <>{whatWeReturn}</>;
}

//Ternary operator approach
function UserGreeting5() {
  let isLoggedIn = false;

  return isLoggedIn ? <div>Hello Alex</div> : <div>Hello Guest</div>;
}

//Short circuit method
function UserGreeting() {
  let isLoggedIn = false;

  return isLoggedIn && <div>Hello Alex</div>;
}

export default UserGreeting;
