import getSession from "@/lib/getSession";
import { ThemeToggle } from "@/src/theme/ThemeToggle";
import { LoginButton } from "./auth/LoginButton";
import { UserProfile } from "./auth/UserProfile";

export const Header = async () => {
  const session = await getSession();
  console.log(session);

  const user = session?.user;
  return (
    <header className="border-b border-b-accent fixed top-0 bg-background w-full">
      <div className="container flex items-center py-2 max-w-lg m-auto gap-1">
        <h2 className="text-2xl font-bold mr-auto">Githread</h2>
        {user ? <UserProfile /> : <LoginButton />}
        <ThemeToggle />
      </div>
    </header>
  );
};
