import getSession from "@/lib/getSession";
import { ThemeToggle } from "@/src/theme/ThemeToggle";
import { LoginButton } from "./auth/LoginButton";

export const Header = async () => {
  const session = await getSession();
  const user = session?.user;
  return (
    <header className="border-b border-b-accent">
      <div className="container flex items-center py-2 max-w-lg m-auto gap-1">
        <h2 className="text-2xl font-bold mr-auto">Githread</h2>
        {user ? <p>User</p> : <LoginButton />}
        <ThemeToggle />
      </div>
    </header>
  );
};
