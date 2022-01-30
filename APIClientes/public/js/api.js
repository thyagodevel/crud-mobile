// Arquivo de requisições

// Setting elements
const getAllButton = document.getElementById('getAll');
const app = document.getElementById('app');

// APICustomers

getAllButton.addEventListener('click', async () => {
  try {
    const customers = await axios.get('/customers');
    if (customers.data.msg != undefined) { console.log(customers.data.msg) }
    else { console.log(customers.data); }
  } catch(error) {
    return console.log(error);
  }
})