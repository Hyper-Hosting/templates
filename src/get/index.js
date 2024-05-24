module.exports = {
  name: "/", // The website location e.g. /dashboard
  run: async (req, res) => {
    res.render("home", { // 'home' is the ejs file name found in 'public/html/filename.ejs'
      title: "Template", // Page title
      cssFiles: ["root", "main"], // The css files you want added
    });
  },
};
