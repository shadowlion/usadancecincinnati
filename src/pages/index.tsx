import type { NextPage } from "next";
import Image from "next/image";
import { BoardMember, boardMembers } from "../lib/data";

function getBoardMembers(year: number) {
  return String(year) in boardMembers ? boardMembers[String(year)] : [];
}

const HomePage: NextPage = () => {
  const year = new Date().getFullYear();
  const now = new Date().getTime();
  const winterBallDate = new Date("2021-12-11").getTime();

  return (
    <div className="container py-5">
      <h1 className="text-center mb-5">
        Your connection to Ballroom Dancing in the Tri-State area.
      </h1>
      <div className="row">
        <aside className="col-12 col-md-4">
          <div className="text-center text-md-start">
            <h2>Current Board Members:</h2>
            <ul>
              {getBoardMembers(year).map(({ role, name }: BoardMember) => (
                <li key={name}>
                  {role} - {name}
                </li>
              ))}
            </ul>
          </div>
        </aside>
        <article className="col-12 col-md-8">
          {winterBallDate > now && (
            <Image
              src="/flyer.png"
              alt="Winter Ball 2021 Flyer"
              width={400}
              height={600}
              layout="responsive"
            />
          )}
        </article>
      </div>
    </div>
  );
};

export default HomePage;
