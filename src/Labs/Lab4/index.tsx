import ClickEvent from "./ClickEvent";
import PassingFunctions from "./PassingFunctions";

export default function Lab4() {
    function sayHello() {
        alert("Hello");
      }

    return (
    <div id="wd-passing-functions">
        <h2>Lab 4</h2>
        <ClickEvent/>
        <PassingFunctions theFunction={sayHello} />
        
        
    
    
    
    
    
    
    
    </div>
      );
  }
  