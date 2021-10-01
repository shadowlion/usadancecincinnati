import type { NextPage } from "next";
import {BoardMember, boardMembers} from "../lib/data";

const HomePage: NextPage = () => {
  const year = new Date().getFullYear();

  return (
    <div className="container">
      <h1 className="text-center py-5">
        Your connection to Ballroom Dancing in the Tri-State area.
      </h1>
      <div className="row d-flex justify-content-center">
        <div className="col-12 col-md-4">
          <h2>Current Board Members:</h2>
          <ul>
            {boardMembers[String(year)].map(({ role, name }: BoardMember) => (
              <li key={role}>
                {role} - {name}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
