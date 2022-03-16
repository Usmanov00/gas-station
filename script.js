

const input = document.querySelectorAll('.input')
const box = document.querySelectorAll('.box')
const priceAI = document.querySelectorAll('.price__AI span')
const totalLiters = document.querySelector('.total_liters span')
const petrolType = document.querySelector('.type span')
const totalPrice = document.querySelector('.total_price span')
const priceForOneLiter = document.querySelector('.price-for-one-liter span')

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

box.forEach((item) =>{
    item.addEventListener('click', () =>{
        box.forEach((item) =>{
            item.classList.remove('show')
        })
        item.classList.add('show')
        totalPrice.value = `${totalPrice}$`
    })

})


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


