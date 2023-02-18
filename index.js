/*****************for first card ********************/
     let serial = 0;
    //step:1 add evemt listener to the btn-first button
     document.getElementById('btn-first').addEventListener('click', function () {
     serial += 1;
    //get the data from html using id

    const firstName = getTextElementById('first-name')
    const triangleFirstInputFieldValue = getFirstInputFieldValueById('triangle-firstInput-field');
    const triangleSecondInputFieldValue = getSecondInputFieldValueById('triangle-secondInput-field');
    // validation for first card 

    if (isNaN(triangleFirstInputFieldValue) || triangleFirstInputFieldValue === '' || triangleFirstInputFieldValue <= 0 || triangleFirstInputFieldValue === String || isNaN(triangleSecondInputFieldValue) || triangleSecondInputFieldValue === '' || triangleSecondInputFieldValue <= 0 || triangleSecondInputFieldValue === String) {
        return alert('please provide a valid number')
    }
    // multiply
    const triangleAreaTotal = (0.5 * triangleFirstInputFieldValue * triangleSecondInputFieldValue).toFixed(2);

    //show the data
    displayData(firstName, triangleAreaTotal);
    //button disabled
    disabledButton('btn-first');
})

/**************************** for second card ***************************** */
document.getElementById('btn-second').addEventListener('click', function () {
    serial += 1;
    //get the data from html using id

    const secondName = getTextElementById('second-name')
    const rectangleFirstInputFieldValue = getFirstInputFieldValueById('rectangle-firstInput-field');
    const rectangleSecondInputFieldValue = getSecondInputFieldValueById('rectangle-secondInput-field');

    //   validation for second card 

    if (isNaN(rectangleFirstInputFieldValue) || rectangleFirstInputFieldValue === '' || rectangleFirstInputFieldValue <= 0 || rectangleFirstInputFieldValue === String || isNaN(rectangleSecondInputFieldValue) || rectangleSecondInputFieldValue === '' || rectangleSecondInputFieldValue <= 0 || rectangleSecondInputFieldValue === String) {
        return alert('please provide a valid number')
    }
    // multiply
    const rectangleAreaTotal = (rectangleFirstInputFieldValue * rectangleSecondInputFieldValue).toFixed(2);

    //show the data
    displayData(secondName, rectangleAreaTotal);
    //button disabled
    disabledButton('btn-second');
})


