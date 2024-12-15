"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Breadcrumb() {
	const pathSegments = ["/", ...usePathname().split("/").filter((segment) => segment)];

  return (
    <nav aria-label="breadcrumb">
      {pathSegments.map((segment, index) => {
        const href = "/" + pathSegments.slice(1, index + 1).join("/");
        return (
          <span key={index}>
            {index === 0 ? <Link href="/">home</Link> :
              <>{" / "}<Link href={href}>{segment}</Link></>
            }
          </span>
        );
      })}
    </nav>
  );
}