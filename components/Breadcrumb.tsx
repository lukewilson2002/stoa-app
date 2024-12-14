"use client";

import { usePathname } from "next/navigation";

export default function Breadcrumb() {
	const pathSegments = ["/", ...usePathname().split("/").filter((segment) => segment)];

  return (
    <span>
      {pathSegments.map((segment, index) => {
        const href = "/" + pathSegments.slice(1, index + 1).join("/");
        return (
          <span key={index}>
            {index === 0 ? <a href="/">home</a> :
              <>{" / "}<a href={href}>{segment}</a></>
            }
          </span>
        );
      })}
    </span>
  );
}