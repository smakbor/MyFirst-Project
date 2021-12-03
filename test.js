// const ProcessOrder=(customer)=>{
//     console.log("Order Processing for Customer .")

//     setTimeout(()=>{
//         console.log("Cooking Completed .")
//     },5000)
//     console.log("Order processed For Customer .")
// }


// console.log("Take Order For Customer .");
// ProcessOrder();
// console.log("Order Completed For Customer .")


// const ProcessedOrder1=()=>{
//     console.log("Order Processing for Customer .")

//     setTimeout(()=>{
//         console.log("Cooking Completed .")
//     },10000);
//     console.log("Order Processed for customer .")
// }

// console.log("Take Order for Customer .")
// ProcessedOrder1();
// console.log("Order Completed for Customer .")






const btn = document.querySelector('button');
btn.addEventListener('click', () => {
  let myDate;
  for(let i = 0; i < 10000000; i++) {
    let date = new Date();
    myDate = date;
  }

  console.log(myDate);

  let pElem = document.createElement('p');
  pElem.textContent = 'This is a newly-added paragraph.';
  document.body.appendChild(pElem);
});
