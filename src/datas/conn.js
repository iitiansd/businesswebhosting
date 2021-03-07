const mongoose = require("mongoose");
//creaing a database
mongoose.connect("mongodb+srv://SD:6302901660@cluster0.tjxcp.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",{
    useCreateIndex:true,
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(() => {
    console.log("connection successful");
}).catch((error) => {
console.log(error);
})
