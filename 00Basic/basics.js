const todo = [];
let t;

todo.unshift("Buy Bread.");
todo.unshift("Record Videos for YouTube.");
todo.unshift("Go to Gym.");

for (t=todo.length-1;t>=0;t--) {
    console.log(todo[t]);
}
