// https://www.reddit.com/r/rav4club/comments/ret484/question_about_updates_i_can_see_on_my_new_rav4/hoeaq6j/?utm_source=reddit&utm_medium=web2x&context=3
// https://www.reddit.com/r/rav4prime/comments/k2i669/certified_toyota_sales_consultant/gdvol4h/?utm_source=reddit&utm_medium=web2x&context=3
// https://www.rav4world.com/threads/roro-ships-toyohashi-port-to-north-america.313558/page-20#post-2899472

const map: Record<string, string> = {
  F: "freight",
  A: "allocated",
  G: "ground",
};
export function getCategoryDescription(category?: string): string {
  return `${category || ""} (${map[category] || ("unknown" as string)})`;
}
