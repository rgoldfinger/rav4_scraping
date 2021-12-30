import { getCategoryDescription } from "./dealerCategory";
import { oregonDealers } from "./dealers";
import { getTrim } from "./vins";

export function getDescription(data: any) {
  const res = [
    new Date(),
    data.vin,
    data.extColor.marketingName,
    data.price.totalMsrp,
    data.dealerCd,
    oregonDealers[data.dealerCd],
    data.holdStatus,
    data.eta?.currFromDate,
    data.eta?.currToDate,
    getCategoryDescription(data.dealerCategory),
    getTrim(data.vin),
  ];
  return `${res},\n`;
}
