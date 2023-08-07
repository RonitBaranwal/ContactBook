const contact = document.getElementById('contacttxt');
const firstName = document.getElementById('firstnametxt');
const secondName = document.getElementById('secondnametxt');
const gmail = document.getElementById('gmailtxt');

const occupation = document.getElementById('occupationtxt');
const submitBtn = document.getElementById('submit')
console.log(submitBtn);
const baseUrl = 'http://127.0.0.1:7000/info';
const postInfo = async (e) => {
  e.preventDefault();
  const data = {
    "ContactNumber": document.getElementById('contacttxt').value,
    "FirstName": document.getElementById('firstnametxt').value,
    'SecondName': document.getElementById('secondnametxt').value,
    'Occupation': document.getElementById('occupationtxt').value,
    'Gmail': document.getElementById('gmailtxt').value,
  };
  document.getElementById('contacttxt').value = '';
  document.getElementById('firstnametxt').value = '';
  document.getElementById('secondnametxt').value = '';
  document.getElementById('gmailtxt').value = '';
  document.getElementById('occupationtxt').value = '';
  const data1 = await fetch(baseUrl , {
      method: "POST",
      headers: {
          "Content-type": "application/json",
      },
      body: JSON.stringify(data),
  });
  
};

submitBtn.addEventListener('click', postInfo);
submitBtn.addEventListener('click', () => alert('data added success'));






