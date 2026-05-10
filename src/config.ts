export const SITE = {
  website: "https://seisan.insaem.jp/",
  author: "統一教会2世清算連絡会",
  desc: "統一教会2世の被害や法人の解散に伴う清算手続に関して、当事者や関係者間の情報共有に寄与することを目的として活動しています。",
  title: "統一教会2世清算連絡会",
  ogImage: "/og-image.png",
  lightAndDarkMode: false,
  postPerIndex: 4,
  postPerPage: 10,
  showArchives: false,
  showBackButton: false,
  lang: "ja",
  timezone: "Asia/Tokyo",
} as const;

export const SOCIALS = [
  { name: "X", href: "https://x.com/username", linkTitle: `${SITE.title} on X` },
] as const;
