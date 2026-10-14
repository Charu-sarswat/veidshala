import React from "react";
import Link from "next/link";

export default function Breadcrumb() {
  return (
    <nav aria-label="Breadcrumb">
      <ol className="flex items-center space-x-2 text-[12.5px] font-normal">
        <li>
          <Link
            href="/"
            className="text-[#A3733F] transition-colors hover:text-[#0E3528]"
          >
            Home
          </Link>
        </li>
        <li className="text-[#9FA9A2]">/</li>
        <li className="text-[#516157] font-normal" aria-current="page">
          Health Journal
        </li>
      </ol>
    </nav>
  );
}
