import jwt from "jsonwebtoken";

export const GET = async (request, { params }) => {
  try {
    // Get token from HTTP-only cookie
    const token = request.cookies.get("jwt")?.value;
    // Decode token
    if (!token) {
      return new Response(JSON.stringify({ succses: true, data: null }), {
        status: 200,
      });
    }
    const data = jwt.verify(token, "jThPm3Ezho7rj4+dZnrCMg==");
    console.log("🚀 ~ GET ~ data:", data);
    return new Response(JSON.stringify({ succses: true, ...data }), {
      status: 200,
    });
  } catch (error) {
    console.log("🚀 ~ GET ~ error:", error);
    return new Response(JSON.stringify({ succses: false }), { status: 404 });
  }
};
