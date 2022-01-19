import fetch from "node-fetch";
import { getCheckCode } from "./getCheckCode";

// https://www.reddit.com/r/rav4prime/comments/j4k0v9/rav4_prime_spreadsheet/ggxu3zc/?utm_source=reddit&utm_medium=web2x&context=3
const VIN_SE = "JTMCB3FV-MD";
const VIN_SE_22 = "JTMCB3FV-ND";
const VIN_SE_WEATHER = "JTMAB3FV-MD";
const VIN_SE_WEATHER_22 = "JTMAB3FV-ND";
const VIN_XSE = "JTMEB3FV-MD";
const VIN_XSE_22 = "JTMEB3FV-ND";
const VIN_XSE_PREMIUM = "JTMFB3FV-MD";
const VIN_XSE_PREMIUM_22 = "JTMFB3FV-ND";

export const allVins = [
  VIN_SE,
  VIN_SE_22,
  VIN_SE_WEATHER_22,
  VIN_SE_WEATHER,
  VIN_XSE,
  VIN_XSE_22,
  VIN_XSE_PREMIUM,
  VIN_XSE_PREMIUM_22,
];

export const wantedVinBases = [VIN_SE_WEATHER.slice(0, 7), VIN_XSE.slice(0, 7)];

const trimMap = {
  [VIN_SE.slice(0, 8)]: "SE",
  [VIN_SE_WEATHER.slice(0, 8)]: "SE Weather",
  [VIN_XSE.slice(0, 8)]: "XSE",
  [VIN_XSE_PREMIUM.slice(0, 8)]: "XSE Premium",
};

export function getTrim(vin: string) {
  return trimMap[vin.slice(0, 8)];
}

export function getHumanVinUrl(vin: string): string {
  return `https://guest.dealer.toyota.com/v-spec/${vin}/detail`;
}

export async function generateVin(num: number, vinBase: string) {
  const paddedNum = num.toString().padStart(6, "0");
  const vin = `${vinBase}${paddedNum}`;
  return vin.replace("-", getCheckCode(vin));
}

export async function fetchVin(vin: string) {
  try {
    const res = await fetch(
      `https://api.rti.toyota.com/marketplace-inventory/vehicles/${vin}?isVspec=true`,
      {
        timeout: 30000,
        headers: {
          origin: "https://guest.dealer.toyota.com",
          referer: "https://guest.dealer.toyota.com/",
          "user-agent":
            "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/42.0.2311.135 Safari/537.36 Edge/12.246",
        },
      }
    );

    if (res.status === 200) {
      const f = await res.json();

      return f;
    } else if (res.status !== 404) {
      console.log(vin, "received status: ", res.status);
    } else {
    }
  } catch (e) {
    console.log(e);
  }
}
