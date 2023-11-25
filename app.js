                    // question:01/2
let empty = [];
                    // question:03
let std_name = ["Shariq","Waqas","Sameer"];
                    // question:04
let number_array = [13, 2, 3, 24, 15];
                    // question:05
let boolean_array = [true, false];
                    // question:06
let mixedArray = [5, "Shariq", true, 15.05, false, "Shoaib"];
                    // question:07
let Array = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil.", "PhD"];
document.write("<h1>Qualifications</h1>")
document.write("<ol>");
for (let i = 0; i < Array.length; i++) {
    document.write("<li>" + Array[i] + "</li>");
  }
  document.write("</ol>");
                      // question:08
  let std_marks = [450, 480, 460];
  var totalMarks = 500;
  document.write("<h1>Student Percentages</h1>");
  document.write("<ul>");
  for (let i = 0; i < std_name.length; i++) {
    let pert = (std_marks[i] / totalMarks) * 100;
    document.write("<li>"+"Scored Of "+std_name[i]+ " is "+"Percentage: "+ pert + " %</li>");
  }
  document.write("</ul>");
                      // question:09
  let color = ["Violet", "Indigo", "Blue","Green", "Yellow", "Orange","Red"];
  document.write("<h1>Color Names:</h1>");
  
document.write("<p>")
  for(let i = 0; i < color.length; i++)
  {
      document.write(color[i]+", ");
  }
  document.write("</p>")
var inputcolor = prompt("Enter a color to add at the beginning of the array:");
color.unshift(inputcolor);
document.write("<h1>Updated Color Names:</h1>");
document.write("<p>")
for(let i = 0; i < color.length; i++)
{
    document.write(color[i]+", ");
}
document.write("</p>");
var inputcolor = prompt("Enter a color to add at the end of the array:");
color.push(inputcolor);
document.write("<p>")
for(let i = 0; i < color.length; i++)
{
    document.write(color[i]+", ");
}
 document.write("</p>");
color.unshift("Black","Brown");
document.write("<p>")
for(let i = 0; i < color.length; i++)
{
    document.write(color[i]+", ");
}
 document.write("</p>");
color.shift();
document.write("<p>")
for(let i = 0; i < color.length; i++)
{
    document.write(color[i]+", ");
}
 document.write("</p>");
 color.pop();
document.write("<p>")
for(let i = 0; i < color.length; i++)
{
    document.write(color[i]+", ");
}
 document.write("</p>");
 function function1(){
    let indexToAdd = parseInt(prompt("Enter the index where you want to add a color:"));
    let colorToAdd = prompt("Enter the color name you want to add:");
    color.splice(indexToAdd, 0, colorToAdd);
    document.write("<h1>Updated Color Names:</h1>");
document.write("<p>")
for(let i = 0; i < color.length; i++)
{
    document.write(color[i]+", ");
}
document.write("</p>");
 }
 function function2(){
    let indexToDelete = parseInt(prompt("Enter the index from where you want to delete colors:"));
  let ColorsToDelete = parseInt(prompt("Enter the number of colors you want to delete:"));
  color.splice(indexToDelete, ColorsToDelete);
    document.write("<h1>Updated Color Names:</h1>");
document.write("<p>")
for(let i = 0; i < color.length; i++)
{
    document.write(color[i]+", ");
}
document.write("</p>");
 }
                       // question:10
document.write("<h1>Student Scores</h1>");
document.write("<ul>");
let score=[320,230,480,120];
document.write("<li>"+"Scores Of Students: "+score+"</li>");
document.write("<li>"+"Ordered Scores Of Student: "+score.sort()+"</li>");
document.write("</ul>");
                       // question:11
let cities=["Karachi","Lahore","Islamabad","Quetta", "Peshawar"];
document.write("<h2>Cities List:</h2>");
document.write("<b>"+"<p>");
document.write(cities);
document.write("<h2>"+ "Selected cities"+"</h2>");
document.write("<li>"+cities[0] +"</li>")
document.write("<li>"+cities[4] +"</li>")
document.write("<li>"+cities[2] +"</li>")
document.write("</p>"+"<b>");
                       // question:12
let arr=["This","is","my","Cat."];
document.write("<li>"+"Array: "+arr+"</li>");
document.write("<li>"+"String: "+arr.join(" ")+"</li>");
                       // question:13
let fifoArray = [];
fifoArray.push("Keyboard");
fifoArray.push("Mouse");
fifoArray.push("Printer");
fifoArray.push("Monitor");
document.write("<h2>"+"Using Shift Devices: "+"</h2>");
document.write("<li>"+fifoArray+"</li>")
document.write("<h2>"+"Out: "+"</h2>");
let firstValue = fifoArray.shift();
document.write("<li>"+"First Value: " + firstValue+"</li>");
let secondValue = fifoArray.shift();
document.write("<li>"+"Second Value: " + secondValue+"</li>");
let thirdValue = fifoArray.shift();
document.write("<li>"+"Third Value: " + thirdValue+"</li>");
let fourthValue = fifoArray.shift();
document.write("<li>"+"Fourth Value: " + fourthValue+"</li>");
                       // question:14
let lifoArray = [];
lifoArray.push("Keyboard");
lifoArray.push("Mouse");
lifoArray.push("Printer");
lifoArray.push("Monitor");
document.write("<h2>"+"Using Pop Devices: "+"</h2>");
document.write("<li>"+lifoArray+"</li>")
document.write("<h2>"+"Out: "+"</h2>");
let first_Value = lifoArray.pop();
document.write("<li>"+"First Value: " + first_Value+"</li>");
let second_Value = lifoArray.pop();
document.write("<li>"+"Second Value: " + second_Value+"</li>");
let third_Value = lifoArray.pop();
document.write("<li>"+"Third Value: " + third_Value+"</li>");
let fourth_Value = lifoArray.pop();
document.write("<li>"+"Fourth Value: " + fourth_Value+"</li>");
                       // question:15







