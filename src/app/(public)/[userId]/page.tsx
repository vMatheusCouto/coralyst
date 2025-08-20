import { Avatar } from "#/components/atoms/avatar";
import Feed from "#/components/organisms/feed";
import { faUserPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Profile() {
  return (
    <main className="w-full p-8 flex flex-col gap-8 overflow-y-auto">
      <div className="flex items-center gap-8">
        <Avatar
          size="lg"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoXi3MDuEWZCR7_5orPdlYKwDvHtT0oYJQ2Q&s"
        />
        <div>
          <h1 className="text-2xl">Matheus Couto</h1>
          <p className="text-accent-foreground/60">Doutor em Microbiologia</p>
          <div className="flex items-center gap-2 mt-2">
            <button className="bg-accent text-sm py-2 flex gap-2 justify-center items-center px-4 text-md rounded-full">
              <FontAwesomeIcon icon={faUserPlus} width={16} />
              Follow
            </button>
            <ul className="flex items-center justify-center gap-4 text-accent-foreground/60">
              <li>100 followers</li>
              <li>100 following</li>
            </ul>
          </div>
        </div>
      </div>
      <Feed />
    </main>
  );
}
