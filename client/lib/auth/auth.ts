// /lib/auth.ts
import jwt, { SignOptions, JwtPayload } from "jsonwebtoken";

const secretKey = process.env.JWT_SECRET as string;

export interface TokenPayload extends JwtPayload {
  name :string
  email: string;
  id: string;
}

export function signToken(
  payload: TokenPayload,
  options?: SignOptions
): string {
  return jwt.sign(payload, secretKey, { expiresIn: "10h", ...options });
}

export function verifyToken(token: string): TokenPayload | null {
  try {
    const decoded = jwt.verify(token, secretKey) as TokenPayload;
    return decoded;
  } catch (err) {
    console.error("JWT verification error:", err);
    return null;
  }
}
