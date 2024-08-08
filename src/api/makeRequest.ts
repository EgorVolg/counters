import axios from "axios";

async function getAreas() {
    const res = await axios.get(
        "http://showroom.eis24.me/api/v4/test/areas/"
    )
    const areas = res.data.results
    return areas
 }

 export default async function areas () {
    const data = await getAreas()
     return data
 }