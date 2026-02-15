export const blogCategories = {
  ALL: "All",
  FREELANCING: "Freelancing",
  VA_CAREERS: "VA Careers",
  REMOTE_WORK_TIPS: "Remote Work Tips",
  SUCCESS_STORIES: "Success Stories",
} as const;

export type BlogCategory = keyof typeof blogCategories;
