const encoder = new TextEncoder();

const encodeBase64 = (buf: ArrayBufferLike): string => {
  let binary = "";
  const bytes = new Uint8Array(buf);
  for (let i = 0, len = bytes.length; i < len; i++) {
    binary += String.fromCharCode(bytes[i]);
  }
  return btoa(binary);
};

const encodeBase64Url = (buf: ArrayBufferLike): string =>
  encodeBase64(buf).replace(/\/|\+/g, (m) => ({ "/": "_", "+": "-" })[m] ?? m);

const encodeJwtPart = (part: unknown): string =>
  encodeBase64Url(encoder.encode(JSON.stringify(part)).buffer).replace(
    /=/g,
    "",
  );
const encodeSignaturePart = (buf: ArrayBufferLike): string =>
  encodeBase64Url(buf).replace(/=/g, "");

const algorithm = {
  name: "HMAC",
  hash: {
    name: "SHA-256",
  },
};

export const sign = async (key: string): Promise<string> => {
  const [id, secret] = key.split(":");

  const now = Math.floor(Date.now() / 1000);
  const payload = { iat: now, exp: now + 300, aud: "/admin/" };
  const header = { alg: "HS256", typ: "JWT", kid: id };

  const encodedPayload = encodeJwtPart(payload);
  const encodedHeader = encodeJwtPart(header);

  const partialToken = `${encodedHeader}.${encodedPayload}`;

  const secretArray = Uint8Array.from(
    secret.match(/.{2}/g)!.map((s) => parseInt(s, 16)),
  );
  const cryptoKey = await crypto.subtle.importKey(
    "raw",
    secretArray,
    algorithm,
    false,
    ["sign"],
  );
  const signaturePart = await crypto.subtle.sign(
    algorithm,
    cryptoKey,
    encoder.encode(partialToken),
  );
  const signature = encodeSignaturePart(signaturePart);

  return `${partialToken}.${signature}`;
};
