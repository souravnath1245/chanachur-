const product ={
    names  : ['Chanachur', 'Anguli', 'Nimkey']
};
// const price = {
//     name : TotalPrice,
// }

const showInput =()=>{
    for(let name of product.names ){
    const inputDiv = document.getElementById('inputSection')
    const div = document.createElement('div')
    div.classList.add('input-group', 'mb-3')
    div.innerHTML = `
    <span class="inputHeadline input-group-text text-uppercase" 
                    id='buttonChanachur' >${name}</span>
                        <input type="number" id=${name} class="form-control" placeholder="Input Your Items number" aria-label="Username" aria-describedby="basic-addon1">
    `
    inputDiv.appendChild(div)
    };
}
showInput()
// const showTable = () => {
//     for(let name of product.names){
//         const tableBody = document.getElementById('tableBody')
//         const div = document.createElement('tr')
//         div.innerHTML =`
//         <th scope="row"></th>
//                             <td colspan="2">${name}</td>
//                             <td></td>
//                             <td> $ <span id="${name}">00</span></td>
//         `
//         tableBody.appendChild(div)
//     }
// }
// showTable()
const handleSubmit=()=>{
    const name = product.names

        inputId1(`${name[0]}`,160)
        inputId2(`${name[1]}`,120)
        inputId3(`${name[2]}`,140)
    
        getInTotal('totalPrice')

   
}
const outputId=(id , productPrice)=>{
  const outputId=  document.getElementById(id)
  outputId.innerText = productPrice;
}
const inputId1=(name, price)=> {
   const input= document.getElementById(`${name}`)
   const inputValue = input.value ;
    productPrice = inputValue * price
    outputId('chanachurPrice',productPrice)

}
const inputId2=(name, price)=> {
    const input= document.getElementById(`${name}`)
    const inputValue = input.value ;
     productPrice = inputValue * price
     outputId('angulaiPrice',productPrice)

}
const inputId3=(name, price)=> {
    const input= document.getElementById(`${name}`)
    const inputValue = input.value ;
     productPrice = inputValue * price
     outputId('nimkeyPrice',productPrice)

}

function getInValue(id){
   const element =  document.getElementById(id).innerHTML;
   const number = +element;
   return number;

}
const getInTotal=(id)=>{
    let totalAmountId = document.getElementById(id)
    let total =  getInValue('chanachurPrice') +getInValue('angulaiPrice') + getInValue('nimkeyPrice')
    totalAmountId.innerHTML = total;
}

