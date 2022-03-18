


const box = document.querySelectorAll('.box') // select what tank is needed
const price__AI = document.querySelectorAll('.box__price .price__AI') // input for box names
const box__price = document.querySelectorAll('.box__price .input') // input for box price
const totalLiters = document.querySelector('.total_liters')
// output vars
const petrolType = document.querySelector('.type span')
const totalPrice = document.querySelector('.total_price span')
const priceForOneLiter = document.querySelector('.pricePerLiter span')
const total_liters = document.querySelector('.totalLiters span')
const vat = document.querySelector('.tax span')

// pre set values
let VAT = 5;
box[0].classList.add('show');
let tankName = price__AI[0]; // selects the 1st tank name
let tankPrice = box__price[0]; // selects the 1st tank price



//<section class="price">
//     <div class="container">
// <div>Total liters</div>
//         <input type="text" class="total_liters">
//     <div class="bills">
//         <h3 class="bill">Bill:</h3>
//         <br>
//         <p class="type">Petrol type: <span></span></p>
//         <p class="price-for-one-liter">Price for one liter: <span></span></p>
//         <p class="total-liters">Total liters: <span></span></p>
//         <p class="vat">VAT: 5%</p>
//         <p class="total_price">Total price:<span></span></p>
//     </div>
//     </div>
// </section>

box.forEach((item, index) =>{
    item.addEventListener('click', () =>{
        box.forEach((item) =>{
            item.classList.remove('show')
        })

        item.classList.add('show');
        tankName = price__AI[index];
        tankPrice = box__price[index];
    })

})

function getTicket() {

    liters = totalLiters.value;
    // gets the total without tax
    subTotal = (tankPrice.value * liters)
    // gets the tax cost to add on
    tax = (subTotal * (VAT / 100))
    // adds the tax to the subtotal
    total = (tax + subTotal)

    petrolType.innerHTML = tankName.innerHTML;
    priceForOneLiter.innerHTML = `$${Number(tankPrice.value).toFixed(2)}`;
    total_liters.innerHTML = Number(liters).toFixed(2);
    vat.innerHTML = `${Number(VAT).toFixed(2)}% ($${Number(tax).toFixed(2)})`
    totalPrice.innerHTML = `$${Number(total).toFixed(2)}`;
}

getTicket();

//price__AI[index].innerHTML = name of tank
// box__price[index].value = price of the tank
// totalLiters.value = total liters
// vat = (box__price[index].value * (VAT / 100))


// input.value = ''


// function priceAI95 (){
//     input[0].value = '0,95$'
//     input[1].value = '1,1$'
//     input[2].value = '1,3$'
//     if (input[0].value === '0,95$'){
//         petrolType.textContent = 'AI95'
//     } else if (input[1].value === '1,1$'){
//         petrolType.textContent = 'AI98'
//     } else if (input[2].value === '1,3$'){
//         petrolType.textContent = 'AI100'
//     }
//
// }

// function priceAI98 (){
//
//     petrolType.textContent = 'AI98'
//
//
// }function priceAI100 (){
//
//     petrolType.textContent = 'AI100'
// }

// totalLiters.addEventListener('input', () =>{
//
// })


