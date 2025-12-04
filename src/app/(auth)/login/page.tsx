import { Loginform } from "@/app/features/auth/components/login-form"
import { requireUnauth } from "@/lib/lib-utils"

const Page = async () => {
    await requireUnauth();

    return (
        <div>
            <Loginform />
        </div>
    )
}

export default Page