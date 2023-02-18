/*****************for first card ********************/
let serial = 0;
document.getElementById('btn-first').addEventListener('click', function () {
    serial += 1;
    //get the data from html using id

    const firstName = getTextElementById('first-name')
    const triangleFirstInputFieldValue = getFirstInputFieldValueById('triangle-firstInput-field');
    const triangleSecondInputFieldValue = getSecondInputFieldValueById('triangle-secondInput-field');

    // multiply
    const triangleAreaTotal = 0.5 * triangleFirstInputFieldValue * triangleSecondInputFieldValue;

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
    if (
        rectangleFirstInputFieldValue == "" ||
        rectangleSecondInputFieldValue == "" ||
        rectangleFirstInputFieldValue <= 0 ||
        rectangleSecondInputFieldValue <= 0
    ) {
        return alert("please enter any valid number");
    }
    // multiply
    const rectangleAreaTotal = rectangleFirstInputFieldValue * rectangleSecondInputFieldValue;

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
    if (
        parallelogramFirstInputFieldValue == "" ||
        parallelogramSecondInputFieldValue == "" ||
        parallelogramFirstInputFieldValue <= 0 ||
        parallelogramSecondInputFieldValue <= 0
    ) {
        return alert("please enter any valid number");
    }
    // multiply
    const parallelogramAreaTotal = parallelogramFirstInputFieldValue * parallelogramSecondInputFieldValue;

    //show the data
    displayData(thirdName, parallelogramAreaTotal);
    //button disabled
    disabledButton('btn-third');
})
/**************************** for fourth card ***************************** */
document.getElementById('btn-fourth').addEventListener('click', function () {
    serial += 1;
    //get the data from html using id

    const fourthName = getTextElementById('fourth-name')
    const rhombusFirstInputFieldValue = getFirstInputFieldValueById('rhombus-firstInput-field');
    const rhombusSecondInputFieldValue = getSecondInputFieldValueById('rhombus-secondInput-field');
    if (
        rhombusFirstInputFieldValue == "" ||
        rhombusSecondInputFieldValue == "" ||
        rhombusFirstInputFieldValue <= 0 ||
        rhombusSecondInputFieldValue <= 0
    ) {
        return alert("please enter any valid number");
    }
    // multiply
    const rhombusAreaTotal = 0.5 * rhombusFirstInputFieldValue * rhombusSecondInputFieldValue;

    //show the data
    displayData(fourthName, rhombusAreaTotal);
    //button disabled
    disabledButton('btn-fourth');
})
/**************************** for fifth card ***************************** */
document.getElementById('btn-fifth').addEventListener('click', function () {
    serial += 1;
    //get the data from html using id

    const fifthName = getTextElementById('fifth-name')
    const pentagonFirstInputFieldValue = getFirstInputFieldValueById('pentagon-firstInput-field');
    const pentagonSecondInputFieldValue = getSecondInputFieldValueById('pentagon-secondInput-field');
    if (
        pentagonFirstInputFieldValue == "" ||
        pentagonSecondInputFieldValue == "" ||
        pentagonFirstInputFieldValue <= 0 ||
        pentagonSecondInputFieldValue <= 0
    ) {
        return alert("please enter any valid number");
    }
    // multiply
    const pentagonAreaTotal =0.5 * pentagonFirstInputFieldValue * pentagonSecondInputFieldValue;

    //show the data
    displayData(fifthName, pentagonAreaTotal);
    //button disabled
    disabledButton('btn-fifth');
})
/**************************** for sixth card ***************************** */
document.getElementById('btn-sixth').addEventListener('click', function () {
    serial += 1;
    //get the data from html using id

    const sixthName = getTextElementById('sixth-name')
    const ellipseFirstInputFieldValue = getFirstInputFieldValueById('ellipse-firstInput-field');
    const ellipseSecondInputFieldValue = getSecondInputFieldValueById('ellipse-secondInput-field');
    if (
        ellipseFirstInputFieldValue == "" ||
        ellipseSecondInputFieldValue == "" ||
        ellipseFirstInputFieldValue <= 0 ||
        ellipseSecondInputFieldValue <= 0
    ) {
        return alert("please enter any valid number");
    }
    // multiply
    const ellipseAreaTotal =0.5 * ellipseFirstInputFieldValue * ellipseSecondInputFieldValue;

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