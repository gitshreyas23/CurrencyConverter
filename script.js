async function convert(){
    let amount = document.getElementById("amount").value;
    let from = document.getElementById("from").value;
    let to = document.getElementById("to").value;
    let resultBox = document.getElementById("result");

    if(amount === ""){
        resultBox.innerHTML = "Enter amount first.";
        return;
    }

    const url = `https://api.exchangerate-api.com/v4/latest/${from}`;

    try{
        const res = await fetch(url);
        const data = await res.json();

        let rate = data.rates[to];
        let converted = (amount * rate).toFixed(2);

        resultBox.innerHTML = `${amount} ${from} = ${converted} ${to}`;

    }catch(error){
        resultBox.innerHTML = "Error fetching rates.";
    }
}
