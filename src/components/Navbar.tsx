import { ArrowRight } from "lucide-react";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { buttonVariants } from "./ui/button";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

const Navbar = async () => {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  const isAdmin = user?.email === process.env.ADMIN_EMAIL;

  return (
    <nav className="sticky z-[100] h-14 inset-x-0 top-0 w-full border-b border-gray-200 bg-white/75 backdrop-blur-lg transition-all">
      <MaxWidthWrapper>
        <div className="flex h-14 items-center justify-between border-b border-zinc-200">
          <a href="/" className="flex z-40 font-semibold">
            <span className="text-blue-600">Izanagi</span>case
          </a>
          <div className="h-full flex items-center space-x-4">
            {user ? (
              <>
                <a
                  href="/api/auth/logout"
                  className={buttonVariants({
                    size: "sm",
                    variant: "ghost",
                  })}
                >
                  Sign out
                </a>
                {isAdmin ? (
                  <a
                    href="/api/auth/dashboard"
                    className={buttonVariants({
                      size: "sm",
                      variant: "ghost",
                    })}
                  >
                    Dashboard ✨
                  </a>
                ) : null}
                <a
                  href="/configure/upload"
                  className={buttonVariants({
                    size: "sm",
                    className: "hidden sm:flex items-center gap-1",
                  })}
                >
                  Create case
                  <ArrowRight className="ml-1.5 h-5 w-5" />
                </a>
              </>
            ) : (
              <>
                <a
                  href="/api/auth/register"
                  className={buttonVariants({
                    size: "sm",
                    variant: "ghost",
                  })}
                >
                  Sign Up
                </a>
                <a
                  href="/api/auth/login"
                  className={buttonVariants({
                    size: "sm",
                    variant: "ghost",
                  })}
                >
                  Login
                </a>
                <div className="h-8 w-px bg-zinc-200 hidden sm:block" />
                <a
                  href="/configure/upload"
                  className={buttonVariants({
                    size: "sm",
                    className: "hidden sm:flex items-center gap-1",
                  })}
                >
                  Create case
                  <ArrowRight className="ml-1.5 h-5 w-5" />
                </a>
              </>
            )}
          </div>
        </div>
      </MaxWidthWrapper>
    </nav>
  );
};

export default Navbar;
