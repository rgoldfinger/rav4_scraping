const ZAP_URL = process.env.ZAP_URL;

async function sendZap(line: string) {
  const fields = line.split(",");
  console.log(fields);
  const data = {
    DateFound: fields[0],
    VIN: `https://guest.dealer.toyota.com/v-spec/${fields[1]}/detail`,
    Color: fields[2],
    MSRP: fields[3],
    DealerCode: fields[4],
    Dealer: fields[5],
    Status: fields[6],
    ETAStart: fields[7],
    ETAEnd: fields[8],
  };
  const res = await fetch(ZAP_URL!, {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    method: "POST",
    body: JSON.stringify(data),
  });
  console.log(await res.json());
}
