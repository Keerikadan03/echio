import User from "../../../model/User";
import connectDb from "@/middleware/db";

// const handler = async (req, res) => {
//     if (req.method == 'POST') {
//         console.log(req.body)

//         res.status(200).json({ success: "success" });
//     } else {
//         res.status(400).json({ error: "wrong" })
//     }
// }
// export default connectDb(handler);