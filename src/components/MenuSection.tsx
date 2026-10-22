"use client";

import {
  forwardRef,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
  type CSSProperties,
  type ReactElement,
  type ReactNode,
} from "react";
import HTMLFlipBook from "react-pageflip";
import { menuCategories, contact, type MenuCategory } from "@/data/site";
import Image from "next/image";
/* ---------- helpers ---------- */
const MAX_PER_PAGE = 7; 

type CategoryPageData = {
  category: MenuCategory;
  items: MenuCategory["items"];
  part: number;
  parts: number;
};

function buildPages(limit?: number): CategoryPageData[] {
  const pages: CategoryPageData[] = [];
  menuCategories.forEach((category) => {
    const all = limit ? category.items.slice(0, limit) : category.items;
    const parts = Math.ceil(all.length / MAX_PER_PAGE) || 1;
    const size = Math.ceil(all.length / parts);
    for (let p = 0; p < parts; p++) {
      pages.push({
        category,
        items: all.slice(p * size, (p + 1) * size),
        part: p + 1,
        parts,
      });
    }
  });
  return pages;
}

/* ---------- decorations ---------- */
const Corners = () => (
  <>
    <i className="fb-corner tl" />
    <i className="fb-corner tr" />
    <i className="fb-corner bl" />
    <i className="fb-corner br" />
  </>
);

const Ornament = () => (
  <div className="fb-ornament" aria-hidden>
    <span />
    <svg viewBox="0 0 24 24" width="18" height="18">
      <path
        fill="currentColor"
        d="M12 2l2.4 6.6L21 9l-5 4.4L17.5 20 12 16.5 6.5 20 8 13.4 3 9l6.6-.4z"
      />
    </svg>
    <span />
  </div>
);

const Emblem = () => (
  <svg className="fb-emblem" viewBox="0 0 100 100" aria-hidden>
    <circle cx="50" cy="50" r="46" fill="none" stroke="currentColor" strokeWidth="1.5" />
    <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="0.6" strokeDasharray="2 3" />
    <path d="M30 30l6-9 7 7 7-11 7 11 7-7 6 9z" fill="currentColor" />
    <g stroke="currentColor" strokeWidth="3" strokeLinecap="round" fill="none">
      <path d="M38 48v26M34 48v9a4 4 0 0 0 8 0v-9" />
      <path d="M62 48c-5 3-5 12 0 15v11" />
    </g>
  </svg>
);

/* ---------- page wrapper (required by react-pageflip) ---------- */
type PageProps = {
  children: ReactNode;
  className?: string;
  hard?: boolean;
};

const Page = forwardRef<HTMLDivElement, PageProps>(function Page(
  { children, className = "", hard },
  ref
) {
  return (
    <div ref={ref} className={`fb-page ${className}`} data-density={hard ? "hard" : "soft"}>
      {children}
    </div>
  );
});

