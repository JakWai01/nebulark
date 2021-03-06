import Link from "next/link";
import React from "react";

function Home() {
  return (
    <>
      <h1>Nebulark</h1>

      <nav>
        <ul>
          <li>
            <Link href="/examples/compute">Compute Examples</Link>
          </li>
          <li>
            <Link href="/examples/networking">Networking Examples</Link>
          </li>
          <li>
            <Link href="/examples/discovery">Discovery Examples</Link>
          </li>
          <li>
            <Link href="/mission-control/control">Mission Control</Link>
          </li>
          <li>
            <Link href="/spark-dashboard/dashboard">Spark Dashboard</Link>
          </li> 
          <li>
            <Link href="/ion/ion">Ion</Link>
          </li> 
          <li>
            <Link href="/examples/webTorrent">WebTorrent</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Home;
