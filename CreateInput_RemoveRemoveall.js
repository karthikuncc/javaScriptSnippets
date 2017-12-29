
//Number of times create Clicked
var count=0;
// 1. Create  buttons
var button = document.createElement("button");
button.innerText = "Add input";
document.body.appendChild(button);

var rembutton = document.createElement("button");
rembutton.innerText = "Remove input";
document.body.appendChild(rembutton);

var rallbutton = document.createElement("button");
rallbutton.innerText = "Remove all input";
document.body.appendChild(rallbutton);


//Create functions

var crInput= function () {
  count++;
  var mybr= document.createElement("br");
  mybr.setAttribute("id","br"+count);
  console.log(mybr.id);
  document.body.appendChild(mybr);
 
 let input= document.createElement("input");
  input.setAttribute("id","inp"+count);
   console.log(input.id);
document.body.appendChild(input);
}


var rem= function () {
 document.getElementById("br"+count).remove();
 document.getElementById("inp"+count).remove();
//brchild.parentNode.removeChild(brchild);
 // inpchild.parentNode.removeChild(inpchild);
  count--;
}

var rall= function () {
for(let i=1;i<=count;i++){
  document.getElementById("br"+i).remove();
 document.getElementById("inp"+i).remove();
}
  count=0;
}

// 3. Add event handler
button.addEventListener ("click", crInput);
rembutton.addEventListener ("click", rem);
rallbutton.addEventListener ("click", rall);






/* Read 

https://css-tricks.com/use-button-element/
*/