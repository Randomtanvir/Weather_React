import { useState } from "react";
import Favorite from "./Favorite";
import FavoriteModal from "./FavoriteModal";
import Logo from "./Logo";
import Search from "./Search";

const Heading = () => {
  const [isShowFavModal, setIsShowFavModal] = useState(false);
  const handelToggle = () => {
    setIsShowFavModal(!isShowFavModal);
  };

  return (
    <header className="fixed w-full top-0 z-50 bg-gradient-to-b from-black/60 to-black/0 pb-10">
      <nav className="container flex items-center justify-between py-6">
        <Logo />

        <div className="flex items-center gap-4 relative">
          <Search />
          <Favorite onToggle={handelToggle} />
          {isShowFavModal && <FavoriteModal />}
        </div>
      </nav>
    </header>
  );
};

export default Heading;
