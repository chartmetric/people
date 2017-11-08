const faker = require('faker');
faker.locale = "en_US";
const randomInt = require('random-int');

const generateFakeUsers = limit => {
  const users = [];

  for(let i = 0; i < limit; i++){
    const feeds = [];
    for (let j = 0; j < randomInt(5, 30); j++){
      feeds.push({
        url: faker.image.imageUrl(),
        text: faker.lorem.sentence(),
      });
    }
    users.push({
      id: i,
      name: faker.name.findName(),
      job: faker.name.jobTitle(),
      email: faker.internet.email(),
      avatar: faker.image.avatar(),
      feeds,
      address: {
        lat: faker.address.latitude(),
        lng: faker.address.longitude(),
        code2: faker.address.countryCode(),
      },
    });
  }
  return users;
};

module.exports = {
  generateFakeUsers,
};
