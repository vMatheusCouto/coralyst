import { Search } from "lucide-react";
import Input from "../atoms/input";

export default function Header() {
  return (
    <div className="w-screen">
      <ul className="w-full flex h-full px-8 items-center justify-between gap-8">
        <li>Coralyst</li>
        <li className="flex-1 w-full max-w-full text-accent p-2 border-accent/20 border-1 rounded-md focus:text-white flex items-center justify-start gap-4">
          <Search className="stroke-1" />
          <Input
            style="ghost"
            placeholder="Type something..."
            className="focus:text-white"
          />
        </li>
        <li>
          <nav>
            <ul className="flex gap-4">
              <li>Discover</li>
              <li>Subscribe</li>
            </ul>
          </nav>
        </li>
      </ul>
    </div>
  );
}
