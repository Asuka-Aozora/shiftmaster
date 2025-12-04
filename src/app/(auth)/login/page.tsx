import { Loginform } from "@/app/features/auth/components/login-form";
import { requireUnauth } from "@/lib/lib-utils";
import Image from "next/image";
import Link from "next/link";

const Page = async () => {
  await requireUnauth();

  return <Loginform />;
};

export default Page;
