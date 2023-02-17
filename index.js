// for first card 
document.getElementById('first-card').addEventListener('click', function () {
//get the data from html using id
    const  firstName = document.getElementById('first-name').innerText;

    const triangleFirstInputField = document.getElementById('triangle-firstInput-field');
    const triangleFirstInputFieldValueString = triangleFirstInputField.value;
    const triangleFirstInputFieldValue = parseFloat(triangleFirstInputFieldValueString);
    triangleFirstInputField.value ='';
    const triangleSecondInputField = document.getElementById('triangle-secondInput-field');
    const triangleSecondInputFieldValueString = triangleSecondInputField.value;
    const triangleSecondInputFieldValue = parseFloat(triangleSecondInputFieldValueString);
    triangleSecondInputField.value ='';
    const triangleAreaTotal =0.5 * triangleFirstInputFieldValue * triangleSecondInputFieldValue
    const container =document.getElementById('table-container')
    const tr = document.createElement('tr');
    
   

   
    tr.innerHTML = `
      <td>${1}</td>
      <td>${firstName}</td>
      <td>${triangleAreaTotal}cm<sup>2<sup></td>
      <td><button>Convert To m<sup>2<sup> </button></td>
       `;
       container.appendChild(tr);
})