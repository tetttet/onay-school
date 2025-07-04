import Profile from "@/components/ui/profile";
import ProfileCourse from "@/components/ui/ProfileCourse";
import { decodeId } from "@/lib/encryption";
import { fetchUserById } from "@/services/userService";

import { notFound } from "next/navigation";

export type paramsType = Promise<{ username: string }>;
export type SearchType = Promise<{ id?: string }>;

export default async function ProfilePage({ params, searchParams }: {
  params: paramsType;
  searchParams: SearchType;
}) {
  const { username } = await params;
  const encodedId = (await searchParams).id;

  if (!encodedId) return notFound();

  const id = decodeId(encodedId);
  const user = await fetchUserById(id);

  if (!user) return notFound();

  console.log("User fetched:", username);

  return (
    <div className="max-w-7xl mt-10 mx-auto flex flex-col lg:flex-row gap-8">
      <div className="w-full lg:max-w-md flex-shrink-0">
        <Profile user={user} />
      </div>
      <div className="flex-1">
        <ProfileCourse user={user} />
      </div>
    </div>
  );
}