/**************************** for third card ***************************** */
document.getElementById('btn-third').addEventListener('click', function () {
    serial += 1;
    //get the data from html using id

    const thirdName = getTextElementById('third-name')
    const parallelogramFirstInputFieldValue = getFirstInputFieldValueById('parallelogram-firstInput-field');
    const parallelogramSecondInputFieldValue = getSecondInputFieldValueById('parallelogram-secondInput-field');

    //  validation for third-card 
    if (isNaN(parallelogramFirstInputFieldValue) || parallelogramFirstInputFieldValue === '' || parallelogramFirstInputFieldValue <= 0 || parallelogramFirstInputFieldValue === String || isNaN(parallelogramSecondInputFieldValue) || parallelogramSecondInputFieldValue === '' || parallelogramSecondInputFieldValue <= 0 || parallelogramSecondInputFieldValue === String) {
        return alert('please provide a valid number')
    }
    // multiply
    const parallelogramAreaTotal = (parallelogramFirstInputFieldValue * parallelogramSecondInputFieldValue).toFixed(2);

    //show the data
    displayData(thirdName, parallelogramAreaTotal);
    //button disabled
    disabledButton('btn-third');
})
/**************************** for fourth card ***************************** */
document.getElementById('btn-fourth').addEventListener('click', function () {
    serial += 1;
    //get the data from html file using id

    const fourthName = getTextElementById('fourth-name')
    const rhombusFirstInputFieldValue = getFirstInputFieldValueById('rhombus-firstInput-field');
    const rhombusSecondInputFieldValue = getSecondInputFieldValueById('rhombus-secondInput-field');

    //  validation for fourth-card 
    if (isNaN(rhombusFirstInputFieldValue) || rhombusFirstInputFieldValue === '' || rhombusFirstInputFieldValue <= 0 || rhombusFirstInputFieldValue === String || isNaN(rhombusSecondInputFieldValue) || rhombusSecondInputFieldValue === '' || rhombusSecondInputFieldValue <= 0 || rhombusSecondInputFieldValue === String) {
        return alert('please provide a valid number');

    }
    // multiply
    const rhombusAreaTotal = (0.5 * rhombusFirstInputFieldValue * rhombusSecondInputFieldValue).toFixed(2);

    //show the data
    displayData(fourthName, rhombusAreaTotal);
    //button disabled
    disabledButton('btn-fourth');
})
/**************************** for fifth card ***************************** */
document.getElementById('btn-fifth').addEventListener('click', function () {
    serial += 1;
    //get the fifthName  from html  file  using id

    const fifthName = getTextElementById('fifth-name')
    //step:2 get  the ellipseInputFieldValue  from the ellipse-Input-field

    const pentagonFirstInputFieldValue = getFirstInputFieldValueById('pentagon-firstInput-field');
    const pentagonSecondInputFieldValue = getSecondInputFieldValueById('pentagon-secondInput-field');

    //  validation for fifth-card 

    if (isNaN(pentagonFirstInputFieldValue) || pentagonFirstInputFieldValue === '' || pentagonFirstInputFieldValue <= 0 || pentagonFirstInputFieldValue === String || isNaN(pentagonSecondInputFieldValue) || pentagonSecondInputFieldValue === '' || pentagonSecondInputFieldValue <= 0 || pentagonSecondInputFieldValue === String) {
        return alert('please provide a valid number')
    }

    //multiply
    const pentagonAreaTotal = (0.5 * pentagonFirstInputFieldValue * pentagonSecondInputFieldValue).toFixed(2);

    //show the data
    displayData(fifthName, pentagonAreaTotal);
    //button disabled
    disabledButton('btn-fifth');
})
/**************************** for sixth card ***************************** */
    document.getElementById('btn-sixth').addEventListener('click', function () {
    serial += 1;
    //get the sixthName  from html  file  using id

     const sixthName = getTextElementById('sixth-name')

     //step:2 get  the ellipseInputFieldValue  from the ellipse-Input-field

    const ellipseFirstInputFieldValue = getFirstInputFieldValueById('ellipse-firstInput-field');
    const ellipseSecondInputFieldValue = getSecondInputFieldValueById('ellipse-secondInput-field');

    //  validation for sixth-card 

    if (isNaN(ellipseFirstInputFieldValue) || ellipseFirstInputFieldValue === '' || ellipseFirstInputFieldValue <= 0 || ellipseFirstInputFieldValue === String || isNaN(ellipseSecondInputFieldValue) || ellipseSecondInputFieldValue === '' || ellipseSecondInputFieldValue <= 0 || ellipseSecondInputFieldValue === String) {
        return alert('please provide a valid number')
    }
    // multiply
    const ellipseAreaTotal = (3.14 * ellipseFirstInputFieldValue * ellipseSecondInputFieldValue).toFixed(2);

    //show the data 
    displayData(sixthName, ellipseAreaTotal);
    //button disabled
    disabledButton('btn-sixth');
})


// common function to display data 

   function getTextElementById(elementId) {
    const geometryOfName = document.getElementById(elementId).innerText;
    return geometryOfName;
    }

   function getFirstInputFieldValueById(inputFieldFirstId) {



    const geometryOfFirstInputField = document.getElementById(inputFieldFirstId);
    const geometryOfFirstInputFieldValueString = geometryOfFirstInputField.value;
    const geometryOfFirstInputFieldValue = parseFloat(geometryOfFirstInputFieldValueString);
    geometryOfFirstInputField.value = '';
    return geometryOfFirstInputFieldValue;

}
   function getSecondInputFieldValueById(inputFieldSecondId) {



    const geometryOfSecondInputField = document.getElementById(inputFieldSecondId);
    const geometryOfSecondInputFieldValueString = geometryOfSecondInputField.value;
    const geometryOfSecondInputFieldValue = parseFloat(geometryOfSecondInputFieldValueString);
    geometryOfSecondInputField.value = '';
    return geometryOfSecondInputFieldValue;
}

    function displayData(geometryOfName, geometryOfAreaTotal) {
    const container = document.getElementById('table-container')
    const tr = document.createElement('tr');


    tr.innerHTML = `
      <td>${serial}</td>
      <td>${geometryOfName}</td>
      <td>${geometryOfAreaTotal}cm<sup>2<sup></td>
      <td><button class="btn btn-sm bg-blue-400"><small>Convert To</small><small>m</small><sup>2<sup> </button></td>
    
       `;
    container.appendChild(tr);
}
//   button disabled common function 

function disabledButton(id) {
    document.getElementById(id).setAttribute('disabled', true);
}
let cards = document.querySelectorAll(".card");


// Define a function to generate a random color
function getRandomColor() {
    let letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

cards.forEach(function (card) {
    card.addEventListener("mouseenter", function () {
        // Get a random color
        let randomColor = getRandomColor();
        // Set the background color of the card to the random color
        card.style.backgroundColor = randomColor;
    });
});