import { Avatar } from "../atoms/avatar";

/* import all the icons in Free Solid, Free Regular, and Brands styles */
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import {
  faCompass,
  faGear,
  faMessage,
  faPhotoFilm,
  fas,
  faTimesSquare,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Separator from "../atoms/separator";
library.add(fas, far, fab);

export default function Sidebar() {
  return (
    <div
      id="sidebar"
      className="h-[92vh] w-[25vw] p-8 flex flex-col items-center justify-start"
    >
      <div id="sidebar-navigation" className="w-full">
        <nav>
          <ul className="flex flex-col text-md">
            <li className="flex-1 flex gap-4 items-center text-emerald-300 py-3 px-5 w-full rounded-md">
              <FontAwesomeIcon icon={faCompass} width={24} />
              Feed News
            </li>
            <li className="flex-1 flex gap-4 items-center py-3 px-5 w-full rounded-md">
              <FontAwesomeIcon icon={faMessage} width={24} />
              Messages
            </li>
            <li className="flex-1 flex gap-4 items-center py-3 px-5 w-full rounded-md">
              <FontAwesomeIcon icon={faTimesSquare} width={24} />
              Forums
            </li>
            <li className="flex-1 flex gap-4 items-center py-3 px-5 w-full rounded-md">
              {" "}
              <FontAwesomeIcon icon={faUsers} width={24} />
              Friends
            </li>
          </ul>
        </nav>

        <Separator direction="horizontal" className="max-w-11/12 m-auto" />

        <nav>
          <ul className="flex flex-col text-md">
            <li className="flex-1 flex gap-4 items-center py-3 px-5 w-full rounded-md">
              {" "}
              <FontAwesomeIcon icon={faPhotoFilm} width={24} />
              Media
            </li>
            <li className="flex-1 flex gap-4 items-center py-3 px-5 w-full rounded-md">
              {" "}
              <FontAwesomeIcon icon={faGear} width={24} />
              Settings
            </li>
          </ul>
        </nav>
      </div>
      <Separator direction="horizontal" className="max-w-11/12 m-auto" />
      <div
        id="sidebar-profile"
        className="flex items-center justify-start p-3 hover:scale-102 transition-all rounded-sm gap-4 bg-accent/20 hover:bg-accent/40 w-full"
      >
        <Avatar
          size="sm"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoXi3MDuEWZCR7_5orPdlYKwDvHtT0oYJQ2Q&s"
        />
        <div>
          <p className="leading-4">Matheus C</p>
        </div>
      </div>
      <div id="sidebar-footer flex h-[100%] flex-1"></div>
    </div>
  );
}
