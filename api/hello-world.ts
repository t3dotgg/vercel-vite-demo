import type { VercelRequest, VercelResponse } from "@vercel/node";

const handleRequest = async (req: VercelRequest, res: VercelResponse) => {
  res.send("hello world");
};

export default handleRequest;
