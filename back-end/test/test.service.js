// imports
const dotenv = require('dotenv').config();

if (dotenv.error) {
    throw dotenv.error;
}

// Initialize DbObject
const Category = require('../models/category.model');

// creat an object with values
const categoryObj = {
    categoryName: 'Long Trip',
    vehicles: []
};

// test case
test('test case: Insert new category ', () => {
    const category = new Category(categoryObj);
    let Id = category.save()
        .then(data => {
            test('Test Case: Get Inserted Category', () => {
                return Category.findById(Id).then(data => {
                    expect(data.categoryName).toStrictEqual(categoryObj.categoryName);
                });
            });
        })
});

