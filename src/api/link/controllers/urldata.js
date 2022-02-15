const axios = require("axios");

async function getUrlData(url) {
  try {
    const response = await axios.get(url);

    const data = response.data;

    const title = data.match(/<meta property="og:title" content="(.*?)"/);

    const description = data.match(
      /<meta name="[dD]escription" content="(.*?)"/
    );

    const image = data.match(/<meta property="og:image" content="(.*?)"/);

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
