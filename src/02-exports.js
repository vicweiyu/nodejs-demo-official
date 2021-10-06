let car = {
  brand: 'Ford',
  model: 'Mustang',
};

const f = () => {
  console.log('Hello NodeJS!');
};

// module.exports = {
//   car,
//   f,
// };

exports.car = car;
exports.f = f;
