import Input from "#/components/atoms/input";
import Image from "next/image";
import Link from "next/link";

export default function page() {
  return (
    <main className="w-screen h-screen bg-accent/10 flex items-center justify-center relative max-w-screen max-h-screen overflow-hidden">
      <div className="absolute -z-1 bg-animated-green opacity-40"></div>

      <div className="flex p-4 flex-row gap-4 w-2xl justify-between border border-accent rounded-md bg-background h-[60vh]">
        <div className="flex-1 bg-accent rounded-sm relative overflow-hidden">
          <Image
            src="https://img.freepik.com/premium-photo/green-liquid-marble-background-diy-flowing-texture-experimental-art_236836-4923.jpg"
            alt="a"
            width={417}
            height={626}
            className="w-full"
          />{" "}
        </div>
        <form action="" className="flex-1">
          <div className="flex flex-col h-full p-4 justify-between">
            <div className="flex flex-col gap-4 flex-1">
              <h1 className="text-4xl font-bold">Register</h1>
              <p className="text-accent-foreground/70 text-sm">
                Insert your personal information to subscribe to the conference.
              </p>
              <div className="flex flex-col gap-4">
                <div>
                  <label htmlFor="email" className="ml-2">
                    E-mail
                  </label>
                  <Input
                    name="email"
                    type="email"
                    style="default"
                    placeholder="coralyst@email.com"
                    className="mt-2"
                  />
                </div>
                <div>
                  <label htmlFor="password" className="ml-2">
                    Password
                  </label>
                  <Input
                    name="password"
                    type="password"
                    style="default"
                    placeholder="********"
                    className="mt-2"
                  />
                </div>
              </div>
            </div>
            <div className="w-full flex flex-col justify-end gap-2">
              <p className="text-sm">
                {`Don't have an account? `}
                <Link href="/auth/register" className="text-emerald-600">
                  Login here.
                </Link>
              </p>
              <button className="flex-1 w-full bg-accent p-2 rounded-lg hover:bg-accent/50">
                Continue
              </button>
            </div>
          </div>
        </form>
      </div>
    </main>
  );
}
