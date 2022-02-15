module.exports = {
  routes: [
    {
      method: "POST",
      path: "/urldata",
      handler: "urldata.index",
      config: {
        auth: false,
      },
    },
  ],
};
