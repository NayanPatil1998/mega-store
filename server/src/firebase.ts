import * as admin from "firebase-admin";

var serviceAccount = require("./mega-shop-8333e-firebase-adminsdk-ngtvr-991ce92110.json");
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

export default admin;
