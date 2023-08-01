const FoodOption = (food) => {
    let product = '';

    switch (food) {
        case 'Milk':
            product = 'Milk';
            break;
            case 'eggs':
            product = 'Eggs';
            break;
            case 'Cheese':
            product = 'Cheese';
            break;
            case 'Pork':
            product = 'Pork';
            break;
            case 'Shrimp':
            product = 'Shrimp';
            break;
            case 'Chicken':
            product = 'Chicken';
            break;
    }
    return product;
}

module.exports = FoodOption;
