import { getCourses } from "./getCourses";

export function getCourseBySlug(slug: string) {
  const courses = getCourses();

  return courses.find(
    (c) => c.title.toLowerCase().replace(/\s+/g, "-") === slug
  );
}
