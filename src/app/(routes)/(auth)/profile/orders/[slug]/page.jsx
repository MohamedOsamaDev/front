import { getOneOrder } from "@src/_lib/order"
import { cookies } from "next/headers"

const page = async ({ params: { slug } = {} }) => {
    const jwt = cookies().get('jwt')?.value
    const data = await getOneOrder(jwt, slug)
    console.log("🚀 ~ page ~ data:", data)
    return (
        <main className={`section`}>

        </main>
    )
}

export default page