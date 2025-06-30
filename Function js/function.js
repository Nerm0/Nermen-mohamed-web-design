// 1. num of users//

var users = []
function numOfUsers() {
var count = Number(prompt("Num Of Users:"));
  for (var i = 0; i < count; i++) {
    addUsers();
  }
  console.log("enter all of users");
  console.table(users);
}
console.log(numOfUsers())
// 2. Function  add Users
function addUsers( ) {
  var name = prompt("enter user name");
  var id = prompt("enter by id");
  var balance = parseFloat(prompt("enter balance"));

  var user = {
    name: name,
    id: id,
    balance: balance
  };

  users.push(user);
}

// 3. Function newBalance
function editUserBalance() {
  var id = prompt('enter user id to edit')
  var newBalance = prompt('enter new balance')
  var user = users.find(u => u.id == id);

  if (user) {
    user.balance = newBalance;
    console.log(users);
  } else {
    console.log("not found id");
  }
}

// 4. Function  remover ID
function deleteUserById(id) 
{
  var index = users.findIndex(u => u.id === id);
  var id = prompt('enter user id to delete:')
  var newBalance = prompt('enter user id ')

  if (index !== -1) {
    var removed = users.splice(index, 1);
    console.log("removed done" );
  }  else {
    console.log("not found id");
  }
}

editUserBalance()
deleteUserById()
