require("dotenv").config();

import fetch from "node-fetch";
import { getCategoryDescription } from "./util/dealerCategory";
import { getDescription } from "./util/description";

const dealerLookup: Record<number, string> = {
  "36040": "Lum's Toyota",
  "36047": "Beaverton Toyota",
  "36049": "Capitol Toyota of Salem",
  "36052": "Lithia Toyota",
  "36057": "Coos Bay Toyota",
  "36072": "Larry Lassen Chevrolet-Toyota",
  "36078": "Royal Moore Toyota",
  "36079": "Lithia Toyota of Springfield",
  "36080": "Lithia Toyota of Klamath Falls",
  "36082": "Clint Newell Toyota",
  "36084": "Hometown Toyota - Scion",
  "36085": "Kendall Toyota",
  "36090": "Toyota of Gladstone",
  "36094": "Toyota of Corvallis",
  "36095": "Rogers Toyota of Hermiston",
  "36096": "Kendall Toyota of Bend",
  "36097": "Toyota of Portland on Broadway",
  "36098": "Toyota of Newport",
  "36099": "Grants Pass Toyota",
  "36100": "Ron Tonkin Toyota",
  "36102": "Gresham Toyota",
  "36103": "Wilsonville Toyota",
  "36104": "Columbia Gorge Toyota",
  "36105": "Damian Lillard Toyota",
  "36106": "Toyota of Gladstone",
};

async function fetchVin(vin: string) {
  try {
    const res = await fetch(
      `https://api.rti.toyota.com/marketplace-inventory/vehicles/${vin}?isVspec=true`
    );

    if (res.status === 200) {
      const f = await res.json();
      console.log(f);

      return f;
    } else if (res.status !== 404) {
      console.log(res);
      console.log("received status: ", res.status);
    }
  } catch (e) {
    console.log(e);
  }
}

// https://guest.dealer.toyota.com/v-spec/JTMAB3FVXMD007569/detail
async function run(vin: string) {
  const res = await fetchVin(vin);
  if (res) {
    console.log(getDescription(res));
  }
}

run(process.argv[2]);
// https://docs.google.com/spreadsheets/d/16qKU1mFjayjOc4LGQ_wI4LWYdjpASc8ayrrGE2U5EtI/edit#gid=888114205
// https://www.reddit.com/r/rav4prime/comments/j4k0v9/rav4_prime_spreadsheet/ggxu3zc/?utm_source=reddit&utm_medium=web2x&context=3
// https://www.reddit.com/r/rav4prime/comments/j1ia2t/rav4_prime_xse_premium_75008000/g709wtd/
