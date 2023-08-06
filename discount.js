function ticketPrice(ticketQuantity){
    const first100Ticket=100;
    const second100ticket=90;
    const restTicket=70;
    if(ticketQuantity<=100){
        const price=ticketQuantity*first100Ticket;
        return price
    }

}
const totalprice=ticketPrice(2);
console.log(totalprice);