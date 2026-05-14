import { redirect } from "next/navigation";

interface AuthPageProps {
  searchParams: {
    authMode?: string;
    mode?: string;
    view?: string;
    type?: string;
    userType?: string;
  };
}

const AUTH_MODE_REDIRECTS = {
  signup: "/register",
  register: "/register",
  registration: "/register",
  login: "/login",
  signin: "/login",
};

const resolveTargetPath = (mode?: string) => {
  if (!mode) return "/login";
  const normalized = mode.toLowerCase();
  const direct = (AUTH_MODE_REDIRECTS as Record<string, string | undefined>)[normalized];
  if (direct) return direct;
  if (normalized.startsWith("reg")) return "/register";
  if (normalized.startsWith("sign")) return "/register";
  return "/login";
};

export default function AuthPage({ searchParams }: AuthPageProps) {
  const modeHint = searchParams?.authMode ?? searchParams?.mode ?? searchParams?.view;
  const targetPath = resolveTargetPath(modeHint);
  const userType = searchParams?.userType ?? searchParams?.type;
  const params = new URLSearchParams();

  if (userType && userType !== "client") {
    params.set("userType", userType);
  }

  const destination =
    params.toString().length > 0 ? `${targetPath}?${params.toString()}` : targetPath;

  redirect(destination);
}
