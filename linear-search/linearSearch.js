/*
  Suppose we have a array of some Colors. 
  From which we have to find one specific color.
*/

const colors = [
  "Black",
  "Red",
  "White",
  "Green",
  "Purple",
  "Yeallow",
  "Blue",
  "Orange",
];

/* 
  Here we have defined the targeted color 
*/
const targetedColor = "Yeallow";

/*
 Now we are going to make a function which will iterate through this array of colors.

 The function below have two parameters. On is that array and other is that targeted specific color.
*/
const linearSearch = (colors, targetedColor) => {
  const colorLength = colors.length;
  for (let i = 0; i < colorLength; i++) {
    if (colors[i] === targetedColor) {
        /*
        when any item of array mateches to the value of targeted item/color, 
        we return the index of that item.
        */
      return `${targetedColor} found at index ${i}.`;
    }
  }
  /*
  when the targeted item/color doesn't match to any item of the array,
  we return Not Found.
  */
  return "Not Found!";
};
console.log(linearSearch(colors, targetedColor));
