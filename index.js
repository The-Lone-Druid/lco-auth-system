const app = require("./app");
const AppConstants = require("./config/config");

app.listen(AppConstants.PORT, () => {
  console.log(
    `Server is running at port http://localhost:${AppConstants.PORT}`
  );
});
