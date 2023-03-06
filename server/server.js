const express = require('express');
const cookieParser = require('cookie-parser');
const cors = require("cors");
const port = 8000;
const app = express();

app.use(cookieParser());
app.use(cors({credentials: true, origin: 'http://127.0.0.1:5173'}));
app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({ extended: true }, {limit: '50mb'}));

require('dotenv').config();
require("./config/mongoose.config");
require('./routes/users.routes')(app);
require("./routes/blog.routes")(app);

app.listen(port, () => console.log('Listening on port', port))