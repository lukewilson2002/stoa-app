"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

interface NavLinksProps {
  id: number;
  max: number;
}

const NavLinks = ({ id, max }: NavLinksProps) => {
  const router = useRouter();

  const prevIndex = id - 1;
  const nextIndex = id + 1;
  const hasPrev = prevIndex >= 0;
  const hasNext = nextIndex < max;
  const prev = `/quotes/${prevIndex}`;
  const next = `/quotes/${nextIndex}`;

  useEffect(() => {
    const handleKeydown = (event: KeyboardEvent) => {
      if (event.key === "ArrowLeft" && hasPrev) {
        router.replace(prev);
      } else if (event.key === "ArrowRight" && hasNext) {
        router.replace(next);
      }
    };

    document.addEventListener("keydown", handleKeydown);
    return () => document.removeEventListener("keydown", handleKeydown);
  }, []);

  return (
    <nav>
      <ul className="flex justify-between">
        <li>
          <Link className={hasPrev ? "" : "text-gray-300"} href={prev} aria-disabled={!hasPrev}>&lt; prev</Link>
        </li>
        <li>
          <div>
            <Link href="/quotes">index</Link>
            <Link className="ml-5" href={`/quotes/${Math.floor(Math.random()*max)}`}>random</Link>
          </div>
        </li>
        <li>
          <Link className={hasNext ? "" : "text-gray-300"} href={next} aria-disabled={!hasNext}>next &gt;</Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavLinks;
