import jwt from "jsonwebtoken";

export const verify = (token) => jwt.verify(token, process.env.SECRET);
export default {
  VERIFY: (token) => {
    if (jwt.verify(token, process.env.SECRET) instanceof Error) return 0;
    else return jwt.verify(token, process.env.SECRET);
  },
};
export const sign = (payload) => jwt.sign(payload, process.env.SECRET);
