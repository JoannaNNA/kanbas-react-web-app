 export default function AddingAndRemovingToFromArrays() {
    let numberArray1 = [1, 2, 3, 4, 5];
    let stringArray1 = ["string1", "string2"];
    let todoArray = [
        <li key="buy-milk">Buy milk</li>,
        <li key="feed-pets">Feed the pets</li>
    ];
    // Adding new item with a unique key
    todoArray.push(<li key="walk-dogs">Walk the dogs</li>);
    numberArray1.push(6); // adding new item to numbers array
    numberArray1.splice(2, 1); // remove 1 item starting at index 2
    stringArray1.push("string3"); // adding new string
    stringArray1.splice(1, 1); // remove 1 item starting at index 1
    return (
      <div id="wd-adding-removing-from-arrays">
        <h4>Add/remove to/from arrays</h4>
        numberArray1 = {numberArray1.join(', ')} <br />
        stringArray1 = {stringArray1.join(', ')} <br />
        Todo list:
        <ol>{todoArray}</ol><hr />
      </div>
  );
}
