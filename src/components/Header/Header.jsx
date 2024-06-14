import Notifications from "../Notifications/Notifications";
import UserMenu from "../UserMenu/UserMenu";
import { HeaderBlock, HeaderNav } from "./Header.styled";

export default function Header() {
    return (
        <HeaderBlock >
            <div className="container">
                <HeaderNav>
                    <img className="logo"  src="../src/assets/images/logo.jpg" alt="Logo test" loading="lazy" width={120} height={40} />

                    <Notifications />

                    <UserMenu />
                </HeaderNav>
            </div>
        </HeaderBlock>
    )
}