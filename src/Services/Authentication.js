import axios from "./axios"
import Cookies from "universal-cookie";

export var Authentication = async () => {
    const cookie = new Cookies();
    const userToken = cookie.get("jid");
    console.log(userToken)
    if (userToken) {
        try {
            const response = await axios.get("/api/user", {
                headers: {
                    Authorization: `Bearer ${userToken}`,
                },
            });
            console.log(response.data)
            return response.data;
        } catch (e) {
            return null;
        }

    }


}