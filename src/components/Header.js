import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import usePopular from "../hooks/usePopular";
import useTopRated from "../hooks/useTopRated";
import useTvShows from "../hooks/useTvShows";
import useUpcomming from "../hooks/useUpcomming";
import useLoginLogout from "../hooks/useLoginLogout";
import LogoNavItems from "./LogoNavItems";
import SearchIcon from "./SearchIcon";
import MenuList from "./MenuList";
import GptSearch from "./GptSearch";

const Header = () => {
  useNowPlayingMovies();
  useTvShows();
  usePopular();
  useTopRated();
  useUpcomming();

  useLoginLogout();

  return (
    <div className="fixed top-0 left-0 w-full z-50 
    bg-gradient-to-b from-black/80 to-transparent 
    px-4 sm:px-8 md:px-16 py-2 flex justify-between items-center">

    <LogoNavItems/>
    <div className="flex items-center gap-4 sm:gap-6">
        <GptSearch/>
        <SearchIcon />
        <MenuList />
    </div>
    </div>
  );
};

export default Header;
