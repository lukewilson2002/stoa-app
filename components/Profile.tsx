import { auth, signIn, signOut } from "@/lib/auth";

export default async function Profile() {
  const session = await auth();

  return (
    <form className="text-right" action={async () => {
      "use server";
      if (session) await signOut();
      else await signIn();
    }}>
      {session ? <p>{session?.user?.email}</p> : null}
      <button>{session ? "Sign Out" : "Sign In"}</button>
    </form>
  );
}