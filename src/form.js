document.getElementById('dataForm').addEventListener('submit', function (e) {
    e.preventDefault();
  
    const formData = new FormData(e.target);
    const data = new URLSearchParams();
  
    for (const pair of formData) {
      data.append(pair[0], pair[1]);
    }
  
    fetch('https://script.google.com/macros/s/AKfycbwJ9rP6gujklr5iAoTxRD0tNVouoiUq_3qIf2UIMOiYddLr7kjb3Hjqa1fJAWsjXii0/exec', { // Enter the Google Apps Script URL 

      method: 'POST',
      body: data,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        console.log(data);
        alert('Data saved successfully!');
        e.target.reset();
      })
      .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
        alert('Error saving data: ' + error.message);
      });
  });
  
  
  // function validateForm() {
  //   var x = document.forms["dataForm"]["name"].value;
  //   if (x == "") {
  //     alert("Name must be filled out");
  //     return false;
  //   }
  // }

  