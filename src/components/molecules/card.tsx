import { Avatar } from "../atoms/avatar";
import Badge from "../atoms/badge";

export default function PostCard() {
  return (
    <div className="w-full border border-accent rounded-2xl p-8">
      <ul className="flex flex-col gap-4 p">
        <li className="flex items-center gap-4">
          <Avatar
            size="md"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoXi3MDuEWZCR7_5orPdlYKwDvHtT0oYJQ2Q&s"
          />
          <div className="flex flex-col justify-center">
            <p className="leading-4">ctheusg</p>
            <p className="text-foreground/40">2 hours ago</p>
          </div>
        </li>
        <li>
          <p>
            As the title says, here are all the useful types that Im using every
            day or create new types on top of them. I thought it might be handy
            for some people so I just share here and this will be updated moving
            forward:
          </p>
        </li>
        <li className="w-full bg-accent rounded-lg">
          <div className="p-4 bg-background/20 rounded-t-lg">
            <p className="">Title of the article</p>
          </div>
          <p className="p-4">
            As the title says, here are all the useful types that Im using every
            day or create new types on top of them. I thought it might be handy
            for some people so I just share here and this will be updated moving
            forward: As the title says, here are all the useful types that Im
            using every day or create new types on top of them. I thought it
            might be handy for some people so I just share here and this will be
            updated moving forward:
            <br />
            <span className="font-bold text-emerald-300 cursor-pointer hover:text-emerald-500">
              Continue reading...
            </span>
          </p>
        </li>
        <li>
          <ul className="flex gap-1">
            <li>
              <Badge style="outline">Teste</Badge>
            </li>
            <li>
              <Badge style="outline">Teste</Badge>
            </li>
            <li>
              <Badge style="outline">Teste</Badge>
            </li>
            <li>
              <Badge style="outline">Teste</Badge>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
}
