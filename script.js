function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
 function updateGrid(rows){
   const container=document.querySelector('#container');
   for(var i=0;i<rows*rows;i++){ 
     var div = document.createElement("div");
     var factor=(600-rows)/rows;
     div.style.width=`${factor}px`;
     div.style.aspectRatio="1/1";
     div.style.margin="0.5px";
     div.style.backgroundColor="white";
     div.setAttribute("class", "square");
     div.setAttribute("id", "div" + i);
     container.appendChild(div);
  }
const squares=container.querySelectorAll('div');
 squares.forEach((div) => {
   div.addEventListener('mouseenter', e => {
      div.style.backgroundColor = "black";
    });
    const button=document.querySelector('#clear');
    button.addEventListener('click', () => {
      div.style.backgroundColor = "white";    });  
 });
 const button3=document.querySelector('#rgb');

 button3.addEventListener('click', () => {
  squares.forEach((div) => {
    div.addEventListener('mouseenter', e => {
      var color=getRandomColor();
       div.style.backgroundColor = `${color}`;
     });
     const button=document.querySelector('#clear');
     button.addEventListener('click', () => {
       div.style.backgroundColor = "white";    });  
  });
   });  
 }
 updateGrid(16);
 const container=document.querySelector('#container');
 var slider = document.getElementById("myRange");
 var output = document.getElementById("demo");
 output.innerHTML = slider.value; // Display the default slider value
 slider.oninput = function() {
  output.innerHTML = this.value;
}
 // Update the current slider value (each time you drag the slider handle)
 const button2=document.querySelector('#new');
 button2.addEventListener('click', () => {
  while (container.firstChild) {
    container.firstChild.remove()
}
  updateGrid(slider.value); 
});

