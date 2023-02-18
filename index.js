// for first card 
let serial =0;
document.getElementById('btn-first').addEventListener('click', function () {
    serial += 1;
    //get the data from html using id
    const firstName = document.getElementById('first-name').innerText;

    const triangleFirstInputField = document.getElementById('triangle-firstInput-field');
    const triangleFirstInputFieldValueString = triangleFirstInputField.value;
    const triangleFirstInputFieldValue = parseFloat(triangleFirstInputFieldValueString);
    triangleFirstInputField.value = '';
    const triangleSecondInputField = document.getElementById('triangle-secondInput-field');
    const triangleSecondInputFieldValueString = triangleSecondInputField.value;
    const triangleSecondInputFieldValue = parseFloat(triangleSecondInputFieldValueString);
    triangleSecondInputField.value = '';

    // multiply
    const triangleAreaTotal = 0.5 * triangleFirstInputFieldValue * triangleSecondInputFieldValue;

    //show the data
    displayData(firstName, triangleAreaTotal)
})

// for second card 
document.getElementById('btn-second').addEventListener('click', function () {
    serial +=1;
    //get the data from html using id
    const secondName = document.getElementById('second-name').innerText;

    const rectangleFirstInputField = document.getElementById('rectangle-firstInput-field');
    const rectangleFirstInputFieldValueString = rectangleFirstInputField.value;
    const rectangleFirstInputFieldValue = parseFloat(rectangleFirstInputFieldValueString);
    rectangleFirstInputField.value = '';
    const rectangleSecondInputField = document.getElementById('rectangle-secondInput-field');
    const rectangleSecondInputFieldValueString = rectangleSecondInputField.value;
    const rectangleSecondInputFieldValue = parseFloat(rectangleSecondInputFieldValueString);
    rectangleSecondInputField.value = '';

    // multiply
    const rectangleAreaTotal = 0.5 * rectangleFirstInputFieldValue * rectangleSecondInputFieldValue;

    //show the data
    displayData(secondName, rectangleAreaTotal)
})



// common function to display data 

function displayData(geometryOfName,geometryOfAreaTotal) {
    const container = document.getElementById('table-container')
    const tr = document.createElement('tr');


    tr.innerHTML = `
      <td>${serial}</td>
      <td>${geometryOfName}</td>
      <td>${geometryOfAreaTotal}cm<sup>2<sup></td>
      <td><button>Convert To m<sup>2<sup> </button></td>
       `;
    container.appendChild(tr);
}