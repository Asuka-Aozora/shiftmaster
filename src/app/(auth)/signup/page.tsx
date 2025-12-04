import { RegisterForm } from "@/app/features/auth/components/register-form";
import { requireUnauth } from "@/lib/lib-utils";

const Page = async () => {
  await requireUnauth();

  return <RegisterForm />;
};

export default Page;
