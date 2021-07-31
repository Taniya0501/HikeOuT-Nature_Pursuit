const mongoose = require('mongoose');
const cities = require('./cities');
const { places, descriptors } = require('./seedHelpers');
const Campground = require('../models/campground');

mongoose.connect('mongodb://localhost:27017/yelp-camp', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
    console.log("Database connected");
});

const sample = array => array[Math.floor(Math.random() * array.length)];


const seedDB = async () => {
    await Campground.deleteMany({});
    for (let i = 0; i < 300; i++) {
        const random1000 = Math.floor(Math.random() * 1000);
        const price = Math.floor(Math.random() * 20) + 10;
        const camp = new Campground({
            //YOUR USER ID
            author: '60fdc9a5dedcab26ccd0a4b5',
            location: `${cities[random1000].city}, ${cities[random1000].state}`,
            title: `${sample(descriptors)} ${sample(places)}`,
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, suscipit iure. Perferendis, molestiae eveniet? Quia nihil ea velit animi, alias voluptatem totam dolor explicabo quod possimus minus laudantium sapiente reprehenderit.',
            price: price,
            geometry: {
                type: "Point",
                coordinates: [
                    cities[random1000].longitude,
                    cities[random1000].latitude
                ]
            },
            images: [
                {
                    url: 'https://res.cloudinary.com/dhu2b9nr2/image/upload/v1627586400/YelpCamp/fk8ir0fvd0uobay1hcgv.jpg',
                    filename: 'YelpCamp/fk8ir0fvd0uobay1hcgv'
                },
                {
                    url: 'https://res.cloudinary.com/dhu2b9nr2/image/upload/v1627586438/YelpCamp/y7rxspnutnwiwebhe3h2.jpg',
                    filename: 'YelpCamp/y7rxspnutnwiwebhe3h2'
                }
            ]
        });
        await camp.save();
    }
}

seedDB().then(() => {
    mongoose.connection.close();
})