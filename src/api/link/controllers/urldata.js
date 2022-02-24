const axios = require("axios");

// request for html
async function getUrlData(url) {
  try {
    // wait for data
    const response = await axios.get(url);

    // response into array
    const data = response.data;

    // search for title
    const title = data.match(/<meta property="og:title" content="(.*?)"/);

    // search for description
    const description = data.match(
      /<meta name="[dD]escription" content="(.*?)"/
    );

    // search for image url
    const image = data.match(/<meta property="og:image" content="(.*?)"/);

    // return filtered data
    return {
      status: "success",
      data: {
        title: title ? title[1] : "",
        description: description ? description[1] : "",
        image: image ? image[1] : "",
      },
    };
  } catch (err) {
    return {
      status: "error",
      message: err.message,
    };
  }
}

module.exports = {
  async index(ctx) {
    try {
      const { url } = ctx.request.body;

      const data = await getUrlData(url);

      ctx.body = data;
    } catch (err) {
      ctx.body = err;
    }
  },
};
