import Profile from "@/components/ui/profile";
import ProfileCourse from "@/components/ui/ProfileCourse";
import { decodeId } from "@/lib/encryption";
import { fetchUserById } from "@/services/userService";

import { notFound } from "next/navigation";

interface ProfilePageProps {
  params: { username: string };
  searchParams: { id?: string };
}

export default async function ProfilePage({
  params,
  searchParams,
}: ProfilePageProps) {
  const { username } = params;
  const encodedId = searchParams.id;

  if (!encodedId) return notFound();

  const id = decodeId(encodedId);

  const user = await fetchUserById(id);
  if (!user) return notFound();

  console.log("User fetched:", username);

  return (
    <div className="max-w-7xl mt-10 mx-auto flex flex-col lg:flex-row gap-8">
      {/* Левая часть — профиль */}
      <div className="w-full lg:max-w-md flex-shrink-0">
        <Profile user={user} />
      </div>

      {/* Правая часть — курсы */}
      <div className="flex-1">
        <ProfileCourse user={user} />
      </div>
    </div>
  );
}
