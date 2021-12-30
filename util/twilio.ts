import Twilio from "twilio";
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const token = process.env.TWILIO_AUTH_TOKEN;
const fromNumber = process.env.TWILIO_FROM_NUMBER;

var twilio = Twilio(accountSid, token, {
  region: "us1",
  edge: "umatilla",
});

export async function send(body: string, toNumber: string) {
  console.log(`${toNumber}: ${body}`);
  const res = await twilio.messages.create({
    from: fromNumber,
    to: toNumber,
    body,
  });
  console.log(`Message sent. ${res.sid}`);
}

export async function sendMessage(body: string) {
  await Promise.all(
    ["<your number>"].map(async (num) => await send(body, num))
  );
}
