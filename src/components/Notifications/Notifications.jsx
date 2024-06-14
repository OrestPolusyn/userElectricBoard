import { NotificationBtn, NotificationNumber } from "./Notifications.styled"
import { MdOutlineMarkChatUnread } from "react-icons/md";

export default function Notifications() {
    return (
        <NotificationBtn>
            <MdOutlineMarkChatUnread />

            <NotificationNumber>
                2
            </NotificationNumber>

            <span>
                Повідомлення
            </span>
        </NotificationBtn>
    )

}