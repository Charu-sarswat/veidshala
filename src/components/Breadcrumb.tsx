import React from "react";
import Link from "next/link";

export default function Breadcrumb() {
  return (
    <nav aria-label="Breadcrumb">
      <ol className="flex items-center space-x-2 text-[12.5px] font-normal">
        <li>
          <Link
            href="/home"
            className="text-[#A58351] transition-colors hover:text-[#123E30]"
          >
            Home
          </Link>
        </li>
        <li className="text-[#9FA9A2]">/</li>
        <li className="text-[#62645F] font-normal" aria-current="page">
          Health Journal
        </li>
      </ol>
    </nav>
  );
}
