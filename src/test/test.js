let state = [
    {
        name: 'Sony',
        imgName: 'sony.jpg',
        id: 100,
        price: '1000',
        curent: '',
        onCart: false
    },
    {
        name: 'Apple',
        imgName: 'apple.jpg',
        id: 101,
        price: '2000',
        curent: '',
        onCart: false
    },
    {
        name: 'Yota',
        imgName: 'yota.jpg',
        id: 102,
        curent: '',
        price: '3000',
        onCart: true
    }
];

let productsItem = state.filter(item => item.onCart === true);
let productsNumSum = productsItem.length;
console.log(productsNumSum);

/* let newState = state.map(item => {
    if (item.id === 101) {
        console.log(item);
        item.onCart = true;
    }
    return  item ; 
});

console.log(newState); */