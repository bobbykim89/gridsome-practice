// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api/

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`
const axios = require("axios");

module.exports = function(api) {
  api.chainWebpack((config, { isServer }) => {
    if (isServer) {
      config.externals([
        nodeExternals({
          allowlist: [/^vuetify/],
        }),
      ]);
    }
  });

  api.loadSource(async (actions) => {
    const { data } = await axios.get("http://localhost:1337/api/events");

    const collection = actions.addCollection({
      typeName: "Event",
      path: "events/:id",
    });

    data.data.map((event) => {
      collection.addNode({
        id: event.id,
        path: "/events/" + event.id,
        title: event.attributes.title,
        description: event.attributes.description,
        price: event.attributes.price,
        date: event.attributes.date,
        duration: event.attributes.duration,
        // thumbnail: event.attributes.image.formats.thumbnail.url,
        // image: event.attributes.image.formats.medium.url,
        category: event.attributes.category,
      });
    });
    // for (const event of data) {
    //   collection.addNode({
    //     id: event.id,
    //     title: event.attributes.title,
    //     description: event.attributes.description,
    //     price: event.attributes.price,
    //     date: event.attributes.date,
    //     duration: event.attributes.duration,
    //     thumbnail: event.attributes.image.formats.thumbnail.url,
    //     image: event.attributes.image.formats.medium.url,
    //   });
    // }
    // console.log(data.data);
  });
};
