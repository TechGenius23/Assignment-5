
let sum =0;
let sit=40;
function ticket(event){
    const value=event.innerText
    console.log(value)
    event.classList.add('bg-red-500');
    const selectSeat=document.getElementById("nipu");
    sum=sum+1;
    sit=sit-1;
    selectSeat.innerText=sum;
    const totalSeat=document.getElementById('totalSeat')
    totalSeat.innerText=sit;
    
    
  
    const tableContainer= document.getElementById('seatQuantity')
  
     const tr=document.createElement("tr")
    
     const p= document.createElement('td')
    
     p.innerText=value;
     const p2= document.createElement('td')
     p2.classList.add('px-20')
     p2.innerText='Economy';
     const p3= document.createElement('td')
     p3.classList.add('px-8')
     p3.innerText='320';
    tr.appendChild(p)
    tr.appendChild(p2)
    tr.appendChild(p3)
    tableContainer.appendChild(tr)
    // dsbsgljfkgb
    // dxfcgvhbsdnjfd
    

   
}





