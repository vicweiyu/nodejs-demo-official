let car = {
  brand: 'Ford',
  model: 'Mustang',
};

const f = () => {
  console.log('Hello NodeJS!');
};

// module.exports = car;

// module.exports.car = car;
// module.exports.f = f;
exports.car = car;
exports.f = f;