/* ---------- menu row ---------- */
function Row({
  item,
  cols,
  gridVars,
  last,
}: {
  item: MenuCategory["items"][number];
  cols: string[];
  gridVars: CSSProperties;
  last: boolean;
}) {
  const rowClass = `menus d-flex${last ? " border-bottom-0" : ""}`;
  const bg = { backgroundImage: `url(/images/${item.image})` };
  const badge = item.badge && <em className="menu-badge">{item.badge}</em>;

  if (item.sizes) {
    return (
      <div className={rowClass}>
        <div className="menu-img img" style={bg} />
        <div className="text">
          <div className="sized-line" style={gridVars}>
            <h3>
              {item.name}
              {badge}
            </h3>
            <div className="size-prices">
              {cols.map((c, k) => (
                <div className="size-cell" key={c}>
                  <small>{c}</small>
                  <span className="price">{item.sizes![k] || "—"}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={rowClass}>
      <div className="menu-img img" style={bg} />
      <div className="text">
        <div className="d-flex align-items-center">
          <div className="one-half">
            <h3>
              {item.name}
              {badge}
            </h3>
          </div>
          <div className="one-forth">
            <span className="price">{item.price}</span>
          </div>
        </div>
        {item.details && <p>{item.details}</p>}
      </div>
    </div>
  );
}

/* ---------- category page ---------- */
function CategoryPage({ data, number, side }: { data: CategoryPageData; number: number; side: "left" | "right" }) {
  const { category, items, part, parts } = data;
  const cols = category.sizeColumns ?? [];
  const gridVars = { "--cols": cols.length } as CSSProperties;

  return (
    <div className={`fb-inner fb-${side}${category.showSizeHeader ? " has-head" : ""}`}>
      <Corners />

      <div className="fb-title">
        <span className={`fb-title-icon ${category.iconLeft}`} />
        <div className="heading-menu text-center">
          <h3>{category.title}</h3>
          {parts > 1 && (
            <small className="fb-part">
              {part} / {parts}
            </small>
          )}
        </div>
        <span className={`fb-title-icon ${category.iconRight}`} />
      </div>
      <Ornament />

      {category.showSizeHeader && (
        <div className="size-head" style={gridVars}>
          <div className="size-prices">
            {cols.map((c) => (
              <span key={c}>{c}</span>
            ))}
          </div>
        </div>
      )}

      <div className="fb-list">
        {items.map((item, i) => (
          <Row key={item.name} item={item} cols={cols} gridVars={gridVars} last={i === items.length - 1} />
        ))}
      </div>

      {category.note && part === parts && <p className="menu-note">{category.note}</p>}

      <span className="fb-num">
        <b>✦</b> {number} <b>✦</b>
      </span>
    </div>
  );
}

/* ---------- main ---------- */
export default function MenuSection({ limit }: { limit?: number }) {
  const book = useRef<any>(null);
  const [current, setCurrent] = useState(0);

  const pages = useMemo(() => buildPages(limit), [limit]);


  const FIRST_CATEGORY_INDEX = 2;
  const totalPages = FIRST_CATEGORY_INDEX + pages.length + 2;
  const needsFiller = totalPages % 2 !== 0;
  const total = totalPages + (needsFiller ? 1 : 0);

  const toc = useMemo(() => {
    const map = new Map<string, number>();
    pages.forEach((p, i) => {
      if (!map.has(p.category.title)) map.set(p.category.title, FIRST_CATEGORY_INDEX + i);
    });
    return Array.from(map.entries());
  }, [pages]);

  const goTo = useCallback((i: number) => book.current?.pageFlip().flip(i), []);
  const next = useCallback(() => book.current?.pageFlip().flipNext(), []);
  const prev = useCallback(() => book.current?.pageFlip().flipPrev(), []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [next, prev]);

  const progress = Math.min(100, Math.round(((current + 1) / total) * 100));

  
  const orderSide = (FIRST_CATEGORY_INDEX + pages.length) % 2 === 1 ? "left" : "right";

  const bookPages = [
    /* ===== Front cover ===== */
    <Page key="front" hard className="fb-cover">
      <div className="fb-cover-frame">
        <Corners />
        <div className="fb-cover-inner">
     <Image
       src="/images/logo/logo.png"
       alt="Ashtar Mishoo"
       width={70}
       height={75}
       priority
       className="navbar-logo"
     />
          <span className="fb-cover-sub">Welcome to</span>
          <h2>Ashtar Mishoo</h2>
          <div className="fb-cover-line" />
          <p>Our Menu</p>
          <span className="fb-cover-tag">Pizza · Shawarma · Chicken · Burger</span>
          <small>Drag the corner or press Next →</small>
        </div>
      </div>
    </Page>,

    /* ===== Contents ===== */
    <Page key="toc" className="fb-left-page">
      <div className="fb-inner fb-left">
        <Corners />
        <div className="fb-title">
          <span className="fb-title-icon flaticon-breakfast" />
          <div className="heading-menu text-center">
            <h3>Contents</h3>
          </div>
          <span className="fb-title-icon flaticon-burger" />
        </div>
        <Ornament />

        <ul className="fb-toc">
          {toc.map(([title, index]) => {
            const cat = menuCategories.find((c) => c.title === title)!;
            return (
              <li key={title}>
                <button type="button" onClick={() => goTo(index)}>
                  <span className={`fb-toc-icon ${cat.iconLeft}`} />
                  <span className="fb-toc-name">{title}</span>
                  <span className="fb-toc-dots" />
                  <span className="fb-toc-page">{index}</span>
                </button>
              </li>
            );
          })}
        </ul>

        <p className="fb-toc-hint">Tap a category to jump straight to it</p>
      </div>
    </Page>,

    /* ===== Category pages ===== */
    ...pages.map((data, i) => {
      const index = FIRST_CATEGORY_INDEX + i;
      const side = index % 2 === 1 ? "left" : "right";
      return (
        <Page key={`${data.category.title}-${data.part}`}>
          <CategoryPage data={data} number={index} side={side} />
        </Page>
      );
    }),

    /* ===== Order page ===== */
    <Page key="order">
      <div className={`fb-inner fb-order fb-${orderSide}`}>
        <Corners />
        <div className="fb-title">
          <span className="fb-title-icon flaticon-pizza" />
          <div className="heading-menu text-center">
            <h3>Order Now</h3>
          </div>
          <span className="fb-title-icon flaticon-chicken" />
        </div>
        <Ornament />

        <div className="menu-cta text-center">
          <a href={contact.phoneHref}>
            <span>Call us</span>
            <strong>{contact.phone}</strong>
          </a>
        </div>

        <ul className="fb-info">
          <li>
            <svg viewBox="0 0 24 24" width="20" height="20">
              <path fill="currentColor" d="M12 2a10 10 0 100 20 10 10 0 000-20zm1 5v5.4l4 2.3-.8 1.3L11 13V7z" />
            </svg>
            <span>{contact.hours}</span>
          </li>
          <li>
            <svg viewBox="0 0 24 24" width="20" height="20">
              <path fill="currentColor" d="M12 2a7 7 0 00-7 7c0 5 7 13 7 13s7-8 7-13a7 7 0 00-7-7zm0 9.5A2.5 2.5 0 119.5 9 2.5 2.5 0 0112 11.5z" />
            </svg>
            <span>{contact.address}</span>
          </li>
        </ul>

        <a className="fb-map-btn" href={contact.mapLink} target="_blank" rel="noreferrer">
          Get directions
        </a>
      </div>
    </Page>,

  
    needsFiller ? (
      <Page key="filler">
        <div className="fb-inner fb-left">
          <Corners />
          <div className="fb-filler">
            <Emblem />
            <p>Fresh · Tasty · Made with love</p>
          </div>
        </div>
      </Page>
    ) : null,

    /* ===== Back cover ===== */
    <Page key="back" hard className="fb-cover">
      <div className="fb-cover-frame">
        <Corners />
        <div className="fb-cover-inner">
            <Image
              src="/images/logo/logo.png"
              alt="Ashtar Mishoo"
              width={70}
              height={75}
              priority
              className="navbar-logo"
            />
          <h2>Thank You</h2>
          <div className="fb-cover-line" />
          <p>See you soon!</p>
          <span className="fb-cover-tag">{contact.address}</span>
        </div>
      </div>
    </Page>,
  ].filter(Boolean) as ReactElement[];

  return (
    <section className="ftco-section menu-fancy flipbook-section">
      <div className="container">
        <div className="row justify-content-center mb-4">
          <div className="col-md-7 text-center heading-section">
            <span className="subheading">Specialties</span>
            <h2 className="mb-2">Our Menu</h2>
          </div>
        </div>

        <div className="flipbook-wrap">
          {/*
            `key` forces a clean remount if the number of pages changes
            (e.g. when `limit` changes), since react-pageflip builds its
            page list once on mount.
          */}
          <HTMLFlipBook
            key={bookPages.length}
            ref={book}
            width={520}
            height={760}
            size="stretch"
            minWidth={300}
            maxWidth={560}
            minHeight={520}
            maxHeight={820}
            showCover
            drawShadow
            maxShadowOpacity={0.45}
            flippingTime={1100}
            usePortrait
            startPage={0}
            startZIndex={0}
            autoSize
            clickEventForward
            useMouseEvents
            swipeDistance={30}
            showPageCorners
            disableFlipByClick
            mobileScrollSupport={false}
            onFlip={(e: any) => setCurrent(e.data)}
            className="flipbook"
            style={{}}
          >
            {bookPages}
          </HTMLFlipBook>
        </div>

        {/* ===== Controls ===== */}
        <div className="flipbook-controls">
          <button type="button" className="fb-btn" onClick={prev} disabled={current === 0} aria-label="Previous page">
            <svg viewBox="0 0 24 24" width="18" height="18"><path fill="currentColor" d="M15.4 5.4L14 4l-8 8 8 8 1.4-1.4L8.8 12z" /></svg>
            Prev
          </button>

          <div className="fb-progress" aria-hidden>
            <div className="fb-progress-bar" style={{ width: `${progress}%` }} />
            <span>
              {Math.min(current + 1, total)} / {total}
            </span>
          </div>

          <button type="button" className="fb-btn" onClick={next} disabled={current >= total - 1} aria-label="Next page">
            Next
            <svg viewBox="0 0 24 24" width="18" height="18"><path fill="currentColor" d="M8.6 5.4L10 4l8 8-8 8-1.4-1.4L15.2 12z" /></svg>
          </button>
        </div>
      </div>
    </section>
  );
}