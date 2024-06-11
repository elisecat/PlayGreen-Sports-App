import { useRouter } from "next/router";
import Link from "next/link";
import { NavBarContainer, NavButton, NavLink, IconContainer } from "./styles/Navbar";
import { signOutUser } from "@/services/authService";
import HomeIcon from "../../../public/icons/homeIcon";
import HistoryIcon from "../../../public/icons/historyIcon";
import LogoutIcon from "../../../public/icons/logoutIcon";

const NavBar = () => {
  const router = useRouter();

  const isActive = (path: string) => router.pathname === path;

  const handleLogout = async () => {
    const result = await signOutUser();
    if (result) {
      router.push('/auth/login');
    } else {
      alert('Failed to sign out. Please try again.');
    }
  };

  return (
    <NavBarContainer>
      <Link href="/home" passHref>
        <NavLink>
          <IconContainer className={isActive("/home") ? "active" : ""}>
            <HomeIcon fill={isActive("/home") ? "#ffffff" : "#666666"} />
          </IconContainer>
        </NavLink>
      </Link>
      <Link href="/history" passHref>
        <NavLink>
          <IconContainer className={isActive("/history") ? "active" : ""}>
            <HistoryIcon fill={isActive("/history") ? "#ffffff" : "#666666"} />
          </IconContainer>
        </NavLink>
      </Link>
      <NavButton onClick={handleLogout}>
        <IconContainer>
          <LogoutIcon fill={"#666666"} />
        </IconContainer>
      </NavButton>
    </NavBarContainer>
  );
};

export default NavBar;
